# SFIA Studio Next — Diagnostic CI PR #678 (g4-b1-b4 nav-pilotage) — Review Pack LIGHT

**Date / heure :** 2026-11-15 19:20 CET (2026-11-15T18:20Z approx.)
**Type :** QA / Investigation technique · **NO RELEASE** · ENV-01 READ-ONLY
**Profil SFIA :** STANDARD
**Review Pack :** LIGHT — mono-cycle
**Review Handoff :** required / publish-in-cycle
**Mandat :** GO diagnostic 15/11/2026 — analyse seule · **aucune** correction / commit projet / push projet / merge / test mutatif / redeploy

---

## 0. Verdict

**ROOT CAUSE PROVEN — FIX GO REQUIRED**

La navigation rail globale vers Pilotage utilise un `Link` Next.js qui **ne renseigne pas** `pendingSurfaceRef`. Pendant `load()` initial du projet, une normalisation `router.replace(...?surface=travail)` peut **écraser** une navigation concurrente vers `?surface=pilotage`. Le test Playwright (oracle B1) observe exactement ce symptôme. Le tree `web/` est **identique** entre candidat ML4C, `main` et PR #678 — pas de régression introduite par les docs #678.

Aucune correction effectuée. Aucune CI verte déclarée. Aucune clôture ML4C.

---

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| `origin` | `https://github.com/mcleland147/sfia-workspace.git` |
| Branche locale | `fix/next-semantic-intent-convergence-20261112` |
| HEAD / tree local | `11f7077e` / `71e052cf` |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` only |
| `origin/main` | `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| PR #678 HEAD | `968ea252fb46732d0862e3809390b1a36e6f991b` · OPEN · docs-only (5 files) |
| Handoff tip (pré) | `8083b61d` |

### Tree `projects/sfia-studio-next/web`

| Ref | Tree web |
| --- | --- |
| Candidat `11f7077e` | `f2427adcd31b044115f85cdc48cfb6dd157d9551` |
| `main` `05e71a71` | **identique** |
| PR #678 `968ea252` | **identique** |

→ Échec Playwright **non causé** par un diff applicatif de #678.

---

## 2. Sources et SHA

Relues depuis le tree web commun (`f2427adc` / HEAD local = candidat) :

