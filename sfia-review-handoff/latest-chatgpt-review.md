# SFIA Studio Next — Review Pack FULL
# ML4C S05 — Robustesse de qualification des intentions (PR #676)

**Date/heure :** 2026-11-11 20:32 CET (2026-11-11 19:32 UTC)
**Cycle :** 8 — Delivery / implémentation (INC S05)
**Profil :** Critical
**PR :** https://github.com/mcleland147/sfia-workspace/pull/676
**Merge :** NON AUTORISÉ (GO correctif S05 seulement)
**Version :** NO RELEASE / `0.0.0-dev`

---

## 1. Git Truth Check

| Contrôle | Avant | Après |
| --- | --- | --- |
| Branche | `build/next-ml4c-functional-convergence` | idem |
| HEAD | `ba91cf71…` (CI fail) | **`8cff159189a4b20399318b416dccfcebc6149233`** |
| Tree | `9d277006…` | **`bf69e086e2bf6253feb370472872c8a72fb82ff3`** |
| main / merge-base | `6d237452…` | inchangé |
| Remote branch | match tip | match tip (push FF) |
| Dirty produit | pack only | pack only |

**Verdict Git Truth :** PASS.

---

## 2. Cause de conception

`looksLikeIndependentDialogue()` classifiait **par exclusion** :
si aucune regex locale ne matchait → dialogue indépendant.

`qualifyPilotageIntent("Ouvre le cycle cadrage.")` est déjà **CLEAR OPEN_CYCLE**,
mais le classificateur client n'utilisait pas ce propriétaire.

`PILOTAGE_SIGNAL_RE` client n'acceptait que `ouvre (un )?cycle` → « le » manquant
→ indépendant → `rememberPending` non appelé → CR-02 rompu après ACK perdu.

---

## 3. Qualification des mécanismes existants

| Mécanisme | Rôle | DB ? | Réutilisation |
| --- | --- | --- | --- |
| `qualifyPilotageIntent` | CLEAR/AMBIGUOUS/NONE D5/D6 linguistique | non | **oui** (client) |
| `qualifyDocumentAct` | CREATE/REVISE/NONE D4 | non | **oui** |
| `qualifyStudioIntent` | projection D3 serveur | n/a | non (serveur) |
| `qualifyPublicationMission` | publish mission | via module DB | **non** côté browser |
| ancien `looksLikeIndependentDialogue` | exclusion locale | non | remplacé |

**Solution retenue :** `qualifyThreadTurn` → trois catégories de qualification
(DIALOGUE_INDEPENDANT / INTENTION_EFFET / INCERTAIN), sans second moteur ni LLM.

**Écartées :**
- simple ajout de déterminants (`le|la|…`) seuls ;
- appel LLM LIVE ;
- nouvelle API / table / machine à états métier.

---

## 4. Comportement

- INTENTION_EFFET : `rememberPending` ; bloque nouveau métier si pending.
- INCERTAIN : jamais indépendant ; bloque si pending ; `rememberPending` si envoyé.
- DIALOGUE_INDEPENDANT : positif (cognitif) ; peut continuer ; ne clobber pas pending ;
  COMPLETE préserve pending A (`preserveUnresolvedMetierPending`).

Serveur reste seule autorité d'exécution.

---

## 5. Fichiers modifiés (commit `8cff1591`)

1. `web/src/domains/pilotage/thread-recovery.ts`
2. `web/src/app/projects/[projectId]/page.tsx`
3. `web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts` (créé)
4. `web/tests/unit/ml4c-s01-s03-guards.test.ts`
5. `construction/delivery-history.md`

### Diff production — thread-recovery

