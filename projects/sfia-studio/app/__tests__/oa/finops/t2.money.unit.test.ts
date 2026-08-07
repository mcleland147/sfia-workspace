/**
 * @vitest-environment node
 *
 * FinOps T2 — Money exact decimal + HALF_EVEN (no JS float authority).
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_MONEY_SCALE,
  addMoney,
  divideHalfEven,
  formatMoneyString,
  moneyEquals,
  moneyFromMinor,
  moneyFromRateUsageHalfEven,
  parseMoneyString,
  sumMoney,
} from "@/lib/oa/finops/domain/money";

describe("FinOps T2 Money", () => {
  it("uses scale 8 and round-trips canonical decimal strings without Number", () => {
    expect(FINOPS_MONEY_SCALE).toBe(8);
    const m = parseMoneyString("12.34567890", "usd");
    expect(m.currency).toBe("USD");
    expect(formatMoneyString(m)).toBe("12.34567890");
    expect(m.amountMinor).toBe(BigInt(1234567890));
  });

  it("rejects over-scale fractional strings (quantize only at rate×usage)", () => {
    expect(() => parseMoneyString("1.000000001", "USD")).toThrow(
      /more than 8 fractional digits/,
    );
  });

  it("sums scale-8 amounts without re-rounding", () => {
    const a = parseMoneyString("0.00000001", "USD");
    const b = parseMoneyString("0.00000001", "USD");
    const c = addMoney(a, b);
    expect(formatMoneyString(c)).toBe("0.00000002");
    const total = sumMoney("USD", [
      parseMoneyString("1.00000001", "USD"),
      parseMoneyString("2.00000002", "USD"),
      parseMoneyString("3.00000003", "USD"),
    ]);
    expect(formatMoneyString(total)).toBe("6.00000006");
  });

  it("HALF_EVEN positive tie: 5/2 → 2 (even)", () => {
    expect(divideHalfEven(BigInt(5), BigInt(2))).toBe(BigInt(2));
  });

  it("HALF_EVEN positive tie: 3/2 → 2 (odd 1 → even 2)", () => {
    expect(divideHalfEven(BigInt(3), BigInt(2))).toBe(BigInt(2));
  });

  it("HALF_EVEN positive non-tie rounds normally", () => {
    expect(divideHalfEven(BigInt(10), BigInt(3))).toBe(BigInt(3)); // 3.333… → 3
    expect(divideHalfEven(BigInt(11), BigInt(3))).toBe(BigInt(4)); // 3.666… → 4
  });

  it("HALF_EVEN negative ties are symmetric on magnitude", () => {
    expect(divideHalfEven(BigInt(-5), BigInt(2))).toBe(BigInt(-2));
    expect(divideHalfEven(BigInt(-3), BigInt(2))).toBe(BigInt(-2));
    expect(divideHalfEven(BigInt(5), BigInt(-2))).toBe(BigInt(-2));
  });

  it("rate×usage HALF_EVEN positive tie cases (fictitious fixtures)", () => {
    // rate 0.00000005 per quantum 1 → usage 1 => 0.00000005
    // Construct midpoint: rateMinor * usage / quantum = X + 0.5
    // rateMinor=5, usage=1, quantum=2 → 2.5 → 2 (even)
    const rate = moneyFromMinor(BigInt(5), "USD");
    const midEven = moneyFromRateUsageHalfEven({
      ratePerQuantum: rate,
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midEven)).toBe("0.00000002");

    // rateMinor=3, usage=1, quantum=2 → 1.5 → 2
    const midOdd = moneyFromRateUsageHalfEven({
      ratePerQuantum: moneyFromMinor(BigInt(3), "USD"),
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midOdd)).toBe("0.00000002");
  });

  it("rate×usage HALF_EVEN negative correction tie cases", () => {
    const negativeRate = moneyFromMinor(BigInt(-5), "USD");
    const mid = moneyFromRateUsageHalfEven({
      ratePerQuantum: negativeRate,
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(mid)).toBe("-0.00000002");

    const midOdd = moneyFromRateUsageHalfEven({
      ratePerQuantum: moneyFromMinor(BigInt(-3), "USD"),
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midOdd)).toBe("-0.00000002");
  });

  it("documents pedagogical midpoint examples at money scale", () => {
    // 2.500000005 midway between 2.50000000 and 2.50000001 → even 2.50000000
    // Represent as (rateMinor * usage) / quantum with exact midpoint.
    // 250000000.5 minor? Use: numerator=500000001, denom=2 → 250000000.5 → 250000000
    expect(divideHalfEven(BigInt(500000001), BigInt(2))).toBe(BigInt(250000000));
    expect(formatMoneyString(moneyFromMinor(BigInt(250000000), "USD"))).toBe(
      "2.50000000",
    );

    // 2.500000015 midway between …001 and …002 → even …002
    // numerator=500000003 / 2 = 250000001.5 → 250000002
    expect(divideHalfEven(BigInt(500000003), BigInt(2))).toBe(BigInt(250000002));
    expect(formatMoneyString(moneyFromMinor(BigInt(250000002), "USD"))).toBe(
      "2.50000002",
    );
  });

  it("rejects currency mismatch and invalid quantum", () => {
    expect(() =>
      addMoney(parseMoneyString("1.00", "USD"), parseMoneyString("1.00", "EUR")),
    ).toThrow(/different currencies/);
    expect(() =>
      moneyFromRateUsageHalfEven({
        ratePerQuantum: parseMoneyString("1.00", "USD"),
        usageCount: BigInt(1),
        billingQuantum: BigInt(0),
      }),
    ).toThrow(/positive integer/);
  });

  it("moneyEquals compares currency and minor units", () => {
    expect(
      moneyEquals(parseMoneyString("1.0", "USD"), parseMoneyString("1.00000000", "USD")),
    ).toBe(true);
  });
});
