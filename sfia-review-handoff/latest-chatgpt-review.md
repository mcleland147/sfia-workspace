# ChatGPT Review Pack — FULL — T-A7 F03 / F11 / F13 Morris Decisions Recorded

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 19:27:39 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 3 · 6 · 9 · 10) · Critical |
| **Gate consommé** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Base** | `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **HEAD initial** | `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` |
| **Commit décisions** | `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6` |
| **Push projet** | **non** |

## Verdict exact

`T-A7 F03 F11 F13 MORRIS DECISIONS RECORDED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET ADOPTED — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI ADOPTED — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW ADOPTED — CROSS-DECISION COMBINATION ADOPTED — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

## Décisions

| ID | Choix | Libellé | Statut |
|----|-------|---------|--------|
| D-T-A7-F03 | F03.3 | CUSTOM INTERMEDIATE ENTRY PRECONDITION SET | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F11 | F11.2 | MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F13 | F13.4 | HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW | `DECIDED — ADOPTED BY MORRIS` |
| Combinaison | F03.3 × F11.2 × F13.4 | — | `DECIDED — ADOPTED BY MORRIS` |

**Non retenues :** F03.1/F03.2 · F11.1/F11.3/F11.4 · F13.1/F13.2/F13.3 (conservées en historique).

## Commit / blobs

| Champ | Valeur |
|-------|--------|
| SHA | `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6` |
| Parent | `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` |
| Tree | `9cf12ebe85101b602d932c1025b0a5215652e7be` |
| README | `989ac6963fc68dee144882800782c29557b86d71` |
| 02 | `2379118367a71163d179f214b4f8a8e406a1e5a3` |
| 03 | `6f03a45265c29b7dbfd8e8f0d0e327e0c7c748b4` |
| 04 | `32a1500fe3df06432e9c606500e4fc6f3e004504` |
| 05 | `a7b6d0daf413d3bafafb543d05664c61ee31d4ab` |
| 06 | `eb36a9681e2f8458307d58272181c4b8faefdad3` |
| 07 | `89f64c125a3cf613a3b8e8744d0be3b08cf34918` |
| Diff | 7 files · +275/−492 |

## Gouvernance

W1-B/D01–D05 inchangées · B5/R1/R-M01 OPEN · HARD OPEN HARD · T-A6 NOT DECLARED · Option A NOT COMPLETE · T-A7 NOT OPEN · delivery/cutover NOT AUTHORIZED · persistence/IAM NOT SELECTED · RGPD NOT VALIDATED

## Findings

0 / 0 / 0

## Actions non exécutées

push/PR/merge projet · prep technique · API/UI/runtime RO · migration · mod method/OPS1/MethodMode · ouverture T-A7 · delivery/cutover

## Gate candidat

`GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` — `NOT CONSUMED`

---

## Diff complet utile

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md
index be285f6..2379118 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md
@@ -3,128 +3,67 @@
 | Champ | Valeur |
 |-------|--------|
 | **Décision** | D-T-A7-F03 |
-| **Question** | Quelles préconditions sont **obligatoires** avant toute préparation technique de retrait / delivery T-A7 ? |
-| **Statut contenu** | `NOT DECIDED` |
-| **Reco** | `RECOMMENDED — NOT DECIDED` → **F03.3** |
+| **Choix** | **F03.3** — `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
 
-## Distinctions
+## Distinctions (normatives)
 
 | Niveau | Sens |
 |--------|------|
-| Avant **prep technique retrait** | contenu F03 (+ F11/F13 per W1-D05) décidé · inventaire/plan doc |
-| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques |
-| Avant **cutover** | + P03–P11 satisfaits ou explicitement gated · F09 · rollback/observabilité |
+| Avant **préparation technique** de retrait | set F03.3 satisfait ou explicitement borné par Morris · **F11 et F13 déjà décidées** (satisfait) |
+| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques selon bulletins |
+| Avant **cutover** | + P03–P11 selon F09 · surfaces F11 · historique F13 opérationnels |
+
+**Norme F03.3 :** la préparation technique de retrait reste **interdite** tant que le set intermédiaire suivant n’est pas satisfait ou explicitement borné par Morris :
+
+- inventaire legacy validé ;
+- dépendances actives confirmées ;
+- candidats au retrait identifiés ;
+- plan documentaire W1-B ;
+- matrice P03–P11 qualifiée ;
+- isolation OPS1 définie avant retrait ;
+- F11 décidée ;
+- F13 décidée ;
+- stratégie rollback documentée ;
+- preuves candidates de non-régression ;
+- anti-bypass des gates ;
+- aucun blocker HARD ignoré.
 
 ---
 
-## F03.1 — Set minimal
+## Options d’arbitrage (historique)
 
-**Idée :** set strictement nécessaire pour ouvrir un cadrage de prep **ultérieur**, sans exiger la satisfaction runtime de tout P03–P11.
+### F03.1 — Set minimal — **non retenue**
 
-### Contenu candidat obligatoire
+Set strictement nécessaire (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 · HARD non ignorés), sans matrice P* ni holds candidats explicites au niveau F03.3.
 
-| Élément | Obligatoire ? | Note |
-|---------|---------------|------|
-| Inventaire legacy validé (Wave 1) | **oui** | déjà sur main |
-| Dépendances actives confirmées (W1-D02) | **oui** | MethodMode · trio · consumers |
-| Candidats retrait identifiés (W1-D03) | **oui** | sans autoriser retrait |
-| Plan documentaire W1-B | **oui** | séquences/validations/rollback/gates doc |
-| Isolation OPS1 **définie** (D04) | **oui** (cadrage) | ≠ implémentée |
-| Stratégie rollback documentaire | **oui** | ≠ testée |
-| Preuves non-régression **candidates** | **oui** (liste) | ≠ exécutées |
-| F11 et F13 **décidées** (contenu) | **oui** (W1-D05) | avant prep |
-| Aucun blocker HARD **ignoré** | **oui** | B5/R1/HARD restent OPEN → documenter non-bypass |
+### F03.2 — Set maximal — **non retenue**
 
-### Différable / hors scope immédiat
+P03–P11 + preuves runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness — sur-cadrage pour une entrée prep.
 
-| Élément | Classement |
-|---------|------------|
-| Satisfaction runtime P07–P09 | différé (cutover / F11) |
-| IAM SELECTED | hors scope (NOT SELECTED) |
-| RUN readiness complète | différé delivery/cutover |
-| Volume DB mesuré | UNKNOWN → preuve à planifier |
+### F03.3 — Set custom intermédiaire — **ADOPTÉE**
 
-| Critère | Éval |
-|---------|------|
-| Bénéfices | proportionné · aligné W1-B · évite faux READY |
-| Risques | sous-estime dettes HARD / P* MISSING |
-| Dette | plan trop mince pour delivery |
-| Réversibilité | haute (doc) |
+F03.1 **+** matrice P03–P11 à jour · frontière OPS1 spécifiée (design) · preuves non-régression par surface · holds/rollback candidats documentés · anti-bypass B5/R1/HARD · F11+F13 décidées.
 
----
-
-## F03.2 — Set maximal
-
-**Idée :** toutes préconditions P03–P11 pertinentes + preuves runtime + tests détaillés + observabilité + sécu + données + IAM + rollback validable + RUN + cutover readiness documentaire.
-
-| Inclus en plus vs F03.1 | Risque |
-|-------------------------|--------|
-| P03–P05 preuves runtime | charge élevée ; P encore PARTIAL |
-| P06–P09 satisfaits | MethodMode/OA UI encore ACTIVE/MISSING |
-| P10–P11 appliqués | isolation/historique non implémentés |
-| IAM / RGPD prod | NOT SELECTED / NOT VALIDATED — bloquant |
-| HARD fermés | hors ce cycle |
-
-| Critère | Éval |
-|---------|------|
-| Bénéfices | filet maximal avant prep |
-| Risques | **sur-cadrage** · conflation F03 avec cutover complete |
-| Dette | documentaire + paralysie |
-| Réversibilité | moyenne (attentes figées) |
-
----
-
-## F03.3 — Set custom (intermédiaire) — **RECO**
-
-**Idée :** F03.1 **+** exigences explicites de **traçabilité** et de **non-conflation**, sans exiger satisfaction cutover.
-
-### Obligatoire (prep technique retrait)
-
-1. Tout F03.1.
-2. Matrice P03–P11 avec statut PARTIAL/MISSING **à jour** (pas de claim SATISFIED implicite).
-3. Frontière OPS1 **spécifiée** (path-policy · CT/D1 · anti SC-12) — design only.
-4. Liste preuves non-régression **par surface** (D1 MethodMode · canonical trio · OPS1 allowlist).
-5. Hold/rollback **candidats** documentés (P07–P09 concepts) sans implémentation.
-6. Contenu F11 + F13 **déjà décidés**.
-7. Déclaration : B5 / R1 / HARD **OPEN** → aucun bypass.
-
-### Avant delivery preparation (rappel — hors F03 seul)
-
-- Bulletin B5 / décisions HARD associées ;
-- persistence/IAM selon trajectoire produit (encore NOT SELECTED).
-
-### Avant cutover (rappel)
-
-- P03–P11 selon F09 + preuves runtime ;
-- F11 surfaces cutover satisfaites ;
-- F13 historique RO opérationnel.
-
-### Volontairement différé
+#### Volontairement différé (hors satisfaction F03 seule)
 
 | Élément | Pourquoi |
 |---------|----------|
 | Mesure volume DB | UNKNOWN — campagne dédiée |
 | IAM multi-user | NOT SELECTED |
-| UI OA product complete (A3.2) | distinct F11 cutover vs product |
+| UI OA product complete | distinct F11 cutover vs product |
 | Fermeture HARD | vagues Option C 2–4 |
+| Satisfaction runtime P07–P09 | cutover / implémentation ultérieure |
 
-| Critère | Éval |
-|---------|------|
-| Bénéfices | borné · compatible W1-B/D04/D05 · évite maximalisme |
-| Risques | encore une marge d’interprétation « prep » |
-| Dette | faible si gates clairs |
-| Réversibilité | haute |
-
-**Gates Morris associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.
+**Gates associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.
 
 ---
 
-## Synthèse F03
-
-| Option | Label reco |
-|--------|------------|
-| F03.1 | acceptable si Morris veut minimalisme |
-| F03.2 | trop lourd pour « entrée prep » |
-| F03.3 | `RECOMMENDED — NOT DECIDED` |
+## Anti-claims
 
-**Anti-claim :** F03.3 recommandé ≠ F03 décidé · F03 décidé ≠ delivery autorisée.
+- F03 décidée ≠ préconditions satisfaites
+- F03 décidée ≠ delivery preparation autorisée
+- F03.3 ≠ adoption du set maximal
+- matrice définie ≠ validation runtime
+- F03 décidée ≠ T-A7 OPEN · ≠ cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md
index 6286269..6f03a45 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md
@@ -3,108 +3,64 @@
 | Champ | Valeur |
 |-------|--------|
 | **Décision** | D-T-A7-F11 |
-| **Question** | Quelles exigences API/UI pour retrait legacy et cutover ? |
-| **Statut contenu** | `NOT DECIDED` |
-| **Reco** | `RECOMMENDED — NOT DECIDED` → **F11.2** |
+| **Choix** | **F11.2** — `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
 
