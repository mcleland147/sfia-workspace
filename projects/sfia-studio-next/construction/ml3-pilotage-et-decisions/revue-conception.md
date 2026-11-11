# SFIA Studio Next — Revue globale R5 / ML3 « Piloter et décider »
## Compte rendu documentaire D0 — v0.2, 2026-11-06

**Verdict :** `R01–R04 DESIGN RESOLVED AT D0 / SPECIFICATION v0.4 CANDIDATE / READY FOR MORRIS CONTENT REVIEW, NOT YET VALIDATED SPEC`.

**Git vérifié :** `mcleland147/sfia-workspace`, `main@ab18316b9c1e849ff557f4ba561c638e9961bb89`; branche documentaire `docs/next-pilotage-decisions-cadrage-20261105@d3e61571f17db0bea03ac3c879a504e6fa99a2ef`, +2 commits, -0 par rapport à `main`  ; v0.4 et annexes **publiées ensuite sur la branche documentaire** sur GO Morris du 2026-11-06 ; aucun merge sur `main`. Worktrees/staged et runtime : **NON OBSERVÉS**. `schemaRevision` main : `006_ml2_turn_owner_token`. D5/D6 : `N/A — NON IMPLÉMENTÉ`.

**Sources consultées depuis Git :** SEF v0.2 ; Roadmap Next ; ADR de sortie R4 ; R2 D5 v0.1 avec 40 RG/30 PF ; R2 D6 v0.1 et compléments avec 37 RG/29 PF ; R3 audit UX §7 et 59 liens PF ; R4 cadrage §5.5.1–5.5.8 et QA B01–B18 ; corpus CKI Next 15 spécialités v0.2.0 + matrice de 50 relations ; code Next Drizzle schema, `identity/session.ts`, `preparation/project-context.ts`, `conversation/service.ts`, `conversation/nora-adapter.ts`, `conversation/turn-command.ts`, migrations jusqu'à `006`. Sources publiées sur `main` et candidat distinguées.

## 1. Évaluation par dimension

| Dimension | Constat de revue | Qualification |
|---|---|---|
| Vision Pilote/Nora | Conduite réelle par GO naturel et même fil ; ni méthode ni cycle obligatoires | COMPATIBLE — design |
| R2 fonctionnel | 77 RG et 59 PF identifiés ; aucune modification normative de R2 | DOCUMENTARY MAPPED ; détails futurs séparés |
| R3 UX | 59/59 PF disposent de références d'écrans/transverses dans l'audit R3 | INVENTORY MAPPED ; Figma native/browser NON OBSERVÉS |
| R4 / responsabilités | Une base PG, D5 vérité des cycles, D6 actes humains ; aucune autorité Nora/CKI parallèle | COMPATIBLE AU NIVEAU DESIGN |
| R5 ML1/ML2 | Session/Pilote et projet possédé disponibles ; même fil D3, D4 ; pas de D5/D6 | BLAST RADIUS QUALIFIÉ ; régression à tester |
| CKI/méthode | Distinction claire et disponibilité vérifiable ; politique d'épinglage et d'indisponibilité détaillée en R01 ; validation Morris en attente | PROPOSITION CONVERGENTE, NON DÉCIDÉE |
| Concurrent/idempotent | Verrou projet + clé commande + index ACTIVE + atomicité interne | CONTRAT CANDIDAT ; tests DB obligatoires |
| Sécurité / vie privée | Source USER attestée, isolation interprojets, restrictions au point d'effet ; conservation minimisée | RISQUES IDENTIFIÉS, PREUVES ABSENTES |
| QA | B01–B18 reliés par capacités ; scénario PF-TRJ-16 qualifié conditionnel | TESTS NON EXÉCUTÉS |
| D7/D8/D9 | Contrats d'autorité conservés, aucune exécution/preuve/Git simulée | FRONTIÈRES PRÉSERVÉES |

## 2. Écarts et points de décision

### Réserves R01–R04 traitées par solutions techniques candidates, sans adoption anticipée

