# SFIA Studio Next — R5 / ML3 — RCT-02 Critical Review REWORK (C01/C05/C06)
## Review Pack FULL — Cycle Delivery / INC CRITICAL REWORK

**Date UTC:** 2026-11-06T20:44:52Z
**GO Morris:** reprise Critical Review NOT ACCEPTED — correctifs C01/C05/C06 + preuves PG — **sans** push projet / PR / merge / deploy RECETTE
**Branche:** `sfia/next-ml3-rct02-correctifs`
**HEAD local (base docs):** `b9047a48609c0d2c11b89ec13e3d2ab79b1b54bc`
**Tree base:** `88f17156838f7e05d729ae35b7f3ce4bc73a85a6`
**origin/main:** `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`
**Candidat ML3 d'origine:** `ba831b25bc182f755be749243f256dbf7d5a1ca1`
**Handoff rejeté:** `0a057278` (NOT ACCEPTED — REWORK REQUIRED)

**Verdict:** `READY FOR CHATGPT RE-REVIEW`

Ne signifie PAS: RECETTE ACCEPTED · ML3 CLOSED · STABLE · RELEASED · ADOPTED · push projet.

---

## 1. Git Truth

- Workspace: `/Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs`
- Branche active: `sfia/next-ml3-rct02-correctifs` @ `b9047a48` + modifications locales **non poussées**
- Worktree delivery `ba831b25` et RECETTE build préservés — port 3200 **non muté**
- État porcelain:

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
```

Diffstat vs HEAD:

```
 .../construction/delivery-history.md               |  32 ++
 .../specification-technique.md                     |  27 ++
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  16 +
 .../web/src/domains/conversation/nora-adapter.ts   |   9 +-
 .../web/src/domains/decisions/divergence-assist.ts |  19 +-
 .../src/domains/pilotage/conversation-authority.ts |  78 ++++
 .../web/src/domains/pilotage/intent.ts             | 410 ++++++++++++++++++---
 .../web/src/domains/pilotage/nora-context.ts       |  23 +-
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 254 +++++++++++++
 9 files changed, 803 insertions(+), 65 deletions(-)
```

`.env.local` DEV local gitignored — **aucun secret dans ce pack**.

---

## 2. Sources consultées

- Critical Review ChatGPT NOT ACCEPTED (C05/C06/C01)
- `recette-ml3-rct02-anomalies.md` (message T05 exact — ponctuation non adaptée)
- Handoff rejeté `0a057278`
- `intent.ts`, `conversation-authority.ts`, `divergence-assist.ts`
- Processus SFIA v2.6 + `publish-review-handoff.sh`

---

## 3. Diagnostic des trois anomalies bloquantes

| ID | Défaut | Correction |
|----|--------|------------|
| **C05** | `REVISE` sans `:` → énoncé `. ` (greedy `[^:]+`) | `extractReviseStatement` coupe désignation / nouvel arbitrage sur `. ` / `:` / tiret |
| **C06** | Négation → `LIFT_RESTRICTION` | `isNegatedOrNonPerformativeLift` ; `restrictionTargetRefHint` refuse cible contradictoire |
| **C01** | Citation/specimen → `OPEN_CYCLE` | `isNonPerformativeOpenFraming` (méta « Voici… : » / « Ne fais pas ceci : ») |
| C04 n-r | `Nora,` non coupé (`\b` après virgule) | `NORA_DIALOGUE_SPLIT` corrigé |
| C05 cible | `objectRef` faible | overlap énoncé ≥2 tokens si « je révise » |

Architecture conservée: `qualifyPilotageIntent` → `applyConversationalAuthority` → `executePilotageCommand` — source `USER_MESSAGE` — idempotence inchangée.

---

## 4. Fichier créé (contenu complet)

### `projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  extractDecisionCore,
  extractReviseStatement,
  qualifyPilotageIntent,
  sanitizeCycleObjective,
} from "@/domains/pilotage/intent";

/**
 * Exact T05 utterance from recette-ml3-rct02-anomalies.md — period, no colon.
 * Do not adapt punctuation to make tests pass.
 */
const T05_EXACT =
  "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";

/**
 * RCT-02 C01–C08 — conversational qualification oracles from user recette messages.
 * Deterministic only — does not prove LIVE Nora cognition.
 */
describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
  it("C01: developed natural OPEN_CYCLE is CLEAR with typed cycle and objective", () => {
    const q = qualifyPilotageIntent(
      "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    if (q.clarity === "CLEAR") {
      expect(q.objective).toMatch(/problème utilisateur/i);
      expect(q.objective).not.toBe(".");
    }
  });

  it("C01 Critical Review: citation / specimen never OPEN_CYCLE", () => {
    for (const msg of [
      "Voici une phrase de test : Nora, ouvre le cycle cadrage",
      "Ne fais pas ceci : Nora, ouvre le cycle cadrage",
    ]) {
      const q = qualifyPilotageIntent(msg);
      expect(q.clarity).not.toBe("CLEAR");
      if (q.clarity === "CLEAR") {
        expect(q.operation).not.toBe("OPEN_CYCLE");
      }
    }
  });

  it("C02: short open does not persist punctuation-only objective", () => {
    const q = qualifyPilotageIntent("Ouvre le cycle cadrage.");
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "OPEN_CYCLE", cycleType: "CADRAGE" });
    if (q.clarity === "CLEAR") {
      expect(q.objective).toBe("Cycle CADRAGE");
      expect(q.objective).not.toBe(".");
    }
    expect(sanitizeCycleObjective(".", "CADRAGE")).toBe("Cycle CADRAGE");
    expect(sanitizeCycleObjective("avec pour objectif de clarifier le besoin", "CADRAGE")).toMatch(
      /clarifier le besoin/i,
    );
  });

  it("C04: RECORD strips Nora dialogue from durable statement", () => {
    const msg =
      "Je décide que nous devons examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes, mais cela ne signifie pas que le besoin utilisateur est validé. Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question utile.";
    const q = qualifyPilotageIntent(msg);
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "RECORD_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toMatch(/suivi des décisions/i);
      expect(q.statement).not.toMatch(/aide-moi/i);
      expect(q.statement).not.toMatch(/^Nora/i);
    }
    expect(extractDecisionCore(msg.split(/je décide que/i)[1] ?? msg)).not.toMatch(/aide-moi/i);
  });

  it("C05 Critical Review: T05 exact (period, no colon) yields REVISE with developed statement", () => {
    const extracted = extractReviseStatement(T05_EXACT);
    expect(extracted).toBeTruthy();
    expect(extracted).not.toBe(".");
    expect(extracted).toMatch(/nouvelle orientation remplace/i);
    expect(extracted).toMatch(/coordination interéquipes/i);

    const q = qualifyPilotageIntent(T05_EXACT);
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toBe(extracted);
      expect(q.statement).not.toMatch(/^[.\-–—…]+$/);
      expect(q.statement).not.toMatch(/aide-moi/i);
      // Designation clause must not swallow the new arbitration
      expect(q.statement).not.toMatch(/^que j'ai prise/i);
    }
  });

  it("C05: colon form still CLEAR (non-regression)", () => {
    const q = qualifyPilotageIntent(
      "Je révise la décision que j'ai prise sur l'orientation du cadrage : cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.",
    );
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toMatch(/orientation|explorer|coordination/i);
    }
  });

  it("C06: conversational LIFT_RESTRICTION is CLEAR with kind hint", () => {
    const q = qualifyPilotageIntent(
      "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "LIFT_RESTRICTION",
      restrictionKindHint: "CYCLE_MUTATION",
    });
  });

  it("C06 Critical Review: negated lift never LIFT_RESTRICTION", () => {
    for (const msg of [
      "Ne lève pas la restriction CYCLE_MUTATION",
      "Je ne souhaite pas lever la restriction CYCLE_MUTATION",
      "Faut-il lever la restriction CYCLE_MUTATION ?",
      "Si je levais la restriction CYCLE_MUTATION…",
    ]) {
      const q = qualifyPilotageIntent(msg);
      expect(q.clarity).not.toBe("CLEAR");
      if (q.clarity === "CLEAR") {
        expect(q.operation).not.toBe("LIFT_RESTRICTION");
      }
    }
  });

  it("C08: developed CLOSE_CYCLE GO is CLEAR", () => {
    const q = qualifyPilotageIntent(
      "Nora, j'ai bien compris ta recommandation sur la maturité, mais je décide de clôturer maintenant le cycle CADRAGE en conservant les réserves. Ne démarre aucun nouveau cycle automatiquement.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "CLOSE_CYCLE",
      cycleType: "CADRAGE",
    });
  });

  it("negatives: questions / exploration / OK never mutate", () => {
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("Peut-on clôturer le cycle cadrage ?").clarity).not.toBe("CLEAR");
    expect(
      qualifyPilotageIntent("Ce serait intéressant d'ouvrir le cycle cadrage.").clarity,
    ).not.toBe("CLEAR");
    expect(
      qualifyPilotageIntent("Imaginons que j'ouvre le cycle cadrage.").clarity,
    ).not.toBe("CLEAR");
    expect(qualifyPilotageIntent("Faut-il lever la restriction CYCLE_MUTATION ?").clarity).not.toBe(
      "CLEAR",
    );
  });

  it("incompatible OPEN+CLOSE in one message → AMBIGUOUS", () => {
    const q = qualifyPilotageIntent(
      "Ouvre le cycle cadrage et clôture le cycle cadrage tout de suite.",
    );
    expect(q.clarity).not.toBe("CLEAR");
  });
});

