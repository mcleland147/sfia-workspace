# SFIA Studio — Control Tower — Cadrage produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `66-control-tower-product-framing.md` |
| **Cycle** | 1 — Cadrage produit « SFIA Studio Control Tower » |
| **Profil** | Critical |
| **Gate consommé** | `GO CADRAGE SFIA STUDIO` |
| **Gate de sortie attendu** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |
| **Statut** | **`validated`** — `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` consommé ; suite Fast Track : `70`–`72` |
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
