# Review pack FULL — T-A7 L-F11F13 internal completion

## Meta

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-28 23:25:11 CEST (+0200) |
| Repo | mcleland147/sfia-workspace |
| Workspace | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| Branche initiale | docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing |
| HEAD initial | ed62367f8c6b286c49191076e929271ea70965a3 |
| Parent initial | 770605bcfa4cc3e403ee2c4615c1a115ccd38458 |
| origin/main | 770605bcfa4cc3e403ee2c4615c1a115ccd38458 |
| Branche delivery | delivery/sfia-studio-t-a7-f11-f13-internal-completion |
| HEAD delivery | b4b1defef72832aa5f09d8c55a41d03114e19d94 |
| Commit documentaire | dcdc90a0779859ec5d34a91021bab65122447ee5 |
| Commit implémentation | b4b1defef72832aa5f09d8c55a41d03114e19d94 |
| Working tree initial | README modifié + docs 12–16 untracked · aucun app/** · aucun staged |
| Upstream projet | aucun |
| Push projet | aucun |

## Gate Morris consommé

```
GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER
```

## Décisions D1–D8

| ID | Décision | Statut |
|----|----------|--------|
| D1 | F11 complete = internal-only | DECIDED — ADOPTED BY MORRIS |
| D2 | Audit lecture F11/F13 = différé explicitement | DECIDED — ADOPTED BY MORRIS |
| D3 | F13 data = seed enrichi + liaison explicite au SHA Git | DECIDED — ADOPTED BY MORRIS |
| D4 | Pagination F13 = prefix-only formalisée | DECIDED — ADOPTED BY MORRIS |
| D5 | Rétention F13 = Git-only | DECIDED — ADOPTED BY MORRIS |
| D6 | Prochain lot technique = L-F11F13 interne | DECIDED — ADOPTED BY MORRIS |
| D7 | IAM reste NOT SELECTED | DECIDED — ADOPTED BY MORRIS |
| D8 | Persistence reste NOT SELECTED | DECIDED — ADOPTED BY MORRIS |

Note d'intégrité : dans le handoff N3 (62904dbd… / blob d11efa52…), D1–D8 figuraient comme recommandations. Elles sont enregistrées comme décisions dans le commit documentaire local avant l'implémentation.

## Cycle Knowledge Contract

- recherché : oui
- cycle qualifié : Delivery / implémentation (8) + archi/QA/sécurité/obs/REX
- contrat trouvé : non
- statut : absent
- fallback : routing guide + méthode SFIA v2.6 + template canonique + pack N3 docs 12–16
- autorité : aucune

## Qualification

- Type : 8 Delivery / implémentation
- Typologie : EVOL
- Profil SFIA : Standard (renforcé QA)
- Justification : contrats runtime internes bornés · pas HTTP/UI/IAM/persistence/migration/cutover · rollback Git simple

## Matrice exigences / fichiers / tests

| Exigence | Fichier cible | Test cible | Non-objectif | Risque | Rollback |
|----------|---------------|------------|--------------|--------|----------|
| D1 INTERNAL_ONLY | operationalReadiness.ts | t-a7-operational-readiness.test.ts | HTTP/UI | surface réseau accidentelle | revert commit |
| D2 audit différé | operationalReadiness.ts + boundedHistoryRead.ts | audit.status assertions | journal persistant | faux claim audit | revert |
| D3 seed+SHA | boundedHistoryRead.ts | bounded-history SHA tests | git shell | SHA inventé | revert |
| D4 PREFIX_ONLY | boundedHistoryRead.ts | pagination/volume tests | multi-page | scan non borné | revert |
| D5 GIT_ONLY | boundedHistoryRead.ts | retention assertions | store | persistence | revert |
| D7/D8 NOT SELECTED | operationalReadiness.ts | snapshot fields | IAM/DB | scope creep | revert |

## Architecture avant / après

### Avant (lot 1 sur main)

- F11 : `schemaVersion t-a7-f11.2-lot1`, snapshot RO, pas d'état READY/NOT_READY/UNKNOWN explicite agrégé, pas accessSurface INTERNAL_ONLY, pas audit/IAM/persistence fields.
- F13 : seed documentaire court, `gitCanonical=true` sans `gitCanonicalSha` page-level obligatoire, limit clamp 50 sans mode PREFIX_ONLY formalisé, pas retention/audit explicites.

### Après (L-F11F13 local)

- F11 : `t-a7-f11.2-l-f11f13`, `accessSurface INTERNAL_ONLY`, `readinessStatus` READY|NOT_READY|UNKNOWN avec raisons, audit DEFERRED_EXPLICITLY, iam/persistence NOT_SELECTED, history summary inclut SHA + PREFIX_ONLY.
- F13 : seed enrichi (incl. PR #287 / 770605bc…), `gitCanonicalSha` validé (pin ou injection), PREFIX_ONLY, GIT_ONLY, audit différé, nextCursor null.

## Local Git Truth Check (exécuté)

PASS — branche docs… @ ed62367… · parent/main 770605bc… · README + 12–16 attendus · aucun app/** avant régularisation.

## Régularisation N3

- Commit `dcdc90a…` : docs(sfia-studio): record F11 F13 completion decisions
- Fichiers : README + 12–16 uniquement
- Branche delivery créée @ dcdc90a… sans upstream

## Commits locaux

### Documentaire
```
commit dcdc90a0779859ec5d34a91021bab65122447ee5
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 22:59:09 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 22:59:09 2026 +0200

    docs(sfia-studio): record F11 F13 completion decisions

    Record Morris D1–D8 as adopted and authorize the local L-F11F13
    internal completion lot without project push, PR, or delivery.

    Co-authored-by: Cursor <cursoragent@cursor.com>

projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md

```

### Implémentation
```
commit b4b1defef72832aa5f09d8c55a41d03114e19d94
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 23:24:24 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 23:24:24 2026 +0200

    feat(sfia-studio): complete internal F11 F13 bounded contracts

    Harden F11.2 as INTERNAL_ONLY with honest READY/NOT_READY/UNKNOWN
    states, and enrich F13.4 seed with explicit Git SHA, PREFIX_ONLY
    pagination, deferred audit, and GIT_ONLY retention.

    Co-authored-by: Cursor <cursoragent@cursor.com>

projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
projects/sfia-studio/app/lib/d1/index.ts
projects/sfia-studio/app/lib/d1/operationalReadiness.ts
projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md

```

## Statut Git final (pré-handoff)

```
## delivery/sfia-studio-t-a7-f11-f13-internal-completion
?? .tmp-sfia-review/

b4b1def (HEAD -> delivery/sfia-studio-t-a7-f11-f13-internal-completion) feat(sfia-studio): complete internal F11 F13 bounded contracts
dcdc90a (docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing) docs(sfia-studio): record F11 F13 completion decisions
ed62367 docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers
770605b (origin/main, origin/HEAD) Merge pull request #287 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6a1933 (origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness, framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness) fix(sfia-studio): harden T-A7 bounded readiness foundations
47e26fd feat(sfia-studio): implement T-A7 bounded readiness foundations
0141037 test(sfia-studio): collect T-A7 readiness evidence
a33f4a3 docs(sfia-studio): frame T-A7 technical readiness

```

## Validations

| Check | Verdict |
|-------|---------|
| F11 INTERNAL_ONLY / RO flags | PASS |
| F13 SHA + PREFIX_ONLY + GIT_ONLY | PASS |
| Audit différé | PASS |
| IAM/Persistence NOT SELECTED | PASS |
| Pas HTTP/UI/write/hold/OPS1/deps | PASS |
| Tests 9 files / 44 passed | PASS |
| git diff --check | PASS |
| Aucun push projet | PASS |
| B5/R1/R-M01/HARD OPEN | PASS |

## Commandes de test

```bash
cd projects/sfia-studio/app
./node_modules/.bin/vitest run \
  __tests__/d1/t-a7-operational-readiness.test.ts \
  __tests__/platform/t-a7-bounded-history.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/d1/t-a7-method-mode-hold.test.ts \
  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts
```

Résultat : Test Files 9 passed (9) · Tests 44 passed (44)

## Risques / réserves

- Health SIMULATED ⇒ readiness ne devient pas READY en conditions actuelles (comportement voulu).
- SHA pin/injection ≠ lecture live git runtime.
- Reasons hold F11_2_INCOMPLETE / F13_4_INCOMPLETE conservées (blockers non fermés via hold).
- RGPD production NOT VALIDATED.

## Blockers restant ouverts

B5 OPEN · R1 OPEN · R-M01 OPEN · HARD OPEN HARD · T-A6 NOT DECLARED COMPLETE · Option A NOT COMPLETE · delivery/cutover NOT AUTHORIZED · IAM NOT SELECTED · Persistence NOT SELECTED · P08/P09 MISSING

## Actions non exécutées

push branche projet · PR · merge · push main · HTTP · UI · IAM · persistence · migration · delivery · cutover · fermeture blockers

## Anti-claims

L-F11F13 local ≠ cutover-complete ≠ HTTP public ≠ IAM ≠ persistence ≠ RUN READY ≠ autorisation push/PR

## Gate candidat suivant (NOT CONSUMED)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

## Verdict

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

---

## Contenu complet — fichiers créés

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md`

```markdown
# 17 — F11 / F13 internal completion lot results (L-F11F13)

| Champ | Valeur |
|-------|--------|
| **Document** | `17-f11-f13-internal-completion-lot-results.md` |
| **Date/heure/fuseau** | 2026-07-28 23:22:34 CEST (+0200) |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| **Branche delivery** | `delivery/sfia-studio-t-a7-f11-f13-internal-completion` |
| **Branche documentaire parent** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
| **Base `origin/main`** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Commit documentaire** | `dcdc90a0779859ec5d34a91021bab65122447ee5` |
| **Gate consommé** | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — … — NO HTTP UI DELIVERY OR CUTOVER` |
| **Push / PR projet** | **aucun** |

---

## 1. Gate et décisions D1–D8

| ID | Décision | Application locale |
|----|----------|--------------------|
| **D1** | F11 = internal-only | `accessSurface: "INTERNAL_ONLY"` · pas HTTP/UI |
| **D2** | Audit lecture différé | `audit.status: "DEFERRED_EXPLICITLY"` (F11 + F13) |
| **D3** | Seed enrichi + SHA Git | seed 7 entrées · `gitCanonicalSha` obligatoire |
| **D4** | Pagination prefix-only | `paginationMode: "PREFIX_ONLY"` · `nextCursor: null` |
| **D5** | Rétention Git-only | `retention: "GIT_ONLY"` · pas de store |
| **D6** | Lot L-F11F13 | ce document / branche delivery |
| **D7** | IAM NOT SELECTED | champ snapshot + anti-claims |
| **D8** | Persistence NOT SELECTED | champ snapshot + anti-claims |

---

## 2. Implémentation F11.2

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/d1/operationalReadiness.ts` |
| Schéma | `t-a7-f11.2-l-f11f13` |
| Surface | `INTERNAL_ONLY` |
| États | `READY` \| `NOT_READY` \| `UNKNOWN` |
| Règles | hold actif → `NOT_READY` ; health `SIMULATED`/`UNKNOWN` → jamais `READY` ; absence history ≠ READY |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` |
| Provenance | hold, blockers, history summary (SHA + PREFIX_ONLY), legacy deps |
| Audit | `DEFERRED_EXPLICITLY` |
| IAM / Persistence | `NOT_SELECTED` / `NOT_SELECTED` |
| HTTP / UI | **absents** |

---

## 3. Implémentation F13.4

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` |
| Seed | enrichi (PR #285/#286, lot1 feat/harden, merge #287 `770605bc…`, pack path) |
| SHA | `gitCanonicalSha` validé (`^[0-9a-f]{40}$`) · défaut pin `770605bc…` · injection caller |
| Shell Git runtime | **aucun** |
| Pagination | `PREFIX_ONLY` · `prefixLength`/`limit` · max 50 · ordre stable · pas de multi-page |
| Rétention | `GIT_ONLY` |
| Audit | `DEFERRED_EXPLICITLY` |
| Store / cache / DB | **aucun** |
| Completeness | `BOUNDED_L_F11F13` |

---

## 4. Pagination prefix-only

- `limit` et `prefixLength` sont des alias du même préfixe déterministe.
- Clamp à `BOUNDED_HISTORY_MAX_ITEMS` (50).
- `nextCursor` toujours `null` (D4 — pas de multi-page).
- `hasMore` = `truncated` après slice préfixe.
- Tests bornes : 0 (reject), 1, max, max+1.

---

## 5. SHA Git

- Source : injection bornée `DocumentaryBoundedHistoryProviderOptions.gitCanonicalSha` ou pin `DEFAULT_BOUNDED_HISTORY_GIT_SHA` (= tip main lot 1).
- Validation fail-closed via `assertGitCanonicalSha`.
- Responsabilité caller documentée dans la note de page : pas de `git` shell produit.
- F11 résume `observed.history.gitCanonicalSha`.

---

## 6. Audit différé / rétention Git-only

- Aucun journal d’audit persistant créé.
- Aucune rétention hors Git / packs documentaires.
- RGPD production : **NOT VALIDATED** (inchangé).

---

## 7. Fichiers produit / tests / docs

### Modifiés

- `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`
- `projects/sfia-studio/app/lib/d1/index.ts`
- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
- `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`
- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
- `…/t-a7-technical-readiness-framing/README.md`
- `…/12-…` · `13-…` (statut post-lot)
- `…/16-…` (référence résultats)

### Créés

- `…/17-f11-f13-internal-completion-lot-results.md` (ce document)

---

## 8. Tests

Commande :

```bash
./node_modules/.bin/vitest run \
  __tests__/d1/t-a7-operational-readiness.test.ts \
  __tests__/platform/t-a7-bounded-history.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/d1/t-a7-method-mode-hold.test.ts \
  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts
```

Résultat : **9 files / 44 tests passed** (2026-07-28 23:22:29 CEST).

Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalide, prefix-only, volume, seed enrichi, boundaries hold, absence HTTP route.

---

## 9. Non-régressions / absences vérifiées

- aucune route HTTP readiness/cutover ;
- aucune UI ;
- aucune IAM / session ;
- aucune persistance / migration ;
- aucune write command F11/F13 ;
- MethodMode hold **non modifié** fonctionnellement ;
- OPS1 **non modifié** fonctionnellement ;
- aucune dépendance npm ajoutée ;
- aucun push / PR / merge projet.

---

## 10. Limites

- Health reste `SIMULATED` → readiness ne peut pas être `READY` en conditions normales actuelles.
- SHA pin / injection ≠ lecture live de `git rev-parse` en runtime produit.
- Seed documentaire ≠ archive Git complète.
- Reasons hold `F11_2_INCOMPLETE` / `F13_4_INCOMPLETE` **conservées** (pas de fermeture blockers via hold).
- Audit / RUN prod / RGPD prod restent ouverts / non validés.

---

## 11. Blockers restant ouverts

| Item | Statut |
|------|--------|
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-M01 | `OPEN` |
| HARD | `OPEN HARD` |
| T-A6 COMPLETE | **NOT DECLARED** |
| Option A | **NOT COMPLETE** |
| Delivery / cutover | **NOT AUTHORIZED** |
| IAM | `NOT SELECTED` |
| Persistence | `NOT SELECTED` |
| P08 / P09 | `MISSING` |

---

## 12. Anti-claims

- L-F11F13 local ≠ F11/F13 « cutover-complete » ≠ delivery ready.
- Contrat interne ≠ API HTTP publique.
- Seed + SHA pin ≠ store historique concurrent à Git.
- Tests verts ≠ RUN READY / RGPD VALIDATED.
- Commit local ≠ autorisation push/PR.
- Handoff L3 ≠ push branche projet.

---

## 13. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS**

---

## 14. Verdict

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

```

---

## Contenu complet — fichiers produit / tests / docs (état HEAD)

### `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`

```typescript
/**
 * T-A7 L-F11F13 — F11.2 operational readiness (internal-only, read-only).
 * Assembles observed state; never mutates MethodMode or history.
 * No HTTP, UI, IAM, or persistence.
 */

