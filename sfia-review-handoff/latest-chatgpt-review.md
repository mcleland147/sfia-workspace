# SFIA Studio Next — ML4C Delivery P1–P5 Review Pack FULL

## A. Date et heure

- 2026-11-14 22:02:24 CET
- Cycle: Delivery / implémentation P1–P5
- Profil: CRITICAL

## B. Cycle et GO

- GO Morris: AUTORISATION D'IMPLÉMENTATION TECHNIQUE LOCALE P1–P5 (14/11/2026)
- Conception: `c883db07` / blob `da397424`
- P0 handoff: `ce53377c` / blob `ed74c45c` — PRE-EXECUTION QUALIFIED
- Push produit / PR / merge / RECETTE / STABLE: **NON AUTORISÉS** — non effectués

## C. Git initial et final

| | Initial (P0) | Final |
| --- | --- | --- |
| Branche | `fix/next-semantic-intent-convergence-20261112` | identique |
| HEAD | `d936da81ebf7d17eb78cc11da0538df000281a4a` | `3d0eab6f01cb8013990193cea93e8bfa5248831d` |
| tree | `276679be1ea139525b2267cde9245b8fb88e9a76` | `cfadcb389b459e3f67fccfd117805b96a32a2033` |
| parent | `67bf6b0b…` | `d936da81ebf7d17eb78cc11da0538df000281a4a` (= d936da81) |
| main | `6cda86bd…` | inchangé |
| PR #676 | OPEN / head `67bf6b0b` | OPEN / NOT MERGED |
| Dirty hors pack | aucun produit | uniquement `.tmp-sfia-review/chatgpt-review.md` |

Commit local: `fix(next): preserve D4 integrity and reconcile safe S05 pending`

## D. Sources Git et blobs

- Design `da397424` — appliqué (INV/QA/G)
- P0 `ed74c45c` — faisabilité confirmée
- Diagnostics S05/PROPOSAL/Q1/Q2 — non réécrits
- ENV-01 / versioning ON MAIN — respectés
- Lane mutative tests: `sfia_next_e2e` @ `127.0.0.1:5433` (réécrit depuis operator `sfia_next_dev`)
- RECETTE: READ ONLY, non mutée

## E. Blast radius

Modifiés (allowlist):
- `conversation/service.ts`, `turn-command.ts`, `document-command.ts`, `document-act.ts`, `nora-adapter.ts`
- **Nouveau helper pur:** `conversation/s05-pending-policy.ts` (justifié: politique S05 testable hors orchestrateur)
- Tests unit/intégration allowlist
- as-built + delivery-history

Non modifiés (vérifié): schema, migrations, `document/service.ts`, `preparation/service.ts`, UI page, routes API, SEF/décisions/roadmap, config RECETTE.

## F. Invariants

INV-01…10 conservés: pas d'écriture par seule parole Nora; contenu non trim-générique; UNKNOWN ≠ autorisation; fencing/CAS au point d'effet; ACK distinct de COMPLETE; sas `projectId=null` owner inchangé; pas de nouveau statut DB.

## G. P1 — Intégrité documentaire

### Changement

`confrontProposalWithFence` exporté depuis `document-command.ts` + `isStructuralFenceSeparatorOnly`:
- égalité titre/corps/sha → accept
- sinon: uniquement canonique sans LF + extrait = canonique+LF + round-trip serialize/extract
- toute autre diff → `PROPOSAL_SOURCE_CONFLICT`

### Tests

- UNIT `confront-proposal-fence.test.ts` (QA-02..06 partiels)
- PG `SRC-02b` structural LF → AVAILABLE; `SRC-04` divergence → NOT_EXECUTED

### Extrait

```ts
/** Serialize exact Markdown into a contractual fence — metadata + byte-stable body. */
export function serializeProposalFence(proposal: DocumentProposalExact): string {
  const canonical = canonicalizeDocumentProposal({
    title: proposal.title,
    contentMarkdown: proposal.contentMarkdown,
  });
  if (!canonical.ok) {
    throw new Error(`PROPOSAL_NOT_CANONICAL:${canonical.reason}`);
  }
  const { title, contentMarkdown, contentSha256: digest } = canonical.proposal;
  const tickLen = fenceOpenerLength(contentMarkdown);
  const ticks = "`".repeat(tickLen);
  const info = `sfia-document title-b64=${encodeTitleB64(title)} chars=${contentMarkdown.length} pair-sha256=${digest}`;
  const needsStructuralNl = !contentMarkdown.endsWith("\n");
  const body = needsStructuralNl ? `${contentMarkdown}\n` : contentMarkdown;
  return `${ticks}${info}\n${body}${ticks}\n`;
}