-## Distinctions (obligatoires)
+## Distinctions (conservées)
 
-| Couche | Sens | État actuel |
-|--------|------|-------------|
-| API/UI **product complete** (A3.2) | produit OA utilisable | OA UI **MISSING** |
-| API/UI **retrait legacy** | opérer/observer retrait MethodMode/`method` | **MISSING** (hors badges D1) |
-| API/UI **avant cutover** | readiness · hold · audit cutover | **MISSING** |
-| UI **administration** | opérateurs / Morris | partiel D1/OPS1 existants ≠ cutover |
-| Surfaces **preuve / audit / rollback / monitoring** | preuves opérables | concepts doc · runtime limité |
+| Couche | Sens |
+|--------|------|
+| API/UI **product complete** (A3.2) | produit OA — **distinct** de F11 cutover |
+| API/UI **retrait legacy** / **avant cutover** | exigence F11.2 |
+| UI **administration** | **non obligatoire** à ce stade |
+| Mutations | **aucune** implicite · write = gate distinct futur |
 
-**Surfaces existantes (ne pas confondre avec F11 cutover) :** MethodModeBadge · cockpit D1 · OPS1 session/allowlist UI.
+## Contenu normatif F11.2 (adopté)
 
-**Mutations dans ce cycle :** **aucune**. Options = exigences **futures**.
+Avant tout futur cutover, une **API minimale de lecture et de readiness** devra être **définie puis validée**.
 
----
+Périmètre candidat décidé :
+
+- lecture de l’état MethodMode ;
+- lecture des dépendances et compatibilités legacy ;
+- statut de migration ;
+- health / readiness ;
+- exposition des holds et blockers ;
+- audit de lecture ;
+- **aucune** UI d’administration dédiée obligatoire à ce stade ;
+- **aucune** mutation implicite ;
+- toute commande future (write) devra disposer d’un **gate distinct**.
 
-## F11.1 — Aucune nouvelle surface avant cutover
-
-| Critère | Éval |
-|---------|------|
-| Usages | cutover via Git/docs/ops manuelles |
-| Utilisateurs | Morris / agents seulement |
-| Droits | L0 gates existants |
-| Données affichées | aucune nouvelle |
-| Mutations | interdites (status quo) |
-| Audit | logs Git/CI seulement |
-| Avantages | simplicité · peu de dette UI |
-| Risques | visibilité faible · rollback fragile · audit insuffisant · erreur humaine |
-| Accessibilité | N/A nouvelles surfaces |
-| Dette | dette **opérationnelle** |
-| Preuve readiness | difficile |
-| Impact cutover | élevé |
-| Réversibilité | haute (rien ajouté) |
+**Ce cycle n’autorise aucune implémentation API/UI.**
 
 ---
 
-## F11.2 — API opérationnelle minimale sans UI dédiée — **RECO**
-
-| Critère | Éval |
-|---------|------|
-| Usages | lecture état MethodMode · compat/dépendances · statut migration/hold · health/readiness |
-| Utilisateurs | automation · Morris via outils · CI candidats |
-| Droits | lecture bornée · **pas** IAM multi-user (NOT SELECTED) |
-| Données | mode projet · flags hold · digest/loader status · allowlist hits (agrégats) |
-| Mutations | **interdites** dans exigence minimale ; commandes write = gate ultérieur séparé |
-| Audit | événements lecture/écriture si write gated |
-| Sécurité | surface server-only · pas d’exposition publique |
-| Accessibilité | N/A UI |
-| Avantages | observabilité sans dette UI · aligne P07–P09 holds |
-| Risques | UX opérateur faible · tentation d’étendre write trop tôt |
-| Dette | API contracts à maintenir |
-| Preuve readiness | tests API candidats |
-| Impact cutover | réduit le risque « à l’aveugle » |
-| Réversibilité | moyenne (contrats) |
+## Options d’arbitrage (historique)
 
----
+### F11.1 — Aucune nouvelle surface — **non retenue**
 
