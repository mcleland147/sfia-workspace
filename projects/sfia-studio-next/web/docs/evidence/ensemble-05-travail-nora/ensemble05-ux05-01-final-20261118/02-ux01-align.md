# UX-01 — alignement optique icône / première ligne

## Défaut résiduel

Structure flex horizontale déjà en place, mais l’icône restait parfois ~quelques px au-dessus de la première ligne (line-height / marges Markdown).

## Correctif partagé (`tokens.css`)

- `.fig-visual-text-with-icon` / title / recommendation : `align-items: flex-start`
- icône : `margin-top: 2px` + `height: 1.35em` (settle optique vs line-height 1.35)
- reset `margin-top: 0` sur `:first-child` du corps éditorial / recommendation-body

Pas d’offsets par titre individuel.

## Preuve navigateur

`screenshots/ux01-icon-align-geometry.json` — titre : delta icon/text = **0 px**.
Capture : `ux01-composition-icon-align-1440.png`.
