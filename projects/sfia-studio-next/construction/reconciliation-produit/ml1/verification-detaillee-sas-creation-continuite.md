# SFIA Studio Next — ML4B : vérification individualisée D2 — préparation et création du projet

**Type :** diagnostic documentaire non normatif. **Date :** 2026-11-10.
**Base code R5 :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4`. **Branche candidate :** `docs/next-reconciliation-produit-ml1-20261110`.
**État :** `60/60 R2 IDS SOURCE MAPPED / 54 HISTORICAL VALIDATED + 6 CANDIDATE / CODE READ-ONLY / BEHAVIOR PROOF PARTIAL / F2-G5 NOT RUN / CP1 OPEN`.
**Local, DB réelle, navigateur et nouveaux tests :** NON OBSERVÉS ou NOT RUN.

[Diagnostic ML1](diagnostic-acces-preparation-creation.md) · [D1](verification-detaillee-acces-portefeuille.md) · [ML4B](../README.md).

## 1. Contrat R2 et discipline de couverture

**Propriétaire normatif :** [D2 — Création de projet et continuité du sas](../../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md). Les `RG-CRE-001..026` et `PF-CRE-01..26` sont historiquement validés le 02/11/2026 ; `RG-CRE-027/PF-CRE-27` validés le 03/11 (premier document du sas). Les `RG-CRE-028..030/PF-CRE-28..30` restent **CANDIDATE** dans l'addendum observabilité du 05/11, orientation validée mais textes non automatiquement promus.

**Résultat Pilote :** un sas personnel durable, investigation Nora libre, aperçu propositionnel, création exclusivement sur l'acte « Créer le projet », effet confirmé, même fil/documents dans le projet créé, sans cycle, CKI, mandat, dépôt ou Cursor induits.

**Lectures :** `SOURCE MAPPED` = mécanisme identifié ou écart explicitement déclaré, pas `COVERAGE VERIFIED`. `P1–P7` sont des fichiers de tests présents avec des preuves historiques, pas des tests exécutés ici. R2 D3/D4/D5/D6/D9 et E2E R1 conservent leurs propriétaires. Les 54 historiques sont répartis dans les quatre familles R5 : `ML1-SAS-DURABLE`, `ML1-NORA-PREVIEW`, `ML1-CREATE`, `ML1-CONTINUITY`.

## 2. Index des chemins de réalisation examinés

| Réf | Code / responsabilité |
| --- | --- |
| `PS` | [`web/src/domains/preparation/service.ts`](../../../web/src/domains/preparation/service.ts) |
| `DB` | [`web/src/db/schema.ts`](../../../web/src/db/schema.ts) |
| `CC` | [`web/src/domains/preparation/create-project.ts`](../../../web/src/domains/preparation/create-project.ts) |
| `CP` | [`web/src/app/api/preparations/[preparationId]/create-project/route.ts`](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts) |
| `RE` | [`web/src/app/api/preparations/[preparationId]/reconcile/route.ts`](../../../web/src/app/api/preparations/[preparationId]/reconcile/route.ts) |
| `UI` | [`web/src/app/preparations/[preparationId]/page.tsx`](../../../web/src/app/preparations/[preparationId]/page.tsx) |
| `PJ` | [`web/src/app/projects/[projectId]/page.tsx`](../../../web/src/app/projects/[projectId]/page.tsx) |
| `PC` | [`web/src/domains/preparation/project-context.ts`](../../../web/src/domains/preparation/project-context.ts) |
| `NR` | [`web/src/domains/conversation/nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) |
| `CM` | [`web/src/domains/conversation/service.ts`](../../../web/src/domains/conversation/service.ts) |
| `MI` | [`web/src/domains/conversation/intent-conduction.ts`](../../../web/src/domains/conversation/intent-conduction.ts) |
| `DO` | [`web/src/domains/document/service.ts`](../../../web/src/domains/document/service.ts) |
| `KN` | [`web/src/domains/knowledge/service.ts`](../../../web/src/domains/knowledge/service.ts) |
| `PO` | [`web/src/domains/identity/portfolio.ts`](../../../web/src/domains/identity/portfolio.ts) |
| `ER` | [`web/src/lib/http-errors.ts`](../../../web/src/lib/http-errors.ts) |
| `OB` | [`web/src/lib/observability.ts`](../../../web/src/lib/observability.ts) |
| `PA` | [`web/src/app/api/preparations/route.ts`](../../../web/src/app/api/preparations/route.ts) |
| `PE` | [`web/src/app/api/preparations/[preparationId]/route.ts`](../../../web/src/app/api/preparations/[preparationId]/route.ts) |

