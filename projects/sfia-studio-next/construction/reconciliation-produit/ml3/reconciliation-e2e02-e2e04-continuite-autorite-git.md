# SFIA Studio Next — ML4B / ML3 : continuité Pilote–Nora, E2E02/E2E04 et autorité vers Git

**Date :** 2026-11-11. **Nature :** diagnostic documentaire D1 / ML4B, aucune modification Product.
**Référence applicative vérifiée :** main @ deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4. **Branche documentaire :** docs/next-reconciliation-produit-ml1-20261110.
**Frontière d'observation :** code et sources Git consultés ; aucun test, navigateur, runtime, session, Figma ou RECETTE exécuté pendant ce diagnostic. Les résultats « LIVE » ci-dessous sont ceux de la recette **historique du 07/11**, sur le SHA et la lane déclarés, non une recette relancée.

[Diagnostic individuel D5/D6](diagnostic-pilotage-decisions-d5-d6.md) · [Index ML4B](../README.md) · [Décision Morris ML3](../../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md) · [Matrice ML3](../../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md).

## 1. Contrat de capacité et frontières

**Résultat utilisateur visé :** dans **un seul fil continu par projet**, le Pilote avance avec Nora, même sans cycle ; elle propose une trajectoire non autorisante, le Pilote peut émettre un GO réel ou une décision durable, Studio applique seulement les effets autorisés et les restitue fidèlement ; après interruption, la même conversation retrouve décisions, cycles, restrictions, connaissances et points ouverts sans inventer d'état ni bloquer la pensée indépendante.

- **R1 E2E02 — conduire le projet, sa trajectoire et ses cycles** : [vision §2.31](../../../cadrage/vision-produit.md) ; propriétaire **D5**, autorité **D6**, conduite **D3**, mémoire **D4**.
- **R1 E2E04 — mémoire vivante, décisions et continuité** : [vision §2.33](../../../cadrage/vision-produit.md) ; D3/D4/D5/D6 et un fil unique ; les échanges et sessions successifs ne créent pas plusieurs chats indépendants.
- **R1 E2E05/E2E07 — effets techniques et Git** : [vision §§2.34 et 2.36](../../../cadrage/vision-produit.md) ; accès Git **D9**, préparation/dispatch **D7**, vérification **D8**, autorité **D6**, jamais confondus avec un GO de cycle ou une préférence.
- **R2** : [D5 — trajectoire, cycles, CKI](../../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md), [D6 — décisions, mandats et restrictions](../../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md). Les **136 RG/PF propriétaires** sont déjà cartographiés individuellement dans le [diagnostic ML3](diagnostic-pilotage-decisions-d5-d6.md) ; le présent document suit **l'enchaînement**, sans redoubler chaque ligne.
- **R5 et décision de sortie** : [spécification/as-built ML3](../../ml3-pilotage-et-decisions/specification-technique.md), [RCT-02 8/8](../../ml3-pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md), [C03 intercycles](../../ml3-pilotage-et-decisions/recette-cki-intercycles-live.md). **ML3 fermé avec réserves par Morris** ; le gate ML4B/CP1 est distinct et ouvert.

**IN ici :** orchestration de conversation, commandes D5/D6, effet réconcilié, état Nora, continuité et état UX, guidance CKI et jonction d'autorité D6/D9. **OUT :** implémenter/rejouer la totalité des opérations Git ML4, réception D8, exécution technique Cursor ML5, comparaison Figma/runtime, adoption.

## 2. Flux source réellement assemblé

