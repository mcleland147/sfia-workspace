# ChatGPT Review Pack — G0 Architecture + Product Persistence Decision Pack

| Champ | Valeur |
| --- | --- |
| **Horodatage** | 2026-08-13 07:59:47 +0200 (Europe/Paris) |
| **Objectif** | Gate G0 — pack décision architecture convergence + Product persistence |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Justification profil** | Arbitrage backbone Studio + persistence durable ; coûteux à inverser ; aucune décision implicite |
| **Base** | origin/main `3413d2e42243d5419f874a8ccf5a50341bb968d6` |
| **Branche projet** | `architecture/sfia-studio-g0-convergence-persistence` @ `3413d2e…` |
| **Commit/push/PR projet** | **NON** |
| **Handoff** | publish-in-cycle requis |
| **review pack content coverage** | created files full content = **YES** · modified sections = N/A · useful diff = YES · synthesis only = **NO** · verdict coverage = **COMPLETE** |

## Instruction ChatGPT (§9.1 template)

Avant toute analyse de ce rapport, lire depuis Git :

- branche : `sfia/review-handoff`
- fichier canonique : `sfia-review-handoff/latest-chatgpt-review.md`

## Local Git Truth Check

| Check | Résultat |
| --- | --- |
| git fetch origin | OK |
| origin/main | `3413d2e42243d5419f874a8ccf5a50341bb968d6` — **PASS** (baseline attendue) |
| Branche avant | `docs/sfia-studio-chatgpt-layer1-status` @ `1235d10…` |
| Branche G0 | créée `architecture/sfia-studio-g0-convergence-persistence` depuis origin/main |
| HEAD G0 | `3413d2e…` — **HEAD_BASELINE_OK** |
| Tracked dirty | vide (hors untracked) |
| Staged | vide |
| Untracked toléré | `.tmp-sfia-review/**` · `.tmp-sfia-review-pre.txt` |
| Collision branche G0 | LOCAL_ABSENT / REMOTE_ABSENT avant création — OK |
| Push branche projet | **NON** |

## Git Review Index

| Path | Action |
| --- | --- |
| `projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md` | **CREATED** (untracked ; non commit) |
| Build Doctrine / Roadmap / README / framing / app / method | **UNCHANGED** (READ ONLY) |
| `.tmp-sfia-review/chatgpt-review.md` | reset mono-cycle puis FULL |

