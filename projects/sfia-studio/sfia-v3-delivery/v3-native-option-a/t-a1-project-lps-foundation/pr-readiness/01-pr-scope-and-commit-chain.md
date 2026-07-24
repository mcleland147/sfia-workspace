# 01 — Scope et chaîne de commits

| Champ | Valeur |
|-------|--------|
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **Base** | `main` @ `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **Merge** | **interdit** |

## Périmètre inclus

- `projects/sfia-studio/app/lib/oa/project/**`
- `projects/sfia-studio/app/__tests__/oa/project/**`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/**`

## Périmètre interdit (absent)

`method/**` · modeled schema edits · `package.json` · SQL/migrations · UI / session wiring · T-A2 · OPS1 / sfia-context / cutover · MethodMode removal

## Chaîne `origin/main..HEAD` (pré-commits docs)

1. `090e7be` feat(sfia-studio): add v3 Project and LPS foundation
2. `fc8a51a` test(sfia-studio): validate T-A1 Project and LPS invariants
3. `262d274` docs(sfia-studio): document Option A T-A1 delivery
4. `861ca76` fix(sfia-studio): correct T-A1 Project and LPS validation
5. *(commits docs)* Morris validation + PR readiness pack

## Totaux (ordre de grandeur)

- Runtime Project/LPS module + ports + in-memory store
- Invariant tests (create/append/concurrency/rollback/immutability/pin/UTF-8)
- Delivery + Morris + PR readiness docs
