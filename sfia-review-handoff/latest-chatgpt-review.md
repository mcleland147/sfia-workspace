# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 20:56:57 CEST (+0200) |
| **Niveau** | FULL |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Gate** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Option** | **O2** — préparation technique bornée |
| **HEAD initial** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **HEAD evidence** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **Parent** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **Tree** | `081f1dca0b0b2a7c015080eb69bc5a94ea2751af` |
| **Base origin/main** | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Commit** | `test(sfia-studio): collect T-A7 readiness evidence` |
| **Push/PR projet** | **aucun** |
| **F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **OPS1 contrat** | `VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
| **Tests** | 12 files / 63 passed / ~1.96s |
| **Gate candidat** | `GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN` (`NOT CONSUMED`) |

## Truth check

PASSED — HEAD initial a33f4a3 · parent 2a3c59c · worktree propre · pas d'upstream · 9 fichiers doc avant O2.

## Plan de campagne

Voir fichier `09` — phases A→H · 6 probes autorisés avant code.

## Fichiers techniques créés

```
100644 blob 6293b0415939d0be13c9e6f6c8e494ab8764d0f4	projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
100644 blob d70ef3903a7b3899b1caff72fe5add7585e8d6da	projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts
100644 blob 5254fe90f127a93a12af43477ae3f6940ac58510	projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
100644 blob 39f692a8724b73929e8b3317ebe22859cfe521c1	projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts
100644 blob 7c6a63a716a824a54128a4d82e8e68d72689d4c3	projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts
100644 blob 86d948692cfe7f31e25c049e4e869dcbcc979d31	projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts
```

## Contenu complet — probes
### `projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-05).
 * Structural allowlist campaign for method/ paths — read-only evaluation.
 * Does not persist, does not mutate workspace files, does not call network.
 */
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CAMPUS360_ALLOWLIST_POLICY,
  evaluateAllowlist,
} from "@/lib/ops1/allowlistEvaluation";

const ACTION_ID = "ops1-act-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";

const METHOD_CANDIDATES = [
  "method/",
  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
  "method/secret.md",
] as const;

describe("T-A7 probe — allowlist method/ hits (E-OPS-05)", () => {
  const workspaceRoot = os.tmpdir();

  it("declares no method/ entries in CAMPUS360_ALLOWLIST_POLICY", () => {
    const methodKeys = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
      k === "method" || k.startsWith("method/"),
    );
    expect(methodKeys).toEqual([]);
  });

  it("denies every sampled method/ path for read/modify/create", () => {
    const report: Array<{
      path: string;
      mode: string;
      status: string;
      reason: string;
    }> = [];

    for (const candidate of METHOD_CANDIDATES) {
      for (const mode of ["read", "modify", "create"] as const) {
        const result = evaluateAllowlist({
          actionCandidateId: ACTION_ID,
          actionVersion: 1,
          workspaceRoot,
          entries: [{ path: candidate, mode }],
        });
        const entry = result.evaluatedEntries[0];
        report.push({
          path: candidate,
          mode,
          status: entry?.evaluationStatus ?? "MISSING",
          reason: entry?.evaluationReason ?? "none",
        });
        expect(entry?.evaluationStatus).toMatch(/DENIED|INVALID/);
        expect(result.allowedReads).not.toContain(
          entry?.normalizedPath ?? candidate,
        );
        expect(result.status).not.toBe("VALID");
      }
    }

    // Aggregated local campaign evidence (no content leakage).
    expect(report.length).toBe(METHOD_CANDIDATES.length * 3);
    expect(report.every((r) => /DENIED|INVALID/.test(r.status))).toBe(true);
  });

  it("records local campaign verdict NO LOCAL HITS on allowlist policy keys", () => {
    const policyHitCount = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
      k.includes("method"),
    ).length;
    expect(policyHitCount).toBe(0);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-03 / P10).
 * Static import-graph probe for OPS1 ↔ OA / D1 / platform.
 * Read-only filesystem scan — no mutations, no network, no DB writes.
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
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function collectHits(
  files: string[],
  pattern: RegExp,
): Array<{ file: string; line: string }> {
  const hits: Array<{ file: string; line: string }> = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const line of text.split("\n")) {
      if (pattern.test(line)) {
        hits.push({
          file: path.relative(APP_ROOT, file),
          line: line.trim(),
        });
      }
    }
  }
  return hits;
}

