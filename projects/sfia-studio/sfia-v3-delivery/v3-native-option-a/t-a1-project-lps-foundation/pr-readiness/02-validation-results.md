# 02 — Résultats de validation

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 10:02:13→10:02:35 CEST (Europe/Paris) |
| **Worktree** | `sfia-workspace-v3-native-option-a-tech` |

| Contrôle | Exit | Durée | Résultat |
|----------|------|-------|----------|
| Truth Check (branch/HEAD/main/merge-base/no prior PR/handoff blob/861ca76 mutex) | 0 | <2s | PASS |
| `npx vitest run __tests__/oa/project` | 0 | 0.40s | **30/30** PASS |
| `npx vitest run __tests__/oa/doctrine` | 0 | 0.29s | **28/28** PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 0 | 0.40s | **10/10** PASS |
| `npx tsc --noEmit` | 0 | <1s | PASS |
| `npx next lint --dir lib/oa/project --dir __tests__/oa/project` | 0 | <2s | PASS |
| `npx next build` | 0 | ~10s | PASS |
| `git diff --check origin/main...HEAD` | 0 | <1s | PASS |
| Grep secrets in diff | — | — | PASS (absents) |
| Grep SQL / migrations in diff | — | — | PASS (absents) |
| Grep `package.json` / lock in diff | — | — | PASS (absents) |
| Modeled schemas unchanged | — | — | PASS |
| Forbidden paths (`method/`, OPS1 runtime, sfia-context) | — | — | PASS (absents) |

## Notes

- Mention documentaire `method/**` PROTECTED dans scope docs = anti-claim, pas modification `method/`.
- Correction concurrence `861ca76` déjà sur la branche avant ce pack.