| Moment | Product propriétaire / fichier inspecté | Contrat réellement présent | Limite de preuve |
| --- | --- | --- | --- |
| 1. Fil, identité, sas | [D3 conversation/service.ts](../../../web/src/domains/conversation/service.ts) et [getPreparationContext](../../../web/src/domains/preparation/project-context.ts) | Preparation et projet reliés au Pilote ; fil conservé, clientTurnKey et réserve de tour | Code ; session multi-appareil et restore non rejoués |
| 2. Acte utilisateur persisté | [D3 turn-command.ts](../../../web/src/domains/conversation/turn-command.ts) | Reserve de tour ; identité clientTurnKey ; propriétaire du tour avec lease/fencing ; même key refuse payload divergent | PG historiques, pas nouveau crash/restart |
| 3. Qualification de l'acte | [D5 conversation-authority.ts](../../../web/src/domains/pilotage/conversation-authority.ts), [intent.ts](../../../web/src/domains/pilotage/intent.ts) | La commande D5/D6 se fonde sur message USER durable ; ambiguïté/énoncé exploratoire ≠ GO ; REVISE désigne la cible applicable | Motifs de langage ciblés, pas compréhension linguistique exhaustive |
| 4. Autorité et transaction | [D5 command-runner.ts](../../../web/src/domains/pilotage/command-runner.ts), [D6 authority.ts](../../../web/src/domains/decisions/authority.ts) | Verrou du projet, version, clé/fingerprint, acte unique, restrictions actives au point d'effet ; rejet sans décision fictive | B03–B07/B14 PG historiques ; concurrence LIVE non généralisée |
| 5. Enregistrer l'effet | [D5 service.ts](../../../web/src/domains/pilotage/service.ts), [D6 service.ts](../../../web/src/domains/decisions/service.ts) | Trajectoire, OPEN/CLOSE/TRANSITION, méthodes et révisions ; historique HumanDecision ; transition interne CLOSE+OPEN **atomique**, pas de PARTIAL interne | Tests PG et LIVE T01–T08 ciblés |
| 6. Reconstruire la vérité pour Nora | [D3 conversation/service.ts](../../../web/src/domains/conversation/service.ts) et [D5 nora-context.ts](../../../web/src/domains/pilotage/nora-context.ts) | **Effet métier avant appel fournisseur** ; après commit D6, projection réactualisée ; restrictions actives y compris « aucune », décisions applicables | PG C02 prouve effet D6 malgré échec Nora sur fail injecté |
| 7. Livrer guidance CKI | [D5 cki-resolve.ts](../../../web/src/domains/pilotage/cki-resolve.ts) + [nora-context.ts](../../../web/src/domains/pilotage/nora-context.ts) | Résolution du pin par manifest/digest et **texte limité à 4 000 caractères** joint au contexte lorsque vérifié ; état DELIVERED distinct de RESOLVED | C03 montre spécialisation LIVE ; trace corrélée d'injection non fournie |
| 8. Générer et restituer | [D3 nora-adapter.ts](../../../web/src/domains/conversation/nora-adapter.ts), [conversation/service.ts](../../../web/src/domains/conversation/service.ts) | Outils D4/Git read, statut d'exécution fournisseur, synthèse de l'effet D6, réponse persistée lorsque propriété du tour confirmée | Vérité immédiate sous perte de propriété : voir ML3-X-02 |
| 9. Conserver/retrouver le journal | [D6 service.ts](../../../web/src/domains/decisions/service.ts) et [PilotagePanel.tsx](../../../web/src/components/PilotagePanel.tsx) | Journal de décisions historiques (APPLICABLE/REVISED/...) ; projection réelle, pas un second journal autorisant | PG + browser FAKE ; UX Figma non comparée |
| 10. Gérer ACK perdu et reprise | [D3 turn-command.ts](../../../web/src/domains/conversation/turn-command.ts), [D5 conversation-authority.ts](../../../web/src/domains/pilotage/conversation-authority.ts), [page projet](../../../web/src/app/projects/[projectId]/page.tsx) | Reconciliation par clientCommandKey/sourceRef, relecture D5/D6, pas de nouvelle autorisation ni double OPEN à la même clé | BROWSER FAKE / PG ; disponibilité cognitive pendant l'attente limitée |
| 11. Préparer l'effet externe Git | [D7 effect-service.ts](../../../web/src/domains/execution/effect-service.ts) et [D9 resource-service.ts](../../../web/src/domains/integrations/resource-service.ts) | Ressource Git rattachée et autorisée, document/version/diff/HEAD inspectés ; **rattachement ou lecture ≠ mandat de mutation** | ML4 et E2E07 propriétaires ; pas de dispatch LIVE lancé ici |
| 12. Autoriser puis contrôler au moment de l'effet | [D7 effect-service.ts](../../../web/src/domains/execution/effect-service.ts), [D6/D9 effect-authority.ts](../../../web/src/domains/execution/effect-authority.ts) | Deux actes distincts : GIT_PUBLICATION_MANDATE et GIT_MERGE_MANDATE ; relecture identité Pilote/projet, décision applicable, empreinte, restriction, installation, compte, droits, rattachement | Code vérifié ; ML4 RECETTE globale non acceptée ; aucune adoption |

