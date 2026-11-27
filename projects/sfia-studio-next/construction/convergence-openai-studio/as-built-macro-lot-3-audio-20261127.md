# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Modèle | `gpt-live-transcribe` |
| Transport | **Studio-controlled** Realtime WebSocket (`wss://…/realtime?intent=transcription`) |
| Client | PCM 24 kHz mono → HTTP append + SSE events |
| Flag | `SFIA_COMPOSER_DICTATION=1` (défaut OFF) |
| LIVE fournisseur | **non déclenché** dans ce delivery — plan borné préparé |

## Flux

Pilote → permission micro → `POST …/dictation/sessions` → capture PCM → `…/audio` → OpenAI WS serveur → SSE deltas → Arrêter → `…/finalize` → brouillon → Envoyer USER existant.

Aucun travail D3 à l’ouverture. Annuler restaure le baseline.

## Modules

- `composer-dictation-types.ts` / `composer-dictation-reducer.ts` / `composer-dictation-session.ts`
- API sous `app/api/projects/[projectId]/dictation/sessions/`
- UI `ComposerDictationControl` dans `NoraConversation`
- Contrat visuel `ux-ui/composer-dictation-visual-contract-20261127.md`

## FinOps

`operation: audio.composer_dictation` · `attemptId = emissionAttemptId` stable · durée estimée · tarif public 0,017 USD/min en PARTIAL · pas de workId fictif.

## Preuves

- Unit reducer + session transport substitué
- Pas de campagne LIVE audio (gate Morris distinct requis)
