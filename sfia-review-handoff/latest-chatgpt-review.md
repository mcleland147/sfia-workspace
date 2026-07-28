# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 19:57:32 CEST (+0200) |
| **Niveau** | FULL |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration` |
| **Branche source** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Gate consommé** | `GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Base historique (démarrage)** | `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **HEAD démarrage / PR head** | `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6` |
| **Parent décision** | `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` |
| **Merge SHA** | `dad6e00344ad5750cd352db3af33c150c780491b` |
| **Tree** | `9cf12ebe85101b602d932c1025b0a5215652e7be` |
| **Template / sources** | template SFIA v2.6 + handoff canonique + pack local `t-a7-f03-f11-f13-documentary-arbitration/` · Cycle Knowledge Contract candidate/absent (guidance expérimentale uniquement) |
| **Profil** | Critical · cycles 13 (+9 · 14 · 15 · 1 · 10) |

## Local Git Truth Check

- `git fetch origin --prune` OK
- branche exacte ; HEAD = `6849b6f…` ; parent = `4c9bbd7…` ; merge-base = `9011bb2…` = `origin/main` au démarrage
- 2 commits locaux ; 8 fichiers Added uniquement sous le pack ; worktree propre ; aucun staged ; aucun untracked parasite hors `.tmp-sfia-review/` ; aucune opération Git active
- `git diff --check origin/main..HEAD` clean
- Verdict : **PASSED** (pas de STOP)

## Commits

1. `4c9bbd7c78c603d63b5926ac625503fa7d2fc387` — `docs(sfia-studio): frame T-A7 F03 F11 F13 arbitration`
2. `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6` — `docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions`
3. Merge commit `dad6e00344ad5750cd352db3af33c150c780491b` — `Merge pull request #285 …`  
   Parents : `9011bb2c…` + `6849b6f…` · Tree : `9cf12ebe…`

## Fichiers (scope)

