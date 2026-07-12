# Interv360 — Parcours utilisateurs UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Parcours utilisateurs  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif

Ce document **détaille les parcours utilisateurs prioritaires** de la reprise UX/UI Interv360.

Il s'appuie sur :

- le **brief UX/UI validé** (`ux-ui-brief.md`, `ux-ui-brief-validation.md`) ;
- les **décisions atelier** (`clarification-workshop-minutes.md`) ;
- **Figma V1** comme référence visuelle **non définitive** (`2026-06-28-figma-v1-closure-summary.md`) ;
- l'**architecture fonctionnelle détaillée** (`05-functional-architecture/`) ;
- les **ADR structurantes** (ADR-001 à ADR-004) ;
- le **cadrage** `ux-ui-reprise-scope.md` et l'**état des lieux** `ux-ui-reprise-analysis.md`.

Chaque parcours décrit une **progression utilisateur** alignée sur statuts, objets métier et écrans MVP — sans repartir de zéro ni redébattre les décisions atelier.

Ce document **ne produit pas** :

- user stories ;
- backlog ;
- tests ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- BPMN ;
- maquette finale ;
- composant front ;
- delivery.

---

## 2. Principes de construction des parcours

- Un **parcours** décrit une progression utilisateur orientée objectif métier — **pas** une user story au format « En tant que… je veux… afin de… ».
- Les parcours sont **alignés sur les statuts STAT-01 à STAT-08** (`status-and-transitions.md`, ADR-001).
- Les parcours **renvoient vers les objets métier source** (Demande SAV, Intervention, Compte rendu, etc.) — le dashboard n'est qu'un point d'entrée.
- **STAT-07** (retard) et **STAT-08** (anomalie intégration) sont des **indicateurs internes** — ils ne remplacent pas le statut métier principal.
- Les **erreurs d'intégration** sont **lisibles métier** en premier ; le détail technique reste secondaire (ADR-003, décision atelier).
- Le **dashboard oriente** vers l'objet source (fiche demande, fiche intervention, anomalie) — il n'est pas source de vérité.
- La **clôture locale** (STAT-06) reste **valide** même si la synchronisation CRM simulée échoue (ADR-004).
- **Figma V1** est une **référence visuelle**, pas une contrainte finale ni un livrable de ce document.

---

## 3. Vue d'ensemble des parcours

| # | Parcours | Acteur principal | Statuts / indicateurs concernés | Priorité | Écran(s) associés |
|---|----------|------------------|--------------------------------|----------|-------------------|
| 1 | Qualification demande | Responsable SAV | STAT-01 → STAT-02 | **Haute** | Liste demandes, Fiche demande SAV |
| 2 | Planification et affectation | Responsable SAV | STAT-02 → STAT-03 ; STAT-07 si retard | **Haute** | Planning, Fiche demande |
| 3 | Intervention terrain | Technicien | STAT-03 → STAT-04 ⇄ STAT-05 | **Haute** | Fiche intervention mobile |
| 4 | Clôture locale | Technicien | STAT-04 → STAT-06 | **Haute** | Compte rendu mobile |
| 5 | Synchronisation post-clôture | Manager SAV / système | STAT-06 ; sync OK / attente / KO | **Moyenne** | Suivi erreurs intégration, fiche intervention |
| 6 | Traitement anomalie intégration | Manager SAV | STAT-08 (coexiste avec STAT-06) | **Haute** | Suivi erreurs intégration, Détail reprise manuelle |
| 7 | Pilotage retards | Manager SAV | STAT-07 (indicateur) | **Moyenne** | Dashboard SAV, Planning |
| 8 | Pilotage consolidé | Dirigeant / Pilotage | Agrégats pilotage ; STAT-07 visible | **Moyenne** | Vue dirigeant |
| 9 | Création demande multi-canal | Assistant admin / Responsable SAV | → STAT-01 | **Basse** | Liste demandes, Fiche demande SAV |

---

