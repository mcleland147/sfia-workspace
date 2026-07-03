# Interv360 — Spécifications fonctionnelles des écrans UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Spécifications fonctionnelles écrans  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif

Ce document **spécifie fonctionnellement les 9 écrans** de la reprise UX/UI Interv360 : comportements attendus, informations affichées, actions utilisateur, états d'écran, règles, messages métier et garde-fous — sans maquette ni implémentation technique.

Il s'appuie sur :

- le **brief UX/UI validé** (`ux-ui-brief.md`, `ux-ui-brief-validation.md`) ;
- **Figma V1** comme référence visuelle **non définitive** (`figma-first-draft-screens/`) ;
- les **décisions atelier** (`clarification-workshop-minutes.md`) ;
- l'**état des lieux** `ux-ui-reprise-analysis.md` ;
- le **cadrage** `ux-ui-reprise-scope.md` ;
- les **parcours** `user-journeys.md` ;
- l'**inventaire** `screen-inventory.md` ;
- l'**architecture fonctionnelle détaillée** (`05-functional-architecture/`) ;
- les **ADR structurantes** (ADR-001 à ADR-004).

Ce document **ne produit pas** :

- maquette finale ;
- design system ;
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

## 2. Principes de spécification écran

- Une **spécification écran** décrit le **comportement fonctionnel attendu**, pas une maquette ni un wireframe pixel-perfect.
- Chaque écran doit **renvoyer vers les objets métier source** (Demande SAV, Intervention, Anomalie, etc.).
- Les statuts affichés respectent le **wording unifié** FR (`status-mapping.md`, ADR-001).
- **STAT-07** (retard) et **STAT-08** (anomalie intégration) restent **distincts** — badges, couleurs ou libellés ne doivent pas les fusionner.
- **STAT-06** (Clôturée) reste **valide** même si la synchronisation CRM simulée échoue (ADR-004).
- Le **dashboard** et les **listes** ne deviennent **pas** sources de vérité — les fiches métier le sont.
- Les **messages d'erreur** sont **lisibles métier** avant tout détail technique (ADR-003, décision atelier).
- **Figma V1** est une **référence visuelle**, pas une contrainte finale — les écarts documentés ici priment sur la capture si l'architecture fonctionnelle l'exige.

---

## 3. Vue d'ensemble des écrans spécifiés

| # | Écran | Acteur principal | Parcours principal | Priorité | Source Figma V1 |
|---|-------|------------------|-------------------|----------|-----------------|
| 1 | Dashboard SAV | Manager SAV / Responsable SAV | P7 Pilotage retards | Haute | `05-dashboard-sav.png` |
| 2 | Vue dirigeant | Dirigeant / Pilotage | P8 Pilotage consolidé | Moyenne | `12-vue-dirigeant.png` |
| 3 | Liste demandes | Responsable SAV / Assistant admin | P1 Qualification, P9 Multi-canal | Haute | `06-liste-demandes.png` |
| 4 | Fiche demande SAV | Responsable SAV | P1 Qualification | Haute | `07-fiche-demande-sav.png` |
| 5 | Planning | Responsable SAV / Manager SAV | P2 Planification, P7 Retards | Haute | `08-planning-semaine.png` |
| 6 | Fiche intervention mobile | Technicien | P3 Intervention terrain | Haute | `09-fiche-intervention-mobile.png` |
| 7 | Compte rendu mobile | Technicien | P4 Clôture locale | Haute | `10-compte-rendu-mobile.png` |
| 8 | Suivi erreurs intégration | Manager SAV | P5 Sync, P6 Anomalie | Haute | `11-suivi-erreurs-integration.png` |
| 9 | Détail reprise manuelle | Manager SAV | P6 Anomalie | Moyenne | Absent |

---

## 4. Spécification — Dashboard SAV

### 4.1 Objectif fonctionnel

Fournir une **visibilité opérationnelle quotidienne** sur l'activité SAV : volumes par statut métier, alertes actionnables, retards et anomalies — et **orienter** l'utilisateur vers les dossiers sources (demande, intervention, anomalie) sans devenir référentiel métier.

### 4.2 Acteurs

- **Manager SAV** — usage principal : alertes, anomalies, retards.
- **Responsable SAV / planning** — usage principal : demandes à qualifier, planification, charge.
- **Assistant administratif** — consultation possible ; pas d'actions de pilotage avancées MVP.

