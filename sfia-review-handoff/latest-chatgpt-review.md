# SFIA Studio — Review Handoff Git — OPS1 Scénario PR readiness (Draft PR #241)

- **Date/heure/fuseau republication :** 2026-07-20 18:44:00 CEST
- **Repository :** mcleland147/sfia-workspace
- **Cycle handoff :** 13 — PR readiness + publication Git
- **Profil :** Standard
- **Branche handoff :** `sfia/review-handoff`
- **Chemin canonique :** `sfia-review-handoff/latest-chatgpt-review.md`
- **Handoff remplacé :** `72a813fed86fad7e3619bb06c6e2e25c64540ac6`
- **GO Morris :** `GO COMMIT / PUSH / DRAFT PR — OPS1 SCENARIO VALIDATED WITH AMENDMENTS`
- **Branche projet :** `design/sfia-studio-ops1-scenario`
- **Commit projet :** `d248b9db91f4f10c16885c9f931f4cdd0f966316`
- **PR :** [#241](https://github.com/mcleland147/sfia-workspace/pull/241) — **Draft**

> Verdict : `OPS1 SCENARIO COMMITTED AND PUBLISHED — DRAFT PR READY FOR CHATGPT REVIEW`
> Ne constitue pas un GO merge. N’ouvre ni architecture technique, ni backlog, ni delivery, ni live.

---

# Review Pack — OPS1 Scenario PR Readiness

- **Date/heure/fuseau :** 2026-07-20 18:44:00 CEST
- **Repository :** mcleland147/sfia-workspace
- **Branche :** `design/sfia-studio-ops1-scenario`
- **HEAD initial (avant commit) :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **HEAD après commit / distant :** `d248b9db91f4f10c16885c9f931f4cdd0f966316`
- **Parent :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **origin/main :** `5a595b0dfcc01302ce8e7f729fee2dd383735388` (inchangé)
- **Merge-base :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **Cycle / profil :** 13 — PR readiness + publication · Standard
- **GO Morris :** `GO COMMIT / PUSH / DRAFT PR — OPS1 SCENARIO VALIDATED WITH AMENDMENTS`

## État Git

### Avant commit
9 modifiés + 3 créés (54–56) ; staged vide ; temporaires untracked.

### Après push
```
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/

```

## Fichiers autorisés (12) — publiés

### Modifiés (9)
41 · 42 · 43 · 45 · 46 · 48 · 49 · 51 · README

### Créés (3)
54 · 55 · 56

## Fichiers interdits (non touchés)
`.tmp-sfia-review/**` · packs 44/47/50/53 · `projects/campus360/**` · method/prompts/app/harness · code/Figma

## Diff commit

```
d248b9d docs: validate OPS1 operational scenario
 .../41-operational-vertical-slice-1-framing.md     |   6 +-
 ...onal-vertical-slice-1-flow-and-session-model.md |  15 +
 ...-vertical-slice-1-scope-and-success-criteria.md |   1 +
 projects/sfia-studio/45-ops1-functional-design.md  |  12 +-
 .../46-ops1-functional-flows-and-rules.md          |   6 +-
 .../sfia-studio/48-ops1-functional-architecture.md |  24 +-
 ...-ops1-functional-components-and-interactions.md |  23 +-
 projects/sfia-studio/51-ops1-ux-ui-contract.md     |  16 +-
 .../sfia-studio/54-ops1-operational-scenario.md    | 341 +++++++++++++++++
 .../55-ops1-campus360-scope-and-allowlist-rules.md | 204 +++++++++++
 .../sfia-studio/56-ops1-scenario-decision-pack.md  | 406 +++++++++++++++++++++
 projects/sfia-studio/README.md                     |  19 +-
 12 files changed, 1036 insertions(+), 37 deletions(-)

```

### Name-status

```
M	projects/sfia-studio/41-operational-vertical-slice-1-framing.md
M	projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
M	projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
M	projects/sfia-studio/45-ops1-functional-design.md
M	projects/sfia-studio/46-ops1-functional-flows-and-rules.md
M	projects/sfia-studio/48-ops1-functional-architecture.md
M	projects/sfia-studio/49-ops1-functional-components-and-interactions.md
M	projects/sfia-studio/51-ops1-ux-ui-contract.md
A	projects/sfia-studio/54-ops1-operational-scenario.md
A	projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md
A	projects/sfia-studio/56-ops1-scenario-decision-pack.md
M	projects/sfia-studio/README.md

```

## Contrôles PR readiness

- `git diff --check` OK
- Liens / références 41–56 OK
- Scénario `validated-with-amendments`
- Gate `G-OPS1-SCENARIO-VAL` consommé — Morris — 2026-07-20 18:34:47 CEST
- 22 décisions `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST`
- 0 `AWAITING G-OPS1-SCENARIO-VAL`
- FD-CAND-13/20/26 levées (périmètre OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues
- Isolation/CI routées tech-arch
- `03` protégé par défaut ; Campus360 intact ; pas d’autorisation globale ; pas de wildcard
- Tech-arch / backlog / delivery / live / MVP fermés
- Anti-claims conformes
- Packs 44/47/50/53 intacts
- Staged = exactement 12 fichiers
- Verdict readiness : `OPS1 SCENARIO PR READINESS PASSED — READY FOR COMMIT`

## Commit / push / PR

| Élément | Valeur |
|---------|--------|
| Message | `docs: validate OPS1 operational scenario` |
| SHA | `d248b9db91f4f10c16885c9f931f4cdd0f966316` |
| Fichiers | 12 · +1036 / −37 |
| Push | `origin/design/sfia-studio-ops1-scenario` |
| SHA distant | `d248b9db91f4f10c16885c9f931f4cdd0f966316` |
| PR | [#241](https://github.com/mcleland147/sfia-workspace/pull/241) |
| Titre | docs: validate OPS1 operational scenario |
| Base / head | `main` ← `design/sfia-studio-ops1-scenario` |
| Statut | **Draft** · OPEN |
| Changed files | 12 · +1036 / −37 |
| Mergeability | UNKNOWN (au moment de la création) |

## Décisions / réserves

- 22 / 22 validées avec amendements
- FD-CAND-13 : `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`
- FD-CAND-20 : `LIFTED FOR OPS1 SCENARIO`
- FD-CAND-26 : `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT`
- FD-CAND-15 : `MAINTAINED UNTIL FINOPS/LIVE GATE`
- UX-R01…R04 maintenues
- Isolation/CI : `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE`

## Risques / protections

- Merge non autorisé sans GO Morris distinct
- Pas d’élargissement hors 12 fichiers
- Campus360 non modifié dans le commit

## Actions interdites non effectuées

Pas de merge · pas de cleanup · pas de PR non-draft · pas de force push · pas de modif main · pas de code/Figma/méthode · pas de tech-arch/backlog

## Décision Morris restante

GO merge distinct après revue ChatGPT / PR readiness finale.

## Verdict

`OPS1 SCENARIO COMMITTED AND PUBLISHED — DRAFT PR READY FOR CHATGPT REVIEW`

---

## Annexe A — Document 54 (complet)

# SFIA Studio — Scénario opérationnel OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `54-ops1-operational-scenario.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Typologie** | DOC / SCENARIO / UX / GOVERNANCE / VALIDATION |
| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — **consommé pour production documentaire candidate** |
| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **consommé** — Morris — 2026-07-20 18:34:47 CEST — **VALIDATION AVEC AMENDEMENTS** |
| **Statut** | `validated-with-amendments` — **validé Morris avec amendements** (2026-07-20 18:34:47 CEST) |
| **Branche** | `design/sfia-studio-ops1-scenario` |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Companions** | [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
| **Héritage** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) |
| **Autorité** | Morris (L0) |
| **Horodatage production** | 2026-07-20 18:08:37 CEST |

> Scénario opérationnel **validé avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
> Décisions `OPS1-SCENARIO-CAND-01…22` **validées avec amendements** — voir [`56`](./56-ops1-scenario-decision-pack.md).
> **N’ouvre pas** l’architecture technique, le backlog, le code, la delivery, le live, le MVP ni la production.

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
- Résolution FinOps numérique (FD-CAND-15 maintenue) ; isolation OS/réseau et CI (routées tech-arch, non conçues ici).
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
| Réserves | FD-CAND-13/20/26 **levées** (périmètre OPS1) · FD-CAND-15 **maintenue** · UX-R01…R04 **maintenues** · isolation/CI **routées** · live **fermé** |
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
15. **Clôture** — Session `CLOSED` → **immuable** (lecture seule) ; pas de reprise implicite d’exécution.
16. **Consultation** — Historique, décisions, preuves et diffs restent consultables ; Git prime sur le contenu fichiers.
17. **Reprise d’activité (si besoin)** — Toute nouvelle activité crée une **continuation liée** (nouvel identifiant, référence explicite à la session source) ; **aucune** réouverture silencieuse de la session clôturée (FD-CAND-13 levée).

---

## 4bis. Continuation liée après CLOSE (FD-CAND-13 — levée)

| Règle | Contenu |
|-------|---------|
| Immutabilité | Une session `CLOSED` **ne mute jamais** |
| Lecture | Consultation en lecture seule **autorisée** |
| Réouverture silencieuse | **Interdite** |
| Nouvelle activité | Crée une **continuation liée** |
| Identité | Nouvel `sessionId` (ou id de continuation) + référence explicite à la session source |
| Historique source | **Jamais muté** |
| Nouvelle action | Exige **son propre contrat** + **son propre gate** Morris |
| Ambiguïté de contexte | `STOP`, `FAILED` ou lecture seule — pas de reprise opaque |
| ABANDONED / STOPPED / FAILED | **Non** automatiquement réouverts |

Statut : `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`

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
| Clôture immuable + continuation liée | État CLOSED + lien | Session | Morris | Lecture seule ; reprise = continuation | Mutation session source | FD-13 **levée** |
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

## 17. Réserves — état après validation

| Réserve | Statut |
|---------|--------|
| FD-CAND-13 | `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` |
| FD-CAND-20 | `LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
| FD-CAND-26 | `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
| FD-CAND-15 | `MAINTAINED UNTIL FINOPS/LIVE GATE` |
| UX-R01…R04 | **Maintenues** (UX-R01 tablette/mobile après desktop ; UX-R02 microcopies avant delivery ; UX-R03 DS avant industrialisation ; UX-R04 transverse) |
| Isolation / CI | `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` |
| Tech-arch / backlog / delivery / live / MVP | **Fermés** |

---

## 18. Anti-claims

Ce document **n’affirme pas** : READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE · Campus360 entièrement autorisé · backlog ouvert · code autorisé.

---

## 19. Verdict documentaire

`validated-with-amendments`

`OPS1 SCENARIO VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL`

`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`


---

## Annexe B — Document 55 (complet)

# SFIA Studio — Campus360 : périmètre, cartographie et règles d’allowlist OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `55-ops1-campus360-scope-and-allowlist-rules.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-scope-validated-with-amendments` — **validé avec amendements** (2026-07-20 18:34:47 CEST) |
| **Gate** | `G-OPS1-SCENARIO-VAL` — **consommé** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage** | 2026-07-20 18:08:37 CEST |
| **Autorité** | Morris (L0) |

> Cartographie **repo-informed** et règles d’allowlist **validées avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
> **Campus360 éligible ≠ autorisation globale.**
> FD-CAND-20 / FD-CAND-26 **levées** pour le périmètre OPS1 / Campus360 OPS1 ; `03` **protégé par défaut**.

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
| `projects/campus360/03-pre-framing-decision-pack.md` | Decision pack clôture pré-cadrage | **Consultable** (si `allowedReads`) · **Protégé par défaut** (hors `allowedModifies` nominal) | Élevé (décisions Morris historisées) | Gate Morris **distinct** + cycle adapté + allowlist dédiée | Éligible en lecture ; **non** modifiable dans le scénario nominal OPS1 | Aucune modification de `03` dans le scénario nominal ; future modification seulement avec justification explicite |
| Nouveau `projects/campus360/NN-*.md` | Prochain document documentaire | **Créable** (candidat) | Moyen | Morris via gate | Oui si naming cohérent | Pas de code ; Markdown seul ; justification besoin |
| Tout hors `projects/campus360/` | — | **Exclu** | — | — | Non | Denylist structurelle |
| Secrets, `.env`, clés, PII | — | **Exclu / protégé** | Critique | — | Non | Absents aujourd’hui ; restent interdits |
| `method/**`, `prompts/**`, `app/**`, `harness/**`, `.github/**` | Méthode / code / CI | **Exclu** | Critique | Cycle distinct | Non | Hors OPS1 action |

### 4.1 Synthèse des catégories

| Catégorie | Contenu constaté / candidat |
|-----------|-----------------------------|
| **Consultable** | Les 4 fichiers existants **uniquement s’ils figurent dans `allowedReads`** |
| **Créable** | Nouveaux `NN-*.md` sous `projects/campus360/` **uniquement s’ils figurent dans `allowedCreates`** |
| **Modifiable** | `README`, `01`, `02` **uniquement s’ils figurent dans `allowedModifies`** |
| **Protégée par défaut** | `03-pre-framing-decision-pack.md` — **hors** modifies du scénario nominal OPS1 |
| **Exclue** | Hors `projects/campus360/` ; code ; méthode ; prompts ; secrets ; autres projets |
| **Absente / à confirmer** | Docs cadrage détaillé `04+`, code Campus360, assets — **non présents** ; cartographie à réévaluer si le repo évolue |

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

**Statut :** convention **validée avec amendements** (`OPS1-SCENARIO-CAND-07` — `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST`).

---

## 7. Lien avec les réserves FD-CAND-20 / 26

| Réserve | Apport de ce document | Statut après validation |
|---------|----------------------|-------------------------|
| FD-CAND-20 | 1..n explicite ; justification ; pas de wildcard ; reads/creates/modifies ; gel post-GO ; rapport consolidé + par fichier | `FD-CAND-20 — LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
| FD-CAND-26 | Inventaire réel ; exclusions ; `03` protégé par défaut ; Campus360 exclusif | `FD-CAND-26 — LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |

### 7.1 Protection de `03` (amendement)

- Aucune modification de `projects/campus360/03-pre-framing-decision-pack.md` dans le **scénario nominal** OPS1.
- Lecture possible uniquement si listé dans `allowedReads`.
- Modification future uniquement avec : justification explicite · cycle documentaire adapté · allowlist dédiée · **gate Morris distinct**.

---

## 8. Options si structure future change

Si de nouveaux fichiers apparaissent sous `projects/campus360/` :

1. Mettre à jour la cartographie (cycle doc ou amendement sous GO).
2. Ne **pas** les considérer allowlistés par défaut.
3. Réévaluer éligibilité (critères §11.4 du doc [`45`](./45-ops1-functional-design.md)).

Si Campus360 disparaissait ou devenait ambigu : **STOP — CAMPUS360 SCOPE REQUIRES MORRIS DECISION**. *Non applicable* : structure claire et présente.

---

## 9. Anti-claims

Pas d’autorisation globale Campus360 · pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE · pas d’ouverture tech-arch / backlog / code.

---

## 10. Verdict documentaire

`scenario-scope-validated-with-amendments`

`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`

Cartographie repo-informed validée pour l’état actuel (4 fichiers). Allowlist et branche **validées avec amendements**. `03` protégé par défaut.


---

## Annexe C — Document 56 (complet)

# SFIA Studio — Decision pack scénario OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `56-ops1-scenario-decision-pack.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-decisions-validated-with-amendments` — **22 décisions validées avec amendements** (2026-07-20 18:34:47 CEST) |
| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — consommé pour production candidate |
| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **consommé** — Morris — 2026-07-20 18:34:47 CEST — **VALIDATION AVEC AMENDEMENTS** |
| **Décisions** | `OPS1-SCENARIO-CAND-01`…`22` |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage production** | 2026-07-20 18:08:37 CEST |
| **Horodatage validation Morris** | 2026-07-20 18:34:47 CEST |
| **Autorité** | Morris (L0) |

> Decision pack **validé avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
> Identifiants historiques `OPS1-SCENARIO-CAND-*` **conservés**.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Nombre de décisions | **22** |
| Statut collectif | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
| Décision Morris | `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
| Projet pilote | Campus360 |
| Docs | `54` scénario · `55` cartographie/allowlist/branche · `56` décisions |
| Fermé | Tech-arch · backlog · code · delivery · live · MVP · production · Figma |

---

## 2. Décisions validées avec amendements

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
| **Amendement** | Amendement : FD-CAND-26 levée pour Campus360 OPS1 ; `03` protégé par défaut. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : FD-CAND-20 levée pour OPS1 ; pas de wildcard dossier ; 1..n explicite. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : lecture uniquement si chemin dans `allowedReads`. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : création uniquement si chemin dans `allowedCreates` (naming `NN-*.md`). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-05 — Catégories modifiables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories modifiables |
| **Proposition** | `README`, `01`, `02` modifiables si listés ; `03` **protégé par défaut** (hors scénario nominal) ; modification future de `03` seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
| **Options alternatives** | Tout en lecture seule ; `03` totalement gelé. |
| **Impacts** | Preuve d’écriture réelle possible. |
| **Risques** | Réécriture silencieuse des décisions Morris dans `03`. |
| **Dette** | Motif fort obligatoire pour `03`. |
| **Recommandation** | Retenir vigilance sur `03`. |
| **Réserve** | FD-CAND-20 |
| **Amendement** | Amendement : `03` **protégé par défaut** — hors modifies du scénario nominal ; modification future seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : convention validée avec FD-CAND-26 levée (branche locale, sans push auto). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : aligné FD-CAND-20 levée (exhaustivité, gel, nouveau gate si extension). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : multi-fichiers proportionné formalisé sous FD-CAND-20 levée. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : clôture + continuation liée (FD-CAND-13 levée). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : FinOps numériques restent OPEN (FD-CAND-15 maintenue). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : critères incluent continuation liée post-CLOSE (FD-CAND-13). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | Amendement : FD-CAND-15 **maintenue** jusqu’au gate FinOps/live — aucun seuil inventé. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
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
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |


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

## 4. Réserves — traitement sous ce GO

| Réserve | Statut |
|---------|--------|
| **FD-CAND-13** | `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` |
| **FD-CAND-20** | `LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
| **FD-CAND-26** | `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
| **FD-CAND-15** | `MAINTAINED UNTIL FINOPS/LIVE GATE` |
| **UX-R01…R04** | **Maintenues** et routées (non levées ici) |
| **Isolation / CI** | `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` |
| **Tech-arch / backlog / delivery / live** | **Fermés** |

---

## 5. Anti-claims

Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE.
La validation scénario **n’ouvre pas** tech-arch, backlog, code, delivery ni live.

---

## 6. Verdict

`scenario-decisions-validated-with-amendments`

`OPS1 SCENARIO VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL`

`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`

22 / 22 décisions `OPS1-SCENARIO-CAND-01…22` validées avec amendements. Identifiants historiques conservés.


---

## Annexe D — Diff complet du commit projet

```diff
diff --git a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
index b15b29d..02303aa 100644
--- a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
+++ b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
@@ -9,7 +9,7 @@
 | **Baseline** | SFIA v2.6 opérationnelle sur `main` |
 | **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
 | **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; cadrage `41`–`44` **intégré** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1`) — post-merge + cleanup **terminés** ; conception fonctionnelle `45`–`47` **intégrée** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) — post-merge **validé** (2026-07-20 14:29 CEST) ; UX OPS1 `51`–`53` **validés avec réserves** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; POC **maintenu** ; réserves fonctionnelles **inchangées** ; architecture technique, backlog, delivery, live, MVP **fermés** |
-| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
+| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements** ; `G-OPS1-SCENARIO-VAL` consommé — 2026-07-20 18:34:47 CEST) |
 | **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
 | **Intégration cadrage** | PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) MERGED — squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
 | **Intégration conception fonctionnelle** | PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) MERGED — squash `6cbf37482c7d384ef5630259d58a2e223a607925` |
@@ -19,7 +19,7 @@
 > **Cadrage validé avec réserves** sous `G-OPS1-FRAMING-VAL` — conversation GPT réelle et libre au centre ; action Markdown gouvernée.
 > Documents `41`–`44` **intégrés sur `main`** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1394bb4d550eeff1dd64669b3d405579ad`) ; post-merge et cleanup **terminés**.
 > Conception fonctionnelle OPS1 (`45`–`47`) **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST), **intégrée et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash merge `6cbf37482c7d384ef5630259d58a2e223a607925`) ; post-merge **validé** (2026-07-20 14:29 CEST).
-> Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé). Architecture technique, backlog, delivery, live et MVP **restent fermés**. Aucun cycle suivant ouvert automatiquement.
+> UX OPS1 **validée avec réserves**. Scénario OPS1 docs `54`–`56` **validés avec amendements** (`G-OPS1-SCENARIO-VAL` consommé — 2026-07-20 18:34:47 CEST). FD-CAND-13/20/26 **levées** (périmètre OPS1) ; FD-CAND-15 **maintenue** ; UX-R01…R04 **maintenues**. Architecture technique, backlog, delivery, live et MVP **restent fermés**.
 > Aucun claim MVP, production-ready ou industrialisation.

 ---
@@ -365,4 +365,4 @@ Conversation réelle et libre
 `SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`

 Cadrage **intégré** et **canonique** sur `main` (PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235)). Conception fonctionnelle OPS1 **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST), **intégrée et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) — post-merge **validé** (2026-07-20 14:29 CEST) — voir [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md).
-Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST ; UX-R01…UX-R04 ouvertes). Gates architecture technique / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Aucun cycle suivant ouvert automatiquement.
+UX OPS1 **validée avec réserves** (UX-R01…UX-R04 ouvertes). Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **validés avec amendements** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST). FD-CAND-13/20/26 levées pour OPS1 ; FD-CAND-15 maintenue. Gates architecture technique / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md).
diff --git a/projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md b/projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
index f02e62a..1895bc7 100644
--- a/projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
+++ b/projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
@@ -102,6 +102,20 @@ Les états A–E historiques (`qualification_en_cours`, etc.) restent un **héri

 **Timeout ≠ GO. STOP prioritaire. Pas de retry automatique.**

