# CORR-NAP-LIVE-RENDER-01 — ChatGPT Critical Review Pack (FULL)

**Cycle:** 8 — Delivery correctif (post QA cycle 9)
**Chantier:** AKG-M5 / Product Completion — L3-S2 Nora/Pilote continuity
**Capacité:** V3-F05 (deps V3-F06 / V3-F14)
**Profil:** CRITICAL / INC
**Date:** 2026-10-31
**Verdict proposé:** `CORR-NAP-LIVE-RENDER-01 — DETERMINISTIC CORRECTION READY FOR CHATGPT CRITICAL REVIEW`

**Non-claims (explicit):** UX LIVE PASS · READY FOR PR · PRODUCT MERGED · L3 COMPLETE · G-REAL PASS · RUNTIME V3 ADOPTED

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` (= `origin/main` observé) |
| Product WIP | **non commité** (D1 + LIVE-RENDER) — **non réinitialisé** |
| Product commit/push/PR | **AUCUN** (hors GO) |

Fichiers touchés **ce cycle** (delta minimal vs snapshot pré-fix) :

- `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts` — `splitPlainTextWithMarkdownTables` + flatten
- `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx` — `NoraCanonicalFallbackView`
- `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` — B path → FallbackView
- tests `__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts`
- tests `__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx`

`orchestrateTurn.ts` / `buildProjectSystemPrompt.ts` : **READ-ONLY** (inchangés ce cycle).

---

## 2. GO Morris

Investigation du **dernier tour LIVE** BALISE (comparaison A/B/C) + correction locale minimale si cause démontrée et non structurante.

**Autorisé:** diagnostic RO des DB LIVE ; correctif borné UI/runtime NAP ; tests synthétiques ; pack FULL ; handoff L3.

**Interdit:** nouveau message Nora / OpenAI auto ; mutation DB ; Fake env ; recreate BALISE ; soft A1 ; inventer DTO depuis narrative ; push/PR Product ; Cursor REAL ; G-REAL.

---

## 3. Sources / convergence (lues / appliquées)

- Processus SFIA v2.6 (cycle template, routing, guardrails, operating model, validation checklist)
- Convergence build doctrine + roadmap ; Product Completion cadrage ; AKG-M5 M5 trajectory
- Doctrine v3 30/32/34/35 ; PRR CURRENT (read) — **Git/code/preuves > PRR**
- Handoff TEST16 précédent : `0b554ae5` / blob `962ef6fd` (branche `sfia/review-handoff`)

---

## 4. Identité runtime

| Champ | Valeur |
|---|---|
| URL | `http://localhost:3020/studio` (LIVE-E2E-01 ; GO mentionnait :3022 historique — instance active = **:3020**) |
| listen_pid | `12656` (shell agent durable `12630`) |
| cwd | worktree D1 corrigé `…/feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app` |
| Product DB | `/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite` (**RO** investigation) |
| Nora Memory B | `/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite` (**RO**) |
| Projet | `prj:d0c81c08-349b-4109-aca7-72bd5d1bae85` |
| Session | `f1-default` |
| Provider | OpenAI LIVE (`gpt-5.6-luna` via env historique) |
| Cursor REAL | OFF |
| :3021 / :3022 | stopped |

Redémarrage contrôlé après édition UI (HMR risk) — **mêmes DB / branche / env OpenAI**. Aucune migration.

---

## 5. Dernière réponse cible (identité, pas transcript)

| Champ | Valeur |
|---|---|
| turn_id | `pt:83caaf5f9376b0d3` |
| seq | 27 |
| role | assistant |
| created_at | `2026-10-31T10:14:32.486Z` |
| user pair | seq 26 `pt:944112569efb7eb6` (demande comparaison) |
| content_len | 2329 |
| presentation | **VALID_JSON** (len 2762) |
| studio_control | NULL |
| blocks | `comparison_table \| recommendation \| section \| plain` |
| pipes in content | oui (GFM) |
| `recommand*` hits | **3** (dans narrative Memory B) |

**Transcript intégral : non publié.**

---

## 6. Matrice diagnostique (A–J)

| # | Question | Constat |
|---|---|---|
| A | Narrative Markdown table ? | **Oui** — GFM `| … |` + séparateurs dans `content` |
| B | Presentation | **VALID** |
| C | Blocks | `comparison_table` **présent** + recommendation/section/plain |
| D | Normalisation DTO | Conservé / persisté Memory B |
| E | Coherence Product Turn | Présentation conservée en JSON ; narrative LIVE ≠ compose |
| F | A1 admission | **Refusée** — `canonicalTextsEquivalent(body, compose)=false` ; compose démarre par chrome eyebrow ; branche fail-closed B |
| G | Résolution UI (avant fix) | **plain** |
| H | Persistance | DTO + content atteignent Memory B (`pilot_transcript_turns`) |
| I | Transport View | content + presentation rehydratés ; resolver → plain |
| J | Restitution (avant) | bubble `<p>` / `nora-canonical-fallback` — **pas** `NoraAdaptivePresentationView` |