```diff
commit 8cff159189a4b20399318b416dccfcebc6149233
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 11 20:25:44 2026 +0100

    fix(next): ML4C S05 robust thread-turn qualification
    
    Replace exclusion-based independent dialogue with a three-way
    qualification that reuses qualifyPilotageIntent, so unrecognized
    effect formulations stay uncertain and CR-02 pending survives ACK loss.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index 1e2132c2..e73e0688 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -1,9 +1,14 @@
 /**
  * CR-02 — client-side recovery helpers (no DB, no secrets).
  * sessionStorage pending is a local aid; durable truth stays in D5/D6.
+ *
+ * ML4C S05 — thread turn qualification reuses owner linguistic qualifiers
+ * (qualifyPilotageIntent / qualifyDocumentAct). Never invents authority.
+ * Unrecognized ≠ automatically independent.
  */
 
 import { qualifyDocumentAct } from "@/domains/conversation/document-act";
+import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
 
 export type ThreadPendingTurn = {
   content: string;
@@ -11,27 +16,172 @@ export type ThreadPendingTurn = {
   clientCommandKey: string;
 };
 
+/**
+ * Qualification categories for a conversational turn over an optional pending.
+ * Not a métier state machine — linguistic triage only.
+ */
+export type ThreadTurnKind =
+  | "DIALOGUE_INDEPENDANT"
+  | "INTENTION_EFFET"
+  | "INCERTAIN";
+
+export type ThreadTurnQualification = {
+  kind: ThreadTurnKind;
+  reason: string;
+  /** Owner pilotage clarity when consulted (never an execution grant). */
+  pilotageClarity?: "CLEAR" | "AMBIGUOUS" | "NONE";
+  pilotageOperation?: string;
+};
+
 const PROJECT_CREATE_RE =
-  /\b(?:crée|créer|créez|creez)\s+(?:(?:un|une|le|la|ce|cet)\s+)?(?:autre\s+)?projet\b/i;
+  /\b(?:crée|créer|créez|creez|cree|creer)\s+(?:(?:un|une|le|la|ce|cet|the|l)\s+)?(?:autre\s+)?projet\b/i;
+
 /** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
 const PUBLISH_RE =
   /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;
-const PILOTAGE_SIGNAL_RE =
-  /\b(?:je\s+décide|j['']autorise|autorise(?:r|z)?|accorde(?:r|z)?|ouvre\s+(?:un\s+)?cycle|enregistre\s+(?:cette\s+)?décision)\b/i;
 
 /**
- * ML4C S05 / Decision 1 — independent cognitive turn (no D2/D4/D6/D9 effect intent).
+ * Residual operational surface — present when an effect may be intended even if
+ * owner CLEAR qualification missed a noisy variant. Never authorizes alone.
+ */
+const RESIDUAL_EFFECT_SURFACE_RE =
+  /\b(?:ouvr(?:e|ir|ez|ait|irait)|lance|lancer|démarre|demarre|démarrer|demarrer|publie|publier|crée|créer|créez|creez|autorise|autoriser|accorde|accorder|clôture|cloture|clôturer|cloturer|révoque|revoque|enregistre\s+(?:cette\s+)?décision|je\s+décide|j['']autorise|fais[- ]le|fais(?:\s+ça|\s+le)?|tu\s+peux|peux[- ]tu|peut[- ]on|pourrais[- ]tu|pourrait[- ]on|et\s+si\s+on)\b/i;
+
+/** Positive cognitive / meta markers for independent dialogue (must not request an effect). */
+const COGNITIVE_INDEPENDENT_RE =
+  /\b(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/i;
+
+/** Quotation / meta mention of a command (not performing it). */
+const META_COMMAND_CITATION_RE =
+  /\b(?:que\s+signifie|que\s+veut\s+dire|signifie)\s+(?:la\s+)?(?:commande|formulation|phrase)?\s*['«"]/i;
+
+function hasCompoundEffectAfterExplain(text: string): boolean {
+  // « Explique … puis ouvre le cycle » — mixed: not independent.
+  return (
+    /\b(?:explique|pourquoi|quelle)\b/i.test(text) &&
+    /\b(?:puis|ensuite|et)\b[\s\S]{0,80}\b(?:ouvre|ouvrir|publie|crée|créer|lance|démarre)\b/i.test(
+      text,
+    )
+  );
+}
+
+/**
+ * Qualify a thread turn for UX continuity (pending gate / rememberPending).
+ * Reuses D5/D6/D4 linguistic owners — does not authorize or execute.
+ */
+export function qualifyThreadTurn(text: string): ThreadTurnQualification {
+  const t = text.trim().replace(/\s+/g, " ");
+  if (!t) {
+    return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
+  }
+
+  const documentAct = qualifyDocumentAct(t);
+  if (documentAct.kind === "CREATE" || documentAct.kind === "REVISE") {
+    return {
+      kind: "INTENTION_EFFET",
+      reason: `Acte documentaire ${documentAct.kind}`,
+      pilotageClarity: "NONE",
+    };
+  }
+
+  const pilotage = qualifyPilotageIntent(t);
+  if (pilotage.clarity === "CLEAR") {
+    return {
+      kind: "INTENTION_EFFET",
+      reason: `Pilotage CLEAR ${pilotage.operation}`,
+      pilotageClarity: "CLEAR",
+      pilotageOperation: pilotage.operation,
+    };
+  }
+  if (pilotage.clarity === "AMBIGUOUS") {
+    return {
+      kind: "INCERTAIN",
+      reason: pilotage.reason || "Pilotage ambigu",
+      pilotageClarity: "AMBIGUOUS",
+    };
+  }
+
+  if (PROJECT_CREATE_RE.test(t)) {
+    return {
+      kind: "INTENTION_EFFET",
+      reason: "Création de projet",
+      pilotageClarity: "NONE",
+    };
+  }
+
+  // Local publish surface only — do not import mission-continuity (DB) into the browser.
+  if (PUBLISH_RE.test(t)) {
+    return {
+      kind: "INTENTION_EFFET",
+      reason: "Publication / merge",
+      pilotageClarity: "NONE",
+    };
+  }
+
+  if (hasCompoundEffectAfterExplain(t)) {
+    return {
+      kind: "INCERTAIN",
+      reason: "Formulation mixte explication + effet",
+      pilotageClarity: "NONE",
+    };
+  }
+
+  // Residual operational vocabulary without CLEAR owner match → uncertain,
+  // never auto-independent (fixes « Ouvre le/L/the cycle » bypass class).
+  if (RESIDUAL_EFFECT_SURFACE_RE.test(t)) {
+    // Pure meta/citation about a command can still be cognitive.
+    if (
+      META_COMMAND_CITATION_RE.test(t) ||
+      (/^que\s+signifie\b/i.test(t) && !/\b(?:puis|ensuite)\b/i.test(t))
+    ) {
+      return {
+        kind: "DIALOGUE_INDEPENDANT",
+        reason: "Citation / méta-question sur une commande",
+        pilotageClarity: "NONE",
+      };
+    }
+    // « Pourquoi ouvrir… » — explanation about an act, not a request (owner already NONE).
+    if (
+      /\bpourquoi\b/i.test(t) &&
+      /\b(?:ouvrir|ouvre|publier|créer|créer)\b/i.test(t) &&
+      !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(t) &&
+      !/\bje\s+d[eé]cide\b/i.test(t)
+    ) {
+      return {
+        kind: "DIALOGUE_INDEPENDANT",
+        reason: "Question explicative évoquant une opération",
+        pilotageClarity: "NONE",
+      };
+    }
+    return {
+      kind: "INCERTAIN",
+      reason: "Surface opérationnelle sans qualification CLEAR",
+      pilotageClarity: pilotage.clarity,
+    };
+  }
+
+  if (COGNITIVE_INDEPENDENT_RE.test(t) || /\?$/.test(t)) {
+    return {
+      kind: "DIALOGUE_INDEPENDANT",
+      reason: "Question / dialogue cognitif sans surface d'effet",
+      pilotageClarity: "NONE",
+    };
+  }
+
+  // Soft non-operational prose (no residual effect surface) — independent.
+  return {
+    kind: "DIALOGUE_INDEPENDANT",
+    reason: "Dialogue sans signal d'effet résiduel",
+    pilotageClarity: "NONE",
+  };
+}
+
+/**
+ * ML4C S05 / Decision 1 — true only when independence is positively established.
  * Client UX aid only — never an execution authority.
- * Interrogative phrasing that still requests an effect stays non-independent.
  */
 export function looksLikeIndependentDialogue(text: string): boolean {
-  const t = text.trim();
-  if (!t) return false;
-  if (qualifyDocumentAct(t).kind !== "NONE") return false;
-  if (PROJECT_CREATE_RE.test(t)) return false;
-  if (PUBLISH_RE.test(t)) return false;
-  if (PILOTAGE_SIGNAL_RE.test(t)) return false;
-  return true;
+  return qualifyThreadTurn(text).kind === "DIALOGUE_INDEPENDANT";
 }
 
 /** Deterministic business key for a conversational turn. */
@@ -69,18 +219,36 @@ export function shouldClearThreadPending(input: {
 /**
  * Exclusive in-flight guard: a distinct new act must not silently overwrite
  * an unresolved pending. Same content ⇒ retry of the same logical act.
- * Independent dialogue (Decision 1) may proceed without replacing pending.
+ * Only positively established independent dialogue may proceed without
+ * replacing pending. INCERTAIN and INTENTION_EFFET stay blocked.
  */
 export function mayStartNewThreadAct(input: {
   unresolved: ThreadPendingTurn | null | undefined;
   nextContent: string;
   /** When true, allow a cognitive question without overwriting métier pending. */
   nextIsIndependentDialogue?: boolean;
+  /** Preferred: full turn kind (INCERTAIN never bypasses pending). */
+  nextTurnKind?: ThreadTurnKind;
 }): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
   const pending = input.unresolved;
   if (!pending) return { ok: true };
   if (pending.content.trim() === input.nextContent.trim()) return { ok: true };
-  if (input.nextIsIndependentDialogue) return { ok: true };
+
+  const kind =
+    input.nextTurnKind ??
+    (input.nextIsIndependentDialogue ? "DIALOGUE_INDEPENDANT" : "INTENTION_EFFET");
+
+  if (kind === "DIALOGUE_INDEPENDANT") return { ok: true };
+
+  if (kind === "INCERTAIN") {
+    return {
+      ok: false,
+      reason:
+        "Intention incertaine pendant une tentative non résolue — clarifier ou réconcilier avant un nouvel acte",
+      pending,
+    };
+  }
+
   return {
     ok: false,
     reason:

```

