# SFIA Studio Next — Conception fonctionnelle et UX de la composition visuelle conversationnelle

**Statut : REVIEWED BY MORRIS — BASE DOCUMENTAIRE DE TRAVAIL APPROUVÉE LE 17/11/2026 ; règles GV-xx et directions graphiques détaillées CANDIDATE / À ARBITRER, sans adoption pixel-final.**  
**Date : 17 novembre 2026.**  
**Périmètre :** Ensemble 05 — fil « Travail avec Nora », R5 / ML4D.  
**Amont :** [01 — Cadrage et vision produit](01-cadrage-vision-produit.md). **Aval :** [03 — Architecture et solution technique candidate](03-architecture-solution-technique.md).  
**Sources opposables existantes :** UX-007 §6 et contrats transverses dans [conception UX Next v0.7, branche candidate](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md), [CT-02 et M1–M5](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md).

> Ce document **complète** la conception ML4D déjà validée, sans la réécrire. Les règles A–F, réponse progressive, sources et interactions validées par Morris le 17/11 restent applicables. Les nouvelles règles GV-xx et les propositions graphiques sont **candidates** jusqu'à arbitrage. Il ne s'agit ni de spécification pixel-final, ni de preuve d'implémentation, ni de GO Cursor.

## 1. Résultat utilisateur et contrat fonctionnel général

Le Pilote pose une question libre : clarification, point d'avancement, synthèse d'un projet, analyse des risques, comparaison de scénarios ou recommandation. Il ne spécifie ni template, ni composant, ni nombre de colonnes. Nora mobilise le contexte autorisé et **choisit un plan de restitution éditoriale** adapté à la nature des éléments réellement disponibles. Studio met ensuite en forme chaque partie avec une représentation compatible et lisible.

**La sortie visible constitue un seul message Nora canonique**, composé d'un nombre pertinent de sections et de formes hétérogènes, lisibles dans un parcours vertical naturel. Il n'existe pas d'obligation de faire apparaître un graphique dans une réponse longue, ni de transformer des idées en cartes pour remplir l'espace.

La réponse doit répondre à la question avant d'être spectaculaire. Une synthèse incomplète agrémentée de beaux diagrammes est non conforme. Une réponse textuelle pertinente et complète est admissible ; son absence de graphique n'est pas un échec.

## 2. Chaîne fonctionnelle — « quand Nora choisit-elle ? »

| Moment | Responsable | Entrée / décision | Sortie vérifiable |
|---|---|---|---|
| **A. Compréhension** | Nora / D3 | Demande, contexte sélectionné, droits/contraintes, sources disponibles, degré de certitude | Objectif de restitution et informations réellement établies |
| **B. Organisation éditoriale** | Nora / D3 | Hiérarchie des éléments, liens, comparabilité, chronologie, statut et besoins du Pilote | Réponse et sections : ordre, profondeur, transitions, recommandations |
| **C. Intention visuelle locale** | Nora / D3 | Pour **chaque section** : forme candidate utile ou `text` ; information complète indépendante de la forme | Contenu sémantique + indication de représentation, sans HTML/CSS/coordonnées |
| **D. Admission graphique** | Studio / présentation | Structure, validité, version, contenu, densité, espace disponible, composants autorisés | Vue choisie ou repli lisible ; aucune réécriture des faits |
| **E. Restitution** | Studio / React | Composants du design system, mise en page et contrôles d'affichage | Un message cohérent, accessible, responsive, durable |
| **F. Interaction / continuité** | D3 et propriétaires réels | Clic conversationnel, consultation source, refresh, interruption | Même fil, historique, actions légitimes et choix expirés selon contrat |

**Pas de reconnaissance par mot-clé.** « Synthèse » ne déclenche ni quatre cartes ni un diagramme prédéterminé. La préférence de composition se fonde sur les **relations sémantiques**, le **but de lecture**, le **volume**, le **degré d'incertitude** et l'**apport visuel escompté**. Elle peut être formulée dans la même génération structurée que le contenu, sous réserve de faisabilité technique prouvée.

## 3. Règles de jugement éditorial candidates

