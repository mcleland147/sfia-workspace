# 02 — T-A7 Cutover Preconditions

| Champ | Valeur |
|-------|--------|
| **Document** | `02-t-a7-cutover-preconditions.md` |
| **Statut** | **FRAMING VALIDATED (A1.1) — PRECONDITION MATRIX FOR B/C/D STILL CANDIDATE** |
| **Matrice B/C/D** | `RECOMMENDATION — NOT DECIDED` (F03 · F08 · F09) |
| **T-A7** | **NOT OPEN** |
| **Delivery / cutover** | **NOT AUTHORIZED** |

> Toutes les préconditions ci-dessous sont **candidates**. Elles ne sont **pas** toutes obligatoires pour le framing read-only. Morris tranche via D-T-A7-F03 / F08 / F09 / F10 / F11.

---

## 1. Légende

| Champ | Sens |
|-------|------|
| **Niveau requis** | Framing / Delivery preparation (B) / Delivery (C) / Cutover (D) / Real execution / Production |
| **État actuel** | observation Git sur `origin/main` @ `c472eb4` |
| **SATISFIED / PARTIAL / MISSING / N/A** | qualification de preuve actuelle pour la **précondition seule** |
| **Contribution entrée delivery prep / delivery / cutover** | contribution de **cette ligne seule** au jeu d’entrée du niveau — **jamais** une autorisation de niveau |

### Vocabulaire normatif des colonnes d’entrée

| Valeur | Sens |
|--------|------|
| `NECESSARY — NOT SUFFICIENT` | la condition est satisfaite **et** reste **nécessaire** pour le niveau visé, mais **insuffisante seule** |
| `NOT AUTHORIZED BY THIS CONDITION ALONE` | cette ligne **n’accorde aucune** autorisation de delivery preparation, delivery ou cutover |
| `MORRIS GATE REQUIRED` | un gate Morris dédié au niveau reste **obligatoire** en plus du jeu de préconditions |
| *(critère textuel)* | preuve ou critère d’entrée candidat pour cette ligne — toujours sous réserve du jeu complet + gate |

### Note normative (anti-autorisation)

La satisfaction d’une ligne ne constitue **jamais** une autorisation de niveau. Toute entrée en **delivery preparation** (B), **delivery** (C) ou **cutover** (D) exige :

1. la satisfaction du **jeu** de préconditions applicable au niveau ; **et**
2. un **gate Morris dédié** au niveau.

**P01 en particulier :** T-A0…T-A6 intégrés = précondition **nécessaire** ; cette intégration **n’autorise ni** delivery preparation, **ni** delivery, **ni** cutover.

---

## 2. Matrice des préconditions

