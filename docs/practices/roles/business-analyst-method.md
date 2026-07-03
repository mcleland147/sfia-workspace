# Business Analyst — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

Le Business Analyst transforme un besoin métier en cadrage structuré et exploitable : parcours, objets, règles de gestion, questions ouvertes et critères de validation. Il garantit que le projet part d'un socle métier clair avant toute solution technique, design ou delivery.

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Forte** — formalisation du besoin, contexte, irritants |
| **Cadrage** | **Forte** — parcours, objets, règles, questions ouvertes |
| **Arbitrages** | **Forte** — arbitrages métier, canal, signature, KPI |
| **Conception** | **Moyenne** — validation cohérence métier / fonctionnel |
| **Architecture** | **Faible** — contribution sur règles impactées, pas d'architecture |
| **Delivery** | **Faible** — clarification règles, critères d'acceptation |
| **QA / Recette** | **Moyenne** — lien règles → critères testables |
| **REX** | **Moyenne** — capitalisation parcours et règles |

---

## 3. Valeur projet attendue

- Formalisation du besoin et du périmètre métier
- Parcours cible documenté de bout en bout
- Objets métier et règles de gestion identifiés
- Questions ouvertes rattachées à des arbitrages
- Réduction des ambiguïtés avant conception et delivery
- Base pour critères d'acceptation futurs

---

## 4. Valeur SFIA attendue

- Templates : Business Framing, Business Rules Matrix
- Checklists : questions ouvertes, cohérence parcours ↔ règles
- Prompts : cadrage métier, revue cohérence
- Standards : cadrage sans solution, lien RG → critères
- Postures : clarifier sans sur-spécifier
- Erreurs à éviter documentées par phase

---

## 5. Questions clés à poser

1. Quel est le parcours métier cible de bout en bout ?
2. Quels irritants prioritaires doivent disparaître au MVP ?
3. Quelles règles de gestion s'appliquent à chaque étape ?
4. Quels objets métier sont indispensables au cycle ?
5. Quelles questions restent ouvertes et vers quel arbitrage ?
6. Quels cas métier obligatoires couvrir (happy path et variantes) ?
7. Comment une règle métier devient-elle un critère d'acceptation ?
8. Quels acteurs interviennent à chaque étape ?
9. Quelles données sont créées, modifiées ou consultées par étape ?
10. Quels points de vigilance métier existent à chaque transition ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Document de cadrage métier | Rédaction ou co-rédaction du socle métier | Template Business Framing |
| Revue de cohérence cadrage | Vérification parcours ↔ règles ↔ questions | Template Framing Review |
| Matrice règles de gestion | Identification et numérotation RG-* | Template Business Rules Matrix |
| Questions ouvertes | Regroupement thématique, lien arbitrages | Checklist questions ouvertes |
| Cas métier obligatoires | Liste des scénarios à couvrir | Template cas métier |
| Contributions arbitrages | Recommandations métier sur canaux, signature, KPI | Prompt arbitrage métier |

---

## 7. Décisions / validations associées

- Canal prioritaire de création des demandes (co-porté Product Owner)
- Signature obligatoire ou optionnelle
- Indicateurs minimum pour pilotage métier
- Validation métier fictive ou réelle du cadrage
- Traçabilité questions ouvertes → arbitrages → règles

---

## 8. Savoir-faire à capitaliser

- Formalisation parcours avec acteurs, entrées, sorties, vigilances
- Matrice questions ouvertes → arbitrages → règles RG-*
- Grille objets métier ↔ parcours ↔ écrans candidats
- Méthode de traduction règle métier → critère d'acceptation futur
- Revue de cohérence inter-sections du cadrage

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Clarifier sans sur-spécifier ; reformuler le besoin sans imposer de solution ; garder le besoin métier avant la solution.

**Manière de challenger**  
Questionner les ambiguïtés, les règles implicites et les cas non couverts — sans basculer en spécifications techniques ou en maquettes.

**Manière d'éviter les dérives**  
Refuser le backlog, les user stories et l'architecture au stade cadrage ; maintenir le périmètre MVP comme objet d'arbitrage, pas comme fait accompli.

**Rapport à la valeur projet**  
Produire un cadrage métier actionnable : parcours, règles, objets, questions — suffisant pour arbitrer et concevoir.

