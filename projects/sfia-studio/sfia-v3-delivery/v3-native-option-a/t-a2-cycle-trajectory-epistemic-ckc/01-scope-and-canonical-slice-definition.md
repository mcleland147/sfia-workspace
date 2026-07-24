# 01 — Scope and canonical slice definition

## Définition canonique

| Champ | Valeur |
|-------|--------|
| **Source** | `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` |
| **Nom** | **T-A2** — Cycle/Trajectory/Epistemic/CKC |
| **Dépend** | T-A1 |
| **Gate** | T-A2 |
| **Preuve** | qualif Critical · version traj |
| **Rollback** | restore snapshot / propose restored trajectory version |

Correspondance : **MATCH**.

## Inclus (T-A2)

- Domain: `CycleInstance`, `ProjectTrajectory`, `EpistemicItem`, `CkcResolution`, qualification, invariants, erreurs structurées
- Application: `QualifyCycle`, `CreateCycle`, `GetCycle`, `CreateInitialTrajectory`, `GetCurrentTrajectory`, `GetTrajectoryVersion`, `ProposeTrajectoryVersion`, `GetEpistemicState`, `UpdateEpistemicState`, `ResolveCycleKnowledgeContract`
- Ports: CycleRepository, TrajectoryRepository, EpistemicRepository, CkcResolver, CycleAudit ; Clock réutilisé ; ProjectServices (T-A1) injecté
- Infrastructure: store mémoire transactionnel, MemoryCkcResolver, audit mémoire/console
- Extension T-A1 minimale : `AppendLivingProjectStateRequest` accepte linkage `trajectoryId` / `trajectoryVersion` / `activeCycleInstanceId` / `ckcResolutionRef` / `epistemicItemIds` (carry-forward)
- Tests + documentation delivery T-A2

## Exclus

HumanDecision · Confirmation · ExecutionContract · agents · Evidence · ReviewBundle · ClaimEvaluation · UI Option A · cutover v2.6 · suppression MethodMode / OPS1 · migration SQL · IAM · **DATABASE SELECTED** · T-A3 · ack Critical Morris (reste `proposed`)

## Chemins

| Rôle | Path |
|------|------|
| Module | `projects/sfia-studio/app/lib/oa/cycle/**` |
| Tests | `…/app/__tests__/oa/cycle/**` |
| Project (consommation) | `…/lib/oa/project` (barrel public) |
| Doctrine (consommation) | `…/lib/oa/doctrine` (barrel public) |
| Schemas (lecture seule) | `sfia-v3-modeled/v3-native-option-a/schemas/{cycle,epistemic,doctrine}/**` |
| Docs | `sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/**` |

## Qualification actifs existants

| Actif | Qualification | Usage T-A2 |
|-------|---------------|------------|
| `@/lib/oa/project` (T-A1) | KEEP + consommer | GetProject / LPS / Append |
| `@/lib/oa/doctrine` (T-A0) | KEEP + consommer | Clock + Actor/Provenance types |
| Schemas modeled OA | KEEP + lecture | Contrat de référence |
| `method/**` | PROTECTED | Interdit |
| SQLite / SQL migrations | NON SÉLECTIONNÉ | Pas de migration T-A2 |
