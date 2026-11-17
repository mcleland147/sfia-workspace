# SFIA Studio Next — Cadrage produit de la composition visuelle conversationnelle

**Statut : REVIEWED BY MORRIS — BASE DOCUMENTAIRE DE TRAVAIL APPROUVÉE LE 17/11/2026 ; orientations techniques détaillées encore CANDIDATE / À ARBITRER, aucune architecture ADOPTED.**  
**Date de rédaction : 17 novembre 2026.**  
**Périmètre :** SFIA Studio Next, R5 / ML4D, Ensemble 05 « Travail avec Nora ».  
**Objet :** inscrire l'ambition, l'historique des constats, les attentes, les limites et la trajectoire d'une restitution conversationnelle visuelle de qualité premium.  
**Documents liés :** [02 — Conception fonctionnelle & UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture et solution technique candidate](03-architecture-solution-technique.md).

> **Règle de lecture.** Les décisions de conception déjà consignées dans les sources Next sont signalées **VALIDATED SPEC**. Les orientations nouvellement détaillées dans le présent dossier restent **CANDIDATE / À ARBITRER**. L'expérience E05 et les captures de recette ne sont ni une preuve d'adoption ni un contrat pixel-final. Le dossier est publié sur la branche documentaire candidate ML4D, distincte de `main` ; il ne vaut ni GO Cursor, ni PR, ni merge, ni clôture E05/Gate C.

## 1. Synthèse de vision

Le Pilote travaille naturellement avec Nora dans un fil de conversation unique. Nora comprend la demande, recherche les sources pertinentes, raisonne, distingue les faits, hypothèses, recommandations, décisions humaines et résultats prouvés, puis **compose une restitution utile et proportionnée**. Cette restitution peut juxtaposer — au sein d'une même réponse — texte, comparaisons, parcours, relations, indicateurs véritablement fondés, références et pistes de poursuite. L'enrichissement visuel ne devient jamais un rituel imposé.

**Ambition de qualité :** le rendu doit atteindre le niveau de soin d'une interface numérique premium : direction artistique cohérente, hiérarchie éditoriale, respiration, typographie soignée, contrastes maîtrisés, parcours intelligibles, composants adaptés au contenu et à la largeur disponible. Le Pilote doit **avoir envie de lire** la réponse. Les représentations graphiques doivent augmenter la compréhension — non produire un effet « décoratif », scolaire ou low cost.

**Formule de responsabilité cible :** *Nora décide comment communiquer intelligemment ; Studio garantit une restitution graphique maîtrisée, ou une alternative textuelle complète et soignée lorsque la représentation demandée n'est pas fiable.* La liberté de raisonnement de Nora ne dépend pas des limites de mise en page du navigateur ; inversement, Nora n'est pas chargée de calculer les coordonnées, icônes, tailles ou bordures.

**Prise de position :** privilégier l'architecture **B — système de composition visuelle adaptatif avec familles de composants maîtrisées** et bibliothèques spécialisées à la demande ; **ne pas la déclarer ADOPTED** avant arbitrage et preuves. L'architecture C, moteur libre très général, serait une extension potentielle à réexaminer si les usages le justifient, non un préalable.

## 2. Pourquoi ce chantier existe : chaîne des constats

1. **Vision initiale Next (R1/R2).** Studio est centré sur la relation Pilote–Nora : dialogue fluide, restitution contextualisée, informations qualifiées, autorité humaine et continuité. R2 RG-CONV-006 requiert déjà la restitution fidèle et proportionnée, sans trame imposée. L'UX ML4D du 17 novembre valide les principes A–F : liberté de composition, proportionnalité, hétérogénéité dans un message, fidélité, interactions gouvernées, continuité.
2. **E05 : premiers essais de composition visuelle.** Un candidat local, rapporté dans les handoffs, expérimente sept familles (`text`, `comparison`, `sequence`, `relations`, `synthesis`, `choices`, `references`). Il illustre une possibilité technique ; il ne démontre pas la qualité attendue.
3. **R01 à R03, recette utilisateur.** Les restitutions textuelles/structurées et la comparaison ont montré leur intérêt ; R03 faisait apparaître une réserve de richesse et de répétition visuelle.
4. **R04 : échec UX du diagramme/relations.** Diagramme illisible, nœuds trop petits, libellés tronqués, vocabulaire interne et liste technique de dépendances. Dans le code du candidat reproduit dans un ancien handoff, le renderer choisit un SVG radial fixe de 360×220 pour au plus sept nœuds, réduit les labels, puis expose une liste avec `n.kind` et des identifiants d'arêtes : ces choix expliquent matériellement une partie du résultat observé. Le correctif ne saurait se résumer à retirer `HYPOTHESIS` ou à agrandir les cercles.
5. **R05 : réponse composite réussie à l'écran, UX insuffisante.** Une nouvelle réponse R05 a été affichée dans les captures Morris : comparaison B/C, parcours, risques et recommandation. L'agencement des parcours, les encadrés de risques uniformément rouges, les icônes incohérentes et les redondances ont confirmé l'insuffisance de direction artistique. Les captures sont des preuves visuelles de cette session, pas des preuves exhaustives de fournisseur, persistance ou effet métier.
6. **Incident R05 distinct :** précédemment, des tours ont terminé `UNKNOWN` après contact fournisseur, et la reprise UI bouclait ; un candidat correctif local et un déploiement RECETTE ont été rapportés. La cause détaillée de l'exception fournisseur n'est pas établie ; **ne pas confondre robustesse du rendu visuel avec reprise cognitive ou fiabilité du fournisseur**.
7. **Explorations Figma.** Deux écrans d'exploration ont été créés pour la synthèse et le parcours ; Morris a précisé que la cible se situe à un niveau artistique sensiblement supérieur. Ces écrans sont des **illustrations non approuvées**, pas le contrat graphique final.

