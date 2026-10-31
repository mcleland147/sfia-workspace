# CONTROLLED-STUDIO-START-T0-REPREFLIGHT-01 — ChatGPT Critical Review Pack (FULL)

**Date UTC:** 2026-10-31T14:35:00Z
**Cycle:** 12 — Observabilité / RUN readiness · exit control Cycle 9 T0 · CRITICAL
**GO Morris consumed:** AKG-M5 L3-S2 CONTROLLED STUDIO START + T0 RE-PREFLIGHT (2026-10-31)
**Verdict:** `STUDIO 3020 ENVIRONMENT VERIFIED — READY FOR MORRIS T1 CAMPAIGN GATE`

**Anti-claims:** ≠ T1 STARTED · ≠ LUMEN CREATED · ≠ G-REAL GRANTED · ≠ Cursor REAL EXECUTION TESTED · ≠ Nora LIVE EMIT PROVEN · ≠ R-SRV-RESTART PROVEN · ≠ L3-S2 CLOSED · ≠ L3 GLOBAL CLOSED · ≠ Runtime v3 ADOPTED · ≠ READY FOR CURSOR REAL EXECUTION

---

## 1. GO Morris (scope)

Autorisé: préparation locale · backups campagne · start unique `:3020` · T0 non mutatif · Review Pack/Handoff.
Interdit: LUMEN · Nora dialogue · Cursor REAL execute · EC · Product/PRR/Roadmap edits · project git commit/push · BALISE mutation · OA exclusive ON.

## 2. Git Truth

