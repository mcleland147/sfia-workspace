# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **D0 / contribution documentaire D1 — candidat à revue Morris ; aucun GO de construction, PR, merge, release, adoption ou promotion.**

| Champ | Valeur |
|---|---|
| Version | v0.1 — 23 novembre 2026 |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` |
| Gate | `Gate C OPEN`, ML5 non autorisé en construction d'après la Roadmap au 23/11/2026 |
| Publication | Document de pilotage **non normatif** ; la mise en Git ne vaut ni preuve d'implémentation ni nouvelle décision |
| Suivi | ChatGPT qualifie les Review Packs/écarts ; Cursor fournit réalisation/rapports ; Morris décide les arbitrages |

## 1. Mode d'emploi et règle de vérité

Le registre est une **matrice de réception de couverture**, pas un découpage obligatoire de micro-tâches Cursor. Une livraison peut couvrir plusieurs exigences ; une exigence peut nécessiter plusieurs livraisons. Contrôler le périmètre du mandat Cursor et le résultat utilisateur, pas uniquement la présence de fichiers.

- **NV** : non vérifié dans ML5 (état initial pour toutes les lignes ; ne signifie pas absence de code préexistant).
- **EC** : développement annoncé/en cours, sans preuve suffisante.
- **LD** : livré et déclaré, revue indépendante non achevée.
- **PARTIEL** : comportements/preuves manquants identifiés.
- **VERIFIÉ** : comportement et preuve acceptables au périmètre et niveau requis.
- **BLOQUÉ** : dépendance ou preuve déterminante absente.
- **EXCLU** : exclusion motivée et **explicitement décidée par Morris**, jamais par Cursor seul.

Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue significative**. Une case cochée signifie uniquement que l'exigence est VERIFIÉE au niveau requis, sur une ref identifiable. Aucun pourcentage d'avancement global n'est calculé à partir des seules déclarations. État initial NV partout.

**Niveaux de preuve** : `DOCUMENTED / DETERMINISTIC / INTEGRATION / BROWSER / LIVE / REAL`. Ne pas transformer une fixture ou un PASS déterministe en comportement REAL. Une nouvelle modification peut rouvrir un point anciennement vérifié.

**Protocole de mise à jour après Review Pack** : (1) figer contrat/branche/HEAD/base et SHA/build ; (2) lire pack et contenu/diffs complets ; (3) comparer chaque ligne touchée au contrat et à ses preuves ; (4) inscrire État/Preuve/écarts ; (5) vérifier les non-régressions ; (6) proposer verdict borné et suite à Morris. Pas de micro-revue après chaque événement SDK ou commit.

## 2. Documents de référence et sources obligatoires

- [Contrat fonctionnel ML5 v0.5](https://github.com/mcleland147/sfia-workspace/blob/3e84d528abe548e29b6ed3e9f12a100ca5c41151/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md), §§1–19 et Q-01…Q-56.
- [Architecture candidate ML5 A/B/C/D](https://github.com/mcleland147/sfia-workspace/blob/3e84d528abe548e29b6ed3e9f12a100ca5c41151/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md), particulièrement §§15–18.14.
- [Méthode Figma ↔ Cursor v1.1 — source obligatoire avant UX](https://github.com/mcleland147/sfia-workspace/blob/997897fd7cf914771e7d08e8030dc7123fab7d25/projects/sfia-studio-next/ux-ui/methodologie-contrat-figma-cursor.md). **L0/L1/L2 avant code ; oracles PNG/empreintes, mapping natif/DOM et comparaisons F2/browser après code.**
- R2 propriétaires : `conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md`, `connaissance-sujets-et-continuite-du-projet.md`, `trajectoire-cycles-et-guidance-cki.md`, `decisions-et-gouvernance-du-pilote.md`, `realisation-operationnelle-gouvernee.md`, `resultats-et-preuves.md`, `integration-git-gouvernee.md`.
- Figma : fileKey `itgvCulInEnFY6DvgIegvP`, **page 12** (14 états 12.01–12.14). Maquette = spécification visuelle, pas preuve de runtime ni permission d'exécuter.
- `governance/SEF.md` v0.2, `governance/roadmap.md`, décisions R4/ML4/ML5, `governance/product-naming-conventions.md`, ENV-01, product-versioning.
- SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` (pas de template concurrent).
- Campagne SDK ML5 C9 : `sfia/review-handoff@bacee519`, preuve **PASS WITH RESERVES** en sandbox isolée et **pas** intégration Next / GitHub REAL / MCP Figma-Canva.

## 3. Inventaire fonctionnel suivi

**99 points de contrôle** répartis en 9 familles. Ils consolidisent les comportements du contrat ML5 sans créer de nouvelles règles R2 ni transformer le registre en spécification normative.