-## F11.3 — API + UI minimale d’administration
-
-| Critère | Éval |
-|---------|------|
-| Usages | F11.2 + écrans : état legacy · compat · historique · statut OPS1 · readiness · rollback · audit · badges/warnings |
-| Utilisateurs | Morris · éventuels opérateurs futurs |
-| Droits | admin borné · ≠ IAM produit |
-| Données | + historique RO (dépend F13) · statut OPS1 |
-| Mutations | hold/rollback **candidats** seulement sous gate |
-| Audit | UI actions journalisées |
-| Sécurité | risque surface admin |
-| Accessibilité | WCAG candidat (exigence) |
-| Avantages | opérabilité humaine |
-| Risques | dette UX · conflation product UI vs cutover UI · SC-12 si OPS1 mal présenté |
-| Dette | haute |
-| Preuve readiness | e2e UI + API |
-| Impact cutover | positif si borné |
-| Réversibilité | basse une fois shippé |
+Simplicité · risque cutover aveugle / audit fragile.
 
----
+### F11.2 — API opérationnelle minimale sans UI — **ADOPTÉE**
 
-## F11.4 — Custom
+Observabilité gouvernée sans dette UI prématurée.
 
-**Proposition intermédiaire :** F11.2 **maintenant (exigence)** + **jalon UI admin optionnelle** seulement si cutover réel approche et F13.2/F13.4 l’exige — UI **hors** product OA A3.2.
+### F11.3 — API + UI admin — **non retenue (maintenant)**
 
-| Critère | Éval |
-|---------|------|
-| Bénéfices | évite UI prématurée · laisse porte ouverte |
-| Risques | ambiguïté de calendrier UI |
-| Dette | faible si jalon explicite |
-| Réversibilité | haute |
+Acceptable plus tard si cutover proche · dette UX élevée aujourd’hui.
 
----
+### F11.4 — Custom (API + UI jalonnée) — **non retenue**
+
+Proche de F11.2 ; Morris a tranché F11.2 strict (pas de jalon UI dans la décision).
 
-## Synthèse F11
+---
 
-| Option | Label |
-|--------|-------|
-| F11.1 | trop risqué pour cutover gouverné |
-| F11.2 | `RECOMMENDED — NOT DECIDED` |
-| F11.3 | acceptable plus tard / cutover proche |
-| F11.4 | acceptable alternative à F11.2 |
+## Anti-claims
 
-**Anti-claim :** F11.2 recommandé ≠ API implémentée · ≠ product complete A3.2 · ≠ retrait MethodMode.
+- API décidée comme exigence ≠ API implémentée
+- absence d’UI dédiée ≠ absence de visibilité
+- F11.2 ≠ autorisation de mutation
+- product complete API/UI ≠ cutover ready
+- read API ≠ IAM validé
+- F11 décidée ≠ prep technique / delivery / cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md
index fab5e9a..32a1500 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md
@@ -3,109 +3,56 @@
 | Champ | Valeur |
 |-------|--------|
 | **Décision** | D-T-A7-F13 |
