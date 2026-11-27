# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **Registre de revue ML5 — contenu validé comme support de suivi par Morris ; Gate C accepté avec réserves et GO de construction ML5 exprimés le 23/11/2026.** Aucun GO implicite de push projet, PR, merge, recette/cutover, release, adoption ou promotion.

| Champ | Valeur |
|---|---|
| Version | v0.36 candidate — 27 novembre 2026 : **E2 résiduel + E3 UX** (GO intégré) — lecture/reprise `knowledgeEffects` ; panneau récents/version exacte ; restitution D4 sans ids techniques ; rail 246 px Figma confirmé ; candidat DEV à publier — verdicts E2/E3 distincts sous gate Morris ; v0.35 : Option B + §18.2 ; … |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
| Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
| Cycle 10 | Scénario `ml5-c10-mono-20261123` — Travail 50/50 + D6 overlay + bilan post-handoff + requalify pièce `ecap_1c817ffb…` |
| Cycle 11 | Scénario `ml5-c11-live-20261123` — Nora LIVE → D6 → Cursor SDK LIVE → D8 PARTIAL → Nora COGNITIVE |
| Cycle 12 | `ml5-c12-live-20261123` — ACK-first + reconnect + COMPLETED ; T-04 DROP_ACK PASS ; Nora D8 tools ; STOP SCRIPTED ; candidat inventorié — **ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS** |
| Cycle 13 | Confinement D8 (realpath/lstat/O_NOFOLLOW) ; journal provenance outils ; supervisor LIVE in-process ; STOP LIVE cancelled observé ; long-run sans navigateur ; candidat C3–C13 inventorié — **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |
| Cycle 20 | Qualification sortie lot 1 — P0 concurrency/D4 currency/WEB discovery/clarify/D4 canonique — **READY WITH RESERVES** |
| Cycle 19 | Fermeture I1–I6 : révisions immuables ; invalidation mandat aux effets ; WEB sanitize ; mid-RUNNING reconcile ; rattachement sémantique effectif ; production multi-tours conservée — **READY WITH RESERVES** (lot convergence 1) |
| Cycle 18 | Contrat sortie structuré + outil production ; heuristiques A–F retirées ; P1–P4 LIVE ; DRAFT/READY/D6 — **NOT READY** (lifecycle gouverné incomplet — clôturé C19) |
| Cycle 17 | Convergence verticale P1–P4 LIVE partielle — **NOT READY** |
| Cycle 16 | Raccordement produit conducteur ; claim/lease/CAS ; READY requalifié ; DRAFT incomplet ; WEB pinned ; critères intégraux — **READY WITH RESERVES** (LIVE E2E PARTIAL) |
| Cycle 15 | Conducteur adaptatif + persistance D3 PG + READY positif + WEB egress P0 — fondations ; intégration fonctionnelle incomplète (corrigée C16) |
| Cycle 14 | Routage sémantique (TECH_INTENT inerte) ; WEB LIVE isolé search+open MDN ; contrats sémantiques `d7.prepare_cursor_contract` ; S2/S5/S8 LIVE — **ML5 NORA COGNITIVE CONVERGENCE PROVEN — FUNCTIONAL COMPLETION IN PROGRESS** |
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

**99 points de contrôle** répartis en 9 familles. Ils consolidisent les comportements du contrat ML5 sans créer de nouvelles règles R2 ni transformer le registre en spécification normative.

