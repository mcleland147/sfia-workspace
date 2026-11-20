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
    expect(findings[0]?.reason).toMatch(/Contradiction/i);
    expect(findings[0]?.reason).toMatch(/GitHub/i);
  });

  it("rejects soft negation / numeric correction false positives (CampusNova class)", () => {
    const inventory = detectAcquisContradictions([
      {
        id: "a1",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Lille: 12 portables, 3 en maintenance, 9 opérationnels actuellement.",
      },
      {
        id: "a2",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Lille: 12 portables, 2 en maintenance, 10 opérationnels actuellement.",
      },
    ]);
    expect(inventory).toHaveLength(0);

    const softLexicon = detectAcquisContradictions([
      {
        id: "b1",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Le support utilisateur n'est pas encore défini pour le déploiement.",
      },
      {
        id: "b2",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "Des ateliers de 90 minutes sont simplement envisagés pour les formateurs.",
      },
    ]);
    expect(softLexicon).toHaveLength(0);

    const temporal = detectAcquisContradictions([
      {
        id: "c1",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "9 portables opérationnels mobilisables lors de l'incident.",
      },
      {
        id: "c2",
        subjectId: "s1",
        status: "CURRENT",
        kind: "HYPOTHESIS",
        statement: "10 portables opérationnels actuellement après correction d'inventaire.",
      },
    ]);
    expect(temporal).toHaveLength(0);
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

  it("E06-03 — declared main+SHA without remote verify is UNVERIFIED not CURRENT", async () => {
    const { qualifyProvenanceSource } = await import("@/domains/knowledge/journal-cognition");
    const q = await qualifyProvenanceSource("pilot-test", {
      sourceKind: "pilot",
      gitRepo: "org/repo",
      gitRef: "main",
      gitSha: "deadbeef",
    });
    expect(q.currentness).toBe("UNVERIFIED");
    expect(q.currentness).not.toBe("CURRENT");
  });

  it("E06-03 — non-main ref stays CANDIDATE", async () => {
    const { qualifyProvenanceSource } = await import("@/domains/knowledge/journal-cognition");
    const q = await qualifyProvenanceSource("pilot-test", {
      sourceKind: "pilot",
      gitRepo: "org/repo",
      gitRef: "feature/journal",
      gitSha: "abc123",
    });
    expect(q.currentness).toBe("CANDIDATE");
  });
});