| ID | Composant legacy | Remplacement Option A | État actuel | Preuve Git | Gap | Risque | Dépendance | Réserve liée | Contribution entrée delivery prep (B) | Contribution entrée delivery (C) | Contribution entrée cutover (D) | Rollback | Décision Morris | Cycle recommandé |
|----|------------------|----------------------|-------------|------------|-----|--------|------------|--------------|---------------------------------------|----------------------------------|----------------------------------|----------|-----------------|------------------|
| P01 | — | T-A0…T-A6 intégrés | **SATISFIED** | PR #261–#267 · doc 23 | aucun pour intégration | faible | — | — | `NECESSARY — NOT SUFFICIENT` · `NOT AUTHORIZED BY THIS CONDITION ALONE` · `MORRIS GATE REQUIRED` | `NECESSARY — NOT SUFFICIENT` · `NOT AUTHORIZED BY THIS CONDITION ALONE` · `MORRIS GATE REQUIRED` | `NECESSARY — NOT SUFFICIENT` · `NOT AUTHORIZED BY THIS CONDITION ALONE` · `MORRIS GATE REQUIRED` | n/a | D-T-A7-F03 | — |
| P02 | — | Critères T-A6 COMPLETE définis | **PARTIAL** | matrices candidates ce pack | critères **non décidés** | faux claim COMPLETE | framing | C1–C4 · R-M01 | critères cadrés (candidate) | critères validés Morris | T-A6 COMPLETE déclaré | n/a | D-T-A7-F04 | review framing |
| P03 | `canonicalPaths` | DoctrinePackage registry | **PARTIAL** | T-A0 runtime `app/lib/oa/doctrine/**` | pas d’adoption produit globale ; pas de preuve no-fallback | fallback silencieux | T-A0 | — | inventaire + plan tests | tests resolve/deny sans fallback | preuve import + runtime | feature flag | D-T-A7-F03 | delivery prep |
| P04 | `sourceLoader` | package loader + digest | **PARTIAL** | T-A0 digest SHA-256 | pas de cutover loader produit | package stale | T-A0 | — | inventaire + plan tests | digest pin tests | loader unique cible | restore package pin | D-T-A7-F03 | delivery prep |
| P05 | `contextResolver` | CkcResolver + doctrine | **PARTIAL** | T-A2 `memoryCkcResolver` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | T-A2 | — | inventaire boundaries | boundary tests CKC | no method/** reads | hold flag | D-T-A7-F03 | delivery |
| P06 | `sessionContext` / MethodMode deps | OA correlation | **MISSING** | anti-claims T-A* | pas de remplacement produit session | MethodMode residual | T-A0–T-A2 · UX | — | design session OA | design session OA | preuve no MethodMode | hold | D-T-A7-F03 · F11 | delivery prep |
| P07 | MethodMode | retiré de cible OA | **MISSING** | AT-11 table | MethodMode encore présent hors OA runtime mémoire | cutover prématuré | UX/API | — | inventaire dépendances | inventaire + plan retrait | UI+API tests + import boundary | hold flag | D-T-A7-F03 · F11 | delivery |
| P08 | lectures `method/**` | absentes cible OA | **MISSING** | AT-11 | pas de preuve import boundary Option A native | lecture legacy silencieuse | modules app | — | règles CI candidates | grep/import boundary CI | CI + runtime proof | hold | D-T-A7-F03 | delivery |
| P09 | badges v2.6 | retirés surfaces OA | **MISSING** | AT-11 | UI Option A native absente | confusion utilisateur | UX | — | design UI OA | design UI OA | UI tests | hold | D-T-A7-F11 | delivery |
| P10 | OPS1 contracts | ACL / isolation | **PARTIAL** | AT-11 · shared surfaces séparées | pas d’ACL cutover prouvée | double identité OPS1/v3 | CT/D1 parallel | — | frontière documentée | frontière + tests no cross-call | ACL runtime | hold | D-T-A7-F13 | delivery |
| P11 | historique legacy | read-only policy | **MISSING** | AT-11 | politique non décidée | fuite/mutation legacy | D-T-A7-F13 | — | politique candidate | politique Morris | enforcement read-only | restore ACL | D-T-A7-F13 | framing→delivery prep |
| P12 | — | Project/LPS porte état nécessaire | **PARTIAL** | T-A1 mémoire | B5 satellite ids ; pas persistence | état incomplet | T-A1 | **B5** | stratégie B5 documentée | B5 traité ou accepté | persistence saine | snapshot restore | D-T-A7-F08 · F09 | reserve closure |
| P13 | — | Cycle/Trajectory/CKC | **PARTIAL** | T-A2 | R1 atomicité ; Critical ack absent | inconsistance | T-A2 | **R1** · **R-T-A3-1** | stratégie R1 / Critical path | R1 stratégie ; Critical path | preuve qualification | version traj | D-T-A7-F08 · F09 | authority |
| P14 | — | autorité humaine exploitable | **PARTIAL** | T-A3 | Critical ack public absent ; authority mémoire | Critical fail-closed permanent | T-A3 | **R-T-A3-1** · **R-T-A3-3** | design Critical ack | Critical ack API + IAM path | IAM + audit | supersede | D-T-A7-F08 · F10 | authority/IAM |
| P15 | — | ExecutionContract gouverné | **PARTIAL** | T-A4 | R-T-A3-2 résiduelle | orphan Decision↔LPS | T-A4 | **R-T-A3-2** | stratégie atomicité | atomicité décidée | preuve txn | cancel/supersede | D-T-A7-F08 · F09 | architecture |
| P16 | — | Attempt/exécution bornée | **PARTIAL** | T-A5 Test/NoOp | pas d’adapter réel / worker | exécution réelle impossible | T-A5 | R-T-A3 HARD | hors prep si non requis | adapter réel borné si cutover l’exige | timeout≠success live | cancel attempt | D-T-A7-F09 | real execution |
| P17 | — | Evidence/Review/Maturity | **PARTIAL** | T-A6 D1–D5 VALIDATED | T-A6 COMPLETE NON ; R-M01 · U-M02 · C1–C4 | claim readiness faux | T-A6 | **R-M01** · **U-M02** · **C1–C4** | critères T-A6 COMPLETE cadrés | critères T-A6 COMPLETE | T-A6 COMPLETE déclaré | incomplete bundle | D-T-A7-F04 · F08 | T-A6 closure |
| P18 | — | persistance cible décidée | **MISSING** | anti-claim DATABASE NOT SELECTED | DB non choisie | cutover sur mémoire | AT-OA | **R1** · **U-M02** | design persistence (hors SELECTED) | DB SELECTED + schéma | migrations + backup | restore DB | D-T-A7-F10 | persistence |
| P19 | — | stratégie atomicité | **MISSING** | R1 · R-T-A3-2 OPEN | pas de txn/outbox | corruption d’état | T-A1–T-A4 | **R1** · **R-T-A3-2** | stratégie documentée | stratégie validée | preuve adversarial | compensate/outbox replay | D-T-A7-F08 · F09 | architecture |
| P20 | — | IAM décidé | **MISSING** | U-AT01 · R-T-A3-3 | registry mémoire | spoofing authority | T-A3 | **R-T-A3-3** | design IAM | IAM design | IAM runtime | revoke | D-T-A7-F10 | security |
| P21 | — | RGPD / rétention Evidence | **MISSING** | U-M02 · D-T-A6-09 | vendor/rétention non choisis | non-conformité | T-A6 | **U-M02** | cadrage U-M02 | politique + vendor | purge/legal hold preuves | restore retention class | D-T-A7-F10 | privacy |
| P22 | — | API/UI nécessaires cutover | **MISSING** | doc 23 · UX design only | pas de wiring `lib/oa` | cutover invisible / non opérable | UX | — | surfaces minimales définies | surfaces minimales définies | UI+API tests | hold UI flag | D-T-A7-F11 | product |
| P23 | — | observabilité + rollback | **PARTIAL** | audit console/memory · AT-10 | pas RUN-ready | cutover non observable | AT-10 | — | design RUN + hold | design RUN + hold | metrics/traces + rollback test | hold flag | D-T-A7-F03 · F09 | RUN |
| P24 | — | import boundaries prouvables | **MISSING** | AT-11 | pas de CI boundary cutover | régression method/** | DevOps | — | règles CI candidates | règles CI | CI required gate | revert commit | D-T-A7-F03 | delivery |
| P25 | — | gouvernance M1 suffisante | **PARTIAL** | M1 COMPLETE · loose OPEN | approvals=0 · strict=false | merge cutover sous-gouverné | ruleset `19798462` | M1 D3 | hors framing | hardening planifié si cutover sur main | hardening appliqué | ruleset restore | D-T-A7-F12 | governance |

---

## 3. Classification par niveau

### Obligatoires pour framing (niveau A) — recommandation

| ID | Motif |
|----|-------|
| P01 | base intégrée déjà vraie — **nécessaire, non suffisante** pour tout niveau ultérieur |
| P02 | sans critères T-A6, cutover flou |
| définition niveaux A–D | anti-confusion framing / delivery preparation / delivery / cutover |
| inventaire P03–P25 | sans exécution |

**Non obligatoires pour framing :** P07–P09, P16, P18–P22, P24–P25.

### Candidats obligatoires avant delivery preparation (niveau B) — `NOT DECIDED`

P02 (critères au moins cadrés) · inventaire remplacements P03–P11 · stratégies documentées P12–P15 / HARD (pas forcément CLOSED) · P17 cadrage · P18–P19 design · P23–P24 design · D-T-A7-F03.

**Niveau B ≠ niveau C.** La préparation n’autorise pas le delivery code.

### Candidats obligatoires avant delivery (niveau C) — `NOT DECIDED`

P02 (critères validés) · P03–P05 (remplacements doctrine/CKC prouvables) · P12–P15 (réserves HARD ou acceptation formelle) · P17 · P18–P19 · P23 design · P24 design · D-T-A7-F08.

### Candidats obligatoires avant cutover (niveau D) — `NOT DECIDED`

Tous les delivery (C) + P07–P11 · P16 si activation opérationnelle · P20–P22 · P23 preuves · P25 hardening selon D-T-A7-F12 · D-T-A7-F09.

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

Pas READY FOR DELIVERY · Pas READY FOR CUTOVER · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas MethodMode REMOVED · Pas V2.6 REMOVED · Pas OPS1 RETIRED · Pas préconditions SATISFIED globales · Pas DECIDED · Pas autorisation par P01 seul · Pas delivery preparation = delivery.

---

## 6. Verdict

`T-A7 CUTOVER PRECONDITION MATRIX FRAMED — CANDIDATE ONLY — P01 NECESSARY NOT SUFFICIENT — FRAMING DOES NOT REQUIRE FULL SATISFACTION — MORRIS DECISIONS REQUIRED`
