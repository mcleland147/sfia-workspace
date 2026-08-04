/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import type { SecretSourcePort } from "@/lib/oa/execution-run/ports/secretSourcePort";
import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import * as publicBarrel from "@/lib/oa/execution-run";
import fs from "node:fs";
import path from "node:path";

describe("D2D2-04 SECRET-B", () => {
  it("resolve returns handles without secret values; public port has no materialize", async () => {
    const portFile = fs.readFileSync(
      path.join(process.cwd(), "lib/oa/execution-run/ports/secretSourcePort.ts"),
      "utf8",
    );
    expect(portFile).not.toMatch(/materialize/);

    const secretsAdapter = new FakeSecretSourceAdapter();
    const asPort: SecretSourcePort = {
      resolve: (id) => secretsAdapter.resolve(id),
    };
    expect("materialize" in asPort).toBe(false);
    expect("materializeForServerOnly" in asPort).toBe(false);

    const present = await asPort.resolve("TEST_SECRET");
    expect(present.ok).toBe(true);
    expect(JSON.stringify(present)).not.toMatch(/__FAKE_OPAQUE/);
    const absent = await asPort.resolve("MISSING");
    expect(absent.ok).toBe(false);

    const composed = composeExecutionRunProvidersFake();
    expect("materialize" in composed.secrets).toBe(false);
    expect(JSON.stringify(await composed.secrets.resolve("TEST_SECRET"))).not.toMatch(
      /__FAKE_OPAQUE/,
    );
  });

  it("public barrel does not export materialization; server-only materialize stays off events", () => {
    expect(Object.keys(publicBarrel).join(",")).not.toMatch(/materialize/i);
    const secrets = new FakeSecretSourceAdapter();
    const value = secrets.materialize("TEST_SECRET");
    expect(value).toBeTruthy();
    const sink = new RecordingExecutionEventSink();
    expect(() =>
      sink.emit({
        type: "provider_invocation",
        correlationId: "s1",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { note: "sk-abcdefghijklmnopqrstuvwxyz" },
      }),
    ).toThrow(/EVENT_SENSITIVE/);
    expect(() =>
      sink.emit({
        type: "provider_invocation",
        correlationId: "s2",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { secret: value! },
      }),
    ).toThrow(/EVENT_SENSITIVE/);
  });
});