### A. Conduite cognitive transverse de Nora
**Responsabilités :** D3, D4. **Sources :** Contrat fonctionnel ML5 §§3–5, 13 ; architecture §15.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | — |
| ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | — |
| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | NV | — |
| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | NV | — |
| ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | — |
| ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | — |
| ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | NV | — |
| ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | — |
| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | NV | — |
| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | NV | — |
| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | NV | — |
| ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | — |

### B. Recherche et lecture web publique
**Responsabilités :** D3 / outil hébergé B1 candidat. **Sources :** Contrat ML5 §5.5, §13 ; architecture §16.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `B01` | Déclencher une recherche web publique seulement lorsqu'elle apporte une valeur déterminante ; lecture seule. | NV | — |
| ☐ | `B02` | Ouvrir effectivement les pages utiles et, si disponible, y rechercher/ouvrir les références nécessaires au lieu d'exploiter uniquement des résultats indexés. | NV | — |
| ☐ | `B03` | Confronter sources, dates, version fournisseur et applicabilité ; document officiel ≠ fonction disponible dans Next. | NV | — |
| ☐ | `B04` | Afficher des citations/liens sources utilisables et les métadonnées de fraîcheur réellement établies. | NV | — |
| ☐ | `B05` | Distinguer source découverte, page ouverte, extrait disponible, couverture partielle et fait vérifié ; ne jamais inventer une lecture complète. | NV | — |
| ☐ | `B06` | Neutraliser les injections d'instructions issues de pages/snippets et ne leur attribuer aucun droit D6/D7/Git. | NV | — |
| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | NV | — |
| ☐ | `B08` | Traiter timeout, pages/PDF indisponibles, budget/coût/latence, échec et reprise avec limite honnête et sans crawler parallèle par défaut. | NV | — |
| ☐ | `B09` | Prouver la compatibilité du fournisseur/outillage web avec le runtime D3 et la réponse structurée, sur modèle/version réels. | NV | — |

### C. Activité fonctionnelle de Nora pendant ses travaux
**Responsabilités :** D3 ; projection corrélée, sans seconde autorité. **Sources :** Contrat ML5 §6 ; architecture §17.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | NV | — |
| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | NV | — |
| ☐ | `C03` | Relier les événements aux lectures D4/historique/Git/web réellement effectuées et à leur couverture. | NV | — |
| ☐ | `C04` | Afficher statut, limites et erreurs proportionnés, sans pourcentage fictif, lecture inventée ou résultat présumé. | NV | — |
| ☐ | `C05` | Proposer résumé compact et détail repliable, sans console brute ni raisonnement privé. | NV | — |
| ☐ | `C06` | Corréler chaque activité à l'identité du bon tour/opération, la persister raisonnablement et la retrouver après reconnexion. | NV | — |
| ☐ | `C07` | Vérifier la fraîcheur réelle du polling/transport et l'absence de régression d'événements/doublons et d'affichage LIVE fictif. | NV | — |
| ☐ | `C08` | Appliquer isolation, secrets, filtrage et droits ; ne pas créer de commandes de micro-pilotage de l'activité. | NV | — |

### D. Contrat Cursor, inspection et HumanDecision
**Responsabilités :** D3/D6/D7 (D9 si Git). **Sources :** Contrat ML5 §§4, 7–8, 19 ; R2 D6/D7 ; Figma 12.02/12.03/12.14.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | — |
| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | NV | — |
| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | NV | — |
| ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | NV | — |
| ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | NV | — |
| ☐ | `D06` | Afficher l'instruction technique complète en lecture défilante, sans troncature ni substitution des champs de réponse Nora. | NV | — |
| ☐ | `D07` | Garantir identité de version/empreinte entre texte inspecté, texte autorisé et octets effectivement transmis au SDK. | NV | — |
| ☐ | `D08` | Requalifier un changement matériel d'instruction, périmètre, cible, risque, droit ou version avant lancement. | NV | — |
| ☐ | `D09` | Implémenter la visionneuse Travail 50/50 avec fil Nora utilisable, carte de contrat et navigation vers Exécution. | NV | — |
| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | NV | — |
| ☐ | `D11` | Recontrôler D6/D7/D9 et capacités/permissions réelles au point d'effet ; interdictions et suspensions opposables. | NV | — |
| ☐ | `D12` | Conserver lien au bon projet, Pilote, contrat et cycle d'origine le cas échéant, sans imposer de cycle. | NV | — |

