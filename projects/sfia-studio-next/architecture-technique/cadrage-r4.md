# SFIA Studio Next — R4 · Cadrage de la conception d’architecture

| Métadonnée | Valeur |
| --- | --- |
| Nature | **Document de cadrage vivant** du jalon R4 ; support de travail et de synthèse, sans création d'une seconde autorité normative |
| Version | **v0.1 — candidate D0**, 2026-11-03 |
| Statut | **DRAFT — NOT VALIDATED / GIT CANDIDATE ON R4 BRANCH**. La Roadmap `main` indique R4 NOT STARTED à la baseline ; Morris a autorisé le 2026-11-03 le démarrage de l'étude A et le commit de ce candidat sur une branche dédiée, sans PR/merge |
| Responsable des arbitrages | Morris |
| Rédaction / analyse | ChatGPT, sous contrôle des sources Git et des décisions Morris |
| Référentiel observé | `mcleland147/sfia-workspace`, branche distante `main`, HEAD `7067c846ce7c57825dd31c532433d809e1a01216` (contrôle du 2026-11-03) |
| Situation technique | **Next : N/A — NON IMPLÉMENTÉ**. Aucun code ni schéma de données cible adopté ; branche locale / index / worktree **NON OBSERVÉS** |
| Emplacement Git candidat | `projects/sfia-studio-next/architecture-technique/cadrage-r4.md` ; création sur branche dédiée sous mandat Morris du 2026-11-03, sans promotion sur `main` |

## 1. Finalité et position de départ

Ce document cadre la **conception de l'architecture du nouveau produit SFIA Studio**, indépendamment de son implémentation historique. Il conserve la compréhension des acquis, des hypothèses, des options et des réserves durant R4, et guide la préparation de R5. Il n'autorise aucun choix technique, aucune écriture Git, aucun lot Cursor ni aucune adoption de runtime.

**Position de travail confirmée :** notre trajectoire de quatre macro-lots R4 reste pertinente après lecture de l'architecture historique. Aucun composant, nom, schéma de base, moteur ou principe d'implémentation de l'ancien Studio n'est repris par défaut. **Les exigences et invariants validés pour Next priment sur toute capitalisation historique.** Reconstruire intégralement est une option normale, pas un scénario de dernier recours.

La qualité de R4 sera mesurée par la **simplicité explicable des responsabilités**, la cohérence des parcours utilisateur, la maîtrise des droits et des effets, la fiabilité de la continuité, l'observabilité et la capacité à construire/tester des incréments verticaux. La quantité de composants réutilisés n'est pas un indicateur de succès.

## 2. Fondations acquises et hiérarchie des sources

### 2.1. Décisions et validations acquises — Next

- **SEF v0.2 validé par Morris :** construction par macro-lots cohérents, gates explicites, code + tests + documentation groupés en Delivery, qualification des preuves, pas de micro-cycles documentaires ; rôles D0/D1/D2/D3 distincts.
- **R1 — CLOSED BY MORRIS WITH CARRIED RESERVES :** vision Pilote–Nora, neuf domaines D1–D9, sept scénarios end-to-end, frontières IN/OUT et séparation autorité/cognition/preuve.
- **R2 — CLOSED BY MORRIS WITH CARRIED RESERVES :** neuf spécifications fonctionnelles et compléments approuvés, 15 CKI validés en contenu et 50 relations non contraignantes ; les CKI ne sont ni des autorisations ni un moteur métier autonome. Les 66 réserves initiales restent tracées dans leurs sources propriétaires.
- **R3 — CLOSED BY MORRIS WITH CARRIED RESERVES :** parcours Pilote–Nora, couverture de conception des neuf domaines et sept E2E, prototype Figma (223 frames), contrat de transposition, clarification de la visibilité cognitive / outil / Cursor, STOP et reprise. **Conception et navigabilité Figma ≠ fonctionnement navigateur ni E2E REAL.**
- **Nommage Next validé :** nommer les composants par responsabilité durable ; un concept = un nom ; pas de `F2`, `P6`, `OPS1`, `pre-m6`, `legacy` ou noms de chantier dans l'architecture permanente.
- **Gouvernance Git :** les anciennes décisions H7/H8 et G0-A/B restent des faits historiques ; elles ne constituent pas une architecture imposée à Next.

