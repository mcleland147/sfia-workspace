# SFIA Review Pack Full — E05 RECETTE DEPLOY Cycle 8

## 1. Date, mandat et GO

- **Date:** 2026-11-17 (CET / UTC smoke ~16:14–16:16Z)
- **Cycle:** Cycle 8 — Delivery / mise à disposition RECETTE
- **Profil:** Critical
- **Typologie:** EVOL / DEPLOY / RECETTE
- **Exécutant:** Cursor · **Revue:** ChatGPT · **Réception:** Morris
- **GO Morris consommé:** déploiement contrôlé E05 dans RECETTE `:3200`, smoke LIVE borné (≤2), rollback si nécessaire
- **Non autorisé / non fait:** push produit, PR, merge, Gate C, ML5, STABLE, release, ADOPTED, migration DB, correctif produit

## 2. Sources Git / ref / blobs

| Source | Ref / blob |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Branche docs registre (déclarée) | `docs/next-ml4d-registre-revues-20261116@99b3622b…` |
| Prior handoff tip (avant ce cycle) | `sfia/review-handoff@76e7e54ea311f961cc6364de6045a0dfecd02965` |
| Prior handoff blob | `72cbbf544ee958348ac6e92b69db86e056fe48a4` |
| ENV-01 policy blob (déclaré) | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| Versioning policy blob (déclaré) | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| Gel fonctionnel | `1a820ad489f001bfeef4a9958d1de92e6ab1b5f7` / tree `58baf7b016ddf6a76328120a8a4329185a6880bd` |
| HEAD final déployé | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` / tree `44f62e75a853fd6d68e602acecda2846e30f3366` |

Normative Studio Next (lues / applicables): SEF, roadmap, R5 convergence, environnements-recette-et-promotions, product-versioning, naming, vision-cible, as-built E05 + candidate manifest locaux, conception/contrat Nora sur branche documentaire.

## 3. Local Git Truth Check

Workspace: `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116`

```text
pwd -P → …/sfia-workspace-next-ml4d-ux003-entry-20261116
remote origin → https://github.com/mcleland147/sfia-workspace.git
branch → feat/next-ml4d-project-space-20261116
HEAD → 34a5e102b7e440f0b8bd2586a1689edac196dcb7
status (post-deploy, pre-L3 pack write) → M .tmp-sfia-review/chatgpt-review.md only
diff/cached → none on product paths
```

Candidat **non modifié** pendant le déploiement. Pas de push produit, rebase, merge, ni nouveau commit produit.

`.tmp-sfia-review` exclu de la source de build (build depuis worktree détaché `34a5e102`).

## 4. Contrôle `1a820ad4` / `34a5e102`

```bash
git diff --name-status 1a820ad4… 34a5e102…
# M  projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
# M  projects/sfia-studio-next/construction/ensemble-05-recette-candidate-manifest.md