## 3. Tests identifiés, preuve historique seulement

| Réf | Test au dépôt |
| --- | --- |
| `P1` | [`web/tests/integration/create-project.pg.test.ts`](../../../web/tests/integration/create-project.pg.test.ts) |
| `P2` | [`web/tests/e2e/ml1-smoke.spec.ts`](../../../web/tests/e2e/ml1-smoke.spec.ts) |
| `P3` | [`web/tests/e2e/g4-chat-first-sas.spec.ts`](../../../web/tests/e2e/g4-chat-first-sas.spec.ts) |
| `P4` | [`web/tests/e2e/g4-b1-b4-correctifs.spec.ts`](../../../web/tests/e2e/g4-b1-b4-correctifs.spec.ts) |
| `P5` | [`web/tests/integration/intent-continuity-global.pg.test.ts`](../../../web/tests/integration/intent-continuity-global.pg.test.ts) |
| `P6` | [`web/tests/unit/intent-conduction.test.ts`](../../../web/tests/unit/intent-conduction.test.ts) |
| `P7` | [`web/tests/unit/non-effects.test.ts`](../../../web/tests/unit/non-effects.test.ts) |

**Historique à préserver :** [matrice ML1 §7 et §8](../../ml1-entree-et-continuite/matrice-tracabilite.md). A01/A03/A04/A06/A07/A08/A09/A10/A12/A14 ont des PASS bornés ; A02 est LIVE borné ; A05/A13/A15/A16 demeurent PARTIAL/NOT RUN, A11 hors ML1. Les tests de continuation multi-domaines PG SCRIPTED ne prouvent pas Nora LIVE ni la reprise browser après perte ACK.

## 4. Inventaire individuel — 60 références

### 4.1 RG validées historiquement — 27