/**
 * P1 — structural fence separator only (serializer contract).
 * True iff extracted body equals canonical body + exactly one trailing LF,
 * titles match, canonical does not already end with LF, and
 * serialize→extract round-trip restores the canonical title/body/digest.
 * Never trims or rewrites content; never accepts any other difference.
 */
export function isStructuralFenceSeparatorOnly(input: {
  authority: DocumentProposalExact;
  extractedTitle: string;
  extractedContent: string;
}): boolean {
  const { authority, extractedTitle, extractedContent } = input;
  if (extractedTitle !== authority.title) return false;
  if (authority.contentMarkdown.endsWith("\n")) return false;
  if (extractedContent !== `${authority.contentMarkdown}\n`) return false;
  if (contentSha256(extractedTitle, extractedContent) === authority.contentSha256) {
    // Exact digest match means no separator-only case (bodies already equal).
    return false;
  }
  try {
    const fence = serializeProposalFence(authority);
    const again = extractContractualDocumentProposal(fence);
    if (!again.ok) return false;
    return (
      again.title === authority.title &&
      again.content === authority.contentMarkdown &&
      contentSha256(again.title, again.content) === authority.contentSha256
    );
  } catch {
    return false;
  }
}

/**
 * P1 — confront authoritative proposal with a concurrent contractual fence.
 * Fence MISSING → materialize; INVALID → refuse; exact match → accept;
 * sole structural LF separator (serializer contract) → accept for canonical rewrite.
 */
export function confrontProposalWithFence(
  authority: DocumentProposalExact,
  extracted: {
    ok: false;
    reason: string;
  } | {
    ok: true;
    title: string;
    content: string;
  },
):
  | { ok: true; materialize: boolean }
  | { ok: false; reason: string } {
  if (!extracted.ok) {
    if (extracted.reason === "DOCUMENT_PROPOSAL_MISSING") {
      return { ok: true, materialize: true };
    }
    return { ok: false, reason: extracted.reason };
  }
  if (
    extracted.title === authority.title &&
    extracted.content === authority.contentMarkdown &&
    contentSha256(extracted.title, extracted.content) === authority.contentSha256
  ) {
    return { ok: true, materialize: false };
  }
  if (
    isStructuralFenceSeparatorOnly({
      authority,
      extractedTitle: extracted.title,
      extractedContent: extracted.content,
    })
  ) {
    // Accept: caller keeps canonical authority; later rewrite uses serializeProposalFence.
    return { ok: true, materialize: false };
  }
  return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
}

