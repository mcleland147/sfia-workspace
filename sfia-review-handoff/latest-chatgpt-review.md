# SFIA Studio Next — R5 / ML3 — RCT-02 Publication Git correctif accepté
## Review Pack LIGHT — Cycle Delivery / Git publish only

**Date UTC:** 2026-11-06T21:15:55Z
**GO Morris:** AUTORISÉ — COMMIT + PUSH PROJET BORNÉ (aucune nouvelle correction fonctionnelle)
**Branche projet:** sfia/next-ml3-rct02-correctifs
**SHA initial (remote avant push):** b9047a48609c0d2c11b89ec13e3d2ab79b1b54bc
**SHA publié:** `d646d42addb5a4c4a3cab441e9e39018d85fae70`
**Remote vérifié:** `d646d42addb5a4c4a3cab441e9e39018d85fae70`
**Base ML3 originelle:** ba831b25bc182f755be749243f256dbf7d5a1ca1
**origin/main observé:** 7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480

**Review Pack Full accepté (réf.):**
- Branche: sfia/review-handoff
- Commit: `51891368fc0a0a2fe66af3cbf0310b9b1dd26971`
- Blob: `899e58305693c4cd275e4ce04e81ff01803139b6`
- Fichier: sfia-review-handoff/latest-chatgpt-review.md

**Verdict:** PROJECT CORRECTIVE PUSH VERIFIED — READY FOR NEXT MORRIS GATE

Ne signifie PAS: PR · merge · RECETTE deploy · STABLE · LIVE OpenAI · ML3 CLOSED · ADOPTED.

---

## 1. Périmètre exact du GO

Publication Git du macro-lot correctif C01–C08 déjà implémenté, testé et accepté en Critical Review Full.
Aucune nouvelle correction fonctionnelle pendant ce cycle.

Allowlist publiée (10 fichiers) — exclus: .tmp-sfia-review/, .env*, method/, prompts/, SEF/roadmap/décisions, hors allowlist.

---

## 2. Git Truth Check initial

- Workspace: /Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs
- Branche active: sfia/next-ml3-rct02-correctifs @ b9047a48609c0d2c11b89ec13e3d2ab79b1b54bc
- origin/sfia/next-ml3-rct02-correctifs: b9047a48609c0d2c11b89ec13e3d2ab79b1b54bc (confirmé avant push)
- origin/sfia/review-handoff: 51891368fc0a0a2fe66af3cbf0310b9b1dd26971
- Gates présents localement: isSpecimenOrHistoricalFraming, refusesOrWithholdsAct
- Diff local aligné sur le Review Pack Full accepté (mêmes chemins allowlist)

---

## 3. Contrôles prépublication

