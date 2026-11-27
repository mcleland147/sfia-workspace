# SFIA Review Pack — FULL — Macro-lot 1 Integrated LIVE Qualification (Intervention 2)

| Champ | Valeur |
|---|---|
| Date/heure ouverture | 2026-11-27 (cycle ouvert — pack mono-cycle) |
| Profil | Critical / EVOL / Cycle 8 Delivery LIVE |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `59893c814808fcf32501f32a34a379d7d85346e9` |
| Tree web entrée | `b76e2e6017ec371246b45b3de6f7bedf6a08c304` |
| Handoff entrée | `3444e7951a9992c78ce982a6cf14f4031f47b306` |
| Blob entrée | `63ef2c39bfa68e7d1483f4f271b61a63da8ddc39` |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Statut | CLÔTURÉ — Intervention 2 LIVE qualification |

## Git Truth Check (entrée)

- Branche conforme
- HEAD / tree web conformes
- Handoff tip/blob conformes
- Untracked: aucun applicatif
- Unstaged: pack (réinitialisé)
- DEV :3100 · RECETTE :3200 pid 89199 · PG DEV :5433 / RECETTE :5434
- **NEXT ENVIRONMENT GATE PASSED**

---

## Checkpoint 1 — Préflight Admin (PASS)

| Contrôle | Résultat |
|---|---|
| 026 appliqué DEV (+ e2e) | OK |
| `*_login` NOLOGIN + PASSWORD NULL | OK |
| `sfia_admin_collector_ops` créé, grants bornés | OK (NOLOGIN jusqu’à provision opérateur) |
| Sessions compromises | Aucune (seul `sfia_next_dev`) |
| Login probe refuse | FATAL not permitted |
| Enveloppe LIVE ≤24h / 1 projet / ≤3 pages / campaign paths | Unit PASS |
| DSN collector sans URL → blocked | OK |
| `require_end_time` strip avant wire | OK |
| FinOps disclose fail-closed (ownership) | Code + tests |
| D3 continuity budgets/rightsOk explicite | Code + tests |
| RECETTE pid 89199 | Intact |

**ADMIN PREFLIGHT PASSED**


## Checkpoint 3 — Admin LIVE borné (PASS)

| | |
|---|---|
| Identité PG | `sfia_admin_collector_ops` prouvée (current_user) |
| Costs | `acol_mwyd1ifk_552295cf` READY · LIVE · 1 page · 1 snapshot complete |
| Usage completions | `acol_mwyd1rbb_45d706ae` READY · LIVE · 1 page · tokens mesurés |
| Projet | `proj_HVZL4x3J77GXEVtq9EqRokpR` |
| Fenêtre | 2026-11-26T00:00:00Z → 2026-11-27T00:00:00Z (1d) |
| Coût LIVE | 3.7127983200 usd (PG oracle) |
| Usage | input_tokens=3934634 · output=150296 · requests=335 |
| Ops isolation | SELECT pilots → permission denied |
| RECETTE | pid 89199 intact |
| Secret | jamais dans pack / chat / Git |

## Checkpoint 4 — FinOps réel (service-path)

| | |
|---|---|
| COMPARABLE | PASS (studio 3.5 vs provider 3.7127983200 · delta 0.2127983200) |
| Droits révoqués | UNAVAILABLE · disclosed=false · montant null |
| Période différente | non COMPARABLE |
| TEST exclu | NO_LIVE_COMPLETE_SNAPSHOTS |
| Réserve | `organization_scope=org:unspecified` — renforcer SFIA_OPENAI_ORG_SCOPE au prochain collect |
| UX | candidat 13.03 prêt — **attente validation visuelle Morris** avant transposition |

Commande: `npx tsx scripts/finops-live-qualify-check.mts` → status PASS


## Checkpoint 2 — Provisionnement opérateur (PASS)

Morris a fourni `OPS_DB_READY` / `ADMIN_KEY_PROVISIONED` / `OPERATOR_ENV_READY`.
Aucune valeur de secret dans le pack, le chat, Git ou argv.

## Checkpoint 5 — Tracing LOCAL (PASS)

| | |
|---|---|
| Préflight configure/local/off + oracle export | PASS (`oracleExportUrls=[]`) |
| Runtime DEV | `SFIA_AGENTS_TRACING_MODE=local` |
| Investigation Nora réelle | CP5 COMPLETE · `gen_75812934…` · work `cgw_eea75ec6…` |
| Spans OBS `provider.agents_trace.local` | ≥100 événements corrélés operation/generation |
| Export distant | non observé (processors locaux) |
| Unit real SDK | 4 PASS (Agent.run + tool loop + spans) |
| Rollback | MODE OFF via session post-campagne |

## Checkpoint 6 — WEB public LIVE A3 Option 2 (PASS WITH ENVELOPE PROOF)

| | |
|---|---|
| Arbitrage | A3 Option 2 (Morris GO) |
| `max_tool_calls` | borne a priori ≠ garantie facturable |
| Admission | `AUTHORIZE_PUBLIC_QUERY` exigée puis exercée |
| Source MDN | `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch` (PARTIAL) |
| MIXED | CLOSED — non détecté |
| Envelope | `CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED` observée puis renew qualify — opposable |
| Rollback | WEB LIVE OFF en fin de cycle |

## Checkpoint 7 — Continuité native D3 (PASS COMPARATIVE)

