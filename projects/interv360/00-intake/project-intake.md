# Interv360 — Project Intake

**Projet** : PRJ-INTERV360  
**Phase** : Intake  
**Version** : 1.3 — ajustements rôles transverses, orchestration et indicateurs SFIA  
**Date** : 2026-06-27  
**Statut** : Validated

---

## 1. Synthèse exécutive

**Interv360 — Plateforme de gestion d'interventions SAV avec intégrations externes.**

Interv360 est le **premier projet pilote** destiné à éprouver la SFIA comme système complet de création d'application. Au-delà du besoin métier, il vise à tester la chaîne **formulaire → workflow → projet → application** : besoin structuré dans Notion, trajectoire projet gouvernée, puis démonstrateur produit versionné dans Cursor/Git.

La plateforme cible centralise et pilote le cycle complet d'une intervention SAV — du besoin client jusqu'au compte rendu et à la clôture — en orchestrant des **intégrations externes simulées** (CRM, email, calendrier, notifications, API).

Le projet s'appuie sur une entreprise fictive — **ServiTech Pro** — pour ancrer le besoin dans un contexte métier réaliste : maintenance multi-technique pour petites entreprises, commerces et agences locales (25 à 50 salariés, dont 10 à 20 techniciens terrain).

L'enjeu principal est double : donner au dirigeant une **vision fiable et centralisée** de l'activité terrain, et prouver que la SFIA sait structurer un projet applicatif réaliste de bout en bout.

Interv360 n'est pas un ERP ni une solution de facturation complète au démarrage. Il constitue un **prototype avancé** permettant de tester la capacité de la SFIA à transformer une demande structurée en trajectoire projet exploitable puis en application.

Voir également : [`interv360-sfia-test-strategy.md`](interv360-sfia-test-strategy.md) — document garde-fou de la stratégie de test SFIA.

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

**Outils existants chez ServiTech Pro** (non orchestrés) :

| Outil | Usage actuel |
|-------|--------------|
| **CRM** | Suivi clients et historique partiel des demandes |
| **Boîte email** | Réception des demandes SAV et échanges clients |
| **Calendriers partagés** | Planification informelle des interventions |
| **Outil de facturation** | Facturation en fin de chaîne, ressaisie manuelle |
| **Échanges terrain informels** | WhatsApp, appels, photos hors système |

ServiTech Pro intervient sur des demandes variées (dépannage, maintenance préventive, installations) avec une organisation où le terrain, l'administratif et les outils existants doivent rester alignés — ce qui n'est pas le cas aujourd'hui.

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

**Problème complémentaire** : l'absence d'**orchestration entre outils existants** (CRM, email, calendrier, facturation, échanges terrain) empêche toute continuité d'information de la demande SAV à la clôture.

**Irritants identifiés** :

- Demandes clients dispersées (mail, téléphone, messages) sans point d'entrée unique
- Planning modifié manuellement, source d'erreurs et de double réservation
- Techniciens pas toujours correctement informés des changements ou du contexte client
- Comptes rendus tardifs, retardant la clôture et la facturation
- Preuves d'intervention dispersées (photos, commentaires) sans lien avec l'intervention
- Clients qui appellent pour connaître l'état d'avancement, faute de visibilité partagée
- Facturation dépendante de données terrain incomplètes ou incohérentes
- Manque d'indicateurs opérationnels pour piloter l'activité (délais, charge, taux de clôture)
- Absence de synchronisation entre CRM, email, calendrier et outils terrain
- Erreurs et retards de mise à jour des statuts entre systèmes

Le problème n'est pas uniquement opérationnel : il impacte la relation client, la trésorerie, la capacité du dirigeant à anticiper, et la fiabilité des intégrations entre outils.

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
| O8 | Orchestrer les échanges entre les outils existants sans les remplacer |

Ces objectifs orientent le périmètre fonctionnel sans présumer de choix techniques. **O8** rend explicite que la valeur d'Interv360 n'est pas de remplacer le CRM, l'email, le calendrier ou l'outil de facturation, mais de centraliser le cycle SAV et d'orchestrer les échanges entre ces outils.

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

### Rôles transverses mobilisés au cadrage

| Rôle transverse | Contribution attendue |
|-----------------|----------------------|
| **RSSI** | Challenger les données sensibles, les accès, la sécurité API, la traçabilité et la conservation |
| **FinOps** | Identifier les coûts liés à l'hébergement, au stockage, aux notifications, aux API et à l'usage éventuel de l'IA |
| **GreenOps** | Challenger la sobriété applicative : stockage, logs, notifications, géolocalisation, traitements inutiles |
| **Architecte** | Structurer les flux, les intégrations, les dépendances et les choix d'architecture |
| **Product Owner** | Prioriser le MVP, arbitrer la valeur métier et maintenir la cohérence produit |
| **Data / IA** | Évaluer les usages d'assistance IA légère et la gouvernance des données associées |