### A. Conduite cognitive transverse de Nora
**Responsabilités :** D3, D4. **Sources :** Contrat fonctionnel ML5 §§3–5, 13 ; architecture §15.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | — |
| ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | — |
| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | PARTIEL | `nora-contract-bridge` intent + sources CONSULTED/VERIFIED requises ; LIVE multi-sources NON PROUVÉ |
| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | PARTIEL | Cycle 6 — `detectsCorrectiveDraftIntent` + bridge `cursorRedispatch:false` ; LIVE non prouvé |
| ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | — |
| ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | — |
| ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | PARTIEL | Cognitive completion `86be1689` : clé canonique chemin+rev ; LIVE court 5/5 CONSULTED @`8c398c4` — pas preuve 50 sources |
| ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | PARTIEL | `inventoryExamined`/`Partial`/`Denied` séparés ; unit collision basename + PARTIAL≠full ; LIVE TARGETED |
| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigationSufficiency` + dispositions COMPLETE/AWAIT respectées ; READY serveur inchangé ; LIVE restitution 1 segment |
| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | `upsertConclusion` ; note D4 parent=`cgw_71a26db3…` sans relecture (0 sources) |
| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
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
| ☐ | `B06` | Neutraliser les injections d'instructions issues de pages/snippets et ne leur attribuer aucun droit D6/D7/Git. | PARTIEL | Instructions système + résultats non-autorité ; LIVE injection non prouvée |
| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | PARTIEL→C22 | C22 : autorisation exacte EXPLICIT_AUTHORIZED_EXACT \| REGISTERED_PUBLIC_COMPOSITION ; registre vide = deny ; free-form publicTopic/rawQuery refusés (unit ml5-web-search-authorize) ; confinement ≠ qualification WEB LIVE complète |
| ☐ | `B08` | Traiter timeout, pages/PDF indisponibles, budget/coût/latence, échec et reprise avec limite honnête et sans crawler parallèle par défaut. | NV | — |
| ☐ | `B09` | Prouver la compatibilité du fournisseur/outillage web avec le runtime D3 et la réponse structurée, sur modèle/version réels. | NV | — |

### C. Activité fonctionnelle de Nora pendant ses travaux
**Responsabilités :** D3 ; projection corrélée, sans seconde autorité. **Sources :** Contrat ML5 §6 ; architecture §17.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | PARTIEL | Producteur `appendActivityEvent` branché au tour Nora (ANNOUNCED→COMPLETED) ; UI fil partielle |
| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | PARTIEL | Natures ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN ; séquence sous lock PG |
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
| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | PARTIEL | `prepareTechnicalContractFromNora` + bridge tour → DRAFT ; LIVE investigation multi-sources NON PROUVÉE |
| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | CF-02 : READY serveur via investigation durable ; client `sourcesSufficient` ignoré ; BROWSER NON PROUVÉ |
| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
| ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
| ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
| ☐ | `D06` | Afficher l'instruction technique complète en lecture défilante, sans troncature ni substitution des champs de réponse Nora. | PARTIEL | Stockage full `instruction_text` + UI expand ; F2 12.14 manquant |
| ☐ | `D07` | Garantir identité de version/empreinte entre texte inspecté, texte autorisé et octets effectivement transmis au SDK. | PARTIEL | Fingerprint + authorize inspect match + dispatch recheck ; LIVE SDK non prouvé |
| ☐ | `D08` | Requalifier un changement matériel d'instruction, périmètre, cible, risque, droit ou version avant lancement. | PARTIEL | `isMaterialContractChange` + requalification au dispatch |
| ☐ | `D09` | Implémenter la visionneuse Travail 50/50 avec fil Nora utilisable, carte de contrat et navigation vers Exécution. | NV | — |
| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | PARTIEL | `confirmed:true` requis API + dialog `d6-confirm-launch` dans `CursorRealizationSurface` ; BROWSER F2 non prouvé |
| ☐ | `D11` | Recontrôler D6/D7/D9 et capacités/permissions réelles au point d'effet ; interdictions et suspensions opposables. | PARTIEL | `assertCurrentCursorAuthority` au dispatch ; MCP réel non vérifié |
| ☐ | `D12` | Conserver lien au bon projet, Pilote, contrat et cycle d'origine le cas échéant, sans imposer de cycle. | PARTIEL | attempt/contract/pilot/project liés |

### E. Dispatch, exécution LIVE, arrêt et reprise Cursor SDK
**Responsabilités :** D7, D6 ; Cursor environnement d'exécution administré hors Studio. **Sources :** Contrat ML5 §§9, 17–19 ; architecture §18 ; SDK C9.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `E01` | Déclencher Cursor SDK automatiquement depuis Studio sans copier-coller ni conversation Cursor manuelle par mission. | PARTIEL | Dispatch service SCRIPTED ; LIVE entitlement non prouvé |
| ☐ | `E02` | Exécuter dans l'environnement Cursor effectif ; Cursor Desktop demeure disponible pour administration, comptes, MCP et authentifications. | PARTIEL | Pas d'admin Desktop dans Studio ; LIVE cwd à qualifier |
| ☐ | `E03` | Créer/récupérer une tentative unique avec projet, Pilote, contrat/version/empreinte et mandat. | PARTIEL | `prepareCursorExecution` + correlationKey |
| ☐ | `E04` | Persister identité/autorité/tentative et contexte avant send/dispatch ; séparer store SDK et vérité métier D7. | PARTIEL | claim avant send ; resultJson D7 |
| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | PARTIEL | LIVE `waitForTerminal=false` après ACK ; SCRIPTED terminal immédiat ; worker prod non imposé |
| ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
| ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
| ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | CF-03 : `priorSendMayHaveOccurred` + SQL fence AMBIGUOUS ; PG T-04 ACK-lost **PASS** (DEV) ; LIVE NOT PROVEN |
| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL→C19 | C19 I4 : `reconcileStaleRunningCognitiveWorks` → `PROCESS_OR_LEASE_INTERRUPT` ; fence owner + kill LISTEN mid-RUNNING ; reprise même workId DEV LIVE |
| ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
| ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
| ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | PARTIEL | Aucun admin MCP ajouté |
| ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | PARTIEL | gitScope/mcp optionnels sur plan |
| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | P0-02 + refus racines dans arbres produit ; client cwd refusé ; LIVE isolation OS NOT PROVEN |

### F. Git de travail et continuité des réalisations
**Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | PARTIEL | Cycle 6 option A — `preflightCursorGitOptionA` ; bare local DETERMINISTIC ; GitHub REAL NON |
| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | PARTIEL | Harness bare + workspace path ; LIVE workspace OS non prouvé |
| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | PARTIEL | Mandate allowedOps ; PR/merge hors mandat par défaut |
| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | PARTIEL | Observation REMOTE_VERIFIED après relecture ; Studio non publisher |
| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | PARTIEL | `observeRemoteAfterPush` bare ; GitHub REAL NON |
| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | PARTIEL | LOCAL_ONLY vs REMOTE_VERIFIED |
| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | PARTIEL | allowPullRequest/allowMerge false par défaut ; unit refus |
| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | PARTIEL | Mandate/baseSha continuity helpers ; multi-contrat LIVE ouvert |
| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | PARTIEL | DÉC-ML5-GIT option A appliquée ; préflight branché prepare ; pas de publisher Studio |

### G. Handoff par tentative, qualification D8/D9 et analyse Nora
**Responsabilités :** D7/D8/D9/D3. **Sources :** Contrat ML5 §§10–11,17.3–17.4,18.3,19.5 ; R2 D8.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `G01` | Créer un dossier/handoff identifié et non écrasé pour chaque tentative, distinct du handoff externe SFIA v2.6. | PARTIEL | `realization_handoffs` UNIQUE attempt ; immutable |
| ☐ | `G02` | Porter contrat/version/empreinte, tentative, exécutant, environnement, état, branche/base/SHAs connus. | PARTIEL | Champs handoff + manifest.git optionnel |
| ☐ | `G03` | Décrire réalisé/non réalisé, sources consultées, commandes, actions, incidents, STOP, tests et réserves. | PARTIEL | Rapport markdown + gaps ; format libre |
| ☐ | `G04` | Inventorier exhaustivement les fichiers créés, modifiés, déplacés et supprimés, y compris tests, code, scripts, docs et pièces. | PARTIEL | Manifest inventaire ; enforcement INCOMPLETE si vide |
| ☐ | `G05` | Fournir contenu réellement lisible par SHA/diff/sections, ou contenu texte sûr dans rapport, sinon lacune explicite. | EC | Contenu via reportMarkdown ; accès Git D9 non branché ici |
| ☐ | `G06` | Séparer tests déclarés, réellement exécutés, capturés, non exécutés et couverture vérifiée. | PARTIEL | Champs manifest + D8 refuse PASS sans capture |
| ☐ | `G07` | Rendre accessibles captures originales runtime, références Figma/frame, manifestes et preuves spécialisées nécessaires. | NV | Non implémenté stockage captures |
| ☐ | `G08` | Conserver handoff et artefacts à références durables, sans latest multi-tentatives ni confusion SFIA v2.6. | PARTIEL | Une ligne/attempt ; pas de latest produit |
| ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
| ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | D7+D8 ; D9 recoupement Git Cursor non branché |
| ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | `qualifyCursorRealization` + `RealizationBilan` |
| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | `buildNoraCognitiveAnalysis` (dossier) + brief distinct ; LIVE Nora run = preuve supérieure encore ouverte |
| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + surfaces `execution` / `publication` (results) distinctes |
| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | PARTIEL | Cycle 6 — FOR UPDATE + newProofRef + PG concurrent PASS ; BROWSER requalify ouvert |

### H. UX Figma page 12 et fidélité de transposition
**Responsabilités :** R3 UX / D3 D6 D7 D8 D9 ; Cursor exécute sous méthode Figma v1.1. **Sources :** Figma file itgvCulInEnFY6DvgIegvP page 12 ; ux-ui/methodologie-contrat-figma-cursor.md v1.1.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | — |
| ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | — |
| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | PARTIEL | `?surface=execution` + historique interventions ; F2/BROWSER NOT PROVEN |
| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | PARTIEL | UI AMBIGUOUS « à réconcilier » + LIVE projection ; LIVE SDK NOT PROVEN |
| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | PARTIEL | C24 : onglets `SYNTHÈSE` / `LIVRABLES ET TESTS` / `GIT & PIÈCES` / `ÉCARTS` + 3 appréciations + split bilans/dossier ; fixtures runtime 14/14 ; F2 shell complet PARTIEL |
| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | PARTIEL | C24 : chip dossier retirable + `mergeDraftWithDossierAttachment` + consolidation questions joindre ; pas d'envoi auto ; fixture 12.09 capturée |
| ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | PARTIEL | Fixture 12.10 capturing preparing ; rail sas personnel non dupliqué |
| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | C24 : L0–L2 + PNG Figma hashés 14/14 + runtime fixtures 14/14 ; F2 δ≤2 CSS px shell projet encore PARTIEL |

### I. Non-régression, qualité, preuve et gouvernance
**Responsabilités :** Transverse D1–D9 / SEF / ENV-01. **Sources :** SEF v0.2, ENV-01, product-versioning, SFIA v2.6 ; ML5 architecture A–D.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
| ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | PARTIEL | PG ML5 dispatch **8 PASS** incl. ACK-lost ; concurrence 1 win ; fencing stale claim |
| ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
| ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
| ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
| ☐ | `I07` | Distinguer simulation, DETERMINISTIC, INTEGRATION, BROWSER, SDK LIVE et effet GitHub/MCP REAL. | NV | — |
| ☐ | `I08` | Limiter les essais GitHub REAL et MCP/Figma/Canva aux capacités effectivement concernées et aux GO réels. | NV | — |
| ☐ | `I09` | Synchroniser code, UX, architecture et as-built ; changer de schéma/autorité uniquement sur gate Morris. | NV | — |
| ☐ | `I10` | Prouver le parcours intégré Nora→contrat inspecté→HumanDecision→Cursor→retours→D8/D9→avis Nora→suite. | NV | — |
| ☐ | `I11` | Respecter ENV-01 DEV/RECETTE/STABLE, versioning NO RELEASE, recette SHA figé, PR/merge/promotion sous GO et ADOPTED jamais automatique. | NV | — |


## 3 ter. Inventaire d'implémentation A01–I11 (cycle 4 — 2026-11-23, réconcilié)

> Axe **Implémentation** distinct de la conformité (NV/PARTIEL/VÉRIFIÉ).
> Réconcilié avec l'inventaire explore [Inventory A01-I11](28376cd8-26ca-4d04-95ec-34395679e40f) et les correctifs cycle 4 (journal sources, frontier B1, sendIntent, READY prepId, classification synthèse).
> IMPLEMENTED = comportement constitutif raccordé sans manques essentiels. PARTIAL = pièces présentes. NOT_IMPL = absent.

| ID | Impl | Owner | Fichiers / fonctions | Écart / exit |
|---|---|---|---|---|
| `A01` | PARTIAL | D3 | semantic-qualification, nora-adapter | Qualification courte hors intent contrat non consolidée dans investigation-state |
| `A02` | PARTIAL | D3 | cognitive-policy, nora-adapter tools | Profondeur non exposée transversalement sas/document/bilan |
| `A03` | PARTIAL | D3/D7 | nora-contract-bridge, nora-contract-prepare, tool-source-journal | C11 — contrat DRAFT/READY produit après Nora LIVE (`openai-agents-sdk-live`) ; GO préparation explicite encore partiel |
| `A04` | PARTIAL | D3 | nora-contract-bridge correctiveIntent | Cycle 6 — détection + cursorRedispatch:false ; LIVE non prouvé |
| `A05` | PARTIAL | D3/D7 | REQUIRES_REQUALIFICATION, fingerprint mismatch | Anti-boucle partielle ; pas de requal hors mandat complète |
| `A06` | PARTIAL | D3 | investigation-state questions | Pas de conducteur séquencé révision questions↔découvertes |
| `A07` | PARTIAL | D3/D4 | d4-read-tools+journal, git/history tools | Lectures D4 journalisées CONSULTED ; git/history journal incomplet |
| `A08` | PARTIAL | D3 | investigation-state SourceCoverage, tool-source-journal | Types OK ; VERIFIED rare ; peuplement partiel |
| `A09` | PARTIAL | D3/D7 | technical-contract-server-ready | READY serveur ; snapshot sans lecture D4 live systématique |
| `A10` | PARTIAL | D3 | investigation-persistence | Snapshot durable ; consolidation acquis D4 incomplète |
| `A11` | PARTIAL | D3 | investigation-persistence, resumeInvestigation | Reprise mid-turn/incident non branchée au fil |
| `A12` | PARTIAL | D3 | cognitive-policy | Économie simple sur tour projet seulement |
| `A13` | IMPLEMENTED | D3 | cognitive-policy v3 | `OPERATIONAL_PROVISIONAL` explicite DEV\|RECETTE (GO 2026-11-24) ; STABLE/PROD refusés ; `OPERATIONAL_VALIDATED` toujours non adopté |
| `B01` | PARTIAL | D3 | public-web-search-frontier (cycle 4) | SCRIPTED query-only ; LIVE gated ; hosted tool détaché |
| `B10` | IMPLEMENTED | D3 | public-web-registry | Catalogue public par défaut aussi en RECETTE (templates connus ; pas de recherche libre) |
| `B02` | PARTIAL | D3 | public_web_open_page SCRIPTED | Ouverture LIVE non implémentée |
| `B03` | PARTIAL | D3 | confrontWebSources (cycle 5) | SCRIPTED confrontation ; LIVE ouvert |
| `B04` | PARTIAL | D3 | web-source-citation + open_page citation | Cycle 7 — contrat citation SCRIPTED ; UX affichage partiel ; LIVE gated |
| `B05` | PARTIAL | D3 | frontier coverage DISCOVERED/CONSULTED via open | Distinction partielle runtime ; UX absente |
| `B06` | PARTIAL | D3 | instructions non-autorité + résultats untrusted | Injection LIVE non prouvée |
| `B07` | PARTIAL | D3 | frontier outbound log + sanitize | Non-exfil SCRIPTED testé ; WEB LIVE NOT PROVEN |
| `B08` | PARTIAL | D3 | frontier DENIED/TIMEOUT/budget calls | Timeout/reprise web partielle |
| `B09` | IMPLEMENTED | D3 | `public-web-search-frontier` isolated Agent + webSearchTool + fetch open | C14 LIVE — items DISCOVERED + PAGE_OPENED MDN ; isolation outbound PASS ; hosted tool jamais sur agent Nora privé |
| `C01` | PARTIAL | D3 | appendActivityEvent, service producers | UI fil n'affiche pas GET activity pendant RUNNING |
| `C02` | PARTIAL | D3 | natures + OBSERVED sources journal (cycle 4) | Événements outil OBSERVED partiels (D4/WEB ; git/history incomplets) |
| `C03` | PARTIAL | D3 | activity sourceRef depuis journal | Relier lectures git/history encore ouvert |
| `C04` | PARTIAL | D3 | status FAILED/LIMITED | Affichage UX limites incomplet |
| `C05` | PARTIAL | D3/UX | NoraConversation liveActivity detail (cycle 5) | BROWSER/F2 non prouvé |
| `C06` | PARTIAL | D3 | listActivityEvents API | Sans consommateur UX reconnexion |
| `C07` | PARTIAL | D3/UX | poll by-key+activity pendant send (cycle 5) | BROWSER longue investigation ouvert |
| `C08` | PARTIAL | D3 | ownerToken fence + redact | Isolation multi-Pilote incomplete |
| `D01` | PARTIAL | D3/D7 | nora-contract-prepare + bridge + journal | C11 — préparation LIVE sur projet DEV documenté ; multi-sources/contradiction encore partielle |
| `D02` | PARTIAL | D7 | server-ready ; client prepId ignoré (cycle 4) | Droits révoqués BROWSER ouvert |
| `D03` | PARTIAL | D7 | technical-contract + fingerprint + mig 018 | Versions OK ; changement matériel helper non branché |
| `D04` | PARTIAL | D7/UX | ContractViewer | Pas 50/50 Travail Figma 12.02 |
| `D05` | PARTIAL | D7/UX | ContractViewer volets | Inspectable Exécution, pas Travail |
| `D06` | PARTIAL | D7/UX | instruction_text + expand | F2 12.14 ouvert |
| `D07` | PARTIAL | D6/D7 | authorize fingerprint + dispatch + C9 refuseCursorExecution | C11 — D6 Non/Oui + dispatch LIVE ; instruction bytes = contrat autorisé |
| `D08` | PARTIAL | D7 | fingerprint mismatch au dispatch | isMaterialContractChange non appelé |
| `D09` | PARTIAL | D3/UX | ContractViewer dans Travail aside (cycle 5) | F2 12.02 / BROWSER non prouvé |
| `D10` | PARTIAL | D6/UX | d6-confirm sur Exécution | Pas 12.03 générique sur Travail |
| `D11` | PARTIAL | D6/D7 | assertCurrentCursorAuthority | MCP réel non vérifié |
| `D12` | PARTIAL | D7 | FKs attempt/contract/pilot/project | Cycle D5 optionnel non câblé |
| `E01` | PARTIAL | D7 | dispatchCursorRun SCRIPTED/LIVE env | C11 — LIVE Studio prouvé (`composer-2.5`, FileCredentialStore) ; SCRIPTED conservé |
| `E02` | PARTIAL | D7 | workspace-resolver | Pas admin Desktop/MCP Studio (by design) |
| `E03` | PARTIAL | D7 | prepareCursorExecution + correlationKey | — |
| `E04` | PARTIAL | D7 | claim + sendRequestedAt atomique (cycle 4) | C11 — run LIVE `agent-29c4c0f4…` / `run-51c77f21…` lié attempt |
| `E05` | PARTIAL | D7 | ACK-first + `cursor-live-supervisor` (C13) | C13 T-05 long-run COMPLETED sans navigateur ; resume-once ; ≠ queue/scheduler général |
| `E06` | PARTIAL | D7/UX | CursorLiveProjection + execution surface | Événements SDK partiels |
| `E07` | PARTIAL | D7 | CursorLiveProjection fields | — |
| `E08` | PARTIAL | D7 | stop API | Effets partiels partiels |
| `E09` | PARTIAL | D7 | priorSend + DROP_ACK fault (C12) | T-04 DETERMINISTIC PASS ; LIVE borné non rejoué (effet) |
| `E10` | PARTIAL | D7 | reconcile + observeLiveCursorRun (C11) | LIVE observe sans second send ; reconnect navigateur incomplet |
| `E11` | PARTIAL | D7/UX | attempts list execution | Historique Figma 12.04/05 non équivalent |
| `E12` | PARTIAL | D7 | mcp-capability-check + prepare gate | Cycle 7 — check conditionnel ; inventaire déclaratif ; MCP REAL gated |
| `E13` | IMPLEMENTED | D7 | pas d'admin MCP Studio | Exigence négative respectée |
| `E14` | PARTIAL | D7 | gitScope/mcp optionnels | — |
| `E15` | PARTIAL | D7 | workspace-resolver root | Isolation OS/Pilotes non prouvée |
| `F01` | PARTIAL | D7/D9 | observeWorkspaceGitFacts + preflight | CP-01 C7 — observations indépendantes ; GitHub REAL NON |
| `F02` | PARTIAL | D7/D9 | cursor-git-option-a harness | Workspace isolé test ; OS multi-Pilote ouvert |
| `F03` | PARTIAL | D7/D9 | mandate allowedOps | Commit/push mandatés ; PR/merge distincts |
| `F04` | PARTIAL | D7/D9 | observation REMOTE_VERIFIED | Studio lit ; ne publie pas |
| `F05` | PARTIAL | D7/D9 | observeRemoteAfterPush | Relecture SHA bare ; REAL ouvert |
| `F06` | PARTIAL | D7/D9 | LOCAL_ONLY vs REMOTE_VERIFIED | Déclaration push ≠ constat |
| `F07` | PARTIAL | D7/D9 | allowPR/Merge false default | Unit refus hors mandat |
| `F08` | PARTIAL | D7/D9 | baseSha continuity | Multi-contrat LIVE ouvert |
| `F09` | PARTIAL | D7/D9 | preflight on prepare + D9 read | Pas de publisher Studio ; option B abandonnée |
| `G01` | PARTIAL | D7 | realization_handoffs UNIQUE | — |
| `G02` | PARTIAL | D7 | handoff fields | — |
| `G03` | PARTIAL | D7 | report + gaps | Structuration incidents/STOP incomplète |
| `G04` | PARTIAL | D8 | inventoryComplete | Acquisition serveur auto absente |
| `G05` | PARTIAL | D7 | reportMarkdown | Lecture Git D9 pièces absente |
| `G06` | PARTIAL | D8 | qualify testsDeclared/Captured | Collecte runtime tests absente |
| `G07` | PARTIAL | D8 | evidence-captures + API captures | Cycle 7 — store SHA + Playwright PNG ; bilan UX rattachement partiel |
| `G08` | PARTIAL | D7 | one handoff/attempt | — |
| `G09` | PARTIAL | D7/D8 | REJECTED/INCOMPLETE | — |
| `G10` | PARTIAL | D7/D8 | gitFactsVerified hook | Feed D9 Cursor non branché |
| `G11` | PARTIAL | D8/UX | 9 rubrics + 4 tabs | Recoupement réel faible ; F2 ouvert |
| `G12` | PARTIAL | D3/D8 | D8 tools + path confine + journal (C13) | C13 — confinement symlink PASS ; journal CONSULTED≠toolCalls ; secrets non divulgués |
| `G13` | PARTIAL | D8/UX | labels + surfaces execution/publication | — |
| `G14` | PARTIAL | UX | onDiscussWithNora draft | Référence bilan structurée absente |
| `G15` | PARTIAL | D8 | FOR UPDATE + newProofRef + expectedUpdatedAt | PG concurrent PASS cycle 6 ; BROWSER requalify ouvert |
| `H01` | PARTIAL | UX | live activity + preparedContract open (cycle 5) | F2 12.01 NOT RUN |
| `H02` | PARTIAL | UX | ContractViewer Travail 50/50 (cycle 5) | F2/BROWSER NOT RUN |
| `H03` | PARTIAL | UX | surface=execution | Identité/versions partielles vs 12.04/05 |
| `H04` | PARTIAL | UX | AMBIGUOUS + live projection | États LIVE Figma incomplets |
| `H05` | PARTIAL | UX | RealizationBilan 4 onglets | Fidélité 12.08/11-13 ouverte |
| `H06` | PARTIAL | UX | discuss→Travail | Frame 12.09 non F2 |
| `H07` | PARTIAL | UX | sas preparations activity | C1 sas ML5 partiel |
| `H08` | PARTIAL | UX | Figma oracles + Playwright runtime | Cycle 7 — 4 oracles + 4 runtime ; F2 ≤2px global NOT PROVEN |
| `I01` | PARTIAL | transverse | CURSOR_EXECUTION additive | Vigilance double autorité |
| `I02` | PARTIAL | D6 | cursor-authority | Matrice I02 incomplete |
| `I03` | PARTIAL | QA | claim/fence/PG T-04 | UX concurrence ACK/STOP incomplete |
| `I04` | PARTIAL | QA | frontier+sanitize tests | Suite injection/MCP/Git incomplete |
| `I05` | PARTIAL | QA | unit+PG+docs cycle 4 | Exigence processus partielle |
| `I06` | PARTIAL | QA | DEV auto-session + BROWSER snapshots | Cycle 6 — Travail/Exécution/Résultats/sas servis ; F2 PNG timeout |
| `I07` | PARTIAL | QA | Fake/Real dans packs | Pas distinction UX |
| `I08` | PARTIAL | gov | pas REAL mutatif ce cycle | Gate I08 ML5 partiel |
| `I09` | PARTIAL | docs | as-built/registre | — |
| `I10` | PARTIAL | QA | fixture SCRIPTED + BROWSER surfaces | Cycle 7 — contrat/attempt/handoff DEV + captures ; D6/LIVE non E2E |
| `I11` | PARTIAL | gov | ENV-01 DEV ; NO RELEASE | Politique ADOPTED hors code |

**Totaux implémentation (cycle 5) :** IMPLEMENTED=1 · PARTIAL=81 · NOT_IMPL=17 · Σ=99.

**Totaux implémentation (cycle 6) :** IMPLEMENTED=1 · PARTIAL=92 · NOT_IMPL=6 · Σ=99.
Mouvements : A04, F01–F09, I06 → PARTIAL. Restent NOT_IMPL : B04, B09, E12, G07, H08, I10.

**Totaux implémentation (cycle 7) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 · Σ=99.
Mouvements NOT_IMPL→PARTIAL : B04, E12, G07, H08, I10. Reste NOT_IMPL : **B09** (WEB LIVE fournisseur).
CP-01 préflight observations indépendantes ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref verify ; Playwright captures runtime ; F2 global NOT PROVEN.

**Totaux implémentation (cycle 8) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09) · Σ=99 — pas de conversion artificielle.
CP-01 : origin match + ls-remote frais + REMOTE_VERIFIED exige local HEAD. CP-02 : probe TCP loopback à l'émission. CP-03 : preuve exacte, pas de fallback handoff. A3 MCP : UNKNOWN fail-closed. G07 : magic PNG/JPEG. BROWSER intégré SCRIPTED + captures C8. F2 global **NOT PROVEN**.

**Totaux implémentation (cycle 11) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09) · Σ=99 — **aucune promotion artificielle PARTIAL→IMPLEMENTED**.
Preuves LIVE (conformité ≠ présence) : Nora prepare (`openai-agents-sdk-live`) ; Cursor SDK LIVE (`@cursor/sdk` 1.4.2, modèle `composer-2.5`, clé FileCredentialStore) ; témoin `DEMO_C11.txt` vérifié sous cwd résolu ; handoff RECEIVED ; D8 verdict PARTIAL honnête ; analyse finale `NORA_COGNITIVE`. B09 / GitHub REAL mutatif / MCP mission : N/A ou NOT_IMPL. Option Git A inchangée (pas de contradiction dans constats courants). F2 hors gate C11.

**Totaux implémentation (cycle 14) :** IMPLEMENTED=2 · PARTIAL=97 · NOT_IMPL=0 · Σ=99.
Mouvement : **B09 NOT_IMPL → IMPLEMENTED** (agent isolé LIVE + open fetch + parse navigation ; preuves `/tmp/sfia-c14-web-probe4.log`, cognitive `s4_web`). Aucune promotion artificielle des 97 PARTIAL. Conformité A01–A12 / C01–C08 / D01–D02 reste majoritairement PARTIEL (LIVE sémantique S2/S5 PASS ; reprise S7 / contradiction S6 / activité BROWSER non exhaustifs).

**Écarts majeurs cycle 6 :** F2 pixel NOT PROVEN (screenshot tooling timeout) ; WEB/SDK/GitHub REAL gated ; I10 parcours E2E non câblé bout-en-bout ; captures G07 absentes.

**T-01…T-12 (sens canonique) :**
| T | Sens | État |
|---|---|---|
| T-01 | Investigation + contrat Nora | PARTIAL |
| T-02 | Refus Pilote sans effet | PARTIAL (Exécution Non) |
| T-03 | Autorisation contrat exact | PARTIAL |
| T-04 | ACK perdu sans second envoi | PG PASS |
| T-05 | Mission longue navigateur fermé | NOT PROVEN |
| T-06 | STOP effets partiels | PARTIAL |
| T-07 | Tests non vérifiés → D8 refuse | PARTIAL |
| T-08 | Contradiction Git/rapport | PARTIAL (qualify) ; F Cursor NOT_IMPL |
| T-09 | Unique revue Nora | PARTIAL (synthesis≠D3) |
| T-10 | Reprise discussion | PARTIAL |
| T-11 | Web sans exfiltration | PARTIAL SCRIPTED |
| T-12 | Deux Pilotes / dépôt partagé | NOT PROVEN |

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

## 5. Journal des livraisons et revues

| ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
|---|---|---|---|---|---|---|
| R-001a | 23/11/2026 | ML5 socle vertical — CRITICAL | `sfia/next-ml5-integrated-delivery-20261123` / `69aeb329…` local rapporté ; aucune publication projet | [Review Pack 1 @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) | A–I, Q applicables, socle D/E/G | ML5 PARTIAL — GOVERNED GAPS ; 17 tests unitaires rapportés ; BROWSER/LIVE/REAL non prouvés |
| R-001b | 23/11/2026 | ML5 consolidation P0/UX initiale — CRITICAL | même worktree, HEAD local `6b7dac12…` dans pack et `6cf33e99…` rapporté ensuite ; non lu directement | [Review Pack 2 @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) | A–I et 56 Q selon pack ; 29 unit + 7 PG PASS **rapportés** | ML5 PARTIAL — GOVERNED GAPS ; P0 DEV partiels, F2/BROWSER/LIVE/REAL ouverts |
| R-002 | 23/11/2026 | Revue de conformité fonctionnelle/UX/architecture D0 + intégration documentaire D1/D2 candidate | Branch documentaire de revue, `main` inchangé ; SHA commit à relever après écriture | Même deux Review Packs + Figma page 12 (lecture) | 99 exigences + Q-01…Q-56 + PF propriétaires à recouper | 44 PARTIEL / 1 EC / 54 NV ; contrat d'acceptation **CANDIDAT**, non réceptionné |
| R-003 | 23/11/2026 | ML5 convergence intégrée — CF-02/03, Nora prepare, surfaces Exécution/Résultats, D8/Nora | `sfia/next-ml5-integrated-delivery-20261123` worktree local (HEAD post-cycle à figer) ; push projet **interdit** | Review Pack 3 → `sfia/review-handoff` (publish-in-cycle) | A03/A09/D01/D02/E09/G12–G14/H03–H06/I03 + CF-02/03 | ML5 PARTIAL — GOVERNED GAPS ; PG 8 PASS ; unit 25+ ; BROWSER/F2/LIVE/REAL ouverts |
| R-005 | 23/11/2026 | ML5 cycle 5 — Travail 50/50, activité RUNNING, B1 URL, G15 requalify, supervision poll | même worktree DIRTY ; HEAD `6cf33e99…` | Review Pack 5 → `sfia/review-handoff` | Impl 1/81/17 ; BROWSER/F2 NOT RUN | ML5 PARTIAL — GOVERNED GAPS |
| R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
| R-PROV-01 | 26/11/2026 | ML5 politique cognitive provisoire v0.1 + qualification intégrée A/B/E/F LIVE | `sfia/next-ml5-integrated-delivery-20261123` · base `4f1bb0f2` · DEV build `-8zagoVhrLvhtuKL7ThVc` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | Politique v0.1 · FinOps WEB attribution · LIVE Terra→Sol · WEB gate dossier | DEV CANDIDATE — PROVISIONAL POLICY QUALIFIED IN DEV — WEB GATE PENDING — C/D différés |
| R-AT-CAP | 25/11/2026 | ML5 Nora×Studio capability interactions — AssetTrack AT-01…13 (AT-10 retirée) · Option B+A+C | `sfia/next-ml5-integrated-delivery-20261123` · base `0d37b12a` · DEV build `BMd8qv-bn6m9Hj6YEtdee` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | AT-01…13 · PREPARE documentaire · forecast cognitif · LIVE activité · Git REAL RO | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW ; RECETTE `ca0b114c` préservée |
| R-E1 | 27/11/2026 | E1 Continuité cognitive B.1–B.8 (MP-03/10/12/13 + interfaces) — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty ; no project commit | Review Pack E1 → `sfia/review-handoff` (publish-in-cycle) | B.1–B.8 · oracles 1–18 (E1 niveau) · suite 52 PASS unit/PG | E1 DETERMINISTIC PROVEN partiel ; autonomie LIVE NON PROUVÉE ; embedding residual → E2 ; UX panneau → E3 ; Livraison 1 NOT ACCEPTED |
| R-E1r | 27/11/2026 | E1 complément neuf reliquats E1-REL-01…09 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1r → `sfia/review-handoff` (publish-in-cycle) | E1-REL-01…09 · e1-reliquats 5 PASS + non-régression B.5–B.8 | E1 COMPLÉMENT — DETERMINISTIC PROVEN ciblé ; preuves naturelles → recette ; LIVE/DOM NON PROUVÉS ; E2 non engagé |
| R-E1f | 27/11/2026 | E1 sécurisation finale — merge enfants + forecast USER_MESSAGE + pack | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1f → `sfia/review-handoff` | merge reparent/cycle · BODY_FORECASTJSON refuse · e1-final-safeguards 5 PASS | E1 FINAL SAFEGUARDS — DET PROVEN ; R-REC-E1-01/02 conservés ; E2 non engagé |
| R-E2 | 27/11/2026 | E2 garanties cognitives résiduelles A.1–A.7 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2 → `sfia/review-handoff` @`80cdef6c` | A.1–A.7 · 91 PASS unit ciblés · hybrid instruit | **Cursor** READY WITH RESERVES ; ChatGPT PARTIEL NOT READY E3 ; six reliquats → R-E2c |
| R-E2c | 27/11/2026 | E2 complément six reliquats E2-REL-01…06 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2c → `sfia/review-handoff` | REL-01…06 · 89+ PASS unit/PG · hybrid PG DET | **Cursor** READY WITH RESERVES ; ChatGPT revue indépendante pending ; E3 non engagé |
| R-E2f | 27/11/2026 | E2 sécurisation finale E2-FINAL-01…03 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2f → `sfia/review-handoff` | FINAL-01…03 · 16 PASS FINAL + 59 PASS lot affecté | **Cursor** READY WITH RESERVES — sortie construction E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
| R-E2b | 27/11/2026 | E2 Option B — conduite uniforme intentions qualifiées (ARCH-01…05) | publié `3fe91745` / tree `94680265` | Review Pack Option B → `sfia/review-handoff` | planner unit + unified PG SC1–SC3 · C02/MP09/E1 NR | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
| R-E2b-r | 27/11/2026 | E2 Option B réconciliation §18.2 (états D4, fraîcheur, SC3) | base `3fe91745` ; **delta local non publié** | Review Pack reconcile → `sfia/review-handoff` | knowledgeEffects · SC2/SC3/fresh · NR C02/MP09/E1 | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
| R-E2i | 27/11/2026 | E2 revue d'intégration — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2i → `sfia/review-handoff` | INT D4/C02/FinOps · 20 PASS ; e2e DB vérifiée | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
| R-E4i | 27/11/2026 | E4 audio/compositeur C.1–C.5 + reliquats E2§21.1 / E3§21.2 — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` · BUILD `NfeXL_KgIuqKGCdf0k4gh` · base `5f2ecad1` | Review Pack Full → `sfia/review-handoff` | C.1–C.5 · MP-06 DET · rail 1280×720 · multitype · ownership | **Cursor** E2/E3/E4 READY WITH RESERVES ; MP-06 LIVE / qualité FR → E5+recette ; NO RELEASE |

