/**
 * Deterministic barriers for D9 OAuth concurrency tests (SCRIPTED/DET only).
 * Not a general job/lock engine — test harness only.
 */
type Waiter = { resolve: () => void; promise: Promise<void> };

function makeWaiter(): Waiter {
  let resolve!: () => void;
  const promise = new Promise<void>((r) => {
    resolve = r;
  });
  return { resolve, promise };
}

export const OAuthConcurrencyBarrier = {
  enabled: false,
  gates: new Map<string, Waiter>(),

  clear() {
    this.enabled = false;
    for (const w of this.gates.values()) w.resolve();
    this.gates.clear();
  },

  arm(name: string) {
    this.enabled = true;
    this.gates.set(name, makeWaiter());
  },

  async before(name: string) {
    if (!this.enabled) return;
    const w = this.gates.get(name);
    if (w) await w.promise;
  },

  release(name: string) {
    const w = this.gates.get(name);
    if (w) {
      w.resolve();
      this.gates.delete(name);
    }
  },
};