- `web/src/app/projects/[projectId]/page.tsx` — `pendingSurfaceRef`, `selectSurface`, `syncSurfaceUrl`, `load()`, effet `searchParams`
- `web/src/components/shell/StudioShell.tsx` — `Link` `data-testid=nav-*`
- `web/src/components/shell/studio-rail.ts` — href `?surface=`
- `web/src/components/figma/ProjectChrome.tsx` — boutons → `onSelectSurface`
- `web/tests/e2e/g4-b1-b4-correctifs.spec.ts` L47–54
- as-built G4 B1–B4 ; gouvernance ENV/versioning (contexte NO RELEASE)
- CI : run [43739913521](https://github.com/mcleland147/sfia-workspace/actions/runs/43739913521) (attempts 1–2) ; comparaison [43732809012](https://github.com/mcleland147/sfia-workspace/actions/runs/43732809012) (#676) et [43736293441](https://github.com/mcleland147/sfia-workspace/actions/runs/43736293441) (post-merge)

---

## 3. Reproduction documentée (CI)

| Tentative | projectId | Attendu | Observé |
| --- | --- | --- | --- |
| attempt 1 | `proj_c86afd30-f1ee-43d2-83a0-8b1fc59ab4ce` | `?surface=pilotage` | `?surface=travail` |
| attempt 2 | `proj_2d061df5-b810-4e75-9f56-20a923ba6ea2` | `?surface=pilotage` | `?surface=travail` |

- Fichier : `g4-b1-b4-correctifs.spec.ts:54` — `nav-pilotage` click puis `toHaveURL(...pilotage)`
- Bilan Playwright #678 : **27 PASS / 1 FAIL** → Required Gate FAIL
- Autres étapes (TS, ESLint, Build, unit, PG) : PASS
- Artefacts Playwright GitHub : **aucun** uploadé (`artifacts: []`) — pas de trace timeline navigateur récupérable
- Error Context cité dans les logs (`error-context.md`) **non téléchargeable** sans artefact

Transition scénario : login → prep → constitute → create project → `waitForURL(**/projects/**)` → assert href travail → **click `nav-pilotage`** → FAIL.

---

## 4. Analyse des hypothèses

### H1 — Concurrence `load()` vs `Link` rail (prioritaire) — **PROUVÉE au code + compatible symptôme**

1. Après création, URL projet souvent **sans** `surface` (ou pas encore normalisée).
2. `ProjectPage` monte → `useEffect` lance `load()` (fetch async).
3. Le test clique **immédiatement** `StudioShell` `Link` → `/projects/{id}?surface=pilotage`.
4. Ce `Link` **ne passe pas** par `selectSurface()` → **`pendingSurfaceRef` reste `null`**.
5. Fin de `load()` : lit `window.location` ; si `surface` absente/invalide → `syncSurfaceUrl(effectiveSurface ?? "travail", "replace")`.
6. Avec `pendingSurfaceRef === null` et URL encore sans `surface` (navigation Link non commitée) → **`replace(?surface=travail)`** écrase Pilotage.

Commentaire code L116–117 / L419–422 : protection conçue pour « chrome/rail while load() in flight », mais seule la voie **`selectSurface`** (ProjectChrome) pose le pending. Le rail global (`StudioShell` Link) n’est **pas** couvert.

### H2 — Deux propriétaires de navigation — **PROUVÉ**

| Voie | Mécanisme | Pose `pendingSurfaceRef` ? |
| --- | --- | --- |
| ProjectChrome `surface-*` | `onSelectSurface` → `selectSurface` → `router.push` | **Oui** |
| StudioShell `nav-*` | Next `<Link href=?surface=…>` | **Non** |
| `load()` normalisation | `router.replace` si surface manquante | Peut gagner la course |

### H3 — Défaut de préparation Playwright seul — **NON suffisant comme cause racine**

Le scénario suit l’oracle B1 (rail réel). Attendre plus longtemps masquerait la race sans la corriger (interdit comme substitut). Le test révèle un défaut produit ; ne pas l’assouplir.

### H4 — Régression docs #678 — **RÉFUTÉE**

Tree web identique cand/main/#678. Diff #678 = 5 fichiers docs/gouvernance uniquement.

### H5 — Pourquoi #676 / post-merge PASS (28 passed) avec même web ?

Course **timing-dépendante** : si `load()` termine et normalise `travail` **avant** le clic, le `Link` vers pilotage n’est plus concurrent → PASS. CI #678 plus lente/chargée → fenêtre de course ouverte → FAIL ×2. Preuve : même SHA web, résultats Playwright divergents (28 vs 27+1).

---

## 5. Preuves exactes et limites

**Preuves :**

- Identité tree web cand/main/#678
- Logs CI attempt1/2 : même assertion, deux `projectId`, reçu `surface=travail`
- Code : `selectSurface` set pending ; `StudioShell` Link sans pending ; `load()` replace si `!rawSurface`
- as-built B1/B2 documente sync URL + anti-race via lecture live — incomplete pour Link rail
- #676/#merge : `28 passed` Playwright ; #678 : `27 passed / 1 failed`

**Limites :**

- Pas de trace Playwright / CDP / ordre clic→push→replace dans artefacts CI
- Ordre exact runtime de la course **inféré** (mécanisme code + symptôme), non filmé
- Pas de re-exécution locale mutative (hors mandat)

---

## 6. Cause confirmée

**Cause racine :** synchronisation d’état / concurrence runtime — normalisation `load()` → `replace(?surface=travail)` non protégée contre la navigation **Link** du rail global, faute de pose de `pendingSurfaceRef` (ou d’un propriétaire unique d’intention de surface).

Classification contrat : concurrence runtime **confirmée** (mécanisme) + synchronisation d’état incorrecte (couverture pending incomplète). Pas un affaiblissement d’oracle légitime.

---

## 7. Blast radius

| Surface / comportement | Risque |
| --- | --- |
| Pilotage / Travail / Journal / Documents (rail) | Même race au **premier chargement** projet si clic rail pendant `load()` |
| ProjectChrome boutons | Moins exposé (pending posé) |
| Back/Forward / refresh / deep-link | Effet `searchParams` OK **après** load ; deep-link initial dépend de la même normalisation |
| `documentId` / révision | Remplace peut dropper query si course pendant load document |
| Reprise projet | Même montage `ProjectPage` |
| G4 B1–B4 non-régression | Oracle B1 fragile tant que race ouverte (flake CI) |

---

## 8. Contrat correctif recommandé (**ne pas implémenter ici**)

**Objectif :** un seul propriétaire d’intention de surface pendant le chargement projet ; oracle B1 inchangé.

**Correctif minimal (orientation) :**

1. Faire en sorte que toute navigation rail projet (`nav-pilotage`, `nav-travail`, `nav-journal`, `nav-document`, …) **enregistre la même intention** que `selectSurface` **avant/avec** le changement d’URL — p.ex. :
   - passer le rail projet par le même contrôleur que ProjectChrome (boutons/`selectSurface` + `push`), **ou**
   - contexte/callback partagé `setPendingSurface(surface)` invoqué depuis le rail **sans** créer un second store d’état durable concurrent.
2. Conserver `load()` : préférer `pendingSurfaceRef` / URL live ; ne normaliser en `travail` que si **aucune** intention pending et surface absente.
3. **Interdit :** augmenter timeout Playwright ; skip/disable/assouplir le test ; second propriétaire d’état durable de navigation ; toucher décisions/contrats produit hors code UI.

**Stratégie de tests (après GO fix) :**

- Garder `g4-b1-b4-correctifs.spec.ts` tel quel (oracle).
- Ajouter test unitaire/déterministe de la politique : « load in-flight + intention pilotage → pas de replace travail ».
- Optionnel : harness simulant fetch lent + navigation rail (sans allonger timeout CI comme « fix »).
- Rejouer Playwright BROWSER FAKE sur le SHA correctif ; comparer Required Gate.

**Fichiers potentiellement concernés :**

- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/components/shell/StudioShell.tsx` (et éventuellement `studio-rail.ts`)
- `web/src/components/figma/ProjectChrome.tsx` (alignement API)
- tests unitaires navigation/surface ; e2e existant **non affaibli**

---

## 9. GO Morris nécessaires

1. **GO FIX** borné — correctif navigation surface + tests (cycle séparé)
2. Re-qualification CI sur SHA correctif (pas relance aveugle #678 sans fix)
3. Merge #678 documentaire : **après** CI verte ou arbitrage explicite « docs malgré flake » — **non recommandé** tant que Required Gate FAIL sur le même job Next
4. Toujours : pas ML4D, pas STABLE, pas clôture ML4C via ce diagnostic

---

## 10. Comparaison CI

| Run | SHA | Playwright | Note |
| --- | --- | --- | --- |
| 43732809012 (#676) | `11f7077e` | **28 passed** | même tree web |
| 43736293441 (merge) | `05e71a71` | **28 passed** | même tree web |
| 43739913521 att.1–2 (#678) | `968ea252` | **27+1 FAIL** g4-b1-b4 | docs only · même tree web |

---

## 11. Review Handoff L3

| Champ | Valeur |
| --- | --- |
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Message | `docs(review-handoff): diagnose ML4C PR678 Playwright pilotage nav race` |
| Worktree | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` |

*(SHAs après publish.)*

---

## 12. Verdict final

**ROOT CAUSE PROVEN — FIX GO REQUIRED**

Pas de correction dans ce cycle. Pas de CI verte. Pas de clôture ML4C. Pas de merge #678.
