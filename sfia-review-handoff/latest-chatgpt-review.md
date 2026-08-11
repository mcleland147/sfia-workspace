# ChatGPT Review Pack — FULL
## F3 Accelerated Real Prerequisites Architecture — Authority + Durability — Design Only

| Field | Value |
| --- | --- |
| **Role** | Accelerated F3 AS-1 adoption + R-T-A3-2 durability framing + B5 assessment |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-11 22:01:23 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 20:01:23 UTC |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |

---

## GO exact

```
GO ACCELERATED F3 REAL PREREQUISITES ARCHITECTURE —
ADOPT AS-1 AUTHORITY SURFACE DIRECTION —
FRAME AND DECIDE THE MINIMAL DURABILITY PLAN FOR R-T-A3-2 —
ASSESS B5 BOUNDED ACCEPTANCE FOR THE UPCOMING REAL-PREREQUISITES DELIVERY —
DESIGN ONLY —
NO DELIVERY —
NO REAL EXECUTION —
NO IAM OR PRODUCT PERSISTENCE AUTO-SELECT
```

**Justification Critical :** frontières d'autorité et de durabilité conditionnant une future ExecutionAttempt REAL (authenticated Morris, Critical ack, replay, restart, durable consumption, partial failures, UNKNOWN, rollback, B5 stop-before-delivery) — sans exécution REAL.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `90ea88f7b700aba48ca08729ddc98761fc953853` |
| Blob BEFORE | `4cb8d34e2699267fe6f757eeb44acfc2c8b22227` |
| Role (inbound) | F3 Real Authority Surface Decision — Design Only |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |

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
| Project commit/push/PR/merge/force/stage | 0 / 0 / 0 / 0 / 0 / 0 |
| Untracked | README + 01 + **02** + `.tmp-sfia-review/**` |

---

## README / 01 immutability

| Doc | SHA-256 BEFORE | SHA-256 AFTER | Lines | Byte-identical |
| --- | --- | --- | ---: | --- |
| README.md | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | 728 | **YES** |
| 01-authority-surface-decision.md | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | 704 | **YES** |

---

## Created file

| Field | Value |
| --- | --- |
| Path | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/02-accelerated-authority-durability-decision.md` |
| SHA-256 | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` |
| Lines | 690 |

---

## AS-1 adoption record

| Field | Value |
| --- | --- |
| **Status** | **`DECIDED — ADOPTED BY MORRIS`** |
| Limit | architecture boundary only |
| Meaning | Dedicated authenticated Critical Ack surface + provider-agnostic identity port ; AuthorityResolverPort preserved ; N3≠Morris ; canActAsMorris explicit ; exact Confirmation binding ; authn≠authz≠confirm≠execute ; ack never starts Cursor ; conversation never authority ; A52-D03.1 preserved |
| Non-effects | IAM NOT_SELECTED · no auth lib · product persistence NOT_SELECTED · no code/endpoint · R-T-A3-1 not CLOSED · Cursor REAL not authorized |

---

## A52-D02 / A52-D04

| Decision | Status | Implication |
| --- | --- | --- |
| A52-D02.2 | DECIDED — ADOPTED BY MORRIS | logical txn + compensation/idempotence before Delivery ; durable guarantee before REAL |
| A52-D04.4 | DECIDED — ADOPTED BY MORRIS | bounded memory OK before REAL ; no durable resolution acquired ; R-T-A3-2 OPEN HARD |

---

## Current durability facts

| Fact | Value |
| --- | --- |
| Bounded local | SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE (node:sqlite via D1) |
| Product persistence | NOT_SELECTED |
| IAM | NOT_SELECTED |
| network / reversible | false / true |
| productionRollbackProven | false |
| crossStoreDurable | false |
| openHard / deliveryReady | true / false |
| Authority F3 | process-local MemoryAuthorityResolver |

---

## Durable-state matrix (summary)

Items 1–14 classified MUST_BE_DURABLE / MAY_BE_PROCESS_LOCAL / MUST_FAIL_CLOSED_IF_MISSING — full table in §9 of 02.

Policy: restart ⇒ NO AUTO-RESUME ; crash after launch ⇒ UNKNOWN/REVIEW_REQUIRED ; retry ⇒ NEW ATTEMPT + NEW AUTH ; conversation ⇒ ZERO AUTHORITY.

---

## Restart/failure matrix (summary)

Cases D-01…D-10 fully specified in §10 of 02 (pre-ack, post-ack pre-consume, post-consume pre-attempt, pre-launch crash, post-launch crash, evidence gap, concurrent confirm, ack replay, stale contract, rollback impossible).

---

## Durability options

| Option | Verdict |
| --- | --- |
| DUR-1 Minimal durable authority + attempt journal | Core of recommendation |
| DUR-2 Bounded local D1 extension | PILOT-LOCAL PROOF HARNESS ONLY ≠ product durable ; may implement journal vehicle |
| DUR-3 Full product durability first | DEFER / OVER-SCOPED |
| DUR-4 Reconfirm after every restart | Policy overlay on DUR-1 |

---

## Recommendation

**`DUR-1+DUR-4-POLICY`** — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH

**Status :** `RECOMMENDED — NOT DECIDED`

---

## Proposed Morris durability decision

`PROPOSED DECISION — MORRIS GO REQUIRED` — adopt DUR-1+DUR-4-POLICY in next consolidated GO (not adopted in this cycle).

---

## B5 analysis

| Field | Value |
| --- | --- |
| Global B5 | OPEN · STOP BEFORE DELIVERY |
| Fixture bounded acceptance | ADOPTED (fixture path only) — does not cover REAL-prerequisites Delivery |
| Applicability | **CAS B5-A** — AS-1 + minimal journal do not modify/depend on B5 LPS satellite carry-forward |
| Proposed treatment | `BOUNDED ACCEPTANCE FOR F3 REAL-PREREQUISITES DELIVERY ONLY — B5 REMAINS GLOBAL OPEN — NO REAL EXECUTION AUTHORIZED` |
| Proposed status | `PROPOSED — MORRIS GO REQUIRED` |

---

## Future Delivery / QA scope

- Delivery: AS-1 surface + identity port + DUR journal + UNKNOWN policy + honesty flags ; no Cursor REAL ; no IAM/product DB SELECT
- QA independent: unit + adversarial + restart/replay/double-launch/stale/rollback drill + security assertions
- HARD evidence targets listed in §19 of 02 — no HARD CLOSED promise

---

## Status board

| Item | Status |
| --- | --- |
| IAM | NOT_SELECTED |
| Product persistence | NOT_SELECTED |
| B5 global | OPEN |
| B5 bounded (prereq) | PROPOSED |
| R-T-A3-1 | OPEN HARD — BLOCKS REAL |
| R-T-A3-2 | OPEN HARD — BLOCKS REAL |
| Gate D | NOT CONSUMED |
| Cursor REAL | BLOCKED |

---

## Read-only tests

| Suite | Files | Tests | Exit |
| --- | ---: | ---: | ---: |
| T-A3 decision | 4 | 50 | 0 |
| T-A7 hard foundation | 2 | 34 | 0 |
| F3 fixture | 1 | 9 | 0 |
| **Total** | **7** | **93** | **0** |

PASS ≠ HARD CLOSED. Logs under `.tmp-sfia-review/f3-accelerated-authority-durability/logs/`.

---

## Mutation counters

