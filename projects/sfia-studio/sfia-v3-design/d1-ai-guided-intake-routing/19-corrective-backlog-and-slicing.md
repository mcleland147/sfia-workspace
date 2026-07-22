# 19 — Backlog correctif et slicing

| Slice | Contenu | Dépendances | Gate candidaté |
|-------|---------|-------------|----------------|
| **D1-C1** | Intake shell + conversation entry + empty + reprises + manuel secondaire | I1 shell | GO IMPL C1 |
| **D1-C2** | Intent understanding + clarification + RequestRoutingProposal | C1 + GPT borné | GO IMPL C2 |
| **D1-C3** | Existing context matching (scores, conflits, no match) | C2 + lookup | GO IMPL C3 |
| **D1-C4** | Human confirmation + mutation Project/Cycle/Resume | C3 + commands | GO IMPL C4 |
| **D1-C5** | Guided continuation (session + cockpit) | C4 | GO IMPL C5 |
| **D1-C6** | UX hardening a11y/responsive/erreurs/audit avancé | C1–C5 | GO IMPL C6 |

## Ordre

C1 → C2 → C3 → C4 → C5 → C6 (C6 peut chevaucher partiellement).

## Hors backlog immédiat

D2 · D3 · PostgreSQL · IdP · Policy E0–E4 complet · adoption v3.

## Fermé tant que conception non validée

GO VALIDATION D1-I1 · implémentation corrective · D1-I2 ancien scope form-first.
