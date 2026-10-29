# ChatGPT Critical Review Pack — FULL
## AKG-M5 L3-S2 LIVE-E2E-01 · CYCLE 9 — LIVE RUNTIME / AUTH / NORA QUALIFICATION + G10-A

**UTC authored:** 2026-10-29T10:43:13Z
**Morris decisions consumed:**
- G10 POSTURE A — CURSOR REAL WITHOUT SANDBOX (RISK ACCEPTED BY MORRIS)
- Prior: CHOICE-B · REAL=1 · isolated managed base · dedicated private test repo

**Verdict (Cursor local):** LIVE CONNECTIVITY PARTIAL — REMAINING BLOCKERS DOCUMENTED

**Anti-claims:** Cursor REAL NOT EXECUTED · G-REAL NOT GRANTED · No LIVE E2E completion · No ExecutionAttempt · No test-repo mutation · EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · Runtime v3 NON ADOPTED · G10 ≠ confinement proven · No secrets disclosed

---

## 1. UTC
2026-10-29T10:43:13Z

## 2. Git Truth
| Field | Value |
|---|---|
| Investigation WT | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization` |
| Branch | `docs/akg-m5-l3s2-r24-postmerge-capitalization` |
| HEAD | `cf940d84ea9e78602131fe97f75cad0c5abddac9` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Expected | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| MAIN_OK | YES |
| Porcelain | `M .tmp-sfia-review/chatgpt-review.md` |
| Prior handoff | tip `98d0bd15…` blob `15393926…` |
| Test repo HEAD | `b63983420823012912180d5880e51c96c2bd0821` (unchanged · no mutation) |

## 3. Convergence qualification
ACTIVE AKG-M5 / L3-S2 · EP-S2-08 PARTIAL · CKC `04-qa-validation.md` CANDIDATE only · R23 code prevail · R24 config/ops only · Studio v3 NON ADOPTED · SFIA v2.6 external process.

## 4. Morris G10 decision
| Item | Record |
|---|---|
| Posture | **A — CURSOR REAL WITHOUT SANDBOX** |
| Gateway | keep `--sandbox disabled --force` |
| Classification | **G10 = RISK ACCEPTED BY MORRIS** |
| NOT | G10 = TECHNICAL CONFINEMENT PROVEN |
| Does not authorize | unrestricted ops · remote push · first agent launch · G-REAL |

Residual risks accepted: host FS access beyond managed checkout · local secrets exposure · unintended writes · unrestricted process-identity capabilities.

## 5. Current LIVE configuration (revalidated)
| Item | Status |
|---|---|
| Private test repo `mcleland147/sfia-studio-live-e2e` | YES · private · HEAD `b63983420823012912180d5880e51c96c2bd0821` |
| Managed clone identity-matched | YES · `…/mcleland147__sfia-studio-live-e2e` |
| Product resolver (prior) | VERIFIED |
| Managed root env | LIVE base configured |
| `SFIA_STUDIO_CURSOR_REAL` | `1` |
| Deterministic boundary | OFF / ABSENT |
| OpenAI key+model | PRESENT · model `gpt-5.6-luna` |
| Better Auth / GitHub OAuth config | PRESENT · URL `http://localhost:3020` |
| OPS1_CONVERSATION_PROVIDER | ABSENT → live OpenAI path (not fake) |
| **Product DB path** | still under **historical P6 HQA** `…/product-db/oa-product.sqlite` |
| **Nora session DB path** | still under **historical P6 HQA** `…/nora-session/nora-session.sqlite` |

## 6. Runtime startup evidence
| Step | Result |
|---|---|
| `npm run preflight:runtime` | PASS · authority PASS · managedRoot LIVE base · cursorReal READY · DET⊕REAL PASS · `realBoundaryConstructed: false` |
| `npm run build` | PASS (exit 0 · Next 15.5.20) |
| `npm start` → `:3020` | PASS · Ready · listening |
| `/studio` | **307** → `/login?error=NO_SESSION&from=%2Fstudio` |
| `/login` | **200** |
| `/api/auth/get-session` | **200** body `null` |
| `/api/auth/github-start` | **307** → GitHub OAuth authorize (LIVE app redirect registered) |
| Playwright fake webServer | **NOT used** as LIVE evidence |

