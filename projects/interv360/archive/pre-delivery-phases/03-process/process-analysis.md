# Interv360 — Analyse des processus BPMN

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Analyse BPMN  
**Statut** : Draft  
**Diagrammes analysés** :

- `bpmn/interv360-sav-mvp.bpmn`
- `bpmn/interv360-sav-exceptions.bpmn`
- `bpmn/interv360-integration-errors.bpmn`

---

## 1. Objectif

Ce document analyse les **trois diagrammes BPMN** produits pour Interv360.

Il relie les diagrammes :

- aux **règles métier RG** ;
- aux **statuts MVP** ;
- aux **exceptions métier** ;
- aux **anomalies d'intégration** ;
- aux **ADR candidates** ;
- aux **futurs écrans et parcours** ;
- aux **limites du modèle BPMN**.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. Diagrammes analysés

| Diagramme | Fichier BPMN | Export | Rôle | Statut |
|-----------|--------------|--------|------|--------|
| Processus principal SAV MVP | `bpmn/interv360-sav-mvp.bpmn` | `exports/interv360-sav-mvp.svg` | Cycle nominal demande → clôture locale | Draft |
| Exceptions métier | `bpmn/interv360-sav-exceptions.bpmn` | `exports/interv360-sav-exceptions.svg` | Données insuffisantes, doublon, attente, retard, signature absente | Draft |
| Anomalies d'intégration | `bpmn/interv360-integration-errors.bpmn` | `exports/interv360-integration-errors.svg` | Sync CRM KO, gravité, reprise manuelle | Draft |

Les trois diagrammes sont **non exécutables** (`isExecutable="false"`) et restent au **niveau fonctionnel**.

---

## 3. Analyse du processus principal

| Étape BPMN | Lane | Statut | Règle liée | Commentaire |
|------------|------|--------|------------|-------------|
| Demande SAV reçue | Client / canal entrant | — | — | Point d'entrée du cycle SAV |
| Créer ou enregistrer la demande | Interv360 | STAT-01 À qualifier | RG-C05 | La demande existe mais doit être qualifiée |
| Vérifier les données minimales | Manager SAV | STAT-01 | RG-C05 | Contrôle des informations nécessaires |
| Données suffisantes ? | Manager SAV | STAT-01 | RG-C05 | Gateway vers maintien à qualifier si incomplet |
| Compléter / maintenir à qualifier | Manager SAV | STAT-01 | RG-C05 | Boucle de complétion (détail dans exceptions) |
| Rechercher doublon potentiel | Interv360 | STAT-01 | RG-C04 | Détection sans fusion automatique |
| Doublon potentiel détecté ? | Manager SAV | STAT-01 | RG-C04 | Gateway vers arbitrage ou qualification directe |
| Arbitrer le doublon et décider la suite | Manager SAV | STAT-01 | RG-C04 | Arbitrage manuel, poursuite ou arrêt |
| Qualifier la demande | Manager SAV | STAT-02 Qualifiée | RG-I05 | Passage vers une demande exploitable |
| Planifier l'intervention | Manager SAV | STAT-03 Planifiée | RG-I05 | Positionnement opérationnel |
| Affecter un technicien | Manager SAV | STAT-03 | RG-I05 | Affectation ressource |
| Consulter l'intervention planifiée | Technicien | STAT-03 | RG-I05 | Préparation terrain |
| Démarrer l'intervention | Technicien | STAT-04 En cours | RG-I05 | Début opération terrain |
| Intervention réalisable ? | Technicien | STAT-04 | RG-I05 | Gateway vers attente client si blocage |
| Passer en attente client | Technicien | STAT-05 | RG-I05 | Suspension temporaire (détail dans exceptions) |
| Reprendre l'intervention | Technicien | STAT-04 | RG-I05 | Reprise sans redémarrage complet |
| Réaliser l'intervention | Technicien | STAT-04 | RG-I05 | Exécution terrain |
| Rédiger le compte rendu web | Technicien | STAT-04 | RG-R05 | CR obligatoire avant clôture |
| Signature client disponible ? | Technicien | STAT-04 | RG-R02 | Signature optionnelle |
| Capturer la signature | Technicien | STAT-04 | RG-R02 | Preuve optionnelle de validation client |
| Renseigner le motif d'absence de signature | Manager SAV | STAT-04 | RG-R02 / RG-R05 | Motif obligatoire si signature absente |
| Clôturer l'intervention | Interv360 | STAT-06 Clôturée | RG-R05 | Clôture locale validée |
| Synchroniser la clôture vers CRM simulé | CRM simulé / intégration | STAT-06 / STAT-08 | RG-I06 | Déclenchement sync post-clôture (détail dans intégration) |
| Synchronisation réussie ? | CRM simulé / intégration | STAT-06 / STAT-08 | RG-I06 | Gateway vers succès ou anomalie |
| Signaler anomalie d'intégration | CRM simulé / intégration | STAT-08 | RG-I06 | Branche simplifiée — détail dans diagramme intégration |
| Mettre à jour le dashboard | Dashboard / pilotage | STAT-06 / STAT-08 | RG-I05 | Visibilité pilotage |
| Intervention clôturée localement | Dashboard / pilotage | STAT-06 | RG-R05 | Fin locale du cycle |

