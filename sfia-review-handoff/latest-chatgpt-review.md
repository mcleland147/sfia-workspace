# Cycle 9 QA forensic — Cursor REAL exit code 1

Timestamp Europe/Paris: 2026-08-17 19:40:04 CEST (+0200)
Diagnostic dir: `.tmp-sfia-review/cycle-9-cursor-real-exit1-diagnostic-20260817-193158/`

## Morris ACCEPT + GO

ACCEPT DIAGNOSIS — REAL PROCESS FAILURE OBSERVED / PRODUCT FAILURE SEMANTICS CORRECT / ROOT CAUSE OF CURSOR EXIT 1 UNRESOLVED

AND

GO MORRIS — CYCLE 9 QA DIAGNOSTIC / CURSOR REAL EXIT CODE 1 / ZERO REAL / READ-ONLY FORENSICS

This GO authorized forensic diagnosis only. It did not authorize a new REAL campaign, OpenAI LIVE, Cursor REAL launch, `cursor agent` / `cursor-agent` execution, retry, fresh Project/Attempt, Next startup, product mutation, Cursor install/auth/symlink mutation, project commit/push/PR/merge, or Roadmap/doctrine mutation.

## Verdict

PASS — CYCLE 9 QA FORENSIC DIAGNOSTIC
CURSOR REAL EXIT CODE 1 ROOT CAUSE ATTRIBUTED
PRIMARY CAUSE = D. WORKSPACE / PATH FAILURE — Cursor `--trust` marker mkdir ENAMETOOLONG (flattened `~/.cursor/projects/<slug>` last component 269 > Darwin NAME_MAX 255)
DIRECT / REPRODUCIBLE READ-ONLY EVIDENCE PRESENT (pid 19887 session log)
NO PRODUCT MUTATION
ZERO REAL
BOUNDED HAPPY PATH REMAINS NOT PROVEN
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR MORRIS REQUALIFICATION
NO AUTOMATIC REAL RETRY

## Cycle / profile / CKC

- Cycle: 9 — QA / validation
- Profile: Critical
- Typology: RUN / diagnostic forensic
- CKC: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- Status: candidate 0.1.0
- Blob: `9d9970d611dbb6e52297ac215604d3a08e87e738` (matches expected)
- Authority: experimental cognitive guidance only. No execution authority.

## Local Git Truth PRE / POST

PRE:

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=a3ac418f3bc2ebb006cbc58f902f13629871014d
origin/sfia/review-handoff=9f2b05dd345ee051069498fe9140c1b9ccb0a9bf
handoff_blob=5f3eac148a95354e99b5680c24943fd6acd2dff8
```

POST:

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=a3ac418f3bc2ebb006cbc58f902f13629871014d
origin/sfia/review-handoff=9f2b05dd345ee051069498fe9140c1b9ccb0a9bf
handoff_blob=5f3eac148a95354e99b5680c24943fd6acd2dff8
staged=0
dirty=110
candidate_files=994
candidate_manifest_sha256=328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5
```

Staged empty. Dirty 110. Candidate files 994. Manifest `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`.
Mechanism: find `projects/sfia-studio/app` files excluding node_modules/.next/coverage/.turbo; set-equal to 191840 PRE manifest; SHA identical.
Candidate PRE=POST. HEAD `0d33478566627a9bf507d5a06323962d349308ee`. Branch `delivery/sfia-studio-pre-m6-ui-option-a`.
origin/main `a3ac418f3bc2ebb006cbc58f902f13629871014d`. origin/sfia/review-handoff parent `9f2b05dd345ee051069498fe9140c1b9ccb0a9bf` blob `5f3eac148a95354e99b5680c24943fd6acd2dff8`.
No git reset/clean/stash/rebase/merge/cherry-pick/destructive checkout.

## Parent REAL failure handoff

- commit `9f2b05dd345ee051069498fe9140c1b9ccb0a9bf`
- blob `5f3eac148a95354e99b5680c24943fd6acd2dff8`
- verdict preserved: INCOMPLETE — REAL PROCESS FAILURE OBSERVED / BOUNDED HAPPY PATH NOT PROVEN / NO RETRY AUTHORIZED

## Failed campaign identity (immutable)

