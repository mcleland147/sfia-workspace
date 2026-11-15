# SFIA Review Pack FULL — ML4C PRE-RECETTE candidate qualification

## A. Date / GO / type / profil
- Date : 2026-11-15 06:45:31 CET
- GO Morris : 15 novembre 2026 — qualification pré-RECETTE candidat produit
- Cycle projet 9 — QA / validation
- Profil CRITICAL — RUN / QUALIFICATION
- Produit : `projects/sfia-studio-next/` R5 / ML4C
- Code produit : **AUCUNE MODIFICATION**
- Version cycle : 0.0.0-dev — NO RELEASE — STABLE NOT AVAILABLE
- Interdit réalisé : pas de push produit, PR, merge, LIVE, mutation RECETTE/DB, session créée

## B. Git initial / final
### Initial = Final (inchangé)
| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| tree | `71e052cf53232c70153a6056d948b97fb401b175` |
| parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| dirty | `.tmp-sfia-review/chatgpt-review.md` seul (pack) |
| PRODUCT HEAD | **UNCHANGED** |
| PRODUCT FILES CREATED | NONE |
| PRODUCT FILES MODIFIED | NONE |

## C. Sources et SHA/blobs
| Source | Ref |
| --- | --- |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| handoff distant début cycle | `c93894c6802e1dd3ed07357451a64f6b638a111b` blob `5ea8c16e…` |
| PR #676 HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` OPEN |
| merge-base HEAD↔main | `6d237452680640324eeadbb18f4601fd7de99850` |
| commits local ahead main | 17 |
| commits local ahead PR HEAD | 8 |
| branche produit remote tip | **ABSENT** (`ls-remote` vide) — candidat LOCAL ONLY |
| ENV-01 main blob | `14b61f0d…` |
| versioning main blob | `8bc93e0f…` |
| cahier/journal UAT | sur `origin/main` (absents du tree candidat HEAD) |

## D. Contrats applicables
- SEF / roadmap / décisions R5 (main)
- ENV-01 VALIDATED ON MAIN
- product-versioning REQUIRED
- Contrat ML4C S01–S07 (main)
- Journal UAT historique 12/11 : candidat **2416e2ee** — non transférable à `11f7077e`
- Handoff technique précédent : provenance fence @ `11f7077e` ; LIVE REVISE historique @ `c777358e`

## E. Identité candidat
| A0x | Résultat |
| --- | --- |
| A01–A05 | PASS — repo/branche/HEAD/tree/parent conformes |
| A06 | merge-base `6d237452…` ; delta Next massif (83 files / +22k/−4k vs merge-base..HEAD) |
| A07 | clean produit ; pack dirty seulement |
| A08 | divergences vs main : ML4C sémantique, D4/S05, tests |
| A09 | PR #676 = `67bf6b0b` ; local = +8 commits (S05 oracles, D4 revise, fence provenance) |
| A10 | allowlist conversation/document/tests/construction |
| A11 | **aucune migration** dans le delta vs merge-base |
| A12 | package `0.0.0-dev` ; product version NOT AVAILABLE |
| A13 | `package-lock.json` présent |
| A14 | delivery-history local jusqu’à provenance fence |
| A15 | UNIT/PG/BUILD/E2E sur `11f7077e` (handoff c93894c6) ; **REMOTE CI NOT RUN — 11f7077e** |

## F. Divergence main / PR / candidat
```
main (6cda86bd)
  └─ merge-base 6d237452
       ├─ PR #676 tip 67bf6b0b (CI SUCCESS 2026-11-12)
       └─ local tip 11f7077e (+8 commits, NON PUBLIÉ)
```
CI SUCCESS sur PR **ne certifie pas** `11f7077e`.
RECETTE actuellement servie : SHA **`d936da81`** (worktree `…-ml4c-recette-build-d936da81`) ≠ candidat.

