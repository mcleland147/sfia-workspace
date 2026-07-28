# 07 — Morris decision pack — D-T-A7-F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **F03 / F11 / F13** | contenu `NOT DECIDED` |
| **T-A7** | `NOT OPEN` |
| **Prep technique / delivery / cutover** | `NOT AUTHORIZED` |

---

## D-T-A7-F03 — Préconditions avant préparation technique

**Question :** Quel set de préconditions obligatoires avant toute préparation technique de retrait / delivery T-A7 ?

| Option | Description |
|--------|-------------|
| F03.1 | Set minimal (inventaire · actifs · candidats · W1-B · isolation définie · rollback doc · preuves candidates · F11/F13 décidées · HARD non ignorés) |
| F03.2 | Set maximal (P03–P11 + runtime + tests + obs + sécu + données + IAM + RUN + cutover readiness) |
| F03.3 | Set custom intermédiaire (F03.1 + matrice P* + frontière OPS1 design + holds candidats + anti-bypass) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F03.3**

**Impacts :** borne l’entrée en prep · n’autorise pas delivery.

**Dette :** doc P* à maintenir.

**Réversibilité :** haute.

**Gate futur :** plan W1-B détaillé · puis prep seulement si GO.

**Anti-claims :** F03 décidé ≠ delivery · ≠ cutover · ≠ T-A7 OPEN.

**Statut :** `MORRIS DECISION REQUIRED`

---

## D-T-A7-F11 — API / UI retrait et cutover

**Question :** Quelles exigences API/UI pour opérer/observer le retrait legacy et le cutover ?

| Option | Description |
|--------|-------------|
| F11.1 | Aucune nouvelle surface avant cutover |
| F11.2 | API opérationnelle minimale **sans** UI dédiée (lecture état/holds/readiness) |
| F11.3 | API + UI minimale d’administration |
| F11.4 | Custom (API maintenant · UI jalonnée plus tard) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F11.2**

**Impacts :** exige contrats lecture futurs · pas d’UI shippée par cette décision seule.

**Dette :** API contracts.

**Réversibilité :** moyenne.

**Gate futur :** design/API gate distinct · mutations write séparées.

**Anti-claims :** F11 ≠ product complete A3.2 · ≠ implémentation · ≠ retrait MethodMode.

**Statut :** `MORRIS DECISION REQUIRED`

---

## D-T-A7-F13 — Historique legacy read-only / OPS1

**Question :** Quelle politique d’historique legacy read-only et de frontière OPS1 ?

| Option | Description |
|--------|-------------|
| F13.1 | Conservation in-place read-only |
| F13.2 | Isolation dédiée read-only (namespace/API/ACL) |
| F13.3 | Archive documentaire uniquement (Git/docs) |
| F13.4 | Hybrid (archive Git + vue/politique RO runtime bornée + OPS1 isolable) |
| Autre / différer | — |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **F13.4**

**Impacts :** impose discipline deny-write + design isolation OPS1 (D04).

**Dette :** politique hybride.

**Réversibilité :** moyenne.

**Gate futur :** isolation design · puis implémentation sous GO distinct.

**Anti-claims :** F13 ≠ isolation implémentée · ≠ ACL validée · ≠ retrait OPS1 · path-policy ≠ IAM.

**Statut :** `MORRIS DECISION REQUIRED`

---

## Bulletin Morris (vierge)

```
GO DECIDE T-A7 F03 F11 AND F13 — D-T-A7-F03=… — D-T-A7-F11=… — D-T-A7-F13=… — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.

## Synthèse recommandations (non décisionnelles)

| ID | Option | Label |
|----|--------|-------|
| D-T-A7-F03 | F03.3 | `RECOMMENDED — NOT DECIDED` |
| D-T-A7-F11 | F11.2 | `RECOMMENDED — NOT DECIDED` |
| D-T-A7-F13 | F13.4 | `RECOMMENDED — NOT DECIDED` |

## Garde-fous

- W1-B · W1-D01…D05 : décisions Wave 1 inchangées
- F03/F11/F13 contenu : `NOT DECIDED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- T-A7 `NOT OPEN`
- delivery preparation / delivery / cutover `NOT AUTHORIZED`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
