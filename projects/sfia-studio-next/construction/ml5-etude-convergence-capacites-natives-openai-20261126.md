# ML5 — Étude architecturale approfondie : capacités natives OpenAI et intégration à Studio Next

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 (complétion 2026-11-26T18:45Z) |
| Cycle | **6 — Architecture technique** · CRITICAL · DOC |
| Mode | **READ-ONLY PRODUCT** · **AUCUNE IMPLÉMENTATION** |
| Mandat | Complet 14 sections — prévaut sur le mandat tronqué |
| HEAD docs | *(commit documentaire de cette complétion)* |
| Candidat code préservé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
| Web tree préservé | `5a1289fcfa26b1963f53ed1364dbd842e771e46c` |
| BUILD_ID | `Le9pyy4fbPKT_m0YlplAr` |
| SDK | `openai@7.50.0` · `@openai/agents@0.21.0` · `@openai/agents-openai@0.21.0` |
| Posture | **Éclairer Morris/ChatGPT** — aucune décision définitive |
| Statut | **STUDY COMPLETED — OPTIONS FOR ARBITRATION** |

---

## 0. Révisions par rapport au premier dossier (handoff `7ad34bbb`)

| Conclusion v1 | Statut v2 | Motif |
|---|---|---|
| Couverture centrée frontier/FinOps/WEB | **Élargie** | Mandat exige A–E (tracing, Admin costs, Decisions, doc intel, audio, Agents API) |
| `tool_usage.web_search.num_requests` = finding central | **Conservée** | Toujours structurante pour hosted FinOps |
| Option A3 hosted | **Conservée comme option**, non décision | Approfondie §A3 |
| `return_token_budget` | **Révisée** | Présente dans docs WEB ; **absente** des `.d.ts` 7.50 inspectés → API≠SDK |
| Computer-use / Cursor C1 | **Révisée** | Comparaison E1/E2 sans présupposer conservation Cursor |
| Decisions API | **Ajoutée** | Présente dans SDK 7.50 (`client.decisions`) — absente du v1 |
| Audio / dictée | **Ajoutée** | Orientation produit Morris — obligatoire |
| Agents API hébergée | **Ajoutée** | Distincte du Agents SDK JS |
| Tracing désactivé | **Ajoutée** | `setTracingDisabled(true)` constaté AS-IS |

**Question directrice (conservée) :** si ces capacités avaient été connues avant construction, aurions-nous conçu autrement ?

---

## 1. Cartographie AS-IS Studio Next (candidat `c574d262`)

### 1.1 Couches

```
Pilote UX (conversation, FinOps, visionneuse)
        │
D3 Conducteur / Work / Policy / Admission
        │
Nora Adapter ──► @openai/agents run() ──► OpenAI Responses (fetch frontier)
        │                 │
   Outils Studio     Tracing DISABLED
   (D4/Git/WEB/D8)
        │
Frontière emission (ALS, campagnes, input_tokens count, max_*)
        │
FinOps ledger PG + OBS local
        │
D6 décisions · D4 journal · D9 Git · PDF pdfjs
```

### 1.2 Propriétaires techniques (chemins absolus projet)

| Domaine | Fichiers pivots |
|---|---|
| Frontière | `web/src/domains/conversation/provider-emission-frontier.ts` |
| Nora / SDK | `web/src/domains/conversation/nora-adapter.ts` (`setTracingDisabled(true)` L871–872) |
| Conducteur | `cognitive-conductor.ts`, `cognitive-work.ts`, `cognitive-policy.ts`, `cognitive-resources/*` |
| FinOps | `usage-accounting.ts`, `domains/finops/usage-*.ts`, routes `/api/finops/*` |
| WEB | `public-web-search-frontier.ts`, `web-egress-guard.ts`, `web-public-query-authority.ts`, `web-search-tools.ts` (hosted détaché) |
| D4 recherche | `domains/knowledge/journal.ts` (`searchJournalSubjects` lexical `includes`) |
| PDF | `pdf-extract-server.ts`, `pdf-viewer-authorization.ts` |
| OBS | `web/src/lib/observability.ts` |

### 1.3 Caractère architectural

**Plan de contrôle Studio épais** autour d’une **surface d’invocation SDK mince** (`Agent` + `run()`). Les invariants (lane, D6, SoT PG, FinOps, egress) ne sont pas délégués au fournisseur aujourd’hui.

---

## 2. Fiches architecturales A — Socle fournisseur, OBS, FinOps

### A1. Tracing natif Agents SDK

