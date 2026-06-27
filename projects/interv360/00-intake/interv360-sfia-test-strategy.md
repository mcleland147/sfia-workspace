# Interv360 — SFIA Test Strategy

**Projet** : PRJ-INTERV360  
**Phase** : Intake  
**Date** : 2026-06-27  
**Statut** : Document garde-fou — en cours d'alignement

---

## 1. Raison d'être du projet

Interv360 n'est pas uniquement une application métier de gestion d'interventions terrain.

C'est le **premier projet pilote** destiné à éprouver la SFIA comme **système complet de création d'application** : depuis une demande structurée dans Notion jusqu'à une trajectoire projet exploitable, puis une application crédible produite et versionnée dans Cursor/Git.

Le besoin métier ServiTech Pro fournit un contexte réaliste. La finalité du projet est double :

- démontrer une **plateforme de gestion d'interventions SAV** avec intégrations externes simulées ;
- valider que la SFIA sait **industrialiser** cette trajectoire sans se réduire à une simple méthode documentaire.

---

## 2. Vision produit

**Interv360 — Plateforme de gestion d'interventions SAV avec intégrations externes.**

La plateforme doit permettre de :

- centraliser le cycle d'une intervention SAV de la demande à la clôture ;
- orchestrer les échanges avec des systèmes externes **simulés** (CRM, email, calendrier, notifications) ;
- donner au dirigeant une vision consolidée de l'activité terrain ;
- supporter des cas d'erreur d'intégration et de synchronisation réalistes ;
- rester crédible pour une PME de 25 à 50 salariés sans devenir un ERP.

Les intégrations ne seront pas branchées sur des systèmes réels au démarrage : elles seront **mockées ou simulées** pour tester la complexité applicative sans bloquer le MVP.

---

## 3. Vision SFIA

Interv360 doit tester la capacité de la SFIA à transformer une **demande structurée dans Notion** en **trajectoire projet exploitable**, puis en **application**.

La SFIA n'est pas seulement un référentiel documentaire. Elle doit démontrer :

| Capacité | Attendu sur Interv360 |
|----------|----------------------|
| Référentiel Notion | Gouvernance des objets projet, livrables et décisions |
| Templates prédéfinis | Réutilisation et enrichissement des modèles SFIA |
| Workflow projet | Pilotage des phases via statuts et livrables Notion |
| Rôles transverses | Déclenchement RSSI, FinOps, GreenOps, Data/IA, Architecte au bon moment |
| Automatisation des livrables | Génération documentaire structurée (intake, cadrage, ADR, doc) |
| Synchronisation Cursor/Git | Production et versionnement du code et de la documentation |
| Chaîne cible | Formulaire → workflow → projet → application |

---

## 4. Chaîne cible à éprouver

```
Formulaire besoin
    → création objet Project dans Notion
        → génération intake
            → génération cadrage
                → identification rôles transverses
                    → génération questions ouvertes
                        → création backlog
                            → génération ADR
                                → création workspace Cursor
                                    → production documentation
                                        → delivery
                                            → REX
```

Chaque maillon de cette chaîne doit être **identifié, documenté et arbitré** pendant le projet — même si l'automatisation complète n'est pas implémentée dès le MVP.

L'objectif est de prouver que la SFIA peut structurer une trajectoire **formulaire → workflow → projet → application** de bout en bout.

---

## 5. Capacités SFIA à tester

| Capacité | Objectif de test |
|----------|------------------|
| Templates projet | Déclencher et enrichir les modèles intake, cadrage, architecture, delivery |
| Workflow Notion | Piloter les phases et statuts du projet via le référentiel |
| Génération documentaire | Produire intake, cadrage, ADR, documentation projet de manière structurée |
| Rôles RSSI / FinOps / GreenOps / Data/IA / Architecte | Intégrer les arbitrages transverses dès le cadrage |
| Decision Engine | Trancher sur le découpage MVP, les intégrations et les priorités |
| Domain Model | Modéliser entités, relations et flux métier SAV |
| Repository Blueprint | Structurer le workspace Cursor et les dépôts |
| CMP-001 | Synchroniser objets Notion et exports JSON versionnés |
| Gouvernance Git / Notion | Cursor/Git = production ; Notion = publication gouvernée |
| Capitalisation | Identifier composants, prompts et standards réutilisables |

---

## 6. Capacités applicatives à tester

