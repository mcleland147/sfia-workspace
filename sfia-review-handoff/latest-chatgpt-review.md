# ChatGPT Review Pack — GPT → Cursor réel bout-en-bout

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 20:24:33 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / implémentation · sous-cycle 9 — QA / validation bout-en-bout réelle |
| **Profil SFIA** | Critical |
| **Typologie** | INC — validation bout-en-bout expérimentale |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale, **non pushée**) |
| **HEAD** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **Review niveau** | full |

---

## GO Morris consommé

GO test bout-en-bout Cursor réel borné — autorise invocation Cursor réelle dans sandbox, 2 appels GPT/tentative, ≤3 tentatives, ≤6 OpenAI, ≤3 Cursor ; interdit commit/push/PR spike, merge, SDK, assouplissement contrats, cible = repo principal.

---

## Truth Check

| Check | Résultat |
|-------|----------|
| pwd | `/Users/morris/Projects/sfia-workspace` |
| Branche | `spike/sfia-studio-openai-gpt-adapter` |
| HEAD / origin/main / merge-base | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| Staged | aucun |
| Remote spike | absente |
| Working tree | dirty volontaire (spike OpenAI + e2e) |
| Secrets | aucun détecté dans preuves e2e |

**PASS**

---

## Sources

Git : template cycle · `sfia/review-handoff` (précédent `c733832…`) · docs 07/28/29/30 · harness ports Cursor/OpenAI · validateurs inchangés (sémantique).

---

## Mécanisme Cursor réel découvert

