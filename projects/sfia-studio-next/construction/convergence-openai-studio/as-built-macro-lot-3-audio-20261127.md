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

## Complément 2026-11-28 — contrat GA

Le socket d'ouverture n'envoie plus le header `OpenAI-Beta`. L'URL reste `wss://api.openai.com/v1/realtime?intent=transcription`. `session.update` reste une session `transcription`, PCM 24 kHz, `gpt-live-transcribe`, `languages: ["fr"]`, `turn_detection: null`. L'ouverture n'est acquittée que par `session.updated`.

Une erreur fournisseur objet expose un code distinct (authentification, permission, modèle, paramètre, transcription, timeout, rupture). Le message renvoyé au Pilote reste une phrase courte. Le journal technique porte l'étape, la session Studio, le code fournisseur, le paramètre et le statut HTTP, sans clé, audio ni transcription.

Un timeout d'upgrade ferme la socket avant de la retourner. Une fermeture après ouverture termine la session et n'est pas rouverte. L'onde reste celle de l'analyseur, démarrée seulement en écoute. La cause historique du premier `PROVIDER_ERROR` en recette n'est pas rejouée : aucun appel fournisseur dans ce complément.

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

## E4 intégration (2026-11-27 — C.1–C.5)

| Champ | Valeur |
|---|---|
| Base | `5f2ecad1` → candidat intégré E4 + reliquats E2/E3 |
| BUILD DEV | `NfeXL_KgIuqKGCdf0k4gh` |
| Transport | fixture substitué (`SFIA_DICTATION_TRANSPORT=fixture` + `SFIA_DICTATION_SUBSTITUTED=1`) — **aucun LIVE** |
| UI | `NoraSharedComposer` interactions partagées (IME/growth/lock/send) ; chrome prep≠travail préservé |
| MP-06 DET | erreurs explicites (`SESSION_OPEN_TIMEOUT` / handshake) ; onde analyseur **après** `listening` seulement |
| Brouillons | clés isolées `sfia.travail.draft` / `sfia.prep.draft` ; sas branché sessionStorage |
| Preuves | unit dictation+composer **31+** ; PW C01–C03+harness **4 PASS** ; evidence `construction/evidence/ml5-e4-20261127/` |
| Verdict construction | E4 READY WITH RESERVES — MP-06 LIVE / qualité FR / latence → E5+recette sous GO Morris |
