# SFIA Review Pack — FULL
# P6-HQA-01 — Git Integration / Draft PR #575
# Cycle 13 — PR readiness (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 14:36:46 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-01** — Conversation, Recommendations & Journal Continuity
- Milestone : P6 — Global Integrated Product QA
- Cycle projet : **13 — PR readiness / Git Integration**
- Profil : **Standard**
- Typologie : EVOL corrective bornée
- Capacités v3 : V3-F05, V3-F04, V3-F02, V3-F14
- GO Morris : commit / push / Draft PR / CI **AUTHORIZED** ; merge **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- READY FOR MERGE : **NO**
- Synthesis only : **no**
- Prior handoffs supersédés pour ce cycle : `efba65eb` (HQA local), `30cd9152` (COG-01 local)

---

## 1. Local Git Truth Check (pré-intégration)

| Check | Result |
|-------|--------|
| Workspace historique | `/Users/morris/Projects/sfia-workspace` |
| Branche historique | `qa/sfia-studio-p6-global-integrated-product-qa` @ `980064c0` |
| `origin/main` | `73cc58b38a55f80b0a7eabdf9337f9f6e35577a3` |
| Staged historique | vide |
| Collision | **NON** — C14 / tmp / p6-campaign / C14 reserves préservés |
| Branche corrective préexistante | **absente** (local + remote) |

---

## 2. Sources

Gouvernance Build Doctrine / Roadmap / C1 ; doctrine 30/33 ; Product Simplification 02/03/04/06/07 ; routing + template v2.6 ; Review Handoff COG-01 `30cd9152`.

CKC Cycle 13 : fallback synthétique autorisé (pas de CKC détaillé inventé).

Convergence : Build Doctrine ACTIVE ON MAIN ; P6 applicable ; Nora compositeur ADAPT ; ConversationSurface/JournalSurface ADAPT ; nouveau moteur NONE.

---

## 3. Stratégie Git réellement utilisée

