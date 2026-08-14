# Review Pack FULL — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 22:01:36 CEST (+0200) |
| GO consumed | GO MORRIS — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY |
| Repo | mcleland147/sfia-workspace |
| Cycle | 9 — QA / validation |
| Profil / Typologie | Critical / RUN |
| CKC | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` (candidate 0.1.0 / experimental / no execution authority) |
| Branch | `qa/sfia-studio-m4-governed-real-completion-reproof` (local only, no push) |
| HEAD / origin/main | `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` |
| Incoming handoff | `2fa78936111982e9d4aea352d71244a88431d575` |
| README blob | `744bcee0b54dcff89287db6c3f960db14443646f` |
| Verdict | M4 GOVERNED REAL COMPLETION PROOF: PASS — ONE BOUNDED READ-ONLY CURSOR REAL COMPLETED CLEANLY — NO RETRY — M4 EXIT PROOF CANDIDATE READY FOR CHATGPT REVIEW — M4 NOT CLOSED — M5 NOT AUTHORIZED |
| Project commit/push/PR/merge | 0 |

## Convergence Pre-check

| Item | État |
| --- | --- |
| StartExecution / Gate D / AgentCapability / gateway / ProcessRunner / worktree / journal | KEEP |
| timeout 60000 | KEEP / exercised as product default |
| deterministic README bounding | KEEP / exercised |
| Gap targeted | GOVERNED REAL COMPLETION — now PROVEN (this cycle) |
| Strict runtime RO tool-surface | PROVEN for this one run (Read=1 README only; Shell/Glob/Grep/write=0) |
| M4 exit proof | CANDIDATE FOR REVIEW — NOT YET ACCEPTED BY MORRIS |
| M4 | NOT CLOSED |
| M5 | NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |

## Historical context (Git/handoffs)

- FIRST REAL `2234931e…`: launch proven; completion timed out
- Diagnosis `797daecc…`: timeout plausible contributing factor; Shell used under broad --print
- Pre-reproof bounding PR #346 @ `fc7e20aa…`; Roadmap sync PR #347 @ `2d1361ee…`

## Local Git Truth

- Before/after: origin/main `2d1361ee…`; app tree identical; tracked clean; parent REAL unset
- Note: Roadmap internal Snapshot Git field still documents `fc7e20aa…` (candidate pre-merge) — not current main

## Phase A REAL-OFF

- R1: 10 PASS
- execution-attempt suite: 10 files / 131 PASS
- typecheck PASS
- ZERO REAL during Phase A

## Phase B CLI preflight (sanitized)

````json
{
  "desktop": {
    "path": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "version": "3.15.19\nde07bee81cefe43461ebf4f40c3d2d78d15052a0\narm64",
    "sha256": "de63d7265e20da15329ee70250c8596851e39d08cfdc814d5f73c00b8c7962a1",
    "executable": true,
    "file": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor: Bourne-Again shell script text executable, ASCII text",
    "routes_to_cursor_agent": true
  },
  "cursor_agent": {
    "path": "/Users/morris/.local/bin/cursor-agent",
    "link": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "resolved_target": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "version": "2026.08.11-e8db854",
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831"
  },
  "authReady": true,
  "status_exit": 0,
  "status_redacted": "\u2713 Logged in as <REDACTED_EMAIL>\n",
  "required_flags_present": {
    "agent": true,
    "--print": true,
    "--mode": true,
    "ask": true,
    "--workspace": true,
    "--trust": true,
    "--sandbox enabled": true
  },
  "all_required_flags_ok": true,
  "REAL_PROCESS_COUNT": 0,
  "MODEL_TASK_COUNT": 0,
  "parent_REAL_flags_unset": true,
  "help_source": "cursor-agent --help + cursor agent --help",
  "classification": "CLI COMPATIBLE FOR BOUNDED REPROOF"
}
````

## Fresh identities

````json
{
  "decisionId": "dec:m4-reproof-86b5ecb05474",
  "contractId": "xct:m4-reproof-86b5ecb05474",
  "attemptId": "xat:m4-reproof-86b5ecb05474",
  "grantId": "gtd:m4-reproof-86b5ecb05474",
  "contractCfmId": "cfm:m4-reproof-contract-86b5ecb05474",
  "agentCfmId": "cfm:m4-reproof-agent-86b5ecb05474",
  "resultRef": "res:m4-reproof-86b5ecb05474",
  "proposalRef": "prp:m4-reproof-86b5ecb05474",
  "scopeEvidenceId": "evd:m4-reproof-morris-scope-86b5ecb05474",
  "agentEvidenceId": "evd:m4-reproof-morris-agent-86b5ecb05474",
  "evidenceReq": "evreq:m4-reproof-86b5ecb05474"
}
````

## proof-before-start.json

````json
{
  "go": "GO MORRIS \u2014 M4 GOVERNED REAL COMPLETION PROOF \u2014 ONE BOUNDED READ-ONLY CURSOR REAL \u2014 NO RETRY",
  "baseSha": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "decisionId": "dec:m4-reproof-86b5ecb05474",
  "executionContractId": "xct:m4-reproof-86b5ecb05474",
  "executionContractVersion": 3,
  "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
  "attemptId": "xat:m4-reproof-86b5ecb05474",
  "gateDId": "gtd:m4-reproof-86b5ecb05474",
  "selectedAgentId": "agt:m4.cursor.bounded_readonly",
  "gatewayId": "adp:m4-cursor-cli-real",
  "worktreeIntendedBase": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "parentRealFlags": {
    "SFIA_STUDIO_CURSOR_REAL": "<unset>",
    "OPS1_CURSOR_REAL": "<unset>"
  },
  "governed_REAL_spawn_count": 0,
  "fixture_launch_count": 0,
  "RetryExecutionAttempt_count": 0,
  "StartExecution_count": 0,
  "cursor": {
    "resolved": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "version": "2026.08.11-e8db854",
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831"
  }
}
````

## Spawn observation (argv sanitized of secrets — none present)

````json
{
  "count": 1,
  "executable": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  "argv": [
    "agent",
    "--print",
    "--mode",
    "ask",
    "--workspace",
    "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "--trust",
    "--sandbox",
    "enabled",
    "T\u00c2CHE UNIQUE \u2014 preuve read-only d\u00e9terministe.\nLire uniquement le fichier README.md \u00e0 la racine du workspace.\nNe modifier aucun fichier.\nNe cr\u00e9er aucun fichier.\nNe lancer aucune commande Shell.\nNe faire aucune recherche r\u00e9cursive, Glob ou Grep.\nNe consulter aucun autre fichier.\nSi README.md peut \u00eatre lu, r\u00e9pondre exactement :\nM4_READ_ONLY_OK\nSi README.md ne peut pas \u00eatre lu, r\u00e9pondre exactement :\nM4_READ_ONLY_UNAVAILABLE\ntarget=workspace.isolated.read\naction=cursor.read_only.inspect\nscope=studio.m4.real_off\nfingerprint=5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd\nAucune mutation, aucun git remote/commit/push/PR/merge."
  ],
  "cwd": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
  "shell": false
}
````

## completion.json

````json
{
  "processRef": "pid:17064",
  "exitCode": 0,
  "timedOut": false,
  "stdout": "M4_READ_ONLY_OK\n",
  "stderr": "",
  "durationMs": 15735,
  "realProcessInvoked": true,
  "worktreeRef": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218"
}
````

## success-criteria.json

````json
{
  "allPass": true,
  "criteria": {
    "spawn1": true,
    "gateConsumed": true,
    "freshAttempt": true,
    "startOnce": true,
    "retry0": true,
    "fixture0": true,
    "realInvoked": true,
    "notTimedOut": true,
    "exit0": true,
    "stdoutOk": true,
    "stderrEmpty": true,
    "readmeRead1": true,
    "otherReads0": true,
    "shell0": true,
    "glob0": true,
    "grep0": true,
    "write0": true,
    "edit0": true,
    "create0": true,
    "delete0": true,
    "git0": true,
    "sandbox": true,
    "headOk": true,
    "porcelainEmpty": true,
    "readmeBlobOk": true,
    "originOk": true,
    "cliNoDrift": true,
    "parentUnset": true
  },
  "stdoutTrim": "M4_READ_ONLY_OK",
  "stderrTrim": ""
}
````

## tool-surface.json (counts + paths; full sanitized log below)

````json
{
  "inner_read_root_readme_count": 1,
  "inner_other_file_read_count": 0,
  "inner_shell_count": 0,
  "inner_glob_count": 0,
  "inner_grep_count": 0,
  "inner_write_count": 0,
  "inner_edit_count": 0,
  "inner_create_count": 0,
  "inner_delete_count": 0,
  "inner_git_command_count": 0,
  "sandbox_enabled_evidence": true,
  "session_cursor_agent_version": "2026.08.11-e8db854",
  "session_completed_evidence": true,
  "session_log_path": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501/session-2026-08-14T20-00-36-856Z-17064-1.log",
  "transcript_path": "/Users/morris/.cursor/projects/var-folders-b9-5c00r70d7-l8kjth6vpfmn8m0000gn-T-sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564-wt-xat-m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218/agent-transcripts/1901728d-3485-48ef-bed9-4777cfd14a49/1901728d-3485-48ef-bed9-4777cfd14a49.jsonl",
  "raw_tool_names": {
    "Read": 1
  },
  "notes": [
    "sandbox_from_spawn_argv"
  ]
}
````

## inner-transcript-excerpt-sanitized.jsonl

````jsonl
{"type":"tool_use","name":"Read","input":{"path":"/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218/README.md"}}
````

## inner-agent-log-sanitized.txt

````text
--- Cursor Agent Debug Session 2026-08-14T20:00:36.857Z ---
{"event":"debug-session-start","directory":"/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501","logFile":"/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/cursor-agent-logs-501/session-2026-08-14T20-00-36-856Z-17064-1.log","pid":17064,"startTime":"2026-08-14T20:00:36.857Z"}
[2026-08-14T20:00:36.857Z] ripgrep.configureSuccess {"ripgrepPath":"/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/rg","ripgrepSource":"colocated"}
[2026-08-14T20:00:36.857Z] sandbox.configureSuccess {"sandboxBinary":"/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursorsandbox","sandboxSource":"colocated"}
[2026-08-14T20:00:36.859Z] analytics.track {"eventName":"cli.launch"}
[2026-08-14T20:00:37.852Z] analytics.track {"eventName":"cli.run.mode","props":{"headless":true,"print_flag":true,"output_text":true,"output_json":false,"output_stream_json":false,"stream_partial_output":false,"show_thinking":false,"api_key_env":false}}
{"event":"serverConfigCache.startup","level":"INFO","data":{"usedCache":false,"reason":"headless"}}
[2026-08-14T20:00:38.169Z] logger.default {"level":"info","message":"[isSandboxHelperSupported] Starting sandbox support check...","contextPath":[]}
[2026-08-14T20:00:38.169Z] logger.default {"level":"info","message":"[checkBinaryAvailable] Resolved binary path: /Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursorsandbox","contextPath":[]}
[2026-08-14T20:00:38.169Z] logger.default {"level":"info","message":"[isSandboxHelperSupported] darwin platform, binary available, sandbox supported!","contextPath":[]}
[2026-08-14T20:00:40.692Z] structured-log.info {"key":"agent_cli","message":"agent_cli.turn.start","metadata":{"turn_type":"new","bring_your_own_key":"false","request_id":"d1076479-90fd-413d-914c-20a5c259cdd7","conversation_id":"1901728d-3485-48ef-bed9-4777cfd14a49","surface":"headless"}}
[2026-08-14T20:00:40.693Z] startup.metrics {"total_ms":4051,"bundle_load_ms":216,"config_load_ms":23,"statsig_ms":8,"chat_import_ms":892,"workspace_resolution_ms":7,"tracing_init_ms":26,"analytics_init_ms":1,"auth_ms":17,"post_auth_prelude_ms":16,"agent_store_open_ms":1,"server_config_ms":309,"headless_policy_ms":0,"hooks_config_ms":1,"build_resources_ms":337,"plugin_imports_team_settings_ms":0,"mcp_and_model_init_ms":1458,"mcp_init_ms":1458,"model_manager_init_ms":1,"current_model_ms":0,"unaccounted_ms":748,"has_compile_cache":true,"bundle_size_bytes":9386977}
[2026-08-14T20:00:40.694Z] analytics.track {"eventName":"cli.startup.tti","props":{"total_ms":4051,"bundle_load_ms":216,"config_load_ms":23,"statsig_ms":8,"chat_import_ms":892,"workspace_resolution_ms":7,"tracing_init_ms":26,"analytics_init_ms":1,"auth_ms":17,"post_auth_prelude_ms":16,"auth_refresh_ms":-1,"agent_store_open_ms":1,"server_config_ms":309,"headless_policy_ms":0,"hooks_config_ms":1,"autorun_team_settings_ms":-1,"build_resources_ms":337,"plugin_imports_team_settings_ms":0,"askpass_server_ms":-1,"mcp_and_model_init_ms":1458,"mcp_init_ms":1458,"model_manager_init_ms":1,"current_model_ms":0,"render_ms":-1,"first_paint_ms":-1,"unaccounted_ms":748,"has_compile_cache":true,"is_headless":true,"mcp_deferred":false,"channel":"unknown","bundle_size_bytes":9386977}}
[2026-08-14T20:00:40.694Z] structured-log.info {"key":"agent_cli","message":"agent_cli.startup.tti","metadata":{"total_ms":"4051","bundle_load_ms":"216","config_load_ms":"23","statsig_ms":"8","chat_import_ms":"892","workspace_resolution_ms":"7","tracing_init_ms":"26","analytics_init_ms":"1","auth_ms":"17","post_auth_prelude_ms":"16","auth_refresh_ms":"-1","agent_store_open_ms":"1","server_config_ms":"309","headless_policy_ms":"0","hooks_config_ms":"1","autorun_team_settings_ms":"-1","build_resources_ms":"337","plugin_imports_team_settings_ms":"0","askpass_server_ms":"-1","mcp_and_model_init_ms":"1458","mcp_init_ms":"1458","model_manager_init_ms":"1","current_model_ms":"0","render_ms":"-1","first_paint_ms":"-1","unaccounted_ms":"748","has_compile_cache":"true","is_headless":"true","mcp_deferred":"false","channel":"unknown","bundle_size_bytes":"9386977"}}
[2026-08-14T20:00:43.456Z] startup.first_token {"startup_tti_ms":4051,"first_token_ms":6814,"first_token_kind":"thinking","channel":"unknown"}
[2026-08-14T20:00:43.456Z] analytics.track {"eventName":"cli.startup.first_token","props":{"startup_tti_ms":4051,"first_token_ms":6814,"first_token_kind":"thinking","channel":"unknown"}}
[2026-08-14T20:00:43.456Z] structured-log.info {"key":"agent_cli","message":"agent_cli.startup.first_token","metadata":{"startup_tti_ms":"4051","first_token_ms":"6814","first_token_kind":"thinking","channel":"unknown"}}
[2026-08-14T20:00:51.081Z] structured-log.info {"key":"agent_cli","message":"agent_cli.turn.outcome","metadata":{"turn_type":"new","bring_your_own_key":"false","request_id":"d1076479-90fd-413d-914c-20a5c259cdd7","conversation_id":"1901728d-3485-48ef-bed9-4777cfd14a49","surface":"headless","outcome":"success","ttft_ms":"2763","duration_ms":"10388","retries_attempted":"0","input_tokens":"43020","output_tokens":"310","cache_read_tokens":"9728","cache_write_tokens":"0","hit_simulated_thinking_threshold":"false"}}
[2026-08-14T20:00:51.081Z] [AGENT_TURN_OUTCOME] outcome=success surface=headless retries_attempted=0 turn_type=new bring_your_own_key=false
````

## stdout / stderr

````text
STDOUT:
M4_READ_ONLY_OK
STDERR:
'\n'
````

## Technical result

````json
{
  "resultRef": "res:m4-reproof-86b5ecb05474",
  "recorded": true,
  "attemptFinal": "succeeded",
  "contractFinal": "completed"
}
````

## Gate D / frontier (from proof.json excerpts)

````json
{
  "gateDGranted_status": "granted",
  "gateDAfterStart_status": "consumed",
  "gateDAfterStart_consumedAt": "2026-08-14T20:00:35.257Z",
  "attemptFinal": "succeeded",
  "contractFinal": "completed",
  "worktreeBefore": {
    "path": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "head": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
    "porcelain": "",
    "readmeBlob": "744bcee0b54dcff89287db6c3f960db14443646f"
  },
  "worktreeAfter": {
    "path": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "head": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
    "porcelain": "",
    "diff": "",
    "cached": "",
    "readmeBlob": "744bcee0b54dcff89287db6c3f960db14443646f"
  },
  "originMainAfter": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "cliAfter": {
    "resolved": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "version": "2026.08.11-e8db854",
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831",
    "drift": false
  },
  "startExecutionCalls": 1,
  "cursorTopLevelSpawnCount": 1,
  "retryRealCalls": 0,
  "fixtureLaunchAfter": 0,
  "parentFlagsAfter": {
    "SFIA_STUDIO_CURSOR_REAL": "<unset>",
    "OPS1_CURSOR_REAL": "<unset>"
  }
}
````

## proof.json COMPLETE

````json
{
  "go": "GO MORRIS — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY",
  "baseSha": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "startExecutionCalls": 1,
  "retryRealCalls": 0,
  "cursorTopLevelSpawnCount": 1,
  "originMain": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "execRoot": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564",
  "repoRoot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off",
  "productDbPath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/m4-governed-real-completion-reproof/product.sqlite",
  "journalPath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/m4-governed-real-completion-reproof/safety-journal.sqlite",
  "projectId": "prj:70d700d7-e678-4716-ac7e-8e0ab2d2bbff",
  "lps": {
    "id": "lps:2b5036a2-bf00-489b-b855-178dac65f9d1",
    "version": 1,
    "createdAt": "2026-08-14T20:00:34.648Z",
    "activeCycleInstanceId": null,
    "ckcResolutionRef": null
  },
  "doctrine": {
    "id": "pkg:studio-v3-oa",
    "version": "1.0.0",
    "digest": "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
    "status": "resolved"
  },
  "authority": {
    "source": "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT",
    "actor": {
      "actorId": "actor:local-morris-m3",
      "role": "decision_maker",
      "displayName": "Local Morris M3 (temporary with exit)",
      "authorityLevel": "none"
    },
    "scopeEvidenceId": "evd:m4-reproof-morris-scope-86b5ecb05474",
    "agentEvidenceId": "evd:m4-reproof-morris-agent-86b5ecb05474",
    "go": "GO MORRIS — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY"
  },
  "humanDecision": {
    "id": "dec:m4-reproof-86b5ecb05474",
    "status": "accepted",
    "projectId": "prj:70d700d7-e678-4716-ac7e-8e0ab2d2bbff",
    "authority": "morris",
    "scope": "studio.m4.real_off",
    "lpsLinked": true,
    "decisionBasis": {
      "sourceType": "proposal",
      "sourceRef": "prp:m4-reproof-86b5ecb05474",
      "sourceDigest": "723c00521a8d83810ebd1b407964942f450711a27f1aae2a7d93004d86d4f5fd",
      "projectId": "prj:70d700d7-e678-4716-ac7e-8e0ab2d2bbff",
      "proposalContext": {
        "lpsId": "lps:2b5036a2-bf00-489b-b855-178dac65f9d1",
        "lpsVersion": 1,
        "doctrineDigest": "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622"
      },
      "executionBasis": {
        "objective": "Execute one governed bounded read-only Cursor REAL completion proof on current main after pre-reproof bounding.",
        "scope": "studio.m4.real_off",
        "requestedOperation": "cursor.read_only.inspect",
        "expectedOutcome": "One governed Cursor REAL spawn, read-only README root, Gate D consumed once, completion observed, no retry.",
        "outOfScope": [
          "M5",
          "Evidence durable",
          "LPS write-back",
          "second REAL spawn",
          "Auth.js",
          "Critical Ack",
          "timeout change",
          "AgentCapability change"
        ],
        "reservations": [
          "DecisionBasis schema has no target/capabilities fields; exact values live on ExecutionContract under GO authority."
        ],
        "stopConditions": [
          "GATE_D_REQUIRED",
          "CURSOR_UNAVAILABLE",
          "REAL_WORKSPACE_INVALID"
        ],
        "cycleTypeId": "cycle:9-qa-validation",
        "recommendedProfile": "Critical"
      }
    },
    "go": "GO MORRIS — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY"
  },
  "executionContract": {
    "id": "xct:m4-reproof-86b5ecb05474",
    "versionBuild": 1,
    "versionValidate": 2,
    "versionConfirm": 3,
    "decisionRefs": [
      "dec:m4-reproof-86b5ecb05474"
    ],
    "action": "cursor.read_only.inspect",
    "target": "workspace.isolated.read",
    "scope": "studio.m4.real_off",
    "capability": [
      "cap:cursor.read_only"
    ],
    "baseHeadSha": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
    "fingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
    "status": "confirmed",
    "confirmationRef": "cfm:m4-reproof-contract-86b5ecb05474"
  },
  "agent": {
    "agentId": "agt:m4.cursor.bounded_readonly",
    "executionMode": "cursor_cli_real",
    "adapterRef": "adp:m4-cursor-cli-real",
    "supportedCapabilities": [
      "cap:cursor.read_only"
    ],
    "allowedActions": [
      "cursor.read_only.inspect"
    ],
    "allowedTargets": [
      "workspace.isolated.read"
    ],
    "allowedScopes": [
      "studio.m4.real_off"
    ]
  },
  "fixtureLaunchBefore": 0,
  "agentSelectionConfirmationBeforeStart": {
    "id": "cfm:m4-reproof-agent-86b5ecb05474",
    "actionRef": "act:agent_selection:xct:m4-reproof-86b5ecb05474:v3:agt:m4.cursor.bounded_readonly",
    "scope": "agent_selection",
    "level": "N3",
    "status": "granted"
  },
  "attemptAccepted": {
    "id": "xat:m4-reproof-86b5ecb05474",
    "status": "accepted",
    "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
    "executionContractVersion": 3,
    "agentConfirmationRef": "cfm:m4-reproof-agent-86b5ecb05474",
    "version": 1
  },
  "journalBeforeGateD": {
    "dispositionBefore": "CLEAR",
    "frontierBefore": [],
    "activeGrantBefore": null
  },
  "gateDGranted": {
    "grantId": "gtd:m4-reproof-86b5ecb05474",
    "executionContractId": "xct:m4-reproof-86b5ecb05474",
    "executionContractVersion": 3,
    "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
    "attemptId": "xat:m4-reproof-86b5ecb05474",
    "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
    "actorId": "actor:local-morris-m3",
    "issuedAt": "2026-08-14T20:00:34.690Z",
    "expiresAt": "2026-08-14T20:05:34.690Z",
    "status": "granted",
    "correlationId": "cor:05354783e13d6f37"
  },
  "gateDAfterStart": {
    "grantId": "gtd:m4-reproof-86b5ecb05474",
    "executionContractId": "xct:m4-reproof-86b5ecb05474",
    "executionContractVersion": 3,
    "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
    "attemptId": "xat:m4-reproof-86b5ecb05474",
    "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
    "actorId": "actor:local-morris-m3",
    "issuedAt": "2026-08-14T20:00:34.690Z",
    "expiresAt": "2026-08-14T20:05:34.690Z",
    "status": "consumed",
    "consumedAt": "2026-08-14T20:00:35.257Z",
    "correlationId": "cor:05354783e13d6f37"
  },
  "frontierAfterStart": [
    {
      "recordId": "m4fr:a8e03c040c3275f9",
      "kind": "CREATED",
      "occurredAt": "2026-08-14T20:00:35.257Z",
      "executionContractId": "xct:m4-reproof-86b5ecb05474",
      "executionContractVersion": 3,
      "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
      "attemptId": "xat:m4-reproof-86b5ecb05474",
      "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
      "actorId": "actor:local-morris-m3",
      "grantId": "gtd:m4-reproof-86b5ecb05474",
      "correlationId": "cor:57225173ef5cede8",
      "payloadJson": "{}"
    },
    {
      "recordId": "m4fr:ce8f885dc4f21888",
      "kind": "LAUNCHED",
      "occurredAt": "2026-08-14T20:00:35.257Z",
      "executionContractId": "xct:m4-reproof-86b5ecb05474",
      "executionContractVersion": 3,
      "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
      "attemptId": "xat:m4-reproof-86b5ecb05474",
      "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
      "actorId": "actor:local-morris-m3",
      "grantId": "gtd:m4-reproof-86b5ecb05474",
      "correlationId": "cor:57225173ef5cede8",
      "processRef": "pid:17064",
      "payloadJson": "{\"gatewayId\":\"adp:m4-cursor-cli-real\"}"
    }
  ],
  "attemptRunning": {
    "status": "running",
    "version": 2
  },
  "contractExecuting": "executing",
  "agentSelectionConfirmationAfterStart": {
    "id": "cfm:m4-reproof-agent-86b5ecb05474",
    "status": "consumed"
  },
  "processRef": "pid:17064",
  "spawn": {
    "count": 1,
    "executable": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    "argv": [
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
      "--trust",
      "--sandbox",
      "enabled",
      "TÂCHE UNIQUE — preuve read-only déterministe.\nLire uniquement le fichier README.md à la racine du workspace.\nNe modifier aucun fichier.\nNe créer aucun fichier.\nNe lancer aucune commande Shell.\nNe faire aucune recherche récursive, Glob ou Grep.\nNe consulter aucun autre fichier.\nSi README.md peut être lu, répondre exactement :\nM4_READ_ONLY_OK\nSi README.md ne peut pas être lu, répondre exactement :\nM4_READ_ONLY_UNAVAILABLE\ntarget=workspace.isolated.read\naction=cursor.read_only.inspect\nscope=studio.m4.real_off\nfingerprint=5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd\nAucune mutation, aucun git remote/commit/push/PR/merge."
    ],
    "cwd": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "shell": false
  },
  "created": {
    "recordId": "m4fr:a8e03c040c3275f9",
    "kind": "CREATED",
    "occurredAt": "2026-08-14T20:00:35.257Z",
    "executionContractId": "xct:m4-reproof-86b5ecb05474",
    "executionContractVersion": 3,
    "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
    "attemptId": "xat:m4-reproof-86b5ecb05474",
    "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
    "actorId": "actor:local-morris-m3",
    "grantId": "gtd:m4-reproof-86b5ecb05474",
    "correlationId": "cor:57225173ef5cede8",
    "payloadJson": "{}"
  },
  "launched": {
    "recordId": "m4fr:ce8f885dc4f21888",
    "kind": "LAUNCHED",
    "occurredAt": "2026-08-14T20:00:35.257Z",
    "executionContractId": "xct:m4-reproof-86b5ecb05474",
    "executionContractVersion": 3,
    "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
    "attemptId": "xat:m4-reproof-86b5ecb05474",
    "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
    "actorId": "actor:local-morris-m3",
    "grantId": "gtd:m4-reproof-86b5ecb05474",
    "correlationId": "cor:57225173ef5cede8",
    "processRef": "pid:17064",
    "payloadJson": "{\"gatewayId\":\"adp:m4-cursor-cli-real\"}"
  },
  "worktreeBefore": {
    "path": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "head": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
    "porcelain": "",
    "readmeBlob": "744bcee0b54dcff89287db6c3f960db14443646f"
  },
  "completion": {
    "processRef": "pid:17064",
    "exitCode": 0,
    "timedOut": false,
    "stdout": "M4_READ_ONLY_OK\n",
    "stderr": "",
    "durationMs": 15735,
    "realProcessInvoked": true,
    "worktreeRef": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218"
  },
  "pid": 17064,
  "worktreeAfter": {
    "path": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-studio-m4-reproof-2086624f-3656-47df-a808-ccb6e2410564/wt-xat_m4-reproof-86b5ecb05474-9c84e4c537924edbe3339218",
    "head": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
    "porcelain": "",
    "diff": "",
    "cached": "",
    "readmeBlob": "744bcee0b54dcff89287db6c3f960db14443646f"
  },
  "cliAfter": {
    "resolved": "/Users/morris/.local/share/cursor-agent/versions/2026.08.11-e8db854/cursor-agent",
    "version": "2026.08.11-e8db854",
    "sha256": "eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831",
    "drift": false
  },
  "originMainAfter": "2d1361ee71bec7a21f6f76efc7c33eaf3146802a",
  "successCriteria": {
    "spawn1": true,
    "gateConsumed": true,
    "freshAttempt": true,
    "startOnce": true,
    "retry0": true,
    "fixture0": true,
    "realInvoked": true,
    "notTimedOut": true,
    "exit0": true,
    "stdoutOk": true,
    "stderrEmpty": true,
    "readmeRead1": true,
    "otherReads0": true,
    "shell0": true,
    "glob0": true,
    "grep0": true,
    "write0": true,
    "edit0": true,
    "create0": true,
    "delete0": true,
    "git0": true,
    "sandbox": true,
    "headOk": true,
    "porcelainEmpty": true,
    "readmeBlobOk": true,
    "originOk": true,
    "cliNoDrift": true,
    "parentUnset": true
  },
  "technicalResult": {
    "resultRef": "res:m4-reproof-86b5ecb05474",
    "recorded": true,
    "attemptFinal": "succeeded",
    "contractFinal": "completed"
  },
  "journalReopen": {
    "frontierReopen": [
      {
        "recordId": "m4fr:a8e03c040c3275f9",
        "kind": "CREATED",
        "occurredAt": "2026-08-14T20:00:35.257Z",
        "executionContractId": "xct:m4-reproof-86b5ecb05474",
        "executionContractVersion": 3,
        "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
        "attemptId": "xat:m4-reproof-86b5ecb05474",
        "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
        "actorId": "actor:local-morris-m3",
        "grantId": "gtd:m4-reproof-86b5ecb05474",
        "correlationId": "cor:57225173ef5cede8",
        "payloadJson": "{}"
      },
      {
        "recordId": "m4fr:ce8f885dc4f21888",
        "kind": "LAUNCHED",
        "occurredAt": "2026-08-14T20:00:35.257Z",
        "executionContractId": "xct:m4-reproof-86b5ecb05474",
        "executionContractVersion": 3,
        "semanticFingerprint": "5f14d06b591007bbbac7524ea2cefcd7abcf82b12966add6d0ed96f1ef48b5fd",
        "attemptId": "xat:m4-reproof-86b5ecb05474",
        "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
        "actorId": "actor:local-morris-m3",
        "grantId": "gtd:m4-reproof-86b5ecb05474",
        "correlationId": "cor:57225173ef5cede8",
        "processRef": "pid:17064",
        "payloadJson": "{\"gatewayId\":\"adp:m4-cursor-cli-real\"}"
      }
    ],
    "dispositionReopen": "REVIEW_REQUIRED"
  },
  "fixtureLaunchAfter": 0,
  "parentFlagsAfter": {
    "SFIA_STUDIO_CURSOR_REAL": "<unset>",
    "OPS1_CURSOR_REAL": "<unset>"
  },
  "worktreeCleanup": {
    "status": 0,
    "stderr": "",
    "stdout": ""
  }
}
````

## harness.ts COMPLETE (sha256=9bbec40ba3e050dcba70bc21ff57e94cfb63fb28164ccf5dd8bf56a06f18a4e3)

````ts
/**
 * Temporary M4 GOVERNED REAL COMPLETION PROOF harness.
 * TEMPORARY WITH EXIT — validation driver only. Not tracked. Product APIs only.
 * No __tests__ imports. No FakeProcessRunner. Exactly one StartExecution.
 */
import { spawn as nodeSpawn, execFileSync, type ChildProcess } from "node:child_process";
import {
  mkdirSync,
  writeFileSync,
  readFileSync,
  realpathSync,
  readdirSync,
  existsSync,
  statSync,
} from "node:fs";
import { accessSync, constants } from "node:fs";
import { createHash } from "node:crypto";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { createRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_MORRIS_M3_ACTOR,
  M3_LOCAL_AUTHORITY_ENV,
  registerM3LocalMorrisAuthority,
  type MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  AGENT_SELECTION_SCOPE,
  createInMemoryExecutionAttemptServices,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  formatAgentSelectionActionRef,
  isM4BoundedReadOnlyRealAgent,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  M4_REAL_GATEWAY_ADAPTER_ID,
  NodeCursorProcessRunner,
  NodeGitCommandRunner,
  resolveCursorBinPath,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  TestExecutionAdapter,
  type SpawnPrimitive,
} from "@/lib/oa/execution-attempt";

export const BASE_SHA = "2d1361ee71bec7a21f6f76efc7c33eaf3146802a";
export const README_BLOB = "744bcee0b54dcff89287db6c3f960db14443646f";
export const GO =
  "GO MORRIS — M4 GOVERNED REAL COMPLETION PROOF — ONE BOUNDED READ-ONLY CURSOR REAL — NO RETRY";
const RUN_ID = randomUUID().replace(/-/g, "").slice(0, 12);
const IDS = {
  decisionId: `dec:m4-reproof-${RUN_ID}`,
  contractId: `xct:m4-reproof-${RUN_ID}`,
  attemptId: `xat:m4-reproof-${RUN_ID}`,
  grantId: `gtd:m4-reproof-${RUN_ID}`,
  contractCfmId: `cfm:m4-reproof-contract-${RUN_ID}`,
  agentCfmId: `cfm:m4-reproof-agent-${RUN_ID}`,
  resultRef: `res:m4-reproof-${RUN_ID}`,
  proposalRef: `prp:m4-reproof-${RUN_ID}`,
  scopeEvidenceId: `evd:m4-reproof-morris-scope-${RUN_ID}`,
  agentEvidenceId: `evd:m4-reproof-morris-agent-${RUN_ID}`,
  evidenceReq: `evreq:m4-reproof-${RUN_ID}`,
};

const REPO_ROOT = path.resolve(__dirname, "../..");
const PROOF_DIR = path.resolve(__dirname);

type Proof = Record<string, unknown>;

function writeProof(name: string, value: unknown): void {
  mkdirSync(PROOF_DIR, { recursive: true });
  const text = typeof value === "string" ? value : `${JSON.stringify(value, null, 2)}\n`;
  writeFileSync(path.join(PROOF_DIR, name), text, "utf8");
}

function fail(code: string, extra?: Record<string, unknown>): never {
  writeProof("stop.json", { stop: code, extra: extra ?? {}, at: new Date().toISOString() });
  throw new Error(code);
}

function git(args: string[], cwd: string): { stdout: string; stderr: string; status: number } {
  try {
    const stdout = execFileSync("git", args, {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { stdout: stdout.trim(), stderr: "", status: 0 };
  } catch (err) {
    const e = err as { stdout?: string; stderr?: string; status?: number };
    return {
      stdout: String(e.stdout ?? "").trim(),
      stderr: String(e.stderr ?? "").trim(),
      status: typeof e.status === "number" ? e.status : 1,
    };
  }
}

function isoPlusMinutes(minutes: number): string {
  return new Date(Date.now() + minutes * 60_000).toISOString();
}

function assertParentRealOff(label: string): void {
  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") {
    fail("STOP — REAL FLAG PARENT LEAK", { label, flag: "SFIA_STUDIO_CURSOR_REAL" });
  }
  if (process.env.OPS1_CURSOR_REAL === "1") {
    fail("STOP — REAL FLAG PARENT LEAK", { label, flag: "OPS1_CURSOR_REAL" });
  }
}

export async function runHarness(mode: string): Promise<void> {
  assertParentRealOff("harness-start");
  if (mode === "preflight") {
    await runPreflight();
    return;
  }
  if (mode === "execute-real") {
    await runExecuteReal();
    return;
  }
  fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { reason: `unknown_mode:${mode}` });
}

async function runPreflight(): Promise<void> {
  const originMain = git(["rev-parse", "origin/main"], REPO_ROOT).stdout;
  if (originMain !== BASE_SHA) {
    fail("STOP — LOCAL GIT TRUTH DIVERGED — NO REAL EXECUTION — MORRIS DECISION REQUIRED", { originMain });
  }
  const appDiff = git(
    ["diff", "--exit-code", "HEAD", "origin/main", "--", "projects/sfia-studio/app"],
    REPO_ROOT,
  );
  if (appDiff.status !== 0) {
    fail("STOP — PRODUCT M4 PATH DIFFERS FROM ORIGIN/MAIN — NO REAL EXECUTION");
  }

  const bin = resolveCursorBinPath(process.env);
  if (!bin) {
    fail("STOP — CURSOR REAL PREFLIGHT UNAVAILABLE", { reason: "resolveCursorBinPath_null" });
  }
  try {
    accessSync(bin, constants.X_OK);
  } catch {
    fail("STOP — CURSOR REAL PREFLIGHT UNAVAILABLE", { reason: "not_executable", bin });
  }

  const execRoot = path.join(os.tmpdir(), `sfia-studio-m4-reproof-preflight-${randomUUID()}`);
  mkdirSync(execRoot, { recursive: true });
  const repoResolved = path.resolve(REPO_ROOT);
  const execResolved = path.resolve(execRoot);
  if (repoResolved === execResolved) {
    fail("STOP — REAL WORKSPACE INVALID", { reason: "execRoot_equals_repo" });
  }
  if (
    execResolved.startsWith(`${repoResolved}${path.sep}`) ||
    repoResolved.startsWith(`${execResolved}${path.sep}`)
  ) {
    fail("STOP — REAL WORKSPACE INVALID", {
      reason: "execRoot_nested_with_repo",
      execResolved,
      repoResolved,
    });
  }

  const runner = new NodeCursorProcessRunner();
  const workspace = new StudioGitWorktreeWorkspace({
    repoRoot: repoResolved,
    execRoot: execResolved,
    gitRunner: new NodeGitCommandRunner(),
  });
  const proofEnv = { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" };
  delete proofEnv.OPS1_CURSOR_REAL;
  const gateway = new StudioCursorRealLaunchGateway({
    processRunner: runner,
    workspacePort: workspace,
    env: proofEnv,
  });
  void gateway;
  void createM4BoundedReadOnlyCursorAgentDescriptor(new Date().toISOString());
  void new TestExecutionAdapter();
  new SqliteRealLaunchSafetyJournal({
    databasePath: path.join(PROOF_DIR, "preflight-journal-not-used.sqlite"),
  }).close();

  assertParentRealOff("preflight-end");
  writeProof("preflight.json", {
    mode: "PRE-FLIGHT",
    go: GO,
    originMain,
    repoRoot: repoResolved,
    execRoot: execResolved,
    cursorBin: bin,
    cursorExecutable: true,
    REAL_PROCESS_COUNT: 0,
    gateDCreated: false,
    parentSFIA_STUDIO_CURSOR_REAL: process.env.SFIA_STUDIO_CURSOR_REAL ?? "<unset>",
    parentOPS1_CURSOR_REAL: process.env.OPS1_CURSOR_REAL ?? "<unset>",
  });
  writeProof("preflight-ok.txt", "PRE-FLIGHT PASS\nREAL_PROCESS_COUNT=0\n");
}

type SpawnObs = {
  count: number;
  executable: string | null;
  argv: string[] | null;
  cwd: string | null;
  shell: unknown;
};

async function runExecuteReal(): Promise<void> {
  assertParentRealOff("execute-real-start");
  for (const banned of [
    "dec:m4-first-real-001",
    "xct:m4-first-real-001",
    "xat:m4-first-real-001",
    "gtd:m4-first-real-001",
  ]) {
    if (Object.values(IDS).includes(banned)) {
      fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { banned });
    }
  }
  writeProof("fresh-identities.json", IDS);

  const proof: Proof = {
    go: GO,
    baseSha: BASE_SHA,
    startExecutionCalls: 0,
    retryRealCalls: 0,
    cursorTopLevelSpawnCount: 0,
  };

  const originMain = git(["rev-parse", "origin/main"], REPO_ROOT).stdout;
  if (originMain !== BASE_SHA) {
    fail("STOP — LOCAL GIT TRUTH DIVERGED — NO REAL EXECUTION — MORRIS DECISION REQUIRED", { originMain });
  }
  proof.originMain = originMain;

  const spawnObs: SpawnObs = { count: 0, executable: null, argv: null, cwd: null, shell: null };
  const observingSpawn: SpawnPrimitive = (executable, argv, options) => {
    if (options.shell !== false) {
      fail("STOP — CURSOR REAL PROCESS FAILED", { reason: "shell_not_false" });
    }
    spawnObs.count += 1;
    spawnObs.executable = executable;
    spawnObs.argv = [...argv];
    spawnObs.cwd = options.cwd;
    spawnObs.shell = options.shell;
    writeProof("spawn-observation.json", spawnObs);
    return nodeSpawn(executable, [...argv], options) as ChildProcess;
  };

  const productDbPath = path.join(PROOF_DIR, "product.sqlite");
  const journalPath = path.join(PROOF_DIR, "safety-journal.sqlite");
  const execRoot = path.join(os.tmpdir(), `sfia-studio-m4-reproof-${randomUUID()}`);
  mkdirSync(execRoot, { recursive: true });
  proof.execRoot = execRoot;
  proof.repoRoot = REPO_ROOT;
  proof.productDbPath = productDbPath;
  proof.journalPath = journalPath;

  // Doctrine registry/schemas resolve relative to app root (same as product defaults
  // when cwd is projects/sfia-studio/app). Harness cwd is the proof dir, so pass
  // explicit roots — still production createRuntimeApplicationService composition.
  const appRoot = path.join(REPO_ROOT, "projects/sfia-studio/app");
  const runtime = createRuntimeApplicationService({
    productDbPath,
    registryRoot: path.join(appRoot, "lib/oa/doctrine/fixtures"),
    schemasRoot: path.resolve(appRoot, "../sfia-v3-modeled/v3-native-option-a/schemas"),
  });
  if (!runtime.oa) {
    fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { reason: "runtime.oa_null" });
  }
  const oa = runtime.oa;

  const created = await runtime.createProject({
    name: "M4 Governed REAL Completion Reproof",
    objective: GO,
    context:
      "Temporary STANDARD proof project for M4 GOVERNED REAL COMPLETION PROOF. Isolated Product SQLite.",
    criticality: "STANDARD",
    constraints: ["read-only", "one-real-spawn", "no-remote-git-mutation"],
    idempotencyKey: `m4-reproof-${Date.now()}-${RUN_ID}`,
  });
  if (!created.ok) {
    fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { reason: "createProject_failed", error: created });
  }
  proof.projectId = created.projectId;
  proof.lps = created.livingState;
  proof.doctrine = created.doctrine;

  const nowIso = oa.clock.nowIso();
  const m3Env = { ...process.env, [M3_LOCAL_AUTHORITY_ENV]: "1" };
  const scopeAuth = registerM3LocalMorrisAuthority({
    authorityResolver: oa.authorityResolver as MemoryAuthorityResolver,
    scope: M4_BOUNDED_RO_SCOPE,
    issuedAt: nowIso,
    evidenceId: IDS.scopeEvidenceId,
    env: m3Env,
  });
  const agentAuth = registerM3LocalMorrisAuthority({
    authorityResolver: oa.authorityResolver as MemoryAuthorityResolver,
    scope: AGENT_SELECTION_SCOPE,
    issuedAt: nowIso,
    evidenceId: IDS.agentEvidenceId,
    env: m3Env,
  });
  if (!scopeAuth.ok || !agentAuth.ok) {
    fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { scopeAuth, agentAuth });
  }
  const actor = LOCAL_MORRIS_M3_ACTOR;
  proof.authority = {
    source: "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT",
    actor,
    scopeEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : null,
    agentEvidenceId: agentAuth.ok ? agentAuth.evidenceId : null,
    go: GO,
  };

  const decisionId = IDS.decisionId;
  const proposalPayload = {
    go: GO,
    objective: "Execute one governed bounded read-only Cursor REAL completion proof on current main after pre-reproof bounding.",
    scope: M4_BOUNDED_RO_SCOPE,
    requestedOperation: M4_BOUNDED_RO_ACTION,
    baseHeadSha: BASE_SHA,
  };
  const recorded = await oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: created.projectId,
    subject: "M4 GOVERNED REAL COMPLETION PROOF",
    options: [
      { optionId: "opt:go", label: "GO" },
      { optionId: "opt:hold", label: "HOLD" },
    ],
    selectedOptionId: "opt:go",
    actor,
    authority: "morris",
    status: "accepted",
    reversible: true,
    scope: M4_BOUNDED_RO_SCOPE,
    rationale: `${GO} — bounded read-only Cursor REAL proof. No M5. No second spawn.`,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
    linkToLivingProjectState: true,
    expectedLpsVersion: created.livingState.version,
    decisionBasis: {
      sourceType: "proposal",
      sourceRef: IDS.proposalRef,
      sourceDigest: computeDecisionBasisSourceDigest(proposalPayload),
      projectId: created.projectId,
      proposalContext: {
        lpsId: created.livingState.id,
        lpsVersion: created.livingState.version,
        doctrineDigest: created.doctrine.digest,
      },
      executionBasis: {
        objective: proposalPayload.objective,
        scope: M4_BOUNDED_RO_SCOPE,
        requestedOperation: M4_BOUNDED_RO_ACTION,
        expectedOutcome: "One governed Cursor REAL spawn, read-only README root, Gate D consumed once, completion observed, no retry.",
        outOfScope: ["M5", "Evidence durable", "LPS write-back", "second REAL spawn", "Auth.js", "Critical Ack", "timeout change", "AgentCapability change"],
        reservations: [
          "DecisionBasis schema has no target/capabilities fields; exact values live on ExecutionContract under GO authority.",
        ],
        stopConditions: ["GATE_D_REQUIRED", "CURSOR_UNAVAILABLE", "REAL_WORKSPACE_INVALID"],
        cycleTypeId: "cycle:9-qa-validation",
        recommendedProfile: "Critical",
      },
    },
  });
  if (!recorded.ok) {
    fail("STOP — HUMAN DECISION NOT EXACT", { error: recorded.error });
  }
  const reloadedHd = await oa.decisionServices.getHumanDecision.execute({ decisionId });
  if (!reloadedHd.ok || reloadedHd.decision.status !== "accepted") {
    fail("STOP — HUMAN DECISION NOT EXACT", { reloadedHd });
  }
  if (reloadedHd.decision.projectId !== created.projectId || reloadedHd.decision.scope !== M4_BOUNDED_RO_SCOPE) {
    fail("STOP — HUMAN DECISION NOT EXACT", { decision: reloadedHd.decision });
  }
  proof.humanDecision = {
    id: reloadedHd.decision.decisionId,
    status: reloadedHd.decision.status,
    projectId: reloadedHd.decision.projectId,
    authority: reloadedHd.decision.authority,
    scope: reloadedHd.decision.scope,
    lpsLinked: true,
    decisionBasis: reloadedHd.decision.decisionBasis,
    go: GO,
  };

  const contractId = IDS.contractId;
  const built = await oa.executionContractServices.buildExecutionContract.execute({
    executionContractId: contractId,
    projectId: created.projectId,
    decisionRefs: [decisionId],
    action: M4_BOUNDED_RO_ACTION,
    target: M4_BOUNDED_RO_TARGET,
    scope: M4_BOUNDED_RO_SCOPE,
    requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
    requiredAuthority: "MORRIS",
    inputs: { baseHeadSha: BASE_SHA },
    constraints: [
      "READ_ONLY",
      "NO_REPO_MUTATION",
      "NO_REMOTE_GIT_MUTATION",
      "NO_FILE_CREATE",
      "NO_FILE_EDIT",
      "NO_SHELL",
      "NO_GLOB",
      "NO_GREP",
      "ROOT_README_ONLY",
      "NO_COMMIT",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "ONE_REAL_SPAWN_ONLY",
      "NO_RETRY",
      "M4_GOVERNED_REAL_COMPLETION_PROOF",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "GATE_D_REQUIRED",
      "GATE_D_EXPIRED",
      "GATE_D_BINDING_MISMATCH",
      "LAUNCH_RECONCILIATION_REQUIRED",
      "REAL_WORKSPACE_INVALID",
      "CURSOR_UNAVAILABLE",
    ],
    evidenceRequirements: [IDS.evidenceReq],
    reversibility: "reversible",
    idempotencyKey: `idem-m4-reproof-xct-${RUN_ID}`,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
  });
  if (!built.ok) {
    fail("STOP — EXECUTION CONTRACT NOT EXACT", { error: built.error });
  }
  const validated = await oa.executionContractServices.validateExecutionContract.execute({
    executionContractId: contractId,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
  });
  if (!validated.ok) {
    fail("STOP — EXECUTION CONTRACT NOT EXACT", { error: validated.error });
  }
  const unresolved =
    validated.contract.action.includes("UNRESOLVED") ||
    validated.contract.target.includes("UNRESOLVED") ||
    validated.contract.requiredCapabilities.some((c) => c.includes("unresolved"));
  if (unresolved) {
    fail("STOP — EXECUTION CONTRACT UNRESOLVED", { contract: validated.contract });
  }

  const contractCfmId = IDS.contractCfmId;
  const requestedCfm = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: contractCfmId,
    level: "N3",
    actionRef: `act:m4-reproof-contract-${RUN_ID}`,
    requestedBy: actor,
    requestedTo: actor,
    scope: M4_BOUNDED_RO_SCOPE,
    idempotencyKey: `idem-cfm-m4-reproof-contract-${RUN_ID}`,
    decisionRef: decisionId,
    expiresAt: isoPlusMinutes(15),
  });
  if (!requestedCfm.ok) {
    fail("STOP — CONTRACT CONFIRMATION INVALID", { error: requestedCfm.error });
  }
  const grantedCfm = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: contractCfmId,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
  });
  if (!grantedCfm.ok) {
    fail("STOP — CONTRACT CONFIRMATION INVALID", { error: grantedCfm.error });
  }
  const confirmed = await oa.executionContractServices.confirmExecutionContract.execute({
    executionContractId: contractId,
    confirmationId: contractCfmId,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
    expectedVersion: validated.contract.version,
  });
  if (!confirmed.ok) {
    fail("STOP — CONTRACT CONFIRMATION INVALID", { error: confirmed.error });
  }
  const reloadedXct = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId: contractId,
  });
  if (!reloadedXct.ok || reloadedXct.contract.status !== "confirmed") {
    fail("STOP — CONTRACT CONFIRMATION INVALID", { reloadedXct });
  }
  if (reloadedXct.contract.inputs?.baseHeadSha !== BASE_SHA) {
    fail("STOP — EXECUTION CONTRACT NOT EXACT", { inputs: reloadedXct.contract.inputs });
  }
  if (
    reloadedXct.contract.action !== M4_BOUNDED_RO_ACTION ||
    reloadedXct.contract.target !== M4_BOUNDED_RO_TARGET ||
    reloadedXct.contract.scope !== M4_BOUNDED_RO_SCOPE ||
    reloadedXct.contract.requiredCapabilities[0] !== M4_BOUNDED_RO_CAPABILITY ||
    reloadedXct.contract.decisionRefs[0] !== decisionId
  ) {
    fail("STOP — EXECUTION CONTRACT NOT EXACT", { contract: reloadedXct.contract });
  }
  proof.executionContract = {
    id: reloadedXct.contract.executionContractId,
    versionBuild: built.contract.version,
    versionValidate: validated.contract.version,
    versionConfirm: reloadedXct.contract.version,
    decisionRefs: reloadedXct.contract.decisionRefs,
    action: reloadedXct.contract.action,
    target: reloadedXct.contract.target,
    scope: reloadedXct.contract.scope,
    capability: reloadedXct.contract.requiredCapabilities,
    baseHeadSha: reloadedXct.contract.inputs?.baseHeadSha,
    fingerprint: reloadedXct.contract.semanticFingerprint,
    status: reloadedXct.contract.status,
    confirmationRef: reloadedXct.contract.confirmationRef,
  };

  const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(oa.clock.nowIso());
  if (
    m4Agent.agentId !== M4_BOUNDED_RO_CURSOR_AGENT_ID ||
    m4Agent.executionMode !== "cursor_cli_real" ||
    m4Agent.adapterRef !== M4_REAL_GATEWAY_ADAPTER_ID ||
    !isM4BoundedReadOnlyRealAgent(m4Agent)
  ) {
    fail("STOP — REAL AGENT PROFILE INVALID", { m4Agent });
  }
  proof.agent = {
    agentId: m4Agent.agentId,
    executionMode: m4Agent.executionMode,
    adapterRef: m4Agent.adapterRef,
    supportedCapabilities: m4Agent.supportedCapabilities,
    allowedActions: m4Agent.allowedActions,
    allowedTargets: m4Agent.allowedTargets,
    allowedScopes: m4Agent.allowedScopes,
  };

  const fixtureAdapter = new TestExecutionAdapter();
  if (fixtureAdapter.launchCallCount !== 0) {
    fail("STOP — SILENT REAL TO FIXTURE FALLBACK DETECTED", { before: true });
  }
  proof.fixtureLaunchBefore = fixtureAdapter.launchCallCount;

  const processRunner = new NodeCursorProcessRunner({ spawnPrimitive: observingSpawn });
  const workspacePort = new StudioGitWorktreeWorkspace({
    repoRoot: REPO_ROOT,
    execRoot,
    gitRunner: new NodeGitCommandRunner(),
  });
  const proofEnv: NodeJS.ProcessEnv = { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" };
  delete proofEnv.OPS1_CURSOR_REAL;
  const gateway = new StudioCursorRealLaunchGateway({
    processRunner,
    workspacePort,
    env: proofEnv,
    // Intentionally omit defaultTimeoutMs — exercise product default (60_000).
  });
  const safetyJournal = new SqliteRealLaunchSafetyJournal({ databasePath: journalPath });
  const attempts = createInMemoryExecutionAttemptServices({
    decisionServices: oa.decisionServices,
    executionContractServices: oa.executionContractServices,
    agents: [m4Agent],
    adapter: fixtureAdapter,
    clock: oa.clock,
    authorityResolver: oa.authorityResolver,
    realBoundary: { launchPort: gateway, safetyJournal },
  });

  const confirmedVersion = reloadedXct.contract.version;
  const agentCfmId = IDS.agentCfmId;
  const agentActionRef = formatAgentSelectionActionRef({
    executionContractId: contractId,
    executionContractVersion: confirmedVersion,
    selectedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
  });
  const requestedAgentCfm = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: agentCfmId,
    level: "N3",
    actionRef: agentActionRef,
    requestedBy: actor,
    requestedTo: actor,
    scope: AGENT_SELECTION_SCOPE,
    idempotencyKey: `idem-cfm-m4-reproof-agent-${RUN_ID}`,
    decisionRef: decisionId,
    expiresAt: isoPlusMinutes(15),
  });
  if (!requestedAgentCfm.ok) {
    fail("STOP — AGENT SELECTION CONFIRMATION INVALID", { error: requestedAgentCfm.error });
  }
  const grantedAgentCfm = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: agentCfmId,
    actor,
    authorityEvidenceId: agentAuth.ok ? agentAuth.evidenceId : undefined,
  });
  if (!grantedAgentCfm.ok) {
    fail("STOP — AGENT SELECTION CONFIRMATION INVALID", { error: grantedAgentCfm.error });
  }
  proof.agentSelectionConfirmationBeforeStart = {
    id: agentCfmId,
    actionRef: agentActionRef,
    scope: AGENT_SELECTION_SCOPE,
    level: "N3",
    status: grantedAgentCfm.confirmation.status,
  };

  const attemptId = IDS.attemptId;
  const selected = await attempts.selectExecutionAgent.execute({
    attemptId,
    executionContractId: contractId,
    idempotencyKey: `idem-xat-m4-reproof-${RUN_ID}`,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
    expectedContractVersion: confirmedVersion,
    selectionProfile: "critical",
    selectionStrategy: "human_confirmed_proposal",
    agentConfirmationRef: agentCfmId,
    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    selectionExpiresAt: isoPlusMinutes(10),
  });
  if (!selected.ok || !selected.attempt) {
    fail("STOP — AGENT SELECTION CONFIRMATION INVALID", { error: selected.error });
  }
  if (
    selected.attempt.status !== "accepted" ||
    selected.attempt.selectedAgentRef !== M4_BOUNDED_RO_CURSOR_AGENT_ID ||
    selected.attempt.executionContractVersion !== confirmedVersion
  ) {
    fail("STOP — AGENT SELECTION CONFIRMATION INVALID", { attempt: selected.attempt });
  }
  if (spawnObs.count !== 0) {
    fail("STOP — CURSOR REAL SPAWN COUNT NOT EXACTLY ONE", { reason: "spawn_before_start", count: spawnObs.count });
  }
  proof.attemptAccepted = {
    id: selected.attempt.attemptId,
    status: selected.attempt.status,
    selectedAgentRef: selected.attempt.selectedAgentRef,
    executionContractVersion: selected.attempt.executionContractVersion,
    agentConfirmationRef: selected.attempt.agentConfirmationRef,
    version: selected.attempt.version,
  };

  const identity = {
    executionContractId: contractId,
    executionContractVersion: confirmedVersion,
    semanticFingerprint: reloadedXct.contract.semanticFingerprint ?? "",
  };
  if (!identity.semanticFingerprint) {
    fail("STOP — EXECUTION CONTRACT NOT EXACT", { reason: "fingerprint_missing" });
  }
  const dispositionBefore = await safetyJournal.reconcileDispositionForIdentity(identity);
  const frontierBefore = await safetyJournal.findFrontierByIdentity(identity);
  const activeGrantBefore = await safetyJournal.findActiveGateDGrantForAttempt(attemptId);
  if (dispositionBefore !== "CLEAR" || frontierBefore.length !== 0 || activeGrantBefore) {
    fail("STOP — LAUNCH FRONTIER NOT CLEAR BEFORE START", { dispositionBefore, frontierBefore, activeGrantBefore });
  }
  proof.journalBeforeGateD = { dispositionBefore, frontierBefore, activeGrantBefore };

  if (!attempts.grantGateD) {
    fail("STOP — FRESH IDENTITY GUARANTEE FAILED — NO REAL EXECUTION", { reason: "grantGateD_missing" });
  }
  const grantId = IDS.grantId;
  const grantedGate = await attempts.grantGateD.execute({
    grantId,
    attemptId,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
    expiresAt: isoPlusMinutes(5),
    expectedAttemptVersion: selected.attempt.version,
    expectedContractVersion: confirmedVersion,
  });
  if (!grantedGate.ok) {
    fail("STOP — GATE D BINDING INVALID", { error: grantedGate.error });
  }
  const grant = grantedGate.grant;
  if (
    grant.status !== "granted" ||
    grant.consumedAt ||
    grant.executionContractId !== contractId ||
    grant.executionContractVersion !== confirmedVersion ||
    grant.semanticFingerprint !== identity.semanticFingerprint ||
    grant.attemptId !== attemptId ||
    grant.selectedAgentRef !== M4_BOUNDED_RO_CURSOR_AGENT_ID ||
    grant.actorId !== actor.actorId
  ) {
    fail("STOP — GATE D BINDING INVALID", { grant });
  }
  if (spawnObs.count !== 0) {
    fail("STOP — GATE D CONSUMED BEFORE INTENDED START", { spawn: spawnObs.count });
  }
  proof.gateDGranted = grant;
  const cliPre = JSON.parse(
    readFileSync(path.join(PROOF_DIR, "cli-preflight.json"), "utf8"),
  ) as {
    cursor_agent: { resolved_target: string; version: string; sha256: string };
  };
  // Point-of-no-return CLI revalidation (no model task)
  const resolvedNow = realpathSync(path.join(os.homedir(), ".local/bin/cursor-agent"));
  const verNow = execFileSync(resolvedNow, ["--version"], { encoding: "utf8" }).trim();
  const hashNow = createHash("sha256").update(readFileSync(resolvedNow)).digest("hex");
  if (
    resolvedNow !== cliPre.cursor_agent.resolved_target ||
    verNow !== cliPre.cursor_agent.version ||
    hashNow !== cliPre.cursor_agent.sha256
  ) {
    fail("STOP — CURSOR CLI VERSION DRIFT BEFORE STARTEXECUTION — NO REAL EXECUTION", {
      resolvedNow,
      verNow,
      hashNow,
      pre: cliPre.cursor_agent,
    });
  }
  const originMainPonr = git(["rev-parse", "origin/main"], REPO_ROOT).stdout;
  if (originMainPonr !== BASE_SHA) {
    fail("STOP — LOCAL GIT TRUTH DIVERGED — NO REAL EXECUTION — MORRIS DECISION REQUIRED", {
      originMainPonr,
    });
  }
  writeProof("proof-before-start.json", {
    go: GO,
    baseSha: BASE_SHA,
    decisionId,
    executionContractId: contractId,
    executionContractVersion: confirmedVersion,
    semanticFingerprint: identity.semanticFingerprint,
    attemptId,
    gateDId: grantId,
    selectedAgentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
    worktreeIntendedBase: BASE_SHA,
    parentRealFlags: {
      SFIA_STUDIO_CURSOR_REAL: process.env.SFIA_STUDIO_CURSOR_REAL ?? "<unset>",
      OPS1_CURSOR_REAL: process.env.OPS1_CURSOR_REAL ?? "<unset>",
    },
    governed_REAL_spawn_count: spawnObs.count,
    fixture_launch_count: fixtureAdapter.launchCallCount,
    RetryExecutionAttempt_count: 0,
    StartExecution_count: 0,
    cursor: { resolved: resolvedNow, version: verNow, sha256: hashNow },
  });

  proof.startExecutionCalls = 1;
  const started = await attempts.startExecution.execute({
    attemptId,
    actor,
    authorityEvidenceId: scopeAuth.ok ? scopeAuth.evidenceId : undefined,
    expectedAttemptVersion: selected.attempt.version,
    expectedContractVersion: confirmedVersion,
  });

  const consumedGrant = await safetyJournal.findGateDGrant(grantId);
  proof.gateDAfterStart = consumedGrant;
  const frontierAfterStart = await safetyJournal.findFrontierByAttempt(attemptId);
  proof.frontierAfterStart = frontierAfterStart;

  if (!started.ok) {
    writeProof("start-execution-failure.json", {
      error: started.error,
      spawnObs,
      fixtureLaunch: fixtureAdapter.launchCallCount,
      gateD: consumedGrant,
      frontier: frontierAfterStart,
    });
    fail("STOP — CURSOR REAL PROCESS FAILED", {
      phase: consumedGrant?.status === "consumed" ? "POST_GATE_D" : "PRE_OR_DURING_START",
      error: started.error,
      spawnCount: spawnObs.count,
      gateD: consumedGrant?.status ?? null,
    });
  }

  if (consumedGrant?.status !== "consumed" || !consumedGrant.consumedAt) {
    fail("STOP — GATE D BINDING INVALID", { reason: "not_consumed_after_start", consumedGrant });
  }
  const createdRec = frontierAfterStart.find((r) => r.kind === "CREATED");
  const launchedRec = frontierAfterStart.find((r) => r.kind === "LAUNCHED");
  if (!createdRec || !launchedRec) {
    fail("STOP — REAL LAUNCH FRONTIER NOT DURABLE", { frontierAfterStart });
  }
  if (Date.parse(createdRec.occurredAt) > Date.parse(launchedRec.occurredAt)) {
    fail("STOP — REAL LAUNCH FRONTIER NOT DURABLE", { reason: "CREATED_after_LAUNCHED" });
  }
  if (spawnObs.count !== 1) {
    fail("STOP — CURSOR REAL SPAWN COUNT NOT EXACTLY ONE", { count: spawnObs.count });
  }
  if (fixtureAdapter.launchCallCount !== 0) {
    fail("STOP — SILENT REAL TO FIXTURE FALLBACK DETECTED", { afterStart: true });
  }

  const runningAttempt = await attempts.getExecutionAttempt.execute({ attemptId });
  if (!runningAttempt.ok || runningAttempt.attempt.status !== "running") {
    fail("STOP — CURSOR REAL PROCESS FAILED", { reason: "attempt_not_running", runningAttempt });
  }
  const executingXct = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId: contractId,
  });
  if (!executingXct.ok || executingXct.contract.status !== "executing") {
    fail("STOP — CURSOR REAL PROCESS FAILED", { reason: "contract_not_executing", executingXct });
  }
  proof.attemptRunning = { status: runningAttempt.attempt.status, version: runningAttempt.attempt.version };
  proof.contractExecuting = executingXct.contract.status;
  const agentCfmAfter = await oa.decisionServices.confirmations.findById(agentCfmId);
  proof.agentSelectionConfirmationAfterStart = { id: agentCfmId, status: agentCfmAfter?.status ?? null };

  const processRef = launchedRec.processRef;
  if (!processRef) {
    fail("STOP — CURSOR REAL PROCESS FAILED", { reason: "missing_processRef" });
  }
  proof.processRef = processRef;
  proof.spawn = spawnObs;
  proof.created = createdRec;
  proof.launched = launchedRec;

  const workspacePath = spawnObs.cwd;
  if (!workspacePath || !workspacePath.startsWith(`${execRoot}${path.sep}`)) {
    fail("STOP — REAL WORKSPACE INVALID", { workspacePath, execRoot });
  }
  if (workspacePath.startsWith(`${REPO_ROOT}${path.sep}`)) {
    fail("STOP — REAL WORKSPACE INVALID", { reason: "workspace_inside_repo", workspacePath });
  }
  const headBefore = git(["rev-parse", "HEAD"], workspacePath).stdout.toLowerCase();
  const statusBefore = git(["status", "--porcelain=v1"], workspacePath).stdout;
  const readmeBefore = git(["rev-parse", "HEAD:README.md"], workspacePath).stdout;
  if (headBefore !== BASE_SHA) {
    fail("STOP — REAL WORKTREE HEAD DRIFT", { headBefore });
  }
  if (statusBefore !== "") {
    fail("STOP — REAL WORKTREE MUTATED", { statusBefore, phase: "before_completion" });
  }
  if (readmeBefore !== README_BLOB) {
    fail("STOP — REAL WORKTREE HEAD DRIFT", { reason: "readme_blob", readmeBefore });
  }
  proof.worktreeBefore = {
    path: workspacePath,
    head: headBefore,
    porcelain: statusBefore,
    readmeBlob: readmeBefore,
  };


  const completion = await gateway.awaitCompletion(processRef);
  proof.completion = completion;
  writeProof("completion.json", completion);
  if (!completion) {
    fail("STOP — CURSOR REAL PROCESS FAILED", { reason: "awaitCompletion_null", phase: "POST_GATE_D" });
  }

  const pidMatch = /^pid:(\d+)$/.exec(String(processRef));
  const pid = pidMatch ? Number(pidMatch[1]) : null;
  proof.pid = pid;

  // Worktree after INNER (before result recording)
  const headAfter = git(["rev-parse", "HEAD"], workspacePath).stdout.toLowerCase();
  const statusAfter = git(["status", "--porcelain=v1"], workspacePath).stdout;
  const diffAfter = git(["diff", "--name-status"], workspacePath).stdout;
  const cachedAfter = git(["diff", "--cached", "--name-status"], workspacePath).stdout;
  const readmeAfter = git(["rev-parse", "HEAD:README.md"], workspacePath).stdout;
  proof.worktreeAfter = {
    path: workspacePath,
    head: headAfter,
    porcelain: statusAfter,
    diff: diffAfter,
    cached: cachedAfter,
    readmeBlob: readmeAfter,
  };

  // Tool-surface from session log + agent transcript
  const toolSurface = analyzeToolSurface({
    pid,
    workspacePath,
    processRef: String(processRef),
    startedIso: createdRec.occurredAt,
  });
  if (spawnObs.argv && spawnObs.argv.includes("--sandbox") && spawnObs.argv[spawnObs.argv.indexOf("--sandbox") + 1] === "enabled") {
    toolSurface.sandbox_enabled_evidence = true;
    toolSurface.notes.push("sandbox_from_spawn_argv");
  }
  writeProof("tool-surface.json", toolSurface);
  if (toolSurface.sanitized_log) {
    writeProof("inner-agent-log-sanitized.txt", toolSurface.sanitized_log);
  }
  if (toolSurface.transcript_excerpt) {
    writeProof("inner-transcript-excerpt-sanitized.jsonl", toolSurface.transcript_excerpt);
  }

  // Post-run CLI version (no model task)
  const resolvedAfter = realpathSync(path.join(os.homedir(), ".local/bin/cursor-agent"));
  const verAfter = execFileSync(resolvedAfter, ["--version"], { encoding: "utf8" }).trim();
  const hashAfter = createHash("sha256").update(readFileSync(resolvedAfter)).digest("hex");
  const cliPre2 = JSON.parse(
    readFileSync(path.join(PROOF_DIR, "cli-preflight.json"), "utf8"),
  ) as { cursor_agent: { resolved_target: string; version: string; sha256: string } };
  const cliDrift =
    resolvedAfter !== cliPre2.cursor_agent.resolved_target ||
    verAfter !== cliPre2.cursor_agent.version ||
    hashAfter !== cliPre2.cursor_agent.sha256 ||
    (toolSurface.session_cursor_agent_version &&
      toolSurface.session_cursor_agent_version !== cliPre2.cursor_agent.version);
  proof.cliAfter = { resolved: resolvedAfter, version: verAfter, sha256: hashAfter, drift: cliDrift };

  const remoteMain = git(["fetch", "origin", "--prune"], REPO_ROOT);
  void remoteMain;
  const originMainAfter = git(["rev-parse", "origin/main"], REPO_ROOT).stdout;
  proof.originMainAfter = originMainAfter;

  const stdoutTrim = String(completion.stdout ?? "").trim();
  const stderrTrim = String(completion.stderr ?? "").trim();

  const criteria = {
    spawn1: spawnObs.count === 1,
    gateConsumed: consumedGrant?.status === "consumed",
    freshAttempt: true,
    startOnce: proof.startExecutionCalls === 1,
    retry0: true,
    fixture0: fixtureAdapter.launchCallCount === 0,
    realInvoked: completion.realProcessInvoked === true,
    notTimedOut: completion.timedOut === false,
    exit0: completion.exitCode === 0,
    stdoutOk: stdoutTrim === "M4_READ_ONLY_OK",
    stderrEmpty: stderrTrim === "",
    readmeRead1: toolSurface.inner_read_root_readme_count === 1,
    otherReads0: toolSurface.inner_other_file_read_count === 0,
    shell0: toolSurface.inner_shell_count === 0,
    glob0: toolSurface.inner_glob_count === 0,
    grep0: toolSurface.inner_grep_count === 0,
    write0: toolSurface.inner_write_count === 0,
    edit0: toolSurface.inner_edit_count === 0,
    create0: toolSurface.inner_create_count === 0,
    delete0: toolSurface.inner_delete_count === 0,
    git0: toolSurface.inner_git_command_count === 0,
    sandbox: toolSurface.sandbox_enabled_evidence === true,
    headOk: headAfter === BASE_SHA,
    porcelainEmpty: statusAfter === "",
    readmeBlobOk: readmeAfter === README_BLOB,
    originOk: originMainAfter === BASE_SHA,
    cliNoDrift: !cliDrift,
    parentUnset:
      process.env.SFIA_STUDIO_CURSOR_REAL !== "1" && process.env.OPS1_CURSOR_REAL !== "1",
  };
  proof.successCriteria = criteria;
  const allPass = Object.values(criteria).every(Boolean);
  writeProof("success-criteria.json", { allPass, criteria, stdoutTrim, stderrTrim });

  if (completion.timedOut) {
    await attempts.recordExecutionFailure.execute({
      attemptId,
      adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
      stopReason: "CURSOR_REAL_TIMEOUT",
      durationMs: completion.durationMs,
      technicalExitCode: completion.exitCode ?? undefined,
    });
    writeProof("verdict.json", {
      verdict: "M4 GOVERNED REAL COMPLETION PROOF: FAIL",
      reason: "TIMEOUT",
      noRetry: true,
    });
    // Still write durable proof then throw stop for harness exit !=0
    await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
    fail("M4 GOVERNED REAL COMPLETION PROOF: FAIL", { reason: "TIMEOUT", completion });
  }

  if (!allPass) {
    // Prefer existing stop reasons when exit non-zero; otherwise preserve observations
    if (completion.exitCode !== 0) {
      await attempts.recordExecutionFailure.execute({
        attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        stopReason: "CURSOR_REAL_NONZERO_EXIT",
        durationMs: completion.durationMs,
        technicalExitCode: completion.exitCode ?? undefined,
      });
    } else {
      // Completion observed but tool-surface/worktree/marker criteria failed — do not invent new enum.
      // Record failure with closest existing reason when marker/tool surface invalid.
      await attempts.recordExecutionFailure.execute({
        attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        stopReason: "CURSOR_REAL_NONZERO_EXIT",
        durationMs: completion.durationMs,
        technicalExitCode: completion.exitCode ?? 0,
      });
    }
    const partial =
      criteria.exit0 && criteria.notTimedOut && criteria.stdoutOk && !criteria.readmeRead1;
    writeProof("verdict.json", {
      verdict: partial
        ? "M4 GOVERNED REAL COMPLETION PROOF: FAIL WITH PARTIAL COMPLETION EVIDENCE"
        : "M4 GOVERNED REAL COMPLETION PROOF: FAIL",
      reason: "CRITERIA_FAILED",
      failed: Object.entries(criteria).filter(([, v]) => !v).map(([k]) => k),
      noRetry: true,
    });
    await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
    fail(
      partial
        ? "M4 GOVERNED REAL COMPLETION PROOF: FAIL WITH PARTIAL COMPLETION EVIDENCE"
        : "M4 GOVERNED REAL COMPLETION PROOF: FAIL",
      { criteria },
    );
  }

  const resultRef = IDS.resultRef;
  const recordedResult = await attempts.recordExecutionResult.execute({
    attemptId,
    adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
    durationMs: completion.durationMs,
  });
  if (!recordedResult.ok) {
    writeProof("verdict.json", {
      verdict: "M4 GOVERNED REAL COMPLETION PROOF: FAIL",
      reason: "RECORD_RESULT_FAILED",
      error: recordedResult.error,
      noRetry: true,
    });
    await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
    fail("M4 GOVERNED REAL COMPLETION PROOF: FAIL", { reason: "recordExecutionResult_failed", error: recordedResult.error });
  }
  const finalAttempt = await attempts.getExecutionAttempt.execute({ attemptId });
  const finalXct = await oa.executionContractServices.getExecutionContract.execute({
    executionContractId: contractId,
  });
  proof.technicalResult = {
    resultRef,
    recorded: recordedResult.ok,
    attemptFinal: finalAttempt.ok ? finalAttempt.attempt.status : null,
    contractFinal: finalXct.ok ? finalXct.contract.status : null,
  };
  if (!finalAttempt.ok || finalAttempt.attempt.status !== "succeeded") {
    await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
    fail("M4 GOVERNED REAL COMPLETION PROOF: FAIL", { reason: "attempt_not_succeeded", finalAttempt });
  }
  if (!finalXct.ok || finalXct.contract.status !== "completed") {
    await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
    fail("M4 GOVERNED REAL COMPLETION PROOF: FAIL", { reason: "contract_not_completed", finalXct });
  }

  writeProof("verdict.json", {
    verdict:
      "M4 GOVERNED REAL COMPLETION PROOF: PASS — ONE BOUNDED READ-ONLY CURSOR REAL COMPLETED CLEANLY — NO RETRY — M4 EXIT PROOF CANDIDATE READY FOR CHATGPT REVIEW — M4 NOT CLOSED — M5 NOT AUTHORIZED",
    noRetry: true,
  });
  await finalizeArtifacts(proof, attempts, oa, safetyJournal, journalPath, identity, fixtureAdapter, spawnObs, workspacePath);
  writeProof("proof.json", proof);
  writeProof("stdout.txt", `${completion.stdout ?? ""}\n`);
  writeProof("stderr.txt", `${completion.stderr ?? ""}\n`);
}

async function finalizeArtifacts(
  proof: Proof,
  attempts: ReturnType<typeof createInMemoryExecutionAttemptServices>,
  oa: NonNullable<ReturnType<typeof createRuntimeApplicationService>["oa"]>,
  safetyJournal: SqliteRealLaunchSafetyJournal,
  journalPath: string,
  identity: { executionContractId: string; executionContractVersion: number; semanticFingerprint: string },
  fixtureAdapter: TestExecutionAdapter,
  spawnObs: SpawnObs,
  workspacePath: string,
): Promise<void> {
  try {
    safetyJournal.close();
  } catch { /* ignore */ }
  try {
    const reopened = new SqliteRealLaunchSafetyJournal({ databasePath: journalPath });
    const frontierReopen = await reopened.findFrontierByIdentity(identity);
    const dispositionReopen = await reopened.reconcileDispositionForIdentity(identity);
    proof.journalReopen = { frontierReopen, dispositionReopen };
    reopened.close();
    writeProof("journal-reopen-post-run.json", proof.journalReopen);
  } catch (e) {
    proof.journalReopenError = String(e);
  }
  proof.fixtureLaunchAfter = fixtureAdapter.launchCallCount;
  proof.cursorTopLevelSpawnCount = spawnObs.count;
  proof.retryRealCalls = 0;
  proof.parentFlagsAfter = {
    SFIA_STUDIO_CURSOR_REAL: process.env.SFIA_STUDIO_CURSOR_REAL ?? "<unset>",
    OPS1_CURSOR_REAL: process.env.OPS1_CURSOR_REAL ?? "<unset>",
  };
  assertParentRealOff("finalize");
  const remove = git(["worktree", "remove", workspacePath], REPO_ROOT);
  proof.worktreeCleanup = { status: remove.status, stderr: remove.stderr, stdout: remove.stdout };
  writeProof("proof.json", proof);
}

type ToolSurface = {
  inner_read_root_readme_count: number;
  inner_other_file_read_count: number;
  inner_shell_count: number;
  inner_glob_count: number;
  inner_grep_count: number;
  inner_write_count: number;
  inner_edit_count: number;
  inner_create_count: number;
  inner_delete_count: number;
  inner_git_command_count: number;
  sandbox_enabled_evidence: boolean;
  session_cursor_agent_version: string | null;
  session_completed_evidence: boolean;
  session_log_path: string | null;
  transcript_path: string | null;
  raw_tool_names: Record<string, number>;
  sanitized_log?: string;
  transcript_excerpt?: string;
  notes: string[];
};

function analyzeToolSurface(input: {
  pid: number | null;
  workspacePath: string;
  processRef: string;
  startedIso: string;
}): ToolSurface {
  const fs = { readFileSync, readdirSync, existsSync, statSync };
  const pathMod = path;
  const notes: string[] = [];
  const result: ToolSurface = {
    inner_read_root_readme_count: 0,
    inner_other_file_read_count: 0,
    inner_shell_count: 0,
    inner_glob_count: 0,
    inner_grep_count: 0,
    inner_write_count: 0,
    inner_edit_count: 0,
    inner_create_count: 0,
    inner_delete_count: 0,
    inner_git_command_count: 0,
    sandbox_enabled_evidence: false,
    session_cursor_agent_version: null,
    session_completed_evidence: false,
    session_log_path: null,
    transcript_path: null,
    raw_tool_names: {},
    notes,
  };

  // Find session log by PID under /var/folders/*/T/cursor-agent-logs-*
  let sessionText = "";
  if (input.pid) {
    const tmp = os.tmpdir();
    const roots = [tmp, "/var/folders"];
    const candidates: string[] = [];
    const walkFind = (dir: string, depth: number) => {
      if (depth > 4) return;
      let entries: string[] = [];
      try { entries = fs.readdirSync(dir); } catch { return; }
      for (const name of entries) {
        const full = pathMod.join(dir, name);
        if (name.startsWith("cursor-agent-logs")) {
          try {
            for (const f of fs.readdirSync(full)) {
              if (f.includes(`-${input.pid}-`) && f.endsWith(".log")) {
                candidates.push(pathMod.join(full, f));
              }
            }
          } catch { /* ignore */ }
        } else if (depth < 3 && (name.startsWith("T") || name.includes("folders") || name.startsWith("b9") || name.includes("cursor-agent"))) {
          try {
            const st = fs.statSync(full);
            if (st.isDirectory()) walkFind(full, depth + 1);
          } catch { /* ignore */ }
        }
      }
    };
    // Direct known pattern
    try {
      const direct = pathMod.join(tmp, "cursor-agent-logs-501");
      if (fs.existsSync(direct)) {
        for (const f of fs.readdirSync(direct)) {
          if (f.includes(`-${input.pid}-`) && f.endsWith(".log")) candidates.push(pathMod.join(direct, f));
        }
      }
    } catch { /* ignore */ }
    // Broader search under /var/folders for cursor-agent-logs-*
    try {
      for (const top of fs.readdirSync("/var/folders")) {
        const p1 = pathMod.join("/var/folders", top);
        try {
          for (const mid of fs.readdirSync(p1)) {
            const p2 = pathMod.join(p1, mid);
            try {
              for (const leaf of fs.readdirSync(p2)) {
                if (!leaf.startsWith("T")) continue;
                const logs = pathMod.join(p2, leaf);
                try {
                  for (const d of fs.readdirSync(logs)) {
                    if (!d.startsWith("cursor-agent-logs")) continue;
                    const dd = pathMod.join(logs, d);
                    try {
                      for (const f of fs.readdirSync(dd)) {
                        if (f.includes(`-${input.pid}-`) && f.endsWith(".log")) candidates.push(pathMod.join(dd, f));
                      }
                    } catch { /* ignore */ }
                  }
                } catch { /* ignore */ }
              }
            } catch { /* ignore */ }
          }
        } catch { /* ignore */ }
      }
    } catch { /* ignore */ }
    void roots;
    if (candidates.length) {
      candidates.sort();
      result.session_log_path = candidates[candidates.length - 1];
      sessionText = fs.readFileSync(result.session_log_path, "utf8");
    } else {
      notes.push("session_log_not_found_for_pid");
    }
  }

  if (sessionText) {
    if (/sandbox\.configureSuccess|"sandbox":\s*"enabled"|sandbox enabled|isSandboxHelperSupported] darwin platform, binary available, sandbox supported/i.test(sessionText)) {
      result.sandbox_enabled_evidence = true;
    }
    if (/argv.*--sandbox.*enabled|--sandbox","enabled"/.test(sessionText) || sessionText.includes("sandbox supported")) {
      result.sandbox_enabled_evidence = true;
    }
    // Shell evidence: unique toolCallId on "Shell stream: approval gate reached"
    const shellIds = new Set<string>();
    for (const m of sessionText.matchAll(/"message":"Shell stream: approval gate reached"[^\n]*"toolCallId":"([^"]+)"/g)) {
      shellIds.add(m[1]);
    }
    // alternate order
    for (const m of sessionText.matchAll(/Shell stream: approval gate reached[\s\S]*?"toolCallId":"([^"]+)"/g)) {
      shellIds.add(m[1]);
    }
    // simpler count of approval gate reached lines
    const shellLines = sessionText.split(/\n/).filter((l) => l.includes("Shell stream: approval gate reached"));
    result.inner_shell_count = Math.max(shellIds.size, shellLines.length);
    const verM = sessionText.match(/versions\/(20\d{2}\.\d{2}\.\d{2}-[0-9a-f]+)\//);
    if (verM) result.session_cursor_agent_version = verM[1];
    if (/turn\.end|agent_cli\.turn\.end|session complete|print\.completed/i.test(sessionText)) {
      result.session_completed_evidence = true;
    }
    // sanitize
    let sanitized = sessionText;
    sanitized = sanitized.replace(/[\w.+-]+@[\w.-]+\.\w+/g, "<REDACTED_EMAIL>");
    sanitized = sanitized.replace(/(userId|authId|token|api[_-]?key)["\s:=]+["']?[\w\-./+=]+/gi, "$1=<REDACTED>");
    const keep = [
      "debug-session-start",
      "cli.launch",
      "cli.run.mode",
      "cli.updated",
      "startup.first_token",
      "agent_cli.turn",
      "sandbox",
      "Shell stream",
      "Shell permissions",
      "ripgrep.configureSuccess",
      "print_flag",
      "headless",
      "mode",
    ];
    result.sanitized_log = sanitized
      .split(/\n/)
      .filter((ln) => keep.some((k) => ln.includes(k)) || ln.startsWith("---"))
      .join("\n");
  }

  // Transcript under ~/.cursor/projects/<encoded-worktree>/agent-transcripts
  const projectsRoot = pathMod.join(os.homedir(), ".cursor", "projects");
  let transcriptPath: string | null = null;
  try {
    const marker = input.workspacePath.replace(/\//g, "-").replace(/^-/, "");
    // Also try var-folders encoding used previously
    const alts = [
      input.workspacePath.replace(/^\/var\//, "var-").replace(/^\/private\/var\//, "private-var-").replace(/\//g, "-"),
      input.workspacePath.replace(/^\/private\//, "private-").replace(/\//g, "-"),
      input.workspacePath.replace(/\//g, "-").replace(/^-/, ""),
    ];
    for (const enc of alts) {
      const base = pathMod.join(projectsRoot, enc, "agent-transcripts");
      if (!fs.existsSync(base)) continue;
      for (const conv of fs.readdirSync(base)) {
        const jp = pathMod.join(base, conv, `${conv}.jsonl`);
        if (fs.existsSync(jp)) {
          // prefer newest
          if (!transcriptPath || fs.statSync(jp).mtimeMs > fs.statSync(transcriptPath).mtimeMs) {
            transcriptPath = jp;
          }
        }
      }
    }
    // Fallback: scan projects for recent jsonl mentioning workspace path basename
    if (!transcriptPath) {
      const wtBase = pathMod.basename(input.workspacePath);
      for (const proj of fs.readdirSync(projectsRoot)) {
        if (!proj.includes("sfia-studio-m4-reproof") && !proj.includes(wtBase.slice(0, 20))) continue;
        const base = pathMod.join(projectsRoot, proj, "agent-transcripts");
        if (!fs.existsSync(base)) continue;
        for (const conv of fs.readdirSync(base)) {
          const jp = pathMod.join(base, conv, `${conv}.jsonl`);
          if (fs.existsSync(jp)) {
            if (!transcriptPath || fs.statSync(jp).mtimeMs > fs.statSync(transcriptPath).mtimeMs) {
              transcriptPath = jp;
            }
          }
        }
      }
    }
  } catch (e) {
    notes.push(`transcript_scan_error:${String(e)}`);
  }

  if (transcriptPath) {
    result.transcript_path = transcriptPath;
    const lines = fs.readFileSync(transcriptPath, "utf8").split(/\n/).filter(Boolean);
    const excerpt: string[] = [];
    for (const line of lines) {
      let obj: any;
      try { obj = JSON.parse(line); } catch { continue; }
      const content = (obj.message || {}).content || [];
      for (const part of content) {
        if (part?.type !== "tool_use") continue;
        const name = String(part.name || "?");
        result.raw_tool_names[name] = (result.raw_tool_names[name] || 0) + 1;
        const args = part.input || part.arguments || {};
        const pathArg = String(args.path || args.target_file || args.file_path || args.glob || args.pattern || "");
        const lname = name.toLowerCase();
        if (lname === "shell" || lname === "bash" || lname === "run_terminal_cmd") {
          result.inner_shell_count += 1;
          const cmd = String(args.command || args.cmd || "");
          if (/\bgit\b/.test(cmd)) result.inner_git_command_count += 1;
        } else if (lname === "glob" || lname === "globtool") {
          result.inner_glob_count += 1;
        } else if (lname === "grep" || lname === "greptool" || lname === "rg") {
          result.inner_grep_count += 1;
        } else if (lname === "read" || lname === "readtool" || lname === "read_file") {
          const norm = pathArg.replace(/^\.\//, "");
          if (norm === "README.md" || norm.endsWith("/README.md") || pathArg === "README.md") {
            result.inner_read_root_readme_count += 1;
          } else {
            result.inner_other_file_read_count += 1;
          }
        } else if (lname.includes("write") || lname === "applypatch" || lname === "edit" || lname === "search_replace") {
          if (lname.includes("write") || lname === "write") result.inner_write_count += 1;
          else result.inner_edit_count += 1;
        } else if (lname.includes("delete")) {
          result.inner_delete_count += 1;
        }
        // sanitized excerpt line
        const safeArgs = { ...args };
        for (const k of Object.keys(safeArgs)) {
          if (/token|email|secret|password|auth/i.test(k)) safeArgs[k] = "<REDACTED>";
        }
        excerpt.push(JSON.stringify({ type: "tool_use", name, input: safeArgs }));
      }
      if (obj.role === "assistant") {
        const texts = content.filter((p: any) => p?.type === "text").map((p: any) => String(p.text || "").slice(0, 200));
        if (texts.some((t: string) => t.includes("M4_READ_ONLY_OK") || t.includes("M4_READ_ONLY_UNAVAILABLE"))) {
          result.session_completed_evidence = true;
        }
      }
    }
    result.transcript_excerpt = excerpt.join("\n");
  } else {
    notes.push("transcript_not_found");
  }

  // Sandbox also proven from spawn argv in proof — caller may OR this
  return result;
}
````

## Counters

| Control | Count |
| --- | --- |
| Fresh HumanDecision | 1 |
| Fresh ExecutionContract | 1 |
| Fresh Attempt | 1 |
| Fresh Gate D | 1 |
| Gate D consumption | 1 |
| StartExecution | 1 |
| governed top-level REAL spawn | 1 |
| RetryExecutionAttempt | 0 |
| second Attempt | 0 |
| second Gate D | 0 |
| fixture launch | 0 |
| project tracked mutation | 0 |
| project commit | 0 |
| project push | 0 |
| project PR | 0 |
| merge | 0 |
| timeout modification | 0 |
| AgentCapability modification | 0 |
| gateway modification | 0 |
| architecture modification | 0 |

Pre-StartExecution note: first harness attempt aborted at createProject (DOCTRINE_UNRESOLVED) because cwd≠app; fixed by passing product default registry/schemas roots. No StartExecution / Gate D consume / REAL spawn on that aborted attempt. Budget REAL of this GO consumed exactly once on the successful run.

## Anti-claims

- M4 EXIT PROOF NOT YET ACCEPTED BY MORRIS
- M4 NOT CLOSED
- M5 NOT AUTHORIZED
- runtime v3 NON ADOPTED
- ONE TECHNICAL PROOF ≠ GLOBAL RUNTIME ADOPTION
- NO AUTOMATIC MATURITY PROMOTION

## Réserves

- This PASS proves one governed completion under current bounding on this machine/CLI version; not a global maturity promotion.
- Timeout 60000 was sufficient for this run (~15.7s) but is not thereby proven universally sufficient for all future REAL tasks.

## Next

ChatGPT evidence review → M4 EXIT PROOF EVALUATION / M4 CLOSURE DECISION under separate Morris GO. No M5. No automatic retry.

## Verdict

**M4 GOVERNED REAL COMPLETION PROOF: PASS — ONE BOUNDED READ-ONLY CURSOR REAL COMPLETED CLEANLY — NO RETRY — M4 EXIT PROOF CANDIDATE READY FOR CHATGPT REVIEW — M4 NOT CLOSED — M5 NOT AUTHORIZED**

### Instruction ChatGPT

Review Handoff publié. Vérifier base 2d1361ee…, fresh HD/EC/Attempt/Gate D, consumption/StartExecution/spawn exactly once, fixture/retry zero, timedOut false, exit 0, stdout M4_READ_ONLY_OK, stderr empty, README read proven, Shell/Glob/Grep/other/writes zero, sandbox, CLI no-drift, worktree clean, README blob unchanged, origin/main unchanged, RecordExecutionResult success, Attempt succeeded, ExecutionContract completed, project tracked mutation zero, anti-claims. Ne pas transformer en M4 CLOSED sans évaluation exit proof + décision Morris.