- git diff --check allowlist: PASS (EOF blank lines docs normalisés — hygiène publication uniquement)
- Secrets: aucun secret introduit (mentions OPENAI_API_KEY = lecture env / motif d'erreur préexistant)
- Unit: 47 passed (ml3-rct02-intent + cki-intent + b13-divergence)
- PG Critical Review: 9 passed
- PG ml3-pilotage: 44 passed
- lint: No ESLint warnings or errors
- tsc --noEmit: PASS
- build: PASS
- Aucun changement fonctionnel introduit pendant la publication

### Preuves unit (extrait)

```

 ✓ tests/unit/ml3-rct02-intent.test.ts (13 tests) 10ms
 ✓ tests/unit/ml3-cki-intent.test.ts (10 tests) 9ms
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T21:14:12.389Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_dacdafad-b669-440c-9d94-5c79dbba1dbb","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T21:14:12.390Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_dacdafad-b669-440c-9d94-5c79dbba1dbb","attempt_id":"att_59631a68-32cb-4dba-8ce1-ccd9c68a556b","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/ml3-b13-divergence.test.ts (24 tests) 6ms

 Test Files  3 passed (3)
      Tests  47 passed (47)
   Start at  22:14:11
   Duration  836ms (transform 90ms, setup 0ms, collect 450ms, tests 26ms, environment 0ms, prepare 67ms)

```

### Preuves PG CR (extrait)

```
stderr | tests/integration/ml3-pilotage.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml3-pilotage.pg.test.ts (44 tests | 35 skipped) 425ms

 Test Files  1 passed (1)
      Tests  9 passed | 35 skipped (44)
   Start at  22:14:12
   Duration  822ms (transform 95ms, setup 0ms, collect 306ms, tests 425ms, environment 0ms, prepare 23ms)

```

### Preuves PG full (extrait)

```
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T21:14:15.634Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.replay","component":"d3.conversation","request_id":"req_ff8f2f58-ab88-4031-bd3f-a7ae79775a91","operation_id":"op_6fef256a-0cca-42e5-8400-bc02f1ab4245","outcome":"UNKNOWN","meta":{"status":"UNKNOWN","reconciled":false}}
 ✓ tests/integration/ml3-pilotage.pg.test.ts (44 tests) 1998ms

 Test Files  1 passed (1)
      Tests  44 passed (44)
   Start at  22:14:13
   Duration  2.34s (transform 129ms, setup 0ms, collect 250ms, tests 2.00s, environment 0ms, prepare 24ms)

```

### Lint (extrait)

```
`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

---

## 4. Commit et push

### Commit

```
d646d42a fix(next): harden Nora conversational authority after ML3 RCT-02
 .../construction/delivery-history.md               |  46 ++
 .../specification-technique.md                     |  39 ++
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  19 +
 .../web/src/domains/conversation/nora-adapter.ts   |   9 +-
 .../web/src/domains/decisions/divergence-assist.ts |  19 +-
 .../src/domains/pilotage/conversation-authority.ts |  78 ++++
 .../web/src/domains/pilotage/intent.ts             | 499 ++++++++++++++++++---
 .../web/src/domains/pilotage/nora-context.ts       |  23 +-
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 380 ++++++++++++++++
 .../web/tests/unit/ml3-rct02-intent.test.ts        | 191 ++++++++
 10 files changed, 1239 insertions(+), 64 deletions(-)
```

Message: fix(next): harden Nora conversational authority after ML3 RCT-02

### Fichiers exacts

```
projects/sfia-studio-next/construction/delivery-history.md
projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
```

### Push fast-forward

```
To https://github.com/mcleland147/sfia-workspace.git
   b9047a48..d646d42a  HEAD -> sfia/next-ml3-rct02-correctifs
```

Lien: https://github.com/mcleland147/sfia-workspace/commit/d646d42addb5a4c4a3cab441e9e39018d85fae70

Pas de --force / --force-with-lease. Pas de PR.

---

## 5. Vérification distante

- LOCAL == REMOTE == `d646d42addb5a4c4a3cab441e9e39018d85fae70` : OK
- Ascendance de b9047a48609c0d2c11b89ec13e3d2ab79b1b54bc: OK
- Rapport recette RCT-02 toujours présent sur remote: OK
- Test unitaire ml3-rct02-intent.test.ts visible: OK
- Gates isSpecimenOrHistoricalFraming / refusesOrWithholdsAct visibles sur remote intent.ts: OK
- Liste fichiers remote == allowlist: OK

---

## 6. CI

État au moment du pack (poll GitHub check-runs + Actions):

```
{"runs":[],"total":0}
```

gh run list --branch sfia/next-ml3-rct02-correctifs: aucune run listée.

**CI: PENDING / NOT RUN** — aucun check-run déclenché encore au moment de la vérification. Ne pas inventer PASS.

---

## 7. ENV-01 et versioning

- DEV: environnement technique de publication
- RECETTE :3200 candidat ba831b25: NON MODIFIÉ
- PostgreSQL RECETTE: aucune migration / écriture
- STABLE: NOT AVAILABLE
- Product version: 0.0.0-dev / NO RELEASE
- Publication Git ≠ déploiement ≠ promotion ≠ adoption

---

## 8. Worktree final projet

```
 M .tmp-sfia-review/chatgpt-review.md
```

Seul résidu hors commit: .tmp-sfia-review/chatgpt-review.md (exclu allowlist; sera remplacé par ce Light pack avant handoff).

---

## 9. Réserves et gates suivants

Réserves persistantes (inchangées):
- LIVE Nora / campagne C01–C08: NOT EXECUTED
- R-UX-01 pending cognition indépendante: CARRIED RESERVE
- NLP universel: NOT CLAIMED
- Décisions historiques RECETTE polluées: non migrées

Gates NON acquis ici: PR, merge, main, deploy RECETTE, LIVE OpenAI, STABLE, clôture ML3.

Suite proposée: revue ChatGPT du SHA distant + CI, puis décision Morris distincte sur candidat RECETTE et campagne LIVE ciblée.

---

## 10. Verdict

PROJECT CORRECTIVE PUSH VERIFIED — READY FOR NEXT MORRIS GATE

Morris décide ; Cursor exécute ; Git prouve. Publication ≠ adoption.
