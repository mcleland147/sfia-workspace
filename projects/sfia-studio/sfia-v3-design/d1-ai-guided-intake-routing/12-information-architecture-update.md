# 12 — Mise à jour architecture d’information

## Avant (I1 form-first)

```
Workspace Home → New Project (form) → Cockpit
/nouvelle-demande (OPS1 legacy)
```

## Cible (AI-guided)

```
Nouvelle demande (intake conversationnel)  ← entrée principale
├── Reprendre (projets / cycles / actions / décisions)
├── Création manuelle avancée (secondaire)
Workspace (liste / reprise)
Project Cockpit (post-mutation, activité métier)
Cycle / GuidedSession (après confirm)
Decision Center (si OPEN_DECISION)
Journal technique (secondaire)
```

## Navigation

| Item | Rôle |
|------|------|
| Nouvelle demande | Hub intent |
| Workspace | Inventaire / reprise visuelle |
| Projet | Cockpit |
| Décisions | gates ouvertes |
| Manuel | expert escape hatch |

## Legacy

`/nouvelle-demande` OPS1 **conservé** jusqu’à bridge Resume Action explicite.
