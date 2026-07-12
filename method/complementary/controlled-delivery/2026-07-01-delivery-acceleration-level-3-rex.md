# SFIA — Delivery Acceleration Level 3 REX

**Méthode** : Controlled Delivery
**Cycle** : Delivery Acceleration Level 3 REX
**Statut** : Capitalisation compacte
**Branche** : `method/delivery-acceleration-level-3-rex`

---

## 1. Objectif

Ce document capitalise l'évolution du mode de delivery SFIA observée sur Interv360.

L'objectif est de formaliser quand ralentir, quand accélérer, et quand regrouper plusieurs incréments dans un lot cohérent.

Ce REX reste volontairement compact afin de ne pas recréer une lourdeur documentaire.

---

## 2. Point de départ

Interv360 a permis de tester plusieurs niveaux de contrôle :

| Niveau | Mode | Usage observé |
|--------|------|---------------|
| Niveau 1 | Micro-cycles contrôlés | Sujet instable, décisions à sécuriser |
| Niveau 2 | Fast Delivery par incrément | Périmètre clair, faible risque, valeur rapide |
| Niveau 3 | Batch Delivery | Plusieurs incréments cohérents, même cadre technique, faible risque |
| Niveau 4 | Post-merge léger | Traçabilité intégrée au document unique |

---

## 3. Enseignement principal

La SFIA ne doit pas imposer un niveau de contrôle fixe.

Elle doit adapter son intensité selon :

- la clarté du périmètre ;
- le niveau de risque ;
- la stabilité technique ;
- la maturité du sujet ;
- la répétabilité des incréments ;
- la valeur réelle de la documentation produite.

Le bon principe devient :

> Supprimer les étapes administratives inutiles, pas les garde-fous utiles.

---

## 4. Règle d'optimisation continue

Entre les étapes, appliquer systématiquement la réflexion suivante :

1. Est-ce que le processus devient trop long ?
2. Si oui, cette longueur apporte-t-elle une valeur à la SFIA ?
3. Si oui, conserver l'étape et expliquer pourquoi.
4. Si non, fusionner, supprimer ou automatiser l'étape.
5. Vérifier que les garde-fous essentiels restent présents.

---

## 5. Quand utiliser les micro-cycles contrôlés

Utiliser les micro-cycles lorsque :

- le sujet est encore flou ;
- la décision est structurante ;
- le risque de scope creep est élevé ;
- l'architecture n'est pas stabilisée ;
- les garde-fous ne sont pas encore connus ;
- un mauvais choix aurait un coût important.

Exemple Interv360 :

INC-01 a justifié des cycles fins, car il fallait construire à la fois le démonstrateur, la méthode et les règles de contrôle.

---

## 6. Quand utiliser Fast Delivery par incrément

Utiliser Fast Delivery lorsque :

- le périmètre est clair ;
- le risque est faible à moyen ;
- le cadre technique est connu ;
- l'incrément apporte une valeur autonome ;
- les tests permettent de sécuriser rapidement ;
- une PR par incrément reste pertinente.

Règle :

> 1 incrément = 1 branche + 1 document + 1 résultat utile.

Exemples Interv360 : INC-02 (UX démo), INC-03 (multi-demandes), INC-04 (filtres locaux).

---

## 7. Quand utiliser Batch Delivery

Utiliser Batch Delivery lorsque plusieurs incréments sont :

- cohérents fonctionnellement ;
- dans le même domaine ;
- dans le même cadre technique ;
- faibles en risque ;
- sans dépendance externe ;
- sans changement d'architecture ;
- testables ensemble ;
- plus lisibles en une PR groupée qu'en plusieurs PR dispersées.

Règle :

> 1 lot cohérent = 1 branche + 1 document + 1 PR.

Exemple Interv360 :

Batch 01 a regroupé :

- priorités fictives ;
- criticité fictive ;
- recherche locale ;
- fiche détail enrichie ;
- états vides.

