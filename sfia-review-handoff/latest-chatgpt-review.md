# Review Pack Full — SFIA Studio Next Product Increment Framing

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-23 00:26:01 CEST
- **Cycle/profil :** Cadrage produit — prochain incrément · Critical
- **Typologie :** FRAMING / PRODUCT / FUNCTIONAL ARCHITECTURE / TECHNICAL DISCOVERY / ROADMAP / DECISION PACK
- **Gate consommé :** GO CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT
- **Gate de sortie proposé :** GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT
- **Repo :** mcleland147/sfia-workspace
- **Worktree cadrage :** `/Users/morris/Projects/sfia-workspace-framing-next-increment`
- **Branche :** `framing/sfia-studio-next-product-increment` (**locale, non poussée**)
- **HEAD/base :** `88fa4658da07156614de270d8172f147535ddbf9` = `origin/main` `88fa4658da07156614de270d8172f147535ddbf9`
- **Handoff post-merge :** `9575156b…` / blob `cad26d54…` · POST-MERGE COMPLETE — GO PRODUCT FRAMING REQUIRED
- **Baseline :** SFIA v2.6
- **Statut v3 :** V3-MODELED CANDIDATE

## 2. État Git initial (workspace principal)

```
branch=delivery/sfia-studio-control-tower-fast-track (historique)
HEAD=bb3c9e2… (delivery tip)
origin/main=88fa4658da07156614de270d8172f147535ddbf9
status workspace principal:
?? .tmp-sfia-review/
```

Isolation : worktree framing créé depuis `origin/main` @ `88fa465…`. Aucun push framing. Delivery non touchée.

## 3. Sources consultées

- Method templates / routing / operating model / guardrails / manifest v2.6
- Handoff post-merge + PR #254
- Docs 66–74, README, sfia-v3-framing/modeled/design/delivery
- Code réel : `lib/d1/**`, features D1, OPS1 tools/sfia, SQLite schema, confirmation NO_MUTATION, context UNAVAILABLE Cycle/Action

## 4. Décisions validées vs candidates

**Validées :** baseline v2.6 · v3 candidate · CT+D1 I1–C4 sur main · NO_MUTATION existing · Cycle/Action UNAVAILABLE · GPT propose / Morris décide / Cursor exécute

**Candidates (ce cycle) :** option B′ recommandée · alternative C · packaging A · tooling parallèle · Figma non requis pour MVP B′

## 5. État produit / rupture

Rupture : après Project (C4), Cockpit sans suite méthodologique exécutable.

Disponible : CT, OPS1, D1 I1–C4.
Absent runtime : Cycle D1, GuidedSession, link Intake→Project, CI.

## 6. Discovery (synthèse)

- **Project :** runtime SQLite complet (create/audit/idempotence)
- **Intake :** session locale non DB
- **Cycle :** schema modeled only ; code force UNAVAILABLE
- **GuidedSession :** schema only
- **OPS1 Action/Gate :** matures, non liés Project
- **Relations :** Intake→Project manquante ; Project→Cycle schema-only

## 7. Options A–F

Voir doc 75 §5–6. Recommandation **B′** ; alternative **C** ; différer D/F ; E parallèle.

## 8. Incrément vertical candidat

Project Cockpit → Controlled Cycle Proposal → gate humain → PROPOSED_ONLY (+ audit). Lots L1–L3. Pas CYCLE OPENED.

## 9. Industrialisation

CI / gitignore / cleanup delivery = parallèle ou cleanup séparé ; non bloquant B′.

## 10. Fichiers créés / modifiés (worktree framing uniquement)

Créés :
- `projects/sfia-studio/75-next-product-increment-framing.md`
- `projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md`

Modifié :
- `projects/sfia-studio/README.md` (navigation 75/76 uniquement)

Statut framing :
```
 M projects/sfia-studio/README.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
```

**Aucun commit projet. Aucun push framing.**

## 11. Contenu complet — 75

