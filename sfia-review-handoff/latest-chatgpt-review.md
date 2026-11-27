# SFIA Review Pack — RECETTE OPERATIONAL ACTIVATION — 2026-11-27

**Cycle :** 11 — Déploiement / release · Critical · RUN/CAPA · NO RELEASE  
**Jalon :** R5 / ML5 / Livraison 1  
**Décision :** required · publish-in-cycle L3  
**Date UTC :** 2026-11-27T09:55Z

---

## 0. Anti-stub

REVIEW PACK COMPLETE — modified product docs reproduced in full below; operational evidence JSON included; secrets redacted; no DSN/password/key material.

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Workspace DEV | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD docs local (entrée activation) | `05e53f622038a3276ef2590037a6aa74341c4e68` |
| Candidat figé | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| BUILD | `rpEczSp61evIZ7d6fnIWR` |
| Digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Handoff précédent | `81addad74818e1e23006125ab4f19f020a9c5f36` · blob `4685277c…` |
| Staged inattendu | **aucun** (docs activation only) |
| Runtime worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |
| PID :3200 | `22935` (post-restart) |
| ENV-01 | COMPLETE — DEV :3100/5433 protégé · RECETTE :3200/5434 · STABLE non touchée |

### 1.1 Divergence HEAD docs (rapport vs handoff)

| Référence | SHA | Explication |
|---|---|---|
| Rapport Cursor / tip branche local | `05e53f62…` | Commit docs cutover **effectif** sur `sfia/next-ml5-integrated-delivery-20261123` (10:35:07 +0100) |
| Handoff distant « HEAD sortie docs » | `4d490431…` | Commit **frère** quasi-identique (même message, 10:34:57) — diff = 2 lignes dans `.tmp-sfia-review/chatgpt-review.md` uniquement |
| Relation | ni ancêtre l’un de l’autre | Double commit local pendant la finalisation cutover ; le tip de branche est `05e53f62` ; `4d490431` n’est **pas** le HEAD de la branche projet |
| Verdict | **RÉCONCILIÉ** | Vérité locale = `05e53f62`. Le handoff cutover a consignié à tort `4d490431` comme sortie docs. |

---

## 2. Rotation PostgreSQL (A2)

| Contrôle | Résultat |
|---|---|
| Rôle | `sfia_next_recette_ml4` (container `sfia-next-recette-pg`) |
| Isolation | Conteneur/port/rôle distincts de DEV (`sfia_next_dev` · :5433) |
| Consommateurs | `~/.config/sfia-studio-next/recette/.env.local` (+ start script source) |
| Hash SCRAM | **changé** (préfixe `SCRAM-SHA-25…` avant/après distincts) |
| SCRAM via bridge IP | **nouveau OK** · **ancien REJECTED** · wrong REJECTED |
| Localhost `pg_hba` | `trust` pour 127.0.0.1 — password non exigé en local TCP ; SCRAM applicable hors localhost |
| DEV | trust OK · 208 projects · password RECETTE non applicable |
| Secrets | jamais affichés · backups `env.local.pre-pg-rotate-*` + marqueurs OBSOLETE mode 600 |
| Rollback règle | restaurer non-secrets · **garder nouveau mot de passe** |

---

## 3. Configuration non secrète effective

### 3.1 start-recette-ml5.sh (contenu complet)

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
# Operational activation — LIVE capabilities (overrides must match admitted product values)
export SFIA_COMPOSER_DICTATION=1
export SFIA_DICTATION_TRANSPORT=live
export SFIA_BOUNDED_JUDGMENT=1
export SFIA_DERIVED_EMBEDDING_BACKEND=pg
export SFIA_DERIVED_EMBEDDING_SEARCH=1
export SFIA_DOCUMENT_VISION_PUNCTUAL=1
# Refuse fixtures / DEV auto-session / substituted dictation
unset STUDIO_FORCE_NORA_FIXTURE SFIA_DICTATION_SUBSTITUTED STUDIO_E2E STUDIO_DEV_AUTO_SESSION || true
export SFIA_BUILD_ID=$(cat .next/BUILD_ID 2>/dev/null || true)
exec npx next start -H 127.0.0.1 -p 3200

