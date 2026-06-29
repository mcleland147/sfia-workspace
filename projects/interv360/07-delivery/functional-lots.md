# Interv360 — Functional lots

**Type** : Découpage fonctionnel  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`mvp-scope.md`](mvp-scope.md)

---

## 1. Objectif

Ce document découpe le MVP Interv360 en **lots fonctionnels cohérents**.

Il sert de transition entre le **périmètre MVP** et le futur **backlog macro**.

Le découpage doit permettre de :

- respecter la chaîne de valeur SAV bout en bout ;
- organiser la réalisation sans créer encore de user stories détaillées ;
- identifier les dépendances entre lots ;
- préparer la priorisation ;
- éviter de surdimensionner le MVP.

---

## 2. Principes de découpage

Le découpage suit les principes suivants :

- commencer par le **socle fonctionnel** nécessaire à la demande SAV ;
- sécuriser rapidement le cycle de vie **STAT-01 à STAT-06** ;
- traiter **STAT-07** et **STAT-08** comme indicateurs parallèles ;
- garder la **fiche demande** comme référence opérationnelle détaillée ;
- ne **pas** bloquer la clôture locale sur le CRM simulé ;
- éviter la perfection Figma ou le design system complet ;
- privilégier des lots **livrables**, **démontrables** et **ordonnés**.

---

## 3. Vue d'ensemble des lots

| Lot | Nom | Objectif | Ordre recommandé |
|-----|-----|----------|:----------------:|
| **LOT-01** | Socle demandes SAV | Créer, consulter et lister les demandes | 1 |
| **LOT-02** | Qualification et fiche demande | Qualifier et détailler la demande (source opérationnelle) | 2 |
| **LOT-03** | Planification et affectation | Planifier l'intervention et affecter un technicien | 3 |
| **LOT-04** | Intervention terrain et compte rendu | Exécuter l'intervention et produire le CR | 4 |
| **LOT-05** | Clôture locale | Clôturer localement dans Interv360 | 5 |
| **LOT-06** | Intégration CRM simulée | Représenter le flux CRM sans intégration réelle | 6 |
| **LOT-07** | Anomalies d'intégration et reprise manuelle | Visualiser et traiter les anomalies STAT-08 | 7 |
| **LOT-08** | Pilotage SAV et retards | Piloter l'activité opérationnelle et les retards | 8 |
| **LOT-09** | Vue dirigeant MVP | Vue consolidée limitée aux indicateurs essentiels | 9 |

---

## 4. LOT-01 — Socle demandes SAV

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre de créer, consulter et lister les demandes SAV |
| **Capacités incluses** | Création manuelle d'une demande ; réception simulée simple d'une demande ; liste demandes ; recherche simple ; filtres de base ; accès fiche demande ; affichage statut courant ; affichage canal d'origine |
| **Écrans concernés** | Liste demandes ; Fiche demande SAV |
| **Statuts / indicateurs** | **STAT-01** — À qualifier |
| **Dépendances** | Aucune dépendance fonctionnelle forte — lot de départ du MVP |
| **Hors lot** | Qualification complète ; planning ; intervention ; CRM réel ; dashboard avancé |

**Note design :** Liste demandes — base Figma Design V2 validée (`figma-first-screen-review.md`).

---

## 5. LOT-02 — Qualification et fiche demande

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre de qualifier une demande et d'en faire la référence opérationnelle détaillée |
| **Capacités incluses** | Consultation détail demande ; modification informations principales ; checklist minimale de qualification (RG-C05) ; passage STAT-01 → STAT-02 ; gestion informations client / équipement-site / demande ; visibilité historique léger ; maintien de la fiche comme source détaillée |
| **Écrans concernés** | Fiche demande SAV ; Liste demandes |
| **Statuts / indicateurs** | **STAT-01** — À qualifier ; **STAT-02** — Qualifiée |
| **Dépendances** | LOT-01 |
| **Hors lot** | Workflow complexe de validation ; habilitations avancées ; audit complet |

---

## 6. LOT-03 — Planification et affectation

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre de planifier une intervention et d'affecter un technicien |
| **Capacités incluses** | Création intervention depuis demande qualifiée ; choix créneau ; affectation technicien ; visualisation planning simple (vue jour par défaut) ; passage vers STAT-03 ; visibilité retards potentiels |
| **Écrans concernés** | Planning ; Fiche demande SAV ; Liste demandes |
| **Statuts / indicateurs** | **STAT-02** — Qualifiée ; **STAT-03** — Planifiée ; **STAT-07** — En retard, uniquement si applicable |
| **Dépendances** | LOT-01 ; LOT-02 |
| **Hors lot** | Optimisation avancée planning ; vue semaine complète si non nécessaire MVP ; notifications avancées |

---

