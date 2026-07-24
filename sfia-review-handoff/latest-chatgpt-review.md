# ChatGPT Review Pack — FULL

## META

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-24 05:32:05 CEST (+0200) |
| **Cycle** | Delivery — T-A0 Doctrine Foundation |
| **Profil** | Critical |
| **Gate consommé** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` — docs(sfia-studio): establish v3-native Option A foundation (#260) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation` |
| **HEAD initial** | `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` |
| **HEAD final** | `1f213921bd7fc3cd1a1f88a98efc7df60b39ce46` |
| **Handoff source (pré-cycle)** | blob `bba645a2872600051a362846d85fd7eb4b4a0c5f` |
| **Niveau** | FULL |

## 1. Truth Check

- Date/heure Europe/Paris: OK
- `pwd`: worktree tech `sfia-workspace-v3-native-option-a-tech`
- `origin/main` = `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` — **MATCH**
- Handoff blob `bba645a…` — **MATCH**
- Working tree initial: propre
- Branche créée depuis `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` (pas depuis PR branch)
- Pas de branche T-A0 doctrine concurrente (ops1 xatt-a0b hors scope)
- Pas de merge/rebase/cherry-pick/bisect/locks
- **Verdict Truth Check**: PASS — non bloquant

## 2. Cycle Knowledge Contract

- recherché: oui
- cycle: delivery / slice T-A0
- statut: candidate ou absent (guidance cognitive uniquement)
- **aucune autorité d’exécution**
- non utilisé comme doctrine runtime

## 3. Sources

Gouvernance cycle template · handoff post-merge · FD/FA/UX/Modeled/AT Option A · AT 01/02/03/08–13 · schemas DoctrinePackageManifest/Ref/Digest/Provenance/ErrorRecord · runtime `app/lib/**` · sfia-context (lecture isolation) · OPS1 lecture seule

## 4. Scope T-A0 / hors scope

**Inclus**: DoctrinePackage representation, registry local, validation AJV, digest SHA-256, ResolveDoctrinePackage, ports, erreurs, provenance, tests fail-closed, docs delivery.

**Exclus**: Project/LPS, CKC runtime, Decision/Confirmation/Execution, agents, Evidence, ReviewBundle, UI, cutover, MethodMode/OPS1 removal, SQL, IAM, T-A1+.

## 5. Actifs KEEP / ADAPT / REWORK / REPLACE / HISTORICAL-ONLY

| Actif | Qualif |
|-------|--------|
| `canonicalPaths` / `sourceLoader` / `contextResolver` | REPLACE (futur) — **non utilisés** T-A0 |
| AJV@6 transitive | ADAPT |
| EventSink / logs JSON | ADAPT → AuditJournalPort |
| D1Error / Ops1Error | KEEP (non réutilisés) |
| Schemas modeled OA | KEEP + consommation bornée |
| OPS1 | HISTORICAL-ONLY / isolation |
| `method/**` | PROTECTED |

## 6. Architecture implémentée

Modular monolith isolé `lib/oa/doctrine`:

- **Domain**: types, digest canonique, invariants, erreurs
- **Application**: `ValidateDoctrinePackage`, `ResolveDoctrinePackage`
- **Ports**: Repository, Resolver, SchemaValidation, DigestVerification, Clock, AuditJournal
- **Infra**: FilesystemDoctrinePackageRepository, AjvSchemaValidationAdapter, Sha256DigestVerificationAdapter, SystemClock/FixedClock, Console/Memory audit

**Digest (T-A0-D03)**: SHA-256 du JSON canonique (clés triées) du manifest **sans** champ `digest` ; format `sha256:<hex>`.

**Registry (T-A0-D02)**: `registry.json` + `packages/<dir>/manifest.json` ; path ≠ id métier ; deny traversal / method.

**Pas de cache (T-A0-D07)**. Pas de fallback v2.6 / method / OPS1 / sfia-context.

## 7. Erreurs

Detail codes T-A0 → modeled ErrorRecord:
- la plupart → `DOCTRINE_UNRESOLVED`
- stale → `CONTEXT_STALE`
Detail: DOCTRINE_MANIFEST_INVALID, SCHEMA_MISMATCH, DIGEST_MISMATCH, SOURCE_FORBIDDEN, VERSION_UNSUPPORTED, INTERNAL_RESOLUTION_ERROR

## 8. Tests

- `__tests__/oa/doctrine/*` — **24 PASS**
- platform + fixtures smoke — **10 PASS**
- typecheck PASS · lint OA PASS · next build PASS
- anti-legacy imports PASS
- pas SQL / secrets

## 9. Documentation delivery

`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/` README + 01–05

## 10. Décisions candidates T-A0-D01…D08

Voir `05-delivery-validation-and-decision-pack.md` — **non validées** sans Morris.

## 11. Hypothèses / inconnues / réserves / dette

- ajv transitive (promotion directe candidate)
- provenance obligatoire runtime vs optionnelle schema
- example modeled digest placeholder
- module non branché sessions
- DB/IAM/Evidence hors scope

## 12. Anti-claims

Pas T-A0 VALIDATED · Pas MERGED · Pas T-A1 AUTHORIZED · Pas READY FOR DELIVERY GLOBAL · Pas DOCTRINE RUNTIME GLOBALLY ADOPTED · Pas V2.6 REMOVED · Pas MethodMode REMOVED · Pas OPS1 RETIRED · Pas OPTION A IMPLEMENTED

## 13. Diff name-status (939c33a..HEAD)

```
A	projects/sfia-studio/app/__tests__/oa/doctrine/antiLegacy.test.ts
A	projects/sfia-studio/app/__tests__/oa/doctrine/resolveDoctrinePackage.test.ts
A	projects/sfia-studio/app/__tests__/oa/doctrine/schemaValidation.test.ts
A	projects/sfia-studio/app/lib/oa/doctrine/application/resolveDoctrinePackage.ts
A	projects/sfia-studio/app/lib/oa/doctrine/application/validateDoctrinePackage.ts
A	projects/sfia-studio/app/lib/oa/doctrine/domain/digest.ts
A	projects/sfia-studio/app/lib/oa/doctrine/domain/errors.ts
A	projects/sfia-studio/app/lib/oa/doctrine/domain/invariants.ts
A	projects/sfia-studio/app/lib/oa/doctrine/domain/types.ts
A	projects/sfia-studio/app/lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json
A	projects/sfia-studio/app/lib/oa/doctrine/fixtures/registry.json
A	projects/sfia-studio/app/lib/oa/doctrine/index.ts
A	projects/sfia-studio/app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts
A	projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
A	projects/sfia-studio/app/lib/oa/doctrine/infrastructure/observability.ts
A	projects/sfia-studio/app/lib/oa/doctrine/infrastructure/sha256DigestVerificationAdapter.ts
A	projects/sfia-studio/app/lib/oa/doctrine/infrastructure/systemClock.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/auditJournalPort.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/clockPort.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/digestVerificationPort.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageResolverPort.ts
A	projects/sfia-studio/app/lib/oa/doctrine/ports/schemaValidationPort.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/01-scope-and-implementation-map.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/02-runtime-contracts-and-invariants.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/03-validation-security-and-failure-modes.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/04-tests-evidence-and-reserves.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/05-delivery-validation-and-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/README.md
```

## 14. Diff stat

```
 .../app/__tests__/oa/doctrine/antiLegacy.test.ts   |  81 ++++
 .../oa/doctrine/resolveDoctrinePackage.test.ts     | 504 +++++++++++++++++++++
 .../__tests__/oa/doctrine/schemaValidation.test.ts |  52 +++
 .../doctrine/application/resolveDoctrinePackage.ts | 209 +++++++++
 .../application/validateDoctrinePackage.ts         | 188 ++++++++
 .../app/lib/oa/doctrine/domain/digest.ts           |  51 +++
 .../app/lib/oa/doctrine/domain/errors.ts           |  84 ++++
 .../app/lib/oa/doctrine/domain/invariants.ts       | 210 +++++++++
 .../app/lib/oa/doctrine/domain/types.ts            | 193 ++++++++
 .../packages/pkg-studio-v3-oa-1.0.0/manifest.json  |  35 ++
 .../app/lib/oa/doctrine/fixtures/registry.json     |  12 +
 projects/sfia-studio/app/lib/oa/doctrine/index.ts  |  87 ++++
 .../infrastructure/ajvSchemaValidationAdapter.ts   |  84 ++++
 .../filesystemDoctrinePackageRepository.ts         | 157 +++++++
 .../oa/doctrine/infrastructure/observability.ts    |  18 +
 .../sha256DigestVerificationAdapter.ts             |  28 ++
 .../lib/oa/doctrine/infrastructure/systemClock.ts  |  14 +
 .../app/lib/oa/doctrine/ports/auditJournalPort.ts  |  23 +
 .../app/lib/oa/doctrine/ports/clockPort.ts         |   3 +
 .../oa/doctrine/ports/digestVerificationPort.ts    |   6 +
 .../ports/doctrinePackageRepositoryPort.ts         |  44 ++
 .../doctrine/ports/doctrinePackageResolverPort.ts  |   8 +
 .../lib/oa/doctrine/ports/schemaValidationPort.ts  |  18 +
 .../01-scope-and-implementation-map.md             |  49 ++
 .../02-runtime-contracts-and-invariants.md         |  57 +++
 .../03-validation-security-and-failure-modes.md    |  54 +++
 .../04-tests-evidence-and-reserves.md              |  33 ++
 .../05-delivery-validation-and-decision-pack.md    |  53 +++
 .../t-a0-doctrine-foundation/README.md             |  32 ++
 29 files changed, 2387 insertions(+)
```

## 15. Commits

```
1f21392 docs(sfia-studio): document Option A T-A0 delivery
2e05d94 feat(sfia-studio): add v3 DoctrinePackage foundation
```

## 16. Actions non exécutées

- Push branche projet: **NON**
- PR: **NON**
- Merge: **NON**
- Modification `method/**`: **NON**
- Suppression legacy: **NON**
- T-A1: **NON**
- Cutover: **NON**
- Nouvelle dépendance package.json: **NON** (ajv transitive)

## 17. Working tree final

```
## delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation
?? .tmp-sfia-review/
```

## 18. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A0 DOCTRINE FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED**

## 19. Gate suivant candidat

`GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0`