+### 2.3 Continuation liée après `CLOSED` (FD-CAND-13 — levée)
+
+| Règle | Contenu |
+|-------|---------|
+| Immutabilité | Session `CLOSED` **immuable** ; lecture seule |
+| Réouverture silencieuse | **Interdite** |
+| Nouvelle activité | Crée une **continuation liée** (nouvel id + référence session source) |
+| Historique source | **Jamais muté** |
+| Nouvelle action | Propre contrat + propre gate Morris |
+| Ambiguïté | `STOP` / `FAILED` / lecture seule |
+| ABANDONED / STOPPED / FAILED | Non auto-rouverts |
+
+Statut : `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` — voir [`54`](./54-ops1-operational-scenario.md) §4bis · `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
+
 ---

 ## 3. Modèle conceptuel candidat — `CycleSession`
@@ -113,6 +127,7 @@ Nom **candidat**. Champs conceptuels (noms techniques non figés).
 | Champ | Description |
 |-------|-------------|
 | `sessionId` | Identifiant de session |
+| `parentSessionId` / lien continuation | Référence explicite à la session source si continuation liée (FD-CAND-13) |
 | `projectId` / `repository` | Projet / dépôt |
 | `conversationMessages[]` | Journal des messages |
 | `conversationContext` | Contexte utile condensé (dérivé, non vérité Git) |
diff --git a/projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md b/projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
index 521072f..ca90333 100644
--- a/projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
+++ b/projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
@@ -60,6 +60,7 @@
 | Conversation post-rapport | **Obligatoire** | Phase `POST_EXECUTION_CONVERSATION` |
 | Analyse GPT candidate | **Obligatoire** | `candidateOnly` |
 | Décision finale + clôture | **Obligatoire** | `MorrisFinalDecision` + summary |
+| Continuation après CLOSE | **Obligatoire si reprise** | Continuation liée (nouvel id) ; jamais de réouverture silencieuse — FD-CAND-13 **levée** |
 | Historique + reprise session | **Obligatoire** | Fermer / rouvrir |
 | Fixtures pour tests automatisés | **Autorisées** | Hors preuve opératoire |
 | Fixture comme preuve métier scénario | **Interdite** | — |
diff --git a/projects/sfia-studio/45-ops1-functional-design.md b/projects/sfia-studio/45-ops1-functional-design.md
index ef6b645..38b1c71 100644
--- a/projects/sfia-studio/45-ops1-functional-design.md
+++ b/projects/sfia-studio/45-ops1-functional-design.md
@@ -12,7 +12,7 @@
 | **Branche de conception** | `design/sfia-studio-ops1-functional` — fusionnée via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) ; branche conservée temporairement en attente du cleanup Morris |
 | **Statut** | `functional-design-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 13:46 CEST) ; amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) ; **intégré et canonique sur `main`** ; post-merge **validé** (2026-07-20 14:29 CEST) ; réserves 13, 15, 20, 26 **inchangées** ; aucun cycle suivant ouvert automatiquement |
 | **Autorité** | Morris (L0) |
-| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
+| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements** ; `G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) |
 | **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
 | **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
 | **Horodatage production** | 2026-07-20 13:10 CEST |
@@ -384,7 +384,7 @@ Quatre couches **indépendantes conceptuellement** (héritage `42`, instanciées
 4. `STOP` et `FAILED` ont priorité sur les transitions nominales.
 5. Timeout ≠ GO ; aucun retry automatique d’exécution.
 6. Reprise : recharger sans inventer ; ambiguïté → `STOPPED` / `FAILED` / lecture seule.
-7. Session `CLOSED` : **immuable** ; consultation autorisée ; reprendre une activité = **continuation ou nouvelle session liée** — **aucune** réouverture silencieuse ne mute l’historique clôturé (`OPS1-FD-CAND-13`).
+7. Session `CLOSED` : **immuable** ; consultation autorisée ; reprendre une activité = **continuation liée** (nouvel id + référence source ; propre contrat/gate si action) — **aucune** réouverture silencieuse (`FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`).

 Transitions détaillées : [`46`](./46-ops1-functional-flows-and-rules.md).

@@ -543,9 +543,9 @@ Souhaitables `43` §6.2 : couverts comme **candidats** (coût visible, condensat
 | Stack / BDD / API / protocole | Cycle **6 — Architecture technique** (`G-OPS1-TECH-ARCH` si établi) | **Routé** — hors réserves conception |
 | Découpage I1–I7 en stories | `G-OPS1-BACKLOG` | Fermé |
 | Implémentation / live GPT / Cursor | Delivery / live (gates distincts) | Fermé |
-| Cartographie chemins éligibles Campus360 + branche + allowlist | `G-OPS1-SCENARIO-VAL` | Réserve conception |
+| Cartographie chemins éligibles Campus360 + branche + allowlist | `G-OPS1-SCENARIO-VAL` **consommé** | Docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **validés avec amendements** ; FD-CAND-20/26 **levées** pour OPS1 ; `03` protégé par défaut |
 | Plafonds FinOps numériques | GO avant live | Réserve conception (non bloquante pour FUNC-DESIGN-VAL) |
-| Mécanisme continuation après CLOSE | Archi fonctionnelle / UX | Réserve conception (`OPS1-FD-CAND-13`) |
+| Mécanisme continuation après CLOSE | Scénario OPS1 — FD-CAND-13 **levée** | Continuation liée obligatoire ; jamais de réouverture silencieuse (voir [`54`](./54-ops1-operational-scenario.md) §4bis) |

 ---

@@ -607,7 +607,9 @@ Valider :
 - scénario de preuve.

 **Ne plus** valider un fichier unique obligatoire.
-**Non choisis dans ce cycle :** liste globale définitive de chemins réels ; nom de branche exact ; demande métier exacte.
+**État scénario :** [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **validés avec amendements** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
+**FD-CAND-20** levée pour OPS1 · **FD-CAND-26** levée pour Campus360 OPS1 (`03` protégé par défaut) · **FD-CAND-13** levée (continuation liée).
+**Non figé ici :** demande métier exacte d’une démonstration live (exécution ultérieure).

 ---

diff --git a/projects/sfia-studio/46-ops1-functional-flows-and-rules.md b/projects/sfia-studio/46-ops1-functional-flows-and-rules.md
index aeaf06d..bdf9ed0 100644
--- a/projects/sfia-studio/46-ops1-functional-flows-and-rules.md
+++ b/projects/sfia-studio/46-ops1-functional-flows-and-rules.md
@@ -76,7 +76,7 @@
 | **Données produites** | Événement de reprise horodaté |
 | **Preuves attendues** | Preuve de non-invention |
 | **Critères associés** | Critères 5,10 |
-| **Décisions Morris** | Après CLOSE : consultation libre ; reprise d’activité = continuation / nouvelle session liée (pas de mutation) |
+| **Décisions Morris** | Après CLOSE : consultation libre ; reprise d’activité = **continuation liée** obligatoire (FD-CAND-13 levée) ; jamais de mutation de la session source |
 | **Hors périmètre** | — |

 **Étapes nominales :**
@@ -88,7 +88,7 @@

 **Alternatives :**
    - Ambiguïté → IDLE_READ_ONLY ou STOPPED
-   - Session CLOSED → lecture seule ; activité nouvelle → continuation / session liée
+   - Session CLOSED → lecture seule ; activité nouvelle → **continuation liée** (nouvel id + ref source) ; ABANDONED/STOPPED/FAILED non auto-rouverts
 **Erreurs et STOP :**
    - Données corrompues → FAILED
    - Conflit Git majeur → STOP
@@ -999,7 +999,7 @@

 1. Recharger journal et objets sans inventer (FLOW-02, 27).
 2. Si ambiguïté d’état d’exécution → `STOPPED` / `FAILED` / lecture seule.
-3. Session `CLOSED` : **immuable** ; reprise **lecture** par défaut ; reprendre une activité = **continuation ou nouvelle session liée** — **pas** de mutation silencieuse de l’historique clôturé (`OPS1-FD-CAND-13`).
+3. Session `CLOSED` : **immuable** ; reprise **lecture** par défaut ; reprendre une activité = **continuation liée** (propre contrat/gate si action) — `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`.
 4. Git HEAD divergent : signaler ; bloquer exec jusqu’à resynchronisation fonctionnelle.
 5. Draft UI non soumis : non obligatoire de survivre.

diff --git a/projects/sfia-studio/48-ops1-functional-architecture.md b/projects/sfia-studio/48-ops1-functional-architecture.md
index 46b71c4..0ea4661 100644
--- a/projects/sfia-studio/48-ops1-functional-architecture.md
+++ b/projects/sfia-studio/48-ops1-functional-architecture.md
@@ -15,7 +15,7 @@
 | **Décisions** | `OPS1-FA-CAND-01`…`22` **validées** (réserves maintenues) |
 | **Horodatage validation Morris** | 2026-07-20 15:30 CEST |
 | **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`47`](./47-ops1-functional-decision-pack.md) |
-| **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves**) |
+| **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves**) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements**) |
 | **Horodatage production** | 2026-07-20 15:14 CEST |

 > Architecture **fonctionnelle** du Vertical Slice Opérationnel 1 — **validée avec réserves** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
@@ -226,8 +226,12 @@ Couverture CAP : CAP-01…21 (voir matrices doc 49).

 ## 13. Clôture, consultation et continuation

-- CLOSE rend la session **immuable** (lecture seule).
-- Continuation / nouvelle session liée = mécanisme **OPEN** (réserve FD-CAND-13) — **pas de mutation silencieuse**.
+- `CLOSED` rend la session **immuable** (lecture seule).
+- Toute nouvelle activité crée une **continuation liée** (nouvel identifiant + référence explicite à la session source) — **jamais** de réouverture silencieuse.
+- Historique source **non muté** ; nouvelle action ⇒ nouveau contrat + nouveau gate.
+- Ambiguïté de restauration ⇒ `STOP` / `FAILED` / lecture seule.
+- ABANDONED / STOPPED / FAILED **non** auto-rouverts.
+- Statut : `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` (voir [`54`](./54-ops1-operational-scenario.md) §4bis).
 - Consultation après CLOSE via reprise lecture (FLOW-02 / CAP-20).

 ---
@@ -328,7 +332,7 @@ Audit Journal reconstruit l’historique (CAP-21).
 |------|---------------|------|
 | UX/UI | Surfaces, Figma, microcopy visuelle | `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (UX-R01…UX-R04) |
 | Architecture technique | Stack, BDD, API, protocole, isolation OS/réseau | `G-OPS1-TECH-ARCH` (fermé) |
-| Scénario | Cartographie chemins Campus360, convention branche | `G-OPS1-SCENARIO-VAL` (fermé) |
+| Scénario | Cartographie / allowlist / branche / continuation | Docs `54`–`56` **validés avec amendements** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` ; FD-CAND-13/20/26 levées (périmètre OPS1) |
 | Backlog | Découpage I1–I7 opérationnel | `G-OPS1-BACKLOG` (fermé) |

 Aucune ouverture automatique.
@@ -337,10 +341,10 @@ Aucune ouverture automatique.

 ## 24. Réserves héritées (OPEN — non arbitrées)

-- FD-CAND-13 — continuation après CLOSE ;
-- FD-CAND-15 — FinOps numériques ;
-- FD-CAND-20 — cartographie chemins/catégories ;
-- FD-CAND-26 — détails opérationnels Campus360 exclusifs ;
+- FD-CAND-13 — **levée** (continuation liée) ;
+- FD-CAND-15 — FinOps numériques — **maintenue** jusqu’au gate FinOps/live ;
+- FD-CAND-20 — **levée pour OPS1** (1..n explicite, pas de wildcard) ;
+- FD-CAND-26 — **levée pour Campus360 OPS1** (`03` protégé par défaut) ;
 - convention de branche Campus360 ;
 - preuve GPT live / Cursor live ;
 - CI distante ;
@@ -372,5 +376,5 @@ Confirmés sous validation Morris (2026-07-20 15:30 CEST) :
 Gate `G-OPS1-FUNC-ARCH` consommé — 2026-07-20 15:14 CEST.
 Gate `G-OPS1-FUNC-ARCH-VAL` **consommé** — Morris — 2026-07-20 15:30 CEST.
 11 domaines D1–D11 retenus ; 14 composants fonctionnels retenus ; frontières Morris / GPT / harness / Cursor / Git / persistance retenues ; couverture CAP/FLOW/FR confirmée.
-Réserves maintenues (continuation CLOSE ; FinOps numériques ; Campus360 cartographie/branche ; live ; CI ; isolation ; FD-CAND-13/15/20/26).
-UX : `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (2026-07-20 16:52 CEST) ; réserves UX-R01…UX-R04 maintenues. Architecture technique (`G-OPS1-TECH-ARCH`), backlog, delivery, live et MVP : **fermés** — aucun cycle suivant ouvert automatiquement.
+Réserves : FD-CAND-13/20/26 **levées** (OPS1) ; FD-CAND-15 **maintenue** ; UX-R01…R04 **maintenues** ; isolation/CI **routées** vers tech-arch (non conçues ici) ; live **fermé**.
+UX : docs `51`–`53` validés avec réserves. Scénario : docs `54`–`56` **validés avec amendements** (`G-OPS1-SCENARIO-VAL` consommé). Architecture technique, backlog, delivery, live et MVP : **fermés**.
diff --git a/projects/sfia-studio/49-ops1-functional-components-and-interactions.md b/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
index 5f1fbe1..6fc9f63 100644
--- a/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
+++ b/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
@@ -59,7 +59,7 @@ Challenge (rappel) : utile maintenant ? responsabilité distincte ? dette ? plus
 | **In** | Ouverture ; décisions Morris ; STOP ; fin d’exécution |
 | **Out** | Transitions d’état ; session lecture seule |
 | **Autorisé** | Appliquer transitions conformes FR |
