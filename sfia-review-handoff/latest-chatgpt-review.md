# ChatGPT Review Pack — FULL — T-A7 Option C Wave 1 Morris Decisions Record + Merge

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 18:55:49 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 9 · 13 · 14) · Critical |
| **Gate consommé** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — W1-D02=CONFIRM ACTIVE LEGACY BLOCKS — W1-D03=CONFIRM FUTURE REMOVAL CANDIDATES WITHOUT AUTHORIZING REMOVAL — W1-D04=ISOLATE OPS1 BEFORE ANY REMOVAL — W1-D05=DECIDE F03 F11 F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions` |
| **Branche** | `record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions` |
| **Base** | `7746ea293ed1fe13d7c515ebf9962ebdd9b71a9a` |
| **HEAD commit** | `f89ba5fb6cfca4e3de97667d944569a20266a8aa` |
| **Merge** | `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **origin/main** | `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **PR** | [#284](https://github.com/mcleland147/sfia-workspace/pull/284) |

## Verdict exact

`T-A7 OPTION C WAVE 1 MORRIS DECISIONS RECORDED AND MERGED — W1-D01 W1-B ADOPTED — ACTIVE LEGACY BLOCKS CONFIRMED — FUTURE REMOVAL CANDIDATES CONFIRMED WITHOUT AUTHORIZING REMOVAL — OPS1 ISOLATION REQUIRED BEFORE ANY REMOVAL — F03 F11 AND F13 REQUIRED BEFORE ANY TECHNICAL REMOVAL PREPARATION WHILE CONTENT REMAINS NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — SOURCE BRANCH PRESERVED — POST-MERGE VERIFIED`

## Sources

Pack Wave 1 (PR #283) · T-A7 next-step (#282) · legacy cutover (#280) · handoff post-merge #283 · template SFIA v2.6

## Décisions enregistrées

| ID | Choix | Statut |
|----|-------|--------|
| W1-D01 | W1-B — inventory + candidate removal plan | `DECIDED — ADOPTED BY MORRIS` |
| W1-D02 | MethodMode D1 · trio canonical · consumers method | `DECIDED — ADOPTED BY MORRIS` |
| W1-D03 | orphan select · Gate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
| W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
| W1-D05 | decide F03/F11/F13 before technical removal prep | `DECIDED — ADOPTED BY MORRIS` |
| W1-B | via D01 | `DECIDED — ADOPTED BY MORRIS` |
| F03/F11/F13 contenu | — | `NOT DECIDED` |
| T-A7 | — | `NOT OPEN` |
| delivery/cutover | — | `NOT AUTHORIZED` |

## Commit / blobs

| Champ | Valeur |
|-------|--------|
| Commit | `f89ba5fb6cfca4e3de97667d944569a20266a8aa` |
| Parent | `7746ea293ed1fe13d7c515ebf9962ebdd9b71a9a` |
| Tree | `2f8489ce464c846cd719acf815a6bb4c49176007` |
| README | `e165e368daf78de7542b496a27bc34879024b5a6` |
| 06 | `e6494fc33bd4c70a90f16ec57a01a20f5ad0922f` |
| 07 | `455d36fdfdb78e4ba89f3de8aba5957f26a3beb1` |
| 08 | `37878b451a873339ce5227b35dfc30fd3e2cfe0a` |
| Diff | 4 files · +159/−119 |

## PR / checks / merge

| Champ | Valeur |
|-------|--------|
| PR checks run | [30380214266](https://github.com/mcleland147/sfia-workspace/actions/runs/30380214266) SUCCESS |
| Merge | merge commit `9011bb2c7e27a78979d310b628da48b9cfbd400f` · parents `7746ea2…` + `f89ba5fb6cfca4e3de97667d944569a20266a8aa` · tree `2f8489ce…` |
| mergedBy / at | `mcleland147` / `2026-07-28T16:53:39Z` |
| Post-merge run | [30380381156](https://github.com/mcleland147/sfia-workspace/actions/runs/30380381156) SUCCESS |
| Branche source | préservée @ `f89ba5fb6cfca4e3de97667d944569a20266a8aa` |

## Findings

0 / 0 / 0

## Actions non exécutées

prep technique · mod method/OPS1/runtime · conso contenu F · ouverture T-A7 · delivery/cutover · fermeture réserve · suppression branche

---

## Diff complet utile

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md
index e87ec9d..e6494fc 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md
@@ -2,9 +2,10 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Nature** | options · **aucune présélection exécutoire** |
-| **Recommandations** | `RECOMMENDED — NOT DECIDED` uniquement |
-| **F03 / F11 / F13** | `NOT DECIDED` |
+| **Nature** | options historisées · **W1-B adopté** (T-A7-W1-D01) |
+| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
+| **F03 / F11 / F13 (contenu)** | `NOT DECIDED` |
+| **Préparation technique** | `NOT AUTHORIZED` |
 
 ## Option W1-A — Inventaire seulement
 
@@ -21,7 +22,7 @@
 | F concernées | préparation seulement |
 | Stops | T-A7 NOT OPEN · no method/OPS1 mod |
 
-## Option W1-B — Inventaire + plan de retrait candidat
+## Option W1-B — Inventaire + plan de retrait candidat — **ADOPTÉE**
 
 **Idée :** ajouter séquences candidates (MethodMode → remplacements OA → CI boundary → OPS1 isolation → historique RO) avec rollback papier.
 
@@ -33,8 +34,12 @@
 | Coût / complexité | moyen |
 | Réversibilité | haute (doc) |
 | Impact tests/CI | design de tests candidats seulement |
-| F | F03/F11/F13 timing+contenu futurs |
-| Stops | SC-02…05 · STOP BEFORE DELIVERY |
+| F | F03/F11/F13 gates avant prep technique (D05) · contenu futurs |
+| Stops | SC-02…05 · STOP BEFORE DELIVERY · D04 isolation OPS1 d’abord |
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS` (via T-A7-W1-D01).
+
+**Effet autorisé maintenant :** plan documentaire candidat uniquement (séquences, validations, rollback, gates) — **pas** d’exécution technique.
 
 ## Option W1-C — Inventaire + isolation préalable candidate
 
