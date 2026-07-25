# 07 — ExecutionContract, Attempt et agents

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise · **T-A4 supersession rework aligned** · **T-A5 Attempt 0.2.0-oa materialization** |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate T-A4** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Materialize gate T-A5** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (**breaking** vs `0.1.0-oa`) |
| **ExecutionAttempt schemaVersion** | `0.2.0-oa` (**breaking** vs `0.1.0-oa`) |
| **AgentDescriptor schemaVersion** | `0.1.0-oa` (docs-first ; **not a live registry**) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME · Pas agent opérationnel · Pas Attempt opérationnel · Pas exécution lancée |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `07-execution-contract-attempt-and-agent-model.md` |
| **Schemas** | `schemas/execution/execution-contract.schema.json` · `execution-attempt.schema.json` · `agent-descriptor.schema.json` |

## ExecutionContract (F) — Option A single schema

Statuts (enum conservée) : draft · proposed · validated · confirmation_required · confirmed · executing · completed · failed · cancelled · superseded.

### Ownership (Morris VALIDATED T-A4 + T-A5 materialization)

| Tranche | Produit / possède |
|---------|-------------------|
| **T-A4** | gouvernance : draft → proposed → validated → confirmation_required → **confirmed** ; cancelled (pré-exec) ; superseded ; Build / Validate / Confirm / Supersede / Cancel(pre-exec) |
| **T-A5** | agent selection (`selectedAgentRef` sur Attempt + event ; champ contrat `selectedAgentRef` reste ownership T-A5) ; Select / Start ; Attempt lifecycle ; **executing** \| **completed** \| **failed** \| **cancelled** (post-start) ; Cancel post-start ; RecordExecutionResult / Failure ; Retry |

T-A4 ne produit pas les statuts T-A5 ; T-A5 ne réécrit pas les états de gouvernance antérieurs.

### Versioning before/after (T-A4 rework)

| | Avant | Après |
|--|-------|-------|
| `schemaVersion` | `0.1.0-oa` | `0.2.0-oa` |
| `requiredAuthority` | string libre | enum `N1` \| `N2` \| `N3` \| `MORRIS` |
| Supersession | status `superseded` seul | `supersedesExecutionContractId` + `supersessionReason` |
| Confirm | implicite / Validate mélangé | `ConfirmExecutionContract` consomme Confirmation |
| Reverse link | — | **dérivé runtime** (une direction seulement) |

Autres objets du pack restent `0.1.0-oa` jusqu’à rework dédié **sauf** ExecutionAttempt (ci-dessous).

### requiredAuthority (mapping T-A3)

| Valeur | Sens |
|--------|------|
| `N1` | Confirmation/Authority level N1 |
| `N2` | Confirmation/Authority level N2 |
| `N3` | Confirmation/Authority level N3 — **≠ Morris** ; ne confère pas `canActAsMorris` |
| `MORRIS` | N3 vérifié **et** `canActAsMorris=true` (normatif ; pas un niveau hiérarchique au-dessus de N3) |

Autorité réelle toujours via T-A3 `AuthorityResolverPort`.

### Confirmation

- Build / Validate : **ne consomment pas**
- `ConfirmExecutionContract` : **consomme** une Confirmation grantée, unique ; `confirmationRef` obligatoire si `confirmed`
- Confirmation refusée / annulée / expirée / déjà consommée → pas de `confirmed`

### Critical (R-T-A3-1 OPEN)

Cycle Critical encore `proposed` / non acknowledged → contrat **ne peut pas** atteindre `confirmed` (fail-closed). T-A4 n’ack pas le cycle. T-A5 refuse Start si Critical non-ack.

### Décision source

Contrats structurants : ≥1 `decisionRef` accepted, même Project, non superseded à build et confirm. Après confirm, si décision source superseded → pas de nouvelle exécution T-A5 tant que contrat non superseded/cancelled.

### Supersession

- Champ forward : `supersedesExecutionContractId` (préfixe `xct:`)
- `supersessionReason` requis si supersède **ou** `status=superseded` ; **≥1 non-whitespace**
- Self-supersession : **interdit** (invariant runtime)
- Lien inverse `supersededBy*` : **non stocké** ; dérivé au runtime
- Contenu confirmé immutable ; successeur = nouvel id + version monotone

### Invariants

MD Cursor = export G seulement · adaptateur ne mute pas · caps+authority+stops obligatoires · immutable après confirm sauf supersession explicite · completed ⇒ résultats+preuves min (preuve métier = **T-A6**) · retry ⇒ Attempt distinct.

---

## ExecutionAttempt — `0.2.0-oa` (T-A5 Morris D01–D10)

### Before / after (breaking)

