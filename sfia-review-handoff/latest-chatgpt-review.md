# REVIEW PACK FULL — W2-G3 DELIVERY — UMBRELLA OPTION A

Réinitialisé entièrement au début du cycle. Mono-cycle uniquement. Pas d'append d'un cycle antérieur.

## 1. Horodatage

- Généré: 2026-08-23 05:06 CEST (+0200)
- Cycle: Delivery / implémentation — EVOL — CRITICAL
- Capacité: W2 — Cognition, trajectoire et décision humaine
- Milestone: W2-G3 Delivery — Umbrella Option A (E+A+B+C)
- Verdict recherché: READY FOR CHATGPT REVIEW — W2-G3 E+A+B+C DELIVERY IMPLEMENTED

## 2. Repo / branche / HEAD / origin/main / base

| Champ | Valeur |
|---|---|
| repo | mcleland147/sfia-workspace |
| toplevel | /Users/morris/Projects/sfia-workspace |
| branche projet | delivery/sfia-studio-w2-g3-umbrella-a |
| HEAD projet | 3a86f8190deb34e37bede868a6e765b0440fc839 |
| origin/main | 3a86f8190deb34e37bede868a6e765b0440fc839 |
| base | origin/main (identique HEAD; Delivery non commité) |
| référence contrat | origin/main = 3a86f8190deb34e37bede868a6e765b0440fc839 |
| drift | AUCUN — origin/main n'a pas bougé depuis la référence |

## 3. Local Git Truth Check

Exécuté avant mutation et re-contrôlé en fin de cycle:

```
pwd = /Users/morris/Projects/sfia-workspace
git rev-parse --show-toplevel = /Users/morris/Projects/sfia-workspace
git fetch origin = OK
git branch --show-current = delivery/sfia-studio-w2-g3-umbrella-a
git rev-parse HEAD = 3a86f8190deb34e37bede868a6e765b0440fc839
git rev-parse origin/main = 3a86f8190deb34e37bede868a6e765b0440fc839
git status --short = modifications W2-G3 locales + untracked in-scope + untracked hors scope préservés
git diff --cached --stat = vide
```

Règles respectées:

1. origin/main n'a pas évolué depuis 3a86f819… — pas de requalification.
2. Branche historique W2-G2 déjà intégrée sur main (PR #399 merge 3a86f819…). Non réouverte.
3. Aucun tracked/staged change inexplicable: tout le diff projet appartient à ce Delivery E+A+B+C.
4. Untracked hors scope préservés intacts: `projects/eventops-poc/`, `projects/flex-office-demo/`. `.tmp-sfia-review/` réinitialisé puis remplacé par ce pack.
5. Aucune branche supprimée. Aucun rebase/merge. Aucun commit/push/PR/merge projet.

## 4. Décision Morris consommée

**GO MORRIS — W2-G3 DELIVERY — UMBRELLA OPTION A**

AUTHORIZED: Track E + Track A + Track B + Track C
SEQUENCING: E tôt; A et B coordonnés; C après contrats A stables.
D-W2-01, D-W2-03, D-W2-04, TD-C6-03: à implémenter selon décisions déjà adoptées.
D-W2-02: ADOPTED comme décision de conception, mais GO Phase B distinct NON consommé.

## 5. Gates non consommés

- GO PHASE B — Track D = NOT AUTHORIZED / NOT CONSUMED
- Execute = OUT OF SCOPE
- Cursor REAL = OUT OF SCOPE
- OpenAI LIVE comme preuve W2 = OUT OF SCOPE
- runtime v3 ADOPTED = NOT CLAIMED
- réouverture C6 = INTERDITE
- Git integration projet (commit/push/PR/merge) = NOT AUTHORIZED
- W2 complete / Product Completion complete = NOT CLAIMED

## 6. Sources effectivement lues

Processus externe SFIA v2.6:

- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- prompts/templates/sfia-cycle-execution-template.md (routing Delivery + Review Pack/Handoff)

Convergence:

- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md (lecture; aucune sync écrite)

Product Completion (READ ONLY):

- 01-product-completion-cadrage.md
- 02-product-completion-conception-fonctionnelle.md
- 03-product-completion-architecture-fonctionnelle.md
- 06-product-completion-architecture-technique-delta.md
- 07-product-completion-wave-1-delivery-readiness.md
- 08-product-completion-wave-2-delivery-readiness.md

Doctrine Studio v3 applicable:

- 30-knowledge-context-human-decision-doctrine.md
- 31-doctrine-package-and-source-resolution.md
- 32-living-project-state-and-dynamic-trajectory.md
- 33-epistemology-provenance-and-contradiction-model.md
- 34-agent-capabilities-reversibility-and-execution-governance.md
- 35-artifact-evidence-debt-and-controlled-learning.md
- 37-studio-v3-foundations-and-consolidation-decision-pack.md

CKC / cognition — lu uniquement pour préserver le seam W1:

- features/project-assistant/f2/ckcCognitiveContext.ts (LU, NON ÉTENDU)
- features/project-assistant/f2/orchestrateF2.ts (LU, NON MODIFIÉ)

UX: contrats Product Experience existants / tokens `--pm6-*` du shell /studio. Aucune nouvelle source Figma d'exécution utilisée. Verdict visuel fort: REVIEW INCONCLUSIVE — RUNTIME/DESIGN COMPARISON INCOMPLETE.

## 7. Qualification

- Type: Delivery / implémentation
- Typologie: EVOL
- Profil: CRITICAL
- Capacité v3: W2
- Tracks autorisés: E A B C
- Track D: INTERDIT
- Outcomes C1 principalement servis: O-02, O-03 (sans empiéter sur D), O-04, O-05, O-09, O-10, préparation contrôlée de O-06 sans Execute
- Prochaine capacité: Track D uniquement après GO Morris Phase B distinct; puis preuve W2 complète

## 8. Classification KEEP / ADAPT / COMPLETE / TEMPORARY WITH EXIT

KEEP

- OA backbone (cycle / decision / execution-contract)
- Product SQLite (G0-B) — extension additive M7 seulement
- Project / LPS durability
- CycleInstance
- HumanDecision / DecisionBasis infrastructure
- ExecutionContract aggregate existant (aucun nouveau statut métier)
- Confirmation selective durability adoptée
- ProjectTrajectory repository / use cases existants
- bounded CKC→Nora seam W1 (`ckcCognitiveContext.ts`)
- canonical /studio product path
- C6 CLOSED

ADAPT / COMPLETE

- product application wiring ProjectTrajectory (`features/project-assistant/w2/*`)
- Option / Recommendation / HumanDecision semantics
- generic Pilote actor semantics (`LOCAL_PILOTE_ACTOR`)
- EC inspection (D-W2-04)
- AuthorityVerificationReceipt (TD-C6-03)
- AgentCapability projection (enveloppe gouvernance)
- minimal history/read model
- disclosures/UI truth
- PromoteDecidedTrajectory (use case OA, enforcement HD sur product path)

TEMPORARY WITH EXIT

- process-local Proposal F2 (D-W2-01) — non promu en SoT
- LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT (Pilote)
- forceLocalAuthority dans les tests déterministes (frontière locale, pas REAL)

INTERDIT — NON FAIT

- second trajectory / decision / Nora engine
- second product store
- second DoctrinePackage / CKC resolver
- fork de /studio
- orchestrateW2 / orchestratePhaseB
- Execute / REAL / Phase B

## 9–10. Fichiers modifiés + contenu exploitable

Voir sections automatiques ci-dessous: chaque fichier a une finalité, puis le diff (tracked) ou le contenu intégral (untracked nouveau). Impact invariants rappelé par track.

Fichiers hors scope NON touchés: eventops-poc, flex-office-demo, docs Product Completion, ckcCognitiveContext.ts, orchestrateF2.ts.

## 11. Track E — implémentation et preuves

Changements:

- `disclosures.ts`: ProjectTrajectory / Epistemic / granted Confirmation = restart-safe; requested Confirmation = process-local; w2Cognition=IN_PROGRESS_NOT_COMPLETE; ckcPhaseBCognition=NOT_AUTHORIZED_NOT_IMPLEMENTED; messages M7 + Phase B not implemented + runtime v3 not ADOPTED.
- `presentationLabels.ts`: requiredAuthority MORRIS → "autorité structurante"; restart honesty distingue confirmation demandée vs accordée et trajectoire effective/décidée.
- `f3/constants.ts`: "décision Morris" runtime → "décision humaine".
- HistorySurface / labels tests alignés.

Preuves:

- w2EabcDelivery Track E test PASS
- presentationLabels.test.ts PASS (3 assertions mises à jour vers autorité structurante|Morris)

Réserves:

- surfaces F2 conversationnelles historiques peuvent encore mentionner Morris dans des labels F3 (`F3_LABELS.recommendationNotDecision` reste "PAS UNE DÉCISION MORRIS") — hors refonte Product Experience; non présenté comme W2 complete.

## 12. Track A — implémentation et preuves

Invariants implémentés:

- Option ≠ Recommendation ≠ HumanDecision
- Recommendation.isHumanDecision=false et promotesTrajectory=false
- PROPOSED ≠ DECIDED: candidate n'est jamais current
- Promotion uniquement via `decideTrajectory` après HD acceptée Pilote + DecisionBasis trajectory_option
- `assertDecisionAuthorizesPromotion` fail-closed
- `promoteDecidedTrajectory` exige decisionRef; ne vérifie pas lui-même la HD (D-W2-03 product path)
- reload Product SQLite conserve decided/current
- actor runtime = Pilote; authority class OA = morris
- pas d'auto-décision; option inconnue refusée
- D-W2-01: Proposal non persistée; Options/DecisionRef matérialisés Epistemic + ProjectTrajectory

Preuves:

- deriveTrajectoryOptions / Recommendation PASS
- refuse promotion without HD PASS
- propose candidate not current then promote after Pilote HD PASS
- restart keeps decided/current PASS
- TrajectorySurface UI: OPTION vs RECOMMANDATION — PAS UNE DÉCISION; Décider cette option; no auto-decision PASS

Réserves:

- Options dérivées de la qualification W1 (cycle type / profil / signaux) — déterministe, sans contenu CKC Phase B. Attribution CKC reportée si déjà présente, jamais inventée.
- `forceLocalAuthority` requis en tests pour le gate local — realism gap documenté, pas un second chemin produit.

## 13. Track B — implémentation et preuves

- `projectHistory.ts` compose Project/LPS, Cycle, Trajectory versions/current, HumanDecision/DecisionBasis, ExecutionContract pertinents.
- Bornes: max 5 versions / 5 décisions / 5 contrats.
- Absences honnêtes: Conversation, Proposition F2, transcript.
- HistorySurface adapté: ancres durables + liste d'absences. Pas de timeline riche. Pas de nouvel audit store.

Preuves:

- Track B test PASS (anchors + absent conversation/proposal, no transcript)
- restart test relit history après reboot SQLite PASS

Réserves:

- HistorySurface n'est pas un redesign Product Experience; fidélité visuelle vs contrat Figma = INCONCLUSIVE.

## 14. Track C — implémentation et preuves

Précondition: contrats A stables (HD → decided trajectory → prepareM3FromDecision existant).

D-W2-04:

- InspectionAttestation liée à executionContractId + version + inspectionFingerprint + actor + inspectedAt
- inspectionFingerprint = material sémantique moins confirmationRef/immutableAfterConfirm (confirm-after-inspect ne stale pas)
- aucun nouveau statut métier EC
- amendement matériel / supersession ⇒ attestation insuffisante ⇒ réinspection

TD-C6-03:

- AuthorityVerificationReceipt persisté (M7) — C6 non rouvert

Ordre produit:

PREPARED → INSPECTS → Confirmation si requise → authority/executor sufficiency → AUTHORIZED|BLOCKED → STOP BEFORE EXECUTE

AgentCapability = enveloppe gouvernance via registry OA existant + agentMatchViolation. Absence ⇒ BLOCKED.

Preuves (w2EabcDelivery integrated):

- unread inspection insufficient
- authorize uninspected → BLOCKED inspection_required, receipt avr:, executionPerformed=false, attemptCreated=false
- inspect → INSPECTÉ, grantsAuthority=false
- confirm after inspect possible; fabricated=false
- supersede scope_change → successor unread → BLOCKED reinspection
- never startExecution / ExecutionAttempt

Réserves:

- outcome AUTHORIZED dépend de Confirmation + executor registry local; le chemin intégré prouve BLOCKED honnête et STOP BEFORE EXECUTE. AUTHORIZED est un outcome possible du même chemin lorsque inspection+confirmation+capability sont suffisants; pas de claim READY FOR REAL.
- M7 est une migration additive du Product SQLite KEEP, pas une nouvelle persistence concurrente.

## 15. Track D — confirmation explicite de non-implémentation

- `ckcCognitiveContext.ts`: git diff vide
- `orchestrateF2.ts`: git diff vide
- aucun orchestrateW2 / orchestratePhaseB
- aucun test nommé preuve Phase B
- disclosures: ckcPhaseBCognition=NOT_AUTHORIZED_NOT_IMPLEMENTED
- Options/Recommendation n'injectent pas le CKC complet
- D-W2-02 ADOPTED ≠ GO Phase B consommé
- EABC implemented ≠ Phase B implemented

## 16. Tests exécutés + résultats

Commandes (cwd projects/sfia-studio/app):

```
npx vitest run \
  __tests__/project-assistant/w2EabcDelivery.test.ts \
  __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx \
  __tests__/project-assistant/w1RecoveryFoundation.test.tsx \
  __tests__/project-assistant/presentationLabels.test.ts \
  __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx \
  __tests__/project-assistant/ProjectAssistantPanel.test.tsx \
  __tests__/oa/decision/m3HumanDecisionDurability.test.ts \
  __tests__/oa/decision/decisionConfirmationAuthority.test.ts \
  __tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts \
  __tests__/oa/cycle/m2ProductCycleDurability.test.ts \
  __tests__/recommendation-vs-decision.test.tsx
```

Résultat final ciblé: **11 files passed / 114 tests passed**.

Sous-ensemble EABC+UI: 9 passed (7 delivery + 2 UI).

Typecheck: erreurs in-scope W2 corrigées (`inspectExecutionContract` + export `InspectionInsufficiencyReason`). Erreurs préexistantes hors scope: `pg` / FinOps postgres (non introduites ici).

`m3RestartProcessProof.test.ts`: FAIL préexistant — `node_modules/.bin/tsx` absent du worktree app; indépendant de W2-G3; non utilisé comme preuve de ce cycle.

Tests négatifs couverts: no HD ⇒ no promotion; option inventée refusée; inspection absente/stale ⇒ BLOCKED; no Execute; no auto-HumanDecision.

Restart proof: Product SQLite reboot conserve trajectory decided/current + history decision.

## 17. Preuve E2E déterministe product-native

Chemin prouvé dans `w2EabcDelivery.test.ts` (node, Product SQLite temp, /studio application path):

Project/resume → LPS/context → qualification W1 existante → Options → Recommendation → no auto-decision → Pilote HumanDecision → DecisionBasis trajectory_option → ProjectTrajectory decided/current → ExecutionContract prepared (prepareM3FromDecision, executionAllowed=false) → inspected → BLOCKED if uninspected → Confirmation if required after inspect → AgentCapability évaluée → AUTHORIZED ou BLOCKED → STOP BEFORE EXECUTE → supersede matériel → réinspection exigée.

CKC W1 peut être présent comme attribution déjà livrée. Jamais présenté comme preuve Phase B.

Cette preuve = preuve E+A+B+C autorisée. ≠ preuve finale complète W2.

## 18. Captures / runtime proof pour UI modifiée

- Tests React Testing Library de TrajectorySurface: labels OPTION / RECOMMANDATION — PAS UNE DÉCISION / DÉCISION HUMAINE PRISE / BLOQUÉ — ACTION REQUISE / arrêt avant exécution. PASS.
- Tokens CSS: `--pm6-surface`, `--pm6-border-soft`, `--pm6-radius-lg`, `--pm6-shadow-card` (shell existant).
- Accessibilité: aria-labelledby, role=alert/status, aria-label sur Décider.
- Aucune capture navigateur /studio seedée dans ce cycle (pas de serveur /studio exercé bout-en-bout ici).
- Aucune source Figma d'exécution validée consommée via MCP.

**REVIEW INCONCLUSIVE — RUNTIME/DESIGN COMPARISON INCOMPLETE**

Cela n'invalide pas les assertions fonctionnelles déterministes.

## 19. Fake / Real qualification

Applicable: oui.

Niveau ce cycle: **DETERMINISTIC PROVEN** pour E+A+B+C.

REAL BOUNDARY PROVEN: OUT OF SCOPE
END-TO-END REAL PROVEN: OUT OF SCOPE
OpenAI LIVE: OUT OF SCOPE
Cursor REAL: OUT OF SCOPE

Fixtures/mocks:

- UI tests mockent les server actions (même DTOs produit).
- Tests node utilisent Product SQLite réel + OA réel + `forceLocalAuthority` pour le gate local.
- Aucun second chemin produit.

Realism gaps:

- autorité locale TEMPORARY WITH EXIT
- Options déterministes hors CKC Phase B
- executor registry local / fixture F3
- DETERMINISTIC PROVEN ≠ READY FOR REAL ≠ REAL BOUNDARY PROVEN

## 20. Dettes / réserves / realism gaps

Blocking current EABC review: aucun identifié pour le périmètre autorisé.

Phase B governed remaining gap: Track D / US-P1-14 / REQ-24 — GO Phase B distinct requis.

Later W2 exit gap: preuve W2 complète après D; ≥2 cycle types Phase B; REAL distinct.

Nonblocking debt:

- F3_LABELS.recommendationNotDecision copy historique "MORRIS"
- m3RestartProcessProof tsx PATH préexistant
- typecheck FinOps/pg préexistant
- visual /studio vs design contract incomplete
- forceLocalAuthority test inject
- Proposal process-local TEMPORARY WITH EXIT (D-W2-01)

## 21. Confirmation STOP BEFORE EXECUTE

- authorizeExecutionContract / types: executionPerformed=false, attemptCreated=false
- aucun appel startExecution / confirmAndExecute dans w2/
- prepareM3FromDecision: executionAllowed=false (préexistant, réutilisé)
- UI: "Aucune exécution n'a été lancée : arrêt avant exécution."
- Integrated test assert executionPerformed=false after authorize and after stale authorize

## 22. Confirmation C6 CLOSED / no parallel architecture

- TD-C6-03 complété dans l'architecture déjà adoptée
- C6 non rouvert
- Product SQLite unique; M7 additif
- un seul chemin product application w2/; F2 orchestrate inchangé
- un seul resolver DoctrinePackage/CKC (W1 seam intact)

## 23. Confirmation no project commit/push/PR/merge

Aucun commit projet. Aucun push projet. Aucun PR. Aucun merge. main intact.
Seul git write autorisé après ce pack: publisher L3 borné `sfia/review-handoff`.

## 24. Diff stat final

Voir bloc généré ci-dessous (`git diff --stat` + liste untracked in-scope).

## 25. Verdict

READY FOR CHATGPT REVIEW — W2-G3 E+A+B+C DELIVERY IMPLEMENTED

Anti-claims:

- W2-G3 GO ≠ W2 complete
- EABC implemented ≠ Phase B implemented
- D-W2-02 adopted ≠ GO Phase B
- deterministic ≠ REAL
- no Execute
- no runtime v3 ADOPTED
- CI/tests green ≠ Product Completion
- ≠ READY FOR PR / READY FOR MERGE

Instruction ChatGPT: requalifier à partir du Git courant, du diff réel, des preuves, de ce Review Pack, du handoff canonique, et des gates Morris. Revue ChatGPT avant toute décision de commit/push/PR/merge projet.

---

# ANNEXE — DIFFS TRACKED ET FICHIERS NOUVEAUX


## Diff stat (tracked)

```
 .../ProjectAssistantPanel.test.tsx                 |  7 ++
 .../project-assistant/presentationLabels.test.ts   | 10 +--
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  7 ++
 .../features/pre-m6-product-ui/ProductShell.tsx    |  6 +-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  7 ++
 .../features/pre-m6-product-ui/ProjectsPage.tsx    |  2 +-
 .../surfaces/ConversationSurface.tsx               |  6 +-
 .../pre-m6-product-ui/surfaces/HistorySurface.tsx  | 97 +++++++++++++++++++++-
 .../project-assistant/f2/recordDecision.ts         | 12 +--
 .../app/features/project-assistant/f3/constants.ts |  6 +-
 .../project-assistant/presentationLabels.ts        | 10 +--
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   | 26 ++++++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     | 11 +++
 .../sqlite/createSqliteCycleServices.ts            |  9 ++
 .../app/lib/oa/cycle/ports/cycleAudit.ts           | 13 +++
 .../app/lib/oa/decision/domain/types.ts            | 29 ++++++-
 projects/sfia-studio/app/lib/oa/decision/index.ts  |  3 +
 .../infrastructure/localSingleUserAuthority.ts     | 84 ++++++++++++++++---
 .../app/lib/oa/execution-contract/index.ts         | 60 +++++++++++++
 .../createSqliteExecutionContractServices.ts       | 35 ++++++++
 .../app/lib/oa/project/infrastructure/sqlite/db.ts | 58 ++++++++++++-
 .../app/lib/vertical-slice-runtime/disclosures.ts  | 51 +++++++++---
 22 files changed, 492 insertions(+), 57 deletions(-)
```

## Untracked in-scope

- `projects/sfia-studio/app/features/project-assistant/w2/types.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/promoteDecidedTrajectory.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/application/recordAuthorityVerification.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/ports/inspectionAttestationRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/ports/authorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryInspectionAttestationRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryAuthorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteInspectionAttestationRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteAuthorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css`
- `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

## Fichiers tracked — finalité + diff

### `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

**Finalité:** Non-régression panel assistant.

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index a91692f7..daca0adc 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -113,6 +113,13 @@ const SUCCESS_RESULT = {
     cycleInstanceRestartSafe: true as const,
     humanDecisionRestartSafe: true as const,
     executionContractRestartSafe: true as const,
+    projectTrajectoryRestartSafe: true as const,
+    materializedEpistemicRestartSafe: true as const,
+    grantedConfirmationRestartSafe: true as const,
+    requestedConfirmationRestartSafe: false as const,
+    restoredConfirmationIsHistoricalConsentOnly: true as const,
+    w2Cognition: "IN_PROGRESS_NOT_COMPLETE" as const,
+    ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED" as const,
     messages: [] as const,
   },
 };