### Diff page.tsx

```diff
commit 8cff159189a4b20399318b416dccfcebc6149233
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 11 20:25:44 2026 +0100

    fix(next): ML4C S05 robust thread-turn qualification
    
    Replace exclusion-based independent dialogue with a three-way
    qualification that reuses qualifyPilotageIntent, so unrecognized
    effect formulations stay uncertain and CR-02 pending survives ACK loss.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 599d1b9a..9439c291 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -14,9 +14,9 @@ import {
 } from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
-  looksLikeIndependentDialogue,
   mayStartNewThreadAct,
   pendingStorageKey,
+  qualifyThreadTurn,
   shouldClearThreadPending,
   type ThreadPendingTurn,
 } from "@/domains/pilotage/thread-recovery";
@@ -681,10 +681,12 @@ export default function ProjectPage() {
     // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
     // ML4C S05 Decision 1 — independent cognitive Q may proceed without replacing pending.
     const pendingBefore = unresolvedPending ?? readPending();
-    const independent = looksLikeIndependentDialogue(text);
+    const turn = qualifyThreadTurn(text);
+    const independent = turn.kind === "DIALOGUE_INDEPENDANT";
     const gate = mayStartNewThreadAct({
       unresolved: pendingBefore,
       nextContent: text,
+      nextTurnKind: turn.kind,
       nextIsIndependentDialogue: independent,
     });
     if (!gate.ok) {
@@ -708,8 +710,9 @@ export default function ProjectPage() {
     }
     const clientTurnKey = messageTurnKeyRef.current.key;
     const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
-    // Independent dialogue must not clobber an unresolved métier pending key.
-    if (!independent) {
+    // Remember métier (or uncertain effect-seeking) turns for ACK recovery.
+    // Independent cognitive dialogue must not clobber an unresolved pending key.
+    if (turn.kind === "INTENTION_EFFET" || turn.kind === "INCERTAIN") {
       rememberPending({ content: text, clientTurnKey, clientCommandKey });
     }
     const preserveMetierPending = independent && Boolean(pendingBefore);

```