| ID | Règle attendue de Nora | Anti-comportement |
|---|---|---|
| GV-01 | Privilégier la **réponse directe** au début lorsque la question appelle une décision ou une conclusion courte | Introduction de trois cadres avant de répondre |
| GV-02 | Choisir du **texte naturel** si une idée a besoin d'explication, de nuance ou n'a pas de structure graphique distinctive | Forcer une carte par paragraphe |
| GV-03 | Proposer une **comparaison** lorsque les éléments partagent des critères significatifs et explicites | Comparer des objets hétérogènes sur des critères inventés |
| GV-04 | Proposer une **séquence** lorsque ordre et étapes ont un sens établi | Transformer un simple inventaire en frise causale |
| GV-05 | Proposer des **relations/dépendances** seulement si les liens sont suffisamment fondés, lisibles et utiles au raisonnement | Créer des arêtes décoratives ou afficher des identifiants techniques |
| GV-06 | Proposer un **graphique de données** uniquement lorsque des nombres authentiques, unités et bases de comparaison existent | Inventer des pourcentages, scores, séries, graduations ou codes couleur |
| GV-07 | Synthétiser les risques en **proportion de leur criticité établie**, indiquer les conditions de maîtrise ; rester neutre si la criticité manque | Présenter tous les risques avec le même rouge et la même alerte |
| GV-08 | Recommander avec arguments, conditions, incertitudes et distinction explicite entre proposition et décision humaine | Transformer « option conseillée » en « option validée » |
| GV-09 | Limiter les **répétitions** entre cartes, tableaux, listes et texte ; chaque forme a un rôle distinct | Répéter les mêmes critères dans deux composants successifs |
| GV-10 | Respecter la **proportionnalité** : complexité et nombre de sections répondent au besoin, jamais au volume de texte seul | Ajouter des graphiques pour montrer la capacité du moteur |
| GV-11 | Préserver la **provenance**, l'actualité et les contradictions pertinentes au plus près des affirmations déterminantes | Transformer une hypothèse non vérifiée en fait graphique |
| GV-12 | Ne proposer des actions que si leur nature, leur cible et leur effet conversationnel sont clairement définis | Décoration cliquable ou autorisation métier inférée |

Les règles sont des **critères de sélection**, pas un catalogue de prompts « si X alors le composant Y ». Une même information peut avoir plusieurs présentations acceptables, choisies ensuite selon le contexte réel d'affichage.

## 4. Exemple complet : « Fais-moi la synthèse globale de notre projet »

**Étape cognitive Nora :** reconnaître les éléments utiles parmi l'état du projet, les décisions enregistrées, les jalons, les travaux et preuves, les dépendances, risques et perspectives ; qualifier toute absence, contradiction ou source périmée. La synthèse ne suppose pas que toutes ces catégories disposent de données.

| Partie illustrative | Information | Intention de composition | Critère de pertinence |
|---|---|---|---|
| Position générale | Objectif, situation actuelle, éléments déterminants | **Texte éditorial** | Deux ou trois paragraphes expliquent mieux qu'un diagramme |
| Avancement | Capacités et états réellement connus | **États structurés** ou tableau | Permet de distinguer rapidement les situations sans inventer un taux |
| Trajectoire | Jalons et conditions d'enchaînement | **Parcours/chronologie** | Existence d'un ordre ou de dépendances justifiées |
| Alternatives | Deux stratégies comparables selon les mêmes critères | **Cartes/matrice comparative** | Lecture côte à côte plus efficace que prose répétitive |
| Vigilances | Risques, incertitudes, conditions de sortie | **Texte + emphase sélective** | Évite cinq encadrés rouges identiques |
| Conclusion | Recommandation conditionnelle et suite concrète | **Texte et éventuellement choix gouvernés** | Le Pilote garde la maîtrise de l'arbitrage |

**Critique implicite :** si une source ne permet pas d'établir les jalons, Nora **n'invente pas** de parcours graphique ; elle explique ce qui manque. Si un document complet existe, Nora peut le citer/ouvrir via les voies D4 autorisées sans en créer une copie visuelle de 7 000 lignes.

## 5. Familles de représentations — primitives candidates, pas templates fermés

