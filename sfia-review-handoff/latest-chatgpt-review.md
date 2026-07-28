# ChatGPT Review Pack — FULL
## T-A7 First Bounded Development Lot — PR Readiness

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 21:38:30 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 13 — PR readiness (+ QA / arch / sécu / RUN / capitalisation / gouvernance) |
| **Profil** | Critical |
| **Gate consommé** | `GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — VERIFY TEST OVERRIDE IS NOT RUNTIME-EXPOSED — NO DELIVERY OR CUTOVER` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Merge-base** | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **HEAD initial attendu** | `47e26fdc851b82588aa5225aca84307543147160` |
| **HEAD après correctif** | `b6a19335f5116940175f5986492e3693722563bc` |
| **Tree** | `712720a1a2371f98c137a6c8b29299ac556299c7` |
| **Parent correctif** | `47e26fdc851b82588aa5225aca84307543147160` (= feat lot 1) |
| **Upstream projet** | aucun |
| **Branche distante homonyme** | absente |
| **Push / PR projet** | **NON exécutés** |

---

## 1. Truth check

| Contrôle | Résultat |
|----------|----------|
| branche exacte | PASS |
| merge-base = origin/main | PASS (`2a3c59c46c105bae458d1a7329079c5f591da421`) |
| 3 commits initiaux + 1 correctif | PASS (4 commits locaux) |
| worktree propre après commit | PASS |
| aucun staged résiduel | PASS |
| aucun untracked parasite | PASS |
| aucun upstream projet | PASS |
| aucune branche distante homonyme | PASS |

Verdict truth : **PASS** (correctif local séparé autorisé ; pas de STOP base/HEAD diverged après remediation).

---

## 2. Historique local `origin/main..HEAD`

1. `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` — `docs(sfia-studio): frame T-A7 technical readiness`
2. `014103777ef620cfd1ca2520455d7e98a85530e3` — `test(sfia-studio): collect T-A7 readiness evidence`
3. `47e26fdc851b82588aa5225aca84307543147160` — `feat(sfia-studio): implement T-A7 bounded readiness foundations`
4. `b6a19335f5116940175f5986492e3693722563bc` — `fix(sfia-studio): harden T-A7 bounded readiness foundations` (**correctif PR readiness**)

---

## 3. Diff cumulé

| Métrique | Valeur |
|----------|--------|
| Commits | 4 |
| Fichiers | 32 |
| +/- | +2543 / -2 |
| Code produit | methodModeHold* · operationalReadiness · boundedHistoryRead · commands · index barrels |
| Tests/probes | hold · boundaries · readiness · history · foundation/intake updates · 6 probes O2 |
| Documentation | pack `t-a7-technical-readiness-framing/` (01–10 + README) |
| Supprimés | 0 |
| Chemins interdits touchés | **aucun** (`method/**`, migration, UI, HTTP route, IAM, secrets, CI, OPS1 fonctionnel) |

Répartition indicative : docs ~45% · tests/probes ~35% · code produit ~20%.

---

## 4. Analyse test override (critique)

### Avant correctif (Major)

- `setMethodModeHoldForTests` / `resetMethodModeHoldForTests` vivaient dans `methodModeHold.ts`
- `lib/d1/index.ts` faisait `export * from "./methodModeHold"` → **réexport barrel produit**
- Commentaire `TEST ONLY` ≠ protection technique
- Verdict pré-correctif : `TEST OVERRIDE IS NOT CALLED BY RUNTIME BUT REMAINS PUBLICLY EXPORTABLE` → **Major** (bloque PR READY)

### Après correctif

| Contrôle | Résultat |
|----------|----------|
| Helpers dans `methodModeHold.test-only.ts` | oui |
| Slot mutable `methodModeHold.store.ts` | interne ; non barrel |
| Barrel `lib/d1/index.ts` | exports explicites produit seulement |
| Imports runtime routes/UI/actions | aucun |
| Usages tests | intake-c4 · foundation · hold · readiness · history |
| Réexports barrel | aucun |
| Bundle client `.next/static` | helpers absents |
| Bundle server helpers strings | absents |
| Boundary tests | `t-a7-method-mode-hold-boundaries.test.ts` |
| Isolation | `beforeEach`/`afterEach` reset |

**Verdict override :** `TEST OVERRIDE IS TEST-ONLY AND NOT RUNTIME-EXPOSED`

Résidu Info : le fichier `methodModeHold.store.ts` reste importable par chemin si un futur code le contourne ; la frontière statique échoue alors. Pas d’API HTTP/UI pour l’écrire.

---

## 5. Graphe imports / exports (hold)

```
tests (__tests__/**)
  → methodModeHold.test-only.ts
      → methodModeHold.store.ts (write slot)
  → methodModeHold.ts (read APIs)
      → methodModeHold.store.ts (read slot)
      → methodModeHold.types.ts

lib/d1/index.ts
  → methodModeHold.ts (product APIs only)
  ✗ does NOT export test-only / store

commands.selectMethodMode
  → assertMethodModeTransitionAllowed()
actions
  → selectMethodMode (inherits hold)
```

Surface runtime publique : `readMethodModeHold` · `decideMethodModeTransition` · `assertMethodModeTransitionAllowed` · `getDefaultMethodModeHoldState` · types/codes.

---

## 6. MethodMode hold

| Critère | Statut |
|---------|--------|
| Défaut ACTIVE | oui |
| Raisons structurées non vides (défaut) | 7 codes |
| Timestamps ISO | oui |
| `active=true` + reasons vides | **BLOCK** (corrigé) |
| CONFLICT | oui |
| Logs bornés (codes/status) | oui |
| Persistence DB | non |
| Fermeture auto blockers | non |
| Bypass `selectMethodModeAtomic` hors commands | non trouvé depuis actions/UI |
| createProject initial mode | hors hold (création, pas transition) — acceptable lot 1 |

**Verdict :** `METHODMODE HOLD PR READY`

---

## 7. F11.2

- Contrat typé `OperationalReadinessSnapshot`
- `mutable=false` · `adminUi=false` · `writeCommands=false`
- Séparation observed / decision / recommendation / authorization
- Hold + open blockers + history summary PARTIAL
- Snapshot frozen ; pas de route HTTP ; pas d’écriture
- Completeness `BOUNDED_LOT_1` ≠ cutover

**Verdict :** `F11.2 READINESS FOUNDATION PR READY — INTERNAL READ-ONLY SURFACE`

---

## 8. F13.4

- Git canonical · max 50 · immutable freeze
- Pas de store durable · pas de migration · pas d’écriture
- Provider unavailable / documentary seed
- Tests limites / mutation / unavailable

**Verdict :** `F13.4 READ-ONLY FOUNDATION PR READY — GIT CANONICAL — NO MIGRATION`

---

## 9. Sécurité

- Pas de `"use client"` dans modules d1/t-a7 hold
- Path-policy inchangée
- IAM NOT SELECTED
- Pas de PII / chemins utilisateur absolus
- Helpers absents des chunks client
- Erreurs non bavardes (codes hold)

Frontières : server/internal product · test-only · store internal-only.

---

## 10. Tests & validations

| Suite | Résultat |
|-------|----------|
| Targeted PR readiness (13 files) | **59 passed** |
| Broad d1 + t-a7 probes | **99 passed** |
| typecheck `tsc --noEmit` | **0** |
| eslint ciblé | **0** |
| `next build` | **0** (Compiled successfully) |
| Warnings | aucun bloquant |
| Skipped | 0 |
| Flaky | non observé |
| Env | node · vitest 3.2.7 · Next 15.5.20 · worktree local |

Tests ajoutés dans le correctif :
- boundaries override (4)
- active-empty-reasons
- reset isolation

Aucun test vert ≠ delivery readiness.

---

## 11. P03–P11 / F03.3

| ID | Statut post lot 1+harden |
|----|--------------------------|
| P03–P05 · P10 | PARTIAL |
| P06 | PARTIAL (hold) |
| P07 | PARTIAL (hold ; ≠ retrait) |
| P08 · P09 | MISSING |
| P11 | PARTIAL (fondation F13.4) |

F03.3 : `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` (non full).

---

## 12. Findings

### Critical
Aucun (après correctif).

### Major (remedié)
1. **Test override barrel-exportable** — remedié par split test-only + barrel explicite + boundary tests.
2. **Hold `active && reasons.length>0`** permettait active+empty → remedié `if (hold.active)`.

### Minor
Aucun bloquant restant.

### Info
1. Slot mutable module-level existe en mémoire process si module chargé ; writable seulement via test-only / import store direct (boundary).
2. `resetD1DbForTests` reste exporté via barrel (préexistant, hors scope).
3. createProject peut poser un methodMode initial sans passer le hold de transition.

---

## 13. Corrections

Commit correctif local (pas d’amend de `47e26fd`) :

- SHA : `b6a19335f5116940175f5986492e3693722563bc`
- Message : `fix(sfia-studio): harden T-A7 bounded readiness foundations`
- Parent : `47e26fdc851b82588aa5225aca84307543147160`
- Tree : `712720a1a2371f98c137a6c8b29299ac556299c7`

---

## 14. Rollback

```
git revert b6a19335f5116940175f5986492e3693722563bc   # undo harden
git revert 47e26fd  # undo lot1 feat
# or reset local branch to origin/main (local only)
```

Simple ; pas de migration à défaire.

---

## 15. Gouvernance

| Item | Statut |
|------|--------|
| O3 | `DECIDED — ADOPTED BY MORRIS` |
| T-A7 | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| F03.3 | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| F11.2 | fondation implémentée ; API finale non complète |
| F13.4 | fondation implémentée ; vue runtime finale non complète |
| B5 / R1 / R-M01 | `OPEN` |
| HARD | `OPEN HARD` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| persistence / IAM / RGPD | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
| delivery preparation / delivery / cutover | `NOT AUTHORIZED` |

