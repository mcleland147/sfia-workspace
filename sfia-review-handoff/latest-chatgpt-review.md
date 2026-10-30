# ChatGPT Review Pack — BALISE LIVE-E2E-01 Controlled Runtime Recovery

**Date/heure UTC :** 2026-10-30T17:49:30Z
**Cycle unique :** AKG-M5 / L3-S2 / LIVE-E2E-01 — CONTROLLED ENVIRONMENT RECOVERY
**Profil :** CRITICAL
**Typologie :** QA / RUN / CONTROLLED LOCAL RECOVERY
**GO Morris exact :** Reprendre la campagne BALISE existante avec code runtime intégrant Option C ; bases historiques conservées au TEST-15 ; configuration LIVE/REAL initiale ; démarrage contrôlé et validation de l'environnement.

**Verdict unique :** `READY FOR BALISE INTERACTIVE TEST-16 REVIEW`

**Anti-claims :** TEST-16 non exécuté · aucune conversation Nora · aucun Cursor Agent REAL · aucune Confirmation/Attempt EC TEST-15 · aucun changement Product/code · G-REAL NOT GRANTED · runtime v3 NON ADOPTED · EP-S2-08/05 non prouvés · L3 GLOBAL OPEN.

---

## 1. GO / Scope

### Autorisé (exécuté)
Git Truth ; sources ; investigation runtime/env ; arrêt ciblé :3020 ; sauvegarde DB ; restauration LIVE process-local ; REAL=1 ; démarrage contrôlé ; migration additive Option C via code Product ; HTTP non mutatif ; Review Pack FULL ; handoff L3.

### Interdit (respecté)
Nouveau Project/campagne ; reset/suppression DB ; correction TEST-15 ; mutation Product/doctrine/PRR ; écriture `.env.local` partagé ; Cursor REAL launch ; EC confirm/reject/delete ; TEST-16 ; Git projet PR/merge ; G-ACTIVATION OA-exclusive.

---

## 2. Git Truth — initial / final

