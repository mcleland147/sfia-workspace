# SFIA Studio Control Tower — Review Pack Full

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-22 09:44:30 CEST |
| **Cycle** | 1 — Cadrage produit « SFIA Studio Control Tower » |
| **Profil** | Critical |
| **Gate Morris** | `GO CADRAGE SFIA STUDIO` (consommé) → sortie attendue `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |
| **Repo** | mcleland147/sfia-workspace |
| **Branche** | `framing/sfia-studio-control-tower` (locale, **non poussée**) |
| **HEAD / base** | `32e5271842b9a344a7e292614675c27ea8ed941b` = `origin/main` |
| **HEAD de référence** | `32e5271842b9a344a7e292614675c27ea8ed941b` |

---

## 1. État Git initial

- repo = mcleland147/sfia-workspace
- branche initiale main @ origin/main = `32e5271`
- staged vide ; aucun tracked modified
- seuls `.tmp-sfia-review/**` non suivis (artefacts)
- branche créée : `framing/sfia-studio-control-tower` depuis origin/main
- aucun push projet

---

## 2. Sources consultées

### Méthode
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md

### Cadrage produit historique
- projects/sfia-studio/README.md
- projects/sfia-studio/01…07 (opportunity → trajectory)

### OPS1
- 41–45, 51, 54, 57, 60–61, 63–65 (note : 63 = `63-ops1-integration-devops-foundation.md`, pas `…-contract.md`)

### Handoff I7
- branche `sfia/review-handoff`
- `sfia-review-handoff/latest-chatgpt-review.md`
- Clôture : `OPS1 I7 CLOSED WITH STRUCTURAL PRODUCT RESERVE`
- Réserve **OPS1-I7-R01** : besoin tour de contrôle unique ; cible/archi non cadrées avant ce cycle
- Expérience live : readiness + interaction GPT démarrée (2 tours) ; pas d’ActionCandidate / Cursor action / VS1
- Recommandation candidate Control Tower : **ouverte en cadrage uniquement** ici

---

## 3. Documents historiques retenus / contradictions

| Observation | Statut |
|-------------|--------|
| AF-Option C VALIDÉE : « Studio ≠ orchestrateur » | **Tension** avec vision Control Tower candidate (cockpit + orchestration visible) — **non tranchée** |
| OPS1 I1–I6 livrés sur main | **Capitalisables** (session, gates, allowlist, CLI, report) |
| I7 clôturé avec R01 | **Déclencheur** du présent cadrage |
| Docs 20–28 orchestration POC | Historique ; distincts de Control Tower 66–69 |
| Aucun doc `*tower*` / collision 66–69 | Numérotation **66–69** retenue |

**Obsolescence :** aucune déclaration d’obsolescence OPS1. Reformulation AF-Option C = **décision Morris**.

---

## 4. Qualification nouvelle cible

- Cycle : Cadrage produit Critical
- Blocs activés (non décisionnels tech) : AF exploratoire, UX, sécu, DevOps, obs, FinOps, perf, REX
- Non ouverts : archi tech cible, backlog delivery, fournisseurs, commercial détaillé, indu, prod
- Cible candidate : SFIA Studio = Control Tower unique du workflow SFIA

---

## 5. Numérotation documentaire

Dernier historique : `65-ops1-integration-devops-decision-pack.md`
Séquence retenue : **66, 67, 68, 69**

---

## 6. Fichiers créés

1. projects/sfia-studio/66-control-tower-product-framing.md
2. projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
3. projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
4. projects/sfia-studio/69-control-tower-options-and-decision-pack.md

## 7. Fichiers modifiés

1. projects/sfia-studio/README.md — navigation + état `framing-open` + GO + anti-claims (pas de réécriture historique)

---

## 8. Contenu complet — fichiers créés


### Fichier : `projects/sfia-studio/66-control-tower-product-framing.md`

````markdown
# SFIA Studio — Control Tower — Cadrage produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `66-control-tower-product-framing.md` |
| **Cycle** | 1 — Cadrage produit « SFIA Studio Control Tower » |
| **Profil** | Critical |
| **Gate consommé** | `GO CADRAGE SFIA STUDIO` |
| **Gate de sortie attendu** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |
| **Statut** | `framing-open` — **candidat** ; **non validé** |
| **Baseline méthode** | SFIA v2.6 (Option C méthode — inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — cadrage documentaire uniquement |
| **Branche** | `framing/sfia-studio-control-tower` (locale, non poussée) |
| **Base** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` |
| **Source I7** | Handoff `OPS1 I7 CLOSED WITH STRUCTURAL PRODUCT RESERVE` ; réserve **OPS1-I7-R01** |

> **Anti-claims :** ce document ne valide ni architecture technique, ni MVP, ni backlog delivery, ni industrialisation, ni Control Tower « prêt ». Toute formulation de vision est **candidate** jusqu’au GO Morris de validation du cadrage.

---

## 1. Contexte

### 1.1 Fonctionnement actuel (observation)

Le workflow SFIA opérationnel aujourd’hui reste largement **artisanal** entre systèmes :

1. Morris converse avec ChatGPT (qualification, challenge, décisions).
2. Un template / prompt est préparé pour Cursor.
3. Cursor exécute localement (souvent via copier-coller ou gate Studio OPS1).
4. Un review pack / handoff revient vers ChatGPT.
5. Morris décide (GO suivants, clôtures, réserves).

OPS1 (`41`–`65`, app sur `main`) a démontré un **vertical slice** conversation → ActionCandidate → allowlist → contrat → Cursor borné → rapport → reprise / continuation, avec gouvernance locale forte. I6 est mergé (`#253` / `32e5271`). I7 a préparé le live et amorcé une conversation GPT réelle, puis a été **clôturé avec réserve structurante** sans preuve opératoire complète d’action Cursor.

### 1.2 Valeur constatée du tandem ChatGPT + plugins + Cursor

| Valeur | Observation |
|--------|-------------|
| Qualification riche | GPT clarifie, challenge, structure |
| Exécution locale | Cursor agit dans le repo sous contraintes |
| Traçabilité Git | Diffs, branches, preuves via Git |
| Doctrine SFIA | Gates Morris, fail-closed, anti-claims |

### 1.3 Limites du copier-coller manuel

- Rupture cognitive entre « où l’on décide » et « où l’on exécute ».
- Risque de dérive de prompt / perte de contrat.
- Démonstration difficile pour un tiers (client, investisseur, coéquipier).
- Coût d’attention élevé pour un parcours répétitif.

### 1.4 Difficulté de démonstration et monétisation

Sans interface unique, le produit apparaît comme une **méthode + outils** plutôt qu’une **expérience**. La monétisation / distribution exige une expérience compréhensible, gouvernée et démontrable depuis un seul cockpit.

### 1.5 Clôture I7 et OPS1-I7-R01

D’après le handoff I7 :

- Readiness live préparée ; interaction GPT live **démarrée** (2 tours) ; **pas** d’ActionCandidate / contrat / Cursor action / preuve VS1.
- Verdict : `OPS1 I7 CLOSED WITH STRUCTURAL PRODUCT RESERVE`.
- Réserve **OPS1-I7-R01** : besoin d’une tour de contrôle unique (conversation, Git/GitHub, cycles, gates, Cursor, preuves) — **observation validée**, cible/architecture **non cadrées** jusqu’à ce cycle.

Ce cycle **consomme** le GO de cadrage ; il **n’ouvre pas** delivery, POC ni architecture validée.

---

## 2. Problème utilisateur

### 2.1 Fragmentation

ChatGPT, Cursor IDE, Git local, GitHub, et Studio OPS1 coexistent sans parcours unique. L’utilisateur doit savoir « où » faire chaque geste.

### 2.2 Absence de vision unifiée des opérations

Difficile de voir, au même endroit : sources lues, contrat, gate, exécution, fichiers touchés, tests, verdict, prochaine décision.

### 2.3 Localisation de la décision humaine

Les GO Morris existent (méthode + OPS1), mais leur matérialisation visuelle continue dans une seule interface n’est pas encore un produit démontrable de bout en bout hors OPS1 partiel.

### 2.4 Suivi sources / contrats / exécutions / preuves

OPS1 couvre une partie (session, journal, allowlist, attempt, report). Manquent : GitHub unifié, timeline produit, connecteurs, transfert Cursor sans friction, réinjection automatique systématique hors handoff.

### 2.5 Parcours tiers

Un utilisateur non-Morris ne peut pas aujourd’hui « vivre » SFIA comme produit sans formation lourde aux outils périphériques.

---

## 3. Vision cible candidate

> **Candidate jusqu’au `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`.**

SFIA Studio devient la **tour de contrôle unique** du workflow SFIA :

| Rôle candidat | Description |
|---------------|-------------|
| Cockpit conversationnel | GPT multi-tours, contexte projet, reprise post-rapport |
| Tour de contrôle | Timeline visible des opérations et états |
| Orchestrateur transparent | Prépare, envoie, suit, récupère — **sans** se substituer à Morris |
| Point unique de décision | Gates Morris visibles, non contournables |
| Interface de visualisation | Branches, worktrees, diffs, tests, preuves |
| Journal d’audit | Corrélation session / cycle / action / exécution |
| Façade produit de la méthode | Doctrine SFIA consommée, non réécrite |

### Tension documentaire explicite (non tranchée)

L’historique valide **AF-Option C** : « Studio ≠ orchestrateur » (cockpit vs moteur déterministe séparé).

La cible Control Tower **candidat** élargit Studio comme **interface + couche d’orchestration visible**. Cela n’invalide pas automatiquement AF-Option C : une séparation logique cockpit / policy engine / exécuteurs peut subsister **derrière** une UI unique.

**Décision Morris requise** (hors ce document) : conserver, reformuler ou remplacer AF-Option C pour la trajectoire Control Tower.

---

## 4. Principes structurants (candidats)

1. Studio est l’**interface unique de pilotage**.
2. **Git** reste la source de vérité technique durable.
3. **GPT** qualifie, challenge et propose — n’autorise pas.
4. **Cursor** exécute localement sous contrat.
5. **Morris** décide (L0).
6. Aucune intention conversationnelle ≠ autorisation.
7. Toute opération sensible → **gate** explicite.
8. Zéro copier-coller manuel entre Studio et Cursor pour les parcours courants.
9. Orchestration **visible et explicable**.
10. Automatiser l’exécution répétable, **jamais** l’arbitrage structurant.
11. **Fail-closed**.
12. Observabilité et audit **par défaut**.
13. Méthode SFIA v2.6 **consommée**, non modifiée ici.
14. Anti-claims : pas de MVP / production / L5 global dans ce cadrage.

---

## 5. Acteurs et responsabilités (candidats — non déploiement)

| Acteur | Responsabilité candidate |
|--------|--------------------------|
| Morris / décideur | Gates, validations, clôtures, arbitrages |
| Utilisateur Studio futur | Opère les cycles dans le cockpit (rôle à préciser) |
| GPT | Conversation, qualification, structuration, résumé |
| Orchestrateur Studio (logique) | Routage d’outils, contrats, suivi, agrégation preuves |
| Policy engine | Allowlists, stops, refus déterministes |
| Git local | Vérité locale, worktrees, diffs |
| GitHub | Remote, PR, checks (lecture puis écriture gouvernée) |
| Cursor CLI / agent | Exécution locale bornée |
| MCP Cursor éventuels | Capacités Cursor déjà configurées (ex. Figma) — **indirectes** |
| Stockage sessions / preuves | Journal, artefacts, redaction |

Aucune séparation physique (processus, services, packaging) n’est validée ici.

---

## 6. Question produit centrale

**Comment transformer le workflow artisanal ChatGPT ↔ Morris ↔ Cursor ↔ Git/GitHub en une expérience intégrée, visuelle, gouvernée et transparente dans SFIA Studio, sans perdre la doctrine SFIA ni l’autorité humaine ?**

Réponse candidate (non décision) : en faisant de Studio le **point unique d’intention, de décision et de visualisation**, tout en gardant Git comme vérité, Cursor comme exécuteur local, GPT comme raisonneur outillé, et Morris comme seul autorisateur des opérations sensibles.

---

## 7. Liens

- Capacités / parcours : `67-control-tower-capabilities-and-user-journeys.md`
- Périmètre / succès / risques : `68-control-tower-scope-success-criteria-and-risks.md`
- Options / decision pack : `69-control-tower-options-and-decision-pack.md`
- Réserve source : handoff I7 — OPS1-I7-R01
````


### Fichier : `projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md`

````markdown
# SFIA Studio — Control Tower — Capacités et parcours utilisateurs

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `67-control-tower-capabilities-and-user-journeys.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | `framing-open` — candidat ; **non validé** |
| **Complète** | `66-control-tower-product-framing.md` |
| **Gate** | `GO CADRAGE SFIA STUDIO` |

---

## 1. Cartographie de capacités (candidates)

### 1.1 Conversation et raisonnement

| Capacité | Description candidate |
|----------|----------------------|
| Multi-tours | Journal ordonné, contexte session |
| Contexte projet | Projet cible, HEAD, mode live/fixture |
| Clarification | Challenge GPT sans exécution |
| Recherche de sources | Lecture bornée Git / docs projet |
| Distinction SFIA | Observation / hypothèse / option / recommandation / décision |
| Préparation de cycle | Qualification, profil, blocs |
| Reprise post-rapport | Résumé structuré sans relance implicite |

### 1.2 Git local

Statut, branche, HEAD, recherche, lecture fichiers, diff, historique, worktrees, observation des modifications Cursor. **Lecture d’abord** ; écritures locales sous gates.

### 1.3 GitHub

Branches distantes, commits, PR, commentaires, reviews, checks, workflows ; écritures (push, PR, merge) **uniquement** sous gates distincts.

### 1.4 Cursor

| Capacité | Description candidate |
|----------|----------------------|
| Prompt canonique | Généré depuis contrat / ActionCandidate |
| Transfert sans copier-coller | Adapter Studio → Cursor CLI |
| Lancement / suivi | Logs, statut, timeouts |
| Collecte | Rapport, review pack, diff, tests |
| MCP Cursor | Utilisés **par Cursor**, non exposés comme shell GPT |
| Interdit | Shell libre exposé à GPT |

### 1.5 Gouvernance

Qualification cycle, profil, blocs, périmètre, allowlist, chemins protégés, stop conditions, gates Morris, décision explicite, traçabilité (réutilisation OPS1 autant que possible).

### 1.6 Visualisation

Timeline cycle ; outils appelés ; sources ; état Git ; action proposée ; gate ; exécution ; événements ; fichiers ; diff ; tests ; preuves ; verdict ; prochaine décision.

### 1.7 Gestion produit

Projets, sessions, cycles, historique, reprise, rôles, paramètres, coûts, secrets, connecteurs (configuration — non delivery ici).

---

## 2. Espaces UX candidats (fonctionnels, non maquette)

| Espace | Rôle |
|--------|------|
| Cockpit global | Vue d’ensemble projets / sessions |
| Conversation | Fil principal GPT |
| Panneau sources | Fichiers / docs / résultats de recherche |
| Cycle actif | Qualification, profil, blocs |
| Action candidate | Proposition séparée du chat |
| Gate Morris | GO / NO-GO / CORRIGER / ABANDONNER / STOP |
| Exécution Cursor | Statut, logs digests, attempt |
| État Git / GitHub | Branche, remote, PR |
| Diff | Fichiers touchés |
| Tests | Résultats locaux |
| Preuves | Packs, captures, handoffs |
| Décisions | Historique des gates |
| Historique | Sessions / continuations |
| Connecteurs | OpenAI / Cursor / GitHub (états) |

### Timeline visuelle candidate

```
DEMANDE → RECHERCHE SOURCES → QUALIFICATION → PROPOSITION
→ GATE → EXÉCUTION → RAPPORT → VALIDATION → GIT/PR → CLÔTURE
```

| Nature | Exemples |
|--------|----------|
| Visible | Timeline, badges mode, IDs corrélés |
| Interactif | Chat, gates, filtres sources |
| Repliable | Logs techniques, digests |
| Bloquant | Gate avant exécution / write remote |
| Consultable après | Session CLOSED, preuves |
| Exportable | Review pack, handoff (mécanisme existant) |

Aucun design ne devient baseline dans ce cycle.

---

## 3. Parcours principaux

### P1 — Question repo-informed sans action

| Champ | Contenu |
|-------|---------|
| Déclencheur | Question utilisateur sur le repo |
| Systèmes | GPT + Git local read |
| Étapes | Chat → outils lecture → réponse |
| Gates | Aucun (lecture) |
| Résultat | Réponse ; éventuellement ACTION_NOT_REQUIRED |
| Erreurs | Repo inaccessible ; chemin hors allowlist lecture |
| Preuves | Tours + events lecture |

### P2 — Cadrage d’un besoin

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin imprécis |
| Systèmes | GPT + sources |
| Étapes | Clarification multi-tours → option / recommandation |
| Gates | Aucun jusqu’à proposition d’action |
| Résultat | Besoin cadré ; pas d’exécution |
| Erreurs | Confusion intention / autorisation |
| Preuves | Journal conversationnel |

### P3 — Génération et validation d’une action Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | ACTION_REQUIRED |
| Systèmes | GPT structuration + Studio gouvernance |
| Étapes | ActionCandidate → allowlist → affichage contrat |
| Gates | Gate Morris d’action (pré-exécution) |
| Résultat | Candidate versionnée ; `NOT AUTHORIZED` jusqu’au GO |
| Erreurs | Allowlist invalide ; chemin protégé |
| Preuves | Candidate + évaluation allowlist |

### P4 — Exécution Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris ancré au contractHash |
| Systèmes | Cursor CLI + worktree |
| Étapes | Seal → attempt → run → post-check |
| Gates | GO exécution distinct du GO delivery |
| Résultat | MinimalExecutionResult |
| Erreurs | Timeout ; hors contrat ; HEAD drift |
| Preuves | attemptId, digests, files touched |

### P5 — Analyse du rapport

| Champ | Contenu |
|-------|---------|
| Déclencheur | Attempt terminée |
| Systèmes | Report service + GPT résumé |
| Étapes | Génération rapport → affichage couverture |
| Gates | Aucun pour générer ; décision après |
| Résultat | COMPLETED / REPORT_INCOMPLETE / FAILED |
| Erreurs | Preuve manquante |
| Preuves | reportId scellé |

### P6 — Correction

| Champ | Contenu |
|-------|---------|
| Déclencheur | CORRIGER |
| Systèmes | Studio gouvernance |
| Étapes | Invalider version → nouvelle candidate → nouvel hash |
| Gates | Nouveau gate requis |
| Résultat | Ancien hash non exécutable |
| Erreurs | Exécution de version obsolète (doit être refusée) |
| Preuves | Versions + décisions |

### P7 — PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Demande de readiness |
| Systèmes | Git local + tests + GPT analyse |
| Étapes | Inventaire diff → contrôles → pack |
| Gates | Gate readiness distinct |
| Résultat | Verdict ready / blocked |
| Erreurs | Scope violation |
| Preuves | Pack + checks |

### P8 — Push / PR / merge (gates distincts)

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris spécifique (push / PR / merge) |
| Systèmes | GitHub write gouverné |
| Étapes | Afficher effet distant → GO → exécuter une seule classe |
| Gates | Un gate **par** classe d’écriture distante |
| Résultat | Effet remote tracé |
| Erreurs | Refus wrapper ; scope |
| Preuves | Preuve négative / positive remote |

### P9 — Post-merge

| Champ | Contenu |
|-------|---------|
| Déclencheur | Merge constaté |
| Systèmes | Git + tests |
| Étapes | Align main → verify → cleanup gouverné |
| Gates | GO post-merge / cleanup |
| Résultat | Main aligné ; branches nettoyées si autorisé |
| Erreurs | Merge mismatch |
| Preuves | SHA main + tests |

### P10 — Capitalisation

| Champ | Contenu |
|-------|---------|
| Déclencheur | Clôture cycle |
| Systèmes | Handoff + docs |
| Étapes | Review pack → publish handoff |
| Gates | Selon typologie |
| Résultat | Handoff remote verified |
| Erreurs | Pack incomplet |
| Preuves | SHA handoff |

### P11 — Lecture GitHub seule

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin d’info remote |
| Systèmes | GitHub read |
| Étapes | Consulter PR/checks/branches |
| Gates | Aucun write |
| Résultat | Contexte remote dans chat |
| Erreurs | Auth / scope |
| Preuves | Events lecture |

### P12 — Figma via Cursor MCP (indirect)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin design dans une action Cursor |
| Systèmes | Cursor + MCP Figma (chez Cursor) |
| Étapes | Contrat autorise l’intention ; Cursor utilise ses MCP |
| Gates | Gate action Cursor ; **pas** d’exposition MCP à GPT Studio |
| Résultat | Artefacts design via Cursor |
| Erreurs | MCP indisponible |
| Preuves | Rapport Cursor + réserves |

---

## 4. Matrice lecture / écriture (rappel)

| Classe | Premier incrément candidat |
|--------|----------------------------|
| Lecture Git/GitHub | Oui (preuve Tool Gateway) |
| Analyse | Oui |
| Écriture locale | Sous contrat Cursor |
| Commit / push / PR / merge | Plus tard, gates distincts |
| Suppression | Rare, gate fort |

Voir aussi `68` (périmètre) et `69` (options).
````


### Fichier : `projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md`

````markdown
# SFIA Studio — Control Tower — Périmètre, critères de succès et risques

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `68-control-tower-scope-success-criteria-and-risks.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | `framing-open` — candidat ; **non validé** |
| **Complète** | `66`, `67`, `69` |

> **MVP non défini / non validé.** POC et produit cible sont **distingués**. Aucun claim production / live-ready.

---

## 1. Produit cible (vision longue durée)

### In-scope (candidat)

- Interface unique de pilotage du workflow SFIA.
- Conversation GPT + outils bornés.
- Visualisation Git local / GitHub.
- Préparation / affichage contrats et gates Morris.
- Déclenchement et suivi Cursor sans copier-coller.
- Réinjection automatique des résultats dans la conversation.
- Journal d’audit corrélé.
- Opérations Git/GitHub gouvernées par classes de risque.
- Multi-projets progressif ; rôles futurs.

### Out-of-scope (candidat)

- Remplacement de Cursor IDE comme environnement d’édition riche.
- Automatisation L5 globale des décisions Morris.
- Modification de la méthode SFIA dans ce produit.
- Shell générique exposé à GPT.
- « Studio = seule vérité » (Git reste vérité).

### Hypothèses

- Morris reste L0.
- SFIA v2.6 reste baseline méthode.
- Un utilisateur peut opérer sans quitter Studio pour les gestes courants.

### Dépendances

- OpenAI (ou équivalent) ; Cursor CLI ; Git ; GitHub ; stockage sessions/preuves.

### Risques

- Confusion cockpit / orchestrateur (tension AF-Option C).
- Complexité UX ; coûts API ; surface d’attaque connecteurs.

### Critères de succès produit (observables candidats)

- Parcours courant démontrable dans une seule UI.
- Aucun copier-coller Studio↔Cursor pour ces parcours.
- Gates impossibles à contourner depuis l’UI.
- Git reste vérifiable comme vérité.
- Aucune écriture distante sans gate de classe appropriée.
- Audit rejouable (session → action → exécution → preuve).

### Anti-claims

Pas de « produit complet atteint », « industrialisé », « multi-tenant prêt ».

---

## 2. POC technique suivant (faisabilité — candidat)

Objectif : prouver qu’une **orchestration intégrée** est faisable sans livrer le produit.

### In-scope candidat

- Tool Gateway **read-only** Git local (+ GitHub read si prêt).
- Cursor Adapter : transfert prompt + run CLI + collecte résultat.
- Timeline minimale d’événements dans Studio.
- Réinjection d’un résumé d’exécution dans le chat.
- Réutilisation maximale OPS1 (session, gates, allowlist, report).

### Out-of-scope candidat

- Write GitHub ; multi-users ; packaging commercial ; refonte UX pixel.
- Nouveau backlog delivery complet ; choix fournisseur définitif.

### Hypothèses

- OPS1 SQLite / actions restent une base réutilisable.
- Cursor CLI reste le canal d’exécution local.

### Dépendances

- Capacités live déjà présentes (OpenAI, Cursor bin) — observées en I7 readiness.

### Risques

- Sur- promettre le POC comme MVP.
- Refaire OPS1 au lieu de l’étendre.

### Critères de succès POC (candidats)

1. GPT consulte Git via outils bornés (preuve négative hors allowlist).
2. Prompt Cursor généré et transmis **sans** copier-coller.
3. Exécution CLI sous contrat ; events visibles.
4. Résultat réinjecté automatiquement dans la session.
5. Gate Morris toujours requis avant exécution.
6. Aucun effet GitHub write.

### Anti-claims

POC ≠ produit ; POC ≠ MVP ; succès POC ≠ monétisation.

---

## 3. MVP candidat (non validé)

> **Non sélectionné / non décidé.** Zone de cadrage uniquement.

### In-scope candidat (hypothèse de travail)

- Un projet pilote.
- Parcours : question → action Cursor → rapport → décision → éventuellement PR readiness.
- GitHub **read** + écritures minimales sous gates (à arbitrer).
- UX démontrable à un tiers.

### Out-of-scope candidat

- Couverture 15 cycles ; marketplace ; multi-tenant ; L5.

### Hypothèses

- Un persona « opérateur SFIA » peut terminer un cycle utile sans Morris à chaque micro-geste (Morris reste sur gates structurants).

### Dépendances

- Succès POC Tool Gateway + Cursor Adapter.
- Décision sur AF-Option C reformulée.

### Risques

- MVP trop large (usine à gaz).
- MVP trop étroit (OPS1 + polish) sans valeur monétisable.

### Critères de succès MVP (candidats — non décidés)

- Tiers non formé aux plugins ChatGPT peut suivre un cycle bout-en-bout dans Studio.
- Valeur métier identifiable (gain de temps / réduction d’erreurs / démontrabilité).
- Doctrine SFIA intacte (gates, fail-closed, anti-claims).

### Anti-claims

Aucun MVP « défini » ou « ready » dans ce cycle.

---

## 4. Critères transverses observables (rappel gate)

| Critère | Cible |
|---------|-------|
| Zéro copier-coller courant Studio↔Cursor | Produit / POC |
| GPT → Git/GitHub outils bornés | POC+ |
| Prompt Cursor auto | POC+ |
| Cursor CLI sous contrat | POC+ (OPS1 partiel déjà) |
| Events d’exécution visibles | POC+ |
| Réinjection auto résultats | POC+ |
| Gates visibles non contournables | Produit (OPS1 partiel) |
| Git = vérité | Toujours |
| Remote write sans gate | Interdit |
| Démo single-UI | Produit / MVP candidat |

---

## 5. Risques consolidés

| ID | Risque | Mitigation candidate |
|----|--------|----------------------|
| R1 | Tension AF-Option C vs Control Tower | Décision Morris explicite |
| R2 | Scope creep MVP | Trajectoire T0–T9 + gates |
| R3 | Secrets / connecteurs | Backend-only ; redaction |
| R4 | Lock-in OpenAI / Cursor | Options A/B/C ; adapters |
| R5 | Dette OPS1 abandonnée trop tôt | Matrice réutiliser / refactor / abandon |
| R6 | Coûts tokens | FinOps observabilité dès POC |
| R7 | Démo ≠ industrialisation | Anti-claims systématiques |

---

## 6. Sécurité et gouvernance (exigences candidates)

Voir détail opérationnel dans `69`. Exigences minimales :

- tokens côté backend ; aucun secret au modèle ;
- scopes minimaux ; séparation read/write ;
- allowlist repos/chemins ; outils filtrés par session ;
- confirmation humaine actions sensibles ;
- journal append-only (ou équivalent) ; redaction ;
- fail-closed ; isolation worktrees ;
- pas de shell générique ; MCP non approuvés interdits ;
- connecteurs désactivables ; identité utilisateur ; multi-users futurs.

### Classification des opérations

| Classe | Niveau SFIA (ordre de grandeur) | Gate | Preuve | Rollback |
|--------|----------------------------------|------|--------|----------|
| Lecture | L1–L2 | Non / soft | Event | N/A |
| Analyse | L2 | Non | Event | N/A |
| Écriture locale | L3 | GO action | Diff + attempt | Revert local / abandon worktree |
| Commit | L3 | GO commit | SHA | Revert commit (règles) |
| Push | L3–L4 | GO push | Remote SHA | Rare / dangereux |
| Création PR | L3–L4 | GO PR | URL PR | Close PR |
| Merge | L4 | GO merge | Merge SHA | Complexe |
| Suppression | L4 | GO fort | Audit | Souvent impossible |
| Opération externe | L3–L4 | GO dédié | Audit | Selon système |

---

## 7. FinOps / performance / observabilité (candidats)

| Domaine | Contenu |
|---------|---------|
| Coûts | API GPT ; GitHub ; hébergement ; stockage preuves — **pas d’estimation financière non sourcée** |
| Quotas / tokens | Limites par session ; affichage NOT AVAILABLE si inconnu |
| Durée Cursor | Timeouts ; reprise manuelle (pas auto-retry silencieux) |
| Streaming | Conversation ; logs digests |
| Corrélation | sessionId / cycle / action / attempt / report |
| Métriques | Succès / échec / coût / latence |
| Rétention | Politique à définir (non décidée) |

---

## 8. Trajectoire candidate (option, non décision)

| Étape | Objectif | Valeur | Dépendances | Preuve | Gate Morris | Dette évitée | Stop |
|-------|----------|--------|-------------|--------|-------------|--------------|------|
| T0 | Cadrage produit | Direction | — | Docs 66–69 | Validation cadrage | — | Ambiguïté cible |
| T1 | Archi fonctionnelle | Frontières | T0 | Docs AF | GO archi fct | Tech trop tôt | Conflit AF-C |
| T2 | Tool Gateway read-only | Faisabilité outils | T1 | Spike | GO POC gateway | Write trop tôt | Secrets |
| T3 | Cursor Adapter | Zéro copier-coller | T2 | Spike | GO adapter | Shell libre | Hors contrat |
| T4 | Orchestration bout-en-bout | Démo intégrée | T3 | E2E | GO orch | — | Gate contourné |
| T5 | Git local write gouverné | Closing loop local | T4 | Preuves | GO write local | — | Dirty tree |
| T6 | GitHub write gates | Remote gouverné | T5 | Preuves | GO GitHub write | — | Remote effect |
| T7 | UX démontrable | Montrable tiers | T4+ | Capture | GO UX | Pixel early | — |
| T8 | Définition MVP | Périmètre valeur | T7 | Decision pack | GO MVP def | Scope creep | — |
| T9 | Industrialisation ciblée | Exploitation | T8 | RUN | GO indu | — | Prod claim |

Cette séquence est une **option**.
````


### Fichier : `projects/sfia-studio/69-control-tower-options-and-decision-pack.md`

````markdown
# SFIA Studio — Control Tower — Options et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `69-control-tower-options-and-decision-pack.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | `framing-open` — candidat ; **non validé** |
| **Complète** | `66`, `67`, `68` |
| **Gate de sortie attendue** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |

> Aucune option n’est validée. La recommandation ci-dessous est **candidate**. Morris décide.

---

## 1. Questions structurantes — réponses candidates

| # | Question | Réponse candidate |
|---|----------|-------------------|
| 1 | Studio = interface seule ou aussi orchestrateur ? | **Les deux** dans la cible Control Tower : cockpit + couche d’orchestration **visible**. À arbitrer vs AF-Option C historique (« Studio ≠ orchestrateur »). |
| 2 | « Studio ≠ orchestrateur » encore compatible ? | **Tension documentaire**. Compatible seulement si « orchestrateur » = moteur opaque hors Studio ; **incompatible** si Studio doit être le point unique de pilotage visible. Décision Morris requise à la validation de cadrage. |
| 3 | Où s’exécute l’orchestration ? | Candidat : **backend Studio** (policy + adapters), UI pour visualisation/décision ; Cursor pour exécution locale ; Git = vérité. |
| 4 | Rôle OpenAI Responses API ? | Raisonnement, clarification, structuration, appels d’**outils bornés** ; **jamais** autorisation ni shell libre. |
| 5 | Comment GPT reçoit les outils ? | Tool calling / function calling filtré par session (allowlist d’outils + scopes). Mécanisme exact = option A/B/C. |
| 6 | GitHub : MCP / API / adapter ? | **Indécis** ; hybride candidat (API ou MCP derrière adapter Studio). |
| 7 | Git local : MCP ou fonctions internes ? | Candidat : **adapter interne** (contrôle allowlist/worktree) ; MCP possible plus tard. |
| 8 | Cursor CLI déclenché / suivi ? | Adapter Studio : seal contrat → spawn CLI → stream/digest logs → collect result (héritage OPS1 I5). |
| 9 | MCP Cursor existants ? | **Consommés par Cursor**, pas exposés à GPT Studio comme outils génériques. |
| 10 | Rapport Cursor → Studio auto ? | Collecte post-run par adapter → persistance → résumé conversation (héritage I6). |
| 11 | Matérialisation des gates ? | UI gate + décision persistée + ancrage contractHash (OPS1 I3). |
| 12 | Empêcher exécution implicite ? | Fail-closed ; intention ≠ autorisation ; GO explicite ; pas d’auto-retry silencieux. |
| 13 | Secrets ? | Backend-only ; jamais au modèle ; redaction logs ; connecteurs désactivables. |
| 14 | Isolation projets / worktrees ? | Un worktree d’action par tentative ; allowlist chemins ; pas de partage implicite. |
| 15 | Journalisation ? | Append-only (ou équivalent) corrélé session/action/attempt/report. |
| 16 | Session interrompue ? | Reprise lecture d’état persisté ; pas de relance d’exécution sans nouveau GO. |
| 17 | Timeouts / crashs / partiels ? | Statuts FAILED / REPORT_INCOMPLETE ; reprise manuelle gouvernée. |
| 18 | Séparer lecture / write local / write remote ? | Classes d’opérations + gates distincts (voir `68`). |
| 19 | Read-only au 1er incrément ? | Tool Gateway Git (+ GitHub read) ; pas de write remote. |
| 20 | Preuve minimale vers MVP ? | POC T2–T4 : outils read + Cursor sans copier-coller + réinjection + gates intacts. |
| 21 | OPS1 réutilisable ? | Session, conversation live, ActionCandidate, gates, allowlist, contrat, exécution CLI, report/continuation, UX contrats. |
| 22 | OPS1 obsolète ? | Fragments « Studio ≠ orchestrateur » si Control Tower validé ; évent. UX trop étroite « vertical slice » si élargissement cockpit ; pas le code gates/fail-closed. |
| 23 | Conserver le terme OPS1 ? | Candidat : **capitaliser OPS1 comme fondation**, nommer la trajectoire suivante **Control Tower** (éviter OPS2 ambigu tant que cible non validée). |
| 24 | Expérience client / investisseur ? | Une UI : demande → sources → gate → Cursor → rapport → Git — sans plugins ChatGPT. |
| 25 | Monétisable vs outil interne ? | Gouvernance + audit + démontrabilité + réduction d’erreurs ; pas seulement un chat wrapper. |

---

## 2. Option A — Intégrations propriétaires internes

**Description.** Studio implémente directement Git local, GitHub, Cursor, OpenAI tool calling.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Contrôle total ; UX cohérente ; pas de dépendance MCP pour le cœur |
| Limites | Coût de build élevé ; maintenance multi-API |
| Dette | Adapters propriétaires à long terme |
| Sécurité | Surface maîtrisée si allowlists strictes |
| Portabilité | Faible vers d’autres runtimes |
| Complexité | Haute côté Studio |
| Coûts | Eng. élevés ; API fournisseurs |
| Dépendances | OpenAI, GitHub API, Cursor CLI |
| UX | Potentiellement la meilleure intégration |
| Monétisation | Produit différencié possible |
| Réversibilité | Moyenne (réécriture adapters) |
| Automatisation | Haute sous gates |
| Lock-in | Studio + fournisseurs directs |

---

## 3. Option B — Architecture MCP dominante

**Description.** Studio s’appuie sur des serveurs MCP pour la majorité des systèmes.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Standardisation ; réutilisation écosystème |
| Limites | Maturité / confiance MCP variables ; gouvernance plus difficile |
| Dette | Chaîne MCP à certifier |
| Sécurité | Risque MCP non approuvés ; besoin catalogue strict |
| Portabilité | Bonne si MCP stables |
| Complexité | Orchestration + policy sur MCP |
| Coûts | Moins de code custom, plus d’intégration |
| Dépendances | Serveurs MCP + hosts |
| UX | Variable selon serveurs |
| Monétisation | Différenciation = policy + UX, pas les MCP |
| Réversibilité | Moyenne |
| Automatisation | Haute si MCP write |
| Lock-in | Écosystème MCP |

---

## 4. Option C — Architecture hybride (exemple candidat)

**Exemple :**

- Git local : adapter interne
- Cursor : adapter interne via CLI
- GitHub : API directe **ou** MCP derrière adapter
- Figma : indirect via Cursor MCP
- OpenAI : Responses API + tool calling
- Policy engine Studio commun

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Réutilise OPS1 ; contrôle où ça compte ; MCP seulement là où utile |
| Limites | Deux styles d’intégration à documenter |
| Dette | Adapters + évent. bridges MCP |
| Sécurité | Policy unique ; MCP Cursor hors surface GPT |
| Portabilité | Correcte (adapters) |
| Complexité | Moyenne-haute, progressive |
| Coûts | Échelonnés (T2→T6) |
| Dépendances | Comme A, plus option MCP GitHub |
| UX | Cockpit unifié possible |
| Monétisation | Bonne (gouvernance + démo) |
| Réversibilité | Bonne si frontières claires |
| Automatisation | Progressive sous gates |
| Lock-in | Réduit vs A pur / B pur |

---

## 5. Option D — Maintien OPS1 enrichi

**Description.** Évolution progressive de l’existant sans refonte structurelle immédiate (pas de « tour de contrôle » explicite).

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Faible risque immédiat ; capitalise I1–I6 |
| Limites | Ne résout pas la fragmentation ChatGPT↔Cursor pour un tiers ; réserve I7-R01 non adressée |
| Dette | Accrue si on empile sans vision |
| Sécurité | Déjà fail-closed localement |
| Portabilité | Limitée |
| Complexité | Plus bas court terme |
| Coûts | Plus bas court terme |
| Dépendances | OPS1 actuel |
| UX | Slice opérationnel, pas cockpit |
| Monétisation | Faible sans démo intégrée |
| Réversibilité | Haute court terme |
| Automatisation | Comme aujourd’hui |
| Lock-in | Trajectoire OPS1 |

---

## 6. Recommandation candidate (≠ décision Morris)

### Synthèse

**Recommander d’explorer l’Option C (hybride)** comme direction de cadrage, avec **réutilisation maximale d’OPS1**, et **Option D uniquement** comme filet si Morris refuse toute reformulation de cible.

### Utile maintenant ?

Oui : cadrer la cible après I7-R01 évite de livrer I8+ dans un cul-de-sac produit.

### Plus simple possible ?

Oui : T2 Tool Gateway **read-only** + T3 Cursor Adapter sans write GitHub.

### Quelle dette ?

Adapters internes (Git/Cursor) + tension AF-Option C à trancher ; éviter dette MCP précoce.

### Quelle capacité prouver avant de construire davantage ?

1. Lecture Git bornée depuis la conversation.
2. Transfert Cursor sans copier-coller.
3. Réinjection rapport + gates intacts.

### Réutiliser d’OPS1

Session, live GPT, ActionCandidate, gates 4 actions, allowlist, contract hash, exécution CLI, report/continuation, microcopies gouvernance, journal events.

### Abandonner / conserver / refactorer

| Action | Élément |
|--------|---------|
| Conserver | Doctrine SFIA, fail-closed, gates, Git vérité, anti-claims |
| Refactorer | Frontière « Studio ≠ orchestrateur » → cockpit + orchestration visible |
| Abandonner (si Control Tower validé) | Trajectoire « enrichir OPS1 sans vision cockpit » comme seule voie |
| Ne pas abandonner | Code I1–I6 utile ; preuves ; allowlist Campus360 patterns |

### Gate Morris suivante

`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`
Puis, si validé : gate d’architecture fonctionnelle (T1) — **non ouverte** ici.

---

## 7. Décisions Morris nécessaires

1. Valider ou non la **vision Control Tower** (cockpit + orchestration visible).
2. Trancher la compatibilité / reformulation d’**AF-Option C**.
3. Choisir une **direction d’options** (A / B / C / D) — sans figer l’archi technique.
4. Autoriser ou non un **POC T2–T4** après validation cadrage.
5. Conserver ou non le **libellé OPS1** pour la suite.
6. Clarifier l’ambition **MVP candidat** (interne vs démontrable tiers) — sans figer le MVP.

**Non décidé ici :** architecture technique cible, fournisseurs, backlog delivery, MVP, industrialisation, promotion SFIA v3.0, automatisation L5.

---

## 8. Matrice OPS1 → Control Tower (candidat)

| Bloc OPS1 | Statut candidat |
|-----------|-----------------|
| Session + journal | Réutiliser |
| Live OpenAI | Réutiliser / étendre outils |
| ActionCandidate + gates | Réutiliser |
| Allowlist / chemins | Réutiliser / généraliser |
| Cursor CLI adapter | Réutiliser / intégrer transfert auto |
| Report + continuation | Réutiliser |
| UX slice I1–I6 | Étendre vers cockpit |
| « Studio ≠ orchestrateur » | À reformuler si CT validé |
| Campus360-only slice | Élargir progressivement (pas immédiat) |
````


## 9. Diff utile complet — README.md

````diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index ccd03ee..1875d24 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44`) ; backlog OPS1 **validé avec réserves** (`60`–`62` sur `main`) ; Intégration / DevOps OPS1 **validé avec réserves** (`63`–`65` ; `G-OPS1-DEVOPS-VAL` consommé) ; `.sfia-exec/**` **ignoré** ; Node/scanner/suites/CI **ouverts ou différés** ; live / delivery / code / MVP / production **fermés** |
+| **Statut** | `control-tower-framing-open` — cadrage produit **Control Tower** ouvert (`66`–`69` ; `GO CADRAGE SFIA STUDIO` consommé) ; cible / architecture / MVP / delivery **non validés** ; héritage OPS1 : A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44`) ; backlog OPS1 **validé avec réserves** (`60`–`62`) ; Intégration / DevOps OPS1 **validé avec réserves** (`63`–`65`) ; I7 **CLOSED WITH STRUCTURAL PRODUCT RESERVE** (`OPS1-I7-R01`) ; live / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -13,15 +13,16 @@
 | **Profil SFIA** | Critical |
 | **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
+| **Base canonique** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` (I6 mergé ; cadrage Control Tower local) |
 | **Chemin** | `projects/sfia-studio/` |
-| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
+| **AF-Option C** | **VALIDÉE** (historique) — Studio ≠ orchestrateur ; **tension** avec cible Control Tower candidate — **non reformulée** ici |
+| **Cadrage Control Tower** | `66`–`69` — **`framing-open`** ; branche locale `framing/sfia-studio-control-tower` ; **non poussée** ; architecture / MVP / backlog delivery **non ouverts** |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Revue PR Draft DevOps / merge éventuel / `GO IMPLEMENT OPS1 CI` / `GO DELIVERY I1` / gate Node — **non automatiques** |
+| **Prochaine décision** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` — **non consommé** ; aucune validation architecture / MVP / delivery implicite |

 ---

@@ -147,7 +148,7 @@ Pré-cadrage
   → décision Morris : ouverture éventuelle conception fonctionnelle OPS1 (`G-OPS1-FUNC-DESIGN`) — **non ouverte**
 ```

-Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** et **canonique sur main** (PR #235 / `b686eb1`). **POC maintenu**. MVP / production / industrialisation / delivery OPS1 **non ouverts**. Trajectoire I1–I7 validée au niveau cadrage uniquement. Prochaine décision : ouverture éventuelle de `G-OPS1-FUNC-DESIGN`.
+Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** et **canonique sur main** (PR #235 / `b686eb1`). I6 mergé (`#253` / `32e5271`). I7 clôturé avec réserve structurante **OPS1-I7-R01**. Cadrage produit **Control Tower** : **`framing-open`** (`66`–`69` ; `GO CADRAGE SFIA STUDIO`). **POC maintenu**. Architecture technique Control Tower / MVP / production / industrialisation / backlog delivery **non validés / non ouverts**. Prochaine décision : `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`.

 ---

@@ -374,8 +375,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 4. Intégration / DevOps OPS1 — docs [`63`](./63-ops1-integration-devops-foundation.md)–[`65`](./65-ops1-integration-devops-decision-pack.md) **validés avec réserves** · `G-OPS1-DEVOPS-VAL` consommé (2026-07-20 21:27:26 CEST) · 24 décisions · `.sfia-exec/**` ignoré · **non intégrés sur `main` tant que PR non mergée**.
 5. Delivery / code / CI implémentée / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
 6. Réserves maintenues : Node non figé · scanner différé · suites intégration différées · CI Studio différée (`GO IMPLEMENT OPS1 CI`) · worktree≠sandbox · stack/fournisseur · FD-CAND-15 · UX-R01…R04 · live fermés.
+7. **Cadrage Control Tower** — docs [`66`](./66-control-tower-product-framing.md)–[`69`](./69-control-tower-options-and-decision-pack.md) — **`framing-open`** · `GO CADRAGE SFIA STUDIO` consommé · réserve source **OPS1-I7-R01** · gate de sortie attendue : `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` · architecture / MVP / delivery **non ouverts**.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 INTEGRATION DEVOPS VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO CONTROL TOWER FRAMING OPEN — AWAITING MORRIS VALIDATION`


 ---
@@ -393,7 +395,8 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
 | Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; intégrés sur `main` (PR #244) ; 17 epics / 41 stories / 20 décisions |
-| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** ; **pas encore** sur `main` avant merge PR |
+| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** |
+| Cadrage Control Tower | Docs `66`–`69` — **`framing-open`** (`GO CADRAGE SFIA STUDIO`) ; branche locale `framing/sfia-studio-control-tower` ; cible / archi / MVP **non validés** |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -477,4 +480,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [64-ops1-local-controls-ci-and-evidence-contract.md](./64-ops1-local-controls-ci-and-evidence-contract.md) | Matrice contrôles / commandes / preuves — **VALIDATED WITH RESERVATIONS** |
 | [65-ops1-integration-devops-decision-pack.md](./65-ops1-integration-devops-decision-pack.md) | `OPS1-DEVOPS-CAND-01`…`24` — **VALIDATED WITH RESERVATIONS** (2026-07-20 21:27:26 CEST) |

-*SFIA Studio — POC maintenu — Intégration/DevOps VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — CI / delivery / live / MVP non ouverts.*
+### Cadrage produit Control Tower (`framing-open` — non validé)
+
+| Document | Rôle |
+|----------|------|
+| [66-control-tower-product-framing.md](./66-control-tower-product-framing.md) | Contexte, problème, vision candidate, principes, acteurs — **`framing-open`** |
+| [67-control-tower-capabilities-and-user-journeys.md](./67-control-tower-capabilities-and-user-journeys.md) | Capacités, UX fonctionnelle, parcours P1–P12 — **`framing-open`** |
+| [68-control-tower-scope-success-criteria-and-risks.md](./68-control-tower-scope-success-criteria-and-risks.md) | Produit / POC / MVP candidats, critères, risques, trajectoire T0–T9 — **`framing-open`** |
+| [69-control-tower-options-and-decision-pack.md](./69-control-tower-options-and-decision-pack.md) | Options A–D, Q1–Q25, recommandation candidate — **`framing-open`** |
+
+*SFIA Studio — Control Tower **cadrage ouvert** (`66`–`69`) — architecture / MVP / delivery **non validés** — OPS1 capitalisé, non déclaré obsolète — CI / live / production non ouverts.*
````

---

## 10. Options étudiées

| Option | Intitulé |
|--------|----------|
| A | Intégrations propriétaires internes |
| B | Architecture MCP dominante |
| C | Architecture hybride (Git/Cursor adapters + OpenAI tools + GitHub API/MCP + policy Studio) |
| D | Maintien OPS1 enrichi sans refonte cockpit |

## 11. Recommandation candidate (≠ décision)

**Option C (hybride)** avec réutilisation maximale OPS1 ; preuve minimale T2–T4 (Tool Gateway read-only + Cursor Adapter + orchestration bout-en-bout) ; Option D seulement si Morris refuse la reformulation de cible.

## 12. Décisions Morris nécessaires

1. Valider ou non la vision Control Tower
2. Trancher / reformuler AF-Option C
3. Direction options A/B/C/D (sans figer l’archi)
4. Autoriser ou non POC T2–T4 après validation cadrage
5. Libellé OPS1 vs trajectoire Control Tower
6. Ambition MVP candidat (interne vs tiers) — sans figer MVP

## 13. Explicitement non validés

- Architecture technique cible
- Choix MCP / function calling / fournisseur définitif
- MVP
- Backlog delivery exécutable
- POC / MVP lancés
- Intégrations GitHub/Cursor/OpenAI productisées
- Commit / push / PR / merge projet
- Modification méthode SFIA
- Promotion SFIA v3.0
- Automatisation L5 globale
- Control Tower « validé »

## 14. Garde-fous

- Intention ≠ autorisation
- Fail-closed
- Gates distincts par classe d’opération
- Git = vérité
- Pas de shell libre à GPT
- Secrets backend-only
- Anti-claims systématiques

## 15. Risques

R1 tension AF-C · R2 scope creep MVP · R3 secrets · R4 lock-in · R5 dette OPS1 · R6 coûts tokens · R7 démo≠indu

## 16. Réserves

- OPS1-I7-R01 (source) : adressée en **cadrage**, non en delivery
- AF-Option C : tension ouverte
- Estimation FinOps : aucune estimation financière non sourcée présentée comme décision

## 17. Contrôles

```
git diff --check:

git status --short:
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md

git diff --stat:
 projects/sfia-studio/README.md | 28 ++++++++++++++++++++--------
 1 file changed, 20 insertions(+), 8 deletions(-)
```

## 18. État Git final (pré-handoff)

- Branche projet : `framing/sfia-studio-control-tower` @ `32e5271842b9a344a7e292614675c27ea8ed941b`
- Fichiers cadrage **non commités** (volontaire — aucun commit projet autorisé)
- Working tree : untracked docs 66–69 + README modified + `.tmp-sfia-review/**`
- Aucun push `framing/sfia-studio-control-tower`

## 19. Verdict

**SFIA STUDIO CONTROL TOWER FRAMING READY FOR MORRIS REVIEW**

Après publication handoff, ChatGPT doit lire :
- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`
