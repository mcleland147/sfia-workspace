# Interv360 — INC-01 Phase 2 delivery decision

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Phase 2 delivery decision  
**Statut** : Décision de passage en réalisation groupée contrôlée  
**Branche** : `delivery/interv360-inc-01-phase-2-delivery-decision`

---

## 1. Objectif du document

Ce document acte le **passage d'INC-01 en phase 2 de réalisation**.

La phase 1 a permis de sécuriser le périmètre, les choix techniques, les données fictives, le parcours readonly et les garde-fous.

La phase 2 vise désormais à accélérer la réalisation en regroupant plusieurs fonctionnalités cohérentes dans un même lot applicatif contrôlé.

---

## 2. Phase 1 — Cadrage fin et sécurisation

La phase 1 a couvert :

| Élément | État |
|--------|------|
| Go / no-go réalisation | Réalisé |
| Arbitrage technique | Réalisé |
| Cadrage data | Réalisé |
| Socle applicatif | Réalisé |
| Liste demandes | Réalisé |
| Fiche demande | Réalisé |
| Reset démo | Réalisé |
| Qualification readonly | Réalisé |
| Planification readonly | Réalisé |
| Intervention readonly | Réalisé |
| Compte rendu readonly | Réalisé |
| Consolidation readonly | Réalisé |
| Décision première transition | Réalisé |

La phase 1 a volontairement avancé par micro-cycles afin de stabiliser le cadre SFIA de réalisation.

**Sources :** [`inc-01-readonly-demo-summary.md`](inc-01-readonly-demo-summary.md), [`2026-06-30-inc-01-action-transition-decision.md`](2026-06-30-inc-01-action-transition-decision.md)

---

## 3. Enseignement de la phase 1

La phase 1 a démontré que la méthode SFIA permet :

- de passer d'une architecture fonctionnelle à une réalisation applicative ;
- de sécuriser les décisions techniques ;
- de limiter les dérives de périmètre ;
- de séparer clairement readonly et actions métier ;
- de documenter les décisions de delivery ;
- de maintenir une traçabilité entre besoin, architecture, code et tests ;
- de construire une base applicative démontrable sans backend ni données réelles.

Cette approche est pertinente pour sécuriser le démarrage.

Elle devient cependant **trop lente** si elle est appliquée à chaque micro-évolution fonctionnelle.

---

## 4. Décision de changement de régime

**Décision :**

- [x] Clôturer la phase 1 de cadrage fin
- [x] Ouvrir une phase 2 de réalisation groupée contrôlée
- [ ] Continuer uniquement en micro-cycles
- [ ] Passer en réalisation non cadrée

La phase 2 doit permettre d'implémenter un lot fonctionnel plus large, tout en conservant les garde-fous SFIA.

---

## 5. Phase 2 — Réalisation groupée contrôlée

La phase 2 repose sur le principe suivant :

> Lorsque les règles sont claires, les fonctionnalités cohérentes peuvent être regroupées dans un même cycle de réalisation.

La phase 2 **n'est pas** une suppression du cadre.

Elle est une **adaptation du rythme de delivery**.

---

## 6. Lot fonctionnel cible phase 2

Le lot fonctionnel recommandé est :

`delivery/interv360-inc-01-controlled-workflow-skeleton`

**Objectif :**

Implémenter un workflow local contrôlé sur données fictives, couvrant les transitions suivantes :

| Transition | Action métier fictive |
|------------|------------------------|
| STAT-01 → STAT-02 | Qualifier la demande |
| STAT-02 → STAT-03 | Planifier l'intervention |
| STAT-03 → STAT-04 | Marquer l'intervention réalisée |
| STAT-04 → STAT-06 | Clôturer avec compte rendu fictif |

---

## 7. Garde-fous maintenus en phase 2

La phase 2 conserve les interdits suivants :

- pas de backend ;
- pas d'API ;
- pas de base de données serveur ;
- pas de SQL / DDL / migration ;
- pas de CRM réel ;
- pas de données réelles ;
- pas de dashboard ;
- pas de multi-utilisateur ;
- pas de mécanisme d'authentification avancé ;
- pas de STAT-05 / STAT-07 / STAT-08 ;
- pas de publication Notion ;
- pas de tickets Jira ;
- pas de sprint Jira.

Les données restent **fictives et locales**.

---

## 8. Conditions de réalisation phase 2

Le cycle applicatif phase 2 devra respecter :

| Sujet | Condition |
|------|-----------|
| Données | `SAV-DEMO-001` uniquement |
| Persistance | `localStorage` uniquement |
| Accès stockage | `src/data/` uniquement |
| Reset | Restaure l'état initial en `STAT-01` |
| Transitions | Strictement contrôlées |
| Journal | Local, fictif, réinitialisable |
| UI | Explicite, démonstration uniquement |
| Tests | Parcours complet et non-régression |
| Backend | Interdit |
| Données réelles | Interdites |

---

## 9. Apport SFIA attendu

Le passage en phase 2 permet de démontrer que la SFIA peut gérer **deux rythmes complémentaires** :

### Phase 1 — Sécurisation

- cadrage fin ;
- décisions documentées ;
- micro-cycles ;
- contrôle du périmètre ;
- stabilisation technique.

### Phase 2 — Réalisation groupée

- lot fonctionnel cohérent ;
- exécution plus rapide ;
- garde-fous conservés ;
- tests élargis ;
- documentation de synthèse en fin de cycle.

Cette articulation est plus réaliste pour un contexte projet réel.

---

## 10. Risques identifiés

| Risque | Mitigation |
|------|------------|
| Réintroduire trop de complexité | Limiter le lot à INC-01 local |
| Confondre démo et production | Maintenir les bandeaux fictifs |
| Ouvrir trop de transitions | Limiter à STAT-01 → STAT-06 nominal |
| Perdre la traçabilité | Ajouter un journal local fictif |
| Dériver vers backend/API | Interdit explicite |
| Dériver vers données réelles | Interdit explicite |
| Casser le reset | Tester systématiquement le reset |

---

## 11. Décision

La décision est d'**ouvrir la phase 2 de réalisation groupée contrôlée**.

**Cycle recommandé :**

`delivery/interv360-inc-01-controlled-workflow-skeleton`

Cette décision **autorise** l'ouverture d'un cycle applicatif groupé.

Elle **n'autorise pas** :

- un backend ;
- une API ;
- une base de données ;
- des données réelles ;
- un CRM ;
- un dashboard ;
- des transitions hors INC-01 nominal ;
- une publication Notion ;
- un push ou une PR automatique.

---

## 12. Prochaine étape

Ouvrir le cycle :

`delivery/interv360-inc-01-controlled-workflow-skeleton`

**Objectif :**

- implémenter les transitions nominales INC-01 ;
- ajouter un journal local fictif ;
- maintenir le reset ;
- tester le parcours complet ;
- documenter le cycle en fin de réalisation.
