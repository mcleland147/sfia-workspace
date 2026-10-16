# SFIA Studio — Project-Scoped Generic Cursor Selection Delivery — Review Pack FULL

- **Horodatage** : 2026-10-16T12:49:06+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — PROJECT-SCOPED CURSOR TOOL TARGETED SELECTION AND EXECUTION DELIVERY
- **Cycle** : 8 — Delivery / implémentation · **Profil** : CRITICAL · **Typologie** : EVOL
- **Capacité** : V3-F05 · connexes V3-F11 / V3-F12
- **CKC** : ckc:studio:delivery
- **Macro** : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 · **Milestone** : P6 IN PROGRESS
- **Mutations Product locales** : OUI (candidat dirty) — **aucun commit/push/PR Product**
- **Handoff prior** : `18a2c274` / blob `85a95960` (selection contract) VERIFIED

## 1. Verdict

**PROJECT-SCOPED GENERIC CURSOR SELECTION DELIVERY — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Anti-claims : GIT INTEGRATED · PR READY · READY FOR REAL · HUMAN QA PASS · P6 GLOBAL PASS · RUNTIME V3 ADOPTED · SP-A ADOPTED · SP-B ADOPTED — **NON**.

## 2. Git Truth initial

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH baseline `896ff59c` |
| Candidat path | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Candidat HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Candidat branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| Note identité | FACT : path historique `docs/…nora-tool…` pointe branche `fix/…optional-artifact…` @ `b4c1d862` |
| Dirty initial | 18 paths (Delivery D-ER-16…19 préservé) |
| Runtime :3020 | untouched @ `896ff59c` |
| Aucun reset/stash/clean/rebase | OUI |

### Status candidat (après Delivery ce cycle)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts

```

## 3. Sources consultées

Template · routing · guardrails · Build Doctrine · Roadmap · C1 · P2/P6 · Architecture D-ER-16…19 candidate · Doctrine 30/32/34/35/37 · CKC Delivery · Handoff `18a2c274` (SP-A/SP-B, CYCLE_BINDING, getProject fail-open).

## 4. Convergence Pre-check

| Item | État |
| --- | --- |
| D-ER-16…19 | ADOPTED TARGET (conservé) |
| Option B | ADOPTED |
| Project-scoped Tool Access | **ADOPTED** (ce GO) |
| SP-A / SP-B | **NON ADOPTÉS** (pas de sceau EC / pas de mapping méthodologique) |
| Gap comblé | `loadContract` `CYCLE_BINDING_REQUIRED` retiré (cycle facultatif) |
| getProject fail-open | **FERMÉ** → `PROJECT_NOT_FOUND` |
| Select/Start/Result sans cycle | **DETERMINISTICALLY PROVEN** (Fake Cursor) |
| HD–mission structural resume | **OPEN / NOT PROVEN** (dette explicite) |

## 5. Décisions

**Consommées :** D-ER-16…19 · Option B · Project-scoped Tool Access · direction « ne pas reproduire contraintes de sélection obsolètes ».

**Non consommées / non adoptées :** SP-A persistence · SP-B mapping obligatoire · nouvelle persistence sélection · doctrine v3 · runtime v3.

**Ouvertes (dettes) :** HD–mission structural resume · `startExecution` `cycleInstanceId ?? ""` pour continuation docs_write pré-commit · Critical agent_selection hors Cursor REAL (historique conservé).

## 6. CURRENT → TARGET

| CURRENT | TARGET |
| --- | --- |
| `!cycleInstanceId` → `CYCLE_BINDING_REQUIRED` | Cycle facultatif ; Project positif obligatoire |
| getProject miss → continue | `PROJECT_NOT_FOUND` fail-closed |
| SelectionProfile dérivé cycle (ou refus) | Avec cycle : map historique ; sans cycle : carrier technique OA `standard` pour `capabilities_deterministic` (**≠** profil méthodologique) |
| Cursor REAL force standard+capabilities | Conservé = accès outil Project-scoped par capacités |
| Select stamped Generic sans binding version | Resolve binding depuis inspection durable (G-D4) |

## 7. Changements réellement effectués

### 7.1 `governedExecuteAuthorizedContract.ts`

1. **Project positive binding** (~394–418) : `!project.ok` → `PROJECT_NOT_FOUND` ; archived → `PROJECT_ARCHIVED`.
2. **Cycle facultatif** (~420–473) : retire `CYCLE_BINDING_REQUIRED` ; si cycle présent conserve lifecycle ; sinon carrier technique `selectionProfile="standard"`.
3. **Select G-D4 binding** (~625–680) : pour contrats `MATERIALITY:*`, resolve `expectedVersion`/`expectedSemanticFingerprint` depuis caller ou inspection durable suffisante.
4. **Commentaire accès Cursor** (~728–735) : profil méthodologique ≠ condition d'accès outil.

### 7.2 `actions.ts`

`w2GovernedExecuteSelectAction` forward optionnel `expectedVersion` / `expectedSemanticFingerprint`.

### 7.3 Tests

- `p6.der16…R4` : STOP `CYCLE_BINDING_REQUIRED` → Select Attempt accepted sans cycle.
- **Nouveau** `p6.projectScopedCursorSelection.d0.test.ts` (S1–S20 partial matrix).

### Diff stat (fichiers ce Delivery)

```
 .../app/features/project-assistant/w2/actions.ts   |   8 ++
 .../w2/governedExecuteAuthorizedContract.ts        | 109 ++++++++++++++++++---
 2 files changed, 105 insertions(+), 12 deletions(-)