## 4. Parcours 1 — Qualification demande

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Responsable SAV |
| **Objectif utilisateur** | Rendre une demande exploitable pour planification en validant les informations minimales et en arbitrant un éventuel doublon |
| **Point de départ** | Demande en **STAT-01 — À qualifier** (créée via canal CRM simulé, email sécurisé ou saisie manuelle) |
| **Point d'arrivée** | Demande en **STAT-02 — Qualifiée**, prête à être planifiée |
| **Statuts concernés** | STAT-01 → STAT-02 |
| **Objets métier** | Demande SAV, Client, Équipement / site ; Intervention éventuelle (non créée à ce stade) |
| **Écran(s) associés** | Liste demandes ; Fiche demande SAV |
| **Décision UX associée** | Checklist **minimale MVP** (atelier) — pas de fiche surchargée |

### Règles fonctionnelles

- Données minimales obligatoires (RG-C05) : client, contact, canal, motif, priorité, adresse/site, créneau souhaité si disponible.
- Anti-doublon (RG-C04) : signalement si combinaison client + référence + date approximative + motif — **pas de fusion automatique** ; arbitrage manuel (fusion ou ignorer).
- La qualification ne crée pas encore l'exécution terrain.
- Wording statut unifié : « À qualifier » → « Qualifiée » (`status-mapping.md`).

### États visibles

- Badge **À qualifier** sur liste et fiche.
- Indicateur canal d'origine (CRM, email, saisie manuelle).
- Alerte si demande ancienne en STAT-01 (seuil à définir — visible dashboard).

### Erreurs ou cas particuliers

- Données minimales incomplètes → qualification impossible ; champs manquants signalés.
- Doublon potentiel détecté → proposition de fusion ou ignorer, sans blocage silencieux.
- Email non authentifié → rejet ou qualification explicite (parcours création multi-canal).

### Sortie du parcours

Demande **Qualifiée** ; le Responsable SAV peut enchaîner vers planification (parcours 2).

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Consulter les demandes à qualifier | Demande SAV | STAT-01 visible | Liste filtrée ou alerte dashboard |
| 2 | Ouvrir une fiche demande | Demande SAV, Client, Équipement / site | STAT-01 | Contexte demande affiché |
| 3 | Vérifier / compléter la checklist minimale | Champs RG-C05 | STAT-01 | Champs obligatoires renseignés |
| 4 | Traiter un signalement doublon si présent | Demande SAV (doublon) | STAT-01 | Fusion ou ignore tracé |
| 5 | Valider la qualification | Demande SAV | STAT-01 → STAT-02 | Demande **Qualifiée** |

**Garde-fous** : ne pas transformer la checklist en modèle de données ; ne pas créer de ticket backlog ; ne pas produire de maquette.

---

## 5. Parcours 2 — Planification et affectation

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Responsable SAV |
| **Objectif utilisateur** | Positionner une intervention sur le planning et affecter un technicien |
| **Point de départ** | Demande **STAT-02 — Qualifiée** |
| **Point d'arrivée** | Intervention **STAT-03 — Planifiée** |
| **Statuts concernés** | STAT-02 → STAT-03 ; **STAT-07** si retard détecté |
| **Objets métier** | Intervention, Technicien, Planning, Demande SAV (lien) |
| **Écran(s) associés** | Planning (vue **jour par défaut**) ; Fiche demande |
| **Décision UX associée** | Vue **jour par défaut** ; semaine en lecture secondaire |

### Règles fonctionnelles

- Créneau ou journée défini ; technicien affecté.
- Conflits de créneau visibles en un coup d'œil (brief §4).
- STAT-07 peut apparaître si écart planning / réalité — **indicateur parallèle**, pas remplacement de STAT-03.

### États visibles

- Demande **Qualifiée** ; intervention **Planifiée** sur planning jour.
- Badge retard **STAT-07** si applicable (distinct du statut Planifiée).

### Erreurs ou cas particuliers

- Conflit créneau / technicien → signalé avant validation.
- Retard planifié → STAT-07 visible sur planning et dashboard.

### Sortie du parcours