Actions non exécutées : push projet · PR · merge · delivery · cutover · Notion/CMP · amend/rebase.

---

## 16. Gate candidat suivant

`GO INTEGRATE T-A7 FIRST BOUNDED DEVELOPMENT LOT — PUSH PR MERGE IF REQUIRED CHECKS PASS — PRESERVE SOURCE BRANCH — NO DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 17. Verdict PR readiness

`T-A7 FIRST BOUNDED DEVELOPMENT LOT PR READY — PUSH PR MERGE REQUIRE DISTINCT MORRIS GATE`

Succès étendu :

`T-A7 FIRST BOUNDED DEVELOPMENT LOT PR READY — CUMULATIVE THREE-COMMIT SCOPE VERIFIED — METHODMODE HOLD REVIEWED — TEST OVERRIDE CONFIRMED NOT RUNTIME-EXPOSED — F11.2 INTERNAL READ-ONLY FOUNDATION VERIFIED — F13.4 BOUNDED READ-ONLY FOUNDATION VERIFIED WITH GIT CANONICAL — TESTS TYPECHECK LINT AND BUILD VALIDATED OR JUSTIFIED — NO CRITICAL OR MAJOR FINDINGS — O3 AND T-A7 BOUNDED STATUS PRESERVED — B5 R1 R-M01 AND HARD REMAIN OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

Note : un 4e commit correctif local a été ajouté ; le scope fonctionnel cumulé reste le lot borné (pas d’élargissement delivery/cutover).

---

## 18. Contenu complet — fichiers créés/modifiés pendant la revue (correctif)


### `projects/sfia-studio/app/lib/d1/methodModeHold.ts`

```
/**
 * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
 * Default: ACTIVE while structural blockers remain open.
 *
 * Test overrides: `methodModeHold.test-only.ts` only (never barrel-exported).
 */

import { D1Error } from "./errors";
import { logD1 } from "./observability";
import { methodModeHoldOverrideSlot } from "./methodModeHold.store";
import type {
  MethodModeHoldReason,
  MethodModeHoldState,
  MethodModeTransitionDecision,
} from "./methodModeHold.types";

export {
  METHOD_MODE_HOLD_REASON_CODES,
  type MethodModeHoldReasonCode,
  type MethodModeHoldReason,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "./methodModeHold.types";

const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
  {
    code: "B5_OPEN",
    detail: "B5 remains OPEN — STOP BEFORE DELIVERY.",
  },
  {
    code: "R1_OPEN",
    detail: "R1 atomicity reserve remains OPEN.",
  },
  {
    code: "R_M01_OPEN",
    detail: "R-M01 ClaimEvaluator readiness remains OPEN.",
  },
  {
    code: "HARD_OPEN",
    detail: "HARD blockers remain OPEN HARD.",
  },
  {
    code: "T_A7_BOUNDED_LOT_ACTIVE",
    detail: "T-A7 OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY.",
  },
  {
    code: "F11_2_INCOMPLETE",
    detail: "F11.2 readiness foundation is incomplete vs cutover.",
  },
  {
    code: "F13_4_INCOMPLETE",
    detail: "F13.4 read-only foundation is incomplete vs final runtime view.",
  },
] as const;

function nowIso(): string {
  return new Date().toISOString();
}

export function getDefaultMethodModeHoldState(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  return {
    active: true,
    reasons: DEFAULT_REASONS,
    evaluatedAt,
    provenance: "governance-default",
    completeness: "BOUNDED_LOT_1",
  };
}

export function readMethodModeHold(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  const override = methodModeHoldOverrideSlot.current;
  if (override) {
    return {
      ...override,
      evaluatedAt,
      reasons: [...override.reasons],
    };
  }
  return getDefaultMethodModeHoldState(evaluatedAt);
}

export function decideMethodModeTransition(): MethodModeTransitionDecision {
  const hold = readMethodModeHold();
  // Conservative: any active hold blocks, even with empty reasons.
  if (hold.active) {
    return {
      allowed: false,
      hold,
      decision: "BLOCK",
      authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE",
    };
  }
  return {
    allowed: true,
    hold,
    decision: "ALLOW",
    authorization: "ALLOWED_WHEN_HOLD_INACTIVE",
  };
}

export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecision {
  const decision = decideMethodModeTransition();
  if (!decision.allowed) {
    const codes =
      decision.hold.reasons.map((r) => r.code).join(",") || "ACTIVE_NO_REASONS";
    logD1("method_mode_hold_blocked", {
      status: "blocked",
      reasonCount: decision.hold.reasons.length,
      codes,
    });
    throw new D1Error(
      "CONFLICT",
      `MethodMode transition blocked by active hold (${codes}).`,
    );
  }
  logD1("method_mode_hold_allowed", {
    status: "allowed",
    provenance: decision.hold.provenance,
  });
  return decision;
}
```

### `projects/sfia-studio/app/lib/d1/methodModeHold.types.ts`

```
/**
 * Shared MethodMode hold types (no mutable state).
 */

export const METHOD_MODE_HOLD_REASON_CODES = [
  "B5_OPEN",
  "R1_OPEN",
  "R_M01_OPEN",
  "HARD_OPEN",
  "T_A7_BOUNDED_LOT_ACTIVE",
  "F11_2_INCOMPLETE",
  "F13_4_INCOMPLETE",
] as const;

export type MethodModeHoldReasonCode =
  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];

export interface MethodModeHoldReason {
  code: MethodModeHoldReasonCode;
  detail: string;
}

export interface MethodModeHoldState {
  active: boolean;
  reasons: readonly MethodModeHoldReason[];
  evaluatedAt: string;
  provenance: "governance-default" | "test-override";
  completeness: "BOUNDED_LOT_1";
}

export interface MethodModeTransitionDecision {
  allowed: boolean;
  hold: MethodModeHoldState;
  decision: "ALLOW" | "BLOCK";
  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
}
```

### `projects/sfia-studio/app/lib/d1/methodModeHold.store.ts`

```
/**
 * Internal MethodMode hold override slot.
 * Not part of the public D1 API — do not import from runtime barrels.
 * Writable only from `methodModeHold.test-only.ts` (tests).
 */
import type { MethodModeHoldState } from "./methodModeHold.types";

export const methodModeHoldOverrideSlot: {
  current: MethodModeHoldState | null;
} = {
  current: null,
};
```

### `projects/sfia-studio/app/lib/d1/methodModeHold.test-only.ts`

```
/**
 * TEST-ONLY support for MethodMode hold overrides.
 *
 * Import exclusively from files under `app/__tests__/`.
 * Never re-export from `lib/d1/index.ts` or any runtime barrel.
 */
import { methodModeHoldOverrideSlot } from "@/lib/d1/methodModeHold.store";
import type { MethodModeHoldState } from "@/lib/d1/methodModeHold.types";

export function resetMethodModeHoldForTests(): void {
  methodModeHoldOverrideSlot.current = null;
}

export function setMethodModeHoldForTests(
  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
    Partial<
      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
    >,
): void {
  methodModeHoldOverrideSlot.current = {
    active: state.active,
    reasons: Object.freeze([...state.reasons]),
    evaluatedAt: state.evaluatedAt ?? new Date().toISOString(),
    provenance: state.provenance ?? "test-override",
    completeness: state.completeness ?? "BOUNDED_LOT_1",
  };
}
```

### `projects/sfia-studio/app/lib/d1/index.ts`

```
/**
 * Public D1 product surface.
 * Intentionally does NOT re-export MethodMode hold test helpers.
 */
export * from "./types";
export * from "./commands";
export * from "./errors";
export {
  METHOD_MODE_HOLD_REASON_CODES,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
  decideMethodModeTransition,
  assertMethodModeTransitionAllowed,
} from "./methodModeHold";
export type {
  MethodModeHoldReasonCode,
  MethodModeHoldReason,
  MethodModeHoldState,
  MethodModeTransitionDecision,
} from "./methodModeHold";
export {
  queryOperationalReadiness,
  assertOperationalReadinessReadOnly,
} from "./operationalReadiness";
export type {
  OperationalReadinessSnapshot,
  OperationalReadinessQueryInput,
} from "./operationalReadiness";
export { resetD1DbForTests } from "./db";
```

### `projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts`

