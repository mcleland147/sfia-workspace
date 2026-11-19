# SFIA Studio Next — Ensemble 06 / Journal
## Matrice vivante de convergence — vision, contrats, UX, réalisation Cursor et preuves

**Version :** v0.1 — 19 novembre 2026 (Europe/Paris)  
**Statut :** **DOCUMENTED / REVUE D1 CANDIDATE — NOT READY FOR GLOBAL RECEPTION / SCOPE INCOMPLETE**  
**Périmètre :** Journal du projet : Sujets, mémoire, points ouverts, Décisions, recherche, sources et continuité Nora. La Bibliothèque Documents reste propriétaire de sa propre expérience ; seuls les liens depuis le Journal entrent ici.  
**Autorité de la vision et des gates :** Morris. **Rôle du présent document :** outil de revue ChatGPT, sans créer de doctrine, de décision D6, de nouvelle spécification produit ni de statut ADOPTED.  
**Mode Git :** création documentaire sur la branche candidate **sfia/next-journal-conception-fonctionnelle-ux-20261119** ; pas de push produit, PR, merge, mise à jour de la Roadmap, migration ou code.  
**Référence de méthode :** [Matrice Ensemble 05 — v0.10](grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md). Nous en reprenons la discipline *vision → contrat → réalisation → preuve → réserve → gate*, **sans importer ses identifiants C-01…C-22, ses décisions d'architecture ou ses preuves de Travail**.

> **Contrat d'usage pour les revues suivantes :** relire cette matrice *avec les sources Git et le handoff reçu*, contrôler chaque J-C01…J-C16, distinguer précisément **code observé, résultat Cursor déclaré, test réellement vérifié, comportement démontré et acceptation Morris**, puis mettre à jour les statuts **sans réécrire le passé**. Ce document n'est jamais la preuve à lui seul de ce qu'il évalue.

---

## 1. Conclusion courante — premier handoff Journal du 19/11/2026

**Verdict de revue ChatGPT : NOT READY — SCOPE INCOMPLETE / REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING.**

Le premier handoff Cursor [03eda7e8](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md), blob **f0d1265bd6bc009dad56a99ff32c50474b9618d6**, déclare un **socle local Journal V4** : migration additive 014, stockage de révisions de synthèses et d'explications, identité/parentage D4, lecture projet inter-préparations, API Journal, onglets et recherche, consultation 40/60 et agrandie. Il rapporte **TypeScript PASS** et **six tests PG PASS**, sans exécution BROWSER ni LIVE Nora.

**Ces éléments sont des résultats déclarés, pas un code produit contrôlé indépendamment** : le candidat **sfia/next-journal-delivery-20261119@78c3c3b0007b6bf67ef6e92f15241d44cd2ab752** est indiqué **local seulement**, non publié sur GitHub. L'état exact des fichiers locaux (staged/untracked) n'est pas inspectable par ChatGPT depuis ce Git distant. La migration 014 est reproduite dans le handoff, mais son exécution DEV, ses logs et ses résultats précis sont non vérifiés indépendamment.

**Couverture déclarée sur les seize J-C canoniques :**
- **4 NOT IMPLEMENTED** : J-C04, J-C06, J-C13, J-C14 ;
- **11 PARTIAL** : J-C01, J-C02, J-C05, J-C07, J-C08, J-C09, J-C10, J-C11, J-C12, J-C15, J-C16 ;
- **1 IMPLEMENTED par affirmation de code uniquement** : J-C03, **sans test d'API ou de comportement navigateur** ; son niveau indépendant reste non prouvé.

**Interprétation produit :** des fondations techniques utiles sont annoncées, mais la **mémoire réellement vivante, la provenance/contradiction, le retour au message exact et les références documentaires** ne sont pas livrés dans cette première étape. L'écran V4 rapporté ne peut pas être reçu comme expérience conforme sans BROWSER/Figma-runtime, tests d'intégration et contrôle des données réelles. La vision fonctionnelle v1.0, la conception D4 en domaine existant et les onze maquettes sont **conservées, non rouvertes**.

**Gates :** aucun push projet / PR / merge d'après Cursor ; Git distant confirme **main@d3d199adb782462b93467934f5f1e8a0c98fb492** et branche documentaire candidate **6879d34eb38fbd1d8f899c6f8713ccc98f0ae178** à cette revue. Gate C OPEN selon Roadmap main ; **pas de réception Journal, pas de BEHAVIOR PROVEN global, pas de promotion, pas d'ADOPTED**. Une annonce « READY FOR MORRIS REVIEW WITH RESERVES » autorise une **revue**, pas une réception produit.

