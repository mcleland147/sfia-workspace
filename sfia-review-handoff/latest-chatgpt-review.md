# ChatGPT Review Pack — FULL — T-A7 Framing Pack

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 03:42:43 CEST (+0200) |
| **Cycle principal** | 9 — QA / validation |
| **Cycles complémentaires** | 1 · 2 · 3 · 6 · 10 · 12 · 13 · 15 |
| **Profil SFIA** | Critical |
| **Typologie** | REVIEW / QA / T-A7 / CUTOVER-FRAMING / COMPLETION-CRITERIA / GOVERNANCE |
| **Gate consommé** | `GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
| **HEAD** | `27dbf60574b8ec82990600827934dc56e256b50f` |
| **Parent** | `c472eb412f3ade3e94fee9201042794fee502d8f` |
| **Base canonique** | `origin/main` @ `c472eb412f3ade3e94fee9201042794fee502d8f` |
| **Merge-base** | `c472eb412f3ade3e94fee9201042794fee502d8f` |
| **Upstream** | **aucun** |
| **Handoff initial** | `sfia/review-handoff` · `sfia-review-handoff/latest-chatgpt-review.md` · blob `db2bd3723420b2ceac57255f780afd285a75c807` |
| **Pack** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
| **Niveau review pack** | FULL |
| **Modification pack** | **aucune** |
| **Push branche projet** | **aucun** |

## Verdict exact

`SFIA STUDIO T-A7 FRAMING PACK NOT READY — DOCUMENTARY OR DECISION-MODEL CORRECTIONS REQUIRED — NO T-A7 OPENING OR PROJECT PUBLICATION`

## Gate candidat (NOT CONSUMED)

```
GO CORRECT T-A7 FRAMING PACK AFTER REVIEW — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER
```

## Anti-claims (review)

- review PASS ≠ framing validé
- pack éligible ≠ décisions consommées
- décision framing ≠ T-A7 delivery
- T-A7 framing validé ≠ T-A7 OPEN
- T-A7 OPEN ≠ cutover
- critères cohérents ≠ critères décidés
- critères décidés ≠ critères satisfaits
- T-A6 COMPLETE ≠ Option A COMPLETE
- Option A product complete ≠ production ready
- review locale ≠ publication projet

---

## 1. Local Git Truth Check

```
=== TRUTH 2026-07-28 03:41:00 CEST ===
/Users/morris/Projects/sfia-workspace-t-a7-framing
/Users/morris/Projects/sfia-workspace-t-a7-framing
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
HEAD=27dbf60574b8ec82990600827934dc56e256b50f
PARENT=c472eb412f3ade3e94fee9201042794fee502d8f
ORIGIN_MAIN=c472eb412f3ade3e94fee9201042794fee502d8f
MERGE_BASE=c472eb412f3ade3e94fee9201042794fee502d8f
## framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
UPSTREAM=fatal: no upstream configured for branch 'framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions'
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md
 .../01-framing-and-scope.md                        | 171 ++++++++++++++++
 .../02-t-a7-cutover-preconditions.md               | 107 ++++++++++
 .../03-t-a6-and-option-a-completion-criteria.md    | 134 ++++++++++++
 .../04-reservations-risks-and-stop-conditions.md   | 101 +++++++++
 .../05-morris-decision-pack.md                     | 226 +++++++++++++++++++++
 .../t-a7-legacy-cutover-framing/README.md          |  80 ++++++++
 6 files changed, 819 insertions(+)

```

### show --format=fuller --stat HEAD

```
commit 27dbf60574b8ec82990600827934dc56e256b50f
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 22:44:36 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 22:44:36 2026 +0200

    docs(sfia-studio): frame T-A7 cutover and Option A completion criteria

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../01-framing-and-scope.md                        | 171 ++++++++++++++++
 .../02-t-a7-cutover-preconditions.md               | 107 ++++++++++
 .../03-t-a6-and-option-a-completion-criteria.md    | 134 ++++++++++++
 .../04-reservations-risks-and-stop-conditions.md   | 101 +++++++++
 .../05-morris-decision-pack.md                     | 226 +++++++++++++++++++++
 .../t-a7-legacy-cutover-framing/README.md          |  80 ++++++++
 6 files changed, 819 insertions(+)

```

**Verdict truth :** `PASS` — branche / HEAD / parent / merge-base / blobs / 6×A only / worktree propre / aucun upstream / aucune opération Git active.

---

## 2. Blobs attendus vs observés

| Fichier | Blob attendu | Blob observé | Match |
|---------|--------------|--------------|-------|
| `README.md` | `efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c` | `efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c` | PASS |
| `01-framing-and-scope.md` | `4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd` | `4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd` | PASS |
| `02-t-a7-cutover-preconditions.md` | `eda7106103490798a6b379811eefe90156c46172` | `eda7106103490798a6b379811eefe90156c46172` | PASS |
| `03-t-a6-and-option-a-completion-criteria.md` | `232d73a9b021734dc8ba0f3c7c69d036cfe579d6` | `232d73a9b021734dc8ba0f3c7c69d036cfe579d6` | PASS |
| `04-reservations-risks-and-stop-conditions.md` | `da6d67448841b267c849b72a3692ea10d3b4d98c` | `da6d67448841b267c849b72a3692ea10d3b4d98c` | PASS |
| `05-morris-decision-pack.md` | `01a8482862467cbc0116e11dde1d8a946ace3a01` | `01a8482862467cbc0116e11dde1d8a946ace3a01` | PASS |

**Verdict blobs :** `PASS`

---

## 3. Contenu complet des six fichiers

### `README.md` — blob `efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c`

```markdown
# T-A7 — Legacy Cutover Framing (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-27 22:39:24 CEST (+0200) — Europe/Paris |
| **Cycle** | 1 — Cadrage (+2 Conception fonctionnelle · 3 Architecture fonctionnelle · 6 Architecture technique · 9 QA · 10 Sécurité/RSSI · 12 RUN readiness · 15 Capitalisation) |
| **Profil** | Critical |
| **Typologie** | CADRAGE / T-A7 / CUTOVER / COMPLETION-CRITERIA / GOVERNANCE / DOCUMENTATION |
| **Gate consommé** | `GO FRAME T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETE CRITERIA — SFIA STUDIO V3-NATIVE — NO DELIVERY OR REAL EXECUTION` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Base SHA** | `c472eb412f3ade3e94fee9201042794fee502d8f` (`origin/main`) |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
| **Upstream** | **aucun** |
| **Pack path** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
| **Statut pack** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **T-A7** | **NOT OPEN** |
| **T-A7 delivery** | **NOT AUTHORIZED** |
| **Cutover** | **NOT AUTHORIZED** |
| **T-A6 COMPLETE** | **NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |
| **Real execution** | **NOT AUTHORIZED** |
| **Verdict** | `SFIA STUDIO T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETION CRITERIA FRAMED — DOCUMENTARY PACK CREATED LOCALLY — T-A7 FRAMING DEFINED — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — MORRIS DECISIONS REQUIRED — OPTION A NOT COMPLETE — T-A7 NOT OPEN` |

---

## Objectif

Définir le cadrage documentaire candidat de T-A7 et les matrices affirmatives de complétude T-A6 / Option A, sans ouvrir le delivery, sans cutover et sans fermer Option A.

## Définition T-A7 (candidate)

`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`

Source AT : `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` · D-T-A6-10 BOUNDARY APPROVED.

## Niveaux T-A7

| Niveau | Contenu | Autorisé dans ce cycle |
|--------|---------|------------------------|
| **A. Framing** | définition · préconditions · critères · décisions · aucune modification runtime | **OUI — ce pack** |
| **B. Delivery preparation** | backlog · AT détaillée · plan migration · tests candidats · aucun cutover | NON |
| **C. Delivery** | modifications code/frontières · hold flags · tests · migration progressive | NON |
| **D. Cutover** | retrait/désactivation effective · preuves runtime · rollback · GO Morris dédié | NON |

## Livrables

1. [README.md](./README.md) — ce fichier
2. [01-framing-and-scope.md](./01-framing-and-scope.md)
3. [02-t-a7-cutover-preconditions.md](./02-t-a7-cutover-preconditions.md)
4. [03-t-a6-and-option-a-completion-criteria.md](./03-t-a6-and-option-a-completion-criteria.md)
5. [04-reservations-risks-and-stop-conditions.md](./04-reservations-risks-and-stop-conditions.md)
6. [05-morris-decision-pack.md](./05-morris-decision-pack.md)

## Décisions Morris attendues

D-T-A7-F01…F14 — toutes **`NOT DECIDED`** — voir [05-morris-decision-pack.md](./05-morris-decision-pack.md).

## Gate suivant candidat

```
GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA
— SFIA STUDIO V3-NATIVE
```

**NOT CONSUMED.**

## Anti-claims

- pack créé ≠ framing validé
- framing défini ≠ T-A7 OPEN
- T-A7 OPEN ultérieurement ≠ delivery autorisé
- delivery autorisé ≠ cutover autorisé
- critères proposés ≠ critères décidés
- critères techniquement satisfaits ≠ Option A COMPLETE
- product complete ≠ production ready
- intégration T-A0–T-A6 ≠ cutover readiness
- commit local ≠ publication
- assessment ≠ décision Morris
- aucune réserve fermée · aucun runtime/modeled/workflow modifié · aucun push projet

```

### `01-framing-and-scope.md` — blob `4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd`

```markdown
# 01 — Framing and Scope

| Champ | Valeur |
|-------|--------|
| **Document** | `01-framing-and-scope.md` |
| **Pack** | `t-a7-legacy-cutover-framing` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **T-A7** | **NOT OPEN** |
| **Delivery / cutover / real execution** | **NOT AUTHORIZED** |
| **Décisions** | D-T-A7-F01 · D-T-A7-F02 — **NOT DECIDED** |

---

## 1. Truth et sources

| Contrôle | Résultat |
|----------|----------|
| `origin/main` | `c472eb412f3ade3e94fee9201042794fee502d8f` |
| Branche | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
| Pack T-A7 préexistant sur main | **absent** |
| Upstream | **aucun** |

### Sources déterminantes (courantes)

| Path | Blob | Rôle |
|------|------|------|
| `sfia-v3-technical-architecture/.../11-legacy-isolation-migration-and-cutover-architecture.md` | `fc2e410be49e0b736f2914fdbb1c0795ddf0c996` | Cutover / OPS1 / MethodMode |
| `sfia-v3-technical-architecture/.../12-delivery-slices-dependencies-and-technical-gates.md` | `493634be2ebeabb42ee453765e7ba7f5d2c7e7f9` | Définition T-A7 |
| `sfia-v3-technical-architecture/.../13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae57ddef0d5f7f7239a51545522edfb2a0` | AT-OA-12 ordre T-A0…T-A7 VALIDATED |
| `t-a6-.../03-decisions.md` D-T-A6-10 | `5e8f2f1ac7e352f34963a80265a0d60afb34107e` | Frontière T-A6 / T-A7 APPROVED |
| `23-next-option-a-step-after-t-a6.md` | `e87deff78f5662dccae84557b061ad3aec9ea461` | Trajectoire post-T-A6 |
| `24-ci-and-merge-governance-preparation.md` | `27c7934799d19e5fc3401eb55e95c0d99b1e36e2` | F-A6 CLOSED · Option A NOT COMPLETE · T-A7 NON OUVERTE |
| Assessment handoff | `f89afcecb793d0d4e77307b8ec6344a584389862` | Post-F-A6 trajectory |

---

## 2. Définition bornée de T-A7

### Libellé candidat

`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`

### Frontière D-T-A6-10 (APPROVED — historique validé)

| T-A6 | T-A7 |
|------|------|
| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, findings/dette de review, reco de gate | cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale |

T-A6 **ne lance pas** T-A7. Aucune exécution réelle ouverte par T-A6.

### Quatre niveaux (obligatoires)

#### A. T-A7 framing — **ce cycle**

- définition exacte ;
- préconditions ;
- critères de complétude candidats ;
- décision pack Morris ;
- **aucune** modification runtime, modeled, workflow, `method/**`, OPS1.

#### B. T-A7 delivery preparation — **hors cycle**

- backlog découpé ;
- architecture détaillée ;
- plan de migration ;
- tests candidats ;
- hold/rollback design ;
- **aucun** cutover.

#### C. T-A7 delivery — **hors cycle**

- modifications code et frontières d’import ;
- feature / hold flags ;
- tests unitaires et d’intégration ;
- migration progressive sous hold.

#### D. T-A7 cutover — **hors cycle**

- retrait ou désactivation effective ;
- preuves runtime ;
- rollback éprouvé ;
- décision Morris **dédiée** et distincte.

**Règle :** ces quatre niveaux ne sont **pas** équivalents. Framing ≠ open ≠ delivery ≠ cutover ≠ real execution.

---

## 3. Périmètre candidat du framing

### Inclus (définition / critères seulement)

| Élément legacy | Remplacement Option A cible |
|----------------|-----------------------------|
| `canonicalPaths` | DoctrinePackage registry |
| `sourceLoader` | package loader |
| `contextResolver` | CkcResolver + doctrine |
| `sessionContext` dépendances MethodMode | corrélation Option A |
| `MethodMode` | retiré de la **cible** Option A |
| lectures `method/**` | absentes de la cible Option A |
| badges v2.6 | retirés des surfaces Option A |
| contrats OPS1 hors legacy | isolation ACL / frontière |
| historique legacy | read-only seulement sous politique Morris explicite |
| migration | anti-corruption adapter si nécessaire |
| rollback | hold flag / stratégie de rollback |

### Hors périmètre de ce cadrage

- implémentation runtime ou modeled ;
- choix technique définitif non déjà validé (DB, vendor blob, IAM provider) ;
- suppression réelle de `MethodMode` / `method/**` / OPS1 ;
- migration réelle ;
- double write ;
- compatibilité implicite ;
- présentation OPS1 comme v3 ;
- adoption globale hors Option A ;
- fermeture de réserve ;
- déclaration T-A6 COMPLETE / Option A COMPLETE / T-A7 OPEN ;
- exécution réelle ;
- hardening M1 ;
- modification du ruleset.

---

## 4. Convention de path

| Élément | Valeur |
|---------|--------|
| Path retenu | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
| Justification | aligné `t-a0-…` … `t-a6-…` ; suffixe `framing` explicite tant que T-A7 n’est pas ouvert |
| Collision | **aucune** (aucun `t-a7-*` sur `origin/main`) |

---

## 5. État capacitaire pertinent (faits Git)

| Capacité | État sur `main` | Preuve |
|----------|-----------------|--------|
| Fondation FD/FA/UX/Modeled/AT | VALIDATED BY MORRIS | design README |
| T-A0…T-A6 runtime mémoire | **intégré** PR #261–#267 | chronology doc 23 |
| T-A6 COMPLETE | **NON** | T-A6 README |
| Option A COMPLETE | **NON** | doc 24 D-M1-05 |
| Persistence réelle | **absente** | doc 23 |
| API/UI Option A native | **absente** | doc 23 |
| Adapter réel / worker / queue | **absent** | T-A5 |
| CI + M1 Required Gate | **actif** | ruleset `19798462` · F-A6 CLOSED |
| Pack delivery `t-a7-*` | **absent** | inventaire main |

---

## 6. Challenge de cadrage

| Question | Réponse cadrage |
|----------|-----------------|
| Framing utile maintenant ? | **Oui** — critères COMPLETE et préconditions cutover absents |
| Framing = ouverture T-A7 ? | **Non** |
| HARD R-T-A3 bloquent-ils le framing ? | **Non** — ils bloquent delivery/cutover/real execution |
| Persistence/IAM/RGPD requis pour framing ? | **Non** — requis avant delivery/real execution/cutover selon matrice |
| UI/API requise pour framing ? | **Non** — à arbitrer pour cutover (D-T-A7-F11) |

---

## 7. Anti-claims

Pas T-A7 OPEN · Pas T-A7 COMPLETE · Pas READY FOR DELIVERY · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas RESERVE CLOSED · Pas Option A COMPLETE · Pas T-A6 COMPLETE · Pas DECIDED pour D-T-A7-F*.

---

## 8. Verdict documentaire

`T-A7 FRAMING SCOPE DEFINED — LEVEL A ONLY — DELIVERY AND CUTOVER OUT OF SCOPE — MORRIS VALIDATION REQUIRED`

