# 04 — OPS1 boundary assessment

| Champ | Valeur |
|-------|--------|
| **Objet** | identifier OPS1 · frontières · **aucune modif ACL/code** |
| **F13** | `NOT DECIDED` |
| **T-A7** | `NOT OPEN` |

## 1. Qu’est-ce qu’OPS1 dans ce repository ?

**OPS1 = Operational Vertical Slice 1** — POC Studio de conversation GPT réelle + action Markdown gouvernée (allowlist), distinct du runtime Option A (`lib/oa`) et de D1 Project Foundation (`lib/d1`).

| Couche | Emplacement | Statut |
|--------|-------------|--------|
| Cadrage / design / UX / tech / backlog / devops docs | `projects/sfia-studio/41`–`65` (+ companions ops1-named) | `DOCUMENTATION ONLY` (canon sur main) + décisions historiques |
| Runtime applicatif | `app/lib/ops1/**` (~48 fichiers) · `app/features/ops1/**` · route `app/app/ops1/**` | `ACTIVE — EVIDENCED` |
| Tests | `app/__tests__/ops1/**` · e2e `ops1-i*.spec.ts` | `TEST ONLY` / `ACTIVE — EVIDENCED` |
| État local d’exécution | `projects/sfia-studio/.sfia-exec/**` (**gitignored**) | `ACTIVE — EVIDENCED` (runtime local ; hors Git) |
| Import boundaries | `import-boundaries.test.ts` : D1↛OPS1 · platform↛OPS1/D1 | `ACTIVE — EVIDENCED` |

## 2. Frontières

| Frontière | Contenu | Preuve |
|-----------|---------|--------|
| Fonctionnelle | Chat libre + action Markdown facultative ; pas MVP global | docs 41–47 |
| Technique | Session, conversation providers, actionGate, allowlist, control tower tools, exécution I5/I6 | `lib/ops1/**` |
| Sécurité | Allowlist chemins + gates Morris (L0) — **pas** un IAM/RBAC multi-user | allowlist + import boundaries + P10 |
| Gouvernance cutover | OPS1 **ne doit pas** être présenté comme v3 Option A ; isolation avant cutover | SC-03 · SC-12 · F13 / P10–P11 |
| Extension in-place | Control Tower construit **sur** `lib/ops1` (pas un fork) | docs `66`–`74` · tools CT |
| Surface partagée | D1 intake réutilise provider conversation OPS1 ; état co-hébergé `.sfia-exec/…/state/` (fichiers DB séparés) | `d1` paths / resolveProvider |

## 3. Producteurs / consommateurs de droits

| Producteurs | Consommateurs |
|-------------|----------------|
| Allowlist evaluation / service | actionGate · exécutions bornées |
| Session / repository OPS1 | UI `Ops1SessionScreen` · e2e |
| Control tower tools / reinjection | flux CT ↔ OPS1 (tests dédiés) |
| Canonical context resolver (sfia/platform) | sessionContext · CT SFIA engine |
| Types/provider conversation OPS1 | D1 intake (`SHARED_SURFACE`) |

**ACL IAM produit globale :** non SELECTED — « ACL OPS1 » dans T-A7 = **path policy + gates**, pas multi-user IAM (`NOT SELECTED` IAM inchangé).

## 4. Dépendances legacy / MethodMode / `method/**`

| Lien | Nature | Statut | Risque |
|------|--------|--------|--------|
| Allowlist contient `"method/"` | path ACL | `ACTIVE — EVIDENCED` | retrait method sans MAJ allowlist = actions bloquées ou trou |
| `SFIA_CANONICAL_CORE_PATHS` (3 fichiers `method/.../core/*`) | lecture canonique | `ACTIVE — EVIDENCED` | couplage F03/F13 — retrait method sans remplacement doctrine = casse CT/OPS1 context |
| MethodMode D1 | **interdit** import D1↔OPS1 | `ACTIVE — EVIDENCED` (boundary) | ne pas fusionner identités |
| OA antiLegacy mentionne OPS1 cutover | garde | `ACTIVE — EVIDENCED` | double identité |

## 5. Risques retrait / isolation

| Action candidate | Risque | Preuve avant F13 |
|------------------|--------|------------------|
| Isoler OPS1 (garder POC, ACL stricte) | faible si boundaries OK | tests import + no cross-call OA |
| Migrer allowlist hors `method/` | casse actions Campus/méthode | inventaire allowlist hits |
| Retrait futur OPS1 | perte POC + e2e + CT bridges | GO produit distinct · ≠ cutover OA |
| Présenter OPS1 comme v3 | SC-12 | anti-claims |

## 6. Preuves nécessaires avant F13

1. Matrice P10–P11 (ACL isolation · historique read-only) documentée et testable.
2. Preuve runtime : aucun cross-call OPS1 ↔ `lib/oa` non autorisé.
3. Politique historique legacy (mutation interdite) — aujourd’hui `MISSING`.
4. Inventaire allowlist `method/` : usages réels vs legacy.
5. Gate Morris F13 **contenu** (pas seulement calendrier).

## 7. Anti-claims

- OPS1 documenté ≠ OPS1 retiré
- allowlist `method/` ≠ MethodMode
- isolation candidate ≠ isolation appliquée
- F13 préparée ≠ F13 `DECIDED`
