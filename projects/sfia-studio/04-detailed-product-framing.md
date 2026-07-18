# SFIA Studio — Cadrage détaillé produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `04-detailed-product-framing.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-validated` |
| **Décisions applicables** | D-VAL-1 à D-VAL-11 |
| **Autorité** | Morris |
| **Source de vérité** | Git `main` — PR #207 / `ec21074` |

> Contrat produit détaillé **validé** (D-VAL-9). **Pas** de conception fonctionnelle, architecture, stack, backlog, UX ni POC.

---

## 1. Résumé exécutif

SFIA Studio est le projet officiel visant une **plateforme métier opérationnelle et durable** pour **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris, tout en **consommant** SFIA v2.6 (Option C).

Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** ont autorisé ce cadrage détaillé, **validé** par D-VAL-9 / DF-G1. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la plateforme** restent distincts et non figés ici. **G7** (D-VAL-10, historique) : commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 mergée (`ec21074`). **D-VAL-11 — VALIDÉE** (Morris — 2026-07-18) : intégration reconnue ; cadrage documentaire **clôturé** ; prochain cycle non sélectionné.

---

## 2. Problème validé (G2)

### Situation actuelle

La boucle SFIA fonctionne manuellement :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse → décision Morris.**

### Effets observables

- Friction de copier/coller entre surfaces (chat, IDE, terminal, fichiers temporaires).
- Charge cognitive liée à la multiplicité d’artefacts (prompt, rapport, review pack, handoff).
- Risque d’écarts hors branche / hors périmètre par discipline opérateur variable.
- Visibilité partielle de l’état Git et des gates en un seul lieu.
- Tentation d’automatiser trop tôt et de contourner les gates humains.

### Populations concernées

| Population | Implication |
|------------|-------------|
| Morris | Utilisateur primaire et autorité L0 |
| Futurs opérateurs autorisés | Candidats ultérieurs — non définis pour le MVP |
| Contributeurs / reviewers | Consommateurs indirects de la traçabilité Git |

### Symptômes vs causes candidates

| Symptômes | Causes candidates (hypothèses) |
|-----------|--------------------------------|
| Friction multi-outils | Absence d’interface métier unifiée |
| Erreurs de contrat / routage | Qualification et sources non assistées dans un cockpit |
| Perte de contexte | État dispersé hors d’une vue cycle unique |
| Risque de dérive | Gates et stop conditions non présentés au même endroit que l’exécution |

---

## 3. Opportunité validée (G2)

| Dimension | Contenu |
|-----------|---------|
| **Valeur attendue** | Pilotage métier durable des cycles ; moins de friction ; meilleure conformité aux garde-fous ; traçabilité ancrée Git |
| **Pourquoi maintenant** | Méthode v2.6 stabilisée ; boucle éprouvée ; friction devenue le goulot principal |
| **Coût de l’inaction** | Persistance de la charge cognitive ; risque accru d’écarts ; difficulté à industrialiser l’exploitation de la plateforme |
| **Limites** | Ne remplace pas la méthode ; ne crée pas de valeur métier sans MVP ultérieur ; Option C interdit le couplage doctrine silencieux |

---

## 4. Vision produit détaillée

1. Plateforme métier **complète** (produit cible), pas un POC.
2. Pilotage **progressif** des cycles SFIA (pas obligation immédiate des 15).
3. Orchestration Git + GPT + Cursor + mécanisme déterministe **sous gates Morris**.
4. Industrialisation de la **plateforme** (sécurité, observabilité, maintenabilité, distribution) — **pas** des cycles.
5. Git = vérité durable ; état opérationnel éventuel = dérivé / reconstructible.
6. Automatisation progressive bornée — **jamais** d’arbitrage automatique.

---

## 5. Objectifs produit candidats

| ID | Objectif qualitatif | Résultat attendu |
|----|---------------------|------------------|
| O1 | Unifier le pilotage de cycle | Intention → clôture dans une surface métier |
| O2 | Renforcer la conformité | Contrats, profils, chemins interdits, stop conditions visibles |
| O3 | Ancrer la traçabilité | Décisions et preuves rattachées à Git |
| O4 | Réduire la friction | Moins de manipulations manuelles GPT/Cursor/Git |
| O5 | Préparer la preuve technique | POC de faisabilité dérivé du produit (pas l’inverse) |
| O6 | Préparer la valeur métier | MVP utilisable après preuve — non défini ici |
| O7 | Préparer l’exploitation durable | Industrialisation plateforme ultérieure |

Aucune valeur numérique inventée.

---

## 6. Non-objectifs

- Remplacer Git comme source de vérité.
- Automatiser les arbitrages Morris.
- Modifier silencieusement SFIA v2.6 / créer v2.7 / relancer v3.0.
- Couvrir immédiatement les quinze cycles.
- Transformer le POC en produit ou en MVP.
- Imposer l’architecture plateforme historique (Studio/Runtime/Core/Knowledge) comme cible validée.
- Choisir stack, API, modèle de données ou UX dans ce cycle.

