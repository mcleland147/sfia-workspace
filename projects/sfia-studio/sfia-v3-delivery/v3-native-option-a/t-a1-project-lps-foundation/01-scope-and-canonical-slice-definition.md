# 01 — Scope and canonical slice definition

## Définition canonique

| Champ | Valeur |
|-------|--------|
| **Source** | `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` |
| **Nom** | **T-A1** — Project/LPS repos, versioning, conflict |
| **Dépend** | T-A0 |
| **Gate** | T-A1 |
| **Preuve** | optimistic lock tests |
| **Rollback** | restore snapshot |

Correspondance avec « Project/LPS Foundation » : **MATCH** (repos + versioning + conflict + pin DoctrinePackage via T-A0).

## Inclus (T-A1)

- Domain: `Project`, `LivingProjectState`, invariants, erreurs structurées
- Application: `CreateProject`, `GetProject`, `GetCurrentLivingProjectState`, `GetLivingProjectStateVersion`, `AppendLivingProjectStateVersion`
- Ports: ProjectRepository, LivingProjectStateRepository, ProjectAuditJournal ; Clock + DoctrinePackageResolver **réutilisés** depuis `@/lib/oa/doctrine`
- Infrastructure: store mémoire transactionnel, audit mémoire/console
- Tests unitaires / intégration fail-closed + anti-legacy
- Documentation delivery T-A1

## Exclus

CycleInstance · Trajectory · Epistemic · CKC runtime · HumanDecision · Confirmation · ExecutionContract · agents · Evidence · ReviewBundle · ClaimEvaluation · UI Option A · cutover v2.6 · suppression MethodMode / OPS1 · migration SQL · IAM · **DATABASE SELECTED** · event sourcing complet

## Chemins

| Rôle | Path |
|------|------|
| Module | `projects/sfia-studio/app/lib/oa/project/**` |
| Tests | `…/app/__tests__/oa/project/**` |
| Doctrine (consommation) | `…/lib/oa/doctrine` (barrel public) |
| Schemas (lecture seule) | `sfia-v3-modeled/v3-native-option-a/schemas/project/**` |
| Docs | `sfia-v3-delivery/v3-native-option-a/t-a1-project-lps-foundation/**` |

## Qualification actifs existants

| Actif | Qualification | Usage T-A1 |
|-------|---------------|------------|
| `@/lib/oa/doctrine` (T-A0) | KEEP + consommer | Resolver + types pin/ref/provenance/clock |
| `lib/d1/**` | KEEP (hors OA) | **Non utilisé** |
| OPS1 / sfia-context | HISTORICAL-ONLY | Anti-tests seulement |
| Schemas modeled OA | KEEP + lecture | Contrat de référence |
| `method/**` | PROTECTED | Interdit |
| SQLite / SQL migrations | NON SÉLECTIONNÉ | Pas de migration T-A1 |
