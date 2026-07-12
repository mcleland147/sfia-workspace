# Interv360 — Référence projet Penpot Design V2

**Type** : Référence outillage design
**Projet** : Interv360 (PRJ-INTERV360)
**Phase** : 03-design
**Outil cible** : Penpot self-host
**Statut** : Draft
**Branche** : `design/interv360-penpot-reference`
**Source documentaire** : Git / sfia-workspace
**Source visuelle** : Penpot

---

## 1. Objectif

Ce document **référence le fichier Penpot** utilisé pour le cycle **Design V2 Interv360**.

Il **ne contient pas de maquette** ni d'écran produit. Il cadre le lien entre :

- les **specs UX/UI Git** (`06-ux-ui/`, cadrage, architecture) ;
- l'**instance Penpot** self-host locale ;
- la **structure pages** SFIA dans le fichier Penpot ;
- les **règles d'usage Cursor MCP** ;
- les **futurs écrans Design V2** à produire dans Penpot.

**Git reste la source de vérité fonctionnelle.** Penpot est l'espace de production visuelle. Cursor orchestre via MCP.

---

## 2. Références Penpot

| Élément | Valeur |
|---------|--------|
| Instance | `http://localhost:9001` |
| Projet Penpot | `SFIA — Penpot Agent Test` |
| Fichier Penpot actuel | `Nouveau fichier 1` |
| Nom cible recommandé | `Interv360 — Design V2` |
| Mode MCP | Self-host |
| Endpoint MCP | `http://localhost:9001/mcp/stream?userToken=<USER_TOKEN_LOCAL>` |
| Token versionné | **Non** — configuration locale Cursor uniquement |
| Plugin MCP requis | **Oui** — fichier ouvert + plugin connecté |
| Statut lecture MCP | **Validé** |
| Statut écriture MCP | **Validé** pour création / renommage pages |
| Dernier état connu | Structure pages SFIA créée (8 pages) |

**Sécurité :**

- Ne **jamais** committer de `userToken`, clé MCP, mot de passe ou URL MCP complète avec token réel.
- Le renommage du fichier Penpot (`Interv360 — Design V2`) reste **manuel** si nécessaire — `file.name` est en lecture seule côté API MCP.

Voir aussi : [`docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md`](../../../docs/tooling/penpot/2026-06-28-penpot-mcp-self-host-rex.md).

---

## 3. Structure pages Penpot

| Page | Usage prévu |
|------|-------------|
| `00 — Cover` | Page de présentation, contexte projet, périmètre Design V2, lien Git |
| `01 — Design principles` | Principes UX/UI Interv360, garde-fous, décisions atelier transposées |
| `02 — User journeys` | Parcours utilisateurs issus de `06-ux-ui/user-journeys.md` (9 parcours P1–P9) |
| `03 — Screens` | Écrans applicatifs desktop / tablette (liste, fiches, planning, anomalies, reprise) |
| `04 — Dashboards` | Vues Manager SAV et pilotage consolidé (dashboard SAV, vue dirigeant) |
| `05 — Mobile` | Vues technicien mobile (fiche intervention, compte rendu) |
| `06 — Components` | Composants réutilisables Interv360 (badges statuts, alertes, cartes KPI) |
| `99 — Archive` | Éléments historiques, tests, références Figma V1 archivées |

Convention SFIA : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../../../docs/tooling/penpot/penpot-design-agent-architecture.md) §8.

---

## 4. Sources Git à respecter

Sources **obligatoires** avant toute production visuelle Interv360 :

| Source | Chemin |
|--------|--------|
| Synthèse UX/UI | `projects/interv360/06-ux-ui/ux-ui-summary.md` |
| Clôture cycle UX/UI | `projects/interv360/06-ux-ui/ux-ui-cycle-closure.md` |
| Inventaire écrans | `projects/interv360/06-ux-ui/screen-inventory.md` |
| Specs fonctionnelles écran | `projects/interv360/06-ux-ui/screen-functional-specs.md` |
| Vues dashboard | `projects/interv360/06-ux-ui/dashboard-ux-view.md` |
| Parcours utilisateurs | `projects/interv360/06-ux-ui/user-journeys.md` |
| Brief UX/UI | `projects/interv360/01-cadrage/ux-ui-brief.md` |
| Validation brief | `projects/interv360/01-cadrage/ux-ui-brief-validation.md` |
| Revue KPI dashboard | `projects/interv360/01-cadrage/dashboard-kpi-ux-review.md` |
| Clôture Figma V1 | `projects/interv360/02-architecture/figma-v1-closure-summary.md` |

**Référence visuelle V1 (lecture seule, non modifiable dans ce cycle) :**
`projects/interv360/02-architecture/figma-first-draft-screens/`

