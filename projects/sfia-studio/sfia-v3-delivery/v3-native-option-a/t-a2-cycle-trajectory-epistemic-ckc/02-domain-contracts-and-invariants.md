# 02 — Domain contracts and invariants

## Architecture

Modular monolith — module isolé `lib/oa/cycle`, consomme T-A1 / T-A0 via barrels publics uniquement.

```
QualifyCycle → recommendation only (isMorrisDecision=false)
CreateCycle → ProjectServices.GetProject → persist CycleInstance
CreateInitialTrajectory / ProposeTrajectoryVersion
  → TrajectoryRepository (mutex)
  → AppendLivingProjectStateVersion (expectedVersion)
ResolveCycleKnowledgeContract → CkcResolverPort (guidance)
UpdateEpistemicState → refuse Hypothesis→DecisionRef promotion
```

## CycleInstance (modeled 0.1.0-oa)

Required: `schemaVersion`, `cycleInstanceId`, `cycleTypeId`, `projectId`, `profile`, `status`, `createdAt`.

- `profile` ∈ {`Light`,`Standard`,`Critical`} — **pas Capitalization** (schema gap)
- Capitalization = `cycleTypeId: cyc:capitalization` + profile issu des règles (typiquement Standard)
- Critical → `status=proposed` jusqu’ack explicite (hors T-A2)
- Light/Standard → `status=acknowledged` (pas de gate Critical)
- Identité : `cyc:…` ; types : `cyc:…` (ex. `cyc:capitalization`)

## Qualification (déterministe)

Signaux explicites seulement — pas de scores inventés :

1. Tout signal Critical (`structuralChange` | `securityImpact` | `architectureImpact` | `dataImpact` | `irreversible`) → **Critical** ; Create exige justification non vide sinon `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED`
2. Sinon `lowRiskBounded` → **Light**
3. Sinon → **Standard**
4. QualifyCycle = recommandation uniquement — jamais décision Morris / consommation de gate

## ProjectTrajectory

- v1 via `CreateInitialTrajectory` ; status `candidate`|`active`
- Propose : `expectedVersion` obligatoire ; supersede ; deps cycliques → `TRAJECTORY_INVALID`
- Rollback logique = nouvelle version restaurant les steps antérieurs (jamais rewrite)
- Taille JSON ≤ `MAX_TRAJECTORY_SNAPSHOT_BYTES` (256_000 UTF-8)
- Identité : `trj:…` / steps `stp:…`

## EpistemicItem

Types modeled : Observation · Hypothesis · Option · Recommendation · DecisionRef · Reservation · Contradiction · EvidenceRef.

- Observation fact-like ⇒ `source` ou `provenance` requis
- Promotion auto Hypothesis→DecisionRef **refusée** (`EPISTEMIC_PROMOTION_FORBIDDEN`)

## CkcResolution

- Registry candidate **ou** `level=absent`, `status=unavailable`, `fallbackPolicy=intra_v3_only`
- `executionAuthority` MUST be `false` ; jamais v2.6
- Absent CKC **ne bloque pas** CreateCycle

## Erreurs

| Detail | Modeled `code` | retryable |
|--------|----------------|-----------|
| CYCLE_CRITICAL_JUSTIFICATION_REQUIRED | `DECISION_REQUIRED` | false |
| TRAJECTORY_VERSION_CONFLICT / LPS_VERSION_CONFLICT | `STATE_CONFLICT` | true |
| EPISTEMIC_PROMOTION_FORBIDDEN | `AUTHORITY_DENIED` | false |
| CKC_UNAVAILABLE | `CKC_UNAVAILABLE` | false |
| CONTEXT_STALE | `CONTEXT_STALE` | true |
| Autres invalid/not-found | `STATE_CONFLICT` | false |

Detail codes hors enum ErrorRecord → dette T-A2-D08.