```
/** @vitest-environment node */
/**
 * T-A7 Lot 1 — MethodMode hold test-override must stay test-only.
 * Comments alone are not a control; this static boundary is.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === "__tests__"
      ) {
        continue;
      }
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function rel(file: string): string {
  return path.relative(APP_ROOT, file);
}

describe("T-A7 MethodMode hold test-override boundaries", () => {
  it("does not re-export test helpers or store from lib/d1 barrel", () => {
    const barrel = fs.readFileSync(path.join(APP_ROOT, "lib/d1/index.ts"), "utf8");
    expect(barrel).not.toMatch(/methodModeHold\.test-only/);
    expect(barrel).not.toMatch(/methodModeHold\.store/);
    expect(barrel).not.toMatch(/setMethodModeHoldForTests/);
    expect(barrel).not.toMatch(/resetMethodModeHoldForTests/);
    expect(barrel).not.toMatch(/export \* from ["']\.\/methodModeHold["']/);
  });

  it("forbids runtime product code from importing test-only helpers", () => {
    const productRoots = [
      path.join(APP_ROOT, "lib"),
      path.join(APP_ROOT, "features"),
      path.join(APP_ROOT, "app"),
      path.join(APP_ROOT, "components"),
    ];
    const files = productRoots.flatMap(listTsFiles).filter((f) => {
      const r = rel(f);
      return !r.includes("methodModeHold.test-only.ts");
    });
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
          continue;
        }
        if (
          /from\s+["'][^"']*methodModeHold\.test-only["']/.test(trimmed) ||
          /import\s*{[^}]*(setMethodModeHoldForTests|resetMethodModeHoldForTests)/.test(
            trimmed,
          )
        ) {
          hits.push(`${rel(file)}: ${trimmed}`);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });

  it("confines override store imports to hold module and test-only module", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib")),
      ...listTsFiles(path.join(APP_ROOT, "features")),
      ...listTsFiles(path.join(APP_ROOT, "app")),
      ...listTsFiles(path.join(APP_ROOT, "components")),
    ];
    const allowed = new Set([
      "lib/d1/methodModeHold.ts",
      "lib/d1/methodModeHold.test-only.ts",
      "lib/d1/methodModeHold.store.ts",
    ]);
    const hits: string[] = [];
    for (const file of files) {
      const r = rel(file);
      if (allowed.has(r)) continue;
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
          continue;
        }
        if (/from\s+["'][^"']*methodModeHold\.store["']/.test(trimmed)) {
          hits.push(r);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });

  it("forbids test helpers from being imported via public product hold module in tests", () => {
    const testsRoot = path.join(APP_ROOT, "__tests__");
    function listAll(dir: string): string[] {
      if (!fs.existsSync(dir)) return [];
      const out: string[] = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (entry.name === "node_modules") continue;
          out.push(...listAll(full));
        } else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
      }
      return out;
    }
    const hits: string[] = [];
    for (const file of listAll(testsRoot)) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        if (
          /from\s+["']@\/lib\/d1["']/.test(line) &&
          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
        ) {
          hits.push(`${rel(file)}: ${line.trim()}`);
        }
        if (
          /from\s+["']@\/lib\/d1\/methodModeHold["']/.test(line) &&
          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
        ) {
          hits.push(`${rel(file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts`

```
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createProject, selectMethodMode } from "@/lib/d1/commands";
import { resetD1DbForTests } from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  assertMethodModeTransitionAllowed,
  decideMethodModeTransition,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
} from "@/lib/d1/methodModeHold";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";

describe("T-A7 lot1 MethodMode hold", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-hold-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("defaults to an active conservative hold with structured reasons", () => {
    const hold = getDefaultMethodModeHoldState();
    expect(hold.active).toBe(true);
    expect(hold.reasons.length).toBeGreaterThanOrEqual(7);
    expect(hold.reasons.map((r) => r.code)).toEqual(
      expect.arrayContaining([
        "B5_OPEN",
        "R1_OPEN",
        "R_M01_OPEN",
        "HARD_OPEN",
        "T_A7_BOUNDED_LOT_ACTIVE",
        "F11_2_INCOMPLETE",
        "F13_4_INCOMPLETE",
      ]),
    );
  });

  it("blocks transitions while hold is active", () => {
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(false);
    expect(decision.decision).toBe("BLOCK");
    expect(() => assertMethodModeTransitionAllowed()).toThrow(D1Error);

    const { project } = createProject({
      name: "Hold Block",
      objective: "cannot switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-block-1",
    });
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "TRANSITION",
        expectedVersion: project.version,
      }),
    ).toThrow(/hold/i);
  });

  it("allows transitions when hold is inactive (test override)", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(true);
    expect(decision.decision).toBe("ALLOW");

    const { project } = createProject({
      name: "Hold Allow",
      objective: "can switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-allow-1",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
  });

  it("blocks when hold is active even with empty reasons", () => {
    setMethodModeHoldForTests({ active: true, reasons: [] });
    expect(decideMethodModeTransition().allowed).toBe(false);
    expect(() => assertMethodModeTransitionAllowed()).toThrow(/ACTIVE_NO_REASONS|hold/i);
  });

  it("resets override to default active hold between tests", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    expect(decideMethodModeTransition().allowed).toBe(true);
    resetMethodModeHoldForTests();
    expect(readMethodModeHold().active).toBe(true);
    expect(decideMethodModeTransition().allowed).toBe(false);
  });

  it("readMethodModeHold is deterministic for reason codes", () => {
    const a = readMethodModeHold("2026-07-28T19:00:00.000Z");
    const b = readMethodModeHold("2026-07-28T19:00:00.000Z");
    expect(a.reasons.map((r) => r.code)).toEqual(b.reasons.map((r) => r.code));
    expect(a.active).toBe(b.active);
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`

```
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertOperationalReadinessReadOnly,
  queryOperationalReadiness,
} from "@/lib/d1/operationalReadiness";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";
import {
  createUnavailableBoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";

describe("T-A7 lot1 F11.2 operational readiness", () => {
  beforeEach(() => {
    resetMethodModeHoldForTests();
  });

  afterEach(() => {
    resetMethodModeHoldForTests();
  });

  it("returns a frozen read-only snapshot with hold and blockers", () => {
    const snap = queryOperationalReadiness();
    expect(snap.schemaVersion).toBe("t-a7-f11.2-lot1");
    expect(snap.mutable).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.observed.hold.active).toBe(true);
    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
    expect(snap.decision).toBe("BLOCK");
    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
    expect(snap.observed.migration.status).toBe("NOT_STARTED");
    expect(snap.observed.health.status).toBe("SIMULATED");
    expect(snap.observed.history.gitCanonical).toBe(true);
    assertOperationalReadinessReadOnly(snap);
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      snap.mutable = true;
    }).toThrow();
  });

  it("serializes stably for core contract fields", () => {
    const snap = queryOperationalReadiness();
    const json = JSON.stringify({
      schemaVersion: snap.schemaVersion,
      mutable: snap.mutable,
      writeCommands: snap.writeCommands,
      adminUi: snap.adminUi,
      decision: snap.decision,
      blockers: snap.observed.openBlockers,
    });
    expect(json).toContain("t-a7-f11.2-lot1");
    expect(json).toContain("B5_OPEN");
  });

  it("exposes UNKNOWN/partial history when provider unavailable", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createUnavailableBoundedHistoryProvider(),
    });
    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
    expect(snap.observed.history.returned).toBe(0);
  });

  it("reflects inactive hold without recommending keep", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts`

```
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildConfirmationIntent,
  asStrictBoolean,
  draftFingerprint,
} from "@/lib/d1/confirmation/validate";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "@/lib/d1/confirmation/types";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  getProject,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";

describe("D1-C4 confirmation contracts", () => {
  it("allowlists actionType and requires explicit confirmation", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "DELETE_EVERYTHING" as never,
        targetProjectId: null,
        projectDraft: null,
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: true,
      }),
    ).toThrow(D1Error);

    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: null,
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: false,
      }),
    ).toThrow(/explicite/i);

    expect(() => asStrictBoolean("true", "x")).toThrow(D1Error);
  });

  it("rejects client Project ID on CREATE_PROJECT", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: "proj-hack",
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k1",
        explicitConfirmation: true,
      }),
    ).toThrow(/interdit targetProjectId/i);
  });
});

