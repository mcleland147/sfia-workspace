# SFIA Review Pack — FULL
# Studio Next · R5 · ML5 · Cycle 6 Architecture · CRITICAL · DOC
# Date: 2026-11-26 19:46  (2026-11-26T18:46Z)
# Mode: READ-ONLY PRODUCT · STUDY COMPLETION
# Decision: REQUIRED · PUBLISH-IN-CYCLE · L3 handoff

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial mandat | `d39df2861eae800797e3047b017cb422bd461dfe` |
| HEAD après commit docs | `ae4aff22b023fea00be5ae1ec98c903d5fbbf145` |
| Merge-base / main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Candidat code préservé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
| Web tree | `5a1289fcfa26b1963f53ed1364dbd842e771e46c` (attendu `5a1289fc…`) |
| BUILD_ID | `Le9pyy4fbPKT_m0YlplAr` |
| Blob dossier | `bb7995457ea3e40faa85968f7726e381878d6e97` |
| Staged produit | aucun |
| Worktree produit | inchangé (seul `.tmp-sfia-review` + dossier docs commités) |
| Push projet | **NON** |
| SDK | openai@7.50.0 · @openai/agents@0.21.0 · @openai/agents-openai@0.21.0 |

```
M .tmp-sfia-review/chatgpt-review.md
```

**Préservation candidat :** web tree HEAD == `5a1289fcfa26b1963f53ed1364dbd842e771e46c` · aucune modif `web/src` · BUILD_ID inchangé.

---

## 2. Sources examinées

### SFIA v2.6 (main@997897fd)
- cycle-routing-guide, cycle-execution-template, rules-and-guardrails, operating-model, validation-checklist, engineering-principles, CKC 03-architecture-technique
- Routing blob 3315bbae… · Template f4fdb488…

### Next (main + candidat docs 8b334487 + local)
- SEF, roadmap, naming, ADR R4 exit, ADR qualification sémantique
- cadrage vision, cadrage-r4, OBS, conducteur, allocation WEB/FinOps
- CF : allocation, connaissance, décisions, git, préparation, résultats
- construction contrat acceptation cognition

### Étude / handoffs
- Dossier v1 + complétion v2 : `projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md`
- Handoffs `7ad34bbb`, `29b0ae4c`

### Code AS-IS (lecture)
- `nora-adapter.ts` setTracingDisabled(true) ~L869–873
- `provider-emission-frontier.ts`, FinOps, WEB tools
- `journal.ts` searchJournalSubjects lexical
- SDK types : decisions.d.ts, responses tool_usage, audio, admin, beta/agents, tracing

### OpenAI public (2026-11-26)
- developers.openai.com API docs/reference/pricing
- Decisions API, Agents API, Admin costs, STT, Realtime, embeddings, file search, web search
- openai.github.io/openai-agents-js tracing
- **Aucun appel authentifié / facturable**

---

## 3. Couverture des capacités (checklist mandat §7)

| Id | Capacité | Fiche intégration | Verdict couverture |
|---|---|---|---|
| A1 | Tracing Agents SDK | §A1 + matrice | COUVERT |
| A2 | Usage & Costs Admin | §A2 | COUVERT |
| A3 | Frontière / WEB / tool_usage | §A3 | COUVERT |
| A4 | previous_response_id / sessions / cache | §A4 | COUVERT |
| B1 | Decisions API | §B1 | COUVERT |
| B2 | Politique cognitive étendue | §B2 | COUVERT |
| C1 | Recherche D4/D9 AS-IS | §C1 | COUVERT |
| C2 | Architectures recherche 1–5 | §C2 | COUVERT |
| C3 | Files / vision / PDF | §C3 | COUVERT |
| D1 | Audio transcriptions | §D1 | COUVERT |
| D2 | Realtime transcription | §D2 | COUVERT |
| D3 | Images (qualification) | §D3 | COUVERT |
| E1 | Agents API hébergée | §E1 | COUVERT |
| E2 | Articulation ML5 L2 | §E2 | COUVERT |
| §8 | Matrice permissions | §7 dossier | COUVERT |
| §9 | AS-IS / TO-BE / matrice / flux | §1,8,9,14–15 | COUVERT |
| §10 | Macro-lots | §10 | COUVERT |

**Fake/Real :** N/A exécution — étude documentaire. Preuves futures listées §12 dossier.

---

## 4. Dossier complet actualisé

Path: `projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md`
Commit: `ae4aff22b023fea00be5ae1ec98c903d5fbbf145`
Blob: `bb7995457ea3e40faa85968f7726e381878d6e97`

### Headings
- `# ML5 — Étude architecturale approfondie : capacités natives OpenAI et intégration à Studio Next`
- `## 0. Révisions par rapport au premier dossier (handoff `7ad34bbb`)`
- `## 1. Cartographie AS-IS Studio Next (candidat `c574d262`)`
- `### 1.1 Couches`
- `### 1.2 Propriétaires techniques (chemins absolus projet)`
- `### 1.3 Caractère architectural`
- `## 2. Fiches architecturales A — Socle fournisseur, OBS, FinOps`
- `### A1. Tracing natif Agents SDK`
- `#### A. Existant Studio`
- `#### B. Capacité native`
- `#### C. Scénarios`
- `#### D. Valeur produit`
- `#### E. Comparaison`
- `#### F. Préconisation (non décision)`
- `### A2. Usage & Costs API (Admin)`
- `#### A. Existant`
- `#### B. Natif`
- `#### C. Scénarios`
- `#### D. Valeur`
- `#### F. Préconisation`
- `### A3. Frontière fournisseur et WEB (approfondissement)`
- `#### A. Existant`
- `#### B. Natif complémentaire`
- `#### C. Options (reprises + affinage)`
- `#### F. Préconisation`
- `### A4. Continuité Responses / sessions`
- `#### A. Existant`
- `#### B. Natif`
- `#### C–F`
- `## 3. Fiches B — Cognition spécialisée`
- `### B1. Decisions API`
- `#### A. Existant`
- `#### B. Natif (SDK 7.50 **présent**)`
- `#### C. Intégration possible`
- `#### D. Valeur`
- `#### F. Préconisation`
- `### B2. Politique cognitive étendue`
- `#### A. Existant`
- `#### B–F`
- `## 4. Fiches C — Intelligence documentaire`
- `### C1. Recherche actuelle D4/D9`
- `#### A. Existant`
- `#### Limites`
- `### C2. Architectures de recherche (comparatif)`
- `#### F. Préconisation`
- `### C3. Files API / vision / PDF`
- `#### A. Existant`
- `#### B. Natif`
- `#### C–F`
- `## 5. Fiches D — Interaction audio (obligatoire)`
- `### D1. Audio Transcriptions (fichier / utterance)`
- `#### A. Existant`
- `#### B. Natif`
- `#### C. Parcours candidat UX`
- `### D2. Realtime transcription / voice`
- `#### B. Natif`
- `#### Comparaison D1 vs D2`
- `#### F. Préconisation`
- `### D3. Images`
- `## 6. Fiches E — Orchestration et réalisation technique`
- `### E1. Agents API hébergée (≠ Agents SDK JS ≠ Computer Use)`
- `#### B. Natif (docs + SDK beta)`
- `#### Ne pas confondre`
- `### E2. Articulation ML5 livraison 2`
- `#### F. Préconisation`
- `## 7. Matrice permissions OpenAI (candidates)`
- `## 8. Architecture cible candidate TO-BE (proposition)`
- `## 9. Matrice globale de transformation`
- `## 10. Macro-lots de construction candidats (challengés)`
- `### Lot R1 — Socle fournisseur honnête (OBS/FinOps/WEB/Frontier)`
- `### Lot R2 — Cognition spécialisée + intelligence documentaire`
- `### Lot R3 — Dictée et transcription`
- `### Lot R2-L2-eval (parallèle documentaire/technique, pas delivery produit)`
- `## 11. Décisions Morris à instruire`
- `## 12. Limites de l’étude et preuves futures`
- `## 13. Verdict d’étude`
- `## Annexe — Sources (extrait)`
- `## 14. Détail REPLACE / RETIRE (candidats)`
- `### R-WEB-ASSUMED — Compteurs hosted assumés / ASSUMED_1`
- `### R-PREVIEW-HOSTED — Chemins preview hosted si redondants`
- `### R-CLASSIFIER-RESPONSES (optionnel) — Tours Responses purement classificatoires`
- `### R-TRACING-CUSTOM-MID (partiel)`
- `## 15. Séquences cibles (candidats)`
- `### 15.1 Emission Responses (KEEP + enrichissement)`
- `### 15.2 Décision bornée (BUILD candidat)`
- `### 15.3 Dictée D1 (BUILD candidat)`
- `### 15.4 L2 eval Agents API (DEFER POC)`
- `## 16. Impacts DATA-01 / persistances externes nouvelles`
- `## 17. Alternatives globales (synthèse)`
- `## 18. Capitalisation CKC cycle 6 (candidate, non normative)`


### Contenu intégral