**Vérité des sources :** code/preuves Git Next, lorsqu'ils existeront, puis décisions Morris, spécifications et documents, enfin hypothèses. Un constat historique ne remplace pas un arbitrage R4. En cas de contradiction entre code futur et documents Next, qualifier **KNOWN GAP** et instruire sa correction dans le macro-lot concerné.

### 2.2. Sources canoniques à consulter, sans les dupliquer

| Source | Autorité / rôle |
| --- | --- |
| `governance/SEF.md` | Méthode et gates de construction Next |
| `governance/roadmap.md` | **État vivant** et dépendances R0–R6 ; ce document ne tient pas une deuxième roadmap |
| `governance/decisions/` | Arbitrages explicites Morris ; aucune décision induite par une proposition |
| `governance/product-naming-conventions.md` | Règles de nommage **VALIDATED** |
| `cadrage/vision-produit.md` et `cadrage/vision-cible/README.md` | Vision, neuf domaines, E2E et schémas fondateurs ; schémas ≠ architecture adoptée |
| `conception-fonctionnelle/README.md` et spécifications D1–D9 | Contrats fonctionnels, états, exigences et réserves propriétaires |
| `cki/README.md` | CKI et relations **validés en contenu**, non prouvés en fonctionnement |
| `ux-ui/` (revue R3, contrats, Figma) | Parcours, états, géométrie de référence, responsive/accessibilité, pas de preuve runtime |
| `projects/sfia-studio/production-runtime-reference/` | PRR de l'ancien produit : **retour d'expérience non prescriptif** |
| `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/` | Audit historique AS-IS/TO-BE, options et risques de rationalisation ; décisions spécifiques à l'ancien Studio |

Référence Git : `https://github.com/mcleland147/sfia-workspace/tree/main/projects/sfia-studio-next`.

## 3. Résultat produit que l'architecture doit rendre possible

**Chaîne cible intégrée :** le Pilote accède à ses projets ; Nora l'accompagne dans un sas conversationnel ; le projet n'est créé que sur décision explicite ; la conversation et les acquis se poursuivent ; la trajectoire et les cycles restent légers et facultatifs selon la situation ; Nora explore, conseille et produit dans ses droits ; le Pilote gouverne les décisions et mandats ; l'exécution externe part d'un contrat réellement inspecté et autorisé ; les résultats et preuves sont confrontés ; le travail peut être arrêté, repris ou requalifié sans duplication ni autorité inventée.

### 3.1. Neuf domaines à couvrir

| Domaine | Capacité retenue en R1/R2 | Conséquence architecturale à concevoir en R4 |
| --- | --- | --- |
| D1 | Accès individuel et portefeuille | Identité, sessions, isolation entre Pilotes et projets, accès non conversationnel |
| D2 | Sas Nora et création explicite | Continuité pré-/post-projet, état durable, création idempotente et cohérence des documents |
| D3 | Conduite Pilote–Nora | Frontières cognition/orchestration/outils, contexte sourcé, contrôle des effets et activités réellement visibles |
| D4 | Mémoire, documents, sujets, décisions | Identités documentaires, versions, provenance, récupération, visibilité et accès |
| D5 | Trajectoire, cycles, CKI | État métier cohérent, cycles non obligatoires, méthode/guidance versionnée, pas de moteur CKI concurrent |
| D6 | Décisions et gouvernance | Autorité humaine durable, mandats/suspensions, portée temporelle et vérification effective |
| D7 | Réalisation opérationnelle | Contrat unique inspectable, identité/version, instruction technique reliée, GO Exécuter, Tentative/STOP/reprise |
| D8 | Résultats et preuves | Attribution, observation, conformité, incertitude, acceptation humaine et reconstitution |
| D9 | Git facultatif et gouverné | Accès individuel, ressources/références, permissions, conflits, collaboration sur dépôt partagé sans fusion de projets Studio |

### 3.2. Sept E2E de référence

