# Full Review Pack — SFIA Studio V3.1-D2-D Technical Architecture

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure début** | 2026-08-03 19:07:44 CEST (+0200) |
| **Date/heure fin** | 2026-08-03 19:15:25 CEST +0200 |
| **Rôle** | Cursor (Cycle 6 — Architecture technique) |
| **Cycle** | Cycle 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | DOC — architecture-only |
| **Branche** | `architecture/sfia-studio-v3-1-d2-d-integration-foundation-technical-architecture` |
| **Base** | `main@e273b2afc33445154f63226fdfe8357c75df67f8` |
| **Verdict** | READY FOR MORRIS ARBITRATION |

## GO Morris consommé

```text
GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D
Date/heure : 2026-08-03 18:54 CEST (+0200)
```

### Interprétation bornée

Autorisé : analyse technique repo-informed · branche locale · document 23 local non tracké · options · ADR candidates · TA candidates · Full Review Pack · handoff L3.

Interdit : adoption auto · modif 20–22 · code · tests app · deps · config · staging/commit/push/PR projet · backlog · Delivery · UI · CreateCycle · D3 · méthode · Git write produit.

## Git Truth initial

| Check | Résultat |
|-------|----------|
| MAIN_WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Branche initiale | `main` |
| HEAD / origin/main | `e273b2afc33445154f63226fdfe8357c75df67f8` |
| Staged / tracked | vides |
| Untracked | `.tmp-sfia-review/**` |
| Branche/PR technique | absentes avant création |

## Création branche locale

```text
git switch -c architecture/sfia-studio-v3-1-d2-d-integration-foundation-technical-architecture e273b2afc33445154f63226fdfe8357c75df67f8
```

HEAD inchangé · staged vide · aucun push.

## Handoff predecessor (post-merge)

| Tip | Blob |
|-----|------|
| `3ec9c997ce5b36d1797ecf13f2588e5460f3f2bb` | `4da0087bf5c98d6339dd05cbae021f654e328523` |

Cycle 14 · PR #305 mergée · MERGE_SHA `e273b2af…` · CI main `30833605426` · package 20–22 · réserves OPEN · verdict post-merge validé.

## Sources consultées

### Méthode

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
6. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md`
7. **CKC** `.../pilots/03-architecture-technique.md` — candidate v0.1.0 — experimental — **aucune autorité d'exécution**
8. `sfia-v2.5-project-cycles-method-candidate.md` §4.6
9. `scripts/sfia/README.md`
10. `scripts/sfia/publish-review-handoff.sh`

### CKC limites

Finalité : options, NFR, trade-offs, dette, réversibilité. Exige ≥2 options structurantes. Anti-patterns : mono-option, stack par habitude, astronaut, sécu cosmétique, benchmark inventé, code sous couvert d'archi. Anti-claims : scalable/sécurisé/production-ready/zéro dette sans preuve.

### Projet

Documents 20–22 (hashes post-merge match) · doc 18 structure only · OA cycle/execution-contract/decision/project · vertical-slice-runtime/core · platform ai/tools/repository/observability/security · harness ports/increment-d/gate/proof/journal · package.json · CI workflow.

## Décisions héritées

D-CAD-01…12 · D-FD-01…12 · D-FA-01…12 **ADOPTED**
MOD-B · RUNTIME-C fonctionnel · REUSE-B · 8 capacités · 12 objets · 8 états · D2-D1→D2-D2→D2-D3 · D2-D4 hors trajectoire.

Réserves : R-QA-REV-01 · R-QA-REV-02 · R-QA-D2C-01 — **OPEN NOT LIFTED**.

## Baseline technique (synthèse)

- VS runtime : Create/Get ; `agentExecution: DISABLED` ; process-local ; pas autorité D2-D.
- execution-contract : refuse T-A5 ; pas runtime.
- platform AI/GitHub : transports réels existants derrière wrappers candidats.
- harness Cursor : pattern extract ; capacités produit **UNVERIFIED**.
- Double-runtime : OPS1 Cursor / harness / OA T-A5 NoOp.
- Deps : Next 15 · TS strict · AJV · OpenAI déjà présents ; **aucune** nouvelle dépendance.

### VS runtime disclosures (`projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`)

```
import "./serverGuard";

/**
 * D-V2-05 runtime disclosures — always attached to runtime results.
 * Not a product-ready claim surface.
 */
export interface RuntimeDisclosures {
  readonly runtimeMode: "LOCAL_PROCESS";
  readonly persistence: "NOT_GUARANTEED";
  readonly agentExecution: "DISABLED";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "NOT_SELECTED";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  readonly localDataVolatile: true;
  readonly restartMayLoseState: true;
  readonly messages: readonly string[];
}

export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
  "Mode local process-bound: the runtime lives in a single Node process.",
  "Business data is temporary and may be lost on restart or hot reload.",
  "IAM is not configured.",
  "Product persistence is not selected.",
  "Real agent execution is disabled.",
  "Delivery and cutover are not authorized.",
]);

export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
  runtimeMode: "LOCAL_PROCESS",
  persistence: "NOT_GUARANTEED",
  agentExecution: "DISABLED",
  iam: "NOT_SELECTED",
  productPersistence: "NOT_SELECTED",
  delivery: "NOT_AUTHORIZED",
  cutover: "NOT_AUTHORIZED",
  localDataVolatile: true,
  restartMayLoseState: true,
  messages: RUNTIME_DISCLOSURE_MESSAGES,
});

/**
 * Honest readiness projection for future Overview UI.
 * Never claims HARD closed, T-A6 complete, RUN READY, or product ready.
 */
export interface RuntimeReadinessProjection {
  readonly status: "NOT_READY";
  readonly hard: "OPEN";
  readonly tA6: "INCOMPLETE";
  readonly iam: "NOT_SELECTED";
  readonly productPersistence: "NOT_SELECTED";
  readonly realAgentExecution: "DISABLED";
  readonly delivery: "NOT_AUTHORIZED";
  readonly cutover: "NOT_AUTHORIZED";
  readonly runReady: false;
  readonly productReady: false;
}

export const RUNTIME_READINESS_NOT_READY: RuntimeReadinessProjection =
  Object.freeze({
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  });

