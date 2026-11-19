import { describe, expect, it } from "vitest";
import {
  assertHonestSynthesisInput,
  detectAcquisContradictions,
  scoreLexicalOverlap,
  tokenizeIntent,
} from "@/domains/knowledge/journal-cognition";

describe("journal-cognition (J-C04 / J-C06 deterministic)", () => {
  it("tokenizes intent and scores open-point overlap", () => {
    const tokens = tokenizeIntent("Quelle preuve pour la connexion GitHub du dépôt?");
    expect(tokens).toContain("preuve");
    expect(tokens).toContain("connexion");
    expect(tokens).toContain("github");
    const score = scoreLexicalOverlap(
      tokens,
      "Quelle preuve pour la connexion GitHub reste ouverte depuis le sas.",
    );
    expect(score).toBeGreaterThan(0.3);
  });

  it("detects unresolved affirmation/negation contradictions on same subject", () => {
    const findings = detectAcquisContradictions([
      {
        id: "a1",
        subjectId: "s1",
        status: "CURRENT",
        kind: "FACT",
        statement: "La connexion GitHub est établie pour ce projet.",
      },
      {
        id: "a2",
        subjectId: "s1",
        status: "CURRENT",
        kind: "FACT",
        statement: "La connexion GitHub n'est pas établie pour ce projet.",
      },
      {
        id: "a3",
        subjectId: "s2",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Sujet distinct sans conflit lexical.",
      },
    ]);
    expect(findings).toHaveLength(1);
    expect(findings[0]?.status).toBe("UNRESOLVED");
    expect(findings[0]?.subjectId).toBe("s1");
  });

  it("refuses synthesis that claims established over unresolved contradiction", () => {
    const bad = assertHonestSynthesisInput({
      summaryMarkdown: "Il est établi que la connexion GitHub fonctionne.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [{ sourceKind: "message", currentness: "HISTORICAL", detail: "x" }],
    });
    expect(bad.ok).toBe(false);

    const hidden = assertHonestSynthesisInput({
      summaryMarkdown: "La situation est claire pour la suite.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [],
    });
    expect(hidden.ok).toBe(false);

    const ok = assertHonestSynthesisInput({
      summaryMarkdown:
        "Contradiction ouverte sur la connexion GitHub — à clarifier avant toute affirmation.",
      contradictions: [
        {
          leftAcquisId: "a1",
          rightAcquisId: "a2",
          subjectId: "s1",
          status: "UNRESOLVED",
          leftStatement: "ok",
          rightStatement: "pas ok",
          reason: "test",
        },
      ],
      sources: [{ sourceKind: "git", currentness: "CANDIDATE", detail: "branch feature" }],
    });
    expect(ok.ok).toBe(true);
  });

  it("refuses established claim over candidate git source", () => {
    const r = assertHonestSynthesisInput({
      summaryMarkdown: "C'est confirmé sur la branche candidate.",
      contradictions: [],
      sources: [
        {
          sourceKind: "git",
          gitRef: "feature/x",
          gitSha: "abc",
          currentness: "CANDIDATE",
          detail: "candidate≠main",
        },
      ],
    });
    expect(r.ok).toBe(false);
  });
});
