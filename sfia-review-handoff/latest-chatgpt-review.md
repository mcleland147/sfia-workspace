# SFIA Studio M1 — Governance Regularization — FULL Review Pack

- **Horodatage:** 2026-08-13 09:43:50 CEST
- **Objectif:** Régulariser M1 avant Morris Commit Gate — (1) consommer GO Morris extension scope 6 tests ; (2) micro-aligner decision pack G0 (statuts historiques).
- **Cycle:** 9 — QA / validation · Typologie RUN — corrective governance regularization
- **Profil:** Critical — continuation Delivery M1 Critical ; aucun développement produit
- **Branche:** `delivery/sfia-studio-m1-durable-project-lps`
- **HEAD / origin/main:** `3413d2e42243d5419f874a8ccf5a50341bb968d6`
- **Handoff précédent (référence):** `62a47862b5c34dc61da8f4b24de44588553875a6`
- **Coverage:** created files full content = YES · modified sections complete = YES · useful diff = YES · scope regularization evidence = YES · application drift proof = YES · synthesis only = NO · review pack verdict = COMPLETE

---

## 1. Local Git Truth Check

| Check | Result |
|---|---|
| branche | `delivery/sfia-studio-m1-durable-project-lps` PASS |
| HEAD | `3413d2e42243d5419f874a8ccf5a50341bb968d6` PASS |
| origin/main | `3413d2e42243d5419f874a8ccf5a50341bb968d6` PASS |
| staged | vide PASS |
| handoff distant avant régularisation | `62a47862b5c34dc61da8f4b24de44588553875a6` PASS (non avancé) |
| diff M1 préexistant | présent PASS |

### Distinction des diffs

| Couche | Contenu |
|---|---|
| **Diff M1 préexistant** | code/tests Product SQLite + disclosures + Roadmap/Doctrine Delivery + 6 tests compat + untracked sqlite/M1 tests |
| **Delta régularisation (ce cycle)** | **uniquement** micro-alignement de `projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md` |

---

## 2. Convergence Pre-check

- triggered : oui
- capacité : V3-F02 Project/LPS durable
- milestone : M1 — IMPLEMENTED CANDIDATE — restart-safe PASS
- G0-A / G0-B : ADOPTED
- gap cycle : gouvernance uniquement
- actifs : M1 code KEEP AS-IS · 6 tests KEEP AS-IS · G0 pack ADAPT docs only · Roadmap/Doctrine KEEP AS-IS
- exit proof : scope 6 tests autorisé · pack sans statut actif G0-A/B contradictoire · aucun drift app · handoff final conforme
- next : Morris Commit Gate M1
- M2 NON AUTORISÉ · runtime v3 NON ADOPTED

---

## 3. Handoff précédent confirmé

Le handoff `62a47862…` décrit Delivery M1 Critical, G0-A/B ADOPTED, validations PASS, restart process A→B PASS, verdict IMPLEMENTED CANDIDATE / READY FOR MORRIS VALIDATION / COMMIT GATE, aucun commit/push/PR projet.

Réserves ChatGPT adressées ici :
- **R1 scope** — 6 tests hors allowlist initiale
- **R2 pack** — formulations historiques NOT DECIDED / NOT_SELECTED / PENDING encore actives en apparence

---

## 4. Décision Morris — extension de scope M1 (R1 CLOSED)

**Observation historique :** pendant Delivery M1, 6 fichiers de tests de compatibilité ont été modifiés hors allowlist initiale du prompt M1, pour aligner fixtures/assertions aux nouveaux disclosures Product persistence (`PARTIAL_PROJECT_LPS_DURABLE`, `SQLITE_OA_PRODUCT_STORE`, `projectLpsRestartSafe`).

**Décision Morris :** extension de scope **ACCEPTÉE** rétroactivement pour **ces 6 fichiers et ces modifications M1 uniquement**.

**Conséquence :** réserve contractuelle de scope **CLOSED**.

**Anti-claims :**
- ne permet PAS de les modifier davantage dans ce cycle ;
- ne généralise PAS l’allowlist à leurs dossiers ;
- ≠ élargissement F1/F2/UI Delivery ;
- ≠ consommation M2.

### Liste exacte des 6 fichiers

- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`

### Preuve byte-for-byte inchangés pendant régularisation

```
5775a78175a85975eb7f6848f6678b920a17e690c564144c63f6ede0b8a56e8e  projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
e2ed7c8ebcc379271002610264fdab6ecca0653af94fc9d979eb0640ce833ac0  projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
ad77b57f5b531d84c9d81c5ef655ceebf69c049c4ee959e6f8d3ee0db9f1619d  projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
ffc62247e50e215cd2d6431203e72a675519eeef3ecf9ea3fb2e9da4f2d977fe  projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
267a90b429980c9b6fc77f034b423cdda7baa4177977f9072fd4d849bf0bd625  projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
3f12be68d0c2607ea8484475968ef941ae3792c868255402cc7597080d64318d  projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
```

`cmp` six-tests before/after = PASS

---

## 5. Décision Morris — micro-alignement G0 (R2)

Autorisation : corriger uniquement `projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md` pour requalifier formulations actives contradictoires avec G0-A/B ADOPTED, sans supprimer l’historique d’analyse.

### Occurrences restantes `NOT DECIDED|NOT_SELECTED|PENDING` (post-alignement)

```
38:**Observation historique (pré-décision).** Sur `main` baseline, `/studio` était Memory process-local ; Product persistence était `NOT_SELECTED`. Ces faits sont **supersédés** pour G0-A/B par la décision Morris ci-dessus ; M1 Delivery aligne le code.
82:| Disclosure (baseline pré-G0/M1 — **historique**) | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` (supersédé post G0-B / Delivery M1 candidate) |
207:**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence était `NOT_SELECTED` lors de l’analyse initiale (pré-G0-B) ; F3 vise T-A4→T-A5→T-A6.
229:**Current status.** **G0-A CONSUMED / ADOPTED** — plus PENDING.
329:**Historical observation.** Product persistence était `NOT_SELECTED` dans disclosures T-A7 / runtime lors de l’analyse initiale (pré-G0-B). FinOps Postgres et D1 SQLite **existaient** mais n’étaient **pas** le store produit Studio.
347:**Current status.** **G0-B CONSUMED / ADOPTED** — plus `NOT_SELECTED` / PENDING comme état actuel.
407:| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée (gate **autre** que G0-A/B) |
```

