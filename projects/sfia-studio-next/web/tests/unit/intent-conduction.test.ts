import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fixtureSemanticQualify } from "@/domains/conversation/fixture-semantic-qualify";
import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";

describe("intent-conduction SEM-02 source contract", () => {
  it("lexical métier routers removed; qualifyStudioIntent is fail-closed stub", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/conversation/intent-conduction.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/PROJECT_CREATE_RE/);
    expect(src).not.toMatch(/FOLLOWON_DOC_RE/);
    expect(src).not.toMatch(/PILOTAGE_SIGNAL_RE/);
    expect(src).toMatch(/retired as production métier router/);
    expect(src).toMatch(/wantsProjectCreate:\s*false/);
  });

  it("GAP-05 technical name capture helper still present", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/conversation/intent-conduction.ts"),
      "utf8",
    );
    expect(src).toMatch(/export function extractProposedProjectName/);
    expect(src).toMatch(/Continuity Global B|puis\\b/);
  });
});

describe("fixture semantic projection (TEST_BOUNDARY)", () => {
  const prev = { ...process.env };
  beforeEach(() => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });
  afterEach(() => {
    process.env = { ...prev };
  });

  it("project create + follow-on document from semantic fixture", () => {
    const q = fixtureSemanticQualify(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
    const proj = projectStudioEffects(q);
    expect(proj.wantsProjectCreate).toBe(true);
    expect(proj.proposedProjectName).toBe("Atlas");
    expect(proj.wantsFollowOnDocument).toBe(true);
  });

  it("GitHub mention alone is not publish", () => {
    const proj = projectStudioEffects(
      fixtureSemanticQualify("Explique GitHub Actions dans Studio"),
    );
    expect(proj.publication.wantsPublish).toBe(false);
  });

  it("positive create synonyms → d2 effect", () => {
    const proj = projectStudioEffects(fixtureSemanticQualify("Je veux démarrer un projet."));
    expect(proj.wantsProjectCreate).toBe(true);
  });
});
