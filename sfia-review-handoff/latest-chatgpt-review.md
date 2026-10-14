# SFIA STUDIO — P6 HUMAN QA T2 ENVIRONMENT PRE-CHECK
## Review Pack LIGHT — ChatGPT Human QA T2 Environment Review

A. Horodatage Europe/Paris: **2026-10-14 12:48:59 CEST**

B. GO Morris: **AUTHORIZED / CONSUMED** (2026-10-14) — T1→T2 environment pre-check read-only. Aucun Human QA exécuté. Aucun message Nora. Aucun OpenAI. Aucun restart. Aucune mutation Product. Seule écriture: Review Pack + Handoff L3.

C. Cycle / profil / CKC
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P6 — GLOBAL INTEGRATED PRODUCT QA
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Cycle: 9 — QA / validation
- Profil: STANDARD
- Typologie: QA / ENVIRONMENT PRE-CHECK / READ-ONLY
- CKC: ckc:studio:qa-validation

D. Git Truth initial (inspection worktree)
- Access path: `/Users/morris/Projects/sfia-workspace-p6-evidence-o2`
- Remote: `https://github.com/mcleland147/sfia-workspace.git`
- Branch: `delivery/sfia-studio-p6-o2-linked-evidence-wiring`
- HEAD: `22e699dab2a7cf484af3c5ddfcb7b9e598420adb`
- Dirty: `.tmp-sfia-review/chatgpt-review.md` only
- Staged: none
- remote main (gh API, no fetch): **`5e139627ff515cd36da5ce12d2c22f935adb139f`** — Merge PR #581
- Note: this inspection WT ≠ active Studio WT (VÉRIFIÉ)

E. Convergence
- Option B / O2: INTEGRATED ON MAIN (Git) — **NON CHARGÉS dans le runtime Studio actif**
- P6 GLOBAL: NOT PASSED
- Runtime v3: NON ADOPTED
- Project/Session existants: KEEP (trouvés)
- Harnesses REAL: files `*.real.test.ts` présents dans runtime WT; campaign harness classification historique = DO_NOT_COMMIT / opt-in (HISTORIQUE)
- Archive/ledger campagne: READ-ONLY harvest possible
- Trajectoire: Pre-check → décision Morris → T2 Human QA (pas exécuté ici)

F. Sources consultées
- Convergence build doctrine / roadmap (présence)
- Product completion cadrage (présence)
- Doctrine v3 33 / 35 (présence)
- Product simplification 01 (P1) + 02 (P2) + 07 P6
- CKC 09-qa-validation
- scripts/sfia/README.md
- Current handoff tip `96bd9fd2` (PR581 merge pack)
- Historical handoff `552a2297` (P6 campaign continuation / HQ queue) — lu via `git show` sans écrasement
- Code path resolvers: `paths.ts` product SQLite; `sessionPaths.ts` Nora session
- Campaign artefacts: `.tmp-sfia-review/p6-global-integrated-qa/` (queue, ledger, harness classification)

G. Identification processus Studio (VÉRIFIÉ)
```
lsof -nP -iTCP:3020 -sTCP:LISTEN
→ node PID 1701 LISTEN *:3020
ps: PID 1507 next dev --port 3020
    PID 1701 next-server (v15.5.20)
    PPID launcher 1446: npm run dev
Started: Wed Oct 14 07:32:12 2026 (Europe/Paris local clock)
Mode: next dev (NOT next start)
cwd (lsof -p 1507/1701 -d cwd):
  .../sfia-workspace-studio-runtime-main-bd3f440c/projects/sfia-studio/app
Log: /private/tmp/sfia-studio-runtime-main-bd3f440c-dev.log
```
Port 3020: **CONFIRMÉ** (plus une hypothèse).

H. Worktree réellement utilisé (VÉRIFIÉ)
- Absolute: `/Users/morris/Projects/sfia-workspace-studio-runtime-main-bd3f440c`
- State: **DETACHED HEAD**
- HEAD: **`bd3f440c749a059d73fb76e09bb1d0ce91e27af4`**
- Message: Merge pull request #579 …
- Working tree: clean (status empty)
- Product persistence path (open FD on PID 1701 — VÉRIFIÉ):
  `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite`
- Session sibling (file exists; not continuously open in lsof — VÉRIFIÉ existence):
  `.../hqa01-rec01-requal/product/nora-session.sqlite`
- Cross-worktree: **code** in `studio-runtime-main-bd3f440c` + **Product/Session DBs** in `p6-rec01-human-qa` (VÉRIFIÉ)

