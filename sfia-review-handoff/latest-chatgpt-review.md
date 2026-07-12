# SFIA Review Pack — Lot E Qualification (Corrected)

**Date/heure :** 2026-07-12 20:15 Europe/Paris
**Cycle :** Correction qualification Lot E — métriques et sous-lots disjoints
**Profil :** Standard
**Décision Morris :** GO explicite correction qualification Lot E
**Base Git :** `main` @ `688ab7fb4a74844969a794f80065c9761fdf3893`
**Branche :** `qualification/sfia-v2.6-lot-e-global-controls`
**Ancien HEAD :** `de48503d7af4b8c021cfe13a914056ffa91a2144`
**Nouveau HEAD :** `b87413b54858af0740b3d1e37c7e3fee63aca726`
**PR :** https://github.com/mcleland147/sfia-workspace/pull/180

## synthesis only

**no**

## Métriques avant correction (incohérences corrigées)

| Métrique | Avant (erroné) | Après (vérité retenue) |
|----------|----------------|------------------------|
| operational / non-operational | 15 / 60 | **19 / 56** |
| authority informational | 55 | **35** (+ supporting **20**) |
| Lot I path overlap | ~15 | **5** |
| Sous-lots | E1/E2/E3 chevauchants | **E1a (6) + E1b (25) disjoints** |
| historical-keep | E3 exécution | **hors exécution corrective** |

**Vérité retenue :** rapport complet + manifeste JSON `.tmp-sfia-review/lot-e-manifest.json` + agrégats CSV.

## Métriques après correction (référence unique)

- manifeste **75/75** ; README **20** ; index **0** ; other **55**
- no-action **42** ; fix-links **31** ; historical-keep **2**
- liens **486** / valides **290** / cassés **196** ; old Lot D **10** ; entrantes **123**
- operational **19** ; non-operational **56**
- authority reference **20** ; informational **35** ; supporting **20**
- Lot G **0** ; Lot H **0** ; Lot I path **5** ; Lot J **0**
- **E1a 6** + **E1b 25** = **31** ; disjoint **yes**

## Rapport de qualification — contenu complet (corrigé)

# SFIA v2.6 — Lot E Global Controls — Qualification

**Horodatage :** 2026-07-12 20:15 Europe/Paris (correction métriques et sous-lots — commit correctif)
**Cycle :** QA documentaire / qualification Lot E — contrôles globaux README/index
**Profil :** Standard
**Décision Morris :** GO explicite — qualification Lot E read-only — **aucune exécution corrective**
**Branche :** `qualification/sfia-v2.6-lot-e-global-controls`
**Base Git :** `main` @ `688ab7fb4a74844969a794f80065c9761fdf3893`
**CSV SHA-256 :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged**

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Repository | `/Users/morris/Projects/sfia-workspace` |
| Base | `main` @ `688ab7fb4a74844969a794f80065c9761fdf3893` — PR #179 intégrée |
| Lot D | closed 149/149 |
| Lots E–J | not opened (pre-qualification) |
| Worktree tracked | propre — corpus Lot E non modifié |

## 2. Sources consultées

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. CSV cartography frozen (SHA ci-dessus)
6. `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md` §8
7. Rapports Lots 0, A, C, D1/D2/D3 execution
8. Manifestes rename D1/D2/D3 (`.tmp-sfia-review/`)
9. Analyse read-only des 75 fichiers tagués `lot-E`

## 3. Méthodologie

- Extraction CSV `migration_lot_candidate=lot-E` — volume attendu **75**
- Vérification présence Git pour chaque chemin
- Typologie : **README** (basename `README.md`), **index** (basename contient `index`), **other**
- Parse Markdown `[text](url)` et chemins backtick internes
- Résolution chemins relatifs vs racine repository
- Détection liens cassés, cibles Lot D renommées (carte 172 renames D1+D2+D3)
- Classification unique par fichier (9 catégories)
- **Aucune modification** du corpus Lot E ni consommateurs

## 4. Manifeste Lot E (75/75)

| Contrôle | Résultat |
|----------|----------|
| Volume CSV Lot E | **75** |
| Manifeste | **75/75** |
| Doublons | **0** |
| Absents Git | **0** |
| Fichiers hors CSV ajoutés | **0** |

## 5. Typologie fichiers

| Type | Count |
|------|------:|
| README | 20 |
| index | 0 |
| other (navigation / hub / checklist / standard index-like) | 55 |

**Note :** aucun basename `*index*` dans le tag CSV Lot E ; les hubs de navigation non-README sont classés **other** (matrices, checklists, standards à rôle index).

## 6. Classifications (somme = 75)

| Classification | Count | Description |
|----------------|------:|-------------|
| **no-action** | 42 | Liens actifs valides — navigation OK |
| **fix-links** | 31 | Liens internes cassés — correction mécanique bornée |
| **refresh-index** | 0 | Index incomplet / obsolète |
| **historical-keep** | 2 | Références historiques intentionnelles |
| **route-lot-g** | 0 | Dépendance restructuration projet |
| **route-lot-h** | 0 | Dépendance prompts/templates |
| **route-lot-i** | 0 | Dépendance tooling/CI |
| **investigate** | 0 | Ambiguïté autorité / intention |
| **morris-gate** | 0 | Arbitrage structurant requis |

## 7. Métriques liens

| Métrique | Valeur |
|----------|--------|
| Liens sortants analysés | **486** |
| Liens internes valides | **290** |
| Liens internes cassés | **196** |
| Ancres locales cassées | **0** |
| Références anciens chemins Lot D | **10** |
| Liens externes | **0** (non comptabilisés séparément — liens http/https absents du parse) |
| Références entrantes (CSV) | **123** |

### Top 10 — liens cassés

