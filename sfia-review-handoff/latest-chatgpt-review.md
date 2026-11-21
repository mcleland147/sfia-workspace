# SFIA Review Pack FULL — Ensemble 07 · Mise à disposition RECETTE

**Macro-lot :** R5 / ML4D / Ensemble 07  
**Cycle :** Delivery projet / mise à disposition RECETTE  
**Mode :** FULL / Review Handoff required / publish-in-cycle / L3 mono-fichier  
**Versioning :** NO RELEASE · Gate C OPEN · STABLE NOT AVAILABLE  

## 0. Verdict unique

`ENSEMBLE 07 — RECETTE AVAILABLE WITH GOVERNED RESERVES — MORRIS UAT REQUIRED`

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Branche locale candidat | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD / SHA déployé | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| Tree | `d0ad47ff515676f1c033a39030e886859f7272f7` |
| Message | `feat(next): freeze Ensemble 07 project trajectory candidate` |
| Push projet | **NON** (branche absente de `origin` ; aucun PR/merge) |
| Worktree DEV | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Worktree build RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987` (detached @ SHA) |

Dirty worktree DEV (hors SHA servi) : scripts `_dbg*` / `e07-*` untracked + review pack local — **non inclus dans le build**.

## 2. Références sources

- `projects/sfia-studio-next/governance/SEF.md`
- `projects/sfia-studio-next/governance/roadmap.md`
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`
- `projects/sfia-studio-next/governance/product-versioning.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- Handoff freeze E07 : `sfia/review-handoff@29277518bfd6702a7b358da43c9b0d6402e7d1a1` — `ENSEMBLE 07 PROJECT GIT FREEZE`
- Handoff procédure E06 : `sfia/review-handoff@3bc3af408346385d1fcc6f9dfd203e5c3182473e` — Documents RECETTE Journal V4

## 3. État RECETTE avant / après

### Avant (constaté)

| Élément | Constat |
|---|---|
| URL | `http://127.0.0.1:3200` HTTP 200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| Process | node next-server encore actif ; cwd pointait vers WT E06 |
| BUILD HTML | `t4pjnrn3wGVHZEjhiw6yH` (E06 `aa568cfa`) |
| Worktree E06 | start script / `.next` **absents** (artefact effacé) |
| Container PG | **`sfia-next-recette-pg` absent** ; `:5434` refusé |
| Dump historique validé | Nov20 CUSTOM gzip TOC~282 — counters 24/612/117/197 |

**Action de préservation :** recreation container + restore dump Nov20 + dump frais pré-E07 TOC~281 ; reconstruction WT/build E06 pour rollback code.

### Après

