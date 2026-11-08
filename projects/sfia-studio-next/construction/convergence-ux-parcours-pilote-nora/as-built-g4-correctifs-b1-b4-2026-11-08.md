# As-built G4 — correctifs B1–B4 + accès DEV (2026-11-08)

**Branch :** `feat/next-convergence-ux-g4-construction`
**Lane :** DEV only · **NO RELEASE**
**Parent construction :** `dbaccfda` · base `f0d59bc8`

## Correctifs

| ID | Correction |
|---|---|
| B1 | `buildShellNav` : liens réels `?surface=` sous `projectId` ; labels désactivés (pas `#`) hors contexte ; mobile = mêmes surfaces ; variante F1 par mapping frame↔route↔état |
| B2 | Sync URL↔surface↔document via `searchParams` (Back/Forward/reload) ; `push` pour nav utilisateur ; `replace` seulement normalisation ; lecture URL live en fin de load (anti-race) ; `documentId` étranger → état contrôlé sans contenu |
| B3 | Succès uniquement si `result.status === AVAILABLE` ; CONFLICT conserve brouillon + rebase explicite ; UNKNOWN/ACK → relecture revisions/correlationKey avant retry ; même `correlationKey` |
| B4 | Double-clic bloqué ; ACK perdu → **pas** de second POST auto ; relecture portefeuille ; erreurs réseau pagination/création explicites ; Reprendre = GET |

## Preuves

- `tsc --noEmit` OK
- unit 122 passed
- integration PG 144 passed
- `next build` OK
- Playwright `g4-b1-b4-correctifs.spec.ts` PASS (lane :3101 isolée)
- G2 `verify-g2-pack.sh` VERIFY PASS
- F2/G5 DOM≤2px : **NOT RUN** (pas revendiqué)

## DEV opérateur

- URL : `http://127.0.0.1:3100`
- Login : `/login` → **Pilote A (DEV)** (fake, pas OAuth LIVE)
- Arrêt : `kill` du PID `next dev` sur 3100