1. Sas conversationnel → création explicite → même fil et contexte dans le projet.
2. Trajectoire et cycles → guidance méthodologique sans verrou artificiel.
3. Investigation multi-sources et production cognitive → restitution adaptée et sourcée.
4. Connaissance vivante, sujets, décisions → continuité et reprise du contexte.
5. Décision / mandat → contrat inspecté → autorisation → réalisation technique gouvernée.
6. Résultat, preuve, réserve, correction → acceptation humaine distincte.
7. Git individuel facultatif → accès et partage de dépôts sans confusion des identités et autorités.

Les compléments R1/R2 du 2026-11-03 concernant **production/révision de documents, consultation des sources et inspection intégrale du contrat** s'appliquent également ; ils ne créent pas une nouvelle architecture déjà décidée.

## 4. Capitalisation critique de l'ancien Studio — sans présomption de réutilisation

### 4.1. Ce qui a été effectivement constaté

Le Product Studio historique repose sur Next.js/React, une UI `/studio`, `Project Assistant` (F2/W2), un runtime cognitif Nora (OpenAI Agents), des agrégats métier OA (Project/Cycle/HumanDecision/ExecutionContract/ExecutionAttempt/Evidence/ReviewBundle), SQLite produit et SQLite session Nora, certains supports process-local et des adaptateurs Git/Cursor. D1, OPS1 et P0 ont conservé des parcours ou stockages historiques adjacents. La **PRR** documente 20 flux F01–F20, des invariants et tests, mais son manifeste et ses volumes sont partiellement issus de baselines antérieures au HEAD courant : les affirmations significatives doivent être rapprochées du code.

Le parcours **Single Human Execute** est intégré à l'ancien produit au périmètre déterministe testé ; il n'établit pas une preuve globale Cursor REAL. Les propositions et offres process-local, la dérive potentielle de chemins SQLite, la duplication de voies d'orchestration et la coexistence de surfaces historiques ont été identifiées comme risques. Certains résultats de reprise sont prouvés à un niveau déterministe borné, non au niveau navigateur/REAL universel.

L'étude historique AKG-M4 a proposé de consolider l'ancien OA et d'étudier une reconstruction ciblée de l'orchestration, pour limiter le risque de migration de **cet ancien produit**. Les décisions H7/H8 y sont **des décisions historiques**, non des instructions de conservation pour Next.

### 4.2. Qualification provisoire pour Next

| Élément historique | Enseignement utile | Décision Next |
| --- | --- | --- |
| Cognition ≠ autorité ≠ preuve | Frontières cohérentes avec les contrats R1/R2 | **Exigence produit acquise** ; composants d'implémentation ouverts |
| Décision, contrat, tentative, preuve distincts | Traçabilité et contrôle des effets | **Responsabilités à satisfaire**, nombre de tables/agrégats à concevoir |
| OA Product Runtime | Solution historique substantielle mais complexe | **Aucune adoption** du code, de l'ORM ou des modèles |
| Nora Session séparée du métier | Séparation conceptuelle utile | **Aucune décision** de deux bases physiques ou de leur technologie |
| Project Assistant / F2 / W2 | Capacité d'orchestration réalisée, avec chemins parallèles | **Aucune reprise par défaut** ; rechercher une orchestration explicable et non concurrente |
| Single Human Execute | Parcours UX pertinent déjà demandé pour Next | **Contrat fonctionnel R2/R3**, pas reproduction des transitions techniques historiques |
| D1 / OPS1 / P0 | REX sur identités, exécution, écrans et corrections | **Aucune migration ni duplication** présumée |
| PRR, cartographie de tests et invariants | Bonne pratique de preuve/impact | Capitaliser **la méthode**, pas créer une deuxième PRR Next |

**Principe anti-biais :** une conception historique n'obtient aucun avantage dans l'évaluation du seul fait de son existence, de son niveau d'investissement ou de sa maturité documentaire. Les éventuels actifs réutilisables doivent prouver un bénéfice net par rapport au code neuf, après prise en compte des dépendances et de la dette qu'ils transporteraient.

## 5. Options architecturales à étudier, sans préjuger du verdict

