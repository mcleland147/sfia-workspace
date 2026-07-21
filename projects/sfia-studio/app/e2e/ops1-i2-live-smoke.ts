/**
 * OPS1 I2 live smoke — NOT part of npm test / default E2E.
 *
 * Runs only when ALL are set:
 * - OPENAI_API_KEY
 * - OPENAI_MODEL
 * - OPS1_ALLOW_LIVE_SMOKE=1
 *
 * Never prints secrets or full env.
 *
 * Usage:
 *   OPS1_ALLOW_LIVE_SMOKE=1 OPENAI_API_KEY=… OPENAI_MODEL=… \
 *     npx tsx e2e/ops1-i2-live-smoke.ts
 *   or: node --import tsx e2e/ops1-i2-live-smoke.ts
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function present(name: string): boolean {
  return Boolean(process.env[name]?.trim());
}

async function main(): Promise<void> {
  const allow = process.env.OPS1_ALLOW_LIVE_SMOKE === "1";
  const hasKey = present("OPENAI_API_KEY");
  const hasModel = present("OPENAI_MODEL");

  if (!allow || !hasKey || !hasModel) {
    console.log(
      JSON.stringify({
        ok: false,
        skipped: true,
        reason: "LIVE_SMOKE_PRECONDITIONS_MISSING",
        allow,
        hasKey,
        hasModel,
        // never include values
      }),
    );
    process.exit(0);
  }

  if (process.env.OPS1_CONVERSATION_PROVIDER === "fake") {
    console.log(
      JSON.stringify({
        ok: false,
        skipped: true,
        reason: "FAKE_PROVIDER_FORCED_INCOMPATIBLE_WITH_LIVE_SMOKE",
      }),
    );
    process.exit(1);
  }

  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-live-smoke-"));
  process.env.OPS1_EXEC_ROOT = tmpRoot;

  const { resetOps1DbForTests, createOpenSession, listTurns, listConversationAttempts } =
    await import("../lib/ops1/repository");
  const { sendConversationMessage } = await import(
    "../lib/ops1/conversation/service"
  );

  resetOps1DbForTests();
  const { session } = createOpenSession("live");
  const result = await sendConversationMessage({
    sessionId: session.sessionId,
    content: "Réponds en une phrase courte : ping OPS1 I2 smoke.",
  });

  const turns = listTurns(session.sessionId);
  const attempts = listConversationAttempts(session.sessionId);
  const assistant = result.assistantTurn;

  const report = {
    ok: Boolean(assistant && assistant.content.trim() && !result.assistantError),
    mode: result.mode,
    assistantRole: assistant?.role ?? null,
    assistantNonEmpty: Boolean(assistant?.content.trim()),
    turnsCount: turns.length,
    attemptStatus: attempts[0]?.status ?? null,
    usage: result.usage
      ? {
          provider: result.usage.provider,
          model: result.usage.model,
          inputTokens: result.usage.inputTokens,
          outputTokens: result.usage.outputTokens,
          totalTokens: result.usage.totalTokens,
          durationMs: result.usage.durationMs,
        }
      : null,
    error: result.assistantError,
  };

  console.log(JSON.stringify(report));
  resetOps1DbForTests();
  fs.rmSync(tmpRoot, { recursive: true, force: true });
  process.exit(report.ok ? 0 : 1);
}

main().catch((error) => {
  console.log(
    JSON.stringify({
      ok: false,
      error: "LIVE_SMOKE_INTERNAL",
      code: error instanceof Error ? error.name : "Error",
    }),
  );
  process.exit(1);
});
