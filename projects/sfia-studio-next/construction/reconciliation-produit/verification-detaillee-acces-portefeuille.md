# SFIA Studio Next — ML4B / Contrôle individualisé D1 : accès et portefeuille

**Nature :** annexe analytique D1 non normative ; texte contractuel chez [R2 — Accès et portefeuille](../../conception-fonctionnelle/acces-et-portefeuille.md).
**Date :** 2026-11-10 ; **code inspecté :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; branche candidate `docs/next-reconciliation-produit-ml1-20261110`.
**Statut :** `55/55 IDs R2 D1 RATTACHÉS / SOURCE-TO-CODE REVIEWED / PROOF PARTIAL / BROWSER & LIVE NOT RE-RUN / F2-G5 NOT RUN / NO CP1 GATE`.
**Local, DB réelle et navigateur : NON OBSERVÉS.** Aucune correction de code ou test exécuté dans cette revue. Retour au [diagnostic ML1](diagnostic-acces-preparation-creation.md).

## 1. Contrat et grille de lecture

**Périmètre D1 propriétaire :** 25 `RG-ACC-001..025` + 24 `PF-ACC-01..24` = **49 VALIDATED SPEC** au 02/11/2026. **Addendum observabilité du 05/11 :** 3 `RG-ACC-026..028` + 3 `PF-ACC-25..27` = **6 CANDIDATE**, malgré orientation transverse approuvée. Ne pas requalifier les six comme specs validées sans décision.

Le diagnostic comporte une ligne par ID et une référence technique/test applicable. Les codes `T*` indiquent la présence du **fichier de test**, pas une attestation de réussite complète de chaque exigence. Les résultats QA historiques ML1 (§7–8 de sa matrice) restent propriétaires ; `CODE INSPECTED`, `HISTORICAL PASS`, `BROWSER FAKE`, `LIVE BOUNDED` et `BEHAVIOR PROVEN` ne sont pas interchangeables. `NON TESTÉ` signifie absence de preuve discriminante identifiée **dans les sources examinées**, non impossibilité fonctionnelle prouvée.

## 2. Références de code contrôlées

| Code | Référence à la baseline | Responsabilité |
| --- | --- | --- |
| `AU` | [`web/src/lib/auth.ts`](../../web/src/lib/auth.ts) | GitHub OAuth uniquement identité Studio |
| `SE` | [`web/src/domains/identity/session.ts`](../../web/src/domains/identity/session.ts) | Session Better Auth, vérification, révocation, DEV gate |
| `PR` | [`web/src/domains/identity/provision-pilot.ts`](../../web/src/domains/identity/provision-pilot.ts) | Provision PilotId serveur |
| `PO` | [`web/src/domains/identity/portfolio.ts`](../../web/src/domains/identity/portfolio.ts) | Requêtes propriétaire, préparations ouvertes |
| `AP` | [`web/src/app/api/portfolio/route.ts`](../../web/src/app/api/portfolio/route.ts) | API portefeuille sous session |
| `UI` | [`web/src/app/portfolio/page.tsx`](../../web/src/app/portfolio/page.tsx) | Cockpit, badges, UX, erreurs |
| `PC` | [`web/src/domains/preparation/project-context.ts`](../../web/src/domains/preparation/project-context.ts) | Rattachement de projet propriétaire |
| `PJ` | [`web/src/app/api/projects/[projectId]/route.ts`](../../web/src/app/api/projects/[projectId]/route.ts) | API projet et refus 404/401 |
| `PS` | [`web/src/domains/preparation/service.ts`](../../web/src/domains/preparation/service.ts) | Préparation et conversation owner-scoped |
| `AR` | [`web/src/app/api/preparations/route.ts`](../../web/src/app/api/preparations/route.ts) | POST préparation et gestion d'erreurs |
| `AE` | [`web/src/app/api/preparations/[preparationId]/route.ts`](../../web/src/app/api/preparations/[preparationId]/route.ts) | GET/PATCH préparation et gestion d'erreurs |
| `SR` | [`web/src/components/shell/StudioShell.tsx`](../../web/src/components/shell/StudioShell.tsx) | Rail, navigation et statut affiché |
| `HE` | [`web/src/lib/http-errors.ts`](../../web/src/lib/http-errors.ts) | Classification normalisée HTTP |
| `OB` | [`web/src/lib/observability.ts`](../../web/src/lib/observability.ts) | Traçabilité et masquage |
| `IP` | [`web/src/app/projects/[projectId]/page.tsx`](../../web/src/app/projects/[projectId]/page.tsx) | Chargement et restitution du contexte projet |
| `GI` | [`web/src/domains/integrations/real-github-provider.ts`](../../web/src/domains/integrations/real-github-provider.ts) | Capacité Git D9, séparée de D1 ; non revue intégralement |