| Ligne | Qualification |
|---|---|
| Observation historique `NOT_SELECTED` | historique pré-décision — acceptable |
| Disclosure baseline `NOT_SELECTED` | explicitement historique / supersédé — acceptable |
| FinOps pair `NOT_SELECTED` analyse initiale | historique — acceptable |
| « plus PENDING » / « plus NOT_SELECTED / PENDING » | négation d’état actuel — acceptable |
| R9 Layer 1 ChatGPT PENDING | **autre gate** (hors G0-A/B) — reste ouvert — acceptable |

**Interdit évité :** aucun G0-A PENDING actuel · aucun G0-B NOT_SELECTED actuel · aucune Decision Required G0-A/B actuelle.

---

## 6. Application drift proof

| Artefact | SHA256 |
|---|---|
| tracked app patch before | `45027e0c5be4e733c05edf584f87bb515579a5ae38a8eeeb3db83fa039da4496` |
| tracked app patch after | `45027e0c5be4e733c05edf584f87bb515579a5ae38a8eeeb3db83fa039da4496` |
| cmp tracked | PASS |
| cmp untracked list | PASS |
| cmp untracked sha256 | PASS |
| Roadmap sha | `3200f29850dfcfd59bde4c07971c1b6ba8fe5d07b9a3be89e1aad651822fd432` inchangé |
| Build Doctrine sha | `a9a42ee828af3b3d7dd601d22341b6d9f429c0a252d065cbae90f30db564d1b5` inchangé |
| package.json | inchangé |
| package-lock.json | inchangé |

**Previous M1 technical validation reused because application diff is byte-for-byte unchanged.**

Preuve héritée :
- typecheck PASS
- lint PASS
- npm test PASS — 1625
- build PASS
- process A → process B restart proof PASS

---

## 7. Validations cycle QA

```
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
 M projects/sfia-studio/app/lib/oa/project/application/createProject.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review-pre.txt
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/project/m1ProductSqliteDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessWorker.ts
?? projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/project/ports/projectPersistenceUnitOfWorkPort.ts
?? projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md
```

```
 .../ProjectAssistantPanel.test.tsx                 | 13 ++--
 .../project-assistant/f2.orchestrate.test.ts       |  7 ++-
 .../project-assistant/orchestrateTurn.test.ts      |  7 ++-
 .../localProjectComposition.test.ts                |  6 +-
 .../runtimeApplicationService.test.ts              | 11 +++-
 .../vertical-slice-ui/createProjectUi.test.tsx     | 26 +++++---
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  | 22 ++++---
 .../application/appendLivingProjectStateVersion.ts |  4 +-
 .../lib/oa/project/application/createProject.ts    |  4 +-
 projects/sfia-studio/app/lib/oa/project/index.ts   | 41 +++++++++---
 .../project/infrastructure/memoryProjectStore.ts   |  5 +-
 .../vertical-slice-core/localProjectComposition.ts | 25 ++++++--
 .../app/lib/vertical-slice-core/types.ts           | 11 +++-
 .../app/lib/vertical-slice-runtime/disclosures.ts  | 25 +++++---
 .../app/lib/vertical-slice-runtime/service.ts      | 18 ++++++
 .../app/lib/vertical-slice-runtime/singleton.ts    |  5 ++
 .../sfia-studio-convergence-build-doctrine.md      |  4 +-
 .../convergence/sfia-studio-convergence-roadmap.md | 73 +++++++++++-----------
 18 files changed, 202 insertions(+), 105 deletions(-)
```

`git diff --check` PASS · staged vide PASS · aucun commit/push/PR projet

## 8. Diff utile — micro-alignement G0 uniquement

