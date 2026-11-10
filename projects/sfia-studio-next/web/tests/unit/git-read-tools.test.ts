import { describe, expect, it } from "vitest";
import { classifyReadGitFileFailure } from "@/domains/conversation/git-read-tools";
import {
  FILE_ABSENT_AT_VERIFIED_REF,
  READ_NOT_FOUND_UNQUALIFIED,
  REF_UNRESOLVED,
  buildGitFilePermalink,
  permalinkOrNull,
} from "@/domains/integrations/resource-service";
import { StudioError } from "@/lib/http-errors";

describe("REC-11 classifyReadGitFileFailure", () => {
  it("maps FILE_ABSENT_AT_VERIFIED_REF to FILE_ABSENT (qualified)", () => {
    const out = classifyReadGitFileFailure(
      new StudioError(
        "NOT_FOUND",
        `${FILE_ABSENT_AT_VERIFIED_REF}: path=docs/x.md commit=abc requestedRef=main fullName=o/r`,
      ),
    );
    expect(out.status).toBe("FILE_ABSENT");
    expect(out.absenceQualified).toBe(true);
    expect(out.guidance).toMatch(/D7 CREATE/i);
  });

  it("never maps project NOT_FOUND to FILE_ABSENT", () => {
    const out = classifyReadGitFileFailure(new StudioError("NOT_FOUND", "Projet introuvable"));
    expect(out.status).toBe("DENIED");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps REF_UNRESOLVED distinctly", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("NOT_FOUND", `${REF_UNRESOLVED}: ref Git inaccessible ou inexistante (ghost)`),
    );
    expect(out.status).toBe("REF_UNRESOLVED");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps ACCESS_DENIED / 403-class to DENIED — never CREATE hint", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("ACCESS_DENIED", "GitHub FORBIDDEN/UNAUTHORIZED (403)", { httpStatus: 403 }),
    );
    expect(out.status).toBe("DENIED");
    expect(out.absenceQualified).toBe(false);
    expect(out.guidance).toMatch(/ne pas inférer l'absence/i);
  });

  it("maps unqualified NOT_FOUND to AMBIGUOUS", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("NOT_FOUND", "GitHub ressource introuvable (404)"),
    );
    expect(out.status).toBe("AMBIGUOUS");
    expect(out.absenceQualified).toBe(false);
  });

  it("maps READ_NOT_FOUND_UNQUALIFIED / AMBIGUOUS to AMBIGUOUS", () => {
    const a = classifyReadGitFileFailure(
      new StudioError("AMBIGUOUS", `${READ_NOT_FOUND_UNQUALIFIED}: absence non prouvée`),
    );
    expect(a.status).toBe("AMBIGUOUS");
    expect(a.absenceQualified).toBe(false);
  });

  it("maps DEPENDENCY_UNAVAILABLE to UNAVAILABLE", () => {
    const out = classifyReadGitFileFailure(
      new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub TIMEOUT", { httpStatus: 503 }),
    );
    expect(out.status).toBe("UNAVAILABLE");
    expect(out.absenceQualified).toBe(false);
  });
});

describe("REC-07 permalink / blob vs commit", () => {
  it("builds commit permalink with encoded path segments", () => {
    const url = buildGitFilePermalink("acme/repo", "a".repeat(40), "docs/recette studio/file.md");
    expect(url).toBe(
      `https://github.com/acme/repo/blob/${"a".repeat(40)}/docs/recette%20studio/file.md`,
    );
    expect(url).not.toMatch(/ /);
  });

  it("permalinkOrNull refuses blobSha-as-commit and unverified commit", () => {
    const blob = "b".repeat(40);
    const commit = "c".repeat(40);
    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: commit,
        commitShaVerified: true,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBe(`https://github.com/acme/repo/blob/${commit}/README.md`);

    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: blob,
        commitShaVerified: true,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBeNull();

    expect(
      permalinkOrNull({
        fullName: "acme/repo",
        commitSha: commit,
        commitShaVerified: false,
        blobSha: blob,
        path: "README.md",
      }),
    ).toBeNull();
  });
});
