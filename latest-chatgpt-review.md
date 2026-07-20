# SFIA Studio — Review Handoff Git — OPS1 Scénario candidat

- **Date/heure/fuseau republication :** 2026-07-20 18:20:11 CEST
- **Repository :** mcleland147/sfia-workspace
- **Cycle handoff :** Validation — republication Review Handoff Git
- **Profil handoff :** Light
- **Branche handoff :** `sfia/review-handoff`
- **Fichier canonique :** `sfia-review-handoff/latest-chatgpt-review.md`
- **Handoff remplacé :** `b47a98b472a8b6ce35d16bf1e83d238355562ab2` (post-merge UX PR #240)
- **Branche projet (non poussée) :** `design/sfia-studio-ops1-scenario` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **GO Morris :** republication handoff scénario candidat uniquement
- **Commit / push projet :** **non** autorisés
- **Validation décisions CAND-01…22 :** **non** effectuée

> Verdict porté : `OPS1 SCENARIO DOCUMENTED — READY FOR MORRIS VALIDATION`
> Ce verdict ne valide pas les 22 décisions, n’ouvre ni architecture technique ni backlog, et n’autorise aucun commit ou push projet.

---

# SFIA Studio — Review Pack — OPS1 Scénario opérationnel (candidat)

- **Date/heure/fuseau :** 2026-07-20 18:10:20 CEST
- **Repository :** mcleland147/sfia-workspace
- **Branche :** `design/sfia-studio-ops1-scenario`
- **HEAD :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **Base / origin/main :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **Merge-base :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **Cycle :** Conception du scénario opérationnel OPS1
- **Profil :** Standard
- **Typologie :** DOC / SCENARIO / UX / GOVERNANCE / VALIDATION
- **Gate Morris ouverture :** `G-OPS1-SCENARIO-VAL` — consommé pour production documentaire candidate
- **Gate Morris validation :** **AWAITING** (GO distinct)
- **Handoff Git distant :** non modifié (préparation locale uniquement)
- **HEAD handoff attendu (inchangé) :** `b47a98b472a8b6ce35d16bf1e83d238355562ab2`

---

## 1. État Git initial et final (ce cycle)

### Initial (Truth Check)

- Branche de départ : `main` @ `5a595b0…`
- Tracked propre ; staged vide
- Untracked connus : `.tmp-sfia-review/` · `projects/.tmp-sfia-review/`
- Branche créée : `design/sfia-studio-ops1-scenario` depuis `origin/main`
- **Aucun push**

### Final

```
 M projects/sfia-studio/41-operational-vertical-slice-1-framing.md
 M projects/sfia-studio/45-ops1-functional-design.md
 M projects/sfia-studio/48-ops1-functional-architecture.md
 M projects/sfia-studio/51-ops1-ux-ui-contract.md
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/54-ops1-operational-scenario.md
?? projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md
?? projects/sfia-studio/56-ops1-scenario-decision-pack.md

```

```
 .../41-operational-vertical-slice-1-framing.md          |  6 +++---
 projects/sfia-studio/45-ops1-functional-design.md       |  7 ++++---
 projects/sfia-studio/48-ops1-functional-architecture.md |  6 +++---
 projects/sfia-studio/51-ops1-ux-ui-contract.md          |  8 ++++----
 projects/sfia-studio/README.md                          | 17 +++++++++++++----
 5 files changed, 27 insertions(+), 17 deletions(-)

```

---

## 2. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/README.md`
- `projects/sfia-studio/41` … `53` (cadrage, conception, archi fct, UX)
- `projects/campus360/README.md` + `01` + `02` + `03` (inventaire réel)
- Handoff `sfia/review-handoff` @ `b47a98b…` (lecture)

---

## 3. Qualification / blocs

**Activés :** scénario · gouvernance Morris · sécurité fonctionnelle · Git/branches · UX comportement · FinOps réserve · RGPD fct · a11y · perf perçue · QA preuves · traçabilité.

**Désactivés :** architecture technique · stack/API/BDD · implémentation · backlog · delivery · CI · déploiement · live · MVP · production · modification Figma.

---

## 4. Fichiers créés

1. `projects/sfia-studio/54-ops1-operational-scenario.md`
2. `projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md`
3. `projects/sfia-studio/56-ops1-scenario-decision-pack.md`

## 5. Fichiers modifiés (propagation minimale)

1. `41-operational-vertical-slice-1-framing.md`
2. `45-ops1-functional-design.md`
3. `48-ops1-functional-architecture.md`
4. `51-ops1-ux-ui-contract.md`
5. `README.md`

Non modifiés (interdit / hors scope) : `44`, `47`, `50`, `53`, méthode, prompts, app, harness, Figma, handoff distant.

---

## 6. Cartographie Campus360 (synthèse)

Inventaire réel sous `projects/campus360/` :

- `README.md`
- `01-opportunity-and-vision.md`
- `02-sfia-cycle-coverage-hypothesis.md`
- `03-pre-framing-decision-pack.md`

Éligibles (candidats) : Markdown documentaires non protégés de ce dossier.
Exclusions : hors `projects/campus360/` · method · prompts · app · harness · `.github` · lockfiles · secrets · autres projets.
Allowlist par action obligatoire ; pas d’autorisation globale.
Convention branche candidate : `scenario/campus360-<action-slug>-<session-id-court>`.

---

## 7. Scénario / variantes / PN / allowlist / branche / décisions

- Nominal : 16 étapes (§4 doc 54)
- Variantes : sans action · correction avant GO · extension après GO · NO-GO · STOP · échec Cursor · rapport incomplet
- PN-01…09
- Allowlist : exhaustivité, gel post-GO, multi-fichiers proportionné
- Décisions : `OPS1-SCENARIO-CAND-01`…`22` · toutes `AWAITING G-OPS1-SCENARIO-VAL`

---

## 8. Réserves maintenues

FD-CAND-13/15/20/26 · UX-R01…R04 · FinOps · live · CI · isolation · tech-arch · stack/protocole.
FD-CAND-20/26 **précisées** en candidat, **non clôturées**.

---

## 9. Contrôles

- `git diff --check` : OK
- Périmètre : uniquement `projects/sfia-studio/**` autorisé
- 22 décisions candidates ; 0 validées
- Aucun claim positif READY FOR DELIVERY / PRODUCTION READY / MVP DEFINED / OPS1 PROVEN (occurrences = garde-fous / anti-claims)
- Scénario non présenté comme VALIDATED
- Liens Markdown 54–56 présents dans propagation
- Secrets/PII : aucun secret réel ; mentions « secrets » = exclusions
- Decision packs validés 44/47/50/53 : non réécrits

---

## 10. Anomalies

Aucune bloquante.
Note : le handoff post-merge porte le verdict `…POST-MERGE VALIDATED…` (libellé publié) ; non modifié ici.

---

## 11. Dette

- Validation Morris scénario
- Démo live + PN
- FinOps numériques
- UX-R01…R03
- Continuation post-CLOSE
- Cleanup branches d’exécution futures

---

## 12. Arbitrages Morris requis

1. Valider ou amender `OPS1-SCENARIO-CAND-01`…`22` sous `G-OPS1-SCENARIO-VAL`.
2. Confirmer cartographie / exclusions / vigilance sur `03`.
3. Confirmer convention de branche.
4. Autoriser éventuellement push handoff / commit / PR (cycles distincts) — **non faits ici**.
5. Ne pas ouvrir tech-arch / backlog / delivery sans GO séparé.

---

## 13. Prochaine étape

Revue ChatGPT + décision Morris de validation scénario.
Handoff Git : push uniquement après GO Morris distinct.

---

## 14. Verdict

`OPS1 SCENARIO DOCUMENTED — READY FOR MORRIS VALIDATION`

`REVIEW HANDOFF PREPARED LOCALLY — PUSH REQUIRES MORRIS GO`

---

## Annexe A — Document 54 (complet)

# SFIA Studio — Scénario opérationnel OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `54-ops1-operational-scenario.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Typologie** | DOC / SCENARIO / UX / GOVERNANCE / VALIDATION |
| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — **consommé pour production documentaire candidate** |
| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **AWAITING** (GO Morris de validation distinct) |
| **Statut** | `scenario-candidate` — **candidat** ; non validé |
| **Branche** | `design/sfia-studio-ops1-scenario` |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Companions** | [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
| **Héritage** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) |
| **Autorité** | Morris (L0) |
| **Horodatage production** | 2026-07-20 18:08:37 CEST |

> Scénario opérationnel **candidat** du Vertical Slice OPS1.
> Transforme les contrats validés (cadrage, conception, architecture fonctionnelle, UX/UI) en **preuve opératoire** bornée et vérifiable.
> **Ne valide pas** le scénario. **N’ouvre pas** l’architecture technique, le backlog, le code, la delivery, le live, le MVP ni la production.
> Décisions : voir [`56`](./56-ops1-scenario-decision-pack.md) — `OPS1-SCENARIO-CAND-*` · `AWAITING G-OPS1-SCENARIO-VAL`.

---

## 1. Finalité de la preuve

### 1.1 Ce qu’OPS1 doit démontrer

1. Une **conversation GPT réelle**, libre, multi-tours, non scénarisée phrase par phrase.
2. Une **action Markdown optionnelle**, séparée du chat, sur le projet pilote **Campus360**.
3. Un **gate Morris explicite** (GO / NO-GO / CORRIGER / ABANDONNER / STOP) avant toute exécution.
4. Une **allowlist exhaustive 1..n** présentée avant le gate ; Campus360 éligible ≠ autorisation globale.
5. Une **exécution Cursor réelle** strictement bornée au contrat ancré (HEAD, hash, allowlist, denylist).
6. Un **rapport complet** (consolidé + par fichier) et une **reprise conversationnelle** post-exécution.
7. Une **clôture de session immuable** avec historique et preuves consultables.
8. Des **preuves négatives** fail-closed (sans GO, hors allowlist, extension post-GO, HEAD dérivé, hash invalide, double-exécution, timeout ≠ GO, aucun remote auto).

### 1.2 Ce qu’OPS1 ne démontre pas

- Architecture technique, stack, API, BDD, protocole.
- Backlog détaillé, delivery, CI industrielle, déploiement.
- Live industrialisé, MVP, production, multi-projets hors Campus360.
- Design system publié, responsive tablette/mobile (UX-R01…R03).
- Résolution FinOps numérique, isolation OS/réseau, continuation post-CLOSE (FD-CAND-13).
- Autorisation globale sur tout Campus360.

### 1.3 Preuve opératoire ≠ POC technique ≠ MVP ≠ production

| Terme | Rôle dans OPS1 |
|-------|----------------|
| **Preuve opératoire** | Démonstration gouvernée bout-en-bout du parcours conversation → gate → Cursor → rapport → clôture |
| **POC** | Cadre produit SFIA Studio maintenu ; OPS1 = marche du POC, pas le produit cible |
| **MVP** | **Non défini** et **non ouvert** |
| **Production** | **Hors périmètre** |

### 1.4 Critères d’entrée (candidats)

- Docs `41`–`53` disponibles et cohérents sur la base Git.
- Projet `projects/campus360/` présent (cartographie doc [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md)).
- Branche de travail locale propre ; `origin/main` connu.
- GPT réel et Cursor réel disponibles pour la démonstration (preuve live = réserve jusqu’à exécution).
- Gate d’ouverture scénario accordé pour la production documentaire.

### 1.5 Critères de sortie documentaire (ce cycle)

- Docs `54`–`56` candidats complets.
- Propagation minimale dans `41` / `45` / `48` / `51` / `README`.
- Review pack + handoff local préparés.
- Aucun commit / push / PR / merge dans ce cycle.
- Validation Morris **distincte** requise avant statut « scénario validé ».

---

## 2. Acteurs et autorités

| Acteur | Responsabilités | Interdictions |
|--------|-----------------|---------------|
| **Morris** | Ouvre/clôture session ; dialogue ; GO/NO-GO/CORRIGER/ABANDONNER/STOP ; décision finale ; validation scénario | Déléguer l’autorité d’exécution au texte GPT |
| **ChatGPT** | Dialogue libre ; clarification ; proposition d’action candidate ; analyse rapport (candidate) | Créer un GO ; exécuter ; élargir allowlist ; autoriser remote |
| **Harness** | Revalide schémas, gate, HEAD, contractHash, allowlist, denylist, plafonds ; fail-closed ; anti double-exécution | Inventer un GO ; ignorer denylist |
| **Cursor** | Exécute uniquement le contrat ancré après GO valide | Lire/écrire hors allowlist ; commit/push/PR/merge auto ; retry implicite |
| **Git** | Vérité technique (HEAD, diffs, fichiers, branches) | Être remplacé par le store conversationnel |
| **Store / journal de session** | Historique messages, décisions, preuves, états | Contredire Git sur le contenu fichiers ; autoriser écriture après CLOSE |

**Règle structurante :** le texte du chat **n’est jamais** une autorisation d’exécution.

---

## 3. Préconditions

| Précondition | Détail |
|--------------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Base | `origin/main` (SHA ancré dans le contrat) |
| Projet pilote | **Campus360** exclusivement (`projects/campus360/`) |
| Fichiers éligibles | Markdown documentaires non protégés — voir doc [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
| Session | Ouverte par Morris ; non CLOSE |
| GPT | Disponible (réel) pour le dialogue |
| Cursor | Disponible (réel) pour l’exécution après GO |
| Git local | Working tree tracked propre ; staged vide avant exécution |
| Réserves | FD-CAND-13/15/20/26 · UX-R01…R04 · FinOps · live · CI · isolation — **OPEN** |
| Limites | Pas de remote auto ; pas de secrets ; default deny |

---

## 4. Scénario nominal complet

Les étapes fixent le **comportement** ; elles **ne figent pas** les phrases conversationnelles.

1. **Ouverture** — Morris ouvre une `CycleSession` OPS1.
2. **Demande** — Morris formule une demande réelle, éventuellement imprécise, relative à Campus360 / SFIA.
3. **Dialogue** — ChatGPT échange librement, clarifie objectif, cycle, profil, risques.
4. **Challenge** — Morris corrige, précise ou challenge.
5. **Sans action possible** — ChatGPT peut conclure `ACTION_NOT_REQUIRED` (variante §5).
6. **Action candidate** — Si pertinente, ChatGPT produit un **contrat d’action séparé** du fil chat.
7. **Allowlist** — Le contrat porte une allowlist **exhaustive** (consultables / créables / modifiables) + `forbiddenPaths` + branche + HEAD + objectif.
8. **Gate Morris** — Morris choisit GO, NO-GO, CORRIGER, ABANDONNER ou STOP.
9. **Revalidation harness** — Indépendamment du texte GPT : gate, HEAD, `contractHash`, allowlist, denylist, stop conditions.
10. **Exécution Cursor** — Uniquement après GO + revalidation OK ; strictement bornée.
11. **Rapport** — Couverture de **chaque** fichier de l’allowlist ; diff consolidé + par fichier ; erreurs ; complétude.
12. **Analyse** — ChatGPT produit une analyse **candidate** du rapport.
13. **Reprise** — Morris reprend la conversation (questions, corrections, suite).
14. **Décision finale** — Morris valide le résultat, corrige (nouveau cycle d’action), refuse ou abandonne.
15. **Clôture** — Session CLOSE → **lecture seule** ; pas de reprise implicite d’exécution.
16. **Consultation** — Historique, décisions, preuves et diffs restent consultables ; Git prime sur le contenu fichiers.

---

## 5. Variante sans action

- Dialogue utile et multi-tours.
- Conclusion explicite `ACTION_NOT_REQUIRED`.
- **Aucune** branche d’exécution créée ; **aucune** exécution Cursor.
- La conversation **peut continuer**.
- Clôture possible sans action.
- Preuve attendue : journal de session + signal `ACTION_NOT_REQUIRED` + absence d’effets Git d’exécution.

---

## 6. Variante correction avant GO

1. Action candidate initiale présentée.
2. Morris choisit **CORRIGER** (périmètre, fichiers, objectif, risques).
3. L’ancien contrat candidat est **invalidé** (non exécutable).
4. Nouveau contrat avec nouvelle allowlist / ancrage.
5. Nouveau `contractHash`.
6. Nouveau gate Morris explicite (GO/NO-GO/…).
7. Aucune exécution sur l’ancien hash.

---

## 7. Variante extension après GO

1. Tentative d’ajouter un fichier à l’allowlist **après** GO.
2. Harness / Cursor : **refus fail-closed** (FR-030).
3. Exécution en cours : STOP ou non-démarrage selon état ; pas d’élargissement.
4. Correction = **nouveau contrat** + **nouveau gate Morris** obligatoire.
5. Preuve négative obligatoire (PN-extension).

---

## 8. Variante NO-GO / abandon

- Morris choisit **NO-GO** ou **ABANDONNER**.
- **Aucun effet Git** d’exécution.
- Décision journalisée (motif, timestamp, fuseau).
- Conversation peut continuer ou session clôturée.
- Contrat non exécutable.

---

## 9. Variante STOP

- **STOP** a priorité sur tous les autres états.
- Cursor : arrêt immédiat ou non-démarrage.
- Preuves et journal **conservés**.
- **Aucune reprise implicite** ; reprise = nouvelle décision Morris explicite.
- Timeout ≠ STOP ≠ GO.

---

## 10. Variante échec Cursor

- Rapport d’échec structuré (statut, fichiers, erreurs).
- **Aucun retry automatique**.
- Contexte session conservé.
- Analyse candidate ChatGPT.
- Décision Morris : corriger, abandonner, nouveau contrat, ou clôturer.

---

## 11. Variante rapport incomplet

- Couverture allowlist incomplète ⇒ **clôture nominale interdite**.
- Nouvelle exécution sur le **même** `contractHash` : **bloquée** (anti double-exécution / complétude).
- Requis : correction (nouveau contrat + gate) ou abandon explicite.
- Preuve : flag d’incomplétude visible.

---

## 12. Preuves négatives obligatoires

| ID | Preuve | Résultat attendu |
|----|--------|------------------|
| PN-01 | Exécution sans GO | Refus ; aucun effet |
| PN-02 | Fichier hors allowlist | Refus fail-closed |
| PN-03 | Extension allowlist après GO | Refus ; nouveau gate requis |
| PN-04 | HEAD modifié après GO | Refus / invalidation ancrage |
| PN-05 | `contractHash` invalide | Refus |
| PN-06 | Contenu fichier / chat prétendant autoriser | Ignoré ; seule la décision Morris compte |
| PN-07 | Double-exécution même hash | Refus |
| PN-08 | Timeout | ≠ GO ; pas d’exécution implicite |
| PN-09 | Effet distant automatique (push/PR/merge) | Interdit ; aucun effet |

---

## 13. Contrat d’action scénario (fonctionnel)

Champs minimaux du contrat **fonctionnel** (pas de schéma JSON technique figé) :

| Champ | Rôle |
|-------|------|
| `sessionId` | Session OPS1 |
| `actionId` | Identifiant d’action |
| `cycle` | Cycle / profil proposés |
| `project` | `campus360` (exclusif) |
| `repository` | `mcleland147/sfia-workspace` |
| `baseRef` | Réf. autorisée (ex. `origin/main`) |
| `headSha` | SHA ancré au GO |
| `branchName` | Branche locale selon convention candidate (doc 55) |
| `objective` | Objectif substantiel de l’action |
| `allowedReads` | Fichiers consultables (liste exhaustive) |
| `allowedCreates` | Fichiers créables (liste exhaustive) |
| `allowedModifies` | Fichiers modifiables (liste exhaustive) |
| `forbiddenPaths` | Interdits explicites + héritage denylist |
| `contractHash` | Empreinte d’ancrage du contrat |
| `morrisDecision` | GO / NO-GO / CORRIGER / ABANDONNER / STOP |
| `decisionTimestamp` | Horodatage décision |
| `decisionTimezone` | Fuseau (ex. CEST) |
| `stopConditions` | Conditions d’arrêt |
| `expectedReport` | Attentes de preuve |
| `finOpsContext` | Contexte FinOps (placeholders ; chiffres OPEN) |
| `reservations` | Réserves applicables à l’action |

---

## 14. Critères de réussite de la démonstration OPS1

| Critère | Type de preuve | Source | Validateur | Attendu | Bloquant si | Réserve |
|---------|----------------|--------|------------|---------|-------------|---------|
| Conversation réelle non scénarisée | Journal multi-tours | Session | Morris | Allers-retours libres | Script unique | — |
| Corrections Morris | Journal | Session | Morris | Au moins une correction possible | Chat = GO | — |
| Action facultative | Signal / absence branche | Session + Git | Morris | `ACTION_NOT_REQUIRED` possible | Action forcée | — |
| Séparation chat / action | UI + objets | UX 51 + session | Morris | Panneaux distincts | GO dans le fil | UX-R02 |
| Gate explicite | Décision journalisée | Gate | Morris | Une des 5 actions | Timeout = GO | — |
| Allowlist visible | Contrat | Action | Morris | Liste 1..n exhaustive | « Tout Campus360 » | FD-20/26 |
| Exécution Cursor réelle | Rapport | Cursor | Morris | Exécution bornée | Fixture seule pour preuve cible | live |
| Aucun effet hors allowlist | Diff / PN | Git | Morris + harness | Hors allowlist = 0 | Écriture hors liste | — |
| Rapport complet | Rapport | Cursor | Morris | Tous fichiers couverts | Incomplet + clôture OK | — |
| Reprise post-exécution | Journal | Session | Morris | Dialogue après rapport | Session morte | — |
| Décision finale | Journal | Morris | Morris | Valider / corriger / refuser / abandonner | Auto-clôture | — |
| Clôture immuable | État CLOSE | Session | Morris | Lecture seule | Écriture post-CLOSE | FD-13 |
| Historique consultable | Store + Git | Session/Git | Morris | Preuves relisibles | Perte preuves | — |
| Preuves négatives | PN-01…09 | Harness/Cursor | Morris | Refus observés | Contournement | — |
| Pas de claim MVP/prod | Revue docs | Docs | Morris | Anti-claims tenus | READY FOR DELIVERY etc. | — |

---

## 15. Gouvernance, sécurité, FinOps, RGPD, a11y, perf

| Domaine | Règle scénario |
|---------|----------------|
| **Gouvernance** | Morris L0 ; gates explicites ; décisions candidates jusqu’à validation |
| **Sécurité fonctionnelle** | Default deny ; denylist ; secrets exclus ; fail-closed |
| **Git** | Branche locale ; pas de remote auto ; Git = vérité fichiers |
| **UX** | Comportement selon docs `51`–`53` ; pas de redesign Figma ici |
| **FinOps** | Placeholders ; valeurs numériques **OPEN** (FD-CAND-15) |
| **RGPD** | Pas de PII/secrets dans allowlist ; majeurs / données minimales côté Campus360 produit |
| **Accessibilité** | Critères FD-CAND-17 applicables aux surfaces ; non retestés ici |
| **Performance perçue** | FD-CAND-18 ; timeout ≠ GO |
| **QA** | Matrice §14 + PN §12 |

---

## 16. Cleanup et suite

| Sujet | Règle candidate |
|-------|-----------------|
| Cleanup branche d’exécution | Après décision Morris ; pas automatique dans OPS1 |
| Cleanup branche de conception scénario | Après intégration éventuelle + GO distinct |
| Architecture technique | **Fermée** — ouverture uniquement par GO Morris explicite séparé |
| Backlog / delivery / live | **Fermés** |

---

## 17. Réserves maintenues

FD-CAND-13 · FD-CAND-15 · FD-CAND-20 · FD-CAND-26 · UX-R01 · UX-R02 · UX-R03 · UX-R04 · FinOps · live · CI · isolation · architecture technique · stack/protocole.

La cartographie et la convention de branche de ce cycle **précisent** FD-CAND-20/26 mais restent **candidates** jusqu’à validation Morris.

---

## 18. Anti-claims

Ce document **n’affirme pas** : scénario VALIDATED · READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · Campus360 entièrement autorisé · architecture technique ouverte · backlog ouvert · code autorisé · live validé.

---

## 19. Verdict documentaire

`scenario-candidate`

`OPS1 SCENARIO DOCUMENTED — READY FOR MORRIS VALIDATION`

Gate d’ouverture consommé pour production candidate. Validation Morris **AWAITING**.


---

## Annexe B — Document 55 (complet)

# SFIA Studio — Campus360 : périmètre, cartographie et règles d’allowlist OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `55-ops1-campus360-scope-and-allowlist-rules.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-scope-candidate` — **candidat** ; non validé |
| **Gate** | Ouverture `G-OPS1-SCENARIO-VAL` consommée (production) · validation **AWAITING** |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage** | 2026-07-20 18:08:37 CEST |
| **Autorité** | Morris (L0) |

> Cartographie **repo-informed** de Campus360 et règles d’allowlist OPS1.
> **Campus360 éligible ≠ autorisation globale.**
> Précise FD-CAND-20 / FD-CAND-26 sans les clôturer : validation finale = GO Morris distinct.

---

## 1. Ancrage projet pilote

| Élément | Valeur |
|---------|--------|
| Projet pilote OPS1 | **Campus360 exclusivement** |
| Chemin racine | `projects/campus360/` |
| Nature | Projet produit fictif étalon SFIA v2.6 (pré-cadrage clôturé) |
| Rôle pour OPS1 | Contexte métier/documentaire du pilote d’action |
| Non-rôle | OPS1 n’est **pas** une feature produit Campus360 |
| Repo | `mcleland147/sfia-workspace` |

---

## 2. Inventaire repo-informed (état constaté)

Recherche effectuée sur le repository (branche de conception scénario, base `5a595b0…`).

### 2.1 Arborescence réelle

```text
projects/campus360/
├── README.md
├── 01-opportunity-and-vision.md
├── 02-sfia-cycle-coverage-hypothesis.md
└── 03-pre-framing-decision-pack.md
```

**Aucun** autre fichier sous `projects/campus360/` au moment de la cartographie.
**Aucun** code, test, lockfile, secret ou configuration sous ce chemin.

### 2.2 Autres projets workspace (hors pilote d’action)

| Chemin | Statut OPS1 |
|--------|-------------|
| `projects/sfia-studio/**` | Hors allowlist d’action OPS1 (sauf lecture de contrats SFIA Studio hors exécution scénario) |
| `projects/chantiers360-v2/**` | **Exclu** du pilote |
| `projects/interv360/**` | **Exclu** |
| `projects/task-tracker/**` | **Exclu** |
| `method/**`, `prompts/**` | **Exclu** |
| `projects/sfia-studio/app/**`, `harness/**` | **Exclu** |
| `.github/**`, lockfiles, secrets | **Exclu** |

---

## 3. Distinction périmètre éligible / allowlist

| Notion | Définition |
|--------|------------|
| **Périmètre éligible** | Ensemble des Markdown documentaires **non protégés** sous `projects/campus360/` pouvant *être déclarés* dans une action |
| **Allowlist d’une action** | Liste **explicite, exhaustive, 1..n** des chemins réellement autorisés (reads / creates / modifies) pour **cette** action, présentée **avant** le gate et gelée au GO |

Règles :

- Le rattachement à Campus360 **n’autorise aucun fichier** implicitement.
- Hors allowlist = **interdit** (fail-closed), même si éligible.
- Pas de wildcard implicite non explicitée dans le contrat.
- Pas d’accès au dépôt entier.
- Multi-fichiers **uniquement si nécessaire** au besoin.
- Extension après GO = **interdite** ; correction + **nouveau gate**.

---

## 4. Cartographie fichier par fichier

| Chemin | Nature | Catégorie candidate | Risque | Autorité | Éligibilité | Protection / contraintes |
|--------|--------|---------------------|--------|----------|-------------|--------------------------|
| `projects/campus360/README.md` | Identité, navigation, gates, séparation | **Consultable** · **Modifiable** (proportionné) | Moyen (identité projet) | Morris via gate action | Oui si justifié | Ne pas altérer la séparation méthode/projet ; pas de secrets |
| `projects/campus360/01-opportunity-and-vision.md` | Vision / opportunité pré-cadrage | **Consultable** · **Modifiable** | Faible–moyen | Morris via gate | Oui | Diff vérifiable ; pas de PII |
| `projects/campus360/02-sfia-cycle-coverage-hypothesis.md` | Hypothèse couverture cycles | **Consultable** · **Modifiable** | Faible | Morris via gate | Oui | Ne pas promouvoir en doctrine méthode |
| `projects/campus360/03-pre-framing-decision-pack.md` | Decision pack clôture pré-cadrage | **Consultable** · **Modifiable avec vigilance** | Élevé (décisions Morris historisées) | Morris via gate + motif fort | Oui mais **proportion** | Préférer append/clarification ; éviter réécriture silencieuse des gates G1–G7 |
| Nouveau `projects/campus360/NN-*.md` | Prochain document documentaire | **Créable** (candidat) | Moyen | Morris via gate | Oui si naming cohérent | Pas de code ; Markdown seul ; justification besoin |
| Tout hors `projects/campus360/` | — | **Exclu** | — | — | Non | Denylist structurelle |
| Secrets, `.env`, clés, PII | — | **Exclu / protégé** | Critique | — | Non | Absents aujourd’hui ; restent interdits |
| `method/**`, `prompts/**`, `app/**`, `harness/**`, `.github/**` | Méthode / code / CI | **Exclu** | Critique | Cycle distinct | Non | Hors OPS1 action |

### 4.1 Synthèse des catégories

| Catégorie | Contenu constaté / candidat |
|-----------|-----------------------------|
| **Consultable** | Les 4 fichiers existants |
| **Créable** | Nouveaux Markdown sous `projects/campus360/` (ex. suite cadrage) — **absents** aujourd’hui |
| **Modifiable** | `README`, `01`, `02` ; `03` sous vigilance |
| **Protégée** | Décisions historisées dans `03` (sections gates) — modification non triviale |
| **Exclue** | Hors `projects/campus360/` ; code ; méthode ; prompts ; secrets ; autres projets |
| **Absente / à confirmer** | Docs cadrage détaillé `04+`, code Campus360, assets — **non présents** ; ne pas inventer |

### 4.2 Conflits possibles

| Zone | Conflit | Règle |
|------|---------|-------|
| Méthode SFIA | Apprentissage Campus360 ≠ standard méthode | CAPA + GO requis |
| Prompts | Hors allowlist | Cycle distinct |
| Code Studio | `app/**` / `harness/**` | Exclu de l’action OPS1 |
| Configuration / CI | `.github/**`, lockfiles | Exclu |
| Decision pack `03` | Réécriture des gates validés | Vigilance ; motif Morris obligatoire |

---

## 5. Règles d’allowlist opératoires (candidates)

1. **Exhaustivité** — chaque chemin read/create/modify est listé avant le gate.
2. **Distinction des rôles** — `allowedReads` / `allowedCreates` / `allowedModifies` séparés si besoin.
3. **Justification** — chaque fichier porte une raison liée à l’objectif.
4. **Proportion** — multi-fichiers seulement si le besoin le justifie.
5. **Interdits explicites** — `forbiddenPaths` + denylist structurelle.
6. **Ancrage** — `baseRef`, `headSha`, `branchName`, `contractHash` au GO.
7. **Gel** — allowlist immuable après GO.
8. **Extension post-GO** — refus ; nouveau contrat + nouveau gate.
9. **Rapport** — couverture de chaque fichier ; diff consolidé + par fichier.
10. **Default deny** — non listé = interdit.
11. **Pas de wildcard** non explicitée (`projects/campus360/**` seul = insuffisant sauf décision Morris contraire explicite listant la sémantique).
12. **Pas de secrets / lockfiles / code / méthode / prompts / config** sans cycle distinct.

---

## 6. Convention de branche candidate

### 6.1 Proposition à challenger

```text
scenario/campus360-<action-slug>-<session-id-court>
```

Exemple illustratif (non exécuté) : `scenario/campus360-clarify-vision-a1b2`

### 6.2 Règles candidates

| Règle | Proposition |
|-------|-------------|
| Base | Création depuis `origin/main` (ou base **explicitement** autorisée dans le contrat) |
| Localité | **Locale par défaut** ; **pas de push automatique** |
| Unicité | Un `branchName` distinct par action / session courte |
| Longueur | ≤ 80 caractères recommandés |
| Caractères | `[a-z0-9-]` après le préfixe ; slug ASCII ; pas d’espaces |
| Collision | Si branche existe déjà → STOP / nouveau nom / nouveau gate |
| Branche sale | Working tree dirty hors allowlist → refus démarrage |
| Reprise session | Même session sans nouvel actionId → pas de réutilisation opaque d’une branche d’une autre action |
| Cleanup | Après clôture / décision Morris ; **non automatique** dans OPS1 |
| Nouveau gate | Changement de base, de HEAD ancré, d’allowlist ou de branche ⇒ nouveau contrat + gate |

**Statut :** convention **candidate** jusqu’à validation Morris (`OPS1-SCENARIO-CAND-07`).

---

## 7. Lien avec les réserves FD-CAND-20 / 26

| Réserve | Apport de ce document | Statut après ce cycle |
|---------|----------------------|------------------------|
| FD-CAND-20 | Cartographie chemins/catégories + règles allowlist | **Précisée en candidat** — non clôturée |
| FD-CAND-26 | Détails opérationnels Campus360 (inventaire réel, exclusions, vigilance `03`) | **Précisée en candidat** — non clôturée |

---

## 8. Options si structure future change

Si de nouveaux fichiers apparaissent sous `projects/campus360/` :

1. Mettre à jour la cartographie (cycle doc ou amendement sous GO).
2. Ne **pas** les considérer allowlistés par défaut.
3. Réévaluer éligibilité (critères §11.4 du doc [`45`](./45-ops1-functional-design.md)).

Si Campus360 disparaissait ou devenait ambigu : **STOP — CAMPUS360 SCOPE REQUIRES MORRIS DECISION**. *Non applicable* : structure claire et présente.

---

## 9. Anti-claims

Pas de VALIDATED scénario · pas d’autorisation globale Campus360 · pas de READY FOR DELIVERY · pas de MVP · pas d’ouverture tech-arch / backlog / code.

---

## 10. Verdict documentaire

`scenario-scope-candidate`

Cartographie repo-informed **complète pour l’état actuel** (4 fichiers). Allowlist et branche **candidates**.


---

## Annexe C — Document 56 (complet)

# SFIA Studio — Decision pack scénario OPS1 (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `56-ops1-scenario-decision-pack.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-decisions-candidate` — **aucune décision validée** |
| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — consommé pour production candidate |
| **Gate de validation** | **AWAITING** `G-OPS1-SCENARIO-VAL` (GO Morris distinct) |
| **Décisions** | `OPS1-SCENARIO-CAND-01`…`22` |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage** | 2026-07-20 18:08:37 CEST |
| **Autorité** | Morris (L0) |

> Decision pack **candidat**. Aucune `OPS1-SCENARIO-CAND-*` n’est validée.
> Ne pas confondre consommation du GO d’**ouverture** avec validation du scénario.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Nombre de décisions | **22** |
| Statut collectif | `AWAITING G-OPS1-SCENARIO-VAL` |
| Projet pilote | Campus360 |
| Docs | `54` scénario · `55` cartographie/allowlist/branche · `56` décisions |
| Fermé | Tech-arch · backlog · code · delivery · live · MVP · production · Figma |

---

## 2. Décisions candidates

## OPS1-SCENARIO-CAND-01 — Projet pilote Campus360

| Champ | Contenu |
|-------|---------|
| **Sujet** | Projet pilote Campus360 |
| **Proposition** | Confirmer Campus360 comme projet pilote **exclusif** d’action OPS1. |
| **Options alternatives** | Autre projet workspace ; multi-projets. |
| **Impacts** | Ancre le scénario ; exclut les autres projets d’action. |
| **Risques** | Confusion OPS1 = feature Campus360. |
| **Dette** | Maintenir la distinction Studio vs Campus360. |
| **Recommandation** | Retenir Campus360 exclusif. |
| **Réserve** | FD-CAND-26 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-02 — Chemins éligibles constatés

| Champ | Contenu |
|-------|---------|
| **Sujet** | Chemins éligibles constatés |
| **Proposition** | Retenir comme éligibles les 4 Markdown sous `projects/campus360/` + futurs `NN-*.md` documentaires non protégés. |
| **Options alternatives** | Éligibilité limitée à un seul fichier ; éligibilité dossier entier via wildcard. |
| **Impacts** | Cartographie exploitable immédiatement. |
| **Risques** | Sur-interprétation « tout le dossier ». |
| **Dette** | Réviser si nouveaux fichiers. |
| **Recommandation** | Retenir la liste repo-informed + règle de révision. |
| **Réserve** | FD-CAND-20 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-03 — Catégories consultables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories consultables |
| **Proposition** | Les 4 fichiers existants sont consultables dans une allowlist. |
| **Options alternatives** | Lecture seule hors contrat. |
| **Impacts** | Permet contextualisation GPT/Cursor bornée. |
| **Risques** | Lecture excessive hors besoin. |
| **Dette** | Proportionner `allowedReads`. |
| **Recommandation** | Autoriser reads listés uniquement. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-04 — Catégories créables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories créables |
| **Proposition** | Autoriser la création de nouveaux Markdown sous `projects/campus360/` s’ils sont listés dans `allowedCreates`. |
| **Options alternatives** | Interdire toute création dans OPS1. |
| **Impacts** | Couvre le cas cadrage détaillé / suite documentaire. |
| **Risques** | Création hors naming / hors besoin. |
| **Dette** | Convention de nommage à respecter. |
| **Recommandation** | Création possible si listée et justifiée. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-05 — Catégories modifiables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories modifiables |
| **Proposition** | `README`, `01`, `02` modifiables ; `03` modifiable avec vigilance (gates historisés). |
| **Options alternatives** | Tout en lecture seule ; `03` totalement gelé. |
| **Impacts** | Preuve d’écriture réelle possible. |
| **Risques** | Réécriture silencieuse des décisions Morris dans `03`. |
| **Dette** | Motif fort obligatoire pour `03`. |
| **Recommandation** | Retenir vigilance sur `03`. |
| **Réserve** | FD-CAND-20 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-06 — Exclusions structurelles

| Champ | Contenu |
|-------|---------|
| **Sujet** | Exclusions structurelles |
| **Proposition** | Exclure hors `projects/campus360/`, méthode, prompts, app, harness, `.github`, lockfiles, secrets, autres projets. |
| **Options alternatives** | Allowlist large workspace. |
| **Impacts** | Fail-closed structurel. |
| **Risques** | Tentative d’élargissement implicite. |
| **Dette** | Denylist à rappeler dans chaque contrat. |
| **Recommandation** | Retenir exclusions listées. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-07 — Convention de branche

| Champ | Contenu |
|-------|---------|
| **Sujet** | Convention de branche |
| **Proposition** | Adopter candidate `scenario/campus360-<action-slug>-<session-id-court>` (locale, sans push auto). |
| **Options alternatives** | Réutiliser branche design ; nom libre non préfixé. |
| **Impacts** | Traçabilité Git locale. |
| **Risques** | Collision / branche sale. |
| **Dette** | Cleanup non automatique. |
| **Recommandation** | Retenir la convention candidate §6 doc 55. |
| **Réserve** | FD-CAND-26 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-08 — Allowlist exhaustive avant gate

| Champ | Contenu |
|-------|---------|
| **Sujet** | Allowlist exhaustive avant gate |
| **Proposition** | Toute action présente une allowlist 1..n exhaustive avant décision Morris. |
| **Options alternatives** | Allowlist après GO ; wildcard dossier. |
| **Impacts** | Alignement FR-026…032. |
| **Risques** | Oubli de fichier nécessaire. |
| **Dette** | Correction avant GO. |
| **Recommandation** | Retenir exhaustivité avant gate. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-09 — Règle multi-fichiers

| Champ | Contenu |
|-------|---------|
| **Sujet** | Règle multi-fichiers |
| **Proposition** | Multi-fichiers autorisé **uniquement si nécessaire** ; pas de plafond mono-fichier. |
| **Options alternatives** | Revenir au mono-fichier obligatoire. |
| **Impacts** | Alignement amendement Morris 2026-07-20 13:36 CEST. |
| **Risques** | Allowlist disproportionnée. |
| **Dette** | Justification par fichier. |
| **Recommandation** | Retenir proportionnalité. |
| **Réserve** | FD-CAND-20 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-10 — Scénario nominal

| Champ | Contenu |
|-------|---------|
| **Sujet** | Scénario nominal |
| **Proposition** | Adopter le scénario nominal §4 du doc 54 (16 étapes). |
| **Options alternatives** | Scénario purement simulé / scripté. |
| **Impacts** | Preuve opératoire alignée UX/flows. |
| **Risques** | Sur-scripting des phrases. |
| **Dette** | Ne pas figer les microcopies conversationnelles. |
| **Recommandation** | Retenir §4. |
| **Réserve** | UX-R02 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-11 — Scénario sans action

| Champ | Contenu |
|-------|---------|
| **Sujet** | Scénario sans action |
| **Proposition** | Adopter variante `ACTION_NOT_REQUIRED` (§5 doc 54). |
| **Options alternatives** | Action toujours obligatoire. |
| **Impacts** | Prouve le caractère facultatif de l’action. |
| **Risques** | Confusion avec abandon. |
| **Dette** | Signal explicite distinct de NO-GO. |
| **Recommandation** | Retenir la variante. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-12 — Correction avant GO

| Champ | Contenu |
|-------|---------|
| **Sujet** | Correction avant GO |
| **Proposition** | CORRIGER invalide l’ancien contrat ; nouveau hash + nouveau gate. |
| **Options alternatives** | Mutation in-place du contrat GO-able. |
| **Impacts** | Alignement FR-030 amont. |
| **Risques** | Réutilisation accidentelle ancien hash. |
| **Dette** | Journaliser invalidation. |
| **Recommandation** | Retenir invalidation + nouveau contrat. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-13 — Extension après GO

| Champ | Contenu |
|-------|---------|
| **Sujet** | Extension après GO |
| **Proposition** | Extension allowlist post-GO refusée ; nouveau contrat + gate obligatoires. |
| **Options alternatives** | Patch allowlist à chaud. |
| **Impacts** | Fail-closed ; preuve PN-03. |
| **Risques** | Pression à élargir pendant exécution. |
| **Dette** | STOP si tentative en cours d’exécution. |
| **Recommandation** | Retenir refus strict. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-14 — NO-GO / abandon

| Champ | Contenu |
|-------|---------|
| **Sujet** | NO-GO / abandon |
| **Proposition** | NO-GO et ABANDONNER : aucun effet Git d’exécution ; journalisation ; suite conversationnelle possible. |
| **Options alternatives** | Effacer la session. |
| **Impacts** | Traçabilité décisionnelle. |
| **Risques** | Confusion NO-GO vs ACTION_NOT_REQUIRED. |
| **Dette** | Motifs distincts. |
| **Recommandation** | Retenir §8 doc 54. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-15 — STOP

| Champ | Contenu |
|-------|---------|
| **Sujet** | STOP |
| **Proposition** | STOP prioritaire ; arrêt / non-démarrage ; preuves conservées ; pas de reprise implicite. |
| **Options alternatives** | STOP = pause temporaire auto-reprise. |
| **Impacts** | Sécurité opératoire. |
| **Risques** | Reprise ambiguë. |
| **Dette** | Reprise = décision Morris explicite. |
| **Recommandation** | Retenir §9 doc 54. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-16 — Échec Cursor

| Champ | Contenu |
|-------|---------|
| **Sujet** | Échec Cursor |
| **Proposition** | Rapport d’échec ; pas de retry auto ; analyse candidate ; décision Morris. |
| **Options alternatives** | Retry automatique N fois. |
| **Impacts** | Contrôle Morris. |
| **Risques** | Boucles coûteuses (FinOps). |
| **Dette** | FD-CAND-15 chiffres OPEN. |
| **Recommandation** | Retenir §10 doc 54. |
| **Réserve** | FD-CAND-15 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-17 — Rapport incomplet

| Champ | Contenu |
|-------|---------|
| **Sujet** | Rapport incomplet |
| **Proposition** | Clôture nominale interdite ; re-exécution même hash bloquée ; correction ou abandon. |
| **Options alternatives** | Clôture avec dette silencieuse. |
| **Impacts** | Intégrité de preuve. |
| **Risques** | Pression à clôturer. |
| **Dette** | Flag d’incomplétude visible UX. |
| **Recommandation** | Retenir §11 doc 54. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-18 — Preuves négatives

| Champ | Contenu |
|-------|---------|
| **Sujet** | Preuves négatives |
| **Proposition** | Exiger PN-01…09 comme batterie minimale de la démonstration OPS1. |
| **Options alternatives** | Uniquement happy path. |
| **Impacts** | Crédibilité fail-closed. |
| **Risques** | Non-exécution des PN. |
| **Dette** | Planifier PN dans la démo. |
| **Recommandation** | Retenir §12 doc 54. |
| **Réserve** | live |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-19 — Critères de réussite

| Champ | Contenu |
|-------|---------|
| **Sujet** | Critères de réussite |
| **Proposition** | Adopter la matrice §14 doc 54 comme critères de succès de démonstration. |
| **Options alternatives** | Critères delivery/MVP. |
| **Impacts** | Borne la preuve opératoire. |
| **Risques** | Glissement vers claims production. |
| **Dette** | Anti-claims obligatoires. |
| **Recommandation** | Retenir la matrice. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-20 — Cleanup branche d’exécution

| Champ | Contenu |
|-------|---------|
| **Sujet** | Cleanup branche d’exécution |
| **Proposition** | Cleanup local (et distant si jamais poussée) uniquement après GO Morris distinct ; pas automatique. |
| **Options alternatives** | Cleanup auto en fin de session. |
| **Impacts** | Évite perte de preuves. |
| **Risques** | Branches orphelines. |
| **Dette** | Procédure post-démo. |
| **Recommandation** | Retenir cleanup gouverné. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-21 — Limites FinOps

| Champ | Contenu |
|-------|---------|
| **Sujet** | Limites FinOps |
| **Proposition** | FinOps reste placeholder ; aucun plafond numérique figé dans ce cycle. |
| **Options alternatives** |  inventer des seuils. |
| **Impacts** | Évite fausse précision. |
| **Risques** | Coût live non borné numériquement. |
| **Dette** | FD-CAND-15 avant live. |
| **Recommandation** | Maintenir OPEN. |
| **Réserve** | FD-CAND-15 |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |
## OPS1-SCENARIO-CAND-22 — Condition d’ouverture architecture technique

| Champ | Contenu |
|-------|---------|
| **Sujet** | Condition d’ouverture architecture technique |
| **Proposition** | L’architecture technique OPS1 reste **fermée** ; ouverture uniquement par GO Morris explicite distinct après validation scénario (si retenue). |
| **Options alternatives** | Ouvrir tech-arch automatiquement après ce document. |
| **Impacts** | Respect du routage SFIA. |
| **Risques** | Ouverture prématurée. |
| **Dette** | Gate tech-arch séparé. |
| **Recommandation** | Ne pas ouvrir tech-arch dans ce cycle. |
| **Réserve** | — |
| **Décision Morris** | `AWAITING G-OPS1-SCENARIO-VAL` |


---

## 3. Matrice de couverture minimale

| Thème requis | Décision(s) |
|--------------|-------------|
| Projet pilote Campus360 | CAND-01 |
| Chemins éligibles | CAND-02 |
| Consultables / créables / modifiables | CAND-03…05 |
| Exclusions | CAND-06 |
| Multi-fichiers | CAND-09 |
| Allowlist exhaustive | CAND-08 |
| Convention de branche | CAND-07 |
| Scénario nominal | CAND-10 |
| Sans action | CAND-11 |
| Correction avant GO | CAND-12 |
| Extension après GO | CAND-13 |
| NO-GO | CAND-14 |
| STOP | CAND-15 |
| Échec Cursor | CAND-16 |
| Rapport incomplet | CAND-17 |
| Critères de réussite | CAND-19 |
| Preuves négatives | CAND-18 |
| Cleanup | CAND-20 |
| FinOps | CAND-21 |
| Ouverture architecture technique | CAND-22 |

---

## 4. Réserves

FD-CAND-13 · FD-CAND-15 · FD-CAND-20 · FD-CAND-26 · UX-R01…R04 · live · CI · isolation · tech-arch · stack/protocole.

FD-CAND-20/26 sont **précisées** par docs 54–55 mais **non clôturées**.

---

## 5. Anti-claims

Aucune décision marquée VALIDATED. Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · tech-arch ouverte.

---

## 6. Verdict

`scenario-decisions-candidate`

`OPS1 SCENARIO DECISIONS READY FOR MORRIS VALIDATION`

En attente du GO Morris de validation sous `G-OPS1-SCENARIO-VAL`.


---

## Annexe D — Diff complet des fichiers modifiés

```diff
diff --git a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
index b15b29d..40da148 100644
--- a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
+++ b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
@@ -9,7 +9,7 @@
 | **Baseline** | SFIA v2.6 opérationnelle sur `main` |
 | **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
 | **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; cadrage `41`–`44` **intégré** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1`) — post-merge + cleanup **terminés** ; conception fonctionnelle `45`–`47` **intégrée** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) — post-merge **validé** (2026-07-20 14:29 CEST) ; UX OPS1 `51`–`53` **validés avec réserves** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; POC **maintenu** ; réserves fonctionnelles **inchangées** ; architecture technique, backlog, delivery, live, MVP **fermés** |
-| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
+| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**candidats** ; validation `AWAITING G-OPS1-SCENARIO-VAL`) |
 | **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
 | **Intégration cadrage** | PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) MERGED — squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
 | **Intégration conception fonctionnelle** | PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) MERGED — squash `6cbf37482c7d384ef5630259d58a2e223a607925` |
@@ -19,7 +19,7 @@
 > **Cadrage validé avec réserves** sous `G-OPS1-FRAMING-VAL` — conversation GPT réelle et libre au centre ; action Markdown gouvernée.
 > Documents `41`–`44` **intégrés sur `main`** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1394bb4d550eeff1dd64669b3d405579ad`) ; post-merge et cleanup **terminés**.
 > Conception fonctionnelle OPS1 (`45`–`47`) **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST), **intégrée et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash merge `6cbf37482c7d384ef5630259d58a2e223a607925`) ; post-merge **validé** (2026-07-20 14:29 CEST).
-> Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé). Architecture technique, backlog, delivery, live et MVP **restent fermés**. Aucun cycle suivant ouvert automatiquement.
+> Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé). Scénario OPS1 docs `54`–`56` **candidats** (ouverture documentaire sous `G-OPS1-SCENARIO-VAL` ; validation Morris **AWAITING**). Architecture technique, backlog, delivery, live et MVP **restent fermés**. Aucun cycle suivant ouvert automatiquement.
 > Aucun claim MVP, production-ready ou industrialisation.

 ---
@@ -365,4 +365,4 @@ Conversation réelle et libre
 `SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`

 Cadrage **intégré** et **canonique** sur `main` (PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235)). Conception fonctionnelle OPS1 **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST), **intégrée et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) — post-merge **validé** (2026-07-20 14:29 CEST) — voir [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md).
-Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST ; UX-R01…UX-R04 ouvertes). Gates architecture technique / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Aucun cycle suivant ouvert automatiquement.
+Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST ; UX-R01…UX-R04 ouvertes). Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **candidats** — validation `AWAITING G-OPS1-SCENARIO-VAL`. Gates architecture technique / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Aucun cycle suivant ouvert automatiquement.
diff --git a/projects/sfia-studio/45-ops1-functional-design.md b/projects/sfia-studio/45-ops1-functional-design.md
index ef6b645..b58ca63 100644
--- a/projects/sfia-studio/45-ops1-functional-design.md
+++ b/projects/sfia-studio/45-ops1-functional-design.md
@@ -12,7 +12,7 @@
 | **Branche de conception** | `design/sfia-studio-ops1-functional` — fusionnée via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) ; branche conservée temporairement en attente du cleanup Morris |
 | **Statut** | `functional-design-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 13:46 CEST) ; amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) ; **intégré et canonique sur `main`** ; post-merge **validé** (2026-07-20 14:29 CEST) ; réserves 13, 15, 20, 26 **inchangées** ; aucun cycle suivant ouvert automatiquement |
 | **Autorité** | Morris (L0) |
-| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
+| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**candidats** ; `AWAITING G-OPS1-SCENARIO-VAL`) |
 | **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
 | **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
 | **Horodatage production** | 2026-07-20 13:10 CEST |
@@ -543,7 +543,7 @@ Souhaitables `43` §6.2 : couverts comme **candidats** (coût visible, condensat
 | Stack / BDD / API / protocole | Cycle **6 — Architecture technique** (`G-OPS1-TECH-ARCH` si établi) | **Routé** — hors réserves conception |
 | Découpage I1–I7 en stories | `G-OPS1-BACKLOG` | Fermé |
 | Implémentation / live GPT / Cursor | Delivery / live (gates distincts) | Fermé |
-| Cartographie chemins éligibles Campus360 + branche + allowlist | `G-OPS1-SCENARIO-VAL` | Réserve conception |
+| Cartographie chemins éligibles Campus360 + branche + allowlist | `G-OPS1-SCENARIO-VAL` | Docs candidats [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) produits — **validation Morris AWAITING** ; réserve conception non clôturée |
 | Plafonds FinOps numériques | GO avant live | Réserve conception (non bloquante pour FUNC-DESIGN-VAL) |
 | Mécanisme continuation après CLOSE | Archi fonctionnelle / UX | Réserve conception (`OPS1-FD-CAND-13`) |

@@ -607,7 +607,8 @@ Valider :
 - scénario de preuve.

 **Ne plus** valider un fichier unique obligatoire.
-**Non choisis dans ce cycle :** liste globale définitive de chemins réels ; nom de branche exact ; demande métier exacte.
+**État scénario (candidat) :** cartographie repo-informed, exclusions, convention de branche et règles d’allowlist proposées dans [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) — **validation Morris AWAITING** (`G-OPS1-SCENARIO-VAL`).
+**Non figés tant que non validés :** liste définitive ; nom de branche exact ; demande métier exacte de démonstration.

 ---

diff --git a/projects/sfia-studio/48-ops1-functional-architecture.md b/projects/sfia-studio/48-ops1-functional-architecture.md
index 46b71c4..be2fb08 100644
--- a/projects/sfia-studio/48-ops1-functional-architecture.md
+++ b/projects/sfia-studio/48-ops1-functional-architecture.md
@@ -15,7 +15,7 @@
 | **Décisions** | `OPS1-FA-CAND-01`…`22` **validées** (réserves maintenues) |
 | **Horodatage validation Morris** | 2026-07-20 15:30 CEST |
 | **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`47`](./47-ops1-functional-decision-pack.md) |
