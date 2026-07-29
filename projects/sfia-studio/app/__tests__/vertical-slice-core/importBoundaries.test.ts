/** @vitest-environment node */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");
const CORE_ROOT = path.join(APP_ROOT, "lib/vertical-slice-core");

function listSourceFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...listSourceFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

describe("visible slice V1 import boundaries", () => {
  it("keeps the headless composition free of UI, fixture, storage, network, and agent imports", () => {
    const forbidden =
      /(?:from|require\()\s*["'](?:react|next\/|@\/app|@\/components|@\/features|@\/lib\/vertical-slice(?:\/|["'])|@\/lib\/harness|@\/lib\/ops1|@\/lib\/agents)|\b(?:sessionStorage|localStorage|fetch|document|window)\s*[.(]/;
    const violations = listSourceFiles(CORE_ROOT).flatMap((file) =>
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

  it("keeps OA T-A0/T-A1 independent from the new facade and D1", () => {
    const roots = [
      path.join(APP_ROOT, "lib/oa/doctrine"),
      path.join(APP_ROOT, "lib/oa/project"),
    ];
    const forbidden =
      /@\/lib\/(?:vertical-slice-core|d1)|from\s+["']react|from\s+["']next\//;
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

  it("does not wire V1 into application UI during the headless lot", () => {
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
            /@\/lib\/vertical-slice-core/.test(entry.text),
          ),
      ),
    );
    expect(imports).toEqual([]);
  });
});