describe("D1-C4 bounded mutations", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    setMethodModeHoldForTests({ active: false, reasons: [] });
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c4-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project only with explicit confirmation and audits", () => {
    const without = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: false,
    });
    expect(without.status).toBe("REJECTED");

    const created = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: true,
    });
    expect(created.status).toBe("SUCCEEDED");
    expect(created.projectId).toMatch(/^proj-/);
    expect(created.auditEventId).toBeTruthy();
    const reread = getProject(created.projectId!);
    expect(reread.name).toBe("Contrats C4");
  });

  it("replays same key same payload without duplicate", () => {
    const draft = {
      name: "Idem C4",
      objective: "obj",
      initialContextSummary: "",
      activate: true,
    };
    const a = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    const b = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    expect(a.status).toBe("SUCCEEDED");
    expect(b.status).toBe("ALREADY_APPLIED");
    expect(b.idempotentReplay).toBe(true);
    expect(b.projectId).toBe(a.projectId);
  });

  it("conflicts when same key different payload", () => {
    executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Alpha",
        objective: "o1",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    const conflict = executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Beta",
        objective: "o2",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    expect(conflict.status).toBe("CONFLICT");
    expect(conflict.errorCode).toBe("IDEMPOTENCY");
  });

  it("existing project confirm is NO_MUTATION without invented link", () => {
    const { project } = createProject({
      name: "Campus360",
      objective: "Gestion",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "seed-campus",
    });
    const result = executeConfirmedMutation({
      sessionLocalId: "s4",
      proposalId: "rrp-4",
      matchId: "match-1",
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-exist",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("NO_MUTATION");
    expect(result.persistenceNote).toBe(EXISTING_PROJECT_PERSISTENCE_NOTE);
    expect(result.projectId).toBe(project.projectId);
  });

  it("detects stale existing project conflict", () => {
    const { project } = createProject({
      name: "Stale",
      objective: "obj",
      methodMode: "V3_CANDIDATE",
      activate: false,
      idempotencyKey: "seed-stale",
    });
    selectMethodMode({
      projectId: project.projectId,
      methodMode: "V3_CANDIDATE",
      expectedVersion: project.version,
      activate: true,
    });
    const updated = getProject(project.projectId);
    const result = executeConfirmedMutation({
      sessionLocalId: "s5",
      proposalId: "rrp-5",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-stale",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(updated.version).not.toBe(project.version);
  });

  it("analyze-only and cancel produce no mutation", () => {
    const ao = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "ANALYZE_ONLY",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-ao",
      explicitConfirmation: true,
    });
    expect(ao.status).toBe("NO_MUTATION");

    const cancel = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "CANCEL",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-cancel",
      explicitConfirmation: true,
    });
    expect(cancel.status).toBe("CANCELLED");
  });

  it("missing existing project returns CONFLICT", () => {
    const result = executeConfirmedMutation({
      sessionLocalId: "s7",
      proposalId: "rrp-7",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: "proj-missing-does-not-exist",
      projectDraft: null,
      expectedProjectVersion: 1,
      expectedUpdatedAt: "2026-01-01T00:00:00.000Z",
      idempotencyKey: "idem-missing",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(result.errorCode).toBe("NOT_FOUND");
  });

  it("summary builder labels actions clearly", () => {
    const create = buildConfirmationSummary({
      actionType: "CREATE_PROJECT",
      draft: {
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      },
    });
    expect(create.actionLabel).toBe("Créer ce projet");
    expect(create.confirmationRequired).toBe(true);
    expect(
      draftFingerprint({
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      }),
    ).toContain("X");
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts`

```
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  assertMethodMode,
  assertNoForbiddenClaim,
  canActivate,
  validateCreateProjectInput,
} from "@/lib/d1/domain";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  listProjectAudit,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";

describe("d1 domain", () => {
  it("accepts authorized method modes", () => {
    expect(assertMethodMode("SFIA_V2_6")).toBe("SFIA_V2_6");
    expect(assertMethodMode("V3_CANDIDATE")).toBe("V3_CANDIDATE");
  });

  it("rejects forbidden claims", () => {
    expect(() => assertNoForbiddenClaim("go V3-ADOPTED now")).toThrow(D1Error);
    expect(() => assertNoForbiddenClaim("V3_IMPLEMENTED")).toThrow(D1Error);
  });

  it("validates create input", () => {
    expect(() =>
      validateCreateProjectInput({
        name: "",
        objective: "x",
        methodMode: "SFIA_V2_6",
        activate: true,
        idempotencyKey: "k",
      }),
    ).toThrow(D1Error);
  });

  it("allows activate only from DRAFT with mode", () => {
    expect(canActivate("DRAFT", "TRANSITION")).toBe(true);
    expect(canActivate("DRAFT", null)).toBe(false);
    expect(canActivate("ACTIVE", "TRANSITION")).toBe(false);
  });
});

describe("d1 repository commands", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    setMethodModeHoldForTests({ active: false, reasons: [] });
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-i1-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project with audit and mono-operator assignments", () => {
    const { project, idempotent } = createProject({
      name: "Demo Framing",
      objective: "Cadrer D1-I1",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "key-1",
    });
    expect(idempotent).toBe(false);
    expect(project.state).toBe("ACTIVE");
    expect(project.methodMode).toBe("V3_CANDIDATE");
    const audit = listProjectAudit(project.projectId);
    const types = audit.map((e) => e.eventType);
    expect(types).toContain("PROJECT_CREATED");
    expect(types).toContain("PROJECT_MODE_SELECTED");
    expect(types).toContain("PROJECT_ACTIVATED");
  });

  it("is idempotent on duplicate key", () => {
    const a = createProject({
      name: "Idem",
      objective: "same",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-dup",
    });
    const b = createProject({
      name: "Idem changed",
      objective: "different",
      methodMode: "TRANSITION",
      activate: true,
      idempotencyKey: "key-dup",
    });
    expect(b.idempotent).toBe(true);
    expect(b.project.projectId).toBe(a.project.projectId);
    expect(b.project.name).toBe("Idem");
  });

  it("selects method mode with optimistic locking", () => {
    const { project } = createProject({
      name: "Mode",
      objective: "switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-mode",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
    expect(updated.state).toBe("ACTIVE");
    expect(updated.version).toBe(project.version + 1);
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "V3_CANDIDATE",
        expectedVersion: project.version,
      }),
    ).toThrow(D1Error);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`

```
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  assertBoundedHistoryImmutable,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

describe("T-A7 lot1 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    assertBoundedHistoryImmutable(page);
  });

  it("enforces max limit", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider(),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.writeCommands).toBe(false);
  });
});
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md`

```
# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 + lot 1 local |
| **Date/heure/fuseau** | 2026-07-28 21:36:52 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O3 LOT 1 — NOT AN AUTHORIZATION` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |

> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable au-delà du gate O2 courant, ni delivery, ni cutover.

---

## 1. Légende des statuts

| Statut | Sens |
|--------|------|
| `SATISFIED — EVIDENCED` | preuve Git / contrat / test vérifiable pour l’exigence **telle que formulée** |
| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
| `MISSING — EVIDENCED` | absence de preuve / capacité constatée |
| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
| `FAILED — BLOCKER CONFIRMED` | échec confirmé |
| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

---

## 2. Matrice P03–P11 (après campagne O2)

| ID | Exigence canonique | Preuves Git / tests O2 | Statut **avant** | Statut **après** | Écart restant | Risque | Action future | Gate | Stop |
|----|--------------------|------------------------|------------------|------------------|---------------|--------|---------------|------|------|
| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · probe consumers · digest | PARTIAL | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; method cores encore allowlistés | fallback silencieux | remplacement registry sous gate distinct | F03 | SC-05 · SC-02 |
| P04 | `sourceLoader` → package loader + digest | `sourceLoader` · canonicalEngine · asymmetry probe | PARTIAL | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible | F03 | SC-05 |
| P05 | `contextResolver` → CkcResolver + doctrine | CKC mémoire · OA sans import method | PARTIAL | `PARTIAL — EVIDENCED` | guidance-only ; lectures method hors OA via loader | doctrine v2.6 résiduelle | boundary CKC + tests runtime | F03 | SC-05 |
| P06 | session / MethodMode → OA correlation | MethodMode D1 + **hold lot 1** | MISSING | `PARTIAL — EVIDENCED` (contrôle hold ; ≠ session OA) | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
| P07 | MethodMode retiré cible OA | METHOD_MODES actif · hold bloque transitions | MISSING | `PARTIAL — EVIDENCED` (hold ; ≠ retrait) | MethodMode présent | cutover prématuré | inventaire + retrait sous gate | F03 · F11 | SC-04 |
| P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
| P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
| P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
| P11 | historique legacy RO | F13.4 fondation lot 1 | MISSING | `PARTIAL — EVIDENCED` (fondation RO ; ≠ vue finale) | enforcement produit final absent | mutation historique | vue RO finale sous gate | F13 | SC-06 |

---

## 3. Synthèse après O2

### Satisfaits (remplacement OA)

Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement** Option A.

### Partiels renforcés

P03 · P04 · P05 · P10

### Manquants (capacité runtime remplacement OA)

P08 · P09

### Partiels (fondations lot 1 ≠ remplacement)

P03 · P04 · P05 · P06 · P07 · P10 · P11

### Unknown résiduels

| Sujet | Statut |
|-------|--------|
| Cross-call dynamique live session | `PARTIAL` static / live `UNKNOWN — ENVIRONMENT LIMITATION` (worktree sans `.sfia-exec`) |
| Hits allowlist production | `NO LOCAL HITS — LIMITED EVIDENCE` ≠ production |
| Volumes production | `LOCAL … — PRODUCTION UNKNOWN` |
| Durée conservation F13 | `UNKNOWN` |
| IAM | `NOT SELECTED` |

---

## 4. Anti-claims

- tests verts ≠ delivery / cutover ;
- PARTIAL renforcé ≠ SATISFIED remplacement ;
- isolation static ≠ isolation runtime cutover ;
- volumes locaux ≠ volumes production.

---

## 5. Verdict section

`P03–P11 REASSESSED AFTER O3 LOT 1 — 0 SATISFIED REMPLACEMENT OA / 7 PARTIAL / 2 MISSING — FOUNDATIONS ≠ CUTOVER — NO AUTHORIZATION`


---

## 8. Lot 1 update (O3)

| ID | Effet lot 1 |
|----|-------------|
| P06 | hold/transition control **PARTIAL** (hold actif ; session OA remplacement toujours MISSING) |
| P07 | MethodMode **toujours présent** ; retrait toujours MISSING ; hold empêche transition prématurée |
| P08 | lectures method allowlist toujours actives — MISSING remplacement |
| P09 | UI OA absente — MISSING |
| P10 | OPS1 isolation inchangée (pas de mod OPS1) |
| P11 | fondation F13.4 RO **PARTIAL** (métadonnées) — pas enforcement produit final |

`0 SATISFIED remplacement OA` conservé. Progression = contrôles/fondations, pas cutover.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md`