| Capacité | Objectif de test |
|----------|------------------|
| CRM | Réception et mise à jour de demandes SAV simulées |
| Email | Ingestion simulée de demandes reçues par messagerie |
| Calendrier | Planification et synchronisation de créneaux |
| Notifications | Information client sur l'avancement |
| Géolocalisation | Preuve terrain légère, sans tracking temps réel avancé |
| API | Création et mise à jour d'interventions via échanges structurés |
| Synchronisation | Mise à jour des statuts entre modules et systèmes simulés |
| Gestion d'erreurs | Cas d'échec d'intégration, retry, alertes |
| Logs | Traçabilité des échanges et des anomalies |
| Supervision simple | Tableau de bord des anomalies et de l'activité |
| Sécurité des données | Règles d'accès, données sensibles, traçabilité |
| Coûts variables | Suivi FinOps : hébergement, stockage, API, notifications, IA |
| Sobriété | Principes GreenOps sur stockage et traitements |

---

## 7. Cas de figure métier obligatoires

Les scénarios suivants doivent être couverts par le cadrage et le démonstrateur :

| # | Cas de figure | Description |
|---|---------------|-------------|
| CF1 | Demande SAV issue du CRM | Création automatique ou semi-automatique d'une intervention depuis le CRM simulé |
| CF2 | Demande SAV reçue par email | Ingestion simulée d'un email client transformé en demande |
| CF3 | Planification avec calendrier | Affectation technicien et créneau via synchronisation calendrier |
| CF4 | Notification client | Information proactive sur planification ou changement de statut |
| CF5 | Technicien terrain avec contexte complet | Accès au dossier client, historique et consignes avant intervention |
| CF6 | Preuve terrain / géolocalisation légère | Validation de présence sur site sans tracking avancé |
| CF7 | Compte rendu avec photos et signature | Clôture documentée avec preuves structurées |
| CF8 | Synchronisation CRM / préparation facturation | Remontée des éléments clôturés vers systèmes simulés |
| CF9 | Erreur d'intégration | Échec de synchronisation, log, alerte et reprise manuelle |

---

## 8. Rôles transverses obligatoires au cadrage

| Rôle | Contribution attendue |
|------|----------------------|
| Dirigeant | Sponsor, vision consolidée, critères de succès |
| Responsable SAV / planning | Organisation des interventions et priorités |
| Technicien terrain | Exécution, documentation, retour terrain |
| Assistant administratif | Préparation facturation, relances, historique |
| RSSI | Données sensibles, accès, sécurité API, traçabilité |
| FinOps | Coûts hébergement, stockage, notifications, API, IA |
| GreenOps | Sobriété stockage, compression, conservation |
| Architecte | Structure applicative, API, intégrations |
| Product Owner | Périmètre MVP, priorisation fonctionnelle |
| Data/IA | Gouvernance données, assistance IA légère |

Ces rôles doivent être **explicitement sollicités** lors du cadrage — pas seulement mentionnés.

---

## 9. Dérives à éviter

| Dérive | Garde-fou |
|--------|-----------|
| Créer une simple application CRUD | Interv360 doit tester intégrations, erreurs, rôles transverses et workflow SFIA |
| Oublier la logique formulaire → workflow → application | Documenter et arbitrer chaque maillon de la chaîne cible |
| Transformer Interv360 en ERP | Rester sur un démonstrateur SAV avec intégrations simulées |
| Développer avant cadrage | Aucune solution technique avant validation du cadrage métier |
| Intégrer des systèmes réels trop tôt | Mock et simulation au départ |
| Oublier les cas d'erreur | CF9 obligatoire : erreur d'intégration cadrée et testée |
| Oublier les rôles transverses | RSSI, FinOps, GreenOps, Architecte, Data/IA au cadrage |
| Produire des livrables non réutilisables | Capitaliser templates, prompts, composants et standards SFIA |

---

## 10. Critères de succès

Le projet Interv360 sera considéré comme réussi si :

| Critère | Validation |
|---------|------------|
| Besoin métier compréhensible | Le contexte ServiTech Pro et les cas SAV restent lisibles par un non-technicien |
| Complexité applicative suffisante | Intégrations simulées, API, erreurs et synchronisation sont démontrables |
| Templates SFIA utilisés ou enrichis | Au moins un template projet est appliqué et amélioré |
| Notion = référentiel et gouvernance | Objets projet, livrables et décisions sont publiés et tracés dans Notion |
| Cursor/Git = production et versionnement | Code et documentation sont produits et versionnés dans Git |
| ADR pour décisions structurantes | Les arbitrages majeurs génèrent des ADR documentés |
| Éléments réutilisables identifiés | Composants, prompts ou standards sont capitalisés en fin de phase |

---

*Document garde-fou produit dans le cadre du projet Interv360 — gouvernance SFIA.*
