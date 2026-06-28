# Interv360 — Priorisation écrans Penpot Design V2

**Type** : Priorisation design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-screen-prioritization`  
**Source documentaire** : Git / sfia-workspace  
**Source visuelle cible** : Penpot  
**Documents associés** : [`penpot-project-reference.md`](penpot-project-reference.md), [`design-v2-cycle-opening.md`](design-v2-cycle-opening.md)

---

## 1. Objectif

Ce document **priorise les 9 écrans MVP Interv360** à produire dans Penpot pour le cycle **Design V2**.

Il **ne produit aucune maquette**. Il prépare :

- l'**ordre de production** des écrans ;
- le choix de l'**écran pilote** pour la première session MCP de maquette ;
- les **composants** à poser dès le pilote ;
- les **garde-fous** fonctionnels à respecter pendant la production visuelle.

Sources : `06-ux-ui/screen-inventory.md`, `screen-functional-specs.md`, `user-journeys.md`, `dashboard-ux-view.md`.

---

## 2. Principes de priorisation

| Critère | Application |
|---------|-------------|
| **Valeur fonctionnelle** | Couvrir d'abord les écrans qui portent le cœur du cycle SAV |
| **Couverture du parcours SAV** | Qualification (P1), planification (P2), terrain (P3/P4), anomalies (P6), pilotage (P7/P8) |
| **Complexité raisonnable pour un premier test MCP** | Éviter un premier écran trop dense (KPI, alertes, multi-profils) |
| **Dépendance aux autres écrans** | Produire les écrans dont d'autres dépendent avant les vues agrégées |
| **Risque métier** | Minimiser le risque d'inventer statuts, parcours ou règles de source de vérité |
| **Valeur de démonstration** | Montrer rapidement la méthode Penpot SFIA sur un écran représentatif |
| **Capacité à valider la méthode Penpot SFIA** | Tester lecture specs Git → frame Penpot → composants réutilisables |
| **Distinction desktop / dashboard / mobile** | Regrouper par page Penpot cible sans mélanger les contextes |
| **Réutilisabilité des composants** | Prioriser les écrans qui font émerger badges, tableaux, headers réutilisables |

---

## 3. Rappel des pages Penpot cibles

| Page Penpot | Usage |
|-------------|-------|
| `03 — Screens` | Écrans desktop / tablette : liste, fiches, planning, anomalies, reprise manuelle |
| `04 — Dashboards` | Dashboard SAV opérationnel, vue dirigeant consolidée |
| `05 — Mobile` | Fiche intervention terrain, compte rendu mobile |
| `06 — Components` | Bibliothèque composants réutilisables (badges STAT, alertes, cartes) |

Pages complémentaires (hors production écran directe) : `00 — Cover`, `01 — Design principles`, `02 — User journeys`, `99 — Archive`.

---

## 4. Liste des écrans à produire

| ID | Écran | Page Penpot cible | Priorité métier | Complexité | Valeur pilote | Statut |
|----|-------|-------------------|-----------------|------------|---------------|--------|
| E1 | Dashboard SAV | `04 — Dashboards` | Haute | **Élevée** | Moyenne | À produire |
| E2 | Liste demandes | `03 — Screens` | Haute | **Faible–moyenne** | **Élevée** | **Pilote recommandé** |
| E3 | Fiche demande SAV | `03 — Screens` | Haute | Moyenne | Moyenne | À produire |
| E4 | Planning | `03 — Screens` | Haute | Moyenne | Faible | À produire |
| E5 | Fiche intervention mobile | `05 — Mobile` | Haute | Moyenne | Faible | À produire |
| E6 | Compte rendu mobile | `05 — Mobile` | Haute | Moyenne | Faible | À produire |
| E7 | Suivi erreurs intégration | `03 — Screens` | Haute | Moyenne–élevée | Moyenne | À produire |
| E8 | Détail reprise manuelle | `03 — Screens` | Moyenne | Moyenne | Faible | À produire |
| E9 | Vue dirigeant | `04 — Dashboards` | Moyenne | Élevée | Faible | À produire |

---

## 5. Analyse par écran

### Écran — Dashboard SAV (E1)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P7 Pilotage retards ; accès secondaire P1, P2, P5, P6, P8, P9 |
| Page Penpot cible | `04 — Dashboards` |
| Utilisateur principal | Manager SAV, Responsable SAV |
| Valeur métier | Visibilité opérationnelle quotidienne ; orientation vers dossiers actionnables |
| Complexité design | **Élevée** — KPI top 5–7, alertes STAT-07/STAT-08, trois lectures fonctionnelles |
| Dépendances | Liste demandes, fiches, anomalies déjà représentées pour drill-down cohérent |
| Risques | Représenter le dashboard comme source de vérité ; fusionner STAT-07 et STAT-08 |
| Intérêt pilote | Forte démonstration visuelle, mais **trop risqué en premier écran** |
| Recommandation | **Vague 4** — après écrans opérationnels et anomalies |

### Écran — Liste demandes (E2)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P1 Qualification, P9 Création multi-canal — **point d'accès principal** aux dossiers |
| Page Penpot cible | `03 — Screens` |
| Utilisateur principal | Responsable SAV, Assistant administratif |
| Valeur métier | Parcourir, filtrer, ouvrir les demandes en qualification |
| Complexité design | **Faible–moyenne** — tableau, filtres, badges STAT-01/STAT-02, badge STAT-07 parallèle |
| Dépendances | Peu de dépendances amont ; alimente fiche demande et dashboard |
| Risques | Wording statuts ; confondre liste et source de vérité |
| Intérêt pilote | **Élevé** — structure claire, composants réutilisables, test MCP maîtrisé |
| Recommandation | **Écran pilote — Vague 1** |

### Écran — Fiche demande SAV (E3)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P1 Qualification — détail dossier, checklist MVP, actions qualification |
| Page Penpot cible | `03 — Screens` |
| Utilisateur principal | Responsable SAV |
| Valeur métier | Cœur métier qualification ; lien vers planning et intervention |
| Complexité design | **Moyenne** — sections, checklist, statuts, actions, historique |
| Dépendances | Liste demandes (navigation entrante) |
| Risques | Inventer champs hors spec ; checklist incomplète ou surchargée |
| Intérêt pilote | Bon second écran — suite logique du pilote |
| Recommandation | **Vague 1** — immédiatement après liste demandes |

### Écran — Planning (E4)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P2 Planification — affectation techniciens, vue jour |
| Page Penpot cible | `03 — Screens` |
| Utilisateur principal | Responsable SAV, Manager SAV |
| Valeur métier | Planifier interventions ; vue **jour par défaut** (écart Figma semaine) |
| Complexité design | **Moyenne** — calendrier / grille jour, cartes intervention, filtres |
| Dépendances | Fiche demande, fiche intervention mobile |
| Risques | Reproduire vue semaine Figma V1 au lieu de la décision atelier (jour) |
| Intérêt pilote | Faible — écart Figma à gérer dès la conception |
| Recommandation | **Vague 2** |

### Écran — Fiche intervention mobile (E5)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P3 Exécution terrain — consultation intervention sur le terrain |
| Page Penpot cible | `05 — Mobile` |
| Utilisateur principal | Technicien |
| Valeur métier | Accès mobile prioritaire atelier ; infos intervention, actions terrain |
| Complexité design | **Moyenne** — layout mobile, sections condensées, actions terrain |
| Dépendances | Planning, fiche demande |
| Risques | Densité mobile ; mélanger desktop et mobile sur même frame |
| Intérêt pilote | Faible — contexte viewport distinct |
| Recommandation | **Vague 2** |

### Écran — Compte rendu mobile (E6)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P4 Clôture locale — CR web, signature optionnelle, STAT-06 |
| Page Penpot cible | `05 — Mobile` |
| Utilisateur principal | Technicien |
| Valeur métier | Clôture intervention ; CR web seul (pas PDF) |
| Complexité design | **Moyenne** — formulaire clôture, signature optionnelle, motif si absence |
| Dépendances | Fiche intervention mobile |
| Risques | Rendre signature obligatoire ; bloquer clôture sur sync CRM |
| Intérêt pilote | Faible — règles métier clôture à respecter strictement |
| Recommandation | **Vague 2** — après fiche intervention mobile |

### Écran — Suivi erreurs intégration (E7)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P6 Anomalie intégration — suivi STAT-08, reprise |
| Page Penpot cible | `03 — Screens` |
| Utilisateur principal | Manager SAV |
| Valeur métier | Visibilité anomalies ; message **métier d'abord** |
| Complexité design | **Moyenne–élevée** — liste anomalies, libellés métier, lien reprise |
| Dépendances | Représentation préalable correcte des statuts et badges STAT-08 |
| Risques | Confondre STAT-08 avec statut métier ; rouvrir intervention visuellement |
| Intérêt pilote | Intéressant mais **dépend d'une base statuts/anomalies posée** |
| Recommandation | **Vague 3** |

### Écran — Détail reprise manuelle (E8)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P6 — complément reprise manuelle MVP |
| Page Penpot cible | `03 — Screens` |
| Utilisateur principal | Manager SAV |
| Valeur métier | Cadrer reprise manuelle absente de Figma V1 |
| Complexité design | **Moyenne** — panneau / fiche complémentaire, actions reprise |
| Dépendances | Suivi erreurs intégration, specs archi fonctionnelle |
| Risques | Inventer parcours reprise non documenté |
| Intérêt pilote | Faible — écran complémentaire, absent Figma V1 |
| Recommandation | **Vague 3** — après suivi erreurs |

### Écran — Vue dirigeant (E9)

| Élément | Détail |
|---------|--------|
| Rôle dans le parcours | P8 Pilotage consolidé — tendances, décision rapide |
| Page Penpot cible | `04 — Dashboards` |
| Utilisateur principal | Dirigeant / Pilotage |
| Valeur métier | Lecture synthétique distincte du dashboard SAV opérationnel |
| Complexité design | **Élevée** — KPI consolidés, tendances, pas de BI technique |
| Dépendances | Dashboard SAV, agrégats cohérents avec écrans opérationnels |
| Risques | Confondre avec dashboard SAV ; ajouter KPI techniques |
| Intérêt pilote | Faible — deuxième écran dashboard, moins urgent |
| Recommandation | **Vague 4** — en dernier |

---

## 6. Écran pilote recommandé

### Recommandation : **Liste demandes (E2)**

| Justification | Détail |
|---------------|--------|
| Écran central du parcours SAV | Point d'accès principal P1 et P9 |
| Complexité maîtrisée | Tableau, filtres, badges — sans KPI ni alertes hiérarchisées |
| Base composants réutilisables | Header, navigation, tableau, badges STAT, filtres → `06 — Components` |
| Statuts STAT-01 à STAT-08 | Permet de poser STAT-01/STAT-02 en liste et badge STAT-07 parallèle, sans surcharge |
| Moins complexe qu'un dashboard | Pas de règle « source de vérité » aussi critique qu'un dashboard |
| Moins spécifique que le mobile | Viewport desktop standard, page `03 — Screens` |
| Préparation aval | Prépare fiche demande, suivi erreurs et dashboard |

**Dashboard SAV (E1)** est plus **démonstratif** visuellement, mais plus **risqué** en premier écran : KPI top 5–7, alertes hiérarchisées STAT-07/STAT-08, distinction trois lectures fonctionnelles, règle « dashboard non source de vérité ».

**Suivi erreurs intégration (E7)** est intéressant fonctionnellement, mais **dépend** d'une représentation préalable fiable des statuts, badges et anomalies — à produire après le pilote structurel.

**Référence Figma V1 :** `06-liste-demandes.png` — référence visuelle non définitive.

---

## 7. Ordre recommandé de production

### Vague 1 — Pilote structurel

| Ordre | Écran | Page Penpot |
|-------|-------|-------------|
| 1 | **Liste demandes** (pilote) | `03 — Screens` |
| 2 | Fiche demande SAV | `03 — Screens` |

### Vague 2 — Parcours opérationnel

| Ordre | Écran | Page Penpot |
|-------|-------|-------------|
| 3 | Planning | `03 — Screens` |
| 4 | Fiche intervention mobile | `05 — Mobile` |
| 5 | Compte rendu mobile | `05 — Mobile` |

### Vague 3 — Supervision / anomalies

| Ordre | Écran | Page Penpot |
|-------|-------|-------------|
| 6 | Suivi erreurs intégration | `03 — Screens` |
| 7 | Détail reprise manuelle | `03 — Screens` |

### Vague 4 — Pilotage

| Ordre | Écran | Page Penpot |
|-------|-------|-------------|
| 8 | Dashboard SAV | `04 — Dashboards` |
| 9 | Vue dirigeant | `04 — Dashboards` |

---

## 8. Composants à préparer dès le pilote

Composants à poser ou esquisser dès la frame **Liste demandes — V1 pilote** (page `03 — Screens`, bibliothèque `06 — Components`) :

| Composant | Usage pilote |
|-----------|--------------|
| Header applicatif | Titre page, contexte utilisateur |
| Navigation principale | Accès liste, planning, dashboard (liens visuels) |
| Tableau de demandes | Colonnes : référence, client, statut, date, canal |
| Badges statuts STAT-01 à STAT-06 | Wording FR unifié (`status-mapping.md`) |
| Indicateur retard STAT-07 | Badge parallèle — **distinct** du statut liste |
| Indicateur anomalie STAT-08 | Badge ou icône — **distinct** de STAT-07 |
| Filtres | Statut, canal, période |
| Recherche | Recherche texte demandes |
| Bouton action primaire | Ex. « Nouvelle demande » ou action contextuelle |
| Cartes synthèse éventuelles | Compteurs légers above the fold (optionnel pilote) |
| Zone message métier | Emplacement pour alertes / info contextuelle |

---

## 9. Garde-fous fonctionnels

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement — pas d'invention |
| STAT-07 ≠ statut métier | Indicateur retard interne — badge parallèle |
| STAT-08 ≠ statut métier | Indicateur anomalie intégration — badge distinct |
| Dashboard non source de vérité | Liste = point d'accès, pas référentiel autonome |
| Clôture locale non bloquée | STAT-06 valide même si sync CRM échoue |
| STAT-08 ne rouvre pas l'intervention | Anomalie ≠ retour cycle SAV |
| Message métier d'abord | Libellés compréhensibles avant détail technique |
| Reprise manuelle MVP | Écran E8 — ne pas sur-concevoir avant Vague 3 |

Voir : `penpot-project-reference.md` §5, `screen-inventory.md` §2.

---

## 10. Préconditions avant première session MCP de maquette

| Précondition | Vérification |
|--------------|--------------|
| Fichier Penpot ouvert | `Nouveau fichier 1` (ou renommé manuellement) dans le navigateur |
| Plugin MCP connecté | État **MCP connected** dans Penpot |
| Test lecture seule | Lister pages et contenu de `03 — Screens` — sans modification |
| Page cible | `03 — Screens` sélectionnée ou accessible |
| Sources Git relues | `screen-functional-specs.md` § Liste demandes ; `screen-inventory.md` §6 |
| Écran pilote validé | **Liste demandes (E2)** |
| Pas de token dans les prompts | Ne pas coller d'URL MCP ni token dans prompts commités |
| Plan limité | **Une seule frame** — Liste demandes V1 pilote |

Voir : [`penpot-cursor-agent-rules.md`](../../../docs/tooling/penpot/penpot-cursor-agent-rules.md) §7.

---

## 11. Résultat attendu de la première session MCP

La première session MCP de maquette devra produire **uniquement** :

| Livrable | Description |
|----------|-------------|
| Frame pilote | `Liste demandes — V1 pilote` sur page `03 — Screens` |
| Fidélité | Layout **low / mid fidelity** — pas de maquette finale |
| Composants | Quelques composants réutilisables esquissés (badges, header, tableau) |
| Statuts | Représentation **prudente** STAT-01, STAT-02, badge STAT-07 |
| Exclusions | Pas de maquette finale ; pas d'export obligatoire |
| Suite | Synthèse des écarts dans Git — tâche suivante (`penpot-first-screen-mcp-instructions.md` puis revue) |

---

## 12. Hors périmètre

Ce document **ne produit pas** :

- production immédiate des 9 écrans ;
- design system complet ;
- maquette finale ;
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

## 13. Prochaine action recommandée

Créer :

**[`penpot-first-screen-mcp-instructions.md`](penpot-first-screen-mcp-instructions.md)**

Objectif : préparer les **instructions MCP Cursor** pour produire l'écran pilote **Liste demandes** dans Penpot (specs à lire, frame cible, composants attendus, garde-fous, prompt type, critères de revue).

---

*Priorisation Interv360 — Penpot Design V2 — Draft.*
