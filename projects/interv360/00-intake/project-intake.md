# Interv360 — Project Intake

**Projet** : PRJ-INTERV360  
**Phase** : Intake  
**Date** : 2026-06-27  
**Statut** : Rédigé — en attente de validation

---

## 1. Synthèse exécutive

Interv360 est un **démonstrateur produit** destiné aux PME de services terrain. Il vise à centraliser et piloter le cycle complet d'une intervention, du besoin client jusqu'au compte rendu et à la clôture.

Le projet s'appuie sur une entreprise fictive — **ServiTech Pro** — pour ancrer le besoin dans un contexte métier réaliste : maintenance multi-technique pour petites entreprises, commerces et agences locales (25 à 50 salariés, dont 10 à 20 techniciens terrain).

L'enjeu principal est de donner au dirigeant une **vision fiable et centralisée** de l'activité terrain, aujourd'hui fragmentée entre Excel, WhatsApp, mails, photos dispersées et facturation ressaisie manuellement.

Interv360 n'est pas un ERP ni une solution de facturation complète au démarrage. Il constitue un **prototype avancé** permettant de tester la capacité de la SFIA à transformer un besoin métier réaliste en trajectoire projet structurée.

---

## 2. Contexte entreprise

| Élément | Description |
|---------|-------------|
| **Entreprise fictive** | ServiTech Pro |
| **Secteur** | Maintenance multi-technique |
| **Clients servis** | Petites entreprises, commerces, agences locales |
| **Taille cible** | 25 à 50 salariés |
| **Effectif terrain** | 10 à 20 techniciens |
| **Modèle d'activité** | Interventions planifiées et urgentes, multi-compétences, relation client de proximité |

ServiTech Pro intervient sur des demandes variées (dépannage, maintenance préventive, installations) avec une organisation où le terrain et l'administratif doivent rester alignés en permanence.

---

## 3. Situation actuelle

L'entreprise fonctionne avec des outils et pratiques hétérogènes, sans système central :

| Domaine | Pratique actuelle |
|---------|-------------------|
| **Planning** | Fichiers Excel modifiés manuellement |
| **Communication terrain** | WhatsApp (groupes, messages individuels) |
| **Demandes clients** | Mails, appels téléphoniques |
| **Preuves d'intervention** | Photos envoyées en vrac, sans structuration |
| **Comptes rendus** | Rédigés après coup, souvent tardivement |
| **Facturation** | Ressaisie manuelle à partir d'informations terrain incomplètes |

Cette organisation crée des délais, des pertes d'information et une charge administrative élevée pour un volume d'activité qui ne justifie pas encore un ERP lourd.

---

## 4. Problème métier

**Problème principal** : le dirigeant n'a pas une vision fiable et centralisée de l'activité terrain.

**Irritants identifiés** :

- Demandes clients dispersées (mail, téléphone, messages) sans point d'entrée unique
- Planning modifié manuellement, source d'erreurs et de double réservation
- Techniciens pas toujours correctement informés des changements ou du contexte client
- Comptes rendus tardifs, retardant la clôture et la facturation
- Preuves d'intervention dispersées (photos, commentaires) sans lien avec l'intervention
- Clients qui appellent pour connaître l'état d'avancement, faute de visibilité partagée
- Facturation dépendante de données terrain incomplètes ou incohérentes
- Manque d'indicateurs opérationnels pour piloter l'activité (délais, charge, taux de clôture)

Le problème n'est pas uniquement opérationnel : il impacte la relation client, la trésorerie et la capacité du dirigeant à anticiper.

---

## 5. Objectifs métier

| # | Objectif |
|---|----------|
| O1 | Centraliser le cycle d'intervention de la demande à la clôture |
| O2 | Donner au dirigeant une vision consolidée de l'activité terrain |
| O3 | Réduire les délais entre intervention et compte rendu |
| O4 | Fiabiliser les informations transmises à la facturation |
| O5 | Améliorer l'information client sur l'état d'avancement |
| O6 | Structurer les preuves d'intervention (photos, signature, commentaires) |
| O7 | Produire un démonstrateur crédible pour une PME de services terrain |

