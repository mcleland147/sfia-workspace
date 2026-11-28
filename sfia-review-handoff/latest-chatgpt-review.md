# SFIA Studio Next — Lot 3 — Activation de l'admission cognitive RECETTE

Cycle 07 — Intégration / DevOps. Profil Critical. Typologie RUN — activation de configuration.
Jalon R5 / ML5. Classe NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.
Revue : Full. Handoff : required / publish-in-cycle.
Date du pack : 2026-11-28 11:11 CET.

Morris a validé la préparation et autorisé la configuration, le redémarrage et le rollback en cas d'échec. LIVE, promotion et lot 4 restent non autorisés.

## 1. Identité et mandat

Activer la politique provisoire v0.2 sur le candidat RECETTE déjà servi, pour lever la cause de configuration de MP15. Ne pas reconstruire le moteur. Ne pas promouvoir les lots 1 et 2. La qualification comportementale LIVE est reportée à la prochaine campagne intégrée.

Statuts maintenus : R5 IN PROGRESS, ML5 OPEN, LIVRAISON 1 NOT ACCEPTED, 17 MP OPEN, R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED. MP15 n'est pas clos fonctionnellement par cette écriture.

## 2. Git Truth Check

Dépôt `mcleland147/sfia-workspace`. Remote `origin` = `https://github.com/mcleland147/sfia-workspace.git`.

| Contrôle | Résultat |
| --- | --- |
| Branche DEV | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local et distant | `017487581c317f957ef7a96ff2f3d95450fcf9ab` |
| Tree | `b398725b2bbef59c295dbc3093f23a767f433994` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Statut produit | uniquement `.tmp-sfia-review/` et `web/.tmp-sfia-review/` non suivis |
| Docs | `origin/docs/next-openai-studio-convergence-20261126` = `5feed44045726aca333d63dfa8c7700d94056087` |
| Suivi blob | `1c6293d8df2272b6217683ec0e3bdf0b2da9a91c` (v0.9) |
| Handoff précédent | `e1cf5dc0c34c0462b710bdd389f8966a9dd7ae25`, blob `81ec492ee5e6e8d807dd411fb947ee36f05e06af` |

Le checkout local de `main` (`4b1a0580`) n'a pas été synchronisé. Les sources de méthode viennent de `origin/main`. Aucun commit produit.

Le SHA DEV n'est pas le SHA servi. RECETTE sert `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`, BUILD `p0S18hfVdGrMjGeNMGlbV`, worktree `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee`.

## 3. Sources lues

Depuis `origin/main` : routage §4.3.0b (blob `3315bbae4757ad42255d16cba47d9e32be2a7842`), template §2.0.H et §9.1 (blob `f4fdb488fdf81fa9bf874c1c24c1a22d0cb296c1`), guardrails blob `675de2df07602d8f88d51ee03ddddd4ca4ebd2ea`, operating model blob `673545f945e0ba1e9e57647c0c316bbc46c1a402`, `scripts/sfia/README.md` blob `e0c5894b8a4f1cfefdc63d5f0fb51ef7f025ad9f`. CKC cycle 07 absent. Fallback carte synthétique blob `aa574926dc6c597675f9fe9257f2820c2a11ed5e`, guidance candidate. ENV-01 blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f`. Versioning blob `8bc93e0fafac0f981c446e978a37f5f93d183875`.

Suivi v0.9, ref `5feed440`, §13 et §14 lus. Le §14 recommande cette activation et reporte le LIVE strict à la campagne intégrée, parce que `attachConfiguredLiveCampaignFromEnv` refuse les lanes non DEV quand les gates de campagne sont actifs.

Handoff de préparation `e1cf5dc0` : §4 identités, §5 chaîne, §7 matrice, §9 activation, §10 contrôle de promotion. Pas de nouveau diagnostic.

Code du candidat servi, relu pour le démarrage et le smoke : `instrumentation.ts`, `cursor-live-supervisor.ts`, `cursor-autonomous-restitution.ts`, `app/login/page.tsx`, `app/api/auth/[...all]/route.ts`, `lib/auth.ts`. Les fonctions d'admission restent celles du préflight, blob `a526b0fd` / `b4ab0dd7`.

SEF v0.2 et la bannière roadmap du 22 novembre restent les textes de gouvernance déjà qualifiés au préflight. Aucune décision R4/SEM n'a été modifiée. Elles ne qualifient pas RECETTE v0.2.

## 4. Préconditions avant mutation

| Contrôle | Résultat |
| --- | --- |
| SHA servi | `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` |
| BUILD | `p0S18hfVdGrMjGeNMGlbV`, fichier antérieur au processus d'origine |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004`, état running, programme `start-recette-ml5.sh`, PID parent 77087 |
| Fichier sourcé | `~/.config/sfia-studio-next/recette/.env.local`, mode `0600` |
| Deux clés | absentes, zéro occurrence, aucun doublon |
| Lane / profil / plafonds | RECETTE, OPERATIONAL_PROVISIONAL, 120 / 1000000 / 2000000 |
| Mode | clé absente, donc operational |
| SHA du fichier | toujours le SHA stale `e8e6e069…`, non corrigé. Le script continue de l'écraser |
| WEB | fichier et script à 0 |
| Admin | script exporte `SFIA_ADMIN_USAGE_COLLECTOR=0` |
| DEV | PID 55011, port 3100, base `sfia_next_dev`. Non modifié |
| Base RECETTE | `sfia_next_recette_ml4`, table `derived_embedding_chunks` présente |
| Connexions établies vers :3200 | aucune |

