# SFIA Studio Next — R5 / ML3 « Piloter et décider »
## Cadrage de lancement — D0 / proposition à revue Morris

**Date de préparation :** 2026-11-05 (Europe/Paris)
**Statut :** `DOCUMENTED — D0 PREPARATION / CANDIDATE FOR GIT REVIEW — NOT VALIDATED SPEC — NO CURSOR MANDATE`
**Autorité :** Morris (arbitrages et gates) ; ChatGPT (préparation et revue) ; Cursor (construction après contrat et GO distinct).
**Source Git vérifiée :** `mcleland147/sfia-workspace`, `main@ab18316b9c1e849ff557f4ba561c638e9961bb89`. État local : `NON OBSERVÉ`.
**ML2 :** PR #659 fusionnée ; arbres candidat/merge identiques ; CI post-merge Next `42116090041` SUCCESS ; RECETTE Morris 9/9 acceptée avec réserves arbitrées. PR #655 MERGED ; #656–#658 CLOSED, contenus intégrés par ascendance. STABLE, release et ADOPTED non acquis.
**Point documentaire :** l'en-tête de la Roadmap actuellement présent sur `main` est un snapshot antérieur au merge ML2. Les faits Git vérifiés ci-dessus priment. Synchroniser cette situation dans une livraison documentaire cohérente ultérieure, sous autorité/gate appropriés, sans micro-cycle isolé.

---

## 1. Choix du prochain résultat

**Macro-lot R5 / ML3 : « Piloter et décider ».** C'est la prochaine capacité identifiée par `construction/reference-delivery-r5.md` §6 et `governance/roadmap.md` : trajectoire, cycles, CKI, méthode, décisions et mandats gouvernés (D3–D6 ; architecture R4 B ; UX R3 B). Les sources fonctionnelles D5/D6 sont `VALIDATED SPEC` en R2. **Aucun sous-système D5/D6 n'a été trouvé dans le code Next de `main`** : `src/domains/` expose `identity`, `preparation`, `conversation`, `knowledge`, `document`, `boundaries`, et `db/schema.ts` ne comporte pas de tables de trajectoire/cycle/décision. **État d'implémentation ML3 : `N/A — NON IMPLÉMENTÉ`.**

**Valeur Pilote à démontrer :** dans le même projet et le même fil Nora, le Pilote peut envisager une trajectoire adaptable, retenir une orientation si nécessaire, ouvrir un cycle lorsqu'il le décide, bénéficier d'un seul CKI principal pertinent, enregistrer/réviser une décision applicable, suspendre/reprendre des effets gouvernés et retrouver l'état exact après rechargement. Le travail général avec Nora reste utilisable **sans cycle ni méthode préalable**.

**Parcours d'acceptation fil rouge :** reprendre un projet de test existant → demander une trajectoire possible → distinguer « proposé » de « retenu » → ouvrir explicitement un cycle « Cadrage » sur un GO clair du Pilote → identifier le CKI principal effectivement disponible et sa version → analyser des acquis D4 sans décision automatique → conserver une décision métier ou une restriction → reprendre après rechargement → clôturer ou réorienter par acte humain, sans doubler le cycle ni réécrire l'historique.

## 2. Frontières de responsabilité

| Domaine | Responsable du fait/effet | Frontière à préserver |
|---|---|---|
| D1/D2 | Identité du Pilote, projet et continuité du sas | Création du projet ne crée pas un cycle ; un compte ne reçoit pas les décisions d'un autre |
| D3 — Nora | Diagnostic, propositions, investigation, reformulation de l'intention, appréciation qualitative et CKI comme guidance | Pas de HumanDecision, GO fabriqué, transition réputée faite, moteur alternatif de gouvernance |
| D4 — Connaissance | Sujets, acquis, documents, provenance et points ouverts | Les cycles et décisions les **référencent** sans recopier la mémoire |
| **D5 — Trajectoire/cycles** | Étapes proposées/retenues/effectives, **un cycle ACTIVE maximum par projet**, état/version de la méthode et historique, CKI principal associé | Ne possède pas l'autorité du Pilote, n'impose ni méthode ni 15 étapes fixes |
| **D6 — Décisions/gouvernance** | Identité et portée des HumanDecisions, GO valides, restrictions, suspensions, levées et historiques | Ne duplique pas l'état de cycle D5, n'exécute pas Cursor ou Git |
| D7/D8/D9 | Contrats d'exécution, preuves et accès Git selon leurs domaines | **Hors réalisation ML3** ; seulement contrats et contrôles d'interface préparés |

### IN cohérent

