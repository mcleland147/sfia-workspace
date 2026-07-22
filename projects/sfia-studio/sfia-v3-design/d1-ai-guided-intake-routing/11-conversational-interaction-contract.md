# 11 — Contrat d’interaction conversationnelle

## Étapes logiques A–H

| Étape | Nom | Effet |
|-------|-----|-------|
| A | Intent capture | rawIntent |
| B | Context lookup | matches |
| C | Clarification | questions minimales |
| D | Structured understanding | champs normalisés |
| E | Routing proposal | RequestRoutingProposal |
| F | Human confirmation | confirm / modify / refuse |
| G | Mutation bornée | commandes |
| H | Continuation | GuidedSession |

## Règles conversation

1. Une question à la fois quand possible ; max 3 en vol.
2. Toujours montrer ce que Studio a compris.
3. Toujours offrir une alternative « corriger le rattachement ».
4. Jamais muter à l’étape A–E.
5. Analyze-only respecte l’interdiction de création.
6. Erreurs lookup → message clair + manuel / retry.

## États conversationnels

`IDLE` → `CAPTURING` → `LOOKING_UP` → `CLARIFYING` → `PROPOSING` → `CONFIRMING` → `MUTATING` → `CONTINUING` | `CANCELLED` | `ERROR`

Voir `diagrams/d1-conversation-state-flow.mmd`.
