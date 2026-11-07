# SFIA Studio Next — Finalisation G2/G3 : protocole de sortie et dossier de preuves

> **Mise en dépôt (2026-11-07) :** document D0 de préparation relu et accepté par Morris dans sa direction. Les mentions « candidat », « aucune écriture Git » ou « non publié » décrivent son état au moment de la rédaction ; la publication ne vaut pas complétude G2, validation de chaque choix G3, autorisation D3 ou preuve navigateur. Les arbitrages A1–A3/P1–P3/F1/F2 restent ceux de la décision canonique.

**Date de référence :** 2026-11-07 • **D0 candidate** • **Git source :** `main@968f74be7e36d5387487fae0eeec85b702d074e2`.
**Projet :** SFIA Studio Next uniquement. **Aucune écriture Git, Figma ni code dans cette étape.**

## 1. Décision de revue

Les décisions produit **A1–A3, P1–P3, F1 (4 variantes), F2** sont validées Morris et mergées. La validation exprimée dans le présent chat confirme la **direction de la préparation technique G3**, pas le fonctionnement du runtime ni la disponibilité de la source Figma figée. Le statut exact est : **G1 VALIDATED SPEC / G2 SOURCE PARTIAL / G3 CONTRACT REVISED CANDIDATE / G4 NO CODE GO / G5 NOT RUN**.

Le dernier obstacle G2 tient à deux preuves absentes : **(i)** extraction native détaillée des descendants utiles à chaque état de composant ; **(ii)** images de référence Figma enregistrées sous empreinte SHA-256. Les captures éphémères générées dans Figma ont été observables mais non archivables dans cet environnement (résolution réseau indisponible). Ne pas substituer une image reconstruite ou un screenshot visuel approximatif à cette preuve.

## 2. Périmètre d'acquisition L2 ciblé

Ne pas extraire les centaines d'écrans du fichier. Un **Design Implementation Pack** cohérent doit réunir les familles réellement implémentées et leurs états nécessaires ; chaque famille comprend un écran maître, des différences de variante, et un oracle comportemental :

| Ordre de risque | Composants par responsabilité | Frames Figma vérifiées / à compléter | Contrôles CU/UXC | État actuel |
| --- | --- | --- | --- | --- |
| P0 | Shell / nav F1 quatre variantes, focus et mobile | 01 `94:50`, 03 `94:214`, 04 `94:370`, 18 `97:359`, 89 `160:175`, 216 `282:468`, 217 `282:492`; 19 `100:39` visuelle seulement | CU-09/15, UXC-13 | Rail L1/L2 partiel acquis ; enfants actifs, icônes, texte, responsive incomplets |
| P0 | Portefeuille et reprise de préparation | 01, 64 `158:264`, 65 `158:336`, 73 `158:912`, 74 `159:145` | CU-02/03, UXC-02/11/12 | 01/74 conteneurs lus ; listes/cartes/états absents |
| P0 | Sas, fil Nora, composer et activité | 02 `94:135`, 03, 74, 109 `161:216`, 110 `161:288`, 206–208 | CU-04/05/06, UXC-03/04/05 | 03 composition lue ; descendance du composer et état interruption non complets |
| P0 | Documents/inspection/révision D4 | 04, 18, 89, 92 `160:391`, 93, 205 `241:385` | CU-07/14, UXC-06/11/12 | Rails 244/246 et grille 800+20+510 lus ; éditeur, versions, conflits incomplets |
| P1 | Journal sujets/acquis | 05 `94:515`, 97–100 | CU-08, UXC-07 | Composition et états à vérifier |
| P1 | Pilotage/CKI/décision/restriction | 22 `125:33`, 24 `127:106`, 40 `129:72`, 28/32/33/41 | CU-10..13, UXC-08..10 | 40 grille lue ; variantes négatives à compléter |
| P1 | États dégradés / reflow | 63/66/78/92/93, 216/217 | CU-14..16, UXC-11/13/14 | 390 Figma lu ; **aucune** maquette native 320 contractualisée |

**Attention aux prototypes :** écran 19 = D8 hors périmètre, même s'il sert de référence visuelle `inspection`. Les maquettes mobiles 216/217 contiennent un libellé « Sources Git » ; **aucune navigation ou action Git fonctionnelle D7–D9** ne doit apparaître active tant que ML4 ne l'implémente pas.

## 3. Propriétés natives déjà constatées