- campaign: `.tmp-sfia-review/real-bounded-reproof-20260817-191840/`
- Project: `prj:4ebd28f9-b3c8-49b4-bf70-88825d357a61`
- HumanDecision: `dec:f2:85c4d482-baea-4e19-8924-f817fe059824` (opt:go)
- ExecutionContract: `xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Attempt: `xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Gate D: `gd:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- processRef: `pid:19887`
- action: `cursor.read_only.inspect`
- target: `workspace.isolated.read`
- executionWindowClass: `standard`
- resolvedMaxDurationMs: `900000`
- launch count: 1 (CREATED=1, LAUNCHED=1)
- technicalExitCode: 1
- stopReason: `REAL_PROCESS_NONZERO_EXIT`
- startedAt: `2026-08-17T17:20:54.715Z` ≈ 19:20:54 CEST
- failedAt: `2026-08-17T17:20:59.730Z`
- durationMs: 4511
- Evidence: none
- ReviewBundle: none
- post-execution Nora: not reached

Failed worktree (read-only):
`.../projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15`
HEAD `0d334785…`. porcelain empty.
Campaign directory was not written, deleted, or reopened writable. DB opened `file:?mode=ro` only.

## Sources read

- prompts/templates/sfia-cycle-execution-template.md (process)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- CKC 04-qa-validation.md
- sfia-v2.5 §4.9 (via CKC inherit)
- sfia-chatgpt-cursor-operating-model.md / sfia-rules-and-guardrails.md (ZERO REAL / no product write)
- convergence doctrine + roadmap (PRE-M6 NON COMPLETE; V3-F10 later)
- v3 framing 34 / 35 (V3-F10 DebtItem VALIDATED as doctrine, runtime not ADOPTED)
- StudioCursorRealLaunchGateway, NodeCursorProcessRunner, RealExecutionLaunchPort, composeStudioProductRealBoundary, completeBoundedReadOnlyLaunch, executeConfirmedBoundedReadOnlyContract, RecordExecutionFailure, studioGitWorktreeWorkspace, observationSchedule
- origin/sfia/review-handoff latest-chatgpt-review.md
- git show 1123a30f:sfia-review-handoff/latest-chatgpt-review.md (historical comparator, blob d8d23df9…)

## Convergence

- Milestone: PRE-M6 — NON COMPLETE
- Runtime v3: NON ADOPTED
- Primary capability: V3-F05; governance V3-F11/F12; evidence V3-F14/F15
- Debt relevant: V3-F10 process-local observation / diagnostic durability — open, not blocking this attribution
- KEEP: product orchestration, HumanDecision, ExecutionContract, Gate D, Attempt, ARCH-WOP-1, one-launch, O3, gateway, runner, failed-state semantics, read-only contract, current operator fixes
- FREEZE: historical REAL Projects/Attempts including pid 19887, failed campaign DB/artifacts/worktree, product code, Cursor installation

## Fake / Real qualification

This cycle: ZERO REAL forensic. No OpenAI LIVE. No Cursor REAL. No new Project/Attempt/worktree/session.
The consumed REAL campaign remains frozen evidence. Diagnosis used only local read-only inspection.

## ZERO REAL proof

Commands used: git (fetch already done / rev-parse / show / diff / status / ls-files), find, python3, sqlite3 `mode=ro`, plutil, shasum, file, stat, ls, readlink, log show (macOS unified log, pid 19887 window), rg.
NOT used: `cursor agent`, `cursor-agent`, `/Applications/Cursor.app/.../cursor` execution, `--help`/`--version`/`status` through Cursor binaries, Next start, Playwright, curl to OpenAI/Cursor, model invocation.
Wrapper and cursor-agent were hashed and read as text; not executed.
OpenAI LIVE calls = 0. Cursor REAL launches = 0. New REAL Projects/Attempts/worktrees/sessions = 0.

## Direct Cursor session log (Tier 1)

FOUND.
Path: `/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501/session-2026-08-17T17-20-56-394Z-19887-1.log`
SHA256: `0142b3aa57537cbdc5de16938491e763c0f16ea048b7ca95ab8d999a645c9d96`
mtime: 2026-08-17 19:20:56 +0200. size 2805. mode 0600. 20 lines.
`latest.log` in that directory symlink pointed at this file at discovery time.
userId redacted in sanitized copy.

Sanitized full log:

```
--- Cursor Agent Debug Session 2026-08-17T17:20:56.394Z ---
{"event":"debug-session-start","directory":"/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501","logFile":"/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501/session-2026-08-17T17-20-56-394Z-19887-1.log","pid":19887,"startTime":"2026-08-17T17:20:56.394Z"}
[2026-08-17T17:20:56.394Z] ripgrep.configureSuccess {"ripgrepPath":"/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/rg","ripgrepSource":"colocated"}
Stack trace:
    at Q (/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:6343)
    at R (/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:11457)
    at /Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:13142
[2026-08-17T17:20:56.395Z] sandbox.configureSuccess {"sandboxBinary":"/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursorsandbox","sandboxSource":"colocated"}
Stack trace:
    at Q (/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:6343)
    at N (/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:11731)
    at /Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/index.js:414:13146