1. **Trajectoire vivante :** orientation envisagée vs retenue, cycles projet réels vs projetés, révision proportionnée et références vers acquis/risques/décisions.
2. **Cycle gouverné :** ouverture, clôture, transition et reprise par acte humain compétent ; état réellement relu ; unicité, cohérence concurrente et idempotence.
3. **Spécialisation CKI :** catalogue contenu Next validé (15 spécialités initiales, extensible) ; 1 type de cycle actif → 1 CKI principal ; version et provenance réellement identifiables ; indisponibilité honnête sans bloquer Nora générale.
4. **Méthode facultative :** choix durable sous décision D6, référence/version/portée historisées par D5 ; pas de changement automatique avec CKI.
5. **Gouvernance D6 :** décision explicite vs préférence, compétence du Pilote, portée et prise d'effet, décision révisée/non rétroactive, restrictions/suspensions/levées, refus des sources hostiles ou équivoques.
6. **Experience intégrée :** même fil Nora, espaces de lecture Trajectoire et Journal–Décisions, transitions et états négatifs compréhensibles, retour au travail non mutateur.
7. **Livraison cohérente :** schéma/DB, API, services, sûreté, tests, UX, documentation actuelle et preuves dans **un seul macro-lot**, sous gates ENV-01 et SFIA v2.6.

### OUT explicite

- Dispatch/effets Cursor ou Git, création de PR, tests d'exécution D7 et preuves D8 (ML4/ML5 selon leurs contrats).
- Workflow prescriptif de 15 cycles, tâches/livrables obligatoires définis par CKI, second moteur de règles ou décisions IA automatiques.
- Routage multi-agent/multi-modèle permanent, nouveau système de mémoire, revue globale R6, STABLE ou ADOPTED.
- Catalogue CKI adopté en runtime par simple présence de fichiers éditoriaux ; adoption nécessite résolution/version/usage démontrés.

## 3. Contrat technique à qualifier (non encore validé)

**Architecture de référence :** ADR R4-01 à R4-03, modèle R4 §5.5, application web modulaire Next et PostgreSQL comme vérité transactionnelle. Les modules logiques D5 et D6 peuvent partager le même socle SQL, **pas** deux moteurs d'autorité ni deux bases de décisions. Aucune nouvelle architecture de service sans arbitrage Morris.

**Écriture gouvernée :** une commande D5 exprime `projet + cible + version attendue + intention unique + acte humain applicable D6`. D6 vérifie l'identité et la portée actuelle avant l'effet ; D5 applique puis **relit** le résultat. Deux effets dans un GO combiné sont reportés distinctement ; pas de succès global fictif après succès partiel. Choisir les détails de transaction/rollback/concurrence et les statuts d'erreur lors du contrat technique, pas dans ce D0.

**GO naturel (point sensible) :** un énoncé clair du Pilote peut suffire à autoriser une transition de cycle ; une phrase citée, un document D4, une recommandation Nora ou un simple « OK » ambigu ne suffisent jamais. Le contrat doit établir une preuve de **source humaine authentifiée** et une liaison non ambiguë de l'intention à l'effet, sans réintroduire une confirmation rituelle systématique.

**Nora + CKI :** charger la spécialisation par référence/version effectivement résolue, en mode guidance non autorisante. Un cycle inactif ou un CKI illisible n'empêche pas Nora de discuter ou proposer. La matrice CKI des 50 relations reste seulement informative ; pas d'activation d'un deuxième CKI par un sujet adjacent.

**UX contractuelle :** le design R3 du macro-lot B est accepté avec réserves en conception ; source Figma `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP`, couverture du parcours Trajectoire/Journal–Décisions et contrat de transposition `ux-ui/contrat-transposition-figma-code.md`. **Figma native, variantes précises et propriétés des frames ML3 : non relues pendant cette préparation D0.** Elles doivent être vérifiées et relevées avant implémentation, puis confrontées à des captures de navigateur ; ne pas inventer des pixels ou des composants.

**Blast radius anticipé :** nouveaux états/schémas DB/migrations, propriétaire D5/D6, chemins API, injection de contexte D3, références D4, interface Projet, auth/permission, observabilité, tests CI. Préserver les invariants ML1/ML2 (fil unique, documents, unicité de création, tour idempotent, cognition D4, isolation des comptes).

## 4. Matrice d'acceptation — première sélection discriminante