import {
  decideMethodModeTransition,
  readMethodModeHold,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "@/lib/d1/methodModeHold";
import {
  defaultBoundedHistoryProvider,
  type BoundedHistoryAvailability,
  type BoundedHistoryPage,
  type BoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import {
  METHOD_MODES,
  type MethodMode,
  type D1Project,
} from "@/lib/d1/types";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

export type ReadinessUnknown = "UNKNOWN";

/** D1 — access surface is server/internal only (no HTTP). */
export type OperationalReadinessAccessSurface = "INTERNAL_ONLY";

/**
 * Aggregate readiness for internal consumers.
 * Absence of signal must not become READY.
 */
export type OperationalReadinessStatus = "READY" | "NOT_READY" | "UNKNOWN";

export interface OperationalReadinessLegacyDeps {
  readonly methodModesAuthorized: readonly MethodMode[];
  readonly canonicalCorePaths: readonly string[];
  readonly methodCorePathCount: number;
  readonly note: string;
}

export interface OperationalReadinessMigrationStatus {
  readonly status: "NOT_STARTED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHealth {
  readonly status: "SIMULATED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHistorySummary {
  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
  readonly returned: number;
  readonly gitCanonical: true;
  readonly gitCanonicalSha: string | null;
  readonly paginationMode: "PREFIX_ONLY" | ReadinessUnknown;
  readonly completeness: "BOUNDED_L_F11F13";
}

export interface OperationalReadinessAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface OperationalReadinessSnapshot {
  readonly schemaVersion: "t-a7-f11.2-l-f11f13";
  readonly accessSurface: OperationalReadinessAccessSurface;
  readonly readinessStatus: OperationalReadinessStatus;
  readonly readinessReasons: readonly string[];
  readonly evaluatedAt: string;
  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
  readonly completeness: "BOUNDED_L_F11F13";
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
  readonly audit: OperationalReadinessAudit;
  readonly observed: {
    readonly projectId: string | null;
    readonly methodMode: MethodMode | null;
    readonly projectState: D1Project["state"] | null;
    readonly hold: MethodModeHoldState;
    readonly legacyDependencies: OperationalReadinessLegacyDeps;
    readonly migration: OperationalReadinessMigrationStatus;
    readonly health: OperationalReadinessHealth;
    readonly history: OperationalReadinessHistorySummary;
    readonly openBlockers: readonly string[];
  };
  readonly decision: MethodModeTransitionDecision["decision"];
  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
  readonly authorization: MethodModeTransitionDecision["authorization"];
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
}

export interface OperationalReadinessQueryInput {
  readonly project?: D1Project | null;
  readonly historyProvider?: BoundedHistoryProvider;
  readonly historyLimit?: number;
}

function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
  return {
    availability: page.availability,
    returned: page.returned,
    gitCanonical: true,
    gitCanonicalSha: page.gitCanonicalSha,
    paginationMode: page.paginationMode,
    completeness: "BOUNDED_L_F11F13",
  };
}

function deriveReadinessStatus(args: {
  holdActive: boolean;
  healthStatus: OperationalReadinessHealth["status"];
  historyAvailability: BoundedHistoryAvailability | ReadinessUnknown;
}): { status: OperationalReadinessStatus; reasons: string[] } {
  const reasons: string[] = [];

  if (args.holdActive) {
    reasons.push("HOLD_ACTIVE");
  }
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    reasons.push("HEALTH_NOT_OBSERVED");
  }
  if (args.historyAvailability === "NOT_AVAILABLE") {
    reasons.push("HISTORY_NOT_AVAILABLE");
  } else if (args.historyAvailability === "UNKNOWN") {
    reasons.push("HISTORY_UNKNOWN");
  }

  // Hold blocks transitions → NOT_READY (never READY while hold active).
  if (args.holdActive) {
    return { status: "NOT_READY", reasons };
  }

  // Without an observed health probe, never claim READY.
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    return { status: "UNKNOWN", reasons };
  }

  if (args.historyAvailability === "NOT_AVAILABLE") {
    return { status: "UNKNOWN", reasons };
  }

  return { status: "READY", reasons: reasons.length ? reasons : ["OBSERVED_OK"] };
}

export function queryOperationalReadiness(
  input: OperationalReadinessQueryInput = {},
): OperationalReadinessSnapshot {
  const hold = readMethodModeHold();
  const transition = decideMethodModeTransition();
  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
  const historyPage = historyProvider.read({
    limit: input.historyLimit ?? 10,
  });
  const project = input.project ?? null;
  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
    p.startsWith("method/"),
  );

  const health: OperationalReadinessHealth = {
    status: "SIMULATED",
    detail:
      "No production readiness probe; simulated/local observation only — not evidence of healthy runtime.",
  };

  const derived = deriveReadinessStatus({
    holdActive: hold.active,
    healthStatus: health.status,
    historyAvailability: historyPage.availability,
  });

  const snapshot: OperationalReadinessSnapshot = {
    schemaVersion: "t-a7-f11.2-l-f11f13",
    accessSurface: "INTERNAL_ONLY",
    readinessStatus: derived.status,
    readinessReasons: derived.reasons,
    evaluatedAt: new Date().toISOString(),
    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
    completeness: "BOUNDED_L_F11F13",
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail:
        "D2 — read audit journal deferred; no persistent audit store in this lot.",
    },
    observed: {
      projectId: project?.projectId ?? null,
      methodMode: project?.methodMode ?? null,
      projectState: project?.state ?? null,
      hold,
      legacyDependencies: {
        methodModesAuthorized: METHOD_MODES,
        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
        methodCorePathCount: methodCores.length,
        note: "Observed allowlisted dependencies only; not a removal plan.",
      },
      migration: {
        status: "NOT_STARTED",
        detail: "No migration authorized in T-A7 L-F11F13.",
      },
      health,
      history: summarizeHistory(historyPage),
      openBlockers: hold.reasons.map((r) => r.code),
    },
    decision: transition.decision,
    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
    authorization: transition.authorization,
    mutable: false,
    adminUi: false,
    writeCommands: false,
  };

  return Object.freeze({
    ...snapshot,
    readinessReasons: Object.freeze([...snapshot.readinessReasons]),
    audit: Object.freeze({ ...snapshot.audit }),
    observed: Object.freeze({
      ...snapshot.observed,
      hold: Object.freeze({
        ...snapshot.observed.hold,
        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
      }),
      legacyDependencies: Object.freeze({
        ...snapshot.observed.legacyDependencies,
        methodModesAuthorized: Object.freeze([
          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
        ]),
        canonicalCorePaths: Object.freeze([
          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
        ]),
      }),
      migration: Object.freeze({ ...snapshot.observed.migration }),
      health: Object.freeze({ ...snapshot.observed.health }),
      history: Object.freeze({ ...snapshot.observed.history }),
      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
    }),
  });
}

/** Contract guard: readiness snapshot exposes no write surface. */
export function assertOperationalReadinessReadOnly(
  snapshot: OperationalReadinessSnapshot,
): void {
  if (
    snapshot.mutable !== false ||
    snapshot.adminUi !== false ||
    snapshot.writeCommands !== false ||
    snapshot.accessSurface !== "INTERNAL_ONLY"
  ) {
    throw new Error(
      "Operational readiness snapshot must remain read-only and INTERNAL_ONLY.",
    );
  }
}

```

### `projects/sfia-studio/app/lib/d1/index.ts`

```typescript
/**
 * Public D1 product surface.
 * Intentionally does NOT re-export MethodMode hold test helpers.
 */
export * from "./types";
export * from "./commands";
export * from "./errors";
export {
  METHOD_MODE_HOLD_REASON_CODES,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
  decideMethodModeTransition,
  assertMethodModeTransitionAllowed,
} from "./methodModeHold";
export type {
  MethodModeHoldReasonCode,
  MethodModeHoldReason,
  MethodModeHoldState,
  MethodModeTransitionDecision,
} from "./methodModeHold";
export {
  queryOperationalReadiness,
  assertOperationalReadinessReadOnly,
} from "./operationalReadiness";
export type {
  OperationalReadinessSnapshot,
  OperationalReadinessQueryInput,
  OperationalReadinessStatus,
  OperationalReadinessAccessSurface,
} from "./operationalReadiness";
export { resetD1DbForTests } from "./db";

```

### `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`

```typescript
/**
 * T-A7 L-F11F13 — F13.4 bounded read-only history foundation.
 * Git remains canonical. Seed enriched + explicit gitCanonicalSha.
 * Pagination: PREFIX_ONLY. Retention: GIT_ONLY. Audit: deferred.
 * No migration, durable store, UI, HTTP, ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

/** Pinned tip for documentary seed (main after PR #287). Caller may override. */
export const DEFAULT_BOUNDED_HISTORY_GIT_SHA =
  "770605bcfa4cc3e403ee2c4615c1a115ccd38458" as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export type BoundedHistoryPaginationMode = "PREFIX_ONLY";

export type BoundedHistoryRetention = "GIT_ONLY";

export interface BoundedHistoryEntry {
  readonly id: string;
  readonly category: string;
  readonly status: BoundedHistoryEntryStatus;
  readonly occurredAt: string;
  readonly gitProvenance: {
    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
    readonly ref: string;
  };
  readonly metadata: Readonly<Record<string, string>>;
}

export interface BoundedHistoryPagination {
  readonly mode: BoundedHistoryPaginationMode;
  /** Prefix length requested (clamped). */
  readonly prefixLength: number;
  /** Always null — D4 forbids multi-page cursors in this lot. */
  readonly nextCursor: null;
  readonly hasMore: boolean;
}

export interface BoundedHistoryAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  /** Full-length Git object id tying this page to a canonical tip. */
  readonly gitCanonicalSha: string;
  readonly pagination: BoundedHistoryPagination;
  readonly paginationMode: BoundedHistoryPaginationMode;
  readonly retention: BoundedHistoryRetention;
  readonly audit: BoundedHistoryAudit;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_L_F11F13";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  /** Prefix length (PREFIX_ONLY). Alias of historical `limit`. */
  readonly limit?: number;
  readonly prefixLength?: number;
}

export interface DocumentaryBoundedHistoryProviderOptions {
  readonly seed?: readonly BoundedHistoryEntry[];
  /**
   * Canonical Git SHA for this page. Injected by caller / default pinned tip.
   * No arbitrary git shell in product runtime.
   */
  readonly gitCanonicalSha?: string;
}

export class BoundedHistoryMutationError extends Error {
  readonly code = "MUTATION_FORBIDDEN" as const;
  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
    super(message);
    this.name = "BoundedHistoryMutationError";
  }
}

export interface BoundedHistoryProvider {
  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
}

const GIT_SHA_FULL_RE = /^[0-9a-f]{40}$/i;

/** Validate a full Git object id (40 hex). Fail closed on invalid input. */
export function assertGitCanonicalSha(sha: string): string {
  if (typeof sha !== "string" || !GIT_SHA_FULL_RE.test(sha.trim())) {
    throw new RangeError(
      "gitCanonicalSha must be a 40-character hexadecimal Git object id",
    );
  }
  return sha.trim().toLowerCase();
}

function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
  return Object.freeze({
    ...entry,
    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
    metadata: Object.freeze({ ...entry.metadata }),
  });
}

function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
  return Object.freeze({
    ...page,
    items: Object.freeze(page.items.map(freezeEntry)),
    pagination: Object.freeze({ ...page.pagination }),
    audit: Object.freeze({ ...page.audit }),
  });
}

function resolvePrefixLength(request: BoundedHistoryReadRequest): number {
  const raw =
    request.prefixLength !== undefined ? request.prefixLength : request.limit;
  const value = raw ?? BOUNDED_HISTORY_MAX_ITEMS;
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError("prefixLength/limit must be a positive number");
  }
  return Math.min(Math.floor(value), BOUNDED_HISTORY_MAX_ITEMS);
}

/** Documentary/Git references — enriched seed, ordered stably (prefix-only). */
const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
  freezeEntry({
    id: "hist-t-a7-f03-f11-f13",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T17:54:21.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "285",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-readme-post-merge",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:17:54.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "286",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness-frame",
    category: "readiness-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563",
    },
    metadata: {
      pack: "t-a7-technical-readiness-framing",
      commit: "docs-frame",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-feat",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:20:08.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "47e26fdc851b82588aa5225aca84307543147160",
    },
    metadata: {
      commit: "feat-bounded-foundations",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-harden",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:37:59.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "b6a19335f5116940175f5986492e3693722563bc",
    },
    metadata: {
      commit: "fix-harden-override",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-merged-main",
    category: "integration",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T19:52:20.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "770605bcfa4cc3e403ee2c4615c1a115ccd38458",
    },
    metadata: {
      pr: "287",
      note: "lot-1-integrated-on-main",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness-pack-path",
    category: "documentary-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T22:45:18.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "n3-completion-framing",
    },
  }),
]);

function buildPage(args: {
  availability: BoundedHistoryAvailability;
  items: readonly BoundedHistoryEntry[];
  prefixLength: number;
  truncated: boolean;
  gitCanonicalSha: string;
  note: string;
}): BoundedHistoryPage {
  return freezePage({
    availability: args.availability,
    items: args.items,
    limit: args.prefixLength,
    returned: args.items.length,
    truncated: args.truncated,
    gitCanonical: true,
    gitCanonicalSha: args.gitCanonicalSha,
    pagination: {
      mode: "PREFIX_ONLY",
      prefixLength: args.prefixLength,
      nextCursor: null,
      hasMore: args.truncated,
    },
    paginationMode: "PREFIX_ONLY",
    retention: "GIT_ONLY",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail: "D2 — read audit deferred; no persistent access journal.",
    },
    mutable: false,
    evaluatedAt: new Date().toISOString(),
    completeness: "BOUNDED_L_F11F13",
    note: args.note,
  });
}

export function createDocumentaryBoundedHistoryProvider(
  options: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[] = {},
): BoundedHistoryProvider {
  // Back-compat: previous signature accepted seed array as first arg.
  const opts: DocumentaryBoundedHistoryProviderOptions = Array.isArray(options)
    ? { seed: options }
    : options;

  const frozenSeed = Object.freeze(
    (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
  );
  const gitCanonicalSha = assertGitCanonicalSha(
    opts.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );

  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const prefixLength = resolvePrefixLength(request);
      const slice = frozenSeed.slice(0, prefixLength);
      return buildPage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        prefixLength,
        truncated: frozenSeed.length > slice.length,
        gitCanonicalSha,
        note:
          "Git remains canonical (D5 GIT_ONLY). PREFIX_ONLY pagination (D4). " +
          "Page tied to injected/pinned gitCanonicalSha — not a live git shell.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(
  options: Pick<DocumentaryBoundedHistoryProviderOptions, "gitCanonicalSha"> = {},
): BoundedHistoryProvider {
  const gitCanonicalSha = assertGitCanonicalSha(
    options.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      let prefixLength = 1;
      try {
        prefixLength = resolvePrefixLength(request);
      } catch {
        prefixLength = 1;
      }
      return buildPage({
        availability: "NOT_AVAILABLE",
        items: [],
        prefixLength,
        truncated: false,
        gitCanonicalSha,
        note: "Bounded history provider unavailable; Git remains canonical (GIT_ONLY).",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (
    page.mutable !== false ||
    page.gitCanonical !== true ||
    page.retention !== "GIT_ONLY" ||
    page.paginationMode !== "PREFIX_ONLY"
  ) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false, gitCanonical=true, GIT_ONLY, PREFIX_ONLY.",
    );
  }
  assertGitCanonicalSha(page.gitCanonicalSha);
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page.items as any).push({});
    throw new BoundedHistoryMutationError(
      "Bounded history items array was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
}

export const defaultBoundedHistoryProvider =
  createDocumentaryBoundedHistoryProvider();

```

### `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertOperationalReadinessReadOnly,
  queryOperationalReadiness,
} from "@/lib/d1/operationalReadiness";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";
import {
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import fs from "node:fs";
import path from "node:path";

describe("T-A7 L-F11F13 F11.2 operational readiness (internal-only)", () => {
  beforeEach(() => {
    resetMethodModeHoldForTests();
  });

  afterEach(() => {
    resetMethodModeHoldForTests();
  });

  it("returns a frozen INTERNAL_ONLY read-only snapshot with hold and blockers", () => {
    const snap = queryOperationalReadiness();
    expect(snap.schemaVersion).toBe("t-a7-f11.2-l-f11f13");
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.mutable).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.iam).toBe("NOT_SELECTED");
    expect(snap.persistence).toBe("NOT_SELECTED");
    expect(snap.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(snap.observed.hold.active).toBe(true);
    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
    expect(snap.decision).toBe("BLOCK");
    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
    expect(snap.observed.migration.status).toBe("NOT_STARTED");
    expect(snap.observed.health.status).toBe("SIMULATED");
    expect(snap.observed.history.gitCanonical).toBe(true);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.observed.history.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
    expect(snap.readinessStatus).toBe("NOT_READY");
    expect(snap.readinessReasons).toContain("HOLD_ACTIVE");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    assertOperationalReadinessReadOnly(snap);
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      snap.mutable = true;
    }).toThrow();
  });

  it("never treats incomplete/simulated health as READY", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.readinessStatus).toBe("UNKNOWN");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("serializes stably for core contract fields", () => {
    const snap = queryOperationalReadiness();
    const json = JSON.stringify({
      schemaVersion: snap.schemaVersion,
      accessSurface: snap.accessSurface,
      readinessStatus: snap.readinessStatus,
      mutable: snap.mutable,
      writeCommands: snap.writeCommands,
      adminUi: snap.adminUi,
      iam: snap.iam,
      persistence: snap.persistence,
      audit: snap.audit.status,
      decision: snap.decision,
      blockers: snap.observed.openBlockers,
    });
    expect(json).toContain("t-a7-f11.2-l-f11f13");
    expect(json).toContain("INTERNAL_ONLY");
    expect(json).toContain("B5_OPEN");
    expect(json).toContain("DEFERRED_EXPLICITLY");
  });

  it("exposes NOT_AVAILABLE history without inventing READY", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createUnavailableBoundedHistoryProvider(),
    });
    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
    expect(snap.observed.history.returned).toBe(0);
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("reflects inactive hold without recommending keep", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
  });

  it("integrates PREFIX_ONLY history summary", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider(),
      historyLimit: 2,
    });
    expect(snap.observed.history.returned).toBe(2);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.completeness).toBe("BOUNDED_L_F11F13");
  });

  it("has no HTTP readiness route under app/", () => {
    const appRouter = path.resolve(__dirname, "../../app");
    if (!fs.existsSync(appRouter)) return;
    const hasReadinessRoute = fs
      .readdirSync(appRouter, { recursive: true })
      .map(String)
      .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
    expect(hasReadinessRoute).toBe(false);
  });
});

