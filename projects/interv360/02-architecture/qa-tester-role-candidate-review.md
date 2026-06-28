# Interv360 — Revue manuelle rôle candidat QA / Testeur

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Chantier** : QA / Testeur  
**Objet revu** : `qa-tester-role-candidate-framing.md`  
**Statut** : Reviewed — Candidate mature  
**Type** : Revue manuelle rôle candidat  
**Décision** : Validé comme candidat mature — méthode officielle autorisée ensuite, sans ouverture delivery  
**Objet** : évaluer la maturité du rôle candidat QA / Testeur avant création éventuelle d'une méthode officielle

---

## 1. Objectif de la revue

Cette revue vise à déterminer si le rôle **QA / Testeur candidat** est **suffisamment mature** pour autoriser la **création ultérieure** d'une méthode officielle SFIA (`docs/methods/roles/qa-tester-method.md`).

- Cette revue **ne crée pas encore** la méthode officielle ;
- elle **ne crée pas** `docs/methods/roles/qa-tester-method.md` ;
- elle **ne produit pas** de scénarios de tests projet ;
- elle **ne produit pas** de backlog ;
- elle **ne produit pas** de user stories ;
- elle **ne produit pas** de code ;
- elle **ne déclenche pas** le delivery.

Elle **acte** la maturité du rôle candidat et **autorise** la prochaine étape méthodologique — création de la méthode officielle dans une **tâche dédiée**, distincte et sans ouverture delivery.

---

## 2. Documents revus

| Document | Rôle dans la revue |
|----------|-------------------|
| `qa-tester-role-research-and-benchmark.md` | Benchmark pratiques QA reconnues ; définitions ; bonnes pratiques ; garde-fous SFIA |
| `qa-tester-role-candidate-framing.md` | **Objet principal** — définition provisoire, périmètre, savoir-faire/être, décision candidat |
| `docs/standards/ux-ui-v1-governance-standard.md` | Cohérence revue transverse ; QA cité ; parcours testables |
| `prompts/prompt-catalog.md` | PROMPT-UXUI-006, 008 ; famille QA / Tests planifiée |
| `prompt-catalog-ux-ui-v1-validation.md` | Autorisation chantier QA ; garde-fous catalogue |
| `figma-review-session-minutes.md` | Mobilisation QA candidat en revue simulée Figma V1 |
| `figma-v1-closure-summary.md` | Clôture UX/UI ; delivery bloqué ; suite QA méthodologique |
| `role-methods-enrichment-after-figma-v1.md` | QA identifié ; testabilité ; happy / non happy path |

---

## 3. Rappel du statut candidat

| Élément | Statut |
|---------|--------|
| Apparition du rôle | Pendant le **cycle UX/UI V1** Interv360 (revue → clôture) |
| Mobilisation | **Candidat** en revue simulée multi-rôles (`figma-review-session-minutes.md`) |
| Documentation benchmark | **Réalisée** (`qa-tester-role-research-and-benchmark.md`) |
| Cadrage méthodologique | **Réalisé** (`qa-tester-role-candidate-framing.md`) |
| Méthode officielle | **Absente** — `qa-tester-method.md` non créé |
| Delivery | **Toujours bloqué** (`figma-v1-closure-summary.md`) |
| Backlog, user stories, code | **Non produits** par le chantier QA |

Le rôle apporte une lecture **testabilité, risque, parcours, anomalies et états visibles** — sans se confondre avec recette projet ou delivery.

---

## 4. Critères de revue

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Besoin identifié | **Fort** | Émergence nette cycle UX/UI V1 ; revue simulée ; architecture P1/P2 |
| Recherche méthodologique réalisée | **Fort** | Benchmark ISTQB, Atlassian, Google, Fowler, Ministry of Testing |
| Définition provisoire claire | **Fort** | Formulation explicite dans le cadrage candidat |
| Périmètre du rôle | **Fort** | Tableau domaines / contributions documenté |
| Hors périmètre | **Fort** | Scénarios, recette, backlog, code, delivery exclus |
| Savoir-faire | **Fort** | Liste structurée analyse / conception / gestion |
| Savoir-être | **Fort** | 11 qualités pressenties ; alignées recherche |
| Interactions avec autres rôles | **Fort** | Tableau PO, BA, UX, RSSI, Architecte, Chef de projet, Dev futur |
| Garde-fous | **Fort** | Checklist 13 points ; prolonge clôture Figma V1 |
| Risques à éviter | **Fort** | 8 risques listés dans le cadrage |
| Compatibilité standard UX/UI V1 | **Fort** | Rôle cité standard ; revue transverse ; pas de conflit |
| Absence de confusion avec delivery | **Fort** | Répété recherche, cadrage, clôture Figma V1 |
| Maturité suffisante pour méthode officielle | **Fort** | Critères §14 cadrage largement satisfaits ; revue manuelle acte la décision |

**Synthèse** : tous les critères évalués **Fort** ou **Moyen** — aucun critère **À renforcer** bloquant.

---

## 5. Points forts du rôle candidat