```
# 07 — Évaluation de satisfaction F03.3

| Champ | Valeur |
|-------|--------|
| **Document** | `07-f03-3-satisfaction-assessment.md` |
| **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date réévaluation O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **Verdict avant** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Verdict après O2** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **Verdict après lot 1** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **Prep technique O2** | autorisée par gate courant · **bornée** |
| **Prep au-delà / delivery / cutover** | `PROHIBITED` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |

---

## 1. Matrice de satisfaction (après O2)

| Critère F03.3 | Avant | Après | Preuve | Écart | Bloquant prep bornée ? | Bloquant lot dev ? |
|---------------|-------|-------|--------|-------|------------------------|--------------------|
| Inventaire legacy validé | SATISFIED | `SATISFIED — EVIDENCED` | Wave 1 | — | Non | Non (doc) |
| Dépendances actives confirmées | SATISFIED | `SATISFIED — EVIDENCED` | W1-D02 + probes | — | Non | Non (doc) |
| Candidats retrait identifiés | SATISFIED | `SATISFIED — EVIDENCED` | W1-D03 | — | Non | Non |
| Plan W1-B | SATISFIED | `SATISFIED — EVIDENCED` | W1-D01 | — | Non | Non |
| Matrice P03–P11 qualifiée | SATISFIED (qualif) | `SATISFIED — EVIDENCED` (qualif + MAJ O2) | `02` | 5 MISSING runtime | Non | **Oui** si retrait |
| Isolation OPS1 définie | PARTIAL | `SATISFIED — EVIDENCED` (design+validation tech) | `03` validé O2 | **non implémentée** | Non pour doc | **Oui** avant retrait |
| F11 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F11.2 | ≠ API | Non | **Oui** cutover |
| F13 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F13.4 | ≠ RO | Non | **Oui** retrait |
| Rollback documenté | SATISFIED (doc) | `SATISFIED — EVIDENCED` (doc) | `04` | NOT TESTED R1–R3 | Non doc | **Oui** cutover |
| Preuves non-régression candidates | PARTIAL | `PARTIAL — EVIDENCED` | `05` + O2 | F11/F13/E-RB-02 MISSING | Partiel | **Oui** |
| Anti-bypass | SATISFIED | `SATISFIED — EVIDENCED` | `06` | holds doc | Non | Non |
| HARD non ignoré | SATISFIED (non-ignorance) | `SATISFIED — EVIDENCED` | HARD OPEN HARD | non fermé | Non O2 | **Oui** delivery/real-exec |

---

## 2. Lecture du verdict après O2

### Pourquoi `BLOCKERS REDUCED`

- contrat OPS1 **validé techniquement** (static + allowlist + asymétrie) ;
- E-OPS-03 / E-OPS-05 / E-PER-01 / E-CP-* avancés ;
- P03/P04/P10 preuves approfondies ;
- absences F11/F13/hold **prouvées** (clarifie le backlog).

### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`

- P06–P09 / P11 toujours `MISSING` pour capacités runtime ;
- F11.2 / F13.4 non disponibles ;
- rollback R1–R3 non testé ;
- HARD / B5 / R1 / R-M01 ouverts ;
- E-OPS-03 live dynamique limité environnement.

### Conséquence

- O2 courant : preuves collectées · **pas** d’ouverture T-A7 ;
- O3 développement borné : **non supporté** par les preuves restantes.

---

## 3. Blockers levés / restants

### Levés ou réduits

| Blocker | Effet |
|---------|-------|
| OPS1 design non confronté au code | → validé tech, pas implémenté |
| E-OPS-03 UNKNOWN | → PARTIAL static |
| E-OPS-05 UNKNOWN | → NO LOCAL HITS limited |
| E-PER-01 UNKNOWN | → volumes locaux agrégés |
| Asymétrie path-policy non testée | → QUALIFIED |

### Restants

1. Implémentation isolation OPS1 (future — hors O2).
2. P06–P09 / P11 capacités runtime.
3. API F11.2 / vue F13.4.
4. Hold MethodMode (E-MM-03).
5. HARD / B5 / R1 / R-M01.
6. Rollback drills R1–R3.
7. Preuves production (volumes / hits).

---

## 4. Anti-claims

- BLOCKERS REDUCED ≠ T-A7 OPEN ;
- validation contrat ≠ implémentation ;
- O2 ≠ développement fonctionnel.

---

## 5. Verdict

`F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED`


---

## LOT 1 VERDICT

`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`

Motifs de non-SATISFIED : P06–P09/P11 non verts pour remplacement ; HARD/B5 ouverts ; F11/F13 non finales ; rollback R1–R3 non testés.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md`

```
# 10 — T-A7 first bounded development lot (O3)