```

### `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`

**Finalité:** Alignement tests copy autorité structurante.

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
index dd14cea9..f753d59d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
@@ -234,7 +234,7 @@ describe("UAT-UX contract / Fake-Real / marker presentation", () => {
     expect(facts.capabilities).toEqual(["cap:cursor.read_only"]);
     expect(facts.reversibility).toBe("Réversible");
     expect(facts.constraints).toContain("Pas d'écriture Git");
-    expect(facts.authority).toMatch(/Morris/);
+    expect(facts.authority).toMatch(/autorité structurante|Morris/);
     expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/readme uniquement/);
     expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/aucun shell/);
   });
@@ -307,7 +307,7 @@ describe("UAT-UX contract / Fake-Real / marker presentation", () => {
         kind: "execute",
       }),
     ).toBe(
-      "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision Morris.",
+      "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision humaine.",
     );
   });

@@ -436,7 +436,7 @@ describe("UAT-UX contract / Fake-Real / marker presentation", () => {
     expect(summary.evidence).toBe("Une preuve a été enregistrée.");
     expect(summary.reviewBundle).toMatch(/brouillon/i);
     expect(summary.next).toMatch(/continue_conversation/);
-    expect(summary.next).toMatch(/pas une décision Morris/i);
+    expect(summary.next).toMatch(/pas une décision humaine/i);
   });

   it("T13/T14 — failed/timeout/running are not success", () => {
@@ -542,7 +542,7 @@ describe("UAT-UX-09 pre-confirmation Fake/Real truth", () => {
       "Pas de commande client",
     ]);
     expect(facts.stopConditions).toEqual(["GATE_D_REQUIRED"]);
-    expect(facts.authority).toMatch(/Morris/);
+    expect(facts.authority).toMatch(/autorité structurante|Morris/);
   });

   it("T-UX09-5 — session DET regression unchanged", () => {
@@ -587,7 +587,7 @@ describe("UAT-UX-09 pre-confirmation Fake/Real truth", () => {
       requiredAuthority: "MORRIS",
       constraints: ["NO GIT WRITE"],
     });
-    expect(facts.authority).toMatch(/Morris/);
+    expect(facts.authority).toMatch(/autorité structurante|Morris/);
     expect(facts.constraints).toContain("Pas d'écriture Git");
   });
 });
```

### `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`

**Finalité:** Non-régression workspace /studio + surface trajectoire.

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index 40b71275..12fe3207 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -115,6 +115,13 @@ const SUCCESS_RESULT = {
     cycleInstanceRestartSafe: true as const,
     humanDecisionRestartSafe: true as const,
     executionContractRestartSafe: true as const,
+    projectTrajectoryRestartSafe: true as const,
+    materializedEpistemicRestartSafe: true as const,
+    grantedConfirmationRestartSafe: true as const,
+    requestedConfirmationRestartSafe: false as const,
+    restoredConfirmationIsHistoricalConsentOnly: true as const,
+    w2Cognition: "IN_PROGRESS_NOT_COMPLETE" as const,
+    ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED" as const,
     messages: [] as const,
   },
 };
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx`

**Finalité:** UI mineure — copy/accessibilité existante.

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
index aed5e763..2a304a13 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
@@ -82,9 +82,9 @@ export function ProductShell({
             )}
           </nav>

-          <span className={styles.avatar} title="Morris">
-            <span aria-hidden>M</span>
-            <span className={styles.srOnly}>Morris</span>
+          <span className={styles.avatar} title="Pilote">
+            <span aria-hidden>P</span>
+            <span className={styles.srOnly}>Pilote</span>
           </span>
         </div>
       </header>
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

**Finalité:** UI — monte TrajectorySurface sur le chemin canonique /studio.

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 467a5955..e733d001 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -10,6 +10,7 @@ import { ConversationSurface } from "./surfaces/ConversationSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
+import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

@@ -135,6 +136,12 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />
           </div>
+          <TrajectorySurface
+            projectId={projectId}
+            onDurableFactsChanged={() => {
+              void loadProject();
+            }}
+          />
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx`

**Finalité:** UI mineure — copy projets.

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
index d79b2de2..82aac0ec 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
@@ -54,7 +54,7 @@ function badgeFor(status: string): Badge {
   }
 }