| Référence | Capacité de premier rattachement | Règle R2 | Code | Tests proches | Constat et limite |
| --- | --- | --- | --- | --- | --- |
| `RG-CRE-001` | `ML1-SAS-DURABLE` | Sas accessible sans projet durable | `PS,DB,PA,UI` | P1,P2 | Préparation OPEN distincte du projet ; insertion préparation puis conversation non atomique (RISQUE 04) |
| `RG-CRE-002` | `ML1-NORA-PREVIEW` | Conversation libre et utile | `NR,CM,UI` | P2,P3 | Nora conversationnelle présente ; utilité LIVE ponctuelle historique, dialogue qualitatif non couvert |
| `RG-CRE-003` | `ML1-NORA-PREVIEW` | Aperçu évolutif et non autorisant | `PS,UI,KN` | P3 | Nom et résumé stockés ; provenance, réserves et options de l'aperçu à confronter au contexte réel |
| `RG-CRE-004` | `ML1-SAS-DURABLE` | Préparation suffisante, sans checklist | `PS,UI,NR` | P3 | Création sans trajectoire techniquement autorisée ; seuil de clarification pertinent non prouvé LIVE |
| `RG-CRE-005` | `ML1-NORA-PREVIEW` | Trajectoire et premier cycle seulement proposés | `NR,MI` | P5,P6 | Trajectoire proposée n'est pas automatiquement un cycle ; preuve négative après ML3 limitée |
| `RG-CRE-006` | `ML1-SAS-DURABLE` | Pas d’emplacement Git à l’inscription | `CC,PS,NR` | P1,P7 | Commande D2 sans dépôt obligatoire ; consultation Git pré-projet relève aussi D9 |
| `RG-CRE-007` | `ML1-SAS-DURABLE` | Clarification ciblée avant décision | `NR,UI` | P3 | Dialogue chat-first ; critères de questions ciblées non prouvés par un test FAKE |
| `RG-CRE-008` | `ML1-CREATE` | Acte dédié Créer le projet | `UI,CP,CC,MI` | P1,P2,P3 | Bouton et POST explicites ; mission liée validée serveur avant effet ; E2E d'autorité à qualifier |
| `RG-CRE-009` | `ML1-CREATE` | Identité et titularité vérifiées | `CP,CC,DB` | P1,P2 | PilotId et préparation propriétaire vérifiés, autres droits non hérités dans commande |
| `RG-CRE-010` | `ML1-CREATE` | Effet vérifié avant confirmation | `CC,CP,RE,UI` | P1 | COMMIT transactionnel côté DB ; erreurs route 401 générique et perte ACK client (GAP 01/02) |
| `RG-CRE-011` | `ML1-CREATE` | Une seule création par intention autorisée | `CC,DB,RE` | P1 | Verrou advisory, empreinte et replay PG ; transport interrompu BROWSER non couvert |
| `RG-CRE-012` | `ML1-CREATE` | Identité projet pérenne | `CC,DB,PC` | P1 | Projet ID propre, lien durable, homonymes distincts PG |
| `RG-CRE-013` | `ML1-CREATE` | Échec de création non masqué | `CP,RE,UI,ER` | P1 | Contrat échec honnête contredit par classification route et reprise UI incomplète |
| `RG-CRE-014` | `ML1-CREATE` | Pas de cycle, CKI, mandat ou dépôt induit | `CC,NR,MI` | P7 | Pas de cycle/CKI/Git émis par createProjectCommand ; A15 PARTIAL après ML3/ML4 |
| `RG-CRE-015` | `ML1-SAS-DURABLE` | Absence de projet si abandon | `PS,DB,PO` | P1,P2 | Abandon conserve sas OPEN ; pas de création projet automatique |
| `RG-CRE-016` | `ML1-NORA-PREVIEW` | Pas de promotion implicite des propositions | `NR,MI,UI` | P3,P6 | Proposition ≠ HumanDecision ; avis/provenance et non-promotion LIVE à vérifier |
| `RG-CRE-017` | `ML1-CONTINUITY` | Continuité visuelle du même fil | `CC,PC,PJ` | P1,P2 | Conversation et documents rattachés dans transaction ; fidélité fil UI Figma non vérifiée |
| `RG-CRE-018` | `ML1-CONTINUITY` | Marqueur de création vrai | `CC,PJ` | P1,P2 | Vérité DB disponible pour marqueur ; affichage « Projet créé » véridique à inspecter |
| `RG-CRE-019` | `ML1-CONTINUITY` | Transfert de contexte sans vérité inventée | `CC,KN,MI` | P1,P5 | Contexte D4 récupérable ; provenance et statut épistémique non prouvés exhaustivement |
| `RG-CRE-020` | `ML1-CONTINUITY` | Projet courant après création seulement | `CC,RE,UI` | P1 | Bascule après retour projectId ; chemin incertain/erreur transport peut bloquer busy |
| `RG-CRE-021` | `ML1-CONTINUITY` | Premier échange sans cycle obligatoire | `NR,CM,PJ` | P2,P5 | Conversation sans cycle techniquement possible ; niveau LIVE ciblé à renforcer |
| `RG-CRE-022` | `ML1-SAS-DURABLE` | Provenance de sources consultées avant création | `NR,KN,MI` | — | Interface Git/D4 : sources et permissions pré-projet non requalifiées |
| `RG-CRE-023` | `ML1-CONTINUITY` | Reprise sans transcript intégral obligatoire | `CM,KN,NR` | P5 | Sélection de contexte présente après ML2 ; récupération cognitive LIVE non démontrée |
| `RG-CRE-024` | `ML1-CONTINUITY` | Reprise de création interrompue | `CC,RE,UI` | P1 | Réconciliation lecture seule présente ; pas d'appel UI /reconcile, crash/restart non testé |
| `RG-CRE-025` | `ML1-CREATE` | Projet créé visible au portefeuille | `CC,PO,UI` | P1,P2 | Projet en DB, portfolio D1 le lit ; rafraîchissement après ACK perdu à évaluer |
| `RG-CRE-026` | `ML1-NORA-PREVIEW` | Pas de réécriture des faits du sas | `CC,CM,KN` | P1,P5 | La transaction ne modifie pas les messages, mais ne prouve pas absence de promotion D4/D6 |
| `RG-CRE-027` | `ML1-SAS-DURABLE` | Brouillon produit avant création du projet | `DO,CC,DB,UI` | P1,P2,P4 | Brouillon D4 sauvegardé dans sas, lien documentaire réutilisé après création |

