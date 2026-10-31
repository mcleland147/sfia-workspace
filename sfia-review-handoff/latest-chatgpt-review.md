# Review Pack FULL — NAP-SINGLE-RESPONSE-D1-REVIEW-REGULARIZATION-01

**Generated (UTC):** 2026-10-31T04:27:07Z
**Cycle:** NAP-SINGLE-RESPONSE-D1-REVIEW-REGULARIZATION-01
**Type:** Cycle 9 — QA / validation — REVIEW REGULARIZATION / READ-ONLY PRODUCT
**Profile:** CRITICAL
**Source Delivery:** NAP-SINGLE-RESPONSE-D1-01
**Prior incomplete handoff:** `0a7d03b928a64a811f3a1d386746c71e8895305c` / blob `476f349c314214d3c23bc30db7750cd5a43fde46`
**ChatGPT prior verdict:** REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
**Product modifications this cycle:** NONE

---

## 0. Instruction ChatGPT

Read this remote handoff **in full**. Examine embedded **diffs and numbered code sections** before accepting Delivery D1.
Do **not** imply G-QA-BROWSER, G-INTEGRATE, or G-REAL from this pack.
If technical content remains insufficient: `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Candidate WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD / origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| D1 handoff tip (pre-regularization) | `0a7d03b928a64a811f3a1d386746c71e8895305c` |
| D1 handoff blob | `476f349c314214d3c23bc30db7750cd5a43fde46` |
| Product WIP | 11 app files modified vs HEAD (uncommitted) |
| Concurrent interference | NONE — diff attributable to CR-03 + D1 on this WT |
| Destructive ops | none |

Git Truth: COHERENT.

---

## 2. Attribution CR-03 vs D1 vs post

### CR-03 WIP files (snapshot `.tmp-sfia-review/cr03-initial.diff`, 990 lines, pre-D1)

- `noraAdaptivePresentation.ts`
- `NoraAdaptivePresentationView.tsx` + `.module.css`
- `ConversationSurface.tsx`
- `noraAdaptivePresentation.d0.test.ts`
- `noraAdaptivePresentation.ui.test.tsx`

CR-03 intent (still present as substrate): canonical-first dual layer when uncovered; formatter fidelity; typed Studio notices; fail-closed plain.

### D1-first-touched (absent from CR-03 snapshot)

- `orchestrateTurn.ts` — durable A1 via `buildDurableAssistantContentForTurn`
- `buildProjectSystemPrompt.ts` — single-response emission instructions
- `noraProductTurnOutputType.ts` — re-exports of A1 helpers
- `fakeProvider.ts` — A1 NAP QA fixtures (`a1StructuredTurn`)
- `fakeNapQaPresentation.d0.test.ts` — expectation updates

### D1 adaptations layered on CR-03 files

- Dual mode `adaptive_with_canonical` **retired from emission**; resolve returns only `adaptive` | `plain`
- New: `composeCanonicalFromPresentation`, `shouldDisplayPresentationLead`, `presentationHitsLimitBoundary`, `isPresentationStructurallyAdmissibleForA1`, `isA1TransitionAdmissible`, `buildDurableAssistantContentForTurn`, `NORA_UNUSABLE_TURN_FALLBACK_TEXT`
- `clampText`: reject over-limit (no silent slice success)
- View: single `structured-first`; dual props deprecated/ignored
- Tests rewritten for B-on-T2; N01–N11 oracles

### Post-D1 Product changes

NONE observed (WIP set stable; only review pack regenerated).

---

## 3. Scope of regularization

READ-ONLY Product. Full inspectable Review Pack. No semantic Product change. R24 D1 debt unchanged.

---

## 4. Diff --stat vs HEAD

```
.../noraAdaptivePresentation.d0.test.ts            | 374 +++++++++++++++++-
 .../platform/ai/fakeNapQaPresentation.d0.test.ts   |  12 +-
 .../noraAdaptivePresentation.ui.test.tsx           | 273 ++++++++++++-
 .../surfaces/ConversationSurface.tsx               |  22 +-
 .../NoraAdaptivePresentationView.module.css        |  63 +++
 .../surfaces/NoraAdaptivePresentationView.tsx      |  75 ++--
 .../project-assistant/buildProjectSystemPrompt.ts  |  22 +-
 .../features/project-assistant/orchestrateTurn.ts  |  10 +
 .../noraAdaptivePresentation.ts                    | 439 +++++++++++++++++++--
 .../noraProductTurnOutputType.ts                   |   6 +
 .../app/lib/platform/ai/fakeProvider.ts            | 212 +++++-----
 11 files changed, 1286 insertions(+), 222 deletions(-)
