# SFIA Studio — Generic Execution Upstream Architecture Simplification — Replacement Impact Review — FULL

- **Horodatage** : 2026-10-16T11:15:53+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — UPSTREAM ARCHITECTURE SIMPLIFICATION — REPLACEMENT IMPACT REVIEW
- **Cycle** : 6 — Architecture technique · **Profil** : CRITICAL · **Typologie** : Architecture / Impact Review
- **Capacité** : V3-F05 · D-ER-16…19 ADOPTED TARGET
- **Milestone** : P6 IN PROGRESS
- **Mutations Product** : **AUCUNE** (READ-ONLY)
- **Delivery / Correction Pass** : **NON** — impact review only

## 1. Verdict

**UPSTREAM REPLACEMENT IMPACT REVIEW COMPLETE**
**TARGET ARCHITECTURE OPTIONS QUALIFIED**
**READY FOR MORRIS REPLACEMENT DECISION**

(+ gates ouverts : SelectionProfile sans cycle · HD–mission binding — **NON CONSOMMÉS**)

Anti-claims : COMPONENT REPLACEMENT ADOPTED · PRODUCT CODE UPDATED · DELIVERY COMPLETE · GIT INTEGRATED · PR READY · READY FOR REAL · P6 GLOBAL PASS · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth initial

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Candidat Delivery | `docs/sfia-studio-generic-execution-nora-tool-invocation-20261016` @ `896ff59c` **DIRTY EXPECTED** (17 paths) — **NON MODIFIÉ** ce cycle |
| Handoff Correction Pass | `9ddea414` / blob `7a6cf17f` VERIFIED |
| Runtime :3020 | untouched |
| Product mutations ce cycle | **ZERO** |

### Candidat status (figé, non muté)

```
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
```

## 3. Sources

Template + routing + guardrails · Build Doctrine · Roadmap · C1 · P1–P6 (esp. P2/P6) · Architecture main + candidate D-ER-16…19 · Doctrine 30/32/34/35/37 · CKC Architecture · Runtime Reference · Handoff `9ddea414` intégral.

## 4. Convergence Pre-check

| Item | État |
| --- | --- |
| D-ER-16…19 | ADOPTED TARGET |
| Implémentation locale | INCOMPLETE (STOP Correction Pass) |
| Acquis locaux vérifiés | solicitGeneric + tool Nora + F2→solicit + Runner DET + PREPARE/AUTH sans cycle + cycleTypeId null |
| Gaps structurants | S8 Attempt `CYCLE_BINDING_REQUIRED` · E12 HD resume |
| Aval Cursor→Evidence | **HORS REFONTE** — réutilisation |

## 5. STOP précédent (rappel)

Correction Pass : **INCOMPLETE** + **MORRIS ARCHITECTURE OR AUTHORITY DECISION REQUIRED**
- Attempt sans cycle bloqué W3-A `loadContract`
- Generic PREPARE `decisionRefs: []` — HD n'ouvre pas la reprise

Ce cycle **ne corrige pas** — il qualifie le **remplacement amont**.

## 6. CURRENT / TARGET (amont)

```
CURRENT (candidat local):
  Nora tool ──┐
              ├── solicitGenericExecutionPrepare → prepareGeneric… → EC
  F2 router ──┘   (+ ACGC taxonomy/lifecycle gates + offer UX)
  Authorize OK sans cycle
  Execute W3-A: loadContract → CYCLE_BINDING_REQUIRED si !cycleInstanceId
  Structural: refuse OK ; resume HD NOT PROVEN

TARGET (D-ER-16…19):
  Nora tool = entrée nominale de sollicitation
  Un backend Product d'admission (solicitGeneric…)
  F2 = lifecycle / Artifact continuation / conversation — ≠ gate d'outil
  Project context suffit ; cycle optionnel
  SelectionProfile explicite sans cycle artificiel
  HD liée à mission/offre → reprise structurante
  Attempt existant réutilisé après frontière stable
```

## 7. Analyse A — Responsabilités amont

| Q | Réponse (FACT) |
| --- | --- |
| A. Pourquoi F2 ? | Routing chat-first + offer + ACGC/cycle gates — **pas** second backend PREPARE |
| B. Nécessaire exécution | projectId, cycle optionnel, call solicitGeneric, DET pins |
| C. Lifecycle only | ACGC modes, REQUIRE_ARTIFACT, createCycle, FINALIZE |
| D. Taxonomie héritée | docs_write / cursor.docs_write.apply / continuationKind dans ACGC |
| E. Cassé si retrait F2 admission | offer OK accept ; optional documentary F2 path ; Q18/Q19 UX — **pas** Nora tool |
| F. Nora nominal sans 2e backend | **OUI déjà** — tool→solicitGeneric |
| G. Simplifiable | Collapser F2 Generic block ; ACGC = Artifact only ; offer owner près de Nora/solicit |
| H. Continuité sans routeur | pending offer store + fingerprint — ACGC non requis pour accept |

