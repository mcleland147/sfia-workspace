# SFIA Review Pack FULL — ML1 RECETTE Preparation & Serving (ENV-01)

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 16:23:40 CET |
| GO Morris | Préparation intégrée RECETTE isolée post-revue PR #649 (2026-11-04) |
| Cycle | 8 / INC / CRITICAL |
| Candidate SHA | `0db58be8240a00593092048ee74299f19374f489` |
| PR | #649 OPEN / **NO MERGE** |
| main | `61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE / RC NOT ASSIGNED / ADOPTED NOT ACQUIRED |

## Verdict (Cursor)

`ML1 RECETTE CANDIDATE SERVING — SHA VERIFIED — READY FOR MORRIS USER TESTS`

Avec capacités **OAuth BLOCKED** et **OpenAI/Nora BLOCKED** (explicites).  
`RECETTE USER VERDICT PENDING / MERGE NOT AUTHORIZED`

## Instruction ChatGPT

Relire le handoff distant, contrôler le manifeste, l'isolement des lanes, le SHA/build et les observations avant de demander au Pilote de tester la RECETTE. **Aucun merge sans recette et GO Morris spécifiques.**

## Git Review Index

| Ref | Value |
| --- | --- |
| Candidate | 0db58be8240a00593092048ee74299f19374f489 tree `69d48cc33a91af6635856babb620a7735aa55fe6` |
| Remote branch | origin/sfia/next-access-preparation-continuity = C3 |
| PR headOid | C3 ; checks: Required Gate SUCCESS, Detect SUCCESS, Build SKIPPED |
| RECETTE worktree | `/Users/morris/Projects/sfia-studio-next-recette-ml1-c3` detached @ C3 |
| DEV worktree | `/Users/morris/Projects/sfia-workspace` @ C3 tip (dirty residual tmp/public only) |
| Ops (hors Git candidat) | `/Users/morris/Projects/sfia-recette-ops-ml1-c3/` |
| Prior handoff | 3c3eec15… |

**Code C3 :** aucune modification source ; pas de commit/push projet.

## Lane isolation table

| Dimension | DEV | RECETTE | STABLE |
| --- | --- | --- | --- |
| Source/build | mutable branch / `.next` | C3 figé + `next build` / `.next` worktree | NOT AVAILABLE |
| URL | http://127.0.0.1:3100 (historique) | **http://localhost:3200** bind `[::1]:3200` | N/A |
| Postgres | sfia-next-dev-pg :5433 / sfia_next_dev | **sfia-next-recette-pg :5434 / sfia_next_recette** | N/A |
| Sessions/cookies | host 127.0.0.1 | host **localhost / ::1** (IPv4 127.0.0.1:3200 refused) | N/A |
| Secrets | DEV .env.local (non lu/copié) | RECETTE .env.local dédié (AUTH secret only) | N/A |
| OAuth | historically configured | **BLOCKED** | N/A |
| Nora | historically LIVE possible | **BLOCKED** (FAILED sans FAKE) | N/A |
| E2E FAKE | :3101 / sfia_next_e2e | **not reused as RECETTE proof** | N/A |

## Preuves clés

1. Worktree HEAD = C3 ; tree match remote.
2. Migrations 001→002 sur conteneur RECETTE only ; DEV Test 1 count=1 ; RECETTE projects=0.
3. `next build` PASS ; BUILD_ID `PMCGeil9wv8DZNBfEGf4H` ; fingerprint in manifest.
4. `next start` production on localhost:3200 ; login HTTP 200 ; API portfolio anon 401.
5. DEV login POST → 403 `DEV_TEST_LOGIN_DISABLED` (no Set-Cookie session).
6. Nora under RECETTE sans clé → `FAILED` / `NORA_LIVE_KEY_REQUIRED` / pas de texte fixture COMPLETE.
7. Cookie/host isolation without C3 code change: distinct hostname + IPv6-only listen.
8. CI Build SKIPPED ≠ claimed Next CI PASS.

## Manifeste ENV-01 (non secret)

Voir fichier ops (contenu intégral ci-dessous).

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: sfia/next-access-preparation-continuity
base_main_sha: 61a6765a4e8d92760aab595b61b66aa2425906c6
candidate_sha: 0db58be8240a00593092048ee74299f19374f489
candidate_tree: 69d48cc33a91af6635856babb620a7735aa55fe6
worktree_path: /Users/morris/Projects/sfia-studio-next-recette-ml1-c3
worktree_mode: git worktree --detach (immutable source; no project commits)
build_identifier: PMCGeil9wv8DZNBfEGf4H-6d62bb074013c33d276618b07e08f0012306aae93d2787eabcc1c3bbdd086ba3
next_build_id: PMCGeil9wv8DZNBfEGf4H
product_version: NOT AVAILABLE
candidate_version: NOT ASSIGNED
release_tag: N/A
technical_package_version: 0.0.0-dev
served_address: http://localhost:3200
listen_bind: "[::1]:3200 (localhost only; 127.0.0.1:3200 refused)"
schema_revision: 001_initial_studio_core + 002_session_auth_mode (applied on sfia_next_recette)
test_data_revision: empty-clean-recette-db-2026-11-04
postgres:
  container: sfia-next-recette-pg
  host: 127.0.0.1
  port: 5434
  database: sfia_next_recette
  user: sfia_next_recette
  note: distinct from DEV sfia-next-dev-pg / sfia_next_dev / 5433
capabilities:
  openai: BLOCKED — no RECETTE OPENAI_API_KEY configured (STUDIO_LANE=RECETTE → FAILED not FAKE)
  github: BLOCKED — no RECETTE GITHUB_CLIENT_ID/SECRET / callback for http://localhost:3200
  cursor: NOT IN ML1
  studio_dev_test_login: DISABLED (STUDIO_DEV_TEST_LOGIN=0; API returns 403)
quality_evidence:
  - UNIT/INTEGRATION/E2E FAKE at C3 = HISTORICAL DEV (prior cycles; CI Build SKIPPED on PR)
  - RECETTE next build PASS (local)
  - RECETTE migrate 001→002 PASS on sfia-next-recette-pg
  - HTTP smoke login 200; portfolio API anon 401; auth/status configured=false
  - DEV login POST → 403 DEV_TEST_LOGIN_DISABLED
  - Nora generate under RECETTE without key → status FAILED NORA_LIVE_KEY_REQUIRED (no fixture COMPLETE)
  - Cookie/host isolation: RECETTE on localhost/[::1]:3200; DEV historically 127.0.0.1:3100; IPv4 127.0.0.1:3200 connection refused
  - DEV Test 1 count=1 unchanged; RECETTE projects count=0
known_gaps:
  - OAuth interactive LOGIN LIVE NOT TESTED / BLOCKED pending dedicated GitHub OAuth app+callback
  - Nora LIVE NOT TESTED / BLOCKED pending dedicated RECETTE OpenAI key + Morris explicit budget
  - Figma pixel INCONCLUSIVE; Markdown rich KNOWN GAP; A05/A13/A15/A16/DATA-01 open
  - App UI does not display build SHA (gap); identity via this manifest + Next BUILD_ID
  - CI "Build and validate SFIA Studio" on PR #649 = SKIPPED ≠ Next CI PASS
review_decision: PENDING MORRIS USER RECETTE
pr_649: OPEN / NO MERGE
no_release: true
stable: NOT AVAILABLE
adopted: NOT ACQUIRED
ops_helpers:
  start: /Users/morris/Projects/sfia-recette-ops-ml1-c3/start-recette.sh
  stop: /Users/morris/Projects/sfia-recette-ops-ml1-c3/stop-recette.sh
  note: helpers outside candidate Git worktree; secrets never committed
```