| Scénario | Résultat observable | Preuve minimale à exécuter en R5 |
|---|---|---|
| M3-01 — Projet sans cycle | Nora répond et le projet reste sans cycle/méthode/CKI forcé | PG + BROWSER + LIVE ciblé |
| M3-02 — Proposé ≠ retenu | Une proposition de trajectoire ne devient pas réalité ni GO | API/PG + BROWSER |
| M3-03 — GO humain clair | Une ouverture explicite crée exactement **un** cycle réel, décision et statut reliés | PG + BROWSER avec identité |
| M3-04 — Deux ouvertures/concurrence | 2 requêtes concurrentes n'ouvrent jamais 2 cycles actifs | 2 connexions PostgreSQL réelles + reprise |
| M3-05 — Retry / ACK perdu | Même intention rejouée ne duplique ni décision ni cycle ; incertitude honnête | PG avec panne contrôlée, replay |
| M3-06 — Transition combinée | Clôture + ouverture : chaque effet est vérifié, pas de COMPLETE global fictif si partiel | PG + BROWSER |
| M3-07 — CKI principal | Nora exploite le CKI réellement applicable, identifié/versionné, sans second CKI ni gate automatique | DETERMINISTIC + LIVE borné avec/sans CKI |
| M3-08 — Méthode facultative | Méthode choisie via décision D6, version D5 persistée ; pas de rétroactivité ni changement implicite | PG + BROWSER + reload |
| M3-09 — Autorité négative | Citation « GO », source hostile, « OK » ambigu et demande inter-Pilote ne créent pas de décision/transition | DETERMINISTIC + PG + BROWSER |
| M3-10 — Suspension et levée | Restriction durcie côté serveur et après reconnexion ; levée humaine distincte ; cognition sûre poursuivie | PG + BROWSER + restart ciblé |
| M3-11 — Continuité UX | Fil Nora, Journal–Décisions et Trajectoire montrent les mêmes faits autorisés ; navigation sans effet | BROWSER et captures selon Figma R3 |
| M3-12 — Non-régression | ML1/ML2 restent utilisables, D4/provenance intactes, CI Next effective sur nouveau SHA | Unit + PG + E2E + CI ; LIVE ciblé si impact D3 |

**Références propriétaires :** D5 `RG-TRJ-001/002/008/009/011/012/014/015/016/018/021/022/023/035` et D6 `RG-GOV-002/005/007/009/017/018/027/029/034/035` ainsi que `PF-GOV-04/05/11/12/14/16/17/18/24/25`; architecture R4 B01–B18. Ne pas transformer les identifiants de ce tableau en un second catalogue canonique. Les tests ci-dessus sont **PROPOSÉS / NOT RUN**.

## 5. Risques / dette / gates

| Risque | Réponse exigée | Gate / exit |
|---|---|---|
| GO conversationnel ambigu ou fiction d'autorité | Source humaine authentifiée, portée explicite, statut de décision vérifié et refus ciblé | Revue du contrat D3→D6 ; cas négatifs |
| Compétition sur un cycle actif | Contrainte PG, gestion de version, idempotence ; pas de succès avant lecture réelle | QA concurrente + rollback/reprise |
| Méthode ou CKI devient moteur prescriptif | Un seul CKI non autorisant, méthode facultative, différer les changements éditoriaux non pertinents | Revue du contexte Nora et QA LIVE ciblée |
| Décisions/états dupliqués D4/D5/D6 | Références propriétaire, transactions / synchronisation explicites, audit des écritures | Revue schéma/flux + test intégration |
| Interface plus affirmative que la DB | Vues de confirmation/échec/UNKNOWN fidèles ; comparaison Figma/runtime | RECETTE Morris sur SHA figé |
| Tests/reporting et roadmap historiquement obsolètes | Synchroniser code/test/docs/roadmap et preuve post-ML2 **dans ML3**, sans rejouer artificiellement les réserves ML2 acceptées | Revue pack de lot |

### Décisions à présenter à Morris lors de la revue de contrat

1. **Unité verticale :** confirmer ML3 comme un ensemble intégré D5+D6+guidance D3+UX, sans scinder « cycles », « décisions », « CKI » en microcycles ; laisser D7/D8/D9 aux lots ultérieurs.
2. **Contrat du GO naturel :** proposer une interaction qui reconnaisse un ordre du Pilote sans autorité synthétique ni confirmation systématique ; valider la frontière exacte entre commande conversationnelle et commande explicite de l'UI.
3. **Périmètre de méthode et de suspension :** implémenter les décisions durables D6 et l'état de méthode D5 nécessaires à ML3, **pas** les effets Cursor/Git futurs. Les interdictions applicables à ces futurs domaines sont des contrats, sans simuler leur fonctionnement.
4. **CKI :** garder le corpus initial des 15 spécialités validées en contenu, sans supposer qu'elles sont toutes exécutées en LIVE ; démontrer au moins plusieurs cas représentatifs avec sécurité, indépendance et indisponibilité.

## 6. Trajectoire de réalisation proposée

