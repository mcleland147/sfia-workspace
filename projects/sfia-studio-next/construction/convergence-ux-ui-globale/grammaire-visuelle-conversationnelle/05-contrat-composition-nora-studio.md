# SFIA Studio Next — Contrat candidat de composition adaptative Nora ↔ Studio

**Version :** 0.1 — 17 novembre 2026  
**Statut :** `DOCUMENTED / CONTRACT CANDIDATE FOR MORRIS REVIEW` — non implémenté, non adopté  
**Portée :** R5 / ML4D / Ensemble 05 — réponses conversationnelles dans Travail ; pas les documents Markdown D4.  
**Amont :** [01 — Cadrage produit](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/02-conception-fonctionnelle-ux.md) · [03 — Technique initiale](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/03-architecture-solution-technique.md).  
**Architecture :** [04 — Qualification et remplacement E05](04-qualification-architecture-remplacement-e05.md).  
**Références graphiques :** [Figma R3 / page 06 / écrans 01–09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2).

> **Statut des règles.** Les principes A–F de l'UX Travail et les orientations M1–M5 sont déjà validés en conception Next. Les règles `CV-*`, les limites, la version de payload et les exemples ci-dessous sont **proposés pour revue**. Ils ne créent pas une doctrine supplémentaire ou un moteur de décision. Le contrat définit des comportements attendus et des preuves discriminantes, non une promesse de garantie graphique absolue.

## 1. Objet, garantie de comportement et frontière de vérité

**L'intention du Pilote demeure libre** : il peut demander une synthèse globale, une comparaison, une recommandation ou une explication sans citer une représentation. Nora produit une réponse utile, avec plusieurs sections dont chacune peut porter une intention graphique. Studio **ne choisit pas la vérité** : il choisit uniquement la représentation qu'il sait restituer avec fidélité.

Le contrat vise trois garanties dans le périmètre explicitement pris en charge :

1. **Fidélité :** aucune carte, frise, matrice ou relation ne transforme une hypothèse en fait, n'ajoute de chiffre, n'efface une condition ou ne rend une décision métier effective ; contenu et provenance intégraux restent disponibles sans graphique.
2. **Robustesse :** textes visibles, retour à la ligne, alignements contrôlés, graphiques lisibles, zoom/reflow, clavier et rechargement ; les formes non admissibles sont remplacées par une alternative exhaustive et non cassée.
3. **Pertinence :** les représentations sont choisies pour améliorer une lecture identifiable, et non pour produire de la décoration ; validation humaine sur des réponses réelles et non seulement des fixtures.

**Pas de garantie absolue sur toutes les entrées imaginables.** L'engagement industrialisable est : domaines admissibles et preuves listés ; hors domaine, **dégradation contrôlée, sans perte de contenu** et sans action supplémentaire. Un défaut visuel ou une ambiguïté de sens bloque la réception du cas concerné.

## 2. Chaîne de composition et responsabilités

| Phase | Responsable | Entrée | Sortie vérifiable | Contrôle négatif |
|---|---|---|---|---|
| C01 Comprendre | Nora / D3 | Demande, contexte et sources autorisées | Intention, faits, nuances, éléments manquants | Ne pas inférer des états à partir d'une date ou d'un titre. |
| C02 Organiser | Nora / D3 | Informations pertinentes | Sections ordonnées, rôle éditorial, texte/relations | Ne pas convertir chaque paragraphe en carte. |
| C03 Proposer | Nora / D3 | Section sémantique complète | `visualIntent` facultatif ou `text`, données structurelles s'il y a lieu | Ni pixels, ni couleur libre, ni SVG/HTML, ni autorité. |
| C04 Valider | Projection/admission Studio | Tour/version, sections, liens, refs et contraintes | Sections qualifiées et raisons de refus | Aucun enrichissement cognitif autonome. |
| C05 Composer | Politique Studio | Familles connues, métriques de contenu et largeur du fil | Variantes sélectionnées ou repli | Pas de template pour l'ensemble du message. |
| C06 Rendre | UI React/CSS/graphes | Projection admise | Même message Nora, lecture structurée et accessible | Pas de troncature, de lien hors droit ou de graphe non fiable. |
| C07 Persister/revoir | D3 + propriétaires canoniques | Résultat final, identités, références | Refresh cohérent, choix expirés, états véritables | Pas de deuxième source de vérité ou d'effet au clic décoratif. |

