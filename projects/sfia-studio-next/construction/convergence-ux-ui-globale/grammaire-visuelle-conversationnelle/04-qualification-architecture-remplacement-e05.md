# SFIA Studio Next — Qualification d'architecture : composition conversationnelle adaptative et remplacement d'E05

**Version :** 0.1 — 17 novembre 2026
**Statut :** `DOCUMENTED / ARCHITECTURE CANDIDATE FOR MORRIS REVIEW` — aucune implémentation, aucun ADOPTED
**Périmètre :** R5 / ML4D / Ensemble 05 — *Travail avec Nora*, réponse structurante dans le fil.
**Amont :** [01 — Vision produit](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/01-cadrage-vision-produit.md), [02 — Conception fonctionnelle/UX](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/02-conception-fonctionnelle-ux.md), [03 — Architecture exploratoire](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/03-architecture-solution-technique.md).
**Document complémentaire :** [05 — Contrat de composition et d'admission](05-contrat-composition-nora-studio.md).
**Direction artistique candidate :** [Figma R3 historique, page 06, neuf vues](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2), acceptée dans la conversation pour son orientation, non prouvée en runtime.

> **Portée du mandat.** Morris autorise la préparation autonome du cadrage technique et de la qualification d'architecture, avec revue ultérieure. Il précise qu'E05 peut être remplacé entièrement si sa conservation nuit à la cible. **Ce mandat n'autorise ni suppression effective de code, ni push, ni PR, ni merge, ni Cursor, ni migration, ni promotion.** Les décisions de réalisation et la validation D2 de ce contrat restent à instruire. Les chemins locaux, fichiers staged/untracked et environnement RECETTE ne sont **pas directement observables** ici.

## 1. Résultat attendu et décision d'orientation proposée

**Résultat pour le Pilote :** lors d'une synthèse, d'un diagnostic, d'une comparaison ou d'un arbitrage, Nora construit une réponse juste et cohérente ; chaque section peut rester en texte ou demander une forme visuelle adaptée. Studio fournit une restitution premium lisible sur le fil réel, sans demander à Nora de fixer des dimensions, des positions, du CSS ou des icônes. Si une forme est inadaptée, **la réponse reste entièrement consultable** dans une alternative de lecture.

**Orientation architecturale recommandée : remplacement de la grammaire graphique expérimentale E05, plutôt que son durcissement par incréments.** Retenir la voie B : familles de représentations adaptatives, contrat sémantique versionné, sélection/admission gouvernée et alternatives textuelles. Ne pas entreprendre un moteur universel de dessin arbitraire. Aucun composant, parser ou token E05 n'est à conserver **par principe**. Ce qui relève des responsabilités établies de la conversation, de la sécurité, des sources et de l'autorité métier doit néanmoins être préservé, ou remplacé par une implémentation démontrant les mêmes invariants.

La notion de *remplacement* concerne le **sous-système de restitution** et ses projections candidates, pas la destruction du fil conversationnel D3, des documents D4, des décisions D6, de la reprise D7 ou des preuves D8.

## 2. Sources, Git et états observés

| Source vérifiée | Constat | Limite |
|---|---|---|
| Dépôt `mcleland147/sfia-workspace` | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed`, branche documentaire `docs/next-ml4d-registre-revues-20261116@241a3c52652e341724b7f423fac73f69df3f1a81`, handoff `sfia/review-handoff@0e078a78f0303f9e99cf174c1caa22aed7629708`. | Il s'agit de HEAD **distants**, pas du `HEAD` de la machine RECETTE ou d'un worktree Cursor. |
| SEF v0.2, Roadmap Next, décision du 11/11 | ML4D convergence UX/UI, un macro-lot cohérent, Gate C ouvert ; nouveaux effets/autorités hors périmètre. | La Roadmap `main` au 15/11 indique encore ML4D « NOT STARTED » ; la revue documentaire/UX du 17/11 est plus avancée, sans merge du candidat. |
| UX Travail et contrat technique candidats, branche documentaire | UX-007 Sujet 02 et règles A–F en `VALIDATED SPEC`, M1–M5 validés en orientations ; un message Nora, contexte et droits, provenance, réponses sûres, stabilité, repli. | Contrat d'API/DB/diagrammes physique non adopté. |
| Code `main` | `NoraConversation.tsx` restitue avec `SafeMarkdown`; `nora-adapter.ts` utilise `@openai/agents` avec `outputType: NoraTurnQualificationSchema`; `semantic-qualification.ts` détient la sortie `ml4c-sem-qual-v1` et un `replyDraft` de 12 000 caractères maximum ; `service.ts` gère tours, `resultJson`, idempotence et autorités. | C'est la base distante, **pas** le code local E05. |
| Handoff expérimental E05 figé (Git `76e7e54e...`) | Les fichiers **rapportés** : `domains/conversation/visual-composition.ts` (~1 100 lignes), `components/figma/NoraVisualComposition.tsx` (~634), `NoraSemanticIcon.tsx` (~127), CSS, fixtures, tests, projection. Sept familles expérimentales, renderer de relations radial. | Les sources complètes d'un ancien gel sont incorporées au handoff, mais les fichiers candidats locaux actuels et leur montage effectif ne sont pas relus dans le worktree. |
| Handoff R05 `0e078a78...` | Commit **local rapporté** `e224d6278a050bcfbd369c4008d94af504f81d44` ; correction de la reprise cognitive `UNKNOWN`, maintien de la protection des effets métiers `UNKNOWN`, déploiement RECETTE rapporté. | La cause de l'exception fournisseur R05 n'est pas réputée corrigée ; pas de nouveau verdict sur le rendu visuel. |
| Figma R3 page 06 | **Neuf compositions** : synthèse, parcours/planning, 3 cartes, 5 options/matrice, largeur contrainte, liste 6 étapes, dépendances, arbre conditionnel, flux parallèle. | Référence de design éditable ; ni code, ni tests navigateur, ni validation des données réelles. |

**Statuts actuels :** direction artistique acceptée en conversation ; architecture **CANDIDATE** ; code cible **NON IMPLÉMENTÉ / NON PROUVÉ** ; ensemble 05 non reçu ; Gate C **OPEN**. La recette locale et les modifications de fichiers non publiées sont `NON OBSERVÉES`.

## 3. Diagnostic de l'expérience E05 et stratégie de retrait

### 3.1. Pourquoi ne pas la conserver comme socle

Le code de l'ancien gel E05 fourni dans le handoff présente un `RelationsView` avec canvas **360 × 220**, placement radial par angle, cercles de rayon 28, découpe d'étiquette à environ 16 caractères, rendu des catégories `n.kind` et arêtes sous forme `from → to`. Le parser coupe les graphes au-delà de limites numériques (`MAX_NODES = 10`, `MAX_EDGES = 16`), tandis que la vue bascule en liste au-delà de certains seuils. Le composant de comparaison décide lui-même si cartes et matrice se cumulent à partir des critères/pros/cons. Ces mécanismes sont **cohérents avec un prototype fonctionnel**, mais incompatibles avec notre exigence de contrôle du sens, de densité, de présentation premium et de fidélité.

Les corrections ponctuelles déjà effectuées en E05 (Markdown sûr, traduction des dépendances, dédoublonnage des références) montrent aussi des **invariants importants** à préserver, sans justifier la conservation de la structure de rendu elle-même.

### 3.2. Matrice de traitement — sous réserve de l'audit local

| Élément ou responsabilité | Traitement recommandé | Justification / garde-fou |
|---|---|---|
| `NoraVisualComposition.tsx`, `RelationsView`, radial SVG, compositions en cartes | **REMPLACER** par des familles de restitution conçues depuis les références Figma. | Leurs stratégies de layout et de densité ne répondent pas à la cible. Aucune refactorisation esthétique progressive imposée. |
| `visual-composition.ts` et schéma `e05-visual-composition-v1` | **RETIRER de la chaîne d'écriture nouvelle** ; remplacer par contrat sémantique/versionné M1. | Ancien parser et seuils non transposables ; prévoir **lecture de compatibilité** des éventuels messages anciens avant suppression. |
| Icônes automatiques, tons et classes CSS spécifiques à E05 | **REQUALIFIER, puis SUPPRIMER** lorsqu'elles deviennent orphelines. | Les tokens de shell commun et styles de sécurité ne doivent pas être supprimés avec les styles graphiques E05. |
| Fixtures/tests purement représentatifs des règles E05 | **REMPLACER** par scénarios de fidélité, géométrie, fallback et parcours E05 R04/R05. | Ne pas conserver des snapshots qui figent les défauts. Conserver les **preuves historiques** en Git. |
| Projection canonique D3, IDs tour/message, états finaux, historique | **PRÉSERVER** et réutiliser le propriétaire existant M1. | Pas de deuxième conversation ni de migration par défaut. |
| Choix conversationnels, références D4/D9, provenance et droits | **PRÉSERVER LE CONTRAT**, adapter seulement les points de présentation. | Même origine canonique, expiration et contrôle d'accès. Pas d'action D6 créée par un bloc. |
| Réconciliation `UNKNOWN`, idempotence, pending, brouillon et viewer | **PRÉSERVER LES GARANTIES**, vérifier la non-régression. | Le remplacement visuel n'est pas un mandat de reprise métier ou fournisseur. |
| Éventuelles anciennes projections déjà stockées | **LECTURE SÛRE OU REPLI TEXTE**, jamais suppression silencieuse. | Inspecter les données locales. Si une migration devient indispensable : **STOP / M5 / arbitrage Morris**. |

**Condition de retrait :** Cursor devra d'abord établir le graphe des imports/usages du candidat local, vérifier la compatibilité du stockage ancien, activer le nouveau chemin dans une tranche maîtrisée, passer les tests de non-régression, puis retirer le renderer/parser/styles/tests devenus obsolètes **dans le même macro-lot de réalisation**. Aucun mécanisme graphique E05 et nouveau moteur en concurrence durable. Ne pas supprimer historiques Git, preuves, commandes de reprise ou fichiers communs par confusion de nom.

## 4. Architecture cible proposée — séparation des responsabilités

```text
Pilote → demande libre
   ↓
D3 / Nora : sources autorisées → raisonnement → sections sémantiques
          + éventuelle intention de représentation pour chaque section
   ↓
Projection du tour / message existante (M1), état final, références, identités
   ↓
Contrat de composition versionné + validation de l'intégrité du contenu
   ↓
Politique Studio d'admission : famille compatible ? vérité/provenance ? densité ? largeur ?
   ├─ NON / erreur : représentation de lecture intégrale, sûre et accessible
   └─ OUI : variante choisie parmi des familles maîtrisées
                  ↓
             React/CSS → comparaison, listes, cartes, tableaux, parcours simples
             moteur de layout dirigé → diagrammes justifiés uniquement
             graphiques quantitatifs → seulement si données vérifiées
                  ↓
             même fil Nora, même message, rendu lisible et actions gouvernées
```

| Couche | Responsable | Entrées / sorties | Interdictions |
|---|---|---|---|
| Raisonnement et narration | Nora / D3 | Contexte et sources → sections de contenu, relations, incertitudes, indications de représentation. | HTML/CSS/SVG arbitraires, coordonnées, budgets de pixels, nouvelles décisions métier. |
| Écriture et version du tour | Propriétaire conversation D3 existant | Identifiants, finalisation, état `UNKNOWN`, stockage/rélecture, référence du contrat. | Seconde source de vérité, second moteur de conversation. |
| Validation sémantique | Studio / projection | Rejette structure mal formée, arêtes orphelines, citations non résolues ; conserve contenu de repli. | Réécrire des faits ou corriger un raisonnement par heuristique. |
| Admission et variantes | Studio / présentation | Décide `cards`, `matrix`, `steps`, `relations`, `text` selon critères documentés et largeur effective. | Soumettre la géométrie à une seconde IA ou supposer qu'un mot-clé déclenche une carte. |
| Mise en page | Composants React/CSS/graphes | Taille intrinsèque, alignements, connexions, zoom/lecture alternative, focus et reflow. | Troncature d'informations essentielles ou collisions acceptées silencieusement. |
| Sources, actions, documents et décisions | D4/D6/D7/D8/D9 | Références canoniques vérifiées, droits actuels, clics typés séparés des décisions. | « Carte validée » = autorisation d'effet. |

### 4.1. Principe de vérité : une seule structure de sens

La réponse ne doit pas être générée deux fois : une version prose et une version graphique dont les faits divergent. **Cible** : un contenu sémantique canonique suffisant pour construire une lecture textuelle complète et, facultativement, des vues spécialisées. Les deux présentations sont **des projections** du même contenu ; les propositions de Nora restent des recommandations, non des faits ou décisions.

**Compatibilité à résoudre au pré-check M1 :** sur `main`, `NoraTurnQualificationSchema` comporte `replyDraft` (chaîne par défaut vide, longueur plafonnée à 12 000 caractères) et `outputType` porte déjà la qualification structurée du tour. Deux voies techniques sont recevables au stade candidat : (i) étendre la qualification par des sections facultatives et générer/contrôler un `replyDraft` de compatibilité à partir du même contenu ; (ii) conserver `replyDraft` comme texte canonique et n'autoriser une projection visuelle complémentaire qu'avec preuve de cohérence, un mécanisme de repli obligatoire et aucune donnée factuelle ajoutée par le graphique. **La voie (i) est préférée comme cible de vérité unique**, mais ne devient pas une décision tant que son coût de schéma, sa fiabilité fournisseur et l'absence de migration n'ont pas été démontrés. Le contrat [05](05-contrat-composition-nora-studio.md) formalise ces deux modes et le point de STOP.

### 4.2. Frontière de livraison

**IN :** sélection éditoriale utile, projection compatible D3, renderer conversationnel et composants de présentation, alternatives intégrales, audit et retrait E05, tests de décision et de géométrie, conformité Figma, synchronisation de la documentation au code.

**OUT :** éditeur Markdown documentaire D4, génération automatique de diagrammes de toute forme, création d'autorités, nouveau workflow D6/D7, moteur graphique générique, refonte du backend conversationnel non motivée, nouvelle activité IA de post-traitement par défaut, migration implicite, mécanisme de streaming nouveau non exigé par M2.

## 5. Architecture des familles graphiques et choix de bibliothèques

| Famille | Source de design | Stratégie V1 recommandée | Limites et repli |
|---|---|---|---|
| Narration/synthèse/risques/recos | Figma 01, règles GV-01/02/07/08 | Markdown sûr, typographie éditoriale, emphase sélective et proportionnée. | Texte toujours admis, jamais carte obligatoire. |
| Alternatives, comparaison, matrices | Figma 01/03/04/05 | React + HTML `table`/CSS Grid et `@container`, hauteur auto, `min-width:0`, `overflow-wrap:anywhere`. | Trop de critères/options/densité : matrice adaptée ou liste structurée complète. |
| Étapes, chronologie et planning | Figma 02/06 | HTML sémantique ordonné, CSS Grid/Flex et éléments SVG sobres lorsque nécessaires. | Nombre/largeur/texte incompatible : parcours vertical ; chronologie seulement si l'ordre est étayé. |
| Graphe de dépendances | Figma 07 | **Évaluer deux prototypes sur le même fixture** : HTML/SVG + ELK vs React Flow en lecture seule + ELK. Mesurer et choisir l'un, pas les deux. | Graphe trop dense, cycles, labels et arêtes impossibles : liste de dépendances explicitée, sans IDs techniques. |
| Arbre de conditions et flux parallèle | Figma 08/09 | Même moteur de disposition dirigée si la sémantique le justifie ; nœuds enrichis avec libellés humains et relations orientées. | Arbre non fiable : conditions et issues en liste ; ne pas inventer de « oui/non » validé. |
| Données quantitatives | Pas encore de maquette spécifique validée | **Différer** l'ajout d'ECharts tant qu'un scénario réel ne démontre pas le besoin ; un tableau peut suffire. | Pas de chiffre daté, unité, source et base de comparaison : aucun graphique quantitatif. |

**Évaluation technique recommandée :** commencer par React/CSS natif pour les familles éditoriales ; pour les graphes, comparer seulement deux intégrations réalistes du layout ELK. React Flow offre des nœuds et arêtes React, navigation et accessibilité configurable ; ELK fournit la disposition dirigée mais pas le dessin. Un graphe de lecture seule n'a pas besoin par défaut d'un éditeur de nœuds, de drag-and-drop ou d'un espace infini. Une solution SVG/HTML avec ELK peut être moins lourde si elle passe toutes les preuves ; React Flow peut être plus robuste si la gestion du viewport, des ports et des interactions de lecture devient nécessaire. Dans les deux cas, les dimensions des nœuds doivent être connues au moment du layout et les étiquettes ne sont jamais tronquées pour cacher un défaut.

**Apache ECharts** est une option spécialisée pour des séries mesurées, avec rendu SVG ou Canvas et `resize()` ; il ne résout **ni** les dépendances métier **ni** la valeur épistémique des données. **Dagre** constitue un comparateur léger possible pour petits graphes. **Mermaid** n'est pas retenu comme renderer universel de la conversation en V1 : contrôle artistique, validité d'une DSL et sécurité/variabilité non adaptés à la garantie recherchée. Ces technologies sont **candidates**, non installées ni adoptées sur cette base.

### 5.1. Vérifications de faisabilité à conduire avant choix

- **Intégration :** exactes versions React/Next du worktree candidat, compatibilité ESM/SSR/hydratation, CSS et politique de bundling ; licences et dépendances transitives ; performance en split 50/50 et mobile.
- **Graphe :** nœuds de hauteur variable, labels longs/accents, ports, cycles, plusieurs entrées/sorties, zoom, focus, ordre de lecture et rendu de repli ; mesure après typographie chargée et variation du conteneur sans boucle de `ResizeObserver`.
- **Rendu :** grille responsive avec conteneur (pas seulement media queries), comportement du fil/scroll UX-002 et du viewer UX-010, source/provenance consultable seulement via propriétaires autorisés.
- **SDK :** validation typée et coût d'une projection D3 plus structurée, effet sur les erreurs `UNKNOWN` R05 ; **ne pas** déduire que `outputType` garantit, seul, une sortie utile ou sémantiquement cohérente.

## 6. Contrat de rendu et d'admission

Le détail obligatoire figure dans le [document 05](05-contrat-composition-nora-studio.md). L'architecture exige un pipeline **déterministe et explicable**, avec au moins :

1. Validation de l'enveloppe de tour/message et de sa version ; rejet/fallback sur contrat inconnu.
2. Validation de chaque section, de ses identités, de ses liens, des qualifications de vérité et des sources ; refus d'arêtes orphelines, de données numériques sans unité, d'éléments UI actifs avant finalisation.
3. Décision locale sur la forme adéquate selon **sémantique, volume, longueur et largeur du conteneur** ; jamais de template de réponse globale ni de seuil aveugle au seul nombre de cartes.
4. Construction du DOM accessible, mesure des textes, disposition graphique bornée ; contrôles de géométrie et du contexte lecture.
5. Repli **local par section**, ou texte canonique intégral si l'enveloppe est incompatible ; aucune perte de la substance de la réponse et aucun appel IA de correction autonome.
6. Persistance/réhydratation du même contenu et des mêmes références ; représentation pouvant changer selon largeur, pas selon une source de vérité nouvelle.

**Types d'issue explicites à tracer dans le rendu (sans exposer à l'utilisateur les codes internes) :** `VISUAL_ACCEPTED`, `ADAPTED_VARIANT`, `TEXT_FALLBACK`, `INVALID_PROJECTION`, `UNSUPPORTED_VERSION`, `LAYOUT_UNAVAILABLE`, `SOURCE_NOT_CONSULTABLE`, `QUANTITATIVE_DATA_INSUFFICIENT`. Le code exact est candidat ; ces situations doivent être distinguables en tests et journaux expurgés.

## 7. Blast radius, frontières et risques

| Zone | Impact probable | Risque majeur | Exigence de test/STOP |
|---|---|---|---|
| D3 (`semantic-qualification.ts`, `nora-adapter.ts`) | Projection structurelle versionnée ; ajout d'intention par section | Échec fournisseur, coûts, sérialisation divergente | Preuve de sorties conformes et invalides, pas de deuxième `run()` ; STOP si changement d'autorité. |
| Domaine conversation (`service.ts`, `turn-command.ts`, API) | Transport, finalisation, relecture | Doubles messages/effets, `UNKNOWN` confondu avec succès | M1, IDs, reprise et idempotence préservés ; migration → M5/STOP. |
| `NoraConversation.tsx` et rendu | Affichage composite, choix, sources, scroll | Reflow, perte du draft, stale actions, doublons | UX-002/007/008/009/010, actions expiration, historique. |
| CSS/tokens/shell | Grilles, typographie, panneau, split | Collision, troncature, régression Figma R3 | Tests largeur du **conteneur**, zoom, captures comparables. |
| Bibliothèques de graphes éventuelles | Disposition et évènements | Bundle, SSR, resize, focus, graphes illisibles | Benchmark comparatif et repli testé avant sélection. |
| Provenance/permission | Consultabilité de ressources et décisions | Fausse source ou clic non autorisé | Vérification des clés canoniques et droits au moment de l'action. |
| Tests et traces | Contrat, géométrie, modèle et qualité visuelle | Faux PASS / fuite de données | Distinction UNIT/BROWSER/FAKE/LIVE ; logs allowlistés. |

**Risque transversal :** remplacer le moteur E05 ne doit pas casser les corrections utiles déjà acquises en RECETTE. Il faut distinguer « suppression du renderer » de « suppression d'invariants ». Les incidents fournisseur et réconciliation R05 ne sont pas absorbés dans le lot graphique ; ils font partie de la matrice de non-régression et restent qualifiés séparément.

## 8. Macro-lot cohérent, étapes et gates

| Phase intégrée | Livrable et preuve | Autorité / gate |
|---|---|---|
| **Conception et qualification** *(présent dossier)* | Architecture candidate, contrat de composition v0, Figma 01–09, bilan E05, matrice d'impact et d'acceptation. | Revue Morris ; **aucune réalisation engagée**. |
| **Décision de réalisation** | Choix M1 compatible, famille de graphes et bibliothèque si besoin, chemin de retrait E05, périmètre du macro-lot. | GO spécifique Morris ; D2 si architecture normative. |
| **Construction intégrée Cursor** | Remplacement renderer et parser E05, intégration D3, composants et variantes, tests, documentation de fonctionnement mise à jour ; nettoyage des références obsolètes. | D3 technique sous SFIA v2.6, branche, fichiers, tests, STOP et handoff bornés. |
| **Qualification** | UNIT/property/integration, BROWSER/FAKE, visual Figma/runtime, accessibilité, relecture, défauts R04/R05, LIVE/REAL borné si autorisé. | Distinguer COVERAGE VERIFIED de BEHAVIOR PROVEN, sans ADOPTED anticipé. |
| **Recette et fermeture** | Réponses naturelles pertinentes, alternatives complètes, conformité visuelle, pas de régression, revue des réserves. | Morris décide réception E05/ML4D et Gate C séparément. |

**Un seul macro-lot de réalisation** ; les couches conception, code, tests et documentation sont intégrées. Pas de POC universel ni micro-cycles de CSS. Un **comparatif technique ciblé et réversible** sur quelques fixtures réelles pour les diagrammes peut être intégré au lot avant sélection finale sans créer une seconde architecture durable.

## 9. Critères de décision et points STOP

### 9.1. Critères pour retenir l'architecture de remplacement

- La projection ne crée qu'**une vérité conversationnelle** ; le texte de repli représente toutes les informations essentielles et leurs incertitudes.
- Nora demeure responsable du **quoi** et du **pourquoi** ; Studio du **comment afficher**, sur des règles testables.
- La version de contrat et l'API d'admission sont compatibles avec M1 ; les anciens tours se relisent sans « migration cachée ».
- Un chemin de retrait E05 est défini pour **supprimer la dette**, pas ajouter un nouveau moteur à côté.
- Les variations de présentation des Figma 01–09 disposent d'oracles concrets (voir document 05) ; le rendu est conforme en conteneurs réels, pas seulement en artboard.
- Le coût des bibliothèques est proportionné aux besoins prouvés et vérifié sur le code exact.

### 9.2. STOP avant exécution si

Migration/DB obligatoire (M5), changement d'autorité ou d'idempotence, relecture historique non protégée, sortie D3 incompatible ou fragile, disparition du texte de repli, graphe sans provenance fiable, suppression d'un mécanisme commun à D4/D6/D7, impossibilité de prouver le runtime dans les lanes prévues, incompatibilité licence/sécurité, référence Figma non arbitrée sur un point bloquant. Dans ce cas, Cursor remonte une option documentée à Morris ; il ne contourne pas par un nouveau moteur parallèle.

## 10. Ce que nous savons et ce que nous ne prétendons pas savoir

**Observé depuis Git :** les contrats Next, le code `main`, la proposition E05 figée dans un handoff, les défauts structurels du renderer et les résolutions R05 rapportées. **Observé en Figma et dans notre revue :** direction graphique appréciée, neuf écrans couvrant comparatifs, parcours et diagrammes. **Étude externe documentée :** React, CSS, React Flow, ELKjs, ECharts et Playwright disposent des mécanismes nécessaires en principe.

**NON OBSERVÉ / à qualifier avant construction :** fichiers de la branche locale de travail et RECETTE réellement servis, versions installées et lockfile locaux, rendu des textes dynamiques en navigateur Next, performance/densité réelles, intégration du schéma M1 et des droits, état des données E05 déjà persistées, comportement `@openai/agents` avec la nouvelle projection sous charge/fournisseur. En conséquence, le présent dossier justifie une **architecture candidate sérieuse**, pas la preuve qu'elle fonctionne déjà.

## 11. Références primaires et traçabilité

### Références Next (Git)

- [SEF v0.2, `main`](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/SEF.md) ; [Roadmap `main`](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/roadmap.md) ; [décision ML4C/ML4D](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md).
- [Conception UX Travail ML4D](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md) ; [contrat technique M1–M5](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md) ; [registre ML4D](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md).
- [UI `main` NoraConversation](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx), [SafeMarkdown](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/components/SafeMarkdown.tsx), [qualification D3](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts), [adapter D3](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts), [service](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/service.ts) et [schéma DB](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/db/schema.ts).
- [Handoff E05 gel candidat](https://github.com/mcleland147/sfia-workspace/blob/76e7e54ea311f961cc6364de6045a0dfecd02965/sfia-review-handoff/latest-chatgpt-review.md) : intégralité des fichiers E05 rapportés, dont `RelationsView` ; [handoff R05 récent](https://github.com/mcleland147/sfia-workspace/blob/0e078a78f0303f9e99cf174c1caa22aed7629708/sfia-review-handoff/latest-chatgpt-review.md).
- [Figma page 06, neuf maquettes](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2).

### Références technologiques (consultées le 17/11/2026)

- [OpenAI Agents SDK — `outputType`](https://openai.github.io/openai-agents-js/guides/agents/) et [validation schema](https://openai.github.io/openai-agents-js/guides/schemas/).
- [React Flow — moteurs de layout](https://reactflow.dev/examples/layout/auto-layout), [mesure dynamique des nœuds](https://reactflow.dev/api-reference/hooks/use-nodes-initialized), [accessibilité](https://reactflow.dev/learn/advanced-use/accessibility), [ELKjs](https://github.com/kieler/elkjs) et [ELK layered](https://eclipse.dev/elk/reference/algorithms/org-eclipse-elk-layered.html).
- [MDN — container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries), [overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap), [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API).
- [Apache ECharts — taille](https://echarts.apache.org/handbook/en/concepts/chart-size/), [SVG vs Canvas](https://echarts.apache.org/handbook/en/best-practices/canvas-vs-svg/), [ARIA](https://echarts.apache.org/handbook/en/best-practices/aria/).
- [Playwright — tests visuels](https://playwright.dev/docs/test-snapshots), [ARIA snapshots](https://playwright.dev/docs/aria-snapshots), [WCAG 2.2 — Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

---

## Annexe factuelle du 18/11/2026 — réception bornée de la composition visuelle (D1)

> **Actualisation postérieure, non normative.** Les mentions de conception candidate, d'absence de GO et de non-implémentation dans les paragraphes historiques précédents décrivent **l'état de rédaction du 17/11** ; elles ne doivent pas être lues comme le statut runtime actuel de la **seule composition visuelle**. Cette annexe ne réécrit pas les décisions validées et ne déclare pas l'ensemble Travail réceptionné. Source commune : [dossier UAT](07-dossier-reconciliation-reception.md), [matrice C-01…C-22 V0.10](06-matrice-convergence-vision-realisation.md), [handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md).

**Constat de réalisation :** l'orientation de remplacement par une composition sémantique typée, admission Studio et composants React/ELK a été effectivement portée dans un **candidat produit local** et exercée sur les huit UAT de composition en RECETTE. La qualification n'est plus seulement exploratoire pour **ce sous-périmètre**, sans préjuger de l'intégralité du retrait de chaque fragment historique E05.

**Épreuve discriminante UAT-07 :** six nœuds canoniques uniques, cinq liens ; les doublons visibles venaient de `classifyLanes()`, qui classait simultanément le nœud de synchronisation comme gate et dans une voie/suite. Le correctif de **claim exclusif**, suivi de `sync → revue → lancement`, a été rendu, rechargé et accepté visuellement par Morris. Le scroll horizontal est désormais un comportement explicitement accepté sur ce cas.

**Sortie prudente :** `IMPLEMENTED (LOCAL CANDIDATE REPORTED) / USER ACCEPTED WITH RESERVES (8 VISUAL UAT) / ADOPTION NOT DECIDED`. Revue des suppressions et diff global de remplacement, dépendances résiduelles E05, autres surfaces Travail et preuves de compatibilité restent à réconcilier avant une conclusion de remplacement exhaustif.
