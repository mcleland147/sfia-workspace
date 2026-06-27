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

*Le détail des règles de transition entre étapes sera produit en section §10. Le périmètre MVP sera arbitré ultérieurement — il n'est pas défini à ce stade.*

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

Cette section identifie les principaux objets métier nécessaires au cadrage d'Interv360. Elle ne constitue **pas encore un modèle de données technique**. Elle sert à préparer les règles de gestion, les intégrations simulées, les droits d'accès, les enjeux RSSI, les hypothèses FinOps / GreenOps, les futurs écrans et les arbitrages d'architecture.

### 9.1 Objets métier principaux

| Objet métier | Description | Acteurs concernés | Relations principales | Points de vigilance | Capitalisation SFIA possible |
|--------------|-------------|-------------------|----------------------|---------------------|------------------------------|
| **Client** | Entreprise ou personne bénéficiaire du service SAV | Dirigeant, Assistant administratif, Client final | Possède des sites, contacts, demandes SAV, historique | Données personnelles, unicité, doublons CRM | Template Domain Model ; règle de gestion |
| **Site client** | Lieu d'intervention (adresse, accès, consignes) | Technicien, Responsable SAV | Rattaché à un client ; lié aux interventions | Adresse sensible, accès terrain, géolocalisation | Template Domain Model |
| **Contact client** | Personne référente pour une demande ou un site | Assistant administratif, Client final | Rattaché à client / site ; lié aux notifications | Coordonnées sensibles, consentement notification | Checklist RSSI |
| **Demande SAV** | Point d'entrée du besoin client (CRM, email, saisie manuelle) | Responsable SAV, Assistant administratif | Génère ou alimente une intervention ; liée au client | Source multiple, doublons, statut initial | Template Domain Model ; workflow Notion |
| **Intervention** | Unité opérationnelle d'exécution terrain | Technicien, Responsable SAV | Issue d'une demande ; liée au planning, CR, photos | Cycle de vie, statuts, synchronisation | Template Domain Model ; ADR candidate |
| **Technicien** | Ressource terrain affectée aux interventions | Technicien, Responsable SAV | Lié au planning, interventions, comptes rendus | Disponibilité, compétences, accès mobile | Règle de gestion |
| **Planning / créneau** | Créneau horaire affecté à une intervention | Responsable SAV / planning | Lie technicien, intervention, calendrier simulé | Conflits, modifications tardives, sync calendrier | Template planification |
| **Statut d'intervention** | État courant dans le cycle SAV | Tous acteurs métier | Appliqué à demande et intervention ; synchronisé | Cohérence statuts, transitions, mapping CRM | Standard mapping statuts ; ADR candidate |
| **Compte rendu** | Synthèse documentée de l'intervention | Technicien, Client final | Clôture l'intervention ; alimente facturation | Format, délai, signature, conservation | Template compte rendu |
| **Photo / pièce jointe** | Preuve visuelle ou document attaché | Technicien | Rattachée au compte rendu / intervention | Stockage, taille, conservation, GreenOps | Checklist GreenOps ; exigence sécurité |
| **Signature client** | Validation client de l'intervention | Technicien, Client final | Liée au compte rendu ; condition de clôture (A-F04) | Obligation ou option, preuve légale, conservation | Règle de gestion ; arbitrage A-F04 |
| **Notification** | Message envoyé au client ou acteur interne | Plateforme, Client final | Déclenchée par événement du parcours | Coût, fréquence, contenu, échec envoi | Hypothèse FinOps ; template notification |
| **Élément de facturation** | Données préparées pour facturation simulée | Assistant administratif | Issu du compte rendu clôturé ; export facturation | Complétude, ressaisie, mapping CRM | Règle de gestion ; standard synchronisation |
| **Utilisateur / rôle** | Profil d'accès à la plateforme | Tous | Définit droits sur objets métier | RSSI, moindre privilège, traçabilité accès | Checklist RSSI ; matrice rôles |
| **Historique / journal d'activité** | Trace des actions et changements de statut | Dirigeant, Manager, RSSI | Lié à tous les objets métier principaux | Volume logs, conservation, FinOps, GreenOps | Standard traçabilité ; checklist FinOps |

### 9.2 Objets d'intégration

| Objet d'intégration | Source / cible | Rôle dans le parcours | Risques | ADR candidate ? |
|---------------------|----------------|----------------------|---------|-----------------|
| **Demande CRM simulée** | CRM simulé → Plateforme | Création demande SAV (CF1) | Mapping incomplet, doublons, statut incohérent | Oui |
| **Email entrant simulé** | Messagerie simulée → Plateforme | Création demande SAV (CF2) | Classification erronée, pièces jointes, données manquantes | Oui |
| **Événement calendrier** | Calendrier simulé ↔ Plateforme | Planification intervention (CF3) | Conflit créneau, désynchronisation, modification tardive | Oui |
| **Notification sortante** | Plateforme → Service notification simulé | Information client (CF4) | Échec envoi, coût, contenu inadapté | Oui |
| **Flux de synchronisation CRM** | Plateforme → CRM simulé | Mise à jour statut post-intervention (CF8) | Échec sync, données partielles, retry | Oui |
| **Export facturation simulé** | Plateforme → Facturation simulée | Préparation éléments facturables | Données incomplètes, format incompatible | Oui |
| **Erreur d'intégration** | Systèmes simulés ↔ Plateforme | Gestion cas CF9 | Visibilité, reprise manuelle, alerte | Oui |
| **Log d'échange API** | Plateforme / intégrations | Traçabilité des flux (A-I08) | Volume, conservation, données sensibles dans logs | Oui |

### 9.3 Données sensibles ou à gouverner

| Donnée | Pourquoi elle est sensible | Rôle à mobiliser | Règle à définir |
|--------|---------------------------|------------------|-----------------|
| **Coordonnées client** | Données personnelles, contact direct | RSSI | Classification, accès, conservation |
| **Adresse d'intervention** | Localisation, sécurité terrain, vie privée | RSSI, GreenOps | Accès limité, conservation, exposition client |
| **Photos terrain** | Preuve visuelle, contenu potentiellement sensible | RSSI, GreenOps | Stockage, compression, durée conservation |
| **Signature client** | Preuve d'acceptation, données biométriques légères | RSSI | Obligation, format, conservation |
| **Historique d'intervention** | Traçabilité métier, données cumulées client | RSSI, Business Analyst | Accès par profil, durée conservation |
| **Données de géolocalisation** | Localisation technicien, vie privée | RSSI, GreenOps | Précision, finalité, durée, sobriété (A-FG06) |
| **Commentaires technicien** | Contenu libre, risque d'information sensible | RSSI, Data / IA | Modération, accès, conservation |
| **Données de facturation** | Données financières, temps, pièces | RSSI, FinOps | Accès restreint, intégrité, export contrôlé |
| **Logs d'intégration** | Peuvent contenir données métier en clair | RSSI, FinOps, GreenOps | Anonymisation, rétention, volume |
| **Données potentiellement utilisées par l'IA** | Résumés, classifications, inputs modèle | Data / IA, RSSI | Gouvernance usage IA, sources autorisées, conservation |

### 9.4 Lien avec les personas et parcours UX/UI