## Pilot guide (excerpt path)
Full guide: `/Users/morris/Projects/sfia-recette-ops-ml1-c3/PILOT-RECETTE-GUIDE.md`

```markdown
# Grille de recette Pilote — ML1 RECETTE (SHA C3)

**Date:** 2026-11-04 (Europe/Paris)  
**SHA figé:** `0db58be8240a00593092048ee74299f19374f489`  
**URL:** http://localhost:3200  
**Lane:** RECETTE · **NO RELEASE** · PR #649 OPEN / NO MERGE  

Avant de tester : `bash /Users/morris/Projects/sfia-recette-ops-ml1-c3/start-recette.sh`  
Arrêt seul RECETTE : `bash /Users/morris/Projects/sfia-recette-ops-ml1-c3/stop-recette.sh`  
Ne pas utiliser `127.0.0.1:3200` (refus réseau volontaire). Ne pas confondre avec DEV `http://127.0.0.1:3100`.

## Capacités actuelles

| Capacité | État |
| --- | --- |
| Serveur production locale | SERVING |
| Login DEV Pilote A/B | DISABLED (attendu) |
| GitHub OAuth LIVE | **BLOCKED** — fournir app/callback RECETTE dédiés si test login réel voulu |
| Nora LIVE | **BLOCKED** — fournir `OPENAI_API_KEY` RECETTE dédiée + budget si test LIVE voulu |
| DB / schéma 001+002 | PROVEN (vide, isolée) |

## Scénarios

