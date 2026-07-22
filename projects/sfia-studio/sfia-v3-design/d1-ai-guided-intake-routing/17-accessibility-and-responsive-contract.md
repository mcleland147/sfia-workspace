# 17 — Accessibilité et responsive

## A11y (héritage UX 13 + intake)

- landmarks : nav / main / complementary ;
- ordre de tabulation : champ → questions → proposition → CTA ;
- focus visible ; labels ; erreurs `aria-live` ;
- confiance non portée par la seule couleur ;
- target size ≥ 24×24 (idéalement 44) ;
- zoom 200 % sans perte d’info critique ;
- reduced motion.

## Responsive (shell fluide I1 conservé)

| Largeur | Layout |
|---------|--------|
| 1728 / 1440 | nav + main conversation + rail |
| 1280 | rail réduit / collapsible |
| 1024 | rail empilé / drawer ; pas de scroll H |

Frames Figma responsive : 1728 / 1280 / 1024 routing proposal.