```

### 3.2 Variables non secrètes (env + overrides)

| Variable | Valeur |
|---|---|
| STUDIO_LANE | RECETTE |
| STUDIO_PORT / PORT | 3200 |
| SFIA_SOURCE_SHA | e8e6e069… |
| SFIA_COMPOSER_DICTATION | 1 |
| SFIA_DICTATION_TRANSPORT | live |
| SFIA_BOUNDED_JUDGMENT | 1 |
| SFIA_DERIVED_EMBEDDING_BACKEND | pg |
| SFIA_DERIVED_EMBEDDING_SEARCH | 1 |
| SFIA_DOCUMENT_VISION_PUNCTUAL | 1 |
| SFIA_COGNITIVE_MAX_SEGMENTS | 120 |
| SFIA_COGNITIVE_REEVAL_TOKENS | 1000000 |
| SFIA_COGNITIVE_MAX_TOKENS | 2000000 |
| SFIA_WEB_SEARCH_LIVE | 0 |
| SFIA_WEB_SEARCH_ENABLED | 0 |
| STUDIO_DEV_TEST_LOGIN | 0 |
| SFIA_OPENAI_EXPECTED_KEY_FP | f27d814e… (match) |
| SFIA_OPENAI_FORBIDDEN_KEY_FP | ab6bbec8… |
| OpenAI org/projet | **NON VÉRIFIÉ** (pas de GO Admin) |

---

## 4. Capacités et admissions

```json
{
  "at": "2026-11-27T09:52:44.297Z",
  "laneGuard": {
    "ok": true,
    "lane": "RECETTE",
    "keyFpPrefix": "f27d814e"
  },
  "keyFpPrefix": "f27d814e",
  "flags": {
    "composerDictationEnabled": true,
    "dictationTransport": "live",
    "boundedJudgment": true,
    "visionPunctual": true,
    "embeddingSearch": true,
    "embeddingBackend": "pg",
    "webLive": "0",
    "webEnabled": "0",
    "devTestLogin": "0",
    "forceNoraFixture": null,
    "dictationSubstituted": null
  },
  "dictationAdmission": {
    "ok": true,
    "mode": "live",
    "effectClass": "provider_live",
    "keyFpPrefix": "f27d814e"
  },
  "cognitive": {
    "maxSegments": 120,
    "maxTokens": 2000000,
    "reevalTokens": 1000000,
    "defaults": {
      "maxSegments": 120,
      "maxTokens": 2000000,
      "reeval": 1000000
    },
    "notRoomBookingProvisional24_200k": true
  }
}

```

| Capacité | CONFIGURED | ADMITTED | AVAILABLE | LIVE EXERCISED | USER QUALIFIED |
|---|---|---|---|---|---|
| Nora / Responses | oui | lane OK | oui | non | non |
| Allocation cognitive | oui | 120/1M/2M | oui | non | non |
| Decisions | oui | flag | oui | non | non |
| Embeddings hybrid PG | oui | oui | oui | **oui** rebuild | non |
| Vision punctuelle | oui | flag | oui | non | non |
| Dictée Realtime | oui | LIVE OK | oui + mic | non | non |
| FinOps local | oui | — | /settings/consumption 200 | observations rebuild | non |
| Admin collect | OFF | — | — | — | — |
| WEB LIVE | OFF | — | — | — | — |

---

## 5. Indexation bornée

### 5.1 Estimation (avant émission)

```
index estimate RECETTE op activation 2026-11-27
model=text-embedding-3-small
projects=proj_7514cdde (RoomBooking/chantiers360) + proj_04441200 (Pilotage 360)
admissible_sources=4 CURRENT acquis (0 open points, 0 subjects)
RoomBooking_chars=248 est_tokens~62
Pilotage360_chars=253 est_tokens~64
total_est_tokens~126
cost_est_usd~0.00000252
cahier_note=authorized DEV id proj_896d204b absent in RECETTE; using RECETTE RoomBooking proj_7514cdde attached to mcleland147/chantiers360 (not fake proj_f57bca43)
decision=PROCEED_BOUNDED

