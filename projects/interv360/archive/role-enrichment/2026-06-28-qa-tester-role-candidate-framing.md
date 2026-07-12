# Interv360 — Cadrage rôle candidat QA / Testeur

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Chantier** : QA / Testeur  
**Statut** : Candidate role framing  
**Type** : Cadrage méthodologique rôle candidat  
**Source principale** : `qa-tester-role-research-and-benchmark.md`  
**Objet** : cadrer le rôle candidat QA / Testeur avant toute création de méthode officielle

---

## 1. Objectif

Ce document **cadre le rôle QA / Testeur comme rôle candidat SFIA**, sur la base de la recherche méthodologique réalisée et du cycle UX/UI V1 Interv360.

- Il **ne crée pas encore** une méthode officielle ;
- il **ne crée pas** de fichier dans `docs/methods/roles/` ;
- il **ne produit pas** de scénarios de tests projet ;
- il **ne produit pas** de backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de code ;
- il **ne déclenche pas** le delivery.

Il ouvre le **chantier méthodologique QA / Testeur** au niveau du **cadrage du rôle candidat** uniquement.

---

## 2. Origine du besoin

Le rôle QA / Testeur est apparu **progressivement** pendant le cycle UX/UI V1 Interv360 :

| Étape | Livrable / événement | Apport pour le rôle QA |
|-------|----------------------|------------------------|
| Revue premier jet | `figma-first-draft-review.md` | Lecture qualité V1 ; parcours, états, garde-fous visuels |
| Préparation revue transverse | `figma-review-session-preparation.md` | Questions par rôle ; checklist transverse |
| Revue simulée multi-rôles | `figma-review-session-minutes.md` | QA / Testeur mobilisé comme **candidat** — testabilité, happy / non happy path |
| Clôture Figma V1 | `2026-06-28-figma-v1-closure-summary.md` | Jalon UX/UI clôturé ; delivery bloqué ; besoin QA confirmé pour la suite |
| Standard UX/UI V1 Governance | `docs/standards/ux-ui-v1-governance-standard.md` | Rôle QA / Testeur cité dans les revues transverses |
| Catalogue prompts UX/UI V1 | `prompts/prompt-catalog.md` §13 | PROMPT-UXUI-006, 008 — QA candidat en revue |
| Validation catalogue | `prompt-catalog-ux-ui-v1-validation.md` | Autorisation du chantier QA / Testeur (étape dédiée) |
| Publication Notion clôture | `notion-sync-figma-v1-cmp-publication-log.md` | Gouvernance synchronisée ; prochaine étape QA méthodologique |
| Recherche QA / Testeur | `qa-tester-role-research-and-benchmark.md` | Benchmark pratiques reconnues ; garde-fous SFIA |

Le rôle est apparu comme **nécessaire** pour traiter :

- la **testabilité** des livrables (besoins, maquettes) ;
- les **happy path / non happy path** ;
- les **états visibles** (vide, chargement, erreur) ;
- les **erreurs métier** et la reprise manuelle ;
- la **préparation future** des tests — sans les produire prématurément.

Les synthèses architecture P1/P2 (`architecture-p1-summary.md`, `architecture-p2-design-impact-summary.md`) mentionnent déjà des **impacts QA** (distinction message métier / log technique, scénarios futurs) — sans ouvrir la recette projet.

---

## 3. Synthèse de la recherche QA

Enseignements principaux de `qa-tester-role-research-and-benchmark.md` :

| Enseignement | Lecture pour SFIA |
|--------------|-------------------|
| **QA ≠ simple exécution de tests** | Rôle de contribution qualité, pas seulement exécution recette |
| **QA = qualité, testabilité, risques** | Lecture transverse sur les livrables projet |
| **Intervention amont** | Cadrage, conception, UX/UI, revues — shift-left |
| **Shift-left testing** | Tester tôt réduit coût et ambiguïté (ISTQB, Atlassian) |
| **Risk-based testing** | Prioriser zones critiques, fréquentes, coûteuses |
| **Fonctionnel / non fonctionnel** | Distinguer métier, perf, sécurité, utilisabilité |
| **Scripté / exploratoire** | Complémentarité — pas exclusivité |
| **Pyramide de tests** | Peu d’E2E ; base unit/integration ; vigilance anti-glace |
| **Traçabilité** | Relier besoins, critères, tests, anomalies, décisions |

