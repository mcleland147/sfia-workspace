> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Rapport PR readiness (documentation / MCP)

**Date :** 2026-07-08
**Agent :** préparation PR readiness — **aucun commit, push ou PR créée**
**Références :**
- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
- `method/.../sfia-3-documentation-realignment-report.md`
- `method/.../sfia-3-documentation-links-correction-report.md`

---

## 1. Branche courante

```text
method/sfia-v2.4.1-documentation-status-promotion
```

**Tracking :** `origin/method/sfia-v2.4.1-documentation-status-promotion` — **0 ahead / 0 behind**

---

## 2. HEAD courant

```text
f19e127e36809393b709cc04837e7a0f52da0294
f19e127 docs: promote SFIA v2.4.1 reference documents
```

Aucun commit local SFIA 3.0 au-dessus de HEAD. Tout le périmètre SFIA 3.0 est **untracked** ou modifié localement sans staging.

---

## 3. Résumé des changements

| Type | Quantité | Détail |
|------|----------|--------|
| **Modifiés (tracked)** | 9 | `prompts/*/.gitkeep` — ajout d'une ligne vide (bruit, hors périmètre SFIA 3.0) |
| **Ajoutés (untracked)** | ~120+ | Périmètre SFIA 3.0 + bruit local |
| **Déplacés (git)** | 0 | Déplacements réalisés hors index Git (fichiers untracked) |
| **Supprimés (git)** | 0 | — |

### Synthèse par intention

La trajectoire SFIA 3.0 est **complète en local** mais **non indexée** :

- Doctrine, prompts, templates, capitalisation → emplacements canoniques ✅
- Runtime bus `.sfia/mcp/` → code outillage + artefacts d'exécution mélangés ⚠️
- Bruit hors périmètre (`.tools/`, captures Figma, test-results, exports design) → à exclure ❌

---

## 4. `git status --short` (capture intégrale)

```text
 M prompts/arbitrages/.gitkeep
 M prompts/architecture/.gitkeep
 M prompts/cadrage/.gitkeep
 M prompts/governance/.gitkeep
 M prompts/governance/notion/.gitkeep
 M prompts/qa/.gitkeep
 M prompts/roles/.gitkeep
 M prompts/security/.gitkeep
 M prompts/ux-ui/.gitkeep
?? .cursor/mcp.json
?? .sfia/
?? .tmp-figma-captures/
?? .tools/
?? docs/templates/sfia-3-report-template.json
?? docs/templates/sfia-3-task-template.json
?? docs/tooling/mcp/
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
?? projects/chantiers360-v2/app/test-results/
?? projects/interv360/03-design/exports/
?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
```

---

## 5. `git diff --stat` / `git diff --name-status` / `git diff --check`

### `--stat`

```text
 prompts/arbitrages/.gitkeep        | 1 +
 prompts/architecture/.gitkeep      | 1 +
 prompts/cadrage/.gitkeep           | 1 +
 prompts/governance/.gitkeep        | 1 +
 prompts/governance/notion/.gitkeep | 1 +
 prompts/qa/.gitkeep                | 1 +
 prompts/roles/.gitkeep             | 1 +
 prompts/security/.gitkeep          | 1 +
 prompts/ux-ui/.gitkeep             | 1 +
 9 files changed, 9 insertions(+)
```

### `--name-status`

```text
M	prompts/arbitrages/.gitkeep
M	prompts/architecture/.gitkeep
M	prompts/cadrage/.gitkeep
M	prompts/governance/.gitkeep
M	prompts/governance/notion/.gitkeep
M	prompts/qa/.gitkeep
M	prompts/roles/.gitkeep
M	prompts/security/.gitkeep
M	prompts/ux-ui/.gitkeep
```

### `--check`

```text
(aucune erreur — pas de conflits de marqueurs, pas de trailing whitespace signalé)
```

---

## 6. Inventaire classé par catégorie

### 6.1 Documentation SFIA 3.0 durable (`docs/`)

| Fichier | Statut |
|---------|--------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` | untracked ✅ |
| `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | untracked ✅ *(référence v2)* |
| `docs/templates/sfia-3-task-template.json` | untracked ✅ *(contrat durable)* |
| `docs/templates/sfia-3-report-template.json` | untracked ✅ *(contrat durable)* |

### 6.2 Prompts Markdown réutilisables (`prompts/`)

| Fichier | Statut |
|---------|--------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | untracked ✅ |

### 6.3 Capitalisation SFIA v3 (`method/.../capitalization/`)

