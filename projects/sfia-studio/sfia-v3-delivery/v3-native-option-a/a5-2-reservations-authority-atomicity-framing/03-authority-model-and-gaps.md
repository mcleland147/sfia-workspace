# 03 — Modèle d’autorité et gaps (A52-D03)

| Champ | Valeur |
|-------|--------|
| **Réserve liée** | R-T-A3-1 `OPEN HARD` |
| **Arbitrage** | A52-D03 |
| **Choix Morris** | `.3`, puis `.1` avant toute exécution Critical réelle |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **IAM** | `NOT SELECTED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

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
| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03 `.3` maintenant ; `.1` avant real** |
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

## 3. Gap R-T-A3-1 (HARD) — inchangé techniquement

1. Pas d’API publique Critical acknowledge.
2. Pas de preuve d’identité/scope/anti-replay pour ack.
3. Confirm reste fail-closed — **correct** — mais empêche Confirm Critical réel.
4. Service interne non formalisé comme substitut temporaire autorisé.

**R-T-A3-1 reste `OPEN HARD`.** Aucune fermeture. IAM `NOT SELECTED`. Aucune API implémentée.

## 4. Options A52-D03 (historique)

| Option | Description | Dette | Réversibilité |
|--------|-------------|-------|---------------|
| **A52-D03.1** | API publique authentifiée + auditée obligatoire avant tout Confirm Critical réel | implémentation + IAM | haute si feature-flag |
| **A52-D03.2** | Service interne borné temporaire ; **aucune** exécution publique | dette auth publique | moyenne |
| **A52-D03.3** | Maintenir uniquement simulation / read-only / Confirm fail-closed | bloque real Critical | haute |
| **A52-D03.4** | Autre (spec + proof harness sans exposer API) | design-only | haute |
| **A52-D03.5** | Différer l’arbitrage | HARD reste OPEN | — |

## 5. Décision Morris adoptée

`DECIDED — ADOPTED BY MORRIS` → **A52-D03.3** à court terme, avec trajectoire obligatoire vers **A52-D03.1** avant toute exécution Critical réelle.

### Norme

- simulation / read-only uniquement à court terme ;
- aucune exécution Critical réelle autorisée par cet enregistrement ;
- fail-closed obligatoire ;
- API publique authentifiée, autorisée, auditée et anti-replay obligatoire **avant** toute exécution Critical réelle (précondition future `.1` — **pas** une implémentation).

### Non-effets

- R-T-A3-1 n’est **pas** CLOSED ;
- IAM non sélectionné ;
- aucune API implémentée ;
- aucun delivery / cutover ;
- F09 / F10 restent `NOT DECIDED` (préparation seulement).

## 6. Critères minimum futurs pour `.1` (non sélection techno)

- identité de l’acteur
- scope d’autorité Critical
- acknowledge explicite
- audit immuable
- anti-replay
- fail-closed préservé