```

### 5.2 Résultat

```json
{
  "at": "2026-11-27T09:51:28.457Z",
  "lane": "RECETTE",
  "campaignId": "recette-op-activation-index-20261127",
  "keyFpPrefix": "f27d814e",
  "envelope": {
    "campaignId": "recette-op-activation-index-20261127",
    "suspended": false,
    "suspendReason": null,
    "httpAttemptsReserved": 2,
    "httpAttemptsCommitted": 2,
    "httpAttemptsReleased": 0,
    "inputTokenCountAttemptsReserved": 0,
    "inputTokenCountAttemptsCommitted": 0,
    "inputTokensReserved": 376,
    "inputTokensCommitted": 341,
    "outputTokensReserved": 0,
    "outputTokensCommitted": 0,
    "hostedSearchesCommitted": 0,
    "hostedSearchesMeasured": null,
    "hostedSearchMeasureStatus": "NONE",
    "requireNativeInputBound": true,
    "maxHttpAttempts": 8,
    "maxInputTokens": 5000,
    "maxOutputTokens": 1000,
    "familyHttp": {
      "embeddings": {
        "maxHttpAttempts": 6,
        "reserved": 2,
        "committed": 2,
        "released": 0
      },
      "responses": {
        "maxHttpAttempts": 0,
        "reserved": 0,
        "committed": 0,
        "released": 0
      },
      "decisions": {
        "maxHttpAttempts": 0,
        "reserved": 0,
        "committed": 0,
        "released": 0
      },
      "vector_stores": {
        "maxHttpAttempts": 0,
        "reserved": 0,
        "committed": 0,
        "released": 0
      },
      "files": {
        "maxHttpAttempts": 0,
        "reserved": 0,
        "committed": 0,
        "released": 0
      }
    }
  },
  "results": [
    {
      "label": "RoomBooking",
      "projectId": "proj_7514cdde-42e1-4626-8806-3903373d7f69",
      "ok": true,
      "entryCount": 4,
      "tokens": 145,
      "skippedNonAdmissible": 0,
      "backend": "pg",
      "backendEffective": "pg"
    },
    {
      "label": "Pilotage360",
      "projectId": "proj_04441200-60c4-4b0d-8da8-db51a61936e9",
      "ok": true,
      "entryCount": 6,
      "tokens": 196,
      "skippedNonAdmissible": 0,
      "backend": "pg",
      "backendEffective": "pg"
    }
  ]
}