## 3. Références de tests lues ou localisées, sans réexécution

| Code | Test | Portée du contrat de test |
| --- | --- | --- |
| `T1` | [`web/tests/integration/identity-session.pg.test.ts`](../../web/tests/integration/identity-session.pg.test.ts) | PG : identity stable, deux Pilotes, refus DEV non autorisé ; OAuth simulé |
| `T2` | [`web/tests/integration/portfolio-a1.pg.test.ts`](../../web/tests/integration/portfolio-a1.pg.test.ts) | PG : propriétaire, OPEN non attachée, 25/page |
| `T3` | [`web/tests/e2e/ml1-smoke.spec.ts`](../../web/tests/e2e/ml1-smoke.spec.ts) | Playwright BROWSER FAKE : Projet A, reprise, Pilot B 404 |
| `T4` | [`web/tests/e2e/g4-b1-b4-correctifs.spec.ts`](../../web/tests/e2e/g4-b1-b4-correctifs.spec.ts) | Playwright BROWSER FAKE : reprise GET sans POST |
| `T5` | [`web/tests/unit/http-errors.test.ts`](../../web/tests/unit/http-errors.test.ts) | UNIT : 401/503/500 et secret non renvoyé par classifieur |
| `T6` | [`web/tests/unit/observability.test.ts`](../../web/tests/unit/observability.test.ts) | UNIT : masquage, lane et sink read-only |
| `T7` | [`web/tests/unit/dev-login-host.test.ts`](../../web/tests/unit/dev-login-host.test.ts) | UNIT : anti-spoof Host/proxy et DEV consume gate |

## 4. Matrice exhaustive des 55 identifiants D1

### 4.1 Règles historiquement validées — 25 RG

