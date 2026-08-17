# ChatGPT Review Pack — FULL
## Cycle 9 — QA / validation — ONE NEW BOUNDED REAL PRODUCT LOOP RE-PROOF

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 19:24:04 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 9 — QA / validation |
| **Profil SFIA** | Critical |
| **Typologie** | INC / bounded REAL validation campaign |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` · status `candidate` · version `0.1.0` · blob `9d9970d611dbb6e52297ac215604d3a08e87e738` · **aucune autorité d’exécution** |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `delivery/sfia-studio-pre-m6-ui-option-a` |
| **HEAD** | `0d33478566627a9bf507d5a06323962d349308ee` |
| **origin/main** | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| **Parent handoff** | `5dd35fc63f54b71ccc954c9a7eabb179e1e3499e` |
| **Parent blob** | `c8ef5032d6e9b98f9e82340653ddc7ff9342196b` |
| **Campagne** | `.tmp-sfia-review/real-bounded-reproof-20260817-191840/` |

---

## Verdict

```
INCOMPLETE —
REAL PROCESS FAILURE OBSERVED
BOUNDED HAPPY PATH NOT PROVEN
NO RETRY AUTHORIZED
```

CAMPAIGN_CONSUMED=yes. The GO slot is consumed. No second Project / Attempt / Cursor launch.

The previous Cycle 8 asksWrite false positive did not recur. The LIVE bounded proposal was classified `allow_read_only`. The loop reached Cursor REAL spawn ACK and then the REAL Cursor process exited nonzero (`technicalExitCode=1`, `stopReason=REAL_PROCESS_NONZERO_EXIT`) in ~4.5s. Product marked Attempt `failed` (not succeeded). No success Evidence / ReviewBundle.

---

## Morris ACCEPT / GO consumed

```
ACCEPT —
CYCLE 8 DELIVERY AMEND
OPERATOR asksWrite HEURISTIC STABILIZATION

AND