| Objet métier | Parcours utilisateur concerné | Écran candidat associé | Point UX à surveiller |
|--------------|------------------------------|------------------------|----------------------|
| **Demande SAV** | Créer demande CRM ; créer demande email ; qualifier demande | Liste des demandes ; fiche demande SAV | Doubles saisies ; statut lisible ; filtres |
| **Intervention** | Consulter intervention terrain ; réaliser compte rendu | Fiche intervention technicien | Contexte complet ; accès mobile |
| **Planning / créneau** | Planifier une intervention | Planning | Conflits visibles ; modification rapide |
| **Compte rendu** | Réaliser compte rendu ; signer intervention | Compte rendu intervention | Simplicité saisie ; nombre de champs |
| **Notification** | Parcours client (suivi demande) | Suivi des notifications | Clarté message ; statut envoi |
| **Erreur d'intégration** | Suivre anomalies d'intégration | Suivi des erreurs d'intégration | Visibilité immédiate ; action corrective |
| **KPI / activité** | Consulter pilotage d'activité | Tableau de bord SAV ; vue pilotage dirigeant | Indicateurs minimum ; lisibilité |

### 9.5 Impacts SFIA

Cette cartographie doit permettre de capitaliser :

- un **template de modèle d'objets métier** ;
- une **checklist RSSI données sensibles** ;
- une **checklist intégration API** ;
- une **base pour les règles de gestion** (section §10) ;
- une **base pour les futures ADR** ;
- une **base pour le Domain Model projet** ;
- une **passerelle entre cadrage métier et cadrage UX/UI** (sections §6, §14).

---

## 10. Règles de gestion à définir

Cette section identifie les **règles de gestion à instruire** pendant le cadrage. Elles servent à clarifier les comportements attendus du produit, les conditions de passage entre statuts, les validations métier, les contrôles fonctionnels, les erreurs d'intégration et les critères de recette futurs. Elles ne constituent **pas encore** des spécifications détaillées ni un backlog.

### 10.1 Règles de création et qualification des demandes SAV

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-C01 | Création d'une demande depuis CRM simulé | Demande SAV, Demande CRM simulée | Q1, Q12, A-F01, A-I01 | Business Analyst / Product Owner | À arbitrer ; candidat règle MVP |
| RG-C02 | Création d'une demande depuis email simulé | Demande SAV, Email entrant simulé | Q1, Q12, A-F01, A-I02 | Business Analyst / Product Owner | À arbitrer ; candidat règle MVP |
| RG-C03 | Création manuelle d'une demande | Demande SAV | Q1, A-F01 | Business Analyst / Responsable SAV | À définir ; candidat règle MVP |
| RG-C04 | Détection ou gestion des doublons (CRM, email, saisie) | Demande SAV, Client | Q12, A-I01, A-I02 | Business Analyst / Architecte | À définir ; règle de gestion |
| RG-C05 | Données minimales obligatoires à la création | Demande SAV, Client, Contact client | Q3, Q17 | Business Analyst / Product Owner | À valider ; template formulaire |
| RG-C06 | Statut initial d'une demande à la création | Demande SAV, Statut d'intervention | A-I06, Q19 | Business Analyst / Responsable SAV | À définir ; standard mapping statuts |
| RG-C07 | Règles de qualification (checklist, validation périmètre) | Demande SAV | Q3, A-F03 | Business Analyst / Responsable SAV | À arbitrer ; template qualification |
| RG-C08 | Règles de priorisation (urgence, délai, client) | Demande SAV | Q8, A-F05 | Product Owner / Responsable SAV | À définir ; règle de gestion |
| RG-C09 | Rejet ou mise en attente d'une demande incomplète | Demande SAV | Q3 | Business Analyst / Responsable SAV | À valider ; règle de gestion |

### 10.2 Règles de planification et affectation

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-P01 | Affectation d'un technicien à une intervention | Intervention, Technicien, Planning | §6 planification | Responsable SAV / planning | À définir ; règle de gestion |
| RG-P02 | Gestion des disponibilités technicien | Technicien, Planning / créneau | A-I03 | Responsable SAV / planning | À définir ; règle de gestion |
| RG-P03 | Gestion des conflits de créneau | Planning / créneau, Événement calendrier | A-I03, CF3 | Responsable SAV / Architecte | À arbitrer ; règle de gestion |
| RG-P04 | Modification ou report d'une intervention planifiée | Intervention, Planning / créneau | §6 notification client | Responsable SAV / planning | À valider ; règle de gestion |
| RG-P05 | Notification client après planification | Notification, Intervention | Q2, A-F02, A-I04 | Product Owner / Concepteur fonctionnel | À arbitrer ; template notification |
| RG-P06 | Statut après planification | Statut d'intervention, Intervention | A-I06 | Business Analyst / Responsable SAV | À définir ; standard mapping statuts |
| RG-P07 | Conditions de passage vers intervention terrain | Intervention, Statut d'intervention | §6 parcours | Business Analyst / QA | À valider ; critères d'acceptation futurs |

### 10.3 Règles d'intervention terrain

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-T01 | Accès au dossier intervention (contexte client complet) | Intervention, Client, Site client | §14 parcours technicien | Concepteur fonctionnel / Technicien (fictif) | À valider ; critère utilisabilité |
| RG-T02 | Démarrage d'intervention (conditions, horodatage) | Intervention, Statut d'intervention | §6 intervention terrain | Business Analyst / Technicien (fictif) | À définir ; règle de gestion |
| RG-T03 | Mise à jour de statut en cours d'intervention | Statut d'intervention, Intervention | A-I06 | Business Analyst / Responsable SAV | À définir ; standard mapping statuts |
| RG-T04 | Géolocalisation légère si retenue (déclenchement, finalité) | Données géolocalisation, Intervention | A-FG06, Q14, arbitrage géoloc | GreenOps / RSSI / Product Owner | À arbitrer ; principe GreenOps |
| RG-T05 | Ajout de photos (nombre, taille, moment) | Photo / pièce jointe, Intervention | A-FG01, Q14 | GreenOps / Technicien (fictif) | À arbitrer ; règle de gestion |
| RG-T06 | Ajout de commentaires technicien | Compte rendu, Intervention | A-S03, données sensibles | RSSI / Business Analyst | À valider ; règle de gestion |
| RG-T07 | Gestion d'intervention impossible ou incomplète | Intervention, Statut d'intervention | CF9, cas métier | Business Analyst / Responsable SAV | À définir ; règle de gestion |
| RG-T08 | Passage vers compte rendu (conditions minimales) | Compte rendu, Intervention | §6 compte rendu | Business Analyst / QA | À valider ; critères d'acceptation futurs |

### 10.4 Règles de compte rendu, signature et clôture

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-R01 | Champs obligatoires du compte rendu | Compte rendu | Q6, A-F06 | Concepteur fonctionnel / Business Analyst | À arbitrer ; template compte rendu |
| RG-R02 | Signature client obligatoire ou optionnelle | Signature client, Compte rendu | Q4, A-F04 | Product Owner / Business Analyst | À arbitrer ; règle de gestion |
| RG-R03 | Ajout de pièces jointes au compte rendu | Photo / pièce jointe, Compte rendu | A-FG01 | GreenOps / Technicien (fictif) | À valider ; règle de gestion |
| RG-R04 | Validation du compte rendu (qui valide, quand) | Compte rendu, Intervention | §13 circuit validation | Responsable SAV / QA | À définir ; critères d'acceptation futurs |
| RG-R05 | Conditions de clôture d'une intervention | Intervention, Statut d'intervention | §6 clôture, A-F04 | Business Analyst / Product Owner | À valider ; règle de gestion |
| RG-R06 | Réouverture éventuelle d'une intervention clôturée | Intervention, Historique | — | Business Analyst / Responsable SAV | À définir ; règle de gestion |
| RG-R07 | Préparation des éléments de facturation à la clôture | Élément de facturation, Compte rendu | §8 facturation simulée | Assistant administratif / Business Analyst | À valider ; règle de gestion |
| RG-R08 | Synchronisation CRM / systèmes simulés après clôture | Flux sync CRM, Intervention | A-I06, A-I07, CF8 | Architecte / Business Analyst | À arbitrer ; standard synchronisation |