## 20. Diff complet utile (939c33a..HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/doctrine/antiLegacy.test.ts b/projects/sfia-studio/app/__tests__/oa/doctrine/antiLegacy.test.ts
new file mode 100644
index 0000000..41f613f
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/doctrine/antiLegacy.test.ts
@@ -0,0 +1,81 @@
+/**
+ * Anti-regression: T-A0 doctrine module must not use legacy doctrine authorities.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const OA_DOCTRINE = path.join(APP_ROOT, "lib/oa/doctrine");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "fixtures" || entry.name === "node_modules") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.tsx?$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+describe("T-A0 doctrine anti-legacy boundaries", () => {
+  it("does not import sfia-context / canonicalPaths / sourceLoader / contextResolver", () => {
+    const files = listTsFiles(OA_DOCTRINE);
+    expect(files.length).toBeGreaterThan(0);
+    const forbidden =
+      /from\s+["']@\/lib\/(?:platform\/)?sfia-context|from\s+["'][^"']*canonicalPaths|from\s+["'][^"']*sourceLoader|from\s+["'][^"']*contextResolver|from\s+["']@\/lib\/ops1/;
+    const hits: string[] = [];
+    for (const file of files) {
+      const text = fs.readFileSync(file, "utf8");
+      for (const line of text.split("\n")) {
+        if (forbidden.test(line)) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("does not reference method/** or v2.6 fallback as doctrine source", () => {
+    const files = listTsFiles(OA_DOCTRINE);
+    const hits: string[] = [];
+    for (const file of files) {
+      const text = fs.readFileSync(file, "utf8");
+      // Allow mentions in comments/docs about forbidding these paths
+      for (const line of text.split("\n")) {
+        const trimmed = line.trim();
+        if (trimmed.startsWith("*") || trimmed.startsWith("//") || trimmed.startsWith("*")) {
+          continue;
+        }
+        if (
+          /fallback.*v2\.6|loadCanonicalSource|resolveSfiaCanonicalContext|SFIA_CANONICAL_CORE_PATHS/.test(
+            trimmed,
+          )
+        ) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${trimmed}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("forbids lib/oa from importing lib/ops1", () => {
+    const files = listTsFiles(path.join(APP_ROOT, "lib/oa"));
+    const hits: string[] = [];
+    for (const file of files) {
+      const text = fs.readFileSync(file, "utf8");
+      for (const line of text.split("\n")) {
+        if (/from\s+["']@\/lib\/ops1/.test(line)) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/doctrine/resolveDoctrinePackage.test.ts b/projects/sfia-studio/app/__tests__/oa/doctrine/resolveDoctrinePackage.test.ts
new file mode 100644
index 0000000..cc3a6a1
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/doctrine/resolveDoctrinePackage.test.ts
@@ -0,0 +1,504 @@
+/**
+ * T-A0 Doctrine Foundation — resolution, fail-closed, anti-legacy.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  AjvSchemaValidationAdapter,
+  FilesystemDoctrinePackageRepository,
+  FixedClock,
+  MemoryDoctrineAuditJournal,
+  ResolveDoctrinePackage,
+  Sha256DigestVerificationAdapter,
+  computeManifestDigest,
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackageManifest,
+} from "@/lib/oa/doctrine";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+function buildResolver(registryRoot = FIXTURES) {
+  const audit = new MemoryDoctrineAuditJournal();
+  const resolver = new ResolveDoctrinePackage(
+    new FilesystemDoctrinePackageRepository({ registryRoot }),
+    new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS }),
+    new Sha256DigestVerificationAdapter(),
+    new FixedClock("2026-07-24T03:00:00.000Z"),
+    audit,
+  );
+  return { resolver, audit };
+}
+
+function writeTempRegistry(mutate: (dir: string) => void): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "oa-doctrine-"));
+  fs.cpSync(FIXTURES, dir, { recursive: true });
+  mutate(dir);
+  return dir;
+}
+
+describe("T-A0 doctrine digest", () => {
+  it("computes deterministic digest independent of key order", () => {
+    const a = {
+      schemaVersion: "0.1.0-oa" as const,
+      doctrinePackageId: "pkg:studio-v3-oa",
+      version: "1.0.0",
+      status: "published" as const,
+      sources: [
+        {
+          doctrineSourceRef: "src:framing-30-37",
+          kind: "framing" as const,
+          label: "Doctrine v3",
+        },
+      ],
+      allowlist: ["sfia-v3-framing", "v3-native-option-a"],
+      publishedAt: "2026-07-23T21:00:00.000Z",
+      freshness: "current" as const,
+      compatibility: {
+        studioNativeV3: true as const,
+        legacyV26Fallback: false as const,
+      },
+      provenance: {
+        schemaVersion: "0.1.0-oa" as const,
+        provenanceRecordId: "prv:pkg-studio-v3-oa-1",
+        actor: { actorId: "sys:doctrine-publisher", role: "system" as const },
+        source: "system" as const,
+        timestamp: "2026-07-23T21:00:00.000Z",
+        correlationId: "cor:t-a0-fixture",
+      },
+    };
+    const b = JSON.parse(JSON.stringify(a));
+    expect(computeManifestDigest(a)).toBe(VALID_DIGEST);
+    expect(computeManifestDigest(b)).toBe(VALID_DIGEST);
+  });
+});
+
+describe("T-A0 doctrine resolution success", () => {
+  it("resolves valid pin with provenance and audit", async () => {
+    const { resolver, audit } = buildResolver();
+    const result = await resolver.resolve({
+      pin: VALID_PIN,
+      correlationId: "cor:t-a0-success",
+    });
+    expect(result.outcome).toBe("resolved");
+    if (result.outcome !== "resolved") return;
+    expect(result.manifest.doctrinePackageId).toBe("pkg:studio-v3-oa");
+    expect(result.ref.status).toBe("resolved");
+    expect(result.ref.digest).toBe(VALID_DIGEST);
+    expect(result.provenance.correlationId).toBe("cor:t-a0-success");
+    expect(result.provenance.source).toBe("system");
+    expect(audit.events).toHaveLength(1);
+    expect(audit.events[0]?.result).toBe("resolved");
+  });
+
+  it("is deterministic across repeated resolves", async () => {
+    const { resolver } = createTestDoctrineResolver({
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+    });
+    const a = await resolver.resolve({ pin: VALID_PIN, correlationId: "cor:a" });
+    const b = await resolver.resolve({ pin: VALID_PIN, correlationId: "cor:b" });
+    expect(a.outcome).toBe("resolved");
+    expect(b.outcome).toBe("resolved");
+    if (a.outcome === "resolved" && b.outcome === "resolved") {
+      expect(a.manifest.digest).toBe(b.manifest.digest);
+      expect(a.ref.digest).toBe(b.ref.digest);
+    }
+  });
+});
+
+describe("T-A0 doctrine fail-closed", () => {
+  it("rejects missing package", async () => {
+    const { resolver } = buildResolver();
+    const result = await resolver.resolve({
+      pin: {
+        doctrinePackageId: "pkg:missing",
+        version: "1.0.0",
+        digest: VALID_DIGEST,
+      },
+    });
+    expect(result.outcome).toBe("not_found");
+    if (result.outcome === "resolved") return;
+    expect(result.error.detailCode).toBe("DOCTRINE_UNRESOLVED");
+    expect(result.error.code).toBe("DOCTRINE_UNRESOLVED");
+  });
+
+  it("rejects invalid JSON", async () => {
+    const dir = writeTempRegistry((root) => {
+      fs.writeFileSync(
+        path.join(root, "packages/pkg-studio-v3-oa-1.0.0/manifest.json"),
+        "{not-json",
+        "utf8",
+      );
+    });
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({ pin: VALID_PIN });
+    expect(result.outcome).toBe("invalid_manifest");
+  });
+
+  it("rejects schema-invalid manifest", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
+      delete m.compatibility;
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: {
+        ...VALID_PIN,
+        digest: registry.entries[0].digest,
+      },
+    });
+    expect(result.outcome).toBe("schema_mismatch");
+    if (result.outcome === "resolved") return;
+    expect(result.error.detailCode).toBe("DOCTRINE_SCHEMA_MISMATCH");
+  });
+
+  it("rejects packageId mismatch", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.doctrinePackageId = "pkg:other";
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("invalid_manifest");
+  });
+
+  it("rejects version mismatch", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.version = "9.9.9";
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("invalid_manifest");
+  });
+
+  it("rejects digest mismatch against registry pin", async () => {
+    const { resolver } = buildResolver();
+    const wrong =
+      "sha256:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" as Digest;
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: wrong },
+    });
+    expect(result.outcome).toBe("digest_mismatch");
+    if (result.outcome === "resolved") return;
+    expect(result.error.detailCode).toBe("DOCTRINE_DIGEST_MISMATCH");
+  });
+
+  it("rejects digest mismatch when registry pin matches but content differs", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.sources[0]!.label = "tampered";
+      // keep old digest on purpose
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+    });
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({ pin: VALID_PIN });
+    expect(result.outcome).toBe("digest_mismatch");
+    if (result.outcome === "resolved") return;
+    expect(result.error.detailCode).toBe("DOCTRINE_DIGEST_MISMATCH");
+  });
+
+  it("rejects forbidden method/** source", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.sources = [
+        {
+          doctrineSourceRef: "src:method-core",
+          kind: "other",
+          label: "method/sfia-fast-track/core/rules.md",
+        },
+      ];
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("source_not_allowed");
+  });
+
+  it("rejects v2.6 allowlist entry", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.allowlist = ["sfia-v2.6-legacy"];
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("source_not_allowed");
+  });
+
+  it("rejects permissive failurePolicy", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
+      m.failurePolicy = "permissive";
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+    });
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({ pin: VALID_PIN });
+    expect(result.outcome).toBe("source_not_allowed");
+  });
+
+  it("rejects unsupported schemaVersion", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
+      m.schemaVersion = "9.9.9";
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    // schema const fails first
+    expect(["schema_mismatch", "unsupported_version"]).toContain(
+      result.outcome,
+    );
+  });
+
+  it("rejects path traversal in registry entry", async () => {
+    const dir = writeTempRegistry((root) => {
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].relativePackageDir = "../packages/pkg-studio-v3-oa-1.0.0";
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({ pin: VALID_PIN });
+    expect(result.outcome).toBe("not_found");
+  });
+
+  it("rejects method/** package path", async () => {
+    const dir = writeTempRegistry((root) => {
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].relativePackageDir = "method/sfia-core";
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({ pin: VALID_PIN });
+    expect(result.outcome).toBe("not_found");
+  });
+
+  it("rejects stale freshness", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.freshness = "stale";
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("stale_package");
+    if (result.outcome === "resolved") return;
+    expect(result.error.code).toBe("CONTEXT_STALE");
+  });
+
+  it("rejects revoked status", async () => {
+    const dir = writeTempRegistry((root) => {
+      const manifestPath = path.join(
+        root,
+        "packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+      );
+      const m = JSON.parse(
+        fs.readFileSync(manifestPath, "utf8"),
+      ) as DoctrinePackageManifest;
+      m.status = "revoked";
+      m.digest = computeManifestDigest(m);
+      fs.writeFileSync(manifestPath, JSON.stringify(m), "utf8");
+      const registry = JSON.parse(
+        fs.readFileSync(path.join(root, "registry.json"), "utf8"),
+      );
+      registry.entries[0].digest = m.digest;
+      fs.writeFileSync(
+        path.join(root, "registry.json"),
+        JSON.stringify(registry),
+        "utf8",
+      );
+    });
+    const registry = JSON.parse(
+      fs.readFileSync(path.join(dir, "registry.json"), "utf8"),
+    );
+    const { resolver } = buildResolver(dir);
+    const result = await resolver.resolve({
+      pin: { ...VALID_PIN, digest: registry.entries[0].digest },
+    });
+    expect(result.outcome).toBe("unsupported_version");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/doctrine/schemaValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/doctrine/schemaValidation.test.ts
new file mode 100644
index 0000000..953308d
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/doctrine/schemaValidation.test.ts
@@ -0,0 +1,52 @@
+/**
+ * Modeled DoctrinePackageManifest schema executed via T-A0 AJV adapter.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  AjvSchemaValidationAdapter,
+  computeManifestDigest,
+} from "@/lib/oa/doctrine";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+const MODELED_EXAMPLE = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/examples/doctrine-package-manifest.valid.json",
+);
+const FIXTURE = path.join(
+  APP_ROOT,
+  "lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json",
+);
+
+describe("T-A0 AJV schema validation", () => {
+  it("accepts T-A0 fixture manifest", async () => {
+    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
+    const raw = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
+    const result = await adapter.validateDoctrinePackageManifest(raw);
+    expect(result).toEqual({ ok: true });
+  });
+
+  it("accepts modeled example after digest/provenance alignment", async () => {
+    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
+    const raw = JSON.parse(fs.readFileSync(MODELED_EXAMPLE, "utf8"));
+    // Modeled example uses placeholder digest and omits provenance —
+    // schema allows optional provenance; placeholder digest still matches pattern.
+    const result = await adapter.validateDoctrinePackageManifest(raw);
+    expect(result.ok).toBe(true);
+  });
+
+  it("rejects manifest missing required compatibility", async () => {
+    const adapter = new AjvSchemaValidationAdapter({ schemasRoot: SCHEMAS });
+    const raw = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
+    delete raw.compatibility;
+    raw.digest = computeManifestDigest(raw);
+    const result = await adapter.validateDoctrinePackageManifest(raw);
+    expect(result.ok).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/application/resolveDoctrinePackage.ts b/projects/sfia-studio/app/lib/oa/doctrine/application/resolveDoctrinePackage.ts
new file mode 100644
index 0000000..4fe73f5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/application/resolveDoctrinePackage.ts
@@ -0,0 +1,209 @@
+import { createDoctrineError } from "../domain/errors";
+import type {
+  ActorReference,
+  DoctrineResolveRequest,
+  DoctrineResolveResult,
+} from "../domain/types";
+import type { AuditJournalPort } from "../ports/auditJournalPort";
+import type { ClockPort } from "../ports/clockPort";
+import type { DigestVerificationPort } from "../ports/digestVerificationPort";
+import type { DoctrinePackageRepositoryPort } from "../ports/doctrinePackageRepositoryPort";
+import type { DoctrinePackageResolverPort } from "../ports/doctrinePackageResolverPort";
+import type { SchemaValidationPort } from "../ports/schemaValidationPort";
+import {
+  ValidateDoctrinePackage,
+  resolutionProvenance,
+} from "./validateDoctrinePackage";
+
+const DEFAULT_RESOLVER_ACTOR: ActorReference = {
+  actorId: "sys:doctrine-resolver",
+  role: "system",
+};
+
+function digestSuffix(digest: string | undefined): string | undefined {
+  if (!digest || digest.length < 12) return undefined;
+  return digest.slice(-12);
+}
+
+/**
+ * Application use-case: resolve a DoctrinePackage pin via ports only.
+ * No filesystem access. Fail-closed. No v2.6 / method / OPS1 fallback.
+ */
+export class ResolveDoctrinePackage implements DoctrinePackageResolverPort {
+  private readonly validate: ValidateDoctrinePackage;
+
+  constructor(
+    private readonly repository: DoctrinePackageRepositoryPort,
+    schemaValidation: SchemaValidationPort,
+    digestVerification: DigestVerificationPort,
+    private readonly clock: ClockPort,
+    private readonly audit: AuditJournalPort,
+  ) {
+    this.validate = new ValidateDoctrinePackage(
+      schemaValidation,
+      digestVerification,
+    );
+  }
+
+  async resolve(request: DoctrineResolveRequest): Promise<DoctrineResolveResult> {
+    const started = Date.now();
+    const timestamp = this.clock.nowIso();
+    const correlationId =
+      request.correlationId ?? `cor:doctrine-${started.toString(36)}`;
+    const { pin } = request;
+    const adapter = "local-registry";
+
+    const fail = (
+      outcome: Exclude<DoctrineResolveResult, { outcome: "resolved" }>["outcome"],
+      detailCode: Parameters<typeof createDoctrineError>[0]["detailCode"],
+      internalCauseRef?: string,
+      extra?: { expectedDigest?: string; observedDigest?: string },
+    ): DoctrineResolveResult => {
+      const durationMs = Date.now() - started;
+      const error = createDoctrineError({
+        detailCode,
+        timestamp,
+        correlationId,
+        doctrinePackageId: pin.doctrinePackageId,
+        version: pin.version,
+        expectedDigest: extra?.expectedDigest ?? pin.digest,
+        observedDigest: extra?.observedDigest,
+        internalCauseRef,
+      });
+      this.audit.append({
+        event: "oa.doctrine.resolution",
+        ts: timestamp,
+        correlationId,
+        doctrinePackageId: pin.doctrinePackageId,
+        packageVersion: pin.version,
+        expectedDigestSuffix: digestSuffix(pin.digest),
+        observedDigestSuffix: digestSuffix(extra?.observedDigest),
+        result: outcome,
+        detailCode,
+        durationMs,
+        adapter,
+      });
+      return { outcome, error, durationMs };
+    };
+
+    try {
+      const entry = await this.repository.findEntry(
+        pin.doctrinePackageId,
+        pin.version,
+      );
+      if (!entry) {
+        return fail("not_found", "DOCTRINE_UNRESOLVED", "registry_entry_missing");
+      }
+
+      if (entry.digest !== pin.digest) {
+        return fail(
+          "digest_mismatch",
+          "DOCTRINE_DIGEST_MISMATCH",
+          "registry_digest_mismatch_pin",
+          { expectedDigest: pin.digest, observedDigest: entry.digest },
+        );
+      }
+
+      const loaded = await this.repository.loadManifest(entry);
+      if (!loaded.ok) {
+        if (loaded.kind === "not_found") {
+          return fail("not_found", "DOCTRINE_UNRESOLVED", loaded.kind);
+        }
+        if (loaded.kind === "path_forbidden") {
+          return fail(
+            "source_not_allowed",
+            "DOCTRINE_SOURCE_FORBIDDEN",
+            loaded.kind,
+          );
+        }
+        if (loaded.kind === "invalid_json") {
+          return fail(
+            "invalid_manifest",
+            "DOCTRINE_MANIFEST_INVALID",
+            loaded.kind,
+          );
+        }
+        return fail(
+          "internal_resolution_error",
+          "INTERNAL_RESOLUTION_ERROR",
+          loaded.kind,
+          undefined,
+        );
+      }
+
+      const validated = await this.validate.execute({
+        pin,
+        rawJson: loaded.rawJson,
+        correlationId,
+        timestamp,
+      });
+
+      if (!validated.ok) {
+        const durationMs = Date.now() - started;
+        this.audit.append({
+          event: "oa.doctrine.resolution",
+          ts: timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          packageVersion: pin.version,
+          expectedDigestSuffix: digestSuffix(pin.digest),
+          observedDigestSuffix: digestSuffix(
+            validated.error.observedDigest,
+          ),
+          result: validated.outcome,
+          detailCode: validated.error.detailCode,
+          durationMs,
+          adapter,
+        });
+        return {
+          outcome: validated.outcome,
+          error: validated.error,
+          durationMs,
+        };
+      }
+
+      const resolverActor = request.resolverActor ?? DEFAULT_RESOLVER_ACTOR;
+      const provenance = resolutionProvenance({
+        timestamp,
+        correlationId,
+        doctrinePackageId: pin.doctrinePackageId,
+        version: pin.version,
+        digest: pin.digest,
+      });
+      const durationMs = Date.now() - started;
+      const result: DoctrineResolveResult = {
+        outcome: "resolved",
+        manifest: validated.manifest,
+        ref: {
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          digest: pin.digest,
+          resolvedAt: timestamp,
+          resolver: resolverActor,
+          status: "resolved",
+        },
+        provenance,
+        durationMs,
+      };
+      this.audit.append({
+        event: "oa.doctrine.resolution",
+        ts: timestamp,
+        correlationId,
+        doctrinePackageId: pin.doctrinePackageId,
+        packageVersion: pin.version,
+        expectedDigestSuffix: digestSuffix(pin.digest),
+        observedDigestSuffix: digestSuffix(validated.computedDigest),
+        result: "resolved",
+        durationMs,
+        adapter,
+      });
+      return result;
+    } catch {
+      return fail(
+        "internal_resolution_error",
+        "INTERNAL_RESOLUTION_ERROR",
+        "unexpected_exception",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/application/validateDoctrinePackage.ts b/projects/sfia-studio/app/lib/oa/doctrine/application/validateDoctrinePackage.ts
new file mode 100644
index 0000000..6ee8e89
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/application/validateDoctrinePackage.ts
@@ -0,0 +1,188 @@
+import { createDoctrineError } from "../domain/errors";
+import {
+  inspectRawManifestSemantics,
+  validateManifestSemantics,
+} from "../domain/invariants";
+import type {
+  DoctrinePackageManifest,
+  DoctrinePackagePin,
+  ProvenanceRecord,
+} from "../domain/types";
+import type { DigestVerificationPort } from "../ports/digestVerificationPort";
+import type { SchemaValidationPort } from "../ports/schemaValidationPort";
+
+export type ValidateDoctrinePackageInput = {
+  pin: DoctrinePackagePin;
+  rawJson: unknown;
+  correlationId?: string;
+  timestamp: string;
+};
+
+export type ValidateDoctrinePackageOk = {
+  ok: true;
+  manifest: DoctrinePackageManifest;
+  computedDigest: string;
+};
+
+export type ValidateDoctrinePackageErr = {
+  ok: false;
+  outcome:
+    | "invalid_manifest"
+    | "schema_mismatch"
+    | "digest_mismatch"
+    | "source_not_allowed"
+    | "unsupported_version"
+    | "stale_package";
+  error: ReturnType<typeof createDoctrineError>;
+};
+
+export type ValidateDoctrinePackageResult =
+  | ValidateDoctrinePackageOk
+  | ValidateDoctrinePackageErr;
+
+export class ValidateDoctrinePackage {
+  constructor(
+    private readonly schemaValidation: SchemaValidationPort,
+    private readonly digestVerification: DigestVerificationPort,
+  ) {}
+
+  async execute(
+    input: ValidateDoctrinePackageInput,
+  ): Promise<ValidateDoctrinePackageResult> {
+    const { pin, rawJson, correlationId, timestamp } = input;
+
+    const rawSemantic = inspectRawManifestSemantics(rawJson);
+    if (rawSemantic) {
+      return {
+        ok: false,
+        outcome:
+          rawSemantic.detailCode === "DOCTRINE_SOURCE_FORBIDDEN"
+            ? "source_not_allowed"
+            : rawSemantic.detailCode === "DOCTRINE_VERSION_UNSUPPORTED"
+              ? "unsupported_version"
+              : "invalid_manifest",
+        error: createDoctrineError({
+          detailCode: rawSemantic.detailCode,
+          timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          expectedDigest: pin.digest,
+          internalCauseRef: rawSemantic.reason,
+        }),
+      };
+    }
+
+    const schema = await this.schemaValidation.validateDoctrinePackageManifest(
+      rawJson,
+    );
+    if (!schema.ok) {
+      return {
+        ok: false,
+        outcome: "schema_mismatch",
+        error: createDoctrineError({
+          detailCode: "DOCTRINE_SCHEMA_MISMATCH",
+          timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          expectedDigest: pin.digest,
+          internalCauseRef: "schema_validation_failed",
+        }),
+      };
+    }
+
+    const manifest = rawJson as DoctrinePackageManifest;
+    const computed = this.digestVerification.computeManifestDigest(manifest);
+
+    if (!this.digestVerification.verify(pin.digest, computed)) {
+      return {
+        ok: false,
+        outcome: "digest_mismatch",
+        error: createDoctrineError({
+          detailCode: "DOCTRINE_DIGEST_MISMATCH",
+          timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          expectedDigest: pin.digest,
+          observedDigest: computed,
+          internalCauseRef: "computed_digest_mismatch_pin",
+        }),
+      };
+    }
+
+    if (!this.digestVerification.verify(manifest.digest, computed)) {
+      return {
+        ok: false,
+        outcome: "digest_mismatch",
+        error: createDoctrineError({
+          detailCode: "DOCTRINE_DIGEST_MISMATCH",
+          timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          expectedDigest: manifest.digest,
+          observedDigest: computed,
+          internalCauseRef: "computed_digest_mismatch_manifest",
+        }),
+      };
+    }
+
+    const semantic = validateManifestSemantics(manifest, {
+      doctrinePackageId: pin.doctrinePackageId,
+      version: pin.version,
+      digest: pin.digest,
+    });
+    if (semantic) {
+      const outcome =
+        semantic.detailCode === "DOCTRINE_DIGEST_MISMATCH"
+          ? "digest_mismatch"
+          : semantic.detailCode === "DOCTRINE_SOURCE_FORBIDDEN"
+            ? "source_not_allowed"
+            : semantic.detailCode === "DOCTRINE_VERSION_UNSUPPORTED"
+              ? "unsupported_version"
+              : semantic.detailCode === "CONTEXT_STALE"
+                ? "stale_package"
+                : "invalid_manifest";
+      return {
+        ok: false,
+        outcome,
+        error: createDoctrineError({
+          detailCode: semantic.detailCode,
+          timestamp,
+          correlationId,
+          doctrinePackageId: pin.doctrinePackageId,
+          version: pin.version,
+          expectedDigest: pin.digest,
+          observedDigest: computed,
+          internalCauseRef: semantic.reason,
+        }),
+      };
+    }
+
+    return {
+      ok: true,
+      manifest,
+      computedDigest: computed,
+    };
+  }
+}
+
+export function resolutionProvenance(input: {
+  timestamp: string;
+  correlationId: string;
+  doctrinePackageId: string;
+  version: string;
+  digest: string;
+}): ProvenanceRecord {
+  return {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: `prv:resolve-${input.doctrinePackageId}-${input.version}`,
+    actor: { actorId: "sys:doctrine-resolver", role: "system" },
+    source: "system",
+    timestamp: input.timestamp,
+    correlationId: input.correlationId,
+    doctrinePackageRef: `${input.doctrinePackageId}@${input.version}#${input.digest}`,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/domain/digest.ts b/projects/sfia-studio/app/lib/oa/doctrine/domain/digest.ts
new file mode 100644
index 0000000..ac0151d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/domain/digest.ts
@@ -0,0 +1,51 @@
+/**
+ * Canonical SHA-256 digest for DoctrinePackageManifest (T-A0-D03).
+ *
+ * Digested material: canonical JSON of the manifest object with the `digest`
+ * field omitted. Deterministic, path-independent, testable.
+ * Format: sha256:<64 lowercase hex>.
+ */
+import { createHash } from "node:crypto";
+import type { Digest, DoctrinePackageManifest } from "./types";
+
+export function canonicalizeJson(value: unknown): string {
+  if (value === null || typeof value !== "object") {
+    return JSON.stringify(value);
+  }
+  if (Array.isArray(value)) {
+    return `[${value.map((item) => canonicalizeJson(item)).join(",")}]`;
+  }
+  const record = value as Record<string, unknown>;
+  const keys = Object.keys(record).sort();
+  return `{${keys
+    .map((key) => `${JSON.stringify(key)}:${canonicalizeJson(record[key])}`)
+    .join(",")}}`;
+}
+
+/** Payload used for digest: all manifest fields except `digest`. */
+export function manifestDigestPayload(
+  manifest: Omit<DoctrinePackageManifest, "digest"> | DoctrinePackageManifest,
+): Record<string, unknown> {
+  const { digest: _omit, ...rest } = manifest as DoctrinePackageManifest & {
+    digest?: Digest;
+  };
+  void _omit;
+  return rest as Record<string, unknown>;
+}
+
+export function computeManifestDigest(
+  manifest: Omit<DoctrinePackageManifest, "digest"> | DoctrinePackageManifest,
+): Digest {
+  const payload = manifestDigestPayload(manifest);
+  const canonical = canonicalizeJson(payload);
+  const hex = createHash("sha256").update(canonical, "utf8").digest("hex");
+  return `sha256:${hex}`;
+}
+
+export function isDigestFormat(value: string): value is Digest {
+  return /^sha256:[a-f0-9]{64}$/.test(value);
+}
+
+export function digestsEqual(a: string, b: string): boolean {
+  return a === b;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/domain/errors.ts b/projects/sfia-studio/app/lib/oa/doctrine/domain/errors.ts
new file mode 100644
index 0000000..d17a57d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/domain/errors.ts
@@ -0,0 +1,84 @@
+import type {
+  DoctrineDetailCode,
+  DoctrineStructuredError,
+  ModeledErrorCode,
+  ProvenanceRecord,
+} from "./types";
+
+const DETAIL_TO_MODELED: Record<DoctrineDetailCode, ModeledErrorCode> = {
+  DOCTRINE_UNRESOLVED: "DOCTRINE_UNRESOLVED",
+  DOCTRINE_MANIFEST_INVALID: "DOCTRINE_UNRESOLVED",
+  DOCTRINE_SCHEMA_MISMATCH: "DOCTRINE_UNRESOLVED",
+  DOCTRINE_DIGEST_MISMATCH: "DOCTRINE_UNRESOLVED",
+  DOCTRINE_SOURCE_FORBIDDEN: "DOCTRINE_UNRESOLVED",
+  DOCTRINE_VERSION_UNSUPPORTED: "DOCTRINE_UNRESOLVED",
+  CONTEXT_STALE: "CONTEXT_STALE",
+  INTERNAL_RESOLUTION_ERROR: "DOCTRINE_UNRESOLVED",
+};
+
+const SAFE_MESSAGES: Record<DoctrineDetailCode, string> = {
+  DOCTRINE_UNRESOLVED: "Doctrine package could not be resolved.",
+  DOCTRINE_MANIFEST_INVALID: "Doctrine package manifest is invalid.",
+  DOCTRINE_SCHEMA_MISMATCH: "Doctrine package schema validation failed.",
+  DOCTRINE_DIGEST_MISMATCH: "Doctrine package digest mismatch.",
+  DOCTRINE_SOURCE_FORBIDDEN: "Doctrine package source is forbidden.",
+  DOCTRINE_VERSION_UNSUPPORTED: "Doctrine package version is unsupported.",
+  CONTEXT_STALE: "Doctrine package is stale.",
+  INTERNAL_RESOLUTION_ERROR: "Internal doctrine resolution error.",
+};
+
+export function mapDetailToModeledCode(
+  detail: DoctrineDetailCode,
+): ModeledErrorCode {
+  return DETAIL_TO_MODELED[detail];
+}
+
+export function createDoctrineError(input: {
+  detailCode: DoctrineDetailCode;
+  timestamp: string;
+  correlationId?: string;
+  doctrinePackageId?: string;
+  version?: string;
+  expectedDigest?: string;
+  observedDigest?: string;
+  provenance?: ProvenanceRecord;
+  internalCauseRef?: string;
+  retryable?: boolean;
+}): DoctrineStructuredError {
+  const detailCode = input.detailCode;
+  const severity =
+    detailCode === "INTERNAL_RESOLUTION_ERROR" ? "error" : "critical";
+  const retryable =
+    input.retryable ??
+    (detailCode === "DOCTRINE_UNRESOLVED" ||
+      detailCode === "INTERNAL_RESOLUTION_ERROR");
+
+  return {
+    code: mapDetailToModeledCode(detailCode),
+    detailCode,
+    message: SAFE_MESSAGES[detailCode],
+    severity,
+    retryable,
+    blocking: true,
+    recoverable: detailCode !== "DOCTRINE_SOURCE_FORBIDDEN",
+    domain: "B",
+    correlationId: input.correlationId,
+    doctrinePackageId: input.doctrinePackageId,
+    version: input.version,
+    expectedDigest: input.expectedDigest,
+    observedDigest: input.observedDigest,
+    provenance: input.provenance,
+    timestamp: input.timestamp,
+    internalCauseRef: input.internalCauseRef,
+  };
+}
+
+export class DoctrineResolutionError extends Error {
+  readonly structured: DoctrineStructuredError;
+
+  constructor(structured: DoctrineStructuredError) {
+    super(structured.message);
+    this.name = "DoctrineResolutionError";
+    this.structured = structured;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/doctrine/domain/invariants.ts
new file mode 100644
index 0000000..bc711f5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/domain/invariants.ts
@@ -0,0 +1,210 @@
+/**
+ * Semantic invariants for T-A0 DoctrinePackage (beyond JSON Schema).
+ */
+import type { DoctrineDetailCode, DoctrinePackageManifest } from "./types";
+
+const FORBIDDEN_SOURCE_PATTERNS: RegExp[] = [
+  /(^|\/)method(\/|$)/i,
+  /v2\.6/i,
+  /sfia[_-]?v2/i,
+  /(^|\/)prompts(\/|$)/i,
+  /methodmode/i,
+];
+
+const FORBIDDEN_ALLOWLIST_PATTERNS: RegExp[] = [
+  /(^|\/)method(\/|$)/i,
+  /v2\.6/i,
+  /sfia[_-]?v2/i,
+  /^ops1$/i,
+  /legacy[_-]?v26/i,
+];
+
+export type SemanticViolation = {
+  detailCode: DoctrineDetailCode;
+  reason: string;
+};
+
+function textLooksForbidden(value: string, patterns: RegExp[]): boolean {
+  return patterns.some((re) => re.test(value));
+}
+
+/**
+ * Raw pre-schema checks for fields that schema forbids via additionalProperties
+ * but that we still reject explicitly when present on untyped input.
+ */
+export function inspectRawManifestSemantics(
+  raw: unknown,
+): SemanticViolation | null {
+  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
+    return {
+      detailCode: "DOCTRINE_MANIFEST_INVALID",
+      reason: "manifest_not_object",
+    };
+  }
+  const obj = raw as Record<string, unknown>;
+
+  if ("failurePolicy" in obj) {
+    const policy = obj.failurePolicy;
+    if (policy !== "fail-closed" && policy !== "fail_closed") {
+      return {
+        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+        reason: "failure_policy_not_fail_closed",
+      };
+    }
+  }
+
+  const compatibility = obj.compatibility;
+  if (
+    compatibility &&
+    typeof compatibility === "object" &&
+    !Array.isArray(compatibility)
+  ) {
+    const c = compatibility as Record<string, unknown>;
+    if (c.legacyV26Fallback === true) {
+      return {
+        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+        reason: "legacy_v26_fallback_true",
+      };
+    }
+    if (c.studioNativeV3 === false) {
+      return {
+        detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
+        reason: "studio_native_v3_false",
+      };
+    }
+  }
+
+  return null;
+}
+
+export function validateManifestSemantics(
+  manifest: DoctrinePackageManifest,
+  expected: {
+    doctrinePackageId: string;
+    version: string;
+    digest: string;
+  },
+): SemanticViolation | null {
+  if (manifest.schemaVersion !== "0.1.0-oa") {
+    return {
+      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
+      reason: "unsupported_schema_version",
+    };
+  }
+
+  if (manifest.doctrinePackageId !== expected.doctrinePackageId) {
+    return {
+      detailCode: "DOCTRINE_MANIFEST_INVALID",
+      reason: "package_id_mismatch",
+    };
+  }
+
+  if (manifest.version !== expected.version) {
+    return {
+      detailCode: "DOCTRINE_MANIFEST_INVALID",
+      reason: "version_mismatch",
+    };
+  }
+
+  if (manifest.digest !== expected.digest) {
+    return {
+      detailCode: "DOCTRINE_DIGEST_MISMATCH",
+      reason: "manifest_digest_field_mismatch",
+    };
+  }
+
+  if (manifest.status === "draft" || manifest.status === "revoked") {
+    return {
+      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
+      reason: `status_${manifest.status}_not_consumable`,
+    };
+  }
+
+  if (manifest.freshness === "stale") {
+    return {
+      detailCode: "CONTEXT_STALE",
+      reason: "freshness_stale",
+    };
+  }
+
+  if (manifest.compatibility.studioNativeV3 !== true) {
+    return {
+      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
+      reason: "studio_native_v3_required",
+    };
+  }
+
+  if (manifest.compatibility.legacyV26Fallback === true) {
+    return {
+      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+      reason: "legacy_v26_fallback",
+    };
+  }
+
+  for (const source of manifest.sources) {
+    if (
+      textLooksForbidden(source.doctrineSourceRef, FORBIDDEN_SOURCE_PATTERNS)
+    ) {
+      return {
+        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+        reason: "forbidden_source_ref",
+      };
+    }
+    if (
+      source.label &&
+      textLooksForbidden(source.label, FORBIDDEN_SOURCE_PATTERNS)
+    ) {
+      return {
+        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+        reason: "forbidden_source_label",
+      };
+    }
+  }
+
+  for (const entry of manifest.allowlist ?? []) {
+    if (textLooksForbidden(entry, FORBIDDEN_ALLOWLIST_PATTERNS)) {
+      return {
+        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+        reason: "forbidden_allowlist_entry",
+      };
+    }
+  }
+
+  if (!manifest.provenance) {
+    return {
+      detailCode: "DOCTRINE_MANIFEST_INVALID",
+      reason: "provenance_required",
+    };
+  }
+
+  return null;
+}
+
+/** Relative package path safety — deny traversal and protected prefixes. */
+export function assertSafeRelativePackageDir(
+  relativePackageDir: string,
+): SemanticViolation | null {
+  if (!relativePackageDir || typeof relativePackageDir !== "string") {
+    return {
+      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+      reason: "empty_relative_dir",
+    };
+  }
+  if (
+    relativePackageDir.startsWith("/") ||
+    relativePackageDir.includes("\\") ||
+    relativePackageDir.split("/").some((p) => p === ".." || p === "")
+  ) {
+    return {
+      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+      reason: "path_traversal",
+    };
+  }
+  if (textLooksForbidden(relativePackageDir, FORBIDDEN_SOURCE_PATTERNS)) {
+    return {
+      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
+      reason: "forbidden_package_path",
+    };
+  }
+  return null;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/domain/types.ts b/projects/sfia-studio/app/lib/oa/doctrine/domain/types.ts
new file mode 100644
index 0000000..554b6ae
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/domain/types.ts
@@ -0,0 +1,193 @@
+/**
+ * T-A0 Doctrine Foundation — domain types (Option A v3-native).
+ * Modeled schemas are the reference contract; adoption is T-A0-scoped only.
+ */
+
+export const OA_SCHEMA_VERSION = "0.1.0-oa" as const;
+
+export type Digest = `sha256:${string}`;
+
+export type DoctrinePackageStatus =
+  | "draft"
+  | "published"
+  | "deprecated"
+  | "revoked";
+
+export type DoctrineFreshness = "current" | "aging" | "stale";
+
+export type DoctrineSourceKind =
+  | "framing"
+  | "design"
+  | "modeled"
+  | "ux"
+  | "other";
+
+export type DoctrineSourceRef = {
+  doctrineSourceRef: string;
+  kind: DoctrineSourceKind;
+  label?: string;
+  digest?: Digest;
+};
+
+export type ActorReference = {
+  actorId: string;
+  role:
+    | "user"
+    | "project_owner"
+    | "decision_maker"
+    | "approver"
+    | "reviewer"
+    | "system"
+    | "agent";
+  displayName?: string;
+  authorityLevel?: "N1" | "N2" | "N3" | "none";
+};
+
+export type ProvenanceRecord = {
+  schemaVersion: typeof OA_SCHEMA_VERSION;
+  provenanceRecordId: string;
+  actor: ActorReference;
+  source:
+    | "conversation"
+    | "system"
+    | "human_decision"
+    | "confirmation"
+    | "execution_adapter"
+    | "review"
+    | "migration_future";
+  timestamp: string;
+  correlationId: string;
+  projectId?: string;
+  cycleInstanceId?: string;
+  doctrinePackageRef?: string;
+  supersedes?: string;
+  evidenceRefs?: string[];
+};
+
+export type DoctrinePackageCompatibility = {
+  studioNativeV3: true;
+  /** Must be false or absent; `true` is rejected by semantic validation. */
+  legacyV26Fallback?: boolean;
+};
+
+export type DoctrinePackageManifest = {
+  schemaVersion: typeof OA_SCHEMA_VERSION;
+  doctrinePackageId: string;
+  version: string;
+  digest: Digest;
+  status: DoctrinePackageStatus;
+  sources: DoctrineSourceRef[];
+  allowlist?: string[];
+  publishedAt: string;
+  freshness?: DoctrineFreshness;
+  compatibility: DoctrinePackageCompatibility;
+  provenance?: ProvenanceRecord;
+};
+
+/** Pin used as resolution input (path is never a business id). */
+export type DoctrinePackagePin = {
+  doctrinePackageId: string;
+  version: string;
+  digest: Digest;
+};
+
+export type DoctrinePackageRefStatus =
+  | "resolved"
+  | "unresolved"
+  | "stale"
+  | "invalid";
+
+export type DoctrinePackageRef = {
+  doctrinePackageId: string;
+  version: string;
+  digest: Digest;
+  resolvedAt: string;
+  resolver: ActorReference;
+  status: DoctrinePackageRefStatus;
+};
+
+export type DoctrineResolutionOutcome =
+  | "resolved"
+  | "not_found"
+  | "invalid_manifest"
+  | "schema_mismatch"
+  | "digest_mismatch"
+  | "source_not_allowed"
+  | "unsupported_version"
+  | "stale_package"
+  | "internal_resolution_error";
+
+export type DoctrineResolveRequest = {
+  pin: DoctrinePackagePin;
+  correlationId?: string;
+  resolverActor?: ActorReference;
+};
+
+export type DoctrinePackageResolved = {
+  outcome: "resolved";
+  manifest: DoctrinePackageManifest;
+  ref: DoctrinePackageRef;
+  provenance: ProvenanceRecord;
+  durationMs: number;
+};
+
+export type DoctrinePackageFailed = {
+  outcome: Exclude<DoctrineResolutionOutcome, "resolved">;
+  error: DoctrineStructuredError;
+  durationMs: number;
+};
+
+export type DoctrineResolveResult =
+  | DoctrinePackageResolved
+  | DoctrinePackageFailed;
+
+/** Modeled ErrorRecord codes applicable to doctrine (M-OA). */
+export type ModeledErrorCode = "DOCTRINE_UNRESOLVED" | "CONTEXT_STALE";
+
+/**
+ * T-A0 detail codes — finer than modeled ErrorRecord enum.
+ * Mapped onto ModeledErrorCode for ErrorRecord-compatible emission (T-A0-D06).
+ */
+export type DoctrineDetailCode =
+  | "DOCTRINE_UNRESOLVED"
+  | "DOCTRINE_MANIFEST_INVALID"
+  | "DOCTRINE_SCHEMA_MISMATCH"
+  | "DOCTRINE_DIGEST_MISMATCH"
+  | "DOCTRINE_SOURCE_FORBIDDEN"
+  | "DOCTRINE_VERSION_UNSUPPORTED"
+  | "CONTEXT_STALE"
+  | "INTERNAL_RESOLUTION_ERROR";
+
+export type DoctrineStructuredError = {
+  code: ModeledErrorCode;
+  detailCode: DoctrineDetailCode;
+  message: string;
+  severity: "error" | "critical";
+  retryable: boolean;
+  blocking: boolean;
+  recoverable: boolean;
+  domain: "B";
+  correlationId?: string;
+  doctrinePackageId?: string;
+  version?: string;
+  expectedDigest?: string;
+  observedDigest?: string;
+  provenance?: ProvenanceRecord;
+  timestamp: string;
+  /** Opaque internal cause — never exposed to clients. */
+  internalCauseRef?: string;
+};
+
+export type LocalRegistryEntry = {
+  doctrinePackageId: string;
+  version: string;
+  digest: Digest;
+  /** Relative directory under registry root; never a business id. */
+  relativePackageDir: string;
+  status: DoctrinePackageStatus;
+};
+
+export type LocalDoctrineRegistry = {
+  schemaVersion: "0.1.0-oa-registry";
+  entries: LocalRegistryEntry[];
+};
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json b/projects/sfia-studio/app/lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json
new file mode 100644
index 0000000..537bb05
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/fixtures/packages/pkg-studio-v3-oa-1.0.0/manifest.json
@@ -0,0 +1,35 @@
+{
+  "schemaVersion": "0.1.0-oa",
+  "doctrinePackageId": "pkg:studio-v3-oa",
+  "version": "1.0.0",
+  "digest": "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
+  "status": "published",
+  "sources": [
+    {
+      "doctrineSourceRef": "src:framing-30-37",
+      "kind": "framing",
+      "label": "Doctrine v3"
+    }
+  ],
+  "allowlist": [
+    "sfia-v3-framing",
+    "v3-native-option-a"
+  ],
+  "publishedAt": "2026-07-23T21:00:00.000Z",
+  "freshness": "current",
+  "compatibility": {
+    "studioNativeV3": true,
+    "legacyV26Fallback": false
+  },
+  "provenance": {
+    "schemaVersion": "0.1.0-oa",
+    "provenanceRecordId": "prv:pkg-studio-v3-oa-1",
+    "actor": {
+      "actorId": "sys:doctrine-publisher",
+      "role": "system"
+    },
+    "source": "system",
+    "timestamp": "2026-07-23T21:00:00.000Z",
+    "correlationId": "cor:t-a0-fixture"
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/fixtures/registry.json b/projects/sfia-studio/app/lib/oa/doctrine/fixtures/registry.json
new file mode 100644
index 0000000..56a8099
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/fixtures/registry.json
@@ -0,0 +1,12 @@
+{
+  "schemaVersion": "0.1.0-oa-registry",
+  "entries": [
+    {
+      "doctrinePackageId": "pkg:studio-v3-oa",
+      "version": "1.0.0",
+      "digest": "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
+      "relativePackageDir": "packages/pkg-studio-v3-oa-1.0.0",
+      "status": "published"
+    }
+  ]
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/index.ts b/projects/sfia-studio/app/lib/oa/doctrine/index.ts
new file mode 100644
index 0000000..dceb16b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/index.ts
@@ -0,0 +1,87 @@
+/**
+ * T-A0 Doctrine Foundation — public barrel.
+ *
+ * Isolated Option A v3-native module. Does not replace sfia-context /
+ * canonicalPaths / sourceLoader / contextResolver. No MethodMode / OPS1 cutover.
+ */
+
+export * from "./domain/types";
+export * from "./domain/errors";
+export * from "./domain/digest";
+export * from "./domain/invariants";
+
+export * from "./ports/doctrinePackageRepositoryPort";
+export * from "./ports/doctrinePackageResolverPort";
+export * from "./ports/schemaValidationPort";
+export * from "./ports/digestVerificationPort";
+export * from "./ports/clockPort";
+export * from "./ports/auditJournalPort";
+
+export {
+  ValidateDoctrinePackage,
+  resolutionProvenance,
+} from "./application/validateDoctrinePackage";
+export { ResolveDoctrinePackage } from "./application/resolveDoctrinePackage";
+
+export { AjvSchemaValidationAdapter } from "./infrastructure/ajvSchemaValidationAdapter";
+export { Sha256DigestVerificationAdapter } from "./infrastructure/sha256DigestVerificationAdapter";
+export { FilesystemDoctrinePackageRepository } from "./infrastructure/filesystemDoctrinePackageRepository";
+export {
+  SystemClock,
+  FixedClock,
+} from "./infrastructure/systemClock";
+export {
+  ConsoleDoctrineAuditJournal,
+  MemoryDoctrineAuditJournal,
+} from "./infrastructure/observability";
+
+import path from "node:path";
+import { ResolveDoctrinePackage } from "./application/resolveDoctrinePackage";
+import { AjvSchemaValidationAdapter } from "./infrastructure/ajvSchemaValidationAdapter";
+import { FilesystemDoctrinePackageRepository } from "./infrastructure/filesystemDoctrinePackageRepository";
+import {
+  ConsoleDoctrineAuditJournal,
+  MemoryDoctrineAuditJournal,
+} from "./infrastructure/observability";
+import { Sha256DigestVerificationAdapter } from "./infrastructure/sha256DigestVerificationAdapter";
+import { SystemClock } from "./infrastructure/systemClock";
+import type { AuditJournalPort } from "./ports/auditJournalPort";
+import type { DoctrinePackageResolverPort } from "./ports/doctrinePackageResolverPort";
+
+export type CreateLocalDoctrineResolverOptions = {
+  registryRoot: string;
+  schemasRoot: string;
+  audit?: AuditJournalPort;
+};
+
+/** Factory for the bounded local registry resolver (tests / internal API). */
+export function createLocalDoctrineResolver(
+  options: CreateLocalDoctrineResolverOptions,
+): DoctrinePackageResolverPort {
+  return new ResolveDoctrinePackage(
+    new FilesystemDoctrinePackageRepository({
+      registryRoot: path.resolve(options.registryRoot),
+    }),
+    new AjvSchemaValidationAdapter({
+      schemasRoot: path.resolve(options.schemasRoot),
+    }),
+    new Sha256DigestVerificationAdapter(),
+    new SystemClock(),
+    options.audit ?? new ConsoleDoctrineAuditJournal(),
+  );
+}
+
+export function createTestDoctrineResolver(
+  options: CreateLocalDoctrineResolverOptions & {
+    audit?: MemoryDoctrineAuditJournal;
+  },
+): {
+  resolver: DoctrinePackageResolverPort;
+  audit: MemoryDoctrineAuditJournal;
+} {
+  const audit = options.audit ?? new MemoryDoctrineAuditJournal();
+  return {
+    resolver: createLocalDoctrineResolver({ ...options, audit }),
+    audit,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts
new file mode 100644
index 0000000..edacb3a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/ajvSchemaValidationAdapter.ts
@@ -0,0 +1,84 @@
+/**
+ * AJV Draft-07 SchemaValidationPort — consumes modeled Option A schemas.
+ * Uses lockfile-transitive ajv@6 (eslint stack). Declaring ajv as a direct
+ * dependency is a candidate follow-up (T-A0 reserve), not done here.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import Ajv from "ajv";
+import type {
+  SchemaValidationPort,
+  SchemaValidationResult,
+} from "../ports/schemaValidationPort";
+
+const MANIFEST_SCHEMA_ID =
+  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/doctrine/doctrine-package-manifest.schema.json";
+
+const MAX_ERRORS = 20;
+
+export type AjvSchemaValidationAdapterOptions = {
+  /** Absolute path to …/sfia-v3-modeled/v3-native-option-a/schemas */
+  schemasRoot: string;
+};
+
+function loadJson(filePath: string): object {
+  return JSON.parse(fs.readFileSync(filePath, "utf8")) as object;
+}
+
+export class AjvSchemaValidationAdapter implements SchemaValidationPort {
+  private readonly ajv: Ajv.Ajv;
+  private ready = false;
+
+  constructor(private readonly options: AjvSchemaValidationAdapterOptions) {
+    this.ajv = new Ajv({
+      allErrors: true,
+      schemaId: "auto",
+      meta: true,
+      validateSchema: true,
+      // Draft-07 format support for date-time
+      format: "full",
+      unknownFormats: "ignore",
+    });
+  }
+
+  private ensureLoaded(): void {
+    if (this.ready) return;
+    const root = path.resolve(this.options.schemasRoot);
+    const commonDir = path.join(root, "common");
+    const doctrineDir = path.join(root, "doctrine");
+
+    const commonFiles = [
+      "digest.schema.json",
+      "identifier.schema.json",
+      "timestamp.schema.json",
+      "actor-reference.schema.json",
+      "provenance-record.schema.json",
+    ];
+    for (const file of commonFiles) {
+      this.ajv.addSchema(loadJson(path.join(commonDir, file)));
+    }
+    this.ajv.addSchema(
+      loadJson(path.join(doctrineDir, "doctrine-package-manifest.schema.json")),
+    );
+    this.ajv.addSchema(
+      loadJson(path.join(doctrineDir, "doctrine-package-ref.schema.json")),
+    );
+    this.ready = true;
+  }
+
+  async validateDoctrinePackageManifest(
+    value: unknown,
+  ): Promise<SchemaValidationResult> {
+    this.ensureLoaded();
+    const validate = this.ajv.getSchema(MANIFEST_SCHEMA_ID);
+    if (!validate) {
+      return { ok: false, errors: ["manifest_schema_not_loaded"] };
+    }
+    const ok = validate(value) as boolean;
+    if (ok) return { ok: true };
+    const errors = (validate.errors ?? [])
+      .slice(0, MAX_ERRORS)
+      .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
+    return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
new file mode 100644
index 0000000..e7e8a2c
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository.ts
@@ -0,0 +1,157 @@
+/**
+ * Local filesystem DoctrinePackage repository — allowlisted registry only.
+ * Read-only. Path ≠ business id. Deny-by-default + traversal protection.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { assertSafeRelativePackageDir } from "../domain/invariants";
+import type {
+  Digest,
+  LocalDoctrineRegistry,
+  LocalRegistryEntry,
+} from "../domain/types";
+import type {
+  DoctrinePackageLoadResult,
+  DoctrinePackageRepositoryPort,
+} from "../ports/doctrinePackageRepositoryPort";
+
+const MAX_MANIFEST_BYTES = 256_000;
+const REGISTRY_FILE = "registry.json";
+const MANIFEST_FILE = "manifest.json";
+
+export type FilesystemDoctrinePackageRepositoryOptions = {
+  /** Absolute path to registry root containing registry.json + packages/. */
+  registryRoot: string;
+};
+
+function isDigest(value: unknown): value is Digest {
+  return typeof value === "string" && /^sha256:[a-f0-9]{64}$/.test(value);
+}
+
+export class FilesystemDoctrinePackageRepository
+  implements DoctrinePackageRepositoryPort
+{
+  private registry: LocalDoctrineRegistry | null = null;
+
+  constructor(
+    private readonly options: FilesystemDoctrinePackageRepositoryOptions,
+  ) {}
+
+  private root(): string {
+    return path.resolve(this.options.registryRoot);
+  }
+
+  private loadRegistry(): LocalDoctrineRegistry {
+    if (this.registry) return this.registry;
+    const registryPath = path.join(this.root(), REGISTRY_FILE);
+    const raw = fs.readFileSync(registryPath, "utf8");
+    const parsed = JSON.parse(raw) as LocalDoctrineRegistry;
+    if (parsed.schemaVersion !== "0.1.0-oa-registry") {
+      throw new Error("unsupported_registry_schema");
+    }
+    if (!Array.isArray(parsed.entries)) {
+      throw new Error("invalid_registry_entries");
+    }
+    this.registry = parsed;
+    return parsed;
+  }
+
+  async findEntry(
+    doctrinePackageId: string,
+    version: string,
+  ): Promise<LocalRegistryEntry | null> {
+    const registry = this.loadRegistry();
+    const entry = registry.entries.find(
+      (e) =>
+        e.doctrinePackageId === doctrinePackageId && e.version === version,
+    );
+    if (!entry) return null;
+    if (!isDigest(entry.digest)) return null;
+    const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
+    if (pathViolation) return null;
+    return entry;
+  }
+
+  async loadManifest(
+    entry: LocalRegistryEntry,
+  ): Promise<DoctrinePackageLoadResult> {
+    const pathViolation = assertSafeRelativePackageDir(entry.relativePackageDir);
+    if (pathViolation) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "relative package path forbidden",
+      };
+    }
+
+    const root = this.root();
+    const packageDir = path.resolve(root, entry.relativePackageDir);
+    if (packageDir !== root && !packageDir.startsWith(root + path.sep)) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "resolved path escapes registry root",
+      };
+    }
+
+    const manifestPath = path.join(packageDir, MANIFEST_FILE);
+    if (
+      path.resolve(manifestPath) !== manifestPath ||
+      !manifestPath.startsWith(packageDir + path.sep)
+    ) {
+      return {
+        ok: false,
+        kind: "path_forbidden",
+        message: "manifest path invalid",
+      };
+    }
+
+    try {
+      if (!fs.existsSync(manifestPath) || !fs.statSync(manifestPath).isFile()) {
+        return {
+          ok: false,
+          kind: "not_found",
+          message: "manifest not found",
+        };
+      }
+      const buf = fs.readFileSync(manifestPath);
+      if (buf.length > MAX_MANIFEST_BYTES) {
+        return {
+          ok: false,
+          kind: "too_large",
+          message: "manifest exceeds size limit",
+        };
+      }
+      if (buf.includes(0)) {
+        return {
+          ok: false,
+          kind: "io_error",
+          message: "binary manifest refused",
+        };
+      }
+      const rawText = buf.toString("utf8");
+      let rawJson: unknown;
+      try {
+        rawJson = JSON.parse(rawText);
+      } catch {
+        return {
+          ok: false,
+          kind: "invalid_json",
+          message: "manifest json parse failed",
+        };
+      }
+      return {
+        ok: true,
+        rawText,
+        rawJson,
+        absoluteManifestPath: manifestPath,
+      };
+    } catch {
+      return {
+        ok: false,
+        kind: "io_error",
+        message: "manifest read failed",
+      };
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/observability.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/observability.ts
new file mode 100644
index 0000000..9ab7231
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/observability.ts
@@ -0,0 +1,18 @@
+import type {
+  AuditJournalPort,
+  DoctrineAuditEvent,
+} from "../ports/auditJournalPort";
+
+/** Structured console sink — does not log doctrinal content. */
+export class ConsoleDoctrineAuditJournal implements AuditJournalPort {
+  append(event: DoctrineAuditEvent): void {
+    console.info(JSON.stringify(event));
+  }
+}
+
+export class MemoryDoctrineAuditJournal implements AuditJournalPort {
+  readonly events: DoctrineAuditEvent[] = [];
+  append(event: DoctrineAuditEvent): void {
+    this.events.push(event);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/sha256DigestVerificationAdapter.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/sha256DigestVerificationAdapter.ts
new file mode 100644
index 0000000..6cdfafb
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/sha256DigestVerificationAdapter.ts
@@ -0,0 +1,28 @@
+import {
+  computeManifestDigest,
+  digestsEqual,
+  isDigestFormat,
+} from "../domain/digest";
+import type { Digest } from "../domain/types";
+import type { DigestVerificationPort } from "../ports/digestVerificationPort";
+
+export class Sha256DigestVerificationAdapter implements DigestVerificationPort {
+  computeManifestDigest(manifestWithoutDigestOrFull: unknown): Digest {
+    if (
+      !manifestWithoutDigestOrFull ||
+      typeof manifestWithoutDigestOrFull !== "object"
+    ) {
+      throw new Error("digest_input_invalid");
+    }
+    return computeManifestDigest(
+      manifestWithoutDigestOrFull as Parameters<typeof computeManifestDigest>[0],
+    );
+  }
+
+  verify(expected: Digest, observed: Digest): boolean {
+    if (!isDigestFormat(expected) || !isDigestFormat(observed)) {
+      return false;
+    }
+    return digestsEqual(expected, observed);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/systemClock.ts b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/systemClock.ts
new file mode 100644
index 0000000..931de4a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/infrastructure/systemClock.ts
@@ -0,0 +1,14 @@
+import type { ClockPort } from "../ports/clockPort";
+
+export class SystemClock implements ClockPort {
+  nowIso(): string {
+    return new Date().toISOString();
+  }
+}
+
+export class FixedClock implements ClockPort {
+  constructor(private readonly iso: string) {}
+  nowIso(): string {
+    return this.iso;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/auditJournalPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/auditJournalPort.ts
new file mode 100644
index 0000000..c046a64
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/auditJournalPort.ts
@@ -0,0 +1,23 @@
+import type { DoctrineResolveResult } from "../domain/types";
+
+/**
+ * Minimal audit/observability sink for T-A0.
+ * Compatible with future EventSink wiring; no distributed broker.
+ */
+export type DoctrineAuditEvent = {
+  event: "oa.doctrine.resolution";
+  ts: string;
+  correlationId?: string;
+  doctrinePackageId?: string;
+  packageVersion?: string;
+  expectedDigestSuffix?: string;
+  observedDigestSuffix?: string;
+  result: DoctrineResolveResult["outcome"];
+  detailCode?: string;
+  durationMs: number;
+  adapter: string;
+};
+
+export interface AuditJournalPort {
+  append(event: DoctrineAuditEvent): void;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/clockPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/clockPort.ts
new file mode 100644
index 0000000..a973b93
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/clockPort.ts
@@ -0,0 +1,3 @@
+export interface ClockPort {
+  nowIso(): string;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/digestVerificationPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/digestVerificationPort.ts
new file mode 100644
index 0000000..73e9437
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/digestVerificationPort.ts
@@ -0,0 +1,6 @@
+import type { Digest } from "../domain/types";
+
+export interface DigestVerificationPort {
+  computeManifestDigest(manifestWithoutDigestOrFull: unknown): Digest;
+  verify(expected: Digest, observed: Digest): boolean;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
new file mode 100644
index 0000000..bd6247d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageRepositoryPort.ts
@@ -0,0 +1,44 @@
+import type {
+  Digest,
+  DoctrinePackageManifest,
+  LocalRegistryEntry,
+} from "../domain/types";
+
+export type DoctrinePackageLoadOk = {
+  ok: true;
+  rawText: string;
+  rawJson: unknown;
+  absoluteManifestPath: string;
+};
+
+export type DoctrinePackageLoadErr = {
+  ok: false;
+  kind: "not_found" | "io_error" | "path_forbidden" | "too_large" | "invalid_json";
+  message: string;
+};
+
+export type DoctrinePackageLoadResult =
+  | DoctrinePackageLoadOk
+  | DoctrinePackageLoadErr;
+
+/**
+ * Bounded local registry / filesystem adapter.
+ * Does not treat filesystem paths as business identifiers.
+ */
+export interface DoctrinePackageRepositoryPort {
+  findEntry(
+    doctrinePackageId: string,
+    version: string,
+  ): Promise<LocalRegistryEntry | null>;
+
+  loadManifest(
+    entry: LocalRegistryEntry,
+  ): Promise<DoctrinePackageLoadResult>;
+}
+
+export interface DoctrinePackageMetadata {
+  doctrinePackageId: string;
+  version: string;
+  digest: Digest;
+  status: DoctrinePackageManifest["status"];
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageResolverPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageResolverPort.ts
new file mode 100644
index 0000000..b54b35a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/doctrinePackageResolverPort.ts
@@ -0,0 +1,8 @@
+import type {
+  DoctrineResolveRequest,
+  DoctrineResolveResult,
+} from "../domain/types";
+
+export interface DoctrinePackageResolverPort {
+  resolve(request: DoctrineResolveRequest): Promise<DoctrineResolveResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/doctrine/ports/schemaValidationPort.ts b/projects/sfia-studio/app/lib/oa/doctrine/ports/schemaValidationPort.ts
new file mode 100644
index 0000000..ae63000
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/doctrine/ports/schemaValidationPort.ts
@@ -0,0 +1,18 @@
+export type SchemaValidationSuccess = {
+  ok: true;
+};
+
+export type SchemaValidationFailure = {
+  ok: false;
+  errors: string[];
+};
+
+export type SchemaValidationResult =
+  | SchemaValidationSuccess
+  | SchemaValidationFailure;
+
+export interface SchemaValidationPort {
+  validateDoctrinePackageManifest(
+    value: unknown,
+  ): Promise<SchemaValidationResult>;
+}
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/01-scope-and-implementation-map.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/01-scope-and-implementation-map.md
new file mode 100644
index 0000000..dc2b7d4
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/01-scope-and-implementation-map.md
@@ -0,0 +1,49 @@
+# 01 — Scope and implementation map
+
+## Inclus (T-A0)
+
+- Domain: `DoctrinePackageManifest`, `DoctrinePackageRef` / pin, `Digest`, invariants, erreurs structurées
+- Application: `ResolveDoctrinePackage`, `ValidateDoctrinePackage`
+- Ports: repository, resolver, schema validation, digest verification, clock, audit journal
+- Infrastructure: registry filesystem local borné, AJV Draft-07, SHA-256, logs structurés
+- Fixtures package + registry de test
+- Tests unitaires / intégration fail-closed + anti-legacy
+- Documentation delivery T-A0
+
+## Exclus
+
+Project / LPS · CycleInstance · CKC runtime complet · HumanDecision · Confirmation · ExecutionContract · agents · Evidence · ReviewBundle · ClaimEvaluation · UI Option A · cutover v2.6 · suppression MethodMode / OPS1 · migration SQL · IAM · DB sélection
+
+## Chemins
+
+| Rôle | Path |
+|------|------|
+| Module | `projects/sfia-studio/app/lib/oa/doctrine/**` |
+| Fixtures | `…/lib/oa/doctrine/fixtures/**` |
+| Tests | `…/app/__tests__/oa/doctrine/**` |
+| Schemas consommés (lecture) | `sfia-v3-modeled/v3-native-option-a/schemas/**` |
+| Docs | `sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/**` |
+
+## Qualification actifs existants
+
+| Actif | Qualification | Usage T-A0 |
+|-------|---------------|------------|
+| `lib/platform/sfia-context/canonicalPaths` | REPLACE (futur) / HISTORICAL-ONLY pour doctrine v3 | **Non utilisé** comme autorité |
+| `sourceLoader` / `contextResolver` | REPLACE (futur) | **Non utilisés** |
+| `sessionContext` | KEEP (hors T-A0) | Non touché |
+| AJV@6 transitif (lockfile) | ADAPT | SchemaValidationPort |
+| Pattern `EventSink` / logs JSON | ADAPT | `AuditJournalPort` minimal |
+| `D1Error` / `Ops1Error` | KEEP | Non réutilisés ; erreurs OA dédiées |
+| OPS1 | HISTORICAL-ONLY / isolation | Lecture seule pour anti-tests |
+| Schemas modeled OA | KEEP + consommation bornée T-A0 | Contrat de référence |
+| `method/**` | PROTECTED | Interdit comme source |
+
+## Distinction des identités
+
+```
+Git / package source (publication)
+  ≠ datastore runtime (hors T-A0)
+  ≠ identité DoctrinePackage (doctrinePackageId + version + digest)
+```
+
+Le path filesystem du registry n’est **jamais** un identifiant métier.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/02-runtime-contracts-and-invariants.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/02-runtime-contracts-and-invariants.md
new file mode 100644
index 0000000..3e8a29d
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/02-runtime-contracts-and-invariants.md
@@ -0,0 +1,57 @@
+# 02 — Runtime contracts and invariants
+
+## Architecture
+
+Modular monolith (Option C hybride) — nouveau module isolé `lib/oa/doctrine`, sans branchement global session.
+
+```
+ResolveDoctrinePackage
+  → DoctrinePackageRepositoryPort (registry local)
+  → SchemaValidationPort (AJV Draft-07)
+  → DigestVerificationPort (SHA-256)
+  → AuditJournalPort
+```
+
+## Registry
+
+Fichier `registry.json` (schemaVersion `0.1.0-oa-registry`) :
+
+- `doctrinePackageId`, `version`, `digest`, `relativePackageDir`, `status`
+- `relativePackageDir` relatif au root registry, deny `..`, deny `method/**`
+- Package dir contient `manifest.json` en lecture seule
+
+## Digest (T-A0-D03 candidate)
+
+- Algorithme: SHA-256
+- Matériau: JSON canonique (clés triées) du manifest **sans** le champ `digest`
+- Format: `sha256:` + 64 hex minuscules
+- Vérifications: pin.digest ≡ registry.digest ≡ manifest.digest ≡ digest(calculé)
+- Indépendant des chemins absolus
+
+## DoctrinePackageRef
+
+Entrée = **pin** `{ doctrinePackageId, version, digest }`.
+Sortie succès = Ref complète `{ …, resolvedAt, resolver, status: "resolved" }` + provenance.
+
+## Invariants
+
+1. `schemaVersion === 0.1.0-oa`
+2. `compatibility.studioNativeV3 === true`
+3. `legacyV26Fallback` absent ou `false` (jamais `true`)
+4. Aucune source / allowlist / path `method/**`, v2.6, OPS1 doctrine
+5. `failurePolicy` si présent doit être fail-closed
+6. Status consommable: `published` | `deprecated` (`draft`/`revoked` refusés)
+7. `freshness === stale` → fail-closed (`CONTEXT_STALE`)
+8. Provenance requise (règle sémantique T-A0)
+9. Aucun fallback vers `method/**`, templates Cursor, v2.6, OPS1, `canonicalPaths`
+
+## Erreurs
+
+Detail codes T-A0 mappés vers ErrorRecord modeled :
+
+| Detail | Modeled `code` |
+|--------|----------------|
+| DOCTRINE_* (sauf STALE) | `DOCTRINE_UNRESOLVED` |
+| CONTEXT_STALE | `CONTEXT_STALE` |
+
+Les detail codes plus fins (`DOCTRINE_DIGEST_MISMATCH`, …) sont candidats d’extension modeled (T-A0-D06).
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/03-validation-security-and-failure-modes.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/03-validation-security-and-failure-modes.md
new file mode 100644
index 0000000..8fbded1
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/03-validation-security-and-failure-modes.md
@@ -0,0 +1,54 @@
+# 03 — Validation, security and failure modes
+
+## Validation structurelle
+
+- Parse JSON
+- JSON Schema Draft-07 (schemas modeled Option A)
+- `$ref` common (digest, identifier, timestamp, actor, provenance)
+- `additionalProperties: false` sur le manifest
+
+## Validation sémantique
+
+- Cohérence pin ↔ manifest (id, version, digest)
+- Digest recalculé
+- Sources / allowlist interdites
+- Status / freshness / compatibility
+- Provenance présente
+- `failurePolicy` non permissive
+
+## Sécurité
+
+- Allowlist registry stricte (entrées déclarées uniquement)
+- Path traversal bloqué (`..`, absolu, escape root)
+- Taille max manifest 256 KiB
+- Lecture seule
+- Deny-by-default
+- Erreurs non bavardes (cause interne via `internalCauseRef` opaque)
+- Pas de secrets dans fixtures
+- Pas d’IAM / auth dans T-A0
+
+## Résilience (fail-closed)
+
+| Anomalie | Outcome |
+|----------|---------|
+| Package absent | `not_found` |
+| JSON invalide | `invalid_manifest` |
+| Schema | `schema_mismatch` |
+| Digest | `digest_mismatch` |
+| Source interdite | `source_not_allowed` |
+| Version / status | `unsupported_version` |
+| Stale | `stale_package` |
+| IO | `internal_resolution_error` |
+
+Aucun mode dégradé ne recharge la doctrine v2.6.
+
+## Observabilité
+
+Événement `oa.doctrine.resolution` : correlationId, packageId, version, suffixes digest, result, detailCode, durationMs, adapter.
+
+Métriques candidates (non instrumentées) : `doctrine_resolution_total`, `_failed_total`, `_digest_mismatch_total`, `_schema_failure_total`, `_duration`.
+
+## Performance (budgets candidats, non SLA)
+
+- Résolution locale fixture : < 50 ms typique en tests
+- Pas de cache (T-A0-D07) — correction fonctionnelle sans cache
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/04-tests-evidence-and-reserves.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/04-tests-evidence-and-reserves.md
new file mode 100644
index 0000000..bedf75e
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/04-tests-evidence-and-reserves.md
@@ -0,0 +1,33 @@
+# 04 — Tests, evidence and reserves
+
+## Suites
+
+| Fichier | Couverture |
+|---------|------------|
+| `__tests__/oa/doctrine/resolveDoctrinePackage.test.ts` | Succès, fail-closed, traversal, method, v2.6, stale, revoked |
+| `__tests__/oa/doctrine/schemaValidation.test.ts` | AJV fixture + example modeled |
+| `__tests__/oa/doctrine/antiLegacy.test.ts` | Pas d’imports sfia-context / ops1 / fallback |
+
+## Résultats (exécution locale)
+
+Voir `05-delivery-validation-and-decision-pack.md` pour les commandes et sorties.
+
+## Réserves
+
+1. `ajv` reste dépendance **transitive** (eslint) — promotion directe candidate
+2. Codes detail T-A0 non encore dans enum ErrorRecord modeled
+3. Provenance requise en sémantique T-A0 alors qu’optionnelle dans schema modeled
+4. Example modeled `doctrine-package-manifest.valid.json` conserve un digest placeholder (valide schema, non digéré)
+5. Pas de cache ; pas de métriques runtime
+6. Module non branché sur les sessions Studio (activation future)
+7. META docs UX/modeled hors T-A0 restent éventuellement stale (connu post-merge)
+
+## Dette acceptable T-A0
+
+- Factory locale seulement (pas de DI container)
+- Registry filesystem unique adaptateur
+- Pas de CLI dédiée
+
+## Suites T-A1 (hors scope)
+
+Project / LivingProjectState pin DoctrinePackageRef — **non autorisé** ici.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/05-delivery-validation-and-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/05-delivery-validation-and-decision-pack.md
new file mode 100644
index 0000000..bb20d61
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/05-delivery-validation-and-decision-pack.md
@@ -0,0 +1,53 @@
+# 05 — Delivery validation and decision pack
+
+| Champ | Valeur |
+|-------|--------|
+| **Date** | 2026-07-24 (Europe/Paris) |
+| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` |
+| **Verdict candidat** | `SFIA STUDIO V3-NATIVE OPTION A T-A0 DOCTRINE FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
+
+## Validations exécutées
+
+| Commande | Résultat |
+|----------|----------|
+| `npx tsc --noEmit` | PASS |
+| `npx vitest run __tests__/oa/doctrine` | PASS 24/24 |
+| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS 10/10 |
+| `next lint` (fichiers OA ciblés) | PASS |
+| `npx next build` | PASS |
+| `git diff --check` | PASS |
+| Grep SQL/migration dans `lib/oa` | aucun |
+| Grep secrets | aucun |
+| Anti-legacy imports | PASS |
+
+## Décisions candidates (non validées sans Morris)
+
+| ID | Décision | Proposition |
+|----|----------|-------------|
+| **T-A0-D01** | Structure module | `app/lib/oa/doctrine/{domain,application,ports,infrastructure}` |
+| **T-A0-D02** | Format registry | `registry.json` + `packages/<dir>/manifest.json` ; path ≠ id |
+| **T-A0-D03** | Digest | SHA-256 du JSON canonique du manifest hors champ `digest` |
+| **T-A0-D04** | Validation schema | AJV Draft-07 sur schemas modeled `0.1.0-oa` (consommation bornée) |
+| **T-A0-D05** | Validation sémantique | id/version/digest, sources, status, freshness, provenance, anti-v2.6 |
+| **T-A0-D06** | Erreurs | Detail codes T-A0 → ErrorRecord `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE` |
+| **T-A0-D07** | Cache | **Absence de cache** en T-A0 |
+| **T-A0-D08** | Readiness T-A0 | Fondation implémentée + tests ; pas d’adoption globale runtime |
+
+## Hypothèses
+
+- `ajv@6` transitive suffit pour T-A0 sans nouvelle dépendance déclarée
+- Provenance obligatoire côté runtime T-A0 même si schema modeled la laisse optionnelle
+- Registry locale filesystem est l’unique adaptateur P0
+
+## Inconnues / hors T-A0
+
+DB · IAM · Evidence retention · activation session · T-A1 LPS pin
+
+## Anti-claims
+
+Pas T-A0 VALIDATED · Pas MERGED · Pas T-A1 AUTHORIZED · Pas DOCTRINE GLOBALLY ADOPTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED
+
+## Gate suivant candidat
+
+`GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0`
+(puis seulement après validation + PR/merge : `GO DELIVERY … T-A1`)
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/README.md
new file mode 100644
index 0000000..a368c3a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/README.md
@@ -0,0 +1,32 @@
+# T-A0 — Doctrine Foundation (Delivery Option A)
+
+| Champ | Valeur |
+|-------|--------|
+| **Slice** | T-A0 — Doctrine Foundation |
+| **Profil** | Critical |
+| **Gate consommé** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` |
+| **Statut** | Implémenté localement — **MORRIS VALIDATION REQUIRED** |
+| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation` |
+| **Base** | `origin/main` @ `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` |
+
+## Objectif
+
+Fournir une fondation runtime minimale, testée et fail-closed pour représenter, charger, valider et résoudre un `DoctrinePackage` v3-native — sans cutover, sans UI, sans T-A1+.
+
+## Contenu
+
+1. [01-scope-and-implementation-map.md](./01-scope-and-implementation-map.md)
+2. [02-runtime-contracts-and-invariants.md](./02-runtime-contracts-and-invariants.md)
+3. [03-validation-security-and-failure-modes.md](./03-validation-security-and-failure-modes.md)
+4. [04-tests-evidence-and-reserves.md](./04-tests-evidence-and-reserves.md)
+5. [05-delivery-validation-and-decision-pack.md](./05-delivery-validation-and-decision-pack.md)
+
+## Anti-claims
+
+- Pas T-A0 VALIDATED
+- Pas T-A0 MERGED
+- Pas T-A1 AUTHORIZED
+- Pas READY FOR DELIVERY GLOBAL
+- Pas DOCTRINE RUNTIME GLOBALLY ADOPTED
+- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
+- Pas OPTION A IMPLEMENTED
```