```

### `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  assertBoundedHistoryImmutable,
  assertGitCanonicalSha,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.pagination.mode).toBe("PREFIX_ONLY");
    expect(page.pagination.nextCursor).toBeNull();
    expect(page.pagination.hasMore).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(page.completeness).toBe("BOUNDED_L_F11F13");
    assertBoundedHistoryImmutable(page);
  });

  it("enforces PREFIX_ONLY max prefix length", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("accepts prefixLength alias and keeps stable order", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const a = provider.read({ prefixLength: 3 });
    const b = provider.read({ limit: 3 });
    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
    expect(a.pagination.nextCursor).toBeNull();
  });

  it("covers volume bounds 0/1/max/max+1 semantics", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
    const one = provider.read({ limit: 1 });
    expect(one.returned).toBe(1);
    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(over.returned).toBe(max.returned);
  });

  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider({
      gitCanonicalSha: ALT_SHA,
    });
    const page = provider.read({ limit: 1 });
    expect(page.gitCanonicalSha).toBe(ALT_SHA);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
    ).toThrow(/40-character/);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
    ).toThrow(/40-character/);
    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
  });

  it("enriches seed with lot-1 main tip reference", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({
      limit: BOUNDED_HISTORY_MAX_ITEMS,
    });
    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
    expect(tip).toBeDefined();
    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(tip?.metadata.pr).toBe("287");
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider({
        gitCanonicalSha: ALT_SHA,
      }),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.writeCommands).toBe(false);
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
  });

  it("preserves back-compat seed-array factory signature", () => {
    const page = createDocumentaryBoundedHistoryProvider([]).read({ limit: 5 });
    expect(page.availability).toBe("EMPTY");
    expect(page.returned).toBe(0);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
  });
});

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
| **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
| **F11.2** | contrat **INTERNAL_ONLY** durci (L-F11F13) · pas HTTP/UI · **≠ cutover-complete** |
| **F13.4** | seed enrichi + SHA Git · PREFIX_ONLY · GIT_ONLY · **≠ archive complète / cutover** |
| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **Push / PR projet (branche docs courante)** | **aucun** |

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01`–`09` | framing readiness / O2 |
| `10` | lot 1 borné (O3) |
| `11` | post-merge + options N1–N5 |
| `12` | F11.2 completion surface & gaps |
| `13` | F13.4 completion surface & gaps |
| `14` | dépendances & frontières runtime |
| `15` | options de lots bornés futurs |
| `16` | decision pack Morris F11/F13 |
| `17` | résultats lot L-F11F13 (implémentation locale) |

## Lot 1 intégré sur `main`

1. MethodMode hold (défaut actif ; override test-only hors barrel)
2. F11.2 readiness read-only interne
3. F13.4 historique RO borné (Git canonique)

## Cadrage N3 + lot L-F11F13 (local)

Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’implémentation locale.

**N3 ≠ cutover. L-F11F13 local ≠ push/PR/delivery.**

## Anti-claims

- lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
- L-F11F13 local ≠ HTTP public ≠ IAM ≠ persistence
- contrat interne F11 ≠ API réseau
- seed F13 + SHA ≠ store concurrent à Git
- hold ≠ blockers fermés
- tests verts ≠ RUN READY / RGPD VALIDATED

## Gate candidat suivant

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS`

## Verdict courant

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — TESTS PASSED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

---

## Historique post-merge (lot 1)

> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.

Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.

Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris (ce cycle).

---

## Historique du lot local pré-intégration

> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.

Avant PR #287, le lot 1 existait uniquement en local sur
`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.

À cette étape, le résumé d’état indiquait correctement :

- `Push / PR projet : aucun`
- gate d’intégration candidat `NOT CONSUMED`
- verdict se terminant par `PROJECT BRANCH NOT PUSHED`

Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md`

```markdown
# 12 — F11.2 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `12-f11-2-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
| **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
| **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Implémentation** | **interdite** dans le cycle N3 · **réalisée localement** en L-F11F13 (voir `17`) |
| **Statut F11.2** | contrat INTERNAL_ONLY L-F11F13 · **≠ cutover-complete** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
| Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
| Snapshot | `schemaVersion: t-a7-f11.2-l-f11f13` · frozen | `completeness: BOUNDED_L_F11F13` · `accessSurface: INTERNAL_ONLY` |
| Readiness | `READY` \| `NOT_READY` \| `UNKNOWN` | absence signal ≠ READY |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
| Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
| History | résumé F13 (`availability`, `returned`, `gitCanonical`, `gitCanonicalSha`, `PREFIX_ONLY`) | pas d’items complets |
| Health | `SIMULATED` | pas de probe prod |
| Audit | `DEFERRED_EXPLICITLY` | D2 |
| IAM / Persistence | `NOT_SELECTED` | D7 / D8 |
| Migration | `NOT_STARTED` | pas de schéma |
| Tests | `t-a7-operational-readiness.test.ts` | L-F11F13 |
| Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |

**Anti-claim :** contrat interne L-F11F13 ≠ API HTTP · ≠ cutover ready · ≠ IAM.

---

## 2. Finalité cible F11.2

Exigence décidée (pack F03/F11/F13) : **API minimale de lecture / readiness sans UI admin dédiée**, avant tout cutover futur.

Finalité :

- exposer un **état opérationnel observé** (MethodMode, hold, blockers, deps legacy, migration, health, historique borné) ;
- séparer **observed / decision / recommendation / authorization** ;
- rester **strictement read-only** ;
- permettre audit / support / gouvernance **sans** mutation ni console admin.

Consommateurs candidats (non autorisés ici) :

| Consommateur | Besoin | Statut |
|--------------|--------|--------|
| Services serveur internes OA/D1 | snapshot local | partiel (appel direct) |
| Opérateur / Morris (via surface future) | lecture gouvernée | **non exposé** |
| CI / probes | non-régression RO | tests unitaires existants |
| UI admin | — | **hors F11.2** (F11.3 non retenue) |
| Clients HTTP externes | — | **non sélectionné** |

---

## 3. Contrat fonctionnel cible (minimal)

### 3.1 Données exposées (cible)

| Domaine | Fondation actuelle | Cible minimale complète | Gap |
|---------|--------------------|-------------------------|-----|
| Identity projet | `projectId` optionnel injecté | résolution projet bornée documentée | qui fournit le projet ? |
| MethodMode | mode + state si projet fourni | lecture mode/state stable + version/optimistic si pertinent | pas de binding session OA |
| Hold | actif + reasons codes | hold + provenance + evaluatedAt + codes stables | OK partiel |
| Blockers | codes hold | mapping explicite B5/R1/R-M01/HARD ≠ fermeture | OK partiel |
| Legacy deps | METHOD_MODES + canonical paths | inventaire versionné / digest éventuel | digest non exposé |
| Migration | NOT_STARTED | enum élargi + détail non-bavard | pas de pipeline |
| Health | SIMULATED | états observés documentés (local/unknown/degraded) | pas de probe |
| History summary | availability/returned | lien stable vers page F13 + fraîcheur | pas de cursor/page id |
| Decision layer | BLOCK/ALLOW + authz strings | inchangé fonctionnellement | OK |
| Audit lecture | absente | événement borné (qui/quand/quoi résumé) | **MISSING** |

### 3.2 Contrat read-only (normatif)

- `mutable=false` · `adminUi=false` · `writeCommands=false` obligatoires ;
- aucune commande write via cette surface ;
- aucune mutation MethodMode / history / DB via F11.2 ;
- résultat immuable (freeze / copie) ;
- erreurs non bavardes (pas de secrets, pas de chemins utilisateur absolus).

### 3.3 Erreurs / disponibilité / fraîcheur

| Aspect | Fondation | Cible | Gap |
|--------|-----------|-------|-----|
| Erreurs | throw D1Error côté hold transitions (pas F11 query) | codes readiness explicites (INVALID_INPUT, UNAVAILABLE, FORBIDDEN_IF_IAM) | codes non formalisés |
| Disponibilité | toujours local-sync | documenter dégradé si provider history/hold unavailable | partiel (history provider injectable) |
| Fraîcheur | `evaluatedAt` ISO Z | TTL/freshness note (sans SLA prod) | pas de TTL |
| Observabilité | logs D1 hold séparés | event `readiness_queried` borné | **MISSING** |

---

## 4. IAM / sécurité / RGPD

| Frontière | Statut | Note |
|-----------|--------|------|
| Authentification | **NOT SELECTED** | pas d’identité d’acteur sur la query actuelle |
| Autorisation | hold ≠ IAM | `authorization` = décision hold, **pas** ACL produit |
| IAM production | **NOT SELECTED** | décision Morris future obligatoire avant exposition HTTP |
| Path-policy | distincte IAM | inchangée par F11.2 |
| Données | métadonnées gouvernance / ids projet | pas de PII documentée ; minimisation requise |
| RGPD production | **NOT VALIDATED** | si HTTP/UI futurs → DPIA/cycle distinct |

**Règle N3 :** ne **pas** sélectionner de mécanisme IAM dans ce document.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision Morris ? |
|----|------|-------------|--------|-------------------|
| G-F11-01 | gap fonc. | pas d’API HTTP / port serveur formalisé | « API finale » | oui (lot futur) |
| G-F11-02 | gap fonc. | pas d’audit de lecture | conformité F11 normative | oui/non selon lot |
| G-F11-03 | gap tech. | health SIMULATED seulement | readiness prod claim | oui (probe) |
| G-F11-04 | dépendance | F13 summary → fondation F13.4 | cohérence historique | N3 (ce pack) |
| G-F11-05 | dépendance | hold MethodMode | décision transition | déjà lot 1 |
| G-F11-06 | blocker | IAM NOT SELECTED | exposition multi-acteur | **oui avant HTTP** |
| G-F11-07 | blocker | B5/HARD OPEN | delivery/cutover | ne pas fermer |
| G-F11-08 | gap | pas de binding session OA (P06) | cutover | hors N3 impl |

---

## 6. Critères de complétion F11.2 (documentaires)

F11.2 peut être déclaré **complete** seulement si **toutes** les conditions suivantes sont vraies sous preuves Git + gate Morris d’implémentation/validation :

1. contrat read-only normatif respecté runtime ;
2. surface d’accès **décidée et validée** (interne-only **ou** HTTP — choix Morris) ;
3. champs cibles §3.1 exposés avec provenance ;
4. audit de lecture minimal présent **ou** explicitement différé par décision Morris ;
5. health non-simulé **ou** statut UNKNOWN/DEGRADED honnête documenté pour le niveau revendiqué ;
6. tests de non-régression RO + frontières import ;
7. IAM : soit surface server-only mono-opérateur documentée, soit IAM sélectionné+validé ;
8. **aucune** claim delivery/cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- UI admin (F11.3) ;
- mutations / write commands ;
- sélection IAM/persistence ;
- fermeture B5/R1/R-M01/HARD ;
- product-complete API OA (A3.2) ;
- delivery / cutover.

---

## 8. Stop conditions

- besoin d’écrire via readiness ;
- besoin d’UI admin pour « compléter » F11.2 ;
- sélection IAM forcée sans gate ;
- claim « F11.2 complete » sans preuves §6 ;
- modification OPS1 / `method/**` pour readiness.

---

## 9. Questions d’arbitrage Morris

1. Surface d’accès cible : **server-internal only** vs **HTTP read** (sans UI) ?
2. Audit de lecture : **requis pour complete** vs **différé** ?
3. Health : accepter **UNKNOWN/SIMULATED** comme complete documentaire, ou exiger probe ?
4. Faut-il un lot technique F11-only avant tout lot HTTP ?

