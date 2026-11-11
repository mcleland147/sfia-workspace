# SFIA Studio Next — Review Pack FULL
# ML4C / CP2 — Pré-gate ENV-01 — Inventaire et isolation

**Date/heure :** 2026-11-11 15:05 CET
**Cycle projet :** 9 — QA / validation
**Profil :** Standard — diagnostic INC sans remédiation
**Macro-lot :** ML4C — CP2 pré-gate environnement
**Versioning :** NO RELEASE / STABLE NOT AVAILABLE
**Publisher :** Cursor
**Mutations :** AUCUNE (code, tests, DB, services, cleanup)

---

## 1. Date/heure et identification Git

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111` (detached) |
| Baseline code | `main@42aa373947446a8c20694b06c559ee0da1cba580` |
| Tree | `a502ba7a9c708462b003f6ff4fe237b0072b0ee1` |
| origin/main | `42aa373947446a8c20694b06c559ee0da1cba580` — OK |
| Docs CP2 candidate | `docs/next-r5-ml4c-cp2-preparation-20261111@ab0c2ba3affc1556d2e5a57d863af20685509de1` — OK |
| Handoff T2 précédent | `sfia/review-handoff@768d32de9fc242dd88e9170ca46fa986e0eab40a` — OK |
| ENV-01 blob main | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| Checkout destructif / reset / rebase | NON |
| Fichiers projet versionnés modifiés | **aucun** |

Status local au démarrage : `.tmp-sfia-review/chatgpt-review.md` (ignoré) uniquement.

---

## 2. Sources et SHAs

- SEF / Roadmap / ENV-01 / versioning : main@42aa373947446a8c20694b06c559ee0da1cba580
- Gate B, trajectoire UX, qualification-cp2, contrats design : docs@ab0c2ba3
- Handoff T2 (sections 01/03/04/10) : sfia/review-handoff@768d32de
- Code inspecté (main) : `vitest.config.ts`, `src/db/client.ts`, `src/lib/e2e-pg-gate.ts`, `scripts/e2e-preflight.ts`, `tests/integration/create-project.pg.test.ts`, `schema.ts`, README E2E

---

## 3. Observations de l'environnement courant (lecture seule)

| Observation | État observé | Action |
| --- | --- | --- |
| Conteneur `sfia-next-dev-pg` | Up ; `127.0.0.1:5433` | observé |
| Conteneur `sfia-next-recette-pg` | Up ; `127.0.0.1:5434` | observé ; **non interrogé métier** |
| Conteneur `sfia-safe01-ephemeral` | Up ; `:55432` | hors périmètre |
| Process `:3200` | node listen | RECETTE-like ; **non utiliséé** |
| `:3100` / `:3101` | non listen | OK |
| `.env.local` (diag WT) | présent, gitignoré | shape only |
| `DATABASE_URL` shape actuel | `postgres://sfia_next_dev:***@127.0.0.1:5433/sfia_next_dev` | opérateur |
| Traces T2 `/tmp` + `.tmp-sfia-review` | shapes e2e + operator conservés | historique |

Aucun service démarré/arrêté. Aucun secret affiché.

---

## 4. Isolation et preuves READ ONLY

### Contrôle session opérateur
- Cible : conteneur `sfia-next-dev-pg`, base **`sfia_next_dev`**, rôle `sfia_next_dev`
- `BEGIN READ ONLY` → `SHOW transaction_read_only` = **on**
- `current_database()|current_user` = `sfia_next_dev|sfia_next_dev`
- 33 tables public (schéma déployé)
- RECETTE : identité `sfia_next_recette` vérifiée séparément ; **aucune requête métier RECETTE**

### Comparaison e2e (même conteneur, autre DB)
- `BEGIN READ ONLY` sur `sfia_next_e2e` prouvée
- Projet Playwright T2 `proj_2bd77575-…` : **PRESENT** dans e2e (corrélation D2_ACK_OBS)

**Verdict isolation de cette inspection :** READ ONLY démontré.

---

## 5. Inventaire DB et niveaux de certitude

### 5.1 Totaux opérateur `sfia_next_dev` (contexte)
pilots 8850 · preparations 11787 · projects 6328 · create_project_commands 6228 · conversations 8687 · messages 8008 · documents 2420 · revisions 2617
→ base **déjà dense** ; ne pas traiter tout volume comme déchet T2.

### 5.2 Empreinte T2 sur opérateur (fenêtre UTC 2026-11-11 12:40–13:05)

| Métrique | n | Certitude |
| --- | --- | --- |
| Pilots créés dans la fenêtre | 25 | CERTAIN (count) |
| Dont labels fixture create-project exacts | 25 / 25 | CERTAIN |
| `github_user_id` LIKE `gh-pilot_%` | 25 / 25 | CERTAIN (pattern seed) |
| Preparations liées | 27 | CERTAIN |
| Projects liés | 16 | CERTAIN |
| create_project_commands liés | 16 | CERTAIN |
| Conversations liées | 27 | CERTAIN |
| Messages liés | 4 | CERTAIN |
| Documents / revisions liés | 3 / 3 | CERTAIN |
| prep↔project links | 16 | CERTAIN |
| Pilots liés à `users` Better Auth | **0** | CERTAIN |

