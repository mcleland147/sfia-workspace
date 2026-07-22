# 08 — Project / Cycle / Resume / Action routing

## Matrice

| Outcome | Crée | Reprend | UI post-confirm |
|---------|------|---------|-----------------|
| CREATE_PROJECT | Project (+ cycle 1 proposé) | — | Cockpit + GuidedSession framing |
| OPEN_CYCLE | CycleInstance | Project existant | Cycle actif + session |
| RESUME_CYCLE | — | Cycle ouvert | GuidedSession |
| RESUME_ACTION | — | Action/delivery | surface action / OPS1 bridge futur |
| OPEN_DECISION | — | DecisionRequest | Decision Center |
| ANALYZE_ONLY | — | — | synthèse ; CTA transform |
| NEED_CLARIFICATION | — | — | questions |

## Règle anti-prolifération

Ne pas créer Project/Cycle si une reprise suffit (S4).

## Compatibilité D1-I1

- Project persisté reste le socle CREATE_PROJECT.
- CycleInstance / GuidedSession = slices correctifs C4–C5 (pas I1).
- Resume Action peut temporairement pointer legacy OPS1 session si match — **à trancher** (décision Morris).