#### A. Existant Studio
- Tracing SDK **explicitement désactivé** : `configureSdkTracingSafe()` → `agents.setTracingDisabled(true)` (`nora-adapter.ts` ~869–873).
- Instrumentation custom : OBS (`emitObs`, request/operation/attempt ids), frontier HTTP attempts, FinOps correlation rows.
- Besoin couvert : diagnostic lane-safe sans fuite prompts ; causalité métier D3/OBS.

#### B. Capacité native
- SDK `@openai/agents-core` : `TracingProcessor`, `BatchTraceProcessor`, `addTraceProcessor`, exporters (`ConsoleSpanExporter`, `OpenAITracingExporter` dans package).
- Spans : agent/run/generation/tool (types `tracing/*`).
- Facturation : dépend de l’exporteur (local = gratuit ; OpenAI exporter = données chez fournisseur + éventuel coût stockage — **NON OBSERVÉ** sans doc pricing traces dédiée dans cette étude).
- Persistance : selon processor (mémoire, batch export).

#### C. Scénarios
1. **KEEP** tracing OFF + OBS custom (AS-IS).
2. **ADAPT** tracing ON local-only (processor filtrant, pas d’export OpenAI) + OBS métier.
3. **HYBRID** tracing ON + export gouverné DEV-only.
4. **REPLACE** partiel de logs mid-turn tool par spans natifs.

#### D. Valeur produit
- Nora : meilleur diagnostic d’échecs d’outils / tours.
- Pilote : pas d’UX directe ; constructeur gagne en MTTR.
- Nouveau : timeline unifiée génération↔outil.

#### E. Comparaison
| Critère | OFF+OBS | Tracing local | Export OpenAI |
|---|---|---|---|
| Confidentialité | Meilleure | Bonne si filtre | Risque prompts |
| Couverture SDK | Faible sur interne Agents | Forte | Forte |
| Causalité D3 | Forte (custom) | À corréler | À corréler |
| Maintenance | Double instrumentation | Réduit custom | Moins de code local |

#### F. Préconisation (non décision)
**ADAPT — tracing local filtrant en DEV/calibration**, OBS métier **KEEP** comme SoT causale. Ne pas activer export OpenAI sans ADR DATA-01. Condition : processor qui redacte inputs/outputs.

---

### A2. Usage & Costs API (Admin)

#### A. Existant
- Estimations Studio via `tariff-catalog.ts` + `usage` Responses/Agents.
- UNKNOWN/PARTIAL honnêtes ; pas de rapprochement facture.
- Permissions runtime : Responses read/write, models — **pas** Admin key.

#### B. Natif
- `GET /v1/organization/costs` et usage buckets — **Admin API key** distincte (`client.admin`, `OPENAI_ADMIN_KEY`) — présent dans SDK 7.50.
- Granularité : jour, project_id, api_key_id, line_item, api_source (`agents_api` vs unlabeled).
- Devise USD ; latence batch quotidienne typique.
- **Hors runtime Nora** (Admin key ≠ project key).

#### C. Scénarios
1. KEEP estimations seules.
2. **BUILD** job lecture seule périodique (compte service Admin) → rapprochement FinOps Studio.
3. UI Pilote « écart estimation / facture org » (lecture).

#### D. Valeur
- Pilote/constructeur : confiance FinOps ; détection dérive tarifaire.
- Ne remplace pas attribution workId/projet Studio.

#### F. Préconisation
**BUILD différé (R1b)** — rapprochement **hors processus Nora**, clé Admin séparée, jamais dans navigateur. Estimations runtime **KEEP**. Ne pas rejeter pour « scope Admin manquant » : proposer configuration future.

---

### A3. Frontière fournisseur et WEB (approfondissement)

#### A. Existant
- Native count `input_tokens`, inject `max_output_tokens` / `max_tool_calls`, campagnes, refus ASSUMED_1.
- Hosted search **détaché** du agent privé ; worker isolé / tools Studio.
- G-WEB-PUBLIC **BLOCKED**.

#### B. Natif complémentaire
- `Response.tool_usage.web_search.num_requests` — recherches **facturables** a posteriori (SDK 7.50 `responses.d.ts` ~1022–1281).
- `max_tool_calls` — borne a priori built-in calls ≠ `num_requests`.
- `search_context_size`, `filters.allowed_domains`, `external_web_access` sur `web_search`.
- `return_token_budget` : **docs oui / types 7.50 non** → REST possible, SDK typé incomplet (**incertitude**).

