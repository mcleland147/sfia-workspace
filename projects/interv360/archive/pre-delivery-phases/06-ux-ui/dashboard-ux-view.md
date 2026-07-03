# Interv360 — Vues dashboard UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Vues dashboard UX/UI  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif

Ce document **détaille les vues dashboard et pilotage UX/UI** Interv360 : trois lectures par profil (Manager SAV, Technicien, Pilotage / Dirigeant), KPI et alertes prioritaires, liens vers écrans sources, distinction STAT-07 / STAT-08 et gestion de la clôture locale avec sync post-clôture.

Il s'appuie sur :

- le **brief UX/UI validé** (`ux-ui-brief.md`) ;
- la **revue KPI dashboard** (`dashboard-kpi-ux-review.md`) ;
- **Figma V1** comme référence visuelle **non définitive** (`05-dashboard-sav.png`, `12-vue-dirigeant.png`) ;
- les **décisions atelier** (`clarification-workshop-minutes.md`) ;
- les **parcours** `user-journeys.md` ;
- l'**inventaire** `screen-inventory.md` ;
- les **spécifications écran** `screen-functional-specs.md` ;
- l'**architecture fonctionnelle** (`dashboard-and-alerts.md`, `status-and-transitions.md`, `integration-functional-view.md`) ;
- les **ADR structurantes** (ADR-001 à ADR-004).

Ce document **ne produit pas** :

- maquette finale ;
- design system ;
- BI technique ;
- composant front ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- backlog ;
- user stories ;
- tests ;
- delivery.

---

## 2. Principes dashboard

- Le **dashboard** est une **couche de visibilité** — **pas** une source de vérité ; les objets métier (Demande SAV, Intervention, Anomalie) font foi.
- Chaque **KPI** ou **alerte** doit **renvoyer** vers un **objet métier source** et un **écran cible** actionnable.
- Les **KPI sont métier** — pas de latence API, taux d'erreur HTTP, logs techniques ou indicateurs infrastructure.
- Les **alertes** visibles sans scroll sont limitées au **top 5–7**, hiérarchisées ; le reste via **« Voir toutes »** (décision atelier).
- Les **KPI above the fold** sont limités au **top 5–7** (décision atelier).
- **STAT-07** (retard opérationnel) et **STAT-08** (anomalie intégration) restent **distincts** — jamais fusionnés sous un libellé générique.
- **STAT-06** (Clôturée) reste **valide** même si la sync CRM simulée échoue (ADR-004).
- Les **anomalies d'intégration** affichent un **message métier d'abord** ; détail technique secondaire (ADR-003).
- **Figma V1** est une **référence visuelle**, pas une cible finale figée.

---

## 3. Vues dashboard retenues

| Vue | Acteur principal | Objectif | Source | Priorité |
|-----|------------------|----------|--------|----------|
| **Vue Manager SAV** | Manager SAV / Responsable SAV | Visibilité opérationnelle quotidienne ; alertes actionnables | `dashboard-and-alerts.md` §9.1 ; Figma `05-dashboard-sav.png` | **Haute** |
| **Vue Technicien** | Technicien terrain | Accès rapide aux interventions du jour ; actions terrain et clôture | `dashboard-and-alerts.md` §9.2 ; **non couverte** Figma V1 | **Haute** (specs documentaires) |
| **Vue Pilotage / Dirigeant** | Dirigeant / Pilotage | Synthèse consolidée, tendances, alertes macro | `dashboard-and-alerts.md` §9.3 ; Figma `12-vue-dirigeant.png` | **Moyenne** |

**Figma V1** couvre surtout **Manager SAV** (écran Dashboard SAV) et **Dirigeant** (vue dirigeant). La **vue Technicien** n'est **pas** exportée en capture dédiée — elle est **explicitée** dans ce livrable et matérialisée fonctionnellement par la **fiche intervention mobile** comme point d'entrée principal.

---

## 4. Vue 1 — Manager SAV

### 4.1 Description