| Option | Hypothèse de conception | Avantages possibles | Coûts/risques à objectiver |
| --- | --- | --- | --- |
| **N1 — Architecture Next neuve et sobre** | Définir de zéro les responsabilités, états et interfaces strictement nécessaires à R1–R3 | Cohérence, faible dette de compatibilité, liberté de conception | Conception des invariants et preuves à reconstruire |
| **N2 — Architecture Next neuve, structurée autour de frontières métier éprouvées** | Partir des contrats Next mais comparer certaines frontières conceptuelles mises en évidence par l'ancien OA/Nora | Sûreté et traçabilité potentiellement facilitées | Risque d'importer une granularité ou une complexité excessive |
| **N3 — Réutilisation technique très sélective** | Réutiliser un composant historique précis seulement si l'évaluation l'emporte sur une nouvelle implantation | Gain ponctuel de délai et de tests existants | Couplages, dépendances cachées, compatibilité et coût de maintenance |

Ces options **ne sont pas des décisions d'architecture** ; elles pourront être combinées au niveau des responsabilités si cela ne crée pas de moteurs parallèles.

**Critères de comparaison :** couverture des E2E, lisibilité de l'autorité, simplicité des contrats, coût de construction/exploitation, isolation, persistance, concurrence, reprise, sécurité, observabilité, évolutivité, tests, coût de migration et dette avec exit. Les coûts et capacités réels devront être étayés ; aucune supériorité de stack ne peut être déduite de l'étude historique seule.

## 6. Questions structurantes ouvertes pour R4

| ID de suivi interne à ce cadrage | Question à instruire | Livrable/gate attendu |
| --- | --- | --- |
| Q1 | Où réside chaque vérité durable : projet, sas, conversation, connaissance, méthode, décisions, contrats, tentatives et preuves ? | Carte des propriétaires, données, transactions et lectures ; **pas** une technologie présumée |
| Q2 | Comment Nora compose-t-elle son contexte (sources, versions, confiance, confidentialité, limites) sans devenir autorité ? | Contrat de composition, ingestion et restitution ; garde-fous contre les sources non fiables |
| Q3 | Comment séparer identité Studio, accès Git, identité de l'exécutant, secrets et périmètres ? | Modèle d'identité, de session, d'isolation et de délégation avec tests négatifs |
| Q4 | Comment gérer concurrence, idempotence, doublons, changement de version, crash et réconciliation ? | Machines d'état minimales, règles de reprise, invariants transactionnels et de non-rejeu |
| Q5 | Qui orchestre la progression métier, la cognition, les appels d'outils et les effets externes ? | Responsabilités explicites, une voie propriétaire par effet, absence de moteur concurrent |
| Q6 | Quel contrat de STOP couvre demande, transmission, observation et effets indéterminés ? | API/événements/erreurs et preuve des capacités réelles, sans promettre un arrêt non contrôlé |
| Q7 | Comment relier contrat inspecté, instruction exacte, tentative, rapport, observation et décision d'acceptation ? | Références/version/empreintes, chaîne de provenance et politiques de vérification |
| Q8 | Comment l'UX reflète-t-elle les états réels sans produire une seconde vérité ? | Modèle de lecture/événements, fraîcheur, erreurs, rechargement, accessibilité |
| Q9 | Quelle architecture d'intégration Git/Cursor, quels environnements, quels secrets et quels gates de déploiement sont nécessaires ? | Interfaces et modes dégradés, isolation des effets, stratégie de tests/CI |
| Q10 | Quels fondements techniques rendent fidèles les parcours Figma (desktop/mobile) sans recopier des pixels rigides ? | Contrat UI partagé ; arbitrage du rail **240 vs 246 px**, responsive et composants |

**Aucune réponse à Q1–Q10 n'est considérée adoptée par sa présence dans ce tableau.** Les réserves R2/R3 continuent d'appartenir à leurs documents propriétaires ; Q1–Q10 sont des axes de conception, pas un registre normatif concurrent.

## 7. Trajectoire R4 — quatre macro-lots candidats

### A. Fondations et continuité du projet

**Résultat utilisateur visé :** un Pilote peut entrer, discuter avec Nora avant création, créer explicitement un projet, retrouver le fil, les documents et le contexte de manière cohérente.

**IN :** comparaison N1–N3 et première architecture de responsabilité ; identité et isolation ; sas, projet, conversation et documents ; état durable, réhydratation, idempotence ; premières interfaces UX et sécurité. **OUT :** implémentation, exécution Cursor, Git obligatoire, ouverture automatique de cycle.

