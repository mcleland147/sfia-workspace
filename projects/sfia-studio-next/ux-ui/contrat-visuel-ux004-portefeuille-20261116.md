# Contrat visuel L1/L2 — UX-004 Portefeuille & shell personnel (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Statut | EXTRAIT FIGMA MCP — VALIDATED SPEC BY MORRIS (composition) |
| Fichier Figma | `itgvCulInEnFY6DvgIegvP` |
| Page | `94:49` |
| Frames | `591:425` · `591:543` · `591:661` · `591:721` · `592:435` |
| CKC dédié | **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité |

## 1. Dimensions de référence

| Frame | Node | Viewport | Rôle |
| --- | --- | --- | --- |
| Desktop rempli | `591:425` | **1680 × 970** | Portefeuille nominal |
| Desktop scroll | `591:543` | **1680 × 970** | Rail fixe, contenu défilé (−470) |
| Desktop vide | `591:661` | **1680 × 970** | Aucun projet |
| Mobile | `591:721` | **390 × 844** | Nav inférieure fixe |
| Mobile scroll | `592:435` | **390 × 844** | Préparations défilées (−690) |

## 2. Géométries natives (metadata MCP)

| Bloc | Mesures |
| --- | --- |
| Rail personnel | **246 × 970** ; fill `#0C101A` ; marque 36×36 @ (23,27) rayon 9 |
| Nav Portefeuille actif | 212×45 @ (17,141) ; rayon 9 ; fond `#272e49` |
| Nav Nouveau projet | 212×45 @ (17,195) |
| Compte rail | avatar 33 @ (21,872) ; séparation @ y=849 |
| Zone centrale | 1434×970 @ x=246 |
| Entête contenu | h=**66** ; fond `#0f1420` |
| Zone scroll | 1434×904 @ y=66 |
| Stats | 431.33×118 ; gap ~17 ; rayon 12 ; 3 colonnes |
| Cartes projet | 431.33×180 ; rayon 12 |
| Ligne préparation | 1328×66 ; gap 7 ; rayon 10 ; CTA 131×38 |
| Mobile header | 390×65 |
| Mobile bottom nav | 390×72 @ y=772 |
| Mobile stats | 165×118 × 2 colonnes |

## 3. Tokens couleur (constatés)

| Token | Hex |
| --- | --- |
| Fond | `#0a0e17` |
| Rail | `#0c101a` |
| Panneau / carte | `#151c29` |
| Ligne | `#313c51` |
| Accent | `#656fe1` |
| Accent soft | `#afa5ff` |
| Encre | `#f4f6fc` |
| Muet | `#94a2bb` |
| Badge OK | `#a6dfbc` / fond `#1c352d` |

## 4. Comportements contractuels

- Rail desktop : hauteur viewport, **ne défile pas** avec la liste.
- Contenu : scroll vertical indépendant.
- Navigation personnelle unique : **Portefeuille** + **Nouveau projet** (sas D2, pas création implicite).
- Compteur : **Préparations ouvertes** (plus « Reprises récentes »).
- Mobile : nav inférieure Portefeuille / Créer / Compte ; contenu indépendant ; pas de masquage sous la barre.
- Données d’exemple Figma (CampusFlow, dates…) : **non normatives** — runtime = API / fixtures.

## 5. Captures Figma datées (2026-11-16)

Stockage : `.tmp-sfia-review/figma-refs-ux004/`

| Fichier | sha256 |
| --- | --- |
| `591-425-desktop-filled.png` | `71faa0df8fa27b48fa9bc2a913c0ccdf51e6b46aa9b188627b179a81cb7d255d` |
| `591-543-desktop-scrolled.png` | `1086bee76e6ed35f308702644dbafdb2fd186abc80eda84813403ab63d6c4fc4` |
| `591-661-desktop-empty.png` | `f7152765e83b5cd0ec4b933d551ae4f0e305365fd1375e5ea82d6587a93490d3` |
| `591-721-mobile.png` | `452b5e1f4a027cef2e2c16024e64f089b78c752fd0fd3457b6d9da65860621f5` |
| `592-435-mobile-scrolled.png` | `7e455e36e55f8c272e00d4fe5c249264b29018af83e53b32c64621739234e049` |

## 6. Fidélité F2

Rectangles stables (rail width 246, topbar 66, bottom nav 72, prep row ~66) : cible **0 CSS px**, max **2 CSS px**.
Pas de seuil global de différence d’image.
Variantes projet/conversation/inspection : largeurs 246/240/244 **inchangées**.