| Élément | Contenu |
|---------|---------|
| **Objectif** | Piloter l'activité SAV au quotidien : qualification, planification, terrain, clôtures, retards, anomalies — et orienter vers les dossiers à traiter |
| **Acteur principal** | Manager SAV, Responsable SAV / planning |
| **Parcours associés** | P7 Pilotage retards ; P1 Qualification ; P2 Planification ; P5 Sync post-clôture ; P6 Anomalie intégration |
| **Objets visibles** | Demande SAV, Intervention, Planning, Anomalie d'intégration, Synchronisation CRM simulée, Reprise manuelle, Indicateur de pilotage |
| **Statuts / indicateurs** | STAT-01 à STAT-06 (volumes) ; **STAT-07** et **STAT-08** en indicateurs distincts |
| **Écran hébergeur** | **Dashboard SAV** (`screen-functional-specs.md` §4) |
| **Écarts Figma V1** | Renforcer distinction STAT-07/STAT-08 ; expliciter « non source de vérité » ; top 5–7 strict |

### 4.2 KPI prioritaires Manager SAV

| KPI | Objet source | Statut / indicateur | Écran cible | Priorité affichage |
|-----|--------------|---------------------|-------------|-------------------|
| Demandes à qualifier | Demande SAV | STAT-01 | Liste demandes → Fiche demande SAV | Top 5–7 |
| Interventions planifiées | Intervention | STAT-03 | Planning | Top 5–7 |
| Interventions en cours | Intervention | STAT-04 | Fiche intervention mobile / Planning | Top 5–7 |
| Interventions en attente client | Intervention | STAT-05 | Fiche intervention mobile | Secondaire (below fold ou alerte) |
| Interventions en retard | Intervention, Planning | **STAT-07** | Planning → Fiche intervention | Top 5–7 |
| Anomalies d'intégration | Anomalie d'intégration | **STAT-08** | Suivi erreurs intégration | Top 5–7 |
| Synchronisations en attente | Synchronisation CRM simulée | Sync en attente | Suivi erreurs / Fiche intervention | Top 5–7 ou alerte |
| Demandes ouvertes | Demande SAV | STAT-01 + STAT-02 | Liste demandes | Below fold |
| Interventions clôturées (période) | Intervention | STAT-06 | Liste / agrégat | Below fold |
| Charge technicien | Technicien, Planning | Agrégat | Planning | Below fold |

### 4.3 Alertes Manager SAV

| Alerte | Déclencheur fonctionnel | Gravité | Écran cible | Action attendue |
|--------|-------------------------|---------|-------------|-----------------|
| Demande à qualifier ancienne | STAT-01 persistant au-delà seuil | Information / métier | Fiche demande SAV | Qualifier |
| Conflit planning | Chevauchement créneau / technicien | Métier | Planning | Résoudre affectation |
| Intervention en retard | **STAT-07** détecté | Métier | Planning / Fiche intervention | Replanifier ou traiter |
| Anomalie intégration | **STAT-08** actif | Selon gravité ADR-003 | Suivi erreurs intégration | Traiter anomalie |
| Sync post-clôture en attente | Clôture STAT-06, sync non finalisée | Information | Fiche intervention (lecture) | Surveiller |
| Bloquant métier | STAT-08 gravité Bloquant métier | Bloquant métier | Suivi erreurs → Reprise manuelle | Corriger donnée |
| Bloquant sync | STAT-08 gravité Bloquant sync | Bloquant sync | Suivi erreurs → Reprise manuelle | Relancer ou qualifier |
| Reprise à traiter | Reprise manuelle ouverte | Métier / sync | Détail reprise manuelle | Action manager |

### 4.4 Actions Manager SAV

| Action | Écran cible | Objet source |
|--------|-------------|--------------|
| Ouvrir demande | Fiche demande SAV | Demande SAV |
| Ouvrir intervention | Fiche intervention mobile / Planning | Intervention |
| Ouvrir planning | Planning | Planning |
| Ouvrir anomalie | Suivi erreurs intégration | Anomalie d'intégration |
| Accéder reprise manuelle | Détail reprise manuelle | Reprise manuelle |
| Voir toutes les alertes | Liste alertes étendue (dashboard) | Indicateur de pilotage |

### 4.5 États de la vue

| État | Description |
|------|-------------|
| Nominal | KPI et alertes dans limite top 5–7 |
| Aucune alerte prioritaire | Message explicite ou état calme |
| Retards dominants | STAT-07 mis en avant — distinct STAT-08 |
| Anomalies dominantes | STAT-08 par gravité — lien reprise |
| Surcharge | Top 5–7 + « Voir toutes » obligatoire |

### 4.6 Garde-fous

- **Top 5–7** KPI et alertes above the fold.
- Dashboard **non source de vérité**.
- **STAT-07 ≠ STAT-08**.
- Toute action vers **objet source**.

