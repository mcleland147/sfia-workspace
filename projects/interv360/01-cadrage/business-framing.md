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

*À compléter — Interv360 comme plateforme SAV avec intégrations externes simulées et premier projet pilote SFIA.*

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

*À compléter.*

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

*À compléter — détailler le parcours CRM/Email → clôture issu de l'intake.*

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
