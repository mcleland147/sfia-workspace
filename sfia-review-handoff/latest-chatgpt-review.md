# SFIA STUDIO — Review Pack FULL
## AKG-M5-L3S2-FRESH-LIVE-QA-01 — BOOTSTRAP / ENVIRONMENT READY

1. Horodatage (UTC): 2026-11-01T06:00:32Z
Campagne: AKG-M5-L3S2-FRESH-LIVE-QA-01
Cycle 9 QA CRITICAL · RUN / PRODUCT VALIDATION
Capacité V3-F05 · Milestone AKG-M5 / L3-S2 OPEN
Aucune livraison Product dans ce bootstrap.

---

## 2. Git Truth

- origin/main: `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` (unchanged vs baseline)
- PR #632 / #634 MERGED (Product A+B+D + doc truth-sync)
- Fresh WT: `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01` @ `cd2020c8` detached
- No unintegrated Product local changes on fresh WT

---

## 3. Convergence Pre-check

Sources: template · routing · operating model · convergence · C1 · M5 · v3 30/32–35 · PRR.
Git/code > PRR. Runtime v3 NON ADOPTED. L3-S2 OPEN. G-REAL NOT GRANTED.

---

## 4. GO Morris / frontières

GO NEW QA CAMPAIGN: Fresh Project · Nora LIVE · port 3020 · continuity matrix.
NOT: Product push/PR/merge · G-REAL global · L3-S2 close · LUMEN purge · Cursor REAL default ON.

---

## 5–6. Ancien LUMEN préservé + processus arrêté

| Champ | Valeur |
|---|---|
| Worktree historique | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` |
| HEAD historique | `7dd49ecd…` (pre-A+B+D) |
| PID arrêtés | npm 23378 · next 23401 · next-server 23413 |
| Port | 3020 libéré puis repris par fresh |
| Product DB historique | `.../new-project-campaign-01/product/oa-product.sqlite` RETAINED |
| Nora DB historique | `.../new-project-campaign-01/product/nora-session.sqlite` RETAINED |
| LUMEN projectId | `prj:6d0696db-eff0-41c7-a081-3bc71611cc6c` |
| Active attempts at stop | 0 |
| Backup VACUUM INTO | `.../backups/pre-fresh-qa-20261101T055654Z/` |
| Status | HISTORICAL / RETAINED — aucune purge |

---

## 7. Nouveau runtime

- WT: `sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01`
- HEAD: `cd2020c8`
- Mode: `npm run build` + `npm start` (preflight + next start --port 3020)
- Preflight: **STUDIO RUNTIME PROFILE READY** · authority PASS · cursorReal **OFF** · exclusive OFF
- URL: http://localhost:3020/studio
- Listen PID (current): see runtime-logs / lsof :3020

---

## 8. DB isolées

- Product: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/product/oa-product.sqlite` (créée au premier write)
- Nora: `.../akg-m5-l3s2-fresh-live-qa-01/product/nora-session.sqlite`
- ≠ chemins LUMEN
- SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=0
- SFIA_STUDIO_CURSOR_REAL=0

---

## 9. Nora LIVE

- OPENAI_API_KEY: SET (non divulgué)
- OPENAI_MODEL: gpt-5.6-luna (config)
- OPS1_CONVERSATION_PROVIDER: unset (≠ fake) → LIVE path when resolving provider
- FakeConversationProvider: NOT forced
- LIVE HTTP turn: **NOT YET EXERCISED** (auth/Pilot project pending)
- Verdict LIVE: **CONFIGURED / NOT VERIFIED IN DIALOGUE**

---

## 10. Port 3020

- Ancien processus arrêté gracieusement (SIGTERM)
- Fresh instance listening · `/login` HTTP 200 · `/studio` HTTP 307 (auth redirect)

---

## 11. Configuration sans secrets

Auth Better Auth + GitHub OAuth callback `http://localhost:3020/api/auth/callback/github` (réutilisation App existante).
Aucune clé dans ce pack. `.env.local` gitignored.

---

## 12. Nouveau Project ID

**NOT CREATED** — création réservée au Pilote/Morris via UI authentifiée.
QA-01: PENDING Pilot.

---

## 13–16. Matrice QA-01…15

| ID | Statut |
|---|---|
| QA-01 Fresh Project | NOT EXERCISED (Pilot pending) |
| QA-02 Nora LIVE cognition | NOT EXERCISED |
| QA-03…QA-15 | NOT EXERCISED |

Bootstrap only — **ne pas annoncer campagne entièrement validée**.

---

## 17. Fake/Real

- OpenAI: LIVE configured, dialogue not yet proven
- Cursor Product REAL: OFF
- Operator Cursor ≠ Studio Cursor REAL
- G-REAL NOT GRANTED
- Runtime :3020 fresh ≠ LUMEN

---

## 18–20. Gaps / corrections / dette

L3-S2 OPEN exits remain for later matrix steps.
No Product defect demonstrated in bootstrap.
No Product patch proposed.
No R24/Roadmap mutation (NO SEMANTIC IMPACT this bootstrap).

---

## 21. Git Review Index

| Ref | Role |
|---|---|
| cd2020c8 | main / fresh WT HEAD |
| 7dd49ecd | historical LUMEN runtime HEAD |
| pre-fresh-qa-20261101T055654Z | LUMEN DB backup |

---

## 22. R24

NO SEMANTIC IMPACT — QA bootstrap only.

---

## 23. Runtime final (bootstrap)

Fresh Studio UP on :3020 · LUMEN retained offline · DBs isolated · Pilot login required next.

---

## 24. Verdict

**FRESH LIVE QA ENVIRONMENT READY**
**PILOT PROJECT CREATION PENDING**

---

## 25. Instruction de reprise

1. Pilote: ouvrir http://localhost:3020/login → GitHub auth → /studio
2. Créer UN nouveau Project (≠ LUMEN)
3. Capturer projectId / workspaceKey
4. Enchaîner QA-01 puis QA-02 dans la même campagne
5. Ne pas activer CURSOR_REAL sans scénario gouverné
6. Ne pas toucher aux DB LUMEN

Safari a été lancé vers /login (si permissions Mac OK).
IDE browser MCP ne peut pas atteindre localhost host — preuve HTTP via curl.
