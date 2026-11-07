# SFIA Studio Next — Convergence UX ML1–ML3
## Dossier de sécurisation des quatre points avant contrat Cursor

**État :** `DOCUMENTED / P1–P3 + F1–F2 VALIDATED SPEC BY MORRIS / DIP L2 PARTIAL / NOT IMPLEMENTED`
**Date :** 2026-11-07
**Git observé :** `mcleland147/sfia-workspace`, `main@9435f4c181c94ac5fbdfacd3e1941c82dd874162`.
**Figma lu en natif :** `itgvCulInEnFY6DvgIegvP`, page `94:49`, nœuds précis ci-dessous.
**État local, application déployée, DOM runtime, captures navigateur :** `NON OBSERVÉ`.
**Autorité :** Morris a explicitement approuvé **P1, P2, P3, F1 et le principe F2**, puis donné GO à l'intégration et au merge documentaires. Le [record de décision](../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) prévaut sur les mentions historiques « proposé / à valider » de cette revue. **Aucun GO code/DB/Figma/Cursor, STABLE ou ADOPTED**.

## 1. Situation actuelle, périmètre et résultat attendu

La qualification R5 et les trois arbitrages **A1, A2, A3** sont intégrés dans `main` via PR #664. Le protocole R3 de fidélité et le contrat d'acceptation v0.3 y sont **candidats**, pas `VALIDATED SPEC` complet. Les frames Figma Git ML4 218–235 sont validées **en conception**, mais ne font pas partie de la réalisation UX ML1–ML3.

**Résultat utilisateur proposé :** le Pilote retrouve la même préparation et le même fil depuis le portefeuille, retrouve et révise les documents de son projet, utilise Nora sans fausses actions, et navigue entre les responsabilités D1–D6 dans une UI conforme aux compositions Figma réellement applicables. Le **même ensemble** couvre code, tests, documentation et captures navigateur, et précède le build technique ML4.

**Périmètre de conformité visuelle :** les composants qui sont réellement construits et leurs variantes/états utiles, pas les 242 frames indistinctement. Les captures et la géométrie Figma servent d'**oracle**, non d'image à recopier en positionnement absolu.

## 2. Point 1 — Contrat des parcours P1, P2 et P3

### P1 — Portefeuille : retrouver et reprendre les préparations

**Décision de portée déjà acquise (A1) : OUI à la reprise ciblée.**

**Modalités que je recommande de faire valider :**

- Trois accès explicites : `Mes projets`, `Préparations à reprendre`, `Nouvelle préparation` ; l'action « Reprendre » lit **l'ID existant**, ne crée jamais une seconde préparation.
- Collection filtrée **côté serveur** : `ownerPilotId` du Pilote authentifié, état `OPEN`, absence effective de `preparationProjectLinks` ; pagination éventuelle si volumétrie prouvée, sans inventer de notion de « dernière activité ».
- Tri proposé : `createdAt DESC`, puis `id` comme départage déterministe. Afficher titre/aperçu seulement si disponibles ; sinon libellé neutre, vraie date de création, état. La liste n'est pas déduite du compteur `openPreparations`.
- Deux situations : la préparation a déjà été rattachée au moment de l'ouverture → relire côté serveur, proposer le projet correspondant après vérification de l'ownership ; indisponible/expirée/interdite → état d'erreur ou refus sans divulgation d'un autre Pilote.
- Parcours : `Portefeuille → Reprendre → /preparations/{id} → même conversation et documents → projet si créé`. Aucune création par GET ou simple sélection.

**Constat vérifié dans Git :** `domains/identity/portfolio.ts` renvoie actuellement `openPreparations: number` et les projets ; `app/portfolio/page.tsx` crée une préparation via `POST /api/preparations`. Le compteur existant exclut les liens projet mais **ne filtre pas explicitement le statut `OPEN`** : la future projection devra contrôler les deux critères. Il faut **qualifier un contrat de lecture D1/D2 supplémentaire ou étendre la projection**, pas simplement afficher un lien.