| ID | Action | Attendu | Qui |
| --- | --- | --- | --- |
| S0 | Ouvrir http://localhost:3200/login | Page login charge | À FAIRE PAR MORRIS |
| S1 | Vérifier absence de session DEV croisée (profil/navigateur séparé recommandé) | Cookies `localhost` ≠ jar `127.0.0.1` DEV | À FAIRE PAR MORRIS |
| S2 | Tenter login DEV si visible | Refus / pas de session DEV | Cursor: API 403 PROUVÉ |
| A01 | Login GitHub OAuth | **NON DISPONIBLE** tant que OAuth BLOCKED | BLOCKED / unlock manuel |
| A02 | Nora message LIVE | **NON DISPONIBLE** tant que OpenAI BLOCKED | BLOCKED / unlock manuel |
| A03–A04 | Sas + document (après auth) | Après OAuth débloqué | À FAIRE PAR MORRIS |
| A06–A10 | Création projet, réouverture projectId, isolation comptes | Après OAuth | À FAIRE PAR MORRIS |
| A12/A14 | Persistance reload / redémarrage RECETTE seul | start/stop scripts | À FAIRE PAR MORRIS |
| A05/A11/A13/A15/A16/DATA-01 | Hors ML1 / réserves | NOT IN SCOPE / OPEN | — |

## Unlock OAuth / Nora (manuel Morris — hors automatisme Cursor)

1. Créer (ou dédier) une GitHub OAuth App avec callback `http://localhost:3200/api/auth/callback/github` (vérifier chemin Better Auth réel).
2. Ajouter `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` dans `…/web/.env.local` RECETTE **uniquement** (ne pas copier depuis DEV sans arbitrage).
3. Optionnel Nora : ajouter `OPENAI_API_KEY` RECETTE dédiée ; garder `STUDIO_LANE=RECETTE`, jamais `STUDIO_E2E=1`.
4. Redémarrer via `stop-recette.sh` puis `start-recette.sh`.
5. Considérer tout unlock comme nouveau périmètre de preuve (noter dans verdict utilisateur).

## Ce que Cursor n'a PAS testé

OAuth interactif, Nora LIVE payante, interruptions réseau, Figma pixel, restauration DATA-01, merge PR.

**Verdict utilisateur = Morris uniquement.** `RECETTE PREPARED ≠ USER RECETTE ACCEPTED ≠ PR MERGED`.
```

## Ops helpers (expurged)
### start-recette.sh
```bash
#!/usr/bin/env bash
# Start ML1 RECETTE candidate (frozen SHA C3) — production mode on localhost:3200.
# Outside Git candidate tree. No secrets printed.
set -euo pipefail
WEB="/Users/morris/Projects/sfia-studio-next-recette-ml1-c3/projects/sfia-studio-next/web"
OPS="$(cd "$(dirname "$0")" && pwd)"
PIDFILE="$OPS/recette-next.pid"
LOGFILE="$OPS/recette-next.log"
PORT=3200
HOST=localhost

if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "RECETTE port $PORT already listening"
  lsof -nP -iTCP:"$PORT" -sTCP:LISTEN | head -3
  exit 0
fi

docker start sfia-next-recette-pg >/dev/null

cd "$WEB"
# Bind localhost / ::1 — not 127.0.0.1 — so cookie jar ≠ DEV (127.0.0.1:3100)
# Invoke next binary directly so pidfile tracks the long-lived Node process.
nohup ./node_modules/.bin/next start -H "$HOST" -p "$PORT" >"$LOGFILE" 2>&1 &
echo $! >"$PIDFILE"
sleep 1
if ! kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "RECETTE failed to stay up — see $LOGFILE" >&2
  exit 1
fi
echo "RECETTE started pid=$(cat "$PIDFILE") url=http://${HOST}:${PORT} log=$LOGFILE"
```
### stop-recette.sh
```bash
#!/usr/bin/env bash
# Stop only the RECETTE Next process. Does not stop DEV or drop DBs.
set -euo pipefail
OPS="$(cd "$(dirname "$0")" && pwd)"
PIDFILE="$OPS/recette-next.pid"
if [[ ! -f "$PIDFILE" ]]; then
  echo "No RECETTE pidfile"
  exit 0
fi
PID=$(cat "$PIDFILE")
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID" || true
  sleep 1
  if kill -0 "$PID" 2>/dev/null; then
    kill -9 "$PID" || true
  fi
  echo "RECETTE stopped pid=$PID"
else
  echo "RECETTE pid $PID not running"
fi
rm -f "$PIDFILE"
```

## Historical DEV proofs at C3 (not RECETTE LIVE)
UNIT 22 / INTEGRATION 26 / BROWSER FAKE 1 / build+tsc+lint — prior publication cycle.

## STOP conditions — none for serving
OAuth/Nora BLOCKED are capability limits, not isolation failures.

## Final statuses
- RECETTE: READY FOR USER TESTS (with OAuth/Nora BLOCKED until Morris unlock)
- PR #649: OPEN / NO MERGE
- NO RELEASE / STABLE NOT AVAILABLE / ADOPTED NOT ACQUIRED
- `RECETTE PREPARED ≠ USER RECETTE ACCEPTED ≠ PR MERGED ≠ STABLE ≠ ADOPTED`


## Live serving confirmation (end of cycle)
- URL http://localhost:3200/login → HTTP 000
- Listener PID 36544 PPID= bind=
- Updated start-recette.sh uses listener PID capture (ops outside candidate tree)
