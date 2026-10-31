# SFIA STUDIO — AKG-M5 / L3-S2
# NORA COGNITIVE QUALITY + PREPARE CONSENT
# INTEGRATED INVESTIGATION / DELIVERY / QA — REVIEW PACK FULL

**Horodatage (Europe/Paris):** 2026-10-31 18:14:11 +0200
**Horodatage UTC:** 2026-10-31T16:14:11Z
**Milestone:** AKG-M5 / L3-S2 — OPEN
**Cycle:** 8 Delivery + 9 QA intégré — CRITICAL — EVOL/INC
**Profil:** CRITICAL
**Review Pack:** FULL
**Review Handoff:** REQUIRED — publish-in-cycle (L3 borné)

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01` |
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD (delivery) | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` (aligné) |
| Baseline | `7dd49ecd…` = known remote baseline |
| Run WT LIVE | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` @ `7dd49ecd` (DETACHED) — **NON MODIFIÉ** |
| Studio :3020 | UP (HTTP 307) — **NON redémarré / NON muté** |
| Dirty delivery | 5 M + 1 ?? (corrections A+B locales, non commit projet) |
| Ancien agent WT | `feat/akg-m5-nora-adaptive-presentation` @ `1c3a8d9e` — **NON RÉUTILISÉ** |
| Handoff tip pré-cycle | `39e93e17a82b9773ddb5cb7150975ce85ad83d2d` |
| Handoff blob pré-cycle | `11ddfee5ce51cd57ee35767bf5bc8e42c15cc41a` |

**Anti-claims Git:** correctif local ≠ intégré sur main · aucun push projet · aucune PR · aucun merge.

---

## 2. Convergence Pre-check

Consultés depuis Git CURRENT (`7dd49ecd`) :

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- CKC QA pilot `04-qa-validation.md` (candidate / guidance)
- Build Doctrine + Roadmap + C1 Product Completion + M5 target journey
- Doctrine v3 framing 30–35
- PRR README + 03, 05–09

**Sources primaires (code + traces LUMEN) priment.** R23 avant correction · R24 qualifié ci-dessous.

---

## 3. Trajectoire L3-S2

- Capacité : V3-F05 conversation → exécution gouvernée
- Jalon L3-S2 : **OPEN** (non promu)
- Acquis : T-C ADOPTED · L3-S1 sous réserves · Option B/S8 · SHE · NAP · PR #630/#631
- Gaps traités ici : **A** qualité cognitive · **B** TEST-15 négation FAIL
- Runtime v3 : **NON ADOPTED** · G-REAL : **NOT GRANTED**

---

## 4. Chronologie LUMEN (lecture seule)

| Champ | Valeur |
|-------|--------|
| Projet | LUMEN — Atelier d'initiation numérique |
| project_id | `prj:6d0696db-eff0-41c7-a081-3bc71611cc6c` |
| Cycle | Cadrage / C1 · `cyc:trj-4139782c77c92e3813a72084` |
| EC suspect | `xct:gen-prep:e45f631d000ff3986360e68d` |
| EC status | `confirmation_required` (préservé — non confirmé / non exécuté / non recyclé) |
| created_at | `2026-10-31T15:49:44.339Z` |
| objective (payload) | « Préparer une première proposition de cadrage pédagogique pour LUMEN… » |
| action | `studio.cursor.generalist.execute` |

**Utterance Pilote (refus) :**
> Je souhaite examiner cette proposition avant de valider définitivement le cadrage. Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.

**Réponse Nora observée :**
> [Mode réel] J'ai préparé le contrat d'exécution correspondant à : Préparer une première proposition… Contrat inspectable : `xct:gen-prep:e45f631d…` (statut confirmation_required — non lancé).

Aucune exécution observée dans la capture. EC préservé comme preuve.

---

## 5. Constat A — réponses insuffisantes

Sur des tours antérieurs du même projet LUMEN, des demandes explicites de comparaison / cadrage ont reçu des reformulations ou orientations courtes (guidance) au détriment d'une charge utile analytique.

**Preuve mixte :** un tour ultérieur contient une `comparison_table` substantielle (transcript Memory B / presentation) — donc le Runner *peut* produire du contenu ; le défaut A porte sur la **primauté ORIENT vs ANSWER** dans le prompt système et la composition, pas sur une absence totale de capacité.

---

## 6. Constat B — PREPARE malgré négation

Le même message contenant « Ne prépare pas de contrat d'exécution » a déclenché un EC `confirmation_required` annoncé au Pilote.

---

## 7. Traces et preuves primaires

Fichiers lecture seule (hors repo) :

- `/tmp/lumen-inv/lumen-projects.json`
- `/tmp/lumen-inv/lumen-ecs.json`
- `/tmp/lumen-inv/lumen-ec-core.json` / `lumen-ec-payload.json`
- `/tmp/lumen-inv/lumen-transcript.txt`

Chaîne `explicit_lexical_prepare` → EC (call-sites non-test) :

1. `hasExplicitPrepareContractIntent` → `explicit_lexical_prepare`
2. `genericExecutionConversationCoordinator` chatFirstPrepareAccept
3. `orchestrateF2` assess → `mayPrepare`
4. `solicitGenericExecutionPrepare`
5. `prepareGenericExecutionContractDraft`

Effet collatéral : `skipF1ForChatFirstPrepare` quand lexical GO → intentionnalité F1 court-circuitée sur le tour final (lien A/B).

---

## 8. Causes racines

### Axe A
| Cause | Preuve | Composant | Niveau |
|-------|--------|-----------|--------|
| Prompt système ordonne ANSWER puis ORIENT mais section CONTINUATION poussait ORIENT comme charge dominante (« Ne termine pas sur un simple constat… ») sans garde « seulement après ANSWER » | lecture `buildProjectSystemPrompt.ts` pré-corr | `buildProjectSystemPrompt.ts` | BEHAVIOR PROVEN (instruction) |
| Lexical false-positive PREPARE saute F1 → tour orienté mission/EC plutôt qu'analyse | skipF1 + EC LUMEN | `orchestrateF2` + `hasExplicitPrepareContractIntent` | BEHAVIOR PROVEN |

### Axe B
| Cause | Preuve | Composant | Niveau |
|-------|--------|-----------|--------|
| `hasExplicitPrepareContractIntent` matchait « prépare … » + « contrat » **sans** exclure « ne prépare pas … contrat » | LUMEN utterance → intent true (repro DET) | `prepareGenericExecutionContractDraft.ts` | BEHAVIOR PROVEN |
| Admission Product insuffisante sur refus (cognition/tool pouvait finaliser) | chemin tool `request_generic_execution_prepare` + finalize | `orchestrateTurn.ts` / `solicitGenericExecutionPrepare` | COVERAGE VERIFIED + fix BEHAVIOR PROVEN DET |

**Cause LUMEN EC (qualification) :** chemin lexical chat-first **prouvé** comme cause suffisante (false positive → explicit_lexical_prepare → solicit). Chemin outil Nora : possible en parallèle mais **non requis** pour expliquer l'EC ; les deux chemins sont désormais fail-closed sur refus.

---

## 9. Cause commune éventuelle

**Partielle :** le faux GO lexical PREPARE court-circuite F1 et biaise le tour vers la préparation technique, au détriment de la restitution analytique.
**Distincte :** même sans PREPARE, le prompt pouvait privilégier ORIENT. Deux correctifs bornés dans les composants existants (pas d'architecture parallèle).

---

## 10. Architecture R23

| Composant | Rôle | Niveau |
|-----------|------|--------|
| `hasExplicitPrepareContractRefusal` | détection refus (Product) | BEHAVIOR PROVEN (DET) |
| `hasExplicitPrepareContractIntent` | intent positif ; refusal outranks | BEHAVIOR PROVEN |
| `resolveChatFirstGenericPrepareGo` | no_go `explicit_prepare_refusal` | BEHAVIOR PROVEN |
| `isChatFirstPrepareAcceptGo` | refus → false | BEHAVIOR PROVEN |
| `solicitGenericExecutionPrepare(+pilotUtterance)` | fail-closed mutation | BEHAVIOR PROVEN |
| `orchestrateTurn` tool solicit + finalize | refuse enqueue / pass utterance | DOCUMENTED + COVERAGE VERIFIED |
| `productExecutionAgentsTools` | description outil anti-refus | DOCUMENTED (prompt tool) |
| `buildProjectSystemPrompt` ANSWER primacy | instruction cognitive | DOCUMENTED + DET prompt assert |
| Runner / presentation / Memory B | inchangés structurellement | KNOWN GAP LIVE A oracle |

Invariants préservés : PREPARE ≠ INSPECT ≠ AUTHORIZE ≠ EXECUTE ≠ EVIDENCE · SHE · cognition ≠ autorité de consentement.

---

## 11. Modifications effectuées

| Fichier | Défaut | Cible | Impact |
|---------|--------|-------|--------|
| `w2/prepareGenericExecutionContractDraft.ts` | refus lexical non détecté | `hasExplicitPrepareContractRefusal` + gates intent/accept/resolve/solicit | fail-closed PREPARE |
| `orchestrateTurn.ts` | tool path pouvait enqueuer/finaliser malgré refus | gate enqueue + `pilotUtterance` | tool ≠ bypass |
| `productExecutionAgentsTools.ts` | description sans refus | instruction Do NOT call on refusal | défensif (non autorité) |
| `buildProjectSystemPrompt.ts` | ORIENT pouvait primer | bloc ANSWER priorité + lien refus | Axe A |
| `p6.gD4….d0.test.ts` | pas de TEST-15 | cas LUMEN + négations | non-régression G-D4 |
| `lumenCogPrepareCorr01.d0.test.ts` (**nouveau**) | — | A prompt + B nég/pos + A+B + solicit fail | QA intégrée |

Aucun commit projet. Aucune écriture campaign/live-e2e DB. EC LUMEN intact.

---

## 12. Contenu complet — nouveau fichier test
```typescript
/**
 * LUMEN integrated A+B — cognitive ANSWER primacy + PREPARE consent (TEST-15).
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  hasExplicitPrepareContractIntent,
  hasExplicitPrepareContractRefusal,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";

const baseProject = (): ProjectAssistantContextDto =>
  ({
    projectId: "prj:lumen-test",
    displayName: "LUMEN test",
    shortReference: "LUMEN",
    contextSummary: "Atelier initiation numérique",
    constraints: [],
    activeCycleInstanceId: "cyc:test",
  }) as ProjectAssistantContextDto;

describe("LUMEN cog+prepare corr-01 — Axis A prompt primacy", () => {
  it("system prompt requires ANSWER before ORIENT for analytical asks", () => {
    const prompt = buildProjectSystemPrompt(baseProject());
    expect(prompt).toMatch(/RÉPONSE MÉTIER SUBSTANTIELLE/);
    expect(prompt).toMatch(/UNDERSTAND → REASON → ANSWER → puis ORIENT/);
    expect(prompt).toMatch(/conversationGuidance\.statement N'EST PAS un substitut/);
    expect(prompt).toMatch(/Comparaison demandée → comparaison exploitable/);
    expect(prompt).toMatch(/request_generic_execution_prepare/);
    expect(prompt).toMatch(/n'annonce jamais qu'un contrat a été préparé/);
  });
});

describe("LUMEN cog+prepare corr-01 — Axis B PREPARE consent", () => {
  const negatives = [
    "Ne prépare pas de contrat d'exécution.",
    "Je ne veux pas de contrat pour le moment.",
    "Analyse seulement, sans préparer de mission.",
    "Nous verrons l'exécution plus tard. Pas de contrat d'exécution.",
    "Prépare une analyse, pas un contrat.",
    "Je souhaite examiner cette proposition. Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.",
  ];
  const positives = [
    "Prépare le contrat d'exécution pour la fiche d'animation.",
    "OK, prépare le contrat pour cette mission.",
  ];

  it("negations are refusal and not lexical prepare GO", () => {
    for (const text of negatives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(true);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(false);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("no_go");
    }
  });

  it("positive explicit prepare remains lexical GO", () => {
    for (const text of positives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(false);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(true);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("explicit_lexical_prepare");
    }
  });

  it("A+B integrated utterance: framing ask + refusal → no_go", () => {
    const text =
      "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. " +
      "Ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("solicitGenericExecutionPrepare fail-closes on pilotUtterance refusal without OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      // Minimal stub — refusal must short-circuit before OA/draft use.
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Prépare une analyse. Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });
});

```

## 13. Diffs utiles des fichiers modifiés

### prepareGenericExecutionContractDraft.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..f1b28249 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,13 +87,72 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  // "Ne prépare pas de contrat d'exécution…"
+  if (
+    /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "pas de contrat d'exécution" / "pas de contrat" / "sans contrat"
+  if (
+    /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "analyse seulement, sans préparer de mission" / "pas de mission pour le moment"
+  if (
+    /\b(ne\s+)?(veux|veut|souhait\w*|lance)\s+pas\b[\s\S]{0,60}\b(contrat|mission\s+(technique|d['']exécution|cursor))\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,60}\bsans\b[\s\S]{0,40}\b(contrat|mission|exécution|execution)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "prépare une analyse, pas un contrat"
+  if (
+    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
   const t = text.trim().toLowerCase();
   if (!t) return false;
+  if (hasExplicitPrepareContractRefusal(t)) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
       t,
@@ -126,6 +185,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +231,10 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
+  }
   if (hasExplicitPrepareContractIntent(input.text)) {
     return { kind: "explicit_lexical_prepare" };
   }
@@ -1410,6 +1474,11 @@ export type SolicitGenericExecutionPrepareInput = {
   /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
   readonly analysis?: IntentAnalysisDto;
   readonly mission?: SolicitGenericPrepareMissionFields;
+  /**
+   * Current Pilote utterance (TEST-15). When set, explicit PREPARE refusal
+   * fail-closes before any EC mutation — tool solicitation cannot bypass.
+   */
+  readonly pilotUtterance?: string | null;
   /** M-HD-01 — verified OA HumanDecision for structural resume. */
   readonly decisionId?: string | null;
   readonly sessionKey?: string | null;
