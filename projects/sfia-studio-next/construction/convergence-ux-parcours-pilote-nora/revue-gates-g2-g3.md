# SFIA Studio Next — Revue de fin de préparation G2/G3 (D0)

> **Mise en dépôt (2026-11-07) :** document D0 de préparation relu et accepté par Morris dans sa direction. Les mentions « candidat », « aucune écriture Git » ou « non publié » décrivent son état au moment de la rédaction ; la publication ne vaut pas complétude G2, validation de chaque choix G3, autorisation D3 ou preuve navigateur. Les arbitrages A1–A3/P1–P3/F1/F2 restent ceux de la décision canonique.

**Git** `main@968f74be7e36d5387487fae0eeec85b702d074e2` — **date** 2026-11-07.

## Avis et points réellement nouveaux

1. **G3 est assez précis pour une validation de contenu**, sous réserve de décider le comportement volumétrique du listing A1 et la modalité de lien profond A2. Une projection additive dans `GET /api/portfolio` est la voie la plus simple ; pas de duplication D1/D2.
2. **F1 source confirmée** : rail unique avec variantes 246/246/240/244 ; chaque variante possède **sa propre couleur, densité et géométrie**, pas un simple `width` conditionnel. La police Inter Figma n'est pas configurée explicitement par la CSS globale du runtime étudié.
3. **Figma 216/217 est une planche 390×1350** et montre « Sources Git » ; il faut tester navigateur réel 390×844/320×568, sans exposer ML4 non implémenté.
4. **Le protocole de calibration image appelle une clarification** : les exports Figma source sont attendus avant code ; la première **paire Figma/runtime** ne peut être obtenue qu'après un premier rendu. Le contrôle géométrique F2 reste intégralement exigible pendant et après construction ; la calibration image finale est un gate de recette G5, non une fausse précondition impossible de G2.
5. **Blocage d'outillage constaté** : la capture Figma 01 a fourni un PNG via URL éphémère mais son archivage/download vers le conteneur a échoué (résolution réseau). **Pas de digest PNG**, pas de preuve de version Figma immuable. Ne pas déclarer G2 READY sur cette base.
6. **Contrat d'erreur à ne pas oublier** : la route D4 document `GET/POST` actuelle répond 401 dans un `catch` générique ; une erreur DB peut alors être présentée comme session invalide. Différencier auth/absence/erreur interne dans le changement contrôlé, avec tests de non-divulgation.

## Décisions présentes et restant à verrouiller

| Élément | Avis de revue | Gate |
| --- | --- | --- |
| A1–A3, P1–P3, F1/F2 | Déjà VALIDATED SPEC Morris — ne pas rouvrir | G1 PASS |
| Extension GET portefeuille | G3 proposition cohérente et additive | G3 à approuver |
| Pagination éventuelle A1 | Seulement si volume le justifie ; pas d'API faussement complète | G3 à borner |
| Projet → révision D4 | Utiliser route/service existants ; pas de 2e moteur | G3 à approuver |
| Source native L2 + PNG SHA | Must-have avant transcription du composant | G2 non clos |
| Calibrage de différence image | À réaliser sur la première paire source/runtime, **avant verdict final**, avec Morris | G5 non exécuté |
| GO Cursor code | **Non accordé** dans cette étape | G4 non autorisé |

**Recommandation :** approuver le contrat G3 v1 et la distinction G2-Source/G5-Comparaison, puis donner un **mandat Cursor conditionnel et borné** d'acquisition du G2 (STOP si pack non satisfaisant), avant toute opération de construction ; dans le même temps préparer le prompt de reprise du nouveau chat. Aucune publication Git n'est implicite.

---

## 3. Revue actualisée — modalités G3 A1/A2 validées (2026-11-07)

Morris valide désormais **A1 = pagination à 25 items/page, keyset et compteur propriétaire canonique**, ainsi que **A2 = `/projects/{projectId}?surface=document&documentId={documentId}` ouvrant uniquement la lecture, révision D4 sur geste explicite et reprise corrélée**. Le texte applicable est le [contrat G3 v1.1 §7](contrat-technique-convergence-ux.md), sans nouvelle autorité métier.

**Verdict :** `G1 VALIDATED SPEC / G3 A1+A2 VALIDATED SPEC / G2-SOURCE PARTIAL & BLOCKING / G4 NO CURSOR GO / G5 NOT RUN`. Les recommandations initiales §1–2 qui présentaient A1/A2 comme à décider sont historiques. Suite : préflight Figma authentique + SHA avant code UI, puis contrat SFIA v2.6 borné sous GO Morris distinct et preuves navigateur au SHA. Aucun merge Git projet, version STABLE ou ADOPTED implicite.