[2026-08-17T17:20:56.396Z] analytics.track {"eventName":"cli.launch"}
[2026-08-17T17:20:56.414Z] statsig.setupLazyInit {"endpoint":"https://api2.cursor.sh"}
[2026-08-17T17:20:56.421Z] statsig.initialize.success {"fromCache":true}
[2026-08-17T17:20:56.500Z] atFileSuggestions.index.start {"cwd":"/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15","maxFiles":20000,"maxDepth":16,"includeHidden":false,"timeoutMs":8000}
[2026-08-17T17:20:56.550Z] atFileSuggestions.default.gitFilter {"total":10,"ignored":0}
[2026-08-17T17:20:56.560Z] statsig.updateUser.success {"userId":"auth0|REDACTED"}
[2026-08-17T17:20:56.562Z] analytics.track {"eventName":"cli.run.mode","props":{"headless":true,"print_flag":true,"output_text":true,"output_json":false,"output_stream_json":false,"stream_partial_output":false,"show_thinking":false,"api_key_env":false}}
{"event":"Failed to create trust marker:","level":"DEBUG","data":"ENAMETOOLONG: name too long, mkdir '/Users/morris/.cursor/projects/Users-morris-Projects-sfia-workspace-t-a7-lot1-post-merge-tmp-sfia-review-worktrees-finops-t2-main-tmp-sfia-review-worktrees-sfia-studio-m4-real-off-projects-sfia-studio-sfia-exec-m4-worktrees-wt-xat-m3-m3-res-dec-f2-85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15'"}
```

Direct error: `Failed to create trust marker:` `ENAMETOOLONG: name too long, mkdir '/Users/morris/.cursor/projects/<269-char slug>'`
Prior events: ripgrep.configureSuccess, sandbox.configureSuccess, cli.launch, statsig.initialize.success fromCache, atFileSuggestions on the failed worktree cwd (10 git files), statsig.updateUser.success, cli.run.mode headless/print.
Absent vs historical success: privacy.refresh.start, agent_cli.turn.start, M4_READ_ONLY_OK.

## Path length evidence

```json
{
  "darwin_NAME_MAX_convention": 255,
  "failed_worktree_abs_len": 273,
  "failed_worktree_leaf_len": 76,
  "cursor_trust_marker_dir_last_component": "Users-morris-Projects-sfia-workspace-t-a7-lot1-post-merge-tmp-sfia-review-worktrees-finops-t2-main-tmp-sfia-review-worktrees-sfia-studio-m4-real-off-projects-sfia-studio-sfia-exec-m4-worktrees-wt-xat-m3-m3-res-dec-f2-85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
  "cursor_trust_marker_last_component_len": 269,
  "cursor_trust_marker_full_path_len": 300,
  "exceeds_NAME_MAX_255": true,
  "overage_bytes": 14,
  "historical_success_cwd_len": 172,
  "historical_success_leaf_len": 55,
  "historical_success_flattened_slug_len_if_same_algorithm": 172,
  "historical_would_exceed_NAME_MAX": false,
  "failed_worktree_exists": true,
  "trust_marker_dir_exists": false
}
```

Trust marker dir does not exist (mkdir failed). Failed worktree does exist.

## Transcript evidence

NONE TIED TO pid 19887.
Exact `~/.cursor/projects/<269-char slug>` directory absent (ENAMETOOLONG). No agent-transcripts directory mapped to the failed worktree/attempt fragment `85c4d482`. No broad conversation scan.

## macOS bounded unified log

Used as fallback because session log ends at DEBUG without an explicit exit line.
Window: 2026-08-17 19:20:50–19:21:10 local. Predicate: processID == 19887.
Process name in unified log: `node[19887]` (cursor-agent Node runtime).
Useful: SecItemCopyMatching (keychain) at 19:20:56.528 — auth material was reachable. TLS trust evaluate failures (ExtendedKeyUsage / AnchorTrusted) at 19:20:56.535–540 — not treated as root cause (historical success also used network). No ENAMETOOLONG string in unified log (that lives in the Cursor session log).
Excerpt (no secrets; hostnames already `<private>`):

```
Timestamp               Ty Process[PID:TID]
2026-08-17 19:20:56.402 Df node[19887:b199e5] [com.apple.network:] networkd_settings_read_from_file_locked initialized networkd settings by reading plist directly
2026-08-17 19:20:56.402 Df node[19887:b199e5] [com.apple.network:] networkd_settings_read_from_file_locked initialized networkd settings by reading plist directly
2026-08-17 19:20:56.402 Df node[19887:b199e5] [com.apple.network:path] nw_path_libinfo_path_check [8EA5DB47-E91C-4B92-844A-62BB86452E1E Hostname#950c7a8b:0 tcp, legacy-socket, attribution: developer]
	libinfo check path: <private>
2026-08-17 19:20:56.528 A  node[19887:b199c5] (Security) SecItemCopyMatching
2026-08-17 19:20:56.528 A  node[19887:b199c5] (Security) SecItemCopyMatching_ios
2026-08-17 19:20:56.528 Df node[19887:b199c5] [com.apple.securityd:secitemratelimit] Not internal release, disabling SIRL
2026-08-17 19:20:56.528 Df node[19887:b199c5] [com.apple.securityd:thread-local-client-debug] SecSecurityClientGet new thread!
2026-08-17 19:20:56.528 Df node[19887:b199c5] [com.apple.securityd:keychain] Enabling System Keychain Always due to platform
2026-08-17 19:20:56.528 Df node[19887:b199c5] [com.apple.xpc:connection] [0x1099a8380] activating connection: mach=true listener=false peer=false name=com.apple.securityd.xpc
2026-08-17 19:20:56.529 Df node[19887:b199c5] [com.apple.xpc:connection] [0x1099a85d0] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
2026-08-17 19:20:56.529 A  node[19887:b199c5] (CoreFoundation) Loading Preferences From System CFPrefsD
2026-08-17 19:20:56.529 Df node[19887:b199c5] [com.apple.securityd:MDSStaticDatabase] [updateDataBases]: Databases already exist; Nothing to Update
2026-08-17 19:20:56.532 Df node[19887:b199c5] [com.apple.xpc:connection] [0x1099d10d0] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
2026-08-17 19:20:56.532 A  node[19887:b199c5] (Security) SecTrustSettingsXPCRead
2026-08-17 19:20:56.532 Df node[19887:b199c5] [com.apple.xpc:connection] [0x8e1a68000] activating connection: mach=true listener=false peer=false name=com.apple.trustd.agent
2026-08-17 19:20:56.532 Df node[19887:b19a4a] [com.apple.CoreAnalytics:client] Received configuration update from daemon (initial)
2026-08-17 19:20:56.532 A  node[19887:b199c5] (Security) SecTrustSettingsXPCRead
2026-08-17 19:20:56.532 A  node[19887:b199c5] (Security) SecTrustEvaluateIfNecessary
2026-08-17 19:20:56.535 Df node[19887:b199c5] [com.apple.securityd:SecError] Trust evaluate failure: [leaf ExtendedKeyUsage MissingIntermediate]
2026-08-17 19:20:56.535 A  node[19887:b199c5] (Security) SecTrustSettingsXPCRead
2026-08-17 19:20:56.536 A  node[19887:b199c5] (Security) SecTrustSettingsXPCRead
2026-08-17 19:20:56.536 A  node[19887:b199c5] (Security) SecTrustEvaluateIfNecessary
2026-08-17 19:20:56.538 Df node[19887:b199c5] [com.apple.securityd:SecError] Trust evaluate failure: [leaf ExtendedKeyUsage MissingIntermediate]
```

## Current static Cursor installation (no execute)

```json
{
  "executed_binaries": false,
  "wrapper": {
    "path": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "exists": true,
    "executable_bit": true,
    "mode": "0o100755",
    "sha256": "de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1",
    "file": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor: Bourne-Again shell script text executable, ASCII text",
    "size": 4798,
    "head": "#!/usr/bin/env bash\n#\n# Copyright (c) Microsoft Corporation. All rights reserved.\n# Licensed under the MIT License. See License.txt in the project root for license information.\n\nfunction app_realpath() {\n\tSOURCE=$1\n\twhile [ -h \"$SOURCE\" ]; do\n\t\tDIR=$(dirname \"$SOURCE\")\n\t\tSOURCE=$(readlink \"$SOURCE\")\n\t\t[[ $SOURCE != /* ]] && SOURCE=$DIR/$SOURCE\n\tdone\n\tSOURCE_DIR=\"$( cd -P \"$( dirname \"$SOURCE\" )\" >/dev/null 2>&1 && pwd )\"\n\techo \"${SOURCE_DIR%%${SOURCE_DIR#*.app}}\"\n}\n\nfunction use_cursor_cli() {\n\tif [ -n \"$CURSOR_CLI\" ]; then\n\t\t# Use the CLI found by find_cursor_cli.\n\t\t# Avoid eval so arguments with spaces (e.g. \"foo bar.sh\") are preserved.\n\t\tif [ \"$CURSOR_CLI_MODE\" = \"remote\" ]; then\n\t\t\texec \"$CURSOR_CLI\" \"$@\"\n\t\telse\n\t\t\t# Local mode: ELECTRON and CLI are set by find_cursor_cli\n\t\t\tELECTRON_RUN_AS_NODE=1 \"$ELECTRON\" \"$CLI\" \"$@\"\n\t\tfi\n\t\texit $?\n\telse\n\t\techo \"Error: Cursor CLI not found. Please install Cursor properly.\" 1>&2\n\t\texit 1\n\tfi\n}\n\nfunction find_cursor_cli() {\n\t# Clear the output variables\n\tCURSOR_CLI=\"\"\n\tCURSOR_CLI_MODE=\"\"\n\n\t# when run in remote terminal, use the remote cli\n\tif [ -n \"$VSCODE_IPC_HOOK_CLI\" ]; then"
  },
  "app": {
    "plist": "/Applications/Cursor.app/Contents/Info.plist",
    "macos_binary_file": "/Applications/Cursor.app/Contents/MacOS/Cursor: Mach-O 64-bit executable arm64",
    "plist_keys": [
      "\"CFBundleIdentifier\" => \"com.todesktop.230313mzl4w4u92\"",
      "\"CFBundleName\" => \"Cursor\"",
      "\"CFBundleShortVersionString\" => \"3.16.17\"",
      "\"CFBundleVersion\" => \"3.16.17\""
    ]
  },
  "cursor_agent": {
    "symlink": "/Users/morris/.local/bin/cursor-agent",
    "is_symlink": true,
    "readlink": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "resolved": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "executable_bit": true,
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831",
    "file": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent: Bourne-Again shell script text executable, ASCII text",
    "version_from_path": "2026.08.11-e8db854"
  },
  "colocated": {
    "rg_path": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/rg",
    "rg_exists": true,
    "rg_executable": true,
    "rg_sha256": "d341183ac86995971c82a887dd07717956e5d6074881f382e590ef9aa8eb15dd",
    "cursorsandbox_path": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursorsandbox",
    "cursorsandbox_exists": true,
    "cursorsandbox_executable": true,
    "cursorsandbox_sha256": "2e37b098fc7cdd4edff8f5676047ea02081d22c644dfb9c86dd5d5bb907fe15f"
  }
}
```

product.json: version `3.16.17`, commit `6b2afae0257df2bb5e1835f15165dc2f0de056b0`, realCommit `6b2afae0257df2bb5e1835f15165dc2f0de056b2`, quality stable.
Plist keys:

```
  "CFBundleIdentifier" => "com.todesktop.230313mzl4w4u92"
  "CFBundleName" => "Cursor"
  "CFBundleShortVersionString" => "3.16.17"
  "CFBundleVersion" => "3.16.17"
```

Wrapper `cursor agent` routing (text read, not executed): if `$1=agent`, `exec ~/.local/bin/cursor-agent "$@"` after a version `status`/`update` gate in the script. Pid 19887 session log is the agent after exec.

## Historical successful M4 comparator (not current truth)

Handoff commit `1123a30f2261756a2ec744ee002ec023b7fea0af` blob `d8d23df9901919037ea3e718147c82f32cb7fdc8` (verified).

```json
{
  "label": "READ-ONLY COMPARATOR \u2014 not current truth",
  "handoff_commit": "1123a30f2261756a2ec744ee002ec023b7fea0af",
  "handoff_blob": "d8d23df9901919037ea3e718147c82f32cb7fdc8",
  "date": "2026-08-14",
  "wrapper": {
    "path": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "sha256": "de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1"
  },
  "app": {
    "version": "3.15.19",
    "build": "de07bee81cefe43461ebf4f40c3d2d78d15052a0",
    "arch": "arm64"
  },
  "cursor_agent": {
    "version": "2026.08.11-e8db854",
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831",
    "resolved": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent"
  },
  "argv_shape": [
    "agent",
    "--print",
    "--mode",
    "ask",
    "--workspace",
    "<fresh-worktree>",
    "--trust",
    "--sandbox",
    "enabled",
    "<instruction>"
  ],
  "cwd": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
  "shell": false,
  "result": {
    "exitCode": 0,
    "timedOut": false,
    "stdout": "M4_READ_ONLY_OK",
    "stderr": "",
    "durationMs": 15735,
    "processRef": "pid:17064"
  }
}
```

Historical spawn (ACTUAL CAMPAIGN EVIDENCE from that handoff): executable wrapper; argv agent --print --mode ask --workspace <short /var/folders T/sfia-studio-m4-reproof-…> --trust --sandbox enabled <instruction>; cwd same; shell false; exit 0; stdout M4_READ_ONLY_OK; stderr empty; 15735 ms; pid:17064.

## CLI / version comparison

```json
{
  "wrapper_sha_changed": false,
  "wrapper_sha_current": "de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1",
  "wrapper_sha_historical": "de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1",
  "cursor_app_version_changed": true,
  "cursor_app_version_current": "3.16.17",
  "cursor_app_commit_current": "6b2afae0257df2bb5e1835f15165dc2f0de056b0",
  "cursor_app_version_historical": "3.15.19",
  "cursor_app_build_historical": "de07bee81cefe43461ebf4f40c3d2d78d15052a0",
  "cursor_agent_target_changed": false,
  "cursor_agent_version_current": "2026.08.11-e8db854",
  "cursor_agent_version_historical": "2026.08.11-e8db854",
  "cursor_agent_sha_changed": false,
  "cursor_agent_sha_current": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831",
  "argv_shape_changed": false,
  "argument_order_changed": false,
  "sandbox_syntax_changed": false,
  "workspace_cwd_semantics_changed": false,
  "workspace_path_location_changed": true,
  "workspace_path_note": "Historical success used a short /var/folders/.../T/sfia-studio-m4-reproof-* worktree; failed campaign used nested candidate .sfia-exec/m4-worktrees path. Flattened ~/.cursor/projects/<slug> exceeded Darwin NAME_MAX 255 (269 chars, +14).",
  "auth_context_evidence": "Failed session reached statsig.updateUser.success; OS log shows SecItemCopyMatching. Auth available. Not the abort cause.",
  "executable_resolution_changed": false,
  "runner_spawn_options_changed": false,
  "environment_behavior": "Child inherits Next env plus SFIA_STUDIO_CURSOR_REAL=1. No evidence those flags affect Cursor trust-marker mkdir.",
  "lead_not_proof": "App version 3.15.19 \u2192 3.16.17 is a lead only. The process that failed is cursor-agent 2026.08.11-e8db854 with unchanged SHA, identical to historical success."
}
```

## Current gateway reconstruction

Label: RECONSTRUCTED FROM SOURCE. 191840 campaign has no spawn argv capture (unlike 2026-08-14). Session log proves cwd + agent version.

```json
{
  "label": "RECONSTRUCTED FROM SOURCE",
  "actual_campaign_spawn_capture": false,
  "campaign_proves": {
    "processRef": "pid:19887",
    "executable_resolved_by_accessSync_order": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "session_log_proves_cursor_agent_version": "2026.08.11-e8db854",
    "cwd_from_session_log": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
    "worktree_from_campaign_new-worktree-post.json": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15"
  },
  "reconstructed": {
    "executable": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "wrapper_then_execs": "/Users/morris/.local/bin/cursor-agent",
    "argv": [
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
      "--trust",
      "--sandbox",
      "enabled",
      "TÂCHE UNIQUE — preuve read-only déterministe.\nLire uniquement le fichier README.md à la racine du workspace.\nNe modifier aucun fichier.\nNe créer aucun fichier.\nNe lancer aucune commande Shell.\nNe faire aucune recherche récursive, Glob ou Grep.\nNe consulter aucun autre fichier.\nSi README.md peut être lu, répondre exactement :\nM4_READ_ONLY_OK\nSi README.md ne peut pas être lu, répondre exactement :\nM4_READ_ONLY_UNAVAILABLE\ntarget=workspace.isolated.read\naction=cursor.read_only.inspect\nscope=studio.m4.real_off\nfingerprint=0fe32a3ea4f1c31ddc5660ca3a75ab89c9f946c2058e8102f3e6104fd45af2cb\nAucune mutation, aucun git remote/commit/push/PR/merge."
    ],
    "cwd": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
    "shell": false,
    "stdio": [
      "ignore",
      "pipe",
      "pipe"
    ],
    "timeoutMs": 900000,
    "timeoutMs_source": "request.timeoutMs from dirty candidate gateway (ARCH-WOP-1); Attempt.resolvedMaxDurationMs=900000",
    "env_strategy": "spread gateway env (Next process.env) then force SFIA_STUDIO_CURSOR_REAL=1",
    "workspaceRef": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
    "instruction_sha256": "69ab4ccc90a4863207919f6c79f9ec3482870fbf12cc5c4f2bbffdd65df81621",
    "semanticFingerprint": "0fe32a3ea4f1c31ddc5660ca3a75ab89c9f946c2058e8102f3e6104fd45af2cb"
  },
  "env_flags": {
    "SFIA_STUDIO_CURSOR_REAL": {
      "campaign_server": "1",
      "forced_again_in_child_env": true,
      "influences_cursor_executable": false,
      "role": "product REAL enablement flag; Cursor CLI does not document consuming it"
    },
    "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY": {
      "campaign_server": "1",
      "set_by_gateway": false,
      "inherited_via_process_env_spread": true,
      "influences_cursor_executable": false,
      "role": "product local Morris authority; unrelated to Cursor CLI argv"
    },
    "SFIA_CURSOR_BIN": {
      "campaign_server_identity": "absent",
      "would_override_wrapper_if_set": true
    }
  },
  "source_files": [
    "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts",
    "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts",
    "projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts",
    "projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts"
  ],
  "source_line_refs_worktree": {
    "argv": "studioCursorRealLaunchGateway.ts:206-217",
    "invoke": "studioCursorRealLaunchGateway.ts:219-230",
    "workspacePathForAttempt": "studioGitWorktreeWorkspace.ts:42-51",
    "execRoot": "composeStudioProductRealBoundary.ts:81-87"
  }
}
```

Dirty candidate vs HEAD gateway (timeout only; NON_CAUSAL for this 4511 ms exit):

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index f46b4ef..8683852 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -22,13 +22,13 @@ import type {
 } from "../ports/realExecutionLaunchPort";
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
+import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
   readonly workspacePort: RealExecutionWorkspacePort;
   readonly env?: NodeJS.ProcessEnv;
   readonly resolveCursorBin?: () => string | null;
-  readonly defaultTimeoutMs?: number;
 };

 /** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
@@ -63,7 +63,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   private readonly workspacePort: RealExecutionWorkspacePort;
   private readonly env: NodeJS.ProcessEnv;
   private readonly resolveBin: () => string | null;
-  private readonly timeoutMs: number;
   /**
    * Fallback only when the runner has no observe/awaitCompletion.
    * Live observation source is the runner registry when present
@@ -86,7 +85,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     this.env = options.env ?? process.env;
     this.resolveBin =
       options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
-    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
   }

   async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
@@ -126,6 +124,17 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

+    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "resolved_timeout_ms_required",
+        realProcessInvoked: false,
+        detailCode: "REAL_LAUNCH_FAILED",
+      };
+    }
+
     const baseHeadSha =
       request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
     if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
@@ -213,7 +222,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         executable: bin,
         cwd: workspacePath,
         argv,
-        timeoutMs: this.timeoutMs,
+        timeoutMs: request.timeoutMs,
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
```

## Runtime source comparison old-success vs current

# Runtime source comparison — 2d1361ee (historical M4 success base) vs current candidate

Current candidate = HEAD `0d334785` + dirty 110 (the tree the 191840 REAL campaign actually ran).

No claim of causality without evidence.

| File | vs 2d1361ee HEAD commit | vs dirty worktree | Classification |
|---|---|---|---|
| `studioCursorRealLaunchGateway.ts` | UNCHANGED at HEAD (argv identical: agent --print --mode ask --workspace --trust --sandbox enabled) | Dirty: timeoutMs `this.timeoutMs` default 60000 → `request.timeoutMs` + `assertResolvedTimeoutMs` | CHANGED_NON_CAUSAL |
| `nodeCursorProcessRunner.ts` | UNCHANGED | not in dirty status | UNCHANGED |
| `studioGitWorktreeWorkspace.ts` | UNCHANGED (`workspacePathForAttempt` same `wt-${safe}-${digest}` under execRoot) | not in dirty status | UNCHANGED |
| `composeStudioProductRealBoundary.ts` | did not exist at 2d1361ee | untracked in candidate; execRoot = `studioRoot/.sfia-exec/m4-worktrees` | CHANGED_NON_CAUSAL |
| `completeBoundedReadOnlyLaunch.ts` | did not exist at 2d1361ee | untracked; records REAL_PROCESS_NONZERO_EXIT from observation.exitCode | CHANGED_NON_CAUSAL |
| `executeConfirmedBoundedReadOnlyContract.ts` | did not exist at 2d1361ee | present in dirty candidate | CHANGED_NON_CAUSAL |
| `recordExecutionFailure.ts` | store port type rename only (2 lines) | — | CHANGED_NON_CAUSAL |
| `observationSchedule.ts` | did not exist at 2d1361ee | — | CHANGED_NON_CAUSAL |

No file is CHANGED_CONFIRMED_CAUSAL.

The failed argv **shape** matches historical success and matches 2d1361ee gateway.
The failed **workspace path value** is longer because `execRoot` is resolved from the nested candidate studioRoot.

Historical success spawn cwd (actual capture, 2026-08-14):

`/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218`

Failed campaign cwd (session log pid 19887):

`.../sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15`

Dirty gateway timeout change cannot explain a 4511 ms exit (resolvedMaxDurationMs=900000).

## SQLite read-only evidence

DB: `.../real-bounded-reproof-20260817-191840/runtime/qa-product-real.sqlite` via `file:?mode=ro`. No INSERT/UPDATE/DELETE/VACUUM/writable pragma.

Compact attempt row:

```json
[{"attempt_id":"xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824","status":"failed","version":3,"stopReason":"REAL_PROCESS_NONZERO_EXIT","technicalExitCode":1,"durationMs":4511,"startedAt":"2026-08-17T17:20:54.715Z","failedAt":"2026-08-17T17:20:59.730Z","resolvedMaxDurationMs":900000,"stdout":null,"stderr":null}]
```

Confirmed: Attempt id, status failed, technicalExitCode 1, stopReason REAL_PROCESS_NONZERO_EXIT, resolvedMaxDurationMs 900000, started/failed timestamps, stdout/stderr JSON null, processRef JSON null on Attempt (processRef is on safety journal frontier pid:19887). Evidence 0. ReviewBundle 0. Decision accepted opt:go. Contract action/target/scope match handoff. oa_confirmations table absent (as previously recorded).

## Runner stdout/stderr durability

# Runner stdout/stderr durability — diagnosis only

Scope: NodeCursorProcessRunner + completeBoundedReadOnlyLaunch + RecordExecutionFailure.
No redesign.

## 1. Where are child stdout/stderr captured?

`NodeCursorProcessRunner.invoke` spawns with `stdio: ["ignore","pipe","pipe"]`.
`child.stdout` / `child.stderr` `data` handlers append into process-local strings capped at 64 KiB (`NODE_CURSOR_STDOUT_CAP_BYTES` / `NODE_CURSOR_STDERR_CAP_BYTES`).
On `close`, `finish()` copies those strings onto the `TrackedProcess` and resolves `completion`.

## 2. Are they retained in the process-local Map after close?

Yes, while the Next process lives.
`private readonly processes = new Map<string, TrackedProcess>()` — comment in source: "Single process-local observation registry — not Evidence, not durable."
`observe()` / `awaitCompletion()` read that Map.
Nothing deletes the entry after close in the current runner, but the Map is heap-local to the NodeCursorProcessRunner instance inside the Next server.

## 3. Which object sees stdout/stderr at O3 terminal harvest?

`completeBoundedReadOnlyLaunch` calls `launchPort.observe` then `awaitCompletion`.
On this wiring those methods delegate to the runner Map.
`toNoraObservationFacts` copies stdout/stderr capped at 4 KiB (`NORA_STDOUT_CAP` / `NORA_STDERR_CAP`).
On nonzero exit it still builds `facts` from the observation, then calls `RecordExecutionFailure` **without** passing stdout/stderr.

`finishBoundedAttempt` only forwards `facts` into `ingestEvidenceAndRecommend` when `attempt.status === "succeeded"`.
Failed Attempts therefore drop in-memory stdout/stderr after the HTTP response. The operator verdict recorded `exitCode: null` even though SQLite later had `technicalExitCode: 1`.

## 4. Which fields are persisted to ExecutionAttempt?

`RecordExecutionFailure` writes: `status=failed`, `failedAt`, `stopReason`, `technicalExitCode`, `durationMs`, optional `errorRef` / `logRefs`.
`ExecutionAttempt` type has **no** `stdout` / `stderr` / `processRef` fields.
SQLite `payload_json` for this Attempt: `technicalExitCode=1`, `stopReason=REAL_PROCESS_NONZERO_EXIT`, `stdout`/`stderr` JSON-null, `processRef` JSON-null.
`processRef` lives on the M4 safety journal frontier (`LAUNCHED` / `pid:19887`), not on the Attempt row.

## 5. Why durable Attempt contains technicalExitCode but not stdout/stderr?

Deliberate schema: Attempt records technical terminal fields only.
Observation streams are typed on `RealProcessObservation` (port), not on `ExecutionAttempt`.
Harvest copies exitCode into Attempt and keeps streams process-local / ephemeral Nora facts.

## 6. Could the failed session output have been persisted without architectural change?

Partially.
At harvest time the strings existed in the runner Map.
They could have been:
- attached to the existing `logRefs` slot (schema allows up to 16 OA identifiers, but there is no durable log blob store wired here);
- copied into an audit `payload_json` (oa_audit_events exists);
- returned in the F3 payload and captured by the operator.

None of that was done. Persisting them as first-class Attempt fields **would** be a schema/architecture change (V3-F10).

## 7. Omission, contract, or V3-F10?

All three, layered:

- Implementation omission: harvest sees stdout/stderr and does not copy them anywhere durable, including `logRefs`.
- Deliberate contract: `ExecutionAttempt` omits stdout/stderr.
- Architectural consequence of V3-F10: process-local execution observation is not Evidence and dies with the server.

## 8. Does current design make a failed external process materially non-diagnosable after server stop?

From **product SQLite alone: yes**.
After Next stop, Attempt has exit code 1 and no CLI text.
This cycle recovered the cause only because Cursor wrote a session log under `/var/folders/.../T/cursor-agent-logs-501/` that still existed.

V3-F10 remains open diagnostic debt. It is **not** the blocker for this Cycle 9 verdict because the session log was found.

## Hypotheses matrix

# Hypotheses H1–H10

Primary CONFIRMED: **H4 only**.

| ID | Title | Status | Confidence |
|---|---|---|---|
| H1 | Cursor CLI / cursor-agent version drift | REJECTED | HIGH |
| H2 | Unsupported/changed argv flag | REJECTED | HIGH |
| H3 | Auth/session unavailable/expired | REJECTED | HIGH |
| H4 | Workspace path / trust-marker ENAMETOOLONG | CONFIRMED | HIGH |
| H5 | Sandbox initialization failure | REJECTED | HIGH |
| H6 | Executable resolution/wrapper drift | REJECTED | HIGH |
| H7 | Environment inheritance issue | REJECTED | MEDIUM |
| H8 | Product gateway/runner argv/spawn regression | REJECTED | HIGH |
| H9 | External Cursor runtime/model/network failure | REJECTED | HIGH |
| H10 | Cause unrecoverable (missing diagnostics / V3-F10) | REJECTED | HIGH |

See `hypotheses-matrix.json` for FOR / AGAINST / missing evidence per row.

```json
{
  "rule": "At most one CONFIRMED primary root cause",
  "primary": "H4",
  "classification": "D. WORKSPACE / SANDBOX / PATH / PERMISSION FAILURE",
  "hypotheses": [
    {
      "id": "H1",
      "title": "Cursor CLI / cursor-agent version drift",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [
        "Desktop app version changed 3.15.19 → 3.16.17 / commit 6b2afae0… vs de07bee8…"
      ],
      "against": [
        "wrapper SHA identical",
        "cursor-agent version+SHA identical",
        "failed session log loaded the same index.js 2026.08.11-e8db854 as historical success"
      ],
      "missing": [],
      "note": "Version difference of the desktop app is a lead, not proof. Agent binary that exited is unchanged."
    },
    {
      "id": "H2",
      "title": "unsupported/changed argv flag",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [],
      "against": [
        "argv shape identical to historical success including --trust --sandbox enabled --mode ask",
        "session log shows cli.run.mode headless/print_flag accepted",
        "no unknown-option event in pid 19887 log"
      ],
      "missing": [
        "actual spawn argv capture in 191840 campaign"
      ]
    },
    {
      "id": "H3",
      "title": "auth/session unavailable/expired",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [],
      "against": [
        "statsig.updateUser.success in pid 19887 log",
        "OS log SecItemCopyMatching at 19:20:56.528",
        "api_key_env false (same as historical success)"
      ],
      "missing": []
    },
    {
      "id": "H4",
      "title": "workspace path / Cursor trust-marker ENAMETOOLONG",
      "status": "CONFIRMED",
      "confidence": "HIGH",
      "for": [
        "Tier-1 session log pid 19887 last event: Failed to create trust marker ENAMETOOLONG mkdir ~/.cursor/projects/<269-char slug>",
        "NAME_MAX 255 exceeded by 14",
        "trust marker dir ABSENT",
        "historical success cwd 172 chars would not exceed NAME_MAX",
        "historical success continued past cli.run.mode to agent_cli.turn.start",
        "failed session never reached agent_cli.turn.start",
        "failed worktree exists (HEAD 0d334785, porcelain empty) — not a missing workspace"
      ],
      "against": [
        "Cursor labeled the event DEBUG rather than FATAL; no explicit 'exiting 1 because trust marker' line"
      ],
      "missing": [
        "product-persisted stderr from pid 19887"
      ],
      "note": "CONFIRMED via GO rule A: direct failed-process log explicitly identifying the error, tied to pid 19887."
    },
    {
      "id": "H5",
      "title": "sandbox initialization failure",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [],
      "against": [
        "sandbox.configureSuccess colocated cursorsandbox in pid 19887 log BEFORE the trust-marker error"
      ],
      "missing": []
    },
    {
      "id": "H6",
      "title": "executable resolution/wrapper drift",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [],
      "against": [
        "wrapper path+SHA identical to historical success",
        "wrapper still execs ~/.local/bin/cursor-agent",
        "agent SHA identical"
      ],
      "missing": []
    },
    {
      "id": "H7",
      "title": "environment inheritance issue",
      "status": "REJECTED",
      "confidence": "MEDIUM",
      "for": [
        "Child env includes product flags SFIA_STUDIO_CURSOR_REAL=1 and inherited SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1"
      ],
      "against": [
        "ENAMETOOLONG is a filesystem NAME_MAX failure on a derived dirname, not an env lookup"
      ],
      "missing": [
        "full child env dump from pid 19887"
      ]
    },
    {
      "id": "H8",
      "title": "product gateway/runner invocation regression (argv/spawn)",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [
        "Dirty candidate gateway differs from HEAD: timeoutMs now request.timeoutMs instead of default 60000",
        "composeStudioProductRealBoundary.ts did not exist at historical M4 base 2d1361ee"
      ],
      "against": [
        "argv shape UNCHANGED vs 2d1361ee gateway",
        "runner spawn options UNCHANGED",
        "workspacePathForAttempt UNCHANGED",
        "timeout 900000 cannot explain 4511ms nonzero exit"
      ],
      "missing": [],
      "note": "Product constructs execRoot under current studioRoot without NAME_MAX fail-closed. Contributing robustness gap, not a confirmed argv regression."
    },
    {
      "id": "H9",
      "title": "external Cursor runtime/model/network failure",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [
        "OS log TLS trust evaluate failures at 19:20:56.535–540"
      ],
      "against": [
        "failed session never reached agent_cli.turn.start",
        "historical success also used network and produced M4_READ_ONLY_OK",
        "abort colocated with local ENAMETOOLONG mkdir"
      ],
      "missing": []
    },
    {
      "id": "H10",
      "title": "cause unrecoverable because stdout/stderr/session diagnostics missing",
      "status": "REJECTED",
      "confidence": "HIGH",
      "for": [
        "Durable Attempt has technicalExitCode=1 but stdout/stderr null — V3-F10 process-local observation"
      ],
      "against": [
        "Tier-1 cursor-agent session log for pid 19887 was found and identifies ENAMETOOLONG"
      ],
      "missing": [],
      "note": "V3-F10 remains durability debt. It did not block this forensic cycle."
    }
  ]
}
```

## Root-cause classification

# Root-cause assessment — pid 19887 exit 1

## Primary classification

**D. WORKSPACE / SANDBOX / PATH / PERMISSION FAILURE**

More precisely: Cursor CLI `--trust` marker mkdir failed with **ENAMETOOLONG** because the flattened `~/.cursor/projects/<slug>` last path component is **269 characters** (Darwin NAME_MAX **255**, overage **+14**).

Not a missing worktree. The isolated Git worktree exists, HEAD `0d334785`, porcelain empty.

## Confidence

**CONFIRMED / HIGH**

GO rule A satisfied: direct failed-process log for pid 19887 identifies the error.

Residual uncertainty (not enough to demote): Cursor labeled the event `DEBUG`; no line saying `exit 1 because trust marker`. Control comparison: historical success continued immediately after `cli.run.mode` to `privacy.refresh.start` then `agent_cli.turn.start`. Failed session ends at the ENAMETOOLONG event and never starts a turn.

## Causal chain

1. Product `StudioGitWorktreeWorkspace` created the isolated worktree under `studioRoot/.sfia-exec/m4-worktrees/`.
2. Nested SFIA review worktree made `studioRoot` very long (failed worktree abs path 273 chars).
3. Gateway passed that path as `--workspace` and `--trust` (argv shape historically successful).
4. Cursor derived `~/.cursor/projects/<flattened-path-with-slashes-as-dashes>`.
5. `mkdir` failed ENAMETOOLONG.
6. Agent process never reached `agent_cli.turn.start`.
7. Process exited 1. Product recorded `REAL_PROCESS_NONZERO_EXIT` / `technicalExitCode=1`. Correct failure semantics.

## Not the cause

- cursor-agent version/SHA (identical to 2026-08-14 success)
- wrapper SHA (identical)
- argv flags/order/sandbox syntax
- auth (updateUser.success + SecItemCopyMatching)
- sandbox binary missing (configureSuccess)
- OpenAI / model (turn never started)
- timeout (900000 ms vs 4511 ms)
- V3-F10 missing stdout (blocked product-side diagnosis, not the original exit)

## Contributing gap (not second CONFIRMED cause)

Product does not fail-closed when the Cursor-derived project directory name would exceed NAME_MAX.
That is a robustness/preflight gap for Delivery, not an argv regression vs 2d1361ee.

## Recommended next route (recommendation only)

Cycle 8 — Delivery Amend — Critical — ZERO REAL
Smallest bounded correction: fail-closed or shorten isolated worktree identity so Cursor trust-marker dirname stays ≤ 255 before spawn.

No implementation in this cycle. No automatic REAL retry.

## Confidence / missing evidence

CONFIRMED / HIGH under GO rule A (direct pid 19887 log).
Missing: product-persisted stderr; explicit Cursor 'exiting because trust marker' line; actual spawn argv capture in 191840 (reconstruction used).
Not missing: session log, NAME_MAX measurement, historical short-path control, SQLite terminal fields, worktree existence.

## Candidate immutability

PRE=POST. No versioned write. Only `.tmp-sfia-review/cycle-9-cursor-real-exit1-diagnostic-20260817-193158/**` and `.tmp-sfia-review/chatgpt-review.md`. Historical campaign and REAL worktree untouched.

## ZERO REAL accounting

OpenAI LIVE = 0. Cursor REAL launches = 0. New REAL Projects = 0. New REAL Attempts = 0. New REAL worktrees = 0. New agent sessions = 0. Cursor binaries not executed. Next not started.

## Recommended next route (recommendation only)

Cycle 8 — Delivery Amend — Critical — ZERO REAL
Smallest bounded correction: fail-closed or shorten isolated worktree identity so Cursor `--trust` marker dirname ≤ NAME_MAX (255) before spawn.
No implementation in this cycle. No Morris decision invented. No automatic REAL retry.
Environment alternative (shorter candidate root / TMP execRoot as in 2026-08-14) remains Morris-optional, not selected here as the primary route because the product constructs execRoot from studioRoot and nested review worktrees are the operating-model default.

## Reserves / debt

- V3-F10: Attempt still does not persist stdout/stderr; diagnosis depended on a volatile `/var/folders` session log.
- Cursor DEBUG-level trust-marker error: no documented fatal mapping.
- Desktop app 3.16.17 vs 3.15.19 unused as cause (agent SHA unchanged).
- Bounded happy path still not proven.

## Claims / anti-claims

Claims: pid 19887 aborted after ENAMETOOLONG on Cursor trust-marker mkdir; product correctly marked Attempt failed; ZERO REAL forensic; candidate immutable.
Anti-claims: PRE-M6 complete; runtime v3 adopted; bounded happy path proven; Cursor CLI flag incompatibility; auth failure; sandbox missing; agent version drift as cause; automatic REAL retry authorized; V3-F10 selected as the unrecoverable blocker for this diagnosis.

## Verdict (taxonomy A)

```json
{
  "taxonomy": "A",
  "verdict": "PASS — CYCLE 9 QA FORENSIC DIAGNOSTIC — CURSOR REAL EXIT CODE 1 ROOT CAUSE ATTRIBUTED",
  "primaryCauseClass": "D. WORKSPACE / SANDBOX / PATH / PERMISSION FAILURE",
  "primaryHypothesis": "H4",
  "directError": "ENAMETOOLONG: name too long, mkdir ~/.cursor/projects/<269-char flattened worktree slug>",
  "processRef": "pid:19887",
  "technicalExitCode": 1,
  "stopReason": "REAL_PROCESS_NONZERO_EXIT",
  "confidence": "CONFIRMED / HIGH",
  "zeroReal": true,
  "productMutation": false,
  "boundedHappyPathProven": false,
  "preM6": "NON COMPLETE",
  "runtimeV3": "NON ADOPTED",
  "automaticRealRetry": false,
  "recommendedRoute": "Cycle 8 Delivery Amend — Critical — ZERO REAL — NAME_MAX / trust-marker path fail-closed or shortened execRoot identity",
  "v3f10": "open debt; not the blocker for this diagnosis"
}
```

## Exact next gate

MORRIS — ACCEPT / REJECT
CURSOR REAL EXIT 1 ROOT CAUSE DIAGNOSIS

AND

GO / NO-GO
CYCLE 8 DELIVERY AMEND
NAME_MAX / CURSOR TRUST-MARKER PATH FAIL-CLOSED OR SHORTENED EXECROOT IDENTITY
ZERO REAL

No automatic REAL retry.

## Instruction ChatGPT

Read the remote canonical Review Handoff before validating this report.