Status court produit : `?? projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

## Convergence Pre-check

| Champ | Valeur |
| --- | --- |
| triggered | **oui** |
| Build Doctrine | lue · **VALIDATED — ACTIVE ON MAIN** |
| Roadmap | lue · Gate **G0 READY FOR DECISION** · M1 NOT STARTED (prérequis G0) |
| doctrine v3 applicable | framing `10`, `19`, `26`, `30`, `32`, `34`, `36`, `37` |
| capacité v3 ciblée | précondition backbone unique débloquant **V3-F02 / M1** et chaîne M1→M6 |
| milestone | **G0** |
| actifs constatés | OA Memory `wireOaStack` · vertical-slice · OPS1 sqlite/Cursor · D1 sqlite · execution-run Memory · FinOps Postgres · F1/F2/F3 |
| classifications | KEEP/ADAPT/COMPLETE/HARVEST/REPLACE/FREEZE/RETIRE LATER (reco — §4 pack) |
| gaps | architecture backbone + Product persistence |
| dépendance aval | **M1** |
| exit proof | décisions G0-A/B écrites consommables Delivery M1 |
| dette | aucune implémentation spéculative |
| capacité suivante | **M1** |
| gates | Morris **G0-A** + **G0-B** |

**Trajectory link :** G0 → M1 V3-F02 — **PASS** (Roadmap B7–B8).

## CKC pilot

| Champ | Valeur |
| --- | --- |
| Fichier | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| status | **candidate** |
| usage | experimental cognitive guidance |
| autorité d’exécution | **aucune** |

## Sources consultées (rôle)

Voir pack §2. Résumé : template + routing + operating model + guardrails + Knowledge Layer + CKC candidate + Build Doctrine + Roadmap + README + framing 10/19/26/30/32/34/36/37 + audit blob `31a5db07` (Option 2 Dual-Shell) + code app lib/oa, d1, ops1, vertical-slice-runtime, package.json, db/migrations.

## Inventaire repo/code (synthèse factuelle)

Voir pack §3–§4. Points clés :
- `wireOaStack` = composition Studio Memory
- `productPersistence: NOT_SELECTED`
- D1/OPS1 = `node:sqlite` parallèle
- FinOps = `pg` + migrations finops only
- Memory* T-A1…T-A6 actifs ; pas d’adapter produit durable OA

## Options architecture / persistence / trade-offs / reco

Voir pack §6–§11.
- G0-A reco : **Option 1** — NOT DECIDED
- G0-B reco : **P-SQLite** — NOT SELECTED
- Option 2 Dual-Shell = Git audit only

## Risques / réserves

Voir pack §14 (R1–R10).

## Décisions Morris requises

- **G0-A** PENDING
- **G0-B** PENDING
- Autres gates Roadmap **non consommés**

## Contenu COMPLET du decision pack

# SFIA Studio G0 — Architecture de convergence & Product persistence — Decision Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **décision** Gate G0 (architecture + Product persistence) |
| **Statut** | **CANDIDATE — READY FOR MORRIS DECISION** |
| **Horodatage** | 2026-08-13 07:56:31 +0200 (Europe/Paris) |
| **Base Git** | `origin/main` `3413d2e42243d5419f874a8ccf5a50341bb968d6` |
| **Branche locale** | `architecture/sfia-studio-g0-convergence-persistence` (non poussée) |
| **Cycle** | 6 — Architecture technique · Profil **Critical** · EVOL |
| **Gate** | G0 — Convergence architecture / persistence |
| **G0-A** | Architecture convergence — **PENDING** (Morris) |
| **G0-B** | Product persistence — **PENDING** (Morris) |
| **Build Doctrine / Roadmap** | **VALIDATED** (gouvernance construction) — non modifiées ici |
| **Runtime v3** | **NON ADOPTED** |
| **Cursor REAL / Gate D** | **NOT AUTHORIZED / NOT CONSUMED** |
| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ M1 implémenté · ≠ Auth.js promu · ≠ Cursor REAL · ≠ Gate D · ≠ runtime ADOPTED · ≠ troisième moteur · ≠ FinOps = Product persistence · ≠ schéma SQL / migration / code |

---

## 1. Executive decision summary

**Observation.** Sur `main`, `/studio` est un vertical slice OA **Memory process-local** (`wireOaStack`) avec F1–F3 (F3 = fixture). En parallèle existent D1 SQLite (`/projects`), OPS1 SQLite+Cursor (`/ops1`), execution-run Memory, FinOps Postgres — **sans** Product persistence sélectionnée (`productPersistence: NOT_SELECTED`).

**Gap G0.** Sans backbone unique + tech Product persistence, M1 (V3-F02 Project/LPS durable, restart-safe) ne peut pas démarrer sans risque de multi-moteurs.

**Recommandations (≠ décisions).**

| Axe | Recommendation | Statut |
| --- | --- | --- |
| **G0-A Architecture** | **Option 1 — OA Native Backbone + Harvest OPS1 Cursor** | **RECOMMENDATION — NOT DECIDED** |
| **G0-B Persistence** | **SQLite local (`node:sqlite`) derrière ports OA T-A1(+)** pour M1 mono-opérateur, DB produit **distincte** de D1/OPS1/FinOps ; trajectoire exit → Postgres documentée | **RECOMMENDATION — NOT SELECTED** |

**Décisions Morris requises :** G0-A + G0-B (séparées). Aucune autre décision Roadmap n’est consommée ici.

---

## 2. Sources / evidence

### 2.1 Gouvernance / processus

| Source | Rôle |
| --- | --- |
| `prompts/templates/sfia-cycle-execution-template.md` | Template exécution + handoff L3 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routing |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Garde-fous |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge Layer |
| CKC pilot `…/pilots/03-architecture-technique.md` | **status=candidate** · usage=experimental cognitive guidance · **autorité d’exécution = aucune** |

### 2.2 Convergence VALIDATED

| Source | Sections utiles |
| --- | --- |
| `convergence/sfia-studio-convergence-build-doctrine.md` | Anti-claims ; couches 1–3 ; questions de sortie |
| `convergence/sfia-studio-convergence-roadmap.md` | B3–B6 ; **G0** ; **M1** ; Option 1 reco ; open gates |
| `projects/sfia-studio/README.md` | Statuts convergence |

### 2.3 Doctrine v3 applicable (destination — NON ADOPTED runtime)

`sfia-v3-framing/10`, `19`, `26`, `30`, `32`, `34`, `36`, `37` — Git vs SQL ; D3/D5 ; LPS sélectif ; HumanDecision/ExecutionContract immuables ; V3-F02.

### 2.4 Preuve Option 1 / Option 2

| Option | Preuve Git | Autorité |
| --- | --- | --- |
| **Option 1** — OA Native Backbone + Harvest OPS1 Cursor | Roadmap B3 (VALIDATED) + audit blob `31a5db07…` (commit handoff `c5b417dc…`) | Reco VALIDATED + détail audit |
| **Option 2** — Dual-Shell (OA front + OPS1 execution) | **Uniquement** audit blob `31a5db07…` / commit `c5b417dc…` | **Candidate audit** — **absente** du corps VALIDATED Roadmap (nommée seulement « Option 1 vs 2 ») |

**Réserve provenance Option 2 :** définition Git réelle trouvée ; **pas** reproduite dans les docs VALIDATED. Pas de contradiction multi-sources de même autorité — **omission** Roadmap, pas conflit.

### 2.5 Code (read-only) — preuves clés

| Actif | Preuve |
| --- | --- |
| Composition `/studio` | `lib/vertical-slice-runtime/service.ts` → `wireOaStack` |
| Memory T-A1…T-A6 | `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}/infrastructure/memory*` |
| Disclosure | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` |
| D1 SQLite | `lib/d1/db.ts` (`node:sqlite`, tables `d1_*`) |
| OPS1 SQLite + Cursor | `lib/ops1/db.ts`, adapters Cursor |
| FinOps Postgres | `package.json` `pg@~8.22.0` ; `db/migrations/*finops*` ; `lib/oa/finops/infrastructure/postgres/*` |
| Deps SQLite npm | **ABSENT** `better-sqlite3` / drizzle / prisma — SQLite via **`node:sqlite`** |