| Élément | Valeur |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Baseline `main` ChatGPT | `ca1c9869f905b394808c953649910d60fbfcb984` |
| `git ls-remote origin refs/heads/main` | `ca1c9869f905b394808c953649910d60fbfcb984` — **inchangé** |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| Branche / HEAD | `feat/akg-m5-nora-adaptive-presentation` @ `1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a` |
| Product app vs main | `git diff HEAD ca1c9869 -- projects/sfia-studio/app` = **vide** (Option C #628 présent) |
| `.env.local` symlink | feat → `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local` (**partagé**, non modifié) |
| Docs WT | `docs/akg-m5-nap-option-c-c14-r24-truth-sync` @ `6e60d839` — dirty uniquement `.tmp-sfia-review/chatgpt-review.md` |
| Handoff WT | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` — `sfia/review-handoff` |
| Tip handoff pré-cycle | `01147381585bc830e0d104736d70b3e2d49140c3` / blob `ac2a9880…` |

Aucune checkout/rebase/reset/pull/clean/stash.

---

## 3. Handoffs historiques réutilisés (commits immuables)

| Commit | Usage |
|---|---|
| `25b7bb720e67a5f1956c812eb32e3499d63824b4` | Isolation persistence LIVE-E2E-01 ; chemins Product/Nora ; REAL=1 ; DET OFF ; managed LIVE ; `npm start` |
| `6b3ef8ce708774d4b6290e74623ee220e2fb81e3` | Studio start + OAuth prep ; REAL=1 ; OPS1 ABSENT |
| `1e61d1642168c67f403593b43bb242d168b88eaf` | TEST-15 EC unrequested |
| `01147381585bc830e0d104736d70b3e2d49140c3` | Audit reprise BLOCKED (baseline ce cycle) |

---

## 4. Sources lues

SFIA v2.6 templates/routing/rules/operating-model/validation-checklist ; convergence doctrine/roadmap ; Product Completion C1 ; M5 trajectory requalification ; doctrine v3 30/32/34/35 ; CKC `09-qa-validation.md` (CONTENT VALIDATED, no runtime authority) ; PRR README + volumes 03,05–09 ; code `paths.ts`, `db.ts`, `sessionPaths.ts`, `productSqliteSession.ts`, `studio-runtime-preflight.ts`, `studioRuntimeProfilePreflight.ts`, `package.json`, `.env.example`.

**R23 :** composants = Next runtime + Product OA SQLite + Nora Memory B + Better Auth + OpenAI LIVE config + Cursor REAL flag + managed LIVE-E2E clone. Flux = preflight → build → npm start process-local → HTTP non mutatif. Invariants = prepared≠confirmed≠executed ; G-REAL not granted ; shared `.env.local` non écrit.

**R24 :** **NO SEMANTIC IMPACT** Product/docs. Aucun écart code/PRR forçant une mise à jour documentaire. Migration Option C additive = comportement #628 attendu.

---

## 5. Runtime initial → final

### Initial (audit / démarrage cycle)
| Champ | Valeur |
|---|---|
| Port | 3020 |
| Process | next-server v15.5.20 PID **33692** / parent npm **33664** (`next dev`) |
| CWD | feat `…/sfia-studio/app` |
| Provider process | **fake** |
| DB ouverte | `new-project-campaign-01/.../oa-product.sqlite` |
| Verdict antérieur | BLOCKED — BALISE RESUME NOT QUALIFIED |

### Arrêt contrôlé
- Cible confirmée : owner morris ; CWD feat ; DB new-project-campaign-01 ; GO Morris = remplacer :3020 pour BALISE.
- `SIGTERM` parent npm 33664 → port libre en 2s ; handles SQLite other campaign fermés.
- SHA other campaign **inchangés** après stop.

### Build
- `.next` cassé (`Cannot find module './5611.js'` sur premier `npm start`) → `npm run build` OK (~21s) sur worktree feat.
- LIVE DB SHA inchangés par le build.

### Final
| Champ | Valeur |
|---|---|
| Port | **3020 LISTEN** |
| PID | **58031** next-server v15.5.20 |
| Parent | 58007 `sh -c preflight && next start` / 57994 `npm start` |
| CWD | feat `…/sfia-studio/app` |
| Code | HEAD `1c3a8d9e` ≡ Product main #628 |
| Mode | `npm start` (preflight PASS puis `next start`) |

---

## 6. Configuration LIVE / REAL

### Stratégie isolation (G04)
**Process-local env overrides** — **aucune écriture** du `.env.local` partagé (symlink → workspace `new-project-campaign-01`).
Fidélité historique via exports au lancement (preuves process via `sysctl KERN_PROCARGS2` sur PID 58031).

### Process effective (next-server 58031)
| Variable | Valeur process |
|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | `…/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite` |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | `…/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite` |
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | `…/.sfia-exec/live-e2e-01/managed-repos` |
| `SFIA_STUDIO_CURSOR_REAL` | **1** |
| `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` | **ABSENT** |
| `OPS1_CONVERSATION_PROVIDER` | **ABSENT** (pas de Fake) |
| `OPS1_CURSOR_REAL` | **ABSENT** |
| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | `mcleland147/sfia-studio-live-e2e` |
| Remote managed | `https://github.com/mcleland147/sfia-studio-live-e2e.git` (HEAD `b6398342…`) |

### `.env.local` partagé (non modifié)
Conserve `new-project-campaign-01` paths + `OPENAI_MODEL=gpt-5.6-luna` + Auth/OAuth secrets + `SFIA_STUDIO_CURSOR_REAL=1`.
OpenAI/Auth **chargés par Next** depuis ce fichier (preuve : `/api/auth/github-start` → 307 GitHub avec `client_id` historique). Aucun override Fake process.

### Preflight
```
STUDIO RUNTIME PROFILE READY
authority PASS · managedRoot LIVE-E2E-01 · cursorReal READY
deterministic⊕REAL PASS · realBoundaryConstructed false
```
(configuration REAL ≠ exécution agent ; G-REAL NOT GRANTED)

---

## 7. Sauvegardes SQLite

**Dir :** `/Users/morris/Projects/.sfia-exec/live-e2e-01/backups/pre-recovery-20261030T174247Z/` (0700)
**Fichiers 0600 :** `oa-product.sqlite` (backup API) + `.bytecopy` ; `nora-session.sqlite` + `.bytecopy` ; `MANIFEST.txt`

| Artefact | SHA-256 |
|---|---|
| Product source avant | `fdb8ae8e5c16ff74b2e7badc3f0de41893cab5bc4e8e1e1349642034c520fa04` (= audit) |
| Nora source avant | `45846a91a37f18fabcfa369b735a616c2ec387f150b91bcb7c5d0271af1b50ac` (= audit) |
| Product bytecopy | identique source |
| Nora bytecopy | identique source |
| Row-count backup API | MATCH Product & Nora |

**Rollback :** stopper runtime ; restaurer `.bytecopy` sur chemins runtime **seulement** après gate Morris ; jamais auto.

---

## 8. Migration Option C

| Item | Preuve |
|---|---|
| Schéma Nora historique | pas de `presentation_json` / `studio_control_json` |
| Code | `ensurePilotTranscriptPresentationColumn` / `StudioControlColumn` — ALTER idempotent nullable |
| Application | ouverture `ProductSqliteSession` via code Product (script ops temporaire, supprimé) |
| Après | colonnes présentes ; **20/20 NULL** (fallback historique normal) |
| Counts | pilot 20 · session_items 17 · logical 8 · journal 1 — **préservés** |
| Product SHA | **inchangé** `fdb8ae8e…` |
| Nora SHA après | `99653453be13c6c4871ca9970a643cd7f50e1ad214bc98024746a935109e3a4a` |
| Destructive | **NON** |

---

## 9. État BALISE après startup / migration

| Champ | Statut |
|---|---|
| `prj:d0c81c08-349b-4109-aca7-72bd5d1bae85` BALISE / `balise` | **active** |
| LPS | `lps:e8e4adc5a4b95850` v8 |
| Cycle | `cyc:trj-13c49958061961c529bd4ec3` framing Light **active** |
| Trajectoire | `trj:lr-bridge-92fd6e6dcf5b` **validated** |
| HD | `dec:gf-trj:4cd07f50-…` **accepted** pilot |
| Transcript / journal | 20 turns · journal présent |
| Integrity Product/Nora | **ok** |

---

## 10. TEST-15 après startup

| Champ | Valeur |
|---|---|
| EC | `xct:gen-prep:8be90773214936e9e9857b94` |
| Status | **`confirmation_required`** |
| Version | **2** |
| Confirmations | **0** |
| Attempts | **0** |
| Evidence / receipts | **0** (non régénérés) |

Aucune interaction UI sur le CTA. Risque d'exposition UI `confirmation_required` **toujours ouvert** (discipline Pilote pour TEST-16).

---

## 11. Autres campagnes

| DB | SHA | Statut |
|---|---|---|
| new-project-campaign-01 Product | `ecf16ebf…` | **inchangé** |
| new-project-campaign-01 Nora | `e1909701…` | **inchangé** |

---

## 12. HTTP / Auth (non mutatif)

| Route | Résultat |
|---|---|
| `/` | 307 → `/login?error=NO_SESSION` |
| `/login` | **200** |
| `/studio` | 307 → login NO_SESSION |
| `/api/auth/github-start` | 307 → GitHub OAuth authorize (client_id historique) |

**Non déclaré AUTHENTICATED LIVE** — session Pilote non établie (OAuth interactif hors cycle).

---

## 13. Matrice G01–G24

| Gate | Statut | Preuve | Impact | Action / Gate |
|---|---|---|---|---|
| G01 Git main / Product #628 | **PASS** | ls-remote ca1c9869 ; app diff vide | — | aucun |
| G02 Worktrees / provenance | **PASS** | feat runtime ; docs pack ; handoff WT | — | aucun |
| G03 Config LIVE historique | **PASS** | process paths LIVE-E2E-01 ; identity live-e2e | — | aucun |
| G04 Protection `.env.local` partagé | **PASS** | non écrit ; overrides process-local | — | aucun |
| G05 OpenAI LIVE configuré | **PASS** | Fake ABSENT ; `.env.local` model LIVE ; OAuth charge env Next | Non bloquant | claim conversation LIVE hors scope |
| G06 Cursor REAL=1 process | **PASS** | sysctl `SFIA_STUDIO_CURSOR_REAL=1` | — | exécution agent **interdite** |
| G07 DET inactive | **PASS** | DET flag ABSENT ; preflight DET⊕REAL PASS | — | aucun |
| G08 Managed root | **PASS** | LIVE-E2E-01/managed-repos ; clone clean | — | aucun |
| G09 Backup vérifiée | **PASS** | dir 0700 ; bytecopy SHA = audit ; integrity ok | — | aucun |
| G10 Schémas / Option C | **PASS** | ALTER additive ; NULL historiques ; counts OK | — | aucun |
| G11 Arrêt :3020 ciblé | **PASS** | PID 33664 tree ; port free ; other SHA OK | — | aucun |
| G12 Startup nominal | **PASS** | preflight + build + npm start Ready | — | aucun |
| G13 Product DB path | **PASS** | process + resolveProductSqlitePath | — | aucun |
| G14 Nora DB path | **PASS** | process + resolveNoraSessionSqlitePath | — | aucun |
| G15 Identité BALISE / LPS v8 | **PASS** | RO + openProductSqlite | — | aucun |
| G16 Cadrage / trajectoire | **PASS** | cycle framing active ; traj validated | — | aucun |
| G17 Transcript/journal | **PASS** | counts préservés | — | aucun |
| G18 EC TEST-15 intact | **PASS** | confirmation_required v2 | risque UI | discipline Pilote |
| G19 0 new Conf/Attempt | **PASS** | counts 0 | — | aucun |
| G20 Autres campagnes | **PASS** | SHA other inchangés | — | aucun |
| G21 Auth/HTTP non mutatif | **PASS** | login 200 ; redirects NO_SESSION | — | OAuth Pilote |
| G22 Aucun code/doc Product | **PASS** | pas de diff Product ; pack local only | — | aucun |
| G23 Aucun TEST-16 | **PASS** | non exécuté | — | aucun |
| G24 Aucun agent REAL | **PASS** | non lancé ; G-REAL NOT GRANTED | — | aucun |

---

## 14. Fake / Real Qualification

| Item | Statut |
|---|---|
| Niveau atteint | **CONFIGURED LIVE RUNTIME + PERSISTED BALISE CONTINUITY VERIFIED** |
| OpenAI LIVE turn | NOT PROVEN (config only) |
| Cursor REAL execution | NOT EXECUTED / G-REAL NOT GRANTED |
| REAL flag process | **1** (contrat Morris config) |
| DET | OFF |
| EP-S2-08/05 / L3 closed | hors scope |

---

## 15. Réserves

1. EC TEST-15 toujours `confirmation_required` — ne pas cliquer Confirmer.
2. Bug lexical `hasExplicitPrepareContractIntent` non corrigé — formuler TEST-16 sans tokens prepare/contrat.
3. Session OAuth Pilote non établie ce cycle.
4. `realBoundaryConstructed: false` au preflight malgré REAL=1 — config ≠ wiring d'exécution ; ne pas lancer d'agent.
5. `.env.local` partagé pointe encore new-project-campaign-01 — **ne pas** lancer un autre runtime sans overrides / risque collision.
6. Nora SHA changé post-migration Option C (attendu) ; Product SHA stable.
7. Option C payloads presentation/studio_control historiquement NULL — baseline normale.

---

## 16. Mutations réellement réalisées

| Mutation | Détail |
|---|---|
| Stop process :3020 | ancien next dev new-project-campaign |
| Backup privée | sous LIVE-E2E-01/backups/… |
| `npm run build` | worktree feat (artefacts `.next` non suivis) |
| `npm start` LIVE | process-local env |
| Migration Nora additive | colonnes Option C via ProductSqliteSession |
| Review pack local | `.tmp-sfia-review/chatgpt-review.md` |
| Handoff L3 | publish-in-cycle (ci-dessous) |

**Non muté :** Product source · doctrine · PRR · `.env.local` partagé · other campaign DBs · EC métier.

---

## 17. Actions non exécutées

TEST-16 ; message Nora ; Cursor Agent REAL ; OAuth interactif Morris ; confirm/reject EC ; fix TEST-15 ; écriture env partagé ; Delivery ; PR/merge projet.

---

## 18. Rollback

1. Stop PID 58031 tree.
2. Restaurer bytecopies Product/Nora depuis `backups/pre-recovery-20261030T174247Z/`.
3. Ne pas auto-rollback. Gate Morris requis.

---

## 19. Décisions requises

| Décision | Qui |
|---|---|
| Critical Review handoff | ChatGPT |
| OAuth Pilote puis TEST-16 interactif | Pilote (après GO Morris) |
| Neutralisation EC TEST-15 éventuelle | Pilote / Morris (hors ce cycle) |
| Fix lexical prepare-intent | Morris (cycle construction séparé) |

---

## 20. Handoff L3

| Champ | Valeur |
|---|---|
| Mode | publish-in-cycle |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Branche | `sfia/review-handoff` |
| Canonique | `sfia-review-handoff/latest-chatgpt-review.md` |
| Commit | `docs(review-handoff): publish balise live e2e runtime recovery` |
| SHA distant | *(rempli après publish)* |
| Blob | *(rempli après publish)* |

---

## 21. Git Review Index (extraits locaux)

- Process 58031 : PRODUCT/NORA paths LIVE-E2E-01 ; CURSOR_REAL=1 ; DET ABSENT ; OPS1 ABSENT
- Preflight READY cursorReal READY
- Backup bytecopy SHA = audit fdb8ae8e / 45846a91
- Post-migration Nora SHA 99653453… ; presentation/studio_control présents ; 20 NULL
- EC xct:gen-prep:8be90773… confirmation_required v2 ; Conf/Att 0
- HTTP login 200 ; studio→login NO_SESSION
- Other campaign SHA inchangés
- Shared `.env.local` non modifié (toujours new-project-campaign-01)

---

## 22. Verdict

# READY FOR BALISE INTERACTIVE TEST-16 REVIEW

Environnement LIVE reconstitué sur :3020 avec Product Option C, bases BALISE préservées (migration Option C additive seulement), REAL=1 configuré sans exécution agent, EC TEST-15 intact non confirmé.

**Prochaine étape :** revue ChatGPT du handoff → OAuth Pilote → TEST-16 interactif (hors ce cycle).

---

## 23. Instruction ChatGPT obligatoire

Avant de répondre à Morris, relire dans Git :

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier cycle/profil/GO ; Git Truth ; Product Option C ; runtime initial/final ; LIVE/REAL effective ; sauvegardes/migrations ; non-impact inter-campagne ; BALISE ; TEST-15 ; gates ; preuves ; verdict ; SHA distant + relecture.

Si incomplet/synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Si remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

Le rapport Cursor seul ne remplace pas le handoff Git.
