# Cognition spécialisée et intelligence documentaire — Qualification comparative ML2

| Champ | Valeur |
|---|---|
| Version | v0.1 — 27 novembre 2026 |
| Statut | **CANDIDATE — MORRIS ARBITRATION REQUIRED** |
| Projet | SFIA Studio Next exclusivement |
| Trajectoire | R5 / ML5 / Livraison 1 — Convergence OpenAI–Studio |
| Macro-lot | 2 — Cognition spécialisée et intelligence documentaire |
| Intervention | 1 — Qualification comparative et arbitrage d'architecture |
| Famille / Cycle | projet · 6 — Architecture technique · EVOL · Critical |
| CKC | `ckc:studio:technical-architecture` (doctrine historique VALIDATED) — **aucune autorité d'exécution** ; fallback méthode SFIA v2.6 |
| Classification | NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED |
| Autorité | Morris : arbitrages structurants. Pas d'ADOPTED, pas de Delivery complet avant GO. |

> Ce document sélectionne une architecture sur **preuves observées** (code, SDK installé, documentation officielle, benchmarks substitués). Il ne déclare pas la qualification produit end-to-end terminée. Intervention 2 = Delivery intégré **après** arbitrage Morris.

---

## 0. Git Truth et isolation (preuve d'entrée)

| Contrôle | Observé |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD produit | `4a4ff3f1e56f0dc6806dde68dc8ce2292ddef56d` |
| Tree web | `cddf6e8d65c1b677baef77d40a2f499a8b32180d` |
| Merge-base `origin/main` | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| DEV :3100 | LISTEN `node` pid 35473 · `127.0.0.1` |
| RECETTE :3200 | LISTEN `node` pid 89199 · `127.0.0.1` — **non touché** |
| PostgreSQL DEV | `127.0.0.1:5433` · db `sfia_next_dev` · migration **026** appliquée |
| PostgreSQL RECETTE | `127.0.0.1:5434` — isolé |
| BUILD_ID | `gBK_bNHmcAc2_20h5VGPd` |
| `SFIA_WEB_SEARCH_LIVE` / `ENABLED` | `0` / `0` |
| Frontier Admin FP attendu / interdit | `ab6bbec8…` / `f27d814e…` (empreintes non secrètes) |
| Handoff ML1 régularisé | `8e1d82dc119e63ec326b1d708c66522b5faf6d83` (distinct de ce pack) |

**ENV isolation : PASS** — STOP NEXT ENVIRONMENT GATE non déclenché.

---

## 1. Qualification Fake / Real des capacités natives