Intervention planifiée ; technicien notifié (fonctionnellement) ; accès parcours terrain (parcours 3).

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Ouvrir le planning (vue jour) | Planning | — | Créneaux du jour affichés |
| 2 | Sélectionner une demande qualifiée | Demande SAV | STAT-02 | Demande éligible à planification |
| 3 | Choisir créneau et technicien | Intervention, Technicien, Planning | STAT-02 | Affectation préparée |
| 4 | Vérifier conflits éventuels | Planning | — | Conflit signalé ou absent |
| 5 | Confirmer la planification | Intervention | STAT-02 → STAT-03 | Intervention **Planifiée** |
| 6 | *(Si retard)* Constater un retard | Intervention, Planning | STAT-07 en indicateur | Retard visible sans changer STAT-03 |

**Garde-fous** : STAT-07 est un indicateur de retard, pas le statut principal ; planning jour par défaut ; pas de modèle technique de planning.

---

## 6. Parcours 3 — Intervention terrain

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Technicien |
| **Objectif utilisateur** | Exécuter l'intervention avec le contexte client complet, gérer une éventuelle attente client |
| **Point de départ** | Intervention **STAT-03 — Planifiée** |
| **Point d'arrivée** | Intervention **STAT-04 — En cours** (ou **STAT-05 — En attente client** temporairement) |
| **Statuts concernés** | STAT-03 → STAT-04 ⇄ STAT-05 |
| **Objets métier** | Intervention, Équipement / site, Client, Historique |
| **Écran(s) associés** | Fiche intervention **mobile** (prioritaire) |
| **Décision UX associée** | **Mobile technicien prioritaire** ; desktop secondaire consultation |

### Règles fonctionnelles

- Contexte client accessible en ≤ 3 actions (brief §4).
- Démarrage intervention : STAT-03 → STAT-04.
- Attente client : STAT-04 → STAT-05 ; reprise : STAT-05 → STAT-04.
- STAT-05 → STAT-06 **interdit** directement — reprise obligatoire avant clôture.

### États visibles

- **Planifiée**, **En cours**, **En attente client** — libellés unifiés FR.
- Historique des actions terrain.

### Erreurs ou cas particuliers

- Blocage client → passage STAT-05 sans clôturer.
- Reprise après attente → retour STAT-04.

### Sortie du parcours

Intervention **En cours** prête pour clôture (parcours 4), ou **En attente client** en suspens pilotable.

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Ouvrir la fiche intervention mobile | Intervention, Client, Équipement / site | STAT-03 | Contexte terrain complet |
| 2 | Démarrer l'intervention | Intervention | STAT-03 → STAT-04 | Intervention **En cours** |
| 3 | Exécuter les actions terrain | Intervention, Historique | STAT-04 | Actions tracées |
| 4a | *(Option)* Mettre en attente client | Intervention | STAT-04 → STAT-05 | Attente documentée |
| 4b | *(Option)* Reprendre après attente | Intervention | STAT-05 → STAT-04 | Reprise **En cours** |
| 5 | Accéder à la clôture | Intervention | STAT-04 | Enchaînement parcours 4 |

**Garde-fous** : mobile prioritaire ; pas de composant front ; attente client ne clôture pas l'intervention.

---

## 7. Parcours 4 — Clôture locale

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Technicien |
| **Objectif utilisateur** | Documenter l'intervention et clôturer localement avec trace complète |
| **Point de départ** | Intervention **STAT-04 — En cours** |
| **Point d'arrivée** | Intervention **STAT-06 — Clôturée** (clôture locale valide) |
| **Statuts concernés** | STAT-04 → STAT-06 |
| **Objets métier** | Compte rendu, Résultat d'intervention, Signature, Motif d'absence de signature, Historique, Intervention |
| **Écran(s) associés** | Compte rendu **mobile** |
| **Décisions UX** | CR **web seul MVP** (pas PDF) ; **signature optionnelle** ; motif obligatoire si signature absente |

### Règles fonctionnelles

- CR obligatoire ; résultat d'intervention obligatoire ; responsable et date/heure obligatoires.
- Signature optionnelle (RG-R02) ; si absente → motif d'absence obligatoire (RG-R05).
- Sync CRM simulée **post-clôture**, **non bloquante** (ADR-004).
- Historique conservé.

### États visibles

- Formulaire CR mobile ; indicateur signature présente / absente.
- Après validation : badge **Clôturée** (STAT-06).

### Erreurs ou cas particuliers

