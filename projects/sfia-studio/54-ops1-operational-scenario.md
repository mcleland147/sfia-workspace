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