**Important :** Nora a le droit de **proposer** une forme ; Studio a le devoir de vérifier si elle est pertinente et supportable. Une demande « synthèse globale » n'enclenche aucune famille par mot-clé. Les documents volumineux restent des **objets D4 Markdown**, hors de ce mécanisme de réponse courte/moyenne de pilotage.

## 3. Modèle de données candidat et intégrité des informations

### 3.1. Principes du schéma

- **Une seule identité de message/tour** via M1 D3 ; sections ordonnées et stables au sein du tour, contrat versionné. Les IDs privés servent à relier des éléments, **jamais à être exposés au Pilote**.
- **Contenu sémantique avant forme.** Chaque section possède suffisamment de substance pour être lue sans rendu spécialisé ; les diagrammes ajoutent une vue structurée de relations vérifiées, pas de nouveaux faits.
- **Intention graphique facultative.** Une bonne réponse peut être entièrement narrative. Le refus de la forme par Studio **ne modifie pas le raisonnement**.
- **Texte intégral compatible.** La lecture textuelle doit inclure libellés, options, critères, relations, réserves et origine des assertions. Le texte alternatif d'un diagramme n'est **pas** « Diagramme du projet », mais une description des liens importants.
- **Provenance canonique.** Références à des ressources D4/D8/D9 autorisées, résolues côté Studio ; jamais des URL activables ou des affirmations de consultabilité fabriquées par Nora. Une source absente demeure absente.
- **États métier non réinventés.** Un indicateur graphique peut représenter la nuance `confirmé / à vérifier`, mais seule la projection officielle D6 et les sources déterminent qu'une décision a été validée. Les couleurs ne créent pas de statut.
- **Actions distinctes.** `choices` conversationnels typés et expirables ; leur clic ne déclenche jamais D6/D7 automatiquement, conformément au contrat du tour.

### 3.2. Enveloppe illustrative — **non schéma/API approuvé**

```json
{
  "contract": "candidate-conversation-composition-v1",
  "messageRef": "id-existant-du-message",
  "turnRef": "id-existant-du-tour",
  "completion": "FINAL",
  "sections": [
    {
      "id": "section-situation",
      "semanticKind": "narrative",
      "heading": "Situation actuelle",
      "content": { "markdown": "Les éléments vérifiés et leurs réserves…" },
      "visualIntent": "text",
      "sourceKeys": []
    },
    {
      "id": "section-options",
      "semanticKind": "comparison",
      "heading": "Deux stratégies possibles",
      "content": {
        "alternatives": [
          { "id": "option-1", "label": "Progressive", "advantages": ["Support réparti"], "caveats": ["Coexistence"] },
          { "id": "option-2", "label": "Après pilote", "advantages": ["Apprentissage initial"], "caveats": ["Charge concentrée"] }
        ],
        "recommendation": "Orientation provisoire, sous conditions…"
      },
      "visualIntent": "comparison",
      "sourceKeys": [],
      "readableAlternative": "La stratégie progressive répartit le support mais allonge la coexistence ; la stratégie après pilote permet un apprentissage mais concentre la charge."
    }
  ]
}
```

**Aucune clé ci-dessus n'est un nom de table, de type TypeScript ou de propriété adopté.** Le contrat réel devra respecter la sortie M1 validée, l'API et la persistance disponibles au HEAD local. L'exemple sert uniquement à vérifier les invariants : structure versionnée, lien D3, forme facultative, alt intégral et absence d'effet.

### 3.3. Deux stratégies de compatibilité M1 à comparer avant code

