# SFIA Review Pack — Full — Reprise diagnostic causal Equipéo

## 0. Identité

- **Date/heure**: 2026-11-28T08:50:00+01:00
- **Cycle**: 09 QA/validation · Critical · EVOL · reprise du dossier jugé insuffisant
- **Entrée**: handoff `1a21618c26d89f05dd82e8fa1f8e82f01ce22251` blob `fd901cb601b0efd2577ade49b5b15fb8621eb16c` — verdict Cursor READY WITH RESERVES, revue ChatGPT NOT READY
- **Produit**: `sfia/next-ml5-integrated-delivery-20261123` @ `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
- **main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **docs**: `ed38685aa6ee3dd46961a88698d833a88f7a50a0` · PV blob `88474002768d1705258e5db3ad0510c21deb6fe4`
- **RECETTE servie**: :3200 BUILD `p0S18hfVdGrMjGeNMGlbV` · PG :5434 `sfia_next_recette_ml4`
- **DEV**: :3100 cwd worktree produit · PG :5433
- **Nature**: diagnostic uniquement. Aucun correctif. Aucun appel fournisseur.
- **Programme**: R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / NO RELEASE / NOT ADOPTED

Le diagnostic `1a21618c` est une source historique. Les constats repris ci-dessous ont été revérifiés dans le code `0ae9e1f7` et, lorsque indiqué, dans PostgreSQL RECETTE en lecture seule (`SET default_transaction_read_only = on`).

## 1. Git Truth

| Check | Constat 2026-11-28T08:41+01 |
|---|---|
| Repo / remote | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` · `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local = origin | `0ae9e1f7…` |
| Tree | `84253727…` |
| merge-base main | `997897fd…` |
| Handoff distant | `1a21618c…` |
| status | `?? .tmp-sfia-review/` et `?? web/.tmp-sfia-review/` uniquement |
| Services | non redémarrés · BUILD HTML `<!--p0S18hfVdGrMjGeNMGlbV-->` |

ENV ROUTING COMPLETE. Aucune divergence d'identité.

## 2. Sources réellement lues

- PV Equipéo v0.2 §9 (ref docs `ed38685a`, déjà extrait intégralement au cycle précédent, relu pour T01–T09 bis, §9.3–9.6).
- Code candidat `0ae9e1f7` : `page.tsx` focus/viewer/activity ; `document-act.ts` `resolveReviseTarget` ; `service.ts` historical + compositions L5009+ ; `provisional-cognitive-policy.ts` ; `resource-admission.ts` ; `create-project.ts` ; `initial-qualification.ts` ; `nora-adapter.ts` consignes capitalisation ; `activity-projection.ts` ; `activity-labels.ts` ; `knowledge-effect-restitution.ts` ; `ProjectJournal.tsx` badge ; `usage-read-service.ts` ; `usage-projection.ts` ; `composer-dictation-session.ts` ; `cognitive-work.ts` statuts.
- Tests nommés : `documents-historical-revise.pg.test.ts` ; `ml5-cognitive-resources.test.ts` ; `ml3-composer-dictation-integrated.pg.test.ts` T08 ; `nora-shared-composer.test.ts`.
- PG Equipéo `proj_ab38aa32-2a1b-4dc3-8aa4-42686690e651` : documents, révisions, sujets, acquis, points ouverts, décisions, travaux, événements d'activité, rattachement des observations d'usage.
- Config non secrète DEV `.env.local` vs RECETTE `~/.config/sfia-studio-next/recette/.env.local` + `start-recette-ml5.sh`.
- Journaux RECETTE : aucune ligne `PROVIDER_ERROR` / `dictation` / `Realtime` (erreur restée côté navigateur).

Non relu intégralement dans ce tour (cités via PV et cycle précédent, non re-quotés) : SEF, Roadmap, vision Figma pages. Aucun verdict F2.

## 3. Famille A — cycle documentaire (approfondi)

### 3.1 DOC-C — focus non rebasé — CONFIRMED code ; transaction T09 bis PROBABLE

Chaîne après conservation réussie (`page.tsx` vers L3029) :

`applyDocumentFocus({ ...documentFocusRef.current, clear pending/hauth })` conserve `sourceRevisionId` et `observedHeadRevisionId` d'avant la nouvelle révision.

`resolveReviseTarget` (`document-act.ts` L442–471) : si le focus porte une révision différente de `latestRevision.id`, `baseRevisionId` devient cette ancienne révision, pas la head.

`service.ts` L3813–3915 : `sourceIsHistorical = base !== actualHead` puis refus `HISTORICAL_CONFIRMATION_*` sans `historicalAuthorizationId`. Message utilisateur du PV (« confirmation de la base historique ») correspond à ce refus. Aucun bouton de conservation : la branche pending n'est pas atteinte.

Autres écritures de focus (`applyDocumentFocus` aux L1611, 2215, 2257, 2669, 2938, 2997, 3006) : reprise historique, restauration session, choix USE_SOURCE, pending. Aucune ne rebase la head après un REVISE AVAILABLE. USE_HEAD (L2953) appelle `resumeNoraWithDocumentRevision` sur `latestRevision` — chemin de confirmation explicite, pas le chemin nominal post-conserve.

PG Equipéo : un seul document `doc_449d0a30…`, titre stocké `Equipéo — Cadrage fonctionnel V1`. Révisions AVAILABLE : `drev_27d32806` n°1 (H1 V1) et `drev_d03e3e2b` n°2 base = rev1 (H1 V2). Pas de rev3. Cohérent avec un refus avant écriture. Le payload HTTP exact du tour T09 bis (baseRevisionId transmis) n'est pas rejoué ici : **cause de code CONFIRMED**, **liaison transactionnelle au tour précis PROBABLE** (état durable compatible, corps de requête non archivé).

Protections à conserver : BASE_STALE, hauth serveur, conflit de head (`documents-historical-revise.pg.test.ts` « concurrent head after historical confirmation → CONFLICT »).

### 3.2 DOC-A — prévisualisation — PROBABLE, conditions de preuve

Sur `PROPOSAL_PENDING_CONSERVATION`, le client injecte `pendingCand.contentMarkdown` dans le viewer **et** fixe `versionSource: "exact"` + `revisionId` = `sourceRevisionId` du focus (base). Le bandeau « proposition » ne s'affiche que si `viewer.markdown === pendingProposal.contentMarkdown` (`page.tsx` L3255–3258). Toute consultation qui remplace le markdown par la révision source fait disparaître le bandeau et montre V1, tout en laissant `pendingCandidateId` (bouton conserver). Hypothèse d'écrasement **non infirmée** : il n'y a pas de garde « ne pas remplacer le markdown candidat ». Preuve manquante : trace DOM du tour T09 avant clic. Condition de confirmation : test BROWSER qui, après pending, ouvre le lien de la révision citée puis compare le markdown affiché au sha du candidat.

La conservation elle-même relit le candidat scellé (`service.ts` L3523–3556), pas le markdown affiché. V2 PG (H1 V2, base rev1) montre que le contenu conservé n'était pas une copie identique de V1. L'inspection UI a échoué ; l'écriture D4 du test Pilote a réussi.

### 3.3 DOC-B — CONFIRMED

`revisionCurrencyLabel` : head null ⇒ « Historique ». Bandeau Travail si `versionSource==="exact"` et markdown ≠ proposition : « VERSION PLUS RÉCENTE… Aucun changement enregistré », y compris quand l'exact est la head. Post-conserve, rechargement D4 en `versionSource: "exact"` (L3067–3071).

### 3.4 DOC-D — CONFIRMED

Titre de ligne `documents.title` figé à la création (« … V1 »). H1 du markdown rev2 = V2. Compteur bibliothèque = 1 identité. Nommage stable Morris non appliqué à la création.

### 3.5 DOC-E — PROBABLE libellé

Après consommation, l'UI parle de propositions expirées (`NoraConversation.tsx`). Le serveur refuse un second write du même candidat (identité / sha). Sémantique non-rejeu correcte ; libellé « expirée » ≠ « conservée ». Pas de second enregistrement Equipéo (seulement 2 révisions).

### 3.6 DOC-F — PROBABLE rendu ; comparaison persistée

Aperçus historiques hors `SafeMarkdown` selon composants d'historique. La comparaison T09 bis **est** persistée (voir §5) : « Comparaison documentaire — +17/−14 — Equipéo — Cadrage fonctionnel V1 ». La paire de révisions n'est pas dans le libellé (titre document seulement).

## 4. Famille B — MP-15 allocation — CONFIRMED config

Résolution (`provisional-cognitive-policy.ts`) : `SFIA_COG_PROVISIONAL_POLICY` vide ⇒ `legacy_sol`, `provisionalActive=false`, code `COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL`. RECETTE n'active v0.2 que si policy `v0.2` **et** `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2` (ou `qualified:v0.2`). `qualified` nu est refusé.

Effectif lu (valeurs enum seulement) :

- DEV `web/.env.local` : `STUDIO_LANE=DEV`, `SFIA_COG_PROVISIONAL_POLICY=v0.2`, admit RECETTE absent (inutile en DEV).
- RECETTE config : policy **ABSENT**, admit **ABSENT**, `SFIA_COG_PROFILE_TYPE=OPERATIONAL_PROVISIONAL`.
- Start script : n'écrit pas la policy ; il surcharge `SFIA_SOURCE_SHA` vers `0ae9e1f7`. Le fichier `.env` contient encore `SFIA_SOURCE_SHA=e8e6e069…` mais l'export du script prime. Effet : provenance/logs qui liraient le fichier seul seraient stale ; le process RECETTE lancé par le script annonce le SHA du build. Pas d'effet sur l'admission modèle.

`admitModelEffort` operational : sans provisional, seuls Sol low|medium|high passent (`resource-admission.ts`). Terra/Luna refusés puis fallback défaut Sol. Ce n'est pas une preuve que l'allocation DEV est pertinente, seulement qu'elle **peut** choisir Terra/Luna.

Non-détection E5 : tests unitaires `ml5-cognitive-resources.test.ts` « absent or unknown policy falls back to legacy_sol » et « v0.2 on RECETTE with … qualified-v0.2 admits couples » **décrivent** le gate. Le cutover a documenté « ne pas activer C provisoire sans admit » et n'a pas posé l'admit. Smoke non émissif n'a pas observé le modèle. Angle mort = **promotion de configuration**, pas absence de test.

Activation future (hors mandat) : écrire les deux variables, redémarrer RECETTE, vérifier `modelApplied` ≠ copie silencieuse, rollback = retirer les variables (retour legacy_sol) sans migration.

## 5. Activité Nora — chaîne reconstituée

Persistance : `appendActivityEvent` → table `nora_activity_events` (phase, nature, status, summary ≤500, detailJson). Lecture : `listActivityEvents` par `turnCommandId`.

Equipéo (conversation du projet), agrégat :

| phase | nature | status | n |
|---|---|---|---|
| nora.objective | ANNOUNCED | RUNNING | 10 |
| nora.objective | COMPLETED | COMPLETED | 10 |
| nora.source.d4 | OBSERVED | RUNNING | 13 |
| nora.source.d4 | OBSERVED | COMPLETED | 4 |

Extraits récents (non sensibles) : « Orientation du travail à partir de la demande du Pilote » ; « Orientation du travail terminée » ; « Document identifié — Habilitations des agents » ; « Document consulté — … V1 » ; « Comparaison documentaire — +17/−14 » et une autre « +22/−17 ».

Donc la comparaison **n'est pas seulement éphémère** : elle est un événement `nora.source.d4` OBSERVED COMPLETED. Le LIVE peut la montrer via `projectMissionHeadline` (préfère une comparaison). À l'arrêt (`resolveActivityDisplayHeadline`, `active=false`), un titre « Orientation du travail » est **écarté** s'il n'y a pas un titre de groupe plus riche ; sinon le headline idle devient null et la carte retombe sur le groupe générique. Les événements spécialisés restent en base mais le **résumé terminal affiché** privilégie l'objectif annoncé, volontairement générique (`activity-labels.ts` collapse IT-01).

Distinction des sources dans les libellés persistés : « identifié » (RUNNING) vs « consulté » (COMPLETED) vs « comparaison » (delta de lignes). Aucun libellé Equipéo ne prouve une lecture intégrale. « Document consulté » ≠ couverture COMPLETE du fichier.

Répétitions dans la réponse : `knowledge-effect-restitution.ts` L47 produit « La {label} a bien été enregistrée dans le Journal. » pour chaque effet connaissance. `service.ts` L5009–5031 concatène pilotage, connaissance et publication **dans assistantBody**. Trois sujets/effets ⇒ trois phrases. Ce n'est pas le modèle qui répète librement : c'est la composition déterministe post-réponse. Séparation voulue par Morris (activité vs échange) n'est pas implémentée : les lignes sont du texte conversationnel, pas des événements d'activité.

## 6. FinOps — réconciliation

Travaux Equipéo :

| id | status | created | note |
|---|---|---|---|
| cgw_820c2df9 | COMPLETE | 05:49Z | |
| cgw_0cbf64ee | OPEN | 05:54Z updated 06:16Z | objective = exploration responsabilités/habilitation **sans arrêter de règle** ; `interrupt_cause=AWAIT_PILOT` |
| cgw_1b6c989b | COMPLETE | 06:21Z | |
| cgw_469ef400 | COMPLETE | 06:27Z | proche création document 06:27 |
| cgw_c5306beb | COMPLETE | 06:57Z | |
| cgw_0c1e9f59 | COMPLETE | 07:10Z | |

Le checkpoint UI « 0 abouti / 1 en cours » et l'état PG « 5 COMPLETE + 1 OPEN » ne se contredisent pas une fois le **lien d'observation** lu.

`loadFinOpsSummary` ne compte comme aboutis que les travaux dont l'id apparaît sur des `provider_usage_observations` **et** dont le statut est COMPLETE (`usage-read-service.ts` L371–389). Libellé « Aucun travail abouti » si ce compte est 0 (`L405–406`). Statut OPEN → libellé « En cours » (`usage-projection.ts` `mapCognitiveWorkStatusLabel`).

Jointure Equipéo : **44 observations sans cognitive_work_id**, **18 rattachées au seul travail OPEN**, **0 rattachées à un travail COMPLETE**. Donc l'UI peut afficher 0 abouti alors que cinq travaux sont COMPLETE : leurs générations ne portent pas l'id dans les observations filtrées. Cause de corrélation **CONFIRMED**. Le travail OPEN est un AWAIT_PILOT réel (T06 « on ne décide pas »), pas un oubli de finalisation de la réponse métier T09. La réponse terminée n'implique pas la clôture de ce travail : le contrat `workDisposition=AWAIT_PILOT` le laisse ouvert (`nora-adapter` consigne).

Couverture 100 % = requêtes recensées (`computeMeasureCoveragePercent`), pas coûts. Admin OFF. Pas de nouvelle dépense.

## 7. Continuité cognitive

### 7.1 Sas → projet

`createProjectCommand` (`create-project.ts`) : crée le projet, lie la préparation, passe la conversation et les documents déjà liés, **ne copie pas** sujets/acquis/points ouverts. La continuité structurée dépend ensuite de `initialQualificationExpected` et de `processInitialQualification` (trajectoire), puis des tours Nora qui émettent `d4.record_knowledge`.

Consigne modèle (`nora-adapter.ts` ~L1177–1189) : sélectivité explicite — message banal ⇒ 0 intent ; pas une fiche par phrase ; OPEN_POINT seulement si question durable. Donc un Journal initial pauvre (PV T03 : 1 sujet, 0 point) est compatible avec : (1) aucun record_knowledge pendant le sas avant création ; (2) qualification initiale = trajectoire, pas capitalisation du fil ; (3) sélectivité qui omet les questions tant qu'un tour projet ne les requalifie pas. Premier sujet durable observé plus tard (« Parcours d'une inspection »), pas au sas.

Ce n'est pas un second moteur manquant : le propriétaire D4 existe. L'insuffisance est le **déclenchement** à la création (pas d'intent de capitalisation du fil sas) — approfondissement Capacité 2 **et** anomalie de couverture fonctionnelle déjà spécifiée par l'arbitrage Morris (constitution initiale), pas un bug de projection seule.

PG final : 2 sujets (enfant `Habilitations` `parent_subject_id` = parcours), 6 acquis, 2 points ouverts, 2 décisions (trajectoire + ouverture de cycle). Fil conversation = 21 messages. Les positifs T05–T07 sont réels.

### 7.2 Points ouverts — première rupture

Chemin : le modèle doit émettre un intent `d4.record_knowledge` `OPEN_POINT` ; D4 `openPoint()` persiste ; la projection liste `status=OPEN`. Il n'y a pas de quota code qui plafonne à 1. La rupture est **en amont de D4** : les questions rédigées dans la réponse ou dans V1/V2 ne sont pas des intents. T04 a créé le point « critères de validation » ; T09 bis le point « information des agents » (`opn_02efcb80`, statement sur le canal après changement de planning). Les autres questions de cadrage restent du texte. Résultat partiel T09 bis : un OPEN_POINT a été écrit pendant que le REVISE documentaire était refusé — effets indépendants (connaissance vs document). Cause : qualification sélective + absence de matérialisation systématique, **PROBABLE** comme politique de prompt, **CONFIRMED** comme absence d'extracteur qui transformerait les questions du document en points.

### 7.3 Badge « Sujet autonome » — CONFIRMED

`ProjectJournal.tsx` L540 : `isParentSelected = (tree.get(id) ?? []).length > 0` — vrai seulement si le sujet **a des enfants**. L'enfant avec `parent_subject_id` renseigné mais sans enfant propre reçoit le libellé « Sujet autonome » (L736). Le fil d'Ariane existe (`SubjectBreadcrumb`) mais le badge contredit la hiérarchie. Donnée PG correcte. Défaut de projection, pas de modèle.

### 7.4 Provenance / finalité

PV : acte Pilote étiqueté Contribution Nora ; finalité = ordre d'ouverture. Non re-démontré ligne à ligne dans ce tour au-delà du PV et de la composition d'effets qui injecte des confirmations Nora. Classement **PROBABLE** projection/restitution. Arbitrage gouvernance T07 : **NO DEFECT** runtime (2 HumanDecisions seulement). Réconciliation §7 du contrat continuité = D2 ultérieure, hors mandat.

### 7.5 Contrat de sortie continuité

| Phénomène | Classe |
|---|---|
| Fil sas conservé (conversation.projectId) | comportement préservé |
| Pas de capitalisation du sas à la création | insuffisance de déclenchement / Capacité 2 |
| Sujets parent-enfant T06 | préservé (PG parent_subject_id) |
| Peu de points ouverts vs questions | qualification cognitive (intents), pas filtre D4 |
| Badge autonome sur enfant | défaut de projection UI |
| 2 HumanDecisions seulement | conforme arbitrage Morris |

## 8. Dictée MP-06 / MP-07

Code : ouverture échoue → `PROVIDER_ERROR` si message `PROVIDER_ERROR` ou timeout `SESSION_OPEN_TIMEOUT` 10s (`composer-dictation-session.ts` L82, L409–438). Événement fournisseur `error` → même code (L543–570), session failed, transport fermé, FinOps `failed`. Brouillon : les tests T06 annulent et restaurent la baseline ; le PV ne montre pas de perte de brouillon (poursuite clavier).

Config RECETTE : dictation=1, transport=live. Clé présente (non imprimée). Pas de fixture substituée (unset dans le start script).

Traces serveur : **aucune** ligne dictée/PROVIDER_ERROR dans les logs RECETTE cherchés. L'erreur affichée au sas n'a pas été journalisée côté process. Cause fournisseur (auth, modèle Realtime, URL) : **NOT OBSERVED**.

Éliminé : bouton absent ; flag dictée off ; transport forcé fixture ; lien causal démontré avec legacy_sol (catalogue Responses ≠ Realtime).

Tests : `ml3-composer-dictation-integrated.pg.test.ts` « T08 — provider error fails session and blocks finalize » injecte une erreur de fixture. « T11 — finalize with PCM records FinOps » utilise un transport de test. Niveau DET/PG. Aucun test n'ouvre une socket Realtime RECETTE.

Test LIVE futur (non exécuté) : 1 session sas, plafond 1 essai / 60s, capturer code UI + event `error` ou `session.updated`, vérifier cleanup et brouillon, STOP si 401/403 ou silence > timeout. GO Morris distinct.

MP-07 : onde non qualifiable sans capture. **NOT RUN**.

## 9. UX (sans F2)

| Écart PV | Responsabilité | Class |
|---|---|---|
| Animation préparation statique | non observée dynamiquement ici | HYPOTHESIS — capture fixe insuffisante |
| Points à clarifier en liens | présentation panneau | PROBABLE fidélité, Figma non rouvert |
| Icône récent peu documentaire | `project-recent-items` / chrome | PROBABLE |
| Identifiants trj_ dans titres | projection décisions | PROBABLE (PV T05) |
| Courant/historique | DOC-B | CONFIRMED |
| Proposition expirée | DOC-E | PROBABLE |
| Finalité = ordre d'ouverture | projection cycle | PROBABLE |
| Markdown brut historique | rendu non SafeMarkdown | PROBABLE |
| Listes concaténées | restitution texte | PROBABLE |
| Compositeur croissance | non ré-exercé | NOT RUN au-delà du PV PARTIAL |
| MP-13 compteurs | `setProjectActivity` seulement L2169 ; refresh post-tour L3115 met à jour documents/knowledge **sans** activité | CONFIRMED |

Compteur documents : `countProjectLibraryDocuments` déduplique par id. 1 document / 2 révisions reste 1. Le bug T07 est la fraîcheur du state `projectActivity`, pas le comptage des révisions. Autres surfaces : Journal lit `knowledge` rafraîchi ; la carte Projet lit `projectActivity` stale. Navigation reload corrige. Pas de cache HTTP démontré.

## 10. Angles morts E1–E5 (assertions)

| Cas | Test exact | Ce qu'il affirme | Pourquoi le défaut passe |
|---|---|---|---|
| V1→V2→V3 + historique | `documents-historical-revise.pg.test.ts` « V1→V2→V3 then historical V2→V4 with confirmation » | API/PG avec confirmation **explicite** quand la base n'est pas la head | Ne passe pas par le focus React post-conserve qui réinjecte l'ancienne sourceRevisionId |
| Conflit | même fichier « concurrent head … CONFLICT » | D4 refuse si head a bougé | Ne couvre pas le faux historique dû au client |
| BASE_STALE | « legacy baseRevisionId-only still requires head match » | garde serveur | La garde est correcte ; le client l'enclenche à tort |
| Pending conserve | helpers `document-conserve.ts` attendent `PROPOSAL_PENDING_CONSERVATION` | raison serveur | Pas d'assertion DOM markdown === candidat après clic révision |
| Policy RECETTE | `ml5-cognitive-resources.test.ts` fallback legacy_sol et admit qualified-v0.2 | fonctions pures sur env injecté | Le process RECETTE réel n'a pas les variables ; le test ne lit pas `~/.config` |
| Dictée erreur | PG T08 provider error | fixture | Pas de handshake LIVE |
| Compteurs | helpers `countProjectLibraryDocuments` | dédup id | Ne montent pas le state React après un tour |
| Activité | labels unitaires (collapse orientation) | headline stable | Le collapse **produit** l'historique générique ; les tests le figent comme voulu IT-01 |
| Capitalisation sas | pas de test « create project copie les questions du sas » | — | Création ne capitalise pas ; aucun oracle UI T03 |

## 11. Matrice — 23 fiches × 18 dimensions

Identifiant = titre. Les 17 autres dimensions suivent.

### MP-01
- Tour: R00/T01. Attendu: micro accessible. Observé: visible. Propriétaire: compositeur. Chemin: ComposerDictationControl. Cause: pas de défaut d'accès. Preuves: PV. Class: NO DEFECT accès. Confiance: haute. Impact: nul sur le bouton. Blast: UI. Tests: nora-shared-composer exposition. Angle mort: pas de session réelle. Correctif: aucun. Risques: néant. Sortie: couplée MP-06. Décision: ne pas clôturer la MP audio.

### MP-02
- Tour: T01–T02. Attendu: compositeur partagé, croissance, brouillon. Observé: présent ; croissance non exhaustive. Propriétaire: NoraSharedComposer. Chemin: drafts isolés prep/projet. Cause: parcours incomplet. Preuves: PV PARTIAL. Class: NOT RUN partiel. Confiance: moyenne. Impact: inconnu. Blast: compositeur. Tests: isolation des clés de draft. Angle mort: pas de long brouillon RECETTE. Correctif: BROWSER plus tard. Risques: faible. Sortie: scénario T02 complet. Décision: aucune.

### MP-03
- Tour: T02–T09 bis. Attendu: questions significatives matérialisées sans quota. Observé: 0 au sas, 1 puis 2 (`opn_9dc9f8e6`, `opn_02efcb80`). Propriétaire: qualification Nora + D4 openPoint. Chemin: intent record_knowledge puis `knowledge/service.ts` openPoint. Cause: questions texte ≠ intents ; pas de plafond code à 1. Preuves: PG 2 OPEN ; consignes nora-adapter sélectivité. Class: PROBABLE qualification / CONFIRMED absence d'extracteur document→OP. Confiance: haute sur le lieu de rupture. Impact: Journal incomplet. Blast: D4 knowledge. Tests: pas d'oracle « questions V1 devenues OP ». Angle mort: tests d'un intent fabriqué, pas du fil sas. Correctif: déclenchement borné à la création + tours riches, pas quota. Risques: sur-capitalisation. Sortie: sas synthétique → N OP justifiés, pas tous les « ? ». Décision: périmètre Capacité 2.

### MP-04
- Tour: T03. Attendu: animation réelle puis arrêt. Observé: spinner statique selon Pilote. Propriétaire: UI qualification. Chemin: initial qualification phases. Cause: non mesurée (pas de vidéo dans ce cycle). Preuves: PV seulement. Class: HYPOTHESIS. Confiance: faible. Impact: perception. Blast: modal création. Tests: non déterminants sur le mouvement. Angle mort: capture fixe. Correctif: à confirmer par enregistrement reduced-motion. Risques: décor vs progression. Sortie: séquence DOM. Décision: ne pas corriger sur capture seule.

### MP-05
- Tour: multi. Attendu: Markdown lisible, listes, confort. Observé: document principal lisible ; historique brut ; listes concatenées. Propriétaire: rendu. Chemin: SafeMarkdown vs texte brut historique. Cause: composants d'aperçu. Preuves: PV. Class: PROBABLE. Confiance: moyenne. Impact: lisibilité. Blast: historique. Tests: non appariés Figma. Angle mort: pas de DOM historique. Correctif: même renderer que la visionneuse. Risques: faible. Sortie: BROWSER apparié. Décision: pas de F2.

### MP-06
- Tour: T01. Attendu: dictée FR, erreur propre, brouillon gardé. Observé: PROVIDER_ERROR immédiat, clavier. Propriétaire: session dictée. Chemin: open transport live, timeout 10s ou event error. Cause LIVE: NOT OBSERVED. Preuves: code L409–570 ; logs RECETTE sans PROVIDER_ERROR ; config live on. Class: NOT OBSERVED. Confiance: haute sur l'élimination config off. Impact: audio inutilisable. Blast: Realtime. Tests: PG T08 fixture. Angle mort: pas de socket réelle. Correctif: après 1 essai GO. Risques: coût/auth. Sortie: event error corrélé. Décision: GO LIVE distinct.

### MP-07
- Tour: T01. Attendu: onde après signal. Observé: non jugeable. Propriétaire: UI onde. Chemin: dépend session open. Cause: bloqué par MP-06. Preuves: PV. Class: NOT RUN. Confiance: haute. Impact: idem. Blast: idem. Tests: aucun signal réel. Angle mort: total. Correctif: couplé. Risques: idem. Sortie: silence/parole. Décision: avec MP-06.

### MP-08
- Tour: T07–T09 bis. Attendu: récents, versions, visionneuse, pas de faux historique. Observé: accès utile ; états DOC-A/B/C. Propriétaire: D4 + page focus. Chemin: voir §3. Cause: focus/versionSource. Preuves: code + 2 révisions PG. Class: CONFIRMED sous-parcours docs. Confiance: haute. Impact: révision bloquée. Blast: viewer Travail. Tests: PG historique avec confirmation explicite. Angle mort: focus React. Correctif: lot documentaire. Risques: affaiblir hauth. Sortie: V2→V3 sans hauth si head. Décision: GO correctif.

### MP-09
- Tour: T05. Attendu: multi-intentions gouvernées. Observé: trajectoire + cycle + sujet, un cycle actif. Propriétaire: D3/D5/D6. Chemin: intents distincts. Cause: nominal conforme. Preuves: PV + 2 human_decisions PG. Class: NO DEFECT nominal. Confiance: haute. Impact: positif. Blast: —. Tests: E2 conduite. Angle mort: cas négatifs non rejoués. Correctif: aucun immédiat. Risques: régression si on retouche D3. Sortie: conserver. Décision: ne pas rouvrir.

### MP-10
- Tour: T03–T09 bis. Attendu: hiérarchie, acquis, réutilisation. Observé: parent/enfant, 6 acquis, V1/V2 ; init sas pauvre ; badge faux. Propriétaire: D4 subjects. Chemin: record_knowledge + parentSubjectId. Cause: mix déclenchement + badge. Preuves: PG parent_subject_id. Class: PARTIAL. Confiance: haute. Impact: mémoire incomplète au départ. Blast: Journal. Tests: pas de bootstrap sas. Angle mort: voir MP-03. Correctif: lots continuité + badge. Risques: doublons de sujets. Sortie: création idempotente. Décision: Capacité 2.

### MP-11
- Tour: T04–T09 bis. Attendu: activité vraie, historique conservé, réponse métier sans acks répétés. Observé: LIVE spécialisé ; terminal générique ; 3 confirmations. Propriétaire: OBS + composition. Chemin: nora_activity_events + compose* dans assistantBody. Cause: collapse headline idle + concat effets. Preuves: 10+13 events PG ; restitution L47. Class: CONFIRMED. Confiance: haute. Impact: bruit conversationnel. Blast: toutes réponses à effets. Tests: IT-01 fige le collapse. Angle mort: test = comportement contesté. Correctif: acks vers activité ; headline idle garde la comparaison. Risques: perdre un échec utile en conversation. Sortie: T06 sans triple phrase, comparaison encore visible après fin. Décision: quelles alertes restent dans le fil.

### MP-12
- Tour: T03–T05. Attendu: finalité métier. Observé: ordre d'ouverture / id technique. Propriétaire: projection trajectoire. Chemin: décisions OPEN_CYCLE / RETAIN_TRAJECTORY. Cause: libellé = statement technique. Preuves: PG statements. Class: PROBABLE. Confiance: moyenne. Impact: lisibilité. Blast: Journal décisions. Tests: non UX. Angle mort: pas d'oracle de finalité. Correctif: titre métier distinct de l'id. Risques: masquer l'acte. Sortie: libellé sans trj_. Décision: forme du libellé.

### MP-13
- Tour: T07/T09. Attendu: compteurs à jour, 1 doc malgré versions. Observé: 2/2/0 puis 3/2/1 après reload ; 1 doc après V2. Propriétaire: project activity client. Chemin: setProjectActivity unique au load L2169. Cause: pas de refresh de l'agrégat. Preuves: code ; count déduplique. Class: CONFIRMED. Confiance: haute. Impact: méfiance compteurs. Blast: carte Projet. Tests: helper de comptage seulement. Angle mort: pas de cycle React. Correctif: recalcul après fetch projet post-tour. Risques: faible. Sortie: T07 sans reload. Décision: aucune.

### MP-14
- Tour: T08. Attendu: investigation comparable. Observé: non lancée. Propriétaire: —. Chemin: —. Cause: report Morris. Preuves: PV DEFERRED. Class: NOT RUN. Confiance: haute. Impact: pas de comparatif. Blast: —. Tests: —. Angle mort: —. Correctif: après allocation. Risques: coût. Sortie: mission bornée. Décision: déjà reportée.

### MP-15
- Tour: campagne. Attendu: allocation selon complexité, pas Sol forcé. Observé: Sol seul RECETTE ; Terra/Luna DEV. Propriétaire: policy env. Chemin: resolveProvisionalPolicy → legacy_sol. Cause: policy et admit absents en RECETTE. Preuves: fichiers env ; code L159. Class: CONFIRMED. Confiance: haute. Impact: coût/modèle. Blast: toutes générations RECETTE. Tests: unit fallback. Angle mort: cutover sans assert env process. Correctif: config qualified-v0.2 sous GO. Risques: qualité non recalibrée. Sortie: modelApplied Terra ou Luna sur un tour simple, Sol sur un tour lourd, sans forcer. Décision: activer ou non.

### MP-16
- Tour: T07. Attendu: travaux corrélés, finalisés, coûts honnêtes. Observé: 0 abouti UI ; 1 en cours ; PG 5 COMPLETE + 1 OPEN. Propriétaire: FinOps read + cognitive work. Chemin: observations.cognitive_work_id. Cause: 44 obs sans work, 18 sur OPEN seul, 0 sur COMPLETE ; OPEN = AWAIT_PILOT T06. Preuves: jointure SQL. Class: CONFIRMED corrélation. Confiance: haute. Impact: pilotage coût faux. Blast: page consommation. Tests: non sur ce rattachement Equipéo. Angle mort: tests d'agrégat avec work id déjà posé. Correctif: écrire l'id sur les observations des travaux COMPLETE ; ne pas clôturer AWAIT_PILOT par réflexe. Risques: double comptage. Sortie: aboutis = nombre de COMPLETE liés. Décision: Admin reste OFF.

### MP-17
- Tour: R00. Attendu: paramètres, rail, navigation. Observé: accès nominal partiel. Propriétaire: shell. Chemin: routes settings. Cause: parcours non exhaustif. Preuves: PV PASS partiel. Class: NOT RUN exhaustif. Confiance: moyenne. Impact: inconnu. Blast: shell. Tests: E3 rail partiel. Angle mort: viewport 1280. Correctif: campagne UI plus tard. Risques: faible. Sortie: T11. Décision: aucune.

### DOC-A
- Tour: T09. Attendu: brouillon inspectable avant conserve. Observé: V1 à l'écran, V2 après clic. Propriétaire: viewer Travail. Chemin: pending markdown puis revisionId = base. Cause: identité viewer = source ; overwrite possible. Preuves: L2967–3027 ; rev2 PG différente. Class: PROBABLE. Confiance: moyenne-haute. Impact: revue impossible. Blast: visionneuse. Tests: raison serveur seulement. Angle mort: pas de DOM. Correctif: viewer candidat distinct, revisionId proposition. Risques: conserver le mauvais texte. Sortie: markdown affiché = sha candidat. Décision: aucune.

### DOC-B
- Tour: T07/T09. Attendu: courante ≠ historique. Observé: HISTORIQUE + bandeau sur courante. Propriétaire: DocumentSurfaces + TravailViewer. Chemin: revisionCurrencyLabel ; versionSource exact. Cause: exact traité comme historique. Preuves: L45–50 DocumentSurfaces ; L201 TravailViewer. Class: CONFIRMED. Confiance: haute. Impact: mauvaise base ensuite. Blast: labels. Tests: aucun sur head === exact. Angle mort: total UI. Correctif: exact n'est historique que si id ≠ head. Risques: masquer un vrai historique. Sortie: V2 courante sans bandeau. Décision: aucune.

### DOC-C
- Tour: T09 bis. Attendu: head naturelle ; confirmation seulement si base vraiment ancienne. Observé: aucun enregistrement, confirmation historique, pas de V3. Propriétaire: focus client + D4 garde. Chemin: focus non rebasé → resolveReviseTarget → sourceIsHistorical. Cause: rebase manquant. Preuves: L3029 ; document-act L454–470 ; service L3819 ; PG 2 revs seulement. Class: CONFIRMED code / PROBABLE lien au payload du tour. Confiance: haute / moyenne. Impact: révision suivante bloquée. Blast: tout REVISE après conserve dans la même session. Tests: V1→V3 via API avec ids explicites. Angle mort: pas le state React. Correctif: après AVAILABLE, source=observed=nouvelle head. Risques: sauter une vraie base historique choisie. Sortie: V2→V3 sans hauth. Décision: ne pas lever la garde serveur.

### DOC-D
- Tour: T07/T09. Attendu: titre métier stable, versions à part. Observé: title SQL « … V1 », H1 V2. Propriétaire: create document. Chemin: documents.title. Cause: titre figé avec suffixe. Preuves: SELECT documents. Class: CONFIRMED. Confiance: haute. Impact: confusion. Blast: bibliothèque. Tests: non sur le nommage Morris. Angle mort: —. Correctif: titre sans Vx ; Vx = revision_number. Risques: rename rétroactif hors scope. Sortie: nouveau doc. Décision: pas de rename Equipéo automatique.

### DOC-E
- Tour: T09 après conserve. Attendu: état conservée, non rejouable. Observé: libellé expirée. Propriétaire: NoraConversation. Chemin: liste propositions consommées. Cause: vocabulaire. Preuves: composant ; une seule rev2. Class: PROBABLE. Confiance: moyenne. Impact: doute sur la conservation. Blast: fil. Tests: non UI. Angle mort: —. Correctif: libellé conservée. Risques: faible. Sortie: copie d'écran. Décision: libellé.

### DOC-F
- Tour: T09 bis. Attendu: historique lisible, paire explicite. Observé: Markdown brut ; +17/−14 sans ids de révisions. Propriétaire: rendu + libellé activité. Chemin: summary nora.source.d4. Cause: summary = titre document + delta, pas base/head ids. Preuves: ligne PG comparaison. Class: PROBABLE. Confiance: haute sur le libellé, moyenne sur le Markdown. Impact: preuve de comparaison incomplète. Blast: activité. Tests: pas d'assertion de paire. Angle mort: —. Correctif: inclure n° de révisions dans le summary. Risques: faible. Sortie: paire rev1/rev2 lisible. Décision: aucune.

## 12. Lots proposés (pas ceux du premier rapport tels quels)

Ne pas fusionner parce que `page.tsx` est commun.

1. **Révision reproductible** — DOC-B, DOC-C, DOC-A. Résultat : voir le candidat, étiquette courante juste, enchaîner une révision sans hauth si la head est la base. IN : focus post-AVAILABLE, versionSource, viewer candidat. OUT : titre documents, FinOps, dictée. Risque : garde historique. Preuve : BROWSER V1 conserve V2 puis V3. Premier lot recommandé.

2. **Fraîcheur carte Projet** — MP-13 seul. Recalcul `projectActivity` après effets. Petit, indépendant du focus.

3. **Corrélation FinOps** — MP-16. Rattacher les observations aux travaux COMPLETE ; laisser AWAIT_PILOT ouvert. OUT : changement de modèle.

4. **Restitution activité** — MP-11. Sortir les acks Journal de assistantBody ; conserver comparaison dans l'historique idle. Décision Morris sur ce qui reste dans le fil (échecs).

5. **Admission RECETTE** — MP-15. Config seulement, GO explicite `qualified-v0.2`, rollback par retrait. Pas une preuve d'optimalité DEV.

6. **Continuité initiale et points ouverts** — MP-03/10 partie déclenchement. Capacité 2 bornée : à la création, intents depuis le fil sas déjà qualifié, sans nouveau moteur. Badge enfant (MP projection) peut être un correctif UI séparé d'une ligne dans ProjectJournal — micro-correctif acceptable avec le lot seulement s'il ne dilue pas la capitalisation ; sinon **lot UI badge** distinct (très petit, qualifiable seul).

7. **Dictée** — MP-06/07. Investigation LIVE 1 essai avant tout correctif de code. Tant que NOT OBSERVED, pas de patch spéculatif.

8. **Différé** — MP-04/05/12/14/17, DOC-D rename, DOC-E libellé, DOC-F paire : après 1–4 ou en UX groupée si Morris veut un lot fidélité. DOC-D peut rejoindre le lot 1 seulement si le titre est posé au même endroit que la création V1 ; sinon lot nommage séparé.

## 13. Positifs à préserver

Multi-intentions T05 ; un cycle ; parent/enfant réel en PG ; 6 acquis ; V2 sous la même identité ; garde historique serveur ; fail-closed Option C ; AWAIT_PILOT non transformé en COMPLETE par erreur dans les données (le travail T06 est encore OPEN, correctement).

## 14. Fake / Real

Code et env : réel. PG Equipéo : réel lecture seule. PV et captures fournisseur : réels historiques. Dictée : erreur UI réelle, cause fournisseur non observée. Tests E4/E5 : déterministes/substitués. Aucune émission ce cycle.

## 15. Contrôles

Aucun fichier produit modifié. Aucune config écrite. Aucun redémarrage. Aucun appel OpenAI. Equipéo et MaintiPlan non mutés. Content coverage produit : **N/A**.

Checklist : 17 MP et 6 DOC fiches à 18 dimensions ; continuité, activité, FinOps, dictée, UX, tests nommés ; causes inconnues explicites (MP-06) ; pas de case inventée.

## 16. Décisions Morris

1. GO correctif lot 1 (documentaire) oui/non.
2. Activer `qualified-v0.2` en RECETTE oui/non (lot 5).
3. Quelles confirmations d'effet restent dans la conversation (lot 4).
4. Périmètre Capacité 2 capitalisation sas (lot 6).
5. GO d'un essai dictée (lot 7).
6. Pas d'acceptation Livraison 1 ni clôture de MP par ce dossier.

## 17. Verdict

**READY WITH RESERVES**

Le mandat de reprise est couvert : causes documentaires, allocation, compteurs, activité, FinOps et continuité sont argumentées avec code et PG. Réserves légitimes : payload HTTP exact T09 bis non archivé (cause code quand même démontrée) ; cause LIVE de PROVIDER_ERROR non observable sans essai ; animation et plusieurs écarts UX non mesurés. Ce n'est pas READY FOR IMPLEMENTATION.
