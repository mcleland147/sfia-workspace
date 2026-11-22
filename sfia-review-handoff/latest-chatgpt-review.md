# SFIA Studio Next — Review Pack FULL — Ensemble 08 FINALISATION

| Champ | Valeur |
| --- | --- |
| Date/heure | 2026-11-22 06:13 CET |
| Fuseau | Europe/Paris |
| Macro-lot | FINALISATION INTÉGRÉE — Figma 11.06 G5 + GitHub REAL WRITE policy + RECETTE |
| Profil | CRITICAL · NO RELEASE · PRODUCT VERSIONING: NO RELEASE |
| GO Morris | Une seule exécution intégrée autorisée (local edits/tests/commit/build/cutover/L3) |
| Push projet | **NONE** |
| STABLE / ADOPTED | **NON** |

---

## 1. Git Truth

### Initial (pré-écriture ce lot)

| Champ | Valeur |
| --- | --- |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD initial | `35906960e39eb617d39c76bf991f802ece4865ff` |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Dirty initial | POST-UAT 02 UX + preuves cutover/docs (préservé, aucun reset/clean/rebase) |
| RECETTE avant | SHA `9f346391…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |

### Final (worktree projet)

| Champ | Valeur |
| --- | --- |
| HEAD docs | `7a609b88aabe57d89715ba8defddd783216a1190` (docs cutover only) |
| **SOURCE_SHA runtime (freeze)** | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| **TREE** | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| **BUILD_ID** | `zKGLfPHM1TMilec4qglJv` |
| Parent freeze | `35906960e39eb617d39c76bf991f802ece4865ff` |
| Untracked résiduel | `.tmp-sfia-review/chatgpt-review.md` (ce pack, non produit) |

---

## 2. Sources et décisions

- Routing / execution template : v1.4 / v2.6 (contrat appliqué)
- Contrats E08 candidats + as-built + manifeste cutover
- Figma méthodologie 1.1 + protocole fidélité runtime
- Décision sémantique Nora 12/11/2026 (qual) — non re-ouverte
- Handoff antérieur `sfia/review-handoff` @ `0759cce8…` (POST-UAT 02 UX non déployé)

---

## 3. AS-IS → corrections

### UX 11.06

| Écart | AS-IS | TO-BE / Fix |
| --- | --- | --- |
| Hauteur panneaux | ~388.56 px | `min-height: 610px` (≥1280) |
| y panneaux | ~298.33 | header gap 8 + banner 44 → y≈292.78 (Δ0.22) |
| Banner | ~45.5 | min-height 44 · line-height 16px |
| Acquis POST-UAT 02 | 858/482, microcopy, secondary buttons, nav active | **conservés** |

### GitHub REAL

| Capacité | AS-IS | BLOCKER | OWNER | CHANGE | TEST | REAL PROOF | RESERVE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| REAL READ | Config App RECETTE + allowlist READ | — | D9 | inchangé | unit/config | smoke config | OAuth Morris UAT |
| REAL WRITE gate | `ALLOW_MUTATIONS=documentary` seul | READ≈WRITE implicite | D9 | `GITHUB_APP_WRITE_ALLOWED_REPOS` ⊂ READ ; `assertWritableRepo` | unit | **NOT PROVEN** | sandbox+GO |
| publicationWriteGate | documentary suffit | WRITE list vide non bloquée | D3/D9 | documentary **et** WRITE list non vide | unit | N/A | — |
| Mutations RECETTE | OFF | — | Ops | start script force OFF + WRITE list vide | script | NOT PROVEN | volontaire |
| Merge REAL | OFF | mandat distinct + gate | D6/D7/D9 | inchangé | hist. | NOT PROVEN | GO merge |
| SCRIPTED pubs | PROVEN hist. | — | D7 | inchangé | PG hist. | N/A | — |

**STOP frontière externe :** aucun dépôt sandbox nommé dans le GO → aucune mutation GitHub externe exécutée. `mcleland147/chantiers360` / `sfia-workspace` **non** auto-sélectionnés en WRITE.

---

## 4. Blast radius

- UI : `IntegrationsPanel`, `tokens.css` 11.06, shell nav active (acquis)
- GitHub : `github-app-config.ts`, `real-github-provider.ts`, `publication-effect-restitution.ts`
- Tests unit/e2e associés
- Docs construction E08 (non normatif)
- Ops : LaunchAgent RECETTE → nouveau worktree détaché

Hors périmètre : governance/, method/, main, push projet, STABLE, migrations DB.

---

## 5. Diffs / créations (freeze `f1907aad`)

27 files · +1070 / −173 (commit message : finalize E08 11.06 G5 and governed REAL WRITE policy).

Créations notables :
- `figma-evidence/finalisation-11.06-g5-matrix.md`
- `figma-evidence/post-uat-02-11.06-mapping.md` + PNG/runtime
- `tests/e2e/ensemble08-integrations-1106.spec.ts`
- `tests/unit/integrations-panel-1106.test.ts`
- `resolveWriteAllowedFullNames` / `allowedWriteFullNames` / `assertWritableRepo`

---

## 6. Figma L0/L1/L2 + G5

| Champ | Valeur |
| --- | --- |
| File | `itgvCulInEnFY6DvgIegvP` |
| Node | `1095:339` |
| Session | `19ec70b7-b1f9-471d-82da-5b82221cdf4f` |
| PNG oracle SHA256 | `d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335` |
| Mapping | `post-uat-02-11.06-mapping.md` + `finalisation-11.06-g5-matrix.md` |
| Mesures | `runtime/runtime-11.06-dom-measures.json` |

### F2 1680×970 (extrait)

| Rectangle | Figma | Runtime | Δ | F2 |
| --- | --- | --- | --- | --- |
| Rail w | 246 | 246 | 0 | PASS |
| Contenu x | 284 | 284.39 | 0.39 | PASS |
| Card w | 858 | 857.48 | 0.52 | PASS |
| Card h | 610 | 610 | 0 | PASS |
| Card y | 293 | 292.78 | 0.22 | PASS |
| Explain w | 482 | 481.73 | 0.27 | PASS |
| Banner h | 44 | 44 | 0 | PASS |
| Boutons | 205×42 | 205×42 | 0 | PASS |

Viewports : 1680×970, 1280×970, 390×844, 320×568, zoom 200%.

Variante : note WRITE hors maquette (Pilote, non cockpit) — documentée.

---

## 7. Tests

| Suite | Commande | Résultat | Env |
| --- | --- | --- | --- |
| Unit | `npx vitest run tests/unit` | **806/806 PASS** | DEV |
| PG | `npm run test:integration` | **538/538 PASS** | DEV PG :5433 |
| Playwright 11.06 | `npx playwright test tests/e2e/ensemble08-integrations-1106.spec.ts` | **3/3 PASS** | DEV SCRIPTED |
| tsc | `npx tsc --noEmit` | PASS | DEV |
| lint | `npm run lint` | warnings préexistants only | DEV |
| REAL mutation externe | — | **NOT RUN / NOT PROVEN** | sandbox/GO absent |

---

## 8. Configuration (sans secrets)

| Variable | RECETTE runtime |
| --- | --- |
| `STUDIO_LANE` | `RECETTE` |
| `STUDIO_GITHUB_PROVIDER` | `real` (depuis env lane) |
| `STUDIO_GITHUB_ALLOW_MUTATIONS` | **vide** (forcé par start script) |
| `GITHUB_APP_WRITE_ALLOWED_REPOS` | **vide** (forcé) |
| App / installation | profil RECETTE (IDs lane — non secrets) |
| READ primary | `mcleland147/chantiers360` (profil) |
| Port | 3200 |
| DB | `sfia_next_recette_ml4` @ 5434 |

---

## 9. Freeze + build détaché

| Champ | Valeur |
| --- | --- |
| Commit freeze | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-final-build-f1907aad` |
| Build | `npm ci` + `npm run build` sur HEAD détaché clean |
| BUILD_ID | `zKGLfPHM1TMilec4qglJv` |
| Association | SHA ↔ TREE ↔ BUILD_ID vérifiée (HTML `<!--zKGLfPHM1TMilec4qglJv-->`) |