---

## 3. Current-state architecture map

```text
/studio (Nora F1–F3)
  └─ vertical-slice-runtime.getRuntimeApplicationService (process-local)
       └─ wireOaStack
            T-A1 Project/LPS     → Memory*
            T-A2 Cycle/CKC       → Memory*
            T-A3 HumanDecision   → Memory* + demo authority
            T-A4 ExecutionContract → Memory*
            T-A5 Attempt         → Memory* + TestExecutionAdapter (FIXTURE)
            T-A6 Evidence/RB     → Memory* (UI reinjection ; pas LPS writeback)

PARALLEL (non F3 authority chain):
  /projects  → D1 node:sqlite (durable local, modèle projet distinct)
  /ops1      → OPS1 node:sqlite + Cursor fixture/REAL (flag)
  execution-run → Memory (+ ombres FinOps) — non branché F1–F3
  FinOps     → PostgreSQL (coût/contrôle) — transverse ≠ Product persistence
```

**Observation :** multi-surfaces durables **coexistent** avec un backbone Studio **non durable**. G0 doit empêcher la poursuite de plusieurs moteurs métier concurrents.

---

## 4. Asset disposition matrix

*Classifications = **recommandations de convergence** jusqu’à GO Morris (alignées Roadmap B4), sauf KEEP d’usage factuel.*

