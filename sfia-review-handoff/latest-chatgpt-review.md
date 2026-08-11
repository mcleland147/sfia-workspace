# ChatGPT Review Pack — FULL
## F3 Minimal IAM / Authenticated Identity Provider Decision — Design Only

| Field | Value |
| --- | --- |
| **Role** | F3 Minimal IAM / Authenticated Identity Provider Decision — Design Only |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-11 23:50:00 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 21:50:00 UTC |
| **Timestamp CEST ISO** | `2026-08-11T23:50:00+0200` |
| **Timestamp UTC ISO** | `2026-08-11T21:50:00Z` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |

---

## GO exact

```
GO MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION —
SELECT OR REJECT PROVIDER FOR AS-1 AuthenticatedIdentityPort —
KEEP PRODUCT PERSISTENCE NOT_SELECTED UNLESS EXPLICITLY DECIDED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
GATE D REMAINS BLOCKED UNTIL IAM SATISFIED —
OPTIONAL FOLLOW-ON: PUBLICATION OF F3 REAL-PREREQUISITES PACKAGE
ONLY IF CHATGPT ACCEPTS AUTHENTICATION-RESERVE PATH FOR REVIEW CONTINUITY —
PUBLICATION DOES NOT SATISFY GATE D WHILE IAM INCOMPLETE
```