git rev-parse 1a820ad4:projects/sfia-studio-next/web
# 8177eb592b6673d1449e3912eaff0a6c5ec35d3f
git rev-parse 34a5e102:projects/sfia-studio-next/web
# 8177eb592b6673d1449e3912eaff0a6c5ec35d3f
```

**Verdict contrôle:** arbres `web` **identiques**. Diff tip = documentation only. Déploiement depuis `34a5e102` **autorisé**.

## 5. SHA exact déployé

`34a5e102b7e440f0b8bd2586a1689edac196dcb7`

Worktree runtime détaché:

`/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102`  
`git rev-parse HEAD` → `34a5e102…`  
`HEAD:projects/sfia-studio-next/web` → `8177eb59…`

## 6. Build préparé et BUILD_ID final

- Build isolé: `next build` dans le worktree ci-dessus (pas de hot reload, pas de code dirty DEV).
- **BUILD_ID produit et servi:** `xKkQienCXTPYIqkFElAuE`
- Empreinte fichier: `…/web/.next/BUILD_ID` = `xKkQienCXTPYIqkFElAuE`
- HTML login comment: `<!--xKkQienCXTPYIqkFElAuE-->`
- Référence historique DEV (non servi): `jYz7jUBt1ewRBNp6HbCgs` — **non réutilisé**
- Start script: `start-recette-ensemble05-34a5e102.sh`  
  - `SFIA_SOURCE_SHA=34a5e102…`  
  - `unset STUDIO_FORCE_NORA_FIXTURE`  
  - `npx next start -H 127.0.0.1 -p 3200`  
  - sha256 start: `69a037d26f34c86470de4a79a8d6d5201a0fa052fb648b7002aec3a4529b53be`

## 7. État RECETTE avant

| Élément | Observé / attendu |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| BUILD_ID | `slh3bItXudDCIEaR2WYho` |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Worktree | `…/ensemble04-recette-build-984d77a3` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |

Préflight: processus RECETTE déclaré confirmé avant basculement; backup plist + OLD_IDENTITY sous  
`/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-34a5e102/`.

## 8. Isolation des lanes

| Lane | Port / DB | Statut |
|---|---|---|
| RECETTE | `:3200` / `sfia_next_recette_ml4` @ `5434` | **servie** (PID 68332, WT E05) |
| DEV PG | `sfia-next-dev-pg` @ `5433` | présent, **non utilisé** par start RECETTE |
| Fixture Nora | `STUDIO_FORCE_NORA_FIXTURE` | **ABSENT** au démarrage |
| Mutations Git | `STUDIO_GITHUB_ALLOW_MUTATIONS` | unset / vide |
| Secrets | env file `~/.config/sfia-studio-next/recette/.env.local` | non croisé avec DEV (valeurs non exposées) |

## 9. Vérification DB

```text
current_user / current_database = sfia_next_recette_ml4 / sfia_next_recette_ml4
host:port = 127.0.0.1:5434 (container sfia-next-recette-pg)
schemaRevision (code) = 012_auth_concurrency_safety
migration deploy = NONE
counts before LIVE smoke ≈ documents 117 · messages 502 · projects 22 · users 4 · sessions 53
counts after LIVE smoke = documents 117 · messages 506 · projects 22
visualComposition / e05 structured in messages = 0 (aucune composition E05 prépersistée en RECETTE)
```

## 10. Préparation rollback

- Ancien WT **intact** (`cb638613`, BUILD `slh3bItXudDCIEaR2WYho`).
- Script: `…/ensemble05-recette-build-34a5e102/ROLLBACK-TO-cb638613.sh`  
  sha256 `8982d19fa2b78d7b8d2cf42aea881d0d9c81be82bc6cc101e58c0b30f535f4f9`
- Restaure plist LaunchAgent depuis backup; **ne touche pas** PostgreSQL.
- GO Morris inclut rollback technique immédiat si besoin.
- **Rollback readiness:** OK (non exécuté — nouveau runtime healthy).

## 11. Déroulement du basculement

1. Préflight ENV-01 + rollback assets — OK  
2. Worktree isolé `34a5e102` + `next build` — OK  
3. Start script + LaunchAgent pointant vers E05 — OK  
4. Arrêt ancien runtime / démarrage `:3200` — OK  
5. Identité PID/CWD/BUILD/SOURCE — OK  
6. Ancien artefact conservé — OK  

Aucun nouveau serveur permanent hors `:3200`. Pas de bascule silencieuse d’autre lane.

## 12. Identité et santé du runtime servi

| Check | Résultat |
|---|---|
| Listen | `node` PID **68332** `127.0.0.1:3200` |
| CWD | `…/ensemble05-recette-build-34a5e102/projects/sfia-studio-next/web` |
| HTML BUILD_ID | `xKkQienCXTPYIqkFElAuE` |
| OBS `source_sha` | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| OBS `lane` | `RECETTE` |
| Ready log | Next 15.5.29 Ready (~282ms) |
| Auth session | Pilote connecté (session existante) ; login page GitHub-only (pas de boutons DEV) |

HTTP 200 seul **non** utilisé comme preuve de version — BUILD_ID + CWD + OBS `source_sha` corrélés.

## 13. Smoke fonctionnel

Projet de test: `proj_4f0e3d47-…` **RecetteSmoke-1794833176** (isolé, non métier).

| Parcours | Résultat |
|---|---|
| Portefeuille | PASS |
| Ouverture projet / surface Travail | PASS |
| Brouillon composer (préexistant + post-fill) | PASS |
| Documents Nora | PASS (bibliothèque vide attendue sur ce projet) |
| Refresh après tours | PASS (2× user + 2× assistant UNKNOWN persistés) |
| Isolation inter-projet | PASS — `Intervencia` (`proj_683bcd2e`) → « Projet introuvable » pour ce Pilote |
| Persistance data globale | PASS (docs 117 inchangé) |

## 14. T05 / non-régression E05

- Code E05 présent dans le build servi (`web` tree = freeze).
- **Compositions structurées historiques en RECETTE DB:** absentes (0). Non-régression rendu composition **N/A sur données RECETTE** — dépend de futures réponses LIVE/UAT.
- Markdown historique accessible **uniquement** dans projets du Pilote courant; smoke métier Intervencia volontairement non forcé (isolation OK).
- Pas de réouverture T02/T05/P1-A/P1-B/V01–V03 (aucune anomalie bloquante de rendu produit constatée sur le runtime).

## 15. Nora LIVE — preuve exacte

### Configuration

- `STUDIO_LANE=RECETTE`
- `OPENAI_API_KEY` = SET (len observée côté process env; **valeur non publiée**)
- `STUDIO_FORCE_NORA_FIXTURE` = ABSENT / unset au start
- `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY`
- Mode UI/status: `Nora openai-agents-sdk-live · UNKNOWN` (pas `deterministic-fixture`)

### Smoke 1 — demande simple (R01-like)

- Prompt: « Quelle différence fais-tu entre une observation et une hypothèse dans un projet ? »
- `generation_id`: `gen_38297f12-528e-4026-a571-c20ff1f7c56d`
- OBS: `d3.nora.policy_selected` model `gpt-6.1-sol` → `d3.nora.provider_attempt` (stream) → `d3.turn.completed` outcome **UNKNOWN** (~170ms wall)
- D4: `qualification_kind=NONE` / `d4_attempted=false`
- UI: message fail-closed générique LIVE UNKNOWN; **pas de fixture**
- Composition graphique: **ABSENTE**

### Smoke 2 — comparaison (R03-like)

- Prompt: « Compare une approche de déploiement progressive et simultanée… »
- `generation_id`: `gen_fa348ac8-66a8-4ae2-b851-2dfec311ed5f`
- Même chaîne: provider_attempt → completed **UNKNOWN** (~60ms)
- Pas de fixture; composition **ABSENTE**

### Qualification frontière

| Question | Réponse |
|---|---|
| Appel fournisseur réellement tenté ? | **OUI** (`provider_attempt` ×2, `run()` path) |
| Réponse fournisseur utile obtenue ? | **NON** (exception → UNKNOWN) |
| Fixture substituée ? | **NON** |
| D3 qualification métier riche ? | **NON** (`UNAVAILABLE` / NONE) |
| Cause probable (non secrète) | modèle demandé `gpt-6.1-sol` (`NORA_STUDY_MODEL`) + exception fournisseur très rapide; détail technique non exposé à l’UI (by design) |
| Correctif produit appliqué ? | **NON** (hors GO) |

**LIVE smoke status: FAILED (provider UNKNOWN ×2) — frontière correctement qualifiée, pas de FAKE silencieux.**

## 16. Fake / Real Qualification

| Frontière | Niveau |
|---|---|
| Fixtures E05 | DETERMINISTIC (cycles antérieurs) — **non rejoué ici** |
| Rendu navigateur DEV | BROWSER antérieur — **non promu** |
| Build RECETTE | **RUNTIME VERIFIED** (`xKkQienCXTPYIqkFElAuE` + SHA) |
| PostgreSQL RECETTE | **IDENTITY + PERSISTENCE VERIFIED** |
| Nora fournisseur | **LIVE ATTEMPTED — UNKNOWN/FAILED** (pas SUCCESS) |
| Composition LIVE | **NOT PRODUCED** (smoke) |
| Git D9 REAL | NOT EXECUTED |
| D7/Cursor REAL | NOT EXECUTED |
| UAT Morris R01–R08 | **PENDING** |
| Gate C / STABLE / ADOPTED | OPEN / NON ACQUIS |

## 17. Manifeste déploiement

Fichier runtime non secret:

`/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102/DEPLOY-MANIFEST-E05-34a5e102.md`

Contenu résumé §6–§10 + smoke. Gate: **DEPLOY RECETTE ONLY**. Pas d’inscription rétroactive du BUILD_ID dans le commit source figé.

## 18. État des données

- Aucune réinit DB, aucun wipe documents/comptes.
- +4 messages smoke sur RecetteSmoke uniquement.
- documents = 117 inchangé.
- Identités / permissions inchangées.
- Rollback **sans écrasement données** disponible.

## 19. État RECETTE après

| Élément | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` **accessible** |
| SOURCE_SHA servi | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| BUILD_ID | `xKkQienCXTPYIqkFElAuE` |
| PID | 68332 |
| LaunchAgent Program | `start-recette-ensemble05-34a5e102.sh` |
| Ancien WT | intact |
| Protocole R01–R08 | documenté dans as-built E05 — verdicts **non préremplis** |

