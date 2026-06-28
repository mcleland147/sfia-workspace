# Penpot Design Agent — Architecture d'intégration SFIA

**Type** : Architecture outillage  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Branche** : `tooling/penpot-design-agent`  
**Outil cible** : Penpot self-host  
**Client IA cible** : Cursor via MCP

---

## 1. Objectif

Penpot devient l'**outil design officiel** de l'écosystème SFIA pour les cycles UX/UI nécessitant wireframes, maquettes applicatives ou prototypes simples.

**Cursor** reste l'agent d'orchestration documentaire : lecture des specs Git, prompts, contrôle qualité, synthèses et traçabilité.

**Penpot** devient l'espace de **production visuelle** : wireframes, maquettes V2, prototypes, revue d'écrans et capitalisation de patterns UI réutilisables.

Cette architecture **ne remplace pas** la documentation Git comme source de vérité métier et fonctionnelle.

---

## 2. Positionnement dans la stack SFIA

```
sfia-workspace
→ documentation, méthodes, projets, prompts, templates

Penpot self-host
→ wireframes, maquettes, prototypes, design system visuel

Cursor
→ orchestration, prompts, lecture des specs, génération d'instructions, MCP

Camunda
→ BPMN, process, workflows métier
```

| Brique | Rôle |
|--------|------|
| **sfia-workspace (Git)** | Méthodes, specs UX/UI, ADR, architecture fonctionnelle, prompts |
| **Penpot self-host** | Production et revue visuelle |
| **Cursor + MCP** | Pont entre specs Git et actions Penpot |
| **Camunda** | Modélisation processus BPMN — **hors périmètre design Penpot** |

**Règle :** Penpot **ne remplace pas** Camunda pour le BPMN. Les flux processus restent dans le cycle processus / Camunda ; Penpot couvre l'UX/UI visuelle.

---

## 3. Cas d'usage

| Cas d'usage | Description |
|-------------|-------------|
| Maquette V2 depuis specs UX/UI | Traduire `screen-functional-specs.md` et parcours en écrans Penpot |
| Parcours → écrans | Structurer frames à partir de `user-journeys.md` |
| Wireframes low / mid fidelity | Prototyper avant design system final |
| Audit maquette existante | Comparer Penpot vs specs Git et référence V1 |
| Cohérence specs Git / design Penpot | Détecter écarts, documenter dans Git |
| Exports PNG / PDF / SVG | Artefacts de revue — référencés dans Git, non source unique |
| Capitalisation patterns UI SFIA | Bibliothèque d'écrans et composants réutilisables |

---

## 4. Architecture cible

### Composants

| Composant | Rôle |
|-----------|------|
| **Penpot self-host (Docker)** | Instance locale ou domaine protégé |
| **Base de données / volumes / assets** | Selon stack officielle Penpot — voir guide Docker |
| **Reverse proxy (optionnel)** | HTTPS, domaine, exposition contrôlée |
| **Cursor MCP** | Connexion HTTP vers serveur MCP Penpot |
| **Git (sfia-workspace)** | Source documentaire et méthodologique |
| **Penpot** | Source visuelle de travail |

### Flux de travail cible

```
Git specs UX/UI
        ↓
Cursor prompt
        ↓
Penpot MCP
        ↓
Fichier Penpot projet
        ↓
Revue humaine
        ↓
Export / lien / synthèse dans Git
```

**Principe :** les exports visuels et liens Penpot sont **référencés** dans Git (`penpot-project-reference.md`, synthèses design) — ils ne remplacent pas les specs fonctionnelles.

---

## 5. Règles de séparation des responsabilités

| Brique | Responsabilité | Ne doit pas faire |
|--------|----------------|-------------------|
| **Git / SFIA workspace** | Méthodes, specs, ADR, traçabilité, clôture cycles | Produire des maquettes ; héberger Penpot |
| **Cursor** | Orchestration, prompts, lecture specs, plans d'action MCP | Décider seul du design final ; committer des secrets |
| **Penpot** | Wireframes, maquettes, prototypes, composants visuels | Remplacer specs métier ; définir statuts ou ADR |
| **Camunda** | BPMN, workflows processus | Maquettes UI, parcours écran détaillés |
| **Notion (si utilisé)** | Publication optionnelle hors Git | Source de vérité SFIA — non requis par cette architecture |
| **Navigateur / exports** | Session Penpot, exports PNG/PDF/SVG | Source de vérité unique sans lien Git |

---

## 6. Règles de sécurité