Travaux : 0 statut RUNNING, 0 bail dans le futur, 0 mise à jour OPEN/RUNNING dans les 15 minutes. Sept fiches OPEN et trois SUSPENDED sont des enregistrements durables, dernière mise à jour cognitive `2026-11-28 07:10:56 UTC`. Ce ne sont pas des exécutions en cours. Aucune reprise ni réconciliation n'a été lancée pour le constater.

Démarrage et émission : `instrumentation.ts` rappelle les superviseurs Cursor DISPATCHED et les restitutions incomplètes. Il y a 0 tentative `CURSOR_EXECUTION` au statut DISPATCHED. Les deux tentatives existantes sont PREPARED (non terminale, ignorée) et COMPLETED avec handoff et avis déjà matérialisé. Le rappel différé de Nora revient alors sans réécriture : `updated_at` de ces tentatives est resté `2026-11-24 20:41 UTC` après le redémarrage. Aucun appel `api.openai.com` n'apparaît dans la queue des journaux du service.

## 5. Delta de configuration

Fichier unique, hors Git. Mode `0600` conservé. Sauvegarde locale hors Git, mode `0600`, nom `env.local.pre-v02-admit-20261128T101048Z`, dans le dossier de sauvegardes déjà existant. Son contenu n'est pas restitué.

Deux lignes ajoutées en fin de fichier, et rien d'autre :

```text
SFIA_COG_PROVISIONAL_POLICY=v0.2
SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2
```

Après écriture : une seule occurrence de chaque clé. Le préfixe antérieur du fichier est inchangé. `SFIA_COGNITIVE_ADMISSION_MODE` reste absent. Les plafonds, la lane, le profil, les secrets, le DSN, le LaunchAgent et le script de démarrage n'ont pas été modifiés. Le SHA stale du fichier n'a pas été corrigé.

## 6. Redémarrage

Commande exécutée, gestionnaire confirmé :

```text
launchctl kickstart -k "gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004"
```

Résultat : code 0. Nouveau parent LaunchAgent PID 58938, démarré 2026-11-28 11:10:52 CET, commande `npm exec next start -H 127.0.0.1 -p 3200`. Serveur PID 58965, 11:10:53 CET, écoute `127.0.0.1:3200`. cwd inchangé. SHA et BUILD inchangés. DEV PID 55011 toujours sur :3100. PostgreSQL non arrêté. Pas de second serveur. Pas de rebuild. Rollback non exécuté.

## 7. Smoke non émissif

`GET /login` : HTTP 200. La page est un composant client. `curl` n'exécute pas son `useEffect`, qui serait le seul chemin vers `/api/auth/status` puis, seulement si l'auto-session DEV est active, vers `POST /api/dev/auto-session`. Ce POST n'a pas été appelé.

`GET /api/auth/status` : le handler lit `githubOAuthStatus()`, qui rapporte des drapeaux locaux. Réponse filtrée : `lane=RECETTE`, `testLoginAvailable=false`, `autoSessionAvailable=false`, `configured=true`, provider `github-oauth-studio-identity-only`. Aucun secret restitué. Ce HTTP 200 n'est pas une preuve cognitive LIVE.

