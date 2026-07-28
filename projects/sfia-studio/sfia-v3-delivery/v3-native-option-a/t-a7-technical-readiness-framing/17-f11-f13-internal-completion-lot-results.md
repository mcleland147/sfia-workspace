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

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS RE-RUN — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS RE-RUN**

---

## 14. Correctif F-PR-01 (typings)

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-29 00:27:00 CEST (+0200) |
| **Finding** | F-PR-01 Major — TS2322 `boundedHistoryRead.ts` ~L274 |
| **Cause** | ternaire `Array.isArray` ne narrow pas l’union seed-array \| options |
| **Correction** | overloads publics + normalisation `if/else` typée (pas de `any` / `@ts-ignore`) |
| **API** | seed-array historique + options modernes préservées |
| **Trailing whitespace** | docs 14/15 nettoyés (Minor F-PR-02) |

---

## 15. Verdict

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F-PR-01 TS2322 CORRECTED — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS RE-RUN`