### 4.2 PF validés historiquement — 27

| Référence | Capacité de premier rattachement | Scénario R2 (résumé) | Code | Tests proches | Constat et limite |
| --- | --- | --- | --- | --- | --- |
| `PF-CRE-01` | `ML1-SAS-DURABLE` | Exploration d’intention sans projet — Nora travaille dans sas ; aucun projet, cycle ou dépôt n’est créé | `PS,CM,DB` | P1,P2 | Sas et dialogue avant projet ; pas cycle/Git automatique, Nora FAKE en E2E |
| `PF-CRE-02` | `ML1-SAS-DURABLE` | Qualification incomplète mais intention claire — Proposer création malgré trajectoire manquante ; points ouverts conservés | `NR,PS,KN` | P3 | Nom/points ouverts possibles, création avec incertitudes non testée LIVE |
| `PF-CRE-03` | `ML1-NORA-PREVIEW` | Nom ou cadre suggéré par Nora — Aperçu explicitement propositionnel ; pas de décision inférée | `PS,UI,NR` | P3 | Proposition modifiable, non décision ; preuve visuelle non fournie |
| `PF-CRE-04` | `ML1-SAS-DURABLE` | Demande de formulaire exhaustif implicite — Nora pose seulement les questions déterminantes pour la création | `NR,UI` | P3 | Chat-first sans formulaire permanent ; qualité questions ciblées non testée LIVE |
| `PF-CRE-05` | `ML1-SAS-DURABLE` | Source Git lue avant projet — Lecture dans ses droits ; pas de dépôt ni de cible d’écriture associés par défaut | `NR,KN` | — | Interface lecture Git pré-projet D9 : permission/provenance NON TESTÉES |
| `PF-CRE-06` | `ML1-NORA-PREVIEW` | Pas de méthode ni premier cycle défini — Création possible ; Nora reste générale après création | `CC,NR,MI` | P1,P5 | Création sans cycle, après-création Nora sans méthode à confirmer LIVE |
| `PF-CRE-07` | `ML1-CREATE` | Pilote dit « bonne idée » sur un nom — Aucune création ; accord de contenu à distinguer de « Créer le projet » | `NR,UI,MI` | P3,P6 | Acquiescement ≠ POST par bouton ; interprétation phrase de Nora à contrôler |
| `PF-CRE-08` | `ML1-CREATE` | Acte « Créer le projet » avec identité valide — Projet personnel effectivement enregistré ; D1 peut le montrer | `CP,CC,UI,PO` | P1,P2 | Acte dédié, projet créé et visible, preuve PG/FAKE historique |
| `PF-CRE-09` | `ML1-CREATE` | Session inconnue pendant l’acte — Création non engagée ; identité requalifiée sans effet indu | `CP,CC,ER` | — | Refus de session route prévu ; cas d'expiration pendant POST non injecté |
| `PF-CRE-10` | `ML1-CREATE` | Double clic de création — Un seul projet retrouvé, pas de doublon | `CC,DB` | P1 | Double clic concurrent produit projet unique en test PG |
| `PF-CRE-11` | `ML1-CREATE` | Timeout après enregistrement — État réel relu ; projet existant réutilisé, succès non déclaré avant constat | `CC,RE,UI` | P1 | Rejeu DB OK ; crash + perte ACK + reprise navigateur non réalisés (GAP 02) |
| `PF-CRE-12` | `ML1-CREATE` | Erreur avant enregistrement — Le sas et son contexte subsistent dans les limites d’accès ; pas de projet fictif | `CC,CP,UI` | P1 | Conflit/révision côté commande ; erreur HTTP générique hors statut normal |
| `PF-CRE-13` | `ML1-SAS-DURABLE` | Abandon du sas sans validation — Aucune création automatique ni projet dans portefeuille | `PS,PO` | P1,P2 | Sans validation, sas OPEN et pas de projet |
| `PF-CRE-14` | `ML1-CREATE` | Création avec deux projets de même nom — Identités durables distinctes sans fusion de données | `CC,DB,PO` | P1 | Deux projets au même nom ont IDs distincts en test PG |
| `PF-CRE-15` | `ML1-CONTINUITY` | Création puis continuation de conversation — Même fil visible avec marqueur exact de création | `CC,PC,PJ` | P1,P2 | Même conversation ID en DB et reload browser FAKE ; marqueur visuel à qualifier |
| `PF-CRE-16` | `ML1-CONTINUITY` | Passage sas vers projet à état incertain — Pas de bascule définitive de contexte ; réconciliation puis reprise | `CC,RE,UI` | P1 | État UNKNOWN réconciliable serveur, pas via parcours UI direct |
| `PF-CRE-17` | `ML1-CONTINUITY` | Transfert des acquis et questions ouvertes — D4 récupère provenance, sujets, réserves ; D6 garde décisions | `CC,KN,MI` | P5 | Provenance D4 et HumanDecision D6 à contrôler par oracle sélectif |
| `PF-CRE-18` | `ML1-CONTINUITY` | Projet créé, nouveau sujet libre — Nora poursuit sans cycle actif, CKI ni contrat technique | `NR,CM,PJ` | P2,P5 | Nora libre après création en code, guidance LIVE non requalifiée |
| `PF-CRE-19` | `ML1-NORA-PREVIEW` | Projet créé avec trajectoire proposée — La trajectoire reste prévisionnelle ; aucun premier cycle ouvert | `NR,MI,PJ` | P5,P6 | Trajectoire proposée, absence de cycle induit en E2E composite non complète |
| `PF-CRE-20` | `ML1-SAS-DURABLE` | Source interprojet citée au sas — Rattachée comme référence sourcée, sans importer mandat ni décision | `KN,NR,MI` | — | Interface D3/D4/D9 : preuve source interprojet et autorité NON TESTÉES |
| `PF-CRE-21` | `ML1-CONTINUITY` | Fil visible, modèle utilise mémoire sélective — Continuité observable sans obligation d’injection intégrale | `CM,KN,PJ` | P5 | Contexte sélectionné en test PG, pertinence LIVE non prouvée |
| `PF-CRE-22` | `ML1-CONTINUITY` | Reprise après perte de session — Vérifier création et conversation réellement persistées avant toute reprise | `CC,RE,UI` | P1 | Restauration/restart réel A16 PARTIAL ; navigateur sur session perdue absent |
| `PF-CRE-23` | `ML1-NORA-PREVIEW` | Source contradictoire avant création — Conserver versions et statut hypothétique ; aucune promotion en vérité | `KN,NR` | — | Contradiction de sources au sas avant création non prouvée |
| `PF-CRE-24` | `ML1-CREATE` | Demandes de créer projet + dépôt + cycle en une phrase — Projet créé seulement via acte dédié ; effets Git et cycle restent séparés et gouvernés | `CP,MI,NR` | P6,P7 | Aucun effet induit dans commande seule, frontière D5/D9 à retester sur produit complet |
| `PF-CRE-25` | `ML1-CREATE` | Projet créé mais portefeuille non rafraîchi — État enregistré propriétaire prime ; D1 actualise sans créer de nouveau projet | `CC,PO,UI` | P1,P2 | Relecture projet confirmée DB ; portfolio stale/ACK perdu non injectés |
| `PF-CRE-26` | `ML1-NORA-PREVIEW` | Instruction hostile dans source du sas — Texte non autorisant ; pas de création, décision ou exécution induite | `NR,MI,KN` | — | Prompt hostile pré-projet non testé en LIVE et refus d'effets non prouvé |
| `PF-CRE-27` | `ML1-SAS-DURABLE` | Document rédigé dans le sas avant création — Brouillon lié à la préparation puis transféré après création confirmée | `DO,CC,DB` | P1,P2 | Document lié en création, même ID ; rendu complet Figma non observé |