| Fichier | Statut |
|---------|--------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` | untracked ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md` | untracked ✅ *(ce rapport)* |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/*.md` (9 fichiers) | untracked ✅ |

### 6.4 Runtime `.sfia/mcp/` — à traiter avec prudence

#### Code outillage MCP (47 fichiers source — **applicatif expérimental**)

| Zone | Contenu | Recommandation PR |
|------|---------|-------------------|
| `.sfia/mcp/bridge/` | Bridge HTTP v0.1.0 (src, tests, Docker) | PR MCP séparée — **GO Morris requis** |
| `.sfia/mcp/server/` | sfia-mcp v0.4.0 (stdio) | Idem |
| `.sfia/mcp/runner/` | Cursor Task Runner v0.1.0 | Idem |
| `.sfia/mcp/README.md` | Doc bus local | Inclure si PR MCP |
| `.sfia/mcp/.gitignore` | Exclusions runtime | Inclure si PR MCP |
| `.sfia/mcp/cursor-mcp.example.json` | Config exemple | Inclure si PR MCP |

#### Artefacts runtime (53 fichiers — **exclure de toute PR**)

| Zone | Contenu | Fichiers |
|------|---------|----------|
| `tasks/` | Handoffs JSON expérimentaux | 16 `task-*.json` + `.gitkeep` |
| `reports/` | Rapports JSON runtime | 21 `report-*.json` + fichiers flow |
| `gates/resolved/` | Gates Morris résolues | 12 `gate-*.json` |
| `logs/` | Audit JSONL / log | 3 fichiers |

#### Dépendances locales — **exclure**

| Zone | Contenu |
|------|---------|
| `bridge/node_modules/` | ~1000+ fichiers npm |
| `server/node_modules/` | idem (si présent) |

### 6.5 Fichiers locaux / temporaires — **exclure**

| Chemin | Motif |
|--------|-------|
| `.cursor/mcp.json` | Config machine — chemins absolus Morris |
| `.tmp-figma-captures/` | Captures écran temporaires (4 PNG) |
| `.tools/` | Binaire `gh` local + zip (~240 fichiers) |
| `projects/chantiers360-v2/app/test-results/` | Résultats tests Playwright locaux |
| `projects/interv360/03-design/exports/` | Exports design locaux |
| `.sfia/**/.DS_Store` | Fichiers macOS |

### 6.6 Fichiers suspects / sensibles

| Fichier | Verdict | Action |
|---------|---------|--------|
| `.cursor/mcp.json` | ⚠️ Local — chemins absolus `/Users/morris/...` | **Ne pas versionner** |
| `.sfia/mcp/bridge/.env.example` | ✅ Placeholder sans secret | OK si PR MCP |
| Aucun `.env` réel détecté | ✅ | — |
| Mentions `token` / `secret` dans `.md` | ✅ Documentation / placeholders | OK |
| `logs/bridge-audit.jsonl` | ⚠️ Données opérationnelles locales | **Exclure** |
| `gates/resolved/*.json` | ⚠️ Artefacts Morris locaux | **Exclure** |
| `tasks/*.json`, `reports/*.json` | ⚠️ Artefacts cycle expérimental | **Exclure** |

**Recherche sensible :** aucun secret réel, token ou credential versionné détecté dans le périmètre untracked SFIA 3.0.

### 6.7 Modifiés hors périmètre — **restaurer avant commit**

| Fichier | Nature |
|---------|--------|
| `prompts/*/.gitkeep` (×9) | Ligne vide ajoutée — effet collatéral création dossiers |

---

## 7. Contrôles obligatoires

| Contrôle | Résultat |
|----------|----------|
| `git branch --show-current` | `method/sfia-v2.4.1-documentation-status-promotion` ✅ |
| `git rev-parse HEAD` | `f19e127e36809393b709cc04837e7a0f52da0294` ✅ |
| `git status --short` | Capturé §4 ✅ |
| `git diff --stat` | 9 `.gitkeep` uniquement ✅ |
| `git diff --name-status` | 9 `M` sur `.gitkeep` ✅ |
| `git diff --check` | Aucune erreur ✅ |
| Aucune action Git distante | 0 ahead / 0 behind — pas de push local ✅ |
| `.sfia/mcp/reports/*.md` absent | **0 fichier** ✅ |
| Markdown SFIA 3.0 emplacements canoniques | **21 fichiers `.md`** aux bons chemins ✅ |
| Aucun JSON modifié (cycle correction Markdown) | `git diff` ne touche aucun `.json` ✅ |
| Templates JSON | Nouveaux untracked dans `docs/templates/` — non modifiés en correction DOC ✅ |

### Vérification emplacements canoniques Markdown

| Emplacement attendu | Présent |
|---------------------|---------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)` | ✅ 3 fichiers |
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)sfia-3-*.md` | ✅ 3 fichiers |
| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | ✅ |
| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` | ✅ 13 fichiers `.md` |
| `.sfia/mcp/prompts/` | ✅ Absent |
| `.sfia/mcp/templates/` | ✅ Absent |

---

## 8. Périmètre exact proposé pour la future PR

### Option A — PR documentation SFIA 3.0 *(recommandée en premier)*

**23 fichiers** — documentation durable + contrats templates :

```text
method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md
method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md
method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md
docs/tooling/mcp/sfia-mcp-v2-architecture.md
docs/templates/sfia-3-task-template.json
docs/templates/sfia-3-report-template.json
method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md
method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md
method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md
method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/**  (13 .md)
```

> **Note Morris :** les 2 templates JSON dans `docs/templates/` sont des **contrats durables** (déplacés depuis `.sfia/mcp/templates/` lors du réalignement). Ils ne sont pas des artefacts runtime — inclusion légitime dans la PR documentation.

### Option B — PR outillage MCP expérimental *(séparée — GO Morris explicite)*

```text
.sfia/mcp/.gitignore
.sfia/mcp/README.md
.sfia/mcp/cursor-mcp.example.json
.sfia/mcp/bridge/          (hors node_modules)
.sfia/mcp/server/          (hors node_modules)
.sfia/mcp/runner/
.sfia/mcp/gates/resolved/.gitkeep
.sfia/mcp/tasks/.gitkeep
```

**Hors PR :** `tasks/*.json`, `reports/*.json`, `gates/resolved/gate-*.json`, `logs/*`, `node_modules/`

### Option C — PR monolithique

**Non recommandée** — mélange documentation, code applicatif et artefacts runtime.

---

## 9. Fichiers à exclure / restaurer / ignorer avant commit

### Exclure (ne pas `git add`)

```text
.cursor/mcp.json
.tmp-figma-captures/
.tools/
projects/chantiers360-v2/app/test-results/
projects/interv360/03-design/exports/
.sfia/mcp/bridge/node_modules/
.sfia/mcp/server/node_modules/
.sfia/mcp/tasks/task-*.json
.sfia/mcp/reports/*.json
.sfia/mcp/gates/resolved/gate-*.json
.sfia/mcp/logs/*
.sfia/**/.DS_Store
```

### Restaurer (annuler bruit)

```text
prompts/arbitrages/.gitkeep
prompts/architecture/.gitkeep
prompts/cadrage/.gitkeep
prompts/governance/.gitkeep
prompts/governance/notion/.gitkeep
prompts/qa/.gitkeep
prompts/roles/.gitkeep
prompts/security/.gitkeep
prompts/ux-ui/.gitkeep
```

Commande suggérée (après GO Morris) :

```bash
git restore prompts/*/.gitkeep prompts/governance/notion/.gitkeep
```

### Ajouter au `.gitignore` racine *(recommandation — hors scope actuel)*

```gitignore
.cursor/mcp.json
.sfia/mcp/bridge/node_modules/
.sfia/mcp/server/node_modules/
.sfia/mcp/logs/
.sfia/mcp/tasks/task-*.json
.sfia/mcp/reports/*.json
.sfia/mcp/gates/resolved/gate-*.json
.tmp-figma-captures/
.tools/
```

> Ne pas modifier `.gitignore` sans GO Morris explicite.

---

## 10. Validation garde-fous

| Garde-fou | Statut |
|-----------|--------|
| Pas de commit effectué | ✅ |
| Pas de push effectué | ✅ |
| Pas de PR créée | ✅ |
| Pas de merge | ✅ |
| Cycle correction Markdown = `.md` uniquement | ✅ |
| Aucun JSON modifié dans `git diff` tracked | ✅ |
| Aucun secret versionné détecté | ✅ |
| `.cursor/mcp.json` non inclus | ✅ *(à maintenir)* |
| `.sfia/mcp/reports/*.md` absent | ✅ |
| Pas de code applicatif projet hors SFIA 3.0 dans périmètre proposé | ✅ *(Option A)* |
| Artefacts runtime exclus du périmètre proposé | ✅ *(Option A)* |
| Branche synchronisée avec remote | ✅ 0/0 |

---

## 11. Réserves

| # | Réserve | Impact PR |
|---|---------|-----------|
| 1 | Périmètre entièrement **untracked** — premier commit SFIA 3.0 à structurer | Moyen |
| 2 | `prompts/prompt-catalog.md` — entrées SFIA 3.0 absentes | Faible |
| 3 | Hub `docs/tooling/mcp/README.md` — non créé | Faible |
| 4 | PR sur branche `method/sfia-v2.4.1-documentation-status-promotion` — nommage v2.4.1 / contenu v3.0 | **Décision Morris** |
| 5 | Code MCP (bridge/server/runner) non encore versionné — PR doc seule = trajectoire partielle | Attendu |
| 6 | `.gitignore` racine ne couvre pas `.sfia/` ni `.cursor/` — risque `git add .` accidentel | **Élevé** |
| 7 | Chemins historiques dans rapports `experiments/*.md` — témoignage, pas bloquant | Faible |
| 8 | 9 `.gitkeep` modifiés par bruit — à restaurer | Faible |

---

## 12. Décision Morris requise

**Oui — avant toute PR.**

| # | Décision | Options |
|---|----------|---------|
| 1 | **Périmètre PR** | A) Documentation seule (23 fichiers) · B) + outillage MCP (47 fichiers source) · C) Monolithique (déconseillé) |
| 2 | **Branche cible** | Rester sur branche actuelle · ou créer `method/sfia-v3-documentation-opening` |
| 3 | **Templates JSON** | Inclure `docs/templates/sfia-3-*.json` dans PR doc ✅ recommandé |
| 4 | **Artefacts runtime** | Confirmer exclusion stricte tasks/reports/gates/logs JSON |
| 5 | **`.gitignore` racine** | Autoriser patch exclusions `.sfia/` runtime + `.cursor/mcp.json` |
| 6 | **`sfia-mcp-v2-architecture.md`** | Inclure comme référence dans PR doc ? |
| 7 | **GO commit + push + PR** | Explicite — non déduit de ce rapport |

---

## 13. Proposition de titre PR

### Option A (documentation)

```text
docs(sfia-3): open orchestration doctrine, prompts, and capitalization
```

### Option B (documentation + MCP tooling)

```text
feat(sfia-3): add orchestration docs, MCP bridge/server/runner, and prompts
```

---

## 14. Proposition de description PR

### Option A — Documentation SFIA 3.0

```markdown
## Summary

- Open SFIA 3.0 orchestration doctrine (`method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`)
- Add reusable cycle prompts (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`)
- Add task/report JSON templates (`docs/templates/sfia-3-*.json`)
- Capitalize routing audit, realignment, link correction, and experiment reports (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`)

## Architecture rule

- Durable documentation → `docs/`, `prompts/`, `method/`
- Runtime bus → `.sfia/mcp/` (not included in this PR)

## Test plan

- [ ] Verify all Markdown links resolve to canonical paths
- [ ] Confirm no secrets in versioned files
- [ ] Confirm `.sfia/mcp/reports/*.md` absent from repo
- [ ] Git Reader can locate prompts under `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`
- [ ] Morris review doctrine + gates before operational E2E
```

### Option B — Ajout section MCP (si GO Morris)

```markdown
## Additional scope (experimental tooling)

- SFIA Orchestrator Bridge v0.1.0 (`.sfia/mcp/bridge/`)
- sfia-mcp server v0.4.0 (`.sfia/mcp/server/`)
- Cursor Task Runner v0.1.0 (`.sfia/mcp/runner/`)

Runtime artifacts (tasks/reports/gates JSON, logs, node_modules) excluded.
```

---

## 15. Recommandation GO / NO-GO

| Verdict | Détail |
|---------|--------|
| **GO conditionnel** | **Option A** — PR documentation SFIA 3.0 (23 fichiers) après décisions Morris §12 |
| **NO-GO** | `git add .` sans filtrage — inclurait secrets locaux, artefacts runtime, binaires, bruit |
| **NO-GO** | PR monolithique incluant `tasks/*.json`, `reports/*.json`, `logs/`, `node_modules/` |
| **NO-GO immédiat** | Commit / push / PR sans GO Morris explicite |

### Checklist pré-commit (après GO Morris)

```text
[ ] Restaurer prompts/*/.gitkeep
[ ] git add ciblé (Option A ou A+B selon décision)
[ ] Vérifier git diff --cached — aucun .cursor/mcp.json, aucun artefact runtime
[ ] git diff --check
[ ] Commit message conforme
[ ] Push + gh pr create — uniquement sur instruction Morris
```

---

**Statut PR readiness :** COMPLETE — périmètre proposé, exclusions identifiées, **en attente GO Morris**.