| ID | Traitement proposé et décision opérationnelle | Verdict de conception | Validation et preuve restant nécessaires |
|---|---|---|---|
| **R01** | Spécialité CKI toujours associée au cycle actif ; version/digest épinglés seulement si contenu approuvé et disponible lors du GO ; si absent, pas de pin, cycle ouvert sans guidance fictive ; retour de l'identique permis ; nouveau pin/migration en cours de cycle seulement sur acte explicite ; manifeste immuable distribué hors lookup GitHub par génération | **TRAITÉ D0** — contrat détaillé spec v0.4 §8 bis R01 | Approbation de contenu Morris ; tests de versions, digest, absence, restauration, adversarial et LIVE. |
| **R02** | Distinction `CHOOSE`, `REPLACE`, `WITHDRAW`, `SUSPEND_USE`, `LIFT`, `REVOKE_BASE_DECISION` ; révocation de la décision fondatrice *courante* entraîne retrait D5→`ABSENT` dans la même transaction, sauf nouveau choix explicite ; jamais retour automatique à une version antérieure | **TRAITÉ D0** — contrat détaillé spec v0.4 §8 bis R02 | Approbation Morris ; cas d'ambiguïté/portée, deux décisions conflictuelles, reprise et UI. |
| **R03** | Verrou ligne `projects` commun aux mutations D5/D6, révision projet et clés idempotentes distinctes de D3 ; double barrière `clientCommandKey` et source humaine/intention ; unicité partielle ACTIVE et FKs tenant ; un commit D6+CLOSE+OPEN+effets ; réponse perdue `UNKNOWN` puis réconciliation | **TRAITÉ D0** — contrat détaillé spec v0.4 §8 bis R03 | Approbation Morris ; DDL final, migration 006→suite, tests PG à deux connexions, failpoints, auth et sessions révoquées. |
| **R04** | `PF-TRJ-16/PF-GOV-05` : transition interne A→B **atomique**, effets inspectables séparément mais jamais `PARTIAL` ; rollback total si B échoue, `UNKNOWN` si ACK perdu ; écran R3 #42 et `PARTIAL` réservés à des effets réellement séparés futurs | **CHOIX MORRIS ACQUIS / TRAITÉ D0** | Tester l'inaccessibilité de `PARTIAL`/#42 en ML3 et la double confirmation après commit ; scénario positif futur seulement si vraie frontière externe. |

**Conclusion R01–R04 :** les quatre lacunes de formulation technique sont désormais **traitées dans une proposition consolidée**. Elles ne justifient plus une nouvelle exploration séparée avant revue Morris. Ce GO de traitement n'est toutefois pas une validation D2 de ces nouveaux détails techniques, ni une permission Git ou Cursor. Le choix R04 d'atomicité était déjà arbitré par Morris ; R01–R03 restent à valider globalement avec la v0.4.

### Réserves d'intégration et de preuve à porter par le macro-lot

**R05 — Nora et origine des GO.** Code ML2 actuel ne crée pas de HumanDecision ; il faut relier D3 source message et D6 commande métier sans coupler le GO au résultat LLM, sans dédoubler l'idempotence du tour. Les sources de connaissances, citations, CKI, résumés et API DTO ne sont pas des actes humains. B03/B04/B06/B18.

**R06 — UX/Figma et accessibilité.** Les 59 liens R3 sont documentaires. Revue native ciblée et captures runtime indispensables sur les écrans B décisifs, états UNKNOWN et refus, clavier/focus/reflow/320–390 px, non duplication des actions. B03..B18. Les fragments partagés D7/D8/D9 ne doivent pas être montrés comme fonctionnels.

**R07 — Sécurité et DATA-01.** Politique d'accès/historique pour les décisions et restrictions, provenance minimisée, export/suppression légale, traitement des traces techniques, restauration et invariants après redémarrage ; pas de leakage interprojets ni de token Git transféré. Adapter tests auth DEV/RECETTE aux réserves de ML1/ML2.

**R08 — QA exhaustif sans inflation.** 136 références source liées une par une aux capacités dans l'annexe ; cela ne prescrit **pas 136 tests indépendants**. Les oracles B01..B18 constituent un socle R4 à décliner en assertions et combinaisons utiles ; un scénario de test peut vérifier plusieurs RG/PF. Les références d'implémentation, preuves, SHA et lane restent vides jusqu'à construction.

**R09 — Cohérence des références historiques Git.** `roadmap.md` sur `main` présente encore #659 ouverte/draft malgré l'intégration ML2 vérifiée antérieurement. Conserver `KNOWN GAP`; une mise à jour normative Roadmap exige un mandat séparé, pas une correction opportuniste de ML3.

## 3. Risques d'architecture évités par le candidat