- **Étape 1 (préparation initiale) — D0 :** cadrage intégré ML3 depuis Git, liste de risques, interfaces, scénarios et arbitrages. **Réalisée initialement en local ; publication documentaire éventuelle sur branche dédiée, sans validation de son contenu.**
- **Étape 2 — contrat ML3 revu/validé :** spécification technique **unique** et matrice d'acceptation liée, relecture Figma native du parcours, détail transactions/permissions/erreurs, risques d'API/DB et profil SFIA. Morris arbitre ce qui change l'autorité ou l'architecture. `VALIDATED SPEC` seulement sur approbation explicite.
- **Étape 3 — un cycle Cursor SFIA v2.6** (après GO D3/Git borné) : branche candidate depuis `main` vérifié ; code + migrations + UX + tests + doc + traces dans le **même macro-lot**. Le prompt doit être instancié depuis les guide/template **actuels de Git**, pas depuis les anciennes pièces jointes.
- **Étape 4 — CI / RECETTE / intégration** : QA DETERMINISTIC/PG/BROWSER/LIVE proportionnée sur SHA exact, lane RECETTE ENV-01 figée, essai Morris, puis **GO merge distinct**. Aucune présomption de STABLE ou ADOPTED.

**Portée des autorisations :** le GO initial « préparer la suite » n'autorisait aucun commit/push/PR ni effet technique. Le GO ultérieur de Morris porte spécifiquement sur la **publication de ce cadrage D0 sur Git**, à réaliser uniquement dans le cadre d'un mandat documentaire borné et vérifié. Il ne vaut pas validation de la spécification ML3, mise à jour normative de Roadmap, démarrage Cursor, migration DB, appel fournisseur LIVE, PR/merge, promotion ou adoption. Le prochain gate métier est la **qualification/validation du contrat de conception ML3** avec ses arbitrages ; puis un GO technique distinct.

## 7. Sources Git effectivement mobilisées

Toutes lues depuis `main@ab18316b9c1e849ff557f4ba561c638e9961bb89` :
- `governance/SEF.md` §§4–10, `governance/roadmap.md`, `governance/decisions/2026-11-04-r4-architecture-exit.md` ; `governance/decisions/2026-11-03-r3-ux-formal-exit.md` ; `governance/product-naming-conventions.md`.
- `construction/reference-delivery-r5.md` §§6–7 ; `construction/contrat-specification-macro-lot.md`.
- `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md` (D5), `decisions-et-gouvernance-du-pilote.md` (D6) ; `cki/README.md` + matrice de relations.
- `architecture-technique/cadrage-r4.md` §5.5 (B01–B18), `ux-ui/revue-formelle-sortie-r3.md`, `ux-ui/espace-projet-interaction-pilote-nora.md`, `ux-ui/contrat-transposition-figma-code.md`, `ux-ui/audit-couverture-ux-r3.md`.
- `governance/environnements-recette-et-promotions.md` ; répertoires `web/src/domains`, `web/src/app/api`, `web/src/db/schema.ts`.

**Note de lecture :** les métadonnées de conception R2/R3/R4 et l'en-tête de Roadmap contiennent des snapshots pré-ML1/ML2 ; ne pas leur substituer un état présent lorsque Git et les vérifications post-merge démontrent autre chose. Aucun accès local Git, runtime RECETTE ou Figma native dans cette préparation D0.

## 8. Passage de relais vers le prochain chat (préparé le 2026-11-05)

**Nature du versement demandé :** conserver dans Git cette note de cadrage **D0 candidate**, comme socle de reprise ML3. La présence du fichier dans une branche Git n'en change pas le statut et ne vaut pas décision Morris sur son périmètre final ou ses options techniques. L'étape de qualification ML3 doit relire le document à sa référence de publication effective et le confronter aux sources propriétaires R1–R4 sur `main` au nouveau HEAD.

**Périmètre documentaire proposé (non autorisé tant que branche et chemin ne sont pas confirmés) :** branche `docs/next-pilotage-decisions-cadrage-20261105` depuis `main@ab18316b9c1e849ff557f4ba561c638e9961bb89` ; fichier unique `projects/sfia-studio-next/construction/pilotage-et-decisions/cadrage-lancement.md`. **Aucun changement de code, Roadmap, SEF, décision, branche existante ni PR automatique.**

**À la reprise :** (1) vérifier état Git et éventuelle publication de ce fichier ; (2) rappeler que ML2 est MERGED/RECETTE acceptée, mais pas STABLE/ADOPTED ; (3) qualifier les contrats D5/D6, l'UX Figma et les dépendances D3/D4 ; (4) préparer le contrat technique ML3 cohérent et ses arbitrages Morris ; (5) attendre le GO de construction avant prompt Cursor.