### 4.3 Addenda CANDIDATE — 6 (orientation validée, texte non promu)

| Référence | Sujet | Code | Preuve | Statut |
| --- | --- | --- | --- | --- |
| `RG-CRE-028` | Corrélation de la création | `CC,CP,OB` | P1 | CANDIDATE : clé de commande présente, traçabilité multi-tentative non prouvée |
| `RG-CRE-029` | Erreur et effet incertain | `CC,RE,UI` | P1 | CANDIDATE : API de relecture existe ; erreur transport client et faux 401 |
| `RG-CRE-030` | Contexte de la lane | `OB,CP,PA` | — | CANDIDATE : lane/SHA dans observabilité ; propagation API et preuve runtime absentes |
| `PF-CRE-28` | Plusieurs retries d'une intention, traces corrélées | `CC,CP,OB` | P1 | CANDIDATE, même projet DB, corrélation multi-requêtes non vérifiée |
| `PF-CRE-29` | ACK perdu après commit et réconciliation de commande | `CC,RE,UI` | P1 | CANDIDATE, replay PG seulement ; UI sans appel reconcile (GAP-02) |
| `PF-CRE-30` | DB indisponible et classification honnête | `CP,RE,ER` | — | CANDIDATE, traitement HTTP generic 401 en cas d'exception (GAP-01) |