---

## 4. Analyse des exceptions métier

| Exception | Déclencheur | Statut | Règle liée | Traitement |
|-----------|-------------|--------|------------|------------|
| Données insuffisantes | Données minimales non complètes | STAT-01 | RG-C05 | Maintien à qualifier, complétion, mise à jour, nouvelle vérification |
| Doublon potentiel | Demande proche détectée | STAT-01 | RG-C04 | Comparaison, arbitrage manuel ; marquage / rapprochement ou poursuite sans fusion auto |
| Attente client | Intervention non réalisable / blocage client | STAT-05 | RG-I05 | Motif d'attente, visibilité dashboard, maintien en attente, reprise quand blocage levé |
| Retard | Échéance dépassée | STAT-07 | RG-I05 | Indicateur dashboard, analyse cause, réajustement planification |
| Clôture sans signature | Signature indisponible | STAT-04 → STAT-06 | RG-R02 / RG-R05 | Motif obligatoire, validation CR, clôture sans signature |

Le diagramme exceptions regroupe **cinq sections** indépendantes, chacune correspondant à une branche simplifiée du processus principal.

---

## 5. Analyse des anomalies d'intégration

| Anomalie | Déclencheur | Statut | Gravité | Reprise | Règle |
|----------|-------------|--------|---------|---------|-------|
| Sync CRM KO | Synchronisation échouée | STAT-08 | Bloquant sync | Correction / relance ou suivi manuel | RG-I06 |
| Donnée rejetée | Donnée invalide côté CRM simulé | STAT-08 | Bloquant métier / sync | Correction données puis relance | RG-I06 |
| Timeout / absence de réponse | CRM simulé indisponible | STAT-08 | Bloquant sync | Relance ou reprise manuelle | RG-I06 |
| Erreur non bloquante | Alerte informative | STAT-08 ou indicateur dashboard | Information | Journalisation et surveillance | RG-I06 |
| Reprise manuelle requise | Échec persistant | STAT-08 | Bloquant sync | Action Manager SAV | RG-I06 |

**Point structurant :** la clôture locale reste valide en **STAT-06** même si l'anomalie d'intégration existe en **STAT-08**. Le compte rendu, la signature ou le motif d'absence restent conservés.

Le diagramme intégration détaille le flux post-clôture : préparation → envoi → traitement CRM → gateway succès/KO → qualification gravité → reprise manuelle ou journalisation → visibilité dashboard.

---

## 6. Correspondance BPMN / statuts

| Statut | Représentation BPMN | Diagramme |
|--------|---------------------|-----------|
| STAT-01 À qualifier | Création, données insuffisantes, doublon potentiel | Principal + exceptions |
| STAT-02 Qualifiée | Qualification par Manager SAV | Principal |
| STAT-03 Planifiée | Planification et affectation technicien | Principal |
| STAT-04 En cours | Démarrage, attente/reprise, réalisation, CR, signature | Principal + exceptions |
| STAT-05 En attente client | Blocage client, motif attente, maintien, reprise | Principal + exceptions |
| STAT-06 Clôturée | Clôture locale, CR, signature ou motif absence | Principal + intégration |
| STAT-07 En retard | Indicateur dashboard, non bloquant | Exceptions |
| STAT-08 Anomalie d'intégration | Sync KO, gravité, reprise, dashboard | Principal + intégration |

**STAT-07** et **STAT-08** sont des **indicateurs internes ou de pilotage** — pas nécessairement des statuts CRM synchronisés (`status-mapping.md`).

---

## 7. Correspondance BPMN / règles RG

| Règle | Représentation BPMN | Diagramme |
|-------|---------------------|-----------|
| RG-C04 | Détection doublon, arbitrage manuel, pas de fusion automatique | Principal + exceptions |
| RG-C05 | Données minimales, maintien à qualifier | Principal + exceptions |
| RG-I05 | Transitions statuts, attente client, retard, dashboard | Principal + exceptions |
| RG-I06 | Sync CRM, anomalie intégration, gravité, reprise manuelle | Principal + intégration |
| RG-R02 | Signature optionnelle, motif si absente | Principal + exceptions |
| RG-R05 | CR obligatoire, motif absence, clôture traçable | Principal + exceptions + intégration |

