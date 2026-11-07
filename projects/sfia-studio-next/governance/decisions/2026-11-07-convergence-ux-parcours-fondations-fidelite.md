# SFIA Studio Next — Décision Morris : parcours et fidélité UX de convergence
**Date :** 2026-11-07 — **Source :** validation explicite Morris dans la conversation de revue des quatre points.
**Périmètre :** R5, convergence des capacités ML1–ML3 avant construction technique ML4.
**Statut :** `VALIDATED SPEC — décisions P1/P2/P3/F1/F2`, **pas** `IMPLEMENTED` ni `ADOPTED`.
**Git de qualification :** `mcleland147/sfia-workspace`, base `main@9435f4c181c94ac5fbdfacd3e1941c82dd874162`; état local : **NON OBSERVÉ**.

## Décisions de conception validées
| Identifiant | Décision approuvée | Invariants et frontières |
| --- | --- | --- |
| **P1 — Accès et reprise** | Le portefeuille présente **Mes projets**, **Préparations à reprendre**, **Nouvelle préparation**. Liste réelle des seules préparations **OPEN, non rattachées à un projet et appartenant au Pilote** ; tri déterministe `createdAt DESC` puis `id`; « Reprendre » conserve le même ID et fil. | Consultation sans création, aucune fuite inter-Pilotes ; GET/lecture propriétaire D1/D2 à contractualiser ; 401/403/404 et absence de préparation expliqués sans divulgation. |
| **P2 — Révision D4** | Dans l'espace projet : **Documents → Bibliothèque → Inspection → Révision → Version/historique**, puis retour au fil/contexte du projet. Réutiliser le service D4 `reviseDocument` et le `baseRevisionId`/clé de corrélation. | Interdire la seconde autorité documentaire et une révision écrasant une base périmée ; 409 `BASE_STALE`, résultat `UNKNOWN`, idempotence et ownership traçables. La création initiale demeure séparée. |
| **P3 — Shell partagé** | Un shell de navigation unique par responsabilité, **avec variantes contextuelles** personnelles, projet et conversation ; retour et contexte conservés, navigation mobile/clavier obligatoire. | Aucun lien D7/D9 ou Git/Cursor présenté comme utilisable sans backend réel ; conservation des propriétaires D1–D6, même projet/préparation/document au refresh et lien profond. |
| **F1 — Fondations du rail** | **Quatre variantes contextuelles du même composant partagé**, avec dimensions Figma natives : `personnel` **246 CSS px** (01), `projet` **246 CSS px** (89/92/24/40), `conversation` **240 CSS px** (03/206), `inspection` **244 CSS px** (04/18/19). La variante `inspection` a été validée explicitement par Morris après la première décision F1. | Les paddings, gaps, enfants et états propres à chaque variante doivent être lus dans Figma et contrôlés au navigateur ; **un seul composant/propriétaire de navigation**, pas de second shell ni de normalisation arbitraire à 246 px. |
| **F2 — Critères de fidélité géométrique** | **Objectif delta 0 CSS px**, tolérance **maximale de 2 CSS px sur les rectangles stables contractés** en `x/y/w/h` à état, données, police, DPR et viewport correspondants. Mesures DOM + styles calculés + capture et comparaison régionale obligatoires. | Typographie, couleurs, bordures, rayons et propriétés natives : correspondance exacte lorsqu'exprimable ; aucune troncature, collision, débordement inattendu ou action fictive. **Aucun seuil global de diff pixel-image n'est validé** : calibration à produire sur fixtures/snapshots figés ; les écarts hors seuil nécessitent une dérogation Morris. |

**Origine :** les arbitrages de portée A1/A2/A3, déjà validés dans [la décision précédente](2026-11-07-convergence-ux-arbitrages.md), restent inchangés. La présente décision valide leurs modalités P1–P3 et la politique F1/F2 ; elle **ne modifie aucune décision historique**.

