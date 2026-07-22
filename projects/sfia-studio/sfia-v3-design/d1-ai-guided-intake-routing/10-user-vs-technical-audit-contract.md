# 10 — Audit utilisateur vs technique

## Niveau utilisateur (activité métier)

Libellés :
- Projet créé
- Cycle ouvert
- Travail repris
- Décision requise
- Contexte actualisé
- Prochaine action

Emplacement : rail / timeline métier · **pas** centre de l’écran principal intake.

## Niveau technique (journal avancé)

- `PROJECT_CREATED`, `PROJECT_MODE_SELECTED`, …
- correlationId, payloads, digests, versions, actor IDs, timestamps

Accès : « Voir le journal technique » · mode diagnostic · permission appropriée.

## Mapping candidat

| Métier | Technique |
|--------|-----------|
| Projet créé | PROJECT_CREATED |
| Mode système appliqué | PROJECT_MODE_SELECTED (si applicable) |
| Cycle ouvert | CYCLE_OPENED (futur) |
| Session reprise | SESSION_RESUMED (futur) |

## I1 impact

Masquer IDs / eventType bruts du Cockpit principal ; conserver données pour vue avancée.
