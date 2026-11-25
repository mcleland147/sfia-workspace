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