Après le smoke, `cognitive_works.max(updated_at)` est toujours `2026-11-28 07:10:56 UTC`. Aucun nouveau travail n'a été écrit.

## 8. Résolution de la politique

Chaîne relue après écriture : LaunchAgent (PATH seul) → `start-recette-ml5.sh` (lane RECETTE, SHA `0ae9e1f7…`, WEB 0, admin 0, BUILD depuis le fichier) → fichier sourcé, qui porte maintenant les deux clés et n'est pas écrasé sur ces clés.

Contrôle isolé, sans appel fournisseur, avec ces valeurs non sensibles injectées dans un processus jetable. `admitModelEffort` lit `process.env` de ce processus, pas celui du serveur.

| Résultat | Valeur |
| --- | --- |
| id | v0.2 |
| provisionalActive | true |
| défaut | gpt-6.1-terra @ medium |
| codes | `COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.2-20261126`, `COG_POLICY_VERSION_v0.2`, `LANE_RECETTE`, `COG_POLICY_RECETTE_ADMIT_QUALIFIED`, `COG_POLICY_RECETTE_ADMIT_VERSION_v0.2` |

| Couple | provisional | admit operational |
| --- | --- | --- |
| gpt-6-luna @ low | oui | ADMITTED |
| gpt-6-luna @ medium | oui | ADMITTED |
| gpt-6-luna @ high | non | PROVISIONAL_CANDIDATE_NOT_ADMITTED |
| gpt-6.1-terra @ medium | oui | ADMITTED |
| gpt-6.1-terra @ high | non | PROVISIONAL_CANDIDATE_NOT_ADMITTED |
| gpt-6.2-sol @ low | oui | ADMITTED |
| gpt-6.2-sol @ medium | oui | ADMITTED |
| gpt-6.2-sol @ high | oui | ADMITTED |

Le catalogue n'a pas changé. Les plafonds 120 / 1 000 000 / 2 000 000 sont inchangés et ne constituent pas la preuve d'admission. La preuve est la résolution ci-dessus.

Disciplines :

- CONFIGURED : VERIFIED
- LAUNCH CHAIN : VERIFIED
- EFFECTIVE PROCESS ENV : NON OBSERVÉ pour les deux clés de politique. `ps` ne montre pas l'environnement. `STUDIO_LANE=RECETTE` est, lui, observé via `/api/auth/status`, qui lit `process.env` du serveur vivant.
- POLICY RESOLUTION : DET PROVEN sur les valeurs de la chaîne
- LIVE BEHAVIOR : NOT RUN

Ce processus séparé n'a pas lu `process.env` du serveur 58965.

## 9. Avant / après

| Champ | Avant | Après | Nature |
| --- | --- | --- | --- |
| PID RECETTE | 77113, parent 77087 | 58965, parent 58938 | observé |
| SHA | `0ae9e1f7…` | `0ae9e1f7…` | observé, worktree et script |
| BUILD | `p0S18hfVdGrMjGeNMGlbV` | identique | observé sur disque, mtime antérieure aux deux démarrages |
| Port | 127.0.0.1:3200 | identique | observé |
| Base | `sfia_next_recette_ml4` | identique | observé |
| Schéma | marqueur `derived_embedding_chunks` | présent | observé, pas un audit exhaustif |
| Policy | ABSENT | v0.2 | lu dans le fichier ; pas dans la mémoire du PID |
| Admit | ABSENT | qualified-v0.2 | lu dans le fichier ; pas dans la mémoire du PID |
| Mode | absent → operational | inchangé | déduit du code |
| Résolution | legacy_sol, Sol medium | v0.2 actif, Terra medium | DET sur la chaîne, pas un tour Nora |
| WEB | 0 | 0 | fichier et script |
| Admin | 0 via le script | 0 via le script | script inchangé |
| Émissions fournisseur | aucune pendant ce cycle | aucune observée | pas de LIVE ; journaux sans `api.openai.com` dans la queue lue ; horodatages métier inchangés |
| DEV PID | 55011 | 55011 | observé |

## 10. Rollback

Non exécuté. Il reste autorisé si un échec ultérieur l'exige : retirer uniquement les deux lignes, relancer le même LaunchAgent, vérifier `legacy_sol` et Sol medium. Ne pas restaurer le fichier de sauvegarde complet, ni PostgreSQL, ni un autre build. La sauvegarde locale existe seulement comme copie de sécurité hors Git.

