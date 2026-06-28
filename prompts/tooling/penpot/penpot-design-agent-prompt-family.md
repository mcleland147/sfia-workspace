# Famille de prompts — Penpot Design Agent SFIA

**Type** : Prompts Cursor / IA  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Usage** : Réutilisable  
**Architecture** : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../../docs/tooling/penpot/penpot-design-agent-architecture.md)  
**Règles agent** : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../../docs/tooling/penpot/penpot-cursor-agent-rules.md)  
**Intégration méthodes** : [`docs/tooling/penpot/penpot-sfia-method-integration.md`](../../docs/tooling/penpot/penpot-sfia-method-integration.md)  
**Dossier** : `prompts/tooling/penpot/`

---

## 1. Objectif

Cette famille de prompts permet de dérouler l'**intégration Penpot self-host + Cursor MCP** et les **cycles design V2** SFIA de manière contrôlée.

**Interdits globaux :** secrets, clés MCP, credentials, mots de passe, `.env` réel, maquette hors specs, backlog, user stories, tests, code applicatif, API/SQL métier, BPMN, merge automatique, Notion.

---

## 2. Variables à remplacer

| Variable | Description |
|----------|-------------|
| `[PROJECT_NAME]` | Nom du projet |
| `[PROJECT_CODE]` | Code projet |
| `[WORKSPACE_PATH]` | Chemin local sfia-workspace |
| `[BRANCH_NAME]` | Branche Git de travail |
| `[PROJECT_DESIGN_PATH]` | ex. `projects/[projet]/03-design` |
| `[PROJECT_UX_PATH]` | ex. `projects/[projet]/06-ux-ui` |
| `[PENPOT_FILE]` | Nom ou référence fichier Penpot |
| `[PENPOT_INSTANCE_URL]` | ex. `http://localhost:9001` (sans credentials) |
| `[SCREEN_NAME]` | Nom écran aligné `screen-inventory.md` |

---

## 3. Prompt 1 — Installer / cadrer Penpot self-host

**Objectif :** préparer l'installation Penpot Docker en mode template sûr (documentation, pas d'install forcée).

**Préconditions :** Docker et Docker Compose disponibles sur la machine cible ; accès doc officielle Penpot.

**Sources Git à lire :**
- `docs/tooling/penpot/penpot-self-host-docker-guide.md`
- `docker/penpot/README.md`
- `docker/penpot/.env.example`

**Fichier Penpot cible :** aucun (phase install).

**Interdits :** commiter `.env` ; commiter secrets ; installer sans validation humaine ; créer maquette.

**Résultat attendu :** checklist install remplie ou plan d'install documenté ; `.env` local créé hors Git ; aucun secret dans le repo.

**Revue humaine :** valider ports, backup et exposition réseau avant démarrage conteneurs.

```
Objectif : Préparer Penpot self-host pour [PROJECT_NAME] / écosystème SFIA.
Lire les guides Git listés. Suivre doc officielle Penpot Docker.
Copier docker/penpot/.env.example vers .env localement — générer PENPOT_SECRET_KEY hors Git.
Ne pas commiter .env ni secrets. Ne pas créer de maquette.
Résultat : checklist + confirmation aucun secret commité.
Demander revue humaine avant docker compose up en production.
```

---

## 4. Prompt 2 — Configurer Cursor MCP local

**Objectif :** configurer MCP Penpot dans Cursor à partir du template.

**Préconditions :** Penpot accessible ; doc MCP Penpot consultée ; template `.cursor/mcp-templates/penpot-mcp.example.json`.

**Sources Git à lire :**
- `.cursor/mcp-templates/README.md`
- `.cursor/mcp-templates/penpot-mcp.example.json`
- `docs/tooling/penpot/penpot-cursor-agent-rules.md`

**Fichier Penpot cible :** aucun (config locale).

**Interdits :** commiter config MCP avec clés ; inclure tokens dans prompts versionnés.

**Résultat attendu :** instructions config locale Cursor ; URL MCP adaptée ; test connexion décrit.

**Revue humaine :** valider URL MCP et session Penpot navigateur si requis.

```
Objectif : Configurer Cursor MCP Penpot pour [WORKSPACE_PATH].
Copier template penpot-mcp.example.json vers config MCP locale Cursor — pas dans Git.
Adapter URL (ex. http://localhost:4401/mcp). Aucune clé dans le repo.
Tester lecture simple Penpot si instance up.
Revue humaine : confirmer connexion MCP OK.
```

---

## 5. Prompt 3 — Créer un projet Penpot SFIA