| Counter | Value |
| --- | ---: |
| Created docs | 1 (`02-…`) |
| README mutations | 0 |
| 01 mutations | 0 |
| app/** mutations | 0 |
| Project commits | 0 |
| Project pushes | 0 |
| Project PRs | 0 |
| Stage | 0 |
| Force | 0 |
| Gate D | 0 |
| Cursor REAL | 0 |

---

## Exact next consolidated GO

```
GO ACCELERATED F3 REAL PREREQUISITES DELIVERY + QA —
ADOPT DUR-1+DUR-4-POLICY — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH —
ACCEPT B5 BOUNDED FOR REAL-PREREQUISITES DELIVERY ONLY —
IMPLEMENT AS-1 AUTHORITY SURFACE —
IMPLEMENT MINIMAL DURABILITY BOUNDARY —
RUN CRITICAL QA / RESTART / REPLAY / ROLLBACK PROOFS —
NO CURSOR REAL —
NO GIT AUTO-WRITE —
NO GATE D CONSUMPTION —
IAM/PRODUCT PERSISTENCE REMAIN NOT_SELECTED UNLESS A SEPARATE MORRIS DECISION IS REQUIRED
```

---

## Verdict (GO §29)

```
F3 ACCELERATED REAL PREREQUISITES ARCHITECTURE COMPLETE —
AS-1 AUTHORITY SURFACE ADOPTED BY MORRIS —
A52-D03.1 BOUNDARY PRESERVED —
R-T-A3-2 DURABILITY BOUNDARY MAPPED —
MINIMAL DURABILITY OPTION RECOMMENDED —
DURABILITY OPTION NOT YET DECIDED —
B5 DELIVERY APPLICABILITY ASSESSED —
NEXT CONSOLIDATED DELIVERY + QA GATE PREPARED —
NO IAM SELECTED —
NO PRODUCT PERSISTENCE SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY —
NO REAL EXECUTION —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR MORRIS CONSOLIDATED DELIVERY + QA DECISION
```

---

## Full content of 02

# 02 — Accelerated F3 Authority + Durability Decision Pack

| Champ | Valeur |
| --- | --- |
| **Produit** | SFIA Studio — F3 |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | CAPA / DOC |
| **Critical** | OUI — EXPLICITE |
| **Gate Morris consommé** | `GO ACCELERATED F3 REAL PREREQUISITES ARCHITECTURE — ADOPT AS-1 AUTHORITY SURFACE DIRECTION — FRAME AND DECIDE THE MINIMAL DURABILITY PLAN FOR R-T-A3-2 — ASSESS B5 BOUNDED ACCEPTANCE FOR THE UPCOMING REAL-PREREQUISITES DELIVERY — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM OR PRODUCT PERSISTENCE AUTO-SELECT` |
| **Nature** | Decision pack accéléré — **DESIGN ONLY** |
| **AS-1** | **`DECIDED — ADOPTED BY MORRIS`** (architecture boundary only) |
| **Durability option** | **`RECOMMENDED — NOT DECIDED`** (Morris consomme dans le prochain GO consolidé) |
| **B5 bounded acceptance** | **`PROPOSED — MORRIS GO REQUIRED`** (CAS B5-A) |
| **IAM** | **`NOT_SELECTED`** |
| **Product persistence** | **`NOT_SELECTED`** |
| **Bounded local persistence** | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** (D1 / node:sqlite · ≠ product DB) |
| **Gate D** | **NOT CONSUMED** |
| **Cursor REAL** | **BLOCKED** |
| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD — BLOCKS REAL** (jamais fermés ici) |
| **Product mutation** | **NONE** — doc only · **NO `app/**`** |
| **Project commit / push / PR** | **aucun** |

> **Anti-fermeture :** ce document adopte **AS-1** comme frontière d'architecture uniquement, **recommande** (sans décider) un plan de durabilité minimale pour R-T-A3-2, et **propose** un bornage B5 pour le futur Delivery des prérequis REAL. Il **ne ferme pas** HARD, **n'exécute pas** REAL, **ne sélectionne pas** IAM ni product persistence, **ne consomme pas** Gate D, **n'implémente aucun code**.

---

## 1. Contexte accélération

Morris a validé une trajectoire accélérée pour réduire le nombre de cycles avant Gate D. Ce cycle consolide trois étapes autrefois séparées :

1. **validation** de l'architecture Authority Surface (AS-1) ;
2. **cadrage** du plan de durabilité minimale pour R-T-A3-2 ;
3. **préparation** du bornage B5 nécessaire au prochain gros cycle Delivery + QA des prérequis REAL.

**But du prochain GO Morris (idéal) :** en une seule décision, autoriser adoption du plan de durabilité + bornage B5 exact + Delivery Critical des prérequis REAL + QA Critical des prérequis REAL — tout en maintenant **Cursor REAL interdit** jusqu'au Gate D.

Chaîne F3 déjà intégrée sur `main` (`4b1a058…`, package `ec7d6c8…`, PR #333) :

```
F2 approved proposal → PREPARE → T-A4 ExecutionContract → confirmation explicite
  → T-A5 ExecutionAttempt → TestExecutionAdapter FIXTURE → T-A6 Evidence / ReviewBundle
  → réinjection Project Assistant → recommendation only
```

Gate C (`README.md`) et Authority Surface Decision (`01-…`) sont **READ-ONLY** ce cycle.

---

## 2. GO Morris

```
GO ACCELERATED F3 REAL PREREQUISITES ARCHITECTURE —
ADOPT AS-1 AUTHORITY SURFACE DIRECTION —
FRAME AND DECIDE THE MINIMAL DURABILITY PLAN FOR R-T-A3-2 —
ASSESS B5 BOUNDED ACCEPTANCE FOR THE UPCOMING REAL-PREREQUISITES DELIVERY —
DESIGN ONLY —
NO DELIVERY —
NO REAL EXECUTION —
NO IAM OR PRODUCT PERSISTENCE AUTO-SELECT
```

| Consomme | Ne consomme PAS |
| --- | --- |
| Adoption AS-1 comme frontière d'architecture | Sélection IAM / lib auth |
| Framing + recommandation durabilité R-T-A3-2 | Sélection product persistence / store SELECTED |
| Assessment B5 pour futur Delivery prérequis | Adoption durabilité (reste RECOMMENDED) |
| Préparation next consolidated GO | Bornage B5 (reste PROPOSED) |
| | Delivery · QA · Gate D · Cursor REAL · HARD closure · `app/**` |

**Sémantique :** *ADOPT AS-1* = adoption de la frontière d'architecture. *FRAME AND DECIDE THE MINIMAL DURABILITY PLAN* = produire le plan + recommandation ; **Morris** adopte l'option DUR-* dans le prochain GO consolidé. Cursor **ne** sélectionne **pas** seul une architecture de persistence.

---

## 3. Décisions antérieures contraignantes

| Décision | Statut | Portée pour ce pack |
| --- | --- | --- |
| **A52-D01** `.3` + STOP BEFORE DELIVERY | `DECIDED — ADOPTED BY MORRIS` | B5 global OPEN ; bornage path-spécifique possible |
| **A52-D02.2** | `DECIDED — ADOPTED BY MORRIS` | txn logique + compensation/idempotence avant Delivery ; garantie durable avant REAL |
| **A52-D03** `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` | AS-1 porte `.1` sans choisir IAM |
| **A52-D04.4** | `DECIDED — ADOPTED BY MORRIS` | mémoire bornée acceptable avant REAL ; aucune résolution durable acquise ; R-T-A3-2 OPEN HARD |
| **F3-D01…D11** | ADOPTED | D02 exact confirm · D07 process-local insuffisant · D11 REAL NO-GO now |
| **B5 fixture path** | `ADOPTED — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` | ≠ bornage pour Delivery prérequis REAL |
| **Gate C** | CONSUMED | R-T-A3-1/2 FURTHER REDUCED — REMAINS OPEN |
| **01 AS-*** | AS-1 was `RECOMMENDED — NOT DECIDED` | ce cycle adopte AS-1 |

**Ne pas rouvrir :** A52-D02.2, A52-D03 trajectory, A52-D04.4 principes, F3-D07 fail-closed post-restart.

---

## 4. AS-1 adoption record

### Statut

**`AS-1 = DECIDED — ADOPTED BY MORRIS`**

**Limite :** architecture boundary only — **non-effects** listés §5.

### Ce qu'AS-1 signifie (adopté)

| Élément | Contenu adopté |
| --- | --- |
| Surface | Critical Ack **dédiée** côté serveur |
| Identité | Authenticated identity injectée derrière un **port provider-agnostic** |
| Authz | `AuthorityResolverPort` reste **unique** frontière d'autorisation |
| N3 | **N3 ≠ Morris** |
| Morris gate | `canActAsMorris` **explicitement** vérifié |
| Binding | Exact Confirmation binding (contract id / version / digest) |
| Séparations | **authn ≠ authz ≠ confirmation ≠ execution** |
| Ack | **ne démarre jamais** Cursor |
| Conversation | **jamais** authority source |
| Trajectoire | **A52-D03.1** préservé |

### Source de l'adoption

- Decision pack `01-authority-surface-decision.md` : AS-1 `RECOMMENDED — NOT DECIDED`
- GO accéléré courant : **ADOPT AS-1 AUTHORITY SURFACE DIRECTION**
- Options AS-2 / AS-3 / AS-4 **non adoptées** (AS-3 reste **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** ; AS-4 over-scoped)

---

## 5. Non-effets AS-1

L'adoption AS-1 **n'implique PAS** :

| Non-effet | Statut |
| --- | --- |
| IAM provider | **`NOT_SELECTED`** |
| Lib auth (NextAuth, Clerk, Supabase Auth, etc.) | **aucune sélection** |
| Product persistence | **`NOT_SELECTED`** |
| Code / endpoint / server action | **aucun créé** |
| Adapter d'identité concret | **aucun choisi** |
| R-T-A3-1 CLOSED | **NON** — reste OPEN HARD |
| R-T-A3-2 CLOSED | **NON** — reste OPEN HARD |
| Cursor REAL autorisé | **NON** — BLOCKED |
| Gate D consommé | **NON** |
| Delivery | **NON** |
| Auto-resume après restart | **NON** |

AS-1 = **frontière**. Delivery + preuves + Gate D restent **futurs** et **séparés**.

---

## 6. A52-D02 / A52-D04 constraints

### A52-D02.2 (préservé)

- transaction **logique** ;
- **compensation** ;
- **idempotence** ;
- partial failures gérées **avant** Delivery ;
- **garantie durable obligatoire avant REAL**.

### A52-D04.4 (préservé)

- mémoire bornée acceptable **uniquement avant REAL** ;
- **aucune** résolution durable acquise aujourd'hui ;
- R-T-A3-2 reste **OPEN HARD**.

### Question de ce pack

> **Quel est le plus petit périmètre de durabilité qui permet un futur pilote Cursor REAL borné sans construire une plateforme de persistence produit ?**

Réponse recommandée (non décidée) : **DUR-1 + éléments DUR-4** — journal minimal d'autorité/attempt + reconfirm après restart + no auto-resume + UNKNOWN après crash post-launch. Voir §§11–14.

---

## 7. Current durability baseline

Confirmé depuis le repo (`4b1a058…`) :

| Fait | Valeur honnête |
| --- | --- |
| Bounded local persistence | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE** |
| Technology | **node:sqlite via D1** |
| Product persistence | **`NOT_SELECTED`** |
| IAM | **`NOT_SELECTED`** |
| network | **false** |
| reversible | **true** |
| accessSurface | **INTERNAL_ONLY** |
| `productionRollbackProven` | **false** |
| `crossStoreDurable` | **false** |
| `openHard` | **true** |
| `deliveryReady` | **false** |
| Authority runtime F3 | **process-local `MemoryAuthorityResolver`** |
| Confirmation consume | atomique en mémoire (double-consume forbidden) — **pas** durable cross-restart |
| Attempt statuses | `accepted` \| `running` \| `result_pending` \| `succeeded` \| `failed` \| `timeout` \| `cancelled` — **pas** encore de statut `UNKNOWN` produit |
| Idempotency multi-process | cache process-local — **pas** de preuve production concurrency |

### Missing proofs HARD (contractuels — inchangés)

1. authenticated Critical acknowledge API
2. cross-store durable Project↔Cycle transaction
3. authorized non-prod rollback drill
4. production concurrency proof

**Ce cycle ne les ferme pas.** Il mappe le périmètre minimal pour les adresser dans un futur Delivery+QA.

---

## 8. Exact pilot boundary

Le plan de durabilité est dimensionné **pour le premier pilote REAL F3**, pas pour une production complète.

| Contrainte pilote | Valeur |
| --- | --- |
| Environnement | **local** · borné |
| Contract | **exact** ExecutionContract (id + version + digest) |
| Confirmation | **exacte** · liée au contrat |
| Attempt | **une seule** Attempt active par contrat |
| Auto-retry | **interdit** |
| Git remote write | **interdit** (hors F3 execution) |
| Push / PR / merge auto | **interdit** |
| Reprise auto après crash | **interdit** (`NO AUTO-RESUME`) |
| Conversation | **ZERO AUTHORITY** |
| Cursor launch | **hors** Critical Ack ; Attempt seulement après chaîne T-A4→confirm→T-A5 |
| Mode | REAL explicite (futur) — **pas** silent fallback |

---

## 9. Durable-state matrix

Légende :

- **MUST_BE_DURABLE** — doit survivre restart pour sécurité / anti-replay / reconciliation
- **MAY_BE_PROCESS_LOCAL** — peut rester en mémoire si fail-closed et reconfirm
- **MUST_FAIL_CLOSED_IF_MISSING** — absence ⇒ refus / no-op / REVIEW_REQUIRED

| # | Fait | Classification | Rationale |
| ---: | --- | --- | --- |
| 1 | Authenticated actor reference | **MUST_BE_DURABLE** (preuve d'ack) · session live **MAY_BE_PROCESS_LOCAL** | L'identité ayant ack'd doit être auditable après restart ; la session live peut expirer → re-authn |
| 2 | Authority evidence / Morris authorization proof | **MUST_BE_DURABLE** (journal anti-replay) · active grant **MAY_BE_PROCESS_LOCAL** sous DUR-4 | Grant actif invalidé au restart (DUR-4) ; journal conserve *qu'un* ack a existé pour anti-replay |
| 3 | Critical acknowledgement | **MUST_BE_DURABLE** | Preuve d'ack + binding exact ; sans elle, REAL impossible après restart |
| 4 | Confirmation identity | **MUST_BE_DURABLE** | Id confirmation lié au contract ; anti double-consume |
| 5 | Confirmation consumption | **MUST_BE_DURABLE** | Consume-once doit survivre ; sinon replay post-restart |
| 6 | ExecutionContract id | **MUST_BE_DURABLE** | Identité du contrat |
| 7 | ExecutionContract version | **MUST_BE_DURABLE** | Stale version → fail-closed |
| 8 | Contract digest / immutable fingerprint | **MUST_BE_DURABLE** | Binding exact F3-D02 |
| 9 | Selected agent identity | **MUST_BE_DURABLE** (si Attempt créée) · **MAY_BE_PROCESS_LOCAL** avant Attempt | Après sélection confirmée pour Attempt : journal ; avant : peut être re-sélectionné avec reconfirm |
| 10 | Attempt identity | **MUST_BE_DURABLE** (dès création) | Empêche duplicate launch / orphan |
| 11 | Attempt launch state | **MUST_BE_DURABLE** | Distingue pre-launch / launched / UNKNOWN |
| 12 | Evidence references | **MUST_BE_DURABLE** (si résultat connu) · **MAY_BE_PROCESS_LOCAL** sinon | Reconciliation D-06 |
| 13 | ReviewBundle reference | **MUST_BE_DURABLE** (si produit) · **MAY_BE_PROCESS_LOCAL** sinon | Post-T-A6 |
| 14 | Audit / correlation / idempotency identity | **MUST_BE_DURABLE** | Anti-replay · concurrent confirm · audit trail |

### Policy croisée (recommandée)

| Situation | Policy |
| --- | --- |
| Restart | **NO AUTO-RESUME** · droits REAL actifs **invalidés** |
| Crash après launch | Attempt → **UNKNOWN / REVIEW_REQUIRED** · jamais auto-retry |
| Retry | **NEW ATTEMPT** + **NEW AUTHORIZATION** si requis |
| Fact manquant dans journal | **MUST_FAIL_CLOSED_IF_MISSING** |

---

## 10. Restart / failure matrix (D-01…D-10)

| Case | State before | Durable facts needed | After restart | Safe recovery | Manual gate | Future proof |
| --- | --- | --- | --- | --- | --- | --- |
| **D-01** Restart avant Critical Ack | Pas d'ack | Aucun droit | Aucune autorité implicite | Recommencer ack | Non (fail-closed) | Restart sans grant |
| **D-02** Restart après Ack avant consumption | Ack granted, not consumed | Ack + confirmation id + binding | **Soit** ack vérifiable dans journal **soit** nouvelle confirmation Morris obligatoire | Reconfirm (DUR-4) ou resume vérifié (si DUR-1 pur — **non** recommandé seul) | Oui si ambigu | Ack durable + expire |
| **D-03** Restart après consumption avant Attempt | Consumed, no Attempt | Consume record + contract binding | **Jamais** reconstruire depuis conversation | Nouvelle Attempt seulement avec nouvelle auth si grant invalidé | Oui | Consume durable + no conversation authority |
| **D-04** Crash après création Attempt avant launch | Attempt `accepted`, not launched | Attempt id + contract + consume | No auto-launch ; Attempt non-lancée visible | Cancel/terminaliser ou NEW ATTEMPT + NEW AUTH | Oui | Pre-launch durable state |
| **D-05** Crash après launch avant résultat | Attempt `running` / `result_pending` | Attempt id + launch marker | **UNKNOWN / REVIEW_REQUIRED** · **no auto-retry** | Revue manuelle ; NEW ATTEMPT seulement après gate | **Oui — obligatoire** | UNKNOWN policy + no auto-retry |
| **D-06** Résultat connu, Evidence non ingérée | Terminal result exists | Attempt + result refs | Reprendre ingestion Evidence **sans** re-launch | Ingest-only path | Si digest mismatch | Idempotent evidence ingest |
| **D-07** Double-click / concurrent confirmation | Race sur grant/consume | Idempotency key + confirmation id | Un seul consume gagne ; autre → `ALREADY_CONSUMED` / conflict | Fail-closed second | Non si correct | Concurrent confirm test |
| **D-08** Replay ack après restart | Ack historique | Ack journal + consume state | Replay **refusé** (anti-replay) | Nouveau ack seulement | Si override | Replay harness |
| **D-09** Stale contract version | Version/digest mismatch | Contract version + digest | Fail-closed | Re-prepare contract + nouvel ack | Oui | Stale binding test |
| **D-10** Rollback impossible | Compensation fail | Compensation journal + Attempt state | STOP · état résiduel **REVIEW_REQUIRED** | Drill manuel autorisé non-prod | **Oui** | Authorized rollback drill |

---

## 11. Durability options

**Statut de chaque option :** `OPTION — NOT SELECTED` (sauf recommandation §13).

### OPTION DUR-1 — MINIMAL DURABLE AUTHORITY + ATTEMPT JOURNAL

| Critère | Contenu |
| --- | --- |
| **Objectif** | Durabiliser **uniquement** les faits nécessaires pour prévenir replay, reconstruction d'autorité, et duplicate launch |
| **Contenu journal** | Items §9 classés MUST_BE_DURABLE (ack, consume, contract binding, attempt id/launch, idempotency/audit) |
| **Réutilisation** | Confirmation request/grant/consume · ExecutionContract · Attempt · audit ports · D1 audit patterns (sans SELECT product DB) |
| **Product persistence** | **`NOT_SELECTED`** — journal = bounded durability layer, pas plateforme produit |
| **IAM** | **`NOT_SELECTED`** |
| **Compat A52-D02.2** | txn logique + idempotence + compensation partielle |
| **Compat A52-D04.4** | ne prétend pas T-A6 COMPLETE mémoire ; journal borné pilote |
| **Impact R-T-A3-2** | Adresse le gap minimal pour pilote REAL borné |
| **Dette** | Faible–moyenne |
| **Admissible prochain pas** | **YES** |

### OPTION DUR-2 — BOUNDED LOCAL D1 EXTENSION FOR PILOT PROOF

| Critère | Contenu |
| --- | --- |
| **Objectif** | Étendre D1/node:sqlite existant comme **PROOF HARNESS / PILOT-LOCAL** durability |
| **Lecture honnête** | D1 actuel = bounded local audit + project foundation · **`crossStoreDurable=false`** · **`productionRollbackProven=false`** |
| **Peut-il satisfaire HARD contract REAL tel quel ?** | **NON** — reste preuve locale / harness, **pas** « durable production » |
| **Usage admissible** | Support technique possible pour **implémenter** le journal DUR-1 en local sans SELECT product DB — **à condition** de ne jamais renommer la preuve locale en durable production |
| **Label** | **PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE** |
| **Product persistence** | Reste **`NOT_SELECTED`** même si D1 est réutilisé |
| **Admissible comme seule réponse R-T-A3-2** | **NO** (insuffisant seul pour claim HARD closed / production durable) |
| **Admissible comme véhicule d'implémentation du journal** | **CONDITIONAL** — sous label harness + flags honesty |

### OPTION DUR-3 — FULL PRODUCT DURABILITY FIRST

| Critère | Contenu |
| --- | --- |
| **Objectif** | Plateforme persistence produit complète avant pilote |
| **Évaluation** | Comparaison seulement |
| **Verdict** | **DEFER / OVER-SCOPED** pour premier pilote |
| **Product persistence** | Impliquerait SELECT — **interdit** par ce GO |
| **Admissible prochain pas** | **NO** |

### OPTION DUR-4 — RECONFIRM AFTER EVERY RESTART

| Critère | Contenu |
| --- | --- |
| **Objectif** | Aucun droit REAL durable **réactivable** ; restart invalide l'autorité active ; Morris doit reconfirmer ; journal durable surtout pour **anti-replay / reconciliation** |
| **Effets** | NO AUTO-RESUME · crash post-launch → UNKNOWN · retry = NEW ATTEMPT + NEW AUTH |
| **Compat R-T-A3-2** | **OUI** si combiné avec journal anti-replay (sinon fail-closed sans mémoire = risque de replay aveugle / perte d'Attempt) |
| **Seul** | Réduit l'état d'autorité active durable, mais **ne suffit pas** sans journal Attempt/consume |
| **Admissible** | **YES as policy overlay** sur DUR-1 |

---

## 12. Comparative matrix

| Critère | DUR-1 | DUR-2 | DUR-3 | DUR-4 |
| --- | --- | --- | --- | --- |
| Statut | OPTION | OPTION | OPTION | OPTION |
| Sécurité pilote | Haute si +DUR-4 | Locale seulement | Haute plateforme / hors scope | Haute (reconfirm) |
| Simplicité | Haute | Moyenne (réutilise D1) | Très basse | Haute policy |
| Dette | Faible | Risque surclaim si mal labellé | Très haute | Faible |
| Product DB SELECT | NON | NON (si honnête) | **OUI (interdit)** | NON |
| IAM SELECT | NON | NON | Souvent | NON |
| Satisfait A52-D02.2 borné | OUI | Partiel (local) | Overkill | Partiel seul |
| Respecte A52-D04.4 | OUI (borné) | OUI si non promu | Contredit « minimal » | OUI |
| Anti-replay durable | OUI | Harness only | OUI | Besoin journal |
| No auto-resume | Compatible | Compatible | N/A | **Natif** |
| UNKNOWN post-launch | À ajouter | À ajouter | Possible | **Natif** |
| Admissible prochain Delivery | **YES** | Support only | NO | Overlay **YES** |

---

## 13. Recommendation durability

### Recommandation

**`DUR-1 — MINIMAL DURABLE AUTHORITY + ATTEMPT JOURNAL`**
**combiné avec éléments de `DUR-4` :**

- restart ⇒ **invalidate active REAL authority** ⇒ **reconfirm Morris** ;
- **NO AUTO-RESUME** ;
- crash après launch ⇒ **UNKNOWN / REVIEW_REQUIRED** ;
- retry ⇒ **NEW ATTEMPT + NEW AUTHORIZATION IF REQUIRED** ;
- conversation ⇒ **ZERO AUTHORITY** ;
- Git remote ⇒ **OUTSIDE F3 EXECUTION**.

### Statut

**`RECOMMENDED — NOT DECIDED`**

Morris consomme l'adoption dans le **prochain GO consolidé**.

### Pourquoi cette combinaison

| Critère | Lecture |
| --- | --- |
| Sécurité | Maximise fail-closed ; empêche replay et autorité implicite post-restart |
| Simplicité | Plus petit journal utile ; pas de plateforme DB produit |
| Dette | Minimale ; ports + journal borné |
| Repo-first | Réutilise T-A3/T-A4/T-A5 + patterns D1 audit **sans** SELECT product persistence |
| A52-D02.2 / D04.4 | Respectés (logique + compensation + mémoire/journal borné avant REAL) |
| F3-D07 | Aligné (process-local insuffisant ; restart fail-closed) |

### Lecture honnête DUR-2

D1/node:sqlite peut servir de **véhicule d'implémentation locale** du journal DUR-1 (proof harness), **mais** :

- **`crossStoreDurable` reste false** jusqu'à preuve contraire ;
- **`productionRollbackProven` reste false** jusqu'au drill autorisé ;
- **interdit** de présenter D1 comme « product durable » ou de SELECT product persistence par glissement.

### Pourquoi pas DUR-3

Over-scoped · sélection product persistence · disproportionné pour premier pilote.

### Label court de la recommandation

**`DUR-1+DUR-4-POLICY` — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH`**

---

## 14. Proposed Morris durability decision

**Statut :** `PROPOSED DECISION — MORRIS GO REQUIRED`

**Proposition (non adoptée ici) :**

> Adopter **DUR-1+DUR-4-POLICY** comme plan de durabilité minimale pour le futur pilote Cursor REAL F3 : journal durable borné des faits d'autorité/attempt nécessaires à l'anti-replay et à la reconciliation ; invalider toute autorité REAL active après restart ; exiger reconfirm Morris ; interdire auto-resume et auto-retry ; traiter crash post-launch comme UNKNOWN/REVIEW_REQUIRED ; réutiliser éventuellement D1 **uniquement** comme proof harness local sans SELECT product persistence ni IAM ; laisser R-T-A3-2 OPEN HARD jusqu'aux preuves QA.

**Interdit dans ce document :** `DECIDED — ADOPTED BY MORRIS` pour DUR-*.

---

## 15. B5 applicability

### B5 global

**`OPEN`** · **`STOP BEFORE DELIVERY`** (A52-D01) — **jamais CLOSED** ici.

### Bornage existant

`ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` — **limité au path FIXTURE**. Il **ne couvre pas** le futur Delivery des **prérequis REAL**.

### Est-ce que AS-1 + durability touchent le mécanisme B5 / LPS satellite ?

| Zone | Touche B5 LPS satellite carry-forward ? |
| --- | --- |
| AS-1 Critical Ack surface + identity port | **NON** — authn/ack path ; pas de mutation LPS satellite |
| Minimal authority/attempt journal | **NON** — journal Attempt/ack/consume ; hors carry-forward LPS `decisionIds` satellites |
| Proof harness D1 audit extension (si utilisé) | **NON** si borné au journal F3 authority/attempt — **ne dépend pas** du path B5 LPS |
| Refonte recordHumanDecision ↔ LPS | **HORS SCOPE** — non proposée |

### Verdict d'applicabilité

**CAS B5-A** — le futur lot prérequis REAL (AS-1 + journal minimal) **ne modifie pas** et **ne dépend pas** du chemin B5 / LPS satellite carry-forward.

**CAS B5-B** : **NON applicable** sous le scope recommandé.

---

## 16. Proposed B5 bounded acceptance or blocker

**Statut :** `PROPOSED — MORRIS GO REQUIRED`

### Proposition (CAS B5-A)

```
BOUNDED ACCEPTANCE FOR F3 REAL-PREREQUISITES DELIVERY ONLY —
B5 REMAINS GLOBAL OPEN —
NO REAL EXECUTION AUTHORIZED.
```

### Portée exacte du bornage proposé

| Inclus | Exclus |
| --- | --- |
| Delivery + QA des **prérequis** REAL (AS-1 surface, journal DUR, tests) | Cursor REAL execution |
| Mutations `app/**` **bornées** aux composants prérequis | Fermeture B5 globale |
| | Gate D |
| | Product persistence SELECT |
| | IAM SELECT (sauf gate Morris séparé si indispensable) |

### Si Morris refuse le bornage

STOP BEFORE DELIVERY (A52-D01) jusqu'à correctif / nouveau GO — **pas** de Delivery silencieux.

---

## 17. Future Delivery package

**Phase :** Delivery Critical des prérequis REAL (futur cycle consolidé) — **pas** ce cycle.

### Périmètre borné (indicatif)

| Zone | Action minimale |
| --- | --- |
| Identity | `AuthenticatedIdentityPort` (provider-agnostic) + fake/test adapter |
| Surface | Dedicated Critical Ack server action/endpoint (no launch) |
| Authz | Wire ack → existing `AuthorityResolverPort` / Confirmation |
| Journal | Minimal durable authority + attempt journal (DUR-1) |
| Policy | Restart invalidate + reconfirm (DUR-4 overlay) |
| Attempt | UNKNOWN/REVIEW_REQUIRED path post-launch crash |
| Flags | Keep `openHard=true`, `deliveryReady=false`, `crossStoreDurable` honesty |
| D1 | Optional harness store for journal — **label PILOT-LOCAL** |

### Fichiers / zones existantes susceptibles (futur — non mutés ici)

- `app/lib/oa/decision/**` (ports, confirmation consume durability hooks)
- `app/lib/oa/execution-contract/**`
- `app/lib/oa/execution-attempt/**` (UNKNOWN policy)
- `app/lib/oa/evidence-review/**` (idempotent ingest)
- `app/lib/platform/t-a7/**` (honesty flags / readiness)
- `app/lib/d1/**` (optional harness tables — not product SELECT)
- `app/features/project-assistant/f3/**` (wire ack separation ; still no REAL launch)

### Éviter absolument

- plateforme IAM complète ;
- migration de tout T-A3 ;
- refonte T-A4/T-A5/T-A6 ;
- nouvelle orchestration / second authority engine ;
- worker/queue non nécessaire ;
- cloud ;
- Git automation ;
- Cursor REAL adapter.

---

## 18. Future QA package

**Phase :** QA Critical indépendante **après** Delivery interne — échec QA **jamais** masqué par Delivery.

### Suites minimales

| Suite | Objectif |
| --- | --- |
| Unitaires AS-1 | authn→actor mapping · never-trust client · N3≠Morris · canActAsMorris |
| Adversariaux | hostile identity · forged actorId · displayName · CSRF/confused deputy |
| Restart | D-01…D-05 fail-closed / reconfirm / UNKNOWN |
| Replay | D-08 ack replay refused |
| Double-launch / concurrent | D-07 |
| Stale contract | D-09 |
| Rollback drill | D-10 — authorized non-prod only |
| Runtime E2E borné | ack→confirm→attempt **sans** Cursor REAL effects |
| Security assertions | authn≠authz≠confirm≠execute · conversation zero authority |
| Evidence | ingest idempotent (D-06) |

### Evidence attendu

- logs tests + matrices D-01…D-10 ;
- flags honesty inchangés sauf preuves explicitement gagnées ;
- **PAS** de claim HARD CLOSED sans Morris + preuves.

---

## 19. HARD evidence targets

### R-T-A3-1 (futur)

- authenticated actor source ;
- provider-agnostic identity port ;
- separate Morris authorization ;
- `canActAsMorris` ;
- exact Critical Ack binding ;
- anti-replay ;
- restart behavior ;
- audit ;
- no client identity trust.

### R-T-A3-2 (futur)

- durable facts explicitly scoped (§9) ;
- duplicate launch prevention ;
- crash state reconciliation ;
- unknown state policy ;
- idempotency ;
- rollback drill ;
- concurrent confirmation protection ;
- restart proof ;
- no auto-retry.

**Ne pas promettre HARD CLOSED avant QA + décision Morris.**

---

## 20. Gates / stop conditions

| Gate / condition | Statut / règle |
| --- | --- |
| Gate A | CONSUMED (historique) |
| Gate B | CONSUMED + QA + MERGED (PR #333) |
| Gate C | CONSUMED (README READ-ONLY) |
| Authority Surface Decision | CONSUMED ; AS-1 **ADOPTED** (boundary) |
| Durability Decision | Pack produit ; option **NOT DECIDED** |
| B5 bounded (prérequis) | **PROPOSED** |
| Gate D | **NOT CONSUMED** |
| Cursor REAL | **BLOCKED** |

**STOP si :** main diverge de `4b1a058…` · README/01 mutés · `app/**` muté · IAM/product persistence auto-selected · B5/HARD déclarés CLOSED · Delivery/REAL/Gate D exécutés · nouveau store présenté SELECTED sans Morris.

---

## 21. Debt / simplicity challenge

| Question | Réponse |
| --- | --- |
| Utile maintenant ? | **Oui** — réduit cycles avant Gate D |
| Plus simple existe ? | DUR-4 seul : trop faible sans journal ; DUR-3 : trop gros |
| Dette créée ? | Bornée (ports + journal + policy) |
| Repo-first ? | Oui |
| Second moteur autorité ? | Non |
| Confond authn/authz/confirm/exec ? | Non (AS-1) |
| IAM implicite ? | Non |
| Product DB implicite ? | Non (DUR-2 labellé harness only) |
| Gain justifie journal ? | Oui — sans journal, R-T-A3-2 reste non adressé pour pilote |

---

## 22. Anti-claims

Ce cycle **ne revendique PAS** :

- HARD CLOSED / R-T-A3-1 CLOSED / R-T-A3-2 CLOSED ;
- B5 CLOSED global ;
- T-A6 COMPLETE ;
- IAM SELECTED ;
- product persistence SELECTED ;
- `crossStoreDurable=true` ;
- `productionRollbackProven=true` ;
- Cursor REAL autorisé ;
- Gate D consommé ;
- Delivery exécuté ;
- D1 = durable production ;
- conversation = authority ;
- process-local MemoryAuthority = suffisant pour REAL.

---

## 23. Next consolidated GO

Si Morris accepte la recommandation DUR-1+DUR-4-POLICY et le bornage B5-A :

```
GO ACCELERATED F3 REAL PREREQUISITES DELIVERY + QA —
ADOPT DUR-1+DUR-4-POLICY — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH —
ACCEPT B5 BOUNDED FOR REAL-PREREQUISITES DELIVERY ONLY —
IMPLEMENT AS-1 AUTHORITY SURFACE —
IMPLEMENT MINIMAL DURABILITY BOUNDARY —
RUN CRITICAL QA / RESTART / REPLAY / ROLLBACK PROOFS —
NO CURSOR REAL —
NO GIT AUTO-WRITE —
NO GATE D CONSUMPTION —
IAM/PRODUCT PERSISTENCE REMAIN NOT_SELECTED UNLESS A SEPARATE MORRIS DECISION IS REQUIRED
```

**Phases internes obligatoires du futur cycle :** PHASE DELIVERY puis PHASE QA INDEPENDENT.

Si une techno IAM ou product persistence devient indispensable : **ne pas auto-sélectionner** — produire un gate de décision minimal séparé.

---

## 24. Verdict

```
F3 ACCELERATED REAL PREREQUISITES ARCHITECTURE COMPLETE —
AS-1 AUTHORITY SURFACE ADOPTED BY MORRIS —
A52-D03.1 BOUNDARY PRESERVED —
R-T-A3-2 DURABILITY BOUNDARY MAPPED —
MINIMAL DURABILITY OPTION RECOMMENDED —
DURABILITY OPTION NOT YET DECIDED —
B5 DELIVERY APPLICABILITY ASSESSED —
NEXT CONSOLIDATED DELIVERY + QA GATE PREPARED —
NO IAM SELECTED —
NO PRODUCT PERSISTENCE SELECTED —
NO PRODUCT MUTATION —
NO DELIVERY —
NO REAL EXECUTION —
R-T-A3-1 REMAINS OPEN HARD —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT CONSUMED —
CURSOR REAL BLOCKED —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
READY FOR MORRIS CONSOLIDATED DELIVERY + QA DECISION
```

---

## Annex A — Git Truth (ce cycle)

| Élément | Valeur |
| --- | --- |
| Worktree | `…/worktrees/f3-real-hard-prerequisites` |
| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
| HEAD / origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Remote framing | **ABSENT** |
| Inbound handoff tip | `90ea88f7b700aba48ca08729ddc98761fc953853` |
| Inbound handoff blob | `4cb8d34e2699267fe6f757eeb44acfc2c8b22227` |
| Template | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Created file | `02-accelerated-authority-durability-decision.md` |
| README / 01 | READ-ONLY · byte-identical |

## Annex B — Status summary

| Item | Status |
| --- | --- |
| AS-1 | **DECIDED — ADOPTED BY MORRIS** (boundary only) |
| DUR-1+DUR-4-POLICY | **RECOMMENDED — NOT DECIDED** |
| B5-A bounded acceptance | **PROPOSED — MORRIS GO REQUIRED** |
| IAM | NOT_SELECTED |
| Product persistence | NOT_SELECTED |
| R-T-A3-1 | OPEN HARD — BLOCKS REAL |
| R-T-A3-2 | OPEN HARD — BLOCKS REAL |
| Gate D | NOT CONSUMED |
| Cursor REAL | BLOCKED |


---

## Complete diff (02 new file)

```diff
--- /dev/null	2026-08-11 22:01:23
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/02-accelerated-authority-durability-decision.md	2026-08-11 22:00:46
@@ -0,0 +1,690 @@
+# 02 — Accelerated F3 Authority + Durability Decision Pack
+
+| Champ | Valeur |
+| --- | --- |
+| **Produit** | SFIA Studio — F3 |
+| **Cycle** | 6 — Architecture technique |
+| **Profil** | Critical |
+| **Typologie** | CAPA / DOC |
+| **Critical** | OUI — EXPLICITE |
+| **Gate Morris consommé** | `GO ACCELERATED F3 REAL PREREQUISITES ARCHITECTURE — ADOPT AS-1 AUTHORITY SURFACE DIRECTION — FRAME AND DECIDE THE MINIMAL DURABILITY PLAN FOR R-T-A3-2 — ASSESS B5 BOUNDED ACCEPTANCE FOR THE UPCOMING REAL-PREREQUISITES DELIVERY — DESIGN ONLY — NO DELIVERY — NO REAL EXECUTION — NO IAM OR PRODUCT PERSISTENCE AUTO-SELECT` |
+| **Nature** | Decision pack accéléré — **DESIGN ONLY** |
+| **AS-1** | **`DECIDED — ADOPTED BY MORRIS`** (architecture boundary only) |
+| **Durability option** | **`RECOMMENDED — NOT DECIDED`** (Morris consomme dans le prochain GO consolidé) |
+| **B5 bounded acceptance** | **`PROPOSED — MORRIS GO REQUIRED`** (CAS B5-A) |
+| **IAM** | **`NOT_SELECTED`** |
+| **Product persistence** | **`NOT_SELECTED`** |
+| **Bounded local persistence** | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE ONLY** (D1 / node:sqlite · ≠ product DB) |
+| **Gate D** | **NOT CONSUMED** |
+| **Cursor REAL** | **BLOCKED** |
+| **HARD R-T-A3-1 / R-T-A3-2** | **OPEN HARD — BLOCKS REAL** (jamais fermés ici) |
+| **Product mutation** | **NONE** — doc only · **NO `app/**`** |
+| **Project commit / push / PR** | **aucun** |
+
+> **Anti-fermeture :** ce document adopte **AS-1** comme frontière d'architecture uniquement, **recommande** (sans décider) un plan de durabilité minimale pour R-T-A3-2, et **propose** un bornage B5 pour le futur Delivery des prérequis REAL. Il **ne ferme pas** HARD, **n'exécute pas** REAL, **ne sélectionne pas** IAM ni product persistence, **ne consomme pas** Gate D, **n'implémente aucun code**.
+
+---
+
+## 1. Contexte accélération
+
+Morris a validé une trajectoire accélérée pour réduire le nombre de cycles avant Gate D. Ce cycle consolide trois étapes autrefois séparées :
+
+1. **validation** de l'architecture Authority Surface (AS-1) ;
+2. **cadrage** du plan de durabilité minimale pour R-T-A3-2 ;
+3. **préparation** du bornage B5 nécessaire au prochain gros cycle Delivery + QA des prérequis REAL.
+
+**But du prochain GO Morris (idéal) :** en une seule décision, autoriser adoption du plan de durabilité + bornage B5 exact + Delivery Critical des prérequis REAL + QA Critical des prérequis REAL — tout en maintenant **Cursor REAL interdit** jusqu'au Gate D.
+
+Chaîne F3 déjà intégrée sur `main` (`4b1a058…`, package `ec7d6c8…`, PR #333) :
+
+```
+F2 approved proposal → PREPARE → T-A4 ExecutionContract → confirmation explicite
+  → T-A5 ExecutionAttempt → TestExecutionAdapter FIXTURE → T-A6 Evidence / ReviewBundle
+  → réinjection Project Assistant → recommendation only
+```
+
+Gate C (`README.md`) et Authority Surface Decision (`01-…`) sont **READ-ONLY** ce cycle.
+
+---
+
+## 2. GO Morris
+
+```
+GO ACCELERATED F3 REAL PREREQUISITES ARCHITECTURE —
+ADOPT AS-1 AUTHORITY SURFACE DIRECTION —
+FRAME AND DECIDE THE MINIMAL DURABILITY PLAN FOR R-T-A3-2 —
+ASSESS B5 BOUNDED ACCEPTANCE FOR THE UPCOMING REAL-PREREQUISITES DELIVERY —
+DESIGN ONLY —
+NO DELIVERY —
+NO REAL EXECUTION —
+NO IAM OR PRODUCT PERSISTENCE AUTO-SELECT
+```
+
+| Consomme | Ne consomme PAS |
+| --- | --- |
+| Adoption AS-1 comme frontière d'architecture | Sélection IAM / lib auth |
+| Framing + recommandation durabilité R-T-A3-2 | Sélection product persistence / store SELECTED |
+| Assessment B5 pour futur Delivery prérequis | Adoption durabilité (reste RECOMMENDED) |
+| Préparation next consolidated GO | Bornage B5 (reste PROPOSED) |
+| | Delivery · QA · Gate D · Cursor REAL · HARD closure · `app/**` |
+
+**Sémantique :** *ADOPT AS-1* = adoption de la frontière d'architecture. *FRAME AND DECIDE THE MINIMAL DURABILITY PLAN* = produire le plan + recommandation ; **Morris** adopte l'option DUR-* dans le prochain GO consolidé. Cursor **ne** sélectionne **pas** seul une architecture de persistence.
+
+---
+
+## 3. Décisions antérieures contraignantes
+
+| Décision | Statut | Portée pour ce pack |
+| --- | --- | --- |
+| **A52-D01** `.3` + STOP BEFORE DELIVERY | `DECIDED — ADOPTED BY MORRIS` | B5 global OPEN ; bornage path-spécifique possible |
+| **A52-D02.2** | `DECIDED — ADOPTED BY MORRIS` | txn logique + compensation/idempotence avant Delivery ; garantie durable avant REAL |
+| **A52-D03** `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` | AS-1 porte `.1` sans choisir IAM |
+| **A52-D04.4** | `DECIDED — ADOPTED BY MORRIS` | mémoire bornée acceptable avant REAL ; aucune résolution durable acquise ; R-T-A3-2 OPEN HARD |
+| **F3-D01…D11** | ADOPTED | D02 exact confirm · D07 process-local insuffisant · D11 REAL NO-GO now |
+| **B5 fixture path** | `ADOPTED — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` | ≠ bornage pour Delivery prérequis REAL |
+| **Gate C** | CONSUMED | R-T-A3-1/2 FURTHER REDUCED — REMAINS OPEN |
+| **01 AS-*** | AS-1 was `RECOMMENDED — NOT DECIDED` | ce cycle adopte AS-1 |
+
+**Ne pas rouvrir :** A52-D02.2, A52-D03 trajectory, A52-D04.4 principes, F3-D07 fail-closed post-restart.
+
+---
+
+## 4. AS-1 adoption record
+
+### Statut
+
+**`AS-1 = DECIDED — ADOPTED BY MORRIS`**
+
+**Limite :** architecture boundary only — **non-effects** listés §5.
+
+### Ce qu'AS-1 signifie (adopté)
+
+| Élément | Contenu adopté |
+| --- | --- |
+| Surface | Critical Ack **dédiée** côté serveur |
+| Identité | Authenticated identity injectée derrière un **port provider-agnostic** |
+| Authz | `AuthorityResolverPort` reste **unique** frontière d'autorisation |
+| N3 | **N3 ≠ Morris** |
+| Morris gate | `canActAsMorris` **explicitement** vérifié |
+| Binding | Exact Confirmation binding (contract id / version / digest) |
+| Séparations | **authn ≠ authz ≠ confirmation ≠ execution** |
+| Ack | **ne démarre jamais** Cursor |
+| Conversation | **jamais** authority source |
+| Trajectoire | **A52-D03.1** préservé |
+
+### Source de l'adoption
+
+- Decision pack `01-authority-surface-decision.md` : AS-1 `RECOMMENDED — NOT DECIDED`
+- GO accéléré courant : **ADOPT AS-1 AUTHORITY SURFACE DIRECTION**
+- Options AS-2 / AS-3 / AS-4 **non adoptées** (AS-3 reste **`NOT ADMISSIBLE FOR REAL UNDER CURRENT MORRIS DECISION`** ; AS-4 over-scoped)
+
+---
+
+## 5. Non-effets AS-1
+
+L'adoption AS-1 **n'implique PAS** :
+
+| Non-effet | Statut |
+| --- | --- |
+| IAM provider | **`NOT_SELECTED`** |
+| Lib auth (NextAuth, Clerk, Supabase Auth, etc.) | **aucune sélection** |
+| Product persistence | **`NOT_SELECTED`** |
+| Code / endpoint / server action | **aucun créé** |
+| Adapter d'identité concret | **aucun choisi** |
+| R-T-A3-1 CLOSED | **NON** — reste OPEN HARD |
+| R-T-A3-2 CLOSED | **NON** — reste OPEN HARD |
+| Cursor REAL autorisé | **NON** — BLOCKED |
+| Gate D consommé | **NON** |
+| Delivery | **NON** |
+| Auto-resume après restart | **NON** |
+
+AS-1 = **frontière**. Delivery + preuves + Gate D restent **futurs** et **séparés**.
+
+---
+
+## 6. A52-D02 / A52-D04 constraints
+
+### A52-D02.2 (préservé)
+
+- transaction **logique** ;
+- **compensation** ;
+- **idempotence** ;
+- partial failures gérées **avant** Delivery ;
+- **garantie durable obligatoire avant REAL**.
+
+### A52-D04.4 (préservé)
+
+- mémoire bornée acceptable **uniquement avant REAL** ;
+- **aucune** résolution durable acquise aujourd'hui ;
+- R-T-A3-2 reste **OPEN HARD**.
+
+### Question de ce pack
+
+> **Quel est le plus petit périmètre de durabilité qui permet un futur pilote Cursor REAL borné sans construire une plateforme de persistence produit ?**
+
+Réponse recommandée (non décidée) : **DUR-1 + éléments DUR-4** — journal minimal d'autorité/attempt + reconfirm après restart + no auto-resume + UNKNOWN après crash post-launch. Voir §§11–14.
+
+---
+
+## 7. Current durability baseline
+
+Confirmé depuis le repo (`4b1a058…`) :
+
+| Fait | Valeur honnête |
+| --- | --- |
+| Bounded local persistence | **SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE** |
+| Technology | **node:sqlite via D1** |
+| Product persistence | **`NOT_SELECTED`** |
+| IAM | **`NOT_SELECTED`** |
+| network | **false** |
+| reversible | **true** |
+| accessSurface | **INTERNAL_ONLY** |
+| `productionRollbackProven` | **false** |
+| `crossStoreDurable` | **false** |
+| `openHard` | **true** |
+| `deliveryReady` | **false** |
+| Authority runtime F3 | **process-local `MemoryAuthorityResolver`** |
+| Confirmation consume | atomique en mémoire (double-consume forbidden) — **pas** durable cross-restart |
+| Attempt statuses | `accepted` \| `running` \| `result_pending` \| `succeeded` \| `failed` \| `timeout` \| `cancelled` — **pas** encore de statut `UNKNOWN` produit |
+| Idempotency multi-process | cache process-local — **pas** de preuve production concurrency |
+
+### Missing proofs HARD (contractuels — inchangés)
+
+1. authenticated Critical acknowledge API
+2. cross-store durable Project↔Cycle transaction
+3. authorized non-prod rollback drill
+4. production concurrency proof
+
+**Ce cycle ne les ferme pas.** Il mappe le périmètre minimal pour les adresser dans un futur Delivery+QA.
+
+---
+
+## 8. Exact pilot boundary
+
+Le plan de durabilité est dimensionné **pour le premier pilote REAL F3**, pas pour une production complète.
+
+| Contrainte pilote | Valeur |
+| --- | --- |
+| Environnement | **local** · borné |
+| Contract | **exact** ExecutionContract (id + version + digest) |
+| Confirmation | **exacte** · liée au contrat |
+| Attempt | **une seule** Attempt active par contrat |
+| Auto-retry | **interdit** |
+| Git remote write | **interdit** (hors F3 execution) |
+| Push / PR / merge auto | **interdit** |
+| Reprise auto après crash | **interdit** (`NO AUTO-RESUME`) |
+| Conversation | **ZERO AUTHORITY** |
+| Cursor launch | **hors** Critical Ack ; Attempt seulement après chaîne T-A4→confirm→T-A5 |
+| Mode | REAL explicite (futur) — **pas** silent fallback |
+
+---
+
+## 9. Durable-state matrix
+
+Légende :
+
+- **MUST_BE_DURABLE** — doit survivre restart pour sécurité / anti-replay / reconciliation
+- **MAY_BE_PROCESS_LOCAL** — peut rester en mémoire si fail-closed et reconfirm
+- **MUST_FAIL_CLOSED_IF_MISSING** — absence ⇒ refus / no-op / REVIEW_REQUIRED
+
+| # | Fait | Classification | Rationale |
+| ---: | --- | --- | --- |
+| 1 | Authenticated actor reference | **MUST_BE_DURABLE** (preuve d'ack) · session live **MAY_BE_PROCESS_LOCAL** | L'identité ayant ack'd doit être auditable après restart ; la session live peut expirer → re-authn |
+| 2 | Authority evidence / Morris authorization proof | **MUST_BE_DURABLE** (journal anti-replay) · active grant **MAY_BE_PROCESS_LOCAL** sous DUR-4 | Grant actif invalidé au restart (DUR-4) ; journal conserve *qu'un* ack a existé pour anti-replay |
+| 3 | Critical acknowledgement | **MUST_BE_DURABLE** | Preuve d'ack + binding exact ; sans elle, REAL impossible après restart |
+| 4 | Confirmation identity | **MUST_BE_DURABLE** | Id confirmation lié au contract ; anti double-consume |
+| 5 | Confirmation consumption | **MUST_BE_DURABLE** | Consume-once doit survivre ; sinon replay post-restart |
+| 6 | ExecutionContract id | **MUST_BE_DURABLE** | Identité du contrat |
+| 7 | ExecutionContract version | **MUST_BE_DURABLE** | Stale version → fail-closed |
+| 8 | Contract digest / immutable fingerprint | **MUST_BE_DURABLE** | Binding exact F3-D02 |
+| 9 | Selected agent identity | **MUST_BE_DURABLE** (si Attempt créée) · **MAY_BE_PROCESS_LOCAL** avant Attempt | Après sélection confirmée pour Attempt : journal ; avant : peut être re-sélectionné avec reconfirm |
+| 10 | Attempt identity | **MUST_BE_DURABLE** (dès création) | Empêche duplicate launch / orphan |
+| 11 | Attempt launch state | **MUST_BE_DURABLE** | Distingue pre-launch / launched / UNKNOWN |
+| 12 | Evidence references | **MUST_BE_DURABLE** (si résultat connu) · **MAY_BE_PROCESS_LOCAL** sinon | Reconciliation D-06 |
+| 13 | ReviewBundle reference | **MUST_BE_DURABLE** (si produit) · **MAY_BE_PROCESS_LOCAL** sinon | Post-T-A6 |
+| 14 | Audit / correlation / idempotency identity | **MUST_BE_DURABLE** | Anti-replay · concurrent confirm · audit trail |
+
+### Policy croisée (recommandée)
+
+| Situation | Policy |
+| --- | --- |
+| Restart | **NO AUTO-RESUME** · droits REAL actifs **invalidés** |
+| Crash après launch | Attempt → **UNKNOWN / REVIEW_REQUIRED** · jamais auto-retry |
+| Retry | **NEW ATTEMPT** + **NEW AUTHORIZATION** si requis |
+| Fact manquant dans journal | **MUST_FAIL_CLOSED_IF_MISSING** |
+
+---
+
+## 10. Restart / failure matrix (D-01…D-10)
+
+| Case | State before | Durable facts needed | After restart | Safe recovery | Manual gate | Future proof |
+| --- | --- | --- | --- | --- | --- | --- |
+| **D-01** Restart avant Critical Ack | Pas d'ack | Aucun droit | Aucune autorité implicite | Recommencer ack | Non (fail-closed) | Restart sans grant |
+| **D-02** Restart après Ack avant consumption | Ack granted, not consumed | Ack + confirmation id + binding | **Soit** ack vérifiable dans journal **soit** nouvelle confirmation Morris obligatoire | Reconfirm (DUR-4) ou resume vérifié (si DUR-1 pur — **non** recommandé seul) | Oui si ambigu | Ack durable + expire |
+| **D-03** Restart après consumption avant Attempt | Consumed, no Attempt | Consume record + contract binding | **Jamais** reconstruire depuis conversation | Nouvelle Attempt seulement avec nouvelle auth si grant invalidé | Oui | Consume durable + no conversation authority |
+| **D-04** Crash après création Attempt avant launch | Attempt `accepted`, not launched | Attempt id + contract + consume | No auto-launch ; Attempt non-lancée visible | Cancel/terminaliser ou NEW ATTEMPT + NEW AUTH | Oui | Pre-launch durable state |
+| **D-05** Crash après launch avant résultat | Attempt `running` / `result_pending` | Attempt id + launch marker | **UNKNOWN / REVIEW_REQUIRED** · **no auto-retry** | Revue manuelle ; NEW ATTEMPT seulement après gate | **Oui — obligatoire** | UNKNOWN policy + no auto-retry |
+| **D-06** Résultat connu, Evidence non ingérée | Terminal result exists | Attempt + result refs | Reprendre ingestion Evidence **sans** re-launch | Ingest-only path | Si digest mismatch | Idempotent evidence ingest |
+| **D-07** Double-click / concurrent confirmation | Race sur grant/consume | Idempotency key + confirmation id | Un seul consume gagne ; autre → `ALREADY_CONSUMED` / conflict | Fail-closed second | Non si correct | Concurrent confirm test |
+| **D-08** Replay ack après restart | Ack historique | Ack journal + consume state | Replay **refusé** (anti-replay) | Nouveau ack seulement | Si override | Replay harness |
+| **D-09** Stale contract version | Version/digest mismatch | Contract version + digest | Fail-closed | Re-prepare contract + nouvel ack | Oui | Stale binding test |
+| **D-10** Rollback impossible | Compensation fail | Compensation journal + Attempt state | STOP · état résiduel **REVIEW_REQUIRED** | Drill manuel autorisé non-prod | **Oui** | Authorized rollback drill |
+
+---
+
+## 11. Durability options
+
+**Statut de chaque option :** `OPTION — NOT SELECTED` (sauf recommandation §13).
+
+### OPTION DUR-1 — MINIMAL DURABLE AUTHORITY + ATTEMPT JOURNAL
+
+| Critère | Contenu |
+| --- | --- |
+| **Objectif** | Durabiliser **uniquement** les faits nécessaires pour prévenir replay, reconstruction d'autorité, et duplicate launch |
+| **Contenu journal** | Items §9 classés MUST_BE_DURABLE (ack, consume, contract binding, attempt id/launch, idempotency/audit) |
+| **Réutilisation** | Confirmation request/grant/consume · ExecutionContract · Attempt · audit ports · D1 audit patterns (sans SELECT product DB) |
+| **Product persistence** | **`NOT_SELECTED`** — journal = bounded durability layer, pas plateforme produit |
+| **IAM** | **`NOT_SELECTED`** |
+| **Compat A52-D02.2** | txn logique + idempotence + compensation partielle |
+| **Compat A52-D04.4** | ne prétend pas T-A6 COMPLETE mémoire ; journal borné pilote |
+| **Impact R-T-A3-2** | Adresse le gap minimal pour pilote REAL borné |
+| **Dette** | Faible–moyenne |
+| **Admissible prochain pas** | **YES** |
+
+### OPTION DUR-2 — BOUNDED LOCAL D1 EXTENSION FOR PILOT PROOF
+
+| Critère | Contenu |
+| --- | --- |
+| **Objectif** | Étendre D1/node:sqlite existant comme **PROOF HARNESS / PILOT-LOCAL** durability |
+| **Lecture honnête** | D1 actuel = bounded local audit + project foundation · **`crossStoreDurable=false`** · **`productionRollbackProven=false`** |
+| **Peut-il satisfaire HARD contract REAL tel quel ?** | **NON** — reste preuve locale / harness, **pas** « durable production » |
+| **Usage admissible** | Support technique possible pour **implémenter** le journal DUR-1 en local sans SELECT product DB — **à condition** de ne jamais renommer la preuve locale en durable production |
+| **Label** | **PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE** |
+| **Product persistence** | Reste **`NOT_SELECTED`** même si D1 est réutilisé |
+| **Admissible comme seule réponse R-T-A3-2** | **NO** (insuffisant seul pour claim HARD closed / production durable) |
+| **Admissible comme véhicule d'implémentation du journal** | **CONDITIONAL** — sous label harness + flags honesty |
+
+### OPTION DUR-3 — FULL PRODUCT DURABILITY FIRST
+
+| Critère | Contenu |
+| --- | --- |
+| **Objectif** | Plateforme persistence produit complète avant pilote |
+| **Évaluation** | Comparaison seulement |
+| **Verdict** | **DEFER / OVER-SCOPED** pour premier pilote |
+| **Product persistence** | Impliquerait SELECT — **interdit** par ce GO |
+| **Admissible prochain pas** | **NO** |
+
+### OPTION DUR-4 — RECONFIRM AFTER EVERY RESTART
+
+| Critère | Contenu |
+| --- | --- |
+| **Objectif** | Aucun droit REAL durable **réactivable** ; restart invalide l'autorité active ; Morris doit reconfirmer ; journal durable surtout pour **anti-replay / reconciliation** |
+| **Effets** | NO AUTO-RESUME · crash post-launch → UNKNOWN · retry = NEW ATTEMPT + NEW AUTH |
+| **Compat R-T-A3-2** | **OUI** si combiné avec journal anti-replay (sinon fail-closed sans mémoire = risque de replay aveugle / perte d'Attempt) |
+| **Seul** | Réduit l'état d'autorité active durable, mais **ne suffit pas** sans journal Attempt/consume |
+| **Admissible** | **YES as policy overlay** sur DUR-1 |
+
+---
+
+## 12. Comparative matrix
+
+| Critère | DUR-1 | DUR-2 | DUR-3 | DUR-4 |
+| --- | --- | --- | --- | --- |
+| Statut | OPTION | OPTION | OPTION | OPTION |
+| Sécurité pilote | Haute si +DUR-4 | Locale seulement | Haute plateforme / hors scope | Haute (reconfirm) |
+| Simplicité | Haute | Moyenne (réutilise D1) | Très basse | Haute policy |
+| Dette | Faible | Risque surclaim si mal labellé | Très haute | Faible |
+| Product DB SELECT | NON | NON (si honnête) | **OUI (interdit)** | NON |
+| IAM SELECT | NON | NON | Souvent | NON |
+| Satisfait A52-D02.2 borné | OUI | Partiel (local) | Overkill | Partiel seul |
+| Respecte A52-D04.4 | OUI (borné) | OUI si non promu | Contredit « minimal » | OUI |
+| Anti-replay durable | OUI | Harness only | OUI | Besoin journal |
+| No auto-resume | Compatible | Compatible | N/A | **Natif** |
+| UNKNOWN post-launch | À ajouter | À ajouter | Possible | **Natif** |
+| Admissible prochain Delivery | **YES** | Support only | NO | Overlay **YES** |
+
+---
+
+## 13. Recommendation durability
+
+### Recommandation
+
+**`DUR-1 — MINIMAL DURABLE AUTHORITY + ATTEMPT JOURNAL`**
+**combiné avec éléments de `DUR-4` :**
+
+- restart ⇒ **invalidate active REAL authority** ⇒ **reconfirm Morris** ;
+- **NO AUTO-RESUME** ;
+- crash après launch ⇒ **UNKNOWN / REVIEW_REQUIRED** ;
+- retry ⇒ **NEW ATTEMPT + NEW AUTHORIZATION IF REQUIRED** ;
+- conversation ⇒ **ZERO AUTHORITY** ;
+- Git remote ⇒ **OUTSIDE F3 EXECUTION**.
+
+### Statut
+
+**`RECOMMENDED — NOT DECIDED`**
+
+Morris consomme l'adoption dans le **prochain GO consolidé**.
+
+### Pourquoi cette combinaison
+
+| Critère | Lecture |
+| --- | --- |
+| Sécurité | Maximise fail-closed ; empêche replay et autorité implicite post-restart |
+| Simplicité | Plus petit journal utile ; pas de plateforme DB produit |
+| Dette | Minimale ; ports + journal borné |
+| Repo-first | Réutilise T-A3/T-A4/T-A5 + patterns D1 audit **sans** SELECT product persistence |
+| A52-D02.2 / D04.4 | Respectés (logique + compensation + mémoire/journal borné avant REAL) |
+| F3-D07 | Aligné (process-local insuffisant ; restart fail-closed) |
+
+### Lecture honnête DUR-2
+
+D1/node:sqlite peut servir de **véhicule d'implémentation locale** du journal DUR-1 (proof harness), **mais** :
+
+- **`crossStoreDurable` reste false** jusqu'à preuve contraire ;
+- **`productionRollbackProven` reste false** jusqu'au drill autorisé ;
+- **interdit** de présenter D1 comme « product durable » ou de SELECT product persistence par glissement.
+
+### Pourquoi pas DUR-3
+
+Over-scoped · sélection product persistence · disproportionné pour premier pilote.
+
+### Label court de la recommandation
+
+**`DUR-1+DUR-4-POLICY` — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH`**
+
+---
+
+## 14. Proposed Morris durability decision
+
+**Statut :** `PROPOSED DECISION — MORRIS GO REQUIRED`
+
+**Proposition (non adoptée ici) :**
+
+> Adopter **DUR-1+DUR-4-POLICY** comme plan de durabilité minimale pour le futur pilote Cursor REAL F3 : journal durable borné des faits d'autorité/attempt nécessaires à l'anti-replay et à la reconciliation ; invalider toute autorité REAL active après restart ; exiger reconfirm Morris ; interdire auto-resume et auto-retry ; traiter crash post-launch comme UNKNOWN/REVIEW_REQUIRED ; réutiliser éventuellement D1 **uniquement** comme proof harness local sans SELECT product persistence ni IAM ; laisser R-T-A3-2 OPEN HARD jusqu'aux preuves QA.
+
+**Interdit dans ce document :** `DECIDED — ADOPTED BY MORRIS` pour DUR-*.
+
+---
+
+## 15. B5 applicability
+
+### B5 global
+
+**`OPEN`** · **`STOP BEFORE DELIVERY`** (A52-D01) — **jamais CLOSED** ici.
+
+### Bornage existant
+
+`ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` — **limité au path FIXTURE**. Il **ne couvre pas** le futur Delivery des **prérequis REAL**.
+
+### Est-ce que AS-1 + durability touchent le mécanisme B5 / LPS satellite ?
+
+| Zone | Touche B5 LPS satellite carry-forward ? |
+| --- | --- |
+| AS-1 Critical Ack surface + identity port | **NON** — authn/ack path ; pas de mutation LPS satellite |
+| Minimal authority/attempt journal | **NON** — journal Attempt/ack/consume ; hors carry-forward LPS `decisionIds` satellites |
+| Proof harness D1 audit extension (si utilisé) | **NON** si borné au journal F3 authority/attempt — **ne dépend pas** du path B5 LPS |
+| Refonte recordHumanDecision ↔ LPS | **HORS SCOPE** — non proposée |
+
+### Verdict d'applicabilité
+
+**CAS B5-A** — le futur lot prérequis REAL (AS-1 + journal minimal) **ne modifie pas** et **ne dépend pas** du chemin B5 / LPS satellite carry-forward.
+
+**CAS B5-B** : **NON applicable** sous le scope recommandé.
+
+---
+
+## 16. Proposed B5 bounded acceptance or blocker
+
+**Statut :** `PROPOSED — MORRIS GO REQUIRED`
+
+### Proposition (CAS B5-A)
+
+```
+BOUNDED ACCEPTANCE FOR F3 REAL-PREREQUISITES DELIVERY ONLY —
+B5 REMAINS GLOBAL OPEN —
+NO REAL EXECUTION AUTHORIZED.
+```
+
+### Portée exacte du bornage proposé
+
+| Inclus | Exclus |
+| --- | --- |
+| Delivery + QA des **prérequis** REAL (AS-1 surface, journal DUR, tests) | Cursor REAL execution |
+| Mutations `app/**` **bornées** aux composants prérequis | Fermeture B5 globale |
+| | Gate D |
+| | Product persistence SELECT |
+| | IAM SELECT (sauf gate Morris séparé si indispensable) |
+
+### Si Morris refuse le bornage
+
+STOP BEFORE DELIVERY (A52-D01) jusqu'à correctif / nouveau GO — **pas** de Delivery silencieux.
+
+---
+
+## 17. Future Delivery package
+
+**Phase :** Delivery Critical des prérequis REAL (futur cycle consolidé) — **pas** ce cycle.
+
+### Périmètre borné (indicatif)
+
+| Zone | Action minimale |
+| --- | --- |
+| Identity | `AuthenticatedIdentityPort` (provider-agnostic) + fake/test adapter |
+| Surface | Dedicated Critical Ack server action/endpoint (no launch) |
+| Authz | Wire ack → existing `AuthorityResolverPort` / Confirmation |
+| Journal | Minimal durable authority + attempt journal (DUR-1) |
+| Policy | Restart invalidate + reconfirm (DUR-4 overlay) |
+| Attempt | UNKNOWN/REVIEW_REQUIRED path post-launch crash |
+| Flags | Keep `openHard=true`, `deliveryReady=false`, `crossStoreDurable` honesty |
+| D1 | Optional harness store for journal — **label PILOT-LOCAL** |
+
+### Fichiers / zones existantes susceptibles (futur — non mutés ici)
+
+- `app/lib/oa/decision/**` (ports, confirmation consume durability hooks)
+- `app/lib/oa/execution-contract/**`
+- `app/lib/oa/execution-attempt/**` (UNKNOWN policy)
+- `app/lib/oa/evidence-review/**` (idempotent ingest)
+- `app/lib/platform/t-a7/**` (honesty flags / readiness)
+- `app/lib/d1/**` (optional harness tables — not product SELECT)
+- `app/features/project-assistant/f3/**` (wire ack separation ; still no REAL launch)
+
+### Éviter absolument
+
+- plateforme IAM complète ;
+- migration de tout T-A3 ;
+- refonte T-A4/T-A5/T-A6 ;
+- nouvelle orchestration / second authority engine ;
+- worker/queue non nécessaire ;
+- cloud ;
+- Git automation ;
+- Cursor REAL adapter.
+
+---
+
+## 18. Future QA package
+
+**Phase :** QA Critical indépendante **après** Delivery interne — échec QA **jamais** masqué par Delivery.
+
+### Suites minimales
+
+| Suite | Objectif |
+| --- | --- |
+| Unitaires AS-1 | authn→actor mapping · never-trust client · N3≠Morris · canActAsMorris |
+| Adversariaux | hostile identity · forged actorId · displayName · CSRF/confused deputy |
+| Restart | D-01…D-05 fail-closed / reconfirm / UNKNOWN |
+| Replay | D-08 ack replay refused |
+| Double-launch / concurrent | D-07 |
+| Stale contract | D-09 |
+| Rollback drill | D-10 — authorized non-prod only |
+| Runtime E2E borné | ack→confirm→attempt **sans** Cursor REAL effects |
+| Security assertions | authn≠authz≠confirm≠execute · conversation zero authority |
+| Evidence | ingest idempotent (D-06) |
+
+### Evidence attendu
+
+- logs tests + matrices D-01…D-10 ;
+- flags honesty inchangés sauf preuves explicitement gagnées ;
+- **PAS** de claim HARD CLOSED sans Morris + preuves.
+
+---
+
+## 19. HARD evidence targets
+
+### R-T-A3-1 (futur)
+
+- authenticated actor source ;
+- provider-agnostic identity port ;
+- separate Morris authorization ;
+- `canActAsMorris` ;
+- exact Critical Ack binding ;
+- anti-replay ;
+- restart behavior ;
+- audit ;
+- no client identity trust.
+
+### R-T-A3-2 (futur)
+
+- durable facts explicitly scoped (§9) ;
+- duplicate launch prevention ;
+- crash state reconciliation ;
+- unknown state policy ;
+- idempotency ;
+- rollback drill ;
+- concurrent confirmation protection ;
+- restart proof ;
+- no auto-retry.
+
+**Ne pas promettre HARD CLOSED avant QA + décision Morris.**
+
+---
+
+## 20. Gates / stop conditions
+
+| Gate / condition | Statut / règle |
+| --- | --- |
+| Gate A | CONSUMED (historique) |
+| Gate B | CONSUMED + QA + MERGED (PR #333) |
+| Gate C | CONSUMED (README READ-ONLY) |
+| Authority Surface Decision | CONSUMED ; AS-1 **ADOPTED** (boundary) |
+| Durability Decision | Pack produit ; option **NOT DECIDED** |
+| B5 bounded (prérequis) | **PROPOSED** |
+| Gate D | **NOT CONSUMED** |
+| Cursor REAL | **BLOCKED** |
+
+**STOP si :** main diverge de `4b1a058…` · README/01 mutés · `app/**` muté · IAM/product persistence auto-selected · B5/HARD déclarés CLOSED · Delivery/REAL/Gate D exécutés · nouveau store présenté SELECTED sans Morris.
+
+---
+
+## 21. Debt / simplicity challenge
+
+| Question | Réponse |
+| --- | --- |
+| Utile maintenant ? | **Oui** — réduit cycles avant Gate D |
+| Plus simple existe ? | DUR-4 seul : trop faible sans journal ; DUR-3 : trop gros |
+| Dette créée ? | Bornée (ports + journal + policy) |
+| Repo-first ? | Oui |
+| Second moteur autorité ? | Non |
+| Confond authn/authz/confirm/exec ? | Non (AS-1) |
+| IAM implicite ? | Non |
+| Product DB implicite ? | Non (DUR-2 labellé harness only) |
+| Gain justifie journal ? | Oui — sans journal, R-T-A3-2 reste non adressé pour pilote |
+
+---
+
+## 22. Anti-claims
+
+Ce cycle **ne revendique PAS** :
+
+- HARD CLOSED / R-T-A3-1 CLOSED / R-T-A3-2 CLOSED ;
+- B5 CLOSED global ;
+- T-A6 COMPLETE ;
+- IAM SELECTED ;
+- product persistence SELECTED ;
+- `crossStoreDurable=true` ;
+- `productionRollbackProven=true` ;
+- Cursor REAL autorisé ;
+- Gate D consommé ;
+- Delivery exécuté ;
+- D1 = durable production ;
+- conversation = authority ;
+- process-local MemoryAuthority = suffisant pour REAL.
+
+---
+
+## 23. Next consolidated GO
+
+Si Morris accepte la recommandation DUR-1+DUR-4-POLICY et le bornage B5-A :
+
+```
+GO ACCELERATED F3 REAL PREREQUISITES DELIVERY + QA —
+ADOPT DUR-1+DUR-4-POLICY — MINIMAL DURABLE AUTHORITY/ATTEMPT JOURNAL + RECONFIRM-AFTER-RESTART / NO-AUTO-RESUME / UNKNOWN-AFTER-LAUNCH-CRASH —
+ACCEPT B5 BOUNDED FOR REAL-PREREQUISITES DELIVERY ONLY —
+IMPLEMENT AS-1 AUTHORITY SURFACE —
+IMPLEMENT MINIMAL DURABILITY BOUNDARY —
+RUN CRITICAL QA / RESTART / REPLAY / ROLLBACK PROOFS —
+NO CURSOR REAL —
+NO GIT AUTO-WRITE —
+NO GATE D CONSUMPTION —
+IAM/PRODUCT PERSISTENCE REMAIN NOT_SELECTED UNLESS A SEPARATE MORRIS DECISION IS REQUIRED
+```
+
+**Phases internes obligatoires du futur cycle :** PHASE DELIVERY puis PHASE QA INDEPENDENT.
+
+Si une techno IAM ou product persistence devient indispensable : **ne pas auto-sélectionner** — produire un gate de décision minimal séparé.
+
+---
+
+## 24. Verdict
+
+```
+F3 ACCELERATED REAL PREREQUISITES ARCHITECTURE COMPLETE —
+AS-1 AUTHORITY SURFACE ADOPTED BY MORRIS —
+A52-D03.1 BOUNDARY PRESERVED —
+R-T-A3-2 DURABILITY BOUNDARY MAPPED —
+MINIMAL DURABILITY OPTION RECOMMENDED —
+DURABILITY OPTION NOT YET DECIDED —
+B5 DELIVERY APPLICABILITY ASSESSED —
+NEXT CONSOLIDATED DELIVERY + QA GATE PREPARED —
+NO IAM SELECTED —
+NO PRODUCT PERSISTENCE SELECTED —
+NO PRODUCT MUTATION —
+NO DELIVERY —
+NO REAL EXECUTION —
+R-T-A3-1 REMAINS OPEN HARD —
+R-T-A3-2 REMAINS OPEN HARD —
+GATE D NOT CONSUMED —
+CURSOR REAL BLOCKED —
+FULL REVIEW PACK COMPLETE —
+HANDOFF REMOTE VERIFIED —
+READY FOR MORRIS CONSOLIDATED DELIVERY + QA DECISION
+```
+
+---
+
+## Annex A — Git Truth (ce cycle)
+
+| Élément | Valeur |
+| --- | --- |
+| Worktree | `…/worktrees/f3-real-hard-prerequisites` |
+| Branch | `framing/sfia-studio-f3-real-hard-prerequisites` |
+| HEAD / origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| Remote framing | **ABSENT** |
+| Inbound handoff tip | `90ea88f7b700aba48ca08729ddc98761fc953853` |
+| Inbound handoff blob | `4cb8d34e2699267fe6f757eeb44acfc2c8b22227` |
+| Template | v2.6 · blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
+| Created file | `02-accelerated-authority-durability-decision.md` |
+| README / 01 | READ-ONLY · byte-identical |
+
+## Annex B — Status summary
+
+| Item | Status |
+| --- | --- |
+| AS-1 | **DECIDED — ADOPTED BY MORRIS** (boundary only) |
+| DUR-1+DUR-4-POLICY | **RECOMMENDED — NOT DECIDED** |
+| B5-A bounded acceptance | **PROPOSED — MORRIS GO REQUIRED** |
+| IAM | NOT_SELECTED |
+| Product persistence | NOT_SELECTED |
+| R-T-A3-1 | OPEN HARD — BLOCKS REAL |
+| R-T-A3-2 | OPEN HARD — BLOCKS REAL |
+| Gate D | NOT CONSUMED |
+| Cursor REAL | BLOCKED |

```

---

## Diff counters

| Metric | Value |
| --- | ---: |
| Diff lines | 693 |
| 02 lines | 690 |
| 02 sha256 | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` |

---

*End of FULL Review Pack — Cursor report ≠ validation ; ChatGPT re-reads Git handoff.*