| RG | Règle (intitulé R2) | Code inspecté | Tests disponibles | Diagnostic source/code/preuve |
| --- | --- | --- | --- | --- |
| `RG-ACC-001` | Authentification personnelle | `AU,PR,SE` | T1,T3 | CODE + OAuth LIVE ML1 historique ; pas de test LIVE actuel |
| `RG-ACC-002` | Session applicable | `SE` | T1,T7 | CODE ; expiration navigateur et révocation après accès non rejouées |
| `RG-ACC-003` | Connexion non autorisante sur les dépôts | `AU,SE,GI` | — | Séparation D1/D9 visible ; permissions Git E2E non prouvées |
| `RG-ACC-004` | Séparation entre identité et décision | `SE,PC` | — | D6 propriétaire des décisions ; interface non qualifiée entièrement |
| `RG-ACC-005` | Aucun accès intercomptes implicite | `PO,PC,PS` | T1,T2,T3 | Isolation owner visible, lecture cross-domain complète à prouver |
| `RG-ACC-006` | Retour après perte de session | `SE,PO` | T1,T3 | Reconnexion partielle ; session perdue/ACK incertain non couverts complètement |
| `RG-ACC-007` | Accès technique sans présumer d’un protocole | `AU,SE` | T1 | Choix technique implémenté ; OAuth live actuel non observé |
| `RG-ACC-008` | Portefeuille propre au Pilote | `PO,AP` | T2,T3 | Filtrage owner CODE ; preuves PG et FAKE historiques |
| `RG-ACC-009` | Cockpit sans Nora conversationnelle | `UI,SR` | T3 | Cockpit non conversationnel CODE ; runtime Figma non inspecté |
| `RG-ACC-010` | Navigation vers un projet explicite | `UI,PC,IP` | T3 | Projet par ID et fil relu ; mention tierce non testée |
| `RG-ACC-011` | Plusieurs projets sans travail transverse implicite | `PO,PC` | T1,T3 | Projets personnels CODE ; D5/D6 séparations complètes non prouvées |
| `RG-ACC-012` | Projet existant à l’accès | `PC,PJ` | T3 | Owner check + 404, négatif FAKE ; cas périmé non testé |
| `RG-ACC-013` | Données de présentation honnêtes | `UI,PO` | — | GAP D1-01 : statuts projet calculés selon rang sans vérité métier |
| `RG-ACC-014` | Reprise d’un projet via le propriétaire métier | `PC,IP` | T3 | Chargement de vrais propriétaires ; projections D3–D6 à vérifier |
| `RG-ACC-015` | Accès interdit ou périmé | `PC,PJ,PO` | T3 | Refus 404 Pilote B ; données d'erreur détaillées à auditer (GAP D1-03) |
| `RG-ACC-016` | Navigation interrompue | `IP,PC` | — | Bascule A→B interrompue non testée |
| `RG-ACC-017` | Entrée visible vers le sas | `UI,PS,AR` | T3,T4 | Entrée sas séparée, absence création projet historiquement testée |
| `RG-ACC-018` | Sas distinct du projet existant | `PS,PO` | T2,T4 | Préparation owner, reprise GET ; négatif croisé à vérifier |
| `RG-ACC-019` | Consultation interprojets bornée | `PC,GI` | — | INTERFACE D3/D4/D9 : consultation cross-projet non qualifiée |
| `RG-ACC-020` | Pas de mode Nora global multi-projets | `UI,SR` | T3 | Pas de Nora globale cockpit CODE ; multi-projets conversation non testé |
| `RG-ACC-021` | Confidentialité des aperçus | `PO,UI,PC` | T3 | Owner check CODE ; GAP D1-03 retour potentiel d'erreur brute |
| `RG-ACC-022` | Aucune opération Git déclenchée par navigation | `SR,AR,PC` | T3,T4 | Navigation sans mutation D5/D9 apparente ; garde-fou E2E non complet |
| `RG-ACC-023` | Connaissance des limites sans blocage gratuit | `PO,UI` | — | Git/Cursor indisponible : dépendance négative NON TESTÉE |
| `RG-ACC-024` | Actions sensibles hors navigation | `UI,SR` | — | OUT négatif : suppression/transfert non autorisés par D1 |
| `RG-ACC-025` | Nombre et ordre de projets non prescrits | `PO,UI` | T2 | Pas de plafond projet prescrit ; pagination préparations seulement |

### 4.2 Scénarios historiquement validés — 24 PF