-| **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves**) |
+| **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves**) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**candidats**) |
 | **Horodatage production** | 2026-07-20 15:14 CEST |

 > Architecture **fonctionnelle** du Vertical Slice Opérationnel 1 — **validée avec réserves** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
@@ -328,7 +328,7 @@ Audit Journal reconstruit l’historique (CAP-21).
 |------|---------------|------|
 | UX/UI | Surfaces, Figma, microcopy visuelle | `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (UX-R01…UX-R04) |
 | Architecture technique | Stack, BDD, API, protocole, isolation OS/réseau | `G-OPS1-TECH-ARCH` (fermé) |
-| Scénario | Cartographie chemins Campus360, convention branche | `G-OPS1-SCENARIO-VAL` (fermé) |
+| Scénario | Cartographie chemins Campus360, convention branche | Docs candidats `54`–`56` — ouverture documentaire consommée ; validation `AWAITING G-OPS1-SCENARIO-VAL` |
 | Backlog | Découpage I1–I7 opérationnel | `G-OPS1-BACKLOG` (fermé) |

 Aucune ouverture automatique.
@@ -373,4 +373,4 @@ Gate `G-OPS1-FUNC-ARCH` consommé — 2026-07-20 15:14 CEST.
 Gate `G-OPS1-FUNC-ARCH-VAL` **consommé** — Morris — 2026-07-20 15:30 CEST.
 11 domaines D1–D11 retenus ; 14 composants fonctionnels retenus ; frontières Morris / GPT / harness / Cursor / Git / persistance retenues ; couverture CAP/FLOW/FR confirmée.
 Réserves maintenues (continuation CLOSE ; FinOps numériques ; Campus360 cartographie/branche ; live ; CI ; isolation ; FD-CAND-13/15/20/26).
-UX : `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (2026-07-20 16:52 CEST) ; réserves UX-R01…UX-R04 maintenues. Architecture technique (`G-OPS1-TECH-ARCH`), backlog, delivery, live et MVP : **fermés** — aucun cycle suivant ouvert automatiquement.
+UX : `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (2026-07-20 16:52 CEST) ; réserves UX-R01…UX-R04 maintenues. Scénario : docs `54`–`56` **candidats** — validation `AWAITING G-OPS1-SCENARIO-VAL`. Architecture technique (`G-OPS1-TECH-ARCH`), backlog, delivery, live et MVP : **fermés** — aucun cycle suivant ouvert automatiquement.
diff --git a/projects/sfia-studio/51-ops1-ux-ui-contract.md b/projects/sfia-studio/51-ops1-ux-ui-contract.md
index 03e2e24..0ef5300 100644
--- a/projects/sfia-studio/51-ops1-ux-ui-contract.md
+++ b/projects/sfia-studio/51-ops1-ux-ui-contract.md
@@ -11,7 +11,7 @@
 | **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
 | **Branche** | `design/sfia-studio-ops1-ux-ui` |
 | **Statut** | `ux-ui-validated-with-reservations` |
-| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) |
+| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**candidats** ; `AWAITING G-OPS1-SCENARIO-VAL`) |
 | **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`50`](./50-ops1-functional-architecture-decision-pack.md) |
 | **Figma** | fileKey `lrjA1WEyRpL05vKR8k29LO` · page `UX-B — OPS1` (`61:2`) — **référence visuelle desktop validée avec réserves** |
 | **Horodatage production** | 2026-07-20 16:15 CEST |
@@ -366,9 +366,9 @@ Confirmés sous validation Morris (2026-07-20 16:52 CEST) — sous réserves UX-

 - Continuation après CLOSE (FD-CAND-13).
 - FinOps numériques (FD-CAND-15).
-- Cartographie / catégories Campus360 (FD-CAND-20).
-- Détails opérationnels Campus360 (FD-CAND-26).
-- Convention de branche scénario.
+- Cartographie / catégories Campus360 (FD-CAND-20) — précisée en **candidat** dans [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) ; non clôturée.
+- Détails opérationnels Campus360 (FD-CAND-26) — précisés en **candidat** ; non clôturés.
+- Convention de branche scénario — candidate dans [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) §6.
 - Preuves GPT / Cursor live ; CI distante ; isolation OS/réseau.

 ---
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 3b0d6bf..47445e7 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Choix Morris du cycle suivant — scénario, architecture technique, backlog ou autre cycle explicitement ouvert ; tech-arch / backlog / delivery / live / MVP — **non ouverts automatiquement** |
+| **Prochaine décision** | Validation Morris du scénario OPS1 (`G-OPS1-SCENARIO-VAL`) — docs `54`–`56` **candidats** ; architecture technique, backlog, delivery, live, MVP — **non ouverts automatiquement** |

 ---

@@ -368,11 +368,11 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 ## 8. Prochaine décision

-1. Choix Morris du cycle suivant — scénario (`G-OPS1-SCENARIO-VAL`), architecture technique, backlog ou autre cycle **explicitement** ouvert.
+1. Validation Morris du scénario OPS1 — docs candidats [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) · `AWAITING G-OPS1-SCENARIO-VAL`.
 2. Architecture technique / backlog / delivery / live GPT-Cursor / MVP — **FERMÉS** (non ouverts automatiquement).
 3. Réserves OPS1 maintenues (FD-CAND-13/15/20/26 · FinOps · Campus360 · live · CI · isolation · UX-R01…UX-R04).

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 FRAMING / DESIGN / ARCH / UX VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 SCENARIO CANDIDATE — AWAITING G-OPS1-SCENARIO-VAL`


 ---