**Invariants source :** les commandes D5/D6 sont persistées **avant** Nora ; leur état ne dépend pas de son succès. Une ouverture et une clôture sous commande TRANSITION_CYCLE se font en **une transaction interne PG**, contrairement à une opération distribuée potentiellement partielle. Le même projet garde **au plus un ACTIVE**. Une option de trajectoire ou un conseil CKI ne déclenche pas d'effet D6/D7/D9.

## 3. Confrontation aux deux parcours R1 — 12 étapes

Les six étapes de chaque E2E sont extraites de la [vision R1](../../../cadrage/vision-produit.md). La colonne « statut » indique la preuve **pour cette étape**, pas un certificat de scénario LIVE intégral.

| Étape | Contrat Pilote R1 | Implémentation / preuve identifiée | Statut de réconciliation |
| --- | --- | --- | --- |
| **02-1** | Projet sans cycle : Nora utile et contexte repris | D3+ D4 en projet, D5 ABSENT explicite ; PG B01 | **SOURCE MAPPED / qualité LIVE sans cycle non prouvée globalement** |
| **02-2** | Nora propose une trajectoire sans ouvrir | D5 PROPOSE_TRAJECTORY ≠ RETAIN ; B02 PG | **CODE+PG HISTORIQUES**, pertinence des propositions non évaluée |
| **02-3** | GO naturel et clair → OPEN_CYCLE appliqué | USER_MESSAGE → D5 D6 ; B03/F01 PG, T01 LIVE | **BEHAVIOR PROVEN ciblé** |
| **02-4** | Cycle ACTIVE + CKI principal et digressions libres | D5 un ACTIVE, CKI pin/digest, C03 conversationnel | **BEHAVIOR PROVEN partiel** ; DELIVERED et digressions longues non certifiés |
| **02-5** | Nora challenge maturité et réorientation sans changer l'autorité | Projection, signaux B13, cognition Nora | **PROOF GAP B08** : initiative/pertinence et clôturabilité non démontrées |
| **02-6** | Clôture et suite sous GO humain, effets honnêtes | T07 CLOSE LIVE ; B07 PG transaction CLOSE+OPEN, rollback | **PARTIAL** : GO conjoint FULL LIVE, reprise réseau et PARTIAL externe non prouvés |
| **04-1** | Explorer sujet et contexte dans le fil | D3 fil durable, D4 sélecteur | **ML2 CODE/PG ; qualité cognitive longue ouverte** |
| **04-2** | Capitaliser avec discernement | D4 sujets/acquis/points ouverts, création/révision | **ML2 ciblé**, pertinence de capitalisation implicite non démontrée |
| **04-3** | Enregistrer le vrai arbitrage humain | D6 HumanDecision, T02 RECORD ; T03 REVISE | **BEHAVIOR PROVEN ciblé** |
| **04-4** | Reprendre plus tard / autre cycle avec état applicable | D3 liste messages + D4 + D5 projection + C03 intercycles | **PARTIAL LIVE ciblé**, reprise après session/interruption non complète |
| **04-5** | Confronter nouvelle source et décisions précédentes, sans acte fictif | B13 niveau A et source Git read, décisions applicables | **SOURCE+PG partiels**, contradiction matérielle libre-texte non prouvée |
| **04-6** | Réviser sans effacer et sans autorité implicite | D6 REVISE : REVISED/APPLICABLE + relecture ; T03 LIVE | **BEHAVIOR PROVEN ciblé**, suivi transversal D4 et long terme incomplet |