Sources externes synthétisées : ISTQB CTFL v4, Atlassian Agile Testing, Google SWE Book, Martin Fowler Test Pyramid, Ministry of Testing.

---

## 4. Statut actuel du rôle

| Élément | Statut | Commentaire |
|---------|--------|-------------|
| Méthode officielle QA / Testeur | **Absente** | Pas de `docs/methods/roles/qa-tester-method.md` |
| Rôle cité dans le standard UX/UI V1 | **Oui** | Revue transverse ; parcours testables (`ux-ui-v1-governance-standard.md`) |
| Rôle cité dans les prompts UX/UI V1 | **Oui** | PROMPT-UXUI-006, 008 ; famille QA / Tests planifiée (`prompt-catalog.md`) |
| Rôle mobilisé en revue simulée | **Oui** | Candidat — `figma-review-session-minutes.md` |
| Enrichissement méthodes rôle existantes | **Partiel** | QA identifié dans `role-methods-enrichment-after-figma-v1.md` — sans méthode dédiée |
| Recherche QA / Testeur | **Réalisée** | `qa-tester-role-research-and-benchmark.md` |
| Fichier `qa-tester-method.md` | **Non créé** | Décision ultérieure explicite requise |
| Validation officielle du rôle | **Non** | Cadrage candidat en cours — présente note |
| Delivery / recette projet | **Bloqués** | `2026-06-28-figma-v1-closure-summary.md` |

---

## 5. Définition provisoire du rôle candidat

> **Le QA / Testeur candidat** est un rôle SFIA en cours de structuration, chargé d’apporter une **lecture qualité, testabilité, risque et parcours** sur les livrables projet, **sans déclencher à lui seul le delivery** ni produire prématurément des **scénarios de tests détaillés**.

Il contribue à **anticiper** ce qui sera testable, vérifiable et traçable — en complément des rôles PO, BA, UX/UI, RSSI, Architecte et Chef de projet.

---

## 6. Périmètre du rôle candidat

| Domaine | Contribution QA / Testeur |
|---------|---------------------------|
| Testabilité des besoins | Questions, ambiguïtés, critères futurs possibles |
| Testabilité des maquettes | Parcours, états, actions, messages lisibles |
| Happy path / non happy path | Chemins nominaux et dégradés identifiables |
| États vides / chargement / erreur | Couverture visuelle et fonctionnelle pressentie |
| Messages d’erreur métier | Compréhensibilité, actionnabilité, pas de log brut |
| Anomalies | Lecture exploitabilité future ; pas recette |
| Traçabilité | Lien besoin → critère → test futur → anomalie |
| Critères d’acceptation futurs | Contribution formulation testable — sans formalisation delivery |
| Préparation future des tests | Orientation stratégique légère — sans exécution |
| Analyse par risque | Priorisation des zones à examiner |
| Revues transverses | Apport questions testabilité en revue UX/UI V1 |

---

## 7. Hors périmètre immédiat

- rédaction de **scénarios de tests projet** ;
- rédaction de **cas de tests détaillés** ;
- **automatisation** de tests ;
- **stratégie de recette complète** ;
- **backlog QA** ;
- **user stories** ;
- **critères d’acceptation formels** (livraison delivery) ;
- **code de tests** ;
- **passage delivery** ;
- **validation SSI complète** ;
- **validation juridique complète**.

---

## 8. Savoir-faire pressentis

**Analyse**

- analyser la testabilité d’un besoin ;
- analyser la testabilité d’une maquette ;
- identifier chemins nominaux et dégradés ;
- repérer états manquants ;
- repérer erreurs non traitées ;
- formuler questions de testabilité ;
- prioriser par risque.

**Conception (sans exécution delivery)**