### E. Dispatch, exécution LIVE, arrêt et reprise Cursor SDK
**Responsabilités :** D7, D6 ; Cursor environnement d'exécution administré hors Studio. **Sources :** Contrat ML5 §§9, 17–19 ; architecture §18 ; SDK C9.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `E01` | Déclencher Cursor SDK automatiquement depuis Studio sans copier-coller ni conversation Cursor manuelle par mission. | NV | — |
| ☐ | `E02` | Exécuter dans l'environnement Cursor effectif ; Cursor Desktop demeure disponible pour administration, comptes, MCP et authentifications. | NV | — |
| ☐ | `E03` | Créer/récupérer une tentative unique avec projet, Pilote, contrat/version/empreinte et mandat. | NV | — |
| ☐ | `E04` | Persister identité/autorité/tentative et contexte avant send/dispatch ; séparer store SDK et vérité métier D7. | NV | — |
| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | NV | — |
| ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | NV | — |
| ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | NV | — |
| ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | NV | — |
| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | NV | — |
| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | NV | — |
| ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | NV | — |
| ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | — |
| ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | NV | — |
| ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | NV | — |
| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | NV | — |

### F. Git de travail et continuité des réalisations
**Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | NV | — |
| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | NV | — |
| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | NV | — |
| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | NV | — |
| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | NV | — |
| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | NV | — |
| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | NV | — |
| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | NV | — |
| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | NV | — |

### G. Handoff par tentative, qualification D8/D9 et analyse Nora
**Responsabilités :** D7/D8/D9/D3. **Sources :** Contrat ML5 §§10–11,17.3–17.4,18.3,19.5 ; R2 D8.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `G01` | Créer un dossier/handoff identifié et non écrasé pour chaque tentative, distinct du handoff externe SFIA v2.6. | NV | — |
| ☐ | `G02` | Porter contrat/version/empreinte, tentative, exécutant, environnement, état, branche/base/SHAs connus. | NV | — |
| ☐ | `G03` | Décrire réalisé/non réalisé, sources consultées, commandes, actions, incidents, STOP, tests et réserves. | NV | — |
| ☐ | `G04` | Inventorier exhaustivement les fichiers créés, modifiés, déplacés et supprimés, y compris tests, code, scripts, docs et pièces. | NV | — |
| ☐ | `G05` | Fournir contenu réellement lisible par SHA/diff/sections, ou contenu texte sûr dans rapport, sinon lacune explicite. | NV | — |
| ☐ | `G06` | Séparer tests déclarés, réellement exécutés, capturés, non exécutés et couverture vérifiée. | NV | — |
| ☐ | `G07` | Rendre accessibles captures originales runtime, références Figma/frame, manifestes et preuves spécialisées nécessaires. | NV | — |
| ☐ | `G08` | Conserver handoff et artefacts à références durables, sans latest multi-tentatives ni confusion SFIA v2.6. | NV | — |
| ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | NV | — |
| ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | NV | — |
| ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | NV | — |
| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | NV | — |
| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | NV | — |
| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | NV | — |
| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | NV | — |

### H. UX Figma page 12 et fidélité de transposition
**Responsabilités :** R3 UX / D3 D6 D7 D8 D9 ; Cursor exécute sous méthode Figma v1.1. **Sources :** Figma file itgvCulInEnFY6DvgIegvP page 12 ; ux-ui/methodologie-contrat-figma-cursor.md v1.1.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | — |
| ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | — |
| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | NV | — |
| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | NV | — |
| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | NV | — |
| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | NV | — |
| ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | — |
| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | NV | — |

### I. Non-régression, qualité, preuve et gouvernance
**Responsabilités :** Transverse D1–D9 / SEF / ENV-01. **Sources :** SEF v0.2, ENV-01, product-versioning, SFIA v2.6 ; ML5 architecture A–D.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
| ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | NV | — |
| ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
| ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
| ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
| ☐ | `I07` | Distinguer simulation, DETERMINISTIC, INTEGRATION, BROWSER, SDK LIVE et effet GitHub/MCP REAL. | NV | — |
| ☐ | `I08` | Limiter les essais GitHub REAL et MCP/Figma/Canva aux capacités effectivement concernées et aux GO réels. | NV | — |
| ☐ | `I09` | Synchroniser code, UX, architecture et as-built ; changer de schéma/autorité uniquement sur gate Morris. | NV | — |
| ☐ | `I10` | Prouver le parcours intégré Nora→contrat inspecté→HumanDecision→Cursor→retours→D8/D9→avis Nora→suite. | NV | — |
| ☐ | `I11` | Respecter ENV-01 DEV/RECETTE/STABLE, versioning NO RELEASE, recette SHA figé, PR/merge/promotion sous GO et ADOPTED jamais automatique. | NV | — |

