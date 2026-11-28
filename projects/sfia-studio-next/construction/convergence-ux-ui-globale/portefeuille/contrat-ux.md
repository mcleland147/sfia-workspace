# SFIA Studio Next — Portefeuille personnel · Contrat UX/UI

**Date :** 28 novembre 2026 · **Périmètre :** R5 / ML4D, complément de convergence du portefeuille personnel (ensemble 02 historique), sans réouverture automatique des autres ensembles.
**Base distante :** `mcleland147/sfia-workspace` · `main@997897fd7cf914771e7d08e8030dc7123fab7d25` (E08 intégré, CI post-merge rapportée, Gate C OPEN, NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED). Git local et runtime : NON OBSERVÉS.
**Mandat :** Morris a validé les orientations, les trois modes, la persistance individuelle et la dernière composition Figma, puis demandé explicitement la création des trois documents sur Git. Publication documentaire candidate bornée à ce dossier, branche `docs/next-portfolio-contracts-20261128` ; aucune modification de décision, Roadmap, code, migration, CI, PR, merge ou GO Delivery. Les détails nouveaux ci-dessous restent candidats à revue ; pas de promotion normative implicite.
**Sources communes :** [SEF v0.2](../../../governance/SEF.md), [Roadmap](../../../governance/roadmap.md), [noms produit](../../../governance/product-naming-conventions.md), [P1–P3/F1–F2](../../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md), [ML4C/ML4D](../../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md), [registre central](../registre-central-revues.md), [contrat parcours intégré](../../convergence-ux-parcours-pilote-nora/contrat-acceptation.md), [vision fondatrice](../../../cadrage/vision-cible/README.md) (README lu ; PNG non réinspectés), [Figma page 14](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP/?node-id=1417-6). Git prévaut sur interprétation graphique et sur mémoire.

**Statut :** composition page 14 reçue par Morris (« parfait, rien à rajouter ») après ajustement tableau de bord/reprise ; référence visuelle retenue pour préparer l'implémentation. DOCUMENTED, détails non maquettés et G2 incomplets, runtime NOT PROVEN. [Fonctionnel](contrat-fonctionnel.md) · [Technique](contrat-technique.md).
Méthode : [Figma ↔ Cursor v1.1](../../../ux-ui/methodologie-contrat-figma-cursor.md), [transposition](../../../ux-ui/contrat-transposition-figma-code.md), [protocole F2](../../../ux-ui/protocole-fidelite-figma-runtime.md). Pas de nouveau template.

## 1. Direction artistique et composition

Accueil personnel avant bibliothèque. DA Studio sombre indigo, Inter, hiérarchie sobre, séparation par espaces et traits fins. Rail fixe, bandeau, contenu scrollable ; un seul shell runtime et variante personnelle F1. Tableau de bord dominant ; carte Reprendre le travail accentuée ; bibliothèque compacte, cinq éléments au plus ; lien vers liste complète. Les grandes cartes ne sont plus la vue par défaut ; grille optionnelle compacte. Compteurs cliquables, ligne/tuile ouvrable, menu contextualisé ; pas de CTA répété par ligne. Le libellé affiché correspond aux faits, aucun statut ou activité décoratifs.
Données Figma synthétiques : CampusFlow, Intervencia, Recette documentaire et cinq préparations ; 03/05/02 favoris, dates et résumés d'exemple. Ne pas copier en runtime ni considérer comme données réelles.

## 2. Mesures natives de référence (relecture 28/11/2026)

FileKey `itgvCulInEnFY6DvgIegvP`, page `1417:6`, nominal `1420:176`, viewport 1680×970. Frame HORIZONTAL. Rail instance `1420:177` 246×970 ; surface `1420:231` 1434×970 VERTICAL ; bandeau 70 px ; contenu `1420:241` 1434×900, VERTICAL, padding T/R/B/L 24/40/24/40, gap 8, overflow VERTICAL. Le corps est relatif à la surface ; les coordonnées ci-dessous sont **locales au contenu**, pas viewport. Pour ce nominal x absolu = 246 + x local, y absolu = 70 + y local. Vérifier via chaîne native au G2.
| Nœud | ID | x / y locaux | w × h | Layout |
|---|---|---:|---|---|
| En-tête | 1420:242 | 40 / 24 | 1354×92 | H |
| Synthèse | 1420:250 | 40 / 124 | 1354×136 | H |
| Séparateur | 1420:268 | 40 / 268 | 1354×1 | — |
| Reprise | 1420:269 | 40 / 277 | 1354×158 | H |
| Mes espaces | 1420:281 | 40 / 443 | 1354×30 | H |
| Filtres/recherche/tri/vues | 1420:285 | 40 / 481 | 1354×40 | H |
| Colonnes | 1420:318 | 40 / 529 | 1354×30 | H |
| Lignes | 1420:325 | 40 / 567 | 1354×255 | V |
| Pied de liste | 1425:5758 | 40 / 830 | 1354×50 | H |