```

---

## 5. Diffs utiles (fichiers modifiés)

### `intent.ts` (extrait Critical Review)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 89790d47..1920c52b 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -16,6 +16,10 @@ export type IntentQualification =
       objectRef?: string;
       /** Resolved only when the caller already knows the D6 target. */
       decisionId?: string;
+      /** Hint for conversational LIFT — resolved to restrictionId by authority bridge. */
+      restrictionKindHint?: string;
+      /** Optional targetRef hint (cycle id / specialty) when the pilot names the instance. */
+      restrictionTargetRefHint?: string;
     }
   | { clarity: "AMBIGUOUS"; reason: string }
   | { clarity: "NONE"; reason: string };
@@ -27,12 +31,14 @@ export function deriveDecisionObjectRef(statement: string): string {
     /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
   );
   if (anchored?.[1]) return anchored[1].trim().slice(0, 80);
-  const tokens = text
+  // Prefer content before a Nora/dialogue instruction if still present.
+  const core = extractDecisionCore(text);
+  const tokens = core
     .toLowerCase()
     .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
     .filter((t) => t.length >= 4)
     .slice(0, 4);
-  return (tokens.join(" ") || text.slice(0, 40)).trim();
+  return (tokens.join(" ") || core.slice(0, 40)).trim();
 }

 const PHRASES: Array<{ type: CycleType; phrase: string }> = [
@@ -73,6 +79,13 @@ const AMBIGUOUS_EXACT =
 const EXPLORATORY_ACT =
   /\b(je pense|je r[eé]fl[eé]chis|je me demande|j['’]envisage|pourrait|pourrais|ce serait|il serait|peut-être|peut etre|et si|nora (?:propose|sugg[eè]re)|int[eé]ressant|hypoth[eè]se|envisager|envisagerais|semblerait|aurait l['’]air)\b/i;

+/**
+ * Conversational instructions addressed to Nora — not part of a durable decision.
+ * Note: after « Nora, » a trailing `\b` would fail (comma + space are both non-word).
+ */
+const NORA_DIALOGUE_SPLIT =
+  /(?:\bnora\s*[,:]|\baide[- ]moi\b|\bpeux[- ]tu\b|\bpeux tu\b|\bexplique[- ]moi\b|\bdis[- ]moi\b|\bmaintenant que (?:cette|la) d[eé]cision\b)/i;
+
 function normalize(text: string): string {
   return text.trim().toLowerCase().replace(/\s+/g, " ");
 }
@@ -119,6 +132,33 @@ function matchCyclePrefix(
   return null;
 }

+/**
+ * C02 — never promote punctuation-only residue to a durable cycle objective.
+ * Prefer an explicit « avec pour objectif … » / « objectif … » clause when present.
+ */
+export function sanitizeCycleObjective(rest: string, cycleType: CycleType): string {
+  const raw = (rest ?? "").trim();
+  const explicit = raw.match(
+    /\b(?:avec\s+(?:pour\s+)?objectif|objectif)\s*(?:de|d['’]|:)?\s*(.+)$/i,
+  );
+  const candidate = (explicit?.[1] ?? raw).trim().replace(/^[.,;:!?…\-–—]+|[.,;:!?…\-–—]+$/g, "").trim();
+  if (!candidate || /^[.\-–—…]+$/.test(candidate)) {
+    return `Cycle ${cycleType}`;
+  }
+  return candidate.slice(0, 500);
+}
+
+/**
+ * C04 — keep the durable arbitration; drop Nora dialogue / follow-up asks.
+ */
+export function extractDecisionCore(statement: string): string {
+  const text = statement.trim().replace(/\s+/g, " ");
+  if (!text) return "";
+  const split = text.split(NORA_DIALOGUE_SPLIT);
+  const core = (split[0] ?? text).trim().replace(/[.,;:]+$/g, "").trim();
+  return core || text;
+}
+
 function splitMethod(raw: string): { ref: string; version: string | null } {
   const text = raw.trim().replace(/[.;]+$/, "");
   const versioned = text.match(/^(.*?)(?:\s+version\s+(\S+))$/i);
@@ -128,10 +168,238 @@ function splitMethod(raw: string): { ref: string; version: string | null } {
   return { ref: text, version: null };
 }

+/**
+ * C01 — citation / specimen / prohibited example is not a performative GO.
+ * Distinguishes meta-framing ("Voici une phrase de test : …", "Ne fais pas ceci : …")
+ * from a real address to Nora that carries the pilot's own act.
+ */
+export function isNonPerformativeOpenFraming(text: string): boolean {
+  const t = text.trim();
+  if (!t) return true;
+  // Explicit prohibition of the open act itself (not unrelated « ne fais pas »)
+  if (
+    /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir|n['’]exécute\s+pas(?:\s+(?:ceci|cela|l['’]ouverture))?)\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // Meta specimen / citation introducing an open clause after a colon
+  // (« Voici une phrase de test : Nora, ouvre… », « Ne fais pas ceci : Nora, ouvre… »)
+  if (
+    /(?:^|[.!?…]\s*)(?:voici|voilà|exemple|phrase de test|pour\s+tester|citation|copie(?:r)?\s+ceci|ne\s+fais\s+pas(?:\s+(?:ceci|cela))?)\b[^:]*:\s*(?:nora\s*[,:]?\s*)?(?:ouvre|ouvrir|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // Quoted open (guillemets / ASCII quotes) without an independent performative
+  if (
+    /[«"“]\s*(?:nora\s*[,:]?\s*)?(?:ouvre|ouvrir)\s+(?:le\s+|un\s+)?cycle[^»"”]*[»"”]/i.test(t) &&
+    !/\bje\s+d[eé]cide\b/i.test(t)
+  ) {
+    return true;
+  }
+  return false;
+}
+
+/** Detect OPEN_CYCLE performative anywhere in a developed message (C01). */
+function findOpenCycleAct(
+  text: string,
+): { cycleType: CycleType; objective: string } | { ambiguous: string } | null {
+  if (isNonPerformativeOpenFraming(text)) return null;
+
+  // Reject pure questions about opening.
+  if (
+    /\b(?:peux[- ]tu|peut[- ]on|dois[- ]je|faut[- ]il|et si)\b[^.?!]{0,40}\bouvrir\b/i.test(text) &&
+    !/\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(text) &&
+    !/\bje\s+d[eé]cide\b/i.test(text)
+  ) {
+    return null;
+  }
+  if (/\b(?:imaginons|supposons)\s+que\b/i.test(text) && !/\bje\s+d[eé]cide\b/i.test(text)) {
+    return null;
+  }
+
+  const openRe =
+    /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)(?:je\s+d[eé]cide\s+de\s+commencer[^.!?]*[.!?]?\s*)?(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?([^.!?]+)/i;
+  const m = text.match(openRe);
+  if (!m) {
+    // Alternate: « je décide de commencer le cadrage » without « ouvre » — require cycle name.
+    const begin = text.match(
+      /\bje\s+d[eé]cide\s+de\s+commencer\s+(?:le\s+|un\s+|l['’]\s*)?(?:cycle\s+(?:de\s+|d['’]\s*)?)?([^.!?]+)/i,
+    );
+    if (!begin) return null;
+    if (isExploratoryActLanguage(text) && !/\bje\s+d[eé]cide\b/i.test(text)) return null;
+    const matched = matchCyclePrefix(begin[1]);
+    if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
+    return {
+      cycleType: matched.type,
+      objective: sanitizeCycleObjective(matched.rest, matched.type),
+    };
+  }
+  const matched = matchCyclePrefix(m[1]);
+  if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
+  return {
+    cycleType: matched.type,
+    objective: sanitizeCycleObjective(matched.rest, matched.type),
+  };
+}
+
+/** Detect CLOSE_CYCLE performative in developed natural language (C08). */
+function findCloseCycleAct(
+  text: string,
+): { cycleType?: CycleType; objective: string } | { ambiguous: string } | null {
+  const hasDecideClose = /\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(text);
+  const hasImperativeClose = /\bcl[oô]ture\s+(?:maintenant\s+)?(?:le\s+)?cycle\b/i.test(text);
+  if (/\b(?:peux[- ]tu|peut[- ]on|dois[- ]je|faut[- ]il)\b[^.?!]{0,60}\bcl[oô]tur/i.test(text)) {
+    // Question about closing — not a GO unless assertive decide/imperative also appears.
+    if (!hasDecideClose && !hasImperativeClose) return null;
+  }
+  // Prefer « je décide de clôturer … le cycle TYPE »
+  const decideClose = text.match(
+    /\bje\s+d[eé]cide\s+de\s+cl[oô]turer(?:\s+maintenant)?\s+(?:le\s+)?cycle(?:\s+([A-Za-zàâäéèêëïîôùûüçÀÂÄÉÈÊËÏÎÔÙÛÜÇ/_-]+))?/i,
+  );
+  const imperativeClose = text.match(
+    /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)(?:cl[oô]ture|clore|ferme|fermer)(?:\s+maintenant)?\s+(?:le\s+)?cycle(?:\s+([A-Za-zàâäéèêëïîôùûüçÀÂÄÉÈÊËÏÎÔÙÛÜÇ/_-]+))?/i,
+  );
+  const m = decideClose ?? imperativeClose;
+  if (!m) return null;
+  if (isExploratoryActLanguage(text) && !hasDecideClose && !hasImperativeClose) {
+    return null;
+  }
+  const typeToken = (m[1] ?? "").trim();
+  if (!typeToken) {
+    return { objective: text.slice(0, 200) };
+  }
+  const matched = matchCyclePrefix(typeToken);
+  if (!matched || "ambiguous" in matched) {
+    return { ambiguous: "Clôture ambiguë" };
+  }
+  return { cycleType: matched.type, objective: text.slice(0, 200) };
+}
+
+/**
+ * C06 — negated / refused lift is never an authorizing performative.
+ * Covers « ne lève pas », « ne souhaite pas lever », questions, hypotheses.
+ */
+export function isNegatedOrNonPerformativeLift(text: string): boolean {
+  const t = text.trim();
+  if (!t) return true;
+  if (
+    /\bne\s+l[eè]ve\s+pas\b/i.test(t) ||
+    /\bne\s+pas\s+lever\b/i.test(t) ||
+    /\bne\s+(?:\w+\s+){0,3}pas\s+lever\b/i.test(t) ||
+    /\bne\s+souhaite\s+pas\s+lever\b/i.test(t) ||
+    /\bne\s+veux\s+pas\s+lever\b/i.test(t) ||
+    /\bsans\s+lever\b/i.test(t) ||
+    /\bn['’]?\s*élève\s+pas\b/i.test(t)
+  ) {
+    return true;
+  }
+  if (/\b(?:faut[- ]il|dois[- ]je|peux[- ]tu|peut[- ]on|est-ce\s+que)\b[^.?!]{0,60}\blever\b/i.test(t)) {
+    return true;
+  }
+  if (/\b(?:si\s+je\s+levais|j['’]envisage\s+de\s+lever|je\s+pense\s+(?:à|de)\s+lever)\b/i.test(t)) {
+    return true;
+  }
+  return false;
+}
+
+/** Detect LIFT_RESTRICTION (C06) — conversational path; target resolved by authority bridge. */
+function findLiftRestrictionAct(
+  text: string,
+):
+  | { restrictionKindHint: string; restrictionTargetRefHint?: string }
+  | { ambiguous: string }
+  | null {
+  if (
+    !/\b(l[eè]ve|lever|lève|je\s+l[eè]ve|supprime(?:r)?\s+la\s+restriction|retire(?:r)?\s+la\s+restriction)\b/i.test(
+      text,
+    )
+  ) {
+    return null;
+  }
+  if (isNegatedOrNonPerformativeLift(text)) return null;
+
+  const hasAffirmative =
+    /\b(?:je\s+(?:d[eé]cide\s+de\s+)?l[eè]ve|l[eè]ve\s+(?:uniquement\s+)?(?:la\s+)?restriction|lever\s+(?:uniquement\s+)?(?:la\s+)?restriction)\b/i.test(
+      text,
+    ) || /\bje\s+d[eé]cide\s+de\s+lever\b/i.test(text);
+  if (!hasAffirmative) {
+    // Bare mention of "lever" without assertive framing — not CLEAR.
+    return null;
+  }
+  if (isExploratoryActLanguage(text) && !/\bje\s+(?:d[eé]cide\s+de\s+)?(?:l[eè]ve|lever)\b/i.test(text)) {
+    return { ambiguous: "Levée exploratoire — clarification requise" };
+  }
+  const kind =
+    text.match(/\b(CYCLE_MUTATION|METHOD_USE|METHOD_USAGE|PILOTAGE_EFFECT|[A-Z_]{6,})\b/)?.[1] ??
+    (/\bmutation\s+de\s+cycle|cycle_mutation|restriction\s+de\s+cl[oô]ture/i.test(text)
+      ? "CYCLE_MUTATION"
+      : "");
+  const normalizedKind = kind === "METHOD_USAGE" ? "METHOD_USE" : kind;
+  if (!normalizedKind) {
+    return { ambiguous: "Restriction à lever non identifiée — précisez le type ou la cible" };
+  }
+  // Optional instance hint (« sur ce cycle CADRAGE », cycle id)
+  const targetRef =
+    text.match(/\bsur\s+(?:ce\s+|le\s+)?cycle\s+([A-Za-z0-9_-]+)/i)?.[1] ??
+    text.match(/\bcycle\s+(CADRAGE|UX_UI|[A-Z_]+)\b/i)?.[1] ??
+    undefined;
+  return {
+    restrictionKindHint: normalizedKind,
+    restrictionTargetRefHint: targetRef,
+  };
+}
+
+/**
+ * C05 — extract REVISE statement when designation and new arbitration are
+ * separated by period (no colon), without collapsing to punctuation-only.
+ */
+export function extractReviseStatement(text: string): string | null {
+  const m = text.match(/\bje\s+(?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision)?\b/i);
+  if (!m || m.index === undefined) return null;
+  const after = text.slice(m.index + m[0].length).trim();
+  if (!after) return null;
+
+  // « … décision que j'ai prise sur X. Nouvelle orientation… »
+  const afterDesignation = after.match(
+    /^(?:que\s+.+?)(?:\.\s+|:\s+|—\s+|–\s+|-\s+)(.+)$/i,
+  );
+  if (afterDesignation?.[1]) {
+    return extractDecisionCore(afterDesignation[1].trim().replace(/^[.,;:]+/, "").trim());
+  }
+
+  // « je révise la décision : nouvel énoncé » / « je révise : … »
+  const afterColon = after.match(/^[:：]\s*(.+)$/);
+  if (afterColon?.[1]) {
+    return extractDecisionCore(afterColon[1].trim());
+  }
+
+  // « je révise la décision portant sur X — nouvel énoncé »
+  const afterDash = after.match(/^(?:[^—–:.]+?)(?:—|–)\s*(.+)$/);
+  if (afterDash?.[1]) {
+    return extractDecisionCore(afterDash[1].trim());
+  }
+
+  // Fallback: strip a short designation clause then keep the rest if substantial
+  const stripped = after
+    .replace(/^(?:que\s+j['’]ai\s+prise[^.]*\.\s*)/i, "")
+    .replace(/^(?:sur\s+[^.]+\.\s*)/i, "")
+    .trim();
+  const core = extractDecisionCore(stripped.replace(/^[.,;:]+/, "").trim());
+  if (core.length >= 8 && !/^[.\-–—…]+$/.test(core)) return core;
+  return null;
+}
+
 /**
  * Natural-language qualification. An exact "OK" / "go" is never a cycle GO.
  * Two specialties in one sentence without an explicit transition are ambiguous.
  * "Annule cette méthode" is ambiguous until the pilot names withdraw, replace, or a decision.
+ *
+ * RCT-02: developed messages may embed a clear performative mid-utterance;
+ * punctuation-only objectives and Nora dialogue must not pollute durable D6 fields.
  */
 export function qualifyPilotageIntent(utterance: string): IntentQualification {
   const text = utterance.trim().replace(/\s+/g, " ");
@@ -196,72 +464,114 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {
     };
   }

-  const open = text.match(
-    /^(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?(.+)$/i,
-  );
-  if (open) {
-    const matched = matchCyclePrefix(open[1]);
-    if (!matched || "ambiguous" in matched) {
-      return { clarity: "AMBIGUOUS", reason: "Type de cycle ambigu" };
+  // --- C06 LIFT before OPEN/CLOSE so « lève puis clôture » can be disambiguated ---
+  const lift = findLiftRestrictionAct(text);
+  if (lift && "ambiguous" in lift) {
+    return { clarity: "AMBIGUOUS", reason: lift.ambiguous };
+  }
+  if (lift && "restrictionKindHint" in lift) {
+    // If the same message also asserts CLOSE without reserving « ne clôture pas », AMBIGUOUS.
+    const alsoClose =
+      /\bcl[oô]tur/i.test(text) && !/\bne\s+(?:pas\s+)?(?:cl[oô]tur|ferme)|sans\s+cl[oô]tur/i.test(text);
+    if (alsoClose) {
+      return {
+        clarity: "AMBIGUOUS",
+        reason: "Levée et clôture dans le même message — un seul acte à la fois",
+      };
     }
     return {
       clarity: "CLEAR",
-      operation: "OPEN_CYCLE",
-      cycleType: matched.type,
-      objective: matched.rest || `Cycle ${matched.type}`,
+      operation: "LIFT_RESTRICTION",
+      objective: text.slice(0, 200),
+      restrictionKindHint: lift.restrictionKindHint,
+      restrictionTargetRefHint: lift.restrictionTargetRefHint,
     };
   }

-  const close = text.match(
-    /^(?:cl[oô]ture|cl[oô]turer|clore|ferme|fermer)\s+(?:le\s+)?cycle(?:\s+(.+))?$/i,
-  );
-  if (close) {
-    if (!close[1]) return { clarity: "CLEAR", operation: "CLOSE_CYCLE", objective: text };
-    const matched = matchCyclePrefix(close[1]);
-    if (!matched || "ambiguous" in matched) {
-      return { clarity: "AMBIGUOUS", reason: "Clôture ambiguë" };
+  // C01 / C08 — developed natural OPEN / CLOSE (not only ^-anchored)
+  const openAct = findOpenCycleAct(text);
+  const closeAct = findCloseCycleAct(text);
+  if (openAct && closeAct && !("ambiguous" in openAct) && !("ambiguous" in closeAct)) {
+    return {
+      clarity: "AMBIGUOUS",
+      reason: "Ouverture et clôture dans le même message — clarification requise",
+    };
+  }
+  if (openAct && "ambiguous" in openAct) {
+    return { clarity: "AMBIGUOUS", reason: openAct.ambiguous };
+  }
+  if (openAct && "cycleType" in openAct) {
+    // Soft prose with hedges / « intéressant d'ouvrir » is not a GO — require imperative or « je décide ».
+    const hasImperativeOpen = /\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(text);
+    const hasDecideOpen = /\bje\s+d[eé]cide\b/i.test(text);
+    if (isExploratoryActLanguage(text) && !(hasImperativeOpen || hasDecideOpen)) {
+      return { clarity: "AMBIGUOUS", reason: "Ouverture exploratoire — pas un GO" };
     }
-    return { clarity: "CLEAR", operation: "CLOSE_CYCLE", cycleType: matched.type, objective: text };
+    if (/\b(?:imaginons|supposons|par exemple)\b/i.test(text) && !hasDecideOpen) {
+      return { clarity: "AMBIGUOUS", reason: "Exemple ou hypothèse — pas un GO" };
+    }
+    if (isNonPerformativeOpenFraming(text)) {
+      return { clarity: "NONE", reason: "Citation ou exemple — pas un GO" };
+    }
+    return {
+      clarity: "CLEAR",
+      operation: "OPEN_CYCLE",
+      cycleType: openAct.cycleType,
+      objective: openAct.objective,
+    };
+  }
+  if (closeAct && "ambiguous" in closeAct) {
+    return { clarity: "AMBIGUOUS", reason: closeAct.ambiguous };
+  }
+  if (closeAct && !("ambiguous" in closeAct)) {
+    return {
+      clarity: "CLEAR",
+      operation: "CLOSE_CYCLE",
+      cycleType: closeAct.cycleType,
+      objective: closeAct.objective,
+    };
   }

   /**
-   * Documentary RECORD — explicit performative only.
-   * Questions, soft preferences, citations and Nora advice must not match.
+   * Documentary RECORD — explicit performative; may appear after a short address.
+   * C04: strip Nora dialogue from the durable statement.
    */
   const record = text.match(
-    /^(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i,
-  );
+    /(?:^|[.!?…]\s+)(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i,
+  ) ?? text.match(/^(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i);
   if (record) {
-    const statement = record[1].trim().replace(/[.;]+$/, "");
-    if (statement.length < 8) {
-      return { clarity: "AMBIGUOUS", reason: "Décision insuffisamment déterminée" };
-    }
-    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
-      return { clarity: "AMBIGUOUS", reason: "Préférence exploratoire — pas une décision" };
+    // Prefer RECORD over OPEN when « je décide que … » is documentary (not « commencer le cycle »).
+    if (/\bcommencer\s+(?:le\s+)?(?:cycle|cadrage)\b/i.test(record[1]) && findOpenCycleAct(text)) {
+      // Already handled above; fall through only if open missed.
+    } else if (!/\bouvre\s+(?:le\s+)?cycle\b/i.test(text)) {
+      const statement = extractDecisionCore(record[1].trim().replace(/[.;]+$/, ""));
+      if (statement.length < 8) {
+        return { clarity: "AMBIGUOUS", reason: "Décision insuffisamment déterminée" };
+      }
+      if (isExploratoryActLanguage(statement)) {
+        return { clarity: "AMBIGUOUS", reason: "Préférence exploratoire — pas une décision" };
+      }
+      // Whole-message exploratory only when the decision core itself is soft.
+      return {
+        clarity: "CLEAR",
+        operation: "RECORD_DECISION",
+        objective: statement,
+        statement,
+        objectRef: deriveDecisionObjectRef(statement),
+      };
     }
-    return {
-      clarity: "CLEAR",
-      operation: "RECORD_DECISION",
-      objective: statement,
-      statement,
-      objectRef: deriveDecisionObjectRef(statement),
-    };
   }

   /**
-   * Documentary REVISE — C01: "Finalement…" alone is not enough when hedges remain.
-   * Explicit "Je révise la décision…" is the strong performative.
-   * Target resolution still requires D6 briefs (caller); Level A never authorizes alone.
+   * Documentary REVISE — C05: mid-message « Je révise… » with designation then
+   * new arbitration separated by period (no colon required).
    */
-  const explicitRevise = text.match(
-    /^je (?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision(?:\s+[^:]+)?)?\s*[:,]?\s*(.+)$/i,
-  );
-  if (explicitRevise) {
-    const statement = explicitRevise[1].trim().replace(/[.;]+$/, "");
-    if (statement.length < 8) {
+  if (/\bje\s+(?:révise|revise|corrige|remplace|modifie)\b/i.test(text)) {
+    const statement = extractReviseStatement(text);
+    if (!statement || statement.length < 8 || /^[.\-–—…]+$/.test(statement)) {
       return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
     }
-    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
+    if (isExploratoryActLanguage(statement)) {
       return { clarity: "AMBIGUOUS", reason: "Réflexion — pas un acte de révision" };
     }
     return {
@@ -275,18 +585,16 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {

   const softRevise = text.match(/^(?:finalement|désormais|dorénavant)[,:]?\s+(.+)$/i);
   if (softRevise) {
-    const statement = softRevise[1].trim().replace(/[.;]+$/, "");
+    const statement = extractDecisionCore(softRevise[1].trim().replace(/[.;]+$/, ""));
     if (statement.length < 8) {
       return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
     }
-    // C01: hedges / questions / Nora suggestions must not become CLEAR REVISE.
     if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
       return {
         clarity: "AMBIGUOUS",
         reason: "Expression exploratoire — clarification requise, aucune révision automatique",
       };
     }
-    // Require an assertive change predicate (devient/est/reste/sera) — not mere topic mention.
     if (!/\b(devient|est|reste|sera|n['’]est plus|n['’]est pas)\b/i.test(statement)) {
       return {
         clarity: "AMBIGUOUS",
```