| Famille | Données sémantiques minimales | Adaptation attendue | Repli |
|---|---|---|---|
| **Texte éditorial** | Paragraphes, titres utiles, emphases et références sûres | Largeur de ligne, typographie, paragraphes, listes ; pas d'encadrement par défaut | Texte normal (base universelle) |
| **Comparaison** | Options, critères comparables, avantages/limites, incertitudes | Cartes, matrice ou liste selon largeur, nombre, longueur et hétérogénéité ; nombres de cartes variables | Tableau accessible ou sections textuelles par option |
| **Parcours / étapes** | Étapes, ordre, éventuels prérequis établis | Horizontal/vertical, groupes/fases, densité et retour à la ligne ; pas de frise décorative | Liste numérotée claire et dépendances traduites en langage courant |
| **Relations / dépendances** | Nœuds nommés, liens autorisés, libellés humains, sens du lien | Diagramme calculé si vérifiable, sinon liste de dépendances hiérarchisée ; pas de faux graphe radial | Liste relationnelle lisible ; IDs internes interdits |
| **Données quantitatives** | Mesures vérifiées, unités, périmètre, période, sources | Barres/courbes/répartition si forme et données le justifient ; légendes intelligibles | Tableau avec unités + explication |
| **Synthèse / risques / recommandation** | Constats qualifiés, niveau de confiance, limites, conditions | Mise en valeur rare et fondée ; blocs éditoriaux, pas d'alerte rouge uniforme | Paragraphes structurés |
| **Références / suites** | IDs canoniques, droits et états, actions possibles | Références contextualisées, actions réellement typées | Texte de référence et absence d'action si indisponible |

**Une famille est intrinsèquement adaptative** : le nombre d'éléments peut changer, contrairement à un template figé « quatre cartes ». La compatibilité dépend aussi du volume, du nombre de colonnes, des relations, de la largeur disponible, de l'accessibilité et de la lisibilité. Les seuils précis (ex. maximum de cartes simultanées) devront être mesurés et validés en conception graphique. **Ne pas inscrire ici de seuil arbitraire comme décision.**

## 6. Contrat d'adaptation et de repli — règles UX

- **Le contenant suit le contenu** : pas de hauteur fixe si elle couperait un titre, une réserve ou une description ; retour à la ligne et hauteur intrinsèque pour les blocs éditoriaux.
- **La largeur pertinente est celle du panneau Travail**, pas celle de l'écran physique : la visionneuse 50/50, la colonne « En bref », un écran mobile ou le zoom peuvent la réduire fortement.
- **La densité décide de la forme**, pas du seul nombre de cartes. Deux descriptions de dix lignes peuvent justifier une liste tandis que cinq descriptions d'une ligne restent facilement comparables.
- **Pas de texte essentiel tronqué** : ni ellipsis, ni police réduite jusqu'à illisibilité, ni `overflow:hidden` masquant la substance. Les survols seuls ne sont pas une solution accessible à une information essentielle.
- **Pas de collision** : coordonnées et connecteurs de diagramme doivent dépendre des dimensions réelles et être vérifiés sur le rendu final, pas seulement sur une maquette statique.
- **Repli déterministe** : à structure équivalente, mêmes règles de choix ; si une bibliothèque échoue, l'utilisateur voit une représentation textuelle fidèle, non un canevas vide, une exception brute ou un bloc bloqué.
- **Compatibilité sémantique** : un diagramme de dépendances et une séquence chronologique sont deux formes différentes ; ne jamais substituer un ordre à une causalité non établie.
- **Alternative complète** : chaque visuel est accompagnable d'une représentation textuelle intelligible. Lorsque l'alternative est utilisée, aucune référence, inconnue, mesure, branche ou réserve ne doit disparaître.
- **Rendu progressif** : pas de bloc graphique partiel actionnable ; la finalisation et les sources réelles commandent ce qui peut être affiché. Replier si l'intégrité des données ne peut pas être établie.

## 7. Direction artistique attendue — à matérialiser dans Figma

**Intention : « premium, naturel, éditorial, lisible ».** Il ne s'agit pas d'imiter une interface externe ni de recopier mécaniquement des cartes de tableau de bord. La réponse reste **conversationnelle** : une lecture verticale continue, ponctuée de compositions distinctives lorsque le contenu en tire parti.