export function sealedIdentityFromBinding(binding: DocumentCommandBinding): SealedEffectIdentity {
  return {
    commandId: binding.commandId,
    operationId: binding.operationId,
    userMessageId: binding.userMessageId,
    qualifiedIntentId: binding.qualifiedIntentId,
    action: binding.action,
    source: binding.source,
    preparationId: binding.preparationId,
    documentId: binding.documentId,
```

## H. P2 — Continuité S05

### Changement

- `findUnresolvedSiblingTurns`: `createdAt`, `resultJson`, `ORDER BY createdAt, id`
- `evaluateS05SiblingPolicy` / `classifySiblingEffectRisk` (labels internes non persistés)
- Missions unresolved: toujours bloquantes
- clientPendingHint: UX only
- Obs: `sibling_risks_summary` scalaire

### Tests

- UNIT `s05-pending-policy.test.ts`
- PG S05-G02 harmless UNKNOWN n'bloque plus; S05-G04 REQUEST_EFFECT UNKNOWN bloque encore; d2-mission-s05 PASS

### Fichier créé (complet)

```ts
/**
 * S05 — pure pending-risk policy (internal decision labels only; not DB statuses).
 * Fail closed when durable evidence is insufficient to prove safety.
 */
import {
  effectIntents,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

export type S05RiskClass =
  | "ACTIVE_EFFECT_RISK"
  | "UNKNOWN_EFFECT_RISK"
  | "PROVEN_NO_EFFECT"
  | "PROVEN_INDEPENDENT"
  | "SAME_INTENT";

export type S05SiblingEvidence = {
  id: string;
  clientTurnKey: string;
  status: "RUNNING" | "ACCEPTED" | "UNKNOWN" | string;
  createdAtMs: number;
  /** Durable qualification status from resultJson, when parseable. */
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  /**
   * Owner-side probe: true when any correlated owner mutation row was found
   * for this turn's window/identity. false = probed empty. null = not probed.
   */
  ownerEffectsFound: boolean | null;
  /** Optional durable correlation / intent keys for SAME_INTENT. */
  correlationKeys?: string[];
};

export type S05CurrentIntentContext = {
  /** Correlation / intent keys of the current turn effect request. */
  correlationKeys: string[];
  /** When true, current turn requests an owner mutation (D2/D4/D5/D6/D7). */
  requestsOwnerEffect: boolean;
};

function hasActionableEffectIntents(q: NoraTurnQualification | null): boolean {
  if (!q) return false;
  return effectIntents(q).length > 0;
}

/**
 * Classify one unresolved sibling for S05.
 * Never uses age alone. Never treats documentSave=null alone as proof.
 */
export function classifySiblingEffectRisk(
  sibling: S05SiblingEvidence,
  current: S05CurrentIntentContext,
): S05RiskClass {
  const sameIntent =
    current.correlationKeys.length > 0 &&
    (sibling.correlationKeys ?? []).some((k) => current.correlationKeys.includes(k));
  if (sameIntent) return "SAME_INTENT";

  if (sibling.status === "RUNNING" || sibling.status === "ACCEPTED") {
    return "ACTIVE_EFFECT_RISK";
  }

  if (sibling.status !== "UNKNOWN") {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe found a mutation → not safe to ignore.
  if (sibling.ownerEffectsFound === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Explicit attempted pilotage / HD without terminal certainty.
  if (sibling.pilotageEffectAttempted === true || sibling.humanDecisionCreated === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Document save reached a real owner outcome (including CONFLICT/AVAILABLE/UNKNOWN).
  if (
    sibling.documentSaveStatus != null &&
    sibling.documentSaveStatus !== "NOT_EXECUTED"
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Insufficient durable qualification → fail closed.
  if (sibling.qualificationStatus == null || sibling.qualification == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe required for PROVEN_NO_EFFECT (null = not probed).
  if (sibling.ownerEffectsFound == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // QUALIFIED with actionable REQUEST_EFFECT but no owner row yet → uncertain.
  if (
    sibling.qualificationStatus === "QUALIFIED" &&
    hasActionableEffectIntents(sibling.qualification)
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // UNAVAILABLE / NEEDS_CLARIFICATION / QUALIFIED-without-effect-intents:
  // effectIntents() is empty unless QUALIFIED+REQUEST_EFFECT; owner probe empty.
  if (
    sibling.qualificationStatus === "UNAVAILABLE" ||
    sibling.qualificationStatus === "NEEDS_CLARIFICATION" ||
    (sibling.qualificationStatus === "QUALIFIED" &&
      !hasActionableEffectIntents(sibling.qualification))
  ) {
    if (sibling.ownerEffectsFound === false) {
      // No actionable owner path and no owner rows → proven without effect.
      // Relative to a disjoint current intention, also independent.
      return current.requestsOwnerEffect ? "PROVEN_NO_EFFECT" : "PROVEN_INDEPENDENT";
    }
  }

  return "UNKNOWN_EFFECT_RISK";
}

export function isBlockingS05Risk(risk: S05RiskClass): boolean {
  return (
    risk === "ACTIVE_EFFECT_RISK" ||
    risk === "UNKNOWN_EFFECT_RISK" ||
    risk === "SAME_INTENT"
  );
}

/** Deterministic order: createdAt ascending, then id ascending. */
export function sortS05SiblingsDeterministic<T extends { createdAtMs: number; id: string }>(
  siblings: T[],
): T[] {
  return [...siblings].sort((a, b) => {
    if (a.createdAtMs !== b.createdAtMs) return a.createdAtMs - b.createdAtMs;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });
}

export type S05PolicyDecision = {
  allowOwnerEffects: boolean;
  pendingEffectBlocked: boolean;
  pendingBlockReason: string | undefined;
  classifications: Array<{
    clientTurnKey: string;
    status: string;
    risk: S05RiskClass;
  }>;
  /** Prefer UX hint only for reason string when that sibling actually blocks. */
  primaryBlockingKey: string | null;
};

/**
 * Evaluate all siblings. Missions are handled by the caller (still fail-closed).
 */
export function evaluateS05SiblingPolicy(input: {
  siblings: S05SiblingEvidence[];
  current: S05CurrentIntentContext;
  clientPendingHint: string | null;
  /** When false (DIALOGUE_INDEPENDANT), never block owner effects via S05 siblings. */
  applyPendingGate: boolean;
}): S05PolicyDecision {
  const ordered = sortS05SiblingsDeterministic(input.siblings);
  const classifications = ordered.map((s) => ({
    clientTurnKey: s.clientTurnKey,
    status: s.status,
    risk: classifySiblingEffectRisk(s, input.current),
  }));

  if (!input.applyPendingGate) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const blockers = classifications.filter((c) => isBlockingS05Risk(c.risk));
  if (blockers.length === 0) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const hint = input.clientPendingHint?.trim() || null;
  const hinted = hint ? blockers.find((b) => b.clientTurnKey === hint) : null;
  const primary = hinted ?? blockers[0]!;
  const reasonPrefix =
    primary.risk === "SAME_INTENT"
      ? "S05_PENDING_BLOCKS_SAME_INTENT"
      : primary.risk === "ACTIVE_EFFECT_RISK"
        ? "S05_PENDING_BLOCKS_EFFECT"
        : "S05_PENDING_BLOCKS_AMBIGUOUS";

  return {
    allowOwnerEffects: false,
    pendingEffectBlocked: true,
    pendingBlockReason: `${reasonPrefix}:${primary.clientTurnKey}`,
    classifications,
    primaryBlockingKey: primary.clientTurnKey,
  };
}

/** Parse durable qualification fields from a turn resultJson string. */
export function parseSiblingResultEvidence(resultJson: string | null): {
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  correlationKeys: string[];
} {
  if (!resultJson) {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      correlationKeys: [],
    };
  }
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    const sq = parsed.semanticQualification as NoraTurnQualification | undefined;
    const sqStatus =
      (typeof parsed.semanticQualificationStatus === "string"
        ? parsed.semanticQualificationStatus
        : null) ??
      (sq && typeof sq.status === "string" ? sq.status : null);
    const docSave = parsed.documentSave as { status?: string } | null | undefined;
    const pilotage = parsed.pilotageEffect as { attempted?: boolean } | null | undefined;
    const correlationKeys: string[] = [];
    const bindings = parsed.documentCommandBindings;
    if (Array.isArray(bindings)) {
      for (const b of bindings) {
        if (b && typeof b === "object" && typeof (b as { correlationKey?: string }).correlationKey === "string") {
          correlationKeys.push((b as { correlationKey: string }).correlationKey);
        }
      }
    }
    return {
      qualificationStatus: sqStatus,
      qualification: sq && typeof sq.status === "string" ? sq : null,
      documentSaveStatus:
        docSave && typeof docSave.status === "string" ? docSave.status : docSave === null ? null : null,
      pilotageEffectAttempted:
        pilotage && typeof pilotage.attempted === "boolean" ? pilotage.attempted : null,
      humanDecisionCreated:
        typeof parsed.humanDecisionCreated === "boolean" ? parsed.humanDecisionCreated : null,
      correlationKeys,
    };
  } catch {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      correlationKeys: [],
    };
  }
}

```

## I. P3 — Sas, ACK, continuité

### Nora / sas

Instructions: outils RO ≠ impossibilité D4; Studio propriétaire; D4 admissible sans projet; UNAVAILABLE seulement si capacité réellement indisponible.

Extrait:

```
"- Qualifie l'intention; clarifie seulement si cela change le résultat ou le risque.",
  "- Pour une question simple: réponse courte, sans surinvestigation.",
  "- Pour une comparaison: structure critique (faits / hypothèses / options / limites).",
  "- Cite la provenance quand un point déterminant s'appuie sur un acquis ou document D4 réellement lu (pas la guidance spécialisée interne).",
  "- Production documentaire: seulement si le Pilote le demande explicitement et positivement.",
  "- Une négation (« ne crée pas », « ne révise pas »), une question informative ou une hypothèse n'autorisent aucune écriture D4.",
  "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
  "- Outils Nora: lecture seule (connaissance, historique, Git lecture). L'absence d'outil d'écriture Nora ne signifie PAS que Studio ne peut pas réaliser D4.",
  "- Studio est le propriétaire de l'admission et de la mutation documentaire. Si le Pilote autorise explicitement un CREATE/REVISE D4, fournis une qualification QUALIFIED avec intent REQUEST_EFFECT et documentProposal (ou documentSource), même dans une préparation sans projet.",
  "- Sas / préparation sans projet: la création D4 rattachée à la préparation peut être admissible ; la création de projet D2 n'est PAS un préalable universel. Ne choisis pas UNAVAILABLE uniquement parce que projectId est absent.",
  "- UNAVAILABLE uniquement lorsqu'une capacité est réellement indisponible ou que la qualification ne peut pas être établie — pas comme substitut à « je n'ai pas d'outil d'écriture ».",
  "- Contrat proposition D4: place UNIQUEMENT le Markdown documentaire destiné à D4 dans UNE fence dont le tag exact est `sfia-document` (```sfia-document … ``` ou ~~~sfia-document). Les fences `markdown`/`md`/`mdx` illustratives ne sont PAS des propositions D4. Hors fence: explications, compte rendu post-exécution, réserves. Une seule fence `sfia-document` par réponse; elle doit être correctement fermée (un bloc de code interne plus court ne la termine pas).",
  "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
  "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils; n'invente jamais d'URL /blob/{blobSha}/… ; utilise permalink seulement si commitShaVerified=true.",
  "- Lecture Git: AVAILABLE = contenu; FILE_ABSENT = chemin absent à une ref tip vérifiée (pas une autorisation d'écriture); DENIED/REF_UNRESOLVED/AMBIGUOUS/UNAVAILABLE = aucune conclusion d'absence ni de CREATE.",
  "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
].join("\n");

function isDevLane(): boolean {
  return process.env.STUDIO_LANE === "DEV";
}
```

### ACK

Pré-admission / pré-effet → `documentSave.status=NOT_EXECUTED` (plus « Studio a exécuté »).
S05 skip → `NOT_EXECUTED` + `pendingBlockReason`.

### Fence après ACK

`extractContractualFenceSlices` + composition narrative séparée — QA-06 UNIT PASS; PG SRC-02b message final extractable.

## J. P4 — QA-01…20

| ID | Status | Env | Preuve |
| --- | --- | --- | --- |
| QA-01 | PASS (déterministe) | PG fixture | prior-proposal CREATE AVAILABLE |
| QA-02 | PASS | UNIT+PG | structural LF |
| QA-03 | PASS | UNIT+PG | divergence refusée |
| QA-04 | PASS | UNIT | meta/missing |
| QA-05 | PASS | UNIT | Unicode |
| QA-06 | PASS | UNIT+PG | fence after ACK |
| QA-07 | PASS | UNIT+PG | multi UNKNOWN policy |
| QA-08 | PASS | UNIT+PG | dangerous UNKNOWN blocks |
| QA-09 | COVERAGE PARTIAL | PG existants | idempotence suites inchangées |
| QA-10 | PASS | PG d2-mission-s05 | missions bloquent |
| QA-11 | PASS | PG prior-proposal | PRIOR_ASSISTANT |
| QA-12 | COVERAGE EXISTING | PG document | REVISE suites |
| QA-13 | IMPLEMENTED / LIVE NOT RUN | code+guidance | sas guidance; owner null project unchanged |
| QA-14 | PASS code | D2 act Pilote | pas de create implicite |
| QA-15 | COVERAGE EXISTING | owner checks | |
| QA-16 | PASS | UNIT+PG | NOT_EXECUTED wording |
| QA-17 | COVERAGE EXISTING | reconstitution | |
| QA-18 | PASS code | D7 gated | |
| QA-19 | PASS | UNIT+PG | all siblings + order |
| QA-20 | PASS | UNIT | fail closed sans preuve |

Niveaux: **IMPLEMENTED** + **COVERAGE VERIFIED** (UNIT/PG/BUILD) ; **DETERMINISTIC BEHAVIOR PROVEN** sur QA-02/03/06/07/08/16 ; **LIVE BEHAVIOR PROVEN** = NON ; **USER RECETTE NOT RUN**.

## K. P5 — Documentation et packaging

- as-built section DELIV 2026-11-14 ajoutée
- delivery-history `DELIV-2026-11-14-ML4C-D4-S05-CONTINUITY`
- Commit local unique effectué
- Pas de push produit

## L. Fichiers créés — contenu

### `s05-pending-policy.ts`

(voir section H — fichier complet inclus)

### `tests/unit/confront-proposal-fence.test.ts` / `s05-pending-policy.test.ts`

Créés; 22 cas UNIT dédiés.

## M. Fichiers modifiés — sections

### service.ts S05 (extrait)

```ts
const pilotageBinding = extractPilotageBinding(qualification);
  const knowledgeHints = extractKnowledgeSelectionHints(qualification);
  if (
    knowledgeHints.acquisIds.length ||
    knowledgeHints.openPointIds.length ||
    knowledgeHints.subjectIds.length
  ) {
    knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
      preferredAcquisIds: knowledgeHints.acquisIds,
      preferredOpenPointIds: knowledgeHints.openPointIds,
      preferredSubjectIds: knowledgeHints.subjectIds,
    });
  }

  // S05 — durable unresolved work (turns + missions). Client hint is UX only.
  const siblings = await findUnresolvedSiblingTurns({
    conversationId: ctx.conversation.id,
    ownerPilotId: pilotId,
    excludeClientTurnKey: clientTurnKey,
  });
  const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
  const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
  const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
    ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
      m.status,
    ),
  );
  // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
  const blockingMission =
    unresolvedMissions.find((m) =>
      m.status === "ACTIVE"
        ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
        : true,
    ) ?? null;

  const applyPendingGate =
    nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
  const currentCorrelationKeys: string[] = [];
  const siblingEvidence: S05SiblingEvidence[] = siblings.map((s) => {
    const parsed = parseSiblingResultEvidence(s.resultJson);
    return {
      id: s.id,
      clientTurnKey: s.clientTurnKey,
      status: s.status,
      createdAtMs: s.createdAt.getTime(),
      qualificationStatus: parsed.qualificationStatus,
      qualification: parsed.qualification,
      documentSaveStatus: parsed.documentSaveStatus,
      pilotageEffectAttempted: parsed.pilotageEffectAttempted,
      humanDecisionCreated: parsed.humanDecisionCreated,
      // Durable resultJson + qualification are the owner-side evidence available without
      // mutating RECETTE. Empty documentSave / pilotage / HD + UNAVAILABLE ⇒ probed false.
      ownerEffectsFound:
        parsed.qualificationStatus == null
          ? null
          : parsed.documentSaveStatus != null &&
              parsed.documentSaveStatus !== "NOT_EXECUTED"
            ? true
            : parsed.pilotageEffectAttempted === true ||
                parsed.humanDecisionCreated === true
              ? true
              : false,
      correlationKeys: parsed.correlationKeys,
    };
  });
  const siblingPolicy = evaluateS05SiblingPolicy({
    siblings: siblingEvidence,
    current: {
      correlationKeys: currentCorrelationKeys,
      requestsOwnerEffect: applyPendingGate,
    },
    clientPendingHint,
    applyPendingGate,
  });

  let pendingEffectBlocked = false;
  let pendingBlockReason: string | undefined;
  let allowOwnerEffects = true;
  const blockingSiblingKey = siblingPolicy.primaryBlockingKey;
  const blockingSibling =
    siblings.find((s) => s.clientTurnKey === blockingSiblingKey) ?? null;

  if (applyPendingGate) {
    if (siblingPolicy.pendingEffectBlocked) {
      allowOwnerEffects = false;
      pendingEffectBlocked = true;
      pendingBlockReason = siblingPolicy.pendingBlockReason;
    }
    if (blockingMission) {
      allowOwnerEffects = false;
      pendingEffectBlocked = true;
      if (!pendingBlockReason) {
        pendingBlockReason =
          nextTurnKind === "INTENTION_EFFET"
            ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission.clientIntentKey ?? "mission"}`
            : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission.clientIntentKey ?? "mission"}`;
      }
    }
  }

  if (pendingEffectBlocked) {
    emitObs({
      event_name: "d3.turn.s05_pending_block",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "PARTIAL",
      meta: {
        pending_client_turn_key: blockingSibling?.clientTurnKey ?? null,
        pending_status: blockingSibling?.status ?? null,
        pending_block_reason: pendingBlockReason ?? null,
        // Primitive summary only — emitObs allowlists scalar meta (QA-19).
        sibling_risks_summary: siblingPolicy.classifications
          .map((c) => `${c.clientTurnKey}:${c.status}:${c.risk}`)
          .join("|")
          .slice(0, 500),
        sibling_blocker_count: siblingPolicy.classifications.filter((c) =>
          ["ACTIVE_EFFECT_RISK", "UNKNOWN_EFFECT_RISK", "SAME_INTENT"].includes(c.risk),
        ).length,
        mission_status: blockingMission?.status ?? null,
        mission_key: blockingMission?.clientIntentKey ?? null,
        next_turn_kind: nextTurnKind,
        client_hint_ignored_as_authority: true,
      },
    });
  }
  // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.

  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
  if (
    allowOwnerEffects &&
    pilotageBinding &&
    !("ambiguous" in pilotageBinding) &&
    ctx.project?.id
  ) {
    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
    if (stillOwned) {
      const preQualified = {
        clarity: "CLEAR" as const,
        operation: pilotageBinding.operation,
        objective: pilotageBinding.objective ?? content,
        statement: pilotageBinding.statement,
        objectRef: pilotageBinding.objectRef,
        decisionId: pilotageBinding.decisionId,
        methodRef: pilotageBinding.methodRef,
        methodVersion: pilotageBinding.methodVersion,
        restrictionKindHint: pilotageBinding.restrictionKindHint,
        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
        semanticIntentId: pilotageBinding.intentId,
```

### document-act ACK/compose (extrait)

```ts
/**
 * Application ACK — sole transactional verdict for the turn.
 */
export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): string {
  if (!effect) return "";

  // Pre-effect: plausible documentary intent but no D4 transaction attempted.
  // Never fabricate a FAILED documentSave — this is NOT_EXECUTED, not a server refuse.
  if (effect.status === "NOT_EXECUTED" || effect.act === "NONE") {
    const lines = [
      "### Résultat applicatif (pré-effet)",
      "",
      "- Acte documentaire exécuté: aucun",
      "- Statut: NOT_EXECUTED",
      "- Transaction D4: non tentée",
    ];
    if (effect.reason) lines.push(`- raison: ${effect.reason}`);
    lines.push(
      "",
      "Aucun acte documentaire exécuté : la demande n'a pas été qualifiée pour une écriture.",
      "La réponse Nora ci-dessus n'est pas un verdict D4.",
    );
    return lines.join("\n");
  }

  const lines = [
    "### Résultat applicatif D4 (source de vérité)",
    "",
    `- Acte demandé: ${effect.act}`,
    `- Statut observé: ${effect.status ?? "UNKNOWN"}`,
  ];
  if (effect.documentId) lines.push(`- documentId: \`${effect.documentId}\``);
  if (effect.revisionNumber != null) lines.push(`- révision: v${effect.revisionNumber}`);
  if (effect.revisionId) lines.push(`- revisionId: \`${effect.revisionId}\``);
  if (effect.baseRevisionId) lines.push(`- baseRevisionId: \`${effect.baseRevisionId}\``);
  if (effect.idempotentReplay) lines.push("- rejeu idempotent: oui");
  if (effect.reason) lines.push(`- raison: ${effect.reason}`);
  if (effect.status === "AVAILABLE") {
    lines.push(
      "",
      "Ce statut est confirmé par la persistance Studio. Il est le seul verdict transactionnel de ce tour.",
    );
  } else if (effect.status === "CONFLICT") {
    lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
  } else if (effect.status === "FAILED") {
    lines.push(
      "",
      "Studio a exécuté l'acte documentaire et a refusé l'écriture. Le motif ci-dessus est le verdict transactionnel.",
      "Les outils Nora restent en lecture seule ; cela n'explique pas un refus applicatif déjà observé.",
    );
  } else if (effect.status && effect.status !== "AVAILABLE") {
    lines.push("", "Aucun succès d'écriture D4 ne doit être affirmé pour ce tour.");
  }
  return lines.join("\n");
}

/**
 * Exact byte slices of closed contractual fences from the original assistant text.
 * Used so ACK composition never splits fence interiors on blank lines (QA-06).
 */
export function extractContractualFenceSlices(assistantText: string): string[] {
  const lines = splitMarkdownLines(assistantText);
  const slices: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const open = parseFenceMarkerLine(lines[i]!.text);
    if (!open) {
      i += 1;
      continue;
    }
    if (!isContractualProposalOpen(open)) {
      i = skipIllustrativeFence(lines, i, open);
      continue;
    }
    const bodyStartLine = i + 1;
    const nest: Array<{ char: "`" | "~"; length: number }> = [];
    let closedAt: number | null = null;
    for (let j = bodyStartLine; j < lines.length; j++) {
      const cand = parseFenceMarkerLine(lines[j]!.text);
      if (!cand) continue;
      if (nest.length === 0 && isFenceClose(cand, open)) {
        closedAt = j;
        break;
      }
      if (nest.length > 0) {
        const top = nest[nest.length - 1]!;
        if (cand.char === top.char && cand.length >= top.length && cand.info.trim() === "") {
          nest.pop();
          continue;
        }
      }
      const opensInner =
        cand.info.trim() !== "" ||
        cand.char !== open.char ||
        cand.length < open.length;
      if (opensInner) {
        nest.push({ char: cand.char, length: cand.length });
      }
    }
    if (closedAt == null) break;
    const start = lines[i]!.start;
    const end =
      closedAt + 1 < lines.length ? lines[closedAt + 1]!.start : assistantText.length;
    slices.push(assistantText.slice(start, end));
    i = closedAt + 1;
  }
  return slices;
}

/**
 * Structured final message: prepared content (sanitized) + sole applicative verdict.
 * Guarantees no concurrent « aucune révision » + AVAILABLE.
 * Preserves contractual fence integrity across ACK composition.
 */
export function composeDocumentTurnMessage(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  const fenceSlices = extractContractualFenceSlices(assistantContent);
  const narrativeOnly = stripContractualDocumentFences(assistantContent);
  const sanitizedNarrative = reconcileNarrationWithDocumentEffect(narrativeOnly, effect);
  const ack = formatDocumentEffectAck(effect);
  // Strip transactional claims on narrative only — never inside fence slices.
  let body = stripTransactionalClaimUnits(sanitizedNarrative);
  if (effect.status !== "AVAILABLE") {
    const parts = body.split(/\n{2,}/);
    body = parts
      .filter((p) => !NORA_TOOL_BOUNDARY_CLAIM_RE.test(p))
      .join("\n\n")
      .trim();
  }
  const withFences = [body, ...fenceSlices.map((s) => s.replace(/\s+$/u, ""))].filter(
    (s) => s && s.length > 0,
  ).join("\n\n");
  // Trailing whitespace only at the assembly boundary before ACK — fence bodies already closed.
  return `${withFences.replace(/\s+$/u, "")}\n\n---\n${ack}\n`;
}

export function appendDocumentEffectAck(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
```

### Name-status commit

```
M	projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
A	projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-s05-idempotence-knowledge.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
A	projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
M	projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
```

## N. Autorité, provenance, idempotence

- USER authentifié + admission + seal + turnFence inchangés
- `savePreparationDocument` non modifié
- Corrélation / CAS / baseRevisionId préservés
- Pas de second propriétaire

## O. Résultats UNIT/PG/BROWSER/BUILD/LIVE

| Suite | Résultat |
| --- | --- |
| `npm run test:unit` | PASS (48 files / 341 tests) |
| PG focused (prior-proposal, s05-idempotence, d2-mission-s05, document-command) | PASS 34 tests |
| `npm run build` | PASS |
| `npm run test:e2e` | **NOT RUN** — DEV http://127.0.0.1:3100 absent |
| LIVE Nora | **NOT RUN** |
| Lint | non exigé comme gate bloquant; build Next OK |

## P. Réserves et non exécutés

- BROWSER E2E / LIVE Nora / RECETTE rejeu
- UNKNOWN RECETTE historiques non touchés
- Conception non ADOPTED
- PR #676 non mise à jour

## Q. Diff final

```
...n-semantique-mobilisation-gouvernee-20261112.md |  39 +++
 .../construction/delivery-history.md               |  19 ++
 .../web/src/domains/conversation/document-act.ts   |  71 +++++-
 .../src/domains/conversation/document-command.ts   |  78 ++++++
 .../web/src/domains/conversation/nora-adapter.ts   |   5 +
 .../src/domains/conversation/s05-pending-policy.ts | 271 +++++++++++++++++++++
 .../web/src/domains/conversation/service.ts        | 148 +++++++----
 .../web/src/domains/conversation/turn-command.ts   |  12 +-
 .../integration/ml4c-prior-proposal.pg.test.ts     |  62 ++++-
 .../ml4c-s05-idempotence-knowledge.pg.test.ts      |  79 +++++-
 .../web/tests/unit/confront-proposal-fence.test.ts | 184 ++++++++++++++
 .../web/tests/unit/s05-pending-policy.test.ts      | 215 ++++++++++++++++
 .../web/tests/unit/semantic-qualification.test.ts  |   7 +-
 13 files changed, 1115 insertions(+), 75 deletions(-)
```

HEAD `3d0eab6f01cb8013990193cea93e8bfa5248831d` tree `cfadcb389b459e3f67fccfd117805b96a32a2033` parent `d936da81ebf7d17eb78cc11da0538df000281a4a`

## R. Statut commit local

- **COMMITTED LOCAL ONLY**
- Message: `fix(next): preserve D4 integrity and reconcile safe S05 pending`
- SHA: `3d0eab6f01cb8013990193cea93e8bfa5248831d`
- **NOT PUSHED** (branche produit)

## S. Verdict

**FIX IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

Niveaux prouvés: DOCUMENTED · IMPLEMENTED · COVERAGE VERIFIED · DETERMINISTIC BEHAVIOR PROVEN (périmètre UNIT/PG)

Non prouvés: LIVE BEHAVIOR PROVEN · USER RECETTE · ML4C ACCEPTED · GATE C · STABLE · ADOPTED

## T. Suite et gates Morris

1. ChatGPT relit handoff distant.
2. Morris décide: rejeu DEV LIVE / BROWSER, puis mandat RECETTE distinct sur nouveau SHA `3d0eab6f01cb8013990193cea93e8bfa5248831d`.
3. Aucune promotion implicite.

---
Fin Review Pack FULL — ML4C D4/S05 P1–P5.