@@ -387,6 +387,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** ; **intégrés** sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` ; cleanup branche effectué |
 | Conception / archi OPS1 | Docs `45`–`50` — **VALIDATED WITH RESERVATIONS** ; intégrés (PR #237 / #239) |
 | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
+| Scénario OPS1 | Docs `54`–`56` — **CANDIDATES** (ouverture documentaire sous `G-OPS1-SCENARIO-VAL` ; validation Morris **AWAITING**) ; cartographie Campus360 repo-informed |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -438,4 +439,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [52-ops1-visual-contract-and-figma-spec.md](./52-ops1-visual-contract-and-figma-spec.md) | Contrat visuel / Figma — page `61:2` référence desktop validée |
 | [53-ops1-ux-ui-decision-pack.md](./53-ops1-ux-ui-decision-pack.md) | `OPS1-UX-CAND-01`…`20` — **VALIDATED WITH RESERVATIONS** ; UX-R01…UX-R04 ouvertes |

-*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing/design/arch/UX VALIDATED WITH RESERVATIONS — MVP / delivery non ouverts.*
+### Scénario opérationnel OPS1 (candidats — validation `AWAITING G-OPS1-SCENARIO-VAL`)
+
+| Document | Rôle |
+|----------|------|
+| [54-ops1-operational-scenario.md](./54-ops1-operational-scenario.md) | Scénario nominal, variantes, PN, critères — **CANDIDATE** |
+| [55-ops1-campus360-scope-and-allowlist-rules.md](./55-ops1-campus360-scope-and-allowlist-rules.md) | Cartographie Campus360 + allowlist + branche — **CANDIDATE** |
+| [56-ops1-scenario-decision-pack.md](./56-ops1-scenario-decision-pack.md) | `OPS1-SCENARIO-CAND-01`…`22` — **AWAITING G-OPS1-SCENARIO-VAL** |
+
+*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing/design/arch/UX VALIDATED WITH RESERVATIONS — scénario CANDIDATE — MVP / delivery non ouverts.*

```
