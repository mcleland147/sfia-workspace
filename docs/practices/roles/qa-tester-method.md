# Méthode rôle — QA / Testeur

**Rôle** : QA / Testeur  
**Statut** : Official role method  
**Source de création** : Interv360 — cycle UX/UI V1 + recherche QA + revue candidat mature  
**Objet** : définir la contribution du rôle QA / Testeur dans SFIA  
**Garde-fou principal** : contribuer à la qualité et à la testabilité sans déclencher seul delivery, backlog, user stories ou code

**Origine documentaire** : `qa-tester-role-research-and-benchmark.md` ; `qa-tester-role-candidate-framing.md` ; `qa-tester-role-candidate-review.md`  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Finalité du rôle

Le **QA / Testeur** contribue à la **qualité**, à la **testabilité**, à la **maîtrise des risques** et à la **traçabilité** des livrables projet.

Il intervient **dès les phases amont** pour questionner les besoins, les maquettes, les parcours, les anomalies et les critères futurs — **sans déclencher à lui seul** delivery, backlog, user stories ou code.

Le rôle ne se réduit pas à l'exécution de tests : il apporte une **lecture qualité transverse** complémentaire aux rôles PO, BA, UX/UI, RSSI, Architecte, Chef de projet et Développeur.

---

## 2. Positionnement dans SFIA

| Dimension | Positionnement |
|-----------|----------------|
| **Nature** | Rôle **transverse** |
| **Mobilisation** | Cadrage, conception, UX/UI, revues transverses, **préparation** delivery |
| **Complémentarité** | PO, BA, UX/UI, RSSI, Architecte, Chef de projet, Développeur |
| **Distinct de** | Recette officielle ; automatisation seule ; delivery |
| **Standard lié** | UX/UI V1 Governance — contribution en revue transverse |
| **Catalogue prompts** | Famille QA / Tests planifiée (`prompts/qa/`) — à enrichir ultérieurement |

Le QA / Testeur **alerte et structure** ; il **n'arbitre pas** seul les jalons ni le périmètre produit.

---

## 3. Responsabilités principales

**Analyse et testabilité**

- analyser la testabilité des besoins ;
- analyser la testabilité des maquettes ;
- identifier happy path / non happy path ;
- identifier états vides, chargement, erreur ;
- questionner les anomalies métier.

**Conception et préparation (sans sur-production)**

- contribuer à la formulation de **critères futurs** ;
- préparer des **orientations de test** sans produire prématurément les tests projet ;
- prioriser par **risque** ;
- identifier ce qui pourrait être **automatisable plus tard**.

**Collaboration et traçabilité**

- contribuer aux **revues transverses** ;
- documenter les **risques qualité** ;
- contribuer à la traçabilité **besoin / critère / test futur / anomalie**.

---

## 4. Ce que le rôle ne fait pas seul

- décider du **delivery** ;
- remplacer le **Product Owner** ;
- remplacer le **Business Analyst** ;
- remplacer le **RSSI** ;
- remplacer l'**Architecte** ;
- transformer une **maquette en backlog** ;
- produire des **user stories** sans jalon dédié ;
- produire du **code** ;
- valider une **conformité SSI ou juridique complète** ;
- **automatiser** sans stratégie ;
- produire une **stratégie de recette complète** sans jalon dédié.

---

## 5. Savoir-faire

### 5.1 Analyse de testabilité

Évaluer si un livrable peut être **vérifié efficacement** :

| Objet | Questions types |
|-------|-----------------|
| **Besoins** | Critères vérifiables ? Ambiguïtés ? États et rôles explicites ? |
| **Maquettes** | Parcours lisibles ? Actions identifiables ? |
| **Parcours** | Happy path complet ? Chemins alternatifs visibles ? |
| **États visibles** | Vide, chargement, erreur, succès — prévus ou absents ? |
| **Anomalies** | Messages métier, reprise, impact utilisateur ? |

### 5.2 Conception de test future

Préparer **sans exécuter** tant que le jalon ne l'autorise pas :

- orientation **scénarios futurs** (macro-parcours) ;
- orientation **cas futurs** (micro-vérifications) ;
- contribution **critères d'acceptation futurs** — formulation testable ;
- **aucune production projet immédiate** sans jalon recette / delivery dédié.

### 5.3 Risk-based testing

Prioriser selon :

- **impact** métier ou utilisateur ;
- **probabilité** de défaillance ;
- **criticité** fonctionnelle ;
- **fréquence** d'usage.

Concentrer l'effort sur ce qui est **critique, fréquent, coûteux ou risqué** (ISTQB CTFL v4).

### 5.4 Shift-left testing

Contribuer **tôt** :

- cadrage et exigences ;
- conception et architecture (testabilité, observabilité métier) ;
- UX/UI et maquettes ;
- revues transverses.

Objectif : réduire ambiguïtés et coût des défauts tardifs — sans confondre avec recette.

### 5.5 Test exploratoire

Pratique complémentaire aux tests scriptés :