#### C. Options (reprises + affinage)
| Id | Description |
|---|---|
| A1 | Gate fermé |
| A2 | Enveloppe = N×max_tool_calls |
| A3 | Pré-réserve max_tool_calls + post-commit num_requests + suspend si dépassement |
| A4 | Direct B1 only |

#### F. Préconisation
**Orientation technique forte vers A3** pour *si* Morris veut rouvrir WEB ; jusqu’au GO : **A1**. FinOps doit **ADOPT** `num_requests` même sous A1 (préparation). Simplifications custom possibles après ADOPT : compteurs hosted assumés, chemins preview.

---

### A4. Continuité Responses / sessions

#### A. Existant
- SoT : `cognitive_works` + acquis + reconstruction contexte.
- `previous_response_id` / `conversation` : supportés dans count payload frontier, **non SoT métier**.

#### B. Natif
- `previous_response_id`, Conversations API, `Responses.compact`, prompt cache, `background`, Agents `Session` / `OpenAIConversationsSession`.

#### C–F
**KEEP SoT D3**. Expérimenter **HYBRID** `previous_response_id` en DEV pour coût tokens (optimisation), jamais comme vérité reprise. `background` : **DEFER** (complexifie fencing D3). Sessions Agents SDK : **IGNORE as SoT**.

---

## 3. Fiches B — Cognition spécialisée

### B1. Decisions API

#### A. Existant
- Qualification sémantique / readiness via Responses + schémas (`semantic-qualification.ts`), pas d’endpoint Decisions.
- HumanDecision D6 = autorité Pilote — **hors OpenAI**.

#### B. Natif (SDK 7.50 **présent**)
- `client.decisions.create` — `POST /v1/decisions`.
- Modèle : **`gpt-6-luna` only** (docs 2026).
- Questions : `predicate` (probability), `choice`, `score` — jusqu’à 400 / requête.
- Input : texte, images, JSON, historique tool calls.
- Latency : revendiqué ~10× plus rapide que Responses pour questions bornées (doc produit OpenAI 22/10/2026).
- Pricing doc : input ~$0.10/MTok ; cached $0.01 ; **output tokens free** sur Decisions (annonce) — **vérifier page pricing avant GO**.
- Permissions : endpoint Decisions (candidate ; non observée sur clé DEV actuelle).

#### C. Intégration possible
1. KEEP Responses pour tout.
2. **ADAPT** — Nora/conducteur appelle Decisions pour micro-jugements (pertinence source, complétude, route) ; Responses pour synthèse.
3. REPLACE partiel de certains tours « classifier » Responses.

**Ne pas** : classifieur systématique ; transférer D6.

#### D. Valeur
- Nora : décisions bornées moins chères/latentes au sein d’un travail.
- Pilote : allocation plus fine (Luna Decisions vs Terra synthèse).
- Nouveau : scoring multi-critères parallèle.

#### F. Préconisation
**REUSE NATIVE / BUILD ressource cognitive « Decisions »** dans catalogue élargi — mobilisation **sémantique optionnelle**, admission serveur. Preuve future : LIVE DEV comparatif latency/coût vs Responses sur oracles RoomBooking.

---

### B2. Politique cognitive étendue

#### A. Existant
- Catalogue Luna/Terra/Sol × effort ; admission fail-closed ; referential 51 lignes indicative.

#### B–F
Étendre le **modèle de ressource** (pas seulement LLM chat) :

| Type ressource | Exemple natif | Rôle |
|---|---|---|
| Génération | Terra/Sol Responses | Synthèse, rédaction |
| Décision bornée | Decisions/Luna | Predicate/choice/score |
| Recherche hosted | web_search | Découverte publique |
| Transcription | audio.transcriptions | Entrée Pilote |
| Exécution sandbox | Agents API | L2 candidate |

Conducteur propose ; admission autorise ; FinOps observe. **Aucune politique définitive** — ADR futur.

---

## 4. Fiches C — Intelligence documentaire

### C1. Recherche actuelle D4/D9

#### A. Existant
- `searchJournalSubjects` / `searchJournalDecisions` : charge bundle projet puis filtre **`String.includes` lexical** (`journal.ts` ~872+).
- Git : outils lecture + extraits ; PDF via pdfjs.
- Preuves : RoomBooking / Chantiers360 — consultation multi-fichiers fonctionne mais pertinence dépend de la requête lexicale et de la discipline Nora.

#### Limites
- Pas d’embedding ; relecture possible de large context ; homonymes ; pas de ranking sémantique.

### C2. Architectures de recherche (comparatif)