| PF | Résultat attendu R2 (résumé fidèle) | Code inspecté | Tests disponibles | Diagnostic source/code/preuve |
| --- | --- | --- | --- | --- |
| `PF-ACC-01` | **Connexion valide et portefeuille personnel** : Identité GitHub vérifiée ; projets personnels affichés ; aucune capacité Git supplémentaire supposée | `AU,PO` | T1,T3 | OAuth LIVE historique + BROWSER FAKE ; pas requalification actuelle |
| `PF-ACC-02` | **Session expirée à l’ouverture** : Refus des données privées et reconnexion appropriée ; aucune opération protégée reprise par mémoire | `SE,AP` | T1 | Revocation en PG ; expiration navigateur/reconnexion NON TESTÉE |
| `PF-ACC-03` | **Utilisateur B utilise le même dépôt que A** : Portefeuilles distincts ; aucun projet, décision ou conversation de A dans B | `PR,PO,PC` | T1,T3 | Deux Pilotes simulés ; même dépôt Git pour A/B NON TESTÉ |
| `PF-ACC-04` | **Connexion GitHub sans permission dépôt** : Le cockpit reste utilisable ; dépôt non autorisé et écriture non présumée | `AU,PO,GI` | — | Git facultatif au contrat ; échec de permission dépôt NON TESTÉ |
| `PF-ACC-05` | **Choix explicite du projet A** : A devient le contexte ; le fil et les états réels de A sont sollicités auprès de leurs propriétaires | `UI,PC,PJ` | T3 | Réouverture par projectId en BROWSER FAKE historique |
| `PF-ACC-06` | **Mention du projet B dans la conversation de A** : Le projet actif reste A ; aucune bascule de navigation ni permission B créée | `IP,PC` | — | Mention B dans conversation A sans bascule : NON TESTÉ |
| `PF-ACC-07` | **Portefeuille de plusieurs projets** : Choix indépendant de chaque projet ; aucune conversation multi-projets ni fusion des cycles | `PO,UI` | T3 | Projets multiples possibles ; mélange d'autorité D5/D6 non testé |
| `PF-ACC-08` | **Cockpit sans espace Nora** : Accès/navigation possibles ; aucune surface de dialogue globale exposée | `UI,SR` | T3 | Absence Nora globale CODE ; structure navigateur FAKE |
| `PF-ACC-09` | **Projet supprimé ou non trouvé depuis un lien historique** : Ne pas ouvrir ou recréer un projet fictif ; indiquer état réel et limites | `PC,PJ` | — | 404 sans projet fictif CODE ; vieux lien supprimé non testé |
| `PF-ACC-10` | **Accès projet retiré après affichage** : Recontrôle avant ouverture ; aucune divulgation dans prévisualisation ou message d’erreur | `PC,PJ` | T3 | Accès Pilot B refusé FAKE ; retrait après affichage NON TESTÉ |
| `PF-ACC-11` | **Statut cycle/progression introuvable** : Ne pas créer de valeur de secours ; statut inconnu/indisponible honnête | `UI,PO` | — | GAP D1-01 : valeurs de statut projet sans source |
| `PF-ACC-12` | **Interruption pendant navigation A vers B** : État visible correspond au projet confirmé ou signale l’échec ; pas de données A étiquetées B | `IP,PC` | — | Navigation A→B interrompue : NON TESTÉ |
| `PF-ACC-13` | **Projet ouvert après reconnexion** : Requalifier identité et propriétaire ; reprise contextualisée par D3/D4/D5/D6 | `SE,PC` | T3 | Nouvelle fenêtre même Pilote FAKE ; retour après expiration NON TESTÉ |
| `PF-ACC-14` | **Entrée dans sas depuis portefeuille** : Ouvre une préparation, pas un projet durable ni un cycle | `UI,PS,AR` | T3,T4 | Ouverture de préparation sans projet durable FAKE |
| `PF-ACC-15` | **Retour au cockpit depuis un sas non créé** : Pas de création fictive ni dépôt Git ; suite du sas selon contrat D2 | `UI,PS` | T4 | Reprise sas GET sans POST en FAKE |
| `PF-ACC-16` | **Lecture autorisée d’un autre projet** : D3/D4 citent source lisible, sans changer projet/autorité ou moteur de pilotage | `GI,PC` | — | INTERFACE D3/D4/D9 : lecture interprojets autorisée non testée |
| `PF-ACC-17` | **Source interprojet inaccessible** : Ne pas révéler son existence privée au-delà du nécessaire ; refus proportionné | `GI,PC` | — | INTERFACE D3/D4/D9 : refus d'une source interprojet non testé |
| `PF-ACC-18` | **Tentative de piloter deux projets dans une conversation** : Aucun contexte multi-projets implicite ; suggérer navigation ou cadrage distinct | `IP,PC` | — | Deux projets dans conversation : refus cognitif NON TESTÉ |
| `PF-ACC-19` | **Demande de suppression ou transfert de projet** : Ne pas déduire autorisation ni capacité de D1 ; signaler fonctionnalité non spécifiée | `UI,SR` | — | OUT négatif : ni suppression ni transfert par D1 ; Nora non testée |
| `PF-ACC-20` | **Liste très longue et navigation** : Aucune limite artificielle ; stratégie de consultation adaptée par UX ultérieure | `PO,UI` | T2 | 25/page s'applique aux préparations, pas aux projets ; volume projets non testé |
| `PF-ACC-21` | **Cursor indisponible pendant accès portefeuille** : Consultation locale maintenue sans statut Cursor fictif | `PO,UI` | — | Indisponibilité Cursor pendant cockpit NON TESTÉE |
| `PF-ACC-22` | **Injection Git tente de changer de projet** : Texte tiers non autorisant ; projet courant confirmé reste seul contexte | `GI,PC` | — | Injection source Git tentant bascule projet NON TESTÉE |
| `PF-ACC-23` | **Ouverture projet avec décision obsolète en cache** : Rattacher au bon projet ; D6 requalifie autorité courante avant effet | `PC,PJ` | — | Cache décision D6 obsolète : interface propriétaire ML3 non testée |
| `PF-ACC-24` | **Erreur de projet non accessible** : Erreur sans fuite de titre/contenu/permission d’un projet tiers | `PC,PJ` | T3 | 404 et absence de contenu Pilot B en BROWSER FAKE historique |

