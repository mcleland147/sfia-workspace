# SFIA Review Pack — Repository Cartography Cycle

**Date/heure :** 2026-07-11 14:43 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Cadrage et audit repository — cartographie exhaustive et planification de la mise en conformité
**Profil :** Critical
**Justification :** Périmètre repository-wide ; qualification 1045 fichiers tracked ; préparation migrations ; gates Morris ; traçabilité avant action physique
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD base :** 072058a1e3eea7a7647b638be4b8512df6b84ea6
**HEAD final :** 33eb067d1bb3758ed4c49ec038a31ff6b5c3331b

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | /Users/morris/Projects/sfia-workspace |
| Repository | mcleland147/sfia-workspace |
| Remote | origin |
| Branche active | audit/sfia-v2.6-repository-cartography |
| HEAD local | 33eb067d1bb3758ed4c49ec038a31ff6b5c3331b |
| origin/main | 072058a1e3eea7a7647b638be4b8512df6b84ea6 |
| PR #164 merge | Présent (ancêtre) |
| Worktree tracked/staged | Propre |
| Untracked | Préservés (.sfia/, .tmp-sfia-review/, etc.) |

---

## Sources consultées

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md
- README.md racine et index pertinents

---

## Méthode d'inventaire

- Commande : git ls-files
- Fichiers tracked : **1045**
- Qualification : heuristiques path + échantillon contenu (≤12 KB) + liens Markdown relatifs
- 34 champs par fichier selon D1–D12

---

## Fichiers créés

1. method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
2. method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
3. method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md

**Aucun fichier existant modifié.**

---

## Statistiques de couverture

| Métrique | Valeur |
|----------|--------|
| Total fichiers | 1045 |
| confidence high | 690 |
| confidence medium | 355 |
| confidence low | 0 |
| usage unknown | 401 |
| authority unknown | 534 |
| naming non-compliant | 326 |
| location non-compliant | 24 |
| location ambiguous | 10 |
| archive candidates | 61 |
| delete candidates | 0 |
| canonical conflicts | 4 |
| morris_gate yes | 24 |
| disposition keep | 625 |
| disposition rename | 321 |
| disposition archive | 61 |
| disposition investigate | 37 |

---

## Contrôles d'exhaustivité

| Contrôle | Résultat |
|----------|----------|
| git ls-files | 1045 |
| Lignes CSV données | 1045 |
| Chemins uniques | 1045 |
| Doublons current_path | 0 |
| lifecycle active | 0 |
| scope product | 0 |
| Untracked inclus | 0 |

---

## Conflits canonical (D4)

- 3 canonical identifiés (core SFIA v2.4)
- 4 conflits canonical candidats — gate Morris requis

---

## Cas D10

- 24 non-compliant ; 10 ambiguous
- Exemples : docs SFIA v3/MCP sous docs/tooling/mcp/ ; architecture SFIA sous docs/

---

## Périmètre D11 / v3

- 23 fichiers trajectory SFIA v3.0
- 61 propositions archive
- MCP/Bridge/Runner/.sfia identifiés — non réactivés

---

## Non-conformités D12

- 326 fichiers naming non-compliant
- Principaux écarts : dates manquantes, casse, noms FR/mixtes

---

## Gates Morris

24 fichiers morris_gate_required: yes — canonical, core, v3 archive, suppressions futures

---

## Risques

- Renommages massifs (321) sans Lot E = liens cassés
- Usage unknown (401) = qualification incomplète avant migration
- Authority unknown (534) = revue manuelle requise

---

## Réserves

- Qualification heuristique — revue ChatGPT/Morris recommandée
- Lots F/J sans fichiers exclusifs initialement — réévaluation post-lots antérieurs

---

## CSV — Large Artifact Protocol

**large created artifact = yes**
**synthesis only = no**
**Chemin Git exact :** method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
**SHA-256 :** 116183d8e0f917259d2eba8c0ae7a4d1f489feb9f4e2633d045e030c130a7d1b
**Lignes totales (header + data) :** 1046
**Lignes données :** 1045

**Instruction ChatGPT :** Lire le CSV complet depuis la branche audit/sfia-v2.6-repository-cartography avant de conclure.

### En-tête CSV

```
current_path,filename,extension,size_bytes,primary_family,subfamily,lifecycle_status,authority,usage,scope,project,phase,trajectory,trajectory_role,logical_location_current,logical_location_target,naming_compliance,location_compliance,metadata_profile,content_summary,incoming_references,outgoing_references,duplicate_or_overlap,canonical_candidate,proposed_disposition,proposed_target_path,proposed_target_filename,rationale,risk_level,morris_gate_required,confidence,evidence,reserve_or_question,migration_lot_candidate
```

