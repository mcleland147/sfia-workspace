# Review Pack FULL — Ensemble 05 RECETTE candidate delivery

**SFIA v2.6 · R5 / ML4D / Ensemble 05 · Cycle 8+9 mono-cycle**  
**Date :** 2026-11-18  
**Profil :** Critical  
**ENV-01 :** REQUIRED · respecté  
**Versioning produit :** REQUIRED · STABLE `NOT AVAILABLE` · candidate version `NOT AVAILABLE`  
**Review Handoff :** L3 publish-in-cycle  
**Verdict unique :** `RECETTE DEPLOYED — READY FOR MORRIS USER ACCEPTANCE`

---

## 1. Git Truth Check

| Check | Valeur |
| --- | --- |
| toplevel (DEV WT) | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| branche technique locale | `sfia/next-ml4d-ensemble05-composition-recette-candidate` |
| HEAD candidat | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| tree | `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| previous RECETTE SHA | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| build WT | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-ba1e55ec` @ same SHA (detached) |
| push produit | **NON effectué** (interdit) |
| PR / merge / tag | **NON** |

Worktree DEV conserve des preuves E05 dirty non nécessaires au runtime RECETTE (evidence/png) — runtime servi uniquement depuis le WT build figé.

---

## 2. Sources, versions et décisions Morris

- GO Morris 2026-11-18 : Ensemble 05 **accepté avec réserves** pour mise à disposition RECETTE.
- Matrice convergence **V0.9** prévaut (C-01…C-22).
- Review Handoff antérieur consolidation/amendement : `0cda342f` (référence, non rejoué).
- Politiques : ENV-01 blob `14b61f0d…` · versioning blob `8bc93e0f…` (réfs contrat).
- Aucune promotion STABLE · aucune release officielle.

---

## 3. État initial réel de RECETTE (avant cutover)

| Élément | Valeur observée |
| --- | --- |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Worktree | `…/ensemble05-recette-build-e224d627` |
| SHA | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| BUILD_ID | `MKmBUvdIXyydv_DpUTGZi` |
| Adresse | `http://127.0.0.1:3200` |
| Mode | `next start` production (pas de hot reload) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` |
| PG | container `sfia-next-recette-pg` · port **5434** · DB `sfia_next_recette_ml4` · user `sfia_next_recette` |
| Composition E05 | **absente** du build e224d627 |

Backup pré-cutover : `~/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-composition-20261118-161805/`

---

## 4. État initial de DEV

| Élément | Valeur |
| --- | --- |
| Branche rapportée | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (dirty) |
| Contenu E05 | composition + elkjs + tests + preuves |
| Runtime RECETTE | **non** servi depuis DEV dirty |

---

## 5. Inventaire configuration non sensible

Clés présentes (24) — fingerprint SHA256 préfixe `8f6dd4c82b61eef6` :

`BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `DATABASE_URL`, `GITHUB_APP_*`, `GITHUB_CLIENT_*`, `INTEGRATION_TOKEN_ENCRYPTION_KEY`, `OPENAI_API_KEY`, `SFIA_COG_PROFILE_TYPE`, `SFIA_DOCUMENT_ROOT`, `SFIA_SOURCE_SHA`, `STUDIO_DEV_TEST_LOGIN`, `STUDIO_GITHUB_ALLOW_MUTATIONS`, `STUDIO_GITHUB_PROVIDER`, `STUDIO_GITHUB_USER_OAUTH`, `STUDIO_LANE`, `STUDIO_PORT`, …

- `STUDIO_FORCE_NORA_FIXTURE` : **absent** du fichier · **forcé vide** au start candidat  
- `STUDIO_NORA_SIMULATED_PROVIDER` : **absent** · **forcé vide**  
- `.env.local` DEV : **non recopié**

---

## 6. Comparaison ancien RECETTE / Ensemble 05

| Domaine | RECETTE e224d627 | Ensemble 05 ba1e55ec | Action |
| --- | --- | --- | --- |
| Conversation / Nora | présent | D3 instructions + sortie structurée | Intégré |
| Composition | ancienne / absente E05 | bibliothèque adaptative + graphs | Intégré |
| ELK / relations | absent | elkjs 0.10.2 | Intégré |
| Persistance | schéma 012 | compatible, **pas de migration** | Préservé |
| Auth / sessions | existant | inchangé | Préservé |
| Documents | existant | inchangé fonctionnel | Préservé |
| Config lane | recette ~/.config | réutilisée | Préservé |

Delta Git `e224d627..ba1e55ec` : **57 files**, +11617 / −700.

---

## 7. Stratégie d'intégration retenue

1. Partir du SHA RECETTE `e224d627` (réellement servi).  
2. Intégrer le delivery E05 depuis DEV dirty **via commit local figé**.  
3. Build isolé dans WT `…-ba1e55ec`.  
4. Cutover LaunchAgent → start script candidat.  
5. Conserver DB + `.env.local` RECETTE.  
6. Rollback script vers e224d627 prêt.

---

## 8–10. Diff candidat / fichiers

Commit : `ba1e55ece782eb9f2bbfad9336ed346de1acf037`  
Message : `feat(ensemble05): freeze Nora adaptive composition candidate for RECETTE`

Fichiers clés ajoutés/modifiés (extrait) :

- `src/components/figma/NoraComposition*.tsx` + `nora-composition/*`
- `src/domains/conversation/conversational-composition/*`
- `src/domains/conversation/directed-layout/*` (elk)
- `src/domains/conversation/nora-adapter.ts` (D3)
- `package.json` / lock — `elkjs@^0.10.2`
- tests unit/e2e Level-B / LIVE tooling (tooling only ; LIVE auto non exécuté en RECETTE)