```
### deps (`projects/sfia-studio/app/package.json`)

```
{
  "name": "sfia-studio",
  "private": true,
  "version": "0.1.0",
  "description": "SFIA Studio — Delivery P0 frontend (fixtures locales, 4 écrans Figma)",
  "scripts": {
    "dev": "next dev --port 3020",
    "build": "next build",
    "start": "next start --port 3020",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "ajv": "^6.15.0",
    "next": "^15.3.3",
    "openai": "^6.48.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.52.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^22.15.21",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "axe-core": "^4.10.3",
    "eslint": "^9.27.0",
    "eslint-config-next": "^15.3.3",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}

```


## Options structurantes (toutes non adoptées)

| Domaine | Options | Reco candidate |
|---------|---------|----------------|
| Runtime | TECH-RUN-A/B/C | TECH-RUN-B |
| Contrats | CONTRACT-A/B/C | CONTRACT-B |
| Persistance | STORE-A/B/C | STORE-B |
| Async | ASYNC-A/B/C | ASYNC-B |
| AI | AI-A/B/C | AI-B |
| Git | GIT-A/B/C | GIT-C |
| Cursor | CURSOR-A/B/C | CURSOR-B after capability gate |
| Secrets | SECRET-A/B/C | SECRET-B |
| Events | EVENT-A/B/C | EVENT-B |
| D3 | D3-TECH-A/B/C | D3-TECH-C |

## Decision pack TA-01…14

Toutes : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**
Détail complet dans document 23 §AN.

## Document 23 complet

---BEGIN DOCUMENT 23---
# 23 — SFIA Studio V3.1-D2-D Integration Foundation — Architecture technique

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Document** | `23-v3-1-d2-d-integration-foundation-technical-architecture.md` |
| **Date/heure** | 2026-08-03 19:07 CEST (+0200) |
| **Cycle** | Cycle 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | DOC — architecture-only |
| **Branche locale** | `architecture/sfia-studio-v3-1-d2-d-integration-foundation-technical-architecture` |
| **Base Git** | `main@e273b2afc33445154f63226fdfe8357c75df67f8` |
| **GO Morris** | `GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D` (2026-08-03 18:54 CEST) |
| **Documents amont (immutables)** | [20](./20-v3-1-d2-d-integration-foundation-cadrage.md) · [21](./21-v3-1-d2-d-integration-foundation-functional-design.md) · [22](./22-v3-1-d2-d-integration-foundation-functional-architecture.md) |
| **Précédent structure (non copié)** | [18](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) — structure only ; décisions D2-A/B/C non applicables à D2-D |
| **CKC** | `method/.../pilots/03-architecture-technique.md` — candidate v0.1.0 — experimental cognitive guidance — **aucune autorité d'exécution** |
| **Code / tests / config / UI** | **non** |
| **Statut** | `D2-D TECHNICAL ARCHITECTURE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO BACKLOG OR DELIVERY AUTHORIZED` |

### Légende des marqueurs

| Marqueur | Signification |
|----------|---------------|
| **ADOPTED** | Décision Morris déjà adoptée (CAD/FD/FA) |
| **OBSERVATION** | Fait Git vérifié |
| **CONTRAINTE** | Borne non négociable dans ce cycle |
| **HYPOTHÈSE** | À vérifier ; non prouvée |
| **OPTION** | Alternative comparable |
| **RECOMMANDATION CANDIDATE** | Proposition Cursor — **NOT ADOPTED** |
| **ADR CANDIDATE** | ADR PROPOSED — NOT ADOPTED |
| **DÉCISION TECHNIQUE CANDIDATE** | TA-xx — NOT DECIDED |
| **INCONNUE** | Ouvert |
| **RÉSERVE** | Ouverte, non levée |
| **DETTE** | Coût différé explicite |
| **GATE FUTURE** | Nécessite GO Morris distinct |

---

## B. Décisions héritées (ADOPTED)

### B.1 D-CAD-01…12 — ADOPTED BY MORRIS (2026-08-03 16:56 CEST)

| ID | Résumé |
|----|--------|
| CAD-01 | Strict Minimal Foundation ; walking skeleton réel reporté à D2-D3 |
| CAD-02 | Contrats D2-D avant Delivery UI D3 ; exploration UX possible après D2-D1 stable |
| CAD-03 | Ports provider avant couplage SDK ; réutilisation platform/harness = hypothèse jusqu'à validation TA |
| CAD-04 | Read-only first ; pas de Git write en D2-D1/D2/D3 ; D2-D4 hors trajectoire |
| CAD-05 | STATE-A extensible (`timed_out`, `blocked`) ; pas de STATE-B complet |
| CAD-06 | INT-C hybrid contract-first : fixtures puis walking skeleton read-only sandboxed |
| CAD-07 | Sandbox validée avant Cursor réel ; capacités Cursor produit **UNVERIFIED** |
| CAD-08 | Secret Provider server-only ; GitHub read-only ; aucune techno secret store sélectionnée |
| CAD-09 | Events structurés + redaction stricte ; pas de claim RUN-READY/SLO |
| CAD-10 | R-C défense en profondeur : correction D2-C et frontière D2-D = cycles/gates séparés |
| CAD-11 | Séquence D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire |
| CAD-12 | Exploration UX D3 après stabilité D2-D1 ; Delivery UI + strong runtime après D2-D2/D3 |

### B.2 D-FD-01…12 — ADOPTED BY MORRIS (2026-08-03 17:19 CEST)

Douze objets fonctionnels ; huit états persistants exacts ; transitions documentées ; partial ≠ succeeded ; gates humains ; cancellation terminale + late result evidence-only ; sources `fixture`/`sandbox-real`/`real` ; familles d'échec normalisées ; catalogue d'événements ; projection D3 provider-independent ; trois niveaux de readiness.

### B.3 D-FA-01…12 — ADOPTED BY MORRIS (2026-08-03 17:42 CEST)

| Décision clé | Valeur ADOPTED |
|--------------|----------------|
| **MOD-B** | Décomposition fonctionnelle capability-centric minimale (pas packages/déploiement) |
| **Huit capacités** | Intake · Coordination · Validation/Policy · Provider Boundary · State/Human Gate · Evidence/Disclosure · Events/Usage · Fixture Catalogue |
| **Autorités uniques** | State Authority ; Evidence Authority ; Policy pre-engagement |
| **Provider Boundary** | Une frontière, trois lanes AI/Git/Cursor |
| **RUNTIME-C (fonctionnel)** | Une autorité fonctionnelle D2-D ; `vertical-slice-runtime` = option façade future uniquement ; **aucun runtime technique sélectionné** |
| **REUSE-B** | Principe d'évaluation : évaluer platform/harness derrière frontières ; **aucune compatibilité supposée** |
| **Slicing** | D2-D1 → D2-D2 → D2-D3 ; **D2-D4 write hors trajectoire** |

### B.4 Réserves transportées — OPEN NOT LIFTED

| ID | Statut |
|----|--------|
| R-QA-REV-01 MINOR | OPEN NOT LIFTED |
| R-QA-REV-02 MINOR | OPEN NOT LIFTED |
| R-QA-D2C-01 MINOR | OPEN — NOT LIFTED (R-C : deux travaux futurs séparés) |

---

## C. Finalité technique

Construire une architecture technique **minimale**, **provider-independent**, **server-only** et **read-only** permettant de valider les contrats D2-D, puis d'intégrer progressivement AI, GitHub et Cursor **sans** exposer les fournisseurs à D3 et **sans** créer un second runtime concurrent.

Cette finalité est une **contrainte de conception** pour les options ; elle n'adopte aucune stack, aucun package, aucun adapter.

---

## D. Périmètre et hors périmètre

### Périmètre

Architecture · modules candidats · ports · adapters · contrats · validation · état · persistance · async · erreurs · events · secrets · sandbox · tests · slicing · impacts DevOps (analyse seule).

### Hors périmètre

Code · migration · SDK install · endpoints · UI · backlog · Delivery · déploiement · RUN readiness · Git write · CreateCycle · promotion méthode · adoption de décision technique.

---

## E. Baseline Git-authoritative (OBSERVATION)

**Base :** `main@e273b2afc33445154f63226fdfe8357c75df67f8`
**Preuves :** lecture de `projects/sfia-studio/app/lib/**` et `projects/sfia-studio/harness/src/**` ; `package.json` ; workflows CI.

### E.1 Inventaire synthétique

| Élément | Path | Rôle | Server/client | Persistance | Réutilisation candidate | Écart D2-D | Preuve |
|---------|------|------|---------------|-------------|-------------------------|------------|--------|
| OA cycle | `app/lib/oa/cycle/**` | Domaine cycle + D2-A/B/C qualification | Server/composition (`node:crypto`) | Memory | Compatible (qualify read-only) ; extract si durable | Pas d'exécution AI/Git/Cursor | `createCkcQualificationServices` read-only |
| OA execution-contract | `app/lib/oa/execution-contract/**` | Gouvernance contrat jusqu'à confirmed | Server | Memory | Compatible comme gate amont | Refuse explicitement états T-A5 | `assertNotTa5Injection` / `TA5_STATUS_REFUSED` |
| OA decision | `app/lib/oa/decision/**` | HumanDecision / Confirmation | Server | Memory | Compatible pour gates humains futurs | Pas d'exécution | T-A3 |
| OA project | `app/lib/oa/project/**` | Project + LPS | Server | Memory | Compatible | Pas d'exécution | T-A1 |
| OA execution-attempt | `app/lib/oa/execution-attempt/**` | Tentative T-A5 | Server | Memory | Wrapper candidat | Adapters NoOp/Test only ; **pas** exécuteur réel | Commentaire : foundation does not execute |
| vertical-slice-runtime | `app/lib/vertical-slice-runtime/**` | Facade Next Create/Get project | Server (`serverGuard`, `"use server"`) | Business = OA memory ; audit noop/memory/sqlite | Wrapper/facade seulement | `agentExecution: "DISABLED"` ; process-local singleton | `disclosures.ts`, `singleton.ts` |
| vertical-slice-core | `app/lib/vertical-slice-core/**` | Composition locale Project | Server | OA memory + audit | Compatible create/get | `realAgentExecution: "NOT_AVAILABLE"` | `localProjectComposition.ts` |
| platform AI | `app/lib/platform/ai/**` | ConversationProvider OpenAI + Fake | Server-only (comment) | Aucune | Compatible transport derrière wrapper | Contrat conversation ≠ contrat D2-D ; pas d'evidence OA | `openaiProvider.ts` |
| platform tools | `app/lib/platform/tools/**` | Tool router deny-by-default | Server | Aucune | Compatible reads | `cursor_*` refusés ; pas runtime D2-D | `toolRouter.ts` |
| platform repository | `app/lib/platform/repository/**` | Git local + GitHub read | Server (`child_process`/`fs`) | Aucune | Compatible read ports | Read-only ; pas Cursor | `GithubReadPort`, `GhCli` / `Rest` |
| platform observability | `app/lib/platform/observability/**` | EventSink injectable | Server | Noop défaut | Compatible | Catalogue ≠ events fonctionnels D2-D | `eventSink.ts` |
| platform security | `app/lib/platform/security/**` | Path/repo policy + redaction | Server | N/A | Compatible | Policy seule | `pathPolicy.ts`, `redaction.ts` |
| harness ports | `harness/src/ports/**` | Cursor/GPT/Git POC | Node harness | Process/FS | Extract/wrapper | Schémas ≠ OA ; flags live | `CursorExecutorPort` |
| harness increment-d | `harness/src/increment-d/**` | Sandbox Cursor + GO + proof | Node | FS sandbox/proof | Extract pattern | Non intégré Studio runtime | `runIncrementDSandbox` |
| harness gate/proof/journal | `harness/src/gate|proof|journal/**` | Gate fail-closed · proof pack · events.jsonl | Node | FS | Extract | Distinct EventSink platform | comments S1 |

### E.2 Dépendances (OBSERVATION)

| Dep | Version déclarée | Note |
|-----|------------------|------|
| Next | `^15.3.3` | App Studio |
| React | `^19.1.0` | UI — hors D2-D TA |
| TypeScript | `^5.8.3` | Strict |
| AJV | `^6.15.0` | Déjà via doctrine `AjvSchemaValidationAdapter` Draft-07 |
| OpenAI SDK | `^6.48.0` | Platform AI |

**CONTRAINTE :** aucune nouvelle dépendance justifiée par défaut. Zod = CONTRACT-C = décision Morris.

### E.3 Observations confirmées (liste GO)

1. **vertical-slice-runtime** — server-only (guard custom) ; compose vertical-slice-core ; CreateProject/GetProject ; audit noop/memory/sqlite ; **pas** autorité D2-D ; process-local.
2. **oa/cycle** — domaine/application/ports/infra ; `createCkcQualificationServices` read-only ; services mutationnels distincts ; composition in-memory.
3. **oa/execution-contract** — préparation/confirmation ; in-memory ; refuse T-A5 ; **ne doit pas** devenir runtime D2-D implicite.
4. **Platform AI** — OpenAI Responses + fake ; config server ; usage dispo ; contrat conversation ≠ D2-D.
5. **Platform GitHub** — port read-only ; `gh` CLI ou REST ; allowlist ; redaction ; pas de mutation ; transport env-dépendant.
6. **Platform tools** — deny-by-default ; `cursor_*` refusés ; timeout borné ; events techniques.
7. **Platform observability** — EventSink injectable ; Noop défaut ; catalogue technique ≠ D2-D fonctionnel.
8. **Harness Cursor** — fixture/live ; gate avant spawn ; branch/HEAD ancrés ; sandbox/allowlist ; FS + child_process ; capacité produit exacte **UNVERIFIED** ; intégration Next **non prouvée**.
9. **Deps** — Next 15 / TS strict / Vitest / AJV / OpenAI déjà présents.

### E.4 Signaux double-runtime (OBSERVATION)

| Signal | Emplacements | Implication |
|--------|--------------|-------------|
| Cursor | harness Increment D · OPS1 `cursorExecutionAdapter` · OA T-A5 NoOp | Trois histoires d'exécution |
| AI | platform/ai · harness GPT spikes · OPS1 toolLoop | Pas de spine D2-D unique |
| Contract | OA ExecutionContract vs harness S1 ExecutionContract | Schémas incompatibles |

### E.5 Multi-instance / client-bundle (OBSERVATION)

- Singleton process-local `vertical-slice-runtime` ; disclosures `LOCAL_PROCESS` / restart may lose state.
- Imports client-unsafe : `node:crypto`, `child_process`, `fs`, `sqlite`, OpenAI SDK, server actions.

---

## F. Exigences non fonctionnelles

| NFR | Exigence | Raison | Preuve attendue | Slice | Dette si report |
|-----|----------|--------|-----------------|-------|-----------------|
| Déterminisme fixtures | Même input → même ValidationOutcome / état | Reproductibilité CI | Tests fixtures | D1 | Flaky CI |
| Fail-closed | Rejet avant engagement provider | Sécurité / R-QA-D2C-01 | Tests adversariaux | D1–D2 | Fuite partielle |
| Provider independence | Aucun type SDK vers D3 | FD-11 / FA-08 | Import-boundary tests | D1–D3 | Lock-in |
| Server-only | Adapters hors client bundle | Secrets / spawn | Boundary tests | D2 | Leak |
| Minimisation | Prompt/contexte minimisés | RGPD / FinOps | Review + redaction tests | D2–D3 | Coût / fuite |
| Read-only | Aucune méthode write Git/produit | CAD-04 | Port surface tests | D1–D3 | Mutation |
| Réversibilité | Choix packagés derrière ports | CKC | Wrappers | Tous | Refactor coûteux |
| Testabilité | Domaine pur + ports injectés | Delivery future | Vitest unit/contract | D1 | Couplage |
| Résilience | Timeout/cancel/late result | FD-07 | Tests async | D2 | Races |
| Cancellation | Best-effort provider + autorité locale | FD-07 | Tests | D2 | État incohérent |
| Timeout | Opérationnel + global candidats | FD | Tests | D2 | Hang |
| Late result | Evidence-only post-terminal | FD-07 | Tests | D2–D3 | Spoof success |
| Multi-instance | Claim interdit sans store durable | OBS | Disclosures | D3 | Claims faux |
| Persistance | Staged ; durable non sélectionné | STORE-B candidat | ADR | D1–D3 | Perte état |
| Observabilité | Events redacted + correlation | CAD-09 | Event schema tests | D2 | Blind ops |
| FinOps | Usage validé ; pas de prix hardcodé | CAD | Usage fields | D2–D3 | Coût opaque |
| Next/TS/Vitest | Compatibilité stack existante | DevOps fit | CI existante | Tous | Divergence |
| Pas de métrique inventée | Aucun SLO/latency inventé | Anti-claim CKC | Revue | Tous | — |

---

## G. Principes techniques (CONTRAINTES de conception)

1. Un seul core d'exécution D2-D (autorité d'état unique).
2. Domaine sans SDK fournisseur.
3. Ports avant adapters.
4. Validation avant lecture de métadonnées (R-QA-D2C-01 / R-C).
5. Résultats discriminés (complete / partial / failure).
6. État géré par fonctions pures.
7. Side effects derrière ports.
8. Secrets hors domaine.
9. No provider object vers D3.
10. No Git write.
11. No shell arbitraire.
12. Fixtures conformes aux mêmes contrats que adapters réels.
13. Aucun succès sans preuve complète.
14. Aucune technologie durable sans besoin prouvé.
15. Pas de nouvelle dépendance sans gain démontré + arbitrage Morris.

---

## H. Inventaire et classification de réutilisation (REUSE-B)

| Brique | Classification | Note |
|--------|----------------|------|
| `oa/cycle` | Compatible (qualify) / Extract si durable | Read-only D2-C composition |
| `oa/execution-contract` | Compatible (gate amont) | **Incompatible** comme runtime ; refuse T-A5 |
| `vertical-slice-runtime` | Compatible derrière wrapper/facade | **Incompatible** comme state authority D2-D |
| platform AI | Compatible derrière wrapper | Contract-fit **UNVERIFIED** |
| platform GitHub | Compatible derrière wrapper | Transports env-dépendants |
| platform tools | Compatible (reads) | Pas Cursor exec |
| platform observability | Compatible derrière port D2-D | Catalogue différent |
| harness Cursor | Extract / wrapper | Capacité produit **UNVERIFIED** ; intégration Next **UNVERIFIED** |

**REUSE-B respecté :** aucune compatibilité supposée ; décisions de réutilisation = TA candidates.

---

## I. Options runtime et packaging

### TECH-RUN-A — `vertical-slice-runtime` = autorité technique D2-D

| Critère | Analyse |
|---------|---------|
| Alignement RUNTIME-C | Faible — VS runtime = Create/Get project, agentExecution DISABLED |
| Double runtime | Risque élevé d'étendre un host incompatible |
| Next coupling | Fort |
| Testabilité | Faible (Server Actions / singleton) |
| Persistance | Process-local |
| Réversibilité | Faible après Delivery |

### TECH-RUN-B — Nouveau core OA sémantique frère (`oa/execution-run`) + VS runtime = facade/composition server-only

| Critère | Analyse |
|---------|---------|
| Alignement RUNTIME-C | Fort — une autorité core ; facade optionnelle |
| Double runtime | Mitigé si state authority **uniquement** dans core |
| Imports | Domaine pur testable |
| Next | Composition root server seule |
| Migration | Progressive |
| Dette | Nouveau module OA |
| Réversibilité | Haute avant Delivery |

### TECH-RUN-C — Service/package autonome séparé de l'app

| Critère | Analyse |
|---------|---------|
| Cohésion | Séparation nette |
| Ops | Complexité déploiement prématurée |
| Double runtime | Possible si Studio garde un second path |
| GreenOps | Worker/service permanent sans besoin prouvé |

**RECOMMANDATION CANDIDATE :** TECH-RUN-B.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## J. Architecture technique cible candidate (NOT ADOPTED)

```mermaid
flowchart TB
  D3["D3 consumer futur
(projection only)"]
  SF["Server facade
(transport-neutral)"]
  IN["Execution Intake"]
  CO["Coordination"]
  VP["Validation & Policy"]
  SA["State Authority
(unique)"]
  EV["Evidence / Disclosure"]
  EU["Event / Usage"]
  PB["Provider Boundary"]
  AI["AI adapter"]
  GIT["Git adapter"]
  CUR["Cursor adapter"]
  SEC["Secret Source"]
  SBX["Sandbox"]
  REPO["ExecutionRunRepository"]
  D2C["D2-C Qualification Core
(read-only)"]

  D3 --> SF
  SF --> IN
  IN --> CO
  CO --> VP
  CO --> SA
  CO --> PB
  VP --> SA
  PB --> AI
  PB --> GIT
  PB --> CUR
  AI --> SEC
  GIT --> SEC
  CUR --> SEC
  CUR --> SBX
  SA --> REPO
  SA --> EV
  CO --> EU
  EV --> EU
  IN -.-> D2C

  classDef forbid fill:#fee,stroke:#c00
```

### Dépendances autorisées (candidates)

- D3 → Server facade → Intake/Coordination uniquement (read projection).
- Coordination → Policy → State Authority.
- Providers → ports uniquement ; résultats vers State/Evidence, jamais vers D3.

### Dépendances interdites

- D3 → SDK / Secret / Cursor spawn / Git write.
- Provider → State Authority mutateur direct.
- `vertical-slice-runtime` et `execution-run` comme **deux** state authorities.
- `execution-contract` muté en runtime d'exécution.

---

## K. Découpage en couches (RECOMMANDATION CANDIDATE)

| Couche | Contenu | Interdits |
|--------|---------|-----------|
| **1. Domain** | objets, états, transitions, erreurs, disclosures, evidence, invariants | Next/Node/SDK |
| **2. Application** | coordination, state authority, policy, cancellation, human gates | SDK types |
| **3. Ports** | repositories, AI, Git, Cursor, secret, event sink, clock, id | Implémentations |
| **4. Adapters** | memory, AI wrapper, GitHub wrapper, Cursor process, env secrets, event sink | Domaine pollué |
| **5. Server composition** | composition root | Domaine dans client bundle ; transport D3 figé |

**Statut :** CANDIDATE — NOT ADOPTED.

---

## L. Contrats et validation runtime

### CONTRACT-A — Types TS + guards manuels

Simple ; risque de drift ; pas de JSON Schema partageable fixtures/adapters.

### CONTRACT-B — Types TS + JSON Schema validé via AJV existant

Réutilise AJV déjà présent (doctrine) ; duplication type/schema à gouverner par tests de conformité ; pas de nouvelle dépendance.

### CONTRACT-C — Zod (nouvelle dépendance)

Gain DX ; **nouvelle dépendance** ; bundle/compat ; nécessite arbitrage Morris.

**RECOMMANDATION CANDIDATE :** CONTRACT-B + tests conformité types/schemas/fixtures.
**Statut :** CANDIDATE — NOT ADOPTED.

### Contrats candidats pour les 12 objets fonctionnels (noms techniques candidats — NOT ADOPTED)

| Objet fonctionnel | Contrat technique candidat |
|-------------------|----------------------------|
| Execution Intent | `ExecutionIntent` |
| Execution Context | `ExecutionContext` |
| Provider Capability | `ProviderCapabilityDescriptor` |
| Validation Outcome | `ValidationOutcome` |
| Execution Run | `ExecutionRun` |
| Execution State | `ExecutionState` (union 8) |
| External Result | `ExternalResult` |
| Execution Evidence | `ExecutionEvidence` |
| Source Disclosure | `SourceDisclosure` |
| Human Decision Gate | `HumanDecisionGate` |
| Usage Summary | `UsageSummary` |
| Normalized Failure | `NormalizedFailure` |

Aucune implémentation dans ce cycle.

---

## M. États et transitions

### Huit états persistants exacts (ADOPTED FD-02)

`idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled` · `timed_out` · `blocked`

**Aucun** état STATE-B supplémentaire (`created`, `queued`, `validating`, …).

### Transition authority (candidate)

- Reducer / fonctions de transition **pures**.
- Table de transitions explicite (héritée FD/FA).
- Événements transitoires non persistants.
- Nouveau run + nouvelle identité après terminal.
- `blocked` vs `failed` ; `timed_out` vs blocked human gate ; `cancelled` terminal ; late result evidence-only.

### Représentation

| Option | Analyse |
|--------|---------|
| Enum simple | Fragile pour payloads |
| Discriminated union | Alignée TypeScript strict |
| Machine externe | Nouvelle dépendance / astronaut |

**RECOMMANDATION CANDIDATE :** discriminated union + transition functions pures, sans state-machine dependency.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## N. Identité, repository et persistance

### Identités candidates

- `ExecutionRunId`
- `correlationId`
- `providerOperationId`
- Nouvelle identité après terminal
- Champ version/optimistic concurrency **candidat**

### Port

`ExecutionRunRepository` (save/get/list by correlation — surface candidate).

### STORE-A — Memory uniquement

OK D2-D1 ; interdit claim multi-instance / strong durability.

### STORE-B — Staged : memory D2-D1 ; durable adapter requis avant strong runtime verdict

Aligné CAD/FA ; durable **non sélectionné** maintenant.

### STORE-C — Durable immédiat

Prématuré sans cible déploiement / NFR.

Technologies candidates si repo permet : memory · SQLite borné · store externe.
**Aucune** sélection durable dans ce cycle.

**RECOMMANDATION CANDIDATE :** STORE-B.
**Déclarations :** D2-D1 process-local acceptable ; D2-D3 ne peut revendiquer multi-instance/durabilité sans décision durable distincte.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## O. Coordination et modèle async

| Option | Analyse |
|--------|---------|
| **ASYNC-A** sync request/response | Insuffisant Cursor / longs appels |
| **ASYNC-B** in-process Promise + AbortSignal + repository/state | Aligné Next server ; cancel/timeout ; restart limite process |
| **ASYNC-C** queue + worker | Ops/DevOps ; GreenOps ; besoin non prouvé |

**RECOMMANDATION CANDIDATE :** ASYNC-B pour D2-D1/D2-D2 ; queue différée.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## P. Provider Capability Boundary — ports techniques candidats

| Port | Responsabilité | Entrée | Sortie | Cancel/Timeout | Evidence | Server-only | Fixture/real |
|------|----------------|--------|--------|----------------|----------|-------------|--------------|
| `AiExecutionPort` | Lane AI | intent minimisé, limits | result/failure/usage | AbortSignal | redacted | oui | fake+real |
| `GitReadPort` | Lane Git read-only | ref/path allowlisted | read result | timeout | redacted | oui | fixture+real |
| `CursorExecutionPort` | Lane Cursor | sandbox contract, GO | result/proof | AbortSignal | proof pack | oui | fixture ; live UNVERIFIED |
| `SecretSourcePort` | Secrets | secret id | handle opaque | n/a | never value | oui | env/future |
| `ExecutionEventSink` | Events D2-D | technical+functional events | void | n/a | redacted | oui | noop/adapter |
| `ExecutionRunRepository` | Persistance run | run aggregate | run | n/a | n/a | oui | memory→durable |
| `ClockPort` | Temps | — | Instant | n/a | n/a | oui | system/fake |
| `IdSource` | Identités | — | ids | n/a | n/a | oui | uuid/fake |

**Aucun type SDK** dans les ports.
**Statut ports :** CANDIDATES — NOT ADOPTED.

---

## Q. AI Provider

| Option | Analyse |
|--------|---------|
| **AI-A** réutiliser directement `ConversationProvider` | Couplage contrat conversation |
| **AI-B** wrapper D2-D autour platform AI | Réutilise OpenAI/fake/usage ; contract-fit tests requis |
| **AI-C** nouvel adapter indépendant | Duplication ; lock-in risk différent |

**RECOMMANDATION CANDIDATE :** AI-B sous réserve contract-fit tests.
**Déclarations :** aucun modèle hardcodé ; aucune clé dans domaine/D3 ; aucune réponse brute dans events ; aucun appel live CI par défaut.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## R. GitHub Provider

| Option | Analyse |
|--------|---------|
| **GIT-A** `gh` CLI only | Indispo en hosted |
| **GIT-B** REST only | Token/App ; testabilité |
| **GIT-C** port transport-neutral existant (`gh` local ; REST/App hosted) | Aligné baseline `resolveGithubReadTransport` |

**RECOMMANDATION CANDIDATE :** GIT-C derrière wrapper D2-D.
**Contraintes :** read-only strict ; aucune méthode write dans port D2-D ; pas de fallback silencieux ; transport = disclosure technique ; PAT ≠ production par défaut.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## S. Cursor Worker et sandbox

| Option | Analyse |
|--------|---------|
| **CURSOR-A** import direct harness dans Next | Risque FS/child_process/ESM ; client-unsafe |
| **CURSOR-B** process boundary / extract adapter partagé derrière `CursorExecutionPort` | Isolation ; capability gate |
| **CURSOR-C** réécriture indépendante | Coût ; perte preuves harness |

**RECOMMANDATION CANDIDATE :** CURSOR-B **uniquement après** capability verification dédiée.
**Déclaration :** `CURSOR PRODUCT CAPABILITIES — UNVERIFIED`
**Interdits :** import harness dans client bundle ; commande arbitraire browser ; mutation Git distante ; live sans gate Morris ; claim sandbox sécurisée sans preuve.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## T. Secret Source

| Option | Analyse |
|--------|---------|
| **SECRET-A** `process.env` direct partout | Fuite / rotation difficile |
| **SECRET-B** `SecretSourcePort` + env local + manager futur | Réversible |
| **SECRET-C** secret manager immédiat | Techno sans contexte déploiement |

**RECOMMANDATION CANDIDATE :** SECRET-B.
Définir : identité secret · disponibilité · expiration · révocation · rotation · aucune valeur sérialisable · redaction · server-only.
**Statut :** CANDIDATE — NOT ADOPTED.

---

## U. Frontières sécurité

### Trust-boundary (candidate)

```mermaid
flowchart LR
  Client["Client / D3 UI"] -->|DTO only| Facade["Server facade"]
  Facade --> Core["execution-run core"]
  Core --> Ports["Ports"]
  Ports --> Adapters["Adapters server-only"]
  Adapters --> Ext["OpenAI / GitHub / Cursor / FS"]
  Adapters --> Secrets["SecretSource"]
```

| Menace | Acteur | Surface | Mitigation candidate | Preuve | Réserve |
|--------|--------|---------|----------------------|--------|---------|
| Secret leakage | insider/log | events/evidence/D3 | SecretSource + redaction | tests redaction | — |
| Prompt injection | provider/user | AI lane | minimisation + validation sortie | contract-fit | — |
| Malicious provider result | provider | adapters | INVALID_PROVIDER_RESULT ; Evidence authority | tests | — |
| Arbitrary command | attacker | Cursor/tools | deny-by-default ; no browser spawn | policy tests | UNVERIFIED Cursor |
| Sandbox escape | Cursor | FS | allowlist paths ; gate | sandbox tests | UNVERIFIED |
| Protected path | tool | repo FS | pathPolicy | tests | — |
| Git mutation | adapter | GitHub/git | read-only ports | surface tests | — |
| Branch/HEAD drift | Cursor | spawn | gate revalidation | harness pattern | — |
| Result spoofing | late result | state | terminal authority ; evidence-only | tests | — |
| Event leakage | sink | observability | redaction catalogue | tests | R-QA-REV-01/02 |
| Late result | provider | async | ignore state mutate | tests | — |
| Cancellation race | concurrent | AbortSignal | local terminal authoritative | tests | — |
| Unauthorized human gate | system | awaiting_human | Morris-only structural | FA-07 | — |
| Client import adapter | bundler | Next | import-boundary tests | Vitest | — |

---

## V. Erreurs techniques (candidates — NOT ADOPTED)

| Code candidat | Producteur | Normalisateur | Retryable | État | Evidence | D3 message | Redaction |
|---------------|------------|---------------|-----------|------|----------|------------|-----------|
| `VALIDATION_ERROR` | Policy | Evidence | after fix | blocked | yes | normalized | no raw |
| `AUTHENTICATION_ERROR` | Policy/Provider | Evidence | after creds | blocked/failed | yes | normalized | no secret |
| `AUTHORIZATION_ERROR` | Policy/Provider | Evidence | after rights | blocked/failed | yes | normalized | — |
| `PROVIDER_UNAVAILABLE` | Provider | Evidence | new run | failed/blocked | yes | normalized | — |
| `RATE_LIMITED` | Provider | Evidence | deferred bounded | failed/blocked | yes | normalized | — |
| `TIMED_OUT` | State/Provider | Evidence | new run | timed_out | yes | normalized | — |
| `CANCELLED` | State | Evidence | new run | cancelled | yes | normalized | — |
| `SANDBOX_BLOCKED` | Policy | Evidence | after conform | blocked | yes | normalized | — |
| `PROTECTED_PATH` | Policy | Evidence | no if forbid | blocked/failed | yes | normalized | path only |
| `MUTATION_FORBIDDEN` | Policy | Evidence | change intent | blocked | yes | normalized | — |
| `HUMAN_GATE_REQUIRED` | Human Gate | Evidence | after decision | awaiting_human/blocked | yes | gate info | — |
| `INVALID_PROVIDER_RESULT` | Provider | Evidence | new run | failed | yes | normalized | no raw |
| `INTERNAL_NORMALIZED_FAILURE` | Coord | Evidence | limited | failed | yes | normalized | no stack to D3 |

Codes restent **candidats** jusqu'à arbitrage.

---

## W. Evidence, completeness et disclosures

| Concept | Définition candidate |
|---------|----------------------|
| Evidence officielle | Produite uniquement par Evidence Authority |
| Evidence brute redacted | Candidat provider après redaction ; non autoritaire pour success |
| Completeness | complete \| partial — explicite |
| Partiality | Partial **jamais** `succeeded` |
| Source | `fixture` \| `sandbox-real` \| `real` |
| Provider abstraction | Lane + type abstrait ; pas SDK |
| Late evidence | Post-terminal ; n'altère pas l'état |
| Evidence id / digest | Identité + hash contenu redacted |
| Timestamps | ISO validés (lien R-QA-REV-01) |

Frontières : provider result → normalized result → official evidence → D3 projection.

---

## X. Events, observabilité, usage et FinOps

| Option | Analyse |
|--------|---------|
| **EVENT-A** réutiliser catalogue EventSink actuel | Catalogue ≠ D2-D fonctionnel |
| **EVENT-B** port D2-D → adapter EventSink | Aligné REUSE-B |
| **EVENT-C** nouveau service observabilité | Prématuré |

**RECOMMANDATION CANDIDATE :** EVENT-B.

Événements techniques nécessaires pour couvrir le catalogue fonctionnel adopté (intent_validated, execution_started/blocked/cancelled/timed_out/failed/succeeded, external_operation_*, awaiting_human, human_decision_recorded, …).

Champs : correlationId · runId · provider lane · state transition · validation · gate · cancellation · timeout · late result · completeness · source disclosure · usage validé.

**Interdits :** secret · prompt complet · réponse complète · stack brute vers D3 · prix inventé.

---

## Y. Cancellation, timeout, retries et idempotency

- `AbortSignal` pour opérations provider.
- Timeout opérationnel + timeout global **candidats** (durées non inventées en production).
- Cancellation best-effort provider ; **état terminal local autoritatif**.
- Late result → evidence-only.
- Retry seulement erreurs classées retryable ; aucun retry infini.
- Aucun retry structurel après décision Morris sans nouvelle gate.
- Idempotency de commande ; nouveau run après terminal.

---

## Z. R-QA-D2C-01 — défense en profondeur (R-C ADOPTED)

### 1. Frontière D2-D (ce cycle documente ; n'implémente pas)

- Valider **avant** toute lecture de métadonnées.
- Fail-closed.
- Aucun résultat partiel exploitable comme succès.
- Tests adversariaux `null`/`undefined` → NormalizedFailure.

### 2. Correction D2-C (GATE FUTURE séparée)

- Cycle séparé · périmètre borné · avant exposition réelle frontière externe non validée.

| Élément | Statut |
|---------|--------|
| Dépendance D2-D1 | Validation avant metadata |
| Gate correction D2-C | Distincte |
| Preuve | Tests adversariaux + QA |
| **R-QA-D2C-01** | **OPEN NOT LIFTED** |

---

## AA. Frontière D3

| Option | Analyse |
|--------|---------|
| **D3-TECH-A** Server Action couplée runtime | Couplage transport |
| **D3-TECH-B** Route/API maintenant | Figé trop tôt |
| **D3-TECH-C** Facade application transport-neutral | Transport UI ultérieur |

**RECOMMANDATION CANDIDATE :** D3-TECH-C.

### DTO technique provider-independent (candidat)

run id · état · source · progression · completeness · result redacted · failure redacted · blocked reason · human gate · evidence summary · usage validé · réserves · readiness.

**Interdits DTO :** SDK object · secret · raw provider error · command · Git write · provider-specific type.

---

## AB. Double runtime et composition

| Composant | Rôle candidat |
|-----------|---------------|
| `oa/execution-run` | **Core** — state authority unique |
| `vertical-slice-runtime` | Facade/composition server-only optionnelle |
| `execution-contract` | Amont contractuel (confirmed) — **pas** runtime |
| D2-C | Capacité read-only qualification |
| platform/harness | Adapters derrière ports |

### Imports autorisés (candidats)

composition → application → domain ; adapters → ports ; facade → composition.

### Interdits

- State authority dans VS runtime **et** core.
- Duplication du reducer.
- Provider direct vers D3.
- `execution-contract` muté en runtime.
- Deux repositories d'état concurrents.

---

## AC. Déploiement et multi-instance (sans sélection de cible)

| Dimension | Observation / contrainte |
|-----------|--------------------------|
| Processus unique | Baseline actuelle |
| Restart | Memory loss |
| Serverless | Multi-instance hazard |
| Long-running server | Cancel/timeout plus naturels |
| Worker | ASYNC-C — besoin non prouvé |
| Persistence | STORE-B ; durable undecided |
| Locking | Requis si multi-instance |
| Sandbox locality | Cursor FS local |

### Claims autorisés par slice

| Slice | Claims autorisés | Claims interdits |
|-------|------------------|------------------|
| D2-D1 | local/process-only ; fixtures déterministes | multi-instance ; production-ready |
| D2-D2 | adapters réels read-only sous env borné | sandbox secure sans preuve ; Cursor compatible |
| D2-D3 | strong runtime **seulement** avec preuves explicites persistance/worker/sandbox/env | scalable ; RUN READY |

---

## AD. Stratégie de tests (documentaire — aucun test exécuté)

- Unitaires domaine (transitions, invariants).
- Matrice complète transitions.
- Contract schema tests (AJV candidat).
- Fixtures vs adapters conformance.
- Policy deny · redaction · error normalization.
- Timeout · cancellation · late results.
- Partial never succeeded · human gate · source disclosure.
- D3 projection · adversarial R-QA-D2C-01.
- Import-boundary · provider fake · sandbox-real opt-in · live hors CI défaut.

---

## AE. Catalogue de fixtures obligatoires

1. nominal fixture
2. nominal sandbox-real candidat
3. validation failure
4. auth failure
5. provider unavailable
6. rate limit
7. timeout
8. cancellation
9. blocked gate
10. protected path
11. mutation forbidden
12. partial result
13. invalid provider result
14. late result
15. secret redaction
16. source mismatch

Mêmes schemas pour fixtures et adapters réels.

---

## AF. Slicing technique

### D2-D1

**Objectif :** core `execution-run` candidat · contrats · AJV schemas · reducer · policy · errors · evidence/disclosure · memory repo · fixtures.
**Pas** d'intégration fournisseur réelle.
**Sortie :** contrats validables + matrice états.
**Gate :** GO Delivery D2-D1 (futur, non ouvert).
**Claims interdits :** provider integrated · production-ready.

### D2-D2

**Objectif :** AI/Git wrappers · Cursor capability verification · sandbox · SecretSource · EventSink adapter · timeout/cancel · R-QA-D2C-01 defence · read-only.
**Gate :** GO Delivery D2-D2.
**Claims interdits :** Cursor compatible sans preuve · reserve lifted.

### D2-D3

**Objectif :** coordination E2E · sandbox-real · D3 projection · evidence · strong runtime proofs · décision persistance/déploiement **si** nécessaire.
**Gate :** GO Delivery D2-D3.
**Claims interdits :** multi-instance sans décision durable.

### D2-D4

Writes — **hors trajectoire**.

Aucune user story rédigée.

---

## AG. Cartographie de fichiers candidate (NOT ADOPTED)

```text
projects/sfia-studio/app/lib/oa/execution-run/
  domain/
    executionRun.ts
    executionState.ts
    executionTransitions.ts
    executionErrors.ts
    executionEvidence.ts
    executionDisclosure.ts
    executionPolicy.ts
  application/
    executionCoordinator.ts
    executionProjection.ts
  ports/
    executionRunRepository.ts
    aiExecutionPort.ts
    gitReadPort.ts
    cursorExecutionPort.ts
    secretSourcePort.ts
    executionEventSink.ts
    clockPort.ts
    idSource.ts
  infrastructure/
    memoryExecutionRunRepository.ts
    # wrappers platform/harness
  index.ts
```

Noms métier préférés aux préfixes `d2d-*`. Wrappers sous `infrastructure/` ou `platform/*` selon arbitrage.

---

## AH. Compatibilité et migration

| Brique | Contrat actuel | Cible candidate | Wrapper | Rupture | Tests | Rollback | Dette |
|--------|----------------|-----------------|---------|---------|-------|----------|-------|
| ConversationProvider | conversation tools | AiExecutionPort | AI-B | contract-fit | conformance | garder platform | drift |
| GithubReadPort | read tools | GitReadPort D2-D | GIT-C | surface write absente | allowlist | inchangé | transport env |
| EventSink | TechnicalEvent | ExecutionEventSink | EVENT-B | catalogue | schema | noop | dual catalogues |
| Cursor harness | S1 contract | CursorExecutionPort | CURSOR-B | schema dual | capability gate | harness alone | UNVERIFIED |
| execution-contract | T-A4 | amont only | none mutate | — | refuse T-A5 | — | confusion runtime |
| D2-C | qualify read-only | Intake optional | compose | — | unit | — | — |
| vertical-slice-runtime | Create/Get | facade | TECH-RUN-B | no state dual | disclosure | keep VS | double runtime |

---

## AI. FinOps et GreenOps

### Signaux

nombre d'appels · tokens · durée · retries · timeouts · provider · model · bytes · sandbox duration.

**Aucun prix codé en dur.**

### Leviers

budgets configurables · no duplicate call · bounded retries · fixture first · no permanent worker before need · bounded evidence retention · no provider call after cancellation terminale.

---

## AJ. Risques et dette

| Risque | P | I | Mitigation | Preuve | Dette | Slice | Gate |
|--------|---|---|------------|--------|-------|-------|------|
| Architecture astronaut | M | H | Minimal foundation | revue options | overdesign | TA | arbitration |
| Nouveau domaine parallèle | M | H | TECH-RUN-B + mapping FA | imports | dual models | D1 | Delivery |
| Double runtime | H | H | state authority unique | AB | OPS1/harness | D1–D3 | Delivery |
| State authority dupliquée | M | H | Interdit AB | tests | — | D1 | — |
| Provider lock-in | M | H | ports + wrappers | contract-fit | — | D2 | — |
| AJV/types drift | M | M | conformance tests | CI | dual source | D1 | — |
| Memory state loss | H | M | disclosures ; STORE-B | docs | durable later | D1–D3 | durable GO |
| Queue prématurée | M | M | ASYNC-B | ADR | ops | D2 | — |
| CLI unavailable | M | H | GIT-C REST path | probe | auth | D2 | — |
| REST auth leakage | M | H | SecretSource + redaction | tests | — | D2 | — |
| Cursor incompatibility | H | H | capability verification | UNVERIFIED | rewrite | D2 | capability GO |
| Sandbox escape | M | H | allowlist + gate | tests | — | D2–D3 | — |
| Direct harness import | M | H | CURSOR-B boundary | import tests | — | D2 | — |
| Secret leakage | M | H | SECRET-B | redaction | — | D2 | — |
| D3 provider leakage | M | H | D3-TECH-C DTO | projection tests | — | D3 | — |
| Partial-as-success | M | H | Evidence authority | tests | — | D1 | — |
| Late result race | M | H | terminal authority | tests | — | D2 | — |
| Cancellation race | M | H | AbortSignal + local state | tests | — | D2 | — |
| Event inconsistency | M | M | EVENT-B catalogue | schema | — | D2 | — |
| No multi-instance | H | M | claims bornés | disclosures | durable | D3 | — |
| Live tests flaky | M | M | live hors CI | policy | — | D2–D3 | — |
| R-QA-D2C-01 | H | H | R-C two lines | adversarial | OPEN | D1 + D2-C | D2-C GO |
| R-QA-REV-01 | M | M | ISO timestamps | tests | OPEN | D1–D2 | — |
| R-QA-REV-02 | M | M | conserve | docs | OPEN | — | — |

---

## AK. Critères d'acceptation (ce cycle documentaire)

- [x] Plusieurs options par décision structurante
- [x] Runtime owner options comparées (TECH-RUN-A/B/C)
- [x] Package boundary / couches documentées
- [x] Domain sans SDK exigé
- [x] Contrats validables options (CONTRACT-A/B/C)
- [x] Huit états exacts
- [x] Transition authority documentée
- [x] Repository port + STORE-A/B/C
- [x] Async A/B/C
- [x] Provider ports
- [x] AI / Git / Cursor options
- [x] Secrets / sandbox / sécurité
- [x] Errors / evidence / disclosures / events
- [x] Cancellation / timeout / late result
- [x] D2-C defence R-C
- [x] D3 independence
- [x] Test + fixture strategy
- [x] Slicing D2-D1/D2/D3 ; D2-D4 hors
- [x] Aucune implémentation
- [x] Aucune architecture implicitement adoptée
- [x] TA-01…14 NOT DECIDED

---

## AL. Questions ouvertes (INCONNUES)

- Cible de déploiement
- Durabilité / multi-instance
- Choix du durable store
- Technologie de worker
- Auth GitHub hosted (App vs token)
- Secret manager
- Capacités Cursor exactes (**UNVERIFIED**)
- Disponibilité Cursor dans l'environnement cible
- Streaming AI
- Structured output exact
- Provider cancellation guarantees
- Rétention des preuves
- Transport événement / sink observabilité
- SLO (non inventés)
- Budgets FinOps numériques
- Transport D3 (Server Action vs Route vs autre)

---

## AM. ADR candidates (PROPOSED — NOT ADOPTED)

### ADR-TA-01 — Runtime owner / packaging

- **Contexte :** RUNTIME-C fonctionnel ; VS runtime ≠ autorité D2-D aujourd'hui.
- **Problème :** où placer le core d'exécution sans double runtime.
- **Options :** TECH-RUN-A / B / C.
- **Recommandation candidate :** TECH-RUN-B.
- **+ :** alignement RUNTIME-C ; testabilité ; facade optionnelle.
- **− :** nouveau module OA ; discipline imports.
- **Risques :** confusion avec execution-contract / OPS1.
- **Réversibilité :** haute avant Delivery.
- **Dette :** migration composition.
- **Préconditions :** arbitrage Morris TA-01.
- **Gate :** GO ARBITRATION TA.
- **Statut :** PROPOSED — NOT ADOPTED.

### ADR-TA-02 — Contrats / AJV

Options CONTRACT-A/B/C ; reco CONTRACT-B ; PROPOSED — NOT ADOPTED.

### ADR-TA-03 — Persistance staged

Options STORE-A/B/C ; reco STORE-B ; durable undecided ; PROPOSED — NOT ADOPTED.

### ADR-TA-04 — Async in-process

Options ASYNC-A/B/C ; reco ASYNC-B ; queue différée ; PROPOSED — NOT ADOPTED.

### ADR-TA-05 — Provider wrappers

Ports + AI-B / GIT-C / CURSOR-B ; capability Cursor UNVERIFIED ; PROPOSED — NOT ADOPTED.

### ADR-TA-06 — Secrets

SECRET-A/B/C ; reco SECRET-B ; PROPOSED — NOT ADOPTED.

### ADR-TA-07 — Events

EVENT-A/B/C ; reco EVENT-B ; PROPOSED — NOT ADOPTED.

### ADR-TA-08 — D3 transport-neutral facade

D3-TECH-A/B/C ; reco D3-TECH-C ; PROPOSED — NOT ADOPTED.

*(Chaque ADR structurante ci-dessus reste PROPOSED — NOT ADOPTED ; détails opérationnels dans §I–AA et decision pack §AN.)*

---

## AN. Decision pack Morris — D-V3.1-D2D-TA-01…14

> **Statut commun de chaque décision :** `NOT DECIDED — MORRIS ARBITRATION REQUIRED`

### D-V3.1-D2D-TA-01 — Runtime owner et packaging

- **Question :** Qui est l'autorité technique d'exécution D2-D et comment packager ?
- **Options :** TECH-RUN-A / TECH-RUN-B / TECH-RUN-C
- **Recommandation candidate :** TECH-RUN-B
- **Justification :** RUNTIME-C ; VS runtime disclosures agentExecution DISABLED ; évite double state authority
- **Impacts :** nouveau module OA ; facade optionnelle
- **Sécurité :** server composition only
- **Performance :** in-process ; pas de claim SLO
- **FinOps :** pas de service permanent
- **Dette :** migration composition
- **Réversibilité :** haute pré-Delivery
- **Dépendances :** aucune nouvelle npm
- **Réserves :** —
- **Gate suivante :** TA arbitration → backlog D2-D1
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-02 — Découpage domain/application/ports/adapters/server composition

- **Question :** Quelle structure de couches ?
- **Options :** (1) couches §K (2) tout dans vertical-slice-runtime (3) package npm séparé immédiat
- **Recommandation candidate :** couches §K
- **Justification :** domain pur ; ports injectés ; Next hors domaine
- **Impacts / sécu / perf / FinOps / dette / réversibilité :** testabilité ↑ ; bundling risk ↓
- **Dépendances :** —
- **Réserves :** —
- **Gate :** TA arbitration
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-03 — Représentation contrats et validation

- **Options :** CONTRACT-A / B / C
- **Recommandation candidate :** CONTRACT-B (TS + JSON Schema/AJV existant)
- **Justification :** AJV déjà présent ; fixtures/adapters share schemas ; évite Zod sans GO
- **Dette :** dual type/schema gouvernée par tests
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-04 — État, repository et persistance

- **Options :** STORE-A / B / C
- **Recommandation candidate :** STORE-B
- **Justification :** D2-D1 process-local OK ; strong runtime exige durable gate séparée
- **Réserves :** multi-instance claims interdits sans durable
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-05 — Coordination async, cancellation et timeout

- **Options :** ASYNC-A / B / C
- **Recommandation candidate :** ASYNC-B
- **Justification :** AbortSignal ; Cursor longs ; queue non prouvée
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-06 — Provider Capability Boundary et wrappers

- **Question :** Ports + stratégie wrappers vs rewrite
- **Options :** reuse direct / wrappers D2-D / rewrite ciblé
- **Recommandation candidate :** wrappers D2-D (REUSE-B)
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-07 — AI adapter, model/config et contract-fit

- **Options :** AI-A / B / C
- **Recommandation candidate :** AI-B
- **Sécurité :** secrets hors domaine ; no raw in events
- **FinOps :** usage validé ; model configurable
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-08 — GitHub transport, auth et read-only policy

- **Options :** GIT-A / B / C
- **Recommandation candidate :** GIT-C
- **Sécurité :** read-only ; allowlist ; redaction ; PAT ≠ prod défaut
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-09 — Cursor process boundary, sandbox et capability gate

- **Options :** CURSOR-A / B / C
- **Recommandation candidate :** CURSOR-B after capability verification
- **Réserves :** CURSOR PRODUCT CAPABILITIES — UNVERIFIED
- **Gate :** capability verification GO distinct
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-10 — SecretSource et frontières sécurité/redaction

- **Options :** SECRET-A / B / C
- **Recommandation candidate :** SECRET-B
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-11 — Events, evidence, usage et observability adapter

- **Options :** EVENT-A / B / C
- **Recommandation candidate :** EVENT-B
- **Réserves :** R-QA-REV-01/02 timestamps/events
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-12 — D3 projection et transport-neutral server boundary

- **Options :** D3-TECH-A / B / C
- **Recommandation candidate :** D3-TECH-C
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-13 — Test strategy, fixtures et traitement R-QA-D2C-01

- **Question :** Stratégie tests + défense R-C
- **Options :** (1) fixtures-first + adversarial D2-D boundary (2) live-first (3) report correction D2-C only
- **Recommandation candidate :** (1) + gate D2-C séparée
- **Réserves :** R-QA-D2C-01 OPEN NOT LIFTED
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

### D-V3.1-D2D-TA-14 — Slicing D2-D1/D2-D2/D2-D3 et critères de sortie vers backlog

- **Question :** Critères de sortie techniques vers backlog futur
- **Options :** slicing FA-11 tel quel / fusion D2-D1+D2 / walking skeleton dès D2-D1
- **Recommandation candidate :** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire
- **Gate suivante après arbitrage :** GO BACKLOG D2-D1/D2/D3 (distinct)
- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED

---

## AO. Recommandations candidates (CANDIDATE — NOT ADOPTED)

1. **TECH-RUN-B** — core OA `execution-run` ; vertical-slice-runtime facade/composition uniquement.
2. **Domain/application/ports/adapters** — aucun SDK dans domain/application contracts.
3. **CONTRACT-B** — TypeScript + JSON Schema/AJV existant.
4. **Reducer pur + discriminated unions** — aucune state-machine dependency.
5. **STORE-B** — repository port ; memory D2-D1 ; durable gate avant strong runtime.
6. **ASYNC-B** — Promise/AbortSignal in-process ; aucune queue sans besoin prouvé.
7. **Wrappers D2-D** sur capacités platform existantes.
8. **AI-B** — wrapper platform AI + contract-fit tests.
9. **GIT-C** — transport-neutral read-only.
10. **CURSOR-B** — process boundary/extract après capability verification.
11. **SECRET-B** — SecretSourcePort ; env local ; manager futur.
12. **EVENT-B** — port D2-D → EventSink existant.
13. **D3-TECH-C** — facade transport-neutral ; aucun endpoint décidé.
14. **Slicing** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire.

Chaque item : **CANDIDATE — NOT ADOPTED.**

---

## AP. Trajectoire candidate

Après arbitrage TA uniquement :

1. Backlog D2-D1 / D2-D2 / D2-D3 (GO distinct).
2. Cycles Delivery séparés.
3. Correction D2-C séparée si autorisée.
4. Capability verification Cursor.
5. **Aucune** ouverture automatique de D3.

Aucune transition automatique.

---

## AQ. Anti-claims

Ce document **n'autorise pas** et **ne revendique pas** :

- technical architecture adopted
- runtime selected
- AJV strategy adopted
- persistence selected
- multi-instance ready
- Cursor compatible
- sandbox secure
- secret store selected
- provider integrated
- production-ready / RUN READY / scalable / secure
- backlog ready / Delivery ready / D3 ready
- reserve lifted
- Git write enabled / CreateCycle enabled / method promoted

---

## AR. Verdict documentaire

```text
D2-D TECHNICAL ARCHITECTURE COMPLETE LOCALLY —
READY FOR MORRIS ARBITRATION —
ADOPTED CADRAGE / FUNCTIONAL DESIGN / FUNCTIONAL ARCHITECTURE APPLIED —
TECHNICAL BASELINE VERIFIED —
RUNTIME AND PACKAGING OPTIONS COMPARED —
CONTRACT AND VALIDATION OPTIONS COMPARED —
STATE / PERSISTENCE / ASYNC OPTIONS COMPARED —
AI / GIT / CURSOR OPTIONS COMPARED —
SECURITY / SECRET / SANDBOX BOUNDARIES DOCUMENTED —
EVENT / EVIDENCE / USAGE ARCHITECTURE DOCUMENTED —
D3 SERVER BOUNDARY DOCUMENTED —
DOUBLE-RUNTIME RISK TREATED —
TEST STRATEGY DOCUMENTED —
D2-D SLICING DOCUMENTED —
D-V3.1-D2D-TA-01…14 READY FOR MORRIS ARBITRATION —
NO TECHNICAL DECISION ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI —
NO CREATECYCLE —
NO D3 —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION
```


---END DOCUMENT 23---

## Diff complet document 23

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/23-v3-1-d2-d-integration-foundation-technical-architecture.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/23-v3-1-d2-d-integration-foundation-technical-architecture.md
new file mode 100644
index 0000000..9f055c9
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/23-v3-1-d2-d-integration-foundation-technical-architecture.md
@@ -0,0 +1,1188 @@
+# 23 — SFIA Studio V3.1-D2-D Integration Foundation — Architecture technique
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `23-v3-1-d2-d-integration-foundation-technical-architecture.md` |
+| **Date/heure** | 2026-08-03 19:07 CEST (+0200) |
+| **Cycle** | Cycle 6 — Architecture technique |
+| **Profil** | Critical |
+| **Typologie** | DOC — architecture-only |
+| **Branche locale** | `architecture/sfia-studio-v3-1-d2-d-integration-foundation-technical-architecture` |
+| **Base Git** | `main@e273b2afc33445154f63226fdfe8357c75df67f8` |
+| **GO Morris** | `GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D` (2026-08-03 18:54 CEST) |
+| **Documents amont (immutables)** | [20](./20-v3-1-d2-d-integration-foundation-cadrage.md) · [21](./21-v3-1-d2-d-integration-foundation-functional-design.md) · [22](./22-v3-1-d2-d-integration-foundation-functional-architecture.md) |
+| **Précédent structure (non copié)** | [18](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) — structure only ; décisions D2-A/B/C non applicables à D2-D |
+| **CKC** | `method/.../pilots/03-architecture-technique.md` — candidate v0.1.0 — experimental cognitive guidance — **aucune autorité d'exécution** |
+| **Code / tests / config / UI** | **non** |
+| **Statut** | `D2-D TECHNICAL ARCHITECTURE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO BACKLOG OR DELIVERY AUTHORIZED` |
+
+### Légende des marqueurs
+
+| Marqueur | Signification |
+|----------|---------------|
+| **ADOPTED** | Décision Morris déjà adoptée (CAD/FD/FA) |
+| **OBSERVATION** | Fait Git vérifié |
+| **CONTRAINTE** | Borne non négociable dans ce cycle |
+| **HYPOTHÈSE** | À vérifier ; non prouvée |
+| **OPTION** | Alternative comparable |
+| **RECOMMANDATION CANDIDATE** | Proposition Cursor — **NOT ADOPTED** |
+| **ADR CANDIDATE** | ADR PROPOSED — NOT ADOPTED |
+| **DÉCISION TECHNIQUE CANDIDATE** | TA-xx — NOT DECIDED |
+| **INCONNUE** | Ouvert |
+| **RÉSERVE** | Ouverte, non levée |
+| **DETTE** | Coût différé explicite |
+| **GATE FUTURE** | Nécessite GO Morris distinct |
+
+---
+
+## B. Décisions héritées (ADOPTED)
+
+### B.1 D-CAD-01…12 — ADOPTED BY MORRIS (2026-08-03 16:56 CEST)
+
+| ID | Résumé |
+|----|--------|
+| CAD-01 | Strict Minimal Foundation ; walking skeleton réel reporté à D2-D3 |
+| CAD-02 | Contrats D2-D avant Delivery UI D3 ; exploration UX possible après D2-D1 stable |
+| CAD-03 | Ports provider avant couplage SDK ; réutilisation platform/harness = hypothèse jusqu'à validation TA |
+| CAD-04 | Read-only first ; pas de Git write en D2-D1/D2/D3 ; D2-D4 hors trajectoire |
+| CAD-05 | STATE-A extensible (`timed_out`, `blocked`) ; pas de STATE-B complet |
+| CAD-06 | INT-C hybrid contract-first : fixtures puis walking skeleton read-only sandboxed |
+| CAD-07 | Sandbox validée avant Cursor réel ; capacités Cursor produit **UNVERIFIED** |
+| CAD-08 | Secret Provider server-only ; GitHub read-only ; aucune techno secret store sélectionnée |
+| CAD-09 | Events structurés + redaction stricte ; pas de claim RUN-READY/SLO |
+| CAD-10 | R-C défense en profondeur : correction D2-C et frontière D2-D = cycles/gates séparés |
+| CAD-11 | Séquence D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire |
+| CAD-12 | Exploration UX D3 après stabilité D2-D1 ; Delivery UI + strong runtime après D2-D2/D3 |
+
+### B.2 D-FD-01…12 — ADOPTED BY MORRIS (2026-08-03 17:19 CEST)
+
+Douze objets fonctionnels ; huit états persistants exacts ; transitions documentées ; partial ≠ succeeded ; gates humains ; cancellation terminale + late result evidence-only ; sources `fixture`/`sandbox-real`/`real` ; familles d'échec normalisées ; catalogue d'événements ; projection D3 provider-independent ; trois niveaux de readiness.
+
+### B.3 D-FA-01…12 — ADOPTED BY MORRIS (2026-08-03 17:42 CEST)
+
+| Décision clé | Valeur ADOPTED |
+|--------------|----------------|
+| **MOD-B** | Décomposition fonctionnelle capability-centric minimale (pas packages/déploiement) |
+| **Huit capacités** | Intake · Coordination · Validation/Policy · Provider Boundary · State/Human Gate · Evidence/Disclosure · Events/Usage · Fixture Catalogue |
+| **Autorités uniques** | State Authority ; Evidence Authority ; Policy pre-engagement |
+| **Provider Boundary** | Une frontière, trois lanes AI/Git/Cursor |
+| **RUNTIME-C (fonctionnel)** | Une autorité fonctionnelle D2-D ; `vertical-slice-runtime` = option façade future uniquement ; **aucun runtime technique sélectionné** |
+| **REUSE-B** | Principe d'évaluation : évaluer platform/harness derrière frontières ; **aucune compatibilité supposée** |
+| **Slicing** | D2-D1 → D2-D2 → D2-D3 ; **D2-D4 write hors trajectoire** |
+
+### B.4 Réserves transportées — OPEN NOT LIFTED
+
+| ID | Statut |
+|----|--------|
+| R-QA-REV-01 MINOR | OPEN NOT LIFTED |
+| R-QA-REV-02 MINOR | OPEN NOT LIFTED |
+| R-QA-D2C-01 MINOR | OPEN — NOT LIFTED (R-C : deux travaux futurs séparés) |
+
+---
+
+## C. Finalité technique
+
+Construire une architecture technique **minimale**, **provider-independent**, **server-only** et **read-only** permettant de valider les contrats D2-D, puis d'intégrer progressivement AI, GitHub et Cursor **sans** exposer les fournisseurs à D3 et **sans** créer un second runtime concurrent.
+
+Cette finalité est une **contrainte de conception** pour les options ; elle n'adopte aucune stack, aucun package, aucun adapter.
+
+---
+
+## D. Périmètre et hors périmètre
+
+### Périmètre
+
+Architecture · modules candidats · ports · adapters · contrats · validation · état · persistance · async · erreurs · events · secrets · sandbox · tests · slicing · impacts DevOps (analyse seule).
+
+### Hors périmètre
+
+Code · migration · SDK install · endpoints · UI · backlog · Delivery · déploiement · RUN readiness · Git write · CreateCycle · promotion méthode · adoption de décision technique.
+
+---
+
+## E. Baseline Git-authoritative (OBSERVATION)
+
+**Base :** `main@e273b2afc33445154f63226fdfe8357c75df67f8`
+**Preuves :** lecture de `projects/sfia-studio/app/lib/**` et `projects/sfia-studio/harness/src/**` ; `package.json` ; workflows CI.
+
+### E.1 Inventaire synthétique
+
+| Élément | Path | Rôle | Server/client | Persistance | Réutilisation candidate | Écart D2-D | Preuve |
+|---------|------|------|---------------|-------------|-------------------------|------------|--------|
+| OA cycle | `app/lib/oa/cycle/**` | Domaine cycle + D2-A/B/C qualification | Server/composition (`node:crypto`) | Memory | Compatible (qualify read-only) ; extract si durable | Pas d'exécution AI/Git/Cursor | `createCkcQualificationServices` read-only |
+| OA execution-contract | `app/lib/oa/execution-contract/**` | Gouvernance contrat jusqu'à confirmed | Server | Memory | Compatible comme gate amont | Refuse explicitement états T-A5 | `assertNotTa5Injection` / `TA5_STATUS_REFUSED` |
+| OA decision | `app/lib/oa/decision/**` | HumanDecision / Confirmation | Server | Memory | Compatible pour gates humains futurs | Pas d'exécution | T-A3 |
+| OA project | `app/lib/oa/project/**` | Project + LPS | Server | Memory | Compatible | Pas d'exécution | T-A1 |
+| OA execution-attempt | `app/lib/oa/execution-attempt/**` | Tentative T-A5 | Server | Memory | Wrapper candidat | Adapters NoOp/Test only ; **pas** exécuteur réel | Commentaire : foundation does not execute |
+| vertical-slice-runtime | `app/lib/vertical-slice-runtime/**` | Facade Next Create/Get project | Server (`serverGuard`, `"use server"`) | Business = OA memory ; audit noop/memory/sqlite | Wrapper/facade seulement | `agentExecution: "DISABLED"` ; process-local singleton | `disclosures.ts`, `singleton.ts` |
+| vertical-slice-core | `app/lib/vertical-slice-core/**` | Composition locale Project | Server | OA memory + audit | Compatible create/get | `realAgentExecution: "NOT_AVAILABLE"` | `localProjectComposition.ts` |
+| platform AI | `app/lib/platform/ai/**` | ConversationProvider OpenAI + Fake | Server-only (comment) | Aucune | Compatible transport derrière wrapper | Contrat conversation ≠ contrat D2-D ; pas d'evidence OA | `openaiProvider.ts` |
+| platform tools | `app/lib/platform/tools/**` | Tool router deny-by-default | Server | Aucune | Compatible reads | `cursor_*` refusés ; pas runtime D2-D | `toolRouter.ts` |
+| platform repository | `app/lib/platform/repository/**` | Git local + GitHub read | Server (`child_process`/`fs`) | Aucune | Compatible read ports | Read-only ; pas Cursor | `GithubReadPort`, `GhCli` / `Rest` |
+| platform observability | `app/lib/platform/observability/**` | EventSink injectable | Server | Noop défaut | Compatible | Catalogue ≠ events fonctionnels D2-D | `eventSink.ts` |
+| platform security | `app/lib/platform/security/**` | Path/repo policy + redaction | Server | N/A | Compatible | Policy seule | `pathPolicy.ts`, `redaction.ts` |
+| harness ports | `harness/src/ports/**` | Cursor/GPT/Git POC | Node harness | Process/FS | Extract/wrapper | Schémas ≠ OA ; flags live | `CursorExecutorPort` |
+| harness increment-d | `harness/src/increment-d/**` | Sandbox Cursor + GO + proof | Node | FS sandbox/proof | Extract pattern | Non intégré Studio runtime | `runIncrementDSandbox` |
+| harness gate/proof/journal | `harness/src/gate|proof|journal/**` | Gate fail-closed · proof pack · events.jsonl | Node | FS | Extract | Distinct EventSink platform | comments S1 |
+
+### E.2 Dépendances (OBSERVATION)
+
+| Dep | Version déclarée | Note |
+|-----|------------------|------|
+| Next | `^15.3.3` | App Studio |
+| React | `^19.1.0` | UI — hors D2-D TA |
+| TypeScript | `^5.8.3` | Strict |
+| AJV | `^6.15.0` | Déjà via doctrine `AjvSchemaValidationAdapter` Draft-07 |
+| OpenAI SDK | `^6.48.0` | Platform AI |
+
+**CONTRAINTE :** aucune nouvelle dépendance justifiée par défaut. Zod = CONTRACT-C = décision Morris.
+
+### E.3 Observations confirmées (liste GO)
+
+1. **vertical-slice-runtime** — server-only (guard custom) ; compose vertical-slice-core ; CreateProject/GetProject ; audit noop/memory/sqlite ; **pas** autorité D2-D ; process-local.
+2. **oa/cycle** — domaine/application/ports/infra ; `createCkcQualificationServices` read-only ; services mutationnels distincts ; composition in-memory.
+3. **oa/execution-contract** — préparation/confirmation ; in-memory ; refuse T-A5 ; **ne doit pas** devenir runtime D2-D implicite.
+4. **Platform AI** — OpenAI Responses + fake ; config server ; usage dispo ; contrat conversation ≠ D2-D.
+5. **Platform GitHub** — port read-only ; `gh` CLI ou REST ; allowlist ; redaction ; pas de mutation ; transport env-dépendant.
+6. **Platform tools** — deny-by-default ; `cursor_*` refusés ; timeout borné ; events techniques.
+7. **Platform observability** — EventSink injectable ; Noop défaut ; catalogue technique ≠ D2-D fonctionnel.
+8. **Harness Cursor** — fixture/live ; gate avant spawn ; branch/HEAD ancrés ; sandbox/allowlist ; FS + child_process ; capacité produit exacte **UNVERIFIED** ; intégration Next **non prouvée**.
+9. **Deps** — Next 15 / TS strict / Vitest / AJV / OpenAI déjà présents.
+
+### E.4 Signaux double-runtime (OBSERVATION)
+
+| Signal | Emplacements | Implication |
+|--------|--------------|-------------|
+| Cursor | harness Increment D · OPS1 `cursorExecutionAdapter` · OA T-A5 NoOp | Trois histoires d'exécution |
+| AI | platform/ai · harness GPT spikes · OPS1 toolLoop | Pas de spine D2-D unique |
+| Contract | OA ExecutionContract vs harness S1 ExecutionContract | Schémas incompatibles |
+
+### E.5 Multi-instance / client-bundle (OBSERVATION)
+
+- Singleton process-local `vertical-slice-runtime` ; disclosures `LOCAL_PROCESS` / restart may lose state.
+- Imports client-unsafe : `node:crypto`, `child_process`, `fs`, `sqlite`, OpenAI SDK, server actions.
+
+---
+
+## F. Exigences non fonctionnelles
+
+| NFR | Exigence | Raison | Preuve attendue | Slice | Dette si report |
+|-----|----------|--------|-----------------|-------|-----------------|
+| Déterminisme fixtures | Même input → même ValidationOutcome / état | Reproductibilité CI | Tests fixtures | D1 | Flaky CI |
+| Fail-closed | Rejet avant engagement provider | Sécurité / R-QA-D2C-01 | Tests adversariaux | D1–D2 | Fuite partielle |
+| Provider independence | Aucun type SDK vers D3 | FD-11 / FA-08 | Import-boundary tests | D1–D3 | Lock-in |
+| Server-only | Adapters hors client bundle | Secrets / spawn | Boundary tests | D2 | Leak |
+| Minimisation | Prompt/contexte minimisés | RGPD / FinOps | Review + redaction tests | D2–D3 | Coût / fuite |
+| Read-only | Aucune méthode write Git/produit | CAD-04 | Port surface tests | D1–D3 | Mutation |
+| Réversibilité | Choix packagés derrière ports | CKC | Wrappers | Tous | Refactor coûteux |
+| Testabilité | Domaine pur + ports injectés | Delivery future | Vitest unit/contract | D1 | Couplage |
+| Résilience | Timeout/cancel/late result | FD-07 | Tests async | D2 | Races |
+| Cancellation | Best-effort provider + autorité locale | FD-07 | Tests | D2 | État incohérent |
+| Timeout | Opérationnel + global candidats | FD | Tests | D2 | Hang |
+| Late result | Evidence-only post-terminal | FD-07 | Tests | D2–D3 | Spoof success |
+| Multi-instance | Claim interdit sans store durable | OBS | Disclosures | D3 | Claims faux |
+| Persistance | Staged ; durable non sélectionné | STORE-B candidat | ADR | D1–D3 | Perte état |
+| Observabilité | Events redacted + correlation | CAD-09 | Event schema tests | D2 | Blind ops |
+| FinOps | Usage validé ; pas de prix hardcodé | CAD | Usage fields | D2–D3 | Coût opaque |
+| Next/TS/Vitest | Compatibilité stack existante | DevOps fit | CI existante | Tous | Divergence |
+| Pas de métrique inventée | Aucun SLO/latency inventé | Anti-claim CKC | Revue | Tous | — |
+
+---
+
+## G. Principes techniques (CONTRAINTES de conception)
+
+1. Un seul core d'exécution D2-D (autorité d'état unique).
+2. Domaine sans SDK fournisseur.
+3. Ports avant adapters.
+4. Validation avant lecture de métadonnées (R-QA-D2C-01 / R-C).
+5. Résultats discriminés (complete / partial / failure).
+6. État géré par fonctions pures.
+7. Side effects derrière ports.
+8. Secrets hors domaine.
+9. No provider object vers D3.
+10. No Git write.
+11. No shell arbitraire.
+12. Fixtures conformes aux mêmes contrats que adapters réels.
+13. Aucun succès sans preuve complète.
+14. Aucune technologie durable sans besoin prouvé.
+15. Pas de nouvelle dépendance sans gain démontré + arbitrage Morris.
+
+---
+
+## H. Inventaire et classification de réutilisation (REUSE-B)
+
+| Brique | Classification | Note |
+|--------|----------------|------|
+| `oa/cycle` | Compatible (qualify) / Extract si durable | Read-only D2-C composition |
+| `oa/execution-contract` | Compatible (gate amont) | **Incompatible** comme runtime ; refuse T-A5 |
+| `vertical-slice-runtime` | Compatible derrière wrapper/facade | **Incompatible** comme state authority D2-D |
+| platform AI | Compatible derrière wrapper | Contract-fit **UNVERIFIED** |
+| platform GitHub | Compatible derrière wrapper | Transports env-dépendants |
+| platform tools | Compatible (reads) | Pas Cursor exec |
+| platform observability | Compatible derrière port D2-D | Catalogue différent |
+| harness Cursor | Extract / wrapper | Capacité produit **UNVERIFIED** ; intégration Next **UNVERIFIED** |
+
+**REUSE-B respecté :** aucune compatibilité supposée ; décisions de réutilisation = TA candidates.
+
+---
+
+## I. Options runtime et packaging
+
+### TECH-RUN-A — `vertical-slice-runtime` = autorité technique D2-D
+
+| Critère | Analyse |
+|---------|---------|
+| Alignement RUNTIME-C | Faible — VS runtime = Create/Get project, agentExecution DISABLED |
+| Double runtime | Risque élevé d'étendre un host incompatible |
+| Next coupling | Fort |
+| Testabilité | Faible (Server Actions / singleton) |
+| Persistance | Process-local |
+| Réversibilité | Faible après Delivery |
+
+### TECH-RUN-B — Nouveau core OA sémantique frère (`oa/execution-run`) + VS runtime = facade/composition server-only
+
+| Critère | Analyse |
+|---------|---------|
+| Alignement RUNTIME-C | Fort — une autorité core ; facade optionnelle |
+| Double runtime | Mitigé si state authority **uniquement** dans core |
+| Imports | Domaine pur testable |
+| Next | Composition root server seule |
+| Migration | Progressive |
+| Dette | Nouveau module OA |
+| Réversibilité | Haute avant Delivery |
+
+### TECH-RUN-C — Service/package autonome séparé de l'app
+
+| Critère | Analyse |
+|---------|---------|
+| Cohésion | Séparation nette |
+| Ops | Complexité déploiement prématurée |
+| Double runtime | Possible si Studio garde un second path |
+| GreenOps | Worker/service permanent sans besoin prouvé |
+
+**RECOMMANDATION CANDIDATE :** TECH-RUN-B.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## J. Architecture technique cible candidate (NOT ADOPTED)
+
+```mermaid
+flowchart TB
+  D3["D3 consumer futur
+(projection only)"]
+  SF["Server facade
+(transport-neutral)"]
+  IN["Execution Intake"]
+  CO["Coordination"]
+  VP["Validation & Policy"]
+  SA["State Authority
+(unique)"]
+  EV["Evidence / Disclosure"]
+  EU["Event / Usage"]
+  PB["Provider Boundary"]
+  AI["AI adapter"]
+  GIT["Git adapter"]
+  CUR["Cursor adapter"]
+  SEC["Secret Source"]
+  SBX["Sandbox"]
+  REPO["ExecutionRunRepository"]
+  D2C["D2-C Qualification Core
+(read-only)"]
+
+  D3 --> SF
+  SF --> IN
+  IN --> CO
+  CO --> VP
+  CO --> SA
+  CO --> PB
+  VP --> SA
+  PB --> AI
+  PB --> GIT
+  PB --> CUR
+  AI --> SEC
+  GIT --> SEC
+  CUR --> SEC
+  CUR --> SBX
+  SA --> REPO
+  SA --> EV
+  CO --> EU
+  EV --> EU
+  IN -.-> D2C
+
+  classDef forbid fill:#fee,stroke:#c00
+```
+
+### Dépendances autorisées (candidates)
+
+- D3 → Server facade → Intake/Coordination uniquement (read projection).
+- Coordination → Policy → State Authority.
+- Providers → ports uniquement ; résultats vers State/Evidence, jamais vers D3.
+
+### Dépendances interdites
+
+- D3 → SDK / Secret / Cursor spawn / Git write.
+- Provider → State Authority mutateur direct.
+- `vertical-slice-runtime` et `execution-run` comme **deux** state authorities.
+- `execution-contract` muté en runtime d'exécution.
+
+---
+
+## K. Découpage en couches (RECOMMANDATION CANDIDATE)
+
+| Couche | Contenu | Interdits |
+|--------|---------|-----------|
+| **1. Domain** | objets, états, transitions, erreurs, disclosures, evidence, invariants | Next/Node/SDK |
+| **2. Application** | coordination, state authority, policy, cancellation, human gates | SDK types |
+| **3. Ports** | repositories, AI, Git, Cursor, secret, event sink, clock, id | Implémentations |
+| **4. Adapters** | memory, AI wrapper, GitHub wrapper, Cursor process, env secrets, event sink | Domaine pollué |
+| **5. Server composition** | composition root | Domaine dans client bundle ; transport D3 figé |
+
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## L. Contrats et validation runtime
+
+### CONTRACT-A — Types TS + guards manuels
+
+Simple ; risque de drift ; pas de JSON Schema partageable fixtures/adapters.
+
+### CONTRACT-B — Types TS + JSON Schema validé via AJV existant
+
+Réutilise AJV déjà présent (doctrine) ; duplication type/schema à gouverner par tests de conformité ; pas de nouvelle dépendance.
+
+### CONTRACT-C — Zod (nouvelle dépendance)
+
+Gain DX ; **nouvelle dépendance** ; bundle/compat ; nécessite arbitrage Morris.
+
+**RECOMMANDATION CANDIDATE :** CONTRACT-B + tests conformité types/schemas/fixtures.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+### Contrats candidats pour les 12 objets fonctionnels (noms techniques candidats — NOT ADOPTED)
+
+| Objet fonctionnel | Contrat technique candidat |
+|-------------------|----------------------------|
+| Execution Intent | `ExecutionIntent` |
+| Execution Context | `ExecutionContext` |
+| Provider Capability | `ProviderCapabilityDescriptor` |
+| Validation Outcome | `ValidationOutcome` |
+| Execution Run | `ExecutionRun` |
+| Execution State | `ExecutionState` (union 8) |
+| External Result | `ExternalResult` |
+| Execution Evidence | `ExecutionEvidence` |
+| Source Disclosure | `SourceDisclosure` |
+| Human Decision Gate | `HumanDecisionGate` |
+| Usage Summary | `UsageSummary` |
+| Normalized Failure | `NormalizedFailure` |
+
+Aucune implémentation dans ce cycle.
+
+---
+
+## M. États et transitions
+
+### Huit états persistants exacts (ADOPTED FD-02)
+
+`idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled` · `timed_out` · `blocked`
+
+**Aucun** état STATE-B supplémentaire (`created`, `queued`, `validating`, …).
+
+### Transition authority (candidate)
+
+- Reducer / fonctions de transition **pures**.
+- Table de transitions explicite (héritée FD/FA).
+- Événements transitoires non persistants.
+- Nouveau run + nouvelle identité après terminal.
+- `blocked` vs `failed` ; `timed_out` vs blocked human gate ; `cancelled` terminal ; late result evidence-only.
+
+### Représentation
+
+| Option | Analyse |
+|--------|---------|
+| Enum simple | Fragile pour payloads |
+| Discriminated union | Alignée TypeScript strict |
+| Machine externe | Nouvelle dépendance / astronaut |
+
+**RECOMMANDATION CANDIDATE :** discriminated union + transition functions pures, sans state-machine dependency.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## N. Identité, repository et persistance
+
+### Identités candidates
+
+- `ExecutionRunId`
+- `correlationId`
+- `providerOperationId`
+- Nouvelle identité après terminal
+- Champ version/optimistic concurrency **candidat**
+
+### Port
+
+`ExecutionRunRepository` (save/get/list by correlation — surface candidate).
+
+### STORE-A — Memory uniquement
+
+OK D2-D1 ; interdit claim multi-instance / strong durability.
+
+### STORE-B — Staged : memory D2-D1 ; durable adapter requis avant strong runtime verdict
+
+Aligné CAD/FA ; durable **non sélectionné** maintenant.
+
+### STORE-C — Durable immédiat
+
+Prématuré sans cible déploiement / NFR.
+
+Technologies candidates si repo permet : memory · SQLite borné · store externe.
+**Aucune** sélection durable dans ce cycle.
+
+**RECOMMANDATION CANDIDATE :** STORE-B.
+**Déclarations :** D2-D1 process-local acceptable ; D2-D3 ne peut revendiquer multi-instance/durabilité sans décision durable distincte.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## O. Coordination et modèle async
+
+| Option | Analyse |
+|--------|---------|
+| **ASYNC-A** sync request/response | Insuffisant Cursor / longs appels |
+| **ASYNC-B** in-process Promise + AbortSignal + repository/state | Aligné Next server ; cancel/timeout ; restart limite process |
+| **ASYNC-C** queue + worker | Ops/DevOps ; GreenOps ; besoin non prouvé |
+
+**RECOMMANDATION CANDIDATE :** ASYNC-B pour D2-D1/D2-D2 ; queue différée.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## P. Provider Capability Boundary — ports techniques candidats
+
+| Port | Responsabilité | Entrée | Sortie | Cancel/Timeout | Evidence | Server-only | Fixture/real |
+|------|----------------|--------|--------|----------------|----------|-------------|--------------|
+| `AiExecutionPort` | Lane AI | intent minimisé, limits | result/failure/usage | AbortSignal | redacted | oui | fake+real |
+| `GitReadPort` | Lane Git read-only | ref/path allowlisted | read result | timeout | redacted | oui | fixture+real |
+| `CursorExecutionPort` | Lane Cursor | sandbox contract, GO | result/proof | AbortSignal | proof pack | oui | fixture ; live UNVERIFIED |
+| `SecretSourcePort` | Secrets | secret id | handle opaque | n/a | never value | oui | env/future |
+| `ExecutionEventSink` | Events D2-D | technical+functional events | void | n/a | redacted | oui | noop/adapter |
+| `ExecutionRunRepository` | Persistance run | run aggregate | run | n/a | n/a | oui | memory→durable |
+| `ClockPort` | Temps | — | Instant | n/a | n/a | oui | system/fake |
+| `IdSource` | Identités | — | ids | n/a | n/a | oui | uuid/fake |
+
+**Aucun type SDK** dans les ports.
+**Statut ports :** CANDIDATES — NOT ADOPTED.
+
+---
+
+## Q. AI Provider
+
+| Option | Analyse |
+|--------|---------|
+| **AI-A** réutiliser directement `ConversationProvider` | Couplage contrat conversation |
+| **AI-B** wrapper D2-D autour platform AI | Réutilise OpenAI/fake/usage ; contract-fit tests requis |
+| **AI-C** nouvel adapter indépendant | Duplication ; lock-in risk différent |
+
+**RECOMMANDATION CANDIDATE :** AI-B sous réserve contract-fit tests.
+**Déclarations :** aucun modèle hardcodé ; aucune clé dans domaine/D3 ; aucune réponse brute dans events ; aucun appel live CI par défaut.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## R. GitHub Provider
+
+| Option | Analyse |
+|--------|---------|
+| **GIT-A** `gh` CLI only | Indispo en hosted |
+| **GIT-B** REST only | Token/App ; testabilité |
+| **GIT-C** port transport-neutral existant (`gh` local ; REST/App hosted) | Aligné baseline `resolveGithubReadTransport` |
+
+**RECOMMANDATION CANDIDATE :** GIT-C derrière wrapper D2-D.
+**Contraintes :** read-only strict ; aucune méthode write dans port D2-D ; pas de fallback silencieux ; transport = disclosure technique ; PAT ≠ production par défaut.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## S. Cursor Worker et sandbox
+
+| Option | Analyse |
+|--------|---------|
+| **CURSOR-A** import direct harness dans Next | Risque FS/child_process/ESM ; client-unsafe |
+| **CURSOR-B** process boundary / extract adapter partagé derrière `CursorExecutionPort` | Isolation ; capability gate |
+| **CURSOR-C** réécriture indépendante | Coût ; perte preuves harness |
+
+**RECOMMANDATION CANDIDATE :** CURSOR-B **uniquement après** capability verification dédiée.
+**Déclaration :** `CURSOR PRODUCT CAPABILITIES — UNVERIFIED`
+**Interdits :** import harness dans client bundle ; commande arbitraire browser ; mutation Git distante ; live sans gate Morris ; claim sandbox sécurisée sans preuve.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## T. Secret Source
+
+| Option | Analyse |
+|--------|---------|
+| **SECRET-A** `process.env` direct partout | Fuite / rotation difficile |
+| **SECRET-B** `SecretSourcePort` + env local + manager futur | Réversible |
+| **SECRET-C** secret manager immédiat | Techno sans contexte déploiement |
+
+**RECOMMANDATION CANDIDATE :** SECRET-B.
+Définir : identité secret · disponibilité · expiration · révocation · rotation · aucune valeur sérialisable · redaction · server-only.
+**Statut :** CANDIDATE — NOT ADOPTED.
+
+---
+
+## U. Frontières sécurité
+
+### Trust-boundary (candidate)
+
+```mermaid
+flowchart LR
+  Client["Client / D3 UI"] -->|DTO only| Facade["Server facade"]
+  Facade --> Core["execution-run core"]
+  Core --> Ports["Ports"]
+  Ports --> Adapters["Adapters server-only"]
+  Adapters --> Ext["OpenAI / GitHub / Cursor / FS"]
+  Adapters --> Secrets["SecretSource"]
+```
+
+| Menace | Acteur | Surface | Mitigation candidate | Preuve | Réserve |
+|--------|--------|---------|----------------------|--------|---------|
+| Secret leakage | insider/log | events/evidence/D3 | SecretSource + redaction | tests redaction | — |
+| Prompt injection | provider/user | AI lane | minimisation + validation sortie | contract-fit | — |
+| Malicious provider result | provider | adapters | INVALID_PROVIDER_RESULT ; Evidence authority | tests | — |
+| Arbitrary command | attacker | Cursor/tools | deny-by-default ; no browser spawn | policy tests | UNVERIFIED Cursor |
+| Sandbox escape | Cursor | FS | allowlist paths ; gate | sandbox tests | UNVERIFIED |
+| Protected path | tool | repo FS | pathPolicy | tests | — |
+| Git mutation | adapter | GitHub/git | read-only ports | surface tests | — |
+| Branch/HEAD drift | Cursor | spawn | gate revalidation | harness pattern | — |
+| Result spoofing | late result | state | terminal authority ; evidence-only | tests | — |
+| Event leakage | sink | observability | redaction catalogue | tests | R-QA-REV-01/02 |
+| Late result | provider | async | ignore state mutate | tests | — |
+| Cancellation race | concurrent | AbortSignal | local terminal authoritative | tests | — |
+| Unauthorized human gate | system | awaiting_human | Morris-only structural | FA-07 | — |
+| Client import adapter | bundler | Next | import-boundary tests | Vitest | — |
+
+---
+
+## V. Erreurs techniques (candidates — NOT ADOPTED)
+
+| Code candidat | Producteur | Normalisateur | Retryable | État | Evidence | D3 message | Redaction |
+|---------------|------------|---------------|-----------|------|----------|------------|-----------|
+| `VALIDATION_ERROR` | Policy | Evidence | after fix | blocked | yes | normalized | no raw |
+| `AUTHENTICATION_ERROR` | Policy/Provider | Evidence | after creds | blocked/failed | yes | normalized | no secret |
+| `AUTHORIZATION_ERROR` | Policy/Provider | Evidence | after rights | blocked/failed | yes | normalized | — |
+| `PROVIDER_UNAVAILABLE` | Provider | Evidence | new run | failed/blocked | yes | normalized | — |
+| `RATE_LIMITED` | Provider | Evidence | deferred bounded | failed/blocked | yes | normalized | — |
+| `TIMED_OUT` | State/Provider | Evidence | new run | timed_out | yes | normalized | — |
+| `CANCELLED` | State | Evidence | new run | cancelled | yes | normalized | — |
+| `SANDBOX_BLOCKED` | Policy | Evidence | after conform | blocked | yes | normalized | — |
+| `PROTECTED_PATH` | Policy | Evidence | no if forbid | blocked/failed | yes | normalized | path only |
+| `MUTATION_FORBIDDEN` | Policy | Evidence | change intent | blocked | yes | normalized | — |
+| `HUMAN_GATE_REQUIRED` | Human Gate | Evidence | after decision | awaiting_human/blocked | yes | gate info | — |
+| `INVALID_PROVIDER_RESULT` | Provider | Evidence | new run | failed | yes | normalized | no raw |
+| `INTERNAL_NORMALIZED_FAILURE` | Coord | Evidence | limited | failed | yes | normalized | no stack to D3 |
+
+Codes restent **candidats** jusqu'à arbitrage.
+
+---
+
+## W. Evidence, completeness et disclosures
+
+| Concept | Définition candidate |
+|---------|----------------------|
+| Evidence officielle | Produite uniquement par Evidence Authority |
+| Evidence brute redacted | Candidat provider après redaction ; non autoritaire pour success |
+| Completeness | complete \| partial — explicite |
+| Partiality | Partial **jamais** `succeeded` |
+| Source | `fixture` \| `sandbox-real` \| `real` |
+| Provider abstraction | Lane + type abstrait ; pas SDK |
+| Late evidence | Post-terminal ; n'altère pas l'état |
+| Evidence id / digest | Identité + hash contenu redacted |
+| Timestamps | ISO validés (lien R-QA-REV-01) |
+
+Frontières : provider result → normalized result → official evidence → D3 projection.
+
+---
+
+## X. Events, observabilité, usage et FinOps
+
+| Option | Analyse |
+|--------|---------|
+| **EVENT-A** réutiliser catalogue EventSink actuel | Catalogue ≠ D2-D fonctionnel |
+| **EVENT-B** port D2-D → adapter EventSink | Aligné REUSE-B |
+| **EVENT-C** nouveau service observabilité | Prématuré |
+
+**RECOMMANDATION CANDIDATE :** EVENT-B.
+
+Événements techniques nécessaires pour couvrir le catalogue fonctionnel adopté (intent_validated, execution_started/blocked/cancelled/timed_out/failed/succeeded, external_operation_*, awaiting_human, human_decision_recorded, …).
+
+Champs : correlationId · runId · provider lane · state transition · validation · gate · cancellation · timeout · late result · completeness · source disclosure · usage validé.
+
+**Interdits :** secret · prompt complet · réponse complète · stack brute vers D3 · prix inventé.
+
+---
+
+## Y. Cancellation, timeout, retries et idempotency
+
+- `AbortSignal` pour opérations provider.
+- Timeout opérationnel + timeout global **candidats** (durées non inventées en production).
+- Cancellation best-effort provider ; **état terminal local autoritatif**.
+- Late result → evidence-only.
+- Retry seulement erreurs classées retryable ; aucun retry infini.
+- Aucun retry structurel après décision Morris sans nouvelle gate.
+- Idempotency de commande ; nouveau run après terminal.
+
+---
+
+## Z. R-QA-D2C-01 — défense en profondeur (R-C ADOPTED)
+
+### 1. Frontière D2-D (ce cycle documente ; n'implémente pas)
+
+- Valider **avant** toute lecture de métadonnées.
+- Fail-closed.
+- Aucun résultat partiel exploitable comme succès.
+- Tests adversariaux `null`/`undefined` → NormalizedFailure.
+
+### 2. Correction D2-C (GATE FUTURE séparée)
+
+- Cycle séparé · périmètre borné · avant exposition réelle frontière externe non validée.
+
+| Élément | Statut |
+|---------|--------|
+| Dépendance D2-D1 | Validation avant metadata |
+| Gate correction D2-C | Distincte |
+| Preuve | Tests adversariaux + QA |
+| **R-QA-D2C-01** | **OPEN NOT LIFTED** |
+
+---
+
+## AA. Frontière D3
+
+| Option | Analyse |
+|--------|---------|
+| **D3-TECH-A** Server Action couplée runtime | Couplage transport |
+| **D3-TECH-B** Route/API maintenant | Figé trop tôt |
+| **D3-TECH-C** Facade application transport-neutral | Transport UI ultérieur |
+
+**RECOMMANDATION CANDIDATE :** D3-TECH-C.
+
+### DTO technique provider-independent (candidat)
+
+run id · état · source · progression · completeness · result redacted · failure redacted · blocked reason · human gate · evidence summary · usage validé · réserves · readiness.
+
+**Interdits DTO :** SDK object · secret · raw provider error · command · Git write · provider-specific type.
+
+---
+
+## AB. Double runtime et composition
+
+| Composant | Rôle candidat |
+|-----------|---------------|
+| `oa/execution-run` | **Core** — state authority unique |
+| `vertical-slice-runtime` | Facade/composition server-only optionnelle |
+| `execution-contract` | Amont contractuel (confirmed) — **pas** runtime |
+| D2-C | Capacité read-only qualification |
+| platform/harness | Adapters derrière ports |
+
+### Imports autorisés (candidats)
+
+composition → application → domain ; adapters → ports ; facade → composition.
+
+### Interdits
+
+- State authority dans VS runtime **et** core.
+- Duplication du reducer.
+- Provider direct vers D3.
+- `execution-contract` muté en runtime.
+- Deux repositories d'état concurrents.
+
+---
+
+## AC. Déploiement et multi-instance (sans sélection de cible)
+
+| Dimension | Observation / contrainte |
+|-----------|--------------------------|
+| Processus unique | Baseline actuelle |
+| Restart | Memory loss |
+| Serverless | Multi-instance hazard |
+| Long-running server | Cancel/timeout plus naturels |
+| Worker | ASYNC-C — besoin non prouvé |
+| Persistence | STORE-B ; durable undecided |
+| Locking | Requis si multi-instance |
+| Sandbox locality | Cursor FS local |
+
+### Claims autorisés par slice
+
+| Slice | Claims autorisés | Claims interdits |
+|-------|------------------|------------------|
+| D2-D1 | local/process-only ; fixtures déterministes | multi-instance ; production-ready |
+| D2-D2 | adapters réels read-only sous env borné | sandbox secure sans preuve ; Cursor compatible |
+| D2-D3 | strong runtime **seulement** avec preuves explicites persistance/worker/sandbox/env | scalable ; RUN READY |
+
+---
+
+## AD. Stratégie de tests (documentaire — aucun test exécuté)
+
+- Unitaires domaine (transitions, invariants).
+- Matrice complète transitions.
+- Contract schema tests (AJV candidat).
+- Fixtures vs adapters conformance.
+- Policy deny · redaction · error normalization.
+- Timeout · cancellation · late results.
+- Partial never succeeded · human gate · source disclosure.
+- D3 projection · adversarial R-QA-D2C-01.
+- Import-boundary · provider fake · sandbox-real opt-in · live hors CI défaut.
+
+---
+
+## AE. Catalogue de fixtures obligatoires
+
+1. nominal fixture
+2. nominal sandbox-real candidat
+3. validation failure
+4. auth failure
+5. provider unavailable
+6. rate limit
+7. timeout
+8. cancellation
+9. blocked gate
+10. protected path
+11. mutation forbidden
+12. partial result
+13. invalid provider result
+14. late result
+15. secret redaction
+16. source mismatch
+
+Mêmes schemas pour fixtures et adapters réels.
+
+---
+
+## AF. Slicing technique
+
+### D2-D1
+
+**Objectif :** core `execution-run` candidat · contrats · AJV schemas · reducer · policy · errors · evidence/disclosure · memory repo · fixtures.
+**Pas** d'intégration fournisseur réelle.
+**Sortie :** contrats validables + matrice états.
+**Gate :** GO Delivery D2-D1 (futur, non ouvert).
+**Claims interdits :** provider integrated · production-ready.
+
+### D2-D2
+
+**Objectif :** AI/Git wrappers · Cursor capability verification · sandbox · SecretSource · EventSink adapter · timeout/cancel · R-QA-D2C-01 defence · read-only.
+**Gate :** GO Delivery D2-D2.
+**Claims interdits :** Cursor compatible sans preuve · reserve lifted.
+
+### D2-D3
+
+**Objectif :** coordination E2E · sandbox-real · D3 projection · evidence · strong runtime proofs · décision persistance/déploiement **si** nécessaire.
+**Gate :** GO Delivery D2-D3.
+**Claims interdits :** multi-instance sans décision durable.
+
+### D2-D4
+
+Writes — **hors trajectoire**.
+
+Aucune user story rédigée.
+
+---
+
+## AG. Cartographie de fichiers candidate (NOT ADOPTED)
+
+```text
+projects/sfia-studio/app/lib/oa/execution-run/
+  domain/
+    executionRun.ts
+    executionState.ts
+    executionTransitions.ts
+    executionErrors.ts
+    executionEvidence.ts
+    executionDisclosure.ts
+    executionPolicy.ts
+  application/
+    executionCoordinator.ts
+    executionProjection.ts
+  ports/
+    executionRunRepository.ts
+    aiExecutionPort.ts
+    gitReadPort.ts
+    cursorExecutionPort.ts
+    secretSourcePort.ts
+    executionEventSink.ts
+    clockPort.ts
+    idSource.ts
+  infrastructure/
+    memoryExecutionRunRepository.ts
+    # wrappers platform/harness
+  index.ts
+```
+
+Noms métier préférés aux préfixes `d2d-*`. Wrappers sous `infrastructure/` ou `platform/*` selon arbitrage.
+
+---
+
+## AH. Compatibilité et migration
+
+| Brique | Contrat actuel | Cible candidate | Wrapper | Rupture | Tests | Rollback | Dette |
+|--------|----------------|-----------------|---------|---------|-------|----------|-------|
+| ConversationProvider | conversation tools | AiExecutionPort | AI-B | contract-fit | conformance | garder platform | drift |
+| GithubReadPort | read tools | GitReadPort D2-D | GIT-C | surface write absente | allowlist | inchangé | transport env |
+| EventSink | TechnicalEvent | ExecutionEventSink | EVENT-B | catalogue | schema | noop | dual catalogues |
+| Cursor harness | S1 contract | CursorExecutionPort | CURSOR-B | schema dual | capability gate | harness alone | UNVERIFIED |
+| execution-contract | T-A4 | amont only | none mutate | — | refuse T-A5 | — | confusion runtime |
+| D2-C | qualify read-only | Intake optional | compose | — | unit | — | — |
+| vertical-slice-runtime | Create/Get | facade | TECH-RUN-B | no state dual | disclosure | keep VS | double runtime |
+
+---
+
+## AI. FinOps et GreenOps
+
+### Signaux
+
+nombre d'appels · tokens · durée · retries · timeouts · provider · model · bytes · sandbox duration.
+
+**Aucun prix codé en dur.**
+
+### Leviers
+
+budgets configurables · no duplicate call · bounded retries · fixture first · no permanent worker before need · bounded evidence retention · no provider call after cancellation terminale.
+
+---
+
+## AJ. Risques et dette
+
+| Risque | P | I | Mitigation | Preuve | Dette | Slice | Gate |
+|--------|---|---|------------|--------|-------|-------|------|
+| Architecture astronaut | M | H | Minimal foundation | revue options | overdesign | TA | arbitration |
+| Nouveau domaine parallèle | M | H | TECH-RUN-B + mapping FA | imports | dual models | D1 | Delivery |
+| Double runtime | H | H | state authority unique | AB | OPS1/harness | D1–D3 | Delivery |
+| State authority dupliquée | M | H | Interdit AB | tests | — | D1 | — |
+| Provider lock-in | M | H | ports + wrappers | contract-fit | — | D2 | — |
+| AJV/types drift | M | M | conformance tests | CI | dual source | D1 | — |
+| Memory state loss | H | M | disclosures ; STORE-B | docs | durable later | D1–D3 | durable GO |
+| Queue prématurée | M | M | ASYNC-B | ADR | ops | D2 | — |
+| CLI unavailable | M | H | GIT-C REST path | probe | auth | D2 | — |
+| REST auth leakage | M | H | SecretSource + redaction | tests | — | D2 | — |
+| Cursor incompatibility | H | H | capability verification | UNVERIFIED | rewrite | D2 | capability GO |
+| Sandbox escape | M | H | allowlist + gate | tests | — | D2–D3 | — |
+| Direct harness import | M | H | CURSOR-B boundary | import tests | — | D2 | — |
+| Secret leakage | M | H | SECRET-B | redaction | — | D2 | — |
+| D3 provider leakage | M | H | D3-TECH-C DTO | projection tests | — | D3 | — |
+| Partial-as-success | M | H | Evidence authority | tests | — | D1 | — |
+| Late result race | M | H | terminal authority | tests | — | D2 | — |
+| Cancellation race | M | H | AbortSignal + local state | tests | — | D2 | — |
+| Event inconsistency | M | M | EVENT-B catalogue | schema | — | D2 | — |
+| No multi-instance | H | M | claims bornés | disclosures | durable | D3 | — |
+| Live tests flaky | M | M | live hors CI | policy | — | D2–D3 | — |
+| R-QA-D2C-01 | H | H | R-C two lines | adversarial | OPEN | D1 + D2-C | D2-C GO |
+| R-QA-REV-01 | M | M | ISO timestamps | tests | OPEN | D1–D2 | — |
+| R-QA-REV-02 | M | M | conserve | docs | OPEN | — | — |
+
+---
+
+## AK. Critères d'acceptation (ce cycle documentaire)
+
+- [x] Plusieurs options par décision structurante
+- [x] Runtime owner options comparées (TECH-RUN-A/B/C)
+- [x] Package boundary / couches documentées
+- [x] Domain sans SDK exigé
+- [x] Contrats validables options (CONTRACT-A/B/C)
+- [x] Huit états exacts
+- [x] Transition authority documentée
+- [x] Repository port + STORE-A/B/C
+- [x] Async A/B/C
+- [x] Provider ports
+- [x] AI / Git / Cursor options
+- [x] Secrets / sandbox / sécurité
+- [x] Errors / evidence / disclosures / events
+- [x] Cancellation / timeout / late result
+- [x] D2-C defence R-C
+- [x] D3 independence
+- [x] Test + fixture strategy
+- [x] Slicing D2-D1/D2/D3 ; D2-D4 hors
+- [x] Aucune implémentation
+- [x] Aucune architecture implicitement adoptée
+- [x] TA-01…14 NOT DECIDED
+
+---
+
+## AL. Questions ouvertes (INCONNUES)
+
+- Cible de déploiement
+- Durabilité / multi-instance
+- Choix du durable store
+- Technologie de worker
+- Auth GitHub hosted (App vs token)
+- Secret manager
+- Capacités Cursor exactes (**UNVERIFIED**)
+- Disponibilité Cursor dans l'environnement cible
+- Streaming AI
+- Structured output exact
+- Provider cancellation guarantees
+- Rétention des preuves
+- Transport événement / sink observabilité
+- SLO (non inventés)
+- Budgets FinOps numériques
+- Transport D3 (Server Action vs Route vs autre)
+
+---
+
+## AM. ADR candidates (PROPOSED — NOT ADOPTED)
+
+### ADR-TA-01 — Runtime owner / packaging
+
+- **Contexte :** RUNTIME-C fonctionnel ; VS runtime ≠ autorité D2-D aujourd'hui.
+- **Problème :** où placer le core d'exécution sans double runtime.
+- **Options :** TECH-RUN-A / B / C.
+- **Recommandation candidate :** TECH-RUN-B.
+- **+ :** alignement RUNTIME-C ; testabilité ; facade optionnelle.
+- **− :** nouveau module OA ; discipline imports.
+- **Risques :** confusion avec execution-contract / OPS1.
+- **Réversibilité :** haute avant Delivery.
+- **Dette :** migration composition.
+- **Préconditions :** arbitrage Morris TA-01.
+- **Gate :** GO ARBITRATION TA.
+- **Statut :** PROPOSED — NOT ADOPTED.
+
+### ADR-TA-02 — Contrats / AJV
+
+Options CONTRACT-A/B/C ; reco CONTRACT-B ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-03 — Persistance staged
+
+Options STORE-A/B/C ; reco STORE-B ; durable undecided ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-04 — Async in-process
+
+Options ASYNC-A/B/C ; reco ASYNC-B ; queue différée ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-05 — Provider wrappers
+
+Ports + AI-B / GIT-C / CURSOR-B ; capability Cursor UNVERIFIED ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-06 — Secrets
+
+SECRET-A/B/C ; reco SECRET-B ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-07 — Events
+
+EVENT-A/B/C ; reco EVENT-B ; PROPOSED — NOT ADOPTED.
+
+### ADR-TA-08 — D3 transport-neutral facade
+
+D3-TECH-A/B/C ; reco D3-TECH-C ; PROPOSED — NOT ADOPTED.
+
+*(Chaque ADR structurante ci-dessus reste PROPOSED — NOT ADOPTED ; détails opérationnels dans §I–AA et decision pack §AN.)*
+
+---
+
+## AN. Decision pack Morris — D-V3.1-D2D-TA-01…14
+
+> **Statut commun de chaque décision :** `NOT DECIDED — MORRIS ARBITRATION REQUIRED`
+
+### D-V3.1-D2D-TA-01 — Runtime owner et packaging
+
+- **Question :** Qui est l'autorité technique d'exécution D2-D et comment packager ?
+- **Options :** TECH-RUN-A / TECH-RUN-B / TECH-RUN-C
+- **Recommandation candidate :** TECH-RUN-B
+- **Justification :** RUNTIME-C ; VS runtime disclosures agentExecution DISABLED ; évite double state authority
+- **Impacts :** nouveau module OA ; facade optionnelle
+- **Sécurité :** server composition only
+- **Performance :** in-process ; pas de claim SLO
+- **FinOps :** pas de service permanent
+- **Dette :** migration composition
+- **Réversibilité :** haute pré-Delivery
+- **Dépendances :** aucune nouvelle npm
+- **Réserves :** —
+- **Gate suivante :** TA arbitration → backlog D2-D1
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-02 — Découpage domain/application/ports/adapters/server composition
+
+- **Question :** Quelle structure de couches ?
+- **Options :** (1) couches §K (2) tout dans vertical-slice-runtime (3) package npm séparé immédiat
+- **Recommandation candidate :** couches §K
+- **Justification :** domain pur ; ports injectés ; Next hors domaine
+- **Impacts / sécu / perf / FinOps / dette / réversibilité :** testabilité ↑ ; bundling risk ↓
+- **Dépendances :** —
+- **Réserves :** —
+- **Gate :** TA arbitration
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-03 — Représentation contrats et validation
+
+- **Options :** CONTRACT-A / B / C
+- **Recommandation candidate :** CONTRACT-B (TS + JSON Schema/AJV existant)
+- **Justification :** AJV déjà présent ; fixtures/adapters share schemas ; évite Zod sans GO
+- **Dette :** dual type/schema gouvernée par tests
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-04 — État, repository et persistance
+
+- **Options :** STORE-A / B / C
+- **Recommandation candidate :** STORE-B
+- **Justification :** D2-D1 process-local OK ; strong runtime exige durable gate séparée
+- **Réserves :** multi-instance claims interdits sans durable
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-05 — Coordination async, cancellation et timeout
+
+- **Options :** ASYNC-A / B / C
+- **Recommandation candidate :** ASYNC-B
+- **Justification :** AbortSignal ; Cursor longs ; queue non prouvée
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-06 — Provider Capability Boundary et wrappers
+
+- **Question :** Ports + stratégie wrappers vs rewrite
+- **Options :** reuse direct / wrappers D2-D / rewrite ciblé
+- **Recommandation candidate :** wrappers D2-D (REUSE-B)
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-07 — AI adapter, model/config et contract-fit
+
+- **Options :** AI-A / B / C
+- **Recommandation candidate :** AI-B
+- **Sécurité :** secrets hors domaine ; no raw in events
+- **FinOps :** usage validé ; model configurable
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-08 — GitHub transport, auth et read-only policy
+
+- **Options :** GIT-A / B / C
+- **Recommandation candidate :** GIT-C
+- **Sécurité :** read-only ; allowlist ; redaction ; PAT ≠ prod défaut
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-09 — Cursor process boundary, sandbox et capability gate
+
+- **Options :** CURSOR-A / B / C
+- **Recommandation candidate :** CURSOR-B after capability verification
+- **Réserves :** CURSOR PRODUCT CAPABILITIES — UNVERIFIED
+- **Gate :** capability verification GO distinct
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-10 — SecretSource et frontières sécurité/redaction
+
+- **Options :** SECRET-A / B / C
+- **Recommandation candidate :** SECRET-B
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-11 — Events, evidence, usage et observability adapter
+
+- **Options :** EVENT-A / B / C
+- **Recommandation candidate :** EVENT-B
+- **Réserves :** R-QA-REV-01/02 timestamps/events
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-12 — D3 projection et transport-neutral server boundary
+
+- **Options :** D3-TECH-A / B / C
+- **Recommandation candidate :** D3-TECH-C
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-13 — Test strategy, fixtures et traitement R-QA-D2C-01
+
+- **Question :** Stratégie tests + défense R-C
+- **Options :** (1) fixtures-first + adversarial D2-D boundary (2) live-first (3) report correction D2-C only
+- **Recommandation candidate :** (1) + gate D2-C séparée
+- **Réserves :** R-QA-D2C-01 OPEN NOT LIFTED
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+### D-V3.1-D2D-TA-14 — Slicing D2-D1/D2-D2/D2-D3 et critères de sortie vers backlog
+
+- **Question :** Critères de sortie techniques vers backlog futur
+- **Options :** slicing FA-11 tel quel / fusion D2-D1+D2 / walking skeleton dès D2-D1
+- **Recommandation candidate :** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire
+- **Gate suivante après arbitrage :** GO BACKLOG D2-D1/D2/D3 (distinct)
+- **Statut :** NOT DECIDED — MORRIS ARBITRATION REQUIRED
+
+---
+
+## AO. Recommandations candidates (CANDIDATE — NOT ADOPTED)
+
+1. **TECH-RUN-B** — core OA `execution-run` ; vertical-slice-runtime facade/composition uniquement.
+2. **Domain/application/ports/adapters** — aucun SDK dans domain/application contracts.
+3. **CONTRACT-B** — TypeScript + JSON Schema/AJV existant.
+4. **Reducer pur + discriminated unions** — aucune state-machine dependency.
+5. **STORE-B** — repository port ; memory D2-D1 ; durable gate avant strong runtime.
+6. **ASYNC-B** — Promise/AbortSignal in-process ; aucune queue sans besoin prouvé.
+7. **Wrappers D2-D** sur capacités platform existantes.
+8. **AI-B** — wrapper platform AI + contract-fit tests.
+9. **GIT-C** — transport-neutral read-only.
+10. **CURSOR-B** — process boundary/extract après capability verification.
+11. **SECRET-B** — SecretSourcePort ; env local ; manager futur.
+12. **EVENT-B** — port D2-D → EventSink existant.
+13. **D3-TECH-C** — facade transport-neutral ; aucun endpoint décidé.
+14. **Slicing** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire.
+
+Chaque item : **CANDIDATE — NOT ADOPTED.**
+
+---
+
+## AP. Trajectoire candidate
+
+Après arbitrage TA uniquement :
+
+1. Backlog D2-D1 / D2-D2 / D2-D3 (GO distinct).
+2. Cycles Delivery séparés.
+3. Correction D2-C séparée si autorisée.
+4. Capability verification Cursor.
+5. **Aucune** ouverture automatique de D3.
+
+Aucune transition automatique.
+
+---
+
+## AQ. Anti-claims
+
+Ce document **n'autorise pas** et **ne revendique pas** :
+
+- technical architecture adopted
+- runtime selected
+- AJV strategy adopted
+- persistence selected
+- multi-instance ready
+- Cursor compatible
+- sandbox secure
+- secret store selected
+- provider integrated
+- production-ready / RUN READY / scalable / secure
+- backlog ready / Delivery ready / D3 ready
+- reserve lifted
+- Git write enabled / CreateCycle enabled / method promoted
+
+---
+
+## AR. Verdict documentaire
+
+```text
+D2-D TECHNICAL ARCHITECTURE COMPLETE LOCALLY —
+READY FOR MORRIS ARBITRATION —
+ADOPTED CADRAGE / FUNCTIONAL DESIGN / FUNCTIONAL ARCHITECTURE APPLIED —
+TECHNICAL BASELINE VERIFIED —
+RUNTIME AND PACKAGING OPTIONS COMPARED —
+CONTRACT AND VALIDATION OPTIONS COMPARED —
+STATE / PERSISTENCE / ASYNC OPTIONS COMPARED —
+AI / GIT / CURSOR OPTIONS COMPARED —
+SECURITY / SECRET / SANDBOX BOUNDARIES DOCUMENTED —
+EVENT / EVIDENCE / USAGE ARCHITECTURE DOCUMENTED —
+D3 SERVER BOUNDARY DOCUMENTED —
+DOUBLE-RUNTIME RISK TREATED —
+TEST STRATEGY DOCUMENTED —
+D2-D SLICING DOCUMENTED —
+D-V3.1-D2D-TA-01…14 READY FOR MORRIS ARBITRATION —
+NO TECHNICAL DECISION ADOPTED —
+NO BACKLOG CREATED —
+NO DELIVERY AUTHORIZED —
+NO UI —
+NO CREATECYCLE —
+NO D3 —
+NO PROJECT GIT WRITE —
+NO METHOD PROMOTION
+```
+

```

## Git Truth final (pré-handoff)

```text
branch: architecture/sfia-studio-v3-1-d2-d-integration-foundation-technical-architecture
HEAD: e273b2afc33445154f63226fdfe8357c75df67f8
origin/main: e273b2afc33445154f63226fdfe8357c75df67f8
status:
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/23-v3-1-d2-d-integration-foundation-technical-architecture.md
cached: (empty)
tracked diff: (empty)
project untracked only: ['projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/23-v3-1-d2-d-integration-foundation-technical-architecture.md']
remote architecture branch: (absent — to verify)
PR: (absent — to verify)
```

## Preuves d'absence de mutation projet Git

- staged vide
- aucun tracked modifié
- aucun commit projet
- aucun push projet
- aucune PR projet
- documents 20–22 non modifiés

## Handoff before publication

| Tip | Blob |
|-----|------|
| `3ec9c997ce5b36d1797ecf13f2588e5460f3f2bb` | `4da0087bf5c98d6339dd05cbae021f654e328523` |

Nécessité de publier le nouveau rapport : **oui**.

### Note anti-autoréférence

Le tip et le blob du présent rapport sont calculés après publication. Ils sont remontés dans le rapport terminal Cursor et vérifiés indépendamment par ChatGPT afin d'éviter une boucle autoréférentielle.

## Verdict

```text
V3.1-D2-D TECHNICAL ARCHITECTURE COMPLETE —
READY FOR MORRIS ARBITRATION —

MAIN POST-MERGE BASE VERIFIED —
DOCUMENTS 20 / 21 / 22 APPLIED —
TECHNICAL BASELINE VERIFIED —
RUNTIME / PACKAGING OPTIONS COMPARED —
CONTRACT VALIDATION OPTIONS COMPARED —
STATE / PERSISTENCE OPTIONS COMPARED —
ASYNC / CANCELLATION OPTIONS COMPARED —
PROVIDER BOUNDARY DOCUMENTED —
AI OPTIONS COMPARED —
GITHUB OPTIONS COMPARED —
CURSOR OPTIONS COMPARED —
SECRET / SECURITY / SANDBOX BOUNDARIES DOCUMENTED —
ERROR / EVIDENCE / DISCLOSURE ARCHITECTURE DOCUMENTED —
EVENT / USAGE / FINOPS ARCHITECTURE DOCUMENTED —
D3 PROVIDER-INDEPENDENT TECHNICAL BOUNDARY DOCUMENTED —
DOUBLE-RUNTIME STRATEGY DOCUMENTED —
TEST AND FIXTURE STRATEGY DOCUMENTED —
D2-D1 / D2-D2 / D2-D3 SLICING DOCUMENTED —
D-V3.1-D2D-TA-01…14 READY FOR MORRIS ARBITRATION —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —

NO TECHNICAL DECISION ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO CODE —
NO CONFIG —
NO DEPENDENCY CHANGE —
NO UI —
NO CREATECYCLE —
NO D3 —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED
```

Décision finale : **READY FOR MORRIS ARBITRATION**

## Prochaine gate candidate

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D TECHNICAL ARCHITECTURE
APPLY D-V3.1-D2D-TA-01…14
```

Après arbitrage uniquement : `GO BACKLOG SFIA STUDIO V3.1-D2-D1 / D2-D2 / D2-D3`
Aucun GO Delivery / D3 / UI / CreateCycle immédiatement consommable.

## Instruction ChatGPT

Lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au nouveau TECH_ARCH_HANDOFF_TIP / BLOB. Vérifier Cycle 6 Critical, GO, main@e273b2af…, docs 20–22, doc 23 complet, options multiples, TA-01…14 NOT DECIDED, réserves OPEN, aucun code/config/backlog, staged vide, aucun commit/push/PR projet, verdict.
