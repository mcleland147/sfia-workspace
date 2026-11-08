# As-built — G4 reprise chat-first (2026-11-08)

Branche : `feat/next-convergence-ux-g4-construction`
Parent UX : `c2af05cb` (transposition déclarative invalidée pour acceptation visuelle)
Portefeuille `94:50` : **préservé** (macro acceptée Morris)

## Correction sas (priorité)

| Avant | Après |
|---|---|
| Formulaire permanent Nom/Résumé/Enregistrer | Conversation dominante + proposition non autorisante |
| Titre « Fil continu avec Nora » | « Clarifions votre intention » / reprise |
| Création via champs toujours visibles | Constituer → inspecter → **Créer le projet** explicite |

Proposition : champs D2 `previewName` / `previewSummary` via PATCH uniquement après acte Pilote (`prep-constitute` / ajustement). Adoption du dernier message Nora = choix explicite, pas NLP silencieux.

## Composants

- `PreparationConversation`, `PreparationProposal`
- `NoraConversation`
- `DocumentLibrary`, `DocumentInspector`, `DocumentHistory` (`241:385`)
- `ProjectJournal` (structure vide honnête)

## Familles

| Famille | Statut technique | Preuve |
|---|---|---|
| Sas chat-first | IMPLEMENTED (candidate) | e2e `g4-chat-first-sas` + UI sans formulaire permanent |
| Nora projet | IMPLEMENTED (candidate) | `NoraConversation` variantes frame |
| Documents | IMPLEMENTED (candidate) | library → read → history → revise |
| Journal | IMPLEMENTED (candidate) | structure vide / listes réelles |
| Pilotage | IMPLEMENTED (candidate) | layout + `PilotagePanel` D5/D6 |
| Portefeuille | PRESERVED | non refondu |

F2/G5 : NOT RUN — verdict visuel = Morris.

## DEV

Worktree G4, port 3100, login Pilote A (DEV) FAKE. NO RELEASE.
