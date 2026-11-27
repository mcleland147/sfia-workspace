# SFIA Review Pack FULL — RECETTE integrated convergence cutover

| Champ | Valeur |
|---|---|
| Mandate | RECETTE CUTOVER — integrated convergence ML1–ML3 |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| HEAD sortie (docs) | `4d490431a35729a744c4d787f303889c8d6530dc` |
| tree repo sortie | `30c12ad9eb48959c0326df9f7629471e8ec847a3` |
| tree web RECETTE | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| RECETTE BUILD | `rpEczSp61evIZ7d6fnIWR` |
| digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| main merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Pack generated | 2026-11-27T09:35Z (UTC) |
| Reset policy | **COMPLETE RESET** — no historical append |

---

## 1. Git Truth Check

```text
lane=RECETTE cutover documentation (NO RELEASE)
branch=sfia/next-ml5-integrated-delivery-20261123
candidate_SHA=e8e6e06961fa0a7224db3badb3b591b8be8046ac
documented_RECETTE_historical=2a024b1c8d713ded6260d2a6427448a29f98a646
actual_previous_served=a150926cc78fdc04522565eb198ed9f91a612142
previous_BUILD=6kswoj2a2VHXCLsFYcoim
commits_2a024b1c..e8e6e069=87 (git rev-list --count)
commits_listed_evidence=86 (commits.txt — exclusive range note)
merge-base_2a024b1c_8e54d7fe=2a024b1c (ancestor — migrations 022–027 reachable)
worktree_served=/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa
DEV_branch_tip_at_cutover=e8e6e069 (same as candidate)
HEAD_sortie_docs=4d490431a35729a744c4d787f303889c8d6530dc
```

**Verdict Git :** Candidate frozen at `e8e6e069`. **Actual runtime before cutover was `a150926c`, not the historically documented `2a024b1c`.** Delta from documented baseline `2a024b1c` spans macro-lots 1–3 integrated convergence (**86–87 commits**). Evidence: `commits.txt`, `diffstat.txt`, `name-status.txt`, `capabilities-delta.md` under `.sfia-evidence/recette-cutover-20261127/`.

---

## 2. Runtime identity correction

| Source | SHA | BUILD | Notes |
|---|---|---|---|
| Documented historical RECETTE | `2a024b1c…` | *(various docs)* | Ancestor baseline for migration inventory — **not the process actually serving :3200 at cutover** |
| **Actually served pre-cutover** | `a150926c…` | `6kswoj2a2VHXCLsFYcoim` | Worktree `…-recette-build-a150926cc78f` — backup `previous-runtime.txt` |
| **Candidate now served** | `e8e6e069…` | `rpEczSp61evIZ7d6fnIWR` | Worktree `…-recette-build-e8e6e06961fa` |

**Interpretation:** Git truth for rollback code points to `a150926c` worktree, not `2a024b1c`. Schema/data delta vs served baseline is smaller than vs `2a024b1c` document.

---

## 3. Delta summary (2a024b1c → e8e6e069)

| Evidence file | Path |
|---|---|
| Commit subjects | `web/.sfia-evidence/recette-cutover-20261127/commits.txt` (**86 lines**) |
| Diffstat | `…/diffstat.txt` — 327 files under `projects/sfia-studio-next/`, +57 727 / −1 160 lines |
| Name-status | `…/name-status.txt` |
| Capabilities narrative | `…/capabilities-delta.md` |
| Config name delta (non-secret) | `…/config-vars-delta.md` — **91 NEW** env names on DEV vs RECETTE baseline |
| Migrations | `…/migrations-inventory.md` — **022–027** new since 021 ceiling |
| Audio reserves audit | `…/audio-reserves-audit.md` |

**Headline capabilities landed:** FinOps 022–026, derived embeddings 027, Nora/cognitive frontier, composer dictation (flag OFF on RECETTE), WEB/PDF paths (LIVE OFF), consumption UI, Pilotage forecast touchpoints, RoomBooking qualification corpus references (DEV-proven, RECETTE pending).

---

## 4. Audio reserves A–D (candidate e8e6e069)

| Area | Status | Notes |
|---|---|---|
| **A — Finalization / commit drain** | **FIXED** | `maybeCompleteFinalization` / `completeFinalization` → partial when unacked commit or uncommitted PCM |
| **B — Transport admission** | **FIXED** | Unknown `SFIA_DICTATION_TRANSPORT` → `TRANSPORT_UNKNOWN` (no implicit LIVE) |
| **C — Admission / UI / lane** | COMPLIANT | Capability gate · mic `dictationEnabled===true` · session API admission-first |
| **D — FinOps substituted** | COMPLIANT | `EFFECT_SUBSTITUTED` · no LIVE tariff on substituted |

