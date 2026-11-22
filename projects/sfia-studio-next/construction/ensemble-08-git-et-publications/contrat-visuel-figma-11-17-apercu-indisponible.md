# Contrat visuel extrait — Figma 11.17 (avant code UI)

| Champ | Valeur |
| --- | --- |
| Date extraction | 2026-11-22 |
| FileKey | `itgvCulInEnFY6DvgIegvP` |
| Frame | `11.17 · Dépôts Git — Aperçu indisponible · GitHub` |
| Node | `1152:490` |
| Dimensions | 1680 × 970 |
| Session MCP | `0348f4d9-72e7-4267-8984-36279c59f75d` |
| Capture | `proofs/figma-11-17-apercu-indisponible.png` |
| Source 11.03 | Node `1094:172` — shell + split 30/70 (réutilisé, non redessiné) |

## Structure (G2/G3)

1. **Shell projet partagé** (rail 246 + zone 1434) — hors scope de modification.
2. **Hero** — eyebrow `ESPACE PROJET / DÉPÔTS GIT`, titre `Dépôts Git`, sous-titre lecture.
3. **Carte dépôt** — fullName, badge Accessible, sélecteur branche, ligne contexte.
4. **Onglets** — Fichiers (actif accent) / Publications / Modifier.
5. **Split 30/70** — arborescence (`w≈406`) + visionneuse (`w≈934`), gap ≈18, panneaux `panel` + bordure `line`, radius 10, padding 20/22.
6. **En-tête visionneuse** — titre fichier + path·ref ; actions Infos / Ouvrir sur GitHub / Agrandir.
7. **Kicker** — dynamique (`FICHIER {FORMAT} · LECTURE SEULE`), accent.
8. **État neutre / aperçu indisponible** (node `1153:75`) — carte `#111826`, bordure `#2c374e`, radius 12 :
   - pictogramme document + croix (icône locale `/icons/git-preview-unavailable.svg`)
   - eyebrow motif dynamique (ex. `PDF · FICHIER BINAIRE`) — **pas** un libellé figé PDF
   - titre 24px semibold : `Aperçu indisponible`
   - message 14px muted : `Ce format de fichier ne peut pas être affiché directement dans SFIA Studio.`
   - complément : `Consulte le document sur GitHub pour le visualiser ou le télécharger.`
   - CTA secondaire `Ouvrir sur GitHub` (même destination que l’en-tête)
   - note 11px : `Ouverture dans un nouvel onglet · Aucun téléchargement dans Studio`

## Tokens observés

| Rôle | Valeur |
| --- | --- |
| bg | `#0b101b` / `#0a0e18` |
| panel | `#151d2c` |
| panelhi | `#1b2639` |
| line | `#2b3850` |
| text | `#f3f5ff` |
| muted | `#a3b0c7` |
| accent | `#7477ed` |
| accentbg | `#242c4b` |
| sélection arbre | `#252948` |

## Règles d’adaptation runtime

- PDF dans la maquette = **exemple** ; formatLabel / kicker / motif dérivés du fichier réel.
- URL GitHub du prototype Figma = **non** codée en dur.
- Réutiliser boutons `.git-btn-secondary`, split `.git-split-3070`, icônes existantes.
- Aucun redessin du shell ni de l’explorateur.

## Fidélité F1/F2

- Extraction MCP + screenshot : **FAIT** avant modification UI.
- Preuve navigateur DEV : après implémentation (PREVIEW-11).