Ces objectifs orientent le périmètre fonctionnel sans présumer de choix techniques.

---

## 6. Utilisateurs cibles

| Utilisateur | Rôle principal | Besoin exprimé |
|-------------|----------------|----------------|
| **Dirigeant** | Pilotage global | Vision consolidée, indicateurs, suivi de l'activité |
| **Responsable planning** | Organisation des interventions | Planifier, ajuster, informer les techniciens |
| **Technicien terrain** | Exécution sur site | Accéder au contexte, documenter, clôturer |
| **Assistant administratif** | Support administratif | Préparer facturation, relances, historique |
| **Client final** | Demandeur / bénéficiaire | Suivre sa demande, recevoir le compte rendu |
| **Manager opérationnel** | Supervision opérationnelle | Suivre la charge, les délais, les anomalies |

Chaque profil intervient à des étapes distinctes du parcours métier cible. Le cadrage devra préciser les droits et les interactions entre ces acteurs.

---

## 7. Parcours métier cible

```
Demande client
    → Qualification
        → Planification
            → Intervention terrain
                → Compte rendu
                    → Clôture
                        → Préparation facturation
```

| Étape | Description |
|-------|-------------|
| **Demande client** | Saisie ou réception d'une demande d'intervention |
| **Qualification** | Analyse du besoin, priorisation, validation du périmètre |
| **Planification** | Affectation d'un technicien, créneau, matériel éventuel |
| **Intervention terrain** | Exécution sur site, collecte de preuves |
| **Compte rendu** | Synthèse de l'intervention, validation client si applicable |
| **Clôture** | Finalisation administrative de l'intervention |
| **Préparation facturation** | Transmission des éléments facturables (sans facturation complète au MVP) |

Ce parcours constitue l'ossature métier du démonstrateur. Le cadrage devra détailler les entrées, sorties et règles de transition à chaque étape.

---

## 8. Fonctionnalités candidates

Les fonctionnalités ci-dessous sont **candidates** pour le démonstrateur. Elles ne constituent pas un engagement de périmètre MVP — le cadrage métier tranchera.

| # | Fonctionnalité | Lien parcours |
|---|----------------|---------------|
| F1 | Gestion des demandes d'intervention | Demande → Qualification |
| F2 | Planification des interventions | Qualification → Planification |
| F3 | Vue planning | Planification |
| F4 | Espace technicien terrain | Intervention terrain |
| F5 | Ajout de photos / commentaires | Intervention terrain |
| F6 | Signature client | Compte rendu |
| F7 | Génération de compte rendu | Compte rendu → Clôture |
| F8 | Notifications client | Tout le cycle |
| F9 | Préparation des éléments de facturation | Clôture → Préparation facturation |
| F10 | Tableau de bord | Pilotage (dirigeant, manager) |
| F11 | Historique client | Demande → Historique |
| F12 | Assistance IA légère | À étudier ultérieurement |

---

## 9. Hors périmètre initial

Les éléments suivants sont **explicitement exclus** du MVP au démarrage :

| Exclusion | Justification |
|-----------|---------------|
| ERP complet | Hors ambition du démonstrateur |
| Facturation complète | Seule la préparation des éléments est visée |
| Optimisation automatique des tournées | Complexité disproportionnée pour un MVP |
| Portail client avancé | Notifications et suivi simples suffisent au départ |
| IA avancée | Assistance légère à étudier plus tard |
| Couverture multi-industries | Focus maintenance multi-technique PME |
| Application trop complexe dès la v1 | Priorité à la démonstration du cycle complet simplifié |

---

## 10. Hypothèses de départ

| # | Hypothèse |
|---|-----------|
| H1 | ServiTech Pro est représentative d'une PME de services terrain de 25 à 50 salariés |
| H2 | Le cycle demande → clôture est le cœur métier à démontrer |
| H3 | Les techniciens disposent d'un smartphone en intervention |
| H4 | Le dirigeant est le sponsor principal du besoin de visibilité |
| H5 | La facturation complète n'est pas requise pour valider la valeur du démonstrateur |
| H6 | Un parcours simplifié mais crédible suffit pour tester la trajectoire SFIA |
| H7 | L'assistance IA légère peut être différée sans bloquer le MVP |

