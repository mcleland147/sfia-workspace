# Contrat visuel L1/L2 — UX-003 Entrée unifiée (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Statut | EXTRAIT FIGMA MCP — VALIDATED SPEC BY MORRIS (composition) |
| Fichier Figma | `itgvCulInEnFY6DvgIegvP` |
| Page | `94:49` |
| Frames | `574:425` desktop nominal · `574:466` mobile nominal · `574:490` desktop session expirée |
| Empreintes PNG (sha256) | voir section 4 |
| CKC dédié | **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité |

## 1. Dimensions de référence

| Frame | Node | Viewport |
| --- | --- | --- |
| Desktop nominal | `574:425` | **1680 × 970** |
| Mobile nominal | `574:466` | **390 × 844** |
| Desktop session expirée | `574:490` | **1680 × 970** |

## 2. Tokens couleur natifs (constatés)

| Token | Hex |
| --- | --- |
| Fond page | `#090e19` |
| En-tête | `#0d1422` |
| Panneau / tuiles | `#131c2b` |
| Lignes | `#28364e` |
| Accent CTA / marque | `#6777f6` |
| Accent soft | `#9ca6ff` |
| Encre | `#f4f7ff` |
| Muet | `#a2b0c6` |
| Muet secondaire | `#7185a6` |

## 3. Composition L1/L2 (desktop)

| Bloc | Mesures natives (extrait metadata) |
| --- | --- |
| En-tête | h=106 ; marque 39×39 @ (84,35) ; rayon marque 10 |
| Auth panel | 536×550 @ (1000,204) ; rayon 24 ; bordure `#28364e` |
| Accent panel | 52×5 ; rayon 2 |
| CTA | 480×62 ; rayon 12 |
| Tuiles | 222×98 ; gap ~15 ; rayon 14 |
| Titre produit | Inter Bold 68 / lh 80 |
| Titre auth | Inter SemiBold 34 / lh 42 |

Mobile : auth 350×396 @ (20,371) ; titre 39/46 ; CTA 294×56 ; tuiles/footer/masqués.

Session expirée : même composition desktop ; copy panel `SESSION EXPIRÉE` / `Retrouvons votre session` / CTA `Se reconnecter avec GitHub`.

## 4. Captures Figma datées (2026-11-16)

Stockage local cycle : `.tmp-sfia-review/figma-refs/`

| Fichier | sha256 |
| --- | --- |
| `574-425-desktop-nominal.png` | `a3c42f942a0dd9f8fe0fb3dd7d1913f04946c245c3f8916877f069072dc15206` |
| `574-466-mobile-nominal.png` | `7ff1439eabe80277b98d0add0bf2847f5d96d525c3df49d7e03b5bfe638e1aec` |
| `574-490-desktop-expired.png` | `cf5aca2f2ca0f706d6c010a81bf3882efbf38e7e6d46199592406ae95bcae012` |

## 5. Limites runtime

- Variante session expirée : activation déterministe `?reason=session_expired` uniquement (pas de détection session native distincte).
- Accès DEV (Pilote A/B) : hors Figma, conservés pour lanes DEV/E2E.
- Fidélité F2 : rectangles stables — cible delta 0 CSS px, tolérance max 2 CSS px ; pas de seuil global d’image inventé.