---

## 5. Vue 2 — Technicien

### 5.1 Description

| Élément | Contenu |
|---------|---------|
| **Objectif** | Donner au technicien une **lecture terrain** de ses interventions : du jour, à démarrer, en attente, à clôturer — sans surcharge pilotage manager |
| **Acteur principal** | Technicien terrain |
| **Parcours associés** | P3 Intervention terrain ; P4 Clôture locale ; P5/P6 en **lecture seule** post-clôture si anomalie sync |
| **Objets visibles** | Intervention, Client, Équipement / site, Planning (créneaux propres), Historique |
| **Statuts visibles** | STAT-03, STAT-04, STAT-05 ; STAT-06 + éventuel STAT-08 en lecture |
| **Écran hébergeur** | **Vue tableau de bord technicien** (composante mobile) + **Fiche intervention mobile** comme hub principal |
| **Couverture Figma V1** | **Non couverte** par capture dashboard dédiée — parcours via `09-fiche-intervention-mobile.png` |

### 5.2 Informations prioritaires Technicien

| Information | Objet source | Statut / indicateur | Écran cible | Priorité |
|-------------|--------------|---------------------|-------------|----------|
| Interventions du jour | Intervention, Planning | STAT-03, STAT-04 | Fiche intervention mobile | **Principal** |
| Intervention prochaine | Intervention, Planning | STAT-03 | Fiche intervention mobile | **Principal** |
| Interventions en attente client | Intervention | STAT-05 | Fiche intervention mobile | **Principal** |
| Interventions à clôturer | Intervention | STAT-04 (prêt clôture) | Compte rendu mobile | **Principal** |
| Anomalie sync post-clôture | Anomalie d'intégration | STAT-06 + **STAT-08** | Fiche intervention (lecture seule) | Visible si concerné |
| Contexte client / site | Client, Équipement / site | — | Fiche intervention mobile | **Principal** |

### 5.3 Alertes Technicien

| Alerte | Déclencheur fonctionnel | Écran cible | Action attendue |
|--------|-------------------------|-------------|-----------------|
| Intervention à démarrer | STAT-03, créneau atteint | Fiche intervention mobile | Démarrer → STAT-04 |
| Attente client à reprendre | STAT-05 persistant | Fiche intervention mobile | Reprendre → STAT-04 |
| CR à compléter | STAT-04, conditions clôture partielles | Compte rendu mobile | Saisir CR |
| Signature absente sans motif | Formulaire CR incomplet | Compte rendu mobile | Renseigner motif |
| Anomalie sync post-clôture | STAT-06 + STAT-08 | Fiche intervention (lecture) | **Aucune** action terrain — info manager |

### 5.4 Actions Technicien

| Action | Écran cible | Objet source |
|--------|-------------|--------------|
| Ouvrir fiche intervention | Fiche intervention mobile | Intervention |
| Démarrer intervention | Fiche intervention mobile | Intervention |
| Mettre en attente client | Fiche intervention mobile | Intervention |
| Reprendre intervention | Fiche intervention mobile | Intervention |
| Ouvrir compte rendu | Compte rendu mobile | Compte rendu |
| Clôturer localement | Compte rendu mobile | Intervention → STAT-06 |

### 5.5 États de la vue

| État | Description |
|------|-------------|
| Journée nominale | Interventions planifiées / en cours visibles |
| Aucune intervention du jour | Message « Aucune intervention prévue » |
| Attente client en suspens | Liste STAT-05 |
| Post-clôture avec anomalie sync | STAT-06 + STAT-08 — lecture seule, message rassurant |

### 5.6 Garde-fous

- **Mobile prioritaire** — pas de dashboard desktop complexe technicien MVP.
- **Pas de dashboard technique** (logs, codes erreur).
- **STAT-08** visible en **lecture seule** post-clôture — pas de réouverture auto.
- Pas d'action manager (reprise manuelle) sur vue technicien.

---

## 6. Vue 3 — Pilotage / Dirigeant

### 6.1 Description

