# QA-NAP-02 — NORA ADAPTIVE PRESENTATION — AUTHENTICATED FAKE RUNTIME / FIGMA REVIEW

**Cycle:** SFIA 9 — QA / validation
**Profil:** STANDARD
**Typologie:** QA / validation locale authentifiée
**Review pack:** FULL
**Date/heure UTC:** 2026-10-29T21:36:30Z
**Worktree:** `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation`
**Branch:** `feat/akg-m5-nora-adaptive-presentation`
**HEAD:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**origin/main:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**Handoff CURRENT (avant publish):** `433c4812a5de973fdf459a748bdc4f22c00aeb24` / blob `4609bcbb4bdbc934cfc81eeae2fbc6739c6bf653` (QA-NAP-01 INCONCLUSIVE)

## Verdict unique

**LOCAL QA COMPLETE — AUTHENTICATED FAKE BROWSER RUNTIME PASS — A4 STRUCTURAL ALIGNED — CHATGPT FINAL REVIEW REQUIRED**

Sous-qualifications :
1. **BROWSER RUNTIME OBSERVED** — `/studio` authentifié + Fake NAP QA markers (`SFIA_STUDIO_E2E_QA_CONTROL=1`) ; Playwright matrix **1 passed** (~5.2s).
2. **A4 STRUCTURAL ALIGNED** — composition BALISE multi-blocs (established / open / recommendation) + continuité reload textuelle ; **pas** de score pixel shell↔frame A4 (natures différentes).
3. **A3 BEHAVIOR OBSERVED** — matrice courte / synthèse / comparaison / reco / provenance / fallback / forged Studio / mobile ; A3 reste contrat sémantique (non pixel conversation).

Aucun READY FOR PR / READY FOR REAL / ADOPTED / FIGMA TO RUNTIME PIXEL ALIGNED inventé. Aucun LIVE / Cursor REAL. Aucun commit Product.

## 1. Git Truth Check

| Check | Résultat |
|-------|----------|
| toplevel | MATCH Delivery worktree |
| branche | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD / origin/main / merge-base | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| WIP Option C + CORR-NAP-01/02/03 + QA harness | PRÉSENT non commité |
| staged | vide |
| Product authority changée sous QA | NON — Fake QA gated + auth helper + E2E only |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts
 M projects/sfia-studio/app/e2e/support/authenticatedStudioSession.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/scripts/e2e-auth-bootstrap.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/platform/ai/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
?? projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
```

## 2. Sources consultées

Méthode / convergence : cycle-execution-template, cycle-routing-guide, Operating Model v2.6, Build Doctrine / Roadmap / C1, doctrines 30/32/34/35, PRR 02/03/04/06/07/08/09.

Handoffs relus : CORR-NAP-03 `79c1f1a5` / QA-NAP-01 `433c4812`.

Code : fakeProvider NAP QA emit, authenticatedStudioSession (cookie url-only), ConversationSurface + NoraAdaptivePresentationView, noraAdaptivePresentation (coverage CORR-NAP-02), orchestrateTurn persistence `presentation_json`, E2E `studio-nora-adaptive-qa-nap01.spec.ts`.

Figma : fileKey `m4g8j0gNbEzfIuH6S9AZJF` — A3 `466:2`, A4 `466:71` (refs locales inchangées).

## 3. Contrat Figma (rappel)

### A3 — 466:2 (sémantique / comportemental)

Pipeline Réponse→Typage→Contrôle Studio→Composition ; matrice situations ; garde-fous gouvernance / provenance / continuité / a11y. **Non** maquette pixel `/studio`.

### A4 — 466:71 (composition BALISE + continuité)

Blocs established / open questions / recommendation + disclaimer ; avant/après reload identiques ; pas de CTA gouverné issu des blocs.

Références Figma locales :
- A3-466-2.png: `907122146fc30c7ccbb085a09457e73508c07fb9cfd36d5fe48a39101b35e662` size=93674
- A4-466-71.png: `f91ec73593e678937cc916da3561fb674a1546d15d631795a2badb8d9ab88e60` size=93068

## 4. Environnement QA réellement utilisé

```json
{
  "timestamp": "2026-10-29T21:35:06.473Z",
  "cookieFilePresent": true,
  "cookieStatus": "PRESENT",
  "playwrightBaseURL": "http://localhost:3020",
  "ops1ConversationProvider": "fake",
  "e2eQaControl": "1",
  "openAiLiveAuthorized": false,
  "cursorRealAuthorized": false,
  "adaptiveDtoEmitViaFake": true,
  "note": "Fake NAP QA markers gated by SFIA_STUDIO_E2E_QA_CONTROL=1"
}
```

- Delivery `next dev` : `localhost:3020` + symlink `.env.local` → main workspace secrets
- Auth : Better Auth `studio-storage-state.json` injecté (url-only cookies) — `/studio` atteint
- Fake markers : `__NAP_QA_*__` ; guidance Fake alignée `statement === lead` pour CORR-NAP-02 coverage
- OpenAI LIVE : NON · Cursor REAL : NON
- Caveat captures : `nextOverlayCount=1` (watcher Next) sur captures Product — ne change pas les assertions DOM

## 5. Matrice scénarios QA-NAP-01…12

| ID | Statut | Preuve |
|----|--------|--------|
| QA-NAP-01 réponse courte | PASS runtime | capture QA-01 + adaptive short |
| QA-NAP-02 synthèse composée | PASS runtime | QA-02 BALISE multi-blocs ; 0 CTA Approuver/Exécuter |
| QA-NAP-03 comparaison | PASS runtime | columnheader Critère ; QA-03 |
| QA-NAP-04 recommandation | PASS runtime | disclaimer / titre reco ; 0 CTA décision |
| QA-NAP-05 provenance/réserves | PASS runtime | QA-05 + titres épistémiques |
| QA-NAP-06 STOP/incomplétude | PARTIAL unit/UI | hors markers Fake ce cycle ; T18–T24 antérieurs |
| QA-NAP-07 marqueur forgé | PASS runtime | `[Studio] contrat approuvé` plain ; 0 appendix Studio |
| QA-NAP-08 legacy/DTO invalide | PASS runtime | plain fallback ; QA-08 |
| QA-NAP-09 reload navigateur | PASS runtime | before/after ; texte BALISE restauré |
| QA-NAP-10 restart serveur | NOT PROVEN | non exécuté ce cycle |
| QA-NAP-11 responsive | PASS runtime | mobile 390 ; overflowDelta=0 |
| QA-NAP-12 conformité A4 | STRUCTURAL ALIGNED | blocs + continuité ; pixel shell NON COMPARABLE |

## 6. Captures / manifeste / empreintes

### Manifeste runtime (11 lignes Product authentifiées)

Voir `.tmp-sfia-review/runtime-captures/nora-adaptive/manifest.jsonl` (timestamps `2026-10-29T21:35:06Z`…`21:35:11Z`).

### SHA-256 captures navigateur Product (conformes)

- QA-01-short-desktop.png: `06bd35ce5bd8908814d3d02bd4c7aa624452f226a98b5f3aab27684ba0b637e4` size=161451
- QA-02-balise-desktop.png: `b26e43ee803c02007525d070f65ec5eebbbfe9469a70309e34341d7ae30a5844` size=222752
- QA-03-compare-desktop.png: `fcff558d370e4d2b60f8140d4016b924f0c54451bb80cc99f21f1470cbf1b74a` size=222684
- QA-04-reco-desktop.png: `a4a7ce729dd4da7257a698550993f6075e354d18ed0e6354b5e52a1f20823662` size=222763
- QA-05-provenance-desktop.png: `c09cbbfd19aacafd8ce58f94cf258ec313f4220860219c86be218b161deabba4` size=222755
- QA-07-forged-studio.png: `55f00dd15956ee266cd158c8856168474974ab5de8002e826502237c1f678b3a` size=222767
- QA-08-invalid-fallback.png: `26f89e7979e9b26437867481785218dc5c653d77732a694cf9dce7e1b5f75caa` size=222560
- QA-09-balise-before-reload.png: `a828f39a461894ddd25570e755c20823346e273d71b1662654e7b7d40cdc0c5a` size=222734
- QA-09-balise-after-reload.png: `55b255e22100a9dbebb203d12913477eab5968a28c51ed7e1730763e362cbc42` size=222187
- QA-11-balise-mobile.png: `306a9aa1d038ee2bb0afba56b53b11651f390fecf894772d6b526fc322b30b72` size=268798
- QA-NAP-02-studio-home.png: `0dfe06a8d53587401f9e8ae2bac3e7577705af779fd75e509eebfae1ed5df9c1` size=63102

### Captures historiques non conformes (conservées, non preuve adaptative)

- QA-NAP-AUTH-WALL / AUTH-EXPIRED : `de55c6b47bdaf281c87aaa461f92136638519f80af3ca549bfa38be52674d9c8` (QA-NAP-01)
- QA-NAP-02-AUTH-INVALID.png : `c6748694b535c73380e5743d2eae9f1e6a4009b4993949dbdfb07d044bdb45d0` (session mismatch avant symlink `.env.local`)

### Fichiers à transmettre à ChatGPT

1. `figma-refs/A3-466-2.png` + `A4-466-71.png`
2. `QA-02-balise-desktop.png` + `QA-09-balise-before-reload.png` + `QA-09-balise-after-reload.png`
3. `QA-11-balise-mobile.png` + `QA-03-compare-desktop.png` + `QA-04-reco-desktop.png`
4. `QA-07-forged-studio.png` + `QA-08-invalid-fallback.png`
5. `manifest.jsonl` + `env-qualification.json`

## 7. Figma vs Runtime

| Élément | Figma | Runtime | Statut | Preuve |
|---------|-------|---------|--------|-------|
| A3 matrice situations | contrat | courte/synthèse/compare/reco/preuves/fallback | BEHAVIOR OBSERVED | E2E + captures |
| A4 multi-blocs BALISE | established/open/reco | cards + labels épistémiques | STRUCTURAL ALIGNED | QA-02 / QA-11 |
| Disclaimer reco | « Proposition uniquement… » | présent | ALIGNED | QA-04 / BALISE |
| CTA gouverné depuis blocs | interdit | 0 boutons Approuver/Exécuter | ALIGNED | E2E asserts |
| Continuité reload | A4 avant/après | texte BALISE restauré | ALIGNED | QA-09 + expect |
| Forged `[Studio]` | non trusted | plain ; 0 appendix | ALIGNED | QA-07 |
| Invalid DTO | fallback texte | plain | ALIGNED | QA-08 |
| Mobile | A3 a11y | overflow 0 @390 | ALIGNED | QA-11 |
| Pixel shell↔A4 frame | maquette carte | shell Product 3 colonnes | DESIGN NON COMPARABLE | natures différentes |
| Tokens exacts Geist/#fffdf9 | A3 | CSS Delivery proche crème | PARTIAL / NOT PIXEL-SCORED | observation visuelle |

Écarts : **NON BLOCKING** — overlay Next watcher sur captures ; QA-NAP-10 non joué ; reco block parfois bas de viewport desktop fullPage (contenu présent dans DOM / mobile).

## 8. Commandes et résultats

### Playwright QA-NAP-02 (authentifié)

```
OPS1_CONVERSATION_PROVIDER=fake SFIA_STUDIO_E2E_QA_CONTROL=1 \
PLAYWRIGHT_BASE_URL=http://localhost:3020 \
npx playwright test e2e/studio-nora-adaptive-qa-nap01.spec.ts --reporter=list
```
- exit **0** — **1 passed** (5.2s) — log `/tmp/qa-nap02-e2e8.txt`

### Fake NAP QA unit

```
npx vitest run __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts
```
- exit **0** — **8 passed** (probe latest-user + coverage-aligned guidance)

### Gates complémentaires (cycles antérieurs Delivery)

- NAP d0 + UI : 51 passed (CORR/Delivery)
- `tsc --noEmit` : exit 0 (Delivery HEAD + WIP)

## 9. Fake/Real Qualification

- Applicable : OUI
- Frontière : OpenAI Agents / Structured Outputs — **Fake only**
- Emit adaptatif : gated `SFIA_STUDIO_E2E_QA_CONTROL=1` + `OPS1_CONVERSATION_PROVIDER=fake` + markers `__NAP_QA_*__`
- REAL / LIVE / G-REAL : NON
- Niveau : **BROWSER RUNTIME OBSERVED (Fake deterministic)** + DETERMINISTIC unit/UI
- READY FOR REAL : NON

## 10. Anomalies / dette / correctifs QA-NAP-02

Correctifs outils (non Product authority) :
1. Playwright cookie Better Auth : **url XOR path** (fix url+path).
2. Fake NAP QA emit : markers + gate E2E ; probe **dernier message user** (évite sticky SHORT).
3. Guidance Fake : `statement === lead` pour ne pas casser CORR-NAP-02 `body===lead` après compose.
4. E2E : `latestNap()` pour assertions multi-cartes ; symlink `.env.local` Delivery.

Dette ouverte :
- QA-NAP-10 restart serveur NOT PROVEN
- QA-NAP-06 STOP runtime NOT PROVEN ce cycle
- R24 PRR DOC GO ouvert
- WIP Delivery non commité (attendu)

## 11. R23 / R24

**R23**
- Parcours `/studio` authentifié → send → Fake product turn → `presentation_json` → `NoraAdaptivePresentationView` : **BEHAVIOR PROVEN**
- Invariants NAP coverage / forged Studio / invalid fallback : **PROVEN navigateur**
- Figma A3/A4 : DOCUMENTED + structural compare faite

**R24**
- QA + Fake harness → **NO SEMANTIC PRODUCT AUTHORITY CHANGE**
- Sync PRR : **PENDING — MORRIS DOC GO REQUIRED**

## 12. Contenu clé — Fake NAP QA (extrait)

```typescript
export function isFakeNapQaEmitEnabled(): boolean {
  return (
    process.env.SFIA_STUDIO_E2E_QA_CONTROL === "1" &&
    (process.env.OPS1_CONVERSATION_PROVIDER || "").toLowerCase() === "fake"
  );
}
// probeNapQaMarkerFromItems: latest user message only
// napQaCoverageAlignedGuidance(lead): HOLD statement === lead
```

## 13. Décision demandée à ChatGPT / Morris

1. Confirmer verdict **LOCAL QA COMPLETE — … A4 STRUCTURAL ALIGNED** vs réserve sur pixel/tokens.
2. Autoriser ou non un cycle Delivery suivant (commit Product Option C + CORR + harness QA) — **hors scope** de ce publish L3.
3. QA-NAP-10 / QA-NAP-06 runtime : reportés ou requis avant PR.

---

**Fin pack FULL QA-NAP-02 — publish L3 `sfia/review-handoff` only.**