### 4.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P7 Pilotage retards | **Principal** |
| P1 Qualification, P2 Planification, P5 Sync, P6 Anomalie, P8 Pilotage consolidé, P9 Multi-canal | Secondaire (point d'entrée) |

### 4.4 Objets et statuts visibles

| Type | Éléments |
|------|----------|
| Objets métier | Demande SAV, Intervention, Client, Technicien, Planning, Anomalie d'intégration, Indicateur de pilotage, Historique (agrégats) |
| Statuts métier | STAT-01 à STAT-06 — volumes, compteurs, filtres rapides |
| Indicateurs | **STAT-07** En retard — alertes distinctes ; **STAT-08** Anomalie d'intégration — alertes distinctes |

### 4.5 Informations affichées

- **Top 5–7 KPI** above the fold (demandes ouvertes, à qualifier, planifiées, en cours, clôturées, etc. — priorisation atelier).
- **Top 5–7 alertes** hiérarchisées par criticité ; lien **« Voir toutes »** pour le reste.
- Bloc ou compteur **demandes à qualifier** (STAT-01).
- Bloc **interventions planifiées / en cours / en attente client** (STAT-03, STAT-04, STAT-05).
- Alertes **retards** (STAT-07) — libellé « En retard », jamais confondu avec anomalie intégration.
- Alertes **anomalies** (STAT-08) — libellé « Anomalie d'intégration », gravité visible.
- Indicateur **synchronisations en attente** (post-clôture, non bloquant).
- Filtre période / statut / priorité (simples MVP).

### 4.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Filtrer alertes ou KPI | Indicateur de pilotage | Vue restreinte aux critères choisis |
| Ouvrir une demande | Demande SAV | Navigation fiche demande SAV |
| Ouvrir une intervention | Intervention | Navigation fiche intervention ou planning |
| Ouvrir une anomalie | Anomalie d'intégration | Navigation suivi erreurs ou détail anomalie |
| Accéder au planning | Planning | Navigation écran Planning |
| Voir toutes les alertes | Liste alertes étendue | Affichage au-delà du top 5–7 |
| Accéder suivi erreurs intégration | Anomalies STAT-08 | Navigation écran 8 |

### 4.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Nominal | Activité courante, alertes dans la limite top 5–7 | Aucun message bloquant |
| Aucune alerte | Pas de retard ni anomalie active | Indication positive ou vide explicite (« Aucune alerte prioritaire ») |
| Retards présents | STAT-07 actif sur une ou plusieurs interventions | Badge « En retard » distinct ; lien vers dossier |
| Anomalies présentes | STAT-08 actif | Badge « Anomalie d'intégration » + gravité ; lien vers anomalie |
| Surcharge d'alertes | Plus de 7 alertes | Top 5–7 affiché ; « Voir toutes » obligatoire |
| Données partielles | Agrégats incomplets (rare MVP) | Message métier : « Certaines données ne sont pas encore disponibles » |

### 4.8 Règles fonctionnelles

- Le dashboard **n'est pas** source de vérité — toute action métier se fait sur la fiche source.
- Maximum **5–7 KPI** et **5–7 alertes** visibles sans scroll (décision atelier).
- **STAT-07 ≠ STAT-08** — jamais regroupés sous un libellé générique « Problème ».
- Chaque alerte **cliquable** renvoie vers Demande SAV, Intervention ou Anomalie d'intégration.
- Les compteurs STAT-01–06 reflètent les objets métier, pas une vue recalculée indépendante.

### 4.9 Messages métier et cas particuliers

- Alerte retard : « Intervention en retard — créneau dépassé » (exemple) — pas de code technique.
- Alerte anomalie : « Synchronisation non aboutie — action manager requise » selon gravité.
- Échec notification client (brief) : indicateur sur dashboard, pas d'écran dédié MVP.

### 4.10 Écart Figma V1

- Figma V1 (`05-dashboard-sav.png`) couvre surtout la **vue Manager SAV**.
- Vues **Technicien** et **Pilotage / supervision** (`dashboard-and-alerts.md` §9) à compléter dans `dashboard-ux-view.md`.
- Renforcer visuellement la **distinction STAT-07 / STAT-08** par rapport à la capture V1.

---

## 5. Spécification — Vue dirigeant

### 5.1 Objectif fonctionnel

Offrir une **lecture consolidée** et des **tendances** pour décision rapide — horizon plus large que le dashboard SAV opérationnel.

### 5.2 Acteurs

- **Dirigeant** — usage principal.
- **Pilotage / supervision** — usage équivalent fonctionnel MVP.

### 5.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P8 Pilotage consolidé | **Principal** |
| P7 Pilotage retards | Secondaire (vue agrégée retards) |

### 5.4 Objets et statuts visibles

- **Indicateur de pilotage**, Intervention (agrégats), Historique.
- Agrégats STAT-01 à STAT-06 ; **STAT-07** et **STAT-08** en tendances ou compteurs — jamais fusionnés.

### 5.5 Informations affichées

- **Top 5–7 KPI** consolidés (taux clôture, volume interventions, retards, anomalies, tendance période).
- Graphiques ou tendances **simples** MVP — pas de BI avancée.
- Compteurs retards (STAT-07) et anomalies (STAT-08) agrégés.
- Période sélectionnable (semaine / mois — simple MVP).

### 5.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Consulter tendance | Indicateur de pilotage | Lecture comparative période |
| Filtrer par période | Agrégats | Recalcul affichage |
| Drill-down indicateur | Demande SAV ou Intervention | Navigation objet source (lecture) |
| Accéder dashboard SAV | Dashboard SAV | Bascule vue opérationnelle si autorisé |

### 5.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Nominal | Données consolidées disponibles | — |
| Absence données | Période sans activité | « Aucune activité sur la période » |
| Anomalies élevées | Volume STAT-08 au-dessus seuil | Alerte synthétique ; lien vers suivi erreurs |
| Retards élevés | Volume STAT-07 au-dessus seuil | Alerte synthétique ; lien drill-down |

### 5.8 Règles fonctionnelles

- **Distinct** du Dashboard SAV — pas de duplication des mêmes widgets opérationnels.
- **Pas de BI technique** ni KPI infrastructure (latence API, taux erreur HTTP, etc.).
- Dashboard **non source de vérité** — drill-down vers fiches si détail requis.
- KPI **métier** uniquement.

### 5.9 Écart Figma V1

- Capture `12-vue-dirigeant.png` alignée sur principe synthétique.
- Alignement fin avec indicateurs `dashboard-and-alerts.md` §9.3 à préciser dans `dashboard-ux-view.md`.

---

## 6. Spécification — Liste demandes

### 6.1 Objectif fonctionnel

**Parcourir, filtrer et ouvrir** les demandes SAV — point d'accès principal avant qualification ou création.

### 6.2 Acteurs

- **Responsable SAV** — usage principal.
- **Assistant administratif** — création et consultation.

### 6.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P1 Qualification | **Principal** |
| P9 Création multi-canal | **Principal** |
| P7 Pilotage retards | Secondaire |

### 6.4 Objets et statuts visibles

- **Demande SAV**, Client, Équipement / site.
- **STAT-01** À qualifier, **STAT-02** Qualifiée.
- **STAT-07** en badge si intervention liée en retard (indicateur parallèle).

### 6.5 Informations affichées

Par ligne : identifiant demande, client, site/adresse, **canal** (CRM / email / manuel), **statut** (wording unifié), priorité, date création, indicateur retard éventuel.

### 6.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Filtrer par statut, canal, priorité | Demande SAV | Liste filtrée |
| Rechercher | Demande SAV, Client | Résultats correspondants |
| Ouvrir fiche | Demande SAV | Navigation fiche demande SAV |
| Créer demande manuelle | Demande SAV | Nouvelle demande STAT-01 (si prévu MVP) |
| Accéder qualification | Demande STAT-01 | Fiche avec checklist |

### 6.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Liste nominale | Demandes présentes | — |
| Liste vide | Aucune demande selon filtres | « Aucune demande ne correspond aux critères » |
| Demandes à qualifier | Filtre STAT-01 actif | Mise en avant STAT-01 |
| Doublons potentiels | Signalement RG-C04 | Badge « Doublon potentiel » sur ligne |
| Données incomplètes | STAT-01 avec champs manquants | Indicateur « À compléter » |

### 6.8 Règles fonctionnelles

- Liste **non source de vérité** — la fiche demande fait foi.
- **Wording statuts unifié** sur colonne statut.
- Canal d'origine **toujours visible**.
- Lien depuis alerte dashboard → ligne correspondante si identifiant connu.

### 6.9 Écart Figma V1

- Renforcer **filtres canal** (CRM, email, manuel) par rapport à capture `06-liste-demandes.png`.
- Lien **dashboard → liste** à expliciter.

---

## 7. Spécification — Fiche demande SAV

### 7.1 Objectif fonctionnel

**Qualifier** une demande : vérifier contexte, compléter checklist minimale, arbitrer doublon, préparer planification.

### 7.2 Acteurs

- **Responsable SAV** — seul acteur de qualification MVP.

### 7.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P1 Qualification | **Principal** |
| P9 Création multi-canal | **Principal** |
| P2 Planification | Secondaire (lien planning post-qualification) |

### 7.4 Objets et statuts visibles

- **Demande SAV**, Client, Équipement / site ; lien **Intervention** si déjà planifiée.
- Transition **STAT-01 → STAT-02**.

### 7.5 Informations affichées

**Checklist minimale MVP** (RG-C05) : client, contact, canal, motif, priorité, adresse/site, créneau souhaité si disponible.

Compléments : référence demande, date, origine canal, bloc **doublon potentiel** (RG-C04) si détecté, historique actions récentes (léger MVP).

### 7.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Compléter checklist | Demande SAV | Champs obligatoires renseignés |
| Traiter doublon — fusionner | Demande SAV | Fusion tracée ; une demande conservée |
| Traiter doublon — ignorer | Demande SAV | Signalement levé ; qualification possible |
| Qualifier | Demande SAV | STAT-01 → STAT-02 |
| Retourner liste | — | Navigation liste demandes |
| Envoyer vers planning | Demande STAT-02 | Navigation Planning avec demande présélectionnée |

### 7.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| À qualifier | STAT-01, données suffisantes ou non | Badge « À qualifier » |
| Incomplète | Champs RG-C05 manquants | « Complétez les informations obligatoires pour qualifier » |
| Doublon détecté | RG-C04 | « Une demande similaire existe — fusionner ou ignorer » |
| Qualifiée | STAT-02 | Badge « Qualifiée » ; actions planification disponibles |

### 7.8 Règles fonctionnelles

- **RG-C05** : qualification impossible si données minimales absentes.
- **RG-C04** : pas de **fusion automatique** — arbitrage manuel obligatoire.
- Checklist **minimale** — pas de champs avancés hors MVP (atelier).
- Qualification ne crée pas l'intervention — planification séparée.

### 7.9 Messages métier

- Données manquantes : « Impossible de qualifier : [champ(s)] obligatoire(s) manquant(s) ».
- Doublon : « Demande similaire détectée pour ce client — vérifiez avant de qualifier ».

### 7.10 Écart Figma V1

- Expliciter champs **RG-C05** et flux **anti-doublon** non détaillés dans `07-fiche-demande-sav.png`.

---

## 8. Spécification — Planning

### 8.1 Objectif fonctionnel

**Planifier et affecter** : positionner interventions sur créneaux, affecter techniciens, visualiser conflits et retards.

### 8.2 Acteurs

- **Responsable SAV**, **Manager SAV**.

### 8.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P2 Planification | **Principal** |
| P7 Pilotage retards | **Principal** |

### 8.4 Objets et statuts visibles

- **Planning**, Intervention, Technicien, Demande SAV (lien).
- **STAT-02** (amont), **STAT-03** Planifiée ; **STAT-07** indicateur retard.

### 8.5 Informations affichées

- **Vue jour par défaut** (décision atelier) — créneaux horaires, interventions du jour.
- Vue **semaine** en bascule secondaire si implémentation simple.
- Techniciens et affectations ; **conflits** créneau mis en évidence.
- Badge **En retard** (STAT-07) sur intervention concernée — statut métier Planifiée conservé.

### 8.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Changer jour | Planning | Affichage jour sélectionné |
| Basculer semaine | Planning | Vue semaine (secondaire) |
| Sélectionner demande qualifiée | Demande SAV STAT-02 | Préparation affectation |
| Affecter technicien | Technicien, Intervention | Créneau + technicien associés |
| Déplacer créneau | Intervention, Planning | Mise à jour position |
| Confirmer planification | Intervention | STAT-02 → STAT-03 |
| Ouvrir intervention | Intervention | Fiche intervention mobile ou détail |

### 8.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Jour nominal | Créneaux et affectations OK | — |
| Aucun créneau | Jour sans intervention | « Aucune intervention planifiée ce jour » |
| Conflit | Chevauchement technicien/créneau | « Conflit de planning — vérifiez l'affectation » |
| Retard | STAT-07 actif | Badge « En retard » distinct de STAT-03 |
| Surcharge | Trop d'interventions visibles | Filtre technicien ou scroll |

### 8.8 Règles fonctionnelles

- **Vue jour par défaut** ; semaine secondaire.
- **STAT-07** ne remplace **pas** STAT-03 — deux informations parallèles.
- Conflit **bloque** confirmation planification jusqu'à résolution ou arbitrage explicite.
- Pas de modèle technique de moteur de planning dans ce document.

### 8.9 Écart Figma V1

- Capture `08-planning-semaine.png` montre la **semaine** — specs imposent **jour par défaut** (décision atelier). La V1 reste référence visuelle ; le comportement fonctionnel prime.

---

## 9. Spécification — Fiche intervention mobile

### 9.1 Objectif fonctionnel

Permettre au technicien d'**exécuter** l'intervention terrain avec contexte complet et de gérer attente client.

### 9.2 Acteurs

- **Technicien** — usage **mobile prioritaire** ; desktop consultation bureau secondaire.

### 9.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P3 Intervention terrain | **Principal** |
| P4 Clôture locale | Secondaire (accès CR) |
| P5 Sync, P6 Anomalie | Secondaire (lecture post-clôture) |

### 9.4 Objets et statuts visibles

- **Intervention**, Client, Équipement / site, Historique.
- **STAT-03** Planifiée, **STAT-04** En cours, **STAT-05** En attente client.
- Post-clôture lecture : **STAT-06** + éventuel **STAT-08** (coexistence lisible).

### 9.5 Informations affichées

- Contexte client, adresse/site, équipement, motif demande.
- **Statut métier** courant (libellé unifié).
- Historique actions terrain récentes.
- Actions : démarrer, attente client, reprendre, accéder CR.
- Si clôturée : indicateur **Clôturée** + éventuel **Anomalie d'intégration** sans réouverture.

### 9.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Démarrer intervention | Intervention | STAT-03 → STAT-04 |
| Mettre en attente client | Intervention | STAT-04 → STAT-05 |
| Reprendre | Intervention | STAT-05 → STAT-04 |
| Accéder compte rendu | Compte rendu | Navigation CR mobile (STAT-04 requis) |
| Consulter historique | Historique | Liste événements |

### 9.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Planifiée | STAT-03 | « Planifiée » — bouton Démarrer |
| En cours | STAT-04 | « En cours » — actions terrain |
| Attente client | STAT-05 | « En attente client » — motif/contexte si saisi |
| Post-clôture lecture seule | STAT-06 | « Clôturée » — pas d'édition terrain |
| Anomalie sync visible | STAT-06 + STAT-08 | « Clôturée » + « Anomalie de synchronisation » — lecture seule |

### 9.8 Règles fonctionnelles

- **Mobile prioritaire** — parcours simplifié ≤ 3 actions pour contexte (brief).
- **STAT-05** ne permet **pas** clôture directe — reprise STAT-04 obligatoire.
- **STAT-08** n'entraîne **pas** réouverture automatique.
- Contexte accessible **rapidement** depuis écran d'accueil technicien MVP.

### 9.9 Écart Figma V1

- Rendre lisible **coexistence STAT-06 + STAT-08** sur fiche post-clôture — peu ou pas détaillé dans `09-fiche-intervention-mobile.png`.

---

## 10. Spécification — Compte rendu mobile

### 10.1 Objectif fonctionnel

**Clôturer localement** l'intervention avec compte rendu, résultat et trace signature ou motif.

### 10.2 Acteurs

- **Technicien**.

### 10.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P4 Clôture locale | **Principal** |

### 10.4 Objets et statuts visibles

- **Compte rendu**, Résultat d'intervention, Signature, Motif d'absence de signature, Historique, Intervention.
- **STAT-04 → STAT-06**.

### 10.5 Informations affichées

- Formulaire **CR web** (pas PDF MVP).
- Sélection **résultat d'intervention** (obligatoire).
- Zone **signature** optionnelle (capture nom, date, canal).
- Champ **motif d'absence de signature** (obligatoire si signature absente).
- Bouton **Valider clôture**.
- Post-validation : confirmation **Clôturée** ; indication sync **en cours / réussie / en anomalie** sans invalider clôture.

### 10.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Saisir compte rendu | Compte rendu | Texte CR enregistré |
| Choisir résultat | Résultat d'intervention | Issue métier renseignée |
| Capturer signature | Signature | Signature enregistrée |
| Renseigner motif absence | Motif absence signature | Justification si pas de signature |
| Valider clôture | Intervention, Historique | STAT-04 → STAT-06 ; sync post-clôture déclenchée |

### 10.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Brouillon CR | Saisie en cours | — |
| Champs manquants | CR ou résultat absent | « Complétez le compte rendu et le résultat » |
| Signature présente | Signature capturée | Indicateur signature OK |
| Signature absente avec motif | Motif renseigné | Clôture autorisée |
| Signature absente sans motif | Blocage | « Indiquez le motif d'absence de signature » |
| Clôturé | STAT-06 | « Intervention clôturée » |
| Sync en attente post-clôture | STAT-06 + sync pending | « Clôture enregistrée — synchronisation en cours » (non bloquant) |

### 10.8 Règles fonctionnelles

- **CR obligatoire** ; **résultat obligatoire** ; responsable et date/heure tracés.
- **Signature optionnelle** (RG-R02) ; **motif obligatoire** si absence (RG-R05).
- **Sync CRM simulée post-clôture**, **non bloquante** (ADR-002, ADR-004).
- **STAT-06 valide** même si sync échoue ensuite.
- **Pas d'export PDF** obligatoire MVP.

### 10.9 Messages métier

- Clôture réussie : « Intervention clôturée avec succès ».
- Sync en anomalie post-clôture : « Clôture enregistrée. Un problème de synchronisation sera traité par le manager » — **ne pas** annuler STAT-06.

### 10.10 Écart Figma V1

- **Feedback sync post-clôture** à expliciter — peu visible dans `10-compte-rendu-mobile.png`.

---

## 11. Spécification — Suivi erreurs intégration

### 11.1 Objectif fonctionnel

**Visualiser et prioriser** les anomalies de synchronisation CRM simulée ; orienter vers traitement et reprise manuelle.

### 11.2 Acteurs

- **Manager SAV**.

### 11.3 Parcours associés

| Parcours | Rôle |
|----------|------|
| P5 Synchronisation post-clôture | **Principal** |
| P6 Traitement anomalie | **Principal** |

### 11.4 Objets et statuts visibles

- **Anomalie d'intégration**, Synchronisation CRM simulée, Intervention, Historique, **Gravité d'anomalie**.
- Indicateur **STAT-08** ; statut métier intervention (**STAT-06** typiquement) visible en parallèle.

### 11.5 Informations affichées

- **Message métier** en premier (décision atelier).
- **Gravité** : Information / Bloquant métier / Bloquant sync.
- Intervention liée, identifiant, date clôture.
- **Statut métier** « Clôturée » si STAT-06 — coexistence explicite.
- Dernière tentative sync, action attendue.
- Historique tentatives (résumé).
- Détail technique **masqué ou secondaire** (accordéon / lien admin).

### 11.6 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Filtrer par gravité | Anomalie d'intégration | Liste filtrée |
| Ouvrir anomalie | Anomalie d'intégration | Détail anomalie |
| Ouvrir intervention source | Intervention | Fiche intervention lecture |
| Accéder reprise manuelle | Reprise manuelle | Navigation écran/panneau 9 |
| Marquer traitement | Anomalie d'intégration | État traitement mis à jour (si applicable liste) |

### 11.7 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| Aucune anomalie | Liste vide | « Aucune anomalie d'intégration active » |
| Anomalies information | Gravité faible | Liste avec badge Information |
| Bloquant métier | Action manager requise | Message métier explicite |
| Bloquant sync | Transmission impossible | Message métier + lien reprise |
| Sync en attente | Non finalisée | « Synchronisation en attente » |

### 11.8 Règles fonctionnelles

- **Message métier d'abord** (ADR-003).
- **STAT-08** peut **coexister** avec **STAT-06** — les deux affichés.
- **Pas de réouverture** automatique intervention.
- Priorisation par **gravité** puis ancienneté.
- CRM simulé **non source de vérité**.

### 11.9 Écart Figma V1

- Renforcer **gravités** et **lien reprise manuelle** vs `11-suivi-erreurs-integration.png`.

---

## 12. Spécification — Détail reprise manuelle

### 12.1 Objectif fonctionnel

Permettre au manager de **traiter fonctionnellement** une anomalie STAT-08 : corriger, compléter, relancer, accepter ou clôturer le traitement.

### 12.2 Acteurs

- **Manager SAV**.

### 12.3 Nature

**Écran ou panneau complémentaire** — accessible depuis suivi erreurs (écran 8) ou fiche intervention ; **absent** Figma V1.

### 12.4 Parcours associés

| Parcours | Rôle |
|----------|------|
| P6 Traitement anomalie intégration | **Principal** |

### 12.5 Objets et statuts visibles

- **Reprise manuelle**, Anomalie d'intégration, Gravité, Historique, Synchronisation CRM simulée, Intervention.
- **STAT-08** en traitement ; **STAT-06** inchangé sur intervention.

### 12.6 Informations affichées

- Message métier et **cause fonctionnelle** (pas stack technique en premier).
- Données à **corriger ou compléter** (liste fonctionnelle).
- Intervention source (lien), statut « Clôturée » rappelé.
- Historique tentatives et reprises précédentes.

### 12.7 Actions utilisateur

| Action | Objet cible | Résultat attendu |
|--------|-------------|-------------------|
| Corriger une donnée | Donnée fonctionnelle liée | Valeur ajustée, tracée historique |
| Compléter une information | Donnée manquante | Information ajoutée |
| Relancer synchronisation | Synchronisation CRM simulée | Nouvelle tentative ; résultat tracé |
| Accepter l'anomalie | Anomalie d'intégration | Anomalie considérée sans correction |
| Clôturer le traitement | Reprise manuelle | STAT-08 retiré ou historisé ; STAT-06 conservé |

### 12.8 États d'écran

| État | Description | Message ou indication |
|------|-------------|---------------------|
| À traiter | Anomalie active | « Action requise » |
| En cours de reprise | Correction en cours | — |
| Relance demandée | Tentative sync lancée | « Synchronisation relancée » |
| Acceptée | Anomalie acceptée | « Anomalie acceptée — clôture locale conservée » |
| Clôturée (traitement) | Traitement terminé | « Traitement de l'anomalie terminé » |
| Échec persistant | Relance KO | Message métier ; nouvelle action possible |

### 12.9 Règles fonctionnelles

- **Reprise manuelle MVP** uniquement — pas de retry automatique avancé.
- **Pas d'API**, pas de payload technique dans ce document.
- **STAT-06** jamais annulé par échec reprise.
- Toute action **tracée** dans Historique.
- Pas de réouverture intervention.

### 12.10 Écart Figma V1

- **Écran complémentaire** à cadrer — panneau latéral depuis écran 8 ou modal fonctionnelle ; à préciser en `dashboard-ux-view.md` si regroupé.

---

## 13. Matrice écrans / actions principales

| Écran | Actions principales | Objets sources | Garde-fou clé |
|-------|---------------------|----------------|---------------|
| Dashboard SAV | Filtrer, ouvrir dossier, voir alertes | Demande, Intervention, Anomalie | Non source de vérité |
| Vue dirigeant | Consulter tendances, drill-down | Indicateur pilotage, Intervention | Pas de BI technique |
| Liste demandes | Filtrer, ouvrir, créer | Demande SAV | Wording unifié |
| Fiche demande SAV | Qualifier, traiter doublon | Demande SAV | RG-C04/C05 |
| Planning | Affecter, planifier, voir retards | Planning, Intervention | Vue jour ; STAT-07 ≠ STAT-03 |
| Fiche intervention mobile | Démarrer, attente, CR | Intervention | Mobile prioritaire ; STAT-05 ≠ clôture |
| Compte rendu mobile | Saisir CR, clôturer | Compte rendu, Intervention | STAT-06 même si sync KO |
| Suivi erreurs intégration | Filtrer, ouvrir, reprise | Anomalie d'intégration | Message métier d'abord |
| Détail reprise manuelle | Corriger, relancer, clôturer traitement | Reprise manuelle, Anomalie | Pas de retry auto avancé |

---

## 14. Matrice écrans / états

| Écran | États principaux | États d'erreur ou exception | Indicateurs visibles |
|-------|------------------|----------------------------|----------------------|
| Dashboard SAV | Nominal, aucune alerte | Surcharge alertes, données partielles | STAT-07, STAT-08 |
| Vue dirigeant | Nominal | Absence données, pics retards/anomalies | STAT-07, STAT-08 agrégés |
| Liste demandes | Liste nominale, vide | Doublon, incomplète | STAT-07 si lié |
| Fiche demande SAV | À qualifier, qualifiée | Incomplète, doublon | — |
| Planning | Jour nominal | Conflit, retard, surcharge | STAT-07 |
| Fiche intervention mobile | Planifiée, en cours, attente | Post-clôture + anomalie lecture | STAT-07, STAT-08 post-clôture |
| Compte rendu mobile | Brouillon, clôturé | Champs manquants, motif absent | Sync pending post-clôture |
| Suivi erreurs intégration | Liste anomalies | Par gravité, vide | STAT-08 |
| Détail reprise manuelle | À traiter, clôturé traitement | Échec persistant | STAT-08 |

---

## 15. Matrice écrans / décisions UX atelier

| Décision UX atelier | Écran(s) concernés | Application dans les specs |
|---------------------|---------------------|------------------------------|
| Checklist minimale MVP | Fiche demande SAV | §7 — champs RG-C05 uniquement |
| CR web seul | Compte rendu mobile | §10 — pas d'export PDF |
| Planning vue jour par défaut | Planning | §8 — jour défaut ; semaine secondaire |
| Alertes top 5–7 | Dashboard SAV | §4 — hiérarchisation + « Voir toutes » |
| Wording statuts unifié | Tous | Libellés FR STAT-01 à STAT-08 partout |
| KPI top 5–7 | Dashboard SAV, Vue dirigeant | §4, §5 — above the fold |
| Mobile technicien prioritaire | Fiche intervention, CR mobile | §9, §10 — mobile first |
| Message métier d'abord | Suivi erreurs, Détail reprise | §11, §12 — technique secondaire |
| Signature optionnelle | Compte rendu mobile | §10 — motif si absence |
| Dashboards SAV / dirigeant séparés | Dashboard SAV, Vue dirigeant | §4 vs §5 — pas de fusion |

---

## 16. Points de vigilance transverses

- Ne pas transformer ces specs en **maquette** ou design system.
- Ne pas produire de **composant front**, **code**, **API** ou **SQL**.
- Ne pas créer de **backlog**, **user stories** ou **tests**.
- Garder chaque écran relié aux **objets métier source**.
- Ne pas faire du **dashboard** ou des **listes** une source de vérité.
- Garder **STAT-07** et **STAT-08** **distincts** sur tous les écrans.
- Conserver **STAT-06** comme **clôture locale valide** indépendamment de la sync.
- Respecter **ADR-001 à ADR-004**.
- Ne **pas modifier** les captures Figma V1.
- **Figma V1** reste référence — écarts documentés par écran (§4.10 à §12.10) priment fonctionnellement.

---

## 17. Conclusion

Les **spécifications fonctionnelles** des **9 écrans** MVP de la reprise UX/UI Interv360 sont stabilisées : objectifs, acteurs, parcours, objets, statuts, informations, actions, états, règles, messages métier, garde-fous et écarts Figma V1.

Ces specs alimentent :

| Livrable | Apport |
|----------|--------|
| `dashboard-ux-view.md` | Vues Manager SAV, Technicien, Pilotage ; KPI et alertes détaillés |
| `ux-ui-summary.md` | Synthèse consolidée reprise UX/UI |
| Phase ultérieure maquette / backlog | **Non déclenchée** dans ce cycle |

### Prochaine action recommandée

Produire :

**`projects/interv360/06-ux-ui/dashboard-ux-view.md`**

**Objectif** : détailler les vues dashboard (Manager SAV, Technicien, Pilotage), KPI, alertes et liens vers écrans — sans maquette finale ni BI technique.

---

*Spécifications fonctionnelles des écrans UX/UI — Interv360 — SFIA — Draft.*
