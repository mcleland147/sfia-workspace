# Delta UX candidat — FinOps page 13 (Figma)

| Champ | Valeur |
|---|---|
| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
| Statut | **CANDIDATE — NOT APPLIED** (mandat §10.7 : validation Morris avant code UI) |
| Backend | `providerReconciliation` déjà exposé dans `/api/finops/summary` |

## Proposition de restitution

Conserver la page 13 existante. Ajouter une section secondaire (hors hero) :

1. **Estimation Studio** (inchangé) — travaux / tokens / USD estimés.
2. **Coût fournisseur** — montant agrégé + devise + période, ou état `Indisponible`.
3. **Écart** — uniquement si `comparability=COMPARABLE` ; sinon libellé `Non comparable` + limite.
4. **Fraîcheur** — dernière collecte réussie / partielle / bloquée (pas de secret).
5. **États d’erreur** — `OPENAI_ADMIN_KEY_ABSENT`, sync partielle, mapping lane non prouvé.

Aucune fausse précision. Aucun plafond monétaire produit. Pas de second écran FinOps.

## GO demandé

Validation Morris du delta avant transposition Figma → code.
