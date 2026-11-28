import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("FinOpsConsumptionPanel cost comparison transpose", () => {
  const src = readFileSync(
    resolve(__dirname, "../../src/components/finops/FinOpsConsumptionPanel.tsx"),
    "utf8",
  );

  it("uses Comparaison des coûts title and Pilot-safe labels", () => {
    expect(src).toContain("Comparaison des coûts");
    expect(src).toContain("Estimation Studio");
    expect(src).toContain("Coût fournisseur");
    expect(src).toContain('data-testid="finops-cost-comparison"');
    expect(src).not.toMatch(/Rapprochement fournisseur/);
    expect(src).not.toMatch(/org:unspecified/);
    expect(src).not.toMatch(/\bdisclosed\b/);
    expect(src).not.toMatch(/ownership/i);
  });

  it("ignores a stale filter response and keeps a works failure distinct from an empty list", () => {
    expect(src).toContain("requestSeq");
    expect(src).toContain("if (seq !== requestSeq.current) return;");
    expect(src).toContain("if (seq === requestSeq.current) setLoading(false);");
    expect(src).toContain('data-testid="finops-works-error"');
    expect(src).toContain('data-testid="finops-works-empty"');
    expect(src).toContain("La liste des travaux n’a pas pu être chargée.");
    expect(src).not.toContain("setWorks([]);\n      }");
    const empty = src.indexOf('data-testid="finops-works-empty"');
    const failure = src.indexOf('data-testid="finops-works-error"');
    expect(empty).toBeGreaterThan(-1);
    expect(failure).toBeGreaterThan(-1);
    expect(failure).not.toBe(empty);
  });

  it("places CostComparisonBanner between KPIs and charts in JSX", () => {
    const kpis = src.indexOf('data-testid="finops-kpis"');
    const call = src.indexOf("<CostComparisonBanner");
    const charts = src.indexOf('className="finops-1306-charts"');
    expect(kpis).toBeGreaterThan(-1);
    expect(call).toBeGreaterThan(kpis);
    expect(charts).toBeGreaterThan(call);
  });
});