I. Baseline Git et runtime
| Ref | SHA | Statut |
|-----|-----|--------|
| remote main | 5e139627 | VÉRIFIÉ (gh API) |
| active Studio HEAD | bd3f440c (#579) | VÉRIFIÉ |
| PR #577 merge | d8ceb8ad | ancestor of bd3f440c (présumé via history; #579 consolidates 577/578 docs) |
| PR #578 merge | 44006648 | integrated before #579 |
| PR #579 | bd3f440c | = runtime HEAD |
| PR #580 Option B | aee4878d | **ABSENT du runtime** (bd3f440c..main contains it) |
| PR #581 O2 | 5e139627 | **ABSENT du runtime** |
| `app/lib/p6-campaign-evidence/` | — | **ABSENT** sur runtime WT (VÉRIFIÉ) |

Process started **before** #580/#581 merge; HEAD still bd3f440c; next **dev** since 07:32.
→ Sources on disk and process worktree: **aligned with each other**.
→ Relative to main tip: **RUNTIME BASELINE MISMATCH** (missing Option B + O2).
→ For documentary Nora substrate (P0/P1/P2 / #577+#578+#579): **PRESENT** on runtime.
→ Classification: **RUNTIME BASELINE PARTIALLY PROVEN / MISMATCH vs main tip**.

J. État Project / Cycle (VÉRIFIÉ — SQLite mode=ro)
- DB: `oa-product.sqlite` (URI `?mode=ro`)
- Project ID: `prj:e66fd58c-03f6-41df-90c8-4ae267926212`
- Title: **Simplification des interactions avec l’IA** (exact match)
- status: active
- activeCycleInstanceId: `cyc:trj-255a8418ee8a735f23738c46`
- Cycle: `cyc:framing` / profile Standard / status **active** / closed_at null
- Trajectory current: `trj:lr-bridge-7947b41c241a` v1
- LPS rows for project: 6
- created 2026-10-12; project updated 2026-10-13T13:07:56Z
- product DB mtime observed 2026-10-14 12:32 (UI/product touch sans nouveau transcript session — INFÉRÉ depuis mtimes)

K. Continuité Session (VÉRIFIÉ)
- Session key: `f1-default`
- `pilot_transcript_turns`: **8** (user 4 / assistant 4)
- `logical_product_turns`: **4** all status `accepted`
- `session_items`: 45 (persisted JSON items; content not dumped)
- Cycle-linked turns: 4 of 8 bound to framing cycle
- Session DB mtime: 2026-10-13 15:07:56
- Session file not held open continuously by next-server at inspection time (opens on demand — VÉRIFIÉ via lsof)

L. Historique T1 (qualifié sans dump de contenu)
| Evidence | Class |
|----------|-------|
| Capture Morris: Conversation active, Cadrage, T1 maxTurns puis synthèse P1 | OBSERVÉ SUR CAPTURE (rapport GO) |
| Marker `maxTurns` in transcript: count=1 | VÉRIFIÉ |
| Marker cadrage filename (`01-chat-first-…-cadrage`): count=2 | VÉRIFIÉ |
| Marker functional P2 filename: count=0 | VÉRIFIÉ (T2 not yet in transcript) |
| Last assistant turn 2026-10-13: 1804 chars (substantial) | VÉRIFIÉ |
| Prior assistant on cycle: 118 chars (short — compatible with interrupted/maxTurns path) | VÉRIFIÉ / HISTORIQUE aligné capture |
| Deux logical turns cycle-bound (fe4526…, ff0b59…) | VÉRIFIÉ |

→ T1 human observation can be **conserved as historical Human QA observation** for narrative continuity; it is **not** automatically a cognitive proof for a future REAL turn without re-observation.

M. Readiness T2
- P1 path present in runtime WT: `product-simplification/01-chat-first-product-simplification-cadrage.md` (VÉRIFIÉ)
- P2 path present: `product-simplification/02-chat-first-product-simplification-functional-operating-model.md` (VÉRIFIÉ)
- Project + framing cycle + session `f1-default` allow conversational continuation **if** Morris sends a natural T2 message (NOT done here)
- Git read mechanisms for documentary review: present in #577+#578 substrate on this runtime (VÉRIFIÉ presence of docs; mechanism quality = HISTORIQUE PR claims, not re-tested)
- Restart risk: Product DB is **outside** runtime WT via configured override path; restart without same `SFIA_STUDIO_PRODUCT_DB_PATH` / session override would attach to a different default `.sfia-exec/product` under the runtime WT (VÉRIFIÉ path split; env key dump avoided)
- Architecture parallèle: **NON nécessaire** pour reprendre T2 conversationnel

N. Evidence / O2
- Historical campaign dir: `/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/p6-global-integrated-qa/`
- human-qa-queue.json: finalQueueCount=19; executedByMorris=false; item P6-SC-MIN-09 Guided Document Review = WAITING HUMAN QA (VÉRIFIÉ)
- evidence-ledger.jsonl: present (historical harvest; not rewritten)
- O2 collector / `p6-campaign-evidence`: **ABSENT** from active runtime sources
- Option B cognitive ledger writers: **NOT in this process image**
- REAL harnesses: `*.real.test.ts` exist under runtime WT; campaign harness classification = DO_NOT_COMMIT / opt-in (HISTORIQUE) — **NOT executed**
- Therefore: O2 REAL linked evidence collection during T2 = **UNAVAILABLE on current process**

Answers required:
1. Morris can manually observe UI: Nora response quality, doc citation honesty, P1↔P2 cross-analysis, contradictions, maxTurns/stop behavior, continuity with prior T1 text visible in Conversation.
2. Already recoverable without instrumentation: Project/Cycle/Session metadata; transcript turn counts/timestamps/roles/lengths; historical HQ queue item MIN-09; campaign ledger file existence; Git SHAs of runtime vs main.
3. Unavailable until REAL O2 path qualified on a runtime that includes #580/#581: linkedQaRunId dual-write, QA↔cognitive cardinality proofs, Option B complete receipt conservation on this live path.
4. Next Human QA **can** proceed with **honest reserves** (documentary T2) — subject to Morris decision on runtime freshness.
5. Material blocker for *truthful O2 technical evidence*: yes (runtime mismatch). Material blocker for *conversational T2 Human observation on existing Project*: **no**, if Morris accepts reserves.

O. Fake/Real
- Scope: READ-ONLY INSPECTION
- New provider calls: ZERO
- New REAL tests: ZERO
- Entry: O2 DETERMINISTIC INTEGRATED ON MAIN (Git) — **not loaded in active Studio**
- Exit of this cycle: environment/provenance qualified
- NOT claimed: REAL BOUNDARY PROVEN, E2E REAL, P6 GLOBAL PASS, runtime v3 ADOPTED, T2 EXECUTED

P. Limites des observations
- No UI automation; capture Morris treated as OBSERVÉ SUR CAPTURE only
- No content dump of messages/documents
- ps eww did not surface SFIA_* keys on macOS; DB path proven via lsof instead
- In-memory module graph not introspected beyond process cwd/HEAD/start time
- Session open-on-demand: continuity proven from durable SQLite, not from a live FD

Q. Réserves et blockers
1. **RUNTIME ≠ main tip** (bd3f440c vs 5e139627) — MISMATCH for Option B/O2 claims
2. **Cross-worktree DB binding** — restart without same overrides risks wrong Product store
3. O2 / Option B technical evidence **not collectible** on current process
4. T1 historical observation ≠ automatic proof for next REAL turn
5. P6 GLOBAL still NOT PASSED
6. No Studio restart authorized in this GO (if Morris wants main tip: separate GO)

R. Git Truth final (inspection WT)
- Branch/HEAD unchanged: delivery O2 @ `22e699da`
- Dirty: `.tmp-sfia-review/chatgpt-review.md` only (this pack)
- No product/code/runtime mutation
- Active Studio WT untouched (read-only git status there was clean)

### Git Review Index
| Item | Value |
|------|-------|
| remote main | 5e139627 |
| Studio WT | /Users/morris/Projects/sfia-workspace-studio-runtime-main-bd3f440c |
| Studio HEAD | bd3f440c |
| Product DB | .../p6-rec01-human-qa/.../hqa01-rec01-requal/product/oa-product.sqlite |
| Session DB | .../nora-session.sqlite |
| Project | prj:e66fd58c-03f6-41df-90c8-4ae267926212 |
| Cycle | cyc:trj-255a8418ee8a735f23738c46 (framing/active) |
| Session | f1-default |
| P1 | product-simplification/01-…-cadrage.md |
| P2 | product-simplification/02-…-functional-operating-model.md |
| HQ item | P6-SC-MIN-09 WAITING HUMAN QA |
| Entry handoff | 96bd9fd2 |
| Historical HQ handoff | 552a2297 |

S. Verdict
**STUDIO HUMAN QA T2 ENVIRONMENT PRE-CHECK PASS WITH RESERVES / MORRIS DECISION REQUIRED.**

Runtime classification: **RUNTIME BASELINE PARTIALLY PROVEN / MISMATCH vs main tip**.
Project/Session: **READY for conversational T2 Human observation** under reserves.
O2 technical capture on this process: **NOT READY**.

NOT declared: T2 EXECUTED · T2 PASS · T3 · P6 GLOBAL PASS · READY FOR REAL · REAL BOUNDARY PROVEN · RUNTIME V3 ADOPTED.

T. Prochaine décision Morris
Choisir **une** interaction à la fois:
1. **Proceed T2 now** on current Studio (bd3f440c + existing Project/Session) — Human documentary observation only; document O2/Option B absence as reserve; OR
2. **Separate GO** to restart/repoint Studio to main `5e139627` with **same** Product/Session DB overrides, then re-precheck briefly, then T2; OR
3. Defer T2 until O2 REAL collection path is explicitly gated.

Recommend (non-binding): if T2 goal is Morris observation of Nora documentary behavior, option 1 is viable with reserves; if T2 must also produce O2-linked technical evidence, option 2+O2 gate required first.

U. Instruction ChatGPT
Lire le handoff distant. Vérifier processus :3020, worktree bd3f440c, DB cross-worktree, Project title/id, Session f1-default, T1 markers, absence O2 sur runtime, réserves. Rendre **CHATGPT HUMAN QA T2 ENVIRONMENT REVIEW**. Si PASS: préparer avec Morris **une** interaction naturelle T2 dans le projet existant — oracles QA ≠ instructions soufflant les réponses à Nora.