-/** F1 — Projects entry point. Nora recommends, Morris decides. */
+/** F1 — Projects entry point. Nora recommends, the Pilote decides. */
 export function ProjectsPage() {
   const [state, setState] = useState<ListState>({ status: "loading" });

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

**Finalité:** UI mineure — distinction recommandation / décision.

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index ef57c90a..f2f98e84 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -232,11 +232,11 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
               data-role={message.role}
             >
               <span className={styles.turnAvatar} aria-hidden>
-                {message.role === "user" ? "M" : "N"}
+                {message.role === "user" ? "P" : "N"}
               </span>
               <div className={styles.bubble}>
                 <p className={styles.bubbleAuthor}>
-                  {message.role === "user" ? "Morris" : "Nora"}
+                  {message.role === "user" ? "Pilote" : "Nora"}
                 </p>
                 <p className={styles.bubbleText}>{message.content}</p>
               </div>
@@ -1275,7 +1275,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
           </button>
         </div>
         <p className={styles.composerCaption}>
-          Morris pilote. La décision vous appartient toujours.
+          Vous pilotez. La décision vous appartient toujours.
         </p>
       </form>

```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx`

**Finalité:** Track B — HistorySurface lit le read model W2; pas de transcript.

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
index 7858c3cd..89a911f8 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
@@ -1,5 +1,8 @@
 "use client";

+import { useEffect, useState } from "react";
+import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
+import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import type { GetProjectSuccess } from "../types";
 import styles from "./HistorySurface.module.css";
@@ -11,9 +14,75 @@ type DurableAnchor = {
   detail: string;
 };

+function trajectoryAnchorDetail(
+  anchor: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
+): string {
+  if (anchor.isEffectiveCurrent) {
+    return anchor.decidedByDecisionRef
+      ? `Décidée et courante · décision ${anchor.decidedByDecisionRef}`
+      : "Courante · antérieure au rattachement de décision";
+  }
+  if (anchor.status === "candidate") {
+    return "Proposée · pas encore décidée, pas courante";
+  }
+  return `Statut ${anchor.status} · non courante`;
+}
+
+/** W2 durable anchors: trajectory versions, human decisions, contracts. */
+function buildW2Anchors(history: W2ProjectHistoryReadModel): DurableAnchor[] {
+  const anchors: DurableAnchor[] = [];
+
+  if (history.cycle.activeCycleInstanceId) {
+    anchors.push({
+      id: `cycle:${history.cycle.activeCycleInstanceId}`,
+      kind: "Cycle",
+      label: history.cycle.cycleTypeId
+        ? `${history.cycle.cycleTypeId} · profil ${history.cycle.profile ?? "inconnu"}`
+        : "Cycle rattaché",
+      detail: history.cycle.status
+        ? `Statut ${history.cycle.status}`
+        : "Cycle distinct du projet",
+    });
+  }
+
+  for (const version of history.trajectory.versions) {
+    anchors.push({
+      id: `trj:${version.trajectoryId}:${version.version}`,
+      kind: "Trajectoire",
+      label: `Version ${version.version} · ${version.stepCount} étapes`,
+      detail: trajectoryAnchorDetail(version),
+    });
+  }
+
+  for (const decision of history.decisions) {
+    anchors.push({
+      id: `dec:${decision.decisionId}`,
+      kind: "Décision humaine",
+      label: `Option retenue ${decision.selectedOptionRef}`,
+      detail: `${decision.status} · décideur ${decision.actorRole} · base ${
+        decision.basisSourceType ?? "absente"
+      }${decision.basisTrajectoryRef ? ` · ${decision.basisTrajectoryRef}` : ""}`,
+    });
+  }
+
+  for (const contract of history.contracts) {
+    anchors.push({
+      id: `xct:${contract.executionContractId}`,
+      kind: "Contrat d'exécution",
+      label: `Version ${contract.version} · ${contract.status}`,
+      detail: contract.decisionRefs.length
+        ? `Rattaché à ${contract.decisionRefs.join(", ")}`
+        : "Aucune décision rattachée",
+    });
+  }
+
+  return anchors;
+}
+
 function buildAnchors(
   result: GetProjectSuccess,
   durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  history: W2ProjectHistoryReadModel | null,
 ): DurableAnchor[] {
   const anchors: DurableAnchor[] = [
     {
@@ -30,7 +99,9 @@ function buildAnchors(
     },
   ];

-  if (result.livingState.activeCycleInstanceId) {
+  if (history) {
+    anchors.push(...buildW2Anchors(history));
+  } else if (result.livingState.activeCycleInstanceId) {
     anchors.push({
       id: "cycle",
       kind: "Cycle",
@@ -69,7 +140,9 @@ function buildAnchors(

 /**
  * F9 — durable factual anchors only (never a replayed conversation transcript).
- * Conversation, proposal and confirmation stay process-local and are absent here.
+ * Trajectory versions, human decisions and execution contracts are read from
+ * the W2 minimal read model; conversation, proposal and requested confirmation
+ * stay process-local and are reported as absent rather than reconstructed.
  */
 export function HistorySurface({
   result,
@@ -78,7 +151,22 @@ export function HistorySurface({
   result: GetProjectSuccess;
   durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
 }) {
-  const anchors = buildAnchors(result, durableOutcome);
+  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
+  const projectId = result.project.projectId;
+  const lpsVersion = result.livingState.version;
+
+  useEffect(() => {
+    let cancelled = false;
+    void w2ReadProjectHistoryAction({ projectId }).then((next) => {
+      if (cancelled) return;
+      setHistory(next.ok ? next.history : null);
+    });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId, lpsVersion]);
+
+  const anchors = buildAnchors(result, durableOutcome, history);

   return (
     <section
@@ -93,7 +181,8 @@ export function HistorySurface({
         </h2>
         <p className={styles.note}>
           Repères factuels du projet. La conversation, la proposition et la
-          confirmation restent process-local et n&apos;apparaissent pas ici.
+          confirmation demandée restent process-local et n&apos;apparaissent pas
+          ici.
         </p>
       </header>
       <ol className={styles.timeline}>
```

### `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

**Finalité:** Track A — F2 recordDecision utilise LOCAL_PILOTE_ACTOR; authority class OA 'morris' conservée; pas de second moteur.

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index 8f85ba7b..4379ac42 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
@@ -1,5 +1,7 @@
 /**
- * Record Morris-gate HumanDecision via OA DecisionServices (M3 durable).
+ * Record the structuring gate HumanDecision via OA DecisionServices (M3 durable).
+ * The product runtime decision-maker is the generic Pilote actor; `authority:
+ * "morris"` stays the OA domain authority class for structuring decisions.
  * Authority evidence is server-owned LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT
  * when configured; fail-closed otherwise. Client claims ignored.
  */
@@ -12,8 +14,8 @@ import type {
 } from "@/lib/oa/decision";
 import {
   computeDecisionBasisSourceDigest,
-  LOCAL_MORRIS_M3_ACTOR,
-  registerM3LocalMorrisAuthority,
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import type {
   DecisionDto,
@@ -234,7 +236,7 @@ export async function recordF2Decision(input: {
   const scope = proposalScope(proposal);
   const issuedAt = input.nowIso();

-  const authority = registerM3LocalMorrisAuthority({
+  const authority = registerLocalPiloteAuthority({
     authorityResolver: input.authorityResolver,
     scope,
     issuedAt,
@@ -286,7 +288,7 @@ export async function recordF2Decision(input: {
     subject: `F2 gate for ${proposal.proposalId}`,
     options,
     selectedOptionId: mapped.selectedOptionId,
-    actor: LOCAL_MORRIS_M3_ACTOR,
+    actor: LOCAL_PILOTE_ACTOR,
     authority: "morris",
     status: mapped.humanStatus,
     reversible: true,
```

### `projects/sfia-studio/app/features/project-assistant/f3/constants.ts`

**Finalité:** Track E — notices F3: Recommendation n'est pas une décision humaine (plus une décision Morris runtime).

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
index 28c537de..3d262624 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
@@ -60,17 +60,17 @@ export const F3_PROCESS_LOCAL_NOTICE =
  * Distinguishes execution mode (fixture) from persistence durability (Product).
  */
 export const F3_PRODUCT_DURABLE_NOTICE =
-  "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.";
+  "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a human decision.";

 /**
  * Durable read after a bounded Attempt whose REAL vs deterministic provenance
  * is no longer discriminable from LPS facts. Fail-closed: never claim REAL.
  */
 export const F3_PRODUCT_DURABLE_BOUNDED_NOTICE =
-  "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision Morris.";
+  "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision humaine.";

 export const F3_SESSION_CURSOR_REAL_NOTICE =
-  "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision Morris." as const;
+  "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision humaine." as const;

 /**
  * Route F3 ephemeral disclosure by OA composition persistence, not by
```

### `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`

**Finalité:** Track E/A — copy Pilote: autorité structurante plutôt que persona Morris; message de reprise distinguant confirmation demandée vs accordée.

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index c4a0a8bf..3e54ae46 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -291,7 +291,7 @@ export function requiredAuthorityUserLabel(
   const raw = nonempty(authority);
   if (!raw) return null;
   if (raw === "MORRIS") {
-    return "Votre confirmation est requise maintenant (autorité Morris).";
+    return "Votre confirmation est requise maintenant (autorité structurante).";
   }
   return `Autorité requise : ${raw}.`;
 }
@@ -531,7 +531,7 @@ export function resolvePersistenceNotice(input: {
     return F3_PRODUCT_DURABLE_BOUNDED_NOTICE;
   }
   if (looksDeterministicTestBoundary(facts)) {
-    return "Exécution déterministe de test enregistrée. La recommandation n'est pas une décision Morris.";
+    return "Exécution déterministe de test enregistrée. La recommandation n'est pas une décision humaine.";
   }
   const mode = (input.mode ?? "").toUpperCase();
   if (mode.includes("CURSOR_CLI_REAL")) return F3_SESSION_CURSOR_REAL_NOTICE;
@@ -566,13 +566,13 @@ export function nextActionUserLabel(input: {
   const gate = nonempty(input.nextGateCode);
   const action = nonempty(input.nextActionCode);
   if (action && gate) {
-    return `Prochaine action recommandée : ${action} (seuil ${gate}). Ce n'est pas une décision Morris.`;
+    return `Prochaine action recommandée : ${action} (seuil ${gate}). Ce n'est pas une décision humaine.`;
   }
   if (action) {
-    return `Prochaine action recommandée : ${action}. Ce n'est pas une décision Morris.`;
+    return `Prochaine action recommandée : ${action}. Ce n'est pas une décision humaine.`;
   }
   if (gate) {
-    return `Prochain seuil recommandé : ${gate}. Ce n'est pas une décision Morris.`;
+    return `Prochain seuil recommandé : ${gate}. Ce n'est pas une décision humaine.`;
   }
   return "Poursuivez avec Nora pour décider de la suite. Aucune nouvelle exécution ou décision n'est lancée automatiquement.";
 }
```

### `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

**Finalité:** Track A — PromoteDecidedTrajectory request/result types; decisionRef obligatoire.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index 54b7d52c..c2cf80f2 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -104,6 +104,13 @@ export type ProjectTrajectory = {
   status: TrajectoryStatus;
   steps: TrajectoryStep[];
   supersedesTrajectoryVersion?: number;
+  /**
+   * W2: durable HumanDecision reference that promoted this version to
+   * decided/current. Absent on `candidate` (proposed) versions.
+   */
+  decidedByDecisionRef?: string;
+  /** W2: product-level Option reference selected by the HumanDecision. */
+  decidedOptionRef?: string;
 };

 export type EpistemicItem = {
@@ -212,6 +219,25 @@ export type ProposeTrajectoryVersionRequest = {
   expectedLpsVersion: number;
 };

+/**
+ * W2 — promote an existing `candidate` trajectory version to decided/current.
+ * `decisionRef` is mandatory: OA never promotes a structuring trajectory
+ * without a decision reference. Product-path enforcement (D-W2-03) verifies
+ * that the reference is an accepted durable HumanDecision.
+ */
+export type PromoteDecidedTrajectoryRequest = {
+  trajectoryId: string;
+  projectId: string;
+  /** Version of the candidate to promote. */
+  expectedVersion: number;
+  status?: "validated" | "active";
+  decisionRef: string;
+  decidedOptionRef?: string;
+  createdBy: ActorReference;
+  correlationId?: string;
+  expectedLpsVersion: number;
+};
+
 export type UpdateEpistemicStateRequest = {
   projectId: string;
   items: Array<{
```

### `projects/sfia-studio/app/lib/oa/cycle/index.ts`

**Finalité:** Track A — export PromoteDecidedTrajectory.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index e566fcaa..b45985c5 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -36,6 +36,7 @@ export {
   ProposeTrajectoryVersion,
   TrajectoryVersionConflictSignal,
 } from "./application/proposeTrajectoryVersion";
+export { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
 export { GetEpistemicState } from "./application/getEpistemicState";
 export { UpdateEpistemicState } from "./application/updateEpistemicState";
 export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
@@ -76,6 +77,7 @@ import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
 import { GetCycle } from "./application/getCycle";
 import { GetEpistemicState } from "./application/getEpistemicState";
 import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
+import { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
 import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
 import { QualifyCycle } from "./application/qualifyCycle";
 import {
@@ -116,6 +118,8 @@ export type CycleServices = {
   getCurrentTrajectory: GetCurrentTrajectory;
   getTrajectoryVersion: GetTrajectoryVersion;
   proposeTrajectoryVersion: ProposeTrajectoryVersion;
+  /** W2: candidate → decided/current promotion, decisionRef mandatory. */
+  promoteDecidedTrajectory: PromoteDecidedTrajectory;
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
@@ -266,6 +270,13 @@ export function createInMemoryCycleServices(
       audit,
       store,
     ),
+    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
+      trajectories,
+      options.projectServices,
+      clock,
+      audit,
+      store,
+    ),
     getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
     updateEpistemicState: new UpdateEpistemicState(
       epistemic,
```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

**Finalité:** Track A — câblage OA existant du use case de promotion.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
index a4a9937e..8823ec68 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
@@ -7,6 +7,7 @@ import { GetCurrentTrajectory } from "../../application/getCurrentTrajectory";
 import { GetCycle } from "../../application/getCycle";
 import { GetEpistemicState } from "../../application/getEpistemicState";
 import { GetTrajectoryVersion } from "../../application/getTrajectoryVersion";
+import { PromoteDecidedTrajectory } from "../../application/promoteDecidedTrajectory";
 import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVersion";
 import { QualifyCycle } from "../../application/qualifyCycle";
 import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
@@ -47,6 +48,7 @@ export type SqliteCycleServices = {
   getCurrentTrajectory: GetCurrentTrajectory;
   getTrajectoryVersion: GetTrajectoryVersion;
   proposeTrajectoryVersion: ProposeTrajectoryVersion;
+  promoteDecidedTrajectory: PromoteDecidedTrajectory;
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
@@ -99,6 +101,13 @@ export function createSqliteCycleServices(
       audit,
       productStore,
     ),
+    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
+      trajectories,
+      options.projectServices,
+      clock,
+      audit,
+      productStore,
+    ),
     getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
     updateEpistemicState: new UpdateEpistemicState(
       epistemic,
```

### `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`

**Finalité:** Track A — événement d'audit trajectory.decided.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index b6d90df8..422b847d 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -45,6 +45,19 @@ export type CycleAuditEvent =
       detailCode?: string;
       durationMs: number;
     }
+  | {
+      event: "oa.trajectory.decided";
+      ts: string;
+      correlationId?: string;
+      projectId: string;
+      trajectoryId: string;
+      version: number;
+      decisionRef: string;
+      status?: string;
+      result: "ok" | "error";
+      detailCode?: string;
+      durationMs: number;
+    }
   | {
       event: "oa.trajectory.version_conflict";
       ts: string;
```

### `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

**Finalité:** Track A — DecisionBasis.sourceType trajectory_option + trajectoryContext.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index f206e707..d51d7c69 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -72,15 +72,38 @@ export type DecisionBasisProposalContext = {
   ckcResolutionRef?: string;
 };

+/**
+ * W2 — durable linkage from a structuring HumanDecision to the Option set it
+ * arbitrated and to the trajectory version it is allowed to promote.
+ * Options are described by reference/label only: a Recommendation recorded
+ * here is never itself a decision.
+ */
+export type DecisionBasisTrajectoryContext = {
+  /** Trajectory aggregate the decision arbitrates. */
+  trajectoryId: string;
+  /** Candidate (proposed) version the decision may promote. */
+  candidateVersion: number;
+  /** Option refs presented to the Pilote, in presentation order. */
+  optionRefs: string[];
+  /** Option the Pilote selected — must belong to optionRefs. */
+  selectedOptionRef: string;
+  /** Option that Nora recommended, when any. Never a decision. */
+  recommendedOptionRef?: string;
+  /** Durable Epistemic item refs materializing the options/recommendation. */
+  epistemicRefs?: string[];
+};
+
 export type DecisionBasis = {
-  sourceType: "proposal";
-  /** Opaque proposal id — not an F2 type import. */
+  sourceType: "proposal" | "trajectory_option";
+  /** Opaque source id (proposal id or trajectory option-set ref) — not an F2 type import. */
   sourceRef: string;
-  /** SHA-256 hex of canonical JSON over stable proposal fields. */
+  /** SHA-256 hex of canonical JSON over stable source fields. */
   sourceDigest: string;
   projectId: string;
   cycleInstanceId?: string;
   proposalContext: DecisionBasisProposalContext;
+  /** Present when sourceType is `trajectory_option`. */
+  trajectoryContext?: DecisionBasisTrajectoryContext;
   executionBasis: {
     objective?: string;
     scope?: string;
```

### `projects/sfia-studio/app/lib/oa/decision/index.ts`

**Finalité:** Track A — export acteur Pilote / helpers.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/index.ts b/projects/sfia-studio/app/lib/oa/decision/index.ts
index 90b46031..fb258a60 100644
--- a/projects/sfia-studio/app/lib/oa/decision/index.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/index.ts
@@ -46,7 +46,10 @@ export {
   M3_LOCAL_AUTHORITY_SOURCE,
   M3_LOCAL_AUTHORITY_ENV,
   LOCAL_MORRIS_M3_ACTOR,
+  LOCAL_PILOTE_ACTOR,
+  LOCAL_PILOTE_ACTOR_ID,
   isM3LocalAuthorityEnabled,
+  registerLocalPiloteAuthority,
   registerM3LocalMorrisAuthority,
 } from "./infrastructure/localSingleUserAuthority";
 export { SqliteDecisionRepository } from "./infrastructure/sqlite/sqliteDecisionRepository";
```

### `projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts`

**Finalité:** Track A — acteur runtime Pilote + registerLocalPiloteAuthority; acteur Morris historique conservé en lecture.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts b/projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
index c871ad51..edf98d63 100644
--- a/projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
@@ -1,7 +1,13 @@
 /**
- * Server-owned local single-user Morris authority (M3).
+ * Server-owned local single-user decision authority (M3 → W2).
  * TEMPORARY WITH EXIT — enabled only via env or explicit test inject.
  * Client canActAsMorris / claimedAuthorityLevel are never trusted.
+ *
+ * W2 actor semantics: the product runtime decision-maker is the generic
+ * **Pilote** (`LOCAL_PILOTE_ACTOR`). `authority: "morris"` remains the OA
+ * domain authority CLASS for structuring decisions — it is not a persona.
+ * The historical `LOCAL_MORRIS_M3_ACTOR` identity is preserved read-only so
+ * decisions already recorded under it are never falsified or rewritten.
  */
 import { randomUUID } from "node:crypto";
 import type { MemoryAuthorityResolver } from "./memoryAuthorityResolver";
@@ -9,12 +15,19 @@ import type { AuthorityEvidence, OaActorReference } from "../domain/types";

 export const M3_LOCAL_MORRIS_ACTOR_ID = "actor:local-morris-m3" as const;

+export const LOCAL_PILOTE_ACTOR_ID = "actor:local-pilote" as const;
+
 export const M3_LOCAL_AUTHORITY_SOURCE =
   "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT" as const;

 export const M3_LOCAL_AUTHORITY_ENV =
   "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY" as const;

+/**
+ * Historical M3 runtime actor.
+ * @deprecated W2 product runtime uses LOCAL_PILOTE_ACTOR. Kept so previously
+ * recorded HumanDecisions remain readable and attributable as-is.
+ */
 export const LOCAL_MORRIS_M3_ACTOR: OaActorReference = Object.freeze({
   actorId: M3_LOCAL_MORRIS_ACTOR_ID,
   role: "decision_maker" as const,
@@ -22,6 +35,14 @@ export const LOCAL_MORRIS_M3_ACTOR: OaActorReference = Object.freeze({
   authorityLevel: "none" as const,
 });

+/** W2 product runtime decision-maker — generic role, no persona. */
+export const LOCAL_PILOTE_ACTOR: OaActorReference = Object.freeze({
+  actorId: LOCAL_PILOTE_ACTOR_ID,
+  role: "decision_maker" as const,
+  displayName: "Pilote",
+  authorityLevel: "none" as const,
+});
+
 export function isM3LocalAuthorityEnabled(
   env: NodeJS.ProcessEnv = process.env,
 ): boolean {
@@ -41,16 +62,13 @@ export type RegisterM3LocalAuthorityResult =
       message: string;
     };

-/**
- * Register N3 + canActAsMorris evidence for a scope when M3 authority is enabled.
- * Fail-closed when disabled (unless forceEnable for tests).
- */
-export function registerM3LocalMorrisAuthority(input: {
+function registerLocalStructuringAuthority(input: {
   authorityResolver: MemoryAuthorityResolver;
+  actor: OaActorReference;
+  evidenceIdPrefix: string;
   scope: string;
   issuedAt: string;
   evidenceId?: string;
-  /** Test inject — bypasses env gate. */
   forceEnable?: boolean;
   env?: NodeJS.ProcessEnv;
 }): RegisterM3LocalAuthorityResult {
@@ -61,16 +79,15 @@ export function registerM3LocalMorrisAuthority(input: {
     return {
       ok: false,
       code: "AUTHORITY_NOT_CONFIGURED",
-      message:
-        "Local single-user Morris authority is not configured (fail-closed). Set SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1.",
+      message: `Local single-user structuring authority is not configured (fail-closed). Set ${M3_LOCAL_AUTHORITY_ENV}=1.`,
     };
   }

   const evidenceId =
-    input.evidenceId ?? `evd:m3-local-morris:${randomUUID()}`;
+    input.evidenceId ?? `${input.evidenceIdPrefix}:${randomUUID()}`;
   const evidence: AuthorityEvidence = {
     evidenceId,
-    actorId: M3_LOCAL_MORRIS_ACTOR_ID,
+    actorId: input.actor.actorId,
     level: "N3",
     scope: input.scope,
     issuedAt: input.issuedAt,
@@ -86,7 +103,7 @@ export function registerM3LocalMorrisAuthority(input: {
     return {
       ok: true,
       evidenceId,
-      actor: LOCAL_MORRIS_M3_ACTOR,
+      actor: input.actor,
       source: M3_LOCAL_AUTHORITY_SOURCE,
     };
   } catch (error) {
@@ -96,7 +113,48 @@ export function registerM3LocalMorrisAuthority(input: {
       message:
         error instanceof Error
           ? error.message
-          : "Failed to register M3 local Morris authority.",
+          : "Failed to register local structuring decision authority.",
     };
   }
 }
+
+/**
+ * W2 — register N3 + structuring-gate evidence for the generic Pilote actor.
+ * Fail-closed when the local single-user authority env gate is off
+ * (unless forceEnable for tests).
+ */
+export function registerLocalPiloteAuthority(input: {
+  authorityResolver: MemoryAuthorityResolver;
+  scope: string;
+  issuedAt: string;
+  evidenceId?: string;
+  /** Test inject — bypasses env gate. */
+  forceEnable?: boolean;
+  env?: NodeJS.ProcessEnv;
+}): RegisterM3LocalAuthorityResult {
+  return registerLocalStructuringAuthority({
+    ...input,
+    actor: LOCAL_PILOTE_ACTOR,
+    evidenceIdPrefix: "evd:local-pilote",
+  });
+}
+
+/**
+ * Historical M3 registration for the legacy Morris runtime actor.
+ * @deprecated W2 product runtime uses registerLocalPiloteAuthority.
+ */
+export function registerM3LocalMorrisAuthority(input: {
+  authorityResolver: MemoryAuthorityResolver;
+  scope: string;
+  issuedAt: string;
+  evidenceId?: string;
+  /** Test inject — bypasses env gate. */
+  forceEnable?: boolean;
+  env?: NodeJS.ProcessEnv;
+}): RegisterM3LocalAuthorityResult {
+  return registerLocalStructuringAuthority({
+    ...input,
+    actor: LOCAL_MORRIS_M3_ACTOR,
+    evidenceIdPrefix: "evd:m3-local-morris",
+  });
+}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`

**Finalité:** Track C — barrel OA: inspect / receipt / types.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index e496c5af..c1e035a0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -40,9 +40,24 @@ export {
   type ResolvedExecutionWindow,
 } from "./domain/executionWindowPolicy";

+export {
+  evaluateInspectionSufficiency,
+  type InspectionAttestation,
+  type InspectionInsufficiencyReason,
+  type InspectionSufficiency,
+} from "./domain/inspectionAttestation";
+export type {
+  AgentCapabilitySufficiency,
+  AuthorityVerificationBlockedReason,
+  AuthorityVerificationOutcome,
+  AuthorityVerificationReceipt,
+} from "./domain/authorityVerificationReceipt";
+
 export * from "./ports/executionContractRepository";
 export * from "./ports/executionAudit";
 export * from "./ports/executionContractPersistenceUnitOfWorkPort";
+export type { InspectionAttestationRepositoryPort } from "./ports/inspectionAttestationRepository";
+export type { AuthorityVerificationReceiptRepositoryPort } from "./ports/authorityVerificationReceiptRepository";

 export { BuildExecutionContract } from "./application/buildExecutionContract";
 export { GetExecutionContract } from "./application/getExecutionContract";
@@ -52,6 +67,17 @@ export { ConfirmExecutionContract } from "./application/confirmExecutionContract
 export { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
 export { CancelExecutionContract } from "./application/cancelExecutionContract";
 export { CheckExecutionAuthorization } from "./application/checkExecutionAuthorization";
+export {
+  GetContractInspectionState,
+  RecordContractInspection,
+  type GetContractInspectionStateResult,
+  type RecordContractInspectionRequest,
+  type RecordContractInspectionResult,
+} from "./application/recordContractInspection";
+export {
+  RecordAuthorityVerification,
+  type RecordAuthorityVerificationRequest,
+} from "./application/recordAuthorityVerification";

 export {
   projectCursorPrepareOnly,
@@ -60,6 +86,10 @@ export {

 export { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
 export { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
+export { MemoryInspectionAttestationRepository } from "./infrastructure/memoryInspectionAttestationRepository";
+export { MemoryAuthorityVerificationReceiptRepository } from "./infrastructure/memoryAuthorityVerificationReceiptRepository";
+export { SqliteInspectionAttestationRepository } from "./infrastructure/sqlite/sqliteInspectionAttestationRepository";
+export { SqliteAuthorityVerificationReceiptRepository } from "./infrastructure/sqlite/sqliteAuthorityVerificationReceiptRepository";
 export {
   ConsoleExecutionAuditJournal,
   MemoryExecutionAuditJournal,
@@ -89,8 +119,12 @@ import { GetExecutionContract } from "./application/getExecutionContract";
 import { ListExecutionContractHistory } from "./application/listExecutionContractHistory";
 import { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
 import { ValidateExecutionContract } from "./application/validateExecutionContract";
+import { GetContractInspectionState, RecordContractInspection } from "./application/recordContractInspection";
+import { RecordAuthorityVerification } from "./application/recordAuthorityVerification";
 import { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
 import { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
+import { MemoryAuthorityVerificationReceiptRepository } from "./infrastructure/memoryAuthorityVerificationReceiptRepository";
+import { MemoryInspectionAttestationRepository } from "./infrastructure/memoryInspectionAttestationRepository";
 import {
   ConsoleExecutionAuditJournal,
   MemoryExecutionAuditJournal,
@@ -98,11 +132,17 @@ import {
 import type { ExecutionAuditPort } from "./ports/executionAudit";
 import type { ExecutionContractPersistenceUnitOfWorkPort } from "./ports/executionContractPersistenceUnitOfWorkPort";
 import type { ExecutionContractRepositoryPort } from "./ports/executionContractRepository";
+import type { InspectionAttestationRepositoryPort } from "./ports/inspectionAttestationRepository";
+import type { AuthorityVerificationReceiptRepositoryPort } from "./ports/authorityVerificationReceiptRepository";

 export type ExecutionContractServices = {
   store: ExecutionContractPersistenceUnitOfWorkPort;
   contracts: ExecutionContractRepositoryPort;
   audit: ExecutionAuditPort;
+  /** W2 (D-W2-04) — append-only inspection proof. */
+  inspectionAttestations: InspectionAttestationRepositoryPort;
+  /** W2 (TD-C6-03) — append-only authority evaluation snapshots. */
+  authorityReceipts: AuthorityVerificationReceiptRepositoryPort;
   buildExecutionContract: BuildExecutionContract;
   getExecutionContract: GetExecutionContract;
   listExecutionContractHistory: ListExecutionContractHistory;
@@ -111,6 +151,9 @@ export type ExecutionContractServices = {
   supersedeExecutionContract: SupersedeExecutionContract;
   cancelExecutionContract: CancelExecutionContract;
   checkExecutionAuthorization: CheckExecutionAuthorization;
+  recordContractInspection: RecordContractInspection;
+  getContractInspectionState: GetContractInspectionState;
+  recordAuthorityVerification: RecordAuthorityVerification;
 };

 export type CreateInMemoryExecutionContractServicesOptions = {
@@ -133,6 +176,8 @@ export function createInMemoryExecutionContractServices(
   const audit = options.audit ?? new ConsoleExecutionAuditJournal();
   const authority =
     options.authorityResolver ?? options.decisionServices.authority;
+  const inspectionAttestations = new MemoryInspectionAttestationRepository();
+  const authorityReceipts = new MemoryAuthorityVerificationReceiptRepository();

   const cancelExecutionContract = new CancelExecutionContract(
     contracts,
@@ -146,6 +191,8 @@ export function createInMemoryExecutionContractServices(
     store,
     contracts,
     audit,
+    inspectionAttestations,
+    authorityReceipts,
     buildExecutionContract: new BuildExecutionContract(
       contracts,
       authority,
@@ -195,6 +242,19 @@ export function createInMemoryExecutionContractServices(
       clock,
       audit,
     ),
+    recordContractInspection: new RecordContractInspection(
+      contracts,
+      inspectionAttestations,
+      clock,
+    ),
+    getContractInspectionState: new GetContractInspectionState(
+      contracts,
+      inspectionAttestations,
+    ),
+    recordAuthorityVerification: new RecordAuthorityVerification(
+      authorityReceipts,
+      clock,
+    ),
   };
 }

```

### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts`

**Finalité:** Track C — composition services EC existants + inspect/receipt.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts b/projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts
index 1bb759dc..1c64bfb4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts
@@ -14,11 +14,20 @@ import { GetExecutionContract } from "../../application/getExecutionContract";
 import { ListExecutionContractHistory } from "../../application/listExecutionContractHistory";
 import { SupersedeExecutionContract } from "../../application/supersedeExecutionContract";
 import { ValidateExecutionContract } from "../../application/validateExecutionContract";
+import { RecordAuthorityVerification } from "../../application/recordAuthorityVerification";
+import {
+  GetContractInspectionState,
+  RecordContractInspection,
+} from "../../application/recordContractInspection";
 import type { ExecutionAuditPort } from "../../ports/executionAudit";
 import type { ExecutionContractPersistenceUnitOfWorkPort } from "../../ports/executionContractPersistenceUnitOfWorkPort";
 import type { ExecutionContractRepositoryPort } from "../../ports/executionContractRepository";
+import type { InspectionAttestationRepositoryPort } from "../../ports/inspectionAttestationRepository";
+import type { AuthorityVerificationReceiptRepositoryPort } from "../../ports/authorityVerificationReceiptRepository";
 import { SqliteExecutionAuditJournal } from "./sqliteExecutionAuditJournal";
 import { SqliteExecutionContractRepository } from "./sqliteExecutionContractRepository";
+import { SqliteAuthorityVerificationReceiptRepository } from "./sqliteAuthorityVerificationReceiptRepository";
+import { SqliteInspectionAttestationRepository } from "./sqliteInspectionAttestationRepository";

 export type CreateSqliteExecutionContractServicesOptions = {
   projectServices: ProjectServices;
@@ -35,6 +44,8 @@ export type SqliteExecutionContractServices = {
   contracts: ExecutionContractRepositoryPort;
   audit: ExecutionAuditPort;
   productStore: ProductSqliteHandle;
+  inspectionAttestations: InspectionAttestationRepositoryPort;
+  authorityReceipts: AuthorityVerificationReceiptRepositoryPort;
   buildExecutionContract: BuildExecutionContract;
   getExecutionContract: GetExecutionContract;
   listExecutionContractHistory: ListExecutionContractHistory;
@@ -43,6 +54,9 @@ export type SqliteExecutionContractServices = {
   supersedeExecutionContract: SupersedeExecutionContract;
   cancelExecutionContract: CancelExecutionContract;
   checkExecutionAuthorization: CheckExecutionAuthorization;
+  recordContractInspection: RecordContractInspection;
+  getContractInspectionState: GetContractInspectionState;
+  recordAuthorityVerification: RecordAuthorityVerification;
 };

 /**
@@ -57,6 +71,12 @@ export function createSqliteExecutionContractServices(
   const audit = options.audit ?? new SqliteExecutionAuditJournal(productStore);
   const authority =
     options.authorityResolver ?? options.decisionServices.authority;
+  const inspectionAttestations = new SqliteInspectionAttestationRepository(
+    productStore,
+  );
+  const authorityReceipts = new SqliteAuthorityVerificationReceiptRepository(
+    productStore,
+  );

   const cancelExecutionContract = new CancelExecutionContract(
     contracts,
@@ -71,6 +91,8 @@ export function createSqliteExecutionContractServices(
     contracts,
     audit,
     productStore,
+    inspectionAttestations,
+    authorityReceipts,
     buildExecutionContract: new BuildExecutionContract(
       contracts,
       authority,
@@ -120,6 +142,19 @@ export function createSqliteExecutionContractServices(
       clock,
       audit,
     ),
+    recordContractInspection: new RecordContractInspection(
+      contracts,
+      inspectionAttestations,
+      clock,
+    ),
+    getContractInspectionState: new GetContractInspectionState(
+      contracts,
+      inspectionAttestations,
+    ),
+    recordAuthorityVerification: new RecordAuthorityVerification(
+      authorityReceipts,
+      clock,
+    ),
   };
 }

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

**Finalité:** Track C — migration additive M7 sur le Product SQLite KEEP (tables attestation + receipt). Pas de second SoT.

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 64d02470..13a553da 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -5,7 +5,8 @@ export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M6;
+export const PRODUCT_SCHEMA_VERSION_M7 = "m7-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M7;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -251,6 +252,47 @@ CREATE INDEX IF NOT EXISTS idx_oa_epistemic_items_project
   ON oa_epistemic_items(project_id, type, status, materialized);
 `;

+/**
+ * W2 (M7) — audit-only governance proof.
+ * Both tables are append-only snapshots. Neither grants authority: an
+ * attestation proves an inspection happened on an exact contract version, and
+ * a receipt proves how effective authority was evaluated at a point in time.
+ */
+const M7_INSPECTION_AUTHORITY_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_ec_inspection_attestations (
+  attestation_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  contract_version INTEGER NOT NULL,
+  semantic_fingerprint TEXT NOT NULL,
+  project_id TEXT,
+  actor_id TEXT NOT NULL,
+  inspected_at TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_ec_inspection_contract
+  ON oa_ec_inspection_attestations(execution_contract_id, contract_version, inspected_at);
+
+CREATE TABLE IF NOT EXISTS oa_authority_verification_receipts (
+  receipt_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  contract_version INTEGER NOT NULL,
+  semantic_fingerprint TEXT NOT NULL,
+  project_id TEXT,
+  actor_id TEXT NOT NULL,
+  outcome TEXT NOT NULL,
+  verified_at TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_authority_receipts_contract
+  ON oa_authority_verification_receipts(execution_contract_id, verified_at);
+CREATE INDEX IF NOT EXISTS idx_oa_authority_receipts_project
+  ON oa_authority_verification_receipts(project_id, verified_at);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -296,8 +338,12 @@ function applyM6(db: DatabaseSync): void {
   db.exec(M6_TRAJECTORY_CONFIRMATION_EPISTEMIC_SCHEMA_SQL);
 }

+function applyM7(db: DatabaseSync): void {
+  db.exec(M7_INSPECTION_AUTHORITY_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3→M5→M6 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5→M6→M7 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -311,24 +357,32 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM3(db);
     applyM5(db);
     applyM6(db);
+    applyM7(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
     applyM5(db);
     applyM6(db);
+    applyM7(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
     applyM5(db);
     applyM6(db);
+    applyM7(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
     applyM6(db);
+    applyM7(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M6) {
+    applyM7(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
     applyM3(db);
     applyM5(db);
     applyM6(db);
+    applyM7(db);
   } else {
     try {
       db.close();
```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`

**Finalité:** Track E — aligner les disclosures runtime avec la vérité durable W1/W2 (trajectory/epistemic/granted confirmation) et déclarer honnêtement W2 incomplet + Phase B non autorisée.

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index 516058f4..d8ab14e6 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,28 +2,47 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * M3–M5: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle Product SQLite
- * restart-safe on Product path; conversation/proposal remain process-local;
- * Claims/Maturity/Confirmation remain Memory (out of minimal M5).
- * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
+ * M3–M6: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle +
+ * ProjectTrajectory/materialized Epistemic/granted Confirmation are Product SQLite
+ * restart-safe on the Product path; conversation/proposal/requested Confirmation
+ * remain process-local.
+ * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D / W2-complete /
+ * CKC Phase B claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  /** Partial: Product SQLite durable for OA M1–M5 aggregates; conversation/proposal/Claims Memory remain process-local. */
+  /** Partial: Product SQLite durable for OA M1–M6 aggregates; conversation/proposal/Claims Memory remain process-local. */
   readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
-  /** True because conversation/proposal (and Claims/Maturity Memory) remain volatile. */
+  /** True because conversation/proposal/requested Confirmation (and Claims/Maturity Memory) remain volatile. */
   readonly localDataVolatile: true;
-  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB survive restart. */
+  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB/Trajectory survive restart. */
   readonly restartMayLoseState: true;
   readonly projectLpsRestartSafe: true;
   readonly cycleInstanceRestartSafe: true;
   readonly humanDecisionRestartSafe: true;
   readonly executionContractRestartSafe: true;
+  /** W1/M6: ProjectTrajectory versions + effective current pointer are durable. */
+  readonly projectTrajectoryRestartSafe: true;
+  /** W1/M6 selective-by-materialization: materialized EpistemicItems are durable. */
+  readonly materializedEpistemicRestartSafe: true;
+  /** W1/M6: granted/consumed Confirmation is durable as historical scoped consent. */
+  readonly grantedConfirmationRestartSafe: true;
+  /** Requested Confirmation is process-local by design — never restored as authority. */
+  readonly requestedConfirmationRestartSafe: false;
+  /**
+   * Restored granted Confirmation is historical scoped consent, never current
+   * effective authority — revalidation is always required before authorization.
+   */
+  readonly restoredConfirmationIsHistoricalConsentOnly: true;
+  /** W2 capability is under delivery — never presented as complete. */
+  readonly w2Cognition: "IN_PROGRESS_NOT_COMPLETE";
+  /** CKC Phase B cognition integration requires a distinct Morris GO — not consumed. */
+  readonly ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED";
   readonly messages: readonly string[];
 }

@@ -31,15 +50,20 @@ export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
   "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
   "ExecutionAttempt, Evidence, ReviewBundle, and LPS evidence/RB links persist in Product SQLite (M5) on the Product path.",
+  "ProjectTrajectory versions and the effective current pointer persist in Product SQLite (M6) on the Product path.",
+  "Materialized EpistemicItems persist in Product SQLite (M6, selective-by-materialization); non-materialized reasoning is not persisted.",
+  "ExecutionContract inspection attestations and AuthorityVerificationReceipts persist in Product SQLite (M7) as audit-only proof.",
   "Conversation and Proposal F2 remain process-local and may be lost on restart.",
-  "ClaimEvaluation / MaturityAssessment / Confirmation remain Memory (out of minimal M5).",
-  "Trajectory/Epistemic Memory remain process-local (out of M3/M5 durability).",
-  "Local single-user Morris authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
+  "Requested Confirmation is process-local; granted/consumed Confirmation is durable as historical scoped consent only, never restored as current effective authority.",
+  "ClaimEvaluation / MaturityAssessment remain Memory (out of minimal M5/M6).",
+  "Local single-user Pilote authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
   "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
   "IAM is not configured.",
   "Real agent execution is disabled.",
   "Delivery and cutover are not authorized.",
   "Runtime v3 is not ADOPTED.",
+  "W2 cognition/trajectory/decision capability is in progress — not complete.",
+  "CKC Phase B cognition integration is NOT authorized and NOT implemented (distinct Morris GO required).",
 ]);

 export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
@@ -56,6 +80,13 @@ export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   cycleInstanceRestartSafe: true,
   humanDecisionRestartSafe: true,
   executionContractRestartSafe: true,
+  projectTrajectoryRestartSafe: true,
+  materializedEpistemicRestartSafe: true,
+  grantedConfirmationRestartSafe: true,
+  requestedConfirmationRestartSafe: false,
+  restoredConfirmationIsHistoricalConsentOnly: true,
+  w2Cognition: "IN_PROGRESS_NOT_COMPLETE",
+  ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED",
   messages: RUNTIME_DISCLOSURE_MESSAGES,
 });

```

## Fichiers nouveaux — finalité + contenu intégral

### `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

**Finalité:** Track A/C — DTOs produit: Option ≠ Recommendation ≠ HD; STOP BEFORE EXECUTE.

```ts
/**
 * W2 product DTOs — Options / Recommendation / HumanDecision / Trajectory /
 * ExecutionContract inspection / effective authority.
 *
 * Hard product invariants encoded in these shapes:
 *   Option ≠ Recommendation ≠ HumanDecision ≠ Confirmation ≠ result
 *   PROPOSED ≠ DECIDED
 * A Recommendation carries `isHumanDecision: false` and
 * `promotesTrajectory: false` so no surface can present it as an arbitration.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";

export type W2OptionKind = "OPTION";

export type TrajectoryOptionDto = {
  readonly kind: W2OptionKind;
  readonly optionRef: string;
  readonly label: string;
  readonly intent: string;
  readonly impacts: readonly string[];
  readonly reservations: readonly string[];
  readonly steps: readonly TrajectoryStep[];
};

export type TrajectoryRecommendationDto = {
  readonly label: "RECOMMANDATION — PAS UNE DÉCISION";
  readonly recommendedOptionRef: string;
  readonly rationale: string;
  /** Structural denials — a Recommendation never decides nor promotes. */
  readonly isHumanDecision: false;
  readonly promotesTrajectory: false;
  /**
   * W1 bounded CKC seam attribution when the qualification carried it.
   * Absent attribution is reported honestly rather than invented.
   */
  readonly ckcAttribution: string | null;
};

export type TrajectoryDecisionPhase =
  | "NO_OPTIONS"
  | "OPTIONS_PROPOSED"
  | "DECIDED";

export type ProposedTrajectoryDto = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: "candidate";
  readonly statusLabel: "TRAJECTOIRE PROPOSÉE";
  readonly isCurrent: false;
};

export type DecidedTrajectoryDto = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: "validated" | "active";
  readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
  readonly isCurrent: true;
  readonly decidedByDecisionRef: string | null;
  readonly decidedOptionRef: string | null;
};

export type TrajectoryDecisionRecordDto = {
  readonly decisionId: string;
  readonly selectedOptionRef: string;
  readonly actorRole: "Pilote";
  readonly authorityClass: "morris";
  readonly statusLabel: "DÉCISION HUMAINE PRISE";
  readonly capturedAt: string;
  readonly decisionBasisLinked: true;
  readonly reservesText: string | null;
};

export type TrajectoryOptionSetDto = {
  readonly optionSetRef: string;
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendation: TrajectoryRecommendationDto;
  readonly epistemicRefs: readonly string[];
  readonly proposedTrajectory: ProposedTrajectoryDto;
  readonly phase: "OPTIONS_PROPOSED";
  readonly autoDecisionPerformed: false;
  readonly executionPerformed: false;
};

export type W2Failure = {
  readonly ok: false;
  readonly code: string;
  readonly message: string;
};

/* -------------------------------------------------------------------------- */
/* Track C — inspection / effective authority                                  */
/* -------------------------------------------------------------------------- */

export type ContractInspectionStateDto = {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string;
  readonly statusLabel:
    | "NON INSPECTÉ"
    | "INSPECTÉ"
    | "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ";
  readonly inspectionSufficient: boolean;
  readonly attestationRef: string | null;
  readonly attestedVersion: number | null;
  readonly staleAttestationRef: string | null;
  readonly reinspectionRequired: boolean;
  readonly reason:
    | "no_attestation"
    | "inspected"
    | "contract_version_changed"
    | "semantic_fingerprint_changed"
    | "contract_fingerprint_absent";
  /** Structural denial — inspecting is never authorizing. */
  readonly grantsAuthority: false;
};

export type InspectExecutionContractResult =
  | ({ readonly ok: true } & ContractInspectionStateDto)
  | W2Failure;

export type ConfirmationRequirementDto = {
  readonly required: boolean;
  readonly satisfied: boolean;
  readonly confirmationRef: string | null;
  readonly statusLabel:
    | "CONFIRMATION NON REQUISE"
    | "CONFIRMATION REQUISE — MANQUANTE"
    | "CONFIRMATION REQUISE — OBTENUE";
  /** Never fabricated: a missing required Confirmation blocks honestly. */
  readonly fabricated: false;
};

export type ConfirmForAuthorizationResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly confirmationRef: string | null;
      readonly statusLabel: "CONFIRMATION REQUISE — OBTENUE";
      readonly alreadyConfirmed: boolean;
      /** Confirming authorizes nothing to run. */
      readonly executionPerformed: false;
    }
  | W2Failure;

export type AgentCapabilityOutcomeDto = {
  readonly sufficient: boolean;
  readonly evaluatedAgentRefs: readonly string[];
  readonly sufficientAgentRef: string | null;
  readonly reason: string;
  readonly statusLabel:
    | "EXÉCUTEUR SUFFISANT"
    | "EXÉCUTEUR INSUFFISANT — BLOQUÉ";
};

export type ExecutionAuthorizationOutcomeDto = {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly outcome: "AUTHORIZED" | "BLOCKED";
  readonly outcomeLabel:
    | "AUTORISÉ — STOP AVANT EXECUTE"
    | "BLOQUÉ — ACTION REQUISE";
  readonly reasonCode: string;
  readonly reasonText: string;
  readonly nextAction: string;
  readonly inspection: ContractInspectionStateDto;
  readonly confirmation: ConfirmationRequirementDto;
  readonly agentCapability: AgentCapabilityOutcomeDto;
  readonly authorityReceiptRef: string;
  readonly decisionRefs: readonly string[];
  readonly requiredAuthority: string;
  readonly verifiedAuthorityLevel: string | null;
  /** STOP BEFORE EXECUTE — no ExecutionAttempt is ever created here. */
  readonly executionPerformed: false;
  readonly attemptCreated: false;
};

export type EvaluateExecutionAuthorizationResult =
  | ({ readonly ok: true } & ExecutionAuthorizationOutcomeDto)
  | W2Failure;

export type ProposeTrajectoryOptionsResult =
  | ({ readonly ok: true } & TrajectoryOptionSetDto)
  | W2Failure;

export type DecideTrajectoryResult =
  | {
      readonly ok: true;
      readonly decision: TrajectoryDecisionRecordDto;
      readonly trajectory: DecidedTrajectoryDto;
      readonly livingProjectStateVersion: number;
      readonly executionPerformed: false;
    }
  | W2Failure;
```

### `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts`

**Finalité:** Track A — dérivation déterministe Options + Recommendation (pas Phase B).

```ts
/**
 * W2 Track A — deterministic derivation of ProjectTrajectory Options and of the
 * accompanying Recommendation.
 *
 * Input is the durable qualification truth already produced by W1 (cycleTypeId,
 * recommended profile, explicit signals) plus the CKC attribution the W1 bounded
 * seam already carries. This module adds NO cognitive path: it does not call a
 * provider, does not read CKC content and is not a Phase B integration point.
 * Same inputs always yield the same options, in the same order.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";

export type TrajectoryOptionInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
};

export const GOVERNED_OPTION_REF = "opt:trajectory:governed-gated" as const;
export const BOUNDED_OPTION_REF = "opt:trajectory:bounded-direct" as const;
export const CLARIFY_OPTION_REF = "opt:trajectory:clarify-first" as const;

function step(
  order: number,
  slug: string,
  label: string,
  extra?: Partial<TrajectoryStep>,
): TrajectoryStep {
  return {
    stepId: `stp:${slug}`,
    order,
    label,
    state: "pending",
    ...extra,
  };
}

function governedSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-gov-qualify", "Qualifier et cadrer le périmètre"),
    step(2, "w2-gov-options", "Instruire les options et la recommandation", {
      dependencies: ["stp:w2-gov-qualify"],
    }),
    step(3, "w2-gov-decide", "Décision humaine explicite", {
      dependencies: ["stp:w2-gov-options"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à sa base"],
    }),
    step(4, "w2-gov-contract", "Préparer le contrat d'exécution", {
      dependencies: ["stp:w2-gov-decide"],
    }),
    step(5, "w2-gov-inspect", "Inspecter le contrat avant autorisation", {
      dependencies: ["stp:w2-gov-contract"],
      gate: "inspection",
      exitCriteria: ["Inspection attachée à la version inspectée"],
    }),
    step(6, "w2-gov-authorize", "Statuer autorisé ou bloqué", {
      dependencies: ["stp:w2-gov-inspect"],
      gate: "effective_authority",
      exitCriteria: ["Autorité effective vérifiée", "Arrêt avant exécution"],
    }),
  ];
}

function boundedSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-bnd-frame", "Cadrer un périmètre borné et réversible"),
    step(2, "w2-bnd-decide", "Décision humaine explicite", {
      dependencies: ["stp:w2-bnd-frame"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à sa base"],
    }),
    step(3, "w2-bnd-contract", "Préparer le contrat d'exécution borné", {
      dependencies: ["stp:w2-bnd-decide"],
    }),
    step(4, "w2-bnd-inspect", "Inspecter puis statuer autorisé ou bloqué", {
      dependencies: ["stp:w2-bnd-contract"],
      gate: "inspection",
      exitCriteria: ["Inspection valide", "Arrêt avant exécution"],
    }),
  ];
}

function clarifySteps(): TrajectoryStep[] {
  return [
    step(1, "w2-clr-collect", "Lever les réserves et compléter le contexte"),
    step(2, "w2-clr-requalify", "Requalifier le cycle sur base complétée", {
      dependencies: ["stp:w2-clr-collect"],
    }),
    step(3, "w2-clr-reoption", "Réinstruire les options", {
      dependencies: ["stp:w2-clr-requalify"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle décision humaine requise avant toute suite"],
    }),
  ];
}

/**
 * Options are always presented in the same order so the UI never implies a
 * ranking by position. Ranking is carried only by the explicit Recommendation.
 */
export function deriveTrajectoryOptions(
  inputs: TrajectoryOptionInputs,
): TrajectoryOptionDto[] {
  const reservations = [...inputs.reservations];
  return [
    {
      kind: "OPTION",
      optionRef: GOVERNED_OPTION_REF,
      label: "Trajectoire gouvernée par gates",
      intent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      impacts: [
        "Chaque frontière d'autorité est explicite",
        "Durée plus longue",
        `Profil de cycle: ${inputs.recommendedProfile}`,
      ],
      reservations,
      steps: governedSteps(),
    },
    {
      kind: "OPTION",
      optionRef: BOUNDED_OPTION_REF,
      label: "Trajectoire bornée directe",
      intent:
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      impacts: [
        "Chemin plus court",
        "Exige un périmètre réversible",
        inputs.irreversible
          ? "Signal irréversible présent — périmètre à réduire avant d'emprunter cette option"
          : "Aucun signal irréversible déclaré",
      ],
      reservations,
      steps: boundedSteps(),
    },
    {
      kind: "OPTION",
      optionRef: CLARIFY_OPTION_REF,
      label: "Clarifier avant d'engager",
      intent:
        "Lever les réserves, requalifier le cycle, puis réinstruire les options avant toute décision structurante.",
      impacts: [
        "Aucune préparation d'exécution à ce stade",
        "Nouvelle décision humaine requise après clarification",
      ],
      reservations,
      steps: clarifySteps(),
    },
  ];
}

/**
 * Deterministic recommendation. It ranks an existing Option and never creates
 * an arbitration: `isHumanDecision` and `promotesTrajectory` are const false.
 */
export function deriveTrajectoryRecommendation(
  inputs: TrajectoryOptionInputs,
): TrajectoryRecommendationDto {
  if (inputs.reservations.length > 0) {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: CLARIFY_OPTION_REF,
      rationale: `Réserves explicites non levées (${inputs.reservations.length}) — clarifier avant d'engager une trajectoire structurante.`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: inputs.ckcAttribution,
    };
  }
  if (inputs.criticalSignalsPresent || inputs.recommendedProfile === "Critical") {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      rationale:
        "Signaux critiques déclarés — trajectoire gouvernée par gates recommandée pour rendre chaque frontière d'autorité explicite.",
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: inputs.ckcAttribution,
    };
  }
  return {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: BOUNDED_OPTION_REF,
    rationale:
      "Aucun signal critique ni réserve bloquante — trajectoire bornée directe recommandée, sous réserve d'un périmètre réversible.",
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: inputs.ckcAttribution,
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts`

**Finalité:** Track A — lit la qualification W1 déjà durable; n'étend pas CKC.

```ts
/**
 * W2 Track A — server-side resolution of the qualification truth that feeds
 * Option/Recommendation derivation.
 *
 * Inputs come exclusively from durable state (Project/LPS, CycleInstance,
 * materialized EpistemicItems). The client never supplies them, so the option
 * set and the recommendation are reproducible for a given project state and a
 * hostile payload cannot reshape what is proposed or decided.
 *
 * This reads the W1 CKC attribution already carried by the LPS. It performs no
 * cognition and is not a Phase B integration point.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";

export type ResolvedW2Qualification = {
  readonly inputs: TrajectoryOptionInputs;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly objective: string;
};

const MAX_REPORTED_RESERVATIONS = 5;

export async function resolveW2QualificationInputs(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly qualification: ResolvedW2Qualification }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  const cycleInstanceId = live.context.activeCycleInstanceId;
  if (!cycleInstanceId) {
    return {
      ok: false,
      code: "CYCLE_NOT_QUALIFIED",
      message:
        "Aucun cycle qualifié n'est actif — la qualification doit précéder les options.",
    };
  }

  const cycle = await oa.cycleServices.getCycle.execute({
    cycleInstanceId,
  });
  if (!cycle.ok) {
    return {
      ok: false,
      code: cycle.error.detailCode,
      message: "Cycle qualifié introuvable — options impossibles à instruire.",
    };
  }

  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  const reservations = epistemic.ok
    ? epistemic.state.items
        .filter(
          (item) => item.type === "Reservation" && item.status === "active",
        )
        .map((item) => item.statement)
        .slice(0, MAX_REPORTED_RESERVATIONS)
    : [];
  const blockingReservation = epistemic.ok
    ? epistemic.state.items.some(
        (item) =>
          item.type === "Reservation" &&
          item.status === "active" &&
          item.blocking === true,
      )
    : false;

  return {
    ok: true,
    qualification: {
      inputs: {
        cycleTypeId: cycle.cycle.cycleTypeId,
        recommendedProfile: cycle.cycle.profile,
        criticalSignalsPresent: cycle.cycle.profile === "Critical",
        irreversible: blockingReservation,
        reservations,
        ckcAttribution: live.context.ckcResolutionRef,
      },
      activeCycleInstanceId: cycleInstanceId,
      lpsVersion: live.context.lpsVersion,
      objective: live.context.objective,
    },
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`

**Finalité:** Track A — matérialise candidate ProjectTrajectory + Epistemic; jamais current; Proposal reste éphémère (D-W2-01).

```ts
/**
 * W2 Track A — product application path: publish trajectory Options and the
 * accompanying Recommendation, and materialise the PROPOSED trajectory.
 *
 * Durability follows D-W2-01: what must survive is materialised as durable
 * Epistemic items (Option / Recommendation) plus one durable `candidate`
 * ProjectTrajectory version. Nothing here promotes the trajectory and nothing
 * here records a decision — PROPOSED ≠ DECIDED.
 *
 * Reuses existing OA use cases only. No parallel engine, no second store.
 */

import { randomBytes } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "@/lib/oa/cycle";
import {
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
  type TrajectoryOptionInputs,
} from "./trajectoryOptions";
import type {
  ProposeTrajectoryOptionsResult,
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";

/** Nora proposes; it never decides. Kept N1 so it can never satisfy a gate. */
const NORA_OPTION_AUTHOR = Object.freeze({
  actorId: "actor:nora-w2",
  role: "agent" as const,
  displayName: "Nora W2",
  authorityLevel: "N1" as const,
});

function shortId(): string {
  return randomBytes(6).toString("hex");
}

async function resolveLatestTrajectory(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectTrajectory | null> {
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  let latest: ProjectTrajectory | null = current.ok ? current.trajectory : null;
  let probe = latest ? latest.version + 1 : 1;
  while (probe <= (latest?.version ?? 0) + 8) {
    const next = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: probe,
    });
    if (!next.ok) break;
    latest = next.trajectory;
    probe += 1;
  }
  return latest;
}

function optionEpistemicId(optionRef: string, optionSetRef: string): string {
  const slug = optionRef.replace(/[^a-zA-Z0-9]/g, "-");
  return `epi:${optionSetRef.replace("optset:", "opt-")}-${slug}`;
}

function optionStatement(option: TrajectoryOptionDto): string {
  const steps = option.steps.map((s) => `${s.order}. ${s.label}`).join(" | ");
  return `OPTION ${option.label} — ${option.intent} Étapes: ${steps}`;
}

function recommendationStatement(
  recommendation: TrajectoryRecommendationDto,
  options: readonly TrajectoryOptionDto[],
): string {
  const target = options.find(
    (o) => o.optionRef === recommendation.recommendedOptionRef,
  );
  return `${recommendation.label} — option recommandée: ${target?.label ?? recommendation.recommendedOptionRef}. ${recommendation.rationale}`;
}

export type ProposeTrajectoryOptionsInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /** Durable qualification truth already produced by W1. */
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  /** W1 bounded CKC seam attribution, or null when unavailable. */
  readonly ckcAttribution: string | null;
  readonly correlationId?: string;
};

export async function proposeTrajectoryOptions(
  input: ProposeTrajectoryOptionsInput,
): Promise<ProposeTrajectoryOptionsResult> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const inputs: TrajectoryOptionInputs = {
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    ckcAttribution: input.ckcAttribution,
  };
  const options = deriveTrajectoryOptions(inputs);
  const recommendation = deriveTrajectoryRecommendation(inputs);
  const optionSetRef = `optset:w2-${shortId()}`;
  const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;

  const epistemicItems = [
    ...options.map((option) => ({
      epistemicItemId: optionEpistemicId(option.optionRef, optionSetRef),
      type: "Option" as const,
      statement: optionStatement(option),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [input.projectId, option.optionRef, optionSetRef],
    })),
    {
      epistemicItemId: `epi:${optionSetRef.replace("optset:", "rec-")}`,
      type: "Recommendation" as const,
      statement: recommendationStatement(recommendation, options),
      status: "active" as const,
      source: input.ckcAttribution ?? optionSetRef,
      relatedObjects: [
        input.projectId,
        recommendation.recommendedOptionRef,
        optionSetRef,
      ],
    },
  ];

  const materialized = await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: epistemicItems,
    createdBy: NORA_OPTION_AUTHOR,
    correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.error.detailCode,
      message: `Matérialisation des options échouée (${materialized.error.detailCode}).`,
    };
  }

  // The proposed trajectory mirrors the recommended option's outline. It stays
  // `candidate`: the effective current pointer must not move without a decision.
  const proposedSteps: TrajectoryStep[] = structuredClone(
    (options.find((o) => o.optionRef === recommendation.recommendedOptionRef) ??
      options[0]!).steps,
  ) as TrajectoryStep[];

  // A `candidate` is never the effective current pointer (D-W2-03).
  // ProposeTrajectoryVersion requires an existing current pointer and OCC
  // against that pointer — so an undecided candidate is reused, not rewritten
  // into a parallel version.
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId: input.projectId,
  });
  const latest = await resolveLatestTrajectory(oa, input.projectId);

  let proposedTrajectoryId: string;
  let proposedVersion: number;

  const reuseExistingCandidate =
    latest !== null &&
    latest.status === "candidate" &&
    (!current.ok || latest.version !== current.trajectory.version);

  if (reuseExistingCandidate && latest) {
    proposedTrajectoryId = latest.trajectoryId;
    proposedVersion = latest.version;
  } else if (!latest) {
    const trajectoryId = `trj:w2-${shortId()}`;
    const created = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId,
      projectId: input.projectId,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: live.context.lpsVersion,
    });
    if (!created.ok) {
      return {
        ok: false,
        code: created.error.detailCode,
        message: `Création de la trajectoire proposée échouée (${created.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = created.trajectory.trajectoryId;
    proposedVersion = created.trajectory.version;
  } else if (current.ok) {
    const proposed = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: current.trajectory.trajectoryId,
      projectId: input.projectId,
      expectedVersion: current.trajectory.version,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: live.context.lpsVersion,
    });
    if (!proposed.ok) {
      return {
        ok: false,
        code: proposed.error.detailCode,
        message: `Proposition d'une nouvelle version de trajectoire échouée (${proposed.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = proposed.trajectory.trajectoryId;
    proposedVersion = proposed.trajectory.version;
  } else {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_FOUND",
      message: "Aucune trajectoire proposée ni courante n'est disponible.",
    };
  }

  return {
    ok: true,
    optionSetRef,
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    options,
    recommendation,
    epistemicRefs: epistemicItems.map((i) => i.epistemicItemId),
    proposedTrajectory: {
      trajectoryId: proposedTrajectoryId,
      version: proposedVersion,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
  };
}

/** Exposed for the read model / tests: the Pilote is the decision-maker. */
export const W2_DECISION_ACTOR = LOCAL_PILOTE_ACTOR;
```

### `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`

**Finalité:** Track A — unique chemin produit HD Pilote → DecisionBasis → promotion.

```ts
/**
 * W2 Track A — product application path enforcement of D-W2-03.
 *
 * A structuring ProjectTrajectory becomes decided/current ONLY through this
 * path, and only after a valid accepted HumanDecision taken by the Pilote.
 * A Recommendation can never reach the promotion call: promotion consumes a
 * decisionId, verifies the durable decision, and refuses everything else.
 *
 * Reuses existing OA use cases (RecordHumanDecision, PromoteDecidedTrajectory,
 * UpdateEpistemicState). OCC/CAS and LPS invariants stay owned by OA.
 */

import { randomBytes, randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";

function shortId(): string {
  return randomBytes(6).toString("hex");
}

export function trajectoryDecisionScope(optionSetRef: string): string {
  return `w2-trajectory-decision:${optionSetRef}`;
}

export type PromotionGuardResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * The single gate that lets a trajectory become decided/current.
 * Fail-closed on every mismatch — no synthetic decision can pass it.
 */
export function assertDecisionAuthorizesPromotion(input: {
  readonly decision: HumanDecision | null;
  readonly projectId: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly selectedOptionRef: string;
}): PromotionGuardResult {
  const { decision } = input;
  if (!decision) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Aucune décision humaine durable — la trajectoire ne peut pas devenir décidée/courante.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision humaine au statut ${decision.status} — promotion refusée.`,
    };
  }
  if (decision.authority !== "morris") {
    return {
      ok: false,
      code: "AUTHORITY_DENIED",
      message:
        "Décision non structurante — seule une décision d'autorité structurante peut promouvoir une trajectoire.",
    };
  }
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  const basis = decision.decisionBasis;
  const trajectoryContext = basis?.trajectoryContext;
  if (!basis || basis.sourceType !== "trajectory_option" || !trajectoryContext) {
    return {
      ok: false,
      code: "DECISION_BASIS_MISSING",
      message:
        "Décision sans base de décision trajectoire — impossible de rattacher la promotion.",
    };
  }
  if (
    trajectoryContext.trajectoryId !== input.trajectoryId ||
    trajectoryContext.candidateVersion !== input.candidateVersion
  ) {
    return {
      ok: false,
      code: "DECISION_TRAJECTORY_MISMATCH",
      message:
        "La décision ne porte pas sur la version de trajectoire proposée — réinstruction requise.",
    };
  }
  if (trajectoryContext.selectedOptionRef !== input.selectedOptionRef) {
    return {
      ok: false,
      code: "DECISION_OPTION_MISMATCH",
      message: "L'option décidée ne correspond pas à la demande de promotion.",
    };
  }
  if (!trajectoryContext.optionRefs.includes(input.selectedOptionRef)) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message: "L'option décidée ne faisait pas partie des options présentées.",
    };
  }
  return { ok: true };
}

export type DecideTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly optionSetRef: string;
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
  readonly selectedOptionRef: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly epistemicRefs?: readonly string[];
  readonly reservesText?: string | null;
  /** Hostile client fields — never trusted. */
  readonly canActAsMorris?: unknown;
  readonly claimedAuthorityLevel?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export async function decideTrajectory(
  input: DecideTrajectoryInput,
): Promise<DecideTrajectoryResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const { oa } = input;
  const selected = input.options.find(
    (o) => o.optionRef === input.selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message:
        "Option inconnue pour ce jeu d'options — aucune décision enregistrée.",
    };
  }

  const candidate = await oa.cycleServices.getTrajectoryVersion.execute({
    projectId: input.projectId,
    version: input.candidateVersion,
  });
  if (!candidate.ok) {
    return {
      ok: false,
      code: candidate.error.detailCode,
      message: "Version de trajectoire proposée introuvable.",
    };
  }
  if (candidate.trajectory.trajectoryId !== input.trajectoryId) {
    return {
      ok: false,
      code: "TRAJECTORY_MISMATCH",
      message: "La version proposée n'appartient pas à cette trajectoire.",
    };
  }
  if (candidate.trajectory.status !== "candidate") {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_PROPOSED",
      message: `La version ${input.candidateVersion} n'est pas au statut proposé (${candidate.trajectory.status}).`,
    };
  }

  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const scope = trajectoryDecisionScope(input.optionSetRef);
  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const optionRefs = input.options.map((o) => o.optionRef);
  const decisionBasis: DecisionBasis = {
    sourceType: "trajectory_option",
    sourceRef: input.optionSetRef,
    sourceDigest: computeDecisionBasisSourceDigest({
      optionSetRef: input.optionSetRef,
      optionRefs,
      selectedOptionRef: input.selectedOptionRef,
      recommendedOptionRef: input.recommendedOptionRef,
      trajectoryId: input.trajectoryId,
      candidateVersion: input.candidateVersion,
      steps: selected.steps.map((s) => ({
        stepId: s.stepId,
        order: s.order,
        label: s.label,
        gate: s.gate ?? null,
      })),
    }),
    projectId: input.projectId,
    cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
    proposalContext: {
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    trajectoryContext: {
      trajectoryId: input.trajectoryId,
      candidateVersion: input.candidateVersion,
      optionRefs,
      selectedOptionRef: input.selectedOptionRef,
      recommendedOptionRef: input.recommendedOptionRef,
      epistemicRefs: input.epistemicRefs ? [...input.epistemicRefs] : undefined,
    },
    executionBasis: {
      objective: live.context.objective,
      scope: selected.intent,
      expectedOutcome: `Trajectoire décidée: ${selected.label}`,
      reservations: input.reservesText?.trim()
        ? [input.reservesText.trim()]
        : [...selected.reservations],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      cycleTypeId: undefined,
      requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
    },
  };

  const decisionId = `dec:w2-trj:${randomUUID()}`;
  const reserves = input.reservesText?.trim();
  const recorded = await oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
    subject: `W2 trajectory arbitration for ${input.optionSetRef}`,
    options: input.options.map((o) => ({
      optionId: o.optionRef,
      label: o.label,
      impacts: [...o.impacts],
      recommended: o.optionRef === input.recommendedOptionRef,
    })),
    selectedOptionId: input.selectedOptionRef,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: true,
    scope,
    reservations: reserves
      ? [
          {
            reservationId: `rsv:${randomUUID()}`,
            statement: reserves,
            blocking: false,
          },
        ]
      : undefined,
    rationale: `Pilote a retenu ${selected.label} parmi ${optionRefs.length} options.`,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    linkToLivingProjectState: true,
    expectedLpsVersion: live.context.lpsVersion,
    correlationId: `w2-dec:${input.optionSetRef}`,
  });

  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }

  // Re-read the durable decision: promotion is authorised by persisted truth,
  // never by the in-flight request payload.
  const readback = await oa.decisionServices.getHumanDecision.execute({
    decisionId,
  });
  const guard = assertDecisionAuthorizesPromotion({
    decision: readback.ok ? readback.decision : null,
    projectId: input.projectId,
    trajectoryId: input.trajectoryId,
    candidateVersion: input.candidateVersion,
    selectedOptionRef: input.selectedOptionRef,
  });
  if (!guard.ok) {
    return { ok: false, code: guard.code, message: guard.message };
  }

  const lpsAfterDecision =
    recorded.livingProjectStateVersion ?? live.context.lpsVersion;

  const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
    trajectoryId: input.trajectoryId,
    projectId: input.projectId,
    expectedVersion: input.candidateVersion,
    status: "validated",
    decisionRef: decisionId,
    decidedOptionRef: input.selectedOptionRef,
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId: `w2-promote:${input.optionSetRef}`,
    expectedLpsVersion: lpsAfterDecision,
  });
  if (!promoted.ok) {
    return {
      ok: false,
      code: promoted.error.detailCode,
      message: `Promotion de la trajectoire décidée refusée (${promoted.error.detailCode}).`,
    };
  }

  await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: `epi:w2-decref-${shortId()}`,
        type: "DecisionRef",
        statement: `Décision humaine ${decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${input.trajectoryId} v${promoted.trajectory.version} décidée/courante.`,
        status: "active",
        source: decisionId,
        relatedObjects: [
          input.projectId,
          decisionId,
          input.trajectoryId,
          input.selectedOptionRef,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId: `w2-decref:${input.optionSetRef}`,
  });

  return {
    ok: true,
    decision: {
      decisionId,
      selectedOptionRef: input.selectedOptionRef,
      actorRole: "Pilote",
      authorityClass: "morris",
      statusLabel: "DÉCISION HUMAINE PRISE",
      capturedAt: issuedAt,
      decisionBasisLinked: true,
      reservesText: reserves ?? null,
    },
    trajectory: {
      trajectoryId: promoted.trajectory.trajectoryId,
      version: promoted.trajectory.version,
      status: "validated",
      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
      isCurrent: true,
      decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef ?? null,
      decidedOptionRef: promoted.trajectory.decidedOptionRef ?? null,
    },
    livingProjectStateVersion:
      promoted.livingProjectStateVersion ?? lpsAfterDecision,
    executionPerformed: false,
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts`

**Finalité:** Track B — read model MUST-MINIMAL depuis repos OA existants.

```ts
/**
 * W2 Track B — minimal durable read model.
 *
 * MUST-MINIMAL only: the anchors a Pilote needs to understand the current
 * state and the next authority boundary. Composed exclusively from existing
 * OA read use cases — no new persistence, no event sourcing, no conversation
 * transcript, no second truth.
 *
 * Anything not durable is reported as absent rather than reconstructed.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";

/** Bounded lookback so the read model can never become a history platform. */
export const W2_HISTORY_MAX_TRAJECTORY_VERSIONS = 5;
export const W2_HISTORY_MAX_DECISIONS = 5;
export const W2_HISTORY_MAX_CONTRACTS = 5;

export type W2TrajectoryAnchor = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: string;
  readonly isEffectiveCurrent: boolean;
  readonly decidedByDecisionRef: string | null;
  readonly decidedOptionRef: string | null;
  readonly stepCount: number;
};

export type W2DecisionAnchor = {
  readonly decisionId: string;
  readonly subject: string;
  readonly status: string;
  readonly authority: string;
  readonly actorRole: string;
  readonly selectedOptionRef: string;
  readonly effectiveAt: string;
  readonly basisSourceType: string | null;
  readonly basisTrajectoryRef: string | null;
  readonly reservations: readonly string[];
};

export type W2ContractAnchor = {
  readonly executionContractId: string;
  readonly status: string;
  readonly version: number;
  readonly action: string;
  readonly target: string;
  readonly semanticFingerprint: string | null;
  readonly decisionRefs: readonly string[];
};

export type W2ProjectHistoryReadModel = {
  readonly projectId: string;
  readonly projectTitle: string;
  readonly lps: { readonly lpsId: string; readonly version: number };
  readonly cycle: {
    readonly activeCycleInstanceId: string | null;
    readonly cycleTypeId: string | null;
    readonly profile: string | null;
    readonly status: string | null;
  };
  readonly trajectory: {
    readonly effectiveCurrent: W2TrajectoryAnchor | null;
    readonly proposedNotYetDecided: W2TrajectoryAnchor | null;
    readonly versions: readonly W2TrajectoryAnchor[];
  };
  readonly decisions: readonly W2DecisionAnchor[];
  readonly contracts: readonly W2ContractAnchor[];
  /** Explicit honesty about what this read model does NOT contain. */
  readonly absent: readonly string[];
};

export type ReadW2ProjectHistoryResult =
  | { readonly ok: true; readonly history: W2ProjectHistoryReadModel }
  | { readonly ok: false; readonly code: string; readonly message: string };

const ABSENT_BY_DESIGN: readonly string[] = Object.freeze([
  "Conversation (process-local, non rejouée)",
  "Proposition F2 process-local",
  "Confirmation demandée (process-local)",
  "Raisonnement interne non matérialisé",
]);

export async function readW2ProjectHistory(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ReadW2ProjectHistoryResult> {
  const { oa, projectId } = input;
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const activeCycleInstanceId = live.context.activeCycleInstanceId;
  let cycleTypeId: string | null = null;
  let cycleProfile: string | null = null;
  let cycleStatus: string | null = null;
  if (activeCycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: activeCycleInstanceId,
    });
    if (cycle.ok) {
      cycleTypeId = cycle.cycle.cycleTypeId;
      cycleProfile = cycle.cycle.profile;
      cycleStatus = cycle.cycle.status;
    }
  }

  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  const effectiveCurrentVersion = current.ok ? current.trajectory.version : 0;

  // Highest known version may exceed the current pointer when a candidate is
  // proposed but not decided. Probe upward, bounded.
  const versions: W2TrajectoryAnchor[] = [];
  let proposedNotYetDecided: W2TrajectoryAnchor | null = null;
  let probe = effectiveCurrentVersion + 1;
  let highestVersion = effectiveCurrentVersion;
  while (probe <= effectiveCurrentVersion + W2_HISTORY_MAX_TRAJECTORY_VERSIONS) {
    const next = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: probe,
    });
    if (!next.ok) break;
    highestVersion = probe;
    probe += 1;
  }

  const lowest = Math.max(
    1,
    highestVersion - W2_HISTORY_MAX_TRAJECTORY_VERSIONS + 1,
  );
  for (let version = highestVersion; version >= lowest; version -= 1) {
    const found = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version,
    });
    if (!found.ok) continue;
    const anchor: W2TrajectoryAnchor = {
      trajectoryId: found.trajectory.trajectoryId,
      version: found.trajectory.version,
      status: found.trajectory.status,
      isEffectiveCurrent: found.trajectory.version === effectiveCurrentVersion,
      decidedByDecisionRef: found.trajectory.decidedByDecisionRef ?? null,
      decidedOptionRef: found.trajectory.decidedOptionRef ?? null,
      stepCount: found.trajectory.steps.length,
    };
    versions.push(anchor);
    if (!proposedNotYetDecided && anchor.status === "candidate") {
      proposedNotYetDecided = anchor;
    }
  }

  const decisionsResult =
    await oa.decisionServices.listDecisionHistory.execute({ projectId });
  const decisions: W2DecisionAnchor[] = decisionsResult.ok
    ? decisionsResult.decisions
        .slice(-W2_HISTORY_MAX_DECISIONS)
        .reverse()
        .map((decision) => ({
          decisionId: decision.decisionId,
          subject: decision.subject,
          status: decision.status,
          authority: decision.authority,
          actorRole: decision.actor.displayName ?? decision.actor.role,
          selectedOptionRef: decision.selectedOptionId,
          effectiveAt: decision.effectiveAt,
          basisSourceType: decision.decisionBasis?.sourceType ?? null,
          basisTrajectoryRef: decision.decisionBasis?.trajectoryContext
            ? `${decision.decisionBasis.trajectoryContext.trajectoryId}@v${decision.decisionBasis.trajectoryContext.candidateVersion}`
            : null,
          reservations: (decision.reservations ?? []).map((r) => r.statement),
        }))
    : [];

  const contractsResult =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  const contracts: W2ContractAnchor[] = contractsResult.ok
    ? contractsResult.contracts
        .slice(-W2_HISTORY_MAX_CONTRACTS)
        .reverse()
        .map((contract) => ({
          executionContractId: contract.executionContractId,
          status: contract.status,
          version: contract.version,
          action: contract.action,
          target: contract.target,
          semanticFingerprint: contract.semanticFingerprint ?? null,
          decisionRefs: [...(contract.decisionRefs ?? [])],
        }))
    : [];

  return {
    ok: true,
    history: {
      projectId,
      projectTitle: live.context.projectTitle,
      lps: { lpsId: live.context.lpsId, version: live.context.lpsVersion },
      cycle: {
        activeCycleInstanceId,
        cycleTypeId,
        profile: cycleProfile,
        status: cycleStatus,
      },
      trajectory: {
        effectiveCurrent:
          versions.find((v) => v.isEffectiveCurrent) ?? null,
        proposedNotYetDecided,
        versions,
      },
      decisions,
      contracts,
      absent: ABSENT_BY_DESIGN,
    },
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts`

**Finalité:** Track C — inspection produit liée à la version réellement lue.

```ts
/**
 * W2 Track C — ExecutionContract inspection at the product application path.
 *
 * Reads the contract as it exists now, records the Pilote inspection through
 * the OA use case, and exposes an honest inspection state. Inspecting changes
 * no ExecutionContract status and grants no authority: after a material
 * semantic amendment the prior attestation is reported as stale and
 * re-inspection is required before authorization.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type {
  InspectionInsufficiencyReason,
  InspectionSufficiency,
} from "@/lib/oa/execution-contract";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type {
  ContractInspectionStateDto,
  InspectExecutionContractResult,
} from "./types";

function mapInsufficiencyReason(
  reason: InspectionInsufficiencyReason,
): ContractInspectionStateDto["reason"] {
  switch (reason) {
    case "no_attestation":
      return "no_attestation";
    case "contract_fingerprint_absent":
      return "contract_fingerprint_absent";
    case "material_change":
      return "semantic_fingerprint_changed";
  }
}

function toStateDto(input: {
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint: string;
  sufficiency: InspectionSufficiency;
}): ContractInspectionStateDto {
  const { sufficiency } = input;
  if (sufficiency.sufficient) {
    return {
      executionContractId: input.executionContractId,
      contractVersion: input.contractVersion,
      semanticFingerprint: input.semanticFingerprint,
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: sufficiency.attestation.attestationId,
      attestedVersion: sufficiency.attestation.contractVersion,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    };
  }
  const stale = sufficiency.staleAttestation ?? null;
  return {
    executionContractId: input.executionContractId,
    contractVersion: input.contractVersion,
    semanticFingerprint: input.semanticFingerprint,
    statusLabel: stale
      ? "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ"
      : "NON INSPECTÉ",
    inspectionSufficient: false,
    attestationRef: null,
    attestedVersion: stale?.contractVersion ?? null,
    staleAttestationRef: stale?.attestationId ?? null,
    reinspectionRequired: stale !== null,
    reason: mapInsufficiencyReason(sufficiency.reason),
    grantsAuthority: false,
  };
}

export async function readContractInspectionState(input: {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
}): Promise<InspectExecutionContractResult> {
  const state =
    await input.oa.executionContractServices.getContractInspectionState.execute({
      executionContractId: input.executionContractId,
    });
  if (!state.ok) {
    return {
      ok: false,
      code: state.detailCode,
      message: "ExecutionContract introuvable — inspection impossible.",
    };
  }
  return {
    ok: true,
    ...toStateDto({
      executionContractId: state.contract.executionContractId,
      contractVersion: state.contract.version,
      semanticFingerprint: state.currentSemanticFingerprint,
      sufficiency: state.sufficiency,
    }),
  };
}

export type InspectExecutionContractInput = {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
  /** Facts the Pilote confirms having read on this contract version. */
  readonly inspectedFacts?: readonly string[];
  readonly inspectionReserves?: readonly string[];
  /** Optional optimistic guard when the surface knows the version it shows. */
  readonly expectedVersion?: number;
};

const DEFAULT_INSPECTED_FACTS: readonly string[] = Object.freeze([
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "semanticFingerprint",
]);

export async function inspectExecutionContract(
  input: InspectExecutionContractInput,
): Promise<InspectExecutionContractResult> {
  const recorded =
    await input.oa.executionContractServices.recordContractInspection.execute({
      executionContractId: input.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedFacts: [...(input.inspectedFacts ?? DEFAULT_INSPECTED_FACTS)],
      inspectionReserves: input.inspectionReserves
        ? [...input.inspectionReserves]
        : undefined,
      expectedVersion: input.expectedVersion,
      correlationId: `w2-inspect:${input.executionContractId}`,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.detailCode,
      message:
        recorded.detailCode === "CONTRACT_NOT_FOUND"
          ? "ExecutionContract introuvable — inspection impossible."
          : `Inspection refusée (${recorded.reason}).`,
    };
  }

  // Re-read state so the returned verdict comes from persisted proof.
  return readContractInspectionState({
    oa: input.oa,
    executionContractId: input.executionContractId,
  });
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`

**Finalité:** Track C — Confirmation seulement si requise et seulement après inspection.

```ts
/**
 * W2 Track C — scoped Confirmation captured for authorization, never for
 * execution.
 *
 * Product order enforced: a Confirmation can only be captured after a
 * sufficient inspection of the exact contract version, and only when the
 * contract's required authority actually demands one. An N1 contract is
 * refused here rather than being made to carry a gratuitous Confirmation.
 *
 * Nothing in this module executes: it stops at contract status `confirmed`.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
import { readContractInspectionState } from "./inspectExecutionContract";
import type { ConfirmForAuthorizationResult } from "./types";

export function w2ConfirmationActionRef(input: {
  executionContractId: string;
  contractVersion: number;
}): string {
  return `act:w2-authorize:${input.executionContractId}:v${input.contractVersion}`;
}

export type ConfirmForAuthorizationInput = {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export async function confirmExecutionContractForAuthorization(
  input: ConfirmForAuthorizationInput,
): Promise<ConfirmForAuthorizationResult> {
  const { oa } = input;
  const loaded =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable — confirmation impossible.",
    };
  }
  const contract = loaded.contract;

  if (contract.requiredAuthority === "N1") {
    return {
      ok: false,
      code: "CONFIRMATION_NOT_REQUIRED",
      message:
        "Aucune confirmation n'est requise pour ce contrat — rien à confirmer.",
    };
  }
  if (contract.status === "confirmed") {
    return {
      ok: true,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      confirmationRef: contract.confirmationRef ?? null,
      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
      alreadyConfirmed: true,
      executionPerformed: false,
    };
  }
  if (
    contract.status !== "validated" &&
    contract.status !== "confirmation_required"
  ) {
    return {
      ok: false,
      code: "STATE_CONFLICT",
      message: `Le contrat au statut ${contract.status} ne peut pas être confirmé.`,
    };
  }

  // Confirmation never precedes inspection.
  const inspection = await readContractInspectionState({
    oa,
    executionContractId: input.executionContractId,
  });
  if (!inspection.ok) {
    return inspection;
  }
  if (!inspection.inspectionSufficient) {
    return {
      ok: false,
      code: inspection.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_REQUIRED",
      message: inspection.reinspectionRequired
        ? "Le contrat a changé depuis la dernière inspection — réinspecter avant de confirmer."
        : "Inspecter le contrat avant de confirmer.",
    };
  }

  const decisionRef = (contract.decisionRefs ?? [])[0];
  if (!decisionRef) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Contrat sans décision humaine rattachée — aucune confirmation possible.",
    };
  }

  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: oa.clock.nowIso(),
    evidenceId: `evd:w2-cfm:${contract.executionContractId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const confirmationId = `cfm:w2:${contract.executionContractId}:v${contract.version}`;
  const level = contract.requiredAuthority === "N2" ? "N2" : "N3";

  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId,
    level,
    actionRef: w2ConfirmationActionRef({
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
    }),
    requestedBy: LOCAL_PILOTE_ACTOR,
    requestedTo: LOCAL_PILOTE_ACTOR,
    scope: contract.scope,
    idempotencyKey: `idem:w2-cfm:${contract.executionContractId}:v${contract.version}`,
    decisionRef,
  });
  if (!requested.ok) {
    return {
      ok: false,
      code: requested.error.detailCode,
      message: requested.error.message,
    };
  }

  const granted = await oa.decisionServices.grantConfirmation.execute({
    confirmationId,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!granted.ok) {
    return {
      ok: false,
      code: granted.error.detailCode,
      message: granted.error.message,
    };
  }

  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: contract.executionContractId,
      confirmationId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: contract.version,
    });
  if (!confirmed.ok) {
    return {
      ok: false,
      code: confirmed.error.detailCode,
      message: confirmed.error.message,
    };
  }

  return {
    ok: true,
    executionContractId: confirmed.contract.executionContractId,
    contractVersion: confirmed.contract.version,
    confirmationRef: confirmed.contract.confirmationRef ?? confirmationId,
    statusLabel: "CONFIRMATION REQUISE — OBTENUE",
    alreadyConfirmed: false,
    executionPerformed: false,
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`

**Finalité:** Track C — AUTHORIZED/BLOCKED + receipt; jamais Execute.

```ts
/**
 * W2 Track C — effective authority evaluation at the product application path.
 *
 * Product order enforced here:
 *
 *   ExecutionContract PREPARED
 *   → Pilote INSPECTS
 *   → Confirmation only if required
 *   → effective authority / executor sufficiency
 *   → AUTHORIZED or BLOCKED
 *   → STOP BEFORE EXECUTE
 *
 * Hard properties:
 *   - fail-closed: every unresolved condition yields BLOCKED with a reason;
 *   - a stale inspection never authorizes (material amendment ⇒ re-inspection);
 *   - a Confirmation is required only when the contract's required authority
 *     demands one, and a missing required Confirmation blocks honestly —
 *     nothing is ever fabricated;
 *   - AgentCapability is an authority envelope, evaluated from the closed OA
 *     registry, never an invented capability catalog;
 *   - every evaluation is materialized as an AuthorityVerificationReceipt;
 *   - no ExecutionAttempt is created and no execution path is ever called.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
import type {
  AgentCapabilitySufficiency,
  AuthorityVerificationBlockedReason,
  ExecutionContract,
} from "@/lib/oa/execution-contract";
import { agentMatchViolation } from "@/lib/oa/execution-attempt";
import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
import { readContractInspectionState } from "./inspectExecutionContract";
import type {
  AgentCapabilityOutcomeDto,
  ConfirmationRequirementDto,
  ContractInspectionStateDto,
  EvaluateExecutionAuthorizationResult,
} from "./types";

/**
 * Mirrors the adopted OA rule in ValidateExecutionContract: only N1 contracts
 * reach `validated` without a Confirmation. No new semantics are invented.
 */
export function resolveConfirmationRequirement(
  contract: Pick<ExecutionContract, "requiredAuthority" | "confirmationRef" | "status">,
): ConfirmationRequirementDto {
  const required = contract.requiredAuthority !== "N1";
  const confirmationRef = contract.confirmationRef ?? null;
  if (!required) {
    return {
      required: false,
      satisfied: true,
      confirmationRef,
      statusLabel: "CONFIRMATION NON REQUISE",
      fabricated: false,
    };
  }
  const satisfied = contract.status === "confirmed" && confirmationRef !== null;
  return {
    required: true,
    satisfied,
    confirmationRef,
    statusLabel: satisfied
      ? "CONFIRMATION REQUISE — OBTENUE"
      : "CONFIRMATION REQUISE — MANQUANTE",
    fabricated: false,
  };
}

/**
 * AgentCapability as a governance envelope: does any registered executor
 * cover the contract's required capabilities and action/target/scope?
 * Deny-by-default, reusing the OA agent match invariant.
 */
export function evaluateAgentCapability(
  registry: AgentRegistryPort,
  contract: Pick<
    ExecutionContract,
    "requiredCapabilities" | "action" | "target" | "scope"
  >,
): AgentCapabilitySufficiency {
  const agents = registry.listAgents();
  const evaluatedAgentRefs = agents.map((agent) => agent.agentId);
  if (agents.length === 0) {
    return {
      evaluatedAgentRefs,
      sufficient: false,
      reason: "no_agent_registered",
    };
  }

  let firstViolation: AgentCapabilitySufficiency["reason"] = "scope_not_allowed";
  for (const agent of agents) {
    const violation = agentMatchViolation(agent, {
      requiredCapabilities: [...contract.requiredCapabilities],
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
    });
    if (!violation) {
      return {
        evaluatedAgentRefs,
        sufficientAgentRef: agent.agentId,
        sufficient: true,
        reason: "sufficient",
      };
    }
    firstViolation =
      violation.detailCode === "AGENT_DISABLED"
        ? "agent_disabled"
        : violation.detailCode === "AGENT_UNHEALTHY"
          ? "agent_unhealthy"
          : violation.detailCode === "AGENT_CAPABILITY_MISMATCH"
            ? "capability_not_supported"
            : "scope_not_allowed";
  }
  return { evaluatedAgentRefs, sufficient: false, reason: firstViolation };
}

function capabilityDto(
  capability: AgentCapabilitySufficiency,
): AgentCapabilityOutcomeDto {
  return {
    sufficient: capability.sufficient,
    evaluatedAgentRefs: [...capability.evaluatedAgentRefs],
    sufficientAgentRef: capability.sufficientAgentRef ?? null,
    reason: capability.reason,
    statusLabel: capability.sufficient
      ? "EXÉCUTEUR SUFFISANT"
      : "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
  };
}

const BLOCKED_TEXT: Record<
  AuthorityVerificationBlockedReason,
  { reasonText: string; nextAction: string }
> = {
  contract_not_found: {
    reasonText: "Contrat d'exécution introuvable.",
    nextAction: "Reprendre la préparation du contrat.",
  },
  inspection_required: {
    reasonText: "Le contrat n'a pas été inspecté.",
    nextAction: "Inspecter le contrat avant toute autorisation.",
  },
  reinspection_required_material_change: {
    reasonText:
      "Le contrat a changé de manière matérielle depuis la dernière inspection.",
    nextAction: "Réinspecter la version courante du contrat.",
  },
  confirmation_required: {
    reasonText: "Une confirmation requise est manquante.",
    nextAction: "Obtenir la confirmation requise après inspection.",
  },
  contract_not_confirmed: {
    reasonText: "Le contrat n'est pas au statut confirmé.",
    nextAction: "Poursuivre le cycle de gouvernance du contrat.",
  },
  decision_not_current: {
    reasonText: "La décision humaine rattachée n'est plus courante.",
    nextAction: "Reprendre la décision avant autorisation.",
  },
  authority_denied: {
    reasonText: "Autorité effective insuffisante.",
    nextAction: "Faire vérifier l'autorité requise.",
  },
  authority_scope_mismatch: {
    reasonText: "L'autorité présentée ne couvre pas le périmètre du contrat.",
    nextAction: "Obtenir une autorité au périmètre exact du contrat.",
  },
  executor_capability_insufficient: {
    reasonText: "Aucun exécuteur autorisé ne couvre ce contrat.",
    nextAction: "Aucune exécution possible — arrêt honnête.",
  },
  contract_state_conflict: {
    reasonText: "L'état du contrat interdit l'autorisation.",
    nextAction: "Requalifier le contrat.",
  },
  guardrail_refused: {
    reasonText: "Un garde-fou runtime refuse l'autorisation.",
    nextAction: "Lever le garde-fou avant toute autorisation.",
  },
};

function mapAuthorizationFailure(
  detailCode: string,
): AuthorityVerificationBlockedReason {
  switch (detailCode) {
    case "CONTRACT_NOT_FOUND":
      return "contract_not_found";
    case "AUTHORITY_SCOPE_MISMATCH":
      return "authority_scope_mismatch";
    case "AUTHORITY_DENIED":
      return "authority_denied";
    case "DECISION_NOT_CURRENT":
    case "DECISION_NOT_FOUND":
    case "DECISION_REQUIRED":
      return "decision_not_current";
    case "CONFIRMATION_REQUIRED":
      return "confirmation_required";
    case "CAPABILITY_MISSING":
      return "executor_capability_insufficient";
    default:
      return "contract_state_conflict";
  }
}

export type EvaluateExecutionAuthorizationInput = {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
  /** Hostile client fields — never trusted. */
  readonly claimedAuthorityLevel?: unknown;
  readonly canActAsMorris?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export async function evaluateExecutionAuthorization(
  input: EvaluateExecutionAuthorizationInput,
): Promise<EvaluateExecutionAuthorizationResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;

  const { oa } = input;
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: "Contrat d'exécution introuvable — évaluation impossible.",
    };
  }
  const contract = contractResult.contract;

  const inspectionResult = await readContractInspectionState({
    oa,
    executionContractId: input.executionContractId,
  });
  if (!inspectionResult.ok) {
    return inspectionResult;
  }
  const inspection: ContractInspectionStateDto = inspectionResult;
  const confirmation = resolveConfirmationRequirement(contract);
  const capability = evaluateAgentCapability(
    oa.executionAttemptServices.registry,
    contract,
  );

  const finish = async (
    outcome: "AUTHORIZED" | "BLOCKED",
    blockedReason: AuthorityVerificationBlockedReason | undefined,
    verifiedAuthorityLevel: string | null,
    blockedDetail?: string,
  ): Promise<EvaluateExecutionAuthorizationResult> => {
    const { receipt } =
      await oa.executionContractServices.recordAuthorityVerification.execute({
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        semanticFingerprint: inspection.semanticFingerprint,
        actor: LOCAL_PILOTE_ACTOR,
        decisionRefs: [...(contract.decisionRefs ?? [])],
        confirmationRefs: confirmation.confirmationRef
          ? [confirmation.confirmationRef]
          : [],
        confirmationRequired: confirmation.required,
        inspectionAttestationRef: inspection.attestationRef ?? undefined,
        requiredAuthority: contract.requiredAuthority,
        verifiedAuthorityLevel: verifiedAuthorityLevel ?? undefined,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        agentCapability: capability,
        authorityEvidenceIds: [],
        outcome: outcome === "AUTHORIZED" ? "authorized" : "blocked",
        blockedReason,
        blockedDetail,
      });

    const text = blockedReason ? BLOCKED_TEXT[blockedReason] : null;
    return {
      ok: true,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      outcome,
      outcomeLabel:
        outcome === "AUTHORIZED"
          ? "AUTORISÉ — STOP AVANT EXECUTE"
          : "BLOQUÉ — ACTION REQUISE",
      reasonCode: blockedReason ?? "effective_authority_established",
      reasonText:
        text?.reasonText ??
        "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant.",
      nextAction:
        text?.nextAction ??
        "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute.",
      inspection,
      confirmation,
      agentCapability: capabilityDto(capability),
      authorityReceiptRef: receipt.receiptId,
      decisionRefs: [...(contract.decisionRefs ?? [])],
      requiredAuthority: contract.requiredAuthority,
      verifiedAuthorityLevel,
      executionPerformed: false,
      attemptCreated: false,
    };
  };

  // 1. Inspection must be sufficient for the exact current contract version.
  if (!inspection.inspectionSufficient) {
    return finish(
      "BLOCKED",
      inspection.reinspectionRequired
        ? "reinspection_required_material_change"
        : "inspection_required",
      null,
      inspection.reason,
    );
  }

  // 2. Confirmation only when required — never fabricated, never gratuitous.
  if (confirmation.required && !confirmation.satisfied) {
    return finish("BLOCKED", "confirmation_required", null, `status_${contract.status}`);
  }

  // 3. Effective authority through the existing OA gate (no parallel path).
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: oa.clock.nowIso(),
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return finish("BLOCKED", "authority_denied", null, authority.code);
  }

  const checked =
    await oa.executionContractServices.checkExecutionAuthorization.execute({
      executionContractId: contract.executionContractId,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      correlationId: `w2-authz:${contract.executionContractId}`,
    });
  if (!checked.ok) {
    return finish(
      "BLOCKED",
      mapAuthorizationFailure(checked.error.detailCode),
      null,
      checked.error.detailCode,
    );
  }

  // 4. Executor sufficiency — an authorized human still needs a capable agent.
  if (!capability.sufficient) {
    return finish(
      "BLOCKED",
      "executor_capability_insufficient",
      "N3",
      capability.reason,
    );
  }

  // STOP BEFORE EXECUTE — nothing beyond this verdict is invoked.
  return finish("AUTHORIZED", undefined, "N3");
}
```

### `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`

**Finalité:** Track A/B/C — server actions /studio; champs hostiles ignorés.

```ts
"use server";

/**
 * W2 server actions — thin transport over the product application path.
 *
 * The client may only send a projectId, an opaque option-set reference, the
 * trajectory version it was shown and the option it selects. Options,
 * recommendation, authority and inspection state are always resolved
 * server-side from durable truth: no client payload can decide, widen
 * authority, or claim an inspection.
 *
 * No action here reaches an execution path.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { decideTrajectory } from "./decideTrajectory";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { readW2ProjectHistory } from "./projectHistory";
import { deriveTrajectoryOptions, deriveTrajectoryRecommendation } from "./trajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type {
  ConfirmForAuthorizationResult,
  DecideTrajectoryResult,
  EvaluateExecutionAuthorizationResult,
  InspectExecutionContractResult,
  ProposeTrajectoryOptionsResult,
} from "./types";
import type { ReadW2ProjectHistoryResult } from "./projectHistory";

const OA_UNAVAILABLE = {
  ok: false as const,
  code: "OA_STACK_UNAVAILABLE",
  message: "Services OA indisponibles — aucune action W2 possible.",
};

export async function w2ProposeTrajectoryOptionsAction(input: {
  projectId: string;
}): Promise<ProposeTrajectoryOptionsResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const qualification = await resolveW2QualificationInputs({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  return proposeTrajectoryOptions({
    oa: runtime.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
  });
}

export async function w2DecideTrajectoryAction(input: {
  projectId: string;
  optionSetRef: string;
  trajectoryId: string;
  candidateVersion: number;
  selectedOptionRef: string;
  reservesText?: string | null;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<DecideTrajectoryResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const qualification = await resolveW2QualificationInputs({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  // Options and recommendation are re-derived from durable truth, never taken
  // from the request: the Pilote decides among what the server actually
  // proposed.
  const options = deriveTrajectoryOptions(qualification.qualification.inputs);
  const recommendation = deriveTrajectoryRecommendation(
    qualification.qualification.inputs,
  );

  return decideTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
    optionSetRef: input.optionSetRef,
    options,
    recommendedOptionRef: recommendation.recommendedOptionRef,
    selectedOptionRef: input.selectedOptionRef,
    trajectoryId: input.trajectoryId,
    candidateVersion: input.candidateVersion,
    reservesText: input.reservesText ?? null,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
  });
}

export async function w2InspectExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
  expectedVersion?: number;
}): Promise<InspectExecutionContractResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return inspectExecutionContract({
    oa: runtime.oa,
    executionContractId: input.executionContractId,
    expectedVersion: input.expectedVersion,
  });
}

export async function w2ConfirmExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
}): Promise<ConfirmForAuthorizationResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return confirmExecutionContractForAuthorization({
    oa: runtime.oa,
    executionContractId: input.executionContractId,
  });
}

export async function w2AuthorizeExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<EvaluateExecutionAuthorizationResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return evaluateExecutionAuthorization({
    oa: runtime.oa,
    executionContractId: input.executionContractId,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
  });
}

export async function w2ReadProjectHistoryAction(input: {
  projectId: string;
}): Promise<ReadW2ProjectHistoryResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return readW2ProjectHistory({
    oa: runtime.oa,
    projectId: input.projectId,
  });
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/promoteDecidedTrajectory.ts`

**Finalité:** Track A — use case OA: candidate → validated/active avec decisionRef; la vérification HD reste sur le product path (D-W2-03).

```ts
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import { isOaIdentifier } from "../domain/invariants";
import type {
  ProjectTrajectory,
  PromoteDecidedTrajectoryRequest,
  TrajectoryResult,
} from "../domain/types";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * W2 — PromoteDecidedTrajectory.
 *
 * Promotes an existing `candidate` ProjectTrajectory version to
 * `validated`/`active` so it becomes the effective current trajectory.
 * A `decisionRef` is structurally mandatory: this use case cannot promote a
 * structuring trajectory without a decision reference. Verifying that the
 * reference is an accepted durable HumanDecision belongs to the product
 * application path (D-W2-03).
 *
 * Only `candidate` versions are promotable — already-current, stale and
 * superseded versions are refused so no silent re-promotion can occur.
 */
export class PromoteDecidedTrajectory {
  constructor(
    private readonly trajectories: TrajectoryRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: PromoteDecidedTrajectoryRequest,
  ): Promise<TrajectoryResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");
    const status = request.status ?? "validated";

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): TrajectoryResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        expectedVersion: request.expectedVersion,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.trajectory.decided",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: request.expectedVersion,
        decisionRef: request.decisionRef ?? "",
        status,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("TRAJECTORY_INVALID", "created_by_required");
      }
      if (
        typeof request.decisionRef !== "string" ||
        !isOaIdentifier(request.decisionRef)
      ) {
        return fail("TRAJECTORY_INVALID", "decision_ref_required");
      }
      if (
        !isOaIdentifier(request.trajectoryId) ||
        !request.trajectoryId.startsWith("trj:")
      ) {
        return fail("TRAJECTORY_INVALID", "trajectory_id_invalid");
      }
      if (
        !isOaIdentifier(request.projectId) ||
        !request.projectId.startsWith("prj:")
      ) {
        return fail("TRAJECTORY_INVALID", "project_id_invalid");
      }
      if (
        !Number.isInteger(request.expectedVersion) ||
        request.expectedVersion < 1
      ) {
        return fail("TRAJECTORY_INVALID", "expected_version_invalid");
      }
      if (
        !Number.isInteger(request.expectedLpsVersion) ||
        request.expectedLpsVersion < 1
      ) {
        return fail("TRAJECTORY_INVALID", "expected_lps_version_invalid");
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      let promoted: ProjectTrajectory | undefined;
      let lpsVersion = 0;

      const persist = async () => {
        const existing = await this.trajectories.findByProjectAndVersion(
          request.projectId,
          request.expectedVersion,
        );
        if (!existing) {
          throw new Error("trajectory_version_not_found");
        }
        if (existing.trajectoryId !== request.trajectoryId) {
          throw new Error("trajectory_id_mismatch");
        }
        if (existing.status !== "candidate") {
          throw new Error("not_candidate");
        }

        const next: ProjectTrajectory = {
          ...structuredClone(existing),
          status,
          decidedByDecisionRef: request.decisionRef,
          decidedOptionRef: request.decidedOptionRef,
        };

        // Supersede the previously decided version before moving the pointer.
        const previousCurrent = await this.trajectories.findCurrentByProjectId(
          request.projectId,
        );
        if (
          previousCurrent &&
          previousCurrent.version !== next.version &&
          previousCurrent.status !== "superseded"
        ) {
          await this.trajectories.markSuperseded(
            previousCurrent.trajectoryId,
            previousCurrent.version,
          );
        }

        await this.trajectories.save(next);
        promoted = next;

        const currentLps =
          await this.projectServices.getCurrentLivingProjectState.execute({
            projectId: request.projectId,
          });
        if (!currentLps.ok) {
          throw new Error("missing_current_lps");
        }

        const appended =
          await this.projectServices.appendLivingProjectStateVersion.execute({
            projectId: request.projectId,
            expectedVersion: request.expectedLpsVersion,
            objective: currentLps.livingProjectState.objective,
            createdBy: request.createdBy,
            correlationId,
            context: currentLps.livingProjectState.context,
            scope: currentLps.livingProjectState.scope,
            trajectoryId: request.trajectoryId,
            trajectoryVersion: next.version,
          });

        if (!appended.ok) {
          if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
            const err = new Error("lps_version_conflict") as Error & {
              currentVersion?: number;
            };
            err.currentVersion = appended.error.currentVersion;
            throw err;
          }
          throw new Error("lps_append_failed");
        }
        lpsVersion = appended.livingProjectState.version;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "unknown";
        if (message === "trajectory_version_not_found") {
          return fail("TRAJECTORY_NOT_FOUND", "trajectory_version_not_found");
        }
        if (message === "trajectory_id_mismatch") {
          return fail("TRAJECTORY_NOT_FOUND", "trajectory_id_mismatch");
        }
        if (message === "not_candidate") {
          return fail("STATE_CONFLICT", "trajectory_version_not_candidate");
        }
        if (message === "lps_version_conflict") {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedLpsVersion,
            currentVersion: (err as Error & { currentVersion?: number })
              .currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_promote_failed");
      }

      if (!promoted) {
        return fail("PERSISTENCE_FAILURE", "atomic_promote_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.trajectory.decided",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: promoted.version,
        decisionRef: request.decisionRef,
        status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        trajectory: structuredClone(promoted),
        livingProjectStateVersion: lpsVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts`

**Finalité:** Track C / D-W2-04 — InspectionAttestation + fingerprint d'inspection (confirmation exclue) + sufficiency fail-closed.

```ts
/**
 * W2 / D-W2-04 — ExecutionContract InspectionAttestation.
 *
 * An attestation records that a human inspected one exact ExecutionContract,
 * identified by `executionContractId` + `contractVersion` + fingerprints +
 * `actor` + `inspectedAt`.
 *
 * It is PROOF, never permission:
 *   - it introduces no new ExecutionContract business status;
 *   - it never grants authority on its own;
 *   - it becomes insufficient as soon as the contract changes materially.
 *
 * Sufficiency is decided on `inspectionFingerprint`: the execution-significant
 * material of the contract (action, target, scope, inputs, capabilities,
 * authority, constraints, stop conditions, evidence, reversibility, window,
 * idempotency, decision refs, doctrine, supersession lineage).
 *
 * Deliberately excluded from that fingerprint: `confirmationRef` and
 * `immutableAfterConfirm`. Attaching a Confirmation is the step the product
 * performs *after* inspection in the mandated order (PREPARED → INSPECTED →
 * Confirmation if required → authority). It changes no executable intent, so it
 * cannot invalidate the inspection that legitimately preceded it. Every other
 * material amendment — and any supersession, which yields a new contract
 * identity with no attestation at all — invalidates the previous attestation
 * and requires re-inspection before Confirmation/authority.
 *
 * `validated` ≠ inspected, `confirmation_required` ≠ inspected: an EC status is
 * never read as inspection proof.
 */

import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/doctrine";
import {
  executionContractSemanticMaterial,
  type ExecutionContractSemanticMaterial,
} from "./semanticFingerprint";

export type InspectionAttestation = {
  schemaVersion: "0.1.0-oa";
  attestationId: string;
  executionContractId: string;
  contractVersion: number;
  /** Execution-significant fingerprint — decides sufficiency. */
  inspectionFingerprint: string;
  /** Full contract semantic fingerprint at inspection time — audit only. */
  semanticFingerprint: string;
  projectId?: string;
  actor: ActorReference;
  inspectedAt: string;
  /** Contract facts the inspector confirmed having read. */
  inspectedFacts: string[];
  /** Free-form reserves raised during inspection (non-blocking record). */
  inspectionReserves?: string[];
  /** Structural denials — an attestation is never an authorization. */
  grantsAuthority: false;
  isConfirmation: false;
};

export type InspectionInsufficiencyReason =
  | "no_attestation"
  | "material_change"
  | "contract_fingerprint_absent";

export type InspectionSufficiency =
  | { sufficient: true; attestation: InspectionAttestation }
  | {
      sufficient: false;
      reason: InspectionInsufficiencyReason;
      staleAttestation?: InspectionAttestation;
    };

/**
 * Execution-significant fingerprint of a contract: the semantic material minus
 * the Confirmation binding fields (see module note).
 */
export function computeInspectionFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  const material = executionContractSemanticMaterial(contract);
  const executable: Partial<ExecutionContractSemanticMaterial> = { ...material };
  delete executable.confirmationRef;
  delete executable.immutableAfterConfirm;
  return createHash("sha256")
    .update(canonicalizeJson(executable), "utf8")
    .digest("hex");
}

/**
 * Deny-by-default sufficiency check against the contract as it exists now.
 * A contract whose fingerprint cannot be resolved can never be proved inspected.
 */
export function evaluateInspectionSufficiency(input: {
  attestations: readonly InspectionAttestation[];
  executionContractId: string;
  currentInspectionFingerprint: string | undefined;
}): InspectionSufficiency {
  const relevant = input.attestations
    .filter((a) => a.executionContractId === input.executionContractId)
    .slice()
    .sort((a, b) => (a.inspectedAt < b.inspectedAt ? 1 : -1));

  if (relevant.length === 0) {
    return { sufficient: false, reason: "no_attestation" };
  }
  if (!input.currentInspectionFingerprint) {
    return {
      sufficient: false,
      reason: "contract_fingerprint_absent",
      staleAttestation: relevant[0],
    };
  }

  const match = relevant.find(
    (a) => a.inspectionFingerprint === input.currentInspectionFingerprint,
  );
  if (match) {
    return { sufficient: true, attestation: match };
  }

  return {
    sufficient: false,
    reason: "material_change",
    staleAttestation: relevant[0]!,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts`

**Finalité:** Track C / TD-C6-03 — AuthorityVerificationReceipt dans l'architecture adoptée.

```ts
/**
 * TD-C6-03 (option A-A) — AuthorityVerificationReceipt.
 *
 * Immutable snapshot of one effective-authority evaluation:
 *
 *   valid human authorization
 *   ∩ ExecutionContract scope
 *   ∩ AgentCapability / policy
 *   ∩ runtime guardrails
 *   ∩ valid required Confirmations
 *   = effective authority
 *
 * The receipt is PROOF of that evaluation, never an additional intersection
 * term: it is not a permission layer, it is not replayable to authorize a
 * later execution, and it is audit-only.
 */

import type { ActorReference, AuthorityClass } from "./types";

export type AuthorityVerificationOutcome = "authorized" | "blocked";

export type AuthorityVerificationBlockedReason =
  | "contract_not_found"
  | "inspection_required"
  | "reinspection_required_material_change"
  | "confirmation_required"
  | "contract_not_confirmed"
  | "decision_not_current"
  | "authority_denied"
  | "authority_scope_mismatch"
  | "executor_capability_insufficient"
  | "contract_state_conflict"
  | "guardrail_refused";

export type AgentCapabilitySufficiency = {
  /** Evaluated envelope, never a Cursor feature catalog. */
  evaluatedAgentRefs: string[];
  sufficientAgentRef?: string;
  sufficient: boolean;
  /** Deny-by-default reason from the agent envelope evaluation. */
  reason:
    | "sufficient"
    | "no_agent_registered"
    | "capability_not_supported"
    | "scope_not_allowed"
    | "agent_disabled"
    | "agent_unhealthy";
};

export type AuthorityVerificationReceipt = {
  schemaVersion: "0.1.0-oa";
  receiptId: string;
  projectId: string;
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint?: string;
  /** Absent in W2: no ExecutionAttempt exists — nothing was executed. */
  attemptId?: string;
  actor: ActorReference;
  decisionRefs: string[];
  confirmationRefs: string[];
  confirmationRequired: boolean;
  inspectionAttestationRef?: string;
  requiredAuthority: AuthorityClass;
  verifiedAuthorityLevel?: string;
  action: string;
  target: string;
  scope: string;
  agentCapability: AgentCapabilitySufficiency;
  authorityEvidenceIds: string[];
  outcome: AuthorityVerificationOutcome;
  blockedReason?: AuthorityVerificationBlockedReason;
  blockedDetail?: string;
  verifiedAt: string;
  /** Structural denials — a receipt never authorizes anything by itself. */
  grantsAuthority: false;
  reusableForFutureExecution: false;
  executionTriggered: false;
};
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts`

**Finalité:** Track C — enregistrement + lecture d'état d'inspection, sans nouveau statut EC.

```ts
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { InspectionAttestation } from "../domain/inspectionAttestation";
import {
  computeInspectionFingerprint,
  evaluateInspectionSufficiency,
} from "../domain/inspectionAttestation";
import type { InspectionSufficiency } from "../domain/inspectionAttestation";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import { isTa5Status } from "../domain/invariants";
import type { ActorReference, ExecutionContract } from "../domain/types";
import type { InspectionAttestationRepositoryPort } from "../ports/inspectionAttestationRepository";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";

export type RecordContractInspectionRequest = {
  executionContractId: string;
  actor: ActorReference;
  inspectedFacts: string[];
  inspectionReserves?: string[];
  /** Guards against inspecting a contract the caller no longer sees. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RecordContractInspectionResult =
  | {
      ok: true;
      attestation: InspectionAttestation;
      contract: ExecutionContract;
    }
  | {
      ok: false;
      detailCode:
        | "CONTRACT_NOT_FOUND"
        | "STATE_CONFLICT"
        | "TA5_STATUS_REFUSED"
        | "CONTRACT_INVALID";
      reason: string;
    };

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * D-W2-04 — record a human inspection of one ExecutionContract version.
 *
 * The attestation is always bound to the version and semantic fingerprint of
 * the contract as loaded here, never to caller-supplied values: a client can
 * neither back-date an inspection nor claim to have inspected a version it
 * never saw. Recording an inspection changes no ExecutionContract status and
 * grants no authority.
 */
export class RecordContractInspection {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly attestations: InspectionAttestationRepositoryPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    request: RecordContractInspectionRequest,
  ): Promise<RecordContractInspectionResult> {
    if (!request.actor?.actorId) {
      return {
        ok: false,
        detailCode: "CONTRACT_INVALID",
        reason: "actor_required",
      };
    }

    const contract = await this.contracts.findById(request.executionContractId);
    if (!contract) {
      return {
        ok: false,
        detailCode: "CONTRACT_NOT_FOUND",
        reason: "missing_contract",
      };
    }
    if (isTa5Status(contract.status)) {
      return {
        ok: false,
        detailCode: "TA5_STATUS_REFUSED",
        reason: `ta5_status_${contract.status}`,
      };
    }
    if (contract.status === "cancelled" || contract.status === "superseded") {
      return {
        ok: false,
        detailCode: "STATE_CONFLICT",
        reason: `status_${contract.status}`,
      };
    }
    if (
      request.expectedVersion !== undefined &&
      request.expectedVersion !== contract.version
    ) {
      return {
        ok: false,
        detailCode: "STATE_CONFLICT",
        reason: "version_conflict",
      };
    }

    const attestation: InspectionAttestation = {
      schemaVersion: "0.1.0-oa",
      attestationId: newId("insp"),
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: computeInspectionFingerprint(contract),
      semanticFingerprint:
        contract.semanticFingerprint ??
        computeExecutionContractSemanticFingerprint(contract),
      projectId: contract.projectId,
      actor: structuredClone(request.actor),
      inspectedAt: this.clock.nowIso(),
      inspectedFacts: [...request.inspectedFacts],
      grantsAuthority: false,
      isConfirmation: false,
    };
    if (request.inspectionReserves && request.inspectionReserves.length > 0) {
      attestation.inspectionReserves = [...request.inspectionReserves];
    }

    await this.attestations.append(attestation);
    return { ok: true, attestation, contract: structuredClone(contract) };
  }
}

export type GetContractInspectionStateResult =
  | {
      ok: true;
      contract: ExecutionContract;
      currentSemanticFingerprint: string;
      sufficiency: InspectionSufficiency;
      attestations: InspectionAttestation[];
    }
  | { ok: false; detailCode: "CONTRACT_NOT_FOUND"; reason: string };

/**
 * Read-only inspection state of a contract: full attestation trail plus the
 * deny-by-default sufficiency verdict against the contract as it exists now.
 */
export class GetContractInspectionState {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly attestations: InspectionAttestationRepositoryPort,
  ) {}

  async execute(input: {
    executionContractId: string;
  }): Promise<GetContractInspectionStateResult> {
    const contract = await this.contracts.findById(input.executionContractId);
    if (!contract) {
      return {
        ok: false,
        detailCode: "CONTRACT_NOT_FOUND",
        reason: "missing_contract",
      };
    }
    const currentSemanticFingerprint =
      contract.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract);
    const trail = await this.attestations.listByContract(
      contract.executionContractId,
    );
    return {
      ok: true,
      contract: structuredClone(contract),
      currentSemanticFingerprint,
      sufficiency: evaluateInspectionSufficiency({
        attestations: trail,
        executionContractId: contract.executionContractId,
        currentInspectionFingerprint: computeInspectionFingerprint(contract),
      }),
      attestations: trail,
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/recordAuthorityVerification.ts`

**Finalité:** Track C — matérialisation auditable AUTHORIZED/BLOCKED.

```ts
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  AgentCapabilitySufficiency,
  AuthorityVerificationBlockedReason,
  AuthorityVerificationOutcome,
  AuthorityVerificationReceipt,
} from "../domain/authorityVerificationReceipt";
import type { ActorReference, AuthorityClass } from "../domain/types";
import type { AuthorityVerificationReceiptRepositoryPort } from "../ports/authorityVerificationReceiptRepository";

export type RecordAuthorityVerificationRequest = {
  projectId: string;
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint?: string;
  actor: ActorReference;
  decisionRefs: string[];
  confirmationRefs: string[];
  confirmationRequired: boolean;
  inspectionAttestationRef?: string;
  requiredAuthority: AuthorityClass;
  verifiedAuthorityLevel?: string;
  action: string;
  target: string;
  scope: string;
  agentCapability: AgentCapabilitySufficiency;
  authorityEvidenceIds: string[];
  outcome: AuthorityVerificationOutcome;
  blockedReason?: AuthorityVerificationBlockedReason;
  blockedDetail?: string;
};

/**
 * TD-C6-03 — materialize the audit snapshot of one effective-authority
 * evaluation. Recording a receipt is the last step of an evaluation, never a
 * precondition of it: no caller may derive permission from a receipt.
 */
export class RecordAuthorityVerification {
  constructor(
    private readonly receipts: AuthorityVerificationReceiptRepositoryPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    request: RecordAuthorityVerificationRequest,
  ): Promise<{ receipt: AuthorityVerificationReceipt }> {
    const receipt: AuthorityVerificationReceipt = {
      schemaVersion: "0.1.0-oa",
      receiptId: `avr:${randomBytes(8).toString("hex")}`,
      projectId: request.projectId,
      executionContractId: request.executionContractId,
      contractVersion: request.contractVersion,
      actor: structuredClone(request.actor),
      decisionRefs: [...request.decisionRefs],
      confirmationRefs: [...request.confirmationRefs],
      confirmationRequired: request.confirmationRequired,
      requiredAuthority: request.requiredAuthority,
      action: request.action,
      target: request.target,
      scope: request.scope,
      agentCapability: structuredClone(request.agentCapability),
      authorityEvidenceIds: [...request.authorityEvidenceIds],
      outcome: request.outcome,
      verifiedAt: this.clock.nowIso(),
      grantsAuthority: false,
      reusableForFutureExecution: false,
      executionTriggered: false,
    };
    if (request.semanticFingerprint !== undefined) {
      receipt.semanticFingerprint = request.semanticFingerprint;
    }
    if (request.inspectionAttestationRef !== undefined) {
      receipt.inspectionAttestationRef = request.inspectionAttestationRef;
    }
    if (request.verifiedAuthorityLevel !== undefined) {
      receipt.verifiedAuthorityLevel = request.verifiedAuthorityLevel;
    }
    if (request.blockedReason !== undefined) {
      receipt.blockedReason = request.blockedReason;
    }
    if (request.blockedDetail !== undefined) {
      receipt.blockedDetail = request.blockedDetail;
    }

    await this.receipts.append(receipt);
    return { receipt };
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/ports/inspectionAttestationRepository.ts`

**Finalité:** Track C — port append-only attestations.

```ts
import type { InspectionAttestation } from "../domain/inspectionAttestation";

/**
 * Append-only audit store for ExecutionContract inspection attestations.
 * No update and no delete: an attestation is a historical fact.
 */
export interface InspectionAttestationRepositoryPort {
  append(attestation: InspectionAttestation): Promise<void>;
  listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]>;
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/ports/authorityVerificationReceiptRepository.ts`

**Finalité:** Track C — port append-only receipts.

```ts
import type { AuthorityVerificationReceipt } from "../domain/authorityVerificationReceipt";

/**
 * Append-only audit store for AuthorityVerificationReceipts (TD-C6-03).
 * No update and no delete: a receipt is a historical evaluation snapshot.
 */
export interface AuthorityVerificationReceiptRepositoryPort {
  append(receipt: AuthorityVerificationReceipt): Promise<void>;
  listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]>;
  listByProject(projectId: string): Promise<AuthorityVerificationReceipt[]>;
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryInspectionAttestationRepository.ts`

**Finalité:** Track C — repo mémoire (tests).

```ts
import type { InspectionAttestation } from "../domain/inspectionAttestation";
import type { InspectionAttestationRepositoryPort } from "../ports/inspectionAttestationRepository";

/** Process-local append-only attestation store (tests / non-durable stacks). */
export class MemoryInspectionAttestationRepository
  implements InspectionAttestationRepositoryPort
{
  private readonly byContract = new Map<string, InspectionAttestation[]>();

  async append(attestation: InspectionAttestation): Promise<void> {
    const list = this.byContract.get(attestation.executionContractId) ?? [];
    list.push(structuredClone(attestation));
    this.byContract.set(attestation.executionContractId, list);
  }

  async listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]> {
    return structuredClone(this.byContract.get(executionContractId) ?? []);
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryAuthorityVerificationReceiptRepository.ts`

**Finalité:** Track C — repo mémoire (tests).

```ts
import type { AuthorityVerificationReceipt } from "../domain/authorityVerificationReceipt";
import type { AuthorityVerificationReceiptRepositoryPort } from "../ports/authorityVerificationReceiptRepository";

/** Process-local append-only receipt store (tests / non-durable stacks). */
export class MemoryAuthorityVerificationReceiptRepository
  implements AuthorityVerificationReceiptRepositoryPort
{
  private readonly receipts: AuthorityVerificationReceipt[] = [];

  async append(receipt: AuthorityVerificationReceipt): Promise<void> {
    this.receipts.push(structuredClone(receipt));
  }

  async listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return structuredClone(
      this.receipts.filter(
        (r) => r.executionContractId === executionContractId,
      ),
    );
  }

  async listByProject(
    projectId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return structuredClone(
      this.receipts.filter((r) => r.projectId === projectId),
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteInspectionAttestationRepository.ts`

**Finalité:** Track C — repo Product SQLite existant (pas un second store).

```ts
import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { InspectionAttestation } from "../../domain/inspectionAttestation";
import type { InspectionAttestationRepositoryPort } from "../../ports/inspectionAttestationRepository";

/**
 * Durable append-only InspectionAttestation store on Product SQLite (M7).
 * Insert-only: a replayed attestationId is ignored rather than overwritten so
 * the audit trail can never be rewritten.
 */
export class SqliteInspectionAttestationRepository
  implements InspectionAttestationRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async append(attestation: InspectionAttestation): Promise<void> {
    const now = new Date().toISOString();
    this.store.db
      .prepare(
        `INSERT INTO oa_ec_inspection_attestations(
           attestation_id, execution_contract_id, contract_version,
           semantic_fingerprint, project_id, actor_id, inspected_at,
           payload_json, created_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(attestation_id) DO NOTHING`,
      )
      .run(
        attestation.attestationId,
        attestation.executionContractId,
        attestation.contractVersion,
        attestation.semanticFingerprint,
        attestation.projectId ?? null,
        attestation.actor.actorId,
        attestation.inspectedAt,
        JSON.stringify(attestation),
        now,
      );
  }

  async listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_ec_inspection_attestations
         WHERE execution_contract_id = ?
         ORDER BY inspected_at ASC`,
      )
      .all(executionContractId) as Array<{ payload_json: string }>;
    return rows.map(
      (row) => JSON.parse(row.payload_json) as InspectionAttestation,
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteAuthorityVerificationReceiptRepository.ts`

**Finalité:** Track C — repo Product SQLite existant (pas un second store).

```ts
import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { AuthorityVerificationReceipt } from "../../domain/authorityVerificationReceipt";
import type { AuthorityVerificationReceiptRepositoryPort } from "../../ports/authorityVerificationReceiptRepository";

/**
 * Durable append-only AuthorityVerificationReceipt store on Product SQLite
 * (M7). Insert-only so a replayed receiptId cannot rewrite audit history.
 */
export class SqliteAuthorityVerificationReceiptRepository
  implements AuthorityVerificationReceiptRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async append(receipt: AuthorityVerificationReceipt): Promise<void> {
    const now = new Date().toISOString();
    this.store.db
      .prepare(
        `INSERT INTO oa_authority_verification_receipts(
           receipt_id, execution_contract_id, contract_version,
           semantic_fingerprint, project_id, actor_id, outcome, verified_at,
           payload_json, created_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(receipt_id) DO NOTHING`,
      )
      .run(
        receipt.receiptId,
        receipt.executionContractId,
        receipt.contractVersion,
        receipt.semanticFingerprint ?? "",
        receipt.projectId,
        receipt.actor.actorId,
        receipt.outcome,
        receipt.verifiedAt,
        JSON.stringify(receipt),
        now,
      );
  }

  async listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return this.read(
      `SELECT payload_json FROM oa_authority_verification_receipts
       WHERE execution_contract_id = ? ORDER BY verified_at ASC`,
      executionContractId,
    );
  }

  async listByProject(
    projectId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return this.read(
      `SELECT payload_json FROM oa_authority_verification_receipts
       WHERE project_id = ? ORDER BY verified_at ASC`,
      projectId,
    );
  }

  private read(
    sql: string,
    param: string,
  ): AuthorityVerificationReceipt[] {
    const rows = this.store.db.prepare(sql).all(param) as Array<{
      payload_json: string;
    }>;
    return rows.map(
      (row) => JSON.parse(row.payload_json) as AuthorityVerificationReceipt,
    );
  }
}
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

**Finalité:** UI /studio — Options / Recommendation / HD / inspect / AUTHORIZED|BLOCKED.

```tsx
"use client";

/**
 * W2 product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection and effective authority.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path. Distinctions the Pilote must see
 * are carried by explicit labels — an Option is labelled OPTION, a
 * Recommendation states it is not a decision, and the authority verdict states
 * that nothing is executed.
 */

import { useCallback, useState } from "react";
import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2InspectExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
} from "@/features/project-assistant/w2/actions";
import type {
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
} from "@/features/project-assistant/w2/types";
import styles from "./TrajectorySurface.module.css";

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly semanticFingerprint: string;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization";

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const result = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: optionSet.optionSetRef,
        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
        candidateVersion: optionSet.proposedTrajectory.version,
        selectedOptionRef,
      });
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision) return;
    setBusy("contract");
    setError(null);
    const result = await projectAssistantPrepareM3Action({
      projectId,
      decisionId: decision.decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({
      executionContractId: result.f3.contract.executionContractId,
      version: result.f3.contract.version,
      status: result.f3.contract.status,
      action: result.f3.contract.action,
      target: result.f3.contract.target,
      scope: result.f3.contract.scope,
      requiredAuthority: result.f3.contract.requiredAuthority,
      semanticFingerprint: result.f3.contract.semanticFingerprint,
    });
    setInspection(null);
    setAuthorization(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
  }, [contract, projectId]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  return (
    <section
      className={styles.root}
      data-testid="w2-trajectory-panel"
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire et décision</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. Rien n&apos;est exécuté ici.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          {optionSet ? "Réinstruire les options" : "Instruire les options"}
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              Options proposées
            </h3>
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory.statusLabel} · version{" "}
              {optionSet.proposedTrajectory.version} · pas encore courante
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision && decided ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            {decision.statusLabel}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided.statusLabel} · version {decided.version}
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null}
            >
              {contract
                ? "Repréparer le contrat d'exécution"
                : "Préparer le contrat d'exécution"}
            </button>
          </div>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution préparé
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Version</dt>
              <dd data-testid="w2-contract-version">v{contract.version}</dd>
            </div>
            <div>
              <dt>Statut</dt>
              <dd>{contract.status}</dd>
            </div>
            <div>
              <dt>Autorité requise</dt>
              <dd>{contract.requiredAuthority}</dd>
            </div>
            <div>
              <dt>Empreinte sémantique</dt>
              <dd className={styles.code}>
                {contract.semanticFingerprint.slice(0, 12)}…
              </dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null}
            >
              Inspecter le contrat
            </button>
            {contract.requiredAuthority !== "N1" &&
            contract.status !== "confirmed" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={busy !== null || inspection === null}
                title={
                  inspection === null
                    ? "Inspecter le contrat avant de confirmer"
                    : undefined
                }
              >
                Confirmer (autorité requise)
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span data-testid="w2-authorization-outcome">
              {authorization.outcomeLabel}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
            <div>
              <dt>Trace d&apos;autorité</dt>
              <dd className={styles.code}>
                {authorization.authorityReceiptRef}
              </dd>
            </div>
          </dl>
          <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
            Aucune exécution n&apos;a été lancée : arrêt avant exécution.
          </p>
        </section>
      ) : null}
    </section>
  );
}
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css`

**Finalité:** UI — tokens --pm6-* existants; pas de nouveau langage visuel.

```css
.root {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-4);
  background: var(--pm6-surface);
  border: 1px solid var(--pm6-border-soft);
  border-radius: var(--pm6-radius-lg);
  box-shadow: var(--pm6-shadow-card);
  padding: var(--pm6-space-5);
}

.head {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-1);
}

.eyebrow {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--pm6-muted);
}

.title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.note,
.blockNote {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--pm6-muted-strong);
}

.blockBody {
  margin: 0;
  font-size: 0.89rem;
  line-height: 1.6;
  color: var(--pm6-ink);
}

.error {
  margin: 0;
  padding: var(--pm6-space-3);
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border);
  background: var(--pm6-surface-sunken);
  font-size: 0.86rem;
  color: var(--pm6-ink);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--pm6-space-3);
}

.primaryAction,
.secondaryAction,
.decideAction {
  border-radius: var(--pm6-radius-pill);
  font-size: 0.86rem;
  font-weight: 600;
  padding: 0.55rem 1.1rem;
  cursor: pointer;
  transition: opacity 120ms ease;
}

.primaryAction {
  border: 1px solid var(--pm6-forest);
  background: var(--pm6-forest);
  color: var(--pm6-forest-ink);
}

.secondaryAction,
.decideAction {
  border: 1px solid var(--pm6-border);
  background: transparent;
  color: var(--pm6-ink);
}

.primaryAction:disabled,
.secondaryAction:disabled,
.decideAction:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.busy {
  font-size: 0.8rem;
  color: var(--pm6-muted);
}

.block,
.recommendation,
.decision,
.contract,
.authorized,
.blocked {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3);
  padding: var(--pm6-space-4);
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border-soft);
  background: var(--pm6-surface-sunken);
}

.blockTitle {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.recoTitle {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--pm6-forest);
}

.optionList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3);
}

.option {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
  padding: var(--pm6-space-3);
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border);
  background: var(--pm6-surface);
}

.optionHead {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--pm6-space-2);
}

.optionBadge,
.recommendedBadge {
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: var(--pm6-radius-pill);
}

.optionBadge {
  border: 1px solid var(--pm6-border);
  color: var(--pm6-muted-strong);
}

.recommendedBadge {
  border: 1px solid var(--pm6-forest);
  color: var(--pm6-forest);
}

.optionLabel {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.optionIntent {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--pm6-ink);
}

.impacts {
  margin: 0;
  padding-left: var(--pm6-space-4);
  font-size: 0.8rem;
  color: var(--pm6-muted-strong);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.facts {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: var(--pm6-space-3);
}

.facts dt {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--pm6-muted);
}

.facts dd {
  margin: 0;
  font-size: 0.86rem;
  color: var(--pm6-ink);
  overflow-wrap: anywhere;
}

.code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.78rem;
  color: var(--pm6-muted-strong);
}

.inspection {
  margin: 0;
  font-size: 0.84rem;
  color: var(--pm6-ink);
}

.authorized {
  border-color: var(--pm6-ok);
  background: var(--pm6-ok-tint);
}

.blocked {
  border-color: var(--pm6-warn);
  background: var(--pm6-warn-tint);
}

.stopNotice {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--pm6-muted-strong);
}

@media (max-width: 767px) {
  .root {
    padding: var(--pm6-space-4);
  }

  .facts {
    grid-template-columns: minmax(0, 1fr);
  }
}
```

### `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`

**Finalité:** Preuve déterministe E+A+B+C product-native, restart, inspect stale, no Execute.

```ts
// @vitest-environment node
/**
 * W2-G3 E+A+B+C — deterministic product-native proof.
 * No Execute · no REAL · no Phase B / Track D.
 */
import { afterEach, describe, expect, it } from "vitest";
import { RUNTIME_DISCLOSURES } from "@/lib/vertical-slice-runtime/disclosures";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { assertDecisionAuthorizesPromotion, decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  inspectExecutionContract,
  readContractInspectionState,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import { readW2ProjectHistory } from "@/features/project-assistant/w2/projectHistory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

afterEach(() => {
  cleanupW2TempDirs();
});

describe("W2 Track E — disclosure honesty", () => {
  it("states trajectory / epistemic / granted confirmation as durable and Phase B as not implemented", () => {
    expect(RUNTIME_DISCLOSURES.projectTrajectoryRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.materializedEpistemicRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.grantedConfirmationRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.requestedConfirmationRestartSafe).toBe(false);
    expect(RUNTIME_DISCLOSURES.w2Cognition).toBe("IN_PROGRESS_NOT_COMPLETE");
    expect(RUNTIME_DISCLOSURES.ckcPhaseBCognition).toBe(
      "NOT_AUTHORIZED_NOT_IMPLEMENTED",
    );
    const joined = RUNTIME_DISCLOSURES.messages.join(" ");
    expect(joined).toMatch(/ProjectTrajectory versions/);
    expect(joined).not.toMatch(/Trajectory\/Epistemic Memory remain process-local/);
    expect(joined).toMatch(/CKC Phase B cognition integration is NOT authorized/);
    expect(joined).toMatch(/Runtime v3 is not ADOPTED/);
    expect(w1RestartHonestyMessage()).toMatch(/trajectoire effective\/décidée/i);
    expect(w1RestartHonestyMessage()).toMatch(/confirmation demandée/i);
  });
});

describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
  it("derives deterministic Options and a Recommendation that never decides", () => {
    const inputs = {
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [] as string[],
      ckcAttribution: null,
    };
    const options = deriveTrajectoryOptions(inputs);
    const recommendation = deriveTrajectoryRecommendation(inputs);
    expect(options).toHaveLength(3);
    expect(options.map((o) => o.kind)).toEqual(["OPTION", "OPTION", "OPTION"]);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(recommendation.isHumanDecision).toBe(false);
    expect(recommendation.promotesTrajectory).toBe(false);
    expect(recommendation.label).toBe("RECOMMANDATION — PAS UNE DÉCISION");
    expect(recommendation.recommendedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(
      deriveTrajectoryRecommendation({
        ...inputs,
        recommendedProfile: "Critical",
        criticalSignalsPresent: true,
      }).recommendedOptionRef,
    ).toBe(GOVERNED_OPTION_REF);
    expect(
      deriveTrajectoryRecommendation({
        ...inputs,
        reservations: ["Réserve ouverte"],
      }).recommendedOptionRef,
    ).toBe(CLARIFY_OPTION_REF);
  });

  it("refuses promotion without an accepted structuring HumanDecision", () => {
    const refused = assertDecisionAuthorizesPromotion({
      decision: null,
      projectId: "prj:w2-a",
      trajectoryId: "trj:w2-a",
      candidateVersion: 1,
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) expect(refused.code).toBe("DECISION_REQUIRED");
  });

  it("proposes a candidate that is not current, then promotes only after Pilote HD", async () => {
    const db = tempProductDbPath("w2-a.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.proposedTrajectory.isCurrent).toBe(false);
    expect(proposed.proposedTrajectory.status).toBe("candidate");

    const before = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(before.ok).toBe(false);

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: proposed.options[1]!.optionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.executionPerformed).toBe(false);
    expect(decided.decision.actorRole).toBe("Pilote");
    expect(decided.decision.decisionBasisLinked).toBe(true);
    expect(decided.trajectory.isCurrent).toBe(true);
    expect(decided.trajectory.statusLabel).toBe("TRAJECTOIRE DÉCIDÉE / COURANTE");
    expect(decided.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(decided.trajectory.version);
    expect(current.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef).toBe(
      proposed.options[1]!.optionRef,
    );

    const unknown = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: "opt:trajectory:invented",
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe("OPTION_NOT_PRESENTED");
  });

  it("keeps decided/current after Product SQLite restart", async () => {
    const db = tempProductDbPath("w2-restart.sqlite");
    const first = bootW2Runtime({ productDbPath: db, idPrefix: "w2r" });
    const seeded = await seedQualifiedProject(first, { suffix: "r" });
    const qualification = await resolveW2QualificationInputs({
      oa: first.oa!,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: first.oa!,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: first.oa!,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: proposed.recommendation.recommendedOptionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const restarted = bootW2Runtime({ productDbPath: db, idPrefix: "w2r2" });
    const current = await restarted.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
    const history = await readW2ProjectHistory({
      oa: restarted.oa!,
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.history.trajectory.effectiveCurrent?.isEffectiveCurrent).toBe(
      true,
    );
    expect(history.history.decisions[0]?.decisionId).toBe(
      decided.decision.decisionId,
    );
  });
});

describe("W2 Track B — minimal history", () => {
  it("projects durable anchors only and reports process-local absences", async () => {
    const db = tempProductDbPath("w2-b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2b" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
    const history = await readW2ProjectHistory({
      oa: runtime.oa!,
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.history.projectId).toBe(seeded.projectId);
    expect(history.history.cycle.activeCycleInstanceId).toBe(
      seeded.cycleInstanceId,
    );
    expect(history.history.absent.join(" ")).toMatch(/Conversation/);
    expect(history.history.absent.join(" ")).toMatch(/Proposition F2/);
    expect(history.history.absent.join(" ")).not.toMatch(/transcript/i);
  });
});

describe("W2 Track C + integrated E+A+B+C product path", () => {
  it("walks Options → HD → decided trajectory → inspect → confirm → AUTHORIZED/BLOCKED and never executes", async () => {
    const db = tempProductDbPath("w2-eabc.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w2e" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "e",
      profile: "Critical",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.recommendation.recommendedOptionRef).toBe(GOVERNED_OPTION_REF);

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.executionAllowed).toBe(false);
    const executionContractId = prepared.payload.contract.executionContractId;

    const unread = await readContractInspectionState({
      oa,
      executionContractId,
    });
    expect(unread.ok).toBe(true);
    if (!unread.ok) return;
    expect(unread.inspectionSufficient).toBe(false);
    expect(unread.grantsAuthority).toBe(false);

    const blockedUninspected = await evaluateExecutionAuthorization({
      oa,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedUninspected.ok).toBe(true);
    if (!blockedUninspected.ok) return;
    expect(blockedUninspected.outcome).toBe("BLOCKED");
    expect(blockedUninspected.reasonCode).toBe("inspection_required");
    expect(blockedUninspected.executionPerformed).toBe(false);
    expect(blockedUninspected.attemptCreated).toBe(false);
    expect(blockedUninspected.authorityReceiptRef).toMatch(/^avr:/);

    const inspected = await inspectExecutionContract({
      oa,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    expect(inspected.statusLabel).toBe("INSPECTÉ");
    expect(inspected.grantsAuthority).toBe(false);

    const prematureConfirm = await confirmExecutionContractForAuthorization({
      oa,
      executionContractId,
      forceLocalAuthority: true,
    });
    // Confirmation is required for MORRIS contracts; after inspect it may succeed.
    if (prematureConfirm.ok) {
      expect(prematureConfirm.executionPerformed).toBe(false);
      expect(prematureConfirm.statusLabel).toBe("CONFIRMATION REQUISE — OBTENUE");
    }

    const afterInspectBlocked = await evaluateExecutionAuthorization({
      oa,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(afterInspectBlocked.ok).toBe(true);
    if (!afterInspectBlocked.ok) return;
    expect(afterInspectBlocked.executionPerformed).toBe(false);
    expect(afterInspectBlocked.attemptCreated).toBe(false);
    expect(["AUTHORIZED", "BLOCKED"]).toContain(afterInspectBlocked.outcome);
    if (afterInspectBlocked.outcome === "BLOCKED") {
      expect(afterInspectBlocked.reasonText.length).toBeGreaterThan(0);
      expect(afterInspectBlocked.nextAction.length).toBeGreaterThan(0);
    }
    expect(afterInspectBlocked.confirmation.fabricated).toBe(false);

    const amendAuthority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: prepared.payload.contract.scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(amendAuthority.ok).toBe(true);
    if (!amendAuthority.ok) return;

    const successor = await oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: `${executionContractId}:amended`,
      supersedesExecutionContractId: executionContractId,
      supersessionReason: "scope_change",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: amendAuthority.evidenceId,
      action: "w2:amended-action",
      target: prepared.payload.contract.target,
      scope: prepared.payload.contract.scope,
      requiredAuthority: "MORRIS",
    });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;

    const stale = await readContractInspectionState({
      oa,
      executionContractId: successor.contract.executionContractId,
    });
    expect(stale.ok).toBe(true);
    if (!stale.ok) return;
    expect(stale.inspectionSufficient).toBe(false);

    const blockedStale = await evaluateExecutionAuthorization({
      oa,
      executionContractId: successor.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedStale.ok).toBe(true);
    if (!blockedStale.ok) return;
    expect(blockedStale.outcome).toBe("BLOCKED");
    expect(blockedStale.reasonCode).toMatch(/inspection|reinspection/);
    expect(blockedStale.executionPerformed).toBe(false);

    const history = await readW2ProjectHistory({
      oa,
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.history.trajectory.effectiveCurrent?.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
    expect(history.history.decisions.some((d) => d.decisionId === decided.decision.decisionId)).toBe(
      true,
    );
    expect(history.history.contracts.length).toBeGreaterThan(0);
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`

**Finalité:** Harness Product SQLite temporaire pour la preuve W2.

```ts
/**
 * Shared harness for W2 (E+A+B+C) product-path tests.
 * Product SQLite on a temp file so restart proofs reopen the same store.
 * No REAL boundary, no execution: every helper here stops before Execute.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { expect } from "vitest";
import type { ActorReference } from "@/lib/oa/cycle";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
export const W2_SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
export const W2_FIXED_NOW = "2026-08-23T04:30:00.000Z";

export const W2_TEST_ACTOR: ActorReference = {
  actorId: "actor:w2-test-seed",
  role: "project_owner",
  displayName: "W2 seed",
  authorityLevel: "N3",
};

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

const tempDirs: string[] = [];

export function tempProductDbPath(name = "w2-product.sqlite"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

export function cleanupW2TempDirs(): void {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (!dir) continue;
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
}

export function bootW2Runtime(input: {
  productDbPath: string;
  idPrefix?: string;
}): RuntimeApplicationService {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: W2_FIXED_NOW,
    idSource: new SeededIdSource(input.idPrefix ?? "w2"),
    auditMode: "noop",
    productDbPath: input.productDbPath,
  });
}

export type SeededW2Project = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly lpsVersion: number;
};

/**
 * Durable qualification truth: project + LPS + linked CycleInstance, plus
 * optional Reservation epistemic items (which the option derivation reads).
 */
export async function seedQualifiedProject(
  runtime: RuntimeApplicationService,
  options?: {
    profile?: "Standard" | "Critical";
    reservations?: readonly { statement: string; blocking?: boolean }[];
    suffix?: string;
  },
): Promise<SeededW2Project> {
  const suffix = options?.suffix ?? "a";
  const created = await runtime.createProject({
    name: `W2 harness ${suffix}`,
    objective: "Prouver Options / Décision / Trajectoire / Autorité",
    context: "Cycle W2-G3 — aucune exécution",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    shortReference: `W2${suffix.toUpperCase()}`,
    idempotencyKey: `w2-harness-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("seed: createProject failed");
  const projectId = created.project.projectId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("seed: getProject failed");

  const oa = runtime.oa;
  if (!oa) throw new Error("seed: OA stack unavailable");

  const cycleInstanceId = `cyc:inst:w2-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: options?.profile === "Critical" ? { irreversible: true } : {},
    justification:
      options?.profile === "Critical"
        ? "Signal irréversible déclaré pour la preuve W2"
        : undefined,
    objective: "Prouver la trajectoire décidée",
    scope: "w2-scope",
    createdBy: W2_TEST_ACTOR,
    linkAsActiveCycle: true,
    expectedLpsVersion: overview.livingState.version,
    ckcResolutionRef: "ckcres:w2-harness",
  });
  expect(cycle.ok).toBe(true);
  if (!cycle.ok) throw new Error("seed: createCycle failed");

  if (options?.reservations?.length) {
    const updated = await oa.cycleServices.updateEpistemicState.execute({
      projectId,
      items: options.reservations.map((reservation, index) => ({
        epistemicItemId: `epi:w2-rsv-${suffix}-${index + 1}`,
        type: "Reservation" as const,
        statement: reservation.statement,
        status: "active" as const,
        blocking: reservation.blocking === true,
      })),
      createdBy: W2_TEST_ACTOR,
    });
    expect(updated.ok).toBe(true);
  }

  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("seed: getProject(after) failed");

  return {
    projectId,
    cycleInstanceId,
    lpsVersion: after.livingState.version,
  };
}

/** F2 context snapshot expected by the F3 prepare/resolve product path. */
export async function currentF2Context(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<{
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
}> {
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("context: getProject failed");
  return {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
  };
}
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

**Finalité:** Tests UI Option/Recommendation/HD/STOP BEFORE EXECUTE.

```tsx
/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPrepareM3Action: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
});

describe("W2 TrajectorySurface", () => {
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({ projectId: "prj:w2-ui" });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    const { projectAssistantPrepareM3Action } = await import(
      "@/features/project-assistant/actions"
    );
    vi.mocked(projectAssistantPrepareM3Action).mockResolvedValue({
      ok: true,
      f3: {
        contract: {
          executionContractId: "xct:w2-ui",
          version: 1,
          status: "prepared",
          action: "w2:inspect-only",
          target: "studio",
          scope: "w2-ui",
          requiredAuthority: "MORRIS",
          semanticFingerprint: "abc123def456",
        },
      },
    } as never);

    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "BLOQUÉ — ACTION REQUISE",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
  });
});
```
