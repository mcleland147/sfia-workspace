# SFIA Review Pack — Repository Cartography Corrective Cycle

**Date/heure :** 2026-07-11 15:03 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation corrective de cartographie repository
**Profil :** Critical
**PR :** #165 — Map repository for SFIA v2.6 compliance
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** 33eb067d1bb3758ed4c49ec038a31ff6b5c3331b
**HEAD final :** 6e3fa647fbc3098f87ae428845e7be80ca74f99b
**Base main :** 072058a1e3eea7a7647b638be4b8512df6b84ea6

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Branche | audit/sfia-v2.6-repository-cartography |
| HEAD initial | 33eb067 |
| PR #165 | OPEN, non draft, non mergée |
| Fichiers modifiés autorisés | 3 livrables cartographie uniquement |
| Worktree tracked/staged | Propre |

---

## Correctifs appliqués

1. **D12** — séparation documentary / technical-convention / unknown
2. **D10** — cohérence current vs target ; docs/architecture = docs
3. **Qualification partielle** — verdict honnête
4. **Lot 0** — qualification manuelle préalable
5. **Delete-candidate** — 11 fichiers avec preuve
6. **Séquence lots** — alignée unique

---

## Statistiques avant / après

| Métrique | Avant | Après |
|----------|------:|------:|
| Fichiers tracked | 1045 (main) / 1048 (branche) | 1048 |
| Champs CSV | 34 | 35 |
| SHA-256 CSV | `116183d8e0f917259d2eba8c0ae7a4d1f489feb9f4e2633d045e030c130a7d1b` | `bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735` |
| D10 contradictions | 187 | 0 |
| D12 non-compliant | 326 | 161 |
| Rename disposition | 321 | 150 |
| Lot D volume | 319 | 132 |
| delete-candidate | 0 | 11 |
| archive | 61 | 60 |
| lot-0 | 0 | 227 |
| morris_gate yes | 24 | 43 |

---

## Exemples techniques corrigés

- `.env.example` → keep, technical-convention, compliant
- `docker-compose.override.example.yml` → keep, technical-convention, compliant
- `penpot-mcp.example.json` → keep, technical-convention, compliant
- `docs/architecture/sfia-delivery-pipeline.md` → docs/docs compliant (was method target)

---

## CSV — Large Artifact Protocol

**large created artifact = yes**
**synthesis only = no**
**Chemin :** method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
**SHA-256 :** bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735
**Lignes données :** 1048
**Champs :** 35

**Instruction ChatGPT :** Lire le CSV complet depuis la branche projet.

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
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,unknown,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,unknown,unknown,compliant,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,investigate,tools/cmp-001/src/schemas/template.schema.json,template.schema.json,"Regime unknown; family F15; D10 compliant (current=tools, target=tools); D12 unknown.",low,no,medium,path+content-sample+regime=unknown+incoming=0,Usage unknown — verify references and operational role. Naming rule regime uncertain — investigate before rename. Documentary naming status uncertain. Heuristic qualification only — not validated.,lot-0
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

## Contenu complet — Cartography Report

# SFIA v2.6 — Repository Cartography Report (Corrected)

*Cartographie exhaustive read-only — qualification D1–D12 — correctif PR #165*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
**Date et heure :** 2026-07-11 15:03 Europe/Paris
**Statut :** **Candidate** — livrable de cartographie read-only (correctif)
**Cycle projet :** Validation corrective de cartographie repository
**Profil SFIA :** **Critical**
**Typologie v2.4 :** DOC / audit correctif
**Repository :** mcleland147/sfia-workspace
**Branche :** audit/sfia-v2.6-repository-cartography
**PR :** #165 — Map repository for SFIA v2.6 compliance
**Base Git :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**HEAD correctif :** (post-commit correctif)
**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (35 champs, SHA-256: `bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735`)

### Limites du cycle

- **Read-only** — aucune modification physique des fichiers existants hors livrables PR
- Qualification **partielle** — inconnues structurantes explicitement tracées
- Propositions = **recommandations** — non autorisations d'exécution
- SFIA v2.6 reste **candidate** — v2.4 reste baseline

---

## 1. Executive summary

