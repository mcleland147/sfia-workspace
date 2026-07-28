# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 locales |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O2 CAMPAIGN — NOT AN AUTHORIZATION` |
| **T-A7** | `NOT OPEN` |

> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable au-delà du gate O2 courant, ni delivery, ni cutover.

---

## 1. Légende des statuts

| Statut | Sens |
|--------|------|
| `SATISFIED — EVIDENCED` | preuve Git / contrat / test vérifiable pour l’exigence **telle que formulée** |
| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
| `MISSING — EVIDENCED` | absence de preuve / capacité constatée |
| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
| `FAILED — BLOCKER CONFIRMED` | échec confirmé |
| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

---

## 2. Matrice P03–P11 (après campagne O2)

| ID | Exigence canonique | Preuves Git / tests O2 | Statut **avant** | Statut **après** | Écart restant | Risque | Action future | Gate | Stop |
|----|--------------------|------------------------|------------------|------------------|---------------|--------|---------------|------|------|
| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · probe consumers · digest | PARTIAL | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; method cores encore allowlistés | fallback silencieux | remplacement registry sous gate distinct | F03 | SC-05 · SC-02 |
| P04 | `sourceLoader` → package loader + digest | `sourceLoader` · canonicalEngine · asymmetry probe | PARTIAL | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible | F03 | SC-05 |
| P05 | `contextResolver` → CkcResolver + doctrine | CKC mémoire · OA sans import method | PARTIAL | `PARTIAL — EVIDENCED` | guidance-only ; lectures method hors OA via loader | doctrine v2.6 résiduelle | boundary CKC + tests runtime | F03 | SC-05 |
| P06 | session / MethodMode → OA correlation | MethodMode D1 actif · hold absent (probe) | MISSING | `MISSING — EVIDENCED` | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
| P07 | MethodMode retiré cible OA | METHOD_MODES actif · foundation tests | MISSING | `MISSING — EVIDENCED` | MethodMode présent | cutover prématuré | inventaire + hold futur | F03 · F11 | SC-04 |
| P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
| P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
| P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
| P11 | historique legacy RO | F13.4 décidé · absence runtime prouvée | MISSING | `MISSING — EVIDENCED` | politique non appliquée | mutation historique | vue RO sous gate F13 | F13 | SC-06 |

---

## 3. Synthèse après O2

### Satisfaits (remplacement OA)

Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement** Option A.

### Partiels renforcés

P03 · P04 · P05 · P10

### Manquants (capacité runtime)

P06 · P07 · P08 · P09 · P11

### Unknown résiduels

| Sujet | Statut |
|-------|--------|
| Cross-call dynamique live session | `PARTIAL` static / live `UNKNOWN — ENVIRONMENT LIMITATION` (worktree sans `.sfia-exec`) |
| Hits allowlist production | `NO LOCAL HITS — LIMITED EVIDENCE` ≠ production |
| Volumes production | `LOCAL … — PRODUCTION UNKNOWN` |
| Durée conservation F13 | `UNKNOWN` |
| IAM | `NOT SELECTED` |

---

## 4. Anti-claims

- tests verts ≠ delivery / cutover ;
- PARTIAL renforcé ≠ SATISFIED remplacement ;
- isolation static ≠ isolation runtime cutover ;
- volumes locaux ≠ volumes production.

---

## 5. Verdict section

`P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`
