# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 20:40:37 CEST (+0200) |
| **Niveau** | FULL |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Gate consommé** | `GO FRAME T-A7 TECHNICAL READINESS — QUALIFY P03 TO P11 — DEFINE OPS1 ISOLATION CONTRACT — DOCUMENT ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS — PREPARE MORRIS OPENING DECISION PACK — NO CODE — NO TECHNICAL EXECUTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Base / origin/main** | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **HEAD** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **Parent** | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Tree** | `639340bfa78d5df09fb0ebb28a9737972122dd8c` |
| **Commit** | `docs(sfia-studio): frame T-A7 technical readiness` |
| **Push / PR projet** | **aucun** |
| **Profil** | Critical · cycle 6 (+1 · 3 · 9 · 10 · 12 · 15) |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Recommandation ouverture** | O1 primaire · O2 conditionnel · O3 non supporté — `RECOMMENDED — NOT DECIDED` |
| **Gate candidat** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN` (`NOT CONSUMED`) |

## Truth check

- `origin/main` = `2a3c59c…` OK
- worktree/branche créés depuis `origin/main` OK
- upstream projet absent OK
- remote homonyme absente OK
- parent commit = base OK
- 9 fichiers nouveaux pack only OK
- Verdict truth : PASSED

## Sources consultées

### Méthode
- template · routing guide · operating model · guardrails (`SFIA_CANONICAL_CORE_PATHS`)

### Packs T-A7
- `t-a7-legacy-cutover-framing/` (P03–P11 · SC-*)
- `t-a7-next-decision-step-framing/`
- `t-a7-option-c-wave-1-legacy-scope-framing/` (inventaire · OPS1 · W1-D*)
- `t-a7-f03-f11-f13-documentary-arbitration/` (F03.3 · F11.2 · F13.4)

