# 24 — Sources doctrine / projections (R1 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D3 / R1 — clôturée** |

## 1. Principe validé

```
Pourquoi  → Markdown (canonique humain)
Quoi exécuter / contrôler → JSON (+ JSON Schema)
État courant → SQL
```

Markdown et JSON **ne portent pas manuellement la même règle**.

Pas de duplication indépendante Markdown / JSON / TypeScript / SQL.

## 2. Frontières

| Couche | Canonique | Projection |
|--------|-----------|------------|
| Vision, principes, rationale, gouvernance narrative | Markdown Git | Studio help, slides |
| CycleDefinition, GateDefinition, Policy, State, Transition… | JSON Git | Docs op générées, UI |
| Validation structure | JSON Schema | CI future |
| Instances runtime | SQL | Dashboards |
| Types code | Générés **ou** validés contre Schema — jamais SoT inverse | — |

## 3. Matrice objets (extrait)

| Objet | Source canonique | Projection | Validation | Stockage runtime | Propriétaire | Audit |
|-------|------------------|------------|------------|------------------|--------------|-------|
| Principe P1–P12 | MD | UI aide | review humain | — | méthode | version Git |
| CycleDefinition | JSON | MD généré | Schema | digest en SQL | méthode+produit | digest |
| GateDefinition | JSON | boutons UI | Schema | GateInstance | produit | GATE_* |
| HumanDecision | — | pack/slides | immutabilité | SQL append | décideur | decisionId |
| ExecutionContract | JSON schema + instance | prompt Cursor | hash | SQL | moteur | contractHash |
| TypeScript enums | — | code | conformité Schema | — | eng | CI |

## 4. Anti-divergence

1. Digests des defs JSON dans ContextSnapshot.  
2. CONTEXT_STALE si drift.  
3. CI candidate (V3-MODELED+) : schema validate + no orphan TS enums.  
4. Docs opérationnelles **générées** depuis JSON, pas maintenues en parallèle.

## 5. Ownership / versionnement

- MD doctrine : cycles méthode gated (v2.6 inchangé aujourd’hui).  
- JSON defs v3 : sandbox framing puis `method/` seulement après GO ADOPTION.  
- `schemaVersion` + path stable + ids stables.

## 6. Dette → V3-MODELED

Schémas JSON réels, générateurs doc, CI conformité — **non créés** dans ce cycle.
