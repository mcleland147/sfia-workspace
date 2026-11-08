# As-built G4 — convergence UX construction (2026-11-08)

**Branch :** `feat/next-convergence-ux-g4-construction`  
**Lane :** DEV only  
**Base :** `main@f0d59bc8` (+ pack G2 local VERIFY PASS)

## Livré

### F1 shell
- `StudioShell` + `studio-rail.ts` : 4 variantes `personnel|projet|conversation|inspection`
- Tokens G2 `railEvidence` (fills discriminants personnel `#0C101A` ≠ projet `#0C1020`, widths 246/246/240/244)
- Inter via `next/font/google` (pas de dépôt de fichiers fonte)
- Nav mobile accessible quand le rail desktop est caché

### A1 portefeuille
- `GET /api/portfolio?preparationsCursor=` additive
- `portfolio.preparations.{items,nextCursor}` ; `openPreparations` = même prédicat OPEN + non rattaché
- Keyset 25, curseur opaque, `400 INVALID_CURSOR`
- UI : liste + Reprendre (GET/nav only) + Nouvelle préparation (POST) + pagination

### A2 documents
- Deep-link `/projects/{id}?surface=document&documentId=` → inspection lecture seule
- « Réviser » explicite ; machine `READING→EDITING→SAVING→CONFLICT|UNKNOWN|FAILED`
- Même `correlationKey` au retry ; route D4 GET/POST via `studioErrorResponse` (plus de 401 fourre-tout)

### A3
- Pas de nouvelle autorité D5/D6 ; `SafeMarkdown` / PilotagePanel inchangés en doctrine

## Preuves locales
- Unit : 120 passed (dont `studio-rail`, `portfolio-cursor`)
- Integration PG : 144 passed (dont `portfolio-a1.pg`)
- `tsc --noEmit` OK
- G2 pack `verify-g2-pack.sh` → **VERIFY PASS**

## Hors scope (confirmé)
- Push / PR / merge projet
- RECETTE / STABLE
- F2 oracle image calibré G5 (reporté)
- Playwright BROWSER non rejoué dans ce cycle (à enchaîner en G5)