**Horodatage (UTC) — CERTAIN :**
- `12:43:20` : suite create-project complète (labels A01…projCtxB, A10b×2) → **21 pilots**
- `12:45:55` : A04, A05, recA, recB → **4 pilots** (commande exacte non reconstruite ; **PROBABLE** rejeu partiel T2)

Corrélation horloge : logs Vitest locaux « Start at 13:43:… » (CET) ≡ 12:43 UTC.

### 5.3 Empreinte T2 sur `sfia_next_e2e` (même fenêtre)

| Métrique | n | Certitude |
| --- | --- | --- |
| Fixture-label pilots | 45 | CERTAIN |
| Minutes | 12:43 (42), 12:53 (3) | CERTAIN |
| Projects / create_cmds fenêtre | 74 / 74 | CERTAIN |
| Projet D2_ACK_OBS | PRESENT | CERTAIN |

→ La majorité des PG/BROWSER T2 a bien touché **e2e**, **et** une empreinte create-project a aussi été écrite sur **opérateur**.

### 5.4 Attribution

| Classe | Niveau | Commentaire |
| --- | --- | --- |
| 25 pilots fixture + enfants listés (opérateur, fenêtre T2) | **CERTAIN** attributables au cycle T2 / harness create-project | Labels + pattern `gh-pilot_` + horodatage |
| Autres ~1500 fixture-label pilots hors fenêtre sur opérateur | **NON ATTRIBUABLE à T2** | Stock historique de campagnes antérieures |
| Tout enregistrement non-label dans la fenêtre | **aucun hors fixture** (25=25) | — |
| Données métier / sessions auth liées aux 25 | **NON OBSERVÉ** (0 users liés) | Risque auth faible pour ces 25 |
| Contenu messages/docs | **NON EXPORTÉ** (agrégats seuls) | Confidentialité |

**Correction du handoff T2 :** la réserve « ~25 pilots » est **confirmée par comptage**. Contamination opérateur = **fait observé**.

---

## 6. Configuration et mécanisme de dérive

### 6.1 Matrice des chargeurs

| Entrée | Source DATABASE_URL | Garde-fou avant mutation | Portée |
| --- | --- | --- | --- |
| Vitest (`vitest.config.ts`) | `dotenv` `.env.local` (override défaut = false) | **Aucun** contrôle de nom de DB | unit + integration |
| `create-project.pg.test.ts` | re-`dotenv` + exige URL non vide | **pas** de refuse e2e-only | mutatif |
| `mission-continuity-*.pg.test.ts` | idem | regex `/5433|sfia_next_dev/` | **accepte opérateur ET e2e-sur-5433** |
| `src/db/client.ts` | `process.env.DATABASE_URL` | refuse si manquant seulement | toute écriture |
| Playwright `e2e-web-server.sh` | préflight → réécrit vers `sfia_next_e2e` | `e2e-pg-gate` | **E2E seulement** |
| `e2e-pg-gate.ts` | validation pure | **non branché** sur Vitest | gap |

### 6.2 Chemins de dérive T2 (reconstitués)

1. `.env.local` du worktree diag a été **réécrit manuellement** entre `…/sfia_next_e2e` et `…/sfia_next_dev` pendant T2 (traces shapes).
2. Vitest **hérite** de `.env.local` sans fail-closed « DB doit être e2e ».
3. Un run create-project a persisté l'empreinte fixture sur **opérateur** à 12:43:20 UTC (CERTAIN).
4. D'autres runs (et Playwright) ont persisté sur **e2e** (CERTAIN).
5. Le préflight Playwright **ne protège pas** Vitest.

**Incertitude restante :** l'ordre exact `.env.local` au process Vitest 12:43:20 n'est pas journalisé ; la **persistance** opérateur est CERTAINE. dotenv 18 ne surcharge pas une `DATABASE_URL` déjà présente dans `process.env`.

### 6.3 Ce qui n'est PAS une preuve
- Préflight E2E PASS ≠ Vitest sûr
- Présence de `:5433` dans l'URL ≠ base e2e
- « Tests PG PASS sur e2e » dans le pack T2 ≠ absence d'écriture opérateur

---

## 7. Risques, blast radius, recommandations NON IMPLÉMENTÉES

| Risque | Portée | Probabilité répétition | Notes |
| --- | --- | --- | --- |
| Pollution opérateur par suites PG | `sfia_next_dev` | **Élevée** sans garde Vitest | déjà réalisée T2 |
| Confusion opérateur / e2e via rewrite `.env.local` | worktree local | Élevée si procédure manuelle | |
| Cleanup naïf par label `A05` | faux positifs historiques (75+ A05) | — | **interdit sans GO** |
| Impact RECETTE/STABLE | non observé ce cycle | Faible si discipline ports | `:3200`/`:5434` non touchés |