- **intention** et **charter** (mission de session) ;
- **timebox** (ex. 30–90 min) ;
- **documentation légère** des découvertes ;
- apprentissage, conception et exécution **simultanés** (Ministry of Testing, Atlassian).

### 5.6 Traçabilité

Maintenir le lien :

```
besoin → critère → test futur → anomalie → décision
```

Utile pour revues, gouvernance Git / Notion et amélioration continue — sans sur-documenter trop tôt.

### 5.7 Automatisation potentielle

- identifier ce qui est **stable, répétable, à forte valeur de régression** ;
- distinguer **unit / integration / E2E** (pyramide de tests) ;
- **ne pas produire** le code de test sans stratégie et jalon validés ;
- éviter la **surcharge E2E** (Fowler, Google SWE Book).

---

## 6. Savoir-être

| Qualité | Application |
|---------|-------------|
| **Rigueur** | Méthode, reproductibilité, documentation proportionnée |
| **Esprit critique constructif** | Chercher les manques sans démotiver |
| **Curiosité** | Explorer au-delà du chemin nominal |
| **Sens du risque** | Prioriser l'essentiel |
| **Pédagogie** | Expliquer testabilité sans jargon excessif |
| **Communication claire** | Anomalies et risques compréhensibles |
| **Neutralité** | Qualité produit, pas victoire d'un rôle |
| **Attention aux détails** | États limites, wording, cohérence |
| **Capacité à challenger sans bloquer** | Alerte sans paralysie |
| **Pragmatisme** | Adapter l'effort au jalon |
| **Respect du niveau de maturité** | V1 présentable ≠ recette finale |

---

## 7. Questions réflexes

| Question réflexe | Finalité |
|------------------|----------|
| Le parcours principal est-il compréhensible ? | Valider happy path |
| Les chemins alternatifs sont-ils visibles ? | Non happy path, options |
| Que se passe-t-il en cas d'erreur ? | Messages, reprise |
| Les états vides, chargement, erreur sont-ils prévus ? | Couverture états limites |
| Les messages sont-ils compréhensibles par un utilisateur métier ? | Wording, pas de jargon technique |
| Les actions utilisateur sont-elles testables ? | CTA, enchaînements, rôles |
| Les anomalies sont-elles exploitables ? | Action opérateur, pas log brut |
| Les preuves attendues sont-elles claires ? | Signature, CR, pièces |
| Les hypothèses sont-elles explicites ? | ADR, exclusions, MVP |
| Les critères futurs pourraient-ils être formulés sans ambiguïté ? | Préparation acceptance |
| La maquette permet-elle de préparer des tests sans les produire maintenant ? | Testabilité sans sur-production |
| Le risque est-il suffisamment maîtrisé pour passer au jalon suivant ? | Contribution gouvernance — sans décision seule |

---

## 8. Interactions avec les autres rôles

| Rôle | Interaction QA / Testeur |
|------|--------------------------|
| **Product Owner** | Alerte testabilité et risques ; ne décide pas priorisation ni delivery |
| **Business Analyst** | Complète exigences par lecture parcours ; ne formalise pas le métier seul |
| **UX/UI Designer** | Lit testabilité visuelle ; ne refait pas le design |
| **RSSI** | Distingue métier / technique ; ne valide pas SSI seul |
| **Architecte** | Vérifie cohérence testabilité architecture ; ne tranche pas ADR seul |
| **Chef de projet** | Respecte jalons et blocages delivery ; pas de feu vert implicite |
| **Développeur** | Identifie automatisable ; Dev implémente ; QA ne code pas les tests sans jalon |

---

## 9. Livrables possibles

Types de livrables — **produits uniquement si le jalon projet les autorise**.

| Livrable | Usage | Moment |
|----------|-------|--------|
| **Note de testabilité** | Synthèse testabilité besoin / maquette | Cadrage, UX/UI, revue |
| **Checklist QA de revue** | Support revue transverse | Revue UX/UI V1, architecture |
| **Grille happy path / non happy path** | Cartographie parcours | Conception, revue |
| **Matrice risques qualité** | Priorisation zones à examiner | Cadrage, préparation test |
| **Stratégie de test légère** | Orientation niveaux et priorités | Pré-delivery — jalon dédié |
| **Plan de test** | Périmètre, approche, ressources | Jalon recette |
| **Cas de test** | Vérifications détaillées | Jalon recette / delivery |
| **Rapport d'anomalie** | Documentation défaut reproductible | Exécution test |
| **Synthèse de recette** | Bilan campagne | Fin recette |
| **Recommandation automatisation** | Orientation pyramide, périmètre auto | Post-recette ou delivery |

---

## 10. Garde-fous

- [ ] ne pas déclencher delivery ;
- [ ] ne pas transformer maquette en backlog ;
- [ ] ne pas produire user stories sans jalon dédié ;
- [ ] ne pas produire code ;
- [ ] ne pas produire scénarios détaillés sans jalon dédié ;
- [ ] ne pas confondre testabilité et recette officielle ;
- [ ] ne pas valider seul conformité SSI ;
- [ ] ne pas remplacer Product Owner ;
- [ ] ne pas remplacer Business Analyst ;
- [ ] ne pas remplacer RSSI ;
- [ ] ne pas remplacer Architecte ;
- [ ] ne pas automatiser sans stratégie ;
- [ ] ne pas imposer des tests E2E partout ;
- [ ] ne pas surdocumenter trop tôt.

