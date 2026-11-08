# Incident post-merge — Pilotage CI (2026-11-08)

**Contexte :** après merge PR #669 (`ebf3d150`), CI `main` run 42477468119 a échoué 2/12 Playwright ML3 (`pilotage-panel`, `b13-authority-legend` absents après clic Pilotage). La CI PR sur le même arbre (`ee6d11e9`) était 12/12 PASS.

**Cause racine :** course entre `load()` du projet et `selectSurface('pilotage')`. Si `load()` termine après le clic alors que `router.push(?surface=pilotage)` n'a pas encore mis à jour `window.location`, `applyUrlDocumentState` réapplique `travail` et écrase la surface Pilotage.

**Correctif :** `pendingSurfaceRef` conserve l'intention de navigation pendant le chargement ; `load()` et l'effet `searchParams` respectent cette intention. E2E ML3 ouvre Pilotage via `surface-pilotage` + attente URL observable.

**Hors scope :** F2/G5, OAuth/Nora LIVE, STABLE/RELEASE, ML4.
