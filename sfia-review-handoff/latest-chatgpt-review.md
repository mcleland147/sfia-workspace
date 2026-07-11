# SFIA Review Pack — Final Repository Cartography Scope

**Date/heure :** 2026-07-11 15:14 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation corrective finale de cartographie avant merge
**Profil :** Critical
**PR :** #165
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** 6e3fa647fbc3098f87ae428845e7be80ca74f99b
**HEAD final :** f4dafcc8b8a196f3ffc29785c9c1e2abb68c34f5
**Base inventaire :** main @ 072058a1e3eea7a7647b638be4b8512df6b84ea6

---

## Correctif final — périmètre stable

| Élément | Valeur |
|---------|--------|
| Commande | git ls-tree -r --name-only 072058a |
| Inventaire base | **1045** |
| Lignes CSV | **1045** |
| Champs | **35** |
| Self-inventory | **Exclu** (3 artefacts audit) |

### Artefacts exclus (audit_artifacts_excluded_from_inventory)

- 2026-07-11-sfia-v2.6-repository-cartography.csv
- 2026-07-11-sfia-v2.6-repository-cartography.md
- 2026-07-11-sfia-v2.6-repository-migration-lots-plan.md

---

## Correctif final — Lots B/C

| Lot | Volume | Périmètre |
|-----|-------:|-----------|
| Lot B | **0** | D10 hors v3 — not required |
| Lot C | **23** | v3/MCP archive complet |
| B/C overlap | **0** | — |
| D10 non-v3 | **0** | — |
| D10 v3 | **23** | Lot C only |

---

## Statistiques avant/après (périmètre)

| Métrique | Avant (1048 branche) | Après (1045 base) |
|----------|---------------------:|------------------:|
| Volume cartographie | 1048 | **1045** |
| SHA-256 | bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735 | 9709da543780d5b6ba978266b5f69b711b53ec870ac102d099aae979482dea4d |
| Lot B | 0 | **0** |
| Lot C | 23 | **23** |
| v2.6 trajectory | 7 | **4** |
| candidate lifecycle | 33 | **30** |

---

## CSV Large Artifact Protocol

**large created artifact = yes**
**synthesis only = no**
**SHA-256 :** 9709da543780d5b6ba978266b5f69b711b53ec870ac102d099aae979482dea4d
**Lignes :** 1045
**Champs :** 35

### En-tête
```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_rule_regime,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```

### 20 premières lignes
```
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=2,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,validated,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,keep,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.",low,no,high,path+content-sample+regime=technical-convention+incoming=3; convention=dot-separated tool convention,,lot-E
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,unknown,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,"Regime technical-convention; family F16; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-I
.gitignore,.gitignore,none,262,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,"Regime technical-convention; family F17; D10 compliant (current=repository, target=repository); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
README.md,README.md,md,3571,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
components/README.md,README.md,md,224,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,documentary,compliant,compliant,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=repository, target=repository); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (example),,,no,no,keep,docker/penpot/.env.example,.env.example,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docker/penpot/README.md,README.md,md,2792,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,tools,tools,documentary,compliant,compliant,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=tools, target=tools); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md,,no,no,keep,docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-E
docs/README.md,README.md,md,1104,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,keep,docs/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/adr/README.md,README.md,md,131,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,keep,docs/adr/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/README.md,README.md,md,1966,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,YYYY-MM-DD-sfia-decision-engine.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 non-compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-D
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/README.md,README.md,md,208,F13,,unknown,reference,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,keep,docs/foundation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=0,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,unknown,unknown,unknown,tooling,,,SFIA v1.1,historical,docs,docs,documentary,compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,keep,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,"Regime documentary; family F06; D10 compliant (current=docs, target=docs); D12 compliant.",low,no,medium,path+content-sample+regime=documentary+incoming=1,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently. Heuristic qualification only — not validated.,lot-E
```

