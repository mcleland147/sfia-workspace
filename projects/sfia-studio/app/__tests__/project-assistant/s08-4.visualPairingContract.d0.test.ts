/**
 * @vitest-environment node
 *
 * P5-S08-4 — fail-closed visual pairing contract unit tests.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  evaluateVisualPair,
  findPairById,
  HARNESS_PAIRING_MISMATCH,
  mayGenerateDiff,
  type RuntimeObservation,
  type VisualPairRecord,
} from "../../e2e/support/visualPairingContract";

/** Durable QA pairing contract (not generated scratch under `.tmp-sfia-review/**`). */
const STATE_MANIFEST = path.resolve(
  __dirname,
  "../../e2e/fixtures/s08-4/visual-pairing-state-manifest.json",
);

function baseObs(
  overrides: Partial<RuntimeObservation> = {},
): RuntimeObservation {
  return {
    url: "http://localhost:3020/studio/projects/prj%3As084f-1",
    viewport: { width: 390, height: 844 },
    projectName: "Product Simplification",
    projectId: "prj:s084f-1",
    activeView: "conversation",
    present: [
      "project-workspace-layout",
      "governed-decision-card",
    ],
    forbiddenPresent: [],
    collectPhase: null,
    content: {
      surfaceKind: "project-workspace",
      projectName: "Product Simplification",
      profileDisplayName: "mcleland147",
      activeView: "conversation",
      confirmationState: "decision",
    },
    ...overrides,
  };
}

const decisionPair: VisualPairRecord = {
  id: "decision-mobile",
  figma: { nodeId: "190:495", viewport: { width: 390, height: 844 } },
  runtime: {
    fixtureId: "p3-decision-pending",
    projectId: "prj:s084f-1",
    expectedProjectName: "Product Simplification",
    route: "/studio/projects/:projectId",
    view: "conversation",
  },
  state: {
    semanticState: "decision-pending",
    expectedVisible: [
      "project-workspace-layout",
      "governed-decision-card",
      "data-active-view=conversation",
    ],
    expectedAbsent: [
      "governed-confirmation-card",
      "next-dev-issues-badge",
    ],
  },
  identityAligned: true,
  contentAligned: true,
  content: {
    surfaceKind: "project-workspace",
    projectName: "Product Simplification",
    profileDisplayName: "mcleland147",
    activeView: "conversation",
    confirmationState: "decision",
  },
};

