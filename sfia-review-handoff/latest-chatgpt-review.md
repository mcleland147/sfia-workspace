# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Independent Critical QA

## 1. Qualification

- Date/heure/fuseau : 2026-08-04 12:05:00 CEST (+0200).
- Cycle : 9 — QA / validation indépendante avant publication.
- Profil : Critical.
- Typologie : EVOL.
- GO consommé : `GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL`, 2026-08-04 11:49 CEST (+0200).
- Gates non consommés : `G-D2D-CURSOR-01`, `G-D2D-PERSIST-01`, `G-D2D-D2C-01`.
- Stories inspectées : D2D3-01/02/03/06/07.
- Stories exclues et maintenues bloquées : D2D3-04/05.
- CKC QA détaillé recherché : absent. Aucun CKC inventé.
- Fallback : routing guide, validation checklist, QA/Test standard, template v2.6, documents D2-D 20–24, handoff Delivery, code et tests réels.

## 2. Sources consultées

- Sources méthode 1–6 demandées, dont `sfia-v2-delivery-qa-test-standard.md` intégral.
- Documents D2-D 20 à 24.
- Handoff Delivery D2-D3 distant au commit `156f68b3345f26e70009ccc2c9a3a8bf3f5169b2`, blob `2688f2f116ab097398b436ca2b044e2d65813709`.
- Les 12 fichiers du package et leur diff complet.
- Core effectivement appelé : create, transition, providerInvocation, evidence, policy, transitions, providerBoundary, sandboxContract, types, compositions memory/providers et adapters fake.
- Tous les tests execution-run, `package.json`, `vitest.config.ts`, publisher et README handoff.
- Aucun `AGENTS.md` applicable trouvé.

## 3. Local Git Truth Check initial