@@ -51,7 +56,9 @@
 | F | F13 en tête · F03 ensuite |
 | Stops | aucune mod code dans Wave 1 framing |
 
-## Challenge
+**Note :** D04 impose l’isolation OPS1 **avant tout retrait** comme trajectoire ; cela **n’adopte pas** W1-C comme niveau de cadrage (W1-B reste le choix D01) et **n’autorise pas** l’implémentation.
+
+## Challenge (historique)
 
 | Question | W1-A | W1-B | W1-C |
 |----------|------|------|------|
@@ -62,10 +69,8 @@
 | Préparable sans ouvrir T-A7 ? | **oui** | oui (doc) | oui (doc only ici) |
 | Respecte STOP BEFORE DELIVERY / `.1` ? | oui | oui | oui |
 
-## Recommandation
-
-`RECOMMENDED — NOT DECIDED` → **W1-B** (inventaire déjà produit + plan de retrait **candidat** dans cycle suivant ou annexe Morris), **sans** exécution.
+## Décision
 
-Alternative acceptable : rester en **W1-A** si Morris veut limiter la vague 1 à la vérité pure.
+`DECIDED — ADOPTED BY MORRIS` → **W1-B**.
 
-**Aucune option adoptée tant que T-A7-W1-D01 n’est pas tranché.**
+**Anti-claims :** W1-B adopté ≠ préparation technique autorisée · plan candidat ≠ retrait autorisé · isolation OPS1 (D04) ≠ isolation implémentée.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md
index 4f02388..455d36f 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md
@@ -4,6 +4,8 @@
 |-------|--------|
 | **Nature** | exigences **futures** · aucune validation exécutée ici |
 | **Rollback** | documenté ≠ validé |
+| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
+| **Prep technique retrait** | bloquée tant que F03/F11/F13 contenu `NOT DECIDED` (T-A7-W1-D05) |
 
 ## 1. Preuves avant modification future
 
@@ -11,8 +13,9 @@
 |---------|-------------------|
 | MethodMode | inventaire UI/API/DB · tests D1 verts · plan remplacement OA session (P06/P07) · hold flag |
 | `method/**` | diff path filter · consommateurs prompts/OPS1 mis à jour · P08/P24 CI boundary |
-| OPS1 | P10 ACL · no cross-call OA · allowlist revue · e2e I1–I6 · anti SC-12 |
+| OPS1 | P10 ACL · no cross-call OA · allowlist revue · e2e I1–I6 · anti SC-12 · **isolation frontière avant retrait** (D04) |
 | Cutover | P03–P11 + F09 · RUN/rollback P23 · GO niveau D |
+| Candidats D03 | preuves complémentaires avant retrait effectif (orphan select · Gate/route DOC ONLY · archives) |
 
 ## 2. Stop conditions (héritage T-A7 + Wave 1)
 
@@ -26,6 +29,8 @@
 | W1-S1 | inventaire traité comme autorisation retrait | STOP · anti-claim |
 | W1-S2 | F03/F11/F13 consommées sans bulletin | STOP |
 | W1-S3 | vague 1 présentée comme T-A7 OPEN | STOP |
+| W1-S4 | préparation technique de retrait **sans** contenu F03/F11/F13 décidé | STOP (D05) |
+| W1-S5 | retrait sans isolation OPS1 définie | STOP (D04) |
 | A52 | B5 STOP BEFORE DELIVERY | inchangé |
 | A52-D03 | `.1` avant real Critical | inchangé |
 
@@ -43,9 +48,11 @@
 
 ## 4. Liens F
 
-| F | Rôle Wave 1 | Statut |
-|---|-------------|--------|
-| F03 | préconditions delivery / inventaire legacy | `NOT DECIDED` |
-| F11 | API/UI avant cutover (badges/surfaces) | `NOT DECIDED` |
-| F13 | historique RO + isolation OPS1 (P10–P11) | `NOT DECIDED` |
-| F08–F10 | hors vague 1 (calendrier D05 seulement) | contenu `NOT DECIDED` |
+| F | Rôle Wave 1 | Statut contenu | Gate (D05) |
+|---|-------------|----------------|------------|
+| F03 | préconditions delivery / inventaire legacy | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
+| F11 | API/UI avant cutover (badges/surfaces) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
+| F13 | historique RO + isolation OPS1 (P10–P11) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
+| F08–F10 | hors vague 1 (calendrier T-A7-D05) | contenu `NOT DECIDED` | — |
+
+**Anti-claim :** obligation d’arbitrer F03/F11/F13 avant prep technique ≠ contenu F déjà décidé.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md
index 9fbd229..37878b4 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md
@@ -2,11 +2,13 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
-| **Aucune option auto-sélectionnée** | oui |
+| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
+| **Gate d’enregistrement** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — … — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 18:50:00 CEST (+0200) |
 | **T-A7** | `NOT OPEN` |
 | **Vague 1 technique** | **non ouverte** |
