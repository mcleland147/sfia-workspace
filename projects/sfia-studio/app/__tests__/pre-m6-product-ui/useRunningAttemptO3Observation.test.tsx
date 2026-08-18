/**
 * ARCH-WOP-1 — auto O3 while the page stays open. Fake timers only.
 * @vitest-environment jsdom
 */
import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRunningAttemptO3Observation } from "@/features/pre-m6-product-ui/hooks/useRunningAttemptO3Observation";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract/domain/executionWindowPolicy";

const STARTED = "2026-08-17T12:00:00.000Z";

function Probe(props: {
  enabled: boolean;
  inFlight: boolean;
  refresh: () => void;
  startedAt?: string;
  resolvedMaxDurationMs?: number;
}) {
  useRunningAttemptO3Observation({
    enabled: props.enabled,
    startedAt: props.startedAt ?? STARTED,
    resolvedMaxDurationMs:
      props.resolvedMaxDurationMs ?? PRE_M6_EXECUTION_WINDOW_MS.standard,
    refresh: props.refresh,
    inFlight: props.inFlight,
  });
  return null;
}

describe("useRunningAttemptO3Observation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(STARTED));
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("auto-calls the same refresh at the first O3 probe when running refreshable", async () => {
    const refresh = vi.fn();
    render(<Probe enabled inFlight={false} refresh={refresh} />);
    expect(refresh).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(4_999);
    expect(refresh).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it("does not arm when not refreshable, and stops on unmount", async () => {
    const refresh = vi.fn();
    const { unmount } = render(
      <Probe enabled={false} inFlight={false} refresh={refresh} />,
    );
    await vi.advanceTimersByTimeAsync(30_000);
    expect(refresh).not.toHaveBeenCalled();
    unmount();
    const running = vi.fn();
    const mounted = render(
      <Probe enabled inFlight={false} refresh={running} />,
    );
    mounted.unmount();
    await vi.advanceTimersByTimeAsync(30_000);
    expect(running).not.toHaveBeenCalled();
  });

  it("does not double-fire while an observation is in-flight", async () => {
    const refresh = vi.fn();
    render(<Probe enabled inFlight refresh={refresh} />);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(refresh).not.toHaveBeenCalled();
  });

  it("stops auto observation once disabled (terminal)", async () => {
    const refresh = vi.fn();
    const { rerender } = render(
      <Probe enabled inFlight={false} refresh={refresh} />,
    );
    await vi.advanceTimersByTimeAsync(5_000);
    expect(refresh).toHaveBeenCalledTimes(1);
    rerender(<Probe enabled={false} inFlight={false} refresh={refresh} />);
    refresh.mockClear();
    await vi.advanceTimersByTimeAsync(120_000);
    expect(refresh).not.toHaveBeenCalled();
  });
});
