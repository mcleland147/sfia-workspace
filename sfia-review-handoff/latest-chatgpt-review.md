# ChatGPT Review Pack — GCEC-D-CURSOR-SANDBOX-NETWORK-POLICY-01

**Mode:** FULL
**Timestamp (UTC):** 2026-09-13T14:15:22Z
**Cycle:** 9 / RUN / CRITICAL
**GO:** GCEC-D-CURSOR-SANDBOX-NETWORK-POLICY-01
**Verdict:** PASS DIAGNOSTIC — NPOL-3 GENERAL SANDBOX NETWORK BLOCK CONFIRMED

---

## Exact Morris GO

GCEC-D-CURSOR-SANDBOX-NETWORK-POLICY-01 — diagnose Cursor sandbox network policy under Product-shaped `--sandbox enabled` launches; static discovery first; max one optional no-secret probe; classify exactly one NPOL-1..7; Product/Cursor config delta NONE; ZERO mutating REAL; handoff L3 only; publish once.

Constants: ANCHOR=ff267fdf3e6591b5ed83c4478b95f6181ad98fa2 MAIN=c481610caa3527edabeca8c860ab27c18a6a738e HANDOFF_IN=dd8396a9c084e60b9ef869f70b440558fbb7eece NEW=/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf

---

## Local git truth (entry / exit)

| Field | Value |
|---|---|
| pwd / toplevel | /Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf |
| branch | delivery/sfia-studio-gcec-d-ephemeral-secret-bridge |
| HEAD / ANCHOR | ff267fdf3e6591b5ed83c4478b95f6181ad98fa2 |
| origin/main | c481610caa3527edabeca8c860ab27c18a6a738e |
| diff --check | clean |
| Product source delta this lot | NONE |

Dirty candidate preserved (entry == exit Product paths):

- M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
- M .../cursorCliLaunchGateway.ts
- M .../nodeCursorProcessRunner.ts
- M .../studioCursorRealLaunchGateway.ts
- M .../ports/realExecutionLaunchPort.ts
- plus pre-existing untracked bridge/test artifacts and historical `.tmp-sfia-review/*`
- accidental `projects/sfia-studio/app/.tmp-sfia-review/` preserved (not cleaned)
- this lot added only under `.tmp-sfia-review/`: `npol-network-probe.mjs`, `npol-sandbox-enabled-network.out`, updated `chatgpt-review.md`

---

## Canonical maturity (DO NOT REGRESS)

| Surface | Maturity |
|---|---|
| A docs-write | REAL PROVEN AT TESTED SCOPE |
| B local commit | REAL PROVEN AT TESTED SCOPE |
| C remote push | REAL PROVEN AT TESTED SCOPE |
| A→C | REAL PROVEN AT TESTED SCOPE |
| C HTTPS bridge | REAL-BACKED AT TESTED SCOPE |
| D PR-create | NOT PROVEN |
| E | NOT PROVEN |
| runtime v3 | NON ADOPTED |

Additional diagnostic claim this lot: **NPOL-3** only. No maturity promotion.

---

## Accepted S2 / DCH-3 / STB-3 facts (not re-litigated)

- Product REAL argv always: `agent --print --workspace --trust --sandbox enabled` (not disabled/force/yolo).
- Runner: `shell:false`, stdin `ignore`.
- DCH-3 (`.tmp-sfia-review/dch-cursor-diag.out`): under `--sandbox enabled`, Shell executed; Node direct API `direct_api_status=error:ENOTFOUND`; gh path showed token-invalid / Forbidden (auth/network mix; not re-run).
- STB-3: `--sandbox disabled` Studio-shaped noninteractive Shell rejected by host allowlist; CLI `--sandbox enabled` overrides config `sandbox.mode=disabled`.
- Incoming handoff tip at start: dd8396a9… (STB-3 pack).

---

## Current Product Cursor argv

From dirty `studioCursorRealLaunchGateway.ts` (READ-ONLY confirm):

```
agent --print --workspace <path> --trust --sandbox enabled
```

Optional RO profile adds `--mode ask`. Comment: all keep `--print + --workspace + --trust + --sandbox enabled`. No `--force` / `--yolo`.

`nodeCursorProcessRunner.ts`: `spawn(..., { shell: false, stdio: ["ignore","pipe","pipe"] })`.

---

## Cursor version / help

- App: Cursor 3.20.17 (`/Applications/Cursor.app`)
- CLI bin used historically + this probe: `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` → 3.20.17
- `cursor-agent` symlink: 2026.09.10-fd3934a
- `agent --help`: `--sandbox <mode>` choices `enabled|disabled` — “Explicitly enable or disable sandbox mode (overrides config)”
- Also documents `--trust`, `--workspace`, `--print`, `--force` / `--yolo` (Product does not pass force/yolo)

---

## Effective network config (READ-ONLY)

`~/.cursor/cli-config.json` (sandbox/network/approval only):