-| **F03 / F11 / F13** | `NOT DECIDED` |
+| **F03 / F11 / F13 (contenu)** | `NOT DECIDED` |
+| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
 
 ---
 
@@ -21,9 +23,19 @@
 | .3 | Inventaire + isolation préalable candidate (W1-C) |
 | .4 | Autre / différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (W1-B).
+**Choix Morris :** `.2` — `W1-B — INVENTORY PLUS CANDIDATE REMOVAL PLAN`
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Effet autorisé :**
+
+- préparer un **plan documentaire candidat** de retrait et d’isolation ;
+- définir séquences, validations, rollback et gates (doc only).
+
+**Anti-claims :**
+
+- W1-B adopté ≠ préparation technique autorisée ;
+- plan candidat ≠ retrait autorisé.
 
 ---
 
@@ -31,18 +43,18 @@
 
 **Question :** Quels blocs sont confirmés **actifs** (évidence) ?
 
-| Option | Description |
-|--------|-------------|
-| .1 | MethodMode D1 + prompts/`method` core + OPS1 runtime/allowlist (recommandé comme socle minimal évidencé) |
-| .2 | Étendre à tout `method/documentation` comme actif |
-| .3 | Restreindre à MethodMode D1 seulement |
-| .4 | Custom / investigation complémentaire obligatoire avant claim |
+**Choix Morris :** confirmer comme actifs :
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1**.
+1. MethodMode dans D1 ;
+2. le trio exact référencé dans `SFIA_CANONICAL_CORE_PATHS` ;
+3. les consommateurs de `method/**` via prompts · loader canonique · OPS1 path-policy / allowlist.
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
 
-**Anti-claim :** choisir .1 ≠ autoriser retrait.
+**Anti-claims :**
+
+- actif confirmé ≠ composant à conserver définitivement ;
+- actif confirmé ≠ architecture cible.
 
 ---
 
@@ -50,17 +62,19 @@
 
 **Question :** Quels blocs sont **candidats** au retrait futur (pas maintenant) ?
 
-| Option | Description |
-|--------|-------------|
-| .1 | MethodMode hors OA + lectures `method/**` produit OA + badges v2.6 OA (P07–P09) — après preuves |
-| .2 | Inclure archive `method/**/archive` en priorité basse |
-| .3 | Inclure retrait OPS1 runtime (au-delà isolation) |
-| .4 | Aucun candidat tant que P03–P11 non inventoriés finement |
-| .5 | Custom |
+**Choix Morris :** classer comme candidats au retrait futur :
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (+ .2 optionnel).
+1. `actionSelectMethodMode` orpheline ;
+2. MethodModeGate et route qualifiés `DOCUMENTATION ONLY` ;
+3. archives et duplications non canoniques identifiées.
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Statut :** `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES`
+
+**Anti-claims :**
+
+- candidat au retrait ≠ suppression décidée ;
+- aucune suppression ou modification n’est autorisée dans ce cycle d’enregistrement ;
+- une preuve complémentaire reste obligatoire avant retrait effectif.
 
 ---
 
@@ -68,17 +82,20 @@
 
 **Question :** Quel traitement pour OPS1 ?
 
-| Option | Description |
-|--------|-------------|
-| .1 | Conserver POC + renforcer isolation (boundaries) |
-| .2 | Isoler (ACL/historique RO) sans retrait |
-| .3 | Migrer allowlist / canonical coupling hors `method/` |
-| .4 | Retrait futur (GO produit distinct) |
-| .5 | Investigation complémentaire avant toute option |
+**Choix Morris :** `ISOLATE OPS1 BEFORE ANY REMOVAL`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Effet :**
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (aligné P10–P11 / F13).
+- toute trajectoire future de retrait doit d’abord définir une frontière d’isolation OPS1 ;
+- conserver explicitement path-policy ≠ IAM ;
+- tenir compte du couplage CT/D1.
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Anti-claims :**
+
+- isolation décidée comme trajectoire ≠ isolation implémentée ;
+- aucune modification OPS1 autorisée maintenant.
 
 ---
 
@@ -86,43 +103,54 @@
 
 **Question :** Quand consommer le **contenu** de F03 / F11 / F13 ?
 
-| Option | Description |
-|--------|-------------|
-| .1 | Immédiatement après ce framing (bulletin dédié) |
-| .2 | F13 (OPS1/historique) avant F03 ; F11 avec surfaces UI cutover |
-| .3 | Selon T-A7-D05 : F au point de risque (F03 avant delivery prep/delivery selon bulletin ; F11 avant cutover UI ; F13 avant isolation/historique) |
-| .4 | Différer tout F jusqu’à vague 4 delivery readiness |
-| .5 | Custom |
+**Choix Morris :** `DECIDE F03 F11 AND F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION`
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.3** (cohérent T-A7-D05 ; **sans** consommer ici).
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Effet :**
+
+- F03, F11 et F13 deviennent des **gates obligatoires** avant toute préparation technique de retrait ;
+- leur **contenu** reste à arbitrer séparément.
+
+**Anti-claims :**
+
+- calendrier / obligation d’arbitrage décidé ≠ contenu F décidé ;
+- F03 / F11 / F13 restent `NOT DECIDED` (contenu).
 
 ---
 
-## Bulletin Morris vierge
+## Bulletin Morris consommé (enregistrement)
 
 ```
-GO DECIDE T-A7 OPTION C WAVE 1 — T-A7-W1-D01=… — T-A7-W1-D02=… — T-A7-W1-D03=… — T-A7-W1-D04=… — T-A7-W1-D05=… — SFIA STUDIO V3-NATIVE — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — W1-D02=CONFIRM ACTIVE LEGACY BLOCKS — W1-D03=CONFIRM FUTURE REMOVAL CANDIDATES WITHOUT AUTHORIZING REMOVAL — W1-D04=ISOLATE OPS1 BEFORE ANY REMOVAL — W1-D05=DECIDE F03 F11 F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
 ```
 
