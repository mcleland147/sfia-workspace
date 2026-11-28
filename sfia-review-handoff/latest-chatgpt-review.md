# SFIA Studio Next — Lot 3 — Préparation d'admission cognitive RECETTE

Cycle 07 — Intégration / DevOps. Profil Critical. Typologie RUN / correctif de configuration.
Jalon R5 / ML5. Classe NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.
Revue : Full. Handoff : required / publish-in-cycle.
Date du pack : 2026-11-28 11:01 CET.

Ce cycle est non mutatif. Aucun fichier produit n'est créé ou modifié. Aucune configuration, aucun processus, aucune base et aucune émission fournisseur n'ont été touchés.

## 1. Identité et mandat

Morris a accepté la sortie technique du lot 2 avec ses réserves RECETTE et a autorisé la préparation du lot 3.

Objectif : rétablir en RECETTE la capacité d'allocation cognitive adaptative déjà disponible en DEV, sans reconstruire le moteur. Anomalie principale MP15. Prérequis de qualification MP14, non exercé ici.

Périmètre exécuté :

- A. Vérification de la configuration réellement utilisée au démarrage.
- B. Préflight déterministe d'admission, hors processus RECETTE, sans émission.
- C. Plan d'activation, rollback et protocole LIVE borné, non exécutés.

Hors mandat, non faits : modification de RECETTE, redémarrage, qualification LIVE, promotion d'un candidat, lot 4, CI distante, PR, push de main, migration, changement de code.

Statuts maintenus : R5 IN PROGRESS, ML5 OPEN, LIVRAISON 1 NOT ACCEPTED, 17 MP OPEN, R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED. MP15 reste OPEN jusqu'à un GO de configuration distinct.

## 2. Git Truth Check

Dépôt `mcleland147/sfia-workspace`. Remote `origin` = `https://github.com/mcleland147/sfia-workspace.git`.

| Contrôle | Résultat |
| --- | --- |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local | `017487581c317f957ef7a96ff2f3d95450fcf9ab` |
| HEAD distant | `017487581c317f957ef7a96ff2f3d95450fcf9ab` |
| Tree | `b398725b2bbef59c295dbc3093f23a767f433994` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base HEAD / origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Worktree produit | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Statut | uniquement non suivi : `.tmp-sfia-review/` et `projects/sfia-studio-next/web/.tmp-sfia-review/` |
| Branche documentaire | `origin/docs/next-openai-studio-convergence-20261126` = `2a003f0db9386daf9436f032aced1c870f8f3cf3` |
| Handoff avant ce cycle | `origin/sfia/review-handoff` = `30601c08510f929eb0df09041b03a6b26859b70e` |
| Worktree handoff | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023`, propre, branche `sfia/review-handoff` |
| Checkout local `main` | `/Users/morris/Projects/sfia-workspace` est à `4b1a0580`, en retard sur `origin/main`. Les sources « sur main » ont été lues via `origin/main`, pas via ce checkout. |

Aucun nettoyage, stash, restauration ou suppression. Aucun commit produit : le candidat DEV distant existant est inchangé.

Candidat réellement servi en RECETTE, distinct du HEAD DEV :

- Worktree `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee`
- HEAD détaché `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`
- cwd du processus = `.../projects/sfia-studio-next/web`
- BUILD_ID lu sur disque `p0S18hfVdGrMjGeNMGlbV`, mtime 2026-11-27 22:42:14 CET, avant le démarrage du processus

## 3. Sources effectivement lues

Méthode, depuis `origin/main` `997897fd` :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`, blob `3315bbae4757ad42255d16cba47d9e32be2a7842`, §4.3.0b (pré-check Next, ENV-01, versioning, STOP).
- `prompts/templates/sfia-cycle-execution-template.md`, blob `f4fdb488fdf81fa9bf874c1c24c1a22d0cb296c1`, §2.0.H et §9.1.
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`, blob `675de2df07602d8f88d51ee03ddddd4ca4ebd2ea` (identité de la source ; pas de réécriture).
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`, blob `673545f945e0ba1e9e57647c0c316bbc46c1a402`.
- `scripts/sfia/README.md`, blob `e0c5894b8a4f1cfefdc63d5f0fb51ef7f025ad9f`. Le publisher réellement invoqué est `scripts/sfia/publish-review-handoff.sh` du worktree produit.
- CKC cycle 07 : aucun pilote détaillé. Fallback `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`, blob `aa574926dc6c597675f9fe9257f2820c2a11ed5e`. Guidance expérimentale uniquement. Le template v2.6 reste contractuel.

