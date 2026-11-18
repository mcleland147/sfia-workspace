# Analyse causale UX-05 — UAT-07 (données RECETTE réelles)

## Identités persistées (lecture seule)

| Champ | Valeur |
| --- | --- |
| Projet | `proj_d3b5272f-8f0f-45d7-ace4-a8d4ea773618` |
| Conversation | `conv_f9b3bf1d-8a43-456e-8a1e-a95e84824134` |
| User (dernier UAT-07) | `msg_54bb7aff-2552-457f-ab6c-7068410e04e0` |
| Assistant (dernier) | `msg_84ae0ce0-34a5-42bb-a5ab-32c3178c1286` |
| Forme antérieure | `msg_3732528d…` → `msg_6c8cfaa2…` (5 nœuds, sync→revue) |

## Composition réelle (dernier tour)

Nœuds (6, libellés uniques) :

| id | label | laneId |
| --- | --- | --- |
| infrastructure | Infrastructure | infrastructure |
| metier | Métier | metier |
| accompagnement | Accompagnement | accompagnement |
| synchronisation | Tous les livrables terminés | commun |
| revue | Revue commune | commun |
| lancement | Lancement | commun |

Arêtes :

- `infrastructure|metier|accompagnement` → `synchronisation` (`sync`)
- `synchronisation` → `revue` (`flow`)
- `revue` → `lancement` (`flow`)

**Conclusion données :** une seule « Revue commune » dans la composition canonique. Pas de duplication D3 par libellé. Les deux « Revue » visibles venaient du **renderer**.

## Cause racine (mécanisme 4)

`classifyLanes()` (correctif précédent) plaçait :

1. les cibles `sync` dans `gateNodes` ;
2. **et** laissait les mêmes nœuds (lane `commun`) dans une 4ᵉ voie flow / suite non exclusive.

Résultat layout : boîtes dupliquées (`synchronisation` / `revue`) + flèches trompeuses (colonne droite).

Ce n’est **pas** :

1. deux nœuds D3 distincts au même libellé ;
2. un seul nœud rendu deux fois par React key collision seule ;
3. une duplication swimlane CSS pure ;
5. un autre mécanisme — la preuve layout+ids confirme le double claim.

## Correctif

- Ensemble `claimed` : un nœud appartient à **un seul** groupe (flow / gate / suite).
- Cibles `sync` → gate exclusif.
- Reste de la lane de coordination (`commun` / `coordination-commune`) → suite.
- `orderSuiteChain` : ordre vertical topo revue → lancement sous le gate.
- Scroll horizontal **conservé** (accepté Morris).

Preuve post-fix (e2e DEV) : 6 ids uniques ; y(sync) < y(revue) < y(lancement) ; 3 voies x distinctes.
