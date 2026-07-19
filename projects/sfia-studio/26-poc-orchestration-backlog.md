# SFIA Studio — Backlog POC orchestration S1 (Option B minimale)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `26-poc-orchestration-backlog.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Critical |
| **Gate** | **POC-G8 CONSOMMÉ** |
| **POC-G9** | **CONSOMMÉ** (harness-only — hors UI) |
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
| **Gate** | Spike protocole si nécessaire avant UI/adaptateur (hors harness-only) |

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
| **Gate** | Allowlist initiale validée harness-only (`27`) ; élargissement = nouveau GO |

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
| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |

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
8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
9. E11 démo
```

---

## 8. Spikes ouverts (pas de conclusion)

| Spike | Options | Critères de sortie | Gate Morris ? |
|-------|---------|-------------------|---------------|
| Techno harness | Node/TS candidat ; autres ; **Docker** = option/spike non décidé | Simplicité, testabilité, local macOS, alignement repo | Si écart majeur au candidat |
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
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Delivery / lancement POC | **NON AUTORISÉS** |

---

*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
