# ChatGPT Review Pack — FULL — T-A7 F03 / F11 / F13 Documentary Arbitration

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 19:12:49 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Gate consommé** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — PREPARE OPTIONS IMPACTS RISKS RECOMMENDATIONS AND MORRIS DECISION PACK — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Base / HEAD** | `9011bb2c7e27a78979d310b628da48b9cfbd400f` / `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` |
| **Push projet** | **non** |

## Verdict exact

`T-A7 F03 F11 F13 DOCUMENTARY ARBITRATION FRAMED — ENTRY PRECONDITIONS API UI AND LEGACY HISTORY READ-ONLY OPTIONS DOCUMENTED — CROSS-DECISION CONSISTENCY ANALYZED — RECOMMENDATIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

## Sources / preuves

Packs T-A7 cutover / next-step / Wave 1 (PR #283–#284) · MethodMode D1 ACTIVE · trio `SFIA_CANONICAL_CORE_PATHS` · OPS1 path-policy ≠ IAM · P03–P11 PARTIAL/MISSING · OA UI MISSING · volumes DB UNKNOWN · explore [Gather F03 F11 F13 evidence](de36a6fc-93df-4c67-b601-7d3b360007a2)

## Recommandations (`RECOMMENDED — NOT DECIDED`)

| Domaine | Option |
|---------|--------|
| F03 | **F03.3** set custom intermédiaire |
| F11 | **F11.2** API minimale sans UI dédiée |
| F13 | **F13.4** hybrid archive + RO bornée |
| Combo | F03.3 × F11.2 × F13.4 |

## Commit / blobs

| Champ | Valeur |
|-------|--------|
| Commit | `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` |
| Parent | `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| Tree | `62921f8366d4a9b2d029387cbf39083c4d3a03ae` |
| Scope | 8 fichiers A · +737/−0 · pack only |
| README | `4f335c2548f6fa7f8528a1f445976326bef6f4f0` |
| 01 | `6dcdd7900d58be922a470e331ee3eee6a6f56202` |
| 02 | `be285f6dc7ad6d0e5f5cde27beb4ef0b5f58252f` |
| 03 | `628626948b5539b49910846b5702876d89696d4a` |
| 04 | `fab5e9a2fe4258051e04b3e2313879acd933e28e` |
| 05 | `553b3cfabe5d21fb0d32e683f6402a886338e56d` |
| 06 | `fd589426376eebdef6f22b3fb51b3d18abdbcc44` |
| 07 | `d01a3a408a591bf9626879165069052b847929a3` |

## Gouvernance

F03/F11/F13 `NOT DECIDED` · W1-B/D01–D05 inchangés · B5/R1/R-M01 OPEN · HARD OPEN HARD · T-A6 NOT DECLARED · Option A NOT COMPLETE · T-A7 NOT OPEN · delivery/cutover NOT AUTHORIZED · persistence/IAM NOT SELECTED · RGPD NOT VALIDATED

## Findings

0 / 0 / 0

## Actions non exécutées

push/PR/merge projet · décision F · prep technique · mod method/OPS1/runtime · ouverture T-A7 · delivery/cutover · fermeture réserve

## Gate candidat

`GO DECIDE T-A7 F03 F11 AND F13 — SELECT OPTIONS FROM DOCUMENTARY ARBITRATION PACK — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` — `NOT CONSUMED`

## Diff stat

```
 .../01-source-truth-and-scope.md                   |  65 +++++++++++
 .../02-f03-entry-preconditions-options.md          | 130 +++++++++++++++++++++
 .../03-f11-api-ui-options.md                       | 110 +++++++++++++++++
 .../04-f13-legacy-history-read-only-options.md     | 111 ++++++++++++++++++
 .../05-cross-decision-consistency.md               |  49 ++++++++
 .../06-recommendation-and-risks.md                 |  49 ++++++++
 .../07-morris-decision-pack.md                     | 120 +++++++++++++++++++
 .../README.md                                      | 103 ++++++++++++++++
 8 files changed, 737 insertions(+)
```

---