-**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.
+**Statut GO :** `CONSUMED — DECISIONS RECORDED` (enregistrement documentaire uniquement).
+
+## Synthèse décisions
+
+| ID | Choix | Statut |
+|----|-------|--------|
+| T-A7-W1-D01 | W1-B (`.2`) | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D02 | actifs D1 MethodMode + trio canonical + consumers method | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D03 | orphan select · MethodModeGate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
+| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D05 | decide F03/F11/F13 before technical removal prep | `DECIDED — ADOPTED BY MORRIS` |
+| W1-B | adopté via D01 | `DECIDED — ADOPTED BY MORRIS` |
 
-## Synthèse recommandations (non décisionnelles)
+## Séquencement futur (documentaire — non exécuté)
 
-| ID | Option | Label |
-|----|--------|-------|
-| T-A7-W1-D01 | .2 | `RECOMMENDED — NOT DECIDED` |
-| T-A7-W1-D02 | .1 | `RECOMMENDED — NOT DECIDED` |
-| T-A7-W1-D03 | .1 | `RECOMMENDED — NOT DECIDED` |
-| T-A7-W1-D04 | .2 | `RECOMMENDED — NOT DECIDED` |
-| T-A7-W1-D05 | .3 | `RECOMMENDED — NOT DECIDED` |
+1. Plan candidat W1-B (séquences / validations / rollback / gates) — **doc only** · gate Morris distinct.
+2. Isolation OPS1 (frontière) **avant** tout retrait — D04 · **pas** implémentée ici.
+3. Arbitrage **contenu** F03 / F11 / F13 **avant** toute préparation technique de retrait — D05 · contenu encore `NOT DECIDED`.
+4. Preuves complémentaires avant retrait effectif des candidats D03.
+5. Aucune ouverture T-A7 · aucune delivery preparation / delivery / cutover.
 
 ## Garde-fous
 
-- Option C adoptée · vague 1 = doc only
+- Option C adoptée · vague 1 = doc only (inventaire + décisions enregistrées)
 - T-A7 `NOT OPEN` · delivery/cutover `NOT AUTHORIZED`
 - B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
-- F03/F11/F13 `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
+- F03/F11/F13 contenu `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
 - T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
 - persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md
index 025599e..e165e36 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md
@@ -2,72 +2,68 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Gate consommé** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — READ-ONLY DOCUMENTARY FRAMING — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
-| **Date/heure/fuseau** | 2026-07-28 14:39:41 CEST (+0200) |
-| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
-| **Base** | `origin/main` @ `7a3e512f562f480c345a12a744806aa4f2ef625b` |
-| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
-| **Worktree local** | `sfia-workspace-t-a7-wave-1-legacy-scope` (hors path absolu) |
+| **Gate inventaire (historique)** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — … — KEEP T-A7 NOT OPEN` |
+| **Gate décisions (consommé)** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — … — KEEP T-A7 NOT OPEN` |
+| **Date inventaire** | 2026-07-28 14:39:41 CEST (+0200) |
+| **Date décisions** | 2026-07-28 18:50:00 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 9 · 13 · 14) · Critical |
+| **Base** | `origin/main` @ `7746ea293ed1fe13d7c515ebf9962ebdd9b71a9a` |
+| **Branche locale** | `record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions` |
+| **Worktree local** | `sfia-workspace-t-a7-wave-1-decisions` (hors path absolu) |
 | **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague technique ouverte** |
-| **Vague 1** | **cadrage documentaire uniquement** (inventaire) |
+| **Vague 1** | inventaire + **décisions W1-D01…D05 enregistrées** · **pas** de vague technique |
+| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
 | **T-A7** | `NOT OPEN` |
 | **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
-| **F03 / F11 / F13** | `NOT DECIDED` (préparés, non consommés) |
+| **F03 / F11 / F13** | contenu `NOT DECIDED` · **gates obligatoires** avant prep technique retrait (W1-D05) |
 | **F08 / F09 / F10** | calendrier décidé (T-A7-D05) · contenu `NOT DECIDED` |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **R-T-A3-1 / R-T-A3-2** | `OPEN HARD` |
 | **T-A6 COMPLETE** | `NOT DECLARED` |
 | **Option A** | `NOT COMPLETE` |
 | **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
-| **Push / PR** | **aucun** |
-| **Enrichissement post-inventaire** | subagents MethodMode / `method/**` / OPS1 — preuves `canonicalPaths` · dual enum · orphan select · CT/D1 coupling |
 
 ## Objectif
 
-Produire un inventaire documentaire exploitable de MethodMode, de `method/**`, d’OPS1 et de leurs dépendances, afin de préparer les arbitrages futurs F03 / F11 / F13 **sans** modifier ces composants et **sans** ouvrir T-A7.
+Inventorier MethodMode, `method/**` et OPS1, puis **enregistrer** les décisions Morris T-A7-W1-D01…D05 **sans** préparation technique, **sans** consommer le contenu F03/F11/F13, et **sans** ouvrir T-A7.
 
 ## Périmètre
 
