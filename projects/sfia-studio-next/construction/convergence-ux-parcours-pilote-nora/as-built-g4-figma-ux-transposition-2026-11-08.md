# As-built — G4 Figma UX transposition (2026-11-08)

Branche : `feat/next-convergence-ux-g4-construction`
Périmètre : `projects/sfia-studio-next/`
Base fonctionnelle conservée : F1/A1/A2 + correctifs B1–B4
G2 pack : `VERIFY PASS` (20 PNG, L2, railEvidence) — non modifié
F2 / G5 : **NOT RUN** (revue visuelle exclusive Morris)

## Livrables code

| Zone | Fichiers |
|---|---|
| Tokens / primitives | `web/src/components/figma/tokens.css`, `ProjectChrome.tsx` |
| Shell F1 | `StudioShell.tsx`, `studio-rail.ts` (railEvidence-aware) |
| Portefeuille | `web/src/app/portfolio/page.tsx` |
| Sas | `web/src/app/preparations/[preparationId]/page.tsx` |
| Projet | `web/src/app/projects/[projectId]/page.tsx` |
| Layout | `web/src/app/layout.tsx` importe `tokens.css` |

## Matrice 20 frames → runtime

| # | Frame | Route / surface / état | Composant rendu | Statut |
|---|---|---|---|---|
| 01 | `94:50` | `/portfolio` | `portfolio/page.tsx` hero+stats+footer | IMPLEMENTED |
| 64 | `158:264` | `/portfolio` empty | empty two-col panels | IMPLEMENTED |
| 65 | `158:336` | `/portfolio` ready | project card grid | IMPLEMENTED |
| 73 | `158:912` | `/portfolio` preps (y compris vide) | reprise keyset A1 | IMPLEMENTED |
| 02 | `94:135` | `/preparations/:id` | sas travail fig-workspace | IMPLEMENTED |
| 74 | `159:145` | `/preparations/:id?resume=1` | même page, frame/rail projet | IMPLEMENTED |
| 03 | `94:214` | `/projects/:id?surface=travail` fil long | `fig-workspace` Nora | IMPLEMENTED |
| 109 | `161:216` | travail, 0 message | empty first-exchange copy | IMPLEMENTED |
| 110 | `161:288` | travail, ≤2 messages | même workspace (état court) | IMPLEMENTED |
| 216 | `282:468` | travail ≤390 CSS | reflow `.fig-nora-responsive` | IMPLEMENTED (responsive, pas artboard 1350) |
| 217 | `282:492` | travail + pending | tag interruption + sticky composer | IMPLEMENTED (responsive) |
| 04 | `94:370` | `surface=document` | bibliothèque + inspect | IMPLEMENTED |
| 18 | `97:359` | document inspect READING | `document-inspect` | IMPLEMENTED |
| 89 | `160:175` | bibliothèque liste | section `data-figma-frame=160:175` | IMPLEMENTED |
| 92 | `160:391` | `docUi=CONFLICT` | conflit + rebase A2 | IMPLEMENTED |
| 205 | `241:385` | inspect + revision meta | chip historique vN | PARTIAL (pas panneau historique dédié) |
| 05 | `94:515` | `surface=journal` | sujets + acquis | IMPLEMENTED |
| 40 | `129:72` | journal col. acquis / décisions note | panel + renvoi Pilotage D6 | IMPLEMENTED |
| 22 | `125:33` | `surface=pilotage` | stats + `PilotagePanel` | IMPLEMENTED |
| 24 | `127:106` | pilotage CKI/cycle | panneau PilotagePanel | IMPLEMENTED |

**Couverture déclarée :** 19/20 IMPLEMENTED + 1 PARTIAL (`241:385`).
Verdict produit pour Morris : surfaces navigables ; **acceptation visuelle = Morris seul**.

## RailEvidence (corrections G2 appliquées)

| Contexte | Variant |
|---|---|
| `/portfolio`, `/login` | personnel |
| `/preparations/:id` | personnel |
| `/preparations/:id?resume=1` | projet (159:145) |
| projet `travail` | conversation |
| projet `document` | inspection |
| projet `journal` | personnel (94:515) |
| projet `pilotage` | projet |

## QA technique (rejoué)

- `tsc --noEmit` PASS
- unit 123 PASS
- integration PG 144 PASS (cycle précédent + build OK)
- `npm run build` PASS
- Playwright `g4-b1-b4-correctifs.spec.ts` 1 PASS (lane E2E isolée)
- `bash scripts/verify-g2-pack.sh` VERIFY PASS
- F2/G5 : NOT RUN

## ENV-01

DEV worktree G4, port **3100**, auth FAKE `Pilote A (DEV)`.
NO RELEASE. Pas de push projet / PR / RECETTE.
