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
