# Manifeste Figma L0/L1 — Dépôts Git (page 11)

| Métadonnée | Valeur |
|---|---|
| Fichier | `itgvCulInEnFY6DvgIegvP` |
| Page | `1092:116` — 11 · ML4D — Dépôts Git & publication |
| Session MCP | `56980d27-2b63-485f-a20c-8788019f4bfe` |
| Extraction | 2026-11-21 (cycle E08 delivery) |
| Méthode | `methodologie-contrat-figma-cursor.md` v1.1 (blob `906c6f60…`) |
| Viewport ref desktop | 1680×970 |
| Shell | instance partagée rail projet **246 CSS px** (F1) |

## L0 — Inventaire frames contractuelles

| Frame | node-id | État / route | Viewport | Qualification |
|---|---|---|---|---|
| 11.00 INDEX | `1098:881` | Index conception (non runtime) | 1680×530 | OUT_OF_SCOPE (index) |
| 11.01 Aucun dépôt | `1093:9` | `surface=git`, 0 liens | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.02 Dépôts associés | `1094:71` | gestion multi-dépôts | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.03 Explorateur 30/70 | `1094:172` | fichiers + visionneuse | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.04 Publications Studio | `1094:310` | onglet publications | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.05 Lecture agrandie | `1094:422` | mode agrandi + détails | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.06 GitHub connecté | `1095:339` | Paramètres → Intégrations | 1680×970 | PARTIAL (réutilise IntegrationsPanel) |
| 11.07 Déconnexion | `1095:390` | impacts déconnexion locale | 1680×970 | PARTIAL (réutilise IntegrationsPanel) |
| 11.08–11.12 | — | **supprimés volontairement** | — | OUT_OF_SCOPE — ne pas reconstruire |
| 11.13 Retirer association | `1096:752` | confirmation retrait | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.14 Git indisponible | `1096:841` | accès coupé | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.15 Desktop compact | `1098:791` | 1280 | 1280×970 | COMPLETE_FOR_COMPONENT |
| 11.16 Mobile | `1098:841` | mobile | 390×(H fig) | PARTIAL (H Figma ≠ navigateur) |

## PNG natifs + SHA-256

| Frame | Fichier | SHA-256 |
|---|---|---|
| 11.01 | `png/11.01-empty-1093-9.png` | `fbfe88aef63c8a9c92c2f42eba93e36915e4a8917e4d77c402d0c630587d2bd9` |
| 11.02 | `png/11.02-multi-1094-71.png` | `6e95e4788caf74d5653aa1e283c9d22acb02633ce6e0757dee2adf6fb06f7e8b` |
| 11.03 | `png/11.03-explorer-1094-172.png` | `54a1c9e07b26492b51f4d81a15e0fbcd32227b33e82dc3aee1ba1c6b7aef50cf` |
| 11.04 | `png/11.04-pubs-1094-310.png` | `c127e37cd3ca307fbd0ffbfc78a61566b296671c16216659f432bc4056c29a04` |
| 11.05 | `png/11.05-enlarge-1094-422.png` | `96ab67efdf21be7d8cc3b4c509babf072130cd05d522820254b869f6310d124a` |
| 11.06 | `png/11.06-connected-1095-339.png` | `278ad3f2a8ce6c497de57f5b56eb3c87fa68710ffdd111aad64aa22bbde7b067` |
| 11.13 | `png/11.13-remove-1096-752.png` | `33dc54056f83506e38189a5449099da39cf7c5609f06267692de9e4306056caf` |
| 11.16 | `png/11.16-mobile-1098-841.png` | `b34f527a244603d42ea59158df9235f036a01bba97c41b900492efcf65b58910` |

## Assets SVG exacts (icons)

| Asset Figma | Local | SHA-256 |
|---|---|---|
| Icône Agrandir | `web/public/figma-git-icons/expand.svg` | `2361cac660357870fe1d9f97681e882671df4a0117f25ff88ea5e9569381689a` |
| Icône fichier | `web/public/figma-git-icons/file.svg` | `0cd27a469ddd04c3bc6676cba2973b05a7dec2a8992af7f4630fc6717e29fb58` |
| Icône dossier | `web/public/figma-git-icons/folder.svg` | `3bad96757a3bfe8e85c88c11bda49cf1fea6442bf838711117bab9b299ec3e72` |
| Icône branche | `web/public/figma-git-icons/branch.svg` | `2b0f16faa0b29bb2163025ee2723c443280029d51afc4aca0a5f483b91085ed3` |
| Chevron | `web/public/figma-git-icons/chevron.svg` | `41ff9a3a354da5a74ec508e2a2c83b7603d079fd77752cc776bb7d32b0fbdd31` |

## L1 — Structure 11.03 (explorateur)

Source : `get_design_context` node `1094:172` + metadata page.

