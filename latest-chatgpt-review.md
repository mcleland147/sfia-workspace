# SFIA Studio — Review Pack — Vertical Slice Opérationnel 1 (cadrage)

- **Date/heure/fuseau :** 2026-07-20 12:00:07 CEST
- **Repo :** mcleland147/sfia-workspace (`/Users/morris/Projects/sfia-workspace`)
- **Branche :** `main`
- **HEAD / base :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **origin/main :** `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- **Cycle :** 1 — Cadrage
- **Profil :** Standard
- **Typologie :** POC / CADRAGE / PRODUIT
- **Gate consommé :** G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING
- **Baseline :** SFIA v2.6

## 1. Truth Check

- Branche courante = main
- HEAD = origin/main = `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25`
- ahead/behind = 0/0
- tracked propre avant rédaction ; staged vide
- artefacts non trackés connus : `.tmp-sfia-review/`, `projects/.tmp-sfia-review/`
- aucune branche delivery Increment E restante

## 2. Sources consultées

### Méthode
- `prompts/templates/sfia-cycle-execution-template.md` (rôle template, Git-first, Morris/Cursor)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (routage, profils, L0)

### SFIA Studio (lus / synthétisés pour cadrage)
- `README.md` (état ; resynchronisé factuellement)
- `04`–`07` (intention, contraintes, trajectoire)
- `08`–`13` (frontières Morris/GPT/Cursor/Git/Studio ; AF-Option C)
- `20`–`28` (POC orchestration Option B ; harness)
- `32`–`40` (vertical slice A–E ; états ; backlog ; anti-MVP)
- Preuves clôture E / review post-merge (contexte `CLOSED_WITH_RESERVATIONS`)

## 3. État factuel POC A–E

| Incrément | Preuve |
|-----------|--------|
| A | Cockpit mock 10 états / 4 routes |
| B | Ports fixture Studio↔harness |
| C | GPT qualification live bornée |
| D | Cursor sandbox live sous GO |
| E | Analyse GPT + Morris close → `CLOSED_WITH_RESERVATIONS` |

Capacités absentes pour un cycle opérable continu : conversation multi-tours cadrage, session persistante unifiée, historique/reprise comme critère BeB, scénario pilote documentaire réellement mené depuis UI de bout en bout.

## 4. Décision Morris (mot pour mot)

- SFIA Studio reste en phase POC ;
- le POC doit maintenant dépasser la démonstration A–E et permettre de dérouler un vrai cycle depuis l’interface ;
- le MVP futur devra permettre de piloter au minimum un projet de bout en bout, faute de quoi il n’aurait pas de valeur suffisante pour une mise en production ;
- le présent cycle autorise uniquement le cadrage du Vertical Slice Opérationnel 1 ;
- aucune conception détaillée, architecture technique, UX finale, backlog ou delivery n’est encore validé.

## 5. Scénario pilote proposé (candidat)

Variante recommandée : **Markdown non protégé**, local, réversible, sans commit/push/PR/merge automatique.  
Variante écartée pour le slice initial : correctif code `app/**`.

## 6. Options / recommandation

- Scénario : Markdown (A) > code app (B) > multi-cycles (C)
- Conversation : multi-tours bornés (recommandé)
- Persistance : minimale fonctionnelle sans figer stack (recommandé)
- Incréments : par capacités I1–I7 (candidats)

## 7. Décisions candidates

`OPS1-CAND-01` … `OPS1-CAND-14` (doc `44`) — **non validées**.

## 8. Décisions non prises

Conception détaillée, architecture technique, UX/Figma, backlog, delivery, live, stack/BDD, plafonds numériques, ouverture MVP, commit/PR des docs cadrage.

## 9. Fichiers créés / modifiés

### Créés
- `projects/sfia-studio/41-operational-vertical-slice-1-framing.md`
- `projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md`
- `projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md`
- `projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md`

### Modifiés
- `projects/sfia-studio/README.md` (statut A–E, OPS1, navigation, prochaine décision)

### Interdits non touchés
- `app/**`, `harness/**`, `method/**`, `prompts/**`, package.json/lockfiles

## 10. Diff stat / name-status

```
 projects/sfia-studio/README.md | 41 +++++++++++++++++++++++++++++------------
 1 file changed, 29 insertions(+), 12 deletions(-)

```

```
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/41-operational-vertical-slice-1-framing.md
?? projects/sfia-studio/42-operational-vertical-slice-1-flow-and-session-model.md
?? projects/sfia-studio/43-operational-vertical-slice-1-scope-and-success-criteria.md
?? projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md

```

## 11. Contenu substantiel — document 41 (complet ou extrait)

```markdown
# SFIA Studio — Cadrage du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `41-operational-vertical-slice-1-framing.md` |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Typologie** | POC / CADRAGE / PRODUIT |
| **Baseline** | SFIA v2.6 opérationnelle sur `main` |
| **Gate consommé** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` |
| **Statut** | `framing-candidate` — **non validé** ; conception, architecture, UX finale, backlog et delivery **non ouverts** |
| **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
| **Autorité** | Morris (L0) |

> Ce document cadre la **prochaine marche du POC** après le vertical slice A–E.  
> Il **ne** livre pas de conception détaillée, d’architecture technique, d’UX finale, de backlog ni de delivery.  
> Aucun claim MVP, production-ready ou industrialisation.

---

## 1. Contexte

### 1.1 Intention produit (inchangée)

SFIA Studio vise une plateforme métier permettant de **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT et Cursor sous contrôle Morris.

Cette intention est héritée des documents `01`–`07` et reste la cible produit. Le présent cycle ne la re-définit pas.

### 1.2 Décision Morris structurante (reprise)

La décision Morris qui ouvre ce cadrage est la suivante :

- SFIA Studio reste en phase POC ;
- le POC doit maintenant dépasser la démonstration A–E et permettre de dérouler un vrai cycle depuis l’interface ;
- le MVP futur devra permettre de piloter au minimum un projet de bout en bout, faute de quoi il n’aurait pas de valeur suffisante pour une mise en production ;
- le présent cycle autorise uniquement le cadrage du Vertical Slice Opérationnel 1 ;
- aucune conception détaillée, architecture technique, UX finale, backlog ou delivery n’est encore validé.

### 1.3 État factuel du POC A–E

Le vertical slice POC A–E (docs `32`–`40`, PR #229–#234) a démontré, par incréments, une chaîne gouvernée :

| Incrément | Capacité | Nature de la preuve |
|-----------|----------|---------------------|
| **A** | Cockpit UI 10 états / 4 routes P0 | Mock / mapping UX |
| **B** | Connexion Studio ↔ harness | Ports fixture |
| **C** | Qualification GPT | Live borné (2 appels historiques hors ce cycle) |
| **D** | Exécution Cursor sandbox | Live borné sous GO |
| **E** | Analyse GPT + décision Morris + synthèse | Live analyse + clôture `CLOSED_WITH_RESERVATIONS` |

**Ce qui a été prouvé :** les briques existent, sont gouvernées, et peuvent être enchaînées sous fixtures ou live contrôlé.

**Ce qui n’a pas encore été prouvé :** une utilisation **continue** permettant à Morris de **mener un vrai cycle depuis SFIA Studio** — conversation, cadrage, gates, exécution, analyse, clôture, historique et reprise — comme parcours opérable, et non comme démonstration incrémentale.

### 1.4 Distinctions obligatoires

| Terme | Définition opérationnelle pour ce cadrage |
|-------|-------------------------------------------|
| **POC A–E** | Preuve incrémentale des briques (cockpit → qualif → exécution → analyse → clôture), clôturée `CLOSED_WITH_RESERVATIONS` |
| **Vertical Slice Opérationnel 1** | Prochaine marche POC : **un cycle réellement pilotable depuis l’UI Studio**, sur un scénario documentaire borné |
| **MVP futur** | Première version réellement utilisable pour piloter **au minimum un projet de bout en bout** — **non ouvert**, **non défini** ici |
| **Produit cible** | Plateforme complète durable (multi-cycles, multi-projets, industrialisation) — hors slice |

---

## 2. Problème utilisateur

### 2.1 Problème

Morris dispose aujourd’hui :

- d’un cockpit Studio qui **montre** les étapes A–E ;
- d’un harness capable de qualification, exécution et analyse **sous contrats** ;
- d’une méthode SFIA v2.6 et d’un template d’exécution Git-first.

Mais la boucle réelle reste encore **fragmentée** :

```text
Morris → (outils externes / ChatGPT) → template Git → Cursor → review → décision
```

Le problème du Vertical Slice Opérationnel 1 n’est plus « les briques existent-elles ? » (répondu par A–E avec réserves).  
C’est : **Morris peut-il piloter un cycle SFIA borné de bout en bout depuis SFIA Studio, avec preuves, gates humains et reprise ?**

### 2.2 Utilisateur principal

| Acteur | Rôle dans le slice |
|--------|--------------------|
| **Morris** | Décideur L0 — saisit la demande, corrige, valide, GO/NO-GO, STOP, clôture |
| **GPT** | Propose qualification et analyse — **ne décide pas** |
| **Cursor** | Exécute un contrat borné — **n’élargit pas**, ne commit/push/PR/merge pas automatiquement |
| **Harness / runtime candidat** | Applique contrats, politiques, gates, fail-closed — **ne crée pas** de GO |
| **Git** | Source de vérité technique et documentaire |
| **SFIA Studio** | Cockpit / vue d’orchestration — **pas** une seconde vérité Git |

### 2.3 Valeur recherchée

| Valeur | Description |
|--------|-------------|
| **Opérabilité** | Un cycle peut être mené depuis l’interface, sans collation manuelle multi-outils pour le scénario pilote |
| **Gouvernance** | Aucune décision structurante sans Morris ; aucun effet Git distant automatique |
| **Traçabilité** | Session, échanges, gates, preuves, rapports et décisions corrélés |
| **Reprise** | Une session interrompue peut être reprise sans inventer d’état |
| **Preuve POC** | La faisabilité d’un cycle piloté depuis Studio est démontrable — **sans** claim MVP |

### 2.4 Début et fin du parcours

| Borne | Description |
|-------|-------------|
| **Début** | Morris ouvre Studio et saisit une **demande libre** pour un cycle documentaire borné |
| **Fin** | Cycle **clôturé** (succès avec réserves, correction demandée puis relancée, abandon ou STOP), session consultable dans l’historique, reprise possible |

### 2.5 Résultat observable

À la clôture réussie du slice, un observateur externe doit pouvoir constater :

1. une session corrélée de bout en bout ;
2. des échanges GPT de qualification (et éventuellement de cadrage) **candidats** ;
3. des décisions Morris explicites (qualification, GO, finale) ;
4. un contrat Cursor conforme au template Git ;
5. une exécution bornée avec rapport et preuves ;
6. une analyse GPT **candidate** ;
7. une clôture Morris ;
8. l’absence de commit/push/PR/merge automatique ;
9. la possibilité de fermer puis reprendre la session.

### 2.6 Niveau de réalisme attendu

| Niveau | Attendu |
|--------|---------|
| **Demande** | Libre (texte Morris), pas seulement fixture |
| **GPT** | Appels réels **sous GO et plafonds** pour le scénario pilote (pas de retry auto) |
| **Cursor** | Exécution réelle **sandbox / allowlist** après GO ancré |
| **Git distant** | **Aucun** effet automatique (commit/push/PR/merge) |
| **Persistance** | Suffisante pour reprise et historique du scénario pilote |
| **Multi-projet / multi-cycle** | Hors périmètre |

---

## 3. Intention du Vertical Slice Opérationnel 1

### 3.1 Formulation

> Permettre à Morris, depuis SFIA Studio, de réaliser un **parcours minimal réellement pilotable** :  
> demande libre → échanges GPT → qualification candidate → validation/correction Morris → cadrage et périmètre proposés → validation Morris → génération d’un contrat Cursor conforme au template Git → GO Morris → exécution Cursor bornée → remontée rapport/preuves → analyse GPT candidate → décision Morris → clôture → historique et reprise.

Cette chaîne est la **cible du cadrage**. Elle n’est **pas** présentée comme déjà implémentée.

### 3.2 Différence avec A–E

| Dimension | POC A–E | Vertical Slice Opérationnel 1 |
|-----------|---------|-------------------------------|
| Objectif | Prouver les briques | Prouver le **pilotage continu** depuis Studio |
| Conversation GPT | Qualif / analyse ponctuelles | Échanges su

… [extrait tronqué pour taille review pack — fichier local complet] …

------------|
| Demande libre Morris | **Obligatoire** |
| Échanges successifs GPT | **Obligatoire** |
| Qualification candidate | **Obligatoire** |
| Correction / validation humaine | **Obligatoire** |
| Gates GO / NO-GO / CORRIGER / ABANDONNER | **Obligatoire** |
| Génération contrat Cursor (template Git) | **Obligatoire** |
| Exécution bornée | **Obligatoire** |
| Rapport + preuves + diff | **Obligatoire** |
| Analyse GPT candidate | **Obligatoire** |
| Décision Morris finale | **Obligatoire** |
| Synthèse / clôture | **Obligatoire** |
| Historique | **Obligatoire** |
| Reprise de session | **Obligatoire** |
| Multi-projets / multi-cycles / auth complète | **Hors périmètre** |
| Commit/push/PR/merge auto | **Hors périmètre** (interdit) |

---

## 6. Exclusions

Hors périmètre initial du Vertical Slice Opérationnel 1 :

- pilotage complet d’un projet multi-cycle ;
- couverture des quinze cycles ;
- multi-projets et collaboration multi-utilisateurs ;
- authentification et habilitations complètes ;
- commit / push / PR / merge automatiques ;
- déploiement et production ;
- orchestration L5 globale ;
- architecture distribuée définitive ;
- industrialisation ;
- claim MVP ;
- claim production-ready ;
- ouverture automatique de conception détaillée, architecture technique, UX finale, backlog ou delivery.

---

## 7. Dépendances

| Dépendance | Nature |
|------------|--------|
| Vertical slice A–E intégré sur `main` | Socle UI + harness (Option B) |
| Méthode SFIA v2.6 + template d’exécution | Contrat Cursor Git-first |
| AF-Option C | Studio ≠ orchestrateur |
| VS-CAND / VS-BL-CAND validés | Règles d’autorité et d’acceptation |
| Gates live distincts | GPT / Cursor / limites FinOps |
| Décision Morris de validation du cadrage | Préalable à toute suite |

---

## 8. Risques

| Risque | Mitigation de cadrage |
|--------|------------------------|
| Dérive vers MVP | Distinctions §1.4 ; anti-claims ; exclusions §6 |
| Seconde vérité Studio | Session dérivée / reconstructible depuis preuves + Git |
| GO sans ancrage | Contrat + HEAD + allowlist obligatoires |
| Retry GPT auto | Interdit ; plafonds candidats |
| Écriture distante | Default deny ; fail-closed |
| Sur-spécification architecture | Pas de stack figée dans ce cycle |
| Scénario trop ambitieux | Variante Markdown bornée recommandée |

---

## 9. Trajectoire candidate (après validation cadrage)

Découpage **candidat** (non validé) — détail dans [`44`](./44-operational-vertical-slice-1-decision-pack.md) :

1. Session persistante + historique + reprise  
2. Conversation GPT + qualification  
3. Cadrage, périmètre et gates  
4. Contrat Cursor + exécution  
5. Rapport, preuves et diff  
6. Analyse GPT + décision finale  
7. Démonstration du cycle pilote réel  

Chaque incrément restera soumis à un GO Morris distinct. Aucune lettre (F/G/…) n’est validée ici.

---

## 10. Point d’arrêt du POC

Le Vertical Slice Opérationnel 1, s’il est réussi sous les critères de [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md), constitue une preuve d’**opérabilité bornée** du POC.

Il **n’autorise pas** automatiquement :

- l’ouverture du MVP ;
- la préparation industrialisation ;
- le claim « Studio complete ».

La décision de trajectoire post-slice (itérer le POC / préparer un cadrage MVP / abandonner) reste un **GO Morris distinct**, cohérent avec `07` et la décision structurante rappelée en §1.2.

---

## 11. Décisions non prises

Ce document **ne tranche pas** :

- stack de persistance ;
- protocole exact Studio↔harness ;
- UX visuelle / Figma ;
- valeur numérique des plafonds FinOps ;
- nom définitif de `CycleSession` ;
- séquence et libellés d’incréments delivery ;
- scénario pilote final (reste candidat) ;
- ouverture conception / architecture / backlog / delivery.

---

## 12. Verdict documentaire

`OPERATIONAL VERTICAL SLICE 1 FRAMING DOCUMENT COMPLETE — AWAITING MORRIS VALIDATION`

Gates suivants : voir [`44`](./44-operational-vertical-slice-1-decision-pack.md).

```

## 12. Contenu substantiel — document 42 (complet ou extrait)

```markdown
# SFIA Studio — Flux, états et modèle de session du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `42-operational-vertical-slice-1-flow-and-session-model.md` |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Statut** | `framing-candidate` — modèle et états **candidats** ; non validés |
| **Companion** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Socle hérité** | Docs `08`–`13`, `32`–`34`, template SFIA v2.6 |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Décrit le parcours bout en bout, la machine d’états candidate, le modèle `CycleSession` candidat, les frontières d’autorité, les contrats fonctionnels et la reprise.  
> **Aucune** stack, BDD, protocole transport ou API n’est figée.

---

## 1. Parcours bout en bout (cible)

```text
Demande libre (Morris)
  → échanges GPT (qualification / clarification)
  → QualificationCandidate
  → décision Morris (valider / corriger / abandonner)
  → cadrage & périmètre proposés
  → validation Morris du périmètre
  → génération contrat Cursor (template Git)
  → gate GO Morris (ancré)
  → exécution Cursor bornée
  → rapport + preuves + diff
  → analyse GPT candidate
  → décision Morris finale
  → clôture + synthèse
  → historique / reprise
```

Ce parcours **étend** les dix étapes A–E (`33` / VS-UX-01…10) en rendant explicites :

- la conversation multi-tours ;
- le cadrage / périmètre avant GO ;
- la session persistante et la reprise.

---

## 2. Machine d’états candidate

Les noms ci-dessous sont **candidats**. Ils peuvent être alignés sur le vocabulaire français de `08`/`33` lors de la conception.

| État | Intention |
|------|-----------|
| `DRAFT_REQUEST` | Demande en cours de saisie |
| `GPT_QUALIFICATION_PENDING` | Appel(s) GPT de qualification en cours |
| `QUALIFICATION_CANDIDATE` | Qualification affichée, non exécutable |
| `MORRIS_QUALIFICATION_DECISION` | Attente validation / correction / abandon |
| `FRAMING_PENDING` | Cadrage / périmètre en élaboration (GPT ou dérivé) |
| `MORRIS_FRAMING_DECISION` | Attente validation du périmètre |
| `MORRIS_EXECUTION_GATE` | Dossier GO prêt (contrat + Truth Check) |
| `CURSOR_EXECUTION_PENDING` | GO consommé, exécution pas encore démarrée |
| `CURSOR_EXECUTING` | Cursor en cours |
| `REPORT_RECEIVED` | Rapport + preuves disponibles |
| `GPT_ANALYSIS_PENDING` | Analyse GPT en cours |
| `GPT_ANALYSIS_CANDIDATE` | Verdict candidat affiché |
| `MORRIS_FINAL_DECISION` | Attente CLOSE / CORRECT / RELAUNCH / ABANDON |
| `CORRECTION_REQUESTED` | Correction demandée — boucle contrôlée |
| `CLOSED` | Cycle clôturé (avec ou sans réserves) |
| `ABANDONED` | Abandon explicite Morris |
| `STOPPED` | STOP prioritaire |
| `FAILED` | Échec fail-closed non récupérable sans relance |

### 2.1 Transitions (matrice)

| Depuis | Déclencheur | Autorité | Préconditions | Données produites | Vers | Erreur / STOP | Reprise |
|--------|-------------|----------|---------------|-------------------|------|---------------|---------|
| `DRAFT_REQUEST` | Soumettre demande | Morris | Texte non vide ; projet connu | `requestId`, demande | `GPT_QUALIFICATION_PENDING` | Validation entrée | Oui |
| `GPT_QUALIFICATION_PENDING` | Réponse GPT OK | Harness | GO live GPT si requis ; plafond OK | `QualificationCandidate` | `QUALIFICATION_CANDIDATE` | Timeout / schéma / authority breach → `FAILED` ou retour draft sous règle | Partielle |
| `QUALIFICATION_CANDIDATE` | Affichage | Studio | Candidat validé fail-closed | — | `MORRIS_QUALIFICATION_DECISION` | — | Oui |
| `MORRIS_QUALIFICATION_DECISION` | Valider | Morris | Candidat visible | `MorrisQualificationDecision` | `FRAMING_PENDING` | — | Oui |
| `MORRIS_QUALIFICATION_DECISION` | Corriger | Morris | Motif | Instruction correction | `GPT_QUALIFICATION_PENDING` | Plafond | Oui |
| `MORRIS_QUALIFICATION_DECISION` | Abandonner | Morris | — | Décision abandon | `ABANDONED` | — | Consultation |
| `FRAMING_PENDING` | Périmètre proposé | GPT/Harness | Qualif validée | FramingCandidate | `MORRIS_FRAMING_DECISION` | Schéma | Oui |
| `MORRIS_FRAMING_DECISION` | Valider périmètre | Morris | Allowlist claire | Périmètre validé | `MORRIS_EXECUTION_GATE` | — | Oui |
| `MORRIS_FRAMING_DECISION` | Corriger / abandonner | Morris | — | — | `FRAMING_PENDING` / `ABANDONED` | — | Oui |
| `MORRIS_EXECUTION_GATE` | GO | Morris | contractHash + HEAD + branche + allowlist | `MorrisGateDecision` | `CURSOR_EXECUTION_PENDING` | GO stale → rester / `FAILED` | Oui |
| `MORRIS_EXECUTION_GATE` | NO-GO / Abandonner | Morris | — | Décision | `ABANDONED` ou retour framing | — | Oui |
| `CURSOR_EXECUTION_PENDING` | Démarrage harness | Harness | Revalidation GO | event start | `CURSOR_EXECUTING` | Double start bloqué | Oui si pas démarré |
| `CURSOR_EXECUTING` | Fin OK | Cursor→Harness | Allowlist respectée | Rapport + preuves | `REPORT_RECEIVED` | Hors allowlist / timeout → `STOPPED`/`FAILED` | Selon preuves |
| `CURSOR_EXECUTING` | STOP | Morris | Exécution active | event STOP | `STOPPED` | — | Consultation + relance sous GO |
| `REPORT_RECEIVED` | Lancer analyse | Morris ou règle | Rapport complet | — | `GPT_ANALYSIS_PENDING` | Rapport incomplet → rester | Oui |
| `GPT_ANALYSIS_PENDING` | Réponse GPT OK | Harness | Plafond analyse OK | `GptVerdictCandidate` | `GPT_ANALYSIS_CANDIDATE` | Authority breach → fail-closed | Oui |
| `GPT_ANALYSIS_CANDIDATE` | Affichage | Studio | `candidateOnly=true` | — | `MORRIS_FINAL_DECISION` | — | Oui |
| `MORRIS_FINAL_DECISION` | CLOSE | Morris | Verdict visible | `MorrisFinalDecision` + CycleSummary | `CLOSED` | — | Consultation |
| `MORRIS_FINAL_DECISION` | CORRECT / RELAUNCH | Morris | Motif | Nouvelle boucle bornée | `CORRECTION_REQUESTED` → gate approprié | — | Oui |
| `MORRIS_FINAL_DECISION` | ABANDON | Morris | — | — | `ABANDONED` | — | Consultation |
| Tout état actif | STOP prioritaire | Morris | — | event | `STOPPED` | — | Relance sous GO |
| Tout appel externe | Fail-closed | Harness | — | erreur sanitisée | `FAILED` ou état sûr | Pas de retry auto | Selon règle |

**Règle :** timeout ≠ GO. STOP prioritaire sur toute progression inventée.

---

## 3. Modèle conceptuel candidat — `CycleSession`

Nom **candidat** jusqu’au GO Morris. Alternative possible : `StudioCycleRecord` — non tranchée.

### 3.1 Champs conceptuels

| Champ | Description |
|-------|-------------|
| `sessionId` | Identifiant unique de session |
| `projectId` / `repository` | Projet et dépôt |
| `initialRequest` | Demande libre Morris |
| `conversationHistory` | Échanges successifs (rôles, horodatage fuseau, refs) |
| `qualificationCandidate` | Dernière qualification candidate |
| `qualificationValidated` | Qualification validée Morris (si distincte) |
| `cycleType` / `profile` / `blocks` | Typologie SFIA proposée/validée |
| `branch` / `baseSha` / `headSha` | Ancrage Git |
| `allowedPaths` / `deniedPaths` | Périmètre |
| `gates` | Ouverts / consommés / refusés (avec motifs) |
| `morrisDecisions[]` | Décisions horodatées |
| `cursorContract` | Contrat d’exécution (hash) |
| `execution` | Statut, début/fin, mode |
| `report` | Rapport Cursor |
| `proofs` | Références preuves (paths, hashes) |
| `gptVerdictCandidate` | Analyse candidate |
| `finalState` | État final / CycleSummary |
| `reservations` | Réserves ouvertes |
| `timestamps` | Création, mises à jour, fuseaux |
| `resumeToken` / `resumeHints` | Données nécessaires à la reprise |

### 3.2 Principes

1. Studio **affiche** et **orchestre l’interaction** ; il n’est pas la source de vérité durable.
2. Les preuves immuables et les artefacts Git **prime** en cas de conflit.
3. Un état UI peut être reconstruit depuis `CycleSession` + preuves.
4. Aucune décision Morris inventée par GPT.
5. `GptVerdictCandidate` reste `candidateOnly` ; `closureAuthorized` côté candidat = false.

---

## 4. Frontières d’auto

… [extrait tronqué pour taille review pack — fichier local complet] …

it |
| Idempotence | même `requestId` → pas de double facturation silencieuse |
| Timeout | borné ; pas de retry auto |
| Validation | harness fail-closed |

### 5.2 GPT qualification → Studio

Affichage intégral du candidat ; aucune exécution tant que Morris n’a pas décidé.

### 5.3 Studio → harness

Soumission d’intention / gate / start execution avec ancrages (`contractHash`, HEAD, allowlist, `sessionId`).

### 5.4 harness → Cursor

Contrat d’exécution instancié (template v2.6) : type, profil, blocs, périmètre, STOP, Truth Check.

### 5.5 Cursor → harness

Rapport : statut, fichiers touchés, diff résumé, erreurs, refs preuves, durée.

### 5.6 harness → Studio

Événements dérivés + artefacts sanitisés ; pas de secret.

### 5.7 Studio → GPT analyse / retour

Pack d’évidence sanitisé → `GptVerdictCandidate` (`candidateOnly`, `morrisDecisionRequired`, `closureAuthorized=false`).

### 5.8 Morris → Studio (gates)

Décisions explicites avec motif, horodatage fuseau, ancrage ; consommables une seule fois pour un hash donné.

### 5.9 Données sensibles

Secrets exclus des payloads UI et logs ; PII absente du scénario pilote ; sanitization obligatoire.

---

## 6. Persistance et reprise (fonctionnel)

| Catégorie | Exemples | Survivre redémarrage Studio ? | Source de vérité |
|-----------|----------|-------------------------------|------------------|
| **Preuve immuable** | Rapports, packs sanitisés, décisions Morris, contractHash | Oui | Fichiers/preuves (+ Git si versionnés plus tard) |
| **État de session** | `CycleSession` conceptuel | Oui (requis slice) | Store session **candidat** — pas encore stack |
| **État d’interface** | scroll, focus, draft non soumis | Non obligatoire | UI éphémère |
| **Git** | branche, HEAD, diff fichier | Oui | Git |

### 6.1 Recommandation fonctionnelle (candidate)

1. Persister suffisamment pour **reprise** et **historique** du scénario pilote.
2. Reconstruire l’UI depuis session + preuves ; en cas de doute, **Git et preuves prime**.
3. Ne pas inventer d’état manquant à la reprise → état `FAILED`/`STOPPED` explicite ou reprise en lecture seule.
4. Empêcher double exécution : verrou fonctionnel sur `CURSOR_EXECUTING` pour un `contractHash` donné.
5. Différer le choix BDD / fichiers / sqlite / etc. à un cycle architecture sous GO distinct.

### 6.2 Reprise après

| Situation | Comportement attendu |
|-----------|----------------------|
| Fermeture Studio | Recharger session → dernier état stable |
| Erreur GPT | Afficher erreur ; permettre correction/relance sous plafond |
| STOP | État `STOPPED` ; relance uniquement sous nouveau GO |
| Rapport incomplet | Bloquer analyse ; exiger complément ou abandon |
| Redémarrage mid-execution | Ne pas inventer succès ; interroger harness / preuves |

---

## 7. Erreurs et STOP

| Condition | Comportement |
|-----------|--------------|
| Hors allowlist | Fail-closed ; pas d’écriture |
| GO stale (HEAD/hash changé) | Invalider GO ; retour gate |
| Timeout GPT/Cursor | État d’erreur ; pas de retry auto |
| Claim MVP/production dans sortie GPT | Rejet validator |
| Secret détecté | Sanitiser / STOP |
| Double start | Refus idempotent |

---

## 8. Alignement avec A–E

| A–E (dix étapes) | États OPS1 candidats |
|------------------|----------------------|
| Nouvelle demande | `DRAFT_REQUEST` |
| Qualif en cours / proposée | `GPT_QUALIFICATION_PENDING` / `QUALIFICATION_CANDIDATE` |
| Gate Morris | `MORRIS_EXECUTION_GATE` (+ décisions qualif/framing amont) |
| Exécution / Rapport | `CURSOR_*` / `REPORT_RECEIVED` |
| Analyse / Verdict | `GPT_ANALYSIS_*` |
| Décision / Clôture | `MORRIS_FINAL_DECISION` / `CLOSED` |

Les 4 routes P0 (`/nouvelle-demande`, `/cycle-actif`, `/decision`, `/synthese`) restent le **socle UX réutilisable** ; des panneaux conversation / historique / reprise sont des **manques** à traiter en UX ultérieure (sans Figma dans ce cycle).

---

## 9. Verdict documentaire

`OPERATIONAL SLICE 1 FLOW AND SESSION MODEL CANDIDATE — AWAITING MORRIS VALIDATION`

```

## 13. Contenu substantiel — document 43 (complet ou extrait)

```markdown
# SFIA Studio — Périmètre, NFR et critères de succès du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `43-operational-vertical-slice-1-scope-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Statut** | `framing-candidate` — non validé |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Définit le contrat de périmètre, les capacités obligatoires, les NFR minimales et les critères de réussite du Vertical Slice Opérationnel 1.  
> Succès du slice ≠ MVP ≠ production-ready ≠ industrialisation.

---

## 1. In-scope

| Domaine | Inclus |
|---------|--------|
| Pilotage UI | Demande libre, conversation, gates, suivi, clôture depuis Studio |
| GPT | Qualification et analyse **candidates**, multi-tours bornés |
| Morris | Toutes décisions structurantes du parcours |
| Cursor | Exécution sandbox / allowlist après GO ancré |
| Preuves | Rapport, diff, artefacts sanitisés, corrélation |
| Session | Historique + reprise du scénario pilote |
| Git | Lecture / Truth Check ; écritures **locales bornées** éventuelles sans push auto |
| Méthode | Consommation SFIA v2.6 + template d’exécution (sans modifier `method/**` / `prompts/**`) |

---

## 2. Out-of-scope

- Pilotage complet d’un projet multi-cycle  
- Couverture des 15 cycles  
- Multi-projets, multi-utilisateurs, auth/habilitations complètes  
- Commit / push / PR / merge **automatiques**  
- Déploiement, production, L5 global  
- Architecture distribuée définitive / industrialisation  
- Claim MVP / production-ready  
- Conception détaillée, architecture technique, UX finale, backlog, delivery **dans ce cycle de cadrage**  
- Modification Figma  
- Appels GPT live ou Cursor réel **pendant le cadrage** (ce cycle documentaire uniquement)

---

## 3. Capacités — matrice

| Capacité | Statut | Dépendances | Preuve attendue |
|----------|--------|-------------|-----------------|
| Demande libre Morris | **Obligatoire** | Studio UI | `requestId` + texte + horodatage |
| Conversation / échanges GPT | **Obligatoire** | Port GPT, plafonds | Historique multi-tours sanitisé |
| Qualification candidate | **Obligatoire** | Validator fail-closed | `QualificationCandidate` |
| Correction / validation humaine | **Obligatoire** | UI gate | Décision Morris tracée |
| Gates GO/NO-GO/CORRIGER/ABANDONNER | **Obligatoire** | Ancrage contrat | `MorrisGateDecision` |
| Génération contrat Cursor | **Obligatoire** | Template v2.6 | Contrat + `contractHash` |
| Exécution bornée | **Obligatoire** | Allowlist, GO | Execution events |
| Rapport + preuves + diff | **Obligatoire** | Harness | Rapport + refs |
| Analyse GPT candidate | **Obligatoire** | Pack évidence | `GptVerdictCandidate` (`candidateOnly`) |
| Décision Morris finale | **Obligatoire** | Verdict visible | `MorrisFinalDecision` |
| Synthèse / clôture | **Obligatoire** | Décision | CycleSummary |
| Historique | **Obligatoire** | Session | Liste sessions consultable |
| Reprise session | **Obligatoire** | Persistance | Reprise après fermeture |
| Multi-projets | Hors périmètre | — | — |
| Auth complète | Hors périmètre | — | — |
| CI GitHub complète | Optionnelle / réserve | — | Non bloquante pour preuve locale |
| Plafond GPT valeur numérique | Obligatoire comme **principe** ; valeur **À définir** (héritage VS-CAND-14) | GO FinOps | Compteurs + stop avant dépassement |

---

## 4. Exigences UX/UI (cadrage, sans Figma)

### 4.1 Surfaces nécessaires

| Surface | Besoin |
|---------|--------|
| Conversation | Fil d’échanges Morris ↔ GPT |
| Qualification | Panneau candidat complet |
| Statut cycle | État courant lisible |
| Gates Morris | Actions GO/NO-GO/CORRIGER/ABANDONNER + motif |
| Périmètre Git | Allow/deny, branche, HEAD |
| Contrat Cursor | Résumé + hash |
| Exécution | Progression réelle (pas inventée) + STOP |
| Rapport / diff / preuves | Lisibles, sanitisés |
| Analyse GPT | Verdict candidat clairement non final |
| Décision finale | CLOSE/CORRECT/RELAUNCH/ABANDON |
| Historique | Liste + détail |
| Reprise | Entrée « reprendre » |

### 4.2 Réutilisation P0

| Existant | Manque probable |
|----------|-----------------|
| 4 routes P0 | Espace conversation dédié |
| Panneaux cycle-actif / décision / synthèse | Historique sessions |
| Mapping 10 états A–E | États framing / reprise explicites |

Aucune modification Figma dans ce cycle.

---

## 5. Exigences non fonctionnelles minimales

### 5.1 Sécurité

- Secrets non exposés (UI, logs, handoff)  
- Allowlist stricte ; **default deny**  
- Validation entrées/sorties fail-closed  
- Séparation des autorités (Morris / GPT / Cursor / harness / Git / Studio)  
- Traçabilité des gates  
- Aucun effet Git distant automatique  
- STOP fail-closed  

### 5.2 Observabilité

- Journal corrélé (`sessionId`, `requestId`, `contractHash`, `eventId`)  
- Événements horodatés avec fuseau  
- Statuts GPT / Cursor  
- Durées, erreurs, compteurs  
- Preuves référencées  

### 5.3 FinOps

- Comptage **distinct** qualification / analyse  
- Plafond par session (principe)  
- Plafond journalier (principe)  
- **Aucun retry automatique**  
- Estimation de coût affichable  
- Interruption avant dépassement  
- Valeur numérique des plafonds : **À définir** (GO distinct) — ne pas inventer  

### 5.4 Résilience

- Timeouts bornés  
- Idempotence des soumissions critiques  
- Reprise sans invention d’état  
- Prévention doubles exécutions  
- Traitement rapports incomplets  
- STOP explicite prioritaire  

---

## 6. Critères de réussite

### 6.1 Critères obligatoires

Le slice est réussi **seulement si** un utilisateur peut, depuis SFIA Studio :

1. initier une demande libre ;  
2. obtenir une qualification GPT ;  
3. corriger ou valider cette qualification ;  
4. donner un gate Morris (après cadrage/périmètre) ;  
5. déclencher une exécution Cursor bornée ;  
6. récupérer un rapport exploitable ;  
7. voir preuves et diff ;  
8. obtenir une analyse GPT **candidate** ;  
9. prendre la décision finale ;  
10. clôturer le cycle ;  
11. fermer puis reprendre la session ;  
12. démontrer qu’aucune décision structurante n’a été prise sans Morris ;  
13. démontrer qu’aucune action Git distante n’a été exécutée automatiquement.

### 6.2 Critères souhaitables

- Estimation de coût visible à chaque appel  
- Comparaison avant/après fichier claire  
- Export pack de preuves d’un clic  
- Mode harness autonome de non-régression conservé  

### 6.3 Hors critères du slice

- Couverture multi-cycles projet  
- Auth entreprise  
- CI/CD complète  
- MVP défini  
- Production-ready  

### 6.4 Anti-claims

Interdit de conclure le slice par :

- `MVP DEFINED` / `MVP READY`  
- `PRODUCTION READY`  
- `INDUSTRIALIZATION COMPLETE`  
- `STUDIO COMPLETE`  
- `L5 GLOBAL PROVEN`  

Verdict de succès attendu (candidat) :

`OPERATIONAL VERTICAL SLICE 1 PROVEN WITH RESERVES` — **≠ MVP**.

---

## 7. Preuves attendues (types)

| Preuve | Description |
|--------|-------------|
| Session dump sanitisé | CycleSession + historique |
| Qualification + usage | Tokens/coût ; pas de secret |
| Décisions Morris | Ancrages + fuseau |
| Contrat + hash | Aligné template |
| Rapport Cursor | Fichiers, statut, durée |
| Diff borné | Uniquement paths autorisés |
| Verdict candidat | Flags autorité |
| CycleSummary | État final + réserves |
| Negative proofs | Tentative hors allowlist refusée ; pas de push |

---

## 8. Limites acceptées (dette / réserves)

| Limite | Statut |
|--------|--------|
| Un seul scénario documentaire | Acceptée |
| Pas de CI distante obligatoire | Réserve connue (A–E) |
| Sandbox OS non industrialisée | Réserve |
| Plafond GPT valeur non figée | Réserve FinOps |
| Persistance non industrialisée | Acceptable POC |
| Pas de multi-user | Acceptée |

---

## 9. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Option B + AF-Option C restent inchangées |
| H2 | Les 4 routes P0 suffisent comme socle de navigation |
| H3 | Un Markdown non protégé suffit comme preuve opératoire |
| H4 | Harness autonome reste disponible hors UI |
| H5 | Live GPT/Cursor restent derrière flags + GO |
| H6 | Le MVP exigera plus tard le pilotage d’un projet bout en bout — hors ce slice |

---

## 10. Dette évitée vs acceptée

| Évitée | Acceptée |
|--------|----------|
| Auto-merge / auto-push | Store session minimal non industrialisé |
| Seconde vérité Studio opaque | UX conversation non encore Figma |
| Stack BDD imposée trop tôt | Plafond numérique « À définir » |
| Claim MVP pour « faire avancer » | Réserves CI / sandbox OS |

---

## 11. Verdict documentaire

`OPERATIONAL SLICE 1 SCOPE AND SUCCESS CRITERIA CANDIDATE — AWAITING MORRIS VALIDATION`

```

## 14. Contenu substantiel — document 44 (complet ou extrait)

```markdown
# SFIA Studio — Decision pack Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `44-operational-vertical-slice-1-decision-pack.md` |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Statut** | `framing-candidate` — décisions **candidates** ; aucune validée par ce document |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) |
| **Gate consommé** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` (cadrage seulement) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Pack de décisions pour Morris.  
> Valider ou refuser séparément chaque `OPS1-CAND-*`.  
> Aucune ouverture automatique de conception, architecture, UX finale, backlog ou delivery.

---

## 1. Synthèse

Après A–E (`CLOSED_WITH_RESERVATIONS`), le POC doit prouver qu’un **cycle réellement pilotable depuis SFIA Studio** est possible, sans basculer en MVP.

Livrables de cadrage :

| Doc | Rôle |
|-----|------|
| `41` | Intention, scénario, trajectoire |
| `42` | Flux, états, `CycleSession`, contrats, reprise |
| `43` | Périmètre, NFR, critères de succès |
| `44` | Ce pack — options, candidats, gates |

---

## 2. Observations

1. A–E a prouvé les briques (mock → fixture → live qualif → live Cursor → analyse/clôture) avec réserves.
2. La boucle continue conversation → cadrage → session → historique/reprise n’est pas encore le contrat opératoire du produit.
3. Le README Studio était en retard (langage « POC non lancé / harness-only ») vs réalité A–E intégrée — à resynchroniser factuellement.
4. Invariants inchangés : Morris L0 ; GPT candidat ; Cursor borné ; Git vérité ; Studio cockpit ; AF-Option C ; Option B ; no remote auto.
5. Méthode v2.6 + template d’exécution restent la base des contrats Cursor.
6. CI distante Studio absente ou non rapportée — réserve, pas un succès CI.
7. Décision Morris structurante : POC continue ; MVP futur = projet bout en bout ; **ce cycle = cadrage uniquement**.

---

## 3. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Un scénario Markdown local suffit pour la preuve opératoire |
| H2 | Les 4 routes P0 restent le socle de navigation |
| H3 | Une conversation multi-tours bornée est nécessaire (≠ un seul shot qualif) |
| H4 | Une persistance session minimale est nécessaire à la reprise |
| H5 | Les plafonds FinOps restent « principe + À définir » jusqu’à GO dédié |
| H6 | Le découpage par capacités réduit la dette vs big-bang |

---

## 4. Options étudiées

### 4.1 Scénario pilote

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A (recommandée)** | Markdown non protégé, local, réversible | Faible risque, aligné A–E | Moins « wow » |
| B | Correctif code `app/**` | Plus réaliste code | Hors esprit POC doc ; risque |
| C | Multi-fichiers / multi-cycles | Proche MVP | Hors slice ; dérive |

### 4.2 Conversation GPT

| Option | Description | Recommandation |
|--------|-------------|----------------|
| **A** | Multi-tours qualif + cadrage | **Recommandée** |
| B | Single-shot qualif seulement | Insuffisant vs intention Morris |
| C | Chat libre illimité | Risque FinOps / dérive |

### 4.3 Persistance

| Option | Description | Recommandation |
|--------|-------------|----------------|
| **A** | Persistance fonctionnelle minimale (session + preuves) sans figer la stack | **Recommandée** |
| B | UI-only (mémoire navigateur) | Échoue reprise fiable |
| C | BDD productisée immédiate | Sur-spécification |

### 4.4 Découpage incréments

| Option | Description | Recommandation |
|--------|-------------|----------------|
| **A** | Par capacités (session → conversation → gates → exec → analyse → démo) | **Recommandée** |
| B | Big-bang BeB unique | Risque élevé |
| C | Rejouer A–E sans session/reprise | Ne répond pas à l’intention |

---

## 5. Recommandation

1. Valider le cadrage `41`–`44` avant tout cycle suivant.  
2. Retenir le scénario **Markdown non protégé** (option A).  
3. Exiger conversation multi-tours bornée + session persistante + reprise.  
4. Conserver remote Git = 0 automatique.  
5. Découper la delivery future par capacités (option A), sous GO distincts.  
6. Maintenir anti-claims MVP / production / industrialisation.  
7. Resynchroniser le README sur l’état A–E + ouverture cadrage OPS1 (fait factuel, sans claim).

---

## 6. Décisions candidates `OPS1-CAND-*`

| ID | Décision candidate | Impact | Risque si non tranché | Dette si accepté |
|----|-------------------|--------|----------------------|------------------|
| **OPS1-CAND-01** | Scénario pilote = cycle documentaire Markdown non protégé, local, sans push auto | Borne la preuve | Scénario flou | Faible |
| **OPS1-CAND-02** | Périmètre obligatoire = matrice capacités « Obligatoire » du doc `43` | Contrat BeB | Scope creep | Discipline |
| **OPS1-CAND-03** | Conversation GPT multi-tours bornée (qualif + cadrage) obligatoire | Opérabilité | Single-shot insuffisant | FinOps à gérer |
| **OPS1-CAND-04** | Modèle conceptuel `CycleSession` (nom candidat) comme objet de session | Reprise/historique | États dispersés | Renommage possible |
| **OPS1-CAND-05** | Persistance fonctionnelle minimale sans figer stack/BDD | Reprise | Perte session | Choix tech ultérieur |
| **OPS1-CAND-06** | Niveau de reprise = obligatoire après fermeture / STOP / erreur non fatale | Critère succès | Démo jetable | Complexité POC acceptable |
| **OPS1-CAND-07** | Limites Git = aucune action distante automatique (commit/push/PR/merge) | Sécurité | Contournement | Volontaire |
| **OPS1-CAND-08** | Découpage incréments par capacités (7 étapes candidates du §8) | Pilotage delivery future | Big-bang | Noms d’incréments à valider |
| **OPS1-CAND-09** | Critères de réussite = §6 doc `43` (13 obligatoires) | Acceptation | « Succès » flou | Faible |
| **OPS1-CAND-10** | Point d’arrêt POC = slice prouvé avec réserves ; trajectoire post-slice = GO distinct | Anti-dérive MVP | Glissement MVP | Discipline |
| **OPS1-CAND-11** | Conditions d’ouverture futur MVP = au minimum capacité à piloter un **projet bout en bout** (hors ce slice) | Alignement décision Morris | MVP trop petit | Cadre futur |
| **OPS1-CAND-12** | Machine d’états candidate doc `42` comme base de conception ultérieure | Continuité | Réinvention | Ajustements de noms OK |
| **OPS1-CAND-13** | Frontières d’autorité inchangées (Morris/GPT/Cursor/Git/Studio/harness) | Gouvernance | Contournement | Nulle |
| **OPS1-CAND-14** | FinOps : comptage distinct + plafonds principes + no retry ; valeurs numériques **À définir** | Coût | Coût ouvert | GO plafond |

---

## 7. Trajectoire d’incréments candidate

| # | Objectif | Périmètre | Dépendances | Risques | Preuves | Gate Morris (futur) | Hors |
|---|----------|-----------|-------------|---------|---------|---------------------|------|
| I1 | Session + historique | CycleSession minimal, liste, reprise | A–E | Sur-design store | Reprise après restart | G-OPS1-DEL-SESSION | BDD prod |
| I2 | Conversation + qualif | Multi-tours GPT qualif | I1, ports C | FinOps | Historique + candidat | G-OPS1-LIVE-GPT | Chat illimité |
| I3 | Cadrage + gates | Périmètre, allowlist, décisions | I2 | GO aveugle | Décisions ancrées | G-OPS1-GATES | Auto-GO |
| I4 | Contrat + exécution | Template → Cursor borné | I3, ports D | Hors allowlist | Rapport | G-OPS1-LIVE-CURSOR | Remote write |
| I5 | Rapport / preuves / diff | Affichage UI | I4 | Secrets | Diff borné | (inclus I4/I5) | — |
| I6 | Analyse + décision finale | Pack → verdict → Morris | I5, ports E | Claim auto | CycleSummary | G-OPS1-ANALYSIS | Clôture auto |
| I7 | Démo cycle pilote réel | Bout en bout scénario | I1–I6 | Dérive scope | Pack preuve complet | G-OPS1-PILOT-DEMO | MVP claim |

Les libellés I1–I7 et gates sont **candidats**.

---

## 8. Réserves

- CI distante non établie comme preuve  
- Sandbox OS / isolation non industrialisée  
- Plafonds GPT numériques non figés  
- README historique partiellement décalé (resynchronisation factuelle engagée)  
- A–E déjà `CLOSED_WITH_RESERVATIONS` — le nouveau slice n’efface pas ces réserves  
- Persistance session non spécifiée techniquement  

---

## 9. Questions ouvertes

1. Fichier Markdown exact du scénario pilote ?  
2. Branche de travail locale vs `main` pour l’exécution Cursor ?  
3. Nom définitif `CycleSession` vs alternative ?  
4. Faut-il un écran P0 supplémentaire ou seulement des panneaux ?  
5. Valeur initiale des plafonds session/jour ?  
6. Le cadrage/périmètre GPT est-il un appel distinct ou une phase du même thread ?

---

## 10. Impacts / dette potentielle

| Thème | Impact | Dette |
|-------|--------|-------|
| Session persistante | Débloque reprise | Choix store ultérieur |
| Conversation | UX + FinOps | Plafonds |
| Pas de remote auto | Sécurité | Moins de démo « merge » |
| Découpage I1–I7 | Lisibilité | Renommage possible |

---

## 11. Gates Morris futurs (tous **fermés**)

| Gate | Objet |
|------|-------|
| `G-OPS1-FRAMING-VAL` | Validation du cadrage `41`–`44` / `OPS1-CAND-*` |
| `G-OPS1-SCENARIO-VAL` | Validation scénario pilote |
| `G-OPS1-SESSION-VAL` | Validation modèle de session |
| `G-OPS1-FUNC-DESIGN` | Ouverture conception fonctionnelle |
| `G-OPS1-FUNC-ARCH` | Validation architecture fonctionnelle |
| `G-OPS1-UX` | Validation UX/UI (Figma éventuel) |
| `G-OPS1-BACKLOG` | Ouverture backlog |
| `G-OPS1-DEL-*` | Ouverture delivery par incrément |
| `G-OPS1-LIVE-GPT` | Autorisation GPT live |
| `G-OPS1-LIVE-CURSOR` | Autorisation Cursor réel |
| `G-OPS1-GIT-WRITE` | Autorisation commit/push/PR (si un jour) |
| `G-OPS1-PILOT-DEMO` | Démo cycle pilote |
| `G-OPS1-MVP-TRAJECTORY` | Décision trajectoire vers MVP |
| `G-MVP-CLAIM` / `G-PRODUCTION-CLAIM` | **Restent fermés** |

Aucun de ces gates n’est ouvert par `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING`.

---

## 12. Décisions explicitement non prises

- Stack / BDD / protocole / API  
- Maquettes Figma  
- Backlog stories  
- Code `app/**` / `harness/**`  
- Valeurs numériques FinOps  
- Ouverture MVP  
- Modification méthode ou prompts  
- Commit/push/PR des documents de cadrage (hors handoff review)

---

## 13. Prochaine étape après validation

Si Morris valide le cadrage (`G-OPS1-FRAMING-VAL`) :

1. éventuellement figer scénario (`G-OPS1-SCENARIO-VAL`) et session (`G-OPS1-SESSION-VAL`) ;  
2. **puis seulement** ouvrir conception fonctionnelle sous GO distinct ;  
3. ne pas ouvrir delivery tant que conception / (si besoin) UX / backlog ne sont pas validés selon la trajectoire Morris.

---

## 14. Proposition de validation Morris

Morris est invité à **valider, amender ou refuser** chaque `OPS1-CAND-01`…`14` (ou un lot explicite), **sans** autoriser :

- conception détaillée / architecture technique / UX finale ;  
- backlog / delivery / live ;  
- commit applicatif ;  
- PR des docs `41`–`44` (sauf GO documentaire distinct) ;  
- claim MVP / production.

---

## 15. Verdict

`SFIA STUDIO OPERATIONAL VERTICAL SLICE 1 FRAMING READY FOR MORRIS REVIEW`

### Interdits (sans nouveau GO)

CONCEPTION OPENED · ARCHITECTURE SELECTED · BACKLOG OPENED · READY FOR DELIVERY · GPT LIVE · CURSOR LIVE · MVP DEFINED · PRODUCTION READY · INDUSTRIALIZATION STARTED

```

## 15. Diff README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index d5b722c..29da3ff 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
+| **Statut** | `poc-operational-slice-1-framing` — Vertical slice A–E **CLOSED_WITH_RESERVATIONS** (PR #229–#234) ; Increment E intégré sur `main` @ `6a4c4a7` ; cadrage Vertical Slice Opérationnel 1 **ouvert** (`41`–`44`) ; **POC maintenu** ; MVP / production / industrialisation **non ouverts** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Sync doc post-merge #226 / CI SFIA Studio / traitement réserves — **Morris** ; UI Studio / Docker — **FERMÉS** |
+| **Prochaine décision** | Validation Morris du cadrage Vertical Slice Opérationnel 1 (`41`–`44` / `OPS1-CAND-*`) — **G-OPS1-FRAMING-VAL** ; conception / backlog / delivery / live / MVP — **FERMÉS** |
 
 ---
 
@@ -142,10 +142,12 @@ Pré-cadrage
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
   → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
   → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
-  → décision Morris : abandon / itération / préparation MVP
+  → vertical slice POC A–E               ← **CLOSED_WITH_RESERVATIONS** (docs `32`–`40` ; delivery #229–#234 ; main @ `6a4c4a7`)
+  → cadrage Vertical Slice Opérationnel 1 ← **OUVERT** (docs `41`–`44`) — conception / backlog / delivery **non ouverts**
+  → décision Morris : validation cadrage OPS1 / puis suite sous GO distincts
 ```
 
-Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
+Architecture Option B **intégrée**. Vertical slice A–E **clôturé avec réserves**. Cadrage OPS1 **ouvert**. **POC maintenu**. MVP / production / industrialisation **non atteints**.
 
 ---
 
@@ -366,11 +368,11 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ## 8. Prochaine décision
 
-1. Review ChatGPT de la draft PR harness-only.
-2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
-3. Clôture formelle AF (séparée).
+1. Validation Morris du cadrage Vertical Slice Opérationnel 1 (`41`–`44`, `OPS1-CAND-*`) — gate **`G-OPS1-FRAMING-VAL`**.
+2. Conception fonctionnelle / UX / backlog / delivery / live GPT-Cursor / MVP — **FERMÉS** jusqu’à GO distinct.
+3. Réserves A–E toujours ouvertes (CI, sandbox OS, FinOps plafond numérique, industrialisation).
 
-**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
+**Verdict documentaire courant :** `SFIA STUDIO OPERATIONAL VERTICAL SLICE 1 FRAMING READY FOR MORRIS REVIEW`
 
 ---
 
@@ -379,9 +381,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
-| Architecture POC | `23`–`25` **intégrés** |
-| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
+| Socle applicatif / harness A–E | `main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` (PR #234 MERGED) |
+| Vertical slice A–E | Docs `32`–`40` ; clôture `CLOSED_WITH_RESERVATIONS` |
+| Cadrage OPS1 | Docs `41`–`44` — **candidats**, non validés |
 | Handoff | `sfia/review-handoff` |
 
 ---
@@ -403,4 +405,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
 | [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
 
-*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
+### Vertical slice POC A–E (clôturé avec réserves)
+
+| Document | Rôle |
+|----------|------|
+| [32](./32-poc-vertical-slice-functional-design.md)–[40](./40-poc-vertical-slice-backlog-decision-pack.md) | Conception, UX, backlog A–E |
+
+### Vertical Slice Opérationnel 1 (cadrage candidat)
+
+| Document | Rôle |
+|----------|------|
+| [41-operational-vertical-slice-1-framing.md](./41-operational-vertical-slice-1-framing.md) | Cadrage intention / scénario / trajectoire |
+| [42-operational-vertical-slice-1-flow-and-session-model.md](./42-operational-vertical-slice-1-flow-and-session-model.md) | Flux, états, CycleSession, contrats |
+| [43-operational-vertical-slice-1-scope-and-success-criteria.md](./43-operational-vertical-slice-1-scope-and-success-criteria.md) | Périmètre, NFR, critères de succès |
+| [44-operational-vertical-slice-1-decision-pack.md](./44-operational-vertical-slice-1-decision-pack.md) | Decision pack `OPS1-CAND-*` |
+
+*SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — cadrage OPS1 ouvert — MVP / production non ouverts.*

```

## 16. Contrôles réalisés

| Contrôle | Résultat |
|----------|----------|
| git diff --check | OK |
| Liens relatifs Markdown | OK (aucun cassé) |
| Numéros 41–44 cohérents | OK (suite de 40) |
| TODO/FIXME/TBD/placeholder | aucun |
| Claims MVP/production positifs | absents (mentions = anti-claims) |
| Secrets / PII | aucun détecté |
| Fichiers autorisés seulement | OK |
| Documents substantiels | OK (pas de squelettes) |
| Appel GPT live | aucun |
| Cursor réel | aucun |
| Commit/push main | aucun |
| PR | aucune |

## 17. Garde-fous

- Studio ≠ orchestrateur (AF-Option C)
- GPT candidat seulement
- Cursor borné
- Git vérité
- Default deny / fail-closed
- No remote auto
- POC ≠ MVP ≠ produit

## 18. Réserves

- CI distante
- Sandbox OS
- Plafonds FinOps numériques
- Persistance non industrialisée
- Questions ouvertes scénario fichier exact / branche travail / nom CycleSession

## 19. Gates futurs (fermés)

G-OPS1-FRAMING-VAL, SCENARIO-VAL, SESSION-VAL, FUNC-DESIGN, FUNC-ARCH, UX, BACKLOG, DEL-*, LIVE-GPT, LIVE-CURSOR, GIT-WRITE, PILOT-DEMO, MVP-TRAJECTORY ; G-MVP-CLAIM / G-PRODUCTION-CLAIM fermés.

## 20. Verdict

**SFIA STUDIO OPERATIONAL VERTICAL SLICE 1 FRAMING READY FOR MORRIS REVIEW**
