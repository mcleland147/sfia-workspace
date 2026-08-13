/** @vitest-environment node */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");
const RUNTIME_ROOT = path.join(APP_ROOT, "lib/vertical-slice-runtime");

function listSourceFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...listSourceFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

describe("V2-A1 vertical-slice-runtime import boundaries", () => {
  it("keeps the runtime free of UI, fixtures, client storage, and agent imports", () => {
    const forbidden =
      /(?:from|require\()\s*["'](?:react|react-dom|next\/link|next\/navigation|next\/image|@\/app|@\/components|@\/features|@\/lib\/vertical-slice(?:\/|["'])|@\/lib\/harness|@\/lib\/ops1|@\/lib\/agents)|\b(?:sessionStorage|localStorage|document|window)\s*[.(]/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("does not import product-persistence stores as business state", () => {
    // Audit may reference BoundedAtomicAuditStore types; forbidding db.ts and
    // treating SQLite as product persistence rehydration.
    const forbidden =
      /@\/lib\/d1\/db|productPersistence\s*:\s*["']SELECTED["']|runReady\s*:\s*true|productReady\s*:\s*true/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("allows only the bounded V2 UI runtime entrypoints", () => {
    const uiRoots = [
      path.join(APP_ROOT, "app"),
      path.join(APP_ROOT, "components"),
      path.join(APP_ROOT, "features"),
    ];
    const imports = uiRoots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => /@\/lib\/vertical-slice-runtime/.test(entry.text)),
      ),
    );

    const allowed = new Set([
      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
      "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/RuntimeDisclosureBanner.tsx:@/lib/vertical-slice-runtime/disclosures",
    ]);
    const normalized = imports.map((entry) => {
      const modulePath = entry.text.match(
        /@\/lib\/vertical-slice-runtime(?:\/[^"']+)?/,
      )?.[0];
      return `${entry.file}:${modulePath}`;
    });

    expect(new Set(normalized)).toEqual(allowed);
  });

  it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
    const roots = [
      path.join(APP_ROOT, "app/studio/projects/new"),
      path.join(APP_ROOT, "app/studio/projects/[id]"),
      path.join(APP_ROOT, "features/vertical-slice-ui"),
    ];
    const forbidden =
      /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
    const violations = roots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => forbidden.test(entry.text)),
      ),
    );
    expect(violations).toEqual([]);
  });

  it("keeps V1 core free of runtime dependency (one-way reuse)", () => {
    const coreRoot = path.join(APP_ROOT, "lib/vertical-slice-core");
    const violations = listSourceFiles(coreRoot).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) =>
          /@\/lib\/vertical-slice-runtime/.test(entry.text),
        ),
    );
    expect(violations).toEqual([]);
  });
});