## G. Worktrees / builds
| Lane | Port | PID | CWD / SHA |
| --- | --- | --- | --- |
| DEV | :3100 | 67649 | candidat WT @ `11f7077e` ; flags process `STUDIO_LANE=DEV` `FORCE_NORA_FIXTURE=0` |
| E2E | :3101 | none | arrêté |
| RECETTE | :3200 | 41282 | `…-ml4c-recette-build-d936da81` @ `d936da81` ; `next start` prod |
| PG DEV | :5433 | docker `sfia-next-dev-pg` | DBs `sfia_next_dev`, `sfia_next_e2e`, `sfia_next_ml4` |
| PG RECETTE | :5434 | docker `sfia-next-recette-pg` | DBs `sfia_next_recette_ml4` (+ historiques) |

Artefacts `.next` séparés par worktree. Pas de partage d’artefact DEV→RECETTE observé.

## H. Audit ENV-01
### Routing observé
| Contrôle | Observation |
| --- | --- |
| Ports distincts | PASS |
| Containers PG distincts | PASS |
| Rôles/DB distincts | PASS (`sfia_next_dev` vs `sfia_next_recette` ; rôle DEV **absent** du container RECETTE) |
| BETTER_AUTH_URL | DEV `127.0.0.1:3100` ; RECETTE `127.0.0.1:3200` |
| DATABASE | DEV `sfia_next_dev@:5433` ; RECETTE `sfia_next_recette_ml4@:5434` |
| Secrets par lane | fichiers distincts (DEV `.env.local` WT ; RECETTE `~/.config/sfia-studio-next/recette/.env.local`) |
| STUDIO_DEV_TEST_LOGIN | DEV=1 ; RECETTE=**ABSENT** |
| Fixture Nora | RECETTE ABSENT ; DEV process override 0 (fichier local a 1) |

### Verdict ENV routing
**ENV ROUTING COMPLETE** à la portée préflight (topologie / DB / ports / worktrees).
Réserves session cookies Better Auth → Gate C (ne bloquent pas la topologie).

## I. Audit sessions / cookies
### Adapter DEV (cookie `sfia_studio_session__` + lane)
- Nom lane-scoped : `sfia_studio_session__DEV` vs `sfia_studio_session__RECETTE` — mitige collision adapter.
- Cookie set : HttpOnly, sameSite=lax, path=/, secure=false (loopback).
- Consume gate : `STUDIO_DEV_TEST_LOGIN===1` ET lane in {{DEV, RECETTE}}.
- Emission gate : même condition + loopback host/forwarded.

### Better Auth
- Cookie prefix défaut : `better-auth` (pas de `cookiePrefix` lane dans `auth.ts`).
- Hostname partagé `127.0.0.1` → cookies Better Auth **potentiellement partagés** entre :3100 et :3200 (ports n’isolent pas).
- Bases session distinctes (DB distinctes) : token d’une lane invalide côté serveur de l’autre si tables séparées — **hypothèse forte mais collision cookie jar navigateur NON EXERCÉE** dans ce cycle.
- ML4C-A-001 déconnexion / A-002 expiration : NOT VERIFIED (pas de test mutatif).

## J. Adaptateur DEV / RECETTE
| Aspect | Code | Config RECETTE live | Preuve HTTP |
| --- | --- | --- | --- |
| UI boutons Pilote A/B | toujours rendus (`login/page.tsx`) | page :3200 contient « Pilote A (DEV) » | GET /login 200 |
| Emission | autorisée si flag+lane RECETTE | flag **ABSENT** → emission refuse | historique manifeste Q2 : POST /api/dev/login **403** (non rejoué ce cycle — pas de POST) |
| Consume | autorisée si flag+lane RECETTE | flag ABSENT → consume null | cohérent |
| Risque | réactivation flag = adaptateur RECETTE autorisé par code | actuellement off | **OPEN — ML4C-A-004** gravité HIGH si mal configuré |

**STOP — RECETTE TEST AUTHORITY RISK** : **NON déclenché** (activation non démontrée). Réserve OPEN.