## 7. LOT-04 — Intervention terrain et compte rendu

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre au technicien de consulter l'intervention et de produire un compte rendu simple |
| **Capacités incluses** | Consultation fiche intervention mobile ; informations intervention essentielles ; saisie compte rendu ; résultat intervention ; signature optionnelle ; motif si signature absente ; passage intervention en réalisation ; préparation clôture |
| **Écrans concernés** | Fiche intervention mobile ; Compte rendu mobile |
| **Statuts / indicateurs** | **STAT-03** — Planifiée ; **STAT-04** — En cours ; **STAT-05** — En attente client, si suspension nécessaire ; pré-clôture vers STAT-06 |
| **Dépendances** | LOT-03 |
| **Hors lot** | Application mobile native complète ; offline avancé ; parcours technicien enrichi ; signature avancée |

---

## 8. LOT-05 — Clôture locale

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre la clôture opérationnelle locale dans Interv360 |
| **Capacités incluses** | Validation compte rendu ; passage en STAT-06 ; clôture locale autonome ; maintien du détail dans la fiche demande ; préparation retour CRM simulé ; absence de blocage si synchronisation externe KO |
| **Écrans concernés** | Fiche demande SAV ; Compte rendu mobile ; Liste demandes |
| **Statuts / indicateurs** | **STAT-04** — En cours ; **STAT-05** — En attente client ; **STAT-06** — Clôturée |
| **Dépendances** | LOT-04 |
| **Hors lot** | Clôture conditionnée par CRM ; validation complexe multi-acteurs ; audit avancé |

---

## 9. LOT-06 — Intégration CRM simulée

| Élément | Description |
|---------|-------------|
| **Objectif** | Représenter un flux CRM réaliste sans intégrer un CRM réel |
| **Capacités incluses** | Réception simulée d'une demande CRM ; identification canal CRM ; tentative de retour post-clôture ; statut de synchronisation visible ; échec de synchronisation simulé ; non-blocage de la clôture locale |
| **Écrans concernés** | Liste demandes ; Fiche demande SAV ; Suivi erreurs intégration |
| **Statuts / indicateurs** | STAT-01 à STAT-06 selon le cycle métier ; **STAT-08** si anomalie |
| **Dépendances** | LOT-01 ; LOT-05 |
| **Hors lot** | API réelle ; connecteur CRM réel ; mapping technique complet ; monitoring avancé |

---

## 10. LOT-07 — Anomalies d'intégration et reprise manuelle

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre de visualiser et traiter simplement les anomalies d'intégration |
| **Capacités incluses** | Affichage anomalies STAT-08 ; message métier compréhensible ; vue suivi erreurs intégration ; reprise manuelle simple ; distinction anomalie / statut métier ; absence de réouverture intervention |
| **Écrans concernés** | Suivi erreurs intégration ; Fiche demande SAV ; Liste demandes |
| **Statuts / indicateurs** | **STAT-08** — Anomalie d'intégration |
| **Dépendances** | LOT-06 |
| **Hors lot** | Automatisation complète de reprise ; monitoring technique avancé ; file d'attente technique détaillée |

---

## 11. LOT-08 — Pilotage SAV et retards

| Élément | Description |
|---------|-------------|
| **Objectif** | Permettre un pilotage opérationnel simple de l'activité SAV |
| **Capacités incluses** | Dashboard SAV simple ; suivi retards ; indicateur STAT-07 ; visibilité demandes à qualifier ; visibilité demandes planifiées / en cours ; priorisation opérationnelle ; accès depuis dashboard vers liste ou fiche |
| **Écrans concernés** | Dashboard SAV ; Liste demandes ; Fiche demande SAV |
| **Statuts / indicateurs** | STAT-01 à STAT-06 ; **STAT-07** — En retard ; **STAT-08** visible si utile, sans fusionner avec le pilotage métier |
| **Dépendances** | LOT-01 ; LOT-02 ; LOT-03 ; LOT-05 |
| **Hors lot** | BI complet ; reporting avancé ; dashboard comme source de vérité |

---

## 12. LOT-09 — Vue dirigeant MVP

| Élément | Description |
|---------|-------------|
| **Objectif** | Proposer une vue consolidée limitée aux indicateurs essentiels |
| **Capacités incluses** | Indicateurs consolidés simples ; volumétrie demandes ; retards ; clôtures ; anomalies d'intégration ; séparation claire avec dashboard SAV opérationnel |
| **Écrans concernés** | Vue dirigeant |
| **Statuts / indicateurs** | STAT-01 à STAT-08 en lecture agrégée |
| **Dépendances** | LOT-08 |
| **Hors lot** | BI avancé ; analyse prédictive ; reporting multi-entités ; exports complexes |

---

## 13. Ordonnancement recommandé