### 4.3 Addenda candidats du 05/11 — six IDs

| ID candidat | Objet R2 | Code inspecté | Tests disponibles | Qualification |
| --- | --- | --- | --- | --- |
| `RG-ACC-026` | Authenticité des états d'accès | `SE,AR,AE` | T5 | CANDIDAT ; GAP D1-02 et D1-04 (erreurs techniques) |
| `RG-ACC-027` | Diagnostic d'authentification minimal | `OB,SE` | T6 | CANDIDAT ; sink masqué, corrélation OAuth bout en bout à prouver |
| `RG-ACC-028` | Isolation des diagnostics | `OB,SE` | T6,T7 | CANDIDAT ; tests lane, visibilité diagnostic de production non vue |
| `PF-ACC-25` | OAuth GitHub refusé / callback indisponible | `AU,SE,OB` | — | CANDIDAT ; OAuth refusé/callback et journal diagnostique non prouvés |
| `PF-ACC-26` | Panne DB lors de la résolution de session | `SE,AR,AE,HE` | T5 | CANDIDAT ; classifieur 503 testé isolément, route D1/D2 encore 401 générique |
| `PF-ACC-27` | Session DEV hors lane, expirée ou révoquée | `SE,OB` | T1,T6,T7 | CANDIDAT ; DEV refuse autre lane en tests ; pas preuve OAuth LIVE |

**Contrôle cardinalité :** 25 RG validées + 24 PF validés + trois RG candidates + trois PF candidats = **55 références recensées individuellement**. Le présent état est une revue des mécanismes et des lacunes probatoires, **pas 55 verdicts de conformité complète**. Le rattachement R1/E2E reste à consolider transversalement avec D2–D9 et la qualification visuelle.

## 5. Constats détaillés et discriminants nouveaux

