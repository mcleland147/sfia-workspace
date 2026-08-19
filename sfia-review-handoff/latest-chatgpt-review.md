# SFIA Review Pack FULL — SFIA Task Manager Cycle 2 Functional Design

**Timestamp (Europe/Paris):** 2026-08-20 00:26:18 CEST

**Pack type:** FULL — Cycle 2 Conception fonctionnelle (Morris functional review)

---

## Morris GO (current — exact)

GO MORRIS — OPEN CYCLE 2 CONCEPTION FONCTIONNELLE — STANDARD

## Morris GO (previous — trace)

GO MORRIS — ACCEPT BOOTSTRAP WITH PROCESS RESERVE — COMPLETE SOURCE-CONSUMPTION CHECK BEFORE PROJECT COMMIT

---

## Git truth

| Field | Value |
|-------|-------|
| Branch | `project/sfia-task-manager-cycle-2-functional` |
| HEAD | `b66cd328bff01a6b2d40f0810db150e22c5ca695` |
| origin/main | `b66cd328bff01a6b2d40f0810db150e22c5ca695` |
| Project commit | **NOT AUTHORIZED** (working tree only) |

**Untracked (not in `git diff`):**

- `projects/sfia-task-manager/01-functional/2026-08-19-m1-functional-spec.md` (new)
- `.tmp-sfia-review/` (review artifacts)
- `.cursor/mcp.json`

---

## CKC alignment

| Field | Value |
|-------|-------|
| CKC | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
| CKC status | **candidate** |
| cycle_id | 2 — Conception fonctionnelle |
| Profile | Standard |

---

## Functional maturity (CKC vocabulary)

**suffisante_pour_decider**

| Coverage | Status |
|----------|--------|
| Functional objects | **8/8** specified |
| Work Item lifecycle states | **7/7** specified |
| Invariants I1–I12 | **SPECIFIED / NOT DEMONSTRATED** (all 12) |
| Acceptance criteria AC01–AC16 | **SPECIFIED / NOT DEMONSTRATED** (all 16) |
| AC demonstrated | **0/16** |

### Invariants I1–I12 (traceability summary)

| ID | Règle | Statut review |
|----|-------|---------------|
| I1 | Done requires human verdict | SPECIFIED / NOT DEMONSTRATED |
| I2 | Done requires exit proof | SPECIFIED / NOT DEMONSTRATED |
| I3 | One active Cycle | SPECIFIED / NOT DEMONSTRATED |
| I4 | Past Cycle never overwritten | SPECIFIED / NOT DEMONSTRATED |
| I5 | Evidence/Decision historical | SPECIFIED / NOT DEMONSTRATED |
| I6 | Human gate never auto-approved | SPECIFIED / NOT DEMONSTRATED |
| I7 | Unfinished WI has next_action | SPECIFIED / NOT DEMONSTRATED |
| I8 | Blocked has reason+unblock | SPECIFIED / NOT DEMONSTRATED |
| I9 | Profile explicit before Ready | SPECIFIED / NOT DEMONSTRATED |
| I10 | Scope visible before execution | SPECIFIED / NOT DEMONSTRATED |
| I11 | Git refs manual only | SPECIFIED / NOT DEMONSTRATED |
| I12 | No autonomous scope expansion | SPECIFIED / NOT DEMONSTRATED |

### Acceptance criteria AC01–AC16

All **SPECIFIED / NOT DEMONSTRATED** — **0/16** demonstrated (see embedded functional spec §W).

---

## Open decisions (11/11 preserved — NONE closed)

1. Cible utilisateur produit élargie — **OPEN**
2. Branding / nom produit définitif — **OPEN**
3. Architecture technique — **OPEN**
4. Frontend stack — **OPEN**
5. Persistence / database — **OPEN**
6. Auth / multi-user strategy — **OPEN**
7. Hosting/deployment — **OPEN**
8. Niveau d’accessibilité cible — **OPEN**
9. Design tokens définitifs — **OPEN**
10. Référence/fileKey Figma — **OPEN**
11. Trajectoire native Git après M1 — **OPEN**

---

## Functional questions discovered (FQ01–FQ05)

| # | Question | Impact | Statut |
|---|----------|--------|--------|
| FQ01 | Statut Work Item après NO-GO (E16) | Parcours J14, edge E16 | **MORRIS DECISION REQUIRED** |
| FQ02 | Taxonomie `type` Work Item | Qualification J3 | **OPEN** |
| FQ03 | Échelle `priority` | Tri Workboard | **OPEN** |
| FQ04 | Politique suppression Evidence post-Decision (E17) | I5 | **OPEN** |
| FQ05 | Suppression/archivage Project ou Work Item | Historique | **OPEN** |

