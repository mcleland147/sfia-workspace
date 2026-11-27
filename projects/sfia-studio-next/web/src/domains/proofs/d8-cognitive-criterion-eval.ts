/**
 * C24 — cognitive contribution to D8 criterion evaluation (D3 under D8 ownership).
 *
 * Cognitive assessment alone NEVER certifies that a command ran or a test passed.
 * It may:
 * - mark semantic relevance of consulted pieces vs a criterion;
 * - identify contradictions / insufficiencies;
 * - downgrade a static "verified" when the content clearly fails the criterion intent.
 *
 * Structured output is consumed by D8; final Pilot avis remains separate.
 */

export type CriterionCognitiveAssessment = {
  criterion: string;
  /** Cognitive judgment — not a D8 technical certification. */
  judgment:
    | "SUPPORTS"
    | "INSUFFICIENT"
    | "CONTRADICTS"
    | "INDETERMINATE"
    | "UNAVAILABLE";
  rationale: string;
  /** Pieces actually referenced (paths / artifact ids) — never invented facts. */
  piecesConsulted: string[];
  provenance: "D3_STRUCTURED" | "DETERMINISTIC_HEURISTIC" | "UNAVAILABLE";
};

export type CognitiveCriterionEvalResult = {
  assessments: CriterionCognitiveAssessment[];
  limits: string[];
};

/**
 * Deterministic heuristic (no provider): compare criterion tokens to notes/refs.
 * Used when LIVE cognitive is off or unavailable — never invents SUPPORTS for tests.
 */