| Chemin | Cassés | Classification |
|--------|-------:|----------------|
| `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` | 19 | fix-links |
| `docs/tooling/penpot/penpot-sfia-method-integration.md` | 12 | fix-links |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` | 12 | fix-links |
| `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` | 12 | fix-links |
| `docs/practices/ux-ui/ux-ui-reprise-checklist.md` | 9 | fix-links |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` | 9 | fix-links |
| `docs/practices/architecture/functional-architecture-checklist.md` | 8 | fix-links |
| `docs/practices/architecture/functional-architecture-deliverables-standard.md` | 8 | fix-links |
| `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | 8 | fix-links |
| `docs/practices/ux-ui/ux-ui-reprise-method.md` | 8 | fix-links |

## 8. Autorité / lifecycle / usage (CSV)

| Authority | Count |
|-----------|------:|
| informational | 35 |
| reference | 20 |
| supporting | 20 |

| Usage | Count |
|-------|------:|
| non-operational | 56 |
| operational | 19 |

| Lifecycle | Count |
|-----------|------:|
| candidate | 26 |
| draft | 23 |
| not-applicable | 13 |
| validated | 11 |
| archived | 2 |

| Risk (CSV) | Count |
|------------|------:|
| low | 75 |

| Operational (usage) | **19** |
| Non-operational | **56** |

## 9. Répartition familiale (CSV primary_family)

| Famille | Count |
|---------|------:|
| F06 | 30 |
| F13 | 20 |
| F17 | 15 |
| F09 | 7 |
| F01 | 3 |

## 10. Chevauchements Lots G / H / I / J (heuristique chemins)

| Lot | Fichiers Lot E dans périmètre path | Note |
|-----|-----------------------------------:|------|
| Lot G (projects/) | **0** | Aucun fichier Lot E tagué sous `projects/` |
| Lot H (prompts/) | **0** | Aucun fichier Lot E tagué sous `prompts/` |
| Lot I (tools/CI/docker/.cursor) | **5** | `.cursor/mcp-templates/` (2), `docker/penpot/` (3) — qualifiés Lot E pour corrections link-only ; aucune reclassification CSV ; aucune modification structurelle tooling/CI |
| Lot J | **0** | Aucun delete-candidate dans Lot E |

**Réserve :** plusieurs fichiers Lot E sont des standards/checklists `docs/practices/` ou `method/` — corrections link-only restent en Lot E ; restructuration éventuelle = Lots G/H/I futurs.

## 11. Proposition sous-lots d'exécution disjoints (non approuvés)

Les sous-lots correctifs couvrent **uniquement** les **31** fichiers `fix-links`. Les **42** `no-action` et **2** `historical-keep` restent **hors exécution corrective**.

### E1a — README hubs (6)

| # | Chemin |
|---|--------|
| 1 | `.cursor/mcp-templates/README.md` |
| 2 | `README.md` |
| 3 | `docker/penpot/README.md` |
| 4 | `docs/architecture/README.md` |
| 5 | `docs/templates/tooling/penpot/README.md` |
| 6 | `method/complementary/controlled-delivery/README.md` |

**Profil :** Standard — corrections mécaniques de liens et navigation README.

### E1b — autres corrections mécaniques (25)

| # | Chemin |
|---|--------|
| 1 | `docs/architecture/sfia-delivery-pipeline.md` |
| 2 | `docs/practices/architecture/functional-architecture-checklist.md` |
| 3 | `docs/practices/architecture/functional-architecture-deliverables-standard.md` |
| 4 | `docs/practices/process/bpmn-deliverables-standard.md` |
| 5 | `docs/practices/process/bpmn-integration-checklist.md` |
| 6 | `docs/practices/process/bpmn-process-modeling-method.md` |
| 7 | `docs/practices/roles/qa-tester-method.md` |
| 8 | `docs/practices/ux-ui/ux-ui-reprise-checklist.md` |
| 9 | `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` |
| 10 | `docs/practices/ux-ui/ux-ui-reprise-method.md` |
| 11 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` |
| 12 | `docs/tooling/penpot/penpot-cursor-agent-rules.md` |
| 13 | `docs/tooling/penpot/penpot-design-agent-architecture.md` |
| 14 | `docs/tooling/penpot/penpot-self-host-docker-guide.md` |
| 15 | `docs/tooling/penpot/penpot-sfia-method-integration.md` |
| 16 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` |
| 17 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` |
| 18 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` |
| 19 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` |
| 20 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` |
| 21 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` |
| 22 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` |
| 23 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` |
| 24 | `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` |
| 25 | `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` |

**Profil :** Standard — réparation mécanique liens cassés hors README hubs.

**Contrôles disjoints :** E1a ∩ E1b = **∅** ; E1a + E1b = **31** ; ≤50 fichiers/PR respecté.

### historical-keep — hors exécution corrective (2)

| Chemin | Recommandation |
|--------|----------------|
| `docs/foundation/README.md` | Préservation — navigation historique |
| `method/sfia-fast-track/archive/interv360-realization/README.md` | Préservation — archive read-only |

**Aucun sous-lot E3 d'exécution.** Toute remise en cause future nécessite une décision Morris distincte.

### Options d'exécution (décision Morris requise)

| Option | Description |
|--------|-------------|
| **A** | Une PR **E1** unique — **31** fichiers (E1a + E1b) |
| **B** | Deux PR disjointes — **E1a** (6) puis **E1b** (25) |

**Ordre recommandé (option B) :** E1a → E1b

**Recommandation Cursor :** option **A** acceptable (31 ≤ 50) ; option **B** préférable si isolation README hubs souhaitée — **décision finale Morris requise**.

## 12. Gates Morris attendues

1. Validation du découpage disjoint E1a / E1b (ou fusion E1 unique)
2. GO exécution Lot E — **séparé** par option A ou B
3. Merge PR qualification — GO séparé
4. `historical-keep` — préservation confirmée ; pas d'exécution corrective sans GO distinct

## 13. Classification complète (75/75)