Contenus FULL des correctifs consolidation déjà publiés sous  
`docs/evidence/.../ensemble05-final-consolidation-20261118/modified-content/` (réf. handoff `0cda342f`).

---

## 11–12. SHA candidat & Build ID

| | |
| --- | --- |
| candidate_sha | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| build_identifier | `_eeb9Jy2hV242myk86VTu` |
| SFIA_SOURCE_SHA (runtime) | forcé dans start script = candidate_sha |

---

## 13–15. Build, tests, TypeScript

| Étape | Résultat |
| --- | --- |
| `npm ci` (WT build) | OK |
| Vitest | **73 PASS** |
| `next build` | **OK** → BUILD `_eeb9Jy2hV242myk86VTu` |
| elkjs dans bundle | présent (chunks server/static) |
| Secrets dans bundle/scripts start | aucun secret détecté dans scripts start/rollback |
| TypeScript global | **dette préexistante** — non présentée comme PASS ; **non bloquante** du build prod |

---

## 16. DB / migrations

- `schemaRevision` code : `012_auth_concurrency_safety`
- **Aucune migration exécutée**
- Counts avant/après cutover : `23|117|534` **identiques**
- Projets Morris (pilote `pilot_98a7a89e…`) toujours présents (ALTAÏR, Cockpit, Intervencia, CampusFlow, …)
- Verdict migration : **non requis**

---

## 17. Isolation des environnements

| Lane | Port | WT | Notes |
| --- | --- | --- | --- |
| DEV | 3100 (historique) | WT dirty | non touché pour runtime RECETTE |
| RECETTE | **3200** | ba1e55ec build | servi |
| STABLE | — | — | **non concernée** |

Réserve ENV-01 : collision cookies possible DEV/RECETTE sur `127.0.0.1` — profils navigateur séparés recommandés.

---

## 18. Configuration fournisseur

- Clés/provider RECETTE préservés (fichier lane).
- FORCE/SIM **désactivés** au démarrage candidat.
- **Aucun nouvel appel LIVE automatisé** Cursor dans ce contrat.
- Campagne LIVE antérieure 12/12 (DEV) = preuve comportementale antérieure, non rejouée.

---

## 19–23. Démarrage, smoke, continuité, compositions, URL

| Contrôle | Résultat |
| --- | --- |
| LaunchAgent → `start-recette-ensemble05-ba1e55ec.sh` | OK |
| Listen `:3200` | OK · PID 84964 · cwd WT ba1e55ec |
| `/login` | 200 |
| Dev test login + portfolio | 200 |
| Projet existant surface Travail | 200 — fil + **composition comparaison** relue |
| Documents Nora | 200 bibliothèque |
| Isolation API Pilot B → projet A | **404** |
| Continuité DB | PASS |
| URL | `http://127.0.0.1:3200` |

Preuve browser :  
`docs/evidence/.../ensemble05-recette-delivery-20261118/smoke-travail-composition-comparison-3200.png`

---

## 24. Manifest RECETTE

Voir `docs/evidence/.../ensemble05-recette-delivery-20261118/00-recette-manifest.md`

---

## 25. Rollback

| | |
| --- | --- |
| Script | `…/ensemble05-recette-build-ba1e55ec/ROLLBACK-TO-e224d627.sh` |
| Cible | start e224d627 · BUILD `MKmBUvdIXyydv_DpUTGZi` |
| Backup plist/start | `…/sfia-recette-backups/ml4d-e05-composition-20261118-161805` |
| Données | non altérées par rollback code |

Script présent et cohérent ; non exécuté (cutover réussi).

---

## 26. Réserves reportées (acceptées)

Matrice V0.9 C-01…C-22 ; sélection cards/matrix LIVE post-D3 non requalifiée ; critères matrice incomplets ; timeline « fictive » ; preuves Figma/runtime partielles ; responsive/a11y non exhaustifs ; relecture PG historique complète non démontrée ; tsc global ; coûts fournisseur non mesurés ici.

---

## 27. Dossier de recette Morris

`docs/evidence/.../ensemble05-recette-delivery-20261118/01-morris-user-dossier.md`  
Journal anomalies : `02-smoke-and-anomaly-journal.md`

---

## 28. Git actions

| Action | Statut |
| --- | --- |
| Commit local candidat | FAIT `ba1e55ec` |
| Push branche produit | **INTERDIT / non fait** |
| PR / merge / tag | **NON** |
| Handoff L3 `sfia/review-handoff` | **à publier in-cycle** (ce pack) |

---

## 29. Statuts de preuve

| Mode | Statut |
| --- | --- |
| DETERMINISTIC (Vitest) | **PASS** 73 |
| BROWSER (RECETTE smoke) | **PASS** composition persistée |
| PG (counts + projets) | **PASS** continuité |
| LIVE auto (ce cycle) | **NOT RUN** (contrat) |
| LIVE antérieur DEV 12/12 | **PROVEN** (réf. campagne 20261118) |

---

## 30. Verdict unique

# `RECETTE DEPLOYED — READY FOR MORRIS USER ACCEPTANCE`

Morris peut commencer sa recette utilisateur sur `http://127.0.0.1:3200`  
(SHA `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · build `_eeb9Jy2hV242myk86VTu`).

**Ne signifie pas :** recette utilisateur acceptée · Gate C · ADOPTED · STABLE · release.

---

## Anti-stub / secrets

- Aucun secret dans ce pack.
- Manifeste et dossiers non sensibles.
- Runtime non dépendant du worktree DEV dirty.
