# Interv360 — Mapping des statuts MVP

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Mapping fonctionnel des statuts MVP  
**Statut** : Draft — mapping issu du cycle de clarification  
**Règle liée** : RG-I05  
**Source principale** : `rules-rg-prioritization.md`

---

## 1. Objectif

Ce document **formalise les statuts MVP Interv360** en lien avec la règle **RG-I05**, en stabilisant le wording métier et la cohérence entre écrans, dashboards et CRM simulé.

**Précisions :**

- il **stabilise le wording métier** visible par les utilisateurs ;
- il **prépare la cohérence** entre écrans Interv360, dashboard et CRM simulé (ARB-MVP-04) ;
- il sert de **référence fonctionnelle** pour RG-I05 ;
- il reste au niveau **cadrage fonctionnel** — pas d'implémentation technique ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Sources utilisées

| Source | Apport |
|--------|--------|
| `rules-rg-prioritization.md` | RG-I05 — liste statuts candidats, principe unification, dépendances |
| `rules-rg-prioritization-summary.md` | Synthèse décisions RG et documents liés |
| `mvp-clarifications.md` | Décision statuts unifiés, alertes, hors périmètre |
| `clarification-workshop-minutes.md` | Première table statuts atelier simulé (origine, visibilité, alertes) |
| `qa-transverse-analysis.md` | Ambiguïtés mapping, distinction retard / anomalie, RG-I05 |
| `business-framing.md` | Cycle SAV §6, inventaire RG-I05, parcours et objets |
| `mvp-arbitration-validation.md` | ARB-MVP-04 sync CRM, ARB-MVP-05 erreurs intégration |
| `ux-ui-brief.md` | Écrans MVP, filtres, dashboard, parcours technicien / manager |
| `ux-ui-brief-validation.md` | Décision wording statuts unifiés |
| `dashboard-kpi-ux-review.md` | Garde-fous surcharge dashboard, KPI et alertes |

---

## 3. Principes de mapping

1. Les statuts doivent être **compréhensibles par le métier** — libellés FR courts et stables.
2. Les **libellés visibles** doivent être **unifiés** sur tous les écrans (fiche demande, planning, listes, dashboard).
3. Un **statut métier** peut agréger une information **Interv360**, **CRM simulé**, **dashboard** ou **intégration**.
4. Les **statuts techniques** (codes internes, erreurs système) **ne doivent pas polluer** l'UX métier — réservés admin / support si exposés.
5. Les **anomalies d'intégration** doivent être **distinguées** des **retards métier** (STAT-07 vs STAT-08).
6. Les statuts doivent permettre le **pilotage SAV** (manager) et la **vue dirigeant** (agrégats, retards, clôtures).
7. Les **transitions** décrites dans ce document restent **macro** — pas de machine à états technique.

---

## 4. Table des statuts MVP

| Code statut | Libellé utilisateur | Sens métier | Origine principale | Visible par | Déclenche une alerte ? | Commentaire |
|-------------|---------------------|-------------|-------------------|-------------|------------------------|-------------|
| **STAT-01** | À qualifier | Demande créée mais informations insuffisantes pour planification | Interv360 / CRM simulé / email sécurisé | Manager SAV | Oui si ancienneté > seuil **À définir** | Lié RG-C05 ; garde-fou qualification |
| **STAT-02** | Qualifiée | Demande suffisamment renseignée pour être planifiée | Interv360 | Manager SAV | Non par défaut | Étape intermédiaire qualification → planification |
| **STAT-03** | Planifiée | Intervention affectée à un créneau et/ou technicien | Interv360 | Manager SAV, Technicien | Non par défaut | Lié planning ; vue jour par défaut MVP |
| **STAT-04** | En cours | Intervention active ou démarrée terrain | Interv360 | Manager SAV, Technicien | Non par défaut | Statut opérationnel terrain ; mobile technicien prioritaire |
| **STAT-05** | En attente client | Intervention suspendue ou attente retour / validation client | Interv360 | Manager SAV, Technicien | Oui si délai dépassé (**À définir**) | Distingue attente légitime et retard pur |
| **STAT-06** | Clôturée | Intervention finalisée avec compte rendu et trace | Interv360 / CRM simulé | Manager SAV, Dirigeant | Non | Lié RG-R05 ; clôture sans signature possible |
| **STAT-07** | En retard | Intervention ou demande dépassant un délai attendu | Dashboard / calcul Interv360 | Manager SAV, Dirigeant | Oui | Retard **métier** ; distinct anomalie technique |
| **STAT-08** | Anomalie d'intégration | Erreur synchronisation ou flux nécessitant reprise | Intégration | Manager SAV, Admin / support | Oui (selon gravité RG-I06) | Lié RG-I06 ; reprise manuelle ARB-MVP-05 |

---

## 5. Correspondance Interv360 / CRM simulé

*Le CRM simulé reste **fictif** — les codes exacts sont à stabiliser plus tard. Ce mapping est **fonctionnel**, pas technique.*

