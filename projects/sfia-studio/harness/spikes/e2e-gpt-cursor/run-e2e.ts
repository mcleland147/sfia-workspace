/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 *
 * End-to-end: GPT qualify → bounded Cursor real → GPT verdict.
 * Flags: SFIA_GPT_REAL_SPIKE=1 SFIA_GPT_REAL_LIVE=1 SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1
 */

import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import {
  OpenAIRealSpikeAdapter,
  discoverOpenAiLiveGate,
  getPhaseVerdictCallBudget,
  readCycleCallCount,
  resetLiveCallCounterForTests,
  reserveCycleCall,
} from "../../src/ports/openaiRealSpike.js";
import {
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  resolveCursorBin,
} from "../../src/ports/cursorRealSpike.js";
import {
  E2E_CORRELATION_ID,
  E2E_OUTPUT_REL,
  E2E_REQUEST_ID,
  buildBoundedCursorInstruction,
} from "../../src/ports/e2eCursorBounded.js";
import {
  assertMainRepoUnchangedByCursor,
  captureMainRepoFingerprint,
  resetE2eSandbox,
  resolveE2eSandboxAbs,
  snapshotSandboxGit,
  validateSandboxAfterCursor,
} from "../../src/ports/e2eSandbox.js";
import { type GPTQualificationRequest } from "../../src/types/gptContracts.js";
import { sanitizeOpenAiErrorText } from "../../src/ports/openaiRealSpike.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HARNESS_ROOT = path.resolve(HERE, "../..");
const MAIN_REPO = path.resolve(HARNESS_ROOT, "../../..");
const SANDBOX = resolveE2eSandboxAbs(HARNESS_ROOT);
const PROOF_DIR = path.join(HARNESS_ROOT, "proofs", "e2e-runs");
const PHASE_OPENAI = path.join(HARNESS_ROOT, "proofs", ".phase-e2e-openai-calls.json");
const PHASE_CURSOR = path.join(HARNESS_ROOT, "proofs", ".phase-e2e-cursor-invocations.json");
const MAX_ATTEMPTS = 3;
const MAX_OPENAI = 6;
const MAX_CURSOR = 3;
const CURSOR_TIMEOUT_MS = 120_000;

function sampleRequest(): GPTQualificationRequest {
  return {
    requestId: E2E_REQUEST_ID,
    correlationId: E2E_CORRELATION_ID,
    intent:
      "Analyser en lecture seule le fichier input.md du sandbox e2e et proposer une synthèse locale bornée. " +
      "Le harness imposera ensuite l'écriture exclusive de output.md. Aucune action distante. Aucune décision Morris.",
    repoRef: "local:sfia-workspace@e2e-sandbox",
    knownConstraints: [
      "e2e-sandbox-only",
      "no-remote-actions",
      "cursor-real-bounded-by-harness",
      "fail-closed-validation",
    ],
    allowedPaths: [
      "projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/input.md",
      "projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/output.md",
      "projects/sfia-studio/harness/proofs/e2e-cursor-sandbox/",
    ],
    deniedPaths: ["projects/sfia-studio/app/**", ".env"],
    availableCycles: ["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13", "DOC"],
    availableProfiles: ["Light", "Standard", "Critical"],
    decisionsAlreadyValidated: ["GO test bout-en-bout Cursor réel borné"],
    decisionsStillOpen: ["versioning spike"],
    requestedAt: new Date().toISOString(),
    requestedBy: "Morris",
    allowedActions: ["read-fixture", "write-proof", "cursor-fixture", "git-read-local"],
    requiredMorrisGates: ["GO-MORRIS-EXECUTE-AFTER-CONTRACT"],
  };
}