### E2 — lignes de couverture (2026-11-27)

| Capacité | Niveau E2 | Preuve | Reliquat |
| --- | --- | --- | --- |
| A.1 Allocation | RACCORDÉ DET + REL-01 | policy stamp ; **admit `qualified-v0.x` only** ; bare `qualified` rejected ; UNVERIFIED applied | Calibration réelle / choix adaptatif naturel → recette |
| A.2 Qualification | VÉRIFIÉ INSPECTION | pas de routeur lexical métier primary ; tests SEM existants | Qualification multi-langues naturelle → recette |
| A.3 Orchestration | RACCORDÉ DET + REL-02 + **FINAL-01** | early D4 séquentiel ; outcome par intentId ; FACT→ACQUIS ; PRIMARY acquis ; C02 multi-intent | Preuves naturelles multi-cap → recette ; D7 hors scope |
| A.4 Contexte / hybrid | RACCORDÉ DET + REL-03 | resume+projectId ; **hybrid PG path PASS** (fake embed) ; omit marker A.4 ; open_point FP aligné | Mesure T08 ; embedding LIVE fournisseur |
| A.5 Finalisation | RACCORDÉ DET | CONTINUE → OPEN / cause CONTINUE ≠ AWAIT_PILOT | Travaux OPEN naturels → recette |
| A.6 Observabilité | RACCORDÉ DET + REL-04 | billable hasObservations/hasData ; cartographie événements → pack E3 | Libellés activité E3 ; corrélation LIVE |
| A.7 FinOps | RACCORDÉ DET + REL-05 + **FINAL-03** | conflict work ids **avant** filtre projet ; effectiveFinOpsProjectId(+ForWork) | Coût facturé ; Admin OFF ; MP-06 audio interface only |

