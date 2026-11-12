# SFIA Studio Next — ML4C : préparation de la convergence fonctionnelle intégrée

> **CP2 GLOBAL — VALIDÉ EN CONTENU AVEC RÉSERVES PAR MORRIS (11/11/2026)** : [contrat de convergence fonctionnelle intégrée](contrat-convergence-fonctionnelle-integree.md) ; S01–S07 sont les oracles de réception d'**un seul ML4C**, et non des lots autonomes. La revue de cohérence a confirmé la fidélité à la vision Pilote–Nora, au diagnostic ML4B et à Gate B. S02/S03 conservent leur [design correctif précédemment validé](design-correctif-verite-effets-continuite.md) ; les autres scénarios sont validés **en orientation**, leurs mécanismes techniques/proofs restant à qualifier. **ENV-01 reste OPEN** : inventaire read-only et isolation prouvée avant tests mutatifs, aucun cleanup sans GO. Nora LIVE historique ML4-REC-08 non clos ; Git REAL exige un mandat fournisseur distinct. **Pas de GO de construction ML4C, Cursor, PR, merge, ML4D, ML5 ni ADOPTED.** Le présent addendum prévaut sur les instantanés antérieurs « CP2 CANDIDATE » ci-dessous, conservés à titre historique.

> **DESIGN CORRECTIF S02/S03 — VALIDÉ EN CONTENU PAR MORRIS (11/11/2026)** : [design intégré « Vérité des effets et continuité »](design-correctif-verite-effets-continuite.md) ; publication documentaire autorisée sur cette branche CP2 candidate. Il définit la reprise D2 après perte d'ACK, la restitution documentaire fidèle D3/D4, les critères de preuve, l'interface S05 et la condition préalable ENV-01. **Ce n'est ni la validation du contrat ML4C complet, ni un GO Cursor/build/DB/LIVE, ni une preuve de résolution LIVE de `ML4-REC-08`.** Les autres scénarios S01/S04/S05/S06/S07 restent à qualifier. Les statuts historiques du texte ci-dessous sont conservés comme instantanés antérieurs.

> **GATE B — ACCEPTÉ AVEC RÉSERVES PAR MORRIS (11/11/2026)** : [décision de sortie ML4B/CP1](../../governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md), publiée sur la présente **branche candidate**. Le diagnostic ML4B est une base acceptée et son objectif documentaire clôturé avec réserves ; **les constats X-01..08, les preuves manquantes, les causes à établir et la préparation CP2 restent à traiter**. Ce document demeure `CP2 PREPARATION CANDIDATE`, il **n'est pas encore un contrat de construction approuvé**. Les mentions `GATE B OPEN` dans la préparation initiale sont des instantanés antérieurs. **Aucun GO Cursor, Figma, Git REAL, PR, merge ou ADOPTED.**

**Nature :** contrat de préparation CP2 **candidat** — support D0 de qualification et de revue Morris, non décision de construction.

