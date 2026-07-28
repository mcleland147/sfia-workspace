# ChatGPT Review Pack — FULL — T-A7 Option C Wave 1 Legacy Scope Framing (enriched)

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 14:46:44 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Gate consommé** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — READ-ONLY DOCUMENTARY FRAMING — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Enrichissement** | post-inventaire subagents MethodMode / method/** / OPS1 — preuves canonicalPaths, dual enum, orphan select, CT/D1 coupling |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
| **Base / HEAD / Parent enrichissement** | `7a3e512f562f480c345a12a744806aa4f2ef625b` / `9b53f3baba0ec54c4d56fea7fa472496d0157ab3` / `e16201ee9e9de971625c272627102d8499940fa7` |
| **Upstream / remote projet** | **aucun** / **absente** |
| **Status** | clean après commit enrichissement |
| **Push projet** | **non** |

## Verdict exact

`T-A7 OPTION C WAVE 1 LEGACY AND SCOPE FRAMING ENRICHED — METHODMODE DUAL ENUM AND ORPHAN SELECT DOCUMENTED — METHOD CANONICAL CORE PATHS EVIDENCED — OPS1 ACL PATH-POLICY PLUS CT D1 COUPLING DOCUMENTED — F03 F11 AND F13 REMAIN NOT DECIDED — TECHNICAL RESERVES REMAIN OPEN — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

## Gate candidat

`GO REVIEW AND INTEGRATE T-A7 OPTION C WAVE 1 LEGACY SCOPE FRAMING — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Commits / blobs

| Champ | Valeur |
|-------|--------|
| Commit framing | `e16201ee9e9de971625c272627102d8499940fa7` |
| Commit enrichissement | `9b53f3baba0ec54c4d56fea7fa472496d0157ab3` |
| Message enrichissement | `docs(sfia-studio): enrich T-A7 wave 1 legacy inventory evidence` |
| Delta enrichissement |  6 files changed, 36 insertions(+), 12 deletions(-) |
| README | `025599e7ba3857966b8f6a1ea9612ef394f06195` |
| 01 | `d37e26d4a8254f38eb314fef9e6e38991cf38e06` |
| 02 | `8093ff00b0fbb6db4762307a1c88dd713ac74e56` |
| 03 | `583888496b7b1e02169eb58cfb920d63bb552bf9` |
| 04 | `2a650d24c2cf3592f95b825ff085a71e1d17c056` |
| 05 | `6ea4f40c9a012fd62e8c659c2cb3ffa220ac3604` |
| 06 | `e87ec9db2e5cddc516c3abe46b7ad098f681f577` (inchangé) |
| 07 | `4f02388b04a952450a5185b9ffb16218cba4d596` (inchangé) |
| 08 | `9fbd2295998de966aa51421e174b239a34b403b0` (inchangé) |

## Synthèses inventaires (enrichies)

- **MethodMode :** ACTIVE D1 `SFIA_V2_6|TRANSITION|V3_CANDIDATE` (default governance `V3_CANDIDATE`) ; OA antiLegacy ; **dual enum** vs modeled `v2.6_manual|…|fallback` sans mapper ; `actionSelectMethodMode` **orphan UI** ; MethodModeGate / route method-mode = DOCUMENTATION ONLY ; P07 MISSING
- **method/** :** ~263 fichiers ; **exactement 3** chemins `method/.../core/*` dans `SFIA_CANONICAL_CORE_PATHS` (`app/lib/platform/sfia-context/canonicalPaths.ts`) — `ACTIVE — EVIDENCED` ; asymétrie allowlist action vs canonical loader ; archives/Notion = archivables candidats
- **OPS1 :** slice complète `lib/ops1` ; ACL = allowlist+gates (**pas** IAM) ; CT extension in-place ; D1 réutilise conversation provider OPS1 ; `.sfia-exec` gitignored ; F13 NOT DECIDED
- **Options :** W1-A/B/C · reco W1-B `RECOMMENDED — NOT DECIDED`
- **Décisions :** T-A7-W1-D01…D05 `MORRIS DECISION REQUIRED`

## Gouvernance

B5/R1/R-M01 OPEN · HARD OPEN HARD · F03/F11/F13 NOT DECIDED · F08–F10 contenu NOT DECIDED · T-A6 NOT DECLARED · Option A NOT COMPLETE · T-A7 NOT OPEN · delivery/cutover NOT AUTHORIZED

## Findings

Critical/Major/Minor = **0 / 0 / 0**

Observations : (1) volume DB MethodMode par valeur UNKNOWN ; (2) dual enum runtime/modeled = gap High pour tout travail schema-driven ; (3) CI n’importe pas `method/` — usage via prompts + canonical loader + OPS1 allowlist.

## Actions non exécutées

push/PR projet · mod method/OPS1/runtime/modeled/workflow/CI/tests · ouverture T-A7/vague · conso F · fermeture réserve · COMPLETE · Notion/CMP

## Subagents (preuve)

- [Inventory MethodMode](14559e52-5891-493f-b6a6-3c110bb045b8)
- [Inventory method directory](d417f581-7297-494e-bce6-4743b3ffe53d)
- [Inventory OPS1 boundaries](0de91583-ffa1-41a0-af59-0fe86573130d)

---

## Contenu complet des fichiers du pack


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/README.md`

```markdown
# T-A7 Option C — Wave 1 Framing — Legacy and Scope Inventory

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — READ-ONLY DOCUMENTARY FRAMING — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 14:39:41 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Base** | `origin/main` @ `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
| **Worktree local** | `sfia-workspace-t-a7-wave-1-legacy-scope` (hors path absolu) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague technique ouverte** |
| **Vague 1** | **cadrage documentaire uniquement** (inventaire) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | `NOT DECIDED` (préparés, non consommés) |
| **F08 / F09 / F10** | calendrier décidé (T-A7-D05) · contenu `NOT DECIDED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **R-T-A3-1 / R-T-A3-2** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
| **Push / PR** | **aucun** |
| **Enrichissement post-inventaire** | subagents MethodMode / `method/**` / OPS1 — preuves `canonicalPaths` · dual enum · orphan select · CT/D1 coupling |

## Objectif

Produire un inventaire documentaire exploitable de MethodMode, de `method/**`, d’OPS1 et de leurs dépendances, afin de préparer les arbitrages futurs F03 / F11 / F13 **sans** modifier ces composants et **sans** ouvrir T-A7.

## Périmètre

- inventaire MethodMode (runtime D1, UI, tests, docs) ;
- inventaire `method/**` (structure, consommateurs, candidats) ;
- inventaire OPS1 (docs, runtime `app/lib/ops1`, allowlist, ACL/frontières) ;
- carte de dépendances et frontières de scope T-A7 ;
- options W1-A/B/C · validations / rollback / stops ;
- bulletin Morris T-A7-W1-D01…D05 (`MORRIS DECISION REQUIRED`).

## Hors périmètre

- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests applicatifs · CI ;
- ouverture technique de vague · T-A7 B/C/D ;
- delivery preparation / delivery / cutover ;
- fermeture de réserves · consommation F03/F08–F13 ;
- sélection persistence / IAM · déclaration COMPLETE.

## Sources principales

| Source | Rôle |
|--------|------|
| Pack T-A7 next-step (PR #282) | Option C · D01–D05 · vague 1 = legacy/périmètre |
| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC-02…SC-05 · F03/F11/F13 |
| Code `app/lib/d1` · `app/features/d1` | MethodMode ACTIVE |
| Code `app/lib/ops1` · `app/features/ops1` | OPS1 ACTIVE + allowlist `method/` |
| Arbre `method/` | méthode Fast Track + complementary |
| Template SFIA cycle | méthode d’exécution |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01-source-truth-and-scope.md` | Base Git · recherches · in/out scope |
| `02-methodmode-inventory.md` | Inventaire MethodMode |
| `03-method-directory-inventory.md` | Inventaire `method/**` |
| `04-ops1-boundary-assessment.md` | OPS1 frontières |
| `05-dependency-map.md` | Carte de dépendances |
| `06-removal-and-isolation-options.md` | Options W1-A/B/C |
| `07-validation-rollback-and-stop-conditions.md` | Preuves · stops |
| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 |

## Décisions existantes (rappel)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` Option C | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Décisions futures (ce pack)

T-A7-W1-D01…D05 — toutes `MORRIS DECISION REQUIRED` — **aucune présélection**.

## Anti-claims

- cadrage de vague ≠ vague technique ouverte
- inventaire ≠ autorisation de retrait
- candidat au retrait ≠ décision de suppression
- référence trouvée ≠ usage actif
- absence de référence ≠ preuve de non-usage
- Option C adoptée ≠ exécution lancée
- F préparée ≠ F consommée
- rollback documenté ≠ rollback validé
- T-A7 framing ≠ T-A7 OPEN

## Verdict

`T-A7 OPTION C WAVE 1 LEGACY AND SCOPE FRAMING COMPLETED — METHODMODE METHOD DIRECTORY AND OPS1 INVENTORIED — DEPENDENCIES AND FUTURE REMOVAL OPTIONS DOCUMENTED — MORRIS DECISIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — TECHNICAL RESERVES REMAIN OPEN — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

## Gate candidat suivant

`GO REVIEW AND INTEGRATE T-A7 OPTION C WAVE 1 LEGACY SCOPE FRAMING — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/01-source-truth-and-scope.md`

```markdown
# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Base** | `origin/main` @ `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
| **Nature** | vérité Git + méthodes de recherche · **pas** une autorisation |

## 1. Vérité Git

| Check | Résultat |
|-------|----------|
| `origin/main` | `7a3e512f562f480c345a12a744806aa4f2ef625b` (merge PR #282) |
| HEAD worktree | identique |
| merge-base | identique |
| Upstream projet | **aucun** |
| Remote branche projet | **absente** |
| Opérations Git actives | aucune |
| Contenu hors pack | **aucune modification** (read-only bound) |

## 2. Stratégies de recherche

| Stratégie | Cibles |
|-----------|--------|
| Exact / case-insensitive | `MethodMode`, `methodMode`, `method_mode`, `METHOD_MODE`, `selectMethodMode`, `assertMethodMode` |
| Chemins | `method/`, `app/lib/ops1`, `app/features/ops1`, `.sfia-exec` |
| Variantes OPS1 | `OPS1`, `ops1`, `Ops1`, `ops-1`, docs `41`–`65`, routes `/ops1` |
| Concepts | legacy, fallback, `legacyV26`, `loadCanonicalSource`, `resolveSfiaCanonicalContext`, `SFIA_CANONICAL_CORE_PATHS`, allowlist, ACL |
| Surfaces | runtime, modeled, prompts, docs, tests, e2e, CI (`.github`), gitignore · `app/lib/platform/sfia-context` |
| Négatif | absence CI de `method/` ≠ non-usage (consommateurs docs/prompts/OPS1 allowlist + canonical loader) |
| Écarts | dual enum MethodMode runtime vs `sfia-v3-modeled` · orphan `actionSelectMethodMode` |

## 3. Sources canoniques (blobs `origin/main`)

| Path | Blob | Rôle |
|------|------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | `b9ce0a9f…` | template cycle |
| `…/t-a7-next-decision-step-framing/README.md` | `4a0ad494…` | Option C · D01–D05 |
| `…/t-a7-next-decision-step-framing/05-morris-decision-pack.md` | `be080d72…` | décisions enregistrées |
| `…/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` | `dbf50357…` | P03–P25 |
| `…/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md` | `dc0514ed…` | SC-02…SC-05 |
| `…/t-a7-legacy-cutover-framing/05-morris-decision-pack.md` | `aacef4d7…` | F03/F11/F13 NOT DECIDED |
| `projects/sfia-studio/app/lib/d1/types.ts` | (HEAD) | METHOD_MODES |
| `projects/sfia-studio/sfia-v3-technical-architecture/.../11-legacy-isolation-migration-and-cutover-architecture.md` | (HEAD) | AT cutover |

## 4. Scope T-A7 — futur périmètre **potentiel** (candidat)

| Bloc | Justification | Dette évitée | Risque d’élargissement | Gate |
|------|---------------|--------------|------------------------|------|
| MethodMode D1 (types/DB/UI/commands) | P06–P07 · cutover OA | faux claim « déjà retiré » | retrait UI avant remplacement OA | F03 · F11 |
| Lectures / allowlist `method/**` | P08 · SC-02 · OPS1 allowlist | régression silent method reads | supprimer allowlist trop tôt | F03 |
| Remplacements P03–P05 (doctrine/loader/CKC) | cutover loader | fallback silencieux | élargir hors Option A | F03 |
| Badges / claims v2.6 surfaces OA | P09 | confusion produit | refonte UX globale | F11 |
| OPS1 isolation / ACL / historique | P10–P11 · F13 · SC-03 | double identité OPS1/v3 | « retirer OPS1 » = produit | F13 |
| Import boundaries / CI candidates | P24 | réintroduction method | hardening M1 hors vague | F03 · F12 |
| Rollback / RUN observabilité | P23 | cutover non observable | RUN-ready claim | F03 · F09 |

## 5. Hors périmètre T-A7 sauf nouveau GO Morris

| Bloc | Justification |
|------|---------------|
| Architecture v3-native OA non legacy (`lib/oa/**` hors anti-legacy) | hors cutover |
| Réserves A5.2 (B5, HARD, R1, R-M01, C*) | vague 2–4 Option C |
| Autorité réelle Critical / IAM | vague 2 · F09/F10 |
| Atomicité durable / persistence SELECTED | vague 3 · F08/F10 |
| Delivery non legacy · refonte produit · automatisation globale | hors Option A cutover |
| Modification code/method/OPS1 dans ce cycle | gate interdit |

## 6. Anti-claims scope

- inventaire Wave 1 ≠ satisfaction P03–P25
- « potentiellement dans T-A7 » ≠ autorisé maintenant
- T-A7 reste `NOT OPEN`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/02-methodmode-inventory.md`

```markdown
# 02 — MethodMode inventory

| Champ | Valeur |
|-------|--------|
| **Objet** | inventaire MethodMode · **aucune suppression** |
| **T-A7** | `NOT OPEN` |
| **F03 / F11** | `NOT DECIDED` |

## 1. Définition

| Élément | Preuve | Statut |
|---------|--------|--------|
| Type / enum | `METHOD_MODES = ["SFIA_V2_6","TRANSITION","V3_CANDIDATE"]` · `app/lib/d1/types.ts` | `ACTIVE — EVIDENCED` |
| Défaut gouvernance D1 | `D1_GOVERNANCE_METHOD_MODE = "V3_CANDIDATE"` | `ACTIVE — EVIDENCED` |
| Validation | `assertMethodMode` · `app/lib/d1/domain.ts` | `ACTIVE — EVIDENCED` |
| Persistance SQLite | `method_mode TEXT CHECK (... IN (...))` · `app/lib/d1/db.ts` | `ACTIVE — EVIDENCED` |
| Labels / claims UI | `METHOD_MODE_LABELS` · `METHOD_MODE_CLAIMS` | `ACTIVE — EVIDENCED` |
| Commande | `selectMethodMode` · `commands.ts` / `actions.ts` / `repository.ts` | `ACTIVE — EVIDENCED` |
| Création projet | `NewProjectForm` force default interne (pas choix user C1) | `ACTIVE — EVIDENCED` |
| Confirmation flow | `executeConfirmation.ts` injecte `D1_GOVERNANCE_METHOD_MODE` | `ACTIVE — EVIDENCED` |

**Valeurs autorisées :** `SFIA_V2_6` · `TRANSITION` · `V3_CANDIDATE`  
**Interdit (claims) :** V3-ADOPTED / V3-IMPLEMENTED global (documenté dans claims).

## 2. Occurrences significatives

| Path / symbole | Rôle | Direction | Criticité | Statut | Risque retrait | Validation future |
|----------------|------|-----------|-----------|--------|----------------|-------------------|
| `lib/d1/types.ts` METHOD_MODES | définition | — | High | `ACTIVE — EVIDENCED` | casse D1 | tests foundation + schéma |
| `lib/d1/db.ts` method_mode | stockage | D1→DB | High | `ACTIVE — EVIDENCED` | migration/corruption | migration plan + backup |
| `lib/d1/commands.ts` selectMethodMode | producteur état | API→repo | High | `ACTIVE — EVIDENCED` | commandes mortes / UI cassée | e2e D1 |
| `features/d1/Badges.tsx` MethodModeBadge | UI | state→UI | Med | `ACTIVE — EVIDENCED` | labels orphelins | UI tests |
| `features/d1/*View.tsx` | consommateurs UI | state→UI | Med | `ACTIVE — EVIDENCED` | cockpit incohérent | UI tests |
| `features/d1/NewProjectForm.tsx` | producteur default | form→create | High | `ACTIVE — EVIDENCED` | création sans mode | C1 tests |
| `__tests__/d1/*` | tests | — | Med | `TEST ONLY` | faux verts | garder jusqu’à remplacement |
| `__tests__/oa/*/antiLegacy.test.ts` | garde OA | OA↛MethodMode | High | `ACTIVE — EVIDENCED` | OA réintroduit MethodMode | CI antiLegacy |
| `lib/oa/*/index.ts` mentions | anti-claim / export surface | doc code | Low | `COMPATIBILITY ONLY` / doc | — | antiLegacy |
| Design/docs D1 & T-A* | documentation | — | Low–Med | `DOCUMENTATION ONLY` | docs stale | sync post-cutover |
| `75-next-product-increment-framing.md` | framing produit | — | Low | `DOCUMENTATION ONLY` | — | — |

## 3. Producteurs / consommateurs

| Producteurs | Consommateurs |
|-------------|----------------|
| `createProject` / confirmation (default V3_CANDIDATE) | Badges, ContextualRail, ProjectCockpit, WorkspaceHome |
| `selectMethodMode` (+ activate) | repository atomic update · audit `PROJECT_MODE_SELECTED` |
| Tests D1 (fixtures) | assertions domain |

**OA runtime (`lib/oa/**`)** : MethodMode **n’est pas** autorité — tests `antiLegacy` l’interdisent explicitement (`ACTIVE — EVIDENCED` comme garde).

## 4. Liens baseline v1 / v2 / v3

| Mode | Sens documenté |
|------|----------------|
| `SFIA_V2_6` | baseline opérationnelle v2.6 |
| `TRANSITION` | transition v2.6 → v3 candidate |
| `V3_CANDIDATE` | Studio-native candidate — **non adopté** |

P07 (pack T-A7) : MethodMode **MISSING** comme « retiré de cible OA » — encore présent hors OA mémoire.

## 5. Synthèse risques

| Risque | Impact | Stop lié |
|--------|--------|----------|
| Retrait MethodMode sans inventaire UI/API/import | cutover prématuré | SC-04 · P07 |
| Confondre absence MethodMode dans OA avec absence globale | faux READY | anti-claims |
| Migrer schéma sans HOLD | perte projets D1 | P18/F10 (ultérieur) |

## 6. Gaps / UNKNOWN

| Item | Statut |
|------|--------|
| Volume de lignes SQLite production avec chaque mode | `UNKNOWN — INVESTIGATION REQUIRED` (DB locale/dev) |
| Exposition API HTTP dédiée hors actions serveur | `ACTIVE — INFERRED` (via server actions D1) |
| `actionSelectMethodMode` | exporté (`actions.ts`) · **aucun appelant UI** trouvé — `DEAD CANDIDATE — NOT VALIDATED` (commandes testées) |
| Couplage MethodMode → lectures `method/**` runtime D1 | `UNKNOWN — INVESTIGATION REQUIRED` (pas d’évidence directe path loader D1) |
| **Vocabulaire dual** runtime vs modeled | `ACTIVE — EVIDENCED` (écart) — runtime `SFIA_V2_6\|TRANSITION\|V3_CANDIDATE` vs schemas `sfia-v3-modeled` `v2.6_manual\|v2.6_assisted\|transition\|v3_studio_native\|fallback` · **aucun mapper** trouvé |
| `MethodModeGate` / route `/projects/[id]/method-mode` | `DOCUMENTATION ONLY` / non implémenté runtime |

**Anti-claim :** occurrence textuelle dans docs T-A* ≠ usage runtime · enum modeled ≠ enum runtime.
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/03-method-directory-inventory.md`

```markdown
# 03 — `method/**` directory inventory

| Champ | Valeur |
|-------|--------|
| **Objet** | cartographie `method/**` · **aucune modification** |
| **Volume (HEAD)** | **263** fichiers sous `method/` |
| **F03** | `NOT DECIDED` |

## 1. Structure

```
method/
├── README.md
├── sfia-fast-track/     # méthode active de delivery (majoritaire)
│   ├── core/            # 9 — operating model, rules, knowledge layer
│   ├── automation/      # 5 — prompt/repo/validation engines
│   ├── templates/       # 6
│   ├── checklists/      # 3
│   ├── cycles/          # 3
│   ├── documentation/   # ~220 — capitalization, archive, maps
│   ├── archive/         # 3
│   ├── audit-rex/       # 2
│   └── ui/              # 2
└── complementary/
    ├── README.md
    └── controlled-delivery/  # 7
```

| Zone | Types dominants | Ownership apparent | Généré ? |
|------|-----------------|--------------------|----------|
| `sfia-fast-track/core` | markdown méthode | méthode SFIA / Morris | manuel |
| `sfia-fast-track/automation` | markdown engines | méthode / automation | manuel |
| `sfia-fast-track/templates` · `checklists` · `cycles` | markdown ops | méthode | manuel |
| `sfia-fast-track/documentation` | markdown + archives | capitalisation | manuel (+ archives) |
| `sfia-fast-track/archive` | archives | historique | archive |
| `complementary/controlled-delivery` | markdown | méthodes complémentaires | manuel |

## 2. Consommateurs entrants (preuves)

| Consommateur | Nature | Preuve | Statut usage |
|--------------|--------|--------|--------------|
| `README.md` / `docs/**` | documentation routing | chemins `method/sfia-fast-track/**` | `DOCUMENTATION ONLY` / actifs éditoriaux |
| `prompts/README.md` · `prompts/prompt-catalog.md` | gouvernance prompts | liens engines/core/checklists | `ACTIVE — EVIDENCED` (référence opératoire) |
| Template / operating model | exécution cycles | core files | `ACTIVE — EVIDENCED` |
| OPS1 allowlist | sécurité chemins | `app/lib/ops1/allowlistEvaluation.ts` · `types.ts` incluent `"method/"` | `ACTIVE — EVIDENCED` |
| OPS1 / platform canonical loader | lecture disque allowlist fermée | `app/lib/platform/sfia-context/canonicalPaths.ts` → `SFIA_CANONICAL_CORE_PATHS` (re-export OPS1) | `ACTIVE — EVIDENCED` |
| Control Tower / CMP | docs + config | docs CT · `tools/cmp-001/config/…` (chemins method) | `ACTIVE — EVIDENCED` / `DOCUMENTATION ONLY` |
| CI `.github/**` | build | **aucune** référence `method/` trouvée | `UNKNOWN` / non bloquant CI path |
| `lib/oa/**` | runtime OA | antiLegacy interdit MethodMode/fallback ; P08 vise no `method/**` reads | cible cutover `MISSING` |
| Anciens chemins `methods/` racine | historique | `docs/practices/methods-structure-check.md` — absents | `DEAD CANDIDATE — NOT VALIDATED` (déjà retirés) |

## 3. Dépendances sortantes

`method/**` est principalement **contenu markdown** (pas de package TS importé). Sorties = références documentaires vers `docs/`, `prompts/`, projets — **pas** d’import runtime npm détecté.

## 4. Matrice zones → candidats (≠ décisions)

| Zone | Rôle actuel | Consommateurs | Preuves | Risque retrait | Candidat cible | Décision requise |
|------|-------------|---------------|---------|----------------|----------------|------------------|
| `sfia-fast-track/core` (trio runtime) | spine chargé runtime | `canonicalPaths` + prompts | chemins exacts ci-dessous | **Critical** | conserver / isoler / remplacer (ultérieur) | F03 · Morris |
| `sfia-fast-track/core` (autres refs) | référence / historique | prompts · docs | README core | Med–High | conserver / archiver (`rules-update` superseded) | Morris |
| `sfia-fast-track/automation` | engines doc | prompt-catalog | liens | High | conserver / remplacer | F03 |
| `sfia-fast-track/templates` · `checklists` · `cycles` | ops delivery | docs architecture | liens | Med–High | conserver | F03 |
| `sfia-fast-track/documentation` (hors archive) | capitalisation | docs internes | volume | Med | archiver partiel / conserver | inventaire fin |
| `sfia-fast-track/archive` | historique | peu | structure | Low–Med | archiver / conserver | Morris |
| `complementary/controlled-delivery` | méthode complémentaire | README method | structure | Med | conserver / investigation | Morris |
| Allowlist entry `"method/"` OPS1 | ACL path | action gate | code | High si retiré sans politique | isoler / migrer | F13 · F03 |

### Chemins `method/**` chargés runtime (`ACTIVE — EVIDENCED`)

Source : `SFIA_CANONICAL_CORE_PATHS` dans `app/lib/platform/sfia-context/canonicalPaths.ts` :

1. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
3. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

(+ template prompts hors `method/` : `prompts/templates/sfia-cycle-execution-template.md`)

**Asymétrie :** allowlist d’**action** OPS1 interdit souvent l’écriture/`tool read` large sur `method/` · le **canonical loader** lit quand même ce trio fermé.

## 5. Protections / historique

- SC-02 : modification `method/**` hors gate Morris → `STOP`
- P08 / P24 : lectures `method/**` et import boundaries à prouver avant cutover
- Structure check : ne pas recréer `sfia/methods/` ou `methods/` racine

## 6. Anti-claims

- volume documentation ≠ usage runtime applicatif
- absence de référence CI ≠ non-usage (prompts/OPS1)
- candidat « archiver » ≠ archive exécutée
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/04-ops1-boundary-assessment.md`

```markdown
# 04 — OPS1 boundary assessment

| Champ | Valeur |
|-------|--------|
| **Objet** | identifier OPS1 · frontières · **aucune modif ACL/code** |
| **F13** | `NOT DECIDED` |
| **T-A7** | `NOT OPEN` |

## 1. Qu’est-ce qu’OPS1 dans ce repository ?

**OPS1 = Operational Vertical Slice 1** — POC Studio de conversation GPT réelle + action Markdown gouvernée (allowlist), distinct du runtime Option A (`lib/oa`) et de D1 Project Foundation (`lib/d1`).

| Couche | Emplacement | Statut |
|--------|-------------|--------|
| Cadrage / design / UX / tech / backlog / devops docs | `projects/sfia-studio/41`–`65` (+ companions ops1-named) | `DOCUMENTATION ONLY` (canon sur main) + décisions historiques |
| Runtime applicatif | `app/lib/ops1/**` (~48 fichiers) · `app/features/ops1/**` · route `app/app/ops1/**` | `ACTIVE — EVIDENCED` |
| Tests | `app/__tests__/ops1/**` · e2e `ops1-i*.spec.ts` | `TEST ONLY` / `ACTIVE — EVIDENCED` |
| État local d’exécution | `projects/sfia-studio/.sfia-exec/**` (**gitignored**) | `ACTIVE — EVIDENCED` (runtime local ; hors Git) |
| Import boundaries | `import-boundaries.test.ts` : D1↛OPS1 · platform↛OPS1/D1 | `ACTIVE — EVIDENCED` |

## 2. Frontières

| Frontière | Contenu | Preuve |
|-----------|---------|--------|
| Fonctionnelle | Chat libre + action Markdown facultative ; pas MVP global | docs 41–47 |
| Technique | Session, conversation providers, actionGate, allowlist, control tower tools, exécution I5/I6 | `lib/ops1/**` |
| Sécurité | Allowlist chemins + gates Morris (L0) — **pas** un IAM/RBAC multi-user | allowlist + import boundaries + P10 |
| Gouvernance cutover | OPS1 **ne doit pas** être présenté comme v3 Option A ; isolation avant cutover | SC-03 · SC-12 · F13 / P10–P11 |
| Extension in-place | Control Tower construit **sur** `lib/ops1` (pas un fork) | docs `66`–`74` · tools CT |
| Surface partagée | D1 intake réutilise provider conversation OPS1 ; état co-hébergé `.sfia-exec/…/state/` (fichiers DB séparés) | `d1` paths / resolveProvider |

## 3. Producteurs / consommateurs de droits

| Producteurs | Consommateurs |
|-------------|----------------|
| Allowlist evaluation / service | actionGate · exécutions bornées |
| Session / repository OPS1 | UI `Ops1SessionScreen` · e2e |
| Control tower tools / reinjection | flux CT ↔ OPS1 (tests dédiés) |
| Canonical context resolver (sfia/platform) | sessionContext · CT SFIA engine |
| Types/provider conversation OPS1 | D1 intake (`SHARED_SURFACE`) |

**ACL IAM produit globale :** non SELECTED — « ACL OPS1 » dans T-A7 = **path policy + gates**, pas multi-user IAM (`NOT SELECTED` IAM inchangé).

## 4. Dépendances legacy / MethodMode / `method/**`

| Lien | Nature | Statut | Risque |
|------|--------|--------|--------|
| Allowlist contient `"method/"` | path ACL | `ACTIVE — EVIDENCED` | retrait method sans MAJ allowlist = actions bloquées ou trou |
| `SFIA_CANONICAL_CORE_PATHS` (3 fichiers `method/.../core/*`) | lecture canonique | `ACTIVE — EVIDENCED` | couplage F03/F13 — retrait method sans remplacement doctrine = casse CT/OPS1 context |
| MethodMode D1 | **interdit** import D1↔OPS1 | `ACTIVE — EVIDENCED` (boundary) | ne pas fusionner identités |
| OA antiLegacy mentionne OPS1 cutover | garde | `ACTIVE — EVIDENCED` | double identité |

## 5. Risques retrait / isolation

| Action candidate | Risque | Preuve avant F13 |
|------------------|--------|------------------|
| Isoler OPS1 (garder POC, ACL stricte) | faible si boundaries OK | tests import + no cross-call OA |
| Migrer allowlist hors `method/` | casse actions Campus/méthode | inventaire allowlist hits |
| Retrait futur OPS1 | perte POC + e2e + CT bridges | GO produit distinct · ≠ cutover OA |
| Présenter OPS1 comme v3 | SC-12 | anti-claims |

## 6. Preuves nécessaires avant F13

1. Matrice P10–P11 (ACL isolation · historique read-only) documentée et testable.  
2. Preuve runtime : aucun cross-call OPS1 ↔ `lib/oa` non autorisé.  
3. Politique historique legacy (mutation interdite) — aujourd’hui `MISSING`.  
4. Inventaire allowlist `method/` : usages réels vs legacy.  
5. Gate Morris F13 **contenu** (pas seulement calendrier).

## 7. Anti-claims

- OPS1 documenté ≠ OPS1 retiré
- allowlist `method/` ≠ MethodMode
- isolation candidate ≠ isolation appliquée
- F13 préparée ≠ F13 `DECIDED`
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/05-dependency-map.md`

```markdown
# 05 — Dependency map

| Champ | Valeur |
|-------|--------|
| **Nature** | carte candidate · **pas** une décision |
| **T-A7** | `NOT OPEN` |

## 1. Axes principaux

| Source → cible | Nature | Preuve | Criticité | Direct ? | Impact si supprimée | Validation future | Stop |
|----------------|--------|--------|-----------|----------|---------------------|-------------------|------|
| MethodMode → D1 runtime | exécution | types/db/commands | High | Y | D1 cassé | tests D1 | SC-04 |
| MethodMode → D1 UI | exécution UI | Badges/Views | Med | Y | labels/cockpit | UI tests | SC-04 |
| MethodMode → D1 tests | test | `__tests__/d1` | Med | Y | faux couverture | — | — |
| MethodMode ↛ OA runtime | gouvernance (interdiction) | antiLegacy | High | Y (garde) | régression autorité | CI antiLegacy | SC-12 |
| MethodMode → documentation | doc | design/T-A packs | Low | Y | docs stale | sync | — |
| `method/**` → prompts/templates | gouvernance | prompt-catalog | High | Y | cycles mal guidés | revue prompts | SC-02 |
| `method/**` → docs architecture | doc | docs/** liens | Med | Y | navigation cassée | link check | — |
| `method/**` → tests app | test | **peu/aucune** lecture runtime prouvée | Low | N? | — | grep loader | P08 |
| `method/**` → CI | build | **aucune** ref `.github` | — | N | — | P24 candidates | — |
| `method/**` → OPS1 allowlist | sécurité | `"method/"` in allowlist | High | Y | actions deny/allow faux | inventaire ACL | SC-03 · F13 |
| OPS1 → authorization allowlist | sécurité | actionGate/allowlist* | High | Y | exécutions unsafe/bloquées | e2e I3–I4 | F13 |
| OPS1 → runtime/API/UI | exécution | lib/features/ops1 · route | High | Y | POC mort | e2e I1–I6 | — |
| OPS1/platform → 3 fichiers `method/.../core/*` | exécution/gouv | `canonicalPaths.ts` `SFIA_CANONICAL_CORE_PATHS` | High | Y | contexte CT/OPS1 faux | tests canonicalEngine | P03–P05 · F03 |
| Control Tower → OPS1 lib | exécution extension | docs/tools CT | High | Y | CT cassé si retrait OPS1 | inventaire CT | F13 |
| D1 intake → OPS1 conversation provider | exécution partagée | resolveProvider | Med–High | Y | live D1 cassé | tests D1 provider | F13 |
| OPS1 ↛ D1 | sécurité boundary | import-boundaries | High | Y (garde) | double identité | CI | SC-12 |
| legacy → rollback/RUN | RUN | P23 PARTIAL | Med | I | cutover non rollbackable | design RUN | F03 · F09 |
| legacy → cutover | gouvernance | T-A7 def | High | I | cutover unsafe | F09 | SC-04/05 |
| legacy → F03/F11/F13 | gouvernance | packs T-A7 | High | Y | décisions mal informées | ce pack + bulletin | — |

## 2. Classification par type

| Type | Exemples |
|------|----------|
| Exécution | MethodMode D1 · OPS1 session/execution · canonical resolver |
| Build | (peu pour method/) |
| Test | D1/OPS1/antiLegacy/e2e |
| Documentaire | docs · prompts · packs T-A* |
| Gouvernance | SC-* · P03–P11 · Option C vague 1 |
| Sécurité | allowlist · import boundaries · anti double identité |
| Historique sans usage actif prouvé | `method/**/archive` · anciens `methods/` racine (absents) |

## 3. Lecture normative

1. **Ne pas** traiter `method/**` comme mort : prompts + allowlist OPS1 = actifs.  
2. **Ne pas** traiter MethodMode comme limité à OA : il est central à D1.  
3. **Ne pas** fusionner OPS1 et Option A.  
4. Cutover exige preuves P03–P11 avant retrait — encore largement `MISSING`/`PARTIAL`.

## 4. Anti-claims

- dépendance documentaire ≠ dépendance d’exécution
- garde antiLegacy ≠ MethodMode déjà retiré de D1
- carte ≠ plan de suppression approuvé
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/06-removal-and-isolation-options.md`

```markdown
# 06 — Removal and isolation options (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Nature** | options · **aucune présélection exécutoire** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` uniquement |
| **F03 / F11 / F13** | `NOT DECIDED` |

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

## Option W1-B — Inventaire + plan de retrait candidat

**Idée :** ajouter séquences candidates (MethodMode → remplacements OA → CI boundary → OPS1 isolation → historique RO) avec rollback papier.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | accélère F03 ; aligne P03–P11 |
| Risques | plan pris pour autorisation ; sous-estime HARD A5.2 |
| Dette | plans obsolètes si runtime change |
| Coût / complexité | moyen |
| Réversibilité | haute (doc) |
| Impact tests/CI | design de tests candidats seulement |
| F | F03/F11/F13 timing+contenu futurs |
| Stops | SC-02…05 · STOP BEFORE DELIVERY |

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

## Challenge

| Question | W1-A | W1-B | W1-C |
|----------|------|------|------|
| Utile maintenant ? | **oui** | oui si Morris veut séquence | oui si priorise sécu OPS1 |
| Réduit risque cutover ? | partiel | mieux | mieux sur isolation |
| Crée dette doc ? | faible | moyenne | moyenne |
| Plus simple ? | **oui** | non | non |
| Préparable sans ouvrir T-A7 ? | **oui** | oui (doc) | oui (doc only ici) |
| Respecte STOP BEFORE DELIVERY / `.1` ? | oui | oui | oui |

## Recommandation

`RECOMMENDED — NOT DECIDED` → **W1-B** (inventaire déjà produit + plan de retrait **candidat** dans cycle suivant ou annexe Morris), **sans** exécution.

Alternative acceptable : rester en **W1-A** si Morris veut limiter la vague 1 à la vérité pure.

**Aucune option adoptée tant que T-A7-W1-D01 n’est pas tranché.**
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/07-validation-rollback-and-stop-conditions.md`

```markdown
# 07 — Validation, rollback and stop conditions

| Champ | Valeur |
|-------|--------|
| **Nature** | exigences **futures** · aucune validation exécutée ici |
| **Rollback** | documenté ≠ validé |

## 1. Preuves avant modification future

| Domaine | Preuves minimales |
|---------|-------------------|
| MethodMode | inventaire UI/API/DB · tests D1 verts · plan remplacement OA session (P06/P07) · hold flag |
| `method/**` | diff path filter · consommateurs prompts/OPS1 mis à jour · P08/P24 CI boundary |
| OPS1 | P10 ACL · no cross-call OA · allowlist revue · e2e I1–I6 · anti SC-12 |
| Cutover | P03–P11 + F09 · RUN/rollback P23 · GO niveau D |

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

| F | Rôle Wave 1 | Statut |
|---|-------------|--------|
| F03 | préconditions delivery / inventaire legacy | `NOT DECIDED` |
| F11 | API/UI avant cutover (badges/surfaces) | `NOT DECIDED` |
| F13 | historique RO + isolation OPS1 (P10–P11) | `NOT DECIDED` |
| F08–F10 | hors vague 1 (calendrier D05 seulement) | contenu `NOT DECIDED` |
```


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-option-c-wave-1-legacy-scope-framing/08-morris-decision-pack.md`

```markdown
# 08 — Morris decision pack (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **T-A7** | `NOT OPEN` |
| **Vague 1 technique** | **non ouverte** |
| **F03 / F11 / F13** | `NOT DECIDED` |

---

## T-A7-W1-D01 — Niveau de cadrage suite

**Question :** Quel niveau retenir pour la suite de la vague 1 ?

| Option | Description |
|--------|-------------|
| .1 | Inventaire seulement (W1-A) — vérité figée |
| .2 | Inventaire + plan de retrait candidat (W1-B) |
| .3 | Inventaire + isolation préalable candidate (W1-C) |
| .4 | Autre / différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (W1-B).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D02 — Blocs legacy confirmés actifs

**Question :** Quels blocs sont confirmés **actifs** (évidence) ?

| Option | Description |
|--------|-------------|
| .1 | MethodMode D1 + prompts/`method` core + OPS1 runtime/allowlist (recommandé comme socle minimal évidencé) |
| .2 | Étendre à tout `method/documentation` comme actif |
| .3 | Restreindre à MethodMode D1 seulement |
| .4 | Custom / investigation complémentaire obligatoire avant claim |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1**.

**Statut :** `MORRIS DECISION REQUIRED`

**Anti-claim :** choisir .1 ≠ autoriser retrait.

---

## T-A7-W1-D03 — Candidats au retrait futur

**Question :** Quels blocs sont **candidats** au retrait futur (pas maintenant) ?

| Option | Description |
|--------|-------------|
| .1 | MethodMode hors OA + lectures `method/**` produit OA + badges v2.6 OA (P07–P09) — après preuves |
| .2 | Inclure archive `method/**/archive` en priorité basse |
| .3 | Inclure retrait OPS1 runtime (au-delà isolation) |
| .4 | Aucun candidat tant que P03–P11 non inventoriés finement |
| .5 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (+ .2 optionnel).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D04 — Traitement OPS1

**Question :** Quel traitement pour OPS1 ?

| Option | Description |
|--------|-------------|
| .1 | Conserver POC + renforcer isolation (boundaries) |
| .2 | Isoler (ACL/historique RO) sans retrait |
| .3 | Migrer allowlist / canonical coupling hors `method/` |
| .4 | Retrait futur (GO produit distinct) |
| .5 | Investigation complémentaire avant toute option |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (aligné P10–P11 / F13).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D05 — Quand arbitrer F03, F11, F13 ?

**Question :** Quand consommer le **contenu** de F03 / F11 / F13 ?

| Option | Description |
|--------|-------------|
| .1 | Immédiatement après ce framing (bulletin dédié) |
| .2 | F13 (OPS1/historique) avant F03 ; F11 avec surfaces UI cutover |
| .3 | Selon T-A7-D05 : F au point de risque (F03 avant delivery prep/delivery selon bulletin ; F11 avant cutover UI ; F13 avant isolation/historique) |
| .4 | Différer tout F jusqu’à vague 4 delivery readiness |
| .5 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.3** (cohérent T-A7-D05 ; **sans** consommer ici).

**Statut :** `MORRIS DECISION REQUIRED`

---

## Bulletin Morris vierge

```
GO DECIDE T-A7 OPTION C WAVE 1 — T-A7-W1-D01=… — T-A7-W1-D02=… — T-A7-W1-D03=… — T-A7-W1-D04=… — T-A7-W1-D05=… — SFIA STUDIO V3-NATIVE — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.

## Synthèse recommandations (non décisionnelles)

| ID | Option | Label |
|----|--------|-------|
| T-A7-W1-D01 | .2 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D02 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D03 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D04 | .2 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D05 | .3 | `RECOMMENDED — NOT DECIDED` |

## Garde-fous

- Option C adoptée · vague 1 = doc only
- T-A7 `NOT OPEN` · delivery/cutover `NOT AUTHORIZED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- F03/F11/F13 `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
```