<<<DOSSIER_BEGIN>>>
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

<<<DOSSIER_END>>>

---

## 5. Diff complet du dossier (commit `ae4aff22b023fea00be5ae1ec98c903d5fbbf145`)

<<<DIFF_BEGIN>>>
commit ae4aff22b023fea00be5ae1ec98c903d5fbbf145
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 19:46:02 2026 +0100

    docs(next): complete OpenAI native capabilities integration architecture study

    Deepen ML5 R5 cycle-6 Critical study with full A–E capability fiches, AS-IS/TO-BE,
    transformation matrix, and construction-lot options for Morris arbitration.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md b/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md
index 6c41e98b..bb799545 100644
--- a/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md
@@ -1,356 +1,626 @@
-# ML5 — Étude architecturale : convergence des capacités natives OpenAI et rationalisation du socle Studio Next
+# ML5 — Étude architecturale approfondie : capacités natives OpenAI et intégration à Studio Next

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-26 |
-| Cycle | **6 — Architecture technique** · CRITICAL · DOC / Architecture Study |
-| Mode | **READ-ONLY PRODUCT** — **AUCUNE IMPLÉMENTATION** |
-| Branche produit préservée | `sfia/next-ml5-integrated-delivery-20261123` |
-| HEAD candidat figé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
-| Tree / Web tree | `85e99535…` / `5a1289fc…` |
-| BUILD_ID candidat | `Le9pyy4fbPKT_m0YlplAr` |
-| SDK verrouillés | `openai@7.50.0` · `@openai/agents@0.21.0` · `pdfjs-dist@4.10.38` |
-| Trajectoire RECETTE | **Suspendue** (préservation intégrale du candidat) |
-| Statut | **DRAFT STUDY — prêt pour revue ChatGPT/Morris** · maturité cible `suffisante_pour_decider` |
+| Date | 2026-11-26 (complétion 2026-11-26T18:45Z) |
+| Cycle | **6 — Architecture technique** · CRITICAL · DOC |
+| Mode | **READ-ONLY PRODUCT** · **AUCUNE IMPLÉMENTATION** |
+| Mandat | Complet 14 sections — prévaut sur le mandat tronqué |
+| HEAD docs | *(commit documentaire de cette complétion)* |
+| Candidat code préservé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
+| Web tree préservé | `5a1289fcfa26b1963f53ed1364dbd842e771e46c` |
+| BUILD_ID | `Le9pyy4fbPKT_m0YlplAr` |
+| SDK | `openai@7.50.0` · `@openai/agents@0.21.0` · `@openai/agents-openai@0.21.0` |
+| Posture | **Éclairer Morris/ChatGPT** — aucune décision définitive |
+| Statut | **STUDY COMPLETED — OPTIONS FOR ARBITRATION** |

 ---

-## 0. Objet et anti-confusions
+## 0. Révisions par rapport au premier dossier (handoff `7ad34bbb`)

-Cette étude ne vise **pas** à brancher toutes les API OpenAI disponibles.
+| Conclusion v1 | Statut v2 | Motif |
+|---|---|---|
+| Couverture centrée frontier/FinOps/WEB | **Élargie** | Mandat exige A–E (tracing, Admin costs, Decisions, doc intel, audio, Agents API) |
+| `tool_usage.web_search.num_requests` = finding central | **Conservée** | Toujours structurante pour hosted FinOps |
+| Option A3 hosted | **Conservée comme option**, non décision | Approfondie §A3 |
+| `return_token_budget` | **Révisée** | Présente dans docs WEB ; **absente** des `.d.ts` 7.50 inspectés → API≠SDK |
+| Computer-use / Cursor C1 | **Révisée** | Comparaison E1/E2 sans présupposer conservation Cursor |
+| Decisions API | **Ajoutée** | Présente dans SDK 7.50 (`client.decisions`) — absente du v1 |
+| Audio / dictée | **Ajoutée** | Orientation produit Morris — obligatoire |
+| Agents API hébergée | **Ajoutée** | Distincte du Agents SDK JS |
+| Tracing désactivé | **Ajoutée** | `setTracingDisabled(true)` constaté AS-IS |
+
+**Question directrice (conservée) :** si ces capacités avaient été connues avant construction, aurions-nous conçu autrement ?

-Elle vise à décider, pour Studio Next :
+---

-| Question | Sens |
-|---|---|
-| Conserver | Responsabilité Studio indispensable (autorité, invariants, SoT) |
-| Simplifier | Réduire un mécanisme Studio redondant sans perdre le contrat |
-| Déléguer | Paramètre / moteur fournisseur opposable, sous contrôle Studio |
-| Adapter / remplacer | Changer l'implémentation Studio en s'appuyant sur le natif |
-| Retirer | Abandonner un chemin custom si le natif couvre vraiment le besoin |
-| Construire | Lacune réelle (produit ou preuve) encore absente |
-| Utile au Pilote | Valeur d'usage, pas disponibilité technique |
-| Impact ML5 L2 | Ce que la livraison 2 (Cursor / réalisation) doit assumer ou non |
+## 1. Cartographie AS-IS Studio Next (candidat `c574d262`)
+
+### 1.1 Couches
+
+```
+Pilote UX (conversation, FinOps, visionneuse)
+        │
+D3 Conducteur / Work / Policy / Admission
+        │
+Nora Adapter ──► @openai/agents run() ──► OpenAI Responses (fetch frontier)
+        │                 │
+   Outils Studio     Tracing DISABLED
+   (D4/Git/WEB/D8)
+        │
+Frontière emission (ALS, campagnes, input_tokens count, max_*)
+        │
+FinOps ledger PG + OBS local
+        │
+D6 décisions · D4 journal · D9 Git · PDF pdfjs
+```
+
+### 1.2 Propriétaires techniques (chemins absolus projet)

-**Règle de lecture obligatoire :**
+| Domaine | Fichiers pivots |
+|---|---|
+| Frontière | `web/src/domains/conversation/provider-emission-frontier.ts` |
+| Nora / SDK | `web/src/domains/conversation/nora-adapter.ts` (`setTracingDisabled(true)` L871–872) |
+| Conducteur | `cognitive-conductor.ts`, `cognitive-work.ts`, `cognitive-policy.ts`, `cognitive-resources/*` |
+| FinOps | `usage-accounting.ts`, `domains/finops/usage-*.ts`, routes `/api/finops/*` |
+| WEB | `public-web-search-frontier.ts`, `web-egress-guard.ts`, `web-public-query-authority.ts`, `web-search-tools.ts` (hosted détaché) |
+| D4 recherche | `domains/knowledge/journal.ts` (`searchJournalSubjects` lexical `includes`) |
+| PDF | `pdf-extract-server.ts`, `pdf-viewer-authorization.ts` |
+| OBS | `web/src/lib/observability.ts` |

-Disponibilité API ≠ compatibilité SDK ≠ permission effective ≠ pertinence produit ≠ conformité architecturale ≠ comportement prouvé.
+### 1.3 Caractère architectural

-Le candidat `c574d262` / `Le9pyy4fbPKT_m0YlplAr` reste l'artefact de référence ; cette étude **ne le mute pas**.
+**Plan de contrôle Studio épais** autour d’une **surface d’invocation SDK mince** (`Agent` + `run()`). Les invariants (lane, D6, SoT PG, FinOps, egress) ne sont pas délégués au fournisseur aujourd’hui.

 ---

-## 1. État d'entrée (faits opposables)
+## 2. Fiches architecturales A — Socle fournisseur, OBS, FinOps

-### 1.1 Socle déjà qualifié (ne pas reconstruire)
+### A1. Tracing natif Agents SDK

-- Frontière commune `provider-emission-frontier.ts` (ALS, campagnes, lane, admission modèle/effort).
-- Comptage natif `POST /v1/responses/input_tokens` pour enveloppes strictes (LIVE : count ≡ usage).
-- Injection `max_output_tokens` et `max_tool_calls` (hosted) sur le payload final.
-- Agents SDK tool-loop multi-Responses sous transport substitué.
-- FinOps PG ↔ API ↔ UI sur work scope (ex. `cgw_b20fcbe3…` : 8 req / 123377 tok).
-- D6 WEB authority + PDF viewer auth PG (déterministe).
-- Investigation Chantiers360 LIVE capitalisée (non à rejouer pour cette étude).
+#### A. Existant Studio
+- Tracing SDK **explicitement désactivé** : `configureSdkTracingSafe()` → `agents.setTracingDisabled(true)` (`nora-adapter.ts` ~869–873).
+- Instrumentation custom : OBS (`emitObs`, request/operation/attempt ids), frontier HTTP attempts, FinOps correlation rows.
+- Besoin couvert : diagnostic lane-safe sans fuite prompts ; causalité métier D3/OBS.

