# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 16:19:38 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | EVOL / Delivery bornée Pre-M6 |
| **Capacité v3 principale** | V3-F11 / V3-F12 |
| **e2e supportée** | V3-F05 |
| **Associées** | V3-F14 / V3-F15 ; V3-F10 dette recovery |
| **Milestone** | PRE-M6 |
| **Etat Pre-M6** | NON COMPLETE |
| **Runtime v3** | NON ADOPTED |
| **CKC Cycle 8** | pas de pilote détaillé ; fallback carte 15 cycles + méthode Delivery §4.8 + template v2.6 |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree candidat** | `.../worktrees/sfia-studio-m4-real-off` |
| **Branche candidat** | `delivery/sfia-studio-pre-m6-ui-option-a` (locale only) |
| **Architecture** | ARCH-WOP-1 ADOPTED FOR THIS DELIVERY |

## GO Morris exact

```
ADOPT ARCH-WOP-1

et

GO MORRIS —
CYCLE 8 DELIVERY
EXECUTION WINDOW + OBSERVATION POLICY
ZERO REAL
```

Décisions consommées : D-EXEC-TIME-01 → D-EXEC-TIME-10.

## Verdict

PASS —
CYCLE 8 DELIVERY
EXECUTION WINDOW + OBSERVATION POLICY IMPLEMENTED CANDIDATE
ARCH-WOP-1 IMPLEMENTED FOR PRE-M6 BOUNDED PATH
SINGLE EXECUTION WINDOW / SINGLE DEADLINE ENFORCED
O3 SAME-ATTEMPT OBSERVATION IMPLEMENTED
AUTO PAGE-OPEN + MANUAL REFRESH IMPLEMENTED
ONE-LAUNCH INVARIANT PRESERVED
DETERMINISTIC BOUNDARY PARITY UPDATED
DETERMINISTIC TESTS PASS
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR CYCLE 9 DETERMINISTIC QA
NOT READY FOR REAL

IMPLEMENTED CANDIDATE ≠ V3 runtime IMPLEMENTED / ADOPTED.

## Local Git Truth PRE (measured, not invented)

| Ref | SHA |
|-----|-----|
| HEAD candidat | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | `2663c6402462c9cd23dea110ac516d814709a113` |
| parent architecture handoff blob | `f8e34add3168e755b7861454de94f69f1f879f2a` (Cycle 6 READY FOR MORRIS ARCHITECTURE DECISION / ARCH-WOP-1 recommended) |

Branche : `delivery/sfia-studio-pre-m6-ui-option-a`

PRE staged : vide

PRE dirty : 88 lignes (50 M + 38 ??) — dirty historique Option A, non écrasé

PRE candidate manifest (app scope) : 986 files, sha256 `df2fa11a1b358dffd281e01764e608fc365fccb4d3c745c07613b14702bc02b4`

Historique Cycle 9 manifest 983 / `4633999fae3a7afb…` : delta expliqué (.gitignore, public/icons/hero-orb.svg, tsconfig.tsbuildinfo). Pas un STOP.

origin/main n'a pas bougé pendant le cycle. Aucun delta `projects/sfia-studio/app/**` vs main hors working tree candidat (HEAD reste derrière main sur docs méthode PR #360).

## Local Git Truth POST

| Ref | SHA |
|-----|-----|
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` (inchangé — aucun commit projet) |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` (inchangé) |
| origin/sfia/review-handoff | `2663c6402462c9cd23dea110ac516d814709a113` avant publication L3 de CE pack |

POST staged : vide