| Candidat | Mécanique | Avantage | Risque / test de sortie |
|---|---|---|---|
| **Cible préférée : sections canoniques** | Nora produit une structure de sections complète dans sa qualification D3 ; Studio en dérive déterministiquement un texte de repli/`replyDraft` de compatibilité et une visualisation facultative. | Une seule structure sémantique évite que texte et graphique racontent deux histoires. | Impact sur `outputType`, coût, schéma SDK, clients existants et persistance ; prouver qu'un ancien tour reste lisible et qu'un tour invalidé tombe en texte sûr. |
| **Compatibilité de moindre blast radius** | `replyDraft` existant demeure canonique ; des annotations/sections facultatives ne peuvent que présenter les mêmes informations et sont rejetées si elles ajoutent un fait, si leur correspondance est incertaine ou si le contrat n'est pas sûr. | Réduit éventuellement l'impact D3 initial et préserve le mode texte. | Double contenu potentiellement divergent : sans preuve d'intégrité, préférer **texte seul** et ne pas afficher de composition. |

**Règle de qualification :** une extension `outputType` ou la simple conformité Zod n'assure ni la pertinence de Nora, ni l'absence de contradiction entre deux textes. Tester le SDK et les cas R05 en FAST/FAKE puis LIVE autorisé. **Aucun second appel IA obligatoire** pour reconstruire, reformuler ou corriger le rendu. Si le contrat cible nécessite une migration physique, déclencher **M5 / STOP Morris** et ne pas maquiller la migration avec une table annexe.

## 4. Familles de composants et préconditions sémantiques

| Famille candidate | Quand Nora peut la proposer | Admission Studio | Alternative fidèle |
|---|---|---|---|
| `narrative` | Explication, contextualisation, nuance, recommandation. | Toujours, dès lors que le Markdown est sûr et autorisé. | Texte structuré. |
| `comparison` | ≥2 options réellement comparables, critères explicites ou avantages/limites documentés. | Cohérence des critères, nombres et labels ; varier cartes/matrice selon densité et conteneur. | Paragraphes comparatifs ou tableau simple, avec toutes les réserves. |
| `sequence` | Ordre de tâches/situations établi ; temporalité si fondée. | Étapes ordonnées, relation `dependsOn` uniquement si vérifiée, pas de faux jalon. | Liste ordonnée et dépendances rédigées en phrases. |
| `dependencies` | Ensemble de nœuds et **arêtes justifiées** : prérequis, validation, blocage. | Tous nœuds référencés, types de liens et sens fiables, graphe lisible ; sinon liste. | « X dépend de Y » avec libellés humains et caveats. |
| `decisionPaths` | Plusieurs conditions et conséquences hypothétiques explicites. | Distinguer condition, issue envisageable, recommandation et décision humaine réelle. | Liste conditionnelle « Si … alors envisager … », jamais action exécutée. |
| `parallelProcess` | Voies parallèles et points de convergence réels. | Pas de relation, date ou autorité rajoutée par le layout. | Groupes d'activités et contrôle commun rédigés. |
| `timeline` | Jours/durées/jalons établis ou hypothèses explicitement qualifiées. | Distinction réalisé / envisagé ; interdiction de calculer des échéances non fondées. | Chronologie ou étapes textuelles. |
| `metricChart` | Chiffres datés, unité, période et échelle comparables. | Précondition forte sur source, base et sens des axes ; bibliothèque éventuelle différée. | Tableau de valeurs + interprétation honnête ; absence de données = texte. |
| `references/choices` | Besoin réel de consulter ou de poursuivre. | Identités D4/D9 et choix de tour actifs vérifiés par le propriétaire. | Texte et actions désactivées/expirées sans fausse URL. |

Les libellés de familles sont **conceptuels** : ils ne réactivent ni ne figent le schéma E05. On pourra partager des primitives graphiques entre `dependencies`, `decisionPaths` et `parallelProcess` après preuve de leur adéquation, sans imposer une représentation universelle.

## 5. Politique d'admission et de choix des variantes — contrat `CV-*`

### 5.1. Règles communes

