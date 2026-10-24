# SFIA Studio — AKG-M5 / L2-D2 Cycle 8 — LOCAL OA FRESH START CUTOVER DELIVERY

**Profile:** CRITICAL
**Typologie:** EVOL / PRODUCT DELIVERY — LOCAL ONLY
**Date/heure locale:** 2026-10-24 17:55 CEST
**Auteur rapport:** Cursor (Composer)
**GO Morris consommé:** GO AKG-M5 L2-D2 LOCAL CUTOVER DELIVERY IMPLEMENTATION ONLY — GRANTED 2026-10-24
**Levée du STOP antérieur:** handoff `36d3c289` (G-DELIVERY NOT GRANTED) était correct pour le contrat candidat ; levé par le présent GO.

---

## 0. Verdict Cursor

**L2-D2 LOCAL CUTOVER DELIVERY — IMPLEMENTED AT TESTED SCOPE**
— CRITICAL REVIEW REQUIRED
— ACTIVATION NOT AUTHORIZED
— G-GIT OPEN

Non-claims : CUTOVER PROVEN · PRODUCT COMPLETION COMPLETE · P6 GLOBAL PASS · PRODUCTION READY · REAL BOUNDARY PROVEN · STUDIO V3 RUNTIME ADOPTED.

Instruction ChatGPT : Critical Review code/tests/R23/R24/freeze D1/O-01 ; challenger dette ; définir gates G-ACTIVATION sans l'accorder.

---

## 1. GO / périmètre

**Fait (autorisé) :** worktree Delivery dédié ; branche locale ; freeze D1 fail-closed ; D4 routes ; tests DET ; O-01 Product→UI intégré ; pack FULL ; handoff L3.

**Non fait (interdit) :** activation Studio ; config active ; DB Application Support ; migration/suppression ; ouverture DB P6/D1 réelles ; restart Studio ; push/PR/merge projet ; PRR/Doctrine/Roadmap.

G-ACTIVATION / G-GIT : OPEN.

---

## 2. Git Truth

| Check | Résultat |
|---|---|
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` |
| Branch | `feat/akg-m5-l2-d2-local-oa-cutover` |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` (= `origin/main`) |
| Note | Path `…-akg-m5-l2-d2-local-oa-cutover` était déjà un WT L2-D1 — non utilisé. Delivery = path `feat-…`. Incident : le WT Delivery a brièvement pointé `feat/akg-m5-l2-d1-product-o01-audit` ; **corrigé** par `checkout feat/akg-m5-l2-d2-local-oa-cutover` en conservant le dirty Delivery. Re-tests PASS après correction. |
| P6 | dirty préservé (~11) — non utilisé |
| Fresh Start candidate | size=339968 mtime=15:28:18 — intacte |
| App Support `SFIA-Studio/product` | ABSENT |

Handoffs d'entrée : STOP `36d3c289` + Readiness `1f2ad8b5`.

---

## 3. Convergence

G-DELIVERY GRANTED. Décisions Morris Option A / Nora isolée / D4 A / freeze all-writers / O-01 oracle : implémentées en **mode inactif par défaut**. Runtime v3 NON ADOPTED. H4 local no-migration. R-CUT partiel jusqu'activation.

---

## 4. R23

### 4.1 Freeze D1 (FREEZE gated)

- Marqueur `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1` (default OFF)
- `assertD1AccessAllowedWhenLocalOaExclusive()` dans `openD1Db` **avant** resolve/DDL
- Lazy repos : plus de default-arg `openD1Db()` pré-corps (`commands`, `repository`, `boundedAtomicAudit`, `executeConfirmation`, `buildSnapshot`)
- Code erreur `FORBIDDEN`
- CR-D2-01 : freeze ≠ MethodModeHold

### 4.2 D4 (ADAPT)

- Generics → `redirect("/studio")`
- Deep link `/projects/[id]` → `notFound()` avant getProject
- Hors mode : historique inchangé
- Pas de mapping `proj-*`→`prj:*`

### 4.3 Persistence (KEEP / doc only)

`.env.example` documente marqueur + chemins Option A futurs. Aucune DB durable créée. Aucun env actif modifié.

