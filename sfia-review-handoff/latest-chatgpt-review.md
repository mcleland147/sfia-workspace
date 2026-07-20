# SFIA Studio — Review Pack — OPS1 Functional Architecture Candidate

- **Date/heure/fuseau :** 2026-07-20 15:18:08 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 3 — Architecture fonctionnelle
- **Profil :** Standard
- **Gate ouverture :** G-OPS1-FUNC-ARCH (consommé)
- **Gate validation :** G-OPS1-FUNC-ARCH-VAL (fermé)
- **Branche :** architecture/sfia-studio-ops1-functional (locale)
- **Base / parent :** b4b9df577a39fe564c3a787a23501786682e1740
- **HEAD commit :** 122e9481d882f44d67fc82ef98e6b4dae590e7e8
- **Message :** docs(sfia-studio): define OPS1 functional architecture candidate

## Truth Check

Conforme : main = origin/main = b4b9df5 ; 0/0 ; tracked propre ; branche arch absente avant création.

## Sources consultées

- Cycle routing guide (cycle 3 architecture fonctionnelle)
- Documents 41–47 (cadrage + conception validée avec réserves)
- CAP-01…21, FLOW-01…32, FR-001…032, FD-CAND-01…27 (réserves 13/15/20/26 OPEN)

## Décisions / réserves héritées

- Conception validée ; chat≠GO ; Morris ; harness ; Cursor borné ; Git vérité ; Campus360 + allowlist ; no remote auto
- Réserves OPEN : FD-CAND-13/15/20/26 ; FinOps numériques ; cartographie ; branche ; live ; CI ; isolation

## Domaines (D1–D11)

Interaction ; Session ; Sources Git ; Proposition d'action ; Autorisation Morris ; Validation ; Exécution ; Preuves ; Audit ; FinOps ; Erreurs/STOP

## Composants (14)

Conversation Workspace ; Cycle Session Manager ; Context and Source Selector ; Git Truth Adapter ; Action Proposal Manager ; Morris Gate Manager ; Harness Validation Boundary ; Execution Contract Manager ; Cursor Execution Adapter ; Evidence and Result Collector ; Audit Journal ; FinOps Guard ; Session Persistence ; Error and STOP Coordinator

## Frontières d'autorité

Morris = GO/clôture ; Harness = revalidation ; Cursor = exécution contrat ; Git = vérité ; GPT = candidat seulement

## Décisions candidates

OPS1-FA-CAND-01…22 — toutes CANDIDATE — MORRIS VALIDATION REQUIRED (aucune VALIDATED)

## Couverture

- CAP → composants (49 §6)
- FLOW-01…32 → matrice (49 §3.3)
- FR → frontières (49 §6)

## Commit

```text
122e948 docs(sfia-studio): define OPS1 functional architecture candidate
 .../sfia-studio/48-ops1-functional-architecture.md | 372 ++++++++++++++++
 ...-ops1-functional-components-and-interactions.md | 485 +++++++++++++++++++++
 ...0-ops1-functional-architecture-decision-pack.md | 460 +++++++++++++++++++
 3 files changed, 1317 insertions(+)

```

Push projet absent. Branche distante architecture absente.

## Structure 48

```text
1: # SFIA Studio — Architecture fonctionnelle OPS1
27: ## 1. Objet, portée et non-objectifs
29: ### Objet
33: ### Portée
40: ### Non-objectifs
51: ## 2. Principes d’architecture fonctionnelle
66: ## 3. Vue d’ensemble des domaines fonctionnels
100: ## 4. Carte des composants fonctionnels
123: ## 5. Frontières de responsabilité
137: ## 6. Frontières de confiance et d’autorité
158: ## 7. Orchestration nominale OPS1
181: ## 8. Orchestration sans action
190: ## 9. Orchestration avec action candidate
199: ## 10. Gate Morris et revalidation harness
208: ## 11. Exécution Cursor bornée
217: ## 12. Résultat, preuves et reprise conversationnelle
225: ## 13. Clôture, consultation et continuation
233: ## 14. Gestion des erreurs, STOP et fail-closed
248: ## 15. Gestion fonctionnelle de la persistance
258: ## 16. Relation entre store de session et Git
270: ## 17. Sécurité fonctionnelle
280: ## 18. RGPD et minimisation
289: ## 19. FinOps fonctionnel
297: ## 20. Accessibilité fonctionnelle
306: ## 21. Performance perçue
315: ## 22. Observabilité et auditabilité
323: ## 23. Dépendances vers UX, architecture technique et backlog
336: ## 24. Réserves héritées (OPEN — non arbitrées)
349: ## 25. Critères de validation future (`G-OPS1-FUNC-ARCH-VAL`)
364: ## 26. Verdict candidat
```