| Champ | Valeur |
|-------|--------|
| **Gate** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
| **Décision** | **O3** — `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date/heure/fuseau** | 2026-07-28 21:19:12 CEST (+0200) |
| **Parent commit** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **Delivery / cutover** | `NOT AUTHORIZED` |

## Scope exact

| Inclus | Exclu |
|--------|-------|
| MethodMode hold (évaluation) | Migration / schéma DB |
| F11.2 readiness read-only interne | Route HTTP / UI admin |
| F13.4 fondation historique RO | Vue runtime complète / ACL / IAM |
| Tests + docs pack | `method/**` · OPS1 fonctionnel · delivery |

## Architecture minimale

```
lib/d1/methodModeHold.ts                 → hold + gate selectMethodMode (product)
lib/d1/methodModeHold.types.ts           → types only
lib/d1/methodModeHold.store.ts           → override slot (internal; not barrel-exported)
lib/d1/methodModeHold.test-only.ts       → set/reset TEST ONLY (not barrel-exported)
lib/d1/operationalReadiness.ts           → F11.2 query (compose hold + history)
lib/d1/commands.ts                       → assert hold before transition
lib/platform/t-a7/boundedHistoryRead.ts  → F13.4 provider documentary/Git refs
```

Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.

## MethodMode hold

- Défaut **ACTIVE** avec raisons : B5 · R1 · R-M01 · HARD · T-A7 lot · F11 incomplete · F13 incomplete.
- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`), y compris `active=true` avec raisons vides.
- Overrides **TEST ONLY** via `methodModeHold.test-only.ts` — **non réexportés** par `lib/d1/index.ts`.
- Frontière statique : `__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts`.
- Anti-claim : hold ≠ blockers fermés · ≠ IAM.

## F11.2

- `queryOperationalReadiness()` snapshot frozen · `mutable/adminUi/writeCommands=false`.
- Expose hold, blockers, deps canoniques, migration NOT_STARTED, health SIMULATED, history summary.
- Verdict surface : `F11.2 READINESS FOUNDATION IMPLEMENTED — READ-ONLY — NO ADMIN UI — NOT CUTOVER COMPLETE`

## F13.4

- Provider documentary seed + unavailable provider.
- Max 50 items · immutable · `gitCanonical=true`.
- Verdict surface : `F13.4 READ-ONLY FOUNDATION IMPLEMENTED — GIT REMAINS CANONICAL — NO MIGRATION OR FINAL RUNTIME VIEW`

## Sécurité / données

- Pas de PII · métadonnées packs/Git seulement · pas d’élargissement path-policy · path-policy ≠ IAM.

## Tests

- hold · readiness · history · boundaries override · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
- **99 passed** (suite d1 + probes ciblés après harden) · typecheck OK · lint OK · build OK

## Limitations / blockers restants

- B5/R1/R-M01/HARD OPEN
- Pas d’API HTTP F11 · pas de vue finale F13 · pas de hold persistant DB
- P06–P11 non SATISFIED remplacement OA
- F03.3 reste partielle

## Rollback

`git revert` du commit lot 1.

## Anti-claims

- T-A7 borné ≠ fully open · lot ≠ delivery · hold ≠ fermeture réserves · F11/F13 fondations ≠ finales.

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD · F11.2 · F13.4 FOUNDATIONS — TESTS PASS — NO DELIVERY OR CUTOVER`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Gate O3 (consommé)** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date lot 1** | 2026-07-28 21:19:12 CEST (+0200) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Push / PR projet** | **aucun** |
| **F03.3 évaluation** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **F11.2 / F13.4 décisions** | `DECIDED` · fondations lot 1 livrées (≠ finales) |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Persistence / IAM / RGPD** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

## Lot 1 livré

1. MethodMode hold (défaut actif)
2. F11.2 readiness read-only interne
3. F13.4 historique RO borné (Git canonique)

Détail : `10-t-a7-first-bounded-development-lot.md`

## Anti-claims

- T-A7 borné ≠ fully open · ≠ delivery/cutover ready
- hold ≠ blockers fermés
- fondations ≠ API/UI/vue finales

## Gate candidat suivant

`GO INTEGRATE T-A7 FIRST BOUNDED DEVELOPMENT LOT — PUSH PR MERGE IF REQUIRED CHECKS PASS — PRESERVE SOURCE BRANCH — NO DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` (après revue PR readiness)

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD IMPLEMENTED — F11.2 READINESS FOUNDATION IMPLEMENTED READ-ONLY — F13.4 READ-ONLY FOUNDATION IMPLEMENTED WITH GIT REMAINING CANONICAL — TESTS PASS — NO MIGRATION IAM ADMIN UI DELIVERY OR CUTOVER — B5 R1 R-M01 AND HARD REMAIN OPEN — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — PROJECT BRANCH NOT PUSHED`
```

## 19. Diff utile complet — commit correctif `b6a1933…`

```diff
diff --git a/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts b/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
index d39db63..0459230 100644
--- a/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
@@ -20,7 +20,7 @@ import {
 import {
   resetMethodModeHoldForTests,
   setMethodModeHoldForTests,
-} from "@/lib/d1/methodModeHold";
+} from "@/lib/d1/methodModeHold.test-only";

 describe("D1-C4 confirmation contracts", () => {
   it("allowlists actionType and requires explicit confirmation", () => {
diff --git a/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts b/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
index 4b3e17a..7cf73c6 100644
--- a/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
@@ -18,7 +18,7 @@ import {
 import {
   resetMethodModeHoldForTests,
   setMethodModeHoldForTests,
-} from "@/lib/d1/methodModeHold";
+} from "@/lib/d1/methodModeHold.test-only";

 describe("d1 domain", () => {
   it("accepts authorized method modes", () => {
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts
new file mode 100644
index 0000000..422fdd4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts
@@ -0,0 +1,143 @@
+/** @vitest-environment node */
+/**
+ * T-A7 Lot 1 — MethodMode hold test-override must stay test-only.
+ * Comments alone are not a control; this static boundary is.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (
+        entry.name === "node_modules" ||
+        entry.name === ".next" ||
+        entry.name === "__tests__"
+      ) {
+        continue;
+      }
+      out.push(...listTsFiles(full));
+    } else if (/\.(ts|tsx)$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function rel(file: string): string {
+  return path.relative(APP_ROOT, file);
+}
+
+describe("T-A7 MethodMode hold test-override boundaries", () => {
+  it("does not re-export test helpers or store from lib/d1 barrel", () => {
+    const barrel = fs.readFileSync(path.join(APP_ROOT, "lib/d1/index.ts"), "utf8");
+    expect(barrel).not.toMatch(/methodModeHold\.test-only/);
+    expect(barrel).not.toMatch(/methodModeHold\.store/);
+    expect(barrel).not.toMatch(/setMethodModeHoldForTests/);
+    expect(barrel).not.toMatch(/resetMethodModeHoldForTests/);
+    expect(barrel).not.toMatch(/export \* from ["']\.\/methodModeHold["']/);
+  });
+
+  it("forbids runtime product code from importing test-only helpers", () => {
+    const productRoots = [
+      path.join(APP_ROOT, "lib"),
+      path.join(APP_ROOT, "features"),
+      path.join(APP_ROOT, "app"),
+      path.join(APP_ROOT, "components"),
+    ];
+    const files = productRoots.flatMap(listTsFiles).filter((f) => {
+      const r = rel(f);
+      return !r.includes("methodModeHold.test-only.ts");
+    });
+    const hits: string[] = [];
+    for (const file of files) {
+      const text = fs.readFileSync(file, "utf8");
+      for (const line of text.split("\n")) {
+        const trimmed = line.trim();
+        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
+          continue;
+        }
+        if (
+          /from\s+["'][^"']*methodModeHold\.test-only["']/.test(trimmed) ||
+          /import\s*{[^}]*(setMethodModeHoldForTests|resetMethodModeHoldForTests)/.test(
+            trimmed,
+          )
+        ) {
+          hits.push(`${rel(file)}: ${trimmed}`);
+        }
+      }
+    }
+    expect(hits, hits.join("\n") || "ok").toEqual([]);
+  });
+
+  it("confines override store imports to hold module and test-only module", () => {
+    const files = [
+      ...listTsFiles(path.join(APP_ROOT, "lib")),
+      ...listTsFiles(path.join(APP_ROOT, "features")),
+      ...listTsFiles(path.join(APP_ROOT, "app")),
+      ...listTsFiles(path.join(APP_ROOT, "components")),
+    ];
+    const allowed = new Set([
+      "lib/d1/methodModeHold.ts",
+      "lib/d1/methodModeHold.test-only.ts",
+      "lib/d1/methodModeHold.store.ts",
+    ]);
+    const hits: string[] = [];
+    for (const file of files) {
+      const r = rel(file);
+      if (allowed.has(r)) continue;
+      const text = fs.readFileSync(file, "utf8");
+      for (const line of text.split("\n")) {
+        const trimmed = line.trim();
+        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
+          continue;
+        }
+        if (/from\s+["'][^"']*methodModeHold\.store["']/.test(trimmed)) {
+          hits.push(r);
+        }
+      }
+    }
+    expect(hits, hits.join("\n") || "ok").toEqual([]);
+  });
+
+  it("forbids test helpers from being imported via public product hold module in tests", () => {
+    const testsRoot = path.join(APP_ROOT, "__tests__");
+    function listAll(dir: string): string[] {
+      if (!fs.existsSync(dir)) return [];
+      const out: string[] = [];
+      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+        const full = path.join(dir, entry.name);
+        if (entry.isDirectory()) {
+          if (entry.name === "node_modules") continue;
+          out.push(...listAll(full));
+        } else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
+      }
+      return out;
+    }
+    const hits: string[] = [];
+    for (const file of listAll(testsRoot)) {
+      const text = fs.readFileSync(file, "utf8");
+      for (const line of text.split("\n")) {
+        if (
+          /from\s+["']@\/lib\/d1["']/.test(line) &&
+          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
+        ) {
+          hits.push(`${rel(file)}: ${line.trim()}`);
+        }
+        if (
+          /from\s+["']@\/lib\/d1\/methodModeHold["']/.test(line) &&
+          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
+        ) {
+          hits.push(`${rel(file)}: ${line.trim()}`);
+        }
+      }
+    }
+    expect(hits, hits.join("\n") || "ok").toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts
index 6c15def..b626950 100644
--- a/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts
@@ -11,9 +11,11 @@ import {
   decideMethodModeTransition,
   getDefaultMethodModeHoldState,
   readMethodModeHold,
+} from "@/lib/d1/methodModeHold";
+import {
   resetMethodModeHoldForTests,
   setMethodModeHoldForTests,
-} from "@/lib/d1/methodModeHold";
+} from "@/lib/d1/methodModeHold.test-only";

 describe("T-A7 lot1 MethodMode hold", () => {
   let tmpDir: string;
@@ -93,6 +95,20 @@ describe("T-A7 lot1 MethodMode hold", () => {
     expect(updated.methodMode).toBe("TRANSITION");
   });

+  it("blocks when hold is active even with empty reasons", () => {
+    setMethodModeHoldForTests({ active: true, reasons: [] });
+    expect(decideMethodModeTransition().allowed).toBe(false);
+    expect(() => assertMethodModeTransitionAllowed()).toThrow(/ACTIVE_NO_REASONS|hold/i);
+  });
+
+  it("resets override to default active hold between tests", () => {
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    expect(decideMethodModeTransition().allowed).toBe(true);
+    resetMethodModeHoldForTests();
+    expect(readMethodModeHold().active).toBe(true);
+    expect(decideMethodModeTransition().allowed).toBe(false);
+  });
+
   it("readMethodModeHold is deterministic for reason codes", () => {
     const a = readMethodModeHold("2026-07-28T19:00:00.000Z");
     const b = readMethodModeHold("2026-07-28T19:00:00.000Z");
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
index d29fe3b..91683b4 100644
--- a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
@@ -7,7 +7,7 @@ import {
 import {
   resetMethodModeHoldForTests,
   setMethodModeHoldForTests,
-} from "@/lib/d1/methodModeHold";
+} from "@/lib/d1/methodModeHold.test-only";
 import {
   createUnavailableBoundedHistoryProvider,
 } from "@/lib/platform/t-a7/boundedHistoryRead";
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
index 7668e30..3ec0b60 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
@@ -8,7 +8,7 @@ import {
   BoundedHistoryMutationError,
 } from "@/lib/platform/t-a7/boundedHistoryRead";
 import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
-import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold";
+import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

 describe("T-A7 lot1 F13.4 bounded history foundation", () => {
   it("reads a bounded immutable documentary page with Git canonical", () => {
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 8ada524..73e45f6 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -1,6 +1,29 @@
+/**
+ * Public D1 product surface.
+ * Intentionally does NOT re-export MethodMode hold test helpers.
+ */
 export * from "./types";
 export * from "./commands";
 export * from "./errors";
-export * from "./methodModeHold";
-export * from "./operationalReadiness";
+export {
+  METHOD_MODE_HOLD_REASON_CODES,
+  getDefaultMethodModeHoldState,
+  readMethodModeHold,
+  decideMethodModeTransition,
+  assertMethodModeTransitionAllowed,
+} from "./methodModeHold";
+export type {
+  MethodModeHoldReasonCode,
+  MethodModeHoldReason,
+  MethodModeHoldState,
+  MethodModeTransitionDecision,
+} from "./methodModeHold";
+export {
+  queryOperationalReadiness,
+  assertOperationalReadinessReadOnly,
+} from "./operationalReadiness";
+export type {
+  OperationalReadinessSnapshot,
+  OperationalReadinessQueryInput,
+} from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
diff --git a/projects/sfia-studio/app/lib/d1/methodModeHold.store.ts b/projects/sfia-studio/app/lib/d1/methodModeHold.store.ts
new file mode 100644
index 0000000..e90d3f0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/methodModeHold.store.ts
@@ -0,0 +1,12 @@
+/**
+ * Internal MethodMode hold override slot.
+ * Not part of the public D1 API — do not import from runtime barrels.
+ * Writable only from `methodModeHold.test-only.ts` (tests).
+ */
+import type { MethodModeHoldState } from "./methodModeHold.types";
+
+export const methodModeHoldOverrideSlot: {
+  current: MethodModeHoldState | null;
+} = {
+  current: null,
+};
diff --git a/projects/sfia-studio/app/lib/d1/methodModeHold.test-only.ts b/projects/sfia-studio/app/lib/d1/methodModeHold.test-only.ts
new file mode 100644
index 0000000..ad9d1a5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/methodModeHold.test-only.ts
@@ -0,0 +1,27 @@
+/**
+ * TEST-ONLY support for MethodMode hold overrides.
+ *
+ * Import exclusively from files under `app/__tests__/`.
+ * Never re-export from `lib/d1/index.ts` or any runtime barrel.
+ */
+import { methodModeHoldOverrideSlot } from "@/lib/d1/methodModeHold.store";
+import type { MethodModeHoldState } from "@/lib/d1/methodModeHold.types";
+
+export function resetMethodModeHoldForTests(): void {
+  methodModeHoldOverrideSlot.current = null;
+}
+
+export function setMethodModeHoldForTests(
+  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
+    Partial<
+      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
+    >,
+): void {
+  methodModeHoldOverrideSlot.current = {
+    active: state.active,
+    reasons: Object.freeze([...state.reasons]),
+    evaluatedAt: state.evaluatedAt ?? new Date().toISOString(),
+    provenance: state.provenance ?? "test-override",
+    completeness: state.completeness ?? "BOUNDED_LOT_1",
+  };
+}
diff --git a/projects/sfia-studio/app/lib/d1/methodModeHold.ts b/projects/sfia-studio/app/lib/d1/methodModeHold.ts
index c9fe3a3..3022032 100644
--- a/projects/sfia-studio/app/lib/d1/methodModeHold.ts
+++ b/projects/sfia-studio/app/lib/d1/methodModeHold.ts
@@ -1,44 +1,26 @@
 /**
  * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
  * Default: ACTIVE while structural blockers remain open.
- * TEST/DIAGNOSTIC overrides are test-only and must not ship as product IAM.
+ *
+ * Test overrides: `methodModeHold.test-only.ts` only (never barrel-exported).
  */

 import { D1Error } from "./errors";
 import { logD1 } from "./observability";