- **Rôle utile dès les phases amont** — shift-left, revues UX/UI, testabilité besoins et maquettes.
- **Bonne distinction QA / recette / delivery** — garde-fous explicites et répétés.
- **Contribution à la testabilité** — cœur du rôle candidat, validé Figma V1.
- **Lecture happy path / non happy path** — revue simulée ; signature optionnelle.
- **Prise en compte des états visibles** — vide, chargement, erreur.
- **Prise en compte des anomalies métier** — ADR P1 ; pas de logs techniques.
- **Articulation claire** avec PO, BA, UX, RSSI, Architecte et Chef de projet — sans substitution.
- **Garde-fous solides** — non-delivery, non-backlog, non-code.
- **Benchmark externe réalisé** — sources reconnues synthétisées.
- **Cohérence UX/UI V1 Governance** — rôle complémentaire en revue transverse.

---

## 6. Points à ajuster lors de la méthode officielle

| Priorité | Ajustement | Motif |
|----------|------------|-------|
| **P1** | Transformer les savoir-faire pressentis en section méthode officielle | Passage candidat → méthode structurée |
| **P1** | Stabiliser les garde-fous | Référence unique réutilisable tous projets |
| **P1** | Clarifier la différence QA / recette / UAT | Éviter confusion rôle vs exécution |
| **P1** | Clarifier le lien avec delivery futur | Conditions d'ouverture jalon dédié |
| **P2** | Prévoir une section sur les livrables QA possibles | Sans produire livrables Interv360 |
| **P2** | Prévoir une section sur les prompts QA futurs | Lien `prompts/qa/` planifié catalogue |
| **P2** | Préciser le lien avec critères d'acceptation | Contribution vs formalisation PO/BA |
| **P3** | Ajouter exemples Interv360 non normatifs | Illustration sans normer le cas pilote |

---

## 7. Risques maîtrisés

- [x] pas de méthode officielle créée trop tôt — revue manuelle précède création ;
- [x] pas de scénarios de tests produits ;
- [x] pas de backlog QA créé ;
- [x] pas de user stories créées ;
- [x] pas de code produit ;
- [x] pas de delivery ouvert ;
- [x] distinction testabilité / recette officielle maintenue ;
- [x] distinction QA / PO / BA / RSSI / Architecte maintenue.

---

## 8. Décision de revue

**Décision** : rôle **QA / Testeur validé comme candidat mature** — **création de la méthode officielle autorisée ensuite**, **sans ouverture delivery**.

### Justification

Le rôle dispose désormais :

- d'une **recherche méthodologique** (`qa-tester-role-research-and-benchmark.md`) ;
- d'un **cadrage candidat** (`qa-tester-role-candidate-framing.md`) ;
- d'un **périmètre clair** et hors périmètre documentés ;
- de **savoir-faire et savoir-être** pressentis ;
- de **garde-fous** documentés ;
- d'**interactions clarifiées** avec les autres rôles ;
- d'une **contribution identifiée** dans le cycle UX/UI V1 (revue simulée, standard, prompts).

La présente **revue manuelle** complète la checklist du cadrage §14 et acte la **décision explicite de maturité**.

---

## 9. Conditions avant création de la méthode officielle

- [x] recherche QA réalisée ;
- [x] rôle candidat cadré ;
- [x] revue manuelle réalisée (présent document) ;
- [x] décision explicite de maturité ;
- [ ] créer `docs/methods/roles/qa-tester-method.md` dans une **tâche dédiée** ;
- [ ] ne pas produire de scénarios de tests projet dans la méthode ;
- [ ] maintenir delivery bloqué ;
- [ ] prévoir une capitalisation future dans le catalogue prompts QA.

---

## 10. Ce que la prochaine étape pourra faire

- créer la **méthode officielle** QA / Testeur ;
- structurer **savoir-faire** ;
- structurer **savoir-être** ;
- structurer **garde-fous** ;
- structurer **questions réflexes** ;
- définir **interactions** avec autres rôles ;
- définir **livrables possibles** (types, pas contenu Interv360) ;
- définir **limites du rôle**.

---

## 11. Ce que la prochaine étape ne devra pas faire

- produire des **scénarios de tests Interv360** ;
- produire des **cas de tests détaillés** ;
- produire une **stratégie de recette complète** ;
- produire un **backlog QA** ;
- produire des **user stories** ;
- produire du **code** ;
- ouvrir le **delivery**.

---

## 12. Conclusion

La **revue manuelle** confirme que le rôle **QA / Testeur** est **suffisamment mature** pour être transformé ultérieurement en **méthode officielle SFIA**.

La décision retenue est : **validé comme candidat mature — méthode officielle autorisée ensuite, sans ouverture delivery**.

La prochaine étape pourra créer `docs/methods/roles/qa-tester-method.md` dans une **tâche dédiée**, en conservant les **garde-fous de non-delivery**.

---

*Revue manuelle rôle candidat QA / Testeur — gouvernance SFIA — sans méthode officielle ni delivery.*
