# SFIA Review Pack — FULL
# P6-HQA-01 / COG-01 — Requalification et correction ciblée
# Targeted Local Correction (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 14:09:53 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-01** — sous-passe **COG-01**
- Milestone : P6 — Global Integrated Product QA
- Phase : 5 — Human QA / Targeted Corrections
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Standard**
- Typologie : EVOL corrective bornée
- Capacité v3 primaire : **V3-F05** (préserve V3-F02 / V3-F04 / V3-F14)
- GO Morris : **AUTHORIZED — TARGETED LOCAL CORRECTION** (allowlist étendue `noraProductTurnOutputType.ts`)
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- PR READY : **NO**
- Synthesis only : **no**
- Handoff précédent supersédé : `efba65eb8db1bfe4aaec09339617cdf4c3993976` (lot HQA-01 initial ; COG-01 alors partiel)

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Remote | `origin` → `mcleland147/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| `origin/main` | `73cc58b38a55f80b0a7eabdf9337f9f6e35577a3` |
| Ancestry | HEAD parent tip de merge PR #574 ; tip main = merge `73cc58b3` |
| Staged | **vide** |
| Collision | **NON** — corrections HQA-01 antérieures + C14 / tmp / p6-campaign **préservés** |
| Fichiers Product touchés cette passe | **uniquement** les 2 chemins autorisés |

### `git status --short` (état final attendu, hors pack)

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

### Diff stat (fichiers autorisés cette passe)

```
 .../noraConversationalInitiative.d0.test.ts        | 108 +++++++++++
 .../noraProductTurnOutputType.ts                   | 212 ++++++++++++++++++++-
 2 files changed, 319 insertions(+), 1 deletion(-)
```

---

## 2. Sources consultées

Gouvernance / roadmap / C1 (lecture) ; Product Simplification 02/04/07 ; doctrine v3 30/33 ; routing + template v2.6 ; code :
- `noraProductTurnOutputType.ts` (modifiable)
- `noraConversationalInitiative.d0.test.ts` (modifiable)
- `buildProjectSystemPrompt.ts` (**lecture seule**)

Convergence pre-check : Build Doctrine ACTIVE ON MAIN ; P6 Human QA IN PROGRESS ; moteur Nora KEEP ; compositeur ADAPT ; tests COMPLETE ; nouveau moteur INTERDIT.

---

## 3. Reproduction avant correction

### Cause démontrée

`narrativeAlreadyCarriesGuidanceContinuation` (premier correctif) n’entrait dans le chemin de similarité **que** si `CONTINUATION_INVITE_RE` matchait narrative **et** statement.

Les formulations Human QA (**raconte-moi / Décrivons / correspond-il / était-ce**) ne matchaient **pas** ce regex → overlap jamais évalué → `composePilotFacingAssistantText` **append** le `conversationGuidance.statement` → double invitation.

Probe déterministe pré-fix :

```
retard → false  (inviteN=false, inviteS=false)
huit   → false  (inviteN=false, inviteS=false)
```

### Tests de reproduction (ajoutés, exécutés sur code insuffisant)

Commande :

```
cd projects/sfia-studio/app && npx vitest run __tests__/project-assistant/noraConversationalInitiative.d0.test.ts -t "COG-01 — Human QA"
```

Résultat **avant** correction :

```
FAIL  COG-01 — Human QA retard/responsabilité paraphrase is not stacked
  expected pilot not to contain guidanceInvite — guidance was appended
FAIL  COG-01 — Human QA entreprise de huit personnes paraphrase is not stacked
  expected pilot not to contain guidanceInvite — guidance was appended
Tests  2 failed | 24 skipped
```

Preuve : les deux défauts Human QA sont **reproduits** sur le chemin réel `composePilotFacingAssistantText`.

---

## 4. Correction minimale

Fichier : `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

Changements (composition seulement — pas de modèle / routing / persistence) :