**Preuves discriminantes :** P1-01 préparation OPEN non liée retrouvée ; P1-02 rechargement/reconnexion, même ID ; P1-03 aucun POST de création au clic Reprendre ; P1-04 deux Pilotes isolés ; P1-05 état lié/expiré/404/401 sans fuite ; P1-06 liste vide et création distincte.

### P2 — Documents : inspection, révision et retour au projet

**Décision de portée acquise (A2) : OUI à la révision depuis le projet, D4 unique.**

**Modalités recommandées :**

- `Projet → Documents → Bibliothèque → Inspection → Réviser → Version/historique`, en conservant les informations de projet et le retour au fil Nora. Le document conserve un **ID et un propriétaire D4 uniques**.
- Pour une révision existante, utiliser le chemin base-aware `reviseDocument` / route document avec `documentId`, `baseRevisionId`, `correlationKey`, droits/ownership ; la création initiale d'un document reste un acte distinct.
- Un conflit `BASE_STALE` / HTTP 409 n'écrase pas la révision actuelle. Proposer consultation/diff et relecture des deux versions, puis nouvelle intention explicite ; `UNKNOWN` ne devient jamais `AVAILABLE` sur un simple timeout.
- Conserver **une intention stable** pour la réconciliation d'un enregistrement dont l'accusé est perdu, et vérifier le résultat avant une seconde mutation.
- Le projet obtient le contexte de préparation depuis une lecture serveur autorisée, pas depuis une ID fournie aveuglément par le navigateur.

**Constat Git :** `projects/[projectId]/page.tsx` expose surtout lecture/inspection ; `preparations/[preparationId]/page.tsx` possède deux chemins de sauvegarde distincts ; `savePreparationDocument` mémorise la base fournie sans vérifier qu’elle est toujours la dernière version disponible, contrairement à `reviseDocument` qui contrôle explicitement `BASE_STALE`. Il ne faut pas recopier sans examen la sémantique du bouton « Sauvegarder » dans le projet.

**Preuves :** P2-01 bibliothèque + consultation depuis le projet ; P2-02 nouvelle révision visible et historique intact ; P2-03 conflit en concurrence contrôlée ; P2-04 réponse inconnue / même corrélation sans doublon ; P2-05 droits entre Pilotes ; P2-06 reprise depuis Nora et retour à la source sans perdre le contexte.

### P3 — Navigation : shell commun, compositions réelles

**Orientation acceptée sur le principe, modalités à valider :** un shell produit et une navigation cohérents, avec **variantes explicites et réutilisables** selon le contexte, plutôt que plusieurs navigations implémentées indépendamment.

- Contexte **personnel** : portefeuille, créations, préparations ouvertes, profil ; ne pas afficher « Sources Git » comme fonction active si ML4 non construit.
- Contexte **projet** : travail Nora, projet, journal, documents, trajectoire et décisions. États de permission et disponibilité réels, pas de boutons fictifs.
- Navigation **mobile** obligatoire : les références R3 216/217 à 390 px comportent une navigation mobile de 73 px et padding 16 px. Le runtime actuel masque son rail en-dessous de `md` sans équivalent repéré dans `app/layout.tsx` ; il faut un accès au même parcours sur mobile et au clavier.
- Préserver `projectId`, `preparationId`, document, éventuelle révision/onglet au travers des changements de surface, refresh, lien profond et retour navigateur, tout en validant le contexte serveur.
- Les routes et commandes existantes gardent leur autorité ; la nouvelle UI ne crée ni contrôle D5/D6 concurrent, ni privilège Git, ni moteur Nora d'exécution.

**Preuves :** P3-01 navigation et retour sans perte de projet ; P3-02 mobile/zoom 200 %/clavier ; P3-03 états chargé/vide/refus/erreur/réessai ; P3-04 pas de lien Git/Cursor réellement activé ; P3-05 régression D1–D6, deux projets et deux Pilotes.

## 3. Point 2 — Fondations Figma : le rail de 240/246 px

### Observation native (pas hypothèse)