| Repère | Type | Références | Démonstration au code / limite | Piste de contrôle, non autorisée en construction |
| --- | --- | --- | --- | --- |
| **D1-GAP-01** | **Contradiction de code** | `RG-ACC-013`, `PF-ACC-11` | [`portfolio/page.tsx#L34-L40`](../../web/src/app/portfolio/page.tsx#L34-L40) attribue Actif, En réflexion, À reprendre par **index** ; [`portfolio.ts`](../../web/src/domains/identity/portfolio.ts) ne livre pas de statut de projet. La carte « Reprises récentes » compte les préparations ouvertes, sans critère de récence. | Vérification navigateur puis retirer/remplacer états non sourcés selon contrat |
| **D1-GAP-02** | **Erreur classée à tort en source** | candidat `RG-ACC-026`, D2 `RG-CRE-013` | [`POST /api/preparations`](../../web/src/app/api/preparations/route.ts) renvoie **401 SESSION_INVALID pour toute exception** ; [`GET/PATCH /api/preparations/:id`](../../web/src/app/api/preparations/[preparationId]/route.ts) transforme aussi les exceptions non-404 (GET) et toutes les exceptions (PATCH) en 401. [`http-errors.ts`](../../web/src/lib/http-errors.ts) distingue 401/500/503. | Injection DB/HTTP et erreur API distincte de l'identité |
| **D1-GAP-03** | **Risque d'exposition technique par le code** | `RG-ACC-015/021`, `PF-ACC-24`, candidat `RG-ACC-028` | [`portfolio.ts`](../../web/src/domains/identity/portfolio.ts) produit `{kind:"unavailable",reason:e.message}` sur erreur non StudioError ; [`GET /api/portfolio`](../../web/src/app/api/portfolio/route.ts) sérialise cet objet ; [`portfolio/page.tsx`](../../web/src/app/portfolio/page.tsx) affiche `p.reason`. **Aucune fuite sensible observée.** | Test d'injection avec chaîne interne artificielle, classification et masquage |
| **D1-GAP-04** | **Erreur Better Auth conditionnellement déqualifiée** | `RG-ACC-002/006`, candidat `RG-ACC-026` | [`session.ts`](../../web/src/domains/identity/session.ts) transforme les erreurs DB reconnues en 503 mais les autres erreurs de l'appel Better Auth en `null`, pouvant conduire à une apparence de non-authentification. Événement réel non observé. | Simuler erreurs de provider distinctes de 401, contrôler réponse et diagnostic |
| **D1-GAP-05** | **Affichage session non autoritatif** | `RG-ACC-013`, `PF-ACC-11`, possiblement `RG-ACC-006` | [`StudioShell.tsx`](../../web/src/components/shell/StudioShell.tsx) affiche « Connecté » selon `pathname` projet/sas via `inProductSpace`, **pas** selon état session vérifié. Cas utilisateur avec session expirée non observé. | Capturer shell lors d'expiration/rechargement et vérifier l'honnêteté de l'état |

**Précaution majeure :** D1-GAP-01 et D1-GAP-02 sont des contradictions déterministes dans les chemins de code inspectés ; D1-GAP-03 est une **propagation possible de message technique**, pas une exfiltration démontrée ; D1-GAP-04 et D1-GAP-05 sont des **risques conditionnels**. Ni impact réel ni criticité n'ont été mesurés. Aucun correctif ni priorisation ML4C ne découle automatiquement de cette analyse.

## 6. Ce qui reste incomplet pour certifier D1

**Implémentations effectivement repérées :** identité GitHub, rattachement PilotId stable, expiration/révocation contrôlées, filtrage owner `projects`/`preparations`, portefeuille avec pagination keyset des **préparations** à 25, reprise sans POST, projet rouvert par son ID, pas de Nora globale sur le cockpit, classifieur central d'erreurs. Les tests PG/FAKE confirment des propriétés **dans leur environnement historique**, et la RECETTE ML1 a accepté OAuth LIVE borné avec réserves.

**Scénarios non démontrés dans les éléments étudiés :** OAuth refusé et callback erroné avec diagnostic exhaustif ; session révoquée après première lecture puis POST protégé ; navigation A→B interrompue ; tiers Git mentionné dans conversation et injection ; lecture interprojets D3/D4/D9 avec refus/révocation ; cas D6 stale cache ; absence de dépendance Git/Cursor ; erreurs DB non divulguées sur toutes routes ; forte volumétrie de projets ; conformités mobile/Figma/focus/états d'attente.

**Interfaces et exclusions :** `RG-ACC-019/PF-ACC-16/17` = lecture interprojets chez D3/D4/D9, **non** implémentation complète exigible en ML1 ; `RG-ACC-024/PF-ACC-19` = **OUT négatif** suppression/transfert, pas un bouton à développer. Aucune exigence ne peut être supprimée de l'inventaire sous prétexte d'interface ou de différé.

## 7. Verdict et progression

**Verdict D1 :** `55/55 REFERENCES DOCUMENTED AND SOURCE-MAPPED / 49 R2 VALIDATED + 6 CANDIDATE / IMPLEMENTATION PARTIALLY INSPECTED / FIVE CODE FINDINGS / HISTORICAL PROOFS LIMITED / BROWSER LIVE NOT VERIFIED / F2-G5 NOT RUN / NO CP1 EXIT`.

D1 est **inventorié au niveau de chaque ID**, avec des suites probatoires explicites, et non validé comportementalement en totalité. Continuer le même diagnostic ML4B par **D2 (54 historiques + 6 candidates)**, puis rapprocher interfaces D3/D4/D6/D9 et E2E01 ; ne pas créer de lot par règle et ne pas corriger le runtime sans GO technique.
