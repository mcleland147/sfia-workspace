# SFIA Studio Next — Conception corrective : fiabilité documentaire D3/D4 et continuité S05

| Champ | Qualification |
| --- | --- |
| Date | 14 novembre 2026 — Europe/Paris |
| Périmètre | R5 / ML4C — fiabilisation du résultat documentaire de Nora, du sas au projet et à la reprise |
| Statut | **CONCEPTION TECHNIQUE CANDIDATE — QUALIFIÉE PAR CHATGPT — NON IMPLÉMENTÉE / NON PROUVÉE / NON ADOPTÉE** |
| Autorité produit | Morris : résultat utilisateur explicitement exprimé et GO Git documentaire de préparation ; aucun GO code ou promotion |
| Contribution | ChatGPT : choix techniques proposés, analyse d'impact et contrat de preuve ; **ne se substitue pas à une validation normative D2 du contenu ni à un gate Morris de réalisation** |
| Référentiel | `sfia-workspace` / `projects/sfia-studio-next/` ; `main@6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| Candidat technique étudié | `fix/next-semantic-intent-convergence-20261112@d936da81ebf7d17eb78cc11da0538df000281a4a`, **LOCAL ONLY** ; tree `276679be1ea139525b2267cde9245b8fb88e9a76` selon handoffs |
| Parent candidat | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` (PR #676 OPEN, non mergée) |
| Git local | **NON OBSERVÉ** depuis ChatGPT. Les diffs et inspections runtime proviennent des handoffs Cursor, pas d'un accès direct à ce worktree |
| Version/lane | `0.0.0-dev` ; **NO RELEASE / STABLE NOT AVAILABLE** ; RECETTE `d936da81` selon Q2, sans nouveau contrôle runtime dans cette contribution |
| Nature Git | **Un seul nouveau document candidat**, branche documentaire dédiée, dérivée de `main@6cda86bd` ; pas de changement code, décision, doctrine, roadmap, cahier, journal, PR, merge ou déploiement |

> **Résultat Pilote fixé par Morris :** lorsqu'il demande à Nora de créer ou éditer un document, Studio doit effectuer l'opération autorisée, ne déclarer de succès que si elle est confirmée, afficher le document dans sa bibliothèque, avec son contenu et ses révisions, et permettre de le retrouver ensuite. Une demande de document ne vaut pas à elle seule document sauvegardé. L'objectif n'est **pas** de débloquer une fixture : c'est de restaurer le parcours réel sans régression d'autorité, d'intégrité ou d'idempotence.

## 1. Objet, trajectoire, responsabilités et limites

Cette conception traite **deux causes immédiates démontrées** par des diagnostics distincts et réserve l'analyse du sas avant création du projet. Elle ne crée ni deuxième moteur d'intentions, ni nouveau propriétaire d'effets, ni état terminal arbitraire, ni migration supposée. **Un seul résultat utilisateur et une intégration qualifiée commune**, avec deux volets techniques isolables :

- **Volet A — Continuité S05 :** qualifier les conflits réels entre travaux non résolus avant de bloquer une nouvelle intention ; conserver les protections contre les effets concurrents et les ACK perdus.
- **Volet B — Proposition documentaire D3/D4 :** établir une identité documentaire canonique, traiter exclusivement les séparateurs structurels vérifiables et conserver le refus de toute divergence réelle.
- **Intégrateur — Vérité, sas, observabilité, régressions :** restituer le statut exact de l'effet, préserver les fences persistées, éprouver les deux parcours et la transition sas/projet.

**IN :** D3 qualification durable, D4 CREATE/REVISE et consultation, S05 pending/reprise, messages et ACK, couche UI indispensable à la vérité, services propriétaires concernés par le garde S05, tests et documentation d'architecture/as-built du même delivery. **OUT :** refonte générale ML4D, nouveaux registres d'autorité, nouveau datastore, purge de RECETTE, Git REAL, changement de doctrine, publication produit, PR, merge, STABLE, ADOPTED.

**Responsabilités non négociables :** Morris arbitre les frontières produit et les gates ; Nora D3 comprend, propose, conduit et restitue ; Studio D3 orchestre et contrôle la qualification ; D2/D4/D5/D6/D7/D9 conservent leurs contrats d'autorité, cible, état, idempotence et mutation ; D8 qualifie les preuves. Cursor ne choisit ni la politique, ni les alternatives proposées ici : il exécutera plus tard un contrat d'exécution instancié SFIA v2.6, **après GO distinct**.

## 2. Source de vérité, preuves et statut des connaissances

### 2.1 Sources Git consultées

- SEF v0.2 : `governance/SEF.md`, notamment `10 ; Roadmap : `governance/roadmap.md` ; convention de nommage **VALIDATED** ; ENV-01 et politique de versioning.
- Décisions : `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` et `2026-11-12-qualification-semantique-nora-mobilisation-capacites.md`.
- R2 : `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md` ; `contexte-et-conduite-gouvernee-de-nora.md` ; `connaissance-sujets-et-continuite-du-projet.md` (dont RG-KNOW-016 à 020) ; `resultats-et-preuves.md`.
- ML4C : `contrat-convergence-fonctionnelle-integree.md`, `conception-qualification-semantique-mobilisation-gouvernee.md`, `contrat-technique-qualification-semantique-mobilisation-gouvernee.md`, `design-correctif-verite-effets-continuite.md`, `cahier-recette-utilisateur-ml4c.md`.
- Journal Q3 **sur branche documentaire, pas main** : `docs/next-ml4c-uat-journal-20261112@bb7769deb0bbf382003b0f91d2d802ae224e2a8a`, `journal-recette-utilisateur-ml4c.md`.
- Diagnostic S05 : [handoff `6e0468d6`](https://github.com/mcleland147/sfia-workspace/blob/6e0468d6b1692e6c4c36368467413dd591e1f8a7/sfia-review-handoff/latest-chatgpt-review.md) (blob `a783ecfe`).
- Diagnostic proposition : [handoff `2340c2e2`](https://github.com/mcleland147/sfia-workspace/blob/2340c2e2f95190e828f7839456d11cff963e04d3/sfia-review-handoff/latest-chatgpt-review.md) (blob `754db78b`).
- Diff intégral Q1 du candidat LOCAL : [handoff `2afd7b57`](https://github.com/mcleland147/sfia-workspace/blob/2afd7b576785a50ebbf9c0a6106479cad1f79da1/sfia-review-handoff/latest-chatgpt-review.md) ; preuve build RECETTE Q2 : [handoff `746f0813`](https://github.com/mcleland147/sfia-workspace/blob/746f08137956000e51639f990ab8659121327d87/sfia-review-handoff/latest-chatgpt-review.md).
- Code ancêtre publié `67bf6b0b` : `web/src/domains/conversation/{service.ts,turn-command.ts,nora-adapter.ts,document-act.ts,semantic-qualification.ts}`, `web/src/domains/document/service.ts` ; changements locaux supplémentaires **étayés par diff, non relus directement dans le worktree**.

Les chemins courts de gouvernance/construction ci-dessus sont relatifs à `projects/sfia-studio-next/`. Les identifiants d'objets de recette sont des corrélations, pas des secrets ni des permissions. La vision en trois PNG est identifiée dans `cadrage/vision-cible/README.md` ; **leurs pixels n'ont pas été inspectés dans cette analyse, et aucun comportement graphique n'en est déduit**.

### 2.2 Diagnostic différentiel démontré

| Parcours | Preuve | Cause immédiate | Plafond de conclusion |
| --- | --- | --- | --- |
| Intervencia / S03-01 Q3 | `op_39b85ba5…`, commande frère `turn-6424c417…` en `UNKNOWN` depuis S02-06, raison `S05_PENDING_BLOCKS_EFFECT`, `pendingEffectBlocked=true` | S05 met `allowOwnerEffects=false` ; `documentSave=null` ; `NO_EFFECT_OBSERVED` | **PROVEN** sur ce tour ; admission/seal/save D4 non atteints. Second sibling `UNKNOWN` également présent |
| Projet neuf / T-D4-NEUF-02 | `op_8de7a3ea…`, `prep_a9bc4514…`, `proj_caa96b06…` | `documentProposal` sans LF terminal contre fence `replyDraft` avec LF terminal, longueurs JS déclarées 433/434 ; `PROPOSAL_SOURCE_CONFLICT` | **PROVEN** sur ce tour ; `pendingEffectBlocked=false`, `d4_attempted=false`, zéro document en base |
| Sas neuf / T-D4-NEUF-01 | Préparation `prep_1e2c0adc…` ; Nora `UNKNOWN` et déclare les outils D4 non écrivant | **CAUSE NON ÉTABLIE** ; possible confusion entre outils Nora read-only et exécution propriétaire Studio | **RÉSERVE** ; aucun résultat applicatif D4 contrôlé et pas de diagnostic transactionnel |

**Ne pas confondre :** le rapport Cursor appelle « octets » les longueurs 433/434. L'implémentation JS mesure ici des unités de chaîne ; la différence EOF/`\n` est établie, pas une équivalence universelle avec les octets UTF-8. Les tests devront qualifier séparément longueur JS, octets UTF-8 et digest.

**Le fait que `savePreparationDocument` accepte `projectId = null` prouve la possibilité de stockage d'un document rattaché à une préparation, mais pas la mobilisation D3/D4 depuis le sas.**

## 3. Contrat utilisateur et invariants impératifs

| ID | Invariant vérifiable | Conséquence |
| --- | --- | --- |
| INV-01 | L'autorisation est l'acte USER authentifié, reconnu par le propriétaire au point d'effet ; une qualification Nora ne signe pas un mandat | Aucune écriture depuis la seule parole du modèle |
| INV-02 | Contenu de document = proposition autorisée et identifiée ; aucune réécriture silencieuse du corps, du titre, des sections ou des fins de ligne voulues | Refus si divergence matérielle |
| INV-03 | Même commande/intention/corrélation = au plus un effet métier ; empreinte différente = CONFLICT, non nouveau document | Rejeu/ACK perdu non duplicatif |
| INV-04 | `UNKNOWN` signifie effet à établir, non échec et non autorisation de recommencer | Réconciliation propriétaire avant nouvelle écriture dépendante |
| INV-05 | Une intention réellement indépendante et sans risque prouvé peut progresser ; toute absence de preuve de sûreté bloque | S05 reste conservateur, mais ciblé |
| INV-06 | Les gardes de concurrence et d'autorité s'exercent aussi au point d'effet avec fencing/CAS, pas seulement lors du calcul initial | Pas de fenêtre TOCTOU autorisant un effet concurrent |
| INV-07 | `NOT_EXECUTED`, `FAILED` avant effet, `FAILED` après tentative, `CONFLICT`, `UNKNOWN`, `AVAILABLE` restent distinguables côté Pilote | Aucun ACK « exécuté » si `d4_attempted=false` |
| INV-08 | Le sas et le projet partagent le fil autorisé ; la création D2 ne transforme pas une proposition en effet D4 et ne perd pas les documents déjà conservés | D2 et D4 restent deux propriétaires et deux preuves |
| INV-09 | Une source antérieure ou externe reste source, jamais autorité d'écriture ; accès Pilote/préparation et validité sont recontrôlés | Aucune fuite interprojets ni récupération non autorisée |
| INV-10 | Aucune règle de sauvetage à mots-clés, nouveau journal d'effets, état concurrent ni migration par opportunisme | Préserver SEM-01..08, TV-01..05 et la nomenclature par responsabilité |

**État du document :** ces invariants sont des **règles de conception candidates**, cohérentes avec R2/ML4C ; ils ne sont pas la preuve d'une implémentation ni une nouvelle doctrine exécutoire.

## 4. Volet A — S05 : qualifier le risque au lieu d'assimiler tout UNKNOWN à une concurrence

### 4.1 Défaut précis

Dans `conversation/turn-command.ts`, `findUnresolvedSiblingTurns` retourne tous les tours de même conversation/Pilote en `RUNNING`, `ACCEPTED` ou `UNKNOWN`, hors tour courant ; `service.ts` prend le premier bloqueur éventuel (avec hint UX non autorisant), puis bloque `INTENTION_EFFET` et `INCERTAIN` globalement. La requête inspectée ne fournit pas d'ordre `ORDER BY` : ne pas traiter la première clé présentée comme unique vérité sur les bloqueurs.

Deux tours `UNKNOWN` historiques ont été observés sur Intervencia, dont un associé à une tentative D5 « Projet Inexistant ». Le correctif ne doit ni tester seulement une clé de fixture, ni assouplir automatiquement **toutes** les intentions D4.

### 4.2 Politique cible — ordre obligatoire et fail closed

Pour chaque intention à effet `I` du tour courant, l'orchestrateur :

1. Reprend la **qualification validée durable du tour courant**. Si `UNAVAILABLE`/`NEEDS_CLARIFICATION` ou cible ambiguë, **aucun effet** ; la réponse cognitive possible ne change pas cela.
2. Charge **tous** les siblings potentiellement non résolus et missions en attente de la conversation du même Pilote. Les trie de manière déterministe pour la restitution (création / identifiant), **sans éliminer une entrée au hasard**.
3. Pour chaque sibling `S`, établit, à partir du journal durable et des seuls propriétaires légitimes, l'identité de la commande, la qualification **effectivement persistée**, l'étape d'exécution franchie, la cible et les effets connus. Une narration Nora ou un `documentSave=null` seul ne constitue pas la preuve d'absence d'effet.
4. Détermine le conflit **sur les empreintes d'effet et ressources vérifiées**, non sur le mot « document » ni l'âge du tour. Une commande liée à la même intention utilise d'abord sa **corrélation/idempotence** ; elle n'est pas rejouée comme nouvelle intention.
5. Classe le sibling :
   - `ACTIVE_EFFECT_RISK` : effet possiblement en cours ou concurrent ;
   - `UNKNOWN_EFFECT_RISK` : effet non réconcilié, qualifié ou non, dont la sûreté ne peut être démontrée ;
   - `PROVEN_NO_EFFECT` : aucun effet possible démontré à l'issue des contrôles durables/prouvés des propriétaires ;
   - `PROVEN_INDEPENDENT` : périmètres d'effet disjoints démontrés, et aucune dépendance/garde commune applicable ;
   - `SAME_INTENT` : reprise/idempotence uniquement.
   **Ces étiquettes sont des classifications de décision purement internes au design, PAS de nouveaux statuts DB ou enums publics approuvés.**
6. Si au moins une entrée est `ACTIVE_EFFECT_RISK` ou `UNKNOWN_EFFECT_RISK` **pour cette intention**, bloquer la mutation, conserver intactes les commandes/permissions, exposer raison et récupération possible. Si toutes les entrées sont sans effet ou indépendantes **avec preuve**, procéder aux contrôles habituels des propriétaires et du fencing.
7. Refaire les préconditions/conflits pertinents immédiatement avant la mutation propriétaire, sous les mécanismes transactionnels existants (CAS/fence/corrélation). Si la sûreté n'est plus démontrée, **STOP/NO EFFECT**, jamais un contournement au motif qu'un premier pré-check était positif.

### 4.3 Matrice des cas

| Ancien travail | Nouvelle intention | Politique |
| --- | --- | --- |
| Rien d'ouvert | CREATE D4 autorisé | Suivre le chemin normal et les contrôles D4 |
| Sibling `RUNNING`/`ACCEPTED`, action et cible potentiellement concurrentes | D2/D4/D5/D6 à effet | **BLOQUER**, puis réconcilier/reprendre ; ne pas présumer l'indépendance |
| Sibling `UNKNOWN` et preuve durable de tentative D4 non résolue sur même document/corrélation | CREATE/REVISE dépendant | **BLOQUER** ou rejouer avec la **même** identité d'intention suivant réconciliation propriétaire |
| Sibling `UNKNOWN` historique, aucune étape à effet engagée démontrée ET absence vérifiée d'effet dans les propriétaires concernés | Nouvelle intention D4 indépendante | **ADMISSIBLE** après contrôles frais et fencing |
| Sibling `UNKNOWN` ancien, cible ou phase d'effet introuvable | Nouvelle intention apparemment indépendante | **BLOQUER** ; jamais déduire « sans effet » du temps écoulé |
| Mission D2 `AWAITING_PILOT_ACT`, absence d'acte « Créer le projet » | Nouvelle mutation susceptible de dépendre du projet | **BLOQUER** ; les questions indépendantes peuvent être traitées sans effet |
| Mission D5/D6 ouverte, décisions/restrictions applicables incertaines | Effet D4/D5/D6 ou Git dépendant | **BLOQUER** si le propriétaire ne prouve pas la compatibilité |
| Deux `UNKNOWN` (cas Intervencia) | CREATE D4 | **Examiner les DEUX** ; aucun succès après avoir ignoré seulement le premier |
| Sibling d'un autre Pilote ou conversation | Intention courante | Jamais l'utiliser comme autorité ni fuite de contexte ; la concurrence éventuelle sur même ressource est traitée par le propriétaire |
| Tour purement informatif | Question sans effet | Réponse possible sans désactiver les gardes des actions métier |
| Concurrentielle arrivée entre évaluation et sauvegarde | CREATE/REVISE D4 | Le fence/CAS/contrat propriétaire refuse ou réconcilie ; pas deux écritures |

**Attention au cas réel :** le sibling `UNKNOWN` S02-06 avait `semanticQualificationStatus=UNAVAILABLE` et `documentSave=null`, mais concernait aussi un historique d'intention D5. Ne pas le classifier `PROVEN_NO_EFFECT` sans contrôler la chaîne D5 et les autres effets possibles. Si l'état existant ne permet pas de le démontrer, l'implémentation doit **s'arrêter sur cette limite** plutôt que d'introduire une exception codée pour Intervencia.

### 4.4 Contrat de réalisation S05, sans nouveau moteur

- Réutiliser `conversation/turn-command.ts` et l'orchestrateur `conversation/service.ts` ; introduire au maximum une fonction de **politique pure** proche de cette frontière, lisible et testable, **pas** un second état durable ou moteur d'orchestration.
- Exploiter les contrats **existants** de journal/identité/qualification et les reconciliations des propriétaires ; ne pas muter un `UNKNOWN` sur le seul résultat d'une inspection.
- Aucun statut `ABANDONED`, `SUPERSEDED`, timeout terminal, migration, état de mission ni nouveau HumanDecision **par défaut**. Un besoin démontré de nouvel état, d'acte humain ou de persistance = **STOP + dossier d'arbitrage**, avant code.
- L'observabilité doit indiquer **toutes** les clés bloquantes (expurgées, pas nécessairement affichées brutes au Pilote), leur nature, l'étape où le blocage a été appliqué et l'absence ou présence d'appel propriétaire.
- L'ordre de tri des bloqueurs doit être explicite et reproductible. Le `clientPendingHint` reste une aide UX, **jamais une sélection faisant disparaître les autres blocages**.
- **Ne pas** élargir `allowOwnerEffects` globalement sans vérifier ses usages D2/D4/D5/D6 ; isoler la décision par intention/contrat propriétaire. Si le code local ne permet pas cette granularité sans réarchitecture, STOP pour nouvelle qualification.

## 5. Volet B — D3/D4 : proposition canonique, fence et fidélité du contenu

### 5.1 Défaut précis et frontière d'autorité

Le candidat local comporte `documentProposal` (sortie structurée Nora), `documentSource` (ancien message), une fence `sfia-document` dans `replyDraft`, `canonicalizeDocumentProposal`, `confrontProposalWithFence`, `admitDocumentCommand`, `sealAndApplyDocumentCommand` et `savePreparationDocument`. Le test vierge a confronté deux versions du même Markdown dont une seule portait un LF terminal ; le garde a refusé correctement selon l'égalité stricte, mais à tort pour une différence de sérialisation.

**Choix de conception candidat :** pour une proposition **same-turn**, l'autorité de contenu **à l'intérieur du tour** est le `documentProposal` canonique et durable après validation de son rattachement à la demande USER. La fence est une **représentation sérialisée de cette identité**, pas une seconde autorité autonome. Pour une création depuis l'historique, la source d'origine admissible est le **message assistant antérieur, résolu sous droits et lié au message USER actuel** ; elle n'est jamais remplacée silencieusement par une nouvelle rédaction du modèle.

**Limite absolue :** une sortie `documentProposal` cohérente avec sa propre fence ne prouve pas à elle seule que Nora a copié mot pour mot un long texte exact fourni par le Pilote. Lorsqu'une portion littérale USER est **délimitée sans ambiguïté par un contrat existant**, vérifier la fidélité de cette portion au contenu à sceller ; si elle n'est pas identifiable de manière sûre, **ne pas annoncer une fidélité octet-à-octet automatique**. Le produit doit soit utiliser une source littérale effectivement déterminable, soit faire valider la proposition avant un effet qui exigerait cette exactitude. **Ne pas créer en cachette un nouveau parseur heuristique du langage USER.** Besoin d'un nouveau protocole de saisie littérale = STOP et gate de conception.

### 5.2 Algorithme borné : aucune normalisation générale

1. Identifier le cas `PRIOR_ASSISTANT_MESSAGE` ou `SAME_TURN_SNAPSHOT`, sans mélanger les deux. Contrôler Pilote/préparation, statut et provenance de la source.
2. Canonicaliser **titre et corps sans altérer `contentMarkdown`** ; vérifier H1, taille, source et empreinte selon le contrat actuel.
3. Scanner les fences contractuelles de la réponse source. **0 fence** : matérialisation structurée depuis la proposition canonique **seulement si le contrat existant le permet**. **Plus d'une**, fence malformée, metadata incohérente, closer manquant : **refuser**.
4. Pour une fence valide, accepter :
   - égalité exacte du titre et du corps ;
   - **ou exclusivement** le cas structurel prouvé : contenu de `documentProposal` ne se terminant pas par LF et corps extrait égal au contenu canonique + **un seul** LF final servant de séparateur avant le closer ; titre identique et aucune autre différence. Pour une fence structurée `chars`/`pair-sha256`, utiliser d'abord sa normalisation et vérification existantes ; ne pas appliquer un retrait supplémentaire.
5. Sur la seule variante structurelle autorisée, **reconstruire une unique fence structurée déterministe** via `serializeProposalFence` depuis l'autorité canonique, puis la **réextraire** et vérifier titre, corps, longueur et empreinte. Ne jamais supprimer silencieusement une fence substantiellement différente.
6. Sceller durablement `DocumentCommandBinding` **une seule fois** avant mutation, avec identités USER, commande, intention, préparation, source, empreintes, corrélation et propriétaire. Reprise : conserver la même identité et le même contenu, jamais requalifier avec une nouvelle sortie libre.
7. Laisser `sealAndApplyDocumentCommand` / D4 appliquer ses contrôles de propriétaire, révision/concurrence et idempotence. Un résultat `AVAILABLE` n'est restituable qu'après confirmation propriétaire.
8. Construire la réponse persistée de façon que l'ajout d'un ACK **ne coupe pas ou ne déplace pas la fence**. Réextraire la proposition à partir du message final persistable avant commit du tour. Conserver une lecture valide pour les futurs `PRIOR_ASSISTANT_MESSAGE`.

### 5.3 Cas non négociables

| Cas | Verdict cible |
| --- | --- |
| `documentProposal` et fence byte-exact après décodage contractuel | ADMIT, sous autres gardes |
| Same-turn 433 unités JS + fence 434 avec **exactement** un LF séparateur | ADMIT après sérialisation et round-trip strict |
| Proposition finissant réellement par LF, et fence ajoutant un second LF non contractuel | REFUS ou vérification explicite du séparateur ; **pas** de double `trim` |
| Titre/H1, paragraphe, Unicode, espace interne, sections ou empreinte diffèrent | REFUS `PROPOSAL_SOURCE_CONFLICT` ou code existant approprié |
| `chars` ou `pair-sha256` structurés incohérents | REFUS fail closed |
| Deux fences, fence incomplète, nested fences ambiguës | REFUS, zéro écriture |
| Source historique autre Pilote/autre préparation/message non terminal | REFUS, zéro écriture |
| Autorisation absente, demande négative, ambiguïté de cible/document | REFUS ou clarification, zéro écriture |
| Révision `REVISE` | Section/cible/baseRevisionId contrôlées, CAS conflit conservé, aucune section non demandée modifiée |
| Rejeu même commandId/intent/correlation | Même document/révision, pas de duplicata |
| Réponse utilisateur après opération | ACK fondé sur effet réel et source finale toujours récupérable |

**Interdit :** `trim()`, `trimEnd()`, `normalizeWhitespace()`, conversion CRLF globale ou remplacement autoritaire de la fence comme correctif générique ; une différence voulue de fin de ligne **est du contenu**. Le serializer structurel existant constitue la base : pas de format parallèle `sfia-document-v2` sans gate.

## 6. Vérité applicative, états et UX minimale

Le défaut `PROPOSAL_SOURCE_CONFLICT` a produit une phrase : « Studio a exécuté l'acte documentaire et a refusé l'écriture », alors que `d4_attempted=false`. Le défaut S05 a produit `UNKNOWN / NO_EFFECT_OBSERVED` alors que l'effet n'a pas été appelé. **Le statut du tour Nora (`COMPLETE`) est distinct du statut d'effet D4.**

| Situation réelle | Message Pilote attendu | Action permise |
| --- | --- | --- |
| Intention qualifiée, S05 bloque avant propriétaire | « Création non exécutée : opération antérieure à clarifier/reconcilier » + chemin de reprise réellement disponible | Aucune écriture ; pas `UNKNOWN` trompeur sur la transaction D4 |
| Proposition refusée en précontrôle | « Création non exécutée : proposition documentaire incompatible/invalide » | Pas `savePreparationDocument` ; affichage cause qualifiée |
| `seal/admission` refuse avant écriture | « Création non exécutée : contrat/autorité non admis » | Aucune nouvelle mutation |
| Propriétaire tente l'effet et retourne `FAILED` | « Tentative échouée », cause réelle | Reprise uniquement selon contrat et état réconcilié |
| Propriétaire retourne `CONFLICT` | « Conflit de version/contenu » | Requalifier cible/base, pas écraser |
| Tentative engagée sans issue sûre | « Résultat inconnu : vérification nécessaire » | Réconciliation même corrélation, pas nouveau CREATE |
| `AVAILABLE` document/révision persistés et relus | « Document créé/révisé », ID, révision, accès consultable | Affichage bibliothèque et lecture/reprise réelle |

**Compatibilité :** réutiliser les statuts DB et les contrats API existants tant qu'ils permettent une restitution loyale. `NOT_EXECUTED` peut être une **catégorie d'affichage fondée sur `d4_attempted=false`**, sans nouveau statut DB. Une modification de schéma/public enum, ou l'obligation d'un nouvel état durable, déclenche **STOP + gate**, pas une création autonome par Cursor.

**Composition finale :** texte de Nora = conduite cognitive ; bloc D4 = verdict applicatif seul ; ne pas laisser deux conclusions contradictoires coexister. L'observabilité porte la distinction `qualification_kind`, `pendingEffectBlocked`, `preflight/admission`, `d4_attempted`, `documentSave`, `source/sha` et `ack_kind`, sans fuite de secrets ni de contenu sensible.

## 7. Réserve sas avant projet — qualification requise, pas de cause inventée

Le sas `T-D4-NEUF-01` (`prep_1e2c0adc…`) a retourné `NORA UNKNOWN` : Nora a annoncé qu'une préparation sans projet et ses outils cognitifs read-only ne permettaient pas d'écrire D4. Or `savePreparationDocument` autorise `ctx.project?.id ?? null`. **Le propriétaire D4 supporte un document avant projet ; le chemin d'orchestration dans le sas n'est pas encore prouvé.**

Le futur pré-check local devra, **sans mutation**, identifier le tour exact et ses champs `qualification`, `nextTurnKind`, `documentAct`, `documentProposal`, `pendingEffectBlocked`, `documentSave`, la projection de capacité fournie à Nora, le contexte sas et l'existence d'un projet. Il devra distinguer :
- modèle qui refuse cognitivement avant qualification ;
- qualification `UNAVAILABLE` ou `NEEDS_CLARIFICATION` ;
- garde ou admission D3 bloquée par absence de `projectId` ;
- capacité D4 réellement indisponible dans le sas ;
- manque de source contractuelle.

**Règle figée :** l'absence de projet ne doit pas, à elle seule, interdire le document de préparation si l'acte USER et D4 sont admissibles. Nora n'écrit pas directement ; Studio gouverne l'effet. Il ne faut **ni exiger artificiellement une création D2 ni fabriquer un projet** pour fournir D4.

**Gate de qualification :** si la cause exacte reste introuvable en lecture seule ou impose une nouvelle frontière d'autorité/projection, **STOP et retour ChatGPT/Morris avant code**. Il n'existe actuellement aucun GO permettant à Cursor de fabriquer un outil D4 d'écriture pour Nora.

## 8. Blast radius — surfaces et garanties à préserver

| Zone | Risque de régression | Limite de correction / preuve |
| --- | --- | --- |
| `conversation/service.ts` | Garde S05 et tentative D4, D5/D6 adjacentes, ordre, propriété, ACK | Pas de déblocage global ; tests multi-intentions et effets négatifs |
| `turn-command.ts` / DB | Qualification durable, leases, siblings, UNKNOWN, ownership fencing | Pas de nouveau statut/migration ; comparaisons et CAS |
| `document-command.ts` / `document-act.ts` | Sources, fences, empreintes, binding, délimiteurs Markdown | Pas de `trim` générique ; diff exact, round-trip, fail closed |
| `semantic-qualification.ts` / `nora-adapter.ts` | Sortie structurée, même-tour vs ancien message, refus cognitif sas | Pas de second classificateur lexical ; schéma compatible SDK |
| `domains/document/service.ts` | Création/révision, corrélation, révision, propriété, `projectId=null` | Conserver le propriétaire/idempotence, pas de mutation sans fence |
| `domains/preparation` / D2 | Continuité sas→projet, source et mémoire | Aucun projet créé implicitement |
| D5/D6 | Cycles, restrictions, HumanDecision, cible et autorité | Verrouillage conservé si effet ou dépendance indécidable |
| D7/D9 | Publication depuis une version D4, droits Git | Aucun effet Git nouveau ou autorisation implicite |
| UI Travail/Sas/Documents | ACK fidèle, états, révisions, reprise, multi-session | Capture navigateur, lecture du document et de sa révision |
| OBS / tests | Meta S05 non persistée selon diagnostic ; faux PASS tests isolés | Traces consultables, matrices positives et négatives |
| Données RECETTE | Deux anciens UNKNOWN, risque doublon et perte de preuve | **Zéro nettoyage** ; nouveau candidat/version/lane après GO |
| Docs R2/R4/ML4C | Contradiction code/document, choix normatif caché | Synchronisation as-built/tests/delivery-history dans la livraison |

**Compatibilité :** l'évaluation de risque S05 est transversale. Si une modification locale de `allowOwnerEffects` change D2/D5/D6 sans preuve, **STOP**. La comparaison documentaire reste séparée de cette politique, mais les deux doivent passer un test intégré sur le même candidat.

## 9. Matrice de preuves et non-régression — oracles bloquants

| ID | Scénario | Oracle et preuve |
| --- | --- | --- |
| QA-01 | Projet vierge : CREATE même tour | 1 document `AVAILABLE`, ID, révision 1, corps exact, ouverture bibliothèque |
| QA-02 | Same-turn sans LF final vs fence avec un LF structurel | Aucun faux `PROPOSAL_SOURCE_CONFLICT`, empreinte/round-trip exacts |
| QA-03 | Titre/H1 ou contenu réellement différent | Refus pré-effet, zéro document/révision |
| QA-04 | Métadonnées `chars`/`pair-sha256` fausses, fence multiple/tronquée/nested | Refus sans effet, aucun fallback silencieux |
| QA-05 | Unicode, CRLF, LF terminal voulu, blocs code imbriqués | Zéro altération octet/chaîne sur le contenu autorisé |
| QA-06 | Message assistant après ACK puis relecture source | Fence encore parseable, aucune fermeture perdue |
| QA-07 | Intervencia : deux `UNKNOWN` historiques dont S02-06 | Les deux évalués ; CREATE indépendant possible **seulement après preuve de non-risque** |
| QA-08 | Un `UNKNOWN` avec effet réellement incertain | Blocage conservé ; reprise sans nouveau `CREATE` |
| QA-09 | `RUNNING` concurrent, same/diff intents, double clic, ACK perdu | CAS et corrélation empêchent doublon ; aucune autorisation par simple hint UX |
| QA-10 | D5/D6 et D2 pending pendant mutation D4 | Aucun cycle/projet/décision non autorisé ; conflits détectés |
| QA-11 | CREATE depuis ancien message, conversation longue + changement de session | Exacte source d'origine, autorisation courante, ID/révision, pas de re-génération |
| QA-12 | REVISE section, version concurrente et baseRevisionId divergent | Révision unique ou `CONFLICT`, aucune autre section écrasée |
| QA-13 | Document D4 avant création projet (sas vierge) | Préparation autorisée, document retrouvable, puis continuité sas→projet |
| QA-14 | Sas sans acte, projet non créé | Aucun projet/cycle/Git provoqué par une simple proposition |
| QA-15 | Pilote distinct, préparation étrangère, source refusée | Aucun effet, aucun contenu/identifiant d'autrui diffusé |
| QA-16 | Nora `COMPLETE` mais précontrôle refuse | « Non exécuté », pas « a exécuté » ; `d4_attempted=false` |
| QA-17 | `UNKNOWN` propriétaire véritable et reprise/readback | Ne pas afficher `AVAILABLE` sans document et révision vérifiés |
| QA-18 | Publication Git à partir du nouveau document | Document/révision D4 corrects ; **aucune publication** sans GO Git distinct |
| QA-19 | S05 : plusieurs bloqueurs ordonnés, client hint faux | Tous traités, raison déterministe, aucun oubli de garde |
| QA-20 | Ancienne commande sans qualification/trace exploitable | Fail closed explicite ; aucune exception « vieux UNKNOWN = sûr » |

**Étages de preuve obligatoires :**
1. UNIT purs pour la politique de risque, parsers/serializers, statuts ACK et matrices positives/négatives.
2. PostgreSQL DEV/E2E isolé pour réservations, corrélations, CAS, ownership, `UNKNOWN`, effets réels, lecture/révision ; jeu de données de régression construit **uniquement en DEV/E2E**, pas dans RECETTE.
3. BROWSER sur un SHA/build DEV isolé : sas, projet, bibliothèque, refresh, refus, concurrent, erreur.
4. LIVE Nora sur environnement autorisé avec identité de fournisseur et traces ; distinguer ces preuves de `TEST_BOUNDARY` et des tests déterministes.
5. RECETTE Morris sur **nouveau candidat figé après GO** : rejouer d'abord QA-01 / T-D4-NEUF-02, puis S03-01 sur état historique conservé, puis sas QA-13, et enfin régression élargie. Aucun PASS par propagation des scénarios non exécutés.

**Exit obligatoire :** ne pas considérer `S03-01 PASS` si un `UNKNOWN` historique est simplement ignoré ou nettoyé ; ne pas considérer `T-D4-NEUF-02 PASS` si la proposition est enregistrée altérée ; ne pas considérer sas validé à partir de la seule capacité `projectId=null`. Les deux problèmes doivent aboutir à un D4 inspectable et récupérable, sans nouveaux effets non autorisés.

## 10. Séquencement du futur delivery — un macro-lot, exécution bornée

**Macro-lot proposé :** « Fiabilité de la création, révision et continuité documentaire de Nora », capacité résultat unique, **deux sous-périmètres techniques sans merge autonome ni code parallèle sur `service.ts`**.

| Phase | Instruction cible pour le futur contrat Cursor | Gate |
| --- | --- | --- |
| P0 — Preflight source | Vérifier branche/HEAD/tree/parent, code local exact, diff par rapport à `67bf6b0b`, statut local, ENV-01 et toutes les données read-only nécessaires au classement S05/sas | Divergence ou preuve manquante structurante = **STOP**, aucune édition |
| P1 — Intégrité documentaire | Implémenter **uniquement** le traitement du séparateur structurel borné, la source canonique, le round-trip et les refus stricts ; ajouter QA-02 à 06 | Tests négatifs obligatoires avant P2 |
| P2 — S05 | Implémenter la politique de décision **sur tous les bloqueurs**, avec critères démontrables, sans effet débloqué au hasard ; conserver les fences propriétaires ; QA-07 à 10, 19–20 | Si absence de preuves durables ou API propriétaire insuffisante : **STOP** et arbitrage |
| P3 — Intégration et vérité | ACK fidèle, compositions persistées, observabilité, continuité sas/projet **uniquement si P0 a prouvé sa cause** ; synchroniser interfaces/documentation | Si besoin DB/contrat public, STOP |
| P4 — Qualification intégrée | UNIT, PG, BROWSER, LIVE borné en DEV ; comparaison aux 20 oracles, tests transverses D2/D5/D6/D7/D9 ; lint/type/build ; rapport | Pas de mutation RECETTE sans GO spécifique |
| P5 — Packaging | Revue intégrateur unique, as-built et delivery-history synchronisés, diff/sha/tree, revue ChatGPT du pack SFIA | Aucun push produit, PR, merge ou promotion implicite |

Le contrat Cursor final devra être **instancié depuis le template SFIA v2.6 relu sur Git** ; profil Critical et Review Pack FULL/Handoff L3 si rapport demandé. Il devra spécifier la branche, l'allowlist exacte après P0, les transformations permises, les invariants, les fonctions interdites, les tests et STOP. **Cursor ne peut ni choisir une autre option d'architecture ni créer un « helper » transversal qui élargit le périmètre sans retour.**

## 11. Conditions d'arrêt qui empêchent une correction dangereuse

| STOP | Condition et décision imposée |
| --- | --- |
| G-01 | Worktree candidat `d936da81` non disponible, tree/parent non conformes ou statut local ambigu → **ne pas coder** |
| G-02 | Impossible de prouver pour les anciens `UNKNOWN` l'absence de conflit ou de mutation possible → **ne pas débloquer** ; établir diagnostic propriétaire complémentaire |
| G-03 | S05 exige nouvelle machine d'états, table, migration, politique HumanDecision ou changement d'autorité → **STOP pour gate Morris** |
| G-04 | « Correction » du newline modifie un caractère de contenu non prouvé structurel ou saute une vraie divergence → **STOP**, garder fail closed |
| G-05 | Source USER littérale non délimitable sans ambiguïté alors que fidélité exacte revendiquée → **pas d'effet basé sur une reformulation supposée exacte** ; clarification contractuelle requise |
| G-06 | Correction implique changer un contrat API public, statut DB ou sortie SDK sans preuve de compatibilité → **STOP pour qualification dédiée** |
| G-07 | Sas : cause non identifiée ou correction requérant outil Nora mutatif, projet artificiel ou pivot D2/D4 → **STOP**, ne pas inventer |
| G-08 | Échec d'un test de sécurité, concurrence, propriété, idempotence ou une vraie différence fence acceptée → **aucun candidat RECETTE** |
| G-09 | Code/document contradictoire, autres effets impactés non testés, droits interprojets incertains → **KNOWN GAP / NOT READY** |
| G-10 | Demande de déploiement, nettoyage RECETTE, Git REAL, commit/push produit, PR, merge ou promotion sans mandat distinct → **STOP** |

L'ancien projet Intervencia et les deux `UNKNOWN` sont **des preuves à conserver**. Pas de purge pour produire un « succès » artificiel.

## 12. Validation documentaire, dette/exit et statut de sortie

**Travail réalisé ici :** préconception technique argumentée ; revue de sources Git, des deux diagnostics et du diff Q1 ; résultat utilisateur Morris fixé ; invariants, politiques candidates, cas limites, surfaces d'impact, critères de sortie et STOP définis.

**Non réalisé :** inspection directe du HEAD local `d936da81`, lecture transactionnelle du tour sas, nouvelle recette, tests mutatifs/LIVE, correctif, évolution du schéma, revue des effets au runtime, validation normative D2 par Morris, publication/merge produit.

**Dette identifiée et exit :**
- S05 `UNKNOWN` : classification actuelle globale ; exit = décisions par conflit démontrable, tests de préservation anti-doublon, réconciliation et vérité UX.
- Fence D4 : double représentation du même contenu ; exit = identité canonique, séparateur vérifiable, round-trip et refus des divergences réelles.
- Message final `DOCUMENT_PROPOSAL_UNCLOSED` : sortie non récupérable ; exit = source finale parseable après ACK.
- Sas : frontière cognitive/effet non qualifiée ; exit = diagnostic read-only puis comportement sas CREATE/REVISE vérifié.
- Observabilité S05 : meta annoncée mais non retrouvée ; exit = trace corrélée fiable, sous limites de confidentialité.

**Statut de cette publication : `DOCUMENTED / TECHNICAL DESIGN CANDIDATE`.** Les causes du 14/11 sont `BEHAVIOR PROVEN` à la portée des tours Cursor inspectés ; la correction est **NON IMPLÉMENTÉE** ; la couverture et l'adoption sont **NON ACQUISES**.

**Next gate :** avant tout prompt de correction, vérifier les STOP G-01..G-07 sur l'état exact du candidat et qualifier le sas. Si ces éléments ne sont pas levés, le seul prompt Cursor admissible est un **complément de diagnostic read-only**, pas un mandat de code. Le GO documentaire de Morris autorise la publication du présent **candidat** sur branche dédiée ; il n'autorise ni son adoption comme doctrine ni l'exécution technique.

---
*Fin de conception corrective candidate — SFIA Studio Next / ML4C, 14 novembre 2026.*
