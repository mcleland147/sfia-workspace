import { createHash } from "node:crypto";
import type { ExecutionContract } from "../types/contracts.js";
import { canonicalize } from "./canonicalize.js";

/** SHA-256 of canonical contract JSON. Same contract → same hash. */
export function computeContractHash(contract: ExecutionContract): string {
  const canonical = canonicalize(contract);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}