| Actif | Preuve | Classification reco | Conséquence G0/M1 |
| --- | --- | --- | --- |
| T-A0 Doctrine FS | `lib/oa/doctrine` | **KEEP** | Pin doctrine M1+ |
| T-A1 Project/LPS ports + Memory | `lib/oa/project` | **COMPLETE** ports · **REPLACE** Memory | Cœur M1 |
| T-A2 Cycle/CKC | `lib/oa/cycle` | **ADAPT** / **COMPLETE** | Aval M2 |
| T-A3 HD | `lib/oa/decision` | **COMPLETE** · durable ultérieur | Aval M3 |
| T-A4 Contract | `lib/oa/execution-contract` | **KEEP** / **COMPLETE** | Aval M3–M4 |
| T-A5 Attempt/Adapter | `lib/oa/execution-attempt` | **ADAPT** / **HARVEST** OPS1 | Aval M4 |
| T-A6 Evidence/RB | `lib/oa/evidence-review` | **COMPLETE** | Aval M5 |
| T-A7 rails | `lib/platform/t-a7` | **KEEP** | Honesty / disclosures |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition switch M1 |
| F1/F2/F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer bindings demo/fixture progressivement |
| OPS1 Cursor | `lib/ops1` | **HARVEST** (+ FREEZE UI growth) | Adapter T-A5 post-M1 |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** | Pas Product persistence cible |
| execution-run | `lib/oa/execution-run` | **FREEZE** | Pas 3e moteur |
| FinOps Postgres | `lib/oa/finops` + `db/migrations` | **KEEP** isolé | ≠ Product DB |
| Auth.js / Critical Ack | dirty hors main | **COMPLETE** après GO promotion | Hors G0 |
| Memory* product stores | factories Memory* | **REPLACE** | Derrière ports post-G0-B |

---

## 5. Decision criteria

Sans scoring artificiel. Critères dérivés doctrine + Roadmap G0/M1 :

1. Alignement doctrine v3 (boucle Project→…→Evidence→LPS) sans ADOPT runtime.
2. **Un seul backbone** de construction Studio (anti multi-moteurs).
3. Réutilisation maximale ports/UI OA déjà wired.
4. Pas d’architecture parallèle permanente.
5. Déblocage **rapide et honnête** de M1 (restart-safe Project/LPS).
6. Frontières **Git** (defs/docs/preuves commitables) vs **SQL** (état vivant).
7. Transactionnel courant + **audit append-only** (pas event sourcing intégral).
8. HumanDecision / ExecutionContract exécuté / Evidence / ReviewBundle sealed — immuables ou versionnés.
9. Réversibilité via ports (adapters swappable).
10. Migration / exit explicites pour toute étape temporaire.
11. Sécurité : isolation store produit ; secrets hors Git ; pas de claim « sécurisé » sans preuve.
12. Performance réaliste mono-opérateur (pas de SLA inventé).
13. Exploitabilité locale ; coût non chiffré si non observable.
14. Horizon mono-opérateur → multi-projet/multi-user sans lock-in silencieux.
15. Compatibilité M2–M6 (HD durable, harvest Cursor, Evidence→LPS).
16. Impact disposition D1 / OPS1 / execution-run **recommandée**, sans consommer ces gates.

---

## 6. Architecture options

### 6.1 Option 1 — OA Native Backbone + Harvest OPS1 Cursor

| Champ | Contenu |
| --- | --- |
| **Définition** | Backbone canonique = T-A0→T-A7 + `vertical-slice-runtime` + F1/F2/F3. OPS1 = **source harvest** Cursor → port T-A5 `ExecutionAdapter`. execution-run **FREEZE**. D1 **FREEZE/RETIRE LATER**. FinOps reste transverse. |
| **Preuves** | Roadmap B3/B4 ; audit `31a5db07` ; code `wireOaStack` + `lib/ops1` |
| **Conservé** | Ports OA, UI Studio, T-A7 honesty, platform AI |
| **Harvest / ADAPT** | OPS1 Cursor adapter ; composition switch persistence |
| **REPLACE** | Memory* product stores |
| **Flux cible** | UI → VS → T-A1…T-A4 → (Ack futur) → T-A5(+adapter harvesté) → T-A6 → LPS |
| **Bénéfices** | Alignement F3 ; un seul authority chain ; réutilisation max ; harvest REAL sans 2e produit |
| **Risques** | Travail adapter ; UIs parallèles résiduelles jusqu’à disposition ; dépendance G0-B |
| **Dette** | Coexistence temporaire D1/OPS1 UI |
| **Coût transition** | Principalement Delivery M1+ (adapters) — non chiffré |
| **Réversibilité** | **Haute** via ports |
| **Impact M1** | Direct : brancher durable Project/LPS sur composition existante |
| **Impact M2–M6** | Chemin clair (HD → Contract → Harvest → Evidence→LPS) |
| **Architecture parallèle créée ?** | **Non** (réduit le parallèle) |
| **Exit legacy** | D1 après M1 stable ; OPS1 UI freeze ; exec-run quarantine |
| **Pour retenir** | Critères 1–5, 9, 15 |
| **Pour écarter** | — |

