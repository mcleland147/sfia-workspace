# Convergence OpenAI–Studio — As-built Macro-lot 1 (DEV candidat)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Statut | IMPLEMENTED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
| GO | Morris GO Macro-lot 1 Critical DEV |
| Contrats | `cadrage.md` / `contrat-fonctionnel.md` / `contrat-technique.md` @ `1e2e188d` |
| Candidat code tip (pré-lot) | `c574d262` · web `5a1289fc` |
| Hors GO | Migration PG · Admin LIVE · WEB LIVE · UX Figma page 13 · push projet |

## 1. Diagnostic AS-IS → transformations réalisées

| Domaine | Classe | Réalisé | Preuve | Gate restant |
|---|---|---|---|---|
| Tracing Agents SDK | ADAPT | `lib/agents-sdk-tracing.ts` ; `setTraceProcessors([StudioLocal])` ou OFF ; Nora + WEB worker | unit `ml5-agents-sdk-tracing` | Activer `SFIA_AGENTS_TRACING_MODE=local` en DEV |
| OBS métier | KEEP | `lib/observability.ts` inchangé comme SoT causale | — | — |
| Frontière | KEEP/ADAPT | `tool_usage.web_search.num_requests` a posteriori ; pas d’ASSUMED_1 | unit frontier + response-usage | G-WEB-PUBLIC |
| FinOps ledger | KEEP | `provider_usage_observations` | existant | — |
| Usage & Costs | BUILD | Collecteur isolé + rapprochement honnête UNAVAILABLE sans secret/GO | unit collector | Admin key + LIVE GO + migration PG |
| Continuité native | ADAPT/DEFER runtime | Module `provider-response-continuity` (OFF par défaut) | unit continuity | Preuve A/B + flag `native` |
| WEB | KEEP OFF | Gates préservés ; tracing aligné worker | existant + wiring | GO WEB |
| Décisions / retrieval / audio / L2 | DEFER | Non implémentés (lots suivants) | — | — |

## 2. Fichiers

### Créés
- `web/src/lib/agents-sdk-tracing.ts`
- `web/src/domains/conversation/provider-response-usage.ts`
- `web/src/domains/conversation/provider-response-continuity.ts`
- `web/src/domains/finops/provider-admin-usage-collector.ts`
- `web/tests/unit/ml5-agents-sdk-tracing.test.ts`
- `web/tests/unit/ml5-provider-response-usage.test.ts`
- `web/tests/unit/ml5-provider-response-continuity.test.ts`
- `web/tests/unit/ml5-provider-admin-usage-collector.test.ts`
- `construction/convergence-openai-studio/{cadrage,contrat-*}.md` (raccordement blob exact)
- `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
- `construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`

### Modifiés
- `nora-adapter.ts` — configureAgentsSdkTracing
- `public-web-search-frontier.ts` — même politique tracing
- `provider-emission-frontier.ts` — réconciliation tool_usage
- `usage-read-service.ts` — `providerReconciliation` DTO
- `tests/unit/ml5-provider-emission-frontier.test.ts`
- `construction/delivery-history.md`

### Retirés
- Aucun (coexistence : OBS KEEP ; tracing custom mid-turn non retiré en masse — mapping partiel)

## 3. Configuration

| Variable | Rôle | Défaut |
|---|---|---|
| `SFIA_AGENTS_TRACING_MODE` | `off` \| `local` | `off` (rollback sûr) |
| `OPENAI_ADMIN_KEY` | Secret Admin isolé | absent → BLOCKED |
| `SFIA_ADMIN_USAGE_LIVE` | Autorise appels Admin réels (DEV only) | off |
| `SFIA_OPENAI_ORG_SCOPE` | Label scope org | `org:unspecified` |
| `SFIA_FINOPS_SCOPE_COMPARABLE` | Mapping lane↔projet prouvé | off → NON_COMPARABLE |
| `SFIA_PROVIDER_CONTINUITY_MODE` | `off` \| `native` | `off` |

## 4. Provisionnement Admin (procédure — secret hors chat)

1. Morris crée une clé Admin dédiée : https://platform.openai.com/settings/organization/admin-keys
2. Provisionner **uniquement** dans l’environnement isolé DEV (fichier secrets local / secret manager), variable `OPENAI_ADMIN_KEY`.
3. Ne jamais coller la valeur dans chat, Git, pack ou OBS.
4. Poser `SFIA_ADMIN_USAGE_LIVE=1` seulement après GO LIVE Admin spécifique.
5. Migration PG snapshots requise avant persistance produit (candidat documenté).

## 5. Remplacements / rationalisation

| Ancien | Nouveau | Couverture | Retrait |
|---|---|---|---|
| Tracing OFF permanent | Mode local filtré optionnel | Spans run/generation/tool redacted | Default processors remplacés ; export distant jamais enregistré |
| Commit hosted = max_tool_calls | Commit = num_requests si présent sinon UNKNOWN | Mesure billable honnête | ASSUMED_1 déjà non garantie ; confirmé |
| FinOps estimations seules | + DTO rapprochement | Fraîcheur / UNAVAILABLE | Pas de second ledger |

## 6. Critères CONV-F11…F15 (état)

| ID | Niveau | Réserve |
|---|---|---|
| F11 Tracing | COVERAGE VERIFIED (déterministe) | LIVE Agents path avec mode local à confirmer |
| F12 Continuité | IMPLEMENTED (module) / BEHAVIOR partiel | Flag native OFF ; A/B non LIVE |
| F13 FinOps rapprochement | IMPLEMENTED structurelle | Admin LIVE + mapping scope + migration |
| F14 Collecteur résilience | COVERAGE VERIFIED (transport substitué) | Pas d’appel Admin réel |
| F15 WEB | BEHAVIOR OFF / refuse gates | Pas de G-WEB-PUBLIC |

## 7. Roadmap delta (candidat — non appliqué)

Proposer sous gouvernance : « Macro-lot 1 convergence fournisseur — candidat DEV intégré ; gates Admin/WEB/migration/UX ouverts ».
