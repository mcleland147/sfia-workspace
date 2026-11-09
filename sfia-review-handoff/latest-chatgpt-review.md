# SFIA Review Pack FULL — ML4 Product Local Freeze

**Date/heure (Europe/Paris) :** 2026-11-09 ~01:40 CET
**Cycle :** DELIV-2026-11-09-ML4-PRODUCT-LOCAL-FREEZE
**Type :** CYCLE 8 — DELIVERY / IMPLÉMENTATION · CRITICAL · EVOL / FINALISATION
**Version :** NO RELEASE / `0.0.0-dev`
**GO Morris :** Corriger R7/R8 · finaliser cumul · validations · **commit Product LOCAL** · handoff L3
**NON autorisé :** push/PR/merge Product · promotion · mutation GitHub REAL · merge PR #18 · clôture ML4
**Handoff parent :** `ef7edb7bab01d43251de65d25be42bfd1e0cc248`
**Verdict :** `ML4 PRODUCT — LOCAL CANDIDATE COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED`

---

## 1. Git Truth — initial → final

| Champ | Avant | Après |
| --- | --- | --- |
| Worktree | `…/sfia-workspace-next-ml4-git-collaboration` | idem |
| Branche | `feat/next-git-collaboration-20261108` | idem |
| HEAD | `c658f59023d44a0e22448c7ee034e3c1dda292a2` | **`79b100527a9c43fb789ca62b7f87b50a8bc2adf1`** |
| origin/main | `c658f590…` | **inchangé** `c658f590…` |
| Parent commit | — | `c658f590…` |
| Tree SHA | — | **`5b43538452d5bb425a1ab7e150ca3b74ea66eb77`** |
| Push Product | — | **aucun** |

```text
Git Review Index
- base : origin/main @ c658f59023d44a0e22448c7ee034e3c1dda292a2
- Product branch : feat/next-git-collaboration-20261108
- Product commit LOCAL : 79b100527a9c43fb789ca62b7f87b50a8bc2adf1
- tree : 5b43538452d5bb425a1ab7e150ca3b74ea66eb77
- files in commit : 87
- diff : 14869 insertions(+), 32 deletions(-)
- Handoff parent : ef7edb7b…
- review pack : full
- Product push : NOT AUTHORIZED / NOT DONE
```

---

## 2. Sources

SFIA v2.6 routing + template · CKC 02 (candidate, non-autorité) · SEF/roadmap/ENV-01 · décision ML4/ML5 2026-11-07 (NOT MERGED) · contrats construction · handoff `ef7edb7b` · code local gelé.

---

## 3. Inventaire staging

### Inclus (87 fichiers — commit)

Staging **explicite** path-by-path (jamais `git add -A`).

- construction : delivery-history, matrice, specification
- web : schema, migrations 008–012, domains execution/integrations/proofs, git-read-tools, APIs integrations+git, UI settings/integrations + panels, shell/rail/chrome/page, token-crypto, vitest/e2e scripts, tests unit/integration/e2e ML4, package-lock (−1)

### Exclus (justifiés)

| Chemin | Motif |
| --- | --- |
| `.tmp-sfia-review/**` | artefacts revue (tracked dirty review pack exclu) |
| `projects/.tmp-sfia-review/**` | preuves OAuth/REAL temporaires |
| `web/scripts/github-app-installation-read-qualify.ts` | outil DEV qualification ponctuel — hors Product maintenu |
| `.env.local` / PEM / secrets | jamais |

Post-commit status restant : `M .tmp-sfia-review/chatgpt-review.md` · `?? projects/.tmp-sfia-review/` · `?? …/github-app-installation-read-qualify.ts`

---

## 4. R7 — UI SCRIPTED / REAL (avant → après)

**Avant :** badge/bouton/banner hardcodés SCRIPTED ; « Effet Git observé (SCRIPTED) » même si fournisseur REAL.

**Après :**

- Helper `publication-effect-labels.ts` : `effectProviderLabel`, `publicationStatusBanner`, labels dispatch/merge
- Badge `data-testid="badge-effect-provider"` = REAL | SCRIPTED
- Banner COMPLETED = `(REAL)` ou `(SCRIPTED)` ; AMBIGUOUS/FAILED/UNKNOWN non promus SUCCESS
- Champ « Fournisseur d'effet » distinct OAuth CONNECTED
- `IntegrationsPanel` note : orthogonalité OAuth ↔ provider (plus « hors périmètre GO »)

**Tests :** `publication-effect-labels.test.ts` (5) · e2e badge mis à jour

---

## 5. R8 — Documentation AS-IMPLEMENTED

- Matrice : **statut courant** en tête (niveaux Fake/Real séparés) ; §6 et §18 marqués **HISTORIQUE**
- Spec technique : bandeau AS-IMPLEMENTED LOCAL CANDIDATE + avertissement snapshots bas de doc
- delivery-history : entrée gel local