-- inventaire MethodMode (runtime D1, UI, tests, docs) ;
-- inventaire `method/**` (structure, consommateurs, candidats) ;
-- inventaire OPS1 (docs, runtime `app/lib/ops1`, allowlist, ACL/frontières) ;
-- carte de dépendances et frontières de scope T-A7 ;
-- options W1-A/B/C · validations / rollback / stops ;
-- bulletin Morris T-A7-W1-D01…D05 (`MORRIS DECISION REQUIRED`).
+- inventaire MethodMode / `method/**` / OPS1 (PR #283) ;
+- enregistrement W1-D01…D05 · W1-B adopté ;
+- séquencement documentaire futur · stops D04/D05 ;
+- hors : exécution technique · retrait · isolation code · delivery/cutover.
 
 ## Hors périmètre
 
-- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests applicatifs · CI ;
+- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests · CI ;
+- plan technique exécutable · préparation technique de retrait ;
 - ouverture technique de vague · T-A7 B/C/D ;
 - delivery preparation / delivery / cutover ;
-- fermeture de réserves · consommation F03/F08–F13 ;
+- fermeture de réserves · consommation **contenu** F03/F08–F13 ;
 - sélection persistence / IAM · déclaration COMPLETE.
 
 ## Sources principales
 
 | Source | Rôle |
 |--------|------|
-| Pack T-A7 next-step (PR #282) | Option C · D01–D05 · vague 1 = legacy/périmètre |
-| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC-02…SC-05 · F03/F11/F13 |
-| Code `app/lib/d1` · `app/features/d1` | MethodMode ACTIVE |
-| Code `app/lib/ops1` · `app/features/ops1` | OPS1 ACTIVE + allowlist `method/` |
-| Arbre `method/` | méthode Fast Track + complementary |
+| Pack Wave 1 sur main (PR #283) | inventaires + options + bulletin |
+| Pack T-A7 next-step (PR #282) | Option C · D01–D05 |
+| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC · F03/F11/F13 |
+| Handoff post-merge PR #283 | preuve integration inventaire |
 | Template SFIA cycle | méthode d’exécution |
 
 ## Livrables
 
 | Fichier | Rôle |
 |---------|------|
-| `01-source-truth-and-scope.md` | Base Git · recherches · in/out scope |
-| `02-methodmode-inventory.md` | Inventaire MethodMode |
-| `03-method-directory-inventory.md` | Inventaire `method/**` |
-| `04-ops1-boundary-assessment.md` | OPS1 frontières |
-| `05-dependency-map.md` | Carte de dépendances |
-| `06-removal-and-isolation-options.md` | Options W1-A/B/C |
-| `07-validation-rollback-and-stop-conditions.md` | Preuves · stops |
-| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 |
+| `01`–`05` | Inventaires / dépendances (inchangés ce cycle) |
+| `06-removal-and-isolation-options.md` | W1-B adopté |
+| `07-validation-rollback-and-stop-conditions.md` | stops D04/D05 · F gates |
+| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 **enregistrées** |
+| `README.md` | synthèse · verdict · gate suivant |
 
-## Décisions existantes (rappel)
+## Décisions T-A7 (rappel)
 
 | ID | Choix | Statut |
 |----|-------|--------|
@@ -77,28 +73,32 @@ Produire un inventaire documentaire exploitable de MethodMode, de `method/**`, d
 | T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
 | T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
 
-## Décisions futures (ce pack)
+## Décisions Wave 1 (ce cycle)
 
-T-A7-W1-D01…D05 — toutes `MORRIS DECISION REQUIRED` — **aucune présélection**.
+| ID | Choix | Statut |
+|----|-------|--------|
+| T-A7-W1-D01 | W1-B — inventory + candidate removal plan | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D02 | actifs : MethodMode D1 · trio `SFIA_CANONICAL_CORE_PATHS` · consumers method | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D03 | candidats futurs : orphan select · Gate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
+| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-W1-D05 | decide F03/F11/F13 before any technical removal preparation | `DECIDED — ADOPTED BY MORRIS` |
 
 ## Anti-claims
 
-- cadrage de vague ≠ vague technique ouverte
-- inventaire ≠ autorisation de retrait
-- candidat au retrait ≠ décision de suppression
-- référence trouvée ≠ usage actif
-- absence de référence ≠ preuve de non-usage
-- Option C adoptée ≠ exécution lancée
-- F préparée ≠ F consommée
-- rollback documenté ≠ rollback validé
-- T-A7 framing ≠ T-A7 OPEN
+- W1-B adopté ≠ préparation technique autorisée
+- plan candidat ≠ retrait autorisé
+- actif confirmé ≠ architecture cible / conservation définitive
+- candidat au retrait ≠ suppression décidée
+- isolation OPS1 décidée ≠ isolation implémentée
+- obligation F03/F11/F13 ≠ contenu F décidé
+- T-A7 framing / décisions Wave 1 ≠ T-A7 OPEN
 
 ## Verdict
 
-`T-A7 OPTION C WAVE 1 LEGACY AND SCOPE FRAMING COMPLETED — METHODMODE METHOD DIRECTORY AND OPS1 INVENTORIED — DEPENDENCIES AND FUTURE REMOVAL OPTIONS DOCUMENTED — MORRIS DECISIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — TECHNICAL RESERVES REMAIN OPEN — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
+`T-A7 OPTION C WAVE 1 MORRIS DECISIONS RECORDED — W1-D01 W1-B ADOPTED — ACTIVE LEGACY BLOCKS CONFIRMED — FUTURE REMOVAL CANDIDATES CONFIRMED WITHOUT AUTHORIZING REMOVAL — OPS1 ISOLATION REQUIRED BEFORE ANY REMOVAL — F03 F11 AND F13 REQUIRED BEFORE ANY TECHNICAL REMOVAL PREPARATION WHILE CONTENT REMAINS NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED`
 
 ## Gate candidat suivant
 
-`GO REVIEW AND INTEGRATE T-A7 OPTION C WAVE 1 LEGACY SCOPE FRAMING — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+`GO FRAME T-A7 OPTION C WAVE 1 CANDIDATE REMOVAL PLAN — DOCUMENTARY W1-B SEQUENCES VALIDATIONS ROLLBACK AND GATES ONLY — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONTENT CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
 
 **Statut :** `NOT CONSUMED`
```

---

## Contenu complet des fichiers modifiés (main)


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md`

```markdown
# T-A7 Option C — Wave 1 Framing — Legacy and Scope Inventory

| Champ | Valeur |
|-------|--------|
| **Gate inventaire (historique)** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — … — KEEP T-A7 NOT OPEN` |
| **Gate décisions (consommé)** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — … — KEEP T-A7 NOT OPEN` |
| **Date inventaire** | 2026-07-28 14:39:41 CEST (+0200) |
| **Date décisions** | 2026-07-28 18:50:00 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 9 · 13 · 14) · Critical |
| **Base** | `origin/main` @ `7746ea293ed1fe13d7c515ebf9962ebdd9b71a9a` |
| **Branche locale** | `record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions` |
| **Worktree local** | `sfia-workspace-t-a7-wave-1-decisions` (hors path absolu) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague technique ouverte** |
| **Vague 1** | inventaire + **décisions W1-D01…D05 enregistrées** · **pas** de vague technique |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | contenu `NOT DECIDED` · **gates obligatoires** avant prep technique retrait (W1-D05) |
| **F08 / F09 / F10** | calendrier décidé (T-A7-D05) · contenu `NOT DECIDED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **R-T-A3-1 / R-T-A3-2** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

## Objectif

Inventorier MethodMode, `method/**` et OPS1, puis **enregistrer** les décisions Morris T-A7-W1-D01…D05 **sans** préparation technique, **sans** consommer le contenu F03/F11/F13, et **sans** ouvrir T-A7.

## Périmètre

- inventaire MethodMode / `method/**` / OPS1 (PR #283) ;
- enregistrement W1-D01…D05 · W1-B adopté ;
- séquencement documentaire futur · stops D04/D05 ;
- hors : exécution technique · retrait · isolation code · delivery/cutover.

## Hors périmètre

- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests · CI ;
- plan technique exécutable · préparation technique de retrait ;
- ouverture technique de vague · T-A7 B/C/D ;
- delivery preparation / delivery / cutover ;
- fermeture de réserves · consommation **contenu** F03/F08–F13 ;
- sélection persistence / IAM · déclaration COMPLETE.

## Sources principales

| Source | Rôle |
|--------|------|
| Pack Wave 1 sur main (PR #283) | inventaires + options + bulletin |
| Pack T-A7 next-step (PR #282) | Option C · D01–D05 |
| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC · F03/F11/F13 |
| Handoff post-merge PR #283 | preuve integration inventaire |
| Template SFIA cycle | méthode d’exécution |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01`–`05` | Inventaires / dépendances (inchangés ce cycle) |
| `06-removal-and-isolation-options.md` | W1-B adopté |
| `07-validation-rollback-and-stop-conditions.md` | stops D04/D05 · F gates |
| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 **enregistrées** |
| `README.md` | synthèse · verdict · gate suivant |

## Décisions T-A7 (rappel)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` Option C | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Décisions Wave 1 (ce cycle)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-W1-D01 | W1-B — inventory + candidate removal plan | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D02 | actifs : MethodMode D1 · trio `SFIA_CANONICAL_CORE_PATHS` · consumers method | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D03 | candidats futurs : orphan select · Gate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D05 | decide F03/F11/F13 before any technical removal preparation | `DECIDED — ADOPTED BY MORRIS` |

## Anti-claims

- W1-B adopté ≠ préparation technique autorisée
- plan candidat ≠ retrait autorisé
- actif confirmé ≠ architecture cible / conservation définitive
- candidat au retrait ≠ suppression décidée
- isolation OPS1 décidée ≠ isolation implémentée
- obligation F03/F11/F13 ≠ contenu F décidé
- T-A7 framing / décisions Wave 1 ≠ T-A7 OPEN

## Verdict

`T-A7 OPTION C WAVE 1 MORRIS DECISIONS RECORDED — W1-D01 W1-B ADOPTED — ACTIVE LEGACY BLOCKS CONFIRMED — FUTURE REMOVAL CANDIDATES CONFIRMED WITHOUT AUTHORIZING REMOVAL — OPS1 ISOLATION REQUIRED BEFORE ANY REMOVAL — F03 F11 AND F13 REQUIRED BEFORE ANY TECHNICAL REMOVAL PREPARATION WHILE CONTENT REMAINS NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED`

## Gate candidat suivant

`GO FRAME T-A7 OPTION C WAVE 1 CANDIDATE REMOVAL PLAN — DOCUMENTARY W1-B SEQUENCES VALIDATIONS ROLLBACK AND GATES ONLY — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONTENT CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md`

```markdown
# 06 — Removal and isolation options (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Nature** | options historisées · **W1-B adopté** (T-A7-W1-D01) |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
| **F03 / F11 / F13 (contenu)** | `NOT DECIDED` |
| **Préparation technique** | `NOT AUTHORIZED` |

## Option W1-A — Inventaire seulement

**Idée :** figer la vérité et les dépendances (ce pack) ; aucun plan détaillé de retrait.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | risque minimal · conforme gate read-only · base pour Morris |
| Risques | laisse F03/F11/F13 sans séquence opérationnelle |
| Dette | rework plan dans un cycle suivant |
| Coût / complexité | bas |
| Réversibilité | totale |
| Impact tests/CI/sécu/RUN | nul (doc only) |
| F concernées | préparation seulement |
| Stops | T-A7 NOT OPEN · no method/OPS1 mod |

## Option W1-B — Inventaire + plan de retrait candidat — **ADOPTÉE**

**Idée :** ajouter séquences candidates (MethodMode → remplacements OA → CI boundary → OPS1 isolation → historique RO) avec rollback papier.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | accélère F03 ; aligne P03–P11 |
| Risques | plan pris pour autorisation ; sous-estime HARD A5.2 |
| Dette | plans obsolètes si runtime change |
| Coût / complexité | moyen |
| Réversibilité | haute (doc) |
| Impact tests/CI | design de tests candidats seulement |
| F | F03/F11/F13 gates avant prep technique (D05) · contenu futurs |
| Stops | SC-02…05 · STOP BEFORE DELIVERY · D04 isolation OPS1 d’abord |

**Statut :** `DECIDED — ADOPTED BY MORRIS` (via T-A7-W1-D01).

**Effet autorisé maintenant :** plan documentaire candidat uniquement (séquences, validations, rollback, gates) — **pas** d’exécution technique.

## Option W1-C — Inventaire + isolation préalable candidate

**Idée :** prioriser façades / boundaries (allowlist, import CI, anti cross-call OPS1/OA/D1) **avant** tout retrait.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | réduit risque double identité · compatible SC-03/SC-12 |
| Risques | isolation présentée comme cutover ; travail technique anticipé sans GO |
| Dette | wrappers temporaires (déjà notés platform/OPS1) |
| Coût / complexité | moyen–haut (si exécuté plus tard) |
| Réversibilité | moyenne une fois code touché (**hors ce cycle**) |
| Impact sécu | positif si bien borné |
| F | F13 en tête · F03 ensuite |
| Stops | aucune mod code dans Wave 1 framing |

**Note :** D04 impose l’isolation OPS1 **avant tout retrait** comme trajectoire ; cela **n’adopte pas** W1-C comme niveau de cadrage (W1-B reste le choix D01) et **n’autorise pas** l’implémentation.

## Challenge (historique)

| Question | W1-A | W1-B | W1-C |
|----------|------|------|------|
| Utile maintenant ? | **oui** | oui si Morris veut séquence | oui si priorise sécu OPS1 |
| Réduit risque cutover ? | partiel | mieux | mieux sur isolation |
| Crée dette doc ? | faible | moyenne | moyenne |
| Plus simple ? | **oui** | non | non |
| Préparable sans ouvrir T-A7 ? | **oui** | oui (doc) | oui (doc only ici) |
| Respecte STOP BEFORE DELIVERY / `.1` ? | oui | oui | oui |

## Décision

`DECIDED — ADOPTED BY MORRIS` → **W1-B**.

**Anti-claims :** W1-B adopté ≠ préparation technique autorisée · plan candidat ≠ retrait autorisé · isolation OPS1 (D04) ≠ isolation implémentée.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md`

```markdown
# 07 — Validation, rollback and stop conditions

| Champ | Valeur |
|-------|--------|
| **Nature** | exigences **futures** · aucune validation exécutée ici |
| **Rollback** | documenté ≠ validé |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
| **Prep technique retrait** | bloquée tant que F03/F11/F13 contenu `NOT DECIDED` (T-A7-W1-D05) |

## 1. Preuves avant modification future

| Domaine | Preuves minimales |
|---------|-------------------|
| MethodMode | inventaire UI/API/DB · tests D1 verts · plan remplacement OA session (P06/P07) · hold flag |
| `method/**` | diff path filter · consommateurs prompts/OPS1 mis à jour · P08/P24 CI boundary |
| OPS1 | P10 ACL · no cross-call OA · allowlist revue · e2e I1–I6 · anti SC-12 · **isolation frontière avant retrait** (D04) |
| Cutover | P03–P11 + F09 · RUN/rollback P23 · GO niveau D |
| Candidats D03 | preuves complémentaires avant retrait effectif (orphan select · Gate/route DOC ONLY · archives) |

## 2. Stop conditions (héritage T-A7 + Wave 1)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP merge/cycle |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP cutover |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP recentrage |
| W1-S1 | inventaire traité comme autorisation retrait | STOP · anti-claim |
| W1-S2 | F03/F11/F13 consommées sans bulletin | STOP |
| W1-S3 | vague 1 présentée comme T-A7 OPEN | STOP |
| W1-S4 | préparation technique de retrait **sans** contenu F03/F11/F13 décidé | STOP (D05) |
| W1-S5 | retrait sans isolation OPS1 définie | STOP (D04) |
| A52 | B5 STOP BEFORE DELIVERY | inchangé |
| A52-D03 | `.1` avant real Critical | inchangé |

## 3. Rollback (candidat documentaire)

| Couche | Mécanisme candidat |
|--------|--------------------|
| Git | revert merge/commits pack ou code futur |
| Feature/hold | hold flags cutover (P07–P09) |
| ACL | restore allowlist / ruleset |
| Data D1 | backup SQLite avant migration method_mode |
| OPS1 local | `.sfia-exec` hors Git — procédures locales |

**Anti-claim :** rollback documenté ≠ rollback testé runtime.

## 4. Liens F

| F | Rôle Wave 1 | Statut contenu | Gate (D05) |
|---|-------------|----------------|------------|
| F03 | préconditions delivery / inventaire legacy | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F11 | API/UI avant cutover (badges/surfaces) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F13 | historique RO + isolation OPS1 (P10–P11) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F08–F10 | hors vague 1 (calendrier T-A7-D05) | contenu `NOT DECIDED` | — |

**Anti-claim :** obligation d’arbitrer F03/F11/F13 avant prep technique ≠ contenu F déjà décidé.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md`

```markdown
# 08 — Morris decision pack (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
| **Gate d’enregistrement** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — … — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 18:50:00 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Vague 1 technique** | **non ouverte** |
| **F03 / F11 / F13 (contenu)** | `NOT DECIDED` |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |

---

## T-A7-W1-D01 — Niveau de cadrage suite

**Question :** Quel niveau retenir pour la suite de la vague 1 ?

| Option | Description |
|--------|-------------|
| .1 | Inventaire seulement (W1-A) — vérité figée |
| .2 | Inventaire + plan de retrait candidat (W1-B) |
| .3 | Inventaire + isolation préalable candidate (W1-C) |
| .4 | Autre / différer |

**Choix Morris :** `.2` — `W1-B — INVENTORY PLUS CANDIDATE REMOVAL PLAN`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet autorisé :**

- préparer un **plan documentaire candidat** de retrait et d’isolation ;
- définir séquences, validations, rollback et gates (doc only).

**Anti-claims :**

- W1-B adopté ≠ préparation technique autorisée ;
- plan candidat ≠ retrait autorisé.

---

## T-A7-W1-D02 — Blocs legacy confirmés actifs

**Question :** Quels blocs sont confirmés **actifs** (évidence) ?

**Choix Morris :** confirmer comme actifs :

1. MethodMode dans D1 ;
2. le trio exact référencé dans `SFIA_CANONICAL_CORE_PATHS` ;
3. les consommateurs de `method/**` via prompts · loader canonique · OPS1 path-policy / allowlist.

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Anti-claims :**

- actif confirmé ≠ composant à conserver définitivement ;
- actif confirmé ≠ architecture cible.

---

## T-A7-W1-D03 — Candidats au retrait futur

**Question :** Quels blocs sont **candidats** au retrait futur (pas maintenant) ?

**Choix Morris :** classer comme candidats au retrait futur :

1. `actionSelectMethodMode` orpheline ;
2. MethodModeGate et route qualifiés `DOCUMENTATION ONLY` ;
3. archives et duplications non canoniques identifiées.

**Statut :** `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES`

**Anti-claims :**

- candidat au retrait ≠ suppression décidée ;
- aucune suppression ou modification n’est autorisée dans ce cycle d’enregistrement ;
- une preuve complémentaire reste obligatoire avant retrait effectif.

---

## T-A7-W1-D04 — Traitement OPS1

**Question :** Quel traitement pour OPS1 ?

**Choix Morris :** `ISOLATE OPS1 BEFORE ANY REMOVAL`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet :**

- toute trajectoire future de retrait doit d’abord définir une frontière d’isolation OPS1 ;
- conserver explicitement path-policy ≠ IAM ;
- tenir compte du couplage CT/D1.

**Anti-claims :**

- isolation décidée comme trajectoire ≠ isolation implémentée ;
- aucune modification OPS1 autorisée maintenant.

---

## T-A7-W1-D05 — Quand arbitrer F03, F11, F13 ?

**Question :** Quand consommer le **contenu** de F03 / F11 / F13 ?

**Choix Morris :** `DECIDE F03 F11 AND F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Effet :**

- F03, F11 et F13 deviennent des **gates obligatoires** avant toute préparation technique de retrait ;
- leur **contenu** reste à arbitrer séparément.

**Anti-claims :**

- calendrier / obligation d’arbitrage décidé ≠ contenu F décidé ;
- F03 / F11 / F13 restent `NOT DECIDED` (contenu).

---

## Bulletin Morris consommé (enregistrement)

```
GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — W1-D02=CONFIRM ACTIVE LEGACY BLOCKS — W1-D03=CONFIRM FUTURE REMOVAL CANDIDATES WITHOUT AUTHORIZING REMOVAL — W1-D04=ISOLATE OPS1 BEFORE ANY REMOVAL — W1-D05=DECIDE F03 F11 F13 BEFORE ANY TECHNICAL REMOVAL PREPARATION — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `CONSUMED — DECISIONS RECORDED` (enregistrement documentaire uniquement).

## Synthèse décisions

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-W1-D01 | W1-B (`.2`) | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D02 | actifs D1 MethodMode + trio canonical + consumers method | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D03 | orphan select · MethodModeGate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D05 | decide F03/F11/F13 before technical removal prep | `DECIDED — ADOPTED BY MORRIS` |
| W1-B | adopté via D01 | `DECIDED — ADOPTED BY MORRIS` |

## Séquencement futur (documentaire — non exécuté)

1. Plan candidat W1-B (séquences / validations / rollback / gates) — **doc only** · gate Morris distinct.
2. Isolation OPS1 (frontière) **avant** tout retrait — D04 · **pas** implémentée ici.
3. Arbitrage **contenu** F03 / F11 / F13 **avant** toute préparation technique de retrait — D05 · contenu encore `NOT DECIDED`.
4. Preuves complémentaires avant retrait effectif des candidats D03.
5. Aucune ouverture T-A7 · aucune delivery preparation / delivery / cutover.

## Garde-fous

- Option C adoptée · vague 1 = doc only (inventaire + décisions enregistrées)
- T-A7 `NOT OPEN` · delivery/cutover `NOT AUTHORIZED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- F03/F11/F13 contenu `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
```