| Dimension | Direction candidate | À exclure |
|---|---|---|
| Hiérarchie | Typographie expressive mais cohérente, titres utiles, sous-titres discrets, paragraphes confortables | Succession de labels techniques et d'entêtes identiques |
| Espaces | Respiration, rythme entre blocs, alignements stables et proportions harmonieuses | Densité uniforme et cadres collés |
| Surfaces | Encadrés réservés aux comparaisons/structures réellement groupées ; relief discret et cohérent | Une carte avec bordure pour chaque fait ou paragraphe |
| Couleurs | Palette Studio ; accent appliqué avec intention et signification ; contraste accessible | Rouge systématique pour une liste de risques ; badges de statut décoratifs |
| Icônes | Uniquement lorsqu'elles facilitent la reconnaissance, même système iconographique | Mélange d'icônes sémantiquement contradictoires ou inégalement présentes |
| Diagrammes | Nœuds lisibles, flux dirigé, connecteurs clairs, étiquettes humaines et jamais coupées | Cercles radiaux génériques, texte minuscule, IDs et types internes affichés |
| Graphiques de données | Échelles honnêtes, unités, légendes, source et interprétation contextualisée | Graphiques sans données, fausses métriques, pseudo-indicateurs |
| Mouvement | Transitions discrètes et non bloquantes ; réduction du mouvement prise en compte | Animations gratuites qui gênent la lecture |

**Figma n'est pas la preuve runtime** : les écrans doivent montrer les différents cas de densité, de largeur, de zoom, de texte long, d'absence de données et de repli. Les deux explorations produites le 17 novembre sont conservées comme matière de discussion, **non comme cible approuvée**. Les nouvelles références premium devront être explicitement acceptées par Morris avant implémentation.

## 8. Règles de relation avec les conventions Next et les autres capacités

- **UX-002 :** préserver l'ancrage de relecture et la continuité du fil ; un visuel qui s'agrandit ne doit pas provoquer de scroll intempestif.
- **UX-008 :** le compositeur et son brouillon restent indépendants de la représentation Nora ; aucun clic de consultation ne remplace un message libre.
- **UX-009 :** activité, inconnues et interruptions restent honnêtes ; la couche graphique ne masque pas un `UNKNOWN` fournisseur et ne prétend pas réparer les tours.
- **UX-010 :** vue split 50/50 exige un reflow déterministe ou une alternative ; pas de diagramme forcé dans une colonne étroite.
- **D3/D4/D6/D7/D8/D9 :** un composant peut **présenter** une décision, un document, une exécution ou une preuve, mais ne devient jamais leur propriétaire. Les liens et droits sont revalidés.
- **M1 :** identité/version de réponse et projection structurée unique ; ne pas créer une base de vérité concurrente. **M5 :** STOP + arbitrage si migration réellement nécessaire.
- **Source/provenance :** la représentation graphique porte les mêmes qualifications de vérité que le texte, même lorsqu'une recommandation est mise en avant.
- **Nommage produit :** nommer composants et contrats par responsabilité, pas « E05 », « R04 », `temp` ou `legacy` dans le code permanent.

## 9. Scénarios de validation candidats — qualité de choix *et* qualité de rendu

Ces scénarios sont des **oracles proposés**, à rapprocher des 25 UX-NORA existants et des parcours ML4D ; ne pas créer un second registre indépendant en delivery.

| ID | Demande/condition | Résultat de composition attendu |
|---|---|---|
| GV-T01 | Question factuelle courte | Réponse en texte court, zéro carte imposée |
| GV-T02 | Synthèse globale de projet avec sources qualifiées | Sections hétérogènes naturelles, pas de gabarit mécanique |
| GV-T03 | Deux stratégies réellement comparables | Comparaison visuelle + conditions et incertitudes |
| GV-T04 | Cinq options avec des titres de tailles différentes | Adaptation sans troncature ni carte anormalement vide |
| GV-T05 | Une grande liste d'options | Bascule vers matrice/listes sans multiplication de cartes inexploitables |
| GV-T06 | Parcours ordonné sans dépendance | Séquence claire, sans arêtes inventées |
| GV-T07 | Dépendances multiples lisibles | Diagramme pertinent, liens étiquetés et texte accessible |
| GV-T08 | Graphe dense ou cyclique | Pas de diagramme illisible ; repli complet et utile |
| GV-T09 | Risques sans criticité établie | Aucun code rouge alarmiste uniforme |
| GV-T10 | Données chiffrées insuffisantes | Pas de graphique quantitatif fictif |
| GV-T11 | Une décision non validée et une décision validée | Différenciation exacte, aussi dans les composants |
| GV-T12 | R05 — recommandation B/C | Aucun duplicat de critères, recommandation conditionnelle |
| GV-T13 | R04 — dépendances multi-étapes | Ni `HYPOTHESIS`, ni ID interne, ni labels coupés |
| GV-T14 | Mobile / vue Travail partagée / zoom 400 % | Reflow ou consultation alternative complète |
| GV-T15 | Chaîne très longue sans espace / URL / accents / emojis | Aucun chevauchement ou perte, liens utilisables |
| GV-T16 | Rendu visuel impossible après réponse valide | Repli texte sans échec de conversation |
| GV-T17 | Refresh sur longue réponse composite | Même information, même qualification, aucun choix obsolète actif |
| GV-T18 | Choix de poursuite avec brouillon libre | Intention séparée, brouillon préservé, groupe expiré selon contrat |
| GV-T19 | Source révoquée / indisponible | Mention honnête et pas de lien fonctionnel inventé |
| GV-T20 | Bloc long et réponse progressive interrompue | Information partielle qualifiée, pas de résultat faux, pas d'action prématurée |