- `approvalMode`: `allowlist`
- `sandbox.mode`: `disabled`
- `sandbox.networkAccess`: `user_config_with_defaults`
- `network`: keys `useHttp1ForAgent` only (=false) — **no user allowDomains list in config**
- `permissions.allow`: `Shell(ls)` only (host allowlist; relevant to STB-3 when sandbox disabled)

Proxy env (presence-only): HTTP_PROXY/HTTPS_PROXY/ALL_PROXY/NO_PROXY and lowercase variants = **UNSET**.

Cursor logs (minimal): repeated `[PushRequestContextService] Updated sandbox network file entries (0 entries)` — explicit sandbox network file allowlist empty. No ENOTFOUND lines found in DCH worker.log; ENOTFOUND evidenced in DCH-3 / NPOL probe stdout.

---

## Installed policy / schema discovery (READ-ONLY strings)

Supported `sandbox.networkAccess` enum (cursor-agent `index.js` / UI `1186.index.js`):

- `user_config_only` — “sandbox.json allowlist only”
- `user_config_with_defaults` — “sandbox.json + default allowlist” (**effective observed value**)
- `allow_all` — “allow all network”

Forced egress env hook (not set in this probe): `CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS`.

Static mechanism exists (domain allowlist / networkAccess modes) but **does not by itself prove** whether github.com/api.github.com are admitted under current defaults — hence probe.

---

## Static qualification

**Sufficient alone?** NO — cannot discriminate NPOL-3 vs NPOL-4 vs NPOL-5 / cannot list default-allowlist membership for GitHub without runtime DNS/HTTPS oracles.

---

## Optional Cursor network probe

| Field | Value |
|---|---|
| run | yes |
| count | **1** (max; no retry) |
| mode | `--sandbox enabled` (Product match) |
| secrets | absent — `env -u GH_TOKEN -u GITHUB_TOKEN -u GH_ENTERPRISE_TOKEN -u GITHUB_ENTERPRISE_TOKEN` |
| workspace | empty temp `/tmp/sfia-npol-ws-l1KAKv` |
| instruction | `pwd`; `node --version`; `node <helper>` only |
| helper | `.tmp-sfia-review/npol-network-probe.mjs` (write-free at runtime) |
| artifact | `.tmp-sfia-review/npol-sandbox-enabled-network.out` |
| proof repo / gh / curl / git / writes | NONE |

### Structured DNS / HTTPS results (acceptance lines)

```
TARGET=example.com
DNS=error:ENOTFOUND
HTTPS=not_attempted
TARGET=github.com
DNS=error:ENOTFOUND
HTTPS=not_attempted
TARGET=api.github.com
DNS=error:ENOTFOUND
HTTPS=not_attempted
```

Shell itself executed (pwd + node version printed). Correlates with DCH-3 `direct_api_status=error:ENOTFOUND` under sandbox enabled.

---

## NPOL classification (exactly one)

**NPOL-3 — GENERAL DNS/NETWORK BLOCK UNDER SANDBOX ENABLED**

Meaning: blocker is general sandbox network/DNS capability, not GitHub-specific. example.com, github.com, and api.github.com fail DNS equivalently.

Not NPOL-1: mechanism known, but effective admission of GitHub not established as a bounded allow policy explaining denial (denial is universal DNS).
Not NPOL-4: example.com also ENOTFOUND.
Not NPOL-5: DNS never ok.
Not NPOL-6: no successful HTTPS.
Not NPOL-2 alone: static did not prove “external network disabled” without probe; probe shows DNS fail under enabled sandbox.

---

## Product / Cursor config delta

**NONE** this lot. No allowlist edits. No sandbox mode changes. No Product source edits.

---

## Credential / proof access

**NONE.** No GH_TOKEN in probe child. No gh auth. No proof-repo access.

---

## ZERO mutating REAL / Product commit / Roadmap

- ZERO mutating REAL
- Product commit: NONE
- Roadmap: UNCHANGED

---

## Anti-claims

- NPOL-3 ≠ D PR REAL
- NPOL-3 ≠ auth success
- NPOL-3 ≠ proof-repo access
- Does not authorize Product network-policy changes
- Does not authorize `--sandbox disabled` for Product REAL
- Does not claim default allowlist contents beyond “0 explicit file entries” + universal ENOTFOUND under enabled sandbox for tested hosts

---

## Next gate recommendation (GO §26)

**NPOL-2 / NPOL-3 path:** architecture decision required — how to provide **bounded** network capability to governed Cursor while retaining acceptable isolation. No automatic D REAL. No config change in this GO.

---

## Review handoff

Incoming tip: `dd8396a9c084e60b9ef869f70b440558fbb7eece`
Publisher: `scripts/sfia/publish-review-handoff.sh` once → `sfia-review-handoff/latest-chatgpt-review.md` on `sfia/review-handoff`.
Post-publish tip/parent/blob/parity: filled after publisher run.