+import { methodModeHoldOverrideSlot } from "./methodModeHold.store";
+import type {
+  MethodModeHoldReason,
+  MethodModeHoldState,
+  MethodModeTransitionDecision,
+} from "./methodModeHold.types";

-export const METHOD_MODE_HOLD_REASON_CODES = [
-  "B5_OPEN",
-  "R1_OPEN",
-  "R_M01_OPEN",
-  "HARD_OPEN",
-  "T_A7_BOUNDED_LOT_ACTIVE",
-  "F11_2_INCOMPLETE",
-  "F13_4_INCOMPLETE",
-] as const;
-
-export type MethodModeHoldReasonCode =
-  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];
-
-export interface MethodModeHoldReason {
-  code: MethodModeHoldReasonCode;
-  detail: string;
-}
-
-export interface MethodModeHoldState {
-  active: boolean;
-  reasons: readonly MethodModeHoldReason[];
-  evaluatedAt: string;
-  provenance: "governance-default" | "test-override";
-  completeness: "BOUNDED_LOT_1";
-}
-
-export interface MethodModeTransitionDecision {
-  allowed: boolean;
-  hold: MethodModeHoldState;
-  decision: "ALLOW" | "BLOCK";
-  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
-}
+export {
+  METHOD_MODE_HOLD_REASON_CODES,
+  type MethodModeHoldReasonCode,
+  type MethodModeHoldReason,
+  type MethodModeHoldState,
+  type MethodModeTransitionDecision,
+} from "./methodModeHold.types";

 const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
   {
@@ -71,8 +53,6 @@ const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
   },
 ] as const;

-let testOverride: MethodModeHoldState | null = null;
-
 function nowIso(): string {
   return new Date().toISOString();
 }