### 20 premières lignes de données

```
.cursor/mcp-templates/README.md,README.md,md,3733,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,E,# Cursor MCP templates — Penpot **Dossier** : `.cursor/mcp-templates/` **Statut** : Exemples non secrets — configurat,docs/tooling/penpot/penpot-cursor-agent-rules.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-design-agent-architecture.md); ](../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../docs/tooling/penpot/penpot-mcp-self-host-rex.md); ](../docs/tooling/penpot/penpot-cursor-agent-rules.md),no,no,keep,.cursor/mcp-templates/README.md,README.md,Family F13 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-E
.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp.example.json,json,265,F17,,validated,informational,operational,repository,,,SFIA v2.4,baseline,repository,repository,non-compliant,not-applicable,N/A,"{ ""mcpServers"": { ""penpot-self-host"": { ""type"": ""http"", ""url"": ""http://localhost:9001/mcp/stream?userT",.cursor/mcp-templates/README.md; .cursor/mcp-templates/README.md; docs/tooling/penpot/penpot-mcp-self-host-rex.md; docs/tooling/penpot/penpot-self-host-docker-guide.md,,no,no,rename,.cursor/mcp-templates/penpot-mcp.example.json,penpot-mcp-example.json,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,medium,no,high,path+content-sample+incoming-link-count,,lot-D
.github/workflows/interv360-ci.yml,interv360-ci.yml,yml,1225,F16,,unknown,informational,unknown,tooling,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,N/A,"name: Interv360 CI on: pull_request: paths: - ""projects/interv360/**"" - "".github/workflows/interv360-",,,no,no,keep,.github/workflows/interv360-ci.yml,interv360-ci.yml,Family F16 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-I
.gitignore,.gitignore,none,262,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,N/A,Binary or non-text artifact (none),,,no,no,keep,.gitignore,.gitignore,Family F17 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-E
README.md,README.md,md,3571,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,E,# SFIA Workspace Workspace local officiel de la **SFIA** (Software Factory & Intelligence Architecture). Ce dépôt est,,,no,no,keep,README.md,README.md,Family F13 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-E
components/README.md,README.md,md,224,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,E,# Components Espace local pour les notes et artefacts liés aux composants SFIA. Le registre officiel des composants re,,,no,no,keep,components/README.md,README.md,Family F13 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-E
docker/penpot/.env.example,.env.example,example,400,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,non-compliant,unknown,N/A,Binary or non-text artifact (example),,,no,no,rename,docker/penpot/.env.example,env.example,Family F17 from path/content heuristics; D10 location unknown; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
docker/penpot/README.md,README.md,md,2792,F13,,unknown,reference,unknown,repository,,,SFIA v2.4,baseline,repository,repository,compliant,unknown,E,# Penpot Docker — Templates SFIA **Dossier** : `docker/penpot/` **Statut** : Templates sûrs — pas d'installation stan,,](https://help.penpot.app/technical-guide/getting-started/docker/); ](https://help.penpot.app/technical-guide/getting-started/); ](https://help.penpot.app/technical-guide/getting-started/docker/); ](../../docs/tooling/penpot/penpot-self-host-docker-guide.md); ](../.cursor/mcp-templates/penpot-mcp.example.json),no,no,keep,docker/penpot/README.md,README.md,Family F13 from path/content heuristics; D10 location unknown; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-E
docker/penpot/docker-compose.override.example.yml,docker-compose.override.example.yml,yml,378,F17,,validated,informational,unknown,repository,,,SFIA v2.4,baseline,repository,repository,non-compliant,unknown,N/A,# Example override for a local SFIA Penpot setup. # Use only with the official Penpot docker-compose.yml. # Do not treat,docker/penpot/README.md; docker/penpot/README.md,,no,no,rename,docker/penpot/docker-compose.override.example.yml,docker-compose-override-example.yml,Family F17 from path/content heuristics; D10 location unknown; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
docs/README.md,README.md,md,1104,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,compliant,ambiguous,E,# SFIA Platform Documentation Ce dossier contient la documentation plateforme SFIA. Il est distinct de la méthode acti,,,no,no,investigate,docs/README.md,README.md,Family F13 from path/content heuristics; D10 location ambiguous; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. D10 placement ambiguous — manual review. Lifecycle inferred insufficiently.,lot-E
docs/adr/README.md,README.md,md,131,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,compliant,ambiguous,E,# ADR Architecture Decision Records — décisions structurantes tracées. Source Notion : base ADR (`exports/notion/adr.j,,,no,no,investigate,docs/adr/README.md,README.md,Family F13 from path/content heuristics; D10 location ambiguous; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. D10 placement ambiguous — manual review. Lifecycle inferred insufficiently.,lot-E
docs/architecture/README.md,README.md,md,1966,F13,,unknown,reference,unknown,tooling,,,N/A,N/A,docs,docs,compliant,compliant,E,"# SFIA Architecture Documentation d'architecture SFIA : Domain Model, composants, flux et vues. Source Notion : Compon",,,no,no,keep,docs/architecture/README.md,README.md,Family F13 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Lifecycle inferred insufficiently.,lot-E
docs/architecture/sfia-decision-engine.md,sfia-decision-engine.md,md,56513,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,non-compliant,compliant,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,rename,docs/architecture/sfia-decision-engine.md,2026-07-11-sfia-decision-engine.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,md,57907,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-delivery-pipeline.md,sfia-delivery-pipeline.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/architecture/sfia-domain-model.md,sfia-domain-model.md,md,26327,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-domain-model.md,sfia-domain-model.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/architecture/sfia-meta-model.md,sfia-meta-model.md,md,45992,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-meta-model.md,sfia-meta-model.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,md,63116,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-platform-architecture.md,sfia-platform-architecture.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,md,41225,F06,,unknown,unknown,unknown,tooling,,,N/A,N/A,docs,method,compliant,compliant,F,--- source: Notion / SFIA Architecture status: reference sync: manual-export version: v1.1 previous: v1.0 updated_after:,docs/architecture/README.md,,no,no,keep,docs/architecture/sfia-repository-blueprint.md,sfia-repository-blueprint.md,Family F06 from path/content heuristics; D10 location compliant; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
docs/foundation/README.md,README.md,md,208,F13,,unknown,reference,unknown,tooling,,,SFIA v1.1,historical,docs,docs,compliant,ambiguous,E,"# Foundation Principes fondateurs, gouvernance et cadre de la plateforme SFIA. Source Notion : Knowledge Articles, Sta",,,no,no,investigate,docs/foundation/README.md,README.md,Family F13 from path/content heuristics; D10 location ambiguous; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. D10 placement ambiguous — manual review. Lifecycle inferred insufficiently.,lot-E
docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,md,10488,F06,,unknown,unknown,unknown,tooling,,,SFIA v1.1,historical,docs,method,compliant,ambiguous,F,--- source: Notion / SFIA Architecture status: foundation sync: manual-export version: v1.1 updated_after: SFIA foundati,docs/architecture/README.md,,no,no,investigate,docs/foundation/sfia-engineering-principles.md,sfia-engineering-principles.md,Family F06 from path/content heuristics; D10 location ambiguous; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. D10 placement ambiguous — manual review. Authority not established from content sample. Lifecycle inferred insufficiently.,lot-B
```

### 20 dernières lignes de données

```
tools/cmp-001/src/schemas/template.schema.json,template.schema.json,json,642,F15,,draft,unknown,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,F,"{ ""$schema"": ""https://json-schema.org/draft/2020-12/schema"", ""title"": ""Template"", ""type"": ""object"", ""properties""",,,no,no,rename,tools/cmp-001/src/schemas/template.schema.json,template-schema.json,Family F15 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,high,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role. Authority not established from content sample.,lot-D
tools/cmp-001/src/services/createADR.js,createADR.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createADR.js,create-adr.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createComponent.js,createComponent.js,js,123,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createComponent.js,create-component.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createExperiment.js,createExperiment.js,js,125,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createExperiment.js,create-experiment.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createKPI.js,createKPI.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createKPI.js,create-kpi.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createKnowledgeArticle.js,createKnowledgeArticle.js,js,130,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createKnowledgeArticle.js,create-knowledge-article.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createObject.js,createObject.js,js,826,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createObject.js,create-object.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createProject.js,createProject.js,js,119,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createProject.js,create-project.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createPrompt.js,createPrompt.js,js,117,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createPrompt.js,create-prompt.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createREX.js,createREX.js,js,111,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createREX.js,2026-07-11-create-rex.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createReferencePage.js,createReferencePage.js,js,132,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createReferencePage.js,create-reference-page.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createStandard.js,createStandard.js,js,121,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createStandard.js,create-standard.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/createTemplate.js,createTemplate.js,js,121,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/createTemplate.js,create-template.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/discover.js,discover.js,js,5562,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/discover.js,discover.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-I
tools/cmp-001/src/services/export.js,export.js,js,7318,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,keep,tools/cmp-001/src/services/export.js,export.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-I
tools/cmp-001/src/services/updateKnowledgeArticle.js,updateKnowledgeArticle.js,js,130,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/updateKnowledgeArticle.js,update-knowledge-article.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/updateObject.js,updateObject.js,js,735,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/updateObject.js,update-object.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/services/updateProject.js,updateProject.js,js,119,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,non-compliant,not-applicable,N/A,Binary or non-text artifact (js),,,no,no,rename,tools/cmp-001/src/services/updateProject.js,update-project.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming non-compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-D
tools/cmp-001/src/validate.js,validate.js,js,3691,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,compliant,not-applicable,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/src/validate.js,validate.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-I
tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,js,4453,F17,,validated,informational,unknown,tooling,,,SFIA v2.4,baseline,tools,tools,compliant,not-applicable,N/A,Binary or non-text artifact (js),tools/cmp-001/CHANGELOG.md,,no,no,keep,tools/cmp-001/tests/run-all-tests.js,run-all-tests.js,Family F17 from path/content heuristics; D10 location not-applicable; D12 naming compliant.,low,no,medium,path+content-sample+incoming-link-count,Usage unknown — verify references and operational role.,lot-I
```

---

## Contenu complet — Cartography Report

# SFIA v2.6 — Repository Cartography Report

*Cartographie exhaustive read-only du repository — qualification D1–D12*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
**Date et heure :** 2026-07-11 14:43 Europe/Paris
**Statut :** **Candidate** — livrable de cartographie read-only
**Cycle projet :** Cadrage et audit repository — cartographie exhaustive et planification de la mise en conformité
**Profil SFIA :** **Critical**
**Typologie v2.4 :** DOC / audit read-only
**Repository :** mcleland147/sfia-workspace
**Branche :** audit/sfia-v2.6-repository-cartography
**Base Git :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**Autorité de décision :** Morris (L0)
**Décision Morris :** GO cartographie exhaustive (2026-07-11)
**Baseline opérationnelle :** SFIA v2.4
**Trajectoire :** SFIA v2.6 candidate
**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `116183d8e0f917259d2eba8c0ae7a4d1f489feb9f4e2633d045e030c130a7d1b`)

### Limites du cycle

- **Read-only** — aucune modification, déplacement, renommage, archivage ou suppression exécutés
- Qualification selon principes et décisions D1–D12 intégrés sur `main` (PR #164)
- Propositions de traitement = **recommandations** — non autorisations d'exécution
- SFIA v2.6 reste **candidate** — ne remplace pas v2.4 baseline

---

## 1. Executive summary

Ce cycle produit une **cartographie exhaustive** des **1045 fichiers Git tracked** du repository, qualifiés selon les dimensions D1–D12. Chaque fichier possède une ligne dans le CSV machine-readable (34 champs).

**Synthèse des écarts majeurs :**

| Domaine | Constat |
|---------|---------|
| Nommage D12 | **326** fichiers `non-compliant` |
| Emplacement D10 | **24** `non-compliant` ; **10** `ambiguous` |
| SFIA v3.0 D11 | **23** fichiers trajectory v3.0 — **61** propositions `archive` |
| Autorité D4 | **3** canonical identifiés ; **4** conflits canonical candidats |
| Usage D5 | **401** usage `unknown` — réserves requises |
| Gates Morris | **24** fichiers avec gate `yes` |

**Confirmation :** aucune migration physique exécutée dans ce cycle.

---

## 2. Méthode d'inventaire

| Élément | Détail |
|---------|--------|
| Commande source | `git ls-files` |
| Fichiers tracked | **1045** |
| Lignes CSV données | **1045** |
| Chemins uniques | **1045** |
| Ordre | `current_path` alphabétique |
| Qualification | Heuristiques path + échantillon contenu (≤12 KB) + analyse liens Markdown relatifs |
| Exclusions | Untracked (`.tmp-sfia-review/`, `.sfia/`, etc.) |

**Garde-fous d'interprétation :** observation / hypothèse / recommandation / gate Morris distingués. Cursor ne décide pas de suppressions ni promotions canonical.

---

## 3. Périmètre et exclusions

**Inclus :** tous fichiers suivis par Git (MD, code, config, assets, prompts, projets, v3 tracked, `.github`).

**Exclus :** `.git/`, untracked, caches locaux, dépendances non tracked.

---

## 4. Couverture par famille (F01–F17)

| Famille | Count | % |
|---------|------:|--:|
| F08 Document projet | 399 | 38.2% |
| F17 Code / artefact | 290 | 27.8% |
| F09 Audit | 103 | 9.9% |
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
| candidate | 30 |
| deprecated | 0 |
| superseded | 0 |

> Aucun `lifecycle_status: active` — conforme D3.

---

## 6. Couverture par authority

| Niveau | Count |
|--------|------:|
| unknown | 534 |
| informational | 298 |
| supporting | 136 |
| reference | 74 |
| canonical | 3 |

**Canonical identifiés (gate Morris) :** operating model, routing guide, rules and guardrails (`method/sfia-fast-track/core/`).

**Conflits canonical candidats :** 4 lignes marquées `canonical-candidate-conflict` — arbitrage Morris requis avant promotion.

---

## 7. Couverture par usage

| Usage | Count |
|-------|------:|
| unknown | 401 |
| operational | 389 |
| non-operational | 255 |

**Réserve D5 :** 401 fichiers `unknown` — vérification contenu/références requise avant migration.

---

## 8. Couverture par scope

| Scope | Count |
|-------|------:|
| project | 688 |
| method | 175 |
| tooling | 125 |
| repository | 57 |

> Aucun `scope: product` — conforme D6.

---

## 9. Couverture par trajectoire

| Trajectory | Count |
|------------|------:|
| N/A | 739 |
| SFIA v2.4 | 254 |
| SFIA v3.0 | 23 |
| SFIA v1.1 | 19 |
| SFIA v2.5 | 6 |
| SFIA v2.6 | 4 |

---

## 10. Conformité nommage (D12)

| Statut | Count |
|--------|------:|
| compliant | 691 |
| non-compliant | 326 |
| unknown | 28 |
| not-applicable | 0* |

*Non-applicable comptabilisé séparément dans location (69 fichiers binaires/code sans règle MD).

**Principaux écarts :** absence préfixe date sur capitalisations/audits ; casse non kebab-case ; noms FR ou mixtes.

---

## 11. Conformité emplacement (D10)

| Statut | Count |
|--------|------:|
| compliant | 876 |
| non-compliant | 24 |
| ambiguous | 10 |
| unknown | 66 |
| not-applicable | 69 |

**Cas D10 non conformes (échantillon) :** documentation SFIA v3/MCP sous `docs/tooling/mcp/` ; artefacts v3 sous `prompts/tooling/mcp/` ; capitalisations SFIA mal placées.

**Règle appliquée :** SFIA lui-même → `method/.../documentation/` ; systèmes/produits/pratiques → `docs/` ou projet.

---

## 12. Conflits canonical (D4)

- **3** documents authority `canonical` (core SFIA v2.4)
- **4** lignes en conflit canonical candidat (même sujet/périmètre)
- Promotion canonical = **gate Morris** — aucune promotion exécutée

---

## 13. Périmètre SFIA v3.0 (D11)

| Métrique | Valeur |
|----------|--------|
| Fichiers trajectory SFIA v3.0 | 23 |
| Propositions disposition `archive` | 61 |
| MCP/Bridge/Runner/`.sfia` | Identifiés dans périmètre v3 — **non réactivés** |

**Cible D11 :** regroupement zone archive gouvernée — archivage physique = cycle futur distinct.

---

## 14. Doublons et chevauchements

- Conflits canonical candidats : **4**
- Documents workspace-audit historiques vs capitalisation v2.6 : chevauchement thématique — pas fusion proposée
- Prompts MCP v2/v3 : redondance potentielle — `investigate` / `archive`

---

## 15. Propositions de traitement (disposition)

| Disposition | Count | Nature |
|-------------|------:|--------|
| keep | 625 | Recommandation |
| rename | 321 | Recommandation |
| investigate | 37 | Recommandation |
| archive | 61 | Recommandation |
| move | 1 | Recommandation |
| delete-candidate | 0 | Recommandation |
| merge-candidate | 0 | Recommandation |

> **Aucune exécution** — valeurs = cartographie uniquement.

---

## 16. Inconnues et réserves

| Type | Count |
|------|------:|
| usage unknown | 401 |
| authority unknown | 534 |
| lifecycle unknown | 359 |
| confidence low | 0 |
| confidence medium | 355 |
| confidence high | 690 |

---

## 17. Gates Morris identifiés

**24 fichiers** avec `morris_gate_required: yes` — suppressions candidates, canonical, core, archivage v3 structurant.

---

## 18. Matrice décisions Morris nécessaires (post-cartographie)

| Sujet | Gate |
|-------|------|
| Promotion canonical | Morris explicite par sujet |
| Archivage physique v3.0 | GO lot C |
| Déplacements D10 | GO lot B |
| Renommages massifs D12 | GO lot D |
| Suppressions futures | GO Morris par fichier |
| Ouverture lots migration | GO Morris distinct par lot |

---

## 19. Limites de confiance

Qualification automatisée avec heuristiques path + échantillon contenu. Les fichiers code (F17) et assets ont une confiance authority/usage plus faible. Revue manuelle recommandée pour gates `yes` et disposition `investigate`.

---

## 20. Confirmation hors périmètre

| Élément | Statut |
|---------|--------|
| Fichiers existants modifiés | **Aucun** |
| Migration exécutée | **Non** |
| Archivage v3 physique | **Non** |
| G3 exécution | **Non** |
| SFIA v2.6 promue baseline | **Non** |

---

## Annexe A — Contrôles d'exhaustivité

| Contrôle | Résultat |
|----------|----------|
| git ls-files | 1045 |
| Lignes CSV données | 1045 |
| Chemins uniques | 1045 |
| Doublons current_path | 0 |
| lifecycle active | 0 |
| scope product | 0 |
| Fichiers untracked inclus | 0 |

---

*Cartographie candidate SFIA v2.6 — read-only — recommandations non exécutables sans GO Morris par lot.*


---

## Contenu complet — Migration Lots Plan

# SFIA v2.6 — Repository Migration Lots Plan

*Plan de mise en conformité par lots — dérivé de la cartographie read-only*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
**Date et heure :** 2026-07-11 14:43 Europe/Paris
**Statut :** **Candidate** — planification — aucune exécution
**Cycle projet :** Cadrage et audit repository — cartographie exhaustive et planification
**Profil SFIA :** **Critical**
**Repository :** mcleland147/sfia-workspace
**Branche :** audit/sfia-v2.6-repository-cartography
**Base Git :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**Source cartographie :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (1045 fichiers)
**Autorité :** Morris (L0)

### Limites

- Plan **dérivé de la cartographie réelle** — non prédéfini
- **Aucun lot autorisé à démarrer** sans GO Morris distinct
- Aucune action physique dans ce cycle

---

## 1. Executive summary

Dix lots proposés (A–J), ordonnés par dépendances. Volume total : **1045 fichiers** cartographiés. Priorité recommandée : **Lot C (v3)** et **Lot A (canonical)** avant renommages massifs **Lot D**.

| Lot | Fichiers | Action dominante | Gate |
|-----|----------|------------------|------|
| A | 9 | Canonical / core / gouvernance | Critical — Morris |
| B | 10 | Emplacements D10 | Critical — Morris |
| C | 23 | Archivage SFIA v3.0 | Critical — Morris |
| D | 319 | Nommage D12 | Standard — Morris |
| E | 173 | Liens / README / index | Standard |
| F | 0* | Doublons / superseded | Morris si fusion |
| G | 435 | Documents projets | Project-scoped |
| H | 45 | Prompts / templates | Standard |
| I | 31 | Tooling / CI | Standard |
| J | 0* | Suppressions candidates | Critical — Morris |

*Lot F/J : aucun fichier exclusivement tagué merge-candidate/delete-candidate dans cette cartographie — surveillance lors exécution lots antérieurs.

---

## 2. Lot A — Canonical, core et gouvernance

| Champ | Contenu |
|-------|---------|
| **Objectif** | Stabiliser autorité canonical D4 ; valider core SFIA v2.4 |
| **Fichiers** | 9 (`migration_lot_candidate: lot-A`) |
| **Volume** | Faible — impact structurant maximal |
| **Actions proposées** | Valider canonical unique ; documenter remplaçants ; pas de déplacement sans gate |
| **Dépendances** | Aucune amont ; bloque promotions canonical ailleurs |
| **Ordre** | **1** |
| **Risques** | Confusion baseline v2.4 vs candidate v2.6 |
| **Fichiers protégés** | `method/sfia-fast-track/core/*` |
| **Tests** | Vérifier références entrantes core ; liens prompts |
| **Rollback** | Git revert PR lot |
| **Gate Morris** | **GO Critical obligatoire** |
| **Review pack** | full |
| **PR envisagée** | `migration/lot-a-canonical-core` |
| **Critères entrée** | Merge cartographie PR ; D4 validé en revue |
| **Critères sortie** | Un canonical actif par sujet ; conflits résolus ou tracés |
| **Réserves** | 4 conflits canonical candidats à arbitrer |

---

## 3. Lot B — Emplacements D10 (docs/ vs method/documentation)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Corriger non-conformités emplacement D10 |
| **Fichiers** | 10 (+ 24 non-compliant partagés avec autres lots) |
| **Volume** | Faible à moyen |
| **Actions proposées** | `move` / `rename-and-move` vers `method/.../documentation/` ou `docs/` selon fonction |
| **Dépendances** | Lot A (canonical refs) ; avant Lot D si chemin change |
| **Ordre** | **2** |
| **Risques** | Liens cassés ; README obsolètes |
| **Fichiers protégés** | Core docs |
| **Tests** | Scan liens relatifs ; grep références chemins |
| **Rollback** | git revert ; restore links |
| **Gate Morris** | **GO Critical** |
| **Review pack** | full |
| **PR envisagée** | `migration/lot-b-d10-locations` |
| **Critères entrée** | Liste chemins source→cible validée |
| **Critères sortie** | 0 non-compliant D10 restant |
| **Réserves** | 10 emplacements `ambiguous` — revue manuelle |

**Cas types :** `docs/tooling/mcp/sfia-3-*` → archive v3 sous method ; docs SFIA gouvernance → method/documentation.

---

## 4. Lot C — Archivage SFIA v3.0 (D11)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Regrouper artefacts v3.0 en zone archive gouvernée |
| **Fichiers** | 23 trajectory v3.0 ; 61 disposition `archive` |
| **Volume** | Moyen |
| **Actions proposées** | `git mv` vers `method/.../documentation/archive/sfia-v3/` ; lifecycle archived ; trajectory_role archived |
| **Dépendances** | Lot B (chemins MCP) ; avant suppression |
| **Ordre** | **3** |
| **Risques** | Références opérationnelles résiduelles ; MCP mentions |
| **Fichiers protégés** | Aucun v3 réactivé |
| **Tests** | grep v3/MCP/Bridge/Runner ; vérifier prompts |
| **Rollback** | revert PR |
| **Gate Morris** | **GO Critical** |
| **Review pack** | full |
| **PR envisagée** | `migration/lot-c-v3-archive` |
| **Critères entrée** | Périmètre v3 validé ; dépendances listées |
| **Critères sortie** | v3.0 hors trajectoires actives ; zone archive cohérente |
| **Réserves** | Suppressions éventuelles = lot J ultérieur |

**Interdit :** réactivation MCP, Bridge, Runner, `.sfia`.

---

## 5. Lot D — Nommage et chemins (D12)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Aligner nommage kebab-case EN ; dates événementielles |
| **Fichiers** | 319 |
| **Volume** | **Élevé** |
| **Actions proposées** | `rename` ; mise à jour liens dans même PR ou Lot E |
| **Dépendances** | Lots A–C stabilisés ; chemins finaux connus |
| **Ordre** | **4** |
| **Risques** | **326** non-conformités — liens cassés massifs si sans Lot E |
| **Fichiers protégés** | Core stables (pas date forcée) |
| **Tests** | Lien checker ; diff stat |
| **Rollback** | revert par sous-lot |
| **Gate Morris** | **GO Standard** — sous-lots recommandés |
| **Review pack** | full par sous-lot |
| **PR envisagée** | `migration/lot-d-naming-*` (plusieurs PR) |
| **Critères entrée** | Liste rename validée ; refs entrantes identifiées |
| **Critères sortie** | 0 non-compliant naming sur périmètre lot |
| **Réserves** | Exécuter par sous-lots ≤50 fichiers |

---

## 6. Lot E — Liens, README et index

| Champ | Contenu |
|-------|---------|
| **Objectif** | Mettre à jour liens, README, index après lots B–D |
| **Fichiers** | 173 |
| **Volume** | Moyen |
| **Actions proposées** | `update` contenu uniquement — pas restructuration |
| **Dépendances** | Lots B, C, D |
| **Ordre** | **5** |
| **Risques** | Liens cassés audit PR #162 (~23) |
| **Gate Morris** | GO Standard |
| **PR envisagée** | `migration/lot-e-links-readme` |

---

## 7. Lot F — Doublons, superseded, fusion candidates

| Champ | Contenu |
|-------|---------|
| **Objectif** | Traiter chevauchements et superseded sans fusion automatique |
| **Fichiers** | 0 exclusifs — surveillance continue |
| **Actions proposées** | `merge-candidate` uniquement après analyse Morris |
| **Gate Morris** | **GO Critical** par fusion |
| **Ordre** | **6** — après E |
| **Réserves** | 4 conflits canonical ; workspace-audit vs capitalization |

---

## 8. Lot G — Documents projets

| Champ | Contenu |
|-------|---------|
| **Objectif** | Conformité périmètre project (688 fichiers scope project) |
| **Fichiers** | 435 |
| **Volume** | **Très élevé** — majoritairement F08/F17 |
| **Actions proposées** | rename ciblé ; keep si conforme |
| **Dépendances** | Lots D/E partiels par projet |
| **Ordre** | **7** — par projet (`chantiers360-v2`, `interv360`, etc.) |
| **Gate Morris** | GO par projet |
| **PR envisagée** | `migration/lot-g-project-{name}` |

---

## 9. Lot H — Prompts, templates, checklists

| Champ | Contenu |
|-------|---------|
| **Objectif** | Aligner prompts/templates avec trajectoire v2.4 baseline |
| **Fichiers** | 45 |
| **Actions proposées** | rename ; retirer refs v3 ; update refs core |
| **Dépendances** | Lot C (v3 prompts) |
| **Ordre** | **8** |
| **Gate Morris** | GO Standard |

---

## 10. Lot I — Tooling et artefacts techniques

| Champ | Contenu |
|-------|---------|
| **Objectif** | Conformité F15/F16 ; CI, Docker, tools |
| **Fichiers** | 31 |
| **Actions proposées** | keep / investigate |
| **Ordre** | **9** |
| **Gate Morris** | GO Standard |

---

## 11. Lot J — Suppressions candidates finales

| Champ | Contenu |
|-------|---------|
| **Objectif** | Supprimer fichiers sans valeur après vérification dépendances |
| **Fichiers** | 0 identifiés initialement — réévaluation post-lots C, G |
| **Actions proposées** | `delete-candidate` → suppression après GO Morris |
| **Ordre** | **10** — dernier |
| **Gate Morris** | **GO Critical par fichier** |
| **Réserves** | Aucune suppression sans preuve dépendances vides |

---

## 12. Séquence globale recommandée

```text
Cartographie merge (PR actuelle)
  → GO Morris Lot A (canonical)
  → GO Morris Lot B (D10)
  → GO Morris Lot C (v3 archive)
  → GO Morris Lot D sous-lots (naming)
  → GO Morris Lot E (links)
  → GO Morris Lot F si needed
  → GO Morris Lot G par projet
  → GO Morris Lot H, I
  → GO Morris Lot J (suppressions)
```

---

## 13. Distinction types de lots

| Type | Lots |
|------|------|
| Read-only complémentaire | Cartographie (ce cycle) |
| Mise à jour documentaire | E |
| Renommage / déplacement | B, C, D, G |
| Archivage | C |
| Suppressions | J |
| Critical gate | A, B, C, J |

---

## 14. Confirmation

| Élément | Statut |
|---------|--------|
| Plan dérivé cartographie CSV | **Oui** |
| Lots exécutés | **Aucun** |
| GO Morris lots | **Non accordés** |
| SFIA v2.6 | **Candidate** |

---

*Plan candidate — aucune migration sans GO Morris par lot.*


---

## Useful Diff

```diff
+ method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv (new, 1045 data rows)
+ method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md (new)
+ method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md (new)
```

**modified sections complete :** n/a
**useful diff included :** yes

---

## Git Review Index

| Item | Value |
|------|-------|
| Branch | audit/sfia-v2.6-repository-cartography |
| Base | main @ 072058a |
| Commit | 33eb067d1bb3758ed4c49ec038a31ff6b5c3331b |
| Commit message | docs: map repository for sfia v2.6 compliance |
| PR | #165 (not merged) |
| Files added | 3 |
| Files modified | 0 |

---

## Review Pack Coverage

| Artifact | Full content |
|----------|-------------|
| cartography.md | yes |
| migration-lots-plan.md | yes |
| cartography.csv | large artifact protocol (hash + first/last 20 + stats) |
| modified sections | n/a |
| useful diff | yes |
| synthesis only | no |

---

## Verdict

**REPOSITORY INVENTORY COMPLETE**
**ALL TRACKED FILES MAPPED**
**D1-D12 QUALIFICATION COMPLETE**
**CANONICAL CONFLICTS IDENTIFIED**
**D10 LOCATION CASES IDENTIFIED**
**SFIA V3 ARCHIVE SCOPE IDENTIFIED**
**CURRENT REPOSITORY NAMING GAPS IDENTIFIED**
**LINKS AND DEPENDENCIES MAPPED**
**FILE DISPOSITIONS PROPOSED**
**MIGRATION LOTS PLANNED**
**MORRIS GATES IDENTIFIED**
**NO EXISTING FILE MODIFIED**
**NO PHYSICAL MIGRATION EXECUTED**
**CARTOGRAPHY PR OPEN (#165)**
**PR NOT MERGED**
**REVIEW PACK COMPLETE**
**READY FOR CHATGPT CARTOGRAPHY REVIEW**
**SFIA v2.4 REMAINS BASELINE**
**SFIA v2.6 REMAINS CANDIDATE**

**review pack verdict : complete**
