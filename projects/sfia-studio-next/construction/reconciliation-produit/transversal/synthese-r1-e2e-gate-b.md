# SFIA Studio Next — ML4B : synthèse transverse des sept parcours R1 et options pour le gate B

**Date :** 2026-11-11. **Nature :** dossier de diagnostic D1, **candidat à la revue Morris**, non normatif et non approuvé.
**Source de code :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` ; **branche documentaire :** `docs/next-reconciliation-produit-ml1-20261110`.
**Hors observation directe :** poste/local, DB active, navigateur, captures Figma natives, fournisseur GitHub et tests rejoués. Les preuves PG/FAKE/LIVE/REAL décrites sont des preuves **historiques à SHA/lane distincts**.

[Index ML4B](../README.md) · [Vision R1 propriétaire](../../../cadrage/vision-produit.md) · [Décision de trajectoire CP0](../../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md) · [Roadmap](../../../governance/roadmap.md).

> **ADDENDUM D'ORIENTATION DU 11/11/2026 :** l'arbitrage Morris postérieur à cette synthèse retient **ML4C convergence fonctionnelle intégrée (cockpit/entrée/sas compris, UX fonctionnelle incluse), suivi de ML4D convergence UX/UI globale**. Voir [décision complémentaire](../../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). Les options A/B/C ci-dessous restent **des hypothèses de classement historiques du diagnostic**, pas trois macro-lots désormais retenus. Les huit familles X-01..08, preuves, 628 références et 43 étapes ne changent pas. **Gate B encore ouvert ; pas de GO code/UX/PR/merge.**

## 1. Résultat consolidé

| Lot et domaines R2 | Couverture de référence publiée | Acquis probants et limite déterminante |
| --- | --- | --- |
| [ML1 D1–D2](../ml1/consolidation-capacites-reserves-ml2-ml4.md) | **115 identifiants** (55 D1 + 60 D2, dont 12 candidats) ; **8 capacités** | Création/sas/fil source et PG, recette R01 ciblée ; statuts, erreurs 401, perte ACK, concurrence de préparation et UX restent à qualifier |
| [ML2 D3–D4](../ml2/consolidation-capacites-qa-reserves-ml2-ml4.md) | **164 identifiants** (118 D3 + 46 D4), **17 capacités**, Q01–29/COG01–07/OBS01–12 | Nora LIVE et documents D4 en vrais cas bornés ; autonomie cognitive, sélection D4, narration après effet et restitution riche non démontrées globalement |
| [ML3 D5–D6](../ml3/diagnostic-pilotage-decisions-d5-d6.md) | **136 identifiants** (77 RG/59 PF), B01–B18 | Cycle/décision/restriction sous vrai contrôle, T01–T08 LIVE 8/8 et C03 ; B08 maturité, CKI DELIVERED, reprise sans blocage en réserve |
| [ML4 D7–D9](../ml4/diagnostic-capacites-qa-recette-ml4.md) | **213 identifiants** (113 RG/100 PF), **22 critères ML4-AT** | OAuth et publication/PR REAL API bornées, G1 préparation ciblée ; publication USER R12→R13→R14 non terminée, merge REAL hard-blocked, REC-08 FAIL |
| **Neuf domaines** | **628/628 références indexées individuellement dans les annexes** | **INDEXED/MAPPED ≠ IMPLEMENTED par règle ≠ PASS/BEHAVIOR PROVEN ≠ ADOPTED**. Addenda/candidats conservés selon leur statut source. |

**Les décisions historiques restent distinctes :** ML1 et ML3 clôturés par Morris avec réserves ; ML2 accepté fonctionnellement avec réserves ; **ML4 non accepté globalement** ; R6/ML5 non engagés. Les compléments approuvés en SPEC ne deviennent pas des comportements prouvés.

## 2. Réconciliation de chacune des 43 étapes nominales de R1

Les noms d'étapes sont extraits des [sept scénarios R1 §§2.30–2.36](../../../cadrage/vision-produit.md). Une ligne signifie **contrat retrouvé + preuve/limite assignée**, non test passé. Voir les diagnostics [E2E01](../ml1/reconciliation-e2e01-nora-connaissance.md), [E2E02/04](../ml3/reconciliation-e2e02-e2e04-continuite-autorite-git.md), [E2E03/04](../ml2/reconciliation-e2e03-e2e04-preuves.md), [E2E07](../ml4/diagnostic-capacites-qa-recette-ml4.md).

### E2E01 — créer un projet et poursuivre la conversation

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `01-1` | Portefeuille : | D1 | A01/PG + R01/R09 ciblés | Statuts métier du portefeuille calculés par index, UX/Figma ouverte |
| `01-2` | Sas : | D2/D3 | A02 LIVE + R01-C/D/E | Valeur Nora variable, sas formulaire/copie Markdown en R01-F |
| `01-3` | Aperçu évolutif : | D2/D3 | R01-F prévisualisation v2 | Proposition et points ouverts UX incomplets, CAS updatePreview non atomique |
| `01-4` | Création autorisée : | D2/D1 | A03/A04 PG + R01-G LIVE | Perte ACK/timeout au navigateur non prouvés ; erreurs 401 trop larges |
| `01-5` | Continuité sas → projet : | D2/D3/D4 | A07/A08 PG + R01-G/R09 LIVE | Succès création ≠ mission D4 terminée ; restitution ACK à vérifier |
| `01-6` | Démarrage libre : | D3/D5 | B01 PG + R01 sans Git/cycle | Question indépendante pendant pending parfois bloquée |

### E2E02 — conduire un projet, sa trajectoire et ses cycles

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `02-1` | Projet ouvert, sans cycle : | D3/D4/D5 | B01 PG, C03 LIVE ciblé | Rappel sémantique long terme non démontré |
| `02-2` | Trajectoire : | D5 | B02 PG ; trajectoire proposée | Pertinence de propositions et dépendances non évaluée globalement |
| `02-3` | Ouverture d'un cycle : | D5/D6 | B03–B07 PG + T01 LIVE | Faux GO/ambiguïtés hors corpus non couverts |
| `02-4` | Cycle actif et guidance CKC : | D5/D3 | C03 CKI RESOLVED 0.2.0 | DELIVERED et digressions longues non prouvés |
| `02-5` | Progression et réorientation : | D3/D5 | Contexte, services et test B08 identifié | B08 sans oracle dédié de maturité proactive |
| `02-6` | Clôture et suite : | D5/D6 | T07 CLOSE LIVE, B07 PG atomique | GO composite CLOSE+OPEN en LIVE complet non prouvé |

### E2E03 — investigation, production cognitive et restitution structurée adaptative de Nora

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `03-1` | Comprendre la demande et son contexte : | D3 | R01-C/D/E LIVE ; UNIT profils | Pertinence de clarification/modelApplied générale non certifiée |
| `03-2` | Investiguer : | D3/D4/D9 | Quatre reads D4 LIVE, G1 REC-07/11 ciblé | Sources contradictoires et accès courant non recoupés globalement |
| `03-3` | Analyser, challenger et comparer : | D3 | R01 analyses utiles, COG-02/03 différés | Challenger erreurs et hypothèses LIVE non qualifié généralement |
| `03-4` | Produire directement : | D3/D4 | PG CAS + R06/R12 D4 AVAILABLE | CREATE parfois pris pour REVISE ; REC-08 narration FAIL |
| `03-5` | Structurer et restituer : | D3/R3 | SafeMarkdown/G4 sources | Restitution interactive, streaming et F2/G5 NOT RUN |
| `03-6` | Capitaliser et poursuivre : | D3/D4/D6 | D4 sujets/acquis PG, R09 reprise | Sélection lexicale et bonnes décisions au bon moment non prouvées |

### E2E04 — mémoire vivante, décisions et continuité entre échanges, sessions et cycles du projet

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `04-1` | Explorer lors d'un premier échange : | D3/D4 | R01 LIVE + fil unique | Conversation longue multi-sujets non qualifiée |
| `04-2` | Capitaliser avec discernement : | D4 | Q15–18/Q28 PG sujets/points | R01-F sans points ouverts ; pertinence implicite non démontrée |
| `04-3` | Enregistrer l'arbitrage humain : | D6 | T02/T03 LIVE RECORD/REVISE | Recommandation non décision ; scénario transverse long non rejoué |
| `04-4` | Reprendre plus tard : | D3/D4/D5 | R09 reconnexion, C03 intercycles | Rappel reformulé de réserves anciennes non prouvé |
| `04-5` | Confronter le nouveau contexte : | D3/D4/D6/D9 | PG provenance, G1 Git ciblé | Contradiction libre-texte et révocation REAL non exercées |
| `04-6` | Faire évoluer sans effacer : | D4/D6 | T03 D6 LIVE, D4 version/merge PG | Évolution connaissance+décision dans un seul parcours non prouvée |

### E2E05 — décision, autorisation et réalisation technique gouvernée

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `05-1` | Intention : | D3/D7 | Qualification cognitive + ML4 Git native | Demande technique Cursor ML5 OUT |
| `05-2` | Investigation et préparation : | D3/D7/D9 | D7 PREPARED/CREATE G1 | Instruction complète Cursor et STOP = ML5 OUT |
| `05-3` | Inspection Pilot-first : | D7/R3 | Diff Git inspectable G1 | Contrat Cursor versionné/inspectable non réalisé dans ML4 |
| `05-4` | Autorisation : | D6/D7/D9 | D6 mandat Git, gates PG, REAL API bornée | Exécuter Cursor absent ; R12 USER Git sans dispatch |
| `05-5` | Exécution déléguée : | D7 | Publication Git native seulement | Cursor technique : N/A NON IMPLÉMENTÉ en ML4 |
| `05-6` | Retour et passage au résultat : | D7/D8/D3 | Faits Git commit/PR API REAL bornés | Retour rapport/STOP Cursor et conformité = ML5/R6 |

### E2E06 — résultats, preuves, corrections et acceptation humaine

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `06-1` | Retour d'exécution : | D7/D8 | Faits Git D7/D8 bornés | Rapport terminal/partiel Cursor absent en ML4 |
| `06-2` | Investigation par Nora : | D3/D8/D9 | PG provenance PR/marker | Confrontation rapport Cursor vs tests indépendants OUT ML4 |
| `06-3` | Qualification proportionnée : | D8 | PG facts, statuts Git différenciés | Conformité globale et CI non établies par effet Git |
| `06-4` | Restitution Pilot-first : | D3/D8/R3 | UI Git, G1 lien ciblé | Restitution adaptative du bilan et F2/G5 non évalués |
| `06-5` | Suite corrective si utile : | D3/D6/D7 | D6 sous mandat, commandes non automatiques | Correction via Cursor sans nouveau GO = ML5 OUT |
| `06-6` | Décision et continuité : | D6/D4/D8 | D6 décisions historiques, D4 versionné | Acceptation humaine de résultat Cursor E2E non prouvée |

### E2E07 — accès Git individuels et collaboration sur dépôt partagé

| Étape R1 | Engagement | Propriétaires | Preuve historique pertinente | Manque / réserve |
| --- | --- | --- | --- | --- |
| `07-1` | Identité : | D1/D9 | R02 OAuth LIVE, R11 deux comptes | Org PENDING, identité multiple/refus privé non testés REAL |
| `07-2` | Projet individuel sans obligation Git : | D1/D2 | AT-01 PASS, R01 projet sans Git | Aucune preuve générale de toute qualité cognitive |
| `07-3` | Besoin Git contextualisé : | D3/D9 | R03 rattachement LIVE | Ajout source depuis Nora AT-05 NOT RUN |
| `07-4` | Consultation autorisée : | D3/D9 | R04 puis G1 REC-07/11 LIVE ciblés | Adversarial, révocation et multi-repo REAL non testés |
| `07-5` | Préparation d'intervention : | D7/D9/D6 | G1 diff PREPARED/CREATE inspectable | Préparation technique Cursor et STOP = ML5 OUT |
| `07-6` | Autorisation et réalisation : | D6/D7/D9 | PG gates, API Git REAL bornée historique | R12–R14 USER non finis, merge REAL hard-blocked, Cursor OUT |
| `07-7` | Retour et capitalisation : | D8/D4/D6 | PR #18 OPEN historique, R09 session | Pas de validation de résultat/acceptation ou partage de mémoire |

**Bilan : 43/43 étapes R1 rattachées ; aucune recette complète des sept E2E relancée ici.** Cela n'annule ni les PASS historiques ciblés ni les échecs observés. L'absence de couverture Cursor E2E05/06 correspond au **ML5 OUT**, non à une panne de ML4.

## 3. Huit familles transverses uniques, sans double comptage d'anomalies

| Groupe analytique (non normatif) | Constat réel et sources | Qualification de preuve / impact | Condition de sortie possible |
| --- | --- | --- | --- |
| **X-01 — Vérité après effet** | [ML4 REC-08](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) : D4 `REVISE AVAILABLE`, Nora affirme ne pas sauvegarder. Liens ML2-COV, ML3-X-02/03, ML4-COV-03 | **Contradiction LIVE observée**, cause exacte à prouver ; D3/D4/D8. Une seule anomalie transverse, pas trois | Reconstituer même génération/intention/qualification/effet/ACK/continuation/UI ; CREATE/REVISE/UNKNOWN et preuve de réponse conforme |
| **X-02 — Mémoire et raisonnement utiles** | D4 persiste, sélection `lexical-heuristic`, points ouverts R01-F absents, B08 sans oracle maturité, C03 CKI RESOLVED | **CODE + PG/LIVE borné / QUALITÉ NON PROUVÉE** ; D3/D4/D5 | Question reformulée après session/cycle, source datée et décision D6 applicable ; contrôle de ce que Nora choisit réellement |
| **X-03 — Continuité malgré incertitude** | D2-GAP-02 ACK perdu UI ; D2-GAP-03/04 risques concurrents ; [ML3-X-01](../ml3/reconciliation-e2e02-e2e04-continuite-autorite-git.md) pending bloque message non mutatif ; ML3-X-02/03 retour conditionnel | **BLOCAGE CODE CONSTATÉ + RISQUES À INJECTER**, aucune perte DB alléguée ; D1–D6 | Scénario combiné PG/BROWSER/LIVE : effet enregistré, réponse perdue, commande réconciliée, dialogue indépendant continu, pas de duplication |
| **X-04 — Publication Git USER** | REAL provider antérieur : commit + PR OPEN bornés ; G1 `PREPARED/CREATE` avec diff ; [R12/R13/R14](../../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) USER non finis | **CAPACITÉ PRÉSENTE, E2E RECETTE MANQUANT** ; D6–D9 | Après GO distinct : inspection, D6, commit et PR réels sur sandbox, références relues, reprise HEAD/ACK, D8 limité au réellement vérifié |
| **X-05 — Droits, rôles et sûreté des refus** | PG owners/fingerprint/revocation, T08 citation fausse non exécutoire ; Git hostile, révocation, organisations PENDING, multi-Pilotes REAL non exercés ensemble | **SOURCE IMPLEMENTED + NEGATIVE REAL INCOMPLETE**, pas de fuite ou bypass démontré ; D1/D4/D6–D9 | Cas adversariaux et retrait de droit au point d'effet, projet B sur dépôt partagé ; aucune mutation/transfert de mandat |
| **X-06 — Valeur UX et fidélité Figma** | Sas formulaire/Markdown brut, source Git invisible dans vue Travail, G4 19/20 transpositions **déclarées** ; [F2/G5 NOT RUN](../../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md), responsive R10 mineur différé | **ÉCART UX VÉCU + CONFORMITÉ VISUELLE NON QUALIFIÉE** ; R3/D3/facades | Captures Figma/browser à SHA, état, data, viewport, font et DPR identiques ; rail F1 246/246/240/244 et delta F2 ≤2 CSS px sur rectangles stables, décision Morris |
| **X-07 — Erreurs/résilience/observabilité** | 401 pour exceptions non auth, cookies ENV-01, vrai restore DB/PG-DBFAIL-03, streaming progressif et `modelApplied` non vérifiés | **RISQUE / PROOF GAP**, pas incident global attesté ; propriétaires selon effet | Insérer tests discriminants dans parcours A/C et R6, garder dette/exit, refuser un nouveau chantier de tests décoratif |
| **X-08 — Limite de périmètre ML5/merge** | `mergePullRequest` REAL hard-blocked ; R1 E2E05/06 nécessite Cursor ; [décision ML4/ML5](../../../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md) | **KNOWN GAP / OUT CONTRACTUEL**, pas échec du non-test R13/R14 | Morris tranche si merge REAL reste différé ou reçoit un mandat distinct ; ML5 reste séparé, pas de contournement |

**Regroupement sans doublon :** `ML4-REC-08` = X-01 même si ML2/ML4 le mentionnent ; `R-UX-01` = X-03 ; `ML4-REC-07` ancien FAIL puis G1 ciblé PASS ; `ML4-AT-13` = X-08. `NOT RUN` n'est pas `FAIL`.

## 4. Trois options historiques de convergence envisagées au diagnostic CP1 (avant arbitrage du 11/11)

> **Lecture historique uniquement :** A/B/C détaillent des familles de problèmes et des dépendances. La réalisation approuvée en orientation est désormais **ML4C fonctionnel intégré → ML4D UX/UI global** ; voir l'addendum et la décision D2 ci-dessus. Aucun constat ou niveau de preuve n'est effacé.

| Option cohérente | Résultat Pilote | IN / OUT et responsabilités | Preuve de sortie et dette/exit |
| --- | --- | --- | --- |
| **A — Reprendre, agir et poursuivre avec un état vrai** | Création/sas, mandat et sauvegarde sont réconciliables ; Nora ne ment pas sur un effet et reste utilisable après un incident | X-01/X-03 et erreurs X-07 : D1/D2/D3/D4/D5/D6 + UX. **OUT** deuxième moteur de décision/effet | ACK perdu, D4 REVISE, contradiction réponse/DB, perte propriétaire, message non mutatif pendant pending, idempotence, état réel ; conserver fencing/CAS ; tests + code + UX/doc dans un lot |
| **B — Nora apporte une mémoire et un raisonnement réellement utiles** | Reprendre une question ancienne, confronter faits/décisions et restituer un résultat clair, riche seulement lorsque pertinent | X-02/X-06 et CKI B08 : D3/D4/D5 + R3. **OUT** refonte cognitive gratuite, auto-autorisation D6, score artificiel | Corpus représentatif, trace des sources réellement sélectionnées, comparaison aux décisions applicables ; scénarios live et Figma/runtime cohérents ; dette `lexical-heuristic` avec exit explicite |
| **C — Publier un document Git de bout en bout sous contrôle** | Un document D4 devient branche/commit/PR réellement attribués après diff et HumanDecision ; incidents et refus restent honnêtes | X-04/X-05, parts X-07/X-06 : D6/D7/D8/D9 + R3. **OUT** code/CI, Cursor ML5, merge REAL tant que non décidé | R12→R13→R14 REAL sandbox après GO distinct, négatifs révocation/HEAD/double effet et preuves D8 ; pas de faux `COMPLETED` ou conformité non observée |

**Ordonnancement candidat à discuter :** A précède de préférence l'intégration finale B car l'expérience cognitive doit partir de faits d'effet fiables. B peut avancer en conception UX/corpus parallèlement **uniquement si** contrats D3/D4, fichier et intégrateur maîtrisés ; C peut être traité sur sa frontière D6/D7/D9 distincte, mais réutilise la restitution d'A. L'amélioration Figma/runtime et les vérifications de sûreté doivent rester **dans les lots concernés**, sans micro-chantiers d'écrans ou de tests. Le merge REAL (X-08) exige un arbitrage spécifique ; il n'entre pas par défaut dans C.

## 5. Préparation au gate Morris B : arbitrages à demander, pas à présumer

| Sujet | Décision possible Morris | Information manquante / limite |
| --- | --- | --- |
| **B-01 — Valider ou amender CP1** | Accepter la matrice comme base de diagnostic **avec réserves de preuve**, ou exiger un complément ciblé avant gate | 628 IDs indexés/43 étapes R1, mais exhaustivité de comportement et Figma/runtime non démontrées |
| **B-02 — Priorité et périmètre ML4C** | Confirmer A/B/C et leur ordre, les dépendances et les reports ; demander un seul contrat CP2 intégré par capacité | X-01 LIVE FAIL, X-03 code, X-04 USER inachevé, X-02 valeur cognitive |
| **B-03 — Risques négatifs et preuves** | Choisir cas adversariaux/erreurs/reprise nécessaires à chaque lot, garder les réserves R6 | Hostile Git, révoqué REAL, DB restore, cookies multi-lane, réconciliation ACK |
| **B-04 — Merge REAL** | Maintenir blocage hors ML4C ou ouvrir une conception/qualification dédiée sous nouveau mandat | Provider hard-block et AT-13, aucune permission par déduction de PR #18 |
| **B-05 — UX/Figma** | Fixer états/frames critiques pour F2/G5, conserver report responsive mineur existant ou le réarbitrer explicitement | Figma source partielle, comparaison navigateur absente, preuve F2 tolérance décidée non exécutée |
| **B-06 — Frontière ML5/R6** | Confirmer séquencement existant : **gate C avant ML5**, puis R6 global | Exécution Cursor technique non implémentée en ML4, aucune adoption anticipée |

**Conditions de présentation CP1 :** ce diagnostic est **un support D1 de revue**, pas la validation Morris de B-01…06. Pour un verdict fort, les étapes pertinentes nécessitent même SHA/lane, preuve PG/API/provider et browser, cas négatifs, provenance, sortie testable, et Figma native comparable. Aucune obligation de réaliser 43 tests isolés : quelques scénarios E2E cohérents peuvent couvrir plusieurs contrats.

**Verdict documentaire :** `9 DOMAINS / 628 IDS INDEXED / 7 R1 E2E / 43 STEPS SOURCE-MAPPED / 8 CROSS-FINDING FAMILIES / 3 ML4C OPTIONS FOR MORRIS / NO GLOBAL E2E OR F2-G5 BEHAVIOR PROOF / CP1 CANDIDATE / GATE B NOT HELD / ML4C NOT AUTHORIZED / NO ADOPTED`.
