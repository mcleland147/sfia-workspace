# 05 — Dependency map

| Champ | Valeur |
|-------|--------|
| **Nature** | carte candidate · **pas** une décision |
| **T-A7** | `NOT OPEN` |

## 1. Axes principaux

| Source → cible | Nature | Preuve | Criticité | Direct ? | Impact si supprimée | Validation future | Stop |
|----------------|--------|--------|-----------|----------|---------------------|-------------------|------|
| MethodMode → D1 runtime | exécution | types/db/commands | High | Y | D1 cassé | tests D1 | SC-04 |
| MethodMode → D1 UI | exécution UI | Badges/Views | Med | Y | labels/cockpit | UI tests | SC-04 |
| MethodMode → D1 tests | test | `__tests__/d1` | Med | Y | faux couverture | — | — |
| MethodMode ↛ OA runtime | gouvernance (interdiction) | antiLegacy | High | Y (garde) | régression autorité | CI antiLegacy | SC-12 |
| MethodMode → documentation | doc | design/T-A packs | Low | Y | docs stale | sync | — |
| `method/**` → prompts/templates | gouvernance | prompt-catalog | High | Y | cycles mal guidés | revue prompts | SC-02 |
| `method/**` → docs architecture | doc | docs/** liens | Med | Y | navigation cassée | link check | — |
| `method/**` → tests app | test | **peu/aucune** lecture runtime prouvée | Low | N? | — | grep loader | P08 |
| `method/**` → CI | build | **aucune** ref `.github` | — | N | — | P24 candidates | — |
| `method/**` → OPS1 allowlist | sécurité | `"method/"` in allowlist | High | Y | actions deny/allow faux | inventaire ACL | SC-03 · F13 |
| OPS1 → authorization allowlist | sécurité | actionGate/allowlist* | High | Y | exécutions unsafe/bloquées | e2e I3–I4 | F13 |
| OPS1 → runtime/API/UI | exécution | lib/features/ops1 · route | High | Y | POC mort | e2e I1–I6 | — |
| OPS1/platform → 3 fichiers `method/.../core/*` | exécution/gouv | `canonicalPaths.ts` `SFIA_CANONICAL_CORE_PATHS` | High | Y | contexte CT/OPS1 faux | tests canonicalEngine | P03–P05 · F03 |
| Control Tower → OPS1 lib | exécution extension | docs/tools CT | High | Y | CT cassé si retrait OPS1 | inventaire CT | F13 |
| D1 intake → OPS1 conversation provider | exécution partagée | resolveProvider | Med–High | Y | live D1 cassé | tests D1 provider | F13 |
| OPS1 ↛ D1 | sécurité boundary | import-boundaries | High | Y (garde) | double identité | CI | SC-12 |
| legacy → rollback/RUN | RUN | P23 PARTIAL | Med | I | cutover non rollbackable | design RUN | F03 · F09 |
| legacy → cutover | gouvernance | T-A7 def | High | I | cutover unsafe | F09 | SC-04/05 |
| legacy → F03/F11/F13 | gouvernance | packs T-A7 | High | Y | décisions mal informées | ce pack + bulletin | — |

## 2. Classification par type

| Type | Exemples |
|------|----------|
| Exécution | MethodMode D1 · OPS1 session/execution · canonical resolver |
| Build | (peu pour method/) |
| Test | D1/OPS1/antiLegacy/e2e |
| Documentaire | docs · prompts · packs T-A* |
| Gouvernance | SC-* · P03–P11 · Option C vague 1 |
| Sécurité | allowlist · import boundaries · anti double identité |
| Historique sans usage actif prouvé | `method/**/archive` · anciens `methods/` racine (absents) |

## 3. Lecture normative

1. **Ne pas** traiter `method/**` comme mort : prompts + allowlist OPS1 = actifs.  
2. **Ne pas** traiter MethodMode comme limité à OA : il est central à D1.  
3. **Ne pas** fusionner OPS1 et Option A.  
4. Cutover exige preuves P03–P11 avant retrait — encore largement `MISSING`/`PARTIAL`.

## 4. Anti-claims

- dépendance documentaire ≠ dépendance d’exécution
- garde antiLegacy ≠ MethodMode déjà retiré de D1
- carte ≠ plan de suppression approuvé
