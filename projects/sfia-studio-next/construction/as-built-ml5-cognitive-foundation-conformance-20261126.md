# As-built — ML5 cognitive foundation conformance (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ** · Livraison 2 : **NON ENGAGÉE**

## S1 — Build `/404`

- **Cause racine** : `NODE_ENV=development` dans le shell cassait le prerender Next (`Html should not be imported outside of pages/_document`). Les pages `not-found`/`global-error` n'étaient pas la cause.
- **Correction** : `package.json` `"build": "NODE_ENV=production next build"`.
- **Artefact** : BUILD_ID `X94NdR5lxD655tzAciId3` — EXIT 0.

## S2 — Frontière fournisseur HTTP

- `provider-emission-frontier.ts` distingue **SDK invocation** (`assertSdkInvocationAdmission`) et **tentative HTTP** (`createFrontierAwareFetch` / `reserveHttpEmission`).
- Client OpenAI process-wide via `ensureFrontierOpenAIClientInstalled` + `setDefaultOpenAIClient` (fetch frontier-aware ; retries = tentatives distinctes).
- Enveloppe campagne ALS + latch process si campagne `required` (perte ALS ≠ illimité).
- Pas de défaut silencieux Terra/medium : effort requis (payload, hint SDK, ou refuse).
- Oracle indépendant : corps/URLs reçus par fetch substitué (N vs N+1).
- Nora + worker WEB : admission SDK puis HTTP au fetch — plus de comptage `run()` comme HTTP.

## S3 — Allocation / budgets

- Suspend sans substitution silencieuse conservé.
- Message Pilote : besoin / contrainte / conséquence — **sans obligation d'administrer les modèles** (`buildResourceContinuitySuspendMessage`).
- Budgets 2M / 1M / 120 segments inchangés.
- Conducteur D3 unique conservé.

## S4 — FinOps

- Couverture / complétude restent relatives à l'ensemble d'**observations recensées**.
- Sans recensement d'émissions HTTP indépendant → `kind: "partial"` (pas de 100 % « known » trompeur).
- Source unique : `provider_usage_observations`.

## S5 — Autorité WEB D6

- `effectConditions` obligatoires et parsées fail-closed.
- Contrôle kind=`RECORD_DECISION`, state=`APPLICABLE`, query/destination/purpose/policyVersion/pilot/project.
- `authorizedExactWebQueryBindings` + `reverifyWebPublicQueryAuthorityAtEgress` (decisionId requis).
- `priorExactQueries` seules n'admettent plus l'egress exceptionnel.
- Preuve de révocation au dernier mile.

## S6 — PDF

- `pdf-viewer-authorization.ts` : session, owner, lane connue+concordante, habilitation projet DB, binding cognitive work, expiry, fingerprint.
- `viewerToken` ≠ autorité.
- Lane absente/inconnue refusée.

## WEB LIVE

`SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` · G-WEB-MIXED fermé · enveloppes §12.1/12.2 **non consommées** (S2 déterministe satisfait ; LIVE discriminant optionnel en réserve B).


## Cycle conformité intégrée + LIVE (suite — 2026-11-26 soir)

### Corrections racines

- ALS : `store()` refuse `emptyStore()` éphémère ; LIVE Nora/WEB wrappent `runWithProviderEmissionStoreAsync`.
- Campagne process-level : `processCampaignRegistry` + `attachConfiguredLiveCampaignFromEnv` (G-LIVE-API / G-WEB-PUBLIC).
- Bornes : plus de réservation forfaitaire 50k/4k ; ceilings per-request + injection `max_output_tokens` sur le wire.
- SDK réel : tests A-03 retry / A-04 N+1 avec `@openai/agents@0.21` + `openai@7.50` transport substitué.
- Restitution : soft-stop post-segment n’entre en `RESTITUTION_PHASE` que s’il existe des acquis.
- FinOps : `getHttpAttemptsSnapshot` + `recordNoraProviderUsageWithHttpCorrelation` (pas de 2e ledger ; pas de migration).
- WEB D6 : absence projectId/pilotId ⇒ DENY pour exceptionnel non catalogué.
- PDF : `workProjectId` requis pour scope projet ; footprint enrichissement session.

### LIVE G-LIVE-API

- BUILD_ID démarré : `emfz_yP5MBF9GxQRrnJGP`
- LIVE-01 reply : « Je suis Nora et le socle cognitif répond. »
- Observations : 25 · attempts distincts 18 · ~130813 / 3655 tokens · ~USD 0.041 · coverage PARTIAL
- WEB OFF · RECETTE intacte

### Gates

- G-LIVE-API : consommé (borné)
- G-WEB-PUBLIC : non consommé (hosted ASSUMED_1)
- G-WEB-MIXED : fermé
- G-RECETTE : non consommé


## Convergence qualification (2026-11-26 evening)

### P1
- Input: estimate body (`len/3`) for reservation only; never treat campaign ceiling as demonstrable max; INPUT_UNBOUNDED if neither.
- Campaign restart: `.sfia-evidence/live-campaign-state.json` pid latch → `CAMPAIGN_INVALIDATED_RESTART`.
- Agents SDK tool-loop integration test (multi Responses) PASS.
- Direct opens: slot consumed before egress (failures count).

### P3
- HTTP correlation rows: `providerRequests: null` + `HTTP_ATTEMPT_CORRELATION_ONLY`.
- Aggregations via `filterBillableFinOpsRows` / `sumBillableProviderRequests`.
- Real APIs: `/api/finops/summary`, `/api/finops/works`, `/api/finops/works/[workId]`; UI `/settings/consumption`.

### P2 LIVE
- Chantiers360 `proj_fdd9b064…` / `prep_85f051f7…` — investigation PASS (tools=2, oracle 3/3) + note technique.
- BUILD_ID `XGqFqt2I6aCNTZLjirvtW`.

### P4
- G-WEB-PUBLIC closed — hosted arbitration dossier.
- Browser smokes 200 on login, FinOps, PDF harness, project page.
