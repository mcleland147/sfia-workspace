# 06 — Removal and isolation options (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Nature** | options · **aucune présélection exécutoire** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` uniquement |
| **F03 / F11 / F13** | `NOT DECIDED` |

## Option W1-A — Inventaire seulement

**Idée :** figer la vérité et les dépendances (ce pack) ; aucun plan détaillé de retrait.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | risque minimal · conforme gate read-only · base pour Morris |
| Risques | laisse F03/F11/F13 sans séquence opérationnelle |
| Dette | rework plan dans un cycle suivant |
| Coût / complexité | bas |
| Réversibilité | totale |
| Impact tests/CI/sécu/RUN | nul (doc only) |
| F concernées | préparation seulement |
| Stops | T-A7 NOT OPEN · no method/OPS1 mod |

## Option W1-B — Inventaire + plan de retrait candidat

**Idée :** ajouter séquences candidates (MethodMode → remplacements OA → CI boundary → OPS1 isolation → historique RO) avec rollback papier.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | accélère F03 ; aligne P03–P11 |
| Risques | plan pris pour autorisation ; sous-estime HARD A5.2 |
| Dette | plans obsolètes si runtime change |
| Coût / complexité | moyen |
| Réversibilité | haute (doc) |
| Impact tests/CI | design de tests candidats seulement |
| F | F03/F11/F13 timing+contenu futurs |
| Stops | SC-02…05 · STOP BEFORE DELIVERY |

## Option W1-C — Inventaire + isolation préalable candidate

**Idée :** prioriser façades / boundaries (allowlist, import CI, anti cross-call OPS1/OA/D1) **avant** tout retrait.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | réduit risque double identité · compatible SC-03/SC-12 |
| Risques | isolation présentée comme cutover ; travail technique anticipé sans GO |
| Dette | wrappers temporaires (déjà notés platform/OPS1) |
| Coût / complexité | moyen–haut (si exécuté plus tard) |
| Réversibilité | moyenne une fois code touché (**hors ce cycle**) |
| Impact sécu | positif si bien borné |
| F | F13 en tête · F03 ensuite |
| Stops | aucune mod code dans Wave 1 framing |

## Challenge

| Question | W1-A | W1-B | W1-C |
|----------|------|------|------|
| Utile maintenant ? | **oui** | oui si Morris veut séquence | oui si priorise sécu OPS1 |
| Réduit risque cutover ? | partiel | mieux | mieux sur isolation |
| Crée dette doc ? | faible | moyenne | moyenne |
| Plus simple ? | **oui** | non | non |
| Préparable sans ouvrir T-A7 ? | **oui** | oui (doc) | oui (doc only ici) |
| Respecte STOP BEFORE DELIVERY / `.1` ? | oui | oui | oui |

## Recommandation

`RECOMMENDED — NOT DECIDED` → **W1-B** (inventaire déjà produit + plan de retrait **candidat** dans cycle suivant ou annexe Morris), **sans** exécution.

Alternative acceptable : rester en **W1-A** si Morris veut limiter la vague 1 à la vérité pure.

**Aucune option adoptée tant que T-A7-W1-D01 n’est pas tranché.**