Toutes réponses = futurs GO · `RECOMMENDED — NOT DECIDED` hors N3.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md`

```markdown
# 13 — F13.4 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `13-f13-4-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
| **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
| **Base Git** | `770605bc…` |
| **Implémentation** | **interdite** en N3 · **réalisée localement** en L-F11F13 (voir `17`) |
| **Statut F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY · **≠ cutover-complete** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
| Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
| Providers | documentary · unavailable | pas de Git live shell |
| Page | frozen · `gitCanonical=true` · `gitCanonicalSha` · `mutable=false` | `BOUNDED_L_F11F13` |
| Pagination | `PREFIX_ONLY` · `nextCursor=null` | D4 |
| Retention | `GIT_ONLY` | D5 |
| Audit | `DEFERRED_EXPLICITLY` | D2 |
| Seed | enrichi (incl. merge #287 / `770605bc…`) | ≠ archive complète |
| Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
| Tests | `t-a7-bounded-history.test.ts` | SHA / prefix / volume |
| Persist store | **aucun** | Git canonique |

**Anti-claim :** seed+SHA L-F11F13 ≠ vue runtime cutover · ≠ ACL · ≠ store concurrent à Git.

---

## 2. Git canonique (normatif)

- Git / packs documentaires = **vérité historique** ;
- la vue runtime est une **projection bornée** ;
- interdiction de mutations historiques ;
- path-policy ≠ IAM ;
- isolation OPS1 (W1-D04) reste **préalable** à retrait legacy — **non réalisée** ici.

---

## 3. Cible fonctionnelle minimale — vue runtime bornée

| Aspect | Fondation | Cible minimale complète | Gap |
|--------|-----------|-------------------------|-----|
| Rôle | métadonnées packs | support/audit/traçabilité RO | pas de parcours opérateur |
| Périmètre | seed documentary fixe | politique d’inclusion/exclusion documentée (catégories) | politique incomplete |
| Profondeur | max 50 | max borné + justification + overflow behavior | OK partiel |
| Pagination | slice prefix only | cursor/offset **ou** explicite « prefix-only » décidé | **MISSING** si multi-page requis |
| Provenance | git-ref / documentary-pack / synthetic | provenance obligatoire + vérifiabilité | OK partiel |
| Fraîcheur | `evaluatedAt` | relation à tip Git / pack SHA | pas de tie to HEAD |
| Cohérence Git | claim `gitCanonical` | preuve que items ⊆ refs Git/packs | seed manuel |
| Actif vs historique | status enum | frontière sémantique documentée + tests | OK partiel |
| États dégradés | NOT_AVAILABLE | matrice dégradée + messages | OK partiel |
| Audit accès | absent | log borné lectures | **MISSING** |
| Rétention | UNKNOWN | durée conservation (cycle distinct si besoin) | **UNKNOWN** |

---

## 4. Sécurité / observabilité / rétention

| Frontière | Statut |
|-----------|--------|
| IAM / ACL | **NOT SELECTED** — lectures actuelles = in-process |
| AuthN/AuthZ acteur | non modélisées |
| Contenu sensible | métadonnées packs/PR seulement ; pas de blobs method |
| Observabilité | pas d’event dédié |
| Rétention | **UNKNOWN** — à cadrer sous gate distinct si conservation ≠ Git |
| RGPD | **NOT VALIDATED** — minimisation : pas de PII dans seed actuel |

**Ne pas sélectionner** store durable / cache produit / IAM dans N3.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision ? |
|----|------|-------------|--------|------------|
| G-F13-01 | gap fonc. | seed ≠ archive Git live | vue « runtime » riche | oui (stratégie lecture) |
| G-F13-02 | gap tech. | pas de pagination multi-page | volumes > 50 | oui si besoin |
| G-F13-03 | gap | pas d’audit accès | norme F13 | oui/non |
| G-F13-04 | dépendance | F11 consomme summary | cohérence couple | docs N3 |
| G-F13-05 | dépendance | OPS1 isolation (P10) | retrait legacy | N2/autre |
| G-F13-06 | blocker | persistence NOT SELECTED | si cache/index requis | **oui avant store** |
| G-F13-07 | blocker | IAM NOT SELECTED | si exposition multi-acteur | **oui avant HTTP** |
| G-F13-08 | unknown | durée conservation | conformité | cycle rétention |

---

## 6. Critères de complétion F13.4

Déclarable **complete** seulement si :

1. Git reste canonique (preuve + tests anti-mutation) ;
2. politique d’inclusion des items documentée et testée ;
3. profondeur/pagination décidées et implémentées sous gate ;
4. états dégradés couverts ;
5. cohérence provenance ↔ Git/packs démontrable ;
6. audit accès présent **ou** différé explicitement ;
7. rétention clarifiée **ou** « Git-only retention » décidé ;
8. IAM/persistence : soit in-process mono-opérateur documenté, soit sélectionnés+validés ;
9. **aucune** mutation historique ; **aucune** claim cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- store concurrent à Git ;
- migration DB historique ;
- ACL production sans gate ;
- exposition de contenu `method/**` brut ;
- UI archive ;
- retrait OPS1/legacy.

---

## 8. Stop conditions

- tentative de faire de la vue runtime une source canonique ;
- écriture / « repair » d’historique ;
- sélection persistence/IAM sans GO ;
- lecture arbitraire filesystem hors politique ;
- claim complete sans §6.

---

## 9. Questions d’arbitrage Morris

1. Lecture Git live (bornée) vs seed documentary enrichi vs index dérivé **non persistant** ?
2. Pagination multi-page requise pour complete ?
3. Audit accès requis maintenant ?
4. Rétention = Git only (décider) vs cycle rétention séparé ?
5. Couplage F11 summary : stable page-id / evaluatedAt contract ?

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md`

```markdown
# 14 — F11/F13 dependencies & runtime boundaries

| Champ | Valeur |
|-------|--------|
| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Gate N3** | DECIDED — cadrage only |
| **IAM / Persistence** | **NOT SELECTED** (préservés) |

---

## 1. Cartographie composants (existant)

```
[Git / packs docs] ──canonique──► (humain / CI)
        ▲
        │ provenance refs (seed)
        │
[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
        │                                    │
        │                                    ├── readMethodModeHold
        │                                    ├── decideMethodModeTransition
        │                                    └── optional D1Project input
        ▼
   (no durable store)

[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
```

Ownership :

| Composant | Owner logique | Module |
|-----------|---------------|--------|
| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |

---

## 2. Frontières Git / runtime

| Règle | Statut |
|-------|--------|
| Git = vérité historique | **obligatoire** |
| Runtime view = projection | **obligatoire** |
| Pas de write historique | **obligatoire** |
| Seed documentary ≠ full Git walk | **état actuel** |
| Cache / index durable | **interdit sans GO persistence** |
| Concurrent writers | **hors scope** |

---

## 3. Frontières IAM / identité

| Couche | État | Interdit N3 |
|--------|------|-------------|
| AuthN | non présent sur F11/F13 | sélection produit IAM |
| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
| Acteur | non typé sur query | inventer roles |
| Path-policy | distincte | fusionner path-policy↔IAM |
| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |

Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.

---

## 4. Frontières persistance

| Élément | Autorisé maintenant | Interdit sans GO |
|---------|---------------------|------------------|
| Lecture Git/packs | oui (conceptuel) | — |
| Seed in-memory | oui (lot 1) | — |
| SQLite/DB history store | non | **oui interdit** |
| Migration schéma | non | **oui interdit** |
| Cache process local non durable | candidat futur (doc) | durable/shared store |

---

## 5. API interne / HTTP / UI

| Surface | État | Décision requise |
|---------|------|------------------|
| API interne TS | **existante** (fonctions) | formaliser version contrat |
| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
| HTTP route | absente | GO surface access |
| UI admin | absente (F11.2) | F11.3 non retenue |
| Server actions write | hors F11/F13 | gate write distinct |

---

## 6. Flux de lecture (cible documentaire)

1. Consommateur autorisé (à décider) appelle readiness **read**.
2. F11 lit hold + (optionnel) projet + F13 summary.
3. F13 lit provider borné ; Git reste référence.
4. Snapshot frozen renvoyé ; audit éventuel (futur).
5. Aucun write ; erreurs fail-closed.

Source de vérité par donnée :

| Donnée | Source |
|--------|--------|
| Historique canonique | Git |
| Projection items | provider F13 (dérivé) |
| Hold | évaluation gouvernance (défaut code) |
| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |

Données temporaires autorisées : copies frozen, timestamps d’évaluation.
Interdites : files d’attente durables, outbox history, dual-write.

---

## 7. Observabilité / audit / erreurs

| Besoin | Actuel | Cible cadrée |
|--------|--------|--------------|
| Logs hold block/allow | oui (codes) | conserver borné |
| Logs readiness query | non | event optionnel futur |
| Logs history read | non | event optionnel futur |
| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
| Métriques | non | compteurs lectures (futur) sans PII |

---

## 8. Dépendances

### Obligatoires pour complétion documentaire N3 (ce pack)

- décisions F11.2 / F13.4 déjà adoptées ;
- lot 1 sur main ;
- hold ACTIVE governance ;
- Git canonique.

### Différables

- IAM product ;
- persistence ;
- HTTP ;
- live Git walk ;
- OPS1 isolation runtime evidence (N2) ;
- P08/P09 replacement (N1) ;
- rollback drills (N4).

### Anti-couplages

- F11 ↛ OPS1 imports ;
- F13 ↛ D1 writes ;
- F13 ↛ `method/**` content dump ;
- readiness ↛ auto-clear blockers ;
- test-only ↛ barrels runtime.

---

## 9. Risques de dette

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Traiter lot 1 comme API finale | critères complete §12/§13 |
| Ajouter HTTP sans IAM | stop condition |
| Index durable « pour perf » | persistence NOT SELECTED |
| Seed manuel diverge de Git | exiger preuve provenance |
| F11/F13 circular writes | F11→F13 read only (déjà) |

---

## 10. Matrice capacité (synthèse)

| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
|----------|----------|-----|------------|---------|--------|--------|----------|
| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md`

```markdown
# 15 — F11/F13 completion options & bounded lots

| Champ | Valeur |
|-------|--------|
| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **N3** | cadrage terminé localement · **pas d’implémentation** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` |

---

## 1. Options distinctes (futurs lots)

### L-F11A — Formaliser contrat interne F11 (sans HTTP)

| Champ | Contenu |
|-------|---------|
| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
| Valeur | réduit ambiguïté « API » sans surface réseau |
| Risques | sous-estimer besoin HTTP plus tard |
| Dette | doc + tests contrat |
| Rollback | revert Git |
| Tests | schema/contract tests |
| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |

### L-F11B — Surface HTTP read-only F11 (sans UI)

| Champ | Contenu |
|-------|---------|
| Objectif | Exposer readiness via HTTP GET borné |
| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
| Risques | exposition prématurée |
| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |

### L-F13A — Politique + pagination F13 (in-process)

| Champ | Contenu |
|-------|---------|
| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
| Dépendances | pas de store |
| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |

### L-F13B — Lecteur Git borné (refs only)

| Champ | Contenu |
|-------|---------|
| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
| Risques | perf, chemins, secrets |
| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |

### L-F11F13 — Lot couplé minimal (interne only)

| Champ | Contenu |
|-------|---------|
| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |

### L-DEFER — Différer

Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.

---

## 2. Lot minimal recommandé (non décidé)

**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.

Justification challenge :

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
| Dette ? | code borné + tests |
| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
| Repo-first ? | s’appuie sur modules main |
| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |

**Statut :** `RECOMMENDED — NOT DECIDED`

**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.

---

## 3. Lots complémentaires (hors N3 exécution)

- N2 evidence OPS1 (indépendant) ;
- N1 P08/P09 framing/impl sous gates séparés ;
- N4 rollback framing ;
- cycle rétention F13 si conservation ≠ Git.

---

## 4. Impacts delivery/cutover

Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md`

```markdown
# 16 — Morris decision pack — F11.2 / F13.4 completion

| Champ | Valeur |
|-------|--------|
| **Document** | `16-morris-f11-f13-completion-decision-pack.md` |
| **Date cadrage N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Date décisions D1–D8** | 2026-07-28 22:58:09 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` (cadrage) |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
| **Push / PR projet** | **non autorisés** par ce gate |

> Note d’intégrité : dans le handoff N3 (`62904dbd…` / blob `d11efa52…`), D1–D8 figuraient comme **recommandations** (`RECOMMENDED — NOT DECIDED`). Elles sont enregistrées ici comme **décisions Morris adoptées** avant l’implémentation L-F11F13.

---

## 1. Décisions D1–D8 (adoptées)

| ID | Décision | Statut |
|----|----------|--------|
| **D1** | F11 complete = **internal-only** (pas HTTP, pas UI) | `DECIDED — ADOPTED BY MORRIS` |
| **D2** | Audit lecture F11/F13 = **différé explicitement** | `DECIDED — ADOPTED BY MORRIS` |
| **D3** | F13 data = **seed enrichi + liaison explicite au SHA Git** | `DECIDED — ADOPTED BY MORRIS` |
| **D4** | Pagination F13 = **prefix-only formalisée** | `DECIDED — ADOPTED BY MORRIS` |
| **D5** | Rétention F13 = **Git-only** | `DECIDED — ADOPTED BY MORRIS` |
| **D6** | Lot technique = **L-F11F13 interne** | `DECIDED — ADOPTED BY MORRIS` |
| **D7** | IAM = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
| **D8** | Persistence = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |

### Gate consommé

`GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER`

**Autorité :** implémentation **locale** uniquement · pas de push/PR/merge/delivery/cutover.

---

## 2. Impacts / exclusions

| Inclus | Exclu |
|--------|-------|
| Contrat F11 interne | HTTP / UI / IAM product |
| Seed F13 + SHA | Store / migration / cache durable |
| Prefix-only ≤50 | Multi-page complexe / scan non borné |
| Audit différé documenté | Journal d’audit persistant |
| Rétention Git-only | Rétention applicative |

B5 / R1 / R-M01 / HARD restent **OPEN** / **OPEN HARD**.

---

## 3. Recommandation historique N3 (archive)

Avant adoption Morris, le pack N3 recommandait D1=internal-only, D6=L-F11F13, D7/D8=NOT SELECTED, etc. (`RECOMMENDED — NOT DECIDED`).

Cette section ne constitue **pas** l’état courant des décisions.

---

## 4. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 5. Résultats L-F11F13

Voir `17-f11-f13-internal-completion-lot-results.md` pour l’implémentation locale, tests et anti-claims.

---

## 6. Verdict document

`D1–D8 DECIDED — L-F11F13 IMPLEMENTED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

```

---

## Diff complet — commit documentaire

```diff
commit dcdc90a0779859ec5d34a91021bab65122447ee5
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Tue Jul 28 22:59:09 2026 +0200

    docs(sfia-studio): record F11 F13 completion decisions

    Record Morris D1–D8 as adopted and authorize the local L-F11F13
    internal completion lot without project push, PR, or delivery.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
new file mode 100644
index 0000000..9adee4d
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
@@ -0,0 +1,168 @@
+# 12 — F11.2 completion surface & gaps
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `12-f11-2-completion-surface-and-gaps.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
+| **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
+| **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| **Implémentation** | **interdite** dans ce cycle |
+| **Statut F11.2** | fondation lot 1 intégrée · **API finale non complète** |
+
+---
+
+## 1. État actuel (main)
+
+| Élément | Preuve | Limite |
+|---------|--------|--------|
+| Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
+| Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
+| Snapshot | `schemaVersion: t-a7-f11.2-lot1` · frozen | `completeness: BOUNDED_LOT_1` |
+| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
+| Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
+| History | résumé F13 page (`availability`, `returned`, `gitCanonical`) | pas d’items complets |
+| Health | `SIMULATED` | pas de probe prod |
+| Migration | `NOT_STARTED` | pas de schéma |
+| Tests | `t-a7-operational-readiness.test.ts` | fondation seulement |
+| Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |
+
+**Anti-claim :** fondation ≠ API F11.2 complète · ≠ cutover ready · ≠ IAM.
+
+---
+
+## 2. Finalité cible F11.2
+
+Exigence décidée (pack F03/F11/F13) : **API minimale de lecture / readiness sans UI admin dédiée**, avant tout cutover futur.
+
+Finalité :
+
+- exposer un **état opérationnel observé** (MethodMode, hold, blockers, deps legacy, migration, health, historique borné) ;
+- séparer **observed / decision / recommendation / authorization** ;
+- rester **strictement read-only** ;
+- permettre audit / support / gouvernance **sans** mutation ni console admin.
+
+Consommateurs candidats (non autorisés ici) :
+
+| Consommateur | Besoin | Statut |
+|--------------|--------|--------|
+| Services serveur internes OA/D1 | snapshot local | partiel (appel direct) |
+| Opérateur / Morris (via surface future) | lecture gouvernée | **non exposé** |
+| CI / probes | non-régression RO | tests unitaires existants |
+| UI admin | — | **hors F11.2** (F11.3 non retenue) |
+| Clients HTTP externes | — | **non sélectionné** |
+
+---
+
+## 3. Contrat fonctionnel cible (minimal)
+
+### 3.1 Données exposées (cible)
+
+| Domaine | Fondation actuelle | Cible minimale complète | Gap |
+|---------|--------------------|-------------------------|-----|
+| Identity projet | `projectId` optionnel injecté | résolution projet bornée documentée | qui fournit le projet ? |
+| MethodMode | mode + state si projet fourni | lecture mode/state stable + version/optimistic si pertinent | pas de binding session OA |
+| Hold | actif + reasons codes | hold + provenance + evaluatedAt + codes stables | OK partiel |
+| Blockers | codes hold | mapping explicite B5/R1/R-M01/HARD ≠ fermeture | OK partiel |
+| Legacy deps | METHOD_MODES + canonical paths | inventaire versionné / digest éventuel | digest non exposé |
+| Migration | NOT_STARTED | enum élargi + détail non-bavard | pas de pipeline |
+| Health | SIMULATED | états observés documentés (local/unknown/degraded) | pas de probe |
+| History summary | availability/returned | lien stable vers page F13 + fraîcheur | pas de cursor/page id |
+| Decision layer | BLOCK/ALLOW + authz strings | inchangé fonctionnellement | OK |
+| Audit lecture | absente | événement borné (qui/quand/quoi résumé) | **MISSING** |
+
+### 3.2 Contrat read-only (normatif)
+
+- `mutable=false` · `adminUi=false` · `writeCommands=false` obligatoires ;
+- aucune commande write via cette surface ;
+- aucune mutation MethodMode / history / DB via F11.2 ;
+- résultat immuable (freeze / copie) ;
+- erreurs non bavardes (pas de secrets, pas de chemins utilisateur absolus).
+
+### 3.3 Erreurs / disponibilité / fraîcheur
+
+| Aspect | Fondation | Cible | Gap |
+|--------|-----------|-------|-----|
+| Erreurs | throw D1Error côté hold transitions (pas F11 query) | codes readiness explicites (INVALID_INPUT, UNAVAILABLE, FORBIDDEN_IF_IAM) | codes non formalisés |
+| Disponibilité | toujours local-sync | documenter dégradé si provider history/hold unavailable | partiel (history provider injectable) |
+| Fraîcheur | `evaluatedAt` ISO Z | TTL/freshness note (sans SLA prod) | pas de TTL |
+| Observabilité | logs D1 hold séparés | event `readiness_queried` borné | **MISSING** |
+
+---
+
+## 4. IAM / sécurité / RGPD
+
+| Frontière | Statut | Note |
+|-----------|--------|------|
+| Authentification | **NOT SELECTED** | pas d’identité d’acteur sur la query actuelle |
+| Autorisation | hold ≠ IAM | `authorization` = décision hold, **pas** ACL produit |
+| IAM production | **NOT SELECTED** | décision Morris future obligatoire avant exposition HTTP |
+| Path-policy | distincte IAM | inchangée par F11.2 |
+| Données | métadonnées gouvernance / ids projet | pas de PII documentée ; minimisation requise |
+| RGPD production | **NOT VALIDATED** | si HTTP/UI futurs → DPIA/cycle distinct |
+
+**Règle N3 :** ne **pas** sélectionner de mécanisme IAM dans ce document.
+
+---
+
+## 5. Gaps / dépendances / blockers
+
+| ID | Type | Description | Bloque | Décision Morris ? |
+|----|------|-------------|--------|-------------------|
+| G-F11-01 | gap fonc. | pas d’API HTTP / port serveur formalisé | « API finale » | oui (lot futur) |
+| G-F11-02 | gap fonc. | pas d’audit de lecture | conformité F11 normative | oui/non selon lot |
+| G-F11-03 | gap tech. | health SIMULATED seulement | readiness prod claim | oui (probe) |
+| G-F11-04 | dépendance | F13 summary → fondation F13.4 | cohérence historique | N3 (ce pack) |
+| G-F11-05 | dépendance | hold MethodMode | décision transition | déjà lot 1 |
+| G-F11-06 | blocker | IAM NOT SELECTED | exposition multi-acteur | **oui avant HTTP** |
+| G-F11-07 | blocker | B5/HARD OPEN | delivery/cutover | ne pas fermer |
+| G-F11-08 | gap | pas de binding session OA (P06) | cutover | hors N3 impl |
+
+---
+
+## 6. Critères de complétion F11.2 (documentaires)
+
+F11.2 peut être déclaré **complete** seulement si **toutes** les conditions suivantes sont vraies sous preuves Git + gate Morris d’implémentation/validation :
+
+1. contrat read-only normatif respecté runtime ;
+2. surface d’accès **décidée et validée** (interne-only **ou** HTTP — choix Morris) ;
+3. champs cibles §3.1 exposés avec provenance ;
+4. audit de lecture minimal présent **ou** explicitement différé par décision Morris ;
+5. health non-simulé **ou** statut UNKNOWN/DEGRADED honnête documenté pour le niveau revendiqué ;
+6. tests de non-régression RO + frontières import ;
+7. IAM : soit surface server-only mono-opérateur documentée, soit IAM sélectionné+validé ;
+8. **aucune** claim delivery/cutover.
+
+**Statut actuel :** `NOT COMPLETE`.
+
+---
+
+## 7. Non-objectifs
+
+- UI admin (F11.3) ;
+- mutations / write commands ;
+- sélection IAM/persistence ;
+- fermeture B5/R1/R-M01/HARD ;
+- product-complete API OA (A3.2) ;
+- delivery / cutover.
+
+---
+
+## 8. Stop conditions
+
+- besoin d’écrire via readiness ;
+- besoin d’UI admin pour « compléter » F11.2 ;
+- sélection IAM forcée sans gate ;
+- claim « F11.2 complete » sans preuves §6 ;
+- modification OPS1 / `method/**` pour readiness.
+
+---
+
+## 9. Questions d’arbitrage Morris
+
+1. Surface d’accès cible : **server-internal only** vs **HTTP read** (sans UI) ?
+2. Audit de lecture : **requis pour complete** vs **différé** ?
+3. Health : accepter **UNKNOWN/SIMULATED** comme complete documentaire, ou exiger probe ?
+4. Faut-il un lot technique F11-only avant tout lot HTTP ?
+
+Toutes réponses = futurs GO · `RECOMMENDED — NOT DECIDED` hors N3.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
new file mode 100644
index 0000000..51ab16f
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
@@ -0,0 +1,135 @@
+# 13 — F13.4 completion surface & gaps
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `13-f13-4-completion-surface-and-gaps.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
+| **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
+| **Base Git** | `770605bc…` |
+| **Implémentation** | **interdite** |
+| **Statut F13.4** | fondation lot 1 intégrée · **vue runtime finale non complète** |
+
+---
+
+## 1. État actuel (main)
+
+| Élément | Preuve | Limite |
+|---------|--------|--------|
+| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
+| Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
+| Providers | documentary · unavailable | pas de Git live fetch |
+| Page | frozen · `gitCanonical=true` · `mutable=false` | `BOUNDED_LOT_1` |
+| Seed | 3 entrées packs/PR refs | ≠ archive complète |
+| Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
+| Tests | `t-a7-bounded-history.test.ts` | limites/immutabilité |
+| Persist store | **aucun** | Git canonique |
+
+**Anti-claim :** fondation ≠ vue runtime finale · ≠ ACL · ≠ source concurrente à Git.
+
+---
+
+## 2. Git canonique (normatif)
+
+- Git / packs documentaires = **vérité historique** ;
+- la vue runtime est une **projection bornée** ;
+- interdiction de mutations historiques ;
+- path-policy ≠ IAM ;
+- isolation OPS1 (W1-D04) reste **préalable** à retrait legacy — **non réalisée** ici.
+
+---
+
+## 3. Cible fonctionnelle minimale — vue runtime bornée
+
+| Aspect | Fondation | Cible minimale complète | Gap |
+|--------|-----------|-------------------------|-----|
+| Rôle | métadonnées packs | support/audit/traçabilité RO | pas de parcours opérateur |
+| Périmètre | seed documentary fixe | politique d’inclusion/exclusion documentée (catégories) | politique incomplete |
+| Profondeur | max 50 | max borné + justification + overflow behavior | OK partiel |
+| Pagination | slice prefix only | cursor/offset **ou** explicite « prefix-only » décidé | **MISSING** si multi-page requis |
+| Provenance | git-ref / documentary-pack / synthetic | provenance obligatoire + vérifiabilité | OK partiel |
+| Fraîcheur | `evaluatedAt` | relation à tip Git / pack SHA | pas de tie to HEAD |
+| Cohérence Git | claim `gitCanonical` | preuve que items ⊆ refs Git/packs | seed manuel |
+| Actif vs historique | status enum | frontière sémantique documentée + tests | OK partiel |
+| États dégradés | NOT_AVAILABLE | matrice dégradée + messages | OK partiel |
+| Audit accès | absent | log borné lectures | **MISSING** |
+| Rétention | UNKNOWN | durée conservation (cycle distinct si besoin) | **UNKNOWN** |
+
+---
+
+## 4. Sécurité / observabilité / rétention
+
+| Frontière | Statut |
+|-----------|--------|
+| IAM / ACL | **NOT SELECTED** — lectures actuelles = in-process |
+| AuthN/AuthZ acteur | non modélisées |
+| Contenu sensible | métadonnées packs/PR seulement ; pas de blobs method |
+| Observabilité | pas d’event dédié |
+| Rétention | **UNKNOWN** — à cadrer sous gate distinct si conservation ≠ Git |
+| RGPD | **NOT VALIDATED** — minimisation : pas de PII dans seed actuel |
+
+**Ne pas sélectionner** store durable / cache produit / IAM dans N3.
+
+---
+
+## 5. Gaps / dépendances / blockers
+
+| ID | Type | Description | Bloque | Décision ? |
+|----|------|-------------|--------|------------|
+| G-F13-01 | gap fonc. | seed ≠ archive Git live | vue « runtime » riche | oui (stratégie lecture) |
+| G-F13-02 | gap tech. | pas de pagination multi-page | volumes > 50 | oui si besoin |
+| G-F13-03 | gap | pas d’audit accès | norme F13 | oui/non |
+| G-F13-04 | dépendance | F11 consomme summary | cohérence couple | docs N3 |
+| G-F13-05 | dépendance | OPS1 isolation (P10) | retrait legacy | N2/autre |
+| G-F13-06 | blocker | persistence NOT SELECTED | si cache/index requis | **oui avant store** |
+| G-F13-07 | blocker | IAM NOT SELECTED | si exposition multi-acteur | **oui avant HTTP** |
+| G-F13-08 | unknown | durée conservation | conformité | cycle rétention |
+
+---
+
+## 6. Critères de complétion F13.4
+
+Déclarable **complete** seulement si :
+
+1. Git reste canonique (preuve + tests anti-mutation) ;
+2. politique d’inclusion des items documentée et testée ;
+3. profondeur/pagination décidées et implémentées sous gate ;
+4. états dégradés couverts ;
+5. cohérence provenance ↔ Git/packs démontrable ;
+6. audit accès présent **ou** différé explicitement ;
+7. rétention clarifiée **ou** « Git-only retention » décidé ;
+8. IAM/persistence : soit in-process mono-opérateur documenté, soit sélectionnés+validés ;
+9. **aucune** mutation historique ; **aucune** claim cutover.
+
+**Statut actuel :** `NOT COMPLETE`.
+
+---
+
+## 7. Non-objectifs
+
+- store concurrent à Git ;
+- migration DB historique ;
+- ACL production sans gate ;
+- exposition de contenu `method/**` brut ;
+- UI archive ;
+- retrait OPS1/legacy.
+
+---
+
+## 8. Stop conditions
+
+- tentative de faire de la vue runtime une source canonique ;
+- écriture / « repair » d’historique ;
+- sélection persistence/IAM sans GO ;
+- lecture arbitraire filesystem hors politique ;
+- claim complete sans §6.
+
+---
+
+## 9. Questions d’arbitrage Morris
+
+1. Lecture Git live (bornée) vs seed documentary enrichi vs index dérivé **non persistant** ?
+2. Pagination multi-page requise pour complete ?
+3. Audit accès requis maintenant ?
+4. Rétention = Git only (décider) vs cycle rétention séparé ?
+5. Couplage F11 summary : stable page-id / evaluatedAt contract ?
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
new file mode 100644
index 0000000..8412422
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
@@ -0,0 +1,176 @@
+# 14 — F11/F13 dependencies & runtime boundaries
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Gate N3** | DECIDED — cadrage only |
+| **IAM / Persistence** | **NOT SELECTED** (préservés) |
+
+---
+
+## 1. Cartographie composants (existant)
+
+```
+[Git / packs docs] ──canonique──► (humain / CI)
+        ▲
+        │ provenance refs (seed)
+        │
+[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
+        │                                    │
+        │                                    ├── readMethodModeHold
+        │                                    ├── decideMethodModeTransition
+        │                                    └── optional D1Project input
+        ▼
+   (no durable store)
+
+[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
+[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
+```
+
+Ownership :
+
+| Composant | Owner logique | Module |
+|-----------|---------------|--------|
+| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
+| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
+| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
+| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |
+
+---
+
+## 2. Frontières Git / runtime
+
+| Règle | Statut |
+|-------|--------|
+| Git = vérité historique | **obligatoire** |
+| Runtime view = projection | **obligatoire** |
+| Pas de write historique | **obligatoire** |
+| Seed documentary ≠ full Git walk | **état actuel** |
+| Cache / index durable | **interdit sans GO persistence** |
+| Concurrent writers | **hors scope** |
+
+---
+
+## 3. Frontières IAM / identité
+
+| Couche | État | Interdit N3 |
+|--------|------|-------------|
+| AuthN | non présent sur F11/F13 | sélection produit IAM |
+| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
+| Acteur | non typé sur query | inventer roles |
+| Path-policy | distincte | fusionner path-policy↔IAM |
+| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |
+
+Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.
+
+---
+
+## 4. Frontières persistance
+
+| Élément | Autorisé maintenant | Interdit sans GO |
+|---------|---------------------|------------------|
+| Lecture Git/packs | oui (conceptuel) | — |
+| Seed in-memory | oui (lot 1) | — |
+| SQLite/DB history store | non | **oui interdit** |
+| Migration schéma | non | **oui interdit** |
+| Cache process local non durable | candidat futur (doc) | durable/shared store |
+
+---
+
+## 5. API interne / HTTP / UI
+
+| Surface | État | Décision requise |
+|---------|------|------------------|
+| API interne TS | **existante** (fonctions) | formaliser version contrat |
+| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
+| HTTP route | absente | GO surface access |
+| UI admin | absente (F11.2) | F11.3 non retenue |
+| Server actions write | hors F11/F13 | gate write distinct |
+
+---
+
+## 6. Flux de lecture (cible documentaire)
+
+1. Consommateur autorisé (à décider) appelle readiness **read**.
+2. F11 lit hold + (optionnel) projet + F13 summary.
+3. F13 lit provider borné ; Git reste référence.
+4. Snapshot frozen renvoyé ; audit éventuel (futur).
+5. Aucun write ; erreurs fail-closed.
+
+Source de vérité par donnée :
+
+| Donnée | Source |
+|--------|--------|
+| Historique canonique | Git |
+| Projection items | provider F13 (dérivé) |
+| Hold | évaluation gouvernance (défaut code) |
+| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |
+
+Données temporaires autorisées : copies frozen, timestamps d’évaluation.
+Interdites : files d’attente durables, outbox history, dual-write.
+
+---
+
+## 7. Observabilité / audit / erreurs
+
+| Besoin | Actuel | Cible cadrée |
+|--------|--------|--------------|
+| Logs hold block/allow | oui (codes) | conserver borné |
+| Logs readiness query | non | event optionnel futur |
+| Logs history read | non | event optionnel futur |
+| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
+| Métriques | non | compteurs lectures (futur) sans PII |
+
+---
+
+## 8. Dépendances
+
+### Obligatoires pour complétion documentaire N3 (ce pack)
+
+- décisions F11.2 / F13.4 déjà adoptées ;
+- lot 1 sur main ;
+- hold ACTIVE governance ;
+- Git canonique.
+
+### Différables
+
+- IAM product ;
+- persistence ;
+- HTTP ;
+- live Git walk ;
+- OPS1 isolation runtime evidence (N2) ;
+- P08/P09 replacement (N1) ;
+- rollback drills (N4).
+
+### Anti-couplages
+
+- F11 ↛ OPS1 imports ;
+- F13 ↛ D1 writes ;
+- F13 ↛ `method/**` content dump ;
+- readiness ↛ auto-clear blockers ;
+- test-only ↛ barrels runtime.
+
+---
+
+## 9. Risques de dette
+
+| Risque | Mitigation documentaire |
+|--------|-------------------------|
+| Traiter lot 1 comme API finale | critères complete §12/§13 |
+| Ajouter HTTP sans IAM | stop condition |
+| Index durable « pour perf » | persistence NOT SELECTED |
+| Seed manuel diverge de Git | exiger preuve provenance |
+| F11/F13 circular writes | F11→F13 read only (déjà) |
+
+---
+
+## 10. Matrice capacité (synthèse)
+
+| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
+|----------|----------|-----|------------|---------|--------|--------|----------|
+| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
+| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
+| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
+| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
+| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
new file mode 100644
index 0000000..a247a38
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
@@ -0,0 +1,98 @@
+# 15 — F11/F13 completion options & bounded lots
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **N3** | cadrage terminé localement · **pas d’implémentation** |
+| **Recommandations** | `RECOMMENDED — NOT DECIDED` |
+
+---
+
+## 1. Options distinctes (futurs lots)
+
+### L-F11A — Formaliser contrat interne F11 (sans HTTP)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
+| Valeur | réduit ambiguïté « API » sans surface réseau |
+| Risques | sous-estimer besoin HTTP plus tard |
+| Dette | doc + tests contrat |
+| Rollback | revert Git |
+| Tests | schema/contract tests |
+| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |
+
+### L-F11B — Surface HTTP read-only F11 (sans UI)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Exposer readiness via HTTP GET borné |
+| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
+| Risques | exposition prématurée |
+| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |
+
+### L-F13A — Politique + pagination F13 (in-process)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
+| Dépendances | pas de store |
+| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |
+
+### L-F13B — Lecteur Git borné (refs only)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
+| Risques | perf, chemins, secrets |
+| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |
+
+### L-F11F13 — Lot couplé minimal (interne only)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
+| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
+| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |
+
+### L-DEFER — Différer
+
+Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.
+
+---
+
+## 2. Lot minimal recommandé (non décidé)
+
+**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.
+
+Justification challenge :
+
+| Question | Réponse |
+|----------|---------|
+| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
+| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
+| Dette ? | code borné + tests |
+| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
+| Repo-first ? | s’appuie sur modules main |
+| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |
+
+**Statut :** `RECOMMENDED — NOT DECIDED`
+
+**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.
+
+---
+
+## 3. Lots complémentaires (hors N3 exécution)
+
+- N2 evidence OPS1 (indépendant) ;
+- N1 P08/P09 framing/impl sous gates séparés ;
+- N4 rollback framing ;
+- cycle rétention F13 si conservation ≠ Git.
+
+---
+
+## 4. Impacts delivery/cutover
+
+Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
+Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
new file mode 100644
index 0000000..f7608be
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
@@ -0,0 +1,70 @@
+# 16 — Morris decision pack — F11.2 / F13.4 completion
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `16-morris-f11-f13-completion-decision-pack.md` |
+| **Date cadrage N3** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Date décisions D1–D8** | 2026-07-28 22:58:09 CEST (+0200) |
+| **N3** | `DECIDED — ADOPTED BY MORRIS` (cadrage) |
+| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` |
+| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
+| **Push / PR projet** | **non autorisés** par ce gate |
+
+> Note d’intégrité : dans le handoff N3 (`62904dbd…` / blob `d11efa52…`), D1–D8 figuraient comme **recommandations** (`RECOMMENDED — NOT DECIDED`). Elles sont enregistrées ici comme **décisions Morris adoptées** avant l’implémentation L-F11F13.
+
+---
+
+## 1. Décisions D1–D8 (adoptées)
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| **D1** | F11 complete = **internal-only** (pas HTTP, pas UI) | `DECIDED — ADOPTED BY MORRIS` |
+| **D2** | Audit lecture F11/F13 = **différé explicitement** | `DECIDED — ADOPTED BY MORRIS` |
+| **D3** | F13 data = **seed enrichi + liaison explicite au SHA Git** | `DECIDED — ADOPTED BY MORRIS` |
+| **D4** | Pagination F13 = **prefix-only formalisée** | `DECIDED — ADOPTED BY MORRIS` |
+| **D5** | Rétention F13 = **Git-only** | `DECIDED — ADOPTED BY MORRIS` |
+| **D6** | Lot technique = **L-F11F13 interne** | `DECIDED — ADOPTED BY MORRIS` |
+| **D7** | IAM = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
+| **D8** | Persistence = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
+
+### Gate consommé
+
+`GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER`
+
+**Autorité :** implémentation **locale** uniquement · pas de push/PR/merge/delivery/cutover.
+
+---
+
+## 2. Impacts / exclusions
+
+| Inclus | Exclu |
+|--------|-------|
+| Contrat F11 interne | HTTP / UI / IAM product |
+| Seed F13 + SHA | Store / migration / cache durable |
+| Prefix-only ≤50 | Multi-page complexe / scan non borné |
+| Audit différé documenté | Journal d’audit persistant |
+| Rétention Git-only | Rétention applicative |
+
+B5 / R1 / R-M01 / HARD restent **OPEN** / **OPEN HARD**.
+
+---
+
+## 3. Recommandation historique N3 (archive)
+
+Avant adoption Morris, le pack N3 recommandait D1=internal-only, D6=L-F11F13, D7/D8=NOT SELECTED, etc. (`RECOMMENDED — NOT DECIDED`).
+
+Cette section ne constitue **pas** l’état courant des décisions.
+
+---
+
+## 4. Gate candidat suivant (non consommé)
+
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED`
+
+---
+
+## 5. Verdict document
+
+`D1–D8 DECIDED — L-F11F13 IMPLEMENTATION AUTHORIZED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index e73f40b..0ae46d8 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -2,56 +2,78 @@

 | Champ | Valeur |
 |-------|--------|
-| **Mise à jour post-merge** | 2026-07-28 22:16:12 CEST (+0200) |
-| **Gate post-merge (consommé)** | `GO POST-MERGE T-A7 FIRST BOUNDED DEVELOPMENT LOT — CONFIRM MAIN INTEGRATION — CORRECT STALE LOCAL-ONLY README STATUS IF NEEDED — FRAME NEXT BLOCKER-REDUCTION CYCLE — NO DELIVERY OR CUTOVER` |
+| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
+| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
+| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
+| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
+| **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
 | **O3** | `DECIDED — ADOPTED BY MORRIS` |
 | **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
-| **Lot 1** | `INTEGRATED ON MAIN` |
-| **PR** | [#287](https://github.com/mcleland147/sfia-workspace/pull/287) — `feat(sfia-studio): integrate T-A7 bounded readiness foundations` |
-| **Merge commit** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
-| **Parents** | `2a3c59c46c105bae458d1a7329079c5f591da421` + `b6a19335f5116940175f5986492e3693722563bc` |
-| **Tree** | `712720a1a2371f98c137a6c8b29299ac556299c7` |
-| **Branche source** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` **préservée** @ `b6a19335…` |
-| **Checks PR** | run `30393629328` — Detect / Build / Required Gate **SUCCESS** |
-| **Checks post-merge** | run `30393814783` — Detect / Build / Required Gate **SUCCESS** |
+| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
 | **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
-| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** · 0 SATISFIED remplacement OA |
-| **F11.2** | fondation intégrée · API finale **non complète** |
-| **F13.4** | fondation intégrée · vue runtime finale **non complète** |
-| **MethodMode hold** | intégré · défaut ACTIVE |
+| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
+| **F11.2** | fondation intégrée · **API finale non complète** · gaps cadrés (docs 12–16) |
+| **F13.4** | fondation intégrée · **vue runtime finale non complète** · gaps cadrés (docs 12–16) |
+| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **HARD** | `OPEN HARD` |
 | **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
-| **Persistence / IAM / RGPD** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
 | **Delivery / cutover** | `NOT AUTHORIZED` |
+| **Push / PR projet (branche docs courante)** | **aucun** |
+
+## Index du pack
+
+| Doc | Sujet |
+|-----|-------|
+| `01`–`09` | framing readiness / O2 |
+| `10` | lot 1 borné (O3) |
+| `11` | post-merge + options N1–N5 |
+| `12` | F11.2 completion surface & gaps |
+| `13` | F13.4 completion surface & gaps |
+| `14` | dépendances & frontières runtime |
+| `15` | options de lots bornés futurs |
+| `16` | decision pack Morris F11/F13 |

 ## Lot 1 intégré sur `main`

 1. MethodMode hold (défaut actif ; override test-only hors barrel)
-2. F11.2 readiness read-only interne (`mutable/adminUi/writeCommands=false`)
-3. F13.4 historique RO borné (Git canonique ; max 50)
+2. F11.2 readiness read-only interne
+3. F13.4 historique RO borné (Git canonique)
+
+## Cadrage N3 (local)

-Détails : `10-t-a7-first-bounded-development-lot.md` · clôture : `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`
+Documents `12`–`16` : surfaces finales, gaps, IAM/persistence **non sélectionnés**, frontières runtime, options L-F11*/L-F13*, bulletin Morris.
+
+**N3 ≠ implémentation ≠ F11/F13 complete.**

 ## Anti-claims

 - lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
+- N3 décidé ≠ lot technique autorisé
+- fondations F11/F13 ≠ surfaces finales
+- recommandation lots ≠ décision Morris
 - hold ≠ blockers fermés
-- fondations F11/F13 ≠ API / vue finales
-- post-merge confirmé ≠ autorisation de nouveau lot
-- recommandation N1–N5 ≠ décision Morris

 ## Gate candidat suivant

-`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`
-
-**Statut :** `NOT CONSUMED`
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

-Gates précis par option : voir document `11`.
+**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS` (après implémentation locale L-F11F13)

 ## Verdict courant

-`T-A7 LOT 1 INTEGRATED ON MAIN — PR #287 MERGED — POST-MERGE CHECKS PASSED — SOURCE BRANCH PRESERVED — O3 DECIDED — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — F03.3 PARTIALLY SATISFIED — B5 R1 R-M01 AND HARD REMAIN OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED`
+`T-A7 N3 FRAMING RECORDED — D1–D8 DECIDED — L-F11F13 IMPLEMENTATION AUTHORIZED LOCALLY — F11.2 AND F13.4 REMAIN NOT CUTOVER-COMPLETE — IAM AND PERSISTENCE NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`
+
+---
+
+## Historique post-merge (lot 1)
+
+> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.
+
+Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.
+
+Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris (ce cycle).

 ---


```

---

## Diff complet — commit implémentation

```diff
commit b4b1defef72832aa5f09d8c55a41d03114e19d94
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Tue Jul 28 23:24:24 2026 +0200

    feat(sfia-studio): complete internal F11 F13 bounded contracts

    Harden F11.2 as INTERNAL_ONLY with honest READY/NOT_READY/UNKNOWN
    states, and enrich F13.4 seed with explicit Git SHA, PREFIX_ONLY
    pagination, deferred audit, and GIT_ONLY retention.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
index 91683b4..9baaa66 100644
--- a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
@@ -9,10 +9,13 @@ import {
   setMethodModeHoldForTests,
 } from "@/lib/d1/methodModeHold.test-only";
 import {
+  createDocumentaryBoundedHistoryProvider,
   createUnavailableBoundedHistoryProvider,
 } from "@/lib/platform/t-a7/boundedHistoryRead";
+import fs from "node:fs";
+import path from "node:path";

-describe("T-A7 lot1 F11.2 operational readiness", () => {
+describe("T-A7 L-F11F13 F11.2 operational readiness (internal-only)", () => {
   beforeEach(() => {
     resetMethodModeHoldForTests();
   });
@@ -21,12 +24,16 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     resetMethodModeHoldForTests();
   });

-  it("returns a frozen read-only snapshot with hold and blockers", () => {
+  it("returns a frozen INTERNAL_ONLY read-only snapshot with hold and blockers", () => {
     const snap = queryOperationalReadiness();
-    expect(snap.schemaVersion).toBe("t-a7-f11.2-lot1");
+    expect(snap.schemaVersion).toBe("t-a7-f11.2-l-f11f13");
+    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
     expect(snap.mutable).toBe(false);
     expect(snap.adminUi).toBe(false);
     expect(snap.writeCommands).toBe(false);
+    expect(snap.iam).toBe("NOT_SELECTED");
+    expect(snap.persistence).toBe("NOT_SELECTED");
+    expect(snap.audit.status).toBe("DEFERRED_EXPLICITLY");
     expect(snap.observed.hold.active).toBe(true);
     expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
     expect(snap.decision).toBe("BLOCK");
@@ -34,6 +41,11 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     expect(snap.observed.migration.status).toBe("NOT_STARTED");
     expect(snap.observed.health.status).toBe("SIMULATED");
     expect(snap.observed.history.gitCanonical).toBe(true);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
+    expect(snap.observed.history.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
+    expect(snap.readinessStatus).toBe("NOT_READY");
+    expect(snap.readinessReasons).toContain("HOLD_ACTIVE");
+    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
     assertOperationalReadinessReadOnly(snap);
     expect(() => {
       // @ts-expect-error intentional mutation attempt
@@ -41,26 +53,43 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     }).toThrow();
   });

+  it("never treats incomplete/simulated health as READY", () => {
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    const snap = queryOperationalReadiness();
+    expect(snap.decision).toBe("ALLOW");
+    expect(snap.readinessStatus).toBe("UNKNOWN");
+    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
+    expect(snap.readinessStatus).not.toBe("READY");
+  });
+
   it("serializes stably for core contract fields", () => {
     const snap = queryOperationalReadiness();
     const json = JSON.stringify({
       schemaVersion: snap.schemaVersion,
+      accessSurface: snap.accessSurface,
+      readinessStatus: snap.readinessStatus,
       mutable: snap.mutable,
       writeCommands: snap.writeCommands,
       adminUi: snap.adminUi,
+      iam: snap.iam,
+      persistence: snap.persistence,
+      audit: snap.audit.status,
       decision: snap.decision,
       blockers: snap.observed.openBlockers,
     });
-    expect(json).toContain("t-a7-f11.2-lot1");
+    expect(json).toContain("t-a7-f11.2-l-f11f13");
+    expect(json).toContain("INTERNAL_ONLY");
     expect(json).toContain("B5_OPEN");
+    expect(json).toContain("DEFERRED_EXPLICITLY");
   });

-  it("exposes UNKNOWN/partial history when provider unavailable", () => {
+  it("exposes NOT_AVAILABLE history without inventing READY", () => {
     const snap = queryOperationalReadiness({
       historyProvider: createUnavailableBoundedHistoryProvider(),
     });
     expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
     expect(snap.observed.history.returned).toBe(0);
+    expect(snap.readinessStatus).not.toBe("READY");
   });

   it("reflects inactive hold without recommending keep", () => {
@@ -69,4 +98,24 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     expect(snap.decision).toBe("ALLOW");
     expect(snap.recommendation).toBe("NO_RECOMMENDATION");
   });
+
+  it("integrates PREFIX_ONLY history summary", () => {
+    const snap = queryOperationalReadiness({
+      historyProvider: createDocumentaryBoundedHistoryProvider(),
+      historyLimit: 2,
+    });
+    expect(snap.observed.history.returned).toBe(2);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
+    expect(snap.completeness).toBe("BOUNDED_L_F11F13");
+  });
+
+  it("has no HTTP readiness route under app/", () => {
+    const appRouter = path.resolve(__dirname, "../../app");
+    if (!fs.existsSync(appRouter)) return;
+    const hasReadinessRoute = fs
+      .readdirSync(appRouter, { recursive: true })
+      .map(String)
+      .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
+    expect(hasReadinessRoute).toBe(false);
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
index 3ec0b60..a28895f 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
@@ -2,7 +2,9 @@
 import { describe, expect, it } from "vitest";
 import {
   BOUNDED_HISTORY_MAX_ITEMS,
+  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
   assertBoundedHistoryImmutable,
+  assertGitCanonicalSha,
   createDocumentaryBoundedHistoryProvider,
   createUnavailableBoundedHistoryProvider,
   BoundedHistoryMutationError,
@@ -10,31 +12,92 @@ import {
 import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
 import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

-describe("T-A7 lot1 F13.4 bounded history foundation", () => {
-  it("reads a bounded immutable documentary page with Git canonical", () => {
+const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+
+describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
+  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
     const provider = createDocumentaryBoundedHistoryProvider();
     const page = provider.read({ limit: 2 });
     expect(page.gitCanonical).toBe(true);
+    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
     expect(page.mutable).toBe(false);
     expect(page.availability).toBe("PARTIAL");
     expect(page.returned).toBe(2);
     expect(page.truncated).toBe(true);
     expect(page.limit).toBe(2);
+    expect(page.paginationMode).toBe("PREFIX_ONLY");
+    expect(page.pagination.mode).toBe("PREFIX_ONLY");
+    expect(page.pagination.nextCursor).toBeNull();
+    expect(page.pagination.hasMore).toBe(true);
+    expect(page.retention).toBe("GIT_ONLY");
+    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
+    expect(page.completeness).toBe("BOUNDED_L_F11F13");
     assertBoundedHistoryImmutable(page);
   });

-  it("enforces max limit", () => {
+  it("enforces PREFIX_ONLY max prefix length", () => {
     const provider = createDocumentaryBoundedHistoryProvider();
     const page = provider.read({ limit: 10_000 });
     expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
     expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
   });

+  it("accepts prefixLength alias and keeps stable order", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    const a = provider.read({ prefixLength: 3 });
+    const b = provider.read({ limit: 3 });
+    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
+    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
+    expect(a.pagination.nextCursor).toBeNull();
+  });
+
+  it("covers volume bounds 0/1/max/max+1 semantics", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
+    const one = provider.read({ limit: 1 });
+    expect(one.returned).toBe(1);
+    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
+    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
+    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(over.returned).toBe(max.returned);
+  });
+
+  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
+    const provider = createDocumentaryBoundedHistoryProvider({
+      gitCanonicalSha: ALT_SHA,
+    });
+    const page = provider.read({ limit: 1 });
+    expect(page.gitCanonicalSha).toBe(ALT_SHA);
+    expect(() =>
+      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
+    ).toThrow(/40-character/);
+    expect(() =>
+      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
+    ).toThrow(/40-character/);
+    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
+  });
+
+  it("enriches seed with lot-1 main tip reference", () => {
+    const page = createDocumentaryBoundedHistoryProvider().read({
+      limit: BOUNDED_HISTORY_MAX_ITEMS,
+    });
+    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
+    expect(tip).toBeDefined();
+    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
+    expect(tip?.metadata.pr).toBe("287");
+  });
+
   it("supports unavailable provider without claiming full archive", () => {
     const page = createUnavailableBoundedHistoryProvider().read();
     expect(page.availability).toBe("NOT_AVAILABLE");
     expect(page.items).toEqual([]);
     expect(page.gitCanonical).toBe(true);
+    expect(page.retention).toBe("GIT_ONLY");
+    expect(page.paginationMode).toBe("PREFIX_ONLY");
+    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
   });

   it("refuses mutation semantics via contract helper", () => {
@@ -47,11 +110,23 @@ describe("T-A7 lot1 F13.4 bounded history foundation", () => {
   it("integrates with F11.2 readiness without circular product writes", () => {
     resetMethodModeHoldForTests();
     const snap = queryOperationalReadiness({
-      historyProvider: createDocumentaryBoundedHistoryProvider(),
+      historyProvider: createDocumentaryBoundedHistoryProvider({
+        gitCanonicalSha: ALT_SHA,
+      }),
       historyLimit: 1,
     });
     expect(snap.observed.history.returned).toBe(1);
     expect(snap.observed.history.availability).toBe("PARTIAL");
+    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
     expect(snap.writeCommands).toBe(false);
+    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
+  });
+
+  it("preserves back-compat seed-array factory signature", () => {
+    const page = createDocumentaryBoundedHistoryProvider([]).read({ limit: 5 });
+    expect(page.availability).toBe("EMPTY");
+    expect(page.returned).toBe(0);
+    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
   });
 });
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 73e45f6..5539f49 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -25,5 +25,7 @@ export {
 export type {
   OperationalReadinessSnapshot,
   OperationalReadinessQueryInput,
+  OperationalReadinessStatus,
+  OperationalReadinessAccessSurface,
 } from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
diff --git a/projects/sfia-studio/app/lib/d1/operationalReadiness.ts b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
index 1ae8dea..50a7656 100644
--- a/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
+++ b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
@@ -1,6 +1,7 @@
 /**
- * T-A7 Lot 1 — F11.2 minimal operational readiness (read-only, no UI, no HTTP required).
+ * T-A7 L-F11F13 — F11.2 operational readiness (internal-only, read-only).
  * Assembles observed state; never mutates MethodMode or history.
+ * No HTTP, UI, IAM, or persistence.
  */

 import {
@@ -24,6 +25,15 @@ import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonical

 export type ReadinessUnknown = "UNKNOWN";

+/** D1 — access surface is server/internal only (no HTTP). */
+export type OperationalReadinessAccessSurface = "INTERNAL_ONLY";
+
+/**
+ * Aggregate readiness for internal consumers.
+ * Absence of signal must not become READY.
+ */
+export type OperationalReadinessStatus = "READY" | "NOT_READY" | "UNKNOWN";
+
 export interface OperationalReadinessLegacyDeps {
   readonly methodModesAuthorized: readonly MethodMode[];
   readonly canonicalCorePaths: readonly string[];
@@ -45,14 +55,27 @@ export interface OperationalReadinessHistorySummary {
   readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
   readonly returned: number;
   readonly gitCanonical: true;
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly gitCanonicalSha: string | null;
+  readonly paginationMode: "PREFIX_ONLY" | ReadinessUnknown;
+  readonly completeness: "BOUNDED_L_F11F13";
+}
+
+export interface OperationalReadinessAudit {
+  readonly status: "DEFERRED_EXPLICITLY";
+  readonly detail: string;
 }

 export interface OperationalReadinessSnapshot {
-  readonly schemaVersion: "t-a7-f11.2-lot1";
+  readonly schemaVersion: "t-a7-f11.2-l-f11f13";
+  readonly accessSurface: OperationalReadinessAccessSurface;
+  readonly readinessStatus: OperationalReadinessStatus;
+  readonly readinessReasons: readonly string[];
   readonly evaluatedAt: string;
   readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly completeness: "BOUNDED_L_F11F13";
+  readonly iam: "NOT_SELECTED";
+  readonly persistence: "NOT_SELECTED";
+  readonly audit: OperationalReadinessAudit;
   readonly observed: {
     readonly projectId: string | null;
     readonly methodMode: MethodMode | null;
@@ -83,10 +106,48 @@ function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistory
     availability: page.availability,
     returned: page.returned,
     gitCanonical: true,
-    completeness: "BOUNDED_LOT_1",
+    gitCanonicalSha: page.gitCanonicalSha,
+    paginationMode: page.paginationMode,
+    completeness: "BOUNDED_L_F11F13",
   };
 }

+function deriveReadinessStatus(args: {
+  holdActive: boolean;
+  healthStatus: OperationalReadinessHealth["status"];
+  historyAvailability: BoundedHistoryAvailability | ReadinessUnknown;
+}): { status: OperationalReadinessStatus; reasons: string[] } {
+  const reasons: string[] = [];
+
+  if (args.holdActive) {
+    reasons.push("HOLD_ACTIVE");
+  }
+  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
+    reasons.push("HEALTH_NOT_OBSERVED");
+  }
+  if (args.historyAvailability === "NOT_AVAILABLE") {
+    reasons.push("HISTORY_NOT_AVAILABLE");
+  } else if (args.historyAvailability === "UNKNOWN") {
+    reasons.push("HISTORY_UNKNOWN");
+  }
+
+  // Hold blocks transitions → NOT_READY (never READY while hold active).
+  if (args.holdActive) {
+    return { status: "NOT_READY", reasons };
+  }
+
+  // Without an observed health probe, never claim READY.
+  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
+    return { status: "UNKNOWN", reasons };
+  }
+
+  if (args.historyAvailability === "NOT_AVAILABLE") {
+    return { status: "UNKNOWN", reasons };
+  }
+
+  return { status: "READY", reasons: reasons.length ? reasons : ["OBSERVED_OK"] };
+}
+
 export function queryOperationalReadiness(
   input: OperationalReadinessQueryInput = {},
 ): OperationalReadinessSnapshot {
@@ -101,11 +162,33 @@ export function queryOperationalReadiness(
     p.startsWith("method/"),
   );

+  const health: OperationalReadinessHealth = {
+    status: "SIMULATED",
+    detail:
+      "No production readiness probe; simulated/local observation only — not evidence of healthy runtime.",
+  };
+
+  const derived = deriveReadinessStatus({
+    holdActive: hold.active,
+    healthStatus: health.status,
+    historyAvailability: historyPage.availability,
+  });
+
   const snapshot: OperationalReadinessSnapshot = {
-    schemaVersion: "t-a7-f11.2-lot1",
+    schemaVersion: "t-a7-f11.2-l-f11f13",
+    accessSurface: "INTERNAL_ONLY",
+    readinessStatus: derived.status,
+    readinessReasons: derived.reasons,
     evaluatedAt: new Date().toISOString(),
     timezoneNote: "timestamps are ISO-8601 UTC (Z)",
-    completeness: "BOUNDED_LOT_1",
+    completeness: "BOUNDED_L_F11F13",
+    iam: "NOT_SELECTED",
+    persistence: "NOT_SELECTED",
+    audit: {
+      status: "DEFERRED_EXPLICITLY",
+      detail:
+        "D2 — read audit journal deferred; no persistent audit store in this lot.",
+    },
     observed: {
       projectId: project?.projectId ?? null,
       methodMode: project?.methodMode ?? null,
@@ -119,12 +202,9 @@ export function queryOperationalReadiness(
       },
       migration: {
         status: "NOT_STARTED",
-        detail: "No migration authorized in T-A7 lot 1.",
-      },
-      health: {
-        status: "SIMULATED",
-        detail: "No production readiness probe; simulated/local observation only.",
+        detail: "No migration authorized in T-A7 L-F11F13.",
       },
+      health,
       history: summarizeHistory(historyPage),
       openBlockers: hold.reasons.map((r) => r.code),
     },
@@ -138,6 +218,8 @@ export function queryOperationalReadiness(

   return Object.freeze({
     ...snapshot,
+    readinessReasons: Object.freeze([...snapshot.readinessReasons]),
+    audit: Object.freeze({ ...snapshot.audit }),
     observed: Object.freeze({
       ...snapshot.observed,
       hold: Object.freeze({
@@ -168,8 +250,11 @@ export function assertOperationalReadinessReadOnly(
   if (
     snapshot.mutable !== false ||
     snapshot.adminUi !== false ||
-    snapshot.writeCommands !== false
+    snapshot.writeCommands !== false ||
+    snapshot.accessSurface !== "INTERNAL_ONLY"
   ) {
-    throw new Error("Operational readiness snapshot must remain read-only.");
+    throw new Error(
+      "Operational readiness snapshot must remain read-only and INTERNAL_ONLY.",
+    );
   }
 }
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
index 2be059a..24ad909 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
@@ -1,10 +1,16 @@
 /**
- * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
- * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
+ * T-A7 L-F11F13 — F13.4 bounded read-only history foundation.
+ * Git remains canonical. Seed enriched + explicit gitCanonicalSha.
+ * Pagination: PREFIX_ONLY. Retention: GIT_ONLY. Audit: deferred.
+ * No migration, durable store, UI, HTTP, ACL/IAM.
  */

 export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

+/** Pinned tip for documentary seed (main after PR #287). Caller may override. */
+export const DEFAULT_BOUNDED_HISTORY_GIT_SHA =
+  "770605bcfa4cc3e403ee2c4615c1a115ccd38458" as const;
+
 export type BoundedHistoryAvailability =
   | "PARTIAL"
   | "NOT_AVAILABLE"
@@ -12,6 +18,10 @@ export type BoundedHistoryAvailability =

 export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

+export type BoundedHistoryPaginationMode = "PREFIX_ONLY";
+
+export type BoundedHistoryRetention = "GIT_ONLY";
+
 export interface BoundedHistoryEntry {
   readonly id: string;
   readonly category: string;
@@ -24,6 +34,20 @@ export interface BoundedHistoryEntry {
   readonly metadata: Readonly<Record<string, string>>;
 }

+export interface BoundedHistoryPagination {
+  readonly mode: BoundedHistoryPaginationMode;
+  /** Prefix length requested (clamped). */
+  readonly prefixLength: number;
+  /** Always null — D4 forbids multi-page cursors in this lot. */
+  readonly nextCursor: null;
+  readonly hasMore: boolean;
+}
+
+export interface BoundedHistoryAudit {
+  readonly status: "DEFERRED_EXPLICITLY";
+  readonly detail: string;
+}
+
 export interface BoundedHistoryPage {
   readonly availability: BoundedHistoryAvailability;
   readonly items: readonly BoundedHistoryEntry[];
@@ -31,14 +55,31 @@ export interface BoundedHistoryPage {
   readonly returned: number;
   readonly truncated: boolean;
   readonly gitCanonical: true;
+  /** Full-length Git object id tying this page to a canonical tip. */
+  readonly gitCanonicalSha: string;
+  readonly pagination: BoundedHistoryPagination;
+  readonly paginationMode: BoundedHistoryPaginationMode;
+  readonly retention: BoundedHistoryRetention;
+  readonly audit: BoundedHistoryAudit;
   readonly mutable: false;
   readonly evaluatedAt: string;
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly completeness: "BOUNDED_L_F11F13";
   readonly note: string;
 }

 export interface BoundedHistoryReadRequest {
+  /** Prefix length (PREFIX_ONLY). Alias of historical `limit`. */
   readonly limit?: number;
+  readonly prefixLength?: number;
+}
+
+export interface DocumentaryBoundedHistoryProviderOptions {
+  readonly seed?: readonly BoundedHistoryEntry[];
+  /**
+   * Canonical Git SHA for this page. Injected by caller / default pinned tip.
+   * No arbitrary git shell in product runtime.
+   */
+  readonly gitCanonicalSha?: string;
 }

 export class BoundedHistoryMutationError extends Error {
@@ -53,6 +94,18 @@ export interface BoundedHistoryProvider {
   readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
 }

+const GIT_SHA_FULL_RE = /^[0-9a-f]{40}$/i;
+
+/** Validate a full Git object id (40 hex). Fail closed on invalid input. */
+export function assertGitCanonicalSha(sha: string): string {
+  if (typeof sha !== "string" || !GIT_SHA_FULL_RE.test(sha.trim())) {
+    throw new RangeError(
+      "gitCanonicalSha must be a 40-character hexadecimal Git object id",
+    );
+  }
+  return sha.trim().toLowerCase();
+}
+
 function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
   return Object.freeze({
     ...entry,
@@ -65,10 +118,22 @@ function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
   return Object.freeze({
     ...page,
     items: Object.freeze(page.items.map(freezeEntry)),
+    pagination: Object.freeze({ ...page.pagination }),
+    audit: Object.freeze({ ...page.audit }),
   });
 }

-/** Documentary/Git references known from T-A7 packs — not a full archive. */
+function resolvePrefixLength(request: BoundedHistoryReadRequest): number {
+  const raw =
+    request.prefixLength !== undefined ? request.prefixLength : request.limit;
+  const value = raw ?? BOUNDED_HISTORY_MAX_ITEMS;
+  if (!Number.isFinite(value) || value <= 0) {
+    throw new RangeError("prefixLength/limit must be a positive number");
+  }
+  return Math.min(Math.floor(value), BOUNDED_HISTORY_MAX_ITEMS);
+}
+
+/** Documentary/Git references — enriched seed, ordered stably (prefix-only). */
 const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
   freezeEntry({
     id: "hist-t-a7-f03-f11-f13",
@@ -99,67 +164,163 @@ const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
     },
   }),
   freezeEntry({
-    id: "hist-t-a7-technical-readiness",
+    id: "hist-t-a7-technical-readiness-frame",
     category: "readiness-pack",
-    status: "ACTIVE_REFERENCE",
+    status: "HISTORICAL",
     occurredAt: "2026-07-28T18:40:10.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563",
+    },
+    metadata: {
+      pack: "t-a7-technical-readiness-framing",
+      commit: "docs-frame",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-feat",
+    category: "readiness-foundation",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T19:20:08.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "47e26fdc851b82588aa5225aca84307543147160",
+    },
+    metadata: {
+      commit: "feat-bounded-foundations",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-harden",
+    category: "readiness-foundation",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T19:37:59.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "b6a19335f5116940175f5986492e3693722563bc",
+    },
+    metadata: {
+      commit: "fix-harden-override",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-merged-main",
+    category: "integration",
+    status: "ACTIVE_REFERENCE",
+    occurredAt: "2026-07-28T19:52:20.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "770605bcfa4cc3e403ee2c4615c1a115ccd38458",
+    },
+    metadata: {
+      pr: "287",
+      note: "lot-1-integrated-on-main",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-technical-readiness-pack-path",
+    category: "documentary-pack",
+    status: "ACTIVE_REFERENCE",
+    occurredAt: "2026-07-28T22:45:18.000Z",
     gitProvenance: {
       kind: "documentary-pack",
       ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
     },
     metadata: {
-      lot: "bounded-technical-preparation-o2",
+      lot: "n3-completion-framing",
     },
   }),
 ]);

+function buildPage(args: {
+  availability: BoundedHistoryAvailability;
+  items: readonly BoundedHistoryEntry[];
+  prefixLength: number;
+  truncated: boolean;
+  gitCanonicalSha: string;
+  note: string;
+}): BoundedHistoryPage {
+  return freezePage({
+    availability: args.availability,
+    items: args.items,
+    limit: args.prefixLength,
+    returned: args.items.length,
+    truncated: args.truncated,
+    gitCanonical: true,
+    gitCanonicalSha: args.gitCanonicalSha,
+    pagination: {
+      mode: "PREFIX_ONLY",
+      prefixLength: args.prefixLength,
+      nextCursor: null,
+      hasMore: args.truncated,
+    },
+    paginationMode: "PREFIX_ONLY",
+    retention: "GIT_ONLY",
+    audit: {
+      status: "DEFERRED_EXPLICITLY",
+      detail: "D2 — read audit deferred; no persistent access journal.",
+    },
+    mutable: false,
+    evaluatedAt: new Date().toISOString(),
+    completeness: "BOUNDED_L_F11F13",
+    note: args.note,
+  });
+}
+
 export function createDocumentaryBoundedHistoryProvider(
-  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
+  options: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[] = {},
 ): BoundedHistoryProvider {
-  const frozenSeed = Object.freeze(seed.map(freezeEntry));
+  // Back-compat: previous signature accepted seed array as first arg.
+  const opts: DocumentaryBoundedHistoryProviderOptions = Array.isArray(options)
+    ? { seed: options }
+    : options;
+
+  const frozenSeed = Object.freeze(
+    (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
+  );
+  const gitCanonicalSha = assertGitCanonicalSha(
+    opts.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
+  );
+
   return {
     read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
-      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
-      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
-        throw new RangeError("limit must be a positive number");
-      }
-      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
-      const slice = frozenSeed.slice(0, limit);
-      return freezePage({
+      const prefixLength = resolvePrefixLength(request);
+      const slice = frozenSeed.slice(0, prefixLength);
+      return buildPage({
         availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
         items: slice,
-        limit,
-        returned: slice.length,
+        prefixLength,
         truncated: frozenSeed.length > slice.length,
-        gitCanonical: true,
-        mutable: false,
-        evaluatedAt: new Date().toISOString(),
-        completeness: "BOUNDED_LOT_1",
-        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
+        gitCanonicalSha,
+        note:
+          "Git remains canonical (D5 GIT_ONLY). PREFIX_ONLY pagination (D4). " +
+          "Page tied to injected/pinned gitCanonicalSha — not a live git shell.",
       });
     },
   };
 }

-export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
+export function createUnavailableBoundedHistoryProvider(
+  options: Pick<DocumentaryBoundedHistoryProviderOptions, "gitCanonicalSha"> = {},
+): BoundedHistoryProvider {
+  const gitCanonicalSha = assertGitCanonicalSha(
+    options.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
+  );
   return {
     read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
-      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
-      const limit = Math.min(
-        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
-        BOUNDED_HISTORY_MAX_ITEMS,
-      );
-      return freezePage({
+      let prefixLength = 1;
+      try {
+        prefixLength = resolvePrefixLength(request);
+      } catch {
+        prefixLength = 1;
+      }
+      return buildPage({
         availability: "NOT_AVAILABLE",
         items: [],
-        limit,
-        returned: 0,
+        prefixLength,
         truncated: false,
-        gitCanonical: true,
-        mutable: false,
-        evaluatedAt: new Date().toISOString(),
-        completeness: "BOUNDED_LOT_1",
-        note: "Bounded history provider unavailable; Git remains canonical.",
+        gitCanonicalSha,
+        note: "Bounded history provider unavailable; Git remains canonical (GIT_ONLY).",
       });
     },
   };
@@ -167,11 +328,17 @@ export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvide

 /** Refuse mutation attempts against a frozen page (contract guard). */
 export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
-  if (page.mutable !== false || page.gitCanonical !== true) {
+  if (
+    page.mutable !== false ||
+    page.gitCanonical !== true ||
+    page.retention !== "GIT_ONLY" ||
+    page.paginationMode !== "PREFIX_ONLY"
+  ) {
     throw new BoundedHistoryMutationError(
-      "Bounded history page must declare mutable=false and gitCanonical=true.",
+      "Bounded history page must declare mutable=false, gitCanonical=true, GIT_ONLY, PREFIX_ONLY.",
     );
   }
+  assertGitCanonicalSha(page.gitCanonicalSha);
   try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     (page as any).items = [];
@@ -180,7 +347,6 @@ export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
     );
   } catch (error) {
     if (error instanceof BoundedHistoryMutationError) throw error;
-    // TypeError from frozen object — expected
   }
   try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
index 9adee4d..38bf0d3 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
@@ -7,8 +7,8 @@
 | **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
 | **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
 | **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
-| **Implémentation** | **interdite** dans ce cycle |
-| **Statut F11.2** | fondation lot 1 intégrée · **API finale non complète** |
+| **Implémentation** | **interdite** dans le cycle N3 · **réalisée localement** en L-F11F13 (voir `17`) |
+| **Statut F11.2** | contrat INTERNAL_ONLY L-F11F13 · **≠ cutover-complete** |

 ---

@@ -18,16 +18,19 @@
 |---------|--------|--------|
 | Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
 | Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
-| Snapshot | `schemaVersion: t-a7-f11.2-lot1` · frozen | `completeness: BOUNDED_LOT_1` |
+| Snapshot | `schemaVersion: t-a7-f11.2-l-f11f13` · frozen | `completeness: BOUNDED_L_F11F13` · `accessSurface: INTERNAL_ONLY` |
+| Readiness | `READY` \| `NOT_READY` \| `UNKNOWN` | absence signal ≠ READY |
 | Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
 | Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
-| History | résumé F13 page (`availability`, `returned`, `gitCanonical`) | pas d’items complets |
+| History | résumé F13 (`availability`, `returned`, `gitCanonical`, `gitCanonicalSha`, `PREFIX_ONLY`) | pas d’items complets |
 | Health | `SIMULATED` | pas de probe prod |
+| Audit | `DEFERRED_EXPLICITLY` | D2 |
+| IAM / Persistence | `NOT_SELECTED` | D7 / D8 |
 | Migration | `NOT_STARTED` | pas de schéma |
-| Tests | `t-a7-operational-readiness.test.ts` | fondation seulement |
+| Tests | `t-a7-operational-readiness.test.ts` | L-F11F13 |
 | Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |

-**Anti-claim :** fondation ≠ API F11.2 complète · ≠ cutover ready · ≠ IAM.
+**Anti-claim :** contrat interne L-F11F13 ≠ API HTTP · ≠ cutover ready · ≠ IAM.

 ---

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
index 51ab16f..73f9ed9 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
@@ -7,8 +7,8 @@
 | **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
 | **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
 | **Base Git** | `770605bc…` |
-| **Implémentation** | **interdite** |
-| **Statut F13.4** | fondation lot 1 intégrée · **vue runtime finale non complète** |
+| **Implémentation** | **interdite** en N3 · **réalisée localement** en L-F11F13 (voir `17`) |
+| **Statut F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY · **≠ cutover-complete** |

 ---

@@ -18,14 +18,17 @@
 |---------|--------|--------|
 | Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
 | Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
-| Providers | documentary · unavailable | pas de Git live fetch |
-| Page | frozen · `gitCanonical=true` · `mutable=false` | `BOUNDED_LOT_1` |
-| Seed | 3 entrées packs/PR refs | ≠ archive complète |
+| Providers | documentary · unavailable | pas de Git live shell |
+| Page | frozen · `gitCanonical=true` · `gitCanonicalSha` · `mutable=false` | `BOUNDED_L_F11F13` |
+| Pagination | `PREFIX_ONLY` · `nextCursor=null` | D4 |
+| Retention | `GIT_ONLY` | D5 |
+| Audit | `DEFERRED_EXPLICITLY` | D2 |
+| Seed | enrichi (incl. merge #287 / `770605bc…`) | ≠ archive complète |
 | Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
-| Tests | `t-a7-bounded-history.test.ts` | limites/immutabilité |
+| Tests | `t-a7-bounded-history.test.ts` | SHA / prefix / volume |
 | Persist store | **aucun** | Git canonique |

-**Anti-claim :** fondation ≠ vue runtime finale · ≠ ACL · ≠ source concurrente à Git.
+**Anti-claim :** seed+SHA L-F11F13 ≠ vue runtime cutover · ≠ ACL · ≠ store concurrent à Git.

 ---

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
index f7608be..3824a64 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
@@ -65,6 +65,12 @@ Cette section ne constitue **pas** l’état courant des décisions.

 ---

-## 5. Verdict document
+## 5. Résultats L-F11F13

-`D1–D8 DECIDED — L-F11F13 IMPLEMENTATION AUTHORIZED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`
+Voir `17-f11-f13-internal-completion-lot-results.md` pour l’implémentation locale, tests et anti-claims.
+
+---
+
+## 6. Verdict document
+
+`D1–D8 DECIDED — L-F11F13 IMPLEMENTED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
new file mode 100644
index 0000000..f85431c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
@@ -0,0 +1,196 @@
+# 17 — F11 / F13 internal completion lot results (L-F11F13)
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `17-f11-f13-internal-completion-lot-results.md` |
+| **Date/heure/fuseau** | 2026-07-28 23:22:34 CEST (+0200) |
+| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
+| **Branche delivery** | `delivery/sfia-studio-t-a7-f11-f13-internal-completion` |
+| **Branche documentaire parent** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
+| **Base `origin/main`** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| **Commit documentaire** | `dcdc90a0779859ec5d34a91021bab65122447ee5` |
+| **Gate consommé** | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — … — NO HTTP UI DELIVERY OR CUTOVER` |
+| **Push / PR projet** | **aucun** |
+
+---
+
+## 1. Gate et décisions D1–D8
+
+| ID | Décision | Application locale |
+|----|----------|--------------------|
+| **D1** | F11 = internal-only | `accessSurface: "INTERNAL_ONLY"` · pas HTTP/UI |
+| **D2** | Audit lecture différé | `audit.status: "DEFERRED_EXPLICITLY"` (F11 + F13) |
+| **D3** | Seed enrichi + SHA Git | seed 7 entrées · `gitCanonicalSha` obligatoire |
+| **D4** | Pagination prefix-only | `paginationMode: "PREFIX_ONLY"` · `nextCursor: null` |
+| **D5** | Rétention Git-only | `retention: "GIT_ONLY"` · pas de store |
+| **D6** | Lot L-F11F13 | ce document / branche delivery |
+| **D7** | IAM NOT SELECTED | champ snapshot + anti-claims |
+| **D8** | Persistence NOT SELECTED | champ snapshot + anti-claims |
+
+---
+
+## 2. Implémentation F11.2
+
+| Élément | Résultat |
+|---------|----------|
+| Module | `app/lib/d1/operationalReadiness.ts` |
+| Schéma | `t-a7-f11.2-l-f11f13` |
+| Surface | `INTERNAL_ONLY` |
+| États | `READY` \| `NOT_READY` \| `UNKNOWN` |
+| Règles | hold actif → `NOT_READY` ; health `SIMULATED`/`UNKNOWN` → jamais `READY` ; absence history ≠ READY |
+| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` |
+| Provenance | hold, blockers, history summary (SHA + PREFIX_ONLY), legacy deps |
+| Audit | `DEFERRED_EXPLICITLY` |
+| IAM / Persistence | `NOT_SELECTED` / `NOT_SELECTED` |
+| HTTP / UI | **absents** |
+
+---
+
+## 3. Implémentation F13.4
+
+| Élément | Résultat |
+|---------|----------|
+| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` |
+| Seed | enrichi (PR #285/#286, lot1 feat/harden, merge #287 `770605bc…`, pack path) |
+| SHA | `gitCanonicalSha` validé (`^[0-9a-f]{40}$`) · défaut pin `770605bc…` · injection caller |
+| Shell Git runtime | **aucun** |
+| Pagination | `PREFIX_ONLY` · `prefixLength`/`limit` · max 50 · ordre stable · pas de multi-page |
+| Rétention | `GIT_ONLY` |
+| Audit | `DEFERRED_EXPLICITLY` |
+| Store / cache / DB | **aucun** |
+| Completeness | `BOUNDED_L_F11F13` |
+
+---
+
+## 4. Pagination prefix-only
+
+- `limit` et `prefixLength` sont des alias du même préfixe déterministe.
+- Clamp à `BOUNDED_HISTORY_MAX_ITEMS` (50).
+- `nextCursor` toujours `null` (D4 — pas de multi-page).
+- `hasMore` = `truncated` après slice préfixe.
+- Tests bornes : 0 (reject), 1, max, max+1.
+
+---
+
+## 5. SHA Git
+
+- Source : injection bornée `DocumentaryBoundedHistoryProviderOptions.gitCanonicalSha` ou pin `DEFAULT_BOUNDED_HISTORY_GIT_SHA` (= tip main lot 1).
+- Validation fail-closed via `assertGitCanonicalSha`.
+- Responsabilité caller documentée dans la note de page : pas de `git` shell produit.
+- F11 résume `observed.history.gitCanonicalSha`.
+
+---
+
+## 6. Audit différé / rétention Git-only
+
+- Aucun journal d’audit persistant créé.
+- Aucune rétention hors Git / packs documentaires.
+- RGPD production : **NOT VALIDATED** (inchangé).
+
+---
+
+## 7. Fichiers produit / tests / docs
+
+### Modifiés
+
+- `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`
+- `projects/sfia-studio/app/lib/d1/index.ts`
+- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
+- `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`
+- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
+- `…/t-a7-technical-readiness-framing/README.md`
+- `…/12-…` · `13-…` (statut post-lot)
+- `…/16-…` (référence résultats)
+
+### Créés
+
+- `…/17-f11-f13-internal-completion-lot-results.md` (ce document)
+
+---
+
+## 8. Tests
+
+Commande :
+
+```bash
+./node_modules/.bin/vitest run \
+  __tests__/d1/t-a7-operational-readiness.test.ts \
+  __tests__/platform/t-a7-bounded-history.test.ts \
+  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
+  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
+  __tests__/d1/t-a7-method-mode-hold.test.ts \
+  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
+  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
+  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
+  __tests__/platform/t-a7-local-volume.probe.test.ts
+```
+
+Résultat : **9 files / 44 tests passed** (2026-07-28 23:22:29 CEST).
+
+Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalide, prefix-only, volume, seed enrichi, boundaries hold, absence HTTP route.
+
+---
+
+## 9. Non-régressions / absences vérifiées
+
+- aucune route HTTP readiness/cutover ;
+- aucune UI ;
+- aucune IAM / session ;
+- aucune persistance / migration ;
+- aucune write command F11/F13 ;
+- MethodMode hold **non modifié** fonctionnellement ;
+- OPS1 **non modifié** fonctionnellement ;
+- aucune dépendance npm ajoutée ;
+- aucun push / PR / merge projet.
+
+---
+
+## 10. Limites
+
+- Health reste `SIMULATED` → readiness ne peut pas être `READY` en conditions normales actuelles.
+- SHA pin / injection ≠ lecture live de `git rev-parse` en runtime produit.
+- Seed documentaire ≠ archive Git complète.
+- Reasons hold `F11_2_INCOMPLETE` / `F13_4_INCOMPLETE` **conservées** (pas de fermeture blockers via hold).
+- Audit / RUN prod / RGPD prod restent ouverts / non validés.
+
+---
+
+## 11. Blockers restant ouverts
+
+| Item | Statut |
+|------|--------|
+| B5 | `OPEN` |
+| R1 | `OPEN` |
+| R-M01 | `OPEN` |
+| HARD | `OPEN HARD` |
+| T-A6 COMPLETE | **NOT DECLARED** |
+| Option A | **NOT COMPLETE** |
+| Delivery / cutover | **NOT AUTHORIZED** |
+| IAM | `NOT SELECTED` |
+| Persistence | `NOT SELECTED` |
+| P08 / P09 | `MISSING` |
+
+---
+
+## 12. Anti-claims
+
+- L-F11F13 local ≠ F11/F13 « cutover-complete » ≠ delivery ready.
+- Contrat interne ≠ API HTTP publique.
+- Seed + SHA pin ≠ store historique concurrent à Git.
+- Tests verts ≠ RUN READY / RGPD VALIDATED.
+- Commit local ≠ autorisation push/PR.
+- Handoff L3 ≠ push branche projet.
+
+---
+
+## 13. Gate candidat suivant (non consommé)
+
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS**
+
+---
+
+## 14. Verdict
+
+`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index 0ae46d8..24e0f9c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -4,17 +4,18 @@
 |-------|--------|
 | **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
 | **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
+| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
 | **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
 | **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
-| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
+| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
 | **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
 | **O3** | `DECIDED — ADOPTED BY MORRIS` |
 | **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
 | **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
 | **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
 | **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
-| **F11.2** | fondation intégrée · **API finale non complète** · gaps cadrés (docs 12–16) |
-| **F13.4** | fondation intégrée · **vue runtime finale non complète** · gaps cadrés (docs 12–16) |
+| **F11.2** | contrat **INTERNAL_ONLY** durci (L-F11F13) · pas HTTP/UI · **≠ cutover-complete** |
+| **F13.4** | seed enrichi + SHA Git · PREFIX_ONLY · GIT_ONLY · **≠ archive complète / cutover** |
 | **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **HARD** | `OPEN HARD` |
@@ -34,6 +35,7 @@
 | `14` | dépendances & frontières runtime |
 | `15` | options de lots bornés futurs |
 | `16` | decision pack Morris F11/F13 |
+| `17` | résultats lot L-F11F13 (implémentation locale) |

 ## Lot 1 intégré sur `main`

@@ -41,29 +43,30 @@
 2. F11.2 readiness read-only interne
 3. F13.4 historique RO borné (Git canonique)

-## Cadrage N3 (local)
+## Cadrage N3 + lot L-F11F13 (local)

-Documents `12`–`16` : surfaces finales, gaps, IAM/persistence **non sélectionnés**, frontières runtime, options L-F11*/L-F13*, bulletin Morris.
+Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’implémentation locale.

-**N3 ≠ implémentation ≠ F11/F13 complete.**
+**N3 ≠ cutover. L-F11F13 local ≠ push/PR/delivery.**

 ## Anti-claims

 - lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
-- N3 décidé ≠ lot technique autorisé
-- fondations F11/F13 ≠ surfaces finales
-- recommandation lots ≠ décision Morris
+- L-F11F13 local ≠ HTTP public ≠ IAM ≠ persistence
+- contrat interne F11 ≠ API réseau
+- seed F13 + SHA ≠ store concurrent à Git
 - hold ≠ blockers fermés
+- tests verts ≠ RUN READY / RGPD VALIDATED

 ## Gate candidat suivant

 `GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

-**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS` (après implémentation locale L-F11F13)
+**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS`

 ## Verdict courant

-`T-A7 N3 FRAMING RECORDED — D1–D8 DECIDED — L-F11F13 IMPLEMENTATION AUTHORIZED LOCALLY — F11.2 AND F13.4 REMAIN NOT CUTOVER-COMPLETE — IAM AND PERSISTENCE NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`
+`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — TESTS PASSED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

 ---


```

---

## INSTRUCTION CHATGPT — REVIEW HANDOFF

Lire obligatoirement depuis Git :
- branche : sfia/review-handoff
- fichier : sfia-review-handoff/latest-chatgpt-review.md

Ne pas analyser uniquement depuis le résumé Cursor.
