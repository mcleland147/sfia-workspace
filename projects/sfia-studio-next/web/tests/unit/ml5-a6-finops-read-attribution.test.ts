import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const usageRead = join(
  process.cwd(),
  "src/domains/finops/usage-read-service.ts",
);

describe("A.6/A.7 — FinOps usage read attribution (module contract)", () => {
  it("filters billable rows in work detail and aggregates with projection helpers", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/filterBillableFinOpsRows\(rows\)/);
    expect(src).toMatch(/aggregateEstimatedCost\(billableRows\)/);
    expect(src).toMatch(/sumBillableProviderRequests\(billableRows/);
  });

  it("E2-REL-05 — project filter avoids OR conflict; effectiveFinOpsProjectId post-filters", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/cognitiveWorkIdsOnProject/);
    expect(src).toMatch(/cognitiveWorkIdsHorsProjet/);
    expect(src).toMatch(/directConcordant/);
    expect(src).toMatch(/viaWorkNullObs/);
    expect(src).toMatch(/effectiveFinOpsProjectId/);
    // Legacy OR (obs.projectId = A OR work-on-A) must not return — contaminates B∩A.
    expect(src).not.toMatch(
      /or\(eq\(providerUsageObservations\.projectId, input\.projectId\), byWork\)/,
    );
    expect(src).toMatch(/effectiveFinOpsProjectId\(\{/);
  });

  it("summary KPIs use billable request denominators", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/const totalRequests = sumBillableProviderRequests\(rows\)/);
    expect(src).toMatch(/onlyWithObservedCost: true/);
  });
});