# Interv360 — Business Framing

**Projet** : PRJ-INTERV360  
**Phase** : Cadrage  
**Statut** : Draft  
**Source** : project-intake.md v1.3 validated

---

## 1. Objectif du cadrage

Le cadrage doit formaliser le périmètre métier Interv360, les rôles SFIA mobilisés et les arbitrages nécessaires avant toute solution technique.

Il ne doit pas uniquement préciser le besoin métier Interv360, mais aussi **identifier les éléments capitalisables par la SFIA** :

- templates ;
- standards ;
- prompts ;
- rôles ;
- règles de gouvernance ;
- workflows ;
- automatisations potentielles.

*Le détail du périmètre MVP, des règles de gestion et des spécifications fonctionnelles sera produit pendant la rédaction du cadrage.*

---

## 2. Rappel de la vision projet

**Interv360 — Plateforme de gestion d'interventions SAV avec intégrations externes simulées.**

Le projet s'appuie sur **ServiTech Pro**, entreprise fictive de maintenance multi-technique (25 à 50 salariés, 10 à 20 techniciens terrain), pour ancrer le besoin dans un contexte PME réaliste.

**Objectif métier** : l'objectif n'est pas de remplacer le CRM, l'email, le calendrier partagé ou l'outil de facturation déjà en place, mais d'**orchestrer le cycle SAV** de la demande à la clôture en centralisant l'information et en synchronisant les échanges entre outils existants.

**Objectif SFIA** : Interv360 est le **premier projet pilote** destiné à tester la SFIA comme **système complet de création d'application**. Le projet doit démontrer la chaîne :

```
Formulaire → workflow → projet → application
```

- **Formulaire** : besoin structuré en entrée ;
- **Workflow** : pilotage des phases et statuts dans Notion ;
- **Projet** : trajectoire documentée (intake, cadrage, architecture, delivery) ;
- **Application** : démonstrateur produit versionné dans Cursor/Git.

Chaque livrable du cadrage doit produire une double valeur : **valeur immédiate pour Interv360** et **capitalisation durable pour la SFIA**.

---

## 3. Socle SFIA à respecter

Le cadrage doit conserver le socle suivant :

- Interv360 est une **plateforme SAV avec intégrations externes simulées** ;
- le projet teste la trajectoire **formulaire → workflow → projet → application** ;
- **Notion** est le référentiel de gouvernance ;
- **Cursor/Git** est l'espace de production et de versionnement ;
- les **rôles cœur projet** et **transverses** doivent être explicitement mobilisés ;
- les intégrations CRM, email, calendrier, notifications, API, synchronisation et erreurs doivent être cadrées ;
- les décisions structurantes doivent être documentées en **ADR** ;
- les templates, prompts, composants ou standards réutilisables doivent être identifiés.

### Règle d'itération SFIA

Chaque action projet doit produire une **double valeur** :

- une valeur immédiate pour le projet Interv360 ;
- une valeur durable pour la plateforme SFIA.

À chaque livrable, il faudra identifier :

- ce qui peut devenir un **template** ;
- ce qui peut devenir un **standard** ;
- ce qui peut devenir un **prompt** ;
- ce qui peut devenir un **composant** ;
- ce qui peut générer une **ADR** ;
- ce qui peut alimenter un **workflow Notion** ;
- ce qui peut être **automatisé** demain.

---

## 4. Périmètre métier à cadrer

### Inclus dans le cadrage

- cycle demande SAV → clôture ;
- création de demande depuis CRM simulé, email simulé ou saisie manuelle ;
- qualification et priorisation ;
- planification calendrier ;
- notification client ;
- intervention terrain ;
- ajout de photos, commentaires et signature ;
- compte rendu ;
- synchronisation CRM / préparation facturation ;
- gestion des erreurs d'intégration ;
- tableau de bord activité et anomalies.

### À arbitrer pendant le cadrage

- niveau de simulation des intégrations ;
- présence ou non d'un portail client simple ;
- niveau de géolocalisation ;
- place de l'IA légère ;
- format du compte rendu ;
- niveau de gestion des erreurs ;
- périmètre MVP ;
- décisions à documenter en ADR.

### Hors cadrage immédiat

- développement complet ;
- architecture technique détaillée ;
- backlog exhaustif ;
- intégration CRM réelle ;
- moteur d'orchestration complexe ;
- géolocalisation temps réel avancée ;
- ERP ou facturation complète.

---

## 5. Utilisateurs et rôles SFIA mobilisés

### Utilisateurs métier

- Dirigeant
- Responsable SAV / planning
- Technicien terrain
- Assistant administratif
- Client final
- Manager opérationnel

### Rôles cœur projet

| Rôle | Moment d'intervention | Responsabilités | Livrables impactés | Questions clés |
|------|----------------------|-----------------|-------------------|----------------|
| **Business Analyst** | Intake, cadrage | Formaliser besoin, processus, irritants, exigences métier | Intake, cadrage, règles de gestion, cas d'usage | Qui fait quoi ? Quels irritants ? Quelles règles métier ? |
| **Concepteur fonctionnel** | Cadrage, design | Structurer parcours, écrans, comportements attendus | Parcours utilisateur, spécifications fonctionnelles, maquettes | Quel parcours cible ? Quelle expérience utilisateur ? |
| **Product Owner** | Intake, cadrage, delivery | Prioriser valeur, MVP, arbitrages fonctionnels | MVP, backlog, priorisation | Quelle valeur avant quelle complexité ? |
| **Chef de projet** | Toutes phases | Piloter planning, livrables, risques, passage de phase | Planning, décisions, suivi, REX | Peut-on passer à la phase suivante ? |
| **Architecte** | Cadrage, architecture | Structurer flux, API, intégrations, dépendances | Architecture, ADR, contrats API | Quelles dépendances ? Quels flux ? Quels risques techniques ? |
| **Développeur** | Design, delivery | Implémenter, tester techniquement, documenter | Code, tests unitaires, documentation technique | Comment produire proprement et maintenable ? |
| **QA / Testeur** | Cadrage, tests | Définir scénarios, critères d'acceptation, cas d'erreur | Cas de tests, PV de recette, stratégie QA | Comment prouver que ça fonctionne ? |

### Rôles transverses

| Rôle | Moment d'intervention | Responsabilités | Livrables impactés | Questions clés |
|------|----------------------|-----------------|-------------------|----------------|
| **RSSI** | Cadrage, architecture | Sécurité, accès, données sensibles, API, traçabilité | Exigences sécurité, ADR, règles d'accès | Quelles données protéger ? Quels accès limiter ? |
| **FinOps** | Cadrage, architecture | Coûts hébergement, stockage, API, notifications, IA | Hypothèses coûts, arbitrages, ADR | Quels coûts variables surveiller ? |
| **GreenOps** | Cadrage, architecture | Sobriété stockage, logs, géolocalisation, notifications | Contraintes sobriété, ADR | Qu'est-ce qu'on évite de stocker ou traiter inutilement ? |
| **Data / IA** | Cadrage, design | Gouvernance données, IA légère, qualité des données | Cas IA, règles données, ADR | Quelle IA utile sans surcomplexifier ? |

Cette matrice doit être considérée comme un **premier candidat au template SFIA « Role Matrix »**. Elle devra être enrichie pendant le cadrage puis capitalisée si elle s'avère réutilisable.

---

## 6. Parcours SAV cible à détailler