| Élément | Contenu |
|---------|---------|
| **Objectif** | Synthèse consolidée pour **décision** : volumes, tendances, retards et anomalies agrégés — horizon plus large que le SAV opérationnel |
| **Acteur principal** | Dirigeant, Pilotage / supervision |
| **Parcours associés** | P8 Pilotage consolidé ; P7 Retards (vue agrégée) |
| **Objets visibles** | Indicateur de pilotage, Intervention (agrégats), Anomalie (agrégats), Historique |
| **Écran hébergeur** | **Vue dirigeant** (`screen-functional-specs.md` §5) |
| **Distinction Manager SAV** | SAV = actionnable court terme ; Pilotage = synthèse et tendances — **écrans séparés** |
| **Écarts Figma V1** | Aligner agrégats avec `dashboard-and-alerts.md` §9.3 ; drill-down à formaliser |

### 6.2 KPI prioritaires Pilotage

| KPI | Objet source | Statut / indicateur | Écran cible | Priorité |
|-----|--------------|---------------------|-------------|----------|
| Volume demandes | Demande SAV | Agrégat STAT-01/02 | Vue dirigeant / drill-down Liste | Top 5–7 |
| Volume interventions clôturées | Intervention | STAT-06 agrégé | Vue dirigeant | Top 5–7 |
| Volume / taux retards | Intervention, Planning | **STAT-07** agrégé | Vue dirigeant → Dashboard SAV | Top 5–7 |
| Volume anomalies | Anomalie d'intégration | **STAT-08** agrégé | Vue dirigeant → Suivi erreurs | Top 5–7 |
| Tendance clôture | Intervention | STAT-06 période | Vue dirigeant | Top 5–7 |
| Charge opérationnelle synthétique | Technicien, Planning | Agrégat | Vue dirigeant | Secondaire |
| Sync en anomalie ou en attente | Synchronisation CRM simulée | STAT-08 + sync attente | Suivi erreurs | Secondaire |

### 6.3 Alertes Pilotage

| Alerte | Déclencheur fonctionnel | Niveau | Écran cible | Lecture attendue |
|--------|-------------------------|--------|-------------|------------------|
| Hausse retards | STAT-07 au-dessus seuil période | Attention | Dashboard SAV / Planning | Tendance, pas action terrain |
| Hausse anomalies | STAT-08 volume élevé | Attention | Suivi erreurs intégration | Santé intégration |
| Volume clôtures inhabituel | Écart vs période précédente | Information | Vue dirigeant | Analyse tendance |
| Charge élevée | Agrégat planning / techniciens | Information | Dashboard SAV | Délégation opérationnelle |
| Anomalies bloquantes | STAT-08 Bloquant métier ou sync | Priorité | Suivi erreurs | Escalade lecture |

### 6.4 Actions Pilotage

| Action | Écran cible | Objet source |
|--------|-------------|--------------|
| Consulter tendance | Vue dirigeant | Indicateur de pilotage |
| Filtrer période | Vue dirigeant | Agrégats |
| Drill-down vers dashboard SAV | Dashboard SAV | Vue opérationnelle |
| Drill-down vers anomalies | Suivi erreurs intégration | Anomalie d'intégration |
| Drill-down vers retards | Dashboard SAV / Planning | Intervention + STAT-07 |

### 6.5 États de la vue

| État | Description |
|------|-------------|
| Nominal | KPI consolidés disponibles |
| Absence données période | Message explicite |
| Pics retards / anomalies | Alertes synthétiques hiérarchisées |

### 6.6 Garde-fous

- **Pas de BI technique** ni KPI infrastructure.
- **Vue distincte** du Dashboard SAV.
- Dashboard **non source de vérité** — drill-down vers objets si détail requis.

---

## 7. Matrice vues / KPI

| KPI | Manager SAV | Technicien | Pilotage |
|-----|:-----------:|:----------:|:--------:|
| Demandes à qualifier | **Principal** | Non concerné | Secondaire |
| Interventions planifiées | **Principal** | **Principal** | Secondaire |
| Interventions en cours | **Principal** | **Principal** | Secondaire |
| Interventions en attente client | Secondaire | **Principal** | Non concerné |
| Interventions en retard (STAT-07) | **Principal** | Visible | **Principal** |
| Anomalies intégration (STAT-08) | **Principal** | Visible (lecture) | **Principal** |
| Sync en attente | **Principal** | Visible (lecture) | Secondaire |
| Interventions clôturées | Secondaire | Non concerné | **Principal** |
| Volume demandes | Secondaire | Non concerné | **Principal** |
| Tendance clôture | Non concerné | Non concerné | **Principal** |
| Charge technicien | Secondaire | Non concerné | Secondaire |
| Interventions du jour | Secondaire | **Principal** | Non concerné |
| Interventions à clôturer | Secondaire | **Principal** | Non concerné |