| ID | Chemin | Type | Famille | Usage | Authority | Lifecycle | Cassés | Old D | Entrantes | Classification | Risque | Recommandation |
|----|--------|------|---------|-------|-----------|-----------|-------:|------:|----------:|----------------|--------|----------------|
| E-001 | `.cursor/mcp-templates/README.md` | README | F13 | non-operational | reference | candidate | 4 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-002 | `.cursor/mcp-templates/penpot-mcp.example.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 3 | **no-action** | low | No corrective action — navigation valid |
| E-003 | `.gitignore` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-004 | `README.md` | README | F13 | non-operational | reference | candidate | 1 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-005 | `components/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-006 | `docker/penpot/.env.example` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-007 | `docker/penpot/README.md` | README | F13 | operational | reference | candidate | 3 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-008 | `docker/penpot/docker-compose.override.example.yml` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-009 | `docs/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-010 | `docs/adr/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-011 | `docs/architecture/README.md` | README | F13 | non-operational | reference | candidate | 1 | 1 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-012 | `docs/architecture/sfia-delivery-pipeline.md` | other | F06 | non-operational | supporting | validated | 1 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-013 | `docs/architecture/sfia-domain-model.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-014 | `docs/architecture/sfia-meta-model.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-015 | `docs/architecture/sfia-platform-architecture.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-016 | `docs/architecture/sfia-repository-blueprint.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-017 | `docs/foundation/README.md` | README | F13 | non-operational | reference | archived | 0 | 0 | 0 | **historical-keep** | low | Preserve historical navigation — no Lot E correction |
| E-018 | `docs/foundation/sfia-engineering-principles.md` | other | F06 | operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-019 | `docs/knowledge/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-020 | `docs/practices/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-021 | `docs/practices/architecture/functional-architecture-checklist.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-022 | `docs/practices/architecture/functional-architecture-deliverables-standard.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-023 | `docs/practices/architecture/functional-architecture-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 2 | **no-action** | low | No corrective action — navigation valid |
| E-024 | `docs/practices/methods-structure-check.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-025 | `docs/practices/process/bpmn-deliverables-standard.md` | other | F06 | non-operational | supporting | candidate | 4 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-026 | `docs/practices/process/bpmn-integration-checklist.md` | other | F06 | non-operational | informational | draft | 3 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-027 | `docs/practices/process/bpmn-process-modeling-method.md` | other | F06 | non-operational | supporting | candidate | 2 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-028 | `docs/practices/roles/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-029 | `docs/practices/roles/architect-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-030 | `docs/practices/roles/business-analyst-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-031 | `docs/practices/roles/product-owner-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-032 | `docs/practices/roles/project-manager-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-033 | `docs/practices/roles/qa-tester-method.md` | other | F06 | non-operational | supporting | validated | 4 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-034 | `docs/practices/roles/rssi-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-035 | `docs/practices/roles/ux-ui-designer-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-036 | `docs/practices/ux-ui/ux-ui-reprise-checklist.md` | other | F06 | non-operational | informational | draft | 9 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-037 | `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-038 | `docs/practices/ux-ui/ux-ui-reprise-method.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-039 | `docs/rex/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-040 | `docs/roadmaps/cmp-technical-roadmap.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-041 | `docs/standards/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-042 | `docs/standards/ux-ui-v1-governance-standard.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-043 | `docs/templates/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-044 | `docs/templates/tooling/penpot/README.md` | README | F13 | operational | reference | candidate | 5 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-045 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | other | F06 | non-operational | informational | draft | 6 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-046 | `docs/tooling/penpot/penpot-cursor-agent-rules.md` | other | F06 | operational | informational | draft | 5 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-047 | `docs/tooling/penpot/penpot-design-agent-architecture.md` | other | F06 | operational | informational | draft | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-048 | `docs/tooling/penpot/penpot-self-host-docker-guide.md` | other | F06 | operational | informational | draft | 2 | 0 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-049 | `docs/tooling/penpot/penpot-sfia-method-integration.md` | other | F06 | operational | informational | draft | 12 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-050 | `exports/notion/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-051 | `exports/notion/adr.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-052 | `exports/notion/components.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-053 | `exports/notion/experiments.json` | other | F17 | operational | informational | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-054 | `exports/notion/export-manifest.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-055 | `exports/notion/knowledge.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-056 | `exports/notion/kpi.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-057 | `exports/notion/projects.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-058 | `exports/notion/prompts.json` | other | F17 | non-operational | informational | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-059 | `exports/notion/rex.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-060 | `exports/notion/standards.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-061 | `exports/notion/templates.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-062 | `method/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
| E-063 | `method/complementary/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
| E-064 | `method/complementary/controlled-delivery/README.md` | README | F13 | non-operational | reference | candidate | 8 | 3 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-065 | `method/sfia-fast-track/archive/interv360-realization/README.md` | README | F13 | non-operational | reference | archived | 0 | 0 | 0 | **historical-keep** | low | Preserve historical navigation — no Lot E correction |
| E-066 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` | other | F09 | non-operational | supporting | validated | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-067 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` | other | F09 | non-operational | supporting | candidate | 2 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-068 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` | other | F09 | non-operational | supporting | candidate | 4 | 1 | 10 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-069 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` | other | F09 | operational | supporting | draft | 12 | 1 | 9 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-070 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` | other | F09 | operational | supporting | draft | 6 | 1 | 7 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-071 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` | other | F09 | operational | supporting | draft | 9 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-072 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` | other | F09 | non-operational | supporting | candidate | 6 | 0 | 7 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-073 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` | other | F01 | non-operational | supporting | candidate | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-074 | `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` | other | F01 | non-operational | supporting | candidate | 19 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
| E-075 | `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` | other | F01 | non-operational | supporting | candidate | 12 | 0 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |

## 14. Garde-fous

| Contrôle | Résultat |
|----------|----------|
| Corpus Lot E modifié | **0** fichier |
| CSV in diff | **no** |
| Doctrine changed | **no** |
| Canonical changed | **no** |
| Lots F–J opened | **no** |
| Exécution Lot E | **not authorized** |

## 15. Limites

- Parse Markdown uniquement — JSON example sans liens markdown non audités en profondeur
- Liens externes http(s) non vérifiés en ligne
- Glob patterns ignorés
- Certains liens cassés = chemins relatifs incorrects depuis sous-répertoires (ex. `.cursor/mcp-templates/README.md` → `../docs/...`)

## 16. Réserves

- Volume Lot E inclut fichiers non-README (`.gitignore`, `.json` example) — conforme CSV frozen, rôle navigation/tooling
- Forte concentration liens cassés sur inventaires Notion et intégration Penpot
- 10 références anciens chemins Lot D résiduelles — mécaniquement corrigeables en E1a/E1b
- Les 5 fichiers périmètre path Lot I restent qualifiés Lot E pour link-only — pas de reclassification CSV
- Aucun fichier classé `route-lot-g/h/i` — chevauchements path-only qualifiés

## 17. Décisions Morris attendues

- Valider manifeste 75/75 et classifications
- Approuver découpage disjoint E1a (6) / E1b (25) ou option E1 unique (31)
- Confirmer `historical-keep` (2) hors exécution corrective
- GO exécution Lot E — **séparé**
- Merge PR qualification — **séparé**
- Routing Lots F–J — **non couvert**

## 18. Verdict

```
LOT E QUALIFICATION COMPLETED
LOT E QUALIFICATION CORRECTED
LOT E MANIFEST VERIFIED 75/75
METRICS CONSISTENT
README AND INDEX CONTROLS COMPLETED
ALL FILES CLASSIFIED
BROKEN LINKS QUALIFIED
HISTORICAL REFERENCES QUALIFIED
CROSS-LOT DEPENDENCIES IDENTIFIED
EXECUTION SUBLOTS PROPOSED E1A/E1B DISJOINT
HISTORICAL-KEEP EXCLUDED FROM CORRECTIVE EXECUTION
LOT E CORPUS UNCHANGED
CSV UNCHANGED
NO DOCTRINE CHANGE
CANONICAL AUTHORITY UNCHANGED
LOTS F–J NOT OPENED
QUALIFICATION PR OPEN — NOT MERGED
LOT E EXECUTION REQUIRES SEPARATE MORRIS GO
MERGE REQUIRES SEPARATE MORRIS GO
```


## Plan de migration — section Lot E (complète)

```markdown
## 8. Lot E — Contrôles globaux

| Champ | Contenu |
|-------|---------|
| **Volume tag CSV** | **75** |
| **Rôle** | README/index résiduels post-lots de chemins |
| **Qualification** | **completed on branch** `qualification/sfia-v2.6-lot-e-global-controls` — **PR ouverte, non mergée** |
| **Manifeste** | **75/75** vérifié — CSV frozen inchangé |
| **Rapport qualification** | `2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md` |
| **Classifications** | no-action **42** ; fix-links **31** ; historical-keep **2** ; refresh-index **0** ; route-lot-g/h/i **0** ; investigate **0** ; morris-gate **0** |
| **Usage (CSV)** | operational **19** ; non-operational **56** |
| **Authority (CSV)** | reference **20** ; informational **35** ; supporting **20** |
| **Chevauchement path Lot I** | **5** — link-only Lot E |
| **Liens cassés qualifiés** | **196** internes / **10** anciens chemins Lot D |
| **Sous-lots proposés disjoints (non approuvés)** | **E1a** README hubs (**6**) ; **E1b** autres fix-links (**25**) ; E1a+E1b=**31** |
| **historical-keep** | **2** — hors exécution corrective |
| **Options exécution** | **A** PR E1 unique (31) ; **B** E1a (6) puis E1b (25) — décision Morris requise |
| **Statut exécution** | **not started** |
| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |

## 9. Lot F — Doublons / superseded

```