**Preuves de conception :** diagrammes de responsabilités, contrats de création/reprise et de données, invariants, scénarios nominaux et négatifs (double création, crash, changement d'utilisateur, donnée inaccessible). **Gate Morris :** arbitrer le modèle de responsabilité et les principaux choix de continuité/persistance avant d'étendre les dépendances.

### B. Pilotage, méthode et autorité

**Résultat visé :** trajectoire, cycles, guidance CKI, mémoire et décisions fonctionnent sans transformer une recommandation Nora en autorisation.

**IN :** méthode et CKI versionnés, trajectoire/cycle, décisions, mandats, suspensions, contexte, accès concurrent et transitions ; clarification du propriétaire métier. **OUT :** nouveau moteur CKI prescriptif, décisions automatiques, workflows parallèles.

**Preuves de conception :** contrats d'état et de décision, autorité applicable selon projet/version/temps, erreurs/refus, continuité entre conversations. **Gate Morris :** valider les frontières d'autorité et les dépendances du modèle métier.

### C. Réalisation gouvernée et preuves

**Résultat visé :** le Pilote inspecte ce qui sera réellement exécuté, autorise l'effet, puis retrouve un résultat fiable, vérifiable et reprenable.

**IN :** contrat métier unique inspectable (quatre engagements et six volets fonctionnels R2/R3), lien exact à l'instruction technique, capacité/permissions, tentative, STOP/FAIL, effets partiels, Evidence, analyse Nora, réception humaine, interfaces Git/Cursor nécessaires à ce flux. **OUT :** auto-réexécution ou auto-acceptation, prétention au sandbox/no-write sans preuve, adoption implicite.

**Preuves de conception :** scénarios nominaux/erreurs, contrôles au point d'effet, provenance, reprise sans effet dupliqué, isolation du runner. **Gate Morris :** valider les décisions d'exécution, de sécurité et de preuve avant R5 technique.

### D. Intégrations et consolidation de l'architecture

**Résultat visé :** tous les E2E peuvent être construits et testés sur un ensemble d'interfaces stable, évolutif et gouverné.

**IN :** Git facultatif/multi-Pilotes, permissions, concurrence, observabilité, erreurs, contrat UX responsive/accessibilité, conventions de nommage et interfaces, stratégie CI et tests, revue de cohérence A–C, préparation des macro-capacités R5. **OUT :** nouvelle fonctionnalité métier non demandée, activation LIVE, migration historique par défaut.

**Preuves de conception :** carte d'impacts, cohérence inter-domaines D1–D9, validation des sept E2E sur les contrats, ADR structurants validés, risques/dettes et exits, stratégie de construction/qualification. **Gate Morris :** revue de sortie R4 et décision séparée d'entrée R5.

**Règle de cohérence :** l'identité, la sécurité, les interfaces UX et l'isolation des outils ne sont **pas différées jusqu'à D** ; elles sont traitées dès qu'elles conditionnent A, B ou C, puis consolidées en D. Ces lots ne valent pas quatre cycles Cursor ni quatre PR automatiques.

## 8. Livrables et critères de sortie R4 proposés

R4 doit aboutir à une **architecture compréhensible et testable sur le papier**, non à une quantité de documents :

1. Une vue globale des responsabilités, des interfaces et des frontières de sécurité, avec propriétaire unique par vérité et par effet.
2. Les contrats de données, états, versions, transactions, erreurs, reprise, concurrence et idempotence nécessaires.
3. Les contrats d'identité, d'autorisation, Git/Cursor, STOP, observabilité, provenance et résultats, avec capacités réelles **à vérifier**.
4. L'architecture de l'expérience : états UX, sources affichables, tokens et composants, stratégie responsive/accessibilité et contraintes Figma.
5. La comparaison argumentée des options N1–N3, les **ADR de choix structurants** signés/validés par Morris, les alternatives écartées et les critères de réexamen.
6. Une matrice de conformité aux neuf domaines, sept E2E et réserves R2/R3 ; les exceptions explicitement reportées à R5/R6.
7. Une trajectoire de construction R5 par macro-capacités verticales, avec critères d'acceptation, preuves, gates, dépendances et dette/exit.

**Gates non négociables :** un design ne vaut ni implémentation ni preuve runtime ; tests déterministes ≠ browser ≠ LIVE/REAL ; merge documentaire ≠ validation architecture ; GO R4 ≠ GO Git ≠ GO Cursor ≠ GO R5 ; aucun `ADOPTED` anticipé.

**Verdict de sortie candidat, non prononcé :** `R4 — VALIDATED SPEC WITH GOVERNED RESERVES` uniquement si Morris valide la conception, ses risques/ADR et sa préparation R5. La Roadmap sera alors synchronisée selon le gate documentaire autorisé.

## 9. Gouvernance du document vivant

Ce document **ne remplace pas** la Roadmap, les Decision Records, les spécifications D1–D9, le référentiel CKI, les décisions UX ni le futur `architecture-technique/current-reference.md` prévu par le SEF pour l'architecture effectivement implémentée.

À chaque évolution **significative de R4**, mettre à jour ce document **dans le même ensemble de travaux**, sans micro-cycle documentaire dédié :

- Indiquer date, ref/HEAD Git observés et sources réellement consultées ; état local non vérifiable = **NON OBSERVÉ**.
- Classer chaque point comme **FAIT OBSERVÉ**, **VALIDATION R1–R3**, **HYPOTHÈSE**, **OPTION CANDIDATE**, **DÉCISION MORRIS** ou **RÉSERVE**.
- Tenir une synthèse des options, des impacts, des questions ouvertes, des dépendances et de la capacité suivante ; conserver la décision dans son **Decision Record propriétaire**, avec simple renvoi ici.
- Signaler toute contradiction code/document par **KNOWN GAP** et une condition de correction ; ne jamais « synchroniser » une hypothèse en vérité de fait.
- Préserver les exigences fonctionnelles et UX propriétaires par références, sans recopier un second catalogue RG/PF, CKI ou réserves.
- Documenter la dette seulement avec propriétaire, impact, échéance/condition de sortie et gate.

### Journal synthétique de cadrage — sans valeur de décision

| Date / source | Apport | Classe | Suite |
| --- | --- | --- | --- |
| 2026-11-03 / Git `main@7067c846` | R1, R2, R3 clos en conception avec réserves ; aucun runtime Next | **FAIT OBSERVÉ / DÉCISIONS ANTÉRIEURES** | Cadrer R4 sous GO distinct |
| 2026-11-03 / PRR et code ancien Studio | Architecture historique et risques de fragmentation/persistance/REAL étudiés | **CAPITALISATION, NON PRESCRIPTIVE** | Ne pas importer les implémentations |
| 2026-11-03 / analyse R4 | Quatre macro-lots A–D et comparaison initiale N1–N3 pertinents | **RECOMMANDATION CHATGPT** | Soumettre les choix structurants à Morris |

## 10. Situation actuelle et prochaine étape

**Constat Git :** `main@7067c846ce7c57825dd31c532433d809e1a01216` ; source documentaire Next intégrée ; **R4 NOT STARTED** ; code, architecture cible et preuves runtime Next **N/A — NON IMPLÉMENTÉ**. Aucune branche R4 locale, fichier staged/untracked, environnement d'exécution ou activation n'a été vérifié.

**Prochaine capacité proposée :** au sein du cadrage du **macro-lot A**, comparer de façon contradictoire N1–N3 sur le premier parcours sas → création → continuité, puis élargir seulement aux interfaces B/C/D qui conditionnent les fondations. Cela permet de décider l'architecture sur un résultat utilisateur concret plutôt que sur une préférence de stack ou une reprise de l'ancien OA.

**Autorisation actualisée au 2026-11-03 :** Morris autorise la création d'une branche R4, le commit distant de ce document candidat et le début de l'étude des options du macro-lot A. Le contenu reste **DRAFT / NON VALIDÉ**. La PR, le merge, les changements normatifs de la Roadmap ou des décisions, le code, Cursor et toute promotion demeurent hors mandat.

---

**État du document au 2026-11-03 : `R4 ARCHITECTURE SCOPING — GIT CANDIDATE ON BRANCH / CONTENT NOT VALIDATED` — étude initiale A autorisée, sans architecture adoptée ni PR/merge.**