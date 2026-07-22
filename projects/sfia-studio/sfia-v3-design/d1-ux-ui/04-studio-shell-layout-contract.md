# 04 — Studio Shell layout contract

## Verdict sur le candidat proposé

Le modèle `nav | minmax(0,1fr) | clamp(320px,24vw,420px)` est **retenu** avec ajustements.

## Zones

| Zone | Largeur | Comportement |
|------|---------|--------------|
| Navigation latérale | 64–80px | fixe/compacte ; tooltip ; actif/focus |
| Zone métier | `minmax(0, 1fr)` | **aucun max-width global** ; scroll vertical maîtrisé ; max-width **local** optionnel (ex. prose 72ch) |
| Panneau contextuel | desktop large `clamp(320px, 24vw, 420px)` ; desktop `320–360px` | collapsible 1100–1280 ; drawer tablet ; bottom sheet / vue dédiée mobile |

## Gutters

24–32 desktop · 16–24 medium · 16 tablet

## CSS futur (documentation seule — non implémenté)

```css
.shell {
  display: grid;
  grid-template-columns:
    var(--sfia-nav, 72px)
    minmax(0, 1fr)
    clamp(320px, 24vw, 420px);
  min-height: 100dvh;
  width: 100%;
}
```

## Interdits

- artboard global 1440×1024 laissant bande vide ;
- largeurs fixes ignorant viewport ;
- conversation imposant largeur page ;
- Copilot dominant hiérarchie métier ;
- scrolls imbriqués non maîtrisés.

## Remplacement conceptuel

`CopilotPanel` → `ContextualRail` (Context, Reserves, Decisions, Gates, Next action).