function cursorAuthRedacted(): { available: boolean; loggedIn: boolean; detail: string } {
  try {
    const bin = resolveCursorBin("/Applications/Cursor.app/Contents/Resources/app/bin/cursor");
    const out = execFileSync(bin, ["agent", "status"], {
      encoding: "utf8",
      timeout: 15_000,
      env: { PATH: process.env.PATH, HOME: process.env.HOME, LANG: process.env.LANG },
    });
    const loggedIn = /logged in/i.test(out);
    return {
      available: true,
      loggedIn,
      detail: loggedIn ? "Logged in (identity redacted)" : sanitizeOpenAiErrorText(out, 200),
    };
  } catch (e) {
    return {
      available: false,
      loggedIn: false,
      detail: sanitizeOpenAiErrorText(e instanceof Error ? e.message : String(e), 200),
    };
  }
}

function summarizeGpt(r: {
  ok: boolean;
  status: string;
  usage?: unknown;
  errorCode?: string;
  errorMessage?: string;
  httpError?: unknown;
  responseObservation?: unknown;
  retriesAttempted: number;
  liveInvoked: boolean;
  cycleCallNumber?: number;
}) {
  return {
    ok: r.ok,
    status: r.status,
    usage: r.usage,
    errorCode: r.errorCode,
    errorMessage: r.errorMessage,
    httpError: r.httpError,
    responseObservation: r.responseObservation,
    retriesAttempted: r.retriesAttempted,
    liveInvoked: r.liveInvoked,
    cycleCallNumber: r.cycleCallNumber,
    validatorAccepted: r.ok === true,
  };
}