-| **Interdit** | Muter une session CLOSED ; autoriser exécution |
+| **Interdit** | Muter une session CLOSED ; réouverture silencieuse ; autoriser exécution sans gate |
 | **Interactions** | Tous les composants via état de session |
 | **Erreurs** | Ambiguïté reprise → STOPPED/FAILED/read-only |
 | **Preuves** | Journal d’états horodaté |
@@ -335,7 +335,7 @@ Challenge (rappel) : utile maintenant ? responsabilité distincte ? dette ? plus
 | Revalidation contrat | **Harness** |
 | Mutation fichiers | **Cursor** sous contrat |
 | Vérité HEAD/diff | **Git** |
-| Clôture / continuation | **Morris** (mécanisme continuation OPEN) |
+| Clôture / continuation | **Morris** — continuation liée (FD-CAND-13 **levée**) ; jamais de réouverture silencieuse |

 ---

@@ -431,6 +431,21 @@ sequenceDiagram
   Note over SM: pas de mutation silencieuse
 ```

+### 4.7 Continuation liée (FD-CAND-13 — levée)
+
+```mermaid
+sequenceDiagram
+  participant M as Morris
+  participant SM as Session Manager
+  M->>SM: nouvelle activité depuis CLOSED
+  SM-->>M: créer continuation liée (new id + parentSessionId)
+  Note over SM: historique source immuable
+  Note over M: action ⇒ nouveau contrat + nouveau gate
+```
+
+Règles : immutabilité source · pas de réouverture silencieuse · ambiguïté ⇒ STOP/FAILED/lecture seule · ABANDONED/STOPPED/FAILED non auto-rouverts.
+Statut : `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`.
+
 ---

 ## 5. Routage UX / architecture technique
@@ -444,7 +459,9 @@ sequenceDiagram
 ### Vers architecture technique (`G-OPS1-TECH-ARCH` — fermé)

 - Stack, BDD, API, protocole, filesystems ;
-- isolation OS/réseau, CI distante ;
+- **Isolation** (candidate, non conçue ici) : workspace dédié ; revalidation HEAD ; validation allowlist hors texte GPT ; contrôle liens symboliques ; contrôle du diff ; aucune commande Git distante ; working tree initial propre ;
+- **CI minimale** (candidate, non conçue ici) : lint Markdown ; liens internes ; contrôle du périmètre ; recherche de secrets ; validation du rapport ; preuves négatives automatisables ;
+- Statut isolation/CI : `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` ;
 - choix modèle GPT définitif ;
 - implémentation harness/Cursor.

diff --git a/projects/sfia-studio/51-ops1-ux-ui-contract.md b/projects/sfia-studio/51-ops1-ux-ui-contract.md
index 03e2e24..f7a14f0 100644
--- a/projects/sfia-studio/51-ops1-ux-ui-contract.md
+++ b/projects/sfia-studio/51-ops1-ux-ui-contract.md
@@ -11,7 +11,7 @@
 | **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
 | **Branche** | `design/sfia-studio-ops1-ux-ui` |
 | **Statut** | `ux-ui-validated-with-reservations` |
-| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) |
+| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements** ; `G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) |
 | **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`50`](./50-ops1-functional-architecture-decision-pack.md) |
 | **Figma** | fileKey `lrjA1WEyRpL05vKR8k29LO` · page `UX-B — OPS1` (`61:2`) — **référence visuelle desktop validée avec réserves** |
 | **Horodatage production** | 2026-07-20 16:15 CEST |
@@ -360,16 +360,16 @@ Confirmés sous validation Morris (2026-07-20 16:52 CEST) — sous réserves UX-
 | **UX-R01** | Produire les déclinaisons tablette/mobile avant toute implémentation responsive |
 | **UX-R02** | Nettoyer les microcopies héritées de P0 avant delivery |
 | **UX-R03** | Formaliser le design system avant industrialisation multi-écrans |
-| **UX-R04** | Maintenir ouvertes FD-CAND-13/15/20/26 ainsi que FinOps, Campus360, live, CI et isolation |
+| **UX-R04** | Réserve transverse : FD-CAND-15 / live / CI / isolation / tech-arch restent à router ; FD-CAND-13/20/26 traités au scénario — UX-R01…R03 **maintenues** |

 ### Réserves héritées (FD / transverses)