-| **Question** | Comment conserver l’historique legacy en read-only et isoler OPS1 ? |
-| **Statut contenu** | `NOT DECIDED` |
-| **Reco** | `RECOMMENDED — NOT DECIDED` → **F13.4** |
-
-## Définitions
-
-| Terme | Périmètre candidat |
-|-------|-------------------|
-| **Historique legacy** | états/audit D1 liés MethodMode · artefacts `.sfia-exec` locaux · docs/archives `method/**` non canoniques · journaux OPS1 locaux |
-| **Données** | SQLite `method_mode` + audit events · fichiers state gitignored · markdown method |
-| **Chemins** | `app/lib/d1/**` (données) · `method/**` · `app/lib/ops1/**` · `.sfia-exec/**` |
-| **Consommateurs** | D1 UI · canonical loader · OPS1/CT · prompts · docs |
-| **Droits** | path-policy + gates Morris (**≠** IAM multi-user) |
-| **Mutations interdites (cible RO)** | update/delete historique · réactivation silencieuse MethodMode retiré · write `method/` hors gate |
-| **Durée** | **NOT DECIDED** — candidat : jusqu’à GO archive finale distinct |
-| **Frontière OPS1** | D04 : isolation **avant** retrait · POC ≠ Option A (SC-12) |
-| **Après retrait** | lectures RO seulement · pas d’autorité runtime cutover |
-| **Rollback** | restore ACL/allowlist · Git · backup DB · procédures locales `.sfia-exec` |
+| **Choix** | **F13.4** — `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
 
----
+## Contenu normatif F13.4 (adopté)
+
+La cible documentaire retenue combine :
 
-## F13.1 — Conservation in-place read-only
+- conservation **Git/documentaire** de la vérité historique ;
+- **vue runtime read-only bornée** pour support, audit et traçabilité ;
+- **isolation OPS1 préalable** à tout retrait (W1-D04) ;
+- **mutations historiques interdites** ;
+- journalisation des accès ;
+- frontière explicite **actif vs historique** ;
+- **path-policy distincte de l’IAM** ;
+- rollback documenté ;
+- durée de conservation à préciser dans un cycle distinct si nécessaire.
 
-Legacy reste en place ; mutations interdites par politique/tests.
+**Git reste source de vérité historique.** La vue RO n’est pas une source canonique concurrente.
 
-| Critère | Éval |
-|---------|------|
-| Périmètre | chemins actuels |
-| Accès | same surfaces ; deny writes |
-| Contrôle | path-policy + antiLegacy étendu |
-| Migration | minimale |
-| Avantages | simplicité |
-| Risques | confusion actif/historique · réactivation accidentelle |
-| Dette | structure legacy visible |
-| Durée | indéterminée |
-| Preuves | tests mutation deny |
-| Conditions retrait final | GO distinct |
+**Ce cycle n’autorise aucune implémentation de frontière runtime, migration, ni modification OPS1.**
 
 ---
 
-## F13.2 — Isolation dédiée read-only
+## Options d’arbitrage (historique)
 
-Frontière dédiée ultérieure : namespace · API lecture · ACL · journalisation · no mutation · dépendances actives isolées.
+### F13.1 — In-place read-only — **non retenue**
 
-| Critère | Éval |
-|---------|------|
-| Périmètre | store/API « legacy history » |
-| Accès | API RO bornée (lien F11.2/F11.3) |
-| Contrôle | ACL path + audit |
-| Migration | copie/move contrôlé |
-| Avantages | clarté · SC-12 · D04 |
-| Risques | coût · double écriture pendant transition |
-| Dette | service RO à maintenir |
-| Rollback | reverse migrate |
-| Preuves | e2e no-write · boundary tests |
-| Conditions retrait final | empty store + GO |
+Simple · risque confusion actif/historique.
 
----
+### F13.2 — Isolation dédiée RO — **non retenue (maintenant)**
 
-## F13.3 — Archive documentaire uniquement
+Cible forte possible plus tard · coût élevé pour l’instant.
 
-Git/docs seulement · **pas** d’exposition runtime.
+### F13.3 — Archive documentaire uniquement — **non retenue**
 
-| Critère | Éval |
-|---------|------|
-| Périmètre | repo markdown + history Git |
-| Accès | lecteurs Git |
-| Contrôle | Git permissions |
-| Avantages | très simple |
-| Risques | perte traçabilité produit · support runtime impossible · `.sfia-exec`/DB non couverts |
-| Dette | faible doc · **trou** opérationnel |
-| Preuves | tags Git |
-| Limites | **insuffisant seul** si D1/OPS1 restent |
+Insuffisante seule tant que D1/OPS1 restent actifs.
 
----
+### F13.4 — Hybrid — **ADOPTÉE**
 
-## F13.4 — Hybrid — **RECO**
-
-Archive Git/docs **+** vue/politique RO **bornée** runtime pour données encore nécessaires (MethodMode history · audit) · OPS1 isolé (D04) sans retrait forcé.
-
-| Critère | Éval |
-|---------|------|
-| Périmètre | Git archives `method` non-canon · RO DB/audit D1 · OPS1 path-policy renforcée |
-| Accès | F11.2 lecture · pas d’UI obligatoire |
-| Contrôle | path-policy ≠ IAM · gates |
-| Migration | progressive |
-| Avantages | couvre UNKNOWN volumes · compatible W1-D03/D04 · évite F13.3 trop faible et F13.2 trop tôt |
-| Risques | complexité hybride · discipline anti-réactivation |
-| Dette | moyenne |
-| Rollback | Git + backup DB + ACL |
-| Durée | jusqu’à GO archive finale |
-| Preuves | deny mutation · boundary OPS1 · inventaire allowlist |
-| Conditions retrait final | preuves + F03/F11 satisfaits + GO Morris |
+Archive Git + politique/vue RO bornée + OPS1 isolable.
 
 ---
 
-## Synthèse F13
-
-| Option | Label |
-|--------|-------|
-| F13.1 | acceptable court terme |
-| F13.2 | cible forte si cutover proche |
-| F13.3 | insuffisante seule |
-| F13.4 | `RECOMMENDED — NOT DECIDED` |
+## Anti-claims
 
-**Anti-claim :** F13.4 recommandé ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1.
+- F13.4 décidée ≠ frontière runtime implémentée
+- read-only documenté ≠ ACL validée
+- archive Git ≠ exposition produit suffisante à elle seule
+- vue read-only ≠ source canonique concurrente à Git
+- isolation OPS1 requise ≠ isolation réalisée
+- conservation ≠ maintien d’un usage actif
+- F13 décidée ≠ prep technique / delivery / cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md
index 553b3cf..a7b6d0d 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md
@@ -2,48 +2,36 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Nature** | matrice · **pas** une décision |
-| **Reco combinaison** | `RECOMMENDED — NOT DECIDED` → **F03.3 × F11.2 × F13.4** |
-
-## 1. Matrice (échantillon structurant)
-
-| F03 | F11 | F13 | Cohérence | Risque | Dette | Préconditions + |
-|-----|-----|-----|-----------|--------|-------|-----------------|
-| .1 | .1 | .3 | **faible** | cutover aveugle · historique runtime perdu | op. haute | preuves manuelles lourdes |
-| .1 | .2 | .1 | moyenne | confusion actif/historique | basse | deny-write tests |
-| .1 | .2 | .4 | **bonne** | sous-spécif. P* | basse–moy | matrice P à jour |
-| .3 | .2 | .4 | **forte** | discipline « prep » | moyenne | F11/F13 décidés · D04 design |
-| .3 | .3 | .2 | forte | dette UI précoce | haute | a11y · audit UI |
-| .3 | .3 | .4 | forte | sur-build UI | haute | jalon UI explicite |
-| .2 | .3 | .2 | **lourde** | conflation cutover-complete | très haute | IAM/HARD quasi requis |
-| .2 | .1 | .3 | **incohérente** | maximal F03 + aveugle F11 | — | — |
-| .1 | .3 | .3 | **tendue** | UI sans runtime history | — | — |
-| .3 | .4 | .4 | **bonne** | calendrier UI flou | basse | jalon cutover UI |
-
-## 2. Combinaisons
-
-| Type | Exemples |
-|------|----------|
-| **Cohérentes** | F03.3×F11.2×F13.4 · F03.3×F11.4×F13.4 · F03.1×F11.2×F13.1 |
-| **Incompatibles / tendues** | F03.2×F11.1×F13.3 · F11.3 sans F13 capable de fournir données RO · F13.3 seul si D1/OPS1 actifs |
-| **Trop lourdes** | F03.2×F11.3×F13.2 (surtout avec HARD OPEN) |
-
-## 3. Combinaison recommandée (non décisionnelle)
-
-**F03.3 × F11.2 × F13.4**
-
-| Pourquoi | Lien W1 |
-|----------|---------|
-| Borné avant prep | W1-B · W1-D05 |
-| Observabilité sans UI prématurée | évite dette F11.3 |
-| Historique + OPS1 sans archive-only | W1-D04 · SC-12 |
-| N’exige pas cutover-complete | T-A7 NOT OPEN |
-
-## 4. Séquence documentaire future (candidate)
-
-1. Morris décide F03 / F11 / F13 (bulletin).
-2. Plan W1-B détaillé **doc** aligné sur les trois choix.
-3. Design isolation OPS1 (D04) — encore non implémenté.
-4. Seulement ensuite : gate prep technique (si F + B5 le permettent).
-
-**Anti-claim :** combinaison recommandée ≠ options adoptées.
+| **Combinaison** | **F03.3 × F11.2 × F13.4** |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
+
+## Effets combinés (normatifs)
+
+- F03.3 impose F11 et F13 **avant** préparation technique (satisfait par décisions F11/F13) ;
+- F11.2 fournit la surface opérationnelle minimale (**exigence** future, non implémentée) ;
+- F13.4 conserve la traçabilité tout en bornant l’exposition runtime ;
+- D04 OPS1 reste **obligatoire** avant retrait ;
+- **Git** reste source de vérité historique ;
+- **aucune** UI dédiée n’est exigée maintenant ;
+- **aucun** changement technique n’est autorisé par ces décisions.
+
+## Matrice (historique d’arbitrage)
+
+| F03 | F11 | F13 | Qualif. post-décision |
+|-----|-----|-----|------------------------|
+| .3 | .2 | .4 | **ADOPTÉE** |
+| .1 | .2 | .4 | non retenue (trop mince vs F03.3) |
+| .3 | .3 | .2 | non retenue (UI/dette) |
+| .2 | .3 | .2 | non retenue (trop lourde) |
+| .2 | .1 | .3 | incohérente — non retenue |
+| .1 | .1 | .3 | trop faible — non retenue |
+
+## Séquence future (documentaire — non exécutée)
+
+1. Intégrer ce pack sur `main` (gate review/integrate — `NOT CONSUMED`).
+2. Plan W1-B détaillé aligné F03.3/F11.2/F13.4 — doc only.
+3. Design isolation OPS1 / contrats API lecture — sous gates distincts.
+4. Prep technique **uniquement** si set F03.3 satisfait + GO Morris + B5.
+
+**Anti-claim :** combinaison adoptée ≠ implémentation · ≠ T-A7 OPEN · ≠ delivery/cutover.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md
index fd58942..eb36a96 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md
@@ -1,49 +1,55 @@
-# 06 — Recommandation et risques
+# 06 — Impacts, risques et séquence (post-décision)
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut global** | `RECOMMENDED — NOT DECIDED` |
-| **Autorité** | aucune hors Morris |
+| **Statut** | décisions F03.3 / F11.2 / F13.4 **enregistrées** |
+| **Autorisation technique** | **aucune** |
 
-## 1. Recommandation
+## 1. Décisions (rappel)
 
-| Domaine | Option | Justification courte |
-|---------|--------|----------------------|
-| F03 | **F03.3** | minimal + traçabilité P* / HARD / D04 sans maximalisme cutover |
-| F11 | **F11.2** | API lecture/hold/readiness · pas d’UI admin prématurée |
-| F13 | **F13.4** | hybrid Git archive + RO runtime borné · OPS1 isolable |
-| Combo | **F03.3 × F11.2 × F13.4** | cohérente · proportionnée · réversible |
+| Domaine | Choix | Statut |
+|---------|-------|--------|
+| F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
+| F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
+| F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+| Combo | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |
 
-## 2. Compatibilité
+## 2. Impacts
 
-| Contrainte | Respect reco ? |
-|------------|----------------|
-| W1-B plan candidat | oui (doc) |
-| Isolation OPS1 avant retrait (D04) | oui (F13.4/F13.2 path) |
-| F gates avant prep (D05) | oui |
-| T-A7 NOT OPEN | oui |
-| Pas de dette UI inutile | oui (évite F11.3 immédiat) |
-| Repo-informed | oui (preuves Wave 1 + P*) |
+| Impact | Effet |
+|--------|-------|
+| Prep technique | bloquée tant que set F03.3 non satisfait / non borné |
+| API | exigence lecture/readiness future · pas d’implémentation maintenant |
+| UI admin | non exigée |
+| Historique | cible hybrid Git + RO bornée · pas d’implémentation maintenant |
+| OPS1 | isolation avant retrait (D04) · pas de mod code |
 
 ## 3. Risques résiduels
 
-| Risque | Sévérité | Mitigation documentaire |
-|--------|----------|-------------------------|
-| « Prep » mal définie malgré F03.3 | Med | W1-S4 · liste exclusions |
-| API F11.2 étendue en write trop tôt | Med | mutations = gate séparé |
-| Hybrid F13.4 mal discipliné | Med | deny-write · inventaire allowlist |
-| HARD ignorés | High | anti-bypass B5/R1/HARD |
-| Volume DB UNKNOWN | Med | campagne mesure avant retrait D1 |
+| Risque | Mitigation |
+|--------|------------|
+| Confusion « décidé = prêt à coder » | anti-claims · gate integrate ≠ prep |
+| Extension write API | gate mutation distinct |
+| Hybrid mal discipliné | deny-write · inventaire allowlist (futurs) |
+| HARD ignorés | anti-bypass B5/R1/HARD |
 
-## 4. Ce qui n’est **pas** recommandé maintenant
+## 4. Dette / réversibilité
 
-- F03.2 comme entrée prep (sur-cadrage)
-- F11.1 (aveugle)
-- F13.3 seul (trou runtime)
-- Toute implémentation / prep technique / cutover
+| Couche | Dette | Réversibilité |
+|--------|-------|---------------|
+| Documentaire | faible (options non retenues conservées) | haute (Git revert) |
+| Technique | **nulle** ce cycle | N/A |
 
-## 5. Anti-claims
+## 5. Stop conditions ajoutées
 
-- recommandation ≠ validation Morris
-- combo reco ≠ décision
-- F décidées plus tard ≠ delivery/cutover autorisés
+| ID | Trigger | Action |
+|----|---------|--------|
+| F-S1 | prep technique sans set F03.3 | STOP |
+| F-S2 | implémentation API/UI hors gate | STOP |
+| F-S3 | mutation historique / retrait sans isolation OPS1 | STOP |
+
+## 6. Anti-claims
+
+- décisions ≠ implémentation
+- décisions ≠ delivery preparation / delivery / cutover
+- décisions ≠ T-A7 OPEN
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md
index d01a3a4..89f64c1 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md
@@ -2,119 +2,98 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
-| **Aucune option auto-sélectionnée** | oui |
-| **F03 / F11 / F13** | contenu `NOT DECIDED` |
+| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
+| **Gate** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 19:25:19 CEST (+0200) |
 | **T-A7** | `NOT OPEN` |
 | **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |
 
 ---
 
-## D-T-A7-F03 — Préconditions avant préparation technique
+## D-T-A7-F03
 
-**Question :** Quel set de préconditions obligatoires avant toute préparation technique de retrait / delivery T-A7 ?
-
-| Option | Description |
-|--------|-------------|
-| F03.1 | Set minimal (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 décidées · HARD non ignorés) |
-| F03.2 | Set maximal (P03–P11 + runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness) |
-| F03.3 | Set custom intermédiaire (F03.1 + matrice P* + frontière OPS1 design + holds candidats + anti-bypass) |
-| Autre / différer | — |
-
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F03.3**
-
-**Impacts :** borne l’entrée en prep · n’autorise pas delivery.
-
-**Dette :** doc P* à maintenir.
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F03.3** |
+| **Libellé** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
 
-**Réversibilité :** haute.
+**Options non retenues :** F03.1 · F03.2 · autre/différer.
 
-**Gate futur :** plan W1-B détaillé · puis prep seulement si GO.
+**Impacts / dette / réversibilité :** borne l’entrée prep · dette doc P* · réversibilité Git haute.
 
-**Anti-claims :** F03 décidé ≠ delivery · ≠ cutover · ≠ T-A7 OPEN.
+**Gate futur :** satisfaction/bornage set · puis prep sous GO distinct.
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Anti-claims :** F03 ≠ préconditions satisfaites · ≠ delivery preparation · ≠ set maximal · ≠ validation runtime.
 
 ---
 
-## D-T-A7-F11 — API / UI retrait et cutover
-
-**Question :** Quelles exigences API/UI pour opérer/observer le retrait legacy et le cutover ?
-
-| Option | Description |
-|--------|-------------|
-| F11.1 | Aucune nouvelle surface avant cutover |
-| F11.2 | API opérationnelle minimale **sans** UI dédiée (lecture état/holds/readiness) |
-| F11.3 | API + UI minimale d’administration |
-| F11.4 | Custom (API maintenant · UI jalonnée plus tard) |
-| Autre / différer | — |
-
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F11.2**
-
-**Impacts :** exige contrats lecture futurs · pas d’UI shippée par cette décision seule.
+## D-T-A7-F11
 
-**Dette :** API contracts.
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F11.2** |
+| **Libellé** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
 
-**Réversibilité :** moyenne.
+**Options non retenues :** F11.1 · F11.3 · F11.4 · autre/différer.
 
-**Gate futur :** design/API gate distinct · mutations write séparées.
+**Impacts / dette / réversibilité :** exigence contrats lecture futurs · dette API · réversibilité moyenne.
 
-**Anti-claims :** F11 ≠ product complete A3.2 · ≠ implémentation · ≠ retrait MethodMode.
+**Gate futur :** design/validation API · mutations = gate séparé · pas d’UI obligatoire.
 
-**Statut :** `MORRIS DECISION REQUIRED`
+**Anti-claims :** ≠ API implémentée · ≠ mutation · ≠ product complete · ≠ IAM.
 
 ---
 
-## D-T-A7-F13 — Historique legacy read-only / OPS1
-
-**Question :** Quelle politique d’historique legacy read-only et de frontière OPS1 ?
+## D-T-A7-F13
 
-| Option | Description |
-|--------|-------------|
-| F13.1 | Conservation in-place read-only |
-| F13.2 | Isolation dédiée read-only (namespace/API/ACL) |
-| F13.3 | Archive documentaire uniquement (Git/docs) |
-| F13.4 | Hybrid (archive Git + vue/politique RO runtime bornée + OPS1 isolable) |
-| Autre / différer | — |
-
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F13.4**
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F13.4** |
+| **Libellé** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
 
-**Impacts :** impose discipline deny-write + design isolation OPS1 (D04).
+**Options non retenues :** F13.1 · F13.2 · F13.3 · autre/différer.
 
-**Dette :** politique hybride.
+**Impacts / dette / réversibilité :** cible hybrid · dette politique · réversibilité moyenne.
 
-**Réversibilité :** moyenne.
+**Gate futur :** design isolation OPS1 + vue RO · durée conservation si besoin.
 
-**Gate futur :** isolation design · puis implémentation sous GO distinct.
+**Anti-claims :** ≠ frontière implémentée · ≠ ACL validée · ≠ archive seule suffisante · Git reste vérité · ≠ isolation réalisée.
 
-**Anti-claims :** F13 ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1 · path-policy ≠ IAM.
+---
 
-**Statut :** `MORRIS DECISION REQUIRED`
+## Combinaison
 
----
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F03.3 × F11.2 × F13.4** |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
 
-## Bulletin Morris (vierge)
+## Bulletin consommé
 
 ```