**Conclusion de ce REX :** l'idée n'est pas rejetée. C'est la manière de produire et contrôler le rendu qui doit changer. Une suite de micro-retouches E05 resterait insuffisante.

## 3. Valeur pour le Pilote

La composition visuelle apporte une valeur spécifique sur cinq tâches courantes : **comprendre** une situation complexe, **comparer** plusieurs trajectoires, **suivre** dépendances/jalons, **qualifier** risques et incertitudes, puis **arbitrer** en connaissance de cause. Elle permet un balayage rapide du message et un approfondissement naturel sans transformer la conversation en tableau de bord permanent.

Le Pilote n'a pas à spécifier « fais-moi des cartes » ni à comprendre un système de templates. Une demande « Fais-moi la synthèse globale du projet » doit produire une réponse dont **chaque section choisit sa forme en fonction de l'information** : quelques paragraphes pour la situation, une comparaison si plusieurs options sont effectivement comparables, un parcours si des dépendances démontrées existent, un rappel discret pour les risques, une recommandation qualifiée, et des choix conversationnels seulement s'ils sont utiles et autorisés.

La richesse graphique est **facultative** : une réponse entièrement textuelle peut être optimale ; une réponse complexe peut alterner texte et visuel. Le contenu déterminant doit rester accessible sans effet graphique.

## 4. Périmètre et hors périmètre

| Inclus dans la capacité cible | Exclus ou conditionnels |
|---|---|
| Restitution **dans le fil Pilote–Nora**, un seul message composite ; synthèses, analyses, comparaisons, recommandations, parcours, arbitrages, risques ; sources et prochaines pistes | Documents longs de cadrage/conception/réalisation : leur production et leur édition restent gouvernées par **Markdown / D4** ; aucun moteur graphique de document universel |
| Différentes profondeurs de réponse ; sections textuelles ou visuelles ; adaptation au contenu et au panneau réel | Obligation de générer systématiquement une carte, un diagramme, un titre standard ou des boutons |
| Familles de composants réutilisables et adaptatifs ; repli lisible et fidèle | Universalisme (« toute forme graphique imaginable »), générateur arbitraire HTML/CSS, nombre illimité de visualisations |
| Lisibilité desktop/mobile/zoom, clavier, lecture accessible, persistance et reprise d'une même réponse | Nouveau moteur de conversation, nouveau domaine d'autorité, HumanDecision automatique, création d'effets à partir de markup |
| Bibliothèques spécialisées **à évaluer** lorsque nécessaires : React Flow + ELK, ECharts, alternatives | Installation ou adoption immédiate de bibliothèques, refonte de D3 ou migration de schéma par inertie |

**Frontière clé :** les réponses conversationnelles et les documents produits sont deux objets différents. Une synthèse peut **référencer** un document Markdown long, pas le transformer silencieusement en une carte.

## 5. Invariants produit souhaités

| ID candidat | Exigence | Qualification |
|---|---|---|
| VP-01 | La forme suit le raisonnement et l'objectif utilisateur ; pas de gabarit imposé de bout en bout | Prolonge les principes A/B validés ML4D |
| VP-02 | Un seul message Nora peut assembler librement texte, représentation, sources et actions pertinentes | Prolonge C/F validés ML4D |
| VP-03 | Aucune information essentielle perdue, masquée ou déformée par un composant ; alternative textuelle complète disponible | À contractualiser et prouver |
| VP-04 | Faits, hypothèses, décisions Pilote, effets réalisés et preuves restent sémantiquement distincts | Hérité R1/R2/UX D |
| VP-05 | Une représentation visuelle est utilisée uniquement quand elle **améliore** le temps/compréhension de lecture | Direction validée, critères à formaliser |
| VP-06 | Studio possède l'exécution graphique : dimensionnement, composants, tokens, layout, reflow, sécurité de rendu | Architecture candidate B |
| VP-07 | Icônes, couleurs et bordures sont signifiantes, sélectives ; aucun alarmisme rouge systématique | Direction artistique à valider Figma |
| VP-08 | Une forme complexe non supportable est **refusée au profit d'un repli élégant** plutôt qu'affichée cassée | Politique à concevoir, tester, arbitrer |
| VP-09 | Le contenu reste lisible après rechargement, changement de largeur et consultation historique | Hérité de F et M1 ML4D ; preuve runtime requise |
| VP-10 | Pas d'action factice ; un choix conversationnel n'est jamais un acte métier/autorisation implicite | Hérité de E, CT-02 et D6 |