### 10.5 Règles d'intégration et de synchronisation

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-I01 | Synchronisation CRM (création, mise à jour, statuts) | Demande CRM simulée, Flux sync CRM | A-I01, A-I06 | Architecte / Business Analyst | À arbitrer ; ADR candidate |
| RG-I02 | Synchronisation calendrier (création, modification, annulation) | Événement calendrier, Planning | A-I03 | Architecte / Responsable SAV | À arbitrer ; règle de gestion |
| RG-I03 | Notifications sortantes (événements déclencheurs, contenu) | Notification | A-I04, A-FG03 | Product Owner / FinOps | À arbitrer ; template notification |
| RG-I04 | Export facturation simulé (format, déclenchement, contenu) | Export facturation, Élément facturation | A-I01, §8 | Business Analyst / Assistant administratif | À valider ; règle de gestion |
| RG-I05 | Mapping des statuts entre plateforme et systèmes simulés | Statut d'intervention, Flux sync | A-I06, Q19 | Architecte / Business Analyst | À définir ; standard mapping statuts |
| RG-I06 | Gestion des erreurs d'intégration (détection, gravité) | Erreur d'intégration | A-I07, CF9 | Architecte / QA | À arbitrer ; standard de cadrage |
| RG-I07 | Journalisation des échanges API | Log d'échange API | A-I08, A-FG02 | RSSI / Architecte | À valider ; exigence sécurité |
| RG-I08 | Reprise manuelle ou retry automatique | Erreur d'intégration | A-I07 | Architecte / Product Owner | À arbitrer ; ADR candidate |
| RG-I09 | Visibilité des anomalies pour manager / dirigeant | Erreur d'intégration, KPI | §14 écran anomalies | Manager opérationnel / Concepteur UX | À valider ; critère utilisabilité |

### 10.6 Règles de sécurité, données et accès

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-S01 | Accès par profil (dirigeant, planning, technicien, admin, client) | Utilisateur / rôle, tous objets | A-S02, Q10 | RSSI / Business Analyst | À définir ; exigence sécurité |
| RG-S02 | Visibilité des données pour le client final | Client, Notification, Demande SAV | A-S05, A-F02 | RSSI / Concepteur fonctionnel | À arbitrer ; exigence sécurité |
| RG-S03 | Conservation des photos terrain | Photo / pièce jointe | A-S03, A-FG01, Q14 | RSSI / GreenOps | À arbitrer ; principe GreenOps |
| RG-S04 | Conservation des signatures client | Signature client | A-S03 | RSSI | À valider ; exigence sécurité |
| RG-S05 | Conservation des logs d'intégration | Log d'échange API | A-FG02, A-S04 | RSSI / FinOps / GreenOps | À arbitrer ; exigence sécurité |
| RG-S06 | Traçabilité des modifications (qui, quoi, quand) | Historique / journal d'activité | A-S04, Q16 | RSSI / Architecte | À valider ; standard traçabilité |
| RG-S07 | Données accessibles au technicien en intervention | Intervention, Client, Site client | RG-T01, A-S02 | RSSI / Technicien (fictif) | À confirmer par le rôle valideur |
| RG-S08 | Données utilisables par l'IA si l'IA est retenue | Données IA, Compte rendu, Demande SAV | A-IA06, Q7, Q15 | Data / IA / RSSI | À arbitrer ; exigence gouvernance IA |

### 10.7 Règles FinOps / GreenOps / sobriété

| ID | Règle à définir | Objet concerné | Questions / arbitrages liés | Rôle valideur | Sortie attendue |
|----|-----------------|----------------|----------------------------|---------------|-----------------|
| RG-FG01 | Limitation du stockage photos (taille, nombre, compression) | Photo / pièce jointe | A-FG01, Q14 | GreenOps / FinOps | À arbitrer ; principe GreenOps |
| RG-FG02 | Limitation du volume et de la durée des logs | Log d'échange API, Historique | A-FG02, Q13 | FinOps / GreenOps | À arbitrer ; hypothèse FinOps |
| RG-FG03 | Fréquence maximale des notifications client | Notification | A-FG03, A-I04 | FinOps / Product Owner | À arbitrer ; hypothèse FinOps |
| RG-FG04 | Durée de conservation globale des données opérationnelles | Tous objets métier | A-FG07, Q14 | GreenOps / RSSI | À arbitrer ; principe GreenOps |
| RG-FG05 | Sobriété de la géolocalisation (précision, fréquence, finalité) | Données géolocalisation | A-FG06 | GreenOps / RSSI | À arbitrer ; principe GreenOps |
| RG-FG06 | Usage raisonné de l'IA (quand, sur quelles données) | Données IA | A-FG05, A-IA01 | FinOps / Data / IA | À arbitrer ; hypothèse FinOps |
| RG-FG07 | Indicateurs de coût ou de volume à suivre (stockage, API, notif, IA) | KPI / activité | Q13, Q5 | FinOps / Dirigeant (fictif) | À définir ; hypothèse FinOps |

### 10.8 Capitalisation SFIA des règles de gestion

Cette section doit permettre de capitaliser :

- un **template Business Rules Matrix** ;
- une **checklist de règles par type de projet** ;
- des **critères de transformation en tests fonctionnels** ;
- des **prompts de génération de règles** ;
- des **prompts de revue BA / PO / QA** ;
- des **règles candidates pour workflow Notion** ;
- une **base pour les futurs critères d'acceptation**.

---

## 11. Questions ouvertes issues de l'intake

Les questions ci-dessous reprennent **Q1 à Q24** de `project-intake.md` v1.3 validé. Elles sont regroupées par thème de cadrage pour guider les arbitrages, les règles de gestion et la capitalisation SFIA.

### 11.1 Parcours métier et périmètre fonctionnel

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q1 | Quel canal prioritaire pour la saisie des demandes client au MVP ? | Parcours demande, point d'entrée unique | Business Analyst / Product Owner | Arbitrage MVP ; règle de gestion |
| Q2 | Le client final a-t-il un accès direct (portail simple) ou uniquement des notifications ? | Périmètre portail, expérience client | Concepteur fonctionnel / Product Owner | Arbitrage MVP ; règle de gestion |
| Q3 | Quel niveau de détail pour la qualification (checklist, devis rapide) ? | Étape qualification, complexité métier | Business Analyst / Concepteur fonctionnel | Règle de gestion ; template qualification |
| Q4 | La signature client est-elle obligatoire pour clôturer une intervention ? | Règle de clôture, parcours compte rendu | Business Analyst / Product Owner | Règle de gestion ; arbitrage MVP |
| Q5 | Quels indicateurs minimum pour le tableau de bord dirigeant ? | Périmètre pilotage, vision consolidée | Business Analyst / Product Owner | Arbitrage MVP ; règle de gestion |
| Q6 | Quel format de compte rendu (PDF, page web, les deux) ? | Livrable compte rendu, clôture | Concepteur fonctionnel / Product Owner | Arbitrage MVP ; template compte rendu |
| Q8 | Faut-il modéliser plusieurs types d'intervention (urgence, préventif, installation) ? | Complexité métier, modélisation | Business Analyst / Architecte | Arbitrage MVP ; règle de gestion ; ADR candidate |

