# SFIA Review Pack — Cartography Contract Freeze

**Date/heure :** 2026-07-11 15:47 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation corrective finale — Cartography Contract Freeze
**Profil :** Critical
**PR :** #165
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** bde680c32ae0aa36497a3c8dcde913ea530279a7
**HEAD final :** 06a898058265f509e68930bd8e85886cd82cb1d1
**Base inventaire :** main @ 072058a1e3eea7a7647b638be4b8512df6b84ea6

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche | audit/sfia-v2.6-repository-cartography |
| HEAD initial | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
| HEAD final | `06a898058265f509e68930bd8e85886cd82cb1d1` |
| PR #165 | OPEN — non mergée |
| Worktree | Propre |

---

## Commit chain (HEAD traceability)

| Cycle | HEAD |
|-------|------|
| Pass L | `7e60935f4f506218ed3331ebb704f8e27f64a355` |
| Lifecycle applicability correction | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
| Contract freeze (courant) | `06a898058265f509e68930bd8e85886cd82cb1d1` |

---

## CSV control block (computed)

| Métrique | Valeur |
|----------|-------:|
| row_count | 1045 |
| field_count | 36 |
| unique_path_count | 1045 |
| SHA-256 | `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2` |
| sum lifecycle_applicability | 1045 |
| sum lifecycle_status | 1045 |
| sum usage | 1045 |
| sum authority | 1045 |
| Lot B | 0 |
| Lot C | 23 |
| B/C overlap | 0 |

### lifecycle_applicability

| document-lifecycle | 697 |
| not-applicable | 338 |
| technical-artifact-lifecycle | 10 |

### lifecycle_status

| not-applicable | 338 |
| archived | 265 |
| candidate | 154 |
| validated | 145 |
| draft | 138 |
| superseded | 5 |

### usage

| unknown | 481 |
| operational | 353 |
| non-operational | 211 |

### authority

| unknown | 534 |
| informational | 298 |
| supporting | 136 |
| reference | 74 |
| canonical | 3 |

### proposed_disposition

| keep | 619 |
| archive | 227 |
| rename | 150 |
| investigate | 38 |
| delete-candidate | 11 |

### migration_lot_candidate

| lot-G | 570 |
| lot-D | 149 |
| lot-0 | 103 |
| lot-E | 75 |
| lot-I | 68 |
| lot-H | 40 |
| lot-C | 23 |
| lot-J | 11 |
| lot-A | 6 |

---

## Divergences corrigées

- Champs CSV 35 → **36** (état courant)
- technical-artifact-lifecycle 15 → **10** (recalcul CSV)
- archive disposition 74 → **227** ; archive non-v3 51 → **204**
- confidence high/medium/low recalculés : **835 / 210 / 0**
- HEAD §11 : 352825b → **bde680c**
- Suppression valeurs obsolètes présentées comme courantes

---

## Preuves

- **Usage inchangé** vs HEAD bde680c : 481 unknown
- **Authority inchangée** : 534 unknown
- **Lifecycle non requalifié** : 0 modification sémantique CSV
- **CSV modifications lignes** : 0

---

## Cartography Contract Freeze (intégral)

## 12. Cartography Contract Freeze

**Horodatage :** 2026-07-11 15:46 Europe/Paris
**HEAD initial :** `bde680c32ae0aa36497a3c8dcde913ea530279a7`
**HEAD final :** commit `docs: freeze repository cartography contract` — HEAD courant PR = `git rev-parse HEAD` (review pack / handoff)
**CSV :** 1045 × 36 — SHA-256 `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2`

### Chaîne de commits (traçabilité)

| Cycle | HEAD |
|-------|------|
| Pass L | `7e60935f4f506218ed3331ebb704f8e27f64a355` |
| Lifecycle applicability correction | `bde680c32ae0aa36497a3c8dcde913ea530279a7` |
| Contract freeze (courant PR) | HEAD branche PR #165 (review pack) |

### A. Source de vérité

- **CSV** = seule source statistique de la cartographie
- Inventaire figé : `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6` — **1045** fichiers
- **3 artefacts d'audit PR #165 exclus** du CSV (pas de self-inventory)
- Rapport, plan, review pack et handoff = **dérivés du CSV** — recalcul obligatoire