```

| Projet | Chunks | Tokens | Backend |
|---|---:|---:|---|
| RoomBooking `proj_7514cdde…` | 4 | 145 | pg |
| Pilotage 360 `proj_04441200…` | 6 | 196 | pg |
| **Total** | **10** | **341** | pg |

Contrôles PG : 0 revoked/deleted · fingerprints distincts · unique (project_id, source_id, content_fingerprint, model) · owner_pilot attribué · pas de copie index DEV · pas de Vector Store.

---

## 6. Effets LIVE exercés

| Effet | Exercé ? | Détail |
|---|---|---|
| Embeddings rebuild borné | **oui** | 2 HTTP · 341 tokens · campaign `recette-op-activation-index-20261127` |
| Nora Responses | non | réservé Morris |
| Dictée micro | non | AVAILABLE seulement |
| Vision | non | — |
| Decisions | non | — |
| WEB | non | OFF |
| Admin collect | non | OFF |
| Mutation Git | non | — |

---

## 7. Contrôles runtime

| Contrôle | Résultat |
|---|---|
| login :3200 | 200 |
| BUILD marker | `<!--rpEczSp61evIZ7d6fnIWR-->` |
| cwd | worktree e8e6e069…/web |
| FinOps page | 200 |
| Microphone | Micro MacBook Air Input Channels=1 |
| WEB OFF | confirmed flags |
| Fixtures | unset |
| DEV :3100 | down (protégé) |
| Product versioning | NO RELEASE (product-version.ts) |

---

## 8. Documents produit modifiés

### 8.1 Manifeste (contenu complet)

# Manifeste RECETTE — Cutover + activation opérationnelle — 2026-11-27

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
| Ancien runtime servi (pré-cutover) | SHA `a150926cc78fdc04522565eb198ed9f91a612142` · BUILD `6kswoj2a2VHXCLsFYcoim` |
| PostgreSQL | `sfia_next_recette_ml4` · :5434 · rôle `sfia_next_recette_ml4` |
| Schéma | **027** (`derived_embedding_chunks` présent) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` + surcharges `start-recette-ml5.sh` |
| OpenAI clé | Empreinte RECETTE `f27d814e…` · forbidden DEV `ab6bbec8…` · match local **OK** |
| OpenAI org/projet fournisseur | **NON VÉRIFIÉ** (pas de clé Admin / pas de GO vérification projet) |
| Admin collector | OFF · non injecté · pas de nouvelle clé Admin |
| WEB LIVE | OFF (`SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0`) |
| Auto-session DEV | refusé |
| Fixtures | absentes (`STUDIO_FORCE_NORA_FIXTURE` / `SFIA_DICTATION_SUBSTITUTED` unset) |
| Dataset | projects=31 · documents=123 (inchangé hors index) |
| Index borné | RoomBooking `proj_7514cdde…` (4 chunks) + Pilotage 360 `proj_04441200…` (6 chunks) · backend **pg** |
| Consommation index | 341 tokens embeddings (`text-embedding-3-small`) · 2 HTTP Frontier · campaign `recette-op-activation-index-20261127` |
| Microphone hôte | Micro MacBook Air présent (Input Channels: 1) |
| DEV | :3100 down · PG :5433 / `sfia_next_dev` inchangé |

## Activation opérationnelle (A1–A6) — 2026-11-27

| Arbitrage | Statut |
|---|---|
| A1 Cutover accepté avec réserves | Conservé |
| A2 Rotation mot de passe PostgreSQL RECETTE | **EFFECTIVE** — hash SCRAM changé · ancien rejeté via bridge SCRAM · nouveau OK · localhost `pg_hba` reste `trust` · backups `.env` antérieurs = secret obsolète |
| A3 Capacités OpenAI | Flags LIVE activés (voir tableau) |
| A4 Indexation bornée | **FAITE** (2 projets · 10 chunks · pas de sweep 31) |
| A5 Collecte Admin | **DIFFÉRÉE / OFF** |
| A6 WEB LIVE | **OFF** |

### Configuration non secrète effective (runtime via start script)

- `STUDIO_LANE=RECETTE` · `PORT=3200` · `SFIA_SOURCE_SHA=e8e6e069…`
- `SFIA_COMPOSER_DICTATION=1` · `SFIA_DICTATION_TRANSPORT=live`
- `SFIA_BOUNDED_JUDGMENT=1`
- `SFIA_DERIVED_EMBEDDING_BACKEND=pg` · `SFIA_DERIVED_EMBEDDING_SEARCH=1`
- `SFIA_DOCUMENT_VISION_PUNCTUAL=1`
- Cognitive : `MAX_SEGMENTS=120` · `REEVAL=1000000` · `MAX_TOKENS=2000000` (pas 24/200k RoomBooking provisoire)
- Start script **ne force plus** `SFIA_COMPOSER_DICTATION=0`

### Capacités — statuts disciplinés

| Capacité | CONFIGURED | ADMITTED | AVAILABLE | LIVE EXERCISED | USER QUALIFIED |
|---|---|---|---|---|---|
| Nora / Responses API | oui | lane guard OK | oui (runtime) | **non** (parcours Morris) | **non** |
| Allocation cognitive adaptative | oui (120 / 1M / 2M) | oui | oui | **non** | **non** |
| Decisions ciblées | oui (`BOUNDED_JUDGMENT=1`) | flag ON | oui | **non** | **non** |
| Embeddings + hybrid PG | oui | oui | oui (10 chunks) | **oui** (rebuild borné) | **non** |
| Vision documentaire ponctuelle | oui | flag ON | oui | **non** | **non** |
| Dictée Realtime | oui | admission LIVE OK | oui (micro hôte) | **non** | **non** |
| FinOps local | oui | — | page `/settings/consumption` 200 | observations rebuild persistées | **non** |
| Collecte Admin | OFF | — | — | — | — |
| WEB LIVE | OFF | — | — | — | — |