| ID | Comportement exigé | Condition de refus ou de repli |
|---|---|---|
| **CV-01** | Une demande libre produit un message complet, avec zéro ou plusieurs sections spécialisées. | « Synthèse » ne déclenche pas automatiquement un graphique. |
| **CV-02** | Le texte et l'information sémantique précèdent les variantes graphiques. | Si la visualisation ajoute un fait, une condition, un statut ou un critère : la refuser. |
| **CV-03** | Chaque forme doit démontrer son utilité (comparaison, relation, ordre, quantification). | Texte seul si une forme n'améliore pas la lecture ou provoque une répétition. |
| **CV-04** | La forme dépend du **contenu et de la largeur du conteneur réel**, pas seulement du nombre d'objets. | Cartes trop denses → matrice, liste ou texte sans troncature. |
| **CV-05** | Pas de limite globale artificielle par nombre seul ; chaque famille définit son **enveloppe de capacité testée**. | Graphe complexe ou cyclique → liste relationnelle si layout fiable indisponible. |
| **CV-06** | Relations, ordre, branches et provenance sont identiques entre visuel et texte. | Arête orpheline, source mal liée, ordre causal inventé → repli. |
| **CV-07** | Aucune donnée quantitative sans unité/source/échelle ; aucune criticité colorée sans statut établi. | Graphique trompeur → tableau/texte et réserve explicite. |
| **CV-08** | La disposition conserve l'intégralité des mots essentiels et des options. | Aucune ellipsis/clamp pour masquer le problème ; réorganiser ou replier. |
| **CV-09** | Contrôles d'autorité, de statut final et d'expiration avant actions cliquables. | `UNKNOWN`, choix périmé, ressource indisponible → information honnête, pas d'effet. |
| **CV-10** | Une erreur de rendu d'une section n'annule ni le message ni les autres sections. | Error boundary local → texte intégral de la section. |
| **CV-11** | Une réponse rechargée conserve la même substance, les mêmes sources et décisions. | Variantes graphiques permises selon l'espace, **pas** variation des faits. |
| **CV-12** | La sortie BROWSER/FAKE ne prétend pas prouver Nora LIVE ni les droits REAL. | Les campagnes sont différenciées et datées. |

### 5.2. Algorithme candidat, sans nouveau moteur cognitif

```text
admit(message, section, container):
  si tour non final ou contrat non reconnu → afficher état réel et texte sûr disponible
  vérifier structure, provenance, intégrité des liens et possibilité de repli
  si une information essentielle manquerait en texte → refuser le visuel
  calculer les propriétés (famille, nombre d'éléments, longueur, branches, densité,
                          complexité, hypothèses, largeur effective de Travail)
  proposer la variante simple compatible avec l'intention Nora
  si le composant nécessite une mise en page graphique :
      mesurer les nœuds réels / effectuer layout dirigé / vérifier l'enveloppe admise
  si la géométrie ou l'accessibilité n'est pas conforme :
      basculer sur une variante simple ou la lecture textuelle complète
  exposer un résultat déterministe et une raison de repli allowlistée
```

**Éviter un seuil dogmatique** « 4 cartes oui, 5 cartes non » : les Figma 03/04 illustrent la possibilité d'une bascule, mais les seuils devront dépendre du **nombre de critères**, des longueurs et de la largeur. Ainsi trois cartes avec plusieurs paragraphes peuvent être moins pertinentes qu'une matrice, et cinq cartes très courtes ne rendent pas obligatoirement le composant invalide. Les bornes n'ont **pas** encore été mesurées en navigateur.

## 6. Contrats d'adaptation graphique détaillés

### 6.1. Cartes, comparaisons et matrices