-GO DECIDE T-A7 F03 F11 AND F13 — D-T-A7-F03=… — D-T-A7-F11=… — D-T-A7-F13=… — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
 ```
 
-**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.
+**Statut GO :** `CONSUMED — DECISIONS RECORDED` (documentaire uniquement).
 
-## Synthèse recommandations (non décisionnelles)
+## Synthèse
 
-| ID | Option | Label |
-|----|--------|-------|
-| D-T-A7-F03 | F03.3 | `RECOMMENDED — NOT DECIDED` |
-| D-T-A7-F11 | F11.2 | `RECOMMENDED — NOT DECIDED` |
-| D-T-A7-F13 | F13.4 | `RECOMMENDED — NOT DECIDED` |
+| ID | Choix | Statut |
+|----|-------|--------|
+| D-T-A7-F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+| Combinaison | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |
 
 ## Garde-fous
 
-- W1-B · W1-D01…D05 : décisions Wave 1 inchangées
-- F03/F11/F13 contenu : `NOT DECIDED`
+- W1-B · W1-D01…D05 : inchangées (`DECIDED`)
 - B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
 - T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
 - T-A7 `NOT OPEN`
 - delivery preparation / delivery / cutover `NOT AUTHORIZED`
 - persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
+- **Aucune** implémentation autorisée par ces décisions
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md
index 4f335c2..989ac69 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md
@@ -2,102 +2,70 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Gate consommé** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — PREPARE OPTIONS IMPACTS RISKS RECOMMENDATIONS AND MORRIS DECISION PACK — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
-| **Date/heure/fuseau** | 2026-07-28 19:09:51 CEST (+0200) |
-| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
+| **Gate arbitrage (historique)** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — … — KEEP T-A7 NOT OPEN` |
+| **Gate décisions (consommé)** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date arbitrage** | 2026-07-28 19:09:51 CEST (+0200) |
+| **Date décisions** | 2026-07-28 19:25:19 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 3 · 6 · 9 · 10) · Critical |
 | **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
 | **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
 | **Worktree local** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
 | **T-A7** | `NOT OPEN` |
 | **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
