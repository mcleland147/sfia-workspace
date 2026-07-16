# ACTE III.4 — Release et RUN

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.4 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment passer d'un incrément validé à un service exploitable et améliorable ? |

---

## 1. Merge ≠ mise en service

NovaBuild vient de merger un **premier incrément**. L'équipe pourrait croire le travail terminé.

SFIA distingue explicitement :

| Étape | Ce que ce n'est pas |
|-------|---------------------|
| **Merge** | Mise en production |
| **Release** | Exploitation maîtrisée sans préparation |
| **RUN** | Amélioration continue automatique |

Chaque passage est un **cycle** avec livrables et gates.

---

## 2. Préparation release

Avant publication, NovaBuild consolide :

- **release notes** — ce que l'utilisateur voit ;
- **prérequis de déploiement** — environnement · données · accès ;
- **risques connus** — réserves QA ouvertes · limitations MVP ;
- **plan de rollback** — même simplifié.

> **Transparence pédagogique :** dans des projets SFIA documentés, la **readiness pré-delivery** est riche ; la **mise en production complète** peut être une **étape ultérieure** explicitement cadrée. NovaBuild **illustre** ici la chaîne SFIA cible — sans prétendre qu'un déploiement production identique a déjà eu lieu pour ce cas fictif.

---

## 3. Décision de mise en service

**Morris** tranche à la **gate release** :

- le périmètre publié correspond-il au MVP validé ?
- les réserves restantes sont-elles **acceptées** ou **bloquantes** ?
- l'équipe NovaBuild est-elle **prête** à exploiter ?

La décision est **tracée** — date · version · arbitrages.

---

## 4. Déploiement maîtrisé

Le déploiement NovaBuild (fiction) suit un **enchaînement contrôlé** :

1. validation environnement ;
2. déploiement version taguée ;
3. **contrôles post-déploiement** — parcours smoke ;
4. confirmation **disponibilité** pour les premiers utilisateurs internes.

Pas de « deploy Friday » sans checklist.

---

## 5. Observabilité et RUN readiness

Pour **exploiter** le service, NovaBuild prépare :

| Élément | Objectif |
|---------|----------|
| **Runbook** | Que faire en cas d'incident courant |
| **Responsabilités RUN** | Qui surveille · qui corrige |
| **Observabilité minimale** | Logs · alertes · santé applicative |
| **Retour utilisateur** | Canal pour remontées terrain |

> Dans Git, des **runbooks de test local** existent pour certains projets SFIA ; l'**observabilité production complète** n'est **pas démontrée** par les sources du pilote consulté — NovaBuild l'illustre comme **étape méthodologique cible**, pas comme **fait observé**.

---

## 6. Retours · incidents · améliorations

Après mise en service (fiction) :

- remontées conducteurs de travaux ;
- incidents **documentés** sans dramatisation ;
- **correctifs** passés par cycles bornés — pas de patches orphelins.

SFIA **ne promet pas** zéro incident — elle **structure** la réponse.

---

## 7. REX et capitalisation proportionnée

En fin de cycle projet NovaBuild :

| Livrable | Finalité |
|----------|----------|
| **REX projet** | Ce qui a fonctionné · ce qui reste fragile |
| **Réserves ouvertes** | Honnêteté sur les limites |
| **Pistes méthode** | Améliorations SFIA **candidate** — pas promotion baseline automatique |

La capitalisation est **proportionnée** : leçons utiles, pas export intégral du repo.

**Moment de preuve P4 (scénarisé) :** les artefacts attendus — release notes, runbook, REX — illustrent la reprise du projet sans reconstruire tout son historique ; les sources du pilote confirment surtout readiness, runbooks de test et capitalisation.

---

## 8. Clôture du cycle projet NovaBuild

NovaBuild (fiction) atteint une **première mise en service maîtrisée** du MVP — pas la fin du produit.

| Acquis | Limite assumée |
|--------|----------------|
| Socle chantier en service | Extensions devis / facturation hors MVP |
| Traçabilité Git | Observabilité production à renforcer |
| Méthode SFIA démontrée | Pas de garantie absolue résultat |

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Un merge n'est pas une mise en service ; une mise en service n'est pas une exploitation maîtrisée. |
| **Résolution** | Release · RUN readiness · capitalisation sont des **étapes explicites**. |
| **Preuve P4** | **Preuve P4 scénarisée :** release notes, runbook et REX constituent les artefacts attendus du cas NovaBuild ; les sources du pilote attestent principalement la readiness, les runbooks de test et la capitalisation. |

---

## 10. Transition vers l'Acte IV

Vous avez **suivi** NovaBuild — intention, cadrage, conception, delivery, QA, release, RUN, capitalisation.

L'Acte III montre **le mouvement**. L'**Acte IV** montre **ce que SFIA produit** — la galerie des livrables et artefacts par cycle.

> **Nous avons suivi le projet. Regardons maintenant ce que SFIA a concrètement produit.**

**→ Continuer : ACTE IV — Ce que SFIA produit**

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 11. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Readiness pré-delivery | validation-and-delivery-readiness (pilote) |
| Post-MVP / gaps production | post-mvp-framing · REX final pilote |
| Capitalisation | Dossier 09-capitalization/ · rapports INC et MVP |
| Runbook (test) | local-e2e-runbook — catégorie, pas prod ops |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–10 ci-dessus.*
