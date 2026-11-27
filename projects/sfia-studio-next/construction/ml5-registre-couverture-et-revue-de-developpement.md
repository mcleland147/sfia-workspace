# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **Suivi courant 27/11 — checkpoint MaintiPlan T01–T08 (candidat documentaire factuel) :** [PV](recette-utilisateur-ml5-maintiplan-20261127.md) · [bilan intégré](convergence-openai-studio/bilan-integre-20261127.md) · [manifeste](ml5-recette-cutover-manifest-20261127.md). Candidat e8e6e069/BUILD rpEczSp61evIZ7d6fnIWR, PG 027 ; trois macro-lots livrés en RECETTE, activation A1–A6, pas acceptation globale. 17 MP OPEN, 1 critique/11 hautes/5 moyennes ; R02 et R04 nominal partiels, R06 FAIL, R01/03/05/07/08 partiels. CA-01/03/09/10 partiels ; 99 IDs et T/Q/PF non requalifiés individuellement. D7/D8 hors campagne, WEB/Admin OFF. Le registre local v0.29 rapporté dans Handoff 9ec930e2 n'est pas intégralement disponible sur branche distante : cette note D1 ne le remplace pas et ne réinitialise aucun statut historique. Réconcilier avec local dans le diagnostic. R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED / NO RELEASE / NOT ADOPTED.

> **Suivi courant ML5 — 24/11/2026 (candidat documentaire) :** [journal UAT](./recette-utilisateur-ml5-pilotage-360-20261124.md). Etats historiques conservés à leur SHA ; aucune nouvelle acceptation ni règle normative.


> **Lecture courante post-C22 :** [revue indépendante §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md), addendum en fin de document. États antérieurs historiques ; critères et décisions conservés.

> **Lecture courante post-C20 :** [synthèse globale](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel), addendum factuel en fin de document. État historique pré-C20 conservé ; pas d'acceptation ni de changement des règles.

> **Lecture prioritaire — revue approfondie post-C14 du 24/11/2026 : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.** Voir [revue complète](./ml5-revue-approfondie-conformite-post-c14.md) et complément courant en fin de document. Snapshot de code consulté, worktree NON OBSERVÉ ; C14 présence 2/97/0 rapportée, conformité partielle. R-004 reste historique et opposable pour les exigences ; trois lots de convergence approuvés comme trajectoire, aucun GO C15 ni publication code.

> **Lecture prioritaire — R-004 du 24/11/2026 : ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED.** Consolidation documentaire sous GO Morris ; candidat local C3–C13 non publié, code courant NON OBSERVÉ directement. Les états R-001/R-002/R-003 et les critères d'acceptation antérieurs restent historiques ; les réserves et exigences ne sont pas effacées. Pas de publication code ni de préparation de promotion dans le présent lot. Figma F2 est conservé pour recette UX, non bloquant pour les validations fonctionnelles indépendantes. Références actualisées : [contrat fonctionnel v0.6 §21](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) et [architecture v0.10 §20](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md), branche documentaire candidate non mergée. La conduite sémantique IA est un arbitrage Morris validé en contenu ; pas de déclencheur décisionnel lexical/regex/longueur. Aucun ADOPTED.

> **Registre de revue ML5 — contenu validé comme support de suivi par Morris ; Gate C accepté avec réserves et GO de construction ML5 exprimés le 23/11/2026.** Aucun GO implicite de push projet, PR, merge, recette/cutover, release, adoption ou promotion.

| Champ | Valeur |
|---|---|
| Version | **v0.5 candidate — checkpoint R-004, 24 novembre 2026 ; v0.4/R-003 historique** : R-001/R-002 historiques conservés ; inventaire d'implémentation cycle 6 (rapporté) et revue de cohérence R1/R2/ML5 ; non mergée |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; décision + conception `sfia/next-nora-cognition-cursor-contract-candidate@1e6929c543a88606488094be2f5dfe7fc34a0cb9` ; handoff C6 `b5466dd7739436dc1ce58ce18888165b682f87e8` |
| Gate | **GATE C ACCEPTÉ PAR MORRIS AVEC RÉSERVES / GO CONSTRUCTION ML5** — décision explicite du 23/11/2026 dans la conversation ; la Roadmap de `main` présente encore son instantané antérieur `OPEN` et reste à synchroniser sous mandat D2 approprié. |
| Publication | Document de pilotage **non normatif**, sur branche candidate non mergée ; consigne la décision Morris exprimée, sans prétendre modifier automatiquement les décisions/roadmap de `main`. |
| Suivi | ChatGPT qualifie les Review Packs/écarts ; Cursor fournit réalisation/rapports ; Morris décide les arbitrages |

## Décision Morris — clôture ML4 avec réserves et ouverture ML5 (23/11/2026)

**Acte exprimé dans la conversation :** Morris valide la clôture du périmètre ML4 avec réserves, le passage de Gate C, l'ouverture de ML5 et le **GO pour engager sa construction**. Ce GO porte sur la réalisation de ML5 sous SFIA v2.6 et le respect du présent registre ; il ne valide pas d'avance les choix d'architecture encore candidats, le résultat technique, la qualification R6 ou une opération Git de livraison.

**Réserves ML4 conservées sans requalification fictive :**

1. `WRITE-07` — perte d'ACK/retry REAL non testés ; directement pertinent pour l'unicité des dispatchs Cursor ML5.
2. `PREVIEW-02/03/05/06/07/11` — couverture et fidélité partielles, exit selon les surfaces affectées et R6.
3. `D6/D7/D8` — audit REAL partiel des autorités et faits persistés.
4. Merge GitHub REAL — non exécuté et non prouvé ; aucun contournement des protections du sandbox autorisé.
5. Protections GitHub — visibilité partielle des règles/rôles et droits.
6. R6 global — résilience, concurrence, reprises et scénarios de conformité encore à qualifier.

**Mandat applicable au chantier ML5 :** construction sous contrat Cursor SFIA v2.6, revue de chaque livraison et mise à jour de la couverture. Les intégrations d'exécution doivent respecter les propriétaires existants. Les décisions majeures de persistance, d'architecture, d'autorité, de permissions ou de trajectoire restent réservées à Morris. **Pas de push branche produit, PR, merge, suppression, migration de lane protégée, cutover RECETTE, STABLE, release ou ADOPTED sans GO propre.** Le Review Handoff L3 mono-fichier autorisé par SFIA v2.6 est distinct.

**Statut Git :** la présente décision est consignée sur la **branche candidate**, non intégrée à `main`. La Roadmap `main` restera historiquement `Gate C OPEN` tant qu'une synchronisation D2 et une intégration gouvernée ne sont pas intervenues ; **ne pas interpréter cet instantané antérieur comme une révocation de la décision explicite Morris du 23/11/2026**. La décision ne vaut pas merge.

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

> **Lecture au 23/11/2026, checkpoint R-003 :** la colonne **Impl. C6** reproduit la classification de présence de code **rapportée** dans le Review Pack du cycle 6 : `IMPLEMENTED` (E13), `PARTIAL` (92 lignes), `NOT_IMPL` (B04, B09, E12, G07, H08, I10). **La colonne `État` et les pièces déjà renseignées restent le constat historique de conformité R-002**, et ne sont pas automatiquement requalifiées par cette projection. Ce sont deux axes distincts : `PARTIAL` en présence ≠ `PARTIEL` en conformité ≠ `VERIFIÉ`. Le code du worktree local DIRTY n'est pas accessible à ChatGPT et aucune revue BROWSER/F2/LIVE/REAL globale n'est acquise.

**99 points de contrôle** répartis en 9 familles. Ils consolidisent les comportements du contrat ML5 sans créer de nouvelles règles R2 ni transformer le registre en spécification normative.

### A. Conduite cognitive transverse de Nora
**Responsabilités :** D3, D4. **Sources :** Contrat fonctionnel ML5 §§3–5, 13 ; architecture §15.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | PARTIAL* | — |
| ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | PARTIAL* | — |
| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | NV | PARTIAL* | — |
| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | NV | PARTIAL* | — |
| ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | PARTIAL* | — |
| ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | PARTIAL* | — |
| ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | NV | PARTIAL* | — |
| ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | PARTIAL* | — |
| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | PARTIAL* | `investigation-state.ts` + unit ; non branché tour LIVE |
| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | PARTIAL* | État mémoire A ; pas encore checkpoint durable A |
| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | PARTIAL* | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
| ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | PARTIAL* | — |

### B. Recherche et lecture web publique
**Responsabilités :** D3 / outil hébergé B1 candidat. **Sources :** Contrat ML5 §5.5, §13 ; architecture §16.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `B01` | Déclencher une recherche web publique seulement lorsqu'elle apporte une valeur déterminante ; lecture seule. | NV | PARTIAL* | — |
| ☐ | `B02` | Ouvrir effectivement les pages utiles et, si disponible, y rechercher/ouvrir les références nécessaires au lieu d'exploiter uniquement des résultats indexés. | NV | PARTIAL* | — |
| ☐ | `B03` | Confronter sources, dates, version fournisseur et applicabilité ; document officiel ≠ fonction disponible dans Next. | NV | PARTIAL* | — |
| ☐ | `B04` | Afficher des citations/liens sources utilisables et les métadonnées de fraîcheur réellement établies. | NV | NOT_IMPL* | — |
| ☐ | `B05` | Distinguer source découverte, page ouverte, extrait disponible, couverture partielle et fait vérifié ; ne jamais inventer une lecture complète. | NV | PARTIAL* | — |
| ☐ | `B06` | Neutraliser les injections d'instructions issues de pages/snippets et ne leur attribuer aucun droit D6/D7/Git. | PARTIEL | PARTIAL* | Instructions système + résultats non-autorité ; LIVE injection non prouvée |
| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | PARTIEL | PARTIAL* | P0-03 : outil détaché tant que `SFIA_WEB_SEARCH_ISOLATION_PROVEN≠1` ; sanitize DETERMINISTIC ; LIVE non-exfil NOT PROVEN |
| ☐ | `B08` | Traiter timeout, pages/PDF indisponibles, budget/coût/latence, échec et reprise avec limite honnête et sans crawler parallèle par défaut. | NV | PARTIAL* | — |
| ☐ | `B09` | Prouver la compatibilité du fournisseur/outillage web avec le runtime D3 et la réponse structurée, sur modèle/version réels. | NV | NOT_IMPL* | — |

### C. Activité fonctionnelle de Nora pendant ses travaux
**Responsabilités :** D3 ; projection corrélée, sans seconde autorité. **Sources :** Contrat ML5 §6 ; architecture §17.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | PARTIEL | PARTIAL* | Producteur `appendActivityEvent` branché au tour Nora (ANNOUNCED→COMPLETED) ; UI fil partielle |
| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | PARTIEL | PARTIAL* | Natures ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN ; séquence sous lock PG |
| ☐ | `C03` | Relier les événements aux lectures D4/historique/Git/web réellement effectuées et à leur couverture. | NV | PARTIAL* | — |
| ☐ | `C04` | Afficher statut, limites et erreurs proportionnés, sans pourcentage fictif, lecture inventée ou résultat présumé. | NV | PARTIAL* | — |
| ☐ | `C05` | Proposer résumé compact et détail repliable, sans console brute ni raisonnement privé. | NV | PARTIAL* | — |
| ☐ | `C06` | Corréler chaque activité à l'identité du bon tour/opération, la persister raisonnablement et la retrouver après reconnexion. | NV | PARTIAL* | — |
| ☐ | `C07` | Vérifier la fraîcheur réelle du polling/transport et l'absence de régression d'événements/doublons et d'affichage LIVE fictif. | NV | PARTIAL* | — |
| ☐ | `C08` | Appliquer isolation, secrets, filtrage et droits ; ne pas créer de commandes de micro-pilotage de l'activité. | NV | PARTIAL* | — |

