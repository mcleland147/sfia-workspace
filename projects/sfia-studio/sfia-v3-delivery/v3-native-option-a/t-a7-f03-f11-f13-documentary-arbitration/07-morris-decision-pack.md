# 07 — Morris decision pack — D-T-A7-F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `RECORDED — DECIDED BY MORRIS` |
| **Gate** | `GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 19:25:19 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |

---

## D-T-A7-F03

| Champ | Valeur |
|-------|--------|
| **Choix** | **F03.3** |
| **Libellé** | `CUSTOM INTERMEDIATE ENTRY PRECONDITION SET` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F03.1 · F03.2 · autre/différer.

**Impacts / dette / réversibilité :** borne l’entrée prep · dette doc P* · réversibilité Git haute.

**Gate futur :** satisfaction/bornage set · puis prep sous GO distinct.

**Anti-claims :** F03 ≠ préconditions satisfaites · ≠ delivery preparation · ≠ set maximal · ≠ validation runtime.

---

## D-T-A7-F11

| Champ | Valeur |
|-------|--------|
| **Choix** | **F11.2** |
| **Libellé** | `MINIMAL OPERATIONAL READ API WITHOUT DEDICATED UI` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F11.1 · F11.3 · F11.4 · autre/différer.

**Impacts / dette / réversibilité :** exigence contrats lecture futurs · dette API · réversibilité moyenne.

**Gate futur :** design/validation API · mutations = gate séparé · pas d’UI obligatoire.

**Anti-claims :** ≠ API implémentée · ≠ mutation · ≠ product complete · ≠ IAM.

---

## D-T-A7-F13

| Champ | Valeur |
|-------|--------|
| **Choix** | **F13.4** |
| **Libellé** | `HYBRID GIT ARCHIVE PLUS BOUNDED READ-ONLY RUNTIME VIEW` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

**Options non retenues :** F13.1 · F13.2 · F13.3 · autre/différer.

**Impacts / dette / réversibilité :** cible hybrid · dette politique · réversibilité moyenne.

**Gate futur :** design isolation OPS1 + vue RO · durée conservation si besoin.

**Anti-claims :** ≠ frontière implémentée · ≠ ACL validée · ≠ archive seule suffisante · Git reste vérité · ≠ isolation réalisée.

---

## Combinaison

| Champ | Valeur |
|-------|--------|
| **Choix** | **F03.3 × F11.2 × F13.4** |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |

## Bulletin consommé

```
GO DECIDE T-A7 F03 F11 AND F13 — F03=F03.3 — F11=F11.2 — F13=F13.4 — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `CONSUMED — DECISIONS RECORDED` (documentaire uniquement).

## Synthèse

| ID | Choix | Statut |
|----|-------|--------|
| D-T-A7-F03 | F03.3 | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F11 | F11.2 | `DECIDED — ADOPTED BY MORRIS` |
| D-T-A7-F13 | F13.4 | `DECIDED — ADOPTED BY MORRIS` |
| Combinaison | F03.3 × F11.2 × F13.4 | `DECIDED — ADOPTED BY MORRIS` |

## Garde-fous

- W1-B · W1-D01…D05 : inchangées (`DECIDED`)
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- T-A7 `NOT OPEN`
- delivery preparation / delivery / cutover `NOT AUTHORIZED`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
- **Aucune** implémentation autorisée par ces décisions