### Extrait 48

```markdown
# SFIA Studio — Architecture fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `48-ops1-functional-architecture.md` |
| **Cycle** | 3 — Architecture fonctionnelle |
| **Profil** | Standard |
| **Typologie** | POC / ARCHITECTURE FONCTIONNELLE / PRODUIT / DOC |
| **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — **consommé** |
| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **fermé** |
| **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
| **Branche** | `architecture/sfia-studio-ops1-functional` (**locale uniquement** — aucun push) |
| **Statut** | `functional-architecture-candidate` — **CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Autorité** | Morris (L0) |
| **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`47`](./47-ops1-functional-decision-pack.md) |
| **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) |
| **Horodatage production** | 2026-07-20 15:14 CEST |

> Architecture **fonctionnelle** candidate du Vertical Slice Opérationnel 1.
> Hérite du cadrage validé (`G-OPS1-FRAMING-VAL`) et de la conception validée avec réserves (`G-OPS1-FUNC-DESIGN-VAL`).
> **Aucune validation Morris** de cette architecture dans ce cycle.
> **Aucun** choix de stack, BDD, API, protocole, code, Figma, backlog, delivery, live ou MVP.
> Les décisions `OPS1-FA-CAND-*` sont **candidates** — voir [`50`](./50-ops1-functional-architecture-decision-pack.md).

---

## 1. Objet, portée et non-objectifs

### Objet

Définir les **domaines**, **composants fonctionnels**, **frontières de responsabilité et d’autorité**, et l’**orchestration** du parcours OPS1, de façon compatible avec CAP-01…21, FR-001…032 et FLOW-01…32.

### Portée

- Architecture fonctionnelle OPS1 uniquement ;
- composants et interactions (détail : doc 49) ;
- décisions candidates (doc 50) ;
- sécurité / RGPD / FinOps / a11y / perf / observabilité **fonctionnelles**.

### Non-objectifs

- Stack, BDD physique, endpoints, protocoles, cloud ;
- code, harness implémentation, packages ;
- écrans Figma / UX visuelle ;
- backlog, delivery, live, MVP ;
- arbitrage des réserves FD-CAND-13/15/20/26 ;
- cartographie exacte des chemins Campus360 (`G-OPS1-SCENARIO-VAL`).

---

## 2. Principes d’architecture fonctionnelle

1. **Conversation-first** — GPT réel et libre ; fixtures = tests uniquement.
2. **Chat ≠ GO** — le texte conversationnel n’autorise jamais une exécution.
3. **Action séparée** — `ProposedAction` est un objet distinct du dialogue.
```

## Structure 49