## Diff commit correctif (de48503..b87413b)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 2e55b07..82cfbb1 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -95,7 +95,7 @@ Cartographie finale (PR #165)
 | **Rapport exécution M0-DEC-008** | `2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md` |
 | **Rapport exécution completion** | `2026-07-12-sfia-v2.6-lot-0-archive-completion-execution.md` |
 | **Migration exécutée (autres lots)** | **non** |
-| **Next gate** | Lot E qualification merge + Morris validation of E1/E2/E3 — separate GO required |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 | **Lot A** | **closed** — merged via PR #169 |
 | **Volume Lot A** | **6** fichiers core reference |
 | **Canonical promotion Lot A** | **none** |
@@ -190,7 +190,7 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **D1 renames** | **50/50** `git mv` — refs directes corrigées |
 | **Rapport exécution D1** | `2026-07-12-sfia-v2.6-lot-d1-naming-execution.md` |
 | **Qualification merge** | **completed via PR #172** — D1 execution merged via PR #174 — D2 execution merged via PR #176 — D3 execution merged via PR #178 |
-| **Next gate** | Lot E qualification merge + Morris validation of E1/E2/E3 — separate GO required |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 
 ---
 
@@ -204,10 +204,15 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **Manifeste** | **75/75** vérifié — CSV frozen inchangé |
 | **Rapport qualification** | `2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md` |
 | **Classifications** | no-action **42** ; fix-links **31** ; historical-keep **2** ; refresh-index **0** ; route-lot-g/h/i **0** ; investigate **0** ; morris-gate **0** |
+| **Usage (CSV)** | operational **19** ; non-operational **56** |
+| **Authority (CSV)** | reference **20** ; informational **35** ; supporting **20** |
+| **Chevauchement path Lot I** | **5** — link-only Lot E |
 | **Liens cassés qualifiés** | **196** internes / **10** anciens chemins Lot D |
-| **Sous-lots proposés (non approuvés)** | **E1** fix-links (31) ; **E2** README refresh (6) ; **E3** historical-keep (2) |
+| **Sous-lots proposés disjoints (non approuvés)** | **E1a** README hubs (**6**) ; **E1b** autres fix-links (**25**) ; E1a+E1b=**31** |
+| **historical-keep** | **2** — hors exécution corrective |
+| **Options exécution** | **A** PR E1 unique (31) ; **B** E1a (6) puis E1b (25) — décision Morris requise |
 | **Statut exécution** | **not started** |
-| **Next gate** | Lot E qualification merge + Morris validation of E1/E2/E3 — separate GO required |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 
 ## 9. Lot F — Doublons / superseded
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md
index 59098ad..7dba669 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md
@@ -1,6 +1,6 @@
 # SFIA v2.6 — Lot E Global Controls — Qualification
 
-**Horodatage :** 2026-07-12 20:00 Europe/Paris
+**Horodatage :** 2026-07-12 20:15 Europe/Paris (correction métriques et sous-lots — commit correctif)
 **Cycle :** QA documentaire / qualification Lot E — contrôles globaux README/index
 **Profil :** Standard
 **Décision Morris :** GO explicite — qualification Lot E read-only — **aucune exécution corrective**
@@ -148,29 +148,88 @@
 |-----|-----------------------------------:|------|
 | Lot G (projects/) | **0** | Aucun fichier Lot E tagué sous `projects/` |
 | Lot H (prompts/) | **0** | Aucun fichier Lot E tagué sous `prompts/` |
-| Lot I (tools/CI/docker/.cursor) | **5** | Sous-ensemble tooling — corrections link-only possibles en Lot E |
+| Lot I (tools/CI/docker/.cursor) | **5** | `.cursor/mcp-templates/` (2), `docker/penpot/` (3) — qualifiés Lot E pour corrections link-only ; aucune reclassification CSV ; aucune modification structurelle tooling/CI |
 | Lot J | **0** | Aucun delete-candidate dans Lot E |
 
 **Réserve :** plusieurs fichiers Lot E sont des standards/checklists `docs/practices/` ou `method/` — corrections link-only restent en Lot E ; restructuration éventuelle = Lots G/H/I futurs.
 
