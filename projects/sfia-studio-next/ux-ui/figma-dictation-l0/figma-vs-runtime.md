# Figma vs Runtime — Dictée compositeur (ML3)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Build | `GzJ4dM0QxarVz9dpovqQz` |
| Digest | `c5fd99c8480b9b184f148ece2a77fc5058daba53d7b183d49f36f61cff758f0b` |
| Runtime | DEV `127.0.0.1:3100` · fixture `/dev/dictation-visual/*` |
| Transport | substitué (fixture DOM + CSS produit) — **pas** OpenAI LIVE |
| F2 | Objectif 0 CSS px · max 2 CSS px rectangles stables contractés |

## Captures

| État | Figma ref | Runtime capture | SHA-256 runtime |
|---|---|---|---|
| 05.18 repos | `ux-ui/figma-dictation-refs/05-18-repos.png` | `.sfia-evidence/figma-dictation-runtime/dictation-runtime-repos.png` | `ed8b80a8…a01126` |
| 05.21 écoute visible | `ux-ui/figma-dictation-refs/05-21-ecoute-visible.png` | `.sfia-evidence/figma-dictation-runtime/dictation-runtime-ecoute-visible.png` | `99769ca3…b588e` |

## Mesures DOM (viewport fixture ≈ 574 px compositeur)

| Élément | Figma (contrat) | Runtime | Δ |
|---|---|---|---|
| Micro idle | 35×35 | 35×35 | **0** |
| Shell padding | 12×16 | `12px 16px` | **0** |
| Shell radius | 15 | `15px` | **0** |
| Shell bg | `#151c29` | `rgb(21, 28, 41)` | **0** |
| Shell border | `#273049` | `rgb(39, 48, 73)` | **0** |
| Cancel | 40×46 | 40×46 | **0** |
| Stop | 40×46 · `#7368e8` | 40×46 · `rgb(115, 104, 232)` | **0** |
| Wave bars | 36 | 36 | **0** |
| Shell height | 198 (fixture Figma w=972) | 179 (runtime w=574) | reflow largeur — hors rectangle stable isolé |

## Structure / interactions

| Attendu Figma | Runtime |
|---|---|
| Morph in-place (pas panneau flottant) | Confirmé — `data-dictation-active=1` |
| Brouillon antérieur préservé | Label + baseline affichés |
| Transcription provisoire séparée | Label + provisional |
| Croix / onde+durée / chevron / stop | Présents, aria-labels OK |
| Amplitude / durée | Illustratives en Figma ; runtime = analyseur + horloge session |

## Verdict fidélité

**FIGMA TO RUNTIME ALIGNED** sur les rectangles stables contractés mesurés (micro, commandes, tokens, structure).

Réserve : comparaison pixel-image globale non applicable (viewport fixture ≠ frame Figma 972). Hauteur shell suit le contenu (F2 : reflow autorisé). États connexion / masquée / finalisation / permission exercés via fixture ; smoke navigateur produit avec micro réel reporté en RECETTE.