- **Aucune clé MCP** dans Git — configuration locale Cursor uniquement.
- **Aucun mot de passe** ni token dans Git.
- **Fichier `.env` réel** ignoré par `.gitignore` — seul `.env.example` versionné.
- **Tokens et clés** dans gestionnaire local ou variables d'environnement machine.
- **Penpot** en local par défaut, ou domaine protégé (HTTPS) si exposé.
- **Volumes Docker** : procédure de backup documentée — voir guide Docker.
- **Exports sensibles** : contrôler le périmètre avant partage ou commit d'images.

---

## 7. Mode MCP Cursor

L'intégration MCP doit permettre :

- inspecter un fichier Penpot ;
- lire pages, frames, composants ;
- créer des wireframes guidés par spec ;
- appliquer des instructions design incrémentales ;
- auditer la cohérence UX ;
- produire un rapport de revue.

### Workflow agent obligatoire

1. **Lire** les specs Git du projet (scope, parcours, specs écran, dashboard).
2. **Inspecter** le fichier Penpot cible via MCP.
3. **Proposer** un plan d'action (écran par écran, pas de modification massive).
4. **Appliquer** en petites étapes avec résumé après chaque action.
5. **Demander** revue humaine avant clôture ou export officiel.
6. **Documenter** les écarts Penpot vs specs dans Git.

Voir aussi : [`penpot-cursor-agent-rules.md`](penpot-cursor-agent-rules.md).

---

## 8. Convention projets Penpot SFIA

### Nommage fichiers Penpot

| Type | Convention |
|------|--------------|
| Design V2 | `[Projet] — Design V2` |
| Wireframes | `[Projet] — Wireframes` |
| Design system | `[Projet] — Design System` |
| Archive V1 | `[Projet] — Archive V1` |

### Pages recommandées

| Page | Contenu |
|------|---------|
| `00 — Cover` | Contexte, version, lien Git |
| `01 — Design principles` | Principes UX, garde-fous |
| `02 — User journeys` | Vue parcours (référence specs) |
| `03 — Screens` | Écrans desktop / web |
| `04 — Dashboards` | Vues pilotage |
| `05 — Mobile` | Vues terrain / mobile |
| `06 — Components` | Bibliothèque composants |
| `99 — Archive` | Références V1, écrans dépréciés |

---

## 9. Convention Git

Documents possibles sous `projects/<projet>/03-design/` :

| Fichier | Rôle |
|---------|------|
| `design-v2-tooling-scope.md` | Cadrage cycle design V2 et outillage Penpot |
| `penpot-project-reference.md` | Lien fichier Penpot, pages, convention nommage |
| `penpot-wireframe-instructions.md` | Instructions agent / humain pour wireframes |
| `penpot-review-checklist.md` | Checklist revue design vs specs |
| `design-v2-summary.md` | Synthèse cycle design |
| `design-v2-cycle-closure.md` | Clôture cycle design V2 |

Les captures et exports peuvent être référencés ou versionnés selon politique projet — **les specs Git restent la référence fonctionnelle**.

---

## 10. Critères de validation

Le socle outillage Penpot est validable lorsque :

- [ ] Stack Penpot démarrable (Docker) selon guide SFIA + doc officielle
- [ ] Instance accessible (ex. `http://localhost:9001`)
- [ ] Projet Penpot test créé avec structure pages standard
- [ ] Cursor MCP configuré **localement** (template `.cursor/mcp-templates/`)
- [ ] **Aucun secret** commité dans le repo
- [ ] Prompt test exécuté (lecture simple fichier Penpot)
- [ ] Revue humaine possible sur une frame test
- [ ] Documentation Git produite (référence projet ou tooling)

---

## 11. Limites

- **MCP ne remplace pas** une revue design humaine qualifiée.
- **Penpot ne remplace pas** les specs UX/UI documentaires Git.
- **Exports visuels** ne sont pas la seule source de vérité métier.
- **Complexité** Docker, proxy, sauvegardes et mises à jour Penpot à maîtriser.
- **Ne pas automatiser** modifications massives sans contrôle intermédiaire.
- **Noms de services Docker** Penpot peuvent évoluer — vérifier la doc officielle avant override.

---

## 12. Prochaine action recommandée

Documenter le déploiement Docker self-host en mode template sûr :

**[`penpot-self-host-docker-guide.md`](penpot-self-host-docker-guide.md)**

Puis : contrôle qualité outillage, PR vers `main`, installation locale Penpot hors repo.

---

*Architecture outillage SFIA — Penpot Design Agent — Draft.*
