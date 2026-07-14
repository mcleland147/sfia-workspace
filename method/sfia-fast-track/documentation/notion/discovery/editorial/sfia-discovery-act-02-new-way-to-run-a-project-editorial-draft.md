# ACTE II — Une nouvelle façon de conduire un projet

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-03A (préparation éditoriale Git — Acte II) |
| **Acte** | II — Une nouvelle façon de conduire un projet |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-act-02-editorial` |
| **HEAD / base** | `4994954f195169a3262910439fcd2455955c38f5` |
| **Horodatage** | 2026-07-14 20:25 Europe/Paris (CEST) |
| **Niveau lecture** | L1 |
| **Durée cible** | 8–10 minutes |
| **Question lecteur** | En quoi SFIA est-elle différente d'une conduite classique ou d'un usage libre de ChatGPT et Cursor ? |
| **Implémentation Notion** | Non — gate PD-03B futur |
| **Réaction recherchée** | « Je comprends comment SFIA organise le projet — je suis prêt à suivre NovaBuild. » |

---

## 1. Ouverture et continuité avec l'Acte I

Dans l'**Acte I**, vous avez reconnu un problème familier : une intention métier simple devient une chaîne complexe de responsabilités, de livrables et de décisions — et les outils IA utilisés sans cadre n'y suffisent pas.

La question qui suit est naturelle :

> **Comment construire un système cohérent — sans reconstruire une usine à processus ?**

L'**Acte II** répond à cette question. Il ne répète pas la douleur du flou : il présente **le modèle visible** de SFIA — assez concret pour vous projeter, assez sobre pour rester crédible.

---

## 2. Trois façons de conduire le projet

En pratique, trois postures reviennent souvent :

| Posture | Idée dominante | Force | Fragilité typique |
|---------|----------------|-------|-------------------|
| **Projet classique** | Cadre, rôles, documents, comités | Expertise reconnue, gouvernance structurée | Coordination potentiellement lourde selon l'organisation |
| **IA libre** (ChatGPT, Cursor seuls) | Vitesse, réactivité, « on avance tout de suite » | Accélération locale, idées, code | Contexte volatile, décisions implicites, trace faible |
| **SFIA** | Cycles courts + IA assistée + décision humaine + trace Git | Vitesse **et** gouvernance visible | Exige discipline et gates — pas une baguette magique |

SFIA ne nie pas la valeur du projet classique ni la puissance de l'IA. Elle **organise** les deux dans une chaîne lisible.

---

## 3. Contraste tripartite

Comparaison **pédagogique qualitative** — pas de benchmark chiffré.

| Dimension | Projet classique | IA libre | SFIA |
|-----------|------------------|----------|------|
| **Cadre** | Cahier des charges, comité, planning | Ad hoc, session par session | **Cycles** bornés avec intention claire |
| **Vitesse** | Démarrage parfois plus long selon le cadre et les validations | Très rapide en local | Rapide **avec** périmètre et validation |
| **Traçabilité** | Variable selon maturité doc | Faible entre sessions | **Git** — source de vérité |
| **Décision** | Comité, sponsor, MOA | Utilisateur seul | **Morris** aux gates structurants + vous sur le métier |
| **Livrables** | Documents projet, livrables contractuels | Fragments, brouillons, code isolé | **Artefacts par cycle** — vérifiables |
| **Continuité du contexte** | Dépend des outils et des personnes | Perdue entre conversations | Reprise via repo et cycles |
| **Capitalisation** | Dépend des pratiques de documentation et de REX | Rare | Retours d'expérience intégrés à la méthode |
| **Limites** | Rigidité possible selon le cadre et la gouvernance | Chaos, sur-confiance, rework | Discipline requise ; pas de garantie absolue |

---

## 4. Le modèle visible de SFIA

SFIA distribue les responsabilités entre **cinq acteurs visibles** :

| Acteur | Rôle visible | Ce qu'il ne fait pas seul |
|--------|--------------|---------------------------|
| **Morris** | Décide et arbitre aux **gates** structurants (périmètre, architecture, publication, merge, déploiement…) | Remplacer votre métier |
| **ChatGPT** | Qualifie, structure, challenge, prépare documents et analyses | Exécuter dans le repository |
| **Cursor** | Exécute localement dans un **périmètre borné** — code, docs, commandes | Décider du scope ou valider seul |
| **Git** | Conserve la **source de vérité** — historique, PR, preuves | Expliquer la valeur au lecteur métier |
| **Notion Discovery** | Couche **métier et pédagogique** — comprendre avant d'entrer dans Git | Miroir intégral de la méthode |

**Trois mouvements à distinguer :**

1. **Proposition** — IA et équipe produisent, structurent, suggèrent
2. **Exécution** — Cursor (et humains) matérialisent dans le repo
3. **Décision** — Morris (ou votre sponsor) tranche aux points structurants

Sans cette séparation, la vitesse de l'IA devient du bruit.

---

## 5. Le rôle des cycles

Un **cycle SFIA** est une unité de travail **bornée** — compréhensible en langage métier :

| Élément | Sens pour le lecteur |
|---------|---------------------|
| **Intention** | Pourquoi ce cycle maintenant ? |
| **Sources** | Sur quoi s'appuie-t-on ? (docs, décisions, repo) |
| **Périmètre** | Ce qui est in / out pour cette étape |
| **Livrable** | Ce qui doit exister à la fin (document, code, rapport…) |
| **Validation** | Qui relit, qui teste, quels critères |
| **Décision** | Go / no-go / ajustement avant la suite |

Exemples métier (sans catalogue exhaustif) : cadrage fonctionnel, conception UX, delivery d'un incrément, QA, release.

> SFIA comporte **plusieurs types de cycles** — leur matrice détaillée reste dans Git, pas dans cette page Discovery.

---

## 6. Le rôle des gates Morris

Certaines décisions ne doivent **pas** être déléguées à l'IA :

- **Périmètre** — que couvre vraiment cette version ?
- **Architecture** — choix structurants qui engagent la suite
- **Publication** — merge, release, visibilité externe
- **Déploiement** — mise en production ou environnement sensible

Une **gate** est un point d'arrêt explicite : le livrable est prêt · Morris (ou le décideur désigné) **tranche** · la trace est conservée.

Cela ne signifie pas que Morris micro-manage chaque ligne de code. Cela signifie que **les décisions qui engagent durablement le projet** restent humaines et documentées.

---

## 7. Une chaîne de travail traçable

Schéma textuel — chaîne métier SFIA :

```text
Besoin métier
    → Qualification (ChatGPT + équipe)
        → Préparation (spec, plan, périmètre)
            → Exécution (Cursor + dev / rédaction)
                → Revue (pair, QA, Morris selon gate)
                    → Décision (gate)
                        → Trace Git (commit, PR, merge)
                            → Cycle suivant