- Champs obligatoires manquants → clôture impossible ; message métier clair.
- Absence signature sans motif → blocage clôture (motif requis).

### Sortie du parcours

Intervention **Clôturée** localement ; déclenchement fonctionnel sync post-clôture (parcours 5) sans conditionner STAT-06.

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Ouvrir le compte rendu depuis la fiche intervention | Intervention | STAT-04 | Formulaire CR affiché |
| 2 | Saisir le compte rendu et le résultat | Compte rendu, Résultat d'intervention | STAT-04 | Contenu CR renseigné |
| 3 | Capturer la signature ou renseigner le motif d'absence | Signature ou Motif absence signature | STAT-04 | Trace signature ou justification |
| 4 | Valider la clôture locale | Intervention, Historique | STAT-04 → STAT-06 | Intervention **Clôturée** |
| 5 | *(Système)* Lancer la sync post-clôture | Synchronisation CRM simulée | STAT-06 maintenu | Sync déclenchée sans bloquer clôture |

**Garde-fous** : STAT-06 reste valide même si sync KO ; clôture locale ne dépend pas du CRM simulé ; pas d'export PDF obligatoire en MVP.

---

## 8. Parcours 5 — Synchronisation post-clôture

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Manager SAV (suivi) ; système représenté fonctionnellement (transmission) |
| **Objectif utilisateur** | Vérifier que la clôture locale a été transmise vers la cible CRM simulée, ou traiter un écart |
| **Point de départ** | Intervention **STAT-06 — Clôturée** |
| **Point d'arrivée** | Sync **OK**, **en attente**, ou **KO** avec éventuelle création STAT-08 |
| **Objets métier** | Synchronisation CRM simulée, Intervention, Compte rendu, Historique |
| **Écran(s) associés** | Suivi erreurs intégration ; fiche intervention (lecture statut sync) |

### Règles fonctionnelles

- Sync **après** clôture locale uniquement (ADR-002).
- CRM simulé **non source de vérité** — Interv360 l'est.
- Résultats possibles : sync réussie, rejet fonctionnel, timeout, sync en attente (`integration-functional-view.md` §6).
- Sync KO **ne dévalide pas** STAT-06.

### États visibles

- Trace succès / attente / échec sur fiche ou liste anomalies.
- STAT-06 inchangé ; STAT-08 si anomalie significative.

### Sortie du parcours

Transmission aboutie, ou anomalie orientant vers parcours 6 (traitement STAT-08).

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | *(Système)* Transmettre la clôture vers CRM simulé | Synchronisation CRM simulée, Intervention | STAT-06 | Tentative de sync enregistrée |
| 2a | *(Résultat OK)* Constater la transmission réussie | Historique | STAT-06 | Trace succès |
| 2b | *(Résultat attente)* Constater sync non finalisée | Synchronisation CRM simulée | STAT-06 | Suivi possible au dashboard |
| 2c | *(Résultat KO)* Constater l'échec | Anomalie d'intégration | STAT-06 + STAT-08 | Anomalie visible, clôture conservée |
| 3 | *(Manager)* Consulter le statut de sync | Intervention, Historique | STAT-06 | Visibilité sans réouverture intervention |

**Garde-fous** : pas d'API ; pas de payload JSON ; pas de solution technique d'intégration ; sync KO ne dévalide pas STAT-06.

---

## 9. Parcours 6 — Traitement anomalie intégration

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Manager SAV |
| **Objectif utilisateur** | Comprendre une anomalie de synchronisation et la traiter via reprise manuelle |
| **Point de départ** | Anomalie active — indicateur **STAT-08** (souvent avec intervention **STAT-06**) |
| **Point d'arrivée** | Anomalie traitée, historisée ou acceptée ; STAT-08 retiré ou maintenu selon résultat |
| **Indicateur** | STAT-08 — Anomalie d'intégration |
| **Objets métier** | Anomalie d'intégration, Gravité d'anomalie, Reprise manuelle, Historique, Intervention |
| **Écran(s) associés** | Suivi erreurs intégration ; Détail reprise manuelle (à cadrer en specs écran) |
| **Décision UX** | **Message métier d'abord** ; détail technique secondaire (accordéon / lien admin) |