Vitest `ml3-composer-dictation-session.test.ts` — **18 PASS** (incl. 3 new). **RECETTE LIVE micro NOT EXECUTED** — `SFIA_COMPOSER_DICTATION=0`.

Full audit: `audio-reserves-audit.md` (evidence dir).

---

## 5. Config non-secret manifesto (names only)

Base file: `~/.config/sfia-studio-next/recette/.env.local` (Morris-corrected — **secrets not in this pack**).

Cutover delta overlay (`recette-env-delta.env` — non-secret excerpt):

```
STUDIO_LANE=RECETTE
SFIA_SOURCE_SHA=e8e6e06961fa0a7224db3badb3b591b8be8046ac
STUDIO_FORCE_NORA_FIXTURE= (empty)
SFIA_COMPOSER_DICTATION=0
SFIA_DICTATION_TRANSPORT= (empty)
SFIA_WEB_SEARCH_LIVE=0
SFIA_WEB_SEARCH_ENABLED=0
STUDIO_DEV_TEST_LOGIN=0
```

**91 new non-secret names** since `2a024b1c` (full list in `config-vars-delta.md`): dictation (`SFIA_COMPOSER_DICTATION`, `SFIA_DICTATION_TRANSPORT`, …), FinOps/Admin (`SFIA_ADMIN_*`, `SFIA_FINOPS_*`), cognitive (`SFIA_COGNITIVE_*`, `SFIA_BOUNDED_JUDGMENT`), embeddings (`SFIA_DERIVED_EMBEDDING_*`), LIVE caps (`SFIA_LIVE_*`), WEB/PDF (`SFIA_WEB_*`, `SFIA_PDF_*`), qualification (`SFIA_QUAL_*`, `SFIA_CHANTIERS360_REPO_ID`), lane guards (`STUDIO_LANE_*`, `SFIA_OPENAI_EXPECTED_KEY_FP`, `SFIA_OPENAI_FORBIDDEN_KEY_FP`).

**Secret-class names (listed only):** `OPENAI_API_KEY`, `DATABASE_URL`, `BETTER_AUTH_*`, `OPENAI_ADMIN_KEY`, encryption/HMAC patterns — **values never in pack**.

---

## 6. Key separation fingerprints

| Lane | Fingerprint (prefix) | Role |
|---|---|---|
| RECETTE runtime | `f27d814e…` | **EXPECTED** — matches `SFIA_OPENAI_EXPECTED_KEY_FP` check (smoke `openai_fp_match=true`) |
| DEV forbidden on RECETTE | `ab6bbec8…` | **FORBIDDEN** — must not appear on RECETTE |
| Admin collector | *(not injected)* | No new Admin key in RECETTE runtime |

Smoke: `expected=f27d814e9c682020 forbidden_dev=ab6bbec84ba272ed`.

---

## 7. Backup · restore · migrate proof

| Artifact | Location (evidence) |
|---|---|
| PG dump pre-cutover | `backups/sfia_next_recette_ml4-pre-cutover.dump` |
| `.env.local` backup mode 600 | `backups/env.local.bak-pre-cutover-20261127T092806Z` |
| Documents archive | `backups/documents-pre-cutover.tgz` |
| Start script bak | `backups/start-recette-ml5.sh.pre-cutover-20261127T093212Z` |
| Isolated restore counts | `restore-proof/counts-after-restore.txt` |
| Migrate 022–027 log | `restore-proof/migrate-022-027.log`, `migrate-real-022-027.log` |
| Post-migrate counts | `restore-proof/counts-after-real-migrate.txt` |

**Post-migrate counts:** projects=31 · messages=824 · documents=123 · cognitive_works=24 · tables `provider_usage_observations`, `derived_embedding_chunks` present.

**Procedure:** restore proof on isolated DB before applying 022–027 to live RECETTE PG — then cutover build + LaunchAgent retarget.

---

## 8. Cutover LaunchAgent retarget

| Item | Value |
|---|---|
| Label | `com.sfia.studio.next.recette.ml4d-ux004` |
| ProgramArguments | `/Users/morris/.local/share/sfia-studio-next/bin/start-recette-ml5.sh` |
| WorkingDirectory | `…/sfia-workspace-next-ml5-recette-build-e8e6e06961fa/projects/sfia-studio-next/web` |
| URL | http://127.0.0.1:3200 |
| PID at smoke | 8539 |

---

## 9. Smoke results (post-cutover)

