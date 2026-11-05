import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  emitObs,
  queryObsByOperationId,
  redactDeep,
  OBS_SYNTHETIC_SECRET_PROBE,
  newOperationId,
} from "@/lib/observability";

describe("observability sink", () => {
  let dir: string;
  const prevDir = process.env.SFIA_OBS_DIR;
  const prevLane = process.env.STUDIO_LANE;

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "sfia-obs-"));
    process.env.SFIA_OBS_DIR = dir;
    process.env.STUDIO_LANE = "DEV";
  });

  afterEach(() => {
    if (prevDir === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevDir;
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    rmSync(dir, { recursive: true, force: true });
  });

  it("redacts secret-like keys and synthetic probe values in deep redact", () => {
    const red = redactDeep({
      apiKey: "sk-abcdef1234567890",
      password: "x",
      ok: "fine",
      nested: { token: "abc", note: "hello" },
    }) as Record<string, unknown>;
    expect(red.apiKey).toBe("[REDACTED]");
    expect(red.password).toBe("[REDACTED]");
    expect(red.ok).toBe("fine");
    expect((red.nested as { token: string }).token).toBe("[REDACTED]");
  });

  it("persists events and finds them by operation_id after write", () => {
    const operationId = newOperationId();
    const emitted = emitObs({
      event_name: "test.event",
      component: "test",
      operation_id: operationId,
      outcome: "SUCCESS",
      meta: { probe: "ok", secret: OBS_SYNTHETIC_SECRET_PROBE },
    });
    expect(emitted.emitted).toBe(true);

    const found = queryObsByOperationId(operationId);
    expect(found.status).toBe("AVAILABLE");
    expect(found.events.length).toBeGreaterThanOrEqual(1);
    const raw = JSON.stringify(found.events);
    expect(raw).not.toContain(OBS_SYNTHETIC_SECRET_PROBE);
    expect(raw).toContain("[REDACTED]");
  });
});
