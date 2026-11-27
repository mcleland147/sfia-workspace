# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Modèle | `gpt-live-transcribe` |
| Transport | **Studio-controlled** Realtime WebSocket (`intent=transcription`) |
| Client | PCM 24 kHz mono → HTTP append ordonné (`seq`) + SSE events |
| Flag | `SFIA_COMPOSER_DICTATION=1` (défaut OFF) — pas d’interdiction DEV-only permanente |
| Admission | `assertOwnedProject` avant ouverture / append / events / finalize / cancel |
| LIVE fournisseur | **non déclenché** — plan borné conservé, GO distinct requis |

## Flux

Pilote → permission micro → `POST …/dictation/sessions` (droits projet) → attente `session.updated` → capture PCM séquentielle → `…/audio` → WS serveur → SSE deltas → Arrêter → drain uploads → `…/finalize` → brouillon → Envoyer USER existant.

Aucun travail D3. Annuler restaure le baseline. États terminaux stables. GC sessions 5 s.

## Modules

- `assert-owned-project.ts`
- `composer-dictation-types.ts` / `composer-dictation-reducer.ts` (`itemOrder`) / `composer-dictation-session.ts`
- API `app/api/projects/[projectId]/dictation/sessions/**`
- UI Figma morph : `ComposerDictationControl` + `NoraConversation` (`data-dictation-active`)
- CSS `.fig-dictation-shell*` · icônes `/public/figma-dictation/*`
- Fixture DEV `/dev/dictation-visual/[state]`
- Contrats : `ux-ui/composer-dictation-visual-contract-20261127.md` · `ux-ui/figma-dictation-l0/`

## OpenAI Realtime

- `session.update` : `languages: ["fr"]` (pas `language`)
- Ouverture effective après confirmation fournisseur
- FinOps : estimation PCM `(bytes/(24000*2))/60 * 0.017` · skip cancelled sans audio · `attemptId` unique

## Preuves

- Unit session/reducer (8+3) transport substitué
- ML2 behavioral guarantees (6)
- Figma vs Runtime : rectangles stables 0 Δ (micro 35, cmd 40×46, tokens)
- BUILD `GzJ4dM0QxarVz9dpovqQz` · digest `c5fd99c8…`