### 6.2 Option 2 — Dual-Shell (OA front + OPS1 execution)

| Champ | Contenu |
| --- | --- |
| **Définition** | OA = gouvernance/décision front ; OPS1 reste **moteur d’exécution** ; pont anti-corruption OPS1 report → T-A6 Evidence. |
| **Preuves** | Audit blob `31a5db07` / `c5b417dc` **uniquement** (pas dans Roadmap VALIDATED body) |
| **Conservé** | OPS1 Cursor REAL path ; F2 OA |
| **Créé** | Bridge durable OA↔OPS1 |
| **Flux cible** | UI → F2/OA → bridge → OPS1 session/Cursor → report → bridge → T-A6 |
| **Bénéfices** | REAL opportuniste plus rapide (OPS1 déjà capable) |
| **Risques** | Perpétue **deux moteurs** ; Evidence/autorité fragmentés ; lutte contre intent F3 single chain |
| **Dette** | **Haute** coexistence |
| **Réversibilité** | **Faible** (approfondit dépendance produit OPS1) |
| **Impact M1** | Ambigu (quel store Project fait autorité ?) |
| **Impact M2–M6** | Complexifie HD/Contract/Attempt unifiés |
| **Architecture parallèle créée ?** | **Oui** (institutionnalise Dual-Shell) |
| **Pour retenir** | Si priorité demo REAL > cohérence backbone |
| **Pour écarter** | Critères 2, 4, 15 ; Roadmap G0 « un seul backbone » |

### 6.3 Non-option (refusée comme pair)

**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence NOT_SELECTED ; F3 vise T-A4→T-A5→T-A6.

---

## 7. Architecture recommendation — NOT DECIDED

**Observation.** Le code `/studio` est déjà compositionnellement OA ; Option 2 officialiserait le parallèle que G0 doit fermer.

**Options.** Option 1 vs Option 2 (ci-dessus).

**Trade-offs.** Option 1 = plus de travail adapter + G0-B avant REAL, mais backbone unique. Option 2 = REAL plus tôt, dette structurelle plus chère.

**Recommendation.** **Option 1 — OA Native Backbone + Harvest OPS1 Cursor.**

**Confidence / réserves.**

- Haute confiance relative au critère « un seul backbone » + preuves code.
- Réserve : définition Option 2 **hors** docs VALIDATED (audit only) — Morris doit confirmer qu’il accepte cette définition Git candidate.
- Réserve : harvest OPS1 / Ack / Gate D restent **hors** G0 (gates ouverts).

**Decision Required — Morris (G0-A).** PENDING.

---

## 8. Product persistence contract

*Contrat logique (doctrine) — **indépendant** du choix tech. Tech = G0-B.*

### 8.1 Git vs store runtime

| Appartient à **Git** | Appartient au **store runtime (SQL)** |
| --- | --- |
| Doctrine / définitions / schemas | Project courant, LPS (sélectif), digests |
| Docs projet commitables | CycleInstance, sessions (quand activés) |
| Preuves **committables** (paths) | HumanDecision, ExecutionContract, Attempt meta |
| | Evidence meta + refs ; ReviewBundle sealed |
| | Audit append-only ; assignments |
| | Idempotency / optimistic versions |

### 8.2 Transactionnel vs immuable

| Transactionnel (état courant) | Append-only / sealed |
| --- | --- |
| Project, pointeurs latest LPS/version | HumanDecision |
| Assignments, soft-delete flags | ExecutionContract **exécuté** |
| | Evidence, ReviewBundle sealed, audit events |

**Correction :** nouvelle version / révocation / événement correctif — jamais mute silencieuse (`26`).

### 8.3 LPS — persister / ne pas persister (`32`)

**Persister :** identité · pin doctrine · décisions validées · gates · trajectoire validée · réserves · preuves référencées · digests · audit.

**Ne pas persister :** raisonnement interne brut · scores opaques · reco-as-decision · hyp-as-fact · prompts temporaires · dimensions CKC brutes · copies v2.6.

### 8.4 M1 minimal attendu (boundary — non implémenté)