## 6. Définition exigeante mais honnête de « fiabilité garantie »

**Trois engagements différents :**

- **Intégrité sémantique (obligatoire).** Le texte canonique, les éléments structurés et leur provenance sont conservés ; si la visualisation n'est pas disponible, la substance reste lisible. Pas de suppression silencieuse d'une option, d'une dépendance, d'une réserve, d'un chiffre ou d'un point d'incertitude.
- **Robustesse d'interface (vérifiable).** Pour les dimensions, navigateurs et familles de composants pris en charge, l'implémentation est testée contre coupure de texte, chevauchement, perte de navigation clavier, reflow impossible et états indécidables. Le comportement hors capacité est défini (repli, défilement prévu, lecture alternative).
- **Qualité artistique/éditoriale (réception humaine).** Des captures peuvent être conformes au CSS mais esthétiquement pauvres, et un graphique techniquement correct peut être inutile. La pertinence de la composition choisie par Nora et la beauté/utilité du rendu sont des axes de qualification **distincts**.

**Limite assumée :** aucun système de composition à contenu libre ne peut garantir « zéro défaut sur toutes les réponses imaginables ». La garantie industrialisable porte sur les **contrats connus et les issues sûres**. On ne doit pas promettre une beauté universelle ni sur-interpréter une suite de tests PASS.

## 7. Trois options évaluées

| Voie | Description | Appréciation |
|---|---|---|
| **A — retoucher E05** | Ajuster couleurs, libellés, icônes, dimensions et SVG existants | **Non retenue comme réponse stratégique à l'exigence Morris** : peut résoudre des bugs urgents mais ne crée pas de direction artistique ni de grammaire robuste |
| **B — composition visuelle adaptative maîtrisée** | Nora propose une structure sémantique section par section ; Studio valide la compatibilité et rend via des familles de composants adaptatives, avec règles et repli | **Orientation recommandée, à valider** : diversité élevée, qualité contrôlable, périmètre adapté aux conversations de pilotage |
| **C — moteur universel de composition** | Studio accepte des structures arbitraires et calcule des scènes/graphes/présentations génériques bien au-delà des formes maîtrisées | **Non prioritaire** : forte complexité, coûts de QA et risques de résultats incohérents, sans garantie d'élégance ; option future seulement sur besoin prouvé |

Dans B, **un composant pour quatre cartes n'est pas un template limité à quatre cartes** : une famille adaptative gère différents nombres, longueurs et largeurs ; lorsqu'elle atteint une limite sémantique ou ergonomique, Studio passe à une variante de représentation ou à une restitution textuelle. Les seuils concrets **ne sont pas encore décidés**.

## 8. Rôles et frontières d'autorité

- **Pilote :** exprime librement sa demande, valide la direction graphique et les arbitrages produit ; conserve la décision métier et la gouvernance Git.
- **Nora / D3 :** investigue, raisonne, organise la réponse, reconnaît les relations et propose **l'intention de présentation par section** ; ne calcule ni pixels ni CSS ; ne transforme jamais sa recommandation en décision ou preuve.
- **Studio / rendu conversationnel :** contrôle les structures, réalise la composition, expose les sources réelles, garantit le comportement d'affichage dans son domaine et le repli ; **ne devient pas un second moteur cognitif**.
- **D4/D6/D7/D8/D9 :** restent propriétaires respectivement des documents, décisions humaines, opérations/tentatives, preuves et accès/ressources ; la visualisation consomme des projections autorisées, ne remplace pas leur vérité.
- **ChatGPT :** cadrage, comparaison, proposition d'architecture et revue ; **Cursor :** réalisation et preuves sous GO spécifique SFIA v2.6 ; **Morris :** gates et adoption.

## 9. Trajectoire macro proposée — un dossier, un macro-lot de livraison

