# 01 — Scope et chaîne de commits

| Champ | Valeur |
|-------|--------|
| **Pack** | PR readiness — pas une nouvelle baseline fonctionnelle |
| **Branche** | `pr/sfia-studio-v3-native-option-a-foundation` |
| **Base** | `main` (`56ddf32…`) |
| **Demande Morris** | PR consolidée avant delivery |
| **Merge** | **interdit** dans ce cycle |
| **Delivery T-A0** | **non lancé** |

## Périmètre autorisé

- `projects/sfia-studio/sfia-v3-design/**`
- `projects/sfia-studio/sfia-v3-modeled/**`
- `projects/sfia-studio/sfia-v3-technical-architecture/**`

## Périmètre interdit (absent du diff)

`app/**` · `harness/**` · `method/**` · `prompts/**` · `.github/**` · SQL · migrations · OPS1 · cutover · runtime

## Chaîne `origin/main..HEAD`

1. `e22bc24` conception fonctionnelle
2. `d0ac034` validation conception
3. `577ff0c` architecture fonctionnelle
4. `05e2181` validation AF
5. `608d3d4` UX/UI + Figma
6. `7ae4054` validation UX
7. `52891e5` contrats modeled
8. `91bd6b4` validation modeled
9. `534da72` architecture technique
10. `e8166ad` validation AT
11. *(ce commit)* PR readiness pack

## Totaux (avant commit readiness)

- commits : 10 (+1 readiness)
- fichiers : 103 (102 A + 1 M) puis + pack readiness
- insertions : 5369 (+ readiness)
- Markdown / schemas / examples : 63 / 22 / 18

## Figma (hors Git)

- fileKey `8xR5zSTfGtEVZSr6KK8Gww`
- page Option A `11:2`
- `Runtime capture: not applicable — documentation/Figma-only foundation.`