### Intégrations
- PR #285 merge `dad6e003…` · PR #286 merge `2a3c59c…`
- handoff `sfia/review-handoff` (cycle README #286)

### Technique RO
- `canonicalPaths.ts` · `sourceLoader.ts` · `METHOD_MODES` · `actionSelectMethodMode`
- `allowlistEvaluation.ts` · `pathPolicy.ts` · `import-boundaries.test.ts`
- OPS1 paths SQLite · OA observability mémoire · health simulé

## Preuves clés

| Surface | Preuve |
|---------|--------|
| MethodMode actif | `app/lib/d1/types.ts` METHOD_MODES |
| Canonical method reads | `SFIA_CANONICAL_CORE_PATHS` inclut 3 method core + template |
| OPS1 allowlist | deny-by-default · deny structurel method/ I4 |
| Path-policy CT | `decideReadPath` deny method/ (asymétrie loader) |
| Import boundaries | D1↛OPS1 · platform↛D1/OPS1 |
| F11.2 runtime | **absent** (pas d’endpoint readiness) |
| F13.4 runtime | **absent** |
| Persistence/IAM | NOT SELECTED · volumes UNKNOWN |

## Matrice P03–P11 (synthèse)

| ID | Statut |
|----|--------|
| P03 | PARTIAL |
| P04 | PARTIAL |
| P05 | PARTIAL |
| P06 | MISSING |
| P07 | MISSING |
| P08 | MISSING |
| P09 | MISSING |
| P10 | PARTIAL |
| P11 | MISSING |

0 SATISFIED / 4 PARTIAL / 5 MISSING — détail complet dans fichier `02`.

## Contrat OPS1

Statut : `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED`
Path-policy ≠ IAM · actif/historique séparés · interface F11.2/F13.4 · détail fichier `03`.

## Rollback

R0–R3 documentés · `DOCUMENTED — NOT TESTED — NOT AUTHORIZED` · aucune commande destructive · fichier `04`.

## Catalogue de preuves

E-MM / E-D1 / E-CP / E-OPS / E-F11 / E-F13 / E-PER / E-IAM / E-AUD / E-OBS / E-CI / E-RB — fichier `05` · non exécuté.

## Holds et stop conditions

Holds T-A7 NOT OPEN · F* décidées≠livrées · HARD OPEN HARD · B5/R1/R-M01 OPEN · delivery/cutover NOT AUTHORIZED · stops SC-* + TR-S-* · fichier `06`.

## Évaluation F03.3

`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
Blockers : validation Morris OPS1 · UNKNOWN cross-call/hits/volumes · F11/F13 runtime absents · P06–P09/P11 MISSING · HARD/B5 ouverts.

## Bulletin Morris

Question ouverture T-A7 · O1–O4 · recommandation O1 (O2 conditionnel) · `MORRIS DECISION REQUIRED` · aucune présélection · fichier `08`.

## Blobs

```
100644 blob 15a7b60493584b8c320b1978313776bb6f02527d	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/01-source-truth-and-scope.md
100644 blob d63903897e4b671a28000f0aacce3fd25635fb4c	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
100644 blob 5379d36e367f782a4c40a7aafcc2be60b2a8a273	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
100644 blob bba963fab510d100cd9a714d694d789b18f898a1	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/04-rollback-strategy.md
100644 blob ef352a1cd24231ff731d626bb8077bcc98afb0d2	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
100644 blob c7640ff0f1c301e023000ee69f971528210e11c8	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
100644 blob 7a8c23f45d8a37e76d94be2076609c21a2c42c56	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
100644 blob 2e7594cd707489334b45707ffdfa598244ebf46b	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
100644 blob ad594eddd443aa7f08b225c69da7971116483326	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
```

## Fichiers créés — contenu complet

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME T-A7 TECHNICAL READINESS — QUALIFY P03 TO P11 — DEFINE OPS1 ISOLATION CONTRACT — DOCUMENT ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS — PREPARE MORRIS OPENING DECISION PACK — NO CODE — NO TECHNICAL EXECUTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Cycle / profil** | 6 — Architecture technique (+1 · 3 · 9 · 10 · 12 · 15) · Critical |
| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
| **Push / PR / merge projet** | **aucun** |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **Prep technique exécutable** | `NOT AUTHORIZED` |
| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
| **Évaluation F03.3 (ce pack)** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM** | `NOT SELECTED` |
| **RGPD production** | `NOT VALIDATED` |

## Objectif

Établir la readiness **documentaire** préalable à une éventuelle ouverture de T-A7 :

1. matrice de qualification P03–P11 ;
2. contrat de frontière / isolation OPS1 (design only) ;
3. stratégie de rollback R0–R3 ;
4. plan de preuves et non-régression ;
5. holds, stop conditions et anti-bypass ;
6. bulletin Morris d’ouverture T-A7 (sans présélection).

## Périmètre

- analyse read-only du repository ;
- pack documentaire neuf sous `t-a7-technical-readiness-framing/` ;
- commit local unique ;
- review pack FULL + handoff canonique.

## Hors périmètre

- code · runtime · tests · CI · migrations ;
- modification `method/**` · OPS1 · MethodMode · modeled · workflow ;
- API · UI · vue runtime read-only ;
- préparation technique exécutable · backlog delivery exécutable ;
- ouverture T-A7 · delivery preparation · delivery · cutover ;
- push / PR / merge projet ;
- fermeture B5 / R1 / R-M01 / HARD ;
- sélection persistence / IAM · validation RGPD production ;
- action Notion / CMP.

## Sources

| Classe | Chemins |
|--------|---------|
| Méthode | `prompts/templates/sfia-cycle-execution-template.md` · routing guide · operating model · guardrails |
| Packs T-A7 | `t-a7-legacy-cutover-framing/` · `t-a7-next-decision-step-framing/` · `t-a7-option-c-wave-1-legacy-scope-framing/` · `t-a7-f03-f11-f13-documentary-arbitration/` |
| Intégrations | PR #285 merge `dad6e003…` · PR #286 merge `2a3c59c…` · handoffs `sfia/review-handoff` |
| Technique (RO) | `SFIA_CANONICAL_CORE_PATHS` · MethodMode D1 · OPS1 allowlist / path-policy · import boundaries · OA audit mémoire |

## Décisions existantes (inchangées)

- W1-B · W1-D01…D05 adoptées ;
- F03.3 · F11.2 · F13.4 · combinaison adoptées ;
- T-A7 reste `NOT OPEN`.

## Décisions ouvertes (ce pack)

- ouverture T-A7 (O1–O4) : `MORRIS DECISION REQUIRED` ;
- validation Morris du contrat OPS1 proposé ;
- contenu F08–F12 / F09 cutover : hors scope, restent non décidés ici.

## État F03.3

`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`

Critères documentaires largement couverts (inventaire, W1-B, F11/F13 décidées, matrice qualifiée, contrat OPS1 proposé, rollback doc, catalogue de preuves, anti-bypass, HARD non ignorés). Blockers : validation Morris du design OPS1 manquante ; P06–P09 / P11 runtime `MISSING` ; API F11.2 et vue F13.4 absentes ; preuves runtime non collectées ; HARD / B5 / R1 / R-M01 `OPEN`.

## Principaux blockers

1. Contrat OPS1 = `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED`.
2. P06–P09 · P11 = `MISSING — EVIDENCED` (pas de preuve runtime de retrait / RO).
3. F11.2 décidée ≠ API disponible.
4. F13.4 décidée ≠ vue RO / isolation réalisées.
5. Persistence / IAM / RGPD / volumes = `NOT SELECTED` / `UNKNOWN`.
6. B5 · R1 · R-M01 · HARD restent ouverts (non ignorés, non fermés).

## Livrables

| Fichier | Rôle |
|---------|------|
| `01-source-truth-and-scope.md` | Sources · vérité · scope |
| `02-p03-p11-readiness-matrix.md` | Matrice P03–P11 |
| `03-ops1-isolation-contract.md` | Contrat isolation OPS1 |
| `04-rollback-strategy.md` | Rollback R0–R3 |
| `05-evidence-and-non-regression-plan.md` | Catalogue de preuves |
| `06-holds-and-stop-conditions.md` | Holds · anti-bypass · stops |
| `07-f03-3-satisfaction-assessment.md` | Évaluation F03.3 |
| `08-morris-t-a7-opening-decision-pack.md` | Bulletin O1–O4 |
| `README.md` | Synthèse · verdict · gate |

## Anti-claims

- readiness documentée ≠ F03.3 satisfaite ;
- F03.3 satisfaite ≠ T-A7 OPEN ;
- T-A7 OPEN futur ≠ delivery autorisée ;
- contrat OPS1 ≠ isolation réalisée ;
- plan de tests ≠ tests exécutés ;
- rollback documenté ≠ rollback testé ;
- API F11.2 définie ≠ API implémentée ;
- vue F13.4 définie ≠ runtime read-only livré ;
- matrice P* qualifiée ≠ validation runtime ;
- recommandation ≠ décision Morris.

## Gate candidat suivant

`GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

(Dépend du verdict F03.3 partiel — pas de gate d’ouverture tant que blockers non traités ou bornés.)

## Verdict

`T-A7 TECHNICAL READINESS FRAMED — P03 TO P11 QUALIFIED — OPS1 ISOLATION CONTRACT DOCUMENTED — ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS DEFINED — F03.3 SATISFACTION ASSESSED FROM EVIDENCE — MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — NO CODE OR TECHNICAL EXECUTION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/01-source-truth-and-scope.md`

```markdown
# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Document** | `01-source-truth-and-scope.md` |
| **Base Git** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Nature** | inventaire de sources · aucune modification hors pack |

---

## 1. Vérité Git

| Élément | Valeur |
|---------|--------|
| Repo | `mcleland147/sfia-workspace` |
| `origin/main` | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| Merge tip | PR #286 — README post-merge F03/F11/F13 |
| Parent merge F03 pack | PR #285 — `dad6e00344ad5750cd352db3af33c150c780491b` (2026-07-28 19:54:21 +0200) |
| Branche locale | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| Upstream projet | **aucun** |
| Remote homonyme | **aucune** |

---

## 2. Sources méthode

| Source | Rôle |
|--------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | template d’exécution cycle |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routing |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | guardrails |
| `method/sfia-fast-track/checklists/guardrails-checklist.md` | checklist complémentaire |

Ces quatre chemins core (+ template) correspondent à `SFIA_CANONICAL_CORE_PATHS` au HEAD courant.

---

## 3. Packs T-A7 (canon sur main)

| Pack | Usage pour ce cycle |
|------|---------------------|
| `t-a7-legacy-cutover-framing/` | définitions P03–P11 · stops SC-* · rollback candidat |
| `t-a7-next-decision-step-framing/` | paysage décisions · séquencement |
| `t-a7-option-c-wave-1-legacy-scope-framing/` | inventaire MethodMode · method/** · OPS1 · W1-D01…D05 |
| `t-a7-f03-f11-f13-documentary-arbitration/` | F03.3 · F11.2 · F13.4 adoptées · anti-claims |

---

## 4. Handoffs / intégrations

| Réf | Preuve |
|-----|--------|
| PR #285 | décisions F03/F11/F13 intégrées · merge `dad6e003…` |
| PR #286 | alignement README post-merge · merge `2a3c59c…` |
| Handoff `sfia/review-handoff` | `sfia-review-handoff/latest-chatgpt-review.md` — dernier cycle README #286 |

---

## 5. Sources techniques read-only (preuves)

| Surface | Fichier / symbole | Observation |
|---------|-------------------|-------------|
| Canonical paths | `app/lib/platform/sfia-context/canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` | allowlist fermée : template + 3 `method/.../core/*` |
| Loader | `app/lib/platform/sfia-context/sourceLoader.ts` · `loadCanonicalCoreSources` | lecture disque + digest SHA-256 |
| MethodMode | `app/lib/d1/types.ts` · `METHOD_MODES` / `MethodMode` | `SFIA_V2_6` · `TRANSITION` · `V3_CANDIDATE` — **actif** |
| Select MethodMode | `app/lib/d1/actions.ts` · `actionSelectMethodMode` | action présente ; candidat retrait futur W1-D03 |
| OPS1 wrapper paths | `app/lib/ops1/sfia/canonicalPaths.ts` | réexport temporaire platform |
| Allowlist OPS1 | `app/lib/ops1/allowlistEvaluation.ts` · `evaluateAllowlist` | deny-by-default · structure deny `method/` pour actions I4 |
| Path-policy CT | `app/lib/platform/security/pathPolicy.ts` · `decideReadPath` | deny `method/` (asymétrie vs loader canonique) |
| Import boundaries | `app/__tests__/platform/import-boundaries.test.ts` | D1↛OPS1 · platform↛D1/OPS1 |
| D1 provider | `app/lib/d1/intake/resolveProvider.ts` | surface partagée conversation · jamais OPS1 direct |
| OPS1 SQLite | `app/lib/ops1/paths.ts` · `resolveOps1SqlitePath` | `.sfia-exec/.../ops1.sqlite` gitignored |
| OA audit | `app/lib/oa/project/infrastructure/observability.ts` | console / mémoire — pas RUN production |
| Health | `app/lib/oa/execution-attempt/ports/agentRegistry.ts` | health **simulé** — **aucune** route readiness F11.2 |

---

## 6. Décisions existantes (autorité)

| ID | Statut | Effet sur ce pack |
|----|--------|-------------------|
| W1-B / W1-D01 | `DECIDED` | plan candidat retrait documentaire autorisé comme trajectoire |
| W1-D02 | `DECIDED` | actifs confirmés (MethodMode D1 · trio method core · consommateurs) |
| W1-D03 | `DECIDED` | candidats futurs — **pas** suppression |
| W1-D04 | `DECIDED` | isolation OPS1 **avant** tout retrait |
| W1-D05 | `DECIDED` | F03/F11/F13 avant prep technique — **contenu F maintenant décidé** |
| F03.3 | `DECIDED` | set préconditions entrée |
| F11.2 | `DECIDED` | API read/readiness minimale future |
| F13.4 | `DECIDED` | hybrid Git + vue RO bornée |

---

## 7. Périmètre / hors périmètre

### Inclus

- qualification documentaire P03–P11 ;
- design contrat OPS1 ;
- rollback · preuves · holds · évaluation F03.3 ;
- bulletin Morris ouverture.

### Exclus

- toute mutation code / config / tests / CI ;
- toute implémentation API / UI / RO runtime ;
- push / PR / merge projet ;
- ouverture T-A7 · delivery · cutover.

---

## 8. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| Recherché | oui |
| Cycle qualifié | architecture technique et readiness préalable à T-A7 |
| Statut | candidate ou absent |
| Usage | experimental cognitive guidance |
| Autorité | aucune autorité d’exécution |
| Fallback | template SFIA v2.6 + packs T-A7 sur main |
| Limites | ne peut ni ouvrir T-A7 ni autoriser une implémentation |

---

## 9. Anti-claims

- lecture technique ≠ autorisation de modification ;
- inventaire Wave 1 ≠ retrait ;
- F* décidées ≠ surfaces livrées ;
- ce pack ≠ préparation technique exécutable.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md`

```markdown
# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — NOT AN AUTHORIZATION` |
| **T-A7** | `NOT OPEN` |

> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable, ni delivery, ni cutover.

---

## 1. Légende des statuts

| Statut | Sens |
|--------|------|
| `SATISFIED — EVIDENCED` | preuve Git / contrat vérifiable pour l’exigence **telle que formulée** |
| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
| `MISSING — EVIDENCED` | absence de preuve constatée |
| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

Niveaux d’exigence (héritage F03.3 / framing cutover) :

| Niveau | Sens |
|--------|------|
| Avant **prep technique** | inventaire / design / matrice / décisions F — **pas** runtime green |
| Avant **delivery preparation** | + stratégies / designs prouvables · HARD non ignorés |
| Avant **cutover** | + preuves runtime P07–P11 · F11.2 · F13.4 opérationnels · gate D |

---

## 2. Matrice P03–P11

| ID | Exigence canonique | Preuves Git | Statut | Écart | Risque | Action documentaire / technique future | Gate | Stop condition | Avant prep tech | Avant delivery prep | Avant cutover |
|----|--------------------|-------------|--------|-------|--------|----------------------------------------|------|----------------|-----------------|---------------------|---------------|
| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` (template + 3 method core) · OA `app/lib/oa/doctrine/**` | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; fallback method encore actif | fallback silencieux | inventaire consommateur + plan remplacement registry | F03 / prep distinct | SC-05 · SC-02 | matrice + inventaire | plan tests resolve/deny | preuve import + runtime no-fallback |
| P04 | `sourceLoader` → package loader + digest | `sourceLoader.ts` · digest SHA-256 · blob SHA | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible + pin tests | F03 | SC-05 | inventaire | digest pin tests | loader unique cible |
| P05 | `contextResolver` → CkcResolver + doctrine | T-A2 `memoryCkcResolver` · lectures method encore possibles hors OA mémoire | `PARTIAL — EVIDENCED` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | boundary CKC documentée + tests | F03 | SC-05 · SC-02 | inventaire boundaries | boundary tests | no method/** product reads |
| P06 | `sessionContext` / MethodMode deps → OA correlation | MethodMode D1 actif (`types.ts` · `actions.ts`) · anti-claims T-A* | `MISSING — EVIDENCED` | pas de remplacement session OA produit | MethodMode residual | design session OA (doc) | F03 · F11 | SC-04 · SC-05 | design only | design session | preuve no MethodMode |
| P07 | MethodMode → retiré de cible OA | `METHOD_MODES` actif · UI/API D1 · tests `project-foundation.test.ts` | `MISSING — EVIDENCED` | MethodMode présent ; aucun retrait | cutover prématuré | inventaire dépendances + hold flag futur | F03 · F11 | SC-04 | inventaire | plan retrait | UI+API+import proofs |
| P08 | lectures `method/**` → absentes cible OA | loader canonique lit 3 fichiers method · CT path-policy deny asymétrique | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy silencieuse | CI boundary candidates · ne pas retirer sans remplacement | F03 | SC-02 · SC-05 | règles CI candidates | grep/import CI | CI + runtime proof |
| P09 | badges v2.6 → retirés surfaces OA | D1 MethodMode labels ; UI OA native absente | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion utilisateur | design UI OA distinct F11 product | F11 | SC-04 | design UI | design UI | UI tests |
| P10 | OPS1 contracts → ACL / isolation | `allowlistEvaluation.ts` · `pathPolicy.ts` · `import-boundaries.test.ts` · pack Wave 1 `04` | `PARTIAL — EVIDENCED` | path-policy ≠ IAM ; pas d’ACL cutover ; pas no-cross-call runtime OA | double identité OPS1/v3 | **contrat isolation** (ce pack) puis validation Morris | F13 · W1-D04 | SC-03 · SC-12 · W1-S5 | frontière documentée | frontière + tests | ACL runtime |
| P11 | historique legacy → read-only policy | F13.4 décidé · **aucune** enforcement runtime · audit OA mémoire | `MISSING — EVIDENCED` | politique cible non appliquée ; durée conservation non fixée | mutation / fuite historique | design vue RO + politique mutation=deny | F13 | SC-06 | politique candidate | politique Morris | enforcement RO |

---

## 3. Synthèse par statut

### Satisfaits

Aucun P03–P11 en `SATISFIED — EVIDENCED` au HEAD courant pour l’exigence **de remplacement Option A**.

### Partiels

| ID | Motif court |
|----|-------------|
| P03 | registry OA existe ; canonical paths method encore actifs |
| P04 | digest présent ; cutover loader absent |
| P05 | CKC mémoire ; lectures method produit non exclues |
| P10 | path-policy / allowlist / import tests ; isolation cutover absente |

### Manquants

| ID | Motif court |
|----|-------------|
| P06 | pas de session OA de remplacement |
| P07 | MethodMode non retiré |
| P08 | lectures `method/**` actives |
| P09 | badges / UI OA native absents |
| P11 | RO historique non enforce |

### Unknown (preuves à collecter)

| Sujet | Statut | Pourquoi |
|-------|--------|----------|
| Volumes DB / `.sfia-exec` | `UNKNOWN — EVIDENCE REQUIRED` | SQLite local gitignored · pas de campagne de mesure |
| Hits allowlist `method/` runtime | `UNKNOWN — EVIDENCE REQUIRED` | inventaire structurel ≠ hits live |
| Cross-call OPS1 ↔ OA runtime | `UNKNOWN — EVIDENCE REQUIRED` | import tests ≠ preuve runtime |
| Durée conservation F13 | `UNKNOWN — EVIDENCE REQUIRED` | reportée à cycle distinct |
| IAM multi-user | `NOT SELECTED` | hors F03.3 satisfaction seule |

---

## 4. Blockers pour prep technique / ouverture

1. P06–P09 · P11 `MISSING` — interdisent retrait / cutover ; limitent un lot de développement borné.
2. P10 `PARTIAL` — isolation OPS1 **définie** dans `03` mais **non validée** Morris / non implémentée.
3. Asymétrie path-policy deny `method/` vs loader canonique allow — risque de confusion opérationnelle.
4. HARD / B5 / R1 / R-M01 ouverts — non ignorés ; bloquent delivery (B5 STOP BEFORE DELIVERY).

---

## 5. Dépendances

```
W1-D02 (actifs) ──► P03/P04/P07/P08 (lectures & MethodMode)
W1-D04 (OPS1)   ──► P10 ──► F13.4
F11.2           ──► P06/P07/P09/P22 (surfaces read)
F13.4           ──► P10/P11
F03.3           ──► qualification de cette matrice (≠ satisfaction runtime)
```

---

## 6. Anti-claims

- matrice qualifiée ≠ P* satisfaits ;
- `PARTIAL` ≠ autorisation de retrait ;
- P01 historique (T-A0…T-A6 intégrés) ≠ delivery / cutover ;
- décision F13.4 ≠ P11 `SATISFIED`.

---

## 7. Verdict section

`P03–P11 QUALIFIED FROM EVIDENCE — 0 SATISFIED / 4 PARTIAL / 5 MISSING — UNKNOWN EVIDENCE ITEMS OPEN — NO AUTHORIZATION`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md`

```markdown
# 03 — Contrat d’isolation OPS1

| Champ | Valeur |
|-------|--------|
| **Document** | `03-ops1-isolation-contract.md` |
| **Statut** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Code / ACL runtime** | **aucune modification** |

---

## 1. Frontière fonctionnelle

**OPS1** = Operational Vertical Slice 1 — POC Studio (conversation + action Markdown gouvernée), **distinct** de :

| Domaine | Emplacement | Relation |
|---------|-------------|----------|
| Option A runtime | `app/lib/oa/**` | **pas** d’identité v3 ; SC-12 |
| D1 Project Foundation | `app/lib/d1/**` | import D1↛OPS1 prouvé ; surface conversation partagée |
| Control Tower | tools / docs `66`–`74` · path-policy platform | construit **sur** OPS1 (extension in-place) |
| Méthode legacy | `method/**` | lectures via canonical loader ; deny structurel allowlist actions I4 |

---

## 2. Chemins et namespaces concernés

| Namespace | État actuel | Cible documentaire |
|-----------|-------------|--------------------|
| `app/lib/ops1/**` | ACTIVE | rester actif temporairement sous frontière |
| `app/features/ops1/**` · `app/app/ops1/**` | ACTIVE | idem |
| `app/__tests__/ops1/**` · `e2e/ops1-i*.spec.ts` | ACTIVE | preuves isolation futures |
| `projects/sfia-studio/.sfia-exec/**` | ACTIVE local (gitignored) | hors Git · procédures locales |
| `app/lib/ops1/sfia/canonicalPaths.ts` | wrapper temporaire | candidate isolation / remplacement doctrine |
| Allowlist `method/` | structurelle | revue avant tout retrait method |
| Docs `41`–`65` OPS1 | DOCUMENTATION ONLY | archive Git (F13.4) |

---

## 3. Matrice des surfaces

| Surface | État actuel | Cible documentaire | Lecture | Écriture | IAM | Path-policy | Audit | Rollback |
|---------|-------------|--------------------|---------|----------|-----|-------------|-------|----------|
| Session / conversation OPS1 | ACTIVE | actif temporaire | oui (POC) | oui (POC borné) | `NOT SELECTED` | allowlist + gates | partiel / local | procédures `.sfia-exec` |
| Action Markdown I4–I6 | ACTIVE | actif temporaire | n/a | bornée allowlist | `NOT SELECTED` | `evaluateAllowlist` | tests e2e | deny restore |
| Canonical SFIA context (via OPS1 wrapper) | ACTIVE | isoler dépendance method avant retrait | oui (3+1 paths) | non (lecture) | n/a | loader allowlist ≠ CT deny | digest | pin digest |
| Control Tower tools | ACTIVE (couplage) | conserver distinction OPS1≠OA | oui | tools bornés | `NOT SELECTED` | `decideReadPath` | CT logs locaux | revert tools |
| D1 intake provider | SHARED_SURFACE | ne pas fusionner identités | oui | D1 only | `NOT SELECTED` | import boundary | D1 tests | hold provider |
| OA `lib/oa` | ACTIVE mémoire | **aucune** fusion OPS1 | OA only | OA only | `NOT SELECTED` | antiLegacy | console/memory | n/a pack |
| Historique legacy (F13.4) | NON IMPLÉMENTÉ | vue RO bornée future | RO only | **interdite** | futur gate | path-policy ≠ IAM | journal accès | restore ACL |
| MethodMode D1 | ACTIVE | hors OPS1 (boundary) | D1 | D1 mutate | `NOT SELECTED` | n/a OPS1 | D1 tests | hold MethodMode |

---

## 4. Lectures autorisées / mutations interdites (cible design)

### Lectures autorisées (cible)

- lecture session OPS1 dans le POC ;
- lecture allowlist / décision path-policy ;
- lecture canonical sources via loader **existant** (jusqu’à remplacement doctrine) ;
- future vue F13.4 RO sur historique **explicitement** marqué historique.

### Mutations interdites (cible + holds actuels)

- toute mutation présentée comme « cutover OA » via OPS1 ;
- mutation de `method/**` hors gate Morris (SC-02) ;
- mutation des contrats OPS1 hors gate (SC-03) ;
- mutation d’historique legacy une fois politique F13 appliquée ;
- présentation OPS1 comme runtime v3 Option A (SC-12).

---

## 5. Path-policy ≠ IAM (norme)

| Concept | Définition dans ce repo | Preuve |
|---------|-------------------------|--------|
| **Path-policy / allowlist** | contrôle de **chemins** et d’actions bornées (deny-by-default) | `evaluateAllowlist` · `decideReadPath` |
| **IAM** | identité multi-user / rôles / authority registry | `NOT SELECTED` · R-T-A3-3 OPEN |

**Norme W1-D04 / F13.4 :** isoler OPS1 **ne** sélectionne **pas** un IAM. Toute confusion path-policy ↔ IAM est une stop condition (`TR-S-PP-IAM`).

---

## 6. Couplage CT / D1

| Lien | Nature | Implication isolation |
|------|--------|----------------------|
| CT sur `lib/ops1` | extension in-place | isoler OPS1 = impacter CT ; planifier frontières outils |
| D1 `resolveIntakeProvider` | shared conversation surface | pas d’import D1→OPS1 ; état co-hébergé `.sfia-exec` fichiers séparés |
| Import boundaries | tests platform | nécessaire **mais insuffisant** vs preuve runtime no-cross-call |

---

## 7. Interfaces F11.2 / F13.4

| Décision | Interface avec OPS1 |
|----------|---------------------|
| F11.2 | API read/readiness pourra exposer **statut OPS1 / holds** en lecture ; **aucune** mutation ; pas d’UI admin obligatoire |
| F13.4 | Git = vérité ; vue RO bornée pour support/audit ; isolation OPS1 **préalable** à retrait ; accès journalisés |

---

## 8. Classification

| Catégorie | Contenu |
|-----------|---------|
| **À isoler avant retrait** | dépendances method dans OPS1/CT context · allowlist hits · identité OPS1≠OA · historique mutable |
| **Peut rester actif temporairement** | POC OPS1 · e2e I1–I6 · CT tools sous path-policy |
| **Candidat au retrait futur** | wrappers temporaires · duplications non canoniques (W1-D03) — **après** preuves |
| **Historique** | docs OPS1 cadrage · archives Git |
| **Blocker** | absence de validation Morris de ce contrat · UNKNOWN hits allowlist · UNKNOWN cross-call runtime |

---

## 9. Observabilité / audit / rollback (design)

| Domaine | Exigence documentaire | État |
|---------|----------------------|------|
| Observabilité | health/readiness F11.2 incluant holds OPS1 | non implémenté |
| Audit | journal accès historique RO + décisions allowlist | partiel / mémoire |
| Rollback | R1 restore allowlist / wrappers ; R0 revert docs | documenté dans `04` · non testé |

---

## 10. Conditions de retrait futur (hors ce cycle)

1. Contrat OPS1 **validé** Morris.
2. Preuve runtime no-cross-call OPS1 ↔ OA.
3. Inventaire allowlist `method/` hits.
4. Remplacement doctrine / canonical paths (P03–P05).
5. F13.4 RO enforce + F11.2 read API validée.
6. Gate Morris **distinct** de retrait — ≠ ouverture T-A7 seule.

---

## 11. Anti-claims

- contrat proposé ≠ isolation réalisée ;
- path-policy ≠ IAM ;
- tests import ≠ preuve runtime ;
- OPS1 actif ≠ Option A ;
- F13.4 ≠ ACL validée.

---

## 12. Verdict section

`OPS1 ISOLATION CONTRACT DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED — PATH-POLICY DISTINCT FROM IAM — NO CODE CHANGE`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/04-rollback-strategy.md`

```markdown
# 04 — Stratégie de rollback

| Champ | Valeur |
|-------|--------|
| **Document** | `04-rollback-strategy.md` |
| **Statut** | `DOCUMENTED — NOT TESTED — NOT AUTHORIZED` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Commandes destructives** | **aucune** fournie |

> Aucun niveau R1–R3 n’est autorisé ni testé dans ce cycle. R0 seul est naturellement réversible (revert Git du pack).

---

## R0 — Rollback documentaire

| Champ | Valeur |
|-------|--------|
| **Trigger** | erreur de cadrage · contradiction gouvernance · décision Morris d’annuler le pack |
| **Owner** | Morris / Cursor sous gate doc |
| **Préconditions** | pack non consommé comme autorisation technique |
| **Mécanisme** | `git revert` du commit de framing (ou revert merge futur si intégré) |
| **Preuves** | SHA parent = `2a3c59c…` · tree pack isolé |
| **Durée** | immédiate (Git) |
| **Impact** | documentation uniquement · **aucune** conséquence runtime |
| **Point de non-retour** | aucun (tant que non exécuté techniquement) |
| **Gate Morris** | non requis pour revert local non poussé ; revert sur main = gate doc |

---

## R1 — Rollback de préparation technique future

| Champ | Valeur |
|-------|--------|
| **Trigger** | échec design/tests bornés · régression MethodMode / allowlist · frontière OPS1 ambiguë |
| **Owner** | owner technique + Morris |
| **Préconditions** | prep technique **préalablement** autorisée par gate distinct · backups configs |
| **Mécanisme candidat** | restaurer configs / feature holds · rétablir MethodMode deps existantes · restore allowlist / path-policy · **sans** perte d’historique Git |
| **Preuves** | tests D1 verts · import boundaries · digest canonical inchangé ou re-pin |
| **Durée** | heures (cible) |
| **Impact** | retour état pré-prep · historique conservé |
| **Point de non-retour** | migration données non réversible sans R2 |
| **Gate Morris** | obligatoire avant et après |

**Interdit ici :** commandes de purge · force-delete `.sfia-exec` · rewrite history.

---

## R2 — Rollback de delivery futur

| Champ | Valeur |
|-------|--------|
| **Trigger** | CI rouge post-merge delivery · violation SC-02/03 · régression P03–P08 |
| **Owner** | owner delivery + Morris |
| **Préconditions** | delivery autorisée par gate C · snapshots DB/config disponibles |
| **Mécanisme candidat** | revert merge delivery · restore package pin / digest · restore allowlist · restore ruleset si touché · contrôle migrations (forward-only vs down) |
| **Ordre de restauration candidat** | (1) hold flags ON · (2) revert code · (3) restore config/ACL · (4) vérifier lectures method/OA · (5) preuves CI |
| **Preuves** | CI required green · smoke MethodMode · OPS1 e2e I1–I6 si touché |
| **Durée** | à définir au gate C |
| **Impact** | code + config · données selon migration |
| **Point de non-retour** | migration destructive sans backup |
| **Gate Morris** | obligatoire |

---

## R3 — Rollback de cutover futur

| Champ | Valeur |
|-------|--------|
| **Trigger** | cutover partiel · mutation historique · perte audit · P07–P11 non tenus |
| **Owner** | Morris (autorité) + owner RUN/sécu |
| **Préconditions** | cutover autorisé par gate D · rollback testé (P23) · backups |
| **Mécanisme candidat** | réactivation holds P07–P09 · restore ACL historique · restore DB/snapshot · réouverture lecture legacy contrôlée · **intégrité** audit |
| **Réversibilité** | doit être démontrée **avant** cutover (SC-06) |
| **Intégrité données / historique** | Git vérité · vue RO non concurrente · pas de rewrite silent |
| **Délai maximal candidat** | à fixer au gate D (non inventé ici) |
| **Preuves** | RUN metrics · audit trail · tests RO deny-write · health F11.2 |
| **Point de non-retour** | purge historique · IAM cutover sans revoke path |
| **Gate Morris** | obligatoire · pas de reprise auto après STOP |

---

## Synthèse

| Niveau | Autorisé maintenant | Testé | Runtime impact |
|--------|---------------------|-------|----------------|
| R0 | oui (doc locale) | n/a Git | aucun |
| R1 | non | non | futur |
| R2 | non | non | futur |
| R3 | non | non | futur |

---

## Anti-claims

- rollback documenté ≠ rollback testé ;
- R0 ≠ autorisation R1–R3 ;
- hold flag documenté ≠ hold implémenté ;
- backup mentionné ≠ backup existant mesuré.

---

## Verdict section

`ROLLBACK R0–R3 DOCUMENTED — NOT TESTED — NOT AUTHORIZED — NO DESTRUCTIVE COMMANDS`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md`

```markdown
# 05 — Plan de preuves et non-régression

| Champ | Valeur |
|-------|--------|
| **Document** | `05-evidence-and-non-regression-plan.md` |
| **Statut** | `CATALOGUED — NOT EXECUTED — NO TESTS WRITTEN` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Niveaux L0–L5** | L0 doc · L1 static Git · L2 contrat · L3 unit · L4 integration · L5 E2E/runtime/RUN |

---

## 1. Catalogue

| ID | Surface | Preuve attendue | Méthode future | Automatisable ? | Niveau | Gate | Statut actuel |
|----|---------|-----------------|----------------|-----------------|--------|------|---------------|
| E-MM-01 | MethodMode | inventaire modes + actions | relecture `types.ts` / `actions.ts` | partiel | L1 | F03 / W1 | `PARTIAL — EVIDENCED` |
| E-MM-02 | MethodMode | tests D1 select + optimistic lock | réutiliser `project-foundation.test.ts` | oui | L3 | prep | `PARTIAL — EVIDENCED` |
| E-MM-03 | MethodMode | hold flag empêche retrait prématuré | design + test futur | oui | L3–L4 | SC-04 | `MISSING — EVIDENCED` |
| E-D1-01 | D1 | import boundary D1↛OPS1 | `import-boundaries.test.ts` | oui | L3 | W1-D04 | `SATISFIED — EVIDENCED` (boundary only) |
| E-D1-02 | D1 | shared provider ≠ identité OPS1 | review `resolveProvider.ts` | non | L1–L2 | W1-D04 | `PARTIAL — EVIDENCED` |
| E-CP-01 | Trio/canon | `SFIA_CANONICAL_CORE_PATHS` stable + digest | `sourceLoader` digest | oui | L1–L3 | P03/P04 | `PARTIAL — EVIDENCED` |
| E-CP-02 | Consommateurs | map prompts / OPS1 wrapper / CT | inventaire Wave 1 + grep | partiel | L1 | W1-D02 | `PARTIAL — EVIDENCED` |
| E-CP-03 | Consommateurs | no-fallback produit vers method hors allowlist | CI grep + runtime | oui | L4–L5 | P08 | `MISSING — EVIDENCED` |
| E-OPS-01 | OPS1 | allowlist deny-by-default | `allowlistEvaluation.test.ts` | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
| E-OPS-02 | OPS1 | path-policy CT deny method | tests pathPolicy | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
| E-OPS-03 | OPS1 | no-cross-call runtime OPS1↔OA | probe / e2e dédié futur | oui | L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-OPS-04 | OPS1 | e2e I1–I6 non régressés | `ops1-i*.spec.ts` | oui | L5 | prep | `PARTIAL — EVIDENCED` |
| E-OPS-05 | OPS1 | inventaire hits allowlist `method/` | campagne mesure | partiel | L1–L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-F11-01 | F11.2 API | contrat read MethodMode / deps / migration / health / holds | design OpenAPI-like doc | non (doc) | L0–L2 | F11 | `MISSING — EVIDENCED` |
| E-F11-02 | F11.2 API | audit de lecture | journal + test | oui | L4 | F11 | `MISSING — EVIDENCED` |
| E-F11-03 | F11.2 API | aucune mutation implicite | contract tests deny-write | oui | L3–L4 | F11 | `MISSING — EVIDENCED` |
| E-F13-01 | F13.4 | Git archive vérité | tags/commits packs | oui | L1 | F13 | `PARTIAL — EVIDENCED` |
| E-F13-02 | F13.4 | vue RO bornée + deny mutation | impl + tests futurs | oui | L4–L5 | F13 | `MISSING — EVIDENCED` |
| E-F13-03 | F13.4 | journalisation accès | audit sink durable | oui | L4 | F13 | `MISSING — EVIDENCED` |
| E-PER-01 | Persistence | DB SELECTED + volumes | décision + campagne | non | L0–L1 | F10 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-IAM-01 | IAM | modèle identité | décision F10 | non | L0 | F10 | `NOT SELECTED` |
| E-AUD-01 | Audit OA | journal durable ≠ mémoire | design RUN | partiel | L2–L5 | P23 | `PARTIAL — EVIDENCED` |
| E-OBS-01 | Observabilité | health/readiness réel | endpoint F11.2 | oui | L5 | F11 · P23 | `MISSING — EVIDENCED` |
| E-CI-01 | CI | import boundary required | ruleset / workflow | oui | L4 | P24 | `PARTIAL — EVIDENCED` |
| E-RB-01 | Rollback | R0 revert pack | Git | oui | L1 | ce pack | `SATISFIED — EVIDENCED` (mécanisme) |
| E-RB-02 | Rollback | R1–R3 drills | runbook + exercice | partiel | L5 | SC-06 | `MISSING — EVIDENCED` |

---

## 2. Distinctions de preuves

| Type | Exemples IDs |
|------|--------------|
| Statiques Git | E-MM-01 · E-CP-01 · E-F13-01 · E-RB-01 |
| Contrat | E-F11-01 · E-D1-02 · contrat OPS1 |
| Unitaires | E-MM-02 · E-OPS-01 · E-OPS-02 · E-D1-01 |
| Intégration | E-F11-02 · E-CI-01 |
| E2E | E-OPS-04 |
| Runtime | E-OPS-03 · E-CP-03 · E-OBS-01 |
| Sécurité | E-IAM-01 · E-F11-03 · path-policy≠IAM |
| RUN | E-AUD-01 · E-OBS-01 · E-RB-02 |
| Rollback | E-RB-01 · E-RB-02 |

---

## 3. Tests candidats (non écrits)

| Candidat | Objectif | Niveau |
|----------|----------|--------|
| Contract test F11.2 deny-write | garantir read-only API | L3 |
| Runtime probe OPS1↛OA | compléter import boundaries | L5 |
| RO history mutation deny | F13.4 | L4–L5 |
| Canonical digest pin CI | P04 | L4 |
| Allowlist hit report job | UNKNOWN → evidenced | L1–L5 |

**Ce cycle n’écrit ni n’exécute ces tests.**

---

## 4. Anti-claims

- catalogue ≠ preuves collectées ;
- test existant OPS1 ≠ isolation cutover prouvée ;
- digest loader ≠ cutover loader ;
- health simulé ≠ readiness F11.2.

---

## 5. Verdict section

`EVIDENCE CATALOGUE DEFINED — NOT EXECUTED — CRITICAL RUNTIME AND F11/F13 PROOFS MISSING OR UNKNOWN`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md`

```markdown
# 06 — Holds, anti-bypass et stop conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `06-holds-and-stop-conditions.md` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Statut** | `HOLDS ACTIVE — ANTI-BYPASS DOCUMENTED` |

---

## 1. Holds obligatoires (toujours actifs)

| Hold | Statut exigé | Sens |
|------|--------------|------|
| T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
| F03.3 | décidée ≠ satisfaite | set partiel ; prep technique exécutable interdite |
| F11.2 | décidée ≠ API disponible | pas d’implémentation |
| F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
| Isolation OPS1 | requise ≠ réalisée | contrat proposé seulement |
| B5 | `OPEN` | STOP BEFORE DELIVERY |
| R1 | `OPEN` | atomicité non résolue |
| R-M01 | `OPEN` | ClaimEvaluator readiness |
| HARD (R-T-A3-1/2…) | `OPEN HARD` | autorité / atomicité |
| Persistence / IAM | `NOT SELECTED` | pas de sélection implicite |
| RGPD production | `NOT VALIDATED` | U-M02 ouvert |
| T-A6 COMPLETE | `NOT DECLARED` | |
| Option A | `NOT COMPLETE` | |
| Delivery preparation | `NOT AUTHORIZED` | |
| Delivery | `NOT AUTHORIZED` | |
| Cutover | `NOT AUTHORIZED` | |

---

## 2. Anti-bypass

| Mécanisme | Contenu |
|-----------|---------|
| Gates séquencés | Wave 1 → F03/F11/F13 → readiness → **décision ouverture** → prep bornée → delivery → cutover |
| Pas de saut A→D | aucune transition automatique framing → cutover |
| HARD non ignorables | critère F03.3 « aucun blocker HARD ignoré » |
| Path-policy ≠ IAM | stop si confondus |
| Décision ≠ implémentation | F* / W1* ne valent pas code |
| B5 | bloque delivery même si framing vert |
| Review handoff | consommation post-cycle ChatGPT — ne remplace pas gate Morris |

---

## 3. Stop conditions (héritage + readiness)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-06 | rollback/hold non démontrable avant cutover | STOP |
| SC-07 | real execution sans HARD/persistence/IAM | STOP |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP |
| W1-S1 | inventaire = autorisation retrait | STOP |
| W1-S3 | vague 1 = T-A7 OPEN | STOP |
| W1-S4 | prep technique sans F03/F11/F13 décidés | *(contenu F maintenant décidé — hold passe à satisfaction/impl)* |
| W1-S5 | retrait sans isolation OPS1 définie/validée | STOP |
| A52-B5 | delivery avec B5 OPEN non accepté | STOP BEFORE DELIVERY |
| TR-S-01 | preuve absente présentée comme SATISFIED | STOP |
| TR-S-02 | contradiction documentaire (décision vs anti-claim) | STOP |
| TR-S-03 | dépendance UNKNOWN traitée comme nulle | STOP |
| TR-S-04 | mutation historique possible non holdée | STOP |
| TR-S-05 | frontière OPS1 ambiguë | STOP |
| TR-S-PP-IAM | path-policy confondue avec IAM | STOP |
| TR-S-06 | rollback non démontrable au niveau requis | STOP |
| TR-S-07 | volume/migration non qualifiés avant mutation data | STOP |
| TR-S-08 | blocker HARD contourné | STOP |
| TR-S-09 | scope élargi hors pack readiness / hors gate | STOP |
| TR-S-10 | claim T-A7 OPEN sans bulletin Morris | STOP |

---

## 4. Mapping preuves absentes → stops

| Preuve manquante | Stop |
|------------------|------|
| E-OPS-03 cross-call | TR-S-05 · W1-S5 |
| E-F11-* API | ne pas claim cutover ready |
| E-F13-02/03 RO | TR-S-04 · P11 |
| E-PER-01 volumes | TR-S-07 |
| E-RB-02 drills | SC-06 / TR-S-06 au niveau cutover |

---

## 5. Anti-claims

- hold documenté ≠ hold runtime ;
- stop condition ≠ rollback prouvé ;
- F* décidées ≠ holds levés ;
- readiness pack ≠ bypass vers delivery.

---

## 6. Verdict section

`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — T-A7 REMAINS NOT OPEN — HARD NOT IGNORED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md`

```markdown
# 07 — Évaluation de satisfaction F03.3

| Champ | Valeur |
|-------|--------|
| **Document** | `07-f03-3-satisfaction-assessment.md` |
| **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Verdict** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Prep technique exécutable** | `PROHIBITED` |
| **T-A7** | `NOT OPEN` |

---

## 1. Matrice de satisfaction

| Critère F03.3 | État | Preuve | Écart | Bloquant pour prep technique ? |
|---------------|------|--------|-------|--------------------------------|
| Inventaire legacy validé | `SATISFIED — EVIDENCED` | Wave 1 packs `02`–`05` · W1-D02 | inventaire ≠ runtime green | Non (doc) |
| Dépendances actives confirmées | `SATISFIED — EVIDENCED` | W1-D02 · `canonicalPaths` · MethodMode · consommateurs | — | Non (doc) |
| Candidats au retrait identifiés | `SATISFIED — EVIDENCED` | W1-D03 | candidats ≠ suppression | Non (doc) |
| Plan documentaire W1-B | `SATISFIED — EVIDENCED` | W1-D01 / W1-B `DECIDED` | plan ≠ exécution | Non (doc) |
| Matrice P03–P11 qualifiée | `SATISFIED — EVIDENCED` (qualification) | `02-p03-p11-readiness-matrix.md` | 0 P SATISFIED runtime ; 5 MISSING | **Oui** si prep vise retrait runtime |
| Isolation OPS1 définie | `PARTIAL — EVIDENCED` | `03-ops1-isolation-contract.md` statut `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` | non validée Morris · non implémentée | **Oui** |
| F11 décidée | `SATISFIED — EVIDENCED` | F11.2 sur main (PR #285) | ≠ API | Non pour décision ; **Oui** pour cutover |
| F13 décidée | `SATISFIED — EVIDENCED` | F13.4 sur main | ≠ RO runtime | Non pour décision ; **Oui** pour retrait |
| Stratégie rollback documentée | `SATISFIED — EVIDENCED` (doc) | `04-rollback-strategy.md` | `NOT TESTED` | Non pour doc ; **Oui** avant cutover (SC-06) |
| Preuves candidates de non-régression | `PARTIAL — EVIDENCED` | `05-evidence-and-non-regression-plan.md` | nombreuses MISSING/UNKNOWN | **Oui** pour lot technique non borné |
| Anti-bypass des gates | `SATISFIED — EVIDENCED` | `06-holds-and-stop-conditions.md` | holds doc ≠ runtime | Non (doc) |
| Aucun blocker HARD ignoré | `SATISFIED — EVIDENCED` (non-ignorance) | HARD `OPEN HARD` explicitement holdé | HARD non fermé | **Oui** pour delivery / real execution |

---

## 2. Lecture du verdict

### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`

1. Isolation OPS1 = proposée, **pas** validée Morris (`MORRIS VALIDATION REQUIRED`).
2. Catalogue de preuves : gaps runtime / F11 / F13 / volumes / cross-call = `MISSING` / `UNKNOWN`.
3. Qualifier P03–P11 **révèle** un jeu majoritairement non vert — la qualification doc ne convertit pas les MISSING en SATISFIED.

### Pourquoi pas `F03.3 NOT SATISFIED — TECHNICAL PREPARATION PROHIBITED` seul

Plusieurs critères documentaires structurels sont effectivement en place (inventaire, W1-B, F11/F13, matrice, rollback doc, anti-bypass, HARD non ignorés). Le set n’est pas vide : il est **partiel**.

### Conséquence normative

- préparation technique **exécutable** (code, ACL, API, migrations) : **interdite** ;
- travail documentaire / design borné pour traiter les blockers : possible **uniquement** sous gate Morris distinct ;
- ouverture T-A7 pour développement : **non recommandée** tant que blockers OPS1 + preuves critiques non traités (voir `08`).

---

## 3. Blockers identifiés (liste courte)

1. Validation Morris du contrat OPS1.
2. Preuves UNKNOWN : cross-call runtime · hits allowlist · volumes.
3. F11.2 / F13.4 non disponibles runtime.
4. P06–P09 · P11 `MISSING`.
5. HARD / B5 / R1 / R-M01 ouverts (delivery/real-exec).

---

## 4. Anti-claims

- évaluation ≠ ouverture T-A7 ;
- PARTIAL ≠ licence de coder ;
- critères doc SATISFIED ≠ cutover ready ;
- HARD non ignoré ≠ HARD fermé.

---

## 5. Verdict

`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md`

```markdown
# 08 — Morris decision pack — ouverture T-A7

| Champ | Valeur |
|-------|--------|
| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
| **Statut** | `MORRIS DECISION REQUIRED` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7 actuel** | `NOT OPEN` |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Présélection** | **aucune** |

---

## Question

**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**

---

## Options

### O1 — Ne pas ouvrir

Conditions insuffisantes ou blockers non traités.

- **Effet :** T-A7 reste `NOT OPEN` ; aucun code ; poursuivre blockers documentaires.
- **Réversibilité :** totale.
- **Dette :** faible (cadrage seulement).

### O2 — Ouvrir uniquement la préparation technique

Autoriser un lot borné de **design technique / tests** (contrats, specs, tests non branchés runtime legacy), **sans** delivery, **sans** mod `method/**` / OPS1 / MethodMode runtime, **sans** cutover.

- **Effet :** T-A7 pourrait passer à un état « prep only » **si** Morris le définit explicitement ; sinon rester `NOT OPEN` avec gate prep distinct.
- **Réversibilité :** haute (R0/R1).
- **Dette :** moyenne (specs/tests).

### O3 — Ouvrir un premier lot de développement borné

Uniquement si F03.3 est satisfait **et** blockers obligatoires maîtrisés.

- **État actuel :** **non supporté** par les preuves (F03.3 partiel · OPS1 non validé · P06–P09/P11 MISSING · F11/F13 non livrés).
- **Réversibilité :** moyenne/faible selon fichiers touchés.
- **Dette :** élevée si ouvert trop tôt.

### O4 — Custom / différer

Exemples : valider d’abord le contrat OPS1 ; lancer campagne preuves UNKNOWN ; borner un micro-cycle doc-only de satisfaction F03.3.

---

## Recommandation repo-informed (non décisionnelle)

**Statut :** `RECOMMENDED — NOT DECIDED`

**Recommandation Cursor/ChatGPT :** **O1** (ne pas ouvrir), avec enchaînement documentaire vers traitement des blockers ; **O2** uniquement si Morris impose un gate prep **strictement** borné (design/tests, fichiers protégés listés, aucune delivery).

**Ne pas choisir O3** sur la base des preuves actuelles.

### Preuves

- matrice P03–P11 : 0 SATISFIED / 4 PARTIAL / 5 MISSING ;
- OPS1 : `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` ;
- F11.2 / F13.4 : absents runtime ;
- HARD / B5 / R1 / R-M01 : `OPEN` ;
- rollback R1–R3 : `NOT TESTED`.

### Blockers (résumé)

Voir `07` §3.

### Risques si ouverture prématurée

- retrait / mod method sans remplacement (SC-02/SC-05) ;
- double identité OPS1/v3 (SC-12) ;
- cutover aveugle sans F11.2 ;
- mutation historique sans F13.4 ;
- bypass HARD / B5.

### Dette

- sur-cadrage si O2 mal borné ;
- sous-cadrage si O3.

### Réversibilité

- O1/O4 : maximale ;
- O2 : R0/R1 ;
- O3 : dépend du lot.

### Périmètre candidat d’un premier lot (si O2 ultérieur)

| Inclus candidat | Exclu / protégé |
|-----------------|-----------------|
| Specs contrats F11.2 read API | `method/**` |
| Design tests E-OPS-03 / E-F13-* | `app/lib/ops1/**` runtime |
| Docs runbook R1 | MethodMode runtime / DB |
| Mesure volumes (read-only) | delivery · cutover · IAM select |

### Fichiers protégés (non modifiables sans gate dédié)

- `method/**`
- `app/lib/ops1/**` · features/routes OPS1
- `app/lib/d1/**` MethodMode
- runtime / modeled / workflow / CI (hors tests purement additifs explicitement gated)

### Tests candidats

Voir `05` §3 — **non écrits** ici.

### Gate Morris exact (candidat, non consommé)

Si F03.3 reste partiel :

```
GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN
```

Si Morris valide ultérieurement F03.3 SATISFIED :

```
GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
```

---

## Bulletin — champs de décision

### D-T-A7-OPEN

| Champ | Valeur |
|-------|--------|
| **Question** | Ouvrir T-A7 pour un premier lot borné ? |
| **Options** | O1 · O2 · O3 · O4 |
| **Recommandation** | O1 (primaire) · O2 conditionnel · pas O3 |
| **Impacts** | gouvernance trajectoire retrait legacy |
| **Dette** | voir ci-dessus |
| **Réversibilité** | O1/O4 haute · O2 moyenne-haute · O3 variable |
| **Gate futur** | selon option |
| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · O3 ≠ cutover · ouverture ≠ MethodMode removed |
| **Champ** | `MORRIS DECISION REQUIRED` |

**Aucune option n’est pré-cochée comme décision.**

---

## Garde-fous

- F03.3 / F11.2 / F13.4 inchangées (`DECIDED`) ;
- combinaison inchangée ;
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
- T-A7 `NOT OPEN` ;
- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.

---

## Verdict section

`MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — RECOMMENDATION O1 (O2 CONDITIONAL) — O3 NOT SUPPORTED BY EVIDENCE — T-A7 NOT OPEN`
```

## Diff complet utile

```diff
commit a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 20:40:10 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 20:40:10 2026 +0200

    docs(sfia-studio): frame T-A7 technical readiness

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../01-source-truth-and-scope.md                   | 133 +++++++++++++++++
 .../02-p03-p11-readiness-matrix.md                 | 121 ++++++++++++++++
 .../03-ops1-isolation-contract.md                  | 149 +++++++++++++++++++
 .../04-rollback-strategy.md                        | 104 +++++++++++++
 .../05-evidence-and-non-regression-plan.md         |  86 +++++++++++
 .../06-holds-and-stop-conditions.md                | 102 +++++++++++++
 .../07-f03-3-satisfaction-assessment.md            |  74 ++++++++++
 .../08-morris-t-a7-opening-decision-pack.md        | 161 +++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     | 131 +++++++++++++++++
 9 files changed, 1061 insertions(+)

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/01-source-truth-and-scope.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/01-source-truth-and-scope.md
new file mode 100644
index 0000000..15a7b60
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/01-source-truth-and-scope.md
@@ -0,0 +1,133 @@
+# 01 — Source truth and scope
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `01-source-truth-and-scope.md` |
+| **Base Git** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **T-A7** | `NOT OPEN` |
+| **Nature** | inventaire de sources · aucune modification hors pack |
+
+---
+
+## 1. Vérité Git
+
+| Élément | Valeur |
+|---------|--------|
+| Repo | `mcleland147/sfia-workspace` |
+| `origin/main` | `2a3c59c46c105bae458d1a7329079c5f591da421` |
+| Merge tip | PR #286 — README post-merge F03/F11/F13 |
+| Parent merge F03 pack | PR #285 — `dad6e00344ad5750cd352db3af33c150c780491b` (2026-07-28 19:54:21 +0200) |
+| Branche locale | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
+| Upstream projet | **aucun** |
+| Remote homonyme | **aucune** |
+
+---
+
+## 2. Sources méthode
+
+| Source | Rôle |
+|--------|------|
+| `prompts/templates/sfia-cycle-execution-template.md` | template d’exécution cycle |
+| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routing |
+| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | operating model |
+| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | guardrails |
+| `method/sfia-fast-track/checklists/guardrails-checklist.md` | checklist complémentaire |
+
+Ces quatre chemins core (+ template) correspondent à `SFIA_CANONICAL_CORE_PATHS` au HEAD courant.
+
+---
+
+## 3. Packs T-A7 (canon sur main)
+
+| Pack | Usage pour ce cycle |
+|------|---------------------|
+| `t-a7-legacy-cutover-framing/` | définitions P03–P11 · stops SC-* · rollback candidat |
+| `t-a7-next-decision-step-framing/` | paysage décisions · séquencement |
+| `t-a7-option-c-wave-1-legacy-scope-framing/` | inventaire MethodMode · method/** · OPS1 · W1-D01…D05 |
+| `t-a7-f03-f11-f13-documentary-arbitration/` | F03.3 · F11.2 · F13.4 adoptées · anti-claims |
+
+---
+
+## 4. Handoffs / intégrations
+
+| Réf | Preuve |
+|-----|--------|
+| PR #285 | décisions F03/F11/F13 intégrées · merge `dad6e003…` |
+| PR #286 | alignement README post-merge · merge `2a3c59c…` |
+| Handoff `sfia/review-handoff` | `sfia-review-handoff/latest-chatgpt-review.md` — dernier cycle README #286 |
+
+---
+
+## 5. Sources techniques read-only (preuves)
+
+| Surface | Fichier / symbole | Observation |
+|---------|-------------------|-------------|
+| Canonical paths | `app/lib/platform/sfia-context/canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` | allowlist fermée : template + 3 `method/.../core/*` |
+| Loader | `app/lib/platform/sfia-context/sourceLoader.ts` · `loadCanonicalCoreSources` | lecture disque + digest SHA-256 |
+| MethodMode | `app/lib/d1/types.ts` · `METHOD_MODES` / `MethodMode` | `SFIA_V2_6` · `TRANSITION` · `V3_CANDIDATE` — **actif** |
+| Select MethodMode | `app/lib/d1/actions.ts` · `actionSelectMethodMode` | action présente ; candidat retrait futur W1-D03 |
+| OPS1 wrapper paths | `app/lib/ops1/sfia/canonicalPaths.ts` | réexport temporaire platform |
+| Allowlist OPS1 | `app/lib/ops1/allowlistEvaluation.ts` · `evaluateAllowlist` | deny-by-default · structure deny `method/` pour actions I4 |
+| Path-policy CT | `app/lib/platform/security/pathPolicy.ts` · `decideReadPath` | deny `method/` (asymétrie vs loader canonique) |
+| Import boundaries | `app/__tests__/platform/import-boundaries.test.ts` | D1↛OPS1 · platform↛D1/OPS1 |
+| D1 provider | `app/lib/d1/intake/resolveProvider.ts` | surface partagée conversation · jamais OPS1 direct |
+| OPS1 SQLite | `app/lib/ops1/paths.ts` · `resolveOps1SqlitePath` | `.sfia-exec/.../ops1.sqlite` gitignored |
+| OA audit | `app/lib/oa/project/infrastructure/observability.ts` | console / mémoire — pas RUN production |
+| Health | `app/lib/oa/execution-attempt/ports/agentRegistry.ts` | health **simulé** — **aucune** route readiness F11.2 |
+
+---
+
+## 6. Décisions existantes (autorité)
+
+| ID | Statut | Effet sur ce pack |
+|----|--------|-------------------|
+| W1-B / W1-D01 | `DECIDED` | plan candidat retrait documentaire autorisé comme trajectoire |
+| W1-D02 | `DECIDED` | actifs confirmés (MethodMode D1 · trio method core · consommateurs) |
+| W1-D03 | `DECIDED` | candidats futurs — **pas** suppression |
+| W1-D04 | `DECIDED` | isolation OPS1 **avant** tout retrait |
+| W1-D05 | `DECIDED` | F03/F11/F13 avant prep technique — **contenu F maintenant décidé** |
+| F03.3 | `DECIDED` | set préconditions entrée |
+| F11.2 | `DECIDED` | API read/readiness minimale future |
+| F13.4 | `DECIDED` | hybrid Git + vue RO bornée |
+
+---
+
+## 7. Périmètre / hors périmètre
+
+### Inclus
+
+- qualification documentaire P03–P11 ;
+- design contrat OPS1 ;
+- rollback · preuves · holds · évaluation F03.3 ;
+- bulletin Morris ouverture.
+
+### Exclus
+
+- toute mutation code / config / tests / CI ;
+- toute implémentation API / UI / RO runtime ;
+- push / PR / merge projet ;
+- ouverture T-A7 · delivery · cutover.
+
+---
+
+## 8. Cycle Knowledge Contract
+
+| Champ | Valeur |
+|-------|--------|
+| Recherché | oui |
+| Cycle qualifié | architecture technique et readiness préalable à T-A7 |
+| Statut | candidate ou absent |
+| Usage | experimental cognitive guidance |
+| Autorité | aucune autorité d’exécution |
+| Fallback | template SFIA v2.6 + packs T-A7 sur main |
+| Limites | ne peut ni ouvrir T-A7 ni autoriser une implémentation |
+
+---
+
+## 9. Anti-claims
+
+- lecture technique ≠ autorisation de modification ;
+- inventaire Wave 1 ≠ retrait ;
+- F* décidées ≠ surfaces livrées ;
+- ce pack ≠ préparation technique exécutable.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
new file mode 100644
index 0000000..d639038
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
@@ -0,0 +1,121 @@
+# 02 — Matrice de readiness P03–P11
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `02-p03-p11-readiness-matrix.md` |
+| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
+| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — NOT AN AUTHORIZATION` |
+| **T-A7** | `NOT OPEN` |
+
+> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable, ni delivery, ni cutover.
+
+---
+
+## 1. Légende des statuts
+
+| Statut | Sens |
+|--------|------|
+| `SATISFIED — EVIDENCED` | preuve Git / contrat vérifiable pour l’exigence **telle que formulée** |
+| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
+| `MISSING — EVIDENCED` | absence de preuve constatée |
+| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
+| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |
+
+Niveaux d’exigence (héritage F03.3 / framing cutover) :
+
+| Niveau | Sens |
+|--------|------|
+| Avant **prep technique** | inventaire / design / matrice / décisions F — **pas** runtime green |
+| Avant **delivery preparation** | + stratégies / designs prouvables · HARD non ignorés |
+| Avant **cutover** | + preuves runtime P07–P11 · F11.2 · F13.4 opérationnels · gate D |
+
+---
+
+## 2. Matrice P03–P11
+
+| ID | Exigence canonique | Preuves Git | Statut | Écart | Risque | Action documentaire / technique future | Gate | Stop condition | Avant prep tech | Avant delivery prep | Avant cutover |
+|----|--------------------|-------------|--------|-------|--------|----------------------------------------|------|----------------|-----------------|---------------------|---------------|
+| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` (template + 3 method core) · OA `app/lib/oa/doctrine/**` | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; fallback method encore actif | fallback silencieux | inventaire consommateur + plan remplacement registry | F03 / prep distinct | SC-05 · SC-02 | matrice + inventaire | plan tests resolve/deny | preuve import + runtime no-fallback |
+| P04 | `sourceLoader` → package loader + digest | `sourceLoader.ts` · digest SHA-256 · blob SHA | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible + pin tests | F03 | SC-05 | inventaire | digest pin tests | loader unique cible |
+| P05 | `contextResolver` → CkcResolver + doctrine | T-A2 `memoryCkcResolver` · lectures method encore possibles hors OA mémoire | `PARTIAL — EVIDENCED` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | boundary CKC documentée + tests | F03 | SC-05 · SC-02 | inventaire boundaries | boundary tests | no method/** product reads |
+| P06 | `sessionContext` / MethodMode deps → OA correlation | MethodMode D1 actif (`types.ts` · `actions.ts`) · anti-claims T-A* | `MISSING — EVIDENCED` | pas de remplacement session OA produit | MethodMode residual | design session OA (doc) | F03 · F11 | SC-04 · SC-05 | design only | design session | preuve no MethodMode |
+| P07 | MethodMode → retiré de cible OA | `METHOD_MODES` actif · UI/API D1 · tests `project-foundation.test.ts` | `MISSING — EVIDENCED` | MethodMode présent ; aucun retrait | cutover prématuré | inventaire dépendances + hold flag futur | F03 · F11 | SC-04 | inventaire | plan retrait | UI+API+import proofs |
+| P08 | lectures `method/**` → absentes cible OA | loader canonique lit 3 fichiers method · CT path-policy deny asymétrique | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy silencieuse | CI boundary candidates · ne pas retirer sans remplacement | F03 | SC-02 · SC-05 | règles CI candidates | grep/import CI | CI + runtime proof |
+| P09 | badges v2.6 → retirés surfaces OA | D1 MethodMode labels ; UI OA native absente | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion utilisateur | design UI OA distinct F11 product | F11 | SC-04 | design UI | design UI | UI tests |
+| P10 | OPS1 contracts → ACL / isolation | `allowlistEvaluation.ts` · `pathPolicy.ts` · `import-boundaries.test.ts` · pack Wave 1 `04` | `PARTIAL — EVIDENCED` | path-policy ≠ IAM ; pas d’ACL cutover ; pas no-cross-call runtime OA | double identité OPS1/v3 | **contrat isolation** (ce pack) puis validation Morris | F13 · W1-D04 | SC-03 · SC-12 · W1-S5 | frontière documentée | frontière + tests | ACL runtime |
+| P11 | historique legacy → read-only policy | F13.4 décidé · **aucune** enforcement runtime · audit OA mémoire | `MISSING — EVIDENCED` | politique cible non appliquée ; durée conservation non fixée | mutation / fuite historique | design vue RO + politique mutation=deny | F13 | SC-06 | politique candidate | politique Morris | enforcement RO |
+
+---
+
+## 3. Synthèse par statut
+
+### Satisfaits
+
+Aucun P03–P11 en `SATISFIED — EVIDENCED` au HEAD courant pour l’exigence **de remplacement Option A**.
+
+### Partiels
+
+| ID | Motif court |
+|----|-------------|
+| P03 | registry OA existe ; canonical paths method encore actifs |
+| P04 | digest présent ; cutover loader absent |
+| P05 | CKC mémoire ; lectures method produit non exclues |
+| P10 | path-policy / allowlist / import tests ; isolation cutover absente |
+
+### Manquants
+
+| ID | Motif court |
+|----|-------------|
+| P06 | pas de session OA de remplacement |
+| P07 | MethodMode non retiré |
+| P08 | lectures `method/**` actives |
+| P09 | badges / UI OA native absents |
+| P11 | RO historique non enforce |
+
+### Unknown (preuves à collecter)
+
+| Sujet | Statut | Pourquoi |
+|-------|--------|----------|
+| Volumes DB / `.sfia-exec` | `UNKNOWN — EVIDENCE REQUIRED` | SQLite local gitignored · pas de campagne de mesure |
+| Hits allowlist `method/` runtime | `UNKNOWN — EVIDENCE REQUIRED` | inventaire structurel ≠ hits live |
+| Cross-call OPS1 ↔ OA runtime | `UNKNOWN — EVIDENCE REQUIRED` | import tests ≠ preuve runtime |
+| Durée conservation F13 | `UNKNOWN — EVIDENCE REQUIRED` | reportée à cycle distinct |
+| IAM multi-user | `NOT SELECTED` | hors F03.3 satisfaction seule |
+
+---
+
+## 4. Blockers pour prep technique / ouverture
+
+1. P06–P09 · P11 `MISSING` — interdisent retrait / cutover ; limitent un lot de développement borné.
+2. P10 `PARTIAL` — isolation OPS1 **définie** dans `03` mais **non validée** Morris / non implémentée.
+3. Asymétrie path-policy deny `method/` vs loader canonique allow — risque de confusion opérationnelle.
+4. HARD / B5 / R1 / R-M01 ouverts — non ignorés ; bloquent delivery (B5 STOP BEFORE DELIVERY).
+
+---
+
+## 5. Dépendances
+
+```
+W1-D02 (actifs) ──► P03/P04/P07/P08 (lectures & MethodMode)
+W1-D04 (OPS1)   ──► P10 ──► F13.4
+F11.2           ──► P06/P07/P09/P22 (surfaces read)
+F13.4           ──► P10/P11
+F03.3           ──► qualification de cette matrice (≠ satisfaction runtime)
+```
+
+---
+
+## 6. Anti-claims
+
+- matrice qualifiée ≠ P* satisfaits ;
+- `PARTIAL` ≠ autorisation de retrait ;
+- P01 historique (T-A0…T-A6 intégrés) ≠ delivery / cutover ;
+- décision F13.4 ≠ P11 `SATISFIED`.
+
+---
+
+## 7. Verdict section
+
+`P03–P11 QUALIFIED FROM EVIDENCE — 0 SATISFIED / 4 PARTIAL / 5 MISSING — UNKNOWN EVIDENCE ITEMS OPEN — NO AUTHORIZATION`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
new file mode 100644
index 0000000..5379d36
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/03-ops1-isolation-contract.md
@@ -0,0 +1,149 @@
+# 03 — Contrat d’isolation OPS1
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `03-ops1-isolation-contract.md` |
+| **Statut** | `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED` |
+| **Ancrage** | W1-D04 · F13.4 · P10 · SC-03 · SC-12 |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Code / ACL runtime** | **aucune modification** |
+
+---
+
+## 1. Frontière fonctionnelle
+
+**OPS1** = Operational Vertical Slice 1 — POC Studio (conversation + action Markdown gouvernée), **distinct** de :
+
+| Domaine | Emplacement | Relation |
+|---------|-------------|----------|
+| Option A runtime | `app/lib/oa/**` | **pas** d’identité v3 ; SC-12 |
+| D1 Project Foundation | `app/lib/d1/**` | import D1↛OPS1 prouvé ; surface conversation partagée |
+| Control Tower | tools / docs `66`–`74` · path-policy platform | construit **sur** OPS1 (extension in-place) |
+| Méthode legacy | `method/**` | lectures via canonical loader ; deny structurel allowlist actions I4 |
+
+---
+
+## 2. Chemins et namespaces concernés
+
+| Namespace | État actuel | Cible documentaire |
+|-----------|-------------|--------------------|
+| `app/lib/ops1/**` | ACTIVE | rester actif temporairement sous frontière |
+| `app/features/ops1/**` · `app/app/ops1/**` | ACTIVE | idem |
+| `app/__tests__/ops1/**` · `e2e/ops1-i*.spec.ts` | ACTIVE | preuves isolation futures |
+| `projects/sfia-studio/.sfia-exec/**` | ACTIVE local (gitignored) | hors Git · procédures locales |
+| `app/lib/ops1/sfia/canonicalPaths.ts` | wrapper temporaire | candidate isolation / remplacement doctrine |
+| Allowlist `method/` | structurelle | revue avant tout retrait method |
+| Docs `41`–`65` OPS1 | DOCUMENTATION ONLY | archive Git (F13.4) |
+
+---
+
+## 3. Matrice des surfaces
+
+| Surface | État actuel | Cible documentaire | Lecture | Écriture | IAM | Path-policy | Audit | Rollback |
+|---------|-------------|--------------------|---------|----------|-----|-------------|-------|----------|
+| Session / conversation OPS1 | ACTIVE | actif temporaire | oui (POC) | oui (POC borné) | `NOT SELECTED` | allowlist + gates | partiel / local | procédures `.sfia-exec` |
+| Action Markdown I4–I6 | ACTIVE | actif temporaire | n/a | bornée allowlist | `NOT SELECTED` | `evaluateAllowlist` | tests e2e | deny restore |
+| Canonical SFIA context (via OPS1 wrapper) | ACTIVE | isoler dépendance method avant retrait | oui (3+1 paths) | non (lecture) | n/a | loader allowlist ≠ CT deny | digest | pin digest |
+| Control Tower tools | ACTIVE (couplage) | conserver distinction OPS1≠OA | oui | tools bornés | `NOT SELECTED` | `decideReadPath` | CT logs locaux | revert tools |
+| D1 intake provider | SHARED_SURFACE | ne pas fusionner identités | oui | D1 only | `NOT SELECTED` | import boundary | D1 tests | hold provider |
+| OA `lib/oa` | ACTIVE mémoire | **aucune** fusion OPS1 | OA only | OA only | `NOT SELECTED` | antiLegacy | console/memory | n/a pack |
+| Historique legacy (F13.4) | NON IMPLÉMENTÉ | vue RO bornée future | RO only | **interdite** | futur gate | path-policy ≠ IAM | journal accès | restore ACL |
+| MethodMode D1 | ACTIVE | hors OPS1 (boundary) | D1 | D1 mutate | `NOT SELECTED` | n/a OPS1 | D1 tests | hold MethodMode |
+
+---
+
+## 4. Lectures autorisées / mutations interdites (cible design)
+
+### Lectures autorisées (cible)
+
+- lecture session OPS1 dans le POC ;
+- lecture allowlist / décision path-policy ;
+- lecture canonical sources via loader **existant** (jusqu’à remplacement doctrine) ;
+- future vue F13.4 RO sur historique **explicitement** marqué historique.
+
+### Mutations interdites (cible + holds actuels)
+
+- toute mutation présentée comme « cutover OA » via OPS1 ;
+- mutation de `method/**` hors gate Morris (SC-02) ;
+- mutation des contrats OPS1 hors gate (SC-03) ;
+- mutation d’historique legacy une fois politique F13 appliquée ;
+- présentation OPS1 comme runtime v3 Option A (SC-12).
+
+---
+
+## 5. Path-policy ≠ IAM (norme)
+
+| Concept | Définition dans ce repo | Preuve |
+|---------|-------------------------|--------|
+| **Path-policy / allowlist** | contrôle de **chemins** et d’actions bornées (deny-by-default) | `evaluateAllowlist` · `decideReadPath` |
+| **IAM** | identité multi-user / rôles / authority registry | `NOT SELECTED` · R-T-A3-3 OPEN |
+
+**Norme W1-D04 / F13.4 :** isoler OPS1 **ne** sélectionne **pas** un IAM. Toute confusion path-policy ↔ IAM est une stop condition (`TR-S-PP-IAM`).
+
+---
+
+## 6. Couplage CT / D1
+
+| Lien | Nature | Implication isolation |
+|------|--------|----------------------|
+| CT sur `lib/ops1` | extension in-place | isoler OPS1 = impacter CT ; planifier frontières outils |
+| D1 `resolveIntakeProvider` | shared conversation surface | pas d’import D1→OPS1 ; état co-hébergé `.sfia-exec` fichiers séparés |
+| Import boundaries | tests platform | nécessaire **mais insuffisant** vs preuve runtime no-cross-call |
+
+---
+
+## 7. Interfaces F11.2 / F13.4
+
+| Décision | Interface avec OPS1 |
+|----------|---------------------|
+| F11.2 | API read/readiness pourra exposer **statut OPS1 / holds** en lecture ; **aucune** mutation ; pas d’UI admin obligatoire |
+| F13.4 | Git = vérité ; vue RO bornée pour support/audit ; isolation OPS1 **préalable** à retrait ; accès journalisés |
+
+---
+
+## 8. Classification
+
+| Catégorie | Contenu |
+|-----------|---------|
+| **À isoler avant retrait** | dépendances method dans OPS1/CT context · allowlist hits · identité OPS1≠OA · historique mutable |
+| **Peut rester actif temporairement** | POC OPS1 · e2e I1–I6 · CT tools sous path-policy |
+| **Candidat au retrait futur** | wrappers temporaires · duplications non canoniques (W1-D03) — **après** preuves |
+| **Historique** | docs OPS1 cadrage · archives Git |
+| **Blocker** | absence de validation Morris de ce contrat · UNKNOWN hits allowlist · UNKNOWN cross-call runtime |
+
+---
+
+## 9. Observabilité / audit / rollback (design)
+
+| Domaine | Exigence documentaire | État |
+|---------|----------------------|------|
+| Observabilité | health/readiness F11.2 incluant holds OPS1 | non implémenté |
+| Audit | journal accès historique RO + décisions allowlist | partiel / mémoire |
+| Rollback | R1 restore allowlist / wrappers ; R0 revert docs | documenté dans `04` · non testé |
+
+---
+
+## 10. Conditions de retrait futur (hors ce cycle)
+
+1. Contrat OPS1 **validé** Morris.
+2. Preuve runtime no-cross-call OPS1 ↔ OA.
+3. Inventaire allowlist `method/` hits.
+4. Remplacement doctrine / canonical paths (P03–P05).
+5. F13.4 RO enforce + F11.2 read API validée.
+6. Gate Morris **distinct** de retrait — ≠ ouverture T-A7 seule.
+
+---
+
+## 11. Anti-claims
+
+- contrat proposé ≠ isolation réalisée ;
+- path-policy ≠ IAM ;
+- tests import ≠ preuve runtime ;
+- OPS1 actif ≠ Option A ;
+- F13.4 ≠ ACL validée.
+
+---
+
+## 12. Verdict section
+
+`OPS1 ISOLATION CONTRACT DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED — PATH-POLICY DISTINCT FROM IAM — NO CODE CHANGE`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/04-rollback-strategy.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/04-rollback-strategy.md
new file mode 100644
index 0000000..bba963f
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/04-rollback-strategy.md
@@ -0,0 +1,104 @@
+# 04 — Stratégie de rollback
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `04-rollback-strategy.md` |
+| **Statut** | `DOCUMENTED — NOT TESTED — NOT AUTHORIZED` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Commandes destructives** | **aucune** fournie |
+
+> Aucun niveau R1–R3 n’est autorisé ni testé dans ce cycle. R0 seul est naturellement réversible (revert Git du pack).
+
+---
+
+## R0 — Rollback documentaire
+
+| Champ | Valeur |
+|-------|--------|
+| **Trigger** | erreur de cadrage · contradiction gouvernance · décision Morris d’annuler le pack |
+| **Owner** | Morris / Cursor sous gate doc |
+| **Préconditions** | pack non consommé comme autorisation technique |
+| **Mécanisme** | `git revert` du commit de framing (ou revert merge futur si intégré) |
+| **Preuves** | SHA parent = `2a3c59c…` · tree pack isolé |
+| **Durée** | immédiate (Git) |
+| **Impact** | documentation uniquement · **aucune** conséquence runtime |
+| **Point de non-retour** | aucun (tant que non exécuté techniquement) |
+| **Gate Morris** | non requis pour revert local non poussé ; revert sur main = gate doc |
+
+---
+
+## R1 — Rollback de préparation technique future
+
+| Champ | Valeur |
+|-------|--------|
+| **Trigger** | échec design/tests bornés · régression MethodMode / allowlist · frontière OPS1 ambiguë |
+| **Owner** | owner technique + Morris |
+| **Préconditions** | prep technique **préalablement** autorisée par gate distinct · backups configs |
+| **Mécanisme candidat** | restaurer configs / feature holds · rétablir MethodMode deps existantes · restore allowlist / path-policy · **sans** perte d’historique Git |
+| **Preuves** | tests D1 verts · import boundaries · digest canonical inchangé ou re-pin |
+| **Durée** | heures (cible) |
+| **Impact** | retour état pré-prep · historique conservé |
+| **Point de non-retour** | migration données non réversible sans R2 |
+| **Gate Morris** | obligatoire avant et après |
+
+**Interdit ici :** commandes de purge · force-delete `.sfia-exec` · rewrite history.
+
+---
+
+## R2 — Rollback de delivery futur
+
+| Champ | Valeur |
+|-------|--------|
+| **Trigger** | CI rouge post-merge delivery · violation SC-02/03 · régression P03–P08 |
+| **Owner** | owner delivery + Morris |
+| **Préconditions** | delivery autorisée par gate C · snapshots DB/config disponibles |
+| **Mécanisme candidat** | revert merge delivery · restore package pin / digest · restore allowlist · restore ruleset si touché · contrôle migrations (forward-only vs down) |
+| **Ordre de restauration candidat** | (1) hold flags ON · (2) revert code · (3) restore config/ACL · (4) vérifier lectures method/OA · (5) preuves CI |
+| **Preuves** | CI required green · smoke MethodMode · OPS1 e2e I1–I6 si touché |
+| **Durée** | à définir au gate C |
+| **Impact** | code + config · données selon migration |
+| **Point de non-retour** | migration destructive sans backup |
+| **Gate Morris** | obligatoire |
+
+---
+
+## R3 — Rollback de cutover futur
+
+| Champ | Valeur |
+|-------|--------|
+| **Trigger** | cutover partiel · mutation historique · perte audit · P07–P11 non tenus |
+| **Owner** | Morris (autorité) + owner RUN/sécu |
+| **Préconditions** | cutover autorisé par gate D · rollback testé (P23) · backups |
+| **Mécanisme candidat** | réactivation holds P07–P09 · restore ACL historique · restore DB/snapshot · réouverture lecture legacy contrôlée · **intégrité** audit |
+| **Réversibilité** | doit être démontrée **avant** cutover (SC-06) |
+| **Intégrité données / historique** | Git vérité · vue RO non concurrente · pas de rewrite silent |
+| **Délai maximal candidat** | à fixer au gate D (non inventé ici) |
+| **Preuves** | RUN metrics · audit trail · tests RO deny-write · health F11.2 |
+| **Point de non-retour** | purge historique · IAM cutover sans revoke path |
+| **Gate Morris** | obligatoire · pas de reprise auto après STOP |
+
+---
+
+## Synthèse
+
+| Niveau | Autorisé maintenant | Testé | Runtime impact |
+|--------|---------------------|-------|----------------|
+| R0 | oui (doc locale) | n/a Git | aucun |
+| R1 | non | non | futur |
+| R2 | non | non | futur |
+| R3 | non | non | futur |
+
+---
+
+## Anti-claims
+
+- rollback documenté ≠ rollback testé ;
+- R0 ≠ autorisation R1–R3 ;
+- hold flag documenté ≠ hold implémenté ;
+- backup mentionné ≠ backup existant mesuré.
+
+---
+
+## Verdict section
+
+`ROLLBACK R0–R3 DOCUMENTED — NOT TESTED — NOT AUTHORIZED — NO DESTRUCTIVE COMMANDS`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
new file mode 100644
index 0000000..ef352a1
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
@@ -0,0 +1,86 @@
+# 05 — Plan de preuves et non-régression
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `05-evidence-and-non-regression-plan.md` |
+| **Statut** | `CATALOGUED — NOT EXECUTED — NO TESTS WRITTEN` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Niveaux L0–L5** | L0 doc · L1 static Git · L2 contrat · L3 unit · L4 integration · L5 E2E/runtime/RUN |
+
+---
+
+## 1. Catalogue
+
+| ID | Surface | Preuve attendue | Méthode future | Automatisable ? | Niveau | Gate | Statut actuel |
+|----|---------|-----------------|----------------|-----------------|--------|------|---------------|
+| E-MM-01 | MethodMode | inventaire modes + actions | relecture `types.ts` / `actions.ts` | partiel | L1 | F03 / W1 | `PARTIAL — EVIDENCED` |
+| E-MM-02 | MethodMode | tests D1 select + optimistic lock | réutiliser `project-foundation.test.ts` | oui | L3 | prep | `PARTIAL — EVIDENCED` |
+| E-MM-03 | MethodMode | hold flag empêche retrait prématuré | design + test futur | oui | L3–L4 | SC-04 | `MISSING — EVIDENCED` |
+| E-D1-01 | D1 | import boundary D1↛OPS1 | `import-boundaries.test.ts` | oui | L3 | W1-D04 | `SATISFIED — EVIDENCED` (boundary only) |
+| E-D1-02 | D1 | shared provider ≠ identité OPS1 | review `resolveProvider.ts` | non | L1–L2 | W1-D04 | `PARTIAL — EVIDENCED` |
+| E-CP-01 | Trio/canon | `SFIA_CANONICAL_CORE_PATHS` stable + digest | `sourceLoader` digest | oui | L1–L3 | P03/P04 | `PARTIAL — EVIDENCED` |
+| E-CP-02 | Consommateurs | map prompts / OPS1 wrapper / CT | inventaire Wave 1 + grep | partiel | L1 | W1-D02 | `PARTIAL — EVIDENCED` |
+| E-CP-03 | Consommateurs | no-fallback produit vers method hors allowlist | CI grep + runtime | oui | L4–L5 | P08 | `MISSING — EVIDENCED` |
+| E-OPS-01 | OPS1 | allowlist deny-by-default | `allowlistEvaluation.test.ts` | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
+| E-OPS-02 | OPS1 | path-policy CT deny method | tests pathPolicy | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
+| E-OPS-03 | OPS1 | no-cross-call runtime OPS1↔OA | probe / e2e dédié futur | oui | L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
+| E-OPS-04 | OPS1 | e2e I1–I6 non régressés | `ops1-i*.spec.ts` | oui | L5 | prep | `PARTIAL — EVIDENCED` |
+| E-OPS-05 | OPS1 | inventaire hits allowlist `method/` | campagne mesure | partiel | L1–L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
+| E-F11-01 | F11.2 API | contrat read MethodMode / deps / migration / health / holds | design OpenAPI-like doc | non (doc) | L0–L2 | F11 | `MISSING — EVIDENCED` |
+| E-F11-02 | F11.2 API | audit de lecture | journal + test | oui | L4 | F11 | `MISSING — EVIDENCED` |
+| E-F11-03 | F11.2 API | aucune mutation implicite | contract tests deny-write | oui | L3–L4 | F11 | `MISSING — EVIDENCED` |
+| E-F13-01 | F13.4 | Git archive vérité | tags/commits packs | oui | L1 | F13 | `PARTIAL — EVIDENCED` |
+| E-F13-02 | F13.4 | vue RO bornée + deny mutation | impl + tests futurs | oui | L4–L5 | F13 | `MISSING — EVIDENCED` |
+| E-F13-03 | F13.4 | journalisation accès | audit sink durable | oui | L4 | F13 | `MISSING — EVIDENCED` |
+| E-PER-01 | Persistence | DB SELECTED + volumes | décision + campagne | non | L0–L1 | F10 | `UNKNOWN — EVIDENCE REQUIRED` |
+| E-IAM-01 | IAM | modèle identité | décision F10 | non | L0 | F10 | `NOT SELECTED` |
+| E-AUD-01 | Audit OA | journal durable ≠ mémoire | design RUN | partiel | L2–L5 | P23 | `PARTIAL — EVIDENCED` |
+| E-OBS-01 | Observabilité | health/readiness réel | endpoint F11.2 | oui | L5 | F11 · P23 | `MISSING — EVIDENCED` |
+| E-CI-01 | CI | import boundary required | ruleset / workflow | oui | L4 | P24 | `PARTIAL — EVIDENCED` |
+| E-RB-01 | Rollback | R0 revert pack | Git | oui | L1 | ce pack | `SATISFIED — EVIDENCED` (mécanisme) |
+| E-RB-02 | Rollback | R1–R3 drills | runbook + exercice | partiel | L5 | SC-06 | `MISSING — EVIDENCED` |
+
+---
+
+## 2. Distinctions de preuves
+
+| Type | Exemples IDs |
+|------|--------------|
+| Statiques Git | E-MM-01 · E-CP-01 · E-F13-01 · E-RB-01 |
+| Contrat | E-F11-01 · E-D1-02 · contrat OPS1 |
+| Unitaires | E-MM-02 · E-OPS-01 · E-OPS-02 · E-D1-01 |
+| Intégration | E-F11-02 · E-CI-01 |
+| E2E | E-OPS-04 |
+| Runtime | E-OPS-03 · E-CP-03 · E-OBS-01 |
+| Sécurité | E-IAM-01 · E-F11-03 · path-policy≠IAM |
+| RUN | E-AUD-01 · E-OBS-01 · E-RB-02 |
+| Rollback | E-RB-01 · E-RB-02 |
+
+---
+
+## 3. Tests candidats (non écrits)
+
+| Candidat | Objectif | Niveau |
+|----------|----------|--------|
+| Contract test F11.2 deny-write | garantir read-only API | L3 |
+| Runtime probe OPS1↛OA | compléter import boundaries | L5 |
+| RO history mutation deny | F13.4 | L4–L5 |
+| Canonical digest pin CI | P04 | L4 |
+| Allowlist hit report job | UNKNOWN → evidenced | L1–L5 |
+
+**Ce cycle n’écrit ni n’exécute ces tests.**
+
+---
+
+## 4. Anti-claims
+
+- catalogue ≠ preuves collectées ;
+- test existant OPS1 ≠ isolation cutover prouvée ;
+- digest loader ≠ cutover loader ;
+- health simulé ≠ readiness F11.2.
+
+---
+
+## 5. Verdict section
+
+`EVIDENCE CATALOGUE DEFINED — NOT EXECUTED — CRITICAL RUNTIME AND F11/F13 PROOFS MISSING OR UNKNOWN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
new file mode 100644
index 0000000..c7640ff
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
@@ -0,0 +1,102 @@
+# 06 — Holds, anti-bypass et stop conditions
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `06-holds-and-stop-conditions.md` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **T-A7** | `NOT OPEN` |
+| **Statut** | `HOLDS ACTIVE — ANTI-BYPASS DOCUMENTED` |
+
+---
+
+## 1. Holds obligatoires (toujours actifs)
+
+| Hold | Statut exigé | Sens |
+|------|--------------|------|
+| T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
+| F03.3 | décidée ≠ satisfaite | set partiel ; prep technique exécutable interdite |
+| F11.2 | décidée ≠ API disponible | pas d’implémentation |
+| F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
+| Isolation OPS1 | requise ≠ réalisée | contrat proposé seulement |
+| B5 | `OPEN` | STOP BEFORE DELIVERY |
+| R1 | `OPEN` | atomicité non résolue |
+| R-M01 | `OPEN` | ClaimEvaluator readiness |
+| HARD (R-T-A3-1/2…) | `OPEN HARD` | autorité / atomicité |
+| Persistence / IAM | `NOT SELECTED` | pas de sélection implicite |
+| RGPD production | `NOT VALIDATED` | U-M02 ouvert |
+| T-A6 COMPLETE | `NOT DECLARED` | |
+| Option A | `NOT COMPLETE` | |
+| Delivery preparation | `NOT AUTHORIZED` | |
+| Delivery | `NOT AUTHORIZED` | |
+| Cutover | `NOT AUTHORIZED` | |
+
+---
+
+## 2. Anti-bypass
+
+| Mécanisme | Contenu |
+|-----------|---------|
+| Gates séquencés | Wave 1 → F03/F11/F13 → readiness → **décision ouverture** → prep bornée → delivery → cutover |
+| Pas de saut A→D | aucune transition automatique framing → cutover |
+| HARD non ignorables | critère F03.3 « aucun blocker HARD ignoré » |
+| Path-policy ≠ IAM | stop si confondus |
+| Décision ≠ implémentation | F* / W1* ne valent pas code |
+| B5 | bloque delivery même si framing vert |
+| Review handoff | consommation post-cycle ChatGPT — ne remplace pas gate Morris |
+
+---
+
+## 3. Stop conditions (héritage + readiness)
+
+| ID | Trigger | Action |
+|----|---------|--------|
+| SC-02 | mod `method/**` hors gate | STOP |
+| SC-03 | mod OPS1 hors gate | STOP · isoler |
+| SC-04 | MethodMode retiré sans P03–P09 | STOP |
+| SC-05 | remplacements legacy incomplets | STOP activation |
+| SC-06 | rollback/hold non démontrable avant cutover | STOP |
+| SC-07 | real execution sans HARD/persistence/IAM | STOP |
+| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP |
+| W1-S1 | inventaire = autorisation retrait | STOP |
+| W1-S3 | vague 1 = T-A7 OPEN | STOP |
+| W1-S4 | prep technique sans F03/F11/F13 décidés | *(contenu F maintenant décidé — hold passe à satisfaction/impl)* |
+| W1-S5 | retrait sans isolation OPS1 définie/validée | STOP |
+| A52-B5 | delivery avec B5 OPEN non accepté | STOP BEFORE DELIVERY |
+| TR-S-01 | preuve absente présentée comme SATISFIED | STOP |
+| TR-S-02 | contradiction documentaire (décision vs anti-claim) | STOP |
+| TR-S-03 | dépendance UNKNOWN traitée comme nulle | STOP |
+| TR-S-04 | mutation historique possible non holdée | STOP |
+| TR-S-05 | frontière OPS1 ambiguë | STOP |
+| TR-S-PP-IAM | path-policy confondue avec IAM | STOP |
+| TR-S-06 | rollback non démontrable au niveau requis | STOP |
+| TR-S-07 | volume/migration non qualifiés avant mutation data | STOP |
+| TR-S-08 | blocker HARD contourné | STOP |
+| TR-S-09 | scope élargi hors pack readiness / hors gate | STOP |
+| TR-S-10 | claim T-A7 OPEN sans bulletin Morris | STOP |
+
+---
+
+## 4. Mapping preuves absentes → stops
+
+| Preuve manquante | Stop |
+|------------------|------|
+| E-OPS-03 cross-call | TR-S-05 · W1-S5 |
+| E-F11-* API | ne pas claim cutover ready |
+| E-F13-02/03 RO | TR-S-04 · P11 |
+| E-PER-01 volumes | TR-S-07 |
+| E-RB-02 drills | SC-06 / TR-S-06 au niveau cutover |
+
+---
+
+## 5. Anti-claims
+
+- hold documenté ≠ hold runtime ;
+- stop condition ≠ rollback prouvé ;
+- F* décidées ≠ holds levés ;
+- readiness pack ≠ bypass vers delivery.
+
+---
+
+## 6. Verdict section
+
+`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — T-A7 REMAINS NOT OPEN — HARD NOT IGNORED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
new file mode 100644
index 0000000..7a8c23f
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
@@ -0,0 +1,74 @@
+# 07 — Évaluation de satisfaction F03.3
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `07-f03-3-satisfaction-assessment.md` |
+| **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Verdict** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
+| **Prep technique exécutable** | `PROHIBITED` |
+| **T-A7** | `NOT OPEN` |
+
+---
+
+## 1. Matrice de satisfaction
+
+| Critère F03.3 | État | Preuve | Écart | Bloquant pour prep technique ? |
+|---------------|------|--------|-------|--------------------------------|
+| Inventaire legacy validé | `SATISFIED — EVIDENCED` | Wave 1 packs `02`–`05` · W1-D02 | inventaire ≠ runtime green | Non (doc) |
+| Dépendances actives confirmées | `SATISFIED — EVIDENCED` | W1-D02 · `canonicalPaths` · MethodMode · consommateurs | — | Non (doc) |
+| Candidats au retrait identifiés | `SATISFIED — EVIDENCED` | W1-D03 | candidats ≠ suppression | Non (doc) |
+| Plan documentaire W1-B | `SATISFIED — EVIDENCED` | W1-D01 / W1-B `DECIDED` | plan ≠ exécution | Non (doc) |
+| Matrice P03–P11 qualifiée | `SATISFIED — EVIDENCED` (qualification) | `02-p03-p11-readiness-matrix.md` | 0 P SATISFIED runtime ; 5 MISSING | **Oui** si prep vise retrait runtime |
+| Isolation OPS1 définie | `PARTIAL — EVIDENCED` | `03-ops1-isolation-contract.md` statut `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` | non validée Morris · non implémentée | **Oui** |
+| F11 décidée | `SATISFIED — EVIDENCED` | F11.2 sur main (PR #285) | ≠ API | Non pour décision ; **Oui** pour cutover |
+| F13 décidée | `SATISFIED — EVIDENCED` | F13.4 sur main | ≠ RO runtime | Non pour décision ; **Oui** pour retrait |
+| Stratégie rollback documentée | `SATISFIED — EVIDENCED` (doc) | `04-rollback-strategy.md` | `NOT TESTED` | Non pour doc ; **Oui** avant cutover (SC-06) |
+| Preuves candidates de non-régression | `PARTIAL — EVIDENCED` | `05-evidence-and-non-regression-plan.md` | nombreuses MISSING/UNKNOWN | **Oui** pour lot technique non borné |
+| Anti-bypass des gates | `SATISFIED — EVIDENCED` | `06-holds-and-stop-conditions.md` | holds doc ≠ runtime | Non (doc) |
+| Aucun blocker HARD ignoré | `SATISFIED — EVIDENCED` (non-ignorance) | HARD `OPEN HARD` explicitement holdé | HARD non fermé | **Oui** pour delivery / real execution |
+
+---
+
+## 2. Lecture du verdict
+
+### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`
+
+1. Isolation OPS1 = proposée, **pas** validée Morris (`MORRIS VALIDATION REQUIRED`).
+2. Catalogue de preuves : gaps runtime / F11 / F13 / volumes / cross-call = `MISSING` / `UNKNOWN`.
+3. Qualifier P03–P11 **révèle** un jeu majoritairement non vert — la qualification doc ne convertit pas les MISSING en SATISFIED.
+
+### Pourquoi pas `F03.3 NOT SATISFIED — TECHNICAL PREPARATION PROHIBITED` seul
+
+Plusieurs critères documentaires structurels sont effectivement en place (inventaire, W1-B, F11/F13, matrice, rollback doc, anti-bypass, HARD non ignorés). Le set n’est pas vide : il est **partiel**.
+
+### Conséquence normative
+
+- préparation technique **exécutable** (code, ACL, API, migrations) : **interdite** ;
+- travail documentaire / design borné pour traiter les blockers : possible **uniquement** sous gate Morris distinct ;
+- ouverture T-A7 pour développement : **non recommandée** tant que blockers OPS1 + preuves critiques non traités (voir `08`).
+
+---
+
+## 3. Blockers identifiés (liste courte)
+
+1. Validation Morris du contrat OPS1.
+2. Preuves UNKNOWN : cross-call runtime · hits allowlist · volumes.
+3. F11.2 / F13.4 non disponibles runtime.
+4. P06–P09 · P11 `MISSING`.
+5. HARD / B5 / R1 / R-M01 ouverts (delivery/real-exec).
+
+---
+
+## 4. Anti-claims
+
+- évaluation ≠ ouverture T-A7 ;
+- PARTIAL ≠ licence de coder ;
+- critères doc SATISFIED ≠ cutover ready ;
+- HARD non ignoré ≠ HARD fermé.
+
+---
+
+## 5. Verdict
+
+`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
new file mode 100644
index 0000000..2e7594c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
@@ -0,0 +1,161 @@
+# 08 — Morris decision pack — ouverture T-A7
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
+| **Statut** | `MORRIS DECISION REQUIRED` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **T-A7 actuel** | `NOT OPEN` |
+| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
+| **Présélection** | **aucune** |
+
+---
+
+## Question
+
+**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**
+
+---
+
+## Options
+
+### O1 — Ne pas ouvrir
+
+Conditions insuffisantes ou blockers non traités.
+
+- **Effet :** T-A7 reste `NOT OPEN` ; aucun code ; poursuivre blockers documentaires.
+- **Réversibilité :** totale.
+- **Dette :** faible (cadrage seulement).
+
+### O2 — Ouvrir uniquement la préparation technique
+
+Autoriser un lot borné de **design technique / tests** (contrats, specs, tests non branchés runtime legacy), **sans** delivery, **sans** mod `method/**` / OPS1 / MethodMode runtime, **sans** cutover.
+
+- **Effet :** T-A7 pourrait passer à un état « prep only » **si** Morris le définit explicitement ; sinon rester `NOT OPEN` avec gate prep distinct.
+- **Réversibilité :** haute (R0/R1).
+- **Dette :** moyenne (specs/tests).
+
+### O3 — Ouvrir un premier lot de développement borné
+
+Uniquement si F03.3 est satisfait **et** blockers obligatoires maîtrisés.
+
+- **État actuel :** **non supporté** par les preuves (F03.3 partiel · OPS1 non validé · P06–P09/P11 MISSING · F11/F13 non livrés).
+- **Réversibilité :** moyenne/faible selon fichiers touchés.
+- **Dette :** élevée si ouvert trop tôt.
+
+### O4 — Custom / différer
+
+Exemples : valider d’abord le contrat OPS1 ; lancer campagne preuves UNKNOWN ; borner un micro-cycle doc-only de satisfaction F03.3.
+
+---
+
+## Recommandation repo-informed (non décisionnelle)
+
+**Statut :** `RECOMMENDED — NOT DECIDED`
+
+**Recommandation Cursor/ChatGPT :** **O1** (ne pas ouvrir), avec enchaînement documentaire vers traitement des blockers ; **O2** uniquement si Morris impose un gate prep **strictement** borné (design/tests, fichiers protégés listés, aucune delivery).
+
+**Ne pas choisir O3** sur la base des preuves actuelles.
+
+### Preuves
+
+- matrice P03–P11 : 0 SATISFIED / 4 PARTIAL / 5 MISSING ;
+- OPS1 : `DESIGN PROPOSED — MORRIS VALIDATION REQUIRED` ;
+- F11.2 / F13.4 : absents runtime ;
+- HARD / B5 / R1 / R-M01 : `OPEN` ;
+- rollback R1–R3 : `NOT TESTED`.
+
+### Blockers (résumé)
+
+Voir `07` §3.
+
+### Risques si ouverture prématurée
+
+- retrait / mod method sans remplacement (SC-02/SC-05) ;
+- double identité OPS1/v3 (SC-12) ;
+- cutover aveugle sans F11.2 ;
+- mutation historique sans F13.4 ;
+- bypass HARD / B5.
+
+### Dette
+
+- sur-cadrage si O2 mal borné ;
+- sous-cadrage si O3.
+
+### Réversibilité
+
+- O1/O4 : maximale ;
+- O2 : R0/R1 ;
+- O3 : dépend du lot.
+
+### Périmètre candidat d’un premier lot (si O2 ultérieur)
+
+| Inclus candidat | Exclu / protégé |
+|-----------------|-----------------|
+| Specs contrats F11.2 read API | `method/**` |
+| Design tests E-OPS-03 / E-F13-* | `app/lib/ops1/**` runtime |
+| Docs runbook R1 | MethodMode runtime / DB |
+| Mesure volumes (read-only) | delivery · cutover · IAM select |
+
+### Fichiers protégés (non modifiables sans gate dédié)
+
+- `method/**`
+- `app/lib/ops1/**` · features/routes OPS1
+- `app/lib/d1/**` MethodMode
+- runtime / modeled / workflow / CI (hors tests purement additifs explicitement gated)
+
+### Tests candidats
+
+Voir `05` §3 — **non écrits** ici.
+
+### Gate Morris exact (candidat, non consommé)
+
+Si F03.3 reste partiel :
+
+```
+GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN
+```
+
+Si Morris valide ultérieurement F03.3 SATISFIED :
+
+```
+GO DECIDE T-A7 OPENING — REVIEW TECHNICAL READINESS PACK — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
+```
+
+---
+
+## Bulletin — champs de décision
+
+### D-T-A7-OPEN
+
+| Champ | Valeur |
+|-------|--------|
+| **Question** | Ouvrir T-A7 pour un premier lot borné ? |
+| **Options** | O1 · O2 · O3 · O4 |
+| **Recommandation** | O1 (primaire) · O2 conditionnel · pas O3 |
+| **Impacts** | gouvernance trajectoire retrait legacy |
+| **Dette** | voir ci-dessus |
+| **Réversibilité** | O1/O4 haute · O2 moyenne-haute · O3 variable |
+| **Gate futur** | selon option |
+| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · O3 ≠ cutover · ouverture ≠ MethodMode removed |
+| **Champ** | `MORRIS DECISION REQUIRED` |
+
+**Aucune option n’est pré-cochée comme décision.**
+
+---
+
+## Garde-fous
+
+- F03.3 / F11.2 / F13.4 inchangées (`DECIDED`) ;
+- combinaison inchangée ;
+- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
+- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
+- T-A7 `NOT OPEN` ;
+- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
+- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.
+
+---
+
+## Verdict section
+
+`MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — RECOMMENDATION O1 (O2 CONDITIONAL) — O3 NOT SUPPORTED BY EVIDENCE — T-A7 NOT OPEN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
new file mode 100644
index 0000000..ad594ed
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -0,0 +1,131 @@
+# T-A7 — Technical readiness framing
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate consommé** | `GO FRAME T-A7 TECHNICAL READINESS — QUALIFY P03 TO P11 — DEFINE OPS1 ISOLATION CONTRACT — DOCUMENT ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS — PREPARE MORRIS OPENING DECISION PACK — NO CODE — NO TECHNICAL EXECUTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
+| **Cycle / profil** | 6 — Architecture technique (+1 · 3 · 9 · 10 · 12 · 15) · Critical |
+| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
+| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
+| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
+| **Push / PR / merge projet** | **aucun** |
+| **T-A7** | `NOT OPEN` |
+| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
+| **Prep technique exécutable** | `NOT AUTHORIZED` |
+| **F03** | `DECIDED — ADOPTED BY MORRIS` → **F03.3** |
+| **F11** | `DECIDED — ADOPTED BY MORRIS` → **F11.2** |
+| **F13** | `DECIDED — ADOPTED BY MORRIS` → **F13.4** |
+| **Combinaison** | `DECIDED — ADOPTED BY MORRIS` → **F03.3 × F11.2 × F13.4** |
+| **Évaluation F03.3 (ce pack)** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
+| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (inchangées) |
+| **B5 / R1 / R-M01** | `OPEN` |
+| **HARD** | `OPEN HARD` |
+| **T-A6 COMPLETE** | `NOT DECLARED` |
+| **Option A** | `NOT COMPLETE` |
+| **Persistence / IAM** | `NOT SELECTED` |
+| **RGPD production** | `NOT VALIDATED` |
+
+## Objectif
+
+Établir la readiness **documentaire** préalable à une éventuelle ouverture de T-A7 :
+
+1. matrice de qualification P03–P11 ;
+2. contrat de frontière / isolation OPS1 (design only) ;
+3. stratégie de rollback R0–R3 ;
+4. plan de preuves et non-régression ;
+5. holds, stop conditions et anti-bypass ;
+6. bulletin Morris d’ouverture T-A7 (sans présélection).
+
+## Périmètre
+
+- analyse read-only du repository ;
+- pack documentaire neuf sous `t-a7-technical-readiness-framing/` ;
+- commit local unique ;
+- review pack FULL + handoff canonique.
+
+## Hors périmètre
+
+- code · runtime · tests · CI · migrations ;
+- modification `method/**` · OPS1 · MethodMode · modeled · workflow ;
+- API · UI · vue runtime read-only ;
+- préparation technique exécutable · backlog delivery exécutable ;
+- ouverture T-A7 · delivery preparation · delivery · cutover ;
+- push / PR / merge projet ;
+- fermeture B5 / R1 / R-M01 / HARD ;
+- sélection persistence / IAM · validation RGPD production ;
+- action Notion / CMP.
+
+## Sources
+
+| Classe | Chemins |
+|--------|---------|
+| Méthode | `prompts/templates/sfia-cycle-execution-template.md` · routing guide · operating model · guardrails |
+| Packs T-A7 | `t-a7-legacy-cutover-framing/` · `t-a7-next-decision-step-framing/` · `t-a7-option-c-wave-1-legacy-scope-framing/` · `t-a7-f03-f11-f13-documentary-arbitration/` |
+| Intégrations | PR #285 merge `dad6e003…` · PR #286 merge `2a3c59c…` · handoffs `sfia/review-handoff` |
+| Technique (RO) | `SFIA_CANONICAL_CORE_PATHS` · MethodMode D1 · OPS1 allowlist / path-policy · import boundaries · OA audit mémoire |
+
+## Décisions existantes (inchangées)
+
+- W1-B · W1-D01…D05 adoptées ;
+- F03.3 · F11.2 · F13.4 · combinaison adoptées ;
+- T-A7 reste `NOT OPEN`.
+
+## Décisions ouvertes (ce pack)
+
+- ouverture T-A7 (O1–O4) : `MORRIS DECISION REQUIRED` ;
+- validation Morris du contrat OPS1 proposé ;
+- contenu F08–F12 / F09 cutover : hors scope, restent non décidés ici.
+
+## État F03.3
+
+`F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED`
+
+Critères documentaires largement couverts (inventaire, W1-B, F11/F13 décidées, matrice qualifiée, contrat OPS1 proposé, rollback doc, catalogue de preuves, anti-bypass, HARD non ignorés). Blockers : validation Morris du design OPS1 manquante ; P06–P09 / P11 runtime `MISSING` ; API F11.2 et vue F13.4 absentes ; preuves runtime non collectées ; HARD / B5 / R1 / R-M01 `OPEN`.
+
+## Principaux blockers
+
+1. Contrat OPS1 = `DESIGN PROPOSED — NOT IMPLEMENTED — MORRIS VALIDATION REQUIRED`.
+2. P06–P09 · P11 = `MISSING — EVIDENCED` (pas de preuve runtime de retrait / RO).
+3. F11.2 décidée ≠ API disponible.
+4. F13.4 décidée ≠ vue RO / isolation réalisées.
+5. Persistence / IAM / RGPD / volumes = `NOT SELECTED` / `UNKNOWN`.
+6. B5 · R1 · R-M01 · HARD restent ouverts (non ignorés, non fermés).
+
+## Livrables
+
+| Fichier | Rôle |
+|---------|------|
+| `01-source-truth-and-scope.md` | Sources · vérité · scope |
+| `02-p03-p11-readiness-matrix.md` | Matrice P03–P11 |
+| `03-ops1-isolation-contract.md` | Contrat isolation OPS1 |
+| `04-rollback-strategy.md` | Rollback R0–R3 |
+| `05-evidence-and-non-regression-plan.md` | Catalogue de preuves |
+| `06-holds-and-stop-conditions.md` | Holds · anti-bypass · stops |
+| `07-f03-3-satisfaction-assessment.md` | Évaluation F03.3 |
+| `08-morris-t-a7-opening-decision-pack.md` | Bulletin O1–O4 |
+| `README.md` | Synthèse · verdict · gate |
+
+## Anti-claims
+
+- readiness documentée ≠ F03.3 satisfaite ;
+- F03.3 satisfaite ≠ T-A7 OPEN ;
+- T-A7 OPEN futur ≠ delivery autorisée ;
+- contrat OPS1 ≠ isolation réalisée ;
+- plan de tests ≠ tests exécutés ;
+- rollback documenté ≠ rollback testé ;
+- API F11.2 définie ≠ API implémentée ;
+- vue F13.4 définie ≠ runtime read-only livré ;
+- matrice P* qualifiée ≠ validation runtime ;
+- recommandation ≠ décision Morris.
+
+## Gate candidat suivant
+
+`GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN`
+
+**Statut :** `NOT CONSUMED`
+
+(Dépend du verdict F03.3 partiel — pas de gate d’ouverture tant que blockers non traités ou bornés.)
+
+## Verdict
+
+`T-A7 TECHNICAL READINESS FRAMED — P03 TO P11 QUALIFIED — OPS1 ISOLATION CONTRACT DOCUMENTED — ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS DEFINED — F03.3 SATISFACTION ASSESSED FROM EVIDENCE — MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — NO CODE OR TECHNICAL EXECUTION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
```

## Gouvernance

| Élément | Statut |
|---------|--------|
| F03.3 / F11.2 / F13.4 / combinaison | DECIDED — ADOPTED BY MORRIS (inchangées) |
| W1-B / W1-D01…D05 | DECIDED (inchangées) |
| B5 / R1 / R-M01 | OPEN |
| HARD | OPEN HARD |
| T-A6 COMPLETE | NOT DECLARED |
| Option A | NOT COMPLETE |
| T-A7 | NOT OPEN |
| Delivery prep / delivery / cutover | NOT AUTHORIZED |
| Persistence / IAM | NOT SELECTED |
| RGPD production | NOT VALIDATED |

## Findings

| Sévérité | Finding |
|----------|---------|
| Info | F03.3 partiel — gate suivant = ADDRESS BLOCKERS |
| Info | Asymétrie path-policy deny method/ vs loader canonique allow |
| Info | Health OA simulé — pas de readiness F11.2 |
| None Critical/Major | Aucun finding Critical/Major de gouvernance dans ce cycle doc |

## Actions non exécutées

- push projet · PR · merge
- modification method/** · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI
- API · UI · vue RO · migration
- ouverture T-A7 · delivery · cutover
- fermeture réserves · sélection persistence/IAM
- Notion/CMP

## Gate candidat suivant

`GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — DOCUMENTARY OR BOUNDED TECHNICAL PREPARATION ONLY — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 TECHNICAL READINESS FRAMED — P03 TO P11 QUALIFIED — OPS1 ISOLATION CONTRACT DOCUMENTED — ROLLBACK EVIDENCE HOLDS AND STOP CONDITIONS DEFINED — F03.3 SATISFACTION ASSESSED FROM EVIDENCE — MORRIS OPENING DECISION PACK PREPARED WITHOUT PRESELECTION — NO CODE OR TECHNICAL EXECUTION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