| # | Architecture | Ingestion | Recherche | Ranking | Citations | SoT |
|---|---|---|---|---|---|---|
| 1 | AS-IS lexical | PG D4 | includes | ordre natif | outils | D4 |
| 2 | Embeddings + PG | Job Studio → vecteurs PG | cosine + filtres | Studio | Studio | D4 + projection |
| 3 | Vector Stores OpenAI | Upload Files API | VS search API | OpenAI | IDs fichiers | **Risque 2e SoT** si mal borné |
| 4 | File Search hosted | VS + tool | model-driven | OpenAI | annotations | Idem |
| 5 | Hybride | D4 SoT + index dérivé | lexical ∪ sémantique | Studio rerank | Studio | **Index = projection** |

#### F. Préconisation
Comparer **1 vs 2 vs 5** en priorité. **3/4** seulement si index explicitement dérivé, rebuildable, versionné, révocable (DATA-01). Ne pas construire plusieurs moteurs permanents. Protocole futur : corpus Chantiers360/RoomBooking + oracles indépendants (rappel faits) + métriques recall@k / citations exactes.

### C3. Files API / vision / PDF

#### A. Existant
- pdfjs extract serveur ; visionneuse auth ; Git PDF text **BLOCKED corpus** ; BPMN scanné = SCANNED_NO_TEXT.

#### B. Natif
- Files API, input file/image dans Responses, vision modèles multimodaux, File Search.
- Pas un OCR exhaustif déterministe.

#### C–F
**HYBRID** : garder pdfjs pour extraction déterministe / pagination / droits ; **ADOPT** vision Responses pour schémas/scannés (BatiNova discriminant futur). Visionneuse/provenance/version **KEEP**. Génération d’images : **DEFER**. Vidéo : hors périmètre.

---

## 5. Fiches D — Interaction audio (obligatoire)

### D1. Audio Transcriptions (fichier / utterance)

#### A. Existant
- **NON IMPLÉMENTÉ** dans composer Studio (pas de micro/transcription produit).

#### B. Natif
- `client.audio.transcriptions.create` — modèles `gpt-transcribe`, legacy whisper/4o-transcribe (dépréciations annoncées → 2027-02-26).
- Formats json/text/srt/… ; streaming transcription events supportés dans types.
- Pricing : selon modèle (consulter pricing page au GO).
- Permission : Audio API scope candidat.

#### C. Parcours candidat UX
`Micro → enregistrement → POST transcription (serveur) → texte éditable composer → confirmation Pilote → envoi message Nora`.

Contrat : transcription ≠ HumanDecision ≠ autorisation effet.

### D2. Realtime transcription / voice

#### B. Natif
- Realtime API GA : WebRTC/WebSocket, ephemeral `client_secrets`, modèles realtime ; transcription live events.
- Distinct de **GPT-Live** full-duplex délégué.
- Agents `RealtimeAgent` / `RealtimeSession` (`@openai/agents/realtime` — vérifier package installé ; **non utilisé** AS-IS).

#### Comparaison D1 vs D2
| | Transcription fichier | Realtime |
|---|---|---|
| Qualité | Souvent meilleure offline | Variable + VAD |
| Latence | Post-utterance | Progressive |
| Coût | À la durée fichier | Session continue |
| Navigateur | MediaRecorder simple | WebRTC + ephemeral key |
| Confidentialité | Upload audio serveur | Flux temps réel |
| Reprise/annulation | Simple | Session state |

#### F. Préconisation
**BUILD Lot audio** : démarrer par **D1** (dictée → édition → envoi). Realtime **DEFER** comme évolution. Clé serveur jamais dans le navigateur — **ephemeral tokens** uniquement. FinOps audio dédié. Conversation vocale bidirectionnelle : ultérieure.

### D3. Images
- Vision/compréhension : liée à C3.
- Génération images : **DEFER** (permission Image candidate seulement).
- Vidéo : hors périmètre.

---

## 6. Fiches E — Orchestration et réalisation technique

### E1. Agents API hébergée (≠ Agents SDK JS ≠ Computer Use)

#### B. Natif (docs + SDK beta)
- Docs : sessions, environments (`openai_hosted` sandbox), vaults, events, Codex harness.
- SDK 7.50 : `resources/beta/agents` (sessions/environments/automations) — **Beta header** `OpenAI-Beta: agents=v1`.
- Capacités : code exec, fichiers, MCP, network restricted, artifacts `/workspace/outputs`.
- Vaults : secrets hors sandbox via proxy hosts.
- Permissions : `api.agents.read/write` (docs quickstart).
- **Incertitudes** : tarification fine Agents API, SLA isolation, compat GitHub App Studio — **à lever avant adoption**.

