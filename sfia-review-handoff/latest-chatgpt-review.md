# SFIA Review Pack FULL — ML1 Pre-Merge Technical Qualification (PR #649)

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 17:22:35 CET |
| Cycle | **13 — PR readiness** / INC / Critical |
| GO Morris | Contrôle technique final pré-merge (2026-11-04) — **PAS un GO merge** |
| PR | [#649](https://github.com/mcleland147/sfia-workspace/pull/649) OPEN / MERGEABLE / CLEAN |
| Head SHA | `0db58be8240a00593092048ee74299f19374f489` tree `69d48cc33a91af6635856babb620a7735aa55fe6` |
| main | `61a6765a4e8d92760aab595b61b66aa2425906c6` (unchanged) |
| Fichiers projet modifiés ce cycle | **aucun** |
| Versioning | NO RELEASE / STABLE NOT AVAILABLE / NO ADOPTED |

## Verdict

`ML1 PRE-MERGE TECHNICAL QUALIFICATION COMPLETE — MERGE GO PENDING`

Sous-qualification : **READY WITH CARRIED RESERVES** (A cookies + B CI Next).  
Les deux écarts sont **qualifiés avec preuves** ; aucun n'est une faille d'autorité DB prouvée ; chacun exige un **gate Morris distinct** (merge vs remediation).

**Fait de revue (conversation) :** Morris a accepté la recette fonctionnelle ML1 au SHA C3 — non encore consigné dans Git projet (roadmap/delivery-history sync = gate ultérieur).

## Instruction ChatGPT

Relire le handoff distant publié, vérifier PR #649 et son SHA directement, qualifier les deux écarts et proposer l'arbitrage Morris ; **ne pas recommander un GO merge en confondant GitHub required gate SUCCESS et CI Next SKIPPED.**

`NO PROJECT COMMIT / NO PR UPDATE / NO MERGE / NO RELEASE / STABLE NOT AVAILABLE / NO ADOPTED`

## Git Review Index

| Ref | Value |
| --- | --- |
| origin/main | 61a6765a… |
| PR head / local HEAD / RECETTE WT | 0db58be8240a00593092048ee74299f19374f489 |
| Prior handoff | 9b9720b0… |
| CI on #649 | Detect SUCCESS ; Build validate **SKIPPED** ; Required Gate SUCCESS |
| reviewDecision | empty (no GitHub approval recorded) |

## A — Cookies / sessions

### Constat prouvé
1. DEV et RECETTE exposés tous deux sur hôte **`127.0.0.1`** (ports 3100 / 3200). **Le port ne sépare pas les cookies.**
2. Code C3 : Better Auth sans `advanced.cookiePrefix` → cookie défaut **`better-auth.session_token`** (better-auth@1.7.16).
3. Cookie DEV adapter : **`sfia_studio_session`**, `path=/`, `sameSite=lax`, pas de `Domain` → host-only sur `127.0.0.1`.
4. Même nom de cookie + même host ⇒ **COOKIE COLLISION CONFIRMED** (disponibilité / écrasement / déconnexions croisées possibles dans **un même profil navigateur**).
5. Autorité / DB : `BETTER_AUTH_SECRET` **diffère** DEV vs RECETTE ; `DATABASE_URL` **diffère** (`:5433/sfia_next_dev` vs `:5434/sfia_next_recette`) ; `STUDIO_LANE` DEV vs RECETTE. Un jeton de session d'une lane n'est **pas** une preuve d'accès à l'autre DB. **Franchissement d'autorité inter-DB : NOT PROVEN.**
6. RECETTE : login DEV API fail-closed (historiquement 403). Cookie `sfia_studio_session` résiduel DEV envoyé à RECETTE : consume fail-closed hors `STUDIO_LANE=DEV`.

### Résultat A
`COOKIE COLLISION CONFIRMED` (session availability / UX)  
+ `CROSS-DB AUTHORITY BREACH NOT PROVEN` (secrets+DB isolés)

| Champ | Valeur |
| --- | --- |
| Gravité | Haute pour hygiène ENV-01 cohabitation ; moyenne pour sécurité data (pas de preuve de lecture croisée DB) |
| Mitigation recette | Profils navigateur séparés (déjà recommandée) — **pas** isolation produit forte |
| Fix produit (ultérieur) | Hostname distinct résolu + callbacks OAuth alignés **ou** `cookiePrefix` / noms par lane — **nouveau SHA ≠ C3** → rebuild + re-recette sessions |
| Arbitrage merge | **ACCEPTABLE CARRIED RESERVE** si Morris accepte mitigation opérationnelle + GO remediation post-merge/pre-STABLE |
| STOP merge strict ENV-01 | Possible si Morris exige host isolation avant merge — **non forcé ici** faute de preuve breach DB |

### Scénario manuel (sans exécution Cursor)
1. Profil unique : login RECETTE OAuth sur :3200 ; noter présence cookie `better-auth.session_token`.
2. Même profil : ouvrir DEV :3100 et login ; observer si RECETTE se déconnecte au reload :3200.
3. Ne pas coller de valeurs de cookies dans un chat.

## B — CI Next

### Constat prouvé
Workflow `main:.github/workflows/sfia-studio-ci.yml` :
- `detect.is_studio_path` = uniquement `projects/sfia-studio/*` + ce workflow.
- PR #649 ne touche que `projects/sfia-studio-next/**` ⇒ `studio_changed=false`.
- `validate` (build ancien Studio) **SKIPPED**.
- `required_gate` **SUCCESS** car « non-Studio PR ; heavy validation not required ».

Donc : **gate GitHub vert ≠ validation Next**.  
`NEXT CI GAP CONFIRMED`.

Preuves locales historiques au C3 (unit 22 / integration 26 / e2e FAKE 1 / build+tsc+lint) = **HISTORICAL LOCAL**, pas CI distante.

### Arbitrage B
**ACCEPTABLE CARRIED RESERVE** pour merge ML1 **uniquement** avec GO Morris explicite acceptant l'absence de gate Next distant + engagement d'un workflow Next au prochain cycle CI (chemin shared `.github/workflows/` = GO distinct).

Sinon **MERGE BLOCKER** si Morris exige CI Next avant merge.

### Proposition de patch (TEXTE SEULEMENT — non appliqué)

Fichier nouveau proposé : `.github/workflows/sfia-studio-next-ci.yml`

```yaml
name: SFIA Studio Next CI

on:
  pull_request:
    branches: [main]
    paths:
      - "projects/sfia-studio-next/**"
      - ".github/workflows/sfia-studio-next-ci.yml"
  push:
    branches: [main]
    paths:
      - "projects/sfia-studio-next/**"
      - ".github/workflows/sfia-studio-next-ci.yml"

permissions:
  contents: read

concurrency:
  group: sfia-studio-next-ci-${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  next-validate:
    name: Build and validate SFIA Studio Next
    runs-on: ubuntu-latest
    timeout-minutes: 30
    defaults:
      run:
        working-directory: projects/sfia-studio-next/web
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: sfia_ci
          POSTGRES_PASSWORD: sfia_ci
          POSTGRES_DB: sfia_ci
        ports: ["5432:5432"]
        options: >-
          --health-cmd "pg_isready -U sfia_ci -d sfia_ci"
          --health-interval 5s
          --health-timeout 5s
          --health-retries 10
    env:
      STUDIO_LANE: DEV
      STUDIO_DEV_TEST_LOGIN: "1"
      DATABASE_URL: postgres://sfia_ci:sfia_ci@localhost:5432/sfia_ci
      BETTER_AUTH_SECRET: ci-only-not-a-production-secret
      BETTER_AUTH_URL: http://127.0.0.1:3100
      # No GITHUB_/OPENAI_ secrets in CI — OAuth/Nora LIVE must stay BLOCKED here
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
          cache-dependency-path: projects/sfia-studio-next/web/package-lock.json
      - run: npm ci
      - name: Migrate CI DB
        run: |
          psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f src/db/migrations/001_initial_studio_core.sql
          psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f src/db/migrations/002_session_auth_mode.sql
      - run: npx tsc --noEmit
      - run: npm run lint
      - run: npm run build
      - run: npm run test:unit
      - run: npm run test:integration
      # Playwright E2E optional later (browser + time); not required for first Next gate
      - name: Secret pattern scan (Next paths)
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          matches="$(git grep -nE 'BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16}' -- 'projects/sfia-studio-next' || true)"
          if [ -n "$matches" ]; then echo "$matches" >&2; exit 1; fi

  next-required-gate:
    name: SFIA Studio Next Required Gate
    needs: [next-validate]
    if: always()
    runs-on: ubuntu-latest
    steps:
      - run: |
          set -euo pipefail
          test "${{ needs.next-validate.result }}" = "success"
```

**Non-régression legacy :** ne pas modifier `sfia-studio-ci.yml` dans le même commit sans GO ; laisser l'ancien Studio gate inchangé.

**Note migrate CI :** le script `db-migrate.sh` actuel cible Docker DEV — le patch ci-dessus utilise `psql` direct sur service CI (à valider au GO workflow).

## Matrice gates

| Réserve | Statut | Merge | Remediation GO |
| --- | --- | --- | --- |
| A Cookies | COLLISION CONFIRMED ; no DB breach proven | Carried reserve OK with ops mitigation | Host/cookiePrefix — new SHA + re-recette |
| B CI Next | GAP CONFIRMED (SKIPPED ≠ PASS) | Carried reserve OK if Morris accepts | Add Next workflow — shared path GO |
| User recette C3 | ACCEPTED (chat) | Prerequisite for merge GO | Sync roadmap/delivery-history on Git gate |
| Merge PR #649 | **PENDING GO Morris distinct** | — | — |

## Sources consultées (refs)
- main: SEF, roadmap, ADR R4, ENV-01, product-versioning, reference-delivery-r5, routing guide, template v2.6, `.github/workflows/sfia-studio-ci.yml`
- C3: `auth.ts`, `session.ts`, `dev/login/route.ts`, `package.json`, better-auth@1.7.16 cookie defaults
- Runtime read-only: RECETTE :3200 up ; DEV :3100 not listening this check ; PG both up

## STOP / mutations
Aucune. DEV/RECETTE non redémarrés ; aucun secret affiché ; aucun commit projet.