```
at=2026-11-27T09:32:50Z
login=200
build_marker=<!--rpEczSp61evIZ7d6fnIWR-->
pid=8539
cwd=/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa/projects/sfia-studio-next/web
auto_session=403
portfolio=200
integrations=200
projects=31
messages=824
documents=123
pilots=170
conversations=210
cognitive_works=24
finops_table=provider_usage_observations
emb_table=derived_embedding_chunks
openai_fp_match=true expected=f27d814e9c682020 forbidden_dev=ab6bbec84ba272ed
candidate_sha=e8e6e06961fa0a7224db3badb3b591b8be8046ac
build=rpEczSp61evIZ7d6fnIWR
digest=18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535
previous_served_sha=a150926cc78fdc04522565eb198ed9f91a612142
previous_build=6kswoj2a2VHXCLsFYcoim
schema=027
launchagent=com.sfia.studio.next.recette.ml4d-ux004
```

**Build marker confirmed:** `<!--rpEczSp61evIZ7d6fnIWR-->` · `auto_session=403` (DEV helpers refused).

---

## 10. Capability matrix (RECETTE cutover)

| Capacité | Code/shema | RECETTE cutover | Gate LIVE restant |
|---|---|---|---|
| Auth / portefeuille | existing | Served · smoke 200 | Morris R01 |
| Nora / Responses | native stack | Runtime ready · RECETTE key | R03 PENDING GO LIVE |
| Allocation cognitive | embedded | Not user-qualified | R03/R05 |
| Decisions / D6 | embedded | Not campaign-qualified | Morris GO |
| Embeddings hybrid | schéma 027 | Tables present · no DEV index copy | Rebuild + R05 |
| Vision / PDF | embedded | OFF / bounded | R05 PENDING GO |
| Dictation Realtime | ML3 | **Flag OFF** · admission fail-closed | R06 PENDING GO |
| FinOps local | 022–026 | Tables · UI entry | R07 · no Admin collect |
| Admin collector | architecture | **Not in runtime** | GO distinct |
| WEB hosted search | Option B | **OFF** (`SFIA_WEB_SEARCH_*=0`) | GO distinct |
| Git mutations | D9 | Unchanged ML4 reserves | No REAL write |
| Tracing | ALS/SDK | Present | — |
| Cursor / D8 | gates | Unchanged | — |

---

## 11. Cahier summary (R01–R08)

Compact cahier: `cahier-recette-integree-ml5-convergence-20261127.md` — **eight families**, not 56 Q scenarios.

| Famille | Thème | Default verdict |
|---|---|---|
| R01 | Non-régression données / accès | NOT RUN (smoke only on R01-08) |
| R02 | Nouveau projet / sas | PENDING GO LIVE |
| R03 | Nora Travail | PENDING GO LIVE · RoomBooking oracle optional |
| R04 | Documents D4 | NOT RUN |
| R05 | Intelligence (hybrid, PDF, vision) | PENDING GO · Chantiers360/RB corpus capitalized |
| R06 | Dictée | PENDING GO · reserves A–D DEV-proven |
| R07 | FinOps affichage | NOT RUN · Admin BLOCKED |
| R08 | UX shell | NOT RUN · Figma deferred |

**No Morris PASS prefilled.**

---

## 12. Rollback

1. Stop service `com.sfia.studio.next.recette.ml4d-ux004`.
2. Restore `sfia_next_recette_ml4-pre-cutover.dump` + `env.local.bak` if data rollback required.
3. Point plist/script to `a150926c` worktree (`start-recette-ml5.sh.pre-cutover-…` template).
4. **Schema 022–027 not auto-reverted** — older binary may not run against 027 DB without migration strategy.

Code rollback assets preserved in evidence `backups/`.

---

## 13. Anti-stub checklist

| Check | Status |
|---|---|
| Manifest FULL embedded §A | PASS |
| Cahier FULL embedded §B | PASS |
| start-recette-ml5.sh FULL embedded §C | PASS |
| TRANSPORT_UNKNOWN snippet §D | PASS |
| smoke-post-cutover.txt FULL §E | PASS |
| Git truth a150926c vs 2a024b1c §1–2 | PASS |
| 86-commit delta cites evidence paths §3 | PASS |
| Audio A–D table §4 | PASS |
| Config names-only §5 | PASS |
| Fingerprints no secret values §6 | PASS |
| Restore/migrate proof §7 | PASS |
| Verdict block not TBD §14 | PASS |

**Anti-stub result:** PASS (12/12)

---

## 14. Proposed verdict

**RECETTE CUTOVER COMPLETE — CANDIDATE FROZEN — AVAILABLE WITH EXPLICIT RESTRICTIONS — MORRIS FUNCTIONAL QUALIFICATION PENDING**

**Status:** READY WITH RESERVES

Restrictions explicit: dictation OFF · WEB LIVE OFF · no Admin collector inject · no Morris functional PASS · embeddings index not copied · FinOps historical attribution may reference DEV · Figma/mobile deferred.