### 20 dernières lignes
```
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,unknown,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,unknown,unknown,compliant,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,investigate,tools/cmp-001/src/schemas/template.schema.json,template.schema.json,"Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.",low,no,medium,path+content-sample+regime=unknown+incoming=0,Usage unknown — verify references and operational role. Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createADR.js,createADR.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createADR.js,createADR.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createComponent.js,createComponent.js,js,123,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createComponent.js,createComponent.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createExperiment.js,createExperiment.js,js,125,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createExperiment.js,createExperiment.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKPI.js,createKPI.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKPI.js,createKPI.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,js,130,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createObject.js,createObject.js,js,826,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createObject.js,createObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createProject.js,createProject.js,js,119,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createProject.js,createProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createPrompt.js,createPrompt.js,js,117,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createPrompt.js,createPrompt.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createREX.js,createREX.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createREX.js,createREX.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,js,132,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createStandard.js,createStandard.js,js,121,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createStandard.js,createStandard.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/createTemplate.js,createTemplate.js,js,121,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/createTemplate.js,createTemplate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/discover.js,discover.js,js,5562,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/discover.js,discover.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/export.js,export.js,js,7318,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/export.js,export.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,js,130,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateObject.js,updateObject.js,js,735,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateObject.js,updateObject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/services/updateProject.js,updateProject.js,js,119,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/updateProject.js,updateProject.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=0; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/src/validate.js,validate.js,js,3691,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/src/validate.js,validate.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,technical-convention,compliant,compliant,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,"Regime technical-convention; family F17; D10 compliant (current=tools, target=tools); D12 compliant. Technical naming convention preserved.",low,no,medium,path+content-sample+regime=technical-convention+incoming=1; convention=dot-separated tool convention,Usage unknown — verify references and operational role. Heuristic qualification only — not validated.,lot-I
```

---

## Rapport complet

# SFIA v2.6 — Repository Cartography Report (Final Scope)

*Cartographie exhaustive read-only — périmètre stable 1045 fichiers — qualification D1–D12*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
**Date et heure :** 2026-07-11 15:14 Europe/Paris
**Statut :** **Candidate** — livrable final avant re-review ChatGPT / merge
**Cycle :** Validation corrective finale de cartographie avant merge
**Profil SFIA :** **Critical**
**Repository :** mcleland147/sfia-workspace
**Branche :** audit/sfia-v2.6-repository-cartography
**PR :** #165
**Base inventaire stable :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `9709da543780d5b6ba978266b5f69b711b53ec870ac102d099aae979482dea4d`)

### Verdict périmètre

```
BASE INVENTORY COMPLETE — 1045 FILES
AUDIT ARTIFACTS EXCLUDED FROM SELF-INVENTORY
D1-D12 INVENTORY COVERAGE COMPLETE
QUALIFICATION PARTIAL — UNKNOWN VALUES REMAIN
```

---

## 1. Périmètre stable de l'inventaire

| Élément | Valeur |
|---------|--------|
| Commande inventaire | `git ls-tree -r --name-only 072058a1e3eea7a7647b638be4b8512df6b84ea6` |
| Fichiers base | **1045** |
| Lignes CSV | **1045** |
| Champs CSV | **35** |

### Artefacts d'audit exclus (`audit_artifacts_excluded_from_inventory`)

Ces trois livrables de la PR #165 **ne sont pas cartographiés** (aucune ligne CSV) :

1. `2026-07-11-sfia-v2.6-repository-cartography.csv`
2. `2026-07-11-sfia-v2.6-repository-cartography.md`
3. `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`

**Justification :** éviter la **référence circulaire** (la cartographie ne se cartographie pas elle-même). Les artefacts restent contrôlés via la PR #165, le review pack et le handoff Git — hors périmètre d'inventaire du repository de base.

> **Ne plus utiliser 1048** comme volume de cartographie.

---

## 2. Executive summary

Cartographie corrective finale des **1045 fichiers** du repository au HEAD de base `main`, qualifiés selon D1–D12.

| Domaine | Constat |
|---------|---------|
| Nommage D12 documentaire | **161** non-conformités |
| Conventions techniques | **308** fichiers — non soumis au rename D12 |
| D10 non conforme | **23** — **100 % périmètre v3** |
| D10 hors v3 | **0** |
| Lot B (exécution) | **0** — lot conditionnel non requis |
| Lot C (v3 archive) | **23** fichiers |
| Chevauchement B/C | **0** |
| delete-candidate | **11** (avec preuve + gate) |
| Lot 0 | **103** fichiers tagués |

---

## 3. Méthode (inchangée + périmètre)

- Inventaire figé sur commit base `072058a`
- Qualification : path + contenu (≤12 KB) + liens Markdown
- Régimes D12 : `documentary` | `technical-convention` | `unknown`
- D10 : fonction réelle — pas de déplacement par présence de `sfia` dans le nom
- Lots B/C : **mutuellement exclusifs** — v3 → Lot C uniquement

---

## 4. Séparation Lots B et C

| Lot | Périmètre | Volume CSV |
|-----|-----------|----------:|
| **Lot B** | D10 hors v3 — documents actifs mal placés | **0** |
| **Lot C** | SFIA v3.0 / MCP / Bridge / Runner — déplacement + archivage **dans un seul lot futur** | **23** |

**Règle :** aucun fichier v3 ne peut être traité en Lot B puis Lot C. Les 23 non-conformités D10 sont intégralement v3 → Lot C.