### 4.4 O-01 (COMPLETE at DET tested scope)

create → SQLite → list UI → workspace UI → reopen → D1 blocked.

---

## 5. Fichiers

**Créés :** `localOaExclusiveMode*.ts`, `legacyNavigation.ts`, tests `l2d2LocalOaExclusiveFreeze`, `l2d2D4LegacyNavigation`, `l2d2O01ProductUiIntegrated`.

**Modifiés :** `db.ts`, `commands.ts`, `repository.ts`, `boundedAtomicAudit.ts`, `executeConfirmation.ts`, `buildSnapshot.ts`, `errors.ts`, `index.ts`, pages workspace/projects/nouvelle-demande, `.env.example`.

**Interdits non touchés :** Doctrine, Roadmap, C1, PRR, P6.

---

## 6. Extraits code

### openD1Db
```
export function openD1Db(dbPath?: string): DatabaseSync {
  assertD1AccessAllowedWhenLocalOaExclusive();
  const resolved = dbPath ?? resolveD1SqlitePath();
  ...
}
```

### Marker
```
return process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE?.trim() === "1";
```

### D4 deep link
```
if (!isLocalOaExclusiveMode()) return;
notFound();
```

---

## 7. Tests exécutés

`vitest run` freeze + D4 + O-01 + D5 + m1 durability → **5 files / 27 PASS**.
`tsc --noEmit` PASS. `git diff --check` PASS.
Re-verify post branch-fix : freeze+D4+O-01 PASS.

Skips : Q12 live rollback ; Q15 conversational large ; REAL ; Human QA ; Studio start.

O-01 : `serverGuard` stubbed en jsdom uniquement pour import actions ; store SQLite réel.

---

## 8. Q matrix

| ID | Niveau |
|---|---|
| Q7 | BEHAVIOR PROVEN AT TESTED SCOPE |
| Q8 | BEHAVIOR PROVEN AT TESTED SCOPE |
| Q9 | BEHAVIOR PROVEN AT TESTED SCOPE |
| Q10 | BEHAVIOR PROVEN AT TESTED SCOPE |
| Q11 | N/A Fresh Start |
| Q12 | DOCUMENTED (activation) |
| Q15 | PARTIAL |
| O-01 | BEHAVIOR PROVEN AT TESTED SCOPE (DET) ≠ live activation |

---

## 9. Isolation

P6/D1 réels non ouverts ; candidate intacte ; App Support absent ; marqueur default OFF (create D1 hors mode PASS).

---

## 10. R24 / PRR (non synchronisé — protégé)

Impact sémantique Product **oui** (mode gated).
Volumes candidats : 04/05/06/07/08/09.
Digests non rafraîchis. G-PRR OPEN avant intégration si exigé.
Pas de claim READY FOR INTEGRATION.

---

## 11. Fake/Real

DET yes · Studio live no · REAL no · HQA no.

---

## 12. Réversibilité / dette / exit

Dette : D1 dormant ; `/`→`/synthese` hors scope ; `actionExecuteConfirmation` shape `ok:true`+FAILED historique.
Exit post G-ACTIVATION : exclusive=1 + paths absolus + O-01 live.
Rollback : ne pas unset PRODUCT_DB_PATH ; préserver OA ; pas d'unfreeze D1.

---

## 13. Gates G-ACTIVATION

1. GO G-ACTIVATION
2. Preflight collision paths Option A
3. Init OA+Nora virgin
4. Bind instance-only PRODUCT/NORA/EXCLUSIVE
5. Start Studio contrôlé
6. Re-proof O-01/Q7–Q10 live
7. G-PRR si requis
8. G-GIT

---

## 14. Réserves

1. Incident checkout L2-D1 corrigé — documenté.
2. Q15 partiel.
3. Confirmation action wrapping historique.

---

## 15. Instruction ChatGPT

Review freeze-before-open ; D4 ; O-01 ; wrapping confirmation ; G-ACTIVATION exact ; G-PRR vs G-GIT.

---

**FIN — L2-D2 LOCAL CUTOVER DELIVERY IMPLEMENTED AT TESTED SCOPE**
