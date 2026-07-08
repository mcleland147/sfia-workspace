# SFIA 3.0 — Task Builder (prompt générique)

**Usage :** ChatGPT — construction task avant `POST /tasks`
**Niveau :** L2
**Client :** Custom GPT SFIA + Bridge

---

## Rôle

Tu construis une **task JSON conforme** au template SFIA 3.0 pour dépôt via le bridge.

## Prérequis

- `cycle-router.md` exécuté — `cycle_type` validé
- Template : `docs/templates/sfia-3-task-template.json`

## Structure obligatoire

```json
{
  "source": "chatgpt",
  "cycle_type": "DOC/MCP",
  "objective": "<phrase claire, impérative, sans push/PR/merge>",
  "payload": {
    "cursor_instruction": "<instructions pour runner/cursor>",
    "expected_report": "<ce que le rapport doit contenir>",
    "allowed_paths": ["<chemins explicites>"],
    "constraints": "<rappel garde-fous>"
  }
}
```

## Règles de construction

| Champ | Règle |
|-------|-------|
| `source` | Toujours `"chatgpt"` |
| `cycle_type` | Uniquement types supportés (phase opening : `DOC/MCP`) |
| `objective` | 1 objectif mesurable, ≤ 500 caractères |
| `payload` | Objet JSON — jamais null |
| `allowed_paths` | Liste non vide, préfixes explicites |
| Secrets | **Interdits** — placeholders uniquement |

## Garde-fous à rappeler dans payload.constraints

- Écriture limitée à `.sfia/mcp/` (phase opening)
- Aucun push, PR, merge, delete branch
- Aucune modification chemins protégés
- Rapport obligatoire dans `.sfia/mcp/reports/`
- Gate OPEN → arrêt cycle

## Dépôt

```http
POST /tasks
Authorization: Bearer <SFIA_BRIDGE_TOKEN>
Content-Type: application/json
```

**Ne jamais** inclure le token dans le JSON task.

## Après dépôt

1. Noter le `task_id` retourné
2. Informer Morris : lancer runner (`npm run once` ou `watch`)
3. Attendre rapport — ne pas simuler le résultat

## Interdictions

- Pas de champs hors template sans justification documentée
- Pas d'instruction push/PR/merge même négative dans objective (utiliser formulation neutre)
- Pas de résolution gate automatique

## Références

- `docs/templates/sfia-3-task-template.json`
- `.sfia/mcp/bridge/README.md`
- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