**Programme:** R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED GLOBALLY / R6 NOT STARTED / **NO RELEASE** / STABLE NOT AVAILABLE / NOT ADOPTED

---

## 15. Instruction ChatGPT obligatoire (Morris review)

Morris — review **remote** on this pack; do not assume live RECETTE access unless requested.

1. Confirm Git Truth: served pre-cutover **`a150926c`** ≠ documented **`2a024b1c`**; candidate **`e8e6e069`** now at `:3200` with BUILD `rpEczSp61evIZ7d6fnIWR`.
2. Confirm data preservation counts and schema 027 apply proof (§7–9).
3. Confirm key separation RECETTE `f27d814e…` vs forbidden DEV `ab6bbec8…` without requesting secret values.
4. Confirm audio reserves A–B landed in `e8e6e069`; RECETTE dictation remains OFF until GO.
5. Review cahier R01–R08 for proportionality (not 61 scenarios); refuse any extrapolated PASS from smoke alone.
6. Render binary on cutover acceptability: **ACCEPT CUTOVER DOC / ACCEPT WITH RESERVES / REJECT** — with testable reserves for Morris qualification sessions.

Do not rewrite code in review; cite file+section if gap.

---

## Annex A — Manifest (full)

# Manifeste RECETTE — Cutover convergence intégrée — 2026-11-27

| Champ | Valeur |
|---|---|
| Lane | RECETTE |
| URL | http://127.0.0.1:3200 |
| Classe | NO RELEASE |
| Candidat SHA | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree repo | `30c12ad9eb48959c0326df9f7629471e8ec847a3` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| BUILD_ID | `rpEczSp61evIZ7d6fnIWR` |
| Digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Ancien runtime servi | SHA `a150926cc78fdc04522565eb198ed9f91a612142` · BUILD `6kswoj2a2VHXCLsFYcoim` |
| SHA documenté historique | `2a024b1c` (antérieur ; non le processus réellement servi au cutover) |
| PostgreSQL | `sfia_next_recette_ml4` · :5434 |
| Schéma | **027** (migrations 022–027 appliquées après preuve isolée) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (BASE Morris) + delta non secret |
| OpenAI | Empreinte RECETTE `f27d814e…` · forbidden DEV `ab6bbec8…` · **distinct** |
| Admin collector | Non injecté dans runtime Nora · pas de nouvelle clé Admin |
| Dictée | Code présent · `SFIA_COMPOSER_DICTATION=0` · LIVE micro **en attente GO** |
| WEB LIVE | OFF |
| Auto-session DEV | refusé (403) |
| Dataset | projects=31 · messages=824 · documents=123 · pilots=170 · conversations=210 · cognitive_works=24 |
| Sauvegarde | dump Fc + `.env.local` bak mode 600 · documents tgz · plist/start-script bak |
| Rollback | restaurer dump + retarget LaunchAgent/plist vers worktree `a150926c` · schéma 022+ non retiré automatiquement (compat app ancien ≠ rollback données) |

## Capacités

| Capacité | État cutover | Gate LIVE restant |
|---|---|---|
| Nora / Responses | runtime prêt · clé RECETTE | qualification utilisateur |
| Allocation cognitive | code embarqué | parcours R03 |
| Decisions | code embarqué | si campagne LIVE |
| Embeddings / hybrid | schéma 027 · pas d'index DEV copié | reconstruction embeddings si GO |
| Vision | code embarqué | GO distinct |
| Dictée Realtime | code + admissions · flag OFF | GO micro LIVE |
| FinOps local | tables 022–026 | pas de collecte Admin nouvelle |
| Collecte Admin | architecture conservée hors runtime | GO Morris distinct |
| Tracing | présent | — |
| WEB | OFF | — |
| Cursor / D8 | gates existants | — |

## Réserves

- Dictée / Vision / embeddings LIVE / Admin collect : en attente GO distinct.
- FinOps historique éventuellement attribué projet DEV : non réécrit.
- Documents root RECETTE vide (0 fichiers) — inchangé.
- Figma mobile/visionneuse : reportés RECETTE utilisateur.


---

## Annex B — Cahier (full)

# SFIA Studio Next — Cahier de recette intégrée ML5 convergence

**Version :** 0.1 — contenu préparé pour qualification Morris  
**Date :** 27 novembre 2026  
**Statut :** **CANDIDATE FROZEN — MORRIS FUNCTIONAL QUALIFICATION PENDING**  
**Programme :** R5 — convergence OpenAI Studio intégrée (macro-lots 1–3)  
**Responsable de la réception :** Morris  
**Périmètre :** Cutover RECETTE `e8e6e069` · schéma **027** · données préservées  
**Classe :** NO RELEASE · STABLE NOT AVAILABLE

---

## 1. Objet