async function runAttempt(attempt: number): Promise<Record<string, unknown>> {
  resetLiveCallCounterForTests();
  mkdirSync(PROOF_DIR, { recursive: true });

  const auth = cursorAuthRedacted();
  const openaiGate = discoverOpenAiLiveGate();
  const maxCompletionTokens = Number(process.env.SFIA_GPT_MAX_COMPLETION_TOKENS ?? "8192");

  if (!openaiGate.liveGateSatisfied) {
    return {
      attempt,
      stopReason: openaiGate.stopReason ?? "OPENAI gate failed",
      cursorRealInvoked: false,
      success: false,
    };
  }
  if (!auth.available || !auth.loggedIn) {
    return {
      attempt,
      stopReason: "GPT PROVEN — CURSOR REAL INVOCATION UNAVAILABLE",
      cursorAuth: auth,
      cursorRealInvoked: false,
      success: false,
    };
  }
  if (readCycleCallCount(PHASE_OPENAI) >= MAX_OPENAI) {
    return { attempt, stopReason: "OpenAI phase budget exhausted", success: false, cursorRealInvoked: false };
  }
  if (readCycleCallCount(PHASE_CURSOR) >= MAX_CURSOR) {
    return { attempt, stopReason: "Cursor phase budget exhausted", success: false, cursorRealInvoked: false };
  }

  resetE2eSandbox(SANDBOX);
  const baseline = snapshotSandboxGit(SANDBOX);
  const mainBefore = captureMainRepoFingerprint(MAIN_REPO);

  const live = new OpenAIRealSpikeAdapter({
    enabled: true,
    timeoutMs: 30_000,
    maxCompletionTokens,
    cycleCounterPath: PHASE_OPENAI,
    cycleCallBudget: MAX_OPENAI,
  });

  const req = sampleRequest();
  const qual = await live.qualify(req);
  if (!qual.ok || !qual.candidate) {
    return {
      attempt,
      success: false,
      cursorRealInvoked: false,
      liveQualification: summarizeGpt(qual),
      stopReason: "S-GPT-09 failed",
      openaiCalls: readCycleCallCount(PHASE_OPENAI),
      cursorInvocations: readCycleCallCount(PHASE_CURSOR),
    };
  }

  let bounded;
  try {
    bounded = buildBoundedCursorInstruction(qual.candidate, {
      sandboxAbs: SANDBOX,
      correlationId: E2E_CORRELATION_ID,
      requestId: E2E_REQUEST_ID,
      timeoutMs: CURSOR_TIMEOUT_MS,
      mainRepoAbs: MAIN_REPO,
    });
  } catch (e) {
    return {
      attempt,
      success: false,
      cursorRealInvoked: false,
      liveQualification: summarizeGpt(qual),
      stopReason: e instanceof Error ? e.message : String(e),
      openaiCalls: readCycleCallCount(PHASE_OPENAI),
    };
  }

  const cursorCallNo = reserveCycleCall(PHASE_CURSOR, MAX_CURSOR);
  process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
  const spike = new CursorExecutorPortRealSpike({
    enabled: true,
    timeoutMs: CURSOR_TIMEOUT_MS,
    agentMode: "agent",
    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  });
  const cursorResult = await spike.executeSpikeContract(bounded.contract);
  const cursorRealInvoked = cursorResult.realCursorProcessInvoked === true;

  let post;
  let mainOk = true;
  let mainError: string | undefined;
  try {
    post = validateSandboxAfterCursor(SANDBOX, E2E_CORRELATION_ID, baseline.files);
    assertMainRepoUnchangedByCursor(MAIN_REPO, mainBefore, SANDBOX);
  } catch (e) {
    mainOk = false;
    mainError = e instanceof Error ? e.message : String(e);
    post = post ?? {
      ok: false,
      outputExists: false,
      unexpectedFiles: [],
      statusShort: "",
      diffStat: "",
      outputPreviewSanitized: "",
      errorCode: "E2E_POST",
      errorMessage: mainError,
    };
  }

  const localOk = cursorResult.ok && cursorRealInvoked && post.ok && mainOk;

  let verdict = null;
  if (localOk && readCycleCallCount(PHASE_OPENAI) < MAX_OPENAI) {
    verdict = await live.verdict({
      requestId: E2E_REQUEST_ID,
      correlationId: E2E_CORRELATION_ID,
      executionContract: qual.candidate,
      orchestrationResult: {
        contractValidated: true,
        gateStatus: "OPEN",
        executionMode: "cursor-real-spike",
        executionOk: true,
        artifactRefs: [`sandbox://${E2E_OUTPUT_REL}`],
        gitEffect: "none-remote",
        knownReserve: "e2e experimental; no remote git; not production",
        summary: `Cursor real ok exit=${cursorResult.exitCode}; output.md validated; durationMs=${cursorResult.durationMs}`,
      },
      evidenceRefs: [
        `contractHash:${bounded.contractHash}`,
        `cursorExit:${cursorResult.exitCode}`,
        `sandboxStatus:${post.statusShort}`,
      ],
      knownReserves: [
        "Spike non versionné",
        "Cursor agent network unknown",
        "Single sandbox scenario only",
      ],
      expectedVerdicts: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
      decisionAuthority: "Morris",
    });
  }

  const success = Boolean(localOk && verdict?.ok);

  return {
    attempt,
    success,
    cursorRealInvoked,
    productionReadyClaimed: false,
    mergeAuthorized: false,
    cursorAuth: auth,
    openaiGate: {
      apiKeyDefined: openaiGate.apiKeyDefined,
      modelValue: openaiGate.modelValue,
    },
    maxCompletionTokens,
    contractHash: bounded.contractHash,
    ignoredGptWidenings: bounded.ignoredGptWidenings,
    instructionPreviewSanitized: sanitizeOpenAiErrorText(bounded.instruction, 500),
    liveQualification: summarizeGpt(qual),
    cursor: {
      callNumber: cursorCallNo,
      ok: cursorResult.ok,
      exitCode: cursorResult.exitCode,
      timedOut: cursorResult.timedOut,
      durationMs: cursorResult.durationMs,
      errorCode: cursorResult.errorCode,
      stdoutRedacted: sanitizeOpenAiErrorText(cursorResult.stdoutRedacted, 500),
      stderrRedacted: sanitizeOpenAiErrorText(cursorResult.stderrRedacted, 500),
      argvRedacted: cursorResult.argvRedacted,
      mechanismBin: cursorResult.mechanismBin,
    },
    sandboxPost: post,
    mainRepoUntouched: mainOk,
    mainError,
    liveVerdict: verdict ? summarizeGpt(verdict) : { status: "NON_EXECUTED" },
    openaiCalls: readCycleCallCount(PHASE_OPENAI),
    cursorInvocations: readCycleCallCount(PHASE_CURSOR),
    openaiBudget: MAX_OPENAI,
    cursorBudget: MAX_CURSOR,
    baselineFiles: baseline.files,
    stopReason: success
      ? null
      : !cursorRealInvoked
        ? "Cursor not invoked"
        : !cursorResult.ok
          ? "Cursor execution failed"
          : !post.ok
            ? post.errorCode ?? "sandbox validation failed"
            : !mainOk
              ? "main repo touched"
              : !verdict?.ok
                ? "S-GPT-10 failed"
                : "unknown",
  };
}

