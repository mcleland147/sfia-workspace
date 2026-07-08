# SFIA 3.0 — Audit de cartographie documentaire

**Date :** 2026-07-07
**Type :** Audit méthode — routage documentaire
**Décision Morris :** Repartir sur une base saine conforme SFIA v2.x.x avant usage orchestrateur / Git Reader
**Action :** Audit uniquement — **aucun déplacement effectué**

---

## 1. Contexte Git

| Champ | Valeur |
|-------|--------|
| **Branche courante** | `method/sfia-v2.4.1-documentation-status-promotion` |
| **HEAD** | `f19e127e36809393b709cc04837e7a0f52da0294` |

### `git status --short` (extrait pertinent)

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
?? docs/tooling/mcp/
?? .tools/
?? .tmp-figma-captures/
?? projects/chantiers360-v2/app/test-results/
?? projects/interv360/03-design/exports/
```

Tous les livrables SFIA 3.0 et le bus `.sfia/mcp/` sont **non suivis** (`??`) à ce stade.

---

## 2. Références lues

| Document | Rôle identifié |
|----------|----------------|
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Documentation Routing Matrix ; types de connaissances ; mapping repo → knowledge ; anti-dispersion `.sfia/` |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage cycles ; typologie DOC/CAPA ; gate Morris v3.0 ; anti-dispersion §4.3.5 |
| `docs/architecture/sfia-repository-blueprint.md` | Espaces Core / Knowledge / Assets / Platform / Runtime ; zones actives post-PR #81 |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Routage documentaire avant prompt ; garde-fous repository |

**Précédent local :** `docs/tooling/penpot/` — architecture outillage dans `docs/tooling/<outil>/`.

---

## 3. Règles de routage identifiées

### 3.1 Documentation Routing Matrix (Knowledge Layer §6)

| Phase / contexte | Dossier cible | Application SFIA 3.0 |
|------------------|---------------|----------------------|
| **Audit méthode** | `method/sfia-fast-track/documentation/...` | Ce rapport |
| **Architecture plateforme / outillage** | `docs/architecture/` ou `docs/tooling/` | Doctrine MCP 3.0 |
| **Capitalisation méthode** | `method/sfia-fast-track/`, `docs/practices/`, `prompts/` | Prompts, templates durables |
| **Prompt réutilisable** | `prompts/` | cycle-router, task-builder, etc. |
| **Template réutilisable** | `docs/templates/` ou `method/.../templates/` | task/report templates |
| **Rules / guardrails** | `method/sfia-fast-track/core/` | Gates 3.0 si promotion normative |

### 3.2 Anti-dispersion (Knowledge Layer §6.2 + Cycle Routing §4.3.5)

| Interdit | À faire |
|----------|---------|
| Registre parallèle hors Git | Références croisées |
| **Dossier `.sfia/` pour capitalisation méthode** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/` (et futur `sfia-v3/`) |
| Dupliquer les standards | Référencer v2.4 consolidation |

> **Nuance audit :** `.sfia/mcp/` est un **bus runtime expérimental** (tasks, reports JSON, gates, logs, code bridge/runner/server). Il n'est pas un substitut à la capitalisation méthode — mais certains fichiers y ont été créés hors périmètre runtime.

### 3.3 Blueprint — zones actives

| Zone | Contenu durable |
|------|-----------------|
| `docs/tooling/` | Documentation outillage (précédent Penpot) |
| `prompts/` | Familles et templates de prompts |
| `docs/templates/` | Templates plateforme |
| `method/sfia-fast-track/documentation/capitalization/` | Audits, REX méthode, rapports d'ouverture |
| `.sfia/mcp/` | **Runtime bus** — pas capitalisation durable |

### 3.4 Rules & Guardrails

- **Documentation routing before prompt** — obligatoire
- **Dossier cible explicite** avant production
- **Capitalization by default** — les rapports d'expérimentation doivent être promus ou archivés