| Variante F1 | Nœud maître | Dimensions | Padding T/R/B/L ; gap | Couleur native |
| --- | --- | --- | --- | --- |
| Personnel | `94:51` (01) | 246×970 | 20/19/0/19 ; 10 | `#0C101A` |
| Conversation | `94:215` (03) | 240×970 | 25/19/0/19 ; 13 | `#0D111B` |
| Projet | `160:176` (89) | 246×970 | 24/24/24/24 ; 13 | `#0C1020` |
| Inspection | `94:372` (04), `97:361` (18), `100:41` (19) | 244×970 | 23/19/22/19 ; 11 | `#0C101A` |

Conteneurs : frame 01 zone x246/w1434, barre h59 ; frame 03 zone x240/w1440, barre h61 ; frame 89 grille x285/y254/w1330/h585 = **800 + 20 + 510**, panneaux padding 18/gap 12. Les frames 74 (reprise) et 40 (journal décision) réemploient 800+20+510. Mobile 216/217 = planches **390×1350**, nav **390×73**, padding 16, contenu commençant y73 ; le navigateur ne doit **pas** utiliser 1350 comme hauteur de viewport.

**Typographie constatée :** titres Figma Inter Semi Bold 600, 32px, couleur `#F4F6FC` (nœuds `160:209` et `159:179`), mobile Inter Semi Bold 600 15px (`282:470`). L'actuel `web/src/app/globals.css` ne fixe pas explicitement `Inter` sur l'application ; l'intégrateur doit définir une provenance de police contrôlée et mesurer les styles calculés. **Ne pas inclure ni publier de font sans vérifier les droits de licence.**

## 4. Le protocole source : G2 PRE-BUILD (obligatoire avant code UI)

Pour chaque composant et état **à construire** :

1. Identifier `CU`, `UXC`, responsabilité produit, route, état, frame Figma et `nodeId`, chaîne parent, visibilité et propriétaire. Exclure les éléments cachés/prototypes non opérationnels ; consigner les écarts plutôt que les maquiller.
2. Extraire **L1/L2 natif** : frame et parent bounds local/absolu avec transformation vérifiée, auto-layout, alignement, `FIXED/HUG/FILL`, contraintes, padding, gap, overflow/clipping, styles de texte (segments mixtes inclus), couleurs, stroke, radius, effets, assets, instance/variante.
3. Exporter localement **la capture réelle de Figma** au format PNG pour les frames/états de référence, à leur **taille native**, sans redimensionnement opaque ni génération synthétique. Inclure des fixtures neutres/synthétiques compatibles avec l'état cible ; pas de données personnelles ou secrets.
4. Archiver l'export et l'empreinte `SHA-256`, le `manifestSha256`, le `figmaFileKey`, page/frame, date de capture, identifiant de version si accessible (sinon `NOT AVAILABLE`), viewport/design dimensions, état/fixture, composants couverts et commit SHA Git. Conserver dans un artefact Git de preuves sous dossier borné à définir au mandat, sans URL éphémère comme seule provenance.
5. Établir la **matrice de couverture** de tous les composants de la première tranche intégrée : `OBSERVED`, `COMPLETE_FOR_COMPONENT`, `UNRESOLVED` ou `OUT_OF_SCOPE`. **STOP** si un composant critique porte encore `UNRESOLVED`, et ne pas coder son rendu en l'inventant.
6. Vérifier les contrastes de tokens et font chargée, mêmes fixtures, format/rendu stable. Passer un contrôle de complétude automatique qui échoue sur liens PNG absents, digest non concordant, ID source invalide ou valeurs critiques manquantes.

La réalisation de cette acquisition via Cursor, si elle devient nécessaire, relève d'un **mandat D3 spécifique** ; elle n'autorise pas automatiquement la modification du runtime ou l'accès à la branche principale.

## 5. Clarification des gates — éviter une dépendance circulaire

Le protocole R3 actuel demande le calibrage du diff image, mais **la première paire Figma/runtime au même état ne peut exister avant qu'un premier rendu de code soit produit**. Il faut donc distinguer deux obligations sans affaiblir F2 :

- **G2-Source READY** (avant code des composants concernés) : extractions L2 utiles complètes, captures PNG source figées/hashées, environnement/fixtures et procédure de contrôle définis. **Pas de seuil de diff image inventé.**
- **G5-Comparaison/recette** (après premier rendu et à chaque révision candidate) : capturer la page DOM au même état et SHA, mesurer `getBoundingClientRect` et computed styles, calibrer le diff régional (texte/anticrénelage distingués), faire valider l'oracle d'image par Morris et rejouer les négatifs. **F2 reste strict : objectif 0, limite ≤2 CSS px rectangles stables, 0 chevauchement/troncature non voulus.**