- create Project → persister Project + LPS/digests nécessaires ;
- restart process → retrouver **même** Project/LPS/contexte critique ;
- ports T-A1 préservés ; disclosure `productPersistence` mis à jour **seulement en Delivery M1** après GO ;
- backup/recovery M1 : copie fichier store local **ou** dump SQL selon tech — à préciser en Delivery, pas ici.

### 8.5 Abstractions à préserver

`ProjectRepositoryPort` · `LivingProjectStateRepositoryPort` · audit journal ports — **adapters** swappables. Pas de fuite SQL dans UI/features.

---

## 9. Persistence options

### 9.1 P-SQLite — Product store local `node:sqlite`

| Champ | Contenu |
| --- | --- |
| **Fit M1** | Fort pour mono-opérateur : fichier local, restart-safe, zéro service managé |
| **Fit Option 1** | Fort : adapter derrière ports OA ; composition `wireOaStack` |
| **Réutilisation D1** | **Patterns** (`node:sqlite`) oui ; **schéma/UI D1** non (éviter fusion modèles) |
| **Isolation ports** | Oui — nouvelle DB produit **distincte** de `d1.sqlite` / `ops1.sqlite` |
| **Restart safety** | Oui (fichier process-local path contrôlé) |
| **Transactions / audit** | Supportable (SQL + table audit append-only) — schéma **hors** ce cycle |
| **Concurrence / multi-user** | Limites connues SQLite ; OK horizon mono-opérateur ; **exit** requis avant multi-writer |
| **Backup / portability** | Copie fichier ; simple |
| **Dépendances** | Déjà utilisées (`node:sqlite`) ; **pas** de nouvelle dep npm obligatoire |
| **Coût** | Local — **non chiffré** (pas de prix managé) |
| **Dette** | Migration future si multi-user |
| **Réversibilité** | Haute via ports si schéma borné |
| **Risques** | Confusion avec D1 si path/schéma mal isolés ; pas « production multi-tenant » |

### 9.2 P-Postgres — Product store PostgreSQL (DB **≠** FinOps)

| Champ | Contenu |
| --- | --- |
| **Fit M1** | Possible (driver `pg` déjà présent) mais **service/ops** plus lourds pour M1 mono-opérateur |
| **Fit Option 1** | Fort long terme (multi-user, concurrence) |
| **Réutilisation FinOps** | Driver/migrations tooling oui ; **tables/DB FinOps non** (isolation stricte) |
| **Restart safety** | Oui si DB disponible |
| **Concurrence / multi-user** | Meilleur fit futur |
| **Backup** | Dump/managed — ops à définir |
| **Dépendances** | `pg` + `node-pg-migrate` déjà là |
| **Coût** | Local possible ; managé = **risque coût prématuré** (non chiffré ici) |
| **Dette** | Ops/secrets/`DATABASE_URL` produit dès M1 |
| **Réversibilité** | Haute via ports |
| **Risques** | Couplage accidentel FinOps ; sur-ingénierie M1 |

### 9.3 P-SQLite→Postgres (trajectoire temporaire)

| Champ | Contenu |
| --- | --- |
| **Cible finale** | PostgreSQL product DB isolée |
| **Condition de sortie** | Besoin multi-writer / multi-user **démontré** OU limite SQLite rencontrée en usage réel |
| **Règles** | Ports stables ; **pas** de dual-write incontrôlé ; un seul modèle métier ; migration batch versionnée |
| **Coût migration** | Non chiffré ; borne Delivery dédiée |
| **Risque** | Trajectoire oubliée sans exit → dette |

*Cette trajectoire est compatible avec une **sélection P-SQLite maintenant** + exit documenté — elle n’est pas une 3e tech distincte obligatoire.*

---

## 10. Persistence recommendation — NOT DECIDED

**Observation.** Product persistence = `NOT_SELECTED` dans disclosures T-A7 / runtime. FinOps Postgres et D1 SQLite **existent** mais ne sont **pas** le store produit Studio.

**Options.** P-SQLite vs P-Postgres (P-trajectoire = mode d’exit de P-SQLite).

**Trade-offs.** P-SQLite minimise ops M1 et réutilise le runtime Node SQLite déjà dans l’arbre. P-Postgres anticipe multi-user mais charge M1 et risque de service managé prématuré.

**Recommendation.** **P-SQLite (`node:sqlite`) product store derrière ports OA**, fichier/DB **distincts** de D1/OPS1/FinOps, avec **exit explicite vers Postgres** quand multi-writer/multi-user devient un besoin réel (P-trajectoire).