---

## 4. Fichiers SFIA 3.0 détectés — inventaire

> **Note (post-réalignement 2026-07-07) :** les sections 4.2–4.4 décrivent l'état **au moment de l'audit**, avant déplacement. Emplacements canoniques actuels : §8 et `sfia-3-documentation-realignment-report.md`.

### 4.1 Doctrine / architecture outillage (`docs/tooling/mcp/`)

| Fichier | Emplacement actuel |
|---------|-------------------|
| `sfia-3-orchestration-doctrine.md` | `docs/tooling/mcp/` |
| `sfia-3-cycle-engine.md` | `docs/tooling/mcp/` |
| `sfia-3-gates-and-stop-conditions.md` | `docs/tooling/mcp/` |
| `sfia-mcp-v2-architecture.md` | `docs/tooling/mcp/` *(v2.0, référence)* |

### 4.2 Prompts cycle (état audit — avant réalignement)

| Fichier | Emplacement au moment de l'audit |
|---------|----------------------------------|
| `cycle-router.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-cycle-router.md`** |
| `task-builder.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-task-builder.md`** |
| `report-analyzer.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-report-analyzer.md`** |
| `morris-gate.md` | `.sfia/mcp/prompts/` → **`prompts/governance/sfia-3-morris-gate.md`** |

### 4.3 Templates (état audit — avant réalignement)

| Fichier | Emplacement au moment de l'audit |
|---------|----------------------------------|
| `task-template.json` | `.sfia/mcp/templates/` → **`docs/templates/sfia-3-task-template.json`** |
| `report-template.json` | `.sfia/mcp/templates/` → **`docs/templates/sfia-3-report-template.json`** |

### 4.4 Rapports documentaires dans le bus (`.sfia/mcp/reports/*.md`)