### Proposition préventive minimale (GO ultérieur — PAS implémentée ici)
1. **Fail-closed Vitest integration** avant première mutation : assert pathname === `sfia_next_e2e` + host loopback + port 5433 ; réutiliser/étendre `e2e-pg-gate.ts`.
2. Point de raccord : `vitest.config.ts` `setupFiles` **ou** helper `beforeAll` partagé des `*.pg.test.ts` ; une seule porte.
3. Ne plus dépendre d'un rewrite manuel de `.env.local` pour choisir la DB de test.
4. Remplacer le faux ami `/5433|sfia_next_dev/` par une exigence explicite `sfia_next_e2e` pour suites mutatives.
5. Tests futurs : unit gate (URL opérateur → throw ; e2e → OK).

**Critère :** tout test mutatif PG doit échouer **avant** la première écriture si la cible ≠ base de test autorisée.

**Blast radius proposition :** config/test harness seulement ; pas de schéma métier.

---

## 8. Matrice conditions de lancement tests ML4C

| Classe | Cible autorisée | Garde aujourd'hui | Prêt ML4C ? |
| --- | --- | --- | --- |
| Unit DET sans PG | n/a | OK | OUI |
| Playwright E2E | `sfia_next_e2e` via préflight | **Implémenté** | OUI si préflight OK |
| Vitest `*.pg.test.ts` | devrait être e2e | **Manquant / non raccordé** | **NON** sans gate ou procédure prouvée |
| LIVE Nora | DEV isolé ≠ opérateur métier | non standardisé | STOP sans lane dédiée |
| RECETTE | protégée | — | INTERDIT sans GO |

**Classification pour Morris :**
- **E** — Isolation démontrable pour Playwright E2E seulement
- **B** — Données de test T2 **confirmées** sur opérateur ; **aucun nettoyage autorisé** ce cycle
- **D** — Isolation Vitest PG **insuffisante** pour démarrer ML4C mutatif sans correctif de gate

---

## 9. Décisions Morris requises

1. Reconnaître contamination opérateur T2 (25 pilots + enfants) comme CERTAINE.
2. **GO CLEANUP distinct ?** Si oui : sélection par fenêtre `created_at` + labels fixture + `gh-pilot_` + 0 users liés ; backup ; vérif post — **STOP avant DELETE**.
3. **GO harness Vitest fail-closed** (réutiliser e2e-pg-gate) avant ML4C build mutatif PG.
4. Ne pas traiter le stock historique A0x hors fenêtre comme déchet T2.
5. Autoriser ou non une lane LIVE/DEV jetable séparée pour REC-08.

---

## 10. Actions réalisées / non exécutées

**Réalisé :** Git Truth ; observation ports/conteneurs ; shapes `.env` ; lecture code ; SQL READ ONLY agrégats opérateur + e2e ; Review Pack ; handoff L3.

**Non exécuté :** Vitest/Playwright mutatifs ; migrations ; seeds ; DELETE/TRUNCATE ; start/stop services ; rewrite secrets ; push projet ; cleanup ; GO ML4C build.

---

## 11. Fichiers projet créés/modifiés

**Aucun** sous `projects/sfia-studio-next/` versionné. Artefact : `.tmp-sfia-review/chatgpt-review.md` (ignoré).

---

## 12. Diff/status Git final

- HEAD diag = `42aa373947446a8c20694b06c559ee0da1cba580`
- Aucun staged projet
- Seul dirty attendu : review pack tmp

---

## 13. Réserves et verdict

**Réserves :**
- Ordre exact env au process 12:43:20 non journalisé (données CERTAINES, sélection d'URL PROBABLE).
- Stock fixture historique hors T2 non inventorié en détail (hors mandat).
- Contenu sémantique messages/docs non lu (agrégats).

### Verdict

**ENV-01 DIAGNOSIS COMPLETE — READY FOR MORRIS REVIEW**

Sous-qualification : isolation Vitest PG incomplete for safe ML4C entry until fail-closed gate (D/E).
Pas de CLEANUP COMPLETED. Pas de ML4C BUILD GO. Pas de BEHAVIOR PROVEN. Pas d'ADOPTED.

---

## 14. Instruction ChatGPT §9.1

Avant toute revue, relire depuis le Git distant
`sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`,
vérifier les SHAs, les preuves et les réserves, puis seulement préparer les décisions Morris.

---

## 15. Git Review Index

| Ref | SHA |
| --- | --- |
| Code baseline | 42aa373947446a8c20694b06c559ee0da1cba580 |
| Tree | a502ba7a9c708462b003f6ff4fe237b0072b0ee1 |
| Docs CP2 | ab0c2ba3affc1556d2e5a57d863af20685509de1 |
| Handoff T2 (entrée) | 768d32de9fc242dd88e9170ca46fa986e0eab40a |
| ENV-01 blob | 14b61f0d1265cf85fcca09b028dd09bd8c71597f |