-## 11. Proposition sous-lots d'exécution (non approuvés)
-
-| Sous-lot | Volume | Profil recommandé | Périmètre |
-|----------|-------:|-------------------|-----------|
-| **E1** | **31** | **Standard** | `fix-links` — réparation mécanique liens cassés |
-| **E2** | **6** | **Standard** | README hubs (sous-ensemble E1) — refresh navigation |
-| **E3** | **2** | **Light** | `historical-keep` — archive interv360-realization + foundation README |
-
-**Ordre recommandé :** E1 → E2 → E3 (E2 peut fusionner avec E1 si PR ≤50 fichiers).
-
-**Contrainte :** ≤50 fichiers modifiés par PR — E1 seul (31) respecte la borne.
+## 11. Proposition sous-lots d'exécution disjoints (non approuvés)
+
+Les sous-lots correctifs couvrent **uniquement** les **31** fichiers `fix-links`. Les **42** `no-action` et **2** `historical-keep` restent **hors exécution corrective**.
+
+### E1a — README hubs (6)
+
+| # | Chemin |
+|---|--------|
+| 1 | `.cursor/mcp-templates/README.md` |
+| 2 | `README.md` |
+| 3 | `docker/penpot/README.md` |
+| 4 | `docs/architecture/README.md` |
+| 5 | `docs/templates/tooling/penpot/README.md` |
+| 6 | `method/complementary/controlled-delivery/README.md` |
+
+**Profil :** Standard — corrections mécaniques de liens et navigation README.
+
+### E1b — autres corrections mécaniques (25)
+
+| # | Chemin |
+|---|--------|
+| 1 | `docs/architecture/sfia-delivery-pipeline.md` |
+| 2 | `docs/practices/architecture/functional-architecture-checklist.md` |
+| 3 | `docs/practices/architecture/functional-architecture-deliverables-standard.md` |
+| 4 | `docs/practices/process/bpmn-deliverables-standard.md` |
+| 5 | `docs/practices/process/bpmn-integration-checklist.md` |
+| 6 | `docs/practices/process/bpmn-process-modeling-method.md` |
+| 7 | `docs/practices/roles/qa-tester-method.md` |
+| 8 | `docs/practices/ux-ui/ux-ui-reprise-checklist.md` |
+| 9 | `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` |
+| 10 | `docs/practices/ux-ui/ux-ui-reprise-method.md` |
+| 11 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` |
+| 12 | `docs/tooling/penpot/penpot-cursor-agent-rules.md` |
+| 13 | `docs/tooling/penpot/penpot-design-agent-architecture.md` |
+| 14 | `docs/tooling/penpot/penpot-self-host-docker-guide.md` |
+| 15 | `docs/tooling/penpot/penpot-sfia-method-integration.md` |
+| 16 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` |
+| 17 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` |
+| 18 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` |
+| 19 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` |
+| 20 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` |
+| 21 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` |
+| 22 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` |
+| 23 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` |
+| 24 | `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` |
+| 25 | `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` |
+
+**Profil :** Standard — réparation mécanique liens cassés hors README hubs.
+
+**Contrôles disjoints :** E1a ∩ E1b = **∅** ; E1a + E1b = **31** ; ≤50 fichiers/PR respecté.
+
+### historical-keep — hors exécution corrective (2)
+
+| Chemin | Recommandation |
+|--------|----------------|
+| `docs/foundation/README.md` | Préservation — navigation historique |
+| `method/sfia-fast-track/archive/interv360-realization/README.md` | Préservation — archive read-only |
+
+**Aucun sous-lot E3 d'exécution.** Toute remise en cause future nécessite une décision Morris distincte.
+
+### Options d'exécution (décision Morris requise)
+
+| Option | Description |
+|--------|-------------|
+| **A** | Une PR **E1** unique — **31** fichiers (E1a + E1b) |
+| **B** | Deux PR disjointes — **E1a** (6) puis **E1b** (25) |
+
+**Ordre recommandé (option B) :** E1a → E1b
+
+**Recommandation Cursor :** option **A** acceptable (31 ≤ 50) ; option **B** préférable si isolation README hubs souhaitée — **décision finale Morris requise**.
 
 ## 12. Gates Morris attendues
 
-1. Validation du découpage E1/E2/E3
-2. GO exécution séparé par sous-lot (ou fusion E1+E2)
-3. Arbitrage sur `historical-keep` (E3) — correction ou préservation
-4. Merge PR qualification — GO séparé
+1. Validation du découpage disjoint E1a / E1b (ou fusion E1 unique)
+2. GO exécution Lot E — **séparé** par option A ou B
+3. Merge PR qualification — GO séparé
+4. `historical-keep` — préservation confirmée ; pas d'exécution corrective sans GO distinct
 
 ## 13. Classification complète (75/75)
 
@@ -274,13 +333,15 @@
 
 - Volume Lot E inclut fichiers non-README (`.gitignore`, `.json` example) — conforme CSV frozen, rôle navigation/tooling
 - Forte concentration liens cassés sur inventaires Notion et intégration Penpot
-- 10 références anciens chemins Lot D résiduelles — mécaniquement corrigeables en E1
-- Aucun fichier classé `route-lot-g/h/i` — chevauchements path-only qualifiés, exécution link-fix reste Lot E
+- 10 références anciens chemins Lot D résiduelles — mécaniquement corrigeables en E1a/E1b
+- Les 5 fichiers périmètre path Lot I restent qualifiés Lot E pour link-only — pas de reclassification CSV
+- Aucun fichier classé `route-lot-g/h/i` — chevauchements path-only qualifiés
 
 ## 17. Décisions Morris attendues
 
 - Valider manifeste 75/75 et classifications
-- Approuver découpage E1/E2/E3 (ou variante)
+- Approuver découpage disjoint E1a (6) / E1b (25) ou option E1 unique (31)
+- Confirmer `historical-keep` (2) hors exécution corrective
 - GO exécution Lot E — **séparé**
 - Merge PR qualification — **séparé**
 - Routing Lots F–J — **non couvert**
@@ -289,13 +350,16 @@
 
 ```
 LOT E QUALIFICATION COMPLETED
+LOT E QUALIFICATION CORRECTED
 LOT E MANIFEST VERIFIED 75/75
+METRICS CONSISTENT
 README AND INDEX CONTROLS COMPLETED
 ALL FILES CLASSIFIED
 BROKEN LINKS QUALIFIED
 HISTORICAL REFERENCES QUALIFIED
 CROSS-LOT DEPENDENCIES IDENTIFIED
-EXECUTION SUBLOTS PROPOSED E1/E2/E3
+EXECUTION SUBLOTS PROPOSED E1A/E1B DISJOINT
+HISTORICAL-KEEP EXCLUDED FROM CORRECTIVE EXECUTION
 LOT E CORPUS UNCHANGED
 CSV UNCHANGED
 NO DOCTRINE CHANGE