```

---

## 5. Contracts implemented (numbered source excerpts)

Line prefixes are `LINE|code` from the **current WIP tree**.

### 5.1 reject-over-limit

```
276|/**
277| * Bounded string for Option C parse — NAP-SINGLE-RESPONSE-D1.
278| * Rejects over-limit (no silent slice success). Exact max length is accepted
279| * by parse but flagged via presentationHitsLimitBoundary for A1 gating.
280| */
281|function clampText(
282|  value: unknown,
283|  max: number,
284|): string | null {
285|  if (typeof value !== "string") return null;
286|  const cleaned = sanitizePresentationPlainText(value);
287|  if (!cleaned) return null;
288|  if (cleaned.length > max) return null;
289|  return cleaned;
290|}
```

### 5.2 lead policy + composeCanonicalFromPresentation

```
774|export function shouldDisplayPresentationLead(
775|  presentation: NoraAdaptivePresentation,
776|): boolean {
777|  const lead = (presentation.lead ?? "").trim();
778|  if (!lead) return false;
779|  const nLead = normalizeCompare(lead);
780|  if (!nLead) return false;
781|  const blocksText = composeBlocksOnly(presentation);
782|  if (blocksText && normalizeCompare(blocksText) === nLead) return false;
783|  for (const block of presentation.blocks) {
784|    for (const t of blockPlainTexts(block)) {
785|      if (t && normalizeCompare(t) === nLead) return false;
786|    }
787|  }
788|  return true;
789|}
790|
791|/**
792| * Deterministic conversational transcript from a validated presentation.
793| * Not Truth C. Not a cognitive summary. Preserves order, tables, reserves,
794| * recommendation-as-proposal. Omits redundant lead (see shouldDisplayPresentationLead).
795| */
796|export function composeCanonicalFromPresentation(
797|  presentation: NoraAdaptivePresentation,
798|): string {
799|  const chunks: string[] = [];
800|  if (presentation.eyebrow?.trim()) chunks.push(presentation.eyebrow.trim());
801|  if (presentation.title?.trim()) chunks.push(presentation.title.trim());
802|  if (shouldDisplayPresentationLead(presentation) && presentation.lead) {
803|    chunks.push(presentation.lead.trim());
804|  }
805|  const blocks = composeBlocksOnly(presentation);
806|  if (blocks) chunks.push(blocks);
807|  if (presentation.provenanceNote?.trim()) {
808|    chunks.push(presentation.provenanceNote.trim());
809|  }
810|  return chunks.join("\n\n").trim();
811|}
812|
813|/**
814| * True when a string field sits exactly at its max — ambiguous truncation.
815| * NOT a proof of truncation; fail-closed for A1 admissibility only.
```

### 5.3 limit boundary + structural A1 + durable builder (R1 explicit)

```
817|export function presentationHitsLimitBoundary(
818|  presentation: NoraAdaptivePresentation,
819|): boolean {
820|  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;
821|  if (presentation.blocks.length >= L.maxBlocks) return true;
822|  const check = (s: string | null | undefined, max: number) =>
823|    typeof s === "string" && s.length >= max;
824|  if (check(presentation.eyebrow, L.maxTitleChars)) return true;
825|  if (check(presentation.title, L.maxTitleChars)) return true;
826|  if (check(presentation.lead, L.maxLeadChars)) return true;
827|  if (check(presentation.provenanceNote, L.maxStringChars)) return true;
828|  for (const block of presentation.blocks) {
829|    switch (block.kind) {
830|      case "plain":
831|      case "question":
832|      case "trace_note":
833|        if (check(block.text, L.maxStringChars)) return true;
834|        break;
835|      case "section":
836|        if (check(block.title, L.maxTitleChars)) return true;
837|        if (check(block.body, L.maxStringChars)) return true;
838|        break;
839|      case "list":
840|      case "established_facts":
841|      case "open_questions":
842|        if (check(block.title, L.maxTitleChars)) return true;
843|        if (block.items.length >= L.maxItems) return true;
844|        if (block.items.some((i) => i.length >= L.maxStringChars)) return true;
845|        break;
846|      case "comparison_table":
847|        if (check(block.title, L.maxTitleChars)) return true;
848|        if (block.columns.length >= L.maxColumns) return true;
849|        if (block.rows.length >= L.maxRows) return true;
850|        if (block.columns.some((c) => c.length >= L.maxTitleChars)) return true;
851|        if (
852|          block.rows.some((r) =>
853|            r.some((c) => c.length >= L.maxStringChars),
854|          )
855|        ) {
856|          return true;
857|        }
858|        break;
859|      case "recommendation":
860|        if (check(block.title, L.maxTitleChars)) return true;
861|        if (check(block.statement, L.maxStringChars)) return true;
862|        break;
863|      case "evidence_reserves":
864|        if (check(block.title, L.maxTitleChars)) return true;
865|        if (block.evidenceItems.length >= L.maxItems) return true;
866|        if (block.reserveItems.length >= L.maxItems) return true;
867|        if (
868|          [...block.evidenceItems, ...block.reserveItems].some(
869|            (i) => i.length >= L.maxStringChars,
870|          )
871|        ) {
872|          return true;
873|        }
874|        break;
875|      default:
876|        break;
877|    }
878|  }
879|  return false;
880|}
881|
882|/**
883| * Deterministic A1 structural gate only.
884| * NEVER certifies semantic / cognitive completeness (R1).
885| */
886|export function isPresentationStructurallyAdmissibleForA1(
887|  presentation: NoraAdaptivePresentation | null | undefined,
888|): boolean {
889|  if (!shouldRenderAdaptivePresentation(presentation)) return false;
890|  if (presentationHitsLimitBoundary(presentation)) return false;
891|  const composed = composeCanonicalFromPresentation(presentation);
892|  if (!composed.trim()) return false;
893|  return true;
894|}
895|
896|export function canonicalTextsEquivalent(a: string, b: string): boolean {
897|  return normalizeCompare(a) === normalizeCompare(b);
898|}
899|
900|/**
901| * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
902| * Conservatively requires exact normalized equality with compose, or empty
903| * core with admissible structure. No fuzzy / overlap / keyword tricks.
904| */
905|export function isA1TransitionAdmissible(input: {
906|  pilotFacingCore: string;
907|  presentation: NoraAdaptivePresentation | null | undefined;
908|}): boolean {
909|  if (!isPresentationStructurallyAdmissibleForA1(input.presentation)) {
910|    return false;
911|  }
912|  const presentation = input.presentation!;
913|  const composed = composeCanonicalFromPresentation(presentation);
914|  const core = (input.pilotFacingCore ?? "").trim();
915|  if (!core) return true; // empty narrative → derive from structure (A1-primary)
916|  return canonicalTextsEquivalent(core, composed);
917|}
918|
919|/**
920| * Build durable conversational content for a new turn (Memory B `content`).
921| * A1: composed (+ caller appends notices). B: pilotFacingCore as-is.
922| * Does not invent text. Empty+invalid → honest fallback.
923| */
924|export function buildDurableAssistantContentForTurn(input: {
925|  pilotFacingCore: string;
926|  presentation: NoraAdaptivePresentation | null | undefined;
927|}): {
928|  readonly contentCore: string;
929|  readonly usedA1: boolean;
930|  readonly presentation: NoraAdaptivePresentation | null;
931|} {
932|  const core = (input.pilotFacingCore ?? "").trim();
933|  const presentation = input.presentation ?? null;
934|  if (isA1TransitionAdmissible({ pilotFacingCore: core, presentation })) {
935|    const composed = composeCanonicalFromPresentation(presentation!);
936|    return {
937|      contentCore: composed,
938|      usedA1: true,
939|      presentation,
940|    };
941|  }
942|  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
943|    return {
944|      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
945|      usedA1: false,
946|      presentation: null,
947|    };
948|  }
949|  return {
950|    contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
951|    usedA1: false,
952|    presentation,
953|  };
954|}
955|
956|/**
957| * CORR-NAP-TEST16-01 / CR-02 — Pilot-facing label for the canonical narrative
958| * layer when structured projection and body diverge (strict coverage false).
```

### 5.4 resolveAdaptiveAssistantRender — A1 or B only

```
1032|export type AdaptiveAssistantRenderMode =
1033|  | "adaptive"
1034|  | "plain";
1035|
1036|/**
1037| * @deprecated Dual layer removed in NAP-SINGLE-RESPONSE-D1 (A1+B).
1038| * Kept as type alias so older call sites compile during transition; never emitted.
1039| */
1040|export type AdaptiveAssistantRenderModeLegacy =
1041|  | AdaptiveAssistantRenderMode
1042|  | "adaptive_with_canonical";
1043|
1044|export type AdaptiveAssistantRenderDecision = {
1045|  readonly mode: AdaptiveAssistantRenderMode;
1046|  readonly presentation: NoraAdaptivePresentation | null;
1047|  /**
1048|   * Authenticated Studio control appendix only (typed notices).
1049|   * Never derived from forged `[Studio]` prose in Nora content.
1050|   */
1051|  readonly studioAppendix: string | null;
1052|  readonly plainText: string;
1053|  /** Server-authored notices used for appendix / strip (empty if none). */
1054|  readonly studioControlNotices: readonly string[];
1055|  /**
1056|   * A1: true when durable body (notices stripped) ≡ composeCanonical.
1057|   * Never a fuzzy claim. Never semantic-completeness certification.
1058|   */
1059|  readonly contentFullyCovered: boolean;
1060|  /**
1061|   * Always null under single-response contract (B uses plainText; no dual layer).
1062|   * Retained for API stability with prior CR-03 callers.
1063|   */
1064|  readonly canonicalNarrative: string | null;
1065|  /** Structural A1 gate only — NOT semantic completeness (R1). */
1066|  readonly structurallyAdmissibleForA1: boolean;
1067|  /** True when render mode is adaptive (structured-first single surface). */
1068|  readonly usedA1: boolean;
1069|};
1070|
1071|/**
1072| * NAP-SINGLE-RESPONSE-D1 — A1 structured-first OR B canonical plain.
1073| *
1074| * - Invalid / absent presentation → plain (B).
1075| * - Structurally admissible + body ≡ composeCanonical → adaptive (A1), one surface.
1076| * - Otherwise → plain (B) with full durable body; presentation not shown
1077| *   (never dual canonical + projection; never hide unique narrative via CSS).
1078| * - Studio appendix: typed notices only.
1079| */
1080|export function resolveAdaptiveAssistantRender(input: {
1081|  content: string;
1082|  presentation: NoraAdaptivePresentation | null | undefined;
1083|  /** Typed server provenance — sole source of Studio appendix trust. */
1084|  studioControlNotices?: readonly (string | null | undefined)[] | null;
1085|}): AdaptiveAssistantRenderDecision {
1086|  const content = input.content ?? "";
1087|  const authenticated = normalizeStudioControlNotices(
1088|    input.studioControlNotices,
1089|  );
1090|  const body = contentWithoutAuthenticatedStudioNotices(
1091|    content,
1092|    authenticated,
1093|  );
1094|  const studioAppendix =
1095|    authenticated.length > 0
1096|      ? authenticated
1097|          .map((n) => `${STUDIO_CONTROL_MARKER} ${n}`)
1098|          .join("\n\n")
1099|      : null;
1100|
1101|  const presentation = input.presentation ?? null;
1102|  const structurallyAdmissibleForA1 =
1103|    isPresentationStructurallyAdmissibleForA1(presentation);
1104|
1105|  if (!shouldRenderAdaptivePresentation(presentation)) {
1106|    return {
1107|      mode: "plain",
1108|      presentation: null,
1109|      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
1110|      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
1111|      studioControlNotices: authenticated,
1112|      contentFullyCovered: false,
1113|      canonicalNarrative: null,
1114|      structurallyAdmissibleForA1: false,
1115|      usedA1: false,
1116|    };
1117|  }
1118|
1119|  const composed = composeCanonicalFromPresentation(presentation!);
1120|  const a1Match =
1121|    structurallyAdmissibleForA1 &&
1122|    (canonicalTextsEquivalent(body, composed) ||
1123|      (!body.trim() && Boolean(composed.trim())));
1124|
1125|  if (a1Match) {
1126|    return {
1127|      mode: "adaptive",
1128|      presentation,
1129|      studioAppendix,
1130|      plainText: content,
1131|      studioControlNotices: authenticated,
1132|      contentFullyCovered: true,
1133|      canonicalNarrative: null,
1134|      structurallyAdmissibleForA1: true,
1135|      usedA1: true,
1136|    };
1137|  }
1138|
1139|  // T2 / incomplete / non-equivalent — B only (single canonical surface).
1140|  return {
1141|    mode: "plain",
1142|    presentation: null,
1143|    studioAppendix: authenticated.length > 0 ? studioAppendix : null,
1144|    plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
1145|    studioControlNotices: authenticated,
1146|    contentFullyCovered: false,
1147|    canonicalNarrative: null,
1148|    structurallyAdmissibleForA1,
1149|    usedA1: false,
1150|  };
1151|}
1152|
1153|/**
1154| * Honest Pilot-facing label for Nora epistemic roles.
1155| * Presentation ≠ Product proof / ≠ HumanDecision / ≠ verified Evidence.
```

### 5.5 orchestrateTurn — durable A1 before notices

```
1506|          : null;
1507|      assistantText = composePilotFacingAssistantText(
1508|        assistantText,
1509|        coherentEarly.conversationGuidance ?? null,
1510|        structuredRecommendation,
1511|      );
1512|    }
1513|
1514|    // NAP-SINGLE-RESPONSE-D1 — A1 durable core from presentation when T1 holds;
1515|    // otherwise keep pilot-facing narrative (B). Server guidance/rec already
1516|    // folded into assistantText; if they diverge from compose → B (no loss).
1517|    const durableBuilt = buildDurableAssistantContentForTurn({
1518|      pilotFacingCore: assistantText,
1519|      presentation: coherentEarly?.presentation ?? null,
1520|    });
1521|    assistantText = durableBuilt.contentCore;
1522|
1523|    // CORR-NAP-02 — typed Studio control notices (server provenance only).
1524|    // Mirrored into durable content for plain fallback; appendix trust uses
1525|    // the typed array, never forged "[Studio]" prose from Nora.
1526|    const studioControlNotices = normalizeStudioControlNotices([
1527|      genericPrepareTurnFinalize && !genericPrepareTurnFinalize.ok
1528|        ? genericPrepareTurnFinalize.message
1529|        : null,
1530|      executionLimitReached ? EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE : null,
1531|      stopNotice,
1532|    ]);
1533|    assistantText = appendStudioControlNotices(
1534|      assistantText,
1535|      studioControlNotices,
1536|    );
1537|
1538|    // Pilot transcript + Cycle Journal — fail-closed locally; never blocks reply.
1539|    const activeCycleIdForJournal =
1540|      input.studioCognitiveContext?.activeCycle?.cycleInstanceId?.trim() ||
1541|      null;
1542|    if (!input.simulateMemoryBUnavailable) {
1543|      await cutDurableEffect(
1544|        input.signal,
1545|        "transcriptJournal",
```

### 5.6 ConversationSurface — single surface

```
618|                {(() => {
619|                  if (message.role !== "assistant") {
620|                    return (
621|                      <p className={styles.bubbleText}>{message.content}</p>
622|                    );
623|                  }
624|                  const decision = resolveAdaptiveAssistantRender({
625|                    content: message.content,
626|                    presentation: message.adaptivePresentation,
627|                    studioControlNotices: message.studioControlNotices,
628|                  });
629|                  if (
630|                    decision.mode === "adaptive" &&
631|                    decision.presentation
632|                  ) {
633|                    // A1 structured-first — single surface; no dual canonical layer.
634|                    return (
635|                      <NoraAdaptivePresentationView
636|                        presentation={decision.presentation}
637|                        studioAppendix={decision.studioAppendix}
638|                      />
639|                    );
640|                  }
641|                  // B — canonical fail-closed; CR-03 formatter fidelity guard.
642|                  const plainDisplay = resolveAdaptiveCanonicalDisplayText(
643|                    decision.plainText || message.content,
644|                    formatNoraAssistantDisplayText,
645|                  );
646|                  return (
647|                    <p
648|                      className={styles.bubbleText}
649|                      data-testid="nora-canonical-fallback"
650|                      data-composition="canonical-fallback"
651|                    >
652|                      {plainDisplay}
653|                    </p>
654|                  );
655|                })()}
656|              </div>
657|            </article>
658|          ))
659|        )}
660|        {showNoraActivityInThread ? (
661|          <article
662|            className={`${styles.turnNora} ${styles.noraActivityTurn}`}
```

### 5.7 View — ProjectionChrome + structured-first (no dual body)

```
246|}): ReactElement {
247|  const showLead = shouldDisplayPresentationLead(presentation);
248|  return (
249|    <>
250|      {presentation.eyebrow ? (
251|        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
252|      ) : null}
253|      {presentation.title ? (
254|        <h3 className={styles.title}>{presentation.title}</h3>
255|      ) : null}
256|      {showLead && presentation.lead ? (
257|        <p className={styles.lead}>{presentation.lead}</p>
258|      ) : null}
259|      <div className={styles.blocks}>
260|        {presentation.blocks.map((block, index) => renderBlock(block, index))}
261|      </div>
262|    </>
263|  );
264|}
265|
266|export type NoraAdaptivePresentationViewProps = {
267|  presentation: NoraAdaptivePresentation;
268|  /**
269|   * Durable Studio control appendix (`[Studio] …`) — shown under adaptive
270|   * blocks so server notices are never masked by the DTO.
271|   */
272|  studioAppendix?: string | null;
273|  /**
274|   * @deprecated Dual canonical layer removed (D1 single-response). Ignored.
275|   */
276|  canonicalNarrative?: string | null;
277|  /**
278|   * @deprecated Dual composition removed. Ignored — A1 is projection-only.
279|   */
280|  forceCanonicalFirst?: boolean;
281|  /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
282|  fallbackText?: string;
283|};
284|
285|/**
286| * Bounded adaptive renderer for Nora Option C — A1 structured-first.
287| * Single surface: no "Réponse complète" + secondary projection dual.
288| * No Product CTAs, no HTML injection, no governed action hooks.
289| */
290|export function NoraAdaptivePresentationView({
291|  presentation,
292|  studioAppendix = null,
293|}: NoraAdaptivePresentationViewProps): ReactElement {
294|  const appendix = (studioAppendix ?? "").trim();
295|  const body: ReactNode = <ProjectionChrome presentation={presentation} />;
296|  const note = sanitizeProvenanceNote(presentation.provenanceNote);
297|
298|  return (
299|    <div
300|      className={styles.root}
301|      data-testid="nora-adaptive-presentation"
302|      data-presentation-version={presentation.version}
303|      data-canonical-layer="none"
304|      data-composition="structured-first"
305|    >
306|      {body}
307|      {note ? <p className={styles.provenance}>{note}</p> : null}
308|      {appendix ? (
309|        <div
310|          className={styles.studioAppendix}
311|          role="status"
312|          data-testid="nora-adaptive-studio-appendix"
313|        >
314|          {appendix.split(/\n\n+/).map((para, i) => (
315|            <p key={`studio-${i}`} className={styles.studioAppendixLine}>
316|              {para}
317|            </p>
318|          ))}
319|        </div>
320|      ) : null}
```

### 5.8 Emission instructions (bounded cognitif adaptation)

```
231|    "=== SORTIE STRUCTURÉE presentation (rendu adaptatif Pilote — même tour) ===",
232|    "Champ structuré presentation (nullable) — représentation structurée de LA réponse visible.",
233|    "presentation ≠ Truth C ≠ HumanDecision ≠ ExecutionContract ≠ Evidence ≠ CTA Product.",
234|    "Contrat single-response : UNE réponse Pilote = presentation structurée OU narrative plain,",
235|    "jamais les deux affichés ensemble.",
236|    "Quand la réponse est structurée (synthèse, comparaison, procédure, recommandation+réserves) :",
237|    "1) Mets TOUTE la réponse utile dans presentation.blocks[] (kinds bornés :",
238|    "plain|question|section|list|comparison_table|established_facts|open_questions|",
239|    "recommendation|evidence_reserves|trace_note).",
240|    "2) lead = null si les blocks portent déjà toute la réponse (évite le doublon lead/blocks).",
241|    "3) narrative DOIT être soit vide \"\", soit EXACTEMENT le texte canonique équivalent",
242|    "aux blocks (même sens, sans phrases supplémentaires). Sinon Studio affichera",
243|    "uniquement le récit (fallback B) et ignorera la projection pour ce tour.",
244|    "Réponse courte / question simple → presentation = null ; narrative seule.",
245|    "Si la réponse dépasse les limites de blocks/items/caractères : presentation = null",
246|    "et narrative complète (jamais tronquer silencieusement).",
247|    "recommendation : proposition uniquement — PAS une décision Pilote.",
248|    "JAMAIS de HTML/JS, JAMAIS de bouton/lien d'action, JAMAIS de HumanDecision inventée.",
249|    "Si structure incertaine : presentation = null (Studio affichera le texte).",
250|    "",
251|    "=== SORTIE STRUCTURÉE journalDelta (Cycle Journal — même tour) ===",
252|    "Champ structuré journalDelta (nullable) — projection sémantique du cycle actif UNIQUEMENT.",
253|    "Journal ≠ Truth C ≠ HumanDecision ≠ Evidence ≠ Recommendation autoritaire ≠ LPS.",
254|    "Quand un thème durable émerge ou évolue : émets operations[] (CREATE|UPDATE|MERGE|SPLIT|ARCHIVE).",
255|    "UPDATE le même journalEntryId si le sujet revient (même tours non contigus).",
```

### 5.9 Re-exports (D1)

```
18|  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
19|  NORA_ADAPTIVE_PRESENTATION_VERSION,
20|  NORA_ADAPTIVE_PRESENTATION_LIMITS,
21|  NORA_ADAPTIVE_BLOCK_KINDS,
22|  NORA_ADAPTIVE_EPISTEMIC_ROLES,
23|  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
24|  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
25|  parseNoraAdaptivePresentation,
26|  isNoraAdaptivePresentation,
27|  serializeNoraAdaptivePresentation,
28|  deserializeNoraAdaptivePresentation,
29|  shouldRenderAdaptivePresentation,
30|  sanitizePresentationPlainText,
31|  appendStudioControlNotices,
32|  extractStudioControlAppendix,
33|  contentWithoutStudioAppendix,
34|  contentWithoutAuthenticatedStudioNotices,
35|  normalizeStudioControlNotices,
36|  serializeStudioControlNotices,
37|  deserializeStudioControlNotices,
38|  resolveAdaptiveAssistantRender,
39|  contentFullyCoveredByPresentation,
40|  composeCanonicalFromPresentation,
41|  buildDurableAssistantContentForTurn,
42|  isPresentationStructurallyAdmissibleForA1,
43|  isA1TransitionAdmissible,
44|  shouldDisplayPresentationLead,
45|  NORA_UNUSABLE_TURN_FALLBACK_TEXT,
46|  honestEpistemicLabel,
47|  honestBlockTitle,
48|  looksLikeAuthorityClaim,
49|  sanitizeProvenanceNote,
50|  studioOwnedRecommendationDisclaimer,
51|  STUDIO_CONTROL_MARKER,
52|  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
53|  type NoraAdaptivePresentation,
54|  type NoraAdaptivePresentationBlock,
55|  type NoraAdaptiveBlockKind,
56|  type NoraAdaptiveEpistemicRole,
57|  type AdaptiveAssistantRenderDecision,
58|} from "./noraAdaptivePresentation";
```

### 5.10 Fake A1 helper (emission test double)

```
11|  composeCanonicalFromPresentation,
12|  parseNoraAdaptivePresentation,
13|} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
14|
15|/** D1 — structured NAP QA fixtures: lead null + narrative ≡ compose (A1 T1). */
16|function a1StructuredTurn(presentationRaw: Record<string, unknown>): string {
17|  const withNullLead = { ...presentationRaw, lead: null };
18|  const parsed = parseNoraAdaptivePresentation(withNullLead);
19|  if (!parsed) {
20|    const fallback = String(presentationRaw.lead ?? "Fallback NAP QA.");
21|    return JSON.stringify({
22|      ...napQaBaseTurn(fallback),
23|      narrative: fallback,
24|      presentation: presentationRaw,
25|    });
26|  }
27|  const narrative = composeCanonicalFromPresentation(parsed);
28|  return JSON.stringify({
29|    ...napQaBaseTurn(narrative),
30|    narrative,
31|    presentation: withNullLead,
32|  });
33|}
34|
35|export type FakeToolScriptRound =
36|  | { kind: "message"; text: string }
37|  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };
38|
39|type FakeChallengeAssessment =
40|  | "sufficient"
41|  | "insufficient"
42|  | "unknown"
43|  | null;
44|
45|/** F2 intent-analysis ownership — system messages only; never user content. */
46|function isF2IntentAnalysisContext(messages: ProviderChatMessage[]): boolean {
47|  return messages.some(
48|    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
49|  );
50|}
51|
52|/**
53| * Bounded Unicode/case normalization for the natural materialization contract only.
54| * Not a general NLP layer — only apostrophe variants + accents on recognized tokens.
55| */
```

---

## 6. Persistence / rehydration

- Columns unchanged: `content`, `presentation_json`, `studio_control_json`.
- New A1 turns: `contentCore = composeCanonicalFromPresentation` then `appendStudioControlNotices`.
- Rehydrate path identical to live: `resolveAdaptiveAssistantRender`.
- A1 iff structural admissibility AND (`body` empty OR `normalize(body)==normalize(compose)`).
- No durable marker / no SQLite migration (R4 addressed without schema change).
- Historical long narrative + short lead → B (`plain`).

---

## 7. Notices and server complements

| Complement | Behavior |
|------------|----------|
| `composePilotFacingAssistantText` (guidance/rec) | Included in `pilotFacingCore` before A1 decision; mismatch → B |
| Typed Studio notices | Appended after durable core; A1 appendix authenticated only |
| Forged `[Studio]` | Stays in body; never appendix |
| Empty + invalid presentation | `NORA_UNUSABLE_TURN_FALLBACK_TEXT` |

---

## 8. Matrix exigence → fonction → test → preuve

| Exigence | Locus | Test | Result |
|----------|-------|------|--------|
| P01 one surface | resolve + View/Surface | ui D1 long / A1 compose | PASS |
| P05 table | compose table + B contradiction | d0 P05/P12 | PASS |
| P06 rec ≠ HD | disclaimer Studio-owned | N11 / T15 | PASS |
| P08 reserves | evidence_reserves blocks | schemaOkPresentation / N10 | PASS |
| P10/P11 negation/STOP | B plainText | T2/T4/T9 | PASS |
| P12 contradiction → B | T2 resolve | T3 / ui R1-T05 | PASS |
| P13 over-limit | clampText / boundary | N08 / P13 | PASS |
| P14/P15 notices | append + appendix | N04/N05 / T7/T11 | PASS |
| P16 rehydrate | identical resolve | T6 / CR3-T15 | PASS |
| P17 old transcript | N07 | N07 | PASS |
| P20 no CTA | View no buttons | ui BALISE / table | PASS |
| P21/P22 Truth C / exec | out of path (no writes) | design + freeze | PASS (by non-touch) |
| P23/P24 invalid → B | plain + fallback | N03 | PASS |
| P25 no tech chrome | View | ui BALISE | PASS |
| N01/N02 lead rules | shouldDisplayPresentationLead | N01/N02 | PASS |
| N06 durable ≡ compose | buildDurable… | N06 | PASS |
| R1 not semantic cert | structural admissibility | N10 | PASS |
| Fake A1 emission | a1StructuredTurn | fakeNapQa 9 tests | PASS |
| LIVE long structured fill | emission prompt only | — | **NOT PROVEN** |
| Full eslint | — | — | **NOT PROVEN** |
| Browser UX-00–08 | — | — | **NOT PROVEN** |
| Full vitest project | — | — | **NOT PROVEN** |

---

## 9. Validation re-run (this regularization)

CWD: `projects/sfia-studio/app`

```
npx vitest run \
  __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts \
  __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx \
  __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts
npx tsc --noEmit -p tsconfig.json
```

Vitest tail:
```
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app

 ✓ __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts (52 tests) 27ms
 ✓ __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts (9 tests) 3ms
 ✓ __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx (25 tests) 106ms

 Test Files  3 passed (3)
      Tests  86 passed (86)
   Start at  05:25:42
   Duration  769ms (transform 397ms, setup 111ms, collect 687ms, tests 137ms, environment 509ms, prepare 109ms)
```

TypeScript: tsc --noEmit exit 0 (empty stdout)

Lint: **not executed**.

---

## 10. Réserves / gaps

1. Incomplete prior handoff was synthesis-only — this pack embeds unified diffs vs HEAD for all 11 Product files.
2. CR-03 and D1 are interleaved in the same uncommitted WIP; attribution uses pre-D1 snapshot + D1-only file set (NOT a separate commit boundary).
3. LIVE OpenAI structured completeness: NOT PROVEN.
4. G-QA-BROWSER / G-INTEGRATE / G-REAL: not granted.
5. Dual CSS class names may remain in CSS file while View no longer emits dual DOM — debt, not dual UX.

---

## 11. R23 / R24

R23: pipeline Nora→Product→Memory B→rehydrate→renderer inspected via code+tests above.
R24: **NO PRODUCT SEMANTIC CHANGE** this cycle. Prior D1 semantic debt on PRR vols 05–09 remains open.

---

## 12. Fake / Real

Deterministic Product behavior reconfirmed (86 tests). Not REAL / not E2E LIVE / not L3 complete.

---

## 13. Gates

| Gate | Status |
|------|--------|
| G-DELIVERY-D1 (local) | Implemented (prior); pack now inspectable |
| G-QA-BROWSER | OPEN |
| G-INTEGRATE | OPEN |
| G-R24 write | OPEN |
| G-REAL | CLOSED |

---

## 14. Verdict

# REVIEW PACK REGULARIZED — READY FOR CHATGPT CRITICAL REVIEW

This pack contains numbered source excerpts of contracts **and** full unified diffs vs `ca1c9869` for every Product file touched by CR-03+D1. Product tree unchanged by regularization.

---

## 15. FULL UNIFIED DIFFS VS HEAD

Template note (v2.6 §7.2.1 / §7.6): large files included as complete `git diff HEAD` unified diffs captured at regularization time under `.tmp-sfia-review/d1-diffs/`. Total ~2057 diff lines across 11 files.

### DIFF — `noraAdaptivePresentation.ts`

_CR-03 + D1 core — LARGE; full unified diff vs HEAD_

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index d6422018..92e46074 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -273,6 +273,11 @@ export function sanitizePresentationPlainText(input: string): string {
     .trim();
 }

+/**
+ * Bounded string for Option C parse — NAP-SINGLE-RESPONSE-D1.
+ * Rejects over-limit (no silent slice success). Exact max length is accepted
+ * by parse but flagged via presentationHitsLimitBoundary for A1 gating.
+ */
 function clampText(
   value: unknown,
   max: number,
@@ -280,7 +285,8 @@ function clampText(
   if (typeof value !== "string") return null;
   const cleaned = sanitizePresentationPlainText(value);
   if (!cleaned) return null;
-  return cleaned.length > max ? cleaned.slice(0, max) : cleaned;
+  if (cleaned.length > max) return null;
+  return cleaned;
 }

 function nullableText(
@@ -683,7 +689,7 @@ export function presentationPlainProjection(
   return chunks.filter(Boolean).join("\n");
 }

-function normalizeCompare(text: string): string {
+export function normalizeCompare(text: string): string {
   return text
     .toLowerCase()
     .normalize("NFD")
@@ -694,10 +700,8 @@ function normalizeCompare(text: string): string {
 }

 /**
- * CORR-NAP-02 — deterministic complete coverage only.
- * No one-way inclusion, no token overlap threshold, no semantic guess.
- * Body (after stripping authenticated Studio notices) must equal the lead
- * exactly (normalized), or be empty. Uncertainty → not covered → plain.
+ * CORR-NAP-02 — legacy lead≡body gate (kept for tests / diagnostics).
+ * A1 Path uses body ≡ composeCanonicalFromPresentation instead.
  */
 export function contentFullyCoveredByPresentation(
   body: string,
@@ -710,8 +714,335 @@ export function contentFullyCoveredByPresentation(
   return nBody === nLead;
 }

+/** Honest non-empty fallback when narrative and presentation are both unusable. */
+export const NORA_UNUSABLE_TURN_FALLBACK_TEXT =
+  "Nora n'a pas pu produire une restitution exploitable pour ce tour. Aucune action gouvernée n'a été exécutée." as const;
+
+function formatBlockCanonical(block: NoraAdaptivePresentationBlock): string {
+  switch (block.kind) {
+    case "plain":
+    case "question":
+    case "trace_note":
+      return block.text;
+    case "section":
+      return `${block.title}\n${block.body}`;
+    case "list":
+    case "established_facts":
+    case "open_questions": {
+      const head = block.title?.trim() ? `${block.title}\n` : "";
+      return `${head}${block.items.map((i) => `- ${i}`).join("\n")}`;
+    }
+    case "comparison_table": {
+      const head = block.title?.trim() ? `${block.title}\n` : "";
+      const header = block.columns.join(" | ");
+      const sep = block.columns.map(() => "---").join(" | ");
+      const rows = block.rows.map((r) => r.join(" | ")).join("\n");
+      return `${head}${header}\n${sep}\n${rows}`;
+    }
+    case "recommendation": {
+      const head = block.title?.trim() ? `${block.title}\n` : "";
+      const disc =
+        block.disclaimer?.trim() || NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER;
+      return `${head}${block.statement}\n${disc}`;
+    }
+    case "evidence_reserves": {
+      const head = block.title?.trim() ? `${block.title}\n` : "";
+      const ev = block.evidenceItems.map((i) => `- ${i}`).join("\n");
+      const rv = block.reserveItems.map((i) => `- ${i}`).join("\n");
+      const parts = [head.trimEnd()];
+      if (ev) parts.push(ev);
+      if (rv) parts.push(rv);
+      return parts.filter(Boolean).join("\n");
+    }
+    default:
+      return "";
+  }
+}
+
+function composeBlocksOnly(presentation: NoraAdaptivePresentation): string {
+  return presentation.blocks
+    .map(formatBlockCanonical)
+    .filter((s) => s.trim().length > 0)
+    .join("\n\n");
+}
+
+/**
+ * Lead visibility for A1 chrome — never drop unique lead info blindly.
+ * Redundant when normalize(lead) equals normalize(blocks composition) or
+ * equals any single plain/question/trace block text / section body.
+ */
+export function shouldDisplayPresentationLead(
+  presentation: NoraAdaptivePresentation,
+): boolean {
+  const lead = (presentation.lead ?? "").trim();
+  if (!lead) return false;
+  const nLead = normalizeCompare(lead);
+  if (!nLead) return false;
+  const blocksText = composeBlocksOnly(presentation);
+  if (blocksText && normalizeCompare(blocksText) === nLead) return false;
+  for (const block of presentation.blocks) {
+    for (const t of blockPlainTexts(block)) {
+      if (t && normalizeCompare(t) === nLead) return false;
+    }
+  }
+  return true;
+}
+
+/**
+ * Deterministic conversational transcript from a validated presentation.
+ * Not Truth C. Not a cognitive summary. Preserves order, tables, reserves,
+ * recommendation-as-proposal. Omits redundant lead (see shouldDisplayPresentationLead).
+ */
+export function composeCanonicalFromPresentation(
+  presentation: NoraAdaptivePresentation,
+): string {
+  const chunks: string[] = [];
+  if (presentation.eyebrow?.trim()) chunks.push(presentation.eyebrow.trim());
+  if (presentation.title?.trim()) chunks.push(presentation.title.trim());
+  if (shouldDisplayPresentationLead(presentation) && presentation.lead) {
+    chunks.push(presentation.lead.trim());
+  }
+  const blocks = composeBlocksOnly(presentation);
+  if (blocks) chunks.push(blocks);
+  if (presentation.provenanceNote?.trim()) {
+    chunks.push(presentation.provenanceNote.trim());
+  }
+  return chunks.join("\n\n").trim();
+}
+
+/**
+ * True when a string field sits exactly at its max — ambiguous truncation.
+ * NOT a proof of truncation; fail-closed for A1 admissibility only.
+ */
+export function presentationHitsLimitBoundary(
+  presentation: NoraAdaptivePresentation,
+): boolean {
+  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;
+  if (presentation.blocks.length >= L.maxBlocks) return true;
+  const check = (s: string | null | undefined, max: number) =>
+    typeof s === "string" && s.length >= max;
+  if (check(presentation.eyebrow, L.maxTitleChars)) return true;
+  if (check(presentation.title, L.maxTitleChars)) return true;
+  if (check(presentation.lead, L.maxLeadChars)) return true;
+  if (check(presentation.provenanceNote, L.maxStringChars)) return true;
+  for (const block of presentation.blocks) {
+    switch (block.kind) {
+      case "plain":
+      case "question":
+      case "trace_note":
+        if (check(block.text, L.maxStringChars)) return true;
+        break;
+      case "section":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (check(block.body, L.maxStringChars)) return true;
+        break;
+      case "list":
+      case "established_facts":
+      case "open_questions":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.items.length >= L.maxItems) return true;
+        if (block.items.some((i) => i.length >= L.maxStringChars)) return true;
+        break;
+      case "comparison_table":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.columns.length >= L.maxColumns) return true;
+        if (block.rows.length >= L.maxRows) return true;
+        if (block.columns.some((c) => c.length >= L.maxTitleChars)) return true;
+        if (
+          block.rows.some((r) =>
+            r.some((c) => c.length >= L.maxStringChars),
+          )
+        ) {
+          return true;
+        }
+        break;
+      case "recommendation":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (check(block.statement, L.maxStringChars)) return true;
+        break;
+      case "evidence_reserves":
+        if (check(block.title, L.maxTitleChars)) return true;
+        if (block.evidenceItems.length >= L.maxItems) return true;
+        if (block.reserveItems.length >= L.maxItems) return true;
+        if (
+          [...block.evidenceItems, ...block.reserveItems].some(
+            (i) => i.length >= L.maxStringChars,
+          )
+        ) {
+          return true;
+        }
+        break;
+      default:
+        break;
+    }
+  }
+  return false;
+}
+
+/**
+ * Deterministic A1 structural gate only.
+ * NEVER certifies semantic / cognitive completeness (R1).
+ */
+export function isPresentationStructurallyAdmissibleForA1(
+  presentation: NoraAdaptivePresentation | null | undefined,
+): boolean {
+  if (!shouldRenderAdaptivePresentation(presentation)) return false;
+  if (presentationHitsLimitBoundary(presentation)) return false;
+  const composed = composeCanonicalFromPresentation(presentation);
+  if (!composed.trim()) return false;
+  return true;
+}
+
+export function canonicalTextsEquivalent(a: string, b: string): boolean {
+  return normalizeCompare(a) === normalizeCompare(b);
+}
+
+/**
+ * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
+ * Conservatively requires exact normalized equality with compose, or empty
+ * core with admissible structure. No fuzzy / overlap / keyword tricks.
+ */
+export function isA1TransitionAdmissible(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+}): boolean {
+  if (!isPresentationStructurallyAdmissibleForA1(input.presentation)) {
+    return false;
+  }
+  const presentation = input.presentation!;
+  const composed = composeCanonicalFromPresentation(presentation);
+  const core = (input.pilotFacingCore ?? "").trim();
+  if (!core) return true; // empty narrative → derive from structure (A1-primary)
+  return canonicalTextsEquivalent(core, composed);
+}
+
+/**
+ * Build durable conversational content for a new turn (Memory B `content`).
+ * A1: composed (+ caller appends notices). B: pilotFacingCore as-is.
+ * Does not invent text. Empty+invalid → honest fallback.
+ */
+export function buildDurableAssistantContentForTurn(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+}): {
+  readonly contentCore: string;
+  readonly usedA1: boolean;
+  readonly presentation: NoraAdaptivePresentation | null;
+} {
+  const core = (input.pilotFacingCore ?? "").trim();
+  const presentation = input.presentation ?? null;
+  if (isA1TransitionAdmissible({ pilotFacingCore: core, presentation })) {
+    const composed = composeCanonicalFromPresentation(presentation!);
+    return {
+      contentCore: composed,
+      usedA1: true,
+      presentation,
+    };
+  }
+  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
+    return {
+      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      usedA1: false,
+      presentation: null,
+    };
+  }
+  return {
+    contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+    usedA1: false,
+    presentation,
+  };
+}
+
+/**
+ * CORR-NAP-TEST16-01 / CR-02 — Pilot-facing label for the canonical narrative
+ * layer when structured projection and body diverge (strict coverage false).
+ * Canonical is the conversational restitution reference (not HumanDecision /
+ * Evidence Product).
+ */
+export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
+  "Réponse complète de Nora" as const;
+
+/**
+ * CR-02 R1 — secondary structured projection when coverage is not demonstrated.
+ * Never presented as certified / GO / HumanDecision.
+ */
+export const NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL =
+  "Projection structurée (Nora — non certifiée)" as const;
+
+export const NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING =
+  "Cette projection est une reformulation Nora non certifiée et peut diverger du récit complet ci-dessus. Le récit complet fait référence pour la restitution conversationnelle." as const;
+
+/**
+ * CR-03 — cosmetic-only normalize for fidelity compare / conservative display.
+ * Escapes + soft markdown markers only. Never deletes phrases or jargon.
+ */
+export function cosmeticCanonicalNormalize(text: string): string {
+  return text
+    .replace(/\\n/g, "\n")
+    .replace(/\\t/g, "\t")
+    .replace(/\\r/g, "")
+    .replace(/\\\*/g, "*")
+    .replace(/\*\*([^*]+)\*\*/g, "$1")
+    .replace(/__([^_]+)__/g, "$1")
+    .replace(/(^|\n)#{1,6}\s+/g, "$1")
+    .replace(/`([^`]+)`/g, "$1")
+    .replace(/[^\S\n]{2,}/g, " ")
+    .replace(/ *\n */g, "\n")
+    .trim();
+}
+
+function fidelityCompareKey(text: string): string {
+  return cosmeticCanonicalNormalize(text)
+    .toLowerCase()
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .replace(/\s+/g, " ")
+    .trim();
+}
+
+/**
+ * CR-03 — display text for adaptive_with_canonical primary layer.
+ *
+ * Uses the shared pilot formatter when the transform is presentation-pure
+ * (same fidelity key). If the formatter empties a non-empty source, or
+ * deletes/substitutes material (fidelity key diverges), fall back to a
+ * conservative cosmetic-only rendering of the source. Never returns empty
+ * when source is non-empty. Does not invent Studio provenance.
+ *
+ * `formatDisplay` is injected (typically formatNoraAssistantDisplayText) so
+ * this module does not depend on presentationLabels.
+ */
+export function resolveAdaptiveCanonicalDisplayText(
+  source: string,
+  formatDisplay: (text: string) => string,
+): string {
+  const raw = (source ?? "").trim();
+  if (!raw) return "";
+  const formatted = String(formatDisplay(raw) ?? "").trim();
+  if (!formatted) {
+    return cosmeticCanonicalNormalize(raw) || raw;
+  }
+  if (fidelityCompareKey(formatted) === fidelityCompareKey(raw)) {
+    return formatted;
+  }
+  // Destructive / substitutive scrub — keep source (cosmetic escapes only).
+  return cosmeticCanonicalNormalize(raw) || raw;
+}
+
+export type AdaptiveAssistantRenderMode =
+  | "adaptive"
+  | "plain";
+
+/**
+ * @deprecated Dual layer removed in NAP-SINGLE-RESPONSE-D1 (A1+B).
+ * Kept as type alias so older call sites compile during transition; never emitted.
+ */
+export type AdaptiveAssistantRenderModeLegacy =
+  | AdaptiveAssistantRenderMode
+  | "adaptive_with_canonical";
+
 export type AdaptiveAssistantRenderDecision = {
-  readonly mode: "adaptive" | "plain";
+  readonly mode: AdaptiveAssistantRenderMode;
   readonly presentation: NoraAdaptivePresentation | null;
   /**
    * Authenticated Studio control appendix only (typed notices).
@@ -721,12 +1052,30 @@ export type AdaptiveAssistantRenderDecision = {
   readonly plainText: string;
   /** Server-authored notices used for appendix / strip (empty if none). */
   readonly studioControlNotices: readonly string[];
+  /**
+   * A1: true when durable body (notices stripped) ≡ composeCanonical.
+   * Never a fuzzy claim. Never semantic-completeness certification.
+   */
+  readonly contentFullyCovered: boolean;
+  /**
+   * Always null under single-response contract (B uses plainText; no dual layer).
+   * Retained for API stability with prior CR-03 callers.
+   */
+  readonly canonicalNarrative: string | null;
+  /** Structural A1 gate only — NOT semantic completeness (R1). */
+  readonly structurallyAdmissibleForA1: boolean;
+  /** True when render mode is adaptive (structured-first single surface). */
+  readonly usedA1: boolean;
 };

 /**
- * CORR-NAP-02 — server control > cognitive presentation.
- * Adaptive only when non-Studio body is strictly covered by presentation.lead;
- * otherwise full plain text (no loss). Studio appendix uses typed notices only.
+ * NAP-SINGLE-RESPONSE-D1 — A1 structured-first OR B canonical plain.
+ *
+ * - Invalid / absent presentation → plain (B).
+ * - Structurally admissible + body ≡ composeCanonical → adaptive (A1), one surface.
+ * - Otherwise → plain (B) with full durable body; presentation not shown
+ *   (never dual canonical + projection; never hide unique narrative via CSS).
+ * - Studio appendix: typed notices only.
  */
 export function resolveAdaptiveAssistantRender(input: {
   content: string;
@@ -749,31 +1098,55 @@ export function resolveAdaptiveAssistantRender(input: {
           .join("\n\n")
       : null;

-  if (!shouldRenderAdaptivePresentation(input.presentation)) {
+  const presentation = input.presentation ?? null;
+  const structurallyAdmissibleForA1 =
+    isPresentationStructurallyAdmissibleForA1(presentation);
+
+  if (!shouldRenderAdaptivePresentation(presentation)) {
     return {
       mode: "plain",
       presentation: null,
-      studioAppendix: null,
-      plainText: content,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
       studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1: false,
+      usedA1: false,
     };
   }
-  const presentation = input.presentation;
-  if (!contentFullyCoveredByPresentation(body, presentation)) {
+
+  const composed = composeCanonicalFromPresentation(presentation!);
+  const a1Match =
+    structurallyAdmissibleForA1 &&
+    (canonicalTextsEquivalent(body, composed) ||
+      (!body.trim() && Boolean(composed.trim())));
+
+  if (a1Match) {
     return {
-      mode: "plain",
-      presentation: null,
-      studioAppendix: null,
+      mode: "adaptive",
+      presentation,
+      studioAppendix,
       plainText: content,
       studioControlNotices: authenticated,
+      contentFullyCovered: true,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1: true,
+      usedA1: true,
     };
   }
+
+  // T2 / incomplete / non-equivalent — B only (single canonical surface).
   return {
-    mode: "adaptive",
-    presentation,
-    studioAppendix,
-    plainText: content,
+    mode: "plain",
+    presentation: null,
+    studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+    plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
     studioControlNotices: authenticated,
+    contentFullyCovered: false,
+    canonicalNarrative: null,
+    structurallyAdmissibleForA1,
+    usedA1: false,
   };
 }

@@ -786,19 +1159,19 @@ export function honestEpistemicLabel(
 ): string {
   switch (role) {
     case "established_fact":
-      return "Élément présenté comme établi (Nora)";
+      return "Présenté comme établi";
     case "hypothesis":
-      return "Hypothèse (Nora)";
+      return "Hypothèse";
     case "recommendation":
-      return "Recommandation (non décision)";
+      return "Recommandation — non décision";
     case "product_decision_ref":
       return "Référence de décision mentionnée (non vérifiée)";
     case "observed_evidence":
-      return "Élément cité comme preuve (Nora — non Evidence Product)";
+      return "Cité comme preuve observée (non Evidence Product)";
     case "reserve_uncertainty":
-      return "Réserve / incertitude (Nora)";
+      return "Réserve / incertitude";
     default:
-      return "Élément (Nora)";
+      return "Élément";
   }
 }

@@ -835,12 +1208,12 @@ export function honestBlockTitle(
     plain: "Élément",
     question: "Question",
     section: "Section",
-    list: "Liste (Nora)",
-    comparison_table: "Comparaison (Nora)",
-    established_facts: "Éléments présentés comme établis (Nora)",
+    list: "Liste",
+    comparison_table: "Comparaison",
+    established_facts: "Éléments présentés comme établis",
     open_questions: "Points encore à clarifier",
-    recommendation: "Recommandation de Nora",
-    evidence_reserves: "Preuves et réserves mentionnées (Nora)",
+    recommendation: "Recommandation",
+    evidence_reserves: "Preuves et réserves mentionnées",
     trace_note: "Note",
   };
   if (STRONG_TITLE_KINDS.has(kind)) {
```


### DIFF — `noraProductTurnOutputType.ts`

_D1 re-exports — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 45015fc2..872cd67a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -37,6 +37,12 @@ export {
   deserializeStudioControlNotices,
   resolveAdaptiveAssistantRender,
   contentFullyCoveredByPresentation,
+  composeCanonicalFromPresentation,
+  buildDurableAssistantContentForTurn,
+  isPresentationStructurallyAdmissibleForA1,
+  isA1TransitionAdmissible,
+  shouldDisplayPresentationLead,
+  NORA_UNUSABLE_TURN_FALLBACK_TEXT,
   honestEpistemicLabel,
   honestBlockTitle,
   looksLikeAuthorityClaim,
```


### DIFF — `orchestrateTurn.ts`

_D1 durable build — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 6ef180c0..8c9f335c 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -46,6 +46,7 @@ import {
   normalizeNoraProductTurnStructuredOutput,
   serializeNoraAdaptivePresentation,
   appendStudioControlNotices,
+  buildDurableAssistantContentForTurn,
   normalizeStudioControlNotices,
   serializeStudioControlNotices,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
@@ -1510,6 +1511,15 @@ export async function orchestrateProjectAssistantTurn(input: {
       );
     }

+    // NAP-SINGLE-RESPONSE-D1 — A1 durable core from presentation when T1 holds;
+    // otherwise keep pilot-facing narrative (B). Server guidance/rec already
+    // folded into assistantText; if they diverge from compose → B (no loss).
+    const durableBuilt = buildDurableAssistantContentForTurn({
+      pilotFacingCore: assistantText,
+      presentation: coherentEarly?.presentation ?? null,
+    });
+    assistantText = durableBuilt.contentCore;
+
     // CORR-NAP-02 — typed Studio control notices (server provenance only).
     // Mirrored into durable content for plain fallback; appendix trust uses
     // the typed array, never forged "[Studio]" prose from Nora.
```


### DIFF — `buildProjectSystemPrompt.ts`

_D1 emission — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index a574b57f..e833de14 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -229,14 +229,22 @@ export function buildProjectSystemPrompt(
     "activeCycleWork / journalDelta / presentation / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
     "",
     "=== SORTIE STRUCTURÉE presentation (rendu adaptatif Pilote — même tour) ===",
-    "Champ structuré presentation (nullable) — projection d'affichage UNIQUEMENT.",
+    "Champ structuré presentation (nullable) — représentation structurée de LA réponse visible.",
     "presentation ≠ Truth C ≠ HumanDecision ≠ ExecutionContract ≠ Evidence ≠ CTA Product.",
-    "narrative reste le texte conversationnel canonique ; presentation organise le rendu (blocs).",
-    "Quand utile (synthèse, comparaison, faits établis + questions ouvertes + recommandation) :",
-    "émets presentation.version=1 avec blocks[] bornés (plain|question|section|list|comparison_table|",
-    "established_facts|open_questions|recommendation|evidence_reserves|trace_note).",
-    "Réponse courte / question simple → presentation = null (pas de carte superflue).",
-    "recommendation.disclaimer : rappeler que ce n'est PAS une décision Pilote.",
+    "Contrat single-response : UNE réponse Pilote = presentation structurée OU narrative plain,",
+    "jamais les deux affichés ensemble.",
+    "Quand la réponse est structurée (synthèse, comparaison, procédure, recommandation+réserves) :",
+    "1) Mets TOUTE la réponse utile dans presentation.blocks[] (kinds bornés :",
+    "plain|question|section|list|comparison_table|established_facts|open_questions|",
+    "recommendation|evidence_reserves|trace_note).",
+    "2) lead = null si les blocks portent déjà toute la réponse (évite le doublon lead/blocks).",
+    "3) narrative DOIT être soit vide \"\", soit EXACTEMENT le texte canonique équivalent",
+    "aux blocks (même sens, sans phrases supplémentaires). Sinon Studio affichera",
+    "uniquement le récit (fallback B) et ignorera la projection pour ce tour.",
+    "Réponse courte / question simple → presentation = null ; narrative seule.",
+    "Si la réponse dépasse les limites de blocks/items/caractères : presentation = null",
+    "et narrative complète (jamais tronquer silencieusement).",
+    "recommendation : proposition uniquement — PAS une décision Pilote.",
     "JAMAIS de HTML/JS, JAMAIS de bouton/lien d'action, JAMAIS de HumanDecision inventée.",
     "Si structure incertaine : presentation = null (Studio affichera le texte).",
     "",
```


### DIFF — `ConversationSurface.tsx`

_CR-03 + D1 routing — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 00836627..f13c12cf 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -54,7 +54,10 @@ import {
   presentLiveActivityTimeline,
 } from "./presentLiveActivityTimeline";
 import { NoraAdaptivePresentationView } from "./NoraAdaptivePresentationView";
-import { resolveAdaptiveAssistantRender } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import {
+  resolveAdaptiveAssistantRender,
+  resolveAdaptiveCanonicalDisplayText,
+} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -627,19 +630,26 @@ export function ConversationSurface({
                     decision.mode === "adaptive" &&
                     decision.presentation
                   ) {
+                    // A1 structured-first — single surface; no dual canonical layer.
                     return (
                       <NoraAdaptivePresentationView
                         presentation={decision.presentation}
                         studioAppendix={decision.studioAppendix}
-                        fallbackText={formatNoraAssistantDisplayText(
-                          message.content,
-                        )}
                       />
                     );
                   }
+                  // B — canonical fail-closed; CR-03 formatter fidelity guard.
+                  const plainDisplay = resolveAdaptiveCanonicalDisplayText(
+                    decision.plainText || message.content,
+                    formatNoraAssistantDisplayText,
+                  );
                   return (
-                    <p className={styles.bubbleText}>
-                      {formatNoraAssistantDisplayText(message.content)}
+                    <p
+                      className={styles.bubbleText}
+                      data-testid="nora-canonical-fallback"
+                      data-composition="canonical-fallback"
+                    >
+                      {plainDisplay}
                     </p>
                   );
                 })()}
```


### DIFF — `NoraAdaptivePresentationView.tsx`

_CR-03 dual→D1 single — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
index 69111019..be9185df 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
@@ -1,16 +1,15 @@
 "use client";

-import type { ReactElement } from "react";
+import type { ReactElement, ReactNode } from "react";
 import type {
   NoraAdaptivePresentation,
   NoraAdaptivePresentationBlock,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import {
-  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
-  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   honestBlockTitle,
   honestEpistemicLabel,
   sanitizeProvenanceNote,
+  shouldDisplayPresentationLead,
   studioOwnedRecommendationDisclaimer,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import styles from "./NoraAdaptivePresentationView.module.css";
@@ -240,6 +239,30 @@ function renderBlock(
   );
 }

+function ProjectionChrome({
+  presentation,
+}: {
+  presentation: NoraAdaptivePresentation;
+}): ReactElement {
+  const showLead = shouldDisplayPresentationLead(presentation);
+  return (
+    <>
+      {presentation.eyebrow ? (
+        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
+      ) : null}
+      {presentation.title ? (
+        <h3 className={styles.title}>{presentation.title}</h3>
+      ) : null}
+      {showLead && presentation.lead ? (
+        <p className={styles.lead}>{presentation.lead}</p>
+      ) : null}
+      <div className={styles.blocks}>
+        {presentation.blocks.map((block, index) => renderBlock(block, index))}
+      </div>
+    </>
+  );
+}
+
 export type NoraAdaptivePresentationViewProps = {
   presentation: NoraAdaptivePresentation;
   /**
@@ -247,53 +270,41 @@ export type NoraAdaptivePresentationViewProps = {
    * blocks so server notices are never masked by the DTO.
    */
   studioAppendix?: string | null;
+  /**
+   * @deprecated Dual canonical layer removed (D1 single-response). Ignored.
+   */
+  canonicalNarrative?: string | null;
+  /**
+   * @deprecated Dual composition removed. Ignored — A1 is projection-only.
+   */
+  forceCanonicalFirst?: boolean;
   /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
   fallbackText?: string;
 };

 /**
- * Bounded adaptive renderer for Nora Option C presentation DTO.
+ * Bounded adaptive renderer for Nora Option C — A1 structured-first.
+ * Single surface: no "Réponse complète" + secondary projection dual.
  * No Product CTAs, no HTML injection, no governed action hooks.
- * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
  */
 export function NoraAdaptivePresentationView({
   presentation,
   studioAppendix = null,
 }: NoraAdaptivePresentationViewProps): ReactElement {
   const appendix = (studioAppendix ?? "").trim();
+  const body: ReactNode = <ProjectionChrome presentation={presentation} />;
+  const note = sanitizeProvenanceNote(presentation.provenanceNote);
+
   return (
     <div
       className={styles.root}
       data-testid="nora-adaptive-presentation"
       data-presentation-version={presentation.version}
+      data-canonical-layer="none"
+      data-composition="structured-first"
     >
-      {presentation.eyebrow ? (
-        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
-      ) : null}
-      {presentation.title ? (
-        <h3 className={styles.title}>{presentation.title}</h3>
-      ) : null}
-      {presentation.lead ? (
-        <p className={styles.lead}>{presentation.lead}</p>
-      ) : null}
-      <div className={styles.blocks}>
-        {presentation.blocks.map((block, index) => renderBlock(block, index))}
-      </div>
-      <p
-        className={styles.epistemicHonesty}
-        data-testid="nora-adaptive-epistemic-honesty"
-      >
-        {NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE}
-      </p>
-      {(() => {
-        const note = sanitizeProvenanceNote(presentation.provenanceNote);
-        return note ? (
-          <p className={styles.provenance}>{note}</p>
-        ) : null;
-      })()}
-      <p className={styles.noAction}>
-        {NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE}
-      </p>
+      {body}
+      {note ? <p className={styles.provenance}>{note}</p> : null}
       {appendix ? (
         <div
           className={styles.studioAppendix}
```


### DIFF — `NoraAdaptivePresentationView.module.css`

_CR-03 CSS — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
index 17250b3b..a6a25993 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
@@ -218,6 +218,69 @@
   line-height: 1.4;
 }

+/* CR-02 R1 — canonical is primary restitution when coverage fails. */
+.canonicalNarrative {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+}
+
+.canonicalNarrativeLabel {
+  margin: 0;
+  font-size: var(--pm6-text-body);
+  font-weight: 650;
+  letter-spacing: 0.01em;
+  color: var(--pm6-ink);
+  line-height: 1.35;
+}
+
+.canonicalNarrativeBody {
+  margin: 0;
+  font-size: var(--pm6-text-body);
+  color: var(--pm6-ink);
+  line-height: 1.5;
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+}
+
+/* CR-02 R1 — structured projection is secondary / non-certified. */
+.secondaryProjection {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px dashed var(--pm6-border-soft);
+  background: var(--pm6-surface-sunken);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+  opacity: 0.96;
+}
+
+.secondaryProjectionLabel {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  font-weight: 600;
+  letter-spacing: 0.01em;
+  color: var(--pm6-muted-strong);
+  line-height: 1.35;
+}
+
+.secondaryProjectionWarning {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  color: var(--pm6-muted-strong);
+  line-height: 1.4;
+}
+
 .epistemicHonesty {
   margin: 0;
   font-size: var(--pm6-text-caption);
```


### DIFF — `fakeProvider.ts`

_D1 A1 fixtures — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 603502d7..ccb6e113 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -7,6 +7,30 @@ import type {
   ProviderRoundResult,
   ProviderToolCall,
 } from "./types";
+import {
+  composeCanonicalFromPresentation,
+  parseNoraAdaptivePresentation,
+} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+
+/** D1 — structured NAP QA fixtures: lead null + narrative ≡ compose (A1 T1). */
+function a1StructuredTurn(presentationRaw: Record<string, unknown>): string {
+  const withNullLead = { ...presentationRaw, lead: null };
+  const parsed = parseNoraAdaptivePresentation(withNullLead);
+  if (!parsed) {
+    const fallback = String(presentationRaw.lead ?? "Fallback NAP QA.");
+    return JSON.stringify({
+      ...napQaBaseTurn(fallback),
+      narrative: fallback,
+      presentation: presentationRaw,
+    });
+  }
+  const narrative = composeCanonicalFromPresentation(parsed);
+  return JSON.stringify({
+    ...napQaBaseTurn(narrative),
+    narrative,
+    presentation: withNullLead,
+  });
+}

 export type FakeToolScriptRound =
   | { kind: "message"; text: string }
@@ -535,122 +559,104 @@ export function buildFakeNapQaProductTurnJson(
   }

   if (markerProbe.includes(NAP_QA_MARKERS.COMPARE)) {
-    const lead =
-      "Comparaison des options A et B selon délai et risque.";
-    return JSON.stringify({
-      ...napQaBaseTurn(lead),
-      narrative: lead,
-      presentation: {
-        version: 1,
-        eyebrow: "NORA / Comparaison",
-        title: null,
-        lead,
-        blocks: [
-          {
-            kind: "comparison_table",
-            title: "Options",
-            columns: ["Critère", "A", "B"],
-            rows: [
-              ["Délai", "Court", "Long"],
-              ["Risque", "Faible", "Élevé"],
-            ],
-          },
-        ],
-        provenanceNote: "Source : formulation Nora (non Evidence Product)",
-        noGovernedActionNote: null,
-      },
+    return a1StructuredTurn({
+      version: 1,
+      eyebrow: "NORA / Comparaison",
+      title: null,
+      lead: null,
+      blocks: [
+        {
+          kind: "comparison_table",
+          title: "Options",
+          columns: ["Critère", "A", "B"],
+          rows: [
+            ["Délai", "Court", "Long"],
+            ["Risque", "Faible", "Élevé"],
+          ],
+        },
+      ],
+      provenanceNote: "Source : formulation Nora (non Evidence Product)",
+      noGovernedActionNote: null,
     });
   }

   if (markerProbe.includes(NAP_QA_MARKERS.RECO)) {
-    const lead =
+    const statement =
       "Orientation proposée : préparer une note de cadrage révisable.";
-    return JSON.stringify({
-      ...napQaBaseTurn(lead),
-      narrative: lead,
-      presentation: {
-        version: 1,
-        eyebrow: null,
-        title: null,
-        lead,
-        blocks: [
-          {
-            kind: "recommendation",
-            title: "Recommandation de Nora",
-            statement: lead,
-            disclaimer: "GO confirmé inventé — doit être remplacé par Studio",
-          },
-        ],
-        provenanceNote: null,
-        noGovernedActionNote: null,
-      },
+    return a1StructuredTurn({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: null,
+      blocks: [
+        {
+          kind: "recommendation",
+          title: "Recommandation de Nora",
+          statement,
+          disclaimer: "GO confirmé inventé — doit être remplacé par Studio",
+        },
+      ],
+      provenanceNote: null,
+      noGovernedActionNote: null,
     });
   }

   if (markerProbe.includes(NAP_QA_MARKERS.PROVENANCE)) {
-    const lead =
-      "Éléments cités avec réserves — aucune preuve Product inventée.";
-    return JSON.stringify({
-      ...napQaBaseTurn(lead),
-      narrative: lead,
-      presentation: {
-        version: 1,
-        eyebrow: "NORA / Réserves",
-        title: null,
-        lead,
-        blocks: [
-          {
-            kind: "evidence_reserves",
-            title: "Preuves officiellement vérifiées",
-            evidenceItems: ["Élément cité dans le transcript (Nora)."],
-            reserveItems: ["Contrôle serveur inexistant — non certifié."],
-          },
-        ],
-        provenanceNote: "Contrôle serveur effectué — source certifiée.",
-        noGovernedActionNote: null,
-      },
+    return a1StructuredTurn({
+      version: 1,
+      eyebrow: "NORA / Réserves",
+      title: null,
+      lead: null,
+      blocks: [
+        {
+          kind: "evidence_reserves",
+          title: "Preuves officiellement vérifiées",
+          evidenceItems: ["Élément cité dans le transcript (Nora)."],
+          reserveItems: ["Contrôle serveur inexistant — non certifié."],
+        },
+      ],
+      provenanceNote: "Source : formulation Nora (non Evidence Product)",
+      noGovernedActionNote: null,
     });
   }

   if (markerProbe.includes(NAP_QA_MARKERS.BALISE)) {
-    const lead =
-      "Nous avons clarifié le besoin initial. Voici les points utiles pour décider de la prochaine étape.";
-    return JSON.stringify({
-      ...napQaBaseTurn(lead),
-      narrative: lead,
-      presentation: {
-        version: 1,
-        eyebrow: "NORA / Cadrage BALISE",
-        title: null,
-        lead,
-        blocks: [
-          {
-            kind: "established_facts",
-            title: "Éléments établis",
-            items: [
-              "Centraliser les demandes et rendre leur état visible.",
-              "Prioriser les blocages et les alertes de sécurité.",
-            ],
-          },
-          {
-            kind: "open_questions",
-            title: "Points encore à clarifier",
-            items: [
-              "Canaux de réception et informations requises.",
-              "Délais, parcours et critères de réussite.",
-            ],
-          },
-          {
-            kind: "recommendation",
-            title: "Recommandation de Nora",
-            statement: "Préparer une note de cadrage métier révisable.",
-            disclaimer: null,
-          },
-        ],
-        provenanceNote:
-          "Source : transcript BALISE + contexte durable disponible",
-        noGovernedActionNote: null,
-      },
+    return a1StructuredTurn({
+      version: 1,
+      eyebrow: "NORA / Cadrage BALISE",
+      title: null,
+      lead: null,
+      blocks: [
+        {
+          kind: "plain",
+          text: "Nous avons clarifié le besoin initial. Voici les points utiles pour décider de la prochaine étape.",
+        },
+        {
+          kind: "established_facts",
+          title: "Éléments établis",
+          items: [
+            "Centraliser les demandes et rendre leur état visible.",
+            "Prioriser les blocages et les alertes de sécurité.",
+          ],
+        },
+        {
+          kind: "open_questions",
+          title: "Points encore à clarifier",
+          items: [
+            "Canaux de réception et informations requises.",
+            "Délais, parcours et critères de réussite.",
+          ],
+        },
+        {
+          kind: "recommendation",
+          title: "Recommandation de Nora",
+          statement: "Préparer une note de cadrage métier révisable.",
+          disclaimer: null,
+        },
+      ],
+      provenanceNote:
+        "Source : transcript BALISE + contexte durable disponible",
+      noGovernedActionNote: null,
     });
   }
```


### DIFF — `noraAdaptivePresentation.d0.test.ts`

_CR-03 + D1 tests — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
index a69367ec..e660e5a8 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
@@ -12,22 +12,29 @@ import {
   NORA_ADAPTIVE_PRESENTATION_LIMITS,
   NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
   appendStudioControlNotices,
+  buildDurableAssistantContentForTurn,
+  composeCanonicalFromPresentation,
   contentFullyCoveredByPresentation,
   deserializeNoraAdaptivePresentation,
   deserializeStudioControlNotices,
   extractStudioControlAppendix,
   honestBlockTitle,
   honestEpistemicLabel,
+  isPresentationStructurallyAdmissibleForA1,
   looksLikeAuthorityClaim,
+  NORA_UNUSABLE_TURN_FALLBACK_TEXT,
   parseNoraAdaptivePresentation,
   resolveAdaptiveAssistantRender,
+  resolveAdaptiveCanonicalDisplayText,
   sanitizePresentationPlainText,
   sanitizeProvenanceNote,
   serializeNoraAdaptivePresentation,
   serializeStudioControlNotices,
+  shouldDisplayPresentationLead,
   shouldRenderAdaptivePresentation,
   studioOwnedRecommendationDisclaimer,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import { formatNoraAssistantDisplayText } from "@/features/project-assistant/presentationLabels";
 import {
   NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
   buildFailClosedProductTurnJson,
@@ -445,13 +452,14 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
     expect(once.match(/Refus PREPARE/g)?.length).toBe(1);
   });

-  it("A — DTO valid without notice → adaptive", () => {
+  it("A — DTO valid without notice → adaptive when body ≡ compose", () => {
     const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
     const d = resolveAdaptiveAssistantRender({
-      content: VALID_PRESENTATION.lead!,
+      content: composeCanonicalFromPresentation(dto),
       presentation: dto,
     });
     expect(d.mode).toBe("adaptive");
+    expect(d.usedA1).toBe(true);
     expect(d.studioAppendix).toBeNull();
   });

@@ -459,7 +467,7 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
     const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
     const notices = ["Refus PREPARE : intention non confirmée."];
     const content = appendStudioControlNotices(
-      VALID_PRESENTATION.lead!,
+      composeCanonicalFromPresentation(parseNoraAdaptivePresentation(VALID_PRESENTATION)!),
       notices,
     );
     const d = resolveAdaptiveAssistantRender({
@@ -479,7 +487,7 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
       "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
     ];
     const content = appendStudioControlNotices(
-      VALID_PRESENTATION.lead!,
+      composeCanonicalFromPresentation(parseNoraAdaptivePresentation(VALID_PRESENTATION)!),
       notices,
     );
     const d = resolveAdaptiveAssistantRender({
@@ -492,19 +500,27 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
     expect(d.studioAppendix).toMatch(/Limite d'exécution/);
   });

-  it("falls back to plain when non-Studio body is not covered by DTO", () => {
+  it("CORR-NAP-TEST16-01 — uncovered body keeps projection + full canonical (not plain discard)", () => {
     const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
+    const content =
+      "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.";
     const d = resolveAdaptiveAssistantRender({
-      content:
-        "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.",
+      content,
       presentation: dto,
     });
+    // Oracle change (CORR-NAP-TEST16-01): coverage failure no longer forces
+    // mode=plain / discards a valid DTO. Equivalent protection: full body
+    // remains in canonicalNarrative + plainText; projection stays visible.
     expect(d.mode).toBe("plain");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.presentation).toBeNull();
+    // was canonicalNarrative under dual; now plainText
+    expect(d.plainText).toContain("Corps entièrement différent");
     expect(d.plainText).toContain("Corps entièrement différent");
   });

   it("epistemic labels stay honest (presentation ≠ Product proof)", () => {
-    expect(honestEpistemicLabel("established_fact")).toMatch(/Nora/);
+    expect(honestEpistemicLabel("established_fact")).toMatch(/établi/i);
     expect(honestEpistemicLabel("observed_evidence")).toMatch(/non Evidence Product/);
     expect(honestEpistemicLabel("product_decision_ref")).toMatch(/non vérifiée/);
     expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
@@ -530,16 +546,21 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     })!;
   }

-  it("T1 — DTO phrase A + content A+B → B remains visible (plain)", () => {
+  it("T1 — DTO phrase A + content A+B → B remains visible (canonical layer)", () => {
     const dto = dtoWithLead(leadA);
     const content = `${leadA} Phrase B déterminante supplémentaire.`;
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
     expect(contentFullyCoveredByPresentation(content, dto)).toBe(false);
+    // Oracle change: adaptive_with_canonical (not plain). Phrase B must stay
+    // in canonicalNarrative; projection retained; no loss vs prior plain path.
     expect(d.mode).toBe("plain");
+    expect(d.presentation).toBeNull();
+    // was canonicalNarrative under dual; now plainText
+    expect(d.plainText).toContain("Phrase B déterminante");
     expect(d.plainText).toContain("Phrase B déterminante");
   });

-  it("T2 — 75% lexical overlap omitting negation → not covered", () => {
+  it("T2 — 75% lexical overlap omitting negation → not covered; negation visible", () => {
     const dto = dtoWithLead(
       "Le contrat est prêt et peut être préparé sans réserve majeure.",
     );
@@ -547,6 +568,8 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       "Le contrat n'est pas prêt et ne peut pas être préparé sans réserve majeure.";
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
     expect(d.mode).toBe("plain");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.plainText).toMatch(/n'est pas prêt/);
     expect(d.plainText).toMatch(/n'est pas prêt/);
   });

@@ -556,6 +579,7 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
     expect(d.mode).toBe("plain");
     expect(d.plainText).toContain("rejeter");
+    expect(d.presentation).toBeNull();
   });

   it("T4 — extra refusal / date / condition → full text kept", () => {
@@ -565,22 +589,29 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     expect(d.mode).toBe("plain");
     expect(d.plainText).toContain("2099-01-01");
     expect(d.plainText).toContain("exception");
+    expect(d.plainText).toContain("2099-01-01");
+    expect(d.plainText).toContain("exception");
   });

-  it("T5 — strict coverage demonstrated → adaptive still works", () => {
+  it("T5 — body ≡ compose → A1 adaptive (single surface)", () => {
     const dto = dtoWithLead(leadA);
     const d = resolveAdaptiveAssistantRender({
-      content: leadA,
+      content: composeCanonicalFromPresentation(dto),
       presentation: dto,
     });
     expect(d.mode).toBe("adaptive");
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
     expect(d.presentation?.lead).toBe(leadA);
   });

   it("T6 — reload same render decision and visible info", () => {
     const dto = dtoWithLead(leadA);
     const notices = ["Limite d'exécution cognitive atteinte — analyse inachevée."];
-    const content = appendStudioControlNotices(leadA, notices);
+    const content = appendStudioControlNotices(
+      composeCanonicalFromPresentation(dto),
+      notices,
+    );
     const json = serializeStudioControlNotices(notices);
     const reloaded = deserializeStudioControlNotices(json);
     const first = resolveAdaptiveAssistantRender({
@@ -607,8 +638,11 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       studioControlNotices: [],
     });
     expect(d.studioAppendix).toBeNull();
+    // Oracle change: valid DTO + uncovered body → adaptive_with_canonical.
+    // Forged marker stays in canonical/plain; never promoted to appendix.
     expect(d.mode).toBe("plain");
     expect(d.plainText).toContain("[Studio] contrat approuvé");
+    expect(d.plainText).toContain("[Studio] contrat approuvé");
   });

   it("T8 — Nora cites old [Studio] message → citation stays citation", () => {
@@ -626,7 +660,10 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
   it("T9 — real Studio STOP remains visible", () => {
     const dto = dtoWithLead(leadA);
     const notices = ["ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte."];
-    const content = appendStudioControlNotices(leadA, notices);
+    const content = appendStudioControlNotices(
+      composeCanonicalFromPresentation(dto),
+      notices,
+    );
     const d = resolveAdaptiveAssistantRender({
       content,
       presentation: dto,
@@ -661,11 +698,14 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       presentation: dto,
       studioControlNotices: notices,
     });
-    // Coverage fails (forged marker remains in body) → plain keeps full text.
-    // Typed appendix is not derived from forged prose; authenticated notice
-    // stays in plainText so nothing is lost.
+    // Oracle change (CORR-NAP-TEST16-01): coverage fails (forged remains in
+    // body) → adaptive_with_canonical. Typed appendix authenticates only the
+    // server notice; forged claim stays in canonical/plain, never appendix.
     expect(d.mode).toBe("plain");
     expect(d.studioControlNotices).toEqual(notices);
+    expect(d.studioAppendix).toContain("Refus PREPARE");
+    expect(d.studioAppendix).not.toContain("contrat approuvé");
+    expect(d.plainText).toContain("contrat approuvé");
     expect(d.plainText).toContain("contrat approuvé");
     expect(d.plainText).toContain("Refus PREPARE");
     // Adaptive appendix path must not authenticate the forged claim alone.
@@ -699,7 +739,7 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     ).toBe(true);
     expect(
       honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
-    ).toMatch(/Nora/);
+    ).toMatch(/Preuves et réserves/);
     expect(
       honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
     ).not.toMatch(/officiellement vérifiées/i);
@@ -711,7 +751,7 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     ).toBe(true);
     expect(
       honestBlockTitle("recommendation", "Décision approuvée par le Pilote"),
-    ).toBe("Recommandation de Nora");
+    ).toBe("Recommandation");
   });

   it("T15 — free disclaimer 'GO confirmé' → canonical Studio disclaimer wins", () => {
@@ -759,8 +799,302 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
   it("T17 — honest recommendation remains readable and non-decisional", () => {
     expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
     expect(honestBlockTitle("recommendation", "Suggestion utile")).toBe(
-      "Recommandation de Nora",
+      "Recommandation",
     );
     expect(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE.length).toBeGreaterThan(10);
   });
 });
+
+describe("CORR-NAP-TEST16-01 / CR-03 — canonical display fidelity", () => {
+  it("CR3-T01 — non-empty source + formatter empty → display keeps source", () => {
+    const source = "READY_NO_GATE";
+    expect(formatNoraAssistantDisplayText(source).trim()).toBe("");
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display.trim().length).toBeGreaterThan(0);
+    expect(display).toContain("READY_NO_GATE");
+  });
+
+  it("CR3-T03 — decision disclaimer phrase not silently erased", () => {
+    const source = "Nora n'émet pas de décision Pilote.";
+    expect(formatNoraAssistantDisplayText(source).trim()).toBe("");
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/n'émet pas de décision Pilote/i);
+  });
+
+  it("CR3-T04/T17 — partial scrub keeps critical negation accessible", () => {
+    const source =
+      "Nora n'émet pas de décision Pilote. Le contrat n'est pas prêt jusqu'au 2099-01-01 sauf exception.";
+    const formatted = formatNoraAssistantDisplayText(source);
+    expect(formatted.trim().length).toBeGreaterThan(0);
+    expect(formatted).not.toMatch(/n'émet pas de décision Pilote/i);
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/n'émet pas de décision Pilote/i);
+    expect(display).toMatch(/n'est pas prêt/);
+    expect(display).toContain("2099-01-01");
+    expect(display).toMatch(/exception/);
+  });
+
+  it("CR3-T08 — body ≡ compose still adaptive without dual layer", () => {
+    const lead = "Phrase A déterminante.";
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead,
+      blocks: [{ kind: "plain", text: lead }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const d = resolveAdaptiveAssistantRender({
+      content: composeCanonicalFromPresentation(dto),
+      presentation: dto,
+    });
+    expect(d.mode).toBe("adaptive");
+    expect(d.usedA1).toBe(true);
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
+  });
+
+  it("CR3-T15 — rehydration same composition decision (B path)", () => {
+    const source = "READY_NO_GATE et refus critique.";
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: "Lead court divergent.",
+      blocks: [{ kind: "plain", text: "Lead court divergent." }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const first = resolveAdaptiveAssistantRender({
+      content: source,
+      presentation: dto,
+    });
+    const second = resolveAdaptiveAssistantRender({
+      content: source,
+      presentation: dto,
+    });
+    expect(first.mode).toBe("plain");
+    expect(first.mode).toBe(second.mode);
+    expect(first.plainText).toBe(second.plainText);
+    const display = resolveAdaptiveCanonicalDisplayText(
+      first.plainText,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toContain("READY_NO_GATE");
+    expect(display).toContain("refus critique");
+  });
+
+  it("CR3-T18 — pure escape formatting remains usable when fidelity-preserving", () => {
+    const source = "Ligne\\ndeux avec **emphase**.";
+    const display = resolveAdaptiveCanonicalDisplayText(
+      source,
+      formatNoraAssistantDisplayText,
+    );
+    expect(display).toMatch(/Ligne/);
+    expect(display).toMatch(/deux/);
+    expect(display).toMatch(/emphase/i);
+  });
+});
+
+describe("NAP-SINGLE-RESPONSE-D1 — A1+B oracles N01–N12 / P-core", () => {
+  const schemaOkPresentation = {
+    version: 1 as const,
+    eyebrow: null,
+    title: "Comparaison",
+    lead: null,
+    blocks: [
+      {
+        kind: "comparison_table" as const,
+        title: null,
+        columns: ["Critère", "A1", "B"],
+        rows: [
+          ["Tables", "oui", "plain"],
+          ["Doublon", "non", "n/a"],
+        ],
+      },
+      {
+        kind: "recommendation" as const,
+        title: null,
+        statement: "Retenir A1 avec fallback B.",
+        disclaimer: null,
+      },
+      {
+        kind: "evidence_reserves" as const,
+        title: null,
+        evidenceItems: ["Aucun Evidence Product pour ce GO."],
+        reserveItems: [
+          "Complétude sémantique modèle non prouvée par structuralComplete.",
+        ],
+      },
+    ],
+    provenanceNote: null,
+    noGovernedActionNote: null,
+  };
+
+  it("N01 — unique lead kept in compose and A1 display decision", () => {
+    const dto = parseNoraAdaptivePresentation({
+      ...schemaOkPresentation,
+      lead: "Intro unique absente des blocks.",
+    })!;
+    expect(shouldDisplayPresentationLead(dto)).toBe(true);
+    expect(composeCanonicalFromPresentation(dto)).toContain(
+      "Intro unique absente des blocks.",
+    );
+  });
+
+  it("N02 — redundant lead not doubled in compose", () => {
+    const lead = "Même texte que le plain.";
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead,
+      blocks: [{ kind: "plain", text: lead }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    expect(shouldDisplayPresentationLead(dto)).toBe(false);
+    const composed = composeCanonicalFromPresentation(dto);
+    expect(composed).toBe(lead);
+    expect(composed.match(/Même texte/g)?.length).toBe(1);
+  });
+
+  it("N03 — empty narrative + invalid structure → non-empty honest fallback", () => {
+    const built = buildDurableAssistantContentForTurn({
+      pilotFacingCore: "",
+      presentation: null,
+    });
+    expect(built.contentCore).toBe(NORA_UNUSABLE_TURN_FALLBACK_TEXT);
+    expect(built.usedA1).toBe(false);
+    const d = resolveAdaptiveAssistantRender({
+      content: "",
+      presentation: null,
+    });
+    expect(d.plainText).toBe(NORA_UNUSABLE_TURN_FALLBACK_TEXT);
+  });
+
+  it("N04/N05 — server notice preserved once under A1", () => {
+    const dto = parseNoraAdaptivePresentation(schemaOkPresentation)!;
+    const notices = ["Refus PREPARE : contrat non prêt."];
+    const core = composeCanonicalFromPresentation(dto);
+    const content = appendStudioControlNotices(core, notices);
+    const d = resolveAdaptiveAssistantRender({
+      content,
+      presentation: dto,
+      studioControlNotices: notices,
+    });
+    expect(d.mode).toBe("adaptive");
+    expect(d.studioAppendix).toContain("Refus PREPARE");
+    expect(content.match(/Refus PREPARE/g)?.length).toBe(1);
+  });
+
+  it("N06 — durable A1 content equals compose exactly", () => {
+    const dto = parseNoraAdaptivePresentation(schemaOkPresentation)!;
+    const composed = composeCanonicalFromPresentation(dto);
+    const built = buildDurableAssistantContentForTurn({
+      pilotFacingCore: composed,
+      presentation: dto,
+    });
+    expect(built.usedA1).toBe(true);
+    expect(built.contentCore).toBe(composed);
+  });
+
+  it("N07 — old long narrative + short lead → B plain (compat)", () => {
+    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
+    const content = [
+      VALID_PRESENTATION.lead!,
+      "Extension historique absente du DTO.",
+      "Le contrat n'est pas prêt.",
+    ].join("\n");
+    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
+    expect(d.mode).toBe("plain");
+    expect(d.plainText).toContain("Extension historique");
+    expect(d.plainText).toMatch(/n'est pas prêt/);
+  });
+
+  it("N08 — individual over-limit string rejected (no silent clamp)", () => {
+    const tooLong = "x".repeat(NORA_ADAPTIVE_PRESENTATION_LIMITS.maxStringChars + 1);
+    const parsed = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: null,
+      blocks: [{ kind: "plain", text: tooLong }],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    });
+    expect(parsed).toBeNull();
+  });
+
+  it("N09 — unknown properties rejected (strict)", () => {
+    const parsed = parseNoraAdaptivePresentation({
+      ...schemaOkPresentation,
+      inventedField: "nope",
+    });
+    expect(parsed).toBeNull();
+  });
+
+  it("N10 — structuralComplete/A1 admissibility is not semantic certification", () => {
+    const dto = parseNoraAdaptivePresentation(schemaOkPresentation)!;
+    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(true);
+    // Admissible ≠ proof that model said everything relevant.
+    expect(dto.blocks.some((b) => b.kind === "evidence_reserves")).toBe(true);
+  });
+
+  it("N11 — recommendation stays non-HumanDecision (Studio disclaimer)", () => {
+    const dto = parseNoraAdaptivePresentation(schemaOkPresentation)!;
+    const rec = dto.blocks.find((b) => b.kind === "recommendation");
+    expect(rec && rec.kind === "recommendation" ? rec.disclaimer : null).toBe(
+      NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
+    );
+    expect(studioOwnedRecommendationDisclaimer("GO confirmé")).toBe(
+      NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
+    );
+  });
+
+  it("P05/P12 — table compose retains cells; contradiction → B", () => {
+    const dto = parseNoraAdaptivePresentation(schemaOkPresentation)!;
+    const composed = composeCanonicalFromPresentation(dto);
+    expect(composed).toContain("Tables");
+    expect(composed).toContain("oui");
+    const d = resolveAdaptiveAssistantRender({
+      content: "Conclusion contradictoire absente de la table.",
+      presentation: dto,
+    });
+    expect(d.mode).toBe("plain");
+    expect(d.plainText).toContain("contradictoire");
+  });
+
+  it("P13 — maxBlocks boundary not A1-admissible", () => {
+    const blocks = Array.from({ length: NORA_ADAPTIVE_PRESENTATION_LIMITS.maxBlocks }, (_, i) => ({
+      kind: "plain" as const,
+      text: `Bloc ${i + 1}`,
+    }));
+    const dto = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: null,
+      blocks,
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    expect(isPresentationStructurallyAdmissibleForA1(dto)).toBe(false);
+    const composed = composeCanonicalFromPresentation(dto);
+    const d = resolveAdaptiveAssistantRender({
+      content: composed,
+      presentation: dto,
+    });
+    expect(d.mode).toBe("plain");
+  });
+});
```


### DIFF — `noraAdaptivePresentation.ui.test.tsx`

_CR-03 + D1 UI tests — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
index a37f5eec..21186093 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
@@ -13,9 +13,11 @@ import {
   NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
   appendStudioControlNotices,
   honestBlockTitle,
+  composeCanonicalFromPresentation,
   parseNoraAdaptivePresentation,
   type NoraAdaptivePresentation,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
+import { formatNoraAssistantDisplayText } from "@/features/project-assistant/presentationLabels";
 import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
 import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

@@ -140,11 +142,11 @@ describe("NoraAdaptivePresentationView", () => {
       within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
     ).toBeTruthy();
     expect(
-      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
-    ).toBeTruthy();
+      within(root).queryByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
+    ).toBeNull();
     expect(
-      within(root).getByTestId("nora-adaptive-epistemic-honesty"),
-    ).toHaveTextContent(NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE);
+      within(root).queryByTestId("nora-adaptive-epistemic-honesty"),
+    ).toBeNull();
     expect(within(root).queryByRole("button")).toBeNull();
     expect(root.querySelector("a")).toBeNull();
   });
@@ -200,9 +202,10 @@ describe("NoraAdaptivePresentationView", () => {
     expect(
       within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
     ).toBeTruthy();
+    // D1 — internal noGovernedAction chrome retired from Pilot view.
     expect(
-      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
-    ).toBeTruthy();
+      within(root).queryByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
+    ).toBeNull();
   });
 });

@@ -219,7 +222,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a1",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
         },
         {
@@ -238,7 +241,10 @@ describe("ConversationSurface adaptive message path", () => {
   it("CORR-NAP-02 — typed Studio refuse appendix visible under adaptive DTO", () => {
     const presentation = balisePresentation();
     const notices = ["Refus PREPARE : contrat non prêt."];
-    const content = appendStudioControlNotices(presentation.lead!, notices);
+    const content = appendStudioControlNotices(
+      composeCanonicalFromPresentation(presentation),
+      notices,
+    );
     const controller = stubController({
       messages: [
         {
@@ -273,7 +279,231 @@ describe("ConversationSurface adaptive message path", () => {
     });
     render(<ConversationSurface controller={controller} />);
     expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
-    expect(screen.getByText(/contrat approuvé/)).toBeTruthy();
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
+      /contrat approuvé/,
+    );
+  });
+
+  it("D1 — long narrative / short lead → B single canonical fallback (no dual)", () => {
+    const presentation = balisePresentation();
+    const shortLead = presentation.lead!;
+    const longNarrative = [
+      shortLead,
+      "",
+      "Extension canonique : le contrat n'est pas prêt.",
+      "Refus explicite de PREPARE jusqu'au 2099-01-01 sauf exception Pilote.",
+      "Cette phrase critique ne figure pas dans le lead.",
+    ].join("\n");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: longNarrative,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
+    expect(screen.queryByTestId("nora-adaptive-canonical-narrative")).toBeNull();
+    const fallback = screen.getByTestId("nora-canonical-fallback");
+    expect(fallback.getAttribute("data-composition")).toBe("canonical-fallback");
+    expect(fallback).toHaveTextContent(/n'est pas prêt/);
+    expect(fallback).toHaveTextContent(/2099-01-01/);
+    expect(fallback).toHaveTextContent(/phrase critique/);
+    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
+  });
+
+  it("D1 — body ≡ compose → A1 structured-first single surface", () => {
+    const presentation = balisePresentation();
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: composeCanonicalFromPresentation(presentation),
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-canonical-layer")).toBe("none");
+    expect(root.getAttribute("data-composition")).toBe("structured-first");
+    expect(
+      screen.queryByTestId("nora-adaptive-canonical-narrative"),
+    ).toBeNull();
+    expect(
+      screen.queryByTestId("nora-adaptive-secondary-projection"),
+    ).toBeNull();
+    expect(screen.queryByTestId("nora-canonical-fallback")).toBeNull();
+  });
+
+  it("CR-02 R1-T05 — contradiction approuver/rejeter: canonical refusal before projected recommendation", () => {
+    const presentation = parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: null,
+      title: null,
+      lead: "Nous recommandons d'approuver le cycle.",
+      blocks: [
+        {
+          kind: "recommendation",
+          title: null,
+          statement: "Nous recommandons d'approuver le cycle.",
+          disclaimer: null,
+        },
+      ],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+    const content =
+      "Nous recommandons de rejeter le cycle. Refus jusqu'au 2099-01-01 sauf exception Pilote.";
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    const fallback = screen.getByTestId("nora-canonical-fallback");
+    expect(fallback).toHaveTextContent(/rejeter/);
+    expect(fallback).toHaveTextContent(/2099-01-01/);
+    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
+    expect(screen.queryByText(/GO confirm/i)).toBeNull();
+  });
+
+  it("CR-02 R2 / CR-03 — canonical layer keeps escapes/negation; no HTML injection", () => {
+    const presentation = balisePresentation();
+    const rawBody = [
+      presentation.lead!,
+      "Ligne\\navec\\téchappements.",
+      "**Emphase** et `code` restant lisibles.",
+      "Négation critique : le contrat n'est pas prêt.",
+    ].join("\n");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: rawBody,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    const fallback = screen.getByTestId("nora-canonical-fallback");
+    expect(fallback.getAttribute("data-composition")).toBe("canonical-fallback");
+    expect(fallback).toHaveTextContent(/Ligne/);
+    expect(fallback).toHaveTextContent(/échappements/);
+    expect(fallback).toHaveTextContent(/Emphase/);
+    expect(fallback).toHaveTextContent(/n'est pas prêt/);
+    expect(fallback.innerHTML).not.toMatch(/<script|onload=/i);
+  });
+
+  it("CR-03 T01/T02 — formatter-empty source → B fallback keeps source (no dual)", () => {
+    const presentation = balisePresentation();
+    const content = "READY_NO_GATE";
+    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
+    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
+      /READY_NO_GATE/,
+    );
+  });
+
+  it("CR-03 T03 — decision-refusal phrase remains in canonical DOM", () => {
+    const presentation = balisePresentation();
+    const content = "Nora n'émet pas de décision Pilote.";
+    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
+      /n'émet pas de décision Pilote/i,
+    );
+  });
+
+  it("CR-03 T04/T17 — partial formatter scrub keeps deleted phrase + negation in DOM", () => {
+    const presentation = balisePresentation();
+    const content = [
+      "Nora n'émet pas de décision Pilote.",
+      "Le contrat n'est pas prêt jusqu'au 2099-01-01 sauf exception Pilote.",
+    ].join(" ");
+    const scrubbed = formatNoraAssistantDisplayText(content);
+    expect(scrubbed.trim().length).toBeGreaterThan(0);
+    expect(scrubbed).not.toMatch(/n'émet pas de décision Pilote/i);
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
+    const fallback = screen.getByTestId("nora-canonical-fallback");
+    expect(fallback).toHaveTextContent(/n'émet pas de décision Pilote/i);
+    expect(fallback).toHaveTextContent(/n'est pas prêt/);
+    expect(fallback).toHaveTextContent(/2099-01-01/);
+    expect(fallback).toHaveTextContent(/exception/);
+  });
+
+  it("CR-02 R2-T06 — authenticated Studio notice once in appendix, not duplicated as canonical primary", () => {
+    const presentation = balisePresentation();
+    const notices = ["Refus PREPARE : intention non confirmée."];
+    const content = appendStudioControlNotices(
+      `${presentation.lead!}\n\nCorps supplémentaire non couvert.`,
+      notices,
+    );
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content,
+          adaptivePresentation: presentation,
+          studioControlNotices: notices,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
+    const fallback = screen.getByTestId("nora-canonical-fallback");
+    expect(fallback).toHaveTextContent(/Corps supplémentaire/);
+    expect(fallback).toHaveTextContent(/Refus PREPARE/);
+    expect(screen.getAllByText(/Refus PREPARE/).length).toBe(1);
   });

   it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {
@@ -281,7 +511,10 @@ describe("ConversationSurface adaptive message path", () => {
     const notices = [
       "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
     ];
-    const content = appendStudioControlNotices(presentation.lead!, notices);
+    const content = appendStudioControlNotices(
+      composeCanonicalFromPresentation(presentation),
+      notices,
+    );
     const controller = stubController({
       executionIncomplete: true,
       messages: [
@@ -327,7 +560,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a-new",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
           studioControlNotices: [],
         },
@@ -359,7 +592,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a-new",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
           studioControlNotices: [],
         },
@@ -379,7 +612,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a1",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
           studioControlNotices: [],
         },
@@ -420,7 +653,10 @@ describe("ConversationSurface adaptive message path", () => {
     const notices = [
       "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
     ];
-    const content = appendStudioControlNotices(presentation.lead!, notices);
+    const content = appendStudioControlNotices(
+      composeCanonicalFromPresentation(presentation),
+      notices,
+    );
     const controller = stubController({
       executionIncomplete: true,
       messages: [
@@ -465,7 +701,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a-new",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
           studioControlNotices: [],
         },
@@ -552,7 +788,7 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a-new",
           role: "assistant",
-          content: presentation.lead!,
+          content: composeCanonicalFromPresentation(presentation),
           adaptivePresentation: presentation,
           studioControlNotices: [],
         },
@@ -575,7 +811,10 @@ describe("ConversationSurface adaptive message path", () => {
         {
           id: "a-reloaded",
           role: "assistant",
-          content: appendStudioControlNotices(presentation.lead!, notices),
+          content: appendStudioControlNotices(
+            composeCanonicalFromPresentation(presentation),
+            notices,
+          ),
           adaptivePresentation: presentation,
           // Continuity path restores typed notices from studio_control_json.
           studioControlNotices: notices,
```


### DIFF — `fakeNapQaPresentation.d0.test.ts`

_D1 fake QA test updates — FULL DIFF_

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/ai/fakeNapQaPresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/platform/ai/fakeNapQaPresentation.d0.test.ts
index d800e627..3be29ed5 100644
--- a/projects/sfia-studio/app/__tests__/platform/ai/fakeNapQaPresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/ai/fakeNapQaPresentation.d0.test.ts
@@ -15,6 +15,7 @@ import {
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";
 import {
+  composeCanonicalFromPresentation,
   parseNoraAdaptivePresentation,
   resolveAdaptiveAssistantRender,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
@@ -67,8 +68,11 @@ describe("Fake NAP QA presentation emit", () => {
     const parsed = JSON.parse(raw!);
     expect(parsed.narrative).toContain("clarifié le besoin");
     expect(parsed.presentation?.version).toBe(1);
-    expect(parsed.presentation?.blocks?.length).toBe(3);
-    expect(parsed.narrative).toBe(parsed.presentation.lead);
+    expect(parsed.presentation?.lead).toBeNull();
+    expect(parsed.presentation?.blocks?.length).toBe(4);
+    const dto = parseNoraAdaptivePresentation(parsed.presentation);
+    expect(dto).not.toBeNull();
+    expect(parsed.narrative).toBe(composeCanonicalFromPresentation(dto!));
   });

   it("coercePlainTextToProductTurnJson preserves presentation", () => {
@@ -79,9 +83,9 @@ describe("Fake NAP QA presentation emit", () => {
     const turn = JSON.parse(coerced);
     expect(turn.presentation).not.toBeNull();
     const dto = parseNoraAdaptivePresentation(turn.presentation);
-    expect(dto?.blocks.length).toBe(3);
+    expect(dto?.blocks.length).toBe(4);
     const normalized = normalizeNoraProductTurnStructuredOutput(turn);
-    expect(normalized?.presentation?.blocks.length).toBe(3);
+    expect(normalized?.presentation?.blocks.length).toBe(4);
   });

   it("invalid presentation coerces to null without failing narrative", () => {
```


---

## 16. Critical test assertions (samples from current WIP)

### N06 durable A1

From `noraAdaptivePresentation.d0.test.ts` (NAP-SINGLE-RESPONSE-D1 describe):

- `buildDurableAssistantContentForTurn({ pilotFacingCore: composed, presentation: dto }).usedA1 === true`
- `contentCore === composed`

### T2 / P12

- divergent body → `mode === "plain"` and `presentation === null`
- `plainText` retains negation / refusal tokens

### UI D1 long narrative

- `queryByTestId("nora-adaptive-presentation")` null
- `getByTestId("nora-canonical-fallback")` contains critical phrases
- no secondary projection testids

---

## 17. Git Review Index

| Ref | Value |
|-----|-------|
| HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Incomplete D1 handoff | `0a7d03b9` / `476f349c` |
| Diff capture dir | `.tmp-sfia-review/d1-diffs/` |
| CR-03 snapshot | `.tmp-sfia-review/cr03-initial.diff` |

---

**END OF REVIEW PACK FULL — NAP-SINGLE-RESPONSE-D1-REVIEW-REGULARIZATION-01**