## Corpus indexé (réserve d’identité)

- Cahier cite `proj_896d204b…` (DEV) — **absent** de la base RECETTE.
- RECETTE : `proj_7514cdde…` **RoomBooking** attaché à `mcleland147/chantiers360` (pas le faux `proj_f57bca43…`).
- `proj_04441200…` **Pilotage 360** — projet historique R05.
- Projet synthétique dédié : **non constitué** — hors scope automatique.

## Rollback activation

1. Restaurer paramètres non secrets depuis `.env.local.bak-pre-op-activation-*` / start-script antérieur.
2. **Conserver le nouveau mot de passe PostgreSQL** (ne pas réimporter un `.env` avec l’ancien secret).
3. Ne pas réimporter une ancienne base uniquement pour annuler l’activation.
4. Cutover code : retarget worktree `a150926c` si besoin (voir cutover) — schéma 027 non retiré automatiquement.

## Réserves

- Org/projet OpenAI fournisseur non prouvé (deux clés ≠ deux projets).
- Dictée / Nora / Vision / Decisions : **AVAILABLE** mais **pas LIVE EXERCISED** ni **USER QUALIFIED**.
- Index : seuls 2 projets ; le reste reste à l’indexation au fil de l’usage.
- FinOps historique éventuellement imputé DEV : non réécrit.
- Documents root RECETTE vide (0 fichiers) — inchangé.
- `pg_hba` localhost `trust` : la rotation protège surtout les chemins SCRAM non-localhost.


### 8.2 Cahier R01–R08 (contenu complet)

# SFIA Studio Next — Cahier de recette intégrée ML5 convergence

**Version :** 0.2 — activation opérationnelle A1–A6  
**Date :** 27 novembre 2026  
**Statut :** **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING**  
**Programme :** R5 — convergence OpenAI Studio intégrée (macro-lots 1–3)  
**Responsable de la réception :** Morris  
**Périmètre :** Cutover + activation RECETTE `e8e6e069` · schéma **027** · capacités LIVE bornées  
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
| OpenAI clé RECETTE | empreinte `f27d814e…` — **≠** DEV `ab6bbec8…` (forbidden) · org/projet fournisseur **non vérifié** |
| Dictée produit | `SFIA_COMPOSER_DICTATION=1` · `SFIA_DICTATION_TRANSPORT=live` — **AVAILABLE** · micro hôte présent · **USER QUALIFIED** à faire |
| Judgment / embeddings / vision | flags ON · backend PG · index borné RoomBooking+Pilotage360 |
| WEB LIVE | **OFF** |
| Collecte Admin | **OFF** |
| Config | `~/.config/sfia-studio-next/recette/.env.local` + surcharges `start-recette-ml5.sh` |

Manifeste détaillé : [`ml5-recette-cutover-manifest-20261127.md`](./ml5-recette-cutover-manifest-20261127.md).

---

## 3. Préconditions et règles

