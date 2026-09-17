/**
 * Product docs_write completion must await pending REAL spawn-ACK.
 * ZERO REAL — source wiring + settler semantics.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP = path.resolve(__dirname, "../..");

describe("product docs_write completion awaitIfPending wiring", () => {
  it("product_docs_write_complete_awaits_pending_cursor_process", () => {
    const finishSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts",
      ),
      "utf8",
    );
    const governedSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(finishSrc).toMatch(/awaitIfPending:\s*true/);
    expect(governedSrc).toMatch(/awaitIfPending:\s*true/);
    // RO residual pending path must remain opt-in (not forced globally).
    const roSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts",
      ),
      "utf8",
    );
    expect(roSrc).toMatch(/awaitIfPending === true/);
    expect(roSrc).toMatch(/status:\s*"running"/);
  });
});
