# 08 — Morris decision pack — ouverture T-A7 (après O2)

| Champ | Valeur |
|-------|--------|
| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
| **Statut** | `MORRIS DECISION REQUIRED` |
| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **T-A7 actuel** | `NOT OPEN` |
| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **O2 gate courant** | consommé pour prep bornée — **ne présélectionne pas** la suite |
| **Présélection** | **aucune** |

---

## Question

**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**

---

## Options

### O1 — Ne pas ouvrir T-A7

Conserver `NOT OPEN` · capitaliser preuves · pas de nouveau lot technique.

### O2 — Continuer la préparation technique bornée

Poursuivre preuves restantes (live cross-call optionnel · hold design doc · e2e ciblés · drills rollback doc) **sans** développement fonctionnel.

### O3 — Ouvrir un premier lot de développement borné

**Non supporté** tant que P06–P09/P11 MISSING · F11/F13 absents · HARD/B5 ouverts · isolation non implémentée.

### O4 — Custom

Ex. valider formellement le contrat OPS1 comme GO d’implémentation future séparée · ou cadrer micro-lot hold MethodMode **documentaire**.

---

## Preuves nouvelles (O2)

- 6 probes + 6 suites existantes · 63 tests verts ;
- isolation static OPS1↔OA ;
- allowlist method/ denials ;
- asymétrie path-policy/loader ;
- volumes locaux agrégés ;
- absences F11/F13/hold prouvées.

## Blockers levés / restants

Voir `07` §3.

## Régression

Aucune régression détectée sur suites rejouées.

## Recommandation repo-informed (non décisionnelle)

**Statut :** `RECOMMENDED — NOT DECIDED`

**Recommandation :** **O2** (continuer prep bornée sur résiduels) **ou** **O1** si pause ; **pas O3**.

### Périmètre candidat futur (si O2)

| Inclus | Exclu |
|--------|-------|
| probes live optionnels | `method/**` |
| e2e OPS1 ciblés read-only | mod fonctionnelle OPS1/MethodMode |
| docs hold MethodMode | API F11 · vue F13 · delivery |

### Gates candidats (non consommés)

```
GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN
```

(Si F03.3 devenait SATISFIED plus tard :)

```
GO DECIDE T-A7 OPENING — REVIEW UPDATED TECHNICAL EVIDENCE — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
```

---

## Bulletin D-T-A7-OPEN

| Champ | Valeur |
|-------|--------|
| **Options** | O1 · O2 · O3 · O4 |
| **Recommandation** | O2 (ou O1) · pas O3 |
| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · validation OPS1 ≠ implémentation · T-A7 reste NOT OPEN jusqu’à GO distinct |
| **Champ** | `MORRIS DECISION REQUIRED` |

**Aucune option n’est pré-cochée comme décision.**

---

## Garde-fous

- F03.3 / F11.2 / F13.4 / combinaison `DECIDED` inchangées ;
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
- T-A7 `NOT OPEN` ;
- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.

---

## Verdict section

`MORRIS OPENING DECISION PACK UPDATED AFTER O2 WITHOUT PRESELECTION — RECOMMENDATION O2 OR O1 — O3 NOT SUPPORTED — T-A7 NOT OPEN`