### Gravités (ADR-003)

| Gravité | Signification |
|---------|---------------|
| Information | Écart non bloquant ou avertissement |
| Bloquant métier | Information métier empêchant transmission cohérente |
| Bloquant sync | Transmission impossible ou rejetée |

### Actions possibles (reprise manuelle MVP)

Corriger une donnée ; compléter une information ; relancer la synchronisation ; accepter l'anomalie ; clôturer le traitement.

### Règles fonctionnelles

- STAT-08 **ne remplace pas** STAT-06 ; **coexistence** possible.
- Anomalie **ne rouvre pas** automatiquement l'intervention.
- Retry automatique avancé **hors MVP**.

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Consulter les anomalies (dashboard ou écran dédié) | Anomalie d'intégration | STAT-08 visible | Liste priorisée par gravité |
| 2 | Ouvrir le détail d'une anomalie | Anomalie, Intervention, message métier | STAT-08 + STAT-06 | Contexte compréhensible métier |
| 3 | Identifier la gravité et l'action attendue | Gravité d'anomalie | STAT-08 | Orientation traitement |
| 4 | Corriger ou compléter si nécessaire | Données fonctionnelles liées | STAT-06 maintenu | Donnée ajustée, tracée |
| 5 | Relancer la sync ou accepter / clôturer le traitement | Reprise manuelle, Historique | STAT-08 évolutif | Anomalie traitée ou historisée |
| 6 | Vérifier l'intervention source | Intervention, Compte rendu | STAT-06 | Clôture locale toujours valide |

**Garde-fous** : STAT-08 ne remplace pas STAT-06 ; coexistence STAT-06 + STAT-08 ; pas de réouverture auto ; retry avancé hors périmètre.

---

## 10. Parcours 7 — Pilotage retards

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Manager SAV |
| **Objectif utilisateur** | Identifier et traiter les interventions ou demandes en retard opérationnel |
| **Point de départ** | Alerte dashboard ou consultation planning / liste |
| **Point d'arrivée** | Retard traité (réaffectation, replanification, action sur dossier source) |
| **Indicateur** | **STAT-07 — En retard** (indicateur interne) |
| **Objets métier** | Intervention, Planning, Indicateur de pilotage |
| **Écran(s) associés** | Dashboard SAV ; Planning |
| **Décision UX** | Alertes **top 5–7 hiérarchisées** ; lien « Voir toutes » |

### Règles fonctionnelles

- STAT-07 déclenché par écart planning / réalité — **ne remplace pas** le statut métier (STAT-03, STAT-04, etc.).
- Dashboard oriente vers fiche demande ou intervention — pas source de vérité.
- STAT-07 distinct de STAT-08 (retard métier vs anomalie intégration).

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Consulter le dashboard SAV | Indicateur de pilotage | STAT-07 en alerte | Top 5–7 alertes visibles |
| 2 | Identifier un retard | Intervention, Planning | STAT-07 + statut métier inchangé | Retard distingué du statut principal |
| 3 | Ouvrir le dossier source | Demande SAV ou Intervention | Statut métier visible | Accès fiche métier |
| 4 | Agir (replanifier, prioriser, contacter) | Planning, Intervention | STAT-07 peut évoluer | Action métier tracée |

**Garde-fous** : STAT-07 indicateur interne ; ne remplace pas le statut métier ; dashboard oriente vers fiches sources.

---

## 11. Parcours 8 — Pilotage consolidé

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Dirigeant / Pilotage |
| **Objectif utilisateur** | Obtenir une vision synthétique de l'activité SAV pour décision rapide |
| **Point de départ** | Connexion vue dirigeant ou dashboard pilotage |
| **Point d'arrivée** | Lecture consolidée ; éventuel drill-down vers dossier (sans action delivery) |
| **Objets métier** | Indicateur de pilotage, Historique, Intervention (agrégats) |
| **Écran(s) associés** | **Vue dirigeant** (distincte du dashboard SAV) |
| **Décision UX** | KPI **above the fold top 5–7** ; distinction dashboard SAV vs vue dirigeant |

### Règles fonctionnelles

