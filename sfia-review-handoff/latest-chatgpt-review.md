# ChatGPT Review Pack — FULL
## FinOps T2 Numeric Precision / Scale Decision Pack

| Champ | Valeur |
|-------|--------|
| **Date/heure CEST** | 2026-08-07 12:20:42 CEST (+0200) |
| **Date/heure UTC** | 2026-08-07 10:20:42 UTC |
| **Niveau** | Full |
| **Cycle** | 6 — Architecture technique · Decision Pack Preparation — T2 Money numeric(p,s) |
| **Profil** | Critical |
| **GO consommé** | Préparer l'arbitrage precision/scale uniquement — **ne pas sélectionner p/s** |
| **M2** | INTANGIBLE — remains SELECTED |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| **Branche** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| **HEAD / origin/main** | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` / `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| **Handoff entrant** | tip `e82a32a6505184aed707876ebf59c9452b328300` · blob `2bb0a4955029a9b5bbb3130737216b85c0bc1e5a` |

## Garde-fous

- M1/M2/M3 NOT reopened
- Candidate recommendation ≠ Morris decision
- NO invented provider tariffs / Decimal library / Delivery
- 138/139 IMMUTABLE
- NO code/SQL/migration/package/CI
- NO project commit/push/PR/merge

## Git Truth / integrity

```
?? .tmp-sfia-review/
?? projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md
?? projects/sfia-studio/139-assistant-sfia-native-openai-finops-technical-lot-t2-decisions-applied.md
?? projects/sfia-studio/140-assistant-sfia-native-openai-finops-technical-lot-t2-numeric-precision-scale-decision-pack.md
```

| Doc | SHA-256 | Lines |
|-----|---------|-------|
| 138 | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` | 745 preserved |
| 139 | `0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f` | 413 preserved |
| 140 | `e69cfedcdfdfd4bf3b94c35b28ac68fc4ca5dfbd5f5b6df52dcd5d11050aeb4b` | 443 created |

## Options analysées (résumé)

- P1 numeric(18,6) · P2 numeric(20,8) · P3 numeric(24,12) · P4 (16,4) rejetée
- R1 same PS · R2 finer rate · **R3 catalog Money per billing quantum (candidate)**
- Discriminant = scale (plage entière 12 digits non discriminante vs seuils 30 USD)

## Recommandation candidate — NOT SELECTED

- `D-T2-NUMERIC-PS-01 = numeric(20,8)`
- Rate representation R3 (same Money PS per explicit quantum)
- `D-T2-PRICE-RATE-PS-01` only if R2 demanded → candidate fallback numeric(24,12)
- Optional future `D-T2-ROUNDING-01`

## Gate Morris proposé

`GO DECISIONS FINOPS TECHNICAL LOT T2 — NUMERIC PRECISION/SCALE —` (texte complet dans 140 §21) — **non consommé**

## Non-décisions / réserves

p/s not SELECTED · rounding open · R3 not SELECTED · no Delivery · FIND-03 remains closed decisionally · impl Money NOT PERFORMED

## Review Handoff

| Field | Value |
|-------|--------|
| mode | publish-in-cycle |
| commit message | `docs(review-handoff): publish T2 numeric precision scale decision pack` |
| remote before | tip `e82a32a6…` · blob `2bb0a495…` |
| statut attendu | HANDOFF UPDATED — REMOTE VERIFIED |

## Verdict

```
FINOPS T2 NUMERIC PRECISION/SCALE DECISION PACK COMPLETE —
M2 REMAINS SELECTED —
NUMERIC OPTIONS QUANTIFIED —
MONEY AMOUNT / PRICE RATE PRECISION REQUIREMENTS QUALIFIED —
CANDIDATE RECOMMENDATION PRODUCED —
NO PRECISION/SCALE DECISION CONSUMED —
NO T2 DELIVERY —
NO T6-FOUNDATION DELIVERY —
DOCUMENTS 138/139 PRESERVED —
DOCUMENT 140 CREATED —
NO CODE / SQL / MIGRATION / PACKAGE / CI MODIFICATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
REVIEW HANDOFF REMOTE VERIFIED —
MORRIS NUMERIC PRECISION/SCALE DECISION REQUIRED
```

---

# CONTENU COMPLET DU DOCUMENT 140

# 140 — FinOps Technical Lot T2 — Money PostgreSQL Numeric Precision / Scale Decision Pack

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/140-assistant-sfia-native-openai-finops-technical-lot-t2-numeric-precision-scale-decision-pack.md`
**Cycle:** 6 — Architecture technique · Decision Pack Preparation — T2 Money numeric(p,s)
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** DECISION PACK COMPLETE — NO PRECISION/SCALE SELECTED — NO DELIVERY

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| D-T2-MONEY-01 M2 remains SELECTED | **TRUE** |
| M1/M2/M3 reopened | **FALSE** |
| Exact numeric(p,s) SELECTED BY MORRIS in this cycle | **FALSE** |
| Candidate recommendation produced | **TRUE** — NOT SELECTED |
| Provider tariffs invented | **FALSE** |
| Decimal library selected / installed | **FALSE** |
| T2 / T6-foundation Delivery | **FALSE** |
| Documents 138 / 139 modified | **FALSE** |
| Code / SQL / migration / package / CI modified | **FALSE** |
| Project commit / push / PR / merge | **FALSE** |
| FX policy decided | **FALSE** |

