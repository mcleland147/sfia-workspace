# Decision Record — R2 : sortie formelle de la conception fonctionnelle

| Champ | Valeur |
| --- | --- |
| Décideur | **Morris** |
| Date | **2026-11-02 (Europe/Paris)** |
| Périmètre | **SFIA Studio Next — R2 conception fonctionnelle transverse** |
| Décision | **R2 CLOSED BY MORRIS — WITH CARRIED RESERVES** (niveau conception documentaire) |
| Validation explicite | Après revue du [rapport de sortie](../../conception-fonctionnelle/revue-formelle-sortie-r2.md), Morris confirme « je valide tout » et autorise la **préparation du merge et les vérifications Git** pour préparer l'entrée R3. |
| Baseline | `main@8751775edc314e8fc7f0855104e5000290be9839` (R1 / PR #639 intégrée et vérifiée) ; candidate R2 `sfia/next-r2-functional-specs@d10875acc2d0abca1d80fbd88c6a171e1d526b99` observée avant formalisation de la décision |
| Portée Git | Commit documentaire de clôture sur la branche R2, préparation et ouverture d'une PR vers `main`, inspection du diff et des checks ; **pas de merge sans nouveau GO spécifique** |
| Limites | R2 CLOSED au niveau du contenu approuvé ≠ contenu déjà mergé sur `main`, architecture/UX validées, `IMPLEMENTED`, `BEHAVIOR PROVEN`, `ADOPTED` ou R3 engagé |

## 1. Décision et périmètre validés

Morris prononce la **sortie formelle du jalon R2 avec réserves reportées** au niveau de la conception fonctionnelle. Les neuf spécifications D1–D9 sont `VALIDATED SPEC` individuellement et globalement acceptées comme un référentiel fonctionnel cohérent. Les **300 règles** et **241 scénarios** (237 initiaux, quatre compléments D3) sont documentés, **non exécutés**. Les **sept E2E R1** ont été confrontés aux contrats R2. La revue transverse ne relève aucune contradiction normative directe dans les interfaces examinées ; elle ne garantit pas qu'aucun écart futur n'apparaisse.

Morris a validé séparément le **contenu des quinze CKI v0.2 et la matrice des cinquante relations** : `VALIDATED CONTENT`, pas une deuxième autorité. La guidance reste non obligatoire, autonome et non opposable ; le fonctionnement et la valeur en runtime ne sont pas prouvés.

## 2. Réserves reportées, sans extension de scope

Les **66 réserves numérotées** demeurent dans leurs spécifications propriétaires (regroupées dans le rapport de consolidation), sans création d'un registre parallèle. Leurs échéances et gates restent :

- **R3 — UX** : cockpit non conversationnel, sas et continuité du fil, conduite Nora/cycle, états de décision, inspection du contrat « Exécuter », résultat/provenance/limites, Git facultatif, refus et incidents.
- **R4 — Architecture** : session, identité et isolation multi-Pilotes, persistance, concurrence, idempotence, autorité, intégration Git/Cursor, versionnement CKI/méthode, interruption et preuve.
- **R5–R6 — Construction et qualification** : preuves E2E navigateur et tests déterministes, comportement LIVE/REAL des outils, reprise, permissions, erreurs, confrontation rapport ↔ observation ↔ conformité ↔ acceptation, valeur cognitive des CKI.

La clôture documentaire n'éteint aucune de ces obligations et n'autorise aucun code, migration, architecture, promotion de droits ou adoption.

## 3. Gates Git, puis entrée R3

1. **Autorisé dans cette demande :** enregistrer ce Decision Record, synchroniser Roadmap/index/rapport sur `sfia/next-r2-functional-specs`, préparer et ouvrir la **PR documentaire R2** vers `main`, contrôler les fichiers et checks disponibles.
2. **À vérifier avant toute promotion :** provenance des références, diff borné à `projects/sfia-studio-next/`, absence de divergence et de fichiers techniques hors mandat, contrôles GitHub applicables, statut réellement mergeable.
3. **Non autorisé à ce stade :** merge, auto-merge, suppression de branche, bypass CI/gates, écriture directe sur `main`, démarrage R3 ou `ADOPTED`.
4. **Condition R3 :** après **GO merge Morris distinct**, merge réel, relecture de `main` et de la Roadmap/R2/CKI sur la baseline intégrée, puis cadrage du premier macro-lot R3 UX et décision de lancement.

**État opposable : `R2 CLOSED BY MORRIS — WITH CARRIED RESERVES / GIT INTEGRATION PENDING` ; R3 `NOT STARTED`.**
