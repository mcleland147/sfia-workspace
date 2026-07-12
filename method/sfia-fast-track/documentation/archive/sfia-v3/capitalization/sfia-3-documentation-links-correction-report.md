> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Rapport de correction liens Markdown

**Date :** 2026-07-08
**Références :**
- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`

**Décision Morris :** cycle DOC uniquement — fichiers `.md` ; aucun `.json` touché
**Action Git :** aucun commit, push ou PR

---

## 1. Objectif

Corriger les références obsolètes vers `.sfia/mcp/prompts/`, `.sfia/mcp/templates/` et les rapports `.md` sous `.sfia/mcp/reports/`, et clarifier que `.sfia/mcp/` est réservé au **runtime bus** (tasks/reports JSON, gates, logs, code).

---

## 2. Fichiers `.md` modifiés (7)

| Fichier | Nature des corrections |
|---------|------------------------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` | §5.1 règle runtime ; §5.2 chemins canoniques prompts/templates ; §10 références |
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` | Template report ; séquence §8 ; §11 références |
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` | Chemin prompt Morris gate |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` | Note historique §4 ; §13 synthèse post-réalignement |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` | Réserves §6 ; risques §7 ; action §9 |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | §8 prochaines étapes (chemins canoniques) |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` | Ce rapport |

**Non modifiés (déjà conformes après réalignement 2026-07-07) :**

- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`
- `prompts/prompt-catalog.md` *(hors scope — réserve)*

---

## 3. Liens corrigés

| Ancien chemin (obsolète) | Nouveau chemin (canonique) | Fichiers impactés |
|--------------------------|----------------------------|-------------------|
| `.sfia/mcp/prompts/cycle-router.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | doctrine, cycle-engine |
| `.sfia/mcp/prompts/task-builder.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | doctrine, cycle-engine |
| `.sfia/mcp/prompts/report-analyzer.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | doctrine, cycle-engine, opening-report |
| `.sfia/mcp/prompts/morris-gate.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | gates-and-stop-conditions |
| `.sfia/mcp/templates/task-template.json` | `docs/templates/sfia-3-task-template.json` *(réf. documentaire)* | doctrine, cycle-engine |
| `.sfia/mcp/templates/report-template.json` | `docs/templates/sfia-3-report-template.json` *(réf. documentaire)* | doctrine, cycle-engine |
| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-*.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/...` | doctrine §10 |
| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/...` | doctrine §10 |
| `.sfia/mcp/reports/` *(capitalisation E2E)* | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` | opening-report §8 |

**Total :** ~15 références mises à jour dans la doctrine et les rapports de capitalisation.

---

## 4. Clarifications `.sfia/mcp/` (runtime bus)

Ajouts ou renforcements dans `sfia-3-orchestration-doctrine.md` §5.1 :

- `.sfia/mcp/` = **runtime bus uniquement** : `tasks/*.json`, `reports/*.json`, `gates/`, `logs/`, `bridge/`, `server/`, `runner/`.
- Les livrables documentaires durables (prompts Markdown, doctrine, rapports de capitalisation) **ne sont pas** stockés sous ce préfixe.
- Les templates JSON sont référencés documentairement via `docs/templates/sfia-3-*.json` — **sans déplacement ni modification des fichiers JSON**.

Les références légitimes au bus runtime (`tasks/`, `reports/` JSON, gates) dans la doctrine restent inchangées.

---

## 5. Confirmation — aucun fichier `.json` modifié

| Contrôle | Résultat |
|----------|----------|
| Fichiers `.json` déplacés | ❌ Aucun |
| Fichiers `.json` renommés | ❌ Aucun |
| Fichiers `.json` modifiés | ❌ Aucun |
| Fichiers `.json` supprimés | ❌ Aucun |
| Code applicatif / runtime / config | ❌ Non touché |

Seuls des fichiers `.md` ont été édités.

---

## 6. `git status --short`

### Avant correction (2026-07-08 — identique au post-réalignement)

```text
 M prompts/*/.gitkeep (9 fichiers)
?? .cursor/mcp.json
?? .sfia/
?? docs/templates/sfia-3-report-template.json
?? docs/templates/sfia-3-task-template.json
?? docs/tooling/mcp/
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
?? (autres untracked hors périmètre SFIA 3.0)
```

### Après correction

```text
 M prompts/*/.gitkeep (9 fichiers)
?? .cursor/mcp.json
?? .sfia/
?? docs/templates/sfia-3-report-template.json
?? docs/templates/sfia-3-task-template.json
?? docs/tooling/mcp/
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/    (+ sfia-3-documentation-links-correction-report.md)
?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
?? (autres untracked hors périmètre SFIA 3.0)
```

**Branche :** `method/sfia-v2.4.1-documentation-status-promotion`
**HEAD :** `f19e127e36809393b709cc04837e7a0f52da0294` (inchangé — pas de commit)

---

## 7. Réserves restantes

| # | Réserve | Bloquant orchestrateur ? |
|---|---------|--------------------------|
| 1 | Chemins historiques `.sfia/mcp/prompts/` dans rapports d'expérimentation (`experiments/*.md`) | Non — témoignage d'expérimentation |
| 2 | `prompts/prompt-catalog.md` — entrées SFIA 3.0 absentes | Non |
| 3 | Hub `docs/tooling/mcp/README.md` — non créé | Non |
| 4 | Périmètre SFIA 3.0 entièrement **untracked** — PR consolidation future | Oui pour industrialisation Git, non pour usage local |
| 5 | Doublon mineur `sfia-mcp-v2-architecture.md` dans doctrine §10 références | Non |

---

## 8. Décision Morris requise ?

**Non** — pour reprendre l'orchestrateur (Bridge / Runner) et Git Reader en lecture seule.

Le bus runtime `.sfia/mcp/` est propre ; la doctrine et les rapports de capitalisation pointent vers les chemins canoniques. Les réserves §7 sont des améliorations documentaires ou de consolidation Git, pas des blocages opérationnels.

**Morris GO recommandé ultérieurement pour :**

| Action | Quand |
|--------|-------|
| Entrées SFIA 3.0 dans `prompts/prompt-catalog.md` | Avant diffusion prompts à l'équipe |
| Création `docs/tooling/mcp/README.md` | Avant onboarding outillage |
| PR unique de consolidation | Fin phase expérimentation |
| Test E2E ChatGPT réel via tunnel HTTPS | GO opérationnel explicite (déjà listé opening report) |

---

## 9. Synthèse

```text
Fichiers .md modifiés : 6 existants + 1 rapport
Liens corrigés       : ~15 références
.sfia/mcp/           : clarifié runtime bus uniquement
Fichiers .json       : 0 touché
Commit / push / PR   : aucun
Statut               : CORRECTION DOC OK
```