Lignes 50 px + séparateur 1 px, 5×51. Pied « 5 sur 8 espaces » + Voir tous les espaces ; entièrement visible au nominal. Révision : synthèse 84→136 px, reprise 74→158 px, compteur 36→46 px, liste 8→5. Synthèse fond panel, radius 12 et border 1, diviseurs 92 ; reprise fond accentBg, stroke accent 1, radius 12, padding horizontal 24, gap 20, repère 64×64, titre CampusFlow 26, CTA composant existant 218×38. Contenus modifiables selon données, pas de géométrie absolue généralisée.
Le desktop compact 1280×970 garde rail 246, corps 1034, padding horizontal 28, contenu 978 ; même hauteur synthèse/reprise. Mobile 390×844 et 320×568 : bandeau mobile 70, padding 16, synthèse compacte 3 colonnes, reprise verticale, filtres et contrôles reflow, rangées compactes, liste scrollable ; le rail devient tiroir 246 dans état 14.30. Aucun contenu masqué sans accès ; zoom 200 % et clavier à vérifier. Le pied peut être sous pli en mobile ou liste déployée ; le défilement natif est intentionnel.

## 3. Inventaire des 34 états source (L0 observé)

Route /portfolio pour tous (Archives = sous-vue de portefeuille, route définitive à qualifier). Desktop 1680×970 sauf indication. Les liens sont des sources mutables ; G2 doit figer exports PNG/hash, pas utiliser le tableau comme oracle complet.

| Frame | Node ID | État / cas à exercer |
|---|---|---|
| 14.01 | 1420:176 | Liste nominale, 5 sur 8 |
| 14.02 | 1420:511 | Grille compacte, 5 sur 8 |
| 14.03 | 1420:769 | Groupée par type, 5 au total |
| 14.04 | 1420:1110 | Aucun projet ni préparation |
| 14.05 | 1420:1215 | Préparations seules |
| 14.06 | 1420:1469 | Recherche sans résultat |
| 14.07 | 1420:1606 | Favoris |
| 14.08 | 1420:1803 | Menu projet |
| 14.09 | 1420:2171 | Menu préparation |
| 14.10 | 1420:2539 | Renommage préparation |
| 14.11 | 1420:2892 | Ordre personnalisé |
| 14.12 | 1420:3227 | Archivage à confirmer |
| 14.13 | 1420:3576 | Archives et restauration |
| 14.14 | 1420:3702 | Suppression projet à qualifier, action désactivée |
| 14.15 | 1420:4054 | Suppression préparation |
| 14.16 | 1420:4403 | Résultat incertain, vérifier l'état |
| 14.17 | 1420:4752 | Chargement, compteurs inconnus |
| 14.18 | 1420:4876 | Erreur lecture, réessayer |
| 14.19 | 1420:4982 | Accès non confirmé, aucune donnée |
| 14.20 | 1420:5088 | Mobile 390×844 |
| 14.21 | 1420:5240 | Mobile 320×568 |
| 14.22 | 1421:4565 | Desktop compact 1280×970 |
| 14.23 | 1421:4659 | Renommage projet |
| 14.24 | 1421:4769 | Suppression bloquée |
| 14.25 | 1421:4879 | Mutation en cours, commandes indisponibles |
| 14.26 | 1422:4132 | Confirmation suppression projet, qualification positive hypothétique |
| 14.27 | 1422:4242 | Tri et préférences |
| 14.28 | 1422:4336 | Titre proposé par Nora |
| 14.29 | 1422:4446 | Restauration à confirmer |
| 14.30 | 1422:4500 | Tiroir navigation mobile, 390×844 |
| 14.31 | 1422:4560 | Projets seuls |
| 14.32 | 1422:4654 | Aucun favori |
| 14.33 | 1422:4718 | Ordre enregistré |
| 14.34 | 1425:5443 | Liste complète déployée, 8 espaces, Réduire la liste |

Planches non runtime : 14.00 `1420:5392`, 14.A `1423:5443` (index), 14.B `1423:5578` (comportements), 14.C `1423:5602` (source). [Accès Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP/?node-id=1417-6). Les pages 00–13 restent historiques/intactes ; ne pas les substituer à la cible.

## 4. Composants et tokens

| Responsabilité | Maître observé | Consigne |
|---|---|---|
| Rail personnel | 1420:66 | Variante du StudioShell commun ; props/overrides favoris, 246 px |
| Bandeau personnel | 1420:120 | Destination/compte, 70 px |
| Ligne espace | 1420:129 | Nom, initiale, résumé, type, activité, favori, réordonner ; réutiliser, 50 px |
| Ligne compacte | 1420:151 | Nom et métadonnée, reflow, menu ; 66 px |
| Tuile compacte | 1420:162 | Nom, résumé, métadonnée, favori, actions ; 116 px |
| Action primaire/secondaire | 12:14 / 12:16 | Instances existantes, libellé en prop |
| Icônes | composants Portefeuille / Icône / [responsabilité] | Extraire maîtres et vecteurs natifs, identité, SVG/paths, viewBox, tailles, stroke, états, labels ; pas de substitution similaire |

