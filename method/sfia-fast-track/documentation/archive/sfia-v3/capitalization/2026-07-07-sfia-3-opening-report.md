> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Opening Report

**Date :** 2026-07-07
**Cycle :** Ouverture trajectoire documentaire SFIA 3.0
**Décision Morris :** GO documentation SFIA 3.0 — preuve technique validée
**PR / push / merge :** reportés

---

## 1. Fichiers créés

### Doctrine (docs/tooling/mcp/)

| Fichier | Rôle |
|---------|------|
| `sfia-3-orchestration-doctrine.md` | Rupture 3.0, héritage v1.1/v2.0, rôles, limites |
| `sfia-3-cycle-engine.md` | Moteur cycle, états, cycle validable, rapport consommable |
| `sfia-3-gates-and-stop-conditions.md` | Gates Morris, conditions d'arrêt, escalade |

### Prompts cycle (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` + `prompts/governance/`)

| Fichier | Rôle |
|---------|------|
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | Routage cycle_type avant task |
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | Construction task pour bridge |
| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | Analyse rapport post-cycle |
| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | Escalade et résolution gate |

### Templates (`docs/templates/` — contrats JSON)

| Fichier | Rôle |
|---------|------|
| `docs/templates/sfia-3-task-template.json` | Contrat JSON task |
| `docs/templates/sfia-3-report-template.json` | Contrat JSON rapport consommable |

### Rapport

| Fichier | Rôle |
|---------|------|
| `2026-07-07-sfia-3-opening-report.md` | Ce document |

**Total :** 10 fichiers livrables

---

## 2. Synthèse de la doctrine

### Rupture méthodologique

SFIA 3.0 marque le passage de l'**automatisation progressive** (v2.0) à l'**orchestration contrôlée de cycles projet** avec boucle fermée :

```text
ChatGPT → Bridge → tasks/ → Runner → reports/ → Bridge → ChatGPT
```

### Héritage préservé

- Git source de vérité
- Morris autorité structurante
- Chemins protégés
- Niveaux L0–L5 (L5 global interdit)
- Gates Morris bloquants

### Apport 3.0

- Bus orchestrateur `.sfia/mcp/`
- Contrats task / report JSON
- Prompts cycle génériques
- Moteur de cycle avec états explicites
- Preuve E2E sans copier-coller manuel Cursor

---

## 3. Décisions structurantes

| # | Décision |
|---|----------|
| D1 | SFIA 3.0 = orchestration contrôlée, pas autonomie |
| D2 | Le bus `.sfia/mcp/` est le contrat d'échange ChatGPT ↔ exécution locale |
| D3 | Bridge = transport borné ; Runner = consume manuel ; MCP = exécution L3 |
| D4 | Un cycle validable exige task + report + guardrails_check explicite |
| D5 | Aucune résolution gate par machine |
| D6 | Phase opening : cycle_type `DOC/MCP` prioritaire |
| D7 | PR 3.0 reportée — documentation et expérimentation d'abord |

---

## 4. Preuve technique rappelée

| Composant | Version | Statut |
|-----------|---------|--------|
| sfia-mcp | v0.4.0 | Validé (L1/L2/L3 confiné) |
| Orchestrator Bridge | v0.1.0 | Validé (13/13 tests) |
| Cursor Task Runner | v0.1.0 | Validé (10/10 tests) |
| Flux E2E ChatGPT task | task-a9a9ec5f-… | DONE + rapport |

---

## 5. Limites

| Limite | Détail |
|--------|--------|
| Runner manuel | Pas de daemon permanent sans GO Morris |
| cycle_types | Runner : DOC/MCP uniquement (phase opening) |
| Écriture repo | Hors `.sfia/mcp/` requiert GO Morris |
| Git distant | Pas de push/PR/merge automatisés |
| Industrialisation | Bridge tunnel HTTPS = étape suivante |
| Canonical v1.1 | Non modifié |

---

## 6. Réserves

1. **Documentation opening** — pas encore promue canonical ; candidate en `docs/tooling/mcp/`
2. **Templates** — champs `_lifecycle` / `_consumability` sont métadonnées, pas déposés au bridge
3. **cycle_type DOC** — non supporté par runner phase 3.0
4. **Tests MCP l1** — assertion 5 tools obsolète (11 tools v0.4.0) — hors scope opening
5. **Pas de PR** — trajectoire expérimentale jusqu'à validation Morris industrialisation

---

## 7. Décision Morris requise ?

**Non pour l'opening documentaire** — GO déjà donné (2026-07-07).

**Oui avant prochaines étapes :**

| Étape | Décision |
|-------|----------|
| Promotion doctrine → statut candidate/main | Morris GO |
| Test ChatGPT réel via tunnel HTTPS | Morris GO + token KeePass |
| Daemon runner au login | Morris GO explicite |
| Extension cycle_types (DOC, BUILD, etc.) | Morris GO + mise à jour cycle-router |
| PR trajectoire SFIA 3.0 | Morris GO fin expérimentation |

---

## 8. Prochaine étape recommandée

1. **Test E2E ChatGPT réel** — Custom GPT Action → bridge tunnel → task → `npm run watch` → `GET /reports/latest` → `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
2. **Documenter le flux** dans `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` (rapport E2E daté — capitalisation, pas bus runtime)
3. **Revue Morris** des 3 docs doctrine + 4 prompts
4. **Décider** date promotion PR (hors scope immédiat)

---

## 9. Arborescence créée

```text
docs/tooling/mcp/
  sfia-3-orchestration-doctrine.md
  sfia-3-cycle-engine.md
  sfia-3-gates-and-stop-conditions.md

method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
  sfia-3-cycle-router.md
  sfia-3-task-builder.md
  sfia-3-report-analyzer.md

prompts/governance/
  sfia-3-morris-gate.md

docs/templates/
  sfia-3-task-template.json
  sfia-3-report-template.json

method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
  2026-07-07-sfia-3-opening-report.md

.sfia/mcp/                    ← runtime bus uniquement (tasks/, reports/*.json, gates/, logs/, code)
```

---

**Statut opening SFIA 3.0 :** **OK** — trajectoire documentaire ouverte, alignée sur preuve technique validée.