## 20. Git produit après

- Tip produit local: **inchangé** `34a5e102…`
- Seule écriture locale cycle: `.tmp-sfia-review/chatgpt-review.md` (+ manifeste runtime hors branche produit)
- Aucun commit produit, aucun push produit

## 21. Réserves

1. **Nora LIVE smoke FAILED** (UNKNOWN ×2) — UAT graphique R01–R08 **bloquée côté fournisseur** jusqu’à diagnostic modèle/clé/entitlement hors cycle deploy (nouveau GO DEV si correctif code).
2. Aucune composition E05 prépersistée en DB RECETTE pour non-régression visuelle data-driven.
3. OBS `build_id` null dans événements SFIA_OBS (SOURCE_SHA présent) — mineur.
4. Login RECETTE = GitHub only (attendu lane protégée).

## 22. Verdict unique

**`E05 RECETTE DEPLOYED WITH RESERVES — MORRIS REVIEW REQUIRED`**

Sous-statut Nora: **LIVE SMOKE FAILED (UNKNOWN ×2, no fixture)**.

Runtime E05 identifié, données préservées, rollback prêt, `:3200` servi. Réserve non bloquante pour l’identité du déploiement; **bloquante pour une séance UAT graphique LIVE réussie** tant que le fournisseur échoue.