GO MORRIS —
ONE NEW BOUNDED REAL PRODUCT LOOP RE-PROOF
READ-ONLY
FRESH ISOLATED DB
FRESH PROJECT
FRESH ATTEMPT
```

Parent line `NOT AUTHORIZED FOR REAL` superseded only for this one campaign by this GO.

---

## Campaign consumption

```json
{
  "CAMPAIGN_STARTED_AT": "2026-08-17T17:20:34.023Z",
  "CAMPAIGN_CONSUMED": "yes",
  "trigger": "create-project-submit",
  "projectName": "PRE-M6 REAL REPROOF 2026-08-17-19-20-31"
}
```

CAMPAIGN_STARTED_AT = `2026-08-17T17:20:34.023Z` (create-project-submit).
CAMPAIGN_CONSUMED = yes.

---

## Local Git Truth PRE / POST

| Check | PRE | POST |
|-------|-----|------|
| branche | `delivery/sfia-studio-pre-m6-ui-option-a` | identique |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` | identique |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` | identique |
| staged | empty | empty |
| dirty | 110 | 110 identical |
| candidate files | 994 | 994 |
| manifest | `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5` | identique |
| runningAttemptRefresh.ui.test.tsx | `ed27f2c556c278d2e77e898d22758fbeb598a9f6454db43905db93888e4f85b9` | identique |

Candidate PRE=POST. No versioned mutation.

---

## Sources lues

PROCESS : cycle execution template ; routing guide ; CKC 04-qa-validation.md ; méthode §4.9 ; operating model ; guardrails.

CONVERGENCE : build doctrine ; roadmap.

V3 : framing 34 ; 35.

RUNTIME (read-only) : executionWindowPolicy (standard → 900000) ; observationSchedule (5/15/30/60s then 90s cadence for 15min) ; StudioCursorRealLaunchGateway instruction (README / M4_READ_ONLY_OK / M4_READ_ONLY_UNAVAILABLE) ; composeStudioProductRealBoundary (SFIA_STUDIO_CURSOR_REAL=1) ; OpenAIConversationProvider / OPS1_CONVERSATION_PROVIDER fake-off ; NodeCursorProcessRunner ; Product SQLite SFIA_STUDIO_PRODUCT_DB_PATH ; local Morris SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1.

---

## Convergence

PRE-M6 NON COMPLETE · runtime v3 NON ADOPTED · V3-F05 primary.

KEEP product chain + ARCH-WOP-1 + clickWhenInteractive.

TEMPORARY WITH EXIT : campaign operator + asksWriteClassifier.

FREEZE historical REAL objects.

Gap remaining : REAL Cursor terminal success (spawn ACK reached ; process failed).

---

## Fake / Real qualification

Fake conversation OFF. Deterministic Cursor boundary OFF. Cursor REAL ON. OpenAI LIVE via product path only.

This campaign : OpenAI LIVE observed ; Cursor REAL spawned then nonzero exit. Bounded happy path NOT PROVEN. Not REAL BOUNDARY PROVEN. Not END-TO-END REAL PROVEN.

---

## Parent asksWrite-stabilization handoff

Commit `5dd35fc63f54b71ccc954c9a7eabb179e1e3499e` · blob `c8ef5032d6e9b98f9e82340653ddc7ff9342196b`.

Parent PASS Cycle 8 operator asksWrite heuristic. `NOT AUTHORIZED FOR REAL` superseded only by this GO.

---

## Operator artifact integrity

| Artifact | Required SHA256 | Measured |
|----------|-----------------|----------|
| clickWhenInteractive.cjs | `16d39d58204d6c744ca734dd18c42bf22025555174b4363c677f0089a1ef8334` | match |
| asksWriteClassifier.cjs | `b018e356222f3f7da62042ae7be6f6f4cdb344c63e377798792e6bfb2c36d26a` | match |

Contracts unmodified.

---

## REAL preflight (ZERO LIVE)

```json
{
  "timestamp": "2026-08-17T17:19:27.361Z",
  "OPENAI_API_KEY_PRESENT": "yes",
  "OPENAI_MODEL_PRESENT": "yes",
  "OPENAI_MODEL": "gpt-5-mini",
  "OPS1_FAKE_FORCED": "no",
  "DETERMINISTIC_ABSENT": "yes",
  "cursorBinPresent": "yes",
  "cursorBinPath": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  "cursorAgentInvoked": "no",
  "port": 3065,
  "portFree": true,
  "dbPath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-bounded-reproof-20260817-191840/runtime/qa-product-real.sqlite",
  "dbExists": false,
  "historicalWorktreesPresent": [
    {
      "name": "wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555",
      "exists": true
    },
    {
      "name": "wt-xat_m3_m3-res_dec_f2_4a36c225-56e5-4654-bfbe-b86-67bf74b58c5f1b2fceb4eb6b",
      "exists": true
    }
  ],
  "worktreeCount": 2,
  "fakeOff": true,
  "deterministicOff": true
}
```

`cursor agent` was not invoked at preflight. CAMPAIGN NOT STARTED until create-project-submit.

---

## Fresh DB / server identity

```json
{
  "startupTimestamp": "2026-08-17T17:19:33.328Z",
  "readyTimestamp": "2026-08-17T17:19:34.538Z",
  "pid": 19271,
  "port": 3065,
  "baseUrl": "http://127.0.0.1:3065",
  "isolatedProductDb": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-bounded-reproof-20260817-191840/runtime/qa-product-real.sqlite",
  "branch": "delivery/sfia-studio-pre-m6-ui-option-a",
  "candidateHead": "0d33478566627a9bf507d5a06323962d349308ee",
  "SFIA_STUDIO_CURSOR_REAL": "1",
  "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY": "1",
  "OPS1_CONVERSATION_PROVIDER": null,
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY": null,
  "OPENAI_MODEL": "gpt-5-mini",
  "fakeConversation": "off",
  "deterministicBoundary": "off",
  "acceptedHelperSha256": "16d39d58204d6c744ca734dd18c42bf22025555174b4363c677f0089a1ef8334"
}
```

- DB : campaign `runtime/qa-product-real.sqlite` (did not exist before startup)
- Port : 3065
- PID : 19271 (same process through harvest ; stopped after evidence)
- Model : gpt-5-mini (non-secret)
- Provider class : OpenAIConversationProvider (OPS1_CONVERSATION_PROVIDER absent)
- Cursor REAL : SFIA_STUDIO_CURSOR_REAL=1
- Fake : off · Deterministic : off

---

## Fresh Project

- Name : `PRE-M6 REAL REPROOF 2026-08-17-19-20-31`
- ID : `prj:4ebd28f9-b3c8-49b4-bf70-88825d357a61`
- Distinct from `prj:dd72f2bf-…` and `prj:c3271c49-…`

LPS PRE : `lps:4efb34fb-4e88-4567-bffd-bd3f257d2cee` version 1 active.

---

## REAL Link navigation

- testId `open-project-workspace`
- tagName `A`
- constructor `HTMLAnchorElement`
- href `/studio/projects/prj%3A4ebd28f9-b3c8-49b4-bf70-88825d357a61`
- click via accepted clickWhenInteractive (no page.goto after create)

---

## Nora / OpenAI LIVE proposal

OpenAI LIVE observed : yes · stage initial proposal · provider openai · model gpt-5-mini.

POST to project workspace 200 in 18429ms at Nora turn. No fake marker.

F2 proposal IDs remain process-local ; UI stamp captured as `Statut DECISION_REQUIRED` (not a durable Proposal ID).

### Classifier + proposal corpus

```json
{
  "mode": "NNoraRecommande — la décision vous appartient",
  "proposalId": "Statut DECISION_REQUIRED",
  "scope": "Workspace isolé fourni; lecture limitée au README à la racine; un seul Attempt; observation automatique de type O3 uniquement; aucune création/modification de fichier; aucune commande shell; aucun glob/grep récursif; aucun git remote/commit/push/PR/merge; aucun retry; campagne REAL unique.",
  "outOfScope": "Exécution de commandes shell · Création ou modification de fichiers · Recherche récursive (glob/grep) dans l'arborescence · Opérations git (remote, commit, push, PR, merge) · Multiples tentatives ou retries · Lecture de fichiers autres que README à la racine · Toute intervention réseau ou accès externe non explicitement autorisé",
  "asksWrite": false,
  "disposition": "allow_read_only",
  "reason": "no_affirmative_write_intent",
  "evidence": [
    {
      "fragment": "PROPOSITION",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "Ce que Nora propose",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "DEMANDE REFORMULÉE",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "OBJECTIF",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "CE QUI EST COUVERT",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "CE QUI RESTE HORS PÉRIMÈTRE",
      "token": null,
      "context": "exclusion_heading",
      "classification": "section"
    },
    {
      "fragment": "VOTRE ACCORD",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "ÉTAPE SUIVANTE POSSIBLE",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "Détails techniques",
      "token": null,
      "context": "heading",
      "classification": "section"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "commit",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "push",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "merge",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "commit",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "push",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "Opérations git (remote, commit, push, PR, merge)",
      "token": "merge",
      "context": "exclusion_or_out_of_scope",
      "classification": "ignored_exclusion"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "commit",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "push",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "merge",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "commit",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "push",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    },
    {
      "fragment": "aucun git remote/commit/push/PR/merge",
      "token": "merge",
      "context": "active_section_local_negation",
      "classification": "ignored_negation"
    }
  ],
  "proposalText": "PROPOSITION\n\nCe que Nora propose\n\nStatut DECISION_REQUIRED\n\nDEMANDE REFORMULÉE\nConfirmer, par analyse et vérifications non-invasives, que l'exécution Cursor read-only bornée sur l'espace de travail isolé (lecture uniquement du README racine) peut produire une preuve terminale réelle du parcours Pre-M6, en respectant toutes les contraintes opérationnelles énoncées.\nOBJECTIF\nValider qu'une exécution Cursor strictement read-only et bornée sur le workspace isolé produit une preuve terminale réelle du chemin Pre-M6, sans aucune modification du dépôt ni exécution de commandes.\nCE QUI EST COUVERT\nWorkspace isolé fourni; lecture limitée au README à la racine; un seul Attempt; observation automatique de type O3 uniquement; aucune création/modification de fichier; aucune commande shell; aucun glob/grep récursif; aucun git remote/commit/push/PR/merge; aucun retry; campagne REAL unique.\nCE QUI RESTE HORS PÉRIMÈTRE\nExécution de commandes shell · Création ou modification de fichiers · Recherche récursive (glob/grep) dans l'arborescence · Opérations git (remote, commit, push, PR, merge) · Multiples tentatives ou retries · Lecture de fichiers autres que README à la racine · Toute intervention réseau ou accès externe non explicitement autorisé\nVOTRE ACCORD\nDécision requise\nÉTAPE SUIVANTE POSSIBLE\nDécision Morris explicite requise\nDétails techniques\n\nConversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL.\n\nAUCUNE EXÉCUTION"
}
```

---

## asksWrite classifier REAL disposition

- asksWrite = false
- disposition = `allow_read_only`
- reason = `no_affirmative_write_intent`
- commit/push/merge tokens classified ignored_negation / ignored_exclusion only

Historical false positive closed on LIVE corpus. Classifier not modified after seeing the LIVE response.

---

## HumanDecision

- ID : `dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- kind : GO
- Count : 1
- Via UI `f2-decide-GO`