**Contrôle :** 27 RG + 27 PF validés ; 3 RG + 3 PF candidats = **60 références individualisées**, pas 60 PASS. Les interfaces D3/D4/D5/D6/D9 et l'E2E01 doivent être réconciliés transversalement.

## 5. Constatations techniques et preuve discriminante manquante

### D2-GAP-01 — Erreur DB ou applicative classée « session invalide »

Le [POST de création](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts) et le [GET de réconciliation](../../../web/src/app/api/preparations/[preparationId]/reconcile/route.ts) entourent session, opérations et DB d'un `catch` retournant **401 SESSION_INVALID pour toute exception**. [POST sas](../../../web/src/app/api/preparations/route.ts) et [GET/PATCH sas](../../../web/src/app/api/preparations/[preparationId]/route.ts) présentent des comportements analogues (GET distingue seulement 404). Pourtant [`http-errors.ts`](../../../web/src/lib/http-errors.ts) distingue dépendance 503 / interne 500. **Contradiction de code**, pas incident HTTP injecté. Impact `RG-CRE-013`, `PF-CRE-09/12/16/22`, candidats `RG-CRE-029/PF-CRE-30`. Même famille que D1-GAP-02 : **ne pas compter deux défauts de production identiques**.

### D2-GAP-02 — Perte d'ACK : réconciliation serveur non mobilisée par l'écran

