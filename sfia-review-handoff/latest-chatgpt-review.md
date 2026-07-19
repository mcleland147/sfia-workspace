# ChatGPT Review Pack — SFIA Studio POC-G8 Backlog S1 — Cycle 5 Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 15:46:17 CEST |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Critical — orchestration Git/Cursor future ; authority ; allowlist |
| **Décision Morris** | GO ouverture POC-G8 — backlog POC borné |
| **Branche** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
| **Convention branche** | Préfixe `backlog/` aligné intention ; repo utilise aussi `cycle/*-backlog` — choix documenté |
| **HEAD / origin/main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
| **PR #222** | **MERGED** @ `60e6880…` |
| **Niveau** | **full** |
| **Commit/push/PR projet** | **NON** |

---

## 1. Local Git Truth Check

PASS — main@60e6880 ; PR #222 MERGED ; remote post-merge absente ; pas de backlog concurrent ; working tree propre hors tmp + docs cycle.

---

## 2. Sources

Template SFIA · docs 07, 11, 20–25 · app README/package.json (RO) · PR #221/#222 · handoff `8891f0a…` (G8 fermé alors — historique pré-GO)

---

## 3. Scénario S1 / périmètre

**S1** DOC read-only gouverné : intention → gate Morris → contrat/hash/allowlist → exec bornée → journal/preuves → STOP possible → vues Studio.

