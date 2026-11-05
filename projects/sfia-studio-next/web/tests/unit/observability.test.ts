import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  emitObs,
  queryObsByOperationId,
  redactDeep,
  OBS_SYNTHETIC_SECRET_PROBE,
  newOperationId,
  openObsSinkReadOnly,
  purgeObsOlderThan,
  resolveObsDir,
} from "@/lib/observability";

describe("observability sink", () => {
  let dir: string;
  const prevDir = process.env.SFIA_OBS_DIR;
  const prevLane = process.env.STUDIO_LANE;
  const prevBase = process.env.SFIA_OBS_BASE;

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "sfia-obs-"));
    process.env.SFIA_OBS_DIR = dir;
    process.env.SFIA_OBS_BASE = dir;
    process.env.STUDIO_LANE = "DEV";
  });

  afterEach(() => {
    if (prevDir === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevDir;
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevBase === undefined) delete process.env.SFIA_OBS_BASE;
    else process.env.SFIA_OBS_BASE = prevBase;
    rmSync(dir, { recursive: true, force: true });
  });

  it("redacts secret-like keys and synthetic probe values in deep redact", () => {
    const red = redactDeep({
      apiKey: "sk-abcdef1234567890",
      password: "x",
      ok: "fine",
      nested: { token: "abc", note: "hello" },
      free: `leak ${OBS_SYNTHETIC_SECRET_PROBE} here`,
    }) as Record<string, unknown>;
    expect(red.apiKey).toBe("[REDACTED]");
    expect(red.password).toBe("[REDACTED]");
    expect(red.ok).toBe("fine");
    expect((red.nested as { token: string }).token).toBe("[REDACTED]");
    expect((red.nested as { note: string }).note).toBe("[REDACTED]");
    expect(String(red.free)).not.toContain(OBS_SYNTHETIC_SECRET_PROBE);
  });

  it("FIX-OBS-01: persists events without synthetic secret; lane nested under explicit dir", () => {
    const operationId = newOperationId();
    const emitted = emitObs({
      event_name: "test.event",
      component: "test",
      operation_id: operationId,
      outcome: "SUCCESS",
      meta: { probe: "ok", secret: OBS_SYNTHETIC_SECRET_PROBE as unknown as string },
    });
    expect(emitted.emitted).toBe(true);

    const laneDir = resolveObsDir();
    expect(laneDir.endsWith("/dev") || laneDir.endsWith(`${dir}/dev`)).toBe(true);

    const found = queryObsByOperationId(operationId);
    expect(found.status).toBe("AVAILABLE");
    expect(found.events.length).toBeGreaterThanOrEqual(1);
    const raw = JSON.stringify(found.events);
    expect(raw).not.toContain(OBS_SYNTHETIC_SECRET_PROBE);
    // secret meta key is allowlist-dropped (not persisted)
    expect(found.events[0].meta?.probe).toBe("ok");
    expect(found.events[0].meta && "secret" in found.events[0].meta).toBe(false);
  });

  it("FIX-OBS-02: queryObsByOperationId is read-only (no mkdir on missing sink)", () => {
    const missingRoot = join(dir, "empty-root-never-created-child");
    process.env.SFIA_OBS_DIR = missingRoot;
    process.env.SFIA_OBS_BASE = missingRoot;
    const opened = openObsSinkReadOnly();
    expect(opened.ok).toBe(false);
    expect(existsSync(join(missingRoot, "dev"))).toBe(false);
    const q = queryObsByOperationId("op_missing");
    expect(q.status).toBe("SINK_UNAVAILABLE");
    expect(existsSync(join(missingRoot, "dev"))).toBe(false);
  });

  it("FIX-OBS-02: lane isolation — DEV events not visible under RECETTE lane", () => {
    const operationId = newOperationId();
    process.env.STUDIO_LANE = "DEV";
    emitObs({
      event_name: "test.dev_only",
      component: "test",
      operation_id: operationId,
      outcome: "SUCCESS",
    });
    process.env.STUDIO_LANE = "RECETTE";
    const found = queryObsByOperationId(operationId);
    expect(found.status === "NOT_FOUND" || found.status === "SINK_UNAVAILABLE").toBe(true);
  });

  it("FIX-OBS-02: retention purge removes dated fixtures only under sink", () => {
    const laneDir = resolveObsDir();
    mkdirSync(laneDir, { recursive: true, mode: 0o700 });
    writeFileSync(join(laneDir, "events-2020-01-01.jsonl"), "{}\n", { mode: 0o600 });
    writeFileSync(
      join(laneDir, `events-${new Date().toISOString().slice(0, 10)}.jsonl`),
      "{}\n",
      { mode: 0o600 },
    );
    const result = purgeObsOlderThan(14, new Date("2026-11-05T12:00:00Z"));
    expect(result.status).toBe("PURGED");
    expect(result.purged).toBeGreaterThanOrEqual(1);
    expect(existsSync(join(laneDir, "events-2020-01-01.jsonl"))).toBe(false);
    const remaining = readdirSync(laneDir).filter((f) => f.startsWith("events-"));
    expect(remaining.length).toBeGreaterThanOrEqual(1);
  });
});