-### 1.2 Réserves B explicitement isolées
+#### B. Capacité native
+- SDK `@openai/agents-core` : `TracingProcessor`, `BatchTraceProcessor`, `addTraceProcessor`, exporters (`ConsoleSpanExporter`, `OpenAITracingExporter` dans package).
+- Spans : agent/run/generation/tool (types `tracing/*`).
+- Facturation : dépend de l’exporteur (local = gratuit ; OpenAI exporter = données chez fournisseur + éventuel coût stockage — **NON OBSERVÉ** sans doc pricing traces dédiée dans cette étude).
+- Persistance : selon processor (mémoire, batch export).

-| Id | Capacité | Isolation |
-|---|---|---|
-| R-G-WEB-PUBLIC-HOSTED | WEB LIVE public | WEB OFF ; gate fermé |
-| R-GIT-PDF-TEXT | PDF textuel Git | Corpus manquant |
-| R-PDF-RSS / browser E2E | Preuves limites / UX | Capacité isolée |
+#### C. Scénarios
+1. **KEEP** tracing OFF + OBS custom (AS-IS).
+2. **ADAPT** tracing ON local-only (processor filtrant, pas d’export OpenAI) + OBS métier.
+3. **HYBRID** tracing ON + export gouverné DEV-only.
+4. **REPLACE** partiel de logs mid-turn tool par spans natifs.

-### 1.3 Découverte structurante de cette étude (SDK 7.50)
+#### D. Valeur produit
+- Nora : meilleur diagnostic d’échecs d’outils / tours.
+- Pilote : pas d’UX directe ; constructeur gagne en MTTR.
+- Nouveau : timeline unifiée génération↔outil.

-Dans `openai/resources/responses/responses.d.ts` (verrouillé) :
+#### E. Comparaison
+| Critère | OFF+OBS | Tracing local | Export OpenAI |
+|---|---|---|---|
+| Confidentialité | Meilleure | Bonne si filtre | Risque prompts |
+| Couverture SDK | Faible sur interne Agents | Forte | Forte |
+| Causalité D3 | Forte (custom) | À corréler | À corréler |
+| Maintenance | Double instrumentation | Réduit custom | Moins de code local |

-```text
-Response.tool_usage?.web_search.num_requests
-```
+#### F. Préconisation (non décision)
+**ADAPT — tracing local filtrant en DEV/calibration**, OBS métier **KEEP** comme SoT causale. Ne pas activer export OpenAI sans ADR DATA-01. Condition : processor qui redacte inputs/outputs.

-Documentation SDK associée : **compte les recherches WEB facturables** ; les actions `open_page` / recherches discountées sont exclues ; réconciliation finale via facturation fournisseur.
+---
+
+### A2. Usage & Costs API (Admin)
+
+#### A. Existant
+- Estimations Studio via `tariff-catalog.ts` + `usage` Responses/Agents.
+- UNKNOWN/PARTIAL honnêtes ; pas de rapprochement facture.
+- Permissions runtime : Responses read/write, models — **pas** Admin key.
+
+#### B. Natif
+- `GET /v1/organization/costs` et usage buckets — **Admin API key** distincte (`client.admin`, `OPENAI_ADMIN_KEY`) — présent dans SDK 7.50.
+- Granularité : jour, project_id, api_key_id, line_item, api_source (`agents_api` vs unlabeled).
+- Devise USD ; latence batch quotidienne typique.
+- **Hors runtime Nora** (Admin key ≠ project key).
+
+#### C. Scénarios
+1. KEEP estimations seules.
+2. **BUILD** job lecture seule périodique (compte service Admin) → rapprochement FinOps Studio.
+3. UI Pilote « écart estimation / facture org » (lecture).
+
+#### D. Valeur
+- Pilote/constructeur : confiance FinOps ; détection dérive tarifaire.
+- Ne remplace pas attribution workId/projet Studio.

-**Implication :** le blocage G-WEB-PUBLIC reposait sur l'absence d'unité facturable opposable *a priori*. Une unité **a posteriori** native existe déjà dans le SDK verrouillé et n'est **pas encore consommée** par Studio FinOps. Elle ne remplace pas une borne pré-émission, mais change le dossier d'arbitrage.
+#### F. Préconisation
+**BUILD différé (R1b)** — rapprochement **hors processus Nora**, clé Admin séparée, jamais dans navigateur. Estimations runtime **KEEP**. Ne pas rejeter pour « scope Admin manquant » : proposer configuration future.

 ---

-## 2. Inventaire croisé — capacités natives vs responsabilités Studio
-
-Légende recommandations : **KEEP** · **DELEGATE** · **HYBRID** · **ADOPT** · **IGNORE** · **BUILD**.
-
-### 2.1 Bornes et comptage fournisseur
-
-| Capacité | Natif (7.50 / 0.21) | Studio aujourd'hui | Recommandation | Motif |
-|---|---|---|---|---|
-| Comptage entrée | `responses.inputTokens.count` | Intégré frontière (strict) | **KEEP HYBRID** | Natif = mesure ; Studio = réservation campagne / fail-closed |
-| Borne sortie | `max_output_tokens` | Injection + campagne | **DELEGATE param / KEEP ledger** | Paramètre fournisseur ; enveloppe cumulée Studio |
-| Borne appels built-in | `max_tool_calls` | Injection hosted | **HYBRID** | Borne Response réelle ; ≠ recherches facturées |
-| Recherches facturables | `tool_usage.web_search.num_requests` | **Non consommé** | **ADOPT** (FinOps / réconciliation) | Unité native a posteriori ; ouvre sortie à R-G-WEB-PUBLIC |
-| Estimation `len/3` | — | Indication seulement | **KEEP as hint / never guarantee** | Déjà corrigé pour enveloppes strictes |
-| Retry HTTP | Client OpenAI `maxRetries` | Exercé + frontière | **KEEP** | Retry = tentative facturable potentielle |
-
-### 2.2 Boucle cognitive et outils
-
-| Capacité | Natif | Studio | Reco | Motif |
-|---|---|---|---|---|
-| Agents `run()` multi-tours | `@openai/agents` | `nora-adapter` | **KEEP** | Produit = outils Studio + politique |
-| Function tools produit | SDK tools | Outils D4/Git/WEB/D6 | **KEEP** | Contrats métier / droits |
-| Hosted `web_search` | Responses tool | `public-web-search-frontier` | **HYBRID** | Moteur chez fournisseur ; D6/B1/lane Studio |
-| Ouvertures directes B1 | — | egress guard + sessions | **KEEP** | Hors hosted ; sécurité Studio |
-| `return_token_budget` | `default`/`unlimited` (web_search) | Non qualifié opérationnel | **EVALUATE → optional DELEGATE** | Budget contenu retourné ≠ enveloppe tokens globale |
-| `filters` / `external_web_access` | Sur `web_search` | Partiel / politique Studio | **HYBRID** | Utile ; ne remplace pas D6 |
-| `file_search` / vector stores | Présents SDK | Non utilisés | **IGNORE (court terme)** | Concurrence D4/Git ; risque double SoT |
-| `code_interpreter` / computer | Présents SDK | Non utilisés | **IGNORE pour ML5 L1** | Hors invariants ; L2 ≠ computer-use OpenAI |
-| `background: true` | Responses | Non utilisé | **CANDIDATE STUDY** | Long research ; complexifie reprise D3 |
-| Structured outputs | `text.format` | Partiel | **HYBRID** | Renforcer contrats outils, pas remplacer sémantique SEM |
-
-### 2.3 Continuité, mémoire, allocation
-
-| Capacité | Natif | Studio | Reco | Motif |
-|---|---|---|---|---|
-| `previous_response_id` / `conversation` | Responses | Continuity via `cognitive_works` / acquis | **KEEP Studio SoT** ; **optional HYBRID** | SoT métier = D3/D4 ; natif = optimisation contexte fournisseur seulement |
-| Conducteur / soft-stop / restitution | — | `cognitive-conductor` | **KEEP** | Invariant produit |
-| Allocation Terra/Luna/Sol + admission | — | `cognitive-policy` / resources | **KEEP** | Politique produit ; OpenAI ne connaît pas le catalogue Studio |
-| Checkpoints / CAS / lease | — | D3 | **KEEP** | Intégrité reprise |
-| Sessions Agents SDK | Agents core | Peu / pas SoT | **IGNORE as SoT** | Ne pas déplacer l'état métier chez le fournisseur |
-
-### 2.4 FinOps, OBS, autorité, documents
-
-| Capacité | Natif | Studio | Reco | Motif |
-|---|---|---|---|---|
-| `usage` tokens | Response.usage | `provider_usage_observations` | **KEEP ledger Studio** | Attribution work/projet/lane |
-| `tool_usage` | Response.tool_usage | Absent | **ADOPT into ledger** | Corrélation hosted facturable |
-| Admin usage/costs API | Admin scopes | OUT contrat | **IGNORE** | Hors permissions ; pas de clé admin |
-| Tarifs locaux versionnés | — | Catalogue Studio | **KEEP** | Estimation ≠ facture |
-| D6 HumanDecision | — | Domaine D6 | **KEEP** | Autorité humaine non déléguable |
-| PDF extract/viewer | — | pdfjs + auth | **KEEP** | Hors OpenAI |
-| OBS IDs causals | — | Contrat OBS | **KEEP** | Corrélation multi-couches |
+### A3. Frontière fournisseur et WEB (approfondissement)
+
+#### A. Existant
+- Native count `input_tokens`, inject `max_output_tokens` / `max_tool_calls`, campagnes, refus ASSUMED_1.
+- Hosted search **détaché** du agent privé ; worker isolé / tools Studio.
+- G-WEB-PUBLIC **BLOCKED**.
+
+#### B. Natif complémentaire
+- `Response.tool_usage.web_search.num_requests` — recherches **facturables** a posteriori (SDK 7.50 `responses.d.ts` ~1022–1281).
+- `max_tool_calls` — borne a priori built-in calls ≠ `num_requests`.
+- `search_context_size`, `filters.allowed_domains`, `external_web_access` sur `web_search`.
+- `return_token_budget` : **docs oui / types 7.50 non** → REST possible, SDK typé incomplet (**incertitude**).
+
+#### C. Options (reprises + affinage)
+| Id | Description |
+|---|---|
+| A1 | Gate fermé |
+| A2 | Enveloppe = N×max_tool_calls |
+| A3 | Pré-réserve max_tool_calls + post-commit num_requests + suspend si dépassement |
+| A4 | Direct B1 only |
+
+#### F. Préconisation
+**Orientation technique forte vers A3** pour *si* Morris veut rouvrir WEB ; jusqu’au GO : **A1**. FinOps doit **ADOPT** `num_requests` même sous A1 (préparation). Simplifications custom possibles après ADOPT : compteurs hosted assumés, chemins preview.

 ---