Ce cahier organise la **recette utilisateur** du candidat RECETTE issu de la convergence intégrée ML1–ML3, sans rejouer les 56 scénarios Q du contrat ML5 ni les 61 cas ML4C. Il regroupe **huit familles R01–R08** couvrant non-régression, parcours projet, Nora, documents, intelligence documentaire, dictée, FinOps et UX shell.

**Règle :** aucun verdict **PASS** n'est prérempli pour les essais Morris. Les contrôles HTTP/smoke post-cutover (login, portefeuille, intégrations, marqueur build) ne valent pas acceptation fonctionnelle.

---

## 2. Identité du candidat RECETTE

| Élément | Référence |
|---|---|
| URL | http://127.0.0.1:3200 |
| SHA candidat | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree repo | `30c12ad9eb48959c0326df9f7629471e8ec847a3` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| BUILD_ID | `rpEczSp61evIZ7d6fnIWR` |
| Digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| Worktree servi | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| PostgreSQL | `sfia_next_recette_ml4` — port **5434** |
| Schéma | **027** (migrations 022–027 après preuve restore isolée) |
| Branche source DEV | `sfia/next-ml5-integrated-delivery-20261123` |
| Ancien runtime réellement servi | `a150926c…` / BUILD `6kswoj2a2VHXCLsFYcoim` |
| SHA documenté historique (non servi) | `2a024b1c…` |
| Dataset | projects=31 · messages=824 · documents=123 · pilots=170 · conversations=210 · cognitive_works=24 |
| OpenAI clé RECETTE | empreinte `f27d814e…` — **≠** DEV `ab6bbec8…` (forbidden) |
| Dictée produit | `SFIA_COMPOSER_DICTATION=0` — micro **PENDING GO** |
| WEB LIVE | **OFF** |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (base Morris) + delta non secret cutover |

Manifeste détaillé : [`ml5-recette-cutover-manifest-20261127.md`](./ml5-recette-cutover-manifest-20261127.md).

---

## 3. Préconditions et règles

- Profil navigateur **distinct** de DEV (ENV-01 cookies sur `127.0.0.1`).
- Vérifier le marqueur HTML `<!--rpEczSp61evIZ7d6fnIWR-->` sur la page d'accueil ou login.
- Ne pas activer `STUDIO_DEV_AUTO_SESSION`, fixtures Nora, dictée LIVE, WEB LIVE ni collecte Admin sans **GO Morris distinct**.
- Les essais **LIVE** OpenAI (Nora, transcription micro, embeddings rebuild, vision punctuelle, hosted WEB) exigent un GO explicite et des enveloppes de coût.
- **RoomBooking** : corpus autorisé `proj_896d204b…` sur `mcleland147/chantiers360` (commit `8c398c49…`) — **ne pas** utiliser le faux projet `proj_f57bca43…` ML5-Doc-RoomBooking sans Git.
- **Pilotage360 / Chantiers360** : investigations historiques RB-27–31 (planning/conflits) et qualification trajectoire restent des **oracles de non-régression** à réemployer selon impact, pas des replays systématiques de 40+ scénarios.
- Préserver les données RECETTE ; rollback code documenté sans rollback automatique des migrations 022–027.

---

## 4. Format de preuve (Morris)

| Champ | Contenu |
|---|---|
| ID | Rxx-yy |
| Date / Pilote | Session |
| BUILD / SHA | Version testée |
| Projet / ressource | ID non secret |
| Action | Geste ou prompt |
| Attendu | Comportement contractuel |
| Observé | Fait réel |
| Preuve | Capture, extrait, work id, révision — **sans secrets** |
| Verdict | PASS / FAIL / BLOCKED / NOT RUN — **à remplir par Morris uniquement** |

---

## R01 — Non-régression portefeuille, session et données héritées

**Objectif :** après cutover schéma 027, retrouver l'univers RECETTE ML4 existant sans perte comptable ni régression d'accès.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R01-01 | Connexion GitHub OAuth — session Pilote Morris | 200 · identité connue · pas de contournement | **NOT RUN** |
| R01-02 | Portefeuille — 31 projets · préparations connues | Liste cohérente avec comptages pré-cutover | **NOT RUN** (smoke HTTP 200 seul) |
| R01-03 | Ouvrir **Intervencia** ou projet de référence ML4C — fil messages | Historique retrouvable · pas de vidage | **NOT RUN** |
| R01-04 | Documents existants — lecture d'une révision **AVAILABLE** | Inspection D4 fonctionnelle | **NOT RUN** |
| R01-05 | Intégrations / paramètres — page charge | 200 · pas d'exposition clés | **NOT RUN** (smoke 200) |
| R01-06 | Rafraîchissement navigateur sur projet ouvert | Contexte projet conservé | **NOT RUN** |
| R01-07 | Réserve ML4C héritée — position fil Travail après refresh (`S07-06-R01`) | À requalifier sur ce build : retour en tête de fil ? | **NOT RUN** |
| R01-08 | Auto-session DEV sur RECETTE | Refus 403 (prouvé post-cutover) | **AUTOMATED PASS** (smoke) — pas substitut R01-01 |