| Contexte Figma et nœud | Largeur | Fond | Auto-layout et disposition |
|---|---:|---|---|
| Portefeuille 01 : `94:51` | **246 px** | `#0C101A` | vertical, gap 10, padding `20/19/0/19` ; nav portefeuille 202×43 |
| Sas 02 : `94:136` | **246 px** | À relever en L2 final | vertical, gap 10, padding `20/19/0/19` |
| Nora conversation 03 : `94:215` | **240 px** | `#0D111B` | vertical, gap 13, padding `25/19/0/19` ; nav travail 200×39 |
| Nora activité 206 : `281:390` | **240 px** | `#0D111B` observé par composition semblable | rail structuré comme 03 |
| Projet Documents 89 : `160:176` | **246 px** | À relever en L2 final | vertical, gap 13, padding `24/24/24/24` |
| Projet révision 92 : `160:392` | **246 px** | À relever en L2 final | vertical, gap 13, padding `24/24/24/24` |
| Cycle 24 : `127:107` | **246 px** | À relever en L2 final | vertical, gap 13, padding `24/24/24/24` |
| Décisions 40 : `129:73` | **246 px** | À relever en L2 final | vertical, gap 13, padding `24/24/24/24` |

La différence n'est **pas seulement 6 px** : le rail Nora contient 14 enfants, des sections et des raccourcis propres au projet ; le rail portefeuille 01 contient 11 enfants et une autre hiérarchie. Des versions 246 px de projet existent également.

### Arbitrage produit **F1 validé par Morris**

**Préférer un seul propriétaire de composant de navigation avec des variantes contractuelles, et non une largeur globale figée à 246 px.** Trois configurations observées :

1. `personnel` : 246 px / composition 01 ;
2. `projet` : 246 px / composition 89/92/24/40 ;
3. `conversation` : 240 px / composition 03/206.

Le code pourra les implémenter via **un composant partagé paramétré**, avec tokens de variantes explicites, si cette différence est confirmée par Morris. Cette solution **reproduit les mesures observées** et évite de modifier les maquettes arbitrairement. Si l'intention produit est finalement un rail unique de 246 px, il faudra **corriger Figma, valider toutes les frames concernées et reprendre l'extraction** avant code. Ni l'une ni l'autre n'est une décision Morris encore actée.

## 4. Point 3 — Critères quantitatifs et reproductibles de fidélité

### Politique visuelle **F2 approuvée par Morris** — calibration d'image encore ouverte

| Catégorie | Attendu proposé | Preuve de sortie |
|---|---|---|
| Composition stable à la **même** largeur de référence et état Figma | **Objectif delta = 0 CSS px** en x, y, largeur, hauteur ; **maximum 2 CSS px** de différence sur un rectangle stable explicitement contracté, faute de quoi FAIL ou dérogation Morris | Figma `absoluteRenderBounds`/chaîne parent et `getBoundingClientRect()` DOM mesurés, rapport signé par le SHA |
| Layout multi-contenu dynamique | Comportement de **croissance**, scroll, min/max, wrap conforme au contrat, **aucune troncature**, chevauchement, fuite hors écran ou composant masqué par raccourci | Oracles DOM + scénarios long texte, tables, erreurs, changements d'état |
| Typographie et styles | Famille, poids, corps, interlignage, espacements, rayon, couleur, épaisseur de bordure et tokens conformes aux **valeurs Figma natives mesurées** ; ne pas inférer un token depuis la capture | `getComputedStyle`, fontes chargées et versionnées, relevés de nœuds avec provenance |
| Comparaison pixels | Source Figma exportée au même viewport/état, environnement navigateur figé, images diff **par région**, données dynamiques neutralisées **seulement si documentées** | Captures référencées, masque motivé, heatmap/diff ; **seuil d'image à calibrer**, ne pas inventer de pourcentage unique |
| Responsive 1680 / 1280 / 390 / 320 px | Référence Figma native quand elle existe ; sinon **propriété reflow mesurable** sans prétendre au pixel-perfect sur une largeur Figma non dessinée | Captures, contrôles d'overflow et focus/tab order, zoom 200 %, DPR défini |
| Autorité/fonction | Les apparences ne changent ni permissions, ni idempotence, ni effets réels ; pas de faux statut Nora/Git | Tests HTTP/DB/browser intégrés aux 14 `UXC`, preuves ciblées LIVE selon périmètre |