-## 3. Matrice de rationalisation (décisions proposées)
+### A4. Continuité Responses / sessions

-### 3.1 Conserver absolument (non négociable sans ADR)
+#### A. Existant
+- SoT : `cognitive_works` + acquis + reconstruction contexte.
+- `previous_response_id` / `conversation` : supportés dans count payload frontier, **non SoT métier**.

-1. **Propriétaires D3–D9** et SoT PostgreSQL (`cognitive_works`, documents, décisions).
-2. **Frontière d'émission commune** (lane, fingerprint, campagne, ALS fail-closed).
-3. **Admission modèle/effort Studio** (catalogue Terra/Luna/Sol).
-4. **D6 + EffectConditions + reverify egress** pour WEB exceptionnel.
-5. **Ledger FinOps Studio** (observations durables, PARTIAL/UNKNOWN honnêtes).
-6. **B1 direct opens** contrôlés avant effet réseau.
-7. **Isolation ENV-01** (DEV/RECETTE/STABLE).
+#### B. Natif
+- `previous_response_id`, Conversations API, `Responses.compact`, prompt cache, `background`, Agents `Session` / `OpenAIConversationsSession`.

-### 3.2 Simplifier (réduire complexité Studio sans perdre le contrat)
+#### C–F
+**KEEP SoT D3**. Expérimenter **HYBRID** `previous_response_id` en DEV pour coût tokens (optimisation), jamais comme vérité reprise. `background` : **DEFER** (complexifie fencing D3). Sessions Agents SDK : **IGNORE as SoT**.

-| Zone | Simplification candidate | Précondition |
-|---|---|---|
-| Bornes entrée campagne | Une seule voie « native count obligatoire si limite » ; retirer chemins estimate-as-reserve résiduels | Déjà largement fait ; audit exhaustif |
-| Hosted accounting | Remplacer toute logique ASSUMED_1 restante par : pré-réserve `max_tool_calls` + post-commit `tool_usage.web_search.num_requests` | Qualification LIVE de `tool_usage` |
-| Doubles wrappers fetch | Clarifier un seul install client frontier-aware | Revue non-régression Agents |
-| Scripts LIVE | Factoriser oracles PG/API/UI same-scope | Pure QA |
+---

-### 3.3 Déléguer au fournisseur (sous garde Studio)
+## 3. Fiches B — Cognition spécialisée

-| Délégation | Garde Studio |
-|---|---|
-| Tokenisation / count exact | Campagne + fingerprint + non-récursion |
-| Truncation / max_output_tokens | Enveloppes cumulées + fail-closed |
-| Exécution hosted web_search | D6/B1/lane + FinOps `num_requests` + WEB OFF défaut |
-| Retry transport | Comptage tentatives HTTP Studio |
+### B1. Decisions API

-### 3.4 Adapter / remplacer (construction future — pas ce cycle)
+#### A. Existant
+- Qualification sémantique / readiness via Responses + schémas (`semantic-qualification.ts`), pas d’endpoint Decisions.
+- HumanDecision D6 = autorité Pilote — **hors OpenAI**.

-| Remplacement | De | Vers | Risque |
-|---|---|---|---|
-| Unité hosted FinOps | Compteurs assumés | `tool_usage.web_search.num_requests` | Omission du champ → UNKNOWN |
-| Pré-borne hosted | ASSUMED_1 | `max_tool_calls` + politique Morris sur unité | Sur/sous-réservation |
-| Contexte long | Reconstruction manuelle lourde | Évaluation contrôlée `previous_response_id` | Fuite / mutabilité contexte distant |
+#### B. Natif (SDK 7.50 **présent**)
+- `client.decisions.create` — `POST /v1/decisions`.
+- Modèle : **`gpt-6-luna` only** (docs 2026).
+- Questions : `predicate` (probability), `choice`, `score` — jusqu’à 400 / requête.
+- Input : texte, images, JSON, historique tool calls.
+- Latency : revendiqué ~10× plus rapide que Responses pour questions bornées (doc produit OpenAI 22/10/2026).
+- Pricing doc : input ~$0.10/MTok ; cached $0.01 ; **output tokens free** sur Decisions (annonce) — **vérifier page pricing avant GO**.
+- Permissions : endpoint Decisions (candidate ; non observée sur clé DEV actuelle).

-### 3.5 Retirer (seulement après preuve)
+#### C. Intégration possible
+1. KEEP Responses pour tout.
+2. **ADAPT** — Nora/conducteur appelle Decisions pour micro-jugements (pertinence source, complétude, route) ; Responses pour synthèse.
+3. REPLACE partiel de certains tours « classifier » Responses.

-| Candidat au retrait | Condition de retrait |
-|---|---|
-| Toute estimation présentée comme borne stricte | Déjà interdit ; purger tests/docs obsolètes |
-| Chemins `web_search_preview` legacy | Migration explicite vers `web_search` + contrôles nouveaux |
-| Ledger mémoire « de secours » | Jamais SoT ; supprimer s'il réapparaît |
+**Ne pas** : classifieur systématique ; transférer D6.

-### 3.6 Construire encore (lacunes réelles)
+#### D. Valeur
+- Nora : décisions bornées moins chères/latentes au sein d’un travail.
+- Pilote : allocation plus fine (Luna Decisions vs Terra synthèse).
+- Nouveau : scoring multi-critères parallèle.

-| Lacune | Pourquoi | Priorité |
-|---|---|---|
-| Consommation FinOps de `tool_usage.web_search.num_requests` | Unité facturable native absente du ledger | P0 étude → P0 construction |
-| Politique d'enveloppe hosted post-`num_requests` | Décider si G-WEB-PUBLIC peut rouvrir | P0 décision Morris |
-| Preuve LIVE `tool_usage` sous WEB OFF→PUBLIC | Comportement prouvé | P0 gate |
-| Corpus Git PDF textuel | Réserve B | P1 isolable |
-| Stratégie `previous_response_id` vs acquis D3 | Continuité / coût tokens | P1 architecture |
-| Position sur `background` / Astra long research | Perf / reprise | P2 |
-| Position sur file_search vs D4 | Double SoT | P2 (défaut IGNORE) |
+#### F. Préconisation
+**REUSE NATIVE / BUILD ressource cognitive « Decisions »** dans catalogue élargi — mobilisation **sémantique optionnelle**, admission serveur. Preuve future : LIVE DEV comparatif latency/coût vs Responses sur oracles RoomBooking.

-### 3.7 Nouvelles capacités utiles au Pilote (filtre valeur)
+---
+
+### B2. Politique cognitive étendue
+
+#### A. Existant
+- Catalogue Luna/Terra/Sol × effort ; admission fail-closed ; referential 51 lignes indicative.

-| Idée | Utile Pilote ? | Verdict étude |
+#### B–F
+Étendre le **modèle de ressource** (pas seulement LLM chat) :
+
+| Type ressource | Exemple natif | Rôle |
 |---|---|---|
