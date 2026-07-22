# 09 — Stratégie MethodMode cible

## État transitoire (D1-I1)

- Champ UI sélectionnable.
- Valeur persistée `methodMode`.
- Utile anti-claims / transition / audit.

## Cible produit

| Aspect | Cible |
|--------|-------|
| UI parcours standard | **supprimé** (pas de choix utilisateur) |
| Indicateur | lecture seule optionnel (badge gouvernance) |
| Source de vérité | configuration / gouvernance workspace |
| Persistance | conservée en donnée système + audit |
| Admin/diagnostic | écran séparé si besoin |
| Claim | jamais V3-ADOPTED via UI |

## Compatibilité I1

1. Conserver colonne/valeur SQLite.
2. Déprécier UI MethodMode dans New Project / Cockpit principal.
3. Mapper création intake → mode système (ex. `V3_CANDIDATE` ou politique workspace) **sans** choix libre.
4. Mode avancé expert : lecture + override admin seulement (hors C1).

## Absence de dépendance fonctionnelle durable

Le parcours cible ne branche **pas** sur un select MethodMode. Le routage dépend de l’intention et du contexte, pas de la préférence méthodologique utilisateur.