### Diff tests + delivery-history

```diff
commit 8cff159189a4b20399318b416dccfcebc6149233
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 11 20:25:44 2026 +0100

    fix(next): ML4C S05 robust thread-turn qualification
    
    Replace exclusion-based independent dialogue with a three-way
    qualification that reuses qualifyPilotageIntent, so unrecognized
    effect formulations stay uncertain and CR-02 pending survives ACK loss.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 1fd64284..c5c0ccee 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
 
+## delivery_id: DELIV-2026-11-11-ML4C-S05-INTENT-QUALIFICATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-11 (Europe/Paris) |
+| Macro-lot | ML4C — INC correctif S05 qualification d'intention (PR #676) |
+| Type | INC — robustesse qualification vs exclusion (NO RELEASE) |
+| Branch | `build/next-ml4c-functional-convergence` |
+| Parent tip | `ba91cf71` |
+| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
+| Changes | `qualifyThreadTurn` (DIALOGUE_INDEPENDANT / INTENTION_EFFET / INCERTAIN) réutilise `qualifyPilotageIntent` + D4 ; fin du défaut « aucune regex ⇒ indépendant » ; CR-02 OPEN_CYCLE « le » |
+| Schema | unchanged |
+| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |
+
 ## delivery_id: DELIV-2026-11-11-ML4C-S03-S05-CORRECTIVE
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
index 959472df..cb38650a 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
@@ -125,6 +125,8 @@ describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () =
     expect(looksLikeIndependentDialogue("Tu peux publier ce document ?")).toBe(false);
     expect(looksLikeIndependentDialogue("Peux-tu créer un autre projet ?")).toBe(false);
     expect(looksLikeIndependentDialogue("Est-ce qu'on peut autoriser cette action ?")).toBe(false);
+    expect(looksLikeIndependentDialogue("Ouvre le cycle cadrage.")).toBe(false);
+    expect(looksLikeIndependentDialogue("Ouvre L cycle cadrage.")).toBe(false);
   });
 
   it("COMPLETE on independent turn must not clear unresolved métier pending", () => {
@@ -146,13 +148,15 @@ describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () =
     ).toBe(true);
   });
 
-  it("project page preserves métier pending across independent COMPLETE", () => {
+  it("project page uses qualifyThreadTurn (not exclusion-only independence)", () => {
     const src = readFileSync(
       join(__dirname, "../../src/app/projects/[projectId]/page.tsx"),
       "utf8",
     );
+    expect(src).toMatch(/qualifyThreadTurn/);
     expect(src).toMatch(/preserveUnresolvedMetierPending/);
     expect(src).toMatch(/preserveMetierPending/);
     expect(src).toMatch(/pendingBefore/);
+    expect(src).toMatch(/nextTurnKind/);
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
new file mode 100644
index 00000000..fdf07bbc
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
@@ -0,0 +1,102 @@
+import { describe, expect, it } from "vitest";
+import {
+  looksLikeIndependentDialogue,
+  mayStartNewThreadAct,
+  qualifyThreadTurn,
+} from "@/domains/pilotage/thread-recovery";
+
+describe("ML4C S05 — qualifyThreadTurn linguistic matrix", () => {
+  const pending = {
+    content: "Ouvre le cycle cadrage.",
+    clientTurnKey: "ctk_pending",
+    clientCommandKey: "conv-auth:ctk_pending",
+  };
+
+  it("classifies métier OPEN_CYCLE variants as INTENTION_EFFET (not independent by exclusion)", () => {
+    for (const s of [
+      "Ouvre un cycle cadrage.",
+      "Ouvre le cycle cadrage.",
+      "Ouvre cycle cadrage.",
+    ]) {
+      const q = qualifyThreadTurn(s);
+      expect(q.kind, s).toBe("INTENTION_EFFET");
+      expect(q.pilotageOperation, s).toBe("OPEN_CYCLE");
+      expect(looksLikeIndependentDialogue(s)).toBe(false);
+    }
+  });
+
+  it("treats noisy OPEN formulations as INCERTAIN — never DIALOGUE_INDEPENDANT", () => {
+    for (const s of [
+      "Ouvre the cycle cadrage.",
+      "Ouvre L cycle cadrage.",
+      "Lance le cycle de cadrage.",
+      "Démarre le cadrage.",
+      "Peux-tu ouvrir le cycle cadrage ?",
+    ]) {
+      const q = qualifyThreadTurn(s);
+      expect(q.kind, s).toBe("INCERTAIN");
+      expect(looksLikeIndependentDialogue(s)).toBe(false);
+    }
+  });
+
+  it("keeps clear effect intents as INTENTION_EFFET", () => {
+    expect(qualifyThreadTurn("Crée un autre projet.").kind).toBe("INTENTION_EFFET");
+    expect(qualifyThreadTurn("Publie ce document.").kind).toBe("INTENTION_EFFET");
+    expect(qualifyThreadTurn("Je décide que GitHub est obligatoire.").kind).toBe(
+      "INTENTION_EFFET",
+    );
+  });
+
+  it("positively establishes independent cognitive questions", () => {
+    for (const s of [
+      "Pourquoi avions-nous choisi cette architecture ?",
+      "Quelle différence entre un blob et un commit ?",
+      "À quoi sert un cycle de cadrage ?",
+      "Pourquoi ouvrir un cycle de cadrage ?",
+      "Que signifie la commande 'ouvre le cycle' ?",
+    ]) {
+      expect(qualifyThreadTurn(s).kind, s).toBe("DIALOGUE_INDEPENDANT");
+      expect(
+        mayStartNewThreadAct({
+          unresolved: pending,
+          nextContent: s,
+          nextTurnKind: "DIALOGUE_INDEPENDANT",
+        }).ok,
+        s,
+      ).toBe(true);
+    }
+  });
+
+  it("keeps ambiguous / mixed formulations out of independent dialogue", () => {
+    for (const s of [
+      "Tu peux faire ça ?",
+      "Fais-le.",
+      "Et si on ouvrait le cycle ?",
+      "Explique-moi ce choix puis ouvre le cycle.",
+      "Je pourrais ouvrir le cycle ?",
+    ]) {
+      const q = qualifyThreadTurn(s);
+      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
+      expect(
+        mayStartNewThreadAct({
+          unresolved: pending,
+          nextContent: s,
+          nextTurnKind: q.kind,
+        }).ok,
+        s,
+      ).toBe(false);
+    }
+  });
+
+  it("blocks INCERTAIN over unresolved pending (conservative)", () => {
+    const gate = mayStartNewThreadAct({
+      unresolved: pending,
+      nextContent: "Ouvre L cycle cadrage.",
+      nextTurnKind: "INCERTAIN",
+    });
+    expect(gate.ok).toBe(false);
+    if (!gate.ok) {
+      expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
+    }
+  });
+});

```