Les **12/12 étapes sont rapprochées**. Elles ne sont **pas 12/12 PASS LIVE** : elles représentent 12 contrats identifiés, dont certaines preuves partielles/manquantes. C03 n'est pas une preuve causale que les octets CKI ont été livrés ; T08 prouve une citation non exécutoire, pas tous les retraits de GO. La RECETTE historique ML3 **8/8 PASS** reste valable **sur son périmètre**. CI pré/post-merge #661 rapportée PASS, sans réexécution.

## 4. Exceptions discriminantes et vérité des reprises

| Exception / cas à conserver | Constat de code et preuve | Qualification |
| --- | --- | --- |
| GO ambigu, négation, citation, source hostile | D5 intent/conversation-authority ; refus sans HumanDecision ; T08 LIVE et tests RCT02 ciblés | **CIBLÉ / NLP NON EXHAUSTIF** |
| Deux cycles actifs ou commandes concurrentes | Verrou projet + index PG ; B05 ; source A/cible B restrictions | **PG HISTORIQUE / LIVE CONCURRENCE NON GÉNÉRALISÉE** |
| Même clientTurnKey, ACK perdu, rejeu | D3 turn-command + D5 command-runner ; replay/fingerprint, B06, CR-02 FAKE | **SOURCE + FAKE/PG HISTORIQUES** |
| D6 appliqué, fournisseur Nora indisponible | Service appelle applyConversationalAuthority avant generate ; C02 fault PG reconstitue | **PG EXCEPTION C02 PROUVÉE**, pas tous les états de perte de propriété |
| Restriction appliquée puis levée | D6 authority point-of-effect et journal ; T04/T05 LIVE, B14 PG | **BEHAVIOR PROVEN ciblé** |
| CKI inexistant / digest modifié | cki-resolve ASSOCIATED/UNAVAILABLE et zéro auto-pin | **UNIT / PG SOURCÉS**, causalité cognitive LIVE non prouvée |
| Changement de cycle et mémoire ancienne | C03 LIVE : CONCEPTION_FONCTIONNELLE, pin 0.2.0, revision 7 ; D4 ne retrouve qu'un sujet | **LIVE CIBLÉ**, sélectivité et exhaustivité D4 ouvertes |
| Contradiction D6 libre-texte | Niveau A confronte message/décision ; niveau B typé ; résolution REVISE sur toutes les applicables | **PG PARTIAL**, pas moteur sémantique universel |
| Restriction D6 et nouvel effet Git | effect-authority relit mandat, projet, droits, restrictions et fingerprint | **SOURCE IMPLEMENTED**, aucune généralisation de conformité ML4 |
| Arrêt/expiration des droits au milieu d'une tentative Git | Effect-service point-of-effect recheck, claim/fencing | **COVERAGE À CONSOLIDER EN ML4/R6** ; pas de test LIVE nouvellement observé |

## 5. Findings source-backed : contradictions et limites d'expérience

### ML3-X-01 — Travail cognitif indépendant bloqué par un pending métier

**Type : KNOWN GAP / CODE CONFIRMED / priorité produit à arbitrer.** Le [thread-recovery.ts](../../../web/src/domains/pilotage/thread-recovery.ts) refuse tout contenu différent pendant une tentative non résolue. La [page projet](../../../web/src/app/projects/[projectId]/page.tsx), fonction sendMessage, applique le contrôle **avant toute qualification du nouveau message** et remet même le brouillon au texte de la tentative. Le [composant NoraConversation](../../../web/src/components/figma/NoraConversation.tsx) présente « réconcilier avant un nouveau tour ».

**Effet déductible du code :** une simple question cognitive sans effet (« explique notre choix ») peut être bloquée si une précédente commande est pending. C'est précisément la **réserve R-UX-01 NON CONFORME** déjà portée par l'[historique ML3](../../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md). Aucun comportement LIVE nouveau n'a été reproduit pendant cette revue. **Exit souhaitable :** conserver l'identité et le fencing de l'acte pendante sans bloquer les messages cognitifs sûrs ou écraser leur brouillon, dans un même lot de continuité.