Docs cutover ultérieur `7a609b88…` **n'est pas** la source runtime.

---

## 10. Backup / restore / cutover

| Élément | Valeur |
| --- | --- |
| Backup | `ml4d-e08-pre-final-cutover-20261122T051131Z-from-9f346391.sql.gz` |
| Bytes / SHA256 | 717905 / `ac2bb78fd59081e2a9677b0bd33c4cc0236109080ee1f74e623b3311acc34f58` |
| Restore proof | `sfia_next_recette_restore_proof_e08_final` → projects=26 messages=641 → DROP |
| Cutover | **EXECUTED** — même LaunchAgent, port 3200, DB intacte |
| Servi | BUILD `zKGLfPHM1TMilec4qglJv` · SHA `f1907aad…` |
| Rollback | plist bak + artefact `9f346391` + `ROLLBACK-TO-E08-9f346391.sh` (**non exercé**) |

Inventaire post-cutover : projects=26 documents=117 conversations=205 messages=641 · Equip'Campus présent.

Smokes HTTP : `/login` `/portfolio` `/settings/integrations` → 200 · 1 listener `:3200`.

---

## 11. Fake / Real

| Frontière | Niveau |
| --- | --- |
| G5 11.06 F2 | DETERMINISTIC PROVEN (DEV measures) |
| Unit/PG | DETERMINISTIC PROVEN |
| WRITE≠READ policy | DETERMINISTIC PROVEN |
| GitHub REAL READ RECETTE | BOUNDARY (config active ; UAT Morris) |
| GitHub REAL WRITE / MERGE | **NOT PROVEN** |
| Nora LIVE E2E | **NOT PROVEN** |
| SCRIPTED ≠ REAL | respecté |

---

## 12. Risques / réserves / gates Morris

1. UAT visuelle 11.06 (Morris)
2. Parcours Git OAuth Morris + App
3. Nommer sandbox WRITE + GO mutation bornée pour REAL PROVEN
4. Nora LIVE conduit (sans WRITE si non autorisé)
5. Push/PR projet hors cycle

---

## 13. Gates checklist

| Gate | Statut |
| --- | --- |
| G1 Git Truth | PASS |
| G2 Figma G5 | PASS (F2) |
| G3 GitHub REAL config | PASS (séparation READ/WRITE) |
| G4 Autorité D6/D7/D9 | PASS (inchangé + gates renforcés) |
| G5 Preuves | PASS det/PG/PW ; REAL WRITE NOT PROVEN |
| G6 Freeze | PASS |
| G7 ENV-01 | PASS |
| G8 Cutover | PASS (exécuté) |
| G9 Smokes | PASS (HTTP/identité/DB) |
| G10 Handoff | ce pack → L3 |
| G11 UAT Morris | **REQUIRED** |

---

## 14. Verdict unique

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

Runtime servi : `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` / TREE `1e93363b…` / BUILD `zKGLfPHM1TMilec4qglJv` sur `http://127.0.0.1:3200`.

REAL WRITE : capacité technique gouvernée livrée ; mutations externes **NOT PROVEN** ; WRITE **OFF** en RECETTE jusqu’à sandbox+GO.