Ces rôles ne sont pas des utilisateurs finaux de la plateforme, mais des **contributeurs obligatoires du cadrage** afin de tester la capacité de la SFIA à intégrer les dimensions transverses dès les phases amont.

---

## 7. Parcours métier cible

```
CRM / Email
    → Création demande SAV
        → Qualification
            → Planification calendrier
                → Notification client
                    → Intervention terrain
                        → Mise à jour statut / géolocalisation éventuelle
                            → Compte rendu
                                → Synchronisation CRM / préparation facturation
                                    → Clôture
```

| Étape | Description | Source / flux |
|-------|-------------|---------------|
| **Création demande SAV** | Réception ou saisie d'une demande d'intervention | CRM simulé, email simulé, saisie manuelle |
| **Qualification** | Analyse du besoin, priorisation, validation du périmètre | Plateforme Interv360 |
| **Planification calendrier** | Affectation technicien, créneau, synchronisation calendrier | Calendrier simulé |
| **Notification client** | Information proactive sur planification ou changement | Service de notification simulé |
| **Intervention terrain** | Exécution sur site, collecte de preuves | Module technicien |
| **Mise à jour statut / géolocalisation** | Preuve de présence légère, mise à jour du statut | API, géolocalisation légère |
| **Compte rendu** | Synthèse de l'intervention, photos, signature client | Plateforme Interv360 |
| **Synchronisation CRM / préparation facturation** | Remontée des éléments clôturés vers systèmes simulés | CRM simulé, facturation simulée |
| **Clôture** | Finalisation administrative de l'intervention | Plateforme Interv360 |

Ce parcours constitue l'ossature métier du démonstrateur. Le cadrage devra détailler les entrées, sorties, flux d'intégration et règles de transition à chaque étape.

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
| F13 | Intégration CRM simulée | Création demande SAV → Qualification |
| F14 | Ingestion email simulée | Création demande SAV |
| F15 | Synchronisation calendrier | Planification calendrier |
| F16 | Géolocalisation légère | Intervention terrain |
| F17 | API création / mise à jour intervention | Tout le cycle |
| F18 | Logs d'intégration | Intégrations |
| F19 | Gestion des erreurs d'intégration | Synchronisation CRM |
| F20 | Synchronisation de statuts | CRM, calendrier, notifications |
| F21 | Tableau de bord des anomalies | Pilotage (dirigeant, manager) |

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
| CRM réel du marché | Intégration simulée ou mockée au départ |
| Connecteurs industriels complets | Hors périmètre MVP |
| Géolocalisation temps réel avancée | Géolocalisation légère uniquement |
| Moteur d'orchestration complexe | Orchestration simplifiée pour le démonstrateur |
| Automatisation complète formulaire → application dès le MVP | Chaîne documentée et partiellement automatisée |

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
| C7 | Les intégrations seront simulées ou mockées au départ |
| C8 | Les cas d'erreur d'intégration doivent être cadrés et testés |
| C9 | Les rôles RSSI, FinOps, GreenOps et Architecte doivent intervenir dans les arbitrages |
| C10 | La logique d'automatisation SFIA (formulaire → workflow → application) doit être documentée même si elle n'est pas totalement développée au MVP |

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
| **Flux simulés démontrables** | Les flux CRM, email, calendrier et notifications sont représentés ou simulés de manière compréhensible |
| **Cas d'erreur démontrable** | Au moins un échec d'intégration est tracé, visible et traité dans le parcours |
| **Automatisation SFIA évaluée** | Les templates, statuts Notion, rôles déclenchables et livrables automatisables sont identifiés pendant le projet |

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

### Capacités avancées SFIA à éprouver

Interv360 doit également servir de **projet pilote** pour éprouver la capacité de la SFIA à intégrer des dimensions transverses dès les phases amont d'un projet.

| Axe avancé | Objectif de test |
|------------|------------------|
| Rôles transverses | Vérifier que la SFIA sait intégrer des rôles complémentaires au bon moment : RSSI, FinOps, GreenOps, Data/IA, Product Owner, Architecte |
| RSSI / sécurité | Identifier les données sensibles, les règles d'accès, les risques API, la traçabilité et les exigences de sécurité dès le cadrage |
| FinOps | Anticiper les coûts liés à l'hébergement, au stockage des photos, aux notifications, aux appels API et à l'usage éventuel de services IA |
| GreenOps | Challenger la sobriété applicative : stockage raisonné, compression des images, durée de conservation, limitation des traitements inutiles |
| Architecture API | Tester la capacité de la SFIA à concevoir une application basée sur des échanges API entre frontend, backend, module mobile, notifications et services externes |
| Intégrations | Préparer les futurs échanges avec un CRM, un outil de facturation, un service de notification ou un module IA |
| Gouvernance des données | Définir les objets de données critiques, leur cycle de vie, leur conservation et leur exposition aux différents profils utilisateurs |
| IA légère | Évaluer l'intérêt d'une assistance IA limitée : résumé de compte rendu, classification des demandes, aide à la priorisation |
| ADR | Identifier les décisions structurantes à documenter pendant le cadrage et l'architecture |
| Réutilisabilité SFIA | Détecter les composants, templates, prompts ou standards qui pourraient être réutilisés sur d'autres projets |

