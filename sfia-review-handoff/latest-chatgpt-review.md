# SFIA Studio Next — Review Pack Full
## Ensemble 04 — Correction bloquants CP01 / CP02

**Date** : 2026-11-17
**Cycle** : R5 / ML4D — correction candidat (DEV)
**Parent** : `351aea9607c5997f7343212a837dd13c0f1e4429`
**Verdict** : **ENSEMBLE 04 — CP01/CP02 CORRECTION CANDIDATE READY**

```text
READY FOR CHATGPT REVIEW
RECETTE UNCHANGED
MORRIS VISUAL ACCEPTANCE PENDING
NO PROJECT PUSH / NO PR / NO MERGE / NO STABLE
GATE C OPEN / ML5 NOT STARTED / NO ADOPTED
```

---

## 1. Mandat

Corriger les deux réserves du cutover avorté (handoff `300b02f8` / blob `7aeefc88`) :

- **CP01** — contrôles de réconciliation inaccessibles sous `max-height:160px` + shell `overflow:hidden`.
- **CP02** — navigation mobile non démontrée à 390×844 (rail desktop masqué).

Aucune autorisation de cutover RECETTE. Aucun amend de `351aea96`. Nouveau commit correctif local.

---

## 2. Git Truth Check

| Item | Valeur |
|------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD avant | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| Parent | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Ascendance | OK |
| Amend 351aea96 | Non |
| Push projet | Non |
| RECETTE avant/après | `a30e75c7` / `WUqfWdCB7T2rHzDvk-Hre` @ `:3200` — **inchangée** |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` — non modifié |

Candidat corrigé : `984d77a36695c2f59ebbc18619e54eeeb43ad94e`.

---

## 3. Sources applicables

Relues depuis Git : SEF, ENV-01, product-versioning, rules/guardrails, contrat transposition Figma, décision R5. Politique : NO RELEASE / STABLE NOT AVAILABLE / cutover hors mandat.

---

## 4. Diagnostic racine

### CP01
Le bandeau pending était **dans** `.fig-travail-composer` (`max-height:160px`, overflow visible). Le contenu peignait hors boîte ; la ligne grid restait à ~160px ; le shell (`overflow:hidden`) clipait le bouton Réconcilier sous le viewport. Document non scrollable.

Effet secondaire découvert en correction : avec `overflow:auto` + `align-self:end` en breakpoint ≤1100px, la ligne grid sous-dimensionnait la pile et la peignait **vers le haut** sur le fil.

### CP02
Le rail desktop (`studio-rail`) est volontairement `hidden md:flex`. À 390px la navigation projet est le strip `studio-rail-mobile` (`md:hidden` + CSS ≤767px). Le test cutover ne regardait que `studio-rail` → faux négatif. Pas de nouvelle conception mobile requise.

---

## 5. Corrections

### CP01 — `NoraConversation.tsx` + `tokens.css`
- Nouvelle pile `fig-travail-composer-stack` (`data-pending`, `nora-composer-stack`).
- Bandeau `fig-travail-pending` **au-dessus** de la carte compositeur Figma.
- Compositeur conserve `max-height:160px` (état nominal inchangé).
- Desktop pending : stack `max-height:min(50vh,360px)` + scroll interne maîtrisé ; `align-self:start` ; `min-height:min-content`.
- ≤1100px : `max-height:none` / `overflow:visible` pour laisser la ligne grid grandir (page déjà `overflow:visible`).
- Aucun changement API / persistance / autorité pending.

### CP02 — `StudioShell.tsx`
- `data-testid={`nav-${item.key}`}` sur les liens du strip mobile (mêmes destinations que le rail).
- Contrat de test adapté : desktop → `studio-rail` ; mobile → `studio-rail-mobile`.

### Tests
- Nouveau `tests/e2e/ensemble04-cp01-cp02-correction.spec.ts` (CP01-A..E + CP02).
- Preuves F2 runtime rafraîchies (captures evidence).
- `construction/delivery-history.md` synchronisé.

---

## 6. Fichiers touchés

| Fichier | Rôle |
|---------|------|
| `web/src/components/figma/NoraConversation.tsx` | stack + pending hors carte |
| `web/src/components/figma/tokens.css` | géométrie stack / pending / breakpoints |
| `web/src/components/shell/StudioShell.tsx` | testids nav mobile |
| `web/tests/e2e/ensemble04-cp01-cp02-correction.spec.ts` | **créé** — gates CP01/CP02 |
| `web/docs/evidence/ensemble-04-project-space/*` | captures F2 + manifest |
| `construction/delivery-history.md` | entrée DELIV CP01/CP02 |

---

## 7. Diffs exploitables (extraits)

### NoraConversation — structure pending hors composer
```tsx
<div className="fig-travail-composer-stack" data-testid="nora-composer-stack" data-pending={...}>
  {unresolvedPending && onReconcile ? (
    <div className="fig-travail-pending" data-testid="thread-pending-banner">...</div>
  ) : null}
  <div className="fig-composer fig-travail-composer" data-testid="nora-composer">...</div>
</div>
```

### tokens.css — pile + garde anti-chevauchement
```css
.fig-travail-composer-stack { align-self: start; grid-row: 4; ... }
.fig-travail-composer-stack[data-pending="1"] {
  max-height: min(50vh, 360px); overflow-y: auto; min-height: min-content;
}
@media (max-width: 1100px) {
  .fig-travail-composer-stack[data-pending="1"] {
    max-height: none; overflow-y: visible;
  }
}
```

### StudioShell — testids mobile strip
```tsx
data-testid={`nav-${item.key}`}
```

---

## 8. Tests et preuves

Preuves locales : `.tmp-sfia-review/cp01-cp02-correction/`

| Contrôle | Résultat | Preuve |
|----------|----------|--------|
| CP01-A nominal 1680×970 | **PASS** | gap 25 ; composerH 142≤160 ; cartes séparées |
| CP01-B pending 1680×970 | **PASS** | reconcile fullyInViewport ; no overlap |
| CP01-C pending 1280×600 | **PASS** | idem |
| CP01-D pending 1024×768 | **PASS** | stack sous panel ; no overlap |
| CP01-E pending 390×844 | **PASS** | idem |
| CP02 desktop / mid / mobile | **PASS** | rail ou strip ; 4 surfaces ; portefeuille ; bleed 0 |
| E04 + T13 + T16 | **PASS** | Playwright |
| F2 captures / mesures | **PASS** | gap 25 ; composer ≤160 ; bottoms align |
| Long-thread composer | **PASS** | |
| Vitest studio-rail | **PASS** 13/13 | |
| Vitest unit large | 416 PASS / 3 FAIL préexistants (GitHub App env lane) | hors scope |
| `tsc` | **32 erreurs** parent UX-005 | réserve maintenue |
| `next build` | **PASS** | |
| lint | warnings préexistants only | |

FAKE/DEV déterministe — **≠ LIVE**.

### Comparatif vs `351aea96`
| Aspect | 351aea96 | Correctif |
|--------|----------|-----------|
| Pending dans max-height 160 | oui → clip shell | non — hors carte |
| Reconcile 1680×970 | sous viewport | entièrement visible |
| Overlap ≤1100 pending | N/A (déjà cassé) / risque end+overflow | corrigé |
| Nav 390 | rail absent (attendu) non testé | strip mobile prouvé |

---

## 9. Blast radius

- UI Travail / compositeur / pending banner uniquement.
- Shell : attributs testid mobile strip seulement.
- Pas d’API, DB, migration, secrets, Figma frames, Ensemble 05.

---

## 10. État RECETTE

```text
URL:          http://127.0.0.1:3200
SHA servi:    a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
BUILD_ID:     WUqfWdCB7T2rHzDvk-Hre
LaunchAgent:  com.sfia.studio.next.recette.ml4d-ux004
Mutation:     AUCUNE
```

---

## 11. Nouveau SHA candidat

*(complété post-commit)*

- Branche : `feat/next-ml4d-project-space-20261116`
- Parent : `351aea9607c5997f7343212a837dd13c0f1e4429`
- HEAD : `984d77a36695c2f59ebbc18619e54eeeb43ad94e`
- Tree : `b92cc822ac67399c6d8753c17dbcce5f4b5b734f`

---

## 12. Réserves

- TypeScript workspace : 32 erreurs parent UX-005.
- Résultats et preuves → publication : KNOWN GAP.
- Glyphes Unicode : finition Morris.
- Nora avancé : Ensemble 05.
- OAuth personnel pour preuves RECETTE privées.
- Figma DEV ≠ acceptation RECETTE.
- Vitest GitHub App env : 3 FAIL lane config préexistants.

---

## 13. Décisions restantes Morris

1. Revue ChatGPT du nouveau candidat.
2. **Nouveau GO** cutover RECETTE (contrat distinct) — non automatique.
3. Réception visuelle Figma 652:* après mise à disposition.

---

## 14. Review Handoff

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- Commit distant : `19122ca076faa085c14220c19895220c4075d531`
- Blob distant : `790e355caa2a4f7fe6ab4cc83956be4eb97de28c`
- Verdict publisher : HANDOFF UPDATED — REMOTE VERIFIED
- Push projet : aucun