- Carte de largeur minimale utile ; titre et description sans plafond de lignes pour les éléments essentiels ; `height:auto` et retour à la ligne. Équilibrage du groupe possible avec la hauteur de la carte la plus dense, **sans augmenter indéfiniment les grands espaces vides**.
- Conteneur observé (`@container`) : grille si espace suffisant, pile à faible largeur ; matrice si les critères sont mieux vus en colonnes et que le tableau conserve un sens accessible. Des visuels différents pour un même message suivant la largeur sont **autorisés**.
- Matrice HTML avec `<th scope>` et intitulés complets ; si intrinsèquement bidimensionnelle, scroll explicitement signalé/focusable ou alternative en liste. **Jamais** de colonne cachée silencieusement.
- Sous-ensemble d'informations mis en avant seulement si les détails restent accessibles immédiatement et clairement ; pas de résumé substitutif trompeur.

### 6.2. Parcours simples et planning

- Le numéro d'étape relève de son ordre réel, pas du positionnement graphique. Ne pas afficher « dépendance » lorsque seule une succession descriptive est connue.
- Parcours horizontal si largeur et longueur compatibles ; repli vertical numéroté si étapes trop nombreuses ou textes trop longs.
- Planning sur dates réellement établies, ou hypothèses **visiblement qualifiées** ; un axe temporel ne doit pas transformer une estimation en engagement.

### 6.3. Relations, arbres de décision et flux parallèles

- Nœuds identifiés en interne, **libellés humains complets**, description et statut d'assertion ; arêtes à deux extrémités reconnues, relation et sens explicités ; arêtes orphelines rejetées.
- Pas de cercle radial de taille fixe ni découpe `slice(0, 16)`. Des composants React mesurés selon leur texte ; layout dirigé ELKjs ou équivalent s'il passe le benchmark ; connecteurs dessinés à partir des positions calculées, pas de coordonnées fournies par Nora.
- Les graphes cycliques peuvent être **sémantiquement valides** (rétroactions réelles), mais pas forcément lisibles ; valider le sens et décider du repli sur résultat de layout, sans supprimer les cycles.
- Arbre : différencier condition, proposition et décision actée. Le « oui/non » graphique ne vaut jamais HumanDecision. Toutes les issues utiles doivent rester accessibles dans la variante textuelle.
- Flux parallèle : préserver les voies, le parallélisme déclaré, les conditions de convergence et l'autorité réelle du gate ; la convergence n'est pas une « promotion » produit.
- Diagramme trop dense : **liste de relations** ou **groupes structurés** avec texte complet ; le Pilote ne doit jamais voir des identifiants bruts ou des nœuds réduits à du microtexte.
- Zoom/pan/viewport possibles uniquement si la lecture clavier et l'alternative sont prouvées ; pas d'éditeur de graphe ni de drag-to-modify caché dans une réponse.

### 6.4. Graphiques quantitatifs

- Famille différée tant que les besoins et échelles ne sont pas établis. En cas de réalisation, unité, date/période, valeur, statut de calcul et source sont **obligatoires** ; pas de pseudo-pourcentage, tendance ou axe inventé.
- Visualisation toujours doublée d'un tableau de données accessible et d'une explication de ce que la mesure signifie.

## 7. Règles CSS/React et garde-fous de géométrie

**Règles techniques minimales envisagées**, à traduire en composants selon les tokens R3 sans figer les pixels ici :

```css
/* Illustration uniquement ; la classe réelle suivra le design system Next. */
.composition-section { min-width: 0; max-width: 100%; }
.composition-section :is(p, li, h3, h4, td, th) { overflow-wrap: anywhere; }
.composition-card { min-width: 0; height: auto; }
.composition-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); }
```

L'effet de `overflow-wrap:anywhere`, de `min-width:0` et des queries de conteneur est documenté par MDN ; ces règles **ne garantissent pas à elles seules** que des SVG, popovers, longs liens ou chemins de diagramme ne débordent pas. Les mesures, la gestion du scroll de matrices, l'accessibilité et les captures restent nécessaires.

Pour les graphes, la séquence est : **dimensionner le texte → calculer le layout → construire le viewport → inspecter débordements et lisibilité → éventuellement replier**. En React Flow 12, des tailles de nœuds peuvent être `measured.width/height` après initialisation ; un graphe calculé avant mesure ne constitue pas une preuve. Le navigateur peut changer la largeur après ouverture de la visionneuse, zoom, chargement de police ou rafraîchissement ; la recomposition doit éviter le saut de scroll intempestif et les boucles de mesure.

