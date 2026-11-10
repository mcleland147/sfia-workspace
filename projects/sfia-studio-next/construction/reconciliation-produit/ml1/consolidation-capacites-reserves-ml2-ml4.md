# ML4B — Consolidation ML1 : capacités, réserves et acquis ML2–ML4

**Type :** diagnostic documentaire non normatif, sans décision produit. **Date :** 2026-11-10.
**Code de référence :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4`. **Branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
**État :** `DOCUMENTED / CODE INSPECTED / HISTORICAL EVIDENCE RECONCILED / NO LIVE END-TO-END RE-RUN / F2-G5 NOT RUN / CP1 OPEN`. Local, DB et navigateur : **NON OBSERVÉS**.

[Diagnostic général ML1](diagnostic-acces-preparation-creation.md) · [D1 : 55 références](verification-detaillee-acces-portefeuille.md) · [D2 : 60 références](verification-detaillee-sas-creation-continuite.md) · [E2E01 / D3-D4](reconciliation-e2e01-nora-connaissance.md) · [Index ML4B](../README.md).

## 1. Objet et règles de lecture

**Question :** pour chaque capacité ML1, qu'avait-on prévu, qu'a-t-on réellement livré, qu'a-t-on ensuite renforcé dans ML2/ML3/ML4, et quel écart ou plafond de preuve subsiste ?

**Contrat fondateur :** [R1 E2E01 §2.30](../../../cadrage/vision-produit.md) = identité personnelle → portefeuille → sas récupérable, libre et utile avec Nora → proposition non autorisante → création par acte explicite → même fil et documents dans le projet → poursuite sans cycle ni Git imposés.

**Preuves et autorité, sans effacer les snapshots historiques :**
- [ML1 QA A01–A16 §§7–8](../../ml1-entree-et-continuite/matrice-tracabilite.md), [as-built §15](../../ml1-entree-et-continuite/specification-technique.md) : ML1 **CLOSED WITH CARRIED RESERVES** Morris, PR [#649](https://github.com/mcleland147/sfia-workspace/pull/649) mergée. Les verdicts historiques restent ce qu'ils étaient.
- [ML2 traçabilité §§7, 20–21](../../ml2-production-et-capitalisation-nora/matrice-tracabilite.md) et [Roadmap](../../../governance/roadmap.md) : PG/FAKE, D4, cognition LIVE bornée ; RECETTE Morris 9/9 acceptée **avec réserves**, PR [#659](https://github.com/mcleland147/sfia-workspace/pull/659) intégrée, **pas** de nouvelle clôture formelle ML2 déduite.
- [ML3 tracabilité §§as-built/C03](../../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md), [décision Morris](../../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md) : D5/D6, CKI, RECETTE LIVE ciblée et réserves ; PR [#661](https://github.com/mcleland147/sfia-workspace/pull/661) intégrée.
- [ML4 registre de RECETTE §§1, 10–11](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md), [matrice d'acceptation](../../ml4-integration-git/matrice-acceptation.md) : observations utilisateur R01–R12 et rejeu G1 ; PR [#672](https://github.com/mcleland147/sfia-workspace/pull/672) mergée, **RECETTE globale non acceptée**, R13/R14 NOT RUN.
- [As-built G4](../../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md) : **19/20 transpositions déclarées, 1 partielle**, mais **F2/G5 NOT RUN** ; aucun pourcentage de conformité visuelle certifié.

**Conventions :** `IMPLEMENTED` constate du code ; `COVERAGE VERIFIED` exige un test pertinent exécuté ; `BEHAVIOR PROVEN` exige le comportement réellement observé au SHA/lane ; `ADOPTED` relève d'un gate séparé. Une preuve d'intégration PG ou de navigateur FAKE n'est pas une RECETTE LIVE. Les identifiants de capacité ML1 sont conservés comme **repères historiques de traçabilité**, sans nommer de nouveaux composants par lot.

## 2. Huit capacités de ML1, contrat → réalisation → évolution → écart

| Capacité et propriétaire | Fonctionnalité contractuelle | Code réellement présent et apports ultérieurs | Preuve pertinente et limite / verdict |
| --- | --- | --- | --- |
| **ML1-IDENTITY · D1** | OAuth Studio GitHub, PilotId, session, isolation, refus croisé ; session Studio n'autorise pas Git/D6 | [`auth.ts`](../../../web/src/lib/auth.ts), [`session.ts`](../../../web/src/domains/identity/session.ts), provision Pilote ; ML2 ajoute un cookie **adaptateur DEV par lane** ; ML4 ajoute OAuth GitHub App, distinct de l'identité Studio | OAuth LIVE ML1 borné + PG/FAKE Pilot B ; ML4 R09 logout/relogin PASS ciblé. `D1-GAP-04/05` : classification d'échec Better Auth et badge « Connecté » non fondé sur session. Isolation Better Auth multi-lane/expiration en effet **pas certifiée**. **IMPLEMENTED + PROOF PARTIAL** |
| **ML1-PORTFOLIO · D1** | Voir ses vrais projets, leur état exact, naviguer sans fuite ni Nora globale | [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts), [`portfolio/page.tsx`](../../../web/src/app/portfolio/page.tsx) ; G4 apporte cartes et liste de préparations OPEN via pagination keyset **25 préparations/page** | PG/FAKE historique et R01/R09 ML4 montrent portefeuille/reprise ; `D1-GAP-01` **contradiction de code** : état projet calculé par index ; `D1-GAP-03` risque de message exception brut. Figma inconclusif. **IMPLEMENTED + KNOWN GAP** |
| **ML1-SAS-ENTRY · D1/D2** | Ouvrir/reprendre le sas avant création, revenir sans créer projet/cycle/Git | [`preparation/service.ts`](../../../web/src/domains/preparation/service.ts), [`portfolio.ts`](../../../web/src/domains/identity/portfolio.ts) ; G4 A1 reprend via GET sans POST ; rail de reprise | A01/A14 PG/FAKE ; ML4 R01 utilisateur exerce le sas. Session expirée et interruption entre insertions non éprouvées ; `D2-GAP-04` : préparation et conversation insérées hors transaction commune. **NOMINAL SOURCE + PROOF BOUNDED** |
| **ML1-SAS-DURABLE · D2/D4** | Messages et premier document conservés, même identité et version après création | [`document/service.ts`](../../../web/src/domains/document/service.ts), [`knowledge/service.ts`](../../../web/src/domains/knowledge/service.ts) ; ML2 versions, révision D4, Sujets/Acquis/Points ouverts et reconstitution des effets ; ML4 R06/R12 travaux documentaires | A08/A09 PG ; ML2 C1–C6 et ML4 v1/v2 `AVAILABLE` observés dans des cas bornés. **Mais** narration Nora contredit parfois le résultat D4 ; rejeu ML4 G1 `REC-08 REVISE` FAIL malgré ACK `AVAILABLE`. Redémarrage/restore A16 non prouvé. **PERSISTENCE PROVEN BOUNDED / RESTITUTION GAP OBSERVED** |
| **ML1-NORA-PREVIEW · D2/D3/D4** | Dialogue autonome et utile avant projet, clarification proportionnée, proposition non autorisante | [`nora-adapter.ts`](../../../web/src/domains/conversation/nora-adapter.ts), [`conversation/service.ts`](../../../web/src/domains/conversation/service.ts), [`PreparationProposal.tsx`](../../../web/src/components/figma/PreparationProposal.tsx). ML2 ajoute lecture D4/mission ; ML4 R01-C/D/E donne exemples LIVE ciblés | A02 LIVE borné et trois échanges ML4 R01 jugés utiles ; **R01-F révèle formulaire à remplir, copie longue du dernier message Nora, Markdown brut et « aucun point ouvert » malgré incertitudes** : `ML4-REC-01/02/03`. `D2-GAP-03` mise à jour concurrente de proposition potentiellement perdue. **COGNITION BOUNDED / UX-D4 GAP** |
| **ML1-CREATE · D2** | Clic explicite, propriétaire, unique transaction, idempotence, pas de cycle/Git induit | [`create-project.ts`](../../../web/src/domains/preparation/create-project.ts) : lock PG/fingerprint/CAS/rattachement atomique ; [`create-project/route.ts`](../../../web/src/app/api/preparations/[preparationId]/create-project/route.ts) ; ML2 C3 durcit retry/fingerprint, ML4 R01-G valide le clic en RECETTE | A03/A04/A06/A12 PG/FAKE et R01-G PASS utilisateur ; **A05 PARTIAL** : replay PG ≠ ACK perdu + navigateur. `D2-GAP-01` : exception non-auth présentée 401 ; `D2-GAP-02` : UI `createProject()` sans `/reconcile` ni `catch/finally` réseau. **TRANSACTION PRESENTE / REPRISE UI GAP** |
| **ML1-CONTINUITY · D2/D3/D4** | Projet réellement créé, même fil, documents/provenance, Nora récupère contexte utile dans le temps | [`project-context.ts`](../../../web/src/domains/preparation/project-context.ts) retrouve préparation/messages/docs/connaissance ; ML2 récupération `selectRelevantKnowledgeContext` et lectures D4 ciblées ; ML3/4 prennent en charge autorité et mission composite | A07 PG/FAKE, ML4 R01-G/R09 même fil et reprise RECETTE ; A13 seulement **partiellement relevé** par ML2 Q19/Q20 PG/FAKE et outils LIVE bornés. Sélection `lexical-heuristic` et pertinence longue non démontrée ; projet créé ≠ mission D2→D4 terminée. **FIL DURABLE OBSERVÉ / COGNITION PARTIAL** |
| **ML1-BOUNDARY · D1/D2 avec D5/D6/D9** | Aucune décision, suppression/transfert, cycle, CKI, Git, mandat ou exécution déduite d'un conseil ou d'un clic de création | Owner checks D1/D2 ; ML3 crée les vrais propriétaires de cycles/décisions/CKI ; ML4 ajoute lecture Git et préparation D7 séparées, facultatives | A10 PG/FAKE ; A15 **PARTIAL**. ML3 RCT-02 8/8 LIVE ciblé ; ML4 R01 sans Git, R08 refus cognitif, mais **refus serveur mutatif, injection hostile et révocation Git non prouvés globalement**. A11 reste OUT ML1, propriétaire ML4. **BOUNDARY CODE + NEGATIVE E2E INCOMPLETE** |

**Conclusion intermédiaire :** ML1 est un premier vertical fonctionnel réellement livré et recetté avec réserves, mais **la cohérence technique, cognitive, UX et de résilience complète n'est pas démontrée par simple addition des PASS des lots suivants**. L'absence de preuve n'est pas automatiquement une défaillance fonctionnelle ; un écart d'état affiché sans source ou une contradiction ACK/Nora peut en revanche être établi plus précisément.

## 3. Toutes les réserves QA A01–A16 et DATA-01 face aux apports ML2–ML4

| QA | Verdict ML1 historique | Évolution vérifiée ou observée ultérieurement | Qualification aujourd'hui |
| --- | --- | --- | --- |
| **A01** | PASS PG+FAKE | G4 reprise GET ; ML4 R01 sas exercé | Nominal renforcé ; interruption/crash distinct |
| **A02** | PASS LIVE borné | ML4 R01-C/D/E pertinent sur trois échanges ; ML2 tools D4 | LIVE ciblé, pas autonomie/qualité globale |
| **A03** | PASS PG+FAKE | R01-G création par geste explicite | Nominal utilisateur renforcé |
| **A04** | PASS PG concurrent | ML2 C3 PG/FAKE : fingerprint/cross-prep/retry | Concurrence DB mieux couverte |
| **A05** | **PARTIAL** | ML2 C3 PG/BROWSER document/clé stable ; API reconcile D2 présente | **RESTE PARTIAL :** crash + ACK perdu + reprise UI création non prouvés |
| **A06** | PASS conflit de révision | Create CAS ; ML2 CAS révision **document** | `updatePreview` CAS concurrent demeure question séparée |
| **A07** | PASS PG+FAKE | ML4 R01-G/R09 retrouve le même fil | Renforcé par RECETTE utilisateur |
| **A08** | PASS PG | ML2 documentaire ; ML4 création/révision D4 AVAILABLE | Identité et version renforcées ; narration Nora à part |
| **A09** | PASS panne persistance PG | ML2 états D4 ; ML4 échecs et effets mixtes RECETTE | Erreurs D4 testées, vérité conversationnelle encore réservée |
| **A10** | PASS PG+FAKE A/B | ML2 isolement PG ; ML4 R09 session | Pas exhaustif pour mêmes dépôts Git / multi-lanes |
| **A11** | **OUT ML1** | ML4 lecture/rattachement Git, R02–R04 et G1 | OUT maintenu, **révocation réelle D9 NOT RUN** |
| **A12** | PASS PG homonymes | ID distincts maintenus en code | Acquis historique, aucun test au HEAD repris ici |
| **A13** | **PARTIAL / NOT RUN** | ML2 Q19/Q20 PG+FAKE et D4 tools LIVE bornés | **PARTIAL UPLIFT :** pertinence cognitive E2E LIVE non prouvée |
| **A14** | PASS PG+FAKE | G4 UX et ML4 R01-G/R09 reprise réelle | Nominal renforcé ; statuts D1 encore non sourcés |
| **A15** | **PARTIAL** | ML3 D5/D6 LIVE ciblé ; ML4 R01 sans Git, R08 refus Nora | **PARTIAL :** effets protégés/négatifs D5–D9 non éprouvés entièrement |
| **A16** | **PARTIAL** | ML2 SAFE-01 abort client, ML4 R09 reconnexion | **PARTIAL :** restart/restore PostgreSQL réel non démontré |

**DATA-01** (restore backup) reste **OUT du contrat nominal ML1**, sous gate ENV-01/R6 ; ne pas convertir un simple retour de session en preuve de restauration.

## 4. Réserves ENV, CI, UX : requalification actualisée

| Réserve | Ce qui a changé depuis la clôture ML1 | Exit restant et précaution |
| --- | --- | --- |
| **A — cookies DEV/RECETTE** | [`session.ts`](../../../web/src/domains/identity/session.ts) produit un cookie d'adaptateur DEV suffixé par lane et refuse son usage hors DEV ; test déterministe ML2. ML4 R09 démontre déconnexion/reconnexion même Pilote. | **Mitigation réelle**, mais Better Auth possède sa propre configuration/cookies ; pas de certification d'absence de collision cross-lane au runtime. La Roadmap ML3 reporte ENV-01 A avant STABLE. |
| **B — CI Next auparavant non exécutée** | `.github/workflows/sfia-studio-next-ci.yml` exécute désormais build/unit/PG/Playwright ; CI #659 et #661 SUCCESS consignées dans la Roadmap. | **Défaut historique de CI Next substantiellement résolu** ; vérifier la CI à chaque nouveau SHA/PR et éviter de compter les tests `SKIPPED` comme oracles réussis (`PG-DBFAIL-03`). Ne pas confondre CI avec R6. |
| **A05 / transport** | Idempotence DB/retry consolidés ; backend `reconcileCreateProject` existe. | Manque de traitement complet côté écran du sas après perte ACK/timeout. |
| **A13 / connaissance** | ML2 étend Acquis, Sujets, points, révisions, recherche D4 ; PG+FAKE et quelques lectures LIVE. | Capitalisation et sélection lexicales ≠ pertinence sémantique autonome prouvée ; conserver tests de rappel reformulé/contradictoire. |
| **A15 / effets** | D5/D6 puis Git/D9 existent après ML1. | Les tests négatifs deviennent plus exigeants : faux GO, accès retiré, instruction hostile, projet B, effet après interruption. |
| **A16 / restauration** | Tests de contention et abort client/SAFE-01, sans restore indépendant observé. | Restauration DB et reprise après vraie déconnexion restent à qualifier au gate de promotion/R6. |
| **Figma / Markdown / streaming** | G4 19/20 frames **déclarées transposées** ; SafeMarkdown et tentative de streaming agentique. ML4 R01 relève des écarts UX importants. | **F2/G5 NOT RUN**, UI progressive du streaming non prouvée ; comparer chaque écran/état au Figma natif et à la capture browser au même SHA, lane, données, viewport ; aucun 95 % visuel déclaré. |
| **Driver / version de schéma** | R5 ML1 as-built qualifie `postgres-js` ; CI ML3 a migré 001→007. | Ancienne description de driver ne crée pas un bug ; `schemaRevision` doit être jugé par son effet réel avant une correction. |

## 5. Constat structurant issu de la RECETTE ML4 : parole Nora ≠ résultat D4

Le [registre ML4 §11](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) établit au rejeu G1 un effet **D4 REVISE `AVAILABLE`** alors que Nora affirme ne pas pouvoir attester ou faire l'enregistrement. **C'est une contradiction utilisateur réellement observée**, pas un défaut démontré du stockage de document. `ML4-REC-08` reste ouvert ; l'intention explicitement qualifiée CREATE peut également être prise pour REVISE selon les cas.

L'hypothèse d'un problème de séquencement « génération Nora → effet D4 → restitution de l'ACK » est **à analyser**, pas une cause racine prouvée. La bonne frontière produit est : **demande Pilote → qualification → éventuel effet gouverné → confirmation par le propriétaire → réponse finale fidèle**. Les impacts ML1 sont la confiance dans la continuité et dans l'état des ressources ; propriétaire principal D3/D4 avec D8 pour la preuve. Ne pas créer une seconde anomalie concurrente de `ML4-REC-08`, ni modifier l'architecture sans gate.

Autres faits RECETTE ML4 R01 : la préparation et la création sont réellement utilisables sans Git ; l'écran de proposition demeure trop proche d'un formulaire, reprend un texte Nora trop long et ne capitalise pas les points ouverts attendus. Ces constats dépassent la simple transposition de composants : **qualité de la préparation et valeur cognitive réellement perçue**. La décision de convergence ML4C appartient à Morris.

## 6. Paquets de preuves intégrés à instruire, pas de micro-cycles

| Chaîne de résultat utilisateur | Oracles discriminants | Preuve forte nécessaire / dépendance |
| --- | --- | --- |
| **S'identifier et reprendre son espace** | Session Studio, refus tiers, cookies de lane, statut portefeuille honnête ; D1 A10/A14 | OAuth LIVE et BROWSER + API/PG, injection 500/503, contrôle secrets / expiration / liens profonds ; pas de statut fictif |
| **Préparer et reprendre le sas** | A01/A05/A16, D2-GAP-03/04, E2E01 interruptions | Double PATCH, fail entre deux INSERT, commit/ACK perdu, refresh sans duplication, droits courants, restauration vraie distincte |
| **Travailler utilement avec Nora** | A02/A13, RG-CONV/CTX et RG-KNOW pertinents, ML4-REC-03 | Scénario LIVE d'analyse structurante avec question implicite, acquis ancien hors fenêtre, points ouverts et source/version réelle ; jugement Pilote |
| **Créer, continuer et finir une intention composée** | A03–A09, D2→D4, ML4-REC-08 | PG/BROWSER/LIVE sur même fil et document, ACK vrai, erreur honnête et reprise de la mission restante sans faux succès |
| **Ne pas outrepasser l'autorité** | A11 OUT ML1, A15, D5/D6/D9 | Négatif d'effet, même dépôt/projet tiers, révocation, instruction hostile ; Git REAL seulement sous autorisation distincte |
| **Retrouver le parcours visuel attendu** | R3 : portefeuille, sas, proposition, succès, projet, erreurs et reprise | Capture Figma native + navigateur runtime au SHA/lane/viewport/état/données identiques ; mesure et gate Morris F2/G5 |

**Exit analytique provisoire ML1 :** huit capacités et A01–A16 réconciliés avec les changements de propriétaire ML2–ML4. Les lacunes sont cataloguées et liées aux sources. Il ne s'agit pas de `COVERAGE VERIFIED` complet, d'un verdict R6, d'une acceptation ML4 ni d'un GO de correction ML4C.

**Suite recommandée :** après capitalisation de cette consolidation, poursuivre **ML2** au même degré de détail (capacités R5 puis RG/PF D3/D4 et preuves LIVE/REAL), puis ML3/ML4 et synthèse transverse. Gate Morris B seulement une fois le diagnostic ML4B suffisamment exhaustif, sans micro-PR par constat ni érosion des réserves.
