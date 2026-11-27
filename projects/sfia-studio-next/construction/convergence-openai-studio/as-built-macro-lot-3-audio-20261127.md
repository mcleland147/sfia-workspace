# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Modèle | `gpt-live-transcribe` |
| Transport | **Studio-controlled** Realtime WebSocket (`intent=transcription`) |
| Client | PCM 24 kHz mono → HTTP append ordonné (`seq` **0-based**) + SSE |
| Flag | `SFIA_COMPOSER_DICTATION=1` (défaut OFF) |
| Admission | `admitDictationProviderEmission` · lane guard live · fixture fail-closed (jamais fallback LIVE) |
| UI | mic uniquement si `dictationEnabled === true` (capability produit) |
| LIVE fournisseur | **non déclenché** |

## Flux

Pilote → capability → micro → `POST …/sessions` (admission) → `session.updated` → PCM `seq=0,1,…` → auto-commit → SSE deltas/items → Arrêter → drain → finalize (attend **commitsAwaitingAck** + items + provisionals) → brouillon → Envoyer USER.

Aucun D3 pendant transcription. Cancel restaure baseline. Terminaux stables. Timeout finalize → résultat **partial** (jamais succès tronqué).

## Correctifs nominaux (handoff 5bd6bb28)

### A — Finalisation
- Distingue commits envoyés (`commitsAwaitingAck`) et acquittés
- `sendAudioCommit` / skip commit final vide
- `maybeCompleteFinalization` attend acks + completions
- Erreurs de commit / timeout → partial explicite

### B — Protections fournisseur communes
- `composer-dictation-admission.ts` consomme `assertOpenAiKeyForLane`
- Fixture : VITEST ou `SFIA_DICTATION_SUBSTITUTED=1` + lane DEV uniquement
- FinOps substitué : `EFFECT_SUBSTITUTED`, `costCoverage: UNKNOWN`, pas de coût LIVE
- `GET …/dictation/capability` pour aligner disponibilité affichée

### C — Parcours utilisateur réel
- Preuve Playwright sur `/projects/{id}?surface=travail` (NoraConversation)
- C01 nominal · C02 successives/cancel · C03 refuse + ack différé + late event
- Harness `/dev/dictation-harness` conservé, non compté comme preuve nominale

## Modules

- `composer-dictation-{admission,types,reducer,session,transport-fixture}.ts`
- `ComposerDictationControl` / `NoraConversation` / `page.tsx` (capability)
- API `dictation/sessions/**` · `dictation/capability` · `fixture-push` (DEV substitué)
- Tests : unit + integrated PG + `ml3-dictation-nominal-path.spec.ts`

## Preuves

- Unit/pg dictation : **28 PASS**
- Playwright C01–C03 : **3 PASS** (captures `c01-during-dictation.png` / `c01-after-draft.png`)
- BUILD `dRmFP_CKHNL8g6MOXuA1q` · digest `0a64a261…`
- Flags restaurés OFF après qualify

## Reporté RECETTE (arbitrage Morris)

- Microphone réel · qualité FR · vocabulaire technique · latence perçue
- Dictées longues · Figma mobile/visionneuse · UX FinOps
- Pas de report d’un défaut fonctionnel nominal