## Contenu complet des fichiers créés


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md`

```markdown
# T-A7 — Arbitrage documentaire F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — PREPARE OPTIONS IMPACTS RISKS RECOMMENDATIONS AND MORRIS DECISION PACK — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 19:09:51 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Worktree local** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | `NOT DECIDED` |
| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (enregistrés PR #284) |
| **Push / PR** | **aucun** |

## Objectif

Préparer un arbitrage documentaire **complet** de D-T-A7-F03, D-T-A7-F11 et D-T-A7-F13 : options, impacts, risques, dettes, preuves, stops et recommandations — **sans** sélectionner à la place de Morris et **sans** autoriser une préparation technique.

## Périmètre

- options F03.1–.3 · F11.1–.4 · F13.1–.4 ;
- matrice croisée · recommandation `RECOMMENDED — NOT DECIDED` ;
- bulletin Morris D-T-A7-F03 / F11 / F13 (`MORRIS DECISION REQUIRED`).

## Hors périmètre

- décision automatique / présélection exécutoire ;
- modification `method/**` · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI ;
- préparation technique · backlog delivery exécutable · implémentation ;
- ouverture T-A7 · delivery preparation / delivery / cutover ;
- fermeture B5 / R1 / R-M01 / HARD ;
- push projet · PR · merge.

## Sources

| Source | Rôle |
|--------|------|
| Template + trio `SFIA_CANONICAL_CORE_PATHS` | méthode d’exécution / loader |
| Pack `t-a7-legacy-cutover-framing` | P03–P11 · SC · bulletin F |
| Pack `t-a7-next-decision-step-framing` | Option C · calendrier F |
| Pack `t-a7-option-c-wave-1-legacy-scope-framing` | inventaires · W1-B · D01–D05 |
| PR #283 / #284 + handoffs | vérité Git intégrée |
| Code D1 / OPS1 / platform | MethodMode · path-policy · UI existantes |

## Décisions existantes (rappel)

| ID | Statut |
|----|--------|
| T-A7-D01…D05 · Option C | `DECIDED — ADOPTED BY MORRIS` |
| W1-B · W1-D01…D05 | `DECIDED — ADOPTED BY MORRIS` (D03 = futurs candidats) |
| W1-D05 | F03/F11/F13 = **gates** avant prep technique · **contenu** encore ouvert |

## Décisions ouvertes (ce pack)

| ID | Statut |
|----|--------|
| D-T-A7-F03 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
| D-T-A7-F11 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
| D-T-A7-F13 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01-source-truth-and-scope.md` | Base · preuves · in/out |
| `02-f03-entry-preconditions-options.md` | F03.1–.3 |
| `03-f11-api-ui-options.md` | F11.1–.4 |
| `04-f13-legacy-history-read-only-options.md` | F13.1–.4 |
| `05-cross-decision-consistency.md` | Matrice croisée |
| `06-recommendation-and-risks.md` | Recommandation non décisionnelle |
| `07-morris-decision-pack.md` | Bulletin D-T-A7-F03/F11/F13 |

## Recommandations (non décisionnelles)

| Domaine | Reco | Statut |
|---------|------|--------|
| F03 | **F03.3** (intermédiaire borné) | `RECOMMENDED — NOT DECIDED` |
| F11 | **F11.2** (API opérationnelle minimale, pas d’UI dédiée maintenant) | `RECOMMENDED — NOT DECIDED` |
| F13 | **F13.4** (hybrid archive Git + vue RO bornée) | `RECOMMENDED — NOT DECIDED` |
| Combinaison | F03.3 × F11.2 × F13.4 | `RECOMMENDED — NOT DECIDED` |

## Anti-claims

- arbitrage préparé ≠ décision prise
- recommandation ≠ validation Morris
- F03 décidée ultérieurement ≠ delivery autorisée
- F11 décidée ultérieurement ≠ API/UI implémentée
- F13 décidée ultérieurement ≠ isolation OPS1 implémentée
- read-only documenté ≠ ACL validée
- W1-B adopté ≠ préparation technique
- T-A7 framing ≠ T-A7 OPEN

## Gate candidat suivant

`GO DECIDE T-A7 F03 F11 AND F13 — SELECT OPTIONS FROM DOCUMENTARY ARBITRATION PACK — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 F03 F11 F13 DOCUMENTARY ARBITRATION FRAMED — ENTRY PRECONDITIONS API UI AND LEGACY HISTORY READ-ONLY OPTIONS DOCUMENTED — CROSS-DECISION CONSISTENCY ANALYZED — RECOMMENDATIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/01-source-truth-and-scope.md`

```markdown
# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Nature** | vérité + preuves · **pas** une autorisation |

## 1. Vérité Git

| Check | Résultat |
|-------|----------|
| `origin/main` | `9011bb2c…` (merge PR #284) |
| HEAD / merge-base | identiques |
| Upstream projet | **aucun** |
| Remote branche | **absente** |
| Contenu hors pack | **aucune** modification (bound) |

## 2. Preuves structurantes (synthèse)

| Domaine | Preuve | Statut |
|---------|--------|--------|
| MethodMode D1 | `METHOD_MODES` · DB · badges · default `V3_CANDIDATE` | `ACTIVE — EVIDENCED` |
| Orphan `actionSelectMethodMode` | export sans UI | `ACTIVE — EVIDENCED` (dead export) |
| Dual enum modeled | `v2.6_manual|…|fallback` sans mapper | `ACTIVE — EVIDENCED` (écart) |
| Trio `SFIA_CANONICAL_CORE_PATHS` | 3 fichiers `method/.../core/*` | `ACTIVE — EVIDENCED` |
| OPS1 path-policy | allowlist/forbidden + gates · ≠ IAM | `ACTIVE — EVIDENCED` / IAM `NOT SELECTED` |
| Asymétrie | deny action `method/` vs lecture canonical trio | `ACTIVE — EVIDENCED` |
| CT / platform / OPS1 wrappers | extension in-place | `ACTIVE — EVIDENCED` |
| D1 ↛ OPS1 import boundary | tests | `ACTIVE — EVIDENCED` |
| Surfaces D1 UI | badges · cockpit · home | `ACTIVE — EVIDENCED` |
| OA UI product | OA-11 / P22 | `MISSING` |
| MethodModeGate / route | design | `DOCUMENTATION ONLY` |
| Volume DB `method_mode` | — | `UNKNOWN` |
| P03–P05 | remplacements doctrine/loader | `PARTIAL` |
| P06–P09 · P11 | MethodMode/OA UI/method reads/historique RO | `MISSING` |
| P10 | OPS1 isolation cutover | `PARTIAL` |
| Rollback runtime testé | — | `MISSING` / `UNKNOWN` |
| B5 / R1 / R-M01 / HARD | ouverts | `OPEN` / `OPEN HARD` |

## 3. Contraintes héritées (W1)

| Contrainte | Effet |
|------------|-------|
| W1-B | plan candidat **documentaire** autorisé · prep technique **non** |
| W1-D02 | blocs actifs confirmés (ne pas traiter comme morts) |
| W1-D03 | candidats futurs ≠ suppression décidée |
| W1-D04 | isolation OPS1 **avant** tout retrait (trajectoire) |
| W1-D05 | F03/F11/F13 **décidées (contenu)** avant prep technique retrait |

## 4. Scope de cet arbitrage

| In | Out |
|----|-----|
| Contenu options F03/F11/F13 | Implémentation · prep technique |
| Impacts / risques / dettes / preuves | Modification code/method/OPS1 |
| Recommandations non décisionnelles | Delivery / cutover / T-A7 OPEN |
| Bulletin Morris | Fermeture réserves |

## 5. Anti-claims

- inventaire Wave 1 ≠ F03 satisfait
- P* PARTIAL/MISSING ≠ prêt cutover
- surface D1 existante ≠ surface cutover OA
- path-policy ≠ IAM
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md`

```markdown
# 02 — F03 — Préconditions avant préparation technique

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F03 |
| **Question** | Quelles préconditions sont **obligatoires** avant toute préparation technique de retrait / delivery T-A7 ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F03.3** |

## Distinctions

| Niveau | Sens |
|--------|------|
| Avant **prep technique retrait** | contenu F03 (+ F11/F13 per W1-D05) décidé · inventaire/plan doc |
| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques |
| Avant **cutover** | + P03–P11 satisfaits ou explicitement gated · F09 · rollback/observabilité |

---

## F03.1 — Set minimal

**Idée :** set strictement nécessaire pour ouvrir un cadrage de prep **ultérieur**, sans exiger la satisfaction runtime de tout P03–P11.

### Contenu candidat obligatoire

| Élément | Obligatoire ? | Note |
|---------|---------------|------|
| Inventaire legacy validé (Wave 1) | **oui** | déjà sur main |
| Dépendances actives confirmées (W1-D02) | **oui** | MethodMode · trio · consumers |
| Candidats retrait identifiés (W1-D03) | **oui** | sans autoriser retrait |
| Plan documentaire W1-B | **oui** | séquences/validations/rollback/gates doc |
| Isolation OPS1 **définie** (D04) | **oui** (cadrage) | ≠ implémentée |
| Stratégie rollback documentaire | **oui** | ≠ testée |
| Preuves non-régression **candidates** | **oui** (liste) | ≠ exécutées |
| F11 et F13 **décidées** (contenu) | **oui** (W1-D05) | avant prep |
| Aucun blocker HARD **ignoré** | **oui** | B5/R1/HARD restent OPEN → documenter non-bypass |

### Différable / hors scope immédiat

| Élément | Classement |
|---------|------------|
| Satisfaction runtime P07–P09 | différé (cutover / F11) |
| IAM SELECTED | hors scope (NOT SELECTED) |
| RUN readiness complète | différé delivery/cutover |
| Volume DB mesuré | UNKNOWN → preuve à planifier |

| Critère | Éval |
|---------|------|
| Bénéfices | proportionné · aligné W1-B · évite faux READY |
| Risques | sous-estime dettes HARD / P* MISSING |
| Dette | plan trop mince pour delivery |
| Réversibilité | haute (doc) |

---

## F03.2 — Set maximal

**Idée :** toutes préconditions P03–P11 pertinentes + preuves runtime + tests détaillés + observabilité + sécu + données + IAM + rollback validable + RUN + cutover readiness documentaire.

| Inclus en plus vs F03.1 | Risque |
|-------------------------|--------|
| P03–P05 preuves runtime | charge élevée ; P encore PARTIAL |
| P06–P09 satisfaits | MethodMode/OA UI encore ACTIVE/MISSING |
| P10–P11 appliqués | isolation/historique non implémentés |
| IAM / RGPD prod | NOT SELECTED / NOT VALIDATED — bloquant |
| HARD fermés | hors ce cycle |

| Critère | Éval |
|---------|------|
| Bénéfices | filet maximal avant prep |
| Risques | **sur-cadrage** · conflation F03 avec cutover complete |
| Dette | documentaire + paralysie |
| Réversibilité | moyenne (attentes figées) |

---

## F03.3 — Set custom (intermédiaire) — **RECO**

**Idée :** F03.1 **+** exigences explicites de **traçabilité** et de **non-conflation**, sans exiger satisfaction cutover.

### Obligatoire (prep technique retrait)

1. Tout F03.1.
2. Matrice P03–P11 avec statut PARTIAL/MISSING **à jour** (pas de claim SATISFIED implicite).
3. Frontière OPS1 **spécifiée** (path-policy · CT/D1 · anti SC-12) — design only.
4. Liste preuves non-régression **par surface** (D1 MethodMode · canonical trio · OPS1 allowlist).
5. Hold/rollback **candidats** documentés (P07–P09 concepts) sans implémentation.
6. Contenu F11 + F13 **déjà décidés**.
7. Déclaration : B5 / R1 / HARD **OPEN** → aucun bypass.

### Avant delivery preparation (rappel — hors F03 seul)

- Bulletin B5 / décisions HARD associées ;
- persistence/IAM selon trajectoire produit (encore NOT SELECTED).

### Avant cutover (rappel)

- P03–P11 selon F09 + preuves runtime ;
- F11 surfaces cutover satisfaites ;
- F13 historique RO opérationnel.

### Volontairement différé

| Élément | Pourquoi |
|---------|----------|
| Mesure volume DB | UNKNOWN — campagne dédiée |
| IAM multi-user | NOT SELECTED |
| UI OA product complete (A3.2) | distinct F11 cutover vs product |
| Fermeture HARD | vagues Option C 2–4 |

| Critère | Éval |
|---------|------|
| Bénéfices | borné · compatible W1-B/D04/D05 · évite maximalisme |
| Risques | encore une marge d’interprétation « prep » |
| Dette | faible si gates clairs |
| Réversibilité | haute |

**Gates Morris associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.

---

## Synthèse F03

| Option | Label reco |
|--------|------------|
| F03.1 | acceptable si Morris veut minimalisme |
| F03.2 | trop lourd pour « entrée prep » |
| F03.3 | `RECOMMENDED — NOT DECIDED` |

**Anti-claim :** F03.3 recommandé ≠ F03 décidé · F03 décidé ≠ delivery autorisée.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md`

```markdown
# 03 — F11 — API / UI avant retrait et cutover

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F11 |
| **Question** | Quelles exigences API/UI pour retrait legacy et cutover ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F11.2** |

## Distinctions (obligatoires)

| Couche | Sens | État actuel |
|--------|------|-------------|
| API/UI **product complete** (A3.2) | produit OA utilisable | OA UI **MISSING** |
| API/UI **retrait legacy** | opérer/observer retrait MethodMode/`method` | **MISSING** (hors badges D1) |
| API/UI **avant cutover** | readiness · hold · audit cutover | **MISSING** |
| UI **administration** | opérateurs / Morris | partiel D1/OPS1 existants ≠ cutover |
| Surfaces **preuve / audit / rollback / monitoring** | preuves opérables | concepts doc · runtime limité |

**Surfaces existantes (ne pas confondre avec F11 cutover) :** MethodModeBadge · cockpit D1 · OPS1 session/allowlist UI.

**Mutations dans ce cycle :** **aucune**. Options = exigences **futures**.

---

## F11.1 — Aucune nouvelle surface avant cutover

| Critère | Éval |
|---------|------|
| Usages | cutover via Git/docs/ops manuelles |
| Utilisateurs | Morris / agents seulement |
| Droits | L0 gates existants |
| Données affichées | aucune nouvelle |
| Mutations | interdites (status quo) |
| Audit | logs Git/CI seulement |
| Avantages | simplicité · peu de dette UI |
| Risques | visibilité faible · rollback fragile · audit insuffisant · erreur humaine |
| Accessibilité | N/A nouvelles surfaces |
| Dette | dette **opérationnelle** |
| Preuve readiness | difficile |
| Impact cutover | élevé |
| Réversibilité | haute (rien ajouté) |

---

## F11.2 — API opérationnelle minimale sans UI dédiée — **RECO**

| Critère | Éval |
|---------|------|
| Usages | lecture état MethodMode · compat/dépendances · statut migration/hold · health/readiness |
| Utilisateurs | automation · Morris via outils · CI candidats |
| Droits | lecture bornée · **pas** IAM multi-user (NOT SELECTED) |
| Données | mode projet · flags hold · digest/loader status · allowlist hits (agrégats) |
| Mutations | **interdites** dans exigence minimale ; commandes write = gate ultérieur séparé |
| Audit | événements lecture/écriture si write gated |
| Sécurité | surface server-only · pas d’exposition publique |
| Accessibilité | N/A UI |
| Avantages | observabilité sans dette UI · aligne P07–P09 holds |
| Risques | UX opérateur faible · tentation d’étendre write trop tôt |
| Dette | API contracts à maintenir |
| Preuve readiness | tests API candidats |
| Impact cutover | réduit le risque « à l’aveugle » |
| Réversibilité | moyenne (contrats) |

---

## F11.3 — API + UI minimale d’administration

| Critère | Éval |
|---------|------|
| Usages | F11.2 + écrans : état legacy · compat · historique · statut OPS1 · readiness · rollback · audit · badges/warnings |
| Utilisateurs | Morris · éventuels opérateurs futurs |
| Droits | admin borné · ≠ IAM produit |
| Données | + historique RO (dépend F13) · statut OPS1 |
| Mutations | hold/rollback **candidats** seulement sous gate |
| Audit | UI actions journalisées |
| Sécurité | risque surface admin |
| Accessibilité | WCAG candidat (exigence) |
| Avantages | opérabilité humaine |
| Risques | dette UX · conflation product UI vs cutover UI · SC-12 si OPS1 mal présenté |
| Dette | haute |
| Preuve readiness | e2e UI + API |
| Impact cutover | positif si borné |
| Réversibilité | basse une fois shippé |

---

## F11.4 — Custom

**Proposition intermédiaire :** F11.2 **maintenant (exigence)** + **jalon UI admin optionnelle** seulement si cutover réel approche et F13.2/F13.4 l’exige — UI **hors** product OA A3.2.

| Critère | Éval |
|---------|------|
| Bénéfices | évite UI prématurée · laisse porte ouverte |
| Risques | ambiguïté de calendrier UI |
| Dette | faible si jalon explicite |
| Réversibilité | haute |

---

## Synthèse F11

| Option | Label |
|--------|-------|
| F11.1 | trop risqué pour cutover gouverné |
| F11.2 | `RECOMMENDED — NOT DECIDED` |
| F11.3 | acceptable plus tard / cutover proche |
| F11.4 | acceptable alternative à F11.2 |

**Anti-claim :** F11.2 recommandé ≠ API implémentée · ≠ product complete A3.2 · ≠ retrait MethodMode.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md`

```markdown
# 04 — F13 — Historique legacy read-only & frontière OPS1

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F13 |
| **Question** | Comment conserver l’historique legacy en read-only et isoler OPS1 ? |
| **Statut contenu** | `NOT DECIDED` |
| **Reco** | `RECOMMENDED — NOT DECIDED` → **F13.4** |

## Définitions

| Terme | Périmètre candidat |
|-------|-------------------|
| **Historique legacy** | états/audit D1 liés MethodMode · artefacts `.sfia-exec` locaux · docs/archives `method/**` non canoniques · journaux OPS1 locaux |
| **Données** | SQLite `method_mode` + audit events · fichiers state gitignored · markdown method |
| **Chemins** | `app/lib/d1/**` (données) · `method/**` · `app/lib/ops1/**` · `.sfia-exec/**` |
| **Consommateurs** | D1 UI · canonical loader · OPS1/CT · prompts · docs |
| **Droits** | path-policy + gates Morris (**≠** IAM multi-user) |
| **Mutations interdites (cible RO)** | update/delete historique · réactivation silencieuse MethodMode retiré · write `method/` hors gate |
| **Durée** | **NOT DECIDED** — candidat : jusqu’à GO archive finale distinct |
| **Frontière OPS1** | D04 : isolation **avant** retrait · POC ≠ Option A (SC-12) |
| **Après retrait** | lectures RO seulement · pas d’autorité runtime cutover |
| **Rollback** | restore ACL/allowlist · Git · backup DB · procédures locales `.sfia-exec` |

---

## F13.1 — Conservation in-place read-only

Legacy reste en place ; mutations interdites par politique/tests.

| Critère | Éval |
|---------|------|
| Périmètre | chemins actuels |
| Accès | same surfaces ; deny writes |
| Contrôle | path-policy + antiLegacy étendu |
| Migration | minimale |
| Avantages | simplicité |
| Risques | confusion actif/historique · réactivation accidentelle |
| Dette | structure legacy visible |
| Durée | indéterminée |
| Preuves | tests mutation deny |
| Conditions retrait final | GO distinct |

---

## F13.2 — Isolation dédiée read-only

Frontière dédiée ultérieure : namespace · API lecture · ACL · journalisation · no mutation · dépendances actives isolées.

| Critère | Éval |
|---------|------|
| Périmètre | store/API « legacy history » |
| Accès | API RO bornée (lien F11.2/F11.3) |
| Contrôle | ACL path + audit |
| Migration | copie/move contrôlé |
| Avantages | clarté · SC-12 · D04 |
| Risques | coût · double écriture pendant transition |
| Dette | service RO à maintenir |
| Rollback | reverse migrate |
| Preuves | e2e no-write · boundary tests |
| Conditions retrait final | empty store + GO |

---

## F13.3 — Archive documentaire uniquement

Git/docs seulement · **pas** d’exposition runtime.

| Critère | Éval |
|---------|------|
| Périmètre | repo markdown + history Git |
| Accès | lecteurs Git |
| Contrôle | Git permissions |
| Avantages | très simple |
| Risques | perte traçabilité produit · support runtime impossible · `.sfia-exec`/DB non couverts |
| Dette | faible doc · **trou** opérationnel |
| Preuves | tags Git |
| Limites | **insuffisant seul** si D1/OPS1 restent |

---

## F13.4 — Hybrid — **RECO**

Archive Git/docs **+** vue/politique RO **bornée** runtime pour données encore nécessaires (MethodMode history · audit) · OPS1 isolé (D04) sans retrait forcé.

| Critère | Éval |
|---------|------|
| Périmètre | Git archives `method` non-canon · RO DB/audit D1 · OPS1 path-policy renforcée |
| Accès | F11.2 lecture · pas d’UI obligatoire |
| Contrôle | path-policy ≠ IAM · gates |
| Migration | progressive |
| Avantages | couvre UNKNOWN volumes · compatible W1-D03/D04 · évite F13.3 trop faible et F13.2 trop tôt |
| Risques | complexité hybride · discipline anti-réactivation |
| Dette | moyenne |
| Rollback | Git + backup DB + ACL |
| Durée | jusqu’à GO archive finale |
| Preuves | deny mutation · boundary OPS1 · inventaire allowlist |
| Conditions retrait final | preuves + F03/F11 satisfaits + GO Morris |

---

## Synthèse F13

| Option | Label |
|--------|-------|
| F13.1 | acceptable court terme |
| F13.2 | cible forte si cutover proche |
| F13.3 | insuffisante seule |
| F13.4 | `RECOMMENDED — NOT DECIDED` |

**Anti-claim :** F13.4 recommandé ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md`

```markdown
# 05 — Cohérence croisée F03 × F11 × F13

| Champ | Valeur |
|-------|--------|
| **Nature** | matrice · **pas** une décision |
| **Reco combinaison** | `RECOMMENDED — NOT DECIDED` → **F03.3 × F11.2 × F13.4** |

## 1. Matrice (échantillon structurant)

| F03 | F11 | F13 | Cohérence | Risque | Dette | Préconditions + |
|-----|-----|-----|-----------|--------|-------|-----------------|
| .1 | .1 | .3 | **faible** | cutover aveugle · historique runtime perdu | op. haute | preuves manuelles lourdes |
| .1 | .2 | .1 | moyenne | confusion actif/historique | basse | deny-write tests |
| .1 | .2 | .4 | **bonne** | sous-spécif. P* | basse–moy | matrice P à jour |
| .3 | .2 | .4 | **forte** | discipline « prep » | moyenne | F11/F13 décidés · D04 design |
| .3 | .3 | .2 | forte | dette UI précoce | haute | a11y · audit UI |
| .3 | .3 | .4 | forte | sur-build UI | haute | jalon UI explicite |
| .2 | .3 | .2 | **lourde** | conflation cutover-complete | très haute | IAM/HARD quasi requis |
| .2 | .1 | .3 | **incohérente** | maximal F03 + aveugle F11 | — | — |
| .1 | .3 | .3 | **tendue** | UI sans runtime history | — | — |
| .3 | .4 | .4 | **bonne** | calendrier UI flou | basse | jalon cutover UI |

## 2. Combinaisons

| Type | Exemples |
|------|----------|
| **Cohérentes** | F03.3×F11.2×F13.4 · F03.3×F11.4×F13.4 · F03.1×F11.2×F13.1 |
| **Incompatibles / tendues** | F03.2×F11.1×F13.3 · F11.3 sans F13 capable de fournir données RO · F13.3 seul si D1/OPS1 actifs |
| **Trop lourdes** | F03.2×F11.3×F13.2 (surtout avec HARD OPEN) |

## 3. Combinaison recommandée (non décisionnelle)

**F03.3 × F11.2 × F13.4**

| Pourquoi | Lien W1 |
|----------|---------|
| Borné avant prep | W1-B · W1-D05 |
| Observabilité sans UI prématurée | évite dette F11.3 |
| Historique + OPS1 sans archive-only | W1-D04 · SC-12 |
| N’exige pas cutover-complete | T-A7 NOT OPEN |

## 4. Séquence documentaire future (candidate)

1. Morris décide F03 / F11 / F13 (bulletin).
2. Plan W1-B détaillé **doc** aligné sur les trois choix.
3. Design isolation OPS1 (D04) — encore non implémenté.
4. Seulement ensuite : gate prep technique (si F + B5 le permettent).

**Anti-claim :** combinaison recommandée ≠ options adoptées.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md`

```markdown
# 06 — Recommandation et risques

| Champ | Valeur |
|-------|--------|
| **Statut global** | `RECOMMENDED — NOT DECIDED` |
| **Autorité** | aucune hors Morris |

## 1. Recommandation

| Domaine | Option | Justification courte |
|---------|--------|----------------------|
| F03 | **F03.3** | minimal + traçabilité P* / HARD / D04 sans maximalisme cutover |
| F11 | **F11.2** | API lecture/hold/readiness · pas d’UI admin prématurée |
| F13 | **F13.4** | hybrid Git archive + RO runtime borné · OPS1 isolable |
| Combo | **F03.3 × F11.2 × F13.4** | cohérente · proportionnée · réversible |

## 2. Compatibilité

| Contrainte | Respect reco ? |
|------------|----------------|
| W1-B plan candidat | oui (doc) |
| Isolation OPS1 avant retrait (D04) | oui (F13.4/F13.2 path) |
| F gates avant prep (D05) | oui |
| T-A7 NOT OPEN | oui |
| Pas de dette UI inutile | oui (évite F11.3 immédiat) |
| Repo-informed | oui (preuves Wave 1 + P*) |

## 3. Risques résiduels

| Risque | Sévérité | Mitigation documentaire |
|--------|----------|-------------------------|
| « Prep » mal définie malgré F03.3 | Med | W1-S4 · liste exclusions |
| API F11.2 étendue en write trop tôt | Med | mutations = gate séparé |
| Hybrid F13.4 mal discipliné | Med | deny-write · inventaire allowlist |
| HARD ignorés | High | anti-bypass B5/R1/HARD |
| Volume DB UNKNOWN | Med | campagne mesure avant retrait D1 |

## 4. Ce qui n’est **pas** recommandé maintenant

- F03.2 comme entrée prep (sur-cadrage)
- F11.1 (aveugle)
- F13.3 seul (trou runtime)
- Toute implémentation / prep technique / cutover

## 5. Anti-claims

- recommandation ≠ validation Morris
- combo reco ≠ décision
- F décidées plus tard ≠ delivery/cutover autorisés
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md`

```markdown
# 07 — Morris decision pack — D-T-A7-F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **F03 / F11 / F13** | contenu `NOT DECIDED` |
| **T-A7** | `NOT OPEN` |
| **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |

---

## D-T-A7-F03 — Préconditions avant préparation technique

**Question :** Quel set de préconditions obligatoires avant toute préparation technique de retrait / delivery T-A7 ?

| Option | Description |
|--------|-------------|
| F03.1 | Set minimal (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 décidées · HARD non ignorés) |
| F03.2 | Set maximal (P03–P11 + runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness) |
| F03.3 | Set custom intermédiaire (F03.1 + matrice P* + frontière OPS1 design + holds candidats + anti-bypass) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F03.3**

**Impacts :** borne l’entrée en prep · n’autorise pas delivery.

**Dette :** doc P* à maintenir.

**Réversibilité :** haute.

**Gate futur :** plan W1-B détaillé · puis prep seulement si GO.

**Anti-claims :** F03 décidé ≠ delivery · ≠ cutover · ≠ T-A7 OPEN.

**Statut :** `MORRIS DECISION REQUIRED`

---

## D-T-A7-F11 — API / UI retrait et cutover

**Question :** Quelles exigences API/UI pour opérer/observer le retrait legacy et le cutover ?

| Option | Description |
|--------|-------------|
| F11.1 | Aucune nouvelle surface avant cutover |
| F11.2 | API opérationnelle minimale **sans** UI dédiée (lecture état/holds/readiness) |
| F11.3 | API + UI minimale d’administration |
| F11.4 | Custom (API maintenant · UI jalonnée plus tard) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F11.2**

**Impacts :** exige contrats lecture futurs · pas d’UI shippée par cette décision seule.

**Dette :** API contracts.

**Réversibilité :** moyenne.

**Gate futur :** design/API gate distinct · mutations write séparées.

**Anti-claims :** F11 ≠ product complete A3.2 · ≠ implémentation · ≠ retrait MethodMode.

**Statut :** `MORRIS DECISION REQUIRED`

---

## D-T-A7-F13 — Historique legacy read-only / OPS1

**Question :** Quelle politique d’historique legacy read-only et de frontière OPS1 ?

| Option | Description |
|--------|-------------|
| F13.1 | Conservation in-place read-only |
| F13.2 | Isolation dédiée read-only (namespace/API/ACL) |
| F13.3 | Archive documentaire uniquement (Git/docs) |
| F13.4 | Hybrid (archive Git + vue/politique RO runtime bornée + OPS1 isolable) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F13.4**

**Impacts :** impose discipline deny-write + design isolation OPS1 (D04).

**Dette :** politique hybride.

**Réversibilité :** moyenne.

**Gate futur :** isolation design · puis implémentation sous GO distinct.

**Anti-claims :** F13 ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1 · path-policy ≠ IAM.

**Statut :** `MORRIS DECISION REQUIRED`

---

## Bulletin Morris (vierge)

```
GO DECIDE T-A7 F03 F11 AND F13 — D-T-A7-F03=… — D-T-A7-F11=… — D-T-A7-F13=… — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.

## Synthèse recommandations (non décisionnelles)

| ID | Option | Label |
|----|--------|-------|
| D-T-A7-F03 | F03.3 | `RECOMMENDED — NOT DECIDED` |
| D-T-A7-F11 | F11.2 | `RECOMMENDED — NOT DECIDED` |
| D-T-A7-F13 | F13.4 | `RECOMMENDED — NOT DECIDED` |

## Garde-fous

- W1-B · W1-D01…D05 : décisions Wave 1 inchangées
- F03/F11/F13 contenu : `NOT DECIDED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- T-A7 `NOT OPEN`
- delivery preparation / delivery / cutover `NOT AUTHORIZED`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
```