### `conversation-authority.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 402638fb..38e7c7c5 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -324,8 +324,86 @@ export async function applyConversationalAuthority(input: {
     return outcomeFromCommand(command, "RECORD_DECISION", clientCommandKey);
   }

+  /** C06 — resolve a unique ACTIVE restriction before LIFT (never approximate). */
+  if (qualified.operation === "LIFT_RESTRICTION") {
+    const hint = (qualified.restrictionKindHint ?? "").trim().toUpperCase();
+    const targetHint = (qualified.restrictionTargetRefHint ?? "").trim();
+    const active = projection.restrictions.filter((r) => r.status === "ACTIVE");
+    let pool = hint
+      ? active.filter((r) => r.targetKind.toUpperCase() === hint)
+      : active;
+    // If the pilot named an instance/specialty, require a matching targetRef
+    // (a lone matching kind with a contradictory target is not enough).
+    if (targetHint && pool.length > 0) {
+      const hintNorm = targetHint.toUpperCase();
+      const narrowed = pool.filter((r) => {
+        const ref = (r.targetRef || "*").toUpperCase();
+        if (ref === "*" || ref === hintNorm) return true;
+        // Specialty name vs cycle id: allow when pilot says CADRAGE and target is cycle id
+        // only if projection cycle type matches — otherwise require exact/soft includes.
+        if (projection.cycle && hintNorm === projection.cycle.cycleType.toUpperCase()) {
+          return ref === projection.cycle.id.toUpperCase() || ref === "*";
+        }
+        return ref.includes(hintNorm) || hintNorm.includes(ref);
+      });
+      if (narrowed.length === 0) {
+        return {
+          attempted: false,
+          intentClarity: "AMBIGUOUS",
+          intentReason:
+            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
+          command: null,
+          humanDecisionCreated: false,
+          decisionId: null,
+          clarification:
+            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
+          source: "clarification_only",
+          operation: "LIFT_RESTRICTION",
+          clientCommandKey,
+        };
+      }
+      pool = narrowed;
+    }
+    if (pool.length === 0) {
+      return {
+        attempted: false,
+        intentClarity: "AMBIGUOUS",
+        intentReason: "Aucune restriction active correspondant à la demande",
+        command: null,
+        humanDecisionCreated: false,
+        decisionId: null,
+        clarification: "Aucune restriction active correspondant à la demande — précisez la cible",
+        source: "clarification_only",
+        operation: "LIFT_RESTRICTION",
+        clientCommandKey,
+      };
+    }
+    if (pool.length > 1) {
+      return {
+        attempted: false,
+        intentClarity: "AMBIGUOUS",
+        intentReason: "Plusieurs restrictions actives — précisez laquelle lever",
+        command: null,
+        humanDecisionCreated: false,
+        decisionId: null,
+        clarification: "Plusieurs restrictions actives — précisez laquelle lever",
+        source: "clarification_only",
+        operation: "LIFT_RESTRICTION",
+        clientCommandKey,
+      };
+    }
+    const target = pool[0];
+    const command = await executePilotageCommand(input.pilotId, input.projectId, {
+      ...base,
+      operation: "LIFT_RESTRICTION",
+      restrictionId: target.id,
+    });
+    return outcomeFromCommand(command, "LIFT_RESTRICTION", clientCommandKey);
+  }
+
   const command = await executePilotageCommand(input.pilotId, input.projectId, {
     ...base,
+    operation: qualified.operation,
     cycleType: qualified.cycleType,
     toCycleType: qualified.toCycleType,
     methodRef: qualified.methodRef,
```

### `divergence-assist.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts b/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
index d9175408..e8832c43 100644
--- a/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
+++ b/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
@@ -111,6 +111,19 @@ export type AuthorityReviseCandidate = DecisionBrief & {
  * No chronological / newest-wins / truncation selection.
  * Caller must require exactly one candidate before REVISE.
  */
+/**
+ * C05 — when objectRef is weak/noisy, an explicit « je révise… » may still
+ * designate a prior RECORD via shared statement tokens (e.g. « remplace la
+ * priorité sur le suivi des décisions »). Requires ≥2 significant overlaps.
+ */
+function utteranceTouchesPriorStatement(userText: string, statement: string): boolean {
+  const hay = normalizeText(userText);
+  const tokens = significantTokens(statement).filter((t) => t.length >= 5);
+  if (tokens.length === 0) return false;
+  const hits = tokens.filter((t) => hay.includes(t));
+  return hits.length >= 2;
+}
+
 export function findAuthorityReviseCandidates(
   userText: string,
   rows: DecisionBrief[],
@@ -118,9 +131,13 @@ export function findAuthorityReviseCandidates(
   const text = userText.trim();
   if (!text) return [];
   const applicable = selectAllApplicableBriefs(rows);
+  const explicitRevise = /\bje\s+(?:révise|revise|corrige|remplace|modifie)\b/i.test(text);
   const out: AuthorityReviseCandidate[] = [];
   for (const row of applicable) {
-    if (!utteranceTouchesObject(text, row.objectRef)) continue;
+    const touchesObject = utteranceTouchesObject(text, row.objectRef);
+    const touchesStatement =
+      explicitRevise && utteranceTouchesPriorStatement(text, row.statement);
+    if (!touchesObject && !touchesStatement) continue;
     if (normalizeText(text) === normalizeText(row.statement)) continue;
     const framing = frameConfrontation(row.statement, text);
     // Compatible restatement is not a revise target.
```

### `ml3-pilotage.pg.test.ts` (bloc Critical Review)

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index 56b67e34..66a3df0a 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -1709,4 +1709,258 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
     const cmds = await reconcileCommandByClientKey(pilotId, projectId, `conv-auth:${turnKey}`);
     expect(cmds.status).toMatch(/APPLIED|ALREADY_APPLIED/);
   });
+
+  /**
+   * Critical Review ML3/RCT-02 — conversational chain proofs in PostgreSQL
+   * (C01 citation, C05 T05 revise, C06 negated lift). Parser-only is not enough.
+   */
+  describe("RCT-02 Critical Review conversational chain (PG)", () => {
+    const T05_EXACT =
+      "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";
+
+    it("C01 CR: citation / specimen never OPEN_CYCLE (no cycle in PG)", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      for (const content of [
+        "Voici une phrase de test : Nora, ouvre le cycle cadrage",
+        "Ne fais pas ceci : Nora, ouvre le cycle cadrage",
+      ]) {
+        const { pilotId, projectId, preparationId } = await seedProject(
+          `cr-c01-${content.slice(0, 12).replace(/\W+/g, "")}`,
+        );
+        const msgId = await insertUserMessage(preparationId, content);
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId,
+          userMessageId: msgId,
+          content,
+          clientTurnKey: `cr-c01-${newId("turn")}`,
+        });
+        expect(outcome.attempted).toBe(false);
+        expect(outcome.humanDecisionCreated).toBe(false);
+        expect(outcome.operation ?? "").not.toBe("OPEN_CYCLE");
+        const view = await getPilotageProjection(pilotId, projectId);
+        expect(view.cycle).toBeNull();
+        expect(view.revision).toBe(0);
+        expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
+      }
+    });
+
+    it("C01 non-regression: developed T01 OPEN_CYCLE applies in PG", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const content =
+        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.";
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c01-pos");
+      const msgId = await insertUserMessage(preparationId, content);
+      const outcome = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content,
+        clientTurnKey: `cr-c01-pos-${newId("turn")}`,
+      });
+      expect(outcome.attempted).toBe(true);
+      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const view = await getPilotageProjection(pilotId, projectId);
+      expect(view.cycle?.cycleType).toBe("CADRAGE");
+      expect(view.cycle?.status).toBe("ACTIVE");
+      expect(view.cycle?.objective).toMatch(/problème utilisateur/i);
+      expect(view.cycle?.objective).not.toBe(".");
+    });
+
+    it("C05 CR: T05 exact → prior REVISED, new APPLICABLE, clean statement", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-t05");
+      const priorContent =
+        "Je décide que nous devons examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes, mais cela ne signifie pas que le besoin utilisateur est validé. Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question utile.";
+      const priorMsg = await insertUserMessage(preparationId, priorContent);
+      const prior = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: priorMsg,
+        content: priorContent,
+        clientTurnKey: `cr-c05-prior-${newId("turn")}`,
+      });
+      expect(prior.attempted).toBe(true);
+      expect(prior.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(prior.decisionId).toBeTruthy();
+      const before = await listDecisionJournal(pilotId, projectId);
+      const priorDecision = before.find((d) => d.id === prior.decisionId);
+      expect(priorDecision?.state).toBe("APPLICABLE");
+      expect(priorDecision?.statement).toMatch(/suivi des décisions/i);
+      expect(priorDecision?.statement).not.toMatch(/aide-moi/i);
+
+      const reviseMsg = await insertUserMessage(preparationId, T05_EXACT, { ordinal: 2 });
+      const revised = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: reviseMsg,
+        content: T05_EXACT,
+        clientTurnKey: `cr-c05-revise-${newId("turn")}`,
+      });
+      expect(revised.attempted).toBe(true);
+      expect(revised.operation).toBe("REVISE_DECISION");
+      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(revised.humanDecisionCreated).toBe(true);
+
+      const after = await listDecisionJournal(pilotId, projectId);
+      const oldRow = after.find((d) => d.id === prior.decisionId);
+      expect(oldRow?.state).toBe("REVISED");
+      const applicable = after.filter(
+        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
+      );
+      expect(applicable).toHaveLength(1);
+      expect(applicable[0]?.statement).toMatch(/nouvelle orientation remplace/i);
+      expect(applicable[0]?.statement).toMatch(/coordination interéquipes/i);
+      expect(applicable[0]?.statement).not.toBe(".");
+      expect(applicable[0]?.statement).not.toMatch(/^que j'ai prise/i);
+      expect(applicable[0]?.id).toBe(revised.decisionId);
+    });
+
+    it("C06 CR: negated lift never mutates restriction in PG", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-neg");
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "Sous restriction",
+      });
+      expect(opened.status).toBe("APPLIED");
+      const applied = await applyGovernanceRestriction(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: opened.revision ?? 1,
+        sourceRef: newId("src"),
+        targetKind: "CYCLE_MUTATION",
+        targetRef: opened.effects.find((e) => e.effectKind === "OPEN_CYCLE")?.targetRef ?? "*",
+        statement: "Freeze cycle mutations",
+      });
+      expect(applied.status).toBe("APPLIED");
+      const before = await getPilotageProjection(pilotId, projectId);
+      expect(before.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
+      const revBefore = before.revision;
+
+      const negated = [
+        "Ne lève pas la restriction CYCLE_MUTATION",
+        "Je ne souhaite pas lever la restriction CYCLE_MUTATION",
+      ];
+      for (let i = 0; i < negated.length; i += 1) {
+        const content = negated[i]!;
+        const msgId = await insertUserMessage(preparationId, content, { ordinal: i + 1 });
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId,
+          userMessageId: msgId,
+          content,
+          clientTurnKey: `cr-c06-neg-${newId("turn")}`,
+        });
+        expect(outcome.attempted).toBe(false);
+        expect(outcome.humanDecisionCreated).toBe(false);
+        expect(outcome.operation ?? "").not.toBe("LIFT_RESTRICTION");
+      }
+
+      const after = await getPilotageProjection(pilotId, projectId);
+      expect(after.revision).toBe(revBefore);
+      expect(after.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
+      expect(after.cycle?.status).toBe("ACTIVE");
+    });
+
+    it("C06 CR: affirmative lift CLEAR → restriction lifted in PG", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-pos");
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "À lever",
+      });
+      expect(opened.status).toBe("APPLIED");
+      const applied = await applyGovernanceRestriction(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: opened.revision ?? 1,
+        sourceRef: newId("src"),
+        targetKind: "CYCLE_MUTATION",
+        statement: "Freeze",
+      });
+      expect(applied.status).toBe("APPLIED");
+      expect(
+        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
+          (r) => r.status === "ACTIVE",
+        ),
+      ).toHaveLength(1);
+
+      const content =
+        "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.";
+      const msgId = await insertUserMessage(preparationId, content);
+      const outcome = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content,
+        clientTurnKey: `cr-c06-pos-${newId("turn")}`,
+      });
+      expect(outcome.attempted).toBe(true);
+      expect(outcome.operation).toBe("LIFT_RESTRICTION");
+      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const after = await getPilotageProjection(pilotId, projectId);
+      expect(after.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
+      expect(after.cycle?.status).toBe("ACTIVE");
+    });
+
+    it("C06 CR: wrong targetRef with lone matching kind → no lift", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-wrong-tgt");
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "Cible",
+      });
+      expect(opened.status).toBe("APPLIED");
+      const cycleId =
+        opened.effects.find((e) => e.effectKind === "OPEN_CYCLE")?.targetRef ?? "unknown";
+      const applied = await applyGovernanceRestriction(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: opened.revision ?? 1,
+        sourceRef: newId("src"),
+        targetKind: "CYCLE_MUTATION",
+        targetRef: cycleId,
+        statement: "Freeze CADRAGE instance",
+      });
+      expect(applied.status).toBe("APPLIED");
+
+      // Pilot names a specialty that is not the active cycle type → refuse
+      const content =
+        "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle UX_UI. Ne clôture pas le cycle.";
+      const msgId = await insertUserMessage(preparationId, content);
+      const outcome = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content,
+        clientTurnKey: `cr-c06-wrong-${newId("turn")}`,
+      });
+      expect(outcome.attempted).toBe(false);
+      expect(outcome.humanDecisionCreated).toBe(false);
+      expect(
+        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
+          (r) => r.status === "ACTIVE",
+        ),
+      ).toHaveLength(1);
+    });
+  });
 });
```

### Docs as-built (résumé)

- `specification-technique.md` — section Critical Review reprise C01/C05/C06
- `tracabilite-r2-r3-r4.md` — preuves unit+PG mises à jour
- `delivery-history.md` — `DELIV-2026-11-06-ML3-RCT02-CR-REWORK-LOCAL`

(Diffs nora-adapter / nora-context inchangés depuis lot précédent C03/C07 — non rejoués ici.)

---

## 6. Preuves exécutées

### 6.1 Unit (45 passed)

```
◇ injected env (8) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs/projects/sfia-studio-next/web

 ✓ tests/unit/ml3-rct02-intent.test.ts (11 tests) 9ms
 ✓ tests/unit/ml3-cki-intent.test.ts (10 tests) 8ms
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:19.661Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_34ac9bef-9496-4cd2-ad4a-df290650a53a","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:19.663Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_34ac9bef-9496-4cd2-ad4a-df290650a53a","attempt_id":"att_15fc6ee2-7de6-4ccc-8d95-a2b3b1ad17fe","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/ml3-b13-divergence.test.ts (24 tests) 6ms

 Test Files  3 passed (3)
      Tests  45 passed (45)
   Start at  21:44:18
   Duration  743ms (transform 84ms, setup 0ms, collect 409ms, tests 23ms, environment 0ms, prepare 58ms)

```

### 6.2 PG Critical Review chain (6 passed)

```
◇ injected env (8) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs/projects/sfia-studio-next/web

stderr | tests/integration/ml3-pilotage.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml3-pilotage.pg.test.ts (41 tests | 35 skipped) 291ms

 Test Files  1 passed (1)
      Tests  6 passed | 35 skipped (41)
   Start at  21:44:19
   Duration  631ms (transform 87ms, setup 0ms, collect 246ms, tests 291ms, environment 0ms, prepare 24ms)

```

### 6.3 PG suite complète ml3-pilotage (41 passed)

```
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.543Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_377cfefe-176c-468a-ad08-ddb62fc24282","operation_id":"op_2586792f-8ceb-4704-8305-6c6f89818320","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.551Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_2586792f-8ceb-4704-8305-6c6f89818320","generation_id":"gen_04b11dca-0015-408c-8a12-0d23b6b154cd","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.552Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_2586792f-8ceb-4704-8305-6c6f89818320","generation_id":"gen_04b11dca-0015-408c-8a12-0d23b6b154cd","attempt_id":"att_d7d37ce2-98d0-4073-a809-27ee5ca2825d","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.556Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_377cfefe-176c-468a-ad08-ddb62fc24282","operation_id":"op_2586792f-8ceb-4704-8305-6c6f89818320","generation_id":"gen_04b11dca-0015-408c-8a12-0d23b6b154cd","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.561Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_2b5a97f8-06ba-4ac4-bfaa-4b035ddc5d08","operation_id":"op_4bf43eab-b288-47f8-b117-7d940c935a60","outcome":"PARTIAL","meta":{"client_turn_key_fp":"eea9a4d1a26e"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.563Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_2b5a97f8-06ba-4ac4-bfaa-4b035ddc5d08","operation_id":"op_4bf43eab-b288-47f8-b117-7d940c935a60","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.573Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_4bf43eab-b288-47f8-b117-7d940c935a60","generation_id":"gen_81c31741-50f9-4b56-8a98-8ea84b47a23a","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.573Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_4bf43eab-b288-47f8-b117-7d940c935a60","generation_id":"gen_81c31741-50f9-4b56-8a98-8ea84b47a23a","attempt_id":"att_16aba67c-f72f-48cf-8121-5b9f9e7c26e0","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.578Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_2b5a97f8-06ba-4ac4-bfaa-4b035ddc5d08","operation_id":"op_4bf43eab-b288-47f8-b117-7d940c935a60","generation_id":"gen_81c31741-50f9-4b56-8a98-8ea84b47a23a","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.582Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_b093f883-61e1-4b88-83df-509b3aa916ab","operation_id":"op_f9f6165f-fe2b-4ef0-9597-28b9054f3b18","outcome":"PARTIAL","meta":{"client_turn_key_fp":"552a41ba8196"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.584Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_b093f883-61e1-4b88-83df-509b3aa916ab","operation_id":"op_f9f6165f-fe2b-4ef0-9597-28b9054f3b18","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.593Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_f9f6165f-fe2b-4ef0-9597-28b9054f3b18","generation_id":"gen_c3c33d78-e018-45e8-9e37-28945440e919","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.593Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_f9f6165f-fe2b-4ef0-9597-28b9054f3b18","generation_id":"gen_c3c33d78-e018-45e8-9e37-28945440e919","attempt_id":"att_a69d0a9b-f743-4452-968b-3627f5837107","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.598Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_b093f883-61e1-4b88-83df-509b3aa916ab","operation_id":"op_f9f6165f-fe2b-4ef0-9597-28b9054f3b18","generation_id":"gen_c3c33d78-e018-45e8-9e37-28945440e919","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.612Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_3b2d2b63-52b3-4346-9e6d-e3e2816c46e6","operation_id":"op_78478239-a8d2-4d49-b0d1-42a5e156a367","outcome":"PARTIAL","meta":{"client_turn_key_fp":"eb0aea096050"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.623Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_3b2d2b63-52b3-4346-9e6d-e3e2816c46e6","operation_id":"op_78478239-a8d2-4d49-b0d1-42a5e156a367","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.633Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.unknown","component":"d3.conversation","request_id":"req_3b2d2b63-52b3-4346-9e6d-e3e2816c46e6","operation_id":"op_78478239-a8d2-4d49-b0d1-42a5e156a367","outcome":"UNKNOWN","error_category":"PROVIDER_EXCEPTION"}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T20:44:22.638Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.replay","component":"d3.conversation","request_id":"req_a43cdd8a-231a-455f-b01b-444192a9f369","operation_id":"op_78478239-a8d2-4d49-b0d1-42a5e156a367","outcome":"UNKNOWN","meta":{"status":"UNKNOWN","reconciled":false}}
 ✓ tests/integration/ml3-pilotage.pg.test.ts (41 tests) 1882ms

 Test Files  1 passed (1)
      Tests  41 passed (41)
   Start at  21:44:20
   Duration  2.23s (transform 126ms, setup 0ms, collect 251ms, tests 1.88s, environment 0ms, prepare 23ms)

```

### 6.4 Lint

`next lint` — No ESLint warnings or errors (exécuté 2026-11-06).

### 6.5 Oracles PG vs Critical Review

| Oracle | Résultat |
|--------|----------|
| C01 « Voici une phrase de test : Nora, ouvre… » | `attempted=false`, cycle null, revision 0 |
| C01 « Ne fais pas ceci : Nora, ouvre… » | idem |
| C01 T01 développé | `OPEN_CYCLE` APPLIED, CADRAGE ACTIVE, objectif ≠ `.` |
| C05 T05 exact (période, sans `:`) | prior `REVISED`, new `APPLICABLE`, énoncé « nouvelle orientation remplace… » |
| C06 « Ne lève pas… » / « Je ne souhaite pas lever… » | zéro mutation, restriction ACTIVE inchangée |
| C06 levée affirmative T10 | restriction ACTIVE → 0, cycle reste ACTIVE |
| C06 kind ok + targetRef UX_UI vs CADRAGE | clarification, restriction inchangée |

---

## 7. Non-régression C02–C08

- C02 sanitize objectif — unit + PG T01
- C03/C07 CKI silencieux / `restrictions_actives=aucune` — code inchangé ce cycle
- C04 statement sans « aide-moi » — PG T04→T05
- C08 CLOSE développé — unit conservé
- CR-01 / CR-02 revise authority — suite PG 41/41 PASS

---

## 8. Limites honnêtes

- **LIVE Nora / RECETTE runtime :** NOT RE-EXECUTED — candidat `ba831b25` :3200 préservé
- **Push projet / PR / merge / deploy :** NON (mandat)
- **NLP universel :** NOT CLAIMED — frontières linguistiques FR documentées
- **Décisions historiques RECETTE polluées :** non migrées

---

## 9. Verdict

`READY FOR CHATGPT RE-REVIEW`

Conditions: trois anomalies C01/C05/C06 corrigées ; invariants D5/D6 + USER_MESSAGE + idempotence démontrés en PostgreSQL ; as-built synchronisé ; handoff L3 à publier sur `sfia/review-handoff`.
