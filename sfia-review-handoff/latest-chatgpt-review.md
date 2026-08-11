# ChatGPT Review Pack — FULL
## F3 Real Authority Surface Decision — Design Only

| Field | Value |
| --- | --- |
| **Role** | F3 Real Authority Surface Decision Pack — AS approach design |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-11 21:36:14 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 19:36:14 UTC |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |

---

## GO exact

```
GO DECIDE F3 REAL AUTHORITY SURFACE — AUTHENTICATED MORRIS CRITICAL ACK APPROACH — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
```

**Sémantique :** DECIDE = produire decision pack + recommandation. **N'autorise PAS** Cursor à sélectionner seul une option. Morris reste l'autorité.

**Justification Critical :** frontière d'autorité pour autoriser une ExecutionAttempt à effets réels — identité Morris, Critical ack, anti-spoofing, replay, restart, scope exact, contract identity/version/digest, canActAsMorris, audit, future capacité REAL.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `088bc1a213580f78cb635a20b9270410c13f9631` |
| Blob BEFORE | `a68e88ecdad069bc461c4d0a19839f3942490d7a` |
| Role (inbound) | F3 Real Path HARD Prerequisites Framing — Gate C |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |

Handoff FINAL tip/blob : **FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE**

---

## Local Git Truth

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-hard-prerequisites` |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Staged | empty |
| Remote framing | ABSENT |
| app/** dirty | none |
| Project commit/push/PR/merge/force | 0 / 0 / 0 / 0 / 0 |
| Untracked | Gate C README + `01-authority-surface-decision.md` + `.tmp-sfia-review/**` |

---

## Gate C README immutability

| | SHA-256 | Lines |
| --- | --- | --- |
| BEFORE | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | 728 |
| AFTER | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | 728 |
| Byte-identical | **YES** | |

Path (READ-ONLY) : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/README.md`

---

## Sources consultées

- prompts/templates/sfia-cycle-execution-template.md (v2.6)
- origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md
- f3-real-path-hard-prerequisites/README.md (Gate C, read-only)
- f3-functional-design-decisions/README.md
- f3-pre-delivery-governance-framing/README.md
- a5-2-…/03-authority-model-and-gaps.md
- a5-2-…/06-morris-arbitration-pack.md
- t-a3-decision-confirmation-authority/README.md
- t-a3-…/03-authority-n2-n3-and-audit.md
- app/lib/oa/decision/ports/authorityResolver.ts
- app/lib/oa/decision/domain/types.ts
- app/lib/oa/decision/application/requestConfirmation.ts
- app/lib/oa/decision/application/grantConfirmation.ts
- app/lib/oa/decision/application/consumeConfirmation.ts
- app/lib/oa/decision/application/verifyAuthority.ts
- app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts
- app/features/project-assistant/f3/prepareF3Fixture.ts
- app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
- app/lib/vertical-slice-runtime/f3FixtureWiring.ts
- Repo-wide auth/session rg (next-auth, middleware, supabase auth, session, etc.)

---

## A52-D03 prior decision

**A52-D03 = .3 puis .1 avant real Critical** (`DECIDED — ADOPTED BY MORRIS` historique).

A52-D03.1 = surface/API Critical authentifiée + autorisée + auditée + anti-replay — **obligatoire avant REAL Critical**. Non rouverte. Non implémentée ici.

---

## Audit auth/session

| Probe | Result |
| --- | --- |
| NextAuth / Auth.js / Supabase Auth / Clerk / Lucia / iron-session | **Absent** (no deps) |
| middleware.ts auth | **Absent** (app/README confirms) |
| getSession* | OPS1 **conversation** sessions only — not Morris authn |
| AuthenticatedIdentityPort / Principal authn | **Absent** |
| canActAsMorris | AuthorityEvidence process-local flag only |

### Existing auth surface verdict

**`NO EXISTING_AUTHENTICATED_IDENTITY_SURFACE_FOUND`**

(Réaffirme Gate C : NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND)

---

## AuthorityResolverPort current contract

- Sole logical authority verification boundary (N1/N2/N3 + Morris gate)
- NEVER TRUST client authorityLevel / displayName / actorId heuristics
- N3 ≠ Morris ; require canActAsMorris
- Scope exact ; expired refused ; hostile injections ignored
- Evidence immutable after register

### MemoryAuthorityResolver limitation

Process-local · insufficient for REAL (F3-D07) · restart must fail-closed · **not** A52-D03.1 final surface.

---

## Exact decision question

> QUELLE FRONTIÈRE D'ARCHITECTURE DOIT PORTER A52-D03.1 POUR UN FUTUR PILOTE CURSOR REAL, SANS ENCORE CHOISIR LE FOURNISSEUR IAM NI LE STORE PRODUIT ?

---

## Minimum requirements (A–I)

Authenticated actor context · Morris authorization separate · Critical ack · Exact binding (actor, project, decision/proposal, contract id/version/digest-if-available, actionRef, scope, required authority, expiry, idempotency) · Anti-replay · Audit · Restart fail-closed / durability dep · Conversation never authority · F3 boundary (PREPARE-only ; ack ≠ launch ; Gate D separate).

---

## Authn / Authz / Confirmation / Execution boundary

```
authenticated identity
  → verified Morris authority (AuthorityResolverPort)
  → exact Critical acknowledgement / Confirmation
  → ExecutionContract authorization
  → T-A5 Attempt
```

Forbidden: `UI click → Cursor`.

---

## Threat model

AUTH-TM-01 … AUTH-TM-18 documented in decision pack §11 (forge actorId/displayName/N3, wrong user/scope, stale version, replay, expiry, restart before/after consume, crash after attempt, conversation GO, stolen ack id, double-submit, IdP down, audit down, CSRF/confused-deputy).

---

## Options

| Option | Status | Admissible REAL |
| --- | --- | --- |
| **AS-1** Dedicated Authenticated Critical Ack + provider-agnostic identity port | OPTION — NOT SELECTED | YES |
| **AS-2** Extend F3 confirmation with separate authenticated actor proof | OPTION — NOT SELECTED | CONDITIONAL |
| **AS-3** Internal/local authority surface | OPTION — NOT SELECTED | **NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION** |
| **AS-4** Full IAM / product identity platform first | OPTION — NOT SELECTED | Over-scoped / deferred |

Comparative matrix : decision pack §13.

---

## Recommendation

**AS-1** — `RECOMMENDED — NOT DECIDED`

Rationale: satisfies A52-D03.1 without IAM select ; preserves AuthorityResolverPort ; separates authn/authz/ack/execution ; avoids AS-2 confused-deputy ; AS-3 not admissible ; AS-4 over-scoped.

## Proposed Morris decision

`PROPOSED DECISION — MORRIS GO REQUIRED` — adopt AS-1 boundary (design decision only).

**Never written for AS-\*:** `DECIDED — ADOPTED BY MORRIS`

---

## Reserves / status

| Item | Status |
| --- | --- |
| R-T-A3-1 | OPEN HARD — BLOCKS REAL (unchanged closure) |
| R-T-A3-2 | OPEN HARD — BLOCKS REAL · DEPENDENCY — DURABILITY PLAN DECISION REQUIRED for cross-restart ack consumption |
| IAM | **NOT_SELECTED** |
| Product persistence | **NOT_SELECTED** |
| Bounded local persistence | SELECTED — EXISTING BOUNDED LOCAL ONLY |
| Gates A/B/C | CONSUMED (+ B QA merged ; C validated README immutable) |
| Gate D | **NOT CONSUMED** |
| Cursor REAL | **BLOCKED** |
| T-A6 COMPLETE | NOT DECLARED |

---

## Tests read-only

| Suite | Result | Proves | Does not prove |
| --- | --- | --- | --- |
| `npx vitest run __tests__/oa/decision` | **PASS** 4 files / 50 tests | Never-trust client fields · Morris gate · consume-once · scope/expiry | Authenticated identity surface · R-T-A3-1 closed |
| `npx vitest run __tests__/project-assistant/f3.fixtureVerticalSlice.test.ts` | **PASS** 1 file / 9 tests | Fixture path · canActAsMorris=false honesty · version mismatch fail-closed · process-local fail-closed | REAL authn · A52-D03.1 implemented |

Logs: `.tmp-sfia-review/f3-authority-surface-decision/logs/`

---

## Created file

Path: `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/01-authority-surface-decision.md`

SHA-256: `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed`

Lines: 704

### COMPLETE FILE CONTENT

```markdown
# 01 — F3 Real Authority Surface Decision Pack

| Champ | Valeur |
| --- | --- |
| **Produit** | SFIA Studio — F3 |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Gate Morris consommé (ce cycle)** | `GO DECIDE F3 REAL AUTHORITY SURFACE — AUTHENTICATED MORRIS CRITICAL ACK APPROACH — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT` |
| **Nature** | Decision pack d'architecture — **DESIGN ONLY** |
| **Sélection d'option** | **NOT DECIDED** — Morris reste l'autorité |
| **IAM** | **`NOT_SELECTED`** |
| **Product persistence** | **`NOT_SELECTED`** |
| **Bounded local persistence** | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** (≠ product persistence) |
| **Gate D** | **NOT CONSUMED** |
| **Cursor REAL** | **BLOCKED** |
| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD — BLOCKS REAL** (jamais fermés ici) |
| **Statut documentaire** | Observation / Options / Recommandation / Proposition — **strictement séparées** |

> **Sémantique du GO :** le mot *DECIDE* autorise la production du decision pack et d'une recommandation. Il **n'autorise pas** Cursor à sélectionner seul une option structurante. Aucune phrase `DECIDED — ADOPTED BY MORRIS` n'est écrite pour une option AS-* dans ce fichier.

---

## 1. Contexte

La chaîne F3 FIXTURE est intégrée sur `main` (`4b1a058…`, package `ec7d6c8…`, PR #333) :

F2 approved proposal → PREPARE → T-A4 ExecutionContract → confirmation explicite → T-A5 ExecutionAttempt → TestExecutionAdapter FIXTURE → T-A6 Evidence / ReviewBundle → réinjection Project Assistant → recommendation only.

Gate C (`README.md` adjacent, **READ-ONLY** ce cycle) a cadré les prérequis HARD R-T-A3-1 / R-T-A3-2 et a conclu :

**`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`**

Ce cycle répond à la question d'architecture de la surface d'autorité nécessaire **avant** tout pilote Cursor REAL, sans Delivery, sans IAM auto-select, sans product persistence auto-select, sans Gate D, sans fermeture HARD.

---

## 2. GO Morris

```
GO DECIDE F3 REAL AUTHORITY SURFACE — AUTHENTICATED MORRIS CRITICAL ACK APPROACH — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
```

**Consomme :** le gate *Authority Surface Decision* pour produire ce decision pack.

**Ne consomme pas :** sélection d'option AS-* · IAM · product persistence · Gate D · Cursor REAL · Delivery · HARD closure.

**Gates amont :**

| Gate | Statut |
| --- | --- |
| A | CONSUMED |
| B | CONSUMED + QA VALIDATED + MERGED |
| C | CONSUMED + VALIDATED (artifact README immuable ce cycle) |
| Authority Surface Decision (courant) | CONSUMED POUR PRODUIRE LE DECISION PACK |
| Sélection architecture Authority Surface | **NOT DECIDED** tant que Morris n'a pas choisi |
| D | **NOT CONSUMED** |

---

## 3. Décisions antérieures contraignantes

### 3.1 A52-D03 (déjà adopté — ne pas rouvrir)

Sources :

- `a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md`
- `a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md`

**`DECIDED — ADOPTED BY MORRIS` :** A52-D03 = **`.3` puis `.1` avant real Critical**.

| Élément | Contenu |
| --- | --- |
| Court terme (`.3`) | simulation / read-only / Confirm fail-closed |
| Avant Critical réel (`.1`) | surface/API Critical **authentifiée + autorisée + auditée + anti-replay** |
| Effet | aucune exécution Critical réelle autorisée par `.3` seul |

**A52-D03.1** = précondition obligatoire avant REAL Critical. Ce cycle **ne la réouvre pas** ; il décide *quelle frontière d'architecture* la porte, sans choisir le fournisseur IAM.

### 3.2 Interdits comme solution finale REAL (sous A52-D03.1)

Les éléments suivants **ne peuvent pas** être présentés comme solution finale REAL :

- simple `MemoryAuthorityResolver` ;
- `actorId` `"morris"` ;
- `displayName` `"Morris"` ;
- N3 seul ;
- bouton UI non authentifié ;
- conversation ChatGPT ;
- ancien GO textuel ;
- service interne non authentifié ;
- fixture authority ;
- localhost seul comme identité ;
- CLI locale seule comme identité forte.

Toute option qui ne satisfait pas A52-D03.1 pour REAL doit être marquée :

**`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`**

### 3.3 F3-D01…D11 (extraits pertinents)

| Décision | Portée pour ce pack |
| --- | --- |
| F3-D01 | F2 GO = PREPARE-only — jamais launch |
| F3-D02 | Pilote REAL exige confirmation Morris exacte liée au contrat |
| F3-D03 | Chaîne T-A4 → T-A5 → T-A6 ; pas de second moteur |
| F3-D05 | REAL/FIXTURE explicites ; no silent fallback |
| F3-D07 | Process-local **INSUFFISANT** pour REAL ; fail-closed post-restart |
| F3-D11 | REAL NO-GO maintenant |

### 3.4 Gate C (cadrage)

- R-T-A3-1 / R-T-A3-2 : **FURTHER REDUCED — REMAINS OPEN** / OPEN HARD / BLOCKS REAL
- IAM / product persistence : **NOT_SELECTED**
- Bounded local : SELECTED EXISTING BOUNDED LOCAL ONLY
- Recommandation Gate C : framing Option A ; package décision futur pour surface d'autorité (ce cycle)

---

## 4. Git Truth

| Élément | Valeur |
| --- | --- |
| Worktree | `…/worktrees/f3-real-hard-prerequisites` (réutilisation Gate C) |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| `origin/main` | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Staged | empty |
| Remote framing | **ABSENT** |
| `app/**` dirty | **none** |
| Untracked attendus | `…/f3-real-path-hard-prerequisites/README.md` · ce fichier `01-…` · `.tmp-sfia-review/**` |
| Project commit / push / PR | **0** |
| Gate C README | READ-ONLY — byte-identical avant/après (SHA-256 + lignes) |

Inbound handoff (attendu) :

| Tip | Blob |
| --- | --- |
| `088bc1a213580f78cb635a20b9270410c13f9631` | `a68e88ecdad069bc461c4d0a19839f3942490d7a` |

Template : v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`

---

## 5. Audit auth / session existant (read-only)

### 5.1 Méthode

Recherche sans modification dans `projects/sfia-studio/app` et manifests :

- `next-auth` / Auth.js / `@auth/` / Supabase Auth / Clerk / Lucia / iron-session / better-auth / passport
- `middleware.ts` / session cookies / JWT verify handlers
- `getServerSession` / `getSession` / `signIn` / `createServerClient`
- ports `AuthenticatedActor` / `IdentityPort` / `Principal`
- dépendances `package.json`

### 5.2 Constats

| Zone | Résultat |
| --- | --- |
| Middleware Next auth | **Absent** — `app/README.md` affirme explicitement pas de middleware auth |
| NextAuth / Auth.js / Supabase Auth / Clerk / Lucia | **Aucune dépendance** dans manifests app/root scannés |
| `getSession` / session* | **OPS1 conversation session** (`lib/ops1/repository.ts`, `ops1GetSessionAction`) — identité de *session produit OPS1*, **pas** d'authentification humaine Morris |
| `canActAsMorris` | Flag d'**AuthorityEvidence** process-local via `AuthorityResolverPort` — **pas** une session authn |
| F2 demo | peut enregistrer `canActAsMorris: true` en mémoire locale (demo) |
| F3 fixture | enregistre explicitement `canActAsMorris: false` |
| Surface serveur Critical Ack authentifiée | **Absente** |

### 5.3 Verdict d'audit

**`NO EXISTING_AUTHENTICATED_IDENTITY_SURFACE_FOUND`**

Réaffirme Gate C : **`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`**.

Aucune surface réutilisable ne contredit Gate C. **Aucun IAM inventé** pour combler le gap.

---

## 6. Authority contract actuel (à préserver)

### 6.1 Port unique

`AuthorityResolverPort` (`app/lib/oa/decision/ports/authorityResolver.ts`) est la **unique source logique** de vérification d'autorité (N1/N2/N3 + Morris gate).

Implémentation actuelle : `MemoryAuthorityResolver` (process-local, evidence immutable après `register`).

### 6.2 Invariants runtime (confirmés dans le code)

| Invariant | Comportement actuel |
| --- | --- |
| Client `authorityLevel` | **NEVER TRUST** (ignoré) |
| `displayName` | **NEVER TRUST** (ignoré) |
| `actorId` contenant « morris » | **NEVER TRUST** comme preuve |
| N3 | **≠** Morris |
| Morris | exige `canActAsMorris: true` (ou grant dédié vérifié) |
| Scope | **exact match** |
| Evidence expirée | refusée |
| Hostile injection | ignorée |
| Evidence | immutable après register (`evidence_immutable`) |

### 6.3 Confirmation (T-A3)

- `grantConfirmation` : `requested → granted` ; refuse expired / wrong state ; race-safe sous mutex process-local
- `consumeConfirmation` : `granted → consumed` ; **double consume interdit** (`CONFIRMATION_ALREADY_CONSUMED`)
- Champs utiles déjà présents : `confirmationId`, `actionRef`, `scope`, `idempotencyKey`, `decisionRef`, `expiresAt`, `requestedBy` / `requestedTo`, status lifecycle

### 6.4 Limitation mémoire (F3-D07)

`MemoryAuthorityResolver` + stores process-local :

- **insuffisants pour REAL** ;
- restart ⇒ fail-closed attendu (pas de reconstruction depuis conversation) ;
- **ne satisfont pas** A52-D03.1 comme surface finale REAL.

---

## 7. Problème à résoudre

### 7.1 Ce qui n'est PAS la question

« Faut-il une identité authentifiée ? » — **déjà décidé** (A52-D03.1).

### 7.2 Question exacte

> **QUELLE FRONTIÈRE D'ARCHITECTURE DOIT PORTER A52-D03.1 POUR UN FUTUR PILOTE CURSOR REAL, SANS ENCORE CHOISIR LE FOURNISSEUR IAM NI LE STORE PRODUIT ?**

Le pack doit permettre à Morris de choisir la **forme** de la surface.

---

## 8. Invariants (normatifs pour toute option admissible)

1. `AuthorityResolverPort` reste la frontière d'**authz** — pas de second moteur.
2. Authn ≠ Authz ≠ Confirmation ≠ Execution.
3. Conversation / GO textuel / ChatGPT **jamais** source d'autorité.
4. Client fields (`actorId` heuristique, `displayName`, `authorityLevel`) **never trust**.
5. N3 ≠ Morris ; `canActAsMorris` explicite requis.
6. Scope **exact** ; binding contrat (id / version / digest si dispo) obligatoire pour Critical Ack REAL.
7. Anti-replay : grant/ack consommable une fois ou équivalent fail-closed.
8. F2 GO reste PREPARE-only (F3-D01).
9. Authority surface **ne démarre pas** Cursor ; Confirmation **ne crée pas** implicitement Attempt.
10. Gate D reste séparé ; IAM / product persistence restent **NOT_SELECTED** tant que Morris n'a pas décidé.
11. Fail-closed sur identité absente, ack manquant, stale binding, restart sans preuve durable requise.
12. Aucune option admissible ne peut déclarer HARD CLOSED.

---

## 9. Séparation authn / authz / confirmation / execution

| Couche | Question | Porte | Ne fait pas |
| --- | --- | --- | --- |
| **AUTHENTICATION** | Qui est l'acteur ? | Identity port / session authentifiée (future, provider-agnostic) | N'accorde pas Morris ; ne confirme pas ; ne lance pas |
| **AUTHORIZATION** | Cette identité peut-elle agir comme Morris pour ce scope ? | `AuthorityResolverPort` + evidence / grant | Ne remplace pas l'ack Critical ; ne crée pas Attempt |
| **CONFIRMATION** | Cette identité autorise-t-elle **CETTE** action exacte maintenant ? | Critical Ack + Confirmation T-A3 (binding exact) | Ne lance pas Cursor ; ≠ click UI non lié |
| **EXECUTION** | Une Attempt peut-elle être créée/lancée ? | T-A4 contract authz → T-A5 Attempt | Hors de la surface d'ack ; Gate D / REAL séparés |

**Chaîne obligatoire :**

```
authenticated identity
  → verified Morris authority (AuthorityResolverPort)
  → exact Critical acknowledgement / Confirmation
  → ExecutionContract authorization
  → T-A5 Attempt
```

**Interdit :**

```
UI click → Cursor
```

---

## 10. Exigences A52-D03.1 (contrat minimum de surface candidate)

### A. Authenticated actor context

- Identité issue d'une **source authentifiée**.
- **Jamais** construite depuis le payload F3 client.
- Port d'identité **provider-agnostic** (IAM = NOT_SELECTED).

### B. Morris authorization

- Identité authentifiée ≠ autorité Morris.
- Contrôle séparé : `canActAsMorris=true` pour le **scope exact** via `AuthorityResolverPort`.

### C. Critical acknowledgement

- Ack humain **explicite** (pas de silent grant).

### D. Binding exact (mapper au contrat actuel)

| Exigence logique | Mapping fondation existante |
| --- | --- |
| Actor identity | `ActorReference.actorId` **après** authn server-side — jamais trust client |
| projectId | `HumanDecision.projectId` / contract project binding |
| decisionId / proposal | `Confirmation.decisionRef` / proposal id F3 |
| executionContractId | `ExecutionContract.executionContractId` |
| contract version | `ExecutionContract.version` |
| contract digest | si disponible dans contrat/foundation — sinon **LOGICAL REQUIREMENT** à matérialiser en Delivery futur sans inventer un champ absent |
| actionRef | `Confirmation.actionRef` |
| exact scope | `Confirmation.scope` / evidence `scope` |
| required authority | `requiredAuthority` / `VerifyAuthorityRequest.requiredLevel` + Morris gate |
| expiration | `Confirmation.expiresAt` / evidence `expiresAt` |
| correlation / idempotency / replay | `Confirmation.idempotencyKey` + status `consumed` |

### E. Anti-replay

- Consommation unique (`consumeConfirmation`) ou équivalent fail-closed.

### F. Audit

Demande · grant/refusal · consumption · expiry · actor · scope · binding · result — **sans secrets**.

### G. Restart

| Information | Posture |
| --- | --- |
| Identité session / grant non durable | peut disparaître ⇒ **fail-closed** |
| Consumption / ack nécessaire au-delà du process | **LOGICAL REQUIREMENT** — **DEPENDENCY — DURABILITY PLAN DECISION REQUIRED** (R-T-A3-2) ; **pas** de techno store choisie ici |

### H. Conversation

Conversation = **jamais** source d'autorité.

### I. Frontière F3

- F2 GO PREPARE-only.
- Authority surface ≠ start Cursor.
- Confirmation ≠ implicit Attempt.
- Gate D séparé.

---

## 11. Threat model (AUTH-TM-01…18)

Légende preuve : **FOUNDATION** = contrôle T-A3/T-A4/F3 existant · **GAP** = manque surface authn · **DEP-DUR** = dépend plan durabilité R-T-A3-2 · **N/A-IAM** = dépend adapter IAM futur (NOT_SELECTED).

| ID | Menace | Fail-safe attendu | Contrôle existant | Nouveau contrôle nécessaire | Impact R-T-A3-1 | Dep. IAM/pers. | Preuve |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AUTH-TM-01 | Client forge `actorId=Morris` | Ignore heuristique ; authn server | Never-trust actorId as Morris | Authenticated actor context | BLOCKS REAL si absent | IAM adapter | FOUNDATION + GAP |
| AUTH-TM-02 | Client forge `displayName=Morris` | Ignoré | `void displayName` | — (conserver) | réduit | — | FOUNDATION |
| AUTH-TM-03 | Client forge `authorityLevel=N3` | Ignoré | `void authorityLevel` | — (conserver) | réduit | — | FOUNDATION |
| AUTH-TM-04 | N3 réel sans `canActAsMorris` | `morris_gate_denied` | requireMorrisGate | Lier authn→evidence Morris | BLOCKS REAL sans grant | — | FOUNDATION |
| AUTH-TM-05 | Session authn mauvais user | Deny Morris / wrong actor | — | Authn principal ≠ payload | BLOCKS REAL | N/A-IAM | GAP |
| AUTH-TM-06 | Morris authn mauvais project/scope | `scope_mismatch` | scope exact | Bind project+scope dans ack | BLOCKS REAL | — | FOUNDATION + GAP bind |
| AUTH-TM-07 | Ack lié à ancienne version/digest | Refuse stale | contract version OCC F3 | Bind version(+digest) dans ack | BLOCKS REAL | — | PARTIEL + GAP |
| AUTH-TM-08 | Ack rejoué après consume | `CONFIRMATION_ALREADY_CONSUMED` | consume once | Persistance consume cross-restart | + R-T-A3-2 | DEP-DUR | FOUNDATION local / GAP durable |
| AUTH-TM-09 | Ack expiré | Refuse | expiresAt checks | — (conserver) | réduit | — | FOUNDATION |
| AUTH-TM-10 | Restart avant consumption | Fail-closed ; pas de reconstruction conversation | F3-D07 | Policy restart + éventuelle durabilité grant | OPEN HARD | DEP-DUR | GAP |
| AUTH-TM-11 | Restart après consume avant Attempt | Fail-closed ou preuve durable consumption | process-local | Durability plan | OPEN / DEP | DEP-DUR | GAP |
| AUTH-TM-12 | Crash après Attempt start | Attempt UNKNOWN / no auto-retry | F3-D08 · fixture honesty | Hors AS primary ; durability Attempt | surtout R-T-A3-2 | DEP-DUR | PARTIEL |
| AUTH-TM-13 | Conversation contient ancien GO | Ignore as authority | doctrine / F3-D07 | Surface ack indépendante conversation | BLOCKS REAL si confondu | — | FOUNDATION doctrine |
| AUTH-TM-14 | Vol seul d'identifiant d'ack | Require authn + authz + binding | partial | Authn session + CSRF / origin | BLOCKS REAL | N/A-IAM | GAP |
| AUTH-TM-15 | Double-submit concurrent | Single consume / single launch | mutex consume · F3 double-invoke | Conserver + durable lock | réduit local | DEP-DUR cross-proc | FOUNDATION local |
| AUTH-TM-16 | Identity provider indisponible | Fail-closed (pas de Critical) | — | Adapter timeout/deny | fail-closed | N/A-IAM | GAP |
| AUTH-TM-17 | Audit indisponible | Fail-closed ou policy explicite | audit events locaux | Audit port durable | OPEN | DEP-DUR possible | PARTIEL |
| AUTH-TM-18 | CSRF / confused deputy (web) | Origin/CSRF + server authn | — | Surface web protections | BLOCKS REAL web | N/A-IAM | GAP |

---

## 12. Options d'architecture

**Statut de chaque option :** `OPTION — NOT SELECTED`

### OPTION AS-1 — DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + provider-agnostic identity port

**Statut :** `OPTION — NOT SELECTED`

| Critère | Contenu |
| --- | --- |
| **Description** | Surface serveur dédiée Critical Ack ; identity provider derrière un **port agnostique** ; `AuthorityResolverPort` conserve l'authz ; binding exact vers Confirmation / ExecutionContract ; IAM reste NOT_SELECTED |
| **Composants réutilisés** | `AuthorityResolverPort` · Confirmation request/grant/consume · ExecutionContract confirm path · audit ports T-A3/T-A4 · invariants never-trust |
| **Nouveaux contrats** | `AuthenticatedIdentityPort` (nom indicatif) · CriticalAckCommand (binding exact) · mapping authn→actorId serveur |
| **Surface publique** | Endpoint/server action Critical Ack **dédié** (pas launch) |
| **Authn/authz** | Strictement séparés |
| **Lien AuthorityResolver** | Unique frontière authz |
| **Lien Confirmation** | Ack produit/consomme Confirmation existante |
| **Lien ExecutionContract** | Binding id/version/(digest) ; confirm contract seulement après ack+verify |
| **Lien Attempt** | Aucun — Attempt reste T-A5 après contract confirmed |
| **Anti-replay** | consume once (+ durability dep) |
| **Restart** | fail-closed sans preuve ; durable consume = DEP R-T-A3-2 |
| **Audit** | request/grant/refuse/consume/expiry |
| **IAM dependency** | Port only — **NOT_SELECTED** |
| **Persistence dependency** | Logical anti-replay durable = **DEP — DURABILITY PLAN** ; pas de store choisi |
| **Impact R-T-A3-1** | Adresse le gap principal identité/ack authentifiés |
| **Impact R-T-A3-2** | Identifie deps ; ne décide pas |
| **Threat model** | Couvre TM-01…09,13–16,18 en design ; 10–12/17 via deps |
| **Attack surface** | Une surface ack bornée (plus petite qu'IAM platform) |
| **Dette** | Faible–moyenne ; ports testables |
| **Réversibilité** | Haute (ports) |
| **Complexité** | Moyenne bornée |
| **Testabilité** | Haute (fake identity adapter) |
| **Conformité A52-D03.1** | **OUI** (par conception, sans choisir IAM) |
| **Compat F3-D01…D11** | OUI (D01/D02/D03/D07) |
| **Admissible futur REAL** | **YES** (sous Delivery+QA+Morris+deps durabilité) |
| **Delivery nécessaire** | **YES** (futur GO distinct) |
| **Décision Morris nécessaire** | **YES** — adoption AS-1 |

**Challenge AS-1 :** Utile maintenant (comme décision) ? **Oui (design).** Dette ? **Bornée.** Plus simple ? **AS-2 paraît plus simple mais couple UI.** Repo-first ? **Oui.** Réutilise AuthorityResolver ? **Oui.** Second moteur ? **Non.** Confond authn/authz ? **Non.** Confond confirm/launch ? **Non.** IAM implicite ? **Non.** Product persistence implicite ? **Non.** Restart illicit authority ? **Non si fail-closed.** Vieux GO reactive ? **Non.** Forge actorId ? **Non si authn.** Binding exact ? **Oui (exigé).** Replay fail-closed ? **Oui (+ DEP durable).** A52-D03.1 ? **Oui.** Gain justifie surface ? **Oui.**

---

### OPTION AS-2 — EXTEND EXISTING F3 CONFIRMATION SURFACE WITH SEPARATE AUTHENTICATED ACTOR PROOF

**Statut :** `OPTION — NOT SELECTED`

| Critère | Contenu |
| --- | --- |
| **Description** | Réutiliser `confirmAndExecuteF3Fixture` / actions F3 ; injecter preuve authn serveur ; garder séparation authn/authz/confirm **en discipline** |
| **Réutilisé** | Surface F3 confirm+execute · AuthorityResolver · Confirmation |
| **Nouveaux contrats** | Authenticated actor proof injectée dans le flux F3 existant |
| **Surface publique** | Étend la surface F3 existante (pas de surface ack dédiée) |
| **Risques** | **Confused deputy** · coupling UI/F3↔authority · raccourci psychologique click=authority · confirmAndExecute combine confirm+attempt (même si gated) |
| **Authn/authz** | Possible mais **fragile** (même handler) |
| **Lien Attempt** | Même entrée produit aujourd'hui enchaîne confirm→attempt (fixture) — risque de fusion conceptuelle pour REAL |
| **Anti-replay / audit / restart** | Comme AS-1 si discipline, mais plus dur à prouver |
| **IAM / persistence** | NOT_SELECTED / DEP-DUR identiques |
| **Impact R-T-A3-1** | Peut adresser gap si authn réelle, mais preuve plus faible |
| **Conformité A52-D03.1** | **CONDITIONAL** — seulement si séparation stricte prouvée ; sinon insuffisant |
| **Admissible futur REAL** | **CONDITIONAL** |
| **Delivery nécessaire** | YES |
| **Décision Morris** | YES si choisie |

**Challenge AS-2 :** Utile ? **Partiel.** Dette coupling ? **Oui.** Plus simple ? **En LOC oui ; en sécurité non.** Repo-first ? **Oui.** Second moteur ? **Non.** Confond authn/authz ? **Risque élevé.** Confond confirm/launch ? **Risque élevé (confirmAndExecute).** IAM implicite ? **Non.** Persistence implicite ? **Non.** Restart illicit ? **Risque si mal borné.** A52-D03.1 vraiment ? **Conditionnel.** Gain vs surface dédiée ? **Faible face au risque confused deputy.**

---

### OPTION AS-3 — INTERNAL / LOCAL AUTHORITY SURFACE

**Statut :** `OPTION — NOT SELECTED`

Exemples : internal-only service · localhost · OS-user · CLI locale.

| Critère | Contenu |
| --- | --- |
| **Description** | Traiter un canal local/interne comme identité « assez forte » |
| **Comparaison A52-D03.1** | A52-D03.1 exige API/surface **authentifiée + autorisée + auditée + anti-replay** — pas localhost/CLI comme substitut |
| **Admissible futur REAL** | **NO** |
| **Label obligatoire** | **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** |
| **Usage possible** | Outil de **test/simulation** seulement (aligné `.3`) — **jamais** REAL Critical |
| **IAM / persistence** | Ne sélectionne pas IAM produit ; ne satisfait pas pour autant `.1` |
| **Delivery pour REAL** | N/A — non admissible |

**Challenge AS-3 :** Satisfait A52-D03.1 ? **Non.** Admissible REAL ? **Non.** Peut rester harness test ? **Oui, hors REAL.**

---

### OPTION AS-4 — FULL IAM / PRODUCT IDENTITY PLATFORM FIRST

**Statut :** `OPTION — NOT SELECTED` · **over-scoped / deferred**

| Critère | Contenu |
| --- | --- |
| **Description** | Construire d'abord une plateforme IAM / identité produit complète |
| **Évaluation** | Comparaison seulement — **GO interdit auto-select** |
| **Dette / complexité** | Disproportionnée pour le gap borné R-T-A3-1 |
| **IAM** | Impliquerait sélection — **interdit ici** |
| **Product persistence** | Souvent couplé — **interdit ici** |
| **Admissible comme prochain pas** | **NO (deferred / over-scoped)** |
| **Admissible plus tard** | Possible sous GO Morris dédié plateforme — hors scope |
| **Conformité A52-D03.1** | Pourrait un jour porter `.1`, mais **pas** le plus petit pas |

**Challenge AS-4 :** Utile maintenant ? **Non.** Plus simple existe ? **Oui — AS-1.** Sélectionne IAM ? **Oui → interdit.** Repo-first minimal ? **Non.**

---

## 13. Matrice comparative

| Critère | AS-1 | AS-2 | AS-3 | AS-4 |
| --- | --- | --- | --- | --- |
| Statut | OPTION — NOT SELECTED | OPTION — NOT SELECTED | OPTION — NOT SELECTED | OPTION — NOT SELECTED |
| A52-D03.1 | YES | CONDITIONAL | **NO** | Over-scoped |
| Admissible REAL | YES | CONDITIONAL | **NOT ADMISSIBLE FOR REAL…** | Deferred |
| Réutilise AuthorityResolver | YES | YES | Partial/local | Unknown/platform |
| Second moteur | NO | NO | Risk | Risk platform |
| Séparation authn/authz/ack/exec | FORTE | FRAGILE | FAIBLE | Variable |
| Confused deputy risk | Bas | **Haut** | Haut | Variable |
| IAM select | NON | NON | NON | **OUI (interdit)** |
| Product persistence select | NON | NON | NON | **Souvent OUI** |
| Dette | Faible–moy. | Coupling F3 | Fausse sécurité | Très haute |
| Testabilité | Haute | Moyenne | Haute (test only) | Basse court terme |
| Alignement F3-D01/D02/D03/D07 | Fort | Moyen | Conflit REAL | Hors bornage |
| Delivery futur borné | Oui | Oui (risqué) | Non pour REAL | Trop large |

---

## 14. Dette / simplicité / sécurité

| Dimension | Lecture |
| --- | --- |
| **Simplicité vraie** | AS-1 ajoute une surface dédiée mais **réduit** la complexité de preuve sécurité vs AS-2 |
| **Dette** | AS-2 crée dette de couplage confirm↔execute ; AS-4 crée dette plateforme ; AS-3 crée dette de fausse équivalence REAL |
| **Sécurité** | AS-1 maximise privilege separation et anti–confused-deputy |
| **Fail-closed** | Toutes options admissibles doivent fail-closed ; AS-3 fail « ouvert » conceptuellement pour REAL |

---

## 15. Recommandation

**Option recommandée :** **AS-1 — DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + provider-agnostic identity port**

**Statut de la recommandation :** `RECOMMENDED — NOT DECIDED`

### Pourquoi AS-1

- Satisfait **A52-D03.1** sans choisir un fournisseur IAM.
- Provider-agnostic identity port.
- Maximise réutilisation T-A3 / T-A4 / T-A5.
- Évite un second moteur d'autorité.
- Sépare authn / authz / ack / execution.
- Évite plateforme IAM prématurée (AS-4).
- Minimise les nouveaux composants (ports + surface ack).
- Compatible Delivery borné futur.
- Conserve fail-closed.
- Audit repo : **aucune** surface existante meilleure n'a été trouvée.

### Pourquoi pas les autres

| Option | Motif |
| --- | --- |
| AS-2 | Risque confused deputy / fusion confirm+execute ; conformité seulement conditionnelle |
| AS-3 | **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** |
| AS-4 | Over-scoped / deferred ; sélection IAM/platform interdite par ce GO |

---

## 16. Décision proposée Morris

**Statut :** `PROPOSED DECISION — MORRIS GO REQUIRED`

**Proposition (non adoptée) :**

> Adopter **AS-1** comme frontière d'architecture portant A52-D03.1 pour le futur pilote Cursor REAL F3 : surface Critical Ack authentifiée dédiée + port d'identité provider-agnostic ; conserver `AuthorityResolverPort` comme unique frontière authz ; ne sélectionner ni IAM ni product persistence ; ne pas consommer Gate D ; ne pas autoriser Cursor REAL ; laisser R-T-A3-1 / R-T-A3-2 OPEN HARD.

**Interdit dans ce document :** `DECIDED — ADOPTED BY MORRIS` pour AS-1 (ou toute AS-*).

**Next GO candidat (non consommé) :** voir §22.

---

## 17. Impacts R-T-A3-1

| Avant ce pack | Après recommandation (si Morris adopte plus tard) |
| --- | --- |
| FURTHER REDUCED — REMAINS OPEN · OPEN HARD · BLOCKS REAL | **Reste OPEN HARD · BLOCKS REAL** |
| Gap : pas de surface authn Morris | Gap **cadrée** par AS-1 — **pas fermée** |
| MemoryAuthority insuffisant (F3-D07) | Toujours insuffisant jusqu'à Delivery+preuves |

**Ce cycle ne ferme pas R-T-A3-1.** Il produit seulement le decision pack.

---

## 18. Dépendances R-T-A3-2

Ce cycle porte d'abord sur **R-T-A3-1**.

| Type | Autorisé / interdit |
| --- | --- |
| LOGICAL REQUIREMENT | « Critical ack consumption must be replay-safe across the required failure boundary. » |
| STORAGE TECHNOLOGY DECISION | **Interdit** (pas de PostgreSQL/Supabase/Redis/etc. choisis ici) |

Exigences AS-1 qui dépendent d'un plan durabilité :

**`DEPENDENCY — DURABILITY PLAN DECISION REQUIRED`**

- consommation ack anti-replay **cross-restart** ;
- éventuelle durabilité evidence Morris / audit ;
- crash après Attempt start (politique UNKNOWN — hors décision store).

R-T-A3-2 demeure : **FURTHER REDUCED — REMAINS OPEN · OPEN HARD · BLOCKS REAL**.

---

## 19. Fichiers produit candidats futurs (indicatifs — READ ONLY maintenant)

`app/**` = **READ ONLY** ce cycle. Aucun diff code.

### Likely reused

- `app/lib/oa/decision/ports/authorityResolver.ts`
- `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` (test/fixture only jusqu'à REAL)
- `app/lib/oa/decision/application/requestConfirmation.ts`
- `app/lib/oa/decision/application/grantConfirmation.ts`
- `app/lib/oa/decision/application/consumeConfirmation.ts`
- `app/lib/oa/decision/application/verifyAuthority.ts`
- `app/lib/oa/decision/domain/types.ts`
- `app/lib/oa/execution-contract/**` (confirm path)
- Ports audit T-A3/T-A4

### New port / interface candidates (indicatif)

- `AuthenticatedIdentityPort` (ou équivalent) — **sans** choisir provider
- Critical Ack application service (binding exact → Confirmation)

### New server-side surface candidate (indicatif)

- Server action / route handler **Critical Ack only** (pas execute)

### Tests candidates (futur Delivery)

- Authn principal ignored from client payload
- Morris gate séparée
- Stale version/digest refused
- Double consume refused
- CSRF/origin (si web)
- Provider down ⇒ fail-closed
- Restart sans durable proof ⇒ fail-closed

### Documentation impacts

- Mettre à jour index framing **après** adoption Morris (pas ce cycle ; README Gate C reste immuable ici)

---

## 20. Tests nécessaires au futur Delivery (et validation read-only actuelle)

### Futur Delivery (non exécuté ici)

Voir §19 — suites authn/ack/binding/replay/CSRF/restart.

### Validation read-only actuelle (invariants existants)

Cibles utiles :

- vitest T-A3 decision/authority
- vitest F3 fixture vertical-slice

Pour chaque suite documenter : PASS/FAIL · prouve · ne prouve pas.

**PASS ≠ authenticated identity surface exists.**
**PASS ≠ R-T-A3-1 closed.**

---

## 21. Anti-claims

Ce pack **ne revendique pas** :

- option AS-* adoptée par Morris ;
- IAM sélectionné ;
- product persistence sélectionnée ;
- HARD R-T-A3-1 / R-T-A3-2 fermés ;
- Gate D consommé ;
- Cursor REAL autorisé ;
- Delivery autorisé ;
- A52-D03.1 implémenté ;
- surface authn existante trouvée ;
- N3 / actorId / displayName / conversation / localhost / CLI comme identité REAL ;
- second moteur d'autorité ;
- fermeture B5 / T-A6 COMPLETE ;
- digest contract inventé s'il est absent de la foundation (marqué logical requirement).

---

## 22. Gates suivants

| Gate | Statut / action |
| --- | --- |
| Morris option selection | **REQUIS** — GO ADOPT ci-dessous |
| Durability Proof Plan (R-T-A3-2) | Probable **après** adoption Authority Surface |
| Delivery borné Authority Surface | Seulement après ADOPT + GO Delivery distinct |
| Gate D | **NOT CONSUMED** — ultérieur |
| Cursor REAL | **BLOCKED** |

### Next GO wording exact (NON CONSOMMÉ)

```
GO ADOPT F3 REAL AUTHORITY SURFACE — AS-1 DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + PROVIDER-AGNOSTIC IDENTITY PORT — AUTHN≠AUTHZ≠CONFIRM≠EXECUTE · AUTHORITYRESOLVERPORT PRESERVED · A52-D03.1 BOUNDARY ONLY — DESIGN DECISION ONLY — NO DELIVERY — NO REAL — IAM/PERSISTENCE NOT SELECTED
```

---

## 23. Verdict

```
F3 REAL AUTHORITY SURFACE DECISION PACK COMPLETE —
A52-D03.1 RECONFIRMED AS MANDATORY BEFORE REAL CRITICAL —
EXISTING AUTHENTICATED IDENTITY SURFACE AUDITED —
VERDICT AUDIT: NO EXISTING_AUTHENTICATED_IDENTITY_SURFACE_FOUND —
AUTHN / AUTHZ / CONFIRMATION / EXECUTION BOUNDARIES DEFINED —
AUTHORITY OPTIONS COMPARED (AS-1..AS-4) —
AS-1 RECOMMENDED — NOT DECIDED —
AS-3 NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION —
AS-4 OVER-SCOPED / DEFERRED —
PROPOSED DECISION — MORRIS GO REQUIRED —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
NO HARD CLOSED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY —
NO REAL EXECUTION —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
READY FOR MORRIS AUTHORITY SURFACE DECISION
```

---

*Fin du decision pack `01-authority-surface-decision.md`. Le README Gate C adjacent n'est pas modifié.*
```

---

## Complete git diff (new file)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/01-authority-surface-decision.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/01-authority-surface-decision.md
new file mode 100644
index 0000000..97b9ad2
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/01-authority-surface-decision.md
@@ -0,0 +1,704 @@
+# 01 — F3 Real Authority Surface Decision Pack
+
+| Champ | Valeur |
+| --- | --- |
+| **Produit** | SFIA Studio — F3 |
+| **Cycle** | 6 — Architecture technique |
+| **Profil** | Critical |
+| **Typologie** | CAPA / DOC |
+| **Critical** | OUI — EXPLICITE |
+| **Gate Morris consommé (ce cycle)** | `GO DECIDE F3 REAL AUTHORITY SURFACE — AUTHENTICATED MORRIS CRITICAL ACK APPROACH — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT` |
+| **Nature** | Decision pack d'architecture — **DESIGN ONLY** |
+| **Sélection d'option** | **NOT DECIDED** — Morris reste l'autorité |
+| **IAM** | **`NOT_SELECTED`** |
+| **Product persistence** | **`NOT_SELECTED`** |
+| **Bounded local persistence** | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** (≠ product persistence) |
+| **Gate D** | **NOT CONSUMED** |
+| **Cursor REAL** | **BLOCKED** |
+| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD — BLOCKS REAL** (jamais fermés ici) |
+| **Statut documentaire** | Observation / Options / Recommandation / Proposition — **strictement séparées** |
+
+> **Sémantique du GO :** le mot *DECIDE* autorise la production du decision pack et d'une recommandation. Il **n'autorise pas** Cursor à sélectionner seul une option structurante. Aucune phrase `DECIDED — ADOPTED BY MORRIS` n'est écrite pour une option AS-* dans ce fichier.
+
+---
+
+## 1. Contexte
+
+La chaîne F3 FIXTURE est intégrée sur `main` (`4b1a058…`, package `ec7d6c8…`, PR #333) :
+
+F2 approved proposal → PREPARE → T-A4 ExecutionContract → confirmation explicite → T-A5 ExecutionAttempt → TestExecutionAdapter FIXTURE → T-A6 Evidence / ReviewBundle → réinjection Project Assistant → recommendation only.
+
+Gate C (`README.md` adjacent, **READ-ONLY** ce cycle) a cadré les prérequis HARD R-T-A3-1 / R-T-A3-2 et a conclu :
+
+**`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`**
+
+Ce cycle répond à la question d'architecture de la surface d'autorité nécessaire **avant** tout pilote Cursor REAL, sans Delivery, sans IAM auto-select, sans product persistence auto-select, sans Gate D, sans fermeture HARD.
+
+---
+
+## 2. GO Morris
+
+```
+GO DECIDE F3 REAL AUTHORITY SURFACE — AUTHENTICATED MORRIS CRITICAL ACK APPROACH — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT
+```
+
+**Consomme :** le gate *Authority Surface Decision* pour produire ce decision pack.
+
+**Ne consomme pas :** sélection d'option AS-* · IAM · product persistence · Gate D · Cursor REAL · Delivery · HARD closure.
+
+**Gates amont :**
+
+| Gate | Statut |
+| --- | --- |
+| A | CONSUMED |
+| B | CONSUMED + QA VALIDATED + MERGED |
+| C | CONSUMED + VALIDATED (artifact README immuable ce cycle) |
+| Authority Surface Decision (courant) | CONSUMED POUR PRODUIRE LE DECISION PACK |
+| Sélection architecture Authority Surface | **NOT DECIDED** tant que Morris n'a pas choisi |
+| D | **NOT CONSUMED** |
+
+---
+
+## 3. Décisions antérieures contraignantes
+
+### 3.1 A52-D03 (déjà adopté — ne pas rouvrir)
+
+Sources :
+
+- `a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md`
+- `a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md`
+
+**`DECIDED — ADOPTED BY MORRIS` :** A52-D03 = **`.3` puis `.1` avant real Critical**.
+
+| Élément | Contenu |
+| --- | --- |
+| Court terme (`.3`) | simulation / read-only / Confirm fail-closed |
+| Avant Critical réel (`.1`) | surface/API Critical **authentifiée + autorisée + auditée + anti-replay** |
+| Effet | aucune exécution Critical réelle autorisée par `.3` seul |
+
+**A52-D03.1** = précondition obligatoire avant REAL Critical. Ce cycle **ne la réouvre pas** ; il décide *quelle frontière d'architecture* la porte, sans choisir le fournisseur IAM.
+
+### 3.2 Interdits comme solution finale REAL (sous A52-D03.1)
+
+Les éléments suivants **ne peuvent pas** être présentés comme solution finale REAL :
+
+- simple `MemoryAuthorityResolver` ;
+- `actorId` `"morris"` ;
+- `displayName` `"Morris"` ;
+- N3 seul ;
+- bouton UI non authentifié ;
+- conversation ChatGPT ;
+- ancien GO textuel ;
+- service interne non authentifié ;
+- fixture authority ;
+- localhost seul comme identité ;
+- CLI locale seule comme identité forte.
+
+Toute option qui ne satisfait pas A52-D03.1 pour REAL doit être marquée :
+
+**`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`**
+
+### 3.3 F3-D01…D11 (extraits pertinents)
+
+| Décision | Portée pour ce pack |
+| --- | --- |
+| F3-D01 | F2 GO = PREPARE-only — jamais launch |
+| F3-D02 | Pilote REAL exige confirmation Morris exacte liée au contrat |
+| F3-D03 | Chaîne T-A4 → T-A5 → T-A6 ; pas de second moteur |
+| F3-D05 | REAL/FIXTURE explicites ; no silent fallback |
+| F3-D07 | Process-local **INSUFFISANT** pour REAL ; fail-closed post-restart |
+| F3-D11 | REAL NO-GO maintenant |
+
+### 3.4 Gate C (cadrage)
+
+- R-T-A3-1 / R-T-A3-2 : **FURTHER REDUCED — REMAINS OPEN** / OPEN HARD / BLOCKS REAL
+- IAM / product persistence : **NOT_SELECTED**
+- Bounded local : SELECTED EXISTING BOUNDED LOCAL ONLY
+- Recommandation Gate C : framing Option A ; package décision futur pour surface d'autorité (ce cycle)
+
+---
+
+## 4. Git Truth
+
+| Élément | Valeur |
+| --- | --- |
+| Worktree | `…/worktrees/f3-real-hard-prerequisites` (réutilisation Gate C) |
+| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
+| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| `origin/main` | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| Staged | empty |
+| Remote framing | **ABSENT** |
+| `app/**` dirty | **none** |
+| Untracked attendus | `…/f3-real-path-hard-prerequisites/README.md` · ce fichier `01-…` · `.tmp-sfia-review/**` |
+| Project commit / push / PR | **0** |
+| Gate C README | READ-ONLY — byte-identical avant/après (SHA-256 + lignes) |
+
+Inbound handoff (attendu) :
+
+| Tip | Blob |
+| --- | --- |
+| `088bc1a213580f78cb635a20b9270410c13f9631` | `a68e88ecdad069bc461c4d0a19839f3942490d7a` |
+
+Template : v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`
+
+---
+
+## 5. Audit auth / session existant (read-only)
+
+### 5.1 Méthode
+
+Recherche sans modification dans `projects/sfia-studio/app` et manifests :
+
+- `next-auth` / Auth.js / `@auth/` / Supabase Auth / Clerk / Lucia / iron-session / better-auth / passport
+- `middleware.ts` / session cookies / JWT verify handlers
+- `getServerSession` / `getSession` / `signIn` / `createServerClient`
+- ports `AuthenticatedActor` / `IdentityPort` / `Principal`
+- dépendances `package.json`
+
+### 5.2 Constats
+
+| Zone | Résultat |
+| --- | --- |
+| Middleware Next auth | **Absent** — `app/README.md` affirme explicitement pas de middleware auth |
+| NextAuth / Auth.js / Supabase Auth / Clerk / Lucia | **Aucune dépendance** dans manifests app/root scannés |
+| `getSession` / session* | **OPS1 conversation session** (`lib/ops1/repository.ts`, `ops1GetSessionAction`) — identité de *session produit OPS1*, **pas** d'authentification humaine Morris |
+| `canActAsMorris` | Flag d'**AuthorityEvidence** process-local via `AuthorityResolverPort` — **pas** une session authn |
+| F2 demo | peut enregistrer `canActAsMorris: true` en mémoire locale (demo) |
+| F3 fixture | enregistre explicitement `canActAsMorris: false` |
+| Surface serveur Critical Ack authentifiée | **Absente** |
+
+### 5.3 Verdict d'audit
+
+**`NO EXISTING_AUTHENTICATED_IDENTITY_SURFACE_FOUND`**
+
+Réaffirme Gate C : **`NO EXISTING AUTHENTICATED MORRIS IDENTITY SURFACE FOUND`**.
+
+Aucune surface réutilisable ne contredit Gate C. **Aucun IAM inventé** pour combler le gap.
+
+---
+
+## 6. Authority contract actuel (à préserver)
+
+### 6.1 Port unique
+
+`AuthorityResolverPort` (`app/lib/oa/decision/ports/authorityResolver.ts`) est la **unique source logique** de vérification d'autorité (N1/N2/N3 + Morris gate).
+
+Implémentation actuelle : `MemoryAuthorityResolver` (process-local, evidence immutable après `register`).
+
+### 6.2 Invariants runtime (confirmés dans le code)
+
+| Invariant | Comportement actuel |
+| --- | --- |
+| Client `authorityLevel` | **NEVER TRUST** (ignoré) |
+| `displayName` | **NEVER TRUST** (ignoré) |
+| `actorId` contenant « morris » | **NEVER TRUST** comme preuve |
+| N3 | **≠** Morris |
+| Morris | exige `canActAsMorris: true` (ou grant dédié vérifié) |
+| Scope | **exact match** |
+| Evidence expirée | refusée |
+| Hostile injection | ignorée |
+| Evidence | immutable après register (`evidence_immutable`) |
+
+### 6.3 Confirmation (T-A3)
+
+- `grantConfirmation` : `requested → granted` ; refuse expired / wrong state ; race-safe sous mutex process-local
+- `consumeConfirmation` : `granted → consumed` ; **double consume interdit** (`CONFIRMATION_ALREADY_CONSUMED`)
+- Champs utiles déjà présents : `confirmationId`, `actionRef`, `scope`, `idempotencyKey`, `decisionRef`, `expiresAt`, `requestedBy` / `requestedTo`, status lifecycle
+
+### 6.4 Limitation mémoire (F3-D07)
+
+`MemoryAuthorityResolver` + stores process-local :
+
+- **insuffisants pour REAL** ;
+- restart ⇒ fail-closed attendu (pas de reconstruction depuis conversation) ;
+- **ne satisfont pas** A52-D03.1 comme surface finale REAL.
+
+---
+
+## 7. Problème à résoudre
+
+### 7.1 Ce qui n'est PAS la question
+
+« Faut-il une identité authentifiée ? » — **déjà décidé** (A52-D03.1).
+
+### 7.2 Question exacte
+
+> **QUELLE FRONTIÈRE D'ARCHITECTURE DOIT PORTER A52-D03.1 POUR UN FUTUR PILOTE CURSOR REAL, SANS ENCORE CHOISIR LE FOURNISSEUR IAM NI LE STORE PRODUIT ?**
+
+Le pack doit permettre à Morris de choisir la **forme** de la surface.
+
+---
+
+## 8. Invariants (normatifs pour toute option admissible)
+
+1. `AuthorityResolverPort` reste la frontière d'**authz** — pas de second moteur.
+2. Authn ≠ Authz ≠ Confirmation ≠ Execution.
+3. Conversation / GO textuel / ChatGPT **jamais** source d'autorité.
+4. Client fields (`actorId` heuristique, `displayName`, `authorityLevel`) **never trust**.
+5. N3 ≠ Morris ; `canActAsMorris` explicite requis.
+6. Scope **exact** ; binding contrat (id / version / digest si dispo) obligatoire pour Critical Ack REAL.
+7. Anti-replay : grant/ack consommable une fois ou équivalent fail-closed.
+8. F2 GO reste PREPARE-only (F3-D01).
+9. Authority surface **ne démarre pas** Cursor ; Confirmation **ne crée pas** implicitement Attempt.
+10. Gate D reste séparé ; IAM / product persistence restent **NOT_SELECTED** tant que Morris n'a pas décidé.
+11. Fail-closed sur identité absente, ack manquant, stale binding, restart sans preuve durable requise.
+12. Aucune option admissible ne peut déclarer HARD CLOSED.
+
+---
+
+## 9. Séparation authn / authz / confirmation / execution
+
+| Couche | Question | Porte | Ne fait pas |
+| --- | --- | --- | --- |
+| **AUTHENTICATION** | Qui est l'acteur ? | Identity port / session authentifiée (future, provider-agnostic) | N'accorde pas Morris ; ne confirme pas ; ne lance pas |
+| **AUTHORIZATION** | Cette identité peut-elle agir comme Morris pour ce scope ? | `AuthorityResolverPort` + evidence / grant | Ne remplace pas l'ack Critical ; ne crée pas Attempt |
+| **CONFIRMATION** | Cette identité autorise-t-elle **CETTE** action exacte maintenant ? | Critical Ack + Confirmation T-A3 (binding exact) | Ne lance pas Cursor ; ≠ click UI non lié |
+| **EXECUTION** | Une Attempt peut-elle être créée/lancée ? | T-A4 contract authz → T-A5 Attempt | Hors de la surface d'ack ; Gate D / REAL séparés |
+
+**Chaîne obligatoire :**
+
+```
+authenticated identity
+  → verified Morris authority (AuthorityResolverPort)
+  → exact Critical acknowledgement / Confirmation
+  → ExecutionContract authorization
+  → T-A5 Attempt
+```
+
+**Interdit :**
+
+```
+UI click → Cursor
+```
+
+---
+
+## 10. Exigences A52-D03.1 (contrat minimum de surface candidate)
+
+### A. Authenticated actor context
+
+- Identité issue d'une **source authentifiée**.
+- **Jamais** construite depuis le payload F3 client.
+- Port d'identité **provider-agnostic** (IAM = NOT_SELECTED).
+
+### B. Morris authorization
+
+- Identité authentifiée ≠ autorité Morris.
+- Contrôle séparé : `canActAsMorris=true` pour le **scope exact** via `AuthorityResolverPort`.
+
+### C. Critical acknowledgement
+
+- Ack humain **explicite** (pas de silent grant).
+
+### D. Binding exact (mapper au contrat actuel)
+
+| Exigence logique | Mapping fondation existante |
+| --- | --- |
+| Actor identity | `ActorReference.actorId` **après** authn server-side — jamais trust client |
+| projectId | `HumanDecision.projectId` / contract project binding |
+| decisionId / proposal | `Confirmation.decisionRef` / proposal id F3 |
+| executionContractId | `ExecutionContract.executionContractId` |
+| contract version | `ExecutionContract.version` |
+| contract digest | si disponible dans contrat/foundation — sinon **LOGICAL REQUIREMENT** à matérialiser en Delivery futur sans inventer un champ absent |
+| actionRef | `Confirmation.actionRef` |
+| exact scope | `Confirmation.scope` / evidence `scope` |
+| required authority | `requiredAuthority` / `VerifyAuthorityRequest.requiredLevel` + Morris gate |
+| expiration | `Confirmation.expiresAt` / evidence `expiresAt` |
+| correlation / idempotency / replay | `Confirmation.idempotencyKey` + status `consumed` |
+
+### E. Anti-replay
+
+- Consommation unique (`consumeConfirmation`) ou équivalent fail-closed.
+
+### F. Audit
+
+Demande · grant/refusal · consumption · expiry · actor · scope · binding · result — **sans secrets**.
+
+### G. Restart
+
+| Information | Posture |
+| --- | --- |
+| Identité session / grant non durable | peut disparaître ⇒ **fail-closed** |
+| Consumption / ack nécessaire au-delà du process | **LOGICAL REQUIREMENT** — **DEPENDENCY — DURABILITY PLAN DECISION REQUIRED** (R-T-A3-2) ; **pas** de techno store choisie ici |
+
+### H. Conversation
+
+Conversation = **jamais** source d'autorité.
+
+### I. Frontière F3
+
+- F2 GO PREPARE-only.
+- Authority surface ≠ start Cursor.
+- Confirmation ≠ implicit Attempt.
+- Gate D séparé.
+
+---
+
+## 11. Threat model (AUTH-TM-01…18)
+
+Légende preuve : **FOUNDATION** = contrôle T-A3/T-A4/F3 existant · **GAP** = manque surface authn · **DEP-DUR** = dépend plan durabilité R-T-A3-2 · **N/A-IAM** = dépend adapter IAM futur (NOT_SELECTED).
+
+| ID | Menace | Fail-safe attendu | Contrôle existant | Nouveau contrôle nécessaire | Impact R-T-A3-1 | Dep. IAM/pers. | Preuve |
+| --- | --- | --- | --- | --- | --- | --- | --- |
+| AUTH-TM-01 | Client forge `actorId=Morris` | Ignore heuristique ; authn server | Never-trust actorId as Morris | Authenticated actor context | BLOCKS REAL si absent | IAM adapter | FOUNDATION + GAP |
+| AUTH-TM-02 | Client forge `displayName=Morris` | Ignoré | `void displayName` | — (conserver) | réduit | — | FOUNDATION |
+| AUTH-TM-03 | Client forge `authorityLevel=N3` | Ignoré | `void authorityLevel` | — (conserver) | réduit | — | FOUNDATION |
+| AUTH-TM-04 | N3 réel sans `canActAsMorris` | `morris_gate_denied` | requireMorrisGate | Lier authn→evidence Morris | BLOCKS REAL sans grant | — | FOUNDATION |
+| AUTH-TM-05 | Session authn mauvais user | Deny Morris / wrong actor | — | Authn principal ≠ payload | BLOCKS REAL | N/A-IAM | GAP |
+| AUTH-TM-06 | Morris authn mauvais project/scope | `scope_mismatch` | scope exact | Bind project+scope dans ack | BLOCKS REAL | — | FOUNDATION + GAP bind |
+| AUTH-TM-07 | Ack lié à ancienne version/digest | Refuse stale | contract version OCC F3 | Bind version(+digest) dans ack | BLOCKS REAL | — | PARTIEL + GAP |
+| AUTH-TM-08 | Ack rejoué après consume | `CONFIRMATION_ALREADY_CONSUMED` | consume once | Persistance consume cross-restart | + R-T-A3-2 | DEP-DUR | FOUNDATION local / GAP durable |
+| AUTH-TM-09 | Ack expiré | Refuse | expiresAt checks | — (conserver) | réduit | — | FOUNDATION |
+| AUTH-TM-10 | Restart avant consumption | Fail-closed ; pas de reconstruction conversation | F3-D07 | Policy restart + éventuelle durabilité grant | OPEN HARD | DEP-DUR | GAP |
+| AUTH-TM-11 | Restart après consume avant Attempt | Fail-closed ou preuve durable consumption | process-local | Durability plan | OPEN / DEP | DEP-DUR | GAP |
+| AUTH-TM-12 | Crash après Attempt start | Attempt UNKNOWN / no auto-retry | F3-D08 · fixture honesty | Hors AS primary ; durability Attempt | surtout R-T-A3-2 | DEP-DUR | PARTIEL |
+| AUTH-TM-13 | Conversation contient ancien GO | Ignore as authority | doctrine / F3-D07 | Surface ack indépendante conversation | BLOCKS REAL si confondu | — | FOUNDATION doctrine |
+| AUTH-TM-14 | Vol seul d'identifiant d'ack | Require authn + authz + binding | partial | Authn session + CSRF / origin | BLOCKS REAL | N/A-IAM | GAP |
+| AUTH-TM-15 | Double-submit concurrent | Single consume / single launch | mutex consume · F3 double-invoke | Conserver + durable lock | réduit local | DEP-DUR cross-proc | FOUNDATION local |
+| AUTH-TM-16 | Identity provider indisponible | Fail-closed (pas de Critical) | — | Adapter timeout/deny | fail-closed | N/A-IAM | GAP |
+| AUTH-TM-17 | Audit indisponible | Fail-closed ou policy explicite | audit events locaux | Audit port durable | OPEN | DEP-DUR possible | PARTIEL |
+| AUTH-TM-18 | CSRF / confused deputy (web) | Origin/CSRF + server authn | — | Surface web protections | BLOCKS REAL web | N/A-IAM | GAP |
+
+---
+
+## 12. Options d'architecture
+
+**Statut de chaque option :** `OPTION — NOT SELECTED`
+
+### OPTION AS-1 — DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + provider-agnostic identity port
+
+**Statut :** `OPTION — NOT SELECTED`
+
+| Critère | Contenu |
+| --- | --- |
+| **Description** | Surface serveur dédiée Critical Ack ; identity provider derrière un **port agnostique** ; `AuthorityResolverPort` conserve l'authz ; binding exact vers Confirmation / ExecutionContract ; IAM reste NOT_SELECTED |
+| **Composants réutilisés** | `AuthorityResolverPort` · Confirmation request/grant/consume · ExecutionContract confirm path · audit ports T-A3/T-A4 · invariants never-trust |
+| **Nouveaux contrats** | `AuthenticatedIdentityPort` (nom indicatif) · CriticalAckCommand (binding exact) · mapping authn→actorId serveur |
+| **Surface publique** | Endpoint/server action Critical Ack **dédié** (pas launch) |
+| **Authn/authz** | Strictement séparés |
+| **Lien AuthorityResolver** | Unique frontière authz |
+| **Lien Confirmation** | Ack produit/consomme Confirmation existante |
+| **Lien ExecutionContract** | Binding id/version/(digest) ; confirm contract seulement après ack+verify |
+| **Lien Attempt** | Aucun — Attempt reste T-A5 après contract confirmed |
+| **Anti-replay** | consume once (+ durability dep) |
+| **Restart** | fail-closed sans preuve ; durable consume = DEP R-T-A3-2 |
+| **Audit** | request/grant/refuse/consume/expiry |
+| **IAM dependency** | Port only — **NOT_SELECTED** |
+| **Persistence dependency** | Logical anti-replay durable = **DEP — DURABILITY PLAN** ; pas de store choisi |
+| **Impact R-T-A3-1** | Adresse le gap principal identité/ack authentifiés |
+| **Impact R-T-A3-2** | Identifie deps ; ne décide pas |
+| **Threat model** | Couvre TM-01…09,13–16,18 en design ; 10–12/17 via deps |
+| **Attack surface** | Une surface ack bornée (plus petite qu'IAM platform) |
+| **Dette** | Faible–moyenne ; ports testables |
+| **Réversibilité** | Haute (ports) |
+| **Complexité** | Moyenne bornée |
+| **Testabilité** | Haute (fake identity adapter) |
+| **Conformité A52-D03.1** | **OUI** (par conception, sans choisir IAM) |
+| **Compat F3-D01…D11** | OUI (D01/D02/D03/D07) |
+| **Admissible futur REAL** | **YES** (sous Delivery+QA+Morris+deps durabilité) |
+| **Delivery nécessaire** | **YES** (futur GO distinct) |
+| **Décision Morris nécessaire** | **YES** — adoption AS-1 |
+
+**Challenge AS-1 :** Utile maintenant (comme décision) ? **Oui (design).** Dette ? **Bornée.** Plus simple ? **AS-2 paraît plus simple mais couple UI.** Repo-first ? **Oui.** Réutilise AuthorityResolver ? **Oui.** Second moteur ? **Non.** Confond authn/authz ? **Non.** Confond confirm/launch ? **Non.** IAM implicite ? **Non.** Product persistence implicite ? **Non.** Restart illicit authority ? **Non si fail-closed.** Vieux GO reactive ? **Non.** Forge actorId ? **Non si authn.** Binding exact ? **Oui (exigé).** Replay fail-closed ? **Oui (+ DEP durable).** A52-D03.1 ? **Oui.** Gain justifie surface ? **Oui.**
+
+---
+
+### OPTION AS-2 — EXTEND EXISTING F3 CONFIRMATION SURFACE WITH SEPARATE AUTHENTICATED ACTOR PROOF
+
+**Statut :** `OPTION — NOT SELECTED`
+
+| Critère | Contenu |
+| --- | --- |
+| **Description** | Réutiliser `confirmAndExecuteF3Fixture` / actions F3 ; injecter preuve authn serveur ; garder séparation authn/authz/confirm **en discipline** |
+| **Réutilisé** | Surface F3 confirm+execute · AuthorityResolver · Confirmation |
+| **Nouveaux contrats** | Authenticated actor proof injectée dans le flux F3 existant |
+| **Surface publique** | Étend la surface F3 existante (pas de surface ack dédiée) |
+| **Risques** | **Confused deputy** · coupling UI/F3↔authority · raccourci psychologique click=authority · confirmAndExecute combine confirm+attempt (même si gated) |
+| **Authn/authz** | Possible mais **fragile** (même handler) |
+| **Lien Attempt** | Même entrée produit aujourd'hui enchaîne confirm→attempt (fixture) — risque de fusion conceptuelle pour REAL |
+| **Anti-replay / audit / restart** | Comme AS-1 si discipline, mais plus dur à prouver |
+| **IAM / persistence** | NOT_SELECTED / DEP-DUR identiques |
+| **Impact R-T-A3-1** | Peut adresser gap si authn réelle, mais preuve plus faible |
+| **Conformité A52-D03.1** | **CONDITIONAL** — seulement si séparation stricte prouvée ; sinon insuffisant |
+| **Admissible futur REAL** | **CONDITIONAL** |
+| **Delivery nécessaire** | YES |
+| **Décision Morris** | YES si choisie |
+
+**Challenge AS-2 :** Utile ? **Partiel.** Dette coupling ? **Oui.** Plus simple ? **En LOC oui ; en sécurité non.** Repo-first ? **Oui.** Second moteur ? **Non.** Confond authn/authz ? **Risque élevé.** Confond confirm/launch ? **Risque élevé (confirmAndExecute).** IAM implicite ? **Non.** Persistence implicite ? **Non.** Restart illicit ? **Risque si mal borné.** A52-D03.1 vraiment ? **Conditionnel.** Gain vs surface dédiée ? **Faible face au risque confused deputy.**
+
+---
+
+### OPTION AS-3 — INTERNAL / LOCAL AUTHORITY SURFACE
+
+**Statut :** `OPTION — NOT SELECTED`
+
+Exemples : internal-only service · localhost · OS-user · CLI locale.
+
+| Critère | Contenu |
+| --- | --- |
+| **Description** | Traiter un canal local/interne comme identité « assez forte » |
+| **Comparaison A52-D03.1** | A52-D03.1 exige API/surface **authentifiée + autorisée + auditée + anti-replay** — pas localhost/CLI comme substitut |
+| **Admissible futur REAL** | **NO** |
+| **Label obligatoire** | **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** |
+| **Usage possible** | Outil de **test/simulation** seulement (aligné `.3`) — **jamais** REAL Critical |
+| **IAM / persistence** | Ne sélectionne pas IAM produit ; ne satisfait pas pour autant `.1` |
+| **Delivery pour REAL** | N/A — non admissible |
+
+**Challenge AS-3 :** Satisfait A52-D03.1 ? **Non.** Admissible REAL ? **Non.** Peut rester harness test ? **Oui, hors REAL.**
+
+---
+
+### OPTION AS-4 — FULL IAM / PRODUCT IDENTITY PLATFORM FIRST
+
+**Statut :** `OPTION — NOT SELECTED` · **over-scoped / deferred**
+
+| Critère | Contenu |
+| --- | --- |
+| **Description** | Construire d'abord une plateforme IAM / identité produit complète |
+| **Évaluation** | Comparaison seulement — **GO interdit auto-select** |
+| **Dette / complexité** | Disproportionnée pour le gap borné R-T-A3-1 |
+| **IAM** | Impliquerait sélection — **interdit ici** |
+| **Product persistence** | Souvent couplé — **interdit ici** |
+| **Admissible comme prochain pas** | **NO (deferred / over-scoped)** |
+| **Admissible plus tard** | Possible sous GO Morris dédié plateforme — hors scope |
+| **Conformité A52-D03.1** | Pourrait un jour porter `.1`, mais **pas** le plus petit pas |
+
+**Challenge AS-4 :** Utile maintenant ? **Non.** Plus simple existe ? **Oui — AS-1.** Sélectionne IAM ? **Oui → interdit.** Repo-first minimal ? **Non.**
+
+---
+
+## 13. Matrice comparative
+
+| Critère | AS-1 | AS-2 | AS-3 | AS-4 |
+| --- | --- | --- | --- | --- |
+| Statut | OPTION — NOT SELECTED | OPTION — NOT SELECTED | OPTION — NOT SELECTED | OPTION — NOT SELECTED |
+| A52-D03.1 | YES | CONDITIONAL | **NO** | Over-scoped |
+| Admissible REAL | YES | CONDITIONAL | **NOT ADMISSIBLE FOR REAL…** | Deferred |
+| Réutilise AuthorityResolver | YES | YES | Partial/local | Unknown/platform |
+| Second moteur | NO | NO | Risk | Risk platform |
+| Séparation authn/authz/ack/exec | FORTE | FRAGILE | FAIBLE | Variable |
+| Confused deputy risk | Bas | **Haut** | Haut | Variable |
+| IAM select | NON | NON | NON | **OUI (interdit)** |
+| Product persistence select | NON | NON | NON | **Souvent OUI** |
+| Dette | Faible–moy. | Coupling F3 | Fausse sécurité | Très haute |
+| Testabilité | Haute | Moyenne | Haute (test only) | Basse court terme |
+| Alignement F3-D01/D02/D03/D07 | Fort | Moyen | Conflit REAL | Hors bornage |
+| Delivery futur borné | Oui | Oui (risqué) | Non pour REAL | Trop large |
+
+---
+
+## 14. Dette / simplicité / sécurité
+
+| Dimension | Lecture |
+| --- | --- |
+| **Simplicité vraie** | AS-1 ajoute une surface dédiée mais **réduit** la complexité de preuve sécurité vs AS-2 |
+| **Dette** | AS-2 crée dette de couplage confirm↔execute ; AS-4 crée dette plateforme ; AS-3 crée dette de fausse équivalence REAL |
+| **Sécurité** | AS-1 maximise privilege separation et anti–confused-deputy |
+| **Fail-closed** | Toutes options admissibles doivent fail-closed ; AS-3 fail « ouvert » conceptuellement pour REAL |
+
+---
+
+## 15. Recommandation
+
+**Option recommandée :** **AS-1 — DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + provider-agnostic identity port**
+
+**Statut de la recommandation :** `RECOMMENDED — NOT DECIDED`
+
+### Pourquoi AS-1
+
+- Satisfait **A52-D03.1** sans choisir un fournisseur IAM.
+- Provider-agnostic identity port.
+- Maximise réutilisation T-A3 / T-A4 / T-A5.
+- Évite un second moteur d'autorité.
+- Sépare authn / authz / ack / execution.
+- Évite plateforme IAM prématurée (AS-4).
+- Minimise les nouveaux composants (ports + surface ack).
+- Compatible Delivery borné futur.
+- Conserve fail-closed.
+- Audit repo : **aucune** surface existante meilleure n'a été trouvée.
+
+### Pourquoi pas les autres
+
+| Option | Motif |
+| --- | --- |
+| AS-2 | Risque confused deputy / fusion confirm+execute ; conformité seulement conditionnelle |
+| AS-3 | **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** |
+| AS-4 | Over-scoped / deferred ; sélection IAM/platform interdite par ce GO |
+
+---
+
+## 16. Décision proposée Morris
+
+**Statut :** `PROPOSED DECISION — MORRIS GO REQUIRED`
+
+**Proposition (non adoptée) :**
+
+> Adopter **AS-1** comme frontière d'architecture portant A52-D03.1 pour le futur pilote Cursor REAL F3 : surface Critical Ack authentifiée dédiée + port d'identité provider-agnostic ; conserver `AuthorityResolverPort` comme unique frontière authz ; ne sélectionner ni IAM ni product persistence ; ne pas consommer Gate D ; ne pas autoriser Cursor REAL ; laisser R-T-A3-1 / R-T-A3-2 OPEN HARD.
+
+**Interdit dans ce document :** `DECIDED — ADOPTED BY MORRIS` pour AS-1 (ou toute AS-*).
+
+**Next GO candidat (non consommé) :** voir §22.
+
+---
+
+## 17. Impacts R-T-A3-1
+
+| Avant ce pack | Après recommandation (si Morris adopte plus tard) |
+| --- | --- |
+| FURTHER REDUCED — REMAINS OPEN · OPEN HARD · BLOCKS REAL | **Reste OPEN HARD · BLOCKS REAL** |
+| Gap : pas de surface authn Morris | Gap **cadrée** par AS-1 — **pas fermée** |
+| MemoryAuthority insuffisant (F3-D07) | Toujours insuffisant jusqu'à Delivery+preuves |
+
+**Ce cycle ne ferme pas R-T-A3-1.** Il produit seulement le decision pack.
+
+---
+
+## 18. Dépendances R-T-A3-2
+
+Ce cycle porte d'abord sur **R-T-A3-1**.
+
+| Type | Autorisé / interdit |
+| --- | --- |
+| LOGICAL REQUIREMENT | « Critical ack consumption must be replay-safe across the required failure boundary. » |
+| STORAGE TECHNOLOGY DECISION | **Interdit** (pas de PostgreSQL/Supabase/Redis/etc. choisis ici) |
+
+Exigences AS-1 qui dépendent d'un plan durabilité :
+
+**`DEPENDENCY — DURABILITY PLAN DECISION REQUIRED`**
+
+- consommation ack anti-replay **cross-restart** ;
+- éventuelle durabilité evidence Morris / audit ;
+- crash après Attempt start (politique UNKNOWN — hors décision store).
+
+R-T-A3-2 demeure : **FURTHER REDUCED — REMAINS OPEN · OPEN HARD · BLOCKS REAL**.
+
+---
+
+## 19. Fichiers produit candidats futurs (indicatifs — READ ONLY maintenant)
+
+`app/**` = **READ ONLY** ce cycle. Aucun diff code.
+
+### Likely reused
+
+- `app/lib/oa/decision/ports/authorityResolver.ts`
+- `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` (test/fixture only jusqu'à REAL)
+- `app/lib/oa/decision/application/requestConfirmation.ts`
+- `app/lib/oa/decision/application/grantConfirmation.ts`
+- `app/lib/oa/decision/application/consumeConfirmation.ts`
+- `app/lib/oa/decision/application/verifyAuthority.ts`
+- `app/lib/oa/decision/domain/types.ts`
+- `app/lib/oa/execution-contract/**` (confirm path)
+- Ports audit T-A3/T-A4
+
+### New port / interface candidates (indicatif)
+
+- `AuthenticatedIdentityPort` (ou équivalent) — **sans** choisir provider
+- Critical Ack application service (binding exact → Confirmation)
+
+### New server-side surface candidate (indicatif)
+
+- Server action / route handler **Critical Ack only** (pas execute)
+
+### Tests candidates (futur Delivery)
+
+- Authn principal ignored from client payload
+- Morris gate séparée
+- Stale version/digest refused
+- Double consume refused
+- CSRF/origin (si web)
+- Provider down ⇒ fail-closed
+- Restart sans durable proof ⇒ fail-closed
+
+### Documentation impacts
+
+- Mettre à jour index framing **après** adoption Morris (pas ce cycle ; README Gate C reste immuable ici)
+
+---
+
+## 20. Tests nécessaires au futur Delivery (et validation read-only actuelle)
+
+### Futur Delivery (non exécuté ici)
+
+Voir §19 — suites authn/ack/binding/replay/CSRF/restart.
+
+### Validation read-only actuelle (invariants existants)
+
+Cibles utiles :
+
+- vitest T-A3 decision/authority
+- vitest F3 fixture vertical-slice
+
+Pour chaque suite documenter : PASS/FAIL · prouve · ne prouve pas.
+
+**PASS ≠ authenticated identity surface exists.**
+**PASS ≠ R-T-A3-1 closed.**
+
+---
+
+## 21. Anti-claims
+
+Ce pack **ne revendique pas** :
+
+- option AS-* adoptée par Morris ;
+- IAM sélectionné ;
+- product persistence sélectionnée ;
+- HARD R-T-A3-1 / R-T-A3-2 fermés ;
+- Gate D consommé ;
+- Cursor REAL autorisé ;
+- Delivery autorisé ;
+- A52-D03.1 implémenté ;
+- surface authn existante trouvée ;
+- N3 / actorId / displayName / conversation / localhost / CLI comme identité REAL ;
+- second moteur d'autorité ;
+- fermeture B5 / T-A6 COMPLETE ;
+- digest contract inventé s'il est absent de la foundation (marqué logical requirement).
+
+---
+
+## 22. Gates suivants
+
+| Gate | Statut / action |
+| --- | --- |
+| Morris option selection | **REQUIS** — GO ADOPT ci-dessous |
+| Durability Proof Plan (R-T-A3-2) | Probable **après** adoption Authority Surface |
+| Delivery borné Authority Surface | Seulement après ADOPT + GO Delivery distinct |
+| Gate D | **NOT CONSUMED** — ultérieur |
+| Cursor REAL | **BLOCKED** |
+
+### Next GO wording exact (NON CONSOMMÉ)
+
+```
+GO ADOPT F3 REAL AUTHORITY SURFACE — AS-1 DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + PROVIDER-AGNOSTIC IDENTITY PORT — AUTHN≠AUTHZ≠CONFIRM≠EXECUTE · AUTHORITYRESOLVERPORT PRESERVED · A52-D03.1 BOUNDARY ONLY — DESIGN DECISION ONLY — NO DELIVERY — NO REAL — IAM/PERSISTENCE NOT SELECTED
+```
+
+---
+
+## 23. Verdict
+
+```
+F3 REAL AUTHORITY SURFACE DECISION PACK COMPLETE —
+A52-D03.1 RECONFIRMED AS MANDATORY BEFORE REAL CRITICAL —
+EXISTING AUTHENTICATED IDENTITY SURFACE AUDITED —
+VERDICT AUDIT: NO EXISTING_AUTHENTICATED_IDENTITY_SURFACE_FOUND —
+AUTHN / AUTHZ / CONFIRMATION / EXECUTION BOUNDARIES DEFINED —
+AUTHORITY OPTIONS COMPARED (AS-1..AS-4) —
+AS-1 RECOMMENDED — NOT DECIDED —
+AS-3 NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION —
+AS-4 OVER-SCOPED / DEFERRED —
+PROPOSED DECISION — MORRIS GO REQUIRED —
+R-T-A3-1 REMAINS OPEN HARD —
+R-T-A3-2 REMAINS OPEN HARD —
+NO HARD CLOSED —
+IAM REMAINS NOT_SELECTED —
+PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
+NO PRODUCT MUTATION —
+NO DELIVERY —
+NO REAL EXECUTION —
+GATE D NOT CONSUMED —
+CURSOR REAL BLOCKED —
+READY FOR MORRIS AUTHORITY SURFACE DECISION
+```
+
+---
+
+*Fin du decision pack `01-authority-surface-decision.md`. Le README Gate C adjacent n'est pas modifié.*
```

---

## Mutation counters

| Counter | Value |
| --- | --- |
| Project commits | 0 |
| Project push | 0 |
| PR | 0 |
| Merge | 0 |
| Force | 0 |
| Stage | 0 |
| app/** edits | 0 |
| Gate C README mutations | 0 |
| IAM selected | 0 |
| Product persistence selected | 0 |
| Cursor REAL | 0 |
| Gate D consumed | 0 |
| HARD closed | 0 |

---

## Review Handoff

| Field | Value |
| --- | --- |
| Mode | publish-in-cycle |
| Branch | sfia/review-handoff |
| Canonical | sfia-review-handoff/latest-chatgpt-review.md |
| Source | .tmp-sfia-review/chatgpt-review.md |
| Commit message | `docs(review-handoff): publish F3 real authority surface decision` |
| Push | L3 FF only — no force |
| Inbound tip/blob | `088bc1a…` / `a68e88e…` |
| FINAL tip/blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Next Morris GO candidate (NOT CONSUMED)

```
GO ADOPT F3 REAL AUTHORITY SURFACE — AS-1 DEDICATED AUTHENTICATED CRITICAL ACK SURFACE + PROVIDER-AGNOSTIC IDENTITY PORT — AUTHN≠AUTHZ≠CONFIRM≠EXECUTE · AUTHORITYRESOLVERPORT PRESERVED · A52-D03.1 BOUNDARY ONLY — DESIGN DECISION ONLY — NO DELIVERY — NO REAL — IAM/PERSISTENCE NOT SELECTED
```

After adoption: Durability Proof Plan for R-T-A3-2 likely. Gate D remains ulterior.

---

## Verdict

```
F3 REAL AUTHORITY SURFACE DECISION PACK COMPLETE —
A52-D03.1 RECONFIRMED AS MANDATORY BEFORE REAL CRITICAL —
EXISTING AUTHENTICATED IDENTITY SURFACE AUDITED —
AUTHN / AUTHZ / CONFIRMATION / EXECUTION BOUNDARIES DEFINED —
AUTHORITY OPTIONS COMPARED —
ONE ARCHITECTURE OPTION RECOMMENDED —
RECOMMENDATION NOT DECIDED —
MORRIS OPTION SELECTION REQUIRED —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
NO HARD CLOSED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY —
NO REAL EXECUTION —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR MORRIS AUTHORITY SURFACE DECISION
```

---

*ChatGPT must re-read from Git `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`. Cursor report alone is not validation. Morris decides the Authority Surface option. No automatic Gate D / Delivery / Cursor REAL.*