-- Continuation après CLOSE (FD-CAND-13).
-- FinOps numériques (FD-CAND-15).
-- Cartographie / catégories Campus360 (FD-CAND-20).
-- Détails opérationnels Campus360 (FD-CAND-26).
-- Convention de branche scénario.
-- Preuves GPT / Cursor live ; CI distante ; isolation OS/réseau.
+- Continuation après CLOSE (FD-CAND-13) — **levée** : continuation liée, jamais de réouverture silencieuse (voir [`54`](./54-ops1-operational-scenario.md) §4bis).
+- FinOps numériques (FD-CAND-15) — **maintenue** jusqu’au gate FinOps/live.
+- Cartographie / catégories Campus360 (FD-CAND-20) — **levée pour OPS1** (voir [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md)).
+- Détails opérationnels Campus360 (FD-CAND-26) — **levée pour Campus360 OPS1** ; `03` protégé par défaut.
+- Convention de branche scénario — **validée avec amendements** ([`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) §6).
+- Preuves GPT / Cursor live ; CI distante ; isolation OS/réseau — **routées** vers architecture technique (non conçues ici).

 ---

diff --git a/projects/sfia-studio/54-ops1-operational-scenario.md b/projects/sfia-studio/54-ops1-operational-scenario.md
new file mode 100644
index 0000000..a8adbd1
--- /dev/null
+++ b/projects/sfia-studio/54-ops1-operational-scenario.md
@@ -0,0 +1,341 @@
+# SFIA Studio — Scénario opérationnel OPS1 (validé avec amendements)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `54-ops1-operational-scenario.md` |
+| **Cycle** | Conception du scénario opérationnel OPS1 |
+| **Profil** | Standard |
+| **Typologie** | DOC / SCENARIO / UX / GOVERNANCE / VALIDATION |
+| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — **consommé pour production documentaire candidate** |
+| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **consommé** — Morris — 2026-07-20 18:34:47 CEST — **VALIDATION AVEC AMENDEMENTS** |
+| **Statut** | `validated-with-amendments` — **validé Morris avec amendements** (2026-07-20 18:34:47 CEST) |
+| **Branche** | `design/sfia-studio-ops1-scenario` |
+| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
+| **Companions** | [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
+| **Héritage** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) |
+| **Autorité** | Morris (L0) |
+| **Horodatage production** | 2026-07-20 18:08:37 CEST |
+
+> Scénario opérationnel **validé avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
+> Décisions `OPS1-SCENARIO-CAND-01…22` **validées avec amendements** — voir [`56`](./56-ops1-scenario-decision-pack.md).
+> **N’ouvre pas** l’architecture technique, le backlog, le code, la delivery, le live, le MVP ni la production.
+
+---
+
+## 1. Finalité de la preuve
+
+### 1.1 Ce qu’OPS1 doit démontrer
+
+1. Une **conversation GPT réelle**, libre, multi-tours, non scénarisée phrase par phrase.
+2. Une **action Markdown optionnelle**, séparée du chat, sur le projet pilote **Campus360**.
+3. Un **gate Morris explicite** (GO / NO-GO / CORRIGER / ABANDONNER / STOP) avant toute exécution.
+4. Une **allowlist exhaustive 1..n** présentée avant le gate ; Campus360 éligible ≠ autorisation globale.
+5. Une **exécution Cursor réelle** strictement bornée au contrat ancré (HEAD, hash, allowlist, denylist).
+6. Un **rapport complet** (consolidé + par fichier) et une **reprise conversationnelle** post-exécution.
+7. Une **clôture de session immuable** avec historique et preuves consultables.
+8. Des **preuves négatives** fail-closed (sans GO, hors allowlist, extension post-GO, HEAD dérivé, hash invalide, double-exécution, timeout ≠ GO, aucun remote auto).
+
+### 1.2 Ce qu’OPS1 ne démontre pas
+
+- Architecture technique, stack, API, BDD, protocole.
+- Backlog détaillé, delivery, CI industrielle, déploiement.
+- Live industrialisé, MVP, production, multi-projets hors Campus360.
+- Design system publié, responsive tablette/mobile (UX-R01…R03).
+- Résolution FinOps numérique (FD-CAND-15 maintenue) ; isolation OS/réseau et CI (routées tech-arch, non conçues ici).
+- Autorisation globale sur tout Campus360.
+
+### 1.3 Preuve opératoire ≠ POC technique ≠ MVP ≠ production
+
+| Terme | Rôle dans OPS1 |
+|-------|----------------|
+| **Preuve opératoire** | Démonstration gouvernée bout-en-bout du parcours conversation → gate → Cursor → rapport → clôture |
+| **POC** | Cadre produit SFIA Studio maintenu ; OPS1 = marche du POC, pas le produit cible |
+| **MVP** | **Non défini** et **non ouvert** |
+| **Production** | **Hors périmètre** |
+
+### 1.4 Critères d’entrée (candidats)
+
+- Docs `41`–`53` disponibles et cohérents sur la base Git.
+- Projet `projects/campus360/` présent (cartographie doc [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md)).
+- Branche de travail locale propre ; `origin/main` connu.
+- GPT réel et Cursor réel disponibles pour la démonstration (preuve live = réserve jusqu’à exécution).
+- Gate d’ouverture scénario accordé pour la production documentaire.
+
+### 1.5 Critères de sortie documentaire (ce cycle)
+
+- Docs `54`–`56` candidats complets.
+- Propagation minimale dans `41` / `45` / `48` / `51` / `README`.
+- Review pack + handoff local préparés.
+- Aucun commit / push / PR / merge dans ce cycle.
+- Validation Morris **distincte** requise avant statut « scénario validé ».
+
+---
+
+## 2. Acteurs et autorités
+
+| Acteur | Responsabilités | Interdictions |
+|--------|-----------------|---------------|
+| **Morris** | Ouvre/clôture session ; dialogue ; GO/NO-GO/CORRIGER/ABANDONNER/STOP ; décision finale ; validation scénario | Déléguer l’autorité d’exécution au texte GPT |
+| **ChatGPT** | Dialogue libre ; clarification ; proposition d’action candidate ; analyse rapport (candidate) | Créer un GO ; exécuter ; élargir allowlist ; autoriser remote |
+| **Harness** | Revalide schémas, gate, HEAD, contractHash, allowlist, denylist, plafonds ; fail-closed ; anti double-exécution | Inventer un GO ; ignorer denylist |
+| **Cursor** | Exécute uniquement le contrat ancré après GO valide | Lire/écrire hors allowlist ; commit/push/PR/merge auto ; retry implicite |
+| **Git** | Vérité technique (HEAD, diffs, fichiers, branches) | Être remplacé par le store conversationnel |
+| **Store / journal de session** | Historique messages, décisions, preuves, états | Contredire Git sur le contenu fichiers ; autoriser écriture après CLOSE |
+
+**Règle structurante :** le texte du chat **n’est jamais** une autorisation d’exécution.
+
+---
+
+## 3. Préconditions
+
+| Précondition | Détail |
+|--------------|--------|
+| Repository | `mcleland147/sfia-workspace` |
+| Base | `origin/main` (SHA ancré dans le contrat) |
+| Projet pilote | **Campus360** exclusivement (`projects/campus360/`) |
+| Fichiers éligibles | Markdown documentaires non protégés — voir doc [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
+| Session | Ouverte par Morris ; non CLOSE |
+| GPT | Disponible (réel) pour le dialogue |
+| Cursor | Disponible (réel) pour l’exécution après GO |
+| Git local | Working tree tracked propre ; staged vide avant exécution |
+| Réserves | FD-CAND-13/20/26 **levées** (périmètre OPS1) · FD-CAND-15 **maintenue** · UX-R01…R04 **maintenues** · isolation/CI **routées** · live **fermé** |
+| Limites | Pas de remote auto ; pas de secrets ; default deny |
+
+---
+
+## 4. Scénario nominal complet
+
+Les étapes fixent le **comportement** ; elles **ne figent pas** les phrases conversationnelles.
+
+1. **Ouverture** — Morris ouvre une `CycleSession` OPS1.
+2. **Demande** — Morris formule une demande réelle, éventuellement imprécise, relative à Campus360 / SFIA.
+3. **Dialogue** — ChatGPT échange librement, clarifie objectif, cycle, profil, risques.
+4. **Challenge** — Morris corrige, précise ou challenge.
+5. **Sans action possible** — ChatGPT peut conclure `ACTION_NOT_REQUIRED` (variante §5).
+6. **Action candidate** — Si pertinente, ChatGPT produit un **contrat d’action séparé** du fil chat.
+7. **Allowlist** — Le contrat porte une allowlist **exhaustive** (consultables / créables / modifiables) + `forbiddenPaths` + branche + HEAD + objectif.
+8. **Gate Morris** — Morris choisit GO, NO-GO, CORRIGER, ABANDONNER ou STOP.
+9. **Revalidation harness** — Indépendamment du texte GPT : gate, HEAD, `contractHash`, allowlist, denylist, stop conditions.
+10. **Exécution Cursor** — Uniquement après GO + revalidation OK ; strictement bornée.
+11. **Rapport** — Couverture de **chaque** fichier de l’allowlist ; diff consolidé + par fichier ; erreurs ; complétude.
+12. **Analyse** — ChatGPT produit une analyse **candidate** du rapport.
+13. **Reprise** — Morris reprend la conversation (questions, corrections, suite).
+14. **Décision finale** — Morris valide le résultat, corrige (nouveau cycle d’action), refuse ou abandonne.
+15. **Clôture** — Session `CLOSED` → **immuable** (lecture seule) ; pas de reprise implicite d’exécution.
+16. **Consultation** — Historique, décisions, preuves et diffs restent consultables ; Git prime sur le contenu fichiers.
+17. **Reprise d’activité (si besoin)** — Toute nouvelle activité crée une **continuation liée** (nouvel identifiant, référence explicite à la session source) ; **aucune** réouverture silencieuse de la session clôturée (FD-CAND-13 levée).
+
+---
+
+## 4bis. Continuation liée après CLOSE (FD-CAND-13 — levée)
+
+| Règle | Contenu |
+|-------|---------|
+| Immutabilité | Une session `CLOSED` **ne mute jamais** |
+| Lecture | Consultation en lecture seule **autorisée** |
+| Réouverture silencieuse | **Interdite** |
+| Nouvelle activité | Crée une **continuation liée** |
+| Identité | Nouvel `sessionId` (ou id de continuation) + référence explicite à la session source |
+| Historique source | **Jamais muté** |
+| Nouvelle action | Exige **son propre contrat** + **son propre gate** Morris |
+| Ambiguïté de contexte | `STOP`, `FAILED` ou lecture seule — pas de reprise opaque |
+| ABANDONED / STOPPED / FAILED | **Non** automatiquement réouverts |
+
+Statut : `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`
+
+---
+
+## 5. Variante sans action
+
+- Dialogue utile et multi-tours.
+- Conclusion explicite `ACTION_NOT_REQUIRED`.
+- **Aucune** branche d’exécution créée ; **aucune** exécution Cursor.
+- La conversation **peut continuer**.
+- Clôture possible sans action.
+- Preuve attendue : journal de session + signal `ACTION_NOT_REQUIRED` + absence d’effets Git d’exécution.
+
+---
+
+## 6. Variante correction avant GO
+
+1. Action candidate initiale présentée.
+2. Morris choisit **CORRIGER** (périmètre, fichiers, objectif, risques).
+3. L’ancien contrat candidat est **invalidé** (non exécutable).
+4. Nouveau contrat avec nouvelle allowlist / ancrage.
+5. Nouveau `contractHash`.
+6. Nouveau gate Morris explicite (GO/NO-GO/…).
+7. Aucune exécution sur l’ancien hash.
+
+---
+
+## 7. Variante extension après GO
+
+1. Tentative d’ajouter un fichier à l’allowlist **après** GO.
+2. Harness / Cursor : **refus fail-closed** (FR-030).
+3. Exécution en cours : STOP ou non-démarrage selon état ; pas d’élargissement.
+4. Correction = **nouveau contrat** + **nouveau gate Morris** obligatoire.
+5. Preuve négative obligatoire (PN-extension).
+
+---
+
+## 8. Variante NO-GO / abandon
+
+- Morris choisit **NO-GO** ou **ABANDONNER**.
+- **Aucun effet Git** d’exécution.
+- Décision journalisée (motif, timestamp, fuseau).
+- Conversation peut continuer ou session clôturée.
+- Contrat non exécutable.
+
+---
+
+## 9. Variante STOP
+
+- **STOP** a priorité sur tous les autres états.
+- Cursor : arrêt immédiat ou non-démarrage.
+- Preuves et journal **conservés**.
+- **Aucune reprise implicite** ; reprise = nouvelle décision Morris explicite.
+- Timeout ≠ STOP ≠ GO.
+
+---
+
+## 10. Variante échec Cursor
+
+- Rapport d’échec structuré (statut, fichiers, erreurs).
+- **Aucun retry automatique**.
+- Contexte session conservé.
+- Analyse candidate ChatGPT.
+- Décision Morris : corriger, abandonner, nouveau contrat, ou clôturer.
+
+---
+
+## 11. Variante rapport incomplet
+
+- Couverture allowlist incomplète ⇒ **clôture nominale interdite**.
+- Nouvelle exécution sur le **même** `contractHash` : **bloquée** (anti double-exécution / complétude).
+- Requis : correction (nouveau contrat + gate) ou abandon explicite.
+- Preuve : flag d’incomplétude visible.
+
+---
+
+## 12. Preuves négatives obligatoires
+
+| ID | Preuve | Résultat attendu |
+|----|--------|------------------|
+| PN-01 | Exécution sans GO | Refus ; aucun effet |
+| PN-02 | Fichier hors allowlist | Refus fail-closed |
+| PN-03 | Extension allowlist après GO | Refus ; nouveau gate requis |
+| PN-04 | HEAD modifié après GO | Refus / invalidation ancrage |
+| PN-05 | `contractHash` invalide | Refus |
+| PN-06 | Contenu fichier / chat prétendant autoriser | Ignoré ; seule la décision Morris compte |
+| PN-07 | Double-exécution même hash | Refus |
+| PN-08 | Timeout | ≠ GO ; pas d’exécution implicite |
+| PN-09 | Effet distant automatique (push/PR/merge) | Interdit ; aucun effet |
+
+---
+
+## 13. Contrat d’action scénario (fonctionnel)
+
+Champs minimaux du contrat **fonctionnel** (pas de schéma JSON technique figé) :
+
+| Champ | Rôle |
+|-------|------|
+| `sessionId` | Session OPS1 |
+| `actionId` | Identifiant d’action |
+| `cycle` | Cycle / profil proposés |
+| `project` | `campus360` (exclusif) |
+| `repository` | `mcleland147/sfia-workspace` |
+| `baseRef` | Réf. autorisée (ex. `origin/main`) |
+| `headSha` | SHA ancré au GO |
+| `branchName` | Branche locale selon convention candidate (doc 55) |
+| `objective` | Objectif substantiel de l’action |
+| `allowedReads` | Fichiers consultables (liste exhaustive) |
+| `allowedCreates` | Fichiers créables (liste exhaustive) |
+| `allowedModifies` | Fichiers modifiables (liste exhaustive) |
+| `forbiddenPaths` | Interdits explicites + héritage denylist |
+| `contractHash` | Empreinte d’ancrage du contrat |
+| `morrisDecision` | GO / NO-GO / CORRIGER / ABANDONNER / STOP |
+| `decisionTimestamp` | Horodatage décision |
+| `decisionTimezone` | Fuseau (ex. CEST) |
+| `stopConditions` | Conditions d’arrêt |
+| `expectedReport` | Attentes de preuve |
+| `finOpsContext` | Contexte FinOps (placeholders ; chiffres OPEN) |
+| `reservations` | Réserves applicables à l’action |
+
+---
+
+## 14. Critères de réussite de la démonstration OPS1
+
+| Critère | Type de preuve | Source | Validateur | Attendu | Bloquant si | Réserve |
+|---------|----------------|--------|------------|---------|-------------|---------|
+| Conversation réelle non scénarisée | Journal multi-tours | Session | Morris | Allers-retours libres | Script unique | — |
+| Corrections Morris | Journal | Session | Morris | Au moins une correction possible | Chat = GO | — |
+| Action facultative | Signal / absence branche | Session + Git | Morris | `ACTION_NOT_REQUIRED` possible | Action forcée | — |
+| Séparation chat / action | UI + objets | UX 51 + session | Morris | Panneaux distincts | GO dans le fil | UX-R02 |
+| Gate explicite | Décision journalisée | Gate | Morris | Une des 5 actions | Timeout = GO | — |
+| Allowlist visible | Contrat | Action | Morris | Liste 1..n exhaustive | « Tout Campus360 » | FD-20/26 |
+| Exécution Cursor réelle | Rapport | Cursor | Morris | Exécution bornée | Fixture seule pour preuve cible | live |
+| Aucun effet hors allowlist | Diff / PN | Git | Morris + harness | Hors allowlist = 0 | Écriture hors liste | — |
+| Rapport complet | Rapport | Cursor | Morris | Tous fichiers couverts | Incomplet + clôture OK | — |
+| Reprise post-exécution | Journal | Session | Morris | Dialogue après rapport | Session morte | — |
+| Décision finale | Journal | Morris | Morris | Valider / corriger / refuser / abandonner | Auto-clôture | — |
+| Clôture immuable + continuation liée | État CLOSED + lien | Session | Morris | Lecture seule ; reprise = continuation | Mutation session source | FD-13 **levée** |
+| Historique consultable | Store + Git | Session/Git | Morris | Preuves relisibles | Perte preuves | — |
+| Preuves négatives | PN-01…09 | Harness/Cursor | Morris | Refus observés | Contournement | — |
+| Pas de claim MVP/prod | Revue docs | Docs | Morris | Anti-claims tenus | READY FOR DELIVERY etc. | — |
+
+---
+
+## 15. Gouvernance, sécurité, FinOps, RGPD, a11y, perf
+
+| Domaine | Règle scénario |
+|---------|----------------|
+| **Gouvernance** | Morris L0 ; gates explicites ; décisions candidates jusqu’à validation |
+| **Sécurité fonctionnelle** | Default deny ; denylist ; secrets exclus ; fail-closed |
+| **Git** | Branche locale ; pas de remote auto ; Git = vérité fichiers |
+| **UX** | Comportement selon docs `51`–`53` ; pas de redesign Figma ici |
+| **FinOps** | Placeholders ; valeurs numériques **OPEN** (FD-CAND-15) |
+| **RGPD** | Pas de PII/secrets dans allowlist ; majeurs / données minimales côté Campus360 produit |
+| **Accessibilité** | Critères FD-CAND-17 applicables aux surfaces ; non retestés ici |
+| **Performance perçue** | FD-CAND-18 ; timeout ≠ GO |
+| **QA** | Matrice §14 + PN §12 |
+
+---
+
+## 16. Cleanup et suite
+
+| Sujet | Règle candidate |
+|-------|-----------------|
+| Cleanup branche d’exécution | Après décision Morris ; pas automatique dans OPS1 |
+| Cleanup branche de conception scénario | Après intégration éventuelle + GO distinct |
+| Architecture technique | **Fermée** — ouverture uniquement par GO Morris explicite séparé |
+| Backlog / delivery / live | **Fermés** |
+
+---
+
+## 17. Réserves — état après validation
+
+| Réserve | Statut |
+|---------|--------|
+| FD-CAND-13 | `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` |
+| FD-CAND-20 | `LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
+| FD-CAND-26 | `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
+| FD-CAND-15 | `MAINTAINED UNTIL FINOPS/LIVE GATE` |
+| UX-R01…R04 | **Maintenues** (UX-R01 tablette/mobile après desktop ; UX-R02 microcopies avant delivery ; UX-R03 DS avant industrialisation ; UX-R04 transverse) |
+| Isolation / CI | `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` |
+| Tech-arch / backlog / delivery / live / MVP | **Fermés** |
+
+---
+
+## 18. Anti-claims
+
+Ce document **n’affirme pas** : READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE · Campus360 entièrement autorisé · backlog ouvert · code autorisé.
+
+---
+
+## 19. Verdict documentaire
+
+`validated-with-amendments`
+
+`OPS1 SCENARIO VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL`
+
+`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`
diff --git a/projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md b/projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md
new file mode 100644
index 0000000..cb46cd3
--- /dev/null
+++ b/projects/sfia-studio/55-ops1-campus360-scope-and-allowlist-rules.md
@@ -0,0 +1,204 @@
+# SFIA Studio — Campus360 : périmètre, cartographie et règles d’allowlist OPS1 (validé avec amendements)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `55-ops1-campus360-scope-and-allowlist-rules.md` |
+| **Cycle** | Conception du scénario opérationnel OPS1 |
+| **Profil** | Standard |
+| **Statut** | `scenario-scope-validated-with-amendments` — **validé avec amendements** (2026-07-20 18:34:47 CEST) |
+| **Gate** | `G-OPS1-SCENARIO-VAL` — **consommé** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
+| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`56`](./56-ops1-scenario-decision-pack.md) |
+| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
+| **Horodatage** | 2026-07-20 18:08:37 CEST |
+| **Autorité** | Morris (L0) |
+
+> Cartographie **repo-informed** et règles d’allowlist **validées avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
+> **Campus360 éligible ≠ autorisation globale.**
+> FD-CAND-20 / FD-CAND-26 **levées** pour le périmètre OPS1 / Campus360 OPS1 ; `03` **protégé par défaut**.
+
+---
+
+## 1. Ancrage projet pilote
+
+| Élément | Valeur |
+|---------|--------|
+| Projet pilote OPS1 | **Campus360 exclusivement** |
+| Chemin racine | `projects/campus360/` |
+| Nature | Projet produit fictif étalon SFIA v2.6 (pré-cadrage clôturé) |
+| Rôle pour OPS1 | Contexte métier/documentaire du pilote d’action |
+| Non-rôle | OPS1 n’est **pas** une feature produit Campus360 |
+| Repo | `mcleland147/sfia-workspace` |
+
+---
+
+## 2. Inventaire repo-informed (état constaté)
+
+Recherche effectuée sur le repository (branche de conception scénario, base `5a595b0…`).
+
+### 2.1 Arborescence réelle
+
+```text
+projects/campus360/
+├── README.md
+├── 01-opportunity-and-vision.md
+├── 02-sfia-cycle-coverage-hypothesis.md
+└── 03-pre-framing-decision-pack.md
+```
+
+**Aucun** autre fichier sous `projects/campus360/` au moment de la cartographie.
+**Aucun** code, test, lockfile, secret ou configuration sous ce chemin.
+
+### 2.2 Autres projets workspace (hors pilote d’action)
+
+| Chemin | Statut OPS1 |
+|--------|-------------|
+| `projects/sfia-studio/**` | Hors allowlist d’action OPS1 (sauf lecture de contrats SFIA Studio hors exécution scénario) |
+| `projects/chantiers360-v2/**` | **Exclu** du pilote |
+| `projects/interv360/**` | **Exclu** |
+| `projects/task-tracker/**` | **Exclu** |
+| `method/**`, `prompts/**` | **Exclu** |
+| `projects/sfia-studio/app/**`, `harness/**` | **Exclu** |
+| `.github/**`, lockfiles, secrets | **Exclu** |
+
+---
+
+## 3. Distinction périmètre éligible / allowlist
+
+| Notion | Définition |
+|--------|------------|
+| **Périmètre éligible** | Ensemble des Markdown documentaires **non protégés** sous `projects/campus360/` pouvant *être déclarés* dans une action |
+| **Allowlist d’une action** | Liste **explicite, exhaustive, 1..n** des chemins réellement autorisés (reads / creates / modifies) pour **cette** action, présentée **avant** le gate et gelée au GO |
+
+Règles :
+
+- Le rattachement à Campus360 **n’autorise aucun fichier** implicitement.
+- Hors allowlist = **interdit** (fail-closed), même si éligible.
+- Pas de wildcard implicite non explicitée dans le contrat.
+- Pas d’accès au dépôt entier.
+- Multi-fichiers **uniquement si nécessaire** au besoin.
+- Extension après GO = **interdite** ; correction + **nouveau gate**.
+
+---
+
+## 4. Cartographie fichier par fichier
+
+| Chemin | Nature | Catégorie candidate | Risque | Autorité | Éligibilité | Protection / contraintes |
+|--------|--------|---------------------|--------|----------|-------------|--------------------------|
+| `projects/campus360/README.md` | Identité, navigation, gates, séparation | **Consultable** · **Modifiable** (proportionné) | Moyen (identité projet) | Morris via gate action | Oui si justifié | Ne pas altérer la séparation méthode/projet ; pas de secrets |
+| `projects/campus360/01-opportunity-and-vision.md` | Vision / opportunité pré-cadrage | **Consultable** · **Modifiable** | Faible–moyen | Morris via gate | Oui | Diff vérifiable ; pas de PII |
+| `projects/campus360/02-sfia-cycle-coverage-hypothesis.md` | Hypothèse couverture cycles | **Consultable** · **Modifiable** | Faible | Morris via gate | Oui | Ne pas promouvoir en doctrine méthode |
+| `projects/campus360/03-pre-framing-decision-pack.md` | Decision pack clôture pré-cadrage | **Consultable** (si `allowedReads`) · **Protégé par défaut** (hors `allowedModifies` nominal) | Élevé (décisions Morris historisées) | Gate Morris **distinct** + cycle adapté + allowlist dédiée | Éligible en lecture ; **non** modifiable dans le scénario nominal OPS1 | Aucune modification de `03` dans le scénario nominal ; future modification seulement avec justification explicite |
+| Nouveau `projects/campus360/NN-*.md` | Prochain document documentaire | **Créable** (candidat) | Moyen | Morris via gate | Oui si naming cohérent | Pas de code ; Markdown seul ; justification besoin |
+| Tout hors `projects/campus360/` | — | **Exclu** | — | — | Non | Denylist structurelle |
+| Secrets, `.env`, clés, PII | — | **Exclu / protégé** | Critique | — | Non | Absents aujourd’hui ; restent interdits |
+| `method/**`, `prompts/**`, `app/**`, `harness/**`, `.github/**` | Méthode / code / CI | **Exclu** | Critique | Cycle distinct | Non | Hors OPS1 action |
+
+### 4.1 Synthèse des catégories
+
+| Catégorie | Contenu constaté / candidat |
+|-----------|-----------------------------|
+| **Consultable** | Les 4 fichiers existants **uniquement s’ils figurent dans `allowedReads`** |
+| **Créable** | Nouveaux `NN-*.md` sous `projects/campus360/` **uniquement s’ils figurent dans `allowedCreates`** |
+| **Modifiable** | `README`, `01`, `02` **uniquement s’ils figurent dans `allowedModifies`** |
+| **Protégée par défaut** | `03-pre-framing-decision-pack.md` — **hors** modifies du scénario nominal OPS1 |
+| **Exclue** | Hors `projects/campus360/` ; code ; méthode ; prompts ; secrets ; autres projets |
+| **Absente / à confirmer** | Docs cadrage détaillé `04+`, code Campus360, assets — **non présents** ; cartographie à réévaluer si le repo évolue |
+
+### 4.2 Conflits possibles
+
+| Zone | Conflit | Règle |
+|------|---------|-------|
+| Méthode SFIA | Apprentissage Campus360 ≠ standard méthode | CAPA + GO requis |
+| Prompts | Hors allowlist | Cycle distinct |
+| Code Studio | `app/**` / `harness/**` | Exclu de l’action OPS1 |
+| Configuration / CI | `.github/**`, lockfiles | Exclu |
+| Decision pack `03` | Réécriture des gates validés | Vigilance ; motif Morris obligatoire |
+
+---
+
+## 5. Règles d’allowlist opératoires (candidates)
+
+1. **Exhaustivité** — chaque chemin read/create/modify est listé avant le gate.
+2. **Distinction des rôles** — `allowedReads` / `allowedCreates` / `allowedModifies` séparés si besoin.
+3. **Justification** — chaque fichier porte une raison liée à l’objectif.
+4. **Proportion** — multi-fichiers seulement si le besoin le justifie.
+5. **Interdits explicites** — `forbiddenPaths` + denylist structurelle.
+6. **Ancrage** — `baseRef`, `headSha`, `branchName`, `contractHash` au GO.
+7. **Gel** — allowlist immuable après GO.
+8. **Extension post-GO** — refus ; nouveau contrat + nouveau gate.
+9. **Rapport** — couverture de chaque fichier ; diff consolidé + par fichier.
+10. **Default deny** — non listé = interdit.
+11. **Pas de wildcard** non explicitée (`projects/campus360/**` seul = insuffisant sauf décision Morris contraire explicite listant la sémantique).
+12. **Pas de secrets / lockfiles / code / méthode / prompts / config** sans cycle distinct.
+
+---
+
+## 6. Convention de branche candidate
+
+### 6.1 Proposition à challenger
+
+```text
+scenario/campus360-<action-slug>-<session-id-court>
+```
+
+Exemple illustratif (non exécuté) : `scenario/campus360-clarify-vision-a1b2`
+
+### 6.2 Règles candidates
+
+| Règle | Proposition |
+|-------|-------------|
+| Base | Création depuis `origin/main` (ou base **explicitement** autorisée dans le contrat) |
+| Localité | **Locale par défaut** ; **pas de push automatique** |
+| Unicité | Un `branchName` distinct par action / session courte |
+| Longueur | ≤ 80 caractères recommandés |
+| Caractères | `[a-z0-9-]` après le préfixe ; slug ASCII ; pas d’espaces |
+| Collision | Si branche existe déjà → STOP / nouveau nom / nouveau gate |
+| Branche sale | Working tree dirty hors allowlist → refus démarrage |
+| Reprise session | Même session sans nouvel actionId → pas de réutilisation opaque d’une branche d’une autre action |
+| Cleanup | Après clôture / décision Morris ; **non automatique** dans OPS1 |
+| Nouveau gate | Changement de base, de HEAD ancré, d’allowlist ou de branche ⇒ nouveau contrat + gate |
+
+**Statut :** convention **validée avec amendements** (`OPS1-SCENARIO-CAND-07` — `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST`).
+
+---
+
+## 7. Lien avec les réserves FD-CAND-20 / 26
+
+| Réserve | Apport de ce document | Statut après validation |
+|---------|----------------------|-------------------------|
+| FD-CAND-20 | 1..n explicite ; justification ; pas de wildcard ; reads/creates/modifies ; gel post-GO ; rapport consolidé + par fichier | `FD-CAND-20 — LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
+| FD-CAND-26 | Inventaire réel ; exclusions ; `03` protégé par défaut ; Campus360 exclusif | `FD-CAND-26 — LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
+
+### 7.1 Protection de `03` (amendement)
+
+- Aucune modification de `projects/campus360/03-pre-framing-decision-pack.md` dans le **scénario nominal** OPS1.
+- Lecture possible uniquement si listé dans `allowedReads`.
+- Modification future uniquement avec : justification explicite · cycle documentaire adapté · allowlist dédiée · **gate Morris distinct**.
+
+---
+
+## 8. Options si structure future change
+
+Si de nouveaux fichiers apparaissent sous `projects/campus360/` :
+
+1. Mettre à jour la cartographie (cycle doc ou amendement sous GO).
+2. Ne **pas** les considérer allowlistés par défaut.
+3. Réévaluer éligibilité (critères §11.4 du doc [`45`](./45-ops1-functional-design.md)).
+
+Si Campus360 disparaissait ou devenait ambigu : **STOP — CAMPUS360 SCOPE REQUIRES MORRIS DECISION**. *Non applicable* : structure claire et présente.
+
+---
+
+## 9. Anti-claims
+
+Pas d’autorisation globale Campus360 · pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE · pas d’ouverture tech-arch / backlog / code.
+
+---
+
+## 10. Verdict documentaire
+
+`scenario-scope-validated-with-amendments`
+
+`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`
+
+Cartographie repo-informed validée pour l’état actuel (4 fichiers). Allowlist et branche **validées avec amendements**. `03` protégé par défaut.
diff --git a/projects/sfia-studio/56-ops1-scenario-decision-pack.md b/projects/sfia-studio/56-ops1-scenario-decision-pack.md
new file mode 100644
index 0000000..fe7d7da
--- /dev/null
+++ b/projects/sfia-studio/56-ops1-scenario-decision-pack.md
@@ -0,0 +1,406 @@
+# SFIA Studio — Decision pack scénario OPS1 (validé avec amendements)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `56-ops1-scenario-decision-pack.md` |
+| **Cycle** | Conception du scénario opérationnel OPS1 |
+| **Profil** | Standard |
+| **Statut** | `scenario-decisions-validated-with-amendments` — **22 décisions validées avec amendements** (2026-07-20 18:34:47 CEST) |
+| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — consommé pour production candidate |
+| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **consommé** — Morris — 2026-07-20 18:34:47 CEST — **VALIDATION AVEC AMENDEMENTS** |
+| **Décisions** | `OPS1-SCENARIO-CAND-01`…`22` |
+| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
+| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
+| **Horodatage production** | 2026-07-20 18:08:37 CEST |
+| **Horodatage validation Morris** | 2026-07-20 18:34:47 CEST |
+| **Autorité** | Morris (L0) |
+
+> Decision pack **validé avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
+> Identifiants historiques `OPS1-SCENARIO-CAND-*` **conservés**.
+
+---
+
+## 1. Synthèse
+
+| Élément | Valeur |
+|---------|--------|
+| Nombre de décisions | **22** |
+| Statut collectif | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+| Décision Morris | `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
+| Projet pilote | Campus360 |
+| Docs | `54` scénario · `55` cartographie/allowlist/branche · `56` décisions |
+| Fermé | Tech-arch · backlog · code · delivery · live · MVP · production · Figma |
+
+---
+
+## 2. Décisions validées avec amendements
+
+## OPS1-SCENARIO-CAND-01 — Projet pilote Campus360
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Projet pilote Campus360 |
+| **Proposition** | Confirmer Campus360 comme projet pilote **exclusif** d’action OPS1. |
+| **Options alternatives** | Autre projet workspace ; multi-projets. |
+| **Impacts** | Ancre le scénario ; exclut les autres projets d’action. |
+| **Risques** | Confusion OPS1 = feature Campus360. |
+| **Dette** | Maintenir la distinction Studio vs Campus360. |
+| **Recommandation** | Retenir Campus360 exclusif. |
+| **Réserve** | FD-CAND-26 |
+| **Amendement** | Amendement : FD-CAND-26 levée pour Campus360 OPS1 ; `03` protégé par défaut. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-02 — Chemins éligibles constatés
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Chemins éligibles constatés |
+| **Proposition** | Retenir comme éligibles les 4 Markdown sous `projects/campus360/` + futurs `NN-*.md` documentaires non protégés. |
+| **Options alternatives** | Éligibilité limitée à un seul fichier ; éligibilité dossier entier via wildcard. |
+| **Impacts** | Cartographie exploitable immédiatement. |
+| **Risques** | Sur-interprétation « tout le dossier ». |
+| **Dette** | Réviser si nouveaux fichiers. |
+| **Recommandation** | Retenir la liste repo-informed + règle de révision. |
+| **Réserve** | FD-CAND-20 |
+| **Amendement** | Amendement : FD-CAND-20 levée pour OPS1 ; pas de wildcard dossier ; 1..n explicite. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-03 — Catégories consultables
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Catégories consultables |
+| **Proposition** | Les 4 fichiers existants sont consultables dans une allowlist. |
+| **Options alternatives** | Lecture seule hors contrat. |
+| **Impacts** | Permet contextualisation GPT/Cursor bornée. |
+| **Risques** | Lecture excessive hors besoin. |
+| **Dette** | Proportionner `allowedReads`. |
+| **Recommandation** | Autoriser reads listés uniquement. |
+| **Réserve** | — |
+| **Amendement** | Amendement : lecture uniquement si chemin dans `allowedReads`. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-04 — Catégories créables
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Catégories créables |
+| **Proposition** | Autoriser la création de nouveaux Markdown sous `projects/campus360/` s’ils sont listés dans `allowedCreates`. |
+| **Options alternatives** | Interdire toute création dans OPS1. |
+| **Impacts** | Couvre le cas cadrage détaillé / suite documentaire. |
+| **Risques** | Création hors naming / hors besoin. |
+| **Dette** | Convention de nommage à respecter. |
+| **Recommandation** | Création possible si listée et justifiée. |
+| **Réserve** | — |
+| **Amendement** | Amendement : création uniquement si chemin dans `allowedCreates` (naming `NN-*.md`). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-05 — Catégories modifiables
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Catégories modifiables |
+| **Proposition** | `README`, `01`, `02` modifiables si listés ; `03` **protégé par défaut** (hors scénario nominal) ; modification future de `03` seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
+| **Options alternatives** | Tout en lecture seule ; `03` totalement gelé. |
+| **Impacts** | Preuve d’écriture réelle possible. |
+| **Risques** | Réécriture silencieuse des décisions Morris dans `03`. |
+| **Dette** | Motif fort obligatoire pour `03`. |
+| **Recommandation** | Retenir vigilance sur `03`. |
+| **Réserve** | FD-CAND-20 |
+| **Amendement** | Amendement : `03` **protégé par défaut** — hors modifies du scénario nominal ; modification future seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-06 — Exclusions structurelles
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Exclusions structurelles |
+| **Proposition** | Exclure hors `projects/campus360/`, méthode, prompts, app, harness, `.github`, lockfiles, secrets, autres projets. |
+| **Options alternatives** | Allowlist large workspace. |
+| **Impacts** | Fail-closed structurel. |
+| **Risques** | Tentative d’élargissement implicite. |
+| **Dette** | Denylist à rappeler dans chaque contrat. |
+| **Recommandation** | Retenir exclusions listées. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-07 — Convention de branche
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Convention de branche |
+| **Proposition** | Adopter candidate `scenario/campus360-<action-slug>-<session-id-court>` (locale, sans push auto). |
+| **Options alternatives** | Réutiliser branche design ; nom libre non préfixé. |
+| **Impacts** | Traçabilité Git locale. |
+| **Risques** | Collision / branche sale. |
+| **Dette** | Cleanup non automatique. |
+| **Recommandation** | Retenir la convention candidate §6 doc 55. |
+| **Réserve** | FD-CAND-26 |
+| **Amendement** | Amendement : convention validée avec FD-CAND-26 levée (branche locale, sans push auto). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-08 — Allowlist exhaustive avant gate
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Allowlist exhaustive avant gate |
+| **Proposition** | Toute action présente une allowlist 1..n exhaustive avant décision Morris. |
+| **Options alternatives** | Allowlist après GO ; wildcard dossier. |
+| **Impacts** | Alignement FR-026…032. |
+| **Risques** | Oubli de fichier nécessaire. |
+| **Dette** | Correction avant GO. |
+| **Recommandation** | Retenir exhaustivité avant gate. |
+| **Réserve** | — |
+| **Amendement** | Amendement : aligné FD-CAND-20 levée (exhaustivité, gel, nouveau gate si extension). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-09 — Règle multi-fichiers
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Règle multi-fichiers |
+| **Proposition** | Multi-fichiers autorisé **uniquement si nécessaire** ; pas de plafond mono-fichier. |
+| **Options alternatives** | Revenir au mono-fichier obligatoire. |
+| **Impacts** | Alignement amendement Morris 2026-07-20 13:36 CEST. |
+| **Risques** | Allowlist disproportionnée. |
+| **Dette** | Justification par fichier. |
+| **Recommandation** | Retenir proportionnalité. |
+| **Réserve** | FD-CAND-20 |
+| **Amendement** | Amendement : multi-fichiers proportionné formalisé sous FD-CAND-20 levée. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-10 — Scénario nominal
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Scénario nominal |
+| **Proposition** | Adopter le scénario nominal §4 du doc 54 (16 étapes). |
+| **Options alternatives** | Scénario purement simulé / scripté. |
+| **Impacts** | Preuve opératoire alignée UX/flows. |
+| **Risques** | Sur-scripting des phrases. |
+| **Dette** | Ne pas figer les microcopies conversationnelles. |
+| **Recommandation** | Retenir §4. |
+| **Réserve** | UX-R02 |
+| **Amendement** | Amendement : clôture + continuation liée (FD-CAND-13 levée). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-11 — Scénario sans action
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Scénario sans action |
+| **Proposition** | Adopter variante `ACTION_NOT_REQUIRED` (§5 doc 54). |
+| **Options alternatives** | Action toujours obligatoire. |
+| **Impacts** | Prouve le caractère facultatif de l’action. |
+| **Risques** | Confusion avec abandon. |
+| **Dette** | Signal explicite distinct de NO-GO. |
+| **Recommandation** | Retenir la variante. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-12 — Correction avant GO
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Correction avant GO |
+| **Proposition** | CORRIGER invalide l’ancien contrat ; nouveau hash + nouveau gate. |
+| **Options alternatives** | Mutation in-place du contrat GO-able. |
+| **Impacts** | Alignement FR-030 amont. |
+| **Risques** | Réutilisation accidentelle ancien hash. |
+| **Dette** | Journaliser invalidation. |
+| **Recommandation** | Retenir invalidation + nouveau contrat. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-13 — Extension après GO
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Extension après GO |
+| **Proposition** | Extension allowlist post-GO refusée ; nouveau contrat + gate obligatoires. |
+| **Options alternatives** | Patch allowlist à chaud. |
+| **Impacts** | Fail-closed ; preuve PN-03. |
+| **Risques** | Pression à élargir pendant exécution. |
+| **Dette** | STOP si tentative en cours d’exécution. |
+| **Recommandation** | Retenir refus strict. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-14 — NO-GO / abandon
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | NO-GO / abandon |
+| **Proposition** | NO-GO et ABANDONNER : aucun effet Git d’exécution ; journalisation ; suite conversationnelle possible. |
+| **Options alternatives** | Effacer la session. |
+| **Impacts** | Traçabilité décisionnelle. |
+| **Risques** | Confusion NO-GO vs ACTION_NOT_REQUIRED. |
+| **Dette** | Motifs distincts. |
+| **Recommandation** | Retenir §8 doc 54. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-15 — STOP
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | STOP |
+| **Proposition** | STOP prioritaire ; arrêt / non-démarrage ; preuves conservées ; pas de reprise implicite. |
+| **Options alternatives** | STOP = pause temporaire auto-reprise. |
+| **Impacts** | Sécurité opératoire. |
+| **Risques** | Reprise ambiguë. |
+| **Dette** | Reprise = décision Morris explicite. |
+| **Recommandation** | Retenir §9 doc 54. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-16 — Échec Cursor
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Échec Cursor |
+| **Proposition** | Rapport d’échec ; pas de retry auto ; analyse candidate ; décision Morris. |
+| **Options alternatives** | Retry automatique N fois. |
+| **Impacts** | Contrôle Morris. |
+| **Risques** | Boucles coûteuses (FinOps). |
+| **Dette** | FD-CAND-15 chiffres OPEN. |
+| **Recommandation** | Retenir §10 doc 54. |
+| **Réserve** | FD-CAND-15 |
+| **Amendement** | Amendement : FinOps numériques restent OPEN (FD-CAND-15 maintenue). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-17 — Rapport incomplet
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Rapport incomplet |
+| **Proposition** | Clôture nominale interdite ; re-exécution même hash bloquée ; correction ou abandon. |
+| **Options alternatives** | Clôture avec dette silencieuse. |
+| **Impacts** | Intégrité de preuve. |
+| **Risques** | Pression à clôturer. |
+| **Dette** | Flag d’incomplétude visible UX. |
+| **Recommandation** | Retenir §11 doc 54. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-18 — Preuves négatives
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Preuves négatives |
+| **Proposition** | Exiger PN-01…09 comme batterie minimale de la démonstration OPS1. |
+| **Options alternatives** | Uniquement happy path. |
+| **Impacts** | Crédibilité fail-closed. |
+| **Risques** | Non-exécution des PN. |
+| **Dette** | Planifier PN dans la démo. |
+| **Recommandation** | Retenir §12 doc 54. |
+| **Réserve** | live |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-19 — Critères de réussite
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Critères de réussite |
+| **Proposition** | Adopter la matrice §14 doc 54 comme critères de succès de démonstration. |
+| **Options alternatives** | Critères delivery/MVP. |
+| **Impacts** | Borne la preuve opératoire. |
+| **Risques** | Glissement vers claims production. |
+| **Dette** | Anti-claims obligatoires. |
+| **Recommandation** | Retenir la matrice. |
+| **Réserve** | — |
+| **Amendement** | Amendement : critères incluent continuation liée post-CLOSE (FD-CAND-13). |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-20 — Cleanup branche d’exécution
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Cleanup branche d’exécution |
+| **Proposition** | Cleanup local (et distant si jamais poussée) uniquement après GO Morris distinct ; pas automatique. |
+| **Options alternatives** | Cleanup auto en fin de session. |
+| **Impacts** | Évite perte de preuves. |
+| **Risques** | Branches orphelines. |
+| **Dette** | Procédure post-démo. |
+| **Recommandation** | Retenir cleanup gouverné. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-21 — Limites FinOps
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Limites FinOps |
+| **Proposition** | FinOps reste placeholder ; aucun plafond numérique figé dans ce cycle. |
+| **Options alternatives** |  inventer des seuils. |
+| **Impacts** | Évite fausse précision. |
+| **Risques** | Coût live non borné numériquement. |
+| **Dette** | FD-CAND-15 avant live. |
+| **Recommandation** | Maintenir OPEN. |
+| **Réserve** | FD-CAND-15 |
+| **Amendement** | Amendement : FD-CAND-15 **maintenue** jusqu’au gate FinOps/live — aucun seuil inventé. |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+## OPS1-SCENARIO-CAND-22 — Condition d’ouverture architecture technique
+
+| Champ | Contenu |
+|-------|---------|
+| **Sujet** | Condition d’ouverture architecture technique |
+| **Proposition** | L’architecture technique OPS1 reste **fermée** ; ouverture uniquement par GO Morris explicite distinct après validation scénario (si retenue). |
+| **Options alternatives** | Ouvrir tech-arch automatiquement après ce document. |
+| **Impacts** | Respect du routage SFIA. |
+| **Risques** | Ouverture prématurée. |
+| **Dette** | Gate tech-arch séparé. |
+| **Recommandation** | Ne pas ouvrir tech-arch dans ce cycle. |
+| **Réserve** | — |
+| **Amendement** | — |
+| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
+
+
+---
+
+## 3. Matrice de couverture minimale
+
+| Thème requis | Décision(s) |
+|--------------|-------------|
+| Projet pilote Campus360 | CAND-01 |
+| Chemins éligibles | CAND-02 |
+| Consultables / créables / modifiables | CAND-03…05 |
+| Exclusions | CAND-06 |
+| Multi-fichiers | CAND-09 |
+| Allowlist exhaustive | CAND-08 |
+| Convention de branche | CAND-07 |
+| Scénario nominal | CAND-10 |
+| Sans action | CAND-11 |
+| Correction avant GO | CAND-12 |
+| Extension après GO | CAND-13 |
+| NO-GO | CAND-14 |
+| STOP | CAND-15 |
+| Échec Cursor | CAND-16 |
+| Rapport incomplet | CAND-17 |
+| Critères de réussite | CAND-19 |
+| Preuves négatives | CAND-18 |
+| Cleanup | CAND-20 |
+| FinOps | CAND-21 |
+| Ouverture architecture technique | CAND-22 |
+
+---
+
+## 4. Réserves — traitement sous ce GO
+
+| Réserve | Statut |
+|---------|--------|
+| **FD-CAND-13** | `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` |
+| **FD-CAND-20** | `LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
+| **FD-CAND-26** | `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
+| **FD-CAND-15** | `MAINTAINED UNTIL FINOPS/LIVE GATE` |
+| **UX-R01…R04** | **Maintenues** et routées (non levées ici) |
+| **Isolation / CI** | `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` |
+| **Tech-arch / backlog / delivery / live** | **Fermés** |
+
+---
+
+## 5. Anti-claims
+
+Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE.
+La validation scénario **n’ouvre pas** tech-arch, backlog, code, delivery ni live.
+
+---
+
+## 6. Verdict
+
+`scenario-decisions-validated-with-amendments`
+
+`OPS1 SCENARIO VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL`
+
+`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`
+
+22 / 22 décisions `OPS1-SCENARIO-CAND-01…22` validées avec amendements. Identifiants historiques conservés.
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 3b0d6bf..7c9ccd4 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Choix Morris du cycle suivant — scénario, architecture technique, backlog ou autre cycle explicitement ouvert ; tech-arch / backlog / delivery / live / MVP — **non ouverts automatiquement** |
+| **Prochaine décision** | Choix Morris du cycle suivant (architecture technique / backlog / autre) — **non ouverts automatiquement** ; scénario OPS1 **validé avec amendements** (`G-OPS1-SCENARIO-VAL` consommé) |

 ---

@@ -368,11 +368,11 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 ## 8. Prochaine décision

-1. Choix Morris du cycle suivant — scénario (`G-OPS1-SCENARIO-VAL`), architecture technique, backlog ou autre cycle **explicitement** ouvert.
+1. Scénario OPS1 **validé avec amendements** — docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) · `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
 2. Architecture technique / backlog / delivery / live GPT-Cursor / MVP — **FERMÉS** (non ouverts automatiquement).
-3. Réserves OPS1 maintenues (FD-CAND-13/15/20/26 · FinOps · Campus360 · live · CI · isolation · UX-R01…UX-R04).
+3. Réserves restantes : FD-CAND-15 · UX-R01…R04 · live · CI/isolation (routées tech-arch) · FinOps numériques.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 FRAMING / DESIGN / ARCH / UX VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 SCENARIO VALIDATED WITH AMENDMENTS`


 ---
@@ -387,6 +387,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** ; **intégrés** sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` ; cleanup branche effectué |
 | Conception / archi OPS1 | Docs `45`–`50` — **VALIDATED WITH RESERVATIONS** ; intégrés (PR #237 / #239) |
 | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
+| Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -438,4 +439,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [52-ops1-visual-contract-and-figma-spec.md](./52-ops1-visual-contract-and-figma-spec.md) | Contrat visuel / Figma — page `61:2` référence desktop validée |
 | [53-ops1-ux-ui-decision-pack.md](./53-ops1-ux-ui-decision-pack.md) | `OPS1-UX-CAND-01`…`20` — **VALIDATED WITH RESERVATIONS** ; UX-R01…UX-R04 ouvertes |

-*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing/design/arch/UX VALIDATED WITH RESERVATIONS — MVP / delivery non ouverts.*
+### Scénario opérationnel OPS1 (validé avec amendements — `G-OPS1-SCENARIO-VAL` consommé)
+
+| Document | Rôle |
+|----------|------|
+| [54-ops1-operational-scenario.md](./54-ops1-operational-scenario.md) | Scénario nominal, variantes, PN, continuation liée — **VALIDATED WITH AMENDMENTS** |
+| [55-ops1-campus360-scope-and-allowlist-rules.md](./55-ops1-campus360-scope-and-allowlist-rules.md) | Cartographie Campus360 + allowlist + branche ; `03` protégé — **VALIDATED WITH AMENDMENTS** |
+| [56-ops1-scenario-decision-pack.md](./56-ops1-scenario-decision-pack.md) | `OPS1-SCENARIO-CAND-01`…`22` — **VALIDATED WITH AMENDMENTS** |
+
+*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing/design/arch/UX/scenario VALIDATED WITH AMENDMENTS/RESERVATIONS — MVP / delivery non ouverts.*

```