### E2-FINAL — sécurisation technique (2026-11-27)

| ID | Exigence | État | Validation | Preuve restante |
| --- | --- | --- | --- | --- |
| E2-FINAL-01 | Intégrité orchestration inter-cap | IMPLEMENTED + DET (PG) | e2-final-orchestration-c02 | Conversation naturelle multi-cap → recette |
| E2-FINAL-02 | Reconstitution C02 sans resultJson effets | IMPLEMENTED + DET (PG) | stash semanticQualification + unknown effect | Reprise utilisateur réelle → recette |
| E2-FINAL-03 | Cohérence attribution FinOps multi-vues | IMPLEMENTED + DET (PG) | e2-final-finops-attribution | Coût facturé ; Admin OFF |

### E2-REL — matrice complément (2026-11-27)

| ID | Exigence | État | Validation | Preuve restante |
| --- | --- | --- | --- | --- |
| E2-REL-01 | Admission versionnée | IMPLEMENTED + DET | ml5-cognitive-resources | Calibration LIVE → Morris GO |
| E2-REL-02 | Orchestration/reprise/finalisation | IMPLEMENTED + DET | mp09 + conductor A.5 + **Option B** unified conduction | Conversation naturelle multi-cap → recette |
| E2-REL-03 | Hybrid PG + efficience | IMPLEMENTED + DET (PG fake embed) | e2-hybrid-pg-path | Embedding LIVE ; pertinence cognitive → recette |
| E2-REL-04 | Observabilité E3 | DOCUMENTED + INSPECTION | cartographie pack | Surface E3 ; latences non instrumentées |
| E2-REL-05 | FinOps attribution | IMPLEMENTED + DET | FinOps projection + A.6 contract | Agrégats PG population ; Admin OFF |
| E2-REL-06 | Dossier/qualité | SYNCHRONIZED | delivery-history + registre | Revue ChatGPT ; gate Morris |

**MP mapping (OPEN RECETTE)** : MP-09→REL-02 ; MP-11→REL-04 ; MP-14→REL-03 ; MP-15→REL-01 ; MP-16→REL-05 ; MP-10 continuité interface ; MP-06 audio only.

### E1 — lignes de couverture (2026-11-27)

| Capacité | Niveau E1 | Preuve | Reliquat |
| --- | --- | --- | --- |
| B.1 Capitalisation sélective | RACCORDÉ DET | extractKnowledgeProposals + maybeCapitalize ; unit e1-b1 | Autonomie qualification LIVE |
| B.2 Arborescence | RACCORDÉ DET | same-turn parent/child PG ; reparent capitalisation+API ; **merge/split/detach via subjectOrganization** (E1-REL-01) | Pertinence cognitive naturelle → recette |
| B.3 Synthèses/acquis | EXISTANT+EXERCÉ | summarize/capitalize/supersede paths ; intégrité refs (E1-REL-02) | Consolidation CampusNova-like → recette |
| B.4 Points ouverts | RACCORDÉ DET | open/resolve PG ; **canonicalTitle** + shortTitle (E1-REL-04) | Accès UX E3 |
| B.5 Décisions durables | RACCORDÉ DET | e1-ensemble-b5-b6 PG (record/revise/revoke/négatifs) | Reconnaissance naturelle → recette |
| B.6 Trajectoire vivante | RACCORDÉ DET | propose/retain/open ; **forecastSteps conversationnel + RETAIN_VIS** (E1-REL-05) | Orientation naturelle → recette |
| B.7 Réutilisation | RACCORDÉ DET | PREFERRED + omit marker PG ; outils D4 exposés | Mesure T08 / hybrid embedding → E2+recette |
| B.8 Projections | RACCORDÉ DET | filterApplicableDecisions + library identity + shortTitle | DOM :3100 HTTP 500 tooling ; E3 multi-types |