### B. Schéma final (36 champs — ordre exact)

1. `current_path`
2. `filename`
3. `extension`
4. `size_bytes`
5. `primary_family`
6. `subfamily`
7. `lifecycle_status`
8. `lifecycle_applicability`
9. `authority`
10. `usage`
11. `scope`
12. `project`
13. `phase`
14. `trajectory`
15. `trajectory_role`
16. `logical_location_current`
17. `logical_location_target`
18. `naming_rule_regime`
19. `naming_compliance`
20. `location_compliance`
21. `metadata_profile`
22. `content_summary`
23. `incoming_references`
24. `outgoing_references`
25. `duplicate_or_overlap`
26. `canonical_candidate`
27. `proposed_disposition`
28. `proposed_target_path`
29. `proposed_target_filename`
30. `rationale`
31. `risk_level`
32. `morris_gate_required`
33. `confidence`
34. `evidence`
35. `reserve_or_question`
36. `migration_lot_candidate`

### C. Vocabulaires contrôlés

**lifecycle_applicability :** `document-lifecycle` | `technical-artifact-lifecycle` | `not-applicable` | `unknown`

**lifecycle_status :** `draft` | `candidate` | `validated` | `deprecated` | `superseded` | `archived` | `not-applicable` | `unknown`

**usage :** `operational` | `non-operational` | `unknown`

**authority :** `canonical` | `reference` | `supporting` | `informational` | `unknown`

**proposed_disposition :** `keep` | `rename` | `archive` | `investigate` | `delete-candidate`

**migration_lot_candidate :** `lot-0` | `lot-A` | `lot-B` | `lot-C` | `lot-D` | `lot-E` | `lot-F` | `lot-G` | `lot-H` | `lot-I` | `lot-J` | *(vide)*

### D. Règles de preuve

- `validated` → preuve forte obligatoire (explicit-status, morris-decision, validated-report, merged-approved-cycle, closure-evidence, canonical-source)
- `superseded` → remplaçant explicite dans evidence/reserve
- `delete-candidate` → preuve + `morris_gate_required: yes`
- `unknown` → réserve justifiée obligatoire
- `not-applicable` ≠ `non-operational` (Usage traité séparément)
- merge sur main ≠ validated automatique
- canonical → gate Morris

### E. Règles d'applicabilité

- Lifecycle documentaire **non forcé** sur artefacts techniques (`not-applicable`)
- Usage et Authority = passes séparées — **aucune déduction croisée sans preuve**
- `technical-artifact-lifecycle` (10 fichiers) = lifecycle technique réel identifiable

### F. Règles de génération des statistiques

1. Recalcul **programmatique** depuis le CSV
2. Contrôle de somme : chaque distribution = **1045**
3. Cohérence croisée rapport/plan/handoff/PR
4. **Interdit** : recopie manuelle non vérifiée
5. Divergence → **STOP** avant commit

### G. Statut du contrat

```
CARTOGRAPHY CONTRACT FROZEN FOR PASS USAGE AND PASS AUTHORITY
```

Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate** — pas baseline SFIA sans GO Morris.

### État courant gelé (recalculé)

| Distribution | Count |
|--------------|------:|
| applicability document-lifecycle | 697 |
| applicability technical-artifact-lifecycle | 10 |
| applicability not-applicable | 338 |
| lifecycle validated | 145 |
| lifecycle candidate | 154 |
| lifecycle draft | 138 |
| lifecycle archived | 265 |
| lifecycle superseded | 5 |
| lifecycle not-applicable | 338 |
| usage unknown | 481 |
| authority unknown | 534 |

---



---

## Large Artifact Protocol — CSV

| Élément | Valeur |
|---------|--------|
| Chemin | method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv |
| SHA-256 | `67872cf5a45dff3e4a02b2e1a5cff1b53eed860bd2576f7c8dcde163996f88e2` |
| Lignes | 1045 |
| Champs | 36 |
| synthesis only | **no** |

### En-tête

```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```

### 20 premières lignes