```

### `02-t-a7-cutover-preconditions.md` — blob `eda7106103490798a6b379811eefe90156c46172`

```markdown
# 02 — T-A7 Cutover Preconditions

| Champ | Valeur |
|-------|--------|
| **Document** | `02-t-a7-cutover-preconditions.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Matrice** | `RECOMMENDATION — NOT DECIDED` |
| **T-A7** | **NOT OPEN** |
| **Delivery / cutover** | **NOT AUTHORIZED** |

> Toutes les préconditions ci-dessous sont **candidates**. Elles ne sont **pas** toutes obligatoires pour le framing read-only. Morris tranche via D-T-A7-F03 / F08 / F09 / F10 / F11.

---

## 1. Légende

| Champ | Sens |
|-------|------|
| **Niveau requis** | Framing / Delivery prep / Delivery / Cutover / Real execution / Production |
| **État actuel** | observation Git sur `origin/main` @ `c472eb4` |
| **SATISFIED / PARTIAL / MISSING / N/A** | qualification de preuve actuelle |

---

## 2. Matrice des préconditions

| ID | Composant legacy | Remplacement Option A | État actuel | Preuve Git | Gap | Risque | Dépendance | Réserve liée | Entrée delivery | Entrée cutover | Rollback | Décision Morris | Cycle recommandé |
|----|------------------|----------------------|-------------|------------|-----|--------|------------|--------------|-----------------|----------------|----------|-----------------|------------------|
| P01 | — | T-A0…T-A6 intégrés | **SATISFIED** | PR #261–#267 · doc 23 | aucun pour intégration | faible | — | — | OK | OK | n/a | D-T-A7-F03 | — |
| P02 | — | Critères T-A6 COMPLETE définis | **PARTIAL** | matrices candidates ce pack | critères **non décidés** | faux claim COMPLETE | framing | C1–C4 · R-M01 | critères validés Morris | T-A6 COMPLETE déclaré | n/a | D-T-A7-F04 | review framing |
| P03 | `canonicalPaths` | DoctrinePackage registry | **PARTIAL** | T-A0 runtime `app/lib/oa/doctrine/**` | pas d’adoption produit globale ; pas de preuve no-fallback | fallback silencieux | T-A0 | — | tests resolve/deny sans fallback | preuve import + runtime | feature flag | D-T-A7-F03 | delivery prep |
| P04 | `sourceLoader` | package loader + digest | **PARTIAL** | T-A0 digest SHA-256 | pas de cutover loader produit | package stale | T-A0 | — | digest pin tests | loader unique cible | restore package pin | D-T-A7-F03 | delivery prep |
| P05 | `contextResolver` | CkcResolver + doctrine | **PARTIAL** | T-A2 `memoryCkcResolver` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | T-A2 | — | boundary tests CKC | no method/** reads | hold flag | D-T-A7-F03 | delivery |
| P06 | `sessionContext` / MethodMode deps | OA correlation | **MISSING** | anti-claims T-A* | pas de remplacement produit session | MethodMode residual | T-A0–T-A2 · UX | — | design session OA | preuve no MethodMode | hold | D-T-A7-F03 · F11 | delivery prep |
| P07 | MethodMode | retiré de cible OA | **MISSING** | AT-11 table | MethodMode encore présent hors OA runtime mémoire | cutover prématuré | UX/API | — | inventaire dépendances | UI+API tests + import boundary | hold flag | D-T-A7-F03 · F11 | delivery |
| P08 | lectures `method/**` | absentes cible OA | **MISSING** | AT-11 | pas de preuve import boundary Option A native | lecture legacy silencieuse | modules app | — | grep/import boundary CI | CI + runtime proof | hold | D-T-A7-F03 | delivery |
| P09 | badges v2.6 | retirés surfaces OA | **MISSING** | AT-11 | UI Option A native absente | confusion utilisateur | UX | — | design UI OA | UI tests | hold | D-T-A7-F11 | delivery |
| P10 | OPS1 contracts | ACL / isolation | **PARTIAL** | AT-11 · shared surfaces séparées | pas d’ACL cutover prouvée | double identité OPS1/v3 | CT/D1 parallel | — | frontière documentée + tests no cross-call | ACL runtime | hold | D-T-A7-F13 | delivery |
| P11 | historique legacy | read-only policy | **MISSING** | AT-11 | politique non décidée | fuite/mutation legacy | D-T-A7-F13 | — | politique Morris | enforcement read-only | restore ACL | D-T-A7-F13 | framing→delivery |
| P12 | — | Project/LPS porte état nécessaire | **PARTIAL** | T-A1 mémoire | B5 satellite ids ; pas persistence | état incomplet | T-A1 | **B5** | B5 traité ou accepté | persistence saine | snapshot restore | D-T-A7-F08 · F09 | reserve closure |
| P13 | — | Cycle/Trajectory/CKC | **PARTIAL** | T-A2 | R1 atomicité ; Critical ack absent | inconsistance | T-A2 | **R1** · **R-T-A3-1** | R1 stratégie ; Critical path | preuve qualification | version traj | D-T-A7-F08 · F09 | authority |
| P14 | — | autorité humaine exploitable | **PARTIAL** | T-A3 | Critical ack public absent ; authority mémoire | Critical fail-closed permanent | T-A3 | **R-T-A3-1** · **R-T-A3-3** | Critical ack API + IAM path | IAM + audit | supersede | D-T-A7-F08 · F10 | authority/IAM |
| P15 | — | ExecutionContract gouverné | **PARTIAL** | T-A4 | R-T-A3-2 résiduelle | orphan Decision↔LPS | T-A4 | **R-T-A3-2** | atomicité décidée | preuve txn | cancel/supersede | D-T-A7-F08 · F09 | architecture |
| P16 | — | Attempt/exécution bornée | **PARTIAL** | T-A5 Test/NoOp | pas d’adapter réel / worker | exécution réelle impossible | T-A5 | R-T-A3 HARD | adapter réel borné si cutover l’exige | timeout≠success live | cancel attempt | D-T-A7-F09 | real execution |
| P17 | — | Evidence/Review/Maturity | **PARTIAL** | T-A6 D1–D5 VALIDATED | T-A6 COMPLETE NON ; R-M01 · U-M02 · C1–C4 | claim readiness faux | T-A6 | **R-M01** · **U-M02** · **C1–C4** | critères T-A6 COMPLETE | T-A6 COMPLETE déclaré | incomplete bundle | D-T-A7-F04 · F08 | T-A6 closure |
| P18 | — | persistance cible décidée | **MISSING** | anti-claim DATABASE NOT SELECTED | DB non choisie | cutover sur mémoire | AT-OA | **R1** · **U-M02** | DB SELECTED + schéma | migrations + backup | restore DB | D-T-A7-F10 | persistence |
| P19 | — | stratégie atomicité | **MISSING** | R1 · R-T-A3-2 OPEN | pas de txn/outbox | corruption d’état | T-A1–T-A4 | **R1** · **R-T-A3-2** | stratégie validée | preuve adversarial | compensate/outbox replay | D-T-A7-F08 · F09 | architecture |
| P20 | — | IAM décidé | **MISSING** | U-AT01 · R-T-A3-3 | registry mémoire | spoofing authority | T-A3 | **R-T-A3-3** | IAM design | IAM runtime | revoke | D-T-A7-F10 | security |
| P21 | — | RGPD / rétention Evidence | **MISSING** | U-M02 · D-T-A6-09 | vendor/rétention non choisis | non-conformité | T-A6 | **U-M02** | politique + vendor | purge/legal hold preuves | restore retention class | D-T-A7-F10 | privacy |
| P22 | — | API/UI nécessaires cutover | **MISSING** | doc 23 · UX design only | pas de wiring `lib/oa` | cutover invisible / non opérable | UX | — | surfaces minimales définies | UI+API tests | hold UI flag | D-T-A7-F11 | product |
| P23 | — | observabilité + rollback | **PARTIAL** | audit console/memory · AT-10 | pas RUN-ready | cutover non observable | AT-10 | — | design RUN + hold | metrics/traces + rollback test | hold flag | D-T-A7-F03 · F09 | RUN |
| P24 | — | import boundaries prouvables | **MISSING** | AT-11 | pas de CI boundary cutover | régression method/** | DevOps | — | règles CI | CI required gate | revert commit | D-T-A7-F03 | delivery |
| P25 | — | gouvernance M1 suffisante | **PARTIAL** | M1 COMPLETE · loose OPEN | approvals=0 · strict=false | merge cutover sous-gouverné | ruleset `19798462` | M1 D3 | hardening si cutover sur main | hardening appliqué | ruleset restore | D-T-A7-F12 | governance |

---

## 3. Classification par niveau

### Obligatoires pour framing (niveau A) — recommandation

| ID | Motif |
|----|-------|
| P01 | base intégrée déjà vraie |
| P02 | sans critères T-A6, cutover flou |
| définition niveaux A–D | anti-confusion framing/delivery |
| inventaire P03–P25 | sans exécution |

**Non obligatoires pour framing :** P07–P09, P16, P18–P22, P24–P25.

### Candidats obligatoires avant delivery (niveau C) — `NOT DECIDED`

P02 (critères validés) · P03–P05 (remplacements doctrine/CKC prouvables) · P12–P15 (réserves HARD ou acceptation formelle) · P17 · P18–P19 · P23 design · P24 design · D-T-A7-F08.

### Candidats obligatoires avant cutover (niveau D) — `NOT DECIDED`

Tous les delivery + P07–P11 · P16 si activation opérationnelle · P20–P22 · P23 preuves · P25 hardening selon D-T-A7-F12 · D-T-A7-F09.

### Candidats obligatoires avant real execution — `NOT DECIDED`

R-T-A3-1 · R-T-A3-2 · adapter réel · IAM · persistence · RGPD/U-M02 · atomicité.

---

## 4. Hold / rollback (conceptuel)

| Mécanisme | Usage candidat |
|-----------|----------------|
| Feature / hold flag | empêcher activation cutover avant GO |
| Import boundary CI | bloquer réintroduction `method/**` |
| Package pin / digest | rollback doctrine |
| Snapshot LPS / DB restore | rollback état |
| Ruleset restore | rollback gouvernance M1 |
| Supersede Decision / Cancel Contract / Attempt | rollback logique métier |

**Aucun** de ces mécanismes n’est implémenté dans ce cycle.

---

## 5. Anti-claims

Pas READY FOR DELIVERY · Pas READY FOR CUTOVER · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas MethodMode REMOVED · Pas V2.6 REMOVED · Pas OPS1 RETIRED · Pas préconditions SATISFIED globales · Pas DECIDED.

---

## 6. Verdict

`T-A7 CUTOVER PRECONDITION MATRIX FRAMED — CANDIDATE ONLY — FRAMING DOES NOT REQUIRE FULL SATISFACTION — MORRIS DECISIONS REQUIRED`

```

### `03-t-a6-and-option-a-completion-criteria.md` — blob `232d73a9b021734dc8ba0f3c7c69d036cfe579d6`

```markdown
# 03 — T-A6 and Option A Completion Criteria

| Champ | Valeur |
|-------|--------|
| **Document** | `03-t-a6-and-option-a-completion-criteria.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Matrices** | `RECOMMENDATION — NOT DECIDED` |
| **T-A6 COMPLETE** | **NOT DECLARED** |
| **Option A COMPLETE** | **NOT DECLARED** |

> Aucune déclaration COMPLETE n’est autorisée par ce document. Les matrices sont des **propositions** pour arbitrage Morris (D-T-A7-F04…F07).

---

## 1. Ambiguïté de vocabulaire (rappel)

| Terme | Sens |
|-------|------|
| Foundation complete (design) | FD · FA · UX · Modeled · AT VALIDATED — **déjà vrai** (design) ; ≠ product COMPLETE |
| T-A6 D1–D5 VALIDATED | use cases techniques delivery — **≠** T-A6 COMPLETE |
| T-A6 COMPLETE | clôture slice Evidence/Review/Claims/Maturity — **à décider** |
| Option A product complete | capacité produit Option A sans nécessairement production — **à décider** |
| Option A production ready | RUN/IAM/RGPD/E2E/ops — **distinct** |
| M1 REX D1–D7 | décisions gouvernance CI — **≠** T-A6 D1–D5 |

---

## 2. Critères candidats T-A6 COMPLETE

**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`

| ID | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Blocker | Réserve | Owner | Gate |
|----|--------------------|-----------------|-----------------|------|---------|---------|-------|------|
| T6-C01 | D1 Evidence runtime fail-closed intégré | tests Evidence + module sur main | D1 VALIDATED · PR #267 | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C02 | D2 ReviewBundle lifecycle intégré | tests ReviewBundle | D2 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C03 | D3 ClaimEvaluation fail-closed | tests ClaimEvaluation | D3 VALIDATED | **SATISFIED** | non | R-M01 | Morris | D-T-A7-F04 |
| T6-C04 | D4 MaturityAssessment sans auto-promotion | tests Maturity | D4 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C05 | D5 RecommendNextGate read-only, no T-A7 launch | tests + `T_A7_AUTO_LAUNCH_FORBIDDEN` | D5 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C06 | Modeled/runtime alignment Evidence/RB/Claim/Maturity | schemas + runtime + modeled tests | matérialisé + governance tests CI | **SATISFIED** | non | R-M01 closure | Morris | D-T-A7-F04 |
| T6-C07 | Non-régression T-A3–T-A5 | suites Vitest pass | documenté post-merge | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C08 | Erreurs fail-closed documentées | codes + tests adversariaux | présents | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C09 | Autorité humaine respectée (pas auto-ack Critical) | tests Critical fail-closed | présent | **SATISFIED** | non | R-T-A3-1 (hors T-A6 mémoire) | Morris | D-T-A7-F04 |
| T6-C10 | Périmètre mémoire justifié **ou** persistence réelle | décision Morris explicite | fake-only justifié docs ; persistence absente | **PARTIAL** | si COMPLETE exige persistence | U-M02 · R1 | Morris | D-T-A7-F04 · F07 |
| T6-C11 | Réserves T-A6 traitées ou acceptées formellement | registre réserves CLOSED ou ACCEPTED | R-M01 · U-M02 · C1–C4 OPEN / NOT VALIDATED | **MISSING** | **oui** candidate | R-M01 · U-M02 · C1–C4 | Morris | D-T-A7-F04 · F08 |
| T6-C12 | Tests T-A6 observés sous CI Required Gate | CI success sur paths Studio | workflow + gate M1 actifs post-#268 | **SATISFIED** | non | F-CI-* residual | Morris | D-T-A7-F04 |
| T6-C13 | Documentation delivery + post-merge présents | docs 01–22 + README | présents sur main | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
| T6-C14 | Post-merge review complète | doc 22 | COMPLETE (CI unavailable à l’époque ; gap gouvernance fermé via F-A6) | **SATISFIED** | non | F-A6 CLOSED | Morris | D-T-A7-F04 |
| T6-C15 | Décision Morris explicite `T-A6 COMPLETE` | gate + verdict | **absente** | **MISSING** | **oui** | — | Morris | D-T-A7-F04 |

### Synthèse T-A6

- Techniquement : D1–D5 et CI/docs largement **SATISFIED**.
- Gouvernance : T6-C11 + T6-C15 **MISSING** → **T-A6 COMPLETE NOT DECLARED**.
- T6-C10 dépend de D-T-A7-F07 (product vs production) : mémoire peut rester acceptable pour un COMPLETE étroit.

---

## 3. Critères candidats Option A COMPLETE

**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`

### 3.1 Couches

| Couche | Libellé | Définition candidate | Nécessaire pour foundation? | Product complete? | Production ready? | T-A7 framing? | T-A7 delivery? | T-A7 cutover? |
|--------|---------|----------------------|----------------------------|-------------------|-------------------|---------------|----------------|---------------|
| **A** | Foundation complete | FD · FA · UX · Modeled · AT VALIDATED | **définition** | prérequis | prérequis | utile | prérequis | prérequis |
| **B** | Integrated runtime complete | T-A0…T-A6 intégrés + tests mémoire + CI | non | prérequis candidat | prérequis | utile | prérequis | prérequis |
| **C** | Product completion | chaîne fonctionnelle Option A opérable selon critères Morris (peut exclure prod) | non | **définition** | prérequis | non | probable | **oui** |
| **D** | Real-execution readiness | Critical ack · atomicité · adapter réel · persistence | non | optionnel (D-T-A7-F07) | prérequis | non | selon périmètre | **oui** si activation |
| **E** | Production readiness | IAM · RGPD · RUN · E2E · hardening · deps | non | **non implicite** | **définition** | non | non | recommandé |
| **F** | Legacy cutover complete | MethodMode/method/** retirés · OPS1 isolé · preuves | non | optionnel (peut être hors product étroit) | souvent requis | non | — | **définition cutover** |

**Règle soumise à Morris (D-T-A7-F07) :** `production ready` n’est **pas** une condition implicite d’une définition étroite de `product complete`.

### 3.2 Matrice dimensionnelle Option A

| ID | Dimension | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Couches | Blocker product? | Blocker production? | Owner |
|----|-----------|--------------------|-----------------|-----------------|------|---------|------------------|---------------------|-------|
| OA-01 | FD/FA/UX/Modeled/AT | fondation design VALIDATED | packs design | VALIDATED | **SATISFIED** | A | non | non | Morris |
| OA-02 | T-A0…T-A6 intégrés | merges #261–#267 | Git | OUI | **SATISFIED** | B | non | non | Morris |
| OA-03 | T-A6 COMPLETE | critères T6 + GO Morris | matrices + décision | NON | **MISSING** | B/C | **oui** candidat | oui | Morris |
| OA-04 | T-A7 | cutover complete **ou** hors product étroit | pack + preuves | NOT OPEN | **N/A ou MISSING** | C/F | selon F06/F07 | oui cutover | Morris |
| OA-05 | Persistence | DB SELECTED + repos durables | ADR + migrations | absente | **MISSING** | C/D/E | selon F07 | **oui** | Morris |
| OA-06 | Atomicité | R1 + R-T-A3-2 résolus ou acceptés | design + tests | OPEN HARD | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-07 | Autorité | Critical ack + supersession | API + tests | R-T-A3-1 OPEN | **MISSING** | D | **oui** real-exec | oui | Morris |
| OA-08 | IAM | provider + mapping authority | design + runtime | NOT DECIDED | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-09 | Sécurité | fail-closed + deps + secrets | CI + audit | PARTIAL | **PARTIAL** | E | non immédiat | **oui** | Morris |
| OA-10 | RGPD / Evidence retention | politique + vendor + purge | docs + preuves | U-M02 OPEN | **MISSING** | D/E | selon F07 | **oui** | Morris |
| OA-11 | API/UI | surfaces Option A branchées `lib/oa` | code + tests | absentes | **MISSING** | C | **oui** candidat | oui | Morris |
| OA-12 | Adapters réels | adapter non-Test/NoOp | code + tests | absents | **MISSING** | D | real-exec | oui | Morris |
| OA-13 | Worker/queue/scheduler | exécution asynchrone contrôlée | code + RUN | absents | **MISSING** | D/E | real-exec | oui | Morris |
| OA-14 | Tests E2E | parcours Option A | Playwright/CI | exclus CI | **MISSING** | E | non | **oui** | Morris |
| OA-15 | CI | Required Gate path-aware | ruleset + runs | SATISFIED M1 | **SATISFIED** | B/E | non | partiel | Morris |
| OA-16 | Observabilité | metrics/traces/audit | stack RUN | console/memory | **PARTIAL** | E | non | **oui** | Morris |
| OA-17 | RUN | health/backup/restore/runbooks | pack RUN | conceptuel AT-10 | **MISSING** | E | non | **oui** | Morris |
| OA-18 | Rollback | hold + restore éprouvés | preuves | non cutover | **MISSING** | F/E | cutover | oui | Morris |
| OA-19 | Documentation | index + packs cohérents | docs | packs présents ; pas d’index delivery racine | **PARTIAL** | A–F | non | non | Morris |
| OA-20 | Réserves | CLOSED ou ACCEPTED formellement | registre | OPEN | **MISSING** | C–F | **oui** | oui | Morris |
| OA-21 | Dette C1–C4 / F-CI | traitée ou acceptée | décisions | NOT VALIDATED / OPEN | **MISSING** | C/E | partiel | partiel | Morris |
| OA-22 | Décisions Morris | critères F04–F07 décidés + COMPLETE GO | gates | NOT DECIDED | **MISSING** | toutes | **oui** | oui | Morris |

### 3.3 Définitions candidates à trancher

| Option de définition | Inclut | Exclut typiquement | Dette |
|----------------------|--------|--------------------|-------|
| **Étroite — fondation+runtime intégré** | A+B + T-A6 COMPLETE mémoire justifié | persistence · IAM · UI · cutover | risque de sous-estimer produit |
| **Produit opérable** | A+B+C (+ OA-11) | production E · cutover F optionnel | nécessite UI/API |
| **Produit + cutover** | A+B+C+F | production E | blast radius élevé |
| **Production ready** | A–E (+ F souvent) | — | plus long ; le plus sûr |

**Recommandation Cursor/ChatGPT (non Morris) :** distinguer explicitement **product complete** (C) et **production ready** (E) ; ne pas exiger E pour C ; exiger F seulement si Option A est définie comme « v3 native sans MethodMode ».

---

## 4. Liens T-A7

| Question | Réponse candidate |
|----------|-------------------|
| Option A doit-elle être COMPLETE avant framing T-A7 ? | **Non** |
| Option A doit-elle être COMPLETE avant delivery T-A7 ? | **Probablement oui pour couches A–B et critères T-A6** — D-T-A7-F03/F08 |
| Option A doit-elle être COMPLETE avant cutover ? | **Oui au sens product/cutover décidé** — D-T-A7-F06/F09 |
| T-A7 framing peut-il coexister avec réserves OPEN ? | **Oui** |

---

## 5. Anti-claims

Pas T-A6 COMPLETE · Pas Option A COMPLETE · Pas PRODUCTION READY · Pas READY FOR CUTOVER · Pas critères DECIDED · Pas RESERVE CLOSED.

---

## 6. Verdict

`T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — RECOMMENDATION NOT DECIDED — NO COMPLETE DECLARATION`

```

### `04-reservations-risks-and-stop-conditions.md` — blob `da6d67448841b267c849b72a3692ea10d3b4d98c`

```markdown
# 04 — Reservations, Risks and Stop Conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `04-reservations-risks-and-stop-conditions.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **T-A7** | **NOT OPEN** |
| **Réserves fermées dans ce cycle** | **aucune** |

---

## 1. Registre des réserves et findings

| ID | Statut | Définition | Preuve | Bloque framing T-A7 ? | Bloque delivery T-A7 ? | Bloque cutover ? | Bloque real execution ? | Bloque production ? | Obligatoire Option A COMPLETE ? | Décision Morris | Cycle recommandé |
|----|--------|------------|--------|----------------------|------------------------|------------------|-------------------------|---------------------|---------------------------------|-----------------|------------------|
| **B5** | OPEN | LPS satellite ids non carry-forward | T-A2/T-A3 docs · doc 23 | **Non** | **Oui** candidat | **Oui** | Indirect | Indirect | **Oui** candidat | D-T-A7-F08 | reserve closure / T-A1 |
| **R1** | OPEN | Atomicité Project↔Cycle absente | T-A2 docs | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** si persistence | D-T-A7-F08 · F10 | architecture persistence |
| **R-T-A3-1** | OPEN **HARD** | Pas d’API publique Critical acknowledge | T-A3 · Confirm fail-closed | **Non** | **Oui** si Critical path requis | **Oui** si activation | **Oui** | **Oui** | **Oui** real-exec / product large | D-T-A7-F08 · F09 | authority |
| **R-T-A3-2** | OPEN **HARD** | Atomicité Decision↔LPS/Epistemic résiduelle | T-A3/T-A4 Option B | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** persistence | D-T-A7-F08 · F09 | architecture |
| **R-T-A3-3** | OPEN | Authority registry in-memory | T-A3 | **Non** | Partiel | **Oui** | Partiel | **Oui** (IAM) | **Oui** production | D-T-A7-F10 | IAM |
| **R-T-A3-4** | OPEN | Enum mapping `AUTHORITY_SCOPE_MISMATCH` | T-A3 | **Non** | **Non** | **Non** | **Non** | Low | Non | dette ultérieure | hygiene |
| **R-M01** | OPEN | ClaimEvaluator readiness — closure Morris | T-A6 | **Non** | **Oui** candidat T-A6 COMPLETE | Indirect | Indirect | **Oui** | **Oui** T-A6 COMPLETE | D-T-A7-F04 · F08 | modeled/delivery |
| **U-M02** | OPEN | Evidence blob vendor / payloads / retention | T-A6 · D-T-A6-09 | **Non** | **Oui** si Evidence physique | **Oui** | **Oui** | **Oui** | **Oui** production / Evidence | D-T-A7-F10 | RGPD/persistence |
| **C1** | RECOMMENDED — NOT VALIDATED | Evidence status jointure PASS | T-A6 20-pr-readiness | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 · F08 | T-A6 debt |
| **C2** | RECOMMENDED — NOT VALIDATED | Self-review Critical | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C3** | RECOMMENDED — NOT VALIDATED | Bornes taille/nombre | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C4** | RECOMMENDED — NOT VALIDATED | LPS satellite → fusion B5 candidate | T-A6 | **Non** | Via B5 | Via B5 | Indirect | Indirect | Via B5 | D-T-A7-F08 | merge into B5 |
| **F-CI-01** | OPEN | Node engines pin absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | Partiel | Non | tooling | config |
| **F-CI-02** | OPEN | npm audit historique | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Oui** conditionnel | Non | security | deps |
| **F-CI-03** | MITIGATED | Node local/CI | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-04** | OPEN Minor | actionlint absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | tooling | — |
| **F-CI-05** | MITIGATED | node:sqlite/Node20 | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-06/06B** | MITIGATED non CLOSED | whitespace | docs 29/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | hygiene | — |
| **F-A6-PM-G01** | **CLOSED** | merge T-A6 sans CI formelle | doc 24 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | supersédé |
| **M1 loose** | NOT DECIDED | approvals=0 · strict=false · conversation resolution=false · bypass | doc 24/33 · D3 | **Non** | **Non** | **Recommandé avant** | **Non** | **Oui** | Non (distinct COMPLETE) | D-T-A7-F12 | governance |

### Point critique R-T-A3-1 / R-T-A3-2

Git **ne démontre pas** que R-T-A3-1/2 bloquent un cadrage read-only. Ils restent **HARD** pour :

- exécution réelle ;
- Confirm Critical réel ;
- persistence saine ;
- delivery/cutover si le périmètre active ces chemins.

---

## 2. Risques du cadrage

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Confusion framing / open / delivery / cutover | niveaux A–D + anti-claims |
| Claim COMPLETE implicite | matrices `NOT DECIDED` + T6-C15 / OA-22 |
| Fermeture implicite de réserve | registre OPEN inchangé |
| Retrait prématuré MethodMode | stop conditions §3 |
| Sous-estimer persistence/IAM/RGPD | préconditions P18–P21 |
| Hardening M1 prématuré | D-T-A7-F12 · NOT JUSTIFIED NOW pour framing |

---

## 3. Stop conditions (obligatoires)

1. **Pas de delivery** sans validation Morris du framing (D-T-A7-F01…F03).
2. **Pas de modification** `method/**` ou OPS1 sans gate dédié.
3. **Pas de suppression MethodMode** sans preuve des remplacements (P03–P09).
4. **Pas de cutover** sans rollback éprouvé et GO cutover distinct.
5. **Pas d’exécution réelle** sans autorité (R-T-A3-1), atomicité (R-T-A3-2/R1), persistence, IAM et sécurité adaptées.
6. **Pas de migration Evidence** sans politique RGPD/rétention (U-M02).
7. **Pas de claim Option A COMPLETE** sans critères validés + preuves + GO Morris.
8. **Pas de claim production ready** sans E2E, RUN et observabilité.
9. **Pas de fermeture de réserve** par simple cadrage.
10. **Divergence de `main`** affectant Option A / T-A6 / T-A7 / réserves = **re-review obligatoire** avant tout acte suivant.
11. **Pas de push projet** de cette branche sous le gate courant.
12. **Pas de double write** ni présentation OPS1 comme v3.

---

## 4. Dette acceptable temporairement

| Item | Acceptable pendant framing | Acceptable jusqu’à delivery | Acceptable jusqu’à production |
|------|----------------------------|-----------------------------|-------------------------------|
| B5 / R1 OPEN | oui | non (sauf acceptation) | non |
| R-T-A3-1/2 OPEN | oui | non si Critical/persistence | non |
| R-T-A3-4 | oui | oui | oui (low) |
| C1–C4 NOT VALIDATED | oui | à arbitrer | à arbitrer |
| F-CI-01/04 | oui | oui | partiel |
| M1 loose | oui | oui | **non recommandé** |
| Absence API/UI | oui | non pour cutover opérable | non |
| Absence persistence | oui (mémoire) | non pour cutover durable | non |

---

## 5. Anti-claims

Pas RESERVE CLOSED · Pas HARD résolu · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas DECIDED.

---

## 6. Verdict

`RESERVATIONS AND STOP CONDITIONS FRAMED — HARD BLOCKERS CLASSIFIED FOR EXECUTION NOT FRAMING — NO RESERVE CLOSED`

```

### `05-morris-decision-pack.md` — blob `01a8482862467cbc0116e11dde1d8a946ace3a01`

```markdown
# 05 — Morris Decision Pack

| Champ | Valeur |
|-------|--------|
| **Document** | `05-morris-decision-pack.md` |
| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Décisions** | D-T-A7-F01…F14 — toutes **`NOT DECIDED`** |
| **T-A7** | **NOT OPEN** |
| **Autorité** | Morris uniquement — aucune décision consommée ici |

> Les recommandations Cursor/ChatGPT sont **explicites et non contraignantes**. Morris tranche.

---

## Registre

### D-T-A7-F01 — Validation du périmètre de framing T-A7

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Le pack `t-a7-legacy-cutover-framing` et son périmètre (niveaux A only) sont-ils validés ? |
| **Options** | (1) ACCEPT · (2) ACCEPT WITH CHANGES · (3) REJECT · (4) DEFER |
| **Recommandation Cursor/ChatGPT** | (1) ACCEPT — pack borné, cohérent AT-11/12 et D-T-A6-10 |
| **Impacts** | autorise la review ; n’ouvre pas T-A7 |
| **Dette** | faible |
| **Réversibilité** | haute |
| **Gate futur** | `GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` |

### D-T-A7-F02 — Framing vs delivery vs cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Les quatre niveaux A/B/C/D sont-ils la définition normative de T-A7 ? |
| **Options** | (1) ADOPT 4 niveaux · (2) ADOPT 3 niveaux (fusion B+C) · (3) REDEFINE |
| **Recommandation Cursor/ChatGPT** | (1) ADOPT 4 niveaux — réduit les confusions framing/open/delivery/cutover |
| **Impacts** | gates séparés obligatoires |
| **Dette** | cycles supplémentaires |
| **Réversibilité** | moyenne |
| **Gate futur** | même gate review ; puis gates delivery/cutover distincts |

### D-T-A7-F03 — Préconditions d’entrée en delivery

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles préconditions P0x sont obligatoires avant delivery T-A7 ? |
| **Options** | (1) Set minimal (P02, P03–P05, HARD reserves strategy, P17–P19 design) · (2) Set maximal (presque toutes) · (3) Custom |
| **Recommandation Cursor/ChatGPT** | (1) Set minimal documenté dans `02` §3 — éviter de bloquer delivery prep inutilement |
| **Impacts** | séquence post-framing |
| **Dette** | si trop minimal → reprise AT |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO PREPARE T-A7 DELIVERY` (NOT CONSUMED / NOT PROPOSED as open) |

### D-T-A7-F04 — Définition T-A6 COMPLETE

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | La matrice T6-C01…C15 est-elle adoptée ? T-A6 COMPLETE exige-t-il T6-C11 (réserves) et T6-C15 (GO explicite) ? |
| **Options** | (1) ADOPT as-is · (2) ADOPT with memory justification only (relax C11 for U-M02) · (3) REQUIRE persistence for T-A6 COMPLETE · (4) REJECT |
| **Recommandation Cursor/ChatGPT** | (2) — D1–D5 + docs/CI + GO Morris ; accepter U-M02 OPEN **documenté** pour COMPLETE mémoire ; exiger traitement/acceptation R-M01 et C1–C4 |
| **Impacts** | clôture T-A6 vs product |
| **Dette** | U-M02 reporté |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO DECLARE T-A6 COMPLETE` (ultérieur, distinct) |

### D-T-A7-F05 — Option A foundation complete

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Confirmer que « foundation complete » = FD/FA/UX/Modeled/AT VALIDATED (déjà vrai) ? |
| **Options** | (1) CONFIRM · (2) REDEFINE |
| **Recommandation Cursor/ChatGPT** | (1) CONFIRM — ne pas confondre avec product COMPLETE |
| **Impacts** | vocabulaire |
| **Dette** | nulle si confirmé |
| **Réversibilité** | haute |
| **Gate futur** | inclus dans review framing |

### D-T-A7-F06 — Option A product complete

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Que signifie Option A product complete (couche C) ? |
| **Options** | (1) A+B + T-A6 COMPLETE mémoire · (2) A+B+C avec API/UI · (3) A+B+C+F cutover inclus · (4) Custom |
| **Recommandation Cursor/ChatGPT** | (2) — produit opérable nécessite surfaces ; cutover (F) séparé |
| **Impacts** | roadmap UI/API |
| **Dette** | UI/API avant COMPLETE |
| **Réversibilité** | faible une fois communiqué |
| **Gate futur** | gate critères Option A |

### D-T-A7-F07 — Product complete vs production ready

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Production ready (E) est-il requis pour product complete (C) ? |
| **Options** | (1) SEPARATE — E non requis pour C · (2) MERGE — C implique E · (3) STAGED labels |
| **Recommandation Cursor/ChatGPT** | (1) SEPARATE — évite inflation de COMPLETE |
| **Impacts** | IAM/RGPD/RUN hors chemin critique produit étroit |
| **Dette** | risque de sous-qualifier « produit » |
| **Réversibilité** | moyenne |
| **Gate futur** | inclus review framing |

### D-T-A7-F08 — Réserves obligatoires avant delivery

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles réserves doivent être CLOSED ou ACCEPTED avant delivery T-A7 ? |
| **Options** | (1) R-T-A3-1/2 + B5/R1 strategy + R-M01 · (2) Toutes OPEN · (3) Aucune (delivery prep only) |
| **Recommandation Cursor/ChatGPT** | (3) pour **delivery preparation** ; (1) avant **delivery code cutover-bound** |
| **Impacts** | parallélisation possible |
| **Dette** | si (3) trop long → dette technique |
| **Réversibilité** | moyenne |
| **Gate futur** | gate reserve arbitration |

### D-T-A7-F09 — Réserves obligatoires avant cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelles réserves bloquent le cutover ? |
| **Options** | (1) HARD + persistence/IAM/RGPD + MethodMode proofs · (2) HARD only · (3) Custom |
| **Recommandation Cursor/ChatGPT** | (1) — cutover sans persistence/IAM est un faux cutover |
| **Impacts** | retarde cutover |
| **Dette** | faible vs risque blast radius |
| **Réversibilité** | faible après cutover |
| **Gate futur** | `GO AUTHORIZE T-A7 CUTOVER` (ultérieur) |

### D-T-A7-F10 — Ordre persistence / IAM / RGPD

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quel ordre cadrer/décider persistence, IAM, RGPD/Evidence ? |
| **Options** | (1) Persistence+atomicité → IAM → RGPD/U-M02 · (2) IAM d’abord · (3) Parallèle borné · (4) Différer après UI |
| **Recommandation Cursor/ChatGPT** | (1) — R1/R-T-A3-2 d’abord ; IAM pour authority réelle ; RGPD lié Evidence vendor |
| **Impacts** | séquence post-framing |
| **Dette** | cycles AT/sécurité |
| **Réversibilité** | moyenne |
| **Gate futur** | `GO FRAME OPTION A PERSISTENCE, IAM AND RGPD FOUNDATIONS` |

### D-T-A7-F11 — API/UI avant cutover

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Une API/UI Option A native est-elle requise avant cutover ? |
| **Options** | (1) OUI minimale · (2) NON si cutover technique headless · (3) OUI complète |
| **Recommandation Cursor/ChatGPT** | (1) — preuves MethodMode/badges/UX cutover sinon non démontrables |
| **Impacts** | delivery produit |
| **Dette** | si (2) : cutover invisible |
| **Réversibilité** | moyenne |
| **Gate futur** | gate product delivery |

### D-T-A7-F12 — Moment du hardening M1

| Champ | Contenu |
|-------|---------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quand durcir approvals/strict/conversation resolution/bypass ? |
| **Options** | (1) Maintenant · (2) Avant delivery T-A7 · (3) Avant cutover/production · (4) Jamais |
| **Recommandation Cursor/ChatGPT** | (3) — NOT JUSTIFIED NOW pour framing ; REQUIRED BEFORE PRODUCTION |
| **Impacts** | friction PR |
| **Dette** | loose prolongé |
| **Réversibilité** | haute |
| **Gate futur** | gate hardening M1 |

### D-T-A7-F13 — Legacy history read-only

| Champ | Contenu |
|-------|--------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quelle politique pour l’historique OPS1/v2.6 après cutover ? |
| **Options** | (1) Read-only ACL gated · (2) Archive offline only · (3) Purge après retention · (4) Keep writable legacy |
| **Recommandation Cursor/ChatGPT** | (1) — aligné AT-11 ; interdire (4) |
| **Impacts** | sécurité / RGPD |
| **Dette** | ACL à construire |
| **Réversibilité** | faible après purge |
| **Gate futur** | inclus architecture cutover |

### D-T-A7-F14 — Validation du prochain cycle

| Champ | Contenu |
|-------|--------|
| **Statut** | `NOT DECIDED` |
| **Question** | Quel est le prochain cycle après validation du framing ? |
| **Options** | (1) Review framing pack · (2) Arbitrage HARD/réserves · (3) Persistence/IAM/RGPD · (4) Delivery prep T-A7 immédiat |
| **Recommandation Cursor/ChatGPT** | (1) puis (2) — ne pas sauter à (4) |
| **Impacts** | trajectoire |
| **Dette** | nulle si suivi |
| **Réversibilité** | haute |
| **Gate futur** | `GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` |

---

## Séquence candidate après framing (non validée)

| # | Étape | Cycle SFIA | Profil | Dépendances | Fichiers probables | Gate | Stop | Preuve |
|---|-------|------------|--------|-------------|--------------------|------|------|--------|
| 1 | Validation Morris framing + critères | 1 / 15 | Critical | ce pack | pack T-A7 | `GO REVIEW T-A7 FRAMING…` | reject → stop | décisions F01–F07 |
| 2 | Arbitrage autorité / atomicité / réserves | 2 / 3 / 6 | Critical | F08 | docs décision · éventuellement T-A3/T-A1 | reserve arbitration | pas de runtime cutover | ACCEPTED/CLOSED plan |
| 3 | Architecture persistence / IAM / RGPD | 6 / 10 | Critical | F10 | AT docs · threat/privacy | persistence/IAM/RGPD framing | pas DB live | ADR candidats |
| 4 | Préparation delivery T-A7 | 1 / 6 | Critical | F03 | backlog · tests candidats | prepare delivery | pas code cutover | pack prep |
| 5 | Delivery incrémental sous hold | 4 / 9 | Critical | F03/F08 | `app/**` boundaries · flags | delivery GO | pas activation | PRs + CI |
| 6 | QA / sécurité / RUN | 9 / 10 / 12 | Critical | delivery | tests E2E · RUN pack | QA/RUN GO | pas cutover | preuves |
| 7 | Décision cutover | 1 / 15 | Critical | F09 | decision pack cutover | authorize cutover | rollback non prêt → stop | GO cutover |
| 8 | Cutover contrôlé | 7 / 12 | Critical | F09/F11/F13 | MethodMode/method/**/OPS1 | execute cutover | incident → hold | boundary proofs |
| 9 | Post-merge / post-cutover | 9 / 15 | Critical | cutover | review docs | post-cutover review | — | review COMPLETE |
| 10 | Capitalisation / cleanup | 15 | Standard | post | REX · branches | cleanup GO | — | cleanup evidence |

