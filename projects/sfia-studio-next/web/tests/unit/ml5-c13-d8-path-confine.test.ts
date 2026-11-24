/**
 * C13 — real physical confinement tests against readConfinedWorkspaceFile
 * (the same path used by readAttemptWorkspaceFile after attempt/scope checks).
 */
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  mkdirSync,
  writeFileSync,
  rmSync,
  symlinkSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import {
  D8_MAX_FILE_BYTES,
  readConfinedWorkspaceFile,
} from "@/domains/proofs/d8-path-confine";

const ROOT = "/tmp/sfia-c13-d8-confine-ws";
const OUTSIDE = "/tmp/sfia-c13-d8-outside-secret.txt";

describe("ML5 C13 D8 path confinement (realpath/lstat/O_NOFOLLOW)", () => {
  beforeEach(() => {
    rmSync(ROOT, { recursive: true, force: true });
    mkdirSync(ROOT, { recursive: true });
    writeFileSync(OUTSIDE, "SECRET_OUTSIDE_WORKSPACE\n");
    writeFileSync(join(ROOT, "allowed.txt"), "C13-ALLOWED-OK\n");
    mkdirSync(join(ROOT, "sub"), { recursive: true });
    writeFileSync(join(ROOT, "sub", "nested.txt"), "nested-ok\n");
  });

  afterEach(() => {
    rmSync(ROOT, { recursive: true, force: true });
    try {
      rmSync(OUTSIDE, { force: true });
    } catch {
      /* ignore */
    }
  });

  it("1 — allowed text file under workspace succeeds", () => {
    const r = readConfinedWorkspaceFile(ROOT, "allowed.txt");
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.bytes.toString("utf8")).toContain("C13-ALLOWED-OK");
      expect(r.byteLength).toBeGreaterThan(0);
    }
  });

  it("2 — relative traversal is refused", () => {
    const r = readConfinedWorkspaceFile(ROOT, "../sfia-c13-d8-outside-secret.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("3 — absolute-looking path after strip still refused by lexical rules", () => {
    // Caller strips absolute; confinement still refuses .. and empty
    const r = readConfinedWorkspaceFile(ROOT, "");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("4 — symlink to file outside workspace is refused", () => {
    symlinkSync(OUTSIDE, join(ROOT, "escape-link.txt"));
    const r = readConfinedWorkspaceFile(ROOT, "escape-link.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(["SYMLINK_ESCAPE", "SYMLINK_COMPONENT"]).toContain(r.reason);
    }
    // Content must not leak even on deny
    expect(JSON.stringify(r)).not.toContain("SECRET_OUTSIDE");
  });

  it("5 — intermediate directory symlink escape is refused", () => {
    const evilDir = "/tmp/sfia-c13-d8-evil-dir";
    rmSync(evilDir, { recursive: true, force: true });
    mkdirSync(evilDir, { recursive: true });
    writeFileSync(join(evilDir, "leaked.txt"), "LEAKED_VIA_DIR_SYMLINK\n");
    symlinkSync(evilDir, join(ROOT, "evil-sub"));
    const r = readConfinedWorkspaceFile(ROOT, "evil-sub/leaked.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(["SYMLINK_ESCAPE", "SYMLINK_COMPONENT"]).toContain(r.reason);
    }
    expect(JSON.stringify(r)).not.toContain("LEAKED_VIA_DIR");
    rmSync(evilDir, { recursive: true, force: true });
  });

  it("6 — oversized file is refused before full load", () => {
    const big = join(ROOT, "huge.bin");
    // Write slightly over max without holding full string in test assert content
    const chunk = Buffer.alloc(64_000, 0x41);
    const fdParts: Buffer[] = [];
    let total = 0;
    while (total <= D8_MAX_FILE_BYTES) {
      fdParts.push(chunk);
      total += chunk.length;
    }
    writeFileSync(big, Buffer.concat(fdParts));
    const r = readConfinedWorkspaceFile(ROOT, "huge.bin");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("FILE_TOO_LARGE");
  });

  it("7 — binary null byte files still open at confine layer (caller refuses)", () => {
    writeFileSync(join(ROOT, "bin.dat"), Buffer.from([0x00, 0x01, 0x02, 0xff]));
    const r = readConfinedWorkspaceFile(ROOT, "bin.dat");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.bytes.includes(0)).toBe(true);
  });

  it("8 — nested allowed path works", () => {
    const r = readConfinedWorkspaceFile(ROOT, "sub/nested.txt");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.bytes.toString("utf8")).toContain("nested-ok");
  });

  it("9 — missing file → FILE_ABSENT", () => {
    const r = readConfinedWorkspaceFile(ROOT, "no-such.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("FILE_ABSENT");
  });

  it("10 — invalid / missing root → ROOT_UNRESOLVABLE", () => {
    const r = readConfinedWorkspaceFile("/tmp/sfia-c13-no-such-root-xyz", "a.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("ROOT_UNRESOLVABLE");
  });

  it("11 — null byte in path refused", () => {
    const r = readConfinedWorkspaceFile(ROOT, "allowe\0d.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("fixture still present after denials", () => {
    expect(existsSync(join(ROOT, "allowed.txt"))).toBe(true);
  });
});