```

Chaque maillon produit un **artefact identifiable**. Vous pouvez reprendre le projet sans reconstruire le contexte dans une conversation IA.

---

## 8. Ce que cette approche change

Lorsque la méthode est **correctement appliquée**, SFIA peut :

- **maintenir** la continuité du contexte entre sessions et intervenants ;
- **séparer** clairement proposition, exécution et décision ;
- **rendre visibles** les livrables — pas seulement l'activité ;
- **faciliter** la reprise après changement d'équipe ou de prestataire ;
- **donner** au dirigeant ou sponsor des points de contrôle lisibles ;
- **améliorer** progressivement la méthode via retours d'expérience.

Formulations **conditionnelles** : le gain dépend du respect du cadre et de l'engagement métier.

---

## 9. Ce que SFIA ne change pas

| Réalité | Précision |
|---------|-----------|
| Comprendre le métier | SFIA structure — elle ne devine pas votre contexte |
| Risques projet | Ils existent toujours — le cadre les rend plus visibles |
| Expertises | Métier, architecture, QA, sécurité restent nécessaires |
| Tests | Indispensables — SFIA les intègre, ne les supprime pas |
| Responsabilité | Votre organisation reste responsable du produit livré |
| Garantie | Aucune promesse de succès automatique |

---

## 10. Transition vers l'Acte III

Vous disposez maintenant d'un **cadre** : contrastes, rôles, cycles, gates, traçabilité.

Il reste à le **voir en mouvement** sur un projet concret.

**NovaBuild** — cas **pédagogique composite** (entreprise fictive, récit scénarisé, catégories de livrables inspirées d'actifs SFIA vérifiables) — servira de fil rouge dans l'**Acte III**. Ce n'est ni un client réel ni un témoignage chiffré.

> **Voyons maintenant comment ce cadre accompagne un projet concret, de l'intention à la mise en service.**

**→ Continuer : ACTE III — Suivons NovaBuild** *(cycle PD-04A)*

---

## 11. Navigation cible

| Élément | Valeur |
|---------|--------|
| **Précédent** | Acte I — Pourquoi SFIA existe |
| **Suivant** | Acte III — Suivons NovaBuild |
| **Fil d'Ariane** | Discovery · Acte II · Une nouvelle façon de conduire un projet |
| **Parcours 20 min** | Hub → Acte I → **Acte II** → teaser Acte III |

---

## 12. Notes d'implémentation Notion PD-03B

| Élément | Recommandation |
|---------|----------------|
| **Layout** | Tableau tripartite en colonnes Notion · schéma chaîne en callout |
| **Toggles** | Rôles Morris/ChatGPT/Cursor · cycles · gates |
| **Callout** | « Candidate » · « Pas de matrice routing ici » |
| **Liens** | Acte I ← → Acte III (Acte III grisé jusqu'à PD-04B) |
| **Interdit** | Prompt catalog · routing exhaustif · commandes Git |

---

## 13. Sources Git

| Source | Usage |
|--------|-------|
| `discovery-product-design/02-sfia-discovery-narrative-architecture.md` | Cadrage Acte II |
| `discovery-product-design/03-sfia-discovery-storyline.md` | Contraste tripartite |
| `discovery-product-design/05-sfia-discovery-editorial-contract.md` | Ton · promesses |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Rôles IA |
| `discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md` | Continuité Acte I |

---

## 14. Critères d'acceptation de l'Acte II

| # | Critère | Statut brouillon |
|---|---------|------------------|
| B1 | Continuité Acte I sans répétition | ✓ |
| B2 | Contraste tripartite qualitatif | ✓ |
| B3 | Rôles Morris / ChatGPT / Cursor / Git / Notion | ✓ |
| B4 | Proposition / exécution / décision séparées | ✓ |
| B5 | Cycles en langage métier — pas catalogue 15 cycles | ✓ |
| B6 | Gates Morris — exemples, pas liste exhaustive | ✓ |
| B7 | Aucune statistique non sourcée | ✓ |
| B8 | Non-promesses explicites | ✓ |
| B9 | NovaBuild annoncé comme composite — pas récit III | ✓ |
| B10 | Transition Acte III naturelle | ✓ |

**Verdict brouillon :** soumis à revue Morris (gates M1–M3).

---

## Contenu lecteur — corps principal (PD-03B)

*Les sections 1–10 constituent le contenu lecteur. Métadonnées §11–14 réservées gouvernance et implémentation.*