-| FinOps affichant recherches hosted facturables | Oui (transparence coûts WEB) | **Oui — via tool_usage** |
-| WEB public gouverné réouvert | Oui si safe | **Conditionnel** à politique d'enveloppe |
-| Recherche longue background | Possible | **Non prioritaire** avant L2/cognition stable |
-| Computer-use / code_interpreter OpenAI | Faible pour Studio gouverné | **Non** (conflit L2 Cursor) |
-| Vector store OpenAI comme mémoire projet | Douteux | **Non** (D4/Git restent SoT) |
-| Moderation API systématique | RSSI | **Évaluer** hors ML5 L1 |
+| Génération | Terra/Sol Responses | Synthèse, rédaction |
+| Décision bornée | Decisions/Luna | Predicate/choice/score |
+| Recherche hosted | web_search | Découverte publique |
+| Transcription | audio.transcriptions | Entrée Pilote |
+| Exécution sandbox | Agents API | L2 candidate |
+
+Conducteur propose ; admission autorise ; FinOps observe. **Aucune politique définitive** — ADR futur.

 ---

-## 4. Options structurantes (au moins deux par décision)
+## 4. Fiches C — Intelligence documentaire

-### Décision D-A — Unité de contrôle WEB hosted
+### C1. Recherche actuelle D4/D9

-| Option | Description | Pour | Contre | Réversibilité |
-|---|---|---|---|---|
-| **A1 — Fermé** | Maintenir G-WEB-PUBLIC fermé | Risque financier/sécurité contenu | Capacité Pilote absente | Haute |
-| **A2 — Built-in only** | Enveloppe = N × `max_tool_calls` | Borne pré-émission native | ≠ facturation fine | Haute |
-| **A3 — Hybrid reconcile** | Pré-réserve `max_tool_calls` + post-commit `num_requests` + suspend si dépassement constaté | Unité facturable a posteriori + borne a priori | Fenêtre d'incertitude pendant la Response | Moyenne |
-| **A4 — Direct-only** | Pas de hosted ; B1 only | Contrôle egress maximal | Moins de capacité recherche | Haute |
+#### A. Existant
+- `searchJournalSubjects` / `searchJournalDecisions` : charge bundle projet puis filtre **`String.includes` lexical** (`journal.ts` ~872+).
+- Git : outils lecture + extraits ; PDF via pdfjs.
+- Preuves : RoomBooking / Chantiers360 — consultation multi-fichiers fonctionne mais pertinence dépend de la requête lexicale et de la discipline Nora.

-**Recommandation d'étude :** **A3** comme cible de construction, **A1** maintenu jusqu'au GO ; ne pas choisir A2 comme « facturable ».
+#### Limites
+- Pas d’embedding ; relecture possible de large context ; homonymes ; pas de ranking sémantique.

-### Décision D-B — SoT de continuité conversationnelle
+### C2. Architectures de recherche (comparatif)

-| Option | Description | Pour | Contre |
-|---|---|---|---|
-| **B1 — Studio only** | `cognitive_works` + acquis | Contrôle, audit, reprise | Coût tokens possible |
-| **B2 — Provider conversation** | `conversation` / `previous_response_id` SoT | Moins de payload | Perte gouvernance / mutabilité |
-| **B3 — Hybrid** | SoT Studio ; natif optionnel pour cache contexte | Optimisation sans abdiquer | Complexité double chemin |
+| # | Architecture | Ingestion | Recherche | Ranking | Citations | SoT |
+|---|---|---|---|---|---|---|
+| 1 | AS-IS lexical | PG D4 | includes | ordre natif | outils | D4 |
+| 2 | Embeddings + PG | Job Studio → vecteurs PG | cosine + filtres | Studio | Studio | D4 + projection |
+| 3 | Vector Stores OpenAI | Upload Files API | VS search API | OpenAI | IDs fichiers | **Risque 2e SoT** si mal borné |
+| 4 | File Search hosted | VS + tool | model-driven | OpenAI | annotations | Idem |
+| 5 | Hybride | D4 SoT + index dérivé | lexical ∪ sémantique | Studio rerank | Studio | **Index = projection** |

-**Recommandation :** **B1** court terme ; **B3** expérimental DEV uniquement après ADR.
+#### F. Préconisation
+Comparer **1 vs 2 vs 5** en priorité. **3/4** seulement si index explicitement dérivé, rebuildable, versionné, révocable (DATA-01). Ne pas construire plusieurs moteurs permanents. Protocole futur : corpus Chantiers360/RoomBooking + oracles indépendants (rappel faits) + métriques recall@k / citations exactes.

-### Décision D-C — Périmètre SDK pour ML5 L2
+### C3. Files API / vision / PDF

-| Option | Description | Pour | Contre |
-|---|---|---|---|
-| **C1 — Cursor reste le bras D7** | OpenAI = cognition ; Cursor = réalisation | Aligné contrats L2 | Deux fournisseurs |
-| **C2 — Computer-use OpenAI** | Remplacer partie Cursor | Un seul vendor | Rupture gouvernance L2 / preuves Cursor |
-| **C3 — Mix opportuniste** | Computer-use pour micro-tâches | Flexibilité | Dilution responsabilités |
+#### A. Existant
+- pdfjs extract serveur ; visionneuse auth ; Git PDF text **BLOCKED corpus** ; BPMN scanné = SCANNED_NO_TEXT.
+
+#### B. Natif
+- Files API, input file/image dans Responses, vision modèles multimodaux, File Search.
+- Pas un OCR exhaustif déterministe.

-**Recommandation :** **C1** — L2 non engagée ; computer-use **IGNORE** dans la rationalisation L1.
+#### C–F
+**HYBRID** : garder pdfjs pour extraction déterministe / pagination / droits ; **ADOPT** vision Responses pour schémas/scannés (BatiNova discriminant futur). Visionneuse/provenance/version **KEEP**. Génération d’images : **DEFER**. Vidéo : hors périmètre.

 ---

-## 5. Impacts domaines (D3–D9) et NFR
+## 5. Fiches D — Interaction audio (obligatoire)
+
+### D1. Audio Transcriptions (fichier / utterance)
+
+#### A. Existant
+- **NON IMPLÉMENTÉ** dans composer Studio (pas de micro/transcription produit).
+
+#### B. Natif
+- `client.audio.transcriptions.create` — modèles `gpt-transcribe`, legacy whisper/4o-transcribe (dépréciations annoncées → 2027-02-26).
+- Formats json/text/srt/… ; streaming transcription events supportés dans types.
+- Pricing : selon modèle (consulter pricing page au GO).
+- Permission : Audio API scope candidat.
+
+#### C. Parcours candidat UX
+`Micro → enregistrement → POST transcription (serveur) → texte éditable composer → confirmation Pilote → envoi message Nora`.

-| Domaine | Impact si ADOPT tool_usage / A3 | Impact si conversation native SoT |
+Contrat : transcription ≠ HumanDecision ≠ autorisation effet.
+
+### D2. Realtime transcription / voice
+
+#### B. Natif
+- Realtime API GA : WebRTC/WebSocket, ephemeral `client_secrets`, modèles realtime ; transcription live events.
+- Distinct de **GPT-Live** full-duplex délégué.
+- Agents `RealtimeAgent` / `RealtimeSession` (`@openai/agents/realtime` — vérifier package installé ; **non utilisé** AS-IS).
+
+#### Comparaison D1 vs D2
+| | Transcription fichier | Realtime |
 |---|---|---|
-| D3 | Enrichir observations ; campagnes hosted | Risque dilution SoT |
-| D4 | Faible | Faible |
-| D6 | Inchangé (autorité) | Inchangé |
-| D7/D8 (L2) | Indépendant si C1 | Indépendant |
-| D9 Git | PDF text toujours B | — |
-| FinOps | Corrélation `num_requests` | — |
-| Sécu | WEB OFF défaut ; pas G-WEB-MIXED | Fuite si contexte distant |
-| Perf | Count = RTT supplémentaire déjà accepté | Background = latence async |
-| Obs | Nouveaux champs usage tool | Corrélation response_id |
+| Qualité | Souvent meilleure offline | Variable + VAD |
+| Latence | Post-utterance | Progressive |
+| Coût | À la durée fichier | Session continue |
+| Navigateur | MediaRecorder simple | WebRTC + ephemeral key |
+| Confidentialité | Upload audio serveur | Flux temps réel |
+| Reprise/annulation | Simple | Session state |
+
+#### F. Préconisation
+**BUILD Lot audio** : démarrer par **D1** (dictée → édition → envoi). Realtime **DEFER** comme évolution. Clé serveur jamais dans le navigateur — **ephemeral tokens** uniquement. FinOps audio dédié. Conversation vocale bidirectionnelle : ultérieure.
+
+### D3. Images
+- Vision/compréhension : liée à C3.
+- Génération images : **DEFER** (permission Image candidate seulement).
+- Vidéo : hors périmètre.

 ---

-## 6. Conséquences sur ML5 livraison 2
+## 6. Fiches E — Orchestration et réalisation technique