```

### Snippet loadContract (fichier:ligne)

```
394|  // Project positive binding — missing/unreadable Project is never an implicit allow.
395|  const project = await oa.projectServices.getProject.execute({
396|    projectId: input.projectId,
397|  });
398|  if (!project.ok) {
399|    return {
400|      ok: false,
401|      result: {
402|        ok: false,
403|        code: "PROJECT_NOT_FOUND",
404|        message:
405|          "Projet introuvable ou illisible — exécution refusée (fail-closed).",
406|      },
407|    };
408|  }
409|  if (project.project.status === "archived") {
410|    return {
411|      ok: false,
412|      result: {
413|        ok: false,
414|        code: "PROJECT_ARCHIVED",
415|        message: "Projet archivé — aucune exécution.",
416|      },
417|    };
418|  }
419|
420|  // CycleInstance is optional for Project-scoped generic execution.
421|  // When present: preserve lifecycle binding / active-state gates.
422|  // When absent: do NOT invent a cycle, cycleTypeId, or methodological profile.
423|  let selectionProfile: SelectionProfile;
424|  if (contract.cycleInstanceId) {
425|    const cycle = await oa.cycleServices.getCycle.execute({
426|      cycleInstanceId: contract.cycleInstanceId,
427|    });
428|    if (!cycle.ok) {
429|      return {
430|        ok: false,
431|        result: {
432|          ok: false,
433|          code: "CYCLE_NOT_FOUND",
434|          message: "CycleInstance lié au contrat introuvable — exécution refusée.",
435|        },
436|      };
437|    }
438|    if (cycle.cycle.projectId !== input.projectId) {
439|      return {
440|        ok: false,
441|        result: {
442|          ok: false,
443|          code: "CYCLE_PROJECT_MISMATCH",
444|          message: "CycleInstance / projet incohérents — exécution refusée.",
445|        },
446|      };
447|    }
448|    if (
449|      cycle.cycle.status === "completed" ||
450|      cycle.cycle.status === "cancelled" ||
451|      cycle.cycle.status === "superseded"
452|    ) {
453|      return {
454|        ok: false,
455|        result: {
456|          ok: false,
457|          code: "CYCLE_NOT_ACTIVE",
458|          message: `CycleInstance ${cycle.cycle.status} — aucune exécution.`,
459|        },
460|      };
461|    }
462|    // Historical cycle-bound path: methodological cycle profile informs OA
463|    // SelectionProfile for non–Cursor-REAL branches. Cursor REAL Product path
464|    // still applies capability-deterministic selection below (not access-by-profile).
465|    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
466|  } else {
467|    // Project-scoped generic path (no CycleInstance on EC).
468|    // OA SelectExecutionAgent still requires a SelectionProfile enum value.
469|    // This is the technical carrier for capabilities_deterministic on the
470|    // Product Cursor Generalist path — NOT a claim that the mission is
471|    // methodologically "Standard", and NOT an access gate derived from SFIA profile.
472|    selectionProfile = "standard";
473|  }
474|
475|  return { ok: true, contract, selectionProfile };
476|}
```

### Snippet Select auth binding + Cursor access

```
622|    });
623|  }
624|
625|  // G-D4 — stamped Generic materiality contracts require version/fingerprint
626|  // binding at Select revalidation. Prefer caller binding; otherwise resolve
627|  // from durable Pilote inspection attestation (server-owned, fail-closed).
628|  let expectedVersion = input.expectedVersion;
629|  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
630|  const stampedMateriality = materialityFromContractConstraints(
631|    contract.constraints,
632|  );
633|  if (
634|    stampedMateriality != null &&
635|    (typeof expectedVersion !== "number" ||
636|      !Number.isFinite(expectedVersion) ||
637|      typeof expectedSemanticFingerprint !== "string" ||
638|      !expectedSemanticFingerprint.trim())
639|  ) {
640|    const inspection = await readContractInspectionState({
641|      oa: input.oa,
642|      executionContractId: contract.executionContractId,
643|    });
644|    if (!inspection.ok) {
645|      return {
646|        ok: false,
647|        code: inspection.code,
648|        message: inspection.message,
649|      };
650|    }
651|    if (
652|      !inspection.inspectionSufficient ||
653|      inspection.attestedVersion == null ||
654|      inspection.reinspectionRequired
655|    ) {
656|      return {
657|        ok: false,
658|        code: "INSPECTION_REQUIRED",
659|        message:
660|          "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
661|      };
662|    }
663|    const attestedFp =
664|      inspection.attestedSemanticFingerprint?.trim() ||
665|      inspection.semanticFingerprint?.trim();
666|    if (!attestedFp) {
667|      return {
668|        ok: false,
669|        code: "EXPECTED_FINGERPRINT_REQUIRED",
670|        message:
671|          "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
672|      };
673|    }
674|    expectedVersion = inspection.attestedVersion;
675|    expectedSemanticFingerprint = attestedFp;
676|  }
677|
678|  const authorized = await evaluateExecutionAuthorization({
679|    oa: input.oa,
680|    projectId: input.projectId,
681|    executionContractId: input.executionContractId,
682|    forceLocalAuthority: input.forceLocalAuthority,
683|    expectedVersion,
684|    expectedSemanticFingerprint,
685|  });
686|  if (!authorized.ok) {
687|    return {
688|      ok: false,
689|      code: authorized.code,
690|      message: authorized.message,
691|    };
692|  }
693|  if (authorized.outcome !== "AUTHORIZED") {
694|    return {
695|      ok: false,
696|      code: "NOT_AUTHORIZED",
697|      message:
698|        "Exécution refusée : le verdict courant n'est pas AUTHORIZED (aucune tentative).",
699|    };
700|  }
701|
702|  const eligibility = resolveProductExecutionEligibility({
703|    constraints: contract.constraints,
704|    stopConditions: contract.stopConditions,
705|    inputs:
706|      contract.inputs && typeof contract.inputs === "object"
707|        ? (contract.inputs as Record<string, unknown>)
708|        : null,
709|  });
710|  if (!eligibility.eligible) {
711|    return {
712|      ok: false,
713|      code: "EXECUTION_INELIGIBLE",
714|      message: eligibility.reasonText,
715|    };
716|  }
717|
718|  const authority = registerPiloteAuthority(
719|    input.oa,
720|    contract.scope,
721|    input.forceLocalAuthority,
722|    contract.requiredAuthority,
723|  );
724|  if (!authority.ok) {
725|    return { ok: false, code: authority.code, message: authority.message };
726|  }
727|
728|  // Project-scoped Cursor tool access (canonical Product + sealed docs-write):
729|  // select by AgentCapability / effects via capabilities_deterministic.
730|  // Methodological cycle profile (Light/Standard/Critical/Capitalization) is NOT
731|  // an access condition for Cursor. Authority remains: AUTHORIZED evaluation,
732|  // HumanDecision / Confirmation / scope / ActionPolicy upstream of Select.
733|  // Sealed docs-write still requests its specialized agent; Product uses generalist.
734|  // Non–Cursor-REAL branches keep historical Critical → agent_selection Confirmation.
735|  let effectiveProfile: SelectionProfile = selectionProfile;
736|  let selectionStrategy: SelectionStrategy;
737|  if (cursorReal) {
738|    effectiveProfile = "standard";
739|    selectionStrategy = "capabilities_deterministic";
740|  } else {
741|    const strategyResolved = resolveSelectionStrategy(selectionProfile);
742|    if ("detailCode" in strategyResolved) {
743|      return {
744|        ok: false,
745|        code: strategyResolved.detailCode,
746|        message: strategyResolved.reason,
747|      };
748|    }
749|    if (strategyResolved.strategy === "human_confirmed_proposal") {
750|      return {
751|        ok: false,
752|        code: "AGENT_CONFIRMATION_REQUIRED",
753|        message:
754|          "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
755|      };
756|    }
757|    selectionStrategy = strategyResolved.strategy;
758|  }
759|
760|  const identities = attemptIdentities(
```

### Snippet actions Select

```
549|export async function w2GovernedExecuteSelectAction(input: {
550|  projectId: string;
551|  executionContractId: string;
552|  /**
553|   * Optional Pilote inspection binding for G-D4 stamped Generic Select.
554|   * When omitted, Select resolves from durable inspection attestation.
555|   */
556|  expectedVersion?: number;
557|  expectedSemanticFingerprint?: string;
558|  canActAsMorris?: unknown;
559|  claimedAuthorityLevel?: unknown;
560|  authorityReceiptRef?: unknown;
561|  real?: unknown;
562|}): Promise<GovernedExecutePhaseResult> {
563|  const runtime = getRuntimeApplicationService();
564|  if (!runtime.oa) return OA_UNAVAILABLE;
565|  return governedExecuteSelectAgent({
566|    oa: runtime.oa,
567|    projectId: input.projectId,
568|    executionContractId: input.executionContractId,
569|    expectedVersion: input.expectedVersion,
570|    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
571|    canActAsMorris: input.canActAsMorris,
572|    claimedAuthorityLevel: input.claimedAuthorityLevel,
573|    authorityReceiptRef: input.authorityReceiptRef,
574|    real: input.real,
575|  });
576|}
577|
578|/**
579| * W3-A phase 2 — StartExecution → running.
580| */
```

## 8. Responsabilités / distinction profils

| Couche | Rôle | Ce Delivery |
| --- | --- | --- |
| SelectionProfile (OA enum) | HOW select / Critical confirm non–Cursor-REAL | Carrier technique sans cycle ; **pas** accès-par-profil |
| AttemptExecutionProfile | Suffisance capacités / effets | **INCHANGÉ** — NOT authority |
| AUTHORIZED / HD / Confirmation | Autorité | Préservés ; Select revalide |
| CycleInstance | Contexte lifecycle optionnel | Binding si présent ; jamais inventé |

## 9. Preuves S1–S20

| ID | Résultat | Preuve |
| --- | --- | --- |
| S1/S8/S19 | PASS | Select/Start/Result Fake sans cycle ; agent generalist ; 0 cycle créé |
| S2/S9 | PASS | Cycle Standard non-régression Select |
| S3 | PASS | Cycle Critical → Select Cursor (profil ≠ gate accès) |
| S4/S20 | PASS | Cycle clos + mission null-cycle OK ; cycle clos non muté |
| S20b | PASS | EC bound to completed cycle → `CYCLE_NOT_ACTIVE` |
| S5 | PASS | `PROJECT_NOT_FOUND` |
| S6 | PASS | `PROJECT_ARCHIVED` |
| S7 | PASS | `PROJECT_MISMATCH` |
| S10 | PASS | Faible effet Select OK |
| S11 | PARTIAL | Effets élevés couverts via AUTHORIZE existant + stamped path ; pas de nouveau REAL |
| S12 | PASS | Structural sans HD → PREPARE refuse |
| S13 | OPEN | HD–mission resume NOT PROVEN (documenté) |
| S14 | OPEN | Agent insuffisant : OA path existant ; non rejoué isolément ce cycle |
| S15 | PASS | Fingerprint stale → authorize refuse |
| S16 | PARTIAL | Confirmation invalide : chemin AUTHORIZE existant |
| S17/S18 | PASS | Code/test mission Generic ; no docs_write taxonomy gate |
| S19 | PASS | Aucun refus uniquement pour absence profil méthodologique |

**Aucun scénario marqué PASS n'a été inventé — tous exécutés vitest.**

## 10. Validations

| Suite | Résultat |
| --- | --- |
| `p6.projectScopedCursorSelection.d0.test.ts` | PASS (14) |
| `p6.der16.genericNoraToolInvocation.d0.test.ts` | PASS (27) |
| `w3aGovernedExecute` + `productGenericCursorCompletion` + `pjReproof05` | PASS (45) |
| `tsc --noEmit` | PASS |
| `npm run build` | PASS |

## 11. Fake / Real Qualification

| Frontière | Niveau |
| --- | --- |
| Nora tool / Generic PREPARE | DETERMINISTICALLY PROVEN (prior + conservé) |
| Select sans cycle | **DETERMINISTICALLY PROVEN** (Fake Cursor) |
| Start/Result sans cycle | **DETERMINISTICALLY PROVEN** (Fake settle) |
| HD–mission resume | NOT PROVEN |
| Cursor REAL / OpenAI LIVE | **NON AUTORISÉ** ce cycle |
| END-TO-END REAL / P6 GLOBAL / RUNTIME V3 | HORS SCOPE |

## 12. Autorité préservée

- AUTHORIZED revalidation at Select (G-D4 binding).
- Structural HD fail-closed at PREPARE.
- Confirmation / scope / ActionPolicy / AgentCapability inchangés côté OA.
- Aucune HumanDecision fabriquée.
- Aucune élévation d'autorité Nora.
- Cycle clos ne peut pas être muté via EC encore lié.

## 13. OA compatibility

- `SelectExecutionAgent` / `StartExecution` **réutilisés** (pas de moteur parallèle).
- OA `selectionProfile` enum toujours requis — carrier technique documenté.
- `startExecution` `cycleInstanceId ?? ""` **non modifié** (continuation docs_write) — dette qualifiée ; path Generic Cursor Fake n'a pas exigé continuation pré-commit.

## 14. Dette / exit

| Dette | Exit |
| --- | --- |
| HD–mission structural resume | Design binding HD→mission (gate Morris distinct) |
| `cycleInstanceId ?? ""` Start continuation | Adapter OA continuation à cycle optionnel si docs_write sans cycle requis |
| Carrier OA `standard` sans cycle | Documenté ; retirer si OA accepte sélection sans SelectionProfile méthodologique |
| F2/ACGC admissions spécialisées | Trajectoire ultérieure Option B (hors ce slice) |

## 15. Gates Morris

1. Review ChatGPT CRITICAL de ce Delivery (handoff).
2. HD–mission resume (si priorité structurante).
3. Éventuelle évolution OA SelectionProfile enum (non urgente — carrier suffit).
4. Intégration Product Git / PR — **GO distinct**.

## 16. Réserves

- Carrier `selectionProfile="standard"` sans cycle est **technique OA**, pas une affirmation méthodologique Standard.
- Product handoff CursorExecutionReport post-Result peut encore échouer sur certains paths ; Attempt OA `succeeded` prouve Select→Start→Result.
- UI TrajectorySurface n'a pas été modifiée ; Select resolve inspection server-side quand binding omis.

## 17. Git Truth final (pré-handoff)

Voir section 2 status. Après publish handoff : candidat dirty inchangé hors Review Pack ; origin/main inchangé ; :3020 untouched.

## 18. Instruction ChatGPT

Lire depuis Git :

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer :

**SFIA STUDIO — PROJECT-SCOPED GENERIC CURSOR EXECUTION CRITICAL DELIVERY CODE REVIEW.**

Vérifier : accès indépendant des profils ; cycle facultatif ; aucun cycle artificiel ; aucune élévation d'autorité ; aucune Confirmation supprimée sans politique ; sélection par capacités ; réutilisation OA ; S8 sans cycle ; Project binding ; absence architecture parallèle ; non-régressions ; preuves déterministes ; limites REAL ; absence d'intégration Product.
