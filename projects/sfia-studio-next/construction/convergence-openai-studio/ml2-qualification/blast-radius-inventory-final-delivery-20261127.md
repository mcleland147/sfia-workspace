# Blast-radius inventory — ML2 final product delivery

| Champ | Valeur |
|---|---|
| HEAD entrée | `8b75249aa1e2bfc6bc30906e4fbda38d749ca100` |
| Tree web | `291fc12ece1c444f184e9785962f463c3e7a32e6` |
| Lane | DEV (RECETTE :3200 / :5434 observée — **non touchée**) |
| DEV :3100 | **absent** au Git Truth (PID 35473 historique invalide) |
| Migration | 026 · 027 candidate only |

## Fichiers à créer

| Path | Rôle |
|---|---|
| `web/src/domains/knowledge/derived-embedding-store.ts` | Contrat store (file\|pg) — un seul backend actif |
| `web/src/domains/knowledge/derived-embedding-pg.ts` | Projection PG (inactive jusqu'à GO 027) |
| `web/tests/unit/ml2-bounded-judgment.test.ts` | Validation stricte / fallback |
| `web/tests/unit/ml2-derived-rights-rebuild.test.ts` | Droits + exclusion révoqués |
| `construction/.../morris-checkpoint-027-and-live-20261127.md` | Gates A+B consolidés |
| `construction/.../finops-reconcile-audit-20261127.md` | Audit écritures 198/190/800/250 |

## Fichiers à modifier

| Path | Modification |
|---|---|
| `web/src/domains/knowledge/derived-embedding-service.ts` | Droits revalidation · rebuild admissible-only · Frontier-only client |
| `web/src/domains/knowledge/hybrid-knowledge-search.ts` | Filtre allowedSourceIds / exact-id priority |
| `web/src/domains/knowledge/derived-embedding-index.ts` | Store file inchangé (backend jusqu'à GO) |
| `web/src/domains/conversation/bounded-judgment.ts` | Validation type/choix/niveaux · pas p=1 inventé · Boolean("false") |
| `web/src/domains/conversation/provider-emission-frontier.ts` | Protection LIVE générique (pas d'exception campaignId hardcodée) |
| `web/src/domains/proofs/d8-cognitive-criterion-eval.ts` | Client Decisions via Frontier |
| `web/src/domains/documents/document-vision-punctual.ts` | Contrats retour (incertitude/pages) |
| `web/src/domains/conversation/git-read-tools.ts` | Vision cas mixtes (schemas/tables) hors seul no-text |
| `web/src/app/api/projects/.../journal/search/route.ts` | Embed via Frontier + droits session |
| `web/src/db/migrations/candidates/027_*.sql` | SQL définitif (FK pilots, notes auth) |
| `web/scripts/ml2-i2-finops-reconcile.mts` | Lecture preuves primaires · qualifier hardcodes |
| contrats / as-built / delivery-history / registre / cognition | Sync post-fixes |

## Hors périmètre (non modifiés)

SEF · ADR · méthode SFIA · `.sfia/` · autres projets · RECETTE/STABLE · Admin · WEB LIVE · ML3.

## Gates avant effets protégés

- **A** Migration 027 DEV — GO Morris distinct (aucune apply avant).
- **B** LIVE qualification intégrée — GO Morris sur reliquat réconcilié.
- Aucun Handoff intermédiaire avant fin Delivery post-GO.