**Date :** 11 novembre 2026 (Europe/Paris).\
**Dépôt :** `mcleland147/sfia-workspace` ; périmètre `projects/sfia-studio-next/`.\
**Référence de code / diagnostic intégré :** `main@42aa373947446a8c20694b06c559ee0da1cba580` (PR #674 ML4B mergée).\
**Référence de trajectoire candidate :** `docs/next-r5-ml4c-ml4d-trajectory-20261111@5717b6c938288404f71c9281f1c92be99a51fb89` — **non fusionnée sur main** au pré-check du 11/11/2026.\
**État local / DB / navigateur / environnement LIVE :** **NON OBSERVÉS** dans cette préparation ; aucun test nouveau exécuté.\
**Autorité :** Morris arbitre le diagnostic, le contrat, les gates et les autorisations Git ; ChatGPT prépare et revoit ; Cursor réalise les changements D3 sous SFIA v2.6 et GO borné.\
**Statut :** `DOCUMENTED — CP2 PREPARATION CANDIDATE / GATE B OPEN / NO BUILD GO / NO PR / NO MERGE / NO ADOPTED`.

## 1. Mandat de préparation et résultat cible

Préparer le chantier **ML4C — convergence fonctionnelle intégrée du produit**, en appliquant **strictement la méthode en quatre temps** retenue avec Morris :

1. Transformer le diagnostic ML4B/CP1 en contrat de convergence et priorités.
2. Vérifier les écarts, les preuves et les causes réelles avant d'arrêter les corrections.
3. Faire converger des ensembles cohérents de capacités, interfaces, UX fonctionnelle, tests et documentation.
4. Prouver des parcours utilisateurs intégrés et qualifier les réserves avant réception intermédiaire Morris.

**Aucune approche supplémentaire « enveloppe UX d'abord / shell-first » n'est introduite.** Les interventions sur le cockpit, le sas, la navigation et les surfaces existantes sont motivées par les exigences fonctionnelles et l'UX nécessaire aux parcours. **ML4D** demeure propriétaire de la convergence visuelle/UX globale sur l'ensemble des surfaces applicables ; un défaut bloquant l'usage réel ne lui est pas reporté par défaut.

**Résultat recherché par le Pilote :** accéder à Studio, retrouver ses projets et son contexte, préparer/créer/reprendre un projet, travailler avec Nora, obtenir les documents, analyses, décisions et effets applicatifs autorisés réellement vérifiés, y compris après interruption, sans être obligé d'orchestrer manuellement les domaines D1–D9.

**Principe de gouvernance :** Nora qualifie/organise/raisonne/mobilise/interprète/restitue ; Studio et les domaines compétents réalisent et enregistrent les effets, appliquent les préconditions et produisent des résultats vérifiables ; le Pilote conserve HumanDecision et les actes explicitement requis. Aucun nouveau moteur concurrent d'autorisation, d'effets ou de conversation.

## 2. Référentiel applicable et limite du diagnostic

L'ordre de confiance est **Git/preuves → décisions Morris → R1/R2/R3/R4/R5 → hypothèses**.

Sources vérifiées sur Git :

- `governance/SEF.md`, version 0.2, notamment §§4–6 et §10 : macro-lots orientés résultats, conception intégrée, preuve graduée et gates.
- `governance/roadmap.md`, R5/CP0 sur main ; décision `governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md`.
- Décision complémentaire du 11/11 `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` **sur la branche candidate identifiée**, non encore baseline main.
- `cadrage/vision-produit.md` : neuf domaines, sept parcours E2E ; `cadrage/conduite-intentions-continuite-cognitive-nora-studio.md` approuvé en contenu le 10/11 (déjà présent dans main, malgré une métadonnée historique indiquant candidate).
- `conception-fonctionnelle/README.md` et les spécifications propriétaires R2 applicables ; `ux-ui/contrat-transposition-figma-code.md`, `ux-ui/audit-couverture-ux-r3.md` ; `architecture-technique/cadrage-r4.md`, `architecture-technique/contrat-observabilite-transverse.md`.
- `construction/reference-delivery-r5.md` §4 pour la traçabilité ; `construction/reconciliation-produit/README.md`, annexes ML1–ML4 et `transversal/synthese-r1-e2e-gate-b.md` ; recettes propriétaires des ML1–ML4, notamment le registre ML4 R01–R14.

**Photographie du diagnostic ML4B :** 628 identifiants RG/PF indexés, dont des compléments candidats distincts ; sept E2E R1 et 43 étapes nominales **rapprochées des sources**, non 43 étapes prouvées end-to-end. Huit familles de constats X-01..X-08. Des preuves déterministes/PG/BROWSER FAKE/LIVE/REAL historiques existent à divers SHA ; elles ne constituent pas une recette complète sur le même build.

**À ne pas confondre :** anomalie confirmée par source ou LIVE, lacune de couverture, hypothèse de cause, fonctionnalité encore hors ML4, et demande d'évolution non validée. Aucun verdict de `BEHAVIOR PROVEN` ou `ADOPTED` global ne découle de ce dossier.

## 3. IN / OUT et responsabilités

### IN — convergence ML4C

- **D1/D2 :** accès/session, portefeuille et cockpit, projets et états sincères, préparations OPEN, sas, proposition, création sur acte explicite, continuité et reprises, isolation inter-Pilotes, erreurs et navigation nécessaire à l'usage.
- **D3/D4 :** conduite cognitive des intentions, raisonnement, mémoire et sélection de connaissances pertinentes, documents/versions, vérité du résultat applicatif, continuation de mission et restitution.
- **D5/D6 :** trajectoire/cycles/méthode/CKI selon les contrats applicables, décisions humaines et mandats, suspension, reprise, refus et incertitude.
- **D7/D8/D9 dans la limite du ML4 construit :** consultation et provenance Git autorisées, préparation et publication **documentaire** gouvernée, preuves vérifiables et absence de faux résultat ; cas de droits retirés, HEAD changé, ACK perdu et non-duplication selon autorisation de test REAL.
- **Transverse :** UX fonctionnelle des parcours (dont cockpit, sas et documents), erreurs, observabilité utile à l'investigation, sécurité/ownership, intégrité, idempotence, architecture/doc/tests synchronisés ; scénarios nominaux et négatifs.

### OUT — sans décision distincte

- Convergence de finition UX/UI globale et certification générale de fidélité Figma : **ML4D** (mais aucune UX fonctionnelle bloquante n'est différée automatiquement).
- Réalisation technique par Cursor du **ML5** (R1 E2E05/E2E06 dans leur portion Cursor non implémentée) ; second moteur d'autorisation/exécution, refonte générale non motivée.
- Merge Git REAL actuellement hard-blocked, sans arbitrage Morris spécifique ; connexion de fournisseurs Git supplémentaires, capacités non prévues par les contrats ou nouveaux écrans métier sans autorisation.
- STABLE, release, adoption, modifications de SEF/R1/R2/R4 normatives par déduction ; PR/merge Git, push projet ou GO Cursor non explicités.

### Répartition des responsabilités

| Acteur/propriétaire | Responsabilité dans le lot |
| --- | --- |
| Morris | Fixer criticité et périmètre, accepter Gate B et CP2, trancher extensions et réserves, décider GO techniques et réception intermédiaire. |
| ChatGPT | Confronter sources/contrats/preuves, challenger les causes, proposer architecture et scénarios, reviewer les packs Cursor, garder la traçabilité. |
| Cursor | Inspecter état local Git avant intervention, implémenter sous un contrat SFIA v2.6 validé, fournir tests, preuves et documentation synchronisée. |
| D1–D9 / Studio | Conserver propriétaire unique pour sessions, création, cognition, D4, cycles, HumanDecision, effets, preuves et Git. |
| Nora (produit) | Conduire cognitivement une intention sans prendre les effets ou autorisations des domaines. |

## 4. Méthode en quatre temps — sorties et critères

| Temps | Travail | Sortie nécessaire | STOP / gate |
| --- | --- | --- | --- |
| **T1 — Qualifier** | Partir des sources et des preuves ML4B ; classer chaque constat (`CONFIRMED`, `PROOF GAP`, `RISK`, `CANDIDATE CHANGE`, `OUT`) ; relier RG/PF, E2E, résultat utilisateur, propriétaire, risque et priorité. | Contrat de capacités / matrice d'acceptation candidat CP2, sans liste de micro-correctifs. | Gate B non accepté : CP2 reste candidat et aucun build. |
| **T2 — Expliquer** | Lire les flux code/API/états/DB/UX pertinents ; reproduire uniquement les cas discriminants ; distinguer preuve antérieure, cause présumée et cause confirmée ; mesurer le blast radius. | Diagnostic causal et options de correction par responsabilité, plus contrat d'interface/error/reprise proposé. | Si effet, droits, données ou architecture changent substantiellement : arbitrage Morris préalable. |
| **T3 — Converger** | Modifier par capacités cohérentes ; associer code+tests+docs+UX nécessaire dans les mêmes livraisons ; intégrer et revalider les interfaces partagées. | Comportements implantés et régressions contrôlées, statuts `IMPLEMENTED`/`COVERAGE VERIFIED` distincts. | GO Cursor/SFIA v2.6 séparé, pré-check local et branches/pack/handoff ; aucune mutation non autorisée. |
| **T4 — Prouver** | Jouer les scénarios Pilote intégrés sur SHAs/lanes fixés, avec réelles décisions/effets ou limitations bornées ; comparer aux oracles, observer les reprises, qualifier les réserves. | Dossier de réception intermédiaire ML4C, sans déclarer ML4D/F2-G5 globalement acceptés. | Morris décide résultat/réserves, GO ML4D distinct ; Gate C final après ML4D. |

**Règle de preuve :** `DETERMINISTIC ≠ PG/API ≠ BROWSER ≠ LIVE Nora ≠ REAL Git`. Un test `NOT RUN` n'est ni `PASS` ni `FAIL`. Un succès d'API D4 ne prouve pas que Nora l'a correctement interprété. Des scénarios combinés peuvent couvrir plusieurs RG/PF ; aucune exigence de 628 tests isolés.

## 5. Registre de qualification initial — sans arbitrer les causes

| Repère CP1 / constat | Qualification initiale | Risque utilisateur | Traitement proposé avant choix technique |
| --- | --- | --- | --- |
| **D1-GAP-01**, statut portefeuille par index | **CONFIRMED SOURCE** (`portfolio/page.tsx`, `statusForProject`) | États projets inventés | Rattacher à `RG-ACC-013` et vérifier la source métier réellement disponible ; définir la présentation honnête, tests portefeuille/reprise. |
| D1/D2 erreurs 401 non-auth, état session/cookies | **SOURCE GAP / RESILIENCE PROOF** | Mauvaise explication ou déconnexion abusive ; isolation incertaine | Séparer erreurs DB/service/auth, test injecté API/BROWSER, refus Pilot B ; ne pas inventer collision réelle. |
| D2-GAP-02 et A05 : réponse de création perdue | **SOURCE GAP + PROOF GAP** | Projet créé mais reprise UI trompeuse ou bloquée | Tracer commande/fingerprint/DB/ACK et `reconcile` depuis le navigateur, double-clic/refresh sans duplication. |
| D2-GAP-03/04 : propositions concurrentes, préparation/conversation hors transaction | **RISK SOURCE** | Perte d'évolution ou préparation incomplète | Qualifier reproduction/concurrence/atomicité avant de choisir CAS ou transaction supplémentaire. |
| **X-01 / ML4-REC-08** : D4 `REVISE AVAILABLE` alors que Nora nie la sauvegarde ; CREATE/REVISE ambigu | **LIVE FAIL HISTORIQUE** | Service non fiable, intention interrompue/état déformé | Corréler intention→qualification→D4→résultat→continuation→texte affiché au même SHA ; séparer cause du routing, narration et UX. |
| **X-02** : mémoire, pertinence et raisonnement | **PROOF GAP / LIMITATION CODE LEXICALE** | Réponse oublie le bon acquis, point ouvert ou décision | Corpus contrôlé (reformulation, sources contradictoires, décision actuelle/périmée) ; comparaison LIVE et sources effectivement choisies avant nouvel index. |
| **X-03** : pending et continuité | **SOURCE GAP + NEGATIVE PROOF GAP** | Nouvelle question indépendante bloquée ; travail repris de travers | Vérifier pending métier, ownership/fencing, reprise de mission et possibilité de conversation indépendante. |
| **X-04** : publication Git USER R12–R14 | **NOT RUN / E2E INCOMPLETE**, malgré API REAL antérieure | Publication annoncée sans commit/PR inspectables | Préparer scénario sur dépôt sandbox et droits autorisés : diff, HumanDecision, branch/commit/PR, relecture et restitution ; exécution REAL sous GO distinct. |
| **X-05** : droits et sûreté des refus | **PG BORNÉ / NEGATIVE REAL NOT RUN** | Mutation non autorisée ou fuite | Refus 403/revocation à l'effet, projet B/dépôt partagé, source hostile, HEAD changé ; ne pas présumer bypass réel. |
| **X-06** : UX fonctionnelle et fidélité Figma | **UX LIVE GAP / F2-G5 NOT RUN** | Sas et documents confus, interactions incomplètes | Corriger les parcours UX bloquants dans ML4C ; référencer et différer à ML4D les finitions et comparaisons globales Figma. |
| **X-07** : erreurs, observabilité, streaming, restore DB | **SOURCE / PROOF GAP selon sous-cas** | État incertain invisible, récupération mal expliquée | Placer l'observation dans les scénarios propriétaires ; restore, multi-lane et streaming avec réserves et exit explicités, selon criticité décidée. |
| **X-08** : merge REAL hard-blocked et frontière Cursor | **KNOWN OUT / DECISION PENDING** | Faux sentiment de couverture complète | Maintenir `OUT` tant qu'aucun mandat Morris ne change la frontière ; n'exiger aucun E2E Cursor de ML4C. |

**Criticité candidate, non décision :** examiner d'abord la vérité des effets et des autorisations, les pertes d'ACK, les blocages de continuité et les statuts fictifs, puis la pertinence cognitive, la complétude du parcours Git documentaire et l'UX fonctionnelle. Ordre technique à établir à T2 selon dépendances et risques, pas d'après la seule gravité perçue.

## 6. Trois ensembles cohérents de réalisation candidats (au sein du seul ML4C)

Ils **ne sont ni trois macro-lots administratifs obligatoires ni trois moteurs indépendants**. Ils forment un seul résultat ML4C, avec intégration et recette commune. Les frontières sont les responsabilités et dépendances réelles.

### Ensemble « Entrer, préparer, créer et retrouver » — D1/D2 avec D3/D4

- **Résultat :** accès valide au cockpit, portefeuille fidèle aux faits, reprise d'un sas ouvert, travail Nora avant projet, création sur geste explicite, transfert du même fil, document conservé, retour au projet après rupture/session.
- **Entrées:** ML1 A01–A16 ; R1 E2E01 ; R2 D1/D2 ; données de session, APIs portefeuille et préparation, documents et conversation ; UX de navigation et états d'erreur.
- **Exceptions centrales :** Pilot B/interprojet, session expirée, panne DB 500/503 non classée en 401, double-clic et ACK perdu, erreur entre insertions, proposition concurrente, nouveau projet sans cycle ni Git implicite.
- **Sortie :** projet et préparations réels, pas d'état inventé, reprise sans doublon, erreurs interprétables ; QA PG/API/BROWSER + LIVE Nora seulement où utile.
- **Dépendance :** résultats véridiques D2/D4 transmis au prochain ensemble ; aucune mutation de D5/D6 déduite d'une création.

### Ensemble « Conduire, mémoriser et poursuivre une intention » — D3/D4/D5/D6

- **Résultat :** Nora comprend le travail, mobilise Studio, exploite l'effet réel D4 et les décisions D5/D6, poursuit la mission, retrouve les sources pertinentes et restitue une réponse factuellement cohérente après reprise.
- **Entrées :** R1 E2E02–04 selon parties construites ; R2 cognition, connaissance, cycles, décisions ; cadrage Nora/Studio du 10/11 ; ML2 Q01–Q29 et COG, ML3 B01–B18/T01–T08/C03.
- **Exceptions centrales :** CREATE vs REVISE, ACK D4 AVAILABLE/FAILED/UNKNOWN, source absente ou devenue périmée, décision opposable, longue conversation, changement de session, pending actif et question indépendante, droit retiré pendant la génération.
- **Sortie :** oracles cognitifs qualitatifs et d'effets, sources/version consultables, continuation après résultat, absence d'autorisation simulée ; tests déterministes/PG plus **LIVE** sur corpus représentatif.
- **Dépendance :** contrat partagé de résultat observé et de reprise utilisé pour la publication Git ; éviter une nouvelle machine à états globale par défaut.

### Ensemble « Produire et publier sous gouvernance » — D4/D6/D7/D8/D9 + Nora

- **Résultat :** dans une intention unique, créer/réviser un document D4, préparer un Git diff réel, requérir la décision applicable, publier sous permissions réelles, vérifier les références et rapporter un résultat précis.
- **Entrées :** R1 E2E07 et portions ML4 des E2E05/06 ; R2 D4/D6–D9 ; recettes ML4 AT01–22 et USER R12–14 ; référence Nora/Studio.
- **Exceptions centrales :** HumanDecision refusée/absente/révoquée, base/HEAD modifié, dépôt partagé/projet B, source hostile, timeout/ACK perdu, doublon/PR fantôme, permission retirée, effet Git non confirmé.
- **Sortie :** sur dépôt sandbox et **GO REAL spécifique**, preuve provider + API/DB + BROWSER + Nora LIVE pour le parcours complet ; factuel Git `branch/commit/PR`, refus sans mutation, reprise sans deuxième effet. Le merge REAL reste hors portée sans décision spécifique.
- **Dépendance :** oracles de vérité/continuation de l'ensemble précédent ; les propriétaires D6–D9 conservent intégralement leurs invariants.

## 7. Parcours d'acceptation candidats (oracles, pas résultats)

| Scénario | Parcours utilisateur et oracles minimums | Niveau de preuve exigible à arbitrer | Couvre |
| --- | --- | --- | --- |
| **S01 — Entrée et cockpit** | Session active → portefeuille personnel ; vrais projets et préparations OPEN ; statuts non fabriqués ; refus Pilot B ; sortie/reconnexion et lien profond. | API/PG + BROWSER ; OAuth LIVE lorsque nécessaire | D1, E2E01, D1-GAP-01, X-07 |
| **S02 — Sas et création** | Préparation → échange Nora → proposition révisable → clic explicite → projet unique → fil/doc conservés ; ACK perdu, refresh, double commande sans duplication. | PG + BROWSER + Nora LIVE ciblé | D1/D2/D3/D4, E2E01, X-03 |
| **S03 — Document vrai et suite de mission** | Pilote demande création puis révision ciblée ; D4 retourne identifiant/version/état ; Nora confirme exactement les actes et poursuit l'intention ; cas FAILED/UNKNOWN sans fausse réussite. | PG/D4 + BROWSER + Nora LIVE au même SHA | X-01, X-03, E2E03/04 |
| **S04 — Mémoire et décision** | Après plusieurs sujets/sessions, Nora retrouve une information ancienne reformulée et la décision en vigueur, résout la contradiction avec provenance et limite explicite. | PG corpus + Nora LIVE + jugement utilisateur qualitatif | X-02, D3/D4/D5/D6, E2E03/04 |
| **S05 — Pending et interruption** | Une décision/commande attend ou produit UNKNOWN ; question indépendante possible ; reprise du travail d'origine sans autoriser, doubler ou oublier des effets. | UNIT/PG + BROWSER + LIVE selon scénario | X-03/X-07, D2/D3/D5/D6 |
| **S06 — Mission Git gouvernée** | Nora produit D4 → D7 prépare diff → D6 HumanDecision → D9 mutation Git autorisée → D8 résultats inspectés → Nora restitue et continue ; refus/révocation/HEAD/ACK négatifs. | PG + BROWSER + REAL provider sandbox + LIVE, sous GO distinct | X-04/X-05, E2E07, ML4 R12–14 |
| **S07 — Régression de frontière et UX fonctionnelle** | Parcours ML1–ML4 traversent les surfaces accessibles sans action fictive ; navigation, sauvegarde, refus, erreurs et retours lisibles ; pas d'effet Cursor/merge implicite. | BROWSER, API/PG, Figma ciblé si écran fonctionnel modifié | X-06/X-08, frontières R3/R4 |

Pour chaque scénario, garder des **oracles nominaux et négatifs non dépendants d'une formulation exacte de Nora** : capacité réelle, source employée, précision des effets, autorité, continuation et restitution. Un succès de rédaction ne compense pas un faux succès métier. **F2/G5 global** et alignement complet de tous les écrans relèvent de ML4D ; le rendu fonctionnel des scénarios S01–S07 reste dans ML4C.

## 8. T2 — qualification causale et blast radius avant GO Cursor

Le contrôle causal n'est **pas** une refonte d'architecture par défaut. Examiner par écart prioritaire :

1. Entrée exacte et intention Pilote ; identité du projet, de la préparation et du tour/génération.
2. Contrat R2 et comportement R1 applicable, y compris décision modificative ultérieure.
3. Appel métier propriétaire D1–D9 et préconditions, droits, versions, corrélation, `UNKNOWN`.
4. Persistance DB, événement observable, réponse API, ACK/timeout, réponse cognitive et rendu UI.
5. Cause racine : `CONFIRMED` si démontrée, sinon `HYPOTHESIS` avec test discriminant ; ne pas masquer une cause par du wording.
6. Choix minimaux, interfaces impactées, plan de regression, sécurité et données : *blast radius API/DB/authority/UX/security/tests*.
7. Réversibilité et dette/exit, avec STOP si autorité ou modèle de données change sans décision.

**Déjà inspecté sur main :** `web/src/app/portfolio/page.tsx` contient `statusForProject` et l'appelle pour chaque projet ; `web/src/domains/pilotage/thread-recovery.ts` contient `mayStartNewThreadAct`, qui refuse un message différent tant qu'un `pending` non résolu existe ; `web/src/domains/conversation/service.ts` contient des points de qualification D4 et de continuation Nora. Ces lectures **orientent l'investigation**, elles ne démontrent pas toutes les causes racines ni le comportement utilisateur au même build.

## 9. Intégration, ordre candidat et prévention des régressions

**Séquence recommandée à soumettre à Morris :**

- **Fondations de vérité et de reprise** à stabiliser sur les contrats existants : états de projet, session/erreurs, D2 ACK et reprise, D4 résultat → Nora ; aucune reprise cognitive fiable si le résultat est imaginaire.
- **Cognition, mémoire et pilotage** : utiliser les contrats de vérité sans créer de second moteur, qualifier la valeur utilisateur, tester les décisions et interruptions.
- **Publication Git documentaire** : intégrer D4/D6–D9 et Nora dans un trajet unique ; préparer la recette REAL et les négatifs ; n'exécuter aucun effet fournisseur sans GO.
- **Régression ML1–ML4 combinée et réception intermédiaire** : retester les parcours qui partagent des interfaces, plus les flux nominaux que les corrections peuvent perturber.

**Ce n'est pas une planification de micro-tâches ou un ordre irréversible.** Si T2 révèle que les interfaces sont partagées ou qu'un correctif doit être intégré plus tôt, regrouper. Parallélisme uniquement si responsabilités, fichiers, schémas, oracles et intégrateur sont fixés ; tests d'intégration communs au point de convergence.

**Critères de STOP :** cause non établie sur un comportement critique ; contradiction R1/R2/decision ; changement d'autorité, persistance ou sécurité non arbitré ; absence de source Figma pour UX fonctionnelle modifiée ; fournisseur REAL sans mandat ; extension fonctionnelle nouvelle ; preuves insuffisantes pour affirmer PASS ; détérioration d'un invariant existant ; production d'un moteur concurrent.

## 10. Préparation du Gate B et du futur contrat CP2

**Gate B est distinct du présent GO de préparation.** Avant de convertir ce dossier en contrat CP2 validé :

| Arbitrage Morris à présenter | Proposition de position | Statut actuel |
| --- | --- | --- |
| **B1 — Recevabilité de CP1** | Accepter le diagnostic comme base de convergence avec limites de preuve, ou demander seulement les compléments empêchant une décision responsable. | **OPEN** |
| **B2 — Périmètre ML4C** | Couvrir ML1–ML4 intégrés et l'UX fonctionnelle, en regroupant les constats par résultat utilisateur ; ne pas rouvrir les anciennes clôtures. | **Orientation validée en contenu, Gate B pas tenu** |
| **B3 — Priorité / risque** | Traiter d'abord les mensonges d'état/effet, autorité, blocages de continuité et cas de non-idempotence ; proportionner le reste aux risques et à la valeur. | **À VALIDER** |
| **B4 — Git REAL/merge** | Publication documentaire REAL en sandbox seulement sous mandat explicite ; merge REAL bloqué / hors scope par défaut. | **À VALIDER** |
| **B5 — ML4C vs ML4D** | UX nécessaire dans ML4C, fidélité et homogénéité globales dans ML4D ; préparation de la cible UX mais pas chantier shell-first. | **Orientation validée en contenu sur branche candidate** |
| **B6 — Réserves et dette/exit** | Chaque différé doit avoir propriétaire, risque, condition de sortie, étape suivante et interdiction de faux PASS. | **À VALIDER** |

### Livrables candidats CP2 à consolider sans duplication documentaire

- **Un seul contrat d'acceptation intégré** : objectifs/IN-OUT, matrice risque-couverture, scénarios S01–S07 revus, impacts/interdépendances, critères de résultat, intégrateur et dépendances ML4D/ML5/R6.
- **Un diagnostic causal ciblé** pour les anomalies bloquantes et risques non déjà résolus ; références exactes au code/DB/observabilité et aux preuves historiques.
- **Un plan d'exécution et de preuve** par ensembles cohérents (sans nouvelle méthode de cycle ni template SFIA v2.6), avec gate Morris préalable, tests/négatifs et Review Pack complet.
- **Une qualification des réserves** : traitement ML4C, différé justifié ML4D ou R6, OUT ML5, extension soumise à Morris, ou absence de preuve qui doit être levée avant réception.

### Critère de réception intermédiaire ML4C proposé

> Les parcours et capacités ML1–ML4 retenus sont conformes aux exigences applicables et démontrés au niveau de preuve proportionné à leurs risques ; aucun écart critique non arbitré ne compromet la vérité des résultats, l'autorité du Pilote, la continuité du travail ou l'utilisation normale du produit. Les limitations et preuves restantes sont explicites, attribuées et assorties d'un exit. Cette réception **n'est pas** l'acceptation finale UX/UI ni le Gate C du programme.

**Capacité suivante :** sur décision Morris, construction ML4C par Cursor et réception intermédiaire, puis ML4D UX/UI global, **Gate C final**, ML5 Cursor et R6. Aucun GO sur ces étapes n'est accordé par ce document.

## 11. Trace de préparation et accès aux sources

- Git `main@42aa373947446a8c20694b06c559ee0da1cba580` : https://github.com/mcleland147/sfia-workspace/tree/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next
- Décision ML4C/ML4D (branche candidate `5717b6c`) : https://github.com/mcleland147/sfia-workspace/blob/5717b6c938288404f71c9281f1c92be99a51fb89/projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md
- Diagnostic CP1 : https://github.com/mcleland147/sfia-workspace/blob/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next/construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md
- Conduite Nora/Studio : https://github.com/mcleland147/sfia-workspace/blob/42aa373947446a8c20694b06c559ee0da1cba580/projects/sfia-studio-next/cadrage/conduite-intentions-continuite-cognitive-nora-studio.md
- Contrat SFIA externe : **SFIA v2.6**, à lire depuis Git (routing + template) **avant** tout prompt Cursor ; aucun prompt n'est généré ici.

**Statut final de ce livrable :** `PREPARATION CP2 CANDIDATE / SOURCES GIT QUALIFIED / NO NEW TEST RUN / NO BUILD / GATE B OPEN / DOCUMENTARY CANDIDATE BRANCH / NO PR / NO MERGE / NO ADOPTED`.
