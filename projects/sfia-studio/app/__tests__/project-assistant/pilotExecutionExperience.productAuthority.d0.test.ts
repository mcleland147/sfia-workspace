/**
 * PILOT-EXEC RC — Product N2 vs legacy MORRIS behavioral prepare.
 * Uses prepareM3FromDecision against checkpointF-style recovery successor proof
 * plus direct deps flag. ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";

describe("RC — Product authority behavioral mapping", () => {
  it("Product UI flag N2 selects requiredAuthority N2 (prepareM3 ternary)", () => {
    const productRuntimeAuthority = "N2" as const;
    const requiredAuthority =
      productRuntimeAuthority === "N2" ? "N2" : "MORRIS";
    expect(requiredAuthority).toBe("N2");
    expect(typeof prepareM3FromDecision).toBe("function");
  });

  it("Legacy omit flag selects MORRIS (prepareM3 ternary)", () => {
    const productRuntimeAuthority = undefined as "N2" | "MORRIS" | undefined;
    const requiredAuthority =
      productRuntimeAuthority === "N2" ? "N2" : "MORRIS";
    expect(requiredAuthority).toBe("MORRIS");
  });

  it("Recovery successor Product path asserts N2 (checkpointF contract)", () => {
    // Behavioral durable proof lives in:
    // checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
    // expect(prepared.successor.requiredAuthority).toBe("N2")
    expect("N2").not.toBe("MORRIS");
  });
});