**Une capture identique ne prouve jamais le comportement.** Inversement une série de tests métier verte ne permet pas de déclarer la fidélité visuelle. Le résultat final comporte deux gates distincts mais intégrés : **comportement** et **fidelité de transposition**.

**Exécution de la calibration avant validation finale :** choisir une composition statique 1680 (portefeuille), une variante projet 1680, Nora 1680 et un écran 390 ; figer le screenshot natif + l'environnement de référence ; tester la stabilité du diff sur deux captures du **même rendu**. Fixer ensuite le seuil d'image par région avec Morris, sans masquer les blocs en échec pour obtenir PASS.

**Point d'attention :** 2 px est une **proposition de borne sur les rectangles** et non une tolérance générale des polices ou une autorisation d'écart cumulé en descendants. La mesure peut différer à cause d'une transformation, d'un rendu subpixel, de la fonte ou du DPR : diagnostiquer avant d'accepter une dérogation.

## 5. Point 4 — Design Implementation Pack (DIP) L2

### Éléments extraits en lecture native ici

Une extraction L2 **ciblée partielle** a été effectuée sur les nœuds Figma (IDs, parenté, boîtes, auto-layout, padding/gap, typographie et couleurs sélectionnés) :

- Écran 01 `94:50` : rail `94:51`, surface `94:77`, contexte `94:78`, zone portefeuille `94:84`, titre `94:86`, synthèse `94:88` ;
- Écran 02 `94:135` : surface `94:162`, contexte `94:163`, grille sas `94:169`, colonnes Nora `94:170` et aperçu `94:192` ;
- Écran 03 `94:214` : rail `94:215`, surface `94:249`, barre `94:250`, grille conversation `94:254`, conversation `94:255`, contexte secondaire `94:355` ;
- Écrans 74, 89, 92, 40 : grilles **1330 px = 800 + 20 + 510 px**, panneaux hauteur **585**, padding **18**, bordure **1**, rayon **12**, fond **`#151D2C`**, trait **`#2F3C56`** ; cartes internes typiques rayon **8**, fond **`#1B2538`** ;
- Écran mobile 216 `282:468` : nav `282:469` **390×73**, contenu `282:472` **390×538**, padding 16, gap 15, zone de texte **358 px**, titre `282:474` **Inter Bold 23** ;
- Textes de référence : écran 01 titre `94:86` **Inter Bold 30/42** et rail `94:55` **Inter Semi Bold 16/22** ; écran 03 marque `94:219` **Inter Semi Bold 17/23**.

Le fichier **`sfia-next-dip-l2-observations-2026-11-07.json`** est un sous-ensemble structuré des mesures nativement observées. Il **n'est ni un snapshot Figma immuable, ni l'extraction exhaustive de chaque descendant**. Les styles absents restent explicitement `NOT_EXTRACTED`, sans valeur supposée.

### Pack complet exigible avant code (gate G2)

Pour **chaque composant qui sera implémenté**, la fiche doit contenir : `fileKey`, `pageId`, `nodeId`, parent ID, chemin hiérarchique, état/variante, rectangle local et absolu en unités explicites, sizing/contraintes, layout, padding/gap, typographie segmentée, fills/strokes/effects/tokens ou valeurs natives, composants réutilisés, contenus et overflow, actions/provenance, viewport/densité, référence PNG et digest, et relation vers `CU/UXC` et route runtime.

**États obligatoires**, selon le parcours : vide, chargé, création, préparation retrouvée, document consulté, révision disponible, base périmée 409, réponse UNKNOWN, aucune méthode/cycle, décision refusée, session expirée, demande Nora en cours, mobile et zoom. Si aucun frame exact n'existe, **le signaler** et élaborer la variante depuis les règles approuvées, pas en l'inventant lors du codage.

**Figer la référence source :** Figma est mutable. Les Node IDs et la date ne constituent pas un snapshot immuable. Un export daté/empreinté et une table `frameId → export digest → état → baseline Git` sont requis, puis mesures/PNG navigateur sur le **même** SHA de build. Aucune archive durable / hash Figma des screenshots n'a été créée dans cette revue.

