# 03 — Contrat d’isolation OPS1

| Champ | Valeur |
|-------|--------|
| **Document** | `03-ops1-isolation-contract.md` |
| **Statut** | `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
| **Statut précédent** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 · campagne O2 |
| **Date design** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date validation technique** | 2026-07-28 20:54:03 CEST (+0200) |
| **Code / ACL runtime** | **aucune modification fonctionnelle** (probes tests only) |
| **Adoption Morris d’implémentation** | **non** — validation technique ≠ GO d’implémentation |

---

## 1. Frontière fonctionnelle

**OPS1** = Operational Vertical Slice 1 — POC Studio (conversation + action Markdown gouvernée), **distinct** de :

| Domaine | Emplacement | Relation |
|---------|-------------|----------|
| Option A runtime | `app/lib/oa/**` | **pas** d’identité v3 ; SC-12 |
| D1 Project Foundation | `app/lib/d1/**` | import D1↛OPS1 prouvé ; surface conversation partagée |
| Control Tower | tools / docs `66`–`74` · path-policy platform | construit **sur** OPS1 (extension in-place) |
| Méthode legacy | `method/**` | lectures via canonical loader ; deny structurel allowlist actions I4 |

---

## 2. Chemins et namespaces concernés

| Namespace | État actuel | Cible documentaire |
|-----------|-------------|--------------------|
| `app/lib/ops1/**` | ACTIVE | rester actif temporairement sous frontière |
| `app/features/ops1/**` · `app/app/ops1/**` | ACTIVE | idem |
| `app/__tests__/ops1/**` · `e2e/ops1-i*.spec.ts` | ACTIVE | preuves isolation futures |
| `projects/sfia-studio/.sfia-exec/**` | ACTIVE local (gitignored) | hors Git · procédures locales |
| `app/lib/ops1/sfia/canonicalPaths.ts` | wrapper temporaire | candidate isolation / remplacement doctrine |
| Allowlist `method/` | structurelle | revue avant tout retrait method |
| Docs `41`–`65` OPS1 | DOCUMENTATION ONLY | archive Git (F13.4) |

---

## 3. Matrice des surfaces

| Surface | État actuel | Cible documentaire | Lecture | Écriture | IAM | Path-policy | Audit | Rollback |
|---------|-------------|--------------------|---------|----------|-----|-------------|-------|----------|
| Session / conversation OPS1 | ACTIVE | actif temporaire | oui (POC) | oui (POC borné) | `NOT SELECTED` | allowlist + gates | partiel / local | procédures `.sfia-exec` |
| Action Markdown I4–I6 | ACTIVE | actif temporaire | n/a | bornée allowlist | `NOT SELECTED` | `evaluateAllowlist` | tests e2e | deny restore |
| Canonical SFIA context (via OPS1 wrapper) | ACTIVE | isoler dépendance method avant retrait | oui (3+1 paths) | non (lecture) | n/a | loader allowlist ≠ CT deny | digest | pin digest |
| Control Tower tools | ACTIVE (couplage) | conserver distinction OPS1≠OA | oui | tools bornés | `NOT SELECTED` | `decideReadPath` | CT logs locaux | revert tools |
| D1 intake provider | SHARED_SURFACE | ne pas fusionner identités | oui | D1 only | `NOT SELECTED` | import boundary | D1 tests | hold provider |
| OA `lib/oa` | ACTIVE mémoire | **aucune** fusion OPS1 | OA only | OA only | `NOT SELECTED` | antiLegacy | console/memory | n/a pack |
| Historique legacy (F13.4) | NON IMPLÉMENTÉ | vue RO bornée future | RO only | **interdite** | futur gate | path-policy ≠ IAM | journal accès | restore ACL |
| MethodMode D1 | ACTIVE | hors OPS1 (boundary) | D1 | D1 mutate | `NOT SELECTED` | n/a OPS1 | D1 tests | hold MethodMode |

---

## 4. Lectures autorisées / mutations interdites (cible design)

### Lectures autorisées (cible)

- lecture session OPS1 dans le POC ;
- lecture allowlist / décision path-policy ;
- lecture canonical sources via loader **existant** (jusqu’à remplacement doctrine) ;
- future vue F13.4 RO sur historique **explicitement** marqué historique.

### Mutations interdites (cible + holds actuels)

- toute mutation présentée comme « cutover OA » via OPS1 ;
- mutation de `method/**` hors gate Morris (SC-02) ;
- mutation des contrats OPS1 hors gate (SC-03) ;
- mutation d’historique legacy une fois politique F13 appliquée ;
- présentation OPS1 comme runtime v3 Option A (SC-12).

---

## 5. Path-policy ≠ IAM (norme)

| Concept | Définition dans ce repo | Preuve |
|---------|-------------------------|--------|
| **Path-policy / allowlist** | contrôle de **chemins** et d’actions bornées (deny-by-default) | `evaluateAllowlist` · `decideReadPath` |
| **IAM** | identité multi-user / rôles / authority registry | `NOT SELECTED` · R-T-A3-3 OPEN |

**Norme W1-D04 / F13.4 :** isoler OPS1 **ne** sélectionne **pas** un IAM. Toute confusion path-policy ↔ IAM est une stop condition (`TR-S-PP-IAM`).

---

## 6. Couplage CT / D1

| Lien | Nature | Implication isolation |
|------|--------|----------------------|
| CT sur `lib/ops1` | extension in-place | isoler OPS1 = impacter CT ; planifier frontières outils |
| D1 `resolveIntakeProvider` | shared conversation surface | pas d’import D1→OPS1 ; état co-hébergé `.sfia-exec` fichiers séparés |
| Import boundaries | tests platform | nécessaire **mais insuffisant** vs preuve runtime no-cross-call |

---

## 7. Interfaces F11.2 / F13.4

| Décision | Interface avec OPS1 |
|----------|---------------------|
| F11.2 | API read/readiness pourra exposer **statut OPS1 / holds** en lecture ; **aucune** mutation ; pas d’UI admin obligatoire |
| F13.4 | Git = vérité ; vue RO bornée pour support/audit ; isolation OPS1 **préalable** à retrait ; accès journalisés |

---

## 8. Classification

| Catégorie | Contenu |
|-----------|---------|
| **À isoler avant retrait** | dépendances method dans OPS1/CT context · allowlist hits · identité OPS1≠OA · historique mutable |
| **Peut rester actif temporairement** | POC OPS1 · e2e I1–I6 · CT tools sous path-policy |
| **Candidat au retrait futur** | wrappers temporaires · duplications non canoniques (W1-D03) — **après** preuves |
| **Historique** | docs OPS1 cadrage · archives Git |
| **Blocker** | absence de validation Morris de ce contrat · UNKNOWN hits allowlist · UNKNOWN cross-call runtime |

---

## 9. Observabilité / audit / rollback (design)

| Domaine | Exigence documentaire | État |
|---------|----------------------|------|
| Observabilité | health/readiness F11.2 incluant holds OPS1 | non implémenté |
| Audit | journal accès historique RO + décisions allowlist | partiel / mémoire |
| Rollback | R1 restore allowlist / wrappers ; R0 revert docs | documenté dans `04` · non testé |

---

## 10. Conditions de retrait futur (hors ce cycle)

1. Contrat OPS1 **validé** Morris.
2. Preuve runtime no-cross-call OPS1 ↔ OA.
3. Inventaire allowlist `method/` hits.
4. Remplacement doctrine / canonical paths (P03–P05).
5. F13.4 RO enforce + F11.2 read API validée.
6. Gate Morris **distinct** de retrait — ≠ ouverture T-A7 seule.

---

## 11. Anti-claims

- contrat proposé ≠ isolation réalisée ;
- path-policy ≠ IAM ;
- tests import ≠ preuve runtime ;
- OPS1 actif ≠ Option A ;
- F13.4 ≠ ACL validée.

---

## 12. Validation technique O2 (preuves)

| Axe | Résultat O2 |
|-----|-------------|
| Cohérence code | 0 imports OPS1↔OA / OPS1↔D1 / D1↔OPS1 (probe + import-boundaries) |
| Testabilité | probes reproductibles verts |
| Réversibilité | tests revertibles · aucun état persisté modifié |
| Path-policy ≠ IAM | confirmé · asymétrie loader qualifiée **sans** changement policy |
| Résiduel | live dynamic call probe non exécutée (env worktree) · surface partagée D1/platform documentée |

**Recommandation (non décision) :** conserver le contrat ; avant implémentation, ajouter probe live optionnelle + inventaire hits allowlist hors local.

## 13. Verdict section

`OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED — PATH-POLICY DISTINCT FROM IAM — NO FUNCTIONAL OPS1 CHANGE`
