# 06 — Recommandation et risques

| Champ | Valeur |
|-------|--------|
| **Statut global** | `RECOMMENDED — NOT DECIDED` |
| **Autorité** | aucune hors Morris |

## 1. Recommandation

| Domaine | Option | Justification courte |
|---------|--------|----------------------|
| F03 | **F03.3** | minimal + traçabilité P* / HARD / D04 sans maximalisme cutover |
| F11 | **F11.2** | API lecture/hold/readiness · pas d’UI admin prématurée |
| F13 | **F13.4** | hybrid Git archive + RO runtime borné · OPS1 isolable |
| Combo | **F03.3 × F11.2 × F13.4** | cohérente · proportionnée · réversible |

## 2. Compatibilité

| Contrainte | Respect reco ? |
|------------|----------------|
| W1-B plan candidat | oui (doc) |
| Isolation OPS1 avant retrait (D04) | oui (F13.4/F13.2 path) |
| F gates avant prep (D05) | oui |
| T-A7 NOT OPEN | oui |
| Pas de dette UI inutile | oui (évite F11.3 immédiat) |
| Repo-informed | oui (preuves Wave 1 + P*) |

## 3. Risques résiduels

| Risque | Sévérité | Mitigation documentaire |
|--------|----------|-------------------------|
| « Prep » mal définie malgré F03.3 | Med | W1-S4 · liste exclusions |
| API F11.2 étendue en write trop tôt | Med | mutations = gate séparé |
| Hybrid F13.4 mal discipliné | Med | deny-write · inventaire allowlist |
| HARD ignorés | High | anti-bypass B5/R1/HARD |
| Volume DB UNKNOWN | Med | campagne mesure avant retrait D1 |

## 4. Ce qui n’est **pas** recommandé maintenant

- F03.2 comme entrée prep (sur-cadrage)
- F11.1 (aveugle)
- F13.3 seul (trou runtime)
- Toute implémentation / prep technique / cutover

## 5. Anti-claims

- recommandation ≠ validation Morris
- combo reco ≠ décision
- F décidées plus tard ≠ delivery/cutover autorisés
