# 08 — Morris decision pack (Wave 1)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `PREPARED — MORRIS DECISION REQUIRED` |
| **Aucune option auto-sélectionnée** | oui |
| **T-A7** | `NOT OPEN` |
| **Vague 1 technique** | **non ouverte** |
| **F03 / F11 / F13** | `NOT DECIDED` |

---

## T-A7-W1-D01 — Niveau de cadrage suite

**Question :** Quel niveau retenir pour la suite de la vague 1 ?

| Option | Description |
|--------|-------------|
| .1 | Inventaire seulement (W1-A) — vérité figée |
| .2 | Inventaire + plan de retrait candidat (W1-B) |
| .3 | Inventaire + isolation préalable candidate (W1-C) |
| .4 | Autre / différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (W1-B).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D02 — Blocs legacy confirmés actifs

**Question :** Quels blocs sont confirmés **actifs** (évidence) ?

| Option | Description |
|--------|-------------|
| .1 | MethodMode D1 + prompts/`method` core + OPS1 runtime/allowlist (recommandé comme socle minimal évidencé) |
| .2 | Étendre à tout `method/documentation` comme actif |
| .3 | Restreindre à MethodMode D1 seulement |
| .4 | Custom / investigation complémentaire obligatoire avant claim |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1**.

**Statut :** `MORRIS DECISION REQUIRED`

**Anti-claim :** choisir .1 ≠ autoriser retrait.

---

## T-A7-W1-D03 — Candidats au retrait futur

**Question :** Quels blocs sont **candidats** au retrait futur (pas maintenant) ?

| Option | Description |
|--------|-------------|
| .1 | MethodMode hors OA + lectures `method/**` produit OA + badges v2.6 OA (P07–P09) — après preuves |
| .2 | Inclure archive `method/**/archive` en priorité basse |
| .3 | Inclure retrait OPS1 runtime (au-delà isolation) |
| .4 | Aucun candidat tant que P03–P11 non inventoriés finement |
| .5 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.1** (+ .2 optionnel).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D04 — Traitement OPS1

**Question :** Quel traitement pour OPS1 ?

| Option | Description |
|--------|-------------|
| .1 | Conserver POC + renforcer isolation (boundaries) |
| .2 | Isoler (ACL/historique RO) sans retrait |
| .3 | Migrer allowlist / canonical coupling hors `method/` |
| .4 | Retrait futur (GO produit distinct) |
| .5 | Investigation complémentaire avant toute option |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.2** (aligné P10–P11 / F13).

**Statut :** `MORRIS DECISION REQUIRED`

---

## T-A7-W1-D05 — Quand arbitrer F03, F11, F13 ?

**Question :** Quand consommer le **contenu** de F03 / F11 / F13 ?

| Option | Description |
|--------|-------------|
| .1 | Immédiatement après ce framing (bulletin dédié) |
| .2 | F13 (OPS1/historique) avant F03 ; F11 avec surfaces UI cutover |
| .3 | Selon T-A7-D05 : F au point de risque (F03 avant delivery prep/delivery selon bulletin ; F11 avant cutover UI ; F13 avant isolation/historique) |
| .4 | Différer tout F jusqu’à vague 4 delivery readiness |
| .5 | Custom |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **.3** (cohérent T-A7-D05 ; **sans** consommer ici).

**Statut :** `MORRIS DECISION REQUIRED`

---

## Bulletin Morris vierge

```
GO DECIDE T-A7 OPTION C WAVE 1 — T-A7-W1-D01=… — T-A7-W1-D02=… — T-A7-W1-D03=… — T-A7-W1-D04=… — T-A7-W1-D05=… — SFIA STUDIO V3-NATIVE — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut GO :** `NOT CONSUMED / NOT DRAFTED AS DECISION`.

## Synthèse recommandations (non décisionnelles)

| ID | Option | Label |
|----|--------|-------|
| T-A7-W1-D01 | .2 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D02 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D03 | .1 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D04 | .2 | `RECOMMENDED — NOT DECIDED` |
| T-A7-W1-D05 | .3 | `RECOMMENDED — NOT DECIDED` |

## Garde-fous

- Option C adoptée · vague 1 = doc only
- T-A7 `NOT OPEN` · delivery/cutover `NOT AUTHORIZED`
- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD`
- F03/F11/F13 `NOT DECIDED` · F08–F10 contenu `NOT DECIDED`
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE`
- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`
