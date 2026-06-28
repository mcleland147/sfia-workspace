# Interv360 — Synthèse priorisation règles RG MVP

**Projet** : PRJ-INTERV360  
**Document source** : `rules-rg-prioritization.md`  
**Type** : Synthèse gouvernance  
**Branche** : `analysis/interv360-clarification-cycle`

---

## Statut

**Draft** — règles clarifiées au niveau macro, post-atelier simulé.

---

## Règles prioritaires

| Règle | Sujet |
|-------|-------|
| RG-C04 | Anti-doublon cross-canal |
| RG-C05 | Données minimales obligatoires |
| RG-I05 | Mapping des statuts |
| RG-I06 | Erreurs / anomalies d'intégration |
| RG-R02 | Signature client optionnelle |
| RG-R05 | Conditions de clôture |

*Toutes en priorité **Haute** pour le MVP.*

---

## Décisions clés

- **Anti-doublon** signalé mais **non fusionné automatiquement** — décision manuelle manager SAV
- **Données minimales** pour qualification — statut « À qualifier » tant que planification impossible
- **Statuts unifiés** — 8 candidats ; mapping détaillé dans `status-mapping.md`
- **Erreurs** avec **message métier + gravité** (Information, Bloquant métier, Bloquant sync) — détail technique secondaire
- **Signature optionnelle** — motif obligatoire si absente
- **Clôture** avec **CR obligatoire**, trace conservée, sync CRM (statut clôturé + indicateur signature)

---

## Documents de sortie associés

| Document | Règles |
|----------|--------|
| `status-mapping.md` | RG-I05 |
| `closure-without-signature.md` | RG-R02, RG-R05 |
| Annexe erreurs / ADR | RG-I06 |

---

## Garde-fous

- Pas de **backlog**
- Pas de **user stories**
- Pas de **tests** (cas, scénarios, stratégie recette)
- Pas de **delivery** ouvert
- Pas de **publication Notion**
- Pas de **PR** à ce stade

---

*Synthèse priorisation règles RG MVP — Interv360 — SFIA.*