## 7. Auth LIVE evidence
| Check | Result |
|---|---|
| Authenticated session | **ABSENT** |
| Browser | login page + GitHub OAuth sign-in challenge reached |
| Interactive OAuth | **REQUIRES MORRIS** (no credential automation) |
| Pilote identity | NOT OBSERVED |
| `/studio` access | BLOCKED without session |
| Assistant send without session | **307** → login NO_SESSION (no ExecutionAttempt) |
| **Better Auth LIVE** | **PARTIAL** — endpoints live; session not established |

## 8. Nora LIVE evidence
| Layer | Result |
|---|---|
| Fake provider forced? | NO (`OPS1` ABSENT) |
| Product `resolveConversationProvider()` | `providerId=openai` · model `gpt-5.6-luna` |
| Bounded provider smoke | **PASS** · reply `LIVE_OK` · ~2.9s · usage present |
| Authenticated Studio conversational path | **BLOCKED** (NO_SESSION) |
| ExecutionAttempt created? | NO |
| Classification | **Provider LIVE CONNECTIVITY PROVEN** · **Studio Nora UX path NOT PROVEN** |

## 9. Cursor gateway configuration
| Item | Evidence |
|---|---|
| REAL=1 | YES |
| DET boundary | OFF |
| Executable | `/Applications/Cursor.app/.../bin/cursor` v3.27.22 present+exec |
| Gateway argv (source) | `agent --print --workspace … --trust --sandbox disabled --force` |
| Gateway modified this cycle | **NO** |
| R2 pathless guard | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` preserved |
| Agent launch | **NOT PERFORMED** |

## 10. Risks accepted and residual
- G10-A residual host-access risk: **ACCEPTED BY MORRIS**.
- OA/Nora SQLite still on HQA paths: **isolation gap** for LIVE campaign data (not rewritten this cycle — out of authorized scope).
- Unauthenticated Studio path: blocks Pilote UX proof until OAuth.
- Folder/repo isolation ≠ OS sandbox (unchanged).

## 11. Proposed autonomous G-REAL mission (NOT AUTHORIZED / NOT LAUNCHED)

### Mission title (candidate)
**LIVE-E2E-01-M1 — Autonomous multi-file improvement of disposable test repo**

### Authorized repository
`mcleland147/sfia-studio-live-e2e` only
Local checkout: `…/managed-repos/mcleland147__sfia-studio-live-e2e`

### Pilote request (open-ended — do not pre-script agent file contents)
> « Sur le dépôt de test LIVE E2E, prépare une petite amélioration autonome et inspectable : structure un README de validation (sections Objectif / Périmètre / Preuves), ajoute un fichier `docs/live-e2e-notes.md` avec des notes d’exécution réalistes, et un script shell local non destructif `scripts/smoke-status.sh` qui affiche branche + HEAD + statut working tree. Choisis librement l’organisation exacte des fichiers dans ce dépôt uniquement. Ne pousse rien en remote. »

### Nature
Genuine autonomous generalist work · multi-file · local commands allowed · meaningful implementation choices · NOT a one-file deterministic fixture.

### Authorized effects (candidate)
- `filesystem.create` / `filesystem.modify` **inside** the authorized checkout only
- Local process/commands needed for inspection (e.g. `git status`, `git rev-parse`)
- Local Evidence + ReviewBundle production via Product path after agent return

### Prohibited external effects
- Remote `git push` / force-push / delete remote branches
- PR create/merge
- Touching `sfia-workspace` or any other repo/worktree
- Reading/writing unrelated user secrets (best-effort policy; **not OS-enforced** under G10-A)
- Mutating HQA historical trees
- Network clone of other remotes

### Git policy
- Local commits: **only if** Product/HumanConfirmation path authorizes (default first mission: prefer working-tree changes + Evidence; local commit optional under separate confirmation)
- **NO REMOTE PUSH by default**
- Any remote_git / GitHub effect requires additional Morris gate

### Rollback
- `git checkout -- .` / `git clean` within disposable checkout OR reset to `b63983420823012912180d5880e51c96c2bd0821`
- Remote remains at init SHA if no push
- Do not delete remote repository on failure

### STOP conditions
- Agent attempts remote push / other-repo paths
- Identity mismatch / wrong workspace
- Authority/HumanDecision refused
- Unexpected production path writes detected
- Pathless non-mutating REAL attempted under R2 refuse

### Evidence / ReviewBundle
- Capture filesystem+git diffs under checkout
- Genuine Evidence artifact via Product
- ReviewBundle for Pilote inspection
- Resume Nora LIVE after Evidence (requires Auth LIVE)

### HumanDecision / Confirmation
- Explicit Pilote Confirm before StartExecution
- Separate bounded **G-REAL** Morris text required before first REAL launch

### Pilot UAT steps (after G-REAL)
1. Morris interactive OAuth → authenticated `/studio`
2. Open/create Project bound to test repo identity
3. Issue Pilote request above via Nora LIVE
4. Inspect ExecutionContract · Confirm
5. Observe REAL agent (sandbox disabled) · Evidence · ReviewBundle
6. Nora LIVE resume post-evidence
7. Browser/process restart continuity check
8. Verify no remote push; checkout changes inspectable

## 12. Exact authorized effects candidate (summary)
`filesystem.create`, `filesystem.modify` on disposable checkout · local inspect commands · Evidence/RB · **exclude** `remote_git.*` / push / PR unless later GO.

## 13. Independent gates
| Gate | Status |
|---|---|
| Git Truth | PASS |
| Dedicated test repo | PASS |
| Product managed resolver | PASS (prior + unchanged HEAD) |
| Studio runtime startup | PASS |
| Better Auth LIVE (session) | **BLOCKED** — Morris interactive OAuth required |
| Nora/OpenAI provider LIVE | **PASS** (provider smoke) |
| Nora Studio conversational path | **BLOCKED** (NO_SESSION) |
| Cursor REAL configuration | PASS (READY=1 · gateway unchanged) |
| G10 risk acceptance | **RECORDED** (not confinement proven) |
| Existing authorization / R2 gates | PRESERVED |
| G-REAL execution authorization | **NOT GRANTED** |
| LIVE E2E completion | **NOT CLAIMED** |
| OA/Nora DB isolation from HQA | **BLOCKED / NOT QUALIFIED** |

## 14. No unauthorized changes proof
No Product source edits · no gateway change · no test-repo commits/pushes · no Cursor agent · no ExecutionAttempt · no `.env.local` rewrite · server started for qualification only.

## 15. R24 — NO SEMANTIC IMPACT
Operational qualification + documentary pack only. No Product semantic change.

## 16. Remaining blockers / next Morris decisions
1. **Interactive GitHub OAuth** by Morris on `http://localhost:3020` (server currently running).
2. **Relocate** `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` to dedicated LIVE-E2E paths under `.sfia-exec/live-e2e-01/` (separate GO — do not keep writing LIVE state into HQA DBs).
3. Authenticated Studio Nora conversational smoke (after OAuth).
4. Issue **bounded G-REAL** text for mission LIVE-E2E-01-M1 (effects/git policy above).
5. Then first REAL launch under G10-A residual risk acceptance.

## 17. Unique verdict

**LIVE CONNECTIVITY PARTIAL — REMAINING BLOCKERS DOCUMENTED**

Runtime build/start PASS · OpenAI provider LIVE PASS · Auth session BLOCKED · Studio Nora path BLOCKED · G10-A risk accepted · OA DBs still on HQA · G-REAL NOT GRANTED · agent NOT launched.