```
CRM / Email / Saisie manuelle
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

| Étape | Objectif métier | Acteur principal | Entrée | Sortie | Point de vigilance | Capitalisation SFIA possible |
|-------|-----------------|----------------|--------|--------|-------------------|---------------------------|
| **Création demande SAV** | Enregistrer une demande d'intervention depuis une source externe ou une saisie manuelle | Assistant administratif / Responsable SAV | Message CRM, email simulé ou saisie formulaire | Demande SAV créée avec identifiant et statut initial | Doublons entre sources, données incomplètes, traçabilité de l'origine | Template formulaire demande ; mapping sources → objet demande |
| **Qualification** | Analyser le besoin, prioriser et valider le périmètre d'intervention | Responsable SAV / planning | Demande SAV brute | Demande qualifiée, priorisée, prête à planifier | Critères de priorisation, délais de qualification, rejet ou report | Checklist qualification ; règles de priorisation |
| **Planification calendrier** | Affecter un technicien et un créneau, synchroniser avec le calendrier simulé | Responsable SAV / planning | Demande qualifiée | Intervention planifiée, créneau réservé | Conflits de créneau, disponibilité technicien, modification tardive | Template planification ; règles conflit calendrier |
| **Notification client** | Informer le client de la planification ou d'un changement | Plateforme (service notification simulé) | Intervention planifiée ou statut modifié | Notification envoyée, accusé de réception simulé | Fréquence, coût, contenu du message, échec d'envoi | Template notification ; événements déclencheurs |
| **Intervention terrain** | Exécuter l'intervention avec le contexte client complet | Technicien terrain | Dossier intervention, historique client, consignes | Intervention en cours, preuves collectées | Accès hors ligne, contexte incomplet, sécurité des données terrain | Template espace technicien ; checklist intervention |
| **Mise à jour statut / géolocalisation** | Confirmer la présence sur site et mettre à jour le statut | Technicien terrain | Intervention en cours | Statut mis à jour, coordonnée légère enregistrée si applicable | Vie privée, précision, conservation des coordonnées | Standard géolocalisation légère ; règles conservation |
| **Compte rendu** | Documenter l'intervention avec photos, commentaires et signature client | Technicien terrain | Intervention terminée sur site | Compte rendu structuré, preuves attachées | Qualité des photos, signature obligatoire ou non, délai de rédaction | Template compte rendu ; format livrable |
| **Synchronisation CRM / préparation facturation** | Remonter les éléments clôturés vers les systèmes simulés | Plateforme / Assistant administratif | Compte rendu validé | Statut CRM mis à jour, éléments facturables préparés | Échec de synchronisation, mapping incomplet, données manquantes | Standard synchronisation ; mapping statuts CRM |
| **Clôture** | Finaliser administrativement l'intervention | Assistant administratif / Responsable SAV | Intervention documentée et synchronisée | Intervention clôturée, historique client enrichi | Clôture prématurée, données incomplètes, réouverture | Workflow clôture ; critères de clôture |

*Le détail des règles de transition entre étapes sera produit en section 10. Le périmètre MVP sera arbitré ultérieurement — il n'est pas défini à ce stade.*

---

## 7. Cas de figure métier à traiter

Cas obligatoires issus de la stratégie SFIA (à détailler pendant le cadrage) :

- demande SAV issue du CRM ;
- demande SAV reçue par email ;
- planification avec calendrier ;
- notification client ;
- technicien terrain avec contexte complet ;
- preuve terrain / géolocalisation légère ;
- compte rendu avec photos et signature ;
- synchronisation CRM / préparation facturation ;
- erreur d'intégration.

---

## 8. Intégrations externes simulées

| Intégration | Objectif métier | Type de simulation | Points à cadrer |
|-------------|-----------------|-------------------|-----------------|
| **CRM** | Créer / synchroniser une demande SAV | Mock API ou fichier JSON | Mapping données, statuts, doublons |
| **Email** | Transformer une demande email en demande SAV | Email simulé / payload | Pièces jointes, classification, origine |
| **Calendrier** | Planifier une intervention | Mock calendrier | Créneau, conflit, mise à jour |
| **Notifications** | Informer le client | Mock email/SMS | Événements déclencheurs, coût, fréquence |
| **Géolocalisation** | Preuve terrain légère | Coordonnée simulée | Vie privée, précision, conservation |
| **Facturation** | Préparer les éléments facturables | Export simulé | Temps, pièces, statut clôturé |

*Le niveau réel de simulation de chaque intégration sera arbitré en section 12.*

---

## 9. Données et objets métier à modéliser

*À compléter.*

---

## 10. Règles de gestion à définir

*À compléter.*

---

## 11. Questions ouvertes issues de l'intake

*À compléter — reprendre Q1 à Q24 de project-intake.md.*

---

## 12. Arbitrages attendus

Arbitrages à traiter pendant le cadrage :

- niveau réel de simulation des intégrations ;
- inclusion ou non de l'IA légère dans le MVP ;
- statut de la géolocalisation : MVP ou cible ;
- niveau de gestion des erreurs d'intégration ;
- niveau de portail client ;
- format du compte rendu ;
- priorisation MVP ;
- décisions devant donner lieu à ADR ;
- éléments à capitaliser en templates ou standards.

---

## 13. Risques et points d'attention

*À compléter.*

---

## 14. Livrables attendus du cadrage

- matrice des rôles SFIA ;
- parcours SAV détaillé ;
- cartographie des intégrations simulées ;
- liste des règles de gestion ;
- première liste d'ADR candidates ;
- première liste des éléments capitalisables SFIA.

---

## 15. Critères de sortie du cadrage

Le cadrage ne pourra être considéré comme terminé que si :

- le périmètre MVP est défini ;
- les rôles SFIA sont clarifiés ;
- les intégrations simulées sont cadrées ;
- les cas d'erreur sont identifiés ;
- les données sensibles sont identifiées ;
- les coûts et impacts GreenOps sont au moins qualifiés ;
- les ADR candidates sont listées ;
- les éléments à capitaliser dans la SFIA sont identifiés.

---

## 16. Capitalisation SFIA attendue

À la fin du cadrage, un mini-bilan devra identifier :

| Élément | Capitalisation possible |
|---------|------------------------|
| Plan de cadrage | Template |
| Matrice des rôles | Template / Standard |
| Questions RSSI / FinOps / GreenOps | Checklist |
| Questions API / intégration | Prompt / Template |
| Cas d'erreur d'intégration | Standard de cadrage |
| Mapping statuts Git / Notion | Standard |
| Passage Intake → Cadrage | Workflow Notion |
| Structure projet Interv360 | Blueprint réutilisable |

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