```text
1: # SFIA Studio — Composants et interactions fonctionnelles OPS1
21: ## 1. Convention de description
31: ## 2. Catalogue des composants
33: ### 2.1 Conversation Workspace
50: ### 2.2 Cycle Session Manager
67: ### 2.3 Context and Source Selector
84: ### 2.4 Git Truth Adapter (fonctionnel)
101: ### 2.5 Action Proposal Manager
118: ### 2.6 Morris Gate Manager
135: ### 2.7 Harness Validation Boundary
152: ### 2.8 Execution Contract Manager
169: ### 2.9 Cursor Execution Adapter (fonctionnel)
186: ### 2.10 Evidence and Result Collector
203: ### 2.11 Audit Journal
220: ### 2.12 FinOps Guard
237: ### 2.13 Session Persistence Capability
254: ### 2.14 Error and STOP Coordinator
273: ## 3. Matrices
275: ### 3.1 Composants × acteurs
294: ### 3.2 Composants × objets
309: ### 3.3 Composants × FLOW-01…32 (couverture)
328: ### 3.4 Matrice d’autorité (rappel)
341: ## 4. Séquences (Mermaid)
343: ### 4.1 Conversation sans action
358: ### 4.2 Action → gate → harness → exécution
379: ### 4.3 Post-exécution → analyse → décision
394: ### 4.4 STOP / FAILED
407: ### 4.5 Reprise de session
421: ### 4.6 Consultation après CLOSE
435: ## 5. Routage UX / architecture technique
437: ### Vers UX (`G-OPS1-UX` — fermé)
443: ### Vers architecture technique (`G-OPS1-TECH-ARCH` — fermé)
452: ## 6. Couverture CAP / FR (synthèse)
480: ## 7. Verdict candidat
```

### Extrait 49

```markdown
# SFIA Studio — Composants et interactions fonctionnelles OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `49-ops1-functional-components-and-interactions.md` |
| **Cycle** | 3 — Architecture fonctionnelle |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — consommé |
| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — fermé |
| **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
| **Branche** | `architecture/sfia-studio-ops1-functional` (locale — aucun push) |
| **Statut** | `functional-architecture-candidate` — **CANDIDATE — MORRIS VALIDATION REQUIRED** |
| **Companion** | [`48`](./48-ops1-functional-architecture.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) |
| **Horodatage** | 2026-07-20 15:14 CEST |

> Contrats fonctionnels des composants OPS1.
> **Aucun** framework, endpoint, table, queue ou protocole imposé.

---

## 1. Convention de description

Pour chaque composant :

- raison d’être · responsabilités · exclusions · données · événements in/out · décisions autorisées/interdites · interactions · erreurs · preuves · transverses.

Challenge (rappel) : utile maintenant ? responsabilité distincte ? dette ? plus simple ? repo-first ? gate Morris ? frontière fct vs tech prématuré ?

---

## 2. Catalogue des composants

### 2.1 Conversation Workspace

| Élément | Contenu |
|---------|---------|
| **Raison** | Surface de dialogue réel multi-tours (CAP-03…05) |
| **Responsabilités** | Afficher/éditer le fil ; distinguer auteurs ; transmettre messages `originKind=real` |
| **Exclusions** | Autoriser exécution ; modifier Git ; figer un script de preuve |
| **Données** | `ConversationMessage[]` ; auteur ; timestamp+TZ |
| **In** | Message Morris ; réponse GPT ; événements système |
| **Out** | Message émis ; demande de clarification |
| **Autorisé** | Converser librement |
| **Interdit** | Traiter le chat comme GO |
| **Interactions** | Cycle Session Manager ; Action Proposal Manager (lecture contexte) |
```

## Structure 50

```text
1: # SFIA Studio — Decision pack architecture fonctionnelle OPS1
23: ## 1. Convention
29: ## 2. Décisions candidates
31: ### OPS1-FA-CAND-01 — Découpage des domaines fonctionnels
48: ### OPS1-FA-CAND-02 — Responsabilité du Cycle Session Manager
65: ### OPS1-FA-CAND-03 — Séparation conversation / action
82: ### OPS1-FA-CAND-04 — Autorité exclusive Morris
99: ### OPS1-FA-CAND-05 — Frontière harness
116: ### OPS1-FA-CAND-06 — Frontière Cursor
133: ### OPS1-FA-CAND-07 — Relation Git / store de session
150: ### OPS1-FA-CAND-08 — Modèle d’événements fonctionnels
167: ### OPS1-FA-CAND-09 — Gestion des preuves
184: ### OPS1-FA-CAND-10 — STOP / FAILED
201: ### OPS1-FA-CAND-11 — Reprise et lecture après CLOSE
218: ### OPS1-FA-CAND-12 — Non-mutation silencieuse
235: ### OPS1-FA-CAND-13 — Traitement FinOps
252: ### OPS1-FA-CAND-14 — Sécurité fonctionnelle et fail-closed
269: ### OPS1-FA-CAND-15 — Observabilité
286: ### OPS1-FA-CAND-16 — Frontières UX
303: ### OPS1-FA-CAND-17 — Frontières architecture technique
320: ### OPS1-FA-CAND-18 — Traitement des réserves Campus360
337: ### OPS1-FA-CAND-19 — Critères de passage vers UX
354: ### OPS1-FA-CAND-20 — Critères de passage vers architecture technique
371: ### OPS1-FA-CAND-21 — Critères de passage vers backlog
388: ### OPS1-FA-CAND-22 — Verdict candidat d’architecture fonctionnelle
407: ## 3. Décisions Morris requises
409: ### Validation globale
413: ### Validables telles quelles (si Morris en convient)
417: ### Avec réserve explicite à maintenir
421: ### Nécessitant clarification éventuelle
426: ### Explicitement hors cycle
439: ## 4. Gates
453: ## 5. Verdict candidat
```

