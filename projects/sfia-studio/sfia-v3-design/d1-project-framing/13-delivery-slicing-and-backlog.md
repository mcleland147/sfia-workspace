# 13 — Delivery slicing and backlog

## 1. Lots candidats

| Lot | Valeur | Dépendances | Modules candidats | Tests | Risques | Gate | Sortie |
|-----|--------|-------------|-------------------|-------|---------|------|--------|
| **D1-I1 Project foundation** | 1er objet métier réel | design GO | Project Service, WS ref, assignments stub, UI New Project/Cockpit minimal, audit | unit+e2e create | schema drift | GO IMPLEMENTATION D1-I1 | Project DRAFT/ACTIVE + mode |
| D1-I2 Cycle + GuidedSession | conversation liée projet | I1 | Cycle/Session services, UI session | service+e2e | GPT cost | I2 | session bound |
| D1-I3 Context + Definition Registry | git-truth | I2 | Context, Git adapter, digests | integration | git perf | I3 | CONTEXT_READY/STALE |
| D1-I4 Policy E0–E4 + reserves | enforcement | I3 | Policy Engine, Reserve panel | policy tests | rule conflicts | I4 | E4 stops proven |
| D1-I5 Decisions + gates | human governance | I4 | Decision/Gate, Gate Modal | security+e2e | SoD | I5 | HumanDecision sealed |
| D1-I6 Transition + completion | clôture cycle | I5 | Transition Service | state tests | invalid edges | I6 | COMPLETED |
| D1-I7 ReviewBundle + audit UX | preuve cycle | I6 | Review Service, timeline | resolve/verify | digest bugs | I7 | SEALED bundle |
| D1-I8 UX harden, security, RUN | production-grade | I1–I7 | a11y, metrics, auth | a11y+resilience | scope creep | I8 | readiness pack |

## 2. Challenge du découpage

Fusion I2+I3 possible si trop fin ; **ne pas** fusionner I1 avec GPT (valeur sans provider).  
I7 ne doit pas précéder I5 (bundle sans décisions = creux).

## 3. Premier incrément réellement utile (recommandation)

**D1-I1 — Project foundation**

Pourquoi : prouve Project-first (P1), mode méthodo, persistence D1, audit, AuthZ stub, sans dépendre GPT/Git complexes.

Critères de sortie I1 :
- CreateProject + SelectMethodMode + Cockpit lecture  
- Audit PROJECT_*  
- Tests schema/state project  
- Aucun Cursor/D2  
- Feature flag / route isolée sous Studio  

Dette I1 : mono-opérateur ; SQLite only ; UI minimale.
