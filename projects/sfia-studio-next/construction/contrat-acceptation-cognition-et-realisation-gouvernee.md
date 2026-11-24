# SFIA Studio Next — Contrat d'acceptation intégré : cognition et réalisation gouvernée

> **Lecture prioritaire — revue approfondie post-C14 du 24/11/2026 : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.** Voir [revue complète](./ml5-revue-approfondie-conformite-post-c14.md) et complément courant en fin de document. Snapshot de code consulté, worktree NON OBSERVÉ ; C14 présence 2/97/0 rapportée, conformité partielle. R-004 reste historique et opposable pour les exigences ; trois lots de convergence approuvés comme trajectoire, aucun GO C15 ni publication code.

> **Lecture prioritaire — R-004 du 24/11/2026 : ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED.** Consolidation documentaire sous GO Morris ; candidat local C3–C13 non publié, code courant NON OBSERVÉ directement. Les états R-001/R-002/R-003 et les critères d'acceptation antérieurs restent historiques ; les réserves et exigences ne sont pas effacées. Pas de publication code ni de préparation de promotion dans le présent lot. Figma F2 est conservé pour recette UX, non bloquant pour les validations fonctionnelles indépendantes. Références actualisées : [contrat fonctionnel v0.6 §21](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) et [architecture v0.10 §20](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md), branche documentaire candidate non mergée. La conduite sémantique IA est un arbitrage Morris validé en contenu ; pas de déclencheur décisionnel lexical/regex/longueur. Aucun ADOPTED.

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

## 7. R-004 — conditions de qualification actualisées (24/11/2026)