## 2. Sources, refs et niveaux de preuve

| Source | Ref réellement examinée | Statut et fonction |
| --- | --- | --- |
| [Vision produit R1](../../cadrage/vision-produit.md) §§2.10–2.13, E2E 04 | main@d3d199ad | **Vision validée** : autonomie de Nora, sujet évolutif, deux vues, questions non perdues, multi-sources. |
| [R2 D4 — connaissance](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) et [R2 D3](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) | main@d3d199ad | **Contrats validés** : RG-KNOW et frontières du raisonnement, provenance, reprise. |
| [R2 D6 — décisions](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) | main@d3d199ad | **Autorité** : décisions/mandats/restrictions, état opposable et historique. |
| [R3 — espace projet et Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md) | main@d3d199ad | Navigation Projet/Travail/Journal, conservation du contexte, références/retour et droits. |
| [R4 — architecture](../../architecture-technique/cadrage-r4.md) et [décision d'exit R4](../../governance/decisions/2026-11-04-r4-architecture-exit.md) | main@d3d199ad | D1–D9, données et domaines propriétaires ; pas de moteurs concurrents. |
| [R5 — décision ML4C/ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md), [SEF](../../governance/SEF.md), [Roadmap](../../governance/roadmap.md) | main@d3d199ad | Frontière convergence UX / extension fonctionnelle ; méthode, preuves, autorisations et gates. |
| [Contrat Journal fonctionnel/UX v1.0](journal-contrat-fonctionnel-ux-candidat.md) | branche documentaire @6879d34e, **VALIDATED SPEC Morris** | Résultat Pilote, comportement attendu, états Figma V4 ; **source de lecture prioritaire du périmètre**. |
| [Contrat technique Journal v0.3](contrat-technique-journal.md) §16 | branche documentaire @6879d34e, **candidat** ; principe d'évolution interne D4 validé | Architecture, interfaces et **IDs J-C01…J-C16 canoniques**. Un détail technique candidat ne supplante pas R1/R2 ni une décision Morris. |
| [Figma Journal page 07](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-2) | 11 maquettes v1.0 approuvées le 19/11 | **Contrat de conception UX**, pas écran runtime ni preuve BROWSER. |
| [Premier Review Handoff](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md) | commit **03eda7e8ffbed23917850befb9cfa676ab18b670** ; blob **f0d1265b…** | **Handoff distant vérifié**, contenu source des déclarations Cursor. Son nom « FULL » ne garantit pas que les diffs complets sont présents. |
| Candidat code et preuves locales | local annoncé **78c3c3b0…**, base doc **6879d34e…** | **NON OBSERVÉ DIRECTEMENT** : pas de branche produit poussée, pas de code/diff local complet ni logs PG/PNG/BROWSER examinables via ce Git. |

**Échelle de qualification :** DOCUMENTED (contrat) → VALIDATED SPEC (Morris) → IMPLEMENTED (code inspecté à SHA) → COVERAGE VERIFIED (oracles exécutés et vérifiés) → BEHAVIOR PROVEN (parcours observé dans des conditions explicites) → ADOPTED (acte Morris). Les mentions PARTIAL / NOT IMPLEMENTED de Cursor sont des **statuts rapportés**, distincts d'une validation indépendante.

**Distinction des environnements :** PG DEV annoncé ≠ API/BROWSER ≠ LIVE Nora ≠ REAL Git ≠ RECETTE ; TypeScript PASS ne prouve ni scénario fonctionnel ni UX. Un écran Figma validé n'est pas un comportement runtime démontré. Les huit UAT de composition d'Ensemble 05 **ne prouvent pas** Journal Ensemble 06.

## 3. Règles permanentes de convergence

1. **La vision prime.** Ne pas supprimer, réduire ou repousser implicitement une exigence R1/R2 ou v1.0 pour correspondre au code existant. Un changement de vision ou une dette assumée nécessite Morris.
2. **D3 / D4 / D6 restent distincts.** D3/Nora retrouve, qualifie et rédige ; D4 organise, versionne et sert la connaissance et les documents ; D6 est l'unique propriétaire des HumanDecision et restrictions. La nouvelle capacité enrichit D4, **pas un moteur bis**.
3. **Une seule mémoire de projet.** Le sas peut avoir sa provenance ; le Journal retrouve les connaissances autorisées du projet et les échanges pertinents sans recopie de documents, duplication du fil ou fusion abusive par titre.
4. **Synthèse ≠ verbatim.** Un sujet et une décision sont expliqués par une reconstruction cohérente, contextualisée et sourcée, y compris si le passage déterminant est ancien. Une motivation incertaine reste qualifiée comme telle.
5. **Statut de réalisation ≠ statut de preuve.** Un « IMPLEMENTED » rapporté sans lecture du code ou un test isolé ne devient pas COVERAGE VERIFIED. Un résultat NOT RUN reste visible.
6. **Recherche et rangement sont deux contrats.** Un arbre correct n'établit pas qu'un contenu est retrouvable ; la recherche doit fonctionner sur connaissance capitalisée et rester honnête sur sa couverture.
7. **Dégradation fidèle.** Source absente, décision remplacée, restriction D6 ACTIVE, question ancienne, échec de persistance et absence de données ne doivent pas produire de succès fictif, d'oubli silencieux ou d'autorité inventée.
8. **Revue à chaque handoff, pas uniquement à la fin.** Actualiser les seize lignes stables, leur preuve, leur dette/exit, l'intégrité du pack et le verdict ; ne pas considérer le résumé Cursor comme le résultat produit.
9. **Un macro-lot cohérent.** Corriger ensemble le domaine propriétaire, l'API, l'UX, les tests et l'as-built lorsque liés. Scinder uniquement si une dépendance/autorité/gate réel impose une frontière.
10. **Jamais de promotion implicite.** Une matrice D1 et un handoff L3 n'autorisent ni push projet, ni PR, ni merge, ni Gate C, ni ADOPTED ; chaque effet suit son gate Morris.

## 4. Matrice de convergence canonique — J-C01 à J-C16

**Mode de lecture :** « Cursor » = ce que **déclare le handoff du 19/11** ; « revue » = qualification **sur source handoff**, pas audit du commit local ; « sortie » = oracle réellement exigé par le contrat v0.3. Aucune ligne n'est soldée par une intention ou un fichier seul.

### A. Mémoire, sujets et continuité — D3/D4

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C01** | Synthèse éditoriale feuille/parent **durable, contextualisée, versionnée et sourcée** ; correction sans perte d'histoire, actualisation sélective. | PARTIAL : révisions de synthèses dans journal.ts, migration 014, PG PASS déclaré. | **PARTIEL RAPPORTÉ / NON VÉRIFIÉ EN CODE** ; stockage ne prouve pas production/révision autonome par Nora. | Examiner service entier/DDL, provenance, source/version, comparaison de révisions, retry ; test PG de correction + génération contextualisée, zéro écriture pour bruit. |
| **J-C02** | Nora peut organiser, rapprocher, scinder, fusionner, reparentager ; feuille→parent sans perdre ID, sources ni enfants. | PARTIAL : reparent et ensureSubject parent-aware, PG PASS déclaré. | **PARTIEL RAPPORTÉ** ; pas de preuve de conduite autonome, cycles, homonymes sous parents distincts, fusion et perte d'enfants. | Tests PG des transitions, homonymes, cycles/parents étrangers, transferts d'acquis/points et référence après scission/fusion ; preuve D3 de sélection sémantique. |
| **J-C03** | Acquis et questions restent reliés au sujet d'origine jusqu'à la fiche et à la navigation. | IMPLEMENTED annoncé : page.tsx conserve subjectId ; **aucun test** associé. | **CODE RAPPORTÉ / COVERAGE NOT VERIFIED**, pas « entièrement reçu ». | Inspecter DTO/route/UI, tester API+BROWSER clic et retour, sujet après déplacement, source de bon projet. |
| **J-C04** | Nora réactive opportunément une question ancienne non résolue, au-delà de la session/cycle ; ni oubli ni spam. | **NOT IMPLEMENTED** annoncé. | **MANQUANT**, pas seulement preuve LIVE manquante. | Implémentation D3/D4 et tests PG + scénario de reprise multi-sessions ; LIVE borné si autorisé, avec rappel pertinent et absence de rappel systématique. |
| **J-C05** | Fait résolu sur source suffisante ; historique et réouverture possibles ; réserve/suspension D6 intacte. | PARTIAL : resolve/reopen, PG PASS déclaré. | **PARTIEL RAPPORTÉ** ; frontière D6 à contrôler en négatif. | PG avec source insuffisante, réouverture, restriction ACTIVE malgré clôture factuelle, audit source/date/acteur et API. |
| **J-C06** | Vérifier source/version/portée, état actuel vs historique, contradictions, Git main vs candidate, droits et incertitude. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; bloque fiabilité cognitive. | D3/D4 vérifient sources discordantes et retirées ; tests de branche/ref/SHA, source périmée, preuve D8 vs déclaration ; aucune assertion actuelle injustifiée. |
| **J-C07** | Journal et Nora retrouvent les connaissances **du même projet** entre préparations autorisées, avec isolation stricte. | PARTIAL : listProjectKnowledge ; **pas de test identifié**. | **PARTIEL RAPPORTÉ** ; scoping projet/préparation à éprouver. | PG+API : deux préparations du même projet et une autre identité/projet ; aucune fuite dans liste, recherche, compte, extraits et accès profond ; aucune copie D4. |

### B. Recherche, décisions et gouvernance — D4/D6

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C08** | Rechercher dans titres, synthèses, acquis et points ; filtre Points ouverts **transversal sans troisième onglet** ; chemin/raison du résultat. | PARTIAL : searchJournalSubjects + UI, PG PASS déclaré ; BROWSER NOT RUN. | **PARTIEL RAPPORTÉ**. | API/BROWSER terme absent du titre mais présent dans acquis, filtre combiné, chemin d'un sous-sujet, pagination, EMPTY/PARTIAL honnête et isolation. |
| **J-C09** | Décisions D6 réellement applicables, révisions, remplacements, restrictions et historique ; Journal en lecture sans autorité bis. | PARTIAL : decisions + restrictions read-only ; tests API/BROWSER non indiqués. | **PARTIEL RAPPORTÉ**, pas d'opposabilité prouvée. | PG/API pour acte actuel, remplacé, suspendu/restriction ACTIVE/LIFTED, droits et absence d'effet D6 de l'inspection ; BROWSER de badge pertinent. |
| **J-C10** | **Explication reconstruite** des choix du Pilote à partir de plusieurs sources, alternatives et motivations établies, distincte de l'acte D6. | PARTIAL : table/révisions d'explication et PG PASS déclaré ; LIVE NOT RUN. | **PARTIEL RAPPORTÉ** ; versionnement ≠ raisonnement réellement produit. | Comparer synthèse aux échanges longs ; citations exactes, alternatives, déductions explicites, source absente/contradictoire ; aucune HumanDecision créée ; PG + essai cognitif borné. |
| **J-C11** | Recherche **dans les décisions** et leurs explications accessibles, pas dans tous les messages ni tous les actes éphémères. | PARTIAL : searchJournalDecisions ; PG évoqué sans résultat par cas ; BROWSER NOT RUN. | **PARTIEL RAPPORTÉ**. | API/BROWSER sur acte D6 et motif lié, filtre par statut/portée, source périmée, recherche négative, droits et retour à la décision sélectionnée. |

### C. Parcours UX V4 et continuité réelle

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C12** | Deux onglets, Journal nominal → **40/60** → lecture agrandie → retour préservé, avec les **11 états Figma V4**. | PARTIAL : tabs, 40/60 et enlarge dans ProjectJournal ; **BROWSER et captures runtime NOT RUN**. | **PARTIEL RAPPORTÉ / VISUAL NOT PROVEN**. | Captures comparées pour 11 frames, vrai runtime 1680×970 puis 1280/reflow, clavier/focus, densité, chargements, erreurs, liste/filtres/restauration à l'identique. |
| **J-C13** | Un lien ouvre **le message exact** du fil Nora unique puis revient au Journal sans perdre sélection, brouillon ni envoyer de message. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; bloque le parcours fondamental de reprise. | BROWSER fil long (>1 000 messages) avec message ancien non chargé initialement, ancrage exact, refresh/retour et brouillon intact ; zéro auto-send. |
| **J-C14** | Références vers **document canonique et sa version**, droits revalidés ; jamais de copie documentaire indépendante. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; l'UX ne donne pas accès aux sources requises. | API+BROWSER docId/revision/source disponible puis retirée, renvoi Bibliothèque Documents, droits de lecture courants et erreur honnête. |

### D. Sûreté, qualification et livraison

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C15** | Transactions, idempotence, expectedRevision, ACK perdu, droits multi-Pilote/projet, performance et coût du long fil. | PARTIAL : operationId/expectedRevision + PG mentionné ; pas de preuve de charge/sécurité globale. | **PARTIEL RAPPORTÉ**. | PG/API concurrence/fault injection/ACK perdu, test droits interprojets et source retirée, recherche volumineuse, mesure latence/coût avec SHA/lane. |
| **J-C16** | Non-régression E05/ML2/ML3/ML4C, TypeScript/lint/build, docs as-built et contrôle de couverture complet. | PARTIAL : tsc PASS ; as-built + delivery-history annoncés ; PG six tests ; autres suites NOT RUN. | **PARTIEL RAPPORTÉ**, documentation créée non intégralement inspectée. | Typecheck/lint/build, suites anciennes pertinentes, BROWSER E05, vrai diff et as-built comparés au code, aucun nouveau gap silencieux. |

**Bilan numérique du premier handoff (statuts Cursor, non verdict de preuve) :** **1 IMPLEMENTED déclaré / 11 PARTIAL / 4 NOT IMPLEMENTED / 0 J-C entièrement vérifiés et reçus indépendamment**. **Aucun J-C absent de cette matrice.**

## 5. Couverture des onze maquettes et principaux parcours

| Famille V4 validée | Figma (node-id) | Contrat fonctionnel | Réalisation/préuve actuelle |
| --- | --- | --- | --- |
| Sujets : exploration | [835:71](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) | Découvrir le Journal et l'arbre | ProjectJournal V4 rapporté ; **BROWSER NOT RUN** |
| Sujets : sujet autonome 40/60 | [842:26](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26) | Consulter une feuille sans perdre l'arbre | Code rapporté ; **non comparé** |
| Sujets : parent 40/60 | [842:131](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131) | Synthèse parent et enfants | Synthèse parent **partielle** ; **non comparé** |
| Sujets : sujet autonome agrandi | [835:159](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) | Lecture approfondie réversible | Code rapporté ; **non comparé** |
| Sujets : parent agrandi | [835:239](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) | Parent approfondi, sous-sujets | Code rapporté ; **non comparé** |
| Recherche Sujets | [859:42](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42) | Retrouver et expliquer une correspondance | Backend/UI **partiels** ; **BROWSER NOT RUN** |
| Filtre Points ouverts | [859:146](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) | Points de plusieurs sujets, sans registre bis | Backend/UI **partiels** ; **BROWSER NOT RUN** |
| Décisions nominales | [860:58](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58) | Actes D6 officiels et états | Projection **partielle** ; **BROWSER NOT RUN** |
| Décision 40/60 | [860:136](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136) | Acte distinct de son explication | Explication **partielle** ; **BROWSER NOT RUN** |
| Recherche Décisions | [860:251](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251) | Requête et fiche sans quitter Journal | Recherche **partielle** ; **BROWSER NOT RUN** |
| Décision agrandie | [860:360](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) | Cheminement, alternatives, provenance et état | Narrative **partielle**, **non comparée** |

**Preuve de navigation transverse indispensable :** Journal → référence message/document → fil/ressource exact → retour avec position et brouillon ; un écran correct sans cette chaîne n'est **pas** une réception fonctionnelle.

## 6. WBS intégrateur — suite du même macro-lot Journal

| Travail cohérent | Déjà annoncé / à conserver sous vérification | Manquant ou à qualifier avant clôture | Condition de sortie |
| --- | --- | --- | --- |
| **Socle D4 : mémoire et intégrité** | Migration 014 et journal.ts, ensureSubject, révisions et open-point events, chargement inter-préparations | Identité/homonymes et cycles, provenance, concurrence, historique et liens réels ; 6 PG rapportés non ventilés par oracle | J-C01/02/03/05/07/15 en PG + API, avec DDL et code complets inspectables |
| **Conduite D3 : mémoire vraiment vivante** | Capitalisation et outils historiques existants de main, non reconstruits | Réactivation J-C04, contradictions/fraîcheur J-C06, production de synthèses/explications J-C01/10 | Tests négatifs, D3 avec contexte ancien, source contradictoire et bilan de coût/qualité |
| **Décisions D6 en lecture** | Projection décisions+restrictions et stockage d'explications annoncés | Statut applicable vs historique, revocation/suspension, sélection durable, explication riche et recherche | J-C09/10/11, D6 non modifié, PG/API + scénario de restitution |
| **Parcours Journal V4** | ProjectJournal annoncé : onglets, recherche, filtre, 40/60/agrandi | J-C13 message exact, J-C14 document versionné, tous les états BROWSER, a11y, responsive et retours | J-C08/11/12/13/14 avec captures Figma/runtime par scénario |
| **Intégration et qualification** | tsc PASS, PG 6/6 rapportés, as-built/delivery-history locaux annoncés | Code candidat non disponible à la revue distante, diffs complets absents, tests ML2/ML3/E05/BROWSER non exécutés | Review Pack Full exploitable, logs, captures, tests négatifs et J-C16 ; verdict indépendant |
| **Gate et réception** | Handoff L3 mono-fichier publié, sans push projet | Réserves J-C et pack incomplet, gate ML4D/effets structurants à vérifier | Morris statue sur périmètre et gate ; aucun push/PR/merge/RECETTE implicite |

**Règle anti-fragmentation :** le diagnostic, la correction du domaine, le raccordement UI, les tests et l'as-built doivent converger sur **un même résultat utilisateur** ; l'extension à la persistance respecte les gates applicables, sans maquiller une évolution D4 en simple polish ML4D. Une micro-livraison de maquettes ou de tables seules ne solde pas le Journal.

## 7. Contrat de preuves discriminant et intégrité du Review Pack

| Contrôle | État au premier handoff | Oracle restant |
| --- | --- | --- |
| **Git distant du handoff** | **REMOTE VERIFIED** : commit 03eda7e8, blob f0d1265b… ; code produit local non poussé. | Conserver cette distinction ; obtenir artefacts revue sans push projet non autorisé, ou revue locale contrôlée. |
| **Inventaire de modifications** | Diff stat reproduit **8 fichiers suivis** ; statut liste aussi API, migration, journal.ts, test PG et as-built **non suivis**. | Capturer l'ensemble des créations/edits, pas seulement git diff --stat, et preuves de leur intégration au commit local. |
| **Contenu inspectable** | Migration 014 **complète**, journal.ts **100 premières lignes seulement** ; absence des autres fichiers créés et diffs suffisants des modifications. | **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** ; produire les contenus/diffs selon SFIA v2.6 pour chaque création et modification pertinente. |
| **PG et migration** | six tests PG PASS et application DEV annoncés par Cursor ; **logs détaillés, fixture et vérification DB indépendante indisponibles**. | Commandes, SHA, nom de chaque test et assertions, état migration DEV et contrôle compatibilité historique, failure/retry. |
| **D3 / cognition** | LIVE Nora NOT RUN, J-C04 et J-C06 NOT IMPLEMENTED. | Code et tests déterministes d'abord ; LIVE uniquement sous GO, preuve de source/doute et de capitalisation spontanée. |
| **BROWSER et Figma** | **NOT RUN** ; Figma extraction annoncée pour quatre frames seulement dans la liste des sources du handoff. | Parcours et captures réellement comparables pour les **11 frames**, interactions, focus, reflow, 1680 et compact ; ne pas inférer 11/11 du nom V4. |
| **D6 et sécurité** | Décisions/restrictions read-only rapportées, pas de tests par statut/opposabilité/ACL. | Cas D6 ACTIVE/LIFTED, ancien acte, état remplacé, isolation interprojets et interdiction mutation. |
| **Non-régression** | tsc PASS ; lint/build, suites ML2/ML3/ML4C/E05 et navigation historique **non exécutés ou non démontrés**. | Exécuter le pack pertinent et qualifier les tests impossibles, avec effet sur verdict. |
| **Recette / LIVE / REAL** | RECETTE annoncée non mutée, **LIVE / REAL NOT RUN**. | Aucun claim de recette, de spontanéité cognitive globale ou d'ADOPTED ; GO séparés si nécessaires. |

**Règle de revue :** le Review Handoff peut être **correctement publié** tout en étant **incomplet comme pack de contenu**. Ne pas lever la réserve après un simple nouveau push L3 ; exiger une relecture des sources/diffs réellement ajoutés, et conserver le SHA du pack auquel le verdict se rapporte.

## 8. Carte de traitement, risques et gates

| Décision opérationnelle candidate | Ce qui doit être fait | Limite et dépendance |
| --- | --- | --- |
| **CONSERVER** | Architecture D1–D9, D3 sens/Nora, D4 connaissance/versionnement, D6 autorité, PostgreSQL existant et onze frames V4 validées. | Pas de nouvel écran, moteur, base ou gouvernance. |
| **CONSERVER SOUS CONTRÔLE** | Migration 014, services/API et interface réalisés localement, sans réécrire ce premier travail par principe. | Lire code complet, vérifier modèle du §16, données, provenance et test d'intégration avant de conclure. |
| **COMPLÉTER PRIORITAIREMENT** | J-C04 et J-C06 (mémoire cognitive), J-C13 et J-C14 (retour aux sources), puis J-C PARTIAL. | Ne pas assimiler manque de LIVE à manque de code : ces quatre lignes sont **NOT IMPLEMENTED par Cursor**. |
| **QUALIFIER** | D6 applicable et restrictions, projet/préparations, split/merge, qualité de synthèse et recherche. | PG/API avec négatifs, source exacte, refus droits et incertitude. |
| **PROUVER VISUELLEMENT** | Vérifier 11 références Figma en runtime et interactions réelles. | BROWSER NOT RUN → V4 NOT PROVEN, même si l'interface compile. |
| **REFAIRE LE PACK DE REVUE** | Full créé/modifié, including untracked et logs, SHA et contexte Git local. | Pack incomplet → revue de code bloquée indépendamment du test PG. |
| **STOP / GATE MORRIS** | Promotion, PR/merge, changement normatif, révision de périmètre, migration RECETTE, coûts LIVE/REAL hors mandat. | Rapport Cursor = proposition de revue, jamais GO automatique. |

**Principaux risques de dérive à surveiller à chaque itération :** (a) persistance de synthèses sans production cognitive effective ; (b) hiérarchie créée par titre mais sans sens et sans filiation robuste ; (c) explication d'acte D6 confondue avec motif officiel ; (d) points factuels réputés résoudre une suspension gouvernée ; (e) capture Figma utilisée à la place d'une capture navigateur ; (f) quatre scénarios omis reportés à « plus tard » malgré le contrat intégré ; (g) corrections sur un nouveau domaine au lieu d'enrichir D4 ; (h) pertes de brouillon/scroll au retour depuis une source.

## 9. Historique des revues Cursor — append-only

| Date, candidat et handoff | Réalisations déclarées | Ce qui est inspecté ici | Verdict / impact sur J-C | Décision et suite |
| --- | --- | --- | --- | --- |
| **19/11/2026 — premier cycle Delivery Critical** ; candidat local **78c3c3b0** ; [handoff 03eda7e8](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md), blob **f0d1265b…** | Migration 014, journal.ts, parent-aware, projection multipréparation, GET Journal et UI V4 ; tsc PASS, PG 6/6 PASS annoncés ; aucun push projet. | Handoff Git complet **en tant que fichier** (294 lignes), matrice 16 IDs, migration 014 et extrait journal.ts ; **pas** de code produit local/patch complet, ni de logs PG, ni de BROWSER/LIVE. | **NOT READY — SCOPE INCOMPLETE** : 4 absents, 11 partiels, 1 code-only non prouvé ; **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING**. | Revue Morris des réserves, complément intégré sous GO distinct ; aucun Gate C, push projet, PR, merge ou réception imputé. |

**Règle de version :** à chaque nouveau handoff, garder cette ligne historique ; ajouter une **ligne datée avec SHA exact** et revoir §1, §4, §5, §7 et §8. Les résultats plus récents prévalent **uniquement sur le périmètre qu'ils prouvent**. Un nouveau BROWSER ne transforme pas un ancien test PG absent en PASS rétroactif.

## 10. Procédure de contrôle ChatGPT à chaque handoff — guide de non-dérive

**A. Pré-check source de vérité.** Lire Git main/ref/HEAD, SEF, Roadmap, décisions R4/R5, contrat UX v1.0, technique v0.3 et ce registre **depuis Git**. Distinguer ce qui est dans main, branche documentaire, branche candidat publiée ou **worktree local NON OBSERVÉ**. Ne pas prétendre inspecter des PNG, logs ou fichiers locaux absents.

**B. Vérification du Review Pack.** Relire le dernier handoff canonique à SHA immuable et vérifier le triplet **rapport/diff/code**, les nouveaux fichiers et contenus modifiés, la matrice complète, les logs, le type de preuve, la date et les réserves. Handoff présent ≠ pack complet.

**C. Confrontation indépendante aux exigences.** Pour chacune des seize lignes J-C :
- retrouver la règle R1/R2/R3 ou UX v1.0 correspondante, y compris les quatre exigences complémentaires ;
- inspecter la responsabilité D3/D4/D6 et la réalisation réellement disponible ;
- vérifier l'API/UI qui consomme la capacité, et non seulement sa fonction dans un service ;
- vérifier oracle négatif, autorisations, versions, errors/retry et non-régression ;
- écrire état de code, état de preuve, lacune, risque et exit, sans « % d'avancement » arbitraire.

**D. Relecture de vision utilisateur.** Jouer mentalement puis tester sur runtime lorsque disponible : **entrée Journal → sujet → recherche → points ouverts → décision expliquée → source message/document exact → retour → reprise Nora**. Si un maillon exige une fonctionnalité non construite, le parcours n'est pas livré.

**E. Contrôle de frontière.** Toute mutation supplémentaire de code, DB, D6, rail global, méthode, versioning, CI, PR ou RECETTE se confronte au blast radius et au gate. Un « correctif facile » n'autorise pas un second moteur ou une nouvelle autorité.

**F. Verdict fondé sur les preuves.** Mettre à jour le présent fichier sur mandat Git borné, publier SHA/diff/relecture distante, et produire l'un des verdicts exacts : **NOT READY — SCOPE INCOMPLETE**, **REVIEW PACK INCOMPLETE**, **READY FOR MORRIS REVIEW WITH RESERVES**, ou **READY FOR MORRIS REVIEW** seulement quand la couverture applicable est démontrée. Morris décide ensuite réception/promotion ; ChatGPT ne clôt pas les réserves à sa place.

## 11. Registre des lacunes et conditions de sortie

| Lacune actuelle | Nature | Sortie vérifiable | Statut |
| --- | --- | --- | --- |
| **Réactivation Nora J-C04** | Fonction absente rapportée | Comportement D3/D4 avec contexte ancien et rappel opportun, test négatif | **OPEN / BLOCKING** |
| **Sources et contradictions J-C06** | Fonction absente rapportée | Contradiction/version/droits honnêtes, test sources antagonistes | **OPEN / BLOCKING** |
| **Message exact J-C13** | Fonction absente rapportée | BROWSER grand fil, ancrage et retour avec brouillon non envoyé | **OPEN / BLOCKING** |
| **Document versionné J-C14** | Fonction absente rapportée | API+BROWSER origine/révision/droits, erreur si source retirée | **OPEN / BLOCKING** |
| **J-C01/02/03/05/07–12/15/16** | Réalisation partielle ou seulement annoncée | Oracles du §4, tests, négatifs, preuves et accès au code complet | **OPEN / COVERAGE INCOMPLETE** |
| **Pack de revue contenu/code** | Preuve source insuffisante | Contenu complet des créations et diffs modifiés, index Git exhaustif, tests/logs | **OPEN / REVIEW PACK INCOMPLETE** |
| **Figma/runtime** | Aucun BROWSER Journal | Capture/runtime de chaque état pertinent et retour fonctionnel, reflow et clavier | **OPEN / NOT RUN** |
| **LIVE/REAL, RECETTE** | Non exécutés / pas de gate | Test uniquement sous GO borné, sans assimilation à l'absence de code | **NOT RUN / NO GO INFERRED** |

**Aucune sortie n'est acquise du fait de la création de cette matrice.** Les travaux restent dans l'Ensemble 06 Journal ; la conception des autres surfaces Documents ne doit pas être absorbée en douce dans ce contrôle.

## 12. Historique documentaire

| Date/version | Opération et source | Qualification |
| --- | --- | --- |
| **19/11/2026 — v0.1** | Création de la matrice vivante Ensemble 06 Journal, à partir du modèle Ensemble 05 v0.10, des contrats validés R1–R4/Journal v1.0, du contrat technique v0.3, des 11 Figma et du premier handoff Git 03eda7e8 | **DOCUMENTED — REVUE D1** ; 16/16 critères tracés ; aucune preuve de livraison complète, aucun effet produit ni adoption |