| Étape | Résultat attendu | Gate réel |
|---|---|---|
| **1. Direction artistique** | Restitutions Figma premium dans l'espace Travail, comprenant simple, comparaison, dépendances et réponse composite ; variantes de densité et de largeur | Morris accepte le **contrat visuel** ; explorations actuelles non suffisantes |
| **2. Contrat fonctionnel/technique** | Responsabilités Nora/Studio, règles éditoriales, enveloppe structurée, familles adaptées, repli, provenance, compatibilité D3 | Morris valide les arbitrages structurants ; M5/STOP si schéma nécessaire |
| **3. Construction intégrée** | Composants, intégration, tests, instrumentation, documents de conception synchronisés avec code | GO Cursor spécifique ; aucun push projet implicite |
| **4. Qualification croisée** | Scénarios adverses, responsive, accessibilité, BROWSER/FAKE puis LIVE/REAL borné si nécessaire, Figma↔runtime | Preuves discriminantes ; incident visuel majeur = non conforme |
| **5. Recette produit** | Morris juge **contenu**, **pertinence éditoriale**, **finition graphique**, **continuité**, **fiabilité** ; décision de réception ou réserves | Pas de clôture E05/Gate C/ADOPTED automatique |

Il s'agit de **cinq activités d'un même macro-lot cohérent**, et non de cinq micro-cycles documentaires. Ne pas créer un calendrier artificiel : les estimations « quelques jours » ou « une à trois semaines d'effort » évoquées en exploration ne sont ni un devis, ni un engagement, ni des semaines de présence continue Morris. Une estimation sérieuse suit l'audit d'impact et la référence Figma acceptée.

## 10. Frontières, dépendances et risques

**IN de la construction envisagée :** restitution conversationnelle, composants de rendu, contrat de projection D3 compatible, validation/rendu/repli, tests de géométrie/visuel/usage, continuité et documents synchronisés. **OUT :** refonte générale des propriétaires D1–D9, moteur universel, éditeur de documents, streaming prématuré, nouvelles fonctionnalités métier. Les incidents R05 récupération/fournisseur sont tracés et qualifiés séparément, avec non-régression commune.

**Dépendances :** validation artistique Figma ; examen du code réel au HEAD de la branche candidate ; compatibilité de la génération SDK et du stockage durable ; géométrie de Travail (rail, panneau, compositeur, viewer 50/50), contraintes de sécurité, accessibilité et preuve navigateur. Un changement de schéma durable impose le STOP/gate M5 prévu dans le contrat Next.

**Risques majeurs :** forcer des visuels inutiles ; rendre un diagramme trop dense ; afficher des IDs et états internes ; perdre du contenu au fallback ; imposer un second appel IA ou une seconde autorité ; rendre les tests visuels artificiellement PASS ; ajouter des bibliothèques lourdes sans bénéfice ; confondre le candidat E05 avec `main`.

## 11. Statut et critères de sortie de ce dossier

À cette date : **vision explicitée en conversation**, **UX A–F déjà VALIDATED SPEC dans la source Next**, **architecture B et familles proposées non adoptées**, **direction artistique premium à illustrer et valider**, **candidat E05 testé avec réserves**. Gate C ouvert. Le présent dossier n'ajoute pas de décision rétroactive.

Pour sortir du cadrage, demander à Morris : acceptation du résultat produit et du niveau de qualité visé, du périmètre conversationnel vs Markdown, du principe d'adaptation/repli et de la direction de conception B **sans figer prématurément les bibliothèques ni le modèle physique**.

## 12. Sources primaires consultées

**Git Next — priorité haute :**

- [Vision R1](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/cadrage/vision-produit.md) ; [Conduite des intentions](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/cadrage/conduite-intentions-continuite-cognitive-nora-studio.md).
- [Conduite gouvernée de Nora R2](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) ; [SEF v0.2](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/SEF.md) ; [Roadmap main](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/roadmap.md).
- [Décision ML4C→ML4D du 11/11](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) ; [Conception UX Ensemble 05 — branche candidate](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md) ; [contrat technique candidate](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md) ; [registre de revue](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md).
- [Handoff E05 R05](https://github.com/mcleland147/sfia-workspace/blob/0e078a78f0303f9e99cf174c1caa22aed7629708/sfia-review-handoff/latest-chatgpt-review.md) : **preuve rapportée de candidat local**, rapport de modifications toujours incomplet en diffs ; [ancien handoff E05 avec code de renderer](https://github.com/mcleland147/sfia-workspace/blob/76e7e54ea311f961cc6364de6045a0dfecd02965/sfia-review-handoff/latest-chatgpt-review.md).
- [Exploration Figma non validée](https://www.figma.com/design/4NrIqC7Vfroo00r4pczAPb).

**Sources externes d'appui** : détail et qualification technique dans [03 — Architecture](03-architecture-solution-technique.md). Les constats esthétiques et préférences proviennent des échanges/captures Morris du 17 novembre ; ils ne sont pas présentés comme des décisions Git publiées.