**Observations capitalisées (sans multiplier les cas) :** comptages PG post-migrate identiques au manifeste ; tables FinOps (`provider_usage_observations`) et embeddings (`derived_embedding_chunks`) présentes sans reindex DEV copié.

---

## R02 — Nouveau projet et sas de création

**Objectif :** créer ou reprendre un projet sans doublon ni perte de préparation (héritage ML4C S02, sans rejouer les 8 scénarios S02).

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R02-01 | Nouvelle préparation — décrire le besoin à Nora (LIVE si GO) | Intention persistée · pas de création prématurée | **PENDING GO LIVE** |
| R02-02 | Créer le projet depuis le sas · rouvrir après refresh | Un seul projet · fil initial visible | **NOT RUN** |
| R02-03 | Réserve historique `S02-04-R01` — proposition rev.2 après création | À vérifier si toujours pertinente | **NOT RUN** |
| R02-04 | Projet synthétique dédié recette ML5 (non production) | Isolation des essais mutatifs | **NOT RUN** |

---

## R03 — Nora — Travail, continuité et frontières

**Objectif :** dialogue Nora sur surface Travail avec continuité provider RECETTE (sans fixture forcée).

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R03-01 | Message texte simple — réponse Nora LIVE | Réponse complète · statuts cohérents | **PENDING GO LIVE** |
| R03-02 | Conversation longue — compositeur visible en bas | Champ + Envoyer accessibles (requalifier `ML4C-A-003`) | **NOT RUN** |
| R03-03 | Demande hors périmètre / cible inconnue | Refus ou `UNKNOWN` sémantiquement correct · pas d'effet silencieux | **NOT RUN** (rapprocher `S02-06-R01`) |
| R03-04 | Capitalisation contexte métier (projet existant) | Pas de fuite cross-pilote | **NOT RUN** |
| R03-05 | Allocation cognitive / adaptive (code embarqué) | Comportement conforme au contrat ML5 si sollicité | **PENDING GO LIVE** |

**Observations RoomBooking :** preuve DEV RB-27 (`cgw_912cf02a…`) — 9 fichiers CONSULTED, reprise suspendue ; **ne pas extrapoler PASS RECETTE** sans GO campagne sur `proj_896d204b…`.

---

## R04 — Documents (D4), révisions et inspection

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R04-01 | Bibliothèque — liste documents projet | Révisions **AVAILABLE** listées | **NOT RUN** |
| R04-02 | Inspection longue — panneau latéral | Lecture intégrale possible | **NOT RUN** (réserve `S03-02-R01` ergonomie) |
| R04-03 | Révision ciblée sans effet non demandé | V1/V2 distinctes · pas de perte | **PENDING GO** si création LIVE |
| R04-04 | Root documents RECETTE vide (0 fichiers racine) | Inchangé — pas de régression attendue sur cutover | **NOT RUN** |

---

## R05 — Intelligence documentaire (embeddings, hybrid, vision, PDF)

**Objectif :** qualifier les apports macro-lot 2 sans rejouer l'intégralité des oracles Gate B DEV.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R05-01 | Recherche hybride sur corpus connu (Chantiers360 / doc existant) | Résultats pertinents · citations traçables | **PENDING GO** (rebuild embeddings si index vide) |
| R05-02 | Question lexicale exacte vs paraphrase (oracle CONV-F22) | Comportement comparable au DEV qualifié | **PENDING GO LIVE** |
| R05-03 | PDF Git `Diagramme BPMN_BatiNova.pdf` | Identification OK · limite scan **SCANNED_NO_TEXT** connue | **PENDING GO** Git read |
| R05-04 | Vision punctuelle sur image autorisée | Lecture bornée si GO vision | **PENDING GO** |
| R05-05 | StockTrack IT-06 (qual corpus) | Ne pas confondre avec BoundTrack ; V1/V2 intactes si sollicité | **NOT RUN** |

**Observations :** schéma 027 et table `derived_embedding_chunks` présents ; **pas** de copie d'index DEV — reconstruction distincte si GO.

---

## R06 — Dictée composer (micro)