| Capacité | DOCUMENTED | SDK AVAILABLE | PROJECT AUTHORIZED | REAL QUALIFIED |
|---|---|---|---|---|
| OpenAI Decisions (`POST /v1/decisions`, `gpt-6-luna`) | Oui (guide officiel 2026) | Oui — `openai@7.50.0` expose `client.decisions.create` | **Non prouvé** (pas d'appel LIVE autorisé ce cycle) | **Non** |
| Responses (évaluation / génération) | Oui | Oui — `@openai/agents@0.21.0` + Responses via Frontier | Partiel (chemins produit existants) | Partiel (ML1 / D3 V1) |
| Embeddings | Oui | Oui — `resources/embeddings` | Non pour ingestion projet | Non |
| Vector Stores + `vectorStores.search` | Oui | Oui — `resources/vector-stores` | **Non** — persistance externe | Non |
| File Search hébergé (outil Responses) | Oui | Types SDK présents | Non | Non |
| Files / `input_file` / `input_image` | Oui | Oui | Non pour upload projet / BatiNova | Non |
| Studio `domains/decisions` | — | — | Oui (D6 HumanDecision) | Oui — **≠** OpenAI Decisions |

**Règle de lecture :** une permission technique SDK n'est pas une autorisation métier. Aucun Vector Store, upload, ou Decisions LIVE sans checkpoint Morris (§12).

### Données / rétention (doc officielle consultée)

- `/v1/decisions` : ZDR-eligible sous contrôles compte ; abuse monitoring défaut 30 j ; pas de training.
- `/v1/vector_stores` et `/v1/files` : **application state jusqu'à suppression** ; **ZDR non éligible**.
- `store=false` sur Responses **n'exclut pas** toutes formes de rétention (abuse monitoring, CSAM sur images/fichiers, caches GPU).
- Conséquence DATA-01 : toute stratégie Vector Store / Files durables = **persistance externe** → GO Morris + arbitrage DATA-01 **obligatoire** avant création.

---

## 2. Chantier A — Architecture AS-IS (code observé)

### 2.1 Inventaire des propriétaires

| Domaine | Chemins clés | Comportement observé | Limite observée |
|---|---|---|---|
| D3 conducteur | `cognitive-conductor.ts`, `run-nora-cognitive-turn.ts`, `cognitive-work.ts`, `investigation-state.ts` | Travail cognitif unique, checkpoints, segments, reprise | Politique V1 conservée ; pas de Decisions |
| Qualification | `semantic-qualification.ts`, `durable-qualification.ts`, `fixture-semantic-qualify.ts` | Schéma `NoraTurnQualification` ; stash durable ; fixture TEST_BOUNDARY | Qualification = génération structurée Responses, pas jugement borné isolé |
| Nora / Frontier | `nora-adapter.ts` (`generateNoraReply`), `provider-emission-frontier.ts` | Admission modèle/effort, slots HTTP, pas de qualifyRenew silencieux | Nouvelles familles d'appels (Decisions/VS) **absentes** du Frontier |
| Catalogue | `cognitive-resources/resource-catalog.ts`, `resource-admission.ts`, `tariff-catalog.ts` | Luna/Terra/Sol ; Luna `documented_candidate` | Decisions n'est pas une ressource catalogue distincte |
| D4 | `knowledge/journal.ts` (`searchJournalSubjects`), `d4-read-tools.ts` | Recherche **lexicale** `includes` sur titre/acquis/résumé/open points | Pas d'embeddings ; paraphrases/synonymes non couverts par le moteur |
| D6 | `domains/decisions/*`, `humanDecisions` schema | HumanDecision, révocation, effets | Homonyme « Decisions » OpenAI — confusion terminologique à garder explicite |
| D8 | `proofs/d8-cognitive-criterion-eval.ts` | Critères cognitifs ; heuristique / LIVE borné | Pas d'oracle Decisions |
| D9 | `git-read-tools.ts` | Lecture Git exacte, recherche exacte, PDF Git | Propriétaire version/blob |
| Documents | `pdf-extract-server.ts`, `pdf-read-contract.ts`, viewer | Extraction pdfjs ; `SCANNED_NO_TEXT` ; OCR out of scope | Multimodal natif absent |
| OBS | `lib/observability.ts`, `.obs/dev` | Corrélation opérationnelle | Pas d'événements Decisions/VS |
| FinOps | `usage-accounting.ts`, `finops/*`, collector Admin | Collecteur connaît déjà `/usage/decisions|embeddings|vector_stores|file_search_calls` | Pas d'émission produit de ces familles |

### 2.2 Flux AS-IS

#### A — Intention Pilote → qualification Nora → ressource

| | |
|---|---|
| Propriétaire | D3 + admission catalogue |
| Déclencheur | Tour conversation (`turn-command` / service) |
| Entrée / sortie | Texte Pilote → `NoraTurnQualification` + politique modèle/effort |
| Durable | `resultJson.semanticQualification` + cognitive work / checkpoint |
| Droits | Session Pilote / projet |
| Coût | Tokens Responses (segments) |
| Preuve | Chemins ML5 / V1 ; fixtures |
| KNOWN GAP | Jugements purement évaluatifs embarqués dans le même tour génératif |

#### B — Recherche D4 → sélection → consultation → contexte D3

| | |
|---|---|
| Propriétaire | D4 (`searchJournalSubjects` + outils `d4-read-tools`) |
| Déclencheur | Outil Nora / API journal search |
| Entrée / sortie | Query string → hits subject/snippet |
| Durable | Journal PG (sujets, acquis, open points) |
| Limite | Lexical only — `toLowerCase().includes(q)` |
| KNOWN GAP | Paraphrases, synonymes, homonymes sémantiques |

#### C — Lecture Git D9 → source/version → connaissance D4 → citation

| | |
|---|---|
| Propriétaire | D9 puis D4 pour conservation |
| Déclencheur | Outils Git read |
| Durable | Identité commit/blob ; connaissance versionnée |
| Force | Références exactes, versions |
| KNOWN GAP | Pas de ranking sémantique sur corpus Git large |

#### D — Document PDF → récupération autorisée → extraction → analyse

| | |
|---|---|
| Propriétaire | Documents + droits projet |
| Déclencheur | Lecture document / outil |
| Sortie | Pages texte ou `SCANNED_NO_TEXT` / `NO_EXTRACTABLE_TEXT` |
| Durable | Versions documentaires Studio |
| Force | Visionneuse + identité + couverture explicite |
| KNOWN GAP | Schémas scannés / tableaux complexes sans OCR |

#### E — Évaluation cognitive → résultat → autorité D6

| | |
|---|---|
| Propriétaire | D6 seul pour autorité |
| Règle | Sortie IA = résultat cognitif/technique — **jamais** HumanDecision |
| Preuve | Contrat CONV-F03 ; schema `humanDecisions` |

#### F — Appel fournisseur → Frontier → OBS → FinOps

| | |
|---|---|
| Propriétaire | Frontier + FinOps |
| État | ML1 : enveloppes cumulatives, fail-closed, comparaison UX |
| KNOWN GAP | Familles Decisions / embeddings / VS / file_search non émises côté produit |

### 2.3 Lectures redondantes / gaps (observés, non hypothèses)

- Recherche D4 purement lexicale (**observé** dans `journal.ts`).
- Qualification sémantique = tour Responses structuré large (**observé**) — pas de sous-API Decisions.
- Aucun `vectorStores` / `embeddings.create` / `decisions.create` dans `web/src` produit (**observé** ; seul le collecteur Admin liste les endpoints d'usage).
- PDF scanné → erreur honnête, pas d'invention de texte (**observé**).

---

## 3. Chantier B — Cognition spécialisée (Decisions)

### 3.1 Inventaire des appels évaluatifs Responses

Usages réellement candidats à un jugement borné (à extraire du conducteur, **sans** remplacer toute la qualification) :

| Tâche | Aujourd'hui | Candidat Decisions |
|---|---|---|
| Pertinence d'un passage / source | Jugement implicite dans génération Nora | `predicate` |
| Couverture d'une question | Génération argumentée | `predicate` / `score` |
| Adéquation ressource modèle/effort | Admission déterministe + proposition Nora | **Garder** admission Studio ; Decisions optionnel en conseil seulement |
| Comparaison d'options | Génération | `choice` |
| Besoin d'approfondissement | Génération | `predicate` |
| Conformité consultative D8 | Heuristique / eval existante | `score` consultatif — **jamais** autorisant |

**Ne pas remplacer** `semantic-qualification` entier : il produit intents, effets projetés, binding pilotage, propositions connaissance — hors typologie predicate/choice/score.

### 3.2 Benchmark (état)

| Élément | Statut |
|---|---|
| Corpus labellisé indépendant | Préparé — annexe synthétique `ml2-qualification/corpus-decisions-labels.json` |
| Labels | Manuels / règles déterministes — **pas** produits par le mécanisme évalué |
| LIVE Decisions vs Responses | **BLOQUÉ** — checkpoint Morris §12 requis |
| Bench substitué | Script `web/scripts/ml2-document-intelligence-substituted-bench.mjs` — mesure protocole, pas qualité fournisseur |
| Evidence | `web/.sfia-evidence/document-intelligence/substituted-bench-latest.json` |

**Fake/Real :** résultats substitués = **FAKE pour qualité fournisseur** ; **REAL pour reproductibilité du protocole et baseline lexicale**.

**Baseline lexicale observée (corpus synthétique, 2026-11-27) :** exact_id recall@5 = **1.0** ; paraphrase/synonym mean recall = **0.5** (synonyme = 0) ; isolation inter-projets = **0 fuite** sur Q-ISO-01 ; requête version mobilise encore `syn-auth-v1` stale — gap lifecycle index/sélection.

### 3.3 Autorité

Toute sortie Decisions reste résultat cognitif/technique :

- ne crée pas de HumanDecision ;
- n'accorde aucun droit ;
- n'autorise aucun effet ;
- n'est pas preuve D8 indépendante à elle seule.

### 3.4 Contrat cible candidat (si GO)

- Ressource nommée : `cognitive.bounded_judgment` (responsabilité : jugements bornés) — **même catalogue**, entrée distincte, pas second moteur politique.
- Sélection sémantique Nora → admission déterministe Frontier (nouvelle famille `decisions`) → budget FinOps séparé.
- I/O : `questions[]` typées ; refus/incertitude → fallback Responses ou suspension motivée.
- Versionnement questions + retrait ciblé réversible.
- Attribution OBS/FinOps sans génération fictive.

### 3.5 KEEP / ADAPT / REPLACE / DEFER

| Chemin | Verdict | Motif |
|---|---|---|
| `semantic-qualification` (schéma + stash) | **KEEP** | Hors typologie Decisions |
| Jugements purement évaluatifs embarqués dans Responses | **ADAPT** (candidat) | Remplacement ciblé **si** bench LIVE ≥ équivalent |
| Admission modèle/effort | **KEEP** | Déterministe Studio |
| Routeur lexical / classifieur préalable systématique | **DEFER / refuse** | Contredit CONV-F02 |
| Decisions comme autorité D6 | **REFUSE** | Doctrine |

---

## 4. Chantier C — Retrieval et recherche documentaire

### 4.1 Baseline

| Stratégie | Qualité attendue sur | Preuve |
|---|---|---|
| Lexical D4 (`includes`) | Identifiants, termes exacts, titres | Code + bench substitué |
| Consultation sujets / acquis | Navigation structurée | Outils D4 |
| Git exact (D9) | Versions, blobs, chemins | Outils Git |
| Références exactes | Citations versionnées | D4/D9 |

**Conserver** lexical + exact pour tout ce qui est déjà correct (IDs, versions, sigles littéraux).

### 4.2 Alternatives comparées (sur doc + contraintes DATA-01)

| ID | Stratégie | Valeur | Complexité | Persistance externe | DATA-01 | Reco Cursor |
|---|---|---|---|---|---|---|
| A | Lexical existant | Exact match | Faible | Non | Compatible | **KEEP** (fallback + exact) |
| B | Embeddings + projection locale Studio | Sémantique sans index hébergé durable fournisseur | Moyenne | Non (vecteurs locaux) | Plus favorable | **Candidat principal si sémantique requis** |
| C | Vector Stores + search directe | Moins de moteur custom | Moyenne | **Oui** (jusqu'à delete) | **Tension forte** | **DEFER** sans GO DATA-01 |
| D | File Search hébergé dans Responses | Retrieval+génération | Faible intégration | Oui + risque filtre post-génération | Tension + CONV-F06 | **DEFER / défavorisé** |
| E | Hybride lexical + sémantique dérivé | Exact + paraphrase | Moyenne | Selon B ou C | B préférable | **ADAPT** = A + B |

**Hypothèse prioritaire mandat (VS search avant moteur complexe) :** documentée et **non validée**. Contre-preuve doctrinale : VS = ZDR-ineligible + rétention jusqu'à delete → incompatible avec « pas de persistance externe » sans GO. Recommandation : **ne pas** créer de VS tant que DATA-01 n'autorise pas ; qualifier d'abord **B** (embeddings locaux) et baseline **A** sur corpus synthétique ; VS seulement si Morris tranche persistance et isolation projet.

### 4.3 Corpus

| Corpus | Existence | Upload autorisé | Usage ce cycle |
|---|---|---|---|
| Chantiers360 / RoomBooking | À confirmer droits projet | **Non** sans GO DATA | Lecture locale éventuelle seulement |
| Connaissances D4 | Oui (DEV) | Non | Baseline locale |
| Git versionné | Oui | Non | Exact D9 |
| Synthétique discrimination | Créé (`ml2-qualification/corpus-retrieval-oracle.json`) | N/A | Bench substitué |
| BatiNova | Non transmis | **Interdit** sans GO DATA | Hors scope LIVE |

Oracle défini **avant** observation des candidats (faits, passages, versions, absents).

### 4.4 Métriques (protocole)

recall@k, precision@k, rang 1er pertinent, couverture faits, exactitude citations, erreurs de version, résultats non autorisés, latence, coûts ingestion/stockage/recherche, complexité ops.

### 4.5 Cycle de vie (contrat logique candidat)

`sourceId`, `owner`, `lane`, `projectId`, `source`, `versionExacte` (commit/blob ou doc version), `empreinte`, `scope`, `droit`, `passage/page/plage`, `indexRef` dérivée, `ingestionState`, `fraîcheur`, `deleteState`.

Contrôles : scope avant search ; droits/version **avant** injection Nora ; consultation originale revalide ; révocation → non-mobilisation même si index distant stale ; index reconstructible depuis D4/D9 ; pas d'index global inter-projets.

### 4.6 Arbitrage Cursor (recherche)

| | |
|---|---|
| Stratégie principale proposée | **E = A (lexical/exact) + B (embeddings locaux dérivés)** pour paraphrases — D4/D9 restent SoT |
| Fallback | Lecture exacte D4/D9 / PDF extract |
| Non retenir simultanément | Plusieurs moteurs sémantiques permanents |
| VS / File Search | **DEFER** — checkpoint DATA-01 + GO Morris |
| Recommandation | Ne pas construire de POC permanent dans l'app |

---

## 5. Chantier D — Files, Vision, PDF

### 5.1 AS-IS

- Récupération sécurisée + versions + droits : Studio.
- Extraction pdfjs serveur ; recherche textuelle page ; pagination ; `SCANNED_NO_TEXT` / `OCR_OUT_OF_SCOPE`.
- Visionneuse conservée pour consultation originale.

### 5.2 Natives

| Mécanisme | Valeur potentielle | Risque | Reco |
|---|---|---|---|
| `input_file` / transmission ponctuelle | PDF textuel vers modèle | Rétention abuse / CSAM scan ; taille | **ADAPT** candidat borné après GO |
| `input_image` / Vision | Schémas, scans, tableaux | Probabiliste ≠ OCR ; pages inventables | **ADAPT** pour zones scannées **avec** limites explicites |
| `fileId` durable | Réutilisation | Persistance `/v1/files` | **DEFER** |
| OCR exhaustif via Vision | — | Non garanti | **Ne pas promettre** |

### 5.3 Corpus discriminant

Synthétique préparé (`ml2-qualification/corpus-pdf-vision-oracle.json`) : textuel, scanné (simulé), schéma, tableau, zones illisibles. BatiNova : **non utilisé** (pas de GO DATA).

### 5.4 Invariants à préserver

Visionneuse · identité · versions · provenance · droits · consultation originale · couverture · annulation · erreurs · réouverture. Zone non lue = non lue. Pas de citation de page inventée.

### 5.5 KEEP / ADAPT / REPLACE / DEFER

| Responsabilité | Verdict |
|---|---|
| Extraction déterministe textuelle | **KEEP** |
| Visionneuse / identité | **KEEP** |
| Scans / schémas | **ADAPT** (Vision ponctuelle) si bench LIVE discriminant |
| Remplacement OCR local | **DEFER** |
| Stockage fileId distant | **DEFER** |

---

## 6. Chantier E — Intégration transverse (interfaces minimales)

Pas de framework générique. Interfaces **uniquement** pour mécanismes retenus après arbitrage :

| Surface | Contrat candidat |
|---|---|
| D3 | Travail unique ; sélection sémantique ; checkpoint ; budget ; fallback Responses |
| D4 | SoT connaissances/docs ; droits ; contradictions |
| D6 | Autorité humaine exclusive |
| D8 | Oracle indépendant ; limites |
| D9 | Réf Git exacte |
| Frontier | Nouvelles familles : `decisions`, `embeddings`, `files_ephemeral` — admissions, scopes, retries, refus |
| FinOps | Unités distinctes (tokens Decisions ≠ storage VS) ; pas de coût inventé ; collector déjà prêt côté Admin |
| OBS | Corrélation ids — pas de contenu privé |
| UX | Aucun écran config moteur par défaut ; Nora inchangée pour le Pilote |

Blast radius estimé si GO Decisions ciblé : Frontier + accounting + 1–N helpers évaluatifs + tests — **sans** toucher D6/DATA-01/migrations.

Blast radius si GO embeddings locaux : nouveau module index dérivé + jobs fraîcheur + gates droits — **sans** upload fournisseur.

Blast radius VS : DATA-01 + Frontier + lifecycle delete/reconcile + FinOps storage — **élevé**.

---

## 7. CONV-F21 … F26 — Qualification d'acceptation (intervention 1)

| CONV | Preuve d'entrée | Preuve obtenue | Niveau | Limite | Mécanisme proposé | Preuve sortie requise (I2) |
|---|---|---|---|---|---|---|
| F21 | Contrat fonctionnel §4 ; corpus labels | Protocole + corpus ; **pas** LIVE | DOCUMENTED / protocole REAL | Qualité fournisseur UNKNOWN | Decisions ciblé + fallback Responses | Bench LIVE borné vs oracle |
| F22 | Baseline lexicale code | Bench substitué : exact=1.0 ; synonyme=0 ; isolation OK ; stale v1 encore hit | REAL baseline / FAKE sémantique fournisseur | Pas de VS/embeddings LIVE | Hybride A+B | recall/precision @k corpus autorisé |
| F23 | Contrat technique §4.2 | Contrat cycle de vie candidat | DOCUMENTED | Pas d'index distant créé | Index dérivé reconstructible | Revocation/isolation tests |
| F24 | pdf-extract + oracle synthétique | AS-IS SCANNED_NO_TEXT | REAL local / FAKE vision | BatiNova non utilisé | KEEP extract + ADAPT vision | Oracle humain + viewer |
| F25 | Contrats D3/D4/D6/D8/D9 | Non rejoué E2E ce cycle | DOCUMENTED | I2 | Pas de contournement | Parcours investigation complet |
| F26 | Collector Admin paths | Paths présents ; pas d'émission | PARTIEL | Pas d'usage réel | Attribution familles nouvelles | Snapshots usage sans double compte |

---

## 8. Synthèse d'arbitrage pour Morris

### 8.1 Decisions — quelles responsabilités ?

| | |
|---|---|
| Problème | Tours Responses purement évaluatifs coûteux / lents |
| Options viables | (1) KEEP Responses (2) ADAPT Decisions ciblé (3) REPLACE large qualification |
| Résultats | (3) non viable (schéma qualification hors typologie) ; (2) prometteur sur doc (~10×, typed) **sans preuve LIVE** |
| Risques | Confusion D6 ; seuil universel ; permission projet non prouvée |
| Coût | Inconnu jusqu'à LIVE ; FinOps doit séparer |
| Impact | Frontier + helpers ; UX Pilote inchangée |
| **Reco Cursor** | **ADAPT ciblé** après GO bench LIVE ; **pas** de moteur d'autorité ni étape obligatoire |
| Réserve | REAL QUALIFIED = non |
| **Décision Morris** | Autoriser enveloppe Decisions DEV ? Périmètre des questions nommées ? |

### 8.2 Recherche documentaire

| | |
|---|---|
| Problème | Lexical insuffisant pour paraphrases ; exact déjà bon |
| Options | A / B / C / D / E |
| **Reco Cursor** | **E = A+B** principal ; C/D **DEFER** |
| Fallback | Exact D4/D9 / PDF |
| **Décision Morris** | Persistance externe VS indispensable ? Si non → B. Si oui → DATA-01 dédié |

### 8.3 Données / DATA-01

| | |
|---|---|
| Persistance externe indispensable ? | **Non démontré** pour valeur sémantique (B alternative) |
| VS compatible DATA-01 ? | Seulement avec GO, isolation projet, delete/reconcile, pas d'index global |
| Moins risqué | Embeddings locaux dérivés ; transmission ponctuelle files |

### 8.4 Files / Vision

| | |
|---|---|
| **Reco** | KEEP extract+viewer ; ADAPT Vision/file ponctuel pour scans/schémas après GO ; DEFER fileId durable |
| Valeur réelle | Combler `SCANNED_NO_TEXT` et relations de schéma — **à prouver** sur oracle |

### 8.5 Existant

| Mécanisme | Verdict |
|---|---|
| Lexical D4 + Git exact | KEEP |
| semantic-qualification | KEEP (cœur) |
| Jugements évaluatifs annexes | ADAPT → Decisions si prouvé |
| PDF extract + viewer | KEEP |
| OCR inventé / citation inventée | REFUSE |
| File Search hosted | DEFER défavorisé |
| Second catalogue politique | REFUSE |

### 8.6 Intégration / blast radius

Interfaces minimales Frontier/FinOps/OBS ; un intégrateur unique en I2 ; pas de micro-cycles artificiels.

### 8.7 Preuves encore nécessaires avant dispo produit

1. GO + bench LIVE Decisions vs Responses (F21).
2. Bench retrieval A vs B (et C seulement si GO DATA) (F22–F23).
3. Bench Vision sur corpus discriminant (F24).
4. Attribution FinOps familles nouvelles sur usages réels (F26).
5. Parcours F25 non régressif.

**Si Morris refuse tout LIVE :** architecture reste CANDIDATE ; verdict PARTIAL.

---

## 9. Checkpoint — autorisation benchmarks LIVE (à présenter avant tout effet)

Sous-enveloppes distinctes demandées :

| Enveloppe | Endpoint | Corpus | Max contacts | Stockage | DATA-01 |
|---|---|---|---|---|---|
| Decisions | `/v1/decisions` | synthétique labels | borné (ex. ≤50) | non durable app state | non |
| Responses contrôle | Responses | même oracle | borné | `store` explicite | non |
| Embeddings | `/v1/embeddings` | synthétique public | borné | vecteurs **locaux** | non upload doc projet |
| Retrieval VS | VS create/search | **interdit** sans GO | — | durable | **GO requis** |
| Files/Vision | input_image/file | synthétique (pas BatiNova) | borné | ponctuel | GO si fileId |

Frontier : vérifier réserves concurrence / restart / contacts incertains sur chemins réellement utilisés **avant** émission.

---

## 10. Plan de Delivery intégré (Intervention 2 — après arbitrages)

### 10.1 Prérequis GO Morris

- [ ] Décisions structurantes 8.1–8.5
- [ ] Enveloppes LIVE si retenues
- [ ] DATA-01 si VS/files durables

### 10.2 Périmètre Delivery (mécanismes retenus seulement)

1. Contrats propriétaires ciblés (amendements, pas rewrite normatif avant GO).
2. Frontier : familles + admissions + refus.
3. Helpers jugements bornés (si Decisions).
4. Index dérivé local (si B) + lifecycle révocation.
5. Vision ponctuelle (si retenue) branchée sur chemin PDF scanné.
6. FinOps/OBS attribution.
7. Tests + preuves E2E F21–F26.
8. Retrait redondances **démontrées**.
9. Rollback / feature flags OFF par défaut.
10. Documentation as-built + gates.

### 10.3 Parallélisation

Uniquement après stabilisation interfaces Frontier/D4 indexRef. Intégrateur unique. Pas de fractionnement micro-cycles.

### 10.4 Hors Delivery I2

Macro-lot 3 · activation permanente sans preuve · migration PG non justifiée · changement permissions OpenAI · RECETTE/STABLE · ADOPTED.

---

## 11. Risques classés

| ID | Risque | Sévérité | Mitigation |
|---|---|---|---|
| R1 | Confusion OpenAI Decisions / D6 HumanDecision | Haute | Nommage `bounded_judgment` ; tests refus effet |
| R2 | VS / Files contournent DATA-01 | Haute | DEFER + GO explicite |
| R3 | File Search filtre après génération | Haute | Défavorisé |
| R4 | Citation page inventée Vision | Haute | Couverture explicite ; oracle |
| R5 | Coût inconnu présenté comme nul | Moyenne | CONV-F26 / fail-closed FinOps |
| R6 | Double moteur sémantique permanent | Moyenne | Une stratégie + fallback |
| R7 | Bench substitué pris pour qualité LIVE | Haute | Fake/Real explicite |

---

## 12. Décisions Morris attendues (checklist)

1. GO enveloppe **Decisions** DEV (oui/non + plafond) ?
2. Stratégie recherche **E=A+B** vs expérimentation **C** sous DATA-01 ?
3. Persistance externe : **non** / **oui avec conditions** ?
4. Vision/files ponctuels : GO corpus synthétique (oui/non) ?
5. Autoriser modification Frontier pour familles nouvelles en I2 ?
6. Confirmer conservation D3 V1 / WEB LIVE OFF / pas de migration ?

---

## 13. Annexes et artefacts

| Artefact | Chemin |
|---|---|
| Régularisation ML1 immuable | `handoff-ml1-regularization-immutable.md` |
| Clôture ML1 | `cloture-macro-lot-1.md` |
| Corpus Decisions labels | `ml2-qualification/corpus-decisions-labels.json` |
| Corpus retrieval oracle | `ml2-qualification/corpus-retrieval-oracle.json` |
| Corpus PDF/Vision oracle | `ml2-qualification/corpus-pdf-vision-oracle.json` |
| Protocole | `ml2-qualification/protocole-qualification.md` |
| Script bench substitué | `web/scripts/ml2-document-intelligence-substituted-bench.mjs` |
| Evidence locale | `web/.sfia-evidence/document-intelligence/` |

---

## 14. Verdict d'intervention

**MACRO-LOT 2 — FINAL DELIVERY — STOP — MORRIS CHECKPOINT A+B REQUIRED**

Motifs :

- Corrections droits / rebuild admissible-only / judgment / Frontier générique / FinOps audit réalisées.
- Migration 027 SQL définitive + module PG prêts — **apply en attente Gate A**.
- Reliquat LIVE réconcilié (90/236 · Nora ~38/40) — **émission en attente Gate B** (≤30 HTTP proposés).
- Pas de Handoff intermédiaire · verdict exit **non** prononcé tant que A/B + parcours LIVE incomplets.
- Flags OFF · RECETTE / WEB OFF / Admin unused.

R5 IN PROGRESS · ML5 OPEN · Livraison 1 non acceptée globalement · Macro-lot 1 accepté avec réserves · Macro-lot 2 checkpoint A+B · Macro-lot 3 non engagé · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED.