Cette dimension avancée ne signifie pas que toutes ces capacités doivent être implémentées dans le MVP. Elle impose en revanche qu'elles soient **identifiées, discutées et arbitrées** pendant le cadrage afin de tester la capacité de la SFIA à structurer un projet applicatif réaliste de bout en bout.

### Automatisation SFIA à éprouver

Interv360 doit tester la capacité de la SFIA à industrialiser la trajectoire **formulaire → workflow → projet → application** :

| Maillon | Objectif de test |
|---------|------------------|
| Formulaire d'entrée besoin | Structurer la demande initiale en champs exploitables |
| Création objet Project dans Notion | Générer le projet gouverné dans le référentiel |
| Génération intake | Produire le document d'intake à partir du besoin structuré |
| Génération cadrage | Déclencher le livrable de cadrage métier |
| Templates prédéfinis | Appliquer et enrichir les modèles SFIA |
| Workflow projet | Piloter les phases via statuts et livrables Notion |
| Génération documentaire | Produire intake, cadrage, ADR, documentation projet |
| Déclenchement des rôles transverses | Solliciter RSSI, FinOps, GreenOps, Data/IA, Architecte au bon moment |
| Création workspace Cursor | Structurer le dépôt de production Git |
| Synchronisation CMP-001 | Publier et exporter les objets Notion |
| Capitalisation templates / prompts / composants | Identifier les éléments réutilisables |
| Trajectoire cible | Valider la chaîne formulaire → workflow → projet → application |

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
| Q9 | Quels rôles transverses doivent intervenir dès le cadrage : RSSI, FinOps, GreenOps, Data/IA, Architecte ? | Gouvernance projet |
| Q10 | Quelles données doivent être considérées comme sensibles ou critiques ? | RSSI / sécurité |
| Q11 | Quels flux API sont nécessaires pour supporter le cycle demande → intervention → clôture ? | Architecture API |
| Q12 | Quels systèmes externes doivent être simulés ou préparés : CRM, facturation, notification, IA ? | Intégrations |
| Q13 | Quels coûts doivent être suivis dès le prototype : hébergement, stockage, notifications, API, IA ? | FinOps |
| Q14 | Quels principes GreenOps appliquer au stockage des photos, documents et comptes rendus ? | GreenOps |
| Q15 | Quelle place donner à l'IA légère : MVP, option, ou phase ultérieure ? | IA légère |
| Q16 | Quelles décisions devront faire l'objet d'une ADR dès la phase de cadrage ou d'architecture ? | ADR |
| Q17 | Quels champs minimaux un formulaire de besoin devrait-il contenir ? | Automatisation SFIA |
| Q18 | Quels templates SFIA doivent être déclenchés automatiquement ? | Templates / workflow |
| Q19 | Quels statuts Notion doivent piloter le workflow projet ? | Workflow Notion |
| Q20 | Quels rôles transverses doivent être déclenchés selon le type de projet ? | Gouvernance projet |
| Q21 | Quels livrables peuvent être générés automatiquement ? | Génération documentaire |
| Q22 | Quelles décisions doivent déclencher une ADR ? | ADR |
| Q23 | Quels éléments doivent être synchronisés entre Notion et Cursor ? | Gouvernance Git / Notion |
| Q24 | Quels composants ou prompts peuvent devenir réutilisables ? | Capitalisation SFIA |

Ces questions seront traitées lors de la phase de cadrage métier.

---

## 15. Décision de sortie d'intake

| Élément | Statut |
|---------|--------|
| **Document d'intake** | Validated |
| **Problème métier** | Identifié et documenté |
| **Utilisateurs cibles** | Recensés |
| **Parcours métier cible** | Esquissé |
| **Hors périmètre initial** | Délimité |
| **Questions ouvertes** | Listées |

**Décision actée** : l'intake Interv360 v1.3 est validé. La phase **01-cadrage** est ouverte afin de traiter les questions ouvertes, préciser le périmètre MVP, formaliser le cadrage métier, structurer les rôles SFIA mobilisés et préparer les premiers arbitrages projet.

**Prochaine étape** : `Start business framing`

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