| Statut Interv360 | Code Interv360 | Statut CRM simulé candidat | Sens de synchronisation | Remarque |
|------------------|----------------|----------------------------|-------------------------|----------|
| À qualifier | STAT-01 | Nouveau / À compléter | Entrée → Interv360 ; remontée état initial | Variante libellé CRM à figer |
| Qualifiée | STAT-02 | Qualifiée | Interv360 → CRM (état qualifié) | Statut interne Interv360 dominant |
| Planifiée | STAT-03 | Planifiée | Bidirectionnel si créneau CRM source | Aligné planning MVP |
| En cours | STAT-04 | En cours | Interv360 → CRM à démarrage terrain | Technicien met à jour |
| En attente client | STAT-05 | En attente client | Interv360 → CRM | Blocage externe documenté |
| Clôturée | STAT-06 | Clôturée | Interv360 → CRM à clôture | + indicateur signature absente si applicable |
| En retard | STAT-07 | — (indicateur) | **Pas synchronisé** comme statut CRM métier | Plutôt **indicateur dashboard** / calcul local |
| Anomalie d'intégration | STAT-08 | — (interne) | **Non synchronisé** comme statut métier CRM | Statut interne Interv360 ; reprise manuelle |

**Précisions :**

- le CRM simulé expose des statuts **candidats** alignés sur le cycle SAV simplifié ;
- **En retard** et **Anomalie d'intégration** ne sont pas des statuts CRM métier au MVP — indicateurs ou états internes Interv360 ;
- les **codes exacts** CRM (`NEW`, `QUALIFIED`, etc.) restent **À définir** dans une phase ultérieure ou ADR.

---

## 6. Visibilité par rôle

| Statut | Manager SAV | Technicien | Dirigeant | Admin / support | Commentaire |
|--------|:-----------:|:----------:|:---------:|:---------------:|-------------|
| À qualifier | ✓ | — | — (agrégat volume) | — | Qualification manager |
| Qualifiée | ✓ | — | — | — | Pré-planification |
| Planifiée | ✓ | ✓ | — | — | Technicien voit ses affectations |
| En cours | ✓ | ✓ | — | — | Parcours terrain |
| En attente client | ✓ | ✓ | — | — | Action client requise |
| Clôturée | ✓ | ✓ (ses interventions) | ✓ (agrégats) | — | Pilotage et clôture |
| En retard | ✓ | — (sauf sa propre intervention en retard) | ✓ | — | Vue pilotage dirigeant |
| Anomalie d'intégration | ✓ | — | — | ✓ | Détail technique accessible admin |

**Orientations :**

- **Manager SAV** : tous les statuts métier + anomalies ;
- **Technicien** : Planifiée, En cours, En attente client, Clôturée (périmètre personnel) ;
- **Dirigeant** : statuts **agrégés** — volumes, Clôturée, En retard ; pas de détail qualification ;
- **Admin / support** : anomalies d'intégration, détail technique RG-I06.

---

## 7. Alertes et dashboard

*Seuils chiffrés : **À définir** — non inventés dans ce document.*

| Statut | Alerte dashboard ? | Type d'alerte | Seuil / déclencheur | Dashboard concerné |
|--------|-------------------|---------------|---------------------|-------------------|
| À qualifier | Oui | Qualification en attente | Ancienneté > seuil **À définir** | Dashboard SAV |
| Qualifiée | Non | — | — | — |
| Planifiée | Non | — | — | — |
| En cours | Non | — | — | — |
| En attente client | Oui | Attente client prolongée | Délai > seuil **À définir** | Dashboard SAV |
| Clôturée | Non | — | — | — |
| En retard | Oui | Retard métier | Dépassement délai planifié / SLA **À définir** | Dashboard SAV, Vue dirigeant |
| Anomalie d'intégration | Oui | Anomalie intégration | Gravité **Bloquant métier** ou **Bloquant sync** (RG-I06) | Dashboard SAV ; écran anomalies |

**Rappel MVP** : top **5–7 alertes** visibles above the fold (`mvp-clarifications.md`) — hiérarchisation par criticité.

---

## 8. Transitions autorisées au niveau macro

*Cette matrice est **macro** — elle ne remplace pas une machine à états technique et **ne constitue pas** un scénario de test.*

| Depuis | Vers autorisé | Condition métier | Remarque |
|--------|---------------|------------------|----------|
| À qualifier | Qualifiée | Données minimales RG-C05 complètes | Manager qualifie |
| À qualifier | Anomalie d'intégration | Erreur source / données à l'entrée (email, CRM) | Reprise manuelle |
| Qualifiée | Planifiée | Créneau et/ou technicien affecté | Planning |
| Planifiée | En cours | Technicien démarre intervention | Terrain |
| Planifiée | En retard | Délai planifié dépassé sans démarrage | Calcul ou règle métier |
| En cours | En attente client | Blocage client documenté | Attente retour |
| En cours | Clôturée | CR renseigné, conditions RG-R05 | Clôture avec ou sans signature |
| En cours | Anomalie d'intégration | Erreur synchronisation en cours d'intervention | RG-I06 |
| En attente client | En cours | Retour client reçu | Reprise |
| En attente client | Clôturée | Clôture avec motif (ex. intervention non réalisable) | RG-R05 |
| En attente client | En retard | Délai attente dépassé | Alerte dashboard |
| * (plusieurs) | En retard | Dépassement délai opérationnel | Statut calculé / dérivé |
| Anomalie d'intégration | Statut précédent | Reprise manuelle réussie | À préciser par flux |
| Anomalie d'intégration | Clôturée | Cas exceptionnel : clôture locale OK, sync différée | Coexistence possible STAT-06 + indicateur anomalie |
| Clôturée | — | Pas de transition standard MVP | Réouverture **À définir** |

