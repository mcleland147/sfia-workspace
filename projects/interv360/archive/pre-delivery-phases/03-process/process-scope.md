# Interv360 — Cadrage de la phase processus BPMN

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Cadrage BPMN  
**Statut** : Draft  
**Méthode associée** : `docs/methods/process/bpmn-process-modeling-method.md`  
**Standard associé** : `docs/methods/process/bpmn-deliverables-standard.md`

---

## 1. Objectif

Formaliser le **processus métier SAV MVP Interv360** sous forme BPMN.

Le BPMN doit clarifier :

- le cycle de vie d'une demande SAV ;
- les acteurs impliqués ;
- les transitions de statuts ;
- les exceptions métier ;
- les anomalies d'intégration ;
- la clôture avec ou sans signature ;
- les points pouvant alimenter des ADR candidates.

Le BPMN **ne doit pas** produire :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- delivery.

---

## 2. Sources documentaires

| Source | Apport |
|--------|--------|
| `projects/interv360/01-cadrage/business-framing.md` | Vision métier, parcours SAV, objets métier |
| `projects/interv360/02-architecture/qa-transverse-analysis.md` | Analyse QA amont, testabilité, ambiguïtés |
| `projects/interv360/02-architecture/clarification-workshop-minutes.md` | Décisions issues du cycle de clarification |
| `projects/interv360/02-architecture/mvp-clarifications.md` | Clarifications MVP consolidées |
| `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG prioritaires |
| `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP et transitions |
| `projects/interv360/02-architecture/closure-without-signature.md` | Clôture sans signature |
| `projects/interv360/02-architecture/geo-ai-arbitration.md` | Hors périmètre MVP géoloc / IA |
| `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse de clôture clarification |

---

## 3. Périmètre BPMN

Le BPMN couvre :

- réception ou création d'une demande SAV ;
- qualification de la demande ;
- détection d'un doublon potentiel ;
- décision manuelle sur doublon ;
- planification de l'intervention ;
- affectation technicien ;
- intervention terrain ;
- passage éventuel en attente client ;
- rédaction du compte rendu web ;
- clôture avec signature ;
- clôture sans signature avec motif ;
- synchronisation CRM simulée ;
- anomalie d'intégration ;
- reprise manuelle ;
- mise à jour dashboard / pilotage.

---

## 4. Hors périmètre BPMN

Le BPMN ne couvre pas :

- géolocalisation terrain ;
- IA assistive ;
- signature électronique qualifiée ;
- facturation réelle ;
- CRM réel ;
- API réelle ;
- architecture technique détaillée ;
- modèle de données ;
- backlog ;
- user stories ;
- tests ;
- delivery ;
- publication Notion automatique.

---

## 5. Acteurs / lanes envisagés

| Acteur / lane | Rôle dans le processus |
|---------------|------------------------|
| Client / canal entrant | Origine de la demande SAV ou du besoin |
| Manager SAV | Qualification, priorisation, planification, arbitrage doublon |
| Technicien | Réalisation intervention, compte rendu, signature ou motif d'absence |
| Interv360 | Support applicatif du cycle SAV, statuts, dossier intervention |
| CRM simulé / intégration | Synchronisation post-clôture, retour anomalie |
| Dashboard / pilotage | Vision agrégée, indicateurs, anomalies, retards |

---

## 6. Objets métier concernés

| Objet métier | Rôle dans le processus |
|--------------|------------------------|
| Demande SAV | Point d'entrée du processus |
| Intervention | Objet opérationnel planifié et réalisé |
| Client | Partie concernée par la demande et la signature |
| Technicien | Ressource affectée à l'intervention |
| Compte rendu | Trace obligatoire de clôture |
| Signature | Preuve optionnelle de validation client |
| Motif d'absence de signature | Justification obligatoire si signature absente |
| Statut | Représentation macro de l'avancement |
| Anomalie d'intégration | Signalement d'un problème de synchronisation |
| Dashboard | Vue de pilotage consolidée |

---

## 7. Statuts / étapes à représenter

| Statut / étape | Sens métier |
|----------------|-------------|
| À qualifier | Demande reçue mais pas encore exploitable |
| Qualifiée | Demande analysée et prête à planifier |
| Planifiée | Intervention positionnée |
| En cours | Intervention démarrée |
| En attente client | Blocage ou attente côté client |
| Clôturée | Intervention terminée avec CR obligatoire |
| En retard | Indicateur métier de dépassement |
| Anomalie d'intégration | Problème de synchronisation ou reprise manuelle |

---

## 8. Diagrammes prévus

| Diagramme | Fichier cible | Priorité | Objectif |
|-----------|---------------|----------|----------|
| Processus principal SAV MVP | `interv360-sav-mvp.bpmn` | Haute | Représenter le cycle nominal de la demande à la clôture |
| Exceptions métier | `interv360-sav-exceptions.bpmn` | Haute | Représenter doublon, attente client, retard, clôture sans signature |
| Anomalies d'intégration | `interv360-integration-errors.bpmn` | Haute | Représenter sync CRM KO, gravité, reprise manuelle |

---

## 9. Hypothèses

- La synchronisation CRM reste **simulée** dans le MVP.
- La clôture locale reste **valide** même si la synchronisation CRM échoue.
- La signature est **optionnelle** mais le compte rendu est **obligatoire**.
- En cas d'absence de signature, un **motif** doit être renseigné.
- Les statuts **En retard** et **Anomalie d'intégration** sont des indicateurs internes ou de pilotage, pas nécessairement des statuts CRM synchronisés.
- Géolocalisation et IA sont **hors MVP**.

---

## 10. Points ouverts

| Sujet | Point ouvert | Décision attendue |
|-------|--------------|-------------------|
| Numérotation projet | `03-process/` coexiste avec `03-design/` | Documenter que process précède design détaillé |
| Exports | SVG ou PNG en priorité | SVG recommandé |
| Niveau BPMN | BPMN fonctionnel ou exécutable | Fonctionnel niveaux 1 à 3 |
| ADR | ADR à créer immédiatement ou après analyse | Identifier candidates, ne pas créer automatiquement |

---

## 11. Garde-fous

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion automatique ;
- [x] Git reste la source de vérité.

---

## 12. Conclusion

Interv360 est **prêt pour une phase BPMN** car le projet dispose :

- d'un cadrage métier ;
- d'une analyse QA transverse ;
- de clarifications MVP ;
- de règles RG prioritaires ;
- d'un mapping de statuts ;
- d'arbitrages sur la clôture sans signature ;
- d'arbitrages géolocalisation / IA.

**Verdict : Go** pour préparer le premier diagramme BPMN `interv360-sav-mvp.bpmn`, sans créer encore de backlog, tests, code ou delivery.

---

*Cadrage BPMN — Interv360 — SFIA — Draft.*
