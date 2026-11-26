# ML5 — Manifeste candidat RECETTE (préparation, sans cutover)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD base rapportée | `912ef30b40f2447a925f4182bc4961560eca810e` |
| Tree base | `6d0e6255a59139647fa8b2381571524d53a73b51` |
| Web tree base | `02cf48bbcc984cdbe2300b180cf899ae20f348a6` |
| BUILD_ID observé (runtime) | `bP8batKL2XqD6iDGGw_Iy` (arbre dirty — rebuild requis avant cutover) |
| Classe | **NO RELEASE** |
| STABLE | NOT AVAILABLE |
| Cutover | **NON APPLIQUÉ** |

## Capacités qualifiées (DEV)

| Capacité | État |
|---|---|
| Politique cognitive v0.2 | PRÉSERVÉE (Terra Medium défaut ; Luna Low/Med expérimental DEV ; rollback `legacy_sol`) |
| PDF transverse + progressive | IMPLEMENTED + COVERAGE VERIFIED (fixture) ; viewer browser PASS |
| Sessions WEB TTL/éviction | IMPLEMENTED + unit PASS |
| Admission Option B | BEHAVIOR PROVEN LIVE |
| Worker WEB query-only Terra | LIVE OBSERVED |
| Egress DNS pin open | LIVE OBSERVED après fix `options.all` |
| RoomBooking RB-27–31 | LIVE OBSERVED (Git REAL chantiers360) |
| StockTrack IT-06 | LIVE OBSERVED + V2 conservée (rev2) ; V1 intacte |
| Git PDF REAL text | **BLOCKED CORPUS MISSING** (PDF scanné 1 page, SCANNED_NO_TEXT) |
| WEB LIVE public | LIVE OBSERVED (search+open HTML/PDF) puis **OFF** |
| FinOps | Réconcilié PARTIAL (cost_coverage PARTIAL fréquent) |

## Configuration future candidat RECETTE (décision Morris requise)

- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
- Ne pas appliquer automatiquement la politique expérimentale DEV (Luna) à RECETTE
- Clés OpenAI lane-isolées déjà séparées — préserver
- Rebuild + BUILD_ID fresh sur arbre clean avant cutover
- Procédure retour arrière : revert cutover config ; WEB LIVE reste 0

## Réserves bloquant READY FOR RECETTE

1. Arbre produit **DIRTY** — commit local + rebuild requis
2. Git PDF text REAL non démontrable (corpus scanné)
3. WEB-05 confrontation sources versionnées : PARTIAL (opens échoués avant fix ; non rejoué post-fix)
4. Enveloppe documentaire Responses cumulées > 40 sur travaux RB étendus — tracer honest overshoot
5. F2 visuelle exhaustive différée

## Verdict manifeste

**NOT READY FOR RECETTE** — candidat instruit pour revue ; G-RECETTE non consommé.