**Objectif :** CONV-F31–F34 — code présent, **flag OFF** sur RECETTE.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R06-01 | Capability API — flag OFF | `enabled: false` · micro non actif | **NOT RUN** (attendu OFF) |
| R06-02 | Activer GO + permission micro — transcription FR | Texte éditable · envoi manuel unique | **PENDING GO LIVE** |
| R06-03 | Annulation / refuse permission / navigation | Fail-closed · brouillon clavier préservé | **PENDING GO** |
| R06-04 | Réserves techniques A–D (finalize partial, TRANSPORT_UNKNOWN) | Comportement fail-closed en anomalie env | **DEV PROVEN** — RECETTE à confirmer sous GO |

**Interdit sans GO :** `SFIA_COMPOSER_DICTATION=1`, transport `live`, tests micro provider réel.

---

## R07 — FinOps et consommation (affichage local)

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R07-01 | Panneau consommation / settings — chargement | Données locales ou vide explicite · pas d'appel Admin nouveau | **NOT RUN** |
| R07-02 | Observations usage post-Nora LIVE (si campagne) | Corrélation work/attempt sans double comptage | **PENDING GO LIVE** |
| R07-03 | Historique attribué projet DEV dans RECETTE | Non réécrit — attribution peut rester ambiguë | **NOT RUN** (réserve manifeste) |
| R07-04 | Collecte Admin snapshot | Architecture hors runtime · pas de nouvelle clé Admin injectée | **BLOCKED** sans GO Admin distinct |

---

## R08 — UX shell, intégrations et convergence visuelle

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R08-01 | Navigation surfaces Projet (Travail, Documents, Journal, …) | Transitions sans erreur bloquante | **NOT RUN** |
| R08-02 | Typographie SafeMarkdown / conversation 12px | Lisibilité acceptable | **NOT RUN** |
| R08-03 | Menu rail personnel — entrée consommation | Route accessible si droits | **NOT RUN** |
| R08-04 | Comparaison Figma mobile / visionneuse | Reporté — pas gate cutover | **DEFERRED** |
| R08-05 | Erreurs globales (404 / error boundary) | Messages distincts session vs technique | **NOT RUN** |

**Observations Pilotage360 :** touchpoints `forecast-builder` / trajectoire — requalifier uniquement si parcours Pilote sollicité ; pas d'extension de campagne ici.

---

## 9. Synthèse de campagne (à compléter)

| Famille | NOT RUN | PENDING GO | AUTOMATED only | PASS Morris |
|---|---:|---:|---:|---:|
| R01 | 7 | 0 | 1 | 0 |
| R02 | 3 | 1 | 0 | 0 |
| R03 | 3 | 2 | 0 | 0 |
| R04 | 3 | 1 | 0 | 0 |
| R05 | 1 | 4 | 0 | 0 |
| R06 | 1 | 3 | 0 | 0 |
| R07 | 2 | 1 | 0 | 0 |
| R08 | 4 | 0 | 0 | 0 |

**Verdict global proposé (Cursor, pré Morris) :** **RECETTE CUTOVER COMPLETE — CANDIDATE FROZEN — AVAILABLE WITH EXPLICIT RESTRICTIONS — MORRIS FUNCTIONAL QUALIFICATION PENDING**

---

## 10. Rollback (rappel)

1. Arrêt LaunchAgent · restaurer dump `sfia_next_recette_ml4-pre-cutover.dump` + `.env.local.bak`  
2. Retarget plist/script vers worktree `a150926c` (backup `start-recette-ml5.sh.pre-cutover-…`)  
3. **Attention :** schéma 027 et tables 022–026 ne sont pas retirés automatiquement — compatibilité binaire ancien build ≠ restauration données seule.

Preuves : `projects/sfia-studio-next/web/.sfia-evidence/recette-cutover-20261127/` (gitignored).

---

## Annex C — start-recette-ml5.sh (full, no secrets)

```bash
#!/bin/bash
set -euo pipefail
cd "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export STUDIO_LANE=RECETTE STUDIO_PORT=3200 NODE_ENV=production PORT=3200 HOSTNAME=127.0.0.1
export SFIA_SOURCE_SHA=e8e6e06961fa0a7224db3badb3b591b8be8046ac
export SFIA_WEB_SEARCH_LIVE=0 SFIA_WEB_SEARCH_ENABLED=0 STUDIO_DEV_TEST_LOGIN=0
export SFIA_COMPOSER_DICTATION=0
unset STUDIO_FORCE_NORA_FIXTURE SFIA_DICTATION_TRANSPORT SFIA_DICTATION_SUBSTITUTED STUDIO_E2E STUDIO_DEV_AUTO_SESSION || true
export SFIA_BUILD_ID=$(cat .next/BUILD_ID 2>/dev/null || true)
exec npx next start -H 127.0.0.1 -p 3200
```

---

## Annex D — TRANSPORT_UNKNOWN admission snippet

Source: `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-admission.ts`

