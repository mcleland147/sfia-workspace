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

  it("does not wire runtime into application UI routes or features yet", () => {
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
          .filter((entry) =>
            /@\/lib\/vertical-slice-runtime/.test(entry.text),
          ),
      ),
    );
    expect(imports).toEqual([]);
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