```diff
--- /tmp/m1-g0-pack-before-regularization.md	2026-08-13 09:42:52
+++ projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md	2026-08-13 09:40:41
@@ -7,6 +7,7 @@
 | **Horodatage création** | 2026-08-13 07:56:31 +0200 (Europe/Paris) |
 | **Horodatage décision Morris** | 2026-08-13 08:40:00 +0200 (Europe/Paris) — G0-A/B ADOPTED |
 | **Horodatage traçabilité Delivery M1** | 2026-08-13 08:54:53 +0200 (Europe/Paris) |
+| **Horodatage QA régularisation** | 2026-08-13 09:40:00 +0200 (Europe/Paris) — micro-alignement statuts historiques §7/§10/R10 |
 | **Base Git** | `origin/main` `3413d2e42243d5419f874a8ccf5a50341bb968d6` |
 | **Branche Delivery** | `delivery/sfia-studio-m1-durable-project-lps` (non poussée) |
 | **Cycle G0** | 6 — Architecture technique · Profil **Critical** |
@@ -78,7 +79,7 @@
 | --- | --- |
 | Composition `/studio` | `lib/vertical-slice-runtime/service.ts` → `wireOaStack` |
 | Memory T-A1…T-A6 | `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}/infrastructure/memory*` |
-| Disclosure | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` |
+| Disclosure (baseline pré-G0/M1 — **historique**) | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` (supersédé post G0-B / Delivery M1 candidate) |
 | D1 SQLite | `lib/d1/db.ts` (`node:sqlite`, tables `d1_*`) |
 | OPS1 SQLite + Cursor | `lib/ops1/db.ts`, adapters Cursor |
 | FinOps Postgres | `package.json` `pg@~8.22.0` ; `db/migrations/*finops*` ; `lib/oa/finops/infrastructure/postgres/*` |
@@ -203,28 +204,30 @@

 ### 6.3 Non-option (refusée comme pair)

-**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence NOT_SELECTED ; F3 vise T-A4→T-A5→T-A6.
+**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence était `NOT_SELECTED` lors de l’analyse initiale (pré-G0-B) ; F3 vise T-A4→T-A5→T-A6.

 ---

-## 7. Architecture recommendation — NOT DECIDED
+## 7. Architecture recommendation — HISTORICAL RECOMMENDATION — SUPERSEDED BY G0-A

-**Observation.** Le code `/studio` est déjà compositionnellement OA ; Option 2 officialiserait le parallèle que G0 doit fermer.
+**Historical observation.** Le code `/studio` était déjà compositionnellement OA ; Option 2 officialiserait le parallèle que G0 devait fermer.

-**Options.** Option 1 vs Option 2 (ci-dessus).
+**Historical options.** Option 1 vs Option 2 (ci-dessus).

-**Trade-offs.** Option 1 = plus de travail adapter + G0-B avant REAL, mais backbone unique. Option 2 = REAL plus tôt, dette structurelle plus chère.
+**Historical trade-offs.** Option 1 = plus de travail adapter + G0-B avant REAL, mais backbone unique. Option 2 = REAL plus tôt, dette structurelle plus chère.

-**Recommendation.** **Option 1 — OA Native Backbone + Harvest OPS1 Cursor.**
-
-**Confidence / réserves.**
+**Historical recommendation.** **Option 1 — OA Native Backbone + Harvest OPS1 Cursor.**

+**Historical confidence / réserves (pré-décision).**
+
 - Haute confiance relative au critère « un seul backbone » + preuves code.
-- Réserve : définition Option 2 **hors** docs VALIDATED (audit only) — Morris doit confirmer qu’il accepte cette définition Git candidate.
-- Réserve : harvest OPS1 / Ack / Gate D restent **hors** G0 (gates ouverts).
+- Réserve : définition Option 2 **hors** docs VALIDATED (audit only) — Morris devait confirmer qu’il accepte cette définition Git candidate.
+- Réserve : harvest OPS1 / Ack / Gate D restent **hors** G0 (gates ouverts — inchangés).

-**Decision Required — Morris (G0-A).** PENDING.
+**Morris decision (G0-A).** **ADOPTED — OA Native Backbone + Harvest OPS1 Cursor** (2026-08-13 Europe/Paris).

+**Current status.** **G0-A CONSUMED / ADOPTED** — plus PENDING.
+
 ---

 ## 8. Product persistence contract
@@ -321,26 +324,28 @@

 ---

-## 10. Persistence recommendation — NOT DECIDED
+## 10. Persistence recommendation — HISTORICAL RECOMMENDATION — SUPERSEDED BY G0-B
+
+**Historical observation.** Product persistence était `NOT_SELECTED` dans disclosures T-A7 / runtime lors de l’analyse initiale (pré-G0-B). FinOps Postgres et D1 SQLite **existaient** mais n’étaient **pas** le store produit Studio.

-**Observation.** Product persistence = `NOT_SELECTED` dans disclosures T-A7 / runtime. FinOps Postgres et D1 SQLite **existent** mais ne sont **pas** le store produit Studio.
+**Historical options.** P-SQLite vs P-Postgres (P-trajectoire = mode d’exit de P-SQLite).

-**Options.** P-SQLite vs P-Postgres (P-trajectoire = mode d’exit de P-SQLite).
+**Historical trade-offs.** P-SQLite minimise ops M1 et réutilise le runtime Node SQLite déjà dans l’arbre. P-Postgres anticipe multi-user mais charge M1 et risque de service managé prématuré.

-**Trade-offs.** P-SQLite minimise ops M1 et réutilise le runtime Node SQLite déjà dans l’arbre. P-Postgres anticipe multi-user mais charge M1 et risque de service managé prématuré.
+**Historical recommendation.** **P-SQLite (`node:sqlite`) product store derrière ports OA**, fichier/DB **distincts** de D1/OPS1/FinOps, avec **exit explicite vers Postgres** quand multi-writer/multi-user devient un besoin réel (P-trajectoire).

-**Recommendation.** **P-SQLite (`node:sqlite`) product store derrière ports OA**, fichier/DB **distincts** de D1/OPS1/FinOps, avec **exit explicite vers Postgres** quand multi-writer/multi-user devient un besoin réel (P-trajectoire).
+**Historical confidence / réserves (pré-décision).**

-**Confidence / réserves.**
-
 - Fit mono-opérateur / M1 : bon.
 - Ne pas traiter D1 comme cible « parce qu’elle existe ».
 - Ne pas traiter FinOps Postgres comme Product persistence.
 - Aucun benchmark inventé ; aucun claim scalable/secure/production-ready.
 - Schéma physique = **hors G0** (Delivery M1 après GO).

-**Decision Required — Morris (G0-B).** PENDING.
+**Morris decision (G0-B).** **ADOPTED — `node:sqlite` Product Store isolé derrière ports OA ; exit Postgres sur besoin multi-writer/multi-user démontré** (2026-08-13 Europe/Paris).

+**Current status.** **G0-B CONSUMED / ADOPTED** — plus `NOT_SELECTED` / PENDING comme état actuel.
+
 ---

 ## 11. Combined compatibility check
@@ -399,8 +404,8 @@
 | R6 | Perf | Volumétrie non démontrée | Pas de SLA inventé ; SQLite OK mono-op déclaré |
 | R7 | FinOps | Service managé prématuré si P-Postgres M1 | Préférer P-SQLite M1 sauf GO contraire |
 | R8 | Scope | Implémentation / migration tentante | Hors périmètre G0 — STOP si exigée |
-| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée |
-| R10 | Gouvernance | Recommandation ≠ décision | G0-A/B restent PENDING |
+| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée (gate **autre** que G0-A/B) |
+| R10 | Gouvernance | Recommandation historique ≠ décision | **Clos pour G0-A/B** — décisions Morris **ADOPTED / CONSUMED** (2026-08-13) ; les sections §7/§10 restent traçabilité historique |

 **Blocs activés (proportionnés) :** FinOps lens · RSSI · Performance · RGPD bornée — ci-dessus. **Pas** UX/Figma, Delivery code, DevOps mod, Release.

@@ -462,4 +467,3 @@

 G0-A et G0-B sont des **décisions Morris**. M1 Delivery est **autorisé** et implémenté comme **IMPLEMENTED CANDIDATE** jusqu’à validation Morris post-exécution.
 ≠ M1 VALIDATED · ≠ runtime v3 ADOPTED · ≠ Cursor REAL · ≠ Gate D.
-
```

## 9. Decision pack G0 — CONTENU COMPLET (post-régularisation)

SHA256: `d555a5b0278cda9147e1e19986e448dca0b8f107e021070177223083c0c18f27`

### `projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

```
# SFIA Studio G0 — Architecture de convergence & Product persistence — Decision Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **décision** Gate G0 (architecture + Product persistence) |
| **Statut** | **DECIDED — G0 CONSUMED** |
| **Horodatage création** | 2026-08-13 07:56:31 +0200 (Europe/Paris) |
| **Horodatage décision Morris** | 2026-08-13 08:40:00 +0200 (Europe/Paris) — G0-A/B ADOPTED |
| **Horodatage traçabilité Delivery M1** | 2026-08-13 08:54:53 +0200 (Europe/Paris) |
| **Horodatage QA régularisation** | 2026-08-13 09:40:00 +0200 (Europe/Paris) — micro-alignement statuts historiques §7/§10/R10 |
| **Base Git** | `origin/main` `3413d2e42243d5419f874a8ccf5a50341bb968d6` |
| **Branche Delivery** | `delivery/sfia-studio-m1-durable-project-lps` (non poussée) |
| **Cycle G0** | 6 — Architecture technique · Profil **Critical** |
| **Cycle M1** | 8 — Delivery / implémentation · Profil **Critical** |
| **Gate** | G0 — **CONSUMED** |
| **G0-A** | **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor |
| **G0-B** | **ADOPTED** — Product persistence `node:sqlite` isolée derrière ports OA ; exit Postgres sur multi-writer/multi-user démontré |
| **Build Doctrine / Roadmap** | **VALIDATED** gouvernance ; alignement factuel G0 dans ce Delivery |
| **Runtime v3** | **NON ADOPTED** |
| **Cursor REAL / Gate D** | **NOT AUTHORIZED / NOT CONSUMED** |
| **Anti-claims** | ≠ M1 VALIDATED · ≠ M2 autorisé · ≠ Cursor REAL · ≠ Gate D · ≠ Auth/Ack promu · ≠ runtime ADOPTED · ≠ PostgreSQL Product maintenant · ≠ D1/FinOps = Product Store · ≠ dual-write · ≠ troisième moteur |

---

## 1. Executive decision summary

**Décisions Morris G0 — ADOPTED (plus récentes que l’état candidat initial de ce pack).**

| Axe | Décision | Statut |
| --- | --- | --- |
| **G0-A Architecture** | **OA Native Backbone + Harvest OPS1 Cursor** | **ADOPTED** |
| **G0-B Persistence** | **`node:sqlite` Product Store** derrière ports OA ; DB distincte de D1/OPS1/FinOps ; exit Postgres si multi-writer/multi-user démontré | **ADOPTED** |

**Impact autorisé :** Delivery M1 (Project/LPS durable) sur backbone OA + Product SQLite.

**Limites inchangées :** Cursor REAL · Gate D · Auth.js/Critical Ack · disposition finale OPS1/D1/execution-run · runtime v3 NON ADOPTED · PostgreSQL Product **non** implémenté en M1 · pas de dual-write.

**Observation historique (pré-décision).** Sur `main` baseline, `/studio` était Memory process-local ; Product persistence était `NOT_SELECTED`. Ces faits sont **supersédés** pour G0-A/B par la décision Morris ci-dessus ; M1 Delivery aligne le code.

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
| Disclosure (baseline pré-G0/M1 — **historique**) | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` (supersédé post G0-B / Delivery M1 candidate) |
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

**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence était `NOT_SELECTED` lors de l’analyse initiale (pré-G0-B) ; F3 vise T-A4→T-A5→T-A6.

---

## 7. Architecture recommendation — HISTORICAL RECOMMENDATION — SUPERSEDED BY G0-A

**Historical observation.** Le code `/studio` était déjà compositionnellement OA ; Option 2 officialiserait le parallèle que G0 devait fermer.

**Historical options.** Option 1 vs Option 2 (ci-dessus).

**Historical trade-offs.** Option 1 = plus de travail adapter + G0-B avant REAL, mais backbone unique. Option 2 = REAL plus tôt, dette structurelle plus chère.

**Historical recommendation.** **Option 1 — OA Native Backbone + Harvest OPS1 Cursor.**

**Historical confidence / réserves (pré-décision).**

- Haute confiance relative au critère « un seul backbone » + preuves code.
- Réserve : définition Option 2 **hors** docs VALIDATED (audit only) — Morris devait confirmer qu’il accepte cette définition Git candidate.
- Réserve : harvest OPS1 / Ack / Gate D restent **hors** G0 (gates ouverts — inchangés).

**Morris decision (G0-A).** **ADOPTED — OA Native Backbone + Harvest OPS1 Cursor** (2026-08-13 Europe/Paris).

**Current status.** **G0-A CONSUMED / ADOPTED** — plus PENDING.

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

## 10. Persistence recommendation — HISTORICAL RECOMMENDATION — SUPERSEDED BY G0-B

**Historical observation.** Product persistence était `NOT_SELECTED` dans disclosures T-A7 / runtime lors de l’analyse initiale (pré-G0-B). FinOps Postgres et D1 SQLite **existaient** mais n’étaient **pas** le store produit Studio.

**Historical options.** P-SQLite vs P-Postgres (P-trajectoire = mode d’exit de P-SQLite).

**Historical trade-offs.** P-SQLite minimise ops M1 et réutilise le runtime Node SQLite déjà dans l’arbre. P-Postgres anticipe multi-user mais charge M1 et risque de service managé prématuré.

**Historical recommendation.** **P-SQLite (`node:sqlite`) product store derrière ports OA**, fichier/DB **distincts** de D1/OPS1/FinOps, avec **exit explicite vers Postgres** quand multi-writer/multi-user devient un besoin réel (P-trajectoire).

**Historical confidence / réserves (pré-décision).**

- Fit mono-opérateur / M1 : bon.
- Ne pas traiter D1 comme cible « parce qu’elle existe ».
- Ne pas traiter FinOps Postgres comme Product persistence.
- Aucun benchmark inventé ; aucun claim scalable/secure/production-ready.
- Schéma physique = **hors G0** (Delivery M1 après GO).

**Morris decision (G0-B).** **ADOPTED — `node:sqlite` Product Store isolé derrière ports OA ; exit Postgres sur besoin multi-writer/multi-user démontré** (2026-08-13 Europe/Paris).

**Current status.** **G0-B CONSUMED / ADOPTED** — plus `NOT_SELECTED` / PENDING comme état actuel.

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
| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée (gate **autre** que G0-A/B) |
| R10 | Gouvernance | Recommandation historique ≠ décision | **Clos pour G0-A/B** — décisions Morris **ADOPTED / CONSUMED** (2026-08-13) ; les sections §7/§10 restent traçabilité historique |

**Blocs activés (proportionnés) :** FinOps lens · RSSI · Performance · RGPD bornée — ci-dessus. **Pas** UX/Figma, Delivery code, DevOps mod, Release.

---

## 15. Morris Decision Gate

### G0-A — Architecture convergence

| Élément | Valeur |
| --- | --- |
| **Options** | (1) OA Native Backbone + Harvest OPS1 Cursor · (2) Dual-Shell OA front + OPS1 execution |
| **Recommendation (historique)** | Option 1 |
| **Choix Morris** | **ADOPTED — Option 1 — OA Native Backbone + Harvest OPS1 Cursor** |
| **Horodatage** | 2026-08-13 08:40:00 +0200 (Europe/Paris) |

### G0-B — Product persistence

| Élément | Valeur |
| --- | --- |
| **Options** | (P-SQLite) `node:sqlite` isolé · (P-Postgres) PostgreSQL ≠ FinOps |
| **Recommendation (historique)** | P-SQLite + exit Postgres |
| **Choix Morris** | **ADOPTED — node:sqlite Product Store isolé derrière ports OA ; exit Postgres sur besoin multi-writer/multi-user démontré** |
| **Horodatage** | 2026-08-13 08:40:00 +0200 (Europe/Paris) |

### Gates / décisions Roadmap **non consommés** (restent ouverts)

1. Promotion Auth.js / Critical Ack — Decision Required
2. Cursor REAL / Gate D — NOT AUTHORIZED / NOT CONSUMED
3. Disposition finale OPS1 / D1 / execution-run — Decision Required
4. Runtime v3 — **NON ADOPTED**

### Statut G0

**DECIDED — G0 CONSUMED** — source : décision Morris explicite ; tracée ici + Convergence Roadmap. Build Doctrine n’est pas l’autorité d’architecture/persistence.

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

**DECIDED — G0 CONSUMED**

G0-A et G0-B sont des **décisions Morris**. M1 Delivery est **autorisé** et implémenté comme **IMPLEMENTED CANDIDATE** jusqu’à validation Morris post-exécution.
≠ M1 VALIDATED · ≠ runtime v3 ADOPTED · ≠ Cursor REAL · ≠ Gate D.
```

## 10. Fichiers créés M1 (inchangés — contenu complet)

### `projects/sfia-studio/app/lib/oa/project/ports/projectPersistenceUnitOfWorkPort.ts`

```
/**
 * Minimal transactional boundary for atomic Project + LPS mutations.
 * Memory and SQLite adapters both satisfy this port (M1).
 */