---

## ExecutionContract

- Successor ID : `xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Also precursor `xct:m3:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- action `cursor.read_only.inspect`
- target `workspace.isolated.read`
- scope `studio.m4.real_off`
- requiredCapabilities `["cap:cursor.read_only"]`
- executionWindowClass `standard`
- mismatches : none
- UNRESOLVED : none
- write/shell/git mutation capabilities : none

---

## executionWindowClass / duration / deadline

- executionWindowClass = `standard`
- resolvedMaxDurationMs = `900000`
- startedAt = `2026-08-17T17:20:54.715Z`
- computed deadline = `2026-08-17T17:35:54.715Z`
- operator timeoutProof.timeoutMs = `900000` (from Attempt snapshot ; frontier LAUNCHED payload is gatewayId only)

No ARCH-WOP-1 snapshot mismatch.

---

## Confirmation / Gate D

UI confirmation clicked once. Safety journal grant:

`gd:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824` consumed at `2026-08-17T17:20:54.715Z`.

Product table `oa_confirmations` absent in this SQLite (`no such table`) — Gate D observed via m4 safety journal, not OA confirmations table. Count for this Attempt : grants=1, CREATED=1, LAUNCHED=1.

---

## Fresh Attempt

- ID : `xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Distinct from historical `453ff36a…` and `4a36c225…`
- Count : 1
- Agent : `agt:m4.cursor.bounded_readonly`
- Adapter : `adp:m4-cursor-cli-real`

### Durable payload

```json
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
  "executionContractId": "xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
  "executionContractVersion": 3,
  "selectedAgentRef": "agt:m4.cursor.bounded_readonly",
  "status": "failed",
  "idempotencyKey": "idem:m3-att:xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
  "correlationId": "cor:a2259c58e150f27c",
  "version": 3,
  "createdAt": "2026-08-17T17:20:54.711Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:eff96c0a89e0f5af",
    "actor": {
      "actorId": "actor:local-morris-m3",
      "role": "decision_maker",
      "displayName": "Local Morris M3 (temporary with exit)",
      "authorityLevel": "none"
    },
    "source": "system",
    "timestamp": "2026-08-17T17:20:54.711Z",
    "correlationId": "cor:a2259c58e150f27c"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "proposedAgentRef": "agt:m4.cursor.bounded_readonly",
  "selectionExpiresAt": "2026-08-17T17:35:54.711Z",
  "updatedAt": "2026-08-17T17:20:59.730Z",
  "launchedAt": "2026-08-17T17:20:54.715Z",
  "startedAt": "2026-08-17T17:20:54.715Z",
  "executionWindowClass": "standard",
  "resolvedMaxDurationMs": 900000,
  "failedAt": "2026-08-17T17:20:59.730Z",
  "stopReason": "REAL_PROCESS_NONZERO_EXIT",
  "technicalExitCode": 1,
  "durationMs": 4511
}
```

---

## Cursor REAL launch

- REAL_CURSOR_LAUNCH_COUNT = 1
- CREATED = 1 · LAUNCHED = 1
- processRef = `pid:19887`
- timeoutMs (Attempt snapshot) = 900000
- Operator never executed `cursor agent`

No one-launch regression.

---

## O3 REAL timeline

Auto observation proven (posts after confirm ; no manual refresh).

```json
[
  {
    "ts": "2026-08-17T17:20:55.661Z",
    "reason": "auto_post_detected",
    "attemptId": "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
    "contractId": "xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
    "processRef": "pid:19887",
    "priorState": "running",
    "uiStatus": "running",
    "dbStatus": "running",
    "osPidAlive": true,
    "postsSinceConfirm": 3,
    "created": 1,
    "launched": 1
  },
  {
    "ts": "2026-08-17T17:21:00.723Z",
    "reason": "poll",
    "attemptId": "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
    "contractId": "xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
    "processRef": "pid:19887",
    "priorState": "running",
    "uiStatus": "failed",
    "dbStatus": "failed",
    "osPidAlive": false,
    "postsSinceConfirm": 6,
    "created": 1,
    "launched": 1
  }
]
```

- t+~1s : ui/db running, osPidAlive true
- t+~6s : ui/db failed, osPidAlive false, launch count still 1

Not 200ms polling. Not max-three-refresh. Manual refresh unused.

---

## Terminal REAL result

- Attempt status = `failed`
- stopReason = `REAL_PROCESS_NONZERO_EXIT`
- technicalExitCode = 1
- timedOut = not set
- durationMs = 4511
- stdout/stderr not persisted on Attempt payload (process-local runner / V3-F10)
- M4_READ_ONLY_OK : not observed in durable state
- M4_READ_ONLY_UNAVAILABLE : not observed
- Product did not mark succeeded despite nonzero exit → not a failure-semantics regression

```json
{
  "ok": false,
  "code": "INCOMPLETE — REAL PROCESS FAILURE OBSERVED",
  "attemptStatus": "failed",
  "attemptId": "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824",
  "processRef": "pid:19887",
  "exitCode": null,
  "noRetry": true
}
```

---

## One-launch proof

created=1 launched=1 grants=1 · no second confirm · same Attempt ID throughout · launch count stayed 1 after failure.

---

## Read-only proof

Fresh worktree PRE:

```json
{
  "worktreePath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
  "head": "0d33478566627a9bf507d5a06323962d349308ee",
  "status": ""
}
```

POST:

```json
{
  "worktreePath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15",
  "head": "0d33478566627a9bf507d5a06323962d349308ee",
  "status": ""
}
```

HEAD `0d334785…` · porcelain empty. Candidate dirty 110 unchanged. No write to authorized workspace.

---

## Evidence

Evidence IDs : none (expected on failed Attempt ; no success Evidence).

---

## ReviewBundle

ReviewBundle IDs : none.

---

## Nora post-execution

Not reached (Attempt failed before success Evidence). OpenAI LIVE for post-execution : no.

---

## LPS PRE / POST

PRE : `lps:4efb34fb-4e88-4567-bffd-bd3f257d2cee` v1 active.

POST : v1 superseded · v2 `lps:0a324ab0f0f8fad0` superseded · v3 `lps:ad0f869d69b927a5` active.

LPS advanced on the product path but not a happy-path Evidence/ReviewBundle/Nora-post loop.

---

## UI / screenshots

```json
[
  {
    "name": "01-project-created.png",
    "sha256": "d81f125fdb77f11a82b06dd70b0e000c636e2a881c653d6619d05ea6060601e9",
    "bytes": 61115
  },
  {
    "name": "02-workspace.png",
    "sha256": "d5c84a75365f652377b9921f0de44843f60bd94617e22b5e91310a7d14e838b1",
    "bytes": 183727
  },
  {
    "name": "03-live-nora-proposal.png",
    "sha256": "ff62a3c328d5ef4dcdd4bd434ccda7d3ce613b48f012aece0fac017712dd36f2",
    "bytes": 465817
  },
  {
    "name": "04-human-decision-go.png",
    "sha256": "3ee5d3e011f021083ad1a6640c364632bbd9904b9790d4481fae81352f2a8cab",
    "bytes": 470502
  },
  {
    "name": "05-bounded-real-contract.png",
    "sha256": "aedb1c6937b080ca3cf85101ecda9ede2f1e514e8c2f68f34a0ba501eeab829e",
    "bytes": 526474
  },
  {
    "name": "06-real-attempt-running.png",
    "sha256": "08a2cd37e6400fed5a2a29176279a7f54f9b1b683757f7503c0318902ac142fb",
    "bytes": 501859
  },
  {
    "name": "07-real-terminal-evidence.png",
    "sha256": "91531be81ba5bb55caad82446bf1eec12e103c11fc57dfc3c9d62250edcccc5e",
    "bytes": 532743
  },
  {
    "name": "08-post-evidence-nora-lps.png",
    "sha256": "91531be81ba5bb55caad82446bf1eec12e103c11fc57dfc3c9d62250edcccc5e",
    "bytes": 532743
  }
]
```

Reload-after-success screenshot not taken (terminal was failed ; campaign STOP).

---

## Candidate immutability

PRE=POST as table above.

---

## Fresh worktree integrity

Path : `projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15`

Not deleted. HEAD unchanged. porcelain 0.

---

## Historical REAL integrity

Attempts `453ff36a…` / `4a36c225…` and Projects `dd72f2bf…` / `c3271c49…` not reused.

Historical WTs intact (HEAD `0d334785…`, porcelain 0). No cleanup.

Worktree count after campaign = 3 (2 historical + 1 fresh). Fresh not cleaned.

---

## OpenAI LIVE accounting

- observed : yes
- stages : initial Nora proposal (product UI)
- provider : openai / OpenAIConversationProvider
- model : gpt-5-mini
- post-execution Nora : no
- no curl / no direct SDK script

---

## Cursor REAL accounting

- NEW_REAL_PROJECT_COUNT = 1
- NEW_REAL_ATTEMPT_COUNT = 1
- REAL_CURSOR_LAUNCH_COUNT = 1
- REAL_PROCESSREF_COUNT = 1 (`pid:19887`)
- Operator `cursor agent` invocations = 0

---

## Reserves / debt

- V3-F10 process-local runner : stdout/stderr of the failed Cursor process were not durable on Attempt ; only `technicalExitCode=1` / `REAL_PROCESS_NONZERO_EXIT`.
- `oa_confirmations` table missing in isolated Product SQLite ; Gate D proven via m4 safety journal.
- F2 Proposal ID not a durable M3 identifier.
- Fast ~4.5s CLI exit 1 : happy-path terminal marker not produced ; root cause of Cursor CLI exit is not fully reconstructed from durable product fields.
- PRE-M6 remains NON COMPLETE.
- runtime v3 remains NON ADOPTED.

---

## Claims / anti-claims

Observed (not overclaimed) :

- fresh isolated DB / Project / Attempt
- REAL UI Link navigation
- asksWrite LIVE allow_read_only (negation / HORS PÉRIMÈTRE)
- OpenAI LIVE product path (initial proposal)
- bounded read-only ExecutionContract + standard 15-min snapshot
- one Cursor REAL launch + spawn ACK + O3 auto observation
- one-launch invariant
- read-only worktree
- product failed semantics on nonzero exit
- candidate PRE=POST

Anti-claims :

- NOT REAL Cursor terminal success
- NOT REAL BOUNDARY PROVEN
- NOT END-TO-END REAL PROVEN
- NOT Evidence / ReviewBundle / Nora-post happy path
- NOT write execution
- NOT restart recovery
- NOT production ready
- NOT PRE-M6 complete
- NOT M6 authorized
- NOT runtime v3 ADOPTED
- NO RETRY AUTHORIZED

---

## Exact next gate

```
MORRIS —
ACCEPT DIAGNOSIS / REQUALIFY

NO AUTOMATIC REAL RETRY.
```

---

## Instruction ChatGPT

Lire obligatoirement le handoff distant canonique `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` avant validation.