```markdown
# SFIA Studio — Cadrage du prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `75-next-product-increment-framing.md` |
| **Statut** | `framing-candidate` — **non validé** |
| **Gate consommé** | `GO CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |
| **Gate de sortie demandé** | `GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |
| **Base Git** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` (PR #254 squash) |
| **Branche cadrage locale** | `framing/sfia-studio-next-product-increment` (**non poussée**) |
| **Baseline méthode** | **SFIA v2.6** |
| **Statut v3** | **V3-MODELED CANDIDATE** |
| **Autorité** | Morris (L0) — aucune option n’est une décision |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.

---

## 1. Contexte post-merge

**Observation.** La PR [#254](https://github.com/mcleland147/sfia-workspace/pull/254) a intégré sur `main` le Control Tower Fast Track et la fondation D1-I1 → D1-C4 (312 fichiers, squash `88fa465…`). Post-merge : tests D1 52/52, OPS1 105/105, E2E 50/50, lint/tsc/build PASS ; CI GitHub absente.

**Formulation correcte.** Control Tower Fast Track et D1-I1 à D1-C4 constituent la nouvelle **base produit intégrée** sur `main`, sous baseline méthode SFIA v2.6.

**Anti-claims.** Pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas ACTION RESUMED · pas GUIDED SESSION STARTED · pas SFIA v3.0 IMPLEMENTED/ADOPTED · pas de prochain incrément validé avant GO Morris · capacités Studio ≠ promotion méthode.

---

## 2. État produit réel (code + contrats)

### A. Capacités réellement disponibles

| Capacité | Preuve runtime |
|----------|----------------|
| Control Tower tools + allowlist + tool loop | `lib/ops1/tools/**`, `conversation/toolLoop.ts` |
| Contexte SFIA canonique + ActionCandidate OPS1 | `lib/ops1/sfia/**`, report reinjection |
| Project SQLite + Workspace + Cockpit | `lib/d1/db.ts`, routes `/workspace`, `/projects/*` |
| Audit Project + idempotence create | `d1_audit_events`, `d1_idempotency_keys` |
| Intake conversationnel `/nouvelle-demande` | D1-C1 → C4 UI |
| Proposition structurée non exécutable | `lib/d1/intake/**` (fake défaut) |
| Matching Projects déterministe | `lib/d1/context/**` |
| Confirmation + createProject | `lib/d1/confirmation/**` |

### B. Capacités partiellement disponibles

| Capacité | Limite |
|----------|--------|
| Outcome `OPEN_CYCLE_CANDIDATE` | Proposable par C2 ; **aucune** ouverture Cycle |
| Action recommandée `OPEN_CYCLE_IN_PROJECT` | Émise en matching ; Cycle source **UNAVAILABLE** |
| Cockpit « prochaine action » | Texte placeholder ; pas de commande |
| MethodMode | Gouvernance interne ; UI lecture seule |
| OPS1 Session / Gate / Action | Maturité CT/OPS1 ; **non rattachés** à D1 Project |

### C. Capacités modélisées seulement (candidate)

- Schémas `sfia-v3-modeled/schemas/cycle/*` (CycleInstance, GuidedSession, TransitionProposal, ContextSnapshot)
- Schémas project trajectory / review bundle
- Docs `sfia-v3-framing/**`, `sfia-v3-design/**`, delivery packs D1

### D. Capacités absentes (runtime)

- Objet Cycle D1 / repository / commandes
- GuidedSession produit
- Relation persistante Intake → Project
- Source Cycle/Action dans snapshot contexte (= `UNAVAILABLE`, non simulé)
- Gate produit « ouvrir Cycle » avec mutation
- CI GitHub sur la branche Studio

### E–H. Contrats manquants / dettes / UX coupée

| Type | Élément |
|------|---------|
| Contrat manquant | Intake→Project persistence (`EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED`) |
| Contrat manquant | Project→Cycle runtime |
| Dette acceptée | UX-R04 · GPT live hors critère · CI absente · `.tmp-sfia-review/` |
| Dette bloquante pour la *suite méthodologique* | Pas d’objet/commande Cycle ; cockpit sans suite démontrable |
| Expérience interrompue | Après create/confirm Project → Cockpit sans prochaine étape exécutable |

---

## 3. Matrice du parcours (où ça s’arrête)

Parcours cible observé :

demande → proposition → matching → confirmation → Project créé/sélectionné → **suite méthodologique**

| Étape | Disponible | Persistée | Auditée | Gate | UX | Limite |
|-------|------------|-----------|---------|------|----|--------|
| Décrire besoin (intake) | Oui | Non (React local + `sessionLocalId`) | Events structurés logs | Non | Oui | Pas d’objet Intake DB |
| Proposition C2 | Oui | Non | Logs | Non | Oui | Non exécutable |
| Matching C3 Projects | Oui | Snapshot éphémère | Logs | Non | Oui | Cycle/Action UNAVAILABLE |
| Confirm create Project | Oui | Oui (SQLite) | `PROJECT_*` | Humain C4 | Oui | — |
| Confirm existing Project | Oui | **Non** (NO_MUTATION) | Non métier link | Humain | Oui | Contrat link absent |
| Suite Cycle / GuidedSession | **Non** | — | — | — | Placeholder | **Rupture actuelle** |
| Action / exécution Cursor depuis Project | Non (OPS1 parallèle) | OPS1 own DB | OPS1 | OPS1 gates | OPS1 UI | Pas de lien Project |

**Observation.** La rupture utilisateur réelle après D1-C4 est : *« J’ai un Project ; quelle est la prochaine étape méthodologique contrôlée ? »* — pas « polish » ni « CI » en premier.

---

## 4. Discovery domaine

### 4.1 Project (existe — runtime)

- Identité `projectId`, états `DRAFT|ACTIVE`, version, workspace, owner mono-opérateur
- Commandes : create / selectMethodMode / activate (I1)
- Repository SQLite `d1_projects` + assignments + audit + idempotency
- **Pas** de FK Cycle, pas de table intake_link

### 4.2 Intake (partiel — non persistant)

- Session React + `sessionLocalId` ; proposals / match / confirmation intents en mémoire
- Events d’observabilité (pas table métier)
- Durée de vie = session navigateur
- Reprise : Workspace liste Projects ; **pas** reprise d’un intake lié

### 4.3 Cycle (candidate schema only)

- `cycle-instance.schema.json` : `cycleId`, `projectId`, states PROPOSED…CANCELLED, profile, cycleType
- **Aucun** code `lib/d1/cycle/**`, aucune table SQLite D1
- Snapshot C3 force `cycleSourceStatus: UNAVAILABLE`
- UI historique `/cycle-actif` = Increment VS/POC, **pas** Cycle D1

### 4.4 GuidedSession (candidate schema only)

- Schema modeled ; ownership Project/Cycle documenté en framing v3
- **Absent** du runtime D1 ; distinct conceptuellement d’OPS1 Session

### 4.5 Action / Gate / Decision / OPS1

| Objet | Statut | Réutilisabilité |
|-------|--------|-----------------|
| OPS1 Session | Runtime mature | Exécution CT ; **pas** ownership Project |
| ActionCandidate (OPS1/sfia) | Runtime | Propose/deny/compile ; lié session OPS1 |
| Gate OPS1 I3 | Runtime | Confirmation exécution Cursor |
| Decision Center UI | P0/VS fixture | Non rattaché D1 Project |
| Gate produit « ouvrir Cycle » | Absent | À concevoir si Option B/C |

### 4.6 Relations

| Relation | Code | Schema candidate | Exemple | N’existe pas | Réutilisable | Migration ? |
|----------|------|------------------|---------|--------------|--------------|-------------|
| Intake → Project | Non (NO_MUTATION) | Non dédié | Non | Oui | — | Oui si objet/lien |
| Project → Cycle | Non | Oui (`projectId` requis) | Oui | Runtime | Schema guide | Oui (table cycle) |
| Cycle → GuidedSession | Non | Oui | Oui | Oui | — | Oui |
| GuidedSession → ActionCandidate | Non | Partiel | — | Oui | OPS1 patterns | Décision archi |
| Cycle → Gate/Decision | Non | Decision schemas | Oui | Runtime D1 | OPS1 analogie | Oui |
| Project → OPS1 Session | Non | Non | Non | Oui | Adapter futur | Décision |
| Project/Cycle → Git ref | OPS1 sfia context | Git schema | Oui | Lien D1 | CT engine | Optionnel |
| Project/Cycle → Review bundle | Non | Oui | Oui | Runtime | — | Ultérieur |

---

## 5. Options (candidates — non décisions)

### Option A — Consolider Intake → Project

**Objectif candidat.** Persister une relation explicite intake confirmé ↔ Project ; lever le `NO_MUTATION` *uniquement* avec vrai contrat.

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Faible–moyenne** seule (reprise technique) |
| Continuité vision | Favorable (intégrité domaine) |
| Fondation domaine | Forte |
| Risque architecture | Moyen (nouveau objet/lien) |
| Effort | **M** |
| Utile maintenant ? | Partiellement — surtout comme **sous-lot** |

**Challenge.** Seul, ne répond pas à « prochaine étape méthodologique ». Solution plus simple : conserver NO_MUTATION + note jusqu’à un vertical qui consomme le lien.

### Option B — Project → proposition de Cycle (PROPOSED_ONLY)

**Objectif candidat.** Depuis Cockpit (Project ACTIVE), proposer le prochain Cycle SFIA (type, profil, blocs, risques, sources) via moteur canonique / routing ; confirmation humaine ; résultat **PROPOSED_ONLY** **sans** objet Cycle persistant (ou avec artefact de proposition auditée bornée, sans claim CYCLE OPENED).

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Forte** |
| Continuité vision CT | Favorable |
| Fondation domaine | Moyenne (prépare C sans simuler) |
| Risque architecture | Moyen (couche proposition temporaire) |
| Réutilisation | Forte (sfia context, routing, patterns C2/C4) |
| Duplication OPS1 | Neutre–faible si ownership « proposal produit » clair |
| Effort | **M** |
| Utile maintenant ? | **Oui** |

**Challenge.** Ne pas présenter la proposition comme Cycle ouvert. Ne pas mélanger Session OPS1 et proposition produit. Gate Morris architecture léger puis delivery.

### Option C — Fondation Cycle minimale + ouverture contrôlée

**Objectif candidat.** Table/repository Cycle, états minimaux, propose → confirm → open idempotent + audit.

| Critère | Évaluation |
|---------|------------|
| Valeur | Forte *si* contrat mûr |
| Fondation | **Très forte** |
| Risque | **Élevé** (surdimensionnement, migration, états) |
| Schema readiness | Moyenne (candidate 0.1.0-d1, non runtime-prouvé) |
| Effort | **L** |
| Utile maintenant ? | Possible mais **prématuré** sans archi dédiée |

**Challenge.** Ouvrir un Cycle simulé / incomplet = faux succès. Exiger **GO ARCHITECTURE** avant delivery.

### Option D — GuidedSession avant Cycle persistant

**Objectif candidat.** Session guidée Project-scoped ; Cycle reste proposition.

| Critère | Évaluation |
|---------|------------|
| Valeur distincte vs Intake/OPS1 | **Faible–incertaine** |
| Risque objet intermédiaire | **Élevé** |
| Effort | **L** |
| Utile maintenant ? | Non prioritaire |

**Challenge.** Ownership flou vs IntakeView et Ops1SessionScreen → déprioriser.

### Option E — Industrialisation (CI, gitignore, cleanup)

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur | Faible |
| Dette outillage | Réelle mais **non bloquante** du parcours |
| Effort | **S–M** |
| Traitement | **Parallèle / cleanup séparé** |

### Option F — UX-R04 polish D1-I1→C4

| Critère | Évaluation |
|---------|------------|
| Irritants | Présents mais secondaires vs rupture Cycle |
| Effort | **M** (+ Figma possible) |
| Priorité | Différée après suite méthodologique |

### Options supplémentaires

- **B′** : Option B + sous-lot A minimal (lier confirmation existing → `projectId` dans un *proposal binding* audit-only) — recommandé comme packaging vertical.
- **Non-option** : L5 global, multi-user, billing, promotion v3 — **NO-GO**.

---

## 6. Matrice comparative (synthèse)

| Option | Valeur UX | Fondation | Risque | Effort | Verdict cadrage |
|--------|-----------|-----------|--------|--------|-----------------|
| A | Faible seule | Forte | Moyen | M | Sous-lot / différée seule |
| **B** | **Forte** | Moyenne | Moyen | M | **Recommandée** |
| C | Forte | Très forte | Élevé | L | Alternative si Morris veut fondation d’abord |
| D | Faible | Moyenne | Élevé | L | Différée |
| E | Faible | Outillage | Faible | S–M | Parallèle |
| F | Moyenne | Nulle | Faible | M | Différée |

---

## 7. Recommandation (candidate)

### Recommandation principale

**Option B′ — « Project → Controlled Cycle Proposal (PROPOSED_ONLY) »**
avec sous-lot A *minimal* uniquement pour lier la proposition au `projectId` (et éventuellement remplacer NO_MUTATION par un *binding* non claimé PROJECT LINKED si Morris l’exige dans le même vertical).

**Identifiant candidat (non validé) :** `D1-NEXT` / éventuellement étiquette interne `D1-C5-candidate` — **pas** « C5 validé ».

**Rationnel.**

1. Traite la rupture utilisateur réelle après C4.
2. Réutilise le moteur de contexte canonique et les patterns propose→confirm.
3. Évite de simuler un Cycle runtime alors que le schema n’est pas branché.
4. Prépare Option C sans fausse adoption.
5. Reste démontrable et testable (E2E Cockpit → proposition → gate → PROPOSED_ONLY).

### Alternative de repli

**Option C** précédée d’un cycle **GO ARCHITECTURE Cycle foundation** si Morris préfère figer le contrat Cycle avant toute UX de suite.

### Différées / écartées pour maintenant

- D (GuidedSession) — après Cycle proposal ou fondation Cycle
- E — cycle tooling parallèle
- F — UX-R04 après valeur métier
- A seule — insuffisante comme incrément visible

### Préconditions

- Main reste @ PR #254 (ou compatible)
- Pas de promotion v3
- Architecture technique courte (schéma proposition, audit events, anti-claims) avant code
- Fake provider OK pour DoD ; live GPT non critère

### Périmètre candidat

- Point d’entrée : Project Cockpit (`ACTIVE`)
- Génération proposition Cycle (type/profil/blocs/risques/sources) **non exécutable**
- Gate humain Confirm / Refine / Cancel / Analyze-only
- Résultat `CYCLE_PROPOSAL_RECORDED` ou équivalent **PROPOSED_ONLY**
- Audit append-only sur Project (nouveaux event types bornés)
- Tests unit + E2E ; pas de table Cycle obligatoire

### Hors périmètre

- Persistance CycleInstance / GuidedSession
- Claim CYCLE OPENED
- Exécution Cursor depuis ce flux
- Refonte OPS1
- UX-R04 global / Figma delivery
- CI GitHub (sauf cycle parallèle)
- package.json / migrations SQL versionnées hors embed justifié

---

## 8. Incrément vertical candidat (≤ 3 lots · ≤ 12 items)

**Problème utilisateur.** Après création/confirmation d’un Project, l’utilisateur ne peut pas obtenir une suite méthodologique contrôlée.

**Utilisateur cible.** Morris / opérateur Studio mono-acteur (I1).

**Départ.** Project Cockpit `ACTIVE` (post C4 ou manuel).

**Arrivée.** Proposition de Cycle affichée, confirmée ou refusée, avec preuve audit ; **aucun** Cycle ouvert.

### Parcours nominal

1. Ouvrir Cockpit Project ACTIVE
2. Déclencher « Proposer la prochaine étape méthodologique »
3. Système produit proposition (sources + rationale)
4. Humain confirme
5. Système enregistre PROPOSED_ONLY + audit
6. UI affiche statut proposition (pas CYCLE OPENED)

### Alternatifs

- Refine / Cancel / Analyze-only
- Indisponibilité contexte → message honnête
- Project DRAFT → refuse ou invite activation

### Lots candidats

| Lot | Contenu | Items (max) |
|-----|---------|-------------|
| L1 | Contrat proposition + génération (reuse sfia/routing) | 4 |
| L2 | UI Cockpit + gate confirm + anti-claims | 4 |
| L3 | Audit/idempotence + tests E2E + (opt) binding projectId | 4 |

### DoD candidate (non validée)

- E2E nominal + refine/cancel
- Aucun claim CYCLE OPENED / PROJECT LINKED
- Audit lisible Cockpit
- tsc/lint/vitest/e2e ciblés verts
- Docs delivery pack incrément

**Stop conditions.** Besoin d’objet Cycle persistant pour « réussir » ; mélange OPS1 Session ; dépendance live GPT ; migration hors périmètre.

**Figma.** Non requis pour ce cadrage ; **oui** pour un cycle design si polish/layout Cockpit dense (frames : Cockpit next-step, Proposal panel, Confirm gate, Proposed-only result).

---

## 9. UX fonctionnelle (sans maquette)

- Entrée : section « Prochaine action » Cockpit (remplace placeholder)
- Visible : Project name/state ; sources utilisées ; proposition Cycle (type, profil, blocs)
- Statut proposition : `DRAFT_UI` → `AWAITING_CONFIRM` → `PROPOSED_ONLY` | `CANCELLED`
- Gate : Confirmer / Affiner / Annuler / Analyze-only
- Après confirm : badge/statut honnête « Proposition enregistrée — Cycle non ouvert »
- Indisponibilité : message contrat/source manquante
- Retour Workspace inchangé
- Audit : timeline étendue
- **Interdit :** toast « Cycle ouvert », simulation liste Cycles

---

## 10. Industrialisation (classement)

| Sujet | Classe |
|-------|--------|
| CI GitHub absente | Parallèle / différable (non bloquant incrément B) |
| `.tmp-sfia-review/` non ignoré | Cleanup séparé |
| Branche delivery historique | Cleanup séparé (GO dédié) |
| GPT live | Différable (hors DoD) |
| Contention port 3020 E2E | Avant delivery (runbook / config test) — parallèle |
| SQLite embed D1 | Acceptable ; migrations versionnées si Option C |
| README metadata stale (SHA/status locaux) | Réserve documentaire — ne pas réécrire 66–74 |

---

## 11. Trajectoire candidate (non backlog validé)

```
Palier actuel
  CT + OPS1 + D1-I1…C4 (main 88fa465)

Palier suivant candidat (recommandé)
  Project → Controlled Cycle Proposal (PROPOSED_ONLY)  [Option B′]

Paliers ultérieurs possibles
  Cycle foundation persistante (Option C)
  → GuidedSession
  → ActionCandidate rattaché
  → exécution Cursor
  → rapport / décision / reprise
```

| | |
|--|--|
| Prochain incrément | B′ |
| Dépendances | Archi proposition courte ; anti-claims |
| Différé | D, F, live GPT, CI |
| Preuves | E2E + audit |
| Gates | Validation cadrage → Archi (léger) → Delivery |
| Dette temporaire OK | Proposition sans Cycle table |
| Dette interdite | Simuler Cycle/Action comme existants ; V3-ADOPTED |

---

## 12. Risques · réserves · dette

**Risques.** Couche proposition qui devient permanente ; confusion OPS1 ; pression pour « ouvrir » trop tôt ; README historique trompeur.

**Réserves.** Link intake→Project ; Cycle UNAVAILABLE ; UX-R04 ; CI ; GuidedSession non choisie.

**Dette.** Event types audit à étendre ; éventuelle table `d1_cycle_proposals` si on refuse le JSON opaque — **préférer table/contrat explicite** à un blob non typé.

---

## 13. Gates Morris

1. **GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT** (sortie de ce cycle)
2. Si B′ retenu : **GO ARCHITECTURE** (contrat proposition / audit / anti-claims) — Light/Standard
3. Puis **GO DELIVERY** borné
4. Parallèle optionnel : **GO CLEANUP** branche delivery / gitignore / CI
5. Si C retenu à la place : **GO ARCHITECTURE Cycle foundation** **avant** tout delivery

---

## 14. Anti-claims (rappel)

Ce document ne valide **aucune** option.
Il ne revendique pas D1 COMPLETE, PROJECT LINKED, CYCLE OPENED, ni SFIA v3 IMPLEMENTED/ADOPTED.

**Statut :** `framing-candidate` — en attente de décision Morris.

```

## 12. Contenu complet — 76

```markdown
# SFIA Studio — Options et decision pack — prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `76-next-product-increment-options-and-decision-pack.md` |
| **Complète** | `75-next-product-increment-framing.md` |
| **Statut** | `decision-pack-candidate` — **aucune décision actée ici** |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Gate validation demandé** | `GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |

---

## 1. Décisions déjà actées (ne pas rouvrir)

| Décision | Source |
|----------|--------|
| Baseline méthode = SFIA v2.6 | Manifest / operating model |
| SFIA v3.0 = V3-MODELED CANDIDATE (non adopté) | Framing v3 + anti-claims D1 |
| CT Fast Track + D1-I1→C4 intégrés sur main | PR #254 / post-merge |
| Existing Project confirm = NO_MUTATION tant que contrat link absent | D1-C4 delivery |
| Cycle/Action sources = UNAVAILABLE (non simulés) | D1-C3 code |
| GPT propose / Morris décide / Cursor exécute | Operating model |
| L5 global interdit | Doctrine Studio |
| Pas de package.json / deps dans le lot CT/D1 | PR readiness |

## 2. Décisions à ne pas rouvrir dans ce decision pack

- Réécrire l’histoire des docs 66–74
- Promouvoir v3 en baseline
- Refondre OPS1 pour « coller » à D1 sans preuve
- Rendre GPT autorisateur
- Traiter CI comme substitut de valeur produit
- Valider « C5 » par simple naming

---

## 3. Options synthétiques

| ID | Titre | Intention | Effort | Reco cadrage |
|----|-------|-----------|--------|--------------|
| A | Intake → Project persistence | Contrat link / reprise | M | Sous-lot éventuel |
| **B / B′** | Project → Cycle proposal PROPOSED_ONLY | Suite méthodologique visible | M | **Principale** |
| C | Cycle foundation + open contrôlé | Objet Cycle runtime | L | Alternative |
| D | GuidedSession d’abord | Session guidée Project | L | Différée |
| E | Industrialisation CI/hygiène | Outillage | S–M | Parallèle |
| F | UX-R04 polish | UX sans nouveau domaine | M | Différée |

Détail et challenge : voir `75`.

---

## 4. Impacts par option

### A — Intake → Project

| Impact | Contenu |
|--------|---------|
| Domaine | Nouveau lien ou objet intake |
| UX | Reprise ; peu de « wow » seul |
| Migration | Probable (table) |
| Anti-claim | Toujours pas PROJECT LINKED tant que sémantique floue |
| Conséquence si choisi seul | Technique sans suite Cycle |

### B / B′ — Cycle proposal

| Impact | Contenu |
|--------|---------|
| Domaine | Contrat *proposal* (+ audit) ; pas CycleInstance |
| UX | Cockpit débloqué |
| Migration | Faible à moyenne (events / table proposals) |
| Anti-claim | Strict PROPOSED_ONLY |
| Conséquence | Prépare C ; dette temporaire de couche proposal |

### C — Cycle foundation

| Impact | Contenu |
|--------|---------|
| Domaine | Table Cycle + états + commandes |
| UX | Ouverture réelle possible |
| Migration | Oui |
| Anti-claim | CYCLE OPENED seulement après confirm |
| Conséquence | Archi obligatoire ; risque surdimensionnement |

### D — GuidedSession

| Impact | Ownership vs Intake/OPS1 à clarifier ; délai élevé ; faible valeur immédiate |

### E — Industrialisation

| Impact | Qualité repo ; zéro parcours métier nouveau |

### F — UX-R04

| Impact | Polish ; Figma probable ; ne débloque pas la rupture |

---

## 5. Arbitrages Morris demandés

### Décision D1 — Quel prochain incrément ?

Choisir **une** trajectoire :

1. **Valider recommandation B′** (Cycle proposal PROPOSED_ONLY + sous-lot A optionnel)
2. **Retenir alternative C** (Cycle foundation d’abord) → déclenche GO ARCHITECTURE Cycle
3. **Retenir A seule** (link intake→Project) — non recommandé comme seul incrément
4. **Retenir E ou F** comme prochain cycle — accepte de différer la suite méthodologique
5. **Demander un re-cadrage** si hypothèses contestées

### Décision D2 — Packaging A

Si B′ : inclure le sous-lot Intake→Project **dans** le vertical, **après**, ou **jamais pour cet incrément** ?

### Décision D3 — Artefact de proposition

Préférer :

- events d’audit Project seulement ;
- ou table `d1_cycle_proposals` typée ;
- **interdire** JSON opaque non contractuel comme seul stockage métier.

### Décision D4 — Tooling parallèle

Autoriser un cycle séparé CI / `.gitignore` / cleanup branche delivery **en parallèle** de B′ ? (recommandé : oui, GO distinct)

### Décision D5 — Figma

Exiger un cycle design Figma avant delivery B′ ? (recommandation cadrage : **non** pour MVP fonctionnel ; **oui** si polish layout)

---

## 6. Recommandations (non décisions)

1. **Recommandation :** GO VALIDATION sur option **B′**.
2. **Alternative :** C avec GO ARCHITECTURE préalable.
3. **Différer :** D, F ; traiter E en parallèle sous GO tooling.
4. **Séquence cycles :**

```
GO VALIDATION CADRAGE (ce pack)
  → GO ARCHITECTURE (contrat proposal / audit / anti-claims)   [si B′]
  → GO DELIVERY (lots L1–L3)
  → GO PR READINESS → COMMIT/PUSH → CREATE PR → MERGE → POST-MERGE
```

Si C :

```
GO VALIDATION CADRAGE
  → GO ARCHITECTURE Cycle foundation
  → (éventuel) GO DESIGN
  → GO DELIVERY
```

---

## 7. Gates futurs (proposés)

| Gate | Quand |
|------|-------|
| `GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` | Immédiat — **demandé** |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE PROPOSAL CONTRACT` | Si B′ |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE FOUNDATION` | Si C |
| `GO DELIVERY — …` | Après archi |
| `GO CLEANUP — delivery branch / tmp gitignore / CI` | Optionnel parallèle |
| `GO DESIGN FIGMA — …` | Si D5 = oui |

---

## 8. NO-GO explicites

- Simuler Cycle/Action comme disponibles
- Claim CYCLE OPENED / PROJECT LINKED / D1 COMPLETE / V3-IMPLEMENTED/ADOPTED
- GPT comme autorité de mutation
- Automatiser l’arbitrage « quel Cycle ouvrir » sans gate humain
- L5 global / multi-tenant / billing
- Modifier method/** ou promouvoir v3 par ce produit
- Delivery sans validation de cadrage

---

## 9. Conséquences de chaque choix (résumé)

| Choix | Gagne | Perd / risque |
|-------|-------|----------------|
| B′ | Suite UX rapide, honnête | Couche proposal temporaire |
| C | Fondation durable | Délai, complexité, migration |
| A seule | Intégrité link | Parcours toujours bloqué |
| E/F | Qualité/polish | Rupture métier intacte |
| Différer tout | — | Dette produit visible au Cockpit |

---

## 10. Ordre recommandé des réponses Morris

1. Valider ou contester la **rupture utilisateur** (suite méthodologique).
2. Trancher **D1** (B′ vs C vs autre).
3. Trancher **D2–D5** si B′.
4. Émettre `GO VALIDATION CADRAGE` + préciser le prochain gate (ARCHITECTURE vs autre).

---

## 11. Anti-claims

Ce pack ne constitue **pas** une validation d’incrément, **pas** une adoption v3, **pas** une ouverture Cycle.

**Statut :** en attente de **Décision Morris requise**.

```

## 13. Diff utile README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index a3c088b..03f4fed 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -503,3 +503,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [73-control-tower-fast-track-delivery-report.md](./73-control-tower-fast-track-delivery-report.md) | Rapport delivery local — **READY FOR MORRIS LIVE VALIDATION** |

 *SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*
+
+### Prochain incrément produit (cadrage candidate — post PR #254)
+
+| Document | Rôle |
+|----------|------|
+| [75-next-product-increment-framing.md](./75-next-product-increment-framing.md) | Gap analysis, discovery domaine, options A–F, incrément vertical candidat — **`framing-candidate`** |
+| [76-next-product-increment-options-and-decision-pack.md](./76-next-product-increment-options-and-decision-pack.md) | Decision pack ; recommandation B′ ; gates — **`decision-pack-candidate`** |
+
+> Cadrage **non validé**. Gate demandé : `GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT`. Aucun incrément choisi tant que Morris n’a pas décidé.

```

## 14. Décisions Morris / gates

1. GO VALIDATION CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT
2. Trancher D1 (B′ vs C vs autre) + D2–D5
3. Puis GO ARCHITECTURE (proposal ou Cycle foundation)
4. Optionnel GO CLEANUP / CI parallèle

## 15. Actions non exécutées

- commit/push projet ou framing
- PR/merge
- modification app/**
- modification 66–74 / schemas v3
- Figma / C5 delivery / Cycle runtime

## 16. État Git final

```
framing HEAD=88fa4658da07156614de270d8172f147535ddbf9
origin/main=88fa4658da07156614de270d8172f147535ddbf9
framing status:
 M projects/sfia-studio/README.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
workspace principal status:
?? .tmp-sfia-review/
```

## 17. Verdict

**VERDICT :** PRODUCT FRAMING READY — MORRIS DECISION REQUIRED

Demander à ChatGPT de lire :
- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`