```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,lifecycle_applicability,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role,Explicit candidate/draft marker — no strong validation proof. Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,not-applicable,not-applicable,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Document lifecycle not applicable — technical/operational artifact; Usage pass will qualify operational role.,lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=inferred-role,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
README.md,README.md,md,3571,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
components/README.md,README.md,md,224,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docker/penpot/README.md,README.md,md,2792,F13,,candidate,document-lifecycle,reference,unknown,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;explicit-candidate-marker;weak-proof=inferred-role,Explicit candidate/draft marker — no strong validation proof. Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,not-applicable,not-applicable,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/adr/README.md,README.md,md,131,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/architecture/README.md,README.md,md,1966,F13,,candidate,document-lifecycle,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective candidate.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role,"README index — operational reference, not validated foundation document.",lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source;all=explicit-status+merged-approved-cycle+closure-evidence+validated-report+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+canonical-source;all=explicit-status+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,medium,lifecycle-corrective;proof=explicit-status+merged-approved-cycle+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/README.md,README.md,md,208,F13,,archived,document-lifecycle,reference,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,archive,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); lifecycle-corrective archived.",low,no,medium,lifecycle-pass-L;trajectory-v1.1-historical;readme-index-role;git=586671c init: create SFIA workspace structure,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,validated,document-lifecycle,unknown,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); lifecycle-corrective validated.",low,no,high,lifecycle-corrective;strong-proof=explicit-status+closure-evidence+canonical-source;all=explicit-status+closure-evidence+canonical-source,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
```

### 20 dernières lignes

```
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,technical-artifact-lifecycle,unknown,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,unknown,unknown,compliant,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,investigate,tools/cmp-001/src/schemas/template.schema.json,template.schema.json,"Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.; lifecycle-corrective draft.",low,no,medium,path+content-sample+regime=unknown+incoming=0,Usage unknown — verify references and operational role. Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createADR.js,createADR.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createADR.js,createADR.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createComponent.js,createComponent.js,js,123,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createComponent.js,createComponent.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createExperiment.js,createExperiment.js,js,125,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createExperiment.js,createExperiment.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKPI.js,createKPI.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKPI.js,createKPI.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createObject.js,createObject.js,js,826,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createObject.js,createObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createProject.js,createProject.js,js,119,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createProject.js,createProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createPrompt.js,createPrompt.js,js,117,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createPrompt.js,createPrompt.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createREX.js,createREX.js,js,111,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createREX.js,createREX.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,js,132,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createStandard.js,createStandard.js,js,121,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createStandard.js,createStandard.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createTemplate.js,createTemplate.js,js,121,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createTemplate.js,createTemplate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/discover.js,discover.js,js,5562,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/discover.js,discover.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/export.js,export.js,js,7318,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/export.js,export.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,js,130,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateObject.js,updateObject.js,js,735,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateObject.js,updateObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateProject.js,updateProject.js,js,119,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateProject.js,updateProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/validate.js,validate.js,js,3691,F17,,not-applicable,not-applicable,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/src/validate.js,validate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective not-applicable.",low,no,high,lifecycle-corrective;applicability=not-applicable;technical-artifact;proof=insufficient,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,technical-artifact-lifecycle,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.; lifecycle-corrective validated.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
```

---

## Verdict

```
CARTOGRAPHY STATISTICS RECOMPUTED FROM CSV
BASE INVENTORY REMAINS 1045
CSV FIELD COUNT = 36
LIFECYCLE APPLICABILITY DISTRIBUTION CONSISTENT
ALL DISTRIBUTION SUMS = 1045
HEAD TRACEABILITY COMPLETE
STALE COUNTERS REMOVED
REPORT / PLAN / REVIEW PACK / PR CONSISTENT
CARTOGRAPHY CONTRACT FROZEN
NO USAGE REQUALIFICATION
NO AUTHORITY REQUALIFICATION
NO LIFECYCLE REQUALIFICATION
NO EXISTING REPOSITORY FILE MODIFIED
NO PHYSICAL MIGRATION EXECUTED
PR #165 UPDATED
PR NOT MERGED
REVIEW HANDOFF COMPLETE — REMOTE VERIFIED
READY FOR CHATGPT CONTRACT FREEZE REVIEW
PASS USAGE NOT STARTED
PASS AUTHORITY NOT STARTED
SFIA v2.4 REMAINS BASELINE
SFIA v2.6 REMAINS CANDIDATE
```

Morris décide.
