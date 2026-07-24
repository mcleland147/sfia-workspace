# 06 — Trajectoire, décision humaine et confirmations N1–N3

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `06-trajectory-decision-and-confirmation-model.md` |
| **Fondations** | V3-F04 · F05 · F06 · F09 · CC-D05 · CC-D06 |

## 1. Épistémologie (obligatoire)

| Type | Devient décision ? |
|------|--------------------|
| Observation | Non |
| Fact | Non (sauf base de décision) |
| Hypothesis | Non |
| Option | Non |
| Recommendation | Non |
| HumanDecision | **Oui** (acte explicite) |
| Reserve / Risk / Evidence / Claim | Non |

Phrase utilisateur ≠ HumanDecision. CTA générique ≠ validation (CC-D05).

## 2. ProjectTrajectory

Contenu : cycles proposés/actifs/clôturés · dépendances · entry/exit · branches · gates · réserves · motifs replanif.
`candidate` jusqu’à HumanDecision → `validated`.
Auto-exécution : **interdite**.

### Replanification (V3-F09)

événement → impact → trajectoire révisée candidate → options → reco → gate si structurant → LPS.

## 3. HumanDecision

Champs : decisionId · actor · object · optionId? · rationale · reserves · scope · reversible · evidenceRefs · supersedes? · timestamp · effectsOnLps.

Amendement = nouvelle version + lien superseded.

## 4. Confirmations N1–N3 (CC-D06)

| Niveau | Déclencheurs typiques | UI fonctionnelle | Annulation |
|--------|----------------------|------------------|------------|
| **N1** | écriture locale réversible · artefact temporaire | légère / inline | immédiate |
| **N2** | création Project · activation cycle · trajectoire validée · pin doctrine | dialog / plein cadre résumé effets | avant confirm |
| **N3** | push/PR/merge · delete critique · action irréversible · chemin protégé · exec externe structurante | modale renforcée + gate visible | avant confirm ; post = rollback prouvé seulement |

**Informations requises :** effets · périmètre · réversibilité · gate · preuves attendues.
**Expiration :** confirmation périmée → `CONFIRMATION_REQUIRED` renew.
**Implicite :** interdit.

## 5. Gates

Visibles panneau (métier + ID SFIA secondaire).
Contradiction structurante / décision absente → `DECISION_REQUIRED` / gate Morris.

## 6. Maturité

DOCUMENTED.