## 4. Contrôle transversal des 56 scénarios de recette fonctionnelle

Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comportements de référence. Après chaque livraison, contrôler **les scénarios réellement dans le périmètre de la tentative** ; au bilan ML5, vérifier que chaque cas pertinent est couvert, reporté avec preuve ou EXCLU sous arbitrage Morris.

| Scénarios source | Familles principalement concernées |
|---|---|
| Q-01…Q-07 | A / D — mandat, initiative, correction et refus d'auto-relance |
| Q-08…Q-18 | A / B / C / D / F — cognition transverse, sources, longueur, provenance |
| Q-19…Q-23 | B / I — recherche web, dates, sécurité, indisponibilité |
| Q-24…Q-26 | C / H — activité annoncée/observée, sas et documents |
| Q-27…Q-33 | D / E / H — visionneuse, confirmation, autorité, tentative et cycle |
| Q-34…Q-38 | G / H — résultats, preuves, avis, réception et retour Nora |
| Q-39…Q-41 | E / C / I — reconnexion, STOP et activité LIVE sobre |
| Q-42…Q-48 | F / G / I — Git, handoff, pièces, contrôle D8 et continuité |
| Q-49…Q-56 | D / E / G / I — transmission intégrale, administration Cursor, MCP conditionnel, reprise et restitution |

**Condition d'intégrité de couverture :** une ligne A–I ou un scénario Q applicable ne peut disparaître sans trace d'un arbitrage explicitement attribué. Une mention « réalisé » sans ref et preuve n'est jamais `VERIFIÉ`.

## 5. Journal des livraisons et revues

| ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
|---|---|---|---|---|---|---|
| R-001 | — | — | — | — | — | NON RÉALISÉE |

Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.

## 6. Registre d'écarts, corrections, réserves et dette

| ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |

Chaque réserve transférée comporte **propriétaire, impact, preuve attendue, condition de sortie et moment de relecture**. Une correction technique ne déclenche pas de nouvelle tentative Cursor sans GO lorsqu'un nouvel acte d'effet est requis.

## 7. Vigilances initiales (risques, non défauts constatés)

| ID | Attention particulière de revue | Condition de vérification |
|---|---|---|
| V-01 | Contrat long | Empreinte/version : texte inspecté = texte envoyé, sans troncature liée à `replyDraft`. |
| V-02 | ACK perdu / crash SDK | Tentative unique, fencing, run retrouvé ou état UNKNOWN, jamais nouveau dispatch aveugle. |
| V-03 | Réutilisation D7 | Étendre le propriétaire d'effets/tentatives existant, pas un deuxième moteur. |
| V-04 | Handoff | Diff complet, inventaire toutes créations/modifications/suppressions et artefacts lisibles, D8 réellement recoupé. |
| V-05 | Web | Provenance réelle, non-exfiltration, compatibilité SDK/effort et limites de lecture. |
| V-06 | Activité Nora | Événements effectivement accessibles pendant le travail, sans streaming ou progrès fictifs. |
| V-07 | MCP headless (conditionnel) | **Non bloquant global ML5** : administration MCP dans Cursor Desktop conservée ; vérifier seulement la mission MCP concernée et les droits effectifs du SDK. |
| V-08 | Figma | **Méthode v1.1 obligatoire** : L0/L1/L2, actifs/icons exacts, PNG source hashé, DOM/F2 ≤2 px des rectangles stables, comparaison par région et BROWSER au même état. |
| V-09 | Git réel | Publication distante seulement si mission Git et mandat ; SHA vérifié, local non publié distingué, aucun PR/merge induit. |

## 8. Réception et clôture de couverture

- [ ] Chaque exigence applicable A–I possède statut, preuve, source et limite.
- [ ] Les Q-01…Q-56 applicables ont une couverture, une réserve ou une exclusion Morris explicite.
- [ ] Aucun `PARTIEL/BLOQUÉ/NV` n'est masqué par un verdict global ; décision de report explicite et condition de sortie.
- [ ] Un parcours intégré Nora → contrat → acte D6 → Cursor SDK → fin/interruption → D7/D9/D8 → avis Nora est éprouvé au niveau demandé.
- [ ] Les preuves UX/browser et REAL concernées sont attribuées aux bons SHA/build, avec non-régression des parcours existants.
- [ ] Rapport SFIA v2.6 complet et handoff distant vérifié ; différences entre processus externe et handoff Studio conservées.
- [ ] Code/tests/architecture/UX/as-built synchronisés ; dette et capacité suivante qualifiées.
- [ ] Décision Morris de réception, intégration, promotion et adoption traitée séparément.

**État initial :** `DRAFT REVIEW REGISTRY / ALL ITEMS NV / GATE C OPEN / NO BUILD GO / NO RELEASE / NOT ADOPTED`.

**Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.
