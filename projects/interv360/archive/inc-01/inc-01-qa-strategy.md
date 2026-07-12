# Interv360 — INC-01 QA strategy

**Type** : Stratégie QA métier et fonctionnelle  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization preparation  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-preparation`  
**Documents associés** : [`realization-preparation-plan.md`](realization-preparation-plan.md), [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md), [`2026-06-29-inc-01-technical-framing.md`](2026-06-29-inc-01-technical-framing.md), [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md), [`inc-01-user-stories.md`](inc-01-user-stories.md)

---

## 1. Objectif

Ce document prépare l'approche **QA métier et fonctionnelle** de **INC-01 — Flux SAV minimal démontrable**.

L'objectif est de définir comment vérifier progressivement que le flux minimal est conforme au cadrage métier :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

Ce document **ne constitue pas** un plan de test détaillé.

Il **ne crée pas** de tests automatisés, de scripts de test, de code ou d'outillage QA.

---

## 2. Principes QA

La stratégie QA doit rester :

- métier ;
- fonctionnelle ;
- progressive par séquence **RS-01 à RS-05** ;
- alignée avec les critères d'acceptation existants ;
- compréhensible par un responsable SAV ;
- indépendante d'un CRM réel ;
- indépendante d'un dashboard ;
- non bloquante vis-à-vis de Figma ;
- sans tests automatisés dans ce cycle.

---

## 3. Périmètre QA INC-01

| Élément | Valeur |
|---------|--------|
| **Incrément** | INC-01 — Flux SAV minimal démontrable |
| **Séquences QA** | RS-01 à RS-05 |
| **Stories couvertes** | 16 |
| **Critères d'acceptation métier** | 68 |
| **Statuts vérifiés** | STAT-01, STAT-02, STAT-03, STAT-04, STAT-06 |
| **Statut hors chemin nominal** | STAT-05 |
| **Statuts hors INC-01** | STAT-07, STAT-08 |
| **CRM réel** | Hors périmètre |
| **Dashboard** | Hors périmètre |
| **Tests automatisés** | Hors périmètre |
| **Code** | Hors périmètre |

---

## 4. Niveaux de vérification

| Niveau | Objectif | Exemple |
|--------|----------|---------|
| **Vérification story** | Vérifier qu'une user story produit son résultat attendu | Une demande est créée en STAT-01 |
| **Vérification séquence** | Vérifier qu'un groupe de stories produit une valeur démontrable | RS-02 permet STAT-02 |
| **Vérification flux bout en bout** | Vérifier que le chemin complet atteint STAT-06 | Demande clôturée localement |
| **Vérification garde-fou** | Vérifier qu'aucun hors périmètre n'est requis | Pas de CRM réel, pas de dashboard |
| **Vérification non-régression métier** | Vérifier que les séquences précédentes restent cohérentes | RS-03 ne casse pas RS-01/RS-02 |

---

## 5. Stratégie QA par séquence

### RS-01 — Socle demande SAV

**Objectif QA**

Vérifier qu'une demande peut être créée, visible dans la liste et consultable en fiche.

**Stories concernées**

- US-INC01-001
- US-INC01-002
- US-INC01-003
- US-INC01-004

**Critères QA métier**

- la demande créée existe ;
- la demande est en STAT-01 ;
- la demande apparaît dans la liste ;
- la fiche correspond à la demande sélectionnée ;
- la fiche contient les informations principales ;
- la fiche reste la source détaillée.

**Points de vigilance**

- ne pas remplacer la fiche par la liste ;
- ne pas exiger de dashboard ;
- ne pas exiger de CRM réel.

---

### RS-02 — Qualification minimale

**Objectif QA**

Vérifier qu'une demande peut être qualifiée après checklist minimale.

**Stories concernées**

- US-INC01-005
- US-INC01-006

**Critères QA métier**

- la checklist minimale est disponible ;
- les informations nécessaires à la qualification sont complétées ;
- la demande reste en STAT-01 tant que la qualification n'est pas terminée ;
- la demande passe en STAT-02 après qualification ;
- STAT-02 est visible sur la liste et la fiche.

**Points de vigilance**

- pas de workflow multi-acteurs ;
- pas de statut intermédiaire ;
- pas de qualification sans information minimale.

---

### RS-03 — Planification intervention

**Objectif QA**

Vérifier qu'une intervention peut être créée et planifiée depuis une demande qualifiée.

**Stories concernées**

- US-INC01-007
- US-INC01-008
- US-INC01-009
- US-INC01-010

**Critères QA métier**

- une intervention est créée depuis une demande STAT-02 ;
- l'intervention reste liée à la demande ;
- un créneau est sélectionné ;
- un technicien est affecté ;
- STAT-03 est appliqué uniquement après créneau + technicien ;
- l'intervention est visible comme planifiée.

**Points de vigilance**

- pas de planning avancé obligatoire ;
- pas d'optimisation automatique ;
- pas de notification avancée obligatoire ;
- pas de statut non prévu.

---

### RS-04 — Réalisation terrain et compte rendu

**Objectif QA**

Vérifier que le technicien peut consulter l'intervention, saisir un CR et indiquer un résultat.

**Stories concernées**

- US-INC01-011
- US-INC01-012
- US-INC01-013

**Critères QA métier**

- le technicien peut consulter l'intervention planifiée ;
- les informations terrain minimales sont visibles ;
- un compte rendu simple peut être saisi ;
- le CR est rattaché à l'intervention ;
- un résultat d'intervention peut être renseigné ;
- le résultat est exploitable pour clôture.

**Points de vigilance**

- pas d'application mobile native complète obligatoire ;
- pas d'offline avancé ;
- pas de CR PDF obligatoire ;
- pas de pièces jointes avancées ;
- pas de règles complexes de résultat.

---

### RS-05 — Clôture locale et visualisation STAT-06

**Objectif QA**

Vérifier que la clôture locale peut être réalisée sans dépendance externe.

**Stories concernées**

- US-INC01-014
- US-INC01-015
- US-INC01-016

**Critères QA métier**

- une intervention avec CR et résultat est prête à clôturer ;
- le responsable SAV peut clôturer localement ;
- STAT-06 est appliqué ;
- STAT-06 est visible sur la fiche ;
- STAT-06 est visible dans la liste ;
- la clôture ne dépend pas d'un CRM réel ;
- la clôture ne dépend pas d'une synchronisation externe réussie.

**Points de vigilance**

- pas de validation complexe multi-acteurs ;
- pas de dashboard nécessaire ;
- pas de CRM réel ;
- pas de sync bloquante.

---

## 6. Vérification du flux bout en bout

| Étape | Vérification attendue |
|-------|-----------------------|
| 1. Demande créée | Demande existante en STAT-01 |
| 2. Demande visible en liste | Demande retrouvée dans la liste |
| 3. Fiche accessible | Navigation liste → fiche opérationnelle |
| 4. Détail consultable | Informations principales visibles |
| 5. Qualification complétée | Checklist minimale remplie |
| 6. STAT-02 visible | Statut qualifiée sur liste et fiche |
| 7. Intervention créée | Intervention liée à la demande |
| 8. Créneau sélectionné | Créneau renseigné |
| 9. Technicien affecté | Technicien assigné |
| 10. STAT-03 visible | Intervention planifiée visible |
| 11. Intervention consultable par technicien | Accès terrain opérationnel |
| 12. CR saisi | Compte rendu simple enregistré |
| 13. Résultat renseigné | Résultat d'intervention exploitable |
| 14. Intervention prête à clôturer | Conditions de clôture réunies |
| 15. STAT-06 appliqué | Clôture locale effective |
| 16. STAT-06 visible liste et fiche | Statut clôturé confirmé |

---

## 7. Vérification des statuts

| Statut | Vérification QA | Résultat attendu |
|--------|-----------------|------------------|
| **STAT-01** — À qualifier | Demande créée et non qualifiée | Visible liste / fiche |
| **STAT-02** — Qualifiée | Qualification terminée | Visible liste / fiche |
| **STAT-03** — Planifiée | Intervention planifiée | Visible planning / fiche / liste |
| **STAT-04** — En cours | Réalisation engagée / CR saisi | Visible ou traçable |
| **STAT-05** — En attente client | Hors chemin nominal | Non requis pour démo INC-01 |
| **STAT-06** — Clôturée localement | Clôture locale | Visible liste / fiche |
| **STAT-07** — En retard | Hors INC-01 | Non activé |
| **STAT-08** — Anomalie d'intégration | Hors INC-01 | Non activé |

---

## 8. Vérification des garde-fous

| Garde-fou | Vérification attendue |
|-----------|----------------------|
| Aucun CRM réel requis | Flux complet sans intégration CRM |
| Aucune synchronisation externe bloquante | Clôture locale sans sync réussie |
| Aucun dashboard requis | Vérification via liste et fiche uniquement |
| Aucun statut non prévu | Uniquement STAT-01 à STAT-06 actifs |
| STAT-07/08 non activés | Indicateurs absents du chemin nominal |
| Aucun planning avancé obligatoire | Créneau simple suffisant |
| Aucun CR PDF obligatoire | CR texte simple acceptable |
| Aucune application mobile native complète obligatoire | Parcours technicien fonctionnel sans app native |
| Figma non bloquant | Vérification sur comportement, pas sur maquette finale |
| Aucun test automatisé créé dans ce cycle | Stratégie documentaire uniquement |

---

## 9. Données de démonstration à prévoir

| Donnée de démo | Usage |
|----------------|-------|
| Demande SAV fictive | Point d'entrée du flux |
| Demandeur / client fictif | Contexte métier minimal |
| Motif simple | Libellé de la demande |
| Priorité simple | Priorisation légère |
| Checklist qualification minimale | Passage vers STAT-02 |
| Créneau simple | Planification RS-03 |
| Technicien fictif | Affectation et parcours terrain |
| Compte rendu simple | Saisie RS-04 |
| Résultat intervention simple | Préparation clôture RS-05 |

**Précision :** ces données restent **indicatives** et ne constituent **pas** un jeu de test formel.

---

## 10. Risques QA

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Critères trop techniques** | Perte de lisibilité métier | Rester sur critères observables |
| **Tests créés trop tôt** | Surcharge cycle | Garder stratégie seulement |
| **Dépendance CRM implicite** | Blocage démo | Vérifier clôture locale autonome |
| **Dashboard requis par erreur** | Hors INC-01 | Vérifier liste / fiche |
| **Statut non prévu** | Incohérence | Vérifier STAT-01 à STAT-06 uniquement |
| **Démo non bout en bout** | Valeur faible | Conserver scénario complet STAT-01 → STAT-06 |

---

## 11. Sorties attendues pour futur cycle QA

| Sortie future | Description |
|---------------|-------------|
| **Scénarios de test métier** | Cas de vérification détaillés par story et séquence |
| **Jeux de données de test** | Données formelles pour exécution des scénarios |
| **Cas de non-acceptation** | Vérification des refus et blocages métier |
| **Critères de non-régression** | Stabilité des séquences précédentes |
| **Stratégie de test automatisé éventuelle** | Décision future sur automatisation |
| **Suivi anomalies** | Traçabilité des écarts constatés |
| **Préparation démo métier** | Scénario de démonstration structuré |

**Précision :** ces éléments sont à produire dans un **futur cycle QA**, pas dans ce document.

---

## 12. Garde-fous

- ne **pas** transformer ce document en plan de test détaillé ;
- ne **pas** créer de cas de test formels ;
- ne **pas** créer de tests automatisés ;
- ne **pas** créer de scripts ;
- ne **pas** créer de code ;
- ne **pas** introduire de CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** rendre Figma bloquant.

---

## 13. Critères de sortie

- [x] stratégie QA par séquence définie ;
- [x] vérification du flux bout en bout définie ;
- [x] vérification des statuts définie ;
- [x] vérification des garde-fous définie ;
- [x] données de démonstration indicatives listées ;
- [x] risques QA identifiés ;
- [x] sorties futures QA identifiées ;
- [x] aucun test détaillé créé ;
- [x] aucun test automatisé créé.

---

## 14. Prochaine action

Le prochain livrable est :

**[`inc-01-effort-estimation.md`](inc-01-effort-estimation.md)**

**Objectif :** produire une estimation macro de charge et de complexité par séquence de réalisation.

---

*Stratégie QA INC-01 — Draft.*