#### Ne pas confondre
| Surface | Rôle |
|---|---|
| `@openai/agents` JS | Orchestration in-process Studio |
| Agents API hosted | Harness + sandbox OpenAI |
| Computer Use tool | Navigation UI distante |
| Code Interpreter tool | Outil Responses |

### E2. Articulation ML5 livraison 2

| Option | Mandat→preuves | Pour | Contre |
|---|---|---|---|
| L2-A Cursor (prévu) | Cursor SDK + D7/D8 | Contrôle worktree, preuves locales, processus SFIA | Deux vendors |
| L2-B Agents API complémentaire | Sandbox OpenAI pour tâches bornées | Moins d’ops locale | Données chez OpenAI ; vaults |
| L2-C Remplacement large Cursor | Agents API = bras D7 | Un vendor cognition+exec | Rupture gouvernance preuves Cursor ; process ChatGPT/Cursor externe **hors modification** |
| L2-D Mix | Cursor pour repo privé ; Agents API pour compute isolé | Flexibilité | Complexité double |

#### F. Préconisation
**Ne pas figer Cursor ni son remplacement.** Orientation d’étude : **L2-A conserve la trajectoire par défaut** ; **L2-B** comme chantier d’évaluation technique parallèle (POC lecture seule architecture + future LIVE sous GO). **L2-C** seulement si preuves d’équivalence D8/D9. Processus externe SFIA ChatGPT/Cursor **inchangé** par cette étude.

---

## 7. Matrice permissions OpenAI (candidates)