```typescript
  const lane = (env.STUDIO_LANE ?? "").trim().toUpperCase() || "UNKNOWN";
  const transportKind = (env.SFIA_DICTATION_TRANSPORT || "").trim();

  if (transportKind !== "" && transportKind !== "fixture" && transportKind !== "live") {
    return {
      ok: false,
      code: "TRANSPORT_UNKNOWN",
      message: `Unknown SFIA_DICTATION_TRANSPORT value (use empty/live for provider or fixture).`,
    };
  }
```

---

## Annex E — smoke-post-cutover.txt (full)

```
at=2026-11-27T09:32:50Z
login=200
build_marker=<!--rpEczSp61evIZ7d6fnIWR-->
pid=8539
cwd=/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa/projects/sfia-studio-next/web
auto_session=403
portfolio=200
integrations=200
projects=31
messages=824
documents=123
pilots=170
conversations=210
cognitive_works=24
finops_table=provider_usage_observations
emb_table=derived_embedding_chunks
openai_fp_match=true expected=f27d814e9c682020 forbidden_dev=ab6bbec84ba272ed
candidate_sha=e8e6e06961fa0a7224db3badb3b591b8be8046ac
build=rpEczSp61evIZ7d6fnIWR
digest=18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535
previous_served_sha=a150926cc78fdc04522565eb198ed9f91a612142
previous_build=6kswoj2a2VHXCLsFYcoim
schema=027
launchagent=com.sfia.studio.next.recette.ml4d-ux004
```

---

## Annex F — recette-env-delta.env (non-secret)

See evidence `recette-env-delta.env` — reproduced in §5.

---

## Annex G — composer-dictation-admission.ts (full)

```typescript
import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import { composerDictationEnabled } from "./composer-dictation-types";

export type DictationEmissionAdmission =
  | {
      ok: true;
      mode: "live" | "substituted";
      lane: string;
      keyFingerprint: string | null;
      effectClass: "provider_live" | "substituted";
    }
  | { ok: false; code: string; message: string };

/**
 * Fail-closed admission before opening a Realtime transcription transport.
 * Fixture transport never falls through to live OpenAI.
 */
export function admitDictationProviderEmission(input: {
  env?: NodeJS.ProcessEnv;
  projectId: string;
  pilotId: string;
}): DictationEmissionAdmission {
  void input.projectId;
  void input.pilotId;
  const env = input.env ?? process.env;
  if (!composerDictationEnabled(env)) {
    return {
      ok: false,
      code: "FLAG_OFF",
      message: "Composer dictation is not enabled (SFIA_COMPOSER_DICTATION).",
    };
  }

  const lane = (env.STUDIO_LANE ?? "").trim().toUpperCase() || "UNKNOWN";
  const transportKind = (env.SFIA_DICTATION_TRANSPORT || "").trim();

  if (transportKind !== "" && transportKind !== "fixture" && transportKind !== "live") {
    return {
      ok: false,
      code: "TRANSPORT_UNKNOWN",
      message: `Unknown SFIA_DICTATION_TRANSPORT value (use empty/live for provider or fixture).`,
    };
  }

  if (transportKind === "fixture") {
    const vitest = env.VITEST === "true";
    const substitutedQual =
      (env.SFIA_DICTATION_SUBSTITUTED || "").trim() === "1" && lane === "DEV";
    if (!vitest && !substitutedQual) {
      return {
        ok: false,
        code: "FIXTURE_NOT_ADMITTED",
        message:
          "Fixture dictation transport requires VITEST or SFIA_DICTATION_SUBSTITUTED=1 on DEV lane.",
      };
    }
    return {
      ok: true,
      mode: "substituted",
      lane,
      keyFingerprint: null,
      effectClass: "substituted",
    };
  }

  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    const code =
      laneGuard.reasonCode === "OPENAI_KEY_MISSING"
        ? "NO_PROVIDER_KEY"
        : "LANE_GUARD";
    return {
      ok: false,
      code,
      message: laneGuard.reason.slice(0, 240),
    };
  }

  return {
    ok: true,
    mode: "live",
    lane: laneGuard.lane,
    keyFingerprint: laneGuard.keyFingerprint,
    effectClass: "provider_live",
  };
}

/** Narrow live check for call sites that must not open substituted transports. */
export function assertDictationEmissionAllowed(
  env: NodeJS.ProcessEnv = process.env,
): { ok: true } | { ok: false; code: string; message: string } {
  const admission = admitDictationProviderEmission({
    env,
    projectId: "",
    pilotId: "",
  });
  if (!admission.ok) {
    return { ok: false, code: admission.code, message: admission.message };
  }
  if (admission.mode !== "live") {
    return {
      ok: false,
      code: "SUBSTITUTED_ONLY",
      message: "Live transcription requires non-fixture transport admission.",
    };
  }
  return { ok: true };
}
```