---

## 7. Utilisateurs et parties prenantes

| Acteur | Rôle |
|--------|------|
| **Morris** | Utilisateur primaire ; autorité de décision |
| **Futurs opérateurs autorisés** | Candidats produit ultérieurs |
| **GPT** | Qualification, analyse, revue — non décideur |
| **Cursor** | Exécuteur repository contrôlé |
| **Git / GitHub** | Vérité / revue PR |
| **Mécanisme d’orchestration (candidat)** | Contrats, permissions, gates, stop conditions |
| **Sécurité / exploitation** | Exigences et contrôles futurs |
| **Contributeurs** | Consommateurs de la traçabilité |

---

## 8. Principes produit

| Principe | Implication |
|----------|-------------|
| **Repo-first** | Git porte l’état durable |
| **Human gates** | Aucune décision structurante automatisée |
| **Réversibilité** | Actions bornées, arrêtables, traçables |
| **Explicabilité** | Contrats, profils, stop conditions visibles |
| **État durable dans Git** | Décisions, docs, preuves versionnées |
| **État opérationnel dérivé** | Reconstructible depuis Git — hypothèse |
| **Permissions minimales** | Moindre privilège agents / commandes |
| **Automatisation progressive** | L3/L4 futurs éventuels — non activés |

---

## 9. Hypothèses

| ID | Domaine | Hypothèse | Risque si fausse |
|----|---------|-----------|------------------|
| H1 | Valeur | La friction multi-outils est le goulot principal | Mauvais produit |
| H2 | Usage | Morris restera l’opérateur primaire au moins jusqu’au MVP | Gouvernance à revoir |
| H3 | Faisabilité | Orchestration Git/GPT/Cursor/mécanisme déterministe est réalisable | POC échoue |
| H4 | Gouvernance | Les gates UI renforcent sans contourner | Risque sécurité |
| H5 | Adoption | Une UI métier améliore la conformité v2.6 | ROI faible |
| H6 | Méthode | Option C reste adaptée | Repositionnement G4 |
| H7 | Preuve | POC dérivé d’une archi cible suffisante | POC non représentatif |

---

## 10. Contraintes

| Domaine | Contrainte |
|---------|------------|
| Méthode | Consomme v2.6 ; Option C ; pas de modification silencieuse |
| Repository | Git = source de vérité |
| Environnement initial | Preuve POC sur macOS local Morris — non contractuel pour le produit |
| Fournisseurs | GPT / Cursor / éventuels services — capacités non inventées |
| Sécurité | Secrets, permissions, exécution locale, gates |
| Coûts | Tokens / modèles / exécutions à mesurer |
| Accessibilité | Exigence produit à qualifier — pas de référentiel figé ici |

---

## 11. Dépendances

| Dépendance | Nature |
|------------|--------|
| Git | Lecture / écriture contrôlée d’état |
| GPT | Qualification, analyse, verdict |
| Cursor | Exécution repository bornée |
| Mécanisme d’orchestration | Candidat — non validé |
| Environnement local | Preuve initiale |
| Permissions / secrets | Prérequis sécurité |

---

## 12. Risques de niveau cadrage

| ID | Risque | Domaine |
|----|--------|---------|
| R1 | Valeur non démontrée malgré faisabilité | Valeur |
| R2 | Contournement des gates via UI | Sécurité |
| R3 | Fuite de contexte vers fournisseurs IA | Confidentialité / RGPD |
| R4 | Dépendance fournisseur IA / Cursor | Dépendance |
| R5 | Dette par sur-cadrage ou archi prématurée | Dette |
| R6 | Complexité plateforme trop tôt | Complexité |
| R7 | Seconde source de vérité opaque | Gouvernance |
| R8 | Observabilité insuffisante | Observabilité |
| R9 | Sur-automatisation (L3/L4 trop tôt) | Gouvernance |

---

## 13. Questions ouvertes

1. Ordre des cycles post-cadrage (conception vs architecture vs UX) ?
2. Niveau de preuve architecture avant définition détaillée du POC ?
3. Métriques de valeur à contractualiser au MVP ?
4. Gouvernance multi-opérateur future ?
5. Politique secrets / permissions produit ?
6. Sort de la branche projet / sélection du prochain cycle ?
7. Quel prochain cycle (conception bornée recommandée) ?

---

## 14. Critères de clôture du cadrage détaillé

| Critère | Cible |
|---------|-------|
| Contrat produit (04) | Complet et cohérent |
| Capacités / cas d’usage (05) | Exploitables sans backlog |
| Périmètres / critères (06) | Produit ≠ POC ≠ MVP ≠ industrialisation |
| Trajectoire / décisions (07) | Options de routage sans lancement |
| Alignement D-VAL-1…10 | Cohérent |
| Architecture / stack / MVP / POC démarrés | **Absents** |
| Revue GPT + arbitrage Morris | Requis |

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — cadrage détaillé produit validé — cadrage documentaire clôturé — D-VAL-11 validée — Morris décide.*
