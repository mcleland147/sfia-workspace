import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

export type FakeToolScriptRound =
  | { kind: "message"; text: string }
  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

type FakeChallengeAssessment =
  | "sufficient"
  | "insufficient"
  | "unknown"
  | null;

/** F2 intent-analysis ownership — system messages only; never user content. */
function isF2IntentAnalysisContext(messages: ProviderChatMessage[]): boolean {
  return messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
}

/**
 * Bounded Unicode/case normalization for the natural materialization contract only.
 * Not a general NLP layer — only apostrophe variants + accents on recognized tokens.
 */
function normalizeNaturalMaterializationProbe(raw: string): string {
  return raw
    .normalize("NFC")
    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
    .toLowerCase()
    .replace(/[àáâäã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôöõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c");
}

/** Exactly one repository-relative `.md` path from CURRENT demand; else null. */
function extractSingleRepoRelativeMdPath(probe: string): string | null {
  const re =
    /(?:^|[\s`"'(])((?:[A-Za-z0-9._-]+\/)+[A-Za-z0-9._-]+\.md)(?=$|[\s`"'),.])/g;
  const hits: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(probe)) !== null) {
    hits.push(m[1]!);
  }
  if (hits.length !== 1) return null;
  const path = hits[0]!;
  if (path.startsWith("/") || path.includes("..") || /:\/\//.test(path)) {
    return null;
  }
  return path;
}

/** Exactly one safe Markdown leaf filename (no slash); else null. */
function extractSingleMdFileNameLeaf(probe: string): string | null {
  const re =
    /(?:^|[\s`"'(])([A-Za-z0-9][A-Za-z0-9._-]{0,120}\.md)(?=$|[\s`"'),.])/g;
  const hits: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(probe)) !== null) {
    // Skip if the hit is part of a path (preceded by /)
    const idx = m.index ?? 0;
    if (idx > 0 && probe[idx] === "/") continue;
    const before = probe.slice(Math.max(0, idx - 1), idx + 1);
    if (before.includes("/")) continue;
    hits.push(m[1]!);
  }
  // Filter out hits that appear as path suffixes already counted elsewhere
  const leaves = hits.filter((h) => !probe.includes(`/${h}`));
  if (leaves.length !== 1) return null;
  return leaves[0]!;
}

/**
 * Narrow natural Pilot contract for artifact materialization (no synonym engine).
 * Requires ALL of:
 * 1) materialize wording family
 * 2) exactly one repo-relative .md path OR one safe .md leaf OR framing note cue
 * 3) explicit proposal / decision preparation
 * 4) explicit no-execution guard
 */
function matchNaturalArtifactMaterialization(probe: string): {
  targetPath: string | null;
  artifactFileName: string;
  artifactBrief: string;
  contentRequirement: string;
} | null {
  const normalized = normalizeNaturalMaterializationProbe(probe);
  if (!/\bmaterialis(?:e|er)\b/.test(normalized)) return null;

  const hasProposalOrDecision =
    /\bproposition\b/.test(normalized) || /\bdecision\b/.test(normalized);
  const hasNoExecution =
    /n'execute\s+rien/.test(normalized) ||
    /ne\s+rien\s+executer/.test(normalized);
  if (!hasProposalOrDecision || !hasNoExecution) return null;

  const targetPath = extractSingleRepoRelativeMdPath(probe);
  const leafFromPath = targetPath
    ? targetPath.split("/").pop() || null
    : null;
  const bareLeaf = extractSingleMdFileNameLeaf(probe);
  let artifactFileName = leafFromPath || bareLeaf || null;
  // Framing note cue without explicit filename — Nora-like non-authoritative candidate
  if (
    !artifactFileName &&
    /\bnote\b/.test(normalized) &&
    /\bcadrage\b/.test(normalized)
  ) {
    artifactFileName = "note-de-cadrage.md";
  }
  if (!artifactFileName) return null;

  const brief = probe.replace(/\s+/g, " ").trim().slice(0, 240);
  return {
    targetPath,
    artifactFileName,
    artifactBrief: brief,
    contentRequirement: brief,
  };
}

/** Shared F2 artifact-materialization analysis payload (sentinel + natural). */
function buildArtifactMaterializationAnalysis(input: {
  targetPath?: string | null;
  artifactFileName?: string | null;
  challengeResponseAssessment?: FakeChallengeAssessment;
  artifactBrief?: string;
  contentRequirements?: string[];
}): Record<string, unknown> {
  const targetPath = input.targetPath ?? null;
  const artifactFileName =
    input.artifactFileName?.trim() ||
    (targetPath ? targetPath.split("/").pop() || null : null);
  const parentSlash = targetPath ? targetPath.lastIndexOf("/") : -1;
  const scopeIn =
    parentSlash > 0 ? [targetPath!.slice(0, parentSlash + 1)] : [];
  return {
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:framing",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: input.challengeResponseAssessment ?? "sufficient",
    continuationKind: "active_cycle_artifact_materialization",
    artifactMaterializationOperation: "cursor.docs_write.apply",
    objective: "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif — aucune exécution automatique",
    rephrasedRequest: "Matérialisation gouvernée du livrable requis",
    outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
    risks: ["Confusion continuation / nouvelle formalisation"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "Décision Pilote requise"],
    activatedBlocks: ["proposition", "gate"],
    expectedOutcome: "Proposition de matérialisation liée au cycle actif",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: "deliverable_document",
      targetRepositoryRef: null,
      targetPath,
      artifactFileName,
      scopeIn,
      scopeOut: [],
      expectedOutputs: targetPath ? [targetPath] : artifactFileName ? [artifactFileName] : [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief:
        input.artifactBrief ?? "Livrable requis du cycle actif",
      contentRequirements:
        input.contentRequirements ?? ["Contenu défini avec Nora"],
      exitRequirementKinds: [],
    },
  };
}

function fakeF2JsonResult(
  callCount: number,
  analysis: Record<string, unknown>,
): ProviderCompletionResult {
  return {
    text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(analysis)}`,
    usage: {
      inputTokens: 10 * callCount,
      outputTokens: 5 * callCount,
      totalTokens: 15 * callCount,
      model: "fake-test-model",
      providerResponseId: `fake-resp-${callCount}`,
    },
  };
}

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private roundCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;
  private readonly toolScript?: FakeToolScriptRound[];

  constructor(options?: {
    scripted?: string[];
    failOnCall?: number;
    toolScript?: FakeToolScriptRound[];
  }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
    this.toolScript = options?.toolScript;
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    // Reuse F2 marker / analysis scripted JSON from complete().
    return this.complete(input.messages);
  }

  /** Test helper — Nora/provider invocation counter. */
  getCallCountForTests(): number {
    return this.callCount;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }

    // Explicit scripted replies win over content-marker specialization (W3-C
    // correction tests inject deterministic Nora strings).
    if (this.scripted !== undefined) {
      const historyLen = messages.length;
      const text =
        this.scripted[this.callCount - 1] ??
        `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
      return {
        text,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    if (
      messages.some((m) =>
        m.role === "system" &&
        m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
      )
    ) {
      // Specialized Fake CKC cognition keys off CONTENT markers only.
      // CKC IDs (ckc:studio:*) must never trigger specialized behavior (R1-01).
      const joined = messages.map((m) => m.content).join("\n").toLowerCase();
      const hasFraming =
        joined.includes("intention") &&
        (joined.includes("périmètre") ||
          joined.includes("perimetre") ||
          joined.includes("besoin réel") ||
          joined.includes("besoin reel"));
      const hasQa =
        joined.includes("verdict evidence-based") ||
        joined.includes("claims interdits") ||
        joined.includes("confirmation bias") ||
        joined.includes("green ci");
      const hasSecurity =
        joined.includes("risque résiduel") ||
        joined.includes("risque residuel") ||
        joined.includes("adversarial") ||
        joined.includes("secret en repo");
      const hasDelivery =
        joined.includes("anti scope creep") ||
        joined.includes("scope creep") ||
        joined.includes("implémentation bornée") ||
        joined.includes("implementation bornee");
      const hasExtensionProbe = joined.includes("w3d_extension_probe_marker");
      if (hasExtensionProbe) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — W3D_EXTENSION_PROBE_MARKER : type d'extension test-only via même chemin cognitif. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasSecurity) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — posture adversarial : risque résiduel majeures → HumanDecision explicite ; secret en repo → STOP. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasDelivery) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension ; pas de silent REAL ; Evidence/done honnête. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasQa) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — verdict evidence-based : claims interdits sans preuve ; refuser confirmation bias / green CI = validé. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasFraming) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — cadrage : clarifier intention et périmètre utile avant conception ; séparer besoin réel et solution présumée. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      return {
        text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    // F2 deterministic structured intent JSON (TEST/FAKE only).
    // CORR-PROOF-01 D1: probe the current demand only — prior Session user text
    // in canonical conversation context must not steal fixture-marker matching.
    const markerProbe = (() => {
      const raw = lastUser?.content ?? "";
      const sep = "Demande courante (à évaluer):";
      const i = raw.indexOf(sep);
      return i >= 0 ? raw.slice(i + sep.length) : raw;
    })();
    if (markerProbe.includes("__MW5_HIGH_ASSURANCE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: {
            ambiguity: "high",
            reasoningDepth: "high",
            sourceBreadth: "high",
            toolDependency: "medium",
            contradictionRisk: "high",
            verificationNeed: "high",
          },
          objective: "Préparer une proposition High-Assurance bornée",
          scope: "Proposition Light/Standard sous stratégie High-Assurance",
          rephrasedRequest: "Préparer une recommandation sous High-Assurance",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Rec avant challenge"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Challenge avant Rec",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_COSMETIC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Peux-tu juste corriger l'orthographe cosmétique",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_CONTEXT_RESOLVED__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Demande déjà couverte par le contexte projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (
      markerProbe.includes("__MW5_TRUTH_C_ESTABLISHED__") ||
      markerProbe.includes("__MW5_CONSUMED_HD__")
    ) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Faire évoluer l'architecture déjà tranchée",
          scope: "Changement d'architecture déjà établi",
          rephrasedRequest: "Reprendre une prémisse déjà établie",
          outOfScope: ["Exécution"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Pas de re-challenge gratuit",
          criticalJustification: "Prémisse déjà établie / HD consommée",
          requestedOperation: "architecture change",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_QUESTIONNAIRE_ATTEMPT__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Formulaire d'intake multi-questions",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_AUTHORITY__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Frontière d'autorité non résolue",
          scope: "Décision humaine requise sans acte Nora",
          rephrasedRequest: "Escalader l'autorité non résolue",
          outOfScope: ["HumanDecision synthétisée"],
          risks: ["Confusion Rec/HD"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Escalade Pilote",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_SYNTH_HD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Tenter de faire synthétiser un GO Nora",
          scope: "Anti-synthèse HumanDecision",
          rephrasedRequest: "Décider GO maintenant",
          outOfScope: ["Décision Nora"],
          risks: ["Autorité usurpée"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "go now",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_DOCS_WRITE_GCEC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-design",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: "Rédiger le design fonctionnel borné",
          scope: "docs/functional-design.md uniquement",
          rephrasedRequest:
            "Produire docs/functional-design.md via cursor.docs_write.apply",
          outOfScope: ["Cursor REAL hors fake", "commit/push/PR"],
          risks: ["Contenu incomplet"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION RÉELLE CURSOR"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Artifact functional-design prêt pour revue",
          criticalJustification: null,
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: "functional_design",
            targetRepositoryRef: "acme/widget",
            targetPath: "docs/functional-design.md",
            scopeIn: ["docs/"],
            scopeOut: ["src/", ".github/"],
            expectedOutputs: ["docs/functional-design.md"],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: ["path_allowlist", "no_delete"],
            evidenceRequirements: [
              "git:local_commit",
              "git:remote_push",
              "git:pull_request",
              "git:ci_status",
              "git:review_status",
              "git:merge",
              "git:post_merge_verification",
            ],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: "reversible",
            artifactBrief:
              "Functional design covering goals, actors, flows, and constraints",
            contentRequirements: [
              "goals",
              "actors",
              "main_flows",
              "constraints",
              "out_of_scope",
            ],
            exitRequirementKinds: [
              "artifact",
              "validation",
              "commit",
              "push",
              "pull_request",
              "ci",
              "review",
              "merge",
              "post_merge_verification",
            ],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_INFORMATIVE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Résumer le projet",
          scope: null,
          rephrasedRequest: "Résumer l'objectif du projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ACTIONABLE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer la prochaine étape fonctionnelle",
          scope: "Proposition bornée sans exécution",
          rephrasedRequest: "Préparer une proposition de livraison bornée",
          outOfScope: ["Cursor", "Git write", "PR"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition structurée prête pour revue",
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    /**
     * Light/Standard gated path: Morris gate via structural op token ("create pr")
     * without Critical profile — ZERO REAL Confirmation reachable.
     * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
     */
    if (markerProbe.includes("__F2_GATED_STANDARD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer une livraison bornée avec gate Morris",
          scope: "Proposition Standard gateable sans Critical",
          rephrasedRequest: "Préparer une proposition de livraison gated",
          outOfScope: ["Cursor REAL"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis — profil Standard",
          criticalJustification: null,
          requestedOperation: "create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_STRUCTURING__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go|d'accord|daccord)\b/i.test(
          content.replace(/__MW5_[A-Z0-9_]+__/g, "").replace(/__F2_[A-Z0-9_]+__/g, "").trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      } else if (
        /hors\s*sujet|off[\s-]?topic|couleur\s+pr[eé]f[eé]r[eé]e/i.test(content)
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          rephrasedRequest: "Préparer une proposition d'architecture",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis",
          criticalJustification: "Besoin métier structurant documenté",
          requestedOperation: "architecture change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_AMBIGUOUS__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Fais le nécessaire",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    // CR-07-06 — must be checked BEFORE __F2_ARTIFACT_MATERIALIZE__ (substring risk).
    if (markerProbe.includes("__F2_ARTIFACT_HOSTILE_MERGE_OP__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:framing",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: "sufficient",
          continuationKind: "active_cycle_artifact_materialization",
          artifactMaterializationOperation: null,
          objective: "Matérialiser le livrable requis du cycle actif",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          rephrasedRequest: "Matérialisation gouvernée du livrable requis",
          outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
          risks: ["Confusion action / classification"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["proposition", "gate"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "github.pr.merge",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: "deliverable_document",
            targetRepositoryRef: null,
            targetPath: "docs/livrable-cycle.md",
            scopeIn: ["docs/"],
            scopeOut: [],
            expectedOutputs: ["docs/livrable-cycle.md"],
            requiredCapabilities: ["cap:github.pr.merge"],
            validationExpectations: [],
            evidenceRequirements: [],
            requestedOperation: "github.pr.merge",
            reversibilityExpectation: null,
            artifactBrief: "Livrable requis du cycle actif",
            contentRequirements: ["Contenu défini avec Nora"],
            exitRequirementKinds: [],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ARTIFACT_MATERIALIZE__")) {
      // Historical sentinel fixture — same builder as natural Pilot contract.
      const content = markerProbe;
      let challengeResponseAssessment: FakeChallengeAssessment = "sufficient";
      if (content.includes("__MW5_SATISFACTION_INSUFFICIENT__")) {
        challengeResponseAssessment = "insufficient";
      }
      return fakeF2JsonResult(
        this.callCount,
        buildArtifactMaterializationAnalysis({
          targetPath: "docs/livrable-cycle.md",
          challengeResponseAssessment,
        }),
      );
    }
    if (markerProbe.includes("__F2_DOCS_WRITE_GENERIC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:framing",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: "sufficient",
          continuationKind: null,
          objective: "Modifier le README du dépôt",
          scope: "docs_write générique indépendant",
          rephrasedRequest: "Écrire dans le README",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition docs_write générique",
          criticalJustification: null,
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: null,
            targetRepositoryRef: null,
            targetPath: "README.md",
            scopeIn: ["projects/"],
            scopeOut: [],
            expectedOutputs: ["README.md"],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: [],
            evidenceRequirements: [],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: null,
            artifactBrief: null,
            contentRequirements: [],
            exitRequirementKinds: [],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ARTIFACT_DEFINE_ONLY__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: "cyc:framing",
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          continuationKind: null,
          objective: "Définir la forme du livrable attendu",
          scope: null,
          rephrasedRequest: "Préciser la définition du livrable sans matérialiser",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_EXECUTION__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go)\b/i.test(
          content
            .replace(/__MW5_[A-Z0-9_]+__/g, "")
            .replace(/__F2_[A-Z0-9_]+__/g, "")
            .trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Lancer Cursor et créer une PR",
          scope: "Exécution produit demandée — refusée en F2",
          rephrasedRequest: "Demande d'exécution Cursor / PR",
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre F2"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
          requestedOperation: "cursor create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:security",
          signals: {
            structuralChange: true,
            securityImpact: true,
            architectureImpact: true,
            dataImpact: true,
            irreversible: true,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Changer l'architecture sécurité",
          scope: "Impact structurant sécurité",
          rephrasedRequest: "Modifier architecture sécurité",
          outOfScope: ["Exécution"],
          risks: ["Impact critique"],
          reservations: [],
          stopConditions: ["Justification Critical obligatoire"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "architecture security change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    // Natural Pilot artifact-materialization is F2 intent-analysis ONLY.
    // Ordering: HOSTILE_MERGE → ARTIFACT_MATERIALIZE sentinel → … remaining markers
    // → F2-context natural matcher → F2 informative fallback → ordinary non-F2 fake.
    if (isF2IntentAnalysisContext(messages)) {
      const naturalMaterialization =
        matchNaturalArtifactMaterialization(markerProbe);
      if (naturalMaterialization) {
        return fakeF2JsonResult(
          this.callCount,
          buildArtifactMaterializationAnalysis({
            targetPath: naturalMaterialization.targetPath,
            artifactFileName: naturalMaterialization.artifactFileName,
            artifactBrief: naturalMaterialization.artifactBrief,
            contentRequirements: [naturalMaterialization.contentRequirement],
          }),
        );
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `fake-round-${this.roundCount}`,
    };

    if (this.toolScript && this.toolScript.length > 0) {
      const step =
        this.toolScript[
          Math.min(this.roundCount - 1, this.toolScript.length - 1)
        ];
      if (step.kind === "tool_calls" && input.tools.length > 0) {
        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
      }
      if (step.kind === "message") {
        return { kind: "message", text: step.text, usage };
      }
    }

    // Auto: if last user asks for git/github and tools available, emit one tool call once
    const lastUser = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      lastUser && lastUser.type === "message" ? lastUser.content : "";

    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GIT_STATUS__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-git-status",
            name: "git_local_get_status",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GITHUB_REPO__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-gh-repo",
            name: "github_get_repository",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_DENIED_PATH__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-env",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ".env" }),
          },
        ],
        usage,
      };
    }

    // After tools or default message
    const toolOutputs = input.items.filter(
      (i) => i.type === "function_call_output",
    );
    if (toolOutputs.length > 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
        usage,
      };
    }

    const messages = input.items
      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
        i.type === "message",
      )
      .map((m) => ({ role: m.role, content: m.content }));
    const completion = await this.complete(messages);
    return { kind: "message", text: completion.text, usage: completion.usage };
  }
}