## Contrat de preuve et gates
- **G0 — Sources :** Git/`main`, décisions, contrats R3/R5 et mesures Figma lus ; aucun état local inféré.
- **G1 — Contrat produit et fondations :** **VALIDATED SPEC pour P1/P2/P3/F1/F2**. Les critères de réception `UXC-01..14` sont définis, **NOT RUN**.
- **G2 — Design Implementation Pack :** **PARTIAL / NOT READY FOR CODE** : 11 frames L1 historiques, 8 frames L2 représentatives / 55 nœuds mesurés, mais descendants et variantes utiles pas tous extraits ; aucun snapshot/export immuable et digest source, aucun oracle DOM ni calibration d'image.
- **G3 — Spécification de construction :** encore à préparer par capacité, avec routes, API, composants, états, erreurs, dépendances, intégrateur, tests, dette/exit et STOP, sans moteur concurrent.
- **G4 — Exécution Cursor SFIA v2.6 :** **NON AUTORISÉE** par la présente validation documentaire. GO technique distinct après pré-check Git et contrat/pack appropriés.
- **G5 — Réception runtime :** **NOT RUN** ; preuves HTTP/PG/BROWSER/LIVE ciblées au SHA candidat, comparaison géométrique et visuelle puis revue Morris.

## Pièces et suite
- [Dossier de sécurisation approuvé sur ses orientations](../../construction/convergence-ux-parcours-pilote-nora/securisation-parcours-fidelite.md).
- [Contrat de réception du lot](../../construction/convergence-ux-parcours-pilote-nora/contrat-acceptation.md) et [qualification](../../construction/convergence-ux-parcours-pilote-nora/qualification.md).
- [R3 — contrat de transposition](../../ux-ui/contrat-transposition-figma-code.md), [protocole](../../ux-ui/protocole-fidelite-figma-runtime.md), [L1](../../ux-ui/releves-geometriques-convergence-l1.json), [L2 partiel](../../ux-ui/releves-geometriques-convergence-l2-partiel.json), [référence R5](../../construction/reference-delivery-r5.md).

**Publication documentaire + merge approuvés par Morris.** La fusion valide la **traçabilité des décisions déjà prises**, pas la complétude L2 ni l'acceptation du fonctionnement de l'application.

## Amendement F1 — Inspection 244 px, validé par Morris le 2026-11-07

**Décision approuvée :** conserver une quatrième variante contextuelle `inspection` de **244 CSS px**, au sein du composant de navigation partagé. Les variantes précédentes `personnel:246`, `projet:246` et `conversation:240` restent valides. Cet amendement précise F1, **sans changer P1–P3, A1–A3 ni F2**.

**Constat natif, fichier Figma** `itgvCulInEnFY6DvgIegvP`, page `94:49` : frame **04** (`94:370`) → nav `94:372` ; frame **18** (`97:359`) → nav `97:361` ; frame **19** (`100:39`) → nav `100:41`. Pour les trois rails : **244×970 px**, auto-layout **VERTICAL**, padding **top/right/bottom/left = 23/19/22/19 CSS px**, gap **11 CSS px**. Le contenu commence à x=244 à la largeur de frame 1680 px. La frame 19 reste **hors réalisation fonctionnelle de convergence ML1–ML3 (D8)** mais sert de référence graphique de la variante.

**Preuve de répartition Figma (inventaire read-only) :** 234 frames numérotées inspectées ; 204 rails à 246 px, 15 à 240 px, 3 à 244 px, 12 sans rail latéral comparable. Ces totaux sont une observation datée, pas une garantie de version Figma immuable.

**Application :** ne pas forcer les écrans 04/18 à 246 px ; la compatibilité avec le composant unique s'obtient par la variante `inspection`, pas par la duplication des vues ou le changement des valeurs Figma. **F2** inchangé : cible 0 CSS px, borne ≤2 CSS px sur rectangles stables à conditions identiques, aucun débordement/troncature non voulu.

**Gates inchangés :** G1 = `VALIDATED SPEC` y compris cette extension F1 ; **G2 partiel** (source Figma non figée, L2 non exhaustif, calibrage de diff image absent), G3 à préparer, G4 sans GO Cursor, G5 tests non exécutés. [Dossier G2/G3 candidat](../../construction/convergence-ux-parcours-pilote-nora/preparation-technique-g2-g3.md).