---

## 5. Règles de cohérence fonctionnelle

| Règle | Application |
|-------|-------------|
| Interv360 reste la **source de vérité locale métier** | Specs Git > maquette Penpot |
| Le **CRM simulé** n'est pas source de vérité | Données affichées = objets Interv360 |
| Le **dashboard** n'est pas source de vérité | Fiches demande et intervention = référence |
| **STAT-01 à STAT-06** | Cycle métier SAV principal |
| **STAT-07** | Indicateur de **retard interne** — distinct de STAT-08 |
| **STAT-08** | Indicateur d'**anomalie d'intégration** — distinct de STAT-07 |
| **STAT-06** reste valide | Même si synchronisation CRM échoue |
| **STAT-08** ne rouvre pas l'intervention | Anomalie ≠ retour au cycle SAV |
| **Messages métier d'abord** | Erreurs intégration : libellé métier avant détail technique |
| **Reprise manuelle MVP** | Écran détail reprise manuelle à cadrer (absent Figma V1) |
| **Pas d'invention** | La maquette ne doit pas créer de nouveaux statuts ni parcours |

Voir : `screen-inventory.md` §2, `ux-ui-summary.md` §4.

---

## 6. Écrans prioritaires à produire plus tard

Liste issue de `screen-inventory.md` — **aucun écran produit dans ce document**.

| Priorité | Écran | Page Penpot cible | Remarque |
|----------|-------|-------------------|----------|
| 1 | Dashboard SAV | `04 — Dashboards` | KPI top 5–7 ; alertes STAT-07 / STAT-08 distinctes |
| 2 | Liste demandes | `03 — Screens` | STAT-01, STAT-02 ; point d'accès principal |
| 3 | Fiche demande SAV | `03 — Screens` | Checklist MVP ; qualification P1 |
| 4 | Planning | `03 — Screens` | Vue **jour par défaut** (écart Figma semaine) |
| 5 | Fiche intervention mobile | `05 — Mobile` | Technicien terrain ; prioritaire atelier |
| 6 | Compte rendu mobile | `05 — Mobile` | Clôture P4 ; signature optionnelle |
| 7 | Suivi erreurs intégration | `03 — Screens` | STAT-08 ; message métier d'abord |
| 8 | Détail reprise manuelle | `03 — Screens` | Absent Figma V1 — complément archi fonctionnelle |
| 9 | Vue dirigeant | `04 — Dashboards` | Pilotage consolidé P8 ; distinct dashboard SAV |

---

## 7. Garde-fous MCP Cursor

Avant toute action MCP sur le fichier Penpot Interv360 :

| Garde-fou | Application |
|-----------|-------------|
| Fichier ouvert | Toujours ouvrir le fichier Penpot cible dans le navigateur |
| Plugin connecté | Vérifier état **MCP connected** dans Penpot |
| Test lecture seule | Lister pages / frames **avant** toute modification |
| Incrémental | Travailler **écran par écran** — pas de modification massive |
| Pages | Ne **jamais** supprimer de page sans validation humaine |
| Traçabilité | Documenter chaque action significative dans Git |
| Secrets | Ne **jamais** committer de token MCP |
| URL MCP | Ne **jamais** copier une URL MCP complète avec token dans Git |

**Prompt test recommandé :**

> Inspecte le fichier Penpot actuellement ouvert et liste les pages disponibles. Ne modifie rien.

**Erreurs connues :**

- `No userToken found in session context` — token absent de la config Cursor ;
- `No plugin instance connected for user token` — plugin MCP non connecté ou mauvais fichier ouvert.

Voir : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../../../docs/tooling/penpot/penpot-cursor-agent-rules.md) §7.

---

## 8. Hors périmètre de ce document

Ce document **ne produit pas** :

- maquette ;
- création d'écran ;
- export visuel (PNG, SVG, PDF) ;
- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- BPMN ;
- delivery.

---

## 9. Critères de sortie

Ce document est **valide** lorsque :

- [x] le fichier Penpot cible est identifié ;
- [x] la structure pages SFIA est documentée ;
- [x] les sources Git UX/UI sont référencées ;
- [x] les écrans prioritaires sont rattachés aux pages Penpot ;
- [x] les règles MCP sont rappelées ;
- [x] aucun secret n'est présent ;
- [x] aucune maquette n'est produite.

---

## 10. Prochaine action recommandée

Créer :

**[`penpot-screen-prioritization.md`](penpot-screen-prioritization.md)**

Objectif : prioriser les premiers écrans à produire dans Penpot, en commençant par un **écran pilote non critique** ou par une **structure de page de revue**.

---

*Référence outillage Interv360 — Penpot Design V2 — Draft.*