export interface ProjectPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/paths.ts`

```
import fs from "node:fs";
import path from "node:path";

/**
 * OA Product SQLite path — isolated from D1 / OPS1 / FinOps.
 * Override: SFIA_STUDIO_PRODUCT_DB_PATH
 * Default: projects/sfia-studio/.sfia-exec/product/oa-product.sqlite
 */
export function resolveProductSqlitePath(
  overridePath?: string,
): string {
  const explicit =
    overridePath?.trim() || process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    assertNotAlienProductPath(resolved);
    return resolved;
  }

  // app cwd is typically projects/sfia-studio/app → studio root is parent
  const studioRoot = path.resolve(process.cwd(), "..");
  const productDir = path.join(studioRoot, ".sfia-exec", "product");
  ensureDir(productDir);
  const dbPath = path.join(productDir, "oa-product.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new Error("product_sqlite_path_outside_sfia_exec");
  }
  assertNotAlienProductPath(dbPath);
  return dbPath;
}

function assertNotAlienProductPath(dbPath: string): void {
  const base = path.basename(dbPath).toLowerCase();
  if (base === "d1.sqlite" || base === "ops1.sqlite") {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
  const normalized = dbPath.replace(/\\/g, "/").toLowerCase();
  if (
    normalized.includes("/state/d1.sqlite") ||
    normalized.includes("/ops1/") ||
    normalized.endsWith("/d1.sqlite") ||
    normalized.endsWith("/ops1.sqlite")
  ) {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

```
import { DatabaseSync } from "node:sqlite";

export const PRODUCT_SCHEMA_VERSION = "m1-0.1.0" as const;

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);

CREATE TABLE IF NOT EXISTS oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);

CREATE TABLE IF NOT EXISTS oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE TABLE IF NOT EXISTS oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_oa_lps_project_version
  ON oa_lps(project_id, version);
CREATE INDEX IF NOT EXISTS idx_oa_audit_project
  ON oa_audit_events(project_id, occurred_at);
`;

export function openProductSqlite(dbPath: string): DatabaseSync {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA_SQL);
  const existing = db
    .prepare("SELECT value FROM schema_meta WHERE key = ?")
    .get("schema_version") as { value?: string } | undefined;
  if (!existing?.value) {
    db.prepare(
      "INSERT INTO schema_meta(key, value) VALUES (?, ?)",
    ).run("schema_version", PRODUCT_SCHEMA_VERSION);
  }
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error("product_sqlite_integrity_failed");
  }
  return db;
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts`

```
import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import { openProductSqlite } from "./db";
import { resolveProductSqlitePath } from "./paths";

/**
 * SQLite product UnitOfWork for atomic Project + LPS mutations (M1).
 * Isolated file — not D1 / OPS1 / FinOps.
 */
export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
  readonly db: DatabaseSync;
  readonly dbPath: string;

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave: "project" | "lps" | null = null;

  private depth = 0;
  private queue: Promise<void> = Promise.resolve();

  constructor(dbPath?: string) {
    this.dbPath = resolveProductSqlitePath(dbPath);
    this.db = openProductSqlite(this.dbPath);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const run = async (): Promise<T> => {
      if (this.depth === 0) {
        this.db.exec("BEGIN IMMEDIATE");
      }
      this.depth += 1;
      try {
        const result = await fn();
        this.depth -= 1;
        if (this.depth === 0) {
          this.db.exec("COMMIT");
        }
        return result;
      } catch (err) {
        this.depth -= 1;
        if (this.depth === 0) {
          try {
            this.db.exec("ROLLBACK");
          } catch {
            /* ignore rollback errors after failed begin */
          }
        }
        throw err;
      }
    };

    const next = this.queue.then(run, run);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  close(): void {
    try {
      this.db.close();
    } catch {
      /* ignore */
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts`

```
import type { Project } from "../../domain/types";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteProjectRepository implements ProjectRepositoryPort {
  constructor(private readonly store: SqliteProductStore) {}

  async findById(projectId: string): Promise<Project | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as Project);
  }

  async exists(projectId: string): Promise<boolean> {
    const row = this.store.db
      .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(project: Project): Promise<void> {
    if (this.store.failNextSave === "project") {
      this.store.failNextSave = null;
      throw new Error("forced_project_save_failure");
    }
    const payload = JSON.stringify(structuredClone(project));
    this.store.db
      .prepare(
        `INSERT INTO oa_projects(
          project_id, status, current_lps_version_id, payload_json, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(project_id) DO UPDATE SET
          status = excluded.status,
          current_lps_version_id = excluded.current_lps_version_id,
          payload_json = excluded.payload_json,
          updated_at = excluded.updated_at`,
      )
      .run(
        project.projectId,
        project.status,
        project.currentLpsVersionId ?? null,
        payload,
        project.createdAt,
        project.updatedAt ?? null,
      );
  }

  async findIdempotency(idempotencyKey: string): Promise<string | null> {
    const row = this.store.db
      .prepare(
        "SELECT project_id FROM oa_idempotency WHERE idempotency_key = ?",
      )
      .get(idempotencyKey) as { project_id?: string } | undefined;
    return row?.project_id ?? null;
  }

  async putIdempotency(
    idempotencyKey: string,
    projectId: string,
  ): Promise<void> {
    this.store.db
      .prepare(
        `INSERT INTO oa_idempotency(idempotency_key, project_id, created_at)
         VALUES (?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           project_id = excluded.project_id`,
      )
      .run(idempotencyKey, projectId, new Date().toISOString());
  }
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteLivingProjectStateRepository.ts`

```
import type { LivingProjectState } from "../../domain/types";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteLivingProjectStateRepository
  implements LivingProjectStateRepositoryPort
{
  constructor(private readonly store: SqliteProductStore) {}

  async findById(lpsVersionId: string): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_lps WHERE lps_version_id = ?")
      .get(lpsVersionId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? AND version = ?",
      )
      .get(projectId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        `SELECT l.payload_json AS payload_json
         FROM oa_lps_current c
         JOIN oa_lps l ON l.lps_version_id = c.lps_version_id
         WHERE c.project_id = ?`,
      )
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async save(lps: LivingProjectState): Promise<void> {
    if (this.store.failNextSave === "lps") {
      this.store.failNextSave = null;
      throw new Error("forced_lps_save_failure");
    }
    const payload = JSON.stringify(structuredClone(lps));
    this.store.db
      .prepare(
        `INSERT INTO oa_lps(
          lps_version_id, project_id, version, status, payload_json, created_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(lps_version_id) DO UPDATE SET
          project_id = excluded.project_id,
          version = excluded.version,
          status = excluded.status,
          payload_json = excluded.payload_json,
          created_at = excluded.created_at`,
      )
      .run(
        lps.lpsVersionId,
        lps.projectId,
        lps.version,
        lps.status,
        payload,
        lps.createdAt,
      );

    if (lps.status === "active") {
      this.store.db
        .prepare(
          `INSERT INTO oa_lps_current(project_id, lps_version_id)
           VALUES (?, ?)
           ON CONFLICT(project_id) DO UPDATE SET
             lps_version_id = excluded.lps_version_id`,
        )
        .run(lps.projectId, lps.lpsVersionId);
    }
  }

  async markSuperseded(lpsVersionId: string): Promise<void> {
    const existing = await this.findById(lpsVersionId);
    if (!existing) {
      throw new Error("lps_missing_for_supersede");
    }
    const next = structuredClone(existing);
    next.status = "superseded";
    const payload = JSON.stringify(next);
    this.store.db
      .prepare(
        `UPDATE oa_lps
         SET status = ?, payload_json = ?
         WHERE lps_version_id = ?`,
      )
      .run("superseded", payload, lpsVersionId);
  }
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectAuditJournal.ts`

```
import type {
  ProjectAuditEvent,
  ProjectAuditJournalPort,
} from "../../ports/projectAuditJournalPort";
import type { SqliteProductStore } from "./sqliteProductStore";

/** Durable append-only audit journal for OA Product SQLite (M1). */
export class SqliteProjectAuditJournal implements ProjectAuditJournalPort {
  constructor(private readonly store: SqliteProductStore) {}

  append(event: ProjectAuditEvent): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_audit_events(
          event_type, occurred_at, project_id, correlation_id, payload_json
        ) VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        event.event,
        event.ts,
        "projectId" in event ? (event.projectId ?? null) : null,
        "correlationId" in event ? (event.correlationId ?? null) : null,
        JSON.stringify(event),
      );
  }

  /** Test helper — read all durable audit rows. */
  listAll(): ProjectAuditEvent[] {
    const rows = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_audit_events ORDER BY row_id ASC",
      )
      .all() as Array<{ payload_json: string }>;
    return rows.map((r) => JSON.parse(r.payload_json) as ProjectAuditEvent);
  }
}
```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts`

```
import type {
  ClockPort,
  DoctrinePackageResolverPort,
} from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AppendLivingProjectStateVersion } from "../../application/appendLivingProjectStateVersion";
import { CreateProject } from "../../application/createProject";
import { GetCurrentLivingProjectState } from "../../application/getCurrentLivingProjectState";
import { GetLivingProjectStateVersion } from "../../application/getLivingProjectStateVersion";
import { GetProject } from "../../application/getProject";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../../ports/projectAuditJournalPort";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import { SqliteLivingProjectStateRepository } from "./sqliteLivingProjectStateRepository";
import { SqliteProductStore } from "./sqliteProductStore";
import { SqliteProjectAuditJournal } from "./sqliteProjectAuditJournal";
import { SqliteProjectRepository } from "./sqliteProjectRepository";

export type CreateSqliteProductProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
  /** Explicit product DB path (tests). Default: resolveProductSqlitePath(). */
  dbPath?: string;
};

export type SqliteProductProjectServices = {
  store: SqliteProductStore;
  projects: ProjectRepositoryPort;
  lps: LivingProjectStateRepositoryPort;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  dbPath: string;
  dispose: () => void;
};

/** Factory for OA Product SQLite Project/LPS services (M1). */
export function createSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions,
): SqliteProductProjectServices {
  const store = new SqliteProductStore(options.dbPath);
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

export function createTestSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions & {
    audit?: SqliteProjectAuditJournal;
    fixedNowIso?: string;
    dbPath: string;
  },
): SqliteProductProjectServices & { audit: SqliteProjectAuditJournal } {
  const store = new SqliteProductStore(options.dbPath);
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T05:00:00.000Z"));
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

/** Type-only helper: Sqlite store satisfies UnitOfWork. */
export type { ProjectPersistenceUnitOfWorkPort };
```

### `projects/sfia-studio/app/__tests__/oa/project/m1ProductSqliteDurability.test.ts`

```
/**
 * M1 — OA Product SQLite Project/LPS durability proofs.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  resolveProductSqlitePath,
  SqliteProjectAuditJournal,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: SqliteProductProjectServices[] = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildSqliteServices(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    const svc = openServices.pop();
    try {
      svc?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M1 Product SQLite durability", () => {
  it("A — create durable: reopen same DB recovers Project + LPS", async () => {
    const dbPath = tempDbPath("a-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-a",
      title: "M1 Durable",
      objective: "Restart-safe Project/LPS",
      context: "critical-context-alpha",
      scope: "scope-campus",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:m1-a",
      lpsVersionId: "lps:m1-a-v1",
      idempotencyKey: "idem:m1-a",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const project = await svc2.getProject.execute({ projectId: "prj:m1-a" });
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-a",
    });
    expect(project.ok).toBe(true);
    expect(lps.ok).toBe(true);
    if (!project.ok || !lps.ok) return;
    expect(project.project.projectId).toBe("prj:m1-a");
    expect(project.project.currentLpsVersionId).toBe("lps:m1-a-v1");
    expect(lps.livingProjectState.version).toBe(1);
    expect(lps.livingProjectState.objective).toBe("Restart-safe Project/LPS");
    expect(lps.livingProjectState.context).toBe("critical-context-alpha");
    expect(lps.livingProjectState.scope).toBe("scope-campus");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
    expect(lps.livingProjectState.doctrinePackageRef.doctrinePackageId).toBe(
      VALID_PIN.doctrinePackageId,
    );
    expect(lps.livingProjectState.doctrinePackageRef.version).toBe(
      VALID_PIN.version,
    );
  });

  it("B — idempotency restart-safe", async () => {
    const dbPath = tempDbPath("b-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const first = await svc1.createProject.execute({
      projectId: "prj:m1-b",
      title: "Idem",
      objective: "idem objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v1",
    });
    expect(first.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const second = await svc2.createProject.execute({
      projectId: "prj:m1-b-other",
      title: "Should reuse",
      objective: "ignored",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v2",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.project.projectId).toBe("prj:m1-b");
    expect(second.livingProjectState.lpsVersionId).toBe("lps:m1-b-v1");
  });

  it("C — LPS append durable + superseded readable", async () => {
    const dbPath = tempDbPath("c-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-c",
      title: "Append",
      objective: "v1",
      context: "ctx-v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v1",
    });
    expect(created.ok).toBe(true);
    const appended = await svc1.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      expectedVersion: 1,
      objective: "v2",
      context: "ctx-v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v2",
    });
    expect(appended.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const current = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-c",
    });
    const prior = await svc2.getLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      version: 1,
    });
    expect(current.ok).toBe(true);
    expect(prior.ok).toBe(true);
    if (!current.ok || !prior.ok) return;
    expect(current.livingProjectState.version).toBe(2);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-c-v2");
    expect(current.livingProjectState.context).toBe("ctx-v2");
    expect(prior.livingProjectState.status).toBe("superseded");
    expect(prior.livingProjectState.objective).toBe("v1");
  });

  it("D — optimistic concurrency conflict leaves no partial mutation", async () => {
    const dbPath = tempDbPath("d-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    await svc.createProject.execute({
      projectId: "prj:m1-d",
      title: "Conflict",
      objective: "base",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-v1",
    });
    const conflict = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-d",
      expectedVersion: 99,
      objective: "should-fail",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-bad",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("LPS_VERSION_CONFLICT");
    const current = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-d",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.livingProjectState.version).toBe(1);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-d-v1");
    const missing = await svc.lps.findById("lps:m1-d-bad");
    expect(missing).toBeNull();
  });

  it("E — transaction rollback on forced LPS save failure", async () => {
    const dbPath = tempDbPath("e-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    svc.store.failNextSave = "lps";
    const result = await svc.createProject.execute({
      projectId: "prj:m1-e",
      title: "Rollback",
      objective: "should not persist",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-e-v1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.projects.exists("prj:m1-e")).toBe(false);
    expect(await svc.lps.findById("lps:m1-e-v1")).toBeNull();
  });

  it("F — product path isolation from D1/OPS1 names", () => {
    expect(() => resolveProductSqlitePath("/tmp/d1.sqlite")).toThrow(
      /parallel_engine/,
    );
    expect(() => resolveProductSqlitePath("/tmp/ops1.sqlite")).toThrow(
      /parallel_engine/,
    );
    const ok = resolveProductSqlitePath(tempDbPath("oa-product.sqlite"));
    expect(path.basename(ok)).toBe("oa-product.sqlite");
  });

  it("G — audit append-only survives reopen", async () => {
    const dbPath = tempDbPath("g-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-g",
      title: "Audit",
      objective: "audit",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-g-v1",
    });
    const before = (svc1.audit as SqliteProjectAuditJournal).listAll().length;
    expect(before).toBeGreaterThan(0);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const after = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(after.length).toBe(before);
    expect(after.some((e) => e.event === "oa.project.created")).toBe(true);
  });

  it("H — doctrine digest + context survive restart", async () => {
    const dbPath = tempDbPath("h-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-h",
      title: "Digest",
      objective: "obj-h",
      context: "critical-context-h",
      scope: "scope-h",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-h-v1",
    });
    svc1.dispose();
    const svc2 = buildSqliteServices(dbPath);
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-h",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.context).toBe("critical-context-h");
    expect(lps.livingProjectState.scope).toBe("scope-h");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts`

```
/**
 * M1 strong restart proof — two independent Node processes, same DB file.
 * @vitest-environment node
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKER = path.join(
  APP_ROOT,
  "__tests__/oa/project/m1RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M1 process restart proof", () => {
  it("create in process A, read in process B against same SQLite file", () => {
    expect(fs.existsSync(TSX)).toBe(true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-proc-"));
    const dbPath = path.join(dir, "oa-product.sqlite");
    const projectId = "prj:m1-proc";

    try {
      const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(create.status, create.stderr || create.stdout).toBe(0);
      const created = JSON.parse(create.stdout.trim()) as {
        ok: boolean;
        currentLpsVersionId?: string;
        digest?: string;
      };
      expect(created.ok).toBe(true);

      const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(read.status, read.stderr || read.stdout).toBe(0);
      const loaded = JSON.parse(read.stdout.trim()) as {
        ok: boolean;
        projectId?: string;
        currentLpsVersionId?: string;
        version?: number;
        objective?: string;
        context?: string;
        scope?: string;
        digest?: string;
        doctrinePackageId?: string;
        doctrineVersion?: string;
      };
      expect(loaded.ok).toBe(true);
      expect(loaded.projectId).toBe(projectId);
      expect(loaded.currentLpsVersionId).toBe(created.currentLpsVersionId);
      expect(loaded.version).toBe(1);
      expect(loaded.objective).toBe("process-restart-objective");
      expect(loaded.context).toBe("process-restart-context");
      expect(loaded.scope).toBe("process-restart-scope");
      expect(loaded.digest).toBe(created.digest);
      expect(loaded.doctrinePackageId).toBe("pkg:studio-v3-oa");
      expect(loaded.doctrineVersion).toBe("1.0.0");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessWorker.ts`

```
/**
 * Child-process worker for M1 restart proof (invoked via tsx).
 * Usage: tsx m1RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";

/** Spawn sets cwd to projects/sfia-studio/app */
const APP_ROOT = process.cwd();
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:30:00.000Z",
    dbPath,
  });

  try {
    if (mode === "create") {
      const result = await svc.createProject.execute({
        projectId,
        title: "Process Restart",
        objective: "process-restart-objective",
        context: "process-restart-context",
        scope: "process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m1-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!result.ok) {
        console.error(JSON.stringify(result.error));
        process.exit(2);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          currentLpsVersionId: result.project.currentLpsVersionId,
          digest: result.livingProjectState.doctrinePackageRef.digest,
          context: result.livingProjectState.context,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const project = await svc.getProject.execute({ projectId });
      const lps = await svc.getCurrentLivingProjectState.execute({ projectId });
      if (!project.ok || !lps.ok) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(3);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId: project.project.projectId,
          currentLpsVersionId: project.project.currentLpsVersionId,
          version: lps.livingProjectState.version,
          objective: lps.livingProjectState.objective,
          context: lps.livingProjectState.context,
          scope: lps.livingProjectState.scope,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
          doctrinePackageId:
            lps.livingProjectState.doctrinePackageRef.doctrinePackageId,
          doctrineVersion: lps.livingProjectState.doctrinePackageRef.version,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    svc.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
```

## 11. État M1 (inchangé techniquement)

- Architecture Product SQLite OA derrière ports + UnitOfWork
- Composition `/studio` T-A1 SQLite ; T-A2…T-A6 Memory
- Disclosures : `SQLITE_OA_PRODUCT_STORE` · `PARTIAL_PROJECT_LPS_DURABLE` · `projectLpsRestartSafe: true`
- Restart-safe Project/LPS/context/digest PASS (héritée)
- Statut M1 : **IMPLEMENTED CANDIDATE** — désormais **READY FOR MORRIS COMMIT GATE** après régularisation gouvernance

### Gates encore ouverts

1. Promotion Auth.js / Critical Ack
2. Cursor REAL / Gate D
3. Disposition OPS1 / D1 / execution-run
4. Runtime v3 NON ADOPTED
5. M2 NON AUTORISÉ
6. PostgreSQL Product (exit futur seulement)

---

## 12. Verdict

**M1 GOVERNANCE REGULARIZED — MORRIS SCOPE EXTENSION FOR 6 COMPATIBILITY TESTS RECORDED — G0 DECISION PACK ALIGNED WITH ADOPTED G0-A/G0-B — M1 APPLICATION DIFF UNCHANGED — M1 READY FOR MORRIS COMMIT GATE**

≠ commit/push/PR/merge autorisés · ≠ M2 · ≠ Cursor REAL · ≠ Gate D · ≠ Auth/Ack · ≠ runtime v3 ADOPTED · ≠ Postgres Product

review pack verdict = COMPLETE
created files full content = YES
modified sections complete = YES
useful diff = YES
scope regularization evidence = YES
application drift proof = YES
synthesis only = NO

---
Generated: 2026-08-13 09:43:50 CEST