| Champ | Valeur |
|---|---|
| `origin/main` / ls-remote | **`7dd49ecd0699a3de9c03759a8fe4637baf31d149`** — BASELINE_MATCH |
| Prior handoff | `81bb7d2d…` / blob `850ef25b…` — VERIFIED |
| Agent WT HEAD | `1c3a8d9e…` — **NOT USED** (obsolete pre-#630) |
| Execution worktree | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` |
| Checkout | **detached HEAD `7dd49ecd…`** (created isolated; existing WTs unmodified) |
| #630 / #631 on disk | symbols `splitPlainTextWithMarkdownTables` / Roadmap tip GI-NAP MERGED — **PRESENT** |

## 3. Sources / Convergence

Processus SFIA v2.6 + CKC 04 candidate guidance · Convergence doctrine/roadmap · C1 · AKG-M5 trajectory · V3 30/32/33/34/35 · PRR README/03/05/06/07/08/09 · code CURRENT: package.json `dev`=`next dev --port 3020` · `@next/env` · provider · Cursor REAL gateway · Better Auth · Product/Nora SQLite · `studio-runtime-preflight.ts`.

**Convergence:** L3-S2 OPEN · G-REAL NOT GRANTED · G-ACTIVATION NOT GRANTED · runtime v3 NON ADOPTED · réserves TEST-15 / EP-S2-05 / EP-S2-08 / R-LIVE-EMIT / R-STOP-BROWSER / R-SRV-RESTART inchangées.

## 4. Worktree + configuration locale

| Item | Detail |
|---|---|
| Path | `…/sfia-workspace-run-akg-m5-l3s2-campaign-3020` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| `.env.local` | **local copy** (mode `600`, gitignored `.env.*`) — **≠** same inode as shared source; shared source **untouched** |
| Campaign Product DB | `…/new-project-campaign-01/product/oa-product.sqlite` |
| Campaign Nora DB | `…/new-project-campaign-01/product/nora-session.sqlite` |
| `SFIA_STUDIO_CURSOR_REAL` | `1` |
| `OPS1_CONVERSATION_PROVIDER` | unset (≠ fake) |
| `OPENAI_MODEL` | `gpt-5.6-luna` · API key PRESENT |
| `BETTER_AUTH_URL` | `http://localhost:3020` |
| Managed root | `…/sfia-studio/.sfia-exec/managed-repos` |
| OA exclusive | unset/OFF |
| Det boundary | unset |

`npm ci` exécuté une fois dans le WT (lockfile inchangé) — dépendances disponibles.

## 5. Backups campagne (cohérents SQLite API)

| Item | Valeur |
|---|---|
| Timestamp UTC | `20261031T141927Z` |
| Dir | `…/new-project-campaign-01/backups/pre-start-20261031T141927Z/` |
| Method | `sqlite3.Connection.backup` (mode=ro source → dest) — **≠** naive copy |
| Files | `oa-product.sqlite` (9531392) · `nora-session.sqlite` (876544) |
| Verify | backup Product `oa_projects` count **34** |
| Writers pre-backup | NONE on campaign + BALISE |
| Disk free | ~109 GB |

BALISE paths séparés (`…/.sfia-exec/live-e2e-01/…`) · `same_file_campaign_vs_balise=False` · non ciblés par `.env.local` campagne.

## 6. Controlled start — incidents + correction

### Attempt 1 (INVALID — aborted)
- `nohup npm run dev` puis shell tool start hérité de l’env agent Cursor.
- Process env pollué: `SFIA_STUDIO_*_DB_PATH` → **live-e2e-01 (BALISE)** · `SFIA_STUDIO_CURSOR_REAL=0`.
- Cause: Next/process env hérité **override** `.env.local`.
- Action: **stop immédiat** des PID connus (20524/20506/20494/20474) avant ouverture SQLite observée.
- BALISE/campaign: aucun writer résiduel après stop.

### Attempt 2 (CURRENT — ACTIVE)
- Start: `env -i` (HOME/USER/PATH/TMPDIR/LANG/TERM only) + `npm run dev` depuis app WT.
- Log: `Environments: .env.local` · Next 15.5.20 · **Ready in 3.5s**.
- Log file: `…/runtime-logs/studio-3020-20261031T142600Z-cleanenv.log`.

## 7. T0 results

### T0.1 Process identity — PASS
| Field | Value |
|---|---|
| Listener | TCP `*:3020` (IPv6) — **1** instance |
| PID | **23413** (`next-server v15.5.20`) |
| Parent | 23401 `next dev --port 3020` |
| cwd | `…/run-akg-m5-l3s2-campaign-3020/projects/sfia-studio/app` |
| HEAD | `7dd49ecd…` |
| #630 symbols | PRESENT on disk |

### T0.2 HTTP — PASS (Auth redirect expected)
| URL | Result |
|---|---|
| GET `/login` | **200** |
| GET `/studio` | **307** → `/login?error=NO_SESSION&from=%2Fstudio` |
| Mutative / fabricated session | **none** |

### T0.3 Nora — LIVE CONFIGURED / LIVE BEHAVIOR NOT TESTED
- `.env.local` + `@next/env` `loadEnvConfig` (same as Next): OpenAI key+model present · provider ≠ fake · unset `OPS1_CONVERSATION_PROVIDER` ⇒ `resolveConversationProvider` selects OpenAI when secrets available (code CURRENT).
- Clean `env -i` start ⇒ no process override toward Fake.
- **No OpenAI call** this cycle.

### T0.4 Cursor — REAL CONFIGURED / REAL EXECUTION NOT TESTED
- `.env.local` `SFIA_STUDIO_CURSOR_REAL=1` · det boundary unset.
- `node --import tsx scripts/studio-runtime-preflight.ts` (loads `@next/env`): **STUDIO RUNTIME PROFILE READY** · `cursorReal: READY` · `deterministic⊕REAL: PASS` · authority PASS · managedRoot campaign path.
- `realBoundaryConstructed=false` **by design** when READY (side-effect-free preflight).
- **No Attempt / no Cursor launch.**

### T0.5 Auth — PASS (config + endpoints)
- Better Auth URL `http://localhost:3020` · secrets PRESENT · GitHub OAuth keys PRESENT · allowlist set.
- `/login` 200 · `/studio` NO_SESSION redirect · `/api/auth/ok` 200.
- No OAuth automation · no fabricated session.

### T0.6 Persistence — PASS
- Campaign DBs exist · absolute paths in `.env.local` · count Product projects **34** (unchanged intentional; not wiped).
- Backups present/verified.
- BALISE store separate · not in campaign env paths · no writer on BALISE after start.
- Note: next-server OS environ (KERN_PROCARGS2) does **not** mirror dotenv keys (Next worker); effective server config evidenced by clean start + `.env.local` + `loadEnvConfig` equivalence + runtime preflight — **not** by ps-env dump of worker.

### T0.7 Process durability — PASS
- Server remains up after launcher returns (Shell background).
- Re-check: PID 23413 listening · `/login` 200 · etime > 3 min at final snapshot.
- **Not** stopped for handoff.
- ≠ R-SRV-RESTART PROVEN.

### T0.8 Audit — PASS
- No LUMEN / no Nora turn / no Cursor REAL / no new EC intentional create.
- No versioned Product/docs commit.
- Local only: worktree · `.env.local` · `node_modules` · `.next` · backups · logs · this pack.

## 8. R23 (frontiers)

| Frontier | Config | Component | Risk | Proof | Gap |
|---|---|---|---|---|---|
| Next process | env -i + `.env.local` | next-server 23413 | env pollution | BEHAVIOR: clean start after abort | worker OS-env opacity |
| Env loader | `@next/env` | loadEnvConfig | override by parent env | COVERAGE via script+file | — |
| Auth | Better Auth @3020 | `/login` `/studio` | session | HTTP 200/307 NO_SESSION | login UX not exercised |
| Nora provider | OpenAI LIVE cfg | resolveConversationProvider | accidental Fake | DOCUMENTED+configured | LIVE emit KNOWN GAP |
| Cursor gateway | REAL=1 | StudioCursorRealLaunchGateway | premature REAL | CONFIGURED via preflight READY | G-REAL / exec KNOWN GAP |
| Product OA | campaign sqlite | Truth C | wrong DB / BALISE | path+backup+isolation | writers idle until Product use |
| Nora Memory B | campaign nora sqlite | session DB | cwd drift | absolute path set | — |

## 9. R24

**NO SEMANTIC PRODUCT IMPACT.** No PRR/Roadmap/code changes. No digest refresh.

## 10. Local artifacts (non-git)

- Worktree: `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020`
- `.env.local` (gitignored)
- Backups: `…/backups/pre-start-20261031T141927Z/`
- Logs: `…/runtime-logs/studio-3020-20261031T142600Z-cleanenv.log` (+ aborted prior logs)
- Pack: `.tmp-sfia-review/chatgpt-review.md`

**Versioned project files modified:** none expected / none committed.

## 11. Gates remaining (Morris)

1. **T1 CreateProject LUMEN** — NOT AUTHORIZED by this GO.
2. **G-REAL** — NOT GRANTED.
3. Human Auth login for Pilote session on this instance.
4. Functional reserves unchanged (TEST-15, EP-S2-05/08, R-LIVE-EMIT, etc.).

## 12. Server status at handoff

**ACTIVE** on `http://localhost:3020` · PID **23413** · cwd run WT · HEAD `7dd49ecd` · campaign `.env.local` · BALISE not targeted.

## 13. Instruction ChatGPT

1. Confirmer verdict VERIFIED + server ACTIVE.
2. Confirmer incidente env pollution corrigée (attempt1 abort → attempt2 env -i).
3. Proposer gate Morris **T1 only** (pas REAL).
4. Rappeler REAL ENABLED ≠ G-REAL.

**Handoff:** REQUIRED / publish-in-cycle.
