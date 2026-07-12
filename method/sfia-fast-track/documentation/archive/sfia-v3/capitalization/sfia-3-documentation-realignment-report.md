> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Rapport de réalignement documentaire

**Date :** 2026-07-07
**Référence :** `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
**Décision Morris :** GO déplacement documentaire uniquement — pas de modification de fond
**Action Git :** aucun commit, push ou PR

---

## 1. Contexte Git

| Champ | Valeur |
|-------|--------|
| **Branche** | `method/sfia-v2.4.1-documentation-status-promotion` |
| **HEAD** | `f19e127e36809393b709cc04837e7a0f52da0294` |

### `git status --short` — avant

```text
 M prompts/*/.gitkeep (9 fichiers)
?? .cursor/mcp.json
?? .sfia/
?? docs/tooling/mcp/
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
?? (autres untracked hors périmètre)
```

### `git status --short` — après (extrait périmètre réalignement)

```text
?? docs/templates/sfia-3-report-template.json
?? docs/templates/sfia-3-task-template.json
?? docs/tooling/mcp/
?? method/.../capitalization/sfia-3-documentation-routing-audit.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
?? .sfia/                    (runtime bus — prompts/templates/reports .md retirés)
```

---

## 2. Fichiers déplacés (16)

### Prompts (4)

| Source | Destination |
|--------|-------------|
| `.sfia/mcp/prompts/cycle-router.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` |
| `.sfia/mcp/prompts/task-builder.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` |
| `.sfia/mcp/prompts/report-analyzer.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` |
| `.sfia/mcp/prompts/morris-gate.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` |

### Templates (2)

| Source | Destination |
|--------|-------------|
| `.sfia/mcp/templates/task-template.json` | `docs/templates/sfia-3-task-template.json` |
| `.sfia/mcp/templates/report-template.json` | `docs/templates/sfia-3-report-template.json` |

### Rapports Markdown — ouverture (1)

| Source | Destination | Motif |
|--------|-------------|-------|
| `.sfia/mcp/reports/2026-07-07-sfia-3-opening-report.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | Rapport d'ouverture méthode |

### Rapports Markdown — expérimentation (9)

| Source | Destination |
|--------|-------------|
| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-cursor-interactive-validation.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-e2e-v040-flow.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-l3-cycle-report-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-l3-confined-handoff-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-l2-handoff-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-cursor-integration-flow.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
| `.sfia/mcp/reports/2026-07-07-mcp-mvp-l1-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |

**Dossiers supprimés (vides) :** `.sfia/mcp/prompts/`, `.sfia/mcp/templates/`

---

## 3. Ajustements de liens (exception autorisée)

Liens internes mis à jour **uniquement** dans les prompts déplacés (chemins canoniques) :

| Fichier | Changement |
|---------|------------|
| `sfia-3-cycle-router.md` | Référence task-builder → `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` |
| `sfia-3-task-builder.md` | Template → `docs/templates/sfia-3-task-template.json` |
| `sfia-3-report-analyzer.md` | Template + morris-gate → chemins canoniques |

Références runtime `.sfia/mcp/` (bus, gates, reports JSON) **inchangées** — toujours valides.

---

## 4. Fichiers conservés sous `.sfia/mcp/`

| Zone | Contenu | Vérification |
|------|---------|--------------|
| `tasks/*.json` | Handoffs / tâches bridge | ✅ |
| `reports/*.json` | 21 fichiers JSON runtime | ✅ — **0 fichier `.md`** |
| `gates/pending/`, `gates/resolved/` | Gates Morris | ✅ |
| `logs/` | Audit JSONL / log | ✅ |
| `bridge/` | Orchestrator Bridge | ✅ |
| `server/` | sfia-mcp v0.4.0 | ✅ |
| `runner/` | Cursor Task Runner | ✅ |
| `README.md` | Doc bus local | ✅ |
| `cursor-mcp.example.json` | Config exemple | ✅ |

### Contrôles validés

| Contrôle | Résultat |
|----------|----------|
| Plus de `prompts/` sous `.sfia/mcp/` | ✅ Dossier absent |
| Plus de `templates/` sous `.sfia/mcp/` | ✅ Dossier absent |
| Plus de rapports `.md` dans `reports/` | ✅ |
| Reports JSON runtime en place | ✅ 21 fichiers |

---

## 5. Doctrine inchangée (déjà conforme)

Restent à leur emplacement actuel (non déplacés) :

- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md`

---

## 6. Réserves

1. ~~**Liens dans la doctrine 3.0**~~ — **Résolu** (correction liens Markdown 2026-07-08).
2. **Liens dans les rapports d'expérimentation déplacés** — chemins historiques vers `.sfia/mcp/prompts/` conservés tels quels (témoignage d'expérimentation).
3. **`prompts/prompt-catalog.md`** — pas encore mis à jour avec les entrées SFIA 3.0.
4. **Hub `docs/tooling/mcp/README.md`** — non créé (hors scope déplacement).
5. **Tout le périmètre reste untracked** — consolidation via PR future requise.

---

## 7. Risques restants

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Doctrine 3.0 avec liens obsolètes vers prompts/templates | ~~Moyenne~~ **Résolu** (2026-07-08) |
| `GET /reports/latest` (bridge) — OK post-déplacement `.md` | Faible | Résolu — plus de `.md` dans reports/ |
| Double lecture Git Reader vs chemins `prompts/` | Faible | Configurer Custom GPT sur chemins canoniques |
| Fichiers untracked | Haute | PR consolidation Morris |

---

## 8. Validation des garde-fous

| Garde-fou | Statut |
|-----------|--------|
| Pas de modification de code applicatif | ✅ |
| Pas de suppression d'artefacts JSON runtime | ✅ |
| Pas de chemins protégés touchés | ✅ |
| Pas de commit / push / PR | ✅ |
| Bus runtime `.sfia/mcp/` préservé | ✅ |
| Prompts/templates durables hors bus | ✅ |
| Capitalisation `.md` hors `reports/` runtime | ✅ |

---

## 9. Décision Morris requise avant reprise orchestrateur + Git Reader ?

**Non pour le réalignement documentaire** — GO exécuté, cartographie appliquée.

**Recommandé avant reprise E2E :**

| # | Action | Bloquant ? |
|---|--------|------------|
| 1 | ~~Patch liens dans `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`~~ | **Fait** (2026-07-08 — voir `sfia-3-documentation-links-correction-report.md`) |
| 2 | Entrées SFIA 3.0 dans `prompts/prompt-catalog.md` | Non — souhaitable |
| 3 | Hub `docs/tooling/mcp/README.md` | Non |
| 4 | **Reprise test** ChatGPT → Bridge → Runner avec chemins `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` | **GO opérationnel** |

**Morris peut reprendre l'orchestrateur et Git Reader** dès maintenant — le bus runtime est propre ; les assets durables sont aux emplacements canoniques.

---

## 10. Synthèse

```text
Déplacements : 16 fichiers
Liens corrigés : 5 références (prompts déplacés uniquement)
.sfia/mcp/ : runtime uniquement
Capitalisation : method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
Statut : REALIGNEMENT OK
```

---

**Statut :** COMPLETE — base documentaire réalignée, prête pour reprise orchestrateur.