## 8. Gestion des échecs, du repli et de la reprise

| Situation | Affichage | Interdit |
|---|---|---|
| Modèle fournit du texte valide, pas de structure graphique | Texte Nora enrichi mais naturel. | Fabriquer un diagramme par détection de mot-clé. |
| Contrat de composition invalide mais `replyDraft` sûr disponible | Texte canonique + signal technique expurgé côté monitoring. | Transformer l'erreur de format en échec du tour D3 si le tour est valide. |
| Graphe trop dense, nœud/classe inconnue | Liste textuelle des relations, avec titres et conditions. | Une liste d'IDs et de `kind`. |
| Données numériques insuffisantes | Explication indiquant les limites, ou tableau des seules mesures connues. | Faux graphique avec nombres inventés. |
| Source absente/révoquée | Marque de disponibilité honnête, aucun lien prétendu consultable. | URL inventée ou autorisation inférée. |
| Rendu local d'une section échoue | Autre section conservée et texte de la section fautive. | Perdre l'intégralité du message ou réexécuter Nora. |
| D3 `UNKNOWN`/interrompu | État vrai du tour, texte **seulement si durable et qualifié**, reprise selon D3/D7 existants. | Confondre une structure partielle avec une réussite finale. |
| Rechargement d'un ancien message E05 | Texte complet existant si disponible, mode compatibilité borné, références légitimes. | Rendre obligatoirement l'ancien renderer ou migrer la DB sans GO. |
| Choix de poursuite expiré, envoi en cours | Lecture seule ou inactive selon le contrat du tour ; brouillon préservé. | Redonner vie à une action sur simple rafraîchissement. |

**Provenance du rendu :** enregistrer au plus des codes techniques non sensibles sur famille proposée, famille affichée, version de contrat, cause de repli, largeur classifiée et durée du layout. Ne pas enregistrer prompts, contenu privé, tokens, chaînes de pensée, texte brut de documents ou URL sensibles.

## 9. Contrat de qualification — matrice de tests et de preuves

**Plan de tests proposé comme complément aux oracles UX existants**, non comme registre autonome. Chaque test doit identifier la variante Figma, la version du contrat, le SHA/build du code, la lane, la largeur réelle de Travail, les résultats et éventuelles réserves.