## 8. Classification composants

| Component | Class | Disposition recommandée |
| --- | --- | --- |
| solicitGeneric / prepareGeneric | GENERIC CORE | **KEEP** |
| request_generic_execution_prepare | TECHNICAL ADAPTER | **KEEP** / COMPLETE |
| orchestrateTurn solicit wire | TECHNICAL ADAPTER | **KEEP** |
| pendingGenericPrepareOfferStore | TECHNICAL ADAPTER | **KEEP** interim (debt process-local) |
| F2 Generic PREPARE block | LEGACY ADMISSION | **REPLACE** (thin → solicit) / **ADAPT** interim |
| ACGC Artifact path | CYCLE LIFECYCLE + LEGACY ADMISSION | **KEEP** lifecycle · **RETIRE LATER** taxonomy as admission |
| authorizeGeneric / confirm | AUTHORITY BOUNDARY | **KEEP** |
| loadContract CYCLE_BINDING | EXECUTOR SELECTION seam | **REPLACE** seam rule (Morris) |
| OA selectExecutionAgent | EXECUTOR SELECTION | **KEEP** (n'exige pas cycle) |
| prepareExecutionContractFromW2Decision | AUTHORITY BOUNDARY HD-first | **KEEP** legacy |
| Cursor Gateway → Evidence | DOWNSTREAM CORE | **KEEP** (hors refonte) |

## 9. Analyse B — Dépendance cycle / SelectionProfile

### Ce que le cycle fournit aujourd'hui à Execute

| Propriété | Usage | Classe |
| --- | --- | --- |
| cycleInstanceId présent | Gate loadContract | lineage / authority seam |
| cycle.projectId match | Tenancy | sécurité |
| cycle.status non terminal | Lifecycle | autorité lifecycle |
| cycle.profile → SelectionProfile | Agent HOW | **méthodologique** |

**FACT :** OA `SelectExecutionAgent` **ne charge pas** le Cycle — il consomme `selectionProfile` du request.
**FACT :** Product Cursor REAL **force** souvent `standard` + `capabilities_deterministic` après le gate.
**FACT :** Authorize sans cycle **PROVEN** (der16 R4).

### Extrait loadContract

```typescript
async function loadContract(
  oa: RuntimeOaStack,
  input: GovernedExecuteAuthorizedContractInput,
): Promise<
  | { ok: false; result: Failure }
  | { ok: true; contract: ExecutionContract; selectionProfile: SelectionProfile }
> {
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: contractResult.error.detailCode,
        message: "Contrat d'exécution introuvable — exécution refusée.",
      },
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Le contrat n'appartient pas au projet demandé.",
      },
    };
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok && project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  let selectionProfile: SelectionProfile | null = null;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas de fallback Standard).",
      },
    };
  }
  {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: contract.cycleInstanceId,

```

### Deux options SelectionProfile sans cycle (NON ADOPTÉES)

**SP-A — Seal on EC** à PREPARE/Confirm : persister `selectionProfile` (ou équivalent) sur EC AUTHORIZED ; Select lit le sceau ; fail-closed si absent/ambigu.

**SP-B — Derive from EC Product stamps** déjà présents (materiality / requiredAuthority / sealed generalist vs docs-write) ; Cursor REAL force `standard` déjà — étendre comme règle Product unique ; Confirmation Pilot si Critical ; fail-closed si stamps conflictuels ; **jamais** Standard silencieux.

### Impact Attempt / persistence / recovery

- Attempt stocke déjà profile/strategy à Select — OK si fourni autrement
- Projections W3-A re-appellent loadContract — doivent cesser d'exiger cycle **ou** lire sceau EC
- Evidence lineage : cycle optionnel quand absent déjà partiellement supporté ; bindings vides risqués
- Cont01 / git effects : plusieurs chemins attendent cycle — inventaire RETIRE/ADAPT sous Delivery

### Fail-closed à préserver

Pas de cycle inventé · pas de Standard silencieux · Critical → confirmation · Project archived · EC mismatch.

## 10. Analyse C — HumanDecision–mission

| # | Finding |
| --- | --- |
| 1 | Sujets HD actuels = trajectory/proposal/work_rec/obligation — **pas** offerFingerprint générique |
| 2 | Bind via `offerFingerprint` / `missionKey` / DecisionBasis digests **existants** |
| 3 | IDs : decisionId, offerFingerprint, missionKey, semanticFingerprint, EC id |
| 4–6 | Project match + accepted + currentness Digests déjà dans W2 HD path |
| 7 | Mission change → nouveau missionKey ; stale HD fail-closed si lié |
| 8 | Partial effects : W2 EFFECTS_UNRESOLVED ; generic partial_reversible |
| 9 | KEEP prepareExecutionContractFromW2Decision |
| 10 | Frontière commune : PREPARE structural refuse · Confirm assertDecisionRefs · Authorize HD accepted |

**CURRENT gap :** `L780: decisionRefs: [],` hard-wired — aucune HD ne peut peupler refs sur chemin générique.

**Adaptations minimales (design, non implémentées) :**
1. `recordHumanDecision` avec basis/subject portant offerFingerprint/missionKey
2. PREPARE/Confirm structurants avec `decisionRefs: [decisionId]` quand HD valide
3. Owner continuité offer après shrink F2
4. Conserver `assertDecisionRefsAdmissibleForConfirm`

Confirmation ≠ HumanDecision.

## 11. Analyse D — Frontière ExecutionAttempt

### Préconditions observables cibles avant Attempt

- Project réel (non archived)
- EC inspecté CURRENT (fingerprint)
- Mission/scope sur EC
- Autorité effective (Authorize)
- HD applicable si structural (refs)
- Confirmation applicable si effets l'exigent
- AgentCapability / SelectionProfile **justifié** (sceau ou derive — Morris)
- Contraintes / stop conditions

### Réutilisation Attempt

| Couche | Compatible sans cycle ? |
| --- | --- |
| Authorize | **OUI** (proven) |
| OA SelectExecutionAgent | **OUI** si profile fourni |
| W3-A loadContract | **NON** aujourd'hui — seam Product |
| StartExecution | Cont01/git souvent cycle-aware — ADAPT |
| Downstream Evidence/RB | KEEP |

**Conclusion :** pas de second moteur Attempt. Incompatibilité exacte = **W3-A product seam** `CYCLE_BINDING_REQUIRED`, pas OA core Select.

## 12. Options A / B / C

### Option A — Convergence incrémentale

Continuer ADAPT F2/ACGC/loadContract patch par patch.

| Critère | Note |
| --- | --- |
| Conformité D-ER | Lente / partielle |
| Simplicité | Faible (routeurs restent) |
| Code supprimable | Minimal |
| Risque migration | Faible court terme |
| Dette | Élevée (Correction Pass loops) |
| Parallèle | Risque dual F2+Nora durable |

### Option B — Remplacement ciblé amont (**recommandée**)

Nora tool = entrée nominale · solicitGeneric = seul backend admission · F2 réduit à lifecycle/Artifact/conversation · Remplacer seam loadContract (SP-A ou SP-B) · Lier HD–mission via OA existant · KEEP Attempt/Cursor/Evidence.

| Critère | Note |
| --- | --- |
| Conformité D-ER-16…19 | Élevée |
| Simplicité | Élevée (retire LEGACY ADMISSION) |
| Réutilisation | Max (solicit, EC, Auth, Attempt, Gateway) |
| Risque | Moyen — borné aux seams W3-A + HD bind |
| Persistence | Pas de nouvel agrégat si SP-A/B + DecisionBasis |
| Autorité | Conservée si fail-closed + Morris SP/HD |
| Legacy | ACGC Artifact KEEP ; W2 HD-first KEEP |
| Preuve E2E | Nora→solicit→EC→Auth→Select→Attempt (DET) |
| Parallèle | **Non** si F2 n'admet plus Generic en parallèle nominal |

### Option C — Remplacement large (nouveau contrat mission/autorité)

Uniquement si SP-A/B + HD bind prouvent contrats insuffisants.

| Critère | Note |
| --- | --- |
| Nécessité structurelle | **NON démontrée** aujourd'hui |
| Risque / coût | Élevé |
| Parallèle | Risque élevé |

**Recommandation argumentée :** **Option B**.
Gain vs A : retire la dette d'admission distribuée et aligne D-ER sans multiplier les Correction Pass.
Vs C : les contrats EC/OA Decision/Select existent ; le blocage est un **seam Product** + **gap de binding**, pas une absence de modèle.

**AUCUNE OPTION ADOPTÉE** ce cycle.

## 13. Matrice d'impact remplacement

| Component | Responsibility | Callers | Consumers | Authority owner | CURRENT dep | TARGET owner | Impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F2 Generic block | Admit+offer+UX | orchestrateAssistantSend | Pilot UX / solicit | Product routing | ACGC+cycle | Thin solicit caller | REPLACE admission |
| ACGC | Artifact/lifecycle | F2 | Proposal Artifact | Cycle policy | taxonomy | Lifecycle only | ADAPT/RETIRE admission |
| solicitGeneric | Qualify+PREPARE | F2, Nora tool | EC | Studio materiality | — | GENERIC CORE | KEEP |
| loadContract cycle gate | Bind+profile | All W3-A execute | SelectAgent | Product Execute | cycle.profile | EC seal / derive | REPLACE seam |
| OA Select | Agent pick | W3-A | Attempt | OA invariants | request profile | same | KEEP |
| decisionRefs:[] | Non-structural stamp | prepareGeneric | Confirm/Auth | Studio | blocks HD | HD bind when structural | ADAPT |
| offer store | Continuity | F2 remember/accept | GO prepare | session | process-local | KEEP interim | ADAPT owner |
| W2 HD→EC | HD-first prepare | decideTrajectory | EC | Pilot HD | cycle often | KEEP | KEEP |

Preuves clés : `orchestrateF2.ts:2259-2277` · `orchestrateTurn.ts:528-545` · `governedExecuteAuthorizedContract.ts` loadContract · prepareGeneric `decisionRefs:[]` · der16 R1/R2/R4.

## 14. Trajectoire minimale (sous GO futurs — non démarrée)

1. **Morris décide** Option B + SP-A vs SP-B + HD subject shape + order HD↔PREPARE
2. Delivery : shrink F2 Generic admission → solicit only ; offer owner
3. Delivery : replace loadContract cycle-hard-gate with sealed/derived profile ; Attempt DET
4. Delivery : HD–mission bind + structural resume tests
5. Evidence E8–E12 complete DET · Human QA · Git Integration unique

Lots = capacités vérifiables, pas micro-patches.

## 15. Preuves de sortie (futures)

| Exit | Contenu |
| --- | --- |
| XR1 | F2 n'est plus gate nominal Generic (Nora ou thin solicit) |
| XR2 | Un seul call path solicitGeneric (spy) |
| XR3 | Attempt sans cycle avec SP justifié — ou policy explicite Execute requires cycle |
| XR4 | HD structural → prepare/confirm avec refs — sans inventer HD |
| XR5 | ACGC taxonomy hors admission Generic |
| XR6 | Non-régression Artifact GOVERNED + W2 HD-first |

## 16. Dette / exit

| Dette | Exit |
| --- | --- |
| F2 dual entry UX | XR1 |
| process-local offers | durable PresentedSubject GO |
| CYCLE_BINDING seam | Morris SP + XR3 |
| decisionRefs:[] structural | Morris HD + XR4 |
| Evidence/git cycle bindings | inventaire ADAPT sous Delivery Attempt |
| Living Reference digests | refresh post-intégration |

## 17. Gates Morris (ouverts — non consommés)

1. **Adopter Option B** (vs A/C) ?
2. **SelectionProfile sans cycle** : SP-A seal EC vs SP-B derive stamps ? (ou politique Execute exige cycle)
3. **HD–mission** : subject/DecisionBasis shape · ordre HD-before-PREPARE vs PREPARE-then-HD · supersession par missionKey ?
4. Owner continuité offer post-F2 shrink ?
5. Calendariser RETIRE taxonomy ACGC admission ?

## 18. Fake / Real

Architecture IMPACT QUALIFIED.
Acquis DET du candidat : tool Runner, admission commune, PREPARE/AUTH sans cycle.
Attempt sans cycle / HD resume : **NOT PROVEN**.
Aucun nouveau Fake · ZERO REAL · READY FOR REAL = **NO**.

## 19. Validations V1–V16

V1–V5, V8, V10–V12, V15–V16 **PASS** (analyse).
V6 SelectionProfile : **options qualified**.
V7 HD–mission : **qualified**.
V9 Attempt : **réutilisable** hors seam W3-A — incompatibilité exacte démontrée.
V13–V14 : trajectoire + dette **PASS**.

## 20. Git Truth final

```
origin/main=896ff59c
candidate=DIRTY UNCHANGED (read-only)
product_mutations_this_cycle=NONE
runtime_3020=untouched
```

## 21. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — GENERIC EXECUTION UPSTREAM REPLACEMENT IMPACT CRITICAL ARCHITECTURE REVIEW.**

Vérifier : valeur du remplacement · dépendances · responsabilités · simplicité · pas de nouveau moteur · S8 · HD–mission · autorité · legacy · D-ER-16…19 · maturité reco · **décisions ouvertes non consommées**.