Gouvernance Next, blobs identiques sur `origin/main` et sur le HEAD produit :

- `governance/environnements-recette-et-promotions.md`, blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f`, politique v0.1, VALIDATED CONTENT BY MORRIS. ENV-01 REQUIRED pour ce cycle technique. Application : lecture et préparation, aucune mutation.
- `governance/product-versioning.md`, blob `8bc93e0fafac0f981c446e978a37f5f93d183875`. Classe de ce cycle : préparation de configuration, NO RELEASE, STABLE NOT AVAILABLE.
- `governance/SEF.md` sur le HEAD produit : SEF v0.2 VALIDATED BY MORRIS / R0-A, addendum SEF-01. En-tête et statut lus.
- `governance/roadmap.md` : bannière factuelle du 22 novembre 2026 (Ensemble 08 mergé, ML5 non autorisé par cette fusion). Elle n'enregistre pas encore l'état programme R5/ML5 du suivi v0.8. Le statut programme utilisé est celui du suivi, pas une réécriture de la roadmap.
- `governance/product-naming-conventions.md` : non mobilisé pour un nouveau nom. Pas de nouveau composant.
- `cadrage/vision-cible/README.md` : non relu en détail. Ce cycle ne change ni le besoin ni l'UX. N/A de conception, justifié.
- Décisions R4 / SEM : aucune décision de gouvernance relue ne qualifie v0.2 en RECETTE.

Suivi opérationnel :

- `construction/suivi-trajectoire-corrective-post-recette-equipeo.md`
- ref `2a003f0db9386daf9436f032aced1c870f8f3cf3`
- blob `d03a271a46d74f0941280b203573fab9382b30c6`
- version v0.8
- sections lues : §3 contrat L3, §9.1 qualification proportionnée, §13 arbitrage et préparation L3

Diagnostic causal :

- `sfia-review-handoff/latest-chatgpt-review.md` à `515561e7e5bf395907bf4ec0f4c9990a36dc4aa7`
- blob `7dddb39b87405de30d997f2e8a6d4900ae56b1d2`
- §4 Famille B MP-15, et fiches MP-14 / MP-15

Contrats et preuves historiques :

- `construction/ml5-cognitive-calibration-recommendation-20261126.md` : politique v0.1, lane DEV, « NON RECETTE ». La validation Morris du 26/11 ne qualifie pas RECETTE v0.2. Luna Low y est encore candidat, pas admis.
- `construction/delivery-history.md`, entrée `DELIV-2026-11-26-ML5-WEB-PDF-FINALISATION` : v0.2 explicite, Luna Low expérimental DEV. Commit d'introduction du jeu v0.2 : `912ef30b40f2447a925f4182bc4961560eca810e` (2026-11-26 14:14 +0100).
- `construction/ml5-recette-cutover-manifest-20261127.md` : manifeste historique du candidat `e8e6e069`, plus du candidat servi. Il marque l'allocation adaptative « admise » à partir des seules enveloppes 120 / 1M / 2M. Cette affirmation n'est pas une preuve d'admission v0.2.
- `architecture-technique/allocation-cognitive-recherche-web-et-finops.md` et `conducteur-cognitif-et-production-nora.md` : non relus intégralement. La chaîne exécutable a été lue dans le code servi, cité plus bas. `construction/convergence-openai-studio/contrat-technique.md` et `construction/recette-metier-ml5-e2e-post-correctif-20261127.md` : non utilisés comme preuve d'admission ; le diagnostic §4 et le code identique suffisent. Pas de nouveau diagnostic transverse.

Code lu, blobs identiques entre DEV `01748758` et RECETTE `0ae9e1f7` :

| Fichier | Blob |
| --- | --- |
| `web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts` | `a526b0fd688d971345e6d6927dcbe4a18c8c5509` |
| `web/src/domains/conversation/cognitive-resources/resource-admission.ts` | `b4ab0dd7ac8d9ab1948db2dc20a11119d4215f18` |
| `web/tests/unit/ml5-cognitive-resources.test.ts` | `68a5c3eb259f8a582fca8784a5aa49f445fe88e5` |

Chaîne également lue : `cognitive-policy.ts` (`admissionModeFromEnv`, `resolveAdmittedResource`), `cognitive-conductor.ts` (appel `buildCognitivePolicy`), `run-nora-cognitive-turn.ts` (trace proposed / admitted), `nora-adapter.ts` (persistance `modelApplied` / `effortApplied` = `UNVERIFIED`), `provider-emission-frontier.ts` (`admissionModeFromEnv`, défaut operational).

## 4. Identités d'environnement

Aucune mutation. Les deux serveurs écoutaient encore aux mêmes PID à la fin du préflight.

| | DEV | RECETTE |
| --- | --- | --- |
| Port | 127.0.0.1:3100 | 127.0.0.1:3200 |
| PID serveur | 55011 | 77113 |
| PID parent | 54968, PPID 1 | 77087, PPID 1 |
| Commande | `npm exec next start -p 3100 -H 127.0.0.1` | `npm exec next start -H 127.0.0.1 -p 3200` |
| Démarrage | 2026-11-27 22:18:46 CET | 2026-11-27 22:42:48 CET |
| cwd | worktree produit `.../web` | worktree `0ae9e1f7` `.../web` |
| Gestionnaire | pas un LaunchAgent listé ; parent launchd | `com.sfia.studio.next.recette.ml4d-ux004` |
| PostgreSQL | Docker `sfia-next-dev-pg`, 127.0.0.1:5433 | Docker `sfia-next-recette-pg`, 127.0.0.1:5434 |
| Base | `sfia_next_dev` | `sfia_next_recette_ml4` |
| Rôle conteneur | `sfia_next_dev` | `sfia_next_recette_ml4` |
| Schéma | non ré-audité (hors effet) | table `derived_embedding_chunks` présente ; seul script `027_derived_embedding_chunks.sql` existe au-delà de 026. Marqueur 027 du manifeste, sans nouvelle migration. |
| SHA annoncé au lancement | non exporté par un script observé | script : `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` |
| BUILD | fichier `.next/BUILD_ID` = `31044BhyAFqJ_OpeQJS_K`, mtime 22:38:53, donc APRÈS le démarrage de 55011. Ce fichier ne prouve pas le build chargé par le PID. | `p0S18hfVdGrMjGeNMGlbV`, mtime avant le démarrage, relu identique |

`ps -Eww` sur 55011, 54968, 77113 et 77087 ne contient aucun des paramètres cognitifs (sortie de 83 à 102 octets). L'environnement du processus n'est pas lisible par ce moyen sur cette machine. L'effectif est donc inféré de la chaîne de lancement, pas lu dans la mémoire du processus.

## 5. Chaîne de priorité et valeurs non sensibles

### RECETTE — chaîne réelle

1. LaunchAgent `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist`. Seule variable : `PATH`. Aucune variable cognitive.
2. Programme : `~/.local/share/sfia-studio-next/bin/start-recette-ml5.sh` (mtime 2026-11-27 22:42:39 CET, neuf secondes avant le PID).
3. Le script fait `set -a; source ~/.config/sfia-studio-next/recette/.env.local; set +a`, puis écrase explicitement `STUDIO_LANE`, `PORT`, `NODE_ENV`, `SFIA_SOURCE_SHA`, les flags WEB, et `SFIA_BUILD_ID` depuis `.next/BUILD_ID`.
4. Le script n'écrit ni ne supprime `SFIA_COG_PROVISIONAL_POLICY` ni `SFIA_COG_PROVISIONAL_RECETTE_ADMIT`.
5. Le répertoire web servi ne contient aucun `.env`, `.env.local`, `.env.production` ou `.env.production.local`. Next ne peut pas ajouter ces clés au démarrage.
6. Next ne remplace pas une variable déjà présente. Ici les deux clés ne sont présentes nulle part dans la chaîne.

Fichier source : `~/.config/sfia-studio-next/recette/.env.local`, mtime 2026-11-27 10:48:01 CET, donc avant le démarrage, et non modifié depuis. Les sauvegardes historiques du même dossier ont été inventoriées par noms de clés seulement : aucune ne contient les deux clés d'admission.

Le fichier porte encore `SFIA_SOURCE_SHA=e8e6e06961fa0a7224db3badb3b591b8be8046ac`. Le script l'écrase avec `0ae9e1f7…`. Lire le fichier seul induit en erreur sur le SHA. Cela ne change pas l'admission : les deux clés restent absentes des deux côtés.

### DEV — chaîne réelle

Pas de LaunchAgent dédié. `next start` a pour cwd le web du worktree produit, qui contient `.env.local` (mtime 2026-11-27 07:16:09 CET, avant le PID 22:18). Next charge ce fichier pour les clés absentes de l'environnement du lanceur. Le lanceur n'a pas de script qui écrase la politique. L'environnement du PID reste non lisible.

### Tableau comparé

| Clé | DEV fichier `.env.local` | RECETTE après source + script |
| --- | --- | --- |
| STUDIO_LANE | DEV | RECETTE |
| SFIA_SOURCE_SHA | ABSENT | effectif de lancement `0ae9e1f7…` (fichier stale `e8e6e069…` écrasé) |
| SFIA_BUILD_ID | ABSENT du fichier ; build du PID NON OBSERVÉ | `p0S18hfVdGrMjGeNMGlbV` |
| SFIA_COG_PROFILE_TYPE | OPERATIONAL_PROVISIONAL | OPERATIONAL_PROVISIONAL |
| SFIA_COG_PROVISIONAL_POLICY | v0.2 | ABSENT |
| SFIA_COG_PROVISIONAL_RECETTE_ADMIT | ABSENT | ABSENT |
| SFIA_COGNITIVE_ADMISSION_MODE | operational | ABSENT, donc défaut code `operational` |
| SFIA_COGNITIVE_MAX_SEGMENTS | 120 | 120 |
| SFIA_COGNITIVE_REEVAL_TOKENS | 1000000 | 1000000 |
| SFIA_COGNITIVE_MAX_TOKENS | 2000000 | 2000000 |

`SFIA_COG_PROFILE_TYPE=OPERATIONAL_PROVISIONAL` n'ouvre pas la politique. Les plafonds 120 / 1M / 2M ne l'ouvrent pas non plus.

### Disciplines

| État | DEV | RECETTE |
| --- | --- | --- |
| CONFIGURED | v0.2, sans jeton RECETTE (non requis en DEV) | policy ABSENT, admit ABSENT, plafonds présents |
| EFFECTIVE | inféré : fichier antérieur au PID, chargé par `next start`. Mémoire processus NON OBSERVÉE. | inféré : chaîne LaunchAgent → script → fichier, fichiers antérieurs au PID et inchangés. Mémoire processus NON OBSERVÉE. Résolution : `legacy_sol`. |
| ADMITTED | couples v0.2 si la politique chargée est bien v0.2 | non. Provisional inactif. Sol low/medium/high restent le seul couloir opérationnel. |
| AVAILABLE | le code du blob `a526b0fd` sait activer v0.2 | le même blob est dans le candidat servi ; il n'est pas activé |
| LIVE EXERCISED | non demandé | NOT RUN |
| USER QUALIFIED | la calibration du 26/11 est v0.1 DEV, pas une qualification RECETTE v0.2 | non |

## 6. Confirmation de MP15

Le pré-check ChatGPT est confirmé localement.

Sans `SFIA_COG_PROVISIONAL_POLICY`, `resolveProvisionalPolicy` retourne `legacy_sol`, `provisionalActive=false`, code `COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL`. C'est le cas de la chaîne RECETTE actuelle.

RECETTE n'active v0.2 que si la politique vaut `v0.2` et si l'admit vaut exactement `qualified-v0.2` ou `qualified:v0.2`. Le jeton `qualified` seul est refusé (`COG_POLICY_RECETTE_ADMIT_BARE_QUALIFIED_REJECTED`). `qualified-v0.1` ne satisfait pas une politique v0.2.

`admitModelEffort` en mode operational, politique inactive, n'admet que Sol low, medium et high. Terra et Luna sont refusés. Le défaut opérationnel redevient `gpt-6.2-sol` @ `medium`.

Aucun changement de code n'est nécessaire pour lever MP15. Le défaut est une clé absente au démarrage, pas un moteur à reconstruire. Aucune réécriture n'est demandée.

Le manifeste du 27/11 qui qualifie l'allocation « admise » parce que les enveloppes 120 / 1M / 2M sont posées est trop large. Ces enveloppes sont bien présentes aujourd'hui, et la politique v0.2 ne l'est pas.

## 7. Matrice DET

Exécutée le 2026-11-28 hors processus RECETTE, avec des objets d'environnement explicites passés aux fonctions produit. Aucune variable réelle n'a été écrite. Aucune émission réseau.

Commande de réutilisation des tests existants, depuis `projects/sfia-studio-next/web`, `DATABASE_URL` et `OPENAI_API_KEY` retirés du processus de test :

`npx vitest run tests/unit/ml5-cognitive-resources.test.ts --reporter=verbose`

Résultat : 38 tests passés, 1 fichier, durée 373 ms. Vitest a injecté 3 variables depuis le `.env.local` DEV du worktree. Les cas d'admission écrasent `STUDIO_LANE` et la politique dans le test. La matrice ci-dessous ne dépend pas de cette injection : elle appelle `resolveProvisionalPolicy`, `resolveOperationalDefaultResource` et `isProvisionalAdmittedCouple` avec un objet isolé.

| Cas | id | active | défaut | couples provisoires admis |
| --- | --- | --- | --- | --- |
| 1. RECETTE sans policy | legacy_sol | false | gpt-6.2-sol@medium | aucun |
| 2. RECETTE v0.2 sans admit | legacy_sol | false | gpt-6.2-sol@medium | aucun |
| 3. RECETTE v0.2 + `qualified` | legacy_sol | false | gpt-6.2-sol@medium | aucun |
| 4. RECETTE v0.2 + `qualified-v0.1` | legacy_sol | false | gpt-6.2-sol@medium | aucun |
| 5. RECETTE v0.2 + `qualified-v0.2` | v0.2 | true | gpt-6.1-terra@medium | luna@low, luna@medium, terra@medium, sol@low, sol@medium, sol@high |
| 6. DEV v0.2 | v0.2 | true | gpt-6.1-terra@medium | même jeu que le cas 5 |
| 7. `legacy_sol`, même si l'admit v0.2 est présent | legacy_sol | false | gpt-6.2-sol@medium | aucun |

Cas 5, codes : `COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.2-20261126`, `COG_POLICY_VERSION_v0.2`, `LANE_RECETTE`, `COG_POLICY_RECETTE_ADMIT_QUALIFIED`, `COG_POLICY_RECETTE_ADMIT_VERSION_v0.2`.

Terra high et Luna high ne figurent pas dans le jeu admis. Ils restent candidats (`PROVISIONAL_CANDIDATE_NOT_ADMITTED`). Le catalogue n'a pas été élargi. Aucun mapping tâche → modèle n'a été ajouté.

Précision du cas 7 : `isProvisionalAdmittedCouple` est faux, le défaut est Sol medium. `admitModelEffort` continue d'accepter Sol low/medium/high par la bande historique, politique inactive. Le rollback ne retire pas Sol. Il retire Terra et Luna.

Le mode `calibration` n'est pas la cible. Il reste un mode séparé, non activé par l'absence de `SFIA_COGNITIVE_ADMISSION_MODE`.

## 8. Chaîne jusqu'à l'émission — arrêt avant le fournisseur

Politique effective (`resolveProvisionalPolicy` sur `process.env`) → ressource par défaut ou couple proposé → `admitModelEffort` / `resolveAdmittedResource` → `buildCognitivePolicy` (conducteur, `cognitive-conductor.ts`) → trace `proposed` / `admitted` dans `run-nora-cognitive-turn.ts` → `nora-adapter` envoie `modelRequested` et `effortRequested` → Frontier contrôle le mode et l'enveloppe HTTP → émission fournisseur.

Ce cycle s'arrête avant toute émission. `web/scripts/ml5-provisional-policy-qualification-live.mts` n'a pas été lancé. Il force `STUDIO_LANE=DEV` et ne doit pas servir de contournement RECETTE.

`nora-adapter.ts` enregistre `modelApplied: "UNVERIFIED"` et `effortApplied: "UNVERIFIED"` lorsque le fournisseur ne confirme pas le modèle. Ces champs ne sont pas recopiés depuis la valeur demandée. Une future preuve LIVE devra les laisser UNVERIFIED s'ils ne sont pas exposés. `modelRequested`, `effortRequested`, `policyVersion` et `reasonCodes` sont, eux, produits par le code local avant l'appel.

## 9. Plan d'activation — non exécuté

Même candidat, même build, pas de cutover des lots 1 et 2.

Fichier concerné, hors Git :

`/Users/morris/.config/sfia-studio-next/recette/.env.local`

Deux lignes à ajouter, et rien d'autre :

```text
SFIA_COG_PROVISIONAL_POLICY=v0.2
SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2
```

Ne pas ajouter `SFIA_COGNITIVE_ADMISSION_MODE` : son absence est déjà le défaut `operational`. Ne pas modifier les plafonds, le profil, les secrets, `STUDIO_LANE`, ni le SHA du fichier. Ne pas « corriger » le SHA stale du fichier : le script continue de l'écraser, et le modifier mélangerait activation et promotion.

Launcher : aucune surcharge à ajouter pour que les deux clés prennent effet. `start-recette-ml5.sh` ne les touche pas. Le plist ne les porte pas. Les poser dans le fichier sourcé suffit.

Sauvegarde non sensible, au moment du GO futur :

- Conserver le tableau de la section 5 comme état antérieur des clés d'admission (absentes) et des plafonds.
- Une copie locale horodatée du fichier peut être faite hors Git, sur la machine, immédiatement avant l'édition.
- Ne pas commiter cette copie. Ne pas la publier. Ne pas restaurer plus tard un `.env` historique complet : les sauvegardes déjà présentes contiennent des secrets obsolètes et des SHA périmés.

Redémarrage, uniquement après GO Morris :

```text
launchctl kickstart -k "gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004"
```

C'est le gestionnaire réel du PID 77087. Ne pas arrêter le port 3100. Ne pas lancer un second serveur sur 3200.

Vérifications après redémarrage :

1. Nouveau PID sur 127.0.0.1:3200, commande `next start -H 127.0.0.1 -p 3200`.
2. cwd inchangé : worktree `0ae9e1f7`.
3. `.next/BUILD_ID` toujours `p0S18hfVdGrMjGeNMGlbV`.
4. Le script exporte toujours `SFIA_SOURCE_SHA=0ae9e1f7aaee3658eb3e9a135523e83a72631b31`.
5. Relecture des seules clés autorisées : policy `v0.2`, admit `qualified-v0.2`, mode absent, plafonds 120 / 1000000 / 2000000, lane RECETTE, WEB search à 0, collector admin à 0.
6. Rejouer la résolution du cas 5 sur ces valeurs, dans un processus jetable, sans appel fournisseur. Attendu : `v0.2` actif, défaut Terra medium.
7. Base `sfia_next_recette_ml4` inchangée, table `derived_embedding_chunks` toujours là, aucune migration.
8. Ne pas déclarer l'environnement du PID « lu » si `ps -E` reste vide. L'effectif reste alors inféré de la chaîne relue après écriture. Un endpoint de diagnostic serait un changement de code, hors de ce mandat.

Conditions de rollback, non exécutées :

- Retirer les deux lignes, ou poser `SFIA_COG_PROVISIONAL_POLICY=legacy_sol` et retirer l'admit.
- Relancer le même LaunchAgent.
- Résolution attendue : cas 1 ou cas 7, défaut Sol medium.
- Ne pas restaurer un ancien fichier d'environnement complet.
- Ne pas restaurer PostgreSQL.
- Ne pas changer de worktree ni de BUILD.

À préserver pendant l'activation future : SHA `0ae9e1f7`, BUILD `p0S18hfVdGrMjGeNMGlbV`, PostgreSQL, schéma 027, données, projets Equipéo et MaintiPlan, configuration DEV, secrets isolés, WEB LIVE OFF, Admin OFF.

## 10. Contrôle de promotion réutilisable

À appliquer à toute future mise à disposition RECETTE. L'échec d'un point interdit de déclarer l'allocation adaptative admise.

1. Le SHA servi est celui exporté par le script de démarrage, pas le SHA éventuellement stale du fichier d'environnement.
2. Le BUILD_ID servi est celui lu au démarrage, avec une mtime antérieure au PID.
3. `STUDIO_LANE=RECETTE`.
4. `SFIA_COG_PROVISIONAL_POLICY` a la version voulue. Pour l'activation préparée ici : `v0.2`.
5. `SFIA_COG_PROVISIONAL_RECETTE_ADMIT` vaut `qualified-` suivi de cette même version. `qualified` seul est un échec.
6. `resolveProvisionalPolicy` sur cet environnement est `provisionalActive=true` et le défaut est Terra medium. Un simple témoin de plafonds ne compte pas.
7. Les plafonds 120 / 1M / 2M sont enregistrés à part. Leur présence ne prouve pas l'admission.
8. Le mode d'admission absent signifie `operational`. Un mode `calibration` laissé par erreur est un échec de cette promotion.
9. Aucune émission n'est requise pour ce contrôle. Il est déterministe.

Cet angle mort est celui du manifeste du 27/11 et du diagnostic §4 : la promotion a documenté les enveloppes et n'a pas posé l'admit.

## 11. Protocole LIVE — non exécuté

LIVE : NOT RUN. GO spécifique requis. Le script historique DEV n'est pas un substitut.

Projet futur : un projet de qualification isolé, données synthétiques, créé pour l'essai. Ne pas utiliser Equipéo ni MaintiPlan. Ne pas reproduire MaintiPlan T08. Ne pas modifier les plafonds globaux 120 / 1M / 2M.

Preuves à distinguer, pour chaque tour : `modelProposed`, `modelRequested`, `modelApplied`, `effortProposed`, `effortRequested`, `effortApplied`, `policyVersion`, `reasonCodes`, admission, usage, latence, qualité du résultat. Si le SDK n'expose pas le modèle ou l'effort appliqué : écrire UNVERIFIED. Ne jamais recopier la valeur demandée. Le code actuel persiste déjà le littéral `UNVERIFIED`.

La corrélation FinOps exhaustive reste le lot 5. Ici, l'usage sert de garde d'enveloppe, pas de certification tarifaire. Les coûts ci-dessous sont des estimations d'ordre de grandeur tirées du corpus DEV du 26/11 (Luna ~0,0038 USD / 6 appels, Terra ~0,0308 / 7, Sol ~0,0933 / 6). Ce ne sont pas des factures. ESTIMATED ≠ facturé.

### Scénario A — interaction simple

Intention : dans le projet synthétique, une seule demande courte du type « Réponds en une phrase pour confirmer que tu as le contexte de ce projet de qualification. »

Résultat attendu : une réponse courte et proportionnée. `modelRequested` dans le jeu luna@low, luna@medium ou terra@medium. La politique v0.2 doit apparaître dans les reason codes. Sol n'est pas imposé. Si le seul modèle demandé est Sol et que le code est `COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL`, l'activation n'a pas pris : STOP, ne pas enchaîner le scénario B.

Bornes : 1 tour utilisateur ; 3 requêtes fournisseur au plus, retries compris ; 40 000 tokens d'entrée ; 2 000 tokens de sortie ; 3 minutes ; estimation sous 0,05 USD ; arrêt si l'estimation dépasse 0,10 USD ou si l'usage est inconnu après la réponse.

### Scénario B — analyse plus exigeante

Intention : une demande qui pose plusieurs contraintes contradictoires et demande une seule clarification prioritaire. Ne pas exiger Sol. Ne pas exiger les trois modèles. Ne pas forcer une alternance.

Résultat attendu : une réponse qui identifie la tension et propose une clarification. Le couple demandé peut rester Terra medium ou passer à Sol si la proposition cognitive le justifie et que l'admission l'accepte. Terra high et Luna high doivent rester refusés.

Bornes : 2 tours utilisateur au plus ; 6 requêtes fournisseur au plus, retries compris ; 120 000 tokens d'entrée ; 8 000 tokens de sortie ; 8 minutes ; estimation d'enveloppe 0,40 USD ; arrêt à 0,40 USD estimés, ou si un troisième tour commencerait, ou si un couple non admis est appliqué.

### Enveloppe commune du GO LIVE

Deux scénarios, un seul projet synthétique. Plafond combiné : 9 requêtes, 160 000 tokens d'entrée, 10 000 tokens de sortie, 15 minutes, arrêt dur à 0,50 USD estimés. STOP aussi si WEB LIVE s'allume, si Admin est sollicité, si un projet réel est lu, si le SHA ou le BUILD changent pendant l'essai, ou si la politique observée n'est pas v0.2.

Ce protocole qualifie l'admission. Il ne qualifie pas à lui seul le modèle réellement exécuté tant que `modelApplied` reste UNVERIFIED. Il ne clôt pas MP14 ni le lot 5.

## 12. Risques, réserves, dette

Risques maîtrisés par le plan, non réalisés dans ce cycle : mauvaise lane, politique non admise, surcharge invisible (le launcher a été lu : il ne pose pas la politique), coût LIVE (enveloppe proposée, non consommée), mélange activation / promotion (explicitement séparé), restauration d'un ancien fichier secret (interdite dans le rollback).

Réserves :

- L'environnement des PID n'a pas été lu. L'effectif est inféré. C'est suffisant pour préparer l'activation, pas pour prétendre avoir échantillonné `process.env` du serveur vivant.
- Le BUILD_ID sur disque du serveur DEV a été réécrit après le démarrage du PID 55011. Il n'est pas cité comme build servi.
- `modelApplied` et `effortApplied` resteront UNVERIFIED tant que le SDK ne les expose pas. Ce n'est pas un échec d'admission, et ce n'est pas une preuve du modèle exécuté.
- La calibration du 26/11 ne qualifie pas RECETTE v0.2. Luna Low en v0.2 est une admission de code DEV, pas une campagne RECETTE.
- Les contrôles RECETTE des lots 1 et 2 (DOC-REC, PROJ-REC) restent ouverts. Ils ne sont pas requalifiés ici.
- Aucune dette structurelle nouvelle. Aucun store, aucune migration, aucun endpoint ajouté.

STOP non rencontrés : pas de divergence du HEAD produit, identité RECETTE établie, configuration de lancement vérifiable, pas de besoin architectural, pas de migration, pas de nouvelle permission fournisseur, pas de rotation de secret, pas d'appel LIVE, pas de redémarrage.

## 13. Décisions Morris demandées

Trois GO restent distincts. Ils sont préparés ensemble pour éviter un cycle par arbitrage. Aucun n'est exécuté.

1. Configuration : autoriser l'ajout des deux lignes dans `~/.config/sfia-studio-next/recette/.env.local`, sans autre édition.
2. Redémarrage : autoriser `launchctl kickstart -k` du seul agent `com.sfia.studio.next.recette.ml4d-ux004`, sur le candidat déjà servi `0ae9e1f7` / BUILD `p0S18hfVdGrMjGeNMGlbV`.
3. LIVE : autoriser séparément les scénarios A et B dans l'enveloppe de la section 11, sur un projet synthétique nouveau.

Non demandés et non recommandés dans le même geste : promotion des lots 1 et 2, nouveau cutover, changement des plafonds, ouverture Admin ou WEB, lot 4, restauration PostgreSQL.

## 14. Fake / Real

| Canal | Qualification |
| --- | --- |
| DET | Règles produit réellement exécutées. 38 tests unitaires PASS. Matrice à 7 cas PASS sur fonctions exportées. |
| Configuration | Lecture réelle du plist, du script, du fichier et des métadonnées de processus. EFFECTIVE mémoire : NON OBSERVÉ. |
| PG | Lecture d'identité seulement (`current_database`, présence de `derived_embedding_chunks`). Aucune mutation. |
| BROWSER | Non nécessaire pour ce préflight. Non exécuté. |
| LIVE | NOT RUN. Aucune preuve cognitive réelle ne se déduit des tests unitaires. |

## 15. Fichiers, diff, publication produit

Fichiers produit créés : aucun.
Fichiers produit modifiés : aucun.
Diff produit : vide.
Commit produit : aucun. Le candidat DEV distant reste `017487581c317f957ef7a96ff2f3d95450fcf9ab`, tree `b398725b2bbef59c295dbc3093f23a767f433994`.
CI distante : NOT RUN.
URL du commit déjà publié, non modifié par ce cycle : `https://github.com/mcleland147/sfia-workspace/commit/017487581c317f957ef7a96ff2f3d95450fcf9ab`.

Content coverage des modifications produit : N/A, motivé. Le cycle ne change aucun fichier versionné du produit. Les résultats produits par la préparation — tableau de configuration, matrice, plan d'activation, rollback, contrôle de promotion et protocole LIVE — sont intégralement dans ce pack, pas seulement résumés.

## 16. Verdict de préparation

READY WITH RESERVES.

L'activation est préparée. La cause de MP15 est confirmée sur la chaîne de lancement. Le moteur existant suffit. Les limites qualifiées sont : environnement du processus non lu en mémoire, BUILD DEV du PID non établi, LIVE non exécuté, modèle appliqué non observable autrement que UNVERIFIED, et MP15 encore OPEN tant que Morris n'a pas autorisé l'écriture et le redémarrage.

Le verdict porte sur la préparation. Il ne dit pas que l'admission RECETTE est active.