async function main(): Promise<void> {
  mkdirSync(PROOF_DIR, { recursive: true });
  if (!existsSync(PHASE_OPENAI)) {
    writeFileSync(PHASE_OPENAI, JSON.stringify({ count: 0, budget: MAX_OPENAI }, null, 2));
  }
  if (!existsSync(PHASE_CURSOR)) {
    writeFileSync(PHASE_CURSOR, JSON.stringify({ count: 0, budget: MAX_CURSOR }, null, 2));
  }

  const flagsOk =
    process.env.SFIA_GPT_REAL_SPIKE === "1" &&
    process.env.SFIA_GPT_REAL_LIVE === "1" &&
    process.env.SFIA_CURSOR_REAL_SPIKE === "1" &&
    process.env.SFIA_CURSOR_REAL_LIVE === "1";

  if (!flagsOk) {
    const dry = {
      experimental: true,
      productionReadyClaimed: false,
      cursorRealInvoked: false,
      status: "NON_EXECUTED",
      reason: "flags off — set SFIA_GPT_REAL_SPIKE/LIVE and SFIA_CURSOR_REAL_SPIKE/LIVE",
      phaseOpenAi: readCycleCallCount(PHASE_OPENAI),
      phaseCursor: readCycleCallCount(PHASE_CURSOR),
    };
    const out = path.join(PROOF_DIR, `dry-${Date.now()}.json`);
    writeFileSync(out, JSON.stringify(dry, null, 2));
    console.log(JSON.stringify(dry, null, 2));
    return;
  }

  const attempts: unknown[] = [];
  let finalSuccess = false;
  for (let i = 1; i <= MAX_ATTEMPTS; i++) {
    if (readCycleCallCount(PHASE_OPENAI) >= MAX_OPENAI) break;
    if (readCycleCallCount(PHASE_CURSOR) >= MAX_CURSOR) break;
    let result: Record<string, unknown>;
    try {
      result = await runAttempt(i);
    } catch (e) {
      result = {
        attempt: i,
        success: false,
        cursorRealInvoked: false,
        stopReason: e instanceof Error ? e.message : String(e),
        openaiCalls: readCycleCallCount(PHASE_OPENAI),
        cursorInvocations: readCycleCallCount(PHASE_CURSOR),
      };
    }
    attempts.push(result);
    const out = path.join(PROOF_DIR, `attempt-${i}-${Date.now()}.json`);
    writeFileSync(out, JSON.stringify(result, null, 2));
    if (result.success) {
      finalSuccess = true;
      break;
    }
    const stop = String(result.stopReason ?? "");
    if (
      stop.includes("UNAVAILABLE") ||
      stop.includes("SCOPE") ||
      stop.includes("main repo") ||
      stop.includes("AUTHENTICATION")
    ) {
      break;
    }
  }

  const report = {
    experimental: true,
    productionReadyClaimed: false,
    mergeAuthorized: false,
    cursorRealInvoked: attempts.some((a) => (a as { cursorRealInvoked?: boolean }).cursorRealInvoked),
    finalSuccess,
    attempts,
    openaiCalls: readCycleCallCount(PHASE_OPENAI),
    cursorInvocations: readCycleCallCount(PHASE_CURSOR),
    getPhaseVerdictCallBudget: getPhaseVerdictCallBudget(),
  };
  writeFileSync(path.join(PROOF_DIR, `summary-${Date.now()}.json`), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