### E1-REL — matrice complément (2026-11-27)

| ID | Exigence | État | Validation | Preuve restante |
| --- | --- | --- | --- | --- |
| E1-REL-01 | Réorganisation complète | IMPLEMENTED + DET PROVEN (merge) | e1-reliquats merge | Pertinence naturelle merge/split → recette |
| E1-REL-02 | Intégrité D4 | IMPLEMENTED + DET PROVEN | invalid id, conflict, fence | — |
| E1-REL-03 | Capitalisation réelle | IMPLEMENTED + VERIFIED BY INSPECTION | chaîne extract→D4 ; tests E1 | Conversation réelle → recette |
| E1-REL-04 | Titre point ouvert | IMPLEMENTED + DET PROVEN | canonicalTitle PG + unit | Affichage DOM → recette/E3 |
| E1-REL-05 | Trajectoire forecast+retain | IMPLEMENTED + DET PROVEN | forecast USER_MESSAGE ; RETAIN_VIS | Réorientation naturelle → recette |
| E1-REL-06 | D6 complémentaire | VERIFIED BY INSPECTION + DET antérieur | e1-ensemble-b5-b6 | Actes naturels T07 → recette |
| E1-REL-07 | Réutilisation D4 tools | VERIFIED BY INSPECTION + DET B.7 | tools exposés ; PREFERRED | Sélection naturelle → recette |
| E1-REL-08 | Projections | VERIFIED BY INSPECTION | counters/identity/shortTitle code | DOM DEV bloqué tooling |
| E1-REL-09 | Documentation | IMPLEMENTED | as-built + delivery + registre | Review Pack L3 |

Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.