---

## 8. Matrice vues / alertes

| Alerte | Manager SAV | Technicien | Pilotage |
|--------|:-----------:|:----------:|:--------:|
| Demande à qualifier ancienne | **Principal** | Non concerné | Visible |
| Conflit planning | **Principal** | Non concerné | Non concerné |
| Intervention en retard (STAT-07) | **Principal** | Visible | **Principal** |
| Anomalie intégration (STAT-08) | **Principal** | Visible (lecture) | **Principal** |
| Sync post-clôture en attente | **Principal** | Visible (lecture) | Visible |
| Bloquant métier | **Principal** | Non concerné | Visible |
| Bloquant sync | **Principal** | Non concerné | Visible |
| Reprise à traiter | **Principal** | Non concerné | Visible |
| Intervention à démarrer | Secondaire | **Principal** | Non concerné |
| Attente client à reprendre | Secondaire | **Principal** | Non concerné |
| CR à compléter | Non concerné | **Principal** | Non concerné |
| Signature absente sans motif | Non concerné | **Principal** | Non concerné |
| Hausse retards / anomalies | Non concerné | Non concerné | **Principal** |
| Charge élevée | Secondaire | Non concerné | **Principal** |

---

## 9. Matrice dashboard / écrans sources

| KPI ou alerte | Écran source cible | Objet métier source | Rôle du lien |
|---------------|-------------------|---------------------|--------------|
| Demandes à qualifier | Liste demandes → Fiche demande SAV | Demande SAV | Qualifier STAT-01 → STAT-02 |
| Interventions planifiées / en cours | Planning, Fiche intervention mobile | Intervention | Exécuter / replanifier |
| Retard STAT-07 | Planning, Fiche intervention mobile | Intervention, Planning | Traiter écart planning |
| Anomalie STAT-08 | Suivi erreurs intégration | Anomalie d'intégration | Traiter sync |
| Reprise manuelle | Détail reprise manuelle | Reprise manuelle | Corriger / relancer |
| Sync en attente | Fiche intervention (lecture), Suivi erreurs | Synchronisation CRM simulée | Surveiller transmission |
| Clôture / CR technicien | Compte rendu mobile | Compte rendu, Intervention | Clôturer STAT-06 |
| Agrégats pilotage | Vue dirigeant → drill-down | Indicateur de pilotage | Lecture décisionnelle |
| Opérationnel manager | Dashboard SAV | Multiple objets | Hub quotidien |
| Conflit planning | Planning | Planning, Technicien | Résoudre affectation |

---

## 10. Distinction STAT-07 / STAT-08 dans le dashboard

### Principes

- **STAT-07** = **retard opérationnel** — écart entre planning attendu et situation réelle (intervention planifiée, en cours ou en attente client).
- **STAT-08** = **anomalie d'intégration** — problème de synchronisation CRM simulée post-clôture (ou flux significatif).
- Ils peuvent apparaître **dans la même vue** (ex. Dashboard SAV) mais **ne doivent pas être fusionnés** (libellé, couleur, icône, filtre).
- **STAT-07** pointe vers **Planning** et **Fiche intervention**.
- **STAT-08** pointe vers **Suivi erreurs intégration** et **Détail reprise manuelle**.
- Ils **ne remplacent jamais** le statut métier principal (STAT-03, STAT-04, STAT-06, etc.).
- **STAT-08** peut **coexister** avec **STAT-06** — les deux affichés explicitement.

### Tableau de référence

| Indicateur | Signification | Objet source | Écran cible | À ne pas faire |
|------------|---------------|--------------|-------------|----------------|
| **STAT-07** En retard | Retard opérationnel / planning | Intervention, Planning | Planning, Fiche intervention | Confondre avec erreur sync ; remplacer statut Planifiée/En cours |
| **STAT-08** Anomalie d'intégration | Erreur sync CRM simulée | Anomalie d'intégration, Sync CRM simulée | Suivi erreurs, Reprise manuelle | Afficher code technique en premier ; rouvrir intervention ; annuler STAT-06 |

---

## 11. Gestion STAT-06 + sync post-clôture

### Principes

