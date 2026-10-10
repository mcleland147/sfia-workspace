# SFIA Review Pack — FULL CRITICAL
# P6 First Framing — UX & Recommendation Continuity Correction Pass (UX-01…UX-06)

## Meta
- Date / heure : **2026-10-10 08:14:30 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Capacité v3 : V3-F05 (+ V3-F02, V3-F06)
- Cycle : 8 — Delivery / implémentation
- Profil : Critical
- Typologie : INC / EVOL
- GO Morris : **OUI** — six corrections UX/Recommendation Continuity
- Intention aval : intégration Git complète **après** revue (NON autorisée ici)
- Commit / push / PR / merge projet : **NON**
- Review pack réinitialisé : **oui**
- Niveau : **FULL CRITICAL**
- Mono-cycle : **confirmé**
- Synthesis only : **no**

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Repo | `/Users/morris/Projects/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| `origin/main` | `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Handoff tip avant | `b239e515bdf4e80b5cf452b39a665cdde25b74b6` |
| Staged | vide |
| Reset / clean / stash | **NON** |
| Préservation Delivery Option 1 + CP + CC + C14 + p6-campaign + HQA | **OUI** |

---

## 2. Sources (exploitées)

- Template v2.6 / operating model / guardrails (handoff L3)
- P2 (P2-D-01 Recommendation disposition vs HumanDecision)
- P3 UX shell / cartes inline
- P6 contract
- Doctrine 30 / 32 / 34 / 37 (autorité, LPS, réversibilité)
- Seams locaux Delivery/CP/CC existants
- Figma frames 46:2 / 378:2 / 380:2 / 380:381 — **READ ONLY** (pas de modification Figma)

---

## 3. Qualification des six écarts → correctifs

| ID | Écart observé | Seam | Correctif (minimal, réutilise l’existant) |
|----|---------------|------|-------------------------------------------|
| UX-01 | Carte décision trajectoire trop pauvre | `FramingContinuityCard` + `chatFirstFramingContinuity` + read continuity | Projection `examination` depuis LPS objective + steps Product + implications/limites honnêtes ; CTA désactivé si insuffisant |
| UX-02 | « Ouvrir » préremplit « Je décide » | `ConversationSurface` + `ProjectWorkspacePage` | Ouvrir = détails inline ; secondaire « En discuter avec Nora » = draft neutre |
| UX-03 | Statut « En attente de décision » pour reco non structurelle | `ConversationSurface` durable card | Statut « À examiner » / « Dispositionnée » ; matérialité P2-D-01 affichée en détails |
| UX-04 | `cyc:trj-…` dans message START Pilote | `chatFirstStartSuccessMessage` | Copy « Le {label} est maintenant actif. » — id réservé aux preuves techniques |
| UX-05 | Attention « 1 décision… » pour Work Rec | `deriveAttentionItems` | Clé `recommendation` séparée ; décision seulement si `decisionPending` |
| UX-06 | « actions Studio / panneau d’état » | `orchestrateF2`, F01 block messages, `composeF2PilotFacingNarrative`, `buildProjectSystemPrompt` | Prochaine action conversationnelle ; guidance prompt UX-06 |

**F01 / START** : logique START inchangée ; seule la copy Pilote + assertion test UX-04 ajustées.
**Aucune HD inventée. Aucun START auto. Aucune architecture parallèle. Aucun REAL.**

---

## 4. Fichiers modifiés / créés (ce pass)

### Modifiés (UX-01…06)
- `app/features/project-assistant/f2/chatFirstFramingContinuity.ts` — examination builder + active copy
- `app/features/project-assistant/preCycleCandidateTrajectoryActions.ts` — populate examination from LPS/steps
- `app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx` — UI examination
- `app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` — UX-02/03 durable card
- `app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx` — discuss draft neutre
- `app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx` — label « En discuter avec Nora »
- `app/features/pre-m6-product-ui/workspaceContextPresentation.ts` — UX-05 attention
- `app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts` — UX-04/06 messages
- `app/features/project-assistant/f2/orchestrateF2.ts` — UX-06 defer copy
- `app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts` — UX-06 next-step
- `app/features/project-assistant/buildProjectSystemPrompt.ts` — UX-06 prompt guard
- `app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` — assert no cyc id in Pilot text
- `app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx` — examination
- `app/__tests__/pre-m6-product-ui/framingContinuityRehydrate.ui.test.tsx` — examination:null
- `app/__tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts` — examination:null

### Créé
- `app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx`

### Contenu exploitable (extraits)