### D. Contrat Cursor, inspection et HumanDecision
**Responsabilités :** D3/D6/D7 (D9 si Git). **Sources :** Contrat ML5 §§4, 7–8, 19 ; R2 D6/D7 ; Figma 12.02/12.03/12.14.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | PARTIAL* | — |
| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | PARTIAL* | DRAFT≠READY ; `markReady` + unknownRestrictions ; syntaxe ≠ suffisance |
| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | PARTIAL* | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
| ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | PARTIAL* | `ContractViewer` ; BROWSER Figma F2 manquant |
| ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | PARTIAL* | `ContractViewer` volets ; F2 manquant |
| ☐ | `D06` | Afficher l'instruction technique complète en lecture défilante, sans troncature ni substitution des champs de réponse Nora. | PARTIEL | PARTIAL* | Stockage full `instruction_text` + UI expand ; F2 12.14 manquant |
| ☐ | `D07` | Garantir identité de version/empreinte entre texte inspecté, texte autorisé et octets effectivement transmis au SDK. | PARTIEL | PARTIAL* | Fingerprint + authorize inspect match + dispatch recheck ; LIVE SDK non prouvé |
| ☐ | `D08` | Requalifier un changement matériel d'instruction, périmètre, cible, risque, droit ou version avant lancement. | PARTIEL | PARTIAL* | `isMaterialContractChange` + requalification au dispatch |
| ☐ | `D09` | Implémenter la visionneuse Travail 50/50 avec fil Nora utilisable, carte de contrat et navigation vers Exécution. | NV | PARTIAL* | — |
| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | PARTIEL | PARTIAL* | `confirmed:true` requis API + dialog `d6-confirm-launch` dans `CursorRealizationSurface` ; BROWSER F2 non prouvé |
| ☐ | `D11` | Recontrôler D6/D7/D9 et capacités/permissions réelles au point d'effet ; interdictions et suspensions opposables. | PARTIEL | PARTIAL* | `assertCurrentCursorAuthority` au dispatch ; MCP réel non vérifié |
| ☐ | `D12` | Conserver lien au bon projet, Pilote, contrat et cycle d'origine le cas échéant, sans imposer de cycle. | PARTIEL | PARTIAL* | attempt/contract/pilot/project liés |

### E. Dispatch, exécution LIVE, arrêt et reprise Cursor SDK
**Responsabilités :** D7, D6 ; Cursor environnement d'exécution administré hors Studio. **Sources :** Contrat ML5 §§9, 17–19 ; architecture §18 ; SDK C9.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `E01` | Déclencher Cursor SDK automatiquement depuis Studio sans copier-coller ni conversation Cursor manuelle par mission. | PARTIEL | PARTIAL* | Dispatch service SCRIPTED ; LIVE entitlement non prouvé |
| ☐ | `E02` | Exécuter dans l'environnement Cursor effectif ; Cursor Desktop demeure disponible pour administration, comptes, MCP et authentifications. | PARTIEL | PARTIAL* | Pas d'admin Desktop dans Studio ; LIVE cwd à qualifier |
| ☐ | `E03` | Créer/récupérer une tentative unique avec projet, Pilote, contrat/version/empreinte et mandat. | PARTIEL | PARTIAL* | `prepareCursorExecution` + correlationKey |
| ☐ | `E04` | Persister identité/autorité/tentative et contexte avant send/dispatch ; séparer store SDK et vérité métier D7. | PARTIEL | PARTIAL* | claim avant send ; resultJson D7 |
| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | PARTIEL | PARTIAL* | LIVE `waitForTerminal=false` après ACK ; SCRIPTED terminal immédiat ; worker prod non imposé |
| ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | PARTIAL* | Projection resultJson ; UI Exécution partielle |
| ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | PARTIAL* | `CursorLiveProjection` fields |
| ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | PARTIAL* | stop API + limits CANCEL_IS_NOT_ROLLBACK |
| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | PARTIAL* | P0-01 CAS `claimCursorAttempt` ; PG concurrent 1 win ; no blind redispatch DISPATCHED |
| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | PARTIAL* | reconcile sans redispatch ; stale claimToken fenced (PG) |
| ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | PARTIAL* | Tables durables ; UI historique 12.04 non câblée |
| ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | NOT_IMPL* | mcpRequired listé dans plan ; vérification LIVE non faite |
| ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | PARTIEL | IMPLEMENTED* | Aucun admin MCP ajouté |
| ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | PARTIEL | PARTIAL* | gitScope/mcp optionnels sur plan |
| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | PARTIAL* | P0-02 `resolveCursorWorkspace` sous `SFIA_CURSOR_WORKSPACE_ROOT` ; client cwd refusé ; LIVE isolation OS NOT PROVEN |

### F. Git de travail et continuité des réalisations
**Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | NV | PARTIAL* | — |
| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | NV | PARTIAL* | — |
| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | NV | PARTIAL* | — |
| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | NV | PARTIAL* | — |
| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | NV | PARTIAL* | — |
| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | NV | PARTIAL* | — |
| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | NV | PARTIAL* | — |
| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | NV | PARTIAL* | — |
| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | NV | PARTIAL* | — |