- **STAT-06** = clôture **locale valide** dans Interv360 (CR, résultat, trace).
- **Sync CRM simulée** = traitement **post-clôture** — ne conditionne pas STAT-06 (ADR-002, ADR-004).
- **Sync KO** n'annule **pas** STAT-06 ; peut créer ou maintenir **STAT-08**.
- Le dashboard doit afficher la situation **sans ambiguïté** : clôture enregistrée + éventuel problème sync séparé.
- Messages **rassurants** pour le technicien : la clôture locale est conservée.

### Tableau des situations

| Situation | Affichage dashboard | Écran cible | Message métier (exemple) |
|-----------|---------------------|-------------|--------------------------|
| Clôture, sync en attente | STAT-06 + indicateur sync attente | Fiche intervention (lecture) | « Clôture enregistrée — synchronisation en cours » |
| Clôture, sync OK | STAT-06, pas de STAT-08 actif | Fiche intervention (lecture) | « Clôture transmise » |
| Clôture, sync KO / STAT-08 | STAT-06 + **STAT-08** distinct | Suivi erreurs intégration | « Clôture enregistrée — problème de synchronisation à traiter par le manager » |
| Anomalie traitée | STAT-06, STAT-08 retiré ou historisé | Suivi erreurs | « Synchronisation traitée — clôture locale conservée » |
| Anomalie acceptée | STAT-06, anomalie acceptée | Détail reprise manuelle | « Anomalie acceptée — clôture locale inchangée » |

---

## 12. Écarts Figma V1 / dashboard fonctionnel

| Sujet | Figma V1 | Architecture fonctionnelle | Traitement dans cette reprise |
|-------|----------|---------------------------|------------------------------|
| Manager SAV | `05-dashboard-sav.png` — couvert | `dashboard-and-alerts.md` §9.1 | Specs dans §4 ; distinction STAT-07/08 renforcée |
| Dirigeant / Pilotage | `12-vue-dirigeant.png` — couvert | §9.3 vue supervision | Specs dans §6 ; drill-down formalisé |
| Vue Technicien | **Non couverte** | §9.2 besoins technicien | **Explicitée** §5 — hub fiche intervention mobile |
| STAT-07 / STAT-08 | Partiellement distincts visuellement | Distinction obligatoire ADR-001/003 | §10 — ne pas fusionner |
| Dashboard source de vérité | Implicite actionnable | Non source de vérité ADR | Garde-fous §2, liens objets source |
| Top 5–7 KPI/alertes | 12 KPI documentés brief | Priorisation atelier 5–7 | §4, §6 — above the fold |
| Figma V1 définitive | Présentable, non définitive | Archi fonctionnelle prime | Référence visuelle uniquement |
| Sync post-clôture + STAT-06 | Peu explicite | ADR-004 coexistence | §11 — messages métier |

---

## 13. Points de vigilance transverses

- Ne pas transformer le dashboard en **BI technique** ou tableau de bord infrastructure.
- Ne pas créer de **nouveaux KPI hors métier** dans ce livrable.
- Ne pas produire de **maquette** ni **composant front**.
- Ne pas créer de **backlog** ou user stories.
- Garder les **liens vers objets source** sur chaque KPI et alerte.
- Garder **STAT-07** et **STAT-08** **distincts**.
- Conserver **STAT-06** comme **clôture locale valide**.
- Respecter **ADR-001 à ADR-004**.
- Ne **pas modifier** les captures Figma V1.

---

## 14. Conclusion

Les **trois vues dashboard** (Manager SAV, Technicien, Pilotage / Dirigeant) sont stabilisées avec :

- KPI et alertes **prioritaires** par profil ;
- **matrices** vues × KPI, vues × alertes, dashboard × écrans sources ;
- **distinction STAT-07 / STAT-08** et **gestion STAT-06 + sync post-clôture** ;
- **écarts Figma V1** documentés — vue Technicien explicitée, distinction indicateurs renforcée.

Ces vues alimentent :

| Livrable | Apport |
|----------|--------|
| `ux-ui-summary.md` | Synthèse consolidée reprise UX/UI |
| `ux-ui-cycle-closure.md` | Clôture cycle documentaire |
| Phase ultérieure maquette / backlog | **Non déclenchée** |

### Prochaine action recommandée

Produire :

**`projects/interv360/06-ux-ui/ux-ui-summary.md`**

**Objectif** : consolider l'ensemble de la reprise UX/UI (parcours, écrans, dashboard, garde-fous, écarts Figma V1) — sans nouvelles décisions structurantes ni delivery.

---

*Vues dashboard UX/UI — Interv360 — SFIA — Draft.*