| | Avant `0.1.0-oa` | Après `0.2.0-oa` |
|--|------------------|------------------|
| Agrégat | Séparé (déjà) | Séparé **confirmé** (D01 A) |
| Ids | `contractId`, `agentRef` | `executionContractId` (`xct:`), `selectedAgentRef` + `executionContractVersion` |
| Status | `running\|succeeded\|failed\|timeout\|cancelled\|partial` | `accepted\|running\|result_pending\|succeeded\|failed\|timeout\|cancelled` — **`partial` retiré** (T-A6) |
| Required | attemptId, contractId, agentRef, startedAt, status | + idempotencyKey, correlationId, version, createdAt, provenance ; `startedAt` optionnel (post-launch) |
| Retry | `retryOf` | `retryOfAttemptId` + `retryIndex` + `maxRetriesBudget` |
| Timestamps | `endedAt` | `completedAt` / `failedAt` / `timedOutAt` / `cancelledAt` / `resultPendingAt` / `launchedAt` |
| Sélection | — | `selectionStrategy`, `selectionProfile`, `proposedAgentRef`, `agentConfirmationRef`, `selectionExpiresAt` |

### Ownership

Attempt = **agrégat autonome** T-A5. Plusieurs Attempts par `executionContractId` autorisés. Pas d’AgentSelectionRecord autonome — sélection capturée dans Attempt + events.

### Lifecycle Attempt (D04 B + D06 C)

```
accepted → running → succeeded | failed | timeout | cancelled
                   ↘ result_pending → succeeded | failed
```

- **accepted** : persist pré-launch (D05) ; contrat reste **confirmed**
- **running** : après ack launch conforme ; contrat → **executing**
- **result_pending** : sortie technique connue, Record durable non persisté ; contrat **reste executing** (jamais completed spéculatif)
- **succeeded** → contrat **completed** (exige `resultRef`)
- **failed** / **timeout** → contrat **failed**
- **cancelled** → contrat **cancelled**

Interdits durables : `blocked`, `starting`, `planned`, `partial`.

### Sélection (D02 / D03)

| Profil | Stratégie |
|--------|-----------|
| **critical** | `human_confirmed_proposal` obligatoire (système propose + humain confirme) |
| **standard \| light \| capitalization** | `capabilities_deterministic` autorisé **seulement** sous policy pack fermée Option A |

Select et Start **séparés** ; TTL `selectionExpiresAt` ; revalidation à Start. `agentConfirmationRef` requis dès que `human_confirmed_proposal` et status **au-delà** de `accepted`.

### Persist-then-launch (D05 A)

Invariant **persist-then-launch** :

1. Persister Attempt `accepted` (identité + version stables)
2. Demander launch
3. Passer `running` seulement après ack conforme

**launch-then-persist** interdit.

### result_pending (D06 C)

Pas de `succeeded` / contrat `completed` sans Record durable. Retry Record borné → sinon `failed` technique `RESULT_RECORDING_FAILED` sans claim métier.

### Timeout / retry (D09 A)

Timeout Attempt → contrat `failed`. Retry = **nouvel** Attempt + `retryOfAttemptId` + budget + autorité explicite ; pas auto-retry ; idempotencyKey distincte.

### Obsolescence / cancel (D07 B+D)

Cancel best-effort + stop conditions contrat ; `cancellationRequested` / `irreversibleEffectsPossible` ; **pas** de rollback métier implicite T-A5. Emergency stop = Morris ; auto-safety borné sans claim Morris (D08).

### Frontière T-A5 / T-A6 (D10 A+C)

T-A5 : statut technique, exit code, durée, logRefs, resultRef/errorRef techniques, corrélation.
T-A5 **ne décide pas** : conformité métier, Evidence, Claim, maturité, readiness.
`partial` (preuves partielles) = **interprétation T-A6** uniquement — retiré de l’enum Attempt.

Handoff minimal conceptuel : `{ attemptId, executionContractId, executionContractVersion, selectedAgentRef, technicalStatus, resultRef?, errorRef?, correlationId, startedAt, completedAt?, stopReason? }`.

---

## AgentDescriptor — `0.1.0-oa` (docs-first)

Champs : `agentId`, `agentType`, `adapterRef`, `supportedCapabilities[]`, `allowedActions[]`, `allowedTargets[]`, `allowedScopes[]`, `trustLevel`, `executionMode`, `healthStatus` (`unknown|healthy|degraded|unhealthy`), `version`, `enabled`, `provenance`, `createdAt`, `updatedAt?`.

**Anti-claim :** **not a live registry** — descripteur modeled seulement ; pas de sonde health runtime, pas d’endpoint, pas de configuration opérationnelle.

## AgentCapability vs AgentAuthority

capability ≠ authority · manque = stop (`CAPABILITY_MISSING` / `AUTHORITY_DENIED` / codes T-A5 catalog) · agent ne redéfinit pas le contrat. Sélection agent = **T-A5**. Système **jamais** Morris.