```

## Diff utile complet (base..HEAD)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index c417ce0..82cfbb1 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -95,7 +95,7 @@ Cartographie finale (PR #165)
 | **Rapport exécution M0-DEC-008** | `2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md` |
 | **Rapport exécution completion** | `2026-07-12-sfia-v2.6-lot-0-archive-completion-execution.md` |
 | **Migration exécutée (autres lots)** | **non** |
-| **Next gate** | Lots E–J routing decision — separate Morris GO required |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 | **Lot A** | **closed** — merged via PR #169 |
 | **Volume Lot A** | **6** fichiers core reference |
 | **Canonical promotion Lot A** | **none** |
@@ -190,16 +190,29 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | **D1 renames** | **50/50** `git mv` — refs directes corrigées |
 | **Rapport exécution D1** | `2026-07-12-sfia-v2.6-lot-d1-naming-execution.md` |
 | **Qualification merge** | **completed via PR #172** — D1 execution merged via PR #174 — D2 execution merged via PR #176 — D3 execution merged via PR #178 |
-| **Next gate** | Lots E–J routing decision — separate Morris GO required |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 
 ---
 
 ## 8. Lot E — Contrôles globaux
 
-| Volume tag | 75 |
-| Rôle | README/index résiduels post-lots de chemins |
-
----
+| Champ | Contenu |
+|-------|---------|
+| **Volume tag CSV** | **75** |
+| **Rôle** | README/index résiduels post-lots de chemins |
+| **Qualification** | **completed on branch** `qualification/sfia-v2.6-lot-e-global-controls` — **PR ouverte, non mergée** |
+| **Manifeste** | **75/75** vérifié — CSV frozen inchangé |
+| **Rapport qualification** | `2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md` |
+| **Classifications** | no-action **42** ; fix-links **31** ; historical-keep **2** ; refresh-index **0** ; route-lot-g/h/i **0** ; investigate **0** ; morris-gate **0** |
+| **Usage (CSV)** | operational **19** ; non-operational **56** |
+| **Authority (CSV)** | reference **20** ; informational **35** ; supporting **20** |
+| **Chevauchement path Lot I** | **5** — link-only Lot E |
+| **Liens cassés qualifiés** | **196** internes / **10** anciens chemins Lot D |
+| **Sous-lots proposés disjoints (non approuvés)** | **E1a** README hubs (**6**) ; **E1b** autres fix-links (**25**) ; E1a+E1b=**31** |
+| **historical-keep** | **2** — hors exécution corrective |
+| **Options exécution** | **A** PR E1 unique (31) ; **B** E1a (6) puis E1b (25) — décision Morris requise |
+| **Statut exécution** | **not started** |
+| **Next gate** | Lot E qualification merge + Morris validation E1a/E1b (or E1 unified) — separate GO required |
 
 ## 9. Lot F — Doublons / superseded
 
@@ -371,4 +384,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lots E–J not opened**.*
+*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E qualification completed on branch — PR open** — **Lots F–J not opened**.*
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md
new file mode 100644
index 0000000..7dba669
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-e-global-controls-qualification.md
@@ -0,0 +1,371 @@
+# SFIA v2.6 — Lot E Global Controls — Qualification
+
+**Horodatage :** 2026-07-12 20:15 Europe/Paris (correction métriques et sous-lots — commit correctif)
+**Cycle :** QA documentaire / qualification Lot E — contrôles globaux README/index
+**Profil :** Standard
+**Décision Morris :** GO explicite — qualification Lot E read-only — **aucune exécution corrective**
+**Branche :** `qualification/sfia-v2.6-lot-e-global-controls`
+**Base Git :** `main` @ `688ab7fb4a74844969a794f80065c9761fdf3893`
+**CSV SHA-256 :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged**
+
+---
+
+## 1. Local Git Truth Check
+
+| Contrôle | Résultat |
+|----------|----------|
+| Repository | `/Users/morris/Projects/sfia-workspace` |
+| Base | `main` @ `688ab7fb4a74844969a794f80065c9761fdf3893` — PR #179 intégrée |
+| Lot D | closed 149/149 |
+| Lots E–J | not opened (pre-qualification) |
+| Worktree tracked | propre — corpus Lot E non modifié |
+
+## 2. Sources consultées
+
+1. `prompts/templates/sfia-cycle-execution-template.md`
+2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
+3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
+5. CSV cartography frozen (SHA ci-dessus)
+6. `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md` §8
+7. Rapports Lots 0, A, C, D1/D2/D3 execution
+8. Manifestes rename D1/D2/D3 (`.tmp-sfia-review/`)
+9. Analyse read-only des 75 fichiers tagués `lot-E`
+
+## 3. Méthodologie
+
+- Extraction CSV `migration_lot_candidate=lot-E` — volume attendu **75**
+- Vérification présence Git pour chaque chemin
+- Typologie : **README** (basename `README.md`), **index** (basename contient `index`), **other**
+- Parse Markdown `[text](url)` et chemins backtick internes
+- Résolution chemins relatifs vs racine repository
+- Détection liens cassés, cibles Lot D renommées (carte 172 renames D1+D2+D3)
+- Classification unique par fichier (9 catégories)
+- **Aucune modification** du corpus Lot E ni consommateurs
+
+## 4. Manifeste Lot E (75/75)
+
+| Contrôle | Résultat |
+|----------|----------|
+| Volume CSV Lot E | **75** |
+| Manifeste | **75/75** |
+| Doublons | **0** |
+| Absents Git | **0** |
+| Fichiers hors CSV ajoutés | **0** |
+
+## 5. Typologie fichiers
+
+| Type | Count |
+|------|------:|
+| README | 20 |
+| index | 0 |
+| other (navigation / hub / checklist / standard index-like) | 55 |
+
+**Note :** aucun basename `*index*` dans le tag CSV Lot E ; les hubs de navigation non-README sont classés **other** (matrices, checklists, standards à rôle index).
+
+## 6. Classifications (somme = 75)
+
+| Classification | Count | Description |
+|----------------|------:|-------------|
+| **no-action** | 42 | Liens actifs valides — navigation OK |
+| **fix-links** | 31 | Liens internes cassés — correction mécanique bornée |
+| **refresh-index** | 0 | Index incomplet / obsolète |
+| **historical-keep** | 2 | Références historiques intentionnelles |
+| **route-lot-g** | 0 | Dépendance restructuration projet |
+| **route-lot-h** | 0 | Dépendance prompts/templates |
+| **route-lot-i** | 0 | Dépendance tooling/CI |
+| **investigate** | 0 | Ambiguïté autorité / intention |
+| **morris-gate** | 0 | Arbitrage structurant requis |
+
+## 7. Métriques liens
+
+| Métrique | Valeur |
+|----------|--------|
+| Liens sortants analysés | **486** |
+| Liens internes valides | **290** |
+| Liens internes cassés | **196** |
+| Ancres locales cassées | **0** |
+| Références anciens chemins Lot D | **10** |
+| Liens externes | **0** (non comptabilisés séparément — liens http/https absents du parse) |
+| Références entrantes (CSV) | **123** |
+
+### Top 10 — liens cassés
+
+| Chemin | Cassés | Classification |
+|--------|-------:|----------------|
+| `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` | 19 | fix-links |
+| `docs/tooling/penpot/penpot-sfia-method-integration.md` | 12 | fix-links |
+| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` | 12 | fix-links |
+| `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` | 12 | fix-links |
+| `docs/practices/ux-ui/ux-ui-reprise-checklist.md` | 9 | fix-links |
+| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` | 9 | fix-links |
+| `docs/practices/architecture/functional-architecture-checklist.md` | 8 | fix-links |
+| `docs/practices/architecture/functional-architecture-deliverables-standard.md` | 8 | fix-links |
+| `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | 8 | fix-links |
+| `docs/practices/ux-ui/ux-ui-reprise-method.md` | 8 | fix-links |
+
+## 8. Autorité / lifecycle / usage (CSV)
+
+| Authority | Count |
+|-----------|------:|
+| informational | 35 |
+| reference | 20 |
+| supporting | 20 |
+
+| Usage | Count |
+|-------|------:|
+| non-operational | 56 |
+| operational | 19 |
+
+| Lifecycle | Count |
+|-----------|------:|
+| candidate | 26 |
+| draft | 23 |
+| not-applicable | 13 |
+| validated | 11 |
+| archived | 2 |
+
+| Risk (CSV) | Count |
+|------------|------:|
+| low | 75 |
+
+| Operational (usage) | **19** |
+| Non-operational | **56** |
+
+## 9. Répartition familiale (CSV primary_family)
+
+| Famille | Count |
+|---------|------:|
+| F06 | 30 |
+| F13 | 20 |
+| F17 | 15 |
+| F09 | 7 |
+| F01 | 3 |
+
+## 10. Chevauchements Lots G / H / I / J (heuristique chemins)
+
+| Lot | Fichiers Lot E dans périmètre path | Note |
+|-----|-----------------------------------:|------|
+| Lot G (projects/) | **0** | Aucun fichier Lot E tagué sous `projects/` |
+| Lot H (prompts/) | **0** | Aucun fichier Lot E tagué sous `prompts/` |
+| Lot I (tools/CI/docker/.cursor) | **5** | `.cursor/mcp-templates/` (2), `docker/penpot/` (3) — qualifiés Lot E pour corrections link-only ; aucune reclassification CSV ; aucune modification structurelle tooling/CI |
+| Lot J | **0** | Aucun delete-candidate dans Lot E |
+
+**Réserve :** plusieurs fichiers Lot E sont des standards/checklists `docs/practices/` ou `method/` — corrections link-only restent en Lot E ; restructuration éventuelle = Lots G/H/I futurs.
+
+## 11. Proposition sous-lots d'exécution disjoints (non approuvés)
+
+Les sous-lots correctifs couvrent **uniquement** les **31** fichiers `fix-links`. Les **42** `no-action` et **2** `historical-keep` restent **hors exécution corrective**.
+
+### E1a — README hubs (6)
+
+| # | Chemin |
+|---|--------|
+| 1 | `.cursor/mcp-templates/README.md` |
+| 2 | `README.md` |
+| 3 | `docker/penpot/README.md` |
+| 4 | `docs/architecture/README.md` |
+| 5 | `docs/templates/tooling/penpot/README.md` |
+| 6 | `method/complementary/controlled-delivery/README.md` |
+
+**Profil :** Standard — corrections mécaniques de liens et navigation README.
+
+### E1b — autres corrections mécaniques (25)
+
+| # | Chemin |
+|---|--------|
+| 1 | `docs/architecture/sfia-delivery-pipeline.md` |
+| 2 | `docs/practices/architecture/functional-architecture-checklist.md` |
+| 3 | `docs/practices/architecture/functional-architecture-deliverables-standard.md` |
+| 4 | `docs/practices/process/bpmn-deliverables-standard.md` |
+| 5 | `docs/practices/process/bpmn-integration-checklist.md` |
+| 6 | `docs/practices/process/bpmn-process-modeling-method.md` |
+| 7 | `docs/practices/roles/qa-tester-method.md` |
+| 8 | `docs/practices/ux-ui/ux-ui-reprise-checklist.md` |
+| 9 | `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` |
+| 10 | `docs/practices/ux-ui/ux-ui-reprise-method.md` |
+| 11 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` |
+| 12 | `docs/tooling/penpot/penpot-cursor-agent-rules.md` |
+| 13 | `docs/tooling/penpot/penpot-design-agent-architecture.md` |
+| 14 | `docs/tooling/penpot/penpot-self-host-docker-guide.md` |
+| 15 | `docs/tooling/penpot/penpot-sfia-method-integration.md` |
+| 16 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` |
+| 17 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` |
+| 18 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` |
+| 19 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` |
+| 20 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` |
+| 21 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` |
+| 22 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` |
+| 23 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` |
+| 24 | `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` |
+| 25 | `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` |
+
+**Profil :** Standard — réparation mécanique liens cassés hors README hubs.
+
+**Contrôles disjoints :** E1a ∩ E1b = **∅** ; E1a + E1b = **31** ; ≤50 fichiers/PR respecté.
+
+### historical-keep — hors exécution corrective (2)
+
+| Chemin | Recommandation |
+|--------|----------------|
+| `docs/foundation/README.md` | Préservation — navigation historique |
+| `method/sfia-fast-track/archive/interv360-realization/README.md` | Préservation — archive read-only |
+
+**Aucun sous-lot E3 d'exécution.** Toute remise en cause future nécessite une décision Morris distincte.
+
+### Options d'exécution (décision Morris requise)
+
+| Option | Description |
+|--------|-------------|
+| **A** | Une PR **E1** unique — **31** fichiers (E1a + E1b) |
+| **B** | Deux PR disjointes — **E1a** (6) puis **E1b** (25) |
+
+**Ordre recommandé (option B) :** E1a → E1b
+
+**Recommandation Cursor :** option **A** acceptable (31 ≤ 50) ; option **B** préférable si isolation README hubs souhaitée — **décision finale Morris requise**.
+
+## 12. Gates Morris attendues
+
+1. Validation du découpage disjoint E1a / E1b (ou fusion E1 unique)
+2. GO exécution Lot E — **séparé** par option A ou B
+3. Merge PR qualification — GO séparé
+4. `historical-keep` — préservation confirmée ; pas d'exécution corrective sans GO distinct
+
+## 13. Classification complète (75/75)
+
+| ID | Chemin | Type | Famille | Usage | Authority | Lifecycle | Cassés | Old D | Entrantes | Classification | Risque | Recommandation |
+|----|--------|------|---------|-------|-----------|-----------|-------:|------:|----------:|----------------|--------|----------------|
+| E-001 | `.cursor/mcp-templates/README.md` | README | F13 | non-operational | reference | candidate | 4 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-002 | `.cursor/mcp-templates/penpot-mcp.example.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 3 | **no-action** | low | No corrective action — navigation valid |
+| E-003 | `.gitignore` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-004 | `README.md` | README | F13 | non-operational | reference | candidate | 1 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-005 | `components/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-006 | `docker/penpot/.env.example` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-007 | `docker/penpot/README.md` | README | F13 | operational | reference | candidate | 3 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-008 | `docker/penpot/docker-compose.override.example.yml` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-009 | `docs/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-010 | `docs/adr/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-011 | `docs/architecture/README.md` | README | F13 | non-operational | reference | candidate | 1 | 1 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-012 | `docs/architecture/sfia-delivery-pipeline.md` | other | F06 | non-operational | supporting | validated | 1 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-013 | `docs/architecture/sfia-domain-model.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-014 | `docs/architecture/sfia-meta-model.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-015 | `docs/architecture/sfia-platform-architecture.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-016 | `docs/architecture/sfia-repository-blueprint.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-017 | `docs/foundation/README.md` | README | F13 | non-operational | reference | archived | 0 | 0 | 0 | **historical-keep** | low | Preserve historical navigation — no Lot E correction |
+| E-018 | `docs/foundation/sfia-engineering-principles.md` | other | F06 | operational | supporting | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-019 | `docs/knowledge/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-020 | `docs/practices/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-021 | `docs/practices/architecture/functional-architecture-checklist.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-022 | `docs/practices/architecture/functional-architecture-deliverables-standard.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-023 | `docs/practices/architecture/functional-architecture-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 2 | **no-action** | low | No corrective action — navigation valid |
+| E-024 | `docs/practices/methods-structure-check.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-025 | `docs/practices/process/bpmn-deliverables-standard.md` | other | F06 | non-operational | supporting | candidate | 4 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-026 | `docs/practices/process/bpmn-integration-checklist.md` | other | F06 | non-operational | informational | draft | 3 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-027 | `docs/practices/process/bpmn-process-modeling-method.md` | other | F06 | non-operational | supporting | candidate | 2 | 1 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-028 | `docs/practices/roles/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-029 | `docs/practices/roles/architect-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-030 | `docs/practices/roles/business-analyst-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-031 | `docs/practices/roles/product-owner-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-032 | `docs/practices/roles/project-manager-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-033 | `docs/practices/roles/qa-tester-method.md` | other | F06 | non-operational | supporting | validated | 4 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-034 | `docs/practices/roles/rssi-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-035 | `docs/practices/roles/ux-ui-designer-method.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-036 | `docs/practices/ux-ui/ux-ui-reprise-checklist.md` | other | F06 | non-operational | informational | draft | 9 | 0 | 1 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-037 | `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-038 | `docs/practices/ux-ui/ux-ui-reprise-method.md` | other | F06 | non-operational | informational | draft | 8 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-039 | `docs/rex/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-040 | `docs/roadmaps/cmp-technical-roadmap.md` | other | F06 | non-operational | informational | draft | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-041 | `docs/standards/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-042 | `docs/standards/ux-ui-v1-governance-standard.md` | other | F06 | non-operational | supporting | validated | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-043 | `docs/templates/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-044 | `docs/templates/tooling/penpot/README.md` | README | F13 | operational | reference | candidate | 5 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-045 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | other | F06 | non-operational | informational | draft | 6 | 0 | 0 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-046 | `docs/tooling/penpot/penpot-cursor-agent-rules.md` | other | F06 | operational | informational | draft | 5 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-047 | `docs/tooling/penpot/penpot-design-agent-architecture.md` | other | F06 | operational | informational | draft | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-048 | `docs/tooling/penpot/penpot-self-host-docker-guide.md` | other | F06 | operational | informational | draft | 2 | 0 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-049 | `docs/tooling/penpot/penpot-sfia-method-integration.md` | other | F06 | operational | informational | draft | 12 | 0 | 2 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-050 | `exports/notion/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-051 | `exports/notion/adr.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-052 | `exports/notion/components.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-053 | `exports/notion/experiments.json` | other | F17 | operational | informational | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-054 | `exports/notion/export-manifest.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-055 | `exports/notion/knowledge.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-056 | `exports/notion/kpi.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-057 | `exports/notion/projects.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-058 | `exports/notion/prompts.json` | other | F17 | non-operational | informational | validated | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-059 | `exports/notion/rex.json` | other | F17 | non-operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-060 | `exports/notion/standards.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-061 | `exports/notion/templates.json` | other | F17 | operational | informational | not-applicable | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-062 | `method/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 0 | **no-action** | low | No corrective action — navigation valid |
+| E-063 | `method/complementary/README.md` | README | F13 | non-operational | reference | candidate | 0 | 0 | 1 | **no-action** | low | No corrective action — navigation valid |
+| E-064 | `method/complementary/controlled-delivery/README.md` | README | F13 | non-operational | reference | candidate | 8 | 3 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-065 | `method/sfia-fast-track/archive/interv360-realization/README.md` | README | F13 | non-operational | reference | archived | 0 | 0 | 0 | **historical-keep** | low | Preserve historical navigation — no Lot E correction |
+| E-066 | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` | other | F09 | non-operational | supporting | validated | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-067 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` | other | F09 | non-operational | supporting | candidate | 2 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-068 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` | other | F09 | non-operational | supporting | candidate | 4 | 1 | 10 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-069 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` | other | F09 | operational | supporting | draft | 12 | 1 | 9 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-070 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` | other | F09 | operational | supporting | draft | 6 | 1 | 7 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-071 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` | other | F09 | operational | supporting | draft | 9 | 0 | 5 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-072 | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` | other | F09 | non-operational | supporting | candidate | 6 | 0 | 7 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-073 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` | other | F01 | non-operational | supporting | candidate | 8 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-074 | `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` | other | F01 | non-operational | supporting | candidate | 19 | 0 | 3 | **fix-links** | low | Correct broken internal links mechanically at execution |
+| E-075 | `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` | other | F01 | non-operational | supporting | candidate | 12 | 0 | 4 | **fix-links** | low | Correct broken internal links mechanically at execution |
+
+## 14. Garde-fous
+
+| Contrôle | Résultat |
+|----------|----------|
+| Corpus Lot E modifié | **0** fichier |
+| CSV in diff | **no** |
+| Doctrine changed | **no** |
+| Canonical changed | **no** |
+| Lots F–J opened | **no** |
+| Exécution Lot E | **not authorized** |
+
+## 15. Limites
+
+- Parse Markdown uniquement — JSON example sans liens markdown non audités en profondeur
+- Liens externes http(s) non vérifiés en ligne
+- Glob patterns ignorés
+- Certains liens cassés = chemins relatifs incorrects depuis sous-répertoires (ex. `.cursor/mcp-templates/README.md` → `../docs/...`)
+
+## 16. Réserves
+
+- Volume Lot E inclut fichiers non-README (`.gitignore`, `.json` example) — conforme CSV frozen, rôle navigation/tooling
+- Forte concentration liens cassés sur inventaires Notion et intégration Penpot
+- 10 références anciens chemins Lot D résiduelles — mécaniquement corrigeables en E1a/E1b
+- Les 5 fichiers périmètre path Lot I restent qualifiés Lot E pour link-only — pas de reclassification CSV
+- Aucun fichier classé `route-lot-g/h/i` — chevauchements path-only qualifiés
+
+## 17. Décisions Morris attendues
+
+- Valider manifeste 75/75 et classifications
+- Approuver découpage disjoint E1a (6) / E1b (25) ou option E1 unique (31)
+- Confirmer `historical-keep` (2) hors exécution corrective
+- GO exécution Lot E — **séparé**
+- Merge PR qualification — **séparé**
+- Routing Lots F–J — **non couvert**
+
+## 18. Verdict
+
+```
+LOT E QUALIFICATION COMPLETED
+LOT E QUALIFICATION CORRECTED
+LOT E MANIFEST VERIFIED 75/75
+METRICS CONSISTENT
+README AND INDEX CONTROLS COMPLETED
+ALL FILES CLASSIFIED
+BROKEN LINKS QUALIFIED
+HISTORICAL REFERENCES QUALIFIED
+CROSS-LOT DEPENDENCIES IDENTIFIED
+EXECUTION SUBLOTS PROPOSED E1A/E1B DISJOINT
+HISTORICAL-KEEP EXCLUDED FROM CORRECTIVE EXECUTION
+LOT E CORPUS UNCHANGED
+CSV UNCHANGED
+NO DOCTRINE CHANGE
+CANONICAL AUTHORITY UNCHANGED
+LOTS F–J NOT OPENED
+QUALIFICATION PR OPEN — NOT MERGED
+LOT E EXECUTION REQUIRES SEPARATE MORRIS GO
+MERGE REQUIRES SEPARATE MORRIS GO
+```

```

## Preuves

- Corpus Lot E modifié : **0**
- Fichiers tracked : rapport + plan uniquement
- CSV in diff : **no**
- E1a ∩ E1b = ∅
- historical-keep (2) ∉ E1a ∪ E1b

## Coverage

| Item | Status |
|------|--------|
| created files full content | n/a |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |
| review pack verdict | COMPLETE |

## Verdict

```
LOT E QUALIFICATION CORRECTED
LOT E MANIFEST VERIFIED 75/75
METRICS CONSISTENT
E1A README HUBS 6
E1B OTHER MECHANICAL FIXES 25
EXECUTION SUBSETS DISJOINT
HISTORICAL-KEEP EXCLUDED FROM CORRECTIVE EXECUTION
LOT E CORPUS UNCHANGED
CSV UNCHANGED
TWO TRACKED FILES CHANGED
PR #180 OPEN — NOT MERGED
REVIEW PACK COMPLETE
LOT E EXECUTION REQUIRES SEPARATE MORRIS GO
MERGE REQUIRES SEPARATE MORRIS GO
```