### 11.2 Intégrations externes et API

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q11 | Quels flux API sont nécessaires pour supporter le cycle demande → intervention → clôture ? | Architecture des échanges, dépendances | Architecte / Business Analyst | ADR candidate ; template intégration |
| Q12 | Quels systèmes externes doivent être simulés ou préparés : CRM, facturation, notification, IA ? | Périmètre intégrations simulées | Architecte / Product Owner | Arbitrage MVP ; cartographie intégrations |

### 11.3 Données, sécurité et gouvernance

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q9 | Quels rôles transverses doivent intervenir dès le cadrage : RSSI, FinOps, GreenOps, Data/IA, Architecte ? | Gouvernance projet, mobilisation des rôles | Chef de projet / RSSI | Workflow Notion ; checklist rôles |
| Q10 | Quelles données doivent être considérées comme sensibles ou critiques ? | Classification données, accès | RSSI / Data / IA | Exigence sécurité ; règle de gestion ; ADR candidate |
| Q16 | Quelles décisions devront faire l'objet d'une ADR dès la phase de cadrage ou d'architecture ? | Traçabilité décisionnelle | Architecte / Chef de projet | ADR candidate ; standard gouvernance |
| Q22 | Quelles décisions doivent déclencher une ADR ? | Critères de documentation des décisions | Architecte / Chef de projet | ADR candidate ; standard gouvernance |

### 11.4 FinOps, GreenOps et sobriété

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q13 | Quels coûts doivent être suivis dès le prototype : hébergement, stockage, notifications, API, IA ? | Hypothèses coûts, arbitrages économiques | FinOps / Architecte | Hypothèse FinOps ; ADR candidate |
| Q14 | Quels principes GreenOps appliquer au stockage des photos, documents et comptes rendus ? | Sobriété, conservation, limitation des traitements | GreenOps / RSSI | Checklist GreenOps ; règle de gestion ; ADR candidate |

### 11.5 IA légère

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q7 | L'assistance IA légère entre-t-elle dans le MVP ou en phase ultérieure ? | Périmètre fonctionnel F12 | Product Owner / Data / IA | Arbitrage MVP ; backlog futur |
| Q15 | Quelle place donner à l'IA légère : MVP, option, ou phase ultérieure ? | Positionnement IA, gouvernance usage | Data / IA / Product Owner | Arbitrage MVP ; exigence gouvernance IA |

### 11.6 Automatisation SFIA

| ID | Question | Impact cadrage | Rôle principal à mobiliser | Sortie attendue |
|----|----------|----------------|---------------------------|-----------------|
| Q17 | Quels champs minimaux un formulaire de besoin devrait-il contenir ? | Entrée formulaire → workflow | Business Analyst / Chef de projet | Template SFIA ; workflow Notion |
| Q18 | Quels templates SFIA doivent être déclenchés automatiquement ? | Automatisation documentaire | Chef de projet / Business Analyst | Template SFIA ; workflow Notion |
| Q19 | Quels statuts Notion doivent piloter le workflow projet ? | Pilotage des phases projet | Chef de projet | Workflow Notion ; standard gouvernance |
| Q20 | Quels rôles transverses doivent être déclenchés selon le type de projet ? | Matrice rôles dynamique | Chef de projet | Template SFIA ; workflow Notion |
| Q21 | Quels livrables peuvent être générés automatiquement ? | Génération documentaire, productivité SFIA | Chef de projet / Business Analyst | Template SFIA ; workflow Notion |
| Q23 | Quels éléments doivent être synchronisés entre Notion et Cursor ? | Gouvernance Git / Notion | Chef de projet / Architecte | Standard gouvernance ; workflow Notion |
| Q24 | Quels composants ou prompts peuvent devenir réutilisables ? | Capitalisation SFIA | Chef de projet / Architecte | Template SFIA ; composant réutilisable |

Ces questions ne doivent pas toutes être résolues immédiatement. Elles constituent la **base de travail du cadrage** et permettront d'alimenter les arbitrages, les règles de gestion, les ADR candidates et les éléments de capitalisation SFIA.

---

## 12. Arbitrages attendus

Les arbitrages ci-dessous découlent des questions ouvertes de la section §11. Ils structurent les décisions à traiter pendant le cadrage **sans les trancher à ce stade**.

### 12.1 Arbitrages fonctionnels

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-F01 | Canal prioritaire de création des demandes SAV (CRM simulé, email simulé, saisie manuelle) | Q1 | Business Analyst, Product Owner | Décision MVP ; règle de gestion | Non |
| A-F02 | Portail client simple ou notifications uniquement | Q2 | Concepteur fonctionnel, Product Owner | Décision MVP ; règle de gestion | Non |
| A-F03 | Niveau de qualification (checklist minimale, devis rapide, validation approfondie) | Q3 | Business Analyst, Concepteur fonctionnel | Règle de gestion ; template SFIA | Non |
| A-F04 | Signature client obligatoire ou optionnelle pour clôturer une intervention | Q4 | Business Analyst, Product Owner | Règle de gestion ; décision MVP | Non |
| A-F05 | Types d'intervention à modéliser (urgence, préventif, installation, autre) | Q8 | Business Analyst, Architecte | Décision MVP ; règle de gestion | Oui |
| A-F06 | Format du compte rendu (PDF, page web, les deux) | Q6 | Concepteur fonctionnel, Product Owner | Décision MVP ; template SFIA | Non |

### 12.2 Arbitrages intégration / API

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-I01 | Périmètre et niveau de simulation du CRM | Q11, Q12 | Architecte, Product Owner | Décision MVP ; cartographie intégrations | Oui |
| A-I02 | Périmètre et niveau de simulation de l'email entrant | Q11, Q12 | Architecte, Business Analyst | Décision MVP ; règle de gestion | Oui |
| A-I03 | Périmètre et niveau de simulation du calendrier | Q11, Q12 | Architecte, Business Analyst | Décision MVP ; règle de gestion | Oui |
| A-I04 | Périmètre des notifications client (canaux, événements, contenu) | Q2, Q12 | Architecte, Product Owner, FinOps | Décision MVP ; hypothèse FinOps | Oui |
| A-I05 | Niveau de simulation des API (mock, contrats partiels, échanges complets simulés) | Q11, Q12 | Architecte | ADR ; décision MVP | Oui |
| A-I06 | Synchronisation des statuts entre plateforme, CRM simulé et calendrier | Q11, Q23 | Architecte, Business Analyst | Règle de gestion ; ADR | Oui |
| A-I07 | Niveau de gestion des erreurs d'intégration (alerte, retry, reprise manuelle) | Q11, Q12 | Architecte, QA / Testeur | Règle de gestion ; standard de cadrage | Oui |
| A-I08 | Journalisation des flux d'intégration (logs, traçabilité, supervision) | Q11 | Architecte, RSSI | Exigence sécurité ; règle de gestion | Oui |