| | |
|---|---|
| Mode | `SFIA_PROVIDER_CONTINUITY_MODE=off` |
| V1 Reconstruction | EXERCISED LIVE — SoT |
| V2/V3/V4 | NOT ADOPTED — CONDITIONAL |
| rightsOk / budgets | branchés (lease ≠ habilitation) |
| Recommandation | garder V1 ; natifs off sans décision Morris |
| Doc | `d3-native-continuity-comparative-result-20261127.md` |

## Campagne LIVE intégrée

| | |
|---|---|
| Manifeste | `.tmp-sfia-review/campaign-manifest-i2.json` |
| Script | `web/scripts/ml5-i2-integrated-live-campaign.mjs` |
| Projet | `proj_2f845260-8972-45be-a092-b626318edf84` |
| Prep | `prep_bf16b659-ebd4-4ac2-bcaa-6758939de8a5` |
| Work principal | `cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88` |
| BUILD | `3WGrMVrEU7z1yoSrUW8l7` |
| Verdict campagne | `INTEGRATED_LIVE_QUALIFICATION_EXECUTED` |
| Preuves | `.tmp-sfia-review/i2-integrated-live/` |

### Correctifs résiduels qualification

1. `admin-collector-db.ts` — await typing (generic) → cast row (build unblock)
2. `provider-emission-frontier.ts` — renew campagne suspendue en `SFIA_QUALIFY_MODE=1` DEV ; headroom input_token_count ; `SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND` escape

## Matrice CONV (IDs originaux)

| Id | Statut | Preuve |
|---|---|---|
| CONV-F01 | PASS | prep/project/work conservés |
| CONV-F02 | PASS | Nora sémantique + admission WEB |
| CONV-F03 | PASS | pas de HumanDecision auto |
| CONV-F04 | PASS | usage imputable / contacts comptés |
| CONV-F05 | PASS | reprise + envelope explicite |
| CONV-F06 | PASS | DEV isolé ; RECETTE 89199 |
| CONV-F07 | PASS | rollback modes expérimentaux |
| CONV-F08 | PASS | WEB après GO + auth exacte |
| CONV-F11 | PASS | tracing LOCAL OBS réel |
| CONV-F12 | PASS | investigation + acquis + rollback envelope |
| CONV-F13 | PASS | FinOps CP4 COMPARABLE service-path |
| CONV-F14 | PASS | collecte indépendante de Nora |
| CONV-F15 | PASS | WEB sourcé MDN + mesure/refus envelope |

## Fake / Real

| Domaine | Niveau |
|---|---|
| Admin LIVE Costs/Usage | REAL |
| FinOps COMPARABLE | REAL (PG DEV) |
| Nora investigation | REAL |
| Tracing LOCAL | REAL (+ unit SDK) |
| WEB public | REAL (A3 opt2) |
| D3 V2–V4 native | SUBSTITUTED / NOT ACTIVATED |
| UX transposition 13.03 | BLOQUÉ — validation visuelle Morris |
| Pannes sécurité | SUBSTITUTED (unit/PG) |

## Build / runtime final (candidat)

| | |
|---|---|
| BUILD_ID | `3WGrMVrEU7z1yoSrUW8l7` |
| contentDigest | `d14121112552e87af48d2d91c059e19f465aa96d5beab4d3d1276c879f51769a` |
| DEV | `http://127.0.0.1:3100` |
| RECETTE | `:3200` pid **89199** intact |
| PG | DEV :5433 / RECETTE :5434 |
| Continuity | off |
| Tracing post-rollback | off |
| WEB LIVE post-rollback | 0 |

## Réserves admissibles

1. **UX 13.03** — candidat prêt ; transposition **après** validation visuelle Morris.
2. **`organization_scope=org:unspecified`** — renforcer `SFIA_OPENAI_ORG_SCOPE` au prochain collect Admin.
3. **Native V2–V4** — non adoptés ; comparatif seulement.
4. **Envelope output tokens** — borne campagne opposable ; headroom à calibrer pour investigations WEB longues (pas un défaut produit permanent).

## Rollback effectué

- `SFIA_AGENTS_TRACING_MODE=off`
- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_G_WEB_PUBLIC` unset
- `SFIA_G_LIVE_API` unset
- `SFIA_PROVIDER_CONTINUITY_MODE=off`
- `STUDIO_NORA_DIAG_EPHEMERAL` retiré
- RECETTE non touchée

## Verdict de sortie proposé

**MACRO-LOT 1 — LIVE QUALIFICATION COMPLETED WITH EXPLICIT RESERVES — MORRIS ACCEPTANCE REQUIRED**

Capacités prouvées : Admin LIVE borné · FinOps fail-closed COMPARABLE · tracing LOCAL · WEB A3 opt2 · D3 V1 SoT · investigation Nora intégrée.

Non ADOPTED. NO RELEASE. Macro-lots 2/3 non engagés.


## Git Truth Check (sortie)

| | |
|---|---|
| HEAD |  |
| Tree web |  |
| BUILD_ID |  |
| contentDigest |  |
| DEV pid |  · http://127.0.0.1:3100 |
| RECETTE | pid 89199 intact |
| Branche |  |
| Push projet | NON |
| Modes expérimentaux | rolled back (tracing off · WEB LIVE 0 · G flags unset · continuity off) |
