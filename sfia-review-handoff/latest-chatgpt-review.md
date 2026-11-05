# Review Pack FULL — SFIA Studio Next / ML2 C3-B lost-ACK

**Date/heure:** 2026-11-05 10:05 CET (Europe/Paris)
**Cycle:** 9 — QA / validation
**Typologie:** INC — anomalie BROWSER C3-B
**Macro-lot:** R5 / ML2 — Produire et capitaliser avec Nora
**PR:** [#655](https://github.com/mcleland147/sfia-workspace/pull/655) — OPEN / DRAFT
**Version produit:** NO RELEASE · STABLE NOT AVAILABLE

---

## 1. Git Truth

### Initial
| Item | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-ml2-production-capitalisation` |
| HEAD local/distant | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Parent | `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| merge-base | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| PR #655 | OPEN / DRAFT @ `23e55da8` |
| Handoff distant | `2efefa7066b2538515cb6386fa1ad5eea905b74c` |
| Run incident | [41995565584](https://github.com/mcleland147/sfia-workspace/actions/runs/41995565584) |

Résidus préservés (non stagés): `.tmp-sfia-review/` · 5 SVG `web/public/*.svg`.

### Final
| Item | Valeur |
| --- | --- |
| Commit correctif | `08b89360ea7132f09f1e1d777a7c9e17612b84fb` |
| Parent | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Push | fast-forward only → même branche |
| PR #655 | OPEN / DRAFT @ `08b89360` |
| main | inchangé `6e4406c6` |

---

## 2. Sources consultées (refs applicables)

- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- projects/sfia-studio-next/governance/{SEF,roadmap,environnements-recette-et-promotions,product-versioning}.md
- projects/sfia-studio-next/construction/ml2-*/{specification-technique,matrice-tracabilite}.md
- page.tsx · ml2-c3-stable-key.spec.ts · document/service.ts · e2e harness · sfia-studio-next-ci.yml
- handoff précédent `sfia/review-handoff@2efefa70`
- logs run 41995565584 (Playwright timeout `create-intent-key`)

---

## 3. Incident initial

Run Next [41995565584](https://github.com/mcleland147/sfia-workspace/actions/runs/41995565584) @ `23e55da8`:
- Postgres TCP / migrations / unit 34 / PG 50 : SUCCESS
- Playwright : 2 PASS / 1 FAIL — `ml2-c3-stable-key.spec.ts`
- Erreur: `Test timeout of 90000ms exceeded` sur `locator.innerText` waiting for `getByTestId('create-intent-key')` (ligne 59)
- Next Required Gate: FAILURE

---

## 4. Diagnostic discriminant (preuve locale isolée :3101 / sfia_next_e2e)

Instrumentation temporaire `_diag-c3b.spec.ts` (retirée avant commit). Chronologie observée:

1. Click save → intent mintée → `create-intent-key` visible (`create-doc-…`)
2. `route.fetch()` upstream **200 AVAILABLE** (document persisté serveur)
3. Client reçoit **502 ACK_LOST_SIM**
4. Peu après (Fast Refresh / `useEffect` → `reload()`):
   - `docButtons=["Document du sas · v1 · AVAILABLE"]`
   - `keyPresent=false`
   - `status="Document FAILED: ACK_LOST_SIM"`
5. API GET: exactement 1 document / rev 1

Reproduction du test original local: échec alternatif `keysSeen.length >= 2` reçu `1`, snapshot final **« Document AVAILABLE rev 2 »** — le retry était passé en **revise-via-save** (nouvelle clé `revsave-…`) faute de `docId` adopté pendant l’intention de création ouverte.

### Hypothèses
| Branche | Verdict |
| --- | --- |
| A — test exige à tort une clé alors que réconciliation AVAILABLE correcte | **ÉCARTÉE** — statut restait FAILED, et retry créait rev 2 (pas une réconciliation propre) |
| B — perte incorrecte / contournement de l’intention | **RETENUE** — `reload()` adoptait `docId` tant que `createDocIntent` était actif → masquage de la clé + diversion revise |
| C — harness seul non représentatif | **CONTRIBUTEUR** (Fast Refresh `next dev` relance `useEffect`→`reload`) mais le défaut propriétaire est le composant qui laisse `reload` casser l’invariant d’intention |

Cause démontrée: **B** (composant), déclenchée typiquement par un reload incident (DEV/E2E).

---

## 5. Correction retenue

### Fichiers (blast radius minimal)
1. `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
   — `reload()` n’adopte plus `docId` si `createDocIntentRef.current` est actif. La liste `docs` continue de se mettre à jour.
2. `projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts`
   — oracle renforcé: clé stable avant/après FAILED, ≥2 creates même clé, `reviseCalls===0`, 1 doc / revision 1.
3. `projects/sfia-studio-next/construction/delivery-history.md`
   — As-Built DELIV-2026-11-05-ML2-C3B-LOST-ACK-06.

### Alternatives écartées
- Augmenter timeout / sleep / skip test — masque le défaut.
- Corriger uniquement le test pour accepter rev 2 — affaiblit l’idempotence.
- Persistance sessionStorage de l’intention — hors mandat (réserve cross-refresh).
- Passer E2E en `next start` — change harness structurant, non nécessaire une fois le composant corrigé.
- Modifier D4 / migrations / workflow CI — hors GO.

### Diff complet (produit + test)

```diff
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -92,7 +92,11 @@ export default function PreparationPage() {
     setCreationRevision(j.preparation?.creationRevision ?? 1);
     setProjectId(j.project?.id ?? null);
     const first = j.documents?.[0];
-    if (first) {
+    // While a create intent is open (e.g. ACK lost after server commit), do NOT adopt
+    // docId from a background reload. Adopting would hide the intent key and divert the
+    // next save into the revise path (new revsave key) instead of replaying the same
+    // creation correlation key. Docs list still updates above so the user can see truth.
+    if (first && !createDocIntentRef.current) {
       setDocId(first.document.id);
       setDocText(first.latestRevision?.contentMarkdown ?? docText);
       setBaseRevisionId(first.latestRevision?.id);
```

Test: capture clé dès mint; assert clé survit au FAILED; assert `createCalls>=2`, même clé, `reviseCalls===0`; assert DB 1 document revision 1.

---

## 6. Validations locales

Lane: DEV isolée · port 3101 · DB `sfia_next_e2e` · Nora FAKE · pas d’OPENAI LIVE · conteneur `sfia-next-dev-pg` (DB opérateur Morris non mutée hors migrations E2E habituelles).

| Contrôle | Résultat |
| --- | --- |
| C3-B × 5 répétitions | **5/5 PASS** |
| Playwright suite (3) | **3 PASS** |
| Vitest unit | **34 PASS** |
| Vitest PG | **50 PASS** |
| tsc --noEmit | PASS |
| next lint | PASS |
| next build | PASS |
| git diff --check (staged) | PASS |
| secret scan staged | clean |

---

## 7. Commit / push projet

| Item | Valeur |
| --- | --- |
| Message | `fix(next-ml2): stabilize C3-B lost-ack browser proof` |
| SHA | `08b89360ea7132f09f1e1d777a7c9e17612b84fb` |
| Parent | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Fichiers | 3 (page.tsx, ml2-c3-stable-key.spec.ts, delivery-history.md) |
| Push | fast-forward OK |
| Force push | NON |
| Nouvelle PR | NON |
| ready-for-review | NON |
| Merge | NON |

---

## 8. Nouveau run GitHub Actions

| Item | Valeur |
| --- | --- |
| Run Next CI | **41999186495** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/41999186495 |
| SHA | `08b89360ea7132f09f1e1d777a7c9e17612b84fb` |
| Conclusion | **success** |

| Job | Conclusion |
| --- | --- |
| Detect SFIA Studio Next changes | success |
| Build and validate SFIA Studio Next | success |
| SFIA Studio Next Required Gate | **success** |

Steps validate notables:
- postgres TCP SQL ready (attempt 3/60)
- TypeScript / ESLint / Build Next: success
- Vitest unit: 34 passed
- Migrations 001→004: applied
- Vitest PG: success (50)
- Playwright BROWSER FAKE: **3 passed (36.3s)**
- Secret scan / diff --check: success

Gate historique distinct:
- `SFIA Studio Required Gate` **pass** (run 41999186556; Build historique skipping — hors Next)

---

## 9. ENV-01 / versioning

- ENV-01 REQUIRED — mutations limitées à DEV + runner éphémère Actions
- RECETTE: NOT AUTHORIZED / NOT DEPLOYED
- STABLE: NOT AVAILABLE
- Product versioning: NO RELEASE · package `0.0.0-dev`
- Correctif classé PATCH technique interne du candidat ML2 non promu
- Aucun tag / release / ADOPTED

---

## 10. Fake / Real Qualification

Applicable: OUI.

Démontre:
- contrat UI/API/DB C3-B lost-ACK (clé stable, 0 revise, 1 doc rev 1)
- PostgreSQL réel éphémère + Playwright réel + Nora FAKE + identité DEV FAKE

Ne démontre PAS:
- Nora LIVE · COG-01..07 · OAuth réel · Figma complet · reprise cross-refresh · RECETTE Morris · STABLE/ADOPTED

BROWSER FAKE ≠ comportement LIVE intégral. DETERMINISTIC PROVEN ≠ REAL BOUNDARY PROVEN.

---

## 11. Réserves maintenues

ML2-S1, ML2-S2, ML2-S3, COG LIVE, reprise C3 cross-refresh, ML1-A cookies — **inchangées**.
La réussite CI Next ne lève aucune de ces réserves et n’autorise ni merge ni RECETTE.

---

## 12. Décision Morris suivante

1. Constater CI Next SUCCESS sur `08b89360` / PR #655 DRAFT.
2. Décider du gate RECETTE (déploiement / revue humaine) — **non exécuté ici**.
3. Ne pas merger tant que Morris n’ouvre pas explicitement ce gate.
4. Ne pas démarrer ML3 sans GO distinct.

---

## 13. Verdict unique

**CI NEXT SUCCESS — PR #655 DRAFT — RECETTE GATE PENDING**

Correctif C3-B lost-ACK prouvé localement (5×) et sur GitHub Actions run 41999186495 (Playwright 3/3, Next Required Gate SUCCESS). PR reste DRAFT. Pas de merge. Pas de RECETTE.
