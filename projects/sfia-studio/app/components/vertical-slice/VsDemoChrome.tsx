"use client";

import { VS_STATES } from "@/lib/vertical-slice/mapping";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import { vsFixture } from "@/fixtures/vertical-slice";
import type { VsStateId } from "@/lib/vertical-slice/types";
import styles from "./vs-demo.module.css";

export function VsDemoChrome() {
  const { stateId, setStateId, resetDemo, abandoned } = useVsDemo();

  return (
    <div className={styles.chrome} data-testid="vs-demo-chrome">
      <div className={styles.banner} role="status" data-testid="vs-demo-banner">
        <strong>Incrément A — cockpit statique gouverné</strong>
        <span>{vsFixture.demoLabel}</span>
        <span>{vsFixture.noLiveLabel}</span>
      </div>
      <div className={styles.switcherRow}>
        <label className={styles.switcherLabel} htmlFor="vs-state-switcher">
          État / variante POC
        </label>
        <select
          id="vs-state-switcher"
          className={styles.switcher}
          data-testid="vs-demo-switcher"
          value={stateId}
          onChange={(e) => setStateId(e.target.value as VsStateId)}
          aria-label="Sélecteur d'état vertical slice"
        >
          <optgroup label="États VS-UX-01…10">
            {VS_STATES.filter((s) => s.kind === "state").map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Variantes">
            {VS_STATES.filter((s) => s.kind === "variant").map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </optgroup>
        </select>
        <button
          type="button"
          className={styles.reset}
          onClick={resetDemo}
          data-testid="vs-demo-reset"
        >
          Réinitialiser démo
        </button>
        {abandoned ? (
          <span className={styles.abandonedPill} data-testid="vs-abandoned-pill">
            Cycle abandonné
          </span>
        ) : null}
      </div>
    </div>
  );
}