Le lot a permis de réduire 4 cycles potentiels en 1 seul, sans perte de contrôle mesurable.

---

## 8. Quand ne pas utiliser Batch Delivery

Ne pas utiliser Batch Delivery si :

- un incrément est risqué ;
- une décision métier doit être validée séparément ;
- un changement d'architecture est introduit ;
- un backend/API/DB est ajouté ;
- des données réelles ou intégrations externes apparaissent ;
- le diff devient trop large pour être revu correctement ;
- les tests ne couvrent pas suffisamment le lot.

Dans ces cas, revenir à Fast Delivery ou micro-cycle contrôlé.

---

## 9. Garde-fous minimaux obligatoires

Quel que soit le mode, conserver au minimum :

- objectif clair ;
- périmètre autorisé ;
- hors périmètre ;
- tests ;
- validation build ;
- trace des changements ;
- garde-fous explicités ;
- PR reviewable ;
- absence de publication externe sans demande explicite.

---

## 10. Post-merge léger

Pour les incréments ou lots à faible risque, ne pas créer de document de merge séparé.

Préférer :

- synchronisation `main` ;
- build/tests post-merge si pertinent ;
- ajout d'une section `Statut merge` dans le document unique ;
- commit documentaire court.

Exemples Interv360 :

- INC-04 : section merge intégrée au document unique, sans `inc-04-merge-summary.md` ;
- Batch 01 : section §13 `Statut merge` dans `batch-01-demo-credibility.md`, sans `batch-01-merge-summary.md`.

Cela conserve la traçabilité sans multiplier les fichiers.

---

## 11. Décision méthodologique

Décision retenue :

- [x] Conserver les micro-cycles pour les sujets instables ou structurants
- [x] Utiliser Fast Delivery pour les incréments clairs
- [x] Utiliser Batch Delivery pour les lots cohérents à faible risque
- [x] Utiliser le post-merge léger pour éviter les summaries séparés inutiles
- [x] Appliquer la réflexion d'optimisation entre les étapes

---

## 12. Règle opérationnelle proposée

Avant de proposer un nouveau cycle SFIA, appliquer cette grille :

| Question | Si oui | Si non |
|----------|--------|--------|
| Le sujet est-il risqué ou flou ? | Micro-cycle contrôlé | Fast Delivery possible |
| L'incrément est-il autonome ? | Fast Delivery | Regroupement possible |
| Plusieurs incréments sont-ils cohérents et faibles en risque ? | Batch Delivery | Garder séparé |
| Le document produit apporte-t-il une vraie valeur ? | Le conserver | Le fusionner ou le supprimer |
| Le post-merge nécessite-t-il une trace séparée ? | Summary dédié | Section merge dans document unique |

---

## 13. Conclusion

Le niveau 3 valide que SFIA peut accélérer sans perdre sa maîtrise.

La méthode ne doit pas être jugée à la quantité de documents produits, mais à sa capacité à :

- sécuriser les décisions importantes ;
- livrer vite quand le cadre est stable ;
- éviter la documentation redondante ;
- conserver des preuves minimales ;
- ajuster son intensité au risque réel.

Le prochain travail peut reprendre en Batch Delivery si les prochains sujets restent cohérents et faibles en risque.

---

## 14. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #37 — https://github.com/mcleland147/sfia-workspace/pull/37 |
| Source | `method/delivery-acceleration-level-3-rex` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `985fa03` |
| Main synchronisée | OK |
| Modification applicative | Non |
| Publication Notion | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le REX Delivery Acceleration Level 3 est intégré dans `main`.

La méthode SFIA dispose désormais d'une règle formalisée pour choisir entre :

- micro-cycles contrôlés ;
- Fast Delivery par incrément ;
- Batch Delivery par lot cohérent ;
- post-merge léger.

Aucun document de merge séparé n'a été créé afin de respecter le principe de capitalisation compacte.
