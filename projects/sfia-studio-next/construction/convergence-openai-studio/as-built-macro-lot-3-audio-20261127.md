# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Modèle | `gpt-live-transcribe` |
| Transport | **Studio-controlled** Realtime WebSocket (`intent=transcription`) |
| Client | PCM 24 kHz mono → HTTP append ordonné (`seq` **0-based**) + SSE |
| Flag | `SFIA_COMPOSER_DICTATION=1` (défaut OFF) — pas d’interdiction lane permanente |
| Admission | `assertOwnedProject` · `assertDictationEmissionAllowed` (live) · fixture DEV/test |
| LIVE fournisseur | **non déclenché** |

## Flux

Pilote → micro → `POST …/sessions` → `session.updated` → PCM `seq=0,1,…` → auto-commit ~2 s → SSE deltas par item → Arrêter → drain → finalize (attend awaiting+provisional) → brouillon → Envoyer USER.

Aucun D3 pendant transcription. Cancel restaure baseline. Terminaux stables.

## Correctif intégré (post dbe155cf)

- Seq client/serveur alignés (premier fragment accepté)
- Assemblage client par item (pas de remplacement global)
- Cancel pendant finalize ≠ completed
- FinOps : cancelled/failed observés comme failed
- Harness réel `/dev/dictation-harness` (pas copie DOM)

## Modules

- `composer-dictation-{types,reducer,session,transport-fixture}.ts`
- `ComposerDictationControl` / `NoraConversation`
- API `dictation/sessions/**`
- Tests : unit + `ml3-composer-dictation-integrated.pg` + Playwright qualify

## Preuves

- Unit session 11 + seq contract 2 + reducer 3
- Integration API 8 PASS
- Playwright harness listening PASS
- Figma vs **vrai** contrôle : mic/cancel/stop Δ0
- BUILD `qhiWVOF0bQHF60ftGW_tF` · digest `3f846bed…`