**FQ01 / E16:** NO-GO return status — **MORRIS DECISION REQUIRED** before closure of ambiguity.

---

## Working tree — `git diff --stat`

```
 projects/sfia-task-manager/README.md | 12 ++++++++----
 1 file changed, 8 insertions(+), 4 deletions(-)
```

## Working tree — `git diff --name-status`

```
M	projects/sfia-task-manager/README.md
```

---

## Embedded artifact — M1 functional specification (complete)

Path: `projects/sfia-task-manager/01-functional/2026-08-19-m1-functional-spec.md`

```markdown
# SFIA Task Manager — M1 Functional Specification

**Projet :** SFIA Task Manager
**Chemin :** `projects/sfia-task-manager/01-functional/2026-08-19-m1-functional-spec.md`
**Cycle :** Cycle 2 — Conception fonctionnelle
**Profil :** Standard
**Baseline process :** SFIA v2.6
**Source produit :** `projects/sfia-task-manager/00-framing/2026-08-19-project-framing.md`
**Statut :** FUNCTIONAL DESIGN — MORRIS REVIEW REQUIRED

---

## A. Purpose and authority

### Objectif de la spec

Transformer le cadrage M1 validé en comportement fonctionnel **testable conceptuellement** : acteurs, objets, états, transitions, règles, parcours, exceptions et critères observables — sans figer l’architecture technique, l’UX pixel ou le backlog.

### Relation avec le framing

| Élément | Rôle |
|---------|------|
| `00-framing/2026-08-19-project-framing.md` | Baseline historique des décisions M1 et UX direction |
| Ce document | Spécification fonctionnelle dérivée — approfondit le **comment** observable sans contredire le **quoi** validé |

En cas de tension documentaire non résolue : le framing prime ; une question ouverte ou une décision Morris est requise.

### Décisions déjà validées (consommées)

- GO M1 functional contract — Morris
- GO UX contract — Morris (direction fonctionnelle des surfaces, pas design pixel)
- Modèle Work Item + Cycle
- Décision humaine obligatoire pour clôture
- One active Cycle max par Work Item en M1
- Workflow lifecycle M1 (7 états)
- Blocked et Replan orthogonaux au lifecycle
- Cinq surfaces métier + Quick Inspector transversal
- Git/evidence manuels en M1
- Invariants I1–I12
- AC01–AC16 comme cibles produit (non démontrées)

### Questions encore ouvertes

Voir section **Y. Open decisions** et **FUNCTIONAL QUESTIONS DISCOVERED**.

### Autorité

Morris reste l’autorité des décisions structurantes. L’application ne prend jamais de décision structurante automatiquement (I1, I6, I12).

---

## B. Functional scope M1

### Objets fonctionnels (8/8)

| Objet | Responsabilité M1 |
|-------|-------------------|
| **Workspace** | Conteneur organisationnel de Projects et Work Items |
| **Project** | Regroupement de Work Items sous une intention produit |
| **Work Item** | Unité de travail qualifiée et gouvernée |
| **Cycle** | Exécution bornée d’un Work Item selon contrat SFIA |
| **Gate** | Point de contrôle avant progression |
| **Evidence** | Preuve attachée à exécution ou revue |
| **Decision** | Verdict humain structurant |
| **Activity** | Historique des événements structurels |

### Relation centrale

```
Workspace
  → Project
    → Work Item
      → Cycle(s)  [max 1 actif]
        → Gates / Evidence / Decision
      → Activity history