### ML3-X-02 — Perte de propriété après génération : effet D6 non restitué immédiatement

**Type : CHEMIN DE CODE CONTRADICTOIRE / CONDITIONNEL / NON REPRODUIT.** Dans [D3 conversation/service.ts](../../../web/src/domains/conversation/service.ts), le service a potentiellement **déjà appliqué** une HumanDecision D6 avant l'appel Nora. Si la propriété du tour est perdue **après** génération, le retour UNKNOWN de la branche OWNERSHIP_LOST_AFTER_GENERATE contient **humanDecisionCreated: false** et **aucun pilotageEffect**, au lieu de réconcilier l'état métier durable.

Ceci ne démontre **ni une perte de décision dans PostgreSQL, ni une double mutation** : une reprise sur la même clé peut reconstruire l'effet via [reconstituteConversationalAuthority](../../../web/src/domains/pilotage/conversation-authority.ts). La [suite PG C02](../../../web/tests/integration/ml3-pilotage.pg.test.ts) couvre l'**exception fournisseur avant Nora**, qui retourne fidèlement la décision, **pas** ce chemin distinct de perte de propriété après génération. **Exit :** test discriminant combinant D6 APPLIED + perte réelle de propriété à cette frontière + réponse et replay cohérents, avant de qualifier une correction.

### ML3-X-03 — Réconciliation du métier ≠ restitution de la réponse Nora

**Type : UX/CONTINUITÉ / SOURCE CODE VERIFIED / LIVE NOT RUN.** Dans [page projet, reconcilePending](../../../web/src/app/projects/[projectId]/page.tsx), le GET de commande **par clé** avec statut autre que UNKNOWN efface le pending et actualise la projection durable. Il ne relance pas et ne relit pas systématiquement la réponse Nora du tour ; la branche de retry conversation n'est utilisée que lorsque la commande par clé n'est pas récupérable.

**Effet possible :** la décision D6 est retrouvée, mais la **continuation cognitive** qu'attendait le Pilote peut rester inconnue sans récit spécifique, puis l'écran peut permettre un nouveau message. À tester sur scénario fournisseur UNKNOWN + commande APPLIED et sur perte d'ACK. **Ne pas assimiler correction de l'effet D6 et retour complet de Nora.** La séparation des deux niveaux est utile, mais doit rester intelligible.

### ML3-X-04 — Rejouement d'autorisation merge et currentness

**Type : FRONTIÈRE ML4 / RISQUE DE RESTITUTION, non mutation bypass démontré.** Dans [D7 authorizeMerge](../../../web/src/domains/execution/effect-service.ts), une tentative de merge **déjà non PREPARED** retourne son statut/decisionId en réponse idempotente sans revérifier dans cette branche la currentness de HumanDecision ; [authorizePublication](../../../web/src/domains/execution/effect-service.ts) contrôle explicitement la décision APPLICABLE pour certains statuts déjà avancés. Il existe une asymétrie de restitution susceptible de montrer un ancien **AUTHORIZED** alors que la décision est révoquée.

**Protection importante :** [assertCurrentGitAuthority](../../../web/src/domains/execution/effect-authority.ts) est invoqué au **point d'effet** et refuse une décision non APPLICABLE, une restriction, un changement d'identité/empreinte ou des droits insuffisants. La présente inspection **ne démontre pas de merge non autorisé**. **Exit :** test ML4 « décision révoquée après authorize, nouvel authorize idempotent, dispatch refusé, messages UX exacts ». Ne pas dupliquer le moteur D6.

### ML3-X-05 — Qualité cognitive, maturation et CKI

**Type : PROOF GAP déjà inventorié** dans [le diagnostic individuel ML3](diagnostic-pilotage-decisions-d5-d6.md) : B08 sans oracle dédié ; C03 spécialité pertinente mais pas DELIVERED observé indépendamment ; rappels D4 pertinents entre sessions/cycles non prouvés globalement. **Ne pas créer trois anomalies nouvelles ni revalider rétroactivement la recette.**

