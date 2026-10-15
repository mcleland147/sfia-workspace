# SFIA Studio — P6 Generic Execution Preparation & Conversational Continuity
## Review Pack FULL — CRITICAL — Cycle 8 Delivery

| Champ | Valeur |
| --- | --- |
| **Horodatage** | 2026-10-15T12:36:00+0200 (Europe/Paris) |
| **GO Morris** | 2026-10-15 — AUTHORIZED / CONSUMED |
| **Macro** | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| **Chantier** | P6-GENERIC-EXECUTION-AND-CONVERSATIONAL-CONTINUITY |
| **Cycle** | 8 — Delivery / implémentation — CRITICAL |
| **CKC** | ckc:studio:delivery (+ qa-validation guidance) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033` |
| **Branche** | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| **HEAD base (unchanged tip)** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` (= origin/main · PR #584 merge) |
| **Commit projet** | AUCUN |
| **Runtime v3** | NON ADOPTED |
| **P6 GLOBAL** | NOT PASSED |
| **Verdict** | PARTIAL DELIVERY / D4 GOVERNANCE DECISION REQUIRED / SAFE CHANGES PRESERVED / READY FOR CHATGPT CRITICAL REVIEW |

---

## A. GO Morris D1–D6

| Décision | Traitement ce cycle |
| --- | --- |
| **D1** EC générique sans catalogue tâches | **PARTIAL** — pas de nouveau catalogue ; auto-PREPARE réutilise M3 (docs_write) ou W3-A (autre) après HD Proposal pursue ; entrée Artifact élargie sémantiquement (FR) |
| **D2** Nora pilote la préparation | **PARTIAL** — raccord chat-first Proposal pursue → auto-PREPARE ; MW5 ne bloque plus la continuation active-cycle |
| **D3** Qualification adaptative | **ADDRESSED** — natural signal sans `materialis*` ; garde cycle actif sans NEW_CYCLE START ; MW5 Rec gate off sur continuation |
| **D4** Autorisation centrée contrat (sans Proposal+HD systématique) | **BLOCKED — Decision Pack ci-dessous** — P2-D-01 préservé ; aucune suppression HD |
| **D5** Réutilisation existant | **RESPECTÉ** — EC/M3/W3-A/F2/MW5/UI ; aucun second moteur |
| **D6** Continuité | **PARTIAL** — continuité conversationnelle + auto-PREPARE ; post-Evidence non refondu (dette documentée) |

---

## B. Cycle / profil

Delivery CRITICAL INC+EVOL bornée. Justification : pilotage Nora, HD/Confirmation, EC natif, currentness, exécution.

---

## C. Git Truth initial

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree historique QA | `…-incomplete-fix-b555` @ 50eac439 — **non modifié** (Product) |
| Delivery worktree | créé depuis `origin/main` `e7822033` |
| Ports :3020/:3031 | **non touchés** / non redémarrés |
| Handoff entrée | `acc4b07a` / blob `0c67bf64…` (C9 diagnosis) |

---

## D. Convergence

Build Doctrine / Roadmap / C1 / P2 / P4 / P5 / P6 / v3 30–36 / CKC 08–09 : lus en cadrage. Capacité cible = Nora→PREPARE générique→contrat inspectable. Runtime v3 NON ADOPTED.

---

## E. Sources / décisions

Handoff C9 findings F-C9-01…06 + addendum M3≠W3-A. P2-D-01…04 ADOPTED. MD-WR-06 conservé.

---

## F. Baseline Product

main `e7822033` (fix premature-incomplete intégré). Human QA e66 non mutée.

---

## G. Manifest exact

### Modifiés
1. `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
3. `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
4. `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
5. `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
6. `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts`
7. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx`
8. `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`

### Créés
Aucun fichier Product doctrine. Tests = extensions des fichiers existants.

### Interdits
Aucun (doctrine/v3/scripts/QA DB/REAL).

---

## H. Findings F-C9-01…06

| ID | Statut |
| --- | --- |
| F-C9-01 carte START vs cycle actif | **CORRECTED** (présentation + reconcile LPS) |
| F-C9-02 Journal Work=0 | **PRESERVED** (honnête ; pas de reco fictive) |
| F-C9-03 MW5 CHALLENGE générique | **CORRECTED** sur ACTIVE_CYCLE_GOVERNED_CONTINUATION (`recommendationWouldEmit:false` + structural skip) |
| F-C9-04 natural signal `materialis*` | **CORRECTED** (production FR documentaire) |
| F-C9-05 EC non raccordé | **PARTIAL** — auto-PREPARE après Proposal pursue (M3/W3-A) ; entrée sans HD = D4 blocked |
| F-C9-06 Lifecycle Rec store | **DEFERRED** — currentness read-side déjà STALE ; pas de mutation historique destructive |

---

## I–J. Capacités / architecture conservées

KEEP : ExecutionContract, Cursor executor, AgentCapability, Evidence, ReviewBundle, LPS/Trajectory, M3, W3-A, MD-WR-06, Proposal/HD writers existants.

Aucun catalogue de tâches Cursor. Aucun second moteur.

---

## K. Modifications (résumé)

1. Carte Recommendation : « Poursuivre » si lifecycle actif ; state cohérent.
2. ConversationSurface + hook : `authoritativeLifecycleActive` ; patch `cycleStatus=active` si LPS active.
3. Natural signal : produire/fichier/markdown/dépôt sans exiger `materialis*`.
4. Guard orchestrateF2 : cycle actif + actionable → clarification in-cycle (pas START).
5. MW5 sur continuation Artifact : n'émet pas Rec challenge.
6. Chat-first Proposal pursue accept → `autoPrepareAfterProposalPursue` (W3-A puis M3 si `PREPARE_ROUTE_DOCS_WRITE`).

---

## L–M. D1–D6 / Decision Pack D4

### Decision Pack D4 — REQUIRED (non implémenté)

| Item | Contenu |
| --- | --- |
| **Règle actuelle** | P2-D-01 : vérité Product structurelle (dont ouverture d'exécution gouvernée via Proposal/DecisionBasis) exige HumanDecision lorsque applicable. PREPARE actuel consomme HD acceptée (`prepareM3FromDecision` / W3-A). Confirmation (P2-D-03) reste liée à l'effet inspecté. |
| **Conflit avec cible UX Morris** | Cible D4 : Nora prépare → Pilote inspecte/ajuste → clic Exécuter = autorisation, **sans** Proposal+HD systématiques. |
| **Évolution minimale envisagée** | Autoriser PREPARE d'un EC « draft/inspectable » depuis intention qualifiée + active cycle **sans** HD, en gardant HD/Confirmation pour tout effet structurel ou lancement ; OU fusionner inspect+authorize sur un seul acte Pilote borné. |
| **Alternatives** | (A) Status quo + auto-PREPARE post-HD (ce cycle). (B) Draft EC non durable jusqu'à authorize. (C) Décision Morris élargissant PREPARE sans HD. |
| **Effets P2/C1/v3** | Touche P2-D-01 matérialité HD ; C1 contrat natif ; V3-F05/F12. |
| **Effets EC** | Possible nouveau statut draft ; currentness ; audit. |
| **Sécurité** | Risque d'autorité inventée si PREPARE confondu avec authorize. |
| **Migrations** | Possibles si nouveau statut EC. |
| **Tests** | Scénarios 8–9 GO ; fail-closed authorize. |
| **Recommandation non binding** | Conserver HD pour ouverture d'exécution ; faire du clic Exécuter la Confirmation/authorize unique sur contrat inspecté (rapprocher P2-D-03). |
| **Gate Morris** | **G-D4-PREPARE-WITHOUT-SYSTEMATIC-HD** — décision explicite requise avant écriture. |

---

## N–P. Contrat générique / anti-catalogue / anti-parallèle

- Missions documentaires/code/QA : même famille PREPARE (M3 ou W3-A selon DecisionBasis), **pas** d'enum métier nouveau.
- Identifiants techniques `docs_write` / `cursor.docs_write.apply` restent adaptateurs, **pas** prérequis universels d'intention (natural signal élargi).
- Aucune architecture parallèle de précontrat pour contourner D4.

---

## Q–R. Diffs Product (complet)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
index cbefbf0a..c01d3a22 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
@@ -327,6 +327,29 @@ describe("P6-HQA-UI-04 pilot-facing Recommendation / Proposal", () => {
     expect(card.state).toBe("Le cycle n'a pas encore démarré.");
   });

+  it("F-C9-01 — active lifecycle never presents START Cadrage as current", () => {
+    const card = projectPilotRecommendationCard({
+      cycleLabel: "Cadrage",
+      recommendedProfile: "Standard",
+      rationale: "Continuation du cycle actif",
+      cycleStatus: "proposed",
+      authoritativeLifecycleActive: true,
+    });
+    expect(card.recommendation).toMatch(/Poursuivre le travail du cycle Cadrage/i);
+    expect(card.recommendation).not.toMatch(/Démarrer/i);
+    expect(card.state).toBe("Le cycle est actif.");
+
+    const fromStatus = projectPilotRecommendationCard({
+      cycleLabel: "Cadrage",
+      recommendedProfile: "Standard",
+      rationale: null,
+      cycleStatus: "active",
+      cycleInstanceId: "cyc:test",
+    });
+    expect(fromStatus.recommendation).toMatch(/Poursuivre/i);
+    expect(fromStatus.state).toBe("Le cycle est actif.");
+  });
+
   it("narration — F2 footer jargon softened at display boundary", () => {
     render(<ConversationSurface controller={stubController({})} />);
     const turn = screen.getByTestId("project-assistant-turn-assistant");
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
index 4295e8eb..be3dce94 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
@@ -265,6 +265,21 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
       true,
     );

+    // F-C9-04 — French production phrasing without materialis* stem.
+    const produceMd = baseAnalysis({
+      continuationKind: null,
+      intentClass: "execution_request",
+      objective: "Produire une note Markdown dans le dépôt du projet",
+      rephrasedRequest:
+        "Prépare un fichier Markdown documentant le livrable dans le dépôt Git",
+    });
+    expect(
+      hasNaturalActiveCycleDeliverableMaterializationSignal(produceMd),
+    ).toBe(true);
+    expect(
+      shouldEnterActiveCycleArtifactContinuationHandling(produceMd),
+    ).toBe(true);
+
     const vague = baseAnalysis({
       intentClass: "informative",
       objective: "Parlons du livrable",
@@ -277,6 +292,16 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     expect(shouldEnterActiveCycleArtifactContinuationHandling(vague)).toBe(
       false,
     );
+
+    const explainOnly = baseAnalysis({
+      intentClass: "actionable",
+      objective: "Explique-moi ce document",
+      rephrasedRequest: "Explique-moi ce document du projet",
+      continuationKind: null,
+    });
+    expect(
+      hasNaturalActiveCycleDeliverableMaterializationSignal(explainOnly),
+    ).toBe(false);
   });

   it("unit — natural signal without docs_write effect → BLOCKED not NEW_CYCLE", async () => {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 80e8e9c9..a81ce979 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -1123,8 +1123,24 @@ export function useProductConversation({
         },
       ]);
       if (result.f2) {
-        setF2(result.f2);
-        setActiveProposal(result.f2.proposal);
+        // F-C9-01 — reconcile session qualification with authoritative LPS active cycle
+        // so START cards cannot linger as CURRENT against Lifecycle truth.
+        const nextF2 =
+          resultActiveId && result.f2.qualification
+            ? {
+                ...result.f2,
+                qualification: {
+                  ...result.f2.qualification,
+                  cycleInstanceId:
+                    result.f2.qualification.cycleInstanceId?.trim() ||
+                    resultActiveId,
+                  cycleStatus:
+                    result.f2.qualification.cycleStatus?.trim() || "active",
+                },
+              }
+            : result.f2;
+        setF2(nextF2);
+        setActiveProposal(nextF2.proposal);
       } else {
         setF2(null);
         setActiveProposal(null);
@@ -1417,6 +1433,8 @@ export function useProductConversation({
     ephemeralNotice,
     lrMaterializeNotice,
     lrMaterializeCode,
+    /** Authoritative LPS active cycle id (Product) — presentation must honor it. */
+    activeCycleInstanceId,
     f2,
     activeProposal,
     decisionSubjectContinuity,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index de40cb67..53d774a7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -396,6 +396,10 @@ export function ConversationSurface({
    */
   const showNoraActivityInThread =
     noraActivity.phase === "start" || noraActivity.phase === "activity";
+  const authoritativeLifecycleActive = Boolean(
+    (controller.activeCycleInstanceId ?? "").trim() ||
+      (controller.journalCycleInstanceId ?? "").trim(),
+  );
   const pilotRecommendationCard = f2?.qualification
     ? projectPilotRecommendationCard({
         cycleLabel: f2.qualification.cycleLabel,
@@ -405,6 +409,8 @@ export function ConversationSurface({
         cycleStatus: f2.qualification.cycleStatus,
         cycleInstanceId: f2.qualification.cycleInstanceId,
         freshnessLabel: qualificationFreshness.label,
+        authoritativeLifecycleActive,
+        detailedStatus: f2.qualification.detailedStatus,
       })
     : null;
   const pilotProposalCard = activeProposal
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 531c91f9..c29746f2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -218,13 +218,29 @@ export function hasExplicitArtifactContinuationKind(
   return analysis.continuationKind === "active_cycle_artifact_materialization";
 }

+function normalizeIntentHaystack(parts: readonly (string | null | undefined)[]): string {
+  return parts
+    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
+    .join("\n")
+    .normalize("NFC")
+    .toLowerCase()
+    .replace(/[àáâäã]/g, "a")
+    .replace(/[èéêë]/g, "e")
+    .replace(/[ìíîï]/g, "i")
+    .replace(/[òóôöõ]/g, "o")
+    .replace(/[ùúûü]/g, "u")
+    .replace(/ç/g, "c");
+}
+
 /**
- * CORR-01 — natural active-cycle deliverable materialization signal from
+ * CORR-01 / P6 C9 — natural active-cycle deliverable materialization signal from
  * analysis text fields (NON-AUTHORITATIVE). Used so a missing continuationKind
  * does not silently fall to NEW_CYCLE_FORMALIZATION when the Pilote asked to
- * materialize the cycle's required deliverable without internals/path.
+ * produce the cycle deliverable in the repository without engine jargon.
  *
- * Must NOT match generic docs_write / vague talk-about-deliverable alone.
+ * Must NOT match vague talk-about-deliverable alone.
+ * Must NOT require the stem « materialis* » (F-C9-04).
+ * Durable active-cycle + Artifact gates remain authoritative at resolve time.
  */
 export function hasNaturalActiveCycleDeliverableMaterializationSignal(
   analysis: IntentAnalysisDto,
@@ -236,41 +252,42 @@ export function hasNaturalActiveCycleDeliverableMaterializationSignal(
   ) {
     return false;
   }
-  const hay = [
+  const hay = normalizeIntentHaystack([
     analysis.objective,
     analysis.rephrasedRequest,
     analysis.executionIntent?.artifactBrief,
+    analysis.executionIntent?.targetPath,
     ...(analysis.executionIntent?.contentRequirements ?? []),
-  ]
-    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
-    .join("\n")
-    .normalize("NFC")
-    .toLowerCase()
-    .replace(/[àáâäã]/g, "a")
-    .replace(/[èéêë]/g, "e")
-    .replace(/[ìíîï]/g, "i")
-    .replace(/[òóôöõ]/g, "o")
-    .replace(/[ùúûü]/g, "u")
-    .replace(/ç/g, "c");
+  ]);

-  if (!/\bmaterialis/.test(hay)) return false;
-  const hasDeliverable =
-    /\blivrable\b/.test(hay) ||
-    /\bspecification\b/.test(hay) ||
-    /\bcahier\b/.test(hay);
-  const hasCycleFrame =
-    /\bcycle\b/.test(hay) ||
-    /\breference\b/.test(hay) ||
-    /\bconsolide/.test(hay) ||
-    /\battendu\b/.test(hay);
-  if (!hasDeliverable || !hasCycleFrame) return false;
   // Refuse pure conversational / question framing.
   if (
-    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer)\b/.test(hay) ||
+    /\b(parlons|parler|qu'est[- ]ce|explique|expliquer|explique-moi)\b/.test(
+      hay,
+    ) ||
     /\?\s*$/.test(hay.trim())
   ) {
     return false;
   }
+
+  const productionVerb =
+    /\bmaterialis/.test(hay) ||
+    /\b(produire|produis|ecrire|rediger|deposer|creer|prepare|preparer)\b/.test(
+      hay,
+    );
+  const documentaryObject =
+    /\b(livrable|fichier|document|note|markdown|\.md\b|specification|cahier|memoire)\b/.test(
+      hay,
+    ) || analysis.executionIntent?.intentKind === "docs_write";
+  const repoOrDeliverableFrame =
+    /\b(depot|repo|repository|git|workspace|projet|cycle|reference|consolide|attendu|emplacement)\b/.test(
+      hay,
+    ) ||
+    Boolean(analysis.executionIntent?.targetPath?.trim()) ||
+    analysis.executionIntent?.intentKind === "docs_write";
+
+  if (!productionVerb || !documentaryObject) return false;
+  if (!repoOrDeliverableFrame) return false;
   return true;
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e2e72c..47a966a7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -811,10 +811,32 @@ function chatFirstDecisionText(input: {
         "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
       ].join(" ");
     }
+    if (input.subjectFamily === "proposal") {
+      const prep = input.prepareOutcome;
+      if (prep?.kind === "prepared") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          `ExecutionContract préparé (${prep.executionContractId}) — inspectable avant tout lancement.`,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+      if (prep?.kind === "blocked") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          "ExecutionContract NON matérialisé — préparation bloquée.",
+          prep.message,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+    }
     return [
       head,
       "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
-      "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+      "La préparation de l'action pourra suivre si le contrat Product l'autorise. Rien n'a encore été exécuté.",
       "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
     ].join(" ");
   }
@@ -1924,6 +1946,47 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });

+  // F-C9-01/04 — actionable work while a cycle is already active must not fall
+  // through to NEW_CYCLE START qualification (« Démarrer le cycle Cadrage »).
+  if (
+    continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+    Boolean(project.activeCycleInstanceId?.trim()) &&
+    (analysis.intentClass === "actionable" ||
+      analysis.intentClass === "execution_request")
+  ) {
+    const activeId = project.activeCycleInstanceId!.trim();
+    const cycleLoad = await oa.cycleServices.getCycle.execute({
+      cycleInstanceId: activeId,
+    });
+    if (cycleLoad.ok && cycleLoad.cycle.status === "active") {
+      const qualification = qualificationFromActiveCycle({
+        cycle: cycleLoad.cycle,
+        signals: formalizationSignals,
+        analysis,
+      });
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: [
+          presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+          "Le cycle en cours est conservé — aucun nouveau démarrage n'est proposé.",
+          "Pour préparer une mission Cursor, précisez le résultat attendu et le périmètre (fichier, correction, tests, …).",
+          "La préparation d'un contrat d'exécution reste distincte de son lancement.",
+          "Rien n'a encore été exécuté.",
+        ].join(" "),
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification,
+        executionBlocked: analysis.intentClass === "execution_request",
+        turnKind: "f2_clarification",
+      });
+    }
+  }
+
   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
@@ -2034,16 +2097,18 @@ export async function orchestrateAssistantSend(input: {
         "mw5ChallengeState",
         input.beforeF2Effect,
       );
+      // F-C9-03 — active-cycle governed continuation mints a Proposal subject,
+      // not a new lifecycle/CKC Recommendation. Do not arm MW5 as if emitting Rec.
       return evaluateF2Mw5({
       content,
       history: input.history,
       analysis,
       recommendedProfile: qualification.recommendedProfile,
-      recommendationWouldEmit: true,
+      recommendationWouldEmit: false,
       projectCriticality: project.criticality,
       projectId: project.projectId,
       oa,
-      structurallyResolvedActiveCycleContinuation,
+      structurallyResolvedActiveCycleContinuation: true,
     });
     })();
     if (!mw5.surface.recommendationAllowed) {
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index ac9e8c3c..e65aea0c 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -1037,20 +1037,29 @@ function textsMeaningfullyDistinct(a: string, b: string): boolean {
   return true;
 }

-function cycleNotStartedState(
+function isActiveCycleStatus(cycleStatus: string | null | undefined): boolean {
+  const status = (cycleStatus ?? "").toLowerCase();
+  return status.includes("active") || status.includes("actif");
+}
+
+function cyclePresentationState(
   cycleStatus: string | null | undefined,
   cycleInstanceId: string | null | undefined,
+  authoritativeLifecycleActive: boolean,
 ): string {
-  const status = (cycleStatus ?? "").toLowerCase();
-  if (status.includes("active") || status.includes("actif")) {
+  if (authoritativeLifecycleActive || isActiveCycleStatus(cycleStatus)) {
     return "Le cycle est actif.";
   }
-  void cycleInstanceId;
+  const id = (cycleInstanceId ?? "").trim();
+  if (id) {
+    return "Cycle enregistré — démarrage à confirmer sur la trajectoire.";
+  }
   return "Le cycle n'a pas encore démarré.";
 }

 /**
  * Compact Recommendation card for the nominal Pilote path.
+ * When LPS/lifecycle already has an active cycle, never present a START card.
  */
 export function projectPilotRecommendationCard(input: {
   cycleLabel: string | null | undefined;
@@ -1060,6 +1069,12 @@ export function projectPilotRecommendationCard(input: {
   cycleStatus?: string | null;
   cycleInstanceId?: string | null;
   freshnessLabel?: string | null;
+  /**
+   * Authoritative LPS / lifecycle active cycle (Product truth).
+   * Presentation must not contradict this with a START recommendation.
+   */
+  authoritativeLifecycleActive?: boolean | null;
+  detailedStatus?: string | null;
 }): PilotRecommendationCardProjection {
   const cycle =
     nonempty(input.cycleLabel) ?? "le cycle recommandé";
@@ -1073,11 +1088,21 @@ export function projectPilotRecommendationCard(input: {
     profileRationalePiloteLabel(input.rationale),
   );
   const freshness = nonempty(input.freshnessLabel);
+  const authoritative =
+    input.authoritativeLifecycleActive === true ||
+    input.detailedStatus === "ACTIVE_CYCLE_GOVERNED_CONTINUATION" ||
+    isActiveCycleStatus(input.cycleStatus);
   return {
     title: "Ce que Nora recommande",
-    recommendation: `Démarrer le cycle ${cycle}.`,
+    recommendation: authoritative
+      ? `Poursuivre le travail du cycle ${cycle}.`
+      : `Démarrer le cycle ${cycle}.`,
     why,
-    state: cycleNotStartedState(input.cycleStatus, input.cycleInstanceId),
+    state: cyclePresentationState(
+      input.cycleStatus,
+      input.cycleInstanceId,
+      authoritative,
+    ),
     showProfile,
     profileLabel: showProfile && profile ? profile : null,
     freshnessLabel:
@@ -1194,6 +1219,12 @@ export function projectPilotProposalCard(input: {
   const engineStop =
     /F2\s*S['’]ARRÊTE|READY_NO_GATE|AUCUNE EXÉCUTION/i.test(step) ||
     step.length === 0;
+  const cycleActive = isActiveCycleStatus(input.cycleStatus);
+  const cycleState = cyclePresentationState(
+    input.cycleStatus,
+    input.cycleInstanceId,
+    cycleActive,
+  );
   return {
     title: "Ce que Nora propose",
     proposition,
@@ -1201,10 +1232,9 @@ export function projectPilotProposalCard(input: {
     consequence,
     agreement: "Aucune décision structurée n'est requise pour l'instant.",
     nextAction: engineStop
-      ? `Nora recommande de démarrer ${cycle}. ${cycleNotStartedState(
-          input.cycleStatus,
-          input.cycleInstanceId,
-        )} Vous pouvez poursuivre avec Nora pour préparer ce démarrage.`
+      ? cycleActive
+        ? `Nora recommande de poursuivre le travail du cycle ${cycle}. ${cycleState} Vous pouvez poursuivre avec Nora pour préparer la suite.`
+        : `Nora recommande de démarrer ${cycle}. ${cycleState} Vous pouvez poursuivre avec Nora pour préparer ce démarrage.`
       : scrubPiloteFacingEngineJargon(step) ||
         `Poursuivez avec Nora concernant ${cycle}.`,
     nextActionKind: "conversation",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index b8f70589..dee948e0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -45,6 +45,7 @@ import {
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
+import { prepareM3FromDecision } from "../f3/prepareM3FromDecision";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -165,7 +166,74 @@ const WORK_TARGET_REQUIRED_MESSAGE =
 function proposalPrepareNotApplicable(): ChatFirstPrepareOutcome {
   return {
     kind: "not_applicable",
-    reason: "Proposal chat-first n'auto-prépare pas d'ExecutionContract.",
+    reason:
+      "Proposal chat-first : PREPARE non applicable pour cette disposition (amend/refuse/defer).",
+  };
+}
+
+/**
+ * P6 generic prep — after an accepted Proposal pursue HD, auto-PREPARE when
+ * DecisionBasis is eligible. docs_write → M3; other eligible bases → W3-A.
+ * PREPARE ≠ Execute. Does not invent HD or widen authority (P2-D-01 preserved).
+ */
+async function autoPrepareAfterProposalPursue(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+}): Promise<ChatFirstPrepareOutcome> {
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return { kind: "blocked", code: live.code, message: live.message };
+  }
+  const currentContext = {
+    projectId: input.projectId,
+    lpsId: live.context.lpsId,
+    lpsVersion: live.context.lpsVersion,
+    doctrineDigest: live.context.doctrineDigest,
+    activeCycleInstanceId: live.context.activeCycleInstanceId,
+    ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+  };
+
+  const w3a = await prepareExecutionContractFromW2Decision({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (w3a.ok) {
+    return {
+      kind: "prepared",
+      executionContractId: w3a.contract.executionContractId,
+    };
+  }
+  if (w3a.code !== "PREPARE_ROUTE_DOCS_WRITE") {
+    return { kind: "blocked", code: w3a.code, message: w3a.message };
+  }
+
+  const m3 = await prepareM3FromDecision({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext,
+    deps: {
+      decisionServices: input.oa.decisionServices,
+      authorityResolver: input.oa.authorityResolver,
+      executionContractServices: input.oa.executionContractServices,
+      nowIso: () => input.oa.clock.nowIso(),
+      productRuntimeAuthority: "N2",
+    },
+  });
+  if (!m3.ok) {
+    return { kind: "blocked", code: m3.code, message: m3.message };
+  }
+  return {
+    kind: "prepared",
+    executionContractId: m3.payload.contract.executionContractId,
   };
 }

@@ -944,6 +1012,21 @@ export async function resolveChatFirstPilotDecision(input: {
       };
     }

+    let prepareOutcome: ChatFirstPrepareOutcome = proposalPrepareNotApplicable();
+    if (
+      effective === "accept" &&
+      selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF
+    ) {
+      prepareOutcome = await autoPrepareAfterProposalPursue({
+        oa: input.oa,
+        projectId: input.projectId,
+        decisionId: decided.decision.decisionId,
+        forceLocalAuthority: input.forceLocalAuthority,
+        pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+        managedRepoRootBase: input.managedRepoRootBase,
+      });
+    }
+
     return {
       kind: "decision_recorded",
       disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
@@ -956,9 +1039,12 @@ export async function resolveChatFirstPilotDecision(input: {
       decisionBasisLinked: decided.decision.decisionBasisLinked,
       readyForNextGatedStep: effective === "accept",
       subjectFamily: "proposal",
-      prepareOutcome: proposalPrepareNotApplicable(),
-      executionContractId: null,
-      executionContractPrepared: false,
+      prepareOutcome,
+      executionContractId:
+        prepareOutcome.kind === "prepared"
+          ? prepareOutcome.executionContractId
+          : null,
+      executionContractPrepared: prepareOutcome.kind === "prepared",
       attemptCreated: false,
       executionPerformed: false,
     };
```

---

## S. Tests exécutés (DETERMINISTIC ONLY)

| Suite | Résultat |
| --- | --- |
| `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` | PASS |
| `p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx` | PASS |
| `mw5.s01-s04.disposition.d0.test.ts` | PASS |
| `mw5.challenge.clarification.product.d0.test.ts` | PASS |
| `greenfieldLifecycleBootstrap.d0.test.ts` | PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `*.real.test.ts` | **NON LANCÉS** |

Scénarios GO 1–12 : couverture **déterministe partielle** (1/4/5/6/7/8 via unit+guards). REAL / Human QA = hors scope.

---

## T. Fake / Real

DETERMINISTIC PRODUCT PATH PROVEN AT TESTED SCOPE. ≠ REAL BOUNDARY / E2E REAL / P6 PASS / READY / v3 ADOPTED.

---

## U. Sécurité / autorité

- MD-WR-06 conservé.
- PREPARE ≠ Execute (`executionPerformed: false`).
- Aucune HD inventée.
- Aucune mutation QA DB.
- Ports Studio non touchés.
- Secrets non exposés.

---

## V. PRR

Lecture conformité : pas de modification PRR. Raccords restent dans F2/W2/F3/UI.

---

## W. Dette / exit

| Dette | Sortie |
| --- | --- |
| D4 prepare-without-HD | Gate Morris G-D4 |
| F-C9-06 supersede LR store | Cycle dédié currentness durable |
| Auto-PREPARE e2e fixture Proposal→M3 | Test d0 dédié post-D4 ou extension |
| Post-Evidence Nora deep | Hors scope ; chemins existants KEEP |

---

## X. Réserves

- Auto-PREPARE M3 dépend d'un DecisionBasis docs_write scellé (gates Artifact inchangés).
- Clarification in-cycle (guard NEW_CYCLE) n'ouvre pas seule un EC (D4).
- origin/main local était stale avant fetch ; Delivery basé sur ls-remote `e7822033`.

---

## Y. Gates Morris restants

1. **G-D4-PREPARE-WITHOUT-SYSTEMATIC-HD**
2. GO commit/push/PR projet (non autorisé ce cycle)
3. GO REAL Human QA reprise e66

---

## Z. Git Truth final

| Item | Valeur |
| --- | --- |
| pwd | `…/sfia-workspace-p6-generic-exec-continuity-e7822033` |
| branch | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| HEAD | `e7822033` (working tree dirty — uncommitted Product changes) |
| Projet push/PR | AUCUN |
| QA worktree | intact |

---

## AA. Verdict

**PARTIAL DELIVERY / D4 GOVERNANCE DECISION REQUIRED / SAFE CHANGES PRESERVED / READY FOR CHATGPT CRITICAL REVIEW.**

---

## AB. Instruction ChatGPT

Lire ce handoff distant. Critical Review code+tests+contrats.

Vérifier D1–D6, anti-catalogue, anti-moteur parallèle, F-C9-01/03/04, auto-PREPARE post-HD, **Decision Pack D4**, PREPARE≠EXECUTE, absence REAL, Review Pack exploitable.

Rendre Delivery Readiness. Ne pas autoriser commit/push/PR/merge/REAL/doctrine/v3 automatiquement.
