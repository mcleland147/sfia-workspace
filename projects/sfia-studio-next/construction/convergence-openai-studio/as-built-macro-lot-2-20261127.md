# As-built — Macro-lot 2 (Intelligence documentaire) — Product-wide integration

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (cumulative, non renouvelée) |
| Architecture | [architecture-selection-locked-20261127.md](./ml2-qualification/architecture-selection-locked-20261127.md) |
| Cartographie | [product-consumer-cartography-20261127.md](./ml2-qualification/product-consumer-cartography-20261127.md) |
| Migration 027 | [migration-027-candidate.md](./ml2-qualification/migration-027-candidate.md) — **NON appliquée** |
| Reliquat LIVE | [live-campaign-remainder-20261127.md](./ml2-qualification/live-campaign-remainder-20261127.md) |
| WEB LIVE | OFF |
| RECETTE | protégée |

## Livrables code (product raccordements)

| Module / surface | Rôle |
|---|---|
| `derived-embedding-index.ts` | Index fichier local + lifecycle |
| `derived-embedding-service.ts` | Rebuild / hybrid / embed product service |
| `hybrid-knowledge-search.ts` | Fusion lexical + embeddings mobilisables |
| `bounded-judgment.ts` | Decisions + incertitude + fallback Responses |
| `document-vision-punctual.ts` | Vision ponctuelle bytes locaux |
| `d4-read-tools.searchProjectResources` | **ADAPT** semanticSupplement (flag) |
| `journal/search` API | **ADAPT** queryVector embed (flag) |
| `knowledge/service.capitalizeAcquis` | revoke superseded in derived index |
| `git-read-tools.read_git_pdf` | Vision punctual if SCANNED_NO_TEXT (flag) |
| `d8-cognitive-criterion-eval` | Bounded judgment optional pre-pass (flag) |
| Frontier | protect LIVE campaign on reset/endProcessCampaign |
| Flags OFF by default | `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL` |

## Persistance

- **Actuel (ops):** fichier `.sfia-derived/embedding-index/`  
- **Cible (GO):** PG `derived_embedding_chunks` (027 candidate)  
- Index ≠ vérité métier

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