---

## 9. Distinction retard métier / anomalie d'intégration

**En retard** (STAT-07) correspond à un **dépassement de délai métier ou opérationnel** — le cycle SAV avance ou stagne côté métier, sans nécessairement erreur technique.

**Anomalie d'intégration** (STAT-08) correspond à un **problème de flux, synchronisation ou échange système** — message métier RG-I06, reprise manuelle.

Les deux peuvent **coexister** (ex. intervention clôturée localement mais sync CRM en échec) mais **ne doivent pas être confondus** dans le dashboard.

| Cas | Statut recommandé | Explication |
|-----|-------------------|-------------|
| Intervention non démarrée après créneau prévu | **En retard** | Délai opérationnel dépassé ; pas d'erreur technique |
| Sync CRM échouée mais intervention réalisée terrain | **Anomalie d'intégration** (+ éventuellement Clôturée locale) | Problème flux ; métier OK |
| Demande non qualifiée depuis trop longtemps | **À qualifier** + alerte | RG-C05 ; pas encore qualifiée |
| Intervention bloquée par attente client | **En attente client** | Attente légitime ; alerte si délai dépassé |
| Intervention terminée mais sync CRM KO | **Clôturée** + **Anomalie d'intégration** (indicateur) | Clôture locale valide ; sync à reprendre |
| Email entrant non traité (erreur intake) | **Anomalie d'intégration** | Erreur canal ; pas un retard métier |
| Planning saturé, intervention reportée | **Planifiée** ou **En retard** selon règle | Retard métier si créneau dépassé |

Le **dashboard** doit rendre la distinction **visible** : libellés distincts, filtres séparés, pas de regroupement « problème » générique.

---

## 10. Points à préciser plus tard

- codes exacts côté **CRM simulé** (API fictive) ;
- **seuils d'alerte** chiffrés (ancienneté À qualifier, délai attente client, SLA retard) ;
- règles de **réouverture** post-clôture ;
- **transitions détaillées** par objet (demande vs intervention) ;
- **droits par rôle** (qui peut forcer une transition) ;
- comportement **post-clôture** (modification CR, annulation) ;
- relation fine avec **RG-I06** (gravité → statut / indicateur) ;
- **ADR candidate** sur mapping durable des statuts (ARB-MVP-04) ;
- statut dédié **Notification en échec** — non retenu MVP ; indicateur dashboard uniquement.

---

## 11. Documents liés

| Document | Lien avec ce mapping |
|----------|---------------------|
| `rules-rg-prioritization.md` | RG-I05 — règle amont ; RG-C05 (À qualifier), RG-R05 (Clôturée), RG-I06 (anomalie) |
| `closure-without-signature.md` | Statut Clôturée, conditions clôture, sync CRM |
| `mvp-clarifications.md` | Décision statuts unifiés, alertes limitées |
| Annexe erreurs / ADR candidate | Gravité RG-I06, reprise manuelle |
| `dashboard-kpi-ux-review.md` | KPI et garde-fous surcharge dashboard |
| `geo-ai-arbitration.md` | Hors périmètre direct — pas de statut géoloc/IA MVP |

---

## 12. Points hors périmètre

- implémentation technique de **machine à états** ;
- **code** applicatif ;
- **API** et contrats techniques ;
- **schéma base de données** ;
- **tests**, scénarios de test, stratégie de recette ;
- **backlog** et **user stories** ;
- **workflow automatisé complet** ;
- **publication Notion**.

---

## 13. Garde-fous

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de stratégie de recette produite ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion ;
- [x] pas d'appel API Notion ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de PR créée — branche longue `analysis/interv360-clarification-cycle`.

---

## 14. Conclusion

Le **mapping des 8 statuts MVP** est **stabilisé au niveau fonctionnel** :

- libellés unifiés, origines, visibilités et alertes orientées ;
- correspondance CRM simulé **prudente et fonctionnelle** ;
- transitions **macro** documentées ;
- distinction **retard métier / anomalie d'intégration** explicitée.

Les **seuils d'alerte** et **codes CRM exacts** restent **à préciser**.

**Prochaine étape recommandée** : produire **`closure-without-signature.md`** sur la branche `analysis/interv360-clarification-cycle`.

---

*Mapping statuts MVP — Interv360 — gouvernance SFIA — RG-I05.*