**Cas D10 hors v3 restants :** aucun sur la base stable actuelle.

---

## 5. Couverture (1045 fichiers base)

### Familles (top)

F08=399, F17=290, F09=103, F13=67, F15=40, F06=36, autres=111

### Trajectoire

N/A=739, v2.4=254, **v3.0=23**, v1.1=19, v2.6=**4**, v2.5=6

> v2.6=4 (artefacts d'audit exclus — ne gonflent plus F09/candidate du CSV)

### Nommage

| Régime / statut | Count |
|-----------------|------:|
| documentary | 699 |
| technical-convention | 308 |
| compliant (total) | 820 |
| non-compliant (documentaire) | 161 |

### Emplacement D10

compliant=1022, non-compliant=**23** (v3 uniquement)

---

## 6. Tableau de qualité

| Métrique | Count |
|----------|------:|
| confidence high | 657 |
| confidence medium | 367 |
| confidence low | 21 |
| usage unknown | 481 |
| authority unknown | 534 |
| lifecycle unknown | 359 |
| morris_gate yes | 43 |
| investigate | 38 |
| delete-candidate | 11 |
| archive (total) | 60 |
| archive v3 (Lot C) | 23 |
| archive non-v3 (Lot 0) | 37 |

---

## 7. Suppressions candidates (11)

Tous dans les 1045 fichiers base — preuve + `morris_gate_required: yes` — Lot 0 puis Lot J.

Documents superseded (foundation v1.1, documentation-audit, workspace-audit round-2, interv360 audit transitoire).

---

## 8. Lot 0

**103 fichiers** tagués `lot-0` — qualification manuelle avant migrations A–J.

Inclut : investigate, gates, archive non-v3 (37), delete-candidate review, inconnues structurantes.

---

## 9. Confirmation hors périmètre

| Élément | Statut |
|---------|--------|
| Self-inventory des 3 artefacts | **Exclu** |
| Fichiers base omis | **Aucun** |
| Migration exécutée | **Non** |
| Chevauchement B/C | **0** |

---

## Annexe — Contrôles d'exhaustivité

| Contrôle | Résultat |
|----------|----------|
| Base inventaire | 1045 |
| Lignes CSV | 1045 |
| Chemins uniques | 1045 |
| Champs | 35 |
| Artefacts audit dans CSV | **0** |
| Doublons | 0 |
| D10 contradictions | 0 |
| B/C overlap | 0 |
| lifecycle active | 0 |
| scope product | 0 |
| SHA-256 | `9709da543780d5b6ba978266b5f69b711b53ec870ac102d099aae979482dea4d` |

---

*Cartographie candidate — périmètre stable 1045 — prête pour re-review ChatGPT pre-merge.*


---

## Plan complet

# SFIA v2.6 — Repository Migration Lots Plan (Final Scope)

*Plan de mise en conformité — périmètre stable 1045 — Lots B/C disjoints*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
**Date et heure :** 2026-07-11 15:14 Europe/Paris
**Statut :** **Candidate** — planification — aucune exécution
**Cycle :** Validation corrective finale de cartographie avant merge
**Profil SFIA :** **Critical**
**Base inventaire :** `072058a` — **1045 fichiers**
**Artefacts audit exclus :** 3 livrables PR #165 (hors CSV)
**Source CSV :** SHA-256 `9709da543780d5b6ba978266b5f69b711b53ec870ac102d099aae979482dea4d`

---

## 1. Règle de non-double-affectation B/C

| Lot | Périmètre exclusif |
|-----|-------------------|
| **Lot B** | Non-conformités D10 **hors** trajectoire v3 — documents **actifs** mal placés |
| **Lot C** | **Intégralité** du périmètre SFIA v3.0 / MCP / Bridge / Runner — déplacement vers zone archive **et** archivage dans **un seul lot futur** |

**Interdit :** déplacer un fichier v3 en Lot B puis l'archiver en Lot C.

**Contrôle cartographie :** chevauchement B/C = **0**.

---

## 2. Séquence globale

```text
Cartographie finale (PR #165)
  → merge PR #165
  → Lot 0 qualification manuelle
  → Lot A canonical/core
  → Lot B D10 hors v3 — SI volume > 0 (actuellement : non requis)
  → Lot C archivage complet v3/MCP (23 fichiers)
  → Lot D nommage documentaire (sous-lots)
  → Lot E contrôles globaux résiduels
  → Lot F doublons/superseded
  → Lot G projets (par projet)
  → Lot H prompts/templates/checklists actifs
  → Lot I tooling/CI actif
  → Lot J suppressions finales (11 candidates)
```

**Articulation Lot E :** chaque lot B/C/D/G/H met à jour ses références directes dans la même PR ; Lot E = contrôle global résiduel.

---

## 3. Lot 0 — Qualification manuelle

| Champ | Contenu |
|-------|---------|
| **Volume tag CSV** | **103** |
| **Objectif** | Trancher cas structurants avant migrations |
| **Inclut** | investigate (38) ; archive non-v3 (37) ; delete-candidate (11) ; gates Morris ; conflits canonical |
| **Gate** | Critical — Morris |
| **Règle** | Aucun lot A–J sur cas structurants non tranchés |

---

## 4. Lot A — Canonical / core

| Volume | ~6–9 fichiers (3 canonical + core) |
| Gate | Critical |

---

## 5. Lot B — D10 hors v3

| Champ | Contenu |
|-------|---------|
| **Volume exécution** | **0** |
| **Statut** | **`not required based on current cartography`** |
| **D10 non conforme hors v3** | **0** sur base `072058a` |
| **Condition réouverture** | Si future cartographie identifie un D10 actif hors v3 |

Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichiers.

---

## 6. Lot C — Archivage complet v3 / MCP

| Champ | Contenu |
|-------|---------|
| **Volume exécution** | **23 fichiers** (trajectory SFIA v3.0) |
| **Périmètre** | docs/tooling/mcp/sfia-3-* ; capitalization/sfia-v3/* ; sfia-3-documentation-routing-audit ; prompts v3 ; governance/sfia-3-morris-gate |
| **Actions lot futur unique** | `git mv` vers `method/.../documentation/archive/sfia-v3/` ; lifecycle/trajectory ; refs directes ; contrôle non-réactivation |
| **D10** | 23/23 non-conformités D10 = v3 → **Lot C exclusivement** |
| **Gate** | Critical — Morris |
| **Archive non-v3 (37)** | **Hors Lot C** — traités via Lot 0 |

---

## 7. Lot D — Nommage documentaire

| Volume tag | **149** |
| Sous-lots | method-capitalization (14) ; projects-docs (117) ; prompts-templates (8) ; docs-practices (2) ; other (8) |
| Max par sous-lot | 20–50 fichiers |
| Exclus | 308 technical-convention |

---

## 8. Lot E — Contrôles globaux

| Volume tag | 75 |
| Rôle | README/index résiduels post-lots de chemins |

---

## 9. Lot F — Doublons / superseded

Post-Lot 0 — volume à confirmer.

---

## 10. Lot G — Projets

| Scope | 687 fichiers |
| Actions | rename 117 ; investigate 8 ; delete-candidate 1 |
| Sous-lots | interv360 (~432 scope) ; chantiers360-v2 (~137) ; ≤50 fichiers/PR |

---

## 11. Lot H / I

| Lot | Volume tag |
|-----|----------:|
| H (prompts actifs hors v3) | 40 |
| I (tooling/CI) | 68 |

---

## 12. Lot J — Suppressions

| Volume | **11** delete-candidate |
| Gate | Critical — par fichier |
| Ordre | Dernier — après Lot 0 validation |

---

## 13. Artefacts d'audit (hors inventaire)

Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot de migration du repository de base.

---

## 14. Confirmation

| Élément | Statut |
|---------|--------|
| Inventaire stable 1045 | **Oui** |
| Self-inventory exclu | **Oui** |
| Lot B ∩ Lot C = ∅ | **Oui** |
| Lot B volume | **0** |
| Lot C volume v3 | **23** |
| Exécution | **Aucune** |

---

*Plan candidate — Morris décide — prêt pour re-review pre-merge.*


---

## Verdict

**BASE INVENTORY COMPLETE — 1045 FILES**
**AUDIT ARTIFACTS EXCLUDED FROM SELF-INVENTORY**
**D1-D12 INVENTORY COVERAGE COMPLETE**
**QUALIFICATION PARTIAL — UNKNOWN VALUES REMAIN**
**LOT B LIMITED TO NON-V3 D10 CASES**
**LOT C OWNS COMPLETE V3 ARCHIVE SCOPE**
**NO B/C LOT OVERLAP**
**DELETE CANDIDATES REASSESSED**
**NO EXISTING REPOSITORY FILE MODIFIED**
**NO PHYSICAL MIGRATION EXECUTED**
**PR #165 UPDATED**
**PR NOT MERGED**
**REVIEW HANDOFF COMPLETE — REMOTE VERIFIED**
**READY FOR CHATGPT FINAL PRE-MERGE REVIEW**
**SFIA v2.4 REMAINS BASELINE**
**SFIA v2.6 REMAINS CANDIDATE**

**review pack verdict : complete**