**Confidence / réserves.**

- Fit mono-opérateur / M1 : bon.
- Ne pas traiter D1 comme cible « parce qu’elle existe ».
- Ne pas traiter FinOps Postgres comme Product persistence.
- Aucun benchmark inventé ; aucun claim scalable/secure/production-ready.
- Schéma physique = **hors G0** (Delivery M1 après GO).

**Decision Required — Morris (G0-B).** PENDING.

---

## 11. Combined compatibility check

| G0-A \ G0-B | P-SQLite | P-Postgres |
| --- | --- | --- |
| **Option 1** | **Compatible (reco croisée)** — adapters OA Memory→SQLite | Compatible — adapters OA→PG ; ops plus lourds M1 |
| **Option 2** | Possible mais **autorité Project floue** (OA vs OPS1 sqlite) | Possible ; aggrave dualité + ops |

**Règle anti-implicite :** choisir Option 1 **ne sélectionne pas** la DB ; choisir P-SQLite **ne valide pas** le backbone.

**Matrice écartée :** Option 2 + FinOps-as-product — non recommandée.

---

## 12. M1 impact / delivery boundary

*Si Morris accepte les recommandations — **autorisation Delivery M1 séparée** requise. Aucune implémentation ici.*

| Élément | Contenu |
| --- | --- |
| **Capacité** | V3-F02 Project/LPS durable et exploitable |
| **Outcome** | create → restart process → même Project/LPS/digest |
| **Ports** | Implémenter adapters durables T-A1 (+ audit) ; brancher `wireOaStack` / composition |
| **COMPLETE/ADAPT** | T-A1 COMPLETE stores ; composition ADAPT |
| **HARVEST** | Non requis pour M1 (OPS1 = M4) |
| **FREEZE/RETIRE LATER** | D1 UI growth ; execution-run features ; OPS1 UI growth (reco) |
| **Dette temporaire** | Coexistence D1 UI jusqu’à disposition post-M1 |
| **Exit proof M1** | Preuve e2e restart-safe documentée |
| **Hors M1** | Cursor REAL ; Gate D ; Auth promotion ; multi-region ; schéma « all aggregates » |

---

## 13. Debt / exits / reversibility

| Dette / temporaire | Cible | Condition de sortie | Exit |
| --- | --- | --- | --- |
| Memory* product | Adapters durables | GO G0-B + Delivery M1 | Remplacer factories Memory dans composition |
| D1 UI parallèle | Disposition | M1 stable | FREEZE → RETIRE LATER / bridge borné |
| OPS1 UI | Freeze growth | post-harvest M4 | UI non étendue ; adapter only |
| execution-run | Quarantine | decision disposition | Pas de nouvelles features indépendantes |
| P-SQLite mono-op | Postgres product | multi-writer réel | Migration batch ; ports inchangés |
| Dual-Shell si choisi | Convergence Option 1 | dette Dual-Shell | Coût élevé — raison d’écarter Option 2 |

---

## 14. Risks / reservations

| Id | Classe | Risque / réserve | Mitigation |
| --- | --- | --- | --- |
| R1 | Provenance | Option 2 absente du corps Roadmap VALIDATED | Pack cite audit `31a5db07` ; Morris confirme définition |
| R2 | Confusion | D1/OPS1 sqlite ≠ Product store | Paths/DB séparés ; FREEZE D1 |
| R3 | Confusion | FinOps Postgres ≠ Product persistence | Isolation DB/schema ; KEEP isolé |
| R4 | Sécu | Données projet peuvent inclure contexte personnel | Soft delete + rétention RUN future ; pas de politique RUN ici |
| R5 | Sécu | Claims « sécurisé / tamper-proof » | Interdits sans preuve ; audit append-only = modèle logique |
| R6 | Perf | Volumétrie non démontrée | Pas de SLA inventé ; SQLite OK mono-op déclaré |
| R7 | FinOps | Service managé prématuré si P-Postgres M1 | Préférer P-SQLite M1 sauf GO contraire |
| R8 | Scope | Implémentation / migration tentante | Hors périmètre G0 — STOP si exigée |
| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée |
| R10 | Gouvernance | Recommandation ≠ décision | G0-A/B restent PENDING |