```

### Hors scope M1 (rappel framing)

Native Git sync, actions Git automatiques, qualification IA automatique, génération contractuelle automatique, intégration Cursor, workflow Jira-like configurable, multi-agent, analytics avancées, mobile responsive complet, auth/production — voir framing §24.

---

## C. Functional actors / roles

| Rôle fonctionnel | Description M1 | Peut décider structurellement ? |
|------------------|----------------|----------------------------------|
| **Human operator** | Pilote le travail : crée, qualifie, exécute, attache preuves, prépare revue | Non |
| **Human decision authority** | Enregistre verdict GO / GO WITH RESERVE / REPLAN / NO-GO | Oui (humain uniquement) |
| **Future AI assistance** | Peut recommander verdict, résumer preuves, signaler écarts | Non — recommendation-only |

**Notes :**

- Morris = autorité **projet actuel**, pas rôle produit universel figé.
- Auth / multi-user / RBAC détaillé = **OPEN** (section Y).
- Aucun persona commercial inventé.

---

## D. Object semantics

### D.1 Workspace

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Regrouper Projects et Work Items sous un périmètre organisationnel unique en M1 |
| Création | Observable : au moins un Workspace utilisable sans configuration multi-tenant |
| États | Actif (M1 ne modélise pas d’archivage Workspace) |
| Mutabilité | Métadonnées minimales modifiables ; pas de suppression destructive sans règle explicite — **OPEN** si multi-workspace futur |
| Historique | Activity si changements structurels |
| Suppression | **OPEN** — non spécifié framing |
| Questions | Multi-workspace M2+ = OPEN |

### D.2 Project

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Intention produit / chantier regroupant Work Items |
| Création | Opérateur humain ; champs minimaux : identifiant, titre/intention |
| États | Actif |
| Relation | Parent de Work Items ; visible sur Workboard et surface Project |
| Mutabilité | Titre/intention modifiables ; historique conservé |
| Suppression | **OPEN** — impact sur Work Items enfants à arbitrer Morris si requis |

### D.3 Work Item

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Unité de travail gouvernée SFIA |
| Création | Opérateur ; état initial **Inbox** |
| États lifecycle | Inbox, Qualified, Ready, In Progress, Review, Decision Pending, Done |
| Flag orthogonal | Blocked (reason, unblock condition, next action) |
| Mutabilité | Champs selon section E ; certaines transitions verrouillent des champs structurels |
| Historique | Activity + Cycles passés jamais écrasés |
| Suppression | **OPEN** — soft-delete vs hard-delete non défini ; historique ne doit pas être silencieusement perdu |

### D.4 Cycle

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Exécution bornée rattachée à un Work Item |
| Création | Depuis Work Item Ready → transition In Progress |
| États fonctionnels | Draft/Active/Closed(Historical) — terminologie observable |
| Invariant | **Max 1 Cycle actif** par Work Item (I3) |
| Mutabilité | Contrat cycle modifiable tant que règles de transition le permettent |
| Clôture | Review complete, Decision, REPLAN, ou abandon documenté |
| Suppression | **Interdit** — clôture historique uniquement (I4) |

### D.5 Gate

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Point de contrôle explicite avant progression |
| Création | Définie dans contrat Cycle ou qualification |
| Statuts minimaux | Pending / Satisfied / Failed / Waived — **Waived** requiert décision humaine explicite si structurant (I6) |
| Relation | Bloque transitions si prérequis non satisfaits |
| Auto-approval | **Interdit** pour human gates (I6) |

### D.6 Evidence

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Preuve attachée manuellement |
| Catégories | validation, test, screenshot, Git reference, review, structured note, other evidence |
| Association | Work Item et/ou Cycle |
| Mutabilité | Ajout M1 ; suppression après Decision historisée = **OPEN** (E17) |
| Historique | Conservée (I5) |

### D.7 Decision

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Verdict humain structurant |
| Verdicts | GO, GO WITH RESERVE, REPLAN, NO-GO |
| Champs observables | verdict, author, date, reason/reserve si applicable |
| Mutabilité | **Append-only** après enregistrement — correction = nouvelle Decision, pas écrasement |
| Auto | **Jamais** (I1, I6) |

### D.8 Activity

| Aspect | Comportement M1 |
|--------|-----------------|
| Responsabilité | Journal des événements structurels |
| Événements | Voir section Q |
| Mutabilité | Append-only |
| Suppression | **Interdit** si cela brise reconstruction historique |

---

## E. Work Item functional contract

| Champ | Sens | Obligatoire à | Modification | Impact workflow | Validation observable |
|-------|------|---------------|--------------|-----------------|----------------------|
| `title` | Intitulé court | Création (Inbox) | Toujours modifiable sauf Done | Visible Workboard | Non vide |
| `objective` | Intention / finalité | Qualified | Modifiable avant In Progress ; trace Activity si changement majeur | Inbox→Qualified | Texte non vide |
| `project` | Parent Project | Création | Modifiable avec trace | Filtrage Project | Référence Project valide |
| `type` | Nature du travail | **OPEN taxonomy** | Modifiable avant Ready | Qualification | **OPEN** — liste types non figée |
| `priority` | Priorité relative | Optionnel M1 | Modifiable | Affichage / tri | Valeur dans échelle définie ou libre — **OPEN** échelle |
| `status` | Lifecycle state | Système + transitions | Via transitions uniquement | Colonne Workboard | Un des 7 états |
| `in_scope` | Périmètre inclus | Ready | Modifiable avant In Progress sans décision ; après = trace + pas d’expansion auto (I12) | Ready gate | Non vide à Ready |
| `out_of_scope` | Exclusions | Ready | Idem | Ready gate | Présent (peut être « aucune » explicite) |
| `dependencies` | Dépendances | Ready | Modifiable avec trace | Ready / Blocked | Liste ou « none » |
| `guardrails` | Garde-fous exécution | Ready | Modifiable avant In Progress | Cycle contract | Non vide à Ready |
| `exit_proof` | Preuve clôture attendue | Ready | Modifiable avant Review si trace | Done gate (I2) | Description testable |
| `current_cycle` | Cycle actif | In Progress+ | Système | I3 | Null ou 1 Cycle actif |
| `next_action` | Prochaine action explicite | Toujours si non-Done | Obligatoire opérateur | I7, I8 | Non vide sauf Done |

---

## F. Cycle functional contract

| Champ | Sens M1 | Règle |
|-------|---------|-------|
| `objective` | Objectif du cycle | Obligatoire à création Cycle |
| `cycle_type` | Type SFIA | Obligatoire ; valeur parmi types reconnus process |
| `profile` | Light/Standard/Critical/Capitalization | Obligatoire avant Ready (I9) |
| `blocks` | Sections contrat | Structuration documentaire du cycle |
| `scope` | Périmètre exécution | Aligné Work Item in_scope |
| `guardrails` | Garde-fous cycle | Hérités / précisés |
| `allowed_files` | Fichiers autorisés | Informationnel M1 |
| `forbidden_files` | Fichiers interdits | Informationnel M1 |
| `protected_paths` | Chemins protégés | Informationnel M1 |
| `gates` | Gates requis | Voir section N |
| `stop_conditions` | Conditions d’arrêt | Documentées ; arrêt sans décision auto |
| `exit_proof` | Preuve sortie cycle | Liée Work Item exit_proof |
| `review_pack` | required/status/reference | Informationnel M1 ; pas génération auto |
| `git_refs` | repo, ref, branch, HEAD, commit, PR, files | **Manuel/informationnel** (I11) |
| `verdict` | Verdict cycle | Dérivé Decision humaine |

**Rappels :** pas d’objet ExecutionContract séparé M1 ; max 1 Cycle actif (I3).

---

## G. Lifecycle Work Item

| État | Signification | Entrée | Sortie | Données minimales visibles | Actions permises | Actions interdites | next_action |
|------|---------------|--------|--------|----------------------------|------------------|--------------------|-------------|
| **Inbox** | Intention capturée, non qualifiée | Création WI | Qualification | title, project | Éditer title/objective, assign project | Ready, In Progress | Obligatoire |
| **Qualified** | Nature travail comprise | Inbox→Qualified | Ready prep | + objective, type (si connu) | Compléter qualification | In Progress direct | Obligatoire |
| **Ready** | Contrat exécution défini | Qualified→Ready | Cycle start | + scope, guardrails, exit_proof, profile | Créer Cycle, Block | In Progress sans Cycle | Obligatoire |
| **In Progress** | Cycle actif en cours | Ready→In Progress | Review | + current_cycle, contrat | Progress, Evidence, Block | Review sans evidence si requise | Obligatoire |
| **Review** | Exécution terminée, revue | In Progress→Review | Decision Pending | Expected vs actual evidence | Complete review, Block | Done direct | Obligatoire |
| **Decision Pending** | Revue faite, verdict requis | Review→Decision Pending | Done / REPLAN / NO-GO | Réserves, gate status | Enregistrer Decision humaine | Done sans Decision+exit_proof | Obligatoire |
| **Done** | Clôturé positivement | Decision positive + exit_proof | — | État final + historique | Consultation | Toute modification lifecycle sans trace | N/A (I7 exception) |

**Blocked flag :** peut s’appliquer à tout état non-Done ; n’change pas `status` lifecycle.

---

## H. Transition matrix

| Transition | Préconditions | Données obligatoires | Preuve / gate | Erreur observable (E#) |
|------------|---------------|------------------------|---------------|-------------------------|
| **Inbox → Qualified** | title, project, objective compris | objective, project | — | E01 partial |
| **Qualified → Ready** | profile, scope, guardrails, exit_proof | in_scope, out_of_scope, dependencies, guardrails, exit_proof, profile | I9, I10 | **E01** |
| **Ready → In Progress** | Cycle créé ; gates prérequis OK | current_cycle actif unique | I3, gates | **E02**, **E03** |
| **In Progress → Review** | Travail cycle terminé | evidence attendue disponible si requise | exit_proof path | **E04** |
| **Review → Decision Pending** | Revue terminée | réserves identifiées (peut être « none ») | — | — |
| **Decision Pending → Done** | Verdict GO ou GO WITH RESERVE | Decision + exit_proof satisfied | I1, I2 | **E05**, **E06** |

Transitions **non listées** = interdites silencieusement ; raison affichée (pas bouton désactivé sans explication).

---

## I. Blocked behavior

| Règle | Comportement |
|-------|--------------|
| Activation | Opérateur pose flag Blocked |
| Champs obligatoires | `reason`, `unblock condition`, `next_action` (I8) |
| Lifecycle state | **Inchangé** — pas de colonne Blocked |
| Actions permises | Consultation, ajout Evidence, édition champs non verrouillés, unblock si condition remplie |
| Actions restreintes | Transitions forward sauf unblock explicite documenté |
| Unblock | Opérateur ; condition satisfaite ou override documenté ; Activity enregistrée |
| Cycle actif | Reste actif sauf Decision REPLAN/NO-GO |
| Workboard | Flag visible sur carte ; pas badge status dupliqué |

Erreurs : **E07**, **E08**.

---

## J. Decision behavior

| Verdict | Préconditions | Infos requises | Effet Cycle | Effet Work Item | Historique | next_action |
|---------|---------------|----------------|-------------|-----------------|------------|-------------|
| **GO** | Decision Pending ; exit_proof satisfied | author, date | Cycle → Closed historical | → Done | Decision + Activity | N/A |
| **GO WITH RESERVE** | Idem + reserve text | reserve, follow-up si needed | Cycle closed | → Done | + reserve trace | follow-up si requis |
| **REPLAN** | Decision Pending | reason, retour Qualified **ou** Ready | Cycle closed historical | status → per L | I4 preserved | Obligatoire |
| **NO-GO** | Decision Pending | reason | Cycle closed ou suspendu | retour status — **OPEN** | Decision preserved | Obligatoire |

**Toujours humain** — I1, I6. Erreurs : **E06**, **E10**, **E11**, **E16**.

---

## K. GO WITH RESERVE

| Règle | Détail |
|-------|--------|
| `reserve` text | **Obligatoire** — non vide |
| follow-up / next_action | Obligatoire si reserve implique traitement ultérieur |
| Done | Autorisé si exit_proof + verdict positif |
| Suivi automatique | **Non** — pas de moteur auto M1 |
| Historique | Reserve visible dans Review & Decision et Activity |

Erreur : **E10**.

---

## L. REPLAN

| Étape | Comportement |
|-------|--------------|
| 1 | Enregistrer Decision REPLAN + reason |
| 2 | Clôturer Cycle courant → **historical** (I4) |
| 3 | Conserver Evidence et Decision passées (I5) |
| 4 | Déterminer retour Work Item : **Qualified** si re-qualification nécessaire ; **Ready** si contrat encore valide |
| 5 | Exiger next_action |
| 6 | Créer **nouveau Cycle** distinct si reprise In Progress — jamais réutiliser ID Cycle passé |
| 7 | Activity : REPLAN event avec lien ancien/nouveau Cycle |

**Critères observables Qualified vs Ready :**

| Retour Ready si | Retour Qualified si |
|-----------------|---------------------|
| scope/guardrails/exit_proof/profile encore valides | objective, scope, ou qualification remise en cause |
| reason indique ajustement exécution seule | reason indique re-cadrage intention |

Erreurs : **E11**, **E12**.

---

## M. NO-GO

### Certitudes (framing)

- Pas de clôture positive (pas Done via NO-GO)
- Decision historisée avec author, date, reason
- next_action obligatoire

### OPEN DECISION — MORRIS DECISION REQUIRED

**Statut de retour Work Item après NO-GO :** le framing ne fixe pas si le Work Item retourne Inbox, Qualified, Ready, reste Decision Pending, ou passe en état « cancelled » dédié.

| Option observée | Impact |
|-----------------|--------|
| Retour Qualified | Re-qualification complète |
| Retour Ready | Nouveau Cycle sans re-cadrage |
| Reste Decision Pending | Nouvelle Decision requise |
| Archivage / cancelled | **OPEN** — non dans lifecycle M1 framing |

**Ce cycle ne tranche pas.** Erreur edge : **E16**.

---

## N. Gate semantics

| Aspect | Règle M1 |
|--------|----------|
| Nature | Point de contrôle explicite |
| Human gate | Jamais auto-approved (I6) |
| Statuts | pending / satisfied / failed / waived (waived = humain si structurant) |
| Satisfaction | Preuve ou checklist observable |
| Blocage | Transition refusée avec raison |
| Relation Cycle | Gates listés dans contrat Cycle |

Pas de moteur de règles technique spécifié.

---

## O. Evidence semantics

| Aspect | Règle |
|--------|-------|
| Catégories | validation, test, screenshot, Git reference, review, structured note, other evidence |
| Expected vs present | Review & Decision compare exit_proof vs Evidence attachée |
| Association | Work Item ; optionally Cycle |
| Provenance | author, date, type, reference (URL, text, git ref manual) |
| Historique | Append ; I5 |
| Stockage fichier | **OUT OF SCOPE** — pas de spec persistence |

Erreur : **E04**, **E17**.

---

## P. Exit proof semantics

| Aspect | Règle |
|--------|-------|
| Définition | Description testable de ce qui prouve clôture |
| États | unsatisfied / satisfied (humain ou check explicite non-auto pour structurant) |
| Relation Evidence | satisfied quand Evidence couvre critères exit_proof |
| Relation Decision | Done requiert Decision positive + exit_proof satisfied (I1, I2) |
| Affichage | Visible Ready onward (I10) |

Erreur : **E05**.

---

## Q. Activity / history

Événements structurels minimum :

| Event | Payload observable |
|-------|-------------------|
| work_item.created | id, project, title |
| work_item.qualified | objective |
| lifecycle.changed | from, to, actor |
| work_item.blocked | reason, unblock_condition |
| work_item.unblocked | actor |
| cycle.started | cycle_id, profile |
| cycle.closed | cycle_id, reason |
| evidence.attached | evidence_id, type |
| gate.updated | gate_id, status |
| review.completed | summary |
| decision.recorded | verdict, author |
| replan.executed | old_cycle, new_target_state |
| work_item.done | decision_ref |

Reconstruction J15 doit enchaîner ces événements sans trou.

Pas d’event sourcing technique imposé.

---

## R. Functional journeys — nominal

### J1 Create Project

| | |
|-|-|
| Start | Workspace existant |
| Actor | Human operator |
| Steps | Create Project with title/intention |
| Result | Project visible surface Project |
| Negative | Missing title → reject |

### J2 Create Work Item in Inbox

| | |
|-|-|
| Start | Project exists |
| Steps | Create WI → status Inbox |
| Result | WI on Workboard Inbox column |
| Negative | No project → reject |

### J3 Qualify Work Item

| | |
|-|-|
| Start | Inbox |
| Steps | Set objective, understand type → Qualified |
| Result | status Qualified |
| Negative | Empty objective → reject |

### J4 Move Qualified → Ready

| | |
|-|-|
| Start | Qualified |
| Steps | Fill profile, scope, guardrails, exit_proof, dependencies |
| Result | status Ready |
| Negative | **E01** |

### J5 Start Cycle

| | |
|-|-|
| Start | Ready |
| Steps | Create Cycle ; gates OK → In Progress |
| Result | current_cycle set ; I3 satisfied |
| Negative | **E02**, **E03** |

### J6 Execute / progress Cycle

| | |
|-|-|
| Start | In Progress |
| Steps | Operator works per contract ; update next_action |
| Result | Progress toward Review |
| Negative | Blocked without fields → **E07** |

### J7 Attach Evidence

| | |
|-|-|
| Start | In Progress or Review |
| Steps | Manual attach with type |
| Result | Evidence linked ; visible Review |
| Negative | — |

### J8 Move to Review

| | |
|-|-|
| Start | In Progress |
| Steps | Mark execution complete ; evidence if required |
| Result | status Review |
| Negative | **E04** |

### J9 Review → Decision Pending

| | |
|-|-|
| Start | Review |
| Steps | Complete review ; note reservations |
| Result | status Decision Pending |
| Negative | — |

### J10 GO → Done

| | |
|-|-|
| Start | Decision Pending |
| Steps | Human GO ; exit_proof satisfied |
| Result | Done ; Cycle historical |
| Negative | **E05**, **E06** |

### J11 GO WITH RESERVE → Done

| | |
|-|-|
| Start | Decision Pending |
| Steps | Human GO WITH RESERVE + reserve text |
| Result | Done with reserve trace |
| Negative | **E10** |

### J12 Block → Unblock

| | |
|-|-|
| Start | Any non-Done |
| Steps | Block with reason+unblock+next_action ; later unblock |
| Result | Flag cleared ; lifecycle unchanged |
| Negative | **E07**, **E08** |

### J13 REPLAN → new trajectory

| | |
|-|-|
| Start | Decision Pending |
| Steps | REPLAN decision ; close Cycle ; return Qualified/Ready ; new Cycle if needed |
| Result | Old Cycle historical ; new path |
| Negative | **E11**, **E12** |

### J14 NO-GO

| | |
|-|-|
| Start | Decision Pending |
| Steps | Human NO-GO + reason |
| Result | No Done ; status per **OPEN** (E16) |
| Negative | Auto NO-GO → **E06** |

### J15 Reconstruct History

| | |
|-|-|
| Start | Done or in-progress WI |
| Steps | Query Activity + Cycles + Decisions |
| Result | Timeline intent→qualification→execution→evidence→decision |
| Negative | Missing events → gap visible |

---

## S. Required negative / edge cases

| ID | Cas | Rejet / comportement | Raison visible | Lifecycle après | next_action | Morris ? |
|----|-----|----------------------|----------------|-----------------|-------------|----------|
| E01 | Ready sans champs structurels | Transition refusée | Champs listés | Unchanged | Remplir champs | Non |
| E02 | 2e Cycle actif | Création/refus | I3 | Unchanged | Fermer Cycle existant | Non |
| E03 | In Progress sans gate OK | Transition refusée | Gate id | Unchanged | Satisfaire gate | Non |
| E04 | Review sans evidence requise | Transition refusée | exit_proof gap | In Progress ou Review | Attach evidence | Non |
| E05 | Done sans exit_proof | Refus | I2 | Decision Pending | Satisfy proof | Non |
| E06 | Done sans verdict humain | Refus | I1 | Decision Pending | Record decision | Non |
| E07 | Blocked sans reason | Refus block | I8 | Unchanged | Provide reason | Non |
| E08 | Blocked sans unblock condition | Refus block | I8 | Unchanged | Provide condition | Non |
| E09 | Non-Done sans next_action | Validation warning/block | I7 | Unchanged | Set next_action | Non |
| E10 | GO WITH RESERVE sans reserve | Refus | K | Decision Pending | Add reserve | Non |
| E11 | REPLAN sans reason | Refus | L | Decision Pending | Add reason | Non |
| E12 | REPLAN overwrite old Cycle | Refus / impossible | I4 | — | Use new Cycle id | Non |
| E13 | Human gate auto-approved | Refus | I6 | Unchanged | Human action | Non |
| E14 | Scope expansion auto | Refus | I12 | Unchanged | Human decision | Non |
| E15 | Git write from product M1 | Refus | I11, framing | Unchanged | Manual external | Non |
| E16 | NO-GO return status ambiguous | **OPEN** — operator guidance insufficient | E16 message | **OPEN** | Morris decision | **Oui** |
| E17 | Evidence delete breaks history | Refus or soft-delete flag | I5 | Unchanged | Append correction | **OPEN** policy |

---

## T. Permissions / visibility

| Invariant | M1 |
|-----------|-----|
| Structural decision | Human-only |
| AI future | Recommendation-only |
| Decision records | author + date required |
| Multi-user RBAC | **OPEN** |
| Auth strategy | **OPEN** |
| Visibility rules détaillées | **OPEN** — M1 assume opérateur unique implicite sans spec auth |

---

## U. Functional Git behavior M1

| Règle | Détail |
|-------|--------|
| Git refs | Manuelles : repo, ref, branch, HEAD, commit, PR, files |
| Actions produit | **Aucune** écriture Git (I11, E15) |
| Native sync | Hors M1 |
| Affichage | Cycle Workspace + Review & Decision |

---

## V. Functional AI behavior M1 / future

| Horizon | Comportement |
|---------|--------------|
| M1 | Pas de qualification auto ; pas de verdict auto ; pas de génération contrat auto |
| Future M3 | AI qualification candidate — **OPEN architecture** |
| Future M3 | Contract generation candidate |
| Future M4 | Cursor integration candidate |

Aucune spec protocole ou agent.

---

## W. Acceptance criteria traceability

| AC | Comportement | Règles / parcours | Negative | Preuve future | Statut cycle |
|----|--------------|-------------------|----------|---------------|--------------|
| AC01 | Project created | J1 | — | E2E demo | SPECIFIED / NOT DEMONSTRATED |
| AC02 | WI in Inbox | J2 | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC03 | SFIA qualification | J3, E | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC04 | Ready blocked if missing | J4, E01 | E01 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC05 | Cycle from WI | J5 | E02 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC06 | One active Cycle | J5, I3 | E02 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC07 | Cycle transitions controlled | H, N | E03 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC08 | Blocked with reason+unblock | J12, I | E07,E08 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC09 | Manual Evidence | J7, O | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC10 | scope/guardrails visible review | J8-J9, I10 | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC11 | Human decision recorded | J10-J11, J | E06 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC12 | Done impossible sans decision+proof | J10, I1,I2 | E05,E06 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC13 | REPLAN new trajectory | J13, L | E12 | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC14 | Workboard/Project current state | J1-J2, surfaces | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC15 | History reconstructs | J15, Q | — | E2E | SPECIFIED / NOT DEMONSTRATED |
| AC16 | No auto structural decision | J, I6,I12 | E13,E14 | E2E | SPECIFIED / NOT DEMONSTRATED |

**AC demonstrated : 0/16**

---

## X. Invariants traceability

| ID | Règle fonctionnelle | Parcours | Cas négatif |
|----|---------------------|----------|-------------|
| I1 | Done requires human verdict | J10-J11 | E06 |
| I2 | Done requires exit proof | J10, P | E05 |
| I3 | One active Cycle | J5 | E02 |
| I4 | Past Cycle never overwritten | J13, L | E12 |
| I5 | Evidence/Decision historical | J13, O | E17 |
| I6 | Human gate never auto-approved | N, J | E13 |
| I7 | Unfinished WI has next_action | G | E09 |
| I8 | Blocked has reason+unblock | I, J12 | E07, E08 |
| I9 | Profile explicit before Ready | J4, E | E01 |
| I10 | Scope visible before execution | J4, J8 | E01 |
| I11 | Git refs manual only | U | E15 |
| I12 | No autonomous scope expansion | E, J | E14 |

---

## Y. Open decisions

### Preserved from framing (11/11 — NONE closed)

1. Cible utilisateur produit élargie — **OPEN**
2. Branding / nom produit définitif — **OPEN**
3. Architecture technique — **OPEN**
4. Frontend stack — **OPEN**
5. Persistence / database — **OPEN**
6. Auth / multi-user strategy — **OPEN**
7. Hosting/deployment — **OPEN**
8. Niveau d’accessibilité cible — **OPEN**
9. Design tokens définitifs — **OPEN**
10. Référence/fileKey Figma — **OPEN**
11. Trajectoire native Git après M1 — **OPEN**

### FUNCTIONAL QUESTIONS DISCOVERED

| # | Question | Impact | Statut |
|---|----------|--------|--------|
| FQ01 | Statut Work Item après NO-GO (E16) | Parcours J14, edge E16 | **MORRIS DECISION REQUIRED** |
| FQ02 | Taxonomie `type` Work Item | Qualification J3 | **OPEN** |
| FQ03 | Échelle `priority` | Tri Workboard | **OPEN** |
| FQ04 | Politique suppression Evidence post-Decision (E17) | I5 | **OPEN** |
| FQ05 | Suppression/archivage Project ou Work Item | Historique | **OPEN** |

Aucune convertie en décision validée.

---

## Z. Functional maturity and downstream candidates

### Maturité recommandée (CKC vocabulary)

**suffisante_pour_decider**

| Indice | Statut |
|--------|--------|
| Parcours nominaux J1–J15 | Définis |
| Edge cases E01–E17 | Qualifiés (E16/E17 partiellement OPEN) |
| Règles structurantes | Tracées I1–I12, AC01–AC16 |
| Exceptions | Blocked, REPLAN, NO-GO partiel |
| Gaps | NO-GO return, type taxonomy, auth/RBAC |

**Non déclaré :** spec complète · prêt à coder · architecture validée · UX approuvée · backlog prêt · M1 READY

### Downstream candidates (NOT AUTHORIZED)

| Cycle | Condition candidat |
|-------|-------------------|
| Cycle 3 — Architecture fonctionnelle | Si découpage modules/domaines requis |
| Cycle 4 — UX/UI | Après revue fonctionnelle Morris |
| Cycle 5 — Backlog | Après UX/Figma selon trajectoire SFIA |

Architecture technique, Figma, delivery : **gates Morris séparés requis**.

---

## Explicit separation

Ce projet n’est **pas** SFIA Studio v3. SFIA v2.6 = baseline process. M1 **NOT READY**.
```