Ces hypothèses seront challengées lors du cadrage métier.

---

## 11. Contraintes initiales

| # | Contrainte |
|---|------------|
| C1 | Aucune solution technique avant validation du cadrage métier |
| C2 | Le projet doit rester un démonstrateur, pas un produit industriel complet |
| C3 | Le périmètre MVP doit rester maîtrisable pour valider la méthode SFIA |
| C4 | Le contexte ServiTech Pro doit rester cohérent tout au long du projet |
| C5 | Les livrables doivent alimenter les référentiels SFIA (templates, standards, ADR, REX) |
| C6 | La gouvernance du projet suit les principes SFIA |

---

## 12. Indicateurs de succès

| Indicateur | Cible qualitative |
|------------|-------------------|
| **Couverture du parcours** | Le cycle demande → clôture est démontrable de bout en bout |
| **Vision dirigeant** | Un tableau de bord donne une lecture consolidée de l'activité |
| **Délai compte rendu** | Le compte rendu est produit à la clôture de l'intervention, pas après coup |
| **Fiabilité facturation** | Les éléments de facturation sont structurés et traçables |
| **Crédibilité métier** | Le démonstrateur est reconnaissable par une PME de services terrain |
| **Trajectoire SFIA** | Le projet a produit cadrage, architecture, delivery et documentation selon la méthode |

Les indicateurs quantitatifs seront précisés au cadrage.

---

## 13. Valeur du projet pour la SFIA

Interv360 est un **projet d'apprentissage et de démonstration** pour la plateforme SFIA. Il doit permettre de tester concrètement :

| Domaine SFIA | Ce qu'Interv360 valide |
|--------------|------------------------|
| Cadrage métier | Transformation d'un besoin réaliste en périmètre structuré |
| Domain Model | Modélisation des entités et relations métier |
| Decision Engine | Prise de décision sur le découpage MVP et les arbitrages |
| Delivery Pipeline | Trajectoire de réalisation du démonstrateur |
| Templates | Réutilisation des modèles projet SFIA |
| Standards | Application des standards d'ingénierie |
| ADR | Documentation des décisions structurantes |
| Découpage MVP | Arbitrage fonctionnel sur un périmètre maîtrisé |
| Documentation projet | Production et maintenance de la doc tout au long du cycle |
| REX | Capitalisation des enseignements en fin de projet |

---

## 14. Questions ouvertes

| # | Question | Impact |
|---|----------|--------|
| Q1 | Quel canal prioritaire pour la saisie des demandes client au MVP ? | Parcours demande |
| Q2 | Le client final a-t-il un accès direct (portail simple) ou uniquement des notifications ? | Périmètre portail |
| Q3 | Quel niveau de détail pour la qualification (checklist, devis rapide) ? | Étape qualification |
| Q4 | La signature client est-elle obligatoire pour clôturer une intervention ? | Règle de clôture |
| Q5 | Quels indicateurs minimum pour le tableau de bord dirigeant ? | Périmètre pilotage |
| Q6 | Quel format de compte rendu (PDF, page web, les deux) ? | Livrable compte rendu |
| Q7 | L'assistance IA légère entre-t-elle dans le MVP ou en phase ultérieure ? | Périmètre F12 |
| Q8 | Faut-il modéliser plusieurs types d'intervention (urgence, préventif, installation) ? | Complexité métier |

Ces questions seront traitées lors de la phase de cadrage métier.

---

## 15. Décision de sortie d'intake

| Élément | Statut |
|---------|--------|
| **Document d'intake** | Rédigé |
| **Problème métier** | Identifié et documenté |
| **Utilisateurs cibles** | Recensés |
| **Parcours métier cible** | Esquissé |
| **Hors périmètre initial** | Délimité |
| **Questions ouvertes** | Listées |

**Décision proposée** : valider cet intake et ouvrir la phase **01-cadrage** pour traiter les questions ouvertes, préciser le périmètre MVP et produire le document de cadrage métier.

**Prochaine étape** : `Validate project intake and start business framing`

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