- Vue **synthétique** et tendances — pas opérationnelle comme le dashboard SAV.
- Dashboard **non source de vérité** ; drill-down vers objets métier si besoin.
- Pas de BI technique ni KPI techniques non métier.

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Ouvrir la vue dirigeant | Indicateurs agrégés | Agrégats STAT-01–06, STAT-07 | Synthèse lisible |
| 2 | Lire les KPI prioritaires (top 5–7) | Indicateur de pilotage | — | Pas de surcharge cognitive |
| 3 | Identifier une tendance ou alerte | Retards, clôtures, anomalies | STAT-07, STAT-08 agrégés | Alertes hiérarchisées |
| 4 | *(Option)* Accéder au détail d'un indicateur | Intervention / Demande SAV | Statuts métier | Retour objet source |

**Garde-fous** : dashboard non source de vérité ; pas de BI technique ; pas de KPI technique non métier.

---

## 12. Parcours 9 — Création demande multi-canal

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Assistant administratif ou Responsable SAV |
| **Objectif utilisateur** | Enregistrer une demande entrante sans ressaisie inutile |
| **Point de départ** | Demande reçue via **CRM simulé**, **email sécurisé** ou **saisie manuelle** |
| **Point d'arrivée** | Demande SAV créée en **STAT-01 — À qualifier** (ou rejet explicite email non authentifié) |
| **Objets métier** | Demande SAV, Client, Équipement / site |
| **Écran(s) associés** | Liste demandes ; Fiche demande SAV |
| **Priorité reprise** | **Basse** — déjà cadré macro dans le brief §4 |

### Règles fonctionnelles

- Canal et origine visibles immédiatement sur fiche / liste.
- Email non authentifié → rejet ou qualification explicite — pas de création silencieuse.
- Pas d'intégration CRM réelle — représentation fonctionnelle uniquement.

### Tableau d'étapes

| Étape | Action utilisateur | Donnée / objet manipulé | Statut ou indicateur | Résultat attendu |
|-------|-------------------|-------------------------|----------------------|------------------|
| 1 | Recevoir ou constater une demande entrante | Demande SAV (canal) | — | Entrée identifiée (CRM / email / manuel) |
| 2a | *(CRM simulé)* Valider la création pré-remplie | Demande SAV, Client | → STAT-01 | Demande créée, origine CRM visible |
| 2b | *(Email)* Traiter email authentifié ou rejeter | Demande SAV | → STAT-01 ou rejet | Pas de création silencieuse |
| 2c | *(Manuel)* Saisir les données minimales | Demande SAV, Client, Équipement / site | → STAT-01 | Demande créée |
| 3 | Enchaîner vers qualification | Demande SAV | STAT-01 | Parcours 1 |

**Garde-fous** : ne pas détailler une intégration CRM réelle ; ne pas créer d'API ; ne pas ouvrir un nouveau périmètre métier.

---

## 13. Matrice parcours / écrans

| Parcours | Dashboard SAV | Vue dirigeant | Liste demandes | Fiche demande | Planning | Fiche intervention mobile | CR mobile | Erreurs intégration | Reprise manuelle |
|----------|:-------------:|:-------------:|:--------------:|:-------------:|:--------:|:-------------------------:|:---------:|:-------------------:|:----------------:|
| 1 Qualification | Secondaire | Non concerné | **Principal** | **Principal** | Non concerné | Non concerné | Non concerné | Non concerné | Non concerné |
| 2 Planification | Secondaire | Non concerné | Secondaire | Secondaire | **Principal** | Non concerné | Non concerné | Non concerné | Non concerné |
| 3 Intervention terrain | Non concerné | Non concerné | Non concerné | Non concerné | Secondaire | **Principal** | Non concerné | Non concerné | Non concerné |
| 4 Clôture locale | Non concerné | Non concerné | Non concerné | Non concerné | Non concerné | Secondaire | **Principal** | Non concerné | Non concerné |
| 5 Sync post-clôture | Secondaire | Non concerné | Non concerné | Non concerné | Non concerné | Secondaire | Non concerné | **Principal** | Secondaire |
| 6 Anomalie STAT-08 | Secondaire | Non concerné | Non concerné | Non concerné | Non concerné | Secondaire | Non concerné | **Principal** | **Principal** |
| 7 Pilotage retards | **Principal** | Secondaire | Secondaire | Secondaire | **Principal** | Non concerné | Non concerné | Non concerné | Non concerné |
| 8 Pilotage consolidé | Secondaire | **Principal** | Non concerné | Non concerné | Non concerné | Non concerné | Non concerné | Secondaire | Non concerné |
| 9 Création multi-canal | Secondaire | Non concerné | **Principal** | **Principal** | Non concerné | Non concerné | Non concerné | Non concerné | Non concerné |