**UX-04 success message**
```ts
return `Le ${label} est maintenant actif. L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
```

**UX-05 attention**
```ts
if (input.decisionPending) { key: "decision", headline: "1 décision à examiner", ... }
if (pendingWork > 0 && !input.decisionPending) {
  key: "recommendation", headline: "1 recommandation à examiner", ...
}
```

**UX-02 discuss draft (neutre)**
```ts
`Nora, regardons cette recommandation : « ${card.statement} ».`
`Qu'est-ce qu'elle implique concrètement pour la suite, sans en faire encore une décision ?`
```

---

## 5. Validations

| Check | Result |
|-------|--------|
| Vitest ciblé (8 files) | **60 passed / 0 failed** |
| Suites | UX continuity · FramingContinuityCard · Rehydrate · Framing d0 · Front-door · F01 · COG01 · UI05 |
| Non-régression F01 START | PASS — START once + LPS active ; Pilot text **sans** `cyc:trj-` |
| Non-régression HD / front-door Framing | PASS (frontDoor.d0) |
| `git diff --check` | PASS (pas de trailing whitespace bloquant) |
| Typecheck fichiers touchés | Pas d’erreurs filtrées sur seams UX (erreurs historiques `p6-campaign/*.real.test.ts` hors scope) |
| Runtime `:3020` | login **200** (next-server PID 17440) |
| Comparaison visuelle Figma/runtime Workspace | **RÉSERVE** — session Pilot / parcours manuel Morris non rejoué dans ce pass |
| Appels REAL | **0** |
| DB Human QA | **non écrite** |
| `SFIA_STUDIO_CURSOR_REAL` | **non modifié** |

---

## 6. Fake / Real Qualification

| Item | Value |
|------|-------|
| Applicable | OUI |
| Preuves ce cycle | Déterministes + UI jsdom + runtime HTTP smoke |
| Parcours manuel Morris | Preuve runtime complémentaire **externe** à ce pack |
| REAL provider | NON demandé / NON exécuté |
| P6 Global PASS | **NON** |
| Runtime v3 ADOPTED | **NON** |
| Claims autorisés | LOCAL UX CORRECTION CANDIDATE |
| Claims interdits | READY FOR MERGE · E2E REAL PROVEN · REC-01 CLOSED |

---

## 7. Réserves

1. Visual Figma↔runtime Workspace First Framing **non capturé** sous session Pilot dans ce cycle.
2. Matérialité Work Rec : requalification **présentation** selon P2-D-01 ; pas de nouveau moteur M-DISP — gap si une reco structurelle devait forcer HD automatiquement (non observé ici ; lifecycle trajectory HD reste gouvernée).
3. Messages historiques persistés **non réécrits** (UX-06 s’applique aux nouveaux messages).
4. Runtime long-running peut nécessiter refresh navigateur pour hot-reload complet.
5. Intégration Git **non commencée**.

---

## 8. INVENTAIRE POUR INTÉGRATION GIT FUTURE
*(informatif — aucun staging / commit projet)*

### A. Delivery Option 1 + CP + CC (déjà locaux)
- `useProductConversation.ts` (CC-01/02)
- `ConversationSurface.tsx` (CC + UX)
- `FramingContinuityCard.tsx` (CC + UX-01)
- `chatFirstFramingContinuity.ts` (CC + UX-01/04)
- `orchestrateF2.ts` (Delivery/CP + UX-06)
- `preCycleCandidateTrajectoryActions.ts` (CC + UX-01)
- `buildProjectSystemPrompt.ts` (Delivery + UX-06)
- `qualToGovernedCycle.presentation.d0.test.ts`
- Tests : `chatFirstFramingContinuity.d0/frontDoor.d0`, `framingContinuityCard.ui`, `framingContinuityRehydrate.ui`

### B. Six corrections UX (ce pass)
- Fichiers listés §4 + `workspaceContextPresentation.ts` + `ProjectWorkspacePage.tsx` + `JournalSurface.tsx` + `composeF2PilotFacingNarrative.ts` + `resolveChatFirstCycleStartGate.ts` + `p6.ux.recommendationContinuity.ui.test.tsx` + ajustement F01 test

### C. C14 à classifier
- `product-simplification/p6-qa-integration-state-and-reserves.md` — documentary ; **séparer** éventuellement d’un commit Product code

### D. À exclure de l’intégration Product
- `.tmp-sfia-review/**`
- `projects/.tmp-sfia-review/**` (SQLite visual)
- `__tests__/p6-campaign/*.real.test.ts` (harness REAL / friction tsc)
- `.env*` / secrets
- Bases Human QA SQLite
- Artefacts captures HQA

---

## 9. Review Handoff Git

- decision : **required**
- mode : **publish-in-cycle**
- push : **oui — L3 borné**
- source : `.tmp-sfia-review/chatgpt-review.md`
- branch : `sfia/review-handoff`
- file : `sfia-review-handoff/latest-chatgpt-review.md`
- remote before : `b239e515bdf4e80b5cf452b39a665cdde25b74b6`
- remote after : *(après publication)*

---

## 10. Décisions Morris

1. Revue Critical de ce lot UX-01…06 + inventaire d’intégration.
2. GO distinct d’intégration Git (staging/commit/PR) — **non autorisé ici**.
3. Optionnel : parcours navigateur Pilot pour clôturer la réserve visuelle.

---

## 11. Verdict

# LOCAL UX CORRECTION CANDIDATE — READY FOR CRITICAL REVIEW

Six corrections implémentées dans le même lot, preuves déterministes/UI PASS (60), F01/HD non régressés, aucune mutation Product non autorisée, aucun commit projet.