## K. Secrets expurgés
| Secret | DEV | RECETTE |
| --- | --- | --- |
| BETTER_AUTH_SECRET | PRESENT | PRESENT |
| GITHUB_CLIENT_ID/SECRET | PRESENT | PRESENT |
| OPENAI_API_KEY | PRESENT | PRESENT |
| INTEGRATION_TOKEN_ENCRYPTION_KEY | PRESENT | PRESENT |
| Valeurs | **non divulguées** | **non divulguées** |

Aucun appel provider ce cycle.

## L. Auth / erreurs
- GET `/api/portfolio` RECETTE sans cookie → **401** `SESSION_INVALID` (observé).
- `/api/auth/status` RECETTE → CONFIGURED (observé).
- Distinction 401/404/503 : code session mappe DEPENDENCY → 503 ; absence → 401. Isolation Pilote B : NOT VERIFIED ce cycle.

## M. Build local
- Commande : `npm run build` depuis `web/` du candidat `11f7077e`
- Exit : **0 PASS**
- Preuve : buildabilité locale ; **≠** build RECETTE servi
- build_identifier candidat RECETTE : **NOT ASSIGNED** (ne pas recycler `n-7E8DgbcVu4g_RJWZoiK` de `d936da81`)

## N. CI et checks par SHA
| SHA | CI distante |
| --- | --- |
| `67bf6b0b` (PR #676) | SUCCESS — Detect + Build/validate Next + Required Gate (2026-11-12) |
| `11f7077e` | **REMOTE CI NOT RUN** (commit absent du remote) |
| `d936da81` (RECETTE live) | historique Q1/Q2 ; ≠ candidat |

## O. Matrice S01–S07 (consolidation ; pas nouvelle UAT)

| Famille | Impl. | Déterministe | Browser UAT | LIVE | REAL Git | UAT hist. | SHA preuves | Réserves / exit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01 Accès | implémenté | partiel | hist. PASS partiels | N/A | OAuth hist. | 4 PASS / 2 NR @2416e2ee | A-001..A-005 | Rejeu UAT sur candidat |
| S02 Sas | implémenté | E2E/PG | FAIL S02-01 hist. | — | — | 1 FAIL / 5 NR | Intervencia | Rejeu S02-01 |
| S03 Docs/Nora | D4 CREATE/REVISE | UNIT/PG/E2E @11f7077e | NR | CREATE/REVISE LIVE @c777358e (pas 11f7077e) | — | 7 NR | LIVE nouveau SHA | Requalif LIVE optionnelle |
| S04 Mémoire/CKI | partiel | baseline S04 | NR | NR | — | 8 NR | preuve cognitive | Campagne S04 |
| S05 Pending | fort | UNIT/PG/E2E 11f7077e | NR UAT | NR | — | 8 NR | — | UAT S05 |
| S06 Pub Git | partiel | scripted/limited | NR | — | REAL E2E non prouvé | 11 NR | mutations doc | GO REAL sandbox |
| S07 Régression UX | incomplet | partiel | NR | — | — | 7 NR | campagne globale | Campagne S07 |

**Journal 53 cas @2416e2ee : 4 PASS / 1 FAIL / 48 NOT RUN — non reporté comme verdict de 11f7077e.**

## P. Réserves X (état)
| ID | État | Gravité | Exit |
| --- | --- | --- | --- |
| ML4C-A-001 déconnexion | OPEN / NOT VERIFIED | MED | Test révocation serveur |
| ML4C-A-002 expiration | OPEN / NOT VERIFIED | MED | Politique TTL prouvée |
| ML4C-A-004 adaptateur DEV | OPEN — UI visible ; API off si flag absent ; **code autorise RECETTE** | HIGH | Décision Morris : retirer autorisation RECETTE du code OU confiner + masquer UI |
| ML4C-A-005 401/404 B | NOT VERIFIED | MED | Suite identité B |
| ENV-01 cookies BA | NOT VERIFIED collision | HIGH | Cookie prefix/lane OU host distinct OU preuve navigateur d’isolation |
| CI SHA final | NOT RUN | HIGH | Push/PR update + CI green sur `11f7077e` (GO distinct) |
| LIVE @11f7077e | NOT RUN | MED | Arbitrage blast-radius post-provenance |
| UAT candidat | NOT RUN | — | Campagne RECETTE après déploiement autorisé |
| S06 Git REAL E2E | NOT PROVEN | MED | GO sandbox |
| RECETTE ≠ candidat | OBSERVED | BLOCKER deploy | Nouveau déploiement immuable du SHA |

## Q. Anciennes preuves vs SHA final
| Preuve | SHA | Transfert à 11f7077e |
| --- | --- | --- |
| UNIT 363 / PG 471 / E2E 11 / BUILD | `11f7077e` | OUI (même SHA ; build rejoué ce cycle PASS) |
| LIVE REVISE v2 DELTA-15 | `c777358e` | **NON automatique** |
| Fence provenance fix | `11f7077e` | OUI (déterministe) |
| UAT 12/11 | `2416e2ee` | NON |
| RECETTE live | `d936da81` | NON — autre candidat |

## R. Fake / Real Qualification
| Frontière | Niveau |
| --- | --- |
| UNIT/PG/E2E | FAKE/déterministe @11f7077e |
| Nora LIVE | historique @c777358e seulement |
| GitHub OAuth | CONFIGURED RECETTE ; pas de nouvel essai |
| Git REAL write | NOT AUTHORIZED |
| Adaptateur DEV | FAKE ; RECETTE flag off |
| USER RECETTE @11f7077e | NOT RUN |
| CI remote @11f7077e | NOT RUN |

## S. Manifeste pré-RECETTE (DRAFT_NOT_DEPLOYED)

```yaml
lane: RECETTE
manifest_status: DRAFT_NOT_DEPLOYED
source_repository: mcleland147/sfia-workspace
source_branch: fix/next-semantic-intent-convergence-20261112
base_main_sha: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
candidate_sha: 11f7077edd08f1a0c680b6b920f20dbaf76c7bed
candidate_tree: 71e052cf53232c70153a6056d948b97fb401b175
product_version: NOT AVAILABLE
candidate_version: NOT ASSIGNED
release_tag: N/A
target_address: http://127.0.0.1:3200
deployment_status: NOT AUTHORIZED
user_recette_status: NOT RUN_ON_CANDIDATE
build_identifier: NOT ASSIGNED
build_reproducibility: LOCAL_BUILD_PASS_ON_CANDIDATE
schema_revision: 012_auth_concurrency_safety
test_data_revision: PENDING_MORRIS_DECISION
database_isolation: OBSERVED_SEPARATE_CONTAINERS_ROLES_DBS
secret_isolation: OBSERVED_SEPARATE_ENV_FILES
session_isolation: PARTIAL — adapter lane-scoped; Better Auth cookie jar NOT VERIFIED
GitHub_configuration: CONFIGURED_BOTH_LANES
OpenAI_configuration: PRESENT_BOTH_LANES_TEST_BOUNDARY
fake_real_coverage: DETERMINISTIC_GREEN; LIVE_HISTORICAL_c777358e; REAL_GIT_LIMITED
quality_evidence:
  - "UNIT 363 / PG 471 / E2E 11 / BUILD PASS @11f7077e (handoff c93894c6 + build rejoué préflight)"
  - "REMOTE CI NOT RUN @11f7077e"
  - "Current RECETTE serves d936da81 ≠ candidate"
known_gaps:
  - "Better Auth host-only cookies on 127.0.0.1"
  - "DEV login UI visible on RECETTE; code allows adapter if flag set"
  - "8 local commits ahead of PR #676; branch tip not on remote"
  - "UAT 48 NOT RUN on historical SHA"
  - "LIVE not re-proven on 11f7077e"
blocking_risks:
  - "Deploy without CI on exact SHA"
  - "Session cookie collision unproven"
  - "Accidental STUDIO_DEV_TEST_LOGIN=1 on RECETTE"
pending_gates:
  - "Morris GO: publish SHA + CI"
  - "Morris GO: session isolation acceptance or fix mandate"
  - "Morris GO: immutable RECETTE deploy of 11f7077e"
  - "Morris GO: UAT campaign scope"
```

## T. Matrice G01–G16
| Gate | Verdict |
| --- | --- |
| G01 Git Truth | PASS |
| G02 Tree/source | PASS |
| G03 Worktree propre | PASS (pack only) |
| G04 Build identifié | PASS local ; RECETTE build_id NOT ASSIGNED |
| G05 Dépendances/schéma | PASS (012 ; lockfile ; no new migration) |
| G06 Isolation code/build | PASS (worktrees séparés) |
| G07 Isolation PostgreSQL | PASS (containers/rôles/DB) |
| G08 Isolation secrets | PASS (fichiers distincts ; valeurs non comparées) |
| G09 Isolation sessions BA | **NOT VERIFIED** |
| G10 Contrôle adaptateur | **PASS config actuelle** ; **OPEN code/UI** |
| G11 CI SHA final | **NOT VERIFIED / NOT RUN** |
| G12 Couverture technique | PASS déterministe @SHA |
| G13 Réserves S01–S07 | PASS qualification ; UAT incomplete |
| G14 Manifeste préparé | PASS DRAFT |
| G15 Rollback/reprise | NOT VERIFIED (procédure à définir au GO deploy) |
| G16 Gate Morris mise à disposition | **REQUIRED** |

## U. Bloqueurs et exit
### Prérequis de déploiement (≠ scénarios UAT)
1. **Publier le SHA** (push/PR update) + **CI green sur 11f7077e** — owner Morris/intégrateur — exit: check-runs SUCCESS.
2. **Arbitrer isolation Better Auth cookies** (accept risk documenté OU correctif cookiePrefix/host) — exit: décision Morris ou preuve navigateur.
3. **Arbitrer ML4C-A-004** (retirer RECETTE du consume/emit OU masquer UI + confiner) — exit: décision/correctif hors ce cycle.
4. **Déploiement immuable** worktree/build_id dédié `11f7077e` sans recycler `d936da81` — exit: manifeste DEPLOYED + smoke.

### Scénarios RECETTE (après déploiement)
- Rejeu S02-01 ; S01 réserves ; S03–S07 selon cahier ; smoke OAuth ; pas de LIVE/REAL sans GO.

## V. Git Review Index
| Item | Valeur |
| --- | --- |
| Produit HEAD | `11f7077e` UNCHANGED |
| Pack local | `.tmp-sfia-review/chatgpt-review.md` |
| Handoff | (post-publish) |
| Push produit | NON |

## W. Versioning
0.0.0-dev — candidate_version NOT ASSIGNED — STABLE NOT AVAILABLE — NO RELEASE.

## X. Verdict
**ML4C PRE-RECETTE QUALIFICATION INCOMPLETE — BLOCKERS IDENTIFIED**

Le dossier de décision est constitué. Le candidat `11f7077e` est **techniquement identifiable** et **déterministiquement couvert**, mais **non prêt à une mise à disposition RECETTE** tant que :
- CI du SHA exact absente ;
- isolation session Better Auth non vérifiée ;
- adaptateur DEV/RECETTE non tranché ;
- runtime RECETTE ≠ candidat.

Distinctions :
- Préflight exécuté : oui (read-only)
- Déploiement autorisé : **non**
- RECETTE PASS / ML4C ACCEPTED / Gate C CLOSED : **non déclarés**

## Y. Gate Morris suivant
Demande de GO **distinct** éventuelle pour mise à disposition RECETTE de `11f7077e` / tree `71e052cf…`, précisant :
- publication Git + CI ;
- build immuable + BUILD_ID ;
- lane `:3200` + DB `sfia_next_recette_ml4` ;
- politique session/cookies + adaptateur DEV ;
- smoke OAuth ;
- rollback vers `d936da81` préservé ;
- limites LIVE/REAL ;
- périmètre UAT (cahier 53 cas).

Ne pas inférer ce GO depuis le présent cycle.
