# ML4B — ML2 / Contrats, capacités et premier bilan technique

**Nature :** photographie de réconciliation documentaire **non normative**, en cours d'approfondissement. **Date :** 2026-11-10.
**Code relu :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4`. **Branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
**Environnement local / runtime / navigateur : NON OBSERVÉS.** Aucun test n'a été réexécuté dans ce diagnostic.
**Statut :** `ML2 17/17 CAPABILITIES SOURCE-TO-CODE MAPPED / D3 118/118 + D4 46/46 IDS MAPPED / E2E03-E2E04 FIRST PASS / FULL LIVE & F2-G5 NOT RUN / CP1 OPEN`.

[Index ML4B](../README.md) · [Revue individuelle D3](verification-detaillee-conduite-nora-d3.md) · [Revue individuelle D4](verification-detaillee-connaissance-d4.md) · [Réconciliation E2E03/E2E04](reconciliation-e2e03-e2e04-preuves.md).

## 1. Contrat initial, résultat et frontières

La [spécification technique ML2](../../ml2-production-et-capitalisation-nora/specification-technique.md) et la [matrice ML2](../../ml2-production-et-capitalisation-nora/matrice-tracabilite.md) décrivent **17 capacités de référence** : produire et réviser avec Nora, conserver la connaissance, retrouver le contexte adéquat, investiguer de façon critique et présenter les vrais résultats. Les parcours intégrateurs sont **E2E03 (conduite cognitive, production)**, **E2E04 (mémoire et continuité)** et le complément R1 §2.41 sur le **fil unique** et les ressources documentaires.

- **D3** est propriétaire de la conduite Nora, de l'initiative, des méthodes applicables, du choix des connaissances utiles, de la rédaction et de la restitution.
- **D4** est propriétaire des Sujets, Acquis, Points ouverts, documents/révisions, identités, provenance et accès. Il ne crée pas de décision D6 ni de preuve D8 par simple stockage.
- D1/D2 portent les sessions et la création du projet ; D5/D6 décident des cycles/autorités ; D7/D9 des effets externes et accès Git sous contrôle. Aucune mutation D5–D9 n'est implicitement accordée à Nora.

**Contrat produit discriminant :** le Pilote doit bénéficier d'une aide intellectuelle pertinente et durable, **pas simplement d'un chat persistant et d'un gestionnaire de documents**.

**Source canonique R2 :** [D3 — Contexte et conduite de Nora](../../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D4 — Connaissance](../../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md). Le présent dossier ne modifie pas leurs contenus. Les textes plus anciens « autre conversation » désignent des **reprises/échanges du même fil par projet**, conformément à la clarification Morris ; pas de gestionnaire multi-chat à inventer.

## 2. Volume fonctionnel à réconcilier sans double comptage

| Domaine propriétaire R2 | Historique et compléments approuvés | Extensions candidates | Total présent dans le référentiel |
| --- | --- | --- | --- |
| **D3** | 46 RG + 27 PF initiales, puis 16 RG document/Inspection + 8 PF validés en contenu | 12 RG `RG-CONV/CTX` et 9 PF `PF-36..44` portant cognition et observabilité (novembre 2026) | **74 RG + 44 PF = 118** |
| **D4** | 15 RG + 10 PF R2, puis 5 RG documentaires + 4 PF validés en contenu | 6 RG et 6 PF de lecture D4 et observabilité | **26 RG + 20 PF = 46** |

**Total corpus D3/D4 : 164 références présentes dans les deux sources**, dont des obligations **propres à d'autres macro-lots** (méthode/CKI D3 traités aussi en ML3, publication Git en ML4) et des addenda **candidats**. Ce total est un **univers documentaire**, pas 164 fonctions indépendantes ni le nombre de tests nécessaires. D3 ne sera considéré « couvert individuellement » qu'après analyse des 118 IDs, y compris la qualification IN/OUT par lot.

Le diagnostic D4 individualisé est dans [l'annexe correspondante](verification-detaillee-connaissance-d4.md) : 34 références historiques/compléments approuvés + 12 candidates, toutes rattachées à un mécanisme, une preuve pertinente ou un risque identifié.

La [matrice D3 individualisée](verification-detaillee-conduite-nora-d3.md) contrôle **118/118 IDs** : 97 validés en contenu et 21 candidats, avec codes, tests voisins et limites par scénario. **D3+D4 : 164/164 IDs recensés**, sans présumer une conformité individuelle de bout en bout. Les interfaces méthode/cycles/autorité référencées dans D3 restent à croiser avec leurs propriétaires ML3/ML4.

## 3. Tableau de reconstruction des 17 capacités ML2

Le tableau provient des IDs `ML2-COH-01..17` déjà existants dans la **matrice R5 canonique** ; ce sont des repères de livraison historiques, **pas** des noms de composants Next. Les tests cités ont été **identifiés dans Git** et ont des résultats historiques de portées diverses (UNIT / PG / FAKE / LIVE borné).

| Capacité historique | Résultat Pilote | Mécanisme code / responsabilité | Oracle QA | État source et lacune |
| --- | --- | --- | --- | --- |
| `ML2-COH-01` | Comprendre une intention sans formulaire | D3 conversation : `conversation/service.ts ; nora-adapter.ts ; intent-conduction.ts` | Q01/Q02 ; COG-01/02 | Nora LIVE bornée, tests FAKE ; utilité autonome sur cas variés non établie |
| `ML2-COH-02` | Challenger, comparer, conclure avec sources | D3 APP/CONV : `nora-adapter.ts ; cognitive-policy.ts` | Q01/Q03 ; COG-02/03 | LIVE comparaison avec lecture D4 limitée ; qualité contradictoire, challenge indépendant non évalués |
| `ML2-COH-03` | Rendu adaptatif, activité honnête, Markdown sûr | D3 UX/DOC : `NoraConversation.tsx ; nora-adapter.ts ; SafeMarkdown` | Q04/Q05/Q25 ; Q29 conditionnel | Rendu sûr partiellement testé ; streaming progressif non certifié et Figma pas vérifiée |
| `ML2-COH-04` | Réponse conversationnelle ≠ demande de document | D3 DOC → D4 : `conversation/service.ts ; document/service.ts` | Q06/Q07 ; COG-04 | Commande explicite et non-documentation par longueur testées PG ; interprétation LIVE variable |
| `ML2-COH-05` | Créer un brouillon réellement conservé | D4 documents : `document/service.ts ; conversation/service.ts` | Q07–Q09/Q27 | Documents AVAILABLE/UNKNOWN et identité en PG ; ACK Nora parfois contradictoire en RECETTE ML4 |
| `ML2-COH-06` | Révision ciblée, versions et concurrence | D3 DOC + D4 : `document/service.ts ; projects/[projectId]/page.tsx` | Q10–Q12/Q27 | CAS, corrélation, diff testés PG ; révision fidèle de section par Nora et retour browser LIVE incomplets |
| `ML2-COH-07` | Inspection et retour au bon contexte | UX consommateur D3/D4 : `DocumentSurfaces.tsx ; projects/[projectId]/page.tsx` | Q13/Q14/Q27 | Surfaces et retour codés ; Figma/runtime, focus, URL, états périmés non observés |
| `ML2-COH-08` | Capitaliser de manière proactive et sélective | D4 + choix D3 : `knowledge/service.ts ; conversation/service.ts` | Q15/Q16/Q28 ; COG-03 | Regex/lexical présents ; pertinence implicite LIVE non démontrée, points ouverts absents sur certains cas de recette |
| `ML2-COH-09` | Sujets, fusion, séparation, points ouverts | D4 : `knowledge/service.ts` | Q17/Q18/Q28 | Opérations/sécurisation rollback PG ; qualité UX et initiative Nora non prouvées |
| `ML2-COH-10` | Reprendre le même fil et un contexte utile | D3 + D4 / D2 : `project-context.ts ; knowledge/service.ts ; d4-read-tools.ts` | Q19/Q20/Q27/Q28 ; COG-05 | Fil et sélection hors fenêtre PG ; rappel sémantique après sessions/cycles non prouvé globalement LIVE |
| `ML2-COH-11` | Provenance, fraîcheur, contradiction | D3 APP + D4 : `knowledge/service.ts ; d4-read-tools.ts ; nora-adapter.ts` | Q03/Q16/Q21 ; COG-03/06 | Source/version enregistrées ; contradiction externe/git et citation LIVE complète non requalifiées |
| `ML2-COH-12` | Isolation et droits courants | D1/D4 : `knowledge/service.ts ; d4-read-tools.ts` | Q22/Q23 | PG refus d'accès ; révocation D9 REAL ou changement de droits milieu mission non couvert |
| `ML2-COH-13` | Nora ne décide ni ne déclenche des effets protégés | D3/D6/D7/D9 : `conversation/service.ts ; intent-conduction.ts` | Q24 ; COG-07 | Frontières d'autorité dans code, négatifs D5–D9 end-to-end post-ML3/4 à vérifier |
| `ML2-COH-14` | Document du sas conservé après création | D2/D4 : `preparation/create-project.ts ; document/service.ts` | Q08/Q20 | Identité et versions PG/FAKE ; reprise UX et provenance après incident restent à qualifier |
| `ML2-COH-15` | Erreur provider/DB : état honnête | D3/D4 : `conversation/service.ts ; document/service.ts ; turn-command` | Q09/Q12/Q25 ; COG-06 | UNKNOWN/replay/fencing PG ; REAL DB DISCONNECT et restitution LIVE d'échec non prouvés |
| `ML2-COH-16` | Liens vrais, pas de navigateur embarqué | D3 UX : `NoraConversation.tsx ; DocumentSurfaces.tsx` | Q05/Q26 | Référence de conception ; liens/permissions et rendu browser à contrôler sur captures |
| `ML2-COH-17` | Comparer la valeur cognitive de Nora | Transverse D3/D4 : `cognitive-policy.ts ; nora-adapter.ts` | COG-01..07 | Protocole écrit mais comparaison formelle ChatGPT↔Nora non exécutée ; pas d'amélioration chiffrée fondée |

## 4. Preuves post-livraison : vérifier leur portée exacte

**Construits et testés historiquement :**
- [`ml2-knowledge-documents.pg.test.ts`](../../../web/tests/integration/ml2-knowledge-documents.pg.test.ts) : Q10–Q20/Q28, documents, sujets, provenance et contexte hors six messages.
- [`ml2-corrective-integrity.pg.test.ts`](../../../web/tests/integration/ml2-corrective-integrity.pg.test.ts) : concurrence/rollback Sujets, CAS révision, corrélation et retry.
- [`ml2-critical-corrective.pg.test.ts`](../../../web/tests/integration/ml2-critical-corrective.pg.test.ts), [`ml2-three-blocker.pg.test.ts`](../../../web/tests/integration/ml2-three-blocker.pg.test.ts) : fencing, UNKNOWN, owner, lecture sous budget, pages D4 et reconstitution.
- [`ml2-smoke.spec.ts`](../../../web/tests/e2e/ml2-smoke.spec.ts) : navigateur **DEV FAKE** fil/document/Journal ; [`ml2-c3-stable-key.spec.ts`](../../../web/tests/e2e/ml2-c3-stable-key.spec.ts) : clé de création stable.
- [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts) : fournisseur et outils; [`conversation/service.ts`](../../../web/src/domains/conversation/service.ts) : persistance, suites et effets ; [`knowledge/service.ts`](../../../web/src/domains/knowledge/service.ts) et [`document/service.ts`](../../../web/src/domains/document/service.ts) : D4.

**LIVE historique qualifié :** la [matrice ML2 §21](../../ml2-production-et-capitalisation-nora/matrice-tracabilite.md) documente fournisseur réel sur question simple, question complexe avec quatre appels de lecture D4 et ressource manquante (ce dernier **PARTIAL**). La [roadmap ML2](../../../governance/roadmap.md) consigne une **RECETTE Morris 9/9 acceptée avec réserves** sur le candidat `54fc4e9c`. **La réussite de la RECETTE ne vaut ni comparaison cognitive exhaustive, ni mesure de Figma, ni couverture universelle D3/D4.**

**Limites admises en recette :** pas de contre-épreuve de déconnexion PostgreSQL réelle en CI, test `PG-DBFAIL-03` conditionnel/skip hors service éphémère ; `modelApplied` souvent `UNVERIFIED` ; comparaison ChatGPT↔Nora formelle **NOT RUN** ; streaming réellement progressif et Figma/rendu non certifiés ; retranscription d'ACK observée contradictoire plus tard en RECETTE ML4.

## 5. Premier registre de problèmes et frontières

| Repère | Nature | Fait / valeur de preuve | Suite de contrôle |
| --- | --- | --- | --- |
| `ML2-COV-01` | **Valeur cognitive à qualifier** | Code `maybeCapitalizeFromExchange` et `selectRelevantKnowledgeContext` bornés lexicalement malgré Sujets/Acquis/Points ouverts en DB ; les tests PG prouvent davantage **conservation** que **initiative et pertinence autonomes**. | Demandes implicites et anciennes reformulées, rappel sourcé et points ouverts, comparaisons COG-03/05 en LIVE. |
| `ML2-COV-02` | **Écart RECETTE utilisateur observé** | ML4 `REC-08` : ressource D4 en `AVAILABLE` mais Nora indique ne pas pouvoir confirmer l'effet. Aucune perte d'écriture déduite. | Vérifier chaîne D3→D4→ACK→narration sur même génération ; pas d'anomalie concurrente à celle de ML4. |
| `ML2-COV-03` | **Contrat riche vs rendu réel non évalué** | Sources R3 et code d'Inspection, rendu Markdown et surfaces présentes ; **aucune capture Figma/native face à runtime** au même viewport/état/SHA. | F2/G5 comparatif par écran et par état, accès/erreur/retour compris. |
| `ML2-COV-04` | **Distinction effet/préparation/autorité** | La présence de mission multi-étapes et outils D4 ne prouve pas l'absence de faux succès composite, la correction après timeout ni une preuve D8/Git REAL. | E2E03/E2E04 depuis demande complexe jusqu'à édition, version, reprise et refus éventuel. |
| `ML2-COV-05` | **Comparaison cognitive absente** | COG-01..07 définis mais protocole ChatGPT↔Nora non exécuté et non exigé pour l'acceptation ML2 de novembre. | Décider si une comparaison ciblée apporte une valeur mesurable au gate de réconciliation, sans inventer un score global. |

**Nuance :** les écarts de code déjà remontés en ML1, les anomalies enregistrées par la RECETTE ML4 et les problèmes de D4 sont des **liens vers un même problème**, pas des tickets multipliés par document.

## 6. Suite de ML4B

Les deux matrices individuelles [D3](verification-detaillee-conduite-nora-d3.md) et [D4](verification-detaillee-connaissance-d4.md) sont maintenant publiées pour **118+46 références**. D3 apporte également un premier rapprochement des **six étapes E2E03 et six étapes E2E04**, des limites SDK/activité/rendu et des interfaces D5/D6/D9. Le [diagnostic transversal E2E03/E2E04](reconciliation-e2e03-e2e04-preuves.md) réalise maintenant ce rapprochement pour **12/12 étapes R1**, avec neuf exceptions, sans prétendre à une recette LIVE unique. La suite est la **consolidation probatoire ML2**, puis la réconciliation ML3/ML4 et la confrontation Figma/runtime. Pas de micro-reprise documentaire par RG.

**État de cette publication :** `17/17 ML2 CAPACITIES INDEXED / D3+D4 164/164 R2 IDS MAPPED / E2E03+E2E04 12/12 STEPS RECONCILED / NO FULL LIVE E2E OR FIGMA VERDICT / NO CP1 GATE`. Aucune correction, décision de convergence, PR, merge ou promotion n'est induite.