| Élément | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Service | **même** `com.sfia.studio.next.recette.ml4d-ux004` |
| Start | `…/ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh` |
| SOURCE SHA | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| Next BUILD | `armX_D1HJzN6q-4MuDpYv` (confirmé dans HTML `/login`) |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` / container `sfia-next-recette-pg` |
| Migrations | **015 + 016 appliquées** |
| STABLE | non modifié |

## 4. SHA et build

```
sourceSha: 6ecdb987ee867a04ff816b699eb8870ac200db0a
tree:      d0ad47ff515676f1c033a39030e886859f7272f7
nextBuild: armX_D1HJzN6q-4MuDpYv
builtAt:   2026-11-21T00:18:34Z
method:    git worktree detach + npm ci + npm run build (production)
```

Aucun hot-reload ; pas de fichiers dirty DEV dans le worktree build.

## 5. Sauvegarde

| Artefact | Détail |
|---|---|
| Pré-E07 dump | `/Users/morris/Projects/sfia-recette-backups/ml4d-e07-20261121-pre-6ecdb987/sfia_next_recette_ml4_pre_e07.dump` |
| Format | CUSTOM / gzip / TOC entries ~270 sélectionnés / lignes liste 281 |
| Validation | `pg_restore -l` OK ; counters vérifiés avant mig |
| Restore source (container manquant) | dump E06 `recette-backup-20261120T001915Z` — TOC 282, counters 24 projets / 612 msgs / 117 docs / 197 conv |
| Plist backup | `…pre-e07.bak` + `…aa568cfa.pre-e07.bak` |

## 6. Migrations 015 / 016

### Inspection

- `015_trajectory_qualification.sql` — `CREATE TABLE IF NOT EXISTS trajectory_qualification_operations` + indexes + `ALTER trajectory_revisions ADD COLUMN IF NOT EXISTS forecast_json`
- `016_initial_qualification_expected.sql` — `ALTER preparation_project_links ADD COLUMN IF NOT EXISTS initial_qualification_expected boolean NOT NULL DEFAULT false`

Additive / re-runnable ; pas de DROP ; pas de reset.

### Application

1. Schéma pré : 014 présent ; table IQ absente ; colonnes absentes  
2. Backup validé  
3. Appliqué **uniquement** 015 puis 016 via `psql -v ON_ERROR_STOP=1` sur container RECETTE  
4. Post-contrôle : table + colonnes présentes ; counters inchangés (24/612/117/197) ; 24 liens legacy `initial_qualification_expected=false`

## 7. Contrôles DB / conservation

| Check | Résultat |
|---|---|
| CampusNova / CampusFlow | présents |
| Documents CampusFlow | 3 docs + révisions accessibles API |
| Pas de reset / drop projects | OK |
| Isolation DEV (`:3100`) vs RECETTE (`:3200`) | DEV non servi ; cookie `__RECETTE` |
| DB URL lane | `STUDIO_LANE=RECETTE` → `:5434` / `sfia_next_recette_ml4` |

Post-smoke (données de test Pilot A uniquement) : projects 25 / messages 615 / documents 117 / iq_ops 1.

## 8. Service et URL

- URL exacte : **http://127.0.0.1:3200**
- LaunchAgent : `com.sfia.studio.next.recette.ml4d-ux004` (state running)
- Program : `start-recette-ensemble07-6ecdb987.sh`
- Nora : fixture FAKE/DETERMINISTIC conservée depuis `.env.local` (pas de LIVE non autorisé)

## 9. Smoke tests

### Continuité Ensemble 06

| Test | Résultat |
|---|---|
| Login / portfolio Morris | PASS |
| Projet CampusNova / CampusFlow | PASS (HTTP 200, nav) |
| Surfaces Projet / Travail / Journal / Trajectoire | PASS |
| Documents historiques CampusFlow (API 3) | PASS |
| Consultation sans altération Campus* | PASS |

### Nouveautés Ensemble 07 (données smoke Pilot A)

| Test | Résultat |
|---|---|
| SAS / création préparation | PASS |
| Create project `E07 Recette Smoke Trajectoire` | PASS (`CREATED`) |
| IQ initiale | PASS — `PENDING/ENGAGED` → `CLARIFICATION/TERMINAL` |
| Proposition / clarification Nora | PASS (question clarification affichée) |
| Compositeur déverrouillé après clarification | PASS |
| Navigation Travail / Projet / Journal / Trajectoire | PASS |
| Ouverture cycle gouvernée | non exercée (clarification requise ; DETERMINISTIC) |

## 10. Modifications opérationnelles (pas de code candidat)

| Modification | Contenu |
|---|---|
| Worktree build E07 | créé @ SHA figé |
| Start script E07 | sert `next start :3200` + env RECETTE ; conserve fixture Nora |
| LaunchAgent plist | ProgramArguments → start E07 ; WorkingDirectory → WT E07 |
| Container PG | recrée `sfia-next-recette-pg` + volume nommé ; restore dump |
| Migrations 015/016 | appliquées sur DB RECETTE |
| WT E06 reconstruit | rollback code (`aa568cfa`, BUILD `AS5zkgsFkb950zj5D6HJR`) |
| Session smoke Morris | token temporaire DB (TTL 2h) pour lecture continuité |
| Projet smoke | `proj_b86f3699-628c-4435-9bc5-f97ac249b59e` (Pilot A) |

**Aucun diff produit** sur le SHA `6ecdb987` ; aucun commit projet.

### Diff opérationnel (plist — non secret)

```diff
- ProgramArguments: …/ensemble06-recette-build-aa568cfa/start-recette-ensemble06-aa568cfa.sh
- WorkingDirectory: …/ensemble06-…/web
+ ProgramArguments: …/ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh
+ WorkingDirectory: …/ensemble07-…/web
+ StandardOut/Err → WT E07 launchd.*.log
```

## 11. Manifeste

Voir `…/ensemble07-recette-build-6ecdb987/.sfia-recette/RECETTE-MANIFEST.md` (copie sémantique ci-dessus §3–§9).

## 12. Rollback

1. **Code :** restaurer plist `.aa568cfa.pre-e07.bak` → start E06 ; kickstart ; vérifier BUILD `AS5zkgsFkb950zj5D6HJR`.  
2. **Schéma :** E06 compatible avec 015/016 additives (ignore).  
3. **Données :** si besoin d’état pré-smoke/pré-E07 → `pg_restore --clean --if-exists` du dump `sfia_next_recette_ml4_pre_e07.dump`.  
4. Conséquence restore données : perte du projet smoke E07 et messages associés.

## 13. Réserves

- FIX-03 : réconciliation prouvée (DEV) ; autonomie non prouvée  
- Nora LIVE : non prouvée / non lancée  
- Clôture conversationnelle navigateur : non prouvée  
- Fidélité UX Figma : revue Morris  
- Volume PG live manquant au pré-check → restore dump Nov20 (delta post-dump éventuel non récupérable)  
- NO RELEASE / Gate C OPEN / STABLE unavailable  

## 14. Confirmation gouvernance

- Aucun push branche projet Ensemble 07  
- Aucun PR / merge / modification `main`  
- Aucun commit produit nouveau  
- Handoff L3 uniquement sur `sfia/review-handoff`  
- Mise à disposition ≠ adoption produit  

## 15. Instruction ChatGPT

Relire le handoff distant publié sur `sfia/review-handoff` (`sfia-review-handoff/latest-chatgpt-review.md`) : vérifier SHA/blob, cohérence RECETTE AVAILABLE, migrations 015/016, sauvegarde/rollback, smoke, et réserves gouvernées. Confirmer que Morris peut ouvrir `http://127.0.0.1:3200` pour UAT Ensemble 07.