@@ -1493,6 +1562,15 @@ export async function solicitGenericExecutionPrepare(
   if (!projectId) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
   }
+  if (
+    typeof input.pilotUtterance === "string" &&
+    hasExplicitPrepareContractRefusal(input.pilotUtterance)
+  ) {
+    return fail(
+      "EXPLICIT_PREPARE_REFUSAL",
+      "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+    );
+  }
   const analysis =
     input.analysis ??
     buildIntentAnalysisFromSolicitedMission(input.mission ?? {});

```

### orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..996d6a25 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -569,6 +569,17 @@ export async function orchestrateProjectAssistantTurn(input: {
               import("@/lib/vertical-slice-runtime"),
               import("./w2/prepareGenericExecutionContractDraft"),
             ]);
+          // TEST-15 — refuse queue when Pilote utterance forbids PREPARE.
+          if (prepareMod.hasExplicitPrepareContractRefusal(content)) {
+            return {
+              ok: false as const,
+              code: "EXPLICIT_PREPARE_REFUSAL",
+              message:
+                "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -1370,6 +1381,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // TEST-15 — tool solicitation cannot bypass explicit Pilote refusal.
+            pilotUtterance: content,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||

```

### buildProjectSystemPrompt.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index e833de14..3d962eb3 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -187,10 +187,28 @@ export function buildProjectSystemPrompt(
     "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
     "Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution.",
     "",
+    "=== RÉPONSE MÉTIER SUBSTANTIELLE (ANSWER — priorité) ===",
+    "Ordre obligatoire du tour : UNDERSTAND → REASON → ANSWER → puis ORIENT.",
+    "ANSWER est la charge utile Pilote. ORIENT (conversationGuidance) ne la remplace JAMAIS.",
+    "Quand le Pilote demande explicitement de comparer, analyser, recommander, structurer un cadrage,",
+    "lister avantages/limites/moyens/risques/hypothèses/étapes : PRODUIS ce contenu DANS CE TOUR",
+    "(presentation.blocks[] et/ou narrative complète). Ne te limite PAS à une courte invitation",
+    "du type « Je te propose de… » / « Pour préciser… » sans avoir livré l'analyse demandée.",
+    "Comparaison demandée → comparaison exploitable (formats/options, avantages, limites, moyens,",
+    "conséquences, recommandation argumentée, hypothèses non confirmées).",
+    "Cadrage structuré demandé → sections exploitables (objectifs, périmètre, séances, moyens,",
+    "hypothèses, risques, étapes) — pas une promesse de produire le cadrage plus tard.",
+    "Les réponses simples restent concises. Les demandes analytiques restent substantielles.",
+    "Faits ≠ hypothèses ≠ options ≠ recommandations ≠ décisions Pilote. N'invente pas de décision.",
+    "Si le Pilote interdit un contrat d'exécution : réponds sur le fond demandé et n'appelle PAS",
+    "request_generic_execution_prepare ; n'annonce jamais qu'un contrat a été préparé.",
+    "",
     "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
-    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
+    "Après ANSWER seulement : ORIENT via conversationGuidance (même tour, pas de second appel).",
+    "conversationGuidance.statement N'EST PAS un substitut de la réponse métier.",
     "Identifie le prochain mouvement utile pour faire progresser le projet.",
-    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
+    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable,",
+    "MAIS seulement après avoir livré ANSWER si une analyse/comparaison/cadrage a été demandé.",
     "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
     "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
     "Kinds autorisés uniquement :",

```

### productExecutionAgentsTools.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index e867cdfb..faf7a02c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -193,6 +193,9 @@ export function createProductExecutionAgentsTools(
       "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
       "(objective + expected outcome or scope). Product qualifies the mission server-side " +
       "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
+      "Do NOT call this tool when the Pilote explicitly refuses PREPARE " +
+      "(e.g. « ne prépare pas de contrat », « sans contrat d'exécution », « analyse seulement »). " +
+      "Product fail-closes refusals even if this tool is called. " +
       "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
       "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
       "and never claim anything was executed.",

```

### p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index c0352f84..47cd3c0b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
@@ -17,6 +17,7 @@ import {
   assessGenericMissionPrepareReadiness,
   assessMaterialityForGenericPrepare,
   hasExplicitPrepareContractIntent,
+  hasExplicitPrepareContractRefusal,
   isChatFirstPrepareAcceptGo,
   prepareGenericExecutionContractDraft,
   rememberGenericPrepareRecommendation,
@@ -262,6 +263,49 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     ).toBe("no_go");
   });