| Ordre | Lot | Pourquoi maintenant |
|:-----:|-----|---------------------|
| 1 | **LOT-01** — Socle demandes SAV | Point d'entrée du flux — sans demande, pas de chaîne SAV |
| 2 | **LOT-02** — Qualification et fiche demande | Rend la demande exploitable — fiche = source détaillée |
| 3 | **LOT-03** — Planification et affectation | Transforme une demande qualifiée en intervention planifiée |
| 4 | **LOT-04** — Intervention terrain et compte rendu | Exécution terrain et production du CR |
| 5 | **LOT-05** — Clôture locale | Finalise le cycle opérationnel local |
| 6 | **LOT-06** — Intégration CRM simulée | Étend le flux avec la cible externe représentative |
| 7 | **LOT-07** — Anomalies d'intégration et reprise manuelle | Traite les échecs de sync sans bloquer le cycle |
| 8 | **LOT-08** — Pilotage SAV et retards | Visibilité opérationnelle une fois le flux couvert |
| 9 | **LOT-09** — Vue dirigeant MVP | Consolidation dirigeant après pilotage SAV |

**Synthèse :**

- Les lots **01 à 05** constituent la **chaîne SAV opérationnelle minimale**.
- Les lots **06 à 07** sécurisent la **logique d'intégration simulée**.
- Les lots **08 à 09** structurent le **pilotage**.

---

## 14. Dépendances entre lots

| Lot | Dépend de | Commentaire |
|-----|-----------|-------------|
| LOT-01 | — | Lot fondateur — aucune dépendance |
| LOT-02 | LOT-01 | Nécessite demandes créées et listables |
| LOT-03 | LOT-01, LOT-02 | Nécessite demande qualifiée (STAT-02) |
| LOT-04 | LOT-03 | Nécessite intervention planifiée (STAT-03) |
| LOT-05 | LOT-04 | Nécessite CR et réalisation terrain |
| LOT-06 | LOT-01, LOT-05 | Réception en amont ; retour post-clôture (STAT-06) |
| LOT-07 | LOT-06 | Anomalies liées au flux CRM simulé |
| LOT-08 | LOT-01, LOT-02, LOT-03, LOT-05 | Agrège données opérationnelles du cycle |
| LOT-09 | LOT-08 | Consolidation après dashboard SAV opérationnel |

---

## 15. Lots non MVP / post-MVP

| Lot post-MVP | Raison du report |
|--------------|------------------|
| CRM réel | MVP limité au CRM simulé (ADR-002) |
| API d'intégration réelle | Hors périmètre fonctionnel MVP |
| Notifications avancées | Post-validation parcours clôture |
| Planning avancé | Vue jour MVP suffisante |
| BI / reporting enrichi | Dashboard et vue dirigeant limités couvrent le MVP |
| Rôles et habilitations avancés | Acteurs MVP couverts sans granularité fine |
| Design system complet | Figma suffisant, non bloquant |
| Mobile enrichi | Fiche intervention + CR couvrent le parcours technicien |
| Automatisation anomalies | Reprise manuelle simple en MVP |
| Audit avancé | Traçabilité légère suffisante |
| Multi-entités | Hors cadrage MVP |
| Portail client | Exclusion confirmée |

---

## 16. Garde-fous lots

- Aucun lot ne doit **créer de nouveau statut** au-delà de STAT-01 à STAT-08.
- **STAT-07** et **STAT-08** restent des **indicateurs** — jamais des statuts métier principaux.
- **LOT-06** ne doit pas rendre le CRM **source de vérité** — Interv360 reste locale.
- **LOT-07** ne doit **pas rouvrir** une intervention à cause d'une anomalie STAT-08.
- **LOT-08** et **LOT-09** ne doivent **pas** transformer les dashboards en source de vérité.
- La **fiche demande** reste la source détaillée — listes et dashboards = accès / pilotage.
- Les lots ne doivent **pas** dépendre d'une maquette Figma parfaite de tous les écrans.
- **LOT-05** garantit la **clôture locale autonome** — indépendante du succès sync CRM.

---

## 17. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Lots MVP identifiés (9 lots) | ✅ |
| 2 | Ordre de réalisation proposé | ✅ |
| 3 | Dépendances explicites | ✅ |
| 4 | Chaîne SAV minimale couverte (LOT-01 à LOT-05) | ✅ |
| 5 | Intégration simulée couverte (LOT-06, LOT-07) | ✅ |
| 6 | Pilotage couvert (LOT-08, LOT-09) | ✅ |
| 7 | Hors MVP non réintroduit | ✅ |
| 8 | Base prête pour backlog macro | ✅ |

---

## 18. Prochaine action

Le prochain livrable est :

**[`macro-backlog.md`](macro-backlog.md)**

**Objectif :** transformer les lots fonctionnels en **grands éléments de backlog**, sans descendre encore au niveau user stories détaillées.

---

*Découpage fonctionnel MVP Interv360 — Draft.*