Pack unique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/`

| Fichier | Blob sur main |
|---------|---------------|
| README.md | `989ac6963fc68dee144882800782c29557b86d71` |
| 01-source-truth-and-scope.md | `6dcdd7900d58be922a470e331ee3eee6a6f56202` |
| 02-f03-entry-preconditions-options.md | `2379118367a71163d179f214b4f8a8e406a1e5a3` |
| 03-f11-api-ui-options.md | `6f03a45265c29b7dbfd8e8f0d0e327e0c7c748b4` |
| 04-f13-legacy-history-read-only-options.md | `32a1500fe3df06432e9c606500e4fc6f3e004504` |
| 05-cross-decision-consistency.md | `a7b6d0daf413d3bafafb543d05664c61ee31d4ab` |
| 06-recommendation-and-risks.md | `eb36a9681e2f8458307d58272181c4b8faefdad3` |
| 07-morris-decision-pack.md | `89f64c125a3cf613a3b8e8744d0be3b08cf34918` |

Stat : 8 files changed, 520 insertions(+). Aucun fichier hors pack.

## Décisions

### F03.3
- Choix : **F03.3** — `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET`
- Statut : `DECIDED — ADOPTED BY MORRIS`
- Distinctions : avant prep technique / avant delivery preparation / avant cutover
- Set normatif : inventaire · dépendances · candidats · W1-B · matrice P03–P11 · isolation OPS1 définie · F11/F13 décidées · rollback · preuves candidates · anti-bypass · HARD non ignoré
- Options non retenues : F03.1 · F03.2 (historisées)

### F11.2
- Choix : **F11.2** — `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI`
- Statut : `DECIDED — ADOPTED BY MORRIS`
- Surfaces exigence future : MethodMode · deps/compat · migration · health/readiness · holds/blockers · audit lecture
- Pas d’UI dédiée obligatoire · pas de mutation implicite · write = gate distinct
- Options non retenues : F11.1 · F11.3 · F11.4

### F13.4
- Choix : **F13.4** — `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW`
- Statut : `DECIDED — ADOPTED BY MORRIS`
- Git = vérité historique · vue RO bornée = exigence future · isolation OPS1 avant retrait · mutations historiques interdites · journalisation · path-policy ≠ IAM
- Options non retenues : F13.1 · F13.2 · F13.3

### Combinaison
- **F03.3 × F11.2 × F13.4** — `DECIDED — ADOPTED BY MORRIS`
- T-A7 reste `NOT OPEN` · aucune transition auto A→B→C→D · aucune implémentation autorisée

## Anti-claims (vérifiés)

- F03 décidée ≠ critères satisfaits ≠ delivery prep ≠ set maximal ≠ validation runtime
- F11.2 ≠ API implémentée ≠ mutation ≠ IAM ≠ product complete = cutover ready
- F13.4 ≠ vue RO implémentée ≠ ACL validée ≠ source concurrente Git ≠ OPS1 isolée ≠ conservation = maintien actif
- combinaison ≠ implémentation ≠ T-A7 OPEN ≠ delivery/cutover
- Hits « T-A7 OPEN » dans le pack = anti-claims uniquement (qualifiés)

## Contenu complet des fichiers du pack (modifié / ajouté)

### `README.md` (blob `989ac6963fc68dee144882800782c29557b86d71`)

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
### `01-source-truth-and-scope.md` (blob `6dcdd7900d58be922a470e331ee3eee6a6f56202`)

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
### `02-f03-entry-preconditions-options.md` (blob `2379118367a71163d179f214b4f8a8e406a1e5a3`)

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
### `03-f11-api-ui-options.md` (blob `6f03a45265c29b7dbfd8e8f0d0e327e0c7c748b4`)

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
### `04-f13-legacy-history-read-only-options.md` (blob `32a1500fe3df06432e9c606500e4fc6f3e004504`)

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
### `05-cross-decision-consistency.md` (blob `a7b6d0daf413d3bafafb543d05664c61ee31d4ab`)

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
### `06-recommendation-and-risks.md` (blob `eb36a9681e2f8458307d58272181c4b8faefdad3`)

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
### `07-morris-decision-pack.md` (blob `89f64c125a3cf613a3b8e8744d0be3b08cf34918`)

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


## Diff complet utile

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/01-source-truth-and-scope.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/01-source-truth-and-scope.md
new file mode 100644
index 0000000..6dcdd79
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/01-source-truth-and-scope.md
@@ -0,0 +1,65 @@
+# 01 — Source truth and scope
+
+| Champ | Valeur |
+|-------|--------|
+| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
+| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
+| **Nature** | vérité + preuves · **pas** une autorisation |
+
+## 1. Vérité Git
+
+| Check | Résultat |
+|-------|----------|
+| `origin/main` | `9011bb2c…` (merge PR #284) |
+| HEAD / merge-base | identiques |
+| Upstream projet | **aucun** |
+| Remote branche | **absente** |
+| Contenu hors pack | **aucune** modification (bound) |
+
+## 2. Preuves structurantes (synthèse)
+
+| Domaine | Preuve | Statut |
+|---------|--------|--------|
+| MethodMode D1 | `METHOD_MODES` · DB · badges · default `V3_CANDIDATE` | `ACTIVE — EVIDENCED` |
+| Orphan `actionSelectMethodMode` | export sans UI | `ACTIVE — EVIDENCED` (dead export) |
+| Dual enum modeled | `v2.6_manual|…|fallback` sans mapper | `ACTIVE — EVIDENCED` (écart) |
+| Trio `SFIA_CANONICAL_CORE_PATHS` | 3 fichiers `method/.../core/*` | `ACTIVE — EVIDENCED` |
+| OPS1 path-policy | allowlist/forbidden + gates · ≠ IAM | `ACTIVE — EVIDENCED` / IAM `NOT SELECTED` |
+| Asymétrie | deny action `method/` vs lecture canonical trio | `ACTIVE — EVIDENCED` |
+| CT / platform / OPS1 wrappers | extension in-place | `ACTIVE — EVIDENCED` |
+| D1 ↛ OPS1 import boundary | tests | `ACTIVE — EVIDENCED` |
+| Surfaces D1 UI | badges · cockpit · home | `ACTIVE — EVIDENCED` |
+| OA UI product | OA-11 / P22 | `MISSING` |
+| MethodModeGate / route | design | `DOCUMENTATION ONLY` |
+| Volume DB `method_mode` | — | `UNKNOWN` |
+| P03–P05 | remplacements doctrine/loader | `PARTIAL` |
+| P06–P09 · P11 | MethodMode/OA UI/method reads/historique RO | `MISSING` |
+| P10 | OPS1 isolation cutover | `PARTIAL` |
+| Rollback runtime testé | — | `MISSING` / `UNKNOWN` |
+| B5 / R1 / R-M01 / HARD | ouverts | `OPEN` / `OPEN HARD` |
+
+## 3. Contraintes héritées (W1)
+
+| Contrainte | Effet |
+|------------|-------|
+| W1-B | plan candidat **documentaire** autorisé · prep technique **non** |
+| W1-D02 | blocs actifs confirmés (ne pas traiter comme morts) |
+| W1-D03 | candidats futurs ≠ suppression décidée |
+| W1-D04 | isolation OPS1 **avant** tout retrait (trajectoire) |
+| W1-D05 | F03/F11/F13 **décidées (contenu)** avant prep technique retrait |
+
+## 4. Scope de cet arbitrage
+
+| In | Out |
+|----|-----|
+| Contenu options F03/F11/F13 | Implémentation · prep technique |
+| Impacts / risques / dettes / preuves | Modification code/method/OPS1 |
+| Recommandations non décisionnelles | Delivery / cutover / T-A7 OPEN |
+| Bulletin Morris | Fermeture réserves |
+
+## 5. Anti-claims
+
+- inventaire Wave 1 ≠ F03 satisfait
+- P* PARTIAL/MISSING ≠ prêt cutover
+- surface D1 existante ≠ surface cutover OA
+- path-policy ≠ IAM
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md
new file mode 100644
index 0000000..2379118
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/02-f03-entry-preconditions-options.md
@@ -0,0 +1,69 @@
+# 02 — F03 — Préconditions avant préparation technique
+
+| Champ | Valeur |
+|-------|--------|
+| **Décision** | D-T-A7-F03 |
+| **Choix** | **F03.3** — `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
+
+## Distinctions (normatives)
+
+| Niveau | Sens |
+|--------|------|
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
+
+---
+
+## Options d’arbitrage (historique)
+
+### F03.1 — Set minimal — **non retenue**
+
+Set strictement nécessaire (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 · HARD non ignorés), sans matrice P* ni holds candidats explicites au niveau F03.3.
+
+### F03.2 — Set maximal — **non retenue**
+
+P03–P11 + preuves runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness — sur-cadrage pour une entrée prep.
+
+### F03.3 — Set custom intermédiaire — **ADOPTÉE**
+
+F03.1 **+** matrice P03–P11 à jour · frontière OPS1 spécifiée (design) · preuves non-régression par surface · holds/rollback candidats documentés · anti-bypass B5/R1/HARD · F11+F13 décidées.
+
+#### Volontairement différé (hors satisfaction F03 seule)
+
+| Élément | Pourquoi |
+|---------|----------|
+| Mesure volume DB | UNKNOWN — campagne dédiée |
+| IAM multi-user | NOT SELECTED |
+| UI OA product complete | distinct F11 cutover vs product |
+| Fermeture HARD | vagues Option C 2–4 |
+| Satisfaction runtime P07–P09 | cutover / implémentation ultérieure |
+
+**Gates associés :** W1-S4 · SC-02…05 · SC-12 · B5 STOP BEFORE DELIVERY.
+
+---
+
+## Anti-claims
+
+- F03 décidée ≠ préconditions satisfaites
+- F03 décidée ≠ delivery preparation autorisée
+- F03.3 ≠ adoption du set maximal
+- matrice définie ≠ validation runtime
+- F03 décidée ≠ T-A7 OPEN · ≠ cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md
new file mode 100644
index 0000000..6f03a45
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/03-f11-api-ui-options.md
@@ -0,0 +1,66 @@
+# 03 — F11 — API / UI avant retrait et cutover
+
+| Champ | Valeur |
+|-------|--------|
+| **Décision** | D-T-A7-F11 |
+| **Choix** | **F11.2** — `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
+
+## Distinctions (conservées)
+
+| Couche | Sens |
+|--------|------|
+| API/UI **product complete** (A3.2) | produit OA — **distinct** de F11 cutover |
+| API/UI **retrait legacy** / **avant cutover** | exigence F11.2 |
+| UI **administration** | **non obligatoire** à ce stade |
+| Mutations | **aucune** implicite · write = gate distinct futur |
+
+## Contenu normatif F11.2 (adopté)
+
+Avant tout futur cutover, une **API minimale de lecture et de readiness** devra être **définie puis validée**.
+
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
+
+**Ce cycle n’autorise aucune implémentation API/UI.**
+
+---
+
+## Options d’arbitrage (historique)
+
+### F11.1 — Aucune nouvelle surface — **non retenue**
+
+Simplicité · risque cutover aveugle / audit fragile.
+
+### F11.2 — API opérationnelle minimale sans UI — **ADOPTÉE**
+
+Observabilité gouvernée sans dette UI prématurée.
+
+### F11.3 — API + UI admin — **non retenue (maintenant)**
+
+Acceptable plus tard si cutover proche · dette UX élevée aujourd’hui.
+
+### F11.4 — Custom (API + UI jalonnée) — **non retenue**
+
+Proche de F11.2 ; Morris a tranché F11.2 strict (pas de jalon UI dans la décision).
+
+---
+
+## Anti-claims
+
+- API décidée comme exigence ≠ API implémentée
+- absence d’UI dédiée ≠ absence de visibilité
+- F11.2 ≠ autorisation de mutation
+- product complete API/UI ≠ cutover ready
+- read API ≠ IAM validé
+- F11 décidée ≠ prep technique / delivery / cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md
new file mode 100644
index 0000000..32a1500
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/04-f13-legacy-history-read-only-options.md
@@ -0,0 +1,58 @@
+# 04 — F13 — Historique legacy read-only & frontière OPS1
+
+| Champ | Valeur |
+|-------|--------|
+| **Décision** | D-T-A7-F13 |
+| **Choix** | **F13.4** — `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **Date** | 2026-07-28 19:25:19 CEST (+0200) |
+
+## Contenu normatif F13.4 (adopté)
+
+La cible documentaire retenue combine :
+
+- conservation **Git/documentaire** de la vérité historique ;
+- **vue runtime read-only bornée** pour support, audit et traçabilité ;
+- **isolation OPS1 préalable** à tout retrait (W1-D04) ;
+- **mutations historiques interdites** ;
+- journalisation des accès ;
+- frontière explicite **actif vs historique** ;
+- **path-policy distincte de l’IAM** ;
+- rollback documenté ;
+- durée de conservation à préciser dans un cycle distinct si nécessaire.
+
+**Git reste source de vérité historique.** La vue RO n’est pas une source canonique concurrente.
+
+**Ce cycle n’autorise aucune implémentation de frontière runtime, migration, ni modification OPS1.**
+
+---
+
+## Options d’arbitrage (historique)
+
+### F13.1 — In-place read-only — **non retenue**
+
+Simple · risque confusion actif/historique.
+
+### F13.2 — Isolation dédiée RO — **non retenue (maintenant)**
+
+Cible forte possible plus tard · coût élevé pour l’instant.
+
+### F13.3 — Archive documentaire uniquement — **non retenue**
+
+Insuffisante seule tant que D1/OPS1 restent actifs.
+
+### F13.4 — Hybrid — **ADOPTÉE**
+
+Archive Git + politique/vue RO bornée + OPS1 isolable.
+
+---
+
+## Anti-claims
+
+- F13.4 décidée ≠ frontière runtime implémentée
+- read-only documenté ≠ ACL validée
+- archive Git ≠ exposition produit suffisante à elle seule
+- vue read-only ≠ source canonique concurrente à Git
+- isolation OPS1 requise ≠ isolation réalisée
+- conservation ≠ maintien d’un usage actif
+- F13 décidée ≠ prep technique / delivery / cutover
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md
new file mode 100644
index 0000000..a7b6d0d
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/05-cross-decision-consistency.md
@@ -0,0 +1,37 @@
+# 05 — Cohérence croisée F03 × F11 × F13
+
+| Champ | Valeur |
+|-------|--------|
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
new file mode 100644
index 0000000..eb36a96
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/06-recommendation-and-risks.md
@@ -0,0 +1,55 @@
+# 06 — Impacts, risques et séquence (post-décision)
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | décisions F03.3 / F11.2 / F13.4 **enregistrées** |
+| **Autorisation technique** | **aucune** |
+
+## 1. Décisions (rappel)
+
+| Domaine | Choix | Statut |
+|---------|-------|--------|
+| F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
+| F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
+| F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+| Combo | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+
+## 2. Impacts
+
+| Impact | Effet |
+|--------|-------|
+| Prep technique | bloquée tant que set F03.3 non satisfait / non borné |
+| API | exigence lecture/readiness future · pas d’implémentation maintenant |
+| UI admin | non exigée |
+| Historique | cible hybrid Git + RO bornée · pas d’implémentation maintenant |
+| OPS1 | isolation avant retrait (D04) · pas de mod code |
+
+## 3. Risques résiduels
+
+| Risque | Mitigation |
+|--------|------------|
+| Confusion « décidé = prêt à coder » | anti-claims · gate integrate ≠ prep |
+| Extension write API | gate mutation distinct |
+| Hybrid mal discipliné | deny-write · inventaire allowlist (futurs) |
+| HARD ignorés | anti-bypass B5/R1/HARD |
+
+## 4. Dette / réversibilité
+
+| Couche | Dette | Réversibilité |
+|--------|-------|---------------|
+| Documentaire | faible (options non retenues conservées) | haute (Git revert) |
+| Technique | **nulle** ce cycle | N/A |
+
+## 5. Stop conditions ajoutées
+
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
new file mode 100644
index 0000000..89f64c1
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/07-morris-decision-pack.md
@@ -0,0 +1,99 @@
+# 07 — Morris decision pack — D-T-A7-F03 / F11 / F13
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
+| **Gate** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 19:25:19 CEST (+0200) |
+| **T-A7** | `NOT OPEN` |
+| **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |
+
+---
+
+## D-T-A7-F03
+
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F03.3** |
+| **Libellé** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+
+**Options non retenues :** F03.1 · F03.2 · autre/différer.
+
+**Impacts / dette / réversibilité :** borne l’entrée prep · dette doc P* · réversibilité Git haute.
+
+**Gate futur :** satisfaction/bornage set · puis prep sous GO distinct.
+
+**Anti-claims :** F03 ≠ préconditions satisfaites · ≠ delivery preparation · ≠ set maximal · ≠ validation runtime.
+
+---
+
+## D-T-A7-F11
+
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F11.2** |
+| **Libellé** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+
+**Options non retenues :** F11.1 · F11.3 · F11.4 · autre/différer.
+
+**Impacts / dette / réversibilité :** exigence contrats lecture futurs · dette API · réversibilité moyenne.
+
+**Gate futur :** design/validation API · mutations = gate séparé · pas d’UI obligatoire.
+
+**Anti-claims :** ≠ API implémentée · ≠ mutation · ≠ product complete · ≠ IAM.
+
+---
+
+## D-T-A7-F13
+
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F13.4** |
+| **Libellé** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+
+**Options non retenues :** F13.1 · F13.2 · F13.3 · autre/différer.
+
+**Impacts / dette / réversibilité :** cible hybrid · dette politique · réversibilité moyenne.
+
+**Gate futur :** design isolation OPS1 + vue RO · durée conservation si besoin.
+
+**Anti-claims :** ≠ frontière implémentée · ≠ ACL validée · ≠ archive seule suffisante · Git reste vérité · ≠ isolation réalisée.
+
+---
+
+## Combinaison
+
+| Champ | Valeur |
+|-------|--------|
+| **Choix** | **F03.3 × F11.2 × F13.4** |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+
+## Bulletin consommé
+
+```
+GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+```
+
+**Statut GO :** `CONSUMED — DECISIONS RECORDED` (documentaire uniquement).
+
+## Synthèse
+
+| ID | Choix | Statut |
+|----|-------|--------|
+| D-T-A7-F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+| Combinaison | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |
+
+## Garde-fous
+
+- W1-B · W1-D01…D05 : inchangées (`DECIDED`)
+- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
+- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
+- T-A7 `NOT OPEN`
+- delivery preparation / delivery / cutover `NOT AUTHORIZED`
+- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
+- **Aucune** implémentation autorisée par ces décisions
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md
new file mode 100644
index 0000000..989ac69
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-f03-f11-f13-documentary-arbitration/README.md
@@ -0,0 +1,71 @@
+# T-A7 — Arbitrage documentaire F03 / F11 / F13
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate arbitrage (historique)** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — … — KEEP T-A7 NOT OPEN` |
+| **Gate décisions (consommé)** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date arbitrage** | 2026-07-28 19:09:51 CEST (+0200) |
+| **Date décisions** | 2026-07-28 19:25:19 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 3 · 6 · 9 · 10) · Critical |
+| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
+| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
+| **Worktree local** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
+| **T-A7** | `NOT OPEN` |
+| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
+| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
+| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
+| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
+| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
+| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
+| **Push / PR** | **aucun** |
+
+## Objectif
+
+Enregistrer formellement les décisions Morris D-T-A7-F03 / F11 / F13 **sans** autoriser préparation technique, implémentation, delivery ni cutover.
+
+## Périmètre
+
+- enregistrement F03.3 · F11.2 · F13.4 · combinaison croisée ;
+- conservation des options non retenues (historique d’arbitrage) ;
+- anti-claims · séquence future · gate candidat d’intégration.
+
+## Hors périmètre
+
+- push / PR / merge projet ;
+- préparation technique · API/UI/runtime RO · migration ;
+- modification `method/**` · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI ;
+- ouverture T-A7 · delivery / cutover · fermeture réserves.
+
+## Décisions enregistrées
+
+| ID | Choix | Libellé | Statut |
+|----|-------|---------|--------|
+| D-T-A7-F03 | **F03.3** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F11 | **F11.2** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` | `DECIDED — ADOPTED BY MORRIS` |
+| D-T-A7-F13 | **F13.4** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` | `DECIDED — ADOPTED BY MORRIS` |
+
+## Livrables
+
+| Fichier | Rôle |
+|---------|------|
+| `01`–`04` | Sources · options (retenues + non retenues) |
+| `05` | Combinaison croisée **adoptée** |
+| `06` | Impacts / risques post-décision |
+| `07` | Bulletin décisions enregistrées |
+| `README.md` | Synthèse · verdict · gate suivant |
+
+## Anti-claims
+
+- F03/F11/F13 décidées ≠ implémentation · ≠ prep technique · ≠ delivery/cutover
+- F03.3 ≠ set maximal · F11.2 ≠ UI · F13.4 ≠ frontière runtime livrée
+- combinaison adoptée ≠ T-A7 OPEN
+
+## Gate candidat suivant
+
+`GO REVIEW AND INTEGRATE T-A7 F03 F11 F13 MORRIS DECISIONS — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+
+**Statut :** `NOT CONSUMED`
+
+## Verdict
+
+`T-A7 F03 F11 F13 MORRIS DECISIONS RECORDED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET ADOPTED — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI ADOPTED — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW ADOPTED — CROSS-DECISION COMBINATION ADOPTED — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

## Validations

- Markdown / liens relatifs / contenu complet : OK
- `git diff --check` clean (pré-merge et post-merge vs base)
- Trailing whitespace : aucun finding
- Aucun fichier vide / synthesis-only
- Aucune modification hors pack / technique
- Tree/blobs attendus confirmés sur HEAD puis sur `origin/main`
- Aucun commit correctif requis

## Findings

- Critical : **0**
- Major : **0**
- Minor / note : README pack conserve mentions historiques « Push/PR aucun » / gate integrate `NOT CONSUMED` datant du cycle record — **non bloquant** (vérité d’intégration = PR #285 / merge ; contenu décisionnel intact)

## PR readiness

`T-A7 F03 F11 F13 MORRIS DECISIONS PR READY`

## Push

- Push normal `-u` OK
- Remote HEAD = `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6`
- Verdict : `T-A7 F03 F11 F13 PROJECT BRANCH PUSHED — REMOTE HEAD VERIFIED`

## Pull Request

- PR **#285** — https://github.com/mcleland147/sfia-workspace/pull/285
- Titre : `docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions`
- Base : `main` @ `9011bb2c…` · Head : branche attendue @ `6849b6f…`
- Commits : **2** · Files : **8** · +520/−0 · documentaire uniquement

## Checks (PR)

- Run ID : **30384836659** — https://github.com/mcleland147/sfia-workspace/actions/runs/30384836659
- Detect SFIA Studio changes : SUCCESS
- Build and validate SFIA Studio : SUCCESS
- SFIA Studio Required Gate : SUCCESS
- Warnings : aucun relevant
- HEAD inchangé pendant les checks

## Merge

- Méthode : **merge commit** (pas squash / pas rebase)
- mergedBy : `mcleland147`
- mergedAt : `2026-07-28T17:54:22Z` (UTC) ≈ `2026-07-28 19:54:22 CEST (+0200)`
- Merge SHA : `dad6e00344ad5750cd352db3af33c150c780491b`
- Parents : `9011bb2c7e27a78979d310b628da48b9cfbd400f` + `6849b6f7530310ae669a5bd2e4f4a3f3323ccda6`
- Tree : `9cf12ebe85101b602d932c1025b0a5215652e7be`
- Branche source **préservée**
- Verdict : `T-A7 F03 F11 F13 PR MERGED — SOURCE BRANCH PRESERVED`

## Post-merge

- `origin/main` = merge SHA
- 8 fichiers + blobs attendus confirmés
- F03.3 / F11.2 / F13.4 / combinaison confirmés
- Options non retenues présentes
- Anti-claims / NOT AUTHORIZED / T-A7 NOT OPEN confirmés
- Run post-merge **30385010519** : SUCCESS (Detect / Build / Required Gate)
- `git diff --check` clean
- Verdict : `T-A7 F03 F11 F13 MORRIS DECISIONS POST-MERGE VERIFIED`

## Gouvernance post-merge

| Élément | Statut |
|---------|--------|
| F03 | F03.3 `DECIDED — ADOPTED BY MORRIS` |
| F11 | F11.2 `DECIDED — ADOPTED BY MORRIS` |
| F13 | F13.4 `DECIDED — ADOPTED BY MORRIS` |
| Combinaison | F03.3 × F11.2 × F13.4 `DECIDED — ADOPTED BY MORRIS` |
| W1-B | `DECIDED — ADOPTED BY MORRIS` |
| W1-D01…D05 | inchangées |
| B5/R1/R-M01 | `OPEN` |
| HARD | `OPEN HARD` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery preparation / delivery / cutover | `NOT AUTHORIZED` |
| Persistence/IAM | `NOT SELECTED` |
| RGPD production | `NOT VALIDATED` |

## Actions non exécutées (interdites)

modification décisions · method/** · OPS1 · MethodMode · runtime/modeled/workflow/tests/CI · API/UI/vue RO · migration · prep technique · delivery · cutover · fermeture réserve · ouverture T-A7 · squash/rebase/amend/force-push · suppression branche/worktree · Notion/CMP

## Verdict

`T-A7 F03 F11 F13 MORRIS DECISIONS INTEGRATED AND MERGED — F03.3 CUSTOM INTERMEDIATE PRECONDITION SET CONFIRMED ON MAIN — F11.2 MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI CONFIRMED ON MAIN — F13.4 HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW CONFIRMED ON MAIN — CROSS-DECISION COMBINATION CONFIRMED — OPTIONS NOT RETAINED PRESERVED AS HISTORY — REQUIRED CHECKS PASS — DECISIONS DO NOT AUTHORIZE IMPLEMENTATION — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — SOURCE BRANCH PRESERVED — POST-MERGE VERIFIED`
