# 02 — Résultats de validation

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 06:13:00 CEST |
| **Worktree** | `sfia-workspace-v3-native-option-a-tech` |

| Contrôle | Exit | Durée | Résultat |
|----------|------|-------|----------|
| Truth Check (branch/HEAD/main/merge-base/no prior PR) | 0 | <2s | PASS |
| `npx vitest run __tests__/oa/doctrine` | 0 | 0.63s | **28/28** PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 0 | 0.63s | **10/10** PASS |
| `npx tsc --noEmit` | 0 | 0.95s | PASS |
| `npx next lint --dir lib/oa --dir __tests__/oa` | 0 | 1.68s | PASS |
| `npx next build` | 0 | 6.91s | PASS |
| `git diff --check origin/main...HEAD` | 0 | 0.04s | PASS |
| `npm ci` (temp) | 0 | 4.27s | PASS |
| `npm ci --omit=dev` (temp) | 0 | 2.82s | PASS ; **ajv@6.15.0 YES** ; eslint ABSENT |
| Adapter validate under omit=dev | 0 | <1s | PASS |
| Symlink internal / escape / method / dir | 0 | <1s | PASS (escape denied) |
| Secrets / legacy imports / method path imports | — | — | PASS (absents) |

## AJV

- `package.json` dependencies: `"ajv": "^6.15.0"`
- lock resolved: `6.15.0`
- Présent sous `omit=dev`: **YES**