---

## 2. Objet du Decision Pack

Fournir à Morris un arbitrage **final et borné** du couple PostgreSQL `numeric(p,s)` requis par **D-T2-MONEY-01 (M2)** avant toute création de DDL T2.

Ce pack :
- compare des options quantifiées ;
- distingue Money amount vs price/rate ;
- produit une **recommandation candidate** ;
- propose le **texte de GO** attendu ;

Ce pack **ne consomme pas** la décision p/s.

---

## 3. Autorité Morris / état des décisions existantes

| ID | État |
|----|------|
| D-T2-MONEY-01 | **M2 SELECTED** — exact decimal · PG numeric + currency · no authoritative JS float |
| FIND-03 | CLOSED at decision level · implementation NOT PERFORMED |
| D-T2-PRICE-SRC-01 | Versioned server-side estimation catalog SELECTED |
| D-T2-AGG-FORM-01 | A1 durable derived aggregates SELECTED · ledger authoritative · rebuildable |
| D-T2-RECON-TRIGGER-01 | Explicit reconcile project/period · on-demand + bounded batch · no cron |
| Exact p/s | **NOT FIXED** (139 residual) |

GO courant : autorise **uniquement** la préparation de cet arbitrage.
CKC architecture pilot = candidate guidance — **no execution authority**.

---

## 4. Horodatage

| Fuseau | Valeur |
|--------|--------|
| CEST | 2026-08-07 12:18:31 CEST (+0200) |
| UTC | 2026-08-07 10:18:31 UTC |

---

