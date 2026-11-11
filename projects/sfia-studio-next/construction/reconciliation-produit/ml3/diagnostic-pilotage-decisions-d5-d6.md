# SFIA Studio Next — ML4B / ML3 : réconciliation D5/D6, cycles, décision et guidance CKI

**Nature :** analyse documentaire D1 non normative, sans nouvelle décision ni exécution. **Date :** 2026-11-11.
**Vérité de code consultée :** `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; branche documentaire `docs/next-reconciliation-produit-ml1-20261110` depuis cette base.
**Environnement local, DB active, navigateur, capture Figma et exécution LIVE actuelle : NON OBSERVÉS**. Les résultats de tests cités sont **historiques**.
**Verdict provisoire :** `ML3 136/136 R2 IDS INDEXED / CORE D5-D6 SOURCE IMPLEMENTED / TARGETED LIVE 8/8 + C03 / GENERAL E2E & F2-G5 NOT PROVEN / CP1 OPEN`.

[Retour à ML4B](../README.md) · [Contrat R5 ML3](../../ml3-pilotage-et-decisions/specification-technique.md) · [Matrice historique individualisée](../../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md) · [Sortie Morris du 07/11](../../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md).

## 1. Résultat Pilote et périmètre actuel

Le Pilote doit pouvoir discuter librement avec Nora, conserver une **trajectoire proposée distincte des faits**, ouvrir/clore/transiter un cycle **uniquement sous acte humain applicable**, prendre/réviser/suspendre une décision, et utiliser une guidance CKI **spécialisée, facultative et non autorisante**. Il ne doit pas perdre sa liberté de traiter un autre sujet ou rester sans cycle.

**IN ML3 :** D5 trajectoire, cycle réellement ACTIVE, méthode durable et CKI versionné ; D6 validité, révision, restrictions, journal des actes ; D3 intégration conversationnelle et UX R3 bornée. **OUT / interfaces :** création du projet D2, mémoire/sujets D4, exécution D7/contrat « Exécuter », preuve D8, mutations et droits Git D9, qualification R6. Les exigences R2 d'interface restent applicables mais ne sont pas déclarées implémentées par ML3.

Sources propriétaires : [D5 R2](../../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md), [D6 R2](../../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [R1 vision §2.29 et E2E04–E2E06](../../../cadrage/vision-produit.md), [CKI v0.2](../../../cki/README.md). Les 15 fiches CKI et la matrice de 50 relations sont des **guidances** ; aucune relation ne crée un workflow, un deuxième CKI actif, un GO, un gate ou un droit.

**Autorité :** D3 peut proposer et clarifier, pas décider ; D5 modifie les cycles/méthodes seulement après commande gouvernée ; D6 conserve l'acte humain et ses restrictions ; D7/D8/D9 contrôlent leurs propres effets. Une HumanDecision D6 dans l'application n'est **pas** la décision Morris de clôture de macro-lot.

## 2. Inventaire de traçabilité : 136 références individuelles

Ce tableau réutilise les **lignes exactes et numéros R2 de la [matrice ML3 préexistante](../../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md)**. L'indication « QA Bxx » est un **rattachement** entre une obligation et un test ; elle n'attribue **pas** automatiquement un PASS. `P/C/A/D/K/N` renvoient aux modules ci-dessous, `X` aux contrats d'autres domaines ; un module est un candidat d'implémentation, pas une preuve suffisante par RG/PF.

| Code | Fichier Git inspecté |
| --- | --- |
| `P` | [`web/src/domains/pilotage/service.ts`](../../../web/src/domains/pilotage/service.ts) |
| `C` | [`web/src/domains/pilotage/command-runner.ts`](../../../web/src/domains/pilotage/command-runner.ts) |
| `A` | [`web/src/domains/decisions/authority.ts`](../../../web/src/domains/decisions/authority.ts) |
| `D` | [`web/src/domains/decisions/service.ts`](../../../web/src/domains/decisions/service.ts) |
| `K` | [`web/src/domains/pilotage/cki-resolve.ts`](../../../web/src/domains/pilotage/cki-resolve.ts) |
| `N` | [`web/src/domains/pilotage/nora-context.ts`](../../../web/src/domains/pilotage/nora-context.ts) |
| `T` | [`web/src/domains/pilotage/conversation-authority.ts`](../../../web/src/domains/pilotage/conversation-authority.ts) |
| `R` | [`web/src/domains/decisions/divergence-assist.ts`](../../../web/src/domains/decisions/divergence-assist.ts) |

**Test sources :** [ML3 PostgreSQL](../../../web/tests/integration/ml3-pilotage.pg.test.ts) · [ML3 navigateur FAKE](../../../web/tests/e2e/ml3-pilotage.spec.ts) · [UNIT CKI/intent](../../../web/tests/unit/ml3-cki-intent.test.ts) · [UNIT restrictions](../../../web/tests/unit/ml3-authority.test.ts) · [UNIT divergence D6](../../../web/tests/unit/ml3-b13-divergence.test.ts) · [UNIT RCT02](../../../web/tests/unit/ml3-rct02-intent.test.ts).

### 2.1 Domaine D5 — RG-TRJ-001..040 (40/40)
| ID | Contrat historique abrégé | Capacité / propriétaire | Portée | UX R3 | QA associée | Code | Qualification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `RG-TRJ-001` | Trajectoire non préalable | CTX — identité/continuité | IN | — | B01 | `P/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-002` | Projection distincte des faits | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-003` | Orientation personnalisable | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-004` | Révision sans rétroactivité | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-005` | Dépendance réelle et justifiée | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-006` | Requalification proportionnée | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-007` | Références de continuité | TRAJ — trajectoire | IN | — | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-008` | Cycle actif unique | CYC — cycles et commandes | IN | — | B05 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-009` | Ouverture gouvernée | CYC — cycles et commandes | IN | — | B03 [R03] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-TRJ-010` | Type et résultat cohérents | CYC — cycles et commandes | IN | — | B03 [R03] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-TRJ-011` | Deuxième ouverture incompatible | CYC — cycles et commandes | IN | — | B05 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-012` | Clôture gouvernée et honnête | CYC — cycles et commandes | IN | — | B07 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-013` | Pas de gate de cycle automatique | CYC — cycles et commandes | IN | — | B08 [R03] | `P/C/A` | QA B08 non dédié : cognition LIVE à qualifier |
| `RG-TRJ-014` | GO combiné à effets distincts | CYC — cycles et commandes | IN | — | B07 [R03/R04] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-015` | État réel avant confirmation | CYC — cycles et commandes | IN | — | B06 [R03/R04] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-016` | Rejeu et concurrence | CYC — cycles et commandes | IN | — | B05/B06 [R03/R04] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-017` | Correspondance canonique | CKI — spécialisation Nora | IN | — | B11/B12 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-018` | Un seul CKI principal | CKI — spécialisation Nora | IN | — | B11 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-019` | Autonomie intrinsèque des CKI | CKI — spécialisation Nora | IN | — | B11 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-020` | Guidance à responsabilité bornée | CKI — spécialisation Nora | IN | — | B11/B12 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-021` | Version et provenance interprétables | CKI — spécialisation Nora | IN | — | B12 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-022` | Disponibilité non fictionnelle | CKI — spécialisation Nora | IN | — | B12 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-023` | Pas de sélection dynamique hors cycle | CKI — spécialisation Nora | IN | — | B01 [R01] | `K/N` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-024` | Évolution CKI sans effet rétroactif | CKI — spécialisation Nora | IN | — | B10 [R01] | `K/N` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-025` | Matrice purement informative | CKI — spécialisation Nora | IN | — | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-026` | Pertinence contextualisée | CKI — spécialisation Nora | IN | — | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-027` | Analyse transverse sans second CKI | CKI — spécialisation Nora | IN | — | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-028` | Matrice non exhaustive | CKI — spécialisation Nora | IN | — | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-029` | Différence transmission / preuve | CKI — spécialisation Nora | IN | — | B12 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-TRJ-030` | Maturité proactive non répétitive | MAT — maturité et progression | IN | — | B08 | `N/D` | QA B08 non dédié : cognition LIVE à qualifier |
| `RG-TRJ-031` | Unification de la guidance | MAT — maturité et progression | IN | — | B08 | `N/D` | QA B08 non dédié : cognition LIVE à qualifier |
| `RG-TRJ-032` | Clôturabilité argumentée | MAT — maturité et progression | IN | — | B08 | `N/D` | QA B08 non dédié : cognition LIVE à qualifier |
| `RG-TRJ-033` | Continuité sans mémoire parallèle | MAT — maturité et progression | IN | — | B18 | `N/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-034` | Reprise fidèle après interruption | MAT — maturité et progression | IN | — | B18 | `N/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-035` | Réserve/suspension non résolue | MAT — maturité et progression | IN | — | B14 | `N/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-036` | Visibilité proportionnée | MAT — maturité et progression | IN | — | B18 | `N/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-037` | État de méthode porté par le projet | METH — méthode projet | IN | — | B09 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-038` | Application d'un changement de méthode | METH — méthode projet | IN | — | B09/B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-039` | Requalification des cycles touchés | METH — méthode projet | IN | — | B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-TRJ-040` | Méthode et CKI sans autorité concurrente | METH — méthode projet | IN | — | B10/B12 [R02] | `P/D` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |

### 2.2 Domaine D6 — RG-GOV-001..037 (37/37)
| ID | Contrat historique abrégé | Capacité / propriétaire | Portée | UX R3 | QA associée | Code | Qualification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `RG-GOV-001` | Catégories non interchangeables | DEC — décisions et portée | IN | — | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-002` | Expression naturelle et suffisante | DEC — décisions et portée | IN | — | B03 [R03] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-003` | Auteur et projet compétents | DEC — décisions et portée | IN | — | B15 [R03] | `D/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-004` | Ambiguïté déterminante | DEC — décisions et portée | IN | — | B04 [R03] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-005` | Acte observé et source fiable | DEC — décisions et portée | IN | — | B04 [R03] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-006` | Refus de fausse formalisation | DEC — décisions et portée | IN | — | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-007` | Autorité non universelle | DEC — décisions et portée | IN | — | B15 | `D/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-008` | Pas de décision métier autonome de Nora | DEC — décisions et portée | IN | — | B03 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-009` | Référence durable d'un arbitrage structurant | DEC — décisions et portée | IN | — | B17 [R02] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-010` | Historique non réécrit | DEC — décisions et portée | IN | — | B17 [R02] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-011` | Révision gouvernée | DEC — décisions et portée | IN | — | B17 [R02] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-012` | Conflits d'autorité | DEC — décisions et portée | IN | — | B13 [R02/R03] | `D/A` | QA typé PG, divergence libre-texte PARTIAL |
| `RG-GOV-013` | Délimitation et propagation bornées | REST — restrictions/STOP | IN + INTERFACE | — | B16 | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-014` | Isolation des projets individuels | DEC — décisions et portée | IN | — | B15 [R03] | `D/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-015` | Contrainte supérieure applicable | REST — restrictions/STOP | IN + INTERFACE | — | B13/B16 | `A/D/C` | QA typé PG, divergence libre-texte PARTIAL |
| `RG-GOV-016` | Reprise sans autorité inventée | REST — restrictions/STOP | IN + INTERFACE | — | B14 [R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-017` | Suspension humaine durable | REST — restrictions/STOP | IN + INTERFACE | — | B14 [R02/R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-018` | Levée humaine contextualisée | REST — restrictions/STOP | IN + INTERFACE | — | B14 [R02] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-019` | Suspension humaine vs pause technique | REST — restrictions/STOP | IN + INTERFACE | — | B14 + D7 futur | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-020` | Interdiction des confirmations d'arrêt fictives | REST — restrictions/STOP | IN + INTERFACE | — | B14 + D7 futur [R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-021` | Changement significatif de besoin | REST — restrictions/STOP | IN + INTERFACE | — | B16 | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-022` | Révocation et opérations en cours | REST — restrictions/STOP | IN + INTERFACE | — | B16 + D7 futur [R02] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-023` | Proposition n'est pas permission | DEC — décisions et portée | IN | — | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-024` | Contrat inspecté et « Exécuter » | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-025` | Liaison au bon périmètre | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-026` | Requalification des changements matériels | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-027` | Vérification actuelle avant effet | REST — restrictions/STOP | INTERFACE | — | B16 + D7/D9 futur [R03] | `A/D/C` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-028` | Rejeu sans élargissement d'autorité | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver [R03] | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-029` | GO de cycle distinct du contrat technique | CYC — cycles et commandes | IN | — | B03/B07 [R03/R04] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `RG-GOV-030` | Création de projet à acte explicite propre | CTX — identité/continuité | INTERFACE | — | B01 + D2 existant | `P/C` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-031` | Acceptation humaine distincte de conformité | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-032` | Décision informée et résultat qualifié | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-033` | Correction sous nouveau mandat | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-034` | Méthode et CKI non autorisants | CKI — spécialisation Nora | IN | — | B12 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `RG-GOV-035` | Choix durable de méthode et autorité | METH — méthode projet | IN | — | B09/B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `RG-GOV-036` | Interdiction de fabriquer une adoption | BOUND — interfaces futures | INTERFACE | — | D7/D8/D9 à prouver | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `RG-GOV-037` | Choix documentaire non autorisant | DEC — décisions et portée | IN | — | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |

### 2.3 Domaine D5 — PF-TRJ-01..30 (30/30)
| ID | Parcours historique abrégé | Capacité / propriétaire | Portée | UX R3 | QA associée | Code | Qualification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `PF-TRJ-01` | Sas et projet sans cycle | CTX — identité/continuité | IN | 2,22,28 | B01 | `P/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-02` | Trajectoire suggérée sans ouverture | TRAJ — trajectoire | IN | 22,23 | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-03` | Début direct par l’architecture technique | CYC — cycles et commandes | IN | 22,50,61,51,57 | B03 | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-TRJ-04` | Ouverture autorisée par conversation | CYC — cycles et commandes | IN | 23,52,24,54 | B03 [R03] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-TRJ-05` | GO ambigu | CYC — cycles et commandes | IN | 41,23 | B04 [R03] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-TRJ-06` | Demande d’un second cycle simultané | CYC — cycles et commandes | IN | 26,24 | B05 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-07` | Digression sécurité pendant UX | CKI — spécialisation Nora | IN | 24,59,3 | B11 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-08` | CKI absent ou version non applicable | CKI — spécialisation Nora | IN | 39,58 | B12 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-09` | Relation Architecture vers DevOps | CKI — spécialisation Nora | IN | 51,59,3 | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-10` | Matrice silencieuse et facultative | CKI — spécialisation Nora | IN | 59,3 | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-11` | Transfert Conception vers UX | CKI — spécialisation Nora | IN | 22,59,3 | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-12` | QA révèle une contradiction fonctionnelle | CKI — spécialisation Nora | IN | 59,3,40 | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-13` | Maturité suffisante avec réserve reportable | MAT — maturité et progression | IN | 25,27,49 | B08 | `N/D` | QA B08 non dédié : cognition LIVE à qualifier |
| `PF-TRJ-14` | Maturité non démontrée | MAT — maturité et progression | IN | 44,25 | B08 | `N/D` | QA B08 non dédié : cognition LIVE à qualifier |
| `PF-TRJ-15` | Clôture avec GO effectif | CYC — cycles et commandes | IN | 25,53,27,54 | B07 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-16` | GO conjoint, effet partiel | CYC — cycles et commandes | IN | 42,49,47,57 | B07 / partiel conditionnel [R04] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-17` | Ouvertures concurrentes | CYC — cycles et commandes | IN | 26,56 | B05 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-18` | Rejeu d’un GO | CYC — cycles et commandes | IN | 52,56,24 | B06 [R03] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-19` | Reprise du même fil après interruption ou transition de cycle | CTX — identité/continuité | IN | 55,24,40 | B18 [R03] | `P/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-20` | Suspension du Pilote | REST — restrictions/STOP | IN | 33,25 | B14 [R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-21` | Nouvelle version CKI disponible | CKI — spécialisation Nora | IN | 48,58 | B10 [R01] | `K/N` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-22` | Changement de méthode projet | METH — méthode projet | IN | 60,32,46 | B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-23` | Réorientation et retour sans cycle forcé | TRAJ — trajectoire | IN | 59,3 | B02 | `P` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-24` | Interprojets et Git partagé | CTX — identité/continuité | IN | 11,12 | B15 [R03] | `P/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-25` | Pratiques transversales sans spécialité dédiée | CKI — spécialisation Nora | IN | 51,59,3 | B11 [R01] | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-26` | CKI guide un livrable non obligatoire | CKI — spécialisation Nora | IN | 58,3 | B11 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-TRJ-27` | État durable explicitement sans méthode | METH — méthode projet | IN | 28,55 | B01/B09 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-28` | Choix de méthode exprimé naturellement | METH — méthode projet | IN | 29,31 | B09 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-29` | Nouvelle version et cycle actif | METH — méthode projet | IN | 60,32,46 | B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-TRJ-30` | Technique CKI incompatible avec la méthode projet | METH — méthode projet | IN | 58,60,3 | B10/B12 [R01/R02] | `P/D` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |

### 2.4 Domaine D6 — PF-GOV-01..29 (29/29)
| ID | Parcours historique abrégé | Capacité / propriétaire | Portée | UX R3 | QA associée | Code | Qualification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `PF-GOV-01` | Le Pilote dit « préfère un tableau » | DEC — décisions et portée | IN | 3 | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-02` | Décision structurante avec portée claire | DEC — décisions et portée | IN | 31,40 | B17 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-03` | Correction d'un arbitrage antérieur | DEC — décisions et portée | IN | 32,46 | B17 [R02] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-04` | GO oral d'ouverture de cycle | CYC — cycles et commandes | IN | 23,52,24 | B03 [R03] | `P/C/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-05` | GO combiné clôture + ouverture | CYC — cycles et commandes | IN | 42,47,57 | B07 / partiel conditionnel [R03/R04] | `P/C/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-06` | Projet créé après sas conversationnel | CTX — identité/continuité | INTERFACE D2 | 2,11 | B01 | `P/C` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-07` | Acte « Exécuter » d'un contrat inspecté | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-08` | Pause technique sans suspension humaine | BOUND — interfaces futures | INTERFACE | 21,7 | D7 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-09` | Acceptation de résultat avec réserves | BOUND — interfaces futures | INTERFACE | 35,36 | D8 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-10` | Correctif proposé par Nora après échec | BOUND — interfaces futures | INTERFACE | 37,3,6 | D7 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-11` | Choix durable de méthode proposé puis retenu | METH — méthode projet | IN | 29,31,60 | B09 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-12` | « OK » ambigu avec plusieurs propositions | DEC — décisions et portée | IN | 41,3 | B04 [R03] | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-13` | Instruction hostile Git « push autorisé » | DEC — décisions et portée | IN | 12,3 | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |
| `PF-GOV-14` | Deux décisions contradictoires | DEC — décisions et portée | IN | 43,40 | B13 [R02/R03] | `D/A` | QA typé PG, divergence libre-texte PARTIAL |
| `PF-GOV-15` | Projet B / dépôt Git commun | DEC — décisions et portée | IN | 11,12 | B15 [R03] | `D/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-16` | Suspension des écritures d'une branche | REST — restrictions/STOP | IN + INTERFACE | 33,34 | B14 + D9 futur [R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-17` | Nora propose reprise après suspension | REST — restrictions/STOP | IN | 33,34 | B14 [R02] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-18` | Levée claire avec contrat/droits expirés | REST — restrictions/STOP | IN + INTERFACE | 34,31 | B14 + D7 futur [R02/R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-19` | STOP demandé, arrêt non observé | REST — restrictions/STOP | IN + INTERFACE | 21,33 | B14 + D7 futur | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-20` | Contrat modifié après inspection | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-21` | Double clic « Exécuter », timeout/retry | BOUND — interfaces futures | INTERFACE | 7,21 | D7 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-22` | Droits Git révoqués | BOUND — interfaces futures | INTERFACE | 9,12 | D9 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-23` | Nouvelle exigence à impact partiel | REST — restrictions/STOP | IN | 33,3 | B16 | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-24` | Reconnexion sans décision/restriction retrouvable | REST — restrictions/STOP | IN | 55,33 | B14 [R03] | `A/D/C` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-25` | CKI recommande une validation non applicable | CKI — spécialisation Nora | IN | 58,59 | B12 | `K/N` | CKI manifest/unit ; LIVE RESOLVED ≠ DELIVERED |
| `PF-GOV-26` | Résultat accepté non prouvé / adoption fictive | BOUND — interfaces futures | INTERFACE | 35,36,37,38 | D8/R6 futur | `X` | INTERFACE : preuve domaine propriétaire D2/D7/D8/D9 |
| `PF-GOV-27` | Document récent semble supplanter décision | METH — méthode projet | IN | 32,46,40 | B10 [R02] | `P/D` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-28` | Autre Pilote tente d'autoriser des effets | DEC — décisions et portée | IN | 11,12 | B15 | `D/A` | CODE SOURCE + QA HISTORIQUE CIBLÉE, PAS PASS INDIVIDUEL |
| `PF-GOV-29` | Brouillon apprécié sans GO ni validation | DEC — décisions et portée | IN | 4,18 | B04 | `D/A` | PG/FAKE + LIVE ciblé selon cas |

**Contrôle : 40+37+30+29=136/136 références R2 individualisées ; aucune RG/PF nouvelle introduite.** Les addenda ultérieurs sur l'autorité Git demeurent en **interface D6/D9** ; ils ne sont pas attribués implicitement au runtime ML3. Les historiques de cette source (« candidate / no test ») datent d'avant l'intégration : les codes et preuves ci-dessous les complètent **sans modifier l'historique source**.

## 3. Implémentation réelle — responsabilités et effets

| Chaîne | Source, responsabilité et preuve |
| --- | --- |
| **Trajectoire / cycles** | [`pilotage/service.ts`](../../../web/src/domains/pilotage/service.ts) porte `getPilotageProjection`, `PROPOSE_TRAJECTORY`, `RETAIN_TRAJECTORY`, `OPEN_CYCLE`, `CLOSE_CYCLE`, `TRANSITION_CYCLE` ; proposition non autorisante, un seul ACTIVE, fermeture/ouverture dans même transaction D5. |
| **Commande transactionnelle / replay** | [`command-runner.ts`](../../../web/src/domains/pilotage/command-runner.ts) valide owner Pilote/projet, verrouille `projects FOR UPDATE`, vérifie révision, fingerprint et sourceActionKey ; `APPLIED / ALREADY_APPLIED / REJECTED / CONFLICT / UNKNOWN` ; reconstruction par client key. B05/B06/B07 en PG historiques, sans crash/restauration totale LIVE. |
| **D6 / restrictions** | [`decisions/service.ts`](../../../web/src/domains/decisions/service.ts) insère les décisions et journal non destructif ; [`authority.ts`](../../../web/src/domains/decisions/authority.ts) contrôle restrictions actives au point d'effet, y compris source A et cible B des transitions ; levée distincte de pause technique D7. |
| **Conduite par Nora** | [`conversation-authority.ts`](../../../web/src/domains/pilotage/conversation-authority.ts), [`divergence-assist.ts`](../../../web/src/domains/decisions/divergence-assist.ts) : acte naturel qualifié, ambiguïté sans mutation, résolution REVISE sur **toutes** décisions APPLICABLE hors fenêtre cognitive ; [`nora-context.ts`](../../../web/src/domains/pilotage/nora-context.ts) transmet état courant, historique applicable et restrictions actives y compris absence. |
| **CKI** | [`cki-resolve.ts`](../../../web/src/domains/pilotage/cki-resolve.ts) lie type→fiche, version 0.2.0, manifeste/empreinte ; `ASSOCIATED` sans octets, `RESOLVED` sous digest approuvé, `UNAVAILABLE` en dérive, `DELIVERED` seulement lorsque les octets sont réellement joints à Nora ; absence de fallback. |
| **Méthode de projet** | [`pilotage/service.ts`](../../../web/src/domains/pilotage/service.ts) : `CHOOSE/REPLACE/WITHDRAW/REVOKE_BASE`, choix durable sous D6, version, méthode `ABSENT` possible, historique conservé ; CKI du cycle reste distinct de méthode de projet. |

## 4. Réconciliation des 18 oracles historiques B01–B18

Chaque oracle ci-dessous garde sa **preuve historique**, distincte d'une nouvelle exécution au SHA de base.

| QA | Résultat ciblé selon la matrice R5 et les sources code | Niveau de preuve disponible |
| --- | --- | --- |
| `B01` | Projet sans cycle ni méthode | **PG + FAKE** |
| `B02` | Trajectoire proposée puis retenue | **PG + UI** |
| `B03` | Ouverture explicite / GO conversationnel | **PG + FAKE ; T01 LIVE ciblé** |
| `B04` | Ambiguïté, fausse source, faux GO | **UNIT + PG ; T08 LIVE citation** |
| `B05` | Un cycle actif malgré concurrence | **PG** |
| `B06` | Idempotence, même acte, reconcile | **PG ; BROWSER FAKE ACK perdu** |
| `B07` | Transition CLOSE+OPEN atomique | **PG fault injection** |
| `B08` | Maturité cognitive et clôturabilité | **AUCUN TEST DÉDIÉ selon matrice R5** |
| `B09` | Choix/remplacement/retrait méthode | **PG** |
| `B10` | Pas de réépinglage / méthode / pin | **PG + UNIT ciblés** |
| `B11` | Un CKI principal, spécialité | **UNIT ; C03 LIVE spécialisé borné** |
| `B12` | Absence / digest / version de CKI | **UNIT ; C03 RESOLVED, DELIVERED non observé** |
| `B13` | Conflits/contradictions D6 | **UNIT + PG ; libre-texte matériel PARTIAL** |
| `B14` | Restrictions, levée, refus | **UNIT + PG ; T04/T05 LIVE ciblés** |
| `B15` | Isolation interprojets | **PG** |
| `B16` | Révocation et état de méthode | **PG** |
| `B17` | Journal RECORD/REVISE | **PG + BROWSER FAKE ; T02/T03 LIVE** |
| `B18` | Consultation sans effet, reprise | **PG + BROWSER FAKE ; T06 LIVE** |

**Contrôle important :** B08 (« maturité proactive non répétitive et clôturabilité ») **n'avait pas de test dédié** à la consolidation du 06/11. Le simple conseil produit par Nora ou une absence de clôture ne démontre pas que Nora propose le bon niveau de maturité au moment approprié, sans rituels ou portes artificielles. À rapprocher des scénarios `RG-TRJ-030..036`, `PF-TRJ-13..15/20`, et R1.

**B13 :** les contradictions typées et une confrontation message↔décision ont des tests UNIT/PG ; le conflit matériel libre-texte n'est pas universellement reconnu. La couche cognitive bornée à douze décisions n'est **pas utilisée comme limite de validité D6** : `selectAllApplicableBriefs` et les résolutions de cible consultent tout l'ensemble applicable ; cette séparation est un acquis, pas une dette à « corriger » par un second store.

**R-UX-01 :** l'appendice ML3 signale une **réserve historique de continuité cognitive pendant une tentative métier pendante**. Le code de reprise a évolué ; cette revue n'a pas reproduit le défaut en navigateur sur le HEAD présent. Le préserver comme **carried risk à requalifier**, pas comme régression définitivement active ni comme PASS.

## 5. Preuves LIVE et seuils honnêtes

**[RCT-02, candidat `61fe295b`](../../ml3-pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md)** : **8/8 PASS ciblés** (T01 ouverture CADRAGE ; T02 RECORD ; T03 REVISE ; T04 restriction ACTIVE préparée par cockpit ; T05 LIFT sans clôture ; T06 lecture à révision constante ; T07 CLOSE ; T08 citation non exécutoire). **T08 ne prouve pas le retrait explicite d'un GO en cours** ; il prouve la citation sans effet. C04/C05/C06 avaient échoué sur un précédent SHA, puis ont été corrigés et recettés sur ce candidat. L'historique de FAIL n'est pas une panne persistante établie.

**[C03 intercycles](../../ml3-pilotage-et-decisions/recette-cki-intercycles-live.md)** : nouveau cycle `CONCEPTION_FONCTIONNELLE ACTIVE`, révision 7/journal 7, CKI02 `RESOLVED` pin 0.2.0 ; Nora formule une démarche fonctionnelle adaptée et une seconde question **ne crée pas de décision implicite**. Cette preuve cible la spécialisation conversationnelle, **pas** la causalité d'injection `DELIVERED` : la disponibilité d'un pin et une réponse pertinente ne démontrent pas la livraison effective du texte CKI à la génération.

**Intégration Git :** [PR #661](https://github.com/mcleland147/sfia-workspace/pull/661) **MERGED** ; CI avant/après merge PASS selon [décision de sortie ML3](../../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md), migrations 007. Le SHA `61fe295b` et le build RCT-02 sont les preuves utilisateurs datées, non une nouvelle exécution sur `main@deba6ee4`.

## 6. Registre analytique de constats — sans correction et sans double comptage

| Référence | Qualification | Constat / impact Pilote | Sortie et propriétaire |
| --- | --- | --- | --- |
| **ML3-COV-01 — État et autorité D5/D6** | **IMPLEMENTED + PG + LIVE borné** | Cycle ACTIVE, décision persistante et restrictions réelles. **Pas de fail établi sur les scénarios T01–T08** ; ne pas réduire ML3 à une simple maquette. | Garder le contrat propriétaire D5/D6 ; négatifs globaux et redémarrage restent à qualifier R6. |
| **ML3-COV-02 — Qualité du pilotage/maturité** | **PROOF GAP / B08 NOT COVERED** | Le système sait enregistrer transitions et décisions ; on n'a pas démontré une **guidance proactive proportionnée** qui challenge maturité, réserve et clôturabilité sans formule rituelle. | D3↔D5 ; scénario LIVE contextualisé avec décision humaine toujours séparée, jamais clôture automatique. |
| **ML3-COV-03 — CKI livré vs disponible** | **BOUNDARY / OBSERVABILITY GAP** | Code garantit le pin/version `RESOLVED`; C03 a révélé une conduite spécialisée utile. `DELIVERED` **non attesté indépendamment** ; pas de comparaison sans CKI. | D5/D3 et observabilité ; corréler génération, ckiId, digest, injection effective et effet utilisateur si preuve forte exigée. |
| **ML3-COV-04 — Intentions en français** | **SOURCE IMPLEMENTED / COVERAGE BOUNDED** | RCT-02 a corrigé C04/C05/C06 et certains faux GO. Les règles de qualification utilisent des motifs linguistiques ; ni compréhension universelle ni absence de nouveaux faux positifs sous formulations adverses démontrée. | D3/D6 ; tests discriminants : citation, négation, retrait, GO partiel, autre projet, ambiguïté. |
| **ML3-COV-05 — Méthode et autorité externe** | **PG + PROOF GAP interface** | CHOOSE/REPLACE/WITHDRAW/REVOKE et restrictions D6 sont en code et tests PG. Un droit d'écriture Git, une acceptation de résultat ou un arrêt Cursor **ne sont pas des effets ML3** ; pas de couverture D7/D8/D9 REAL globale. | D6 avec D7/D8/D9 et ML4/ML5/R6 ; ne pas prétendre qu'une décision D6 suffit à exécuter. |
| **ML3-COV-06 — Continuité et résilience** | **HISTORICAL QA + PROOF GAP** | Les commandes sont transactionnelles et rejouables, B05–B07 PG et UI FAKE ; **ENV-01 cookie multi-lane, restauration PG, PG-DBFAIL-03** restent ouverts selon décision Morris. | D5/D6 + environnement ; restart serveur/restore réel, perte ACK et état UI au SHA cible. |
| **ML3-COV-07 — UX/Pilote** | **UI SOURCE / F2-G5 NOT RUN** | Surfaces Pilotage et Journal fonctionnelles dans les tests FAKE ; correspondance UX R3 et fidélité visuelle/comportementale, focus, erreurs, responsive et continuité des demandes longues **non comparées** aux captures Figma/runtime. | UX R3/ML4C et gate Morris ; paires même écran/état/viewport/SHA, sans déduire un taux de conformité du nombre de composants. |

**Non-duplication :** B13 libre-texte et mémoire pertinente se lient aux constats ML2 cognition ; frontières D6↔D9 au bilan ML4 ; reprise D1/ENV au bilan ML1. Les réserves ne deviennent pas des anomalies supplémentaires sans reproduction ni contradiction distincte.

## 7. Contrat de qualification pour la suite

Le scénario intégré pertinent est **une vie de projet D5/D6** : projet sans cycle → dialogue libre et proposition de trajectoire → GO humain naturel → cycle ACTIVE et CKI versionné → exploration et recommandation de maturité non autorisante → décision et révision humaine → suspension puis refus d'effet → levée explicite → transition atomique → reprise après interruption, lecture sans mutation, nouvelle spécialité CKI et maintien des points ouverts D4. Intégrer les négatifs B03/B04/B05/B06/B07/B08/B13/B14/B15 ; ne pas multiplier les campagnes ou micro-cycles par règle.

**Preuves de sortie fortes possibles :** DB/PG et projection de décision ; capture navigateur/UX au même SHA/lane ; transcript Nora LIVE sourcé, véritable indication de `DELIVERED` quand nécessaire ; QA sur ambiguïté, accès, reprise et non-mutation ; CKI variant selon cycle, sans dépendance artificielle, accord et mandat séparés.

**Décision déjà existante :** [Morris a clôturé ML3 au périmètre D5/D6+CKI, avec réserves le 07/11](../../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md). Ce diagnostic **n'ouvre pas cette décision**. Les réserves ENV-01, restauration PG, PG-DBFAIL-03, preuve `DELIVERED` et couverture globale subsistent. **CP1 n'est pas le gate de sortie historique ML3** : il s'agit du contrôle de réconciliation ML4B, toujours ouvert.

**Suite ML4B :** poursuivre la confrontation ML3 aux interfaces ML4 (source Git/provenance et actes D6), consolider les risques UX transverses puis examiner ML4 et les sept E2E. **Aucun nouveau GO de construction, PR, merge ou ADOPTED.**
