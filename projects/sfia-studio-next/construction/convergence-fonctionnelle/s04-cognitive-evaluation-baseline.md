# ML4C S04 — Évaluation cognitive préalable (baseline)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-11 |
| Statut | DOCUMENTED — évaluation déterministe locale |
| Nora LIVE | **NOT RUN** (mandat ML4C : LIVE exclu) |
| Décision technique | **Aucun** moteur vectoriel / second système mémoire ajouté |

## Constat code (main@6d237452 + branche build)

`selectRelevantKnowledgeContext` (`web/src/domains/knowledge/service.ts`) :

- Méthode : `lexical-heuristic` (tokens longueur > 3, score d'inclusion).
- Limite explicite dans le retour : ne constitue pas une vérité épistémique.
- Pas de paraphrase/synonymie, pas de fraîcheur décisionnelle opposable, pas de résolution de contradiction.

## Corpus représentatif (déterministe)

| Cas | Attendu métier | Baseline lexicale |
| --- | --- | --- |
| Reformulation / paraphrase | Retrouver l'acquis | **Écart** si tokens absents |
| Décision historique vs actuelle | Préférer l'actuelle | Non discriminé hors texte |
| Sources contradictoires | Ne pas aplatir | Non traité |
| Point ouvert | Remonter OPEN | Partiel (boost +1) |
| Restriction d'accès | Respecter droits | Hors sélection (D1/D6) |
| Données insuffisantes | Limite honnête | Via `selectionLimit` string |

## Choix ML4C

Correction au niveau **minimum** : conserver la sélection lexicale, documenter l'écart, exiger Nora LIVE + appréciation Pilote sous GO distinct avant toute refonte S04.

Exit qualité cognitive LIVE : gate Morris spécifique (hors ce mandat).