## 5. Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| HEAD / origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| Status | `?? .tmp-sfia-review/` · `?? 138` · `?? 139` (avant création 140) |
| Staged / upstream | vide / aucun |
| 138 SHA-256 | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` (745 lines) |
| 139 SHA-256 | `0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f` (413 lines) |
| Handoff entrant | tip `e82a32a6505184aed707876ebf59c9452b328300` · blob `2bb0a4955029a9b5bbb3130737216b85c0bc1e5a` · T2 Decisions Applied |

---

## 6. Sources

Méthode : cycle template, routing, OM, guardrails, checklist, CKC pilot 03 (candidate), publisher.
Projet : 103, 123, 125, 135–139.
Runtime RO : `oa/finops/**`, migration T1 usage-only (no money columns), `package.json` (`pg ~8.22`, `node-pg-migrate`).
Aucun tarif OpenAI ponctuel utilisé comme hypothèse.

---

## 7. Contraintes déjà SELECTED (intangibles)

1. **M2** — PostgreSQL `numeric` + currency ; no authoritative JS float.
2. Ledger T1 remains authoritative ; aggregates A1 rebuildable.
3. Estimation from versioned server-side catalog ; estimated never blocks.
4. Reconciliation explicit project/period ; on-demand + bounded batch.
5. No cron / always-on polling in T2.
6. No Delivery authorized by this pack.

---

## 8. Définitions precision / scale

| Terme | Définition PostgreSQL |
|-------|------------------------|
| **precision `p`** | Nombre total de chiffres significatifs |
| **scale `s`** | Nombre de chiffres après le séparateur décimal |
| **Chiffres entiers** | `p − s` |
| **Résolution minimale non nulle** | `10^(−s)` (dans l'unité monétaire de la currency) |
| **Valeur max (approx.)** | `(10^(p−s) − 10^(−s))` pour valeurs non négatives bornées par le type |

Exemple : `numeric(20,8)` → 12 chiffres entiers · résolution `10^-8`.

---

## 9. Exigences de résolution

### 9.1 Money amount (coût par run, correction, agrégat)

Objectif : préserver les micro-coûts et corrections sans float.

| Résolution candidate | Signification (1 currency unit) | Adéquation montant |
|----------------------|----------------------------------|--------------------|
| `10^-6` | micro-unité | Souvent suffisante pour montants agrégés USD/EUR |
| `10^-8` | 100× plus fine | Marge pour corrections / multiplications tarif×usage |
| `10^-12` | extrême | Rarement utile pour **montant** final ; plutôt taux bruts |

**Baseline qualitative (sans inventer de tarif) :**
Les coûts LLM unitaires sont souvent **très petits** avant agrégation ; les montants finaux restent dans une plage monétaire classique. Donc :
- sous-précision (`s < 6`) risque de perdre des micro-coûts / corrections ;
- sur-précision montant (`s ≥ 12`) ajoute dette sans besoin métier démontré pour le **montant**.

### 9.2 Price / rate (catalogue)

Les **taux** (prix par unité de facturation) peuvent nécessiter une finesse **supérieure** au montant final, **sauf** si le catalogue normalise le taux dans un quantum de facturation explicite (voir §11 R3).

---

## 10. Exigences de plage

Seuils provisoires documentés 15 / 20 / 25 / 30 USD = **baseline actuelle**, pas plafond système.

Dimensionnement raisonnable **sans charge fictive** :
- supporter confortablement des agrégats mensuels projet **plusieurs ordres au-dessus** des seuils (ex. marge jusqu'à ~`10^9`–`10^12` unités monétaires en partie entière) ;
- ne pas dimensionner pour une échelle planétaire fictive.

| Chiffres entiers (`p−s`) | Ordre de grandeur max ≈ | Lecture |
|--------------------------|-------------------------|---------|
| 10 | ~10^10 | Large vs seuils 30 USD ; peut être juste pour multi-projet/devise future |
| 12 | ~10^12 | Marge confortable sans over-engineering |
| 14+ | ~10^14+ | Rarement nécessaire maintenant |

---

## 11. Money amount vs price rate

| Option | Description | Simplicité | Exactitude | Dette |
|--------|-------------|------------|------------|-------|
| **R1** Same `numeric(p,s)` everywhere | Amounts + rates share one type | Haute | OK si rates normalisés | Faible |
| **R2** Amount one `p/s` ; rate finer scale | e.g. amount (20,8) · rate (24,12) | Moyenne | Haute pour raw rates | Deux conventions |
| **R3** Rate = Money per **explicit billing quantum** | Catalog stores unit + quantum + Money amount (same p/s) | Haute | Haute sans scale extrême | Faible si quantum obligatoire |

**Challenge :** éviter plusieurs types si un seul suffit.

**Analyse :**
R3 aligne le catalogue SELECTED avec M2 sans inventer d'unité provider : le catalogue **doit** porter l'unité/quantum explicitement (déjà compatible avec “versioned catalog”). Les raw per-token ultra-fins deviennent un choix de **modélisation catalogue**, pas une obligation de `s=12` sur les montants.

**Candidate stance (NOT SELECTED) :** préférer **R3 + single Money p/s** ; n'introduire un `D-T2-PRICE-RATE-PS-01` distinct que si Morris exige des rates bruts non normalisés.

---

## 12. Options p/s (Money amount / aggregates)

Working options (not imposed by history) :

### P1 — `numeric(18,6)`

| Attribut | Valeur |
|----------|--------|
| precision / scale | 18 / 6 |
| integer digits | 12 |
| max ≈ | 10^12 − 10^-6 |
| min non-zero | 10^-6 |
| run costs | Bon si montants ≥ micro-unité |
| monthly aggregates | Large marge vs seuils 30 USD |
| corrections | OK si deltas ≥ 10^-6 |
| price catalog (raw) | Peut être juste pour taux très fins |
| price catalog (R3) | OK |
| round risk | Plus élevé si multiplication tarif×tokens produit < 10^-6 |
| storage/perf | Léger |
| réversibilité | Monter s plus tard = migration non triviale |
| tests | Bornes min/max · scale contract |

### P2 — `numeric(20,8)`

| Attribut | Valeur |
|----------|--------|
| precision / scale | 20 / 8 |
| integer digits | 12 |
| max ≈ | 10^12 − 10^-8 |
| min non-zero | 10^-8 |
| run costs | Meilleure marge micro-coûts |
| aggregates | Même plage entière que P1 |
| corrections | Meilleure tête pour petits deltas |
| price catalog (R3) | OK |
| price catalog (raw) | Meilleur que P1, parfois encore juste |
| round risk | Plus bas que P1 pour multiplications |
| storage | Légèrement plus large ; négligeable vs exactitude |
| réversibilité | Toujours migration si change ; meilleur point de départ |
| tests | Idem + property tests multiplication→amount |

### P3 — `numeric(24,12)`

| Attribut | Valeur |
|----------|--------|
| precision / scale | 24 / 12 |
| integer digits | 12 |
| max ≈ | 10^12 − 10^-12 |
| min non-zero | 10^-12 |
| run / aggregates | Surdimensionné pour **montant** |
| price raw rates | Utile surtout si rates non normalisés |
| round risk | Très bas |
| dette | Convention lourde ; confusion amount vs rate |
| over-engineering | Élevé pour montant unique partagé |

### P4 (rejetée comme option Money principale) — `numeric(16,4)`

4 décimales = centi-/10^-4 : **sous-précision** probable pour micro-coûts LLM. Conservée uniquement comme contre-exemple (non recommandée).

---

## 13. Comparatif quantitatif

| Critère | P1 (18,6) | P2 (20,8) | P3 (24,12) |
|---------|-----------|-----------|------------|
| Exactitude déterministe | Bonne | Meilleure marge | Excessive pour amount |
| Simplicité | Haute | Haute | Basse |
| Float leakage defense | OK si string boundary | OK | OK |
| Rebuild A1 exact | Oui si même type | Oui | Oui |
| Recon estimated→observed→billed | OK | Meilleure pour petits deltas | OK |
| Plage (12 int digits) | Identique | Identique | Identique |
| Réversibilité / migration future | Medium | Medium | Plus de surface |
| Over-engineering | Bas | Bas–moyen | Haut |
| Sous-précision risk | Moyen | Bas | Très bas |
| Surdimensionnement | Bas | Bas | Haut pour amount |

**Calculs simples (sans tarif inventé) :**
- Seuils 30 USD ≪ 10^12 → **plage entière non discriminante** entre P1/P2/P3.
- Discriminant = **scale** (résolution + multiplication tarif×usage + corrections).
- Différence P1→P2 : +2 décimales, même plage entière → coût faible, marge micro significative.
- Différence P2→P3 : +4 décimales → bénéfice surtout pour **rates bruts**, pas pour montants agrégés.

---

## 14. Politique d'arrondi à borner

| Zone | Stance préparatoire |
|------|---------------------|
| Stockage Money / aggregate `numeric` | Valeurs déjà quantisées à scale `s` |
| Multiplication rate × usage → amount | **Point d'arrondi candidat** — mode exact à fixer |
| SUM d'aggregats déjà quantisés | Pas d'arrondi supplémentaire si même scale |
| JS `Number` | **Interdit** comme source autoritative (M2) |
| Affichage UI | Hors T2 ; peut arrondir pour display seulement |

**Gate distinct possible (seulement si Morris veut le figer maintenant) :**
`D-T2-ROUNDING-01` — e.g. half-even / floor / ceil at money boundary after rate×usage.
**Ce Decision Pack ne sélectionne pas le mode.**
Si non décidé avant Delivery : Delivery T2 doit soit recevoir un GO rounding, soit documenter un défaut **explicitement approuvé**.

---

## 15. PostgreSQL / node-postgres implications

| Sujet | Observation repo / PG |
|-------|------------------------|
| Type | `numeric(p,s)` exact ; pas float4/8 |
| SUM / agrégation | Préserve numeric ; idéal pour A1 rebuild |
| Index | Possible sur colonnes numeric ; pas d'obligation ici |
| `pg` ~8.22 | Par défaut, **numeric souvent renvoyé comme string** — favorable M2 |
| Parsing JS | Doit rester string / decimal boundary — **pas** `parseFloat` autoritatif |
| Decimal library | **Non sélectionnée** ; devient gate seulement si string branded insuffisant pour ops complexes |

Aucune modification package dans ce cycle.

---

## 16. Agrégats A1

- Colonnes montant agrégat : **même** `numeric(p,s)` que Money amount.
- Rebuild from ledger : recalcul déterministe à la même scale.
- Interdiction : agrégat plus “riche” en précision que les événements source sans règle explicite.
- Corrections / late events : recompute ou apply delta dans la même scale.

---

## 17. Reconciliation

- estimated / observed / billed amounts : même type Money.
- Deltas de correction : doivent tenir dans scale choisie (argument pour P2 vs P1).
- Idempotence : comparer numeric exact / string canonique — pas float.
- Échec recon ≠ invalidation run utilisateur (déjà SELECTED).

---

## 18. Tests candidats (future Delivery)

- Reject authoritative float path
- Boundary: min non-zero, max near overflow
- Property: sum of parts == aggregate after rebuild
- Multiplication rate×usage respects chosen rounding gate
- Catalog quantum (R3): amount = f(rate_money, usage, quantum) exact
- node-pg round-trip string numeric unchanged

---

## 19. Risques / dette / réversibilité

| Risk | P1 | P2 | P3 | Mitigation |
|------|----|----|----|------------|
| Sous-précision micro-coûts | Med | Low | Low | Prefer ≥8 for amount if rates not normalized |
| Surdimensionnement | Low | Low | High | Avoid P3 for shared amount type |
| Deux scales amount/rate non documentées | — | — | — | Prefer R3 |
| Migration scale↑ later | Painful | Painful | Painful | Choose adequate now |
| Float leakage via JS | All | All | All | String boundary + lint/tests |

**Réversibilité :** changer `s` après données réelles = rewrite / rescaled migration — **coûteux**. D'où arbitrage Morris **avant DDL**.

---

## 20. Recommandation candidate

```
RECOMMENDED CANDIDATE — NOT SELECTED:

D-T2-NUMERIC-PS-01 = numeric(20,8)
  — Money amounts (per-run / correction / aggregate A1)
  — currency column explicit (already M2)

D-T2-PRICE-RATE-REPRESENTATION-01 = R3
  — versioned catalog stores Money amount using D-T2-NUMERIC-PS-01
    per explicitly declared billing quantum + unit
  — NO separate finer numeric required by default

D-T2-PRICE-RATE-PS-01 = NOT REQUIRED under R3
  — only open if Morris rejects R3 and demands raw ultra-fine rates
  — then candidate fallback: numeric(24,12) for rate columns only
```

**Justification :**
1. Exactitude : scale 8 réduit le risque P1 sur multiplications/corrections.
2. Simplicité : un seul Money p/s + R3 évite twin-types.
3. Plage : 12 integer digits ≫ seuils provisoires.
4. A1/recon : same type → rebuild/compare exact.
5. Anti-over-engineering : P3 rejeté comme type montant unique.
6. M2 intact : no JS float ; pg string boundary.

---

## 21. Gate Morris proposé

```
GO DECISIONS FINOPS TECHNICAL LOT T2 — NUMERIC PRECISION/SCALE —

D-T2-NUMERIC-PS-01 =
numeric(20,8)
— OR ALTERNATIVE VALUE EXPLICITLY CHOSEN BY MORRIS —

D-T2-PRICE-RATE-REPRESENTATION-01 =
R3 — CATALOG MONEY AMOUNT PER EXPLICIT BILLING QUANTUM
— OR R1 SAME PS EVERYWHERE WITHOUT QUANTUM CONTRACT
— OR R2 SEPARATE FINER RATE PS —

IF R2 SELECTED:
D-T2-PRICE-RATE-PS-01 = numeric(24,12)
— OR OTHER EXPLICIT VALUE —

OPTIONAL IF NEEDED NOW:
D-T2-ROUNDING-01 = <half-even|floor|ceil|other> AT RATE×USAGE MONEY BOUNDARY

T2 DELIVERY =
NOT AUTHORIZED BY THIS GO UNLESS EXPLICITLY ADDED
```

**Ne pas consommer ce gate dans le présent cycle.**

---

## 22. Non-décisions

- Effective SELECTED p/s
- Decimal npm library
- FX
- Provider tariff values / endpoints
- Rounding mode (unless Morris adds it)
- T2 / T6-foundation Delivery
- Neon / provider-real
- T5 / T3 / T4 / T7 / LOT-D*

---

## 23. Impact sur T2 Delivery

Après GO p/s (et éventuellement rounding / rate representation) :
- DDL Money/aggregate/catalog peut figer `numeric(p,s)` ;
- tests de bornes et rebuild A1 ;
- boundary TypeScript string/decimal sans float autoritatif ;
- toujours GO Delivery T2 distinct requis.

---

## 24. Réserves

| Item | Status |
|------|--------|
| Exact p/s | **OPEN — awaiting Morris GO** |
| Rounding mode | OPEN unless gated |
| Rate representation R1/R2/R3 | Candidate R3 — not SELECTED |
| FIND-03 | CLOSED decisionally · impl NOT PERFORMED |
| R-TECH-TTL / HARD / calibration USD | unchanged |
| Neon / provider-real | NOT DONE |

---

## 25. Verdict

```
FINOPS T2 NUMERIC PRECISION/SCALE DECISION PACK COMPLETE —
M2 REMAINS SELECTED —
NUMERIC OPTIONS QUANTIFIED —
MONEY AMOUNT / PRICE RATE PRECISION REQUIREMENTS QUALIFIED —
CANDIDATE RECOMMENDATION PRODUCED —
NO PRECISION/SCALE DECISION CONSUMED —
NO T2 DELIVERY —
NO T6-FOUNDATION DELIVERY —
DOCUMENTS 138/139 PRESERVED —
DOCUMENT 140 CREATED —
NO CODE / SQL / MIGRATION / PACKAGE / CI MODIFICATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
MORRIS NUMERIC PRECISION/SCALE DECISION REQUIRED
```