**Objectif :** créer un fichier projet Penpot selon convention SFIA.

**Préconditions :** Penpot installé ; MCP configuré localement ; `design-v2-tooling-scope.md` ou équivalent lu.

**Sources Git à lire :**
- `[PROJECT_DESIGN_PATH]/design-v2-tooling-scope.md` (si existe)
- `[PROJECT_UX_PATH]/ux-ui-reprise-scope.md`
- `docs/tooling/penpot/penpot-design-agent-architecture.md` §8

**Fichier Penpot cible :** `[PROJECT_CODE] — Design V2` (nouveau fichier).

**Interdits :** écrans hors scope ; secrets dans Git ; modification specs UX sans cycle doc.

**Résultat attendu :** projet Penpot créé ; `penpot-project-reference.md` rédigé dans Git avec lien/référence (sans credentials).

**Revue humaine :** valider nom projet et périmètre avant création pages.

```
Objectif : Créer projet Penpot [PROJECT_CODE] — Design V2.
Lire specs Git. Créer fichier Penpot via MCP selon convention.
Documenter référence dans [PROJECT_DESIGN_PATH]/penpot-project-reference.md.
Pas de secret. Pas d'écran hors scope.
Revue humaine obligatoire avant suite.
```

---

## 6. Prompt 4 — Créer une structure de pages standard

**Objectif :** créer les pages 00–06 et 99 dans le fichier Penpot.

**Préconditions :** Projet Penpot existant ; MCP actif.

**Sources Git à lire :**
- `penpot-project-reference.md`
- `docs/tooling/penpot/penpot-design-agent-architecture.md` §8

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** suppression pages existantes sans plan ; design system non validé.

**Résultat attendu :** pages standard créées ; résumé structure ; mise à jour `penpot-project-reference.md`.

**Revue humaine :** valider structure avant ajout frames.

```
Objectif : Créer pages standard SFIA (00 Cover … 06 Components, 99 Archive) dans [PENPOT_FILE].
Inspecter d'abord via MCP. Créer pages manquantes une par une.
Mettre à jour penpot-project-reference.md. Résumé après chaque page.
Revue humaine avant frames détaillées.
```

---

## 7. Prompt 5 — Créer un écran depuis une spec UX/UI

**Objectif :** créer ou mettre à jour une frame écran depuis `screen-functional-specs.md`.

**Préconditions :** Page `03 — Screens` ; spec écran disponible ; MCP actif.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/screen-functional-specs.md` §[SCREEN_NAME]
- `[PROJECT_UX_PATH]/screen-inventory.md`
- `[PROJECT_UX_PATH]/user-journeys.md`
- ADR / statuts si référencés

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `03 — Screens`

**Interdits :** nouveaux statuts ; nouveaux parcours ; backlog ; code ; modification captures V1 dans Git.

**Résultat attendu :** frame `[SCREEN_NAME]` ; résumé alignement spec ; écarts listés.

**Revue humaine :** obligatoire après chaque écran.

```
Objectif : Créer frame [SCREEN_NAME] dans [PENPOT_FILE] depuis screen-functional-specs.md.
Lire specs Git. Inspecter Penpot. Une frame à la fois.
Libellés statuts alignés architecture fonctionnelle. Pas de nouveau métier.
Résumé + écarts. Revue humaine obligatoire.
```

---

## 8. Prompt 6 — Créer un dashboard depuis une spec

**Objectif :** maquetter une vue dashboard depuis `dashboard-ux-view.md`.

**Préconditions :** Page `04 — Dashboards` ; specs dashboard disponibles.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/dashboard-ux-view.md`
- `[PROJECT_UX_PATH]/screen-functional-specs.md` (écran dashboard si applicable)
- Architecture fonctionnelle dashboard (non source de vérité)

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `04 — Dashboards`

**Interdits :** BI technique ; KPI non documentés ; dashboard comme source de vérité.

**Résultat attendu :** frame(s) dashboard par profil ; KPI top N si spec ; résumé.

**Revue humaine :** obligatoire.

```
Objectif : Créer vue dashboard [profil] dans Penpot depuis dashboard-ux-view.md.
Dashboard rend visible — pas source de vérité. KPI alignés spec.
Une vue à la fois. Revue humaine obligatoire.
```

---

## 9. Prompt 7 — Créer une version mobile depuis une spec

**Objectif :** frame mobile (technicien, CR, etc.) depuis specs et parcours.