| ID | Cas éprouvé | Oracle déterminant | Niveau de preuve requis |
|---|---|---|---|
| **CV-T01** | Question simple sans comparaison | Texte uniquement ; zéro bloc décoratif | UNIT + BROWSER |
| **CV-T02** | Synthèse de projet longue et hétérogène | Sections textuelles + formes utiles ; **pas de schéma de réponse unique** | UNIT + LIVE autorisé + revue Pilote |
| **CV-T03** | 2–3 options avec textes de longueurs différentes | Cartes à hauteur adaptée ; texte non coupé | BROWSER + comparaison Figma 01/03 |
| **CV-T04** | 5 options et critères récurrents | Matrice pertinente, information intégrale, pas de doublon obligatoire | BROWSER + Figma 04 |
| **CV-T05** | 8–18 options ou textes particulièrement longs | Variante/lecture simple, aucune grille inexploitée ni perte | UNIT/property + BROWSER |
| **CV-T06** | 4–6 étapes avec ordre connu, largeur réduite | Parcours horizontal/vertical adapté ; aucun ordre inventé | BROWSER + Figma 02/06 |
| **CV-T07** | Graphe dirigé, 3 chemins convergents | Nœuds/relations corrects, libellés humains, aucun croisement bloquant | BROWSER + Figma 07 |
| **CV-T08** | Arbre conditionnel | Conditions et branches fidèles ; aucune décision activée | BROWSER + Figma 08 + contrôle D6 |
| **CV-T09** | 3 voies parallèles et gate | Relations correctement orientées, convergence explicite | BROWSER + Figma 09 |
| **CV-T10** | 10–18 nœuds, cycle et labels très longs | Graphe supporté seulement si lisible ; sinon liste complète sans IDs | UNIT/property + BROWSER |
| **CV-T11** | Long URL / chaîne sans espaces / zoom 200–400 % | Pas de perte, focus et scroll accessible, texte complet | BROWSER + accessibilité |
| **CV-T12** | Pane split 50/50 et redimensionnement | Reflow ou repli, pas de chevauchement avec viewer/compositeur | BROWSER UX-010 |
| **CV-T13** | Source manquante, 2 états contradictoires | Qualification factuelle inchangée, pas de faux lien | UNIT/integration + BROWSER |
| **CV-T14** | Données chiffrées non fondées | Aucun graphique quantitatif faux | UNIT + revue contenu |
| **CV-T15** | Défaillance d'un composant | Texte de repli complet, autres sections visibles, tour inchangé | BROWSER + tests d'erreur |
| **CV-T16** | Refresh d'un message composite terminé | Identité, sources, faits, choix expirés conservés ; variante dépend de largeur seulement | PG/API + BROWSER |
| **CV-T17** | D3 `UNKNOWN`, R05 reprise sans effet D7 | Pas de régénération ni d'effet induit par visuel ; brouillon préservé | PG + BROWSER + REAL borné si autorisé |
| **CV-T18** | Texte simple E05 ancien et ancienne projection graphique | Relecture sûre, aucun `n.kind` ni ID affiché | Integration/compatibilité + BROWSER |
| **CV-T19** | Reponse R04/R05 en fournisseur réel | Choix éditorial réellement pertinent et sortie compatible avec le SDK ; séparation erreur fournisseur/rendu | LIVE/REAL + revue Morris |
| **CV-T20** | Contraste, clavier, lecteur d'écran et focus | Ordre DOM, labels, table accessible, WCAG reflow et alternative | BROWSER + audit d'accessibilité |

**Automatisation :** assertions d'éléments hors boîte dans les conteneurs censés tout exposer, `scrollWidth/clientWidth` et intersections géométriques, présence de textes accessibles, structure ARIA, capture Playwright `toHaveScreenshot()` dans un environnement fixe. Ne pas faire un PASS avec un simple snapshot reproduisant un défaut, et ne pas s'en tenir à une métrique de rectangle lorsque du texte peut être coupé à l'intérieur du SVG.

**Recette artistique :** jugement distinct du Pilote sur pertinence, plaisir de lecture, fidélité des couleurs, densité et alignements avec Figma. Aucune preuve en BROWSER/FAKE n'est une preuve de décision éditoriale spontanée de Nora en LIVE.

## 10. Conditions d'acceptation du contrat avant GO Cursor

1. **Contrat D3 M1 :** une stratégie de vérité unique, compatible avec `replyDraft`/`outputType`/historique et sans changement d'autorité ; le choix `sections canonique` ou `replyDraft` enrichi doit être explicite.
2. **Contrat de rendu :** variantes et limites mesurables par famille, pas de composants à cardinalité figée ; le repli est vérifié comme **complet**.
3. **Graphes :** choix entre React/CSS/SVG + layout et React Flow + layout sur une même fixture réaliste ; bibliothèque unique sélectionnée ou aucun ajout si les graphes restent textuels.
4. **Pas de double moteur E05 :** route d'écriture/lecture nouvelle définie et plan de suppression vérifiable ; aucun renderer expérimental conservé par inertie.
5. **Test et preuve :** matrice CV-T01–20 reliée aux scénarios UX-NORA existants, politique de tests BROWSER/FAKE puis LIVE/REAL, oracles d'intégrité et de géométrie.
6. **Gate D2/M5 :** changement de schéma ou de responsabilité, besoin de migration ou de push projet → STOP + nouvel arbitrage Morris ; aucun GO Cursor implicite.

**État de sortie du présent document :** exigences et architecture candidat **DOCUMENTED**, direction Figma retenue pour la revue ; compatibilité du code local, layout automatique, performance, persistence et pertinence en LIVE **NON PROUVÉES**. La prochaine action est **la revue Morris de ce contrat et de la qualification d'architecture**, pas un départ technique automatique.

