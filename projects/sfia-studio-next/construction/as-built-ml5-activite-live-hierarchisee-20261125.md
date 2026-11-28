# As-built — Activité LIVE hiérarchisée (ML5 / 2026-11-25)

## Contrat de présentation

1. **Objectif du travail** — titre métier via `nora.objective` / `projectMissionHeadline` (jamais le dernier nom de fichier ni le prompt utilisateur recopié).
2. **Activités significatives** — groupes adaptatifs (`understand` / `sources` / `produce` / `restitute` / `work`) dérivés des phases observées ; compteurs réels.
3. **Détails à la demande** — dépliage par groupe ; sources avec couverture CONSULTED / PARTIAL / DENIED ; plafond d’affichage 60 avec reste accessible ; état de dépliage préservé au rafraîchissement.

## Producteurs

- `nora.objective` (annonce mission)
- `nora.source.git` / `nora.source.d4` (+ historique)
- `nora.generate` (restitution)
- Journal unique D3 (`activity-projection`) — pas de second conducteur.

## Preuves

- Unit : `ml5-activity-hierarchy.test.ts` (regroupement + 45 ops).
- DETERMINISTIC/BROWSER : `.tmp-sfia-review/browser/activity-45-{collapsed,expanded}.png`.
- LIVE : events git EquipLoans (`11-git-activity.json`) — objective + 3 consultations + generate.

## Évolution 2026-11-28 — lot 4

Les preuves du 25 novembre ci-dessus restent inchangées. Ajout factuel :

- Un événement RUNNING ne maintient plus le groupe en cours lorsque la même opération (phase d'objectif, référence de source, ou identifiant d'effet) a un événement terminal plus récent.
- Le titre du groupe d'orientation utilise `metierTitle` ou `objective` structuré lorsqu'il n'est pas la formule générique. Sinon le titre reste « Orientation du travail ».
- Les confirmations d'enregistrement au Journal et « L'état du projet a été mis à jour » quittent le corps conversationnel et sont appendues dans `nora_activity_events` (`nora.effect.knowledge`, `nora.effect.pilotage`). Les refus, conflits, résultats partiels et UNKNOWN restent dans la réponse.
- L'historique d'une réponse charge `GET /api/projects/{projectId}/turns/{turnCommandId}/activity` à l'ouverture. La route vérifie Pilote → projet → conversation → tour avant la lecture.
- Le polling d'activité fait une lecture terminale après l'arrêt de l'intervalle.

## Complément 2026-11-28 — intégrité de la projection

- Le détail d'activité n'est plus limité aux huit dernières opérations. Le compteur porte sur l'ensemble. L'affichage pagine par 40, comme la carte déjà en place.
- Chaque comparaison documentaire attestée reste dans le détail. Le résumé compte les comparaisons lorsqu'il y en a plusieurs.
- Une annonce répétée de la même opération se ferme avec son événement terminal. Deux opérations identifiées sur une même source restent distinctes. Une limite antérieure n'est pas convertie en réussite.
- Le titre de premier niveau est l'objectif structuré, ou « Orientation du travail ». Une consultation, un fichier ou la dernière ligne reçue par le poller ne prend pas cette place.
- La lecture terminale du sas et du projet est un instantané du tour, borné à 500 ms, contrôlé après la lecture du corps, puis l'époque est invalidée. Elle ne vide plus les événements avant de relire seulement la fin du tour.
- Un échec de lecture de l'historique n'est pas un historique vide et peut être relancé. Un échec d'inscription d'une confirmation n'empêche pas les suivantes ; les lignes non inscrites restent dans la réponse.