1. Élargir les cues d’invitation FR (impératifs, `correspond-il`, `était-ce`, trailing `?`).
2. Extraire les **closing ask candidates** du dernier paragraphe.
3. Comparer payload (après `:`) + contenu tokenisé avec Jaccard / containment (`inter >= 3` et `jaccard ≥ 0.45` ou `containment ≥ 0.55`).
4. Exiger que **les deux côtés** soient des asks conversationnels (anti-surfiltrage du corps narratif).

OpenAI Capability Fit : **aucune** nouvelle primitive ; composition locale uniquement.

---

## 5. Code modifié — helpers + compose (contenu complet courant)

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

---

## 6. Tests COG-01 (bloc complet courant)

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

---

## 7. Diffs utiles (vs HEAD `980064c05f17`)

### Product (`noraProductTurnOutputType.ts`)

```diff
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

### Tests (`noraConversationalInitiative.d0.test.ts`)

```diff
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
```

---

## 8. Validations exécutées

| Commande | Résultat |
|----------|----------|
| `vitest … -t "COG-01 — Human QA"` **avant** fix | **2 FAIL** (reproduction) |
| `vitest … noraConversationalInitiative.d0.test.ts` après fix | **28 PASS** |
| `vitest` suite COG + UX-REC + REC-03 adjacents | **35 PASS** (28+6+1) |
| `eslint` ciblé sur les 2 fichiers | **0 error** (2 warnings préexistants unused imports hors COG) |
| `git diff --check` (2 fichiers) | **PASS** |

### Positifs couverts
- Human QA retard/responsabilité : 1 seule `?`
- Human QA entreprise huit personnes : 1 seule `?`
- Near-duplicate « Souhaitez-vous » : 1 seule occurrence
- Continuation distincte encore ajoutée
- Narrative sans invite conserve la continuation
- Guidance absente : narrative inchangée

### Négatifs couverts
- responsabilités ≠ conséquences → 2 questions
- type d’entreprise ≠ nombre de projets → 2 questions
- aucun champ interne Nora exposé

---

## 9. Fake / Real Qualification

| Item | Valeur |
|------|--------|
| Applicable | OUI |
| Frontière | Nora / fournisseur IA |
| Fake | Composition déterministe + fixtures suite NCI |
| REAL correspondant | Formulations Human QA P6 exactes |
| Niveau | **DETERMINISTIC PROVEN AT TESTED SCOPE** |
| Hors scope | REAL BOUNDARY / E2E REAL / P6 GLOBAL PASS / runtime v3 ADOPTED |

DETERMINISTIC PROVEN ≠ READY FOR REAL. Rejeu Human QA toujours requis après intégration éventuelle.

---

## 10. État des autres findings (inchangé cette passe)

| Finding | Statut |
|---------|--------|
| UX-REC-01 | FIXÉ (passe précédente) — non modifié |
| REC-02 | Présentation honnête partielle — non modifié |
| REC-03 | « À examiner » — non modifié |
| REC-01 | **STRUCTURAL DECISION REQUIRED** — intact |
| JRN-01 | **NOT REPRODUCED / Human QA retest** — intact |
| COG-01 | **CORRIGÉ** (cette passe) sur les 2 cas Human QA + non-régressions |

Aucun fichier UI / Journal / Recommendations / prompt touché dans cette sous-passe.

---

## 11. Réserves / dettes / décisions Morris

1. **REC-01** — règle métier supersession / dédup durable (STRUCTURAL).
2. **REC-02** binding tour↔recommandation si arbitrage UX structurant.
3. **JRN-01** — retest Human QA 2 axes distincts.
4. **COG-01** — limite assumée : équivalence lexicale/contenu, pas moteur sémantique ; paraphrases sans overlap lexical suffisant peuvent encore doubler (hors cas Human QA démontrés).
5. Rejeu Human QA COG-01 sur Project réel après intégration Git éventuelle (non autorisée ici).

---

## 12. Verdict

**LOCAL CORRECTION COG-01 — READY FOR CHATGPT REVIEW**

Instruction ChatGPT : avant revue, lire sur Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