+  it("TEST-15 / LUMEN — explicit PREPARE refusal is never a prepare GO", () => {
+    const lumenRefusal =
+      "À partir de ce que nous avons défini ensemble, prépare une première proposition structurée comprenant :\n" +
+      "- Les objectifs pédagogiques.\n\n" +
+      "Je souhaite examiner cette proposition avant de valider définitivement le cadrage. " +
+      "Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.";
+    expect(hasExplicitPrepareContractRefusal(lumenRefusal)).toBe(true);
+    expect(hasExplicitPrepareContractIntent(lumenRefusal)).toBe(false);
+    expect(
+      resolveChatFirstGenericPrepareGo({
+        projectId: "prj:lumen",
+        cycleInstanceId: "cyc:lumen",
+        text: lumenRefusal,
+      }),
+    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare le contrat d'exécution pour la mission LUMEN",
+      ),
+    ).toBe(true);
+    expect(isChatFirstPrepareAcceptGo({ text: lumenRefusal })).toBe(false);
+  });
+
   it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
     const mat = assessMaterialityForGenericPrepare(baseAnalysis("demo"));
     expect(mat.materiality).toBe("unknown");

```

## 14. Tests et résultats par axe

**Commande :**
```
npx vitest run \
  __tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
```

**Résultat :**
```
 ✓ lumenCogPrepareCorr01.d0.test.ts (5 tests)
 ✓ p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts (11 tests)
 Test Files  2 passed (2)
 Tests  16 passed (16)
