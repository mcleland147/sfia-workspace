# 09 — Validation, test, and visual proof plan

## Critères d’acceptation futurs (slice)

### Fonctionnels
- Project/LPS créés via T-A1 réel
- Doctrine résolue via T-A0
- Cycle qualifié via T-A2
- Recommandation produite (epistemic)
- Décision locale via T-A3
- Dashboard dérivé T-A6/T-A7
- Blockers issus T-A7
- Historique borné
- Happy path **sans** fixture

### UX
- Parcours compréhensible sans jargon T-Ax en premier plan
- Prochaine action évidente
- Reco ≠ décision visible
- Local ≠ produit visible
- Aucun faux claim

### Technique
- Pas de logique domaine dans React
- typecheck/lint/build
- unit + component + parcours + boundaries
- pas d’API distante
- pas de dep inutile

### Visuel
- Contrat Git (et Figma page si D-VS-05)
- Captures desktop + responsive
- Pas de READY visuel sans preuve

### A11y
- Clavier, focus, labels, contraste, titres

## Preuves par lot

Chaque PR : tests verts + captures listées dans `08` + anti-claim checklist.