**Première étape où la structure « utile » disparaît pour l’UI :**
`resolveAdaptiveAssistantRender` → `usedA1=false` → mode `plain`.
Le DTO **n’est pas perdu** ; A1 le refuse à juste titre. Le renderer A1 n’est donc **pas** la cause du Markdown brut.

Oracle déterministe (sans contenu privé) : `.tmp-sfia-review/live-render-01-oracle.json`

```json
{
  "usedA1": false,
  "mode": "plain",
  "bodyEqCompose": false,
  "tableSegments": 1,
  "tableCols": 4,
  "tableRows": 5,
  "flattenEqualsContent": true,
  "recommandHits": 3
}
```

---

## 7. Origine de la recommandation répétée

**A — toutes les deux (ici trois hits) viennent de la narrative Nora** dans `content`.

Pas B (composition serveur), pas C (conversationGuidance), pas D (double bloc UI), pas E (juxtaposition A1+B).

Le DTO contient **un** bloc `recommendation` ; la narrative LIVE répète des formulations « recommand* ».
**Pas de déduplication floue** appliquée (interdit par contrat).

---

## 8. Cause racine

**CAS 2 (DTO présent mais A1 non admissible) + défaut de rendu B :**

1. OpenAI LIVE a émis narrative GFM **et** un DTO Option C avec `comparison_table`.
2. Memory B persiste les deux correctement.
3. A1 refuse car narrative ≠ `composeCanonicalFromPresentation` (chrome eyebrow + écarts de formulation) — **refus justifié** ; ne pas assouplir.
4. Fallback B affichait le canonique dans un seul `<p>` → pipes/`---` visibles.
5. Répétition recommandation = **modèle**, pas double surface UI.

---

## 9. Correction appliquée (bornée)

**Stratégie :** CAS 2 — capacité de rendu sûre sur **chemin B** pour tableaux GFM, sans inventer de DTO, sans toucher A1, sans parser markdown général, sans nouvelle dépendance.

1. `splitPlainTextWithMarkdownTables` / `flattenCanonicalFallbackSegments`
   — segments text|table ; `raw` exact ; fail-closed si mal formé.
2. `NoraCanonicalFallbackView`
   — réutilise CSS `.table` / `.tableScroll` de la View A1 ; `data-testid="nora-canonical-fallback"` + `nora-canonical-fallback-table`.
3. `ConversationSurface` B path
   — remplace `<p>{plainDisplay}</p>` par `<NoraCanonicalFallbackView plainText={plainDisplay} />`
   — conserve CR-03 `resolveAdaptiveCanonicalDisplayText` + `formatNoraAssistantDisplayText`.

**Non modifié :** oracle A1, compose, orchestrateTurn, prompt, SQLite, routes, Auth.

### Diff utile (résumé)

- NAP : +~110 LOC splitter (voir `.tmp-sfia-review/CORR-NAP-LIVE-RENDER-01.nap.ts.diff`)
- View : +`NoraCanonicalFallbackView` (`.tmp-sfia-review/CORR-NAP-LIVE-RENDER-01.view.tsx.diff`)
- ConversationSurface : branche B → FallbackView (`.tmp-sfia-review/CORR-NAP-LIVE-RENDER-01.conv.tsx.diff`)

---

## 10. Matrice avant / après

| Aspect | Avant | Après |
|---|---|---|
| A1 sur seq27 | refused (justifié) | refused (inchangé) |
| UI mode | plain `<p>` pipes visibles | plain + **HTML `<table>`** si GFM valide |
| Texte canonique | inchangé | inchangé (`flatten === content`) |
| Recommandations dupliquées modèle | visibles | **toujours visibles** (pas de hide) |
| DTO inventé | non | non |
| Anciens transcripts | n/a | **pas réécrits** (rendu seul) |

---

## 11. R01–R16