describe("S08-4 visual pairing contract", () => {
  it("loads canonical state-manifest with representative pairs", () => {
    expect(fs.existsSync(STATE_MANIFEST)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(STATE_MANIFEST, "utf8")) as {
      pairs: Array<{ id: string; representative?: boolean; figma: { nodeId: string } }>;
    };
    const reps = manifest.pairs.filter((p) => p.representative);
    expect(reps.map((p) => p.id).sort()).toEqual(
      [
        "auth-mobile",
        "confirmation-mobile",
        "decision-mobile",
        "historique-desktop",
        "journal-desktop",
        "new-project-desktop",
        "new-project-mobile",
        "projects-desktop",
        "projects-empty",
        "syntheses-desktop",
        "syntheses-verified-desktop",
        "workspace-compact",
        "workspace-desktop",
        "workspace-mobile",
      ].sort(),
    );
    for (const p of reps) {
      expect(
        (p as { identityAligned?: boolean }).identityAligned,
        p.id,
      ).toBe(true);
      expect(
        (p as { contentAligned?: boolean }).contentAligned,
        p.id,
      ).toBe(true);
      expect(
        Object.keys((p as { content?: object }).content ?? {}).length,
        `${p.id} content facts`,
      ).toBeGreaterThan(0);
    }
    expect(findPairById(manifest.pairs as never, "decision-mobile")?.figma.nodeId).toBe(
      "190:495",
    );
  });

  it("accepts a valid Decision pair", () => {
    const result = evaluateVisualPair(decisionPair, baseObs());
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.pairing).toBe("PASS");
    expect(mayGenerateDiff("PASS")).toBe(true);
  });

  it("rejects wrong project (HARNESS_PAIRING_MISMATCH)", () => {
    const result = evaluateVisualPair(
      decisionPair,
      baseObs({ projectName: "Knowledge Core" }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe(HARNESS_PAIRING_MISMATCH);
      expect(result.reason).toContain("expectedProject=Product Simplification");
      expect(result.reason).toContain("actualProject=Knowledge Core");
    }
    expect(mayGenerateDiff("FAIL")).toBe(false);
  });

  it("rejects wrong semantic state / missing Decision card", () => {
    const result = evaluateVisualPair(
      decisionPair,
      baseObs({
        present: ["project-workspace-layout"],
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("expectedVisible=governed-decision-card");
    }
  });

  it("rejects wrong active view", () => {
    const result = evaluateVisualPair(
      decisionPair,
      baseObs({ activeView: "execution" }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("expectedView=conversation");
      expect(result.reason).toContain("actualView=execution");
    }
  });

  it("rejects Next.js dev Issues badge", () => {
    const result = evaluateVisualPair(
      decisionPair,
      baseObs({ forbiddenPresent: ["next-dev-issues-badge"] }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("forbiddenVisible=next-dev-issues-badge");
    }
  });

  it("rejects confirmation fixture against decision expected state", () => {
    const confirmation: VisualPairRecord = {
      ...decisionPair,
      id: "confirmation-mobile",
      figma: { nodeId: "190:520", viewport: { width: 390, height: 844 } },
      runtime: {
        ...decisionPair.runtime,
        fixtureId: "p3-confirmation-required",
        expectedProjectName: "Runtime v3",
      },
      state: {
        semanticState: "confirmation-required",
        expectedVisible: [
          "project-workspace-layout",
          "governed-confirmation-card",
          "data-active-view=conversation",
        ],
        expectedAbsent: ["governed-decision-card"],
      },
    };
    const result = evaluateVisualPair(
      confirmation,
      baseObs({
        projectName: "Runtime v3",
        present: ["project-workspace-layout", "governed-decision-card"],
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain(
        "expectedVisible=governed-confirmation-card",
      );
    }
  });

  it("refuses diff when pairing status is missing", () => {
    expect(mayGenerateDiff(undefined)).toBe(false);
    expect(mayGenerateDiff("FAIL")).toBe(false);
    expect(mayGenerateDiff("PASS")).toBe(true);
  });

  it("rejects identityAligned=false for final fidelity pairs", () => {
    const result = evaluateVisualPair(
      { ...decisionPair, identityAligned: false, finalFidelity: true },
      baseObs(),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("identityAligned=false");
      expect(result.reason).toContain("expectedIdentityAligned=true");
    }
    expect(mayGenerateDiff("FAIL")).toBe(false);
  });

  it("rejects contentAligned=false for final fidelity pairs", () => {
    const result = evaluateVisualPair(
      { ...decisionPair, contentAligned: false, finalFidelity: true },
      baseObs(),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("contentAligned=false");
      expect(result.reason).toContain("expectedContentAligned=true");
    }
  });

  it("rejects mismatched content facts", () => {
    const result = evaluateVisualPair(
      decisionPair,
      baseObs({
        content: {
          surfaceKind: "project-workspace",
          projectName: "Product Simplification",
          profileDisplayName: "Pilote",
          activeView: "conversation",
          confirmationState: "decision",
        },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("contentMismatch field=profileDisplayName");
      expect(result.reason).toContain("expected=mcleland147");
      expect(result.reason).toContain("actual=Pilote");
    }
  });

  it("validates new-project-rich collect phase", () => {
    const pair: VisualPairRecord = {
      id: "new-project-desktop",
      figma: { nodeId: "67:39", viewport: { width: 1440, height: 1024 } },
      runtime: {
        fixtureId: "p3-new-project-rich",
        expectedProjectName: null,
        route: "/studio/projects/new",
        view: null,
      },
      state: {
        semanticState: "new-project-rich",
        expectedVisible: [
          "create-project-form",
          "new-project-clarification",
          "create-project-submit",
          "data-collect-phase=OPTIONAL_CONTEXT",
        ],
        expectedAbsent: ["project-workspace-layout"],
      },
      identityAligned: true,
      contentAligned: true,
      content: {
        surfaceKind: "new-project",
        profileDisplayName: "mcleland147",
      },
    };
    const bad = evaluateVisualPair(pair, {
      url: "http://localhost:3020/studio/projects/new",
      viewport: { width: 1440, height: 1024 },
      present: ["create-project-form"],
      forbiddenPresent: [],
      collectPhase: "INTENTION",
      content: {
        surfaceKind: "new-project",
        profileDisplayName: "mcleland147",
      },
    });
    expect(bad.ok).toBe(false);
    if (!bad.ok) {
      expect(bad.reason).toContain("expectedCollectPhase=OPTIONAL_CONTEXT");
    }
    const good = evaluateVisualPair(pair, {
      url: "http://localhost:3020/studio/projects/new",
      viewport: { width: 1440, height: 1024 },
      present: [
        "create-project-form",
        "new-project-clarification",
        "create-project-submit",
      ],
      forbiddenPresent: [],
      collectPhase: "OPTIONAL_CONTEXT",
      content: {
        surfaceKind: "new-project",
        profileDisplayName: "mcleland147",
      },
    });
    expect(good.ok).toBe(true);
  });
});
