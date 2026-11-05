# Review Pack FULL — SFIA Studio Next R5/ML2 — LIVE borné + RECETTE conditionnelle (PR #659)

**Date/heure (UTC)** : 2026-11-05T20:25:18Z  
**Profil** : Critical — qualification / correction intégrée / mise à disposition candidat  
**Mandat** : `sfia-next-ml2-go-live-recette-conditionnelle-pr659-20261105.md`  
**Intégrateur** : Cursor · **Revue** : ChatGPT · **Décision métier/merge** : Morris uniquement  

**Verdict cycle** : `ML2 LIVE BOUNDED REAL PROVEN — RECETTE CANDIDATE AVAILABLE FOR MORRIS REVIEW`  
**Aucun GO merge** · **RECETTE ≠ ACCEPTED** · **STABLE/ADOPTED NOT AVAILABLE** · **NO RELEASE**

---

## 1. Git Truth (vérifié localement + GitHub)

| Élément | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Branche projet | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD local = remote | `54fc4e9cd68f37b8ce0fd999a0c00969ad6b583f` |
| `origin/main` / merge-base | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| PR | **#659 OPEN / DRAFT** → `main` — https://github.com/mcleland147/sfia-workspace/pull/659 |
| LIVE proof SHA | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` (3 contacts REAL) |
| SHA final (cookies + RECETTE login + CI skip) | `54fc4e9c…` |
| PR #655–#658 | OPEN, **non retargetées / non mergées / non fermées** (oids inchangés observés) |
| Force-push / merge main | **NON** |
| Untracked préservés | `projects/sfia-studio-next/web/public/*.svg` (5) · `.tmp-sfia-review/` |

**Commits post-LIVE (01ae25e1..54fc4e9c)** :
1. `b24a2e3a` — lane-scoped session cookies + ephemeral SAFE-01 abort proof  
2. `54fc4e9c` — allow RECETTE test login + skip SAFE-01 ephemeral when absent (CI)

**Non observé comme dirty projet** : working tree clean hors Review Pack local + SVG untracked.

---

## 2. Objectif & artefacts

**Objectif utilisateur** : candidat ML2 figé, qualifié fournisseur REAL borné, servi en RECETTE isolée pour essai Morris — pas d’acceptation/merge.

**Artefacts** :
- Code/docs sur PR #659 @ `54fc4e9c`
- Preuves LIVE locales : `.tmp-sfia-review/live-bounded-results.json` (non secret)
- Manifeste RECETTE : `.tmp-sfia-review/recette-ml2-manifest.yaml`
- CI : run `42101980546` SUCCESS sur SHA final
- Worktree RECETTE : `/Users/morris/Projects/sfia-studio-next-recette-ml2-pr659` @ `54fc4e9c` detached
- Serveur : `http://localhost:3210` (bind `localhost` → TCP `[::1]:3210`)
- DB : `sfia_next_recette_ml2` @ `sfia-next-recette-pg:5434` schéma **006**
- ML1 préservée : `http://127.0.0.1:3200` (PID node actif, non reset)

---

## 3. Sources canoniques (lues / appliquées)

- Template cycle v2.6 + routing §4.3.0b  
- ENV-01 `environnements-recette-et-promotions.md`  
- `product-versioning.md` → NO RELEASE / `0.0.0-dev` / schéma 006  
- Spec ML2 §§26–28 / §27.2 LIVE / §27.3 manifeste ; matrice ; delivery-history append  
- Contrat OBS transverse  
- Décision trajectoire C (contenu) — **sans autorité de merge**

---

## 4. Git Review Index — fichiers touchés ce macro-lot (post-01ae25e1)

| Path | Nature |
|---|---|
| `web/src/domains/identity/session.ts` | Cookie `sfia_studio_session__${LANE}` ; login test DEV\|RECETTE |
| `web/tests/unit/dev-login-host.test.ts` | Isolation host/cookie |
| `web/tests/integration/identity-session.pg.test.ts` | Session lane |
| `web/tests/integration/ml2-pg-contention.pg.test.ts` | SAFE-01 ephemeral persistent probe + skip CI |
| `construction/.../specification-technique.md` | As-Built LIVE/RECETTE |
| `construction/.../matrice-tracabilite.md` | COG/OBS/SAFE |
| `construction/delivery-history.md` | Append journal |

**Allowlist respectée.** Pas de `.github/workflows`, pas de governance normative, pas de migration structurale nouvelle, pas de secrets commités.

---

## 5. SAFE-01 — preuve

- Oracle **table persistante isolée** `sfia_safe01_persist_probe` sur Postgres **éphémère** `127.0.0.1:55432` (`sfia-safe01-ephemeral`), **pas** DEV/RECETTE partagés.  
- Scénario `PG-DBFAIL-03` : insert mid-TX visible dans la TX → abort client → ligne **absente** après ; `to_regclass` produit DEV = null pour la table probe.  
- Contention : oracles `pg_locks` / activité (pas `!bDone` seul).  
- **CI** : si éphémère absent → **SKIP explicite** (pas faux vert de mutation produit).  
- Limite : multi-host / kill backend partagé **NOT PROVEN** (volontairement hors scope).

---

## 6. LIVE borné (DEV) — REAL BOUNDARY PROVEN ciblé

| Champ | Valeur |
|---|---|
| Lane | DEV · cookie `sfia_studio_session__DEV` |
| SHA preuve | `01ae25e1…` |
| Contacts fournisseur | **3** / plafond 12 |
| Coût estimé | **≈ 1,05 €** / plafond 5 € |
| Modèle demandé | `gpt-6.1-sol` · effort `low` |
| Modèle appliqué | souvent **UNVERIFIED** (réserve) |
| Fixture flags | absents |
| Verdict local | `LIVE COG BOUNDED REAL — scenarios PROVEN with reserves` |

| Scénario | Status | providerContacted | mode | ms |
|---|---|---|---|---|
| COG-simple | COMPLETE | YES | openai-agents-sdk-live | 5278 |
| COG-complex-d4 | COMPLETE | YES | openai-agents-sdk-live | 26425 |
| COG-missing-doc | COMPLETE | YES | openai-agents-sdk-live | 3528 |

**Exécutés** : simple + complexe (lecture D4 tentée/observée selon traces locales) + doc manquante.  
**NOT RUN** : comparaison ChatGPT↔Nora ; OAuth GitHub réel ; panne fournisseur payante.  
**Requalification** : deltas `01ae25e1→54fc4e9c` = identité/cookies + SAFE-01 CI skip + docs — **pas** chemin cognition SDK ; LIVE antérieur conservé comme preuve historique ; smoke RECETTE @ final SHA a recontacté le SDK (1 tour simple COMPLETE).

---

## 7. Corrections intégrées (même PR)

1. Cookies **par lane** pour lever collision `127.0.0.1` multi-ports.  
2. SAFE-01 oracle table persistante sur éphémère + skip CI si absent.  
3. `STUDIO_DEV_TEST_LOGIN` autorisé en **RECETTE** (en plus de DEV) pour smoke/essai Morris sans OAuth.  
4. Docs As-Built / matrice / delivery synchronisées.

---

## 8. QA / CI au SHA final

| Contrôle | Résultat |
|---|---|
| CI run | `42101980546` — https://github.com/mcleland147/sfia-workspace/actions/runs/42101980546 |
| headSha | `54fc4e9c…` |
| Detect changes | success |
| Build and validate | success |
| Required Gate | **success** |
| Vitest unit | **52 passed** |
| Vitest PG | **93 passed** |
| Playwright FAKE | **3 passed** |

---

## 9. Gate E — LIVE ENTRY CHECK → RECETTE

| # | Critère | Statut |
|---|---|---|
| 1 | SDK REAL BOUNDARY PROVEN (scénarios pertinents) | **PASS** (DEV @ 01ae25e1 + smoke LIVE RECETTE @ 54fc4e9c) |
| 2 | D3/D4/OBS / idempotence / auth isolation | **PASS** avec réserves modelApplied UNVERIFIED |
| 3 | SHA final + CI validate + Required Gate | **PASS** `54fc4e9c` / `42101980546` |
| 4 | ENV-01 isolation code/DB/cookie/port/secrets | **PASS** (worktree + DB ml2 + cookie lane + localhost:3210 vs 127.0.0.1:3200) |
| 5 | Dataset test / build identifiable / pas D5–D9 | **PASS** |

→ **RECETTE ACTIVATION AUTHORIZED** (technique) — essai utilisateur = Morris.

---

## 10. RECETTE — mise à disposition

| Champ | Valeur |
|---|---|
| URL | **http://localhost:3210** |
| SHA immuable | `54fc4e9cd68f37b8ce0fd999a0c00969ad6b583f` |
| build_id | `IoagwNyGsev4V5B0UZPMf` |
| Profile | `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` (**OPERATIONAL_PROVISIONAL interdit hors DEV** — corrigé à l’activation) |
| Cookie | `sfia_studio_session__RECETTE` domain `localhost` |
| Auth smoke | `/api/dev/login` → ok (`authMode=dev-test-login`) — **≠ OAuth** |
| Smoke message | `status=COMPLETE` · `noraMode=openai-agents-sdk-live` · `generationId=gen_9c29797d-…` · réponse utile courte |
| ML1 | `http://127.0.0.1:3200` **préservée** (HTTP 200) |

**Démarrage / arrêt** : voir `recette-ml2-manifest.yaml`.  
**Note bind** : `-H localhost` écoute `[::1]` ; utiliser Host `localhost` (curl `--ipv6` si besoin), pas `127.0.0.1:3210`.

**Pas de** `RECETTE ACCEPTED` / merge / STABLE.

---

## 11. Preuves COG / OBS / SAFE (niveaux honnêtes)

| Id | Niveau |
|---|---|
| COG-01 simple | **REAL BOUNDARY PROVEN** (DEV LIVE + smoke RECETTE) |
| COG-02 complexe + D4 | **REAL BOUNDARY PROVEN** (DEV LIVE @ 01ae25e1) |
| COG-03 contradictions | **NOT PROVEN** (non exécuté ce lot) |
| COG-04 DENIED/STALE | **REAL BOUNDARY** partiel (missing-doc LIVE) |
| COG-05 provider down | **NOT PROVEN** (non provoqué) |
| COG-06 replay/UNKNOWN | **DETERMINISTIC** (tests) / LIVE ciblé antérieur |
| COG-07 identity/DB | **DETERMINISTIC** + smoke RECETTE login |
| OBS-Q01..10 | **DETERMINISTIC** + traces LIVE expurgées ; modelApplied souvent UNVERIFIED |
| SAFE-01 | **DETERMINISTIC** local ephemeral ; CI skip si absent |
| ChatGPT↔Nora | **NOT RUN** |
| OAuth GitHub | **NOT PROVEN** |

---

## 12. Secrets & blast radius

- Aucun secret dans ce pack / manifeste / handoff.  
- `.env.local` RECETTE mode `600`, hors Git.  
- SVG untracked + `.tmp-sfia-review/` **non commités**.  
- Blast radius = allowlist Next ML2 uniquement.

---

## 13. Dettes / exits

| Dette | Impact | Exit |
|---|---|---|
| modelApplied UNVERIFIED | obs incomplète | Instrumentation SDK au point d’application |
| LIVE cognition non rejoué sur 54fc4e9c (budget) | preuve historique ≠ SHA final cognition-identique raisonnable | Re-LIVE si patch cognition |
| OAuth / ChatGPT bench | couverture identité/qualité | GO + comptes test |
| PG-DBFAIL-03 skip CI | pas de preuve abort sur runners | Service ephemeral CI ou job dédié (hors ce mandat workflow) |

---

## 14. Instruction ChatGPT (revue)

1. Vérifier Git Truth SHA `54fc4e9c` / PR #659 DRAFT / main `6e4406c` / #655–#658 intactes.  
2. Confirmer CI `42101980546` SUCCESS sur ce SHA (52/93/3).  
3. Distinguer preuve LIVE @ `01ae25e1` vs candidat servi @ `54fc4e9c`.  
4. Confirmer RECETTE isolée disponible pour Morris **sans** conclure ACCEPTED/merge.  
5. Préparer arbitrage d’intégration **après** essai utilisateur Morris.

---

## 15. État final local

- Branche projet checkout : `sfia/next-ml2-cognition-observability-integrated` @ `54fc4e9c`  
- RECETTE worktree + serveur : actifs pour Morris  
- ML1 : intacte  
- Handoff L3 : publié dans le même cycle (voir tip/blob ci-dessous après push)