---

## Anti-claims

Aucune décision D-T-A7-F* n’est **DECIDED**. Aucune recommandation n’est un GO. Aucune ouverture T-A7. Aucune clôture Option A. Aucune réserve fermée.

---

## Verdict

`MORRIS DECISION PACK T-A7 FRAMING READY FOR REVIEW — ALL DECISIONS NOT DECIDED — NEXT GATE CANDIDATE NOT CONSUMED`

```

---

## 4. Diff complet du commit (`origin/main...HEAD`)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md
new file mode 100644
index 0000000..4d342a5
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md
@@ -0,0 +1,171 @@
+# 01 — Framing and Scope
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `01-framing-and-scope.md` |
+| **Pack** | `t-a7-legacy-cutover-framing` |
+| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **T-A7** | **NOT OPEN** |
+| **Delivery / cutover / real execution** | **NOT AUTHORIZED** |
+| **Décisions** | D-T-A7-F01 · D-T-A7-F02 — **NOT DECIDED** |
+
+---
+
+## 1. Truth et sources
+
+| Contrôle | Résultat |
+|----------|----------|
+| `origin/main` | `c472eb412f3ade3e94fee9201042794fee502d8f` |
+| Branche | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
+| Pack T-A7 préexistant sur main | **absent** |
+| Upstream | **aucun** |
+
+### Sources déterminantes (courantes)
+
+| Path | Blob | Rôle |
+|------|------|------|
+| `sfia-v3-technical-architecture/.../11-legacy-isolation-migration-and-cutover-architecture.md` | `fc2e410be49e0b736f2914fdbb1c0795ddf0c996` | Cutover / OPS1 / MethodMode |
+| `sfia-v3-technical-architecture/.../12-delivery-slices-dependencies-and-technical-gates.md` | `493634be2ebeabb42ee453765e7ba7f5d2c7e7f9` | Définition T-A7 |
+| `sfia-v3-technical-architecture/.../13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae57ddef0d5f7f7239a51545522edfb2a0` | AT-OA-12 ordre T-A0…T-A7 VALIDATED |
+| `t-a6-.../03-decisions.md` D-T-A6-10 | `5e8f2f1ac7e352f34963a80265a0d60afb34107e` | Frontière T-A6 / T-A7 APPROVED |
+| `23-next-option-a-step-after-t-a6.md` | `e87deff78f5662dccae84557b061ad3aec9ea461` | Trajectoire post-T-A6 |
+| `24-ci-and-merge-governance-preparation.md` | `27c7934799d19e5fc3401eb55e95c0d99b1e36e2` | F-A6 CLOSED · Option A NOT COMPLETE · T-A7 NON OUVERTE |
+| Assessment handoff | `f89afcecb793d0d4e77307b8ec6344a584389862` | Post-F-A6 trajectory |
+
+---
+
+## 2. Définition bornée de T-A7
+
+### Libellé candidat
+
+`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`
+
+### Frontière D-T-A6-10 (APPROVED — historique validé)
+
+| T-A6 | T-A7 |
+|------|------|
+| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, findings/dette de review, reco de gate | cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale |
+
+T-A6 **ne lance pas** T-A7. Aucune exécution réelle ouverte par T-A6.
+
+### Quatre niveaux (obligatoires)
+
+#### A. T-A7 framing — **ce cycle**
+
+- définition exacte ;
+- préconditions ;
+- critères de complétude candidats ;
+- décision pack Morris ;
+- **aucune** modification runtime, modeled, workflow, `method/**`, OPS1.
+
+#### B. T-A7 delivery preparation — **hors cycle**
+
+- backlog découpé ;
+- architecture détaillée ;
+- plan de migration ;
+- tests candidats ;
+- hold/rollback design ;
+- **aucun** cutover.
+
+#### C. T-A7 delivery — **hors cycle**
+
+- modifications code et frontières d’import ;
+- feature / hold flags ;
+- tests unitaires et d’intégration ;
+- migration progressive sous hold.
+
+#### D. T-A7 cutover — **hors cycle**
+
+- retrait ou désactivation effective ;
+- preuves runtime ;
+- rollback éprouvé ;
+- décision Morris **dédiée** et distincte.
+
+**Règle :** ces quatre niveaux ne sont **pas** équivalents. Framing ≠ open ≠ delivery ≠ cutover ≠ real execution.
+
+---
+
+## 3. Périmètre candidat du framing
+
+### Inclus (définition / critères seulement)
+
+| Élément legacy | Remplacement Option A cible |
+|----------------|-----------------------------|
+| `canonicalPaths` | DoctrinePackage registry |
+| `sourceLoader` | package loader |
+| `contextResolver` | CkcResolver + doctrine |
+| `sessionContext` dépendances MethodMode | corrélation Option A |
+| `MethodMode` | retiré de la **cible** Option A |
+| lectures `method/**` | absentes de la cible Option A |
+| badges v2.6 | retirés des surfaces Option A |
+| contrats OPS1 hors legacy | isolation ACL / frontière |
+| historique legacy | read-only seulement sous politique Morris explicite |
+| migration | anti-corruption adapter si nécessaire |
+| rollback | hold flag / stratégie de rollback |
+
+### Hors périmètre de ce cadrage
+
+- implémentation runtime ou modeled ;
+- choix technique définitif non déjà validé (DB, vendor blob, IAM provider) ;
+- suppression réelle de `MethodMode` / `method/**` / OPS1 ;
+- migration réelle ;
+- double write ;
+- compatibilité implicite ;
+- présentation OPS1 comme v3 ;
+- adoption globale hors Option A ;
+- fermeture de réserve ;
+- déclaration T-A6 COMPLETE / Option A COMPLETE / T-A7 OPEN ;
+- exécution réelle ;
+- hardening M1 ;
+- modification du ruleset.
+
+---
+
+## 4. Convention de path
+
+| Élément | Valeur |
+|---------|--------|
+| Path retenu | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
+| Justification | aligné `t-a0-…` … `t-a6-…` ; suffixe `framing` explicite tant que T-A7 n’est pas ouvert |
+| Collision | **aucune** (aucun `t-a7-*` sur `origin/main`) |
+
+---
+
+## 5. État capacitaire pertinent (faits Git)
+
+| Capacité | État sur `main` | Preuve |
+|----------|-----------------|--------|
+| Fondation FD/FA/UX/Modeled/AT | VALIDATED BY MORRIS | design README |
+| T-A0…T-A6 runtime mémoire | **intégré** PR #261–#267 | chronology doc 23 |
+| T-A6 COMPLETE | **NON** | T-A6 README |
+| Option A COMPLETE | **NON** | doc 24 D-M1-05 |
+| Persistence réelle | **absente** | doc 23 |
+| API/UI Option A native | **absente** | doc 23 |
+| Adapter réel / worker / queue | **absent** | T-A5 |
+| CI + M1 Required Gate | **actif** | ruleset `19798462` · F-A6 CLOSED |
+| Pack delivery `t-a7-*` | **absent** | inventaire main |
+
+---
+
+## 6. Challenge de cadrage
+
+| Question | Réponse cadrage |
+|----------|-----------------|
+| Framing utile maintenant ? | **Oui** — critères COMPLETE et préconditions cutover absents |
+| Framing = ouverture T-A7 ? | **Non** |
+| HARD R-T-A3 bloquent-ils le framing ? | **Non** — ils bloquent delivery/cutover/real execution |
+| Persistence/IAM/RGPD requis pour framing ? | **Non** — requis avant delivery/real execution/cutover selon matrice |
+| UI/API requise pour framing ? | **Non** — à arbitrer pour cutover (D-T-A7-F11) |
+
+---
+
+## 7. Anti-claims
+
+Pas T-A7 OPEN · Pas T-A7 COMPLETE · Pas READY FOR DELIVERY · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas RESERVE CLOSED · Pas Option A COMPLETE · Pas T-A6 COMPLETE · Pas DECIDED pour D-T-A7-F*.
+
+---
+
+## 8. Verdict documentaire
+
+`T-A7 FRAMING SCOPE DEFINED — LEVEL A ONLY — DELIVERY AND CUTOVER OUT OF SCOPE — MORRIS VALIDATION REQUIRED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md
new file mode 100644
index 0000000..eda7106
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md
@@ -0,0 +1,107 @@
+# 02 — T-A7 Cutover Preconditions
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `02-t-a7-cutover-preconditions.md` |
+| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **Matrice** | `RECOMMENDATION — NOT DECIDED` |
+| **T-A7** | **NOT OPEN** |
+| **Delivery / cutover** | **NOT AUTHORIZED** |
+
+> Toutes les préconditions ci-dessous sont **candidates**. Elles ne sont **pas** toutes obligatoires pour le framing read-only. Morris tranche via D-T-A7-F03 / F08 / F09 / F10 / F11.
+
+---
+
+## 1. Légende
+
+| Champ | Sens |
+|-------|------|
+| **Niveau requis** | Framing / Delivery prep / Delivery / Cutover / Real execution / Production |
+| **État actuel** | observation Git sur `origin/main` @ `c472eb4` |
+| **SATISFIED / PARTIAL / MISSING / N/A** | qualification de preuve actuelle |
+
+---
+
+## 2. Matrice des préconditions
+
+| ID | Composant legacy | Remplacement Option A | État actuel | Preuve Git | Gap | Risque | Dépendance | Réserve liée | Entrée delivery | Entrée cutover | Rollback | Décision Morris | Cycle recommandé |
+|----|------------------|----------------------|-------------|------------|-----|--------|------------|--------------|-----------------|----------------|----------|-----------------|------------------|
+| P01 | — | T-A0…T-A6 intégrés | **SATISFIED** | PR #261–#267 · doc 23 | aucun pour intégration | faible | — | — | OK | OK | n/a | D-T-A7-F03 | — |
+| P02 | — | Critères T-A6 COMPLETE définis | **PARTIAL** | matrices candidates ce pack | critères **non décidés** | faux claim COMPLETE | framing | C1–C4 · R-M01 | critères validés Morris | T-A6 COMPLETE déclaré | n/a | D-T-A7-F04 | review framing |
+| P03 | `canonicalPaths` | DoctrinePackage registry | **PARTIAL** | T-A0 runtime `app/lib/oa/doctrine/**` | pas d’adoption produit globale ; pas de preuve no-fallback | fallback silencieux | T-A0 | — | tests resolve/deny sans fallback | preuve import + runtime | feature flag | D-T-A7-F03 | delivery prep |
+| P04 | `sourceLoader` | package loader + digest | **PARTIAL** | T-A0 digest SHA-256 | pas de cutover loader produit | package stale | T-A0 | — | digest pin tests | loader unique cible | restore package pin | D-T-A7-F03 | delivery prep |
+| P05 | `contextResolver` | CkcResolver + doctrine | **PARTIAL** | T-A2 `memoryCkcResolver` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | T-A2 | — | boundary tests CKC | no method/** reads | hold flag | D-T-A7-F03 | delivery |
+| P06 | `sessionContext` / MethodMode deps | OA correlation | **MISSING** | anti-claims T-A* | pas de remplacement produit session | MethodMode residual | T-A0–T-A2 · UX | — | design session OA | preuve no MethodMode | hold | D-T-A7-F03 · F11 | delivery prep |
+| P07 | MethodMode | retiré de cible OA | **MISSING** | AT-11 table | MethodMode encore présent hors OA runtime mémoire | cutover prématuré | UX/API | — | inventaire dépendances | UI+API tests + import boundary | hold flag | D-T-A7-F03 · F11 | delivery |
+| P08 | lectures `method/**` | absentes cible OA | **MISSING** | AT-11 | pas de preuve import boundary Option A native | lecture legacy silencieuse | modules app | — | grep/import boundary CI | CI + runtime proof | hold | D-T-A7-F03 | delivery |
+| P09 | badges v2.6 | retirés surfaces OA | **MISSING** | AT-11 | UI Option A native absente | confusion utilisateur | UX | — | design UI OA | UI tests | hold | D-T-A7-F11 | delivery |
+| P10 | OPS1 contracts | ACL / isolation | **PARTIAL** | AT-11 · shared surfaces séparées | pas d’ACL cutover prouvée | double identité OPS1/v3 | CT/D1 parallel | — | frontière documentée + tests no cross-call | ACL runtime | hold | D-T-A7-F13 | delivery |
+| P11 | historique legacy | read-only policy | **MISSING** | AT-11 | politique non décidée | fuite/mutation legacy | D-T-A7-F13 | — | politique Morris | enforcement read-only | restore ACL | D-T-A7-F13 | framing→delivery |
+| P12 | — | Project/LPS porte état nécessaire | **PARTIAL** | T-A1 mémoire | B5 satellite ids ; pas persistence | état incomplet | T-A1 | **B5** | B5 traité ou accepté | persistence saine | snapshot restore | D-T-A7-F08 · F09 | reserve closure |
+| P13 | — | Cycle/Trajectory/CKC | **PARTIAL** | T-A2 | R1 atomicité ; Critical ack absent | inconsistance | T-A2 | **R1** · **R-T-A3-1** | R1 stratégie ; Critical path | preuve qualification | version traj | D-T-A7-F08 · F09 | authority |
+| P14 | — | autorité humaine exploitable | **PARTIAL** | T-A3 | Critical ack public absent ; authority mémoire | Critical fail-closed permanent | T-A3 | **R-T-A3-1** · **R-T-A3-3** | Critical ack API + IAM path | IAM + audit | supersede | D-T-A7-F08 · F10 | authority/IAM |
+| P15 | — | ExecutionContract gouverné | **PARTIAL** | T-A4 | R-T-A3-2 résiduelle | orphan Decision↔LPS | T-A4 | **R-T-A3-2** | atomicité décidée | preuve txn | cancel/supersede | D-T-A7-F08 · F09 | architecture |
+| P16 | — | Attempt/exécution bornée | **PARTIAL** | T-A5 Test/NoOp | pas d’adapter réel / worker | exécution réelle impossible | T-A5 | R-T-A3 HARD | adapter réel borné si cutover l’exige | timeout≠success live | cancel attempt | D-T-A7-F09 | real execution |
+| P17 | — | Evidence/Review/Maturity | **PARTIAL** | T-A6 D1–D5 VALIDATED | T-A6 COMPLETE NON ; R-M01 · U-M02 · C1–C4 | claim readiness faux | T-A6 | **R-M01** · **U-M02** · **C1–C4** | critères T-A6 COMPLETE | T-A6 COMPLETE déclaré | incomplete bundle | D-T-A7-F04 · F08 | T-A6 closure |
+| P18 | — | persistance cible décidée | **MISSING** | anti-claim DATABASE NOT SELECTED | DB non choisie | cutover sur mémoire | AT-OA | **R1** · **U-M02** | DB SELECTED + schéma | migrations + backup | restore DB | D-T-A7-F10 | persistence |
+| P19 | — | stratégie atomicité | **MISSING** | R1 · R-T-A3-2 OPEN | pas de txn/outbox | corruption d’état | T-A1–T-A4 | **R1** · **R-T-A3-2** | stratégie validée | preuve adversarial | compensate/outbox replay | D-T-A7-F08 · F09 | architecture |
+| P20 | — | IAM décidé | **MISSING** | U-AT01 · R-T-A3-3 | registry mémoire | spoofing authority | T-A3 | **R-T-A3-3** | IAM design | IAM runtime | revoke | D-T-A7-F10 | security |
+| P21 | — | RGPD / rétention Evidence | **MISSING** | U-M02 · D-T-A6-09 | vendor/rétention non choisis | non-conformité | T-A6 | **U-M02** | politique + vendor | purge/legal hold preuves | restore retention class | D-T-A7-F10 | privacy |
+| P22 | — | API/UI nécessaires cutover | **MISSING** | doc 23 · UX design only | pas de wiring `lib/oa` | cutover invisible / non opérable | UX | — | surfaces minimales définies | UI+API tests | hold UI flag | D-T-A7-F11 | product |
+| P23 | — | observabilité + rollback | **PARTIAL** | audit console/memory · AT-10 | pas RUN-ready | cutover non observable | AT-10 | — | design RUN + hold | metrics/traces + rollback test | hold flag | D-T-A7-F03 · F09 | RUN |
+| P24 | — | import boundaries prouvables | **MISSING** | AT-11 | pas de CI boundary cutover | régression method/** | DevOps | — | règles CI | CI required gate | revert commit | D-T-A7-F03 | delivery |
+| P25 | — | gouvernance M1 suffisante | **PARTIAL** | M1 COMPLETE · loose OPEN | approvals=0 · strict=false | merge cutover sous-gouverné | ruleset `19798462` | M1 D3 | hardening si cutover sur main | hardening appliqué | ruleset restore | D-T-A7-F12 | governance |
+
+---
+
+## 3. Classification par niveau
+
+### Obligatoires pour framing (niveau A) — recommandation
+
+| ID | Motif |
+|----|-------|
+| P01 | base intégrée déjà vraie |
+| P02 | sans critères T-A6, cutover flou |
+| définition niveaux A–D | anti-confusion framing/delivery |
+| inventaire P03–P25 | sans exécution |
+
+**Non obligatoires pour framing :** P07–P09, P16, P18–P22, P24–P25.
+
+### Candidats obligatoires avant delivery (niveau C) — `NOT DECIDED`
+
+P02 (critères validés) · P03–P05 (remplacements doctrine/CKC prouvables) · P12–P15 (réserves HARD ou acceptation formelle) · P17 · P18–P19 · P23 design · P24 design · D-T-A7-F08.
+
+### Candidats obligatoires avant cutover (niveau D) — `NOT DECIDED`
+
+Tous les delivery + P07–P11 · P16 si activation opérationnelle · P20–P22 · P23 preuves · P25 hardening selon D-T-A7-F12 · D-T-A7-F09.
+
+### Candidats obligatoires avant real execution — `NOT DECIDED`
+
+R-T-A3-1 · R-T-A3-2 · adapter réel · IAM · persistence · RGPD/U-M02 · atomicité.
+
+---
+
+## 4. Hold / rollback (conceptuel)
+
+| Mécanisme | Usage candidat |
+|-----------|----------------|
+| Feature / hold flag | empêcher activation cutover avant GO |
+| Import boundary CI | bloquer réintroduction `method/**` |
+| Package pin / digest | rollback doctrine |
+| Snapshot LPS / DB restore | rollback état |
+| Ruleset restore | rollback gouvernance M1 |
+| Supersede Decision / Cancel Contract / Attempt | rollback logique métier |
+
+**Aucun** de ces mécanismes n’est implémenté dans ce cycle.
+
+---
+
+## 5. Anti-claims
+
+Pas READY FOR DELIVERY · Pas READY FOR CUTOVER · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas MethodMode REMOVED · Pas V2.6 REMOVED · Pas OPS1 RETIRED · Pas préconditions SATISFIED globales · Pas DECIDED.
+
+---
+
+## 6. Verdict
+
+`T-A7 CUTOVER PRECONDITION MATRIX FRAMED — CANDIDATE ONLY — FRAMING DOES NOT REQUIRE FULL SATISFACTION — MORRIS DECISIONS REQUIRED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md
new file mode 100644
index 0000000..232d73a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md
@@ -0,0 +1,134 @@
+# 03 — T-A6 and Option A Completion Criteria
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `03-t-a6-and-option-a-completion-criteria.md` |
+| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **Matrices** | `RECOMMENDATION — NOT DECIDED` |
+| **T-A6 COMPLETE** | **NOT DECLARED** |
+| **Option A COMPLETE** | **NOT DECLARED** |
+
+> Aucune déclaration COMPLETE n’est autorisée par ce document. Les matrices sont des **propositions** pour arbitrage Morris (D-T-A7-F04…F07).
+
+---
+
+## 1. Ambiguïté de vocabulaire (rappel)
+
+| Terme | Sens |
+|-------|------|
+| Foundation complete (design) | FD · FA · UX · Modeled · AT VALIDATED — **déjà vrai** (design) ; ≠ product COMPLETE |
+| T-A6 D1–D5 VALIDATED | use cases techniques delivery — **≠** T-A6 COMPLETE |
+| T-A6 COMPLETE | clôture slice Evidence/Review/Claims/Maturity — **à décider** |
+| Option A product complete | capacité produit Option A sans nécessairement production — **à décider** |
+| Option A production ready | RUN/IAM/RGPD/E2E/ops — **distinct** |
+| M1 REX D1–D7 | décisions gouvernance CI — **≠** T-A6 D1–D5 |
+
+---
+
+## 2. Critères candidats T-A6 COMPLETE
+
+**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`
+
+| ID | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Blocker | Réserve | Owner | Gate |
+|----|--------------------|-----------------|-----------------|------|---------|---------|-------|------|
+| T6-C01 | D1 Evidence runtime fail-closed intégré | tests Evidence + module sur main | D1 VALIDATED · PR #267 | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C02 | D2 ReviewBundle lifecycle intégré | tests ReviewBundle | D2 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C03 | D3 ClaimEvaluation fail-closed | tests ClaimEvaluation | D3 VALIDATED | **SATISFIED** | non | R-M01 | Morris | D-T-A7-F04 |
+| T6-C04 | D4 MaturityAssessment sans auto-promotion | tests Maturity | D4 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C05 | D5 RecommendNextGate read-only, no T-A7 launch | tests + `T_A7_AUTO_LAUNCH_FORBIDDEN` | D5 VALIDATED | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C06 | Modeled/runtime alignment Evidence/RB/Claim/Maturity | schemas + runtime + modeled tests | matérialisé + governance tests CI | **SATISFIED** | non | R-M01 closure | Morris | D-T-A7-F04 |
+| T6-C07 | Non-régression T-A3–T-A5 | suites Vitest pass | documenté post-merge | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C08 | Erreurs fail-closed documentées | codes + tests adversariaux | présents | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C09 | Autorité humaine respectée (pas auto-ack Critical) | tests Critical fail-closed | présent | **SATISFIED** | non | R-T-A3-1 (hors T-A6 mémoire) | Morris | D-T-A7-F04 |
+| T6-C10 | Périmètre mémoire justifié **ou** persistence réelle | décision Morris explicite | fake-only justifié docs ; persistence absente | **PARTIAL** | si COMPLETE exige persistence | U-M02 · R1 | Morris | D-T-A7-F04 · F07 |
+| T6-C11 | Réserves T-A6 traitées ou acceptées formellement | registre réserves CLOSED ou ACCEPTED | R-M01 · U-M02 · C1–C4 OPEN / NOT VALIDATED | **MISSING** | **oui** candidate | R-M01 · U-M02 · C1–C4 | Morris | D-T-A7-F04 · F08 |
+| T6-C12 | Tests T-A6 observés sous CI Required Gate | CI success sur paths Studio | workflow + gate M1 actifs post-#268 | **SATISFIED** | non | F-CI-* residual | Morris | D-T-A7-F04 |
+| T6-C13 | Documentation delivery + post-merge présents | docs 01–22 + README | présents sur main | **SATISFIED** | non | — | Morris | D-T-A7-F04 |
+| T6-C14 | Post-merge review complète | doc 22 | COMPLETE (CI unavailable à l’époque ; gap gouvernance fermé via F-A6) | **SATISFIED** | non | F-A6 CLOSED | Morris | D-T-A7-F04 |
+| T6-C15 | Décision Morris explicite `T-A6 COMPLETE` | gate + verdict | **absente** | **MISSING** | **oui** | — | Morris | D-T-A7-F04 |
+
+### Synthèse T-A6
+
+- Techniquement : D1–D5 et CI/docs largement **SATISFIED**.
+- Gouvernance : T6-C11 + T6-C15 **MISSING** → **T-A6 COMPLETE NOT DECLARED**.
+- T6-C10 dépend de D-T-A7-F07 (product vs production) : mémoire peut rester acceptable pour un COMPLETE étroit.
+
+---
+
+## 3. Critères candidats Option A COMPLETE
+
+**Label obligatoire :** `RECOMMENDATION — NOT DECIDED`
+
+### 3.1 Couches
+
+| Couche | Libellé | Définition candidate | Nécessaire pour foundation? | Product complete? | Production ready? | T-A7 framing? | T-A7 delivery? | T-A7 cutover? |
+|--------|---------|----------------------|----------------------------|-------------------|-------------------|---------------|----------------|---------------|
+| **A** | Foundation complete | FD · FA · UX · Modeled · AT VALIDATED | **définition** | prérequis | prérequis | utile | prérequis | prérequis |
+| **B** | Integrated runtime complete | T-A0…T-A6 intégrés + tests mémoire + CI | non | prérequis candidat | prérequis | utile | prérequis | prérequis |
+| **C** | Product completion | chaîne fonctionnelle Option A opérable selon critères Morris (peut exclure prod) | non | **définition** | prérequis | non | probable | **oui** |
+| **D** | Real-execution readiness | Critical ack · atomicité · adapter réel · persistence | non | optionnel (D-T-A7-F07) | prérequis | non | selon périmètre | **oui** si activation |
+| **E** | Production readiness | IAM · RGPD · RUN · E2E · hardening · deps | non | **non implicite** | **définition** | non | non | recommandé |
+| **F** | Legacy cutover complete | MethodMode/method/** retirés · OPS1 isolé · preuves | non | optionnel (peut être hors product étroit) | souvent requis | non | — | **définition cutover** |
+
+**Règle soumise à Morris (D-T-A7-F07) :** `production ready` n’est **pas** une condition implicite d’une définition étroite de `product complete`.
+
+### 3.2 Matrice dimensionnelle Option A
+
+| ID | Dimension | Critère affirmatif | Preuve attendue | Preuve actuelle | État | Couches | Blocker product? | Blocker production? | Owner |
+|----|-----------|--------------------|-----------------|-----------------|------|---------|------------------|---------------------|-------|
+| OA-01 | FD/FA/UX/Modeled/AT | fondation design VALIDATED | packs design | VALIDATED | **SATISFIED** | A | non | non | Morris |
+| OA-02 | T-A0…T-A6 intégrés | merges #261–#267 | Git | OUI | **SATISFIED** | B | non | non | Morris |
+| OA-03 | T-A6 COMPLETE | critères T6 + GO Morris | matrices + décision | NON | **MISSING** | B/C | **oui** candidat | oui | Morris |
+| OA-04 | T-A7 | cutover complete **ou** hors product étroit | pack + preuves | NOT OPEN | **N/A ou MISSING** | C/F | selon F06/F07 | oui cutover | Morris |
+| OA-05 | Persistence | DB SELECTED + repos durables | ADR + migrations | absente | **MISSING** | C/D/E | selon F07 | **oui** | Morris |
+| OA-06 | Atomicité | R1 + R-T-A3-2 résolus ou acceptés | design + tests | OPEN HARD | **MISSING** | D/E | selon F07 | **oui** | Morris |
+| OA-07 | Autorité | Critical ack + supersession | API + tests | R-T-A3-1 OPEN | **MISSING** | D | **oui** real-exec | oui | Morris |
+| OA-08 | IAM | provider + mapping authority | design + runtime | NOT DECIDED | **MISSING** | D/E | selon F07 | **oui** | Morris |
+| OA-09 | Sécurité | fail-closed + deps + secrets | CI + audit | PARTIAL | **PARTIAL** | E | non immédiat | **oui** | Morris |
+| OA-10 | RGPD / Evidence retention | politique + vendor + purge | docs + preuves | U-M02 OPEN | **MISSING** | D/E | selon F07 | **oui** | Morris |
+| OA-11 | API/UI | surfaces Option A branchées `lib/oa` | code + tests | absentes | **MISSING** | C | **oui** candidat | oui | Morris |
+| OA-12 | Adapters réels | adapter non-Test/NoOp | code + tests | absents | **MISSING** | D | real-exec | oui | Morris |
+| OA-13 | Worker/queue/scheduler | exécution asynchrone contrôlée | code + RUN | absents | **MISSING** | D/E | real-exec | oui | Morris |
+| OA-14 | Tests E2E | parcours Option A | Playwright/CI | exclus CI | **MISSING** | E | non | **oui** | Morris |
+| OA-15 | CI | Required Gate path-aware | ruleset + runs | SATISFIED M1 | **SATISFIED** | B/E | non | partiel | Morris |
+| OA-16 | Observabilité | metrics/traces/audit | stack RUN | console/memory | **PARTIAL** | E | non | **oui** | Morris |
+| OA-17 | RUN | health/backup/restore/runbooks | pack RUN | conceptuel AT-10 | **MISSING** | E | non | **oui** | Morris |
+| OA-18 | Rollback | hold + restore éprouvés | preuves | non cutover | **MISSING** | F/E | cutover | oui | Morris |
+| OA-19 | Documentation | index + packs cohérents | docs | packs présents ; pas d’index delivery racine | **PARTIAL** | A–F | non | non | Morris |
+| OA-20 | Réserves | CLOSED ou ACCEPTED formellement | registre | OPEN | **MISSING** | C–F | **oui** | oui | Morris |
+| OA-21 | Dette C1–C4 / F-CI | traitée ou acceptée | décisions | NOT VALIDATED / OPEN | **MISSING** | C/E | partiel | partiel | Morris |
+| OA-22 | Décisions Morris | critères F04–F07 décidés + COMPLETE GO | gates | NOT DECIDED | **MISSING** | toutes | **oui** | oui | Morris |
+
+### 3.3 Définitions candidates à trancher
+
+| Option de définition | Inclut | Exclut typiquement | Dette |
+|----------------------|--------|--------------------|-------|
+| **Étroite — fondation+runtime intégré** | A+B + T-A6 COMPLETE mémoire justifié | persistence · IAM · UI · cutover | risque de sous-estimer produit |
+| **Produit opérable** | A+B+C (+ OA-11) | production E · cutover F optionnel | nécessite UI/API |
+| **Produit + cutover** | A+B+C+F | production E | blast radius élevé |
+| **Production ready** | A–E (+ F souvent) | — | plus long ; le plus sûr |
+
+**Recommandation Cursor/ChatGPT (non Morris) :** distinguer explicitement **product complete** (C) et **production ready** (E) ; ne pas exiger E pour C ; exiger F seulement si Option A est définie comme « v3 native sans MethodMode ».
+
+---
+
+## 4. Liens T-A7
+
+| Question | Réponse candidate |
+|----------|-------------------|
+| Option A doit-elle être COMPLETE avant framing T-A7 ? | **Non** |
+| Option A doit-elle être COMPLETE avant delivery T-A7 ? | **Probablement oui pour couches A–B et critères T-A6** — D-T-A7-F03/F08 |
+| Option A doit-elle être COMPLETE avant cutover ? | **Oui au sens product/cutover décidé** — D-T-A7-F06/F09 |
+| T-A7 framing peut-il coexister avec réserves OPEN ? | **Oui** |
+
+---
+
+## 5. Anti-claims
+
+Pas T-A6 COMPLETE · Pas Option A COMPLETE · Pas PRODUCTION READY · Pas READY FOR CUTOVER · Pas critères DECIDED · Pas RESERVE CLOSED.
+
+---
+
+## 6. Verdict
+
+`T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — RECOMMENDATION NOT DECIDED — NO COMPLETE DECLARATION`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md
new file mode 100644
index 0000000..da6d674
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md
@@ -0,0 +1,101 @@
+# 04 — Reservations, Risks and Stop Conditions
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `04-reservations-risks-and-stop-conditions.md` |
+| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **T-A7** | **NOT OPEN** |
+| **Réserves fermées dans ce cycle** | **aucune** |
+
+---
+
+## 1. Registre des réserves et findings
+
+| ID | Statut | Définition | Preuve | Bloque framing T-A7 ? | Bloque delivery T-A7 ? | Bloque cutover ? | Bloque real execution ? | Bloque production ? | Obligatoire Option A COMPLETE ? | Décision Morris | Cycle recommandé |
+|----|--------|------------|--------|----------------------|------------------------|------------------|-------------------------|---------------------|---------------------------------|-----------------|------------------|
+| **B5** | OPEN | LPS satellite ids non carry-forward | T-A2/T-A3 docs · doc 23 | **Non** | **Oui** candidat | **Oui** | Indirect | Indirect | **Oui** candidat | D-T-A7-F08 | reserve closure / T-A1 |
+| **R1** | OPEN | Atomicité Project↔Cycle absente | T-A2 docs | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** si persistence | D-T-A7-F08 · F10 | architecture persistence |
+| **R-T-A3-1** | OPEN **HARD** | Pas d’API publique Critical acknowledge | T-A3 · Confirm fail-closed | **Non** | **Oui** si Critical path requis | **Oui** si activation | **Oui** | **Oui** | **Oui** real-exec / product large | D-T-A7-F08 · F09 | authority |
+| **R-T-A3-2** | OPEN **HARD** | Atomicité Decision↔LPS/Epistemic résiduelle | T-A3/T-A4 Option B | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** persistence | D-T-A7-F08 · F09 | architecture |
+| **R-T-A3-3** | OPEN | Authority registry in-memory | T-A3 | **Non** | Partiel | **Oui** | Partiel | **Oui** (IAM) | **Oui** production | D-T-A7-F10 | IAM |
+| **R-T-A3-4** | OPEN | Enum mapping `AUTHORITY_SCOPE_MISMATCH` | T-A3 | **Non** | **Non** | **Non** | **Non** | Low | Non | dette ultérieure | hygiene |
+| **R-M01** | OPEN | ClaimEvaluator readiness — closure Morris | T-A6 | **Non** | **Oui** candidat T-A6 COMPLETE | Indirect | Indirect | **Oui** | **Oui** T-A6 COMPLETE | D-T-A7-F04 · F08 | modeled/delivery |
+| **U-M02** | OPEN | Evidence blob vendor / payloads / retention | T-A6 · D-T-A6-09 | **Non** | **Oui** si Evidence physique | **Oui** | **Oui** | **Oui** | **Oui** production / Evidence | D-T-A7-F10 | RGPD/persistence |
+| **C1** | RECOMMENDED — NOT VALIDATED | Evidence status jointure PASS | T-A6 20-pr-readiness | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 · F08 | T-A6 debt |
+| **C2** | RECOMMENDED — NOT VALIDATED | Self-review Critical | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
+| **C3** | RECOMMENDED — NOT VALIDATED | Bornes taille/nombre | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
+| **C4** | RECOMMENDED — NOT VALIDATED | LPS satellite → fusion B5 candidate | T-A6 | **Non** | Via B5 | Via B5 | Indirect | Indirect | Via B5 | D-T-A7-F08 | merge into B5 |
+| **F-CI-01** | OPEN | Node engines pin absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | Partiel | Non | tooling | config |
+| **F-CI-02** | OPEN | npm audit historique | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Oui** conditionnel | Non | security | deps |
+| **F-CI-03** | MITIGATED | Node local/CI | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
+| **F-CI-04** | OPEN Minor | actionlint absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | tooling | — |
+| **F-CI-05** | MITIGATED | node:sqlite/Node20 | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
+| **F-CI-06/06B** | MITIGATED non CLOSED | whitespace | docs 29/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | hygiene | — |
+| **F-A6-PM-G01** | **CLOSED** | merge T-A6 sans CI formelle | doc 24 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | supersédé |
+| **M1 loose** | NOT DECIDED | approvals=0 · strict=false · conversation resolution=false · bypass | doc 24/33 · D3 | **Non** | **Non** | **Recommandé avant** | **Non** | **Oui** | Non (distinct COMPLETE) | D-T-A7-F12 | governance |
+
+### Point critique R-T-A3-1 / R-T-A3-2
+
+Git **ne démontre pas** que R-T-A3-1/2 bloquent un cadrage read-only. Ils restent **HARD** pour :
+
+- exécution réelle ;
+- Confirm Critical réel ;
+- persistence saine ;
+- delivery/cutover si le périmètre active ces chemins.
+
+---
+
+## 2. Risques du cadrage
+
+| Risque | Mitigation documentaire |
+|--------|-------------------------|
+| Confusion framing / open / delivery / cutover | niveaux A–D + anti-claims |
+| Claim COMPLETE implicite | matrices `NOT DECIDED` + T6-C15 / OA-22 |
+| Fermeture implicite de réserve | registre OPEN inchangé |
+| Retrait prématuré MethodMode | stop conditions §3 |
+| Sous-estimer persistence/IAM/RGPD | préconditions P18–P21 |
+| Hardening M1 prématuré | D-T-A7-F12 · NOT JUSTIFIED NOW pour framing |
+
+---
+
+## 3. Stop conditions (obligatoires)
+
+1. **Pas de delivery** sans validation Morris du framing (D-T-A7-F01…F03).
+2. **Pas de modification** `method/**` ou OPS1 sans gate dédié.
+3. **Pas de suppression MethodMode** sans preuve des remplacements (P03–P09).
+4. **Pas de cutover** sans rollback éprouvé et GO cutover distinct.
+5. **Pas d’exécution réelle** sans autorité (R-T-A3-1), atomicité (R-T-A3-2/R1), persistence, IAM et sécurité adaptées.
+6. **Pas de migration Evidence** sans politique RGPD/rétention (U-M02).
+7. **Pas de claim Option A COMPLETE** sans critères validés + preuves + GO Morris.
+8. **Pas de claim production ready** sans E2E, RUN et observabilité.
+9. **Pas de fermeture de réserve** par simple cadrage.
+10. **Divergence de `main`** affectant Option A / T-A6 / T-A7 / réserves = **re-review obligatoire** avant tout acte suivant.
+11. **Pas de push projet** de cette branche sous le gate courant.
+12. **Pas de double write** ni présentation OPS1 comme v3.
+
+---
+
+## 4. Dette acceptable temporairement
+
+| Item | Acceptable pendant framing | Acceptable jusqu’à delivery | Acceptable jusqu’à production |
+|------|----------------------------|-----------------------------|-------------------------------|
+| B5 / R1 OPEN | oui | non (sauf acceptation) | non |
+| R-T-A3-1/2 OPEN | oui | non si Critical/persistence | non |
+| R-T-A3-4 | oui | oui | oui (low) |
+| C1–C4 NOT VALIDATED | oui | à arbitrer | à arbitrer |
+| F-CI-01/04 | oui | oui | partiel |
+| M1 loose | oui | oui | **non recommandé** |
+| Absence API/UI | oui | non pour cutover opérable | non |
+| Absence persistence | oui (mémoire) | non pour cutover durable | non |
+
+---
+
+## 5. Anti-claims
+
+Pas RESERVE CLOSED · Pas HARD résolu · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas DECIDED.
+
+---
+
+## 6. Verdict
+
+`RESERVATIONS AND STOP CONDITIONS FRAMED — HARD BLOCKERS CLASSIFIED FOR EXECUTION NOT FRAMING — NO RESERVE CLOSED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md
new file mode 100644
index 0000000..01a8482
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md
@@ -0,0 +1,226 @@
+# 05 — Morris Decision Pack
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `05-morris-decision-pack.md` |
+| **Statut** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **Décisions** | D-T-A7-F01…F14 — toutes **`NOT DECIDED`** |
+| **T-A7** | **NOT OPEN** |
+| **Autorité** | Morris uniquement — aucune décision consommée ici |
+
+> Les recommandations Cursor/ChatGPT sont **explicites et non contraignantes**. Morris tranche.
+
+---
+
+## Registre
+
+### D-T-A7-F01 — Validation du périmètre de framing T-A7
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Le pack `t-a7-legacy-cutover-framing` et son périmètre (niveaux A only) sont-ils validés ? |
+| **Options** | (1) ACCEPT · (2) ACCEPT WITH CHANGES · (3) REJECT · (4) DEFER |
+| **Recommandation Cursor/ChatGPT** | (1) ACCEPT — pack borné, cohérent AT-11/12 et D-T-A6-10 |
+| **Impacts** | autorise la review ; n’ouvre pas T-A7 |
+| **Dette** | faible |
+| **Réversibilité** | haute |
+| **Gate futur** | `GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` |
+
+### D-T-A7-F02 — Framing vs delivery vs cutover
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Les quatre niveaux A/B/C/D sont-ils la définition normative de T-A7 ? |
+| **Options** | (1) ADOPT 4 niveaux · (2) ADOPT 3 niveaux (fusion B+C) · (3) REDEFINE |
+| **Recommandation Cursor/ChatGPT** | (1) ADOPT 4 niveaux — réduit les confusions framing/open/delivery/cutover |
+| **Impacts** | gates séparés obligatoires |
+| **Dette** | cycles supplémentaires |
+| **Réversibilité** | moyenne |
+| **Gate futur** | même gate review ; puis gates delivery/cutover distincts |
+
+### D-T-A7-F03 — Préconditions d’entrée en delivery
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quelles préconditions P0x sont obligatoires avant delivery T-A7 ? |
+| **Options** | (1) Set minimal (P02, P03–P05, HARD reserves strategy, P17–P19 design) · (2) Set maximal (presque toutes) · (3) Custom |
+| **Recommandation Cursor/ChatGPT** | (1) Set minimal documenté dans `02` §3 — éviter de bloquer delivery prep inutilement |
+| **Impacts** | séquence post-framing |
+| **Dette** | si trop minimal → reprise AT |
+| **Réversibilité** | moyenne |
+| **Gate futur** | `GO PREPARE T-A7 DELIVERY` (NOT CONSUMED / NOT PROPOSED as open) |
+
+### D-T-A7-F04 — Définition T-A6 COMPLETE
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | La matrice T6-C01…C15 est-elle adoptée ? T-A6 COMPLETE exige-t-il T6-C11 (réserves) et T6-C15 (GO explicite) ? |
+| **Options** | (1) ADOPT as-is · (2) ADOPT with memory justification only (relax C11 for U-M02) · (3) REQUIRE persistence for T-A6 COMPLETE · (4) REJECT |
+| **Recommandation Cursor/ChatGPT** | (2) — D1–D5 + docs/CI + GO Morris ; accepter U-M02 OPEN **documenté** pour COMPLETE mémoire ; exiger traitement/acceptation R-M01 et C1–C4 |
+| **Impacts** | clôture T-A6 vs product |
+| **Dette** | U-M02 reporté |
+| **Réversibilité** | moyenne |
+| **Gate futur** | `GO DECLARE T-A6 COMPLETE` (ultérieur, distinct) |
+
+### D-T-A7-F05 — Option A foundation complete
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Confirmer que « foundation complete » = FD/FA/UX/Modeled/AT VALIDATED (déjà vrai) ? |
+| **Options** | (1) CONFIRM · (2) REDEFINE |
+| **Recommandation Cursor/ChatGPT** | (1) CONFIRM — ne pas confondre avec product COMPLETE |
+| **Impacts** | vocabulaire |
+| **Dette** | nulle si confirmé |
+| **Réversibilité** | haute |
+| **Gate futur** | inclus dans review framing |
+
+### D-T-A7-F06 — Option A product complete
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Que signifie Option A product complete (couche C) ? |
+| **Options** | (1) A+B + T-A6 COMPLETE mémoire · (2) A+B+C avec API/UI · (3) A+B+C+F cutover inclus · (4) Custom |
+| **Recommandation Cursor/ChatGPT** | (2) — produit opérable nécessite surfaces ; cutover (F) séparé |
+| **Impacts** | roadmap UI/API |
+| **Dette** | UI/API avant COMPLETE |
+| **Réversibilité** | faible une fois communiqué |
+| **Gate futur** | gate critères Option A |
+
+### D-T-A7-F07 — Product complete vs production ready
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Production ready (E) est-il requis pour product complete (C) ? |
+| **Options** | (1) SEPARATE — E non requis pour C · (2) MERGE — C implique E · (3) STAGED labels |
+| **Recommandation Cursor/ChatGPT** | (1) SEPARATE — évite inflation de COMPLETE |
+| **Impacts** | IAM/RGPD/RUN hors chemin critique produit étroit |
+| **Dette** | risque de sous-qualifier « produit » |
+| **Réversibilité** | moyenne |
+| **Gate futur** | inclus review framing |
+
+### D-T-A7-F08 — Réserves obligatoires avant delivery
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quelles réserves doivent être CLOSED ou ACCEPTED avant delivery T-A7 ? |
+| **Options** | (1) R-T-A3-1/2 + B5/R1 strategy + R-M01 · (2) Toutes OPEN · (3) Aucune (delivery prep only) |
+| **Recommandation Cursor/ChatGPT** | (3) pour **delivery preparation** ; (1) avant **delivery code cutover-bound** |
+| **Impacts** | parallélisation possible |
+| **Dette** | si (3) trop long → dette technique |
+| **Réversibilité** | moyenne |
+| **Gate futur** | gate reserve arbitration |
+
+### D-T-A7-F09 — Réserves obligatoires avant cutover
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quelles réserves bloquent le cutover ? |
+| **Options** | (1) HARD + persistence/IAM/RGPD + MethodMode proofs · (2) HARD only · (3) Custom |
+| **Recommandation Cursor/ChatGPT** | (1) — cutover sans persistence/IAM est un faux cutover |
+| **Impacts** | retarde cutover |
+| **Dette** | faible vs risque blast radius |
+| **Réversibilité** | faible après cutover |
+| **Gate futur** | `GO AUTHORIZE T-A7 CUTOVER` (ultérieur) |
+
+### D-T-A7-F10 — Ordre persistence / IAM / RGPD
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quel ordre cadrer/décider persistence, IAM, RGPD/Evidence ? |
+| **Options** | (1) Persistence+atomicité → IAM → RGPD/U-M02 · (2) IAM d’abord · (3) Parallèle borné · (4) Différer après UI |
+| **Recommandation Cursor/ChatGPT** | (1) — R1/R-T-A3-2 d’abord ; IAM pour authority réelle ; RGPD lié Evidence vendor |
+| **Impacts** | séquence post-framing |
+| **Dette** | cycles AT/sécurité |
+| **Réversibilité** | moyenne |
+| **Gate futur** | `GO FRAME OPTION A PERSISTENCE, IAM AND RGPD FOUNDATIONS` |
+
+### D-T-A7-F11 — API/UI avant cutover
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Une API/UI Option A native est-elle requise avant cutover ? |
+| **Options** | (1) OUI minimale · (2) NON si cutover technique headless · (3) OUI complète |
+| **Recommandation Cursor/ChatGPT** | (1) — preuves MethodMode/badges/UX cutover sinon non démontrables |
+| **Impacts** | delivery produit |
+| **Dette** | si (2) : cutover invisible |
+| **Réversibilité** | moyenne |
+| **Gate futur** | gate product delivery |
+
+### D-T-A7-F12 — Moment du hardening M1
+
+| Champ | Contenu |
+|-------|---------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quand durcir approvals/strict/conversation resolution/bypass ? |
+| **Options** | (1) Maintenant · (2) Avant delivery T-A7 · (3) Avant cutover/production · (4) Jamais |
+| **Recommandation Cursor/ChatGPT** | (3) — NOT JUSTIFIED NOW pour framing ; REQUIRED BEFORE PRODUCTION |
+| **Impacts** | friction PR |
+| **Dette** | loose prolongé |
+| **Réversibilité** | haute |
+| **Gate futur** | gate hardening M1 |
+
+### D-T-A7-F13 — Legacy history read-only
+
+| Champ | Contenu |
+|-------|--------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quelle politique pour l’historique OPS1/v2.6 après cutover ? |
+| **Options** | (1) Read-only ACL gated · (2) Archive offline only · (3) Purge après retention · (4) Keep writable legacy |
+| **Recommandation Cursor/ChatGPT** | (1) — aligné AT-11 ; interdire (4) |
+| **Impacts** | sécurité / RGPD |
+| **Dette** | ACL à construire |
+| **Réversibilité** | faible après purge |
+| **Gate futur** | inclus architecture cutover |
+
+### D-T-A7-F14 — Validation du prochain cycle
+
+| Champ | Contenu |
+|-------|--------|
+| **Statut** | `NOT DECIDED` |
+| **Question** | Quel est le prochain cycle après validation du framing ? |
+| **Options** | (1) Review framing pack · (2) Arbitrage HARD/réserves · (3) Persistence/IAM/RGPD · (4) Delivery prep T-A7 immédiat |
+| **Recommandation Cursor/ChatGPT** | (1) puis (2) — ne pas sauter à (4) |
+| **Impacts** | trajectoire |
+| **Dette** | nulle si suivi |
+| **Réversibilité** | haute |
+| **Gate futur** | `GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` |
+
+---
+
+## Séquence candidate après framing (non validée)
+
+| # | Étape | Cycle SFIA | Profil | Dépendances | Fichiers probables | Gate | Stop | Preuve |
+|---|-------|------------|--------|-------------|--------------------|------|------|--------|
+| 1 | Validation Morris framing + critères | 1 / 15 | Critical | ce pack | pack T-A7 | `GO REVIEW T-A7 FRAMING…` | reject → stop | décisions F01–F07 |
+| 2 | Arbitrage autorité / atomicité / réserves | 2 / 3 / 6 | Critical | F08 | docs décision · éventuellement T-A3/T-A1 | reserve arbitration | pas de runtime cutover | ACCEPTED/CLOSED plan |
+| 3 | Architecture persistence / IAM / RGPD | 6 / 10 | Critical | F10 | AT docs · threat/privacy | persistence/IAM/RGPD framing | pas DB live | ADR candidats |
+| 4 | Préparation delivery T-A7 | 1 / 6 | Critical | F03 | backlog · tests candidats | prepare delivery | pas code cutover | pack prep |
+| 5 | Delivery incrémental sous hold | 4 / 9 | Critical | F03/F08 | `app/**` boundaries · flags | delivery GO | pas activation | PRs + CI |
+| 6 | QA / sécurité / RUN | 9 / 10 / 12 | Critical | delivery | tests E2E · RUN pack | QA/RUN GO | pas cutover | preuves |
+| 7 | Décision cutover | 1 / 15 | Critical | F09 | decision pack cutover | authorize cutover | rollback non prêt → stop | GO cutover |
+| 8 | Cutover contrôlé | 7 / 12 | Critical | F09/F11/F13 | MethodMode/method/**/OPS1 | execute cutover | incident → hold | boundary proofs |
+| 9 | Post-merge / post-cutover | 9 / 15 | Critical | cutover | review docs | post-cutover review | — | review COMPLETE |
+| 10 | Capitalisation / cleanup | 15 | Standard | post | REX · branches | cleanup GO | — | cleanup evidence |
+
+---
+
+## Anti-claims
+
+Aucune décision D-T-A7-F* n’est **DECIDED**. Aucune recommandation n’est un GO. Aucune ouverture T-A7. Aucune clôture Option A. Aucune réserve fermée.
+
+---
+
+## Verdict
+
+`MORRIS DECISION PACK T-A7 FRAMING READY FOR REVIEW — ALL DECISIONS NOT DECIDED — NEXT GATE CANDIDATE NOT CONSUMED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md
new file mode 100644
index 0000000..efd3a4b
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md
@@ -0,0 +1,80 @@
+# T-A7 — Legacy Cutover Framing (Option A)
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-27 22:39:24 CEST (+0200) — Europe/Paris |
+| **Cycle** | 1 — Cadrage (+2 Conception fonctionnelle · 3 Architecture fonctionnelle · 6 Architecture technique · 9 QA · 10 Sécurité/RSSI · 12 RUN readiness · 15 Capitalisation) |
+| **Profil** | Critical |
+| **Typologie** | CADRAGE / T-A7 / CUTOVER / COMPLETION-CRITERIA / GOVERNANCE / DOCUMENTATION |
+| **Gate consommé** | `GO FRAME T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETE CRITERIA — SFIA STUDIO V3-NATIVE — NO DELIVERY OR REAL EXECUTION` |
+| **Repo** | `mcleland147/sfia-workspace` |
+| **Base SHA** | `c472eb412f3ade3e94fee9201042794fee502d8f` (`origin/main`) |
+| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions` |
+| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-framing` |
+| **Upstream** | **aucun** |
+| **Pack path** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/` |
+| **Statut pack** | **FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **T-A7** | **NOT OPEN** |
+| **T-A7 delivery** | **NOT AUTHORIZED** |
+| **Cutover** | **NOT AUTHORIZED** |
+| **T-A6 COMPLETE** | **NOT DECLARED** |
+| **Option A COMPLETE** | **NOT DECLARED** |
+| **Real execution** | **NOT AUTHORIZED** |
+| **Verdict** | `SFIA STUDIO T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETION CRITERIA FRAMED — DOCUMENTARY PACK CREATED LOCALLY — T-A7 FRAMING DEFINED — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — MORRIS DECISIONS REQUIRED — OPTION A NOT COMPLETE — T-A7 NOT OPEN` |
+
+---
+
+## Objectif
+
+Définir le cadrage documentaire candidat de T-A7 et les matrices affirmatives de complétude T-A6 / Option A, sans ouvrir le delivery, sans cutover et sans fermer Option A.
+
+## Définition T-A7 (candidate)
+
+`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`
+
+Source AT : `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` · D-T-A6-10 BOUNDARY APPROVED.
+
+## Niveaux T-A7
+
+| Niveau | Contenu | Autorisé dans ce cycle |
+|--------|---------|------------------------|
+| **A. Framing** | définition · préconditions · critères · décisions · aucune modification runtime | **OUI — ce pack** |
+| **B. Delivery preparation** | backlog · AT détaillée · plan migration · tests candidats · aucun cutover | NON |
+| **C. Delivery** | modifications code/frontières · hold flags · tests · migration progressive | NON |
+| **D. Cutover** | retrait/désactivation effective · preuves runtime · rollback · GO Morris dédié | NON |
+
+## Livrables
+
+1. [README.md](./README.md) — ce fichier
+2. [01-framing-and-scope.md](./01-framing-and-scope.md)
+3. [02-t-a7-cutover-preconditions.md](./02-t-a7-cutover-preconditions.md)
+4. [03-t-a6-and-option-a-completion-criteria.md](./03-t-a6-and-option-a-completion-criteria.md)
+5. [04-reservations-risks-and-stop-conditions.md](./04-reservations-risks-and-stop-conditions.md)
+6. [05-morris-decision-pack.md](./05-morris-decision-pack.md)
+
+## Décisions Morris attendues
+
+D-T-A7-F01…F14 — toutes **`NOT DECIDED`** — voir [05-morris-decision-pack.md](./05-morris-decision-pack.md).
+
+## Gate suivant candidat
+
+```
+GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA
+— SFIA STUDIO V3-NATIVE
+```
+
+**NOT CONSUMED.**
+
+## Anti-claims
+
+- pack créé ≠ framing validé
+- framing défini ≠ T-A7 OPEN
+- T-A7 OPEN ultérieurement ≠ delivery autorisé
+- delivery autorisé ≠ cutover autorisé
+- critères proposés ≠ critères décidés
+- critères techniquement satisfaits ≠ Option A COMPLETE
+- product complete ≠ production ready
+- intégration T-A0–T-A6 ≠ cutover readiness
+- commit local ≠ publication
+- assessment ≠ décision Morris
+- aucune réserve fermée · aucun runtime/modeled/workflow modifié · aucun push projet
```

---

## 5. Sources canoniques relues (autorité)

| Source | Blob cité pack / rôle | Autorité | Contradiction pack ? |
|--------|----------------------|----------|----------------------|
| AT-11 legacy/cutover | `fc2e410…` | AT VALIDATED | Non — définition MethodMode/OPS1 alignée |
| AT-12 delivery slices T-A7 | `493634b…` | AT VALIDATED | Non — libellé T-A7 conforme |
| AT-13 validation | `b93b7ca…` | AT VALIDATED | Non — ordre T-A0…T-A7 |
| D-T-A6-10 | `5e8f2f1…` | BOUNDARY APPROVED | Non — frontière respectée ; « activation opérationnelle globale » bornée par exclusions Option A |
| Doc 23 post-T-A6 | `e87deff…` | trajectoire | Non — gaps persistence/API/UI repris |
| Doc 24 F-A6/CI | `27c7934…` | F-A6 CLOSED | Non — Option A NOT COMPLETE · T-A7 NON OUVERTE |
| Assessment handoff | `f89afce…` | advisory | Non — framing utile maintenant |
| T-A6 D1–D5 | merges #261–#267 | VALIDATED | Non — ≠ COMPLETE |
| Réserves B5/R1/R-T-A3/R-M01/U-M02/C1–C4 | docs T-A* | OPEN / HARD | Non — framing non bloqué ; execution bloquée |
| MethodMode / method/** / OPS1 | AT-11 + runtime | présents hors cutover | Non — retrait cible seulement |

**Verdict source authority :** `PASS`

---

## 6. Review par fichier

### README.md — `PASS WITH RESERVATION`

- Anti-claims forts ; niveaux A–D ; NOT OPEN / NOT AUTHORIZED explicites.
- Réserve : « Gate suivant » encore `GO REVIEW…` (déjà consommé par ce cycle) — attendu pour pack figé ; à corriger en cycle correctif (pointer `GO DECIDE…` ou `GO CORRECT…`).
- Aucune autorisation implicite.

### 01-framing-and-scope.md — `PASS WITH RESERVATION`

- Définition T-A7 conforme AT-12 / D-T-A6-10.
- Scope + exclusions + anti-claims cohérents.
- Réserve Minor : niveaux A–D décrivent objectifs/interdits mais **sans** tables formelles entrée/sortie/gate/rollback/preuve par niveau (partiellement compensé par 02/04/05).
- HARD ≠ framing blocker : explicite — PASS.

### 02-t-a7-cutover-preconditions.md — `FAIL` (Major F-TA7-REV-M01)

- P01–P25 complets ; PARTIAL/MISSING justifiés ; persistence/IAM/RGPD hors framing obligatoire — bon.
- **FAIL local :** P01 colonnes `Entrée delivery=OK` / `Entrée cutover=OK` sans légende « nécessaire mais non suffisant » → lecture possible que l’intégration seule autorise l’entrée delivery/cutover, contredisant l’exigence « P01 ne suffit pas à autoriser T-A7 ».
- Confusion légère B vs C : §3 titre « avant delivery (niveau C) » saute le niveau B.

### 03-t-a6-and-option-a-completion-criteria.md — `PASS WITH RESERVATION`

- T6-C01…C15 et OA-01…OA-22 complets ; couches A–F ; `RECOMMENDATION — NOT DECIDED`.
- T6-C11/C15 MISSING → COMPLETE non déclaré — correct.
- Réserve : OA-04 état `N/A ou MISSING` et quatre définitions candidates → le terme nu « Option A COMPLETE » reste multi-valué jusqu’à F06/F07 (ambiguïté **exposée**, pas masquée) — acceptable pour framing si decision brief force F05–F07 avant tout claim.
- T6-C10 lié F07 (product vs production) : couplage un peu flou avec COMPLETE mémoire — Minor.

### 04-reservations-risks-and-stop-conditions.md — `FAIL` (Major F-TA7-REV-M02)

- Registre réserves excellent ; R-T-A3-1/2 **Non** framing blocker — conforme.
- Aucune réserve fermée.
- **FAIL local :** 12 stop conditions déclaratives (« Pas de… ») **sans** trigger / action immédiate / responsable / preuve / gate de reprise → non actionnables au sens RUN/QA exigé.

### 05-morris-decision-pack.md — `PASS WITH RESERVATION`

- F01–F14 présents, tous `NOT DECIDED` ; options + reco non contraignantes.
- Réserves : F01/F14 « Gate futur » = gate REVIEW déjà consommé ; F08 distingue bien prep vs delivery ; ordre F01→F14 globalement logique.
- 14 décisions trop larges pour un seul gate — pack le reconnaît en séquence, mais step 1 regroupe encore F01–F07.

**Verdict intégrité IDs :** P01–P25 · T6-C01–C15 · OA-01–OA-22 · D-T-A7-F01–F14 — `PASS` (aucun doublon/manquant).

---

## 7. Review définition T-A7 et niveaux A/B/C/D

| Contrôle | Verdict |
|----------|---------|
| Libellé conforme AT-11/12/13 | PASS |
| Cohérent D-T-A6-10 | PASS |
| Non élargi hors Option A | PASS (exclusions) |
| Non confondu avec exécution | PASS |
| Non présenté comme ouvert | PASS |
| Séparation A/B/C/D | PASS WITH RESERVATION |
| Autorisation cumulative implicite | **PASS** (anti-claims bloquent) |

Par niveau (synthèse review) :

| Niveau | Objectif | Permis | Interdit | Gate | Entrée | Sortie | Rollback | Preuve |
|--------|----------|--------|----------|------|--------|--------|----------|--------|
| A Framing | cadrer | docs | runtime/cutover | frame/review/decide | pack | Morris validate | n/a docs | ce pack |
| B Prep | préparer | backlog/AT/tests candidats | cutover/code retrait | prepare delivery | framing validé | prep pack | n/a | prep artifacts |
| C Delivery | coder sous hold | code/flags/tests | activation cutover | delivery GO | F03/F08 | PRs+CI | revert/hold | Git+CI |
| D Cutover | retirer legacy | retrait contrôlé | sans rollback/GO | authorize+execute | F09+preuves | boundary proofs | hold/restore | runtime proofs |

Gap pack : formalisation tabulaire incomplète dans 01 → Minor F-TA7-REV-m02.

---

## 8. Scope / exclusions / anti-claims

Couverture scope candidat (canonicalPaths, sourceLoader, contextResolver, sessionContext, MethodMode, method/**, badges, OPS1, history, adapter, hold/rollback) : **PASS**.

Exclusions (no impl, no real delete, no double write, no silent compat, no global adoption, no production ready) : **PASS**.

---

## 9. Préconditions P01–P25

| Contrôle | Verdict |
|----------|---------|
| Couverture 25 IDs | PASS |
| Affirmatifs + preuves + gaps | PASS |
| PARTIAL/MISSING justifiés | PASS |
| Persistence/IAM/RGPD non requis framing | PASS |
| Remplacements démontrables (P03–P09) | PASS (candidats) |
| Circularité | PASS (pas de cycle bloquant) |
| P01 seul ≠ autorisation T-A7 | **FAIL** — colonnes OK ambiguës (M01) |
| Ordre dépendance recommandé | P01→P02→P03–P05→P12–P17→P18–P21→P07–P11/P22–P25 |

Duplications : P13/P14 croisent R-T-A3-1 ; P15/P19 croisent R-T-A3-2 — acceptables (angles distincts).

Manques : précondition affirmative explicite « no double write » (présent en stop/exclusion seulement) — Observation.

---

## 10. Critères T6-C01…C15

| ID | État pack | Review |
|----|-----------|--------|
| T6-C01…C09 | SATISFIED | PASS — aligné D1–D5 |
| T6-C10 | PARTIAL | PASS WITH RESERVATION — mémoire vs persistence à trancher F04/F07 |
| T6-C11 | MISSING | PASS — blocker gouvernance candidat correct |
| T6-C12…C14 | SATISFIED | PASS |
| T6-C15 | MISSING | PASS — GO Morris obligatoire |

Questions (options, **non décidées**) :

1. **T-A6 COMPLETE en mémoire ?** Oui possible si F04 option (2) + U-M02 borné — reco review.
2. **Persistence critère T-A6 ?** Non par défaut — couche ultérieure / production — reco.
3. **Autorité humaine réelle pour T-A6 COMPLETE ?** Non pour slice mémoire fail-closed ; oui pour real-exec — reco.
4. **Réserves CLOSED vs ACCEPTED ?** ACCEPTED formel OK pour COMPLETE étroit ; R-M01 devrait être traité — reco F04.
5. **Intégration ≠ validation ≠ complétude ≠ production ?** Oui, pack distingue — PASS.

---

## 11. Critères OA-01…OA-22 + couches

| Couche | Définie | Relations | Verdict |
|--------|---------|-----------|---------|
| A Foundation | oui | déjà vrai design | PASS |
| B Integrated runtime | oui | T-A0…T-A6 | PASS |
| C Product | oui | ≠ E | PASS WITH RESERVATION (dépend F06) |
| D Real-execution | oui | HARD | PASS |
| E Production | oui | ≠ C | PASS |
| F Cutover | oui | optionnel pour C étroit | PASS |

Matrice revue (condensée) : OA-01/02/15 SATISFIED ; OA-03/05–14/16–18/20–22 MISSING/PARTIAL selon couche ; OA-04 multi-état.

**Risque Major évité de justesse :** l’ambiguïté COMPLETE est **déclarée** et routée vers F06/F07 — pas de claim unique masquant des états incompatibles. Si Morris utilise le terme nu sans qualificatif → stop condition 7.

---

## 12. Réserves / blockers

| ID | Framing blocker? | Review |
|----|------------------|--------|
| B5 | Non | PASS |
| R1 | Non | PASS |
| R-T-A3-1/2 | **Non** framing ; Oui exec/cutover | PASS — point critique confirmé |
| R-T-A3-3/4 | Non framing | PASS |
| R-M01 / U-M02 | Non framing | PASS |
| C1–C4 | Non framing | PASS |
| F-CI-* | Non framing | PASS |
| M1 loose | Non framing ; prod | PASS |
| Fermeture implicite | aucune | PASS |

---

## 13. Sécurité / RGPD / RUN

| Domaine | Avant framing | Avant delivery | Avant cutover | Avant production | Verdict |
|---------|---------------|----------------|---------------|------------------|---------|
| Sécurité OPS1/IAM/authority/rollback | doc only | design + boundaries | IAM+ACL+hold | hardening+audit | PASS WITH RESERVATION |
| RGPD Evidence/U-M02 | non bloquant | si Evidence physique | politique+vendor | purge/legal hold | PASS |
| RUN obs/health/runbooks | non | design | preuves rollback | E2E+RUN pack | PASS WITH RESERVATION |

Pas de threat model / RACI RGPD dédiés dans le pack — acceptable framing ; cycle 10 ultérieur.

---

## 14. Stop conditions

12 présentes. Structure opérationnelle **manquante** → **FAIL** (Major M02).

Correction attendue : pour chaque stop — trigger · action immédiate · responsable · preuve · gate de reprise.

---

## 15. Décisions F01…F14

| Groupe | Décisions | Timing |
|--------|-----------|--------|
| A — nécessaires framing | F01 · F02 · F05 · F06 · F07 (+ F04 si COMPLETE vocabulaire) | maintenant / post-correction |
| B — avant delivery prep | F03 · F08 · F14 | après framing validé |
| C — différables cutover/prod | F09 · F10 · F11 · F12 · F13 | cycles spécialisés |

**Challenge :** les 14 doivent-elles être consommées dans un seul gate ? **Non.**

Doublons : F01≈validation pack ; F14≈next cycle — partiellement chevauchants (Minor).

---

## 16. Decision brief (≤5 arbitrages immédiats) — NON DÉCISIONS

### A1 — Valider le framing et les 4 niveaux
- Couvre : F01 · F02
- Question : Pack niveau A + modèle A/B/C/D acceptés ?
- Options : ACCEPT / ACCEPT WITH CHANGES / REJECT
- Reco : ACCEPT WITH CHANGES après correction M01/M02
- Gate : post-correctif puis `GO DECIDE T-A7 FRAMING SCOPE AND OPTION A COMPLETION DEFINITIONS — … — NO DELIVERY OR CUTOVER`

### A2 — Vocabulaire foundation vs product vs production
- Couvre : F05 · F07
- Question : Séparer foundation (déjà vrai), product complete, production ready ?
- Options : SEPARATE / MERGE / STAGED
- Reco : SEPARATE

### A3 — Définition Option A product complete
- Couvre : F06 (et impact OA-04/OA-11)
- Question : A+B+T-A6 mémoire vs A+B+C avec API/UI vs +cutover F ?
- Options : (1)(2)(3)(4) du pack
- Reco : (2) produit opérable avec surfaces ; F hors product

### A4 — Définition T-A6 COMPLETE
- Couvre : F04
- Question : Adopter T6 avec mémoire justifiée + GO Morris ; U-M02 OPEN documenté ?
- Options : as-is / memory+relax U-M02 / require persistence / reject
- Reco : (2)

### A5 — Next cycle seulement (pas delivery)
- Couvre : F14 (borné) ; **différer** F03/F08–F13
- Question : Après framing, review→decide définitions, puis réserves/persistence — pas delivery prep immédiat ?
- Options : decide defs / reserve arb / persistence / delivery prep now
- Reco : decide defs puis reserve arb ; **pas** (4)

---

## 17. Findings

### Critical
*Aucun.*

### Major

#### F-TA7-REV-M01
- **Sévérité :** Major
- **Fichier/ligne :** `02-t-a7-cutover-preconditions.md` L29 (P01) + légende L15–22
- **Description :** P01 marque `Entrée delivery=OK` et `Entrée cutover=OK` sans qualifier « nécessaire ≠ suffisant », permettant une lecture d’autorisation par intégration seule.
- **Preuve :** matrice P01 ; anti-claim pack vs colonnes OK ; exigence review « P01 ne suffit pas ».
- **Impact :** risque d’interprétation cumulative A→D / entrée cutover prématurée.
- **Correction :** légende explicite + remplacer OK par `SATISFIED (necessary≠sufficient)` / `n/a alone` ; rappeler P01≠GO T-A7.
- **Blocker validation :** **oui**
- **Cycle correctif :** `GO CORRECT T-A7 FRAMING PACK AFTER REVIEW…`
- **Gate Morris :** non pour corriger ; oui après pour F01

#### F-TA7-REV-M02
- **Sévérité :** Major
- **Fichier/ligne :** `04-…md` §3 L61–74
- **Description :** 12 stop conditions déclaratives non actionnables (pas de trigger/action/owner/preuve/gate reprise).
- **Preuve :** liste « Pas de… » uniquement.
- **Impact :** stops non opérables en RUN/QA ; fausse assurance de contrôle.
- **Correction :** table opérationnelle 12×5 champs.
- **Blocker validation :** **oui**
- **Cycle correctif :** même gate CORRECT
- **Gate Morris :** non pour corriger

### Minor

#### F-TA7-REV-m01
Niveaux A–D sans tables entrée/sortie/gate/rollback/preuve dans `01`.

#### F-TA7-REV-m02
§3 `02` confond/saute delivery preparation (B) vs delivery (C).

#### F-TA7-REV-m03
F01/F14 gates futurs pointent encore `GO REVIEW…` déjà consommé ; README « Gate suivant » stale.

#### F-TA7-REV-m04
T6-C10 couplé F07 (product/production) alors que sujet = COMPLETE mémoire T-A6 — clarifier F04 seul.

#### F-TA7-REV-m05
OA-04 état `N/A ou MISSING` — imposer qualificatif de couche dans la cellule État.

#### F-TA7-REV-m06
F01 impacts « autorise la review » obsolète post-review ; chevauchement F01/F14.

### Observations

#### F-TA7-REV-o01
Pas de Pxx dédié « no double write » (couvert stops/exclusions).

#### F-TA7-REV-o02
Pas de threat model / RACI RGPD dans le framing — OK différé cycle 10.

#### F-TA7-REV-o03
M1 hardening correctement NOT JUSTIFIED NOW.

#### F-TA7-REV-o04
Pack documentaire strict — aucun runtime/method/OPS1 touché ; branche non poussée.

---

## 18. Matrice de review

| Axe | Verdict |
|-----|---------|
| truth Git | PASS |
| périmètre commit | PASS |
| source authority | PASS |
| README | PASS WITH RESERVATION |
| fichier 01 | PASS WITH RESERVATION |
| fichier 02 | FAIL |
| fichier 03 | PASS WITH RESERVATION |
| fichier 04 | FAIL |
| fichier 05 | PASS WITH RESERVATION |
| définition T-A7 | PASS |
| niveaux A/B/C/D | PASS WITH RESERVATION |
| scope | PASS |
| exclusions | PASS |
| P01–P25 | FAIL (M01) |
| T6-C01…C15 | PASS WITH RESERVATION |
| OA-01…OA-22 | PASS WITH RESERVATION |
| réserves | PASS |
| sécurité | PASS WITH RESERVATION |
| RGPD | PASS |
| RUN | PASS WITH RESERVATION |
| stop conditions | FAIL (M02) |
| D-T-A7-F01…F14 | PASS WITH RESERVATION |
| decision brief | PASS |
| anti-claims | PASS |
| liens | PASS |
| timestamps | PASS |
| absence modification/push | PASS |

---

## 19. Blockers de validation review

1. F-TA7-REV-M01 (P01 colonnes OK)
2. F-TA7-REV-M02 (stops non actionnables)

## 20. Réserves review (non fermeture projet)

- Toutes réserves projet restent OPEN / NOT VALIDATED / MITIGATED selon registre 04.
- Review n’accepte ni ne ferme aucune réserve.

## 21. Actions non exécutées (interdites)

- modification des six fichiers
- commit correctif projet
- amend `27dbf605…`
- push branche projet
- PR / merge
- ouverture T-A7 / delivery / cutover
- décisions D-T-A7-F*
- fermeture réserves
- claims COMPLETE

## 22. Statuts finaux

| Objet | Statut |
|-------|--------|
| T-A6 | NOT COMPLETE (matrices proposées) |
| Option A | NOT COMPLETE |
| T-A7 | NOT OPEN · framing pack NOT READY for Morris decide without correction |
| Branche projet | locale only · not pushed |
| Review pack | FULL écrit ici |
| Handoff | à publier |

## 23. Gate candidat

```
GO CORRECT T-A7 FRAMING PACK AFTER REVIEW — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER
```

**NOT CONSUMED.**

Après correction + re-review PASS, gate decide candidat :

```
GO DECIDE T-A7 FRAMING SCOPE AND OPTION A COMPLETION DEFINITIONS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER
```

**NOT CONSUMED.**