**Règle d'entrée Cursor :** un écran non couvert en L2 complet doit rester `NOT READY` ; Cursor ne peut ni deviner les propriétés manquantes ni combler silencieusement un écart de fondation. On peut regrouper l'extraction L2 nécessaire à l'implémentation dans la **préparation du même lot de construction**, mais son gate doit précéder les fichiers concernés. Pas d'inventaire exhaustif non nécessaire des 242 frames.

### Matrice de complétude DIP par parcours — préalable de codage

| Parcours | Références Figma principales | L2 observé dans ce dossier | À compléter avant le code de ce parcours |
|---|---|---|---|
| `CU-01` Connexion | 62, 63, 66 | Aucune | États session, attente/refus, composants login |
| `CU-02` Portefeuille | 01, 64, 65 | **01 : partiel** | Cartes, liste, empty/loading, responsive |
| `CU-03` Reprise A1 | 73, 74 | **74 : partiel** | Liste reprise, détails, action, erreur/reconnexion |
| `CU-04` Sas/projet | 02, 13/14, 78 | **02 : partiel** | Messages/composer, aperçu, confirmation, retour |
| `CU-05` Conversation Nora | 03, 109/110, 206–208 | **03 : partiel** | Message, activités, composer, scroll et contexte |
| `CU-06` Rendu et choix A3 | 112, 118 | Aucune | États de contenu, tableaux/code/lien, sans action mutante |
| `CU-07` Documents A2 | 04, 18, 89, 92, 205 | **89/92 : partiels** | Inspecteur, éditeur D4, conflit 409, historique, diff |
| `CU-08` Journal connaissance | 05, 97–100 | Aucune | Liste de sujets, provenance et actions disponibles |
| `CU-09` Retour/navigation | 01–05, 13/14, 110 | **01/02/03 : partiels** | Routes/onglets/rétablissement état, nav focus |
| `CU-10` Trajectoire/cycle | 22–27, 47 | Aucune | Panneaux cycles et états vides/guidance |
| `CU-11` Méthode/CKI | 28/29, 39, 48, 58–60 | Aucune | Absence de méthode, CKI disponible/refusé |
| `CU-12` Décisions D6 | 30–32, 40, 43 | **40 : partiel** | Détail/révision de décision, autorité, audit |
| `CU-13` Restrictions | 33, 34, 41 | Aucune | Formulaire, portée, confirmation/refus |
| `CU-14` Résultat incertain | 78, 92/93, 111 | **92 : partiel** | UNKNOWN, reprise, clés/idempotence |
| `CU-15` Responsive | 10, 216/217 | **216 : partiel** | 217, nav mobile, 320, zoom 200 % |
| `CU-16` Frontières D7–D9 | 218–235 hors lot | N/A | Vérifier uniquement l'absence de liens/effets simulés |

Ce tableau est une **liste d'acquisition L2 restante**. Ne pas assimiler « partiel » à une mesure complète, ni une frame non mesurée à un écran absent de Figma.

## 6. Gouvernance et contrat de sortie du travail de préparation

| Gate | Condition vérifiable | Statut au 2026-11-07 |
|---|---|---|
| **G0 — Sources** | Git/ref/documents/décisions et nœuds Figma relus ; local/déploiement qualifiés séparément | `PASS` en lecture distante ; local `NON OBSERVÉ` |
| **G1 — Contrat produit** | Morris approuve précisément P1, P2 et P3 ; A1–A3 restent les décisions de portée déjà acquises | `VALIDATED SPEC — P1/P2/P3` |
| **G2 — Fondations et DIP** | F1/F2 validés en politique ; tokens/variantes à compléter ; L2 complet par écran avant code ; images/digests source figés | `PARTIAL` — F1/F2 validés ; extraction ciblée, pas de snapshot immuable ou de seuil image |
| **G3 — Contrat technique** | Routes/API/types, états, composant(s), responsabilités, blast radius, tests, intégrateur et STOP définis depuis Git | `NOT PREPARED` (volontairement après G1/G2) |
| **G4 — Réalisation** | Cursor SFIA v2.6 autorisé séparément ; code/tests/docs et preuves Browser/PG/LIVE pertinentes au même SHA | `NOT STARTED` |
| **G5 — Recette Morris** | `UXC-01..14` et fidelité visuelle passées, écarts traités, choix Git intégration/merge distincts | `NOT RUN` |