### 12.3 Arbitrages sécurité / gouvernance des données

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-S01 | Classification des données sensibles ou critiques | Q10 | RSSI, Data / IA | Exigence sécurité ; règle de gestion | Oui |
| A-S02 | Règles d'accès par profil (dirigeant, planning, technicien, admin, client) | Q10, Q9 | RSSI, Business Analyst | Exigence sécurité ; règle de gestion | Oui |
| A-S03 | Conservation des photos, signatures et comptes rendus | Q10, Q14 | RSSI, GreenOps | Exigence sécurité ; principe GreenOps | Oui |
| A-S04 | Niveau de traçabilité des actions et des modifications de statut | Q10, Q16, Q22 | RSSI, Architecte | Exigence sécurité ; ADR | Oui |
| A-S05 | Exposition des données au client final (notifications vs portail) | Q2, Q10 | RSSI, Concepteur fonctionnel | Exigence sécurité ; décision MVP | Oui |
| A-S06 | Mobilisation et périmètre d'intervention du RSSI au cadrage | Q9, Q16 | RSSI, Chef de projet | Checklist rôles ; workflow Notion | Non |

### 12.4 Arbitrages FinOps / GreenOps

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-FG01 | Politique de stockage des photos et documents | Q13, Q14 | FinOps, GreenOps | Hypothèse FinOps ; principe GreenOps | Oui |
| A-FG02 | Volume et durée de conservation des logs | Q13, Q14 | FinOps, GreenOps, RSSI | Hypothèse FinOps ; principe GreenOps | Oui |
| A-FG03 | Coût et fréquence des notifications client | Q13 | FinOps, Product Owner | Hypothèse FinOps ; décision MVP | Non |
| A-FG04 | Coût des appels API et des intégrations simulées | Q13 | FinOps, Architecte | Hypothèse FinOps ; ADR | Oui |
| A-FG05 | Coût éventuel des services IA | Q13, Q7, Q15 | FinOps, Data / IA | Hypothèse FinOps ; décision MVP | Oui |
| A-FG06 | Sobriété de la géolocalisation (précision, fréquence, finalité) | Q14 | GreenOps, RSSI | Principe GreenOps ; règle de gestion | Oui |
| A-FG07 | Durée de conservation globale des données opérationnelles | Q14, Q10 | GreenOps, RSSI | Principe GreenOps ; exigence sécurité | Oui |

### 12.5 Arbitrages IA légère

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-IA01 | Inclusion ou non de l'IA légère dans le MVP | Q7, Q15 | Product Owner, Data / IA | Décision MVP ; backlog futur | Oui |
| A-IA02 | Cas d'usage IA candidats à évaluer (résumé CR, classification, priorisation) | Q7, Q15, Q12 | Data / IA, Business Analyst | Backlog futur ; décision MVP | Oui |
| A-IA03 | Résumé automatique de compte rendu : utile, optionnel ou hors MVP | Q7, Q15 | Data / IA, Concepteur fonctionnel | Décision MVP ; backlog futur | Non |
| A-IA04 | Classification automatique des demandes SAV | Q7, Q15 | Data / IA, Business Analyst | Décision MVP ; règle de gestion | Oui |
| A-IA05 | Aide à la priorisation des interventions | Q7, Q15 | Data / IA, Product Owner | Décision MVP ; backlog futur | Non |
| A-IA06 | Gouvernance des données utilisées par l'IA (sources, conservation, anonymisation) | Q10, Q15 | Data / IA, RSSI | Exigence sécurité ; ADR | Oui |

### 12.6 Arbitrages automatisation SFIA

| ID | Arbitrage | Questions liées | Rôles à mobiliser | Sortie attendue | ADR candidate ? |
|----|-----------|-----------------|-------------------|-----------------|-----------------|
| A-SF01 | Champs minimaux du formulaire de besoin | Q17 | Business Analyst, Chef de projet | Template SFIA ; workflow Notion | Oui |
| A-SF02 | Templates SFIA à déclencher automatiquement selon la phase | Q18 | Chef de projet, Business Analyst | Template SFIA ; workflow Notion | Oui |
| A-SF03 | Statuts Notion pilotant le workflow projet | Q19 | Chef de projet | Workflow Notion ; standard gouvernance | Oui |
| A-SF04 | Rôles déclenchables selon le type de projet | Q9, Q20 | Chef de projet, RSSI | Template SFIA ; workflow Notion | Oui |
| A-SF05 | Livrables générables automatiquement (intake, cadrage, ADR, doc) | Q21 | Chef de projet, Business Analyst | Template SFIA ; workflow Notion | Oui |
| A-SF06 | Éléments à synchroniser entre Notion et Cursor | Q23 | Chef de projet, Architecte | Standard gouvernance ; workflow Notion | Oui |
| A-SF07 | Éléments à capitaliser en prompts, templates ou composants | Q24, Q18 | Chef de projet, Architecte | Template SFIA ; composant réutilisable | Oui |

Les arbitrages listés ci-dessus seront traités progressivement pendant le cadrage. Ils ne doivent pas tous être tranchés immédiatement. Les décisions structurantes seront documentées sous forme d'**ADR** lorsqu'elles impactent durablement l'architecture, le périmètre MVP, la gouvernance SFIA ou les choix d'automatisation.

---

## 13. Validation métier, fonctionnelle et UX/UI

Cette section définit les points de validation nécessaires pour garantir que le projet Interv360 respecte une logique métier, fonctionnelle et utilisateur avant tout passage vers la conception détaillée, l'architecture ou le développement. Dans le cadre du projet pilote, ces validations peuvent être **fictives**, mais elles doivent être formalisées afin d'alimenter les futurs templates SFIA.

### 13.1 Circuit de validation métier et fonctionnelle

| Étape | Livrable validé | Valideur fictif | Critères de validation | Effet de la validation | Capitalisation SFIA |
|-------|-----------------|-----------------|------------------------|------------------------|---------------------|
| **Intake** | Project intake | Dirigeant / Product Owner | Besoin compréhensible, objectif clair, périmètre initial cohérent | Passage au cadrage | Template Intake + workflow Notion |
| **Cadrage métier** | Business framing | Responsable SAV / Product Owner | Parcours, rôles, périmètre et irritants cohérents | Passage à la conception fonctionnelle | Template Business Framing |
| **Parcours utilisateur** | Parcours SAV cible | Responsable planning / Technicien | Parcours réaliste, utilisable et aligné terrain | Préparation UX/UI | Template User Journey |
| **Règles de gestion** | Règles métier | Responsable SAV / Assistant administratif | Règles applicables, non ambiguës et testables | Préparation spécifications | Template Business Rules |
| **Données sensibles** | Cartographie données | RSSI | Données sensibles, accès et conservation identifiés | Passage architecture sécurité | Checklist RSSI |
| **Coûts et sobriété** | Hypothèses FinOps / GreenOps | FinOps / GreenOps | Coûts variables et impacts de sobriété qualifiés | Arbitrages MVP | Checklist FinOps / GreenOps |
| **Arbitrages structurants** | ADR candidates | Architecte / PO / Chef de projet | Décisions structurantes identifiées et traçables | Préparation architecture | Template ADR |
| **Critères d'acceptation** | Critères de validation fonctionnelle | PO / QA | Critères testables et vérifiables | Préparation recette | Template Acceptance Criteria |
| **Validation UX** | Parcours et écrans candidats | Utilisateurs métier fictifs / Concepteur UX | Parcours compréhensibles, écrans utiles, friction limitée | Préparation maquettes | Template UX Review |

