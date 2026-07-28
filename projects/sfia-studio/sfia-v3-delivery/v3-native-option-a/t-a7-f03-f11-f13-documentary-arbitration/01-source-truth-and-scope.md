# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Nature** | vérité + preuves · **pas** une autorisation |

## 1. Vérité Git

| Check | Résultat |
|-------|----------|
| `origin/main` | `9011bb2c…` (merge PR #284) |
| HEAD / merge-base | identiques |
| Upstream projet | **aucun** |
| Remote branche | **absente** |
| Contenu hors pack | **aucune** modification (bound) |

## 2. Preuves structurantes (synthèse)

| Domaine | Preuve | Statut |
|---------|--------|--------|
| MethodMode D1 | `METHOD_MODES` · DB · badges · default `V3_CANDIDATE` | `ACTIVE — EVIDENCED` |
| Orphan `actionSelectMethodMode` | export sans UI | `ACTIVE — EVIDENCED` (dead export) |
| Dual enum modeled | `v2.6_manual|…|fallback` sans mapper | `ACTIVE — EVIDENCED` (écart) |
| Trio `SFIA_CANONICAL_CORE_PATHS` | 3 fichiers `method/.../core/*` | `ACTIVE — EVIDENCED` |
| OPS1 path-policy | allowlist/forbidden + gates · ≠ IAM | `ACTIVE — EVIDENCED` / IAM `NOT SELECTED` |
| Asymétrie | deny action `method/` vs lecture canonical trio | `ACTIVE — EVIDENCED` |
| CT / platform / OPS1 wrappers | extension in-place | `ACTIVE — EVIDENCED` |
| D1 ↛ OPS1 import boundary | tests | `ACTIVE — EVIDENCED` |
| Surfaces D1 UI | badges · cockpit · home | `ACTIVE — EVIDENCED` |
| OA UI product | OA-11 / P22 | `MISSING` |
| MethodModeGate / route | design | `DOCUMENTATION ONLY` |
| Volume DB `method_mode` | — | `UNKNOWN` |
| P03–P05 | remplacements doctrine/loader | `PARTIAL` |
| P06–P09 · P11 | MethodMode/OA UI/method reads/historique RO | `MISSING` |
| P10 | OPS1 isolation cutover | `PARTIAL` |
| Rollback runtime testé | — | `MISSING` / `UNKNOWN` |
| B5 / R1 / R-M01 / HARD | ouverts | `OPEN` / `OPEN HARD` |

## 3. Contraintes héritées (W1)

| Contrainte | Effet |
|------------|-------|
| W1-B | plan candidat **documentaire** autorisé · prep technique **non** |
| W1-D02 | blocs actifs confirmés (ne pas traiter comme morts) |
| W1-D03 | candidats futurs ≠ suppression décidée |
| W1-D04 | isolation OPS1 **avant** tout retrait (trajectoire) |
| W1-D05 | F03/F11/F13 **décidées (contenu)** avant prep technique retrait |

## 4. Scope de cet arbitrage

| In | Out |
|----|-----|
| Contenu options F03/F11/F13 | Implémentation · prep technique |
| Impacts / risques / dettes / preuves | Modification code/method/OPS1 |
| Recommandations non décisionnelles | Delivery / cutover / T-A7 OPEN |
| Bulletin Morris | Fermeture réserves |

## 5. Anti-claims

- inventaire Wave 1 ≠ F03 satisfait
- P* PARTIAL/MISSING ≠ prêt cutover
- surface D1 existante ≠ surface cutover OA
- path-policy ≠ IAM
