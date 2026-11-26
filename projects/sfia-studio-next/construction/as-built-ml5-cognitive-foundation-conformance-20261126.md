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
