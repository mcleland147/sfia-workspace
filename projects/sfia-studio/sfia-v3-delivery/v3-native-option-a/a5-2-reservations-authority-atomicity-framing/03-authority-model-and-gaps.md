# 03 — Modèle d’autorité et gaps (A52-D03)

| Champ | Valeur |
|-------|--------|
| **Réserve liée** | R-T-A3-1 `OPEN HARD` |
| **Arbitrage** | A52-D03 |
| **Statut** | `RECOMMENDED — NOT DECIDED` |

## 1. Modèle actuel (sources T-A3 / T-A4)

- Décision / confirmation : contrats N2/N3 + audit.
- Critical cycle : reste `proposed` sans API publique d’acknowledge.
- Confirm Critical : **fail-closed** (`CRITICAL_NOT_ACKNOWLEDGED`) si ack absent.
- Identité : pas d’IAM sélectionné ; acteurs documentaires ≠ auth production.
- Gouvernance Morris : seule autorité pour gates / COMPLETE / fermeture réserves.

## 2. Matrice autorité

| Action | Acteur | Identité requise | Scope d’autorité | Acknowledge requis | Audit requis | Fail-closed | État actuel | Gap | Décision Morris |
|--------|--------|------------------|------------------|--------------------|--------------|-------------|-------------|-----|-----------------|
| Créer décision | agent / opérateur projet | projet | décision locale | non | oui (trace) | ports fail-closed | fondation mémoire | IAM futur | — |
| Valider (non-Critical) | autorité N2/N3 documentée | métier/projet | validation | selon contrat | oui | oui | partiel mémoire | IAM | — |
| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03** |
| Lancer cycle | runtime Option A | système + projet | cycle | non | oui | oui | mémoire | auth prod | — |
| Changer statut cycle Critical | service ack | identité + scope | Critical | **oui** | **oui** | oui | **manquant** | R-T-A3-1 | **A52-D03** |
| Écriture LPS | runtime | système | LPS append | non | oui | oui | mémoire | B5 satellites | A52-D01 |
| Écriture Epistemic | runtime | système | epistemic | non | oui | oui | mémoire | atomicité | A52-D04 |
| Rollback / compensation | runtime | système | store local | non | oui | oui | compensation partielle | résiduel HARD | A52-D04 |
| Action réelle | opérateur + système | IAM | real-exec | selon gate | oui | oui | **NOT AUTHORIZED** | R-T-A3-1 + IAM | F09/F10 futurs |
| Cutover | Morris + ops | gouvernance | cutover | gate dédié | oui | oui | **NOT AUTHORIZED** | F09 | — |
| Déclarer COMPLETE | Morris | gouvernance | T-A6 / Option A | gate dédié | oui | oui | **NOT DECLARED** | F04 bornage | — |

### Distinctions d’autorité

| Type | Rôle | A5.2 |
|------|------|------|
| Métier | validation domaine | ne remplace pas Critical ack |
| Projet | cadrage / delivery prep doc | ≠ real-exec |
| Technique | runtime fail-closed | ne crée pas d’API |
| Gouvernance Morris | gates / COMPLETE / réserves | **seule** fermeture |
| Utilisateur | identité future | `NOT SELECTED` |
| Système/service | appels internes | ≠ API publique authentifiée |

## 3. Gap R-T-A3-1 (HARD)

1. Pas d’API publique Critical acknowledge.
2. Pas de preuve d’identité/scope/anti-replay pour ack.
3. Confirm reste fail-closed — **correct** — mais empêche Confirm Critical réel.
4. Service interne non formalisé comme substitut temporaire autorisé.

## 4. Options A52-D03

| Option | Description | Dette | Réversibilité |
|--------|-------------|-------|---------------|
| **A52-D03.1** | API publique authentifiée + auditée obligatoire avant tout Confirm Critical réel | implémentation + IAM | haute si feature-flag |
| **A52-D03.2** | Service interne borné temporaire ; **aucune** exécution publique | dette auth publique | moyenne |
| **A52-D03.3** | Maintenir uniquement simulation / read-only / Confirm fail-closed | bloque real Critical | haute |
| **A52-D03.4** | Autre (spec + proof harness sans exposer API) | design-only | haute |
| **A52-D03.5** | Différer l’arbitrage | HARD reste OPEN | — |

## 5. Recommandation

`RECOMMENDED — NOT DECIDED` → **A52-D03.3** pour l’immédiat, avec trajectoire documentée vers **A52-D03.1** avant tout Confirm Critical réel / real execution.

Justification : minimum maintenant ; conserve fail-closed ; n’ouvre pas T-A7 ; n’autorise pas delivery ; n’implique aucune sélection IAM.

## 6. Critères minimum futurs (non sélection techno)

- identité de l’acteur
- scope d’autorité Critical
- acknowledge explicite
- audit immuable
- anti-replay
- fail-closed préservé