1. Préserver workspace historique intact (`980064c0` + modifications locales).
2. Créer worktree dédié depuis `origin/main` :
   - path : `/Users/morris/Projects/sfia-workspace-p6-hqa-01`
   - branche : `fix/studio-p6-hqa-01-conversation-recommendations`
   - base : `73cc58b3` (merge #574)
3. Patch Git limité aux 6 fichiers suivis (`git apply --check` puis apply).
4. Copie séparée du nouveau test REC-03.
5. Vérification `cmp` identité contenu historique ↔ worktree (7/7 OK).
6. Aucun cherry-pick #574, aucun rebase, aucune mutation de la branche QA.

---

## 4. Commit projet

| Item | Value |
|------|-------|
| Message | `fix(studio): address P6 Human QA conversation and recommendation issues` |
| SHA | `8f61da8fb3f2e77d698fa94a123971be57d8ff9d` |
| Fichiers | **7** (allowlist exacte) |
| Base | `origin/main` `73cc58b3` |
| Ahead of main | **1** commit only |

### `git diff --name-status origin/main...HEAD`

```
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
```

### Diff stat

```
 7 files changed, 391 insertions(+), 10 deletions(-)
```

Aucun fichier #574 hors périmètre ; C14/tmp/p6-campaign **exclus**.

Correction typecheck locale (allowlist) : props Journal requises ajoutées au test REC-03 avant commit (`cycleInstanceId`, `selectedEntryId`, handlers).

---

## 5. Push + Draft PR

| Item | Value |
|------|-------|
| Push | `origin/fix/studio-p6-hqa-01-conversation-recommendations` @ `8f61da8fb3f2e77d698fa94a123971be57d8ff9d` |
| PR | **#575** DRAFT |
| URL | https://github.com/mcleland147/sfia-workspace/pull/575 |
| Base | `main` |
| Head | `fix/studio-p6-hqa-01-conversation-recommendations` |
| Merge | **NOT AUTHORIZED** |

---

## 6. CI GitHub — SUCCESS

Workflow : **SFIA Studio CI**
Run : https://github.com/mcleland147/sfia-workspace/actions/runs/38052033300

| Job | ID | Conclusion |
|-----|-----|------------|
| Detect SFIA Studio changes | 114212935567 | SUCCESS |
| Build and validate SFIA Studio | 114212964336 | SUCCESS (~7m50s) |
| SFIA Studio Required Gate | 114214373394 | SUCCESS |

Jobs Build : Typecheck, Lint, Build, Unit tests (Vitest), Modeled governance, Secret scan, Trailing whitespace — all PASS.

---

## 7. Validations locales (worktree correctif)

| Check | Result |
|-------|--------|
| NCI + COG-01 | **28 PASS** |
| UX Recommendation Continuity | **6 PASS** |
| REC-03 Journal label | **1 PASS** |
| Total ciblé | **35 PASS** |
| `npm run typecheck` | **PASS** |
| ESLint allowlist | **0 errors** (2 warnings unused imports préexistants NCI) |
| `git diff --check` | **PASS** |

Fake/Real : **DETERMINISTIC PROVEN AT TESTED SCOPE**. Pas de REAL supplémentaire.

UX/Figma : changements de contenu uniquement ; conformité Figma forte **non revendiquée** (réserve).

---

## 8. Fichier créé — contenu complet

`projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx`

```tsx
/**
 * P6-HQA REC-03 — Journal Work Recommendation status label honesty.
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

describe("P6-HQA REC-03 Journal recommendation label", () => {
  it("active undipositioned Work Recommendation is « À examiner », not unanswered-chat wording", () => {
    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cycinst:test"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        recommendations={[
          {
            epistemicItemId: "epi:acw:rec03",
            statement: "Clarifier les responsabilités de suivi",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: "cycinst:test",
            createdAt: "2026-10-10T10:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:rec03",
          },
        ]}
        decisions={[]}
        reservations={[]}
        memoryTab="recommandations"
      />,
    );
    expect(screen.queryByText(/en attente de votre réponse/i)).toBeNull();
    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText("Clarifier les responsabilités de suivi"),
    ).toBeTruthy();
  });
});
```

---

## 9. Sections Product modifiées (extraits complets utiles)

### 9.1 COG-01 helpers + compose (`noraProductTurnOutputType.ts`)

```typescript
/** Normalize Pilot-facing prose for near-duplicate continuation detection. */
function normalizePilotContinuationCompare(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Conversational closing-ask cues (FR). Includes Human QA paraphrases that do
 * not use « Souhaitez-vous » (imperatives, correspond-il, était-ce, trailing ?).
 */
const CONTINUATION_INVITE_RE =
  /\b(souhaitez[- ]vous|voulez[- ]vous|souhaites[- ]tu|que souhaitez|quelle est|quelles? |comment voulez|prefereriez[- ]vous|preferez[- ]vous|on peut|je (te|vous) propose|raconte[- ]moi|dis[- ]moi|explique[- ]moi|decrivons|decris|parle[- ]moi|correspond[- ]il|etait[- ]ce|est[- ]ce que|quest[- ]ce)\b/i;

/** Discourse / filler tokens ignored when comparing ask payloads. */
const CONTINUATION_COMPARE_STOP = new Set([
  "le",
  "la",
  "les",
  "de",
  "des",
  "du",
  "un",
  "une",
  "et",
  "ou",
  "que",
  "qui",
  "l",
  "on",
  "par",
  "pour",
  "au",
  "aux",
  "a",
  "en",
  "je",
  "tu",
  "vous",
  "te",
  "me",
  "d",
  "y",
  "ce",
  "ces",
  "se",
  "ne",
  "pas",
  "plus",
  "avec",
  "dans",
  "sur",
  "aux",
  "commencer",
  "reprendre",
  "premier",
  "ensuite",
  "maintenant",
  "alors",
  "raconte",
  "moi",
  "decrivons",
  "decris",
  "dis",
  "explique",
  "parle",
  "seulement",
  "celles",
  "ceux",
  "cette",
  "cet",
  "ete",
  "etait",
  "etaient",
  "sont",
  "est",
  "il",
  "elle",
  "ils",
  "elles",
]);

function isConversationalAsk(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  if (/\?\s*$/.test(t)) return true;
  return CONTINUATION_INVITE_RE.test(t);
}

/** Prefer the informational payload after a colon (common Human QA pattern). */
function askComparePayload(text: string): string {
  const raw = text.trim();
  const colon = raw.lastIndexOf(":");
  if (colon >= 0 && colon < raw.length - 3) {
    const after = raw.slice(colon + 1).trim();
    if (after.length >= 12) return after;
  }
  return raw;
}

function continuationContentTokens(text: string): Set<string> {
  return new Set(
    normalizePilotContinuationCompare(text)
      .split(" ")
      .filter((w) => w.length > 2 && !CONTINUATION_COMPARE_STOP.has(w)),
  );
}

/**
 * Overlap coefficient on content tokens — catches paraphrases of the same ask
 * without requiring identical invite phrasing (P6-HQA COG-01 Human QA cases).
 */
function asksShareEquivalentContent(aRaw: string, bRaw: string): boolean {
  const pairs: Array<[string, string]> = [
    [aRaw, bRaw],
    [askComparePayload(aRaw), askComparePayload(bRaw)],
    [askComparePayload(aRaw), bRaw],
    [aRaw, askComparePayload(bRaw)],
  ];
  for (const [left, right] of pairs) {
    const a = continuationContentTokens(left);
    const b = continuationContentTokens(right);
    if (a.size === 0 || b.size === 0) continue;
    let inter = 0;
    for (const w of a) if (b.has(w)) inter += 1;
    const smaller = Math.min(a.size, b.size);
    const union = a.size + b.size - inter;
    const jaccard = union === 0 ? 0 : inter / union;
    const containment = smaller === 0 ? 0 : inter / smaller;
    // Require enough shared substance; containment covers asymmetric paraphrases
    // (e.g. « type d'entreprise » ↔ « entreprise de huit personnes » + same fork).
    // inter >= 3 preserves the prior near-duplicate « Souhaitez-vous … » path.
    if (inter >= 3 && (jaccard >= 0.45 || containment >= 0.55)) {
      return true;
    }
  }
  return false;
}

/** Closing ask candidates: question-like sentences in the last paragraph. */
function extractClosingAskCandidates(narrative: string): string[] {
  const paragraphs = narrative
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const lastPara = paragraphs[paragraphs.length - 1] ?? narrative.trim();
  const sentences = lastPara
    .split(/(?<=[.!?…])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const asks = sentences.filter(isConversationalAsk);
  if (asks.length > 0) return asks;
  // Fallback: whole last paragraph / last sentence when invite cues are weak.
  if (sentences.length > 0) return [sentences[sentences.length - 1]!];
  return lastPara ? [lastPara] : [];
}

/**
 * True when narrative already carries the same (or near-duplicate) continuation
 * as guidance.statement — avoids stacking two nearly identical closing invites.
 * Exact substring match remains the primary path; similarity covers distinct
 * phrasings of the same invitation (P6-HQA COG-01), including Human QA
 * paraphrases that do not share a « Souhaitez-vous » surface form.
 */
export function narrativeAlreadyCarriesGuidanceContinuation(
  narrative: string,
  statement: string,
): boolean {
  const nRaw = narrative.trim();
  const sRaw = statement.trim();
  if (!sRaw) return true;
  if (!nRaw) return false;
  if (nRaw.includes(sRaw)) return true;

  const n = normalizePilotContinuationCompare(nRaw);
  const s = normalizePilotContinuationCompare(sRaw);
  if (!s || s.length < 12) return false;
  if (n.includes(s)) return true;

  const candidates = extractClosingAskCandidates(nRaw);
  const guidanceIsAsk = isConversationalAsk(sRaw);

  for (const candidate of candidates) {
    const last = normalizePilotContinuationCompare(candidate);
    if (!last) continue;
    if (last.includes(s) || (last.length >= 12 && s.includes(last))) {
      return true;
    }

    // Same (or near-same) conversational ask — paraphrase-tolerant, content-gated.
    // Both sides must look like invites/questions so distinct body prose is never
    // treated as a duplicate of guidance.statement.
    if (
      guidanceIsAsk &&
      isConversationalAsk(candidate) &&
      asksShareEquivalentContent(candidate, sRaw)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Compose Pilot-facing assistant text for history continuity.
 * narrative + conversationGuidance.statement — no internal field names,
 * no "PROCHAINE ÉTAPE :" label.
 * P6-HQA COG-01 — do not append a near-duplicate closing invitation.
 */
export function composePilotFacingAssistantText(
  narrative: string,
  guidance: ConversationGuidance | null | undefined,
  structuredRecommendation?: {
    readonly optionLabel: string;
    readonly recommendedOptionRef: string;
  } | null,
): string {
  const n = narrative.trim();
  let out = n;
  if (guidance) {
    const statement = guidance.statement.trim();
    if (statement) {
      if (!out) out = statement;
      else if (!narrativeAlreadyCarriesGuidanceContinuation(out, statement)) {
        out = `${out}\n\n${statement}`;
      }
    }
  }
  if (structuredRecommendation?.optionLabel?.trim()) {
    const label = structuredRecommendation.optionLabel.trim();
    const block = `Recommandation structurée (pas une décision) : « ${label} ».`;
    if (!out.includes(label) && !out.includes(block)) {
      out = out ? `${out}\n\n${block}` : block;
    }
  }
  return out;
}
```

### 9.2 COG-01 tests (bloc)

```typescript
  it("COG-01 — near-duplicate closing invite is not stacked twice", () => {
    const narrative =
      "Le besoin est clair. Souhaitez-vous que l'on commence par les responsabilités et les retards ?";
    const g = guidance(
      "ASK_CLARIFICATION",
      "ACTIVE_CYCLE",
      "Souhaitez-vous commencer par les responsabilités et les retards ?",
      null,
    );
    const pilot = composePilotFacingAssistantText(narrative, g);
    const matches = pilot.match(/Souhaitez-vous/gi) ?? [];
    expect(matches.length).toBe(1);
    expect(pilot).toContain("Le besoin est clair");
  });

  it("COG-01 — Human QA retard/responsabilité paraphrase is not stacked", () => {
    // Exact Human QA formulations (P6-HQA-01) — same information ask, distinct phrasing.
    const narrativeInvite =
      "Pour commencer, raconte-moi un retard précis : quelle tâche était en jeu, et qu’est-ce que les personnes concernées pensaient à ce moment-là de qui devait s’en charger ?";
    const guidanceInvite =
      "Décrivons un retard précis : quelle tâche était en jeu, et qu’est-ce que les personnes concernées pensaient de la responsabilité à ce moment-là ?";
    const narrative = `Les retards semblent liés à des responsabilités floues.\n\n${narrativeInvite}`;
    const g = guidance("ASK_CLARIFICATION", "ACTIVE_CYCLE", guidanceInvite, null);
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot).toContain("Les retards semblent liés");
    expect(pilot).toContain(narrativeInvite);
    expect(pilot).not.toContain(guidanceInvite);
    expect((pilot.match(/\?/g) ?? []).length).toBe(1);
  });

  it("COG-01 — Human QA entreprise de huit personnes paraphrase is not stacked", () => {
    const narrativeInvite =
      "Pour reprendre le premier : ce type d’entreprise correspond-il à celles que tu souhaites étudier, ou était-ce seulement un exemple ?";
    const guidanceInvite =
      "L’exemple de l’entreprise de huit personnes correspond-il au type d’entreprise que tu souhaites étudier, ou était-ce seulement un scénario illustratif ?";
    const narrative = `Tu as mentionné une entreprise de huit personnes.\n\n${narrativeInvite}`;
    const g = guidance("ASK_CLARIFICATION", "ACTIVE_CYCLE", guidanceInvite, null);
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot).toContain("entreprise de huit personnes");
    expect(pilot).toContain(narrativeInvite);
    expect(pilot).not.toContain(guidanceInvite);
    expect((pilot.match(/\?/g) ?? []).length).toBe(1);
  });

  it("COG-01 — distinct continuation is still appended once", () => {
    const narrative = "Voici la synthèse des difficultés observées.";
    const g = guidance(
      "RECOMMEND_NEXT_STEP",
      "ACTIVE_CYCLE",
      "Je te propose maintenant d'examiner la visibilité sur l'avancement.",
      null,
    );
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot).toContain("synthèse des difficultés");
    expect(pilot).toContain("visibilité sur l'avancement");
  });

  it("COG-01 — distinct asks on retard keep both (responsabilités ≠ conséquences)", () => {
    const narrative =
      "Le défaut de clarté est confirmé. Quelles étaient les responsabilités sur ce retard ?";
    const g = guidance(
      "ASK_CLARIFICATION",
      "ACTIVE_CYCLE",
      "Quelles ont été les conséquences de ce retard pour l’équipe ?",
      null,
    );
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot).toContain("responsabilités sur ce retard");
    expect(pilot).toContain("conséquences de ce retard");
    expect((pilot.match(/\?/g) ?? []).length).toBe(2);
  });

  it("COG-01 — distinct asks on entreprise keep both (type ≠ nombre de projets)", () => {
    const narrative =
      "Reprenons. Ce type d’entreprise correspond-il à celles que tu souhaites étudier ?";
    const g = guidance(
      "ASK_CLARIFICATION",
      "ACTIVE_CYCLE",
      "Combien de projets mènent-ils en parallèle typiquement ?",
      null,
    );
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot).toContain("type d’entreprise");
    expect(pilot).toContain("Combien de projets");
    expect((pilot.match(/\?/g) ?? []).length).toBe(2);
  });

  it("COG-01 — narrative without closing invite still receives useful continuation", () => {
    const narrative =
      "Les difficultés de gestion de projets sont bien identifiées pour ce Cadrage.";
    const g = guidance(
      "ASK_CLARIFICATION",
      "ACTIVE_CYCLE",
      "Peux-tu décrire un retard précis observé récemment ?",
      null,
    );
    const pilot = composePilotFacingAssistantText(narrative, g);
    expect(pilot.startsWith(narrative)).toBe(true);
    expect(pilot).toContain("retard précis observé");
    expect(pilot).not.toMatch(/conversationGuidance|preCycleRoutingAssessment/i);
  });

  it("COG-01 — absent guidance leaves narrative unchanged", () => {
    const narrative = "Synthèse utile sans suite structurée.";
    expect(composePilotFacingAssistantText(narrative, null)).toBe(narrative);
    expect(composePilotFacingAssistantText(narrative, undefined)).toBe(narrative);
  });
```

### 9.3 REC-03 Journal label

```typescript
function recommendationCurrentnessLabel(card: JournalRecommendationCard): string {
  if (card.status === "resolved") return "Traitée";
  if (card.status === "rejected") return "Écartée";
  if (card.status === "superseded") return "Remplacée";
  if (card.dispositionDecisionId) return "Dispositionnée";
  // REC-03 — active ≠ « unanswered chat ». Align with Conversation « À examiner »:
  // durable status without disposition; discussion alone does not dispose.
  return "À examiner";
}

/** A Work Recommendation still awaiting an explicit Pilot disposition. */
```

### 9.4 ConversationSurface (diff commit)

```diff
commit 8f61da8fb3f2e77d698fa94a123971be57d8ff9d
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 10 14:27:25 2026 +0200

    fix(studio): address P6 Human QA conversation and recommendation issues

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 1c1f8e68..efff6c9c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -1793,7 +1793,9 @@ export function ConversationSurface({
                   >
                     <div className={styles.p3CardHead}>
                       <div className={styles.p3CardBody}>
-                        <p className={styles.p3CardEyebrow}>Recommandation</p>
+                        <p className={styles.p3CardEyebrow}>
+                          Recommandation active du cycle
+                        </p>
                         <p
                           className={styles.p3CardTitle}
                           data-testid="durable-recommendation-label"
@@ -1801,7 +1803,8 @@ export function ConversationSurface({
                           {card.statement}
                         </p>
                         <p className={styles.p3CardStamp}>
-                          RECOMMANDATION — PAS UNE DÉCISION
+                          RECOMMANDATION DURABLE — PAS UNE DÉCISION · PAS LIÉE
+                          UNIQUEMENT À CE TOUR
                         </p>
                       </div>
                       <div className={styles.p3CardRight}>
@@ -1837,10 +1840,8 @@ export function ConversationSurface({
                         data-testid="durable-recommendation-details"
                       >
                         <dl className={styles.facts}>
-                          <div className={styles.factWide}>
-                            <dt>Proposition</dt>
-                            <dd>{card.statement}</dd>
-                          </div>
+                          {/* UX-REC-01 — do not repeat card.statement under
+                              « Proposition »; title already shows it once. */}
                           <div className={styles.factWide}>
                             <dt>Statut</dt>
                             <dd data-testid="durable-recommendation-materiality">
@@ -1850,7 +1851,9 @@ export function ConversationSurface({
                               une décision. Vous pouvez l&apos;examiner, en
                               discuter, ou la laisser en suspens. Une décision
                               structurelle reste requise seulement lorsque le
-                              sujet l&apos;exige vraiment.
+                              sujet l&apos;exige vraiment. Les recommandations
+                              actives restent listées dans Journal ›
+                              Recommandations.
                             </dd>
                           </div>
                         </dl>
```

### 9.5 buildProjectSystemPrompt (diff commit)

```diff
commit 8f61da8fb3f2e77d698fa94a123971be57d8ff9d
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 10 14:27:25 2026 +0200

    fix(studio): address P6 Human QA conversation and recommendation issues

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index 177a9ffc..ea46da10 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -215,6 +215,9 @@ export function buildProjectSystemPrompt(
     "  → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.",
     "- Cognitive Stop → HOLD + BLOCKER_RESOLUTION (outranks transition / réutilisation).",
     "UNE seule continuation principale par défaut. Pas de liste générique de cinq idées.",
+    "COG-01 — Si la narrative se termine déjà par une invitation ou question de suite,",
+    "ne reformule PAS une seconde question distincte dans conversationGuidance.statement ;",
+    "réutilise la même formulation (ou laisse statement redondant volontairement).",
     "Ne demande pas confirmation pour des détails non matériels.",
     "Avance sous Hypothesis explicite lorsque la doctrine actuelle l'autorise.",
     "Ne propose JAMAIS Cursor / Execution comme initiative autonome.",
```

### 9.6 UX continuity test (diff commit)

```diff
commit 8f61da8fb3f2e77d698fa94a123971be57d8ff9d
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 10 14:27:25 2026 +0200

    fix(studio): address P6 Human QA conversation and recommendation issues

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
index e80185ed..458ecea6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
@@ -129,6 +129,17 @@ describe("P6 UX Recommendation Continuity + FIX-01/02/03", () => {
     ).textContent;
     expect(materiality).toMatch(/n'est pas automatiquement une décision/i);
     expect(materiality).not.toMatch(/opérationnelle/i);
+    // UX-REC-01 — statement shown once in title; not repeated under Proposition.
+    expect(screen.queryByText("Proposition")).toBeNull();
+    const statementHits = screen.getAllByText(
+      /Commencer par recueillir des exemples concrets de difficultés vécues/,
+    );
+    expect(statementHits).toHaveLength(1);
+    // REC-02 — durable cycle card, not implied as this-turn-only answer.
+    expect(screen.getByText(/Recommandation active du cycle/i)).toBeTruthy();
+    expect(
+      screen.getByText(/PAS LIÉE\s+UNIQUEMENT À CE TOUR/i),
+    ).toBeTruthy();
     fireEvent.click(screen.getByTestId("conversation-discuss-recommendation"));
     expect(onDiscuss).toHaveBeenCalledWith("epi:acw:ux02");
   });
```

---

## 10. Patch commit complet (`git show 8f61da8fb3f2e77d698fa94a123971be57d8ff9d`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
new file mode 100644
index 00000000..bd0144ad
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
@@ -0,0 +1,44 @@
+/**
+ * P6-HQA REC-03 — Journal Work Recommendation status label honesty.
+ * @vitest-environment jsdom
+ */
+import { describe, expect, it } from "vitest";
+import { render, screen } from "@testing-library/react";
+import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";
+
+describe("P6-HQA REC-03 Journal recommendation label", () => {
+  it("active undipositioned Work Recommendation is « À examiner », not unanswered-chat wording", () => {
+    render(
+      <JournalSurface
+        entries={[]}
+        cycleInstanceId="cycinst:test"
+        selectedEntryId={null}
+        onSelectEntry={() => {}}
+        onViewExchanges={() => {}}
+        onFocusTurn={() => {}}
+        recommendations={[
+          {
+            epistemicItemId: "epi:acw:rec03",
+            statement: "Clarifier les responsabilités de suivi",
+            status: "active",
+            source: "active-cycle-work:nora",
+            optionSetRef: null,
+            proposalId: null,
+            cycleInstanceId: "cycinst:test",
+            createdAt: "2026-10-10T10:00:00.000Z",
+            dispositionDecisionId: null,
+            workRecommendationEpistemicItemId: "epi:acw:rec03",
+          },
+        ]}
+        decisions={[]}
+        reservations={[]}
+        memoryTab="recommandations"
+      />,
+    );
+    expect(screen.queryByText(/en attente de votre réponse/i)).toBeNull();
+    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
+    expect(
+      screen.getByText("Clarifier les responsabilités de suivi"),
+    ).toBeTruthy();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
index e80185ed..458ecea6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
@@ -129,6 +129,17 @@ describe("P6 UX Recommendation Continuity + FIX-01/02/03", () => {
     ).textContent;
     expect(materiality).toMatch(/n'est pas automatiquement une décision/i);
     expect(materiality).not.toMatch(/opérationnelle/i);
+    // UX-REC-01 — statement shown once in title; not repeated under Proposition.
+    expect(screen.queryByText("Proposition")).toBeNull();
+    const statementHits = screen.getAllByText(
+      /Commencer par recueillir des exemples concrets de difficultés vécues/,
+    );
+    expect(statementHits).toHaveLength(1);
+    // REC-02 — durable cycle card, not implied as this-turn-only answer.
+    expect(screen.getByText(/Recommandation active du cycle/i)).toBeTruthy();
+    expect(
+      screen.getByText(/PAS LIÉE\s+UNIQUEMENT À CE TOUR/i),
+    ).toBeTruthy();
     fireEvent.click(screen.getByTestId("conversation-discuss-recommendation"));
     expect(onDiscuss).toHaveBeenCalledWith("epi:acw:ux02");
   });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
index 93d51614..a7b7900b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
@@ -281,6 +281,114 @@ describe("NORA-CONVERSATIONAL-INITIATIVE-01 (deterministic)", () => {
     expect(pilot).not.toMatch(/PROCHAINE ÉTAPE\s*:/i);
   });

+  it("COG-01 — near-duplicate closing invite is not stacked twice", () => {
+    const narrative =
+      "Le besoin est clair. Souhaitez-vous que l'on commence par les responsabilités et les retards ?";
+    const g = guidance(
+      "ASK_CLARIFICATION",
+      "ACTIVE_CYCLE",
+      "Souhaitez-vous commencer par les responsabilités et les retards ?",
+      null,
+    );
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    const matches = pilot.match(/Souhaitez-vous/gi) ?? [];
+    expect(matches.length).toBe(1);
+    expect(pilot).toContain("Le besoin est clair");
+  });
+
+  it("COG-01 — Human QA retard/responsabilité paraphrase is not stacked", () => {
+    // Exact Human QA formulations (P6-HQA-01) — same information ask, distinct phrasing.
+    const narrativeInvite =
+      "Pour commencer, raconte-moi un retard précis : quelle tâche était en jeu, et qu’est-ce que les personnes concernées pensaient à ce moment-là de qui devait s’en charger ?";
+    const guidanceInvite =
+      "Décrivons un retard précis : quelle tâche était en jeu, et qu’est-ce que les personnes concernées pensaient de la responsabilité à ce moment-là ?";
+    const narrative = `Les retards semblent liés à des responsabilités floues.\n\n${narrativeInvite}`;
+    const g = guidance("ASK_CLARIFICATION", "ACTIVE_CYCLE", guidanceInvite, null);
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot).toContain("Les retards semblent liés");
+    expect(pilot).toContain(narrativeInvite);
+    expect(pilot).not.toContain(guidanceInvite);
+    expect((pilot.match(/\?/g) ?? []).length).toBe(1);
+  });
+
+  it("COG-01 — Human QA entreprise de huit personnes paraphrase is not stacked", () => {
+    const narrativeInvite =
+      "Pour reprendre le premier : ce type d’entreprise correspond-il à celles que tu souhaites étudier, ou était-ce seulement un exemple ?";
+    const guidanceInvite =
+      "L’exemple de l’entreprise de huit personnes correspond-il au type d’entreprise que tu souhaites étudier, ou était-ce seulement un scénario illustratif ?";
+    const narrative = `Tu as mentionné une entreprise de huit personnes.\n\n${narrativeInvite}`;
+    const g = guidance("ASK_CLARIFICATION", "ACTIVE_CYCLE", guidanceInvite, null);
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot).toContain("entreprise de huit personnes");
+    expect(pilot).toContain(narrativeInvite);
+    expect(pilot).not.toContain(guidanceInvite);
+    expect((pilot.match(/\?/g) ?? []).length).toBe(1);
+  });
+
+  it("COG-01 — distinct continuation is still appended once", () => {
+    const narrative = "Voici la synthèse des difficultés observées.";
+    const g = guidance(
+      "RECOMMEND_NEXT_STEP",
+      "ACTIVE_CYCLE",
+      "Je te propose maintenant d'examiner la visibilité sur l'avancement.",
+      null,
+    );
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot).toContain("synthèse des difficultés");
+    expect(pilot).toContain("visibilité sur l'avancement");
+  });
+
+  it("COG-01 — distinct asks on retard keep both (responsabilités ≠ conséquences)", () => {
+    const narrative =
+      "Le défaut de clarté est confirmé. Quelles étaient les responsabilités sur ce retard ?";
+    const g = guidance(
+      "ASK_CLARIFICATION",
+      "ACTIVE_CYCLE",
+      "Quelles ont été les conséquences de ce retard pour l’équipe ?",
+      null,
+    );
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot).toContain("responsabilités sur ce retard");
+    expect(pilot).toContain("conséquences de ce retard");
+    expect((pilot.match(/\?/g) ?? []).length).toBe(2);
+  });
+
+  it("COG-01 — distinct asks on entreprise keep both (type ≠ nombre de projets)", () => {
+    const narrative =
+      "Reprenons. Ce type d’entreprise correspond-il à celles que tu souhaites étudier ?";
+    const g = guidance(
+      "ASK_CLARIFICATION",
+      "ACTIVE_CYCLE",
+      "Combien de projets mènent-ils en parallèle typiquement ?",
+      null,
+    );
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot).toContain("type d’entreprise");
+    expect(pilot).toContain("Combien de projets");
+    expect((pilot.match(/\?/g) ?? []).length).toBe(2);
+  });
+
+  it("COG-01 — narrative without closing invite still receives useful continuation", () => {
+    const narrative =
+      "Les difficultés de gestion de projets sont bien identifiées pour ce Cadrage.";
+    const g = guidance(
+      "ASK_CLARIFICATION",
+      "ACTIVE_CYCLE",
+      "Peux-tu décrire un retard précis observé récemment ?",
+      null,
+    );
+    const pilot = composePilotFacingAssistantText(narrative, g);
+    expect(pilot.startsWith(narrative)).toBe(true);
+    expect(pilot).toContain("retard précis observé");
+    expect(pilot).not.toMatch(/conversationGuidance|preCycleRoutingAssessment/i);
+  });
+
+  it("COG-01 — absent guidance leaves narrative unchanged", () => {
+    const narrative = "Synthèse utile sans suite structurée.";
+    expect(composePilotFacingAssistantText(narrative, null)).toBe(narrative);
+    expect(composePilotFacingAssistantText(narrative, undefined)).toBe(narrative);
+  });
+
   it("T2 — routing-blocking → ASK_CLARIFICATION + PRE_CYCLE", () => {
     const g = guidance(
       "ASK_CLARIFICATION",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 1c1f8e68..efff6c9c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -1793,7 +1793,9 @@ export function ConversationSurface({
                   >
                     <div className={styles.p3CardHead}>
                       <div className={styles.p3CardBody}>
-                        <p className={styles.p3CardEyebrow}>Recommandation</p>
+                        <p className={styles.p3CardEyebrow}>
+                          Recommandation active du cycle
+                        </p>
                         <p
                           className={styles.p3CardTitle}
                           data-testid="durable-recommendation-label"
@@ -1801,7 +1803,8 @@ export function ConversationSurface({
                           {card.statement}
                         </p>
                         <p className={styles.p3CardStamp}>
-                          RECOMMANDATION — PAS UNE DÉCISION
+                          RECOMMANDATION DURABLE — PAS UNE DÉCISION · PAS LIÉE
+                          UNIQUEMENT À CE TOUR
                         </p>
                       </div>
                       <div className={styles.p3CardRight}>
@@ -1837,10 +1840,8 @@ export function ConversationSurface({
                         data-testid="durable-recommendation-details"
                       >
                         <dl className={styles.facts}>
-                          <div className={styles.factWide}>
-                            <dt>Proposition</dt>
-                            <dd>{card.statement}</dd>
-                          </div>
+                          {/* UX-REC-01 — do not repeat card.statement under
+                              « Proposition »; title already shows it once. */}
                           <div className={styles.factWide}>
                             <dt>Statut</dt>
                             <dd data-testid="durable-recommendation-materiality">
@@ -1850,7 +1851,9 @@ export function ConversationSurface({
                               une décision. Vous pouvez l&apos;examiner, en
                               discuter, ou la laisser en suspens. Une décision
                               structurelle reste requise seulement lorsque le
-                              sujet l&apos;exige vraiment.
+                              sujet l&apos;exige vraiment. Les recommandations
+                              actives restent listées dans Journal ›
+                              Recommandations.
                             </dd>
                           </div>
                         </dl>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index 848927f4..cc318236 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -133,7 +133,9 @@ function recommendationCurrentnessLabel(card: JournalRecommendationCard): string
   if (card.status === "rejected") return "Écartée";
   if (card.status === "superseded") return "Remplacée";
   if (card.dispositionDecisionId) return "Dispositionnée";
-  return "En attente de votre réponse";
+  // REC-03 — active ≠ « unanswered chat ». Align with Conversation « À examiner »:
+  // durable status without disposition; discussion alone does not dispose.
+  return "À examiner";
 }

 /** A Work Recommendation still awaiting an explicit Pilot disposition. */
@@ -356,7 +358,7 @@ export function JournalSurface({
           ? `${openReservationCount} réserve${openReservationCount === 1 ? "" : "s"} ouverte${openReservationCount === 1 ? "" : "s"}`
           : "Aucun cycle sélectionné"
         : tab === "recommandations"
-          ? `${openRecommendationCount} en attente de votre réponse`
+          ? `${openRecommendationCount} à examiner`
           : `${decisionCount} décision${decisionCount === 1 ? "" : "s"} enregistrée${decisionCount === 1 ? "" : "s"}`;

   /** Rail stays a shortcut: it shows a bounded head of the subjects index. */
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index 177a9ffc..ea46da10 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -215,6 +215,9 @@ export function buildProjectSystemPrompt(
     "  → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.",
     "- Cognitive Stop → HOLD + BLOCKER_RESOLUTION (outranks transition / réutilisation).",
     "UNE seule continuation principale par défaut. Pas de liste générique de cinq idées.",
+    "COG-01 — Si la narrative se termine déjà par une invitation ou question de suite,",
+    "ne reformule PAS une seconde question distincte dans conversationGuidance.statement ;",
+    "réutilise la même formulation (ou laisse statement redondant volontairement).",
     "Ne demande pas confirmation pour des détails non matériels.",
     "Avance sous Hypothesis explicite lorsque la doctrine actuelle l'autorise.",
     "Ne propose JAMAIS Cursor / Execution comme initiative autonome.",
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 8f322903..2b7d6fb2 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -847,10 +847,218 @@ export function applyConversationGuidanceCoherence(input: {
   };
 }

+/** Normalize Pilot-facing prose for near-duplicate continuation detection. */
+function normalizePilotContinuationCompare(text: string): string {
+  return text
+    .toLowerCase()
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .replace(/[^\p{L}\p{N}\s]/gu, " ")
+    .replace(/\s+/g, " ")
+    .trim();
+}
+
+/**
+ * Conversational closing-ask cues (FR). Includes Human QA paraphrases that do
+ * not use « Souhaitez-vous » (imperatives, correspond-il, était-ce, trailing ?).
+ */
+const CONTINUATION_INVITE_RE =
+  /\b(souhaitez[- ]vous|voulez[- ]vous|souhaites[- ]tu|que souhaitez|quelle est|quelles? |comment voulez|prefereriez[- ]vous|preferez[- ]vous|on peut|je (te|vous) propose|raconte[- ]moi|dis[- ]moi|explique[- ]moi|decrivons|decris|parle[- ]moi|correspond[- ]il|etait[- ]ce|est[- ]ce que|quest[- ]ce)\b/i;
+
+/** Discourse / filler tokens ignored when comparing ask payloads. */
+const CONTINUATION_COMPARE_STOP = new Set([
+  "le",
+  "la",
+  "les",
+  "de",
+  "des",
+  "du",
+  "un",
+  "une",
+  "et",
+  "ou",
+  "que",
+  "qui",
+  "l",
+  "on",
+  "par",
+  "pour",
+  "au",
+  "aux",
+  "a",
+  "en",
+  "je",
+  "tu",
+  "vous",
+  "te",
+  "me",
+  "d",
+  "y",
+  "ce",
+  "ces",
+  "se",
+  "ne",
+  "pas",
+  "plus",
+  "avec",
+  "dans",
+  "sur",
+  "aux",
+  "commencer",
+  "reprendre",
+  "premier",
+  "ensuite",
+  "maintenant",
+  "alors",
+  "raconte",
+  "moi",
+  "decrivons",
+  "decris",
+  "dis",
+  "explique",
+  "parle",
+  "seulement",
+  "celles",
+  "ceux",
+  "cette",
+  "cet",
+  "ete",
+  "etait",
+  "etaient",
+  "sont",
+  "est",
+  "il",
+  "elle",
+  "ils",
+  "elles",
+]);
+
+function isConversationalAsk(text: string): boolean {
+  const t = text.trim();
+  if (!t) return false;
+  if (/\?\s*$/.test(t)) return true;
+  return CONTINUATION_INVITE_RE.test(t);
+}
+
+/** Prefer the informational payload after a colon (common Human QA pattern). */
+function askComparePayload(text: string): string {
+  const raw = text.trim();
+  const colon = raw.lastIndexOf(":");
+  if (colon >= 0 && colon < raw.length - 3) {
+    const after = raw.slice(colon + 1).trim();
+    if (after.length >= 12) return after;
+  }
+  return raw;
+}
+
+function continuationContentTokens(text: string): Set<string> {
+  return new Set(
+    normalizePilotContinuationCompare(text)
+      .split(" ")
+      .filter((w) => w.length > 2 && !CONTINUATION_COMPARE_STOP.has(w)),
+  );
+}
+
+/**
+ * Overlap coefficient on content tokens — catches paraphrases of the same ask
+ * without requiring identical invite phrasing (P6-HQA COG-01 Human QA cases).
+ */
+function asksShareEquivalentContent(aRaw: string, bRaw: string): boolean {
+  const pairs: Array<[string, string]> = [
+    [aRaw, bRaw],
+    [askComparePayload(aRaw), askComparePayload(bRaw)],
+    [askComparePayload(aRaw), bRaw],
+    [aRaw, askComparePayload(bRaw)],
+  ];
+  for (const [left, right] of pairs) {
+    const a = continuationContentTokens(left);
+    const b = continuationContentTokens(right);
+    if (a.size === 0 || b.size === 0) continue;
+    let inter = 0;
+    for (const w of a) if (b.has(w)) inter += 1;
+    const smaller = Math.min(a.size, b.size);
+    const union = a.size + b.size - inter;
+    const jaccard = union === 0 ? 0 : inter / union;
+    const containment = smaller === 0 ? 0 : inter / smaller;
+    // Require enough shared substance; containment covers asymmetric paraphrases
+    // (e.g. « type d'entreprise » ↔ « entreprise de huit personnes » + same fork).
+    // inter >= 3 preserves the prior near-duplicate « Souhaitez-vous … » path.
+    if (inter >= 3 && (jaccard >= 0.45 || containment >= 0.55)) {
+      return true;
+    }
+  }
+  return false;
+}
+
+/** Closing ask candidates: question-like sentences in the last paragraph. */
+function extractClosingAskCandidates(narrative: string): string[] {
+  const paragraphs = narrative
+    .split(/\n\s*\n/)
+    .map((p) => p.trim())
+    .filter(Boolean);
+  const lastPara = paragraphs[paragraphs.length - 1] ?? narrative.trim();
+  const sentences = lastPara
+    .split(/(?<=[.!?…])\s+/)
+    .map((p) => p.trim())
+    .filter(Boolean);
+  const asks = sentences.filter(isConversationalAsk);
+  if (asks.length > 0) return asks;
+  // Fallback: whole last paragraph / last sentence when invite cues are weak.
+  if (sentences.length > 0) return [sentences[sentences.length - 1]!];
+  return lastPara ? [lastPara] : [];
+}
+
+/**
+ * True when narrative already carries the same (or near-duplicate) continuation
+ * as guidance.statement — avoids stacking two nearly identical closing invites.
+ * Exact substring match remains the primary path; similarity covers distinct
+ * phrasings of the same invitation (P6-HQA COG-01), including Human QA
+ * paraphrases that do not share a « Souhaitez-vous » surface form.
+ */
+export function narrativeAlreadyCarriesGuidanceContinuation(
+  narrative: string,
+  statement: string,
+): boolean {
+  const nRaw = narrative.trim();
+  const sRaw = statement.trim();
+  if (!sRaw) return true;
+  if (!nRaw) return false;
+  if (nRaw.includes(sRaw)) return true;
+
+  const n = normalizePilotContinuationCompare(nRaw);
+  const s = normalizePilotContinuationCompare(sRaw);
+  if (!s || s.length < 12) return false;
+  if (n.includes(s)) return true;
+
+  const candidates = extractClosingAskCandidates(nRaw);
+  const guidanceIsAsk = isConversationalAsk(sRaw);
+
+  for (const candidate of candidates) {
+    const last = normalizePilotContinuationCompare(candidate);
+    if (!last) continue;
+    if (last.includes(s) || (last.length >= 12 && s.includes(last))) {
+      return true;
+    }
+
+    // Same (or near-same) conversational ask — paraphrase-tolerant, content-gated.
+    // Both sides must look like invites/questions so distinct body prose is never
+    // treated as a duplicate of guidance.statement.
+    if (
+      guidanceIsAsk &&
+      isConversationalAsk(candidate) &&
+      asksShareEquivalentContent(candidate, sRaw)
+    ) {
+      return true;
+    }
+  }
+  return false;
+}
+
 /**
  * Compose Pilot-facing assistant text for history continuity.
  * narrative + conversationGuidance.statement — no internal field names,
  * no "PROCHAINE ÉTAPE :" label.
+ * P6-HQA COG-01 — do not append a near-duplicate closing invitation.
  */
 export function composePilotFacingAssistantText(
   narrative: string,
@@ -866,7 +1074,9 @@ export function composePilotFacingAssistantText(
     const statement = guidance.statement.trim();
     if (statement) {
       if (!out) out = statement;
-      else if (!out.includes(statement)) out = `${out}\n\n${statement}`;
+      else if (!narrativeAlreadyCarriesGuidanceContinuation(out, statement)) {
+        out = `${out}\n\n${statement}`;
+      }
     }
   }
   if (structuredRecommendation?.optionLabel?.trim()) {
```

---

## 11. Matrice findings (état PR)

| Finding | Statut dans la PR |
|---------|-------------------|
| COG-01 | **FIXÉ** + tests Human QA |
| UX-REC-01 | **FIXÉ** |
| REC-02 | **PARTIEL** (présentation honnête) |
| REC-03 | **FIXÉ** (« À examiner ») |
| REC-01 | **STRUCTURAL DECISION REQUIRED** — hors PR |
| JRN-01 | **HUMAN QA RETEST REQUIRED** — hors PR |

Invariants : Recommendation ≠ HumanDecision ; discussion ≠ disposition ; pas de nouveau moteur / routing / persistence.

---

## 12. Réserves / décisions Morris

1. Merge #575 — GO distinct requis après revue ChatGPT.
2. REC-01 règle métier supersession / dédup.
3. REC-02 binding tour↔recommandation si arbitrage UX.
4. JRN-01 + rejeu Human QA REAL (HQ-01 / P6-MIN-03) après merge.
5. COG-01 limite lexicale assumée.
6. Figma/runtime strong parity non prouvée.

---

## 13. Préservation worktrees

| Worktree | Branche | HEAD | Notes |
|----------|---------|------|-------|
| `/Users/morris/Projects/sfia-workspace` | `qa/sfia-studio-p6-global-integrated-product-qa` | `980064c0` | mods locales HQA + C14/tmp/p6-campaign **intactes** |
| `/Users/morris/Projects/sfia-workspace-p6-hqa-01` | `fix/studio-p6-hqa-01-conversation-recommendations` | `8f61da8fb3f2e77d698fa94a123971be57d8ff9d` | clean après commit |
| handoff WT | `sfia/review-handoff` | (publié ce cycle) | L3 only |

---

## 14. Verdict

**DRAFT PR OPEN — CI SUCCESS — READY FOR CHATGPT PR REVIEW**

Instruction ChatGPT : avant revue, lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