## 11. COG-REC-01 — DEFERRED TO RECETTE

Statut : DEFERRED TO RECETTE. Ce n'est pas un PASS.

Résultat attendu : Nora dispose effectivement de la politique v0.2 en RECETTE et peut mobiliser Terra ou Luna lorsque c'est pertinent, tout en conservant Sol pour un besoin approprié. Ne pas imposer les trois modèles.

Preuves futures : politique effective, modèle proposé, modèle demandé et admis, effort demandé et admis, modèle et effort appliqués s'ils sont observables, reason codes, usage, latence, qualité. Si `modelApplied` ou `effortApplied` ne sont pas exposés : UNVERIFIED. Ne pas recopier la valeur demandée. Inclure les émissions de préparation et de scénario. Projet synthétique. Pas Equipéo, pas MaintiPlan, pas T08, pas de changement des plafonds, pas de contournement de `attachConfiguredLiveCampaignFromEnv`.

MP14 et la corrélation FinOps exhaustive restent hors de ce mandat.

Raison du report : Morris n'a pas autorisé le LIVE. Le mécanisme de campagne existant refuse les lanes non DEV. Aucun harness nouveau n'a été construit.

## 12. Addendum factuel de mise à disposition

Cet addendum est dans le pack seulement. Le manifeste historique du 27/11 n'a pas été modifié.

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-28 11:10:53 CET |
| SHA RECETTE | `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` |
| BUILD | `p0S18hfVdGrMjGeNMGlbV` |
| Service | LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`, PID 58965 |
| Delta | `SFIA_COG_PROVISIONAL_POLICY=v0.2` et `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2` |
| Contrôles | redémarrage, smoke non émissif, résolution DET v0.2, couples conformes |
| Rollback | disponible, non exécuté |
| LIVE | DEFERRED TO RECETTE, COG-REC-01 |
| Release | NO RELEASE, STABLE NOT AVAILABLE, aucun nouveau build, aucun commit produit |

Prochain cutover : vérifier la version de politique, le jeton versionné correspondant, la résolution, la lane, le mode operational, et l'absence de contamination. Ne pas conclure à l'admission à partir des seuls plafonds.

## 13. Risques et réserves

Réserves : la mémoire du processus ne montre pas les deux clés ; la résolution est prouvée sur la chaîne de lancement et par le code, pas par un tour fournisseur. Le BUILD servi est celui du fichier lu au démarrage, identique avant et après, sans lecture de la variable dans le processus. Les travaux OPEN historiques n'ont pas été fermés ni repris. Le comportement Nora v0.2 en RECETTE reste non exercé. MP15 n'est pas fonctionnellement clos. Livraison 1 n'est pas acceptée.

Aucune dette structurelle. Aucune émission. Aucune contamination DEV observée. Le script historique DEV de qualification n'a pas été lancé.

## 14. Fake / Real

| Canal | Qualification |
| --- | --- |
| DET | Fonctions produit exécutées avec les valeurs réelles de la chaîne. Résolution v0.2 et matrice conformes. |
| Configuration | Écriture réelle des deux clés, redémarrage réel du LaunchAgent. |
| Process env | Lane observée via la route de statut. Clés de politique NON OBSERVÉES dans la mémoire du PID. |
| PG | Lecture d'identité, de statuts et d'horodatages. Aucune mutation SQL. |
| BROWSER | Non utilisé. |
| LIVE | NOT RUN. |

## 15. Fichiers et publication produit

Fichiers produit créés : aucun. Fichiers produit modifiés : aucun. Diff Git produit : vide. Commit produit : aucun. Candidat DEV distant inchangé : `017487581c317f957ef7a96ff2f3d95450fcf9ab`. CI distante : NOT RUN. Le fichier d'environnement et sa sauvegarde ne sont pas publiés.

Content coverage du code produit : N/A, motivé. Le delta de configuration non sensible est intégral dans la section 5.

## 16. Verdict

READY WITH RESERVES.

L'activation est faite. Le redémarrage et le smoke non émissif ont réussi. La configuration et la résolution DET sont conformes. Le contrôle comportemental LIVE est différé (COG-REC-01). Le rollback n'a pas été nécessaire.