**Hors :** writes distantes, L5, MVP, multi-scénario, delivery, code, app/** (sauf futur POC-G9).

---

## 4. Architecture préservée

Option B minimale inchangée. Studio cockpit · adaptateur fin · harness autonome. Option A test. Option C écartée 1er POC. ARCH-POC-CAND inchangées.

---

## 5. Documents créés (3)

- `26-poc-orchestration-backlog.md` — epics E1–E11, stories, DoR/DoD, tâches, spikes
- `27-poc-orchestration-allowlist-and-acceptance.md` — allow/deny Git/docs/Cursor, critères A1–A6, abuse
- `28-poc-orchestration-delivery-gate-pack.md` — prérequis POC-G9, risques, preuves, décision future

## 6. Documents modifiés

README · 07 · 20 · 21 · 22 · 25 (+ **23/24** : correctifs statut gates uniquement — cohérence bloquante G8)

---

## 7. Epics / priorisation

Must : E1–E10 · Should : E11 + idempotence/timeouts · Could : protocoles alt. · Won’t : writes, L5, MVP, cloud

---

## 8. Allowlist / denylist

Voir `27` — **candidate** jusqu’à validation Morris. Défaut deny. `gitEffect=none-remote`.

---

## 9. DoR / DoD / preuves

DoR/DoD dans `26`. Preuves A1–A6 + AB-01…08 dans `27`. Prérequis POC-G9 dans `28`.

---

## 10. Gates

| Gate | Statut |
|------|--------|
| POC-G8 | **CONSOMMÉ** |
| POC-G9 | **FERMÉ** |
| POC | **NON LANCÉ** |
| Delivery | **NON AUTORISÉ** |

---

## 11. Contenu complet — 26

```markdown
# SFIA Studio — Backlog POC orchestration S1 (Option B minimale)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `26-poc-orchestration-backlog.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Critical |
| **Gate** | **POC-G8 CONSOMMÉ** (ouverture backlog) |
| **POC-G9** | **FERMÉ** |
| **POC** | **NON LANCÉ** |
| **Scénario** | **S1** — DOC read-only gouverné |
| **Architecture** | **Option B minimale** (inchangée) |
| **Branche** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
| **Base** | `main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
| **PR sync** | [#222](https://github.com/mcleland147/sfia-workspace/pull/222) **MERGED** |

> Backlog **candidat** jusqu’à validation Morris. ≠ delivery. ≠ lancement POC. ≠ choix techno/protocole définitif.

---

## 1. Périmètre

### 1.1 Inclus (Must du POC)

Démontrer qu’une intention documentaire bornée peut être qualifiée, soumise à un gate Morris explicite, contrôlée par contrat + allowlist + `contractHash`, exécutée en read-only / `gitEffect=none-remote`, journalisée, stoppable, prouvée, et restituée dans Studio — via harness autonome + adaptateur fin.

### 1.2 Hors périmètre (Won’t)

- Git write distant (add/commit/push/merge/rebase/reset destructif/PR auto)
- Multi-utilisateur / RBAC complet / cloud
- Orchestrateur distribué / daemon permanent inutile
- L5 global
- MVP / industrialisation / multi-scénarios (S2/S4)
- Clôture AF
- Choix définitif Runtime / techno harness / protocole adaptateur / mécanisme Cursor réel
- Delivery (POC-G9) et lancement POC

### 1.3 Architecture préservée

```text
Morris → Studio (cockpit) → adaptateur fin → harness autonome
  → GateValidator → PolicyEngine → GitReaderPort → CursorExecutorPort
  → EventJournal / ProofStore → vues Studio (dérivées)
```

Option A = mode test / dégradé. Option C = écartée 1er POC.

---

## 2. Definition of Ready (DoR) — story

Une story est Ready si :

1. Identifiant, epic, priorité MoSCoW présents.
2. Critères Given/When/Then testables.
3. Preuves attendues listées.
4. Dépendances et stop conditions explicites.
5. Aucune décision techno figée sans spike/gate.
6. Alignée S1 + Option B (Studio ≠ orch. ; harness autonome).
7. Hors allowlist / denylist référencée (`27`).

---

## 3. Definition of Done (DoD) — story / POC

### 3.1 Story Done (futur delivery)

1. Critères G/W/T verts.
2. Preuves locales produites et corrélées.
3. Aucune écriture distante.
4. Journal JSONL des transitions.
5. Fail-closed démontré si applicable.
6. Aucune dérive Option C.

### 3.2 POC Done (après POC-G9 + exécution — hors cycle)

1. Scénarios nominal + rejet allowlist + STOP prouvés.
2. Harness testable sans Studio.
3. UI n’est pas seconde vérité.
4. Dossier preuves remis à Morris.
5. Décision abandon / itération / poursuite.

---

## 4. Epics

| Epic | Titre | Priorité |
|------|-------|----------|
| E1 | Contrat et modèle de domaine | Must |
| E2 | Harness autonome | Must |
| E3 | GitReaderPort | Must |
| E4 | CursorExecutorPort | Must |
| E5 | Policy et allowlist S1 | Must |
| E6 | Adaptateur Studio minimal | Must |
| E7 | Cockpit Studio minimal | Must |
| E8 | Sécurité et abuse cases | Must |
| E9 | Observabilité et preuves | Must |
| E10 | QA du POC | Must |
| E11 | Démonstration et décision | Should |

---

## 5. User stories

Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW · Dépendances · G/W/T · Preuves · Risques · Stop · Candidats futurs · Gate

### E1 — Contrat et modèle

#### US-E1-01 — POCRequest

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness / Studio |
| **Besoin** | Représenter une intention DOC bornée (`requestId`, titre, cycle, scope, operator, createdAt) |
| **Valeur** | Corrélation bout-en-bout |
| **Priorité** | Must |
| **Dépendances** | — |
| **G/W/T** | Given un opérateur ; When il crée une intention S1 ; Then un `POCRequest` valide est émis avec IDs uniques |
| **Preuves** | Schéma + fixture JSON |
| **Risques** | Scope trop large |
| **Stop** | Scope hors chemins `27` |
| **Candidats** | Types partagés hors `app/**` (emplacement ouvert) |
| **Gate** | — |

#### US-E1-02 — ExecutionContract + contractHash

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness GateValidator |
| **Besoin** | Contrat d’exécution hashé ; toute modif invalide le GO |
| **Valeur** | Intégrité / anti-élévation |
| **Priorité** | Must |
| **Dépendances** | US-E1-01 |
| **G/W/T** | Given un contrat hashé et un GO ; When le contrat change ; Then le GO est rejeté et un nouveau GO est requis |
| **Preuves** | Événement `gate.rejected` + hash avant/après |
| **Risques** | Hash non canonique |
| **Stop** | GO accepté sur hash mismatch |
| **Candidats** | Module contrat harness |
| **Gate** | — |

#### US-E1-03 — GateDecision explicite

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris / Studio |
| **Besoin** | Décision GO / CORRIGER / STOP / CLOSE explicite, datée, scopée, avec `contractHash` |
| **Valeur** | Autorité L0 |
| **Priorité** | Must |
| **Dépendances** | US-E1-02 |
| **G/W/T** | Given un dossier gate ; When Morris choisit GO ; Then le harness ne démarre qu’après revalidation du GO |
| **Preuves** | Trace gate journalisée |
| **Risques** | Auto-GO UI |
| **Stop** | Timeout ou clic ambigu traité comme GO |
| **Candidats** | `StudioGateSubmission` (`24`) |
| **Gate** | — |

#### US-E1-04 — AdapterEnvelope + événements

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur |
| **Besoin** | Enveloppes versionnées (`schemaVersion`, `correlationId`, `messageType`, payload) |
| **Valeur** | Transmission sans autorité |
| **Priorité** | Must |
| **Dépendances** | US-E1-01 |
| **G/W/T** | Given un message adaptateur ; When reçu par harness ; Then revalidé sans confiance aveugle |
| **Preuves** | Fixture enveloppe + rejet enveloppe invalide |
| **Risques** | Replay |
| **Stop** | Adaptateur crée une décision |
| **Candidats** | Couche adaptateur (protocole **ouvert**) |
| **Gate** | Spike protocole si nécessaire avant POC-G9 |

#### US-E1-05 — Idempotence et corrélation

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | `requestId` / `executionId` / `correlationId` stables ; pas de double exécution silencieuse |
| **Valeur** | Reprise sûre |
| **Priorité** | Should |
| **Dépendances** | E2 |
| **G/W/T** | Given un GO déjà consommé ; When rejoué ; Then rejet / no-op journalisé |
| **Preuves** | Événement replay |
| **Risques** | Double Cursor |
| **Stop** | Deux exécutions pour un même GO |
| **Candidats** | StateMachine |
| **Gate** | — |

---

### E2 — Harness autonome

#### US-E2-01 — Initialisation locale

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Démarrer localement avec config (proofDir, allowlist path, timeouts) sans Studio |
| **Valeur** | Autonomie / Option A |
| **Priorité** | Must |
| **Dépendances** | E1 |
| **G/W/T** | Given un workspace ; When harness start ; Then prêt et journal initial créé |
| **Preuves** | Log start + config effective |
| **Risques** | Service permanent inutile |
| **Stop** | Dépendance hard à Next/Studio |
| **Candidats** | Processus local (techno **ouverte**, Node/TS candidat) |
| **Gate** | Choix techno = décision distincte / spike |

#### US-E2-02 — StateMachine

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Transitions déterministes (draft → gated → running → rejected/stopped/completed) |
| **Valeur** | Preuve d’état |
| **Priorité** | Must |
| **Dépendances** | US-E2-01 |
| **G/W/T** | Given état `gated` ; When GO invalide ; Then transition `rejected` fail-closed |
| **Preuves** | Journal transitions |
| **Risques** | États UI divergents |
| **Stop** | Transition sans événement |
| **Candidats** | Module state |
| **Gate** | — |

#### US-E2-03 — GateValidator + PolicyEngine

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Revalider GO, hash, allowlist, Git avant toute exécution |
| **Valeur** | Fail-closed |
| **Priorité** | Must |
| **Dépendances** | E5, E3 |
| **G/W/T** | Given GO + allowlist OK ; When préconditions OK ; Then `accepted` ; sinon `rejected` |
| **Preuves** | Événements accept/reject |
| **Risques** | Trust UI |
| **Stop** | Exécution sans revalidation |
| **Candidats** | GateValidator, PolicyEngine |
| **Gate** | — |

#### US-E2-04 — EventJournal + ProofStore locaux

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Journal JSONL append-only + preuves locales |
| **Valeur** | Auditabilité |
| **Priorité** | Must |
| **Dépendances** | US-E2-02 |
| **G/W/T** | Given une transition ; When journalisée ; Then événement corrélé écrit sous proofDir |
| **Preuves** | Fichier JSONL |
| **Risques** | Fuite secrets |
| **Stop** | Secret dans journal |
| **Candidats** | proofDir local |
| **Gate** | — |

#### US-E2-05 — Mode test sans Studio

| Champ | Contenu |
|-------|---------|
| **Persona** | QA / Option A |
| **Besoin** | Exécuter S1 via CLI/fixture sans UI |
| **Valeur** | Autonomie harness |
| **Priorité** | Must |
| **Dépendances** | US-E2-01…04 |
| **G/W/T** | Given harness seul ; When scénario fixture ; Then preuves produites sans Studio |
| **Preuves** | Run Option A |
| **Risques** | Couplage UI |
| **Stop** | Impossible sans Next |
| **Candidats** | Entrée CLI |
| **Gate** | — |

---

### E3 — GitReaderPort

#### US-E3-01 — Lectures Git allowlistées

| Champ | Contenu |
|-------|---------|
| **Persona** | GitReaderPort |
| **Besoin** | Exécuter uniquement commandes read listées dans `27` |
| **Valeur** | Vérité Git |
| **Priorité** | Must |
| **Dépendances** | E5 |
| **G/W/T** | Given commande allowlistée ; When appelée ; Then stdout capturé + journalisé |
| **Preuves** | Trace commande + sortie |
| **Risques** | Shell libre |
| **Stop** | Commande hors liste exécutée |
| **Candidats** | Port Git |
| **Gate** | — |

#### US-E3-02 — Interdiction writes distantes

| Champ | Contenu |
|-------|---------|
| **Persona** | PolicyEngine |
| **Besoin** | Refuser add/commit/push/merge/… ; `gitEffect=none-remote` |
| **Valeur** | Sécurité |
| **Priorité** | Must |
| **Dépendances** | US-E3-01 |
| **G/W/T** | Given demande `git push` ; When évaluée ; Then rejet + aucune exécution |
| **Preuves** | `orchestrator.rejected` |
| **Risques** | Contournement |
| **Stop** | Push réussi |
| **Candidats** | Denylist `27` |
| **Gate** | — |

#### US-E3-03 — Erreurs / timeouts Git

| Champ | Contenu |
|-------|---------|
| **Persona** | GitReaderPort |
| **Besoin** | Timeout et erreurs ≠ GO ; état safe |
| **Valeur** | Fail-closed |
| **Priorité** | Should |
| **Dépendances** | US-E3-01 |
| **G/W/T** | Given timeout ; When détecté ; Then rejet/arrêt journalisé sans autorisation |
| **Preuves** | Événement timeout |
| **Risques** | Hang |
| **Stop** | Timeout = succès |
| **Candidats** | Config timeout |
| **Gate** | — |

---

### E4 — CursorExecutorPort

#### US-E4-01 — Contrat de port (pas d’API inventée)

| Champ | Contenu |
|-------|---------|
| **Persona** | CursorExecutorPort |
| **Besoin** | Interface `execute(contract) → result` ; modes fixture / manual / future-adapter |
| **Valeur** | Remplaçabilité |
| **Priorité** | Must |
| **Dépendances** | E1 |
| **G/W/T** | Given un port ; When fixture mode ; Then résultat déterministe sans API Cursor inventée |
| **Preuves** | Fixture run |
| **Risques** | API inventée |
| **Stop** | Dépendance à une API non prouvée présentée comme réelle |
| **Candidats** | Port + adapters |
| **Gate** | Spike mécanisme réel Cursor avant claim « réel » |

#### US-E4-02 — Capture I/O + STOP

| Champ | Contenu |
|-------|---------|
| **Persona** | CursorExecutorPort |
| **Besoin** | Capturer entrées/sorties/erreurs ; honorer STOP |
| **Valeur** | Preuve + contrôle |
| **Priorité** | Must |
| **Dépendances** | US-E4-01, E2 |
| **G/W/T** | Given exécution en cours ; When STOP ; Then arrêt prioritaire + preuve |
| **Preuves** | `execution.stopped` |
| **Risques** | Orphelin process |
| **Stop** | STOP ignoré |
| **Candidats** | Port |
| **Gate** | — |

---

### E5 — Policy / allowlist S1

#### US-E5-01 — Allowlist / denylist appliquées

| Champ | Contenu |
|-------|---------|
| **Persona** | PolicyEngine |
| **Besoin** | Appliquer listes `27` ; défaut = deny |
| **Valeur** | Bornage S1 |
| **Priorité** | Must |
| **Dépendances** | Doc `27` validée |
| **G/W/T** | Given action hors allowlist ; When évaluée ; Then rejet |
| **Preuves** | Rejet + raison |
| **Risques** | Liste trop large |
| **Stop** | Action non listée acceptée |
| **Candidats** | Config policy |
| **Gate** | Validation Morris allowlist (`27`) |

#### US-E5-02 — Pas de retry auto après rejet

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Après rejet : correction + nouveau GO |
| **Valeur** | Autorité Morris |
| **Priorité** | Must |
| **Dépendances** | US-E5-01 |
| **G/W/T** | Given rejet ; When sans nouveau GO ; Then aucune réexécution |
| **Preuves** | Absence d’événement run |
| **Risques** | Boucle auto |
| **Stop** | Retry silencieux |
| **Candidats** | StateMachine |
| **Gate** | — |

---

### E6 — Adaptateur Studio

#### US-E6-01 — Transmission intention / GO / STOP / statut

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur |
| **Besoin** | Transmettre sans décider ; corréler ; retourner vues |
| **Valeur** | Option B |
| **Priorité** | Must |
| **Dépendances** | E1, E2 |
| **G/W/T** | Given un GO Studio ; When transmis ; Then harness revalide indépendamment |
| **Preuves** | Enveloppes + revalidation |
| **Risques** | Autorité adaptateur |
| **Stop** | Adaptateur évalue allowlist ou exécute Git |
| **Candidats** | Module adaptateur (protocole **ouvert**) |
| **Gate** | Spike protocole |

#### US-E6-02 — Pas de vérité durable exclusive

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur / Studio |
| **Besoin** | Pas de store d’état non reconstructible depuis le journal |
| **Valeur** | Git/journal = vérité |
| **Priorité** | Must |
| **Dépendances** | E9 |
| **G/W/T** | Given UI restart ; When statut relu ; Then dérivé du journal harness |
| **Preuves** | Test désync |
| **Risques** | Seconde vérité |
| **Stop** | État UI non dérivable |
| **Candidats** | Adapter + vues |
| **Gate** | — |

---

### E7 — Cockpit Studio

#### US-E7-01 — Vues intention / gate / état / rejet / STOP / preuves

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris (UI) |
| **Besoin** | Surfaces minimales pour intention, gate explicite, suivi, preuves |
| **Valeur** | Pilotage humain |
| **Priorité** | Must |
| **Dépendances** | E6 |
| **G/W/T** | Given une exécution ; When Morris ouvre les vues ; Then statut = journal ; GO = action explicite |
| **Preuves** | Capture runtime (après UI) + traces |
| **Risques** | Orch. dans UI |
| **Stop** | Bouton ambigu = GO |
| **Candidats** | Extensions minimales `app/**` **uniquement au delivery** (POC-G9) |
| **Gate** | POC-G9 pour toucher `app/**` |

#### US-E7-02 — UI indisponible ≠ corruption harness

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Continuer / s’arrêter proprement sans Studio |
| **Valeur** | Résilience |
| **Priorité** | Must |
| **Dépendances** | US-E2-05 |
| **G/W/T** | Given Studio down ; When harness actif ; Then pas de GO implicite ; Option A possible |
| **Preuves** | Run sans UI |
| **Risques** | Couplage |
| **Stop** | Harness bloqué sans UI pour tests |
| **Candidats** | Harness |
| **Gate** | — |

---

### E8 — Sécurité

#### US-E8-01 — Abuse cases fail-closed

| Champ | Contenu |
|-------|---------|
| **Persona** | Security / QA |
| **Besoin** | Couvrir falsification GO, replay, hash, élévation, injection, contournement, fuite preuve |
| **Valeur** | Critical |
| **Priorité** | Must |
| **Dépendances** | E2–E6 |
| **G/W/T** | Given chaque abuse case `27` ; When tenté ; Then rejet + journal |
| **Preuves** | Matrice abuse |
| **Risques** | Faux positifs confiance |
| **Stop** | Un abuse case réussi |
| **Candidats** | Tests sécurité |
| **Gate** | — |

---

### E9 — Observabilité

#### US-E9-01 — Journal corrélé + preuves Git/Cursor/refus/STOP

| Champ | Contenu |
|-------|---------|
| **Persona** | Observabilité |
| **Besoin** | JSONL + refs preuves pour chaque transition clé |
| **Valeur** | Audit |
| **Priorité** | Must |
| **Dépendances** | US-E2-04 |
| **G/W/T** | Given scénario S1 ; When terminé ; Then pack preuves complet |
| **Preuves** | Dossier preuves |
| **Risques** | Incomplete trail |
| **Stop** | Transition sans événement |
| **Candidats** | ProofStore |
| **Gate** | — |

---

### E10 — QA

#### US-E10-01 — Batterie tests S1

| Champ | Contenu |
|-------|---------|
| **Persona** | QA |
| **Besoin** | Unitaires contrats, intégration locale, refus, STOP, sans Studio, désync |
| **Valeur** | Confiance |
| **Priorité** | Must |
| **Dépendances** | E1–E9 |
| **G/W/T** | Given suite QA ; When exécutée ; Then scénarios Must verts |
| **Preuves** | Rapport tests |
| **Risques** | Tests UI only |
| **Stop** | Pas de test sans Studio |
| **Candidats** | Suite locale (outil ouvert) |
| **Gate** | — |

---

### E11 — Démonstration

#### US-E11-01 — Dossier démo Morris

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris |
| **Besoin** | Pack : nominal, rejet, STOP, UI down, critères abandon/itération/poursuite |
| **Valeur** | Décision post-POC |
| **Priorité** | Should |
| **Dépendances** | E10 |
| **G/W/T** | Given POC exécuté ; When pack remis ; Then décision possible |
| **Preuves** | Pack démo |
| **Risques** | Démo non reproductible |
| **Stop** | Preuve manquante scénario obligatoire |
| **Candidats** | Doc preuves |
| **Gate** | Décision post-POC (DF-G6 proposé) |

---

## 6. Tâches techniques (futures — non exécutées ici)

| ID | Tâche | Epic | MoSCoW |
|----|-------|------|--------|
| T-01 | Schémas POCRequest / Contract / Gate / Envelope | E1 | Must |
| T-02 | Implémenter StateMachine + journal JSONL | E2 | Must |
| T-03 | GateValidator + PolicyEngine + config allowlist | E2/E5 | Must |
| T-04 | GitReaderPort read-only | E3 | Must |
| T-05 | CursorExecutorPort fixture + manual | E4 | Must |
| T-06 | Spike protocole adaptateur (critères `28`) | E6 | Should |
| T-07 | Spike mécanisme Cursor réel (si claim réel) | E4 | Should |
| T-08 | Adaptateur + cockpit minimal (delivery only) | E6/E7 | Must |
| T-09 | Matrice abuse + tests | E8/E10 | Must |
| T-10 | Pack démo | E11 | Should |

---

## 7. Séquencement candidat (futur delivery — POC-G9 requis)

```text
1. E1 contrats
2. E2 harness + E5 policy
3. E3 GitReader
4. E4 CursorPort (fixture d’abord)
5. E9 preuves
6. E8 abuse
7. E10 QA sans Studio
8. E6 adaptateur + E7 cockpit (app/** seulement si POC-G9)
9. E11 démo
```

---

## 8. Spikes ouverts (pas de conclusion)

| Spike | Options | Critères de sortie | Gate Morris ? |
|-------|---------|-------------------|---------------|
| Techno harness | Node/TS candidat ; autres | Simplicité, testabilité, local macOS, alignement repo | Si écart majeur au candidat |
| Protocole adaptateur | fichier / child / HTTP local / IPC / CLI | Simplicité, sécu, obs., pas de service inutile | Si structurante |
| Cursor réel | fixture / manual / adapter futur | Preuve mécanisme réel avant claim | **Oui** avant « Cursor réel » |

---

## 9. Risques backlog

| Risque | Mitigation |
|--------|------------|
| Dérive Option C | Stories E6/E7 bornées ; stop conditions |
| Allowlist floue | Doc `27` + validation Morris |
| API Cursor inventée | Port + spike |
| Confusion backlog = delivery | POC-G9 fermé ; pas de code |
| Seconde vérité UI | US-E6-02 / E7 |

---

## 10. Statut gates

| Gate | Statut |
|------|--------|
| POC-G8 | **OUVERT / CONSOMMÉ** pour ce backlog |
| POC-G9 | **FERMÉ** |
| Delivery / lancement POC | **NON AUTORISÉS** |

---

*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ — techno/protocole ouverts.*
```

---

## 12. Contenu complet — 27

```markdown
# SFIA Studio — Allowlist, denylist et critères d’acceptation POC S1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **Gate** | POC-G8 CONSOMMÉ |
| **POC-G9** | **FERMÉ** |
| **POC** | **NON LANCÉ** |
| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
| **Architecture** | Option B minimale (inchangée) |
| **Base** | `main` @ `60e6880…` |

> Défaut = **deny**. Toute action non listée est refusée. Fail-closed.

---

## 1. Principes

1. Allowlist explicite > conventions implicites.
2. Harness applique et revalide ; Studio / adaptateur **n’évaluent pas**.
3. `contractHash` lie le GO au contrat ; modif ⇒ GO invalide.
4. `gitEffect=none-remote` pour le POC S1.
5. Pas de retry automatique après rejet.
6. Timeout / absence de message ≠ GO.
7. STOP prioritaire.
8. Secrets exclus du journal et des preuves affichées.

---

## 2. Allowlist Git candidate

### 2.1 Commandes autorisées (lecture)

| Commande | Usage S1 | Bornes |
|----------|----------|--------|
| `git branch --show-current` | Branche courante | — |
| `git rev-parse HEAD` | HEAD | — |
| `git rev-parse origin/main` | Réf main | Ref explicite |
| `git merge-base <a> <b>` | Divergence | Refs allowlistées |
| `git status --short` | État worktree | — |
| `git diff --check` | Whitespace | Paths allowlistés |
| `git diff --stat` | Résumé | Paths allowlistés |
| `git diff --name-status` | Fichiers | Paths allowlistés |
| `git log` | Historique | `--oneline` + limite ≤ 20 ; refs allowlistées |
| `git show <ref>:<path>` | Contenu | Ref + path allowlistés |
| `git ls-remote` | Lecture remote | **read-only** ; pas de write |

### 2.2 Interdit (denylist Git) — non exhaustif, défaut deny

- `git add`, `git commit`, `git push`
- `git merge`, `git rebase`, `git cherry-pick`
- `git reset` destructif (`--hard`, etc.)
- `git checkout` / `git restore` destructifs de worktree hors preuve locale contrôlée
- `git clean`, suppression de branche
- modification de remote / `git remote set-url`
- write GitHub (PR create/merge, releases, secrets)
- tout shell composé non listé (`&&`, pipes vers write, etc.)

**Effet attendu :** rejet `orchestrator.rejected` ; aucune exécution.

---

## 3. Allowlist documentaire / fichiers candidate

### 3.1 Chemins candidats (à figer dans le contrat d’exécution)

| Zone | Exemple | Règle |
|------|---------|-------|
| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
| Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
| Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
| Fixtures POC | répertoire fixtures déclaré | Lecture |

### 3.2 Bornes

| Borne | Valeur candidate |
|-------|------------------|
| Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
| Nb max fichiers / run | 30 |
| Taille max / fichier | 512 KiB |
| Taille max agrégée | 5 MiB |
| Traversée | Interdite (`..`, symlinks hors root) |
| Secrets | Interdits (`.env`, credentials, clés) |
| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
| Chemins protégés méthode | Selon règles repo — deny par défaut |

---

## 4. Allowlist Cursor candidate

| Règle | Détail |
|-------|--------|
| Entrée | Via `CursorExecutorPort` uniquement |
| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
| Instruction | Bornée par contrat (objectif DOC read-only) |
| CWD | Répertoire imposé par contrat |
| Timeout | Configurable (candidat 120–300 s) |
| Sortie | Capturée (stdout/stderr/artefacts locaux) |
| Hors scope | Deny |
| Action distante | Deny |
| Élargissement autonome | Deny |
| API inventée | **Interdite** |

---

## 5. Allowlist adaptateur / Studio

| Autorisé | Interdit |
|----------|----------|
| Émettre intention | Créer GO |
| Transmettre GO/STOP explicites Morris | Interpréter clic ambigu comme GO |
| Interroger statut | Exécuter Git/Cursor |
| Afficher vues dérivées | Évaluer allowlist |
| Corrélation IDs | Persister vérité exclusive |
| | Modifier contrat / hash |
| | Retry auto / auto-clôture |

---

## 6. Contrats autorisés (rappel)

Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `StudioStopRequest`, `AdapterEnvelope`, `StudioExecutionView`, plus contrats cœur harness.

**Invariant :** GO sans `contractHash` valide = rejet.

---

## 7. Scénarios d’acceptation Must

### A1 — Nominal S1

| | |
|--|--|
| **Given** | Intention DOC bornée + contrat hashé + allowlist OK + Git readable |
| **When** | Morris émet GO explicite |
| **Then** | Harness revalide ; exécute read-only ; journalise ; produit preuves ; Studio affiche statut dérivé |
| **Preuves** | GO, journal, HEAD, artefacts, `gitEffect=none-remote` |

### A2 — Rejet hors allowlist

| | |
|--|--|
| **Given** | Demande `git push` ou path hors liste |
| **When** | Policy évalue |
| **Then** | Rejet ; aucune exécution Cursor write ; événement journalisé ; pas de retry auto |
| **Preuves** | `orchestrator.rejected` |

### A3 — Contrat modifié / hash mismatch

| | |
|--|--|
| **Given** | GO émis pour hash H1 |
| **When** | Contrat devient H2 |
| **Then** | GO invalide ; rejet ; nouveau GO requis |
| **Preuves** | reject + hashes |

### A4 — STOP

| | |
|--|--|
| **Given** | Exécution active |
| **When** | STOP explicite Morris |
| **Then** | Arrêt prioritaire ; preuve STOP ; pas de poursuite |
| **Preuves** | `execution.stopped` |

### A5 — Sans Studio (Option A)

| | |
|--|--|
| **Given** | Harness seul + fixtures |
| **When** | Scénario A1/A2 |
| **Then** | Preuves produites sans UI |
| **Preuves** | Run CLI/fixture |

### A6 — UI indisponible

| | |
|--|--|
| **Given** | Studio down |
| **When** | Message absent / timeout |
| **Then** | ≠ GO ; harness non corrompu |
| **Preuves** | Journal timeout/safe |

---

## 8. Critères fail-closed

1. Défaut deny.
2. Erreur / timeout / message manquant ⇒ pas d’autorisation.
3. Hash mismatch ⇒ rejet.
4. Scope elevation ⇒ rejet.
5. Replay GO consommé ⇒ rejet / no-op journalisé.
6. Injection path / command ⇒ rejet.
7. Contournement harness (appel direct Git/Cursor depuis UI) ⇒ hors design ; tests de non-régression.
8. Fuite secret ⇒ stop + redaction.

---

## 9. Abuse cases (matrice minimale)

| ID | Case | Attendu |
|----|------|---------|
| AB-01 | Falsification GO UI | Rejet harness |
| AB-02 | Replay enveloppe | Rejet / no-op |
| AB-03 | Altération contractHash | Rejet |
| AB-04 | Élévation scope | Rejet |
| AB-05 | Injection `../` / commande | Rejet |
| AB-06 | Contournement harness | Non possible via adaptateur ; test |
| AB-07 | Exposition preuve sensible | Redaction / deny |
| AB-08 | Studio down pendant run | Safe / STOP possible côté harness |

---

## 10. Preuves attendues (pack S1)

| Preuve | Obligatoire |
|--------|-------------|
| Trace GO Morris + hash | Oui |
| Journal JSONL corrélé | Oui |
| Trace rejet allowlist | Oui |
| HEAD / status Git avant-après (read) | Oui |
| Affirmation `none-remote` | Oui |
| Artefacts Cursor/fixture | Oui |
| Trace STOP | Oui (scénario A4) |
| Preuve run sans Studio | Oui |
| Preuve statut UI dérivé | Oui (si cockpit livré) |

---

## 11. Validation Morris requise

Cette allowlist / denylist est **candidate**.

Avant POC-G9, Morris doit :

1. Valider ou corriger les listes §2–§5.
2. Valider les bornes fichiers §3.2.
3. Confirmer modes Cursor acceptables pour le 1er delivery.
4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.

---

*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*
```

---

## 13. Contenu complet — 28

```markdown
# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **FERMÉ** — décision Morris distincte |
| **POC** | **NON LANCÉ** |
| **Delivery** | **NON AUTORISÉ** |
| **Base** | `main` @ `60e6880…` |
| **Architecture** | Option B minimale (inchangée) |

> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Oui (après validation Morris backlog) |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Oui — allowlist candidate |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 (checklist)

Avant tout GO delivery, Morris doit disposer de :

1. Backlog `26` validé (ou corrections actées).
2. Allowlist/denylist `27` **validée** (plus seulement candidate).
3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
7. Stratégie de preuve acceptée (§5).
8. Plan de réversibilité (§7).
9. Aucune techno/protocole présentée comme définitive sans preuve.

**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**

---

## 3. Risques delivery (à traiter si POC-G9)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Validation `27` ; défaut deny |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé.
2. Technologie harness ouverte (Node/TS candidat).
3. Protocole adaptateur ouvert.
4. Allowlist détaillée = candidate jusqu’à validation Morris.
5. `app/**` uniquement delivery borné.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 / lancement non autorisés ici.

---

## 5. Stratégie de preuve (delivery futur)

| Phase | Preuve |
|-------|--------|
| Harness-only | A1, A2, A4, A5 (`27`) verts |
| Sécurité | Matrice AB-01…08 |
| Option B UI | A1 + A6 + preuve statut dérivé |
| Démo Morris | Pack E11 |

Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pack.

---

## 6. Sécurité (gate)

- Authority : Morris L0 ; harness revalide.
- Intégrité : `contractHash`.
- Replay : détection GO consommé.
- Injection : paths/commands.
- Fail-closed : défaut deny.
- Journal : pas de secrets.
- STOP : prioritaire.

---

## 7. Observabilité / réversibilité

| Thème | Exigence |
|-------|----------|
| Journal | JSONL corrélé |
| Preuves | Locales sous proofDir |
| Corrélation | request/execution/gate IDs |
| Erreurs | Explicitement journalisées |
| Reprise | Nouveau GO après rejet |
| Réversibilité | Pas d’effet distant ; cleanup local preuves possible |
| Mode dégradé | Option A sans Studio |

---

## 8. FinOps / GreenOps

- Local macOS.
- Pas de composant managé.
- Pas de daemon permanent non nécessaire.
- Protocole simple.
- Dette minimale.

---

## 9. Décision Morris attendue (future)

### Question POC-G9

Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?

Sous-questions :

1. Validez-vous l’allowlist `27` ?
2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
3. Si UI : quelles surfaces `app/**` minimales ?
4. Modes Cursor : fixture seulement / + manual / spike réel ?
5. Commit/push/PR delivery = gates séparés après POC-G9.

### Conséquences

| Décision | Effet |
|----------|-------|
| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
| NO-GO | Backlog reste ; pas d’implémentation |
| GO harness-only | `app/**` reste intact |
| Claim Cursor réel | Spike + preuve obligatoires |

---

## 10. Verdict futur (non actuel)

Verdict **candidat** après POC-G9 réussi + démo :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict actuel de ce cycle :**

`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`

---

## 11. Actions interdites (rappel)

code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve

---

*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*
```

---

## 14. Diff complet — fichiers modifiés

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index a28d0fc..06377f4 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 14 — Post-merge après PR #221 ; historique Option B conservé |
-| **Profil** | Standard |
+| **Cycle** | 5 — Backlog POC-G8 ; historique Option B conservé |
+| **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; Option B minimale **INTÉGRÉE** ; POC **non lancé** ; G8/G9 **fermés** |
-| **Décisions** | ARCH-POC-CAND-01…12 selon Morris ; POC-CAND cadrage inchangés |
+| **Statut** | POC-G8 **CONSOMMÉ** ; backlog S1 (`26`–`28`) ; POC-G9 **FERMÉ** ; POC **non lancé** |
+| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `40f8ebe…` ; branche locale `capitalization/sfia-studio-poc-option-b-post-merge` |
+| **Source de vérité** | `origin/main` @ `60e6880…` ; branche locale `backlog/sfia-studio-poc-orchestration-s1` |
 
-> Architecture **Option B minimale** validée avec réserves et **intégrée** (PR #221 / `40f8ebe…`). Harness autonome + Studio cockpit + adaptateur fin. Versionnement **consommé**. POC-G8 **fermé**. POC **non lancé**.
+> Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
 
 ---
 
@@ -34,13 +34,12 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Ouverture éventuelle **POC-G8** — **FERMÉE** ; sync post-merge locale non versionnée ici |
-| Architecture POC | **Option B minimale** — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| Sync post-merge cadrage | **MERGED** — PR #220 / `b882892…` |
-| Architecture merge | **MERGED** — PR #221 / `40f8ebe…` |
+| Prochaine orientation | Validation backlog + éventuel **POC-G9** — **FERMÉ** |
+| Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
+| Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
+| Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
-| Branche architecture | historique — remote **supprimée** après #221 |
-| Branche post-merge | `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
+| Branche backlog | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
 
 > Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.
 
@@ -120,23 +119,23 @@ Pré-cadrage
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
-  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
-  → post-merge sync architecture        ← cycle 14 locale — non versionnée ici
-  → backlog POC borné                   ← POC-G8 fermé
+  → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
+  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
+  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
   → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
 ```
 
 ### Précisions
 
-- Architecture : **Option B minimale** (validée avec réserves — **intégrée**).
+- Architecture : **Option B minimale** (intégrée).
 - Option A : mode test / dégradé harness.
 - Option C : écartée 1er POC.
-- POC-G8/G9 : **fermés**. POC : **non lancé**.
+- POC-G8 : **CONSOMMÉ**. POC-G9 : **fermé**. POC : **non lancé**.
 
 ### Orientation
 
-> POC-G7 validé avec réserves — **intégré** (PR #221). Versionnement **consommé**. Backlog non ouvert. POC-G8 **fermé**.
+> Backlog S1 produit (POC-G8). Allowlist candidate. Delivery (POC-G9) **fermé**. POC **non lancé**.
 
 ---
 
@@ -267,9 +266,11 @@ Pré-cadrage
 | D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
 | D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
 | D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
-| D-NEXT-24 | Ouverture POC-G8 | Morris | **Fermée** |
+| D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
 | D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
-| D-NEXT-26 | Versionnement sync post-merge archi (cycle 14) | Morris | **Non autorisé** ici |
+| D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
+| D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
+| D-NEXT-28 | Ouverture POC-G9 (delivery) | Morris | **Fermée** |
 
 ---
 
@@ -331,8 +332,8 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Ouvrez-vous **POC-G8** (backlog borné) ?
-2. Autorisez-vous le versionnement de la **sync post-merge** (cycle 14) ?
+1. Validez-vous le backlog / allowlist (`26`–`28`) ?
+2. Ouvrez-vous **POC-G9** (delivery borné) ?
 3. Clôture formelle AF (séparée) ?
 
 ---
@@ -341,17 +342,17 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| Architecture Option B | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| Versionnement archi | **CONSOMMÉ** (PR #221) |
-| POC-G8…G9 | **Fermés** |
+| Architecture Option B | **INTÉGRÉE** |
+| POC-G7 | **INTÉGRÉ** |
+| POC-G8 | **CONSOMMÉ** |
+| POC-G9 | **Fermé** |
 | POC lancé | **Non** |
 
 ---
 
 ## 10. Verdict documentaire
 
-**Verdict :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
+**Verdict :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
 
 ---
 
@@ -359,8 +360,9 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Document | Usage |
 |----------|-------|
+| [26](./26-poc-orchestration-backlog.md) · [27](./27-poc-orchestration-allowlist-and-acceptance.md) · [28](./28-poc-orchestration-delivery-gate-pack.md) | Backlog POC-G8 |
 | [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Archi Option B |
 | [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
-*Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 5069af6..6f4ed10 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,15 +8,15 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | Historique cadrage/sync ; archi MERGED #221 (remote **supprimée**) ; post-merge `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
-| **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` (PR #221 MERGED) |
-| **Statut document** | **VALIDÉ + INTÉGRÉ** — cycle cadrage **terminé** ; sync #220 **MERGED** ; archi #221 **MERGED** |
+| **Branche** | Historique cadrage/archi MERGED ; backlog `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
+| **Base / main** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` (PR #222 MERGED) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** ; archi #221 **MERGED** ; sync #222 **MERGED** ; backlog POC-G8 **CONSOMMÉ** |
 | **POC** | **Non lancé** |
 | **MVP / industrialisation** | **Non engagés** |
-| **Architecture Runtime** | **Non validée** — voir candidats `23`–`25` (ouverts) |
+| **Architecture Runtime** | **Non validée** — ouverts |
 | **Destinataire** | Morris |
 
-> Cadrage **validé** (#219). Sync #220 **MERGED**. Architecture **Option B minimale** **INTÉGRÉE** (PR #221 / `40f8ebe…`). POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 / G9 **fermés**. POC **non lancé**.
+> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **produit** (POC-G8, `26`–`28`). POC-G9 **fermé**. POC **non lancé**.
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -26,9 +26,10 @@
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
 | POC-CAND-09 / POC-G10 | **CONSOMMÉE** |
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale (PR #221) |
-| POC-G8…G9 | **FERMÉS** |
-| Intégration | #219 + #220 @ `b882892…` ; #221 @ `40f8ebe…` |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| POC-G8 | **CONSOMMÉ** (backlog) |
+| POC-G9 | **FERMÉ** |
+| Intégration | #219–#222 @ `60e6880…` |
 
 ---
 
@@ -299,14 +300,14 @@ Pas de plateforme de supervision industrialisée.
 |-------------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale (`23`–`25`) — PR #221 / `40f8ebe…` |
-| POC-G8…G9 | **FERMÉS** |
-| Sync #220 | **MERGED** |
-| Archi #221 | **MERGED** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
+| **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
+| POC-G9 | **FERMÉ** |
+| Sync #220 / Archi #221 / Sync #222 | **MERGED** |
 
 **Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Prochaine décision :** ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct).
+**Prochaine décision :** validation backlog / allowlist ; éventuel **POC-G9** — **FERMÉ**.
 
 ---
 
@@ -319,8 +320,11 @@ Pas de plateforme de supervision industrialisée.
 | [23](./23-poc-orchestration-technical-architecture.md) | Archi Option B |
 | [24](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats |
 | [25](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND |
+| [26](./26-poc-orchestration-backlog.md) | Backlog |
+| [27](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist |
+| [28](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis G9 |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index 24b0d76..ba5bbfe 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -217,7 +217,7 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (Option B minimale, PR #221). POC-G8…G9 **FERMÉS**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog `26`–`28`). POC-G9 **FERMÉ**.
 
 UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ, PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B — POC-G8 CONSOMMÉ (backlog) — POC-G9 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 53ec7a5..e954c3e 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -3,23 +3,24 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `22-poc-orchestration-decision-pack.md` |
-| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (Option B minimale) |
+| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
 | **POC** | **Non lancé** |
-| **POC-G8 / G9** | **FERMÉS** |
-| **PR architecture** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
-| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
+| **POC-G9** | **FERMÉ** |
+| **Backlog** | `26`–`28` |
+| **PR archi / sync** | #221 / #222 **MERGED** |
+| **main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
 
-> Cadrage #219 + sync #220 **MERGED**. Architecture **Option B minimale** validée avec réserves et **intégrée** (`23`–`25` via PR #221 / `40f8ebe…`). Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC).
+> Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.
 
 ---
 
 ## 1. Observations
 
-1. Cadrage / sync intégrés.
-2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale.
-3. Option A = test/dégradé.
-4. POC-G8/G9 fermés ; POC non lancé.
-5. Versionnement archi **CONSOMMÉ / INTÉGRÉ** (PR #221).
+1. Cadrage / sync / archi intégrés (#219–#222).
+2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
+3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
+4. Allowlist **candidate** (`27`).
+5. POC-G9 fermé ; POC non lancé.
 
 ---
 
@@ -35,21 +36,21 @@
 |------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **CONSOMMÉ** |
-| **POC-G7** | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| POC-G8 | **FERMÉ** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| **POC-G8** | **CONSOMMÉ** (backlog) |
 | POC-G9 | **FERMÉ** |
-| Versionnement archi | **CONSOMMÉ / INTÉGRÉ** (`40f8ebe…`) |
 
-ARCH-POC-CAND-* : voir `25`.
+ARCH-POC-CAND-* : voir `25` (inchangées).
 
 ---
 
 ## 10. Séquence
 
 ```text
-POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
-  → versionnement CONSOMMÉ
-  → éventuelle ouverture POC-G8 (FERMÉE — GO Morris requis)
+POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
+  → sync post-merge CONSOMMÉE (#222)
+  → POC-G8 CONSOMMÉ (backlog 26–28)
+  → validation backlog / allowlist (Morris)
   → POC-G9 (FERMÉ) → POC (NON LANCÉ)
 ```
 
@@ -57,8 +58,8 @@ POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
 
 ## 11. Verdict
 
-**`POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`**
+**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
 
 ---
 
-*Option B minimale — G7 validé avec réserves — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
index fe3b8cd..faef801 100644
--- a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -10,11 +10,11 @@
 | **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
 | **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
-| **POC-G8 / G9** | **FERMÉS** |
+| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** (backlog) · POC-G9 **FERMÉ** |
 | **POC** | **Non lancé** |
 | **Runtime / techno / protocole** | **Ouverts** (non figés) |
 
-> Architecture **validée avec réserves** et **intégrée** sur `main` (PR #221 / `40f8ebe…`). Versionnement **consommé**. POC-G8 **non ouvert**. Aucun code.
+> Architecture **validée avec réserves** et **intégrée** (PR #221). Backlog POC-G8 **consommé** (`26`–`28`). POC-G9 **non ouvert**. Aucun code.
 
 ---
 
@@ -185,7 +185,7 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 | Option C | **Écartée** premier POC |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| Prochaine décision | Ouverture éventuelle **POC-G8** — **FERMÉE** |
+| Prochaine décision | Ouverture éventuelle **POC-G9** — **FERMÉE** (backlog POC-G8 consommé) |
 
 ---
 
@@ -198,8 +198,8 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 5. Modif `app/**` seulement au delivery, bornée
 6. Preuve QA : Studio ≠ seconde vérité
 7. Clôture AF séparée
-8. POC-G8/G9 fermés ; POC non lancé
+8. POC-G9 fermé ; POC non lancé ; backlog POC-G8 consommé
 
 ---
 
-*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉE (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Architecture POC Option B minimale — INTÉGRÉE — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
index 213870e..a22682a 100644
--- a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -162,8 +162,8 @@ Effets locaux `proofDir` seulement ; remote inchangé.
 3. Contrats §3 présents.
 4. Invariants §4.
 5. Menaces §6 couvertes.
-6. POC-G8/G9 fermés ; POC non lancé ; pas de protocole définitif non décidé.
+6. POC-G8 consommé (backlog) ; POC-G9 fermé ; POC non lancé ; pas de protocole définitif non décidé.
 
 ---
 
-*Contrats Option B — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Contrats Option B — INTÉGRÉS — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 638b003..05a9a4c 100644
--- a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -3,32 +3,28 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
-| **Cycle** | 6 Architecture + QA Option B + post-merge #221 |
-| **Profil** | Critical (architecture) / Standard (post-merge sync) |
-| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
+| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **FERMÉ** |
 | **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
-| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** |
-| **POC-G8 / G9** | **FERMÉS** |
+| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
+| **Backlog** | `26`–`28` |
 | **POC** | **Non lancé** |
-| **PR** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
-| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
-| **Base** | `main` @ `40f8ebe…` |
+| **Base** | `main` @ `60e6880…` |
 
 ---
 
 ## 1. Observations
 
-1. #219/#220 MERGED (cadrage + sync).
-2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
-3. App P0 sans orch. ; pas d’API Cursor repo.
-4. AF-Option C : Studio / orch. séparés.
-5. Versionnement architecture **CONSOMMÉ / INTÉGRÉ** via PR #221 / `40f8ebe…`.
-6. Branche distante `architecture/sfia-studio-poc-orchestration` **supprimée** après merge.
-7. POC-G8 **non ouvert** — GO Morris distinct requis.
+1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
+2. Option B minimale **RETENUE / INTÉGRÉE**.
+3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
+4. Allowlist **candidate** (`27`) — validation Morris requise.
+5. ARCH-POC-CAND-01…12 **inchangées** (fond).
+6. POC-G9 **non ouvert**.
 
 ---
 
-## 2. Options — statut
+## 2. Options — statut (inchangé)
 
 | Option | Statut Morris |
 |--------|---------------|
@@ -36,40 +32,13 @@
 | **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE / INTÉGRÉE** |
 | **C** Orch. dans app | **Écartée** premier POC |
 
-B = **extension** de A (cœur harness) — **pas** Option C.
-
 ---
 
-## 3. Comparaison
-
-| Critère | A | B min | C |
-|---------|---|-------|---|
-| Preuve S1 | ★★★ | ★★★ | ★★ |
-| Cockpit | — | ★★★ | ★★★ |
-| AF-Option C | ★★★ | ★★★ | ★ |
-| Risque couplage | Faible | Faible si borné | Fort |
-| Autonomie harness | ★★★ | ★★★ | ★ |
+## 4. ARCH-POC-CAND-* — inchangées
 
----
+01/02/03/06/08/10/11/12 **VALIDÉES** · 04/05/07/09 **VALIDÉES AVEC RÉSERVE** · 12 GO versionnement **CONSOMMÉ** (#221).
 
-## 4. ARCH-POC-CAND-* — statuts Morris
-
-| ID | Décision | Statut |
-|----|----------|--------|
-| **01** | Adopter **Option B minimale** (Studio cockpit + adaptateur fin + harness autonome) | **VALIDÉE** |
-| **02** | Écarter Option C pour le premier POC | **VALIDÉE** |
-| **03** | Conserver Option A comme mode autonome test / diagnostic / dégradé | **VALIDÉE** |
-| **04** | Orch. = processus local autonome déterministe ; techno ouverte (Node/TS candidat) | **VALIDÉE AVEC RÉSERVE** |
-| **05** | Cursor via `CursorExecutorPort` ; pas d’API inventée | **VALIDÉE AVEC RÉSERVE** |
-| **06** | Git read réel ; writes distantes interdites ; `gitEffect=none-remote` | **VALIDÉE** |
-| **07** | Contrats / états / transitions `24` (màj Option B) | **VALIDÉE AVEC RÉSERVE** |
-| **08** | Journal JSONL + preuves locales | **VALIDÉE** |
-| **09** | Modif `app/**` possible **au delivery uniquement**, minimale (cockpit/adaptateur/vues) ; orch. hors `app/**` | **VALIDÉE AVEC RÉSERVE** |
-| **10** | Après validation+intégration archi → prochaine porte = **POC-G8** | **VALIDÉE** |
-| **11** | Archi POC ≠ Runtime produit ; L4* plafond chemin | **VALIDÉE** |
-| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** — GO **CONSOMMÉ** (#221) |
-
-Aucun nouveau D-VAL. Aucune modification de fond des décisions ARCH-POC-CAND.
+Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 
 ---
 
@@ -79,73 +48,51 @@ Aucun nouveau D-VAL. Aucune modification de fond des décisions ARCH-POC-CAND.
 |------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **CONSOMMÉ** |
-| **POC-G7** | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| POC-G8 | **FERMÉ** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| **POC-G8** | **CONSOMMÉ** |
 | POC-G9 | **FERMÉ** |
-| Versionnement archi | **CONSOMMÉ / INTÉGRÉ** (`40f8ebe…`) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
-**≠ READY FOR BACKLOG.** Intégration architecture ≠ ouverture backlog.
+**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.
 
 ---
 
-## 6. Ouverts / réserves
+## 6. Réserves (conservées)
 
-1. Cursor réel
-2. Techno harness
-3. Protocole adaptateur
-4. Allowlist détaillée (backlog)
-5. Portée exacte modifs `app/**` au delivery
-6. Preuve QA non-seconde-vérité
+1. Cursor réel non prouvé
+2. Techno harness ouverte
+3. Protocole adaptateur ouvert
+4. Allowlist candidate jusqu’à validation Morris
+5. `app/**` delivery borné seulement
+6. QA non-seconde-vérité
 7. Clôture AF
-8. POC-G8/G9
+8. POC-G9
 
 ---
 
 ## 7. Décisions Morris restantes
 
-1. Ouverture éventuelle **POC-G8** (après sync post-merge si versionnée — GO distinct).
-2. Clôture AF (séparée).
-
-### Historique consommé
-
-- GO versionnement docs `23`–`25` : **CONSOMMÉ** (commit / push / draft PR #221 puis merge Morris).
-- Merge #221 : **CONSOMMÉ**.
-
-### Conséquences
-
-- Intégration #221 ≠ GO backlog ≠ GO delivery ≠ lancement POC ≠ ouverture POC-G8.
+1. Validation backlog / allowlist (`26`–`28`).
+2. Ouverture éventuelle **POC-G9**.
+3. Clôture AF (séparée).
 
 ---
 
 ## 8. Séquence
 
 ```text
-POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
-  → versionnement CONSOMMÉ
-  → sync post-merge documentaire (locale — non versionnée ici)
-  → décision POC-G8 (FERMÉE — GO Morris requis)
-  → POC-G9 / POC (NON LANCÉS)
+POC-G8 CONSOMMÉ (backlog)
+  → validation Morris backlog/allowlist
+  → POC-G9 (FERMÉ)
+  → POC (NON LANCÉ)
 ```
 
 ---
 
 ## 9. Verdict
 
-| Élément | Valeur |
-|---------|--------|
-| Option B minimale | **RETENUE / INTÉGRÉE** |
-| Harness autonome | **Oui** |
-| Studio | Cockpit |
-| Adaptateur | Sans autorité |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| POC-G8/G9 | **FERMÉS** |
-| POC | **Non lancé** |
-| Versionnement | **CONSOMMÉ / INTÉGRÉ** |
-| Prochaine décision | Ouverture éventuelle **POC-G8** |
-
-**Verdict :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
+**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
 
 ---
 
-*Decision pack — Option B minimale — G7 validé avec réserves — INTÉGRÉ (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
+*Decision pack — Option B inchangée — POC-G8 consommé — POC-G9 fermé — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index dbf221e..1c6614c 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,22 +4,23 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-architecture-option-b-integrated` — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; Option B minimale **INTÉGRÉE** (PR #221) ; POC **non lancé** ; POC-G8/G9 **fermés** |
+| **Statut** | `poc-backlog-g8-consumed` — POC-G8 **CONSOMMÉ** (backlog S1) ; Option B **INTÉGRÉE** ; POC-G7 **INTÉGRÉ** ; POC-G9 **FERMÉ** ; POC **non lancé** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — post-merge sync Option B (DOC/ARCH/POST-MERGE, Standard) |
-| **Typologie cycle** | DOC / ARCH / POST-MERGE — Standard |
-| **Cycle projet** | 14 — Post-merge après PR #221 |
-| **Profil SFIA** | Standard |
-| **Branche post-merge** | `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
-| **Branche architecture** | `architecture/sfia-studio-poc-orchestration` — **historique** (MERGED #221, remote **supprimée**) |
-| **Base canonique** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
+| **Exécuteur** | Cursor — backlog POC-G8 (BACKLOG/DOC/ARCH/SEC, Critical) |
+| **Typologie cycle** | BACKLOG / DOC / ARCH / SEC — Critical |
+| **Cycle projet** | 5 — Backlog / user stories (POC-G8) |
+| **Profil SFIA** | Critical |
+| **Branche backlog** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
+| **Branche architecture** | historique — MERGED #221 |
+| **Base canonique** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
-| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| **POC** | **Non lancé** — backlog / delivery **fermés** |
-| **Prochaine décision** | Ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct) |
+| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| **Backlog POC** | `26`–`28` — POC-G8 **CONSOMMÉ** ; allowlist **candidate** |
+| **POC** | **Non lancé** — delivery **fermé** (POC-G9) |
+| **Prochaine décision** | Ouverture éventuelle **POC-G9** — **FERMÉE** |
 
 ---
 
@@ -49,14 +50,16 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **fermés** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **fermé** |
 | Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
-| Architecture POC | **Option B minimale** (`23`–`25`) — validée avec réserves ; **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
+| Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
+| Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
+| Backlog POC | `26`–`28` — POC-G8 **CONSOMMÉ** |
 | Branche architecture | historique — remote **supprimée** après #221 |
 | Branche cadrage | conservée |
 | Branches historiques | conservées |
 
-> Cadrage intégré. Sync #220 mergée. Architecture **Option B minimale** **INTÉGRÉE** (PR #221). Studio cockpit + adaptateur + harness autonome. POC-G7 **validé avec réserves — intégré**. POC **non lancé**. Versionnement **consommé**. POC-G8 **fermé**.
+> Architecture Option B **INTÉGRÉE**. Backlog S1 produit (POC-G8). Studio cockpit + adaptateur + harness autonome. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
 
 ---
 
@@ -134,14 +137,14 @@ Pré-cadrage
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
-  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B (`23`–`25`) — PR #221 / `40f8ebe…`
-  → post-merge sync architecture        ← cycle 14 (locale) — versionnement sync **non autorisé** ici
-  → backlog POC borné                   ← POC-G8 **fermé**
+  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
+  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
+  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist candidate
   → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage intégré. Architecture Option B **validée avec réserves** et **intégrée** (PR #221). Harness autonome + Studio cockpit + adaptateur fin. POC **non lancé**. POC-G8 **fermé**.
+Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**.
 
 ---
 
@@ -344,7 +347,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Option B minimale — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221) ; G8/G9 fermés |
+| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (`26`–`28`) ; POC-G9 **fermé** |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -355,18 +358,18 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — architecture POC
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
-> **POC non lancé.** Versionnement **consommé**. POC-G8 **fermé**.
+> POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
+> **POC non lancé.** POC-G9 **fermé**. Delivery **non autorisé**. Allowlist **candidate**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct).
-2. Clôture formelle AF (séparée).
-3. Versionnement de la sync post-merge (cycle 14) — **non autorisé** ici (décision distincte).
+1. Validation Morris du backlog / allowlist (`26`–`28`).
+2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
+3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
+**Verdict documentaire :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
 
 ---
 
@@ -375,10 +378,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle | `main` @ `40f8ebe…` (PR #221 MERGED) |
-| Architecture POC | `23`–`25` **intégrés** sur `main` |
+| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
+| Architecture POC | `23`–`25` **intégrés** |
+| Backlog POC | `26`–`28` (**locaux** — non versionnés ici) |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
+### Navigation backlog POC
+
+| Document | Rôle |
+|----------|------|
+| [26-poc-orchestration-backlog.md](./26-poc-orchestration-backlog.md) | Epics, stories, DoR/DoD |
+| [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
+| [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
+
+*SFIA Studio — Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
```

---

## 15. Validations

| Check | Résultat |
|-------|----------|
| `git diff --check` | PASS |
| 3 créés + ≤8 modifiés | PASS (8M dont 23/24 statut) |
| Aucun app/** / code / staged | PASS |
| Option B inchangée | PASS |
| POC-G9 fermé | PASS |
| POC non lancé | PASS |
| Allowlist candidate | PASS |
| Techno/protocole ouverts | PASS |

---

## 16. Décisions Morris restantes

1. Validation backlog / allowlist
2. POC-G9 (delivery) — fermé
3. Clôture AF

---

## 17. Actions interdites

commit/push/PR · merge · code · app/** · POC-G9 · lancement · L5 · writes distantes · choix techno définitif

---

## 18. Verdict

**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