@@ -92,11 +72,12 @@ export function getDefaultMethodModeHoldState(
 export function readMethodModeHold(
   evaluatedAt = nowIso(),
 ): MethodModeHoldState {
-  if (testOverride) {
+  const override = methodModeHoldOverrideSlot.current;
+  if (override) {
     return {
-      ...testOverride,
+      ...override,
       evaluatedAt,
-      reasons: [...testOverride.reasons],
+      reasons: [...override.reasons],
     };
   }
   return getDefaultMethodModeHoldState(evaluatedAt);
@@ -104,7 +85,8 @@ export function readMethodModeHold(

 export function decideMethodModeTransition(): MethodModeTransitionDecision {
   const hold = readMethodModeHold();
-  if (hold.active && hold.reasons.length > 0) {
+  // Conservative: any active hold blocks, even with empty reasons.
+  if (hold.active) {
     return {
       allowed: false,
       hold,
@@ -123,7 +105,8 @@ export function decideMethodModeTransition(): MethodModeTransitionDecision {
 export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecision {
   const decision = decideMethodModeTransition();
   if (!decision.allowed) {
-    const codes = decision.hold.reasons.map((r) => r.code).join(",");
+    const codes =
+      decision.hold.reasons.map((r) => r.code).join(",") || "ACTIVE_NO_REASONS";
     logD1("method_mode_hold_blocked", {
       status: "blocked",
       reasonCount: decision.hold.reasons.length,
@@ -140,24 +123,3 @@ export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecisio
   });
   return decision;
 }
-
-/** TEST ONLY — restore default conservative hold. */
-export function resetMethodModeHoldForTests(): void {
-  testOverride = null;
-}
-
-/** TEST ONLY — override hold state (e.g. inactive for legacy foundation tests). */
-export function setMethodModeHoldForTests(
-  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
-    Partial<
-      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
-    >,
-): void {
-  testOverride = {
-    active: state.active,
-    reasons: Object.freeze([...state.reasons]),
-    evaluatedAt: state.evaluatedAt ?? nowIso(),
-    provenance: state.provenance ?? "test-override",
-    completeness: state.completeness ?? "BOUNDED_LOT_1",
-  };
-}
diff --git a/projects/sfia-studio/app/lib/d1/methodModeHold.types.ts b/projects/sfia-studio/app/lib/d1/methodModeHold.types.ts
new file mode 100644
index 0000000..899e3bc
--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/methodModeHold.types.ts
@@ -0,0 +1,36 @@
+/**
+ * Shared MethodMode hold types (no mutable state).
+ */
+
+export const METHOD_MODE_HOLD_REASON_CODES = [
+  "B5_OPEN",
+  "R1_OPEN",
+  "R_M01_OPEN",
+  "HARD_OPEN",
+  "T_A7_BOUNDED_LOT_ACTIVE",
+  "F11_2_INCOMPLETE",
+  "F13_4_INCOMPLETE",
+] as const;
+
+export type MethodModeHoldReasonCode =
+  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];
+
+export interface MethodModeHoldReason {
+  code: MethodModeHoldReasonCode;
+  detail: string;
+}
+
+export interface MethodModeHoldState {
+  active: boolean;
+  reasons: readonly MethodModeHoldReason[];
+  evaluatedAt: string;
+  provenance: "governance-default" | "test-override";
+  completeness: "BOUNDED_LOT_1";
+}
+
+export interface MethodModeTransitionDecision {
+  allowed: boolean;
+  hold: MethodModeHoldState;
+  decision: "ALLOW" | "BLOCK";
+  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
+}
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
index af70284..77bba7c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
@@ -4,10 +4,10 @@
 |-------|--------|
 | **Document** | `02-p03-p11-readiness-matrix.md` |
 | **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
-| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 locales |
-| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
-| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O2 CAMPAIGN — NOT AN AUTHORIZATION` |
-| **T-A7** | `NOT OPEN` |
+| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 + lot 1 local |
+| **Date/heure/fuseau** | 2026-07-28 21:36:52 CEST (+0200) |
+| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O3 LOT 1 — NOT AN AUTHORIZATION` |
+| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |

 > Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable au-delà du gate O2 courant, ni delivery, ni cutover.

@@ -33,12 +33,12 @@
 | P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · probe consumers · digest | PARTIAL | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; method cores encore allowlistés | fallback silencieux | remplacement registry sous gate distinct | F03 | SC-05 · SC-02 |
 | P04 | `sourceLoader` → package loader + digest | `sourceLoader` · canonicalEngine · asymmetry probe | PARTIAL | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible | F03 | SC-05 |
 | P05 | `contextResolver` → CkcResolver + doctrine | CKC mémoire · OA sans import method | PARTIAL | `PARTIAL — EVIDENCED` | guidance-only ; lectures method hors OA via loader | doctrine v2.6 résiduelle | boundary CKC + tests runtime | F03 | SC-05 |
-| P06 | session / MethodMode → OA correlation | MethodMode D1 actif · hold absent (probe) | MISSING | `MISSING — EVIDENCED` | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
-| P07 | MethodMode retiré cible OA | METHOD_MODES actif · foundation tests | MISSING | `MISSING — EVIDENCED` | MethodMode présent | cutover prématuré | inventaire + hold futur | F03 · F11 | SC-04 |
+| P06 | session / MethodMode → OA correlation | MethodMode D1 + **hold lot 1** | MISSING | `PARTIAL — EVIDENCED` (contrôle hold ; ≠ session OA) | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
+| P07 | MethodMode retiré cible OA | METHOD_MODES actif · hold bloque transitions | MISSING | `PARTIAL — EVIDENCED` (hold ; ≠ retrait) | MethodMode présent | cutover prématuré | inventaire + retrait sous gate | F03 · F11 | SC-04 |
 | P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
 | P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
 | P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
-| P11 | historique legacy RO | F13.4 décidé · absence runtime prouvée | MISSING | `MISSING — EVIDENCED` | politique non appliquée | mutation historique | vue RO sous gate F13 | F13 | SC-06 |
+| P11 | historique legacy RO | F13.4 fondation lot 1 | MISSING | `PARTIAL — EVIDENCED` (fondation RO ; ≠ vue finale) | enforcement produit final absent | mutation historique | vue RO finale sous gate | F13 | SC-06 |

 ---

@@ -52,9 +52,13 @@ Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement

 P03 · P04 · P05 · P10

-### Manquants (capacité runtime)
+### Manquants (capacité runtime remplacement OA)

-P06 · P07 · P08 · P09 · P11
+P08 · P09
+
+### Partiels (fondations lot 1 ≠ remplacement)
+
+P03 · P04 · P05 · P06 · P07 · P10 · P11

 ### Unknown résiduels

@@ -79,7 +83,7 @@ P06 · P07 · P08 · P09 · P11

 ## 5. Verdict section

-`P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`
+`P03–P11 REASSESSED AFTER O3 LOT 1 — 0 SATISFIED REMPLACEMENT OA / 7 PARTIAL / 2 MISSING — FOUNDATIONS ≠ CUTOVER — NO AUTHORIZATION`


 ---
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
index 3799b52..3ab661e 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
@@ -11,7 +11,7 @@
 | **Verdict après lot 1** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
 | **Prep technique O2** | autorisée par gate courant · **bornée** |
 | **Prep au-delà / delivery / cutover** | `PROHIBITED` |
-| **T-A7** | `NOT OPEN` |
+| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |

 ---

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
index b166753..10807ea 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
@@ -21,10 +21,13 @@
 ## Architecture minimale

 ```
-lib/d1/methodModeHold.ts          → hold + gate selectMethodMode
-lib/d1/operationalReadiness.ts    → F11.2 query (compose hold + history)
-lib/d1/commands.ts                → assert hold before transition
-lib/platform/t-a7/boundedHistoryRead.ts → F13.4 provider documentary/Git refs
+lib/d1/methodModeHold.ts                 → hold + gate selectMethodMode (product)
+lib/d1/methodModeHold.types.ts           → types only
+lib/d1/methodModeHold.store.ts           → override slot (internal; not barrel-exported)
+lib/d1/methodModeHold.test-only.ts       → set/reset TEST ONLY (not barrel-exported)
+lib/d1/operationalReadiness.ts           → F11.2 query (compose hold + history)
+lib/d1/commands.ts                       → assert hold before transition
+lib/platform/t-a7/boundedHistoryRead.ts  → F13.4 provider documentary/Git refs
 ```

 Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.
@@ -32,8 +35,9 @@ Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.
 ## MethodMode hold

 - Défaut **ACTIVE** avec raisons : B5 · R1 · R-M01 · HARD · T-A7 lot · F11 incomplete · F13 incomplete.
-- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`).
-- Overrides **TEST ONLY**.
+- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`), y compris `active=true` avec raisons vides.
+- Overrides **TEST ONLY** via `methodModeHold.test-only.ts` — **non réexportés** par `lib/d1/index.ts`.
+- Frontière statique : `__tests__/d1/t-a7-method-mode-hold-boundaries.test.ts`.
 - Anti-claim : hold ≠ blockers fermés · ≠ IAM.

 ## F11.2
@@ -54,8 +58,8 @@ Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.

 ## Tests

-- hold · readiness · history · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
-- **93 passed** (suite d1 + probes ciblés) · typecheck OK
+- hold · readiness · history · boundaries override · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
+- **99 passed** (suite d1 + probes ciblés après harden) · typecheck OK · lint OK · build OK

 ## Limitations / blockers restants

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index e37be90..123c752 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -33,9 +33,9 @@ Détail : `10-t-a7-first-bounded-development-lot.md`

 ## Gate candidat suivant

-`GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER`
+`GO INTEGRATE T-A7 FIRST BOUNDED DEVELOPMENT LOT — PUSH PR MERGE IF REQUIRED CHECKS PASS — PRESERVE SOURCE BRANCH — NO DELIVERY OR CUTOVER`

-**Statut :** `NOT CONSUMED`
+**Statut :** `NOT CONSUMED` (après revue PR readiness)

 ## Verdict
```

## 20. Annexes — surfaces produit lot 1 (référence)

### `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`

```
/**
 * T-A7 Lot 1 — F11.2 minimal operational readiness (read-only, no UI, no HTTP required).
 * Assembles observed state; never mutates MethodMode or history.
 */

import {
  decideMethodModeTransition,
  readMethodModeHold,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "@/lib/d1/methodModeHold";
import {
  defaultBoundedHistoryProvider,
  type BoundedHistoryAvailability,
  type BoundedHistoryPage,
  type BoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import {
  METHOD_MODES,
  type MethodMode,
  type D1Project,
} from "@/lib/d1/types";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

export type ReadinessUnknown = "UNKNOWN";

export interface OperationalReadinessLegacyDeps {
  readonly methodModesAuthorized: readonly MethodMode[];
  readonly canonicalCorePaths: readonly string[];
  readonly methodCorePathCount: number;
  readonly note: string;
}

export interface OperationalReadinessMigrationStatus {
  readonly status: "NOT_STARTED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHealth {
  readonly status: "SIMULATED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHistorySummary {
  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
  readonly returned: number;
  readonly gitCanonical: true;
  readonly completeness: "BOUNDED_LOT_1";
}

export interface OperationalReadinessSnapshot {
  readonly schemaVersion: "t-a7-f11.2-lot1";
  readonly evaluatedAt: string;
  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
  readonly completeness: "BOUNDED_LOT_1";
  readonly observed: {
    readonly projectId: string | null;
    readonly methodMode: MethodMode | null;
    readonly projectState: D1Project["state"] | null;
    readonly hold: MethodModeHoldState;
    readonly legacyDependencies: OperationalReadinessLegacyDeps;
    readonly migration: OperationalReadinessMigrationStatus;
    readonly health: OperationalReadinessHealth;
    readonly history: OperationalReadinessHistorySummary;
    readonly openBlockers: readonly string[];
  };
  readonly decision: MethodModeTransitionDecision["decision"];
  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
  readonly authorization: MethodModeTransitionDecision["authorization"];
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
}

export interface OperationalReadinessQueryInput {
  readonly project?: D1Project | null;
  readonly historyProvider?: BoundedHistoryProvider;
  readonly historyLimit?: number;
}

function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
  return {
    availability: page.availability,
    returned: page.returned,
    gitCanonical: true,
    completeness: "BOUNDED_LOT_1",
  };
}

export function queryOperationalReadiness(
  input: OperationalReadinessQueryInput = {},
): OperationalReadinessSnapshot {
  const hold = readMethodModeHold();
  const transition = decideMethodModeTransition();
  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
  const historyPage = historyProvider.read({
    limit: input.historyLimit ?? 10,
  });
  const project = input.project ?? null;
  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
    p.startsWith("method/"),
  );

  const snapshot: OperationalReadinessSnapshot = {
    schemaVersion: "t-a7-f11.2-lot1",
    evaluatedAt: new Date().toISOString(),
    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
    completeness: "BOUNDED_LOT_1",
    observed: {
      projectId: project?.projectId ?? null,
      methodMode: project?.methodMode ?? null,
      projectState: project?.state ?? null,
      hold,
      legacyDependencies: {
        methodModesAuthorized: METHOD_MODES,
        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
        methodCorePathCount: methodCores.length,
        note: "Observed allowlisted dependencies only; not a removal plan.",
      },
      migration: {
        status: "NOT_STARTED",
        detail: "No migration authorized in T-A7 lot 1.",
      },
      health: {
        status: "SIMULATED",
        detail: "No production readiness probe; simulated/local observation only.",
      },
      history: summarizeHistory(historyPage),
      openBlockers: hold.reasons.map((r) => r.code),
    },
    decision: transition.decision,
    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
    authorization: transition.authorization,
    mutable: false,
    adminUi: false,
    writeCommands: false,
  };

  return Object.freeze({
    ...snapshot,
    observed: Object.freeze({
      ...snapshot.observed,
      hold: Object.freeze({
        ...snapshot.observed.hold,
        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
      }),
      legacyDependencies: Object.freeze({
        ...snapshot.observed.legacyDependencies,
        methodModesAuthorized: Object.freeze([
          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
        ]),
        canonicalCorePaths: Object.freeze([
          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
        ]),
      }),
      migration: Object.freeze({ ...snapshot.observed.migration }),
      health: Object.freeze({ ...snapshot.observed.health }),
      history: Object.freeze({ ...snapshot.observed.history }),
      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
    }),
  });
}

/** Contract guard: readiness snapshot exposes no write surface. */
export function assertOperationalReadinessReadOnly(
  snapshot: OperationalReadinessSnapshot,
): void {
  if (
    snapshot.mutable !== false ||
    snapshot.adminUi !== false ||
    snapshot.writeCommands !== false
  ) {
    throw new Error("Operational readiness snapshot must remain read-only.");
  }
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`

```
/**
 * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
 * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export interface BoundedHistoryEntry {
  readonly id: string;
  readonly category: string;
  readonly status: BoundedHistoryEntryStatus;
  readonly occurredAt: string;
  readonly gitProvenance: {
    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
    readonly ref: string;
  };
  readonly metadata: Readonly<Record<string, string>>;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_LOT_1";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  readonly limit?: number;
}

export class BoundedHistoryMutationError extends Error {
  readonly code = "MUTATION_FORBIDDEN" as const;
  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
    super(message);
    this.name = "BoundedHistoryMutationError";
  }
}

export interface BoundedHistoryProvider {
  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
}

function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
  return Object.freeze({
    ...entry,
    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
    metadata: Object.freeze({ ...entry.metadata }),
  });
}

function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
  return Object.freeze({
    ...page,
    items: Object.freeze(page.items.map(freezeEntry)),
  });
}

/** Documentary/Git references known from T-A7 packs — not a full archive. */
const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
  freezeEntry({
    id: "hist-t-a7-f03-f11-f13",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T17:54:21.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "285",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-readme-post-merge",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:17:54.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "286",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness",
    category: "readiness-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "bounded-technical-preparation-o2",
    },
  }),
]);

export function createDocumentaryBoundedHistoryProvider(
  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
): BoundedHistoryProvider {
  const frozenSeed = Object.freeze(seed.map(freezeEntry));
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
        throw new RangeError("limit must be a positive number");
      }
      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
      const slice = frozenSeed.slice(0, limit);
      return freezePage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        limit,
        returned: slice.length,
        truncated: frozenSeed.length > slice.length,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      const limit = Math.min(
        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
        BOUNDED_HISTORY_MAX_ITEMS,
      );
      return freezePage({
        availability: "NOT_AVAILABLE",
        items: [],
        limit,
        returned: 0,
        truncated: false,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Bounded history provider unavailable; Git remains canonical.",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (page.mutable !== false || page.gitCanonical !== true) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false and gitCanonical=true.",
    );
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
    // TypeError from frozen object — expected
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page.items as any).push({});
    throw new BoundedHistoryMutationError(
      "Bounded history items array was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
}

export const defaultBoundedHistoryProvider =
  createDocumentaryBoundedHistoryProvider();
```

### `projects/sfia-studio/app/lib/platform/t-a7/index.ts`

```
/** Platform T-A7 bounded foundations (lot 1). */
export * from "./boundedHistoryRead";
```

---

FIN REVIEW PACK FULL — T-A7 LOT 1 PR READINESS
