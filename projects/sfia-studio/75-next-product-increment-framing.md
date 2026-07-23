# SFIA Studio — Cadrage du prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `75-next-product-increment-framing.md` |
| **Statut** | `framing-candidate` — trajectoire **réordonnée** (Live Validation prioritaire) |
| **Gate consommé (cadrage)** | `GO CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |
| **Décision Morris ultérieure** | `GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION` (2026-07-23) |
| **Gate de sortie demandé (live prep)** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
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

## 1bis. Décision Morris — incrément immédiat = Live Product Validation

**Décision Morris (actée — préparation).** L’incrément immédiat n’est **pas** B′. C’est la **validation live du parcours existant** :

- GPT réel ;
- contexte SFIA canonique (surface Control Tower / OPS1) ;
- Git local read-only ;
- GitHub read-only via `gh` ;
- parcours D1-C1 → D1-C4 (création / sélection Project).

**Conséquence pour B′.** Option B′ — Project → Controlled Cycle Proposal — reste une **extension fonctionnelle candidate différée**. Elle ne doit être réouverte qu’**après** analyse des résultats live (`77`/`78`). Ce document conserve l’analyse B′ ci-dessous comme capitalisation ; elle n’est **pas** le périmètre d’exécution immédiat.

**Séquence mise à jour :**

```
Palier actuel (main)
  → Live Product Validation (préparation → exécution → verdict)
  → décision Morris (A/B/C/D live)
  → éventuelle reprise framing B′ / architecture Cycle proposal
```

Documents de préparation live : `77-live-product-validation-framing-and-readiness.md`, `78-live-product-validation-execution-decision-pack.md`.

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

## 7. Recommandation (historique de cadrage) + priorité live

### Priorité immédiate (Décision Morris)

**Live Product Validation** du parcours existant — voir `77` / `78`.
Ce n’est **pas** une validation déjà exécutée.

### Recommandation fonctionnelle différée (toujours candidate)

**Option B′ — « Project → Controlled Cycle Proposal (PROPOSED_ONLY) »**
reste la recommandation d’*extension* après preuve live, avec sous-lot A *minimal* éventuel.

**Identifiant candidat (non validé) :** `D1-NEXT` / `D1-C5-candidate` — **pas** « C5 validé ».

**Rationnel (conservé).**

1. Traite la rupture utilisateur après C4.
2. Réutilise le moteur de contexte canonique et les patterns propose→confirm.
3. Évite de simuler un Cycle runtime.
4. Prépare Option C sans fausse adoption.
5. Démontrable après que le live du socle soit prouvé.

### Alternative de repli (toujours)

**Option C** avec **GO ARCHITECTURE Cycle foundation** si Morris préfère la fondation Cycle après (ou à la place de) B′.

### Différées

- B′ / C / D / F — **après** verdict live
- E — parallèle tooling possible pendant/après live
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

Palier immédiat (Décision Morris)
  Live Product Validation (GPT + canonique CT + Git/GitHub RO + D1-C1…C4)

Palier suivant candidat (conditionnel — après verdict live)
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
| Prochain incrément **immédiat** | Live Product Validation |
| Prochain incrément **fonctionnel différé** | B′ (si live OK) |
| Dépendances B′ | Verdict live A ou D accepté |
| Différé | D, F, live GPT comme *critère de release produit* permanent |
| Preuves live | Scénarios LPV-01…06 (`78`) |
| Gates | GO EXÉCUTION LIVE → verdict → éventuel GO ARCHITECTURE B′ |
| Dette temporaire OK | Dual-surface OPS1/CT + D1 jusqu’à décision Morris |
| Dette interdite | Simuler Cycle ; confondre fixture et live ; V3-ADOPTED |

---

## 12. Risques · réserves · dette

**Risques.** Couche proposition qui devient permanente ; confusion OPS1 ; pression pour « ouvrir » trop tôt ; README historique trompeur.

**Réserves.** Link intake→Project ; Cycle UNAVAILABLE ; UX-R04 ; CI ; GuidedSession non choisie.

**Dette.** Event types audit à étendre ; éventuelle table `d1_cycle_proposals` si on refuse le JSON opaque — **préférer table/contrat explicite** à un blob non typé.

---

## 13. Gates Morris

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (immédiat — demandé via `78`)
2. Après live : appliquer verdict A/B/C/D (`78` § verdicts)
3. Si live OK et Morris le souhaite : **GO ARCHITECTURE — CYCLE PROPOSAL (B′)**
4. Si C retenu : **GO ARCHITECTURE Cycle foundation**
5. Parallèle optionnel : **GO CLEANUP** / CI / gitignore

~~GO VALIDATION CADRAGE pour B′~~ — **différé** tant que la preuve live n’est pas tranchée.

---

## 14. Anti-claims (rappel)

Ce document ne valide **aucune** option.
Il ne revendique pas D1 COMPLETE, PROJECT LINKED, CYCLE OPENED, ni SFIA v3 IMPLEMENTED/ADOPTED.

**Statut :** `framing-candidate` — en attente de décision Morris.