### G. Handoff par tentative, qualification D8/D9 et analyse Nora
**Responsabilités :** D7/D8/D9/D3. **Sources :** Contrat ML5 §§10–11,17.3–17.4,18.3,19.5 ; R2 D8.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `G01` | Créer un dossier/handoff identifié et non écrasé pour chaque tentative, distinct du handoff externe SFIA v2.6. | PARTIEL | PARTIAL* | `realization_handoffs` UNIQUE attempt ; immutable |
| ☐ | `G02` | Porter contrat/version/empreinte, tentative, exécutant, environnement, état, branche/base/SHAs connus. | PARTIEL | PARTIAL* | Champs handoff + manifest.git optionnel |
| ☐ | `G03` | Décrire réalisé/non réalisé, sources consultées, commandes, actions, incidents, STOP, tests et réserves. | PARTIEL | PARTIAL* | Rapport markdown + gaps ; format libre |
| ☐ | `G04` | Inventorier exhaustivement les fichiers créés, modifiés, déplacés et supprimés, y compris tests, code, scripts, docs et pièces. | PARTIEL | PARTIAL* | Manifest inventaire ; enforcement INCOMPLETE si vide |
| ☐ | `G05` | Fournir contenu réellement lisible par SHA/diff/sections, ou contenu texte sûr dans rapport, sinon lacune explicite. | EC | PARTIAL* | Contenu via reportMarkdown ; accès Git D9 non branché ici |
| ☐ | `G06` | Séparer tests déclarés, réellement exécutés, capturés, non exécutés et couverture vérifiée. | PARTIEL | PARTIAL* | Champs manifest + D8 refuse PASS sans capture |
| ☐ | `G07` | Rendre accessibles captures originales runtime, références Figma/frame, manifestes et preuves spécialisées nécessaires. | NV | NOT_IMPL* | Non implémenté stockage captures |
| ☐ | `G08` | Conserver handoff et artefacts à références durables, sans latest multi-tentatives ni confusion SFIA v2.6. | PARTIEL | PARTIAL* | Une ligne/attempt ; pas de latest produit |
| ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | PARTIAL* | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
| ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | PARTIAL* | D7+D8 ; D9 recoupement Git Cursor non branché |
| ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | PARTIAL* | `qualifyCursorRealization` + `RealizationBilan` |
| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | PARTIAL* | Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`) ; run Nora cognitif encore ouvert |
| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | PARTIAL* | Labels + `CursorRealizationSurface` sur `?surface=publication` |
| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | PARTIAL* | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | NV | PARTIAL* | — |

### H. UX Figma page 12 et fidélité de transposition
**Responsabilités :** R3 UX / D3 D6 D7 D8 D9 ; Cursor exécute sous méthode Figma v1.1. **Sources :** Figma file itgvCulInEnFY6DvgIegvP page 12 ; ux-ui/methodologie-contrat-figma-cursor.md v1.1.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | PARTIAL* | — |
| ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | PARTIAL* | — |
| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | NV | PARTIAL* | — |
| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | NV | PARTIAL* | — |
| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | NV | PARTIAL* | — |
| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | NV | PARTIAL* | — |
| ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | PARTIAL* | — |
| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | NOT_IMPL* | L0+L1 metadata 14 frames + design context 12.02 ; F2/BROWSER runtime NOT PROVEN |

### I. Non-régression, qualité, preuve et gouvernance
**Responsabilités :** Transverse D1–D9 / SEF / ENV-01. **Sources :** SEF v0.2, ENV-01, product-versioning, SFIA v2.6 ; ML5 architecture A–D.

| Revu | ID | Exigence de résultat / comportement attendu | État R-002 | Impl. C6 déclarée | Preuve / réserve R-002 |
|---|---|---|---|---|---|
| ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | PARTIAL* | — |
| ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | PARTIAL* | — |
| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | NV | PARTIAL* | — |
| ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | PARTIAL* | — |
| ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | PARTIAL* | — |
| ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | PARTIAL* | — |
| ☐ | `I07` | Distinguer simulation, DETERMINISTIC, INTEGRATION, BROWSER, SDK LIVE et effet GitHub/MCP REAL. | NV | PARTIAL* | — |
| ☐ | `I08` | Limiter les essais GitHub REAL et MCP/Figma/Canva aux capacités effectivement concernées et aux GO réels. | NV | PARTIAL* | — |
| ☐ | `I09` | Synchroniser code, UX, architecture et as-built ; changer de schéma/autorité uniquement sur gate Morris. | NV | PARTIAL* | — |
| ☐ | `I10` | Prouver le parcours intégré Nora→contrat inspecté→HumanDecision→Cursor→retours→D8/D9→avis Nora→suite. | NV | NOT_IMPL* | — |
| ☐ | `I11` | Respecter ENV-01 DEV/RECETTE/STABLE, versioning NO RELEASE, recette SHA figé, PR/merge/promotion sous GO et ADOPTED jamais automatique. | NV | PARTIAL* | — |

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

## 4 bis. Revue de conformité transversale et contrat d'acceptation — R-002 (23/11/2026)

> **SNAPSHOT HISTORIQUE R-002** — comptes `44 PARTIEL / 1 EC / 54 NV`, sources cycles 1–2 et recommandation historique Git B. **Non état courant de l'implémentation** et **supplanté pour les arbitrages par la décision Morris option A du 23/11**. Voir checkpoint R-003 ci-dessous. La mise à jour des lignes de conformité exige un recoupement du code local, des scénarios et des preuves par ref ; le présent checkpoint n'invente pas ce recoupement.

**Contrat d'acceptation intégré candidat :** [Cognition et réalisation gouvernée](./contrat-acceptation-cognition-et-realisation-gouvernee.md). Le présent registre demeure le **seul index de couverture des 99 exigences**. Les 12 cas intégrateurs du contrat d'acceptation sont des regroupements d'oracles de qualification, **pas** un remplacement des Q-01…Q-56 ni des PF propriétaires.

**État reconstitué (sources : deux Review Packs FULL distants) :** 44 PARTIEL, 1 EC, 54 NV, **0 VÉRIFIÉ** au niveau d'acceptation complet. Les preuves unitaires/PostgreSQL ne valent ni BROWSER, ni F2, ni LIVE SDK, ni REAL GitHub. Les statuts des lignes ci-dessus reprennent les changements explicitement tracés dans les diffs des deux handoffs. **Le HEAD produit local `6cf33e99…` n'a pas été lu directement par ChatGPT : son tree, son état et ses tests restent NON OBSERVÉS indépendamment.** Les tests PASS sont déclarés dans les rapports.

| Famille | Total | PARTIEL | EC | NV | Résultat produit manquant |
|---|---:|---:|---:|---:|---|
| A — Conduite cognitive | 12 | 3 | 0 | 9 | Investigation Nora et préparation réelle du contrat |
| B — Recherche web | 9 | 2 | 0 | 7 | Isolation publique et lecture WEB LIVE |
| C — Activité Nora | 8 | 2 | 0 | 6 | Observations outils, fil courant et reconnexion |
| D — Contrat / autorité | 12 | 10 | 0 | 2 | READY établi côté serveur, inspection 50/50, fidélité intégrale |
| E — Cursor SDK / D7 | 15 | 14 | 0 | 1 | ACK perdu sans double effet, supervision, LIVE confiné |
| F — Git Cursor / D9 | 9 | 0 | 0 | 9 | Choix A/B et continuité par SHA vérifiés |
| G — Handoff / D8 | 15 | 12 | 1 | 2 | Provenance, inventaire probant, D8 révisable et avis Nora |
| H — UX Figma | 8 | 1 | 0 | 7 | Surfaces Exécution/Résultats distinctes et F2/BROWSER |
| I — QA/gates | 11 | 0 | 0 | 11 | Parcours intégré, non-régression et preuves par niveaux |
| **TOTAL** | **99** | **44** | **1** | **54** | **Aucune réception ML5** |

**Écart UX vérifié directement sur Figma :** page 12 (14 frames) présente Travail 50/50 (12.02), **Exécution distincte** (12.04, 12.05, 12.06, 12.07, 12.14) et **Résultats & preuves distincts** (12.08, 12.11, 12.12, 12.13). Le code rapporté monte `CursorRealizationSurface` sous `?surface=publication` et utilise quatre onglets D8 différents. **Conformité structurelle et F2 NON PROUVÉES.** Les extraits Figma ne sont pas des captures runtime.

**Contrats propriétaires à recroiser impérativement :** R2 D3/D4/D5/D6/D7/D8/D9 ; `PF-REAL-01…30`, `PF-PRV-01…32`, scénarios gouvernance et Git applicables. Les invariants ML4, ENV-01 et les réserves antérieures continuent de s'appliquer.

**Trajectoire recommandée (même macro-lot, pas de micro-gates inventés) :** sécuriser effets/READY/qualification, raccorder Nora et les parcours visuels, rendre les preuves D8 effectivement consultables, qualifier les frontières réelles selon les mandats, puis réconcilier le registre et les scénarios. Git B (publication gouvernée D7/D9) reste **RECOMMANDÉE NON ARBITRÉE**. Aucune architecture, migration structurante ou promotion n'est adoptée par ce document.

## 4 ter. R-003 — Checkpoint intégré R1 / R2 / R3 / R4 / ML5 (23/11/2026)

### 4 ter.1. But, sources et vérifiabilité

**Question de contrôle :** la construction ML5 reste-t-elle alignée sur le résultat Pilote, les propriétaires et les règles R2, les décisions Morris, les interfaces existantes ML1–ML4 et les conditions de preuve R5/R6, sans lacune masquée ?

**Sources Git relues :**
- `main@997897fd7cf914771e7d08e8030dc7123fab7d25` : `cadrage/vision-produit.md` (§§2.13, 2.21, 2.23, 2.34–2.36, 8–10) et `cadrage/vision-cible/README.md` (trois schémas décrits et SHA indiqués) ; SEF v0.2, roadmap, décisions applicables ; R2 D3/D4/D6/D7/D8/D9 ; ENV-01, versioning, UX Figma↔Cursor v1.1.
- `sfia/next-nora-cognition-cursor-contract-candidate@1e6929c543a88606488094be2f5dfe7fc34a0cb9` : décision Morris Git Cursor **option A**, auto-session DEV ; contrat fonctionnel ML5 §20 et architecture §19, **VALIDATED IN CONTENT / NOT MERGED**.
- `sfia/next-ml5-conformity-acceptance-candidate@1fe1aa16593d2f459095c237607386c1f1fdf12b` : présent registre et contrat d'acceptation CA-01…CA-10, T-01…T-12.
- Handoff cycles 1–2 : `d731c1d7`, `2b2d27f6` ; cycles ultérieurs vérifiés dans les revues successives et, pour **C6**, `sfia/review-handoff@b5466dd7739436dc1ce58ce18888165b682f87e8` (blob `97a572f763f5b917c8e247ec9e2f82535ec98569`).
- Figma cible page `1209:2` (12.01–12.14) et protocole v1.1 ; **trois oracles PNG (12.01/12.02/12.08) uniquement rapportés** au C6. Les **trois PNG fondateurs R0** sont référencés et hashés par leur README Git mais **non inspectés visuellement** dans ce checkpoint.

**Limites :** code ML5 cycles 3–6 sur worktree local **DIRTY / NON OBSERVÉ directement** ; branche de code non poussée, HEAD `6cf33e9923796974b9ee540a9c6ff27110342950` rapporté ; le handoff est une **déclaration de livraison accompagnée d'extraits source**, pas une inspection indépendante de tout le worktree. Les résultats des tests sont **rapportés**, pas rejoués ici. Ne pas annoncer de changement de `main`, Gate C roadmap synchronisé, RECETTE, release, ou ADOPTED.

### 4 ter.2. Deux axes de suivi, pas un indicateur de progression artificiel

| Axe | Situation au checkpoint | Interprétation |
|---|---|---|
| **Présence du code** (déclarée C6) | **1 IMPLEMENTED (E13) / 92 PARTIAL / 6 NOT_IMPL** — 99 exigences | Décrit des éléments construits, souvent sans comportement complet. Les lignes du §3 portent la classification, non un verdict de conformité. |
| **Conformité revue par ligne** | Dernière revue exhaustive *documentée ici* : **R-002, 44 PARTIEL / 1 EC / 54 NV** ; **non réconciliée par exigence pour C6** | Comptes historiques, ne pas les additionner ni les comparer mécaniquement à l'axe présence. Aucun `VERIFIÉ` global inféré. |
| **Contrôles C6 rapportés** | Vitest ciblé 34 PASS, PostgreSQL DEV concurrent PASS, `tsc --noEmit` PASS | Ne démontrent pas un run Cursor SDK, ni une publication GitHub, ni la conformité de toutes les exigences. |
| **BROWSER** | Navigation DEV avec session Pilote test jusqu'à Travail/Exécution/Résultats, **états surtout vides** ; sans captures runtime | Établissement de session et accès aux surfaces seulement. Pas d'E2E D6→Cursor→D8 ni F2. |
| **Figma F2 / LIVE / REAL** | F2 12.01–12.14 **NOT PROVEN** ; Nora cognitive, Cursor SDK, WEB LIVE, GitHub/MCP REAL ML5 **NOT PROVEN** | Gate d'effet externe indépendant ; aucune substitution SCRIPTED→REAL. |
| **Review Pack C6** | Handoff Git/bLOB vérifiés ; `PLACEHOLDER_NOW` et deux diffs vides dans le FULL C6 | **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** ; régulariser avec la prochaine revue du même ML5, pas un cycle documentaire autonome. |

### 4 ter.3. Matrice de cohérence vision → propriétaires → résultat ML5

| Capacité / vision | Autorité et critères de référence | Réalisation observée/rapportée | Écart de sortie et risque de dérive |
|---|---|---|---|
| **Nora investigue de manière autonome et proportionnée**, mémoire et sources non confondues avec autorité | R1 §§2.13/2.21 ; R2 D3/D4 ; ML5 A01–A12 | Bridge contrat, provenance des outils, ébauche de correction A04 et journal d'activité (C3–C6) | Investigation progressive multi-sources/révision de stratégie et reprise durable **non prouvées** ; ne pas réduire Nora à un déclencheur sur mots-clés ni à une synthèse prédéterminée. |
| **Recherche publique utile et non exfiltrante** | R1 §2.13 ; ML5 B01–B09 ; D3/D6 | Frontière B1 SCRIPTED, URL HTTPS contrôlées et confrontation simple | B04/B09 absents ; lecture/citations/fournisseur WEB LIVE et barrière réseau (DNS/redirect/private) non prouvés. Données privées hors requête externe ; WEB LIVE **GATED**. |
| **Visibilité de l'activité sans fausse exécution** | R1 §9, R2 D3 ; C01–C08 | Journal, polling et `activityFlushQueue` attendue avant retour | Durabilité/ordre des événements malgré crash non prouvés ; événement affiché pendant le tour et reconnexion à tester en navigateur, sans chaîne de pensée. |
| **Contrat inspectable, HumanDecision et absence d'autorisation tacite** | R1 §§2.21, 8 ; R2 D6/D7 ; D01–D12 ; Figma 50/50 | `ContractViewer`, READY, fingerprint et contrôle D6 rapportés | Fidélité octet inspecté→SDK et refus D6 sans effet **non prouvés LIVE** ; distinguer VISIONNEUSE, contrat prêt et GO d'effet. |
| **Cursor exécute dans un mandat, sans double effet** | R2 D7 ; E01–E15 ; scénarios T-04/T-05/T-06 | Send-intent avant SDK, ACK-loss PG, tentative durable et UI Réconcilier | Run long hors HTTP, STOP réel, crash/reconnexion et SDK LIVE **non prouvés** ; absence d'ACK ≠ relance. MCP E12 restant NOT_IMPL et conditionnel par mission. |
| **Git direct Cursor option A, Studio lecteur** | Décision Morris `1e6929c5` ; R2 D9, D6/D7 ; F01–F09 | Helper Git et bare local DETERMINISTIC ; F01–F09 passées PARTIAL au C6 | **Critique :** `observedRemoteBaseSha: gitScope.baseSha` et `workspaceExists:true` sont des valeurs déclarées/forcées ; préflight **pas** une vérification indépendante. Studio D9 doit vérifier SHA/ref/permission/distances réels ; pas de publisher code Studio. |
| **Preuves, requalification et bilan consultable** | R2 D8 neuf rubriques ; G01–G15 ; PF-PRV | Manifestes, synthèse déterministe identifiée, G15 `SELECT FOR UPDATE` + essai concurrent | **G07 NOT_IMPL** (captures originales) ; preuve nouvelle `newProofRef` non systématiquement vérifiée, qualification calculée avant lock, D9 non recoupé ; vraie analyse cognitive D3 finale absente. |
| **UX unique Travail → Exécution → Résultats ; sas** | R1 R3 ; H01–H08, I06/I10 ; Figma 12.01–12.14 | Travail 50/50, 4 onglets D8 et auto-session DEV BROWSER partiel | **H08/I10 NOT_IMPL**, 3/14 oracles rapportés, pas de captures runtime ni comparaison F2 et parcours intégré ; aucune fidélité visuelle attestée. |
| **Non-régression et frontières transverses** | R1 R2 D1–D9, SEF, ENV-01, versioning ; I01–I11 | Aucun second moteur D7 rapporté ; Git ML4 documentaire conservé, NO RELEASE | Préserver sas/projet, cycle facultatif, Git facultatif, D4 mémoire, deux Pilotes/un dépôt, refus D6, login normal RECETTE/STABLE ; auto-session DEV ne suffit pas à prouver isolation réseau et D6. |

**Six NOT_IMPL à ne pas perdre :** `B04` (citations et fraîcheur), `B09` (fournisseur web réel), `E12` (MCP requis), `G07` (captures originales), `H08` (contrat et preuve Figma complète), `I10` (parcours intégré). Leur absence ne dispense pas de terminer les **92 PARTIAL**. E13, seul IMPLEMENTED rapporté, est une frontière négative « pas d'administration MCP Studio », **pas** une preuve de fonctionnement positif.

### 4 ter.4. Obligations de non-régression / éléments hors portée à ne pas oublier

- **R1 transverse conservé** : sas sans projet fictif et continuité sas→projet ; cycles/CKI **facultatifs** ; mémoire D4 ≠ preuve ≠ décision ; lecture interprojets bornée ; projet Studio individuel même sur dépôt partagé ; aucune ressource Git imposée pour une mission sans Git ; aucun moteur d'autorité parallèle.
- **R2 propriétaires maintenus** : D3 décide de l'investigation et de l'avis ; D4 des faits/documentation durable ; D6 de l'acte humain ; D7 de la tentative/STOP ; D8 de la qualification et de son historique ; D9 des faits Git indépendants. Contrat externe ChatGPT↔Cursor **SFIA v2.6** ≠ format/autorité automatique du produit.
- **Orientation Git A compatible** avec R2 D9 si Studio ne revendique pas le push du code. **Attention aux permissions de Cursor** : un prompt ne restreint pas un token ni un workspace ; préflight sur des faits réels au point d'effet et STOP si barrières insuffisantes.
- **Auto-session DEV** : mode test à confinement serveur/loopback vérifié, identité contrôlée, aucun accès arbitraire au Pilote réel. N'implique ni login RECETTE/STABLE contourné ni droit Git/SDK/WEB/MCP ; conserver les tests du login normal et T-12 multi-Pilotes.
- **Pièces jointes, formats multimodaux et recherche interprojets** font partie de la vision large R1, mais n'ont **pas d'acceptation autonome ML5 entière** dans ce registre. Ne pas les prétendre livrés ni les ajouter comme dépendance artificielle à chaque mission ; si un scénario ML5 les requiert concrètement, les qualifier via A07/A08/G07 et les propriétaires existants, puis arbitrer la capacité nouvelle s'il y a élargissement de périmètre.
- **Réserves héritées ML4** `WRITE-07`, audit D6/D7/D8 REAL, vues preview, protections GitHub et R6 global restent suivies selon leur responsabilité ; l'implémentation ML5 ne les clôture pas rétroactivement.
- **Roadmap `main`** affiche encore Gate C OPEN (instantané antérieur). Décisions Morris de construction ML5 et option A dans des branches candidates **ne sont pas une baseline mergée**. Synchronisation normative sous GO D2 distinct ; pas de mise à jour silencieuse de la Roadmap.
- **Scénarios à conserver intégralement :** Q-01…Q-56 et PF propriétaires applicables, plus T-01…T-12 comme regroupements. Les meilleurs tests discriminants à fermer sont T-01, T-02/03, T-04/05/06, T-08, T-09, T-11 et T-12 ; PASS ciblés ≠ couverture globale.

### 4 ter.5. Écarts critiques / actions de sortie intégrées au même ML5

| Code checkpoint | Priorité | Constat et preuve | Action attendue / propriétaire | Preuve d'exit |
|---|---|---|---|---|
| **CP-01 — Git self-confirming** | P0 sécurité/autorité | C6 `cursor-attempt-service.ts` et `cursor-git-option-a.ts` : SHA observé recopié du contrat, workspace forcé | Cursor D7/D9 : lecture indépendante dépôt/branche/base, droits/permissions, workspace réel et relecture distante après push ; **sans GitHub REAL implicite** | Tests divergence/permissions/concurrence, local bare puis GO REAL dédié avant claim de GitHub verified |
| **CP-02 — DEV auth confinement** | P0 sécurité | Auto-session basée sur flags et headers Host/forwarded, listener réseau non prouvé | Cursor D1/ENV-01 : vérifier adresse d'écoute réellement locale, sessions, cookies, refus réseau distant et tests login normal | BROWSER DEV + tests négatifs dont forged Host/proxy et deux Pilotes |
| **CP-03 — G15 proof freshness** | P1 preuve | Transaction FOR UPDATE C6, mais nouvelle pièce surtout déclarée et qualification préparée avant verrou | Cursor D8/D9 : rattacher preuve versionnée vérifiée, requalifier sur snapshot cohérent, conserver historique | PG concurrence + pièce tardive/identité, verdict daté sans redispatch |
| **CP-04 — Activité / SDK long** | P1 résilience | flush en fin de tour ; SDK LIVE / T-05 non prouvés | Cursor D3/D7 : garantir provenance/ordre ou exposer perte de signal, reprendre sans redispatch | BROWSER activité pendant RUNNING et reconnexion, run long T-05/STOP sous gate LIVE |
| **CP-05 — Figma / bilan** | P1 UX+preuve | Aucun screenshot runtime C6, 3 oracles source, G07/H08/I10 NOT_IMPL | Cursor UX/D8 : débloquer captures, 14 états Figma, pièces et parcours utilisateurs | BROWSER complet, F2 source→DOM ≤2px, captures originales et SHA |
| **CP-06 — Cognition Nora** | P1 produit | Résumé déterministe ≠ avis cognitif ; investigation multi-sources complète non prouvée | Cursor D3/D4 : conduite séquencée, sources réelles, analyse finale unique et reprise contextuelle | T-01/T-09/T-10 avec preuve de run D3 autorisé, pas de faux `NORA_COGNITIVE` |
| **CP-07 — B1/MCP conditionnels** | P1 sûreté, gate externe | B04/B09/E12 absents, WEB LIVE et MCP SDK REAL non prouvés | Cursor D3/D7 : sécuriser intégration, accès réseau, citations/URL et capacités MCP exigées seulement si pertinentes | T-11 non exfil puis GO fournisseur/SDK/MCP REAL spécifique ; erreurs honnêtes |
| **CP-08 — Full pack / non-régression** | P1 gouvernance | Handoff C6 publié, mais `PLACEHOLDER_NOW`, sections diff vides ; 34 unitaires ciblés seulement | Cursor : pack FULL corrigé avec créations/diffs réels et matrice Q/PF/T, tests de régression ML1–ML4 | Handoff L3 distant exploitable, tests/browser et preuves par SHA ; pas de micro-cycle documentaire |

**Trajectoire de continuation :** fermer **CP-01/02** avant tout effet sensible, puis intégrer **CP-03/04/05/06** et les obligations conditionnelles **CP-07**, avec **CP-08** synchronisé dans le delivery. Le même ML5 reste l'unité d'intégration ; sous-travaux indépendants possibles uniquement si interfaces/ownership maîtrisés. Pas de construction d'un nouveau publisher de code Studio, moteur D7, explorateur web ou registre de preuve concurrent.

**Gates :** Morris valide les éventuels pivots de sécurité/persistance, l'activation WEB LIVE, SDK LIVE ou GitHub/MCP REAL, toute publication Git de code projet, PR/merge, RECETTE, release/promotion et ADOPTED. Le checkpoint R-003 est **une revue documentaire et une photographie sourcée**, pas un GO supplémentaire d'exécution ni une réception de ML5.

**Verdict R-003 : `TRAJECTOIRE ML5 COHÉRENTE AVEC R1/R2 ET OPTION A / COUVERTURE DE CODE PARTIELLE / PREUVES CRITIQUES OUVERTES / NO ADOPTION`.**

## 4 quater. R-004 — consolidation fonctionnelle et architecturale après C13 (24/11/2026)

**Statut :** DOCUMENTED / CANDIDATE / NOT MERGED. **Morris valide en contenu** la priorité de complétude fonctionnelle avant mise à disposition et la suppression des mécanismes décisionnels lexicaux de Nora. La présente mise à jour de suivi est autorisée sur la branche documentaire existante. Aucun GO de code, publication projet, PR, merge, RECETTE, release ou ADOPTED.

**Sources :** [contrat fonctionnel §21](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md), [architecture §20](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md), [C5](https://github.com/mcleland147/sfia-workspace/blob/8199b1f01d9cee5f946d9f3f0837b4e00386e03c/sfia-review-handoff/latest-chatgpt-review.md) ; [C7](https://github.com/mcleland147/sfia-workspace/blob/01b7b66b8f1185bdbe4c1f13ca1cdd75141a08a6/sfia-review-handoff/latest-chatgpt-review.md) ; [C8](https://github.com/mcleland147/sfia-workspace/blob/759517d0ea32ee8a6edbeedf90306aec97136936/sfia-review-handoff/latest-chatgpt-review.md) ; [C9](https://github.com/mcleland147/sfia-workspace/blob/de5e1fc6ea5fde2dda8f1a3bca3f61f2f64950e1/sfia-review-handoff/latest-chatgpt-review.md) ; [C10](https://github.com/mcleland147/sfia-workspace/blob/76199b38eb3b33b7421a82a563772f9b28739936/sfia-review-handoff/latest-chatgpt-review.md) ; [C11](https://github.com/mcleland147/sfia-workspace/blob/f9dfcaaad90470e046d95a9d0a93115341a750d3/sfia-review-handoff/latest-chatgpt-review.md) ; [C12](https://github.com/mcleland147/sfia-workspace/blob/45311f75dad80e19f76ae09adfb1da387514531f/sfia-review-handoff/latest-chatgpt-review.md) ; [C13](https://github.com/mcleland147/sfia-workspace/blob/e3ed518b55ecda9430c862cda063052f94da8e7c/sfia-review-handoff/latest-chatgpt-review.md). Base main `997897fd7cf914771e7d08e8030dc7123fab7d25` ; HEAD local rapporté C13 `6cf33e9923796974b9ee540a9c6ff27110342950`, 89 DIRTY rapportés, branche non publiée ; Git local **NON OBSERVÉ**.

### 4 quater.1. Deux axes et historique préservés

Les 99 lignes de §3 (R-002 conformité et présence C6 R-003) restent intactes comme photographie historique. C13 rapporte **1 IMPLEMENTED / 97 PARTIAL / 1 NOT_IMPL (B09)**, E13 étant l'unique IMPLEMENTED déclarée. Ce n'est ni une mesure d'avancement, ni une reclassification indépendante des 99 lignes. R-002 : 44 PARTIEL / 1 EC / 54 NV ; R-003 : présence C6 1/92/6. Les cinq lignes historiquement NOT_IMPL en plus de B09 (B04/E12/G07/H08/I10) sont rapportées PARTIAL aux cycles suivants, sans conformité acquise. La conformité par ligne courante reste à réconcilier avec le code local dans le prochain delivery, sans promouvoir par inférence de groupe.

### 4 quater.2. Matrice de consolidation par famille (99 exigences)

| Famille | IDs | Nb | Acquis / limites | Priorité | Exit |
|---|---|---:|---|---|---|
| A | A01–A12 | 12 | C1–C5 état/bridge ; C11/C12 Nora LIVE et pièces ; heuristiques historiques à vérifier | Très haute | Conduite sémantique, questions déterminantes, sources/contradictions, suffisance, reprise et transversalité ; aucun routeur lexical |
| B | B01–B09 | 9 | C5 frontière SCRIPTED et contrôles ; B09 NOT_IMPL, aucun fournisseur WEB LIVE prouvé | Haute | B1 réel et isolé, recherche/lecture/citations, sécurité au point de sortie |
| C | C01–C08 | 8 | C5 événements/poll ; C13 journal D8 intégration, pas de rejeu Nora LIVE | Intermédiaire, intégré A/B | RUNNING réel, sas/projet/documents, reconnexion et provenance |
| D | D01–D12 | 12 | C10 viewer et D6 explicite ; C11/C12 contrat READY et missions ; qualité du contrat non établie | Haute | D01–D02 contrat sémantique et critères métier ; instruction intégrale, version, droits et mandat |
| E | E01–E15 | 15 | C11/C12 SDK réel ; C13 long-run, STOP LIVE, idempotence ; ACK perdu déterministe | Ciblée | Reprise autonome serveur, concurrence et droits, workspace isolé ; MCP conditionnel |
| F | F01–F09 | 9 | Option A validée en contenu ; C7/C8 préflight déterministe ; GitHub REAL N/A sans cible | Conditionnelle | Continuité entre contrats sur refs vérifiées ; mutation distante seulement sous mandat explicite |
| G | G01–G15 | 15 | C10–C12 ingestion/qualification et Nora LIVE ; C13 garde-fous et journal ; restitution autonome non prouvée | Haute | Terminal→remise→D8→avis Nora produit, preuves authentiques et sécurité de lecture/qualification |
| H | H01–H08 | 8 | C9/C10 interactions BROWSER SCRIPTED ; F2 0 PASS formels | Recette UX ; utilisabilité minimale maintenant | F2 14 états conservés, comparaison native et test utilisateur ultérieur |
| I | I01–I11 | 11 | C13 72 unit +17 PG rapportés ; TypeScript/lint/build global non réattestés ; packs incomplets par endroits | Haute | Validation transverse, isolation, non-régression, registre et preuves par ligne |
| Total | A01–I11 | 99 | Couverture du référentiel, pas acceptation des lignes | | |

### 4 quater.3. Relecture des exigences et preuves C13

Les groupes ci-dessous couvrent les 99 IDs une seule fois dans cette matrice d'écarts ; ils ne changent pas les colonnes historiques ni ne constituent un statut VERIFIÉ. Pour chaque ID, Cursor devra examiner le code courant, relever présence et conformité séparément, fournir référence précise composant/test/preuve et condition de sortie ; conserver Q-01…Q-56, T-01…T-12 et PF applicables.

| IDs | Éléments observés dans les handoffs / limites | Vérification / complément |
|---|---|---|
| A01–A02 | C5 historique : regex TECH_INTENT / profil selon longueur ; à vérifier localement | Audit routage sémantique partout et cas LIVE paraphrases/négations ; simple vs complexe |
| A03–A05 | C11/C12 préparation dans demande explicite ; autres mandats non prouvés | Initiative proportionnée, correction bornée avec filiation et aucun auto-dispatch |
| A06–A10 | C12 confrontation de rapport et pièces ; état/bridge/READY serveur présents ; suffisance complexe non prouvée | Questions, renvois, restriction tardive, version, source critique absente, contradiction |
| A11–A12 | Snapshot historique par préparation ; reprise et généralisation non prouvées | Deux travaux isolés, reprise réelle et usage sas/projet/documents |
| B01–B08 | Frontière et garde-fous C5–C8, B04 présence PARTIAL rapportée C7+ ; pas de web réel | Besoin sémantique, isolation, provenance/citations, échec et injection ; preuves LIVE |
| B09 | NOT_IMPL déclaré C13 | Fournisseur B1 réel avec version/modèle et actions effectivement observables |
| C01–C08 | Projection/poll/événements présents ; journal D8 C13 ; LIVE D3 RUNNING non qualifié transversalement | Deux tours, reconnexion, ordre, événements réels, aucune chaîne privée ni progression fictive |
| D01–D02 | C11/C12 contrats READY mais critères génériques observés C5/C11 ; suffisance non complète | Qualification sémantique, instruction complète, critères vérifiables du besoin, source critique manquante → non READY |
| D03–D08 | C10 inspection ; C11/C12 version/fingerprint et dispatch ; pas de preuve exhaustive contrat très long | Octets inspectés/autorisés/envoyés, contrôle des changements matériels, aucune troncature |
| D09–D12 | C10 50/50/dialog, confirmed absent 400 ; C11 Non sans dispatch et Oui | Préserver fonctionnement ; droits/suspensions et contexte projet/cycle en négatif |
| E01–E08 | C11/C12 SDK réel ; C13 run long efx_53198bd9… et STOP efx_03b99d0f… cancelled | Capitaliser ; conserver preuves par tentative et distinction CANCEL/rollback |
| E09–E11 | C12 DROP_ACK déterministe ; C13 idempotence, superviseur in-process, resume sur réconciliation | Crash/redémarrage serveur sans navigateur, concurrence STOP/observer, pas de double envoi |
| E12–E15 | MCP UNKNOWN fail-closed déterministe ; E13 seule IMPLEMENTED déclarée ; Git/MCP non requis C11–13 | MCP seulement si mission ; isolation Pilotes/workspaces et droits |
| F01–F09 | Git A validé ; C7/C8 refs/origin/bare local ; REAL distant non exercé | Préflight réel si mission, droits, continuité SHA ; pas de mutation non mandatée |
| G01–G06 | C11 handoff RECEIVED mais PARTIAL ; C12 INCOMPLETE précoce ; C13 test honesty | Déclencher remise produit terminale et preuves originales, inventaire exhaustif et sorties réelles |
| G07–G10 | Captures stockées C7+ ; C12 pièces ; C13 confinement et journal ; couverture partielle | Confinement physique concurrent, plafond de lecture strict, provenance, D9 conditionnel |
| G11–G15 | C10 quatre onglets/retour ; C11/C12 Nora LIVE ; C13 pas de rejeu, requalification existante | Avis unique après D8, déclenchement autonome, fraîcheur transactionnelle, pièce tardive et GET sans effet |
| H01–H08 | C9/C10 BROWSER, 14 états Figma non qualifiés F2 | Interactions essentielles maintenant ; conformité F2 pendant recette UX |
| I01–I11 | C13 72 unit +17 PG ciblés, pas de validation complète ; candidat local non observé | Typecheck, lint, build, tests domaines/PG et ML1–4 selon impact, CA/T/Q/PF par preuve |

### 4 quater.4. CP-01…CP-08 : état de sortie et dette

| Écart historique | Évolution rapportée / revue | Propriétaire et exit |
|---|---|---|
| CP-01 | Préflight Git amélioré C7/C8, pas de GitHub REAL | D7/D9 ; vérification indépendante sous mission mandatée |
| CP-02 | Auto-session DEV et contrôles bind/Host C7/C8 ; écoute et refus hors DEV à confirmer | D1 ; isolation réelle, login normal non régressé |
| CP-03 | G15 et contrôles preuve améliorés ; fraîcheur du dossier encore à vérifier | D8 ; transaction, preuve tardive et concurrence |
| CP-04 | C13 long-run et STOP LIVE ; supervision processus partielle, activité D3 transverse ouverte | D7/D3 ; reprise au démarrage et RUNNING réel |
| CP-05 | C10 interactions/bilan ; F2 non prouvé | H ; recette UX ultérieure, utilisabilité minimale |
| CP-06 | C11/C12 cognition LIVE ; qualité contrat, sémantique, suffisance et autonomie incomplètes | D3 ; priorité prochaine |
| CP-07 | B09 NOT_IMPL ; MCP conditionnel, fail-closed déterministe | D3/B1 ; isolation et fournisseur réel |
| CP-08 | Packs incomplets pour certains scripts LIVE ; 72 unit+17 PG C13 ; validation globale ouverte | Cursor ; preuve par exigence et non-régression |

### 4 quater.5. Orientations de suite

**R-004 — priorité 1 : A/B/C et D01–D02.** Audit du conducteur réel et de ses chemins indirects/fallbacks ; supprimer les décisions fondées sur regex, mots-clés, règles de longueur. Qualification IA sémantique avec sortie structurée et invariants serveur ; recherche lexicale uniquement comme découverte, contrôle déterministe de format/sécurité/autorité préservé. Terminer la conduite cognitive, le fournisseur WEB LIVE isolé (B09) et la projection d'activité existante. Vérifier les contrats sur critères spécifiques au besoin. Ne pas créer de second moteur cognitif.

**Priorité 2 : D/G et sécurité E/I.** Vérifier et compléter le déclenchement produit autonome terminal/interruption→handoff→D8→avis Nora unique, sans POST d'un script externe pour fabriquer la chaîne. C11/C12 utilisent des scripts d'intégration ; C13 indique REPORT_MUST_BE_INGESTED_SEPARATELY. Fermer confinement concurrent et limite effective de lecture avant transmission de pièces à Nora ; assurer fraîcheur transactionnelle, reprise et STOP/observation cohérents. Ne pas réécrire D7 ou multiplier les campagnes déjà prouvées.

**Priorité 3 : qualification consolidée.** Continuité de deux interventions, Git option A et MCP selon mission et mandat, sécurité et non-régression complète. DEV LIVE existant uniquement ; Figma F2 reste exigence de recette UX, pas gate de complétude fonctionnelle actuelle. Ne pas décider publication/mise à disposition avant revue du résultat. Aucun système parallèle ni micro-cycle de recopie.

**Critères avant proposition d'essai utilisateur (non attestés globalement) :** compréhension sémantique ; investigation et sources effectives ; WEB LIVE sûr ; activité utile pendant le travail ; contrat complet et spécifique ; D6 opposable ; exécution/supervision LIVE ; restitution autonome ; D8 et avis Nora sourcés ; continuité sans perte d'autorité. Vérifier avec quelques missions représentatives et tests déterministes/PG ciblés, sans substituer une fixture à LIVE.

**Verdict de consolidation : ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED.** Ce verdict exprime la cohérence des responsabilités cibles et les écarts identifiés ; il n'est pas une certification de l'implémentation locale ni une acceptation ML5. Les risques de sécurité, de double effet et de perte d'autorité restent bloquants pour les capacités concernées. Pas de GO de publication code, de recette ou de mise à disposition.

## 5. Journal des livraisons et revues

| ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
|---|---|---|---|---|---|---|
| R-001a | 23/11/2026 | ML5 socle vertical — CRITICAL | `sfia/next-ml5-integrated-delivery-20261123` / `69aeb329…` local rapporté ; aucune publication projet | [Review Pack 1 @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) | A–I, Q applicables, socle D/E/G | ML5 PARTIAL — GOVERNED GAPS ; 17 tests unitaires rapportés ; BROWSER/LIVE/REAL non prouvés |
| R-001b | 23/11/2026 | ML5 consolidation P0/UX initiale — CRITICAL | même worktree, HEAD local `6b7dac12…` dans pack et `6cf33e99…` rapporté ensuite ; non lu directement | [Review Pack 2 @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) | A–I et 56 Q selon pack ; 29 unit + 7 PG PASS **rapportés** | ML5 PARTIAL — GOVERNED GAPS ; P0 DEV partiels, F2/BROWSER/LIVE/REAL ouverts |
| R-002 | 23/11/2026 | Revue de conformité fonctionnelle/UX/architecture D0 + intégration documentaire D1/D2 candidate | Branche documentaire de revue, `main` inchangé | Review Packs 1–2 + Figma page 12 (lecture) | 99 exigences + Q-01…Q-56 + PF propriétaires à recouper | **HISTORIQUE** : 44 PARTIEL / 1 EC / 54 NV ; contrat d'acceptation candidat |
| **R-003** | **23/11/2026** | **Checkpoint trajectoire R1/R2/R3/R4/ML5 + réconciliation de présence C6, sans code local lu** | **Branche candidate documentaire**, `main@997897fd` inchangé ; **DEV DIRTY non poussé** | [Décision Morris Git A / DEV @ 1e6929c5](https://github.com/mcleland147/sfia-workspace/blob/1e6929c543a88606488094be2f5dfe7fc34a0cb9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md) ; [C6 handoff @ b5466dd7](https://github.com/mcleland147/sfia-workspace/blob/b5466dd7739436dc1ce58ce18888165b682f87e8/sfia-review-handoff/latest-chatgpt-review.md) | **A01–I11 (99) ; CA-01…10 ; T-01…12 ; Q/PF références conservées** | **Impl. C6 déclarée 1/92/6**, pas de requalification globale conformité ; **CP-01…08** à fermer, FULL C6 incomplet |
| **R-004** | **24/11/2026** | Consolidation documentaire post-C13 + arbitrage Morris conduite sémantique | Branche candidate, main inchangé ; code local NON OBSERVÉ | [Conception](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) ; [Architecture](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md) ; [C13](https://github.com/mcleland147/sfia-workspace/blob/e3ed518b55ecda9430c862cda063052f94da8e7c/sfia-review-handoff/latest-chatgpt-review.md) | 99 A–I ; CA/T/Q/PF conservés ; CP-01…08 actualisés | **1/97/1 rapporté**, B09 NOT_IMPL ; FUNCTIONAL COMPLETION REQUIRED ; aucun GO publication code |

Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.

## 6. Registre d'écarts, corrections, réserves et dette

| ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
|---|---|---|---|---|---|---|---|
| CF-01 | R-002 / ML5 | A01–A12, D01 | Nora ne prépare pas encore de contrat à partir d'une investigation et des sources effectivement qualifiées | MAJEUR | Packs 1–2 / D3 | Cursor : relier au conducteur D3 sans moteur concurrent | E2E cognitif multi-sources, restrictions, reprise ; OUVERT |
| CF-02 | R-002 / ML5 | A09, D02, D11 | READY dépend d'indications client (`sourcesSufficient`, `unknownRestrictions`) | BLOQUANT EFFET | Pack 2, routes readiness | Cursor : qualification serveur opposable | Cas source critique absente, autorité et droits révoqués ; OUVERT |
| CF-03 | R-002 / ML5 | E09–E10 | Chemin `AMBIGUOUS → DISPATCHED` potentiellement redéclenchable après ACK perdu | BLOQUANT LIVE | Pack 2, `cursor-claim.ts` | Cursor : non-rejeu et réconciliation avant redispatch | Test premier effet réalisé/ACK perdu, pas de doublon ; OUVERT |
| CF-04 | R-002 / ML5 | B01–B09 | Web B1 désactivé ; variable ISOLATION_PROVEN non équivalente à une barrière sûre | BLOQUANT B1 LIVE | Pack 2 | Cursor : isolation au point de sortie et tests sécurité | Non-exfil et outils lecture réels ; OUVERT |
| CF-05 | R-002 / ML5 | C01–C08 | Activité annoncée/fin de tour, événements outil et reprise incomplètes | MAJEUR | Pack 2 | Cursor : observer outils D3, préserver C1 | BROWSER sas/projet pendant RUNNING/reconnexion ; OUVERT |
| CF-06 | R-002 / ML5 | D09–D10, H01–H08 | Travail 50/50, Exécution et Résultats distincts de Figma ; F2 absent | MAJEUR UX | Figma page 12 + pack 2 | Cursor : composants propriétaires, L1/L2, BROWSER F2 | 14 états qualifiés par frame/fixture ; OUVERT |
| CF-07 | R-002 / ML5 | E05–E08, E12/E15 | Supervision run long et SDK LIVE confiné non démontrés | BLOQUANT LIVE | Pack 2 / qualification C9 bornée | Cursor : prouver supervision/reprise, MCP seulement si requis | Browser fermé/crash/STOP, identités réelles ; OUVERT |
| CF-08 | R-002 → R-003 / ML5 | F01–F09 | **Option A validée Morris** : Cursor commit/push direct sous mandat, Studio D9 lit ; C6 helpers/bare local DETERMINISTIC, **préflight réel non démontré** | P0 / REAL GATED | [Décision @ 1e6929c5](https://github.com/mcleland147/sfia-workspace/blob/1e6929c543a88606488094be2f5dfe7fc34a0cb9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md) + C6 `b5466dd7` | Cursor D7/D9 : CP-01, pas de publisher code Studio | Vérification indépendante repo/ref/base/rights + remote SHA sous GO REAL distinct ; PARTIEL |
| CF-09 | R-002 / ML5 | G01–G11/G15 | Provenance client-déclarée, dossier et D8 pas réellement recoupés et révisables | MAJEUR | Pack 2 | Cursor : acquisition serveur / recoupement D9-D8 | PF-PRV contradictions/preuve tardive ; OUVERT |
| CF-10 | R-002 / ML5 | G12–G14 | Brief déterministe distinct du véritable avis Nora, absent | MAJEUR | Pack 2 | Cursor : analyse D3 post-tentative unique | Analyse sourcée et retour brouillon sans effet ; OUVERT |
| CF-11 | R-002 / ML5 | I01–I11, Q-01…Q-56 | Pas de preuve BROWSER/F2/LIVE/REAL ni matrice PF complète | GATE QA | Packs 1–2 | Cursor : preuves multi-niveaux par exigence | Qualifier toutes exigences et les PF sans auto-réception ; OUVERT |
| CF-12 | R-002 / ML5 | Gouvernance | `main` snapshot Gate C ancien ; code ML5 local ; pas de push produit | SYNCHRO GOUVERNÉE | Git refs vérifiées | Morris : GO séparé si synchronisation normative | Pas de merge/recette/adoption implicite ; OUVERT |

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

**État historique R-002 (d'après rapports cycles 1–2, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.

**Checkpoint historique R-003 :** présence de code rapportée **1 IMPLEMENTED / 92 PARTIAL / 6 NOT_IMPL**, zéro acceptation globale induite, conformité par ligne **NON RÉCONCILIÉE** depuis R-002, BROWSER partiel en DEV, F2/LIVE/REAL ML5 non prouvés, Review Pack C6 incomplet. **Voir §4 ter et CP-01…CP-08** ; source Git locale DIRTY inaccessible. Pas de réception, push code, PR/merge, recette ou ADOPTED.

**Checkpoint courant R-004 :** voir §4 quater ; 1/97/1 rapporté C13, conformité ligne par ligne à réconcilier, complétude A/B/C/D/G et sûreté ciblées avant proposition de test utilisateur. Aucun push code, promotion ou ADOPTED.

**Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.

## 4 quinquies. Revue approfondie post-C14 — checkpoint courant du 24/11/2026

**Consolidation approuvée par Morris pour publication documentaire candidate.** [Revue complète](./ml5-revue-approfondie-conformite-post-c14.md) — source de détail des constats, références du snapshot et exits ; ce registre reste l'index unique des 99 exigences. [Snapshot](https://github.com/mcleland147/sfia-workspace/blob/78f60e40f466b520ac0381d5d27e212bd2fa5695/sfia-review-handoff/latest-chatgpt-review.md), blob 01961de12b10dc1d8802a2ba24bc5095a51b4949. C3–C14 local HEAD 6cf33e99, 97 DIRTY rapportés, non publié ; contenu observé dans le snapshot, worktree NON OBSERVÉ. R-004 et historiques préservés ; les constats ci-dessous priment pour l'état courant. La revue constate que copies locales de CF/architecture/registre ne sont pas intégralement réconciliées avec R-004 distant (option B historique encore présentée comme non arbitrée, vieux détecteurs, etc.). Synchroniser sans écraser les travaux lors du prochain lot.

**Deux axes :** C14 rapporte présence 2 IMPLEMENTED (E13/B09) / 97 PARTIAL / 0 NOT_IMPL, contre C13 1/97/1. Pas de reclassification indépendante des 99 lignes ni de pourcentage d'achèvement. Conformité statique groupée dans §8 de la revue complète, preuves individuelles et CA/T/Q/PF à réconcilier. B09 fournisseur LIVE raccordé, usage intégré et sécurité partiels. R-004 historique 44 PARTIEL/1 EC/54 NV n'est pas l'état courant consolidé par ligne.

| IDs | Constat et priorité | Exit / référence détaillée |
|---|---|---|
| A01–A02 | qualification LIVE bornée ; profil analyse/medium fixe, non conforme adaptation P1 | revue A.1–2 : intention et complexité sémantiques, allocation et réallocation |
| A03–A05 | bridge sémantique, initiative/mandat correctif partiels | A.1/D.1 : paraphrases, négation, mandat exact, aucune relance |
| A06–A08 | questions non alimentées en cours de travail, lecture/version et provenance incomplètes P1 | A.3–4/A.6 : renvois, questions révisables, pagination/version |
| A09–A10 | suffisance par absence, état vide/épuisé peut être SUFFICIENT P0 ; consolidation incomplète | A.4–6 : preuve positive, source critique absente, restriction et contradiction |
| A11–A12 | snapshot par préparation, reprise et budget/contexte incomplets P1 | A.2/A.7 : checkpoints, continuation, compaction, consommation réelle, transversalité |
| B01–B02 | fournisseur LIVE, S4 direct, MDN navigation | B.3 : travail Nora réellement intégré, extrait utile progressif |
| B03–B05 | confrontation/versions/citations partielles | B.3 : jugement sémantique, applicabilité, couverture attestée |
| B06–B08 | confidentialité sortie, DNS/HTTP et budgets P0/P1 | B.1–3 : frontière testée avec données fictives, destination et lecture bornées |
| B09 | présence IMPLEMENTED déclarée, conformité partielle | B.3 : recherche et lecture réelles au sein de réponse structurée |
| C01–C04 | activité et journal partiels | §5 : événements réels, couverture/fraîcheur |
| C05–C08 | projection/poll utiles, isolation et reconnexion à qualifier | §5 : fil correct, minimisation, fencing, sas/projet/docs/bilan |
| D01–D02 | assemblage générique et READY insuffisant P0/P1 | D.1–2 : contrat spécifique, filiation et suffisance positive |
| D03–D08 | troncatures, version/empreinte et changement matériel | D.1–2 : instruction intégrale, critères propres, READY lié au travail |
| D09–D10 | BROWSER borné | §7/D.3 : inspection/confirmation et aucun effet après Non |
| D11–D12 | droits/identité et restrictions au point d'effet partiels | D.2–3 : mandats et capacités effectives |
| E01–E04 | LIVE borné C11/C12 | D.3–4 : conserver SDK, D6, tentative et claim avant envoi |
| E05–E08 | long-run/STOP LIVE C13, reprise autonome non prouvée | D.4 : boot/reprise et états honnêtes |
| E09–E11 | idempotence déterministe ; concurrence projection | D.4 : ACK perdu, double clic, réconciliation/STOP concurrents |
| E12–E15 | MCP conditionnel, isolation/confinement P0 | D.3–5 : permissions réelles, workspace et missions sans Git/MCP |
| F01–F03 | Git A préflight incomplet | D.5 : refs/droits/mandat précis au point d'effet |
| F04–F06 | Git REAL non prouvé | D.5 : refs distantes, local ≠ distant, mandat distinct |
| F07–F09 | option A, continuité partielle | D.5 : pas de publisher Studio code, pas PR/merge implicite |
| G01–G04 | handoff manuel dans scripts, automatisation manquante | D.6 : terminal→collecte/remise automatique |
| G05–G08 | pièces/captures/provenance partielles | D.6–8 : accès réel et preuve versionnée |
| G09–G11 | qualification surtout structurelle | D.7–8 : critères vs preuves, 9 rubriques, cas positif/négatif |
| G12–G14 | avis LIVE borné, chaîne autonome non raccordée | D.6/D.9 : avis unique, provenance, retour fil sans envoi |
| G15 | preuve déclarée ≠ nouvelle preuve, verrou/avis stale | D.7–9 : version, CAS, histoire, sans redispatch |
| H01–H08 | BROWSER partiel ; F2 reporté | §7 : fonctionnel utilisable puis recette UX |
| I01–I04 | autorité, isolation et concurrency à fermer | §§3–7 : invariants et négatifs ciblés |
| I05–I07 | tsc/lint/build non réattestés, preuves ciblées | §7 : compilation/régression et distinction niveaux |
| I08–I11 | conditions de qualification intégrée | §§7–10 : mandat, E2E, sync, ENV-01 et décision Morris |

**Sous-critères de suivi, rattachés aux IDs existants, sans nouveau corpus normatif :**

| ID | Propriétés à qualifier explicitement |
|---|---|
| A02 | allocation initiale sémantique, effort, réallocation dynamique selon besoin et risque |
| A06 | questions déterminantes révisables, séquençage interne et continuation du même travail |
| A07/A08 | lecture progressive D4/Git/web/D8, versions, plages et couverture, invalidation des sources |
| A09 | suffisance positivement établie ; UNKNOWN/BUDGET_EXHAUSTED/absence critique ne deviennent pas READY |
| A10 | acquis sourcés, compaction, contradictions, exclusions, restrictions, réouverture ciblée |
| A11 | checkpoints versionnés, identité du travail, reprise et réévaluation des droits |
| A12 | tokens réels si exposés, appels/coût/latence, simple vs complexe, budget de segment ≠ enveloppe globale ; transversalité |
| D01/D06 | production objet métier distinct de replyDraft/Zod, contrat intégral, critères spécifiques et non tronqués |
| D02/D08 | filiation investigation/version/contrat/READY, requalification des dépendances affectées |
| E15/F03 | confinement et permissions fournisseur effectifs, Git A et portée exacte des effets |
| G01/G12 | déclenchement autonome terminal→handoff→D8/D9→avis Nora, pas de script injecteur |
| G10/G15 | pièce réellement accessible/vérifiée/évaluée, preuve tardive authentique, version dossier/verdict/avis et concurrence |

Priorités : P0 sécurité WEB/sortie réseau, suffisance/READY/autorité, confinement/isolation et auto-session DEV ; P1 complétude cognitive, contrat long, restitution autonome et D8 probant, reprise ; P2 activité et qualification complémentaire intégrées aux résultats. Les 3 lots de convergence approuvés comme trajectoire dans ML5 sont détaillés dans [la revue §9](./ml5-revue-approfondie-conformite-post-c14.md#9-trajectoire-de-convergence-validée-comme-base-de-travail-par-morris) : 1 conducteur cognitif complet (A/B/C/D01–02 et contrat), 2 réalisation et restitution autonomes (D7/D8/D9/D3, sûreté/résilience), 3 qualification intégrée et continuité. Aucun nombre de cycles imposé, ni GO C15. Pour toute ligne touchée : référence du code et chemin nominal, sous-critère, présence/conformité distinctes, preuves par niveau, réserve, responsable et exit. Réconcilier Q-01…56, T-01…12, CA-01…10 et PF propriétaires sans promotion automatique. Historique §3/§4 préservé, ne pas utiliser ancien verdict comme courant.

**État courant : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.** NO CODE PUBLICATION / NO RELEASE / NOT ADOPTED.

## 9. Réconciliation de suivi post-C20 — lecture courante (24/11/2026)

**Portée :** actualisation factuelle D1 sous GO Morris du 24/11, candidat non mergé, sans modification des oracles ou orientations validées. [Revue globale post-C20 §11](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel) ; [C20](https://github.com/mcleland147/sfia-workspace/blob/51cbadf26b8ce2f0b0ce52b3ebebd136ce4b6bef/sfia-review-handoff/latest-chatgpt-review.md) (13/13 fichiers déclarés, blob ea7635fa), [C19 régularisé](https://github.com/mcleland147/sfia-workspace/blob/55dff99750cfc5ab4392c975862c7d6257b73c6f/sfia-review-handoff/latest-chatgpt-review.md), [C18](https://github.com/mcleland147/sfia-workspace/blob/ead52de9c6c4f6aaae712186c16bd94d51f3b79a/sfia-review-handoff/latest-chatgpt-review.md). Candidat code HEAD rapporté 6cf33e99 DIRTY C1–C20 ; local NON OBSERVÉ ; build C20 FLRkHLwoatlm8o_Iq979R, tsc/build/smoke/22 tests PASS rapportés. Cursor READY WITH RESERVES ; ChatGPT : socle exploitable, lot 1 exit NON QUALIFIÉ, lot 2 sous conditions proposé et non décidé. NO RELEASE / NOT ADOPTED.

Cette section actualise les constats de présence, preuve et reste à faire pour les **99 IDs existants** ; les lignes historiques §§3/3ter/4 et leurs états datés sont conservées comme historique, pas comme état courant exclusif. Aucun ID supprimé, pas de nouveau registre. PARTIAL signifie que certains sous-critères sont présents/probants, mais pas l'exigence complète ; les preuves des cycles antérieurs sont bornées à leur scénario/build. Les lignes ci-dessous sont un index de disposition par exigence, pas une certification individuelle de tous les Q/PF. Ne pas extrapoler un pourcentage. Les lignes I1–I6 de campagne C19/C20 ne sont pas les IDs I01–I11 du registre.

| IDs existants | Présence / preuve actuelle | Reste / responsable / exit |
|---|---|---|
| A01 | PARTIAL — qualification structurée C18, I5 C20 LIVE ambiguïté | D3 : cas naturels, contexte/risques, probe gouverné ; lot 1/2 |
| A02,A12 | PARTIAL — policy et conducteur, simple LIVE | D3 : adaptation effective et proportionnalité sur parcours réel, ressources inconnues signalées ; lot 1/3 |
| A03,A04,A05 | PARTIAL — préparation sémantique C14, contrat non forcé C18 | D3/D6 : limites du mandat et correctif sans auto-dispatch, test avec suite de mission ; lot 2 |
| A06,A07,A08 | PARTIAL — outils et journal, lectures bornées et états, C18 investigation simple | D3/D4/D9 : lecture multi-sources/versions et contradiction, continuation interne ; lot 1/3 |
| A09 | PARTIAL — filiation et READY, refus obsolescence C19/C20 | D3/D7 : suffisance positive et dépendances actuelles, négatifs avant effet ; lot 2 gate |
| A10 | PARTIAL — état structuré et questions, production conservée C19 | D3 : consolidation sémantique, acquis/contradictions et reprise ; lot 1/3 |
| A11 | PARTIAL — checkpoints immuables C19, leases/CAS C20 PG, reprise assistée C19 | D3 : interruption réelle, scope, probe, incertitude fournisseur et reprise sans perte ; lot 1/2/3 |
| B01,B02,B03,B04,B05 | PARTIAL — B1 LIVE C14, découverte/lecture et journal ; allowlist C20 | D3 : usage sûr, lecture utile, citations, confrontation/fraîcheur et couverture réelle ; WEB à confiner avant usage |
| B06 | PARTIAL — données non autoritaires, instructions système | D3 : injection et provenance éprouvées dans frontière sûre |
| B07 | **P0 OPEN / PARTIAL** — C20 allowlist et regex ; requête libre non autorisée structurellement | D3 : confinement vérifié avant lot 2 (proposition), autorisation/provenance, données synthétiques non marquées jamais transmises/loguées, preuve avant réactivation |
| B08 | PARTIAL — pinned/redirect/limites | D3 : DNS, annulation/lecture bornée complète et erreurs, tests ciblés avant WEB |
| B09 | IMPLEMENTED borné C14 LIVE fournisseur ; sécurité non induite | D3 : requalification après correction B07, pas de LIVE non sûr |
| C01,C02,C03,C04,C05,C06,C07,C08 | PARTIAL — événements, journal/projection, polling et premiers parcours | D3/UX : événements effectifs et frais pendant travail long/reconnexion, isolation, sobriété ; lot 2/3 |
| D01,D06 | PARTIAL — production structurée C18 40994/15, D4 simple C20, UI instruction | D3/D4/D7 : consolidation réelle et octets inspectés/persistés/transmis ; lot 2/3 |
| D02,D03,D07,D08 | PARTIAL — contrat canonique, filiation, D4 currency, post-claim C20 | D7/D6 : dépendances exactes, changement avant réservation, preuve refus dispatch sans appel ; gate lot 2 |
| D04,D05,D09 | PARTIAL — quatre engagements/six volets/50-50 présents, browser C9/C10 borné | UX : inspection complète du candidat final ; lot 2/3 ; F2 recette |
| D10 | PARTIAL — Oui/Non LIVE C11/C18, refus sans dispatch observé | D6 : non-régression du parcours intégré, autorité humaine conservée |
| D11,D12 | PARTIAL — scope et contrôles de mandat, droit actuel à éprouver | D6/D7 : isolation réelle, retrait permission, point d'effet ; gate lot 2 |
| E01,E02,E03,E04 | PARTIAL — SDK LIVE C11, tentative/claim/send intent/ACK C12 | D7 : chemin nominal autonome et confinement effectif ; lot 2 |
| E05,E06,E07,E08 | PARTIAL — supervisor, état LIVE et STOP C13 | D7 : supervision/reprise boot, fin/erreur/STOP et transitions concurrentes ; lot 2 |
| E09,E10,E11 | PARTIAL — DROP_ACK déterministe, no blind redispatch, historique | D7 : reprise sans double effet, concurrence/ACK incertain et historique retrouvable ; lot 2 |
| E12 | PARTIAL — contrôle MCP conditionnel à qualifier seulement si mission | D7 : droits et invocabilité sous mandat ; N/A mission sans MCP |
| E13 | IMPLEMENTED (absence gestionnaire parallèle) | Préserver ; aucune adoption |
| E14,E15 | PARTIAL — Git/MCP optionnels, workspace resolver | D7 : parité et confinement réel SDK/workspace, droits ; P0 avant effet |
| F01,F02,F03,F04,F05,F06,F07,F08 | PARTIAL — option A, observations locales/distantes et préflight partiels | D7/D9 : mandat exact, base/branche/remote/droits, observation indépendante, aucune mutation sans GO ; lot 2/3 selon mission |
| F09 | Décision A VALIDATED IN CONTENT ; implémentation PARTIAL | Préserver D7/D9 et circuit ML4 documentaire distinct, aucun publisher code Studio |
| G01,G02,G03,G04 | PARTIAL — rapport/handoff par tentative et manifest, étapes appelées séparément | D7 : construction terminal→ingestion autonome, identité/inventaire, absent/tôt/hostile ; lot 2 |
| G05,G06,G07,G08,G09 | PARTIAL — références, états et contrôles ; stockage/accessibilité captures incomplets | D7/D8 : acquisition indépendante, vérification pièces réelles, capture et limite honnête ; lot 2 |
| G10,G11 | PARTIAL — neuf rubriques, D8 surtout structurel | D8/D9 : vrai recoupement critère→preuve et positif/négatif, Git si mission ; lot 2 |
| G12,G13,G14,G15 | PARTIAL — avis LIVE borné C11/C12, retour contextualisé et réqualification existants | D3/D8/D7 : déclenchement autonome, version exacte et preuve tardive authentique, avis unique par version, pas de redispatch ; lot 2 |
| H01,H02,H03,H04,H05,H06,H07 | PARTIAL — écrans et browser bornés antérieurs | UX : parcours fonctionnels du candidat courant, bilan/fil et activité ; lot 2/3 |
| H08 | PARTIAL — L0/L1, F2 non prouvé | UX : recette F2 sur états 12.01–12.14 sous gate, pas nouveau design |
| I01,I02,I03,I04 | PARTIAL — propriétaires conservés, leases et mandat renforcés ; B07 ouvert | D3–D9 : P0 aux frontières, concurrence, secrets, isolation et preuves négatives ; lot 1/2/3 |
| I05,I06,I07,I08,I09 | PARTIAL — tests ciblés, handoffs et documentation, niveaux distingués | Cursor/ChatGPT : preuve intégrée, BROWSER, REAL conditionnel, sync des copies locales sans écraser code ; lot 3 |
| I10 | PARTIAL — composants et étapes LIVE séparées, chaîne autonome non démontrée | D7/D8/D9/D3 : E2E sans script d'injection ; cœur lot 2 puis lot 3 |
| I11 | PARTIAL — DEV NO RELEASE, pas de publication code rapportée | Morris/Cursor : ENV-01 isolation, gates distincts, recette SHA figé si GO ; lot 3 |

**Index de preuve :** C18 P3/P4 ; C19 I1–I6 §8–10 ; C20 I1/I2/I5/I6 §7 et §10. C20 I2 est un assess, pas un dispatch refusé ; I6 égalité longueur/objet D4 simple, pas identité intégrale de production longue ; I3 tests déterministes, requête privée non marquée non protégée structurellement. C20 I1 tests ciblés pas preuve de tous les interleavings. P0 WEB n'est pas fermé. Aucun statut BEHAVIOR PROVEN global.

**Travail restant / arbitrage :** réutiliser la matrice §11 de la revue globale. Les CA/T/Q/PF historiques restent opposables. T-01/02/03/04/05/06/07/08/09/10/11/12 : preuves ciblées existantes mais qualification intégrée reste partielle ; T-09 chaîne autonome et T-07 qualification réellement probante sont les cœurs de lot 2, T-11 bloqué tant que B07 non sécurisé. Q-01…56 et PF à relier au candidat final dans le flux de lot 2/3, aucun PASS en masse. Aucun nouveau lot 2 autorisé par cette mise à jour.

## 10. Réconciliation post-C22 — index courant des 99 exigences

**D1 factuel — GO Morris du 24/11/2026 :** [revue indépendante globale §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md) ; [handoff C22](https://github.com/mcleland147/sfia-workspace/blob/075d085628e5062b2fd17301f6347195fd25c53a/sfia-review-handoff/latest-chatgpt-review.md), blob 8ffd3fd07272c913531d24d88626797a358f0147. Candidat DIRTY C1–C22 @6cf33e99 rapporté, NON OBSERVÉ localement ; build xDm9gI5jk9N2qEGkFUqN_ ; Cursor READY WITH RESERVES, ChatGPT NOT READY FOR LOT 2 EXIT — LIVE DOWNSTREAM OBSERVED / D8 EVIDENCE INTEGRITY AND RESTITUTION FENCING OPEN. GO lot 2/C22 acquis ; aucun GO lot 3, clôture, publication projet ou ADOPTED. NO RELEASE. Exigences et oracles inchangés.

Les 99 IDs du registre initial sont tous repris ci-dessous (contrôle exhaustif des identifiants, sans création/suppression). Les exigences textuelles originales et états historiques restent intacts. Les mentions d'acquis désignent le sous-comportement observé, non un PASS global de l'exigence ; PARTIAL par défaut sauf E13 (présence structurelle) et décision F09 (validée en contenu, réalisation partielle). N/A seulement sur la mission C22, non sur ML5. Les états de §9 post-C20 sont historiques. Aucune extrapolation de pourcentage.

| IDs | Acquis / niveau borné | Reste / exit |
|---|---|---|
| A01 | Qualification structurée, ambiguïté C20 | Demande naturelle et probe gouverné |
| A02,A12 | Conducteur commun, ressources adaptatives partielles | Proportionnalité simple/complexe et réallocation effective |
| A03,A04,A05 | Préparation structurée et séparation D6/D7 | Correctif dans mandat, requalification et absence auto-dispatch |
| A06,A07,A08 | Journal et lectures bornées, avis D8 LIVE C22 | Investigation multi-sources/version/contradictions et journal individuel |
| A09 | Filiation et READY C18–20 ; C22 contrat seedé | Suffisance réelle avant READY, négatif source critique absente |
| A10 | mergeMode structuré C22, test propriétaire | Consolidation sémantique sans perte, D4/D7 contenu exact |
| A11 | Checkpoints PG et reprise assistée C19/C20 ; D3 avis LIVE C22 | Reprise pendant génération/production et ownership avant effet |
| B01,B02,B03,B04,B05 | B1 C14 LIVE, C20 allowlist, C22 autorisation restrictive | Recherche légitime depuis produit, lecture/citation/contradiction |
| B06 | Instructions non autoritaires | Injection sur frontière réelle sûre |
| B07 | C22 deny sans registre/allowlist, unit sans egress SCRIPTED | Confinement déterministe acquis, registre public fiable alimenté par produit et contrôle URL/logs ; pas d'usage LIVE non qualifié |
| B08 | Pinned/redirect et limites historiques | Timeout flux, limites et erreurs sur frontière réellement autorisée |
| B09 | B1 LIVE C14 borné | Requalifier compatibilité fournisseur après C22 ; pas de preuve LIVE complète |
| C01,C02,C03,C04,C05,C06,C07,C08 | Projection/journal/polling C1 et investigation.engaged C21 | BROWSER pendant RUNNING, lectures corrélées, reconnexion et isolation, sobriété |
| D01,D06 | Contrat structuré long C18 ; C22 mergeMode D4 | Préparation naturelle, complétude et octets intégraux |
| D02,D03,D07,D08 | Filiation, revalidation D4 et post-claim C20 ; C22 LIVE authorize/dispatch seedé | Réservation opposable, changement après autorisation, identité inspecté/autorisé/SDK |
| D04,D05,D09 | Engagements/volets/50-50 et parcours historiques | BROWSER candidat final, F2 recette |
| D10 | Refus C11/C18 ; C22 authorize service | Confirmation réelle UI et Non sans effet, régression |
| D11,D12 | Contrôles scope/autorité et identité tentative | Droits effectifs, révocation au point d'effet et isolation |
| E01,E02 | SDK LIVE C11/C22, mission add isolée rapportée | Garder SDK ; vérifier confinement effectif et environnement |
| E03,E04 | Tentative/claim/send intent/ACK C12/C22 | Identité et absence de double dispatch sur reprises |
| E05,E06,E07 | Supervisor et boot hook C22, run/terminal LIVE | Autonomie sans appels reconcile de campagne, reconnexion et erreur |
| E08 | STOP LIVE C13 borné | Non-régression STOP et dossier effets partiels |
| E09,E10 | ACK perdu déterministe C12, claim C22 | Restart mid-run et fencing effectif jusqu'aux écritures |
| E11 | Historique et identités persistés | Retrouver bilan/versions en UI |
| E12 | MCP conditionnel | N/A mission C22 ; si besoin, permissions et invocabilité |
| E13 | Pas de gestionnaire MCP parallèle observé | Préserver |
| E14 | Mission locale C22 sans Git/MCP | Préserver absence d'obligation artificielle ; parité lanes |
| E15 | Lecture confinée et chemin attempt-bound C22 | P0 : provenance exacte et fencing ; isolation réelle deux pilotes/SDK |
| F01,F02,F03,F04,F05,F06,F07,F08 | Option A et observations historiques | D9 indépendant et mandat Git exact sur mission pertinente ; REAL sous GO spécifique |
| F09 | Option A validée en contenu | Préserver D7/D9, pas de publisher Studio |
| G01,G02 | Handoff LIVE RECEIVED identifié ; hash et chemin attempt-bound | Binding exact et refus de fallback faible |
| G03,G04 | Rapport collecté, manifeste issu du rapport | Inventaire réel exhaustif et réalisé/non réalisé, commandes et STOP |
| G05,G07,G08 | Lecture confinée et empreintes ; outils D8 | Pièces originales/version durable, captures et références réellement consultables |
| G06 | Capture exit lue ; distinction PASS prose améliorée | P0 : capture issue d'exécution effective ; fichier exit=0 écrit sur ordre ne prouve pas test |
| G09 | PARTIAL/UNKNOWN et reprise disponibles | Refus faux succès, rapport absent/hostile, reprise et preuve tardive |
| G10 | D8 chemin propriétaire et CONFORMING observé C22 | P0 : nom fichier/exit=0 ne satisfait pas critère ; évaluation contenu + test réel et D9 si applicable |
| G11 | Neuf rubriques présentes | Valeurs probantes et consultation UI |
| G12,G13 | Avis via conducteur D3 + toolScope D8 LIVE après reprise | Unicité/versions, journal des pièces, autonomie et distinction synthèse/avis/D6 |
| G14 | Retour contextualisé historique | BROWSER bilan→brouillon, retirable, sans envoi |
| G15 | Historique/requalify existants ; claim CAS C22 | P0 : fence toutes écritures, version et preuve tardive authentique, pas redispatch |
| H01,H07 | Projection activité présente | BROWSER préparation/sas pendant travail |
| H02,H03,H04 | Inspection/Exécution présentes, observation SDK | BROWSER identité, inspection, reconnexion, UNKNOWN |
| H05,H06 | Bilan et retour fil présents | BROWSER 4 onglets et avis exact, référence retirable |
| H08 | L0/L1 historique | F2 recette sur 14 états ; pas de refonte |
| I01 | Propriétaires existants réutilisés | Préserver absence moteurs parallèles |
| I02,I03,I04 | Gates, CAS, confinement et deny C22 | P0 intégrité D8, fencing et scope/permissions ; WEB bloqué tant que non sûr |
| I05,I07,I09 | Unit/PG/LIVE borné et handoff C22 ; docs synchronisées | Non-régression, distinguer preuve et claim, réconcilier local sans écraser code |
| I06 | BROWSER historique partiel | Scénarios actuels avec build/captures |
| I08 | GitHub REAL/MCP non exercés C22 | N/A mission, GO distinct si pertinent |
| I10 | Aval LIVE à partir contrat seedé ; D8/Nora après reconcile/reprise | E2E naturel complet sans injections ni relance intermédiaire, résultat probant |
| I11 | DEV NO RELEASE, aucun commit projet rapporté | ENV-01, gel et gates Morris distincts |

**Preuves C22 :** L95–207 observations LIVE aval ; L213–431 WEB ; L524–798 collecte et evidence ; L814–911 claim ; L1227–1413 D8/avis ; L1485–1516 boot ; L1938–2016 consolidation ; L3529–3788 test LIVE. Le test crée le contrat et sa filiation et demande à Cursor d'écrire add.exit=0, ne lance pas de test add ; reconcile appelé en boucle. D8 CONFORMING observé n'est pas validé. Les captures ne sont pas une évaluation sémantique. Le propriétaire expiré peut encore écrire ; le bool final n'est pas contrôlé. P0 intégrité D8 et fencing non clos. WEB confinement déterministe n'est pas qualification fonctionnelle. Les exigences CA, T, Q-01…56 et PF demeurent inchangées ; voir contrat d'acceptation §10. Le statut global ne vaut ni lot 2 exit ni GO lot 3.

## 11. Suivi UAT du 24/11/2026 (D1 factuel)

[Journal UAT](./recette-utilisateur-ml5-pilotage-360-20261124.md). 99 exigences non requalifiées individuellement ; matrice et 30 UAT avec sévérité/oracles dans journal §§3/6. A cognition D4/Git borné OBS, budget/schema/effets PARTIAL ; B WEB FAIL ; C activité PARTIAL ; D READY/D6 observés mais mission/filiation FAIL ; E SDK LIVE/terminal OBS, supervision et isolation PARTIAL ; F D9 N/A mission sans Git, REAL global non rejoué ; G rapport OBS, inventaire/tests et retour FAIL/PARTIAL ; H visionneuse et onglets présents mais F2 ouverte ; I10 résultat métier FAIL, I11 aucune promotion. CA/T/Q/PF inchangés. 15 majeures, 13 moyennes, 2 mineures ; P0 sécurité/intégrité ouverts. UAT07/10 amélioration ciblée non close, UAT08/24 à confirmer.

**ML5 PRIMARY FLOW PARTIALLY OBSERVED — BUSINESS END-TO-END NOT ACHIEVED; OPEN / NO RELEASE / NOT ADOPTED.**