| Permission / surface | Endpoint | Capacité Studio | R/W | Minimale | Env | Identité | Données | Risque | Protection | Gate |
|---|---|---|---|---|---|---|---|---|---|---|
| api.responses.* | /v1/responses | Nora génération | RW | Actuelle | DEV/RECETTE | Project key | Prompts/contexte | Facturable | Frontier, lane | LIVE |
| input_tokens | /v1/responses/input_tokens | Bornes | W | Incluse Responses | DEV | Project | Payload | Faible/€? | Campagne count | LIVE |
| decisions | /v1/decisions | Micro-jugements | W | **Candidate** | DEV d’abord | Project | Preuves bornées | Nouveau € | Catalogue admission | GO + LIVE |
| audio.transcriptions | /v1/audio/* | Dictée | W | **Candidate** | DEV | Project | Audio biométrique potentiel | PRIVACY | Ephemeral, rétention courte | GO DATA |
| realtime client_secrets | /v1/realtime/* | Voice future | W | **Candidate** | DEV | Project+ephemeral | Audio live | Élevé | Pas de clé longue navigateur | GO |
| embeddings | /v1/embeddings | Index D4 | W | **Candidate** | DEV | Project | Texte documents | Fuite corpus | Projection dérivée | GO |
| files / vector_stores | /v1/files, /v1/vector_stores | RAG hébergé | RW | **Candidate** | DEV | Project | Corpus | 2e SoT | Rebuild/révocation | GO DATA |
| file_search tool | via Responses | Hosted RAG | W | Responses+files | DEV | Project | Passages | Citations | Allowlist | GO |
| web_search tool | via Responses | WEB public | W | Responses | DEV public | Project | Requêtes publiques | Fuite si mal isolé | D6/B1/A3 | G-WEB-PUBLIC |
| traces export | exporters Agents | Diag | W | Variable | DEV | — | Spans/prompts | Fuite | Filter local | ADR |
| admin usage/costs | /v1/organization/* | Rapprochement € | R | **Admin key** | OPS hors Nora | Admin SA | Agrégats € | Clé puissante | Jamais runtime Nora | GO OPS |
| agents API beta | /v1/agents/* | Sandbox L2 | RW | agents.read/write | DEV | Project beta | Code/fichiers | Isolation | Vaults, network restricted | GO L2 |
| images generate | Images API | Gen visuelle | W | **Hors** | — | — | — | — | — | DEFER |
| ALL | — | — | — | **INTERDIT** | — | — | — | — | — | — |

Permissions actuelles exactes de la clé DEV : **partiellement documentées historiquement** ; **non re-observées** ce cycle (READ-ONLY, pas d’appel).

---

## 8. Architecture cible candidate TO-BE (proposition)

```
                    ┌──────────── Pilote ────────────┐
                    │ Composer (+ dictée D1 future)   │
                    │ FinOps (estim. + rapprochement) │
                    └──────────────┬─────────────────┘
                                   │
                    ┌──────────────▼─────────────────┐
                    │ D3 Conducteur + catalogue       │
                    │  ressources: Generation |       │
                    │  Decision | Transcribe | Web |  │
                    │  (Exec L2)                      │
                    └──────────────┬─────────────────┘
           ┌───────────────────────┼───────────────────────┐
           ▼                       ▼                       ▼
   Responses/Agents JS      Decisions API           Audio/Files
   (synthèse, outils)       (jugements bornés)      (entrée Pilote)
           │                       │
           └──────────┬────────────┘
                      ▼
            Provider Frontier (KEEP)
            count / max_* / tool_usage
                      │
                      ▼
            Ledger FinOps Studio (KEEP)
            + Admin costs job (BUILD)
                      │
     ┌────────────────┼────────────────┐
     ▼                ▼                ▼
   D4 SoT PG     Index dérivé?     D6 Human
   (KEEP)        (optional 2/5)    (KEEP)
```

**Principe :** OpenAI = moteurs spécialisés ; Studio = gouvernance, SoT métier, autorité, attribution, UX.

---

## 9. Matrice globale de transformation

| Mécanisme actuel | Fichier/composant | Natif | Scénario cible | Resp. conservée | Class. | Gain | Risque | Dép. | Preuve future | Exit |
|---|---|---|---|---|---|---|---|---|---|---|
| Tracing OFF | nora-adapter L871 | Agents tracing | Local filter ON | OBS causale | ADAPT | Diag | Fuite si mal filtré | — | Spans DEV sans PII | ADR |
| OBS custom | observability.ts | — | KEEP | Causalité | KEEP | — | — | — | — | — |
| Estim. FinOps | tariff+usage | Admin costs | Rapprochement OPS | Attribution work | BUILD+KEEP | Confiance € | Admin key | Admin SA | Job dry-run | GO OPS |
| Count input | frontier | inputTokens.count | KEEP HYBRID | Campagne | REUSE NATIVE | Borne | RTT | — | LIVE done | — |
| Hosted ASSUMED | frontier | tool_usage.num_requests | A3 | D6/B1 | ADOPT+ADAPT | Unité € | Écart pré/post | WEB | LIVE tool_usage | Morris D-A |
| max_tool_calls | frontier | max_tool_calls | KEEP | Enveloppe | REUSE NATIVE | Borne a priori | ≠ facture | — | Deterministic | — |
| Reconstruct contexte | conductor/work | previous_response_id | HYBRID opt. | SoT D3 | ADAPT | Coût tokens | Mutabilité | — | A/B DEV | ADR B |
| Qualif sémantique tours | semantic-qualification | Decisions | Option ressource | D6 humain | BUILD | Latence/€ | Mauvaise appli | decisions scope | LIVE oracle | GO |
| searchJournal lexical | journal.ts | embeddings / VS / hybrid | Index dérivé | D4 SoT | DEFER→BUILD | Pertinence | 2e SoT | embeddings | Bench corpus | GO DATA |
| pdfjs extract | pdf-extract-server | vision/Files | HYBRID | Auth viewer | ADAPT | Scannés | Probabiliste | multimodal | BatiNova | — |
| Composer texte seul | UI | audio.transcriptions | Dictée D1 | Confirmation Pilote | BUILD | Accessibilité | Audio privacy | audio scope | UX+LIVE | GO |
| Realtime voice | — | Realtime API | Ultérieur | — | DEFER | — | Complexité | realtime | — | — |
| L2 Cursor prévu | D7 path | Agents API | Évaluer L2-B | Preuves D8 | DEFER | — | Vendor lock | agents beta | Arch+POC | GO L2 |
| Hosted web on private agent | web-search-tools détaché | web_search | KEEP isolation | Confidentialité | KEEP | — | Fuite | — | — | — |
| Computer use / image gen | — | tools | — | — | DEFER | — | — | — | — | — |

---

## 10. Macro-lots de construction candidats (challengés)

Hypothèse ChatGPT initiale (1 socle / 2 doc+cognition / 3 audio) : **globalement saine**, avec ajustements de dépendances.

### Lot R1 — Socle fournisseur honnête (OBS/FinOps/WEB/Frontier)
- **Résultat :** FinOps et bornes opposables ; option WEB gouvernée.
- **IN :** tool_usage, tracing local, Admin costs job design, A3 si GO, purge ASSUMED/preview.
- **OUT :** Decisions produit, audio, vector stores, L2.
- **Remplacements :** compteurs hosted assumés → num_requests.
- **Gates :** GO D-A ; pas de cutover RECETTE.
- **Suivant :** R2.

### Lot R2 — Cognition spécialisée + intelligence documentaire
- **Résultat :** Nora mobilise Decisions ; recherche projet plus pertinente.
- **IN :** ressource Decisions ; protocole bench embeddings/hybrid ; vision PDF hybride.
- **OUT :** audio UX ; Agents API prod.
- **Dépend de :** R1 FinOps pour mesurer coûts Decisions/embeddings.
- **Gates :** permission Decisions/embeddings ; DATA-01 si VS.
- **Suivant :** R3 ou L2 eval.

### Lot R3 — Dictée et transcription
- **Résultat :** Pilote dicte dans le composer.
- **IN :** D1 transcription + UX + FinOps audio + ephemeral si realtime plus tard.
- **OUT :** voice agent bidirectionnel.
- **Dépend de :** faible sur R2 ; peut **paralléliser** après R1 permissions audio.
- **Challenger vs hypothèse :** audio peut être R2bis si valeur Pilote prioritaire sur doc intel.

### Lot R2-L2-eval (parallèle documentaire/technique, pas delivery produit)
- Comparaison Cursor vs Agents API (E2) — **étude/POC borné**, sans engagement L2.

**Ordre recommandé :** R1 → (R3 // R2) selon priorité Morris valeur Pilote vs cognition ; L2-eval en parallèle doc.

---

## 11. Décisions Morris à instruire

1. **D-A** hosted WEB : A1/A2/A3/A4.
2. **D-Trace** : activer tracing local filtrant ?
3. **D-Admin-Costs** : créer clé Admin + job rapprochement ?
4. **D-Decisions** : admettre ressource Decisions dans catalogue DEV ?
5. **D-DocSearch** : autoriser chantier embeddings/hybrid (vs defer) ?
6. **D-Audio** : prioriser Lot dictée vs Lot doc intel ?
7. **D-L2** : trajectoire Cursor seule / +Agents API eval / autre ?
8. Permissions project : élargir scopes (decisions, audio, embeddings, agents) **sans ALL** ?
9. Reprise trajectoire RECETTE après quels lots ?

---

## 12. Limites de l’étude et preuves futures

| Limite | Impact |
|---|---|
| Pas d’appels API authentifiés | Permissions effectives et tarifs runtime NON OBSERVÉS |
| Pas de LIVE | tool_usage WEB, Decisions latency, audio qualité NON PROUVÉS |
| Docs vs SDK (`return_token_budget`) | Incertitude typage |
| Agents API pricing/SLA | Incomplets pour décision L2 |
| CKC cycle 6 candidate | Guidance non normative |

**Preuves futures par frontière :** LIVE DEV tool_usage ; LIVE Decisions vs Responses ; bench recherche corpus ; UX dictée ; POC Agents API sandbox lecture artifacts ; job Admin costs dry-run.

Disponibilité API ≠ SDK ≠ permission ≠ comportement prouvé.

---

## 13. Verdict d’étude

**ML5 NATIVE CAPABILITY INTEGRATION STUDY COMPLETED — ARCHITECTURE OPTIONS READY FOR MORRIS ARBITRATION.**

Aucune architecture déclarée validée. NOT ADOPTED. Candidat code/web/BUILD préservés. Trajectoire delivery suspendue. Livraison 2 non engagée.

---

## Annexe — Sources (extrait)

- SDK local : `openai/resources/decisions.d.ts`, `responses.d.ts` (tool_usage), `audio/*`, `admin/*`, `client.d.ts` ; `@openai/agents-core/dist/tracing/*` ; `nora-adapter.ts` L869–873 ; `journal.ts` searchJournalSubjects.
- Docs OpenAI (2026-11-26 consultation) : Decisions guide ; Agents API overview/environments/vaults ; Admin costs ; speech-to-text ; Realtime ; embeddings ; file search ; web search ; token counting.
- Handoffs : `7ad34bbb`, `29b0ae4c`.
- Contrats Next ref `8b334487` : allocation, conducteur, OBS, D4/D6.


---

## 14. Détail REPLACE / RETIRE (candidats)

### R-WEB-ASSUMED — Compteurs hosted assumés / ASSUMED_1
- **Périmètre remplacé :** estimation « 1 recherche = 1 tool call » / fallback ASSUMED.
- **Écart :** `max_tool_calls` ≠ `num_requests` ; A3 comble a posteriori.
- **Consommateurs :** frontier FinOps WEB, gates G-WEB-PUBLIC.
- **Transition :** instrumenter lecture `tool_usage` → dual-run → bascule projection FinOps → retirer ASSUMED.
- **Non-régression :** tests fake transport tool_usage ; LIVE DEV num_requests.
- **Rollback :** réactiver ASSUMED + gate A1.
- **Condition retrait :** GO Morris D-A + LIVE prouvé + projection FinOps alignée.

### R-PREVIEW-HOSTED — Chemins preview hosted si redondants
- **Périmètre :** preview/estimate custom hors native count.
- **Écart :** native count couvre input ; preview output reste utile si non garanti.
- **Transition :** inventaire appels preview → garder seulement ceux sans équivalent natif.
- **Condition :** après stabilisation A3/count.

### R-CLASSIFIER-RESPONSES (optionnel) — Tours Responses purement classificatoires
- **Périmètre :** appels Responses dont la seule sortie est label/score.
- **Écart :** Decisions n’écrit pas de prose ni d’outils.
- **Consommateurs :** semantic-qualification / readiness helpers.
- **Transition :** feature-flag ressource Decisions ; dual-path DEV ; bascule si métriques OK.
- **Rollback :** flag OFF.
- **Condition :** permission + LIVE oracle + FinOps Decisions.

### R-TRACING-CUSTOM-MID (partiel)
- **Périmètre :** logs mid-turn redondants avec spans Agents (pas OBS causale).
- **KEEP** request/operation/attempt ids et FinOps rows.
- **Condition :** tracing local ON + corrélation span↔OBS.

**Aucun RETIRE large du plan de contrôle Studio** n’est recommandé : frontière, D3 SoT, D6, ledger FinOps attribution, isolation WEB privée restent nécessaires même avec natifs.

---

## 15. Séquences cibles (candidats)

### 15.1 Emission Responses (KEEP + enrichissement)
```
Pilote → API Studio → Conducteur (admission)
  → Frontier beginCampaign
  → POST /responses/input_tokens (count)
  → Agent.run / Responses.create (+ max_output_tokens, max_tool_calls)
  → Response (+ usage, tool_usage?)
  → Ledger FinOps (tokens + num_requests si présent)
  → OBS emit
```

### 15.2 Décision bornée (BUILD candidat)
```
Conducteur détecte besoin micro-jugement
  → Admission ressource Decisions
  → POST /v1/decisions (questions predicate/choice/score)
  → Probabilités → acquis D4 / branchement work
  ≠ HumanDecision D6
```

### 15.3 Dictée D1 (BUILD candidat)
```
Pilote Micro → MediaRecorder
  → Upload audio → API Studio (auth session)
  → POST /v1/audio/transcriptions (clé serveur)
  → Texte dans composer (éditable)
  → Confirmation → message Nora (comme texte)
```

### 15.4 L2 eval Agents API (DEFER POC)
```
Mandat D7 → (option) Agents API session sandbox
  → artifacts / outputs
  → Ingestion preuves D8 Studio
  → Acceptation humaine D6
```

---

## 16. Impacts DATA-01 / persistances externes nouvelles

| Persistance | Propriétaire | Arbitrage Morris |
|---|---|---|
| Spans export OpenAI | OpenAI | Autoriser ou local-only |
| Admin costs cache | Studio OPS | OK si agrégats |
| Decisions (éphémère) | OpenAI request | Pas de SoT |
| Audio uploads | OpenAI + Studio temp | Rétention courte, consentement |
| Vector stores / Files | OpenAI | Projection dérivée + révocation |
| Agents vaults/sessions | OpenAI | Secrets vs vault Studio |
| Realtime sessions | OpenAI | Ephemeral only |

---

## 17. Alternatives globales (synthèse)

| Stratégie | Description | Quand |
|---|---|---|
| S0 Statu quo | Garder plan contrôle épais ; natifs = lecture passive | Si risque fournisseur prioritaire |
| S1 Convergence contrôlée | R1→R2/R3 ; natifs comme ressources | **Orientation étude** |
| S2 Native-first agressif | Remplacer frontière/D4 search/L2 par OpenAI | Haut risque SoT/DATA — non recommandé sans preuves |
| S3 Dual-vendor durable | OpenAI cognition + Cursor L2 + Admin FinOps | Compatible S1 |

---

## 18. Capitalisation CKC cycle 6 (candidate, non normative)

- Distinguer **API disponible / SDK typé / permission / comportement prouvé**.
- Index dérivé ≠ SoT.
- Admin costs hors runtime agent.
- Transcription ≠ autorité.
- Agents SDK ≠ Agents API.
