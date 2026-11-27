# As-built — Macro-lot 2 (Intelligence documentaire) — Product-wide integration

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (cumulative, non renouvelée) |
| Architecture | [architecture-selection-locked-20261127.md](./ml2-qualification/architecture-selection-locked-20261127.md) |
| Cartographie | [product-consumer-cartography-20261127.md](./ml2-qualification/product-consumer-cartography-20261127.md) |
| Migration 027 | **APPLIED DEV** — [migration-027-candidate.md](./ml2-qualification/migration-027-candidate.md) |
| Checkpoint | [morris-checkpoint-027-and-live-20261127.md](./ml2-qualification/morris-checkpoint-027-and-live-20261127.md) · GO A+B exécuté |
| Gate B plan/report | [live-gate-b-emission-plan-20261127.md](./ml2-qualification/live-gate-b-emission-plan-20261127.md) · evidence `gate-b-report.json` |
| Reliquat LIVE | HTTP **99**/236 after Gate B (delta 9 ≤ 30) |
| FinOps audit | [finops-reconcile-audit-20261127.md](./ml2-qualification/finops-reconcile-audit-20261127.md) |
| WEB LIVE | OFF |
| RECETTE | protégée |
| Candidat | BUILD_ID `qvIWhDeJwvskHV5DSrfE8` · digest `4a08741c…` · DEV pid 58000 |

## Livrables code (product raccordements)

| Module / surface | Rôle |
|---|---|
| `derived-embedding-index.ts` | Index fichier local + lifecycle (ops jusqu'à GO A) |
| `derived-embedding-service.ts` | Rebuild **admissible-only** · hybrid + **rights revalidation** · Frontier fetch |
| `derived-embedding-pg.ts` | Store PG inactif jusqu'à `BACKEND=pg` |
| `hybrid-knowledge-search.ts` | Fusion + `allowedSourceIds` |
| `bounded-judgment.ts` | Validation stricte type/choix · pas p=1 inventé · fallback p=0 |
| `document-vision-punctual.ts` | Vision ponctuelle bytes locaux |
| `d4-read-tools.searchProjectResources` | **ADAPT** semanticSupplement (flag) |
| `journal/search` API | **ADAPT** queryVector embed (flag) |
| `knowledge/service.capitalizeAcquis` | revoke superseded in derived index |
| `git-read-tools.read_git_pdf` | Vision scan/sparse/schema + Frontier client |
| `d8-cognitive-criterion-eval` | Bounded judgment via Frontier client |
| Frontier | protect **générique** (`protectPersisted` / env) — pas d'id hardcodé |
| Flags OFF by default | `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL` |

## Persistance

- **Ops unique:** PostgreSQL `derived_embedding_chunks` (`SFIA_DERIVED_EMBEDDING_BACKEND=pg`)
- Fichier : hors chemin opérationnel (tests unitaires `BACKEND=file` seulement)
- Index ≠ vérité métier · droits via D4/D9 revalidation
- Backup pre-027 : `.sfia-evidence/db-backups/sfia_next_dev_pre_027_*.dump` · restore probe 194 projects

## CONV-F21…F26

| ID | Statut | Preuve |
|---|---|---|
| F21 | PASS_WITH_RESERVE | LIVE 12/12 + module fallback ; AMB calibration residual |
| F22 | PASS_ARCHITECTURE_E | Lexical + emb ; VS DEFER |
| F23 | PASS_LOCAL_INDEX | Unit lifecycle + cleanup VS 404 ; PG 027 pending GO |
| F24 | PASS | LIVE Vision 6/6 ; product Vision wired behind flag |
| F25 | PARTIAL→INTEGRATION | Adapter E2E earlier ; product tools now wired (flag) — full Studio parcours LIVE needs Morris GO on remainder |
| F26 | PASS_ATTRIBUTED | Ledger + reconcile ; product ops record on rebuild |

## Hors scope / réserves

- Activation permanente flags OFF jusqu'à gate
- Migration 027 sans GO
- Nouvelle émission LIVE sans GO reliquat
- Macro-lot 3
