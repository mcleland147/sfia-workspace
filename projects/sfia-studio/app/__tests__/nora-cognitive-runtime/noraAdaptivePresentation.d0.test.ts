/**
 * Nora adaptive presentation Option C — schema validation + persistence continuity.
 * DETERMINISTIC only — no OpenAI LIVE.
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { DatabaseSync } from "node:sqlite";
import {
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_PRESENTATION_LIMITS,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  appendStudioControlNotices,
  contentFullyCoveredByPresentation,
  deserializeNoraAdaptivePresentation,
  deserializeStudioControlNotices,
  extractStudioControlAppendix,
  honestBlockTitle,
  honestEpistemicLabel,
  looksLikeAuthorityClaim,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  sanitizePresentationPlainText,
  sanitizeProvenanceNote,
  serializeNoraAdaptivePresentation,
  serializeStudioControlNotices,
  shouldRenderAdaptivePresentation,
  studioOwnedRecommendationDisclaimer,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  buildFailClosedProductTurnJson,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const tmpDirs: string[] = [];

afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function disposableDb(
  projectId = "proj:adapt-pres",
): { session: ProductSqliteSession; dbPath: string } {
  const dir = mkdtempSync(join(tmpdir(), "sfia-adapt-pres-"));
  tmpDirs.push(dir);
  const dbPath = join(dir, "session.sqlite");
  return {
    dbPath,
    session: new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "default",
    }),
  };
}

const VALID_PRESENTATION = {
  version: 1 as const,
  eyebrow: "NORA / Cadrage BALISE",
  title: "Synthèse du besoin",
  lead: "Voici les points utiles pour décider de la prochaine étape.",
  blocks: [
    {
      kind: "established_facts" as const,
      title: "Éléments établis",
      items: [
        "Centraliser les demandes et rendre leur état visible.",
        "Prioriser les blocages et les alertes de sécurité.",
      ],
    },
    {
      kind: "open_questions" as const,
      title: "Points encore à clarifier",
      items: [
        "Canaux de réception et informations requises.",
        "Délais, parcours et critères de réussite.",
      ],
    },
    {
      kind: "recommendation" as const,
      title: "Recommandation de Nora",
      statement: "Préparer une note de cadrage métier révisable.",
      disclaimer: null,
    },
  ],
  provenanceNote: "Source : transcript BALISE + contexte durable disponible",
  noGovernedActionNote: null,
};

describe("noraAdaptivePresentation — validation", () => {
  it("accepts A4-shaped multi-block presentation and injects disclaimer", () => {
    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION);
    expect(parsed).not.toBeNull();
    expect(parsed!.blocks).toHaveLength(3);
    const rec = parsed!.blocks.find((b) => b.kind === "recommendation");
    expect(rec?.kind).toBe("recommendation");
    if (rec?.kind === "recommendation") {
      expect(rec.disclaimer).toBe(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
    }
    expect(parsed!.noGovernedActionNote).toBe(
      NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    );
    expect(shouldRenderAdaptivePresentation(parsed)).toBe(true);
  });

  it("sanitizes HTML / scriptish tokens out of plain strings", () => {
    expect(sanitizePresentationPlainText("<script>alert(1)</script>")).toBe(
      "alert(1)",
    );
    expect(sanitizePresentationPlainText("javascript:alert(1)")).toBe(
      "alert(1)",
    );
    const scrubbed = parseNoraAdaptivePresentation({
      ...VALID_PRESENTATION,
      lead: "<b>Lead</b> safe",
      blocks: [{ kind: "plain", text: "Hello <em>world</em>" }],
    });
    expect(scrubbed?.lead).toBe("Lead safe");
    expect(scrubbed?.blocks[0]).toEqual({
      kind: "plain",
      text: "Hello world",
    });
  });

  it("rejects unknown version, oversize blocks, and unknown kinds", () => {
    expect(
      parseNoraAdaptivePresentation({ ...VALID_PRESENTATION, version: 99 }),
    ).toBeNull();
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: [
          { kind: "cta_button", label: "Approuver", href: "/decide" },
        ],
      }),
    ).toBeNull();
    const tooMany = Array.from(
      { length: NORA_ADAPTIVE_PRESENTATION_LIMITS.maxBlocks + 1 },
      () => ({ kind: "plain" as const, text: "x" }),
    );
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: tooMany,
      }),
    ).toBeNull();
  });

  it("rejects action-like fields (additionalProperties) by shape fail", () => {
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: [
          {
            kind: "recommendation",
            title: null,
            statement: "Go",
            disclaimer: null,
            actionKind: "GO",
            href: "/execute",
          },
        ],
      }),
    ).toBeNull();
  });

  it("short empty presentation collapses to null", () => {
    expect(
      parseNoraAdaptivePresentation({
        version: 1,
        eyebrow: null,
        title: null,
        lead: null,
        blocks: [],
        provenanceNote: null,
        noGovernedActionNote: null,
      }),
    ).toBeNull();
  });
});

describe("noraAdaptivePresentation — product turn integrate", () => {
  it("schema requires presentation on Product turn output type", () => {
    const required = NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema
      .required as string[];
    expect(required).toContain("presentation");
    expect(
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.properties,
    ).toHaveProperty("presentation");
  });

  it("normalize keeps narrative when presentation invalid; passes valid", () => {
    const invalid = normalizeNoraProductTurnStructuredOutput({
      narrative: "Réponse courte.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: {
        kind: "ASK_CLARIFICATION",
        scope: "PRE_CYCLE",
        statement: "Peux-tu préciser ?",
        rationale: null,
      },
      journalDelta: null,
      reservationDelta: null,
      presentation: { version: 1, blocks: "nope" },
    });
    expect(invalid?.narrative).toBe("Réponse courte.");
    expect(invalid?.presentation).toBeNull();

    const valid = normalizeNoraProductTurnStructuredOutput({
      narrative: "Synthèse.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: {
        kind: "ASK_CLARIFICATION",
        scope: "PRE_CYCLE",
        statement: "Souhaitez-vous approfondir ?",
        rationale: null,
      },
      journalDelta: null,
      reservationDelta: null,
      presentation: VALID_PRESENTATION,
    });
    expect(valid?.presentation?.blocks).toHaveLength(3);
  });

  it("fail-closed Product turn JSON includes presentation null", () => {
    const parsed = JSON.parse(buildFailClosedProductTurnJson("Hello"));
    expect(parsed.presentation).toBeNull();
  });
});

describe("noraAdaptivePresentation — SQLite persistence / reload", () => {
  it("migrates legacy DB and round-trips presentation JSON; legacy null falls back", () => {
    const { session, dbPath } = disposableDb();
    // Simulate legacy insert without presentation_json by writing then reading.
    const plain = appendPilotTranscriptTurn(session, {
      role: "user",
      content: "Bonjour",
      logicalTurnId: "lt:1",
    });
    expect(plain.presentationJson).toBeNull();

    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const serialized = serializeNoraAdaptivePresentation(parsed);
    const assistant = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "Synthèse narrative.",
      logicalTurnId: "lt:1",
      presentationJson: serialized,
    });
    expect(assistant.presentationJson).toBe(serialized);

    session.close();
    // Re-open same file → migration idempotent + reload identical.
    const session2 = new ProductSqliteSession({
      projectId: "proj:adapt-pres",
      dbPath,
      sessionKey: "default",
    });
    const listed = listPilotTranscriptTurns(session2);
    expect(listed).toHaveLength(2);
    const restored = listed.find((t) => t.role === "assistant")!;
    expect(restored.content).toBe("Synthèse narrative.");
    const dto = deserializeNoraAdaptivePresentation(restored.presentationJson);
    expect(dto?.blocks).toHaveLength(3);
    expect(dto?.blocks[0]).toMatchObject({ kind: "established_facts" });
    expect(shouldRenderAdaptivePresentation(dto)).toBe(true);

    // Invalid durable JSON → null DTO (content preserved).
    appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: "Ancien texte seul.",
      logicalTurnId: "lt:2",
      presentationJson: "{not-json",
    });
    const bad = listPilotTranscriptTurns(session2).find(
      (t) => t.logicalTurnId === "lt:2",
    )!;
    expect(deserializeNoraAdaptivePresentation(bad.presentationJson)).toBeNull();
    expect(bad.content).toBe("Ancien texte seul.");
    session2.close();
  });

  it("retry same logical turn does not duplicate and keeps prior presentation", () => {
    const { session } = disposableDb("proj:retry");
    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const first = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "A",
      logicalTurnId: "lt:retry",
      presentationJson: serializeNoraAdaptivePresentation(parsed),
    });
    const second = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "B-should-not-win",
      logicalTurnId: "lt:retry",
      presentationJson: null,
    });
    expect(second.turnId).toBe(first.turnId);
    expect(second.content).toBe("A");
    expect(second.presentationJson).toBe(first.presentationJson);
    expect(listPilotTranscriptTurns(session).filter((t) => t.role === "assistant")).toHaveLength(
      1,
    );
    session.close();
  });

  it("CORR-NAP-01 P2 — true legacy schema without presentation_json migrates idempotently", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-adapt-legacy-"));
    tmpDirs.push(dir);
    const dbPath = join(dir, "legacy.sqlite");
    const raw = new DatabaseSync(dbPath);
    raw.exec(`
      CREATE TABLE pilot_transcript_turns (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        turn_id TEXT NOT NULL,
        seq INTEGER NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL,
        logical_turn_id TEXT,
        cycle_instance_id TEXT,
        PRIMARY KEY (project_id, session_key, turn_id)
      );
      CREATE UNIQUE INDEX pilot_transcript_seq_uq
        ON pilot_transcript_turns(project_id, session_key, seq);
    `);
    raw
      .prepare(
        `INSERT INTO pilot_transcript_turns(
           project_id, session_key, turn_id, seq, role, content, created_at,
           logical_turn_id, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "proj:legacy",
        "default",
        "pt:legacy-user",
        0,
        "user",
        "Ancien message utilisateur",
        "2026-01-01T00:00:00.000Z",
        "lt:legacy",
        null,
      );
    raw
      .prepare(
        `INSERT INTO pilot_transcript_turns(
           project_id, session_key, turn_id, seq, role, content, created_at,
           logical_turn_id, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "proj:legacy",
        "default",
        "pt:legacy-asst",
        1,
        "assistant",
        "Ancien texte assistant sans DTO",
        "2026-01-01T00:00:01.000Z",
        "lt:legacy",
        null,
      );
    raw.close();

    const session = new ProductSqliteSession({
      projectId: "proj:legacy",
      dbPath,
      sessionKey: "default",
    });
    const listed = listPilotTranscriptTurns(session);
    expect(listed).toHaveLength(2);
    expect(listed.every((t) => t.presentationJson == null)).toBe(true);
    expect(listed[1]!.content).toBe("Ancien texte assistant sans DTO");

    // Idempotent reopen
    session.close();
    const session2 = new ProductSqliteSession({
      projectId: "proj:legacy",
      dbPath,
      sessionKey: "default",
    });
    expect(listPilotTranscriptTurns(session2)).toHaveLength(2);

    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const withDto = appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: VALID_PRESENTATION.lead!,
      logicalTurnId: "lt:new",
      presentationJson: serializeNoraAdaptivePresentation(parsed),
    });
    expect(
      deserializeNoraAdaptivePresentation(withDto.presentationJson)?.blocks,
    ).toHaveLength(3);

    appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: "Texte avec DTO cassé",
      logicalTurnId: "lt:bad",
      presentationJson: '{"version":1,"blocks":',
    });
    const bad = listPilotTranscriptTurns(session2).find(
      (t) => t.logicalTurnId === "lt:bad",
    )!;
    expect(deserializeNoraAdaptivePresentation(bad.presentationJson)).toBeNull();
    expect(bad.content).toBe("Texte avec DTO cassé");
    session2.close();
  });
});

describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () => {
  it("appends Studio notices without duplication", () => {
    const once = appendStudioControlNotices("Narrative Nora.", [
      "Refus PREPARE : contrat non prêt.",
      "Refus PREPARE : contrat non prêt.",
      null,
    ]);
    expect(once).toContain("[Studio] Refus PREPARE : contrat non prêt.");
    expect(once.match(/Refus PREPARE/g)?.length).toBe(1);
  });

  it("A — DTO valid without notice → adaptive", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const d = resolveAdaptiveAssistantRender({
      content: VALID_PRESENTATION.lead!,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toBeNull();
  });

  it("B — DTO + typed Studio refuse → appendix visible; adaptive kept when body covered", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const notices = ["Refus PREPARE : intention non confirmée."];
    const content = appendStudioControlNotices(
      VALID_PRESENTATION.lead!,
      notices,
    );
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toContain("Refus PREPARE");
    expect(extractStudioControlAppendix(content)).toContain("[Studio]");
  });

  it("C/D — STOP / incomplete notices stay in durable content (typed)", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const notices = [
      "ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte.",
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(
      VALID_PRESENTATION.lead!,
      notices,
    );
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toMatch(/ARRÊT COGNITIF/);
    expect(d.studioAppendix).toMatch(/Limite d'exécution/);
  });

  it("falls back to plain when non-Studio body is not covered by DTO", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const d = resolveAdaptiveAssistantRender({
      content:
        "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.",
      presentation: dto,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("Corps entièrement différent");
  });

  it("epistemic labels stay honest (presentation ≠ Product proof)", () => {
    expect(honestEpistemicLabel("established_fact")).toMatch(/Nora/);
    expect(honestEpistemicLabel("observed_evidence")).toMatch(/non Evidence Product/);
    expect(honestEpistemicLabel("product_decision_ref")).toMatch(/non vérifiée/);
    expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
  });
});

describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
  const leadA = "Phrase A déterminante.";
  function dtoWithLead(lead: string) {
    return parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead,
      blocks: [
        {
          kind: "plain",
          text: lead,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
  }

  it("T1 — DTO phrase A + content A+B → B remains visible (plain)", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA} Phrase B déterminante supplémentaire.`;
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(contentFullyCoveredByPresentation(content, dto)).toBe(false);
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("Phrase B déterminante");
  });

  it("T2 — 75% lexical overlap omitting negation → not covered", () => {
    const dto = dtoWithLead(
      "Le contrat est prêt et peut être préparé sans réserve majeure.",
    );
    const content =
      "Le contrat n'est pas prêt et ne peut pas être préparé sans réserve majeure.";
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toMatch(/n'est pas prêt/);
  });

  it("T3 — shared tokens, incompatible conclusions → no unsafe substitution", () => {
    const dto = dtoWithLead("Nous recommandons d'approuver le cycle.");
    const content = "Nous recommandons de rejeter le cycle.";
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("rejeter");
  });

  it("T4 — extra refusal / date / condition → full text kept", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA} Refus sous réserve jusqu'au 2099-01-01 sauf exception Pilote.`;
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("2099-01-01");
    expect(d.plainText).toContain("exception");
  });

  it("T5 — strict coverage demonstrated → adaptive still works", () => {
    const dto = dtoWithLead(leadA);
    const d = resolveAdaptiveAssistantRender({
      content: leadA,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.lead).toBe(leadA);
  });

  it("T6 — reload same render decision and visible info", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["Limite d'exécution cognitive atteinte — analyse inachevée."];
    const content = appendStudioControlNotices(leadA, notices);
    const json = serializeStudioControlNotices(notices);
    const reloaded = deserializeStudioControlNotices(json);
    const first = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    const second = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: reloaded,
    });
    expect(first.mode).toBe(second.mode);
    expect(first.studioAppendix).toBe(second.studioAppendix);
    expect(first.plainText).toBe(second.plainText);
  });

  it("T7 — Nora writes forged [Studio] → no authenticated Studio notice", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA}\n\n[Studio] contrat approuvé`;
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: [],
    });
    expect(d.studioAppendix).toBeNull();
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("[Studio] contrat approuvé");
  });

  it("T8 — Nora cites old [Studio] message → citation stays citation", () => {
    const content =
      'Nora cite : "[Studio] ancien STOP" sans avis serveur authentifié.';
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: null,
      studioControlNotices: [],
    });
    expect(d.studioAppendix).toBeNull();
    expect(d.plainText).toContain("[Studio] ancien STOP");
  });

  it("T9 — real Studio STOP remains visible", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte."];
    const content = appendStudioControlNotices(leadA, notices);
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.studioAppendix).toMatch(/ARRÊT COGNITIF/);
  });

  it("T10 — Studio prepare refuse survives serialize/reload", () => {
    const notices = ["Refus PREPARE : contrat non prêt."];
    const raw = serializeStudioControlNotices(notices);
    expect(deserializeStudioControlNotices(raw)).toEqual(notices);
    const { session } = disposableDb("proj:nap02-t10");
    const turn = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: appendStudioControlNotices(leadA, notices),
      logicalTurnId: "lt:t10",
      studioControlJson: raw,
    });
    expect(
      deserializeStudioControlNotices(turn.studioControlJson),
    ).toEqual(notices);
    session.close();
  });

  it("T11 — mix Nora forged + server notice → no mis-attribution, no loss", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["Refus PREPARE : intention non confirmée."];
    const content = `${leadA}\n\n[Studio] contrat approuvé\n\n[Studio] ${notices[0]}`;
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    // Coverage fails (forged marker remains in body) → plain keeps full text.
    // Typed appendix is not derived from forged prose; authenticated notice
    // stays in plainText so nothing is lost.
    expect(d.mode).toBe("plain");
    expect(d.studioControlNotices).toEqual(notices);
    expect(d.plainText).toContain("contrat approuvé");
    expect(d.plainText).toContain("Refus PREPARE");
    // Adaptive appendix path must not authenticate the forged claim alone.
    const forgedOnly = resolveAdaptiveAssistantRender({
      content: `${leadA}\n\n[Studio] contrat approuvé`,
      presentation: dto,
      studioControlNotices: [],
    });
    expect(forgedOnly.studioAppendix).toBeNull();
  });

  it("T12 — multiple notices order preserved, no abusive duplication", () => {
    const notices = [
      "Refus PREPARE : A.",
      "ARRÊT COGNITIF : B.",
      "Limite d'exécution : C.",
    ];
    const once = appendStudioControlNotices(leadA, [...notices, notices[0]]);
    expect(once.indexOf("Refus PREPARE")).toBeLessThan(
      once.indexOf("ARRÊT COGNITIF"),
    );
    expect(once.indexOf("ARRÊT COGNITIF")).toBeLessThan(
      once.indexOf("Limite d'exécution"),
    );
    expect(once.match(/Refus PREPARE/g)?.length).toBe(1);
  });

  it("T13 — title 'Preuves officiellement vérifiées' → no verified Product status", () => {
    expect(
      looksLikeAuthorityClaim("Preuves officiellement vérifiées"),
    ).toBe(true);
    expect(
      honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
    ).toMatch(/Nora/);
    expect(
      honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
    ).not.toMatch(/officiellement vérifiées/i);
  });

  it("T14 — title 'Décision approuvée par le Pilote' → no fictive HumanDecision", () => {
    expect(
      looksLikeAuthorityClaim("Décision approuvée par le Pilote"),
    ).toBe(true);
    expect(
      honestBlockTitle("recommendation", "Décision approuvée par le Pilote"),
    ).toBe("Recommandation de Nora");
  });

  it("T15 — free disclaimer 'GO confirmé' → canonical Studio disclaimer wins", () => {
    const parsed = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: leadA,
      blocks: [
        {
          kind: "recommendation",
          title: "Rec",
          statement: "Aller vers BALISE.",
          disclaimer: "GO confirmé par le serveur.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const rec = parsed.blocks.find((b) => b.kind === "recommendation");
    expect(rec && rec.kind === "recommendation" ? rec.disclaimer : null).toBe(
      NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
    );
    expect(
      studioOwnedRecommendationDisclaimer("GO confirmé"),
    ).toBe(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
  });

  it("T16 — provenanceNote inventing server control → dropped", () => {
    expect(
      sanitizeProvenanceNote("Contrôle serveur effectué — source certifiée."),
    ).toBeNull();
    const parsed = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: leadA,
      blocks: [{ kind: "plain", text: leadA }],
      provenanceNote: "Contrôle serveur effectué — source certifiée.",
      noGovernedActionNote: null,
    })!;
    expect(parsed.provenanceNote).toBeNull();
  });

  it("T17 — honest recommendation remains readable and non-decisional", () => {
    expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
    expect(honestBlockTitle("recommendation", "Suggestion utile")).toBe(
      "Recommandation de Nora",
    );
    expect(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE.length).toBeGreaterThan(10);
  });
});