Variables liées page 10 : ui/base VariableID:1074:1040, ui/rail :1041, ui/panel :1042, ui/border :1043, ui/ink :1044, ui/muted :1045, ui/accent :1046 ; accentBg VariableID:606:15. Elles sont réutilisées en conception, non promues globalement. Accents ponctuels (lavande, destructif) non liés : réconcilier avec tokens code sans inventer de standard. Inter (Regular/Medium/Semi Bold/Bold) avec métriques natives, police réellement chargée obligatoire. Valeurs non relevées (line-height de chaque texte, poids, rayons, gaps de descendants, stroke exact, variables liées et variantes) à extraire L2. Aucun raster d'interface dans les frames contrôlées ; sources éditables, composants et Auto Layout natifs.

## 5. Contrats d'interaction et états

- Titre/CTA nouveau projet, rail, clic indicateur, filtres, recherche, tri, sélecteur de vue, ouverture ligne/tuile et reprise suivent PF-10–26. Le menu ne déclenche pas la navigation ; choix de tri indique actif ; sélection persiste. Clic Voir tous/Réduire préserve filtre, tri, contexte et scroll raisonnable. La grille ne change pas la donnée.
- Menus projet/préparation contextuels : ouvrir/reprendre, renommer, ajouter/retirer favori, monter/descendre, archiver, supprimer. Actions impossibles expliquées/disabled. Réorganisation uniquement mode personnalisé, alternative clavier. Le titre 14.28 est une proposition Nora, non une HumanDecision de création. Le CTA renommage ne modifie pas le futur nom par effet collatéral.
- Modales : overlay intentionnel absolu, fond obscurci, focus initial et piégé, Escape/Annuler si avant effet, retour focus au déclencheur ; Fermer pendant/UNKNOWN ne promet pas d'annuler. Destructif différencié par texte et couleur ; confirmation explicite, qualification bloquante 14.14/24, 14.26 seulement si les contrôles propriétaires sont positifs. Restauration conserve même ID.
- États vides distincts, loading skeleton et compteurs tirets, erreur/retry GET, refus sans données, pending sans double-clic, UNKNOWN avec relecture. Ne pas afficher succès optimiste non confirmé. A11y : navigation tab, focus visible, aria-label des icônes fonctionnelles, décoratives masquées, annonces live non intrusives, contraste, texte intégral accessible.
- Source complémentaire manquante : hover/focus/disabled exhaustifs, conflit 409, archive vide, filtre avec recherche > page, dernier espace absent/retiré, long titre, menu ancré aux contrôles déplacés et recherche rapide ouverte. Spécifier par composant, produire variantes ciblées si nécessaires avant code ; pas de libre interprétation de source critique. Prototype Figma non exhaustivement lié : aucune preuve métier.
- Organisation de la source : Auto Layout natif sur flux ; menus/modales/fonds/tiroir intentionnellement absolus. Ne pas introduire position:absolute pour simuler les gaps. Réutiliser shell partagé, pas de duplication par état. Les 34 frames ne sont pas 34 pages React.

## 6. Protocole de réception UX

G2 avant code : inventaire exhaustif par état, metadata + design_context si disponible + propriétés natives de tous les descendants contractuels, parents, bounds locaux/résolus, layout/sizing/padding/gap, variantes, tokens, overrides, typo, assets. PNG natif de chaque frame et SHA-256, date/version, manifeste avec empreinte sidecar, fixture DEV isolée, mapping node→composant→DOM/test-id→assertion. Ne pas importer le code illustratif MCP comme code produit. Sources critiques non résolues = STOP. Référence mutable : les IDs ici ne figent pas les octets. L0 et mesures ciblées observés ; L2 exhaustif et snapshots/hash non acquis.
G5 : 34/34 états de référence réellement exercés, plus cas complémentaires contractés ; même état/données/viewport/locale FR/Inter/DPR/zoom/navigateur. F2 x/y/w/h cible 0, max 2 CSS px uniquement rectangles stables contractés ; exactitude structure, ordre, styles calculés, asset, visibilité, contenus et actions. Captures PNG Figma et browser + diff régional, aucun seuil pixel-image global arbitraire. Responsive 1680,1280,390,320, zoom 200 %, clavier et menus, pas de troncature/collision. Prouver séparément effets, droits et persistance ; fixture ≠ LIVE. Chaque écart : cause, mesure, propriétaire, exit, arbitrage Morris. Recette utilisateur après preuves ; référence reçue ≠ runtime accepté. Tous tests NOT RUN ; aucun G2/G5 déclaré PASS.