### 13.2 Critères de passage de phase

| Passage de phase | Conditions minimales | Bloquant si absent ? | Trace attendue |
|------------------|---------------------|----------------------|----------------|
| **Intake → Cadrage** | Intake validé, problème métier documenté, questions ouvertes listées | Oui | KNO-002 Published ; statut projet Cadrage |
| **Cadrage → Conception fonctionnelle** | Parcours SAV, rôles, arbitrages et règles de gestion cadrés | Oui | Business framing validé ; workflow Notion |
| **Conception fonctionnelle → UX/UI détaillée** | Personas, parcours utilisateurs et écrans candidats identifiés | Oui | Template User Journey ; UX Framing |
| **UX/UI → Architecture** | Critères d'utilisabilité définis, validation UX formalisée | Oui | Template UX Review ; trace validation |
| **Architecture → Delivery** | ADR structurantes validées, contrats d'intégration cadrés | Oui | ADR publiés ; architecture validée |
| **Delivery → Tests** | Fonctionnalités livrées documentées, critères d'acceptation définis | Oui | Documentation technique ; critères recette |
| **Tests → Recette** | Cas de tests exécutés, anomalies traitées ou arbitrées | Oui | PV de tests ; PV de recette |
| **Recette → REX / capitalisation** | Recette validée, éléments capitalisables identifiés | Oui | REX ; bilan capitalisation SFIA |

---

## 14. Personas, parcours utilisateurs et cadrage UX/UI

Cette section prépare la conception UX/UI **sans produire encore de maquettes détaillées**. Elle sert à identifier les utilisateurs, leurs objectifs, leurs irritants, leurs parcours critiques, les écrans candidats et les critères d'utilisabilité à valider avant la conception détaillée.

### 14.1 Personas métier

| Persona | Objectif principal | Irritants actuels | Besoins dans Interv360 | Parcours critique | Validation attendue |
|---------|-------------------|-------------------|------------------------|-------------------|---------------------|
| **Dirigeant** | Vision consolidée de l'activité SAV | Pas de tableau de bord fiable, données dispersées | Pilotage, indicateurs, anomalies visibles | Consulter le pilotage d'activité | Validation parcours dirigeant ; critères utilisabilité pilotage |
| **Responsable SAV / planning** | Organiser et ajuster les interventions | Planning Excel, double saisie, conflits de créneaux | Planning centralisé, qualification, affectation | Planifier une intervention ; qualifier une demande | Validation parcours planning |
| **Technicien terrain** | Exécuter et documenter l'intervention | Contexte incomplet, compte rendu tardif | Accès contexte client, CR simple sur mobile | Consulter intervention ; réaliser compte rendu ; signer | Validation parcours technicien |
| **Assistant administratif** | Préparer clôture et facturation | Ressaisie manuelle, données terrain incomplètes | Synchronisation CRM, éléments facturables structurés | Créer demande ; suivre clôture | Validation parcours administratif |
| **Client final** | Suivre sa demande et recevoir le compte rendu | Appels pour connaître l'avancement | Notifications, visibilité statut, réception CR | Recevoir notifications ; consulter statut (si portail) | Validation parcours client |
| **Manager opérationnel** | Superviser charge, délais et anomalies | Manque d'indicateurs opérationnels | Tableau de bord anomalies, suivi charge | Suivre anomalies d'intégration ; consulter pilotage | Validation parcours manager |

### 14.2 Parcours utilisateurs à préparer

| Parcours | Persona principal | Objectif | Étapes clés | Points de friction à analyser | Sortie attendue |
|----------|-------------------|----------|-------------|------------------------------|-----------------|
| Créer une demande SAV depuis un CRM simulé | Assistant administratif | Enregistrer une demande sans ressaisie | Réception CRM → création demande → confirmation | Mapping incomplet, doublons, statut initial | Template User Journey ; règle de gestion |
| Créer une demande SAV depuis un email simulé | Assistant administratif | Transformer un email en demande structurée | Réception email → extraction → qualification initiale | Classification, pièces jointes, données manquantes | Template User Journey ; règle de gestion |
| Qualifier une demande | Responsable SAV / planning | Prioriser et valider le périmètre | Ouverture demande → analyse → qualification | Critères flous, délai qualification | Règle de gestion ; écran fiche demande |
| Planifier une intervention | Responsable SAV / planning | Affecter technicien et créneau | Demande qualifiée → calendrier → notification | Conflits créneau, modification tardive | Écran planning ; template planification |
| Consulter une intervention terrain | Technicien terrain | Accéder au contexte avant intervention | Liste interventions → fiche → contexte client | Contexte incomplet, accès mobile | Écran fiche intervention technicien |
| Réaliser un compte rendu | Technicien terrain | Documenter l'intervention sur site | Fin intervention → photos → commentaires → CR | Saisie lourde, hors ligne, délai | Écran compte rendu ; critères utilisabilité |
| Signer une intervention | Technicien terrain / Client final | Valider la clôture terrain | CR → signature → validation | Signature obligatoire ou non, preuve | Règle de gestion ; arbitrage A-F04 |
| Suivre les anomalies d'intégration | Manager opérationnel / Dirigeant | Détecter et traiter les échecs de sync | Alerte → détail erreur → reprise | Visibilité, priorisation, traçabilité | Écran erreurs d'intégration |
| Consulter le pilotage d'activité | Dirigeant / Manager opérationnel | Vision consolidée de l'activité | Tableau de bord → filtres → détail | Indicateurs incomplets, lisibilité | Écran vue pilotage dirigeant |

### 14.3 Écrans candidats

| Écran candidat | Utilisateurs concernés | Objectif | Données affichées | Questions UX à traiter |
|----------------|------------------------|----------|-------------------|------------------------|
| **Tableau de bord SAV** | Dirigeant, Manager opérationnel | Vision globale activité | Demandes en cours, anomalies, indicateurs clés | Quels indicateurs minimum ? Lisibilité mobile ? |
| **Liste des demandes** | Responsable SAV, Assistant administratif | Parcourir et filtrer les demandes | Statut, client, priorité, date, source | Filtres, tri, recherche, doubles saisies |
| **Fiche demande SAV** | Responsable SAV, Assistant administratif | Détail et qualification d'une demande | Historique client, description, statut, pièces | Niveau de détail qualification ; actions disponibles |
| **Planning** | Responsable SAV / planning | Visualiser et ajuster le planning | Créneaux, techniciens, interventions, conflits | Vue jour/semaine ; modification rapide ; conflits visibles |
| **Fiche intervention technicien** | Technicien terrain | Préparer et exécuter l'intervention | Client, adresse, consignes, historique, statut | Accès mobile ; hors ligne ; contexte complet |
| **Compte rendu intervention** | Technicien terrain | Documenter l'intervention | Photos, commentaires, checklist, signature | Simplicité saisie ; nombre de champs ; sobriété |
| **Suivi des notifications** | Assistant administratif, Client final | Vérifier les notifications envoyées | Événement, canal, statut envoi, contenu | Fréquence ; coût ; lisibilité message client |
| **Suivi des erreurs d'intégration** | Manager opérationnel, Architecte | Traiter les échecs de synchronisation | Type erreur, source, horodatage, action corrective | Visibilité immédiate ; niveau de détail logs |
| **Vue pilotage dirigeant** | Dirigeant | Piloter l'activité et anticiper | KPI, délais, charge, taux clôture, anomalies | Quels KPI minimum (Q5) ; granularité ; export |