| ID | Résultat |
|---|---|
| R01 | PASS — DTO admis → A1 View table (test UI) |
| R02 | PASS — B GFM → HTML table, flatten fidèle |
| R03 | PASS — une surface principale |
| R04 | PASS — pas de double couche A1+B |
| R05 | N/A source — canonique en a plusieurs ; **conservées** |
| R06 | PASS — deux reco distinctes non fusionnées |
| R07 | PASS — 4 cols / 5 rows / unités |
| R08 | PASS — A1 refuse → B fidèle |
| R09 | PASS — caractères spéciaux cellules |
| R10 | PASS — STOP / négations / conditions |
| R11 | PASS — pas d’autorité fictive inventée |
| R12 | PASS — pas de CTA gouverné |
| R13 | PASS — rehydrate même DOM table |
| R14 | PASS — suite EYEBROW-01 inchangée (dans 141) |
| R15 | PASS — fidelity CR-03 dans 141 |
| R16 | PASS — pas de rewrite transcript (render-only) |

---

## 12. Tests / logs

```
vitest: 141 passed (d0 108 + ui 33)
tsc --noEmit: exit 0
eslint (fichiers touchés): exit 0
```

Logs :

- `.tmp-sfia-review/live-render-01-vitest.log`
- `.tmp-sfia-review/live-render-01-tsc.log`
- `.tmp-sfia-review/live-render-01-eslint.log`
- `.tmp-sfia-review/live-render-01-oracle.json`

---

## 13. Code / DB préservés

- Bases LIVE : **aucune mutation** (lecture `mode=ro` uniquement)
- Port :3020 redémarré avec identité DB/historique
- WIP D1 antérieur **conservé**
- Aucun commit Product

---

## 14. Fake / Real

| Frontière | État |
|---|---|
| Preuve défaut | OpenAI LIVE dernier tour — lecture locale |
| Nouvelle émission LIVE | **NON** |
| Cursor REAL | OFF |
| Tests | fixtures synthétiques uniquement |
| Niveau | **ROOT CAUSE PROVEN + DETERMINISTIC CORRECTION** |

**UX LIVE PASS : non déclaré** — requiert retest manuel Morris (refresh :3020, même tour seq27 → tableau HTML attendu).

---

## 15. R23 / R24

### R23 — chemin

`OpenAI LIVE → sortie structurée+narrative → normalisation → coherence → Memory B → transport → A1/B resolver → rendu UI`

| Étape | Classement |
|---|---|
| Emission LIVE structurée | **KNOWN GAP** (non démontrée globalement ; ici DTO présent mais ≠ narrative) |
| Normalisation / persist | **BEHAVIOR PROVEN** |
| A1 oracle | **BEHAVIOR PROVEN** (refus justifié) |
| B plain pipes | **BEHAVIOR PROVEN** (défaut) |
| B GFM→table | **COVERAGE VERIFIED** (tests) + **BEHAVIOR PROVEN** (oracle split LIVE) — UX manuelle **pending Morris** |

### R24

Volumes PRR à synchroniser en cycle docs dédié si comportement runtime confirmé Morris : **05 / 06 / 07** (rendu conversationnel A1/B), éventuellement **08** notices.
**Aucune écriture documentaire dans ce cycle.**

Milestone **L3-S2 : OPEN**.
Dette : OpenAI LIVE structured emission non démontrée globalement.

**NEXT :** Critical Review ChatGPT → test manuel Morris comparaison A/B/C → **pas** PR readiness avant validation défaut.

---

## 16. Réserves / gates

- Retest manuel Morris **obligatoire** avant tout claim UX LIVE.
- Emission structurée LIVE ≡ narrative : gap cognitif hors scope (ne pas forcer A1).
- Parser GFM borné (header+sep+rows) — tableaux mal formés restent texte (fail-closed).
- Cellules avec `|` interne non supportées (limite GFM simple) — documentée.
- Status script historique peut mentir si env Fake hérité — identité via `lsof`+cwd+DB paths.

Gates : pas d’Auth change ; pas d’exécution gouvernée ; Cursor REAL OFF.

---

## 17. Verdict

**CORR-NAP-LIVE-RENDER-01 — DETERMINISTIC CORRECTION READY FOR CHATGPT CRITICAL REVIEW**

---

## 18. Instruction ChatGPT

1. Vérifier que le refus A1 sur `pt:83caaf5f9376b0d3` est bien **fidélité** et non bug oracle.
2. Valider que le correctif B (GFM→`<table>`) ne crée pas de seconde réponse ni n’assouplit A1.
3. Confirmer l’absence de dédup recommandation floue.
4. Pointer tout risque de régression CR-03 / EYEBROW / dual-surface.
5. Ne pas accorder READY FOR PR / UX LIVE PASS / G-REAL.
6. Si OK : recommander **uniquement** retest manuel Morris sur :3020 (tour seq27), puis décision Morris pour suite Product.

**Handoff:** REQUIRED / publish-in-cycle — branche `sfia/review-handoff` — publisher canonique.