---

## 14. Matrice parcours / statuts

| Parcours | STAT-01 | STAT-02 | STAT-03 | STAT-04 | STAT-05 | STAT-06 | STAT-07 | STAT-08 |
|----------|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| 1 Qualification | **Cycle principal** | **Cycle principal** | — | — | — | — | Visible | — |
| 2 Planification | — | **Cycle principal** | **Cycle principal** | — | — | — | **Indicateur** | — |
| 3 Intervention terrain | — | — | **Cycle principal** | **Cycle principal** | **Cycle principal** | — | Visible | — |
| 4 Clôture locale | — | — | — | **Cycle principal** | — | **Cycle principal** | — | — |
| 5 Sync post-clôture | — | — | — | — | — | **Cycle principal** | — | **Indicateur** |
| 6 Anomalie STAT-08 | — | — | — | — | — | Visible | — | **Indicateur** |
| 7 Pilotage retards | Visible | Visible | Visible | Visible | Visible | Visible | **Indicateur** | — |
| 8 Pilotage consolidé | Visible | Visible | Visible | Visible | Visible | Visible | **Indicateur** | **Indicateur** |
| 9 Création multi-canal | **Cycle principal** | — | — | — | — | — | — | — |

**Légende** : **Cycle principal** = transition ou statut porté par le parcours ; **Indicateur** = STAT-07 ou STAT-08 en parallèle ; **Visible** = consultable sans être l'objet principal du parcours.

---

## 15. Points de vigilance transverses

- Ne pas confondre **parcours** avec **user story**.
- Ne pas transformer les étapes en **backlog** ou tickets.
- Ne pas produire de **tests** ou scénarios de recette.
- Ne pas transformer les écrans en **maquettes** dans ce livrable.
- Garder **STAT-07** (retard) et **STAT-08** (anomalie intégration) **séparés** visuellement et sémantiquement.
- Maintenir **STAT-06** comme **clôture locale valide** indépendamment de la sync.
- Garder le **dashboard** comme **couche de visibilité** — actions ramènent aux objets métier.
- Toujours permettre le **retour à l'objet métier source** (demande, intervention, CR, anomalie).
- Appliquer le **wording statuts unifié** FR sur tous les parcours (`status-mapping.md`, ADR-001).
- Respecter les **ADR-001 à ADR-004** dans chaque parcours touchant statuts, sync ou anomalies.

---

## 16. Conclusion

Les **9 parcours utilisateurs** prioritaires de la reprise UX/UI Interv360 sont cadrés et alignés sur :

- les **statuts STAT-01 à STAT-08** ;
- les **objets métier** et **domaines fonctionnels** ;
- les **8 écrans MVP** et l'écran complémentaire **reprise manuelle** ;
- les **décisions atelier** et **garde-fous ADR**.

Ces parcours alimentent directement les livrables suivants du cycle :

| Livrable | Apport des parcours |
|----------|---------------------|
| `screen-inventory.md` | Inventaire écrans × parcours × acteurs × objets |
| `screen-functional-specs.md` | Spécifications fonctionnelles par écran et par étape |
| `dashboard-ux-view.md` | Vues Manager SAV, Technicien, Pilotage ; STAT-07 / STAT-08 |

### Prochaine action recommandée

Produire :

**`projects/interv360/06-ux-ui/screen-inventory.md`**

**Objectif** : inventorier les vues et écrans MVP, leurs liens avec parcours, objets métier, statuts et écarts Figma V1 — sans maquette finale.

---

*Parcours utilisateurs UX/UI — Interv360 — SFIA — Draft.*