- CLI : `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
- Argv : `agent --print --workspace <sandbox> --trust --sandbox enabled <instruction>`
- Mode écriture : `agent` (pas ask/plan)
- Auth : session locale `cursor agent status` → **Logged in (identity redacted)**
- `CURSOR_API_KEY` : non utilisée / non affichée
- Adaptateur existant : `CursorExecutorPortRealSpike` (`src/ports/cursorRealSpike.ts`)
- Extension sandbox : `proofs/e2e-cursor-sandbox` ajoutée à `isAllowedCursorSpikeSandbox`

---

## Architecture exacte du test

```text
resetE2eSandbox (mini-git local + input.md)
→ OpenAI qualify (S-GPT-09, json_object, gpt-5-mini, 8192)
→ validateExecutionContractCandidate (fail-closed)
→ buildBoundedCursorInstruction (harness impose allowlist; ignore widenings GPT)
→ assertSandboxPaths + hash SHA-256
→ executeSpikeContract (Cursor réel, timeout 120s)
→ validateSandboxAfterCursor + assertMainRepoUnchangedByCursor
→ OpenAI verdict (S-GPT-10, json_schema strict)
→ validateVerdictCandidate
→ preuve JSON gitignored
```

Runner : `spikes/e2e-gpt-cursor/run-e2e.ts` · script `npm run spike:e2e-gpt-cursor`

---

## Sandbox

- Chemin : `projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/`
- Gitignored : `harness/.gitignore` → `proofs/**`
- Mini-repo : `git init` + commit baseline `input.md` (harness only)
- Pas de symlink sandbox
- Hors `app/**` et hors chemins protégés

### Fixture `input.md`

```markdown
# E2E fixture input

correlationId: corr-e2e-gpt-cursor-001

Synthetic non-sensitive fixture for bounded Cursor write of output.md only.
No remote Git. No secrets. No production claims.
```

### Artefact attendu / obtenu `output.md`

```markdown
# E2E Cursor Sandbox Result

- correlationId: corr-e2e-gpt-cursor-001
- status: COMPLETED
- summary: Synthetic fixture input.md analyzed in sandbox only.
- gitRemoteActions: none

```

---

## Instruction Cursor (contrat harness) — aperçu + hash

Hash contrat (tentative succès) : `a3ef1a0574ad0c9c7492ddb34d92033bec246ae0562e66e3ad3e509c9d682b6c`

Aperçu sanitisé (≤500) :

```
You are executing a STRICTLY BOUNDED SFIA Studio e2e spike. You do not decide. Morris alone decides.
Workspace (cwd/workspace): /Users/morris/Projects/sfia-workspace/projects/sfia-studio/harness/proofs/e2e-cursor-sandbox
correlationId: corr-e2e-gpt-cursor-001
requestId: req-e2e-gpt-cursor-001

OBJECTIVE (single):
Read input.md. Create or overwrite ONLY output.md with EXACTLY this content (byte-identical recommended):
-----BEGIN OUTPUT.md-----
# E2E Cursor Sandbox Result

- correlationId: corr-e2…[truncated]
```

Source builder (extrait) :

```ts
const instruction = [
    "You are executing a STRICTLY BOUNDED SFIA Studio e2e spike. You do not decide. Morris alone decides.",
    `Workspace (cwd/workspace): ${path.resolve(guards.sandboxAbs)}`,
    `correlationId: ${guards.correlationId}`,
    `requestId: ${guards.requestId}`,
    "",
    "OBJECTIVE (single):",
    `Read ${E2E_INPUT_REL}. Create or overwrite ONLY ${E2E_OUTPUT_REL} with EXACTLY this content (byte-identical recommended):`,
    "-----BEGIN OUTPUT.md-----",
    buildExactOutputTemplate(guards.correlationId).trimEnd(),
    "-----END OUTPUT.md-----",
    "",
    "ALLOWED FILES:",
    `- read: ${E2E_INPUT_REL}`,
    `- write: ${E2E_OUTPUT_REL}`,
    "",
    "FORBIDDEN FILES: anything else under the workspace; entire main repository outside this sandbox.",
    "",
    "ALLOWED COMMANDS (conceptual): " + E2E_ALLOWED_COMMANDS.join(", "),
    "FORBIDDEN COMMANDS (do not run): git push, git pull, git fetch, git commit, git reset --hard, git clean -fd, git checkout --, sudo, rm -rf, curl, wget, docker, env, printenv, export -p, gh pr, package installs.",
    "",
    "STOP CONDITIONS: if you cannot write only output.md with the exact structure, stop without other changes.",
    "Do NOT claim production-ready, merge authorization, or Morris GO.",
    "Do NOT perform any remote Git action.",
    "",
    `GPT qualification objective (informational, non-authoritative): ${candidate.objective.slice(0, 400)}`,
  ].join("\n");
```

Allowlist fichiers : `input.md` (read), `output.md` (write)  
Denylist : `app/**`, `../`, chemin abs du repo principal, `node_modules`  
Commandes conceptuelles autorisées : read-files, write-output.md, git-status/diff/diff-stat/rev-parse  
Interdites : push/pull/fetch/commit/reset --hard/clean -fd/checkout --, sudo, rm -rf, curl, wget, docker, env, printenv, export -p, gh pr

GPT ne peut pas élargir : `rejectGptScopeWidening` + instruction imposée localement.

---

## Tests locaux

- `npm run typecheck` OK
- `vitest` e2e + cursor-real + gpt-openai : **47 pass / 1 skipped**
- `npm run build` OK
- fixture e2e sans flags : NON_EXECUTED
- Couverture : path escape, `..`, symlink, git push, rm -rf, widening GPT, output contract, extras, fixture défaut

---

## Tableau des tentatives (phase)

| # | Contexte | OpenAI Δ | Cursor Δ | Résultat |
|---|----------|----------|----------|----------|
| A | Qual live | +1 | 0 | FAIL `GPT_GIT_WRITE` (écho littéral interdit dans contrat) |
| B | Qual+Cursor | +1 | +1 | Cursor OK `output.md` exact ; crash harness `E2E_OUTPUT_REL` non importé |
| C | Correctifs + relance | +2 | +1 | **SUCCESS** S-GPT-09 → Cursor → S-GPT-10 |

Compteurs finaux phase : OpenAI **4/6** · Cursor **2/3** · STOP après succès.

---

## Preuve tentative succès (JSON runtime)

```json
{
  "attempt": 1,
  "success": true,
  "cursorRealInvoked": true,
  "productionReadyClaimed": false,
  "mergeAuthorized": false,
  "cursorAuth": {
    "available": true,
    "loggedIn": true,
    "detail": "Logged in (identity redacted)"
  },
  "openaiGate": {
    "apiKeyDefined": true,
    "modelValue": "gpt-5-mini"
  },
  "maxCompletionTokens": 8192,
  "contractHash": "a3ef1a0574ad0c9c7492ddb34d92033bec246ae0562e66e3ad3e509c9d682b6c",
  "ignoredGptWidenings": [],
  "instructionPreviewSanitized": "You are executing a STRICTLY BOUNDED SFIA Studio e2e spike. You do not decide. Morris alone decides.\nWorkspace (cwd/workspace): /Users/morris/Projects/sfia-workspace/projects/sfia-studio/harness/proofs/e2e-cursor-sandbox\ncorrelationId: corr-e2e-gpt-cursor-001\nrequestId: req-e2e-gpt-cursor-001\n\nOBJECTIVE (single):\nRead input.md. Create or overwrite ONLY output.md with EXACTLY this content (byte-identical recommended):\n-----BEGIN OUTPUT.md-----\n# E2E Cursor Sandbox Result\n\n- correlationId: corr-e2…[truncated]",
  "liveQualification": {
    "ok": true,
    "status": "SUCCEEDED",
    "usage": {
      "inputTokens": 773,
      "outputTokens": 2491,
      "totalTokens": 3264,
      "reasoningTokens": 1664,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…Xsg0",
      "durationMs": 21895,
      "monetaryCostClaimed": false
    },
    "responseObservation": {
      "httpStatus": 200,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…Xsg0",
      "finishReason": "stop",
      "contentType": "string",
      "contentLength": 3072,
      "contentPreviewSanitized": "{\n  \"schemaVersion\": \"gpt-spike-1.0.0\",\n  \"requestId\": \"req-e2e-gpt-cursor-001\",\n  \"correlationId\": \"corr-e2e-gpt-cursor-001\",\n  \"proposedCycle\": \"Cycle 8\",\n  \"proposedProfile\": \"Light\",\n  \"profileJustification\": \"Analyse en lecture seule d'un unique fixture (input.md) avec synthèse concise destinée à output.md. Portée limitée, risque faible, effort réduit.\",\n  \"objective\": \"Lire uniquement projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/input.md, produire une synthèse locale bornée et st…[truncated]",
      "hasMarkdownFence": false,
      "looksLikeJsonObject": true,
      "refusalPresent": false,
      "reasoningTokens": 1664,
      "durationMs": 21895
    },
    "retriesAttempted": 0,
    "liveInvoked": true,
    "cycleCallNumber": 3,
    "validatorAccepted": true
  },
  "cursor": {
    "callNumber": 2,
    "ok": true,
    "exitCode": 0,
    "timedOut": false,
    "durationMs": 9742,
    "stdoutRedacted": "`output.md` written with the required structure.\n\n- correlationId: `corr-e2e-gpt-cursor-001`\n- status: `COMPLETED`\n- gitRemoteActions: `none`\n",
    "stderrRedacted": "",
    "argvRedacted": [
      "agent",
      "--print",
      "--workspace",
      "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/harness/proofs/e2e-cursor-sandbox",
      "--trust",
      "--sandbox",
      "enabled",
      "You are executing a STRICTLY BOUNDED SFIA Studio e2e spike. You do not decide. Morris alone decides.\nWorkspace (cwd/w..."
    ],
    "mechanismBin": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor"
  },
  "sandboxPost": {
    "ok": true,
    "outputExists": true,
    "unexpectedFiles": [],
    "statusShort": "?? output.md",
    "diffStat": "",
    "outputPreviewSanitized": "# E2E Cursor Sandbox Result\n\n- correlationId: corr-e2e-gpt-cursor-001\n- status: COMPLETED\n- summary: Synthetic fixture input.md analyzed in sandbox only.\n- gitRemoteActions: none\n"
  },
  "mainRepoUntouched": true,
  "liveVerdict": {
    "ok": true,
    "status": "SUCCEEDED",
    "usage": {
      "inputTokens": 1675,
      "outputTokens": 3029,
      "totalTokens": 4704,
      "reasoningTokens": 2048,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…67NI",
      "durationMs": 20030,
      "monetaryCostClaimed": false
    },
    "responseObservation": {
      "httpStatus": 200,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…67NI",
      "finishReason": "stop",
      "contentType": "string",
      "contentLength": 3897,
      "contentPreviewSanitized": "{\n  \"schemaVersion\": \"gpt-spike-1.0.0\",\n  \"requestId\": \"req-e2e-gpt-cursor-001\",\n  \"correlationId\": \"corr-e2e-gpt-cursor-001\",\n  \"status\": \"READY_FOR_MORRIS_REVIEW\",\n  \"observations\": [\n    \"Contrat validé localement (contractValidated=true dans l'entrée).\",\n    \"Lecture autorisée: projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/input.md — lecture effective.\",\n    \"Écriture autorisée: projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/output.md — artifact sandbox://output.md présent.\"…[truncated]",
      "hasMarkdownFence": false,
      "looksLikeJsonObject": true,
      "refusalPresent": false,
      "reasoningTokens": 2048,
      "durationMs": 20030
    },
    "retriesAttempted": 0,
    "liveInvoked": true,
    "cycleCallNumber": 4,
    "validatorAccepted": true
  },
  "openaiCalls": 4,
  "cursorInvocations": 2,
  "openaiBudget": 6,
  "cursorBudget": 3,
  "baselineFiles": [
    "input.md"
  ],
  "stopReason": null
}
```

### Synthèse mesurée

| Étape | HTTP | Finish | Tokens in/out/total/reasoning | Durée |
|-------|------|--------|-------------------------------|-------|
| S-GPT-09 | 200 | stop | 773/2491/3264/1664 | 21895 ms |
| Cursor | n/a (CLI) | exit 0 | n/a | 9742 ms |
| S-GPT-10 | 200 | stop | 1675/3029/4704/2048 | 20030 ms |

Stdout Cursor sanitisé : ``output.md` written with the required structure.

- correlationId: `corr-e2e-gpt-cursor-001`
- status: `COMPLETED`
- gitRemoteActions: `none`
`  
Stderr : (vide)  
Git sandbox : `?? output.md`  
Main repo untouched : `True`

---

## Fichiers modifiés / ajoutés (ce GO)

- `harness/src/ports/cursorRealSpike.ts` — sandbox e2e autorisée + contrôles `..`
- `harness/src/ports/e2eCursorBounded.ts` (**nouveau**)
- `harness/src/ports/e2eSandbox.ts` (**nouveau**)
- `harness/spikes/e2e-gpt-cursor/run-e2e.ts` (**nouveau**)
- `harness/tests/e2e-gpt-cursor.test.ts` (**nouveau**)
- `harness/src/types/gptContracts.ts` — `executionMode: cursor-real-spike` (extension vérité, non assouplissement)
- `harness/src/index.ts` · `harness/package.json` script · `harness/README.md`
- `projects/sfia-studio/31-poc-gpt-cursor-e2e-spike-report.md`
- `.tmp-sfia-review/chatgpt-review.md`

**Non modifiés :** validateur métier fail-closed · endpoint · modèle · pas de SDK · pas de commit spike

---

## Invariants

- `productionReadyClaimed=false`
- `mergeAuthorized=false`
- `cursorRealInvoked=true` **uniquement** après spawn CLI réel
- Morris seule autorité · GPT propose · harness borne · Cursor exécute · Git trace
- Aucun claim production / merge / L5

---

## Sécurité / FinOps / Performance

- Clé OpenAI définie, jamais affichée ; identité Cursor redactée
- 0 retry · timeouts 30s GPT / 120s Cursor · pas de parallèle
- Coût monétaire non inventé
- Réserve : commandes internes Cursor non journalisées une-à-une (contrôle post-facto fichiers/git)

---

## Réserves

- Spike non versionné
- Un seul scénario sandbox synthétique
- Réseau Cursor Agent probable (non mesuré finement)
- Worker Cursor résiduel possible (réserve doc 29)

## Décisions Morris restantes

1. Versionnement / PR spike
2. Industrialisation / UI Studio
3. Proxy/journal commandes Cursor plus strict
4. Élargissement scénarios

---

## Verdict final

`GPT TO CURSOR REAL END-TO-END SPIKE PROVEN WITH RESERVES — VERSIONING DECISION REQUIRED`

Instruction : ChatGPT doit lire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant verdict indépendant.

Aucun secret dans ce pack.