| Fichier | Emplacement actuel |
|---------|-------------------|
| `2026-07-07-sfia-3-opening-report.md` | `.sfia/mcp/reports/` |
| `2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `.sfia/mcp/reports/` |
| `2026-07-07-sfia-cursor-task-runner-experiment.md` | `.sfia/mcp/reports/` |
| `2026-07-07-mcp-*.md` (6 fichiers expérimentation) | `.sfia/mcp/reports/` |
| `2026-07-07-cursor-integration-flow.md` | `.sfia/mcp/reports/` |

### 4.5 Runtime bus (`.sfia/mcp/` — hors doctrine)

| Zone | Nature |
|------|--------|
| `bridge/` | Code + Dockerfile + README outillage runtime |
| `server/` | Serveur MCP stdio v0.4.0 |
| `runner/` | Task runner expérimental |
| `tasks/*.json` | Artefacts cycle en cours |
| `reports/report-*.json` | Rapports JSON consommables |
| `reports/*.json` (session, e2e, example) | Artefacts test / session |
| `gates/pending/`, `gates/resolved/` | Gates Morris runtime |
| `logs/*.jsonl`, `logs/*.log` | Audit runtime |
| `README.md` | Doc bus local |
| `cursor-mcp.example.json` | Config exemple Cursor |

---

## 5. Classification et cartographie cible

### Légende classification

| Classe | Définition |
|--------|------------|
| **Doctrine durable** | Référence méthode/outillage versionnable, candidate promotion |
| **Architecture outillage** | Doc technique composant (bridge, MCP, runner) |
| **Prompt réutilisable** | Asset prompt ChatGPT/Cursor — catalogue `prompts/` |
| **Template technique** | Contrat JSON réutilisable |
| **Artefact runtime** | Fichier de cycle, log, gate, JSON task/report vivant |
| **Rapport temporaire** | REX / expérimentation à capitaliser puis archiver |

### Tableau de classification

| Fichier | Emplacement actuel | Classification | Emplacement cible recommandé | Justification |
|---------|-------------------|----------------|----------------------------|---------------|
| `sfia-3-orchestration-doctrine.md` | `docs/tooling/mcp/` | Doctrine durable | **Conserver** `docs/tooling/mcp/` *(court terme)* → `method/.../capitalization/sfia-v3/` *(promotion)* | Aligné précédent `docs/tooling/penpot/` ; promotion méthode si statut Candidate |
| `sfia-3-cycle-engine.md` | `docs/tooling/mcp/` | Architecture outillage | **Conserver** `docs/tooling/mcp/` | Doc moteur cycle = outillage orchestrateur |
| `sfia-3-gates-and-stop-conditions.md` | `docs/tooling/mcp/` | Architecture outillage / normatif | **Conserver** `docs/tooling/mcp/` *(court terme)* → référence croisée `method/.../core/` si norme | Gates opérationnels MCP ; pas core v1.1 |
| `sfia-mcp-v2-architecture.md` | `docs/tooling/mcp/` | Architecture outillage | **Conserver** | Déjà conforme |
| `cycle-router.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-cycle-router.md` | Matrix : prompts → `prompts/` ; précédent `prompts/tooling/penpot/` |
| `task-builder.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-task-builder.md` | Idem |
| `report-analyzer.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-report-analyzer.md` | Idem |
| `morris-gate.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/governance/sfia-3-morris-gate.md` ou `prompts/arbitrages/` | Thème gouvernance / arbitrage |
| `task-template.json` | `.sfia/mcp/templates/` | Template technique | `docs/templates/sfia-3-task-template.json` | Matrix : templates plateforme → `docs/templates/` |
| `report-template.json` | `.sfia/mcp/templates/` | Template technique | `docs/templates/sfia-3-report-template.json` | Idem |
| `2026-07-07-sfia-3-opening-report.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-3-opening-report.md` | Capitalisation méthode — pas runtime |
| `2026-07-07-sfia-orchestrator-bridge-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/` ou `docs/tooling/mcp/reports/` | REX outillage ; extraire durable vers README bridge |
| `2026-07-07-sfia-cursor-task-runner-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/` | Idem |
| `2026-07-07-mcp-*.md` (expériences) | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/experiments/` | Evidence cycles ; pas bus |
| `bridge/README.md` | `.sfia/mcp/bridge/` | Architecture outillage | **Conserver** à côté du code *(court terme)* → lien depuis `docs/tooling/mcp/` | README co-localisé acceptable pour outillage exécutable |
| `tasks/*.json` | `.sfia/mcp/tasks/` | Artefact runtime | **Conserver** `.sfia/mcp/tasks/` | Bus orchestrateur |
| `reports/report-*.json` | `.sfia/mcp/reports/` | Artefact runtime | **Conserver** `.sfia/mcp/reports/` | Consommables ChatGPT |
| `gates/*` | `.sfia/mcp/gates/` | Artefact runtime | **Conserver** `.sfia/mcp/gates/` | État Morris runtime |
| `logs/*` | `.sfia/mcp/logs/` | Artefact runtime | **Conserver** (non versionné) | Audit local |
| `bridge/`, `server/`, `runner/` (code) | `.sfia/mcp/` | Artefact runtime / outillage | **Conserver** `.sfia/mcp/` *(ou futur `tools/`)* | Code exécutable ; hors scope doc |
| `.sfia/mcp/README.md` | `.sfia/mcp/` | Architecture outillage (local) | **Conserver** + **lien** depuis `docs/tooling/mcp/README.md` hub | Doc bus ; éviter doublon doctrine |

---

## 6. Fichiers qui ne devraient pas rester sous `.sfia/mcp/`

| Fichier / dossier | Raison | Cible recommandée |
|-------------------|--------|-------------------|
| `prompts/cycle-router.md` | Prompt réutilisable — Matrix → `prompts/` | `prompts/tooling/mcp/` |
| `prompts/task-builder.md` | Idem | `prompts/tooling/mcp/` |
| `prompts/report-analyzer.md` | Idem | `prompts/tooling/mcp/` |
| `prompts/morris-gate.md` | Idem | `prompts/governance/` |
| `templates/task-template.json` | Template plateforme | `docs/templates/` |
| `templates/report-template.json` | Idem | `docs/templates/` |
| `reports/2026-07-07-sfia-3-opening-report.md` | Capitalisation méthode | `method/.../capitalization/` |
| `reports/2026-07-07-sfia-orchestrator-bridge-*.md` | REX — pas artefact cycle | `method/.../capitalization/sfia-v3/` |
| `reports/2026-07-07-sfia-cursor-task-runner-*.md` | Idem | `method/.../capitalization/sfia-v3/` |
| `reports/2026-07-07-mcp-*.md` | Rapports expérimentation | `method/.../capitalization/sfia-v3/experiments/` |
| `reports/2026-07-07-cursor-integration-flow.md` | Idem | Idem |

**Total : 13 fichiers / groupes à déplacer** (sur ~20 livrables documentaires hors runtime JSON).

---

## 7. Fichiers qui peuvent rester sous `.sfia/mcp/` (runtime)

| Zone | Justification |
|------|---------------|
| `tasks/*.json` | Entrée bus — déposés par bridge |
| `reports/report-*.json` | Sortie bus — consommés par ChatGPT |
| `reports/example-handoff-l2.json`, `*-results.json`, `cursor-interactive-session.json` | Artefacts test *(à purger périodiquement)* |
| `gates/pending/`, `gates/resolved/` | État Morris opérationnel |
| `logs/` | Audit append-only — non versionné |
| `bridge/`, `server/`, `runner/` | Code outillage expérimental |
| `cursor-mcp.example.json` | Config machine locale |
| `README.md` | Doc opérationnelle du bus *(hub léger)* |

---

## 8. Cartographie cible conforme (vue d'ensemble)

```text
docs/tooling/mcp/                          ← Hub architecture outillage MCP / SFIA 3.0
  sfia-mcp-v2-architecture.md
  sfia-3-orchestration-doctrine.md
  sfia-3-cycle-engine.md
  sfia-3-gates-and-stop-conditions.md
  README.md                                ← (à créer) index hub → bus runtime

prompts/tooling/mcp/                       ← Prompts cycle SFIA 3.0
  sfia-3-cycle-router.md
  sfia-3-task-builder.md
  sfia-3-report-analyzer.md

prompts/governance/                        ← (ou arbitrages/)
  sfia-3-morris-gate.md

docs/templates/
  sfia-3-task-template.json
  sfia-3-report-template.json

method/sfia-fast-track/documentation/capitalization/
  sfia-3-documentation-routing-audit.md    ← Ce rapport
  sfia-3-opening-report.md                 ← (après déplacement)
  sfia-v3/                                 ← (futur) REX, experiments, promotion
    experiments/
      2026-07-07-bridge-mvp.md
      2026-07-07-runner-experiment.md
      ...

.sfia/mcp/                                 ← Runtime bus uniquement
  tasks/ reports/*.json gates/ logs/
  bridge/ server/ runner/
```

---

## 9. Écarts constatés (confusion actuelle)

| Confusion | Impact |
|-----------|--------|
| Prompts durables dans `.sfia/mcp/prompts/` | Git Reader / ChatGPT ne les trouvent pas via `prompts/` ; anti-dispersion violée |
| Templates dans `.sfia/mcp/templates/` | Non alignés `docs/templates/` ; duplication risque |
| Rapports capitalisation dans `.sfia/mcp/reports/` | Mélangés avec JSON runtime ; `GET /reports/latest` peut exposer un `.md` |
| Doctrine OK dans `docs/tooling/mcp/` | **Conforme** — mais pas référencée depuis Knowledge Layer / prompt catalog |
| Pas de dossier `sfia-v3/` capitalization | Ouverture 3.0 sans ancrage méthode capitalisation |
| `.sfia/` entier untracked | Risque perte ; pas de PR ; dette invisible |

---

## 10. Risques de dette documentaire

| Risque | Sévérité | Mitigation recommandée |
|--------|----------|------------------------|
| Double source prompts (bus vs `prompts/`) | **Haute** | Déplacer prompts ; bridge référence chemins canoniques |
| `GET /reports/latest` retourne un `.md` expérimental | **Moyenne** | Filtrer `report-*.json` uniquement *(code)* ; déplacer `.md` |
| Doctrine 3.0 non liée au prompt catalog | **Moyenne** | Entrée `prompts/prompt-catalog.md` + hub `docs/tooling/mcp/README.md` |
| REX expérimentation non capitalisés | **Moyenne** | Dossier `capitalization/sfia-v3/experiments/` |
| Anti-dispersion `.sfia/` mal interprétée | **Moyenne** | Distinguer bus runtime vs capitalisation dans README hub |
| v3.0 non mentionné dans cycle-routing-guide | **Structurante** | Patch alignement *(futur cycle DOC)* — pas dans cet audit |
| Fichiers untracked | **Haute** | PR unique après déplacements validés Morris |

---

## 11. Décision Morris requise avant déplacement

**Oui — GO Morris requis** pour :

| # | Décision |
|---|----------|
| 1 | Valider la cartographie cible §8 |
| 2 | Autoriser le déplacement des 4 prompts vers `prompts/tooling/mcp/` (+ morris-gate → governance) |
| 3 | Autoriser le déplacement des 2 templates vers `docs/templates/` |
| 4 | Autoriser le déplacement des rapports `.md` vers `method/.../capitalization/sfia-v3/` |
| 5 | Créer le hub `docs/tooling/mcp/README.md` (index) |
| 6 | Décider si `sfia-3-orchestration-doctrine.md` reste `docs/tooling/mcp/` ou migre vers `capitalization/sfia-v3/` |
| 7 | Autoriser la PR de consolidation (hors scope immédiat) |

**Non requis** pour :

- Continuer à utiliser le bus runtime `.sfia/mcp/` pour tasks/reports JSON
- Lire la doctrine déjà placée dans `docs/tooling/mcp/`
- Utiliser Git Reader en lecture seule

---

## 12. Prochaine étape recommandée

1. **Morris valide** cette cartographie (GO / ajustements).
2. **Cycle DOC dédié** — déplacements uniquement (pas de code applicatif) :
   - prompts → `prompts/tooling/mcp/`
   - templates → `docs/templates/`
   - rapports `.md` → `method/.../capitalization/sfia-v3/`
3. **Créer hub** `docs/tooling/mcp/README.md` liant doctrine, bus runtime, bridge, runner.
4. **Mettre à jour** `prompts/prompt-catalog.md` (entrées SFIA 3.0).
5. **Puis** reprendre test E2E ChatGPT ↔ Bridge ↔ Runner avec chemins canoniques.
6. **PR unique** de consolidation quand Morris GO.

---

## 13. Synthèse

| Verdict | Détail |
|---------|--------|
| **Doctrine 3.0 (`docs/tooling/mcp/`)** | ✅ Globalement conforme |
| **Prompts / templates sous `.sfia/mcp/`** | ❌ Non conformes au moment de l'audit — **corrigé par réalignement 2026-07-07** |
| **Rapports capitalisation sous `.sfia/mcp/reports/`** | ❌ Non conformes au moment de l'audit — **corrigé par réalignement 2026-07-07** |
| **Bus runtime `.sfia/mcp/`** | ✅ Légitime pour tasks, reports JSON, gates, logs, code |
| **Liens doctrine post-correction DOC** | ✅ Corrigés 2026-07-08 — voir `sfia-3-documentation-links-correction-report.md` |

---

**Statut audit :** COMPLETE — cartographie cible proposée ; réalignement et correction liens Markdown effectués.