---

## 11. Usage dans une revue UX/UI V1

Conformément au **standard UX/UI V1 Governance** :

| Activité | Contribution QA |
|----------|-----------------|
| Analyse des parcours | Happy / non happy path sur captures |
| États visibles | Vide, chargement, erreur pressentis |
| Chemins alternatifs | Options (ex. signature optionnelle) |
| Erreurs métier | Wording, reprise, pas de log technique |
| Testabilité des actions | CTA, rôles, enchaînements |
| Surproduction | **Éviter** — questions et grille, pas recette |
| Standard | Respect séquence et garde-fous UX/UI V1 |

**Le QA / Testeur ne transforme pas la maquette en recette.**

---

## 12. Usage en phase delivery

*Section descriptive — **ne déclenche pas** delivery Interv360 ni aucun projet sans jalon explicite.*

Lorsqu'un jalon **delivery / recette** est **ouvert et autorisé**, le QA / Testeur peut contribuer à :

| Activité | Contribution |
|----------|--------------|
| Stratégie de test | Niveaux, priorités, pyramide |
| Critères d'acceptation | Formulation testable avec PO / BA |
| Préparation cas de test | Détail vérifications |
| Exécution tests | Manuel, exploratoire, scripté |
| Suivi anomalies | Documentation, priorisation |
| Non-régression | Identification périmètre critique |
| Automatisation | Si stratégie validée — en lien Dev |

**Interv360** : delivery **toujours bloqué** (`figma-v1-closure-summary.md`) — cette section ne s'applique pas au projet pilote à ce stade.

---

## 13. Bonnes pratiques de référence

Synthèse réutilisable — sources officielles ou reconnues :

| Source | Apports clés |
|--------|--------------|
| **ISTQB CTFL v4** | Objectifs du test ; 7 principes ; processus (planning → completion) ; risk-based testing ; traçabilité |
| **Atlassian — Agile Testing** | Qualité continue ; shift-left ; complémentarité auto / exploratoire ; équipe |
| **Google SWE Book (ch. 11, 14)** | Tailles small/medium/large ; portée ; ~80/15/5 ; larger tests maîtrisés |
| **Martin Fowler — Test Pyramid** | Peu d'E2E ; base unit/integration ; tests UI coûteux et fragiles |
| **Ministry of Testing** | Exploratory testing ; charter ; timebox ; mindset et apprentissage |

Ne pas traiter ces références comme norme SFIA obligatoire — **heuristiques** adaptables au contexte projet.

---

## 14. Exemple non normatif — Interv360

| Élément | Illustration |
|---------|--------------|
| Apparition du rôle | Revue simulée Figma V1 — candidat jusqu'à revue manuelle |
| Testabilité | Happy / non happy path ; 8 écrans MVP |
| Signature optionnelle | Deux chemins testables — non-blocage |
| Anomalies métier | Suivi erreurs intégration — reprise manuelle (ADR P1) |
| Exclusions | Pas d'IA, portail, logs techniques |
| Parcours méthodologique | Recherche → cadrage → revue mature → **présente méthode officielle** |
| Delivery | **Non ouvert** |

**Cet exemple n'est pas normatif** et **ne constitue pas** un scénario de test.

---

## 15. Critères de maturité du rôle

- [x] recherche QA réalisée ;
- [x] rôle observé dans cycle UX/UI V1 ;
- [x] cadrage candidat réalisé ;
- [x] revue manuelle réalisée ;
- [x] décision explicite de méthode officielle ;
- [x] garde-fous documentés (présente méthode) ;
- [x] interactions clarifiées ;
- [ ] prompts QA dédiés à créer ultérieurement ;
- [ ] usage sur un autre projet à tester ultérieurement.

---

## 16. Évolution continue

La méthode QA / Testeur pourra évoluer avec :

- **retours projet** (pilotes, recettes réelles) ;
- **tests exploratoires** capitalisés ;
- **automatisation** future et retours CI/CD ;
- **prompts QA** (`prompts/qa/`, catalogue) ;
- **REX** post-recette ;
- **usage sur d'autres projets** pour généraliser hors Interv360.

Enrichissements type **§14** (apprentissages projet pilote) pourront être ajoutés sans modifier le cœur méthodologique.

---

## 17. Conclusion

La méthode officielle **QA / Testeur** définit un rôle **transverse** de contribution à la **qualité**, la **testabilité** et la **maîtrise des risques** dans SFIA.

Elle **formalise** le rôle validé comme candidat mature — **sans ouvrir delivery** et **sans produire** de scénarios de tests projet.

Elle sert de base pour de **futures revues**, **prompts QA** et éventuels **jalons de test ou recette** — lorsque explicitement autorisés.

---

*Méthode rôle QA / Testeur — SFIA — Official role method — sans delivery.*
