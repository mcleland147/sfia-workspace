# 16 — Figma / runtime comparison

| Aspect | Runtime observé | Cible Figma | Écart | Impact doctrine | Priorité | Lot | Preuve |
|--------|-----------------|-------------|-------|-----------------|----------|-----|--------|
| Largeur globale | 1440px fixe | 100% viewport fluide | critique | shell | P0 | I1 | metrics+frames |
| Usage viewport | 288px vides @1728 | plein usage | critique | trust | P0 | I1 | runtime-1728.png |
| Overflow <1440 | scrollH 1440 | fluide/collapse | critique | usable | P0 | I1 | runtime-1280/1024 |
| Navigation | rail icons OPS1 | Workspace/Project IA | fort | Project-first | P0 | I1 | frames Home/Cockpit |
| Page identity | Nouvelle demande | Workspace/Project | fort | D1 | P0 | I1 | h1 metrics |
| Project-first | absent | Cockpit pivot | critique | P1 | P0 | I1 | frame Cockpit |
| Cycle visibility | I6 steps copilot | CycleHeader | fort | D1 | P1 | I2 | frames |
| Context visibility | faible | ContextStatus rail | fort | git-truth | P1 | I3 | frames Session |
| Rail | Copilot dominant | ContextualRail | fort | hierarchy | P0 | I1 | frames |
| Conversation | centre | composant Session | critique | doctrine | P0 | I2 | frames Session |
| Decisions/gates | action gate OPS1 | Decision Center + GateDialog E3 | fort | E3 | P1 | I5 | frames |
| Responsive | artboard only | breakpoints doc12 | critique | a11y | P0 | I1/I8 | frames 1728–1024 |
| Accessibility | partielle | contrat 13 | moyen | AA | P1 | I8 | matrix |