## 11. Références vérifiées

- [Contrat UX ML4D Sujet 02 et Sujets 01–05](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md) ; [M1–M5 et CT-02](https://github.com/mcleland147/sfia-workspace/blob/241a3c52652e341724b7f423fac73f69df3f1a81/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md) ; [Figma page 06](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2).
- [Qualification D3 `main`](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts), [agent D3](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts), [renderer `main`](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx), [handoff ancien renderer E05](https://github.com/mcleland147/sfia-workspace/blob/76e7e54ea311f961cc6364de6045a0dfecd02965/sfia-review-handoff/latest-chatgpt-review.md).
- [OpenAI Agents SDK — `outputType`, validation locale](https://openai.github.io/openai-agents-js/guides/schemas/), [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs).
- [React Flow layout automatique](https://reactflow.dev/examples/layout/auto-layout), [mesure des nœuds](https://reactflow.dev/api-reference/hooks/use-nodes-initialized), [ELKjs](https://github.com/kieler/elkjs).
- [MDN — overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap), [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries), [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API), [WCAG 2.2 — reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- [Playwright — snapshots visuels](https://playwright.dev/docs/test-snapshots), [ARIA snapshots](https://playwright.dev/docs/aria-snapshots), [ECharts — resize](https://echarts.apache.org/handbook/en/concepts/chart-size/).

---

## Annexe factuelle du 18/11/2026 — réception bornée de la composition visuelle (D1)

> **Actualisation postérieure, non normative.** Les mentions de conception candidate, d'absence de GO et de non-implémentation dans les paragraphes historiques précédents décrivent **l'état de rédaction du 17/11** ; elles ne doivent pas être lues comme le statut runtime actuel de la **seule composition visuelle**. Cette annexe ne réécrit pas les décisions validées et ne déclare pas l'ensemble Travail réceptionné. Source commune : [dossier UAT](07-dossier-reconciliation-reception.md), [matrice C-01…C-22 V0.10](06-matrice-convergence-vision-realisation.md), [handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md).

### Contrat observable et écarts documentés (sans révision normative)

- **Sortie structurée :** une `visualComposition` produite par D3 peut être admise par Studio ; le texte libre reste valide sans bloc graphique imposé. Les huit scénarios UAT montrent la sélection spontanée de familles distinctes, bornée à ce corpus.
- **Schéma `sequence` :** `steps[].detail.max(5000)` a remplacé `max(400)` après UAT-03. **Chaque étape** peut disposer de ce maximum ; aucune limite générale de 5 000 caractères sur la réponse de Nora n'en découle.
- **Échecs :** validation SDK initialement `UNKNOWN`, cause `Invalid output type` / Zod reproduite ; observabilité expurgée renforcée. Les messages d'erreur historiques restent conservés, sans régénération rétroactive.
- **Relations `parallelProcess` :** l'instance réelle UAT-07 possède 6 nœuds uniques et les liens `3 équipes → synchronisation → revue → lancement`. La correction porte sur une classification **exclusive** de ces nœuds au rendu, sans recréer un moteur de sens dans Studio.
- **Présentation :** alignement icône/titre, numérotation unique, matrices sans caption superflu, graphes sans icône décorative, cartes à flux textuel naturel. Scroll horizontal autorisé sur ce graphe, sans dérogation générale aux exigences d'accessibilité.

**Niveaux de preuve :** UNIT/FAKE/BROWSER rapportés par Cursor ; **LIVE/RECETTE** sur les huit demandes utilisateurs et captures approuvées par Morris ; aucun test exhaustif de tous les cas contractuels CV-* ni audit indépendant du commit local. Vérifications en attente : variantes anciennes, C2 adverse/erreurs réelles, droits et intégrité ACL, split/zoom/clavier. `VALIDATED SPEC` des décisions antérieures inchangé ; `ADOPTED` non.