[`createProjectCommand`](../../../web/src/domains/preparation/create-project.ts) possède lock PG, clé, fingerprint, transaction, `ALREADY_CREATED` et `reconcileCreateProject` en **lecture seule**, exposée par [GET `/reconcile`](../../../web/src/app/api/preparations/[preparationId]/reconcile/route.ts). Mais [`createProject()` dans `page.tsx`](../../../web/src/app/preparations/[preparationId]/page.tsx) **ne fait pas appel à `/reconcile` et n'a pas de `catch/finally` autour de `fetch` ou `res.json()`**. Après erreur transport ou parsing, `busy` peut rester vrai et la reprise guidée n'est pas établie. **Défaut de chemin client source confirmé ; comportement exact en navigateur NOT RUN**. `RG-CRE-010/011/013/020/024`, `PF-CRE-11/16/22`, candidat `RG-CRE-029/PF-CRE-29`. A05 PG replay historique PARTIAL ne prouve pas la récupération UX après crash.

### D2-GAP-03 — Proposition concurrente sans contrôle de version atomique

[`updatePreview`](../../../web/src/domains/preparation/service.ts) lit `creationRevision`, calcule `nextRev`, puis effectue un UPDATE par `id + ownerPilotId`, sans comparaison atomique à la révision précédemment lue. Deux PATCH simultanés pourraient écraser une proposition avec la même révision. **Risque source de perte de mise à jour, non reproduit en PG ; l'obligation exacte de concurrence de la proposition reste à qualifier dans R2**. `RG-CRE-003/016`, `PF-CRE-03/23`.

### D2-GAP-04 — Préparation et conversation créées hors transaction commune

[`openOrCreatePreparation`](../../../web/src/domains/preparation/service.ts) insère une préparation, puis une conversation via deux INSERT séparés. Une panne entre les deux peut laisser `OPEN` sans conversation ; [`postUserMessageAndNora`](../../../web/src/domains/conversation/service.ts) attend une conversation. **Scénario conditionnel**, non injecté ni prouvé en environnement ; exigence de continuité à contrôler : `RG-CRE-001/015/017/024`, `PF-CRE-01/12/22`.

### D2-GAP-05 — Création D2 confirmée ≠ continuation cognitive composite confirmée

Le [POST create-project](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts) autorise la mission liée **avant** l'effet D2, puis peut lancer `continueAfterProjectCreated` après `CREATED`. En cas d'exception de continuation, il renvoie `missionContinue.continued=false` tout en préservant le résultat projet. Ce partage d'autorité **peut être légitime**, mais l'UX et les preuves doivent distinguer projet créé et intention composite accomplie. [Tests de continuité globale](../../../web/tests/integration/intent-continuity-global.pg.test.ts) disponibles en PG SCRIPTED ; reprise D3/D4 LIVE et cohérence Nora à requalifier. **RISQUE/FRONTIÈRE, pas défaut D2 établi.**

## 6. Acquisition de preuve et suite de ML4B

**Mécanismes vérifiés par source :** préparation personnelle, commande de création explicite, sérialisation par clé+préparation, transaction projet+lien+conversation+documents, replay, homonymie et relecture propriétaire. Pas de création de dépôt ni de cycle directement dans la commande D2. Premier brouillon documentaire conservé après transfert ; la qualité du contenu et son rendu relèvent aussi de D3/D4/UX.

**Précisions probatoires nécessaires :** injection de panne DB et catégories HTTP ; double PATCH ; coupure entre INSERT préparation/conversation ; ACK perdu + refresh + navigateur ; expiration pendant création ; cycle/CKI/Git non induits après intégration ML3/ML4 ; provenance et contradictions ; mémoire D4 sélectionnée plutôt que transcript intégral ; Figma/runtime écran et état identiques ; route de reprise de mission après création.

**Gate :** aucun GO technique ni nouveau verdict `BEHAVIOR PROVEN`. Continuer la réconciliation ML1 D1/D2 avec interfaces D3/D4, l'E2E01 et comparaison Figma/runtime avant synthèse de conformité ; d'autres capacités ML2–ML4 restent à instruire avant gate Morris B.

**Verdict :** `60/60 IDs DOCUMENTED/MAPPED / 54 VALIDATED + 6 CANDIDATE / FIVE FINDINGS MIXED / EVIDENCE INCOMPLETE / NO CP1 EXIT`.
