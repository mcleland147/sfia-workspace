# Plan de preuve LIVE audio — en attente de GO Morris

| Champ | Valeur |
|---|---|
| Statut | PREPARED — **NOT EXECUTED** |
| Finalité | Qualité transcription FR + latence native gpt-live-transcribe |
| Endpoint | `wss://api.openai.com/v1/realtime?intent=transcription` |
| Modèle | gpt-live-transcribe |
| Sessions max | 6 |
| Durée cumulée max | 8 minutes |
| Estimation coût | ≈ 8 × 0,017 ≈ **0,14 USD** |
| Corpus | Phrases synthétiques FR + termes SFIA/Nora/PostgreSQL (sans données confidentielles) |
| Protection | Flag ON local · `maxDurationMs` · STOP si erreur permission · aucun auto-send |
| STOP | Toute session hors plan · clé Admin · RECETTE |

Aucun effet LIVE tant que Morris n’a pas donné un GO distinct.
