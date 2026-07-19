import { mkdirSync, writeFileSync, realpathSync, existsSync } from "node:fs";
import path from "node:path";
import { HarnessError } from "../types/contracts.js";

export class ProofStore {
  constructor(private readonly proofDir: string) {
    mkdirSync(proofDir, { recursive: true });
    this.assertInsideProofDir(proofDir);
  }

  writeJson(name: string, data: unknown): string {
    const target = this.resolveSafe(name);
    writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
    return target;
  }

  writeText(name: string, text: string): string {
    const target = this.resolveSafe(name);
    writeFileSync(target, text, "utf8");
    return target;
  }

  private resolveSafe(name: string): string {
    if (name.includes("..") || name.includes("\0") || path.isAbsolute(name)) {
      throw new HarnessError("PROOF_PATH_DENIED", "invalid proof name", { name });
    }
    const target = path.resolve(this.proofDir, name);
    const root = path.resolve(this.proofDir);
    if (!target.startsWith(root + path.sep) && target !== root) {
      throw new HarnessError("PROOF_PATH_ESCAPE", "proof path escapes proofDir");
    }
    return target;
  }

  private assertInsideProofDir(dir: string): void {
    if (!existsSync(dir)) return;
    try {
      realpathSync(dir);
    } catch {
      throw new HarnessError("PROOF_DIR_INVALID", "cannot resolve proofDir");
    }
  }
}