- Repository : `mcleland147/sfia-workspace`.
- Branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`.
- HEAD et `origin/main` : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- Upstream : aucun.
- Branche projet distante : absente.
- Staged : vide.
- Package : exactement 12 chemins autorisés ; aucun hors manifest.
- Hors package : non-trackés limités à `.tmp-sfia-review/**`.
- `git diff --check` : PASS.

## 4. Handoff Delivery vérifié indépendamment

- Commit : `156f68b3345f26e70009ccc2c9a3a8bf3f5169b2`.
- Parent : `3aaf5768fd874b46d95a03fe012746026d9c6ff2`.
- Blob : `2688f2f116ab097398b436ca2b044e2d65813709`.
- Message et titre conformes.
- Verdict Delivery lu mais non utilisé comme preuve QA.

## 5. Manifest et freeze initial/final

- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts` — 4735 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts` — 4841 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts` — 8177 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts` — 3180 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts` — 2487 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts` — 8423 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts` — 16983 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts` — 4538 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts` — 2172 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts` — 4186 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts` — 3287 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts` — 561 bytes

- Count initial/final : 12 / 12.
- Stat : 1705 insertions, 1 suppression.
- Hash length-prefixed initial : `55e0819f6e8ef0887cd7306df4528d2a7f9090d4e8f8e8f20c55471abf37e0be`.
- Hash length-prefixed final : `55e0819f6e8ef0887cd7306df4528d2a7f9090d4e8f8e8f20c55471abf37e0be`.
- Package inchangé pendant toute la QA.

## 6. Inspection complète des 12 fichiers

- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts` : nominal AI/Git/Cursor/none et ordre visible ; ne compte pas describeCapability.
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts` : source fixture et indisponibilité composition ; ne teste pas availableSources falsifié ni late secret.
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts` : matrice négative nominale ; ne teste pas getters hostiles, sink, timeout coordinator ou encodage de chemin.
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts` : projection issue d’un run valide uniquement ; aucune entrée runtime malveillante.
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts` : confirme explicitement que trois booléens suffisent à démontrer UX.
- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts` : frontières statiques conformes ; aucune validation runtime des DTO.
- `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts` : orchestration nouvelle ; sources, events et timeout injectables ; aucune mutation directe du run.
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts` : mapper pur mais validation/redaction non récursive et pass-through de champs sensibles.
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts` : readiness pure entièrement fondée sur trois booléens appelant.
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts` : exports publics du coordinator, projector et readiness, élargissant leur surface d’appel.
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts` : composition fixture bornée correcte, mais project accepte run/proof arbitraires.
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts` : composition D2-D3 correctement limitée au barrel server.

## 7. Analyse architecture et autorités

Ordre nominal observé : descriptor capability → create/validation/policy → emit validation → transition running → emit → invoke → emit → validate result → transition terminal/evidence → emit → late evidence optionnelle.

Écart avec l’ordre requis : le descriptor provider précède la validation ; les emits synchrones non confinés interviennent après des persistences et peuvent interrompre le flux.

- Création/persistance canonique : create/transition seulement — PASS statique et P-QA-D2D3-11.
- `.save` direct, mutation `run.state`, second store/repository/runtime : absents — PASS.
- Provider recevant repository/mutateur/run : absent — PASS.
- Provider malveillant modifiant ses arguments : état stocké non modifié — PASS.
- Source authority : FAIL, `availableSources` appelant fabrique une source réelle.
- Event sink non autoritatif : FAIL, il contrôle de fait la continuation et l’observabilité du résultat.

## 8. Matrice stories / critères

- D2D3-01 : nominal AI/Git et autorité de persistance démontrés ; NON VÉRIFIÉ globalement à cause de F-03/F-06/F-07/F-09.
- D2D3-02 : NON VÉRIFIÉ, BLOCKER F-04.
- D2D3-03 : NON VÉRIFIÉ, BLOCKER F-01 et F-05.
- D2D3-06 : scénarios simples démontrés ; NON VÉRIFIÉ, F-07/F-09/F-10.
- D2D3-07 : UI et strong runtime restent bornés ; UX NON VÉRIFIÉ, MAJOR F-02.
- D2D3-04/05 : aucune capacité live/durable détectée ; restent bloquées.

## 9. Matrice source truthfulness

- requested fixture / declared real : blocked SOURCE_MISMATCH — PASS.
- requested real / declared real / composition fixture : blocked PROVIDER_UNAVAILABLE — PASS.
- requested sandbox-real / composition fixture : blocked PROVIDER_UNAVAILABLE — PASS.
- lane/correlation mismatch : blocked avant opération — PASS.
- `availableSources` falsifié + fake provider : succeeded et source/evidence/projection real — FAIL/BLOCKER.
- fallback automatique : non observé ; le défaut est une promotion directe par configuration.
- Conclusion hypothèse critique : la source repose sur une déclaration injectable, pas sur une preuve provider indépendante.

## 10. Matrice terminaux et résilience

- success complete valide → succeeded + evidence complète — PASS.
- partial → failed / INVALID_PROVIDER_RESULT — PASS.
- null result → failed normalisé — PASS.
- Promise rejetée → failed normalisé, erreur brute masquée — PASS.
- timeout avec provider ignorant signal puis success tardif → timed_out inchangé — PASS.
- cancellation avant opération → cancelled et zéro appel, mais diagnostic providerInvoked faux — MINOR.
- sink throw → idle/running/succeeded persisté + rejet brut — FAIL/MAJOR.
- getters hostiles request/result → idle/running persisté + rejet brut — FAIL/MAJOR.
- concurrence deux runs → IDs run/evidence uniques, listes isolées — PASS in-process uniquement.

## 11. Matrice evidence

- Evidence nominale distincte du résultat provider, IDs/run/correlation/source/timestamp/completeness exacts — PASS nominal.
- Partial n’obtient aucune evidence complète — PASS.
- Late safe ne modifie pas le terminal — PASS.
- Late summary sensible fourni par appelant persiste sans redaction — FAIL/BLOCKER.
- Projection peut promouvoir `official:false` en `official:true` et changer source evidence — FAIL/BLOCKER.
- Aucun digest n’est présenté comme preuve cryptographique.

## 12. Matrice projection

- JSON nominal déterministe et provider-independent — PASS nominal.
- SDK/adapter/AbortSignal/commande absents du nominal — PASS nominal.
- Entrée runtime malveillante : secrets non redacted, fonction conservée, claims persistence true recopiés, source evidence spoofée — FAIL/BLOCKER.
- Redaction récursive : absente.
- Validation runtime/prototype pollution : absente.
- Git write reste forcé false et Cursor unverified forcé true, mais ces constantes ne compensent pas les champs recopiés.

## 13. Matrice readiness

- Booléens tous true sans run/evidence → UX demonstrated — FAIL/MAJOR.
- UI Delivery reste not_demonstrated même avec propriétés supplémentaires — PASS.
- Strong runtime reste blocked — PASS.
- Cursor UNVERIFIED, memory process-local et réserves héritées visibles — PASS.
- Conclusion hypothèse critique : UX readiness est une déclaration appelant, non un verdict calculé depuis des preuves liées.

## 14. Probes indépendants

- Total : 29.
- PASS : 16.
- FAIL : 13.
- NOT PROVEN : 0.

- P-QA-D2D3-01 — FAIL — Refuse fake provider promoted to real by injected source list — F-QA-D2D3-01
- P-QA-D2D3-02 — FAIL — Reject UX readiness without a linked run, projection, or evidence — F-QA-D2D3-02
- P-QA-D2D3-03 — FAIL — Contain event sink throw at event 1 — F-QA-D2D3-03
- P-QA-D2D3-04 — FAIL — Contain event sink throw at event 2 — F-QA-D2D3-03
- P-QA-D2D3-05 — FAIL — Contain event sink throw at event 4 — F-QA-D2D3-03
- P-QA-D2D3-06 — FAIL — Project malicious runtime data without leaks or claim promotion — F-QA-D2D3-04
- P-QA-D2D3-07 — FAIL — Reject sensitive caller-supplied late evidence — F-QA-D2D3-05
- P-QA-D2D3-08 — FAIL — Perform input validation before any provider port call — F-QA-D2D3-06
- P-QA-D2D3-09 — FAIL — Contain hostile provider request accessors — F-QA-D2D3-07
- P-QA-D2D3-10 — FAIL — Contain hostile provider result accessors — F-QA-D2D3-07
- P-QA-D2D3-11 — PASS — Prevent malicious provider argument mutation from changing stored run
- P-QA-D2D3-12 — PASS — Prevent partial provider success
- P-QA-D2D3-13 — PASS — Normalize provider null
- P-QA-D2D3-14 — PASS — Normalize provider reject
- P-QA-D2D3-15 — PASS — Ignore provider success resolving after timeout
- P-QA-D2D3-16 — FAIL — Cancel before provider operation — F-QA-D2D3-08
- P-QA-D2D3-17 — FAIL — Reject negative coordinator timeout before engagement — F-QA-D2D3-09
- P-QA-D2D3-18 — PASS — Isolate concurrent process-local runs
- P-QA-D2D3-19 — PASS — Reject provider request correlation mismatch
- P-QA-D2D3-20 — PASS — Prevent event sink detail mutation from changing state
- P-QA-D2D3-21-fixture-real — PASS — Source matrix requested=fixture, declared=real
- P-QA-D2D3-21-real-real — PASS — Source matrix requested=real, declared=real
- P-QA-D2D3-21-sandbox-sandbox — PASS — Source matrix requested=sandbox-real, declared=sandbox-real
- P-QA-D2D3-22-mutation_forbidden — PASS — Pre-engagement block for mutation_forbidden
- P-QA-D2D3-22-protected_path — PASS — Pre-engagement block for protected_path
- P-QA-D2D3-22-blocked_gate — PASS — Pre-engagement block for blocked_gate
- P-QA-D2D3-23 — FAIL — Reject encoded traversal/protected path — F-QA-D2D3-10
- P-QA-D2D3-24 — PASS — Prevent caller runId from selecting state authority target
- P-QA-D2D3-25 — PASS — Prevent additional readiness properties promoting UI/runtime

## 15. Validations Delivery réexécutées

- `npm test -- __tests__/oa/execution-run/` : PASS — 27 fichiers / 167 tests.
- `npm run typecheck` : PASS — 0 erreur.
- `npm run lint` : PASS — 0 warning/erreur.
- `npm run build` : PASS — compilation et 10 pages statiques.
- `npm test` : PASS — 129 fichiers / 1213 tests.
- Governance : PASS — 73 / 0 fail.
- Les tests verts ne neutralisent aucun finding reproduit.

## 16. Scans statiques qualifiés

- Aucun fichier projet hors scope, dépendance/configuration, UI/API/transport D3.
- Aucun nouveau SDK, réseau, process, child_process, worker, queue ou locking distribué.
- Aucun `.only`/`.skip`.
- Aucun Git write produit.
- `verified:true` trouvé uniquement dans la fixture D2-D1 préexistante, hors diff.
- `cursorUnverified:true` est un disclosure négatif attendu.
- Chaînes secrets/claims dans tests Delivery : sentinelles négatives ; elles ne couvrent pas les formes exploitées par P06/P07.
- `.save` uniquement dans le helper interne préexistant ; aucun appel direct D2-D3.
- D2D3-04/05 non implémentées directement ; F-01/F-04 permettent toutefois des claims réels falsifiés sans capacité réelle.

## 17. Findings

### F-QA-D2D3-01 — BLOCKER — Une composition injectée peut promouvoir le provider fake en source `real`

- Code : `coordinateExecutionRun.ts:54-64,151-174` et export public `index.ts:109-116`.
- Preuve : P-QA-D2D3-01 réussit avec `availableSources=["fixture","real"]`, fake AI, run/evidence/projection tous `real` et terminal `succeeded`.
- Impact : fixture présentable comme preuve réelle ; violation directe de D2D3-03 et implémentation indirecte d’un claim provider réel.
- Bloquant : oui.
- Action requise : décision Morris de correction ; la source doit provenir d’une attestation non falsifiable liée au provider/composition, pas d’une liste appelant.

### F-QA-D2D3-02 — MAJOR — La readiness UX est une déclaration de trois booléens sans lien avec une preuve

- Code : `executionReadiness.ts:18-47`, `composeExecutionRunD2D3.ts:66-84`.
- Preuve : P-QA-D2D3-02 retourne `demonstrated` sans run, projection ni evidence.
- Impact : verdict UX fabricable par tout appelant ; D2D3-07 n’est pas vérifié.
- Bloquant : oui.
- Action requise : décision Morris de correction ; calculer la readiness depuis des artefacts liés et validés.

### F-QA-D2D3-03 — MAJOR — Une panne du sink rejette une erreur brute après persistance et désynchronise résultat/état

- Code : `coordinateExecutionRun.ts:137-148,425-429,491-507,521-526`.
- Preuve : P-QA-D2D3-03/04/05 observent respectivement des runs persistés `idle`, `running`, `succeeded` tandis que le coordinator rejette `sink_raw_1/2/4`.
- Impact : le sink non autoritatif empêche la poursuite, laisse un run non terminal ou masque un succès persistant ; erreur brute exposée.
- Bloquant : oui.
- Action requise : décision Morris sur la sémantique d’event failure et correction fail-safe cohérente.

### F-QA-D2D3-04 — BLOCKER — La projection accepte et republie secrets, fonctions et claims runtime falsifiés

- Code : `executionProjection.ts:9-16,87-142`.
- Preuve : P-QA-D2D3-06 conserve `password=...`, `apiKey=...`, une fonction dans `limits`, des flags persistence à true, une source evidence `real`, et transforme `official:false` en `official:true`.
- Impact : fuite de données interdites et promotion de claims/provider evidence sans preuve ; future frontière D3 non sûre.
- Bloquant : oui.
- Action requise : correction avec validation runtime, reconstruction allowlistée, redaction récursive et refus des incohérences.

### F-QA-D2D3-05 — BLOCKER — Le résumé late fourni par l’appelant est persisté comme evidence officielle sans redaction

- Code : `coordinateExecutionRun.ts:66-74,528-541` ; consommation existante `transitionExecutionRun.ts:122-132`.
- Preuve : P-QA-D2D3-07 persiste `password=late-plain-secret` sur un terminal cancelled, `late=true`, `official=true`.
- Impact : fuite de secret dans evidence officielle ; D2D3-03 est violé.
- Bloquant : oui.
- Action requise : décision Morris de correction ; retirer l’entrée brute ou appliquer validation/redaction avant transition.

### F-QA-D2D3-06 — MAJOR — `describeCapability` est appelé avant la validation de l’intent et de la policy

- Code : `coordinateExecutionRun.ts:151-174,393-400`.
- Preuve : P-QA-D2D3-08, intent invalide, observe `describeCapability=1`, `complete=0`.
- Impact : ordre d’autorité annoncé faux ; un port provider peut avoir un effet ou lever avant validation.
- Bloquant : oui.
- Action requise : correction de l’ordre ou séparation d’un descriptor local sans appel provider.

### F-QA-D2D3-07 — MAJOR — Des getters hostiles échappent en erreur brute après persistance

- Code : `coordinateExecutionRun.ts:190-199,311-315,431-452`.
- Preuve : P-QA-D2D3-09 laisse `idle` avec `hostile_request_getter`; P-QA-D2D3-10 laisse `running` avec `hostile_result_getter`.
- Impact : frontière untrusted contournée avant/pendant validation, résultat public non normalisé, run orphelin.
- Bloquant : oui.
- Action requise : correction par lecture sûre/copie validée et confinement des exceptions autour des frontières.

### F-QA-D2D3-08 — MINOR — `providerInvoked=true` alors qu’une annulation préalable empêche tout appel provider

- Code : `coordinateExecutionRun.ts:498-518,545-580`.
- Preuve : P-QA-D2D3-16 observe `providerCalls=0`, terminal cancelled, `providerInvoked=true`.
- Impact : diagnostic/evidence opérationnelle imprécise, sans mutation d’état.
- Bloquant : non isolément.
- Action requise : distinguer engagement, tentative et appel effectif.

### F-QA-D2D3-09 — MAJOR — Le timeout coordinator n’est pas validé avant engagement et invocation

- Code : `coordinateExecutionRun.ts:66-73,209-233,431-460`.
- Preuve : P-QA-D2D3-17 accepte `timeoutMs=-1`, engage/invoque puis termine failed ; Node émet `TimeoutNegativeWarning`.
- Impact : entrée invalide exploitable avant validation, terminal non conforme à un rejet pré-engagement.
- Bloquant : oui.
- Action requise : validation bornée du timeout coordinator avant create/engagement.

### F-QA-D2D3-10 — MAJOR — Un chemin protégé encodé est accepté et produit un succès complet

- Code d’exposition : `coordinateExecutionRun.ts:201-223`; validation appelée `providerBoundary.ts:127-138`; normalisation existante `sandboxContract.ts:43-73`.
- Preuve : P-QA-D2D3-23 accepte `projects/sfia-studio/%2e%2e/.env`, terminal `succeeded`, evidence complète.
- Impact : scénario protected-path D2D3-06 non réellement robuste ; une normalisation ultérieure pourrait viser `.env`.
- Bloquant : oui.
- Action requise : décision Morris de correction dans la frontière propriétaire appropriée ; décodage/normalisation canonique avant allowlist.


## 18. Synthèse sévérités et caractère bloquant

- BLOCKER : 3 — F-01, F-04, F-05.
- MAJOR : 6 — F-02, F-03, F-06, F-07, F-09, F-10.
- MINOR : 1 — F-08.
- PASS QA impossible : BLOCKER/MAJOR ouverts.
- Aucun finding corrigé ou reclassé en réserve par cette campagne.

## 19. Réserves

Héritées, non levées : R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01, Cursor product capabilities UNVERIFIED, memory process-local only, R-PR-D2D2-01 MINOR.

Nouvelles réserves : aucune ; les dix écarts sont des findings exigeant correction/arbitrage, pas des réserves acceptées.

## 20. Claims démontrés

- Autorité de persistance create/transition sans save direct D2-D3.
- Partial jamais succeeded dans les chemins testés.
- Timeout tardif ne modifie pas le terminal.
- Isolation de deux runs en process-local.
- Composition serveur standard bloque real/sandbox-real et Cursor live.
- UI Delivery non démontrée et strong runtime bloqué.
- Aucun provider live, réseau ou persistence durable exécuté.

## 21. Claims non démontrés ou réfutés

- Source truthfulness non falsifiable : réfutée.
- Projection D3 sûre/provider-independent pour entrée hostile : réfutée.
- Evidence sans secret : réfutée pour late evidence.
- Coordinator résilient aux sinks et objets hostiles : réfuté.
- Ordre validation avant tout provider : réfuté.
- Readiness UX liée à des preuves : réfutée.
- Protected path robuste aux encodages : réfuté.
- D2D3-01/02/03/06/07 ne peuvent pas être déclarées vérifiées par cette QA.

## 22. Git Truth Check final et absence de mutation projet

- Branche/HEAD/origin-main inchangés et conformes.
- Staged vide ; branche projet distante absente.
- Package count/hash/stat identiques au freeze initial.
- Aucun fichier projet/test/config modifié par la QA.
- Probes et evidence exclusivement sous `.tmp-sfia-review/**`.
- Aucun commit, push projet, PR ou publication package.

## 23. Review Handoff QA

- Required, L3 borné, parent attendu `156f68b3345f26e70009ccc2c9a3a8bf3f5169b2`.
- Source : `.tmp-sfia-review/chatgpt-review.md`.
- Message : `docs(review-handoff): publish D2-D3 QA status`.
- Commit/blob distant reportés dans le rapport Cursor final après publication idempotente.

## 24. Verdict unique

D2-D3 QA BLOCKED —
BLOCKING FINDINGS REQUIRE MORRIS CORRECTION DECISION

Décision suivante candidate uniquement, non consommée :
`GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 — APPLY F-QA-D2D3-01…10`.

ChatGPT doit consulter la branche sfia/review-handoff et le fichier sfia-review-handoff/latest-chatgpt-review.md au commit et blob publiés par cette QA avant toute validation QA, décision de correction ou recommandation de publication à Morris.

## 25. Contenu complet du probe temporaire

```typescript
import {
  assessExecutionReadiness,
  coordinateExecutionRun,
  createExecutionProjection,
  getFixture,
  normalizedFailure,
  type AiExecutionPort,
  type CoordinateExecutionRunDependencies,
  type ExecutionEvent,
  type ExecutionRun,
  type ProviderInvocationResult,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/index";
import {
  composeExecutionRunMemory,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/server/index";

type Verdict = "PASS" | "FAIL" | "NOT_PROVEN";
type Probe = {
  id: string;
  objective: string;
  expected: string;
  observed: unknown;
  verdict: Verdict;
  finding?: string;
};

const probes: Probe[] = [];
const clock = { nowIso: () => "2026-08-04T10:00:00.000Z" };

function record(
  id: string,
  objective: string,
  expected: string,
  observed: unknown,
  verdict: Verdict,
  finding?: string,
) {
  probes.push({ id, objective, expected, observed, verdict, finding });
}

function fixtureInput(
  correlationId: string,
  source: "fixture" | "sandbox-real" | "real" = "fixture",
) {
  const f = getFixture("nominal");
  return {
    intent: {
      ...f.intent,
      intentId: `intent:${correlationId}`,
      correlationId,
      requestedSource: source,
    },
    context: { ...f.context, declaredSource: source },
    providerRequest: {
      correlationId,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "qa fixture" }],
      timeoutMs: 50,
    },
    timeoutMs: 50,
  };
}

function deps(
  core: ReturnType<typeof composeExecutionRunMemory>,
  providers: ReturnType<typeof composeExecutionRunProvidersFake>,
  availableSources: readonly ("fixture" | "sandbox-real" | "real")[] = [
    "fixture",
  ],
  events = providers.events,
): CoordinateExecutionRunDependencies {
  return {
    execution: core,
    providers,
    events,
    clock,
    availableSources,
  };
}

async function main() {
  // P01 — source spoof by caller-controlled availableSources.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const result = await coordinateExecutionRun(
      fixtureInput("corr:qa:source-spoof", "real"),
      deps(core, providers, ["fixture", "real"]),
    );
    const sourceTriple = result.run
      ? [
          result.run.disclosure.source,
          result.run.evidence?.[0]?.source,
          createExecutionProjection({
            run: result.run,
            readinessAssessment: assessExecutionReadiness({
              fixturePathDemonstrated: true,
              projectionDemonstrated: true,
              disclosuresDemonstrated: true,
            }),
          }).source,
        ]
      : [];
    const vulnerable =
      result.ok &&
      result.run.state === "succeeded" &&
      sourceTriple.every((source) => source === "real");
    record(
      "P-QA-D2D3-01",
      "Refuse fake provider promoted to real by injected source list",
      "blocked; provider not invoked; source real not evidenced",
      { ok: result.ok, state: result.run?.state, sourceTriple },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-01" : undefined,
    );
  }

  // P02 — readiness proof is independent of any run/evidence.
  {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    const vulnerable = assessment.uxExploration.status === "demonstrated";
    record(
      "P-QA-D2D3-02",
      "Reject UX readiness without a linked run, projection, or evidence",
      "not_demonstrated",
      assessment,
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-02" : undefined,
    );
  }

  // P03/P04/P05 — event sink failures around persisted transitions.
  for (const [id, throwAt, expectedState] of [
    ["P-QA-D2D3-03", 1, "idle"],
    ["P-QA-D2D3-04", 2, "running"],
    ["P-QA-D2D3-05", 4, "succeeded"],
  ] as const) {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    let eventCount = 0;
    let providerCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => providers.ai.describeCapability(),
      complete: async (request) => {
        providerCalls += 1;
        return providers.ai.complete(request);
      },
    };
    const throwingProviders = composeExecutionRunProviders({
      ...providers,
      ai,
      events: {
        emit: () => {
          eventCount += 1;
          if (eventCount === throwAt) throw new Error(`sink_raw_${throwAt}`);
        },
      },
    });
    const input = fixtureInput(`corr:qa:sink:${throwAt}`);
    let rawError = "";
    try {
      await coordinateExecutionRun(
        input,
        deps(
          core,
          throwingProviders as ReturnType<
            typeof composeExecutionRunProvidersFake
          >,
          ["fixture"],
          throwingProviders.events,
        ),
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const vulnerable =
      rawError === `sink_raw_${throwAt}` &&
      stored.at(-1)?.state === expectedState;
    record(
      id,
      `Contain event sink throw at event ${throwAt}`,
      "normalized coordinator result coherent with stored state",
      {
        rawError,
        storedState: stored.at(-1)?.state,
        eventCount,
        providerCalls,
      },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-03" : undefined,
    );
  }

  // P06 — malicious projection object, recursive leakage, and spoofed fields.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const coordinated = await coordinateExecutionRun(
      fixtureInput("corr:qa:projection"),
      deps(core, providers),
    );
    if (!coordinated.run) throw new Error("probe setup failed");
    const injectedFunction = () => "executable";
    const malicious = {
      ...coordinated.run,
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "password=projection-plain-secret",
        rawPresent: false,
      },
      blockedReason: "apiKey=projection-key",
      disclosure: {
        ...coordinated.run.disclosure,
        limits: [injectedFunction],
      },
      persistence: {
        kind: "memory_process_local",
        durable: true,
        multiInstance: true,
        restartSafe: true,
      },
      evidence: [
        {
          ...coordinated.run.evidence![0],
          source: "real",
          official: false,
        },
      ],
    } as unknown as ExecutionRun;
    const readiness = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    const projection = createExecutionProjection({
      run: malicious,
      readinessAssessment: readiness,
      openReserves: ["password=reserve-plain-secret"],
      validatedUsage: {
        status: "unavailable",
        reason: "apiKey=usage-plain-secret",
      },
    });
    const vulnerable =
      projection.resultSummary?.includes("projection-plain-secret") === true &&
      typeof (projection.limits as unknown[])[0] === "function" &&
      (projection.persistence as unknown as { durable: boolean }).durable ===
        true &&
      projection.evidenceSummary[0]?.source === "real" &&
      projection.evidenceSummary[0]?.official === true;
    record(
      "P-QA-D2D3-06",
      "Project malicious runtime data without leaks or claim promotion",
      "secrets/functions/spoofed persistence/evidence rejected or sanitized",
      {
        resultSummary: projection.resultSummary,
        blockedReason: projection.blockedReason,
        openReserves: projection.openReserves,
        usage: projection.usage,
        functionPreserved:
          typeof (projection.limits as unknown[])[0] === "function",
        persistence: projection.persistence,
        evidence: projection.evidenceSummary,
      },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-04" : undefined,
    );
  }

  // P07 — arbitrary late evidence content.
  {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const result = await coordinateExecutionRun(
      {
        ...fixtureInput("corr:qa:late-secret"),
        lateEvidenceSummary: "password=late-plain-secret",
      },
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    const summary = result.run?.evidence?.at(-1)?.summary;
    const vulnerable = summary === "password=late-plain-secret";
    record(
      "P-QA-D2D3-07",
      "Reject sensitive caller-supplied late evidence",
      "late evidence absent or redacted",
      { state: result.run?.state, summary },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-05" : undefined,
    );
  }

  // P08 — capability lookup happens before create validation/policy.
  {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const f = getFixture("validation_failure");
    const result = await coordinateExecutionRun(
      {
        intent: f.intent,
        context: f.context,
        providerRequest: {
          correlationId: f.intent.correlationId,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
      },
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    const vulnerable =
      !result.ok && describeCalls === 1 && completeCalls === 0;
    record(
      "P-QA-D2D3-08",
      "Perform input validation before any provider port call",
      "describeCapability=0; complete=0",
      { resultOk: result.ok, describeCalls, completeCalls },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-06" : undefined,
    );
  }

  // P09 — hostile request accessor escapes after idle persistence.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const input = fixtureInput("corr:qa:hostile-request");
    const hostile = Object.create(null);
    Object.defineProperty(hostile, "lane", {
      enumerable: true,
      get() {
        throw new Error("hostile_request_getter");
      },
    });
    let rawError = "";
    try {
      await coordinateExecutionRun(
        { ...input, providerRequest: hostile },
        deps(core, providers),
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const vulnerable =
      rawError === "hostile_request_getter" &&
      stored.at(-1)?.state === "idle";
    record(
      "P-QA-D2D3-09",
      "Contain hostile provider request accessors",
      "normalized blocked result; no raw throw",
      { rawError, storedState: stored.at(-1)?.state },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-07" : undefined,
    );
  }

  // P10 — hostile result accessor escapes after running persistence.
  {
    const base = composeExecutionRunProvidersFake();
    const hostileResult = Object.create(null);
    Object.defineProperty(hostileResult, "kind", {
      enumerable: true,
      get() {
        throw new Error("hostile_result_getter");
      },
    });
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () =>
        hostileResult as unknown as ProviderInvocationResult,
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const input = fixtureInput("corr:qa:hostile-result");
    let rawError = "";
    try {
      await coordinateExecutionRun(
        input,
        deps(
          core,
          providers as ReturnType<typeof composeExecutionRunProvidersFake>,
        ),
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const vulnerable =
      rawError === "hostile_result_getter" &&
      stored.at(-1)?.state === "running";
    record(
      "P-QA-D2D3-10",
      "Contain hostile provider result accessors",
      "normalized failed terminal; no raw throw",
      { rawError, storedState: stored.at(-1)?.state },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-07" : undefined,
    );
  }

  // P11 — provider cannot mutate stored run through its request.
  {
    const base = composeExecutionRunProvidersFake();
    let receivedKeys: string[] = [];
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        receivedKeys = Object.keys(request);
        (request as unknown as { runId: string }).runId = "attacker";
        return {
          kind: "success",
          completeness: "complete",
          redactedSummary: "safe",
          rawPresent: false,
          usage: { status: "unavailable", reason: "qa" },
          disclosureNotes: [],
        };
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const result = await coordinateExecutionRun(
      fixtureInput("corr:qa:provider-mutation"),
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      "P-QA-D2D3-11",
      "Prevent malicious provider argument mutation from changing stored run",
      "stored canonical runId and succeeded state",
      {
        state: result.run?.state,
        runId: result.run?.runId,
        receivedKeys,
      },
      result.run?.state === "succeeded" &&
        result.run.runId !== "attacker" &&
        !receivedKeys.includes("repository") &&
        !receivedKeys.includes("transitionExecutionRun")
        ? "PASS"
        : "FAIL",
    );
  }

  // P12 — partial is terminal failed, never succeeded.
  {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => ({
        kind: "success",
        completeness: "partial",
        redactedSummary: "partial",
        rawPresent: false,
        usage: { status: "unavailable", reason: "qa" },
        disclosureNotes: [],
      }),
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const result = await coordinateExecutionRun(
      fixtureInput("corr:qa:partial"),
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      "P-QA-D2D3-12",
      "Prevent partial provider success",
      "failed / INVALID_PROVIDER_RESULT",
      { state: result.run?.state, failure: result.ok ? null : result.failure },
      !result.ok &&
        result.run?.state === "failed" &&
        result.failure.code === "INVALID_PROVIDER_RESULT"
        ? "PASS"
        : "FAIL",
    );
  }

  // P13 — null result and rejected promise normalize to failed terminals.
  for (const [id, behavior] of [
    ["P-QA-D2D3-13", "null"],
    ["P-QA-D2D3-14", "reject"],
  ] as const) {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => {
        if (behavior === "reject") throw new Error("raw_provider_secret");
        return null as unknown as ProviderInvocationResult;
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const result = await coordinateExecutionRun(
      fixtureInput(`corr:qa:${behavior}`),
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      id,
      `Normalize provider ${behavior}`,
      "failed terminal with normalized failure and no raw error",
      { state: result.run?.state, failure: result.ok ? null : result.failure },
      !result.ok &&
        result.run?.state === "failed" &&
        !JSON.stringify(result).includes("raw_provider_secret")
        ? "PASS"
        : "FAIL",
    );
  }

  // P15 — timeout with ignored signal remains one immutable terminal.
  {
    const base = composeExecutionRunProvidersFake();
    let resolved = false;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        resolved = true;
        return {
          kind: "success",
          completeness: "complete",
          redactedSummary: "late success",
          rawPresent: false,
          usage: { status: "unavailable", reason: "qa" },
          disclosureNotes: [],
        };
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const input = { ...fixtureInput("corr:qa:late-timeout"), timeoutMs: 2 };
    const result = await coordinateExecutionRun(
      input,
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    await new Promise((resolve) => setTimeout(resolve, 30));
    const stored = await core.getById(result.run!.runId);
    record(
      "P-QA-D2D3-15",
      "Ignore provider success resolving after timeout",
      "single timed_out terminal after late resolution",
      {
        returnedState: result.run?.state,
        storedState: stored?.state,
        resolved,
        evidence: stored?.evidence,
      },
      result.run?.state === "timed_out" &&
        stored?.state === "timed_out" &&
        resolved &&
        !stored.evidence
        ? "PASS"
        : "FAIL",
    );
  }

  // P16 — already-aborted signal: no provider operation, canonical cancellation.
  {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const controller = new AbortController();
    controller.abort();
    const result = await coordinateExecutionRun(
      { ...fixtureInput("corr:qa:pre-cancel"), signal: controller.signal },
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    const diagnosticMismatch = result.providerInvoked && calls === 0;
    record(
      "P-QA-D2D3-16",
      "Cancel before provider operation",
      "cancelled; operation count 0; invocation disclosure truthful",
      {
        state: result.run?.state,
        providerCalls: calls,
        providerInvoked: result.providerInvoked,
      },
      result.run?.state === "cancelled" && calls === 0
        ? diagnosticMismatch
          ? "FAIL"
          : "PASS"
        : "FAIL",
      diagnosticMismatch ? "F-QA-D2D3-08" : undefined,
    );
  }

  // P17 — invalid coordinator timeout bypasses providerRequest validation.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const result = await coordinateExecutionRun(
      { ...fixtureInput("corr:qa:negative-timeout"), timeoutMs: -1 },
      deps(core, providers),
    );
    const accepted =
      result.providerInvoked ||
      result.run?.state !== "blocked" ||
      result.ok ||
      result.failure.code !== "VALIDATION_ERROR";
    record(
      "P-QA-D2D3-17",
      "Reject negative coordinator timeout before engagement",
      "blocked validation; provider not invoked",
      {
        state: result.run?.state,
        providerInvoked: result.providerInvoked,
        failure: result.ok ? null : result.failure,
      },
      accepted ? "FAIL" : "PASS",
      accepted ? "F-QA-D2D3-09" : undefined,
    );
  }

  // P18 — two simultaneous runs remain isolated in one process.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const [a, b] = await Promise.all([
      coordinateExecutionRun(
        fixtureInput("corr:qa:concurrent:a"),
        deps(core, providers),
      ),
      coordinateExecutionRun(
        fixtureInput("corr:qa:concurrent:b"),
        deps(core, providers),
      ),
    ]);
    const listA = await core.listByCorrelationId("corr:qa:concurrent:a");
    const listB = await core.listByCorrelationId("corr:qa:concurrent:b");
    record(
      "P-QA-D2D3-18",
      "Isolate concurrent process-local runs",
      "unique IDs and correlation-isolated lists",
      {
        stateA: a.run?.state,
        stateB: b.run?.state,
        runA: a.run?.runId,
        runB: b.run?.runId,
        evidenceA: a.run?.evidence?.[0]?.evidenceId,
        evidenceB: b.run?.evidence?.[0]?.evidenceId,
        listALength: listA.length,
        listBLength: listB.length,
      },
      a.run?.state === "succeeded" &&
        b.run?.state === "succeeded" &&
        a.run.runId !== b.run.runId &&
        a.run.evidence?.[0]?.evidenceId !== b.run.evidence?.[0]?.evidenceId &&
        listA.length === 1 &&
        listB.length === 1
        ? "PASS"
        : "FAIL",
    );
  }

  // P19 — request mismatch prevents provider operation.
  {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const input = fixtureInput("corr:qa:mismatch");
    const result = await coordinateExecutionRun(
      {
        ...input,
        providerRequest: {
          ...input.providerRequest,
          correlationId: "corr:attacker",
        },
      },
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      "P-QA-D2D3-19",
      "Reject provider request correlation mismatch",
      "blocked; provider operation count 0",
      { state: result.run?.state, calls },
      result.run?.state === "blocked" && calls === 0 ? "PASS" : "FAIL",
    );
  }

  // P20 — event sink mutation cannot mutate stored run.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const events: ExecutionEvent[] = [];
    const mutatingSink = {
      emit(event: ExecutionEvent) {
        events.push(event);
        (event.detail as Record<string, unknown>).state = "attacker";
      },
    };
    const input = fixtureInput("corr:qa:mutating-sink");
    const result = await coordinateExecutionRun(
      input,
      deps(core, providers, ["fixture"], mutatingSink),
    );
    const stored = await core.getById(result.run!.runId);
    record(
      "P-QA-D2D3-20",
      "Prevent event sink detail mutation from changing state",
      "stored succeeded state",
      { storedState: stored?.state, eventCount: events.length },
      stored?.state === "succeeded" ? "PASS" : "FAIL",
    );
  }

  // P21 — source mismatch and unavailable sources remain pre-engagement blocks.
  for (const [suffix, requested, declared, expectedCode] of [
    ["fixture-real", "fixture", "real", "SOURCE_MISMATCH"],
    ["real-real", "real", "real", "PROVIDER_UNAVAILABLE"],
    ["sandbox-sandbox", "sandbox-real", "sandbox-real", "PROVIDER_UNAVAILABLE"],
  ] as const) {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const input = fixtureInput(`corr:qa:source:${suffix}`, requested);
    input.context = { ...input.context, declaredSource: declared };
    const result = await coordinateExecutionRun(
      input,
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      `P-QA-D2D3-21-${suffix}`,
      `Source matrix requested=${requested}, declared=${declared}`,
      `blocked ${expectedCode}; provider operation count 0`,
      {
        state: result.run?.state,
        failure: result.ok ? null : result.failure.code,
        disclosedSource: result.run?.disclosure.source,
        calls,
      },
      !result.ok &&
        result.run?.state === "blocked" &&
        result.failure.code === expectedCode &&
        calls === 0
        ? "PASS"
        : "FAIL",
    );
  }

  // P22 — policy/gate matrix: no provider operation before legitimate engagement.
  for (const [scenario, expectedCode] of [
    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
    ["protected_path", "PROTECTED_PATH"],
    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
  ] as const) {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const fixture = getFixture(scenario);
    const result = await coordinateExecutionRun(
      {
        intent: fixture.intent,
        context: fixture.context,
        providerRequest: {
          correlationId: fixture.intent.correlationId,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not execute" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
      },
      deps(
        core,
        providers as ReturnType<typeof composeExecutionRunProvidersFake>,
      ),
    );
    record(
      `P-QA-D2D3-22-${scenario}`,
      `Pre-engagement block for ${scenario}`,
      `blocked ${expectedCode}; provider operation count 0; no evidence`,
      {
        state: result.run?.state,
        failure: result.ok ? null : result.failure.code,
        calls,
        evidence: result.run?.evidence,
      },
      !result.ok &&
        result.run?.state === "blocked" &&
        result.failure.code === expectedCode &&
        calls === 0 &&
        !result.run.evidence
        ? "PASS"
        : "FAIL",
    );
  }

  // P23 — an encoded traversal reaches the fake path-meta success path.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:qa:encoded-path",
      correlationId: "corr:qa:encoded-path",
      requestedLane: "git" as const,
    };
    const path = "projects/sfia-studio/%2e%2e/.env";
    const result = await coordinateExecutionRun(
      {
        intent,
        context: fixture.context,
        providerRequest: {
          correlationId: intent.correlationId,
          lane: "git",
          operation: "read",
          owner: "o",
          repo: "r",
          kind: "path_meta",
          path,
          timeoutMs: 50,
        },
        timeoutMs: 50,
      },
      deps(core, providers),
    );
    const accepted = result.run?.state === "succeeded";
    record(
      "P-QA-D2D3-23",
      "Reject encoded traversal/protected path",
      "blocked PROTECTED_PATH",
      { path, state: result.run?.state, failure: result.ok ? null : result.failure },
      accepted ? "FAIL" : "PASS",
      accepted ? "F-QA-D2D3-10" : undefined,
    );
  }

  // P24 — caller-provided runId is ignored and replaced with canonical identity.
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const input = fixtureInput("corr:qa:caller-run-id");
    const result = await coordinateExecutionRun(
      {
        ...input,
        providerRequest: {
          ...input.providerRequest,
          runId: "executionrun:attacker",
        },
      },
      deps(core, providers),
    );
    record(
      "P-QA-D2D3-24",
      "Prevent caller runId from selecting state authority target",
      "canonical generated runId",
      { state: result.run?.state, runId: result.run?.runId },
      result.run?.state === "succeeded" &&
        result.run.runId !== "executionrun:attacker"
        ? "PASS"
        : "FAIL",
    );
  }

  // P25 — extra readiness properties cannot promote higher levels.
  {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
      uiDelivery: true,
      strongRuntimeVerdict: "demonstrated",
    } as never);
    record(
      "P-QA-D2D3-25",
      "Prevent additional readiness properties promoting UI/runtime",
      "UI not_demonstrated; strong runtime blocked",
      assessment,
      assessment.uiDelivery.status === "not_demonstrated" &&
        assessment.strongRuntimeVerdict.status === "blocked"
        ? "PASS"
        : "FAIL",
    );
  }

  process.stdout.write(`${JSON.stringify({ probes }, null, 2)}\n`);
  if (probes.some((probe) => probe.verdict === "NOT_PROVEN")) process.exitCode = 2;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## 26. Sortie complète des probes

```json
{
  "probes": [
    {
      "id": "P-QA-D2D3-01",
      "objective": "Refuse fake provider promoted to real by injected source list",
      "expected": "blocked; provider not invoked; source real not evidenced",
      "observed": {
        "ok": true,
        "state": "succeeded",
        "sourceTriple": [
          "real",
          "real",
          "real"
        ]
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-01"
    },
    {
      "id": "P-QA-D2D3-02",
      "objective": "Reject UX readiness without a linked run, projection, or evidence",
      "expected": "not_demonstrated",
      "observed": {
        "uxExploration": {
          "status": "demonstrated",
          "reasons": [
            "fixture path demonstrated",
            "provider-independent projection demonstrated",
            "source and persistence disclosures demonstrated"
          ]
        },
        "uiDelivery": {
          "status": "not_demonstrated",
          "reasons": [
            "no UI or accessibility delivery",
            "no Figma evidence",
            "no D3 transport selected"
          ]
        },
        "strongRuntimeVerdict": {
          "status": "blocked",
          "reasons": [
            "G-D2D-CURSOR-01 not consumed",
            "G-D2D-PERSIST-01 not consumed",
            "Cursor unverified",
            "memory is process-local",
            "no live provider proof"
          ]
        },
        "openReserves": [
          "R-QA-REV-01 — OPEN NOT LIFTED",
          "R-QA-REV-02 — OPEN NOT LIFTED",
          "R-QA-D2C-01 — OPEN NOT LIFTED",
          "Cursor product capabilities — UNVERIFIED",
          "memory process-local only",
          "R-PR-D2D2-01 — MINOR"
        ]
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-02"
    },
    {
      "id": "P-QA-D2D3-03",
      "objective": "Contain event sink throw at event 1",
      "expected": "normalized coordinator result coherent with stored state",
      "observed": {
        "rawError": "sink_raw_1",
        "storedState": "idle",
        "eventCount": 1,
        "providerCalls": 0
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-03"
    },
    {
      "id": "P-QA-D2D3-04",
      "objective": "Contain event sink throw at event 2",
      "expected": "normalized coordinator result coherent with stored state",
      "observed": {
        "rawError": "sink_raw_2",
        "storedState": "running",
        "eventCount": 2,
        "providerCalls": 0
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-03"
    },
    {
      "id": "P-QA-D2D3-05",
      "objective": "Contain event sink throw at event 4",
      "expected": "normalized coordinator result coherent with stored state",
      "observed": {
        "rawError": "sink_raw_4",
        "storedState": "succeeded",
        "eventCount": 4,
        "providerCalls": 1
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-03"
    },
    {
      "id": "P-QA-D2D3-06",
      "objective": "Project malicious runtime data without leaks or claim promotion",
      "expected": "secrets/functions/spoofed persistence/evidence rejected or sanitized",
      "observed": {
        "resultSummary": "password=projection-plain-secret",
        "blockedReason": "apiKey=projection-key",
        "openReserves": [
          "password=reserve-plain-secret"
        ],
        "usage": {
          "status": "unavailable",
          "reason": "apiKey=usage-plain-secret"
        },
        "functionPreserved": true,
        "persistence": {
          "kind": "memory_process_local",
          "durable": true,
          "multiInstance": true,
          "restartSafe": true
        },
        "evidence": [
          {
            "evidenceId": "evidence:d2d1:0001",
            "source": "real",
            "completeness": "complete",
            "producedAt": "2026-08-04T10:00:00.000Z",
            "late": false,
            "official": true
          }
        ]
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-04"
    },
    {
      "id": "P-QA-D2D3-07",
      "objective": "Reject sensitive caller-supplied late evidence",
      "expected": "late evidence absent or redacted",
      "observed": {
        "state": "cancelled",
        "summary": "password=late-plain-secret"
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-05"
    },
    {
      "id": "P-QA-D2D3-08",
      "objective": "Perform input validation before any provider port call",
      "expected": "describeCapability=0; complete=0",
      "observed": {
        "resultOk": false,
        "describeCalls": 1,
        "completeCalls": 0
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-06"
    },
    {
      "id": "P-QA-D2D3-09",
      "objective": "Contain hostile provider request accessors",
      "expected": "normalized blocked result; no raw throw",
      "observed": {
        "rawError": "hostile_request_getter",
        "storedState": "idle"
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-07"
    },
    {
      "id": "P-QA-D2D3-10",
      "objective": "Contain hostile provider result accessors",
      "expected": "normalized failed terminal; no raw throw",
      "observed": {
        "rawError": "hostile_result_getter",
        "storedState": "running"
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-07"
    },
    {
      "id": "P-QA-D2D3-11",
      "objective": "Prevent malicious provider argument mutation from changing stored run",
      "expected": "stored canonical runId and succeeded state",
      "observed": {
        "state": "succeeded",
        "runId": "executionrun:d2d1:0001",
        "receivedKeys": [
          "correlationId",
          "lane",
          "operation",
          "messages",
          "timeoutMs",
          "runId",
          "signal"
        ]
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-12",
      "objective": "Prevent partial provider success",
      "expected": "failed / INVALID_PROVIDER_RESULT",
      "observed": {
        "state": "failed",
        "failure": {
          "family": "invalid_provider_result",
          "code": "INVALID_PROVIDER_RESULT",
          "userMessage": "Provider returned an invalid or incomplete result",
          "technicalDetailsRedacted": true,
          "retryable": false,
          "correlationId": "corr:qa:partial"
        }
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-13",
      "objective": "Normalize provider null",
      "expected": "failed terminal with normalized failure and no raw error",
      "observed": {
        "state": "failed",
        "failure": {
          "family": "invalid_provider_result",
          "code": "INVALID_PROVIDER_RESULT",
          "userMessage": "provider result must be an object",
          "technicalDetailsRedacted": true,
          "retryable": false,
          "correlationId": "corr:qa:null"
        }
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-14",
      "objective": "Normalize provider reject",
      "expected": "failed terminal with normalized failure and no raw error",
      "observed": {
        "state": "failed",
        "failure": {
          "family": "provider_unavailable",
          "code": "PROVIDER_UNAVAILABLE",
          "userMessage": "Provider invocation failed",
          "technicalDetailsRedacted": true,
          "retryable": true,
          "correlationId": "corr:qa:reject"
        }
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-15",
      "objective": "Ignore provider success resolving after timeout",
      "expected": "single timed_out terminal after late resolution",
      "observed": {
        "returnedState": "timed_out",
        "storedState": "timed_out",
        "resolved": true
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-16",
      "objective": "Cancel before provider operation",
      "expected": "cancelled; operation count 0; invocation disclosure truthful",
      "observed": {
        "state": "cancelled",
        "providerCalls": 0,
        "providerInvoked": true
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-08"
    },
    {
      "id": "P-QA-D2D3-17",
      "objective": "Reject negative coordinator timeout before engagement",
      "expected": "blocked validation; provider not invoked",
      "observed": {
        "state": "failed",
        "providerInvoked": true,
        "failure": {
          "family": "validation",
          "code": "VALIDATION_ERROR",
          "userMessage": "Provider operation failed",
          "technicalDetailsRedacted": true,
          "retryable": false,
          "correlationId": "corr:qa:negative-timeout"
        }
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-09"
    },
    {
      "id": "P-QA-D2D3-18",
      "objective": "Isolate concurrent process-local runs",
      "expected": "unique IDs and correlation-isolated lists",
      "observed": {
        "stateA": "succeeded",
        "stateB": "succeeded",
        "runA": "executionrun:d2d1:0001",
        "runB": "executionrun:d2d1:0002",
        "evidenceA": "evidence:d2d1:0001",
        "evidenceB": "evidence:d2d1:0002",
        "listALength": 1,
        "listBLength": 1
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-19",
      "objective": "Reject provider request correlation mismatch",
      "expected": "blocked; provider operation count 0",
      "observed": {
        "state": "blocked",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-20",
      "objective": "Prevent event sink detail mutation from changing state",
      "expected": "stored succeeded state",
      "observed": {
        "storedState": "succeeded",
        "eventCount": 4
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-21-fixture-real",
      "objective": "Source matrix requested=fixture, declared=real",
      "expected": "blocked SOURCE_MISMATCH; provider operation count 0",
      "observed": {
        "state": "blocked",
        "failure": "SOURCE_MISMATCH",
        "disclosedSource": "real",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-21-real-real",
      "objective": "Source matrix requested=real, declared=real",
      "expected": "blocked PROVIDER_UNAVAILABLE; provider operation count 0",
      "observed": {
        "state": "blocked",
        "failure": "PROVIDER_UNAVAILABLE",
        "disclosedSource": "real",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-21-sandbox-sandbox",
      "objective": "Source matrix requested=sandbox-real, declared=sandbox-real",
      "expected": "blocked PROVIDER_UNAVAILABLE; provider operation count 0",
      "observed": {
        "state": "blocked",
        "failure": "PROVIDER_UNAVAILABLE",
        "disclosedSource": "sandbox-real",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-22-mutation_forbidden",
      "objective": "Pre-engagement block for mutation_forbidden",
      "expected": "blocked MUTATION_FORBIDDEN; provider operation count 0; no evidence",
      "observed": {
        "state": "blocked",
        "failure": "MUTATION_FORBIDDEN",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-22-protected_path",
      "objective": "Pre-engagement block for protected_path",
      "expected": "blocked PROTECTED_PATH; provider operation count 0; no evidence",
      "observed": {
        "state": "blocked",
        "failure": "PROTECTED_PATH",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-22-blocked_gate",
      "objective": "Pre-engagement block for blocked_gate",
      "expected": "blocked HUMAN_GATE_REQUIRED; provider operation count 0; no evidence",
      "observed": {
        "state": "blocked",
        "failure": "HUMAN_GATE_REQUIRED",
        "calls": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-23",
      "objective": "Reject encoded traversal/protected path",
      "expected": "blocked PROTECTED_PATH",
      "observed": {
        "path": "projects/sfia-studio/%2e%2e/.env",
        "state": "succeeded",
        "failure": null
      },
      "verdict": "FAIL",
      "finding": "F-QA-D2D3-10"
    },
    {
      "id": "P-QA-D2D3-24",
      "objective": "Prevent caller runId from selecting state authority target",
      "expected": "canonical generated runId",
      "observed": {
        "state": "succeeded",
        "runId": "executionrun:d2d1:0001"
      },
      "verdict": "PASS"
    },
    {
      "id": "P-QA-D2D3-25",
      "objective": "Prevent additional readiness properties promoting UI/runtime",
      "expected": "UI not_demonstrated; strong runtime blocked",
      "observed": {
        "uxExploration": {
          "status": "demonstrated",
          "reasons": [
            "fixture path demonstrated",
            "provider-independent projection demonstrated",
            "source and persistence disclosures demonstrated"
          ]
        },
        "uiDelivery": {
          "status": "not_demonstrated",
          "reasons": [
            "no UI or accessibility delivery",
            "no Figma evidence",
            "no D3 transport selected"
          ]
        },
        "strongRuntimeVerdict": {
          "status": "blocked",
          "reasons": [
            "G-D2D-CURSOR-01 not consumed",
            "G-D2D-PERSIST-01 not consumed",
            "Cursor unverified",
            "memory is process-local",
            "no live provider proof"
          ]
        },
        "openReserves": [
          "R-QA-REV-01 — OPEN NOT LIFTED",
          "R-QA-REV-02 — OPEN NOT LIFTED",
          "R-QA-D2C-01 — OPEN NOT LIFTED",
          "Cursor product capabilities — UNVERIFIED",
          "memory process-local only",
          "R-PR-D2D2-01 — MINOR"
        ]
      },
      "verdict": "PASS"
    }
  ]
}
```

## 27. Diff complet exploitable du package contre `de2800aa836bb8221dc2912414126b7a3e6a1f58`

```diff
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
@@ -0,0 +1,148 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+const completeProof = {
+  fixturePathDemonstrated: true,
+  projectionDemonstrated: true,
+  disclosuresDemonstrated: true,
+} as const;
+
+describe("D2-D3 fixture coordination", () => {
+  it("coordinates AI through idle, running, succeeded and official evidence", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "bounded fixture summary" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+    expect(result.run?.evidence).toHaveLength(1);
+    expect(result.run?.evidence?.[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      completeness: "complete",
+      late: false,
+    });
+
+    if (!result.run) return;
+    const projection = composition.project(result.run, completeProof);
+    expect(projection.state).toBe("succeeded");
+    expect(projection.source).toBe("fixture");
+    expect(projection.providerLane).toBe("ai");
+  });
+
+  it("coordinates a read-only Git fixture without a write surface", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:git",
+      correlationId: "corr:d2d3:git",
+      requestedLane: "git" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "repository",
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.run?.state).toBe("succeeded");
+    expect(result.run?.disclosure.providerLane).toBe("git");
+    expect(composition.disclosure.gitWrite).toBe(false);
+  });
+
+  it("keeps Cursor fixture-only and blocked while Cursor is unverified", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:cursor",
+      correlationId: "corr:d2d3:cursor",
+      requestedLane: "cursor" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "cursor",
+        operation: "fixture",
+        instructionSummary: "read-only fixture",
+        allowlistRepos: ["projects/sfia-studio/"],
+        protectedPaths: [".env"],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(composition.disclosure.cursorVerified).toBe(false);
+  });
+
+  it("blocks lane none without invoking a provider", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        requestedLane: "none",
+        intentId: "intent:d2d3:none",
+        correlationId: "corr:d2d3:none",
+      },
+      context: fixture.context,
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual(["idle", "blocked"]);
+  });
+
+  it("does not invoke providers before validation and policy acceptance", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("validation_failure");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not execute" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual([]);
+  });
+});
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
@@ -0,0 +1,144 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  isIsoTimestamp,
+  normalizedFailure,
+  type AiExecutionPort,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 evidence truthfulness", () => {
+  it("keeps run, official evidence, and projection source on fixture", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "truthful fixture input" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    if (!result.run) throw new Error("expected run");
+    const evidence = result.run.evidence?.[0];
+    const projection = composition.project(result.run, {
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(result.run.disclosure.source).toBe("fixture");
+    expect(evidence?.source).toBe("fixture");
+    expect(projection.source).toBe("fixture");
+    expect(evidence?.official).toBe(true);
+    expect(evidence?.completeness).toBe("complete");
+    expect(isIsoTimestamp(evidence?.producedAt ?? "")).toBe(true);
+    expect(evidence?.evidenceId.length).toBeLessThan(128);
+    expect(evidence).not.toHaveProperty("rawResult");
+  });
+
+  it.each(["sandbox-real", "real"] as const)(
+    "blocks requested source %s without fallback or provider invocation",
+    async (source) => {
+      const composition = composeExecutionRunD2D3();
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          intentId: `intent:d2d3:${source}`,
+          correlationId: `corr:d2d3:${source}`,
+          requestedSource: source,
+        },
+        context: { ...fixture.context, declaredSource: source },
+        providerRequest: {
+          correlationId: `corr:d2d3:${source}`,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 100,
+        },
+        timeoutMs: 100,
+      });
+
+      expect(result.ok).toBe(false);
+      expect(result.run?.state).toBe("blocked");
+      expect(result.run?.disclosure.source).toBe(source);
+      expect(result.providerInvoked).toBe(false);
+      expect(result.run?.evidence).toBeUndefined();
+    },
+  );
+
+  it("records late evidence without changing a cancelled terminal", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Cancelled fixture operation",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const composition = composeExecutionRunD2D3({ providers });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+      lateEvidenceSummary: "late bounded result",
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    expect(result.run?.evidence?.at(-1)).toMatchObject({
+      source: "fixture",
+      late: true,
+      official: true,
+    });
+  });
+
+  it("marks usage unavailable unless provider usage validates", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "usage fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.validatedUsage.status).toBe("validated");
+    expect(result.run?.usage.status).toBe("unavailable");
+  });
+});
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
@@ -0,0 +1,244 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  normalizedFailure,
+  type AiExecutionPort,
+  type FailureCode,
+  type FailureFamily,
+  type ProviderInvocationResult,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+function failureResult(
+  family: FailureFamily,
+  code: FailureCode,
+  correlationId: string,
+): ProviderInvocationResult {
+  return {
+    kind: "failure",
+    failure: normalizedFailure({
+      family,
+      code,
+      userMessage: `Bounded ${family} fixture failure`,
+      retryable: false,
+      correlationId,
+    }),
+  };
+}
+
+async function runWithAiResult(
+  makeResult: (correlationId: string) => ProviderInvocationResult,
+  options?: { lateEvidenceSummary?: string },
+) {
+  const base = composeExecutionRunProvidersFake();
+  let calls = 0;
+  let receivedKeys: string[] = [];
+  const ai: AiExecutionPort = {
+    lane: "ai",
+    describeCapability: () => base.ai.describeCapability(),
+    complete: async (request) => {
+      calls += 1;
+      receivedKeys = Object.keys(request);
+      return makeResult(request.correlationId);
+    },
+  };
+  const providers = composeExecutionRunProviders({ ...base, ai });
+  const composition = composeExecutionRunD2D3({ providers });
+  const fixture = getFixture("nominal");
+  const result = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "deterministic fixture" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+    ...options,
+  });
+  return { result, calls, receivedKeys };
+}
+
+describe("D2-D3 deterministic negative and resilience scenarios", () => {
+  it.each([
+    ["authentication", "AUTHENTICATION_ERROR"],
+    ["authorization", "AUTHORIZATION_ERROR"],
+    ["provider_unavailable", "PROVIDER_UNAVAILABLE"],
+    ["rate_limited", "RATE_LIMITED"],
+  ] as const)(
+    "normalizes %s failure to the exact failed terminal",
+    async (family, code) => {
+      const { result, calls } = await runWithAiResult((correlationId) =>
+        failureResult(family, code, correlationId),
+      );
+      expect(calls).toBe(1);
+      expect(result.run?.state).toBe("failed");
+      if (result.ok) throw new Error("expected failed result");
+      expect(result.failure).toMatchObject({ family, code });
+      expect(result.run?.evidence).toBeUndefined();
+      expect(result.run?.disclosure.source).toBe("fixture");
+    },
+  );
+
+  it("maps provider timeout to timed_out", async () => {
+    const { result } = await runWithAiResult((correlationId) => ({
+      kind: "timed_out",
+      failure: normalizedFailure({
+        family: "timed_out",
+        code: "TIMED_OUT",
+        userMessage: "Bounded timeout",
+        retryable: true,
+        correlationId,
+      }),
+    }));
+    expect(result.run?.state).toBe("timed_out");
+    if (result.ok) throw new Error("expected timed-out result");
+    expect(result.failure.code).toBe("TIMED_OUT");
+  });
+
+  it("maps provider cancellation to cancelled and preserves it after late evidence", async () => {
+    const { result } = await runWithAiResult(
+      (correlationId) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Bounded cancellation",
+          retryable: false,
+          correlationId,
+        }),
+      }),
+      { lateEvidenceSummary: "late redacted fixture result" },
+    );
+    expect(result.run?.state).toBe("cancelled");
+    if (result.ok) throw new Error("expected cancelled result");
+    expect(result.failure.code).toBe("CANCELLED");
+    expect(result.run?.evidence?.at(-1)?.late).toBe(true);
+  });
+
+  it("fails partial provider success and preserves explicit partiality", async () => {
+    const { result } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "partial",
+      redactedSummary: "bounded partial result",
+      rawPresent: false,
+      usage: { status: "unavailable", reason: "partial" },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected partial failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(result.run?.externalResult).toMatchObject({
+      kind: "success",
+      completeness: "partial",
+    });
+    expect(result.run?.state).not.toBe("succeeded");
+  });
+
+  it("rejects an invalid provider result without leaking raw content", async () => {
+    const { result } = await runWithAiResult(
+      () =>
+        ({
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "password=do-not-leak",
+          rawPresent: true,
+          usage: { status: "unavailable", reason: "invalid" },
+          disclosureNotes: [],
+        }) as ProviderInvocationResult,
+    );
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected invalid provider failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(JSON.stringify(result.run)).not.toContain("do-not-leak");
+  });
+
+  it.each([
+    ["validation_failure", "VALIDATION_ERROR"],
+    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
+    ["protected_path", "PROTECTED_PATH"],
+    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
+    ["source_mismatch", "SOURCE_MISMATCH"],
+  ] as const)("blocks %s before provider invocation", async (scenario, code) => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture(scenario);
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest:
+        fixture.intent.requestedLane === "ai"
+          ? {
+              correlationId: fixture.intent.correlationId,
+              lane: "ai",
+              operation: "complete",
+              messages: [{ role: "user", content: "must not execute" }],
+              timeoutMs: 100,
+            }
+          : undefined,
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    if (result.ok) throw new Error("expected pre-engagement block");
+    expect(result.failure.code).toBe(code);
+    if (result.run) {
+      expect(result.run.state).toBe("blocked");
+      expect(result.run.evidence).toBeUndefined();
+      expect(result.run.disclosure.source).toBe(
+        fixture.context.declaredSource,
+      );
+    }
+  });
+
+  it("blocks a sensitive provider request at the boundary and redacts output", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const sensitive = "fixture-sensitive-value";
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "safe" }],
+        timeoutMs: 100,
+        apiKey: sensitive,
+      } as never,
+      timeoutMs: 100,
+    });
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(JSON.stringify(result)).not.toContain(sensitive);
+  });
+
+  it("gives providers no run, repository, save, or transition authority", async () => {
+    const { result, receivedKeys } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: "bounded complete fixture",
+      rawPresent: false,
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("succeeded");
+    expect(receivedKeys).not.toEqual(
+      expect.arrayContaining([
+        "executionRun",
+        "repository",
+        "save",
+        "transitionExecutionRun",
+      ]),
+    );
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+  });
+});
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
@@ -0,0 +1,106 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+const proof = {
+  fixturePathDemonstrated: true,
+  projectionDemonstrated: true,
+  disclosuresDemonstrated: true,
+} as const;
+
+async function succeededProjection() {
+  const composition = composeExecutionRunD2D3();
+  const fixture = getFixture("nominal");
+  const coordinated = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "fixture-only input" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+  });
+  if (!coordinated.run) throw new Error("expected run");
+  return composition.project(coordinated.run, proof);
+}
+
+describe("D2-D3 provider-independent projection", () => {
+  it("projects the bounded transport-neutral shape and disclosures", async () => {
+    const projection = await succeededProjection();
+
+    expect(projection).toMatchObject({
+      state: "succeeded",
+      source: "fixture",
+      providerLane: "ai",
+      phase: "terminal",
+      completeness: "complete",
+      cursorUnverified: true,
+      gitWrite: false,
+      persistence: {
+        kind: "memory_process_local",
+        durable: false,
+        multiInstance: false,
+        restartSafe: false,
+      },
+    });
+    expect(projection.evidenceSummary[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      late: false,
+    });
+    expect(projection.readinessAssessment.uiDelivery.status).toBe(
+      "not_demonstrated",
+    );
+    expect(projection.readinessAssessment.strongRuntimeVerdict.status).toBe(
+      "blocked",
+    );
+  });
+
+  it("contains no executable, SDK, adapter, command, signal, or raw surface", async () => {
+    const projection = await succeededProjection();
+    const seenKeys: string[] = [];
+    const visit = (value: unknown): void => {
+      if (!value || typeof value !== "object") {
+        expect(typeof value).not.toBe("function");
+        return;
+      }
+      for (const [key, nested] of Object.entries(value)) {
+        seenKeys.push(key);
+        expect(typeof nested).not.toBe("function");
+        visit(nested);
+      }
+    };
+    visit(projection);
+
+    expect(seenKeys).not.toEqual(
+      expect.arrayContaining([
+        "sdk",
+        "adapter",
+        "command",
+        "signal",
+        "abortSignal",
+        "rawPrompt",
+        "rawResponse",
+        "rawError",
+        "secret",
+      ]),
+    );
+    expect(JSON.stringify(projection)).not.toMatch(
+      /fixture-only input|AbortSignal|executeFixture|complete\(/,
+    );
+  });
+
+  it("is JSON serializable and exposes no Git write capability", async () => {
+    const projection = await succeededProjection();
+    expect(() => JSON.stringify(projection)).not.toThrow();
+    expect(JSON.parse(JSON.stringify(projection))).toEqual(projection);
+    expect(Object.keys(projection)).not.toContain("gitWriteCommand");
+    expect(projection.gitWrite).toBe(false);
+  });
+});
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
@@ -0,0 +1,78 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D3 bounded readiness assessment", () => {
+  it("demonstrates UX exploration only when every fixture proof is present", () => {
+    const demonstrated = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    const incomplete = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: false,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(demonstrated.uxExploration.status).toBe("demonstrated");
+    expect(incomplete.uxExploration.status).toBe("not_demonstrated");
+  });
+
+  it("keeps UI delivery not demonstrated and strong runtime blocked", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
+    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
+    expect(assessment.strongRuntimeVerdict.reasons).toEqual([
+      "G-D2D-CURSOR-01 not consumed",
+      "G-D2D-PERSIST-01 not consumed",
+      "Cursor unverified",
+      "memory is process-local",
+      "no live provider proof",
+    ]);
+  });
+
+  it("carries every inherited reserve without lifting it", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
+    expect(assessment.openReserves).toHaveLength(6);
+  });
+
+  it("uses only the three bounded statuses and makes no excessive claim", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    const statuses = [
+      assessment.uxExploration.status,
+      assessment.uiDelivery.status,
+      assessment.strongRuntimeVerdict.status,
+    ];
+    const serialized = JSON.stringify(assessment);
+
+    expect(statuses).toEqual([
+      "demonstrated",
+      "not_demonstrated",
+      "blocked",
+    ]);
+    expect(serialized).not.toMatch(
+      /production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,
+    );
+  });
+});
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -52,7 +52,7 @@
     for (const file of files) {
       for (const line of importsOf(file)) {
         if (
-          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
+          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
             line,
           )
         ) {
@@ -170,3 +170,59 @@
     expect(barrel).not.toMatch(/materializeForServerOnly/);
   });
 });
+
+describe("D2-D3 coordination and projection boundaries", () => {
+  it("keeps application code free of Node, Next, SDK, process, and infrastructure imports", () => {
+    const files = [
+      "application/coordinateExecutionRun.ts",
+      "application/executionProjection.ts",
+      "application/executionReadiness.ts",
+    ];
+    for (const relative of files) {
+      const src = fs.readFileSync(path.join(MODULE_ROOT, relative), "utf8");
+      expect(src).not.toMatch(
+        /from\s+["'](?:node:|next|openai|@octokit)|\bchild_process\b|\bprocess\.|\binfrastructure\//,
+      );
+    }
+  });
+
+  it("keeps the concrete D2-D3 composition out of the public barrel", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/composeExecutionRunD2D3/);
+    expect(barrel).not.toMatch(/composeExecutionRunProviders/);
+    expect(barrel).not.toMatch(/MemoryExecutionRunRepository/);
+  });
+
+  it("reuses the existing single memory authority without a new store or repository", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "server/composeExecutionRunD2D3.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/composeExecutionRunMemory/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunStore/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunRepository/);
+    expect(src).not.toMatch(/\.save\(/);
+  });
+
+  it("gives the coordinator only create and transition state authority", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/coordinateExecutionRun.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/createExecutionRun/);
+    expect(src).toMatch(/transitionExecutionRun/);
+    expect(src).not.toMatch(/\.save\(/);
+    expect(src).not.toMatch(/Object\.assign\([^)]*run/);
+    expect(src).not.toMatch(/\brun\.state\s*=/);
+  });
+
+  it("keeps projection pure and free of secret materializers and transports", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/executionProjection.ts"),
+      "utf8",
+    );
+    expect(src).not.toMatch(
+      /materialize|NextResponse|fetch\(|from\s+["'](?:node:|next)/i,
+    );
+  });
+});
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -0,0 +1,582 @@
+import { normalizedFailure } from "../domain/errors";
+import {
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "../domain/providerBoundary";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+  UsageSummary,
+} from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
+import type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+} from "../ports/executionEventSinkPort";
+import type { GitReadPort } from "../ports/gitReadPort";
+import type { AiExecutionPort } from "../ports/aiExecutionPort";
+import type {
+  AiCompletionRequest,
+  CursorFixtureRequest,
+  GitReadRequest,
+  ProviderInvocationResult,
+} from "../ports/providerResult";
+import {
+  invokeWithTimeoutAndCancellation,
+  type InvokeOutcome,
+} from "./providerInvocation";
+import type {
+  CreateExecutionRunResult,
+} from "./createExecutionRun";
+import type {
+  TransitionExecutionRunResult,
+} from "./transitionExecutionRun";
+
+export type CoordinateProviderRequest =
+  | AiCompletionRequest
+  | GitReadRequest
+  | CursorFixtureRequest;
+
+export type ExecutionAuthority = {
+  readonly createExecutionRun: (
+    input: unknown,
+  ) => Promise<CreateExecutionRunResult>;
+  readonly transitionExecutionRun: (
+    input: unknown,
+  ) => Promise<TransitionExecutionRunResult>;
+};
+
+export type CoordinateExecutionRunDependencies = {
+  readonly execution: ExecutionAuthority;
+  readonly providers: {
+    readonly ai: AiExecutionPort;
+    readonly git: GitReadPort;
+    readonly cursor: CursorExecutionPort;
+  };
+  readonly events: ExecutionEventSinkPort;
+  readonly clock: ClockPort;
+  readonly availableSources: readonly ExecutionSource[];
+};
+
+export type CoordinateExecutionRunInput = {
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly providerRequest?: CoordinateProviderRequest;
+  readonly timeoutMs: number;
+  readonly signal?: AbortSignal;
+  /** Deterministic evidence-only simulation after a failed/cancelled/timed-out terminal. */
+  readonly lateEvidenceSummary?: string;
+};
+
+export type CoordinateExecutionRunResult =
+  | {
+      readonly ok: true;
+      readonly run: ExecutionRun;
+      readonly providerInvoked: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly failure: NormalizedFailure;
+      readonly run?: ExecutionRun;
+      readonly providerInvoked: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+    };
+
+function unavailableUsage(reason: string): UsageSummary {
+  return { status: "unavailable", reason };
+}
+
+function validatedUsage(input: unknown): UsageSummary {
+  if (!input || typeof input !== "object") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  const usage = input as Record<string, unknown>;
+  if (usage.status !== "validated") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  for (const key of ["inputTokens", "outputTokens"] as const) {
+    const value = usage[key];
+    if (
+      value !== undefined &&
+      (typeof value !== "number" || !Number.isFinite(value) || value < 0)
+    ) {
+      return unavailableUsage("provider_usage_invalid");
+    }
+  }
+  if (usage.unit !== undefined && typeof usage.unit !== "string") {
+    return unavailableUsage("provider_usage_invalid");
+  }
+  return {
+    status: "validated",
+    inputTokens: usage.inputTokens as number | undefined,
+    outputTokens: usage.outputTokens as number | undefined,
+    unit: usage.unit as string | undefined,
+  };
+}
+
+function invalidProviderFailure(correlationId: string): NormalizedFailure {
+  return normalizedFailure({
+    family: "invalid_provider_result",
+    code: "INVALID_PROVIDER_RESULT",
+    userMessage: "Provider returned an invalid or incomplete result",
+    retryable: false,
+    correlationId,
+  });
+}
+
+function emit(
+  deps: CoordinateExecutionRunDependencies,
+  run: ExecutionRun,
+  event: Pick<ExecutionEvent, "type" | "detail">,
+): void {
+  deps.events.emit({
+    ...event,
+    correlationId: run.correlationId,
+    runId: run.runId,
+    providerLane: run.disclosure.providerLane,
+    occurredAt: deps.clock.nowIso(),
+  });
+}
+
+function capabilityFor(
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): ProviderCapabilityDescriptor | undefined {
+  const lane = input.intent.requestedLane;
+  if (lane === "none") return undefined;
+  const described =
+    lane === "ai"
+      ? deps.providers.ai.describeCapability()
+      : lane === "git"
+        ? deps.providers.git.describeCapability()
+        : deps.providers.cursor.describeCapability();
+  const sourceAvailable = deps.availableSources.includes(
+    input.intent.requestedSource,
+  );
+  const declaredSourceMatches =
+    input.context.declaredSource === input.intent.requestedSource;
+  return {
+    ...described,
+    lane,
+    available:
+      described.available && (!declaredSourceMatches || sourceAvailable),
+    verified: lane === "cursor" ? false : described.verified,
+  };
+}
+
+async function blockIdleRun(
+  run: ExecutionRun,
+  failure: NormalizedFailure,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<TransitionExecutionRunResult> {
+  return deps.execution.transitionExecutionRun({
+    runId: run.runId,
+    reason: "pre_engagement_block",
+    failure,
+    blockingReason: failure.code,
+  });
+}
+
+function requestMatchesRun(
+  request: CoordinateProviderRequest | undefined,
+  run: ExecutionRun,
+): boolean {
+  return Boolean(
+    request &&
+      request.lane === run.intent.requestedLane &&
+      request.correlationId === run.correlationId,
+  );
+}
+
+async function invokeProvider(
+  request: CoordinateProviderRequest,
+  run: ExecutionRun,
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<InvokeOutcome> {
+  return invokeWithTimeoutAndCancellation(
+    (signal) => {
+      const common = {
+        ...request,
+        runId: run.runId,
+        signal,
+        timeoutMs: input.timeoutMs,
+      };
+      switch (run.intent.requestedLane) {
+        case "ai":
+          return deps.providers.ai.complete(common as AiCompletionRequest);
+        case "git":
+          return deps.providers.git.read(common as GitReadRequest);
+        case "cursor":
+          return deps.providers.cursor.executeFixture(
+            common as CursorFixtureRequest,
+          );
+        default:
+          throw new Error("provider lane none cannot be invoked");
+      }
+    },
+    {
+      timeoutMs: input.timeoutMs,
+      signal: input.signal,
+      correlationId: run.correlationId,
+      maxRetries: 0,
+    },
+  );
+}
+
+function resultFailure(
+  result: ProviderInvocationResult,
+  correlationId: string,
+): NormalizedFailure {
+  const allowedPairs: Readonly<Record<string, string>> = {
+    VALIDATION_ERROR: "validation",
+    AUTHENTICATION_ERROR: "authentication",
+    AUTHORIZATION_ERROR: "authorization",
+    PROVIDER_UNAVAILABLE: "provider_unavailable",
+    RATE_LIMITED: "rate_limited",
+    TIMED_OUT: "timed_out",
+    CANCELLED: "cancelled",
+    SANDBOX_BLOCKED: "sandbox_blocked",
+    PROTECTED_PATH: "protected_path",
+    MUTATION_FORBIDDEN: "mutation_forbidden",
+    HUMAN_GATE_REQUIRED: "human_gate_required",
+    INVALID_PROVIDER_RESULT: "invalid_provider_result",
+    INTERNAL_NORMALIZED_FAILURE: "internal_normalized_failure",
+    SOURCE_MISMATCH: "source_mismatch",
+  };
+  if (
+    "failure" in result &&
+    result.failure &&
+    result.failure.correlationId === correlationId &&
+    result.failure.technicalDetailsRedacted === true &&
+    allowedPairs[result.failure.code] === result.failure.family
+  ) {
+    return normalizedFailure({
+      family: result.failure.family,
+      code: result.failure.code,
+      userMessage: "Provider operation failed",
+      retryable: result.failure.retryable,
+      correlationId,
+    });
+  }
+  return invalidProviderFailure(correlationId);
+}
+
+async function transitionFromInvocation(
+  run: ExecutionRun,
+  outcome: InvokeOutcome,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<{ result: TransitionExecutionRunResult; usage: UsageSummary }> {
+  if (outcome.status === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (outcome.status === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  if (outcome.status === "failed") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_failed"),
+    };
+  }
+
+  const providerResult = outcome.result;
+  const boundary = validateUntrustedProviderResult(
+    providerResult,
+    run.correlationId,
+  );
+  if (!boundary.ok) {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: boundary.failure,
+      }),
+      usage: unavailableUsage("provider_result_invalid"),
+    };
+  }
+
+  if (providerResult.kind === "success") {
+    const usage = validatedUsage(providerResult.usage);
+    const externalResult = {
+      kind: "success" as const,
+      completeness: providerResult.completeness,
+      redactedSummary: providerResult.redactedSummary,
+      rawPresent: false as const,
+    };
+    if (providerResult.completeness === "partial") {
+      const failure = invalidProviderFailure(run.correlationId);
+      return {
+        result: await deps.execution.transitionExecutionRun({
+          runId: run.runId,
+          reason: "engaged_operation_failed",
+          externalResult,
+          failure,
+        }),
+        usage,
+      };
+    }
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "outputs_validated",
+        completeness: "complete",
+        externalResult,
+      }),
+      usage,
+    };
+  }
+
+  const failure = resultFailure(providerResult, run.correlationId);
+  if (providerResult.kind === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (providerResult.kind === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  return {
+    result: await deps.execution.transitionExecutionRun({
+      runId: run.runId,
+      reason: "engaged_operation_failed",
+      failure,
+    }),
+    usage: unavailableUsage("provider_failed"),
+  };
+}
+
+export async function coordinateExecutionRun(
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<CoordinateExecutionRunResult> {
+  const stateTrace: ExecutionRun["state"][] = [];
+  const noUsage = unavailableUsage("not_validated");
+  const capability = capabilityFor(input, deps);
+  const created = await deps.execution.createExecutionRun({
+    intent: input.intent,
+    context: input.context,
+    capability,
+  });
+
+  if (created.run) stateTrace.push(created.run.state);
+  if (!created.ok) {
+    if (created.run) {
+      emit(deps, created.run, {
+        type: "validation",
+        detail: {
+          accepted: false,
+          source: created.run.disclosure.source,
+          failureCode: created.failure.code,
+        },
+      });
+    }
+    return {
+      ok: false,
+      failure: created.failure,
+      run: created.run,
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+    };
+  }
+
+  let current = created.run;
+  emit(deps, current, {
+    type: "validation",
+    detail: { accepted: true, source: current.disclosure.source },
+  });
+
+  const preEngagementFailure =
+    input.intent.requestedLane === "none"
+      ? normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "No provider lane selected",
+          retryable: true,
+          correlationId: current.correlationId,
+        })
+      : !requestMatchesRun(input.providerRequest, current)
+        ? normalizedFailure({
+            family: "validation",
+            code: "VALIDATION_ERROR",
+            userMessage: "Provider request does not match the validated run",
+            retryable: false,
+            correlationId: current.correlationId,
+          })
+        : input.providerRequest &&
+            !validateUntrustedProviderRequest(
+              input.providerRequest,
+              current.correlationId,
+            ).ok
+          ? normalizedFailure({
+              family: "validation",
+              code: "VALIDATION_ERROR",
+              userMessage: "Provider request failed boundary validation",
+              retryable: false,
+              correlationId: current.correlationId,
+            })
+        : undefined;
+
+  if (preEngagementFailure) {
+    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
+    if (blocked.run) stateTrace.push(blocked.run.state);
+    return {
+      ok: false,
+      failure: blocked.ok ? preEngagementFailure : blocked.failure,
+      run: blocked.run ?? current,
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+    };
+  }
+
+  const started = await deps.execution.transitionExecutionRun({
+    runId: current.runId,
+    reason: "intent_valid",
+  });
+  if (!started.ok) {
+    return {
+      ok: false,
+      failure: started.failure,
+      run: started.run ?? current,
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+    };
+  }
+  current = started.run;
+  stateTrace.push(current.state);
+  emit(deps, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  const invocation = await invokeProvider(
+    input.providerRequest!,
+    current,
+    input,
+    deps,
+  );
+  emit(deps, current, {
+    type: "provider_invocation",
+    detail: { outcome: invocation.status, source: current.disclosure.source },
+  });
+
+  const terminal = await transitionFromInvocation(current, invocation, deps);
+  if (!terminal.result.ok) {
+    return {
+      ok: false,
+      failure: terminal.result.failure,
+      run: terminal.result.run ?? current,
+      providerInvoked: true,
+      stateTrace,
+      validatedUsage: terminal.usage,
+      lateEvidenceRecorded: false,
+    };
+  }
+  current = terminal.result.run;
+  stateTrace.push(current.state);
+  emit(deps, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  let lateEvidenceRecorded = false;
+  if (input.lateEvidenceSummary) {
+    const late = await deps.execution.transitionExecutionRun({
+      runId: current.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: input.lateEvidenceSummary,
+    });
+    if (late.ok) {
+      current = late.run;
+      lateEvidenceRecorded = true;
+      emit(deps, current, {
+        type: "late_result",
+        detail: { late: true, stateUnchanged: true },
+      });
+    }
+  }
+
+  const successful = current.state === "succeeded";
+  return successful
+    ? {
+        ok: true,
+        run: current,
+        providerInvoked: true,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+      }
+    : {
+        ok: false,
+        failure:
+          current.failure ??
+          normalizedFailure({
+            family:
+              current.state === "timed_out"
+                ? "timed_out"
+                : current.state === "cancelled"
+                  ? "cancelled"
+                  : "internal_normalized_failure",
+            code:
+              current.state === "timed_out"
+                ? "TIMED_OUT"
+                : current.state === "cancelled"
+                  ? "CANCELLED"
+                  : "INTERNAL_NORMALIZED_FAILURE",
+            userMessage: "Execution did not succeed",
+            retryable: false,
+            correlationId: current.correlationId,
+          }),
+        run: current,
+        providerInvoked: true,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+      };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
@@ -0,0 +1,144 @@
+import type {
+  Completeness,
+  ExecutionRun,
+  ExecutionState,
+  UsageSummary,
+} from "../domain/types";
+import type { ExecutionReadinessAssessment } from "./executionReadiness";
+
+const MAX_TEXT = 240;
+const SENSITIVE =
+  /sk-[a-zA-Z0-9_-]{8,}|ghp_[a-zA-Z0-9]{8,}|xox[baprs]-[a-zA-Z0-9-]+|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY/gi;
+
+function boundedRedacted(value: string | undefined): string | null {
+  if (!value) return null;
+  return value.replace(SENSITIVE, "[REDACTED]").slice(0, MAX_TEXT);
+}
+
+function observablePhase(state: ExecutionState): string {
+  switch (state) {
+    case "idle":
+      return "validated";
+    case "running":
+      return "provider_operation";
+    case "awaiting_human":
+      return "human_decision";
+    default:
+      return "terminal";
+  }
+}
+
+function runCompleteness(run: ExecutionRun): Completeness | "unavailable" {
+  if (run.externalResult?.kind === "success") {
+    return run.externalResult.completeness;
+  }
+  const evidence = run.evidence?.at(-1);
+  return evidence?.completeness ?? "unavailable";
+}
+
+export type ExecutionProjection = {
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly state: ExecutionState;
+  readonly source: ExecutionRun["disclosure"]["source"];
+  readonly providerLane: ExecutionRun["disclosure"]["providerLane"];
+  readonly phase: string;
+  readonly completeness: Completeness | "unavailable";
+  readonly resultSummary: string | null;
+  readonly failure: {
+    readonly family: string;
+    readonly code: string;
+    readonly message: string;
+    readonly retryable: boolean;
+  } | null;
+  readonly blockedReason: string | null;
+  readonly humanGate: {
+    readonly gateId: string;
+    readonly question: string;
+    readonly required: boolean;
+    readonly decision: "approve" | "reject" | "cancel" | null;
+  } | null;
+  readonly evidenceSummary: readonly {
+    readonly evidenceId: string;
+    readonly source: ExecutionRun["disclosure"]["source"];
+    readonly completeness: Completeness;
+    readonly producedAt: string;
+    readonly late: boolean;
+    readonly official: true;
+  }[];
+  readonly usage: UsageSummary;
+  readonly openReserves: readonly string[];
+  readonly readinessAssessment: ExecutionReadinessAssessment;
+  readonly limits: readonly string[];
+  readonly persistence: {
+    readonly kind: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+  };
+  readonly cursorUnverified: true;
+  readonly gitWrite: false;
+};
+
+/**
+ * Transport-neutral D3 projection. It deliberately omits provider requests,
+ * raw results, adapter objects, signals, commands, and executable values.
+ */
+export function createExecutionProjection(input: {
+  readonly run: ExecutionRun;
+  readonly readinessAssessment: ExecutionReadinessAssessment;
+  readonly validatedUsage?: UsageSummary;
+  readonly openReserves?: readonly string[];
+}): ExecutionProjection {
+  const { run } = input;
+  const resultSummary =
+    run.externalResult?.kind === "success"
+      ? boundedRedacted(run.externalResult.redactedSummary)
+      : null;
+
+  return {
+    runId: run.runId,
+    correlationId: run.correlationId,
+    state: run.state,
+    source: run.disclosure.source,
+    providerLane: run.disclosure.providerLane,
+    phase: observablePhase(run.state),
+    completeness: runCompleteness(run),
+    resultSummary,
+    failure: run.failure
+      ? {
+          family: run.failure.family,
+          code: run.failure.code,
+          message:
+            boundedRedacted(run.failure.userMessage) ?? "Failure details unavailable",
+          retryable: run.failure.retryable,
+        }
+      : null,
+    blockedReason: boundedRedacted(run.blockedReason),
+    humanGate: run.gate
+      ? {
+          gateId: run.gate.gateId,
+          question:
+            boundedRedacted(run.gate.question) ?? "Human decision required",
+          required: run.gate.required,
+          decision: run.gate.decision ?? null,
+        }
+      : null,
+    evidenceSummary: (run.evidence ?? []).map((evidence) => ({
+      evidenceId: evidence.evidenceId,
+      source: evidence.source,
+      completeness: evidence.completeness,
+      producedAt: evidence.producedAt,
+      late: evidence.late,
+      official: true,
+    })),
+    usage: input.validatedUsage ?? run.usage,
+    openReserves:
+      input.openReserves ?? input.readinessAssessment.openReserves,
+    readinessAssessment: input.readinessAssessment,
+    limits: run.disclosure.limits,
+    persistence: run.persistence,
+    cursorUnverified: true,
+    gitWrite: false,
+  };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
@@ -0,0 +1,76 @@
+export type ReadinessStatus =
+  | "demonstrated"
+  | "not_demonstrated"
+  | "blocked";
+
+export type ReadinessLevel = {
+  readonly status: ReadinessStatus;
+  readonly reasons: readonly string[];
+};
+
+export type ExecutionReadinessAssessment = {
+  readonly uxExploration: ReadinessLevel;
+  readonly uiDelivery: ReadinessLevel;
+  readonly strongRuntimeVerdict: ReadinessLevel;
+  readonly openReserves: readonly string[];
+};
+
+export type ExecutionReadinessProof = {
+  readonly fixturePathDemonstrated: boolean;
+  readonly projectionDemonstrated: boolean;
+  readonly disclosuresDemonstrated: boolean;
+};
+
+export const D2D3_OPEN_RESERVES = [
+  "R-QA-REV-01 — OPEN NOT LIFTED",
+  "R-QA-REV-02 — OPEN NOT LIFTED",
+  "R-QA-D2C-01 — OPEN NOT LIFTED",
+  "Cursor product capabilities — UNVERIFIED",
+  "memory process-local only",
+  "R-PR-D2D2-01 — MINOR",
+] as const;
+
+/**
+ * Pure D2-D3 readiness assessment. Higher readiness levels are deliberately
+ * bounded by the gates and artifacts that this delivery does not consume.
+ */
+export function assessExecutionReadiness(
+  proof: ExecutionReadinessProof,
+): ExecutionReadinessAssessment {
+  const uxDemonstrated =
+    proof.fixturePathDemonstrated &&
+    proof.projectionDemonstrated &&
+    proof.disclosuresDemonstrated;
+
+  return {
+    uxExploration: {
+      status: uxDemonstrated ? "demonstrated" : "not_demonstrated",
+      reasons: uxDemonstrated
+        ? [
+            "fixture path demonstrated",
+            "provider-independent projection demonstrated",
+            "source and persistence disclosures demonstrated",
+          ]
+        : ["fixture path, projection, and disclosures are all required"],
+    },
+    uiDelivery: {
+      status: "not_demonstrated",
+      reasons: [
+        "no UI or accessibility delivery",
+        "no Figma evidence",
+        "no D3 transport selected",
+      ],
+    },
+    strongRuntimeVerdict: {
+      status: "blocked",
+      reasons: [
+        "G-D2D-CURSOR-01 not consumed",
+        "G-D2D-PERSIST-01 not consumed",
+        "Cursor unverified",
+        "memory is process-local",
+        "no live provider proof",
+      ],
+    },
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -106,3 +106,23 @@
   InvokeOutcome,
   RetryClass,
 } from "./application/providerInvocation";
+export { coordinateExecutionRun } from "./application/coordinateExecutionRun";
+export type {
+  CoordinateExecutionRunDependencies,
+  CoordinateExecutionRunInput,
+  CoordinateExecutionRunResult,
+  CoordinateProviderRequest,
+  ExecutionAuthority,
+} from "./application/coordinateExecutionRun";
+export { createExecutionProjection } from "./application/executionProjection";
+export type { ExecutionProjection } from "./application/executionProjection";
+export {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "./application/executionReadiness";
+export type {
+  ExecutionReadinessAssessment,
+  ExecutionReadinessProof,
+  ReadinessLevel,
+  ReadinessStatus,
+} from "./application/executionReadiness";
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
@@ -0,0 +1,102 @@
+import {
+  coordinateExecutionRun,
+  type CoordinateExecutionRunInput,
+  type CoordinateExecutionRunResult,
+} from "../application/coordinateExecutionRun";
+import {
+  createExecutionProjection,
+  type ExecutionProjection,
+} from "../application/executionProjection";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+  type ExecutionReadinessProof,
+} from "../application/executionReadiness";
+import type { ClockPort } from "../ports/clockPort";
+import type { ExecutionRun } from "../domain/types";
+import { composeExecutionRunMemory } from "./composeExecutionRunMemory";
+import {
+  composeExecutionRunProvidersFake,
+  type ExecutionRunProviderComposition,
+} from "./composeExecutionRunProviders";
+import { assertServerOnly } from "./serverOnly";
+
+export type ExecutionRunD2D3Composition = {
+  readonly coordinate: (
+    input: CoordinateExecutionRunInput,
+  ) => Promise<CoordinateExecutionRunResult>;
+  readonly project: (
+    run: ExecutionRun,
+    proof: ExecutionReadinessProof,
+  ) => ExecutionProjection;
+  readonly assessReadiness: (
+    proof: ExecutionReadinessProof,
+  ) => ExecutionReadinessAssessment;
+  readonly getById: (runId: string) => Promise<ExecutionRun | null>;
+  readonly disclosure: {
+    readonly sources: readonly ["fixture"];
+    readonly cursorLive: false;
+    readonly cursorVerified: false;
+    readonly providersLive: false;
+    readonly gitWrite: false;
+    readonly persistence: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+    readonly gD2dCursor01: "NOT_CONSUMED";
+    readonly gD2dPersist01: "NOT_CONSUMED";
+  };
+};
+
+/**
+ * D2-D3 fixture-first composition. It assembles the existing single memory
+ * authority and D2-D2 ports; it does not introduce another store or runtime.
+ */
+export function composeExecutionRunD2D3(options?: {
+  readonly providers?: ExecutionRunProviderComposition;
+  readonly clock?: ClockPort;
+  readonly clockIso?: string;
+}): ExecutionRunD2D3Composition {
+  assertServerOnly();
+  const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
+  const execution = composeExecutionRunMemory({ clockIso });
+  const providers = options?.providers ?? composeExecutionRunProvidersFake();
+  const clock: ClockPort = options?.clock ?? { nowIso: () => clockIso };
+
+  const assessReadiness = (proof: ExecutionReadinessProof) =>
+    assessExecutionReadiness(proof);
+
+  return {
+    coordinate: (input) =>
+      coordinateExecutionRun(input, {
+        execution,
+        providers,
+        events: providers.events,
+        clock,
+        availableSources: ["fixture"],
+      }),
+    project: (run, proof) => {
+      const readinessAssessment = assessReadiness(proof);
+      return createExecutionProjection({
+        run,
+        readinessAssessment,
+        openReserves: readinessAssessment.openReserves,
+      });
+    },
+    assessReadiness,
+    getById: execution.getById,
+    disclosure: {
+      sources: ["fixture"],
+      cursorLive: false,
+      cursorVerified: false,
+      providersLive: false,
+      gitWrite: false,
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+      gD2dCursor01: "NOT_CONSUMED",
+      gD2dPersist01: "NOT_CONSUMED",
+    },
+  };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -12,3 +12,7 @@
   composeExecutionRunProvidersFake,
   type ExecutionRunProviderComposition,
 } from "./composeExecutionRunProviders";
+export {
+  composeExecutionRunD2D3,
+  type ExecutionRunD2D3Composition,
+} from "./composeExecutionRunD2D3";
```
