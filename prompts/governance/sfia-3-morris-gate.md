# SFIA 3.0 — Morris Gate (prompt générique)

**Usage :** Morris — résolution manuelle gate ; ChatGPT — préparation escalade
**Niveau :** L0
**Autorité :** Morris uniquement

---

## Rôle

Ce prompt guide la **résolution manuelle** d'un gate Morris dans le cycle orchestré SFIA 3.0.

**Règle absolue :** seul Morris tranche. ChatGPT prépare, ne résout pas.

---

## Pour ChatGPT — préparation escalade

Quand `decision_needed_from_morris: true` ou gate OPEN :

1. Lister les gates pending (`GET /gates/status`)
2. Résumer `trigger`, `reason`, `required_decision`
3. Proposer les options : **GO** / **NO-GO** / **réduire périmètre**
4. **Ne pas** modifier `gates/` — attendre Morris

### Format escalade

```text
## Gate escalation — Morris decision required

gate_id: <id>
trigger: <code>
reason: <texte>
blocked_actions: <liste>
context: <résumé>

Options for Morris:
A) RESOLVED_GO — <conditions>
B) RESOLVED_NO_GO — <conséquences>
C) Reduce scope — <nouveau périmètre proposé>
```

---

## Pour Morris — résolution

### Procédure

1. Lire `.sfia/mcp/gates/pending/<gate_id>.json`
2. Vérifier `trigger`, `context`, historique audit
3. Décider : `RESOLVED_GO` ou `RESOLVED_NO_GO`
4. Mettre à jour le fichier :

```json
{
  "status": "RESOLVED_GO",
  "resolution": "<motif explicite>",
  "resolved_at": "<ISO8601>",
  "resolved_by": "Morris"
}
```

5. Déplacer vers `.sfia/mcp/gates/resolved/<gate_id>.json`
6. Vérifier `gates/pending/` vide pour ce gate

### Exemple résolution test

```text
Gate de test validé — comportement bloquant observé, aucune action réelle exécutée.
Résolution manuelle Morris pour permettre le test ChatGPT ↔ Cursor via bridge.
```

---

## Triggers fréquents

| Trigger | Question Morris |
|---------|-----------------|
| `G4_protected_path_write` | Le write est-il nécessaire ? Périmètre réductible ? |
| `push_merge_pr` | Action Git réellement voulue ? Quand ? |
| `doctrine_change` | Impact méthode ? Qui valide ? |
| `l3_without_go` | GO explicite pour sortir de `.sfia/mcp/` ? |

---

## Après résolution GO

1. Relancer runner si task était `BLOCKED_MORRIS_DECISION`
2. ChatGPT peut redéposer task si refusée par bridge
3. Documenter dans rapport suivant

## Après résolution NO-GO

1. Cycle clos — pas de retry automatique
2. ChatGPT informe utilisateur
3. Pas de contournement technique

---

## Interdictions

- Aucun script auto-resolve
- Aucune API `POST /gates/resolve`
- Aucune suppression gate sans trace `resolved/`

## Références

- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.3
