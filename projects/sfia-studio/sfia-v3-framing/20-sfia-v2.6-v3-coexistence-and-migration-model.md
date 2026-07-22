# 20 — Coexistence SFIA v2.6 / v3.0 et migration (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Régimes

Voir aussi doc 15 (modes 1–5). Synthèse migration :

| Régime | Doctrine | Studio | Claim |
|--------|----------|--------|-------|
| v2.6 manuel | v2.6 | absent | v2.6 |
| v2.6 assisté | v2.6 | partiel OPS1/CT | v2.6 — **interdit v3** |
| Transitionnel | v2.6 + defs v3 candidates | capacités partielles | « v3 candidate / transition » |
| v3 Studio-native | defs v3 + MD rationale | complet | v3 si éligible (21) |
| Fallback | v2.6 | dégradé | jamais v3 |

## 2. Sélection de mode

Règles candidates :

1. Afficher le mode dans l’IHM (badge).  
2. Mode par **projet** (pas global silencieux).  
3. Upgrade mode 3→4 seulement si checklist éligibilité OK.  
4. Downgrade automatique si capacité critique absente.  
5. Opérateur peut forcer fallback avec motif tracé.

## 3. Migration projet

| Étape | Contenu |
|-------|---------|
| Inventaire | sessions OPS1, docs projet, preuves |
| Import | créer Project/Cycles ; lier artefacts |
| Mapping | décisions historiques → HumanDecision si possible |
| Validation | digests ; gaps → réserves |
| Cutover | bascule mode après GO projet |
| Rollback | retour mode 2/1 ; SQL conservé read-only |

## 4. Import historique / incompatibilités

- Sessions OPS1 sans Project → rattachement manuel.  
- Prompts collés sans contractHash → non rejouables en v3 claims.  
- Docs v2.6 restent lisibles ; non réécrits.

## 5. Abandon v2.6 vs maintien legacy

**Abandon (lointain, gated) :** tous projets éligibles v3 ; support manuel documenté ; GO ADOPTION + période dual.  
**Maintien legacy :** projets hors Studio ; audits ; formation.  
**Risque :** deux doctrines actives trop longtemps → dette (V3-R05).

## 6. Support / dette

- Formation modes.  
- Runbooks fallback.  
- Interdiction marketing « tout est v3 » tant que mode ≠ 4 éligible.

## 7. Décisions humaines requises

- Valider modes et claims.  
- Politique de durée du dual-run.  
- Priorité migration vs nouveaux projets v3.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