-1. **Ne pas bloquer L2** sur l'ouverture WEB : L2 = réalisation Cursor / preuves / restitution.
-2. **Ne pas substituer** Cursor par computer-use OpenAI dans cette rationalisation.
-3. Toute simplification frontière/FinOps **avant L2** réduit le bruit de qualification L2.
-4. Si A3 est retenu, L2 hérite d'un FinOps hosted honnête — utile aux bilans de mission, pas au dispatch Cursor.
-5. La suspension RECETTE actuelle **protège** le candidat ; L2 reste « non engagée » jusqu'à GO Morris post-étude.
+### E1. Agents API hébergée (≠ Agents SDK JS ≠ Computer Use)
+
+#### B. Natif (docs + SDK beta)
+- Docs : sessions, environments (`openai_hosted` sandbox), vaults, events, Codex harness.
+- SDK 7.50 : `resources/beta/agents` (sessions/environments/automations) — **Beta header** `OpenAI-Beta: agents=v1`.
+- Capacités : code exec, fichiers, MCP, network restricted, artifacts `/workspace/outputs`.
+- Vaults : secrets hors sandbox via proxy hosts.
+- Permissions : `api.agents.read/write` (docs quickstart).
+- **Incertitudes** : tarification fine Agents API, SLA isolation, compat GitHub App Studio — **à lever avant adoption**.
+
+#### Ne pas confondre
+| Surface | Rôle |
+|---|---|
+| `@openai/agents` JS | Orchestration in-process Studio |
+| Agents API hosted | Harness + sandbox OpenAI |
+| Computer Use tool | Navigation UI distante |
+| Code Interpreter tool | Outil Responses |
+
+### E2. Articulation ML5 livraison 2
+
+| Option | Mandat→preuves | Pour | Contre |
+|---|---|---|---|
+| L2-A Cursor (prévu) | Cursor SDK + D7/D8 | Contrôle worktree, preuves locales, processus SFIA | Deux vendors |
+| L2-B Agents API complémentaire | Sandbox OpenAI pour tâches bornées | Moins d’ops locale | Données chez OpenAI ; vaults |
+| L2-C Remplacement large Cursor | Agents API = bras D7 | Un vendor cognition+exec | Rupture gouvernance preuves Cursor ; process ChatGPT/Cursor externe **hors modification** |
+| L2-D Mix | Cursor pour repo privé ; Agents API pour compute isolé | Flexibilité | Complexité double |
+
+#### F. Préconisation
+**Ne pas figer Cursor ni son remplacement.** Orientation d’étude : **L2-A conserve la trajectoire par défaut** ; **L2-B** comme chantier d’évaluation technique parallèle (POC lecture seule architecture + future LIVE sous GO). **L2-C** seulement si preuves d’équivalence D8/D9. Processus externe SFIA ChatGPT/Cursor **inchangé** par cette étude.

 ---