## 6. Registre d'écarts, corrections, réserves et dette

| ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
|---|---|---|---|---|---|---|---|
| CF-01 | R-002 / ML5 | A01–A12, D01 | Nora ne prépare pas encore de contrat à partir d'une investigation et des sources effectivement qualifiées | MAJEUR | Packs → cycle 4 | bridge + tool-source-journal (CONSULTED from reads) ; fake count removed | LIVE multi-sources + BROWSER ; PARTIEL |
| CF-02 | R-002 / ML5 | A09, D02, D11 | READY dépend d'indications client (`sourcesSufficient`, `unknownRestrictions`) | BLOQUANT EFFET | Pack 2 → cycle 3 | `technical-contract-server-ready` + route `/ready` ; client flags ignorés | BROWSER + rights revoked still open ; REMEDIATED DEV / PARTIEL |
| CF-03 | R-002 / ML5 | E09–E10 | Chemin `AMBIGUOUS → DISPATCHED` potentiellement redéclenchable après ACK perdu | BLOQUANT LIVE | Pack 2 → cycle 3 | `priorSendMayHaveOccurred` + SQL fence ; PG T-04 PASS | LIVE SDK still open ; REMEDIATED DEV / PARTIEL |
| CF-04 | R-002 / ML5 | B01–B09 | Web B1 désactivé ; variable ISOLATION_PROVEN non équivalente à une barrière sûre | BLOQUANT B1 LIVE | Pack → cycle 4 | `public-web-search-frontier` query-only SCRIPTED + outbound log ; hosted tool détaché ; WEB LIVE gated | WEB LIVE Morris gate ; REMEDIATED DEV SCRIPTED / PARTIEL |
| CF-05 | R-002 / ML5 | C01–C08 | Activité annoncée/fin de tour, événements outil et reprise incomplètes | MAJEUR | Pack 2 | Cursor : observer outils D3, préserver C1 | BROWSER sas/projet pendant RUNNING/reconnexion ; OUVERT |
| CF-06 | R-002 / ML5 | D09–D10, H01–H08 | Travail 50/50, Exécution et Résultats distincts de Figma ; F2 absent | MAJEUR UX | Figma page 12 + pack 2 | Cursor : composants propriétaires, L1/L2, BROWSER F2 | 14 états qualifiés par frame/fixture ; OUVERT |
| CF-07 | R-002 / ML5 | E05–E08, E12/E15 | Supervision run long et SDK LIVE confiné non démontrés | BLOQUANT LIVE | Pack 2 / qualification C9 bornée | Cursor : prouver supervision/reprise, MCP seulement si requis | Browser fermé/crash/STOP, identités réelles ; OUVERT |
| CF-08 | R-002 / ML5 | F01–F09 | Publication Git Cursor et continuité non implémentées ; option A/B ouverte | GATE MORRIS | Pack 2 / R2 D9 | Morris : arbitrage A/B ; Cursor prépare blast radius | Permettre continuité par SHA sans privilège tacite ; OUVERT |
| CF-09 | R-002 / ML5 | G01–G11/G15 | Provenance client-déclarée, dossier et D8 pas réellement recoupés et révisables | MAJEUR | Pack 2 | Cursor : acquisition serveur / recoupement D9-D8 | PF-PRV contradictions/preuve tardive ; OUVERT |
| CF-10 | R-002 / ML5 | G12–G14 | Brief déterministe distinct du véritable avis Nora, absent | MAJEUR | Pack → cycle 4 | Classification corrigée (DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE) ; prompt D3 prêt | Run Nora D3 LIVE encore ouvert ; PARTIEL |
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