**Dimension de recette :** pour chaque scénario, juger séparément : exactitude des faits, pertinence du choix graphique, lisibilité, esthétique, réponse aux tailles variables, gouvernance, continuité, preuve technique réelle. L'absence de bug visuel ne suffit pas à un PASS produit.

## 10. Livrables Figma à produire avant GO technique

Un **ensemble de références reliées** et non une collection de jolies cartes isolées :

1. **Réponse directe** au sein de Travail : sobriété, texte, provenance proportionnée.
2. **Synthèse projet composite** : au moins texte + avancement + relations ou trajectoire + risques + recommandation ; aucun élément fictif présenté comme réel.
3. **Comparaison et recommandation** : variations de 2/3/5 options, titres et descriptions différents, cartes puis matrice/listes en cas de densité.
4. **Parcours/dépendances** : cas simple dirigé, cas multi-branche, cas trop dense et repli intentionnellement beau.
5. **Restitution quantitative** : une série réellement chiffrée, avec unité, légende, alternative textuelle.
6. **Modes et contraintes** : desktop et petit panneau, mobile, lecteur d'écran/ordre de focus, zoom, choix expirés, sources non accessibles, interruption et reprise.

**Validation visuelle Morris obligatoire** avant de considérer les dessins comme contrat final ; Figma ne fixe pas automatiquement la conformité d'une bibliothèque ni la preuve du moteur.

## 11. Gate, traçabilité et statut

**DÉJÀ VALIDÉ en conception Next :** principes UX A–F ; texte naturel par défaut ; composition hétérogène non rituelle ; autorité du Pilote ; M1–M5 en orientation selon le contrat candidat. **À ARBITRER :** définition exacte des familles, préférences de sélection, limites/règles de repli, identité artistique premium, contrat graphique Figma et forme de la projection structurée. **NON PROUVÉ :** continuité d'un rendu enrichi premium sur tous cas, robustesse longue/mobile, qualité du moteur candidat E05, et couverture LIVE/REAL globale.

La sortie de ce document n'est pas la construction : c'est un **contrat fonctionnel/UX cohérent et approuvé**, vérifiable par Figma puis par les tests. Toute mise à jour des spécifications Next existantes se ferait dans le même macro-lot et selon le mandat Git autorisé.

## 12. Références

- [01 — Vision](01-cadrage-vision-produit.md) et [03 — Technique](03-architecture-solution-technique.md) : les noms des étapes et responsabilités sont communs.
- [Conduite R2 de Nora — RG-CONV-006](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) ; [R1 vision produit](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/cadrage/vision-produit.md).
- [ML4D — UX Travail avec Nora](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md) ; [contrat technique Next](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md) ; [registre central](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md).
- [W3C — compréhension du critère Reflow WCAG 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) : reflow sans perte de fonctionnalité/information sur petites largeurs, avec exceptions propres aux contenus bidimensionnels.
- [MDN — `overflow-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap) et [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) : mécanismes techniques de mise en page, pas garantie esthétique autonome.
- [Explorations Figma du 17/11 — non adoptées](https://www.figma.com/design/4NrIqC7Vfroo00r4pczAPb).