**Statut :** consolidation documentaire candidate validée comme base de travail par Morris, sans réception ML5. [Contrat fonctionnel §21](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) et [architecture §20](https://github.com/mcleland147/sfia-workspace/blob/af97e428b8904922a48a023028fbbfbec019c1f1/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md) ; [registre R-004](./ml5-registre-couverture-et-revue-developpement.md). Sources de preuve : [C5](https://github.com/mcleland147/sfia-workspace/blob/8199b1f01d9cee5f946d9f3f0837b4e00386e03c/sfia-review-handoff/latest-chatgpt-review.md) ; [C7](https://github.com/mcleland147/sfia-workspace/blob/01b7b66b8f1185bdbe4c1f13ca1cdd75141a08a6/sfia-review-handoff/latest-chatgpt-review.md) ; [C8](https://github.com/mcleland147/sfia-workspace/blob/759517d0ea32ee8a6edbeedf90306aec97136936/sfia-review-handoff/latest-chatgpt-review.md) ; [C9](https://github.com/mcleland147/sfia-workspace/blob/de5e1fc6ea5fde2dda8f1a3bca3f61f2f64950e1/sfia-review-handoff/latest-chatgpt-review.md) ; [C10](https://github.com/mcleland147/sfia-workspace/blob/76199b38eb3b33b7421a82a563772f9b28739936/sfia-review-handoff/latest-chatgpt-review.md) ; [C11](https://github.com/mcleland147/sfia-workspace/blob/f9dfcaaad90470e046d95a9d0a93115341a750d3/sfia-review-handoff/latest-chatgpt-review.md) ; [C12](https://github.com/mcleland147/sfia-workspace/blob/45311f75dad80e19f76ae09adfb1da387514531f/sfia-review-handoff/latest-chatgpt-review.md) ; [C13](https://github.com/mcleland147/sfia-workspace/blob/e3ed518b55ecda9430c862cda063052f94da8e7c/sfia-review-handoff/latest-chatgpt-review.md). Les CA/T/Q/PF historiques sont conservés ; ce complément prime pour l'état courant et précise les oracles discriminants, sans nouvelle série normative.

| CA | État de revue après C13 | Oracle/exit prioritaire |
|---|---|---|
| CA-01 | PARTIEL — C11/C12 préparation LIVE bornée ; code historique à vérifier | Paraphrases/négations, demande courte complexe, source critique absente, renvoi et contradiction tardive, reprise ; aucun routage lexical |
| CA-02 | B09 NOT_IMPL ; frontière B1 présente | WEB LIVE public isolé, trace requête minimale et citations, distinction trouvé/ouvert, injection sans autorité |
| CA-03 | PARTIEL — journal/poll ; C13 journal D8 | RUNNING Nora LIVE sas/projet/documents, ordre et reconnexion, pas de chaîne privée |
| CA-04 | PARTIEL — viewer/D6 C10, contrat READY C11/C12 | Critères métier et instruction intégrale, READY serveur, fingerprint, droits retirés ; Non sans effet |
| CA-05 | LIVE borné C11/C12/C13 ; long-run sans navigateur, STOP observé | Reprise après redémarrage serveur, ACK perdu déterministe et fail-closed, concurrence, isolation |
| CA-06 | PARTIEL déterministe ; Git A validé ; GitHub REAL non exercé | Mission Git mandatée seulement, préflight/refs/droits, continuité SHA ; aucun publisher Studio code |
| CA-07 | PARTIEL — ingestion/qualification, C12 early INCOMPLETE, C13 confinement statique | Terminal→handoff autonome, fichiers et sorties authentiques, confinement concurrent/lecture bornée, preuve tardive et transaction |
| CA-08 | LIVE borné C11/C12 ; C13 journal non rejoué | D8 avant avis Nora produit unique, lecture effective des pièces et citations ; dossier incomplet honnête, aucun POST externe nécessaire |
| CA-09 | BROWSER SCRIPTED C9/C10 ; F2 NOT PROVEN | Interactions utilisables ; F2 conservé pour recette UX, non bloquant pour livraison fonctionnelle indépendante |
| CA-10 | Tests ciblés C13 72 unit +17 PG ; non-régression globale non attestée | TypeScript/lint/build, domaine/PG, ML1–ML4 selon impact, sécurité, 99 IDs et CA/T/Q/PF ; ENV-01 |

### 7.1. Vérifications sémantiques et sûreté

Arbitrage Morris : **aucun regex, dictionnaire, matching de mots/phrases, comptage ou longueur ne décide de l'intention, du profil, de la stratégie cognitive, du recours aux outils ou du déclenchement d'un contrat.** D3 qualifie sémantiquement dans le contexte avec sorties structurées validées et garde-fous opposables. Aucune substitution lexicale si le modèle échoue. Les regex techniques, la recherche textuelle comme indice de découverte, les validations de schéma et règles déterministes de sécurité/autorité sont conservées. Tester sur formulations différentes d'une même intention, négation, citation d'un terme, ambiguïté et absence de mots attendus. Ne pas confondre qualification cognitive et HumanDecision.

T-01 doit éprouver une investigation réelle où Nora revoit une question déterminante, traite contradiction/source absente, puis produit un contrat complet avec critères métier (pas de simple assemblage d'un extrait borné). T-11 doit vérifier le vrai fournisseur B1 et sa frontière isolée avant activation. T-09 doit démontrer **le chaînage du produit** après observation terminale sans script de qualification qui injecte le handoff ou appelle manuellement D8/Nora ; avis unique et consultatif, pièces tardives historisées. T-05/T-06 bénéficient des preuves LIVE C13 bornées ; T-04 reste DETERMINISTIC ; reprise serveur autonome non prouvée. T-02 : le refus explicite peut conserver la trace PREPARED→CANCELLED et HumanDecision ; oracle métier = aucun dispatch/effet, pas absence artificielle de toute trace. T-08 et T-12 restent à exercer selon missions, droits et isolation.

### 7.2. Priorité des gates et validation du prochain lot

Ne pas transformer les 99 exigences en score de maturité. Préserver les deux axes présence/conformité et renseigner chaque ligne impactée avec preuve et réserve. Les risques de divulgation, d'autorité et de double effet restent bloquants ; lecture D8 bornée et confinée même lors de modifications concurrentes, qualification sur les bons faits. La conformité Figma F2 intégrale reste attendue lors de la recette UX ; **elle ne constitue pas un gate de refus des livraisons fonctionnelles indépendantes**, qui doivent rester utilisables. Ne pas exiger de mutation GitHub ou MCP sans nécessité et mandat.

Trajectoire : A/B/C + D01–D02 en premier (conduite sémantique, WEB LIVE, activité) ; D/G et sécurité/résilience ciblées (restitution autonome) ; qualification consolidée et continuité. Utiliser DEV LIVE isolé existant, appels réels autorisés dans leur périmètre, pas de nouvel environnement ou moteur parallèle. Réserver à Morris la décision ultérieure de mise à disposition et toute publication code/PR/merge/promotion. **Le GO documentaire R-004 n'est pas un contrat d'exécution Cursor ni un GO de ces actes.**

**Verdict R-004 : ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED.** Code courant local NON OBSERVÉ ; présence rapportée 1/97/1, B09 NOT_IMPL ; aucune acceptation par ligne ou globale induite.

## 8. Revue approfondie post-C14 — oracles discriminants de complétude

Référence [revue approfondie](./ml5-revue-approfondie-conformite-post-c14.md), [registre courant](./ml5-registre-couverture-et-revue-developpement.md), [snapshot consolidé](https://github.com/mcleland147/sfia-workspace/blob/78f60e40f466b520ac0381d5d27e212bd2fa5695/sfia-review-handoff/latest-chatgpt-review.md) (blob 01961de12b10dc1d8802a2ba24bc5095a51b4949). Ce complément est une consolidation de qualification approuvée par Morris ; CA/T/Q/PF existants conservés. Pas de nouveau contrat normatif ni de preuve rejouée. Les oracles ci-dessous précisent ce que doit démontrer le produit, pas simplement un test d'un helper.

| CA | Constat post-C14 et oracle d'acceptation complémentaire |
|---|---|
| CA-01 | A.1–A.7 : même conducteur D3 sur toutes surfaces ; paraphrase/négation, court complexe/long simple, allocation adaptative et réallocation, plusieurs sources/version/renvoi déterminant, contradiction/restriction tardive, gestion de contexte/limite de segment avec continuation, vraie reprise, insuffisance positive. Mesurer consommation réelle quand exposée, aucune troncature ou relance d'effet. |
| CA-02 | B.1–B.3 : besoin sémantique, vraie recherche et ouverture au sein du travail Nora, lecture ciblée au-delà d'extrait initial, citations et version, séparation données publiques/privées au point de sortie et négatifs SSRF/DNS/redirect/body borné/timeout/injection. WEB LIVE avec données fictives/publiques tant que frontière privée non qualifiée. |
| CA-03 | §5 : activité pendant RUNNING sas/projet/document/bilan, provenance de chaque lecture et révision, distinction annoncé/observé, ordre/reconnexion/ownership et minimisation, pas de chaîne privée ou fausse progression. |
| CA-04 | D.1–D.3 : contrat métier et critères spécifiques indépendants de replyDraft, instruction longue intégrale et empreinte des octets inspectés/autorisés/transmis ; état vide, budget épuisé, source critique, mauvais snapshot, changement/restriction → pas READY applicable. Oui/Non, aucun effet après refus. |
| CA-05 | D.3–D.4 : SDK LIVE nominal préservé, mandat et sandbox/permissions effectifs ; terminal/UNKNOWN et STOP distincts, absence de double envoi, supervision long-run et reprise autonome après redémarrage processus, concurrence STOP/observation, confinement Pilote/projet. C13 STOP LIVE et long-run bornés ; ACK perdu déterministe. |
| CA-06 | D.5 : Git option A, base/ref/droits fraîchement observés, opérations exactes permises, continuité entre deux missions, D9 relit indépendamment, local non publié distingué. REAL distant uniquement avec cible et GO, pas de publisher Studio. MCP conditionnel. |
| CA-07 | D.6–D.8 : terminal déclenche remise/collecte automatique, inventaire complet et pièces réellement lisibles/identifiées/versionnées, preuves de tests authentiques, critère vs pièce et verdict positif ou négatif étayé, neuf rubriques, fichier concurrent/lecture strictement bornée, manque/contradiction/rapport hostile honnêtes, requalification atomique et nouvelle preuve vérifiée. |
| CA-08 | D.9 : avis Nora LIVE unique lié à la version exacte du dossier après D8, journal de lectures individuelles et limites, deux cas suffisant/incomplet ; preuve tardive révisée sans écrasement ni redispatch, En discuter avec Nora référence retirable, sans envoi automatique. |
| CA-09 | §7 : fonctionnalité utilisable BROWSER, surfaces Travail/Exécution/Résultats et retour Nora ; F2 14 états conservés pour recette UX, pas gate des livraisons fonctionnelles indépendantes. |
| CA-10 | §§7–10 : tsc/lint/build, unit/PG/API/SDK, non-régression ML1–ML4 selon impact, ENV-01 auto-session uniquement DEV réellement isolé, contrôles autorités, traces et versions. 99 IDs et CA/T/Q/PF suivis, aucun ADOPTED ou réception induite. |

**Cas intégrateurs à approfondir sans multiplier artificiellement les cycles :** T-01 et Q-15 notamment vérifient vraie investigation adaptative, reprise, suffisance et contrat long/critères spécifiques ; T-11/ Q-19…23 web LIVE intégré et sécurité ; T-02/D6 refus sans effet, droits retirés et fingerprint ; T-04…06 supervision, ACK perdu, STOP, redémarrage ; T-07/T-09 dossier précoce/incomplet et chaîne terminale autonome avec D8 puis avis Nora, pas scripts injectant ; T-08/T-12 Git et isolation des identités selon besoins/mandats ; maintenir tous autres T/Q/PF applicables et leur couverture historique. Ne pas inventer un nouvel identifiant de test normatif. Les scénarios de preuve sont des moyens, pas des substituts au résultat produit.

Trajectoire §9 de la revue : 1 conducteur cognitif, 2 réalisation/restitution autonomes, 3 qualification intégrée. Risques P0 traités avant usage concerné ; même macro-lot, pas de lancement automatique de C15, pas de push code ni mise à disposition. **Verdict : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.**
