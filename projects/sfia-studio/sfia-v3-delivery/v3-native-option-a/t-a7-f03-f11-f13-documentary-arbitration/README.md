# T-A7 — Arbitrage documentaire F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Gate arbitrage (historique)** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — … — KEEP T-A7 NOT OPEN` |
| **Gate décisions (consommé)** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date arbitrage** | 2026-07-28 19:09:51 CEST (+0200) |
| **Date décisions** | 2026-07-28 19:25:19 CEST (+0200) |
| **Date/heure intégration (Git)** | 2026-07-28 19:54:21 CEST (+0200) — committer date du merge `dad6e003…` |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 3 · 6 · 9 · 10) · Critical |
| **Base (décisions)** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche source (décisions)** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Worktree local (décisions)** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
| **Push / PR / merge** | branche projet poussée · PR **#285** mergée · merge commit `dad6e00344ad5750cd352db3af33c150c780491b` · branche source préservée · checks requis passés · post-merge vérifié |

## Objectif

Enregistrer formellement les décisions Morris D-T-A7-F03 / F11 / F13 **sans** autoriser préparation technique, implémentation, delivery ni cutover.

## Périmètre

- enregistrement F03.3 · F11.2 · F13.4 · combinaison croisée ;
- conservation des options non retenues (historique d’arbitrage) ;
- anti-claims · séquence future · gate candidat d’intégration.

## Hors périmètre du cycle initial d’arbitrage / décision

- push / PR / merge projet (**hors périmètre du cycle initial** ; autorisés ensuite et exécutés par le gate d’intégration distinct — PR #285 — **sans** autoriser d’implémentation) ;
- préparation technique · API/UI/runtime RO · migration ;
- modification `method/**` · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI ;
- ouverture T-A7 · delivery / cutover · fermeture réserves.

## Décisions enregistrées

| ID | Choix | Libellé | Statut |
|----|-------|---------|--------|
| D-T-A7-F03 | **F03.3** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F11 | **F11.2** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F13 | **F13.4** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` | `DECIDED — ADOPTED BY MORRIS` |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01`–`04` | Sources · options (retenues + non retenues) |
| `05` | Combinaison croisée **adoptée** |
| `06` | Impacts / risques post-décision |
| `07` | Bulletin décisions enregistrées |
| `README.md` | Synthèse · verdict · gates |

## Anti-claims

- F03/F11/F13 décidées ≠ implémentation · ≠ prep technique · ≠ delivery/cutover
- F03.3 ≠ set maximal · F11.2 ≠ UI · F13.4 ≠ frontière runtime livrée
- combinaison adoptée ≠ T-A7 OPEN

## Gates

### Gate d’intégration (historique)

`GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `CONSUMED — PR #285 MERGED — POST-MERGE VERIFIED`

### Gate correctif README post-merge (courant)

`GO CORRECT AND INTEGRATE T-A7 F03 F11 F13 README POST-MERGE STATUS — UPDATE ONLY STALE PR PUSH GATE AND VERDICT REFERENCES — ONE FILE ONLY — NO DECISION CHANGE — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `CONSUMED — README POST-MERGE STATUS CORRECTION`

Aucun prochain gate technique n’est inventé ici.

## Verdict

`T-A7 F03 F11 F13 MORRIS DECISIONS INTEGRATED AND MERGED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET CONFIRMED ON MAIN — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI CONFIRMED ON MAIN — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW CONFIRMED ON MAIN — CROSS-DECISION COMBINATION CONFIRMED — OPTIONS NOT RETAINED PRESERVED AS HISTORY — REQUIRED CHECKS PASS — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — SOURCE BRANCH PRESERVED — POST-MERGE VERIFIED`
