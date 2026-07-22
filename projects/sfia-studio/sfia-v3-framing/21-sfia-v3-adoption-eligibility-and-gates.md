# 21 — Éligibilité et gates d’adoption SFIA v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Rappel | Documents validés ≠ adoption |

## 1. Statuts d’adoption candidats

| Statut | Signification | Conditions candidates |
|--------|---------------|----------------------|
| **V3-DOCUMENTED** | Cadrage écrit | Pack framing 01–22 cohérent |
| **V3-MODELED** | Defs structurées conçues | Stratégie JSON/SQL validée (pas forcément fichiers runtime) |
| **V3-IMPLEMENTED** | Capacités runtime | Slice produit implémentée locale |
| **V3-VALIDATED** | Preuves live | Exécution+preuves+validation+audit |
| **V3-ELIGIBLE** | Critères produit OK | Checklist §2 + sécu + non-régression |
| **V3-ADOPTED** | Baseline méthode | **GO ADOPTION** + merge doctrine `method/` |

Aujourd’hui : cadrage **clôturé** au statut **V3-DOCUMENTED** — **pas** ADOPTED.

## 2. Gates candidats (chaîne)

1. Doctrine candidate validée (humain)  
2. Définitions structurées validées (modèle)  
3. Parcours utilisateurs validés  
4. Modèle SQL validé (conception)  
5. Sécurité validée  
6. Vertical slice fonctionnelle  
7. Cursor sous contrat  
8. Preuves  
9. Validation  
10. Transition  
11. Audit  
12. Non-régression  
13. Migration  
14. Documentation RUN  
15. **GO ADOPTION** (baseline)

## 3. Critères d’éligibilité runtime (rappel 15)

Projet + cycle + contexte + conversation rattachée + décision tracée + action structurée + exécution sous contrat + preuves + validation + transition + audit.

## 4. Anti-claims

- V3-DOCUMENTED ≠ production.  
- Control Tower ≠ V3-ADOPTED.  
- Handoff framing ≠ baseline.

## 5. Décisions humaines requises

- Valider la chaîne de statuts.  
- Nommer le GO entre VALIDATED et ELIGIBLE.  
- Séparer clairement validation cadrage vs adoption.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