- Profil navigateur **distinct** de DEV (ENV-01 cookies sur `127.0.0.1`).
- Vérifier le marqueur HTML `<!--rpEczSp61evIZ7d6fnIWR-->` sur la page d'accueil ou login.
- Ne pas activer `STUDIO_DEV_AUTO_SESSION`, fixtures Nora, WEB LIVE ni collecte Admin sans **GO Morris distinct**.
- **GO A1–A6 2026-11-27** : capacités retenues **activées** en RECETTE ; indexation bornée effectuée ; parcours utilisateur LIVE = qualification Morris (pas de campagne Cursor).
- **RoomBooking RECETTE** : `proj_7514cdde…` attaché `mcleland147/chantiers360` (ID DEV `proj_896d204b…` absent ici) — **ne pas** utiliser le faux `proj_f57bca43…`.
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
| R03-01 | Message texte simple — réponse Nora LIVE | Réponse complète · statuts cohérents | **READY — USER QUALIFICATION** |
| R03-02 | Conversation longue — compositeur visible en bas | Champ + Envoyer accessibles (requalifier `ML4C-A-003`) | **NOT RUN** |
| R03-03 | Demande hors périmètre / cible inconnue | Refus ou `UNKNOWN` sémantiquement correct · pas d'effet silencieux | **NOT RUN** (rapprocher `S02-06-R01`) |
| R03-04 | Capitalisation contexte métier (projet existant) | Pas de fuite cross-pilote | **NOT RUN** |
| R03-05 | Allocation cognitive / adaptive (120 / 1M / 2M actifs) | Comportement conforme au contrat ML5 si sollicité | **READY — USER QUALIFICATION** |

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
| R05-01 | Recherche hybride sur corpus connu (RoomBooking / Pilotage360 indexés) | Résultats pertinents · citations traçables | **READY — USER QUALIFICATION** (10 chunks PG) |
| R05-02 | Question lexicale exacte vs paraphrase (oracle CONV-F22) | Comportement comparable au DEV qualifié | **PENDING GO LIVE** |
| R05-03 | PDF Git `Diagramme BPMN_BatiNova.pdf` | Identification OK · limite scan **SCANNED_NO_TEXT** connue | **PENDING GO** Git read |
| R05-04 | Vision punctuelle sur image autorisée | Lecture bornée si GO vision | **PENDING GO** |
| R05-05 | StockTrack IT-06 (qual corpus) | Ne pas confondre avec BoundTrack ; V1/V2 intactes si sollicité | **NOT RUN** |

**Observations :** schéma 027 · index borné post-activation : RoomBooking 4 chunks · Pilotage360 6 chunks · tokens 341 · **pas** de copie d'index DEV.

---

## R06 — Dictée composer (micro)

**Objectif :** CONV-F31–F34 — **activée** en RECETTE (A3) · qualification utilisateur restante.

| ID | Scénario | Résultat attendu | Verdict Morris |
|---|---|---|---|
| R06-01 | Capability API — flag ON | `enabled: true` · admission LIVE | **READY — USER QUALIFICATION** (admission locale OK) |
| R06-02 | Permission micro — transcription FR LIVE | Texte éditable · envoi manuel unique | **READY — USER QUALIFICATION** |
| R06-03 | Annulation / refuse permission / navigation | Fail-closed · brouillon clavier préservé | **READY — USER QUALIFICATION** |
| R06-04 | Réserves techniques A–D (finalize partial, TRANSPORT_UNKNOWN) | Comportement fail-closed en anomalie env | **DEV PROVEN** — à confirmer en parcours Morris |

**Protections conservées :** durée, concurrence, droits, admission, fermeture de session · pas de fixture · pas de substitution.

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

**Verdict global proposé (Cursor, pré Morris) :** **RECETTE OPERATIONAL ACTIVATION COMPLETE — INTEGRATED CONVERGENCE CAPABILITIES AVAILABLE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING**

---

## 10. Rollback (rappel)

1. Arrêt LaunchAgent · restaurer paramètres **non secrets** depuis bak pre-op-activation · **garder le mot de passe PostgreSQL actuel**.  
2. Cutover code : retarget plist/script vers worktree `a150926c` si besoin.  
3. **Attention :** schéma 027 non retiré automatiquement ; ne pas réimporter une base uniquement pour annuler l’activation config.

Preuves cutover : `…/web/.sfia-evidence/recette-cutover-20261127/` (gitignored).  
Preuves activation : `…-recette-build-e8e6e06961fa/…/web/.sfia-evidence/recette-op-activation-20261127/` (gitignored).

### 8.3 delivery-history (entrée activation)

## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