**Justification Critical :** choix du fournisseur d'identité authentifiée conditionnant la complétion de AUTHENTICATED_IDENTITY_PROOF pour AS-1 / R-T-A3-1 — erreur possible = trust login/email, product DB implicite, crypto maison, vendor lock disproportionné, confusion authn/authz — sans Delivery, sans Cursor REAL, sans Gate D.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `fb17132f67baa1224f0cd60eddd8ad804ff234c9` |
| Blob BEFORE | `8d238b59375ff0ba6e3a7b1c2f54011937da9859` |
| Role (inbound) | F3 Real Prerequisites Delivery + Independent QA (AS-1 + DUR-1+DUR-4-POLICY) |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |
| Remote verify BEFORE | expected `git ls-remote` tip exact + `git ls-tree` blob exact on `sfia/review-handoff` |

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
| Delivery WT | `…/worktrees/f3-real-prerequisites-delivery` — **PROTECTED / NOT MUTATED** |
| Remote delivery | ABSENT |
| app/** dirty | none |
| Project commit/push/PR/merge/force/stage | 0 / 0 / 0 / 0 / 0 / 0 |
| Untracked | README + 01 + 02 + **03** + `.tmp-sfia-review/**` |

---

## README / 01 / 02 immutability

| Doc | SHA-256 BEFORE | SHA-256 AFTER | Byte-identical |
| --- | --- | --- | --- |
| README.md | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | **YES** |
| 01-authority-surface-decision.md | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | **YES** |
| 02-accelerated-authority-durability-decision.md | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` | **YES** |

Path: `…/f3-real-path-hard-prerequisites/`

---

## Created file

| Field | Value |
| --- | --- |
| Path | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/03-iam-provider-decision.md` |
| Lines | 618 |
| Sections | 24 (+ Annex A/B) |
| Threat model | IAM-TM-01…IAM-TM-12 |
| SHA-256 | `6b39fd62f43a5513b940b5b775e107461fd7b2945178c6f7b3b7bf2f991789e7` |

---

## Delivery candidate protection

| Field | Value |
| --- | --- |
| Candidate SHA expected | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| Algorithm | deterministic sha256 of sorted `path + " " + hash` lines from `candidate-manifest.txt` |
| BEFORE | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| AFTER | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| Delivery `app/**` mutated | **NO** |
| npm / package.json / lockfile / secrets / env | **NO** |

---

## Research conclusions encoded

### IAM-1 Auth.js (next-auth v5) + GitHub OAuth — RECOMMENDED — NOT DECIDED

- Official authjs.dev: App Router; adapter OPTIONAL; without adapter session defaults to JWT/JWE cookie; GitHub provider supported; `AUTH_SECRET` required; `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET`.
- Honest note: Auth.js maintenance transitioning toward Better Auth team (security fixes continue) — residual risk, **not auto-reject** for pilot.
- Fits `AuthenticatedIdentityPort`: `auth()` → map `providerAccountId`/subject → principal server-side; **NEVER** trust login/email alone for Morris (login mutable).
- Product persistence **NOT required** if JWT strategy, no adapter.
- Secrets classes only: `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`.

### IAM-2 Better Auth + GitHub — OPTION — NOT SELECTED

- Official better-auth docs: database typically required for users/sessions; stateless mode exists but plugins often need DB.
- Penalize: pushes toward product DB / schema for first pilot — overweight.

### IAM-3 Clerk — OPTION — NOT SELECTED

- Official clerk.com: SaaS hybrid JWT; strong Next.js fit; vendor lock-in; hosted user store; disproportioned for single-operator Morris pilot.

### IAM-4 Custom GitHub OAuth direct — OPTION — NOT SELECTED

- Possible but reinvent CSRF/state/PKCE/session crypto — PENALIZE as avoidable custom crypto.
- Not selected unless no library works (not the case).

---

## Recommendation / proposed decision

| Field | Value |
| --- | --- |
| Recommended | Auth.js + GitHub OAuth (JWT session, no DB adapter) |
| Recommendation status | **RECOMMENDED — NOT DECIDED** |
| Proposed decision status | **PROPOSED DECISION — MORRIS GO REQUIRED** |
| IAM status this cycle | **NOT_SELECTED** |
| Stable identity | github provider + provider account id / subject (numeric) — **NOT** login |
| Authn vs authz | Auth.js = WHO only; `AuthorityResolverPort` + `canActAsMorris` = AUTHZ |

---

## Comparative matrix (summary)

| Option | Verdict |
| --- | --- |
| IAM-1 Auth.js + GitHub JWT no adapter | **RECOMMENDED — NOT DECIDED** |
| IAM-2 Better Auth + GitHub | OPTION — NOT SELECTED (DB pressure) |
| IAM-3 Clerk | OPTION — NOT SELECTED (lock-in) |
| IAM-4 Custom OAuth | OPTION — NOT SELECTED (DIY crypto) |

Full matrix + IAM-TM-01…12 in §10–§11 of 03 (embedded below).

---

## Status board

| Item | Status |
| --- | --- |
| AS-1 | DECIDED — ADOPTED BY MORRIS (boundary) |
| DUR-1+DUR-4-POLICY | DECIDED — ADOPTED BY MORRIS (pilot-local) |
| IAM | **NOT_SELECTED** (recommended Auth.js path) |
| Product persistence | **NOT_SELECTED** |
| R-T-A3-1 | OPEN HARD — BLOCKS REAL |
| R-T-A3-2 | OPEN HARD — BLOCKS REAL |
| Gate D | NOT CONSUMED · NOT READY |
| Cursor REAL | BLOCKED |
| AUTHENTICATED_IDENTITY_PROOF | INCOMPLETE — REAL IAM REQUIRED (until adopt+adapter) |

---

## Mutation counters

| Counter | Value |
| --- | ---: |
| Created docs | 1 (`03-…`) |
| README mutations | 0 |
| 01 mutations | 0 |
| 02 mutations | 0 |
| Delivery package mutations | 0 |
| app/** mutations | 0 |
| npm / lockfile / secrets / env writes | 0 |
| Project commits | 0 |
| Project pushes | 0 |
| Project PRs | 0 |
| Stage | 0 |
| Force | 0 |
| Gate D | 0 |
| Cursor REAL | 0 |

---

## Exact next GO

```
GO ADOPT F3 AUTHENTICATED IDENTITY PROVIDER —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) —
IMPLEMENT PROVIDER ADAPTER FOR AS-1 AuthenticatedIdentityPort —
RUN IAM + CRITICAL ACK QA —
REFREEZE F3 REAL-PREREQUISITES PACKAGE —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
NO PROJECT GIT WRITE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED
```

---

## Verdict (GO)

```
F3 MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION PACK COMPLETE —
AS-1 PORT BASELINE RECONFIRMED —
IAM OPTIONS COMPARED (IAM-1..IAM-4) —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) RECOMMENDED — NOT DECIDED —
BETTER AUTH / CLERK / CUSTOM OAUTH NOT SELECTED —
STABLE IDENTITY = GITHUB ACCOUNT ID / SUBJECT — NOT LOGIN —
AUTHN≠AUTHZ PRESERVED —
PROPOSED DECISION — MORRIS GO REQUIRED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY PACKAGE MUTATION —
NO REAL EXECUTION —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
FULL REVIEW PACK COMPLETE —
READY FOR MORRIS IAM PROVIDER ADOPTION DECISION
```

---

## Full content of 03

# 03 — Minimal IAM / Authenticated Identity Provider Decision Pack

| Champ | Valeur |
| --- | --- |
| **Produit** | SFIA Studio — F3 |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Gate Morris consommé** | `GO MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION — SELECT OR REJECT PROVIDER FOR AS-1 AuthenticatedIdentityPort — KEEP PRODUCT PERSISTENCE NOT_SELECTED UNLESS EXPLICITLY DECIDED — NO CURSOR REAL — NO GATE D CONSUMPTION — GATE D REMAINS BLOCKED UNTIL IAM SATISFIED` |
| **Nature** | Decision pack IAM minimal — **DESIGN ONLY** |
| **Sélection d'option** | **NOT DECIDED** — Morris reste l'autorité |
| **Recommandation** | **Auth.js (next-auth v5) + GitHub OAuth · JWT session · no DB adapter** — `RECOMMENDED — NOT DECIDED` |
| **Décision proposée** | `PROPOSED DECISION — MORRIS GO REQUIRED` |
| **IAM status (ce cycle)** | **`NOT_SELECTED`** (recommandé, non adopté) |
| **Product persistence** | **`NOT_SELECTED`** |
| **Bounded local persistence** | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** (D1 / node:sqlite · ≠ product DB) |
| **AS-1** | **`DECIDED — ADOPTED BY MORRIS`** (architecture boundary ; port déjà livré en package candidat) |
| **DUR-1 + DUR-4-POLICY** | **`DECIDED — ADOPTED BY MORRIS`** (pilot-local journal ; ≠ product persistence) |
| **Gate D** | **NOT CONSUMED** · **NOT READY** tant que IAM incomplet |
| **Cursor REAL** | **BLOCKED** |
| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD — BLOCKS REAL** (jamais fermés ici) |
| **Product mutation** | **NONE** — doc only · **NO `app/**`** · delivery package **PROTECTED** |
| **Project commit / push / PR** | **aucun** |

> **Anti-fermeture :** ce document **recommande** (sans décider) un fournisseur d'identité minimal pour brancher `AuthenticatedIdentityPort`. Il **ne sélectionne pas** IAM (`NOT_SELECTED` jusqu'à GO Morris d'adoption), **ne sélectionne pas** product persistence, **n'implémente aucun adapter**, **ne mute pas** le package Delivery, **ne consomme pas** Gate D, **n'autorise pas** Cursor REAL, **ne ferme pas** HARD.

---

## 1. Contexte

La chaîne F3 est intégrée sur `main` (`4b1a058…`, package fixture `ec7d6c8…`, PR #333). Gate C + Authority Surface (`01`) + Durability (`02`) ont produit :

| Élément | Statut |
| --- | --- |
| AS-1 | **DECIDED — ADOPTED BY MORRIS** (boundary) |
| DUR-1 + DUR-4-POLICY | **DECIDED — ADOPTED BY MORRIS** (pilot-local) |
| B5 | BOUNDED ACCEPTANCE FOR F3 REAL-PREREQUISITES DELIVERY + QA ONLY |
| Delivery + QA package candidat | AS-1 port + journal + Fake identity **test-only** — **AUTHENTICATED_IDENTITY_PROOF = INCOMPLETE — REAL IAM REQUIRED** |
| Candidate SHA (frozen) | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |

Le package Delivery a matérialisé `AuthenticatedIdentityPort` + `FakeAuthenticatedIdentityAdapter` (testing subpath only). La réserve d'authentification réelle reste ouverte : **sans provider IAM réel, Gate D et Cursor REAL restent bloqués**.

**Question exacte de ce cycle :**

> Quel fournisseur d'identité **minimal** brancher derrière `AuthenticatedIdentityPort` pour un pilote Morris mono-opérateur, **sans** product persistence, **sans** reinventer la crypto de session, **sans** auto-adopter ?

README / `01` / `02` = **READ-ONLY** ce cycle. Delivery WT = **PROTECTED — DO NOT MUTATE**.

---

## 2. GO Morris

```
GO MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION —
SELECT OR REJECT PROVIDER FOR AS-1 AuthenticatedIdentityPort —
KEEP PRODUCT PERSISTENCE NOT_SELECTED UNLESS EXPLICITLY DECIDED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
GATE D REMAINS BLOCKED UNTIL IAM SATISFIED —
OPTIONAL FOLLOW-ON: PUBLICATION OF F3 REAL-PREREQUISITES PACKAGE
ONLY IF CHATGPT ACCEPTS AUTHENTICATION-RESERVE PATH FOR REVIEW CONTINUITY —
PUBLICATION DOES NOT SATISFY GATE D WHILE IAM INCOMPLETE
```

| Consomme | Ne consomme PAS |
| --- | --- |
| Production du decision pack IAM + recommandation | Adoption IAM (`DECIDED — ADOPTED BY MORRIS`) |
| Comparaison IAM-1…IAM-4 | Mutation `app/**` / delivery package |
| Proposition next GO d'adoption + adapter | npm install / package.json / lockfile / secrets / env writes |
| | Product persistence SELECTED |
| | Gate D · Cursor REAL · HARD CLOSED · project git write |

**Sémantique :** *SELECT OR REJECT* = produire options + recommandation. Cursor **ne** sélectionne **pas** seul. Tant que Morris n'a pas adopté, IAM reste **`NOT_SELECTED`**.

---

## 3. Décisions antérieures contraignantes

| Décision | Statut | Portée pour ce pack |
| --- | --- | --- |
| **A52-D03** `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` | Surface authn+autorisée+auditée obligatoire avant REAL Critical |
| **AS-1** | `DECIDED — ADOPTED BY MORRIS` | Port provider-agnostic + Critical Ack dédié ; `AuthorityResolverPort` unique authz |
| **DUR-1 + DUR-4-POLICY** | `DECIDED — ADOPTED BY MORRIS` | Journal pilot-local + reconfirm / no auto-resume / UNKNOWN — **≠** product DB |
| **A52-D02.2 / A52-D04.4** | `DECIDED — ADOPTED BY MORRIS` | txn logique + mémoire bornée avant REAL ; R-T-A3-2 OPEN HARD |
| **F3-D01…D11** | ADOPTED | D02 exact confirm · D07 process-local insuffisant · D11 REAL NO-GO now |
| **B5 fixture / prereq bounded** | ADOPTED (path-specific) | Global B5 OPEN |
| Gate C / 01 / 02 | CONSUMED · docs immuables | READ-ONLY hashes figés |
| Delivery + QA | COMPLETE WITH AUTHENTICATION RESERVE | Fake ≠ real IAM |

**Ne pas rouvrir :** AS-1 boundary · AuthorityResolverPort as sole authz · N3≠Morris · authn≠authz≠confirm≠execute · conversation never authority · DUR policy · Fake-only testing isolation.

---

## 4. Git Truth

| Élément | Valeur |
| --- | --- |
| Framing worktree | `…/worktrees/f3-real-hard-prerequisites` |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| HEAD / `origin/main` | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Delivery worktree | `…/worktrees/f3-real-prerequisites-delivery` (**PROTECTED**) |
| Delivery branch | `delivery/sfia-studio-f3-real-prerequisites` |
| Remote delivery | **ABSENT** |
| Remote framing | **ABSENT** |
| Staged (framing) | empty attendu |
| `app/**` dirty (framing) | **none** attendu |
| Project commit / push / PR | **0** |
| Inbound handoff tip BEFORE | `fb17132f67baa1224f0cd60eddd8ad804ff234c9` |
| Inbound handoff blob BEFORE | `8d238b59375ff0ba6e3a7b1c2f54011937da9859` |
| Template | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Delivery candidate SHA | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |

### Framing docs immutability (attendu BEFORE = AFTER)

| Doc | SHA-256 |
| --- | --- |
| `README.md` | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` |
| `01-authority-surface-decision.md` | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` |
| `02-accelerated-authority-durability-decision.md` | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` |

**Seul fichier créé :** `03-iam-provider-decision.md`.

---

## 5. État AS-1 / AuthenticatedIdentityPort (baseline Delivery)

Confirmé depuis le package candidat (read-only Delivery WT) :

| Fait | Valeur honnête |
| --- | --- |
| Port | `AuthenticatedIdentityPort.resolvePrincipal(): Promise<AuthenticatedPrincipal \| null>` |
| Principal | `principalId` · `authnSource` · `authenticatedAt` · `actorId` · optional `displayName` |
| Production adapter | **ABSENT** |
| Test adapter | `FakeAuthenticatedIdentityAdapter` via `critical-ack/testing` **only** |
| Main barrel export Fake | **FORBIDDEN** (importBoundaries PASS) |
| `AUTHENTICATED_IDENTITY_PROOF_STATUS` | **`INCOMPLETE — REAL IAM REQUIRED`** |
| Hostile client fields | **IGNORED** by `AcknowledgeCritical` |
| Authz | `AuthorityResolverPort` + `canActAsMorris` — **unchanged** |
| IAM | **`NOT_SELECTED`** |
| Product persistence | **`NOT_SELECTED`** |

### Mapping cible (futur adapter — non implémenté ici)

```
auth() / provider session
  → map GitHub provider account id / subject → AuthenticatedPrincipal
  → AcknowledgeCritical.resolvePrincipal()
  → AuthorityResolverPort (canActAsMorris)
  → Critical Ack / Confirmation
  → NEVER trust login string / email alone for Morris
```

---

## 6. Problème à résoudre

### 6.1 Ce qui n'est PAS la question

- « Faut-il une identité authentifiée ? » — **déjà décidé** (A52-D03.1 / AS-1).
- « Faut-il un port provider-agnostic ? » — **déjà décidé et livré** (AS-1).
- « Faut-il product persistence ? » — **reste NOT_SELECTED** sauf décision Morris explicite séparée.

### 6.2 Question exacte

> **QUEL FOURNISSEUR IAM MINIMAL BRANCHER DERRIÈRE `AuthenticatedIdentityPort` POUR UN PILOTE MORRIS MONO-OPÉRATEUR, SANS PRODUCT DB, SANS CRYPTO MAISON, SANS VENDOR LOCK DISPROPORTIONNÉ ?**

### 6.3 Contraintes de minimalité

1. Fit Next.js App Router (stack SFIA Studio).
2. GitHub OAuth acceptable (Morris = opérateur GitHub).
3. **Pas** de product DB / schema users obligatoire pour le premier pilote.
4. Adapter OPTIONNEL ou évitable.
5. Secrets : class names only (`AUTH_SECRET`, provider id/secret) — **aucune valeur écrite**.
6. Stable identity = **provider account id / subject**, **pas** `login` mutable.
7. Authn ≠ authz : provider répond **WHO** ; `canActAsMorris` reste AUTHZ.
8. Design only — **aucune** implémentation ce cycle.

---

## 7. Invariants (normatifs pour toute option admissible)

1. `AuthenticatedIdentityPort` reste la seule injection authn vers Critical Ack.
2. `AuthorityResolverPort` reste la seule frontière authz — **pas** de second moteur IAM-as-authz.
3. Authn ≠ Authz ≠ Confirmation ≠ Execution.
4. Stable principal id = **GitHub numeric account id / `providerAccountId` / OIDC `sub`**, **jamais** `login` seul.
5. Email / displayName / login = **affichage ou hint** — **NEVER TRUST** pour Morris gate.
6. Client payload (`actorId`, `displayName`, `authorityLevel`) reste **never trust**.
7. N3 ≠ Morris ; `canActAsMorris` explicite requis.
8. Conversation / ChatGPT / GO textuel **jamais** source d'autorité.
9. Fake adapter reste **test-only** ; interdit en production path.
10. Product persistence reste **NOT_SELECTED** sauf GO Morris explicite.
11. Gate D / Cursor REAL **pas** autorisés par ce pack.
12. Aucune option admissible ne déclare HARD CLOSED.
13. Aucun secret / env value écrit dans le repo.
14. Delivery candidate SHA doit rester `c7f194d8…` (byte-identical package).

---

## 8. Séparation authn / authz / confirmation / execution

| Couche | Question | Porte IAM (futur) | Ne fait pas |
| --- | --- | --- | --- |
| **AUTHENTICATION** | Qui est l'acteur ? | Auth.js `auth()` → map `providerAccountId` → `AuthenticatedPrincipal` | N'accorde pas Morris ; ne confirme pas ; ne lance pas |
| **AUTHORIZATION** | Cette identité peut-elle agir comme Morris pour ce scope ? | `AuthorityResolverPort` + evidence / `canActAsMorris` | Ne remplace pas l'ack Critical |
| **CONFIRMATION** | Autorise-t-elle **CETTE** action exacte maintenant ? | Critical Ack + Confirmation T-A3 | Ne lance pas Cursor |
| **EXECUTION** | Attempt ? | T-A4 → T-A5 | Hors IAM ; Gate D séparé |

**Chaîne obligatoire :**

```
GitHub OAuth session (Auth.js JWT)
  → AuthenticatedIdentityPort.resolvePrincipal()
  → verified Morris authority (AuthorityResolverPort)
  → exact Critical acknowledgement / Confirmation
  → ExecutionContract authorization
  → T-A5 Attempt
```

**Interdit :**

```
GitHub login string == Morris
email == Morris
UI click → Cursor
Fake adapter in production
```

---

## 9. Exigences d'identité stable (contrat IAM → port)

| Exigence | Règle |
| --- | --- |
| Subject | GitHub **numeric id** (`providerAccountId` / profile `id`) stocké dans `principalId` / mappé vers `actorId` server-side |
| Login | **Mutable** — peut changer ; **insuffisant** comme identité Morris |
| Email | Mutable / non unique garant — **insuffisant** |
| Display name | Cosmétique — **never trust** |
| Session | JWT/JWE cookie serveur (stratégie sans adapter) acceptable pour pilote |
| Restart session | Session absente ⇒ `resolvePrincipal() = null` ⇒ Critical Ack **fail-closed** |
| Mapping Morris | Table/allowlist **server-side** `githubAccountId → canActAsMorris evidence` — **hors** confiance client |
| Secrets (classes) | `AUTH_SECRET` · `AUTH_GITHUB_ID` · `AUTH_GITHUB_SECRET` |

---

## 10. Matrice comparative IAM-1…IAM-4

| Critère | **IAM-1 Auth.js + GitHub** | **IAM-2 Better Auth + GitHub** | **IAM-3 Clerk** | **IAM-4 Custom GitHub OAuth** |
| --- | --- | --- | --- | --- |
| Statut | **RECOMMENDED — NOT DECIDED** | OPTION — NOT SELECTED | OPTION — NOT SELECTED | OPTION — NOT SELECTED |
| Source officielle | authjs.dev (App Router, GitHub provider) | better-auth docs | clerk.com Next.js docs | OAuth RFC + GitHub Apps docs |
| Fit Next.js 15 / App Router | **Fort** (`auth()`, route handlers) | Bon | **Fort** (SaaS SDK) | Possible mais DIY |
| Adapter / DB | **OPTIONAL** — sans adapter ⇒ JWT/JWE cookie default | DB **typiquement requise** (users/sessions) ; mode stateless existe mais plugins poussent DB | Hosted user store | N/A (session DIY) |
| Product persistence pressure | **Faible** (JWT, no adapter) | **Forte** (schema users/sessions) | Vendor-hosted (lock-in) | Faible mais crypto DIY |
| Secrets classes | `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET` | Better Auth secret + GitHub OAuth + souvent DB URL | `CLERK_*` publishable/secret | Client id/secret + session secret DIY |
| Stable id | GitHub account id via provider profile | Idem si correctement mappé | Clerk user id (extra indirection) | GitHub id si correctement mappé |
| Fit `AuthenticatedIdentityPort` | `auth()` → map subject | `getSession` → map | `auth()` Clerk → map | custom session → map |
| Crypto session | Library (JWE) | Library | Vendor JWT hybrid | **Reinvent CSRF/state/PKCE/session** — **PENALIZE** |
| Maintenance risk | Transition Auth.js → Better Auth team ; **security fixes continue** — residual risk, **not auto-reject** for pilot | Actively maintained ; heavier | Vendor SLA | Full ownership burden |
| Vendor lock-in | OSS library | OSS library | **High** SaaS | None (but DIY risk) |
| Overweight for single-operator Morris | **Minimal** | Overweight (DB push) | **Disproportioned** | Avoidable custom crypto |
| Impact product persistence NOT_SELECTED | **Compatible** | **Conflict / pressure** | Compatible-ish but SaaS store | Compatible |
| Admissible futur REAL pilot | **YES** (sous GO adopt + Delivery adapter + QA) | CONDITIONAL (si DB acceptée plus tard) | CONDITIONAL (lock-in) | ONLY if no library works (**not the case**) |
| Décision Morris | **YES — GO ADOPT** | YES si choisie | YES si choisie | YES si choisie |

**Synthèse :** IAM-1 minimise la surface et préserve `PRODUCT PERSISTENCE = NOT_SELECTED`. IAM-2/3/4 sont écartés pour overweight, lock-in, ou crypto maison évitable.

---

## 11. Threat model (IAM-TM-01…IAM-TM-12)

Légende preuve : **PORT** = AS-1/Delivery existant · **GAP-IAM** = manque provider réel · **LIB** = contrôle attendu de la lib choisie · **AUTHZ** = AuthorityResolver · **DEP-DUR** = journal DUR déjà adopté.

| ID | Menace | Fail-safe attendu | Contrôle existant | Nouveau contrôle (si IAM-1 adopté) | Impact R-T-A3-1 | Preuve |
| --- | --- | --- | --- | --- | --- | --- |
| **IAM-TM-01** | Client forge `actorId=Morris` | Ignore ; principal from server authn only | AcknowledgeCritical ignores hostile fields | Auth.js `auth()` server-side only | BLOCKS REAL si absent | PORT + GAP-IAM |
| **IAM-TM-02** | Trust GitHub **login** string as Morris | Deny — use numeric account id / subject | — | Map `providerAccountId`/`id` → principalId | BLOCKS REAL si login used | GAP-IAM |
| **IAM-TM-03** | Trust email as Morris | Deny | — | Email never Morris gate | BLOCKS REAL | GAP-IAM |
| **IAM-TM-04** | Session JWT stolen / XSS | HttpOnly cookie + short TTL + AUTH_SECRET | — | Keep JWE default ; no client token trust | OPEN residual | LIB |
| **IAM-TM-05** | Wrong GitHub user authenticated | Authz deny (`canActAsMorris=false`) | AuthorityResolver Morris gate | Allowlist githubAccountId → Morris evidence | BLOCKS REAL sans allowlist | PORT + GAP-IAM |
| **IAM-TM-06** | OAuth CSRF / state fixation | Fail-closed login | — | Auth.js built-in state/CSRF | BLOCKS REAL web | LIB |
| **IAM-TM-07** | Provider down / misconfig | `resolvePrincipal()=null` ⇒ Critical Ack refuse | Port null handling | No silent Fake fallback in prod | fail-closed | PORT + LIB |
| **IAM-TM-08** | AUTH_SECRET missing/rotated badly | Fail closed sessions | — | Require AUTH_SECRET class at deploy | operational | LIB |
| **IAM-TM-09** | Confused deputy: Auth.js session ⇒ auto Morris | Never auto-elevate | canActAsMorris separate | Keep authn≠authz invariant | BLOCKS REAL si confondu | AUTHZ |
| **IAM-TM-10** | Adapter/DB quietly introduced | Reject scope creep | product persistence NOT_SELECTED | **No DB adapter** in recommended path | protects NOT_SELECTED | DESIGN |
| **IAM-TM-11** | Replay ack with stale session after restart | Session null or re-authn ; journal anti-replay | DUR-1/4 journal + invalidate | Re-authn + reconfirm policy | + R-T-A3-2 | DEP-DUR + LIB |
| **IAM-TM-12** | Maintenance transition Auth.js→Better Auth | Residual risk accepted for pilot ; track security advisories | — | Honest residual risk note — **not auto-reject** | residual | RESEARCH |

---

## 12. OPTION IAM-1 — Auth.js (next-auth v5) + GitHub OAuth (JWT, no DB adapter)

**Statut :** `RECOMMENDED — NOT DECIDED`

### Sources officielles (research)

- [authjs.dev](https://authjs.dev) — App Router setup ; `auth()` / handlers ; GitHub provider ; env `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`.
- Session strategies : **sans adapter**, stratégie session default = **JWT** (JWE cookie HttpOnly). Adapter **OPTIONAL**.
- Note honnête : Auth.js maintenance **transitioning toward Better Auth team** ; security fixes continue — **residual risk**, **not auto-reject** for single-operator pilot.

### Design fit

| Élément | Contenu |
| --- | --- |
| Library | `next-auth@beta` / Auth.js v5 |
| Provider | GitHub OAuth |
| Session | **JWT / JWE cookie** — **no database adapter** |
| Product persistence | **NOT required** for session strategy |
| Port wiring | `AuthJsGitHubIdentityAdapter implements AuthenticatedIdentityPort` (futur) |
| Principal mapping | `provider=github` + `providerAccountId` (numeric) → `principalId` / `actorId` |
| Morris gate | **Separate** `AuthorityResolverPort.canActAsMorris` |
| Secrets (classes only) | `AUTH_SECRET` · `AUTH_GITHUB_ID` · `AUTH_GITHUB_SECRET` |

### Pourquoi recommandé

1. Fit App Router natif (`auth()`, route handler).
2. GitHub provider officiel.
3. **Pas** de product DB pour sessions JWT.
4. Évite crypto maison (CSRF/state/PKCE/JWE fournis).
5. Mappe proprement vers `AuthenticatedIdentityPort`.
6. Préserve authn≠authz.
7. Minimal pour pilote Morris mono-opérateur.
8. Residual maintenance risk **documenté** — acceptable vs overweight alternatives.

### Ce que IAM-1 n'est PAS

- Pas une sélection Morris tant que statut = RECOMMENDED — NOT DECIDED.
- Pas une autorisation d'installer des packages ce cycle.
- Pas une élévation automatique `canActAsMorris`.
- Pas une fermeture R-T-A3-1.

---

## 13. OPTION IAM-2 — Better Auth + GitHub

**Statut :** `OPTION — NOT SELECTED`

### Sources officielles

- better-auth docs : database typically used to store users/sessions ; CLI migrations/schema ; **stateless mode exists** but plugins often require DB tables.

### Pénalité

- Pousse vers **product DB / schema** dès le premier pilote — **overweight** vs contrainte `PRODUCT PERSISTENCE = NOT_SELECTED`.
- Plus riche (orgs, 2FA, plugins) que nécessaire pour mono-opérateur Morris.

### Verdict

**NOT SELECTED** pour ce pilote minimal. Réévaluable plus tard si Morris choisit explicitement une plateforme auth complète **et** accepte la persistence associée.

---

## 14. OPTION IAM-3 — Clerk

**Statut :** `OPTION — NOT SELECTED`

### Sources officielles

- clerk.com Next.js quickstart : SaaS hybrid JWT ; strong Next.js fit ; hosted user store ; `CLERK_*` keys.

### Pénalité

- Vendor lock-in.
- Hosted user store disproportionné pour **single-operator Morris pilot**.
- Surface SaaS + billing/claim flow hors minimalité.

### Verdict

**NOT SELECTED**.

---

## 15. OPTION IAM-4 — Custom GitHub OAuth direct

**Statut :** `OPTION — NOT SELECTED` (sauf si aucune lib ne fonctionne — **ce n'est pas le cas**)

### Pénalité

- Réinvente CSRF / state / PKCE / session crypto / cookie hardening.
- Surface d'erreur élevée pour un gain nul vs Auth.js.
- **PENALIZE as avoidable custom crypto**.

### Verdict

**NOT SELECTED**.

---

## 16. Recommandation

**Option recommandée :** **IAM-1 — Auth.js (next-auth v5) + GitHub OAuth · JWT session · no DB adapter**

**Statut de la recommandation :** `RECOMMENDED — NOT DECIDED`

### Pourquoi pas les autres

| Option | Motif |
| --- | --- |
| IAM-2 Better Auth | Overweight — pousse product DB/schema |
| IAM-3 Clerk | Lock-in SaaS disproportionné |
| IAM-4 Custom OAuth | Crypto maison évitable |

### Identité stable (rappel)

- **github** provider + **provider account id / subject (numeric id)**
- **NOT** login string
- Auth.js = **WHO** only
- `AuthorityResolverPort` + `canActAsMorris` = **AUTHZ**

---

## 17. Décision proposée Morris

**Statut :** `PROPOSED DECISION — MORRIS GO REQUIRED`

**Proposition (non adoptée) :**

> Adopter **Auth.js + GitHub OAuth (JWT session, no DB adapter)** comme provider d'identité authentifiée pour brancher `AuthenticatedIdentityPort` ; mapper exclusivement le GitHub account id / subject ; conserver `AuthorityResolverPort` + `canActAsMorris` comme authz ; garder product persistence **NOT_SELECTED** ; ne pas consommer Gate D ; ne pas autoriser Cursor REAL ; laisser R-T-A3-1 / R-T-A3-2 OPEN HARD jusqu'à Delivery adapter + IAM QA.

**Interdit dans ce document :** `DECIDED — ADOPTED BY MORRIS` pour IAM-1 (ou toute IAM-*).

**IAM status après ce pack (tant que Morris n'adopte pas) :** **`NOT_SELECTED`**.

---

## 18. Impacts R-T-A3-1 / R-T-A3-2

### R-T-A3-1

| Avant | Après recommandation (si Morris adopte + Delivery futur) |
| --- | --- |
| FURTHER REDUCED — REMAINS OPEN · OPEN HARD · BLOCKS REAL · IAM missing | Gap **cadrée** par IAM-1 — **pas fermée** tant que adapter non livré + QA |
| Fake-only identity | Remplacée par Auth.js mapping **après** GO ADOPT + Delivery |

**Ce cycle ne ferme pas R-T-A3-1.**

### R-T-A3-2

| Aspect | Effet |
| --- | --- |
| Journal DUR-1/4 | Inchangé (pilot-local) |
| Product persistence | **Reste NOT_SELECTED** (JWT path) |
| Session vs journal | Session live MAY_BE_PROCESS_LOCAL ; ack facts MUST_BE_DURABLE (déjà cadré §02) |

**R-T-A3-2 demeure OPEN HARD — BLOCKS REAL.**

---

## 19. Non-effets / stop conditions

L'existence de ce pack **n'implique PAS** :

| Non-effet | Statut |
| --- | --- |
| IAM SELECTED / ADOPTED | **NON** — `NOT_SELECTED` |
| npm install / package.json / lockfile | **NON** |
| Secrets / `.env` writes | **NON** |
| Adapter Auth.js créé | **NON** |
| Delivery package mutation | **NON** — SHA `c7f194d8…` préservé |
| README / 01 / 02 mutation | **NON** |
| Product persistence SELECTED | **NON** |
| Gate D | **NOT CONSUMED** |
| Cursor REAL | **BLOCKED** |
| Project git commit / push / PR | **0** |
| HARD CLOSED | **NON** |

**STOP si :** main ≠ `4b1a058…` · framing docs mutés · delivery package muté · IAM auto-selected · product DB auto-selected · Gate D / REAL exécutés · secrets committed.

---

## 20. Scope Delivery futur (indicatif — NOT this cycle)

`app/**` = **READ ONLY** ce cycle. Indicatif seulement :

### Likely new (après GO ADOPT)

- `auth.ts` Auth.js config (GitHub provider, JWT, **no adapter**)
- `app/api/auth/[...nextauth]/route.ts` handlers
- `AuthJsGitHubAuthenticatedIdentityAdapter` implementing `AuthenticatedIdentityPort`
- Server-side allowlist/mapping githubAccountId → Morris actor evidence registration path
- Targeted vitest : principal mapping · login-not-trusted · null session fail-closed · no Fake in prod barrel · hostile fields still ignored

### Explicitly out of scope même après ADOPT (sauf GO séparé)

- Product user database
- Better Auth migration
- Clerk
- Custom OAuth crypto
- Cursor REAL
- Gate D consumption
- Changing DUR journal into product persistence

### Secrets handling (futur ops — classes only ici)

| Class name | Purpose |
| --- | --- |
| `AUTH_SECRET` | JWE/JWT encryption |
| `AUTH_GITHUB_ID` | GitHub OAuth client id |
| `AUTH_GITHUB_SECRET` | GitHub OAuth client secret |

**Aucune valeur** documentée ou écrite.

---

## 21. Debt / simplicity challenge

| Question | Réponse |
| --- | --- |
| Utile maintenant ? | **Oui** — débloque la réserve AUTHENTICATED_IDENTITY_PROOF |
| Plus simple existe ? | Custom OAuth paraît plus « petit » en deps mais **plus risqué** (crypto DIY) |
| Dette créée ? | Residual Auth.js→Better Auth maintenance transition — **acceptée pour pilote** |
| Repo-first ? | Oui |
| Second moteur authz ? | Non |
| Confond authn/authz ? | Non (invariant explicite) |
| IAM auto-adopté ? | Non — RECOMMENDED — NOT DECIDED |
| Product DB implicite ? | Non (JWT, no adapter) |
| Login string as identity ? | **Non** — penalized |
| Gain justifie Auth.js ? | Oui — library crypto + GitHub provider + no DB |

---

## 22. Anti-claims

Ce pack **ne revendique PAS** :

- IAM SELECTED / `DECIDED — ADOPTED BY MORRIS` ;
- Auth.js installé / configuré ;
- HARD CLOSED / R-T-A3-1 CLOSED / R-T-A3-2 CLOSED ;
- AUTHENTICATED_IDENTITY_PROOF COMPLETE ;
- product persistence SELECTED ;
- Gate D consommé / READY ;
- Cursor REAL autorisé ;
- Delivery package modifié ;
- Fake adapter = identité production ;
- GitHub login = Morris ;
- email = Morris ;
- secrets written ;
- npm install effectué ;
- project commit / push / PR.

---

## 23. Next GO (exact — NON CONSOMMÉ)

```
GO ADOPT F3 AUTHENTICATED IDENTITY PROVIDER —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) —
IMPLEMENT PROVIDER ADAPTER FOR AS-1 AuthenticatedIdentityPort —
RUN IAM + CRITICAL ACK QA —
REFREEZE F3 REAL-PREREQUISITES PACKAGE —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
NO PROJECT GIT WRITE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED
```

**Phases internes attendues du futur cycle :** PHASE DELIVERY (adapter + wiring) puis PHASE QA INDEPENDENT (IAM + Critical Ack) puis REFREEZE candidate SHA — toujours **sans** Cursor REAL / Gate D / project publication sauf GO Morris distinct.

---

## 24. Verdict

```
F3 MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION PACK COMPLETE —
AS-1 PORT BASELINE RECONFIRMED —
IAM OPTIONS COMPARED (IAM-1..IAM-4) —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) RECOMMENDED — NOT DECIDED —
BETTER AUTH / CLERK / CUSTOM OAUTH NOT SELECTED —
STABLE IDENTITY = GITHUB ACCOUNT ID / SUBJECT — NOT LOGIN —
AUTHN≠AUTHZ PRESERVED —
PROPOSED DECISION — MORRIS GO REQUIRED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY PACKAGE MUTATION —
NO REAL EXECUTION —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
READY FOR MORRIS IAM PROVIDER ADOPTION DECISION
```

---

## Annex A — Git Truth (ce cycle)

| Élément | Valeur |
| --- | --- |
| Worktree | `…/worktrees/f3-real-hard-prerequisites` |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| HEAD / origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Delivery WT | PROTECTED · remote ABSENT · candidate SHA `c7f194d8…` |
| Remote framing | **ABSENT** |
| Inbound handoff tip | `fb17132f67baa1224f0cd60eddd8ad804ff234c9` |
| Inbound handoff blob | `8d238b59375ff0ba6e3a7b1c2f54011937da9859` |
| Template | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Created file | `03-iam-provider-decision.md` |
| README / 01 / 02 | READ-ONLY · byte-identical required |

## Annex B — Status summary

| Item | Status |
| --- | --- |
| IAM-1 Auth.js + GitHub JWT no adapter | **RECOMMENDED — NOT DECIDED** |
| IAM-2 / IAM-3 / IAM-4 | OPTION — NOT SELECTED |
| Proposed Morris decision | **PROPOSED DECISION — MORRIS GO REQUIRED** |
| IAM | **NOT_SELECTED** |
| Product persistence | **NOT_SELECTED** |
| AS-1 | DECIDED — ADOPTED (boundary) |
| R-T-A3-1 | OPEN HARD — BLOCKS REAL |
| R-T-A3-2 | OPEN HARD — BLOCKS REAL |
| Gate D | NOT CONSUMED · NOT READY |
| Cursor REAL | BLOCKED |

---

*Fin du decision pack `03-iam-provider-decision.md`. README / 01 / 02 adjacents et package Delivery ne sont pas modifiés.*

---

## Review Handoff

| Field | Value |
| --- | --- |
| Required | YES |
| Mode | publish-in-cycle |
| Branch | `sfia/review-handoff` |
| Canonical | `sfia-review-handoff/latest-chatgpt-review.md` |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Commit message | `docs(review-handoff): publish F3 minimal IAM provider decision` |
| Inbound tip | `fb17132f67baa1224f0cd60eddd8ad804ff234c9` |
| Inbound blob | `8d238b59375ff0ba6e3a7b1c2f54011937da9859` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` FF only |
| FINAL tip | `09e67bf36f6de5546e2614a875e61c763a3d4041` |
| FINAL blob | `341f6f0d51007a4ce9f6166731ce2a220e6bd4f0` |
| Remote reread | **YES** — `git ls-remote` tip `09e67bf36f6de5546e2614a875e61c763a3d4041` + `git ls-tree` blob `341f6f0d51007a4ce9f6166731ce2a220e6bd4f0` · **FINAL REMOTE IDENTITY VERIFIED** |

---

## Cursor report — 42 fields

| # | Field | Value |
| ---: | --- | --- |
| 1 | GO consumed | GO MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION (design-only) |
| 2 | Cycle | 6 — Architecture technique |
| 3 | Profil | Critical |
| 4 | Typologie | CAPA / DOC |
| 5 | Critical explicit | YES |
| 6 | Template | v2.6 |
| 7 | Template blob | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| 8 | Framing WT | `f3-real-hard-prerequisites` |
| 9 | Framing branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| 10 | HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 11 | origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 12 | Inbound tip BEFORE | `fb17132f67baa1224f0cd60eddd8ad804ff234c9` |
| 13 | Inbound blob BEFORE | `8d238b59375ff0ba6e3a7b1c2f54011937da9859` |
| 14 | README sha256 | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` |
| 15 | 01 sha256 | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` |
| 16 | 02 sha256 | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` |
| 17 | README/01/02 mutated | NO |
| 18 | Created path | `…/03-iam-provider-decision.md` |
| 19 | 03 lines | 618 |
| 20 | 03 sections | 24 (+ Annex A/B) |
| 21 | IAM-TM coverage | IAM-TM-01…12 |
| 22 | Delivery candidate SHA | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| 23 | Delivery package mutated | NO |
| 24 | app/** mutated | NO |
| 25 | npm/package.json/lockfile | NO |
| 26 | secrets/env writes | NO |
| 27 | Project commits | 0 |
| 28 | Project pushes | 0 |
| 29 | Project PRs | 0 |
| 30 | Gate D consumed | NO / NOT READY |
| 31 | Cursor REAL | 0 / BLOCKED |
| 32 | Recommended option | IAM-1 Auth.js + GitHub OAuth JWT no adapter |
| 33 | Recommendation status | RECOMMENDED — NOT DECIDED |
| 34 | Proposed decision | PROPOSED DECISION — MORRIS GO REQUIRED |
| 35 | IAM status | NOT_SELECTED |
| 36 | Product persistence | NOT_SELECTED |
| 37 | Stable identity rule | GitHub account id/subject — NOT login |
| 38 | Authn≠authz | PRESERVED |
| 39 | Next GO | GO ADOPT F3 AUTHENTICATED IDENTITY PROVIDER — AUTH.JS + GITHUB… |
| 40 | Review pack | FULL (complete 03 embedded) |
| 41 | Handoff publish | **HANDOFF UPDATED — REMOTE VERIFIED** tip `09e67bf3…` blob `341f6f0d…` |
| 42 | SUCCESS verdict | **SUCCESS** |

---

## Exact SUCCESS verdict (GO)

```
F3 MINIMAL IAM / AUTHENTICATED IDENTITY PROVIDER DECISION PACK COMPLETE —
AS-1 PORT BASELINE RECONFIRMED —
IAM OPTIONS COMPARED (IAM-1..IAM-4) —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) RECOMMENDED — NOT DECIDED —
BETTER AUTH / CLERK / CUSTOM OAUTH NOT SELECTED —
STABLE IDENTITY = GITHUB ACCOUNT ID / SUBJECT — NOT LOGIN —
AUTHN≠AUTHZ PRESERVED —
PROPOSED DECISION — MORRIS GO REQUIRED —
IAM REMAINS NOT_SELECTED —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY PACKAGE MUTATION —
NO REAL EXECUTION —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR MORRIS IAM PROVIDER ADOPTION DECISION
```

---

*End of FULL Review Pack — Cursor report ≠ validation ; ChatGPT re-reads Git handoff after FF publish.*