---

## 6. Matrice linguistique (unit)

| Formulation | Kind |
| --- | --- |
| Ouvre un/le/∅ cycle cadrage | INTENTION_EFFET (OPEN_CYCLE) |
| Ouvre the/L cycle ; Lance… ; Démarre… ; Peux-tu ouvrir… | INCERTAIN |
| Crée autre projet ; Publie ; Je décide que GitHub… | INTENTION_EFFET |
| Pourquoi / différence / à quoi sert / pourquoi ouvrir / que signifie commande | DIALOGUE_INDEPENDANT |
| Tu peux faire ça ; Fais-le ; Et si on ouvrait ; Explique puis ouvre ; Je pourrais ouvrir | non-indépendant (INCERTAIN) |

---

## 7. Preuves locales (HEAD `8cff1591`)

| Suite | Résultat |
| --- | --- |
| tsc / lint / build | PASS |
| unit (371 incl. matrice S05) | PASS |
| PG intent-continuity (dans run unit+pg) | PASS |
| Playwright **17/17** incl. CR-02 + S05 | PASS |
| ENV isolation | opérateurs **8850→8850** ; e2e muté seul |
| secrets / diff --check (produit) | PASS |

Nora LIVE / Git REAL : **NOT RUN**.

---

## 8. CI GitHub (nouvelle)