**Préconditions :** Page `05 — Mobile` ; parcours terrain documentés.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/user-journeys.md` (parcours mobile)
- `[PROJECT_UX_PATH]/screen-functional-specs.md` (fiche intervention, CR)
- Décisions UX atelier (mobile prioritaire si applicable)

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `05 — Mobile`

**Interdits :** parcours non documentés ; export PDF si exclu MVP.

**Résultat attendu :** frame mobile ; résumé ; écarts vs desktop si pertinent.

**Revue humaine :** obligatoire.

```
Objectif : Créer frame mobile [SCREEN_NAME] page 05 — Mobile.
Lire parcours et specs. Inspecter Penpot. Une frame.
Revue humaine obligatoire.
```

---

## 10. Prompt 8 — Auditer un fichier Penpot

**Objectif :** audit structure et cohérence sans modification (ou rapport seul).

**Préconditions :** MCP lecture ; fichier Penpot référencé.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/` (tous livrables reprise UX/UI)
- `penpot-project-reference.md`

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** modification sans demande explicite ; suppression.

**Résultat attendu :** rapport pages/frames/composants ; écarts vs inventaire ; risques.

**Revue humaine :** valider plan correction si modifications demandées ensuite.

```
Objectif : Auditer [PENPOT_FILE] vs specs Git [PROJECT_UX_PATH].
MCP inspect only par défaut. Rapport structuré : structure, écarts, risques.
Ne pas modifier sans demande explicite. Revue humaine sur rapport.
```

---

## 11. Prompt 9 — Comparer Penpot vs specs Git

**Objectif :** tableau comparatif écran par écran.

**Préconditions :** Specs et Penpot accessibles.

**Sources Git à lire :**
- `screen-functional-specs.md`
- `screen-inventory.md`
- `dashboard-ux-view.md`

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** corriger Penpot ou Git automatiquement ; décisions métier implicites.

**Résultat attendu :** tableau Spec | Penpot | Écart | Criticité | Action proposée.

**Revue humaine :** arbitrage écarts.

```
Objectif : Comparer Penpot [PENPOT_FILE] vs specs Git.
Tableau par écran. Pas de modification auto.
Revue humaine pour arbitrage.
```

---

## 12. Prompt 10 — Préparer une revue design

**Objectif :** agenda et checklist revue humaine.

**Préconditions :** Frames créées ou audit fait.

**Sources Git à lire :**
- `[PROJECT_DESIGN_PATH]/penpot-review-checklist.md` (créer si absent depuis template futur)
- Synthèse UX/UI si disponible

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** clôture design sans validation humaine ; export massif non validé.

**Résultat attendu :** agenda revue ; liste écrans ; décisions attendues ; participants suggérés.

**Revue humaine :** ce prompt prépare la revue — la revue elle-même est humaine.

```
Objectif : Préparer revue design [PROJECT_NAME] sur [PENPOT_FILE].
Agenda, écrans à valider, écarts connus, checklist.
Pas d'export officiel sans validation post-revue.
```

---

## 13. Prompt 11 — Documenter les exports dans Git

**Objectif :** référencer exports Penpot dans Git sans en faire la seule source de vérité.

**Préconditions :** Revue humaine effectuée ; exports autorisés.

**Sources Git à lire :**
- `penpot-project-reference.md`
- `design-v2-summary.md` (créer ou mettre à jour si cycle ouvert)

**Fichier Penpot cible :** `[PENPOT_FILE]` (référence lien uniquement)

**Interdits :** commiter données sensibles ; remplacer specs par images seules ; secrets dans URLs.

**Résultat attendu :** section exports dans `penpot-project-reference.md` ou `design-v2-summary.md` ; convention nommage ; date revue.

**Revue humaine :** valider périmètre exports avant commit Git.

```
Objectif : Documenter exports Penpot pour [PROJECT_NAME] dans Git.
Référencer liens, fichiers export, date, revue humaine.
Specs Git restent source fonctionnelle. Pas de secret dans URLs.
Revue humaine avant commit.
```

---

## 14. Ordre recommandé

```
1. Installer / cadrer Penpot (Prompt 1)
2. Configurer MCP (Prompt 2)
3. Créer projet (Prompt 3)
4. Structure pages (Prompt 4)
5. Écrans / dashboard / mobile (Prompts 5–7)
6. Audit / compare (Prompts 8–9)
7. Revue (Prompt 10)
8. Documentation exports Git (Prompt 11)
```

---

## 15. Conclusion

Cette famille aligne Penpot sur les **méthodes SFIA** : specs Git d'abord, Penpot ensuite, revue humaine systématique, aucun secret dans le repo.

---

*Famille de prompts SFIA — Penpot Design Agent — Draft — Réutilisable.*