- **date_utc**: 2026-11-27T10:00Z
- **lane**: RECETTE — activation opérationnelle A1–A6 (pas de construction)
- **branche DEV docs**: `sfia/next-ml5-integrated-delivery-20261123`
- **SHA candidat inchangé**: `e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · digest `18e014c1…`
- **A2**: rotation mot de passe rôle `sfia_next_recette_ml4` · ancien rejeté SCRAM · DEV :5433 inchangé
- **A3**: flags LIVE — dictation/live · judgment · embeddings pg+search · vision · cognitive 120/1M/2M
- **A4**: index borné RoomBooking `proj_7514cdde` (4) + Pilotage360 `proj_04441200` (6) · 341 tokens · 2 HTTP
- **A5**: Admin collect OFF · **A6**: WEB LIVE OFF
- **classe**: NO RELEASE · pas de recompilation · pas de migration
- **statut proposé**: RECETTE OPERATIONAL ACTIVATION COMPLETE — INTEGRATED CONVERGENCE CAPABILITIES AVAILABLE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING



### 8.4 Registre (ligne Version)

| Version | v0.29 candidate — 27 novembre 2026 : **RECETTE operational activation A1–A6** (`e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · PG password rotated · flags LIVE · index borné 10 chunks · WEB/Admin OFF) — **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING** ; v0.28 : cutover ; v0.27 : dictation nominal path final DEV ; … |

---

## 9. Annexe — régularisation preuves cutover / audio / protections

### 9.1 Identité build cutover (référence immuable)

```json
{"buildId":"rpEczSp61evIZ7d6fnIWR","contentDigest":"18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535","sourceSha":"e8e6e06961fa0a7224db3badb3b591b8be8046ac","lane":"RECETTE","tree":"30c12ad9eb48959c0326df9f7629471e8ec847a3","webTree":"03c30e4cdb2dbb443a05a052757b3846199c8d34","at":"2026-11-27T09:29:54Z"}

```

### 9.2 Audio cutover (état figé candidat)

- Réserves A–B landées dans `e8e6e069` (finalize acks · Frontier admission).
- Sur candidat : PCM non finalisé → finalize **partial** possible ; `TRANSPORT_UNKNOWN` fail-closed.
- Activation : dictation **AVAILABLE** (flag+admission+mic) · **pas** LIVE EXERCISED ce cycle.

### 9.3 Protections fournisseur

- Lane guard RECETTE fp `f27d814e…` · forbidden DEV `ab6bbec8…`.
- Frontier ALS obligatoire pour HTTP OpenAI produit.
- WEB LIVE OFF · Admin hors Nora · HumanDecision sous Pilote · gates Cursor/D8 conservés.

### 9.4 Handoffs de référence (SHA only — non recopiés)

- `81addad74818e1e23006125ab4f19f020a9c5f36` cutover
- `a1cc1452961dadf166795e158915308dccab2673`
- `f992d73f8514d282cd63565c9c3e33204ced04a5`

---

## 10. Rollback

1. Restaurer `.env.local.bak-pre-op-activation-*` **sans** réintroduire l’ancien mot de passe PG.  
2. Restaurer start-script forçant `SFIA_COMPOSER_DICTATION=0` si retrait d’activation.  
3. Index : chunks restent (idempotents) ; pas de DROP 027.  
4. Cutover code : retarget `a150926c` worktree si nécessaire.

---

## 11. Réserves

1. Org/projet OpenAI fournisseur **non vérifié**.  
2. Capacités Nora/dictée/vision/decisions : AVAILABLE ≠ USER QUALIFIED.  
3. Index limité à 2 projets ; `proj_896d204b` DEV absent.  
4. `pg_hba` localhost trust.  
5. Documents root RECETTE vide.  
6. FinOps historique cross-lane non réécrit.  
7. Livraison 1 **NOT ACCEPTED GLOBALLY**.

---

## 12. Verdict proposé

**RECETTE OPERATIONAL ACTIVATION COMPLETE — INTEGRATED CONVERGENCE CAPABILITIES AVAILABLE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING**

**Statut SFIA :** READY FOR REVIEW  

**Programme :** R5 IN PROGRESS · ML5 OPEN · LIVRAISON 1 NOT ACCEPTED · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED

---

## 13. Anti-stub final

REVIEW PACK COMPLETE — MODIFIED CONTENT PRESENT — NO SECRETS — READY FOR HANDOFF L3
