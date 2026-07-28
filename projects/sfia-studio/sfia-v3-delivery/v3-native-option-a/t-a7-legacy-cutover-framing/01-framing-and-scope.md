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

| Niveau | Objectif | Entrée | Sortie | Gate | Preuve | Rollback / retour | Interdits |
|--------|----------|--------|--------|------|--------|-------------------|-----------|
| **A. Framing** | définir T-A7, préconditions, critères, décisions | pack créé · base `origin/main` stable | Morris valide ou demande correction | frame / review / re-review / decide framing | docs pack · anti-claims | révision documentaire | runtime · modeled · workflow · `method/**` · OPS1 · delivery · cutover |
| **B. Delivery preparation** | backlog, AT détaillée, plan migration, tests candidats, hold/rollback **design** | framing validé + jeu préconditions B | pack prep prêt | `GO PREPARE T-A7 DELIVERY` (futur, NOT OPEN) | backlog · AT · plans tests | abandon prep / re-cadrage | cutover · retrait MethodMode · exécution réelle |
| **C. Delivery** | code / frontières / flags / tests / migration progressive **sous hold** | prep validée + jeu préconditions C + F03/F08 | PRs + CI sous hold | delivery GO dédié (futur) | Git · CI · hold flags | revert commit · hold | activation cutover · claim COMPLETE non prouvé |
| **D. Cutover** | retrait/désactivation effective legacy + preuves | delivery validé + jeu D + rollback prouvé + F09 | boundary proofs runtime | authorize + execute cutover (futurs) | preuves P03–P11 · rollback test · ACL | hold flag · restore | cutover sans rollback · élargissement hors Option A |

**Règle :** ces quatre niveaux ne sont **pas** équivalents et **ne s’autorisent pas cumulativement**. Framing ≠ open ≠ delivery preparation ≠ delivery ≠ cutover ≠ real execution. La satisfaction d’un niveau inférieur n’autorise pas le suivant sans gate Morris dédié.

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