Cartographie **corrective** de **1048 fichiers Git tracked** (`git ls-files` sur branche PR #165 = 1045 fichiers `main` + 3 livrables cartographie).

**Correctifs appliqués :**

| Correctif | Avant | Après |
|-----------|------:|------:|
| Champs CSV | 34 | **35** (+ `naming_rule_regime`) |
| Contradictions D10 (compliant si current≠target) | 187 | **0** |
| Renommages techniques erronés | ~150+ | **0** |
| Non-conformités D12 (toutes familles) | 326 | **161** (documentaire uniquement) |
| Non-conformités D12 documentaire | — | **161** |
| Régime `technical-convention` | non distingué | **308** fichiers |
| Emplacements D10 non conformes | 24 | **23** (v3/MCP principalement) |
| Suppressions candidates | 0 | **11** (avec preuve + gate) |
| Candidats archive | 61 | **60** |

**Verdict qualification :**

```
D1-D12 INVENTORY COVERAGE COMPLETE
QUALIFICATION PARTIAL — UNKNOWN VALUES REMAIN
```

---

## 2. Méthode d'inventaire (corrigée)

| Élément | Détail |
|---------|--------|
| Commande | `git ls-files` |
| Fichiers tracked | **1048** |
| Lignes CSV | **1048** |
| Champs | **35** (ajout `naming_rule_regime`) |
| Ordre | `current_path` alphabétique |

**Régimes de nommage D12 :**

| Régime | Règle | Fichiers |
|--------|-------|--------:|
| `documentary` | kebab-case EN ; dates événementielles | 701 |
| `technical-convention` | conventions outil/framework conservées | 308 |
| `unknown` | investigate — pas de rename automatique | 39 |
| `not-applicable` | (inclus dans technical pour F16/F17) | — |

**D10 corrigé :** la cible logique est déterminée par **fonction réelle** (contenu + chemin), pas par la présence de `sfia` dans le nom. `docs/architecture/sfia-*` = documentation plateforme → zone `docs`. Prompts opérationnels → zone `prompts`.

**Garde-fou D10 :** si `logical_location_current ≠ logical_location_target` → `location_compliance` ≠ `compliant`.

---

## 3. Exemples techniques corrigés

| Fichier | Avant (erroné) | Après (correct) |
|---------|----------------|-----------------|
| `docker/penpot/.env.example` | rename → `env.example` | `technical-convention`, compliant, keep |
| `docker/penpot/docker-compose.override.example.yml` | rename mécanique | `technical-convention`, compliant, keep |
| `.cursor/mcp-templates/penpot-mcp.example.json` | rename | `technical-convention`, compliant, keep |
| `.github/workflows/*.yml` | parfois rename | `technical-convention`, compliant, keep |
| `docs/architecture/sfia-delivery-pipeline.md` | target=method, non-compliant | target=docs, **compliant** |
| `README.md` (racine) | target=docs, non-compliant | target=repository, **compliant** |

---

## 4. Couverture par famille (F01–F17)

| Famille | Count | % |
|---------|------:|--:|
| F08 Document projet | 399 | 38.1% |
| F17 Code / artefact | 290 | 27.7% |
| F09 Audit | 106 | 10.1% |
| F13 README / index | 67 | 6.4% |
| F15 Tooling doc | 40 | 3.8% |
| F06 Doc transverse | 36 | 3.4% |
| F04 Template | 27 | 2.6% |
| F05 Prompt | 23 | 2.2% |
| F01 Méthode | 15 | 1.4% |
| F10 Capitalisation / REX | 14 | 1.3% |
| F07 Pratique spécialisée | 12 | 1.1% |
| F02 Gouvernance | 8 | 0.8% |
| F03 Cycle / checklist | 6 | 0.6% |
| F11 Décision / cadrage | 3 | 0.3% |
| F16 Config technique | 1 | 0.1% |
| F14 Publication / export | 1 | 0.1% |

---

## 5. Couverture par lifecycle_status

| État | Count |
|------|------:|
| unknown | 359 |
| validated | 292 |
| archived | 255 |
| draft | 109 |
| candidate | 33 |
| deprecated | 0 |
| superseded | 0 |

> Aucun `lifecycle_status: active`.

---

## 6. Couverture par authority

| Niveau | Count |
|--------|------:|
| unknown | 534 |
| informational | 298 |
| supporting | 139 |
| reference | 74 |
| canonical | 3 |

**Conflits canonical candidats :** 3 lignes — gate Morris requis.

---

## 7. Couverture par usage

| Usage | Count |
|-------|------:|
| unknown | 484 |
| operational | 353 |
| non-operational | 211 |

> Tout `unknown` accompagné d'une réserve dans le CSV.

---

## 8. Couverture par scope

| Scope | Count |
|-------|------:|
| project | 687 |
| method | 178 |
| tooling | 125 |
| repository | 58 |

> Aucun `scope: product`.

---

## 9. Couverture par trajectoire

| Trajectory | Count |
|------------|------:|
| N/A | 739 |
| SFIA v2.4 | 254 |
| SFIA v3.0 | 23 |
| SFIA v1.1 | 19 |
| SFIA v2.6 | 7 |
| SFIA v2.5 | 6 |

---

## 10. Conformité nommage D12 (recalculée)

### Par régime

| Régime | Count |
|--------|------:|
| documentary | 701 |
| technical-convention | 308 |
| unknown | 39 |

### Par compliance

| Statut | Count | Note |
|--------|------:|------|
| compliant | 820 | incl. 308 conventions techniques |
| non-compliant | 161 | **documentaire uniquement** |
| unknown | 67 | régime ou règle incertaine |

**Avant correctif :** 326 non-conformités (D12 appliqué mécaniquement au code et aux configs).

---

## 11. Conformité emplacement D10 (recalculée)

| Statut | Count |
|--------|------:|
| compliant | 1025 |
| non-compliant | 23 |
| ambiguous | 0 |
| unknown | 0 |

**Cas D10 non conformes :** 23 fichiers — **périmètre v3.0/MCP** (docs/tooling/mcp/sfia-3-*, capitalization/sfia-v3/*, prompts v3).

**Contradictions D10 éliminées :** 187 → 0.

---

## 12. Tableau de qualité de qualification

| Métrique | Count | Interprétation |
|----------|------:|----------------|
| Total fichiers | 1048 | Inventaire exhaustif |
| confidence high | 657 | Heuristique forte — **non validation Morris** |
| confidence medium | 370 | Heuristique — réserve obligatoire |
| confidence low | 21 | Qualification fragile |
| lifecycle unknown | 359 | Lot 0 si structurant |
| authority unknown | 534 | Lot 0 si méthode/gouvernance |
| usage unknown | 484 | Lot 0 si impact migration |
| location unknown | 0 | — |
| naming unknown | 67 | investigate |
| investigate | 39 | Lot 0 |
| morris_gate yes | 43 | Décision Morris |
| delete-candidate | 11 | Gate Morris + preuve |
| archive | 60 | Lot 0 puis Lot C |
| canonical conflict | 3 | Lot 0 puis Lot A |

> **`confidence medium` ≠ qualification validée.**

---

## 13. Suppressions candidates (recherche read-only)

**11 fichiers** identifiés avec preuve et `morris_gate_required: yes` :

- Documents marqués superseded (foundation v1.1, documentation-audit, structure-target)
- Audits workspace round-2 remplacés par capitalisation v2.6
- Audit interv360 transitoire superseded

**Exclus de delete-candidate :** `.gitkeep` (rôle structurel), exports workspace-audit `.txt` (inventaires historiques → Lot 0).

**Si aucune suppression fiable supplémentaire :** Lot 0 doit poursuivre la qualification — cela ne signifie pas l'absence future de fichiers supprimables.

---

## 14. Lot 0 — qualification manuelle

**227 fichiers** tagués `lot-0` incluant :

- 39 `investigate`
- 60 `archive` (validation avant archivage physique)
- 11 `delete-candidate`
- Gates Morris, conflits canonical, inconnues structurantes

**Aucun lot A–J ne démarre avant résolution Lot 0 des cas structurants.**

---

## 15. Propositions de traitement

| Disposition | Count |
|-------------|------:|
| keep | 788 |
| rename | 150 |
| archive | 60 |
| investigate | 39 |
| delete-candidate | 11 |
| move | 0 |
| rename-and-move | 0 |

> Recommandations uniquement — aucune exécution.

---

## 16. Gates Morris

**43 fichiers** avec `morris_gate_required: yes` — canonical, delete-candidate, archive v3, core, cas structurants.

---

## 17. Limites de confiance

- Qualification heuristique path + échantillon contenu (≤12 KB)
- Volume élevé d'`unknown` sur authority/usage/lifecycle
- Revue ChatGPT/Morris requise avant tout GO migration
- Correctif améliore fiabilité D10/D12 — ne clôt pas l'arbitrage documentaire

---

## 18. Confirmation hors périmètre

| Élément | Statut |
|---------|--------|
| Fichiers existants modifiés (hors 3 livrables) | **Aucun** |
| Migration exécutée | **Non** |
| Archivage v3 physique | **Non** |
| Suppression exécutée | **Non** |
| SFIA v2.6 promue baseline | **Non** |

---

## Annexe A — Contrôles d'exhaustivité

| Contrôle | Résultat |
|----------|----------|
| git ls-files | 1048 |
| Lignes CSV données | 1048 |
| Chemins uniques | 1048 |
| Champs CSV | 35 |
| Doublons current_path | 0 |
| lifecycle active | 0 |
| scope product | 0 |
| D10 contradictions | 0 |
| Technical rename erroné | 0 |
| SHA-256 CSV | `bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735` |

---

*Cartographie candidate SFIA v2.6 — correctif PR #165 — qualification partielle explicitement tracée.*


---

## Contenu complet — Migration Lots Plan

# SFIA v2.6 — Repository Migration Lots Plan (Corrected)

*Plan de mise en conformité par lots — correctif PR #165*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
**Date et heure :** 2026-07-11 15:03 Europe/Paris
**Statut :** **Candidate** — planification — aucune exécution
**Cycle :** Validation corrective de cartographie repository
**Profil SFIA :** **Critical**
**Repository :** mcleland147/sfia-workspace
**Branche :** audit/sfia-v2.6-repository-cartography
**PR :** #165
**Source cartographie :** CSV 35 champs @ SHA-256 `bd78e8744e07347f5ec0e25d28da12ac63d0c6aec42f1f2632daca8e8bef2735`
**Autorité :** Morris (L0)

### Limites

- Plan dérivé de la **cartographie corrigée**
- **Lot 0 obligatoire** avant migrations structurantes
- Aucun lot autorisé sans GO Morris distinct
- Aucune action physique dans ce cycle

---

## 1. Executive summary

| Lot | Fichiers (tag CSV) | Volume exécution estimé | Gate |
|-----|-------------------:|-------------------------:|------|
| **0** | 227 | Qualification manuelle | Critical — Morris |
| A | 3 canonical | ~9 core/gouvernance | Critical |
| B | — | **23** emplacements v3 D10 | Critical |
| C | — | **60** archivages | Critical |
| D | 132 | **132** renames documentaires | Standard (sous-lots) |
| E | 75 | Contrôles globaux résiduels | Standard |
| F | — | Doublons/superseded post-Lot 0 | Critical si fusion |
| G | 562 scope | **126** actions projet (rename+investigate+delete) | Par projet |
| H | 9 | Prompts/templates | Standard |
| I | 43 | Tooling/CI | Standard |
| J | — | **11** suppressions candidates | Critical |

---

## 2. Séquence globale (unique)

```text
Cartographie corrigée (PR #165)
  → merge PR #165
  → Lot 0 — qualification manuelle (read-only puis décisions)
  → Lot A — canonical / core
  → Lot B — emplacements D10 (v3/MCP)
  → Lot C — archivage physique v3
  → Lot D — nommage documentaire (sous-lots 20–50 fichiers)
  → Lot E — contrôles globaux README/index (résiduel)
  → Lot F — doublons / superseded
  → Lot G — projets (par projet, sous-lots)
  → Lot H — prompts / templates / checklists
  → Lot I — tooling / CI
  → Lot J — suppressions finales
```

### Nuance Lot E (articulation)

Chaque lot **B, C, D, G, H** impliquant un changement de chemin doit :

- mettre à jour ses **références directes dans la même PR** ;
- réserver **Lot E** aux contrôles globaux, README racine et index résiduels post-migration.

Lot E **n'est pas** une correction tardive unique de tous les liens.

---

## 3. Lot 0 — Qualification manuelle et décisions de disposition

| Champ | Contenu |
|-------|---------|
| **Objectif** | Résoudre les cas susceptibles de modifier fortement les lots A–J |
| **Fichiers tagués CSV** | **227** |
| **Périmètre prioritaire** | investigate (39) ; gates Morris (43) ; archive (60) ; delete-candidate (11) ; conflits canonical (3) ; authority/usage/lifecycle unknown sur méthode, prompts, gouvernance |
| **Actions** | **Read-only** — revue contenu, preuves, remplaçants, refs entrantes/sortantes |
| **Sortie attendue** | Décision proposée par fichier : keep / update / archive / delete-candidate / merge-candidate / investigate |
| **Gate Morris** | **GO Critical** pour ouvrir Lot 0 |
| **Critères entrée** | Merge PR #165 corrigée |
| **Critères sortie** | Cas structurants tranchés ou explicitement réservés ; preuves documentées |
| **Réserves** | Inconnues non structurantes reportables aux lots projet |

**Règle :** aucune migration A–J avant clôture Lot 0 sur les cas structurants.

---

## 4. Lot A — Canonical, core et gouvernance

| Champ | Contenu |
|-------|---------|
| **Objectif** | Stabiliser autorité D4 |
| **Volume** | 3 canonical ; ~9 fichiers core/gouvernance |
| **Gate** | Critical — Morris |
| **Ordre** | 1 (après Lot 0) |
| **PR envisagée** | `migration/lot-a-canonical-core` |

---

## 5. Lot B — Emplacements D10

| Champ | Contenu |
|-------|---------|
| **Objectif** | Corriger 23 emplacements v3/MCP non conformes |
| **Volume exécution** | **23** (docs/tooling/mcp/sfia-3-*, capitalization/sfia-v3/*, prompts v3) |
| **Actions** | `git mv` vers zone archive gouvernée |
| **Dépendances** | Lot 0 validation périmètre v3 ; Lot A si refs canonical |
| **Gate** | Critical — Morris |
| **Ordre** | 2 |
| **Liens** | Mise à jour refs directes **dans la même PR** |

---

## 6. Lot C — Archivage SFIA v3.0 (D11)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Archivage physique post-validation Lot 0 |
| **Volume** | **60** candidats archive |
| **Cible** | `method/sfia-fast-track/documentation/archive/sfia-v3/` |
| **Gate** | Critical — Morris |
| **Ordre** | 3 |
| **Interdit** | Réactivation MCP, Bridge, Runner, `.sfia` |

---

## 7. Lot D — Nommage documentaire (D12)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Renommer **uniquement** fichiers régime `documentary` non conformes |
| **Volume CSV tag** | **132** |
| **Volume rename réel** | **150** dispositions rename (dont chevauchements lot-G) |
| **Exclus** | **308** fichiers `technical-convention` — **aucun rename D12** |
| **Gate** | Standard — Morris par sous-lot |
| **Ordre** | 4 |

### Sous-lots D (max 20–50 fichiers)

| Sous-lot | Volume | Périmètre |
|----------|-------:|-----------|
| D-1 method-capitalization-audits | 4 | Audits/capitalisations méthode |
| D-2 docs-practices | 2 | Pratiques plateforme |
| D-3 projects-docs | 117 | Markdown projet (kebab-case, dates) |
| D-4 prompts-templates | 3 | Templates prompts |
| D-5 other | 6 | Divers documentaire |

**Règle découpage :** un domaine cohérent ; chemins source/cible fermés ; refs mises à jour dans la même PR ; rollback par PR.

---

## 8. Lot E — Liens, README et index (résiduel)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Contrôles globaux après lots de chemins |
| **Volume tag CSV** | 75 |
| **Gate** | Standard |
| **Ordre** | 5 |
| **Note** | Complète les mises à jour locales des lots B–D–G–H |

---

## 9. Lot F — Doublons, superseded, fusion candidates

| Champ | Contenu |
|-------|---------|
| **Objectif** | Traiter chevauchements post-Lot 0 |
| **Volume initial** | À déterminer depuis Lot 0 |
| **Gate** | Critical par fusion |
| **Ordre** | 6 |

---

## 10. Lot G — Documents projets

| Champ | Contenu |
|-------|---------|
| **Objectif** | Conformité par projet |
| **Scope total** | 687 fichiers scope project |
| **Actions identifiées** | rename 117 ; investigate 8 ; delete-candidate 1 |

### Sous-lots G par projet

| Projet | Fichiers scope | Actions rename | Sous-lot suggéré |
|--------|---------------:|---------------:|------------------|
| interv360 | 427 | ~80 | `migration/lot-g-interv360-{n}` (≤50 fichiers) |
| chantiers360-v2 | 134 | ~35 | `migration/lot-g-chantiers360-v2-{n}` |
| index/other | 1 | 0 | Lot E si README index |

**Règle :** ne pas mélanger code F17 et documentation sans justification ; sous-lots ≤50 fichiers.

---

## 11. Lot H — Prompts, templates, checklists

| Champ | Contenu |
|-------|---------|
| **Volume tag** | 9 |
| **Ordre** | 8 |
| **Gate** | Standard |

---

## 12. Lot I — Tooling et CI

| Champ | Contenu |
|-------|---------|
| **Volume tag** | 43 |
| **Ordre** | 9 |
| **Note** | F16/F17 en `technical-convention` — pas de rename D12 |

---

## 13. Lot J — Suppressions candidates finales

| Champ | Contenu |
|-------|---------|
| **Volume identifié** | **11** (preuve + gate Morris) |
| **Ordre** | 10 — **dernier** |
| **Gate** | Critical — **par fichier** |
| **Réserves** | Lot 0 peut en identifier d'autres ; aucune suppression sans dépendances vides prouvées |

**Fichiers identifiés (échantillon) :** audits foundation v1.1 superseded ; documentation-audit/structure-target ; workspace-audit round-2 ; global-audit ; interv360 current-application-audit.

---

## 14. Distinction types de lots

| Type | Lots |
|------|------|
| Read-only qualification | **0**, cartographie |
| Mise à jour documentaire | E |
| Renommage documentaire | D, G (partiel) |
| Déplacement / archivage | B, C |
| Suppressions | J |
| Critical gate | 0, A, B, C, J, F (fusion) |

---

## 15. Statistiques avant/après correctif (référence)

| Métrique | Avant PR correctif | Après correctif |
|----------|-------------------:|----------------:|
| Champs CSV | 34 | 35 |
| D10 contradictions | 187 | 0 |
| D12 non-compliant (tous) | 326 | 161 |
| Rename proposé | 321 | 150 |
| Lot D volume | 319 | 132 |
| delete-candidate | 0 | 11 |
| archive | 61 | 60 |

---

## 16. Confirmation

| Élément | Statut |
|---------|--------|
| Lot 0 ajouté | **Oui** |
| Séquence unique | **Oui** |
| Sous-lots D/G définis | **Oui** |
| Articulation Lot E | **Documentée** |
| Lots exécutés | **Aucun** |
| GO Morris | **Non accordés** |

---

*Plan candidate — correctif PR #165 — Morris décide.*


---

## Useful Diff

```diff
M method/.../2026-07-11-sfia-v2.6-repository-cartography.csv (35 fields, recalculated)
M method/.../2026-07-11-sfia-v2.6-repository-cartography.md (corrective report)
M method/.../2026-07-11-sfia-v2.6-repository-migration-lots-plan.md (Lot 0, sequence)
```

**modified sections complete :** yes
**useful diff included :** yes
**synthesis only :** no

---

## Review Pack Coverage

| Artifact | Full content |
|----------|-------------|
| cartography.md | yes |
| migration-lots-plan.md | yes |
| cartography.csv | large artifact protocol |
| modified sections | yes |

---

## Verdict

**REPOSITORY INVENTORY REMAINS COMPLETE**
**D1-D12 INVENTORY COVERAGE COMPLETE**
**QUALIFICATION PARTIAL — UNKNOWN VALUES REMAIN**
**DOCUMENTARY AND TECHNICAL NAMING RULES SEPARATED**
**D12 STATISTICS RECALCULATED**
**D10 CLASSIFICATIONS CORRECTED**
**DELETE CANDIDATES ASSESSED**
**LOT 0 QUALIFICATION PHASE ADDED**
**MIGRATION LOT SEQUENCE ALIGNED**
**D AND G SUBLOTS DEFINED**
**NO EXISTING REPOSITORY FILE MODIFIED**
**NO PHYSICAL MIGRATION EXECUTED**
**PR #165 UPDATED**
**PR NOT MERGED**
**REVIEW HANDOFF COMPLETE — REMOTE VERIFIED**
**READY FOR CHATGPT RE-REVIEW**
**SFIA v2.4 REMAINS BASELINE**
**SFIA v2.6 REMAINS CANDIDATE**

**review pack verdict : complete**
