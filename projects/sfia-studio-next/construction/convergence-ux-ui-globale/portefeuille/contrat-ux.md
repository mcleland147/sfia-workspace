# SFIA Studio Next — Portefeuille personnel · Contrat UX/UI

**Date :** 28 novembre 2026 · **Périmètre :** R5 / ML5, convergence de l'expérience Pilote (Portefeuille personnel et L7), capitalisation de ML4D sans réouverture de la baseline intégrée ni nouveau jalon.
**Réconciliation 28/11/2026 :** main reste `997897fd7cf914771e7d08e8030dc7123fab7d25` (baseline intégrée E08) ; base produit de préparation `sfia/next-ml5-integrated-delivery-20261123@d215a5272025b2d1c7aa8391dd14f6442ea512fe`, tree `c5bab24132c7c745d6ddff0ba76dc8d5424ea13c`. [Suivi post-Equipéo v0.20 §25](https://github.com/mcleland147/sfia-workspace/blob/6a65f25f19eb14fbd0d44a4fa2f8bad40285d8eb/projects/sfia-studio-next/construction/suivi-trajectoire-corrective-post-recette-equipeo.md) ; les refs documentaires restent candidates. L1–L5 acceptés techniquement avec réserves, L6 différé NOT READY, 17 MP et 17 contrôles RECETTE ouverts. Git local, DB et runtime NON OBSERVÉS directement.
**Mandat :** Morris a reçu la composition Figma et validé A1–A5, les volets Portefeuille/L7/commun, les frontières OUT et la continuité méthodologique ; GO explicite du 28/11 pour actualiser les trois contrats et le suivi post-Equipéo sur leurs branches documentaires respectives. Publication limitée aux quatre fichiers ; la trajectoire de mandats ciblés demeure PROPOSED, à valider ensemble. Aucun GO Cursor, code, migration, Figma, PR, merge, LIVE, promotion, release ou adoption.
**Sources communes :** [SEF v0.2](../../../governance/SEF.md), [Roadmap](../../../governance/roadmap.md), [noms produit](../../../governance/product-naming-conventions.md), [P1–P3/F1–F2](../../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md), [ML4C/ML4D](../../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md), [registre central](../registre-central-revues.md), [contrat parcours intégré](../../convergence-ux-parcours-pilote-nora/contrat-acceptation.md), [vision fondatrice](../../../cadrage/vision-cible/README.md) (README lu ; PNG non réinspectés), [Figma page 14](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP/?node-id=1417-6). Git prévaut sur interprétation graphique et sur mémoire.

**Statut :** v0.4 — VALIDATED SPEC BY MORRIS pour A5 révisé le 28/11/2026 : suppression définitive et irréversible. Proportions desktop v0.3 et A1–A4 inchangés. Figma historique non modifié ; textes A5 incompatibles remplacés par le présent contrat, G2 PARTIAL, runtime NOT IMPLEMENTED / NOT PROVEN. [Fonctionnel](contrat-fonctionnel.md) · [Technique](contrat-technique.md).
Méthode : [Figma ↔ Cursor v1.1](../../../ux-ui/methodologie-contrat-figma-cursor.md), [transposition](../../../ux-ui/contrat-transposition-figma-code.md), [protocole F2](../../../ux-ui/protocole-fidelite-figma-runtime.md). Pas de nouveau template.

## 1. Direction artistique et composition

Accueil personnel avant bibliothèque. DA Studio sombre indigo, Inter, hiérarchie sobre, séparation par espaces et traits fins. Rail fixe, bandeau, contenu scrollable ; un seul shell runtime et variante personnelle F1. Tableau de bord dominant ; carte Reprendre le travail accentuée ; bibliothèque compacte, cinq éléments au plus ; lien vers liste complète. Les grandes cartes ne sont plus la vue par défaut ; grille optionnelle compacte. Compteurs cliquables, ligne/tuile ouvrable, menu contextualisé ; pas de CTA répété par ligne. Le libellé affiché correspond aux faits, aucun statut ou activité décoratifs.
Données Figma synthétiques : CampusFlow, Intervencia, Recette documentaire et cinq préparations ; 03/05/02 favoris, dates et résumés d'exemple. Ne pas copier en runtime ni considérer comme données réelles.

## 2. Mesures natives de référence (actualisation 28/11/2026 — v0.3)

FileKey `itgvCulInEnFY6DvgIegvP`, page `1417:6`, nominal `1420:176`, viewport 1680×970. Frame HORIZONTAL. Rail instance `1420:177` 246×970 ; surface `1420:231` 1434×970 VERTICAL ; bandeau 70 px ; contenu `1420:241` 1434×900, VERTICAL, padding T/R/B/L 24/40/24/40, gap inter-régions 12, overflow VERTICAL. Le corps est relatif à la surface ; les coordonnées ci-dessous sont **locales au contenu**, pas viewport. Pour ce nominal x absolu = 246 + x local, y absolu = 70 + y local. Vérifier via chaîne native au G2.
| Nœud | ID | x / y locaux | w × h | Layout |
|---|---|---:|---|---|
| En-tête | 1420:242 | 40 / 24 | 1354×92 | H |
| Synthèse | 1420:250 | 40 / 128 | 1354×160 | H |
| Séparateur | 1420:268 | 40 / 300 | 1354×1 | — |
| Reprise | 1420:269 | 40 / 313 | 1354×180 | H |
| Mes espaces | 1420:281 | 40 / 505 | 1354×30 | H |
| Filtres/recherche/tri/vues | 1420:285 | 40 / 547 | 1354×40 | H |
| Colonnes | 1420:318 | 40 / 599 | 1354×30 | H |
| Lignes | 1420:325 | 40 / 641 | 1354×305 | V |
| Pied de liste | 1425:5758 | 40 / 958 | 1354×50 | H |

Lignes 60 px + séparateur 1 px, 5×61. Pied « 5 sur 8 espaces » + Voir tous les espaces ; sous le pli au nominal, accessible par défilement naturel (aucune compression ni hauteur vide artificielle). Révision validée : synthèse 136→160 px, reprise 158→180 px, ligne 50→60 px, gap inter-régions 8→12 px ; compteur 46 px et aperçu de cinq espaces conservés. Synthèse fond panel, radius 12 et border 1, diviseurs 92 ; reprise fond accentBg, stroke accent 1, radius 12, padding horizontal 24, gap 20, repère 64×64, titre CampusFlow 26, CTA composant existant 218×38. Contenus modifiables selon données, pas de géométrie absolue généralisée.
Le desktop compact 1280×970 garde rail 246, corps 1034, padding horizontal 28, contenu 978 ; mêmes hauteurs desktop et gap inter-régions (160/180/60/12). Reflow selon largeur, sans compresser artificiellement. Les variantes mobiles restent inchangées. Mobile 390×844 et 320×568 : bandeau mobile 70, padding 16, synthèse compacte 3 colonnes, reprise verticale, filtres et contrôles reflow, rangées compactes, liste scrollable ; le rail devient tiroir 246 dans état 14.30. Aucun contenu masqué sans accès ; zoom 200 % et clavier à vérifier. Le pied peut être sous pli en desktop nominal/compact, en mobile ou liste déployée ; le défilement natif est intentionnel.

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
| 14.12 | 1420:3227 | Archivage personnel à confirmer : texte à réconcilier A4 |
| 14.13 | 1420:3576 | Archives personnelles, accès et restauration ; aucun mode lecture seule |
| 14.14 | 1420:3702 | Suppression projet à qualifier, action désactivée |
| 14.15 | 1420:4054 | Suppression préparation — gate A5 ; confirmation irréversible, texte historique à remplacer |
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
| 14.26 | 1422:4132 | Confirmation suppression définitive projet — gate A5 ; texte historique à remplacer |
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
| Ligne espace | 1420:129 | Nom, initiale, résumé, type, activité, favori, réordonner ; réutiliser, 60 px |
| Ligne compacte | 1420:151 | Nom et métadonnée, reflow, menu ; 66 px |
| Tuile compacte | 1420:162 | Nom, résumé, métadonnée, favori, actions ; 116 px |
| Action primaire/secondaire | 12:14 / 12:16 | Instances existantes, libellé en prop |
| Icônes | composants Portefeuille / Icône / [responsabilité] | Extraire maîtres et vecteurs natifs, identité, SVG/paths, viewBox, tailles, stroke, états, labels ; pas de substitution similaire |

Variables liées page 10 : ui/base VariableID:1074:1040, ui/rail :1041, ui/panel :1042, ui/border :1043, ui/ink :1044, ui/muted :1045, ui/accent :1046 ; accentBg VariableID:606:15. Elles sont réutilisées en conception, non promues globalement. Accents ponctuels (lavande, destructif) non liés : réconcilier avec tokens code sans inventer de standard. Inter (Regular/Medium/Semi Bold/Bold) avec métriques natives, police réellement chargée obligatoire. Valeurs non relevées (line-height de chaque texte, poids, rayons, gaps de descendants, stroke exact, variables liées et variantes) à extraire L2. Aucun raster d'interface dans les frames contrôlées ; sources éditables, composants et Auto Layout natifs.

## 5. Contrats d'interaction et états

- Titre/CTA nouveau projet, rail, clic indicateur, filtres, recherche, tri, sélecteur de vue, ouverture ligne/tuile et reprise suivent PF-10–26. Le menu ne déclenche pas la navigation ; choix de tri indique actif ; sélection persiste. Clic Voir tous/Réduire préserve filtre, tri, contexte et scroll raisonnable. La grille ne change pas la donnée.
- Menus projet/préparation contextuels : ouvrir/reprendre, renommer, ajouter/retirer favori, monter/descendre, archiver, supprimer. Actions impossibles expliquées/disabled. Réorganisation uniquement mode personnalisé, alternative clavier. Le titre 14.28 est une proposition Nora, non une HumanDecision de création. Le CTA renommage ne modifie pas le futur nom par effet collatéral.
- Modales : overlay intentionnel absolu, fond obscurci, focus initial/piégé, Escape/Annuler avant effet, retour focus ; Fermer pendant/UNKNOWN ne promet pas d'annuler. Archive personnelle : expliciter « Retirer du portefeuille courant ; accessible dans Archives, sans interruption du travail » ; ne pas annoncer mise en lecture seule. Supprimer : différencier texte et couleur, afficher le nom et « Ce projet et ses données seront supprimés définitivement. Cette action est irréversible. » (adapter à la préparation). Actions Annuler / Supprimer définitivement ; focus initial non destructif, pending, erreur ou blocage intelligible ; aucun effet Git externe. 14.14/24 blocage, 14.15/26 confirmation après qualification. Succès sur ACK et relecture : disparition de la cible. Aucun écran Supprimés, corbeille ou récupération. Restauration même ID pour A4 uniquement.
- États vides distincts, loading skeleton et compteurs tirets, erreur/retry GET, refus sans données, pending sans double-clic, UNKNOWN avec relecture. Ne pas afficher succès optimiste non confirmé. A11y : navigation tab, focus visible, aria-label des icônes fonctionnelles, décoratives masquées, annonces live non intrusives, contraste, texte intégral accessible.
- Source complémentaire manquante : hover/focus/disabled exhaustifs, conflit 409, archive vide, filtre avec recherche > page, dernier espace absent/retiré, long titre, menu ancré aux contrôles déplacés et recherche rapide ouverte. Spécifier par composant, produire variantes ciblées si nécessaires avant code ; pas de libre interprétation de source critique. Prototype Figma non exhaustivement lié : aucune preuve métier.
- Organisation de la source : Auto Layout natif sur flux ; menus/modales/fonds/tiroir intentionnellement absolus. Ne pas introduire position:absolute pour simuler les gaps. Réutiliser shell partagé, pas de duplication par état. Les 34 frames ne sont pas 34 pages React.

## 5.1. Delta d'alignement A1–A5 et ML5 (28/11)

Lors de l'actualisation v0.2, la composition, les géométries, les 34 références L0 et les fondations F1/F2 étaient conservées, sans mutation Figma. Le delta v0.3 §5.2 remplace uniquement les proportions desktop et leurs positions dérivées ; les fondations restent inchangées. G2 devra matérialiser et figer les seuls compléments applicables au mandat concerné ; pas de nouveau chantier de DA.

| Sujet | Comportement cible | Source / complément |
|---|---|---|
| A1 | Dernière ouverture effective, date création libellée si absence de signal ; reprise absente si aucun dernier espace courant | 14.01–07/20–22/31–34 ; libellé ACTIVITÉ à préciser et état reprise absente |
| A2 | Titre initial neutre, premier titre Nora puis contrôle manuel ; pas de confusion avec nom officiel | 14.10/23/28 ; états conflit et valeur longue |
| A3 | Trois vues, tri et ordre durables ; drag + clavier ; aucun faux succès | 14.11/25/27/33/34 ; tests conflit/inter-session, pas d'imposition de rangs |
| A4 | Archives personnelles accessibles et ouvrables selon droits existants ; favoris/ordre restaurés ; aucune mise en lecture seule | 14.12/13/29 ; état archive vide, CTA ouvrir et restaurer, libellé confirmation ; pas de bandeau read-only à concevoir |
| A5 | Suppression définitive, irréversible, contrôle propriétaire et blocage explicite si opération non résolue | 14.14/15/16/24/25/26 ; composition historique réutilisée, textes de récupération obsolètes remplacés par confirmation irréversible ; aucune sous-vue Supprimés ni récupération |

Le shell ML5 et ses destinations existantes restent la base ; ne pas importer un shell parallèle de Figma. Les consultations récentes internes au projet (MP08) ne sont pas la liste des espaces du portefeuille ; ne pas modifier leur identité au nom d'A1. Volet L7 : sources existantes des surfaces concernées, notamment Travail avec Nora et FinOps, à extraire selon méthode ; pas de changement cognitif Capacité 2 ou dictée.

## 5.2. Delta de conception desktop validé et finalisation ciblée (28/11/2026)

**GO Morris :** après la revue visuelle DEV du candidat `d79fd252684b0be76b61ab607cc88d00b7fb7232`, accord explicite sur 160 px (synthèse), 180 px (reprise), 60 px (ligne desktop), 12 px (gap inter-régions), puis GO CONCEPTION ET DOCUMENTATION pour actualiser Figma et ce contrat sur branche dédiée et préparer le correctif. Ce delta remplace les anciennes dimensions de §2/4, pas les contrats d'autorité, A1–A5, F1/F2 ni la DA. Aucun GO Delivery, push projet, PR, merge, promotion, LIVE ou release implicite. La base produit courante est distincte de la base historique de préparation en tête du document.

**Figma modifié et relu nativement :** file `itgvCulInEnFY6DvgIegvP`, page `1417:6` ; 34 frames conservées, 31 desktop (dont compact 14.22 et fonds des sept états fonctionnels OUT), 31 synthèses, 22 reprises, 108 instances de ligne et maître `1420:129` à 60 px ; les trois frames mobiles 14.20/21/30 et maître compact `1420:151` 66 px restent inchangés. Aucune nouvelle fonction dans A2/A5. Relecture native : zéro écart sur les hauteurs/gap des régions modifiées ; capture source nominale 1680×970 inspectée, pas de capture runtime appariée ni F2 PASS. Note source 14.C `1423:5610` actualisée ; pages 00–13 non modifiées. Les coordonnées révisées de §2 sont des valeurs natives relues, pas une estimation. Le pied nominal a y local 958, h50 ; contenu vertical scrollable 900 px, le cinquième élément et le pied sont accessibles par défilement.

**Composants de correction (références inchangées sauf géométrie dérivée) :**

| Région | Contrat applicable |
|---|---|
| Barre `1420:285` | 1354×40 au nominal, deux groupes aux extrémités, espace flexible (399 px observé avant révision à largeur nominale ; valeur dérivée, non un spacer rigide), filtres alignés avec bibliothèque, recherche/tri/vues à droite, sans double marge. |
| Synthèse/reprise | 160/180 px, gap 12 entre régions ; séparateur entre synthèse et reprise ; contenu centré, compteur 46, repère 64×64 et CTA existant 218×38. |
| Grille 14.02 | Nouveau conteneur natif `1447:4575` (1354×240, y local 599), deux rangées conservées `1420:653`, `1420:696` ; trois tuiles au nominal (443×116, gap horizontal 12, vertical 8), cinquième et quatrième en deuxième rangée. Maître `1420:162` inchangé (438×116 ; largeur instance 443). Reflow compact/mobile selon largeur disponible, pas auto-fill de cinq petites cartes ; vraie présentation tuile, données et actions D1 communes sans métadonnées répétées. |
| Menu 14.08/09 | Overlays `1420:2138` et `1420:2506` 298×359, positions Figma y 464/584 ; choix tri `1422:5448` y646, taille 249×229. Header identité/type, séparateur, sept actions 270×35, gap 5, icônes natives 20×20, padding intérieur 14 + stroke ; placement runtime relatif au déclencheur et limité au viewport, pas de coordonnées absolues globales. Renommer/Supprimer indisponibles, Monter/Descendre selon ordre. |
| Liste/groupée | Maître ligne 60 px + séparateur 1 ; identité et métadonnée sincère (pas d'activité dupliquée sous le nom et dans colonne), icônes favoris/actions, en-têtes groupes et chevron selon 14.03 ; ligne/tuile ouvrable hors actions. |
| Rail / dialogues | Conserver améliorations reçues, appliquer focus initial/piégé/retour, Escape, une navigation personnelle mobile cohérente, états sincères et PF34 du contrat fonctionnel. Pas de nouvelle DA. |

**Sortie :** correction ciblée selon le suivi v0.26 §31, avec intégration et revue visuelle du candidat DEV avant réception. Les 27 états IN restent le contrat de couverture ; ne pas relancer une campagne générale de construction ou de captures par état. G2 compléter les différences de source contractuelles non qualifiées et figer références modifiées ; G5 preuves discriminantes et qualification proportionnée (§28.3 du suivi), réserves visuelles non bloquantes seulement après décision Morris. F2 inchangé ; aucune dérogation implicite. R-PF34-UI et accessibilité ne sont pas de simples preuves différables. Les 7 états A2/A5 restent OUT de la livraison courante, même si leurs fonds ont suivi les proportions communes.

## 6. Protocole de réception UX

G2 avant code : inventaire exhaustif par état, metadata + design_context si disponible + propriétés natives de tous les descendants contractuels, parents, bounds locaux/résolus, layout/sizing/padding/gap, variantes, tokens, overrides, typo, assets. PNG natif de chaque frame et SHA-256, date/version, manifeste avec empreinte sidecar, fixture DEV isolée, mapping node→composant→DOM/test-id→assertion. Ne pas importer le code illustratif MCP comme code produit. Sources critiques non résolues = STOP. Référence mutable : les IDs ici ne figent pas les octets. L0 et mesures ciblées observés ; L2 exhaustif et snapshots/hash non acquis.
G5 : exercer les 34 états de référence et compléments contractés au fil des mandats qui portent leur capacité ; matrice de couverture cumulative, puis parcours intégrés. Si A5 reporté sur GO Morris, ses états restent DEFERRED/NOT RUN avec exit explicite, jamais 34/34 PASS par déduction. Même état/données/viewport/locale FR/Inter/DPR/zoom/navigateur ; F2 x/y/w/h cible 0, max 2 CSS px uniquement rectangles stables contractés ; structure, styles, assets, contenus et actions, PNG et diff régional, aucun seuil pixel global. 1680/1280/390/320, zoom 200 %, clavier, pas de collision. Prouver séparément effets, droits et persistance ; fixture ≠ LIVE. Chaque écart : cause, mesure, propriétaire, exit, arbitrage. UAT distincte ; tests de la nouvelle cible v0.3 NOT RUN, preuves historiques réutilisables uniquement si non invalidées ; G2/G5 globaux non PASS.