- contribuer à la définition de critères d’acceptation **futurs** ;
- préparer une orientation stratégie de test **sans l’exécuter** ;
- distinguer tests fonctionnels et non fonctionnels ;
- identifier ce qui pourrait être automatisable **plus tard**.

**Gestion et collaboration**

- documenter anomalies de manière exploitable (format, pas contenu projet) ;
- contribuer aux revues transverses ;
- maintenir traçabilité conceptuelle besoin / test futur.

---

## 9. Savoir-être pressentis

- rigueur ;
- esprit critique **constructif** ;
- curiosité ;
- sens du risque ;
- pédagogie ;
- communication claire ;
- neutralité ;
- attention aux détails ;
- capacité à challenger **sans bloquer** ;
- pragmatisme ;
- respect du **niveau de maturité** du projet (V1 présentable ≠ recette finale).

---

## 10. Questions réflexes du QA / Testeur candidat

| Question réflexe | Finalité |
|------------------|----------|
| Le parcours principal est-il compréhensible ? | Valider happy path lisible |
| Les chemins alternatifs sont-ils visibles ? | Non happy path, options (ex. sans signature) |
| Que se passe-t-il en cas d’erreur ? | Messages, reprise, non-blocage |
| Les états vides, chargement, erreur sont-ils prévus ? | Couverture états limites |
| Les messages sont-ils compréhensibles par un utilisateur métier ? | Wording, pas de jargon technique |
| Les actions utilisateur sont-elles testables ? | CTA, enchaînements, rôles |
| Les anomalies sont-elles exploitables ? | Action opérateur, pas log brut |
| Les preuves attendues sont-elles claires ? | Signature, CR, pièces jointes |
| Les hypothèses sont-elles explicites ? | ADR, exclusions, MVP |
| Les critères futurs pourraient-ils être formulés sans ambiguïté ? | Préparation acceptance sans delivery |
| La maquette permet-elle de préparer des tests sans les produire maintenant ? | Testabilité sans sur-production |

---

## 11. Interactions avec les autres rôles

| Rôle | Interaction QA / Testeur |
|------|--------------------------|
| **Product Owner** | Priorisation valeur ; MVP ; arbitrage périmètre — QA alerte sur testabilité et risques, ne décide pas seul |
| **Business Analyst** | Exigences métier, workflows — QA complète par lecture parcours et ambiguïtés testables |
| **UX/UI Designer** | Maquettes, états, parcours — QA lit testabilité visuelle sans refaire le design |
| **RSSI** | Sécurité, conformité, SSI — QA ne valide pas SSI seul ; distingue métier / technique |
| **Architecte** | ADR, intégrations, exclusions — QA vérifie cohérence testabilité architecture (anomalies métier, pas logs) |
| **Chef de projet** | Jalons, gouvernance, blocage delivery — QA respecte séquence ; pas de feu vert delivery implicite |
| **Développeur** (futur) | Implémentation, automatisation — QA identifie automatisable ; Dev implémente ; pas de code QA à ce stade |

---

## 12. Application au cas Interv360

Lecture **testabilité candidate** uniquement — **aucun scénario détaillé**.

| Élément Interv360 | Lecture QA candidate |
|-------------------|----------------------|
| **Dashboard SAV** | KPI, CTA, alertes actionnables ; état sans demande |
| **Liste des demandes** | Colonnes métier, filtres, états vides |
| **Fiche demande** | Parcours qualification → planification ; onglets testables |
| **Planning semaine** | Conflits, créneaux, réassignation ; cas sans ressource |
| **Fiche intervention mobile** | Actions terrain ; démarrer / terminer |
| **Compte rendu mobile** | Signature optionnelle — deux chemins testables |
| **Suivi erreurs intégration** | Messages métier ; reprise manuelle (ADR P1) |
| **Vue dirigeant** | Synthèse distincte SAV ; pas de confusion rôles |
| **Signature optionnelle** | Non-blocage explicite ; happy / non happy path |
| **Anomalies métier** | Wording, action reprise — pas log technique |
| **Absence IA** | Pas de comportement implicite à valider |
| **Absence portail** | Hors périmètre client — pas de fausse attente |
| **Absence logs techniques** | Tests futurs orientés métier ; traçabilité ADR-004 |

