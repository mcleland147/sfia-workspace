# SFIA Studio — Review Handoff Git — OPS1 UX/UI Post-Merge (PR #240)

- **Date/heure/fuseau republication :** 2026-07-20 17:27:00 CEST
- **Repository :** mcleland147/sfia-workspace
- **Cycle handoff :** Validation — republication Review Handoff Git post-merge
- **Profil handoff :** Light
- **Branche handoff :** `sfia/review-handoff`
- **Fichier canonique :** `sfia-review-handoff/latest-chatgpt-review.md`
- **Handoff remplacé :** `4c556374334198e7c43c12dbfbe05cab65fe83ad` (validation UX pré-merge)
- **GO Morris :** republication handoff post-merge uniquement
- **Cleanup / cycle suivant :** **non** autorisés dans ce cycle

---

# Review Pack — OPS1 UX/UI Post-Merge Validated

- **Date/heure/fuseau cycle source :** 2026-07-20 17:20:00 CEST
- **Cycle :** 14 — Post-merge
- **Profil :** Standard
- **PR :** [#240](https://github.com/mcleland147/sfia-workspace/pull/240)
- **État :** **MERGED**
- **Stratégie :** squash merge
- **Date du merge :** 2026-07-20T15:17:41Z (2026-07-20 17:17:41 CEST)
- **Base avant merge :** `bfa2cdf949f417fcbce47d1687824c223eeed8f7`
- **Head fusionné :** `2164f754f3ec87c91f196869f0763c59f2a511ab` (`design/sfia-studio-ops1-ux-ui`)
- **Commit squash sur `main` :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`
- **Message :** `docs(sfia-studio): validate OPS1 UX/UI with reservations`
- **Périmètre :** 7 fichiers · +964 / −16
- **origin/main :** `5a595b0dfcc01302ce8e7f729fee2dd383735388`

## Confirmation d’absence de hors-périmètre dans le squash

- Aucun fichier temporaire (`.tmp-sfia-review/**`)
- Aucun code (`app/**`, `harness/**`)
- Aucune modification Figma dans le commit

## État local après synchronisation post-merge

- Branche courante : `main`
- Fast-forward (ff-only) : `bfa2cdf` → `5a595b0` (`git merge --ff-only origin/main`)
- Tracked : propre
- Staged : vide
- Untracked restants (non commités) : `.tmp-sfia-review/` · `projects/.tmp-sfia-review/`

```
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/

```

## Squash commit

```
5a595b0 docs(sfia-studio): validate OPS1 UX/UI with reservations
 .../41-operational-vertical-slice-1-framing.md     |  11 +-
 projects/sfia-studio/45-ops1-functional-design.md  |   2 +-
 .../sfia-studio/48-ops1-functional-architecture.md |   8 +-
 projects/sfia-studio/51-ops1-ux-ui-contract.md     | 391 +++++++++++++++++++++
 .../52-ops1-visual-contract-and-figma-spec.md      | 246 +++++++++++++
 .../sfia-studio/53-ops1-ux-ui-decision-pack.md     | 293 +++++++++++++++
 projects/sfia-studio/README.md                     |  29 +-
 7 files changed, 964 insertions(+), 16 deletions(-)

```

### Name-status

```
M	projects/sfia-studio/41-operational-vertical-slice-1-framing.md
M	projects/sfia-studio/45-ops1-functional-design.md
M	projects/sfia-studio/48-ops1-functional-architecture.md
A	projects/sfia-studio/51-ops1-ux-ui-contract.md
A	projects/sfia-studio/52-ops1-visual-contract-and-figma-spec.md
A	projects/sfia-studio/53-ops1-ux-ui-decision-pack.md
M	projects/sfia-studio/README.md

```

### Diff stat

```
 .../41-operational-vertical-slice-1-framing.md     |  11 +-
 projects/sfia-studio/45-ops1-functional-design.md  |   2 +-
 .../sfia-studio/48-ops1-functional-architecture.md |   8 +-
 projects/sfia-studio/51-ops1-ux-ui-contract.md     | 391 +++++++++++++++++++++
 .../52-ops1-visual-contract-and-figma-spec.md      | 246 +++++++++++++
 .../sfia-studio/53-ops1-ux-ui-decision-pack.md     | 293 +++++++++++++++
 projects/sfia-studio/README.md                     |  29 +-
 7 files changed, 964 insertions(+), 16 deletions(-)

```

## Sept fichiers intégrés (liste exacte)

1. `projects/sfia-studio/41-operational-vertical-slice-1-framing.md` — M
2. `projects/sfia-studio/45-ops1-functional-design.md` — M
3. `projects/sfia-studio/48-ops1-functional-architecture.md` — M
4. `projects/sfia-studio/51-ops1-ux-ui-contract.md` — A
5. `projects/sfia-studio/52-ops1-visual-contract-and-figma-spec.md` — A
6. `projects/sfia-studio/53-ops1-ux-ui-decision-pack.md` — A
7. `projects/sfia-studio/README.md` — M

Confirmation : documents `51`–`53` **présents** sur `main` @ `5a595b0`.

## Propagation 41 / 45 / 48 / README (extraits substantiels sur main)

### 41

```
11: | **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; cadrage `41`–`44` **intégré** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1`) — post-merge + cleanup **terminés** ; conception fonctionnelle `45`–`47` **intégrée** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) — post-merge **validé** (2026-07-20 14:29 CEST) ; UX OPS1 `51`–`53` **validés avec réserves** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; POC **maintenu** ; réserves fonctionnelles **inchangées** ; architecture technique, backlog, delivery, live, MVP **fermés** |
12: | **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
22: > Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé). Architecture technique, backlog, delivery, live et MVP **restent fermés**. Aucun cycle suivant ouvert automatiquement.
344: | Conception / archi fct / UX OPS1 | Conception + archi fct + UX **validés avec réserves** — GO distincts déjà consommés pour ces gates |
368: Réserves fonctionnelles **inchangées**. UX OPS1 **validée avec réserves** (`G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST ; UX-R01…UX-R04 ouvertes). Gates architecture technique / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Aucun cycle suivant ouvert automatiquement.
```

### 45

```
10: | **Baseline Git de conception** | `origin/main` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
15: | **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) |
```

### 48

```
18: | **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves**) |
304: - détail UX visuelle = cycle `G-OPS1-UX` **consommé** — docs [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) **validés avec réserves** ; `G-OPS1-UX-VAL` **consommé** (2026-07-20 16:52 CEST) ; réserves UX-R01…UX-R04 maintenues.
329: | UX/UI | Surfaces, Figma, microcopy visuelle | `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (UX-R01…UX-R04) |
376: UX : `G-OPS1-UX` + `G-OPS1-UX-VAL` **consommés** — docs `51`–`53` **validés avec réserves** (2026-07-20 16:52 CEST) ; réserves UX-R01…UX-R04 maintenues. Architecture technique (`G-OPS1-TECH-ARCH`), backlog, delivery, live et MVP : **fermés** — aucun cycle suivant ouvert automatiquement.
```

### README

```
7: | **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; conception / live / backlog / delivery / MVP / production **fermés** |
146:   → cadrage Vertical Slice Opérationnel 1 ← **VALIDATED WITH RESERVATIONS** (docs `41`–`44` ; `G-OPS1-FRAMING-VAL`) — conversation réelle libre + action Markdown gouvernée ; **intégré** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1` ; post-merge + cleanup **terminés**
373: 3. Réserves OPS1 maintenues (FD-CAND-13/15/20/26 · FinOps · Campus360 · live · CI · isolation · UX-R01…UX-R04).
375: **Verdict documentaire courant :** `SFIA STUDIO OPS1 FRAMING / DESIGN / ARCH / UX VALIDATED WITH RESERVATIONS`
387: | Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** ; **intégrés** sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` ; cleanup branche effectué |
388: | Conception / archi OPS1 | Docs `45`–`50` — **VALIDATED WITH RESERVATIONS** ; intégrés (PR #237 / #239) |
389: | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
430: | [45](./45-ops1-functional-design.md)–[47](./47-ops1-functional-decision-pack.md) | Conception fonctionnelle — **VALIDATED WITH RESERVATIONS** |
431: | [48](./48-ops1-functional-architecture.md)–[50](./50-ops1-functional-architecture-decision-pack.md) | Architecture fonctionnelle — **VALIDATED WITH RESERVATIONS** |
433: ### UX/UI OPS1 (validés avec réserves — `G-OPS1-UX-VAL` consommé)
437: | [51-ops1-ux-ui-contract.md](./51-ops1-ux-ui-contract.md) | Contrat UX/UI — **VALIDATED WITH RESERVATIONS** |
439: | [53-ops1-ux-ui-decision-pack.md](./53-ops1-ux-ui-decision-pack.md) | `OPS1-UX-CAND-01`…`20` — **VALIDATED WITH RESERVATIONS** ; UX-R01…UX-R04 ouvertes |
441: *SFIA Studio — POC maintenu — A–E CLOSED_WITH_RESERVATIONS — OPS1 framing/design/arch/UX VALIDATED WITH RESERVATIONS — MVP / delivery non ouverts.*
```

## Statut des documents sur main

| Doc | Statut |
|-----|--------|
| 51 | `ux-ui-validated-with-reservations` |
| 52 | `visual-contract-validated-with-reservations` |
| 53 | `ux-decisions-validated-with-reservations` · **20** décisions |

## Décisions OPS1-UX-CAND-01…20

- Exactement **20** en-têtes `## OPS1-UX-CAND-`
- Exactement **20** lignes `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST`
- Identifiants historiques `OPS1-UX-CAND-*` **conservés**
- Décision Morris : `GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST`

## Gate

`G-OPS1-UX-VAL` **consommé**.

Gates fermés : SCENARIO-VAL · TECH-ARCH · BACKLOG · delivery · live · MVP · production.

## Réserves UX

| ID | Contenu |
|----|---------|
| UX-R01 | Tablette/mobile avant implémentation responsive |
| UX-R02 | Microcopies P0 avant delivery |
| UX-R03 | Design system avant industrialisation multi-écrans |
| UX-R04 | Réserves transverses (FD-CAND + FinOps/Campus360/live/CI/isolation) |

## Réserves maintenues

FD-CAND-13 · FD-CAND-15 · FD-CAND-20 · FD-CAND-26 · FinOps · Campus360 · live · CI · isolation.

## Preuves Figma

- fileKey `lrjA1WEyRpL05vKR8k29LO`
- page OPS1 `61:2` — référence desktop validée avec réserves
- gate strip `62:2`
- desktop **1440×1024**
- **Aucune nouvelle vérification MCP** pendant validation documentaire / post-merge
- Tablette/mobile **non produites**
- Design system **non publié**

## Contrôles exécutés

- Intégrité commit squash / parent / message / PR MERGED
- Diff stat + name-status (7 fichiers, +964/−16)
- `git diff --check bfa2cdf..5a595b0` OK
- Présence 51–53 sur main
- Propagation 41/45/48/README
- 20 décisions / IDs CAND
- Gates + réserves
- Anti-claims
- Liens Markdown (références croisées 51–53)
- Pas de secrets / PII détectés dans le périmètre contrôlé

## Résultats des recherches

- Aucun `AWAITING G-OPS1-UX-VAL` actif
- Aucun `G-OPS1-UX-VAL fermé` actif
- Aucun claim interdit positif (READY FOR DELIVERY / PRODUCTION READY / OPS1 PROVEN / MVP DEFINED / responsive implémenté / DS publié / FinOps résolu) — occurrences = garde-fous uniquement

## Anomalies

Aucune.

## Dette restante

UX-R01 · UX-R02 · UX-R03 · réserves transverses (UX-R04 / FD-CAND / FinOps / Campus360 / live / CI / isolation).

## Confirmations post-merge

- Aucune modification documentaire post-merge
- Aucun nouveau commit projet
- Aucun push projet
- Aucune nouvelle PR
- Aucun nouveau merge

## Branche source

`design/sfia-studio-ops1-ux-ui` encore présente localement et à distance @ `2164f754f3ec87c91f196869f0763c59f2a511ab`.

## Cleanup

**En attente d’un GO Morris distinct.** Aucun cleanup réalisé dans ce cycle.

## Prochaine décision Morris

Cleanup de la branche UX et/ou choix explicite du cycle suivant (scénario / tech-arch / backlog / autre).

## Verdict

**OPS1 UX/UI POST-MERGE VALIDATED — CYCLE INTEGRATED ON MAIN**

> Ce verdict **n’ouvre ni architecture technique, ni backlog, ni delivery, ni live, ni MVP, ni production.**
> Il n’autorise **pas** le cleanup de branche sans GO distinct.

## Verdict handoff

**REVIEW HANDOFF REPUBLISHED — OPS1 UX POST-MERGE READY FOR CHATGPT REVIEW**

---

## Annexe A — Document 51 (complet sur main)

# SFIA Studio — Contrat UX/UI OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `51-ops1-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Typologie** | POC / UX / UI / DOC / VALIDATION |
| **Gate d’ouverture** | `G-OPS1-UX` — **consommé** |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `ux-ui-validated-with-reservations` |
| **Companions** | [`52`](./52-ops1-visual-contract-and-figma-spec.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) |
| **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`50`](./50-ops1-functional-architecture-decision-pack.md) |
| **Figma** | fileKey `lrjA1WEyRpL05vKR8k29LO` · page `UX-B — OPS1` (`61:2`) — **référence visuelle desktop validée avec réserves** |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |
| **Code / live / backlog** | **Aucun** |

> Contrat UX/UI OPS1 **validé avec réserves** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Documents `51`–`53` = **baseline UX/UI OPS1** validée avec réserves.
> Page Figma `61:2` = référence visuelle **desktop** validée ; tablette/mobile **non validées** (UX-R01).
> Hérite des décisions validées `41`–`50` **sans les réinterpréter**.
> Dix états storyboard ≠ dix routes. Conversation = espace principal. Chat ≠ GO.
> Réserves UX-R01…UX-R04 et FD-CAND-13/15/20/26 **maintenues**. Aucun cycle suivant ouvert automatiquement.

---

## 1. Objet, portée, utilisateurs et valeur

### Objet

Définir l’expérience utilisateur OPS1 : conversation GPT réelle multi-tours, action Markdown gouvernée (Campus360), gate Morris, harness, exécution Cursor bornée, preuves, post-exécution, clôture et fail-closed — sous forme de surfaces, états, microcopy et règles d’interaction.

### Utilisateurs

| Acteur | Rôle UX |
|--------|---------|
| **Morris** | Décideur exclusif (GO / NO-GO / CORRIGER / ABANDONNER / STOP / CLOSE) |
| **GPT** | Interlocuteur conversationnel ; propositions **candidates** uniquement |
| **Harness** | Revalidation indépendante — états visibles, non décidants |
| **Cursor** | Exécuteur borné — feedback de progression / STOP |

### Valeur

Rendre **visible et non ambiguë** la séparation conversation / action / autorisation, afin qu’aucune formulation ni bouton ne laisse croire qu’un message GPT vaut GO.

### Portée / non-objectifs

**In :** surfaces, zoning, parcours, a11y, responsive, FinOps surfaces (sans chiffres), microcopy, critères de validation UX, traçabilité CAP/FLOW/FR.

**Out :** code, stack, API, backlog, delivery, live, architecture technique, résolution des réserves FD-CAND-13/15/20/26, claim MVP / production / OPS1 PROVEN.

---

## 2. Héritages validés (41–50) — non réinterprétables

1. Conversation réelle, libre, contextuelle, multi-tours.
2. Chat ≠ formulaire ; chat ≠ GO.
3. Action facultative et séparée (`ProposedAction`).
4. Morris seul autorise action, STOP et clôture.
5. Harness obligatoire avant exécution.
6. Cursor strictement borné (contrat + allowlist).
7. Git = vérité (HEAD, fichiers, diffs) ; store = journal.
8. Campus360 = contexte exclusif du pilote ; éligible ≠ autorisation globale.
9. Allowlist exhaustive 1..n ; extension post-GO = nouveau gate.
10. Rapport incomplet = fail-closed.
11. Conversation post-exécution obligatoire.
12. Analyse GPT = `candidateOnly`.
13. CLOSED immuable ; consultation lecture seule ; pas de mutation silencieuse.
14. FinOps numériques, cartographie Campus360, branche, live, CI, isolation = **OPEN**.

---

## 3. Principes UX OPS1

1. **Conversation-first** — le fil est l’espace principal.
2. **Séparation visuelle stricte** — conversation ≠ panneau d’action ≠ gate.
3. **Autorité visible** — seules les surfaces Morris portent GO / STOP / CLOSE.
4. **Allowlist lisible avant GO** — chemins + modes (consult/create/modify).
5. **Fail-closed lisible** — erreurs, timeouts, refus harness non masqués.
6. **États ≠ routes** — storyboard dense, navigation applicative sobre (≤4 vues P0).
7. **Copilote ≠ décision** — suggestions advisory seulement (héritage shell P0).
8. **Réserves affichables** — jamais résolues silencieusement dans l’UI.
9. **Anti-claims** — aucun wording MVP / production / READY FOR DELIVERY / OPS1 PROVEN.
10. **Accessibilité** — statut non uniquement par couleur ; focus visible ; annonces d’état.

---

## 4. Architecture de l’information

```text
Shell (rail · topbar · copilote advisory)
  └─ Workspace OPS1
       ├─ Conversation Workspace          (principal)
       ├─ Context / Sources Git
       ├─ Action candidate + Allowlist    (séparé)
       ├─ Gate Morris                     (séparé)
       ├─ Harness / Exécution / STOP
       ├─ Rapport · preuves · diffs
       ├─ Post-exécution + AnalysisCandidate
       ├─ Décision finale / CLOSE
       └─ FinOps strip · erreurs · historique
```

**Règle :** dix états fonctionnels ne créent **pas** dix routes. Mapping candidat vers vues P0 :

| Vue applicative P0 | États OPS1-UX couverts |
|--------------------|------------------------|
| Session / Conversation | 01, 02, 03, 04, VAR-A/E/F/G |
| Gate / Décision | 05, 09, VAR-D |
| Cycle actif | 06, 07, 08, VAR-B/C |
| Synthèse / clôture | 10, VAR-F |

---

## 5. Carte des surfaces

| Surface | Finalité | Interdit |
|---------|----------|----------|
| Conversation | Fil multi-tours Morris/GPT/système | Porter un GO |
| Sources Git | Sélection/visibilité des refs explicites | Ingest dépôt entier silencieux |
| Action candidate | `ProposedAction` structuré | Autoriser exécution |
| Allowlist | Liste exhaustive 1..n | « Tout Campus360 » |
| Gate Morris | 4 actions + motif + ancrages | GO implicite |
| Harness | État revalidation | Contournement UX |
| Exécution | Progression Cursor + STOP | Étendre allowlist |
| Rapport / diffs | Consolidé + par fichier | Clôturer si incomplet |
| Post-exec | Conversation obligatoire | Auto-CLOSE |
| AnalysisCandidate | Badge candidat | Décision automatique |
| CLOSED | Lecture seule | Mutation silencieuse |
| FinOps | Compteurs / alerte / confirm | Montants inventés |
| STOP / erreur | Fail-closed | Assimiler à Abandonner |

---

## 6. Parcours nominal — conversation sans action

1. Ouverture / reprise session (FLOW-01/02).
2. Fil réel multi-tours (FLOW-03/04).
3. Clarifications sans `ProposedAction`.
4. Option `ACTION_NOT_REQUIRED` explicite (CAP-07) — **OPS1-UX-02**.
5. Poursuite conversationnelle ou CLOSE sans exécution.

---

## 7. Conversation → action candidate

1. Besoin clarifié.
2. Apparition panneau **Action candidate — NON AUTORISÉE** (séparé du chat).
3. Sources Git visibles.
4. Allowlist exhaustive proposée (placeholder chemins si SCENARIO-VAL OPEN).
5. Aucun CTA d’exécution dans le fil.

**Frame :** OPS1-UX-03 (`61:275`).

---

## 8–9. Raffinement action

| Mode | Surface | Frame |
|------|---------|-------|
| Par chat | Messages qui **mettent à jour** l’objet action (sans GO) | OPS1-UX-04 |
| Par surface structurée | Édition champs / allowlist / intention | OPS1-UX-04 |

Toute modification d’allowlist **avant** GO reste dans le raffinement. Après GO : nouvel objet + nouveau gate (FR-030).

---

## 10. Gate Morris

Surface indépendante — **OPS1-UX-05** (`61:411`) + strip 4 actions (`62:2`).

| Action | Effet UX | ≠ |
|--------|----------|---|
| **GO** | Autorise exécution du contrat ancré | Message GPT |
| **NO-GO** | Refuse sans exécuter | STOP |
| **CORRIGER** | Renvoie au raffinement | Abandonner |
| **ABANDONNER** | Clôt sans exécution | NO-GO / STOP |
| **STOP** | Interrompt activité en cours (toujours accessible si pertinent) | Abandonner |

Ancrages visibles avant GO : HEAD, hash contrat, allowlist gelée, motif.

---

## 11. Revalidation harness

État dédié ou bandeau sur cycle actif : `VALIDATING` / `REFUSED` / `OK`.
Refus = fail-closed visible (VAR-B). Pas de retry automatique.

---

## 12. Exécution Cursor et feedback

**OPS1-UX-06** : progression, fichiers touchés (allowlist), **STOP** dominant.
Timeout ≠ GO. Pas d’extension d’allowlist en cours.

---

## 13. Rapport, preuves et diffs multi-fichiers

**OPS1-UX-07** : vue consolidée + détail par fichier ; preuves Git (diffs) ; incomplet = blocage clôture.

---

## 14. Conversation post-exécution

**OPS1-UX-08** : fil obligatoire après exécution (FR-019) ; rapport accessible à côté ; AnalysisCandidate badge `candidat`.

---

## 15. Analyse candidate et décision finale

**OPS1-UX-09** : CLOSE / CORRECT / RELAUNCH / ABANDON (selon FR) ; résumé + réserves listées ; pas d’auto-CLOSE.

---

## 16. CLOSE, lecture seule et continuation candidate

**OPS1-UX-10** : session CLOSED immuable ; consultation OK.
**Continuation** : CTA candidat « Continuer / session liée » en **placeholder** (FD-CAND-13 OPEN) — **ne résout pas** le mécanisme.

---

## 17. Historique et reprise

Reprise = restauration journal + cohérence Git ; ambiguïté → read-only / STOP (VAR-F).
Historique reconstructible (CAP-21) — pas seconde vérité Git.

---

## 18. FinOps UX

Surfaces candidates uniquement (VAR-A / VAR-E) :

- compteurs conversation / structuration / analyse ;
- alerte de seuil ;
- confirmation avant coût élevé ;
- budget restant ;
- état **« valeur numérique À définir »** (FD-CAND-15).

**Aucun** montant, modèle, plafond ou seuil chiffré inventé.

---

## 19. Erreurs, timeouts et fail-closed

| Situation | UX |
|-----------|-----|
| Harness refuse | Bandeau FAIL-CLOSED ; pas d’exécution |
| Rapport incomplet | Blocage CLOSE |
| Timeout | Message explicite ; ≠ GO ; pas de retry auto |
| Hors allowlist | Alerte PN-06 ; pas de GO possible |
| STOP | Prioritaire, accessible |

Frames : VAR-B, VAR-C, VAR-D, VAR-G.

---

## 20. Accessibilité

- Navigation clavier complète des panneaux et CTA.
- Ordre de focus : topbar → conversation → action → gate → STOP.
- Focus visible (anneau contrasté).
- Annonces d’état (OPEN, EXECUTING, STOPPED, FAILED, CLOSED).
- Auteurs et statuts **texte + couleur** (pas couleur seule).
- Contraste cible AA sur CTA critiques et STOP.
- Diffs lisibles (scroll, monospaced, labels fichier).
- Drawers/panneaux : Esc ferme sans déclencher GO.
- Distinction chat / action / gate renforcée par labels et régions.

---

## 21. Responsive

| Breakpoint | Comportement candidat |
|------------|----------------------|
| Desktop 1440×1024 | Shell 3 colonnes (rail · workspace · copilote) — **référence storyboard** |
| Tablette ~1024 | Copilote en drawer ; action/gate en panneaux empilés |
| Mobile ~390 | Conversation full-bleed ; action/gate = bottom sheets ; STOP sticky |

Aucune implémentation code dans ce cycle.

---

## 22. Microcopy candidate (extrait)

| Contexte | Formulation |
|----------|-------------|
| Fil | « Fil réel multi-tours — chat ≠ GO » |
| Action | « Action candidate — NON AUTORISÉE » |
| Allowlist | « Allowlist exhaustive (1..n) — éligible ≠ autorisation globale » |
| Gate | « GO — Autoriser exécution bornée » |
| STOP | « STOP — Interrompre l’activité en cours » |
| FinOps | « Valeurs numériques À définir » |
| Candidat | Badge « candidat » sur analyse / verdict |
| CLOSED | « Lecture seule — aucune mutation silencieuse » |
| Continuation | « Continuer (mécanisme OPEN — FD-CAND-13) » |

Interdit : « GPT a validé », « Lancer » dans le fil, « Tout Campus360 autorisé », montants inventés.

---

## 23. États vides / loading / erreur / indispo

| État | Affichage |
|------|-----------|
| Vide conversation | Prompt d’ouverture + sources non sélectionnées |
| Loading GPT | Indicateur génération ; compteur FinOps si actif |
| Loading harness | « Revalidation indépendante… » |
| Exec Cursor | Progression + STOP |
| Erreur / FAILED | Bandeau fail-closed |
| Indispo Git / GPT | Message + session read-only / STOP |

---

## 24. Traçabilité CAP / FLOW / FR / composants

| UX | CAP | FLOW | FR | Composants |
|----|-----|------|----|------------|
| Conversation | 03–05 | 03–05 | 001–003 | Conversation Workspace |
| Sources | 06 | 05 | 014,021 | Context Selector · Git Truth |
| Action / allowlist | 07–09 | 06–09 | 022,026–032 | Action Proposal Manager |
| Gate | 10–11 | 10–13 | 004,008 | Morris Gate Manager |
| Harness / exec | 12–14 | 14–18 | 005,025 | Harness · Contract · Cursor |
| Rapport | 15–16 | 20 | 015–017,031 | Evidence Collector |
| Post-exec | 17–18 | 21,23 | 019–020 | CW · Gate |
| CLOSE / reprise | 19–21 | 02,24 | 006 | Session Manager · Audit |
| FinOps | — | 29 | 023 | FinOps Guard |
| STOP / erreurs | 12 | 18,27 | 016 | Error/STOP Coordinator |

---

## 25. Critères de validation UX (`G-OPS1-UX-VAL`) — **satisfaits avec réserves**

Confirmés sous validation Morris (2026-07-20 16:52 CEST) — sous réserves UX-R01…UX-R04 :

1. Séparation visuelle conversation / action / gate vérifiable sur frames.
2. Quatre actions Morris + STOP distincts.
3. Allowlist exhaustive visible avant GO.
4. Chat ne porte aucun CTA d’exécution ambigu.
5. Post-exécution conversationnelle présente.
6. CLOSED lecture seule ; continuation = placeholder réserve.
7. FinOps sans chiffres inventés.
8. Frames + dimensions confirmées MCP.
9. A11y / responsive documentés.
10. Réserves listées ; anti-claims respectés.
11. Aucun code / backlog / tech arch introduit.
12. Décisions `OPS1-UX-CAND-01…20` **VALIDATED WITH RESERVATIONS** (doc 53).

---

## 26. Réserves maintenues (affichables)

### Réserves UX (`UX-R*`) — ouvertes sous validation

| ID | Réserve |
|----|---------|
| **UX-R01** | Produire les déclinaisons tablette/mobile avant toute implémentation responsive |
| **UX-R02** | Nettoyer les microcopies héritées de P0 avant delivery |
| **UX-R03** | Formaliser le design system avant industrialisation multi-écrans |
| **UX-R04** | Maintenir ouvertes FD-CAND-13/15/20/26 ainsi que FinOps, Campus360, live, CI et isolation |

### Réserves héritées (FD / transverses)

- Continuation après CLOSE (FD-CAND-13).
- FinOps numériques (FD-CAND-15).
- Cartographie / catégories Campus360 (FD-CAND-20).
- Détails opérationnels Campus360 (FD-CAND-26).
- Convention de branche scénario.
- Preuves GPT / Cursor live ; CI distante ; isolation OS/réseau.

---

## 27. Anti-claims

Ce document **n’affirme pas** : READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · responsive implémenté · design system publié · FinOps résolu · Campus360 entièrement autorisé · live / CI / isolation validés · backlog ouvert · architecture technique ouverte ou validée · autorisation d’implémentation code.

La validation UX/UI **ne vaut pas** validation technique, live, MVP ou production.

---

## 28. Verdict

`ux-ui-validated-with-reservations`

`SFIA STUDIO OPS1 UX/UI VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-UX` consommé. Gate `G-OPS1-UX-VAL` **consommé** — Morris — 2026-07-20 16:52 CEST — **GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES**.
Baseline UX/UI OPS1 : docs `51`–`53` + page Figma `61:2` (desktop). Réserves UX-R01…UX-R04 ouvertes. Aucun cycle suivant ouvert automatiquement.


---

## Annexe B — Document 52 (complet sur main)

# SFIA Studio — Contrat visuel et spécification Figma OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `52-ops1-visual-contract-and-figma-spec.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-UX` — consommé |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `visual-contract-validated-with-reservations` |
| **Companion** | [`51`](./51-ops1-ux-ui-contract.md) · [`53`](./53-ops1-ux-ui-decision-pack.md) |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |

> Contrat visuel **validé avec réserves** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Page `UX-B — OPS1` (`61:2`) = **référence visuelle desktop** validée (périmètre 1440×1024).
> Preuves Figma = celles du cycle source / handoff `08f5ddf…` — **pas** de nouvelle vérification MCP dans ce cycle de validation documentaire.
> Tablette/mobile **non produites** (UX-R01). Design system **non publié** (UX-R03). Microcopies P0 = dette (UX-R02).
> Aucune implémentation code autorisée ou impliquée.

---

## 1. Fichier Figma

| Champ | Valeur |
|-------|--------|
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **URL** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| **Page OPS1** | `UX-B — OPS1` — node `61:2` — **référence desktop validée avec réserves** |
| **Page source héritée** | `UX-B — P0` — node `0:1` |
| **Page historique observée** | `UX-B — POC Vertical Slice` — node `51:2` (**vide** au moment du cycle ; frames VS absentes) |
| **Accès MCP** | Authentifié (Full seat) — lecture/écriture OK |

**Ambiguïté fichier :** aucune — un seul fileKey canonique dans Git (`14`/`16`/`35`–`37`).

---

## 2. Sources et design system consultés

| Source | Statut |
|--------|--------|
| Frames P0 `19:2`, `22:2`, `22:133`, `22:270` | **Héritées** comme shell Product premium (clones) |
| `search_design_system` (button/badge/color) | **Vide** — pas de librairie publiée exposée |
| Code Connect `*.figma.*` sous `projects/sfia-studio` | **Absent** |
| Tokens documentés dans `35` | Observés (Inter, blue `#3863f5`, purple `#7a4df5`, etc.) |
| VS-UX frames historiques | **Observées via docs seulement** — page Figma vide |

**Posture :** réutilisation par **clone du shell P0** + overlays OPS1 (action, allowlist, gate 4 actions, FinOps placeholders). Pas de nouveaux composants library tant que DS publié absent.

---

## 3. Frames prévues — inventaire confirmé

Toutes dimensions **1440 × 1024** confirmées MCP (`use_figma` inventory 2026-07-20).

### 3.1 Frames principales (desktop — **validées avec réserves**)

| Nom | Node ID | Finalité | État fonctionnel | FLOW/CAP |
|-----|---------|----------|------------------|----------|
| OPS1-UX-01 — Session ouverte / Conversation active | `61:3` | Fil réel multi-tours | OPEN + CONVERSATION | FLOW-01/03/04 · CAP-03–05 |
| OPS1-UX-02 — Conversation sans action | `61:139` | ACTION_NOT_REQUIRED | Sans exécution | FLOW-03 · CAP-07 |
| OPS1-UX-03 — Action candidate + allowlist | `61:275` | ProposedAction + allowlist 1..n | ACTION_PROPOSED | FLOW-06–09 · FR-026–032 |
| OPS1-UX-04 — Raffinement action | `61:1207` | Chat + structuré | ACTION_REFINING | FLOW-07/08 |
| OPS1-UX-05 — Gate Morris (4 actions) | `61:411` | GO/NO-GO/CORRIGER/ABANDONNER | GATE | FLOW-10–13 · strip `62:2` |
| OPS1-UX-06 — Exécution Cursor + STOP | `61:536` | Progression + STOP | EXECUTING | FLOW-14/18 |
| OPS1-UX-07 — Rapport et diffs multi-fichiers | `61:674` | Preuves consolidées + par fichier | REPORT | FLOW-20 · FR-031 |
| OPS1-UX-08 — Conversation post-exécution | `61:812` | Fil post-exec + candidat | POST_EXEC | FLOW-21/23 · FR-019 |
| OPS1-UX-09 — Décision finale Morris | `61:950` | CLOSE / options finales | DECISION | FLOW-24–26 |
| OPS1-UX-10 — Session CLOSED lecture seule | `61:1075` | Immutabilité + réserves | CLOSED | FLOW-24 · FD-CAND-13 placeholder |

### 3.2 Variantes (desktop — **validées avec réserves**)

| Nom | Node ID | Situation |
|-----|---------|-----------|
| OPS1-UX-VAR-A | `61:1343` | Loading / FinOps À définir |
| OPS1-UX-VAR-B | `61:1479` | Fail-closed / rapport incomplet |
| OPS1-UX-VAR-C | `61:1617` | STOP prioritaire |
| OPS1-UX-VAR-D | `61:1755` | GO invalide / dérive allowlist |
| OPS1-UX-VAR-E | `61:1880` | Confirmation FinOps (seuils OPEN) |
| OPS1-UX-VAR-F | `61:2016` | Reprise / CLOSED read-only |
| OPS1-UX-VAR-G | `61:2148` | Hors allowlist / sans GO |

### 3.3 Dimensions autres breakpoints

| Breakpoint | Statut |
|------------|--------|
| Desktop 1440×1024 | **Confirmé** et **validé** (périmètre desktop) sur les 17 frames |
| Tablette / mobile | Documentés dans doc 51 §21 — **frames non produites** — **UX-R01** (non validé pour implémentation responsive) |

---

## 4. Grille, marges, auto-layout

| Règle | Valeur (héritage P0 + overlays) |
|-------|----------------------------------|
| Frame | 1440 × 1024 |
| Rail | ~64 px |
| Workspace | ~968 px |
| Copilote | ~334 px |
| Spacings | 8 / 12 / 16 / 20 / 24 / 28 |
| Rayons | 12 / 16 / 20 / 24 |
| Overlays OPS1 | Auto-layout VERTICAL/HORIZONTAL (`createAutoLayout`) pour panneaux action/allowlist/gate/FinOps |

**Note :** frames shell clonées restent en layout `NONE` (héritage P0) ; nouveaux panneaux OPS1 en auto-layout.

---

## 5. Typographie

| Rôle | Famille | Styles observés |
|------|---------|-----------------|
| App | **Inter** | Bold, Semi Bold, Medium, Regular |
| Eyebrow | Inter Bold ~11–12 | `SFIA STUDIO` |
| Titres workspace | Inter Bold | titres OPS1 |
| Body | Inter Medium/Regular 11–16 | panneaux, fil |

---

## 6. Tokens / styles réutilisés

| Token / couleur | Usage |
|-----------------|-------|
| Fond `#f6f9ff` / blanc | Shell |
| Ink `#141c30` | Texte |
| Blue `#3863f5` | Accent / action |
| Purple `#7a4df5` | Allowlist / copilote |
| Green `#21c28a` | GO / succès |
| Orange `#faa629` | CORRIGER / warning |
| Pink `#f25794` | STOP / ABANDONNER / fail-closed |

Variables Figma publiées : **non trouvées** via MCP search — couleurs appliquées en fills locaux (comme P0).

---

## 7. Hiérarchie visuelle

1. Topbar session + badges d’état.
2. Conversation (principal) ou gate (quand décision requise).
3. Panneaux action / allowlist (secondaires, séparés).
4. Copilote advisory (ne décide pas).
5. STOP / fail-closed (priorité visuelle élevée).

---

## 8. Zoning

| Zone | Présence frames |
|------|-----------------|
| Navigation / session | Rail + topbar — toutes |
| Conversation | 01–04, 08 |
| Contexte / sources | 01, 03 |
| Action candidate | 03, 04, overlays |
| Gate | 05 + strip `62:2` |
| Exécution | 06 |
| Rapport / diff | 07 |
| Historique / CLOSED | 10, VAR-F |
| FinOps | VAR-A, VAR-E |
| Erreurs / STOP | VAR-B/C/D/G, 06 |

---

## 9. Composants et variantes

| Élément | Nature |
|---------|--------|
| Shell P0 | Clone — continuity Product premium |
| Action candidate panel | Overlay AL créé (`61:2297` famille) |
| Allowlist panel | Overlay AL |
| Gate Actions Strip | `62:2` — 4 cartes GO/NO-GO/CORRIGER/ABANDONNER |
| FinOps / fail-closed banners | Overlays candidats |

Pas de `COMPONENT_SET` library OPS1 créé (évite dette DS sans publication).

---

## 10. États interactifs (contrat)

default · hover · focus · active · disabled · loading · error · success · warning · read-only · STOPPED · FAILED — à appliquer en delivery ; storyboard montre surtout **default / loading / error / STOP / read-only**.

---

## 11. Responsive

Voir doc 51 §21. Frames desktop uniquement ce cycle.

---

## 12. Accessibilité visuelle

- Labels textuels sur badges d’état.
- STOP et fail-closed contrastés (fond sombre / rose).
- Gate : quatre actions libellées + sous-texte « ≠ message GPT ».
- Focus : à implémenter en code ; contrat exige anneau visible.

---

## 13. Microcopy structurante (visuelle)

Reprise doc 51 §22. Corrections anti-GO appliquées sur UX-01 (`Continuer la conversation (≠ GO)`).

**Dette visuelle notée :** certains libellés P0 hérités (hero « Qualification », copilote Nora, stepper A–E) restent visibles sur clones — **observés**, à purger sous polish Morris / correctif UX optionnel. Ils ne constituent **pas** des décisions OPS1 validées.

---

## 14. Captures produites

| Fichier local | Cible | Node |
|---------------|-------|------|
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-01.png` | Conversation | `61:3` |
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-03.png` | Action + allowlist | `61:275` |
| `.tmp-sfia-review/figma-ops1-ux/ops1-ux-05.png` | Gate (avant strip final — revoir) | `61:411` |

Captures MCP supplémentaires recommandées en revue Morris pour 06–10 et VAR-*.

---

## 15. Écarts et réserves

| Écart | Traitement / réserve |
|-------|----------------------|
| Page VS vide | Documenté — pas de baseline VS importée |
| DS publié vide | Clone P0 + overlays — **UX-R03** |
| Frames tablette/mobile absentes | **UX-R01** — avant implémentation responsive |
| Résidus microcopy P0 | **UX-R02** — avant delivery |
| FD-CAND-* / FinOps / Campus360 / live / CI / isolation | **UX-R04** — maintenues OPEN |
| FinOps chiffres | « À définir » — non résolu |

---

## 16. Validation Morris

`G-OPS1-UX-VAL` **consommé** — Morris — 2026-07-20 16:52 CEST — **GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES**.

Validés dans le périmètre desktop :

- docs 51–53 ;
- page `61:2` et frames / variantes listées ;
- dimensions 1440×1024 (preuves cycle source) ;
- gate strip `62:2` ;
- captures héritées du handoff.

Non validés : tablette/mobile · DS publié · microcopy P0 nettoyée · réserves FD/live/CI/isolation.

**Verdict :** `visual-contract-validated-with-reservations`


---

## Annexe C — Document 53 (complet sur main)

# SFIA Studio — Decision pack UX/UI OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `53-ops1-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Gate d’ouverture** | `G-OPS1-UX` — consommé |
| **Gate de validation** | `G-OPS1-UX-VAL` — **consommé** — Morris — 2026-07-20 16:52 CEST — **VALIDATION AVEC RÉSERVES** |
| **Baseline Git** | `origin/main` @ `bfa2cdf949f417fcbce47d1687824c223eeed8f7` |
| **Branche** | `design/sfia-studio-ops1-ux-ui` |
| **Statut** | `ux-decisions-validated-with-reservations` |
| **Companions** | [`51`](./51-ops1-ux-ui-contract.md) · [`52`](./52-ops1-visual-contract-and-figma-spec.md) |
| **Horodatage production** | 2026-07-20 16:15 CEST |
| **Horodatage validation Morris** | 2026-07-20 16:52 CEST |

> Décisions `OPS1-UX-CAND-01`…`20` **VALIDATED WITH RESERVATIONS** sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
> Identifiants `OPS1-UX-CAND-*` **conservés** (suffixe historique stable).
> Réserves UX-R01…UX-R04 et FD-CAND-13/15/20/26 **ouvertes**. Aucun cycle suivant ouvert automatiquement.

---

## Convention

Chaque décision : observation · héritage · hypothèse · options · recommandation · décision candidate · impacts · risques · dette · réserves · sujets routés · décision Morris · statut.

---

## OPS1-UX-CAND-01 — Architecture générale de l’espace OPS1

| Champ | Contenu |
|-------|---------|
| **Observation** | OPS1 exige conversation + action + gate + preuves dans un shell gouverné. |
| **Héritage** | FA-CAND-16/19 ; shell P0 validé historiquement |
| **Hypothèse** | Continuité Product premium réduit la dette cognitive. |
| **Options** | (A) Shell neuf ; (B) Shell P0 + zoning OPS1 |
| **Recommandation** | (B) |
| **Décision candidate** | Espace OPS1 = shell P0 (rail/topbar/workspace/copilote) + zones OPS1. |
| **Impacts** | Frames clonées ; copilote advisory |
| **Risques** | Résidus microcopy P0 |
| **Dette** | Polish libellés hérités |
| **Réserves** | — |
| **Routé** | Delivery UI ultérieur |
| **Morris attendu** | Valider continuité shell |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-02 — Conversation comme surface principale

| Champ | Contenu |
|-------|---------|
| **Observation** | Framing : conversation-first, pas formulaire. |
| **Héritage** | OPS1-CAND conversation ; CAP-03–05 |
| **Options** | (A) Formulaire dominant ; (B) Fil dominant |
| **Recommandation** | (B) |
| **Décision candidate** | Le fil conversationnel occupe l’espace principal. |
| **Impacts** | Abandon UX « Nouvelle demande » comme cible OPS1 |
| **Risques** | Friction vs P0 form |
| **Dette** | Purge hero qualification |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-03 — Action séparée du dialogue

| Champ | Contenu |
|-------|---------|
| **Observation** | Chat ≠ GO ; ProposedAction objet distinct. |
| **Héritage** | FR-003 ; FA-CAND-03 |
| **Options** | (A) Action dans bulles ; (B) Panneau séparé |
| **Recommandation** | (B) |
| **Décision candidate** | Panneau « Action candidate — NON AUTORISÉE » séparé. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-04 — Présentation de l’allowlist

| Champ | Contenu |
|-------|---------|
| **Observation** | Allowlist exhaustive 1..n ; éligible ≠ global. |
| **Héritage** | FR-026–032 ; FD-CAND-20/26 OPEN |
| **Options** | (A) Résumé flou ; (B) Liste chemins + modes |
| **Recommandation** | (B) avec placeholders si chemins OPEN |
| **Décision candidate** | Allowlist lisible avant GO ; modes CONSULT/CREATE/MODIFY. |
| **Réserves** | Chemins exacts SCENARIO-VAL |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-05 — Positionnement du gate Morris

| Champ | Contenu |
|-------|---------|
| **Observation** | Quatre actions explicites requises. |
| **Héritage** | VS-UX-04 pattern ; FR-004 |
| **Options** | (A) Modale seule ; (B) Vue gate dédiée + strip |
| **Recommandation** | (B) |
| **Décision candidate** | Gate séparé ; strip GO / NO-GO / CORRIGER / ABANDONNER (`62:2`). |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-06 — Mécanisme de correction de l’action

| Champ | Contenu |
|-------|---------|
| **Observation** | CORRIGER et raffinement chat/structuré. |
| **Héritage** | FLOW-07/08 |
| **Décision candidate** | Raffinement via chat et/ou panneau (UX-04) ; CORRIGER ramène ici. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-07 — Visualisation harness et Cursor

| Champ | Contenu |
|-------|---------|
| **Observation** | Harness fail-closed ; Cursor borné. |
| **Décision candidate** | États VALIDATING/REFUSED/EXECUTING visibles ; STOP sur exec. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-08 — Rapport et diff multi-fichiers

| Champ | Contenu |
|-------|---------|
| **Héritage** | FR-031 ; CAP-15–16 |
| **Décision candidate** | Vue consolidée + détail par fichier ; incomplet bloque CLOSE. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-09 — STOP

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | STOP toujours distinct et accessible ; ≠ ABANDONNER / NO-GO. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-10 — Erreurs et fail-closed

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Bandeaux FAIL-CLOSED non masqués (VAR-B/D/G) ; timeout ≠ GO. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-11 — Historique et reprise

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Reprise = restauration journal + check Git ; ambiguïté → read-only/STOP. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-12 — CLOSED lecture seule

| Champ | Contenu |
|-------|---------|
| **Héritage** | CLOSED immutable |
| **Décision candidate** | UX-10 lecture seule ; pas d’édition silencieuse. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-13 — Continuation après CLOSE (option candidate)

| Champ | Contenu |
|-------|---------|
| **Observation** | FD-CAND-13 OPEN. |
| **Options** | (A) Résoudre mécanisme ; (B) Placeholder UX |
| **Recommandation** | (B) |
| **Décision candidate** | CTA « Continuer / session liée » **candidat** sans figer le mécanisme. |
| **Réserves** | **FD-CAND-13** |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-14 — FinOps

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Surfaces compteurs / alerte / confirmation ; chiffres = « À définir ». |
| **Réserves** | **FD-CAND-15** |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-15 — Responsive

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Desktop 1440×1024 storyboard ; tablette/mobile = règles doc 51, frames ultérieures. |
| **Dette** | Frames non desktop |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-16 — Accessibilité

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Clavier, focus, annonces, non-couleur-seule, contrastes AA cibles — contrat 51 §20. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-17 — Design system et composants réutilisés

| Champ | Contenu |
|-------|---------|
| **Observation** | `search_design_system` vide ; pas de Code Connect. |
| **Décision candidate** | Réutiliser shell P0 par clone ; overlays AL locaux ; pas de nouvelle library publiée ce cycle. |
| **Dette** | Publication DS / tokens variables |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-18 — Liste et dimensions des frames

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | 10 frames + 7 variantes @ **1440×1024** confirmées MCP — inventaire doc 52. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-19 — États ≠ routes

| Champ | Contenu |
|-------|---------|
| **Héritage** | VS-UX-CAND-02 |
| **Décision candidate** | Storyboard ≠ routes ; mapping ≤4 vues P0. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

## OPS1-UX-CAND-20 — Verdict UX

| Champ | Contenu |
|-------|---------|
| **Décision candidate** | Contrats 51–52 + frames validés avec réserves sous `G-OPS1-UX-VAL`. |
| **Morris attendu** | _(consommé)_ Valider / corriger / rejeter — sans ouvrir backlog/tech/delivery. |
| **Décision Morris** | GO G-OPS1-UX-VAL — VALIDATION AVEC RÉSERVES — 2026-07-20 16:52 CEST |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL — Morris — 2026-07-20 16:52 CEST` |

---

## Synthèse des statuts

| ID | Statut |
|----|--------|
| OPS1-UX-CAND-01…20 | **VALIDATED WITH RESERVATIONS — G-OPS1-UX-VAL** |

- **20** décisions validées avec réserves.
- **Aucune** décision UX candidate restante dans ce pack.
- `G-OPS1-UX-VAL` **consommé**.
- Réserves **UX-R01…UX-R04** ouvertes.
- Aucune ouverture automatique des cycles suivants.

### Association réserves (indicatif)

| Décisions | Réserves associées |
|-----------|-------------------|
| UX-CAND-15 (responsive) | UX-R01 |
| UX-CAND-01/17 (shell / DS) | UX-R02, UX-R03 |
| UX-CAND-13/14 (CLOSE / FinOps) | UX-R04 · FD-CAND-13/15 |
| UX-CAND-04 (allowlist / Campus360) | UX-R04 · FD-CAND-20/26 |
| Ensemble | UX-R04 (live, CI, isolation) |

---

## Gates

| Gate | État |
|------|------|
| `G-OPS1-UX` | Consommé (ouverture) |
| `G-OPS1-UX-VAL` | **Consommé** — Morris — 2026-07-20 16:52 CEST |
| `G-OPS1-SCENARIO-VAL` | Fermé |
| `G-OPS1-TECH-ARCH` | Fermé |
| `G-OPS1-BACKLOG` | Fermé |
| Delivery / live / MVP / production | Fermés |
| Commit / push / PR / merge | Fermés (jusqu’à GO distinct) |

---

## Réserves maintenues

**UX-R01…UX-R04** · FD-CAND-13/15/20/26 · FinOps numériques · cartographie Campus360 · branche · live · CI · isolation.

---

## Anti-claims

Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · responsive implémenté · design system publié · FinOps/Campus360/live/CI/isolation résolus · backlog ou tech arch ouverts.

---

## Verdict

`ux-decisions-validated-with-reservations`

`SFIA STUDIO OPS1 UX/UI DECISIONS VALIDATED WITH RESERVATIONS`

20 décisions `OPS1-UX-CAND-01…20` validées avec réserves sous `G-OPS1-UX-VAL` (2026-07-20 16:52 CEST).