### Extrait 50

```markdown
# SFIA Studio — Decision pack architecture fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `50-ops1-functional-architecture-decision-pack.md` |
| **Cycle** | 3 — Architecture fonctionnelle |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — consommé |
| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **fermé** |
| **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
| **Branche** | `architecture/sfia-studio-ops1-functional` (locale — aucun push) |
| **Statut** | `functional-architecture-candidate` |
| **Companions** | [`48`](./48-ops1-functional-architecture.md) · [`49`](./49-ops1-functional-components-and-interactions.md) |
| **Horodatage** | 2026-07-20 15:14 CEST |

> Toutes les décisions `OPS1-FA-CAND-*` portent le statut :
> **`CANDIDATE — MORRIS VALIDATION REQUIRED`**

Hérite des `OPS1-FD-CAND-01…27` **validées** (réserves 13/15/20/26 **OPEN** — non arbitrées ici).

---

## 1. Convention

Chaque décision : observation · héritage · options · recommandation · décision candidate · impacts · risques · dette · réserves · sujets routés · décision Morris attendue · statut.

---

## 2. Décisions candidates

### OPS1-FA-CAND-01 — Découpage des domaines fonctionnels

| Élément | Contenu |
|---------|---------|
| **Observation** | CAP/FLOW/FR exigent plusieurs responsabilités distinctes sans imposer de microservices. |
| **Héritage** | FD-CAND-01, 03, 21 |
| **Options** | (A) Monolithe logique unique ; (B) 11 domaines D1–D11 (doc 48) ; (C) découpage technique prématuré |
| **Recommandation** | (B) |
| **Décision candidate** | Adopter les domaines D1–D11 comme carte fonctionnelle OPS1. |
| **Impacts** | Lisibilité ; matrices de couverture |
| **Risques** | Sur-découpage perçu |
| **Dette** | Noms de domaines affinables à la validation |
| **Réserves** | Aucune nouvelle |
| **Routé** | Tech arch si mapping modules |
| **Morris attendu** | Valider / ajuster la carte |
| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |

### OPS1-FA-CAND-02 — Responsabilité du Cycle Session Manager

| Élément | Contenu |
|---------|---------|
| **Observation** | Quatre couches d’état doivent rester cohérentes. |
| **Héritage** | FD-CAND-02, 03, 07 |
| **Options** | (A) États dispersés dans l’UI ; (B) Session Manager propriétaire des transitions |
| **Recommandation** | (B) |
```

## Décisions Morris attendues

- Validation globale sous G-OPS1-FUNC-ARCH-VAL
- Confirmer domaines / composants / frontières
- Maintenir réserves OPEN
- Ne pas ouvrir UX / tech / backlog / live

## Garde-fous

Pas de stack/API/BDD ; FA-CAND non VALIDATED ; 41–47 intacts ; gates suivants fermés

## Handoff

- SHA : (après push)

## Verdict

**OPS1 FUNCTIONAL ARCHITECTURE CANDIDATE PRODUCED — MORRIS VALIDATION REQUIRED**
