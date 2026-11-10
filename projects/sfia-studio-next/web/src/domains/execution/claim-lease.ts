import { newId } from "@/lib/ids";

/** Lease duration for exclusive DISPATCHED ownership (local fencing, not exactly-once remote). */
export const CLAIM_LEASE_MS = 60_000;

export type EffectClaim = {
  claimToken: string;
  claimedAt: string;
  leaseExpiresAt: string;
  generation: number;
  /** Set when the owning execution releases the claim (completion / controlled abandon). */
  releasedAt?: string | null;
};

export function readClaim(resultJson: string | null | undefined): EffectClaim | null {
  try {
    const j = JSON.parse(resultJson || "{}") as { claim?: EffectClaim };
    const c = j.claim;
    if (!c || typeof c.claimToken !== "string" || typeof c.leaseExpiresAt !== "string") return null;
    return {
      claimToken: c.claimToken,
      claimedAt: c.claimedAt,
      leaseExpiresAt: c.leaseExpiresAt,
      generation: typeof c.generation === "number" ? c.generation : 0,
      releasedAt: c.releasedAt ?? null,
    };
  } catch {
    return null;
  }
}

export function isClaimActive(claim: EffectClaim | null, nowMs = Date.now()): boolean {
  if (!claim) return false;
  if (claim.releasedAt) return false;
  const exp = Date.parse(claim.leaseExpiresAt);
  if (Number.isNaN(exp)) return false;
  return exp > nowMs;
}

export function mintClaim(prev: EffectClaim | null, now = new Date()): EffectClaim {
  return {
    claimToken: newId("claim"),
    claimedAt: now.toISOString(),
    leaseExpiresAt: new Date(now.getTime() + CLAIM_LEASE_MS).toISOString(),
    generation: (prev?.generation ?? 0) + 1,
    releasedAt: null,
  };
}

export function releaseClaim(claim: EffectClaim | null, now = new Date()): EffectClaim | null {
  if (!claim) return null;
  return { ...claim, releasedAt: now.toISOString() };
}

/** Controlled lease renewal for a still-owning execution (memory helper; persist via SQL fence). */
export function extendClaim(claim: EffectClaim, now = new Date()): EffectClaim {
  return {
    ...claim,
    leaseExpiresAt: new Date(now.getTime() + CLAIM_LEASE_MS).toISOString(),
    releasedAt: null,
  };
}

export function writeClaimInto(
  existingResultJson: string,
  claim: EffectClaim | null,
): string {
  let base: Record<string, unknown> = {};
  try {
    base = JSON.parse(existingResultJson || "{}") as Record<string, unknown>;
  } catch {
    base = {};
  }
  if (!claim) {
    const { claim: _drop, ...rest } = base;
    void _drop;
    return JSON.stringify(rest);
  }
  return JSON.stringify({ ...base, claim });
}

/**
 * Test-only deterministic barrier between effect steps.
 * Production keeps this disabled — no external coupling.
 */
type Deferred = { promise: Promise<void>; resolve: () => void };

class ExecutionBarrierRegistryImpl {
  enabled = false;
  private gates = new Map<string, Deferred>();

  arm(step: string) {
    let resolve!: () => void;
    const promise = new Promise<void>((r) => {
      resolve = r;
    });
    this.gates.set(step, { promise, resolve });
    this.enabled = true;
  }

  async before(step: string) {
    if (!this.enabled) return;
    const g = this.gates.get(step);
    if (g) await g.promise;
  }

  release(step: string) {
    const g = this.gates.get(step);
    if (g) {
      g.resolve();
      this.gates.delete(step);
    }
    if (this.gates.size === 0) this.enabled = false;
  }

  clear() {
    for (const g of this.gates.values()) g.resolve();
    this.gates.clear();
    this.enabled = false;
  }
}

export const ExecutionBarrierRegistry = new ExecutionBarrierRegistryImpl();