-| **F03 / F11 / F13** | `NOT DECIDED` |
-| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (enregistrés PR #284) |
+| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
+| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
+| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
+| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
+| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
 | **Push / PR** | **aucun** |
 
 ## Objectif
 
-Préparer un arbitrage documentaire **complet** de D-T-A7-F03, D-T-A7-F11 et D-T-A7-F13 : options, impacts, risques, dettes, preuves, stops et recommandations — **sans** sélectionner à la place de Morris et **sans** autoriser une préparation technique.
+Enregistrer formellement les décisions Morris D-T-A7-F03 / F11 / F13 **sans** autoriser préparation technique, implémentation, delivery ni cutover.
 
 ## Périmètre
 
-- options F03.1–.3 · F11.1–.4 · F13.1–.4 ;
-- matrice croisée · recommandation `RECOMMENDED — NOT DECIDED` ;
-- bulletin Morris D-T-A7-F03 / F11 / F13 (`MORRIS DECISION REQUIRED`).
+- enregistrement F03.3 · F11.2 · F13.4 · combinaison croisée ;
+- conservation des options non retenues (historique d’arbitrage) ;
+- anti-claims · séquence future · gate candidat d’intégration.
 
 ## Hors périmètre
 
-- décision automatique / présélection exécutoire ;
+- push / PR / merge projet ;
+- préparation technique · API/UI/runtime RO · migration ;
 - modification `method/**` · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI ;
-- préparation technique · backlog delivery exécutable · implémentation ;
-- ouverture T-A7 · delivery preparation / delivery / cutover ;
-- fermeture B5 / R1 / R-M01 / HARD ;
-- push projet · PR · merge.
-
-## Sources
-
-| Source | Rôle |
-|--------|------|
-| Template + trio `SFIA_CANONICAL_CORE_PATHS` | méthode d’exécution / loader |
-| Pack `t-a7-legacy-cutover-framing` | P03–P11 · SC · bulletin F |
-| Pack `t-a7-next-decision-step-framing` | Option C · calendrier F |
-| Pack `t-a7-option-c-wave-1-legacy-scope-framing` | inventaires · W1-B · D01–D05 |
-| PR #283 / #284 + handoffs | vérité Git intégrée |
-| Code D1 / OPS1 / platform | MethodMode · path-policy · UI existantes |
-
-## Décisions existantes (rappel)
-
-| ID | Statut |
-|----|--------|
-| T-A7-D01…D05 · Option C | `DECIDED — ADOPTED BY MORRIS` |
-| W1-B · W1-D01…D05 | `DECIDED — ADOPTED BY MORRIS` (D03 = futurs candidats) |
-| W1-D05 | F03/F11/F13 = **gates** avant prep technique · **contenu** encore ouvert |
-
-## Décisions ouvertes (ce pack)
-
-| ID | Statut |
-|----|--------|
-| D-T-A7-F03 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
-| D-T-A7-F11 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
-| D-T-A7-F13 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
+- ouverture T-A7 · delivery / cutover · fermeture réserves.
+
+## Décisions enregistrées
+
+| ID | Choix | Libellé | Statut |
+|----|-------|---------|--------|
+| D-T-A7-F03 | **F03.3** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F11 | **F11.2** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F13 | **F13.4** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` | `DECIDED — ADOPTED BY MORRIS` |
 
 ## Livrables
 
 | Fichier | Rôle |
 |---------|------|
-| `01-source-truth-and-scope.md` | Base · preuves · in/out |
-| `02-f03-entry-preconditions-options.md` | F03.1–.3 |
-| `03-f11-api-ui-options.md` | F11.1–.4 |
-| `04-f13-legacy-history-read-only-options.md` | F13.1–.4 |
-| `05-cross-decision-consistency.md` | Matrice croisée |
-| `06-recommendation-and-risks.md` | Recommandation non décisionnelle |
-| `07-morris-decision-pack.md` | Bulletin D-T-A7-F03/F11/F13 |
-
-## Recommandations (non décisionnelles)
-
-| Domaine | Reco | Statut |
-|---------|------|--------|
-| F03 | **F03.3** (intermédiaire borné) | `RECOMMENDED — NOT DECIDED` |
-| F11 | **F11.2** (API opérationnelle minimale, pas d’UI dédiée maintenant) | `RECOMMENDED — NOT DECIDED` |
-| F13 | **F13.4** (hybrid archive Git + vue RO bornée) | `RECOMMENDED — NOT DECIDED` |
-| Combinaison | F03.3 × F11.2 × F13.4 | `RECOMMENDED — NOT DECIDED` |
+| `01`–`04` | Sources · options (retenues + non retenues) |
+| `05` | Combinaison croisée **adoptée** |
+| `06` | Impacts / risques post-décision |
+| `07` | Bulletin décisions enregistrées |
+| `README.md` | Synthèse · verdict · gate suivant |
 
 ## Anti-claims
 
-- arbitrage préparé ≠ décision prise
-- recommandation ≠ validation Morris
-- F03 décidée ultérieurement ≠ delivery autorisée
-- F11 décidée ultérieurement ≠ API/UI implémentée
-- F13 décidée ultérieurement ≠ isolation OPS1 implémentée
-- read-only documenté ≠ ACL validée
-- W1-B adopté ≠ préparation technique
-- T-A7 framing ≠ T-A7 OPEN
+- F03/F11/F13 décidées ≠ implémentation · ≠ prep technique · ≠ delivery/cutover
+- F03.3 ≠ set maximal · F11.2 ≠ UI · F13.4 ≠ frontière runtime livrée
+- combinaison adoptée ≠ T-A7 OPEN
 
 ## Gate candidat suivant
 
-`GO DECIDE T-A7 F03 F11 AND F13 — SELECT OPTIONS FROM DOCUMENTARY ARBITRATION PACK — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+`GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
 
 **Statut :** `NOT CONSUMED`
 
 ## Verdict
 
-`T-A7 F03 F11 F13 DOCUMENTARY ARBITRATION FRAMED — ENTRY PRECONDITIONS API UI AND LEGACY HISTORY READ-ONLY OPTIONS DOCUMENTED — CROSS-DECISION CONSISTENCY ANALYZED — RECOMMENDATIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
+`T-A7 F03 F11 F13 MORRIS DECISIONS RECORDED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET ADOPTED — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI ADOPTED — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW ADOPTED — CROSS-DECISION COMBINATION ADOPTED — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

---

## Contenu complet des fichiers modifiés


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md`

```markdown
# T-A7 — Arbitrage documentaire F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Gate arbitrage (historique)** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — … — KEEP T-A7 NOT OPEN` |
| **Gate décisions (consommé)** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date arbitrage** | 2026-07-28 19:09:51 CEST (+0200) |
| **Date décisions** | 2026-07-28 19:25:19 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 3 · 6 · 9 · 10) · Critical |
| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Worktree local** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
| **Push / PR** | **aucun** |