Cette distinction est une **clarification opérationnelle candidate**, pas une modification silencieuse du SEF, des décisions ou du protocole normatif Git. Morris valide son intégration dans G3 avant GO technique.

## 6. Critères de sortie proposés (non exécutés)

- **G2-Source :** toutes les familles de composants de la tranche réellement visée ont ID + parentChain + dimensions + auto-layout + typographie + couleurs + états + export PNG + SHA-256 et provenance. Zéro référence manquante ou `UNRESOLVED` pour un composant critique ; variante 320 = reflow à tester, **pas** pixel-perfect sur un Figma 320 inexistant.
- **G3-Construction :** contrat D1/D2/D4/UX/QA signé, fichiers autorisés, intégrateur identifié, branche de travail/lanes confirmées, jeux de données et preuves/STOP contractualisés. Profil SFIA v2.6 à qualifier.
- **G4 :** GO code distinct de Morris, avec condition **acquisition G2 avant rendu**. Au moindre écart source, rapport et STOP technique plutôt qu'une interface improvisée.
- **G5 :** UXC-01..14 examinés et prouvés au bon SHA, aucune prétention de PASS depuis le CI pré-convergence.

**Verdict :** `G2 SOURCE NOT READY IN THIS ENVIRONMENT / G3 CONTRACT PREPARABLE / G4 NOT AUTHORIZED / G5 NOT RUN`.

---

## 7. Préflight G2 borné après validation G3 A1/A2 (2026-11-07)

**Statut :** protocole documenté et accepté en orientation ; **G2-SOURCE PARTIAL**, aucun export PNG immuable ni SHA-256 vérifié à ce jour. Les modalités A1 (25/page, keyset) et A2 (URL read-only) sont maintenant **VALIDATED SPEC**, voir le [contrat technique G3 §7](contrat-technique-convergence-ux.md). Elles ne remplacent pas l'extraction L2.

1. **Avant toute écriture UI concernée** : pré-check Figma/nœuds et états cibles, export natif des PNG (pas de rendu synthétique), archivage local dans une destination de preuves bornée et autorisée, et empreinte SHA-256 par fichier. Enregistrer date, source `fileKey/pageId/frameId`, version Figma si accessible (sinon `NOT AVAILABLE`), dimensions, état/fixture, composant et `sourceSHA` Git.
2. **Manifeste L2 sans auto-référence** : sauvegarder propriétés natives/ID/parent chain/bounds/layout/typographie/assets/variants/contraintes et références PNG, puis calculer `manifestSha256` dans un **sidecar** ou dans le rapport de preuves (jamais dans le contenu haché lui-même). Relecture et contrôle digest obligatoire avant d'accorder `COMPLETE_FOR_COMPONENT`.
3. **Validation de couverture** : pour toutes les familles effectivement modifiées, `COMPLETE_FOR_COMPONENT` ou `OUT_OF_SCOPE` justifié ; `UNRESOLVED` sur mesure source critique = STOP de code de cette famille, sans approximation ni micro-correction par marge. Les quatre variantes F1 doivent être vérifiées ; la frame 19 n'ajoute pas la capacité D8 et les planches 216/217 ne constituent pas des viewports 1350px.
4. **Échec de l'outil** : l'URL éphémère Figma seule ne prouve pas l'archive ; si acquisition, stockage ou vérification de hash échouent, produire un rapport `G2-SOURCE FAILED/INCOMPLETE`, sans prétendre `READY` et **sans code UI**. L'environnement Cursor devra constater sa capacité réseau et son worktree local, tous deux **NON OBSERVÉS** ici.
5. **Après premier rendu seulement (G5)** : contrôles des rectangles DOM/styles calculés à 1680/1280/390/320 et zoom 200 %, captures à même état/fixture/font/DPR, calibration **régionale** du seuil image à faire approuver Morris. La tolérance géométrique F2 déjà validée reste **0 recherché / ≤2 CSS px pour rectangles stables**. Aucun seuil global d'image n'est inventé.

**Autorité :** cette procédure est une **condition d'entrée de construction** ; la réalisation de l'export par Cursor nécessite un mandat D3 séparé, même si aucun code n'est encore écrit.