*Sources : `figma-first-draft-review.md`, `2026-06-28-figma-v1-closure-summary.md`, `architecture-p1-summary.md`, `architecture-p2-design-impact-summary.md`.*

---

## 13. Garde-fous du rôle candidat

- [ ] ne pas déclencher delivery ;
- [ ] ne pas transformer une maquette en backlog ;
- [ ] ne pas produire user stories ;
- [ ] ne pas produire de code ;
- [ ] ne pas produire de scénarios détaillés sans jalon dédié ;
- [ ] ne pas confondre testabilité et recette officielle ;
- [ ] ne pas valider seul la conformité SSI ;
- [ ] ne pas remplacer le Product Owner ;
- [ ] ne pas remplacer le Business Analyst ;
- [ ] ne pas remplacer le RSSI ;
- [ ] ne pas remplacer l’Architecte ;
- [ ] ne pas automatiser sans stratégie ;
- [ ] ne pas imposer des tests E2E partout.

Ces garde-fous prolongent la clôture Figma V1, la publication Notion CMP-001 et la recherche QA.

---

## 14. Critères pour passer de rôle candidat à méthode officielle

- [x] recherche QA / Testeur réalisée ;
- [x] rôle observé dans au moins un cycle projet complet (UX/UI V1 Interv360) ;
- [ ] contributions stabilisées sur plusieurs contextes ou itérations ;
- [x] garde-fous documentés (recherche + présente note) ;
- [x] savoir-faire / savoir-être clarifiés (cadrage provisoire) ;
- [x] interactions avec autres rôles clarifiées ;
- [x] limites du rôle documentées ;
- [ ] prompts ou templates associés identifiés et validés (famille `prompts/qa/` planifiée, non créée) ;
- [x] absence de confusion avec delivery confirmée ;
- [ ] validation manuelle du rôle candidat réalisée ;
- [ ] décision explicite de créer `docs/methods/roles/qa-tester-method.md`.

---

## 15. Risques à éviter

- créer **trop tôt** une méthode officielle ;
- confondre **QA** avec **recette projet** ;
- produire des **cas de tests** avant delivery ;
- transformer une **revue UX/UI** en stratégie QA complète ;
- **surcharger** le projet pilote Interv360 ;
- **doublonner** avec Business Analyst ou Product Owner ;
- ouvrir implicitement **backlog** ou **user stories** ;
- confondre **testabilité** et **validation fonctionnelle complète**.

---

## 16. Décision de cadrage

**Décision** : rôle **QA / Testeur retenu comme rôle candidat SFIA** — méthode officielle à préparer ultérieurement après validation dédiée.

Cette décision **ouvre le chantier méthodologique QA / Testeur** au niveau du **cadrage du rôle candidat**.

Elle **ne crée pas** encore :

- `docs/methods/roles/qa-tester-method.md` ;
- scénarios, cas de tests, recette, backlog, user stories ou code ;
- jalon delivery.

---

## 17. Prochaines actions

1. **Relire** la présente note de cadrage ;
2. **Préparer une revue manuelle** du rôle candidat QA / Testeur ;
3. **Décider** si le rôle est suffisamment mature pour créer une méthode officielle ;
4. **Seulement ensuite** créer éventuellement `docs/methods/roles/qa-tester-method.md`.

**Aucune action** de cette séquence ne doit produire de scénarios de tests projet, backlog, user stories ou code.

---

## 18. Conclusion

Le rôle **QA / Testeur** est suffisamment **présent dans le cycle UX/UI V1** et suffisamment **documenté par la recherche QA** pour être **cadré comme rôle candidat SFIA**.

Son apport porte sur la **testabilité**, les **risques**, les **parcours**, les **anomalies**, les **états visibles** et la **préparation future des tests**.

Il reste **distinct** du delivery, de la recette officielle et de l’automatisation à ce stade.

Une **revue manuelle du rôle candidat** devra précéder toute création de méthode officielle.

---

*Cadrage rôle candidat QA / Testeur — gouvernance SFIA — sans méthode officielle ni delivery.*