## Objectif

Enregistrer formellement les décisions Morris D-T-A7-F03 / F11 / F13 **sans** autoriser préparation technique, implémentation, delivery ni cutover.

## Périmètre

- enregistrement F03.3 · F11.2 · F13.4 · combinaison croisée ;
- conservation des options non retenues (historique d’arbitrage) ;
- anti-claims · séquence future · gate candidat d’intégration.

## Hors périmètre

- push / PR / merge projet ;
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
| `README.md` | Synthèse · verdict · gate suivant |

## Anti-claims

- F03/F11/F13 décidées ≠ implémentation · ≠ prep technique · ≠ delivery/cutover
- F03.3 ≠ set maximal · F11.2 ≠ UI · F13.4 ≠ frontière runtime livrée
- combinaison adoptée ≠ T-A7 OPEN

## Gate candidat suivant

`GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 F03 F11 F13 MORRIS DECISIONS RECORDED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET ADOPTED — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI ADOPTED — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW ADOPTED — CROSS-DECISION COMBINATION ADOPTED — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md`

```markdown
# 02 — F03 — Préconditions avant préparation technique

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F03 |
| **Choix** | **F03.3** — `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Distinctions (normatives)

| Niveau | Sens |
|--------|------|
| Avant **préparation technique** de retrait | set F03.3 satisfait ou explicitement borné par Morris · **F11 et F13 déjà décidées** (satisfait) |
| Avant **delivery preparation** | + B5 / R1 / HARD non ignorés · P* critiques selon bulletins |
| Avant **cutover** | + P03–P11 selon F09 · surfaces F11 · historique F13 opérationnels |

**Norme F03.3 :** la préparation technique de retrait reste **interdite** tant que le set intermédiaire suivant n’est pas satisfait ou explicitement borné par Morris :

- inventaire legacy validé ;
- dépendances actives confirmées ;
- candidats au retrait identifiés ;
- plan documentaire W1-B ;
- matrice P03–P11 qualifiée ;
- isolation OPS1 définie avant retrait ;
- F11 décidée ;
- F13 décidée ;
- stratégie rollback documentée ;
- preuves candidates de non-régression ;
- anti-bypass des gates ;
- aucun blocker HARD ignoré.

---

## Options d’arbitrage (historique)

### F03.1 — Set minimal — **non retenue**

Set strictement nécessaire (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 · HARD non ignorés), sans matrice P* ni holds candidats explicites au niveau F03.3.

### F03.2 — Set maximal — **non retenue**

P03–P11 + preuves runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness — sur-cadrage pour une entrée prep.

### F03.3 — Set custom intermédiaire — **ADOPTÉE**

F03.1 **+** matrice P03–P11 à jour · frontière OPS1 spécifiée (design) · preuves non-régression par surface · holds/rollback candidats documentés · anti-bypass B5/R1/HARD · F11+F13 décidées.

#### Volontairement différé (hors satisfaction F03 seule)

| Élément | Pourquoi |
|---------|----------|
| Mesure volume DB | UNKNOWN — campagne dédiée |
| IAM multi-user | NOT SELECTED |
| UI OA product complete | distinct F11 cutover vs product |
| Fermeture HARD | vagues Option C 2–4 |
| Satisfaction runtime P07–P09 | cutover / implémentation ultérieure |

**Gates associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.

---

## Anti-claims

- F03 décidée ≠ préconditions satisfaites
- F03 décidée ≠ delivery preparation autorisée
- F03.3 ≠ adoption du set maximal
- matrice définie ≠ validation runtime
- F03 décidée ≠ T-A7 OPEN · ≠ cutover
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md`

```markdown
# 03 — F11 — API / UI avant retrait et cutover

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F11 |
| **Choix** | **F11.2** — `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Distinctions (conservées)

| Couche | Sens |
|--------|------|
| API/UI **product complete** (A3.2) | produit OA — **distinct** de F11 cutover |
| API/UI **retrait legacy** / **avant cutover** | exigence F11.2 |
| UI **administration** | **non obligatoire** à ce stade |
| Mutations | **aucune** implicite · write = gate distinct futur |

## Contenu normatif F11.2 (adopté)

Avant tout futur cutover, une **API minimale de lecture et de readiness** devra être **définie puis validée**.

Périmètre candidat décidé :

- lecture de l’état MethodMode ;
- lecture des dépendances et compatibilités legacy ;
- statut de migration ;
- health / readiness ;
- exposition des holds et blockers ;
- audit de lecture ;
- **aucune** UI d’administration dédiée obligatoire à ce stade ;
- **aucune** mutation implicite ;
- toute commande future (write) devra disposer d’un **gate distinct**.

**Ce cycle n’autorise aucune implémentation API/UI.**

---

## Options d’arbitrage (historique)

### F11.1 — Aucune nouvelle surface — **non retenue**

Simplicité · risque cutover aveugle / audit fragile.

### F11.2 — API opérationnelle minimale sans UI — **ADOPTÉE**

Observabilité gouvernée sans dette UI prématurée.

### F11.3 — API + UI admin — **non retenue (maintenant)**

Acceptable plus tard si cutover proche · dette UX élevée aujourd’hui.

### F11.4 — Custom (API + UI jalonnée) — **non retenue**

Proche de F11.2 ; Morris a tranché F11.2 strict (pas de jalon UI dans la décision).

---

## Anti-claims

- API décidée comme exigence ≠ API implémentée
- absence d’UI dédiée ≠ absence de visibilité
- F11.2 ≠ autorisation de mutation
- product complete API/UI ≠ cutover ready
- read API ≠ IAM validé
- F11 décidée ≠ prep technique / delivery / cutover
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md`

```markdown
# 04 — F13 — Historique legacy read-only & frontière OPS1

| Champ | Valeur |
|-------|--------|
| **Décision** | D-T-A7-F13 |
| **Choix** | **F13.4** — `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Contenu normatif F13.4 (adopté)

