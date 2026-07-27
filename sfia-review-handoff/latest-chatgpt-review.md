# SFIA Review Pack — T-A7 Framing and Option A Completion Criteria (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 22:45:16 CEST (+0200)
- cycle: 1 Cadrage (+2 Conception fonctionnelle · 3 Architecture fonctionnelle · 6 Architecture technique · 9 QA · 10 Sécurité/RSSI · 12 RUN · 15 Capitalisation)
- profil: Critical
- typologie: CADRAGE / T-A7 / CUTOVER / COMPLETION-CRITERIA / GOVERNANCE / DOCUMENTATION
- gate consommé: `GO FRAME T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETE CRITERIA — SFIA STUDIO V3-NATIVE — NO DELIVERY OR REAL EXECUTION`
- repo: `mcleland147/sfia-workspace`
- worktree source connu: `/Users/morris/Projects/sfia-workspace`
- worktree créé: `/Users/morris/Projects/sfia-workspace-t-a7-framing`
- branche locale: `framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions`
- upstream: **aucun**
- origin/main: `c472eb412f3ade3e94fee9201042794fee502d8f`
- HEAD framing: `27dbf60574b8ec82990600827934dc56e256b50f`
- parent: `c472eb412f3ade3e94fee9201042794fee502d8f`
- handoff initial: blob `f89afcecb793d0d4e77307b8ec6344a584389862`
- template: blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`
- statut pack: `FRAMING CANDIDATE — MORRIS VALIDATION REQUIRED`
- T-A7: **NOT OPEN**
- T-A7 delivery: **NOT AUTHORIZED**
- cutover: **NOT AUTHORIZED**
- T-A6 COMPLETE: **NOT DECLARED**
- Option A COMPLETE: **NOT DECLARED**
- real execution: **NOT AUTHORIZED**

## 1. Truth check (extrait)
```text
pwd=/Users/morris/Projects/sfia-workspace
toplevel=/Users/morris/Projects/sfia-workspace
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=delivery/sfia-studio-control-tower-fast-track
HEAD=c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
origin_main=c472eb412f3ade3e94fee9201042794fee502d8f
## delivery/sfia-studio-control-tower-fast-track...origin/delivery/sfia-studio-control-tower-fast-track
?? .tmp-sfia-review/
diff:
cached:
untracked_non_tmp:
active_ops:
(none if blank)
worktrees:
worktree /Users/morris/Projects/sfia-workspace
HEAD c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
```
Worktree framing aligné sur `origin/main` avant commit ; aucun pack `t-a7-*` préexistant.

## 2. Sources et blobs déterminants
```text
prompts/templates/sfia-cycle-execution-template.md|b9ce0a9fe57bb0f675afb8505ee0584180f830d7
projects/sfia-studio/sfia-v3-technical-architecture/v3-native-option-a/11-legacy-isolation-migration-and-cutover-architecture.md|fc2e410be49e0b736f2914fdbb1c0795ddf0c996
projects/sfia-studio/sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md|493634be2ebeabb42ee453765e7ba7f5d2c7e7f9
projects/sfia-studio/sfia-v3-technical-architecture/v3-native-option-a/13-technical-architecture-validation-and-decision-pack.md|b93b7cae57ddef0d5f7f7239a51545522edfb2a0
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/23-next-option-a-step-after-t-a6.md|e87deff78f5662dccae84557b061ad3aec9ea461
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md|27c7934799d19e5fc3401eb55e95c0d99b1e36e2
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md|1bc7b6544d27d687bf9e33757863f1397b1494b6
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md|6c87cf4016d6a33f096df921acf8bafd4d73af4e
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/README.md|08f33f517b599215e8a1d3f27bdd69c01fad3053
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/03-decisions.md|5e8f2f1ac7e352f34963a80265a0d60afb34107e
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/22-post-merge-review.md|8a76bc2126837e6a9d4136257a07396eb732a560
projects/sfia-studio/sfia-v3-design/v3-native-option-a/README.md|7bcfb5588979d08cd775a47d0b96aaf41d69d1dc
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md|d38896185e3c6d6e82a32a0bc2d6dc34598eef53
```
Assessment post-F-A6 handoff blob `f89afcecb793d0d4e77307b8ec6344a584389862` relu.

## 3. Path final du pack
`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/`

Convention: suffixe `framing` tant que T-A7 n’est pas ouvert ; cohérent avec `t-a0-…`…`t-a6-…` ; aucune collision.

## 4. Fichiers créés
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md` · blob `4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd` · 171 lignes
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` · blob `eda7106103490798a6b379811eefe90156c46172` · 107 lignes
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md` · blob `232d73a9b021734dc8ba0f3c7c69d036cfe579d6` · 134 lignes
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md` · blob `da6d67448841b267c849b72a3692ea10d3b4d98c` · 101 lignes
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md` · blob `01a8482862467cbc0116e11dde1d8a946ace3a01` · 226 lignes
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md` · blob `efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c` · 80 lignes

## 5. Contenu complet des fichiers créés

### 01-framing-and-scope.md

Blob: `4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd`

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

### 02-t-a7-cutover-preconditions.md

Blob: `eda7106103490798a6b379811eefe90156c46172`

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

### 03-t-a6-and-option-a-completion-criteria.md

Blob: `232d73a9b021734dc8ba0f3c7c69d036cfe579d6`

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

### 04-reservations-risks-and-stop-conditions.md

Blob: `da6d67448841b267c849b72a3692ea10d3b4d98c`

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

### 05-morris-decision-pack.md

Blob: `01a8482862467cbc0116e11dde1d8a946ace3a01`

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

### README.md

Blob: `efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c`

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

## 6. Définition T-A7
`Legacy cutover, MethodMode/method/** retirement and OPS1 isolation`

Sources: AT-12 L23 · AT-11 · D-T-A6-10 APPROVED.

## 7. Niveaux framing / delivery / cutover
- A Framing: ce pack uniquement
- B Delivery preparation: hors cycle
- C Delivery: hors cycle
- D Cutover: hors cycle

## 8. Matrice préconditions
Voir fichier `02` intégral ci-dessus (P01–P25). Framing n’exige pas satisfaction complète.

## 9. Critères T-A6 COMPLETE
Matrice T6-C01…C15 — `RECOMMENDATION — NOT DECIDED`. T-A6 **NOT DECLARED**.

## 10. Critères Option A COMPLETE
Couches A–F + OA-01…OA-22 — `RECOMMENDATION — NOT DECIDED`. Option A **NOT DECLARED**. Product complete ≠ production ready (D-T-A7-F07).

## 11. Réserves / blockers
R-T-A3-1/2 = HARD pour real execution / delivery-cutover, **pas** pour framing read-only. B5 · R1 · R-M01 · U-M02 · C1–C4 OPEN/NOT VALIDATED. F-A6 CLOSED. M1 loose NOT DECIDED (F12).

## 12. Stop conditions
12 stop conditions dans `04` — delivery/cutover/MethodMode/OPS1/real execution/COMPLETE/reserve closure interdits sans gates dédiés.

## 13. Decision pack
D-T-A7-F01…F14 toutes `NOT DECIDED`. Recommandations Cursor/ChatGPT non contraignantes.

## 14. Séquence candidate
1 review framing → 2 arbitrage réserves → 3 persistence/IAM/RGPD → 4 prep delivery → 5 delivery hold → 6 QA/RUN → 7 authorize cutover → 8 cutover → 9 post → 10 capitalisation.

## 15. Validations documentaires
- `git diff --cached --check`: PASS
- 6 fichiers A only
- aucun fichier existant modifié
- aucun runtime/modeled/workflow modifié
- aucun upstream
- aucune branche projet poussée
- NOT DECIDED présents pour D-T-A7-F*
- anti-claims présents

## 16. Commit local
```text
commit 27dbf60574b8ec82990600827934dc56e256b50f
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 22:44:36 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 22:44:36 2026 +0200

    docs(sfia-studio): frame T-A7 cutover and Option A completion criteria

    Co-authored-by: Cursor <cursoragent@cursor.com>
```

### name-status
```text
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md
```

### stat
```text
 .../01-framing-and-scope.md                        | 171 ++++++++++++++++
 .../02-t-a7-cutover-preconditions.md               | 107 ++++++++++
 .../03-t-a6-and-option-a-completion-criteria.md    | 134 ++++++++++++
 .../04-reservations-risks-and-stop-conditions.md   | 101 +++++++++
 .../05-morris-decision-pack.md                     | 226 +++++++++++++++++++++
 .../t-a7-legacy-cutover-framing/README.md          |  80 ++++++++
 6 files changed, 819 insertions(+)
```

### blobs
```text
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/01-framing-and-scope.md|4d342a5c5bb66cd8cbef80d4fd7437cf2ce3b9fd
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md|eda7106103490798a6b379811eefe90156c46172
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/03-t-a6-and-option-a-completion-criteria.md|232d73a9b021734dc8ba0f3c7c69d036cfe579d6
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md|da6d67448841b267c849b72a3692ea10d3b4d98c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/05-morris-decision-pack.md|01a8482862467cbc0116e11dde1d8a946ace3a01
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-legacy-cutover-framing/README.md|efd3a4bed4bbc164cb9a21f2fc10e79fbe8aff5c
```

### status final
```text
## framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions
```

### diff complet
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

## 17. Actions non exécutées
- push branche projet
- PR projet
- merge
- modification main
- delivery T-A7
- runtime / modeled / method/** / OPS1 / MethodMode
- DB / IAM / API/UI / adapter / worker
- ruleset / hardening M1
- clôture réserve
- déclaration T-A6/Option A COMPLETE
- déclaration T-A7 OPEN
- consommation décisions Morris
- Notion/CMP

## 18. Statuts
- T-A6 COMPLETE: **NOT DECLARED**
- Option A COMPLETE: **NOT DECLARED**
- T-A7: **NOT OPEN**

## 19. Gate candidat
`GO REVIEW T-A7 FRAMING PACK AND OPTION A COMPLETION CRITERIA — SFIA STUDIO V3-NATIVE` — **NOT CONSUMED**

## 20. Verdict
`SFIA STUDIO T-A7 CUTOVER PRECONDITIONS AND OPTION A COMPLETION CRITERIA FRAMED — DOCUMENTARY PACK CREATED LOCALLY — T-A7 FRAMING DEFINED — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 AND OPTION A COMPLETION MATRICES PROPOSED — MORRIS DECISIONS REQUIRED — OPTION A NOT COMPLETE — T-A7 NOT OPEN`

## Anti-claims
- pack créé ≠ framing validé
- framing défini ≠ T-A7 OPEN
- T-A7 OPEN ≠ delivery autorisé
- delivery ≠ cutover
- critères proposés ≠ critères décidés
- product complete ≠ production ready
- commit local ≠ publication
- assessment ≠ décision Morris