-## 7. Proposition de deux ou trois macro-lots de construction
+## 7. Matrice permissions OpenAI (candidates)
+
+| Permission / surface | Endpoint | Capacité Studio | R/W | Minimale | Env | Identité | Données | Risque | Protection | Gate |
+|---|---|---|---|---|---|---|---|---|---|---|
+| api.responses.* | /v1/responses | Nora génération | RW | Actuelle | DEV/RECETTE | Project key | Prompts/contexte | Facturable | Frontier, lane | LIVE |
+| input_tokens | /v1/responses/input_tokens | Bornes | W | Incluse Responses | DEV | Project | Payload | Faible/€? | Campagne count | LIVE |
+| decisions | /v1/decisions | Micro-jugements | W | **Candidate** | DEV d’abord | Project | Preuves bornées | Nouveau € | Catalogue admission | GO + LIVE |
+| audio.transcriptions | /v1/audio/* | Dictée | W | **Candidate** | DEV | Project | Audio biométrique potentiel | PRIVACY | Ephemeral, rétention courte | GO DATA |
+| realtime client_secrets | /v1/realtime/* | Voice future | W | **Candidate** | DEV | Project+ephemeral | Audio live | Élevé | Pas de clé longue navigateur | GO |
+| embeddings | /v1/embeddings | Index D4 | W | **Candidate** | DEV | Project | Texte documents | Fuite corpus | Projection dérivée | GO |
+| files / vector_stores | /v1/files, /v1/vector_stores | RAG hébergé | RW | **Candidate** | DEV | Project | Corpus | 2e SoT | Rebuild/révocation | GO DATA |
+| file_search tool | via Responses | Hosted RAG | W | Responses+files | DEV | Project | Passages | Citations | Allowlist | GO |
+| web_search tool | via Responses | WEB public | W | Responses | DEV public | Project | Requêtes publiques | Fuite si mal isolé | D6/B1/A3 | G-WEB-PUBLIC |
+| traces export | exporters Agents | Diag | W | Variable | DEV | — | Spans/prompts | Fuite | Filter local | ADR |
+| admin usage/costs | /v1/organization/* | Rapprochement € | R | **Admin key** | OPS hors Nora | Admin SA | Agrégats € | Clé puissante | Jamais runtime Nora | GO OPS |
+| agents API beta | /v1/agents/* | Sandbox L2 | RW | agents.read/write | DEV | Project beta | Code/fichiers | Isolation | Vaults, network restricted | GO L2 |
+| images generate | Images API | Gen visuelle | W | **Hors** | — | — | — | — | — | DEFER |
+| ALL | — | — | — | **INTERDIT** | — | — | — | — | — | — |
+
+Permissions actuelles exactes de la clé DEV : **partiellement documentées historiquement** ; **non re-observées** ce cycle (READ-ONLY, pas d’appel).

-> Hors scope de **cette** étude (pas d'implémentation ici). Ordre recommandé après GO Morris.
+---

-### Macro-lot R1 — « Provider native honesty » (CRITICAL / Delivery)
+## 8. Architecture cible candidate TO-BE (proposition)

-**But :** consommer les capacités natives déjà verrouillées pour rendre bornes et FinOps opposables.
+```
+                    ┌──────────── Pilote ────────────┐
+                    │ Composer (+ dictée D1 future)   │
+                    │ FinOps (estim. + rapprochement) │
+                    └──────────────┬─────────────────┘
+                                   │
+                    ┌──────────────▼─────────────────┐
+                    │ D3 Conducteur + catalogue       │
+                    │  ressources: Generation |       │
+                    │  Decision | Transcribe | Web |  │
+                    │  (Exec L2)                      │
+                    └──────────────┬─────────────────┘
+           ┌───────────────────────┼───────────────────────┐
+           ▼                       ▼                       ▼
+   Responses/Agents JS      Decisions API           Audio/Files
+   (synthèse, outils)       (jugements bornés)      (entrée Pilote)
+           │                       │
+           └──────────┬────────────┘
+                      ▼
+            Provider Frontier (KEEP)
+            count / max_* / tool_usage
+                      │
+                      ▼
+            Ledger FinOps Studio (KEEP)
+            + Admin costs job (BUILD)
+                      │
+     ┌────────────────┼────────────────┐
+     ▼                ▼                ▼
+   D4 SoT PG     Index dérivé?     D6 Human
+   (KEEP)        (optional 2/5)    (KEEP)
+```

-- Persister / projeter `tool_usage.web_search.num_requests`.
-- Réconciliation campagne hosted (pré `max_tool_calls` / post `num_requests`).
-- Qualifier LIVE `tool_usage` (DEV, projet public).
-- Arbitrage Morris A1 vs A3 ; éventuellement rouvrir G-WEB-PUBLIC sous A3.
-- Non-régression FinOps PG/API/UI.
+**Principe :** OpenAI = moteurs spécialisés ; Studio = gouvernance, SoT métier, autorité, attribution, UX.

-**Exit :** unité hosted facturable observée ou réserve B maintenue avec preuve.
+---

-### Macro-lot R2 — « Frontier & continuity rationalization » (CRITICAL / Architecture→Delivery)
+## 9. Matrice globale de transformation
+
+| Mécanisme actuel | Fichier/composant | Natif | Scénario cible | Resp. conservée | Class. | Gain | Risque | Dép. | Preuve future | Exit |
+|---|---|---|---|---|---|---|---|---|---|---|
+| Tracing OFF | nora-adapter L871 | Agents tracing | Local filter ON | OBS causale | ADAPT | Diag | Fuite si mal filtré | — | Spans DEV sans PII | ADR |
+| OBS custom | observability.ts | — | KEEP | Causalité | KEEP | — | — | — | — | — |
+| Estim. FinOps | tariff+usage | Admin costs | Rapprochement OPS | Attribution work | BUILD+KEEP | Confiance € | Admin key | Admin SA | Job dry-run | GO OPS |
+| Count input | frontier | inputTokens.count | KEEP HYBRID | Campagne | REUSE NATIVE | Borne | RTT | — | LIVE done | — |
+| Hosted ASSUMED | frontier | tool_usage.num_requests | A3 | D6/B1 | ADOPT+ADAPT | Unité € | Écart pré/post | WEB | LIVE tool_usage | Morris D-A |
+| max_tool_calls | frontier | max_tool_calls | KEEP | Enveloppe | REUSE NATIVE | Borne a priori | ≠ facture | — | Deterministic | — |
+| Reconstruct contexte | conductor/work | previous_response_id | HYBRID opt. | SoT D3 | ADAPT | Coût tokens | Mutabilité | — | A/B DEV | ADR B |
+| Qualif sémantique tours | semantic-qualification | Decisions | Option ressource | D6 humain | BUILD | Latence/€ | Mauvaise appli | decisions scope | LIVE oracle | GO |
+| searchJournal lexical | journal.ts | embeddings / VS / hybrid | Index dérivé | D4 SoT | DEFER→BUILD | Pertinence | 2e SoT | embeddings | Bench corpus | GO DATA |
+| pdfjs extract | pdf-extract-server | vision/Files | HYBRID | Auth viewer | ADAPT | Scannés | Probabiliste | multimodal | BatiNova | — |
+| Composer texte seul | UI | audio.transcriptions | Dictée D1 | Confirmation Pilote | BUILD | Accessibilité | Audio privacy | audio scope | UX+LIVE | GO |
+| Realtime voice | — | Realtime API | Ultérieur | — | DEFER | — | Complexité | realtime | — | — |
+| L2 Cursor prévu | D7 path | Agents API | Évaluer L2-B | Preuves D8 | DEFER | — | Vendor lock | agents beta | Arch+POC | GO L2 |
+| Hosted web on private agent | web-search-tools détaché | web_search | KEEP isolation | Confidentialité | KEEP | — | Fuite | — | — | — |
+| Computer use / image gen | — | tools | — | — | DEFER | — | — | — | — | — |

-**But :** simplifier la frontière et clarifier continuité.
+---

-- Audit unique client OpenAI frontier-aware.
-- Politique explicite `previous_response_id` (B1 vs B3).
-- Purge chemins estimate/ASSUMED/preview obsolètes.
-- Documentation as-built + matrice E/OBS.
+## 10. Macro-lots de construction candidats (challengés)

-**Exit :** frontière plus petite, invariants inchangés, ADR continuité.
+Hypothèse ChatGPT initiale (1 socle / 2 doc+cognition / 3 audio) : **globalement saine**, avec ajustements de dépendances.

-### Macro-lot R3 — « RECETTE candidate + L2 ready gate » (Delivery / QA)
+### Lot R1 — Socle fournisseur honnête (OBS/FinOps/WEB/Frontier)
+- **Résultat :** FinOps et bornes opposables ; option WEB gouvernée.
+- **IN :** tool_usage, tracing local, Admin costs job design, A3 si GO, purge ASSUMED/preview.
+- **OUT :** Decisions produit, audio, vector stores, L2.
+- **Remplacements :** compteurs hosted assumés → num_requests.
+- **Gates :** GO D-A ; pas de cutover RECETTE.
+- **Suivant :** R2.

-**But :** reprendre la trajectoire suspendue sans mélanger rationalisation et cutover.
+### Lot R2 — Cognition spécialisée + intelligence documentaire
+- **Résultat :** Nora mobilise Decisions ; recherche projet plus pertinente.
+- **IN :** ressource Decisions ; protocole bench embeddings/hybrid ; vision PDF hybride.
+- **OUT :** audio UX ; Agents API prod.
+- **Dépend de :** R1 FinOps pour mesurer coûts Decisions/embeddings.
+- **Gates :** permission Decisions/embeddings ; DATA-01 si VS.
+- **Suivant :** R3 ou L2 eval.

-- Build/smoke candidat post-R1/R2.
-- Manifeste RECETTE ; WEB OFF défaut.
-- Décision scope réserves B restantes.
-- Préparer engagement L2 (Cursor) sans l'exécuter.
+### Lot R3 — Dictée et transcription
+- **Résultat :** Pilote dicte dans le composer.
+- **IN :** D1 transcription + UX + FinOps audio + ephemeral si realtime plus tard.
+- **OUT :** voice agent bidirectionnel.
+- **Dépend de :** faible sur R2 ; peut **paralléliser** après R1 permissions audio.
+- **Challenger vs hypothèse :** audio peut être R2bis si valeur Pilote prioritaire sur doc intel.

-**Exit :** GO/NOGO mise à disposition RECETTE distinct de L2.
+### Lot R2-L2-eval (parallèle documentaire/technique, pas delivery produit)
+- Comparaison Cursor vs Agents API (E2) — **étude/POC borné**, sans engagement L2.
+
+**Ordre recommandé :** R1 → (R3 // R2) selon priorité Morris valeur Pilote vs cognition ; L2-eval en parallèle doc.

 ---

-## 8. Ce que Studio ne doit pas faire
+## 11. Décisions Morris à instruire

-- Élargir les scopes clé OpenAI « par précaution » (Files/Admin/fine-tuning).
-- Faire d'un vector store OpenAI la mémoire projet.
-- Présenter `max_tool_calls` comme garantie de frais hosted.
-- Présenter une estimation locale comme borne stricte.
-- Déplacer D6/D3/D4 chez le fournisseur.
-- Engager L2 ou cutover RECETTE sous couvert de cette étude.
-- Upgrader majeures SDK « pour suivre le blog » sans besoin démontré.
+1. **D-A** hosted WEB : A1/A2/A3/A4.
+2. **D-Trace** : activer tracing local filtrant ?
+3. **D-Admin-Costs** : créer clé Admin + job rapprochement ?
+4. **D-Decisions** : admettre ressource Decisions dans catalogue DEV ?
+5. **D-DocSearch** : autoriser chantier embeddings/hybrid (vs defer) ?
+6. **D-Audio** : prioriser Lot dictée vs Lot doc intel ?
+7. **D-L2** : trajectoire Cursor seule / +Agents API eval / autre ?
+8. Permissions project : élargir scopes (decisions, audio, embeddings, agents) **sans ALL** ?
+9. Reprise trajectoire RECETTE après quels lots ?

 ---

-## 9. Maturité et fiabilité de l'étude
+## 12. Limites de l’étude et preuves futures

-| Dimension | Niveau | Commentaire |
-|---|---|---|
-| Inventaire SDK verrouillé | **Suffisant** | Types 7.50 lus ; `tool_usage` confirmé |
-| Permissions projet OpenAI | **Partiel** | Scopes historiques documentés ; non re-observés ce cycle |
-| Preuve LIVE `tool_usage` | **Absente** | Capacité typée, non exercée sous WEB |
-| Alternatives | **Suffisant** | D-A/D-B/D-C avec trade-offs |
-| Prêt à borner construction | **Partiel → suffisant après GO D-A** | R1 peut être cadré dès choix A1/A3 |
+| Limite | Impact |
+|---|---|
+| Pas d’appels API authentifiés | Permissions effectives et tarifs runtime NON OBSERVÉS |
+| Pas de LIVE | tool_usage WEB, Decisions latency, audio qualité NON PROUVÉS |
+| Docs vs SDK (`return_token_budget`) | Incertitude typage |
+| Agents API pricing/SLA | Incomplets pour décision L2 |
+| CKC cycle 6 candidate | Guidance non normative |

-**Anti-claims refusés :** « architecture validée », « WEB safe », « zéro dette », « prêt prod », « L2 couverte ».
+**Preuves futures par frontière :** LIVE DEV tool_usage ; LIVE Decisions vs Responses ; bench recherche corpus ; UX dictée ; POC Agents API sandbox lecture artifacts ; job Admin costs dry-run.
+
+Disponibilité API ≠ SDK ≠ permission ≠ comportement prouvé.

 ---

-## 10. Décisions Morris requises
+## 13. Verdict d’étude
+
+**ML5 NATIVE CAPABILITY INTEGRATION STUDY COMPLETED — ARCHITECTURE OPTIONS READY FOR MORRIS ARBITRATION.**

-1. **D-A** : A1 / A2 / A3 / A4 pour WEB hosted.
-2. Autoriser ou non un **macro-lot R1** (construction) après cette étude.
-3. **D-B** : confirmer B1 (Studio SoT) vs expérimentation B3.
-4. Confirmer **C1** (Cursor reste L2) — refus computer-use comme substitut.
-5. Reprendre ou non la trajectoire RECETTE après R1/R2 (macro-lot R3).
-6. Compléter le mandat d'étude si des sections tronquées (Review Handoff, sources, STOP) diffèrent de ce dossier.
+Aucune architecture déclarée validée. NOT ADOPTED. Candidat code/web/BUILD préservés. Trajectoire delivery suspendue. Livraison 2 non engagée.

 ---

-## 11. Annexes — références
+## Annexe — Sources (extrait)
+
+- SDK local : `openai/resources/decisions.d.ts`, `responses.d.ts` (tool_usage), `audio/*`, `admin/*`, `client.d.ts` ; `@openai/agents-core/dist/tracing/*` ; `nora-adapter.ts` L869–873 ; `journal.ts` searchJournalSubjects.
+- Docs OpenAI (2026-11-26 consultation) : Decisions guide ; Agents API overview/environments/vaults ; Admin costs ; speech-to-text ; Realtime ; embeddings ; file search ; web search ; token counting.
+- Handoffs : `7ad34bbb`, `29b0ae4c`.
+- Contrats Next ref `8b334487` : allocation, conducteur, OBS, D4/D6.

-- Candidat : `c574d262` · handoff régularisation `29b0ae4c`.
-- As-built native bounds : `construction/as-built-ml5-provider-native-bounds-20261126.md`.
-- Arbitrage hosted : `construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md`.
-- SDK : `node_modules/openai/resources/responses/responses.d.ts` (`tool_usage`, `max_tool_calls`, `inputTokens`).
-- Docs OpenAI : token counting, web search, Responses create.
-- Contrats (ref `8b334487`) : allocation cognitive / conducteur / OBS.
-- CKC cycle 6 : `pilots/03-architecture-technique.md` (candidate).

 ---

-## 12. Verdict d'étude
+## 14. Détail REPLACE / RETIRE (candidats)
+
+### R-WEB-ASSUMED — Compteurs hosted assumés / ASSUMED_1
+- **Périmètre remplacé :** estimation « 1 recherche = 1 tool call » / fallback ASSUMED.
+- **Écart :** `max_tool_calls` ≠ `num_requests` ; A3 comble a posteriori.
+- **Consommateurs :** frontier FinOps WEB, gates G-WEB-PUBLIC.
+- **Transition :** instrumenter lecture `tool_usage` → dual-run → bascule projection FinOps → retirer ASSUMED.
+- **Non-régression :** tests fake transport tool_usage ; LIVE DEV num_requests.
+- **Rollback :** réactiver ASSUMED + gate A1.
+- **Condition retrait :** GO Morris D-A + LIVE prouvé + projection FinOps alignée.
+
+### R-PREVIEW-HOSTED — Chemins preview hosted si redondants
+- **Périmètre :** preview/estimate custom hors native count.
+- **Écart :** native count couvre input ; preview output reste utile si non garanti.
+- **Transition :** inventaire appels preview → garder seulement ceux sans équivalent natif.
+- **Condition :** après stabilisation A3/count.
+
+### R-CLASSIFIER-RESPONSES (optionnel) — Tours Responses purement classificatoires
+- **Périmètre :** appels Responses dont la seule sortie est label/score.
+- **Écart :** Decisions n’écrit pas de prose ni d’outils.
+- **Consommateurs :** semantic-qualification / readiness helpers.
+- **Transition :** feature-flag ressource Decisions ; dual-path DEV ; bascule si métriques OK.
+- **Rollback :** flag OFF.
+- **Condition :** permission + LIVE oracle + FinOps Decisions.
+
+### R-TRACING-CUSTOM-MID (partiel)
+- **Périmètre :** logs mid-turn redondants avec spans Agents (pas OBS causale).
+- **KEEP** request/operation/attempt ids et FinOps rows.
+- **Condition :** tracing local ON + corrélation span↔OBS.
+
+**Aucun RETIRE large du plan de contrôle Studio** n’est recommandé : frontière, D3 SoT, D6, ledger FinOps attribution, isolation WEB privée restent nécessaires même avec natifs.
+
+---
+
+## 15. Séquences cibles (candidats)
+
+### 15.1 Emission Responses (KEEP + enrichissement)
+```
+Pilote → API Studio → Conducteur (admission)
+  → Frontier beginCampaign
+  → POST /responses/input_tokens (count)
+  → Agent.run / Responses.create (+ max_output_tokens, max_tool_calls)
+  → Response (+ usage, tool_usage?)
+  → Ledger FinOps (tokens + num_requests si présent)
+  → OBS emit
+```
+
+### 15.2 Décision bornée (BUILD candidat)
+```
+Conducteur détecte besoin micro-jugement
+  → Admission ressource Decisions
+  → POST /v1/decisions (questions predicate/choice/score)
+  → Probabilités → acquis D4 / branchement work
+  ≠ HumanDecision D6
+```
+
+### 15.3 Dictée D1 (BUILD candidat)
+```
+Pilote Micro → MediaRecorder
+  → Upload audio → API Studio (auth session)
+  → POST /v1/audio/transcriptions (clé serveur)
+  → Texte dans composer (éditable)
+  → Confirmation → message Nora (comme texte)
+```
+
+### 15.4 L2 eval Agents API (DEFER POC)
+```
+Mandat D7 → (option) Agents API session sandbox
+  → artifacts / outputs
+  → Ingestion preuves D8 Studio
+  → Acceptation humaine D6
+```
+
+---
+
+## 16. Impacts DATA-01 / persistances externes nouvelles
+
+| Persistance | Propriétaire | Arbitrage Morris |
+|---|---|---|
+| Spans export OpenAI | OpenAI | Autoriser ou local-only |
+| Admin costs cache | Studio OPS | OK si agrégats |
+| Decisions (éphémère) | OpenAI request | Pas de SoT |
+| Audio uploads | OpenAI + Studio temp | Rétention courte, consentement |
+| Vector stores / Files | OpenAI | Projection dérivée + révocation |
+| Agents vaults/sessions | OpenAI | Secrets vs vault Studio |
+| Realtime sessions | OpenAI | Ephemeral only |
+
+---
+
+## 17. Alternatives globales (synthèse)
+
+| Stratégie | Description | Quand |
+|---|---|---|
+| S0 Statu quo | Garder plan contrôle épais ; natifs = lecture passive | Si risque fournisseur prioritaire |
+| S1 Convergence contrôlée | R1→R2/R3 ; natifs comme ressources | **Orientation étude** |
+| S2 Native-first agressif | Remplacer frontière/D4 search/L2 par OpenAI | Haut risque SoT/DATA — non recommandé sans preuves |
+| S3 Dual-vendor durable | OpenAI cognition + Cursor L2 + Admin FinOps | Compatible S1 |
+
+---

-**ML5 NATIVE CAPABILITY CONVERGENCE STUDY — READY FOR CHATGPT/MORRIS ARCHITECTURE DECISION.**
+## 18. Capitalisation CKC cycle 6 (candidate, non normative)

-Pas de mutation produit. Candidat préservé. Trajectoire RECETTE suspendue. Construction non engagée.
+- Distinguer **API disponible / SDK typé / permission / comportement prouvé**.
+- Index dérivé ≠ SoT.
+- Admin costs hors runtime agent.
+- Transcription ≠ autorité.
+- Agents SDK ≠ Agents API.
<<<DIFF_END>>>

---

## 6. Matrice de transformation

Voir dossier §9 (table KEEP/REUSE NATIVE/ADAPT/REPLACE/BUILD/DEFER). Classifications = **propositions**.

---

## 7. Architecture cible candidate

Voir dossier §8 (schéma TO-BE) et §15 (séquences). Principe : OpenAI = moteurs ; Studio = gouvernance/SoT/autorité.

---

## 8. Alternatives

- S0 Statu quo
- S1 Convergence contrôlée (**orientation étude**)
- S2 Native-first agressif (non recommandé sans preuves)
- S3 Dual-vendor durable
- WEB A1–A4 ; L2-A/B/C/D ; recherche 1/2/5 vs 3/4

---

## 9. Risques

- Fuite prompts via tracing export
- Admin key mal placée dans runtime
- 2e SoT via Vector Stores
- Audio privacy / rétention
- Agents API isolation/SLA incertains
- Confusion max_tool_calls vs num_requests
- Décision implicite si lecture non vigilante

---

## 10. Décisions Morris

D-A, D-Trace, D-Admin-Costs, D-Decisions, D-DocSearch, D-Audio, D-L2, scopes permissions, reprise RECETTE — dossier §11.

---

## 11. Macro-lots proposés

- **R1** Socle fournisseur / OBS / FinOps / WEB
- **R2** Cognition spécialisée + intelligence documentaire
- **R3** Dictée / transcription (parallélisable après R1)
- **R2-L2-eval** parallèle (non delivery)

Ordre recommandé : R1 → (R3 // R2) selon priorité Morris.

---

## 12. Limites de l’étude

Pas d’appels auth ; pas LIVE ; return_token_budget API≠SDK ; Agents API pricing/SLA incomplets ; permissions clés non re-observées ce cycle.

---

## 13. Preuves futures

LIVE tool_usage ; LIVE Decisions vs Responses ; bench recherche corpus ; UX dictée ; POC Agents API ; Admin costs dry-run.

---

## 14. Validation préservation candidat

| Contrôle | Résultat |
|---|---|
| web tree | PASS `5a1289fcfa26b1963f53ed1364dbd842e771e46c` |
| web/src diff | PASS vide |
| BUILD_ID | PASS non modifié |
| deps/lockfiles | PASS non modifiés |
| Implémentation | PASS aucune |
| Push projet | PASS non effectué |

---

## 15. Verdict Cursor (étude)

**ML5 NATIVE CAPABILITY INTEGRATION STUDY COMPLETED — ARCHITECTURE OPTIONS READY FOR MORRIS ARBITRATION.**

NOT ADOPTED. R5 IN PROGRESS. ML5 OPEN. Delivery suspendue. L2 non engagée. RECETTE protégée. R6 NOT STARTED. NO RELEASE.

Instruction ChatGPT : relire ce handoff au commit exact publié ; distinguer conclusions techniques / hypothèses / propositions / décisions Morris.