### 14.4 Critères d'utilisabilité à valider

- **Compréhension rapide du statut d'une demande** — l'utilisateur identifie le statut sans ambiguïté ;
- **Limitation des doubles saisies** — une information saisie une fois est réutilisée dans le parcours ;
- **Accès rapide au contexte intervention** — le technicien accède au dossier client en moins de 3 actions ;
- **Simplicité du compte rendu terrain** — saisie minimale sur mobile, champs essentiels priorisés ;
- **Visibilité des erreurs d'intégration** — les anomalies sont visibles sans recherche proactive ;
- **Lisibilité du planning** — conflits et disponibilités compréhensibles en un coup d'œil ;
- **Clarté des notifications client** — message compréhensible, statut et prochaine étape explicites ;
- **Sobriété des écrans** — pas de surcharge visuelle, informations hiérarchisées ;
- **Cohérence entre parcours métier et écrans** — chaque étape du parcours §6 a un support écran identifiable.

### 14.5 Capitalisation SFIA UX/UI

Cette section doit permettre de capitaliser :

- un **template Persona Matrix** ;
- un **template User Journey** ;
- un **template UX/UI Framing** ;
- une **checklist UX Review** ;
- des **prompts de génération de maquettes** ;
- des **critères d'acceptation UX** ;
- des **composants UI candidats** réutilisables.

---

## 15. Risques et points d'attention

Cette section identifie les principaux **risques et points d'attention** issus du cadrage Interv360. Elle sert à préparer les arbitrages, les ADR candidates, les validations métier/fonctionnelles/UX et les actions de sécurisation avant les phases de conception, architecture et delivery.

### 15.1 Risques métier et fonctionnels

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-M01 | Périmètre SAV trop large | §4 Inclus, §7 cas obligatoires | Dérive scope, MVP inexploitable, cadrage interminable | Product Owner / Chef de projet | Qualifier périmètre ; préparer arbitrage priorisation |
| R-M02 | Règles de qualification ambiguës | RG-C07, Q3, A-F03 | Demandes mal traitées, délais qualification | Business Analyst / Responsable SAV | Formaliser règles ; valider avec valideur fictif |
| R-M03 | Priorisation des demandes non définie | RG-C08, Q8 | Interventions mal ordonnées, insatisfaction client | Product Owner / Responsable SAV | Préparer arbitrage priorisation |
| R-M04 | Clôture d'intervention mal cadrée | RG-R05, §6 clôture | Facturation retardée, données incomplètes | Business Analyst / Assistant administratif | Compléter règles clôture ; lier à RG-R07 |
| R-M05 | Compte rendu trop complexe | RG-R01, §14 critères utilisabilité | Retards terrain, adoption technicien faible | Concepteur fonctionnel / Technicien (fictif) | Préparer validation UX ; arbitrer format A-F06 |
| R-M06 | Signature client non arbitrée | RG-R02, A-F04, Q4 | Blocage clôture ou preuve insuffisante | Product Owner / Business Analyst | Traiter arbitrage A-F04 |
| R-M07 | Portail client ou notifications non clarifiés | A-F02, Q2, RG-P05 | Expérience client incohérente, surcoût ou frustration | Product Owner / Concepteur fonctionnel | Traiter arbitrage A-F02 |
| R-M08 | Indicateurs dirigeant trop nombreux ou flous | Q5, §14 écran pilotage | Tableau de bord inutilisable | Business Analyst / Dirigeant (fictif) | Préparer arbitrage indicateurs minimum |

### 15.2 Risques UX/UI et adoption utilisateur

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-UX01 | Parcours technicien trop lourd | §14.2, RG-T01 à RG-T08 | Faible adoption terrain, CR tardifs | Concepteur fonctionnel / Technicien (fictif) | Préparer validation UX parcours technicien |
| R-UX02 | Planning difficile à lire | §14.3 planning, §14.4 lisibilité | Erreurs planification, conflits créneaux | Concepteur fonctionnel / Responsable SAV | Préparer revue UX planning |
| R-UX03 | Trop grand nombre d'écrans candidats | §14.3 (9 écrans) | Complexité produit, coût delivery | Product Owner / Concepteur fonctionnel | Prioriser écrans lors arbitrages MVP |
| R-UX04 | Double saisie non résolue | §14.4, RG-C04, O8 intake | Perte temps, incohérences données | Business Analyst / Concepteur UX | Identifier règles anti-doublon ; lier intégrations |
| R-UX05 | Compte rendu terrain peu utilisable sur mobile | §14.3 CR, RG-T05 | Qualité CR dégradée, photos manquantes | Concepteur fonctionnel / Technicien (fictif) | Préparer validation UX mobile |
| R-UX06 | Erreurs d'intégration peu visibles | RG-I09, §14.3 anomalies | Anomalies non traitées, perte confiance dirigeant | Concepteur UX / Manager opérationnel | Préparer revue écran anomalies |
| R-UX07 | Notifications client peu compréhensibles | RG-P05, RG-I03, §14.4 clarté | Appels clients, insatisfaction | Concepteur fonctionnel / Client final (fictif) | Préparer validation contenu notifications |
| R-UX08 | Absence de validation UX fictive | §13.1 Validation UX, §13.2 passage UX | Parcours non validés avant maquettes | Chef de projet / Concepteur UX | Planifier sessions validation UX fictive |

### 15.3 Risques intégration et synchronisation

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-I01 | Simulation CRM trop simplifiée | A-I01, §9.2, CF1 | Démonstrateur peu crédible, mapping insuffisant | Architecte / Business Analyst | Traiter arbitrage niveau simulation A-I05 |
| R-I02 | Mapping des statuts incomplet | RG-I05, A-I06, §9.1 Statut | Incohérences entre systèmes, erreurs sync | Architecte / Business Analyst | Compléter standard mapping statuts |
| R-I03 | Gestion des erreurs insuffisante | RG-I06, A-I07, CF9 | Anomalies silencieuses, données perdues | Architecte / QA | Traiter arbitrage A-I07 |
| R-I04 | Absence de retry ou reprise manuelle | RG-I08, A-I07 | Blocage parcours, intervention non clôturée | Architecte / Product Owner | Préparer arbitrage retry vs manuel |
| R-I05 | Logs trop détaillés ou insuffisants | RG-I07, A-I08, A-FG02 | RSSI non satisfait ou coûts GreenOps/FinOps | RSSI / FinOps / Architecte | Traiter arbitrage journalisation |
| R-I06 | Synchronisation calendrier ambiguë | RG-I02, A-I03, CF3 | Conflits créneaux, technicien mal informé | Architecte / Responsable SAV | Compléter règles RG-P03, RG-I02 |
| R-I07 | Export facturation mal cadré | RG-I04, RG-R07, §8 facturation | Éléments facturables incomplets | Business Analyst / Assistant administratif | Formaliser règles export |
| R-I08 | Dérive vers architecture technique prématurée | §4 Hors cadrage, §12 arbitrages API | Cadrage métier incomplet, décisions techniques hâtives | Chef de projet / Architecte | Maintenir garde-fou §15.7 ; reporter architecture |