POST dirty : 110 lignes = 88 historiques + 22 ajouts attribuables à ce cycle (17 M tracked clean→dirty + 5 ?? créés ; le reste des mutations est à l'intérieur de ?? / M déjà présents)

POST candidate manifest : 994 files, sha256 `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`

## Convergence Pre-check

KEEP : OA Native Backbone ; ExecutionContract ; ExecutionAttempt ; HumanDecision ; Confirmation ; Gate D ; one-launch ; safety journal CREATED/LAUNCHED ; processRef ; RealExecutionLaunchPort ; ProcessRunner invoke ≠ observe/awaitCompletion ; same-Attempt continuation ; Evidence / ReviewBundle ; Nora/LPS ; deterministic fake = substitution de frontière externe seulement.

ADAPT : execution-window ownership ; schema/fingerprint ; resolver serveur ; snapshot durée ; timeout propagation ; Attempt deadline ; completeBoundedReadOnlyLaunch ; O3 ; UI auto-observation ; deterministic boundary ; tests.

FREEZE / RETIRE : gateway default 60_000 ; « maximum 3 refresh » ; observations 200 ms ; forge nowIso startedAt +31 min ; bypass test-only de la machine running/observe/terminal.

DO NOT CREATE : second engine ; worker ; queue ; daemon ; scheduler service ; durable process registry ; parallel Evidence path ; special README REAL path.

Aucune mutation de Roadmap / Build Doctrine / method / prompts / CI / package.json / migrations SQL / DB canonique.

## SNAPSHOT_OWNER

`ExecutionAttempt.executionWindowClass` + `ExecutionAttempt.resolvedMaxDurationMs`

Lieu d'écriture : `StartExecution.persistRunningAfterAck` sur le chemin REAL/cursor, après ACK, dans le même persist running.

Pourquoi : plus petit support durable déjà existant (`payload_json` Attempt, pas de nouvelle colonne SQL, pas de journal parallèle). TriggerAttemptTimeout lit CET Attempt. ProcessRunner reçoit la même `resolvedMaxDurationMs` via `RealLaunchRequest.timeoutMs`.

Fixture StartExecution : pas de snapshot (conserve T-A5 policy 30 min). Bounded M3 REAL-shaped : snapshot obligatoire.

Legacy contrat sans classe : `resolveExecutionWindowForStart(..., defaultClassIfMissing=standard)` au Start seulement — le contrat n'est pas réécrit, pas re-fingerprinted.

## Mapping window (table unique)

Module unique : `projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts`

| Classe | ms |
|--------|----|
| short | 5 * 60 * 1000 |
| standard | 15 * 60 * 1000 |
| long | 30 * 60 * 1000 |
| extended | 60 * 60 * 1000 |

Default bounded read-only M3 = standard = 15 min (`boundedReadOnlyM3ResolutionProfile`).

Cap Pre-M6 = 60 min. `assertResolvedTimeoutMs` refuse 0 / non-entier / > cap. Aucun timeout numérique libre client. >60 min = futur contrat/gate, hors cycle.

UI / gateway / fake / tests métier importent ce module — pas de table dupliquée.

## Deadline semantics

deadline = startedAt + resolvedMaxDurationMs (snapshot Attempt)

Même valeur pour :

- `ProcessRunnerInvokeInput.timeoutMs`
- `TriggerAttemptTimeout` (fallback policy.attemptTimeoutMs seulement si snapshot absent — fixture T-A5)
- orchestration terminale

Forge historique `nowIso = startedAt + 31 min` retirée de `completeBoundedReadOnlyLaunch`.

Si `RealProcessObservation.timedOut=true` et Clock encore avant deadline (double test immédiat) : TriggerAttemptTimeout → TIMEOUT_NOT_REACHED puis fallback `RecordExecutionFailure` stopReason EXECUTION_TIMEOUT (T-R3-TIMEOUT accepte timeout|failed). Pas de retry, pas de second Attempt, pas de nouvelle Confirmation, pas de nouveau Gate D.

## O3 exact implémenté

`observationSchedule.ts` pur / table-driven :

- early probes : 5 s, 15 s, 30 s, 60 s (si < deadline)
- ensuite interval = clamp(window * 0.10, 30 s, 120 s)
- observation forcée à la deadline
- calcul depuis startedAt + window + now + lastObserved — pas depuis le nombre de clics
- refresh manuel ne reset ni deadline ni fenêtre

## UI auto + manual

`useRunningAttemptO3Observation` dans `useProductConversation` :

- enabled = runningAttemptRefreshable (même prédicat produit que le bouton, sans le busy du bouton)
- appelle EXACTEMENT `refreshResolvedM3RunningAttempt` → `invokeCanonicalResolvedM3Path`
- in-flight : `f3Busy` / `f3InFlightRef` existants
- stop unmount / terminal / non refreshable
- bouton « Actualiser le résultat » conservé
- pas de nouvel endpoint
- pas de launch depuis le timer

Réserve G-UX-09 : reload session UI process-local — non rouverte. Si running Attempt se rehydrate naturellement, O3 reprend ; sinon réserve existante.

## RealLaunchRequest / gateway

`timeoutMs: number` requis. Gateway : plus de `defaultTimeoutMs ?? 60_000`. Fail-closed si absent/invalide (`REAL_LAUNCH_FAILED`). Transmet EXACTEMENT à ProcessRunner.

R1-10 inversé : assert pass-through 15 min, plus 60_000 produit.

CursorCliLaunchGateway = alias de StudioCursorRealLaunchGateway — même chemin.

ZERO REAL ce cycle : logique testée par doubles déterministes uniquement.

## Deterministic boundary D1–D5

`TestOnlyDeterministicCursorLaunchPort` stocke `request.timeoutMs`.

- D1 pendingObserveLimit 0 → premier observe terminal success
- D2 pending 2 puis success (déjà orch product path)
- D3 fake nowMs ≥ timeout → timedOut, launchCallCount=1
- D4 completionExitCode != 0 → failure, pas d'Evidence succès (product path aussi)
- D5 observe unknown → null ; pas de succès inventé

Même policy window/clock que le chemin REAL. Interdit : fixture-specific succeeded immédiat.

## One-launch

T-R3-ASYNC-CONTINUATION PASS : Attempt=1, launchCallCount=1, CREATED=1, LAUNCHED=1, processRef stable, snapshot standard 15 min, timeoutMs launch=15 min.

## Tests

Targeted PASS : executionWindowPolicy, observationSchedule, executionWindowDeadline, R1/R2/R3, O3 hook, deterministicCursorBoundary, T-R3 residual, runningAttemptRefresh, lifecycleFoundation timeout.

Full Vitest : 1854 passed / 0 failed / 131 skipped (13 fichiers FinOps Postgres `describe.skip` si DATABASE_URL unset — historique, hors chemin Pre-M6, 0 skip nouveau).

typecheck PASS ; lint PASS (`No ESLint warnings or errors`) ; build PASS.

Browser deterministic : PASS 1/1 en 8.7s

```
e2e/studio-option-a-deterministic-cursor-boundary.spec.ts:93 B1–B4 running → pending refresh → terminal → reload
```

Env : SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1 + QA control + fake conversation ; SFIA_STUDIO_CURSOR_REAL unset ; isolated sqlite ; port 3028 FORCE_WEBSERVER.

IDs campaign :

- projectId `prj:daa2cba0-1e78-4137-afd3-8ae88af49203`
- decisionId `dec:f2:e92f8d03-3f24-49f7-a5c7-e23f9a791845`
- executionContractId `xct:m3-res:dec:f2:e92f8d03-3f24-49f7-a5c7-e23f9a791845`
- attemptId `xat:m3:m3-res:dec:f2:e92f8d03-3f24-49f7-a5c7-e23f9a791845`

B7 timeout browser : non démontré sur chemin produit parallèle (interdit). Couvert domain/integration (executionWindowDeadline + D3). Réserve bornée non bloquante.

## Fake/Real qualification

Applicable : OUI

Frontière REAL : Cursor CLI subprocess

Fake : deterministic Cursor external-boundary substitution

Parité : même contrat / class / snapshot / Attempt / deadline / observation / terminal / Evidence

Niveau d'entrée browser : DETERMINISTIC PROVEN

Cursor spawn ACK : REAL BOUNDARY partiellement observé historiquement

Full bounded REAL loop : NOT PROVEN

Max ce cycle : DETERMINISTIC PROVEN

DETERMINISTIC PROVEN ≠ READY FOR REAL

## ZERO REAL accounting

| Compte | Valeur |
|--------|--------|
| REAL Cursor launch count | 0 |
| OpenAI LIVE calls | 0 |
| new REAL Attempt | 0 |
| new REAL worktree | 0 |
| SFIA_STUDIO_CURSOR_REAL | unset |
| OPS1_CURSOR_REAL | unset |

## Historical REAL integrity

FIRST REAL Attempt `xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96` — worktree présent, non nettoyé.

SECOND incomplete `xat:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b` — worktree présent, non nettoyé.

HEAD projet inchangé. Aucun cleanup.

## Debt / reserves / exit

PROCESS-LOCAL REAL RUNNER REGISTRY — V3-F10 technical / resilience debt — accepted temporary for bounded next REAL happy path. Si Next redémarre, observe(processRef) peut devenir null et Attempt rester running. Ce Delivery NE ferme PAS cette dette. Pas de worker/queue.

G-UX-09 reload session : réserve existante, non ouverte.

B7 browser timeout : réserve bornée ; couvert domain.

Schema : champ JSON optionnel additif, pas de bump schemaVersion, pas de migration SQL.

## Anti-claims

INTERDIT et non conclu : END-TO-END REAL PROVEN ; CURSOR REAL BOUNDARY TERMINAL PROVEN ; READY FOR REAL ; PRE-M6 COMPLETE ; M6 AUTHORIZED ; UAT READY ; PRODUCTION READY ; RUNTIME V3 ADOPTED ; GLOBAL V3 ADOPTED ; RECOVERY DURABLE IMPLEMENTED ; WORKER IMPLEMENTED.

## Exact next gate (NON consommé)

```
MORRIS —
ACCEPT / REJECT
CYCLE 8 EXECUTION WINDOW + OBSERVATION POLICY DELIVERY
AND
GO / NO-GO
CYCLE 9 DETERMINISTIC QA
ZERO REAL
```

Aucun GO REAL implicite. Après futur Cycle 9 PASS : nouveau gate Morris séparé avant toute nouvelle preuve REAL.

## Instruction ChatGPT

Lire obligatoirement le handoff distant canonique `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` avant validation du rapport.

## Attribution Cycle 8

Voir listes exactes ci-dessous. Dirty historique Option A non écrasé. Staged vide. Aucun commit projet. Aucun push projet.

Les 3 fichiers tests/e2e déjà ?? PRE et re-mutés n'avaient pas de hash PRE dans l'inventaire involved : POST hash enregistré ; contenu actuel inclus / diff tracked là où git le permet. Le code produit involved a PRE/POST sha256.

ProjectAssistantPanel.tsx / attemptPolicy.ts / composeStudioProductRealBoundary.ts : hash PRE = POST (non mutés).

## Attribution lists

```
FILES_CREATED_BY_THIS_CYCLE
  projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts  sha256=9d4c622d0eceb7bff58c0a64507f6b124c4bda1320c8dfb93caaf01c5e69a033
  projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts  sha256=b99538730339b152f3c2f89897d8751e268b58bec022d4a0f9026259a8d30c51
  projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useRunningAttemptO3Observation.ts  sha256=c3e96b36ff8ada90007cdf198a01402ceb228c7e1aa52b3502a4932d8c3961c9
  projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts  sha256=5993f4ed206bb7f6595210633bca829a1fab8e2ec5f7014201cc8341ddb52d8e
  projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts  sha256=4a9535cdf06460d7822e6f95f7fe5c332e319107922482a7d6b67f6a19ca2f18
  projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts  sha256=df8b7ffe0e9e9d5bbf38fb3e8a52e64c58888de8058bfa7f5a9ca79b92e2f255
  projects/sfia-studio/app/__tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx  sha256=69bea44324ef73ae374a1d80de2b5d55f29cc12aa22114b9afc82b40ae8c5fc3
FILES_MODIFIED_BY_THIS_CYCLE_TRACKED_CLEAN_TO_DIRTY
  projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts  sha256=c22be180f42636d937f2090aa113284b1e6d382c1f330a688ed6d52ca0028fcf
  projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts  sha256=033bfcfab4e51dd5d0e1432e4150a9a2efc018c8134b260a976908c0c8d6a9e7
  projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts  sha256=faa8fd31865951ac4e8bbe059224c4b116901a07fc6dbdef0095a80a9046c820
  projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts  sha256=d5085994747923608ba6d21a9a4c9b36694e995923de3527393b1642da5a806c
  projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts  sha256=33d6e4b398b44760b468605d81660225b26e249d9892fd410c4000f92b272fe8
  projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts  sha256=d51560543f568048a769fe728831b6b8fb74294c09ff59a13cfebee6bb2b8015
  projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts  sha256=4d99afe82a9758a6a0131cfb1c1e6418851d0ca1b5d974af84906f81c3e0e998
  projects/sfia-studio/app/lib/oa/execution-attempt/index.ts  sha256=67c35521f33db769e7cf2ea3f8f493e29f882585ffa72ef16a259a8d9f86c3e0
  projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts  sha256=1fc7ce8723f82be5e6f58511945ff31ee51920f2a6337afd262ba66cc82bd39c
  projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts  sha256=37b68a07cf9c40f3fec619c2bcc607bfffc562cb10ff216fdcdc0fffe92b80ea
  projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts  sha256=e581a3fc798576fcd3a0f8e7c2548ccf646c043e91b737a498a6012355afdb96
  projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts  sha256=5dc12fcd85e55c9e2ed29d3abc11e432ecccf8e4e538bf14ec0e535c4b10b813
  projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts  sha256=d5040b593d3b5d71b7831d58c5d24090c53b4ab8909be6fa92696a93c4ce43e2
  projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts  sha256=1249b3e213963ea9d3866efe5f4e61c0185bdd6f030b6b8ec0cba9ffd8ec1528
  projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts  sha256=a3196341838941b97f2d0d3e4208596b35cf5165c750105bdbc3ae220bbbd98a
  projects/sfia-studio/app/lib/oa/execution-contract/index.ts  sha256=87007aef775817768d0c273bed372fa3d0f7074067a83ad5085d8ca7eab26a43
  projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json  sha256=f24e1bb086dfa0ff9c2e4c2ee36f4e5ff60886e0b28ef70e5dddd8dd4e126bdf
FILES_MODIFIED_BY_THIS_CYCLE_PREEXISTING_DIRTY_HASH_PROVEN
  projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts  PRE=d8bed3530e6d3d12c8ee49d4db79f1c31ebfa23347d139d9abaa7a041905781d POST=447b88add3ad9ab84c24ba88973d8dc954d5a90ec928f184b094113754588d57
  projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts  PRE=df7cc1cb00b80d9c9b777631edce93b7f8b849666ea78ca7c87d1f32ad4e03af POST=8d46ecd21c35a7dce540ee394b5a0f8ad1ba11cc3134f51639b7d27798f0183c
  projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts  PRE=e33f8f870ed785fa051cd86c7994448bfbeaf15c2e2e781db7eb1056274fe6aa POST=ea42d4bc8edd259c43cd057ddb7ba01b17c3279535d4acc1e16c74e5f3953f95
  projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts  PRE=4ea9d9fcf2905aac602e73bb08f893de96b6eb9fe9520d287a9f5e9a2d535b02 POST=7a1a77ee505f91c5047dc78990bdac5dbdd4ebbb75a81843192059da12bfce13
  projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts  PRE=136ae3f962e8f4be8de4316459d1bb3b37b2d4998b1c95e1993bd24608907fb3 POST=b4722a778f6bb39a0b0b937d193fd54f25d81b700b7d1c537158cc908ca852f0
  projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts  PRE=a3f78f9d86f7c370f02a2a3b20f6a4ff0c7cd17b295fc5f7f675f566fb62b95a POST=16914f3795c5e6256ca8a731b38719aa46874f846e9492a23fddba40029d46e4
  projects/sfia-studio/app/features/project-assistant/f3/types.ts  PRE=d1930c7809af4d28085c5c8da381fcb793f549fe76d7e99020a0ea5de1d068da POST=cd12f5cd1195f88c4390a604bef73a21e046012accc88e5e98fd7a137365cbb4
  projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts  PRE=9dcd16aed227d55920ec3866f1177e0bc41c48dbf3b0576734910716ecd54f90 POST=a55d4eb9f05f39b1002617a4ba0edf5d35c1e64c570c23e19b577aaf24dd58b3
FILES_ALSO_MUTATED_PREEXISTING_UNTRACKED_NO_PRE_HASH
  projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts  POST=d375d9ddb7c16f6f70fca6e60bd8dd13904443485fbdd1d1de4c08780a078746
  projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts  POST=76a1623e2cdc82e0a8584f5e78b02d3ae881d6acfa62654953fc547b218de8bd
  projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts  POST=817e548b7405adad43d982bcd809629bc40281f297dd6c516a82994aeb071a3c
PREEXISTING_INVOLVED_UNTOUCHED_HASH_PROVEN
  projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptPolicy.ts  PRE=POST=e3cf70a7036166f4de83fcd28a79786c317467ec471436d5fe482cb313725753
  projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts  PRE=POST=c7b4bb7d70e8078dd74865c37c3add2790972508bae74448aab0ad22faec02a4
  projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx  PRE=POST=baaa0082157df2de815c7a0adcba1ee0712d70e4d9cb2c1de443a3249b7970b8
```

## DIFF COMPLET — tracked files that were clean at PRE (git diff vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
index cb9b4bc..c13a249 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
@@ -207,6 +207,7 @@ describe("M4 REAL-OFF correction R1", () => {
       adapterRef: gateway.gatewayId,
       correlationId: "cor:1",
       baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+      timeoutMs: 15 * 60 * 1000,
     });
     expect(result.outcome).toBe("reject");
     if (result.outcome === "reject") {
@@ -215,7 +216,7 @@ describe("M4 REAL-OFF correction R1", () => {
     expect(runner.calls).toHaveLength(0);
   });

-  it("R1-10 pre-reproof bounding: argv --mode ask once + deterministic README instruction; timeout 60000", async () => {
+  it("R1-10 pre-reproof bounding: argv --mode ask once + deterministic README instruction; timeout is request.timeoutMs", async () => {
     // Gateway-local enablement via flag constant — does not set process.env.
     // FakeProcessRunner only; no OS Cursor spawn.
     expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
@@ -230,7 +231,6 @@ describe("M4 REAL-OFF correction R1", () => {
         [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
       },
       resolveCursorBin: () => "/tmp/fake-cursor-bin",
-      // Omit defaultTimeoutMs — product default must remain 60_000.
     });

     const result = await gateway.launch({
@@ -245,6 +245,7 @@ describe("M4 REAL-OFF correction R1", () => {
       action: "cursor.read_only.inspect",
       target: "workspace.isolated.read",
       scope: "studio.m4.real_off",
+      timeoutMs: 15 * 60 * 1000,
     });

     expect(result.outcome).toBe("ack");
@@ -253,7 +254,7 @@ describe("M4 REAL-OFF correction R1", () => {
     expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");

     const call = runner.calls[0];
-    expect(call.timeoutMs).toBe(60_000);
+    expect(call.timeoutMs).toBe(15 * 60 * 1000);
     expect(call.executable).toBe("/tmp/fake-cursor-bin");
     expect(call.cwd).toBe(workspacePath);

@@ -293,4 +294,41 @@ describe("M4 REAL-OFF correction R1", () => {
     expect(instruction).not.toMatch(/lecture seule bornée/);
     expect(instruction).not.toMatch(/inspect(?:ion)?\s+(?:globale|libre|workspace)/i);
   });
+
+  it("R1-11 fail-closed: missing or invalid timeoutMs never invents 60_000", async () => {
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
+    const runner = new FakeProcessRunner({ processRef: "proc:sim:r1-11" });
+    const gateway = new StudioCursorRealLaunchGateway({
+      processRunner: runner,
+      workspacePort: new FakeRealExecutionWorkspacePort({
+        workspacePath: "/tmp/fake-exec-root/wt-r1-11",
+      }),
+      env: {
+        ...process.env,
+        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+      },
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+    });
+    const base = {
+      attemptId: "xat:r1-11",
+      executionContractId: "xct:r1-11",
+      executionContractVersion: 1,
+      semanticFingerprint: "fp:r1-11",
+      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
+      adapterRef: gateway.gatewayId,
+      correlationId: "cor:r1-11",
+      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+    };
+    for (const timeoutMs of [0, -1, 61 * 60 * 1000, Number.NaN]) {
+      const result = await gateway.launch({
+        ...base,
+        timeoutMs,
+      } as never);
+      expect(result.outcome).toBe("reject");
+      if (result.outcome === "reject") {
+        expect(result.detailCode).toBe("REAL_LAUNCH_FAILED");
+      }
+    }
+    expect(runner.calls).toHaveLength(0);
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
index 8fd12c8..843efb0 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
@@ -600,6 +600,7 @@ describe("M4 REAL-OFF correction R2", () => {
       adapterRef: gateway.gatewayId,
       correlationId: "cor",
       baseHeadSha: M4_TEST_BASE_HEAD_SHA,
+      timeoutMs: 15 * 60 * 1000,
     });
     expect(result.outcome).toBe("reject");
     expect(workspace.prepares).toHaveLength(0);
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
index 8e9f4e5..bb20619 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
@@ -110,6 +110,7 @@ describe("M4 REAL-OFF correction R3", () => {
       adapterRef: gateway.gatewayId,
       correlationId: "cor",
       baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+      timeoutMs: 15 * 60 * 1000,
     });
     expect(result.outcome).toBe("reject");
     expect(runner.calls).toHaveLength(0);
@@ -132,6 +133,7 @@ describe("M4 REAL-OFF correction R3", () => {
       adapterRef: gateway.gatewayId,
       correlationId: "cor",
       baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+      timeoutMs: 15 * 60 * 1000,
     });
     expect(result.outcome).toBe("reject");
     if (result.outcome === "reject") {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 576a400..b7de0f8 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -32,7 +32,12 @@ import type {
   ExecutionContract,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
-import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+import {
+  computeExecutionContractSemanticFingerprint,
+  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
+  resolveExecutionWindowForStart,
+  type ResolvedExecutionWindow,
+} from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
@@ -662,6 +667,17 @@ export class StartExecution {
       });
     }

+    const window = resolveExecutionWindowForStart({
+      executionWindowClass: contract.executionWindowClass,
+      defaultClassIfMissing:
+        DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
+    });
+    if (!window.ok) {
+      return fail("ATTEMPT_INVALID", window.reason, {
+        executionContractId: contract.executionContractId,
+      });
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -676,6 +692,7 @@ export class StartExecution {
         action: contract.action,
         target: contract.target,
         scope: contract.scope,
+        timeoutMs: window.resolvedMaxDurationMs,
       });
     } catch {
       return this.failRealLaunch({
@@ -793,6 +810,7 @@ export class StartExecution {
       correlationId,
       started,
       adapterIdForAudit: this.realLaunchPort.gatewayId,
+      window,
       fail,
     });
   }
@@ -842,6 +860,7 @@ export class StartExecution {
     correlationId: string;
     started: number;
     adapterIdForAudit: string;
+    window?: ResolvedExecutionWindow;
     fail: (
       detailCode: AttemptDetailCode,
       internalCauseRef: string,
@@ -859,6 +878,7 @@ export class StartExecution {
       correlationId,
       started,
       adapterIdForAudit,
+      window,
       fail,
     } = input;

@@ -870,6 +890,12 @@ export class StartExecution {
       startedAt: timestamp,
       updatedAt: timestamp,
       version: attempt.version + 1,
+      ...(window
+        ? {
+            executionWindowClass: window.executionWindowClass,
+            resolvedMaxDurationMs: window.resolvedMaxDurationMs,
+          }
+        : {}),
     };
     try {
       const persist = async () => {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
index 0600f33..89dfec3 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
@@ -3,7 +3,8 @@
  *
  * The ONLY auto-safety of this foundation, and it is deterministic: an
  * explicit command evaluated against an injected Clock. There is no scheduler,
- * no worker and no queue. The deadline is `startedAt + policy.attemptTimeoutMs`.
+ * no worker and no queue. The deadline is
+ * `startedAt + (attempt.resolvedMaxDurationMs ?? policy.attemptTimeoutMs)`.
  *
  * Before the deadline the command refuses. After the deadline the Attempt
  * becomes `timeout` and the contract `failed`. It is idempotent once applied.
@@ -134,8 +135,9 @@ export class TriggerAttemptTimeout {
       if (!attempt.startedAt) {
         return fail("ATTEMPT_STATE_CONFLICT", "attempt_not_started");
       }
-      const deadlineMs =
-        Date.parse(attempt.startedAt) + this.policy.attemptTimeoutMs;
+      const windowMs =
+        attempt.resolvedMaxDurationMs ?? this.policy.attemptTimeoutMs;
+      const deadlineMs = Date.parse(attempt.startedAt) + windowMs;
       if (Date.parse(timestamp) < deadlineMs) {
         return fail("TIMEOUT_NOT_REACHED", "deadline_not_reached");
       }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
index 3b7140c..6ed8328 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
@@ -17,6 +17,11 @@ import type {
   SelectionStrategy,
   TerminalExecutionAttemptStatus,
 } from "./types";
+import {
+  isExecutionWindowClass,
+  PRE_M6_EXECUTION_WINDOW_CAP_MS,
+  PRE_M6_EXECUTION_WINDOW_MS,
+} from "@/lib/oa/execution-contract";

 /** Modeled identifier pattern (common/identifier.schema.json). */
 export const OA_IDENTIFIER_PATTERN =
@@ -610,6 +615,41 @@ export function validateAttemptShape(
   if (attempt.errorRef !== undefined && !isOaIdentifier(attempt.errorRef)) {
     return { detailCode: "ATTEMPT_INVALID", reason: "error_ref_invalid" };
   }
+  const hasClass = attempt.executionWindowClass !== undefined;
+  const hasResolved = attempt.resolvedMaxDurationMs !== undefined;
+  if (hasClass !== hasResolved) {
+    return {
+      detailCode: "ATTEMPT_INVALID",
+      reason: "execution_window_snapshot_incomplete",
+    };
+  }
+  if (hasClass && hasResolved) {
+    if (!isExecutionWindowClass(attempt.executionWindowClass)) {
+      return {
+        detailCode: "ATTEMPT_INVALID",
+        reason: "execution_window_class_invalid",
+      };
+    }
+    if (
+      !Number.isInteger(attempt.resolvedMaxDurationMs) ||
+      (attempt.resolvedMaxDurationMs as number) <= 0 ||
+      (attempt.resolvedMaxDurationMs as number) > PRE_M6_EXECUTION_WINDOW_CAP_MS
+    ) {
+      return {
+        detailCode: "ATTEMPT_INVALID",
+        reason: "resolved_max_duration_ms_invalid",
+      };
+    }
+    if (
+      PRE_M6_EXECUTION_WINDOW_MS[attempt.executionWindowClass] !==
+      attempt.resolvedMaxDurationMs
+    ) {
+      return {
+        detailCode: "ATTEMPT_INVALID",
+        reason: "resolved_max_duration_ms_class_mismatch",
+      };
+    }
+  }
   return null;
 }

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 14740c5..7d89d30 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -15,9 +15,12 @@
  */

 import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
-import type { AuthorityClass } from "@/lib/oa/execution-contract";
+import type {
+  AuthorityClass,
+  ExecutionWindowClass,
+} from "@/lib/oa/execution-contract";

-export type { ActorReference, ProvenanceRecord, AuthorityClass };
+export type { ActorReference, ProvenanceRecord, AuthorityClass, ExecutionWindowClass };

 export const EXECUTION_ATTEMPT_SCHEMA_VERSION = "0.2.0-oa" as const;
 export const AGENT_DESCRIPTOR_SCHEMA_VERSION = "0.1.0-oa" as const;
@@ -129,6 +132,12 @@ export type ExecutionAttempt = {
   irreversibleEffectsPossible?: boolean;
   updatedAt?: string;
   launchedAt?: string;
+  /**
+   * Snapshotted at StartExecution (ARCH-WOP-1). Immutable for this Attempt.
+   * Source of ProcessRunner timeoutMs and TriggerAttemptTimeout deadline.
+   */
+  executionWindowClass?: ExecutionWindowClass;
+  resolvedMaxDurationMs?: number;
 };

 /**
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 2b74f41..8d530d4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -57,6 +57,15 @@ export * from "./ports/realLaunchSafetyJournalPort";

 export { SelectExecutionAgent } from "./application/selectExecutionAgent";
 export { StartExecution, extractContractBaseHeadSha } from "./application/startExecution";
+export {
+  o3LaterIntervalMs,
+  o3ObservationScheduleMs,
+  nextO3ObservationDelayMs,
+  attemptDeadlineMs,
+  O3_EARLY_PROBE_OFFSETS_MS,
+  O3_MIN_INTERVAL_MS,
+  O3_MAX_INTERVAL_MS,
+} from "./application/observationSchedule";
 export {
   GrantRealExecutionGate,
   GrantGateD,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index f46b4ef..8683852 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -22,13 +22,13 @@ import type {
 } from "../ports/realExecutionLaunchPort";
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
+import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
   readonly workspacePort: RealExecutionWorkspacePort;
   readonly env?: NodeJS.ProcessEnv;
   readonly resolveCursorBin?: () => string | null;
-  readonly defaultTimeoutMs?: number;
 };

 /** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
@@ -63,7 +63,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   private readonly workspacePort: RealExecutionWorkspacePort;
   private readonly env: NodeJS.ProcessEnv;
   private readonly resolveBin: () => string | null;
-  private readonly timeoutMs: number;
   /**
    * Fallback only when the runner has no observe/awaitCompletion.
    * Live observation source is the runner registry when present
@@ -86,7 +85,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     this.env = options.env ?? process.env;
     this.resolveBin =
       options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
-    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
   }

   async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
@@ -126,6 +124,17 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

+    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "resolved_timeout_ms_required",
+        realProcessInvoked: false,
+        detailCode: "REAL_LAUNCH_FAILED",
+      };
+    }
+
     const baseHeadSha =
       request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
     if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
@@ -213,7 +222,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         executable: bin,
         cwd: workspacePath,
         argv,
-        timeoutMs: this.timeoutMs,
+        timeoutMs: request.timeoutMs,
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 22c25d2..ab16b33 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -24,6 +24,11 @@ export type RealLaunchRequest = {
   readonly action?: string;
   readonly target?: string;
   readonly scope?: string;
+  /**
+   * Snapshotted resolved execution window (ARCH-WOP-1). Required.
+   * Gateway enforces this value and MUST NOT invent a default.
+   */
+  readonly timeoutMs: number;
 };

 export type RealLaunchAck = {
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
index e46388c..800b32f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
@@ -41,6 +41,7 @@ type BuildSnapshot = {
   scope: string;
   requiredAuthority: AuthorityClass;
   reversibility: Reversibility;
+  executionWindowClass: BuildExecutionContractRequest["executionWindowClass"];
   idempotencyKey: string;
   correlationId: string;
   status: "draft" | "proposed";
@@ -144,6 +145,7 @@ export class BuildExecutionContract {
         scope: request.scope,
         requiredAuthority: request.requiredAuthority,
         reversibility: request.reversibility,
+        executionWindowClass: request.executionWindowClass,
         idempotencyKey: request.idempotencyKey,
         correlationId,
         status: request.status ?? "draft",
@@ -170,6 +172,7 @@ export class BuildExecutionContract {
         stopConditions: cloned.stopConditions,
         evidenceRequirements: cloned.evidenceRequirements,
         reversibility: snap.reversibility,
+        executionWindowClass: snap.executionWindowClass,
         idempotencyKey: snap.idempotencyKey,
         correlationId: snap.correlationId,
         status: snap.status,
@@ -201,6 +204,7 @@ export class BuildExecutionContract {
           stopConditions: cloned.stopConditions,
           evidenceRequirements: cloned.evidenceRequirements,
           reversibility: snap.reversibility,
+          executionWindowClass: snap.executionWindowClass,
           status: snap.status,
         });
         const existingFp = contractIdempotencyFingerprint({
@@ -215,6 +219,7 @@ export class BuildExecutionContract {
           stopConditions: byIdem.stopConditions,
           evidenceRequirements: byIdem.evidenceRequirements,
           reversibility: byIdem.reversibility,
+          executionWindowClass: byIdem.executionWindowClass,
           status: byIdem.status,
         });
         if (fp === existingFp) {
@@ -338,6 +343,9 @@ export class BuildExecutionContract {
         stopConditions: cloned.stopConditions,
         evidenceRequirements: cloned.evidenceRequirements,
         reversibility: snap.reversibility,
+        ...(snap.executionWindowClass
+          ? { executionWindowClass: snap.executionWindowClass }
+          : {}),
         idempotencyKey: snap.idempotencyKey,
         correlationId: snap.correlationId,
         status: snap.status,
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
index 932d390..77ad7a1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
@@ -43,6 +43,7 @@ type SupersedeSnapshot = {
   scope: string | undefined;
   requiredAuthority: AuthorityClass | undefined;
   reversibility: Reversibility | undefined;
+  executionWindowClass: SupersedeExecutionContractRequest["executionWindowClass"];
   idempotencyKey: string | undefined;
   adapterExportRef: string | undefined;
   status: "draft" | "proposed";
@@ -167,6 +168,7 @@ export class SupersedeExecutionContract {
         scope: request.scope,
         requiredAuthority: request.requiredAuthority,
         reversibility: request.reversibility,
+        executionWindowClass: request.executionWindowClass,
         idempotencyKey: request.idempotencyKey,
         adapterExportRef: request.adapterExportRef,
         status: initialStatus,
@@ -217,6 +219,8 @@ export class SupersedeExecutionContract {
       const action = snap.action ?? prior.action;
       const target = snap.target ?? prior.target;
       const reversibility = snap.reversibility ?? prior.reversibility;
+      const executionWindowClass =
+        snap.executionWindowClass ?? prior.executionWindowClass;
       // Explicit overrides (including empty arrays) take precedence — no silent fallback.
       const decisionRefs =
         request.decisionRefs !== undefined
@@ -257,6 +261,7 @@ export class SupersedeExecutionContract {
         stopConditions,
         evidenceRequirements,
         reversibility,
+        executionWindowClass,
         idempotencyKey,
         correlationId,
         status: snap.status,
@@ -329,6 +334,7 @@ export class SupersedeExecutionContract {
         stopConditions,
         evidenceRequirements,
         reversibility,
+        ...(executionWindowClass ? { executionWindowClass } : {}),
         idempotencyKey,
         correlationId,
         status: snap.status,
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
index 76da742..53b01f1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
@@ -9,6 +9,10 @@ import type {
   Ta4ExecutionContractStatus,
   Ta5ExecutionContractStatus,
 } from "./types";
+import {
+  isExecutionWindowClass,
+  type ExecutionWindowClass,
+} from "./executionWindowPolicy";

 /** Modeled identifier pattern (common/identifier.schema.json). */
 export const OA_IDENTIFIER_PATTERN =
@@ -259,6 +263,7 @@ export function validateBuildFields(input: {
   stopConditions: string[];
   evidenceRequirements: string[];
   reversibility: Reversibility;
+  executionWindowClass?: ExecutionWindowClass;
   idempotencyKey: string;
   correlationId: string;
   status: "draft" | "proposed";
@@ -331,6 +336,15 @@ export function validateBuildFields(input: {
       reason: "reversibility_invalid",
     };
   }
+  if (
+    input.executionWindowClass !== undefined &&
+    !isExecutionWindowClass(input.executionWindowClass)
+  ) {
+    return {
+      detailCode: "CONTRACT_INVALID",
+      reason: "execution_window_class_invalid",
+    };
+  }
   if (
     typeof input.idempotencyKey !== "string" ||
     input.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
@@ -436,6 +450,7 @@ export function contractIdempotencyFingerprint(input: {
   evidenceRequirements: string[];
   reversibility: Reversibility;
   status: "draft" | "proposed" | string;
+  executionWindowClass?: ExecutionWindowClass;
 }): string {
   const stableJoin = (values: string[]) => [...values].sort().join(",");
   return [
@@ -451,5 +466,6 @@ export function contractIdempotencyFingerprint(input: {
     stableJoin(input.evidenceRequirements),
     input.reversibility,
     input.status,
+    input.executionWindowClass ?? "",
   ].join("|");
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
index 42734de..5ff39be 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
@@ -33,6 +33,7 @@ export type ExecutionContractSemanticMaterial = {
   stopConditions: string[];
   evidenceRequirements: string[];
   reversibility: ExecutionContract["reversibility"];
+  executionWindowClass?: ExecutionContract["executionWindowClass"];
   idempotencyKey: string;
   supersedesExecutionContractId?: string;
   supersessionReason?: string;
@@ -60,6 +61,7 @@ export function executionContractSemanticMaterial(
     | "stopConditions"
     | "evidenceRequirements"
     | "reversibility"
+    | "executionWindowClass"
     | "idempotencyKey"
     | "supersedesExecutionContractId"
     | "supersessionReason"
@@ -81,6 +83,9 @@ export function executionContractSemanticMaterial(
     reversibility: contract.reversibility,
     idempotencyKey: contract.idempotencyKey,
   };
+  if (contract.executionWindowClass !== undefined) {
+    material.executionWindowClass = contract.executionWindowClass;
+  }
   if (contract.cycleInstanceId !== undefined) {
     material.cycleInstanceId = contract.cycleInstanceId;
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
index 528957b..ba64a4b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
@@ -15,6 +15,7 @@ import type {
   DoctrinePackageRef,
   ProvenanceRecord,
 } from "@/lib/oa/doctrine";
+import type { ExecutionWindowClass } from "./executionWindowPolicy";

 export type { ActorReference, DoctrinePackageRef, ProvenanceRecord };

@@ -76,6 +77,12 @@ export type ExecutionContract = {
   stopConditions: string[];
   evidenceRequirements: string[];
   reversibility: Reversibility;
+  /**
+   * Governed execution window class (ARCH-WOP-1). Optional on historical
+   * contracts; bounded M3 successors carry `standard`. Duration is resolved
+   * server-side — never a client-supplied timeout.
+   */
+  executionWindowClass?: ExecutionWindowClass;
   idempotencyKey: string;
   correlationId: string;
   status: ExecutionContractStatus;
@@ -106,6 +113,7 @@ export type BuildExecutionContractRequest = {
   stopConditions: string[];
   evidenceRequirements: string[];
   reversibility: Reversibility;
+  executionWindowClass?: ExecutionWindowClass;
   idempotencyKey: string;
   correlationId?: string;
   /** draft (default) or proposed. */
@@ -164,6 +172,7 @@ export type SupersedeExecutionContractRequest = {
   inputs?: Record<string, unknown>;
   expectedOutputs?: string[];
   adapterExportRef?: string;
+  executionWindowClass?: ExecutionWindowClass;
   /** Initial status of successor — draft or proposed. */
   status?: "draft" | "proposed";
   /** Hostile T-A5 injection — ignored / refused. */
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 5727f6b..e496c5a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -26,6 +26,19 @@ export {
   computeExecutionContractSemanticFingerprint,
   executionContractSemanticMaterial,
 } from "./domain/semanticFingerprint";
+export {
+  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
+  EXECUTION_WINDOW_CLASSES,
+  PRE_M6_EXECUTION_WINDOW_CAP_MS,
+  PRE_M6_EXECUTION_WINDOW_MS,
+  assertResolvedTimeoutMs,
+  isExecutionWindowClass,
+  resolveExecutionWindowClass,
+  resolveExecutionWindowForStart,
+  type ExecutionWindowClass,
+  type ExecutionWindowResolveResult,
+  type ResolvedExecutionWindow,
+} from "./domain/executionWindowPolicy";

 export * from "./ports/executionContractRepository";
 export * from "./ports/executionAudit";
diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
index 4693b8d..7451c13 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
@@ -125,6 +125,16 @@
         "irreversible"
       ]
     },
+    "executionWindowClass": {
+      "type": "string",
+      "enum": [
+        "short",
+        "standard",
+        "long",
+        "extended"
+      ],
+      "description": "Optional governed execution window class (ARCH-WOP-1). Historical contracts omit the field. Bounded M3 successors use standard. Duration is resolved server-side and snapshotted on the Attempt at StartExecution — never a client timeout."
+    },
     "idempotencyKey": {
       "type": "string",
       "minLength": 8
```

## Fichiers CRÉÉS par ce cycle (contenu complet)

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts`

```typescript
/**
 * Pre-M6 Execution Window Policy (ARCH-WOP-1).
 *
 * Single server-side mapping: ExecutionWindowClass → resolvedMaxDurationMs.
 * UI / gateway / fake / tests MUST import this module — no duplicated tables.
 *
 * The class lives on ExecutionContract. The resolved duration is snapshotted
 * on the ExecutionAttempt at StartExecution and does not re-derive after start.
 */

export const EXECUTION_WINDOW_CLASSES = [
  "short",
  "standard",
  "long",
  "extended",
] as const;

export type ExecutionWindowClass = (typeof EXECUTION_WINDOW_CLASSES)[number];

export const PRE_M6_EXECUTION_WINDOW_CAP_MS = 60 * 60 * 1000;

export const PRE_M6_EXECUTION_WINDOW_MS = Object.freeze({
  short: 5 * 60 * 1000,
  standard: 15 * 60 * 1000,
  long: 30 * 60 * 1000,
  extended: 60 * 60 * 1000,
} as const satisfies Record<ExecutionWindowClass, number>);

/** Bounded read-only M3 default — D-EXEC-TIME-04. */
export const DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS =
  "standard" as const satisfies ExecutionWindowClass;

export function isExecutionWindowClass(
  value: unknown,
): value is ExecutionWindowClass {
  return (
    typeof value === "string" &&
    (EXECUTION_WINDOW_CLASSES as readonly string[]).includes(value)
  );
}

export type ResolvedExecutionWindow = {
  readonly executionWindowClass: ExecutionWindowClass;
  readonly resolvedMaxDurationMs: number;
};

export type ExecutionWindowResolveFailure = {
  readonly ok: false;
  readonly reason:
    | "execution_window_class_invalid"
    | "execution_window_class_missing"
    | "execution_window_exceeds_pre_m6_cap";
};

export type ExecutionWindowResolveResult =
  | ({ readonly ok: true } & ResolvedExecutionWindow)
  | ExecutionWindowResolveFailure;

/**
 * Resolve a governed class to a duration. Never accepts a free client timeout.
 * Values above the Pre-M6 cap cannot be produced by this table.
 */
export function resolveExecutionWindowClass(
  executionWindowClass: unknown,
): ExecutionWindowResolveResult {
  if (!isExecutionWindowClass(executionWindowClass)) {
    return { ok: false, reason: "execution_window_class_invalid" };
  }
  const resolvedMaxDurationMs =
    PRE_M6_EXECUTION_WINDOW_MS[executionWindowClass];
  if (resolvedMaxDurationMs > PRE_M6_EXECUTION_WINDOW_CAP_MS) {
    return { ok: false, reason: "execution_window_exceeds_pre_m6_cap" };
  }
  return {
    ok: true,
    executionWindowClass,
    resolvedMaxDurationMs,
  };
}

/**
 * StartExecution helper: use the contract class when present; otherwise apply
 * an explicit default (bounded M3 legacy → standard). Never mutates the contract.
 */
export function resolveExecutionWindowForStart(input: {
  executionWindowClass?: unknown;
  defaultClassIfMissing?: ExecutionWindowClass;
}): ExecutionWindowResolveResult {
  if (input.executionWindowClass === undefined) {
    if (!input.defaultClassIfMissing) {
      return { ok: false, reason: "execution_window_class_missing" };
    }
    return resolveExecutionWindowClass(input.defaultClassIfMissing);
  }
  return resolveExecutionWindowClass(input.executionWindowClass);
}

export function assertResolvedTimeoutMs(timeoutMs: unknown): timeoutMs is number {
  return (
    typeof timeoutMs === "number" &&
    Number.isInteger(timeoutMs) &&
    timeoutMs > 0 &&
    timeoutMs <= PRE_M6_EXECUTION_WINDOW_CAP_MS
  );
}
```

### `projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts`

```typescript
/**
 * O3 hybrid observation schedule (ARCH-WOP-1 / D-EXEC-TIME-06).
 *
 * Pure / table-driven. Independent of click count.
 * Early probes then proportional cadence, forced observation at deadline.
 *
 * interval = clamp(window * 0.10, 30s, 120s)
 * early: 5s, 15s, 30s, 60s (when strictly before the window)
 */

export const O3_EARLY_PROBE_OFFSETS_MS = Object.freeze([
  5_000, 15_000, 30_000, 60_000,
] as const);

export const O3_PROPORTIONAL_RATIO = 0.1;
export const O3_MIN_INTERVAL_MS = 30_000;
export const O3_MAX_INTERVAL_MS = 120_000;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function o3LaterIntervalMs(windowMs: number): number {
  return clamp(
    Math.floor(windowMs * O3_PROPORTIONAL_RATIO),
    O3_MIN_INTERVAL_MS,
    O3_MAX_INTERVAL_MS,
  );
}

/** Absolute observation timestamps from startedAt, including t=start and deadline. */
export function o3ObservationScheduleMs(
  startedAtMs: number,
  windowMs: number,
): readonly number[] {
  if (
    !Number.isFinite(startedAtMs) ||
    !Number.isFinite(windowMs) ||
    windowMs <= 0
  ) {
    return [];
  }
  const deadlineMs = startedAtMs + windowMs;
  const times: number[] = [startedAtMs];
  for (const offset of O3_EARLY_PROBE_OFFSETS_MS) {
    const t = startedAtMs + offset;
    if (t < deadlineMs) times.push(t);
  }
  const interval = o3LaterIntervalMs(windowMs);
  let t = times[times.length - 1]!;
  while (t + interval < deadlineMs) {
    t += interval;
    times.push(t);
  }
  if (times[times.length - 1] !== deadlineMs) {
    times.push(deadlineMs);
  }
  return times;
}

/**
 * Delay until the next O3 tick after `lastObservedAtMs`.
 * 0 = observe now (due or overdue). null = no further observation (past deadline).
 */
export function nextO3ObservationDelayMs(input: {
  startedAtMs: number;
  nowMs: number;
  windowMs: number;
  lastObservedAtMs: number;
}): number | null {
  const times = o3ObservationScheduleMs(input.startedAtMs, input.windowMs);
  if (times.length === 0) return null;
  const next = times.find((t) => t > input.lastObservedAtMs);
  if (next === undefined) return null;
  const delay = next - input.nowMs;
  return delay <= 0 ? 0 : delay;
}

export function attemptDeadlineMs(
  startedAtMs: number,
  resolvedMaxDurationMs: number,
): number {
  return startedAtMs + resolvedMaxDurationMs;
}
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useRunningAttemptO3Observation.ts`

```typescript
"use client";

import { useEffect, useRef } from "react";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract/domain/executionWindowPolicy";
import { nextO3ObservationDelayMs } from "@/lib/oa/execution-attempt/application/observationSchedule";

/**
 * Auto-observe a running bounded Attempt while this page/session stays mounted.
 * Uses the same refresh callback as « Actualiser le résultat ».
 * No worker. Stops on unmount, terminal, or non-refreshable.
 */
export function useRunningAttemptO3Observation(input: {
  enabled: boolean;
  startedAt: string | null | undefined;
  resolvedMaxDurationMs: number | null | undefined;
  refresh: () => void;
  inFlight: boolean;
}): void {
  const refreshRef = useRef(input.refresh);
  refreshRef.current = input.refresh;
  const lastObservedAtMsRef = useRef<number | null>(null);

  useEffect(() => {
    if (!input.enabled) {
      lastObservedAtMsRef.current = null;
      return;
    }
    const startedAtMs = input.startedAt ? Date.parse(input.startedAt) : NaN;
    if (!Number.isFinite(startedAtMs)) return;
    const windowMs =
      typeof input.resolvedMaxDurationMs === "number" &&
      input.resolvedMaxDurationMs > 0
        ? input.resolvedMaxDurationMs
        : PRE_M6_EXECUTION_WINDOW_MS.standard;

    if (lastObservedAtMsRef.current === null) {
      lastObservedAtMsRef.current = startedAtMs;
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const arm = () => {
      if (cancelled || input.inFlight) return;
      const delay = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: Date.now(),
        windowMs,
        lastObservedAtMs: lastObservedAtMsRef.current ?? startedAtMs,
      });
      if (delay === null) return;
      timer = setTimeout(() => {
        if (cancelled || input.inFlight) return;
        lastObservedAtMsRef.current = Date.now();
        refreshRef.current();
        if (!cancelled && !input.inFlight) arm();
      }, delay);
    };

    arm();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [
    input.enabled,
    input.startedAt,
    input.resolvedMaxDurationMs,
    input.inFlight,
  ]);
}
```

### `projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts`

```typescript
/**
 * ARCH-WOP-1 — central Pre-M6 execution window catalog.
 * ZERO REAL. Fake clock only. No client timeout.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeExecutionContractSemanticFingerprint,
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  EXECUTION_WINDOW_CLASSES,
  PRE_M6_EXECUTION_WINDOW_CAP_MS,
  PRE_M6_EXECUTION_WINDOW_MS,
  assertResolvedTimeoutMs,
  resolveExecutionWindowClass,
  resolveExecutionWindowForStart,
  type ExecutionWindowClass,
} from "@/lib/oa/execution-contract";
import { boundedReadOnlyM3ResolutionProfile } from "@/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile";
import {
  MORRIS_ACTOR,
  baseBuildRequest,
  buildStack,
  registerMorris,
  seedProject,
  seedAcceptedDecision,
} from "./helpers";

const CATALOG: ReadonlyArray<readonly [ExecutionWindowClass, number]> = [
  ["short", 5 * 60 * 1000],
  ["standard", 15 * 60 * 1000],
  ["long", 30 * 60 * 1000],
  ["extended", 60 * 60 * 1000],
];

const FINGERPRINT_BASE = {
  executionContractId: "xct:window-fp",
  projectId: "prj:window-fp",
  action: "cursor.read_only.inspect",
  target: "workspace.isolated.read",
  scope: "studio.m4.real_off",
  requiredCapabilities: ["cap:cursor.bounded_readonly"],
  requiredAuthority: "N2" as const,
  constraints: ["BOUNDED READ-ONLY"],
  stopConditions: ["AUTHORITY_DENIED"],
  evidenceRequirements: ["evreq:stdout"],
  reversibility: "reversible" as const,
  idempotencyKey: "idem-window-fp-01",
};

describe("Pre-M6 execution window policy (ARCH-WOP-1)", () => {
  it("maps the four governed classes and nothing else", () => {
    expect([...EXECUTION_WINDOW_CLASSES]).toEqual([
      "short",
      "standard",
      "long",
      "extended",
    ]);
    for (const [cls, ms] of CATALOG) {
      expect(PRE_M6_EXECUTION_WINDOW_MS[cls]).toBe(ms);
      const resolved = resolveExecutionWindowClass(cls);
      expect(resolved).toEqual({
        ok: true,
        executionWindowClass: cls,
        resolvedMaxDurationMs: ms,
      });
      expect(ms).toBeLessThanOrEqual(PRE_M6_EXECUTION_WINDOW_CAP_MS);
    }
  });

  it("defaults bounded read-only M3 to standard = 15 min", () => {
    expect(DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS).toBe("standard");
    expect(PRE_M6_EXECUTION_WINDOW_MS.standard).toBe(15 * 60 * 1000);
    expect(boundedReadOnlyM3ResolutionProfile().executionWindowClass).toBe(
      "standard",
    );
  });

  it("rejects invalid classes and cannot generate >60 min", () => {
    expect(resolveExecutionWindowClass("huge")).toEqual({
      ok: false,
      reason: "execution_window_class_invalid",
    });
    expect(resolveExecutionWindowClass(61 * 60 * 1000)).toEqual({
      ok: false,
      reason: "execution_window_class_invalid",
    });
    expect(PRE_M6_EXECUTION_WINDOW_CAP_MS).toBe(60 * 60 * 1000);
    expect(assertResolvedTimeoutMs(PRE_M6_EXECUTION_WINDOW_CAP_MS + 1)).toBe(
      false,
    );
    expect(assertResolvedTimeoutMs(0)).toBe(false);
    expect(assertResolvedTimeoutMs(PRE_M6_EXECUTION_WINDOW_MS.standard)).toBe(
      true,
    );
  });

  it("legacy missing class resolves to standard at Start without rewriting the contract", () => {
    const missing = resolveExecutionWindowForStart({
      defaultClassIfMissing: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    });
    expect(missing).toEqual({
      ok: true,
      executionWindowClass: "standard",
      resolvedMaxDurationMs: 15 * 60 * 1000,
    });
    expect(
      resolveExecutionWindowForStart({ executionWindowClass: undefined }),
    ).toEqual({ ok: false, reason: "execution_window_class_missing" });
  });

  it("fingerprint changes when class changes; legacy omit stays valid", () => {
    const legacy = computeExecutionContractSemanticFingerprint(FINGERPRINT_BASE);
    const standard = computeExecutionContractSemanticFingerprint({
      ...FINGERPRINT_BASE,
      executionWindowClass: "standard",
    });
    const long = computeExecutionContractSemanticFingerprint({
      ...FINGERPRINT_BASE,
      executionWindowClass: "long",
    });
    expect(legacy).toMatch(/^[a-f0-9]{64}$/);
    expect(standard).not.toBe(legacy);
    expect(long).not.toBe(standard);
    expect(long).not.toBe(legacy);
  });

  it("persists class on new contracts and leaves historical omit untouched", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const withClass = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-new",
        idempotencyKey: "idem-window-new-01",
        executionWindowClass: "long",
      }),
    );
    expect(withClass.ok).toBe(true);
    if (!withClass.ok) return;
    expect(withClass.contract.executionWindowClass).toBe("long");
    const reloaded = await stack.execution.contracts.findById("xct:window-new");
    expect(reloaded?.executionWindowClass).toBe("long");

    const legacy = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-legacy",
        idempotencyKey: "idem-window-legacy-01",
      }),
    );
    expect(legacy.ok).toBe(true);
    if (!legacy.ok) return;
    expect(legacy.contract.executionWindowClass).toBeUndefined();

    const invalid = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:window-invalid",
        idempotencyKey: "idem-window-invalid-01",
        executionWindowClass: "huge" as never,
      }),
    );
    expect(invalid.ok).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts`

```typescript
/**
 * ARCH-WOP-1 O3 schedule — fake clock only, no real waits.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract";
import {
  attemptDeadlineMs,
  nextO3ObservationDelayMs,
  o3LaterIntervalMs,
  o3ObservationScheduleMs,
  O3_EARLY_PROBE_OFFSETS_MS,
  O3_MAX_INTERVAL_MS,
  O3_MIN_INTERVAL_MS,
} from "@/lib/oa/execution-attempt";

const WINDOWS = [
  PRE_M6_EXECUTION_WINDOW_MS.short,
  PRE_M6_EXECUTION_WINDOW_MS.standard,
  PRE_M6_EXECUTION_WINDOW_MS.long,
  PRE_M6_EXECUTION_WINDOW_MS.extended,
] as const;

describe("O3 hybrid observation schedule", () => {
  it("uses early 5/15/30/60s probes then clamped 10% cadence, forced at deadline", () => {
    expect([...O3_EARLY_PROBE_OFFSETS_MS]).toEqual([
      5_000, 15_000, 30_000, 60_000,
    ]);
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.short)).toBe(
      O3_MIN_INTERVAL_MS,
    );
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.standard)).toBe(90_000);
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.long)).toBe(
      O3_MAX_INTERVAL_MS,
    );
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.extended)).toBe(
      O3_MAX_INTERVAL_MS,
    );
  });

  it.each(WINDOWS)("schedule for window %s includes start and deadline, no 200ms loop", (windowMs) => {
    const startedAtMs = 1_000_000;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times[0]).toBe(startedAtMs);
    expect(times[times.length - 1]).toBe(startedAtMs + windowMs);
    expect(times.length).toBeGreaterThan(4);
    const gaps = times.slice(1).map((t, i) => t - times[i]!);
    expect(gaps.every((g) => g >= 5_000)).toBe(true);
    expect(gaps.some((g) => g <= 200)).toBe(false);
    expect(times.length).toBeGreaterThan(3);
  });

  it("detects a 20s completion around the 30s probe, not immediately", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.short;
    const after20s = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 20_000,
      windowMs,
      lastObservedAtMs: 15_000,
    });
    expect(after20s).toBe(10_000);
    const at30s = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 30_000,
      windowMs,
      lastObservedAtMs: 15_000,
    });
    expect(at30s).toBe(0);
  });

  it("detects a 2 min completion on the O3 cadence", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.short;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times).toContain(120_000);
    const delay = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 100_000,
      windowMs,
      lastObservedAtMs: 90_000,
    });
    expect(delay).toBe(20_000);
  });

  it("forces a final observation at the deadline and none after terminal", () => {
    for (const windowMs of WINDOWS) {
      const startedAtMs = 0;
      const deadline = attemptDeadlineMs(startedAtMs, windowMs);
      expect(deadline).toBe(windowMs);
      const due = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: deadline,
        windowMs,
        lastObservedAtMs: deadline - 1,
      });
      expect(due).toBe(0);
      const after = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: deadline + 1,
        windowMs,
        lastObservedAtMs: deadline,
      });
      expect(after).toBeNull();
    }
  });

  it("does not count clicks and does not cap at 3 refreshes", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.extended;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times.length).toBeGreaterThan(10);
    const fourth = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: times[3]!,
      windowMs,
      lastObservedAtMs: times[2]!,
    });
    expect(fourth).toBe(0);
    const fifth = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: times[4]!,
      windowMs,
      lastObservedAtMs: times[3]!,
    });
    expect(fifth).toBe(0);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts`

```typescript
/**
 * ARCH-WOP-1 — Attempt deadline = startedAt + snapshotted window.
 * Fake nowIso only. No +31 min forge.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  PRE_M6_EXECUTION_WINDOW_MS,
  type ExecutionWindowClass,
} from "@/lib/oa/execution-contract";
import { NOW, buildStack, seedRunningAttempt } from "./helpers";

const CLASSES: ReadonlyArray<ExecutionWindowClass> = [
  "short",
  "standard",
  "long",
  "extended",
];

function addMs(iso: string, ms: number): string {
  return new Date(Date.parse(iso) + ms).toISOString();
}

describe("snapshotted Attempt deadline (ARCH-WOP-1)", () => {
  it.each(CLASSES)(
    "%s: TIMEOUT_NOT_REACHED before snapshot deadline, timeout at deadline, idempotent",
    async (cls) => {
      const windowMs = PRE_M6_EXECUTION_WINDOW_MS[cls];
      const stack = buildStack({
        policy: { attemptTimeoutMs: 30 * 60 * 1000 },
      });
      await seedRunningAttempt(stack);
      const current = await stack.attempts.attempts.findById("xat:oa-001");
      expect(current?.status).toBe("running");
      expect(current?.startedAt).toBe(NOW);
      const snapshotted = {
        ...current!,
        executionWindowClass: cls,
        resolvedMaxDurationMs: windowMs,
        version: current!.version + 1,
      };
      await stack.attempts.attempts.update(snapshotted, current!.version);

      const early = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs - 1),
      });
      expect(early.ok).toBe(false);
      if (!early.ok) {
        expect(early.error.detailCode).toBe("TIMEOUT_NOT_REACHED");
      }
      const still = await stack.attempts.attempts.findById("xat:oa-001");
      expect(still?.status).toBe("running");
      expect(still?.resolvedMaxDurationMs).toBe(windowMs);

      const late = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs),
      });
      expect(late.ok).toBe(true);
      if (!late.ok) return;
      expect(late.attempt.status).toBe("timeout");
      expect(late.attempt.attemptId).toBe("xat:oa-001");
      expect(late.attempt.resolvedMaxDurationMs).toBe(windowMs);

      const replay = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs + 60_000),
      });
      expect(replay.ok).toBe(true);
      if (replay.ok) {
        expect(replay.replayed).toBe(true);
        expect(replay.attempt.attemptId).toBe("xat:oa-001");
      }
    },
  );

  it("uses the snapshot, not the 30 min policy and not a +31 min forge", async () => {
    const stack = buildStack({
      policy: { attemptTimeoutMs: 30 * 60 * 1000 },
    });
    await seedRunningAttempt(stack);
    const current = await stack.attempts.attempts.findById("xat:oa-001");
    await stack.attempts.attempts.update(
      {
        ...current!,
        executionWindowClass: "short",
        resolvedMaxDurationMs: PRE_M6_EXECUTION_WINDOW_MS.short,
        version: current!.version + 1,
      },
      current!.version,
    );
    const atSixMinutes = await stack.attempts.triggerAttemptTimeout.execute({
      attemptId: "xat:oa-001",
      autoSafety: true,
      nowIso: addMs(NOW, 6 * 60 * 1000),
    });
    expect(atSixMinutes.ok).toBe(true);
    if (!atSixMinutes.ok) return;
    expect(atSixMinutes.attempt.status).toBe("timeout");
    expect(Date.parse(addMs(NOW, 6 * 60 * 1000))).not.toBe(
      Date.parse(NOW) + 31 * 60 * 1000,
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx`

```typescript
/**
 * ARCH-WOP-1 — auto O3 while the page stays open. Fake timers only.
 * @vitest-environment jsdom
 */
import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRunningAttemptO3Observation } from "@/features/pre-m6-product-ui/hooks/useRunningAttemptO3Observation";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract/domain/executionWindowPolicy";

const STARTED = "2026-08-17T12:00:00.000Z";

function Probe(props: {
  enabled: boolean;
  inFlight: boolean;
  refresh: () => void;
  startedAt?: string;
  resolvedMaxDurationMs?: number;
}) {
  useRunningAttemptO3Observation({
    enabled: props.enabled,
    startedAt: props.startedAt ?? STARTED,
    resolvedMaxDurationMs:
      props.resolvedMaxDurationMs ?? PRE_M6_EXECUTION_WINDOW_MS.standard,
    refresh: props.refresh,
    inFlight: props.inFlight,
  });
  return null;
}

describe("useRunningAttemptO3Observation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(STARTED));
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("auto-calls the same refresh at the first O3 probe when running refreshable", async () => {
    const refresh = vi.fn();
    render(<Probe enabled inFlight={false} refresh={refresh} />);
    expect(refresh).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(4_999);
    expect(refresh).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it("does not arm when not refreshable, and stops on unmount", async () => {
    const refresh = vi.fn();
    const { unmount } = render(
      <Probe enabled={false} inFlight={false} refresh={refresh} />,
    );
    await vi.advanceTimersByTimeAsync(30_000);
    expect(refresh).not.toHaveBeenCalled();
    unmount();
    const running = vi.fn();
    const mounted = render(
      <Probe enabled inFlight={false} refresh={running} />,
    );
    mounted.unmount();
    await vi.advanceTimersByTimeAsync(30_000);
    expect(running).not.toHaveBeenCalled();
  });

  it("does not double-fire while an observation is in-flight", async () => {
    const refresh = vi.fn();
    render(<Probe enabled inFlight refresh={refresh} />);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(refresh).not.toHaveBeenCalled();
  });

  it("stops auto observation once disabled (terminal)", async () => {
    const refresh = vi.fn();
    const { rerender } = render(
      <Probe enabled inFlight={false} refresh={refresh} />,
    );
    await vi.advanceTimersByTimeAsync(5_000);
    expect(refresh).toHaveBeenCalledTimes(1);
    rerender(<Probe enabled={false} inFlight={false} refresh={refresh} />);
    refresh.mockClear();
    await vi.advanceTimersByTimeAsync(120_000);
    expect(refresh).not.toHaveBeenCalled();
  });
});
```

## Fichiers preexisting dirty mutés — contenu POST complet (hash PRE/POST prouvés)

### `projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts`

```typescript
/**
 * TEST/E2E-ONLY deterministic Cursor external-boundary double.
 *
 * Substitutes NodeCursorProcessRunner / StudioCursorRealLaunchGateway /
 * subprocess Cursor CLI. It does NOT seed ExecutionAttempt, ExecutionContract,
 * Evidence, or ReviewBundle — those remain product orchestration outputs.
 *
 * Fail-closed. Mutually exclusive with SFIA_STUDIO_CURSOR_REAL=1.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG =
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY" as const;

export const DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE =
  "DETERMINISTIC AND REAL EXECUTION MODES NOT MUTUALLY EXCLUSIVE" as const;

const DETERMINISTIC_STDOUT =
  "DETERMINISTIC_TEST_BOUNDARY_CURSOR_COMPLETION\nZERO REAL\n";

export type DeterministicCursorBoundaryEnv = NodeJS.ProcessEnv;

export function isDeterministicCursorBoundaryEnabled(
  env: DeterministicCursorBoundaryEnv = process.env,
): boolean {
  if (env.NODE_ENV === "production") return false;
  if (env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] !== "1") {
    return false;
  }
  if (env.SFIA_STUDIO_E2E_QA_CONTROL !== "1") return false;
  if (env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (env.OPS1_CURSOR_REAL === "1") return false;
  return true;
}

export function assertDeterministicAndRealMutuallyExclusive(
  env: DeterministicCursorBoundaryEnv = process.env,
): void {
  if (
    env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] === "1" &&
    (env.SFIA_STUDIO_CURSOR_REAL === "1" || env.OPS1_CURSOR_REAL === "1")
  ) {
    throw new Error(DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE);
  }
}

function pendingObserveLimitFromEnv(
  env: DeterministicCursorBoundaryEnv,
): number {
  const raw = env.SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES;
  if (!raw) return 2;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 2;
  return parsed;
}

export type TestOnlyDeterministicCursorLaunchPortOptions = {
  readonly gatewayId?: string;
  /** How many observe() calls stay pending before terminal. Default 2. */
  readonly pendingObserveLimit?: number;
  readonly completionStdout?: string;
  readonly completionExitCode?: number;
  readonly completionTimedOut?: boolean;
  readonly nowMs?: () => number;
};

/**
 * Simulated external Cursor ACK / observe / completion.
 * realProcessInvoked on the ACK is the launch-port contract (spawn ACK),
 * not a claim that an OS Cursor process exists.
 */
export class TestOnlyDeterministicCursorLaunchPort
  implements RealExecutionLaunchPort
{
  readonly gatewayId: string;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly simulatedTechnicalAckCount = { value: 0 };
  private readonly pendingObserveLimit: number;
  private readonly completionStdout: string;
  private readonly completionExitCode: number;
  private readonly completionTimedOut: boolean;
  private readonly nowMs: () => number;
  private observeCount = 0;
  private readonly observations = new Map<string, RealProcessObservation>();
  private readonly launchedAtMs = new Map<string, number>();
  private readonly timeoutMsByRef = new Map<string, number>();

  constructor(options: TestOnlyDeterministicCursorLaunchPortOptions = {}) {
    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
    this.pendingObserveLimit = options.pendingObserveLimit ?? 2;
    this.completionStdout = options.completionStdout ?? DETERMINISTIC_STDOUT;
    this.completionExitCode = options.completionExitCode ?? 0;
    this.completionTimedOut = options.completionTimedOut ?? false;
    this.nowMs = options.nowMs ?? Date.now;
  }

  get launchCallCount(): number {
    return this.calls.length;
  }

  get simulatedAckCount(): number {
    return this.simulatedTechnicalAckCount.value;
  }

  get observeCallCount(): number {
    return this.observeCount;
  }

  reset(): void {
    this.calls.length = 0;
    this.simulatedTechnicalAckCount.value = 0;
    this.observeCount = 0;
    this.observations.clear();
    this.launchedAtMs.clear();
    this.timeoutMsByRef.clear();
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(structuredClone(request));
    this.simulatedTechnicalAckCount.value += 1;
    const processRef = `proc:det:${request.attemptId}`;
    this.launchedAtMs.set(processRef, this.nowMs());
    this.timeoutMsByRef.set(processRef, request.timeoutMs);
    this.observations.set(processRef, {
      processRef,
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "",
      durationMs: 0,
      realProcessInvoked: true,
    });
    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    this.observeCount += 1;
    const launchedAt = this.launchedAtMs.get(processRef) ?? this.nowMs();
    const timeoutMs = this.timeoutMsByRef.get(processRef);
    const elapsed = this.nowMs() - launchedAt;
    const pastDeadline =
      typeof timeoutMs === "number" && Number.isFinite(timeoutMs)
        ? elapsed >= timeoutMs
        : false;
    if (this.completionTimedOut || pastDeadline) {
      const timedOut: RealProcessObservation = {
        processRef,
        exitCode: null,
        timedOut: true,
        stdout: "",
        stderr: "deterministic_timeout",
        durationMs: elapsed,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, timedOut);
      return timedOut;
    }
    if (this.observeCount <= this.pendingObserveLimit) {
      const pending: RealProcessObservation = {
        ...current,
        exitCode: null,
        timedOut: false,
        durationMs: elapsed,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, pending);
      return pending;
    }
    const done: RealProcessObservation = {
      processRef,
      exitCode: this.completionExitCode,
      timedOut: false,
      stdout: this.completionExitCode === 0 ? this.completionStdout : "",
      stderr: this.completionExitCode === 0 ? "" : "deterministic_failure",
      durationMs: Math.max(elapsed, 1),
      realProcessInvoked: true,
    };
    this.observations.set(processRef, done);
    return done;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    if (current.exitCode !== null || current.timedOut) return current;
    return this.observe(processRef);
  }
}

export function composeDeterministicCursorBoundary(
  env: DeterministicCursorBoundaryEnv = process.env,
): RealBoundaryWiring {
  const launchPort = new TestOnlyDeterministicCursorLaunchPort({
    pendingObserveLimit: pendingObserveLimitFromEnv(env),
  });
  return Object.freeze({
    launchPort,
    safetyJournal: new MemoryLaunchSafetyJournal(),
  });
}
```

### `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`

```typescript
/**
 * R3 — StartExecution ACK → awaitCompletion → terminal Attempt.
 * Does not change StartExecution spawn-ACK semantics.
 * No fixture fallback. No queue / worker / scheduler.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const NORA_STDOUT_CAP = 4 * 1024;
export const NORA_STDERR_CAP = 4 * 1024;

export type BoundedLaunchObservationFacts = {
  attemptId: string;
  processRef: string;
  exitCode: number | null;
  timedOut: boolean;
  durationMs: number;
  realProcessInvoked: boolean;
  technicalResultRef: string | null;
  stdout: string;
  stderr: string;
};

export type CompleteBoundedReadOnlyLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: BoundedLaunchObservationFacts;
    }
  | {
      ok: true;
      status: "running";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: null;
    }
  | {
      ok: true;
      status: "failed" | "timeout";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: BoundedLaunchObservationFacts | null;
    }
  | { ok: false; code: string; message: string };

function capBytes(value: string, cap: number): string {
  if (value.length <= cap) return value;
  return value.slice(0, cap);
}

function resultRefForAttempt(attemptId: string): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const ref = `res:m4:${segment}`.slice(0, 128);
  return ref;
}

function hasAwaitCompletion(
  port: unknown,
): port is { awaitCompletion: (processRef: string) => Promise<RealProcessObservation | null> } {
  return (
    !!port &&
    typeof port === "object" &&
    typeof (port as { awaitCompletion?: unknown }).awaitCompletion ===
      "function"
  );
}

export function toNoraObservationFacts(input: {
  attemptId: string;
  observation: RealProcessObservation;
  technicalResultRef: string | null;
}): BoundedLaunchObservationFacts {
  return {
    attemptId: input.attemptId,
    processRef: input.observation.processRef,
    exitCode: input.observation.exitCode,
    timedOut: input.observation.timedOut,
    durationMs: input.observation.durationMs,
    realProcessInvoked: input.observation.realProcessInvoked,
    technicalResultRef: input.technicalResultRef,
    stdout: capBytes(input.observation.stdout ?? "", NORA_STDOUT_CAP),
    stderr: capBytes(input.observation.stderr ?? "", NORA_STDERR_CAP),
  };
}

export async function completeBoundedReadOnlyLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
}): Promise<CompleteBoundedReadOnlyLaunchResult> {
  const realBoundary = input.services.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Completion REAL refusée — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }

  const frontiers = await realBoundary.safetyJournal.findFrontierByAttempt(
    input.attempt.attemptId,
  );
  const launched = frontiers.find(
    (row) =>
      row.kind === "LAUNCHED" &&
      typeof row.processRef === "string" &&
      row.processRef.trim().length > 0,
  );
  if (!launched?.processRef) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_REQUIRED",
      message:
        "Frontier LAUNCHED / processRef absent — fail-closed, pas de fallback fixture.",
    };
  }
  if (launched.attemptId !== input.attempt.attemptId) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_MISMATCH",
      message: "Frontier LAUNCHED / Attempt mismatch — fail-closed.",
    };
  }

  if (!hasAwaitCompletion(realBoundary.launchPort)) {
    return {
      ok: false,
      code: "REAL_AWAIT_COMPLETION_REQUIRED",
      message:
        "Launch port sans awaitCompletion — fail-closed, pas de resultRef inventé.",
    };
  }

  let observation: RealProcessObservation | null = null;
  if (typeof realBoundary.launchPort.observe === "function") {
    observation = await realBoundary.launchPort.observe(launched.processRef);
  }
  const pendingObservation =
    observation !== null &&
    observation.realProcessInvoked === true &&
    observation.timedOut !== true &&
    observation.exitCode === null;
  if (pendingObservation) {
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
  }

  if (!observation) {
    observation = await realBoundary.launchPort.awaitCompletion(
      launched.processRef,
    );
  }
  if (!observation) {
    return {
      ok: false,
      code: "REAL_COMPLETION_OBSERVATION_REQUIRED",
      message: "Observation de completion nulle — fail-closed.",
    };
  }
  if (observation.processRef !== launched.processRef) {
    return {
      ok: false,
      code: "REAL_COMPLETION_PROCESS_MISMATCH",
      message: "processRef observation ≠ frontier — fail-closed.",
    };
  }

  if (
    observation.timedOut !== true &&
    observation.exitCode === null &&
    observation.realProcessInvoked === true
  ) {
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
  }

  if (observation.timedOut === true) {
    const timed = await input.services.triggerAttemptTimeout.execute({
      attemptId: input.attempt.attemptId,
      autoSafety: true,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!timed.ok || !timed.attempt) {
      const failed = await input.services.recordExecutionFailure.execute({
        attemptId: input.attempt.attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        stopReason: "EXECUTION_TIMEOUT",
        durationMs: observation.durationMs,
        expectedAttemptVersion: input.attempt.version,
      });
      if (!failed.ok || !failed.attempt) {
        return {
          ok: false,
          code: timed.ok ? "REAL_TIMEOUT_RECORD_FAILED" : timed.error.detailCode,
          message:
            timed.ok
              ? "Timeout Cursor observé mais Attempt non terminalisé."
              : timed.error.message,
        };
      }
      return {
        ok: true,
        status: "timeout",
        attempt: failed.attempt,
        observation,
        facts: toNoraObservationFacts({
          attemptId: input.attempt.attemptId,
          observation,
          technicalResultRef: null,
        }),
      };
    }
    return {
      ok: true,
      status: "timeout",
      attempt: timed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const success =
    observation.realProcessInvoked === true &&
    observation.timedOut === false &&
    observation.exitCode === 0;

  if (!success) {
    const failed = await input.services.recordExecutionFailure.execute({
      attemptId: input.attempt.attemptId,
      adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      technicalExitCode: observation.exitCode ?? undefined,
      durationMs: observation.durationMs,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!failed.ok || !failed.attempt) {
      return {
        ok: false,
        code: failed.ok ? "REAL_FAILURE_RECORD_FAILED" : failed.error.detailCode,
        message: failed.ok
          ? "Échec Cursor observé mais Attempt non terminalisé."
          : failed.error.message,
      };
    }
    return {
      ok: true,
      status: "failed",
      attempt: failed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const resultRef = resultRefForAttempt(input.attempt.attemptId);
  const recorded = await input.services.recordExecutionResult.execute({
    attemptId: input.attempt.attemptId,
    adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
    durationMs: observation.durationMs,
    expectedAttemptVersion: input.attempt.version,
  });
  if (!recorded.ok || !recorded.attempt) {
    return {
      ok: false,
      code: recorded.ok
        ? "REAL_RESULT_RECORD_FAILED"
        : recorded.error.detailCode,
      message: recorded.ok
        ? "RecordExecutionResult n'a pas terminalisé l'Attempt."
        : recorded.error.message,
    };
  }
  if (recorded.attempt.status !== "succeeded" || !recorded.attempt.resultRef) {
    return {
      ok: false,
      code: "REAL_RESULT_NOT_SUCCEEDED",
      message:
        "Attempt post-RecordExecutionResult n'est pas succeeded+resultRef.",
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: recorded.attempt,
    observation,
    facts: toNoraObservationFacts({
      attemptId: recorded.attempt.attemptId,
      observation,
      technicalResultRef: recorded.attempt.resultRef,
    }),
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts`

```typescript
/**
 * Confirm → Select M4 bounded RO → Grant Gate D → StartExecution REAL port.
 * No fixture fallback. No client adapter/command. No NodeCursorProcessRunner here.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import {
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  resolveF3EphemeralNotice,
} from "./constants";
import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
import { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";
import type { BoundedLaunchObservationFacts } from "./completeBoundedReadOnlyLaunch";

export type BoundedReadOnlyPipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  nowIso: () => string;
};

export type BoundedReadOnlyPipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  grantId: string;
};

function launchCallCountOf(port: unknown): number {
  if (port && typeof port === "object" && "launchCallCount" in port) {
    const n = (port as { launchCallCount: unknown }).launchCallCount;
    return typeof n === "number" ? n : 0;
  }
  return 0;
}

function pendingEvidence(mode: F3ExecutePayload["mode"]): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:pending-real",
    status: "pending",
    sourceKind: "execution_attempt",
    technicalResultRef: null,
    verified: false,
    mode,
  };
}

function pendingReviewBundle(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:pending-real",
    status: "pending",
    version: 0,
    evidenceRefs: [],
    mode,
  };
}

function pendingRecommendation(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "pending",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: F3_LABELS.recommendationNotDecision,
    mode,
    analysisStatus: "not_attempted",
    analysisText: null,
    analysisProviderId: null,
    analysisUnavailableReason: null,
  };
}

function buildPayload(input: {
  proposal: ProposalDto | null;
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  provenance: ReturnType<typeof deriveAttemptProvenance>;
  ingested?: Extract<
    Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
    { ok: true }
  >;
}): F3ExecutePayload {
  const persistenceNotice = resolveF3EphemeralNotice(input.productDurablePath);
  return {
    turnKind: "f3_execute",
    mode: input.provenance.mode,
    proposal: input.proposal,
    decisionId: input.decisionId,
    contract: {
      executionContractId: input.contract.executionContractId,
      version: input.contract.version,
      status: input.contract.status,
      action: input.contract.action,
      target: input.contract.target,
      scope: input.contract.scope,
      requiredAuthority: input.contract.requiredAuthority,
      mode: input.provenance.mode,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: input.provenance.adapterRef,
      adapterRef: input.provenance.adapterRef,
      executionMode: input.provenance.executionMode,
      realProcessInvoked: input.provenance.realProcessInvoked,
      externalEffects: input.provenance.externalEffects,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy:
        input.attempt.selectionStrategy ?? "capabilities_deterministic",
      mode: input.provenance.mode,
      startedAt: input.attempt.startedAt ?? null,
      executionWindowClass: input.attempt.executionWindowClass ?? null,
      resolvedMaxDurationMs: input.attempt.resolvedMaxDurationMs ?? null,
    },
    evidence: input.ingested?.evidence ?? pendingEvidence(input.provenance.mode),
    reviewBundle:
      input.ingested?.reviewBundle ??
      pendingReviewBundle(input.provenance.mode),
    recommendation:
      input.ingested?.recommendation ??
      pendingRecommendation(input.provenance.mode),
    reusedExistingAttempt: input.reusedExistingAttempt,
    executionPerformed: true,
    realExecution: input.provenance.realExecution,
    gitWritePerformed: false,
    labels: {
      fixtureNoReal: F3_LABELS.fixtureNoReal,
      noGitWrite: F3_LABELS.noGitWrite,
      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
      hardOpen: F3_LABELS.hardOpen,
    },
    processLocalNotice: persistenceNotice,
    disclosures: [
      F3_LABELS.noGitWrite,
      F3_LABELS.recommendationNotDecision,
      F3_LABELS.noReadyClaim,
      F3_LABELS.noTa6Complete,
      "BOUNDED READ-ONLY REAL BRANCH — provenance from Attempt, not env flag",
      ...input.extraDisclosures,
      persistenceNotice,
    ],
  };
}

async function finishBoundedAttempt(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    version?: number;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  deps: BoundedReadOnlyPipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  let attempt = input.attempt;
  let facts: BoundedLaunchObservationFacts | null = null;
  const extra = [...input.extraDisclosures];

  if (attempt.status === "running" && !attempt.resultRef) {
    const completed = await completeBoundedReadOnlyLaunch({
      attempt: attempt as never,
      services: attempts,
    });
    if (!completed.ok) return completed;
    attempt = completed.attempt;
    facts = completed.facts;
    if (completed.status === "running") {
      extra.push(
        "REAL process ACK — completion still pending; no Evidence candidate",
      );
    } else if (completed.status === "timeout") {
      extra.push("REAL process timed out — no Evidence candidate");
    } else if (completed.status === "failed") {
      extra.push("REAL process non-zero exit — no Evidence candidate");
    }
  }

  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
  const provenance = deriveAttemptProvenance({ attempt, agent });

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.contract.executionContractId,
    });
  const contract = refreshed.ok ? refreshed.contract : input.contract;

  let ingested:
    | Extract<
        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
        { ok: true }
      >
    | undefined;
  if (attempt.status === "succeeded" && attempt.resultRef) {
    const result = await ingestEvidenceAndRecommend({
      projectId: input.projectId,
      attemptId: attempt.attemptId,
      executionContractId: contract.executionContractId,
      provenance,
      executionObservation: facts,
      deps: {
        evidenceReviewServices: input.deps.evidenceReviewServices,
        projectServices: input.deps.projectServices,
        executionAttemptServices: attempts,
        executionContractServices: input.deps.executionContractServices,
      },
    });
    if (!result.ok) return result;
    ingested = result;
  }

  return {
    ok: true,
    payload: buildPayload({
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract,
      attempt,
      launchCount: input.launchCount,
      reusedExistingAttempt: input.reusedExistingAttempt,
      extraDisclosures: extra,
      productDurablePath: input.productDurablePath,
      provenance,
      ingested,
    }),
  };
}

export async function executeConfirmedBoundedReadOnlyContract(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: BoundedReadOnlyPipelineIdentities;
  extraDisclosures?: readonly string[];
  deps: BoundedReadOnlyPipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  const realBoundary = attempts.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Contrat bounded read-only REAL refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }
  if (!attempts.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Contrat bounded read-only REAL refusé — Gate D non disponible (fail-closed, pas de fallback fixture).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];
  const productDurable =
    input.deps.productDurablePath ?? input.deps.projectServices !== undefined;

  const listed = await attempts.listExecutionAttempts.execute({
    executionContractId: contract.executionContractId,
  });
  if (listed.ok) {
    const reusable = listed.attempts.find(
      (a) => a.status === "succeeded" || a.status === "running",
    );
    if (reusable) {
      return finishBoundedAttempt({
        projectId: input.projectId,
        decisionId: input.decisionId,
        proposal: input.proposal,
        contract,
        attempt: reusable,
        launchCount: launchCallCountOf(realBoundary.launchPort),
        reusedExistingAttempt: true,
        extraDisclosures,
        productDurablePath: productDurable,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const requested = await input.deps.decisionServices.requestConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      level: input.identities.confirmationLevel,
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: input.actor,
      requestedTo: input.actor,
      scope: contract.scope,
      idempotencyKey: input.identities.confirmationIdempotencyKey,
      decisionRef: input.decisionId,
    });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId: input.identities.confirmationId,
          actor: input.actor,
          authorityEvidenceId: input.authorityEvidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  } else if (
    contract.status !== "confirmed" &&
    contract.status !== "executing" &&
    contract.status !== "completed"
  ) {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
    };
  }

  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.identities.attemptId,
    executionContractId: contract.executionContractId,
    idempotencyKey: input.identities.attemptIdempotencyKey,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const nowMs = Date.parse(input.deps.nowIso());
  const expiresAt = new Date(
    (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
  ).toISOString();

  const gate = await attempts.grantRealExecutionGate.execute({
    grantId: input.identities.grantId,
    attemptId: input.identities.attemptId,
    actor: input.actor,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!gate.ok) {
    return {
      ok: false,
      code: gate.error.detailCode,
      message: gate.error.message,
    };
  }

  const started = await attempts.startExecution.execute({
    attemptId: input.identities.attemptId,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  return finishBoundedAttempt({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: input.proposal,
    contract,
    attempt: started.attempt,
    launchCount: launchCallCountOf(realBoundary.launchPort),
    reusedExistingAttempt: false,
    extraDisclosures,
    productDurablePath: productDurable,
    deps: input.deps,
  });
}
```

### `projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts`

```typescript
/**
 * Sibling M3 resolution profile for the future governed REAL bounded
 * read-only path (GAP-1).
 *
 * Values are harvested from the existing M4 descriptor
 * `createM4BoundedReadOnlyCursorAgentDescriptor` — not invented here.
 *
 * RESERVE: scope is historically named `studio.m4.real_off`. This cycle
 * does not "correct" that name. The existing descriptor is source of truth.
 *
 * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
 */

import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
} from "@/lib/oa/execution-attempt";
import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

export function boundedReadOnlyM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_RO_ACTION,
    target: M4_BOUNDED_RO_TARGET,
    requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_RO_SCOPE,
    constraints: [
      "BOUNDED READ-ONLY",
      "CURSOR CLI REAL PROFILE",
      "GATE D REQUIRED",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
      "NO CLIENT COMMAND",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  };
}

export const BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded read-only Cursor REAL profile; ZERO LIVE in this cycle)" as const;
```

### `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts`

```typescript
/**
 * E2E-ONLY terminal Attempt helper for Option A QA harness.
 * Calls existing Attempt use-cases — no status mutation, no second engine.
 * Not exported from product f3/index barrel.
 */

import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  isOptionAQaControlEnabled,
  setProductFailNextSave,
  type ArmedTerminal,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
} from "./constants";
import type { F3ExecutePayload } from "./types";
import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

function absentEvidence(): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:not-produced",
    status: "absent",
    sourceKind: "none",
    technicalResultRef: null,
    verified: false,
    mode: F3_MODE,
  };
}

function absentReviewBundle(): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:not-produced",
    status: "absent",
    version: 0,
    evidenceRefs: [],
    mode: F3_MODE,
  };
}

function absentRecommendation(): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "absent",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    mode: F3_MODE,
  };
}

function buildPayload(input: {
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string | null;
  };
  launchCount: number;
}): F3ExecutePayload {
  return {
    turnKind: "f3_execute",
    mode: F3_MODE,
    proposal: null,
    decisionId: input.decisionId,
    contract: {
      executionContractId: input.contract.executionContractId,
      version: input.contract.version,
      status: input.contract.status,
      action: input.contract.action,
      target: input.contract.target,
      scope: input.contract.scope,
      requiredAuthority: input.contract.requiredAuthority,
      mode: F3_MODE,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: F3_ADAPTER_ID,
      adapterRef: F3_ADAPTER_ID,
      executionMode: "adapter_sync_fixture",
      realProcessInvoked: false,
      externalEffects: false,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy: "capabilities_deterministic",
      mode: F3_MODE,
    },
    evidence: absentEvidence(),
    reviewBundle: absentReviewBundle(),
    recommendation: absentRecommendation(),
    reusedExistingAttempt: false,
    executionPerformed: true,
    realExecution: false,
    gitWritePerformed: false,
    labels: {
      fixtureNoReal: F3_LABELS.fixtureNoReal,
      noGitWrite: F3_LABELS.noGitWrite,
      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
      hardOpen: F3_LABELS.hardOpen,
    },
    processLocalNotice:
      "E2E QA terminal outcome — fixture-safe ZERO REAL — Evidence may be absent.",
    disclosures: [
      F3_LABELS.fixtureNoReal,
      F3_LABELS.recommendationNotDecision,
      "E2E QA TERMINAL OUTCOME",
    ],
  };
}

/**
 * Armed confirm interceptor — validate boundary, then existing use-cases only.
 */
export async function runE2eArmedTerminalAttempt(input: {
  armed: ArmedTerminal;
  expectedContractVersion: number;
  runtime: RuntimeApplicationService;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const { runtime, armed } = input;
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  if (
    !isOptionAQaControlEnabled({
      fixtureExternalEffects:
        runtime.oa.fixtureAdapter.externalEffects !== false,
    })
  ) {
    return {
      ok: false,
      code: "E2E_QA_CONTROL_DISABLED",
      message: "Control disabled.",
    };
  }

  const boundary = await validateResolvedM3ExecutionBoundary({
    projectId: armed.projectId,
    decisionId: armed.decisionId,
    executionContractId: armed.executionContractId,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      executionContractServices: runtime.oa.executionContractServices,
      authorityResolver: runtime.oa.authorityResolver,
    },
  });
  if (!boundary.ok) return boundary;

  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: runtime.oa.authorityResolver,
    scope: boundary.successor.scope,
    issuedAt: runtime.oa.clock.nowIso(),
    evidenceId: `evd:m3-e2e:${boundary.successor.executionContractId}`,
    forceEnable: true,
  });
  if (!auth.ok) {
    return { ok: false, code: auth.code, message: auth.message };
  }

  let contract = boundary.successor;
  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:m3:e2e:${contract.executionContractId}`;
    const requested =
      await runtime.oa.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_M3_ACTOR,
        requestedTo: LOCAL_MORRIS_M3_ACTOR,
        scope: contract.scope,
        idempotencyKey: confirmationId,
        decisionRef: armed.decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }
    const granted = await runtime.oa.decisionServices.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }
    const confirmed =
      await runtime.oa.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId,
          actor: LOCAL_MORRIS_M3_ACTOR,
          authorityEvidenceId: auth.evidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  }

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const selected =
    await runtime.oa.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:m3-e2e:${attemptId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const started =
    await runtime.oa.executionAttemptServices.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  let attempt = started.attempt;
  const launchCount = runtime.oa.fixtureAdapter.launchCallCount;

  if (armed.scenario === "attempt_failed") {
    const failed =
      await runtime.oa.executionAttemptServices.recordExecutionFailure.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        stopReason: "E2E_QA_HARNESS_FORCED_FAILURE",
        errorRef: "err:e2e-qa-forced-failure",
      });
    if (!failed.ok) {
      return {
        ok: false,
        code: failed.error.detailCode,
        message: failed.error.message,
      };
    }
    attempt = failed.attempt;
  } else if (armed.scenario === "attempt_timeout") {
    const timed =
      await runtime.oa.executionAttemptServices.triggerAttemptTimeout.execute({
        attemptId,
        autoSafety: true,
        nowIso: new Date(
          Date.parse(attempt.startedAt ?? runtime.oa.clock.nowIso()) +
            (attempt.resolvedMaxDurationMs ?? 30 * 60 * 1000),
        ).toISOString(),
      });
    if (!timed.ok) {
      return {
        ok: false,
        code: timed.error.detailCode,
        message: timed.error.message,
      };
    }
    attempt = timed.attempt;
  } else if (armed.scenario === "attempt_cancelled") {
    const cancelled =
      await runtime.oa.executionAttemptServices.cancelExecutionAttempt.execute({
        attemptId,
        reason: "E2E_QA_HARNESS_CANCEL",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
      });
    if (!cancelled.ok) {
      return {
        ok: false,
        code: cancelled.error.detailCode,
        message: cancelled.error.message,
      };
    }
    attempt = cancelled.attempt;
  } else if (armed.scenario === "evidence_missing") {
    // Skip ingest deliberately — do not arm failNextSave (would leave hook sticky).
    const recorded =
      await runtime.oa.executionAttemptServices.recordExecutionResult.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        resultRef: `res:e2e-missing-evidence:${attemptId}`,
        technicalExitCode: 0,
      });
    if (!recorded.ok) {
      return {
        ok: false,
        code: recorded.error.detailCode,
        message: recorded.error.message,
      };
    }
    attempt = recorded.attempt;
    setProductFailNextSave(runtime, null);
  }

  const refreshed =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return {
    ok: true,
    payload: buildPayload({
      decisionId: armed.decisionId,
      contract,
      attempt: {
        attemptId: attempt.attemptId,
        status: attempt.status,
        selectedAgentRef: attempt.selectedAgentRef ?? F3_AGENT_ID,
        resultRef: attempt.resultRef,
      },
      launchCount,
    }),
  };
}
```

### `projects/sfia-studio/app/features/project-assistant/f3/types.ts`

```typescript
/**
 * F3 FIXTURE reinjection DTOs — product layer only.
 * Never claim READY / T-A6 COMPLETE / REAL READY.
 */

import type { ProposalDto } from "../f2/types";
import type { F3_MODE } from "./constants";

export type F3Mode = typeof F3_MODE | "CURSOR_CLI_REAL";

export type F3ContractDto = {
  executionContractId: string;
  version: number;
  status: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  mode: F3Mode;
  constraints: string[];
};

export type F3AttemptDto = {
  attemptId: string;
  status: string;
  selectedAgentRef: string;
  adapterId: string;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  externalEffects: boolean;
  resultRef: string | null;
  launchCount: number;
  selectionStrategy: string;
  mode: F3Mode;
  startedAt?: string | null;
  executionWindowClass?: string | null;
  resolvedMaxDurationMs?: number | null;
};

export type F3EvidenceDto = {
  evidenceId: string;
  status: string;
  sourceKind: string;
  technicalResultRef: string | null;
  verified: false;
  mode: F3Mode;
};

export type F3ReviewBundleDto = {
  reviewBundleId: string;
  status: string;
  version: number;
  evidenceRefs: string[];
  mode: F3Mode;
};

export type F3RecommendationDto = {
  kind: "recommendation";
  status: string;
  executionAuthority: false;
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  openHardReservationRefs: string[];
  hardBlockers: string[];
  nextGateCode: string | null;
  nextActionCode: string | null;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  mode: F3Mode;
  analysisStatus?: "available" | "unavailable" | "not_attempted";
  analysisText?: string | null;
  analysisProviderId?: string | null;
  analysisUnavailableReason?: string | null;
};

export type F3Labels = {
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE";
  noGitWrite: "AUCUN GIT WRITE PRODUIT";
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
  cursorRealBlocked: "CURSOR REAL BLOQUÉ";
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN";
};

export type F3PreparePayload = {
  turnKind: "f3_prepare";
  mode: F3Mode;
  proposal: ProposalDto;
  decisionId: string;
  contract: F3ContractDto;
  executionPerformed: false;
  attemptCreated: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ExecutePayload = {
  turnKind: "f3_execute";
  mode: F3Mode;
  /**
   * Legacy fixture path may carry the process-local Proposal for provenance.
   * Canonical post-GO M3 path sets null — Proposal is not execution authority.
   */
  proposal: ProposalDto | null;
  decisionId: string;
  contract: F3ContractDto;
  attempt: F3AttemptDto;
  evidence: F3EvidenceDto;
  reviewBundle: F3ReviewBundleDto;
  recommendation: F3RecommendationDto;
  reusedExistingAttempt: boolean;
  executionPerformed: true;
  realExecution: boolean;
  gitWritePerformed: false;
  labels: F3Labels;
  processLocalNotice: string;
  disclosures: string[];
};

export type F3ValidateOk = {
  ok: true;
  proposal: ProposalDto;
  decisionId: string;
  decisionStatus: "accepted";
  scope: string;
};

export type F3ValidateFail = {
  ok: false;
  code: string;
  message: string;
  proposal?: ProposalDto | null;
};

export type F3ValidateResult = F3ValidateOk | F3ValidateFail;
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```typescript
"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
} from "@/features/project-assistant/types";
import type {
  F2DecisionKind,
  ProposalDto,
} from "@/features/project-assistant/f2/types";
import type {
  F3ExecutePayload,
  F3PreparePayload,
} from "@/features/project-assistant/f3/types";
import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  deriveRecommendationFreshness,
  isBoundedRunningAttemptRefreshable,
  type RecommendationFreshness,
} from "@/features/project-assistant/presentationLabels";
import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";

export type ProductMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export type ProductConversationUiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED";

export type UseProductConversationInput = {
  projectId: string;
  /** Fired after a successful durable Product mutation (not process-local). */
  onDurableFactsChanged?: () => void;
  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for History. */
  onDurableEvidenceOutcomeChange?: (
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) => void;
};

function nextId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function modeFromResult(result: {
  presentation?: string;
  mode?: string;
  model?: string | null;
}): string {
  if (result.presentation === "test_provider" || result.mode === "fixture") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode démonstration / Fixture${model}`;
  }
  if (result.presentation === "openai_live" || result.mode === "live") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode live${model}`;
  }
  if (result.mode === "unavailable") return "Assistant indisponible";
  return "MODE À CONFIRMER";
}

/**
 * Headless Pre-M6 conversation controller.
 *
 * Authority stays server-side: this hook only sequences the existing F2/F3
 * server actions and exposes derived presentation state. It never invents
 * execution authority, durability, or a Recommendation → Decision promotion.
 */
export function useProductConversation({
  projectId,
  onDurableFactsChanged,
  onDurableEvidenceOutcomeChange,
}: UseProductConversationInput) {
  const [messages, setMessages] = useState<ProductMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<ProductConversationUiState>("INITIAL");
  const [error, setError] = useState<string | null>(null);
  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
  const [ephemeralNotice, setEphemeralNotice] = useState(
    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
  );
  const [f2, setF2] = useState<F2TurnPayload | null>(null);
  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
  const [reservesText, setReservesText] = useState("");
  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
  const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
    null,
  );
  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [durableRehydrateError, setDurableRehydrateError] = useState<
    string | null
  >(null);
  const [f3Busy, setF3Busy] = useState(false);
  const [isPending, startTransition] = useTransition();

  const listRef = useRef<HTMLDivElement | null>(null);
  const f3InFlightRef = useRef(false);
  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
  const onDurableEvidenceOutcomeChangeRef = useRef(
    onDurableEvidenceOutcomeChange,
  );
  onDurableFactsChangedRef.current = onDurableFactsChanged;
  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;

  function notifyDurableFactsChanged() {
    onDurableFactsChangedRef.current?.();
  }

  function applyDurableEvidenceOutcome(
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) {
    setDurableEvidenceOutcome(outcome);
    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
  }

  async function refreshDurableEvidenceOutcome() {
    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (result.ok) {
      applyDurableEvidenceOutcome(result);
      setDurableRehydrateError(null);
      return;
    }
    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
      applyDurableEvidenceOutcome(null);
      setDurableRehydrateError(null);
      return;
    }
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(
      "Impossible de relire le dernier outcome durable.",
    );
  }

  useEffect(() => {
    setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
  }, []);

  useEffect(() => {
    let cancelled = false;
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(null);

    void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
      (result) => {
        if (cancelled) return;
        if (result.ok) {
          applyDurableEvidenceOutcome(result);
          setDurableRehydrateError(null);
          return;
        }
        if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
          applyDurableEvidenceOutcome(null);
          setDurableRehydrateError(null);
          return;
        }
        applyDurableEvidenceOutcome(null);
        setDurableRehydrateError(
          "Impossible de relire le dernier outcome durable.",
        );
      },
    );

    return () => {
      cancelled = true;
    };
    // Parent callbacks are mirrored via refs; projectId is the durable read key.
  }, [projectId]);

  // E2E-ONLY durable refresh (QA-PRE-M6-TEST-01). No-op unless window flag set.
  useEffect(() => {
    function onE2eRefresh() {
      const enabled = Boolean(
        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
          .__SFIA_E2E_QA_CONTROL__,
      );
      if (!enabled) return;
      void refreshDurableEvidenceOutcome();
    }
    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    return () => {
      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- projectId is the durable read key
  }, [projectId]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [
    messages,
    toolEvents,
    error,
    activeProposal,
    f2,
    f3Prepare,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
  ]);

  const busy =
    isPending ||
    f3Busy ||
    uiState === "SENDING" ||
    uiState === "ASSISTANT_WORKING" ||
    uiState === "SOURCE_LOOKUP";
  const blocked = uiState === "BLOCKED";
  const canSend = !busy && !blocked && draft.trim().length > 0;
  const gateOpen =
    activeProposal?.morrisGateRequired === true &&
    activeProposal.status === "DECISION_REQUIRED";

  function historyForRequest(): AssistantHistoryMessage[] {
    return messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  }

  function sendMessage(contentOverride?: string) {
    const content = (contentOverride ?? draft).trim();
    if (!content || busy || blocked) return;

    const userMessage: ProductMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };
    const history = historyForRequest();
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setError(null);
    setUiState("SENDING");

    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      const result = await projectAssistantSendAction({
        projectId,
        content,
        history,
      });

      if (!result.ok) {
        if (result.status === "provider_unavailable") {
          setUiState("BLOCKED");
          setModeLabel("Assistant indisponible");
        } else {
          setUiState("ERROR_RECOVERABLE");
        }
        setError(result.message);
        return;
      }

      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setToolEvents((prev) => [...prev, ...result.toolEvents]);
      if (result.toolEvents.length > 0) {
        setUiState("SOURCE_LOOKUP");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      if (result.f2) {
        setF2(result.f2);
        setActiveProposal(result.f2.proposal);
      } else {
        setF2(null);
        setActiveProposal(null);
      }
      setUiState("ANSWERED");
    });
  }

  function decide(kind: F2DecisionKind) {
    if (!activeProposal || busy || blocked) return;
    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      setError(null);
      const result = await projectAssistantDecideAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionKind: kind,
        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
      });
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setF2(result.f2);
      setActiveProposal(result.f2.proposal);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content:
            kind === "AMEND"
              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
              : result.text,
        },
      ]);
      setUiState("ANSWERED");
      // HumanDecision is a durable Product write — refresh LPS / History.
      notifyDurableFactsChanged();
    });
  }

  // Canonical post-GO CTA: durable M3 prepare + resolve (no Proposal authority).
  const canPrepareResolvedM3 =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  // Legacy fixture path — diagnostic / negative STALE proof only.
  const canPrepareLegacyFixture =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    Boolean(activeProposal) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  const recommendationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: Boolean(f3Execute?.recommendation),
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
      sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
      durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
    });

  const qualificationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
    });

  const durableOutcomeFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
    });

  // Freshness is presentation-only. Do not invent authority via canConfirm.
  const canConfirmLegacyFixture =
    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

  const canConfirmResolvedM3 =
    Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;

  const runningAttemptRefreshable =
    Boolean(f3M3Resolved) &&
    Boolean(f3Execute) &&
    isBoundedRunningAttemptRefreshable({
      attemptStatus: f3Execute?.attempt.status,
      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
      executionMode: f3Execute?.attempt.executionMode,
      payloadMode: f3Execute?.mode,
      contractStatus: f3Execute?.contract.status,
    }) &&
    !blocked;

  const canRefreshResolvedM3Running =
    runningAttemptRefreshable && !busy;

  function prepareLegacyFixture() {
    if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Prepare(result.f3);
      setF3M3Resolved(null);
      setF3Execute(null);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      // ExecutionContract prepare is a durable Product write.
      notifyDurableFactsChanged();
    });
  }

  function prepareResolvedM3() {
    if (!canPrepareResolvedM3 || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareResolvedM3Action({
        projectId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        return;
      }
      setF3M3Resolved(result.f3);
      setF3Prepare(null);
      setF3Execute(null);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      // M3 PREPARE + resolved successor are durable Product writes.
      notifyDurableFactsChanged();
    });
  }

  function confirmAndExecuteLegacyFixture() {
    if (!canConfirmLegacyFixture || !f3Prepare || !activeProposal) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f3Prepare.decisionId,
        executionContractId: f3Prepare.contract.executionContractId,
        expectedContractVersion: f3Prepare.contract.version,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function invokeCanonicalResolvedM3Path() {
    if (!f3M3Resolved) return;
    if (f3InFlightRef.current || f3Busy) return;
    f3InFlightRef.current = true;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteResolvedM3Action({
        projectId,
        decisionId: f3M3Resolved.decisionId,
        executionContractId: f3M3Resolved.successor.executionContractId,
        expectedContractVersion: f3M3Resolved.successor.version,
      });
      f3InFlightRef.current = false;
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function confirmAndExecuteResolvedM3() {
    if (!canConfirmResolvedM3) return;
    invokeCanonicalResolvedM3Path();
  }

  function refreshResolvedM3RunningAttempt() {
    if (!runningAttemptRefreshable) return;
    invokeCanonicalResolvedM3Path();
  }

  useRunningAttemptO3Observation({
    enabled: runningAttemptRefreshable,
    startedAt: f3Execute?.attempt.startedAt,
    resolvedMaxDurationMs: f3Execute?.attempt.resolvedMaxDurationMs,
    refresh: refreshResolvedM3RunningAttempt,
    inFlight: f3Busy,
  });

  function retryLastUserMessage() {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;
    setMessages((prev) => prev.filter((m) => m.id !== lastUser.id));
    sendMessage(lastUser.content);
  }

  return {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    uiState,
    error,
    modeLabel,
    ephemeralNotice,
    f2,
    activeProposal,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
  };
}

export type ProductConversationController = ReturnType<
  typeof useProductConversation
>;
```

### `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`

```typescript
/**
 * G-UX-15 Slice A — application bridge:
 * durable M3 PREPARE ExecutionContract → resolved successor via existing supersession
 * → eligible for existing Confirmation / Select / StartExecution.
 *
 * Does NOT execute. Does NOT mutate the original contract in place.
 * Does NOT depend on Proposal / Conversation.
 * Resolution fields are explicit application command input (not durable authority).
 *
 * Amend (exit-proof):
 * - reject all known unresolved successor stop-condition sentinels;
 * - idempotent validation replay when supersession succeeded but validation did not;
 * - accept only the exact canonical M3 PREPARE contract identity for the decision.
 *
 * Final amend:
 * - enforce successor governance identity on replay (MORRIS + decisionRefs + resolution idempotency);
 * - treat failed as a legitimate already-progressed T-A5 state;
 * - refuse validated-only MORRIS as completed resolution for this path.
 */

import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
  ExecutionWindowClass,
  Reversibility,
} from "@/lib/oa/execution-contract";

const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
const UNRESOLVED_CAP = "cap:unresolved";

const FORBIDDEN_EXECUTABLE_CONSTRAINTS = new Set([
  "PREPARE_ONLY",
  "NO_ATTEMPT",
]);

/** Exact known unresolved stop-condition sentinels (C1). */
export const UNRESOLVED_STOP_SENTINELS = Object.freeze([
  "ACTION_UNRESOLVED",
  "TARGET_UNRESOLVED",
  "CAPABILITY_UNRESOLVED",
  "REVERSIBILITY_UNRESOLVED",
] as const);

const UNRESOLVED_STOP = new Set<string>(UNRESOLVED_STOP_SENTINELS);

/**
 * Already-progressed legitimate states for MORRIS M3/G-UX-15 replay.
 * Note: "validated" alone is NOT acceptable for MORRIS (confirmation required).
 */
const POST_VALIDATION_OK = new Set([
  "confirmation_required",
  "confirmed",
  "executing",
  "completed",
  "failed",
]);

const PRE_VALIDATION = new Set(["draft", "proposed"]);

const CANONICAL_M3_AUTHORITY = "MORRIS";

export type ResolveM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
  /** Test inject — bypasses M3 local Morris env gate. */
  forceM3Authority?: boolean;
};

/**
 * Explicit application-layer resolution input — not a durable domain authority.
 */
export type M3ResolvedExecutionFields = {
  action: string;
  target: string;
  requiredCapabilities: string[];
  reversibility: Reversibility;
  /** When omitted, inherits original scope (typically decision-scoped). */
  scope?: string;
  /**
   * When omitted, inherits non-forbidden constraints from the original and
   * drops PREPARE_ONLY / NO_ATTEMPT. Caller may supply a full replace list.
   */
  constraints?: string[];
  /**
   * When omitted, inherits stopConditions without unresolved sentinels.
   * Explicit arrays MUST NOT contain known unresolved stop sentinels (C1).
   */
  stopConditions?: string[];
  /**
   * Optional inputs merged onto the successor (server-side only).
   * Used by the bounded read-only profile to carry contract-bound baseHeadSha.
   */
  inputs?: Record<string, unknown>;
  executionWindowClass?: ExecutionWindowClass;
};

export type ResolveM3ExecutionContractInput = {
  projectId: string;
  decisionId: string;
  originalExecutionContractId: string;
  expectedOriginalVersion: number;
  resolution: M3ResolvedExecutionFields;
  supersessionReason: string;
  /**
   * Optional deterministic successor id. Default: `xct:m3-res:{safeDecisionId}`.
   * Replay with the same id returns the existing successor when fields match.
   */
  successorExecutionContractId?: string;
  deps: ResolveM3Deps;
};

export type ResolveM3Success = {
  ok: true;
  projectId: string;
  decisionId: string;
  original: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    requiredCapabilities: string[];
  };
  successor: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    requiredCapabilities: string[];
    reversibility: Reversibility;
    constraints: string[];
    stopConditions: string[];
    supersedesExecutionContractId: string;
    supersessionReason: string;
  };
  reusedFromIdempotency: boolean;
  disclosures: string[];
};

export type ResolveM3Failure = {
  ok: false;
  code: string;
  message: string;
};

function fail(code: string, message: string): ResolveM3Failure {
  return { ok: false, code, message };
}

/** Same safe segment algorithm as prepareM3FromDecision. */
export function safeDecisionSegment(decisionId: string): string {
  return decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
}

/** Canonical M3 PREPARE ExecutionContract id for a decision (C3). */
export function canonicalM3PrepareContractId(decisionId: string): string {
  return `xct:m3:${safeDecisionSegment(decisionId)}`;
}

/** Canonical M3 PREPARE idempotency key (C3). */
export function canonicalM3PrepareIdempotencyKey(decisionId: string): string {
  return `idem:m3-prep:${decisionId}`;
}

/** Canonical G-UX-15 resolution successor idempotency (F1). */
export function canonicalM3ResolutionIdempotencyKey(
  decisionId: string,
  successorExecutionContractId: string,
): string {
  return `idem:m3-res:${decisionId}:${successorExecutionContractId}`;
}

function defaultSuccessorId(decisionId: string): string {
  return `xct:m3-res:${safeDecisionSegment(decisionId)}`;
}

function decisionRefsEqualExact(
  refs: readonly string[] | undefined,
  expectedDecisionId: string,
): boolean {
  return (
    Array.isArray(refs) &&
    refs.length === 1 &&
    refs[0] === expectedDecisionId
  );
}

function isUnresolvedPrepareContract(contract: ExecutionContract): boolean {
  const caps = contract.requiredCapabilities ?? [];
  const constraints = contract.constraints ?? [];
  const stops = contract.stopConditions ?? [];
  return (
    contract.target === UNRESOLVED_TARGET ||
    caps.includes(UNRESOLVED_CAP) ||
    constraints.includes("PREPARE_ONLY") ||
    stops.includes("TARGET_UNRESOLVED") ||
    stops.includes("CAPABILITY_UNRESOLVED")
  );
}

function findUnresolvedStopSentinel(stops: readonly string[]): string | null {
  for (const s of stops) {
    if (UNRESOLVED_STOP.has(s)) return s;
  }
  return null;
}

function assertResolvedFields(
  resolution: M3ResolvedExecutionFields,
): ResolveM3Failure | null {
  const action = resolution.action?.trim() ?? "";
  const target = resolution.target?.trim() ?? "";
  const caps = resolution.requiredCapabilities ?? [];
  if (!action || action === UNRESOLVED_ACTION) {
    return fail(
      "RESOLUTION_ACTION_UNRESOLVED",
      "Resolved action is required and must not be UNRESOLVED_ACTION.",
    );
  }
  if (!target || target === UNRESOLVED_TARGET) {
    return fail(
      "RESOLUTION_TARGET_UNRESOLVED",
      "Resolved target is required and must not be UNRESOLVED_TARGET.",
    );
  }
  if (caps.length === 0 || caps.includes(UNRESOLVED_CAP)) {
    return fail(
      "RESOLUTION_CAPABILITY_UNRESOLVED",
      "Resolved capabilities are required and must not include cap:unresolved.",
    );
  }
  if (
    resolution.reversibility !== "reversible" &&
    resolution.reversibility !== "partially_reversible" &&
    resolution.reversibility !== "irreversible"
  ) {
    return fail(
      "RESOLUTION_REVERSIBILITY_INVALID",
      "Resolved reversibility must be an existing Reversibility value.",
    );
  }
  if (resolution.constraints) {
    for (const c of resolution.constraints) {
      if (FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c)) {
        return fail(
          "RESOLUTION_CONSTRAINT_FORBIDDEN",
          `Executable successor must not include constraint ${c}.`,
        );
      }
    }
  }
  // C1 — explicit stopConditions must fail closed before supersession.
  if (resolution.stopConditions) {
    const hit = findUnresolvedStopSentinel(resolution.stopConditions);
    if (hit) {
      return fail(
        "RESOLUTION_STOP_UNRESOLVED",
        `Resolved stopConditions must not include unresolved sentinel ${hit}.`,
      );
    }
  }
  return null;
}

function assertSuccessorHasNoUnresolvedSentinels(
  successor: ExecutionContract,
): ResolveM3Failure | null {
  if (successor.action === UNRESOLVED_ACTION) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor action is UNRESOLVED_ACTION.",
    );
  }
  if (successor.target === UNRESOLVED_TARGET) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor target is UNRESOLVED_TARGET.",
    );
  }
  if ((successor.requiredCapabilities ?? []).includes(UNRESOLVED_CAP)) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor requiredCapabilities still contain cap:unresolved.",
    );
  }
  const stopHit = findUnresolvedStopSentinel(successor.stopConditions ?? []);
  if (stopHit) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      `Successor stopConditions still contain unresolved sentinel ${stopHit}.`,
    );
  }
  for (const c of successor.constraints ?? []) {
    if (FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c)) {
      return fail(
        "SUCCESSOR_CONSTRAINT_FORBIDDEN",
        `Successor retained forbidden constraint ${c}.`,
      );
    }
  }
  return null;
}

function buildSuccessorConstraints(
  prior: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
): string[] {
  if (resolution.constraints) {
    return [...resolution.constraints];
  }
  return (prior.constraints ?? []).filter(
    (c) => !FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c),
  );
}

function buildSuccessorStopConditions(
  prior: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
): string[] {
  if (resolution.stopConditions) {
    // Explicit list already validated by assertResolvedFields (C1).
    return [...resolution.stopConditions];
  }
  return (prior.stopConditions ?? []).filter((s) => !UNRESOLVED_STOP.has(s));
}

function successorMatchesResolution(
  contract: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
  scope: string,
  constraints: string[],
  stopConditions: string[],
): boolean {
  const caps = [...(contract.requiredCapabilities ?? [])].sort().join("\0");
  const wantCaps = [...resolution.requiredCapabilities].sort().join("\0");
  return (
    contract.action === resolution.action.trim() &&
    contract.target === resolution.target.trim() &&
    contract.scope === scope &&
    contract.reversibility === resolution.reversibility &&
    caps === wantCaps &&
    [...contract.constraints].join("\0") === constraints.join("\0") &&
    [...contract.stopConditions].join("\0") === stopConditions.join("\0") &&
    (resolution.executionWindowClass === undefined ||
      contract.executionWindowClass === resolution.executionWindowClass)
  );
}

function toOriginalView(contract: ExecutionContract) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    requiredCapabilities: [...contract.requiredCapabilities],
  };
}

function toSuccessorView(contract: ExecutionContract) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    requiredCapabilities: [...contract.requiredCapabilities],
    reversibility: contract.reversibility,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    supersedesExecutionContractId: contract.supersedesExecutionContractId ?? "",
    supersessionReason: contract.supersessionReason ?? "",
  };
}

function assertCanonicalOriginalIdentity(input: {
  decisionId: string;
  requestedOriginalId: string;
  loaded: ExecutionContract;
}): ResolveM3Failure | null {
  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  if (input.requestedOriginalId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      `originalExecutionContractId must be the canonical M3 PREPARE id ${canonicalId}.`,
    );
  }
  if (input.loaded.executionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract id is not the canonical M3 PREPARE contract for this decision.",
    );
  }
  if (input.loaded.idempotencyKey !== canonicalM3PrepareIdempotencyKey(input.decisionId)) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract idempotencyKey is not the canonical M3 PREPARE identity.",
    );
  }
  if (input.loaded.requiredAuthority !== CANONICAL_M3_AUTHORITY) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Canonical M3 PREPARE contract must require MORRIS authority.",
    );
  }
  return null;
}

/**
 * F1 — successor governance identity for idempotent replay / success return.
 * Fail closed before validation when any governance dimension mismatches.
 */
function assertSuccessorGovernanceIdentity(input: {
  original: ExecutionContract;
  successor: ExecutionContract;
  decisionId: string;
  projectId: string;
}): ResolveM3Failure | null {
  const { original, successor, decisionId, projectId } = input;

  if (successor.supersedesExecutionContractId !== original.executionContractId) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor lineage does not supersede the original M3 contract.",
    );
  }
  if (original.requiredAuthority !== CANONICAL_M3_AUTHORITY) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Original M3 contract requiredAuthority is not MORRIS.",
    );
  }
  if (successor.requiredAuthority !== original.requiredAuthority) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor requiredAuthority does not match original MORRIS authority.",
    );
  }
  if (!decisionRefsEqualExact(successor.decisionRefs, decisionId)) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor decisionRefs must bind exactly the resolved HumanDecision.",
    );
  }
  const expectedIdem = canonicalM3ResolutionIdempotencyKey(
    decisionId,
    successor.executionContractId,
  );
  if (successor.idempotencyKey !== expectedIdem) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor idempotencyKey is not the canonical M3 resolution identity.",
    );
  }
  if (successor.projectId !== projectId) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor projectId does not match the resolution project.",
    );
  }
  return null;
}

async function validateExistingSuccessor(input: {
  decisionId: string;
  scope: string;
  successorId: string;
  deps: ResolveM3Deps;
}): Promise<
  | { ok: true; contract: ExecutionContract }
  | ResolveM3Failure
> {
  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: input.scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-resolve:${input.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }
  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: input.successorId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );
  if (!validated.ok) {
    return fail(validated.error.detailCode, validated.error.message);
  }
  return { ok: true, contract: validated.contract };
}

export async function resolveM3ExecutionContract(
  input: ResolveM3ExecutionContractInput,
): Promise<ResolveM3Success | ResolveM3Failure> {
  const fieldErr = assertResolvedFields(input.resolution);
  if (fieldErr) return fieldErr;

  const reason = input.supersessionReason?.trim() ?? "";
  if (!reason) {
    return fail(
      "SUPERSESSION_REASON_INVALID",
      "supersessionReason is required.",
    );
  }

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, loaded.error.message);
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return fail("PROJECT_MISMATCH", "Decision does not belong to this project.");
  }
  if (decision.status !== "accepted") {
    return fail(
      "DECISION_NOT_CURRENT",
      `Decision status ${decision.status} is not accepted for M3 resolution.`,
    );
  }
  if (!decision.decisionBasis) {
    return fail(
      "DECISION_BASIS_REQUIRED",
      "HumanDecision lacks DecisionBasis — cannot resolve M3 contract.",
    );
  }
  const basis: DecisionBasis = decision.decisionBasis;
  if (basis.projectId !== input.projectId) {
    return fail(
      "DECISION_BASIS_PROJECT_MISMATCH",
      "DecisionBasis projectId does not match.",
    );
  }

  // C3 — requested id must be canonical before load side-effects matter.
  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  if (input.originalExecutionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      `originalExecutionContractId must be the canonical M3 PREPARE id ${canonicalId}.`,
    );
  }

  const originalResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.originalExecutionContractId,
    });
  if (!originalResult.ok) {
    return fail(originalResult.error.detailCode, originalResult.error.message);
  }

  let original = originalResult.contract;
  if (original.projectId !== input.projectId) {
    return fail(
      "CONTRACT_PROJECT_MISMATCH",
      "Original ExecutionContract does not belong to this project.",
    );
  }
  if (
    !original.decisionRefs ||
    original.decisionRefs.length === 0 ||
    !original.decisionRefs.includes(input.decisionId)
  ) {
    return fail(
      "DECISION_CONTRACT_MISMATCH",
      "Original contract is not linked to this HumanDecision.",
    );
  }

  const identityErr = assertCanonicalOriginalIdentity({
    decisionId: input.decisionId,
    requestedOriginalId: input.originalExecutionContractId,
    loaded: original,
  });
  if (identityErr) return identityErr;

  const successorId =
    input.successorExecutionContractId?.trim() ||
    defaultSuccessorId(input.decisionId);
  if (!successorId.startsWith("xct:")) {
    return fail(
      "CONTRACT_INVALID",
      "successorExecutionContractId must use xct: prefix.",
    );
  }
  if (successorId === input.originalExecutionContractId) {
    return fail("SELF_SUPERSESSION", "Successor id must differ from original.");
  }

  const scope =
    (input.resolution.scope?.trim() || original.scope).trim() ||
    `decision:${input.decisionId}`;
  const constraints = buildSuccessorConstraints(original, input.resolution);
  const stopConditions = buildSuccessorStopConditions(
    original,
    input.resolution,
  );

  // C2 — original already superseded: recover/validate existing successor.
  if (original.status === "superseded") {
    const existing =
      await input.deps.executionContractServices.getExecutionContract.execute({
        executionContractId: successorId,
      });
    if (!existing.ok) {
      return fail(
        "STATE_CONFLICT",
        "Original contract is superseded but expected successor was not found.",
      );
    }
    let successor = existing.contract;

    // F1 — governance identity before validation / success.
    const govErr = assertSuccessorGovernanceIdentity({
      original,
      successor,
      decisionId: input.decisionId,
      projectId: input.projectId,
    });
    if (govErr) return govErr;

    if (
      !successorMatchesResolution(
        successor,
        input.resolution,
        scope,
        constraints,
        stopConditions,
      )
    ) {
      return fail(
        "RESOLUTION_IDEMPOTENCY_CONFLICT",
        "Existing successor fields do not match this resolution input.",
      );
    }

    if (successor.status === "cancelled" || successor.status === "superseded") {
      return fail(
        "STATE_CONFLICT",
        `Expected successor is no longer current (status ${successor.status}).`,
      );
    }

    if (PRE_VALIDATION.has(successor.status)) {
      // Incomplete prior attempt — validate SAME successor; do not supersede again.
      const validated = await validateExistingSuccessor({
        decisionId: input.decisionId,
        scope,
        successorId,
        deps: input.deps,
      });
      if (!validated.ok) return validated;
      successor = validated.contract;
      // Re-assert governance after validation (identity must not drift).
      const govAfter = assertSuccessorGovernanceIdentity({
        original,
        successor,
        decisionId: input.decisionId,
        projectId: input.projectId,
      });
      if (govAfter) return govAfter;
    } else if (successor.status === "validated") {
      // MORRIS path: validated alone is not a completed pre-confirmation result.
      return fail(
        "STATE_CONFLICT",
        "MORRIS successor in validated status is not a legitimate completed resolution; confirmation_required is required.",
      );
    } else if (!POST_VALIDATION_OK.has(successor.status)) {
      return fail(
        "STATE_CONFLICT",
        `Expected successor status ${successor.status} is not a legitimate resolution candidate.`,
      );
    }

    const cleanErr = assertSuccessorHasNoUnresolvedSentinels(successor);
    if (cleanErr) return cleanErr;

    return {
      ok: true,
      projectId: input.projectId,
      decisionId: input.decisionId,
      original: toOriginalView(original),
      successor: toSuccessorView(successor),
      reusedFromIdempotency: true,
      disclosures: [
        "G-UX-15 resolve — idempotent reuse / validation replay of existing successor",
        "ORIGINAL PRESERVED SUPERSEDED",
        "NO SECOND SUPERSESSION",
        "NO CURSOR REAL",
        "NO ATTEMPT IN RESOLVER",
      ],
    };
  }

  if (original.status === "cancelled") {
    return fail(
      "STATE_CONFLICT",
      "Cannot resolve a cancelled ExecutionContract.",
    );
  }
  if (
    original.status === "executing" ||
    original.status === "completed" ||
    original.status === "failed"
  ) {
    return fail(
      "TA5_STATUS_REFUSED",
      `Cannot resolve contract in T-A5 status ${original.status}.`,
    );
  }

  if (!isUnresolvedPrepareContract(original)) {
    return fail(
      "CONTRACT_NOT_M3_PREPARE_UNRESOLVED",
      "Original contract is not an unresolved M3 PREPARE contract.",
    );
  }

  if (original.version !== input.expectedOriginalVersion) {
    return fail(
      "VERSION_CONFLICT",
      `Expected original version ${input.expectedOriginalVersion}, found ${original.version}.`,
    );
  }

  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-resolve:${input.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const superseded =
    await input.deps.executionContractServices.supersedeExecutionContract.execute(
      {
        newExecutionContractId: successorId,
        supersedesExecutionContractId: original.executionContractId,
        supersessionReason: reason,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
        expectedVersion: input.expectedOriginalVersion,
        action: input.resolution.action.trim(),
        target: input.resolution.target.trim(),
        scope,
        requiredCapabilities: [...input.resolution.requiredCapabilities],
        reversibility: input.resolution.reversibility,
        constraints,
        stopConditions,
        decisionRefs: [input.decisionId],
        requiredAuthority: original.requiredAuthority,
        status: "draft",
        idempotencyKey: canonicalM3ResolutionIdempotencyKey(
          input.decisionId,
          successorId,
        ),
        correlationId: `cor:m3-res:${input.decisionId}`,
        executionWindowClass: input.resolution.executionWindowClass,
        inputs: {
          ...(original.inputs ?? {}),
          ...(input.resolution.inputs ?? {}),
          gux15Resolution: {
            kind: "application_command_input",
            notDurableAuthority: true,
            basisSourceRef: basis.sourceRef,
            basisSourceDigest: basis.sourceDigest,
          },
        },
      },
    );

  if (!superseded.ok) {
    return fail(superseded.error.detailCode, superseded.error.message);
  }

  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: successorId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );
  if (!validated.ok) {
    // C2 — supersession already persisted; caller must replay to validate same successor.
    return fail(validated.error.detailCode, validated.error.message);
  }

  const refreshedOriginal =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.originalExecutionContractId,
    });
  if (refreshedOriginal.ok) {
    original = refreshedOriginal.contract;
  }

  const successor = validated.contract;
  const govErr = assertSuccessorGovernanceIdentity({
    original,
    successor,
    decisionId: input.decisionId,
    projectId: input.projectId,
  });
  if (govErr) return govErr;
  const cleanErr = assertSuccessorHasNoUnresolvedSentinels(successor);
  if (cleanErr) return cleanErr;

  return {
    ok: true,
    projectId: input.projectId,
    decisionId: input.decisionId,
    original: toOriginalView(original),
    successor: toSuccessorView(successor),
    reusedFromIdempotency: false,
    disclosures: [
      "G-UX-15 resolve — existing supersession only",
      "ORIGINAL PRESERVED FOR AUDIT",
      "NO IN-PLACE MUTATION OF UNRESOLVED FIELDS",
      "NO CURSOR REAL",
      "NO ATTEMPT IN RESOLVER",
      "CONFIRMATION / SELECT / STARTEXECUTION ARE CALLER COMPOSITION",
    ],
  };
}
```