---

## Embedded artifact — `projects/sfia-task-manager/README.md` (modified working copy)

```markdown
# SFIA Task Manager

**Project path:** `projects/sfia-task-manager/`

**Status:** M1 / FUNCTIONAL DESIGN

**Operational process baseline:** SFIA v2.6

## Purpose

Transformer une intention de travail en travail qualifié, exécuté dans un cycle SFIA borné, vérifié par des preuves et clôturé par une décision humaine, avec historique et prochaine action explicites.

## Initial scope

M1 fonctionnel + UX d'une boucle de gestion de travail gouvernée par SFIA.

## Current cycle

Cycle 2 — Conception fonctionnelle — Standard

## Functional specification

- `01-functional/2026-08-19-m1-functional-spec.md` — M1 functional specification (Morris review required)

## Key validated decisions

- GO M1 functional contract — Morris
- GO UX contract — Morris
- modèle central Work Item + Cycle
- décision humaine obligatoire pour clôture
- one active Cycle maximum par Work Item en M1
- workflow M1 défini
- cinq surfaces métier M1
- Git/evidence manuels en M1
- aucune architecture technique choisie
- aucune persistence choisie
- aucun GO delivery

## Next step

Morris functional review du Cycle 2.

Les cycles aval (architecture fonctionnelle, UX/UI, backlog, architecture technique, delivery) restent candidats et nécessitent chacun un GO Morris distinct.

## SFIA references

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`

## Explicit separation

Ce projet n'est pas SFIA Studio v3 et ne doit pas être assimilé à SFIA Studio sans décision Morris dédiée.
```

---

## Verdict

**READY FOR MORRIS FUNCTIONAL REVIEW — PROJECT COMMIT NOT AUTHORIZED**

- Cycle 2 functional design artifact is complete enough for Morris review (`suffisante_pour_decider`).
- No project branch commit, push, or PR performed in this handoff.
- Downstream cycles remain **NOT AUTHORIZED** without distinct Morris GO.