**Rapport à la capitalisation SFIA**  
À chaque livrable, identifier ce qui devient template, checklist ou prompt réutilisable sur d'autres projets.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template Business Framing | Template | Haute | Structure document cadrage métier |
| Template Business Rules Matrix | Template | Haute | Matrice RG-* par parcours |
| Checklist questions ouvertes | Checklist | Haute | Vérifier couverture et lien arbitrages |
| Prompt cadrage métier | Prompt | Moyenne | Génération ou enrichissement cadrage |
| Standard cadrage sans solution | Standard | Haute | Posture BA — pas de solution imposée |
| Prompt règles → critères d'acceptation | Prompt | Moyenne | Phase QA / recette |

---

## 11. Erreurs à éviter

- Produire des user stories ou un backlog pendant le cadrage
- Confondre besoin métier et choix technique
- Laisser des questions orphelines sans lien vers un arbitrage
- Sur-spécifier des écrans ou comportements avant arbitrage MVP
- Oublier la double valeur projet / SFIA à chaque livrable
- Numéroter des règles sans les relier au parcours

---

## 12. Critères de qualité du rôle

- [ ] le rôle intervient au bon moment ;
- [ ] la valeur projet est explicite ;
- [ ] la valeur SFIA est explicite ;
- [ ] les décisions sont traçables ;
- [ ] les livrables sont reliés à une capitalisation ;
- [ ] le savoir-faire est documenté ;
- [ ] le savoir-être est documenté ;
- [ ] les erreurs à éviter sont explicites ;
- [ ] les éléments réutilisables sont identifiés ;
- [ ] le rôle est enrichi au fil des phases.

---

## 13. Origine / apprentissage Interv360

Interv360 a permis de valider une méthode BA sur un parcours SAV 9 étapes, 56 règles RG-*, 24 questions ouvertes et 9 cas métier obligatoires. Le lien parcours ↔ règles ↔ arbitrages MVP (canal CRM, signature optionnelle, KPI) constitue la matière première la plus riche extraite du pilote. La revue maquette Figma V1 complète ce socle — voir §14.

---

## 14. Apprentissages issus de la production et revue maquette Figma V1

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec maquette V1 à analyser sans anticiper le delivery.*

### Apprentissages clés

- **Analyser une maquette sans transformer immédiatement les écrans en backlog** — observation métier, pas user stories prématurées.
- **Traduire la maquette en compréhension métier** — termes, statuts, SLA, prochaines actions, rôles visibles.
- **Cohérence statuts, SLA, prochaines actions** — alignement avec règles et parcours documentés.
- **Détecter workflows implicites** — « Clôturer plus tard », brouillon CR, onglets riches suggérant règles non arbitrées.
- **Identifier zones ambiguës et libellés à clarifier** — matière pour phase ultérieure, pas spécification immédiate.
- **Distinguer observation UX et spécification fonctionnelle** — polish visuel ≠ règle métier nouvelle.

### Savoir-faire renforcés

- Fiche lecture métier maquette V1 par écran — statuts, actions, ambiguïtés, écarts règles.
- Inventaire workflows implicites suggérés par la maquette.
- Préparation scénarios futurs (happy path, non happy path) **sans** rédiger user stories.
- Lien maquette → questions ouvertes BA → arbitrage PO avant delivery.

### Savoir-être / posture

- **Observer sans spécifier trop tôt** — la maquette n'est pas le backlog.
- **Signaler l'ambiguïté** — pas la résoudre seul en inventant des règles.
- **Préparer la matière** — pour phase delivery quand jalon validé.
- **Collaborer avec PO** — dérive fonctionnelle et libellés prometteurs.

### Garde-fous à réutiliser

- Maquette analysée **≠** user stories produites **≠** backlog ouvert.
- Workflows visibles non arbitrés **signalés**, pas validés par défaut.
- Distinction commentaire UX (polish) vs écart métier (règle manquante).
- Retours BA intégrés au compte rendu revue, pas en stories parallèles.

### Questions réflexes à poser

- Les **termes métier** sur la maquette sont-ils cohérents avec le cadrage ?
- Un **statut ou SLA** suggère-t-il une règle non documentée ?
- Un **workflow implicite** apparaît-il (brouillon, clôture différée) ?
- Cette observation est-elle **UX** ou **spécification** à arbitrer ?
- Quelles **zones ambiguës** reporter au PO avant delivery ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Fiche lecture métier maquette V1 | Template |
| Inventaire workflows implicites maquette | Checklist |
| Grille observation UX vs spécification | Template |

---

## 15. Évolution continue

Ce fichier est **évolutif**. La revue maquette Figma V1 Interv360 a enrichi ce template (§14). Delivery, QA, recette et REX continueront l'enrichissement. Toute contribution BA (règles détaillées, critères d'acceptation, REX) doit mettre à jour ce template sans le figer.

---

*Template SFIA — Role Method — Business Analyst*