Les **six règles RG MVP prioritaires** sont couvertes par l'ensemble des trois diagrammes (`rules-rg-prioritization.md`, `clarification-cycle-closure.md`).

---

## 8. Correspondance BPMN / futurs écrans

| Étape BPMN | Écran / parcours futur probable | Commentaire |
|------------|--------------------------------|-------------|
| Créer / qualifier demande | Fiche demande SAV | Données minimales, doublon potentiel |
| Planifier intervention | Planning manager | Affectation, échéance, lien avec retard |
| Consulter intervention | Vue technicien | Intervention assignée |
| Réaliser intervention | Parcours intervention terrain | Démarrage, blocage, attente, reprise |
| Rédiger compte rendu | Écran compte rendu web | CR obligatoire (RG-R05) |
| Capturer signature / motif absence | Écran clôture | Signature optionnelle, motif obligatoire si absente |
| Dashboard | Tableau de bord SAV | Retards, anomalies, clôtures — top 5–7 alertes MVP |
| Anomalie intégration | Vue anomalies / pilotage (CF9) | Gravité RG-I06, reprise manuelle, message métier |

Ces correspondances **préparent** le design UX/UI sans constituer une spécification d'écran.

---

## 9. ADR candidates identifiées

| ADR candidate | Source BPMN | Priorité | Pourquoi |
|---------------|-------------|----------|----------|
| Mapping durable des statuts | Processus principal + exceptions | Haute | Les transitions structurent tout le cycle SAV |
| Synchronisation CRM simulée | Processus principal + intégration | Haute | La sync post-clôture est un point structurant (ARB-MVP-04) |
| Gestion des erreurs d'intégration | Diagramme intégration | Haute | RG-I06 nécessite une politique claire (ARB-MVP-05) |
| Clôture locale vs sync externe | Diagramme intégration | Haute | La clôture reste valide même si sync KO |
| Clôture sans signature | Exceptions | Moyenne / Haute | Motif obligatoire et CR nécessaire (ARB-MVP-03) |
| Gestion des doublons | Exceptions | Moyenne | Arbitrage manuel, pas de fusion auto |
| Stratégie de reprise manuelle | Intégration | Moyenne | Correction / relance / journalisation |

Ces éléments restent des **ADR candidates** — pas des ADR formelles tant qu'elles ne sont pas validées en phase architecture.

---

## 10. Points de cohérence validés

- Le processus principal reste centré sur le **cycle nominal**.
- Les **exceptions métier** sont isolées dans un diagramme dédié.
- Les **anomalies d'intégration** sont isolées dans un diagramme dédié.
- **STAT-07 En retard** reste un indicateur **non bloquant**.
- **STAT-08 Anomalie d'intégration** ne remet pas en cause la clôture locale.
- La **signature** est optionnelle, mais le **motif d'absence** est obligatoire.
- Le **compte rendu** reste obligatoire pour clôturer.
- La **fusion automatique** de doublon n'est pas représentée.
- Le flux **attente client** passe par **Reprendre l'intervention** sans redémarrage complet.
- Le **retry automatique avancé** est hors MVP — reprise manuelle simulée uniquement.
- La **géolocalisation** et l'**IA** restent hors MVP.

---

## 11. Limites du modèle BPMN

Le modèle BPMN ne couvre pas :

- API CRM réelle ;
- codes HTTP ou erreurs techniques détaillées ;
- retry automatique avancé ;
- architecture technique ;
- modèle de données ;
- droits / habilitations ;
- géolocalisation ;
- IA assistive ;
- écrans détaillés ;
- backlog ;
- user stories ;
- tests ;
- delivery.

---

## 12. Recommandations avant clôture du cycle BPMN

Avant clôture :

- relire visuellement les **trois SVG** ;
- vérifier que les exports restent **lisibles** ;
- confirmer que les **ADR candidates** sont acceptées comme candidates et non comme ADR formelles ;
- décider si les trois diagrammes sont suffisants pour passer à l'**instruction ADR**.

**Recommandation :** ne pas produire d'autres BPMN MVP sauf besoin explicite. Les trois diagrammes couvrent suffisamment le cycle SAV MVP (`process-scope.md`).

---

## 13. Conclusion

Les trois diagrammes BPMN Interv360 couvrent le niveau nécessaire pour alimenter la suite :

- **ADR structurantes** ;
- **architecture fonctionnelle détaillée** ;
- **design UX/UI** ;
- **écrans et parcours**.

Le cycle BPMN peut être clôturé après **revue finale des exports** et création de `process-cycle-closure.md`.

---

*Analyse BPMN — Interv360 — SFIA — Draft.*