| Élément visible | node-id | Composant React cible | DOM locator | Assertion |
|---|---|---|---|---|
| Shell rail 246 | `I1094:173;1073:3` | shell existant | `[data-rail-variant=projet]` | w=246 ±2 |
| Hero kicker | `1094:236` | `GitRepositoriesSurface` | `[data-testid=git-hero-kicker]` | texte ESPACE PROJET / DÉPÔTS GIT |
| Titre | `1094:237` | idem | `[data-testid=git-hero-title]` | Dépôts Git |
| Carte dépôt + badge | `1094:240` | idem | `[data-testid=git-repo-card]` | fullName + Accessible |
| Sélecteur branche | `1108:490` | idem | `[data-testid=git-branch-select]` | ref change recharge |
| Onglet Fichiers | `1094:248` | idem | `[data-testid=git-tab-files]` | actif |
| Onglet Publications | `1094:249` | idem | `[data-testid=git-tab-publications]` | |
| Lien modifier dépôt | `1094:250` | idem | `[data-testid=git-manage-repos]` | |
| Arborescence 30% | `1094:252` | idem | `[data-testid=git-tree]` | w≈406 / 1358 |
| Visionneuse 70% | `1094:287` | idem | `[data-testid=git-preview]` | w≈934 / 1358 |
| Actions Infos / GitHub / Agrandir | `1101:805` | idem | `[data-testid=git-preview-actions]` | agrandir icon-only |
| Icônes dossier/fichier | `1094:67`/`1094:70` | `<img src=/figma-git-icons/…>` | | exact SVG |

## Règles de transposition

- Réutiliser shell / rail existants — ne pas dupliquer.
- Données Figma illustratives ≠ données métier.
- Disposition explorateur **30/70** (406 / 934 sur 1358 content).
- Aucune commande édition Git dans la visionneuse.
- Panneau technique `PublicationInspectionPanel` retiré de la surface nominale `git`.
- Nora (11.08–11.12) : réutiliser Travail / conversation existants — OUT_OF_SCOPE UI Git.

## L2 — Descendants natifs critiques (11.03) — cycle correctif 2026-11-21

Session MCP : `26b8c299-12cf-4a3d-99c6-f30d78f95110` · source `get_metadata` node `1094:172`.

| Chaîne parent | node-id | layout / sizing observés | Notes transposition |
|---|---|---|---|
| Frame 11.03 | `1094:172` | 1680×970 FIXED | Viewport desktop |
| Shell instance | `1094:173` | 1680×970 | Rail projet 246 CSS px (F1) — ne pas dupliquer |
| Zone métier | `1094:234` | x=284 y=104 · 1358×837 | Contenu après rail |
| Hero | `1094:235` | 1358×91 | kicker / titre / sous-titre |
| Carte dépôt | `1094:240` | 1358×121 | fullName + badge Accessible + branche |
| Sélecteur branche | `1108:490` | 169×37 | icône 16 + label + chevron 14 |
| Onglets | `1094:247` | 1358×18 | Fichiers / Publications / Modifier |
| Split 30/70 | `1094:251` | 1358×545 | tree 406 + gap 18 + preview 934 |
| Arborescence | `1094:252` | 406×545 FIXED | badge Lecture seule ; rows 39 px |
| Visionneuse | `1094:287` | 934×545 FIXED | actions Infos / GitHub / Agrandir |
| Actions | `1101:805` | 376×43 | Agrandir `1101:810` = 42×40 **icon-only** |

### Contrôles d'état / ordre

1. Identité dépôt + badge Accessible
2. Sélecteur de branche (lecture seule)
3. Onglets Fichiers → Publications → Modifier le dépôt
4. Arbre (dossiers à la demande) → sélection fichier
5. Actions visionneuse : Infos → Ouvrir sur GitHub → Agrandir (aria-label, sans libellé visuel)

### Tokens / assets

- Icônes locales `web/public/figma-git-icons/*` (SHA L0 conservés).
- Tokens CSS E08 dans `tokens.css` (`.git-*`, split 30/70, modal retrait).

### G5 runtime (correctif)

| Critère | Statut |
|---|---|
| Captures navigateur DEV | À produire sur 1680/1280/390/320 si serveur DEV |
| Mesures DOM F2 (Δ≤2 CSS px) | PARTIAL — structure L2 alignée ; mesures runtime selon disponibilité DEV |
| Verdict G5 | **NOT PROVEN** tant que captures+mesures runtime manquent |

## G2 / G3 / G5 status (correctif)

| Critère | Statut |
|---|---|
| L0 inventaire | DONE |
| PNG + SHA frames clés | DONE |
| L1 11.03 design_context | DONE |
| L2 descendants natifs critiques 11.03 | DONE (metadata 2026-11-21) |
| Manifeste nœud→DOM→test | UPDATED — testids `git-*` + e2e E08 |
| GATE UI G2/G4 | OUVERT pour composants COMPLETE_FOR_COMPONENT |
| G5 Figma↔runtime | **NOT PROVEN** (captures runtime requises) |
