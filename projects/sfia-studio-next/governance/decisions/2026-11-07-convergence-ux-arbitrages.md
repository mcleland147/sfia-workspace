# SFIA Studio Next — Décision Morris : arbitrages de convergence UX du parcours existant

**Date :** 2026-11-07 (Europe/Paris).
**Périmètre :** R5 — Parcours Pilote–Nora intégré, convergence des capacités effectivement construites dans ML1–ML3.
**Statut :** `DECIDED IN CONTENT BY MORRIS — A1/A2/A3` ; publication sur branche documentaire candidate, **non mergée**.
**Base vérifiée :** `main@d37ea0882ee9256ec206e2f0523a71bf13674e88`.

## Arbitrages validés

| Référence | Décision Morris | Frontière maintenue |
| --- | --- | --- |
| **A1 — Reprise des préparations** | **Oui** : exposer les préparations non rattachées et permettre leur reprise ciblée depuis le portefeuille | D1/D2 propriétaires des droits et de la préparation ; la lecture ne crée jamais un sas ; contrat/API exacts et tri à déterminer |
| **A2 — Révision documentaire projet** | **Oui** : permettre de réviser un document depuis l'espace projet | D4 unique propriétaire, même révision/version de base et contrôles de conflit ; choix de composition UX à finaliser |
| **A3 — Actions dans les réponses Nora** | **Non** à un nouveau moteur générique d'actions/commandes pendant ce lot | Convergence du rendu sûr et des interactions déjà réellement supportées ; Nora n'émet aucun HumanDecision, effet Git, D7 ou mutation implicite D5/D6 |

## Portée de cette décision

La validation **porte sur ces trois arbitrages produit**, et autorise le dépôt des deux documents de qualification/contrat candidats, ainsi que des addenda de **traçabilité datée** dans R3 et R5. Elle **ne vaut pas** approbation du contrat d'acceptation complet, validation des interfaces A1/A2, choix technique, création Figma, GO code Cursor, PR, merge, réception ou ADOPTED.

La convergence est un **résultat R5 transversal unique**, sans renumérotation automatique de ML4/ML5, et doit être éprouvée sur le vrai runtime ML1–ML3. Les décisions R1–R4 antérieures et clôtures ML1–ML3 restent historiques et ne sont pas rouvertes par la présente décision.

## Responsabilités, dépendances et suite

D1 = session/portefeuille ; D2 = sas/projet ; D3 = cognition Nora ; D4 = documents et connaissance ; D5 = cycles/méthodes/CKI ; D6 = autorité et restrictions. **Aucune nouvelle autorité métier** n'est introduite par l'interface. D7/D8/D9 réels, GitHub App et Cursor restent hors du lot de convergence.

**Dépendances :** préparation documentaire ML4 intégrée sur `main` via #663, source UX Figma R3, contrat de transposition R3, QA et réserves ML1–ML3. Les 18 écrans Figma Git ML4 sont validés en conception mais **non à implémenter dans ce résultat de convergence**.

**Suite autorisée maintenant :** terminer la préparation du **contrat d'acceptation candidat** et de la matrice `CU-01..16 / UXC-01..14`, puis revue Morris. **Suite non autorisée :** démarrage de construction, écriture technique, PR ou merge sans GO distinct.

**Sources du dossier :** [qualification](../../construction/convergence-ux-parcours-pilote-nora/qualification.md), [contrat d'acceptation candidat](../../construction/convergence-ux-parcours-pilote-nora/contrat-acceptation.md), [R3](../../ux-ui/audit-couverture-ux-r3.md), [R5](../../construction/reference-delivery-r5.md).