| Item | Valeur |
| --- | --- |
| Head | `8cff1591…` |
| Next CI run | **`43087124594`** — **success** |
| Build and validate SFIA Studio Next | PASS (5m3s) |
| Playwright BROWSER FAKE | PASS |
| Secret pattern scan | PASS (exécuté — non skippé) |
| Trailing whitespace / conflict markers | PASS |
| SFIA Studio Next Required Gate | **PASS** |
| mergeStateStatus | **CLEAN** |
| Auto-merge | non activé |

Ancien fail `43081606792` supersédé.

---

## 9. S01–S07

| # | Statut | Note |
| --- | --- | --- |
| S01–S03 | PASS (inchangés + non régressés CI) | |
| S04 | DOCUMENTED / INCOMPLETE | carried |
| S05 | **CORRECTED** — qualification robuste + CR-02/S05 e2e + CI | |
| S06 | SCRIPTED PASS ; REAL NOT RUN | |
| S07 | PARTIAL renforcé (CI Next verte) | LIVE/REAL/S04 carried |

---

## 10. Fake/Real / Versioning / Exits

- FAKE Nora + Browser FAKE USED ; LIVE/REAL NOT RUN
- NO RELEASE `0.0.0-dev`
- CP2 doc non mergée
- Réception ML4C / Gate C / merge : **Morris encore requis**
- Dette : formulations très bruitées restent INCERTAIN (volontaire) ; pas d'expansion owner OPEN pour « Lance/Démarre » dans ce correctif

---

## 11. Verdict Cursor

**ML4C PR #676 — S05 INTENT QUALIFICATION CORRECTED AND CI PASSED**  
**READY FOR CHATGPT REVIEW**

Merge gate Morris : **encore requis** (pas d'auto-merge).

---

## 12. Instruction ChatGPT

Relire PR #676 @ `8cff1591` et run `43087124594`.
Vérifier que le correctif ne se limite pas à des déterminants.
Examiner séparation qualification / autorité.
Vérifier CR-02, S05 et variantes négatives.
Contrôler Required Gate + handoff.
Verdict indépendant **avant** toute demande de GO merge à Morris.
