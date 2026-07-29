# 07 — Accessibility, responsive, and error states

## Accessibilité

- Navigation clavier complète (tab order shell → form → CTA)
- Focus visible (tokens existants / outline)
- Labels liés (`htmlFor` / aria)
- Erreurs associées au champ (`aria-describedby`)
- Contraste AA sur texte et bandeaux
- Structure titres h1→h2
- Actions non fondées sur la couleur seule (StatusPill + texte)
- Live region pour erreurs submit

## Responsive

| Breakpoint | Comportement |
|------------|--------------|
| 1440 | Shell complet + copilot |
| 1280 | Copilot collapse optionnel |
| 390 | Rail → menu ; stack vertical ; CTA full-width |

## États

| État | Comportement |
|------|--------------|
| loading | skeleton / spinner + aria-busy |
| empty | CTA créer |
| error | message + retry |
| success | toast/inline + next step |
| blocked | Critical / HARD banners |

## Mapping erreurs (exemples)

| Code | UI |
|------|-----|
| PROJECT_INVALID | inline fields |
| DOCTRINE_UNRESOLVED | banner blocking |
| STATE_CONFLICT | conflict panel + refresh |
| authority denied / Critical | frame Critical blocked |