Séparation explicite : OAuth READ REAL PROVEN · documentary REAL bounded PROVEN · DET consolidation · USER E2E NOT RUN · Merge NOT PROVEN · Product NOT INTEGRATED

---

## 6. Diffs utiles R7 (extraits)

```ts
// publication-effect-labels.ts
export function publicationStatusBanner(input: {
  status: string | undefined | null;
  effectProviderMode: string | undefined | null;
}): string {
  // COMPLETED → `Effet Git observé (${REAL|SCRIPTED})`
  // AMBIGUOUS → pas de succès inventé
}
```

Fichiers R7 créés/modifiés : `publication-effect-labels.ts`, `PublicationInspectionPanel.tsx`, `IntegrationsPanel.tsx`, tests unit+e2e.

---

## 7. Blast radius gel

Macro-lot ML4 complet (D3/D4/D6/D7/D8/D9 + UI + migrations + tests + docs). Corrections R7/R8 limitées à présentation + docs. Pas de pivot architecture.

---

## 8. D4–D9 hérités (références)

| Domaine | Preuve héritée | Limite |
| --- | --- | --- |
| D4 | digest `11906026…` = Git | USER E2E NOT RUN |
| D6 | AND source/objectRef ; effect_conditions nouveaux | R1 legacy fallback |
| D7 | claim/idempotence/branche hash | R3 TOCTOU |
| D8 | PR #18 OPEN · commit `790a5315…` | ≠ merge |
| D9 | user-token · documentary · merge blocked | R2 permissions ∩ |

---

## 9. Migrations

008–012 inclus dans le commit. Compat 001–007. Aucune migration nouvelle ce gel.

---

## 10. Validations (ce cycle)

| Suite | Résultat |
| --- | --- |
| tsc | PASS |
| unit | **183 PASS** (33 files) |
| integration | **211 PASS** |
| build | PASS |
| Playwright | **13/13 PASS** |
| git diff --cached --check | PASS |
| Secret scan index | fixtures PEM unitaires uniquement (pas de secret réel) |
| Mutation GitHub REAL | **NOT RUN** |

---

## 11. Commit local — contrôle

| Champ | Valeur |
| --- | --- |
| Message | `feat(studio-next): add governed Git collaboration and document publishing` |
| SHA | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Tree | `5b43538452d5bb425a1ab7e150ca3b74ea66eb77` |
| Parent | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Fichiers | **87** |
| Stat | 14869 insertions, 32 deletions |
| origin/main | inchangé |
| Push | **NON** |

Ce SHA = candidat source LOCAL immuable. **≠** baseline main · **≠** build RECETTE · **≠** release.

---

## 12. Fake/Real Qualification

```text
Fake / Real Qualification
- OAuth READ REAL : PROVEN (antérieur)
- Commit+PR documentary REAL : PROVEN (antérieur, #18 OPEN)
- Consolidation DET : PROVEN
- R7/R8 + gel local : DETERMINISTIC + LOCAL COMMIT
- USER E2E : NOT RUN — MORRIS RECETTE
- Merge REAL : NOT PROVEN
- Product push/PR/main : NOT DONE
- claims interdits : PRODUCT PUSHED ; PR OPEN ; RECETTE ; ML4 CLOSED ; ADOPTED
```

---

## 13. Réserves R1–R8

| ID | Statut gel |
| --- | --- |
| R1 | CARRIED |
| R2 | CARRIED |
| R3 | CARRIED |
| R4 | CARRIED |
| R5 | CARRIED |
| R6 | NON ISSUE |
| R7 | **CORRIGÉ** (ce commit) |
| R8 | **CORRIGÉ** (ce commit) |

Aucun BLOCKER non traité.

---

## 14. ENV-01

DEV gel OK · E2E isolé · RECETTE non servie · STABLE N/A · `0.0.0-dev` · pas de tag · SHA local = candidat pour prochaine étape (GO push / RECETTE séparés)

---

## 15. Préparation RECETTE Morris

Après Critical Review + GO push + mise à disposition : build figé depuis `79b10052…` ; USER E2E par Morris ; critères D4/D6/dispatch/PR/reload.

---

## 16. Gates restants

1. Critical Review ChatGPT
2. GO **push** Product (distinct)
3. Mise à disposition RECETTE
4. USER E2E Morris
5. PR readiness / merge Product (séparés)
6. Merge PR sandbox #18 (séparé)

---

## 17. Review pack coverage

- full · non synthesis-only · secrets absents · complete

---

## 18. Verdict unique

`ML4 PRODUCT — LOCAL CANDIDATE COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED`

- Product commit : `79b100527a9c43fb789ca62b7f87b50a8bc2adf1`
- Tree : `5b43538452d5bb425a1ab7e150ca3b74ea66eb77`
- Base : `c658f59023d44a0e22448c7ee034e3c1dda292a2`
- Fichiers : 87 · +14869/−32
- Exclus : `.tmp*` preuves · qualify script
- Tests : 183 / 211 / 13/13
- Réserves : R1–R5 CARRIED ; R6 NON ISSUE ; R7/R8 fixed
