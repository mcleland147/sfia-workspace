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
| **F1 — Fondations du rail** | **Trois variantes explicites du composant partagé** : `personnel` largeur **246 CSS px** (réf. 01), `projet` largeur **246 CSS px** (réf. 89/92/24/40), `conversation` largeur **240 CSS px** (réf. 03/206). | Les paddings/gaps/contenus sont propres aux variantes et doivent être lus sur les nœuds Figma concernés ; pas de standardisation silencieuse à une largeur unique. |
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