### 15.4 Risques sécurité, données et gouvernance

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-S01 | Données sensibles non classifiées | §9.3, A-S01, Q10 | Fuite données, non-conformité | RSSI / Data / IA | Compléter classification ; checklist RSSI |
| R-S02 | Accès par profil non cadrés | RG-S01, A-S02 | Accès excessifs, données exposées | RSSI / Business Analyst | Formaliser matrice accès |
| R-S03 | Conservation photos/signatures/logs non arbitrée | RG-S03, RG-S04, RG-S05, A-FG07 | Stockage excessif ou preuves perdues | RSSI / GreenOps | Traiter arbitrages conservation |
| R-S04 | Géolocalisation insuffisamment encadrée | RG-T04, RG-FG05, A-FG06 | Vie privée, coûts, données sensibles | RSSI / GreenOps | Traiter arbitrage géolocalisation |
| R-S05 | Données client trop exposées | RG-S02, A-S05 | Confiance client compromise | RSSI / Concepteur fonctionnel | Traiter arbitrage portail vs notifications |
| R-S06 | Traçabilité insuffisante | RG-S06, A-S04 | Décisions non reconstituables | RSSI / Architecte | Définir standard traçabilité |
| R-S07 | Usage IA sans gouvernance | RG-S08, A-IA06 | Données IA non maîtrisées | Data / IA / RSSI | Traiter arbitrages A-IA01, A-IA06 |
| R-S08 | Rôle RSSI mobilisé trop tard | §5 rôles transverses, A-S06 | Exigences sécurité réactives, rework | RSSI / Chef de projet | Mobiliser RSSI dès suite cadrage |

### 15.5 Risques FinOps / GreenOps

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-FG01 | Stockage photos/documents trop volumineux | RG-FG01, A-FG01, §9.3 photos | Coûts stockage, lenteur application | FinOps / GreenOps | Traiter arbitrages compression et limite |
| R-FG02 | Conservation excessive des logs | RG-FG02, A-FG02 | Coûts stockage, enjeux RSSI | FinOps / GreenOps / RSSI | Traiter arbitrage durée logs |
| R-FG03 | Fréquence de notifications coûteuse | RG-FG03, A-FG03 | Coûts récurrents prototype | FinOps / Product Owner | Traiter arbitrage fréquence notifications |
| R-FG04 | Appels API non maîtrisés | RG-FG07, A-FG04 | Coûts variables imprévus | FinOps / Architecte | Qualifier hypothèses coûts API |
| R-FG05 | Usage IA trop coûteux pour un prototype | RG-FG06, A-FG05, A-IA01 | Dépassement budget démonstrateur | FinOps / Data / IA | Traiter arbitrage inclusion IA MVP |
| R-FG06 | Géolocalisation trop fréquente | RG-FG05, RG-T04 | Coûts et données excessives | GreenOps / RSSI | Traiter arbitrage sobriété géoloc |
| R-FG07 | Absence d'indicateurs de volume ou coût | RG-FG07, Q13 | Pilotage FinOps impossible | FinOps / Dirigeant (fictif) | Définir indicateurs volume minimum |

### 15.6 Risques SFIA / automatisation / capitalisation

| ID | Risque / point d'attention | Source dans le cadrage | Impact potentiel | Rôle à mobiliser | Action attendue |
|----|---------------------------|------------------------|------------------|------------------|-----------------|
| R-SF01 | Cadrage utile au projet mais non réutilisable | §3 Règle itération, §16.8 capitalisation | Valeur SFIA perdue | Chef de projet | Identifier capitalisation à chaque livrable |
| R-SF02 | Matrices non transformées en templates | §10.8, §14.5, §9.5 | Effort non capitalisé | Chef de projet / Business Analyst | Planifier mini-bilan capitalisation |
| R-SF03 | Critères de passage de phase non automatisables | §13.2 | Workflow Notion manuel, erreurs | Chef de projet | Formaliser traces §13.2 |
| R-SF04 | Mauvaise synchronisation Notion / Cursor | RG-SF06, Q23, A-SF06 | Divergence référentiel / production | Chef de projet / Architecte | Traiter arbitrage sync Notion/Cursor |
| R-SF05 | Trop de livrables générés sans valeur | §3 double valeur | Surcharge documentaire | Chef de projet / Product Owner | Filtrer livrables §16 |
| R-SF06 | Absence de mini-bilan de capitalisation | §18 Capitalisation SFIA | Templates non identifiés en fin cadrage | Chef de projet | Prévoir bilan fin cadrage |
| R-SF07 | Dérive vers application classique au lieu de pilote SFIA | §2 vision SFIA, §4 hors cadrage dev | Objectif pilote SFIA perdu | Chef de projet / Product Owner | Maintenir garde-fou vision §2 |
| R-SF08 | Décisions non tracées en ADR | §12 arbitrages, Q16, Q22, R-SF08 | Perte traçabilité, rework architecture | Architecte / Chef de projet | Maintenir liste ADR candidates |

### 15.7 Points d'attention pour la suite du cadrage

- ne pas définir le MVP avant la revue des arbitrages (§12) ;
- ne pas produire d'architecture avant les validations métier, fonctionnelles et UX (§13) ;
- garder les règles de gestion traçables et testables (§10) ;
- identifier les ADR candidates avant la phase architecture (§12, §16) ;
- maintenir la double valeur projet / SFIA (§3) ;
- préparer les templates réutilisables à partir des sections validées (§10.8, §14.5, §9.5).

### 15.8 Capitalisation SFIA des risques

Cette section doit permettre de capitaliser :

- un **template Risk Matrix** ;
- une **checklist de risques par phase projet** ;
- une **checklist risques intégration API** ;
- une **checklist risques UX/UI** ;
- une **checklist risques RSSI / FinOps / GreenOps** ;
- des **critères d'alerte pour workflow Notion** ;
- des **prompts de revue des risques**.

---

## 16. Livrables attendus du cadrage

- matrice des rôles SFIA ;
- parcours SAV détaillé ;
- cartographie des intégrations simulées ;
- liste des règles de gestion ;
- première liste d'ADR candidates ;
- première liste des éléments capitalisables SFIA ;
- circuit de validation métier / fonctionnelle / UX ;
- personas métier ;
- parcours utilisateurs ;
- écrans candidats ;
- critères d'utilisabilité ;
- éléments UX/UI à capitaliser.

---

## 17. Critères de sortie du cadrage

Le cadrage ne pourra être considéré comme terminé que si :

- le périmètre MVP est défini ;
- les rôles SFIA sont clarifiés ;
- les intégrations simulées sont cadrées ;
- les cas d'erreur sont identifiés ;
- les données sensibles sont identifiées ;
- les coûts et impacts GreenOps sont au moins qualifiés ;
- les ADR candidates sont listées ;
- les éléments à capitaliser dans la SFIA sont identifiés ;
- les validations métier et fonctionnelles attendues sont identifiées ;
- les personas principaux sont décrits ;
- les parcours utilisateurs critiques sont identifiés ;
- les écrans candidats sont listés ;
- les critères d'utilisabilité sont définis.

---

## 18. Capitalisation SFIA attendue

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
| Circuit de validation métier / fonctionnelle / UX | Template / Workflow Notion |
| Persona Matrix | Template |
| User Journey | Template |
| UX/UI Framing | Template |
| UX Review Checklist | Checklist |
| Écrans candidats | Base composants UI |

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