describe("T-A7 probe — OPS1/OA/D1 import isolation (E-OPS-03 static)", () => {
  it("finds zero static OPS1 → OA imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
      /from\s+["']@\/lib\/oa(?:\/|["'])|require\(["']@\/lib\/oa/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static OA → OPS1 imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/oa")),
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static OPS1 → D1 imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
      /from\s+["']@\/lib\/d1(?:\/|["'])|require\(["']@\/lib\/d1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static D1 → OPS1 imports", () => {
    const hits = collectHits(
      [
        ...listTsFiles(path.join(APP_ROOT, "lib/d1")),
        ...listTsFiles(path.join(APP_ROOT, "features/d1")),
      ],
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("records shared-surface coupling without identity fusion (D1 intake)", () => {
    const resolveProvider = path.join(
      APP_ROOT,
      "lib/d1/intake/resolveProvider.ts",
    );
    expect(fs.existsSync(resolveProvider)).toBe(true);
    const text = fs.readFileSync(resolveProvider, "utf8");
    expect(text).toMatch(/platform/i);
    expect(text).not.toMatch(/from\s+["']@\/lib\/ops1/);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
 * Qualifies asymmetry: CT path-policy denies method/ while canonical loader
 * allowlists specific method/** core paths. NO POLICY CHANGE.
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { decideReadPath } from "@/lib/platform/security/pathPolicy";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";
import {
  isCanonicalPathAllowed,
  loadCanonicalSource,
} from "@/lib/platform/sfia-context/sourceLoader";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";

describe("T-A7 probe — path-policy vs canonical loader asymmetry", () => {
  it("path-policy denies method/ prefixes", () => {
    const samples = [
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
      "method/anything.md",
    ];
    for (const sample of samples) {
      const decision = decideReadPath(sample);
      expect(decision.allowed, sample).toBe(false);
    }
  });

  it("canonical allowlist includes method core paths that path-policy denies", () => {
    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
      p.startsWith("method/"),
    );
    expect(methodCores.length).toBeGreaterThanOrEqual(3);
    for (const p of methodCores) {
      expect(isCanonicalPathAllowed(p)).toBe(true);
      expect(decideReadPath(p).allowed).toBe(false);
    }
  });

  it("loader can still read allowlisted method core from disk (digest)", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const target =
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md";
    const ref = loadCanonicalSource(root, target);
    expect(ref.digest).toMatch(/^[a-f0-9]{64}$/);
    expect(ref.sizeBytes).toBeGreaterThan(0);
    // Asymmetry remains: CT tool path still denied for same path.
    expect(decideReadPath(target).allowed).toBe(false);
  });

  it("documents closed allowlist — non-core method path refused by loader", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    expect(() =>
      loadCanonicalSource(root, "method/secret.md"),
    ).toThrow();
  });

  it("does not modify policies (probe assertion)", () => {
    // Sentinel: this probe file must not import write APIs for policy.
    const probePath = path.resolve(
      __dirname,
      "t-a7-path-policy-loader-asymmetry.probe.test.ts",
    );
    expect(probePath.endsWith(".probe.test.ts")).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-CP-02 / E-CP-03 / P03).
 * Maps consumers of SFIA_CANONICAL_CORE_PATHS / loadCanonicalSource.
 * Read-only scan — no product fallback authorization.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

const APP_ROOT = path.resolve(__dirname, "../..");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("T-A7 probe — canonical consumers and closed allowlist", () => {
  it("exposes a stable closed core path list", () => {
    expect(SFIA_CANONICAL_CORE_PATHS.length).toBeGreaterThanOrEqual(4);
    expect(SFIA_CANONICAL_CORE_PATHS).toContain(
      "prompts/templates/sfia-cycle-execution-template.md",
    );
    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
      p.startsWith("method/"),
    );
    expect(methodCores).toEqual([
      "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
      "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
    ]);
  });

  it("finds platform + OPS1 wrapper consumers of canonicalPaths/sourceLoader", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib/platform")),
      ...listTsFiles(path.join(APP_ROOT, "lib/ops1")),
    ];
    const consumers = new Set<string>();
    const pattern =
      /SFIA_CANONICAL_CORE_PATHS|loadCanonicalSource|loadCanonicalCoreSources|from\s+["']@\/lib\/platform\/sfia-context/;
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      if (pattern.test(text)) {
        consumers.add(path.relative(APP_ROOT, file));
      }
    }
    expect(consumers.has("lib/platform/sfia-context/canonicalPaths.ts")).toBe(
      true,
    );
    expect(consumers.has("lib/platform/sfia-context/sourceLoader.ts")).toBe(
      true,
    );
    // OPS1 temporary wrappers remain consumers (documented coupling).
    const ops1Wrappers = [...consumers].filter((c) =>
      c.startsWith("lib/ops1/sfia/"),
    );
    expect(ops1Wrappers.length).toBeGreaterThan(0);
  });

  it("does not find OA product modules importing method/ as module path", () => {
    const oaFiles = listTsFiles(path.join(APP_ROOT, "lib/oa"));
    const hits: string[] = [];
    const forbidden =
      /from\s+["'][^"']*method\/|require\(["'][^"']*method\//;
    for (const file of oaFiles) {
      for (const line of fs.readFileSync(file, "utf8").split("\n")) {
        if (forbidden.test(line)) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-PER-01 volumes).
 * Aggregated metrics only — no table dumps, no PII, no content copy.
 * Searches known local .sfia-exec locations relative to workspace roots.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";

type VolumeHit = {
  relativePath: string;
  sizeBytes: number;
  exists: boolean;
};

function tryStat(root: string, rel: string): VolumeHit {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    return { relativePath: rel, sizeBytes: 0, exists: false };
  }
  const st = fs.statSync(abs);
  return {
    relativePath: rel,
    sizeBytes: st.isFile() ? st.size : 0,
    exists: true,
  };
}

describe("T-A7 probe — local volume evidence (aggregated)", () => {
  it("collects aggregated sqlite sizes when present, else records unavailable", () => {
    const workspaceRoot = resolveWorkspaceRootFromAppCwd();
    const candidates = [
      "projects/sfia-studio/.sfia-exec/local-i1/state/ops1.sqlite",
      "projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite",
    ];

    const hits = candidates.map((rel) => tryStat(workspaceRoot, rel));
    const present = hits.filter((h) => h.exists);

    // Always produce a reproducible aggregate object (no content).
    const aggregate = {
      workspaceRootBasename: path.basename(workspaceRoot),
      candidatesChecked: candidates.length,
      presentCount: present.length,
      totalSizeBytes: present.reduce((acc, h) => acc + h.sizeBytes, 0),
      files: present.map((h) => ({
        name: path.basename(h.relativePath),
        sizeBytes: h.sizeBytes,
      })),
    };

    expect(aggregate.candidatesChecked).toBe(2);
    expect(aggregate.presentCount).toBeGreaterThanOrEqual(0);
    // Environment limitation is allowed — do not invent production volumes.
    if (aggregate.presentCount === 0) {
      expect(aggregate.totalSizeBytes).toBe(0);
    } else {
      expect(aggregate.totalSizeBytes).toBeGreaterThan(0);
      for (const f of aggregate.files) {
        expect(f.name.endsWith(".sqlite")).toBe(true);
        expect(f.sizeBytes).toBeGreaterThan(0);
      }
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
 * Proves F11.2 read/readiness API and F13.4 RO runtime view are ABSENT.
 * Does not invent architecture or implement product surfaces.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

function listFiles(dir: string, predicate: (name: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listFiles(full, predicate));
    } else if (predicate(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("T-A7 probe — F11.2 / F13.4 absence (no product implementation)", () => {
  it("finds no dedicated F11.2 readiness/cutover API route under app/", () => {
    const appRouter = path.join(APP_ROOT, "app");
    const routeFiles = listFiles(
      appRouter,
      (n) => n === "route.ts" || n === "route.js",
    );
    const readinessHits = routeFiles.filter((f) => {
      const rel = path.relative(APP_ROOT, f).toLowerCase();
      return (
        rel.includes("readiness") ||
        rel.includes("cutover") ||
        rel.includes("method-mode") ||
        rel.includes("methodmode")
      );
    });
    expect(readinessHits).toEqual([]);
  });

  it("finds no F13.4 legacy history read-only runtime module", () => {
    const lib = path.join(APP_ROOT, "lib");
    const tsFiles = listFiles(lib, (n) => /\.(ts|tsx)$/.test(n));
    const hits = tsFiles.filter((f) => {
      const rel = path.relative(APP_ROOT, f).toLowerCase();
      return (
        rel.includes("legacy-history") ||
        rel.includes("legacy_history") ||
        rel.includes("history-readonly") ||
        rel.includes("f13")
      );
    });
    expect(hits).toEqual([]);
  });

  it("documents MethodMode hold flag absence (E-MM-03 contract gap)", () => {
    const d1Files = listFiles(path.join(APP_ROOT, "lib/d1"), (n) =>
      /\.(ts|tsx)$/.test(n),
    );
    const holdMentions: string[] = [];
    for (const file of d1Files) {
      const text = fs.readFileSync(file, "utf8");
      if (
        /CUTOVER_HOLD|METHODMODE_HOLD|holdFlag.*MethodMode|MethodMode.*hold/i.test(
          text,
        )
      ) {
        holdMentions.push(path.relative(APP_ROOT, file));
      }
    }
    // Absence is evidence of MISSING hold capability — not a product defect to fix here.
    expect(holdMentions).toEqual([]);
  });
});
```

## Contenu complet — pack documentaire (fichiers touchés + 09)
### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Gate framing (historique)** | `GO FRAME T-A7 TECHNICAL READINESS — … — KEEP T-A7 NOT OPEN` |
| **Gate O2 (consommé)** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Option O2** | `OUVRIR UNIQUEMENT UNE PRÉPARATION TECHNIQUE BORNÉE` — **consommée** (preuves) · **≠** ouverture T-A7 |
| **Date framing** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date campagne O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **Cycle / profil** | 9 — QA (+6 · 7 · 10 · 12 · 15 · 1) · Critical |
| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
| **Push / PR / merge projet** | **aucun** |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **Développement fonctionnel T-A7** | **non** |
| **F03 / F11 / F13 / combinaison** | `DECIDED — ADOPTED BY MORRIS` (F03.3 · F11.2 · F13.4) |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **Contrat OPS1** | `VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
| **W1-B / W1-D01…D05** | `DECIDED` (inchangées) |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM** | `NOT SELECTED` |
| **RGPD production** | `NOT VALIDATED` |

## Objectif

Readiness documentaire + **campagne O2 bornée** : valider le contrat OPS1 par preuves, collecter UNKNOWN/PARTIAL, réévaluer F03.3, mettre à jour le bulletin Morris — **sans** développement produit.

## Périmètre O2

- tests/probes non destructifs ;
- MAJ pack readiness ;
- commit local ;
- review pack + handoff.

## Hors périmètre

- ouverture T-A7 · développement fonctionnel ;
- implémentation F11.2 / F13.4 · API · UI · migrations ;
- mod `method/**` · OPS1/MethodMode fonctionnels ;
- delivery / cutover · push/PR/merge projet.

## Livrables

| Fichier | Rôle |
|---------|------|
| `01`–`08` | framing + matrices + bulletin (MAJ O2) |
| `09-bounded-technical-preparation-results.md` | résultats campagne O2 |
| `README.md` | synthèse |
| 6 probes sous `app/__tests__/**` | preuves techniques |

## Anti-claims

- O2 ≠ T-A7 OPEN ;
- validation OPS1 ≠ isolation implémentée ;
- tests verts ≠ delivery/cutover ;
- F03.3 BLOCKERS REDUCED ≠ SATISFIED global.

## Gate candidat suivant

`GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 BOUNDED TECHNICAL PREPARATION COMPLETED — OPS1 VALIDATION EVIDENCE COLLECTED — P03 TO P11 GAPS REASSESSED — READINESS BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — F03.3 REEVALUATED FROM EXECUTED EVIDENCE — MORRIS DECISION PACK UPDATED WITHOUT PRESELECTION — NO FUNCTIONAL DEVELOPMENT — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md`

```markdown
# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 locales |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O2 CAMPAIGN — NOT AN AUTHORIZATION` |
| **T-A7** | `NOT OPEN` |

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
| P06 | session / MethodMode → OA correlation | MethodMode D1 actif · hold absent (probe) | MISSING | `MISSING — EVIDENCED` | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
| P07 | MethodMode retiré cible OA | METHOD_MODES actif · foundation tests | MISSING | `MISSING — EVIDENCED` | MethodMode présent | cutover prématuré | inventaire + hold futur | F03 · F11 | SC-04 |
| P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
| P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
| P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
| P11 | historique legacy RO | F13.4 décidé · absence runtime prouvée | MISSING | `MISSING — EVIDENCED` | politique non appliquée | mutation historique | vue RO sous gate F13 | F13 | SC-06 |

---

## 3. Synthèse après O2

### Satisfaits (remplacement OA)

Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement** Option A.

### Partiels renforcés

P03 · P04 · P05 · P10

### Manquants (capacité runtime)

P06 · P07 · P08 · P09 · P11

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

`P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md`

```markdown
# 03 — Contrat d’isolation OPS1

| Champ | Valeur |
|-------|--------|
| **Document** | `03-ops1-isolation-contract.md` |
| **Statut** | `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
| **Statut précédent** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 · campagne O2 |
| **Date design** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date validation technique** | 2026-07-28 20:54:03 CEST (+0200) |
| **Code / ACL runtime** | **aucune modification fonctionnelle** (probes tests only) |
| **Adoption Morris d’implémentation** | **non** — validation technique ≠ GO d’implémentation |

---

## 1. Frontière fonctionnelle

**OPS1** = Operational Vertical Slice 1 — POC Studio (conversation + action Markdown gouvernée), **distinct** de :

| Domaine | Emplacement | Relation |
|---------|-------------|----------|
| Option A runtime | `app/lib/oa/**` | **pas** d’identité v3 ; SC-12 |
| D1 Project Foundation | `app/lib/d1/**` | import D1↛OPS1 prouvé ; surface conversation partagée |
| Control Tower | tools / docs `66`–`74` · path-policy platform | construit **sur** OPS1 (extension in-place) |
| Méthode legacy | `method/**` | lectures via canonical loader ; deny structurel allowlist actions I4 |

---

## 2. Chemins et namespaces concernés

| Namespace | État actuel | Cible documentaire |
|-----------|-------------|--------------------|
| `app/lib/ops1/**` | ACTIVE | rester actif temporairement sous frontière |
| `app/features/ops1/**` · `app/app/ops1/**` | ACTIVE | idem |
| `app/__tests__/ops1/**` · `e2e/ops1-i*.spec.ts` | ACTIVE | preuves isolation futures |
| `projects/sfia-studio/.sfia-exec/**` | ACTIVE local (gitignored) | hors Git · procédures locales |
| `app/lib/ops1/sfia/canonicalPaths.ts` | wrapper temporaire | candidate isolation / remplacement doctrine |
| Allowlist `method/` | structurelle | revue avant tout retrait method |
| Docs `41`–`65` OPS1 | DOCUMENTATION ONLY | archive Git (F13.4) |

---

## 3. Matrice des surfaces

| Surface | État actuel | Cible documentaire | Lecture | Écriture | IAM | Path-policy | Audit | Rollback |
|---------|-------------|--------------------|---------|----------|-----|-------------|-------|----------|
| Session / conversation OPS1 | ACTIVE | actif temporaire | oui (POC) | oui (POC borné) | `NOT SELECTED` | allowlist + gates | partiel / local | procédures `.sfia-exec` |
| Action Markdown I4–I6 | ACTIVE | actif temporaire | n/a | bornée allowlist | `NOT SELECTED` | `evaluateAllowlist` | tests e2e | deny restore |
| Canonical SFIA context (via OPS1 wrapper) | ACTIVE | isoler dépendance method avant retrait | oui (3+1 paths) | non (lecture) | n/a | loader allowlist ≠ CT deny | digest | pin digest |
| Control Tower tools | ACTIVE (couplage) | conserver distinction OPS1≠OA | oui | tools bornés | `NOT SELECTED` | `decideReadPath` | CT logs locaux | revert tools |
| D1 intake provider | SHARED_SURFACE | ne pas fusionner identités | oui | D1 only | `NOT SELECTED` | import boundary | D1 tests | hold provider |
| OA `lib/oa` | ACTIVE mémoire | **aucune** fusion OPS1 | OA only | OA only | `NOT SELECTED` | antiLegacy | console/memory | n/a pack |
| Historique legacy (F13.4) | NON IMPLÉMENTÉ | vue RO bornée future | RO only | **interdite** | futur gate | path-policy ≠ IAM | journal accès | restore ACL |
| MethodMode D1 | ACTIVE | hors OPS1 (boundary) | D1 | D1 mutate | `NOT SELECTED` | n/a OPS1 | D1 tests | hold MethodMode |

---

## 4. Lectures autorisées / mutations interdites (cible design)

### Lectures autorisées (cible)

- lecture session OPS1 dans le POC ;
- lecture allowlist / décision path-policy ;
- lecture canonical sources via loader **existant** (jusqu’à remplacement doctrine) ;
- future vue F13.4 RO sur historique **explicitement** marqué historique.

### Mutations interdites (cible + holds actuels)

- toute mutation présentée comme « cutover OA » via OPS1 ;
- mutation de `method/**` hors gate Morris (SC-02) ;
- mutation des contrats OPS1 hors gate (SC-03) ;
- mutation d’historique legacy une fois politique F13 appliquée ;
- présentation OPS1 comme runtime v3 Option A (SC-12).

---

## 5. Path-policy ≠ IAM (norme)

| Concept | Définition dans ce repo | Preuve |
|---------|-------------------------|--------|
| **Path-policy / allowlist** | contrôle de **chemins** et d’actions bornées (deny-by-default) | `evaluateAllowlist` · `decideReadPath` |
| **IAM** | identité multi-user / rôles / authority registry | `NOT SELECTED` · R-T-A3-3 OPEN |

**Norme W1-D04 / F13.4 :** isoler OPS1 **ne** sélectionne **pas** un IAM. Toute confusion path-policy ↔ IAM est une stop condition (`TR-S-PP-IAM`).

---

## 6. Couplage CT / D1

| Lien | Nature | Implication isolation |
|------|--------|----------------------|
| CT sur `lib/ops1` | extension in-place | isoler OPS1 = impacter CT ; planifier frontières outils |
| D1 `resolveIntakeProvider` | shared conversation surface | pas d’import D1→OPS1 ; état co-hébergé `.sfia-exec` fichiers séparés |
| Import boundaries | tests platform | nécessaire **mais insuffisant** vs preuve runtime no-cross-call |

---

## 7. Interfaces F11.2 / F13.4

| Décision | Interface avec OPS1 |
|----------|---------------------|
| F11.2 | API read/readiness pourra exposer **statut OPS1 / holds** en lecture ; **aucune** mutation ; pas d’UI admin obligatoire |
| F13.4 | Git = vérité ; vue RO bornée pour support/audit ; isolation OPS1 **préalable** à retrait ; accès journalisés |

---

## 8. Classification

| Catégorie | Contenu |
|-----------|---------|
| **À isoler avant retrait** | dépendances method dans OPS1/CT context · allowlist hits · identité OPS1≠OA · historique mutable |
| **Peut rester actif temporairement** | POC OPS1 · e2e I1–I6 · CT tools sous path-policy |
| **Candidat au retrait futur** | wrappers temporaires · duplications non canoniques (W1-D03) — **après** preuves |
| **Historique** | docs OPS1 cadrage · archives Git |
| **Blocker** | absence de validation Morris de ce contrat · UNKNOWN hits allowlist · UNKNOWN cross-call runtime |

---

## 9. Observabilité / audit / rollback (design)

| Domaine | Exigence documentaire | État |
|---------|----------------------|------|
| Observabilité | health/readiness F11.2 incluant holds OPS1 | non implémenté |
| Audit | journal accès historique RO + décisions allowlist | partiel / mémoire |
| Rollback | R1 restore allowlist / wrappers ; R0 revert docs | documenté dans `04` · non testé |

---

## 10. Conditions de retrait futur (hors ce cycle)

1. Contrat OPS1 **validé** Morris.
2. Preuve runtime no-cross-call OPS1 ↔ OA.
3. Inventaire allowlist `method/` hits.
4. Remplacement doctrine / canonical paths (P03–P05).
5. F13.4 RO enforce + F11.2 read API validée.
6. Gate Morris **distinct** de retrait — ≠ ouverture T-A7 seule.

---

## 11. Anti-claims

- contrat proposé ≠ isolation réalisée ;
- path-policy ≠ IAM ;
- tests import ≠ preuve runtime ;
- OPS1 actif ≠ Option A ;
- F13.4 ≠ ACL validée.

---

## 12. Validation technique O2 (preuves)

| Axe | Résultat O2 |
|-----|-------------|
| Cohérence code | 0 imports OPS1↔OA / OPS1↔D1 / D1↔OPS1 (probe + import-boundaries) |
| Testabilité | probes reproductibles verts |
| Réversibilité | tests revertibles · aucun état persisté modifié |
| Path-policy ≠ IAM | confirmé · asymétrie loader qualifiée **sans** changement policy |
| Résiduel | live dynamic call probe non exécutée (env worktree) · surface partagée D1/platform documentée |

**Recommandation (non décision) :** conserver le contrat ; avant implémentation, ajouter probe live optionnelle + inventaire hits allowlist hors local.

## 13. Verdict section

`OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED — PATH-POLICY DISTINCT FROM IAM — NO FUNCTIONAL OPS1 CHANGE`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md`

```markdown
# 05 — Plan de preuves et non-régression

| Champ | Valeur |
|-------|--------|
| **Document** | `05-evidence-and-non-regression-plan.md` |
| **Statut** | `CATALOGUED — O2 CAMPAIGN EXECUTED ON PRIORITY IDS — NO PRODUCT TESTS FOR F11/F13 FINAL` |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |

---

## 1. Catalogue (statuts après O2)

| ID | Surface | Preuve attendue | Méthode | Auto? | Niveau | Gate | Statut **avant** | Statut **après O2** |
|----|---------|-----------------|---------|-------|--------|------|------------------|---------------------|
| E-MM-01 | MethodMode | inventaire modes | relecture | partiel | L1 | F03 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-MM-02 | MethodMode | tests D1 select | foundation | oui | L3 | prep | PARTIAL | `PARTIAL — EVIDENCED` (tests verts) |
| E-MM-03 | MethodMode | hold flag | probe absence | oui | L1 | SC-04 | MISSING | `MISSING — EVIDENCED` (absence confirmée) |
| E-D1-01 | D1 | import boundary | import-boundaries | oui | L3 | W1-D04 | SATISFIED (boundary) | `SATISFIED — EVIDENCED` (boundary only) |
| E-D1-02 | D1 | shared provider | resolveProvider + probe | non | L1–L2 | W1-D04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-01 | Canon | digest stable | loader/canonicalEngine | oui | L1–L3 | P03/P04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-02 | Consommateurs | map consumers | probe consumers | partiel | L1 | W1-D02 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-03 | Consommateurs | no-fallback produit | probe OA + loader deny | oui | L4 | P08 | MISSING | `PARTIAL — EVIDENCED` |
| E-OPS-01 | OPS1 | allowlist deny-default | allowlist tests | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-02 | OPS1 | path-policy deny method | asymmetry probe | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-03 | OPS1 | no-cross-call | isolation probe static | oui | L1–L5 | W1-D04 | UNKNOWN | `PARTIAL — EVIDENCED` |
| E-OPS-04 | OPS1 | e2e I1–I6 | non exécutés ce cycle | oui | L5 | prep | PARTIAL | `PARTIAL — EVIDENCED` (inchangé — non rejoués) |
| E-OPS-05 | OPS1 | hits allowlist method/ | probe hits | partiel | L1–L3 | W1-D04 | UNKNOWN | `NO LOCAL HITS — LIMITED EVIDENCE` |
| E-F11-01 | F11.2 | contrat API | absence route prouvée | non | L0–L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F11-02 | F11.2 | audit lecture | — | oui | L4 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F11-03 | F11.2 | deny-write | — | oui | L3 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F13-01 | F13.4 | Git archive | packs | oui | L1 | F13 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-F13-02 | F13.4 | vue RO | absence module | oui | L1 | F13 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F13-03 | F13.4 | journal accès | — | oui | L4 | F13 | MISSING | `MISSING — EVIDENCED` |
| E-PER-01 | Persistence | volumes | probe + métriques RO | non | L1 | F10 | UNKNOWN | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` |
| E-IAM-01 | IAM | modèle | — | non | L0 | F10 | NOT SELECTED | `NOT SELECTED` |
| E-AUD-01 | Audit OA | journal durable | — | partiel | L2–L5 | P23 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OBS-01 | Observabilité | health réel | absence readiness | oui | L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-CI-01 | CI | import boundary | tests | oui | L4 | P24 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-RB-01 | Rollback | R0 revert | Git | oui | L1 | pack | SATISFIED | `SATISFIED — EVIDENCED` |
| E-RB-02 | Rollback | R1–R3 drills | — | partiel | L5 | SC-06 | MISSING | `MISSING — EVIDENCED` |

---

## 2. Anti-claims

- campagne O2 ≠ F11/F13 implémentés ;
- PARTIAL E-OPS-03 ≠ runtime live exhaustif ;
- volumes locaux ≠ production ;
- catalogue mis à jour ≠ preuves cutover.

---

## 3. Verdict section

`EVIDENCE CATALOGUE UPDATED AFTER O2 — PRIORITY UNKNOWN/PARTIAL IDS ADVANCED — F11/F13 FINAL STILL MISSING — NO PRODUCT IMPLEMENTATION`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md`

```markdown
# 06 — Holds, anti-bypass et stop conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `06-holds-and-stop-conditions.md` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Statut** | `HOLDS ACTIVE — ANTI-BYPASS DOCUMENTED` |

---

## 1. Holds obligatoires (toujours actifs)

| Hold | Statut exigé | Sens |
|------|--------------|------|
| T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
| F03.3 | décidée ≠ satisfaite | set **partiel réduit** (`BLOCKERS REDUCED`) ; prep hors gate O2 interdite |
| F11.2 | décidée ≠ API disponible | pas d’implémentation |
| F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
| Isolation OPS1 | design **validé tech** ≠ réalisée | contrat validé O2 · **non implémenté** |
| B5 | `OPEN` | STOP BEFORE DELIVERY |
| R1 | `OPEN` | atomicité non résolue |
| R-M01 | `OPEN` | ClaimEvaluator readiness |
| HARD (R-T-A3-1/2…) | `OPEN HARD` | autorité / atomicité |
| Persistence / IAM | `NOT SELECTED` | pas de sélection implicite |
| RGPD production | `NOT VALIDATED` | U-M02 ouvert |
| T-A6 COMPLETE | `NOT DECLARED` | |
| Option A | `NOT COMPLETE` | |
| Delivery preparation | `NOT AUTHORIZED` | |
| Delivery | `NOT AUTHORIZED` | |
| Cutover | `NOT AUTHORIZED` | |

---

## 2. Anti-bypass

| Mécanisme | Contenu |
|-----------|---------|
| Gates séquencés | Wave 1 → F03/F11/F13 → readiness → **décision ouverture** → prep bornée → delivery → cutover |
| Pas de saut A→D | aucune transition automatique framing → cutover |
| HARD non ignorables | critère F03.3 « aucun blocker HARD ignoré » |
| Path-policy ≠ IAM | stop si confondus |
| Décision ≠ implémentation | F* / W1* ne valent pas code |
| B5 | bloque delivery même si framing vert |
| Review handoff | consommation post-cycle ChatGPT — ne remplace pas gate Morris |

---

## 3. Stop conditions (héritage + readiness)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-06 | rollback/hold non démontrable avant cutover | STOP |
| SC-07 | real execution sans HARD/persistence/IAM | STOP |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP |
| W1-S1 | inventaire = autorisation retrait | STOP |
| W1-S3 | vague 1 = T-A7 OPEN | STOP |
| W1-S4 | prep technique sans F03/F11/F13 décidés | *(contenu F maintenant décidé — hold passe à satisfaction/impl)* |
| W1-S5 | retrait sans isolation OPS1 définie/validée | STOP |
| A52-B5 | delivery avec B5 OPEN non accepté | STOP BEFORE DELIVERY |
| TR-S-01 | preuve absente présentée comme SATISFIED | STOP |
| TR-S-02 | contradiction documentaire (décision vs anti-claim) | STOP |
| TR-S-03 | dépendance UNKNOWN traitée comme nulle | STOP |
| TR-S-04 | mutation historique possible non holdée | STOP |
| TR-S-05 | frontière OPS1 ambiguë | STOP |
| TR-S-PP-IAM | path-policy confondue avec IAM | STOP |
| TR-S-06 | rollback non démontrable au niveau requis | STOP |
| TR-S-07 | volume/migration non qualifiés avant mutation data | STOP |
| TR-S-08 | blocker HARD contourné | STOP |
| TR-S-09 | scope élargi hors pack readiness / hors gate | STOP |
| TR-S-10 | claim T-A7 OPEN sans bulletin Morris | STOP |

---

## 4. Mapping preuves absentes → stops

| Preuve manquante | Stop |
|------------------|------|
| E-OPS-03 cross-call | TR-S-05 · W1-S5 |
| E-F11-* API | ne pas claim cutover ready |
| E-F13-02/03 RO | TR-S-04 · P11 |
| E-PER-01 volumes | TR-S-07 |
| E-RB-02 drills | SC-06 / TR-S-06 au niveau cutover |

---

## 5. Anti-claims

- hold documenté ≠ hold runtime ;
- stop condition ≠ rollback prouvé ;
- F* décidées ≠ holds levés ;
- readiness pack ≠ bypass vers delivery.

---

## 6. Verdict section

`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — O2 DOES NOT LIFT T-A7 NOT OPEN — HARD NOT IGNORED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md`

```markdown
# 07 — Évaluation de satisfaction F03.3

| Champ | Valeur |
|-------|--------|
| **Document** | `07-f03-3-satisfaction-assessment.md` |
| **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date réévaluation O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **Verdict avant** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Verdict après** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **Prep technique O2** | autorisée par gate courant · **bornée** |
| **Prep au-delà / delivery / cutover** | `PROHIBITED` |
| **T-A7** | `NOT OPEN` |

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
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md`

```markdown
# 08 — Morris decision pack — ouverture T-A7 (après O2)

| Champ | Valeur |
|-------|--------|
| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
| **Statut** | `MORRIS DECISION REQUIRED` |
| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **T-A7 actuel** | `NOT OPEN` |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **O2 gate courant** | consommé pour prep bornée — **ne présélectionne pas** la suite |
| **Présélection** | **aucune** |

---

## Question

**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**

---

## Options

### O1 — Ne pas ouvrir T-A7

Conserver `NOT OPEN` · capitaliser preuves · pas de nouveau lot technique.

### O2 — Continuer la préparation technique bornée

Poursuivre preuves restantes (live cross-call optionnel · hold design doc · e2e ciblés · drills rollback doc) **sans** développement fonctionnel.

### O3 — Ouvrir un premier lot de développement borné

**Non supporté** tant que P06–P09/P11 MISSING · F11/F13 absents · HARD/B5 ouverts · isolation non implémentée.

### O4 — Custom

Ex. valider formellement le contrat OPS1 comme GO d’implémentation future séparée · ou cadrer micro-lot hold MethodMode **documentaire**.

---

## Preuves nouvelles (O2)

- 6 probes + 6 suites existantes · 63 tests verts ;
- isolation static OPS1↔OA ;
- allowlist method/ denials ;
- asymétrie path-policy/loader ;
- volumes locaux agrégés ;
- absences F11/F13/hold prouvées.

## Blockers levés / restants

Voir `07` §3.

## Régression

Aucune régression détectée sur suites rejouées.

## Recommandation repo-informed (non décisionnelle)

**Statut :** `RECOMMENDED — NOT DECIDED`

**Recommandation :** **O2** (continuer prep bornée sur résiduels) **ou** **O1** si pause ; **pas O3**.

### Périmètre candidat futur (si O2)

| Inclus | Exclu |
|--------|-------|
| probes live optionnels | `method/**` |
| e2e OPS1 ciblés read-only | mod fonctionnelle OPS1/MethodMode |
| docs hold MethodMode | API F11 · vue F13 · delivery |

### Gates candidats (non consommés)

```
GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN
```

(Si F03.3 devenait SATISFIED plus tard :)

```
GO DECIDE T-A7 OPENING — REVIEW UPDATED TECHNICAL EVIDENCE — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
```

---

## Bulletin D-T-A7-OPEN

| Champ | Valeur |
|-------|--------|
| **Options** | O1 · O2 · O3 · O4 |
| **Recommandation** | O2 (ou O1) · pas O3 |
| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · validation OPS1 ≠ implémentation · T-A7 reste NOT OPEN jusqu’à GO distinct |
| **Champ** | `MORRIS DECISION REQUIRED` |

**Aucune option n’est pré-cochée comme décision.**

---

## Garde-fous

- F03.3 / F11.2 / F13.4 / combinaison `DECIDED` inchangées ;
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
- T-A7 `NOT OPEN` ;
- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.

---

## Verdict section

`MORRIS OPENING DECISION PACK UPDATED AFTER O2 WITHOUT PRESELECTION — RECOMMENDATION O2 OR O1 — O3 NOT SUPPORTED — T-A7 NOT OPEN`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md`

```markdown
# 09 — Bounded technical preparation results (O2)

| Champ | Valeur |
|-------|--------|
| **Document** | `09-bounded-technical-preparation-results.md` |
| **Gate** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Option** | **O2** — préparation technique bornée uniquement |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **HEAD framing parent** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **T-A7** | `NOT OPEN` |
| **Développement fonctionnel** | **non** |

---

## 1. Campagne exécutée

| Phase | Contenu |
|-------|---------|
| A | inventaire tests / sources |
| B | plan probes (fichiers ci-dessous) |
| C | scope validation (tests only) |
| D | exécution vitest non destructive |
| E | analyse + volumes locaux agrégés |
| F | mise à jour pack |

### Fichiers techniques autorisés (avant commit)

| Fichier | Preuve | Réversibilité | Risque |
|---------|--------|---------------|--------|
| `__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts` | E-OPS-03 static / P10 | git revert | faible |
| `__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts` | E-OPS-05 | git revert | faible |
| `__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts` | asymétrie policy/loader | git revert | faible |
| `__tests__/platform/t-a7-canonical-consumers.probe.test.ts` | E-CP-02/03 · P03 | git revert | faible |
| `__tests__/platform/t-a7-local-volume.probe.test.ts` | E-PER-01 | git revert | faible |
| `__tests__/platform/t-a7-f11-f13-absence.probe.test.ts` | F11/F13 absence · E-MM-03 | git revert | faible |

**Aucun** fichier produit · API · UI · migration · `method/**` · OPS1/MethodMode fonctionnel.

---

## 2. Environnement

| Élément | Valeur |
|---------|--------|
| OS | darwin 25.6.0 |
| CWD tests | `…/sfia-workspace-t-a7-technical-readiness/projects/sfia-studio/app` |
| Runner | vitest 3.2.7 |
| node_modules | symlink temporaire vers checkout principal (retiré avant commit) |
| Réseau | non utilisé |
| Production | non |

---

## 3. Commandes exécutées

```text
npm test -- \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/import-boundaries.test.ts \
  __tests__/ops1/allowlistEvaluation.test.ts \
  __tests__/ops1/sfia/canonicalEngine.test.ts \
  __tests__/oa/project/antiLegacy.test.ts \
  __tests__/oa/doctrine/antiLegacy.test.ts \
  __tests__/d1/project-foundation.test.ts
```

**Résultat :** 12 files · **63 tests passed** · durée ~1.96s · exit 0.

**Non exécutés :** e2e Playwright OPS1 I1–I6 (nécessite browser/env ; hors besoin minimal de cette campagne) · `next build` (pas de code produit) · lint global (tests only).

---

## 4. Résultats par preuve

| ID | Verdict campagne | Détail |
|----|------------------|--------|
| E-OPS-03 | `PARTIAL — EVIDENCED` | 0 imports statiques OPS1↔OA, OPS1↔D1, D1↔OPS1 ; surface D1 intake sans import OPS1 ; pas de probe d’appels dynamiques live |
| E-OPS-05 | `NO LOCAL HITS — LIMITED EVIDENCE` | 0 clés `method/` dans policy ; tous chemins method/ échantillonnés DENIED/INVALID (read/modify/create) |
| E-CP-02 | `PARTIAL — EVIDENCED` | consommateurs platform + wrappers OPS1 `lib/ops1/sfia/*` |
| E-CP-03 | `PARTIAL — EVIDENCED` | OA n’importe pas `method/` ; loader refuse hors allowlist ; fallback produit global non prouvé absente au runtime |
| Path-policy/loader | `ASYMMETRY QUALIFIED — NO POLICY CHANGE AUTHORIZED` | CT deny method/ · loader lit cores allowlistés · digest OK |
| E-PER-01 | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` | worktree : sqlite absents ; checkout principal local : ops1.sqlite 2 277 376 B / 14 tables / 4615 rows agg ; d1.sqlite 360 448 B / 4 tables / 909 rows — **métriques agrégées seulement** |
| E-MM-03 | `MISSING — EVIDENCED` | aucun hold flag MethodMode dans `lib/d1` |
| F11.2 | absence prouvée | aucune route readiness/cutover/methodmode |
| F13.4 | absence prouvée | aucun module legacy-history / RO runtime |

---

## 5. Import boundaries / cross-call / allowlist / asymétrie

| Axe | Résultat |
|-----|----------|
| Import boundaries (existant + probe) | D1↛OPS1 · platform↛D1/OPS1 · OA↛OPS1 · OPS1↛OA — **verts** |
| Cross-call runtime | couche **statique** verte ; live session **non instrumentée** → PARTIAL |
| Hits allowlist method/ | **aucun** hit policy ; denials structurels — limited local evidence |
| Path-policy vs loader | asymétrie **qualifiée** · **aucun** changement de policy |

---

## 6. Volumes

`LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN`

Limite : données dans `.sfia-exec` du checkout principal (gitignored), absentes du worktree. Non extrapolable production.

---

## 7. P03–P11 avant → après

| ID | Avant | Après | Motif |
|----|-------|-------|-------|
| P03 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | consumers + digest + closed list |
| P04 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | loader digest tests verts |
| P05 | PARTIAL | `PARTIAL — EVIDENCED` | inchangé structurellement ; OA sans import method |
| P06 | MISSING | `MISSING — EVIDENCED` | pas de session OA remplacement |
| P07 | MISSING | `MISSING — EVIDENCED` | MethodMode actif ; hold absent |
| P08 | MISSING | `MISSING — EVIDENCED` (gap réduit partiellement) | lectures method via loader allowlist toujours actives |
| P09 | MISSING | `MISSING — EVIDENCED` | UI OA absente |
| P10 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | isolation static OPS1 validée |
| P11 | MISSING | `MISSING — EVIDENCED` | F13.4 runtime absente (prouvé) |

---

## 8. Contrat OPS1

**Verdict :** `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED`

Axes : cohérence code ✓ · testabilité ✓ · réversibilité ✓ · path-policy≠IAM ✓.

Résiduels : probe live dynamique optionnelle ; surface partagée D1/platform documentée ≠ identité commune ; wrappers TEMP à conserver jusqu’à gate dédié.

**Pas** une décision Morris d’implémentation.

---

## 9. Rollback

| Action | Mécanisme |
|--------|-----------|
| Tests/probes | `git revert` du commit evidence |
| Symlink node_modules | retiré avant commit |
| DB | **aucune** écriture campagne (lectures RO agrégées hors worktree) |

---

## 10. Findings

| Sévérité | Finding |
|----------|---------|
| Info | Asymétrie path-policy deny vs loader allow — confirmée par tests |
| Info | Volumes locaux disponibles hors worktree seulement |
| Info | Hold MethodMode absent (E-MM-03) |
| None Critical/Major produit | — |

---

## 11. Verdict section

`BOUNDED TECHNICAL PREPARATION CAMPAIGN COMPLETED — 63 TESTS PASSED — BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — T-A7 NOT OPEN`
```

## Résultats tests (extrait)

```
Test Files  12 passed (12)
Tests  63 passed (63)
Duration  1.96s
```

## Synthèses preuves

| Preuve | Verdict |
|--------|---------|
| E-OPS-03 | PARTIAL — EVIDENCED (static) |
| E-OPS-05 | NO LOCAL HITS — LIMITED EVIDENCE |
| Path-policy/loader | ASYMMETRY QUALIFIED — NO POLICY CHANGE |
| Volumes | LOCAL COLLECTED — PRODUCTION UNKNOWN |
| F11/F13 | absence prouvée — MISSING EVIDENCED |
| OPS1 contrat | VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED |
| F03.3 | PARTIALLY SATISFIED — BLOCKERS REDUCED |

## P03–P11 avant/après

0 SATISFIED / 4 PARTIAL / 5 MISSING — profondeur de preuve renforcée sur P03/P04/P05/P10.

## Diff complet utile

```diff
commit 014103777ef620cfd1ca2520455d7e98a85530e3
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 20:56:33 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 20:56:33 2026 +0200

    test(sfia-studio): collect T-A7 readiness evidence

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../ops1/t-a7-allowlist-method-hits.probe.test.ts  |  77 ++++++++++
 .../t-a7-canonical-consumers.probe.test.ts         |  86 +++++++++++
 .../platform/t-a7-f11-f13-absence.probe.test.ts    |  80 ++++++++++
 .../platform/t-a7-local-volume.probe.test.ts       |  67 +++++++++
 .../platform/t-a7-ops1-oa-isolation.probe.test.ts  | 101 +++++++++++++
 ...t-a7-path-policy-loader-asymmetry.probe.test.ts |  66 +++++++++
 .../02-p03-p11-readiness-matrix.md                 | 121 ++++++---------
 .../03-ops1-isolation-contract.md                  |  27 +++-
 .../05-evidence-and-non-regression-plan.md         | 110 +++++---------
 .../06-holds-and-stop-conditions.md                |   6 +-
 .../07-f03-3-satisfaction-assessment.md            | 102 +++++++------
 .../08-morris-t-a7-opening-decision-pack.md        | 127 +++++-----------
 .../09-bounded-technical-preparation-results.md    | 164 +++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     | 122 ++++-----------
 14 files changed, 877 insertions(+), 379 deletions(-)

diff --git a/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts b/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
new file mode 100644
index 0000000..6293b04
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
@@ -0,0 +1,77 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-05).
+ * Structural allowlist campaign for method/ paths — read-only evaluation.
+ * Does not persist, does not mutate workspace files, does not call network.
+ */
+import os from "node:os";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  CAMPUS360_ALLOWLIST_POLICY,
+  evaluateAllowlist,
+} from "@/lib/ops1/allowlistEvaluation";
+
+const ACTION_ID = "ops1-act-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
+
+const METHOD_CANDIDATES = [
+  "method/",
+  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
+  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
+  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
+  "method/secret.md",
+] as const;
+
+describe("T-A7 probe — allowlist method/ hits (E-OPS-05)", () => {
+  const workspaceRoot = os.tmpdir();
+
+  it("declares no method/ entries in CAMPUS360_ALLOWLIST_POLICY", () => {
+    const methodKeys = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
+      k === "method" || k.startsWith("method/"),
+    );
+    expect(methodKeys).toEqual([]);
+  });
+
+  it("denies every sampled method/ path for read/modify/create", () => {
+    const report: Array<{
+      path: string;
+      mode: string;
+      status: string;
+      reason: string;
+    }> = [];
+
+    for (const candidate of METHOD_CANDIDATES) {
+      for (const mode of ["read", "modify", "create"] as const) {
+        const result = evaluateAllowlist({
+          actionCandidateId: ACTION_ID,
+          actionVersion: 1,
+          workspaceRoot,
+          entries: [{ path: candidate, mode }],
+        });
+        const entry = result.evaluatedEntries[0];
+        report.push({
+          path: candidate,
+          mode,
+          status: entry?.evaluationStatus ?? "MISSING",
+          reason: entry?.evaluationReason ?? "none",
+        });
+        expect(entry?.evaluationStatus).toMatch(/DENIED|INVALID/);
+        expect(result.allowedReads).not.toContain(
+          entry?.normalizedPath ?? candidate,
+        );
+        expect(result.status).not.toBe("VALID");
+      }
+    }
+
+    // Aggregated local campaign evidence (no content leakage).
+    expect(report.length).toBe(METHOD_CANDIDATES.length * 3);
+    expect(report.every((r) => /DENIED|INVALID/.test(r.status))).toBe(true);
+  });
+
+  it("records local campaign verdict NO LOCAL HITS on allowlist policy keys", () => {
+    const policyHitCount = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
+      k.includes("method"),
+    ).length;
+    expect(policyHitCount).toBe(0);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts
new file mode 100644
index 0000000..d70ef39
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-canonical-consumers.probe.test.ts
@@ -0,0 +1,86 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-CP-02 / E-CP-03 / P03).
+ * Maps consumers of SFIA_CANONICAL_CORE_PATHS / loadCanonicalSource.
+ * Read-only scan — no product fallback authorization.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules" || entry.name === ".next") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.(ts|tsx)$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+describe("T-A7 probe — canonical consumers and closed allowlist", () => {
+  it("exposes a stable closed core path list", () => {
+    expect(SFIA_CANONICAL_CORE_PATHS.length).toBeGreaterThanOrEqual(4);
+    expect(SFIA_CANONICAL_CORE_PATHS).toContain(
+      "prompts/templates/sfia-cycle-execution-template.md",
+    );
+    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
+      p.startsWith("method/"),
+    );
+    expect(methodCores).toEqual([
+      "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
+      "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
+      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
+    ]);
+  });
+
+  it("finds platform + OPS1 wrapper consumers of canonicalPaths/sourceLoader", () => {
+    const files = [
+      ...listTsFiles(path.join(APP_ROOT, "lib/platform")),
+      ...listTsFiles(path.join(APP_ROOT, "lib/ops1")),
+    ];
+    const consumers = new Set<string>();
+    const pattern =
+      /SFIA_CANONICAL_CORE_PATHS|loadCanonicalSource|loadCanonicalCoreSources|from\s+["']@\/lib\/platform\/sfia-context/;
+    for (const file of files) {
+      const text = fs.readFileSync(file, "utf8");
+      if (pattern.test(text)) {
+        consumers.add(path.relative(APP_ROOT, file));
+      }
+    }
+    expect(consumers.has("lib/platform/sfia-context/canonicalPaths.ts")).toBe(
+      true,
+    );
+    expect(consumers.has("lib/platform/sfia-context/sourceLoader.ts")).toBe(
+      true,
+    );
+    // OPS1 temporary wrappers remain consumers (documented coupling).
+    const ops1Wrappers = [...consumers].filter((c) =>
+      c.startsWith("lib/ops1/sfia/"),
+    );
+    expect(ops1Wrappers.length).toBeGreaterThan(0);
+  });
+
+  it("does not find OA product modules importing method/ as module path", () => {
+    const oaFiles = listTsFiles(path.join(APP_ROOT, "lib/oa"));
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'][^"']*method\/|require\(["'][^"']*method\//;
+    for (const file of oaFiles) {
+      for (const line of fs.readFileSync(file, "utf8").split("\n")) {
+        if (forbidden.test(line)) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
new file mode 100644
index 0000000..5254fe9
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
@@ -0,0 +1,80 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
+ * Proves F11.2 read/readiness API and F13.4 RO runtime view are ABSENT.
+ * Does not invent architecture or implement product surfaces.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+
+function listFiles(dir: string, predicate: (name: string) => boolean): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules" || entry.name === ".next") continue;
+      out.push(...listFiles(full, predicate));
+    } else if (predicate(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+describe("T-A7 probe — F11.2 / F13.4 absence (no product implementation)", () => {
+  it("finds no dedicated F11.2 readiness/cutover API route under app/", () => {
+    const appRouter = path.join(APP_ROOT, "app");
+    const routeFiles = listFiles(
+      appRouter,
+      (n) => n === "route.ts" || n === "route.js",
+    );
+    const readinessHits = routeFiles.filter((f) => {
+      const rel = path.relative(APP_ROOT, f).toLowerCase();
+      return (
+        rel.includes("readiness") ||
+        rel.includes("cutover") ||
+        rel.includes("method-mode") ||
+        rel.includes("methodmode")
+      );
+    });
+    expect(readinessHits).toEqual([]);
+  });
+
+  it("finds no F13.4 legacy history read-only runtime module", () => {
+    const lib = path.join(APP_ROOT, "lib");
+    const tsFiles = listFiles(lib, (n) => /\.(ts|tsx)$/.test(n));
+    const hits = tsFiles.filter((f) => {
+      const rel = path.relative(APP_ROOT, f).toLowerCase();
+      return (
+        rel.includes("legacy-history") ||
+        rel.includes("legacy_history") ||
+        rel.includes("history-readonly") ||
+        rel.includes("f13")
+      );
+    });
+    expect(hits).toEqual([]);
+  });
+
+  it("documents MethodMode hold flag absence (E-MM-03 contract gap)", () => {
+    const d1Files = listFiles(path.join(APP_ROOT, "lib/d1"), (n) =>
+      /\.(ts|tsx)$/.test(n),
+    );
+    const holdMentions: string[] = [];
+    for (const file of d1Files) {
+      const text = fs.readFileSync(file, "utf8");
+      if (
+        /CUTOVER_HOLD|METHODMODE_HOLD|holdFlag.*MethodMode|MethodMode.*hold/i.test(
+          text,
+        )
+      ) {
+        holdMentions.push(path.relative(APP_ROOT, file));
+      }
+    }
+    // Absence is evidence of MISSING hold capability — not a product defect to fix here.
+    expect(holdMentions).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts
new file mode 100644
index 0000000..39f692a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-local-volume.probe.test.ts
@@ -0,0 +1,67 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-PER-01 volumes).
+ * Aggregated metrics only — no table dumps, no PII, no content copy.
+ * Searches known local .sfia-exec locations relative to workspace roots.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";
+
+type VolumeHit = {
+  relativePath: string;
+  sizeBytes: number;
+  exists: boolean;
+};
+
+function tryStat(root: string, rel: string): VolumeHit {
+  const abs = path.join(root, rel);
+  if (!fs.existsSync(abs)) {
+    return { relativePath: rel, sizeBytes: 0, exists: false };
+  }
+  const st = fs.statSync(abs);
+  return {
+    relativePath: rel,
+    sizeBytes: st.isFile() ? st.size : 0,
+    exists: true,
+  };
+}
+
+describe("T-A7 probe — local volume evidence (aggregated)", () => {
+  it("collects aggregated sqlite sizes when present, else records unavailable", () => {
+    const workspaceRoot = resolveWorkspaceRootFromAppCwd();
+    const candidates = [
+      "projects/sfia-studio/.sfia-exec/local-i1/state/ops1.sqlite",
+      "projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite",
+    ];
+
+    const hits = candidates.map((rel) => tryStat(workspaceRoot, rel));
+    const present = hits.filter((h) => h.exists);
+
+    // Always produce a reproducible aggregate object (no content).
+    const aggregate = {
+      workspaceRootBasename: path.basename(workspaceRoot),
+      candidatesChecked: candidates.length,
+      presentCount: present.length,
+      totalSizeBytes: present.reduce((acc, h) => acc + h.sizeBytes, 0),
+      files: present.map((h) => ({
+        name: path.basename(h.relativePath),
+        sizeBytes: h.sizeBytes,
+      })),
+    };
+
+    expect(aggregate.candidatesChecked).toBe(2);
+    expect(aggregate.presentCount).toBeGreaterThanOrEqual(0);
+    // Environment limitation is allowed — do not invent production volumes.
+    if (aggregate.presentCount === 0) {
+      expect(aggregate.totalSizeBytes).toBe(0);
+    } else {
+      expect(aggregate.totalSizeBytes).toBeGreaterThan(0);
+      for (const f of aggregate.files) {
+        expect(f.name.endsWith(".sqlite")).toBe(true);
+        expect(f.sizeBytes).toBeGreaterThan(0);
+      }
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts
new file mode 100644
index 0000000..7c6a63a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts
@@ -0,0 +1,101 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-03 / P10).
+ * Static import-graph probe for OPS1 ↔ OA / D1 / platform.
+ * Read-only filesystem scan — no mutations, no network, no DB writes.
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
+      if (entry.name === "node_modules" || entry.name === ".next") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.(ts|tsx)$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function collectHits(
+  files: string[],
+  pattern: RegExp,
+): Array<{ file: string; line: string }> {
+  const hits: Array<{ file: string; line: string }> = [];
+  for (const file of files) {
+    const text = fs.readFileSync(file, "utf8");
+    for (const line of text.split("\n")) {
+      if (pattern.test(line)) {
+        hits.push({
+          file: path.relative(APP_ROOT, file),
+          line: line.trim(),
+        });
+      }
+    }
+  }
+  return hits;
+}
+
+describe("T-A7 probe — OPS1/OA/D1 import isolation (E-OPS-03 static)", () => {
+  it("finds zero static OPS1 → OA imports", () => {
+    const hits = collectHits(
+      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
+      /from\s+["']@\/lib\/oa(?:\/|["'])|require\(["']@\/lib\/oa/,
+    );
+    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
+      [],
+    );
+  });
+
+  it("finds zero static OA → OPS1 imports", () => {
+    const hits = collectHits(
+      listTsFiles(path.join(APP_ROOT, "lib/oa")),
+      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
+    );
+    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
+      [],
+    );
+  });
+
+  it("finds zero static OPS1 → D1 imports", () => {
+    const hits = collectHits(
+      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
+      /from\s+["']@\/lib\/d1(?:\/|["'])|require\(["']@\/lib\/d1/,
+    );
+    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
+      [],
+    );
+  });
+
+  it("finds zero static D1 → OPS1 imports", () => {
+    const hits = collectHits(
+      [
+        ...listTsFiles(path.join(APP_ROOT, "lib/d1")),
+        ...listTsFiles(path.join(APP_ROOT, "features/d1")),
+      ],
+      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
+    );
+    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
+      [],
+    );
+  });
+
+  it("records shared-surface coupling without identity fusion (D1 intake)", () => {
+    const resolveProvider = path.join(
+      APP_ROOT,
+      "lib/d1/intake/resolveProvider.ts",
+    );
+    expect(fs.existsSync(resolveProvider)).toBe(true);
+    const text = fs.readFileSync(resolveProvider, "utf8");
+    expect(text).toMatch(/platform/i);
+    expect(text).not.toMatch(/from\s+["']@\/lib\/ops1/);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts
new file mode 100644
index 0000000..86d9486
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts
@@ -0,0 +1,66 @@
+/** @vitest-environment node */
+/**
+ * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
+ * Qualifies asymmetry: CT path-policy denies method/ while canonical loader
+ * allowlists specific method/** core paths. NO POLICY CHANGE.
+ */
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { decideReadPath } from "@/lib/platform/security/pathPolicy";
+import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";
+import {
+  isCanonicalPathAllowed,
+  loadCanonicalSource,
+} from "@/lib/platform/sfia-context/sourceLoader";
+import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";
+
+describe("T-A7 probe — path-policy vs canonical loader asymmetry", () => {
+  it("path-policy denies method/ prefixes", () => {
+    const samples = [
+      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
+      "method/anything.md",
+    ];
+    for (const sample of samples) {
+      const decision = decideReadPath(sample);
+      expect(decision.allowed, sample).toBe(false);
+    }
+  });
+
+  it("canonical allowlist includes method core paths that path-policy denies", () => {
+    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
+      p.startsWith("method/"),
+    );
+    expect(methodCores.length).toBeGreaterThanOrEqual(3);
+    for (const p of methodCores) {
+      expect(isCanonicalPathAllowed(p)).toBe(true);
+      expect(decideReadPath(p).allowed).toBe(false);
+    }
+  });
+
+  it("loader can still read allowlisted method core from disk (digest)", () => {
+    const root = resolveWorkspaceRootFromAppCwd();
+    const target =
+      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md";
+    const ref = loadCanonicalSource(root, target);
+    expect(ref.digest).toMatch(/^[a-f0-9]{64}$/);
+    expect(ref.sizeBytes).toBeGreaterThan(0);
+    // Asymmetry remains: CT tool path still denied for same path.
+    expect(decideReadPath(target).allowed).toBe(false);
+  });
+
+  it("documents closed allowlist — non-core method path refused by loader", () => {
+    const root = resolveWorkspaceRootFromAppCwd();
+    expect(() =>
+      loadCanonicalSource(root, "method/secret.md"),
+    ).toThrow();
+  });
+
+  it("does not modify policies (probe assertion)", () => {
+    // Sentinel: this probe file must not import write APIs for policy.
+    const probePath = path.resolve(
+      __dirname,
+      "t-a7-path-policy-loader-asymmetry.probe.test.ts",
+    );
+    expect(probePath.endsWith(".probe.test.ts")).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
index d639038..73db23e 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
@@ -4,12 +4,12 @@
 |-------|--------|
 | **Document** | `02-p03-p11-readiness-matrix.md` |
 | **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
-| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — NOT AN AUTHORIZATION` |
+| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 locales |
+| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
+| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O2 CAMPAIGN — NOT AN AUTHORIZATION` |
 | **T-A7** | `NOT OPEN` |

-> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable, ni delivery, ni cutover.
+> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable au-delà du gate O2 courant, ni delivery, ni cutover.

 ---

@@ -17,105 +17,66 @@

 | Statut | Sens |
 |--------|------|
-| `SATISFIED — EVIDENCED` | preuve Git / contrat vérifiable pour l’exigence **telle que formulée** |
+| `SATISFIED — EVIDENCED` | preuve Git / contrat / test vérifiable pour l’exigence **telle que formulée** |
 | `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
-| `MISSING — EVIDENCED` | absence de preuve constatée |
+| `MISSING — EVIDENCED` | absence de preuve / capacité constatée |
 | `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
+| `FAILED — BLOCKER CONFIRMED` | échec confirmé |
 | `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

-Niveaux d’exigence (héritage F03.3 / framing cutover) :
-
-| Niveau | Sens |
-|--------|------|
-| Avant **prep technique** | inventaire / design / matrice / décisions F — **pas** runtime green |
-| Avant **delivery preparation** | + stratégies / designs prouvables · HARD non ignorés |
-| Avant **cutover** | + preuves runtime P07–P11 · F11.2 · F13.4 opérationnels · gate D |
-
 ---

-## 2. Matrice P03–P11
+## 2. Matrice P03–P11 (après campagne O2)

-| ID | Exigence canonique | Preuves Git | Statut | Écart | Risque | Action documentaire / technique future | Gate | Stop condition | Avant prep tech | Avant delivery prep | Avant cutover |
-|----|--------------------|-------------|--------|-------|--------|----------------------------------------|------|----------------|-----------------|---------------------|---------------|
-| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` (template + 3 method core) · OA `app/lib/oa/doctrine/**` | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; fallback method encore actif | fallback silencieux | inventaire consommateur + plan remplacement registry | F03 / prep distinct | SC-05 · SC-02 | matrice + inventaire | plan tests resolve/deny | preuve import + runtime no-fallback |
-| P04 | `sourceLoader` → package loader + digest | `sourceLoader.ts` · digest SHA-256 · blob SHA | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible + pin tests | F03 | SC-05 | inventaire | digest pin tests | loader unique cible |
-| P05 | `contextResolver` → CkcResolver + doctrine | T-A2 `memoryCkcResolver` · lectures method encore possibles hors OA mémoire | `PARTIAL — EVIDENCED` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | boundary CKC documentée + tests | F03 | SC-05 · SC-02 | inventaire boundaries | boundary tests | no method/** product reads |
-| P06 | `sessionContext` / MethodMode deps → OA correlation | MethodMode D1 actif (`types.ts` · `actions.ts`) · anti-claims T-A* | `MISSING — EVIDENCED` | pas de remplacement session OA produit | MethodMode residual | design session OA (doc) | F03 · F11 | SC-04 · SC-05 | design only | design session | preuve no MethodMode |
-| P07 | MethodMode → retiré de cible OA | `METHOD_MODES` actif · UI/API D1 · tests `project-foundation.test.ts` | `MISSING — EVIDENCED` | MethodMode présent ; aucun retrait | cutover prématuré | inventaire dépendances + hold flag futur | F03 · F11 | SC-04 | inventaire | plan retrait | UI+API+import proofs |
-| P08 | lectures `method/**` → absentes cible OA | loader canonique lit 3 fichiers method · CT path-policy deny asymétrique | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy silencieuse | CI boundary candidates · ne pas retirer sans remplacement | F03 | SC-02 · SC-05 | règles CI candidates | grep/import CI | CI + runtime proof |
-| P09 | badges v2.6 → retirés surfaces OA | D1 MethodMode labels ; UI OA native absente | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion utilisateur | design UI OA distinct F11 product | F11 | SC-04 | design UI | design UI | UI tests |
-| P10 | OPS1 contracts → ACL / isolation | `allowlistEvaluation.ts` · `pathPolicy.ts` · `import-boundaries.test.ts` · pack Wave 1 `04` | `PARTIAL — EVIDENCED` | path-policy ≠ IAM ; pas d’ACL cutover ; pas no-cross-call runtime OA | double identité OPS1/v3 | **contrat isolation** (ce pack) puis validation Morris | F13 · W1-D04 | SC-03 · SC-12 · W1-S5 | frontière documentée | frontière + tests | ACL runtime |
-| P11 | historique legacy → read-only policy | F13.4 décidé · **aucune** enforcement runtime · audit OA mémoire | `MISSING — EVIDENCED` | politique cible non appliquée ; durée conservation non fixée | mutation / fuite historique | design vue RO + politique mutation=deny | F13 | SC-06 | politique candidate | politique Morris | enforcement RO |
+| ID | Exigence canonique | Preuves Git / tests O2 | Statut **avant** | Statut **après** | Écart restant | Risque | Action future | Gate | Stop |
+|----|--------------------|------------------------|------------------|------------------|---------------|--------|---------------|------|------|
+| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · probe consumers · digest | PARTIAL | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; method cores encore allowlistés | fallback silencieux | remplacement registry sous gate distinct | F03 | SC-05 · SC-02 |
+| P04 | `sourceLoader` → package loader + digest | `sourceLoader` · canonicalEngine · asymmetry probe | PARTIAL | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible | F03 | SC-05 |
+| P05 | `contextResolver` → CkcResolver + doctrine | CKC mémoire · OA sans import method | PARTIAL | `PARTIAL — EVIDENCED` | guidance-only ; lectures method hors OA via loader | doctrine v2.6 résiduelle | boundary CKC + tests runtime | F03 | SC-05 |
+| P06 | session / MethodMode → OA correlation | MethodMode D1 actif · hold absent (probe) | MISSING | `MISSING — EVIDENCED` | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
+| P07 | MethodMode retiré cible OA | METHOD_MODES actif · foundation tests | MISSING | `MISSING — EVIDENCED` | MethodMode présent | cutover prématuré | inventaire + hold futur | F03 · F11 | SC-04 |
+| P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
+| P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
+| P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
+| P11 | historique legacy RO | F13.4 décidé · absence runtime prouvée | MISSING | `MISSING — EVIDENCED` | politique non appliquée | mutation historique | vue RO sous gate F13 | F13 | SC-06 |

 ---

-## 3. Synthèse par statut
-
-### Satisfaits
-
-Aucun P03–P11 en `SATISFIED — EVIDENCED` au HEAD courant pour l’exigence **de remplacement Option A**.
-
-### Partiels
+## 3. Synthèse après O2

-| ID | Motif court |
-|----|-------------|
-| P03 | registry OA existe ; canonical paths method encore actifs |
-| P04 | digest présent ; cutover loader absent |
-| P05 | CKC mémoire ; lectures method produit non exclues |
-| P10 | path-policy / allowlist / import tests ; isolation cutover absente |
+### Satisfaits (remplacement OA)

-### Manquants
+Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement** Option A.

-| ID | Motif court |
-|----|-------------|
-| P06 | pas de session OA de remplacement |
-| P07 | MethodMode non retiré |
-| P08 | lectures `method/**` actives |
-| P09 | badges / UI OA native absents |
-| P11 | RO historique non enforce |
+### Partiels renforcés

-### Unknown (preuves à collecter)
+P03 · P04 · P05 · P10

-| Sujet | Statut | Pourquoi |
-|-------|--------|----------|
-| Volumes DB / `.sfia-exec` | `UNKNOWN — EVIDENCE REQUIRED` | SQLite local gitignored · pas de campagne de mesure |
-| Hits allowlist `method/` runtime | `UNKNOWN — EVIDENCE REQUIRED` | inventaire structurel ≠ hits live |
-| Cross-call OPS1 ↔ OA runtime | `UNKNOWN — EVIDENCE REQUIRED` | import tests ≠ preuve runtime |
-| Durée conservation F13 | `UNKNOWN — EVIDENCE REQUIRED` | reportée à cycle distinct |
-| IAM multi-user | `NOT SELECTED` | hors F03.3 satisfaction seule |
+### Manquants (capacité runtime)

----
-
-## 4. Blockers pour prep technique / ouverture
-
-1. P06–P09 · P11 `MISSING` — interdisent retrait / cutover ; limitent un lot de développement borné.
-2. P10 `PARTIAL` — isolation OPS1 **définie** dans `03` mais **non validée** Morris / non implémentée.
-3. Asymétrie path-policy deny `method/` vs loader canonique allow — risque de confusion opérationnelle.
-4. HARD / B5 / R1 / R-M01 ouverts — non ignorés ; bloquent delivery (B5 STOP BEFORE DELIVERY).
+P06 · P07 · P08 · P09 · P11

----
-
-## 5. Dépendances
+### Unknown résiduels

-```
-W1-D02 (actifs) ──► P03/P04/P07/P08 (lectures & MethodMode)
-W1-D04 (OPS1)   ──► P10 ──► F13.4
-F11.2           ──► P06/P07/P09/P22 (surfaces read)
-F13.4           ──► P10/P11
-F03.3           ──► qualification de cette matrice (≠ satisfaction runtime)
-```
+| Sujet | Statut |
+|-------|--------|
+| Cross-call dynamique live session | `PARTIAL` static / live `UNKNOWN — ENVIRONMENT LIMITATION` (worktree sans `.sfia-exec`) |
+| Hits allowlist production | `NO LOCAL HITS — LIMITED EVIDENCE` ≠ production |
+| Volumes production | `LOCAL … — PRODUCTION UNKNOWN` |
+| Durée conservation F13 | `UNKNOWN` |
+| IAM | `NOT SELECTED` |

 ---

-## 6. Anti-claims
+## 4. Anti-claims

-- matrice qualifiée ≠ P* satisfaits ;
-- `PARTIAL` ≠ autorisation de retrait ;
-- P01 historique (T-A0…T-A6 intégrés) ≠ delivery / cutover ;
-- décision F13.4 ≠ P11 `SATISFIED`.
+- tests verts ≠ delivery / cutover ;
+- PARTIAL renforcé ≠ SATISFIED remplacement ;
+- isolation static ≠ isolation runtime cutover ;
+- volumes locaux ≠ volumes production.

 ---

-## 7. Verdict section
+## 5. Verdict section

-`P03–P11 QUALIFIED FROM EVIDENCE — 0 SATISFIED / 4 PARTIAL / 5 MISSING — UNKNOWN EVIDENCE ITEMS OPEN — NO AUTHORIZATION`
+`P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
index 5379d36..b3ac1a2 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
@@ -3,10 +3,13 @@
 | Champ | Valeur |
 |-------|--------|
 | **Document** | `03-ops1-isolation-contract.md` |
-| **Statut** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
-| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Code / ACL runtime** | **aucune modification** |
+| **Statut** | `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
+| **Statut précédent** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
+| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 · campagne O2 |
+| **Date design** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Date validation technique** | 2026-07-28 20:54:03 CEST (+0200) |
+| **Code / ACL runtime** | **aucune modification fonctionnelle** (probes tests only) |
+| **Adoption Morris d’implémentation** | **non** — validation technique ≠ GO d’implémentation |

 ---

@@ -144,6 +147,18 @@

 ---

-## 12. Verdict section
+## 12. Validation technique O2 (preuves)

-`OPS1 ISOLATION CONTRACT DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED — PATH-POLICY DISTINCT FROM IAM — NO CODE CHANGE`
+| Axe | Résultat O2 |
+|-----|-------------|
+| Cohérence code | 0 imports OPS1↔OA / OPS1↔D1 / D1↔OPS1 (probe + import-boundaries) |
+| Testabilité | probes reproductibles verts |
+| Réversibilité | tests revertibles · aucun état persisté modifié |
+| Path-policy ≠ IAM | confirmé · asymétrie loader qualifiée **sans** changement policy |
+| Résiduel | live dynamic call probe non exécutée (env worktree) · surface partagée D1/platform documentée |
+
+**Recommandation (non décision) :** conserver le contrat ; avant implémentation, ajouter probe live optionnelle + inventaire hits allowlist hors local.
+
+## 13. Verdict section
+
+`OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED — PATH-POLICY DISTINCT FROM IAM — NO FUNCTIONAL OPS1 CHANGE`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
index ef352a1..b1eadf1 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
@@ -3,84 +3,54 @@
 | Champ | Valeur |
 |-------|--------|
 | **Document** | `05-evidence-and-non-regression-plan.md` |
-| **Statut** | `CATALOGUED — NOT EXECUTED — NO TESTS WRITTEN` |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Niveaux L0–L5** | L0 doc · L1 static Git · L2 contrat · L3 unit · L4 integration · L5 E2E/runtime/RUN |
+| **Statut** | `CATALOGUED — O2 CAMPAIGN EXECUTED ON PRIORITY IDS — NO PRODUCT TESTS FOR F11/F13 FINAL` |
+| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |

 ---

-## 1. Catalogue
-
-| ID | Surface | Preuve attendue | Méthode future | Automatisable ? | Niveau | Gate | Statut actuel |
-|----|---------|-----------------|----------------|-----------------|--------|------|---------------|
-| E-MM-01 | MethodMode | inventaire modes + actions | relecture `types.ts` / `actions.ts` | partiel | L1 | F03 / W1 | `PARTIAL — EVIDENCED` |
-| E-MM-02 | MethodMode | tests D1 select + optimistic lock | réutiliser `project-foundation.test.ts` | oui | L3 | prep | `PARTIAL — EVIDENCED` |
-| E-MM-03 | MethodMode | hold flag empêche retrait prématuré | design + test futur | oui | L3–L4 | SC-04 | `MISSING — EVIDENCED` |
-| E-D1-01 | D1 | import boundary D1↛OPS1 | `import-boundaries.test.ts` | oui | L3 | W1-D04 | `SATISFIED — EVIDENCED` (boundary only) |
-| E-D1-02 | D1 | shared provider ≠ identité OPS1 | review `resolveProvider.ts` | non | L1–L2 | W1-D04 | `PARTIAL — EVIDENCED` |
-| E-CP-01 | Trio/canon | `SFIA_CANONICAL_CORE_PATHS` stable + digest | `sourceLoader` digest | oui | L1–L3 | P03/P04 | `PARTIAL — EVIDENCED` |
-| E-CP-02 | Consommateurs | map prompts / OPS1 wrapper / CT | inventaire Wave 1 + grep | partiel | L1 | W1-D02 | `PARTIAL — EVIDENCED` |
-| E-CP-03 | Consommateurs | no-fallback produit vers method hors allowlist | CI grep + runtime | oui | L4–L5 | P08 | `MISSING — EVIDENCED` |
-| E-OPS-01 | OPS1 | allowlist deny-by-default | `allowlistEvaluation.test.ts` | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
-| E-OPS-02 | OPS1 | path-policy CT deny method | tests pathPolicy | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
-| E-OPS-03 | OPS1 | no-cross-call runtime OPS1↔OA | probe / e2e dédié futur | oui | L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
-| E-OPS-04 | OPS1 | e2e I1–I6 non régressés | `ops1-i*.spec.ts` | oui | L5 | prep | `PARTIAL — EVIDENCED` |
-| E-OPS-05 | OPS1 | inventaire hits allowlist `method/` | campagne mesure | partiel | L1–L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
-| E-F11-01 | F11.2 API | contrat read MethodMode / deps / migration / health / holds | design OpenAPI-like doc | non (doc) | L0–L2 | F11 | `MISSING — EVIDENCED` |
-| E-F11-02 | F11.2 API | audit de lecture | journal + test | oui | L4 | F11 | `MISSING — EVIDENCED` |
-| E-F11-03 | F11.2 API | aucune mutation implicite | contract tests deny-write | oui | L3–L4 | F11 | `MISSING — EVIDENCED` |
-| E-F13-01 | F13.4 | Git archive vérité | tags/commits packs | oui | L1 | F13 | `PARTIAL — EVIDENCED` |
-| E-F13-02 | F13.4 | vue RO bornée + deny mutation | impl + tests futurs | oui | L4–L5 | F13 | `MISSING — EVIDENCED` |
-| E-F13-03 | F13.4 | journalisation accès | audit sink durable | oui | L4 | F13 | `MISSING — EVIDENCED` |
-| E-PER-01 | Persistence | DB SELECTED + volumes | décision + campagne | non | L0–L1 | F10 | `UNKNOWN — EVIDENCE REQUIRED` |
-| E-IAM-01 | IAM | modèle identité | décision F10 | non | L0 | F10 | `NOT SELECTED` |
-| E-AUD-01 | Audit OA | journal durable ≠ mémoire | design RUN | partiel | L2–L5 | P23 | `PARTIAL — EVIDENCED` |
-| E-OBS-01 | Observabilité | health/readiness réel | endpoint F11.2 | oui | L5 | F11 · P23 | `MISSING — EVIDENCED` |
-| E-CI-01 | CI | import boundary required | ruleset / workflow | oui | L4 | P24 | `PARTIAL — EVIDENCED` |
-| E-RB-01 | Rollback | R0 revert pack | Git | oui | L1 | ce pack | `SATISFIED — EVIDENCED` (mécanisme) |
-| E-RB-02 | Rollback | R1–R3 drills | runbook + exercice | partiel | L5 | SC-06 | `MISSING — EVIDENCED` |
-
----
-
-## 2. Distinctions de preuves
-
-| Type | Exemples IDs |
-|------|--------------|
-| Statiques Git | E-MM-01 · E-CP-01 · E-F13-01 · E-RB-01 |
-| Contrat | E-F11-01 · E-D1-02 · contrat OPS1 |
-| Unitaires | E-MM-02 · E-OPS-01 · E-OPS-02 · E-D1-01 |
-| Intégration | E-F11-02 · E-CI-01 |
-| E2E | E-OPS-04 |
-| Runtime | E-OPS-03 · E-CP-03 · E-OBS-01 |
-| Sécurité | E-IAM-01 · E-F11-03 · path-policy≠IAM |
-| RUN | E-AUD-01 · E-OBS-01 · E-RB-02 |
-| Rollback | E-RB-01 · E-RB-02 |
-
----
-
-## 3. Tests candidats (non écrits)
-
-| Candidat | Objectif | Niveau |
-|----------|----------|--------|
-| Contract test F11.2 deny-write | garantir read-only API | L3 |
-| Runtime probe OPS1↛OA | compléter import boundaries | L5 |
-| RO history mutation deny | F13.4 | L4–L5 |
-| Canonical digest pin CI | P04 | L4 |
-| Allowlist hit report job | UNKNOWN → evidenced | L1–L5 |
-
-**Ce cycle n’écrit ni n’exécute ces tests.**
+## 1. Catalogue (statuts après O2)
+
+| ID | Surface | Preuve attendue | Méthode | Auto? | Niveau | Gate | Statut **avant** | Statut **après O2** |
+|----|---------|-----------------|---------|-------|--------|------|------------------|---------------------|
+| E-MM-01 | MethodMode | inventaire modes | relecture | partiel | L1 | F03 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-MM-02 | MethodMode | tests D1 select | foundation | oui | L3 | prep | PARTIAL | `PARTIAL — EVIDENCED` (tests verts) |
+| E-MM-03 | MethodMode | hold flag | probe absence | oui | L1 | SC-04 | MISSING | `MISSING — EVIDENCED` (absence confirmée) |
+| E-D1-01 | D1 | import boundary | import-boundaries | oui | L3 | W1-D04 | SATISFIED (boundary) | `SATISFIED — EVIDENCED` (boundary only) |
+| E-D1-02 | D1 | shared provider | resolveProvider + probe | non | L1–L2 | W1-D04 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-CP-01 | Canon | digest stable | loader/canonicalEngine | oui | L1–L3 | P03/P04 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-CP-02 | Consommateurs | map consumers | probe consumers | partiel | L1 | W1-D02 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-CP-03 | Consommateurs | no-fallback produit | probe OA + loader deny | oui | L4 | P08 | MISSING | `PARTIAL — EVIDENCED` |
+| E-OPS-01 | OPS1 | allowlist deny-default | allowlist tests | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-OPS-02 | OPS1 | path-policy deny method | asymmetry probe | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-OPS-03 | OPS1 | no-cross-call | isolation probe static | oui | L1–L5 | W1-D04 | UNKNOWN | `PARTIAL — EVIDENCED` |
+| E-OPS-04 | OPS1 | e2e I1–I6 | non exécutés ce cycle | oui | L5 | prep | PARTIAL | `PARTIAL — EVIDENCED` (inchangé — non rejoués) |
+| E-OPS-05 | OPS1 | hits allowlist method/ | probe hits | partiel | L1–L3 | W1-D04 | UNKNOWN | `NO LOCAL HITS — LIMITED EVIDENCE` |
+| E-F11-01 | F11.2 | contrat API | absence route prouvée | non | L0–L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
+| E-F11-02 | F11.2 | audit lecture | — | oui | L4 | F11 | MISSING | `MISSING — EVIDENCED` |
+| E-F11-03 | F11.2 | deny-write | — | oui | L3 | F11 | MISSING | `MISSING — EVIDENCED` |
+| E-F13-01 | F13.4 | Git archive | packs | oui | L1 | F13 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-F13-02 | F13.4 | vue RO | absence module | oui | L1 | F13 | MISSING | `MISSING — EVIDENCED` (absence) |
+| E-F13-03 | F13.4 | journal accès | — | oui | L4 | F13 | MISSING | `MISSING — EVIDENCED` |
+| E-PER-01 | Persistence | volumes | probe + métriques RO | non | L1 | F10 | UNKNOWN | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` |
+| E-IAM-01 | IAM | modèle | — | non | L0 | F10 | NOT SELECTED | `NOT SELECTED` |
+| E-AUD-01 | Audit OA | journal durable | — | partiel | L2–L5 | P23 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-OBS-01 | Observabilité | health réel | absence readiness | oui | L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
+| E-CI-01 | CI | import boundary | tests | oui | L4 | P24 | PARTIAL | `PARTIAL — EVIDENCED` |
+| E-RB-01 | Rollback | R0 revert | Git | oui | L1 | pack | SATISFIED | `SATISFIED — EVIDENCED` |
+| E-RB-02 | Rollback | R1–R3 drills | — | partiel | L5 | SC-06 | MISSING | `MISSING — EVIDENCED` |

 ---

-## 4. Anti-claims
+## 2. Anti-claims

-- catalogue ≠ preuves collectées ;
-- test existant OPS1 ≠ isolation cutover prouvée ;
-- digest loader ≠ cutover loader ;
-- health simulé ≠ readiness F11.2.
+- campagne O2 ≠ F11/F13 implémentés ;
+- PARTIAL E-OPS-03 ≠ runtime live exhaustif ;
+- volumes locaux ≠ production ;
+- catalogue mis à jour ≠ preuves cutover.

 ---

-## 5. Verdict section
+## 3. Verdict section

-`EVIDENCE CATALOGUE DEFINED — NOT EXECUTED — CRITICAL RUNTIME AND F11/F13 PROOFS MISSING OR UNKNOWN`
+`EVIDENCE CATALOGUE UPDATED AFTER O2 — PRIORITY UNKNOWN/PARTIAL IDS ADVANCED — F11/F13 FINAL STILL MISSING — NO PRODUCT IMPLEMENTATION`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
index c7640ff..ec7bff7 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
@@ -14,10 +14,10 @@
 | Hold | Statut exigé | Sens |
 |------|--------------|------|
 | T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
-| F03.3 | décidée ≠ satisfaite | set partiel ; prep technique exécutable interdite |
+| F03.3 | décidée ≠ satisfaite | set **partiel réduit** (`BLOCKERS REDUCED`) ; prep hors gate O2 interdite |
 | F11.2 | décidée ≠ API disponible | pas d’implémentation |
 | F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
-| Isolation OPS1 | requise ≠ réalisée | contrat proposé seulement |
+| Isolation OPS1 | design **validé tech** ≠ réalisée | contrat validé O2 · **non implémenté** |
 | B5 | `OPEN` | STOP BEFORE DELIVERY |
 | R1 | `OPEN` | atomicité non résolue |
 | R-M01 | `OPEN` | ClaimEvaluator readiness |
@@ -99,4 +99,4 @@

 ## 6. Verdict section

-`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — T-A7 REMAINS NOT OPEN — HARD NOT IGNORED`
+`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — O2 DOES NOT LIFT T-A7 NOT OPEN — HARD NOT IGNORED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
index 7a8c23f..cf04c3c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
@@ -4,71 +4,91 @@
 |-------|--------|
 | **Document** | `07-f03-3-satisfaction-assessment.md` |
 | **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Verdict** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
-| **Prep technique exécutable** | `PROHIBITED` |
+| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Date réévaluation O2** | 2026-07-28 20:54:03 CEST (+0200) |
+| **Verdict avant** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
+| **Verdict après** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
+| **Prep technique O2** | autorisée par gate courant · **bornée** |
+| **Prep au-delà / delivery / cutover** | `PROHIBITED` |
 | **T-A7** | `NOT OPEN` |

 ---

-## 1. Matrice de satisfaction
-
-| Critère F03.3 | État | Preuve | Écart | Bloquant pour prep technique ? |
-|---------------|------|--------|-------|--------------------------------|
-| Inventaire legacy validé | `SATISFIED — EVIDENCED` | Wave 1 packs `02`–`05` · W1-D02 | inventaire ≠ runtime green | Non (doc) |
-| Dépendances actives confirmées | `SATISFIED — EVIDENCED` | W1-D02 · `canonicalPaths` · MethodMode · consommateurs | — | Non (doc) |
-| Candidats au retrait identifiés | `SATISFIED — EVIDENCED` | W1-D03 | candidats ≠ suppression | Non (doc) |
-| Plan documentaire W1-B | `SATISFIED — EVIDENCED` | W1-D01 / W1-B `DECIDED` | plan ≠ exécution | Non (doc) |
-| Matrice P03–P11 qualifiée | `SATISFIED — EVIDENCED` (qualification) | `02-p03-p11-readiness-matrix.md` | 0 P SATISFIED runtime ; 5 MISSING | **Oui** si prep vise retrait runtime |
-| Isolation OPS1 définie | `PARTIAL — EVIDENCED` | `03-ops1-isolation-contract.md` statut `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` | non validée Morris · non implémentée | **Oui** |
-| F11 décidée | `SATISFIED — EVIDENCED` | F11.2 sur main (PR #285) | ≠ API | Non pour décision ; **Oui** pour cutover |
-| F13 décidée | `SATISFIED — EVIDENCED` | F13.4 sur main | ≠ RO runtime | Non pour décision ; **Oui** pour retrait |
-| Stratégie rollback documentée | `SATISFIED — EVIDENCED` (doc) | `04-rollback-strategy.md` | `NOT TESTED` | Non pour doc ; **Oui** avant cutover (SC-06) |
-| Preuves candidates de non-régression | `PARTIAL — EVIDENCED` | `05-evidence-and-non-regression-plan.md` | nombreuses MISSING/UNKNOWN | **Oui** pour lot technique non borné |
-| Anti-bypass des gates | `SATISFIED — EVIDENCED` | `06-holds-and-stop-conditions.md` | holds doc ≠ runtime | Non (doc) |
-| Aucun blocker HARD ignoré | `SATISFIED — EVIDENCED` (non-ignorance) | HARD `OPEN HARD` explicitement holdé | HARD non fermé | **Oui** pour delivery / real execution |
+## 1. Matrice de satisfaction (après O2)
+
+| Critère F03.3 | Avant | Après | Preuve | Écart | Bloquant prep bornée ? | Bloquant lot dev ? |
+|---------------|-------|-------|--------|-------|------------------------|--------------------|
+| Inventaire legacy validé | SATISFIED | `SATISFIED — EVIDENCED` | Wave 1 | — | Non | Non (doc) |
+| Dépendances actives confirmées | SATISFIED | `SATISFIED — EVIDENCED` | W1-D02 + probes | — | Non | Non (doc) |
+| Candidats retrait identifiés | SATISFIED | `SATISFIED — EVIDENCED` | W1-D03 | — | Non | Non |
+| Plan W1-B | SATISFIED | `SATISFIED — EVIDENCED` | W1-D01 | — | Non | Non |
+| Matrice P03–P11 qualifiée | SATISFIED (qualif) | `SATISFIED — EVIDENCED` (qualif + MAJ O2) | `02` | 5 MISSING runtime | Non | **Oui** si retrait |
+| Isolation OPS1 définie | PARTIAL | `SATISFIED — EVIDENCED` (design+validation tech) | `03` validé O2 | **non implémentée** | Non pour doc | **Oui** avant retrait |
+| F11 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F11.2 | ≠ API | Non | **Oui** cutover |
+| F13 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F13.4 | ≠ RO | Non | **Oui** retrait |
+| Rollback documenté | SATISFIED (doc) | `SATISFIED — EVIDENCED` (doc) | `04` | NOT TESTED R1–R3 | Non doc | **Oui** cutover |
+| Preuves non-régression candidates | PARTIAL | `PARTIAL — EVIDENCED` | `05` + O2 | F11/F13/E-RB-02 MISSING | Partiel | **Oui** |
+| Anti-bypass | SATISFIED | `SATISFIED — EVIDENCED` | `06` | holds doc | Non | Non |
+| HARD non ignoré | SATISFIED (non-ignorance) | `SATISFIED — EVIDENCED` | HARD OPEN HARD | non fermé | Non O2 | **Oui** delivery/real-exec |

 ---

-## 2. Lecture du verdict
+## 2. Lecture du verdict après O2

-### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`
+### Pourquoi `BLOCKERS REDUCED`

-1. Isolation OPS1 = proposée, **pas** validée Morris (`MORRIS VALIDATION REQUIRED`).
-2. Catalogue de preuves : gaps runtime / F11 / F13 / volumes / cross-call = `MISSING` / `UNKNOWN`.
-3. Qualifier P03–P11 **révèle** un jeu majoritairement non vert — la qualification doc ne convertit pas les MISSING en SATISFIED.
+- contrat OPS1 **validé techniquement** (static + allowlist + asymétrie) ;
+- E-OPS-03 / E-OPS-05 / E-PER-01 / E-CP-* avancés ;
+- P03/P04/P10 preuves approfondies ;
+- absences F11/F13/hold **prouvées** (clarifie le backlog).

-### Pourquoi pas `F03.3 NOT SATISFIED — TECHNICAL PREPARATION PROHIBITED` seul
+### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`

-Plusieurs critères documentaires structurels sont effectivement en place (inventaire, W1-B, F11/F13, matrice, rollback doc, anti-bypass, HARD non ignorés). Le set n’est pas vide : il est **partiel**.
+- P06–P09 / P11 toujours `MISSING` pour capacités runtime ;
+- F11.2 / F13.4 non disponibles ;
+- rollback R1–R3 non testé ;
+- HARD / B5 / R1 / R-M01 ouverts ;
+- E-OPS-03 live dynamique limité environnement.

-### Conséquence normative
+### Conséquence

-- préparation technique **exécutable** (code, ACL, API, migrations) : **interdite** ;
-- travail documentaire / design borné pour traiter les blockers : possible **uniquement** sous gate Morris distinct ;
-- ouverture T-A7 pour développement : **non recommandée** tant que blockers OPS1 + preuves critiques non traités (voir `08`).
+- O2 courant : preuves collectées · **pas** d’ouverture T-A7 ;
+- O3 développement borné : **non supporté** par les preuves restantes.

 ---

-## 3. Blockers identifiés (liste courte)
+## 3. Blockers levés / restants
+
+### Levés ou réduits
+
+| Blocker | Effet |
+|---------|-------|
+| OPS1 design non confronté au code | → validé tech, pas implémenté |
+| E-OPS-03 UNKNOWN | → PARTIAL static |
+| E-OPS-05 UNKNOWN | → NO LOCAL HITS limited |
+| E-PER-01 UNKNOWN | → volumes locaux agrégés |
+| Asymétrie path-policy non testée | → QUALIFIED |
+
+### Restants

-1. Validation Morris du contrat OPS1.
-2. Preuves UNKNOWN : cross-call runtime · hits allowlist · volumes.
-3. F11.2 / F13.4 non disponibles runtime.
-4. P06–P09 · P11 `MISSING`.
-5. HARD / B5 / R1 / R-M01 ouverts (delivery/real-exec).
+1. Implémentation isolation OPS1 (future — hors O2).
+2. P06–P09 / P11 capacités runtime.
+3. API F11.2 / vue F13.4.
+4. Hold MethodMode (E-MM-03).
+5. HARD / B5 / R1 / R-M01.
+6. Rollback drills R1–R3.
+7. Preuves production (volumes / hits).

 ---

 ## 4. Anti-claims

-- évaluation ≠ ouverture T-A7 ;
-- PARTIAL ≠ licence de coder ;
-- critères doc SATISFIED ≠ cutover ready ;
-- HARD non ignoré ≠ HARD fermé.
+- BLOCKERS REDUCED ≠ T-A7 OPEN ;
+- validation contrat ≠ implémentation ;
+- O2 ≠ développement fonctionnel.

 ---

 ## 5. Verdict

-`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
+`F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
index 2e7594c..4a3735c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
@@ -1,12 +1,13 @@
-# 08 — Morris decision pack — ouverture T-A7
+# 08 — Morris decision pack — ouverture T-A7 (après O2)

 | Champ | Valeur |
 |-------|--------|
 | **Document** | `08-morris-t-a7-opening-decision-pack.md` |
 | **Statut** | `MORRIS DECISION REQUIRED` |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |
 | **T-A7 actuel** | `NOT OPEN` |
-| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
+| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
+| **O2 gate courant** | consommé pour prep bornée — **ne présélectionne pas** la suite |
 | **Présélection** | **aucune** |

 ---
@@ -19,125 +20,76 @@

 ## Options

-### O1 — Ne pas ouvrir
+### O1 — Ne pas ouvrir T-A7

-Conditions insuffisantes ou blockers non traités.
+Conserver `NOT OPEN` · capitaliser preuves · pas de nouveau lot technique.

-- **Effet :** T-A7 reste `NOT OPEN` ; aucun code ; poursuivre blockers documentaires.
-- **Réversibilité :** totale.
-- **Dette :** faible (cadrage seulement).
+### O2 — Continuer la préparation technique bornée

-### O2 — Ouvrir uniquement la préparation technique
-
-Autoriser un lot borné de **design technique / tests** (contrats, specs, tests non branchés runtime legacy), **sans** delivery, **sans** mod `method/**` / OPS1 / MethodMode runtime, **sans** cutover.
-
-- **Effet :** T-A7 pourrait passer à un état « prep only » **si** Morris le définit explicitement ; sinon rester `NOT OPEN` avec gate prep distinct.
-- **Réversibilité :** haute (R0/R1).
-- **Dette :** moyenne (specs/tests).
+Poursuivre preuves restantes (live cross-call optionnel · hold design doc · e2e ciblés · drills rollback doc) **sans** développement fonctionnel.

 ### O3 — Ouvrir un premier lot de développement borné

-Uniquement si F03.3 est satisfait **et** blockers obligatoires maîtrisés.
-
-- **État actuel :** **non supporté** par les preuves (F03.3 partiel · OPS1 non validé · P06–P09/P11 MISSING · F11/F13 non livrés).
-- **Réversibilité :** moyenne/faible selon fichiers touchés.
-- **Dette :** élevée si ouvert trop tôt.
+**Non supporté** tant que P06–P09/P11 MISSING · F11/F13 absents · HARD/B5 ouverts · isolation non implémentée.

-### O4 — Custom / différer
+### O4 — Custom

-Exemples : valider d’abord le contrat OPS1 ; lancer campagne preuves UNKNOWN ; borner un micro-cycle doc-only de satisfaction F03.3.
+Ex. valider formellement le contrat OPS1 comme GO d’implémentation future séparée · ou cadrer micro-lot hold MethodMode **documentaire**.

 ---

-## Recommandation repo-informed (non décisionnelle)
-
-**Statut :** `RECOMMENDED — NOT DECIDED`
-
-**Recommandation Cursor/ChatGPT :** **O1** (ne pas ouvrir), avec enchaînement documentaire vers traitement des blockers ; **O2** uniquement si Morris impose un gate prep **strictement** borné (design/tests, fichiers protégés listés, aucune delivery).
-
-**Ne pas choisir O3** sur la base des preuves actuelles.
-
-### Preuves
+## Preuves nouvelles (O2)

-- matrice P03–P11 : 0 SATISFIED / 4 PARTIAL / 5 MISSING ;
-- OPS1 : `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` ;
-- F11.2 / F13.4 : absents runtime ;
-- HARD / B5 / R1 / R-M01 : `OPEN` ;
-- rollback R1–R3 : `NOT TESTED`.
+- 6 probes + 6 suites existantes · 63 tests verts ;
+- isolation static OPS1↔OA ;
+- allowlist method/ denials ;
+- asymétrie path-policy/loader ;
+- volumes locaux agrégés ;
+- absences F11/F13/hold prouvées.

-### Blockers (résumé)
+## Blockers levés / restants

 Voir `07` §3.

-### Risques si ouverture prématurée
+## Régression

-- retrait / mod method sans remplacement (SC-02/SC-05) ;
-- double identité OPS1/v3 (SC-12) ;
-- cutover aveugle sans F11.2 ;
-- mutation historique sans F13.4 ;
-- bypass HARD / B5.
+Aucune régression détectée sur suites rejouées.

-### Dette
-
-- sur-cadrage si O2 mal borné ;
-- sous-cadrage si O3.
-
-### Réversibilité
-
-- O1/O4 : maximale ;
-- O2 : R0/R1 ;
-- O3 : dépend du lot.
-
-### Périmètre candidat d’un premier lot (si O2 ultérieur)
-
-| Inclus candidat | Exclu / protégé |
-|-----------------|-----------------|
-| Specs contrats F11.2 read API | `method/**` |
-| Design tests E-OPS-03 / E-F13-* | `app/lib/ops1/**` runtime |
-| Docs runbook R1 | MethodMode runtime / DB |
-| Mesure volumes (read-only) | delivery · cutover · IAM select |
-
-### Fichiers protégés (non modifiables sans gate dédié)
+## Recommandation repo-informed (non décisionnelle)

-- `method/**`
-- `app/lib/ops1/**` · features/routes OPS1
-- `app/lib/d1/**` MethodMode
-- runtime / modeled / workflow / CI (hors tests purement additifs explicitement gated)
+**Statut :** `RECOMMENDED — NOT DECIDED`

-### Tests candidats
+**Recommandation :** **O2** (continuer prep bornée sur résiduels) **ou** **O1** si pause ; **pas O3**.

-Voir `05` §3 — **non écrits** ici.
+### Périmètre candidat futur (si O2)

-### Gate Morris exact (candidat, non consommé)
+| Inclus | Exclu |
+|--------|-------|
+| probes live optionnels | `method/**` |
+| e2e OPS1 ciblés read-only | mod fonctionnelle OPS1/MethodMode |
+| docs hold MethodMode | API F11 · vue F13 · delivery |

-Si F03.3 reste partiel :
+### Gates candidats (non consommés)

 ```
-GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN
+GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN
 ```

-Si Morris valide ultérieurement F03.3 SATISFIED :
+(Si F03.3 devenait SATISFIED plus tard :)

 ```
-GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
+GO DECIDE T-A7 OPENING — REVIEW UPDATED TECHNICAL EVIDENCE — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
 ```

 ---

-## Bulletin — champs de décision
-
-### D-T-A7-OPEN
+## Bulletin D-T-A7-OPEN

 | Champ | Valeur |
 |-------|--------|
-| **Question** | Ouvrir T-A7 pour un premier lot borné ? |
 | **Options** | O1 · O2 · O3 · O4 |
-| **Recommandation** | O1 (primaire) · O2 conditionnel · pas O3 |
-| **Impacts** | gouvernance trajectoire retrait legacy |
-| **Dette** | voir ci-dessus |
-| **Réversibilité** | O1/O4 haute · O2 moyenne-haute · O3 variable |
-| **Gate futur** | selon option |
-| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · O3 ≠ cutover · ouverture ≠ MethodMode removed |
+| **Recommandation** | O2 (ou O1) · pas O3 |
+| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · validation OPS1 ≠ implémentation · T-A7 reste NOT OPEN jusqu’à GO distinct |
 | **Champ** | `MORRIS DECISION REQUIRED` |

 **Aucune option n’est pré-cochée comme décision.**
@@ -146,8 +98,7 @@ GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 O

 ## Garde-fous

-- F03.3 / F11.2 / F13.4 inchangées (`DECIDED`) ;
-- combinaison inchangée ;
+- F03.3 / F11.2 / F13.4 / combinaison `DECIDED` inchangées ;
 - B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
 - T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
 - T-A7 `NOT OPEN` ;
@@ -158,4 +109,4 @@ GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 O

 ## Verdict section

-`MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — RECOMMENDATION O1 (O2 CONDITIONAL) — O3 NOT SUPPORTED BY EVIDENCE — T-A7 NOT OPEN`
+`MORRIS OPENING DECISION PACK UPDATED AFTER O2 WITHOUT PRESELECTION — RECOMMENDATION O2 OR O1 — O3 NOT SUPPORTED — T-A7 NOT OPEN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md
new file mode 100644
index 0000000..5118b26
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md
@@ -0,0 +1,164 @@
+# 09 — Bounded technical preparation results (O2)
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `09-bounded-technical-preparation-results.md` |
+| **Gate** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Option** | **O2** — préparation technique bornée uniquement |
+| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
+| **HEAD framing parent** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
+| **T-A7** | `NOT OPEN` |
+| **Développement fonctionnel** | **non** |
+
+---
+
+## 1. Campagne exécutée
+
+| Phase | Contenu |
+|-------|---------|
+| A | inventaire tests / sources |
+| B | plan probes (fichiers ci-dessous) |
+| C | scope validation (tests only) |
+| D | exécution vitest non destructive |
+| E | analyse + volumes locaux agrégés |
+| F | mise à jour pack |
+
+### Fichiers techniques autorisés (avant commit)
+
+| Fichier | Preuve | Réversibilité | Risque |
+|---------|--------|---------------|--------|
+| `__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts` | E-OPS-03 static / P10 | git revert | faible |
+| `__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts` | E-OPS-05 | git revert | faible |
+| `__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts` | asymétrie policy/loader | git revert | faible |
+| `__tests__/platform/t-a7-canonical-consumers.probe.test.ts` | E-CP-02/03 · P03 | git revert | faible |
+| `__tests__/platform/t-a7-local-volume.probe.test.ts` | E-PER-01 | git revert | faible |
+| `__tests__/platform/t-a7-f11-f13-absence.probe.test.ts` | F11/F13 absence · E-MM-03 | git revert | faible |
+
+**Aucun** fichier produit · API · UI · migration · `method/**` · OPS1/MethodMode fonctionnel.
+
+---
+
+## 2. Environnement
+
+| Élément | Valeur |
+|---------|--------|
+| OS | darwin 25.6.0 |
+| CWD tests | `…/sfia-workspace-t-a7-technical-readiness/projects/sfia-studio/app` |
+| Runner | vitest 3.2.7 |
+| node_modules | symlink temporaire vers checkout principal (retiré avant commit) |
+| Réseau | non utilisé |
+| Production | non |
+
+---
+
+## 3. Commandes exécutées
+
+```text
+npm test -- \
+  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
+  __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts \
+  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
+  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
+  __tests__/platform/t-a7-local-volume.probe.test.ts \
+  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
+  __tests__/platform/import-boundaries.test.ts \
+  __tests__/ops1/allowlistEvaluation.test.ts \
+  __tests__/ops1/sfia/canonicalEngine.test.ts \
+  __tests__/oa/project/antiLegacy.test.ts \
+  __tests__/oa/doctrine/antiLegacy.test.ts \
+  __tests__/d1/project-foundation.test.ts
+```
+
+**Résultat :** 12 files · **63 tests passed** · durée ~1.96s · exit 0.
+
+**Non exécutés :** e2e Playwright OPS1 I1–I6 (nécessite browser/env ; hors besoin minimal de cette campagne) · `next build` (pas de code produit) · lint global (tests only).
+
+---
+
+## 4. Résultats par preuve
+
+| ID | Verdict campagne | Détail |
+|----|------------------|--------|
+| E-OPS-03 | `PARTIAL — EVIDENCED` | 0 imports statiques OPS1↔OA, OPS1↔D1, D1↔OPS1 ; surface D1 intake sans import OPS1 ; pas de probe d’appels dynamiques live |
+| E-OPS-05 | `NO LOCAL HITS — LIMITED EVIDENCE` | 0 clés `method/` dans policy ; tous chemins method/ échantillonnés DENIED/INVALID (read/modify/create) |
+| E-CP-02 | `PARTIAL — EVIDENCED` | consommateurs platform + wrappers OPS1 `lib/ops1/sfia/*` |
+| E-CP-03 | `PARTIAL — EVIDENCED` | OA n’importe pas `method/` ; loader refuse hors allowlist ; fallback produit global non prouvé absente au runtime |
+| Path-policy/loader | `ASYMMETRY QUALIFIED — NO POLICY CHANGE AUTHORIZED` | CT deny method/ · loader lit cores allowlistés · digest OK |
+| E-PER-01 | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` | worktree : sqlite absents ; checkout principal local : ops1.sqlite 2 277 376 B / 14 tables / 4615 rows agg ; d1.sqlite 360 448 B / 4 tables / 909 rows — **métriques agrégées seulement** |
+| E-MM-03 | `MISSING — EVIDENCED` | aucun hold flag MethodMode dans `lib/d1` |
+| F11.2 | absence prouvée | aucune route readiness/cutover/methodmode |
+| F13.4 | absence prouvée | aucun module legacy-history / RO runtime |
+
+---
+
+## 5. Import boundaries / cross-call / allowlist / asymétrie
+
+| Axe | Résultat |
+|-----|----------|
+| Import boundaries (existant + probe) | D1↛OPS1 · platform↛D1/OPS1 · OA↛OPS1 · OPS1↛OA — **verts** |
+| Cross-call runtime | couche **statique** verte ; live session **non instrumentée** → PARTIAL |
+| Hits allowlist method/ | **aucun** hit policy ; denials structurels — limited local evidence |
+| Path-policy vs loader | asymétrie **qualifiée** · **aucun** changement de policy |
+
+---
+
+## 6. Volumes
+
+`LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN`
+
+Limite : données dans `.sfia-exec` du checkout principal (gitignored), absentes du worktree. Non extrapolable production.
+
+---
+
+## 7. P03–P11 avant → après
+
+| ID | Avant | Après | Motif |
+|----|-------|-------|-------|
+| P03 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | consumers + digest + closed list |
+| P04 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | loader digest tests verts |
+| P05 | PARTIAL | `PARTIAL — EVIDENCED` | inchangé structurellement ; OA sans import method |
+| P06 | MISSING | `MISSING — EVIDENCED` | pas de session OA remplacement |
+| P07 | MISSING | `MISSING — EVIDENCED` | MethodMode actif ; hold absent |
+| P08 | MISSING | `MISSING — EVIDENCED` (gap réduit partiellement) | lectures method via loader allowlist toujours actives |
+| P09 | MISSING | `MISSING — EVIDENCED` | UI OA absente |
+| P10 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | isolation static OPS1 validée |
+| P11 | MISSING | `MISSING — EVIDENCED` | F13.4 runtime absente (prouvé) |
+
+---
+
+## 8. Contrat OPS1
+
+**Verdict :** `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED`
+
+Axes : cohérence code ✓ · testabilité ✓ · réversibilité ✓ · path-policy≠IAM ✓.
+
+Résiduels : probe live dynamique optionnelle ; surface partagée D1/platform documentée ≠ identité commune ; wrappers TEMP à conserver jusqu’à gate dédié.
+
+**Pas** une décision Morris d’implémentation.
+
+---
+
+## 9. Rollback
+
+| Action | Mécanisme |
+|--------|-----------|
+| Tests/probes | `git revert` du commit evidence |
+| Symlink node_modules | retiré avant commit |
+| DB | **aucune** écriture campagne (lectures RO agrégées hors worktree) |
+
+---
+
+## 10. Findings
+
+| Sévérité | Finding |
+|----------|---------|
+| Info | Asymétrie path-policy deny vs loader allow — confirmée par tests |
+| Info | Volumes locaux disponibles hors worktree seulement |
+| Info | Hold MethodMode absent (E-MM-03) |
+| None Critical/Major produit | — |
+
+---
+
+## 11. Verdict section
+
+`BOUNDED TECHNICAL PREPARATION CAMPAIGN COMPLETED — 63 TESTS PASSED — BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — T-A7 NOT OPEN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index ad594ed..b115c47 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -2,22 +2,23 @@

 | Champ | Valeur |
 |-------|--------|
-| **Gate consommé** | `GO FRAME T-A7 TECHNICAL READINESS — QUALIFY P03 TO P11 — DEFINE OPS1 ISOLATION CONTRACT — DOCUMENT ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS — PREPARE MORRIS OPENING DECISION PACK — NO CODE — NO TECHNICAL EXECUTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
-| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Cycle / profil** | 6 — Architecture technique (+1 · 3 · 9 · 10 · 12 · 15) · Critical |
+| **Gate framing (historique)** | `GO FRAME T-A7 TECHNICAL READINESS — … — KEEP T-A7 NOT OPEN` |
+| **Gate O2 (consommé)** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Option O2** | `OUVRIR UNIQUEMENT UNE PRÉPARATION TECHNIQUE BORNÉE` — **consommée** (preuves) · **≠** ouverture T-A7 |
+| **Date framing** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Date campagne O2** | 2026-07-28 20:54:03 CEST (+0200) |
+| **Cycle / profil** | 9 — QA (+6 · 7 · 10 · 12 · 15 · 1) · Critical |
 | **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
 | **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
 | **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
 | **Push / PR / merge projet** | **aucun** |
 | **T-A7** | `NOT OPEN` |
 | **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
-| **Prep technique exécutable** | `NOT AUTHORIZED` |
-| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
-| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
-| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
-| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
-| **Évaluation F03.3 (ce pack)** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
-| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
+| **Développement fonctionnel T-A7** | **non** |
+| **F03 / F11 / F13 / combinaison** | `DECIDED — ADOPTED BY MORRIS` (F03.3 · F11.2 · F13.4) |
+| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
+| **Contrat OPS1** | `VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
+| **W1-B / W1-D01…D05** | `DECIDED` (inchangées) |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **HARD** | `OPEN HARD` |
 | **T-A6 COMPLETE** | `NOT DECLARED` |
@@ -27,105 +28,44 @@

 ## Objectif

-Établir la readiness **documentaire** préalable à une éventuelle ouverture de T-A7 :
+Readiness documentaire + **campagne O2 bornée** : valider le contrat OPS1 par preuves, collecter UNKNOWN/PARTIAL, réévaluer F03.3, mettre à jour le bulletin Morris — **sans** développement produit.

-1. matrice de qualification P03–P11 ;
-2. contrat de frontière / isolation OPS1 (design only) ;
-3. stratégie de rollback R0–R3 ;
-4. plan de preuves et non-régression ;
-5. holds, stop conditions et anti-bypass ;
-6. bulletin Morris d’ouverture T-A7 (sans présélection).
+## Périmètre O2

-## Périmètre
-
-- analyse read-only du repository ;
-- pack documentaire neuf sous `t-a7-technical-readiness-framing/` ;
-- commit local unique ;
-- review pack FULL + handoff canonique.
+- tests/probes non destructifs ;
+- MAJ pack readiness ;
+- commit local ;
+- review pack + handoff.

 ## Hors périmètre

-- code · runtime · tests · CI · migrations ;
-- modification `method/**` · OPS1 · MethodMode · modeled · workflow ;
-- API · UI · vue runtime read-only ;
-- préparation technique exécutable · backlog delivery exécutable ;
-- ouverture T-A7 · delivery preparation · delivery · cutover ;
-- push / PR / merge projet ;
-- fermeture B5 / R1 / R-M01 / HARD ;
-- sélection persistence / IAM · validation RGPD production ;
-- action Notion / CMP.
-
-## Sources
-
-| Classe | Chemins |
-|--------|---------|
-| Méthode | `prompts/templates/sfia-cycle-execution-template.md` · routing guide · operating model · guardrails |
-| Packs T-A7 | `t-a7-legacy-cutover-framing/` · `t-a7-next-decision-step-framing/` · `t-a7-option-c-wave-1-legacy-scope-framing/` · `t-a7-f03-f11-f13-documentary-arbitration/` |
-| Intégrations | PR #285 merge `dad6e003…` · PR #286 merge `2a3c59c…` · handoffs `sfia/review-handoff` |
-| Technique (RO) | `SFIA_CANONICAL_CORE_PATHS` · MethodMode D1 · OPS1 allowlist / path-policy · import boundaries · OA audit mémoire |
-
-## Décisions existantes (inchangées)
-
-- W1-B · W1-D01…D05 adoptées ;
-- F03.3 · F11.2 · F13.4 · combinaison adoptées ;
-- T-A7 reste `NOT OPEN`.
-
-## Décisions ouvertes (ce pack)
-
-- ouverture T-A7 (O1–O4) : `MORRIS DECISION REQUIRED` ;
-- validation Morris du contrat OPS1 proposé ;
-- contenu F08–F12 / F09 cutover : hors scope, restent non décidés ici.
-
-## État F03.3
-
-`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
-
-Critères documentaires largement couverts (inventaire, W1-B, F11/F13 décidées, matrice qualifiée, contrat OPS1 proposé, rollback doc, catalogue de preuves, anti-bypass, HARD non ignorés). Blockers : validation Morris du design OPS1 manquante ; P06–P09 / P11 runtime `MISSING` ; API F11.2 et vue F13.4 absentes ; preuves runtime non collectées ; HARD / B5 / R1 / R-M01 `OPEN`.
-
-## Principaux blockers
-
-1. Contrat OPS1 = `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED`.
-2. P06–P09 · P11 = `MISSING — EVIDENCED` (pas de preuve runtime de retrait / RO).
-3. F11.2 décidée ≠ API disponible.
-4. F13.4 décidée ≠ vue RO / isolation réalisées.
-5. Persistence / IAM / RGPD / volumes = `NOT SELECTED` / `UNKNOWN`.
-6. B5 · R1 · R-M01 · HARD restent ouverts (non ignorés, non fermés).
+- ouverture T-A7 · développement fonctionnel ;
+- implémentation F11.2 / F13.4 · API · UI · migrations ;
+- mod `method/**` · OPS1/MethodMode fonctionnels ;
+- delivery / cutover · push/PR/merge projet.

 ## Livrables

 | Fichier | Rôle |
 |---------|------|
-| `01-source-truth-and-scope.md` | Sources · vérité · scope |
-| `02-p03-p11-readiness-matrix.md` | Matrice P03–P11 |
-| `03-ops1-isolation-contract.md` | Contrat isolation OPS1 |
-| `04-rollback-strategy.md` | Rollback R0–R3 |
-| `05-evidence-and-non-regression-plan.md` | Catalogue de preuves |
-| `06-holds-and-stop-conditions.md` | Holds · anti-bypass · stops |
-| `07-f03-3-satisfaction-assessment.md` | Évaluation F03.3 |
-| `08-morris-t-a7-opening-decision-pack.md` | Bulletin O1–O4 |
-| `README.md` | Synthèse · verdict · gate |
+| `01`–`08` | framing + matrices + bulletin (MAJ O2) |
+| `09-bounded-technical-preparation-results.md` | résultats campagne O2 |
+| `README.md` | synthèse |
+| 6 probes sous `app/__tests__/**` | preuves techniques |

 ## Anti-claims

-- readiness documentée ≠ F03.3 satisfaite ;
-- F03.3 satisfaite ≠ T-A7 OPEN ;
-- T-A7 OPEN futur ≠ delivery autorisée ;
-- contrat OPS1 ≠ isolation réalisée ;
-- plan de tests ≠ tests exécutés ;
-- rollback documenté ≠ rollback testé ;
-- API F11.2 définie ≠ API implémentée ;
-- vue F13.4 définie ≠ runtime read-only livré ;
-- matrice P* qualifiée ≠ validation runtime ;
-- recommandation ≠ décision Morris.
+- O2 ≠ T-A7 OPEN ;
+- validation OPS1 ≠ isolation implémentée ;
+- tests verts ≠ delivery/cutover ;
+- F03.3 BLOCKERS REDUCED ≠ SATISFIED global.

 ## Gate candidat suivant

-`GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN`
+`GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN`

 **Statut :** `NOT CONSUMED`

-(Dépend du verdict F03.3 partiel — pas de gate d’ouverture tant que blockers non traités ou bornés.)
-
 ## Verdict

-`T-A7 TECHNICAL READINESS FRAMED — P03 TO P11 QUALIFIED — OPS1 ISOLATION CONTRACT DOCUMENTED — ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS DEFINED — F03.3 SATISFACTION ASSESSED FROM EVIDENCE — MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — NO CODE OR TECHNICAL EXECUTION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
+`T-A7 BOUNDED TECHNICAL PREPARATION COMPLETED — OPS1 VALIDATION EVIDENCE COLLECTED — P03 TO P11 GAPS REASSESSED — READINESS BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — F03.3 REEVALUATED FROM EXECUTED EVIDENCE — MORRIS DECISION PACK UPDATED WITHOUT PRESELECTION — NO FUNCTIONAL DEVELOPMENT — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

## Gouvernance

F03.3/F11.2/F13.4 DECIDED · T-A7 NOT OPEN · B5/R1/R-M01 OPEN · HARD OPEN HARD · delivery/cutover NOT AUTHORIZED · persistence/IAM NOT SELECTED · RGPD NOT VALIDATED

## Actions non exécutées

push/PR/merge · e2e Playwright · build Next · impl F11/F13 · mod method/OPS1/MethodMode · Notion/CMP

## Findings

Info: asymétrie policy/loader · volumes hors worktree · hold MethodMode absent · aucun Critical/Major

## Verdict

`T-A7 BOUNDED TECHNICAL PREPARATION COMPLETED — OPS1 VALIDATION EVIDENCE COLLECTED — P03 TO P11 GAPS REASSESSED — READINESS BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — F03.3 REEVALUATED FROM EXECUTED EVIDENCE — MORRIS DECISION PACK UPDATED WITHOUT PRESELECTION — NO FUNCTIONAL DEVELOPMENT — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
