# SFIA Review Pack — FULL
# P6-HQA-01 — Conversation, Recommendations & Journal Continuity
# Local Bounded Delivery (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 13:27:51 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-01**
- Milestone : P6 — Global Integrated Product QA
- Phase : 5 — Human QA / Targeted Corrections
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Standard**
- Typologie : EVOL corrective bornée
- Capacités v3 : V3-F02, V3-F04, V3-F05, V3-F14
- GO Morris : LOCAL BOUNDED DELIVERY **AUTHORIZED**
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- Synthesis only : **no**

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Remote | `origin` → `mcleland147/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| `origin/main` | `73cc58b38a55f80b0a7eabdf9337f9f6e35577a3` |
| Ancestry | HEAD = parent PR of merge `73cc58b3` (ascendant de main) |
| Staged | **vide** |
| Collision Product | **NON** — allowlist propre ; C14/tmp/p6-campaign préservés |

### `git status --short`

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
```

---

## 2. Sources consultées (extrait)

- Build Doctrine / Roadmap / C1 (lien milestone P6)
- Product Simplification P2/P3/P6 (Figma `46:2`, Recommendation≠HD)
- Doctrine v3 30/32/33/35 (autorité / épistémologie)
- Template v2.6 + routing
- Handoff merge `6c18b217` (contexte intégration #574)
- Code : `composePilotFacingAssistantText`, `ConversationSurface`, `JournalSurface`, `deriveWorkRecommendations`, `materializeActiveCycleWork`, `buildProjectSystemPrompt`

---

## 3. Matrice des six findings

| Finding | Cause démontrée | Nature | Correction | Autorisation locale |
|---------|-----------------|--------|------------|---------------------|
| **COG-01** | `composePilotFacingAssistantText` append `guidance.statement` si `!includes(exact)` — narrative + statement proches mais distincts ⇒ double invitation. Prompt impose aussi ANSWER puis ORIENT. | Composition (+ instruction) | Déduplication similarité + rappel prompt COG-01 | **OUI** |
| **UX-REC-01** | `ConversationSurface` affiche `card.statement` en titre **et** sous `<dt>Proposition</dt>` | UI | Suppression du bloc Proposition redondant | **OUI** |
| **REC-01** | Chaque tour ACW mint un nouvel `epistemicItemId` (`turnCorrelationId`+index+statement) ; pas de supersession automatique des raffinements proches. Dedup existante = optset/ACW link seulement. | Domaine / règle métier | — | **NON** — STRUCTURAL DECISION REQUIRED |
| **REC-02** | Carte = premier WR `active` sans disposition de la collection durable (tri newest) ; aucun rattachement tour | Projection UI | Libellés honnêtes « active du cycle / pas liée uniquement à ce tour » + renvoi Journal | **OUI** (présentation) ; binding tour = STOP |
| **REC-03** | Libellé Journal « En attente de votre réponse » pour `active` sans disposition — implique unanswered chat ; sémantique réelle = non dispositionnée | UI libellé | Alignement « À examiner » (+ compteur) | **OUI** |
| **JRN-01** | Mécanismes CREATE/UPDATE/SPLIT présents ; défaut parapluie **non reproduit** avec deux axes distincts dans ce pass | Observation | — | **OBSERVATION / NOT REPRODUCED** — HUMAN QA RETEST |

### Fake / Real
- Niveau : **DETERMINISTIC PROVEN AT TESTED SCOPE**
- Hors scope : REAL supplémentaire, E2E REAL, P6 GLOBAL PASS
- OpenAI Capability Fit : correction = composition + instruction existante — **pas** nouvelle capacité cognitive générique

### Figma / UX
- Frame P3 : `46:2` Project Workspace (fileKey `m4g8j0gNbEzfIuH6S9AZJF`)
- Changement = contenu carte RECOMMANDATION (suppression doublon + libellés) — **pas** redesign structurel
- Capture runtime Figma pixel : **NON** dans ce pass → pas de claim conformité Figma forte

---

## 4. Modifications réalisées

| Fichier | Changement |
|---------|------------|
| `noraProductTurnOutputType.ts` | `narrativeAlreadyCarriesGuidanceContinuation` + compose skip near-dupe |
| `buildProjectSystemPrompt.ts` | Instruction COG-01 anti double question |
| `ConversationSurface.tsx` | UX-REC-01 + REC-02 présentation |
| `JournalSurface.tsx` | REC-03 libellés |
| Tests | noraConversationalInitiative COG-01 ; UX continuity ; **nouveau** `p6.hqa.rec03…ui.test.tsx` |

Non modifiés volontairement : `orchestrateF2.ts`, `deriveWorkRecommendations.ts`, persistence, doctrine, PRR, C14.

---

## 5. Validations

| Suite | Résultat |
|-------|----------|
| noraConversationalInitiative (+ COG-01) | **22 PASS** |
| p6.ux.recommendationContinuity | **6 PASS** |
| p6.hqa.rec03 journal label | **1 PASS** |
| Adjacent F01 + framing rehydrate + cog01 narrative | **35 PASS** (batch) |
| ESLint fichiers touchés | **PASS** |
| `git diff --check` lot | **PASS** |

### `git diff --stat` (lot Product + tests)

```
 .../p6.ux.recommendationContinuity.ui.test.tsx     |  11 +++
 .../noraConversationalInitiative.d0.test.ts        |  28 ++++++
 .../surfaces/ConversationSurface.tsx               |  17 ++--
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   6 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   3 +
 .../noraProductTurnOutputType.ts                   | 107 ++++++++++++++++++++-
 6 files changed, 162 insertions(+), 10 deletions(-)
```

---

## 6. FICHIER CRÉÉ — CONTENU COMPLET

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx`

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

## 7. SECTIONS / DIFFS EXPLOITABLES

### Composition COG-01 (extrait courant)

```ts
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

const CONTINUATION_INVITE_RE =
  /\b(souhaitez[- ]vous|voulez[- ]vous|que souhaitez|quelle est|comment voulez|prefereriez[- ]vous|preferez[- ]vous|on peut|je (te|vous) propose)\b/i;

/**
 * True when narrative already carries the same (or near-duplicate) continuation
 * as guidance.statement — avoids stacking two nearly identical closing invites.
 * Exact substring match remains the primary path; similarity covers distinct
 * phrasings of the same invitation (P6-HQA COG-01).
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

  // Prefer last paragraph; else last sentence (common when invite is inline).
  const paragraphs = nRaw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  let lastRaw = paragraphs[paragraphs.length - 1] ?? nRaw;
  const sentences = lastRaw
    .split(/(?<=[.!?…])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (sentences.length > 0) {
    lastRaw = sentences[sentences.length - 1]!;
  }
  const last = normalizePilotContinuationCompare(lastRaw);
  if (!last) return false;
  if (last.includes(s) || (last.length >= 12 && s.includes(last))) return true;

  // Shared invitation cue + high token overlap on the closing paragraph
  // (covers distinct but synonymous phrasings of the same ask).
  if (CONTINUATION_INVITE_RE.test(lastRaw) && CONTINUATION_INVITE_RE.test(sRaw)) {
    const stop = new Set([
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
      "l",
      "on",
      "par",
      "pour",
      "au",
      "aux",
      "a",
      "en",
      "je",
      "vous",
      "te",
      "me",
      "d",
      "y",
      "ce",
      "ces",
      "se",
    ]);
    const tokens = (text: string) =>
      new Set(
        text
          .split(" ")
          .filter((w) => w.length > 2 && !stop.has(w)),
      );
    const a = tokens(last);
    const b = tokens(s);
    let inter = 0;
    for (const w of a) if (b.has(w)) inter += 1;
    const union = a.size + b.size - inter;
    const ratio = union === 0 ? 0 : inter / union;
    if (inter >= 3 && ratio >= 0.5) return true;
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

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 8f322903..d449dca7 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -847,10 +847,113 @@ export function applyConversationGuidanceCoherence(input: {
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
+const CONTINUATION_INVITE_RE =
+  /\b(souhaitez[- ]vous|voulez[- ]vous|que souhaitez|quelle est|comment voulez|prefereriez[- ]vous|preferez[- ]vous|on peut|je (te|vous) propose)\b/i;
+
+/**
+ * True when narrative already carries the same (or near-duplicate) continuation
+ * as guidance.statement — avoids stacking two nearly identical closing invites.
+ * Exact substring match remains the primary path; similarity covers distinct
+ * phrasings of the same invitation (P6-HQA COG-01).
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
+  // Prefer last paragraph; else last sentence (common when invite is inline).
+  const paragraphs = nRaw
+    .split(/\n\s*\n/)
+    .map((p) => p.trim())
+    .filter(Boolean);
+  let lastRaw = paragraphs[paragraphs.length - 1] ?? nRaw;
+  const sentences = lastRaw
+    .split(/(?<=[.!?…])\s+/)
+    .map((p) => p.trim())
+    .filter(Boolean);
+  if (sentences.length > 0) {
+    lastRaw = sentences[sentences.length - 1]!;
+  }
+  const last = normalizePilotContinuationCompare(lastRaw);
+  if (!last) return false;
+  if (last.includes(s) || (last.length >= 12 && s.includes(last))) return true;
+
+  // Shared invitation cue + high token overlap on the closing paragraph
+  // (covers distinct but synonymous phrasings of the same ask).
+  if (CONTINUATION_INVITE_RE.test(lastRaw) && CONTINUATION_INVITE_RE.test(sRaw)) {
+    const stop = new Set([
+      "le",
+      "la",
+      "les",
+      "de",
+      "des",
+      "du",
+      "un",
+      "une",
+      "et",
+      "ou",
+      "que",
+      "l",
+      "on",
+      "par",
+      "pour",
+      "au",
+      "aux",
+      "a",
+      "en",
+      "je",
+      "vous",
+      "te",
+      "me",
+      "d",
+      "y",
+      "ce",
+      "ces",
+      "se",
+    ]);
+    const tokens = (text: string) =>
+      new Set(
+        text
+          .split(" ")
+          .filter((w) => w.length > 2 && !stop.has(w)),
+      );
+    const a = tokens(last);
+    const b = tokens(s);
+    let inter = 0;
+    for (const w of a) if (b.has(w)) inter += 1;
+    const union = a.size + b.size - inter;
+    const ratio = union === 0 ? 0 : inter / union;
+    if (inter >= 3 && ratio >= 0.5) return true;
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
@@ -866,7 +969,9 @@ export function composePilotFacingAssistantText(
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

### `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```diff
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

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
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

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

```diff
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
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx`

```diff
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

### `projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
index 93d51614..551408f5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
@@ -281,6 +281,34 @@ describe("NORA-CONVERSATIONAL-INITIATIVE-01 (deterministic)", () => {
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
   it("T2 — routing-blocking → ASK_CLARIFICATION + PRE_CYCLE", () => {
     const g = guidance(
       "ASK_CLARIFICATION",
```

---

## 8. Réserves / dettes / décisions Morris

| Item | Propriétaire | Condition de sortie |
|------|--------------|---------------------|
| REC-01 accumulation / supersession raffinements | Morris | Décider règle métier : supersession auto vs disposition explicite vs dédup projection |
| REC-02 binding recommandation↔tour durable | Morris | Nouveau contrat tour↔WR si nécessaire |
| JRN-01 granularité sujets | Human QA / Morris | Retest 2 axes distincts ; SPLIT si défaut reproduit |
| Visual Figma pixel compare | Human QA | Capture runtime vs `46:2` |
| M-DISP | hors lot | — |

---

## 9. Review Handoff

- decision : **required**
- mode : **publish-in-cycle**
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- push : L3 borné uniquement

---

## 10. Verdict

# LOCAL DELIVERY CANDIDATE — READY FOR CHATGPT REVIEW

Corrections non structurantes livrées et prouvées déterministiquement.
REC-01 / JRN-01 / binding tour documentés sans usurpation d'arbitrage.
Aucun commit projet.
