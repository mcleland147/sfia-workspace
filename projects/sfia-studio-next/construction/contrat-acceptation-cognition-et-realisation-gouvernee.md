# SFIA Studio Next — Contrat d'acceptation intégré : cognition et réalisation gouvernée

> **Document de construction candidat approuvé pour publication documentaire par Morris le 23/11/2026 — NON NORMATIF / NOT MERGED / NOT ADOPTED.** Il assemble des oracles de qualification, sans créer de nouvelles règles R2, d'autorités ni de gates autonomes. Une réception ML5 exige une décision Morris distincte.

| Champ | Référence / portée |
|---|---|
| Objet | ML5 : investigation Nora, contrat exact, HumanDecision, exécution Cursor, Git conditionnel, preuves et analyse finale |
| Baseline code | `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; branche locale ML5 non publiée |
| Source fonctionnelle ML5 | `conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md` v0.5, **§20 validé Morris** ; branche candidate `1e6929c543a88606488094be2f5dfe7fc34a0cb9` |
| Source architecture | `architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md` v0.9 candidate |
| Sources propriétaires | R1 vision ; R2 D3/D4/D5/D6/D7/D8/D9 ; R4 architecture ; SEF v0.2 |
| Source UX | Figma file `itgvCulInEnFY6DvgIegvP`, page `1209:2`, frames 12.01–12.14 ; méthode `ux-ui/methodologie-contrat-figma-cursor.md` v1.1 |
| Source suivi | [Registre de couverture ML5](./ml5-registre-couverture-et-revue-developpement.md) ; 99 exigences A01–I11 ; 56 scénarios Q |
| Review Packs | [Socle @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) ; [Consolidation @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) ; [Cycle 6 @ b5466dd7](https://github.com/mcleland147/sfia-workspace/blob/b5466dd7739436dc1ce58ce18888165b682f87e8/sfia-review-handoff/latest-chatgpt-review.md) (histoire cycles 3–5 consignée dans les revues précédentes) |
| Verdict de suivi | **`ML5 PARTIAL — GOVERNED GAPS`** ; R-003 registre : **présence C6 déclarée 1 IMPLEMENTED / 92 PARTIAL / 6 NOT_IMPL** ; 44 PARTIEL / 1 EC / 54 NV = **ancienne conformité R-002 non réconciliée** ; aucune réception globale |

## 1. Résultat Pilote — contrat commun

Le Pilote exprime une intention ; **Nora** analyse et enquête en mobilisant des sources correctement qualifiées. Si un travail technique externe est nécessaire, elle prépare un **contrat canonique versionné**, dont l'instruction complète réellement destinée à Cursor est inspectable. Le Pilote autorise distinctement via D6. D7 conserve une tentative durable et transmet sans copier-coller ni duplication injustifiée. Studio montre uniquement les événements observés. Après fin ou interruption, D7/D9 et D8 reconstituent et qualifient les faits ; Nora fournit **une analyse globale unique et consultative**. Le Pilote décide éventuellement de la suite.

**Invariants :** projet identifiable ; cycle facultatif ; pas de travail délégué artificiellement ; instruction exacte ≠ droit d'effet ; D6 ≠ D7 ≠ D8 ≠ D9 ; résultat déclaré ≠ observé ≠ conforme ≠ accepté ; STOP ≠ rollback ; Git et MCP conditionnels ; pas de revue Nora à chaque commit ; **nouveau contrat et Exécuter** pour nouvelle tentative.

## 2. Propriétaires et interfaces

| Propriétaire | Responsabilité exclusive et contrôlable |
|---|---|
| Pilote | Besoin, portée, autorisation, réception/arbitrage |
| D3 / Nora | Investigation, sélection critique des sources, préparation proportionnée, avis final |
| D4 | Versions de documents, connaissances et acquis durables |
| D5 | Trajectoire/cycle facultatif, guidance non autorisante |
| D6 | HumanDecision, restrictions, suspensions, mandat opposable |
| D7 | Contrat, instruction, intention durable, tentative, dispatch, STOP, événements |
| D8 | Critères, provenance et force des preuves, écarts et bilan révisable |
| D9 | Références Git, permissions, commits/publications observés |
| Cursor SDK | Réalisation dans les limites techniques et permissions effectivement établies |

## 3. Capacités et conditions de sortie

### CA-01 — Nora investigue, reprend et prépare

**A01–A12, D01–D02 ; Q-01…Q-18 ; R2 D3/D4.**

Nora qualifie la demande, évite de déléguer les tâches cognitives simples, examine les sources/version/renvois déterminants, conserve contradictions et restrictions, reconstitue l'enquête après incident puis prépare le contrat si la demande ou le mandat le justifie. Une source critique absente interdit READY. Pas de surcharge cognitive artificielle.

**Oracle :** investigation multi-sources incluant contradiction et information tardive ; preuve de sources effectivement lues ; retour après coupure ; contrat généré effectivement par Nora (pas seulement API manuelle) ; refus si restriction déterminante inconnue. **État : NON PROUVÉ DE BOUT EN BOUT.**

### CA-02 — Recherche web sûre et proportionnée

**B01–B09 ; Q-19…Q-23.**

Recherche publique pertinente et contrôlée ; séparation technique du contexte privé au point de sortie ; ouverture et lecture réelles, citations, fraîcheur ; source hostile non autorisante ; indisponibilité bornée.

**Oracle :** requête sortante inspectable sans secret/identifiant privé, page ouverte vs seulement découverte, confrontation versions, prompt-injection neutralisée. **Gate : B1 reste désactivé tant qu'une isolation réelle n'est pas prouvée ; variable `ISOLATION_PROVEN` insuffisante.**

### CA-03 — Activité fonctionnelle Nora

**C01–C08 ; Q-24…Q-26.**

Au sas, dans le projet et sur les tâches documentaires, visualiser les phases significatives pendant le travail, distinguer **ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN**, corréler aux véritables outils, reprendre après reconnexion, ne jamais montrer chaîne de pensée/secrets ou pourcentages artificiels.

**Oracle :** BROWSER pendant RUNNING, événements de lecture effectivement produits, statut PARTIAL/UNKNOWN, deux tours indépendants et reconnexion. **État : C1 producteur partiel, pas la capacité prouvée.**

### CA-04 — Contrat exact et autorisation opposable

**D01–D12 ; Q-27…Q-33, Q-49/Q-50 ; R2 `PF-GOV-07/20/21`, `PF-REAL-05…15`.**

Un seul contrat versionné, quatre engagements Pilot-first, six volets, instruction intégrale et fingerprint canonique ; vue Travail 50/50 ; changement matériel invalide l'ancien mandat. READY est qualifié par des données et contrôles **côté serveur**, pas par le seul client. Oui/Non D6 distinct, Non sans effet, recontrôle au point de dispatch.

**Oracle :** contrat très long sans troncature, aller-retour persistance/empreinte, correspondance instruction affichée/autorisée/envoyée, refus permission suspendue, version modifiée, action Non et double clic. **État : structure PARTIELLE, tests BROWSER et serveur à compléter.**

### CA-05 — Tentative et exécution gouvernée Cursor

**E01–E15 ; Q-31, Q-39…Q-41, Q-49…Q-53 ; `PF-REAL-13…25`.**

Tentative enregistrée avant contact SDK, unique commande autorisée, acquisition atomique/fencing, workspace approuvé et isolation projets/Pilotes. Les statuts distinguent send/ACK/run/observé/terminal/incertain/STOP. Un ACK perdu ne produit **jamais une relance aveugle** ; reconnexion et crash ne créent pas une seconde mission. MCP vérifié seulement si requis.

**Oracle :** deux dispatchs concurrents ; **premier envoi ayant produit un effet puis perte d'ACK et claim expiré** ; fencing ; worker long-run ; STOP demandé vs observé ; SDK LIVE confiné avec identité et instruction exactes. **Bloquant LIVE : transition `AMBIGUOUS → DISPATCHED` sans preuve de non-duplicabilité.**

### CA-06 — Git Cursor et continuité conditionnelle

**F01–F09 ; Q-42/Q-48 ; R2 D9.**

Pas de Git obligatoire hors mission Git. Pour missions Git : dépôt/ref/base SHA/permission vérifiés ; versions réellement publiées distinguées du local ; relecture distante ; aucun push, PR, merge ou privilège induit par un mandat cognitif. Continuité entre contrats fondée sur sources Git vérifiables.

**Décision Morris du 23/11/2026 — [Git Cursor option A validée en contenu](https://github.com/mcleland147/sfia-workspace/blob/1e6929c543a88606488094be2f5dfe7fc34a0cb9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md) :** Cursor crée ou utilise la branche dédiée, effectue directement ses commits/pushes **dans le mandat Git D6 et les permissions techniques effectives**. **Studio ne publie pas le code de Cursor** ; D7 garde contrat/tentative et D9 **lit et vérifie de manière indépendante** dépôt, branche, base, droits, SHA et réalisations distantes. Studio conserve la publication **documentaire ML4**, sans code publisher concurrent. PR/merge/force-push/release ne découlent d'aucun mandat de développement : actes séparés. Tests GitHub REAL mutatifs sous GO spécifique ; F01–F09 restent **PARTIAL DETERMINISTIC** au C6, pas REAL/ADOPTED.

### CA-07 — Handoff et preuves vérifiables

**G01–G11/G15 ; Q-34…Q-38, Q-43…Q-46, Q-54 ; R2 `PF-PRV-01…32`.**

Dossier par tentative : rapport, inventaire complet créations/modifications/déplacements/suppressions, tests/commandes, références/version/sha, pièces, captures et preuves accessibles. D7 attribue la remise, D9 recoupe Git, D8 confronte prévu/réalisé/critères et révise son jugement sur nouvelle preuve, sans réécrire le passé. Neuf rubriques accessibles ; déclaration Cursor non certifiante.

**Oracle :** rapport sans log, manifeste incomplet, preuve inaccessible, SHA contradictoire, capture mauvaise version, injection hostile, preuve tardive et D8 révisable. **État : neuf rubriques structurées, vérification réelle INCOMPLÈTE.**

### CA-08 — Analyse cognitive finale et retour Nora

**G12–G14 ; Q-35…Q-38, Q-47, Q-55.**

À la fin/interruption réconciliée, un dossier D8 effectivement qualifié est présenté à Nora. Elle donne **une analyse cognitive sourcée unique**, consultative, distinguée du brief déterministe et de la décision D6. Le bouton « En discuter avec Nora » joint la référence de bilan au brouillon sans envoyer automatiquement. Un correctif ultérieur exige son propre mandat.

**Oracle :** vrai run D3 post-tentative, dossier partiel/contradictoire, absence de micro-revue, preuve tardive avec requalification bornée. **État : avis Nora LIVE NON PROUVÉ.**

### CA-09 — UX / UI contractuelle Figma

**D09, G11–G14, H01–H08, I06/I10 ; page 12 Figma.**

- **Travail 12.01–12.03 :** investigation et conversation Nora, visionneuse contrat **50/50**, confirmation D6.
- **Exécution 12.04–12.07, 12.14 :** interventions, historique, fiche du contrat, LIVE, état incertain, instruction intégrale.
- **Résultats & preuves 12.08, 12.11–12.13 :** quatre onglets **Synthèse / Livrables et tests / Git et pièces / Écarts**, neuf rubriques D8 couvrant l'ensemble, verdict/avis/autorité distincts.
- **Continuité 12.09–12.10 :** reprendre Nora avec référence de bilan, activité sas sans projet fictif.

**Écart actuel :** runtime rapporté sous `?surface=publication`, sans Exécution distincte et avec des onglets D8 différents de Figma. Le composant existe mais n'est pas conforme par présence seule.

**Oracle :** extraction Figma L0/L1/L2 native, assets SVG exacts, PNG originaux + SHA, mapping frame/node→DOM/assertion, mêmes données/viewport/font, BROWSER au bon build, F2 géométrie stable cible 0 et tolérance max **2 CSS px**, vérification des 14 états et interactions clavier/mobile/zoom 200 %. Aucune source critique inventée.

### CA-10 — Non-régression, intégrité et gouvernance

**I01–I11 ; R2 ; SEF / ENV-01 / SFIA v2.6.**

Pas de double moteur d'autorité, effets ou Git ; pas de régression ML1–ML4 ; travail dans DEV isolé, RECETTE/STABLE inchangées ; documentation et code cohérents dans le même lot ; tests et preuves assignés aux SHA/build. La preuve DETERMINISTIC ne vaut pas BROWSER, F2, LIVE ou REAL ; une fin Cursor ne vaut pas réception.

**Oracle :** tests domaines et PostgreSQL, E2E Browser DEV, contrôles de permissions, migrations DEV, sécurité et revue as-built. **Gate Morris pour toute promotion ou mutation externe.**

## 4. Douze parcours intégrateurs prioritaires (index de preuves, pas corpus normatif supplémentaire)

| ID | Parcours | Oracle discriminant | Liens sources prioritaires |
|---|---|---|---|
| T-01 | Investigation complexe et contrat Nora | Sources effectives, restrictions et contrat préparé | A, D, Q-01…Q-18 |
| T-02 | Refus par le Pilote | Non sans tentative ni effet | D, Q-29, PF-GOV-07 |
| T-03 | Autorisation du contrat exact | Même version/empreinte et instruction jusqu'au SDK | D/E, Q-30/Q-50 |
| T-04 | Double clic puis ACK perdu | Aucun second envoi à risque ; UNKNOWN/réconciliation | E, Q-31, PF-REAL-13/14 |
| T-05 | Mission longue avec navigateur fermé | Tentative et événements retrouvés sans relance | C/E, Q-39/Q-53 |
| T-06 | STOP après effets partiels | Demande/confirmation/effets séparés | E/G, Q-40, PF-PRV-06 |
| T-07 | Rapport de tests non vérifiés | D8 refuse toute certification fictive | G, Q-34, PF-PRV-02 |
| T-08 | Git et rapport contradictoires | Branch/ref/sha et réserves confrontés | F/G, Q-43/Q-46, PF-PRV-10 |
| T-09 | Terminaison puis unique revue Nora | D8 avant avis cognitif, aucun micro-bilan | G, Q-47/Q-55 |
| T-10 | Reprise de discussion contextualisée | Référence bilan au brouillon, sans envoi/effet | G/H, Q-37 |
| T-11 | Recherche web publique | Aucune donnée privée exfiltrée ; pages lues | B, Q-19…Q-23 |
| T-12 | Deux Pilotes/dépôt partagé | Isolation mandats, sources et preuves | D/E/F/G, PF-GOV-15 |

**Contrôle de complétude :** chacune des 99 lignes A–I, des **56 Q** et des PF propriétaires applicables conserve son propre statut et sa preuve dans le registre/rapport. Ce tableau ne permet pas une validation en masse.

## 5. Niveaux de preuve et gates de sortie

| Niveau | Prouve | Ne prouve jamais, à lui seul |
|---|---|---|
| DETERMINISTIC | Traitement scripté et invariants unitaires | SDK ou navigateur LIVE |
| INTEGRATION | PostgreSQL/serviciels DEV exécutés | Fournisseur externe ou UX navigateur |
| BROWSER | Parcours UI réellement servi et observé | GitHub réel ou SDK LIVE |
| FIGMA F2 | Conformité structurelle/visuelle aux états extraits | Autorité métier ou résultat technique |
| SDK LIVE | Exécution et observations authentiques en confinement approuvé | GitHub REAL, résultat conforme ou adoption |
| WEB LIVE | Recherche/lecture réelles sous protection efficace | Autorisation de mutation web |
| GitHub/MCP REAL | Effet distant et contrôle de sa réalité, sous mandat | Réception D6, release ou ADOPTED |

**Gates de revue (critères intégrés, pas nouvelle doctrine) :**
- **S — Sûreté** : READY serveur, anti-duplicat ACK-loss, droits/cible/secret, provenance et effets sûrs.
- **U — UX** : parcours Travail/Exécution/Résultats + BROWSER et F2 sur chaque état pertinent.
- **F — Fonctionnel** : 99 A–I + 56 Q + PF applicables disposés avec preuve ou réserve/exit et arbitrages.
- **P — Preuves** : pièces accessibles, D8 par critère/révisable et véritable avis Nora.
- **R — Réel** : SDK/web/Git/MCP prouvés pour chaque capacité réellement revendiquée, sous GO d'effet spécifique.
- **M — Morris** : réception/acceptation et réserves ; PR, merge, RECETTE, release, R6 et ADOPTED **séparés**.

Aucun critère bloquant de sécurité n'est levé par une simple acceptation documentaire. **Le choix A/B est arbitré : option A validée en contenu par Morris et publiée sur branche candidate** ; son préflight technique, les permissions effectives et les publications réelles **ne sont pas prouvés**. La topologie de supervision, les frontières WEB/SDK LIVE, le stockage des captures et les moyens de vérification restent à qualifier selon le risque et les gates. Cette mise à jour documentaire n'adopte aucun mécanisme non démontré.

## 6. Mode de mise à jour et verdict

**Checkpoint R-003 du 23/11/2026 :** [registre vivant](./ml5-registre-couverture-et-revue-developpement.md#4-ter-r-003--checkpoint-intégré-r1--r2--r3--r4--ml5-23112026) ; deux axes présence/conformité distincts, et huit écarts intégrateurs CP-01…CP-08. **Décision auto-session DEV** validée Morris côté D1 : session Pilote de test côté serveur réservée à DEV local réellement isolé ; login normal conservé ailleurs, droits D6 non contournés ; BROWSER C6 partiel sur surfaces vides, F2 **NOT PROVEN**. Le contrat CA-01…CA-10 et les scénarios T/Q/PF ne sont ni supprimés ni automatiquement acceptés.


Pour chaque exigence : **source R1/R2/ML5 → test Q/PF/ T-xx → composant/flux → preuve SHA/build/date/environnement → niveau → défaut/dette → exit → statut**. Mettre à jour le registre vivant lors d'un delivery cohérent, pas créer un autre registre de vérité.

Verdicts applicables : `ML5 PARTIAL — GOVERNED GAPS`, `ML5 INTEGRATED — QUALIFICATION IN PROGRESS`, `ML5 QUALIFIED FOR MORRIS REVIEW — WITH RESERVES`, `ML5 ACCEPTED BY MORRIS — SCOPE AND RESERVES EXPLICIT`.

**État de création :** `CONFORMITY REVIEW DOCUMENTED / ACCEPTANCE CONTRACT CANDIDATE / NOT MERGED / NOT BEHAVIOR PROVEN / NOT ADOPTED`. Ce document ne donne aucun GO de push projet, PR/merge, recette, LIVE/REAL mutatif ou promotion.