## 23. Prochain gate Morris

1. Examiner réserve LIVE (modèle `gpt-6.1-sol` / entitlement / config RECETTE) — éventuel **GO DEV correctif** distinct (pas patcher RECETTE in-place).
2. Ou tenter UAT R01–R08 si Morris dispose d’un chemin LIVE alternatif déjà validé.
3. Pas de Gate C / STABLE / release sans GO explicite.

---

### Commandes / empreintes significatives (extrait)

```text
WEB_TREE_1a820ad4 = WEB_TREE_34a5e102 = 8177eb592b6673d1449e3912eaff0a6c5ec35d3f
BUILD_ID = xKkQienCXTPYIqkFElAuE
OLD_BUILD_ID = slh3bItXudDCIEaR2WYho
OLD_SHA = cb638613890bff769b3cbbcc99449b430c89faa6
PID = 68332
schemaRevision = 012_auth_concurrency_safety
```

### Fichiers créés ce cycle (hors produit Git)

#### CREATED (runtime): `DEPLOY-MANIFEST-E05-34a5e102.md`

Voir fichier complet dans le worktree runtime E05 (contenu §17).

#### UPDATED (review only): `.tmp-sfia-review/chatgpt-review.md`

Le présent Review Pack Full (mono-cycle).

### Aucune modification fonctionnelle produit

Confirmé.