**État courant R-002 (d'après rapports, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.

**Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.

## 9. Observations UAT utilisateur DEV — Pilotage 360 (2026-11-24)

**Projet :** `proj_f89ee486-dd24-4def-a744-019e9e32828f` — *Pilotage 360* (DEV qualify `:3100`).
**Environnement :** DEV LIVE Nora. **Niveau de preuve :** BROWSER + observation Morris/ChatGPT (pas PASS de résolution).
**Décision de traitement :** capitalisées pour la poursuite en RECETTE ; **non déclarées résolues** dans ce cycle de mise à disposition.

| ID | Constat | État | Preuve / environnement |
|---|---|---|---|
| UAT-01 | Activité Nora LIVE absente dans le sas | OUVERT | DEV · observation Morris |
| UAT-02 | Affichage tardif du message du Pilote | OUVERT | DEV · observation Morris |
| UAT-03 | Métadonnées techniques acceptées en DEV seulement — **ne pas exposer en RECETTE/STABLE** | ACCEPTÉ (périmètre DEV) / **À CONFINER RECETTE** | DEV · arbitrage Morris |
| UAT-04 | Indicateur de chargement statique | OUVERT | DEV · observation Morris |
| UAT-05 | Icône d'information déformée | OUVERT | DEV · observation Morris |
| UAT-06 | Modale de création restant en attente alors que Nora a terminé | OUVERT | DEV · observation Morris |
| UAT-07 | Première recommandation automatique de trajectoire insuffisamment pertinente | OUVERT | DEV · Pilotage 360 |
| UAT-08 | Ancienne question à clarifier visible après création du projet | OUVERT | DEV · Pilotage 360 |
| UAT-09 | Activité LIVE générique / technique / éloignée de Figma | OUVERT | DEV · observation Morris |
| UAT-10 | Recommandation conversationnelle non traduite en proposition d'ouverture de cycle visible | OUVERT | DEV · Pilotage 360 · écart orientation≠ouverture (E07 déjà réservé) |

**Acquis observés (non-régression qualitative) :** quatre échanges cognitifs satisfaisants dans le sas ; clarification et proposition évolutive ; création explicite du projet ; historique du sas retrouvé dans Travail ; recommandation argumentée après relance ; capitalisation du contexte métier ; restitution fonctionnelle de l'activité encore partielle.

**Diagnostic trajectoire (hypothèse de travail, non verdict de correction) :** `BEHAVIOR DIFFERENCE — ROOT CAUSE NOT ESTABLISHED` possible combinaison CONFIGURATION GAP + HISTORICAL GAP (E07) ; à confirmer en RECETTE sans refonte cognitive dans le cycle de cutover.

## 10. Addendum — finalisation WEB + PDF (2026-11-26)

Addendum **append-only** ; n’altère pas les cycles ni verdicts antérieurs du registre.

| Sujet | Observation |
|---|---|
| PDF | Choix technique **`pdfjs-dist@4.x`** retenu pour extraction serveur + rendu visionneuse (`ml5-pdf-capability-choice-20261126.md`) ; compatibilité D4 future sous réserve bytes+provenance (`ml5-pdf-d4-compatibility-20261126.md`) ; **aucun** nouvel import path D4 dans ce lot |
| Politique cognitive | **v0.2** rendue explicite en construction (succession documentée de v0.1 provisoire) ; admission Terra catalogue WEB alignée `gpt-6.1-terra` — **sans** activation WEB LIVE |
| WEB | Outils **progressifs** HTML session + dossier gate **`ml5-web-gate-public-dossier-20261126.md`** ; **WEB LIVE=0** ; G-WEB-PUBLIC prêt pour **décision Morris** ; campagne LIVE bornée **proposée, non exécutée** |