### ML3-X-06 — Sources Git affichées dans le fil

**Type : CANDIDAT UX TRANSVERSAL ML3/ML4, non verdict LIVE.** L'[encadré « Objets du projet » de la page projet](../../../web/src/app/projects/[projectId]/page.tsx) affiche statiquement « Sources Git — non disponible » alors que [D9 resource-service.ts](../../../web/src/domains/integrations/resource-service.ts) et l'API Git possèdent une liste de sources rattachées. Cela ne prouve pas que **l'accès Git** échoue (des surfaces distinctes existent), mais signale une **projection conversationnelle non raccordée** à requalifier lorsque le dépôt est réellement lié. Voir l'analyse ML4.

## 6. Impact, criticité et dépendances — proposition pour arbitrage, pas décision

| Priorité d'investigation candidate | Pourquoi maintenant | Propriétaire de sortie |
| --- | --- | --- |
| **Élevée : ML3-X-01 / ML3-X-03** | Continuité et autonomie cognitive du Pilote pendant ACK/UNKNOWN ; risque direct sur l'usage quotidien | D3/D5/D6 + UX, même lot de correction si Morris valide |
| **Élevée conditionnelle : ML3-X-02** | Vérité immédiate après D6 APPLIED si génération perdue ; aucune perte de DB établie | D3/D5/D6, test adversarial au bon SHA |
| **Moyenne : ML3-X-04** | Cohérence des réponses idempotentes et du statut d'autorisation Git | D6/D7/D9, revue ML4 avec contrôle au point d'effet |
| **Moyenne : ML3-X-06** | Transparence sur les sources Git réellement disponibles dans le fil | UX/D9, examen en convergence |
| **Qualité stratégique : ML3-X-05** | Maturité, proactivité et mémoire adaptée forment la valeur produit Nora | ML2/ML3 ensemble, preuve R6/ML4C, sans nouveaux moteurs |

**Blast radius à préparer avant toute implémentation :** API messages/pilotage/commands/by-key, clientTurnKey/sessionStorage, lease et recovery D3, HumanDecision & restrictions D6, UI NoraConversation/PilotagePanel, traces d'observabilité, accès Git D9 et tests PG/FAKE/LIVE. Pour X-04, les conditions d'effet D7, la révocation D6 et la projection de statut du merge doivent être inspectées conjointement.

**Dette / exit :** préserver les décisions Morris déjà fermées ; passer de « code + test ciblé » à « scénario utilisateur avec fail et reprise », avec résultats réels horodatés/versionnés. ENV-01 cookies, restauration PostgreSQL et PG-DBFAIL-03 restent des réserves indépendantes et gouvernées, non « corrigées » par ce diagnostic.

## 7. Gate, résultat et suite

**Verdict documentaire :** \`E2E02 6/6 STEPS MAPPED + E2E04 6/6 STEPS MAPPED / D5-D6 CORE IMPLEMENTED / TARGETED LIVE ML3 8/8 + C03 / 4 PRIMARY CROSS-FLOW FINDINGS + 2 QUALIFIED TRANSVERSE / NO COMPLETE CONTINUITY LIVE / NO F2-G5 / CP1 OPEN\`.

La sortie Morris **ML3 CLOSED WITH CARRIED RESERVES** demeure intacte. Ce document n'en déduit ni **COVERAGE VERIFIED** sur chaque RG/PF, ni **BEHAVIOR PROVEN** complet pour E2E02/E2E04, ni merge Git conforme globalement, ni ADOPTED.

**Suite rationnelle :** consolider ces écarts avec la recette ML4 (Git D9, publication, merge, effets D7/D8 et vérité de Nora), puis construire la synthèse transverse CP1/gate B. La convergence ML4C devra considérer un **parcours cohérent d'expérience**, pas un micro-correctif isolé par case du tableau. Aucun GO de code, Figma, PR, merge ou R6 ici.