- Pas de deuxième base de données ni moteur général d'autorité, de workflow, de méthode ou de CKI.
- Pas de changement d'état de cycle depuis un texte Nora, un résumé D4, la publication d'un CKI ou une navigation UX.
- Pas de cycle `SUSPENDED` créé simplement parce que D6 stocke une restriction.
- Pas de transfert de compétence depuis un dépôt Git commun ; projet individuel et Pilote authentifié.
- Pas d'appel fournisseur ou Git dans la transaction PostgreSQL interne.
- Pas de conformité/STOP réel/ADOPTED déduits de l'acceptation humaine ou d'une trace.
- Pas de « dernière version » appliquée par défaut ; références méthodologiques distinctes des contenus CKI.

## 4. Preuve attendue et gates

**Avant validation globale Morris :** relire puis valider explicitement les solutions proposées R01–R03 et confirmer leur insertion dans la spécification v0.4 ; constater R04 déjà arbitré ; vérifier l'annexe 136/136 et ses frontières `INTERFACE`. Aucune approbation tacite du seul fait de demander le traitement des réserves. La validation de la conception ne signifie ni APPROVED MIGRATION ni résultat prouvé.

**Avant un prompt Cursor :** re-pré-check Git/branche/baseline ; lire la version **Git courante** du routing `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et du template `prompts/templates/sfia-cycle-execution-template.md` ; disposer du contrat ML3 validé et d'un GO D3 distinct ; borner chemins, tests, STOP, rapport et handoff SFIA v2.6.

**Pendant construction ML3 :** données + services D5/D6 + raccord D3/D4 + UX Figma lot B + tests unitaires/integration PG/concurrence + tests navigateur + Nora LIVE ciblé + observabilité et architecture CURRENT/documentation synchronisées **dans le même macro-lot**. Tester la restauration/reprise, l'idempotence, la restriction et l'isolation interprojets, pas seulement les réponses de modèle.

**Après construction :** Review Pack/Handoff applicable ; contrôle de SHA et CI/ENV-01, RECETTE sous protocole Morris, réserves et exit. PR/merge, STABLE, R6, ADOPTED ont leurs gates distincts et ne sont pas déduits d'un GO de préparation.

## 5. Verdict

**`STUDIO NEXT ML3 — D0 SPEC v0.4 CONSOLIDATED / R01–R04 DESIGN SOLUTIONS DOCUMENTED / 136/136 DOCUMENTARY MAPPED / MORRIS CONTENT VALIDATION PENDING / CODE N/A / TESTS NOT EXECUTED / GIT CANDIDATE PUBLISHED / NO MAIN MERGE`**.

**Périmètre de ce travail :** aucune écriture distante, PR, merge, suppression de branche, Cursor, migration ou exploitation de runtime. Les fichiers livrés sont des candidats locaux destinés à la validation de contenu Morris. Les détails SQL, les interfaces et les statuts de preuve sont des propositions, pas des migrations ou des API exécutées.


## 6. Contrôles ciblés de sortie de la revue v0.2

- **R01** : un CKI `VALIDATED CONTENT` côté Git n'est pas présumé embarqué ni `DELIVERED` dans le build déployé ; distinguer même pin restauré, nouvelle version non adoptée et première association explicite si pin initial nul.
- **R02** : le choix méthodologique courant D5 est une conséquence vérifiable d'une décision fondatrice D6 ; sa révocation courante et la fin d'applicabilité sont atomiques ; suspension d'usage conserve la référence sans créer d'état de cycle concurrent.
- **R03** : une idempotence de clé client ne suffit pas si une source humaine identique est rejouée avec une autre clé ; relecture des préconditions après verrou projet, couplée à contrainte d'unicité et à un résultat durable. Les permissions externes non sérialisées constituent une limite explicite, non une propriété magique du verrou.
- **R04** : `UNKNOWN` après une réponse perdue ne dit rien sur une éventuelle moitié de transaction. La réconciliation prouve les deux effets ou le rollback ; l'écran UX #42 ne doit jamais être activé par une panne PG interne simulée.

**Gates après cette revue :** (1) validation **du contenu complet v0.4** par Morris, dont R01–R03 ; (2) publication documentaire candidate autorisée par Morris le 2026-11-06 et réalisée sur la branche existante ; (3) contrat Cursor SFIA v2.6 depuis Git sous GO D3 distinct, puis construction/QA/RECETTE ; (4) PR/merge/STABLE/R6/ADOPTED sous gates séparés. Seul le gate de publication documentaire sur branche est consommé ; PR, merge, Cursor et promotion restent distincts.