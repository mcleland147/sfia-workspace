# 12 — Test strategy and acceptance criteria

## 1. Pyramide

| Couche | Cible |
|--------|-------|
| Unit | state machines, policy pure functions, validators |
| Schema | ajv Draft-07 modeled schemas + examples |
| Policy | 13 rules D1 × match/non-match |
| Service | command handlers + tx boundaries (sqlite test db) |
| Integration | Git adapter fake + GPT fake provider |
| Persistence | optimistic lock, sealed immutability, idempotency |
| GPT contract | structured output schema + hallucination guards |
| Security | AuthZ matrix samples ; injection fixtures |
| A11y | axe on screens (pattern Studio) |
| E2E | Playwright parcours nominal + stops |
| Resilience | GPT/Git/SQL down |
| Audit | append-only + correlation |

## 2. Scénarios critiques

1. Création nominale bout-en-bout  
2. Projet sans mode → E3 MethodModeGate  
3. Contexte indisponible → E4  
4. Contexte stale → E4 block send  
5. Rôle non habilité → E4  
6. Décision rejetée → no transition  
7. Gate expiré → EXPIRED  
8. Transition invalide → E4  
9. Complete sans ReviewBundle sealed → E3  
10. Retry idempotent CreateProject  
11. Conflict optimistic locking  
12. Fallback UI v2.6 claim  
13. Claim v3 ineligible → E4  

## 3. Matrice Requirement → Test → Evidence → Gate

| Req | Test | Evidence | Gate |
|-----|------|----------|------|
| D1 parcours | E2E nominal | playwright report | GO IMPLEMENTATION lots |
| E0–E4 | policy tests | vitest | same |
| States | state machine unit | vitest | same |
| Review resolve/verify | review service tests | vitest | I7 |
| No GPT mutate | GPT contract tests | vitest | I2 |
| AuthZ | security tests | vitest | I5/I8 |
| Schemas | ajv validate | validation json | modeled heritage |
| A11y | axe | report | I8 |
| RUN SLI hooks | metrics unit | code | I8 |

## 4. Critères d’acceptation transverses

- Aucune mutation sans AuthZ  
- Aucune transition hors machine  
- Seal impossible si ref unresolved  
- Audit event pour chaque commande structurante  
- Baseline v2.6 non modifiée  