export function heuristicCognitiveCriterionAssessments(input: {
  criteria: string[];
  criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; note?: string; level?: string }
  >;
}): CognitiveCriterionEvalResult {
  const limits = ["D8_COGNITIVE_HEURISTIC_C24 — not a LIVE Nora judgment"];
  const assessments: CriterionCognitiveAssessment[] = input.criteria.map(
    (criterion) => {
      const ev = input.criterionEvidence[criterion];
      const pieces = ev?.refs ?? [];
      const isTestish = /\b(test|npm|vitest|jest|exit\s*=\s*0)\b/i.test(criterion);
      if (!ev) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale: "Aucune pièce technique rattachée au critère",
          piecesConsulted: [],
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (isTestish && !ev.verified) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale:
            "Critère de test sans preuve Studio isolée — appréciation cognitive ne certifie pas l'exécution",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (ev.verified && pieces.length > 0) {
        return {
          criterion,
          judgment: "SUPPORTS" as const,
          rationale: ev.note ?? "Preuve technique Studio liée au critère",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (pieces.length > 0 && !ev.verified) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale: "Pièces accessibles sans satisfaction vérifiée",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      return {
        criterion,
        judgment: "INDETERMINATE" as const,
        rationale: "Évaluation indéterminée sans preuve opposable",
        piecesConsulted: pieces,
        provenance: "DETERMINISTIC_HEURISTIC" as const,
      };
    },
  );
  return { assessments, limits };
}

/**
 * Apply cognitive assessments onto criterionEvidence before D8 qualify.
 * - CONTRADICTS / INSUFFICIENT on a previously verified criterion → unverified
 * - SUPPORTS alone never upgrades an unverified technical criterion to verified
 */
type EvidenceEntry = {
  refs: string[];
  verified: boolean;
  note?: string;
  level?: string;
};

export function applyCognitiveAssessmentsToEvidence(input: {
  criterionEvidence: Record<string, EvidenceEntry>;
  assessments: CriterionCognitiveAssessment[];
}): {
  criterionEvidence: Record<string, EvidenceEntry>;
  limits: string[];
} {
  const next = { ...input.criterionEvidence };
  const limits: string[] = [];
  for (const a of input.assessments) {
    const cur = next[a.criterion] ?? {
      refs: a.piecesConsulted,
      verified: false,
    };
    if (
      cur.verified &&
      (a.judgment === "CONTRADICTS" || a.judgment === "INSUFFICIENT")
    ) {
      next[a.criterion] = {
        ...cur,
        verified: false,
        note: `COGNITIVE_${a.judgment}: ${a.rationale}`.slice(0, 240),
        level: "INSUFFICIENT",
      };
      limits.push(`COGNITIVE_DOWNGRADE:${a.criterion.slice(0, 60)}`);
    } else if (!cur.verified && a.judgment === "SUPPORTS") {
      // Do not upgrade — technical proof required for verified.
      limits.push(`COGNITIVE_SUPPORTS_NON_CERTIFYING:${a.criterion.slice(0, 60)}`);
      next[a.criterion] = {
        ...cur,
        refs: [...new Set([...cur.refs, ...a.piecesConsulted])],
        note: `COGNITIVE_SUPPORTS_NON_CERTIFYING: ${a.rationale}`.slice(0, 240),
      };
    } else {
      next[a.criterion] = {
        ...cur,
        refs: [...new Set([...cur.refs, ...a.piecesConsulted])],
        note: cur.note ?? `COGNITIVE_${a.judgment}: ${a.rationale}`.slice(0, 240),
      };
    }
  }
  return { criterionEvidence: next, limits };
}

/**
 * C24 reprise — LIVE Nora GPT-6.2 assessment of criteria against observed pieces.
 * Returns empty assessments + limits on failure (caller keeps heuristic fallback).
 * Never invents technical facts (command execution, remote publish).
 */
export async function runLiveCognitiveCriterionAssessments(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
  attemptId: string;
  contractTitle: string | null;
  acceptanceCriteria: string[];
  criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; note?: string; level?: string }
  >;
  reportExcerpt: string;
}): Promise<CognitiveCriterionEvalResult> {
  const limits: string[] = [];
  if (input.acceptanceCriteria.length === 0) {
    return { assessments: [], limits: ["D8_COGNITIVE_LIVE_NO_CRITERIA"] };
  }
  // ML2 ADAPT: optional bounded Decisions pre-pass (flag OFF by default).
  // Never a D6 HumanDecision. Falls through to Nora when incomplete/uncertain.
  try {
    const { boundedJudgmentEnabled, runBoundedJudgment } = await import(
      "@/domains/conversation/bounded-judgment"
    );
    if (boundedJudgmentEnabled() && input.acceptanceCriteria.length <= 8) {
      const { createFrontierBoundOpenAIClient } = await import(
        "@/domains/conversation/provider-emission-frontier"
      );
      const client = await createFrontierBoundOpenAIClient({ maxRetries: 0 });
      if (client) {
        const judgments: CognitiveCriterionEvalResult["assessments"] = [];
        let allConfident = true;
        for (const c of input.acceptanceCriteria) {
          const ev = input.criterionEvidence[c];
          const evidence = [
            `criterion: ${c}`,
            `refs: ${(ev?.refs ?? []).join(",") || "none"}`,
            `verified_technical: ${ev?.verified ?? false}`,
            `note: ${ev?.note ?? ""}`,
            `report_excerpt: ${input.reportExcerpt.slice(0, 800)}`,
          ].join("\n");
          const bj = await runBoundedJudgment({
            client: client as never,
            request: {
              kind: "choice",
              name: `d8_${input.attemptId}_${judgments.length}`,
              question:
                "Choose the judgment for this acceptance criterion given only the evidence.",
              evidence,
              choices: [
                "SUPPORTS",
                "INSUFFICIENT",
                "CONTRADICTS",
                "INDETERMINATE",
              ],
            },
          });
          if (bj.abstain || bj.uncertain || bj.value == null) {
            allConfident = false;
            break;
          }
          const judgment = String(bj.value);
          if (
            !["SUPPORTS", "INSUFFICIENT", "CONTRADICTS", "INDETERMINATE"].includes(
              judgment,
            )
          ) {
            allConfident = false;
            break;
          }
          judgments.push({
            criterion: c,
            judgment: judgment as
              | "SUPPORTS"
              | "INSUFFICIENT"
              | "CONTRADICTS"
              | "INDETERMINATE",
            rationale: `bounded_judgment:${bj.source};usage_in=${bj.usage?.inputTokens ?? "?"};usage_out=${bj.usage?.outputTokens ?? "?"}`,
            piecesConsulted: ev?.refs ?? [],
            provenance: "D3_STRUCTURED",
          });
        }
        if (allConfident && judgments.length === input.acceptanceCriteria.length) {
          return {
            assessments: judgments,
            limits: ["D8_BOUNDED_JUDGMENT_PASS", "NOT_D6_HUMAN_DECISION"],
          };
        }
        limits.push("D8_BOUNDED_JUDGMENT_FALLTHROUGH_NORA");
      }
    }
  } catch {
    limits.push("D8_BOUNDED_JUDGMENT_ERROR");
  }
  try {
    const { runNoraCognitiveTurn } = await import(
      "@/domains/conversation/run-nora-cognitive-turn"
    );
    const evidenceLines = input.acceptanceCriteria.map((c) => {
      const ev = input.criterionEvidence[c];
      return `- critère: ${c}\n  refs=${(ev?.refs ?? []).join(",") || "∅"} verified=${ev?.verified ?? false} note=${ev?.note ?? ""}`;
    });
    const reply = await runNoraCognitiveTurn({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      projectId: input.projectId,
      forceNewWork: true,
      objective: `D8 criterion cognitive assessment ${input.attemptId}`,
      userText: [
        "Tu contribues à la qualification D8 (pas l'avis final Pilote).",
        "Pour CHAQUE critère, juge: SUPPORTS | INSUFFICIENT | CONTRADICTS | INDETERMINATE.",
        "Cite uniquement les pièces listées ou lues via outils D8.",
        "Ne certifie jamais qu'un test a réussi ou qu'une commande a été exécutée sans preuve technique Studio.",
        "Réponds UNIQUEMENT avec un bloc JSON:",
        '```json',
        '[{"criterion":"...","judgment":"SUPPORTS|INSUFFICIENT|CONTRADICTS|INDETERMINATE","rationale":"...","piecesConsulted":["..."]}]',
        "```",
        "",
        `Contrat: ${input.contractTitle ?? "(sans titre)"}`,
        `Attempt: ${input.attemptId}`,
        "Critères et preuves techniques déjà observées:",
        ...evidenceLines,
        "",
        "Extrait rapport (non certifiant):",
        input.reportExcerpt.slice(0, 2500),
        "",
        "OUTILS: list_realization_evidence, read_realization_handoff_report, read_attempt_workspace_file.",
      ].join("\n"),
      contextSnippets: [
        `attemptId=${input.attemptId}`,
        "role=D8_CRITERION_COGNITIVE",
      ],
      toolScope: {
        pilotId: input.pilotId,
        preparationId: input.preparationId,
        operationId: `d8-criteria-cog-${input.attemptId}`,
        projectId: input.projectId,
        attemptId: input.attemptId,
      },
      maxSegmentsThisInvocation: 2,
    });

    const raw = (reply.content ?? "").trim();
    const liveOk =
      reply.mode === "openai-agents-sdk-live" &&
      reply.status === "COMPLETE" &&
      raw.length > 0;
    if (!liveOk) {
      return {
        assessments: [],
        limits: [
          `D8_COGNITIVE_LIVE_UNAVAILABLE_${reply.mode}_${reply.status}`,
        ],
      };
    }

    const jsonMatch = raw.match(/```json\s*([\s\S]*?)```/i) ?? raw.match(/(\[[\s\S]*\])/);
    if (!jsonMatch) {
      return {
        assessments: [],
        limits: ["D8_COGNITIVE_LIVE_NO_JSON"],
      };
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonMatch[1]!.trim());
    } catch {
      return {
        assessments: [],
        limits: ["D8_COGNITIVE_LIVE_JSON_PARSE_FAILED"],
      };
    }
    if (!Array.isArray(parsed)) {
      return {
        assessments: [],
        limits: ["D8_COGNITIVE_LIVE_JSON_NOT_ARRAY"],
      };
    }

    const allowed = new Set([
      "SUPPORTS",
      "INSUFFICIENT",
      "CONTRADICTS",
      "INDETERMINATE",
    ]);
    const byCriterion = new Map(
      input.acceptanceCriteria.map((c) => [c.toLowerCase(), c]),
    );
    const assessments: CriterionCognitiveAssessment[] = [];
    for (const row of parsed) {
      if (!row || typeof row !== "object") continue;
      const r = row as Record<string, unknown>;
      const critRaw = String(r.criterion ?? "").trim();
      const crit =
        byCriterion.get(critRaw.toLowerCase()) ??
        input.acceptanceCriteria.find((c) =>
          c.toLowerCase().includes(critRaw.toLowerCase().slice(0, 40)),
        );
      if (!crit) continue;
      const judgmentRaw = String(r.judgment ?? "INDETERMINATE").toUpperCase();
      const judgment = (
        allowed.has(judgmentRaw) ? judgmentRaw : "INDETERMINATE"
      ) as CriterionCognitiveAssessment["judgment"];
      const pieces = Array.isArray(r.piecesConsulted)
        ? r.piecesConsulted.map((p) => String(p)).filter(Boolean).slice(0, 12)
        : [];
      assessments.push({
        criterion: crit,
        judgment,
        rationale: String(r.rationale ?? "").slice(0, 500),
        piecesConsulted: pieces,
        provenance: "D3_STRUCTURED",
      });
    }
    limits.push(
      "D8_COGNITIVE_LIVE_PARSED",
      `NORA_WORK:${reply.conductor?.workId ?? "unknown"}`,
      `NORA_TOOLS:${reply.toolCallsObserved ?? 0}`,
    );
    return { assessments, limits };
  } catch (e) {
    return {
      assessments: [],
      limits: [
        `D8_COGNITIVE_LIVE_THROW:${String((e as Error)?.message ?? e).slice(0, 80)}`,
      ],
    };
  }
}