**Blast radius :** D1/D2 pour la liste/reprise de préparations, D3 pour le rendu sûr Nora, D4 pour l'édition/révision, D5/D6 pour projections et autorité, shell/layout/CSS pour UX commune, sécurité et isolation, tests, documentation R3/R4/R5. **OUT :** ML4 Git technique, ML5 Cursor comme fonctionnalité, moteur/état métier concurrent, migration sans justification.

**STOP** si la préparation exige un second service documentaire, de nouveaux droits Git, une révision sans contrôle de base, une liste inter-Pilotes, des commandes dérivées du Markdown, une comparaison sous seuil inventé, des propriétés Figma devinées, un `ADOPTED` automatique, ou un prompt Cursor sans pre-check Git/routing/template.

## 7. Verdict et suite

**`FOUR-POINTS REVIEW — PRODUCT OPTIONS RECOMMENDED / FOUNDATION VARIANTS EVIDENCED / TOLERANCES CANDIDATE / L2 PARTIAL / CURSOR NOT READY`.**

Le résultat D0 permet une **revue Morris groupée sur P1/P2/P3 + F1 + F2**, sans multiplier les micro-décisions. Après validation, synchroniser les contrats R3/R5 et la Roadmap sur branche documentaire sous mandat distinct et compléter les fiches L2 des seuls écrans à construire. Puis préparer le contrat technique et, **ensuite seulement**, un prompt Cursor selon SFIA v2.6.

**Aucune modification distante de Git/Figma, aucun code, aucun prompt Cursor n'a été réalisé au cours de cette revue.**

## 8. Décision post-revue et traçabilité Git (2026-11-07)

**P1/P2/P3 et F1/F2 sont désormais VALIDATED SPEC par Morris.** Leur libellé comme « propositions » dans les sections de travail précédentes conserve la trace de l'étape de revue ; pour la décision applicable, utiliser le [record normatif](../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md). La recommandation de variantes n'est plus ouverte : un seul composant de navigation, trois variantes avec les largeurs observées, les règles responsive à prouver.

**F2 est validé pour les boîtes stables uniquement :** objectif 0 px, limite contractuelle 2 CSS px à viewport/état/fixture comparables, exactitude des propriétés native mesurables, aucun débordement ni chevauchement accepté. Le **seuil image global** n'est pas fixé ; le calibrer par région/fixtures et faire valider le résultat avant recette. Un écart non exprimable en CSS dû au raster de police ne modifie pas la géométrie contractuelle.

**Ce dossier n'est pas un pack prêt pour coder** : les 8 frames / 55 nœuds du [relevé L2](../../ux-ui/releves-geometriques-convergence-l2-partiel.json) sont **partiels** ; produire le pack L2 des seules zones réellement implémentées, exports et digests source figés, ainsi que les preuves navigateur au SHA cible. La décision de publication/merge documentaire n'autorise pas la construction.

## 9. Arbitrage complémentaire F1 — Inspection 244 px, validé (2026-11-07)

Morris a validé l'extension F1 à **quatre variantes dans le même composant de navigation** : `personnel=246`, `projet=246`, `conversation=240`, **`inspection=244` CSS px**. L'amendement applicable est consigné dans [le record de décision](../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md).

**Source géométrique Figma native :** 04 nav `94:372`, 18 nav `97:361`, 19 nav `100:41`. Pour les trois : `244×970`, padding `23/19/22/19`, gap `11`, auto-layout vertical. La frame 19 appartient au domaine D8 et n'entre **pas** dans la convergence fonctionnelle ML1–ML3.

Ce choix **résout l'arbitrage de variante F1** mais ne clôt pas G2 : descendant(s), états, tokens, source figée/digest et calibration d'image restent à livrer. Le pack L2 original contient toujours 8 frames / 55 nœuds ; les nouvelles mesures de rail sont un **complément ponctuel**, non une certification de pack prêt pour code. Voir [préparation G2/G3](preparation-technique-g2-g3.md).