```

| Axe | Scope DET | Résultat |
|-----|-----------|----------|
| **A** | Prompt contient ANSWER primacy + interdiction annonce PREPARE sur refus | **PASS** (scope prompt) |
| **B** | Négations → refusal · intent false · resolve no_go · solicit EXPLICIT_PREPARE_REFUSAL · positifs restent GO · G-D4 non-régression | **PASS** |
| **A+B** | « Prépare une analyse… Ne prépare pas de contrat » → no_go + refusal | **PASS** |

**Environnement :** delivery WT isolé · Vitest node · ZERO OpenAI LIVE · ZERO Cursor REAL · ZERO écriture `new-project-campaign-01` / `live-e2e-01`.

---

## 15. Tests d'intégration A+B

Utterance intégrée DET :
> Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. Ne prépare pas de contrat d'exécution.

→ `hasExplicitPrepareContractRefusal` true · intent false · `resolveChatFirstGenericPrepareGo` = `{ kind: "no_go", reason: "explicit_prepare_refusal" }` · `solicit…` avec même refus → `EXPLICIT_PREPARE_REFUSAL` sans HD/Attempt.

Contenu analytique LIVE : **NOT PROVEN** dans ce cycle (protocole §21).

---

## 16. Non-régression

- Suite G-D4 existante **11/11 PASS** (dont nouveau cas TEST-15).
- Positifs « Prépare le contrat… » restent `explicit_lexical_prepare`.
- SHE / Authorization / Execute : non touchés fonctionnellement (hors scope mutation).
- EC LUMEN existant : préservé (preuve).

---

## 17. R24 et impacts documentaires

| Volume PRR | Impact sémantique | Action ce cycle |
|------------|-------------------|-----------------|
| 03 E2E flow | Admission PREPARE : refus explicite → no_go / EXPLICIT_PREPARE_REFUSAL | **Contenu préparé ci-dessous — PRR non modifié** (chemin protégé sans GO Morris PRR) |
| 07 authority | Consentement PREPARE = Product fail-closed sur refus lexical/outil | idem |
| 08 test map | Ajouter lumenCogPrepareCorr01 + TEST-15 G-D4 | idem |
| 09 gaps | TEST-15 lexical false-positive → CORRECTED LOCAL DET ; LIVE revalidation OPEN | idem |
| Roadmap tip | Non mis à jour (pas d'intégration main) | N/A |

**R24 status :** `SEMANTIC IMPACT QUALIFIED — PRR SYNC GATE OPEN (Morris)` · **NOT COMPLETED** (pas de refresh manifest/digest).

### Contenu R24 candidat (pour GO ultérieur)

- Documenter `hasExplicitPrepareContractRefusal` comme gate Product obligatoire avant tout PREPARE chat-first ou tool-finalize.
- Reason code `explicit_prepare_refusal` / `EXPLICIT_PREPARE_REFUSAL`.
- Clarifier : match lexical positif ne bat jamais une négation explicite dans le même utterance.
- ANSWER primacy : conversationGuidance ≠ substitut de réponse métier sur demande analytique.

---

## 18. Réserves et limitations

- DET ≠ LIVE.
- Axis A oracle LIVE (comparaison complète persistée) : **NOT PROVEN** ce cycle.
- EC LUMEN pré-existant reste en DB campagne (preuve) — non « corrigé » silencieusement.
- G-REAL NOT GRANTED · Cursor REAL non exercé.
- Runtime v3 NON ADOPTED · L3-S2 OPEN.
- Correctif local ≠ sur main.

---

## 19. Gates Morris restants

1. **Review** de ce pack / handoff.
2. **GO Git Integration** (commit/push/PR) — NON autorisé ce cycle.
3. **GO R24 PRR** sync + digest — NON autorisé ce cycle.
4. **GO LIVE revalidation LUMEN A+B** (§21) — distinct · instance 3020.
5. Ne pas confirmer/exécuter/supprimer `xct:gen-prep:e45f631d…` hors protocole.

---

## 20. Verdict consolidé

# INTEGRATED CORRECTION READY FOR MORRIS REVIEW

### Détail A
- Cause identifiée (prompt ORIENT-dominant + biais lexical PREPARE/F1).
- Correction locale `buildProjectSystemPrompt` ANSWER primacy.
- DET prompt **PASS**.
- Oracle LIVE analytique : **réserve** → protocole §21.

### Détail B
- Cause identifiée (false-positive lexical + admission insuffisante).
- Correction Product fail-closed (refusal → intent/accept/resolve/solicit/tool).
- DET B + non-régression G-D4 **PASS**.
- Zéro nouvel EC sur refus au scope DET.

### Intégration
- A+B utterance DET **PASS** (analyse demandée + refus → no PREPARE).
- Handoff FULL publish-in-cycle.
- Aucune mutation LIVE non autorisée.

**Anti-claims :** DET PASS ≠ LIVE PASS · PREPARE corrigé ≠ REAL autorisé · EC non exécuté ≠ PREPARE correctement admis (historique LUMEN) · L3-S2 OPEN · G-REAL NOT GRANTED · v3 NON ADOPTED.

---

## 21. Protocole de revalidation LIVE (A+B) — GO Morris ultérieur

**Prérequis :** baseline corrigée intégrée ou delivery WT servi sous gate · **ne pas** rejouer sur SQLite campagne actuelle sans backup/GO · EC suspect = preuve (ne pas recycler).

1. Nouveau projet clone ou projet test isolé (pas `new-project-campaign-01` / `live-e2e-01` sans GO).
2. **QA-A LIVE :** demander comparaison 3 formats + avantages/limites/moyens + recommandation + hypothèses + cadrage structuré → vérifier blocks/narrative substantiels (pas guidance seule) + persistance Memory B.
3. **QA-B LIVE :** « Ne prépare pas de contrat… » après proposition → zéro nouvel EC / Attempt / Authorization ; pas d'annonce mensongère.
4. **QA-AB LIVE :** « Prépare une analyse… Ne prépare pas de contrat » → analyse présente + zéro EC.
5. Positif contrôle : demande explicite PREPARE → EC `confirmation_required` sous gates (sans Execute).
6. STOP si REAL requis ou écriture campaign sans GO.

---

## 22. Git Review Index

| Path | Status |
|------|--------|
| `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts` | M |
| `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` | M |
| `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts` | M |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts` | M |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts` | M |
| `projects/sfia-studio/app/__tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts` | A (nouveau) |

**Instruction ChatGPT :** restituer ce pack complet · diagnostics A+B · corrections · preuves DET · gates LIVE/R24/Git · **STOP** — ne pas ouvrir de second chantier pour l'autre axe · ne pas push/PR/merge projet.