**Blocs activés (proportionnés) :** FinOps lens · RSSI · Performance · RGPD bornée — ci-dessus. **Pas** UX/Figma, Delivery code, DevOps mod, Release.

---

## 15. Morris Decision Gate

### G0-A — Architecture convergence

| Élément | Valeur |
| --- | --- |
| **Options** | (1) OA Native Backbone + Harvest OPS1 Cursor · (2) Dual-Shell OA front + OPS1 execution |
| **Recommendation** | **Option 1** |
| **Choix Morris** | **PENDING** |

### G0-B — Product persistence

| Élément | Valeur |
| --- | --- |
| **Options** | (P-SQLite) `node:sqlite` product store isolé · (P-Postgres) PostgreSQL product DB ≠ FinOps · (+ exit SQLite→Postgres documenté si P-SQLite) |
| **Recommendation** | **P-SQLite** (+ exit Postgres quand besoin multi-writer démontré) |
| **Choix Morris** | **PENDING** |

### Gates / décisions Roadmap **non consommés** (restent ouverts)

1. Promotion Auth.js / Critical Ack — Decision Required
2. Cursor REAL / Gate D — NOT AUTHORIZED / NOT CONSUMED
3. Disposition finale OPS1 / D1 / execution-run — Decision Required
4. Runtime v3 — **NON ADOPTED**

---

## 16. Build Doctrine exit questions (auto-check)

| Question | Réponse pack |
| --- | --- |
| Capacité v3 débloquée ? | Précondition backbone + persistence → débloque V3-F02 / M1 |
| Utile maintenant ? | Oui — sans G0, M1 multi-moteur |
| Actifs réutilisables ? | Oui — ports OA, VS, harvest OPS1 |
| Architecture parallèle ? | Option 1 la réduit ; Option 2 l’institutionnalise |
| Gaps cohérents fermés ensemble ? | G0-A + G0-B liés mais **décisions séparées** |
| Preuve de sortie ? | Décisions Morris écrites consommables par Delivery M1 |
| Capacité suivante ? | M1 |
| Dette ? | Temporaires avec exits (§13) ; pas d’implémentation spéculative |
| Automatisable ou arbitrage humain ? | **Arbitrage humain Morris** |
| Gate Morris ? | **Oui — G0-A + G0-B** |

---

## 17. Verdict documentaire (pack)

**READY FOR MORRIS DECISION**

Ce fichier est un **CANDIDATE**. G0 **n’est pas consommé**.
Aucune architecture n’est décidée. Aucune persistence n’est sélectionnée. M1 n’est pas autorisé tant que Morris n’a pas tranché **et** qu’un GO Delivery distinct n’est pas émis.

## Diff utile

Fichier **nouveau** uniquement (untracked). Aucun diff tracked.

```text
?? projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md
```

## Validations

| Check | Résultat |
| --- | --- |
| Local Git Truth | PASS |
| origin/main identity | PASS |
| Convergence context | PASS |
| CKC candidate read | PASS |
| inventory evidence-backed | PASS |
| Option 1 provenance | PASS (Roadmap VALIDATED) |
| Option 2 provenance | PASS with reserve (audit blob only) |
| architecture alternatives ≥ 2 | PASS |
| persistence alternatives ≥ 2 | PASS |
| decisions séparées A/B | PASS |
| no implementation | PASS |
| no app/method/doctrine/roadmap modify | PASS |
| git diff --check | PASS (no tracked diff) |
| exact one project file created | PASS |
| no staged / no project commit / push / PR | PASS |
| G0-A/B PENDING | PASS |
| runtime NON ADOPTED / Cursor REAL / Gate D | PASS |

## Garde-fous

- Recommandation ≠ décision
- Pas de 3e moteur
- FinOps ≠ Product persistence
- D1 ≠ cible par sunk cost
- Pas de POC/benchmark inventé
- Template Layer1 PENDING vs ACTIVE noté hors scope

## Verdict

**G0 DECISION PACK READY — ARCHITECTURE AND PRODUCT PERSISTENCE OPTIONS EVIDENCE-BASED — NO IMPLEMENTATION PERFORMED — MORRIS G0-A + G0-B DECISIONS REQUIRED**

review pack verdict = **COMPLETE**