La cible documentaire retenue combine :

- conservation **Git/documentaire** de la vérité historique ;
- **vue runtime read-only bornée** pour support, audit et traçabilité ;
- **isolation OPS1 préalable** à tout retrait (W1-D04) ;
- **mutations historiques interdites** ;
- journalisation des accès ;
- frontière explicite **actif vs historique** ;
- **path-policy distincte de l’IAM** ;
- rollback documenté ;
- durée de conservation à préciser dans un cycle distinct si nécessaire.

**Git reste source de vérité historique.** La vue RO n’est pas une source canonique concurrente.

**Ce cycle n’autorise aucune implémentation de frontière runtime, migration, ni modification OPS1.**

---

## Options d’arbitrage (historique)

### F13.1 — In-place read-only — **non retenue**

Simple · risque confusion actif/historique.

### F13.2 — Isolation dédiée RO — **non retenue (maintenant)**

Cible forte possible plus tard · coût élevé pour l’instant.

### F13.3 — Archive documentaire uniquement — **non retenue**

Insuffisante seule tant que D1/OPS1 restent actifs.

### F13.4 — Hybrid — **ADOPTÉE**

Archive Git + politique/vue RO bornée + OPS1 isolable.

---

## Anti-claims

- F13.4 décidée ≠ frontière runtime implémentée
- read-only documenté ≠ ACL validée
- archive Git ≠ exposition produit suffisante à elle seule
- vue read-only ≠ source canonique concurrente à Git
- isolation OPS1 requise ≠ isolation réalisée
- conservation ≠ maintien d’un usage actif
- F13 décidée ≠ prep technique / delivery / cutover
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md`

```markdown
# 05 — Cohérence croisée F03 × F11 × F13

| Champ | Valeur |
|-------|--------|
| **Combinaison** | **F03.3 × F11.2 × F13.4** |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Effets combinés (normatifs)

- F03.3 impose F11 et F13 **avant** préparation technique (satisfait par décisions F11/F13) ;
- F11.2 fournit la surface opérationnelle minimale (**exigence** future, non implémentée) ;
- F13.4 conserve la traçabilité tout en bornant l’exposition runtime ;
- D04 OPS1 reste **obligatoire** avant retrait ;
- **Git** reste source de vérité historique ;
- **aucune** UI dédiée n’est exigée maintenant ;
- **aucun** changement technique n’est autorisé par ces décisions.

## Matrice (historique d’arbitrage)

| F03 | F11 | F13 | Qualif. post-décision |
|-----|-----|-----|------------------------|
| .3 | .2 | .4 | **ADOPTÉE** |
| .1 | .2 | .4 | non retenue (trop mince vs F03.3) |
| .3 | .3 | .2 | non retenue (UI/dette) |
| .2 | .3 | .2 | non retenue (trop lourde) |
| .2 | .1 | .3 | incohérente — non retenue |
| .1 | .1 | .3 | trop faible — non retenue |

## Séquence future (documentaire — non exécutée)

1. Intégrer ce pack sur `main` (gate review/integrate — `NOT CONSUMED`).
2. Plan W1-B détaillé aligné F03.3/F11.2/F13.4 — doc only.
3. Design isolation OPS1 / contrats API lecture — sous gates distincts.
4. Prep technique **uniquement** si set F03.3 satisfait + GO Morris + B5.

**Anti-claim :** combinaison adoptée ≠ implémentation · ≠ T-A7 OPEN · ≠ delivery/cutover.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md`

```markdown
# 06 — Impacts, risques et séquence (post-décision)

| Champ | Valeur |
|-------|--------|
| **Statut** | décisions F03.3 / F11.2 / F13.4 **enregistrées** |
| **Autorisation technique** | **aucune** |

## 1. Décisions (rappel)

| Domaine | Choix | Statut |
|---------|-------|--------|
| F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
| F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
| F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
| Combo | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |

## 2. Impacts

| Impact | Effet |
|--------|-------|
| Prep technique | bloquée tant que set F03.3 non satisfait / non borné |
| API | exigence lecture/readiness future · pas d’implémentation maintenant |
| UI admin | non exigée |
| Historique | cible hybrid Git + RO bornée · pas d’implémentation maintenant |
| OPS1 | isolation avant retrait (D04) · pas de mod code |

## 3. Risques résiduels

| Risque | Mitigation |
|--------|------------|
| Confusion « décidé = prêt à coder » | anti-claims · gate integrate ≠ prep |
| Extension write API | gate mutation distinct |
| Hybrid mal discipliné | deny-write · inventaire allowlist (futurs) |
| HARD ignorés | anti-bypass B5/R1/HARD |

## 4. Dette / réversibilité

| Couche | Dette | Réversibilité |
|--------|-------|---------------|
| Documentaire | faible (options non retenues conservées) | haute (Git revert) |
| Technique | **nulle** ce cycle | N/A |

## 5. Stop conditions ajoutées

| ID | Trigger | Action |
|----|---------|--------|
| F-S1 | prep technique sans set F03.3 | STOP |
| F-S2 | implémentation API/UI hors gate | STOP |
| F-S3 | mutation historique / retrait sans isolation OPS1 | STOP |

## 6. Anti-claims

- décisions ≠ implémentation
- décisions ≠ delivery preparation / delivery / cutover
- décisions ≠ T-A7 OPEN
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md`

```markdown
# 07 — Morris decision pack — D-T-A7-F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
| **Gate** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 19:25:19 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |

---

## D-T-A7-F03

| Champ | Valeur |
|-------|--------|
| **Choix** | **F03.3** |
| **Libellé** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F03.1 · F03.2 · autre/différer.

**Impacts / dette / réversibilité :** borne l’entrée prep · dette doc P* · réversibilité Git haute.

**Gate futur :** satisfaction/bornage set · puis prep sous GO distinct.

**Anti-claims :** F03 ≠ préconditions satisfaites · ≠ delivery preparation · ≠ set maximal · ≠ validation runtime.

---

## D-T-A7-F11

| Champ | Valeur |
|-------|--------|
| **Choix** | **F11.2** |
| **Libellé** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F11.1 · F11.3 · F11.4 · autre/différer.

**Impacts / dette / réversibilité :** exigence contrats lecture futurs · dette API · réversibilité moyenne.

**Gate futur :** design/validation API · mutations = gate séparé · pas d’UI obligatoire.

**Anti-claims :** ≠ API implémentée · ≠ mutation · ≠ product complete · ≠ IAM.

---

## D-T-A7-F13

| Champ | Valeur |
|-------|--------|
| **Choix** | **F13.4** |
| **Libellé** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F13.1 · F13.2 · F13.3 · autre/différer.

**Impacts / dette / réversibilité :** cible hybrid · dette politique · réversibilité moyenne.

**Gate futur :** design isolation OPS1 + vue RO · durée conservation si besoin.

**Anti-claims :** ≠ frontière implémentée · ≠ ACL validée · ≠ archive seule suffisante · Git reste vérité · ≠ isolation réalisée.

---

## Combinaison

| Champ | Valeur |
|-------|--------|
| **Choix** | **F03.3 × F11.2 × F13.4** |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

## Bulletin consommé

```
GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `CONSUMED — DECISIONS RECORDED` (documentaire uniquement).

## Synthèse

| ID | Choix | Statut |
|----|-------|--------|
| D-T-A7-F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
| Combinaison | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |

## Garde-fous

- W1-B · W1-D01…D05 : inchangées (`DECIDED`)
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- T-A7 `NOT OPEN`
- delivery preparation / delivery / cutover `NOT AUTHORIZED`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
- **Aucune** implémentation autorisée par ces décisions
```

