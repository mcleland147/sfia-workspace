# 27 — Maturité plateforme et éligibilité projet (R4 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D6 / R4 — clôturée** |

## 1. Chaîne validée

```
V3-DOCUMENTED → V3-MODELED → V3-IMPLEMENTED → V3-VALIDATED → V3-ELIGIBLE → V3-ADOPTED
```

**Aujourd’hui :** cadrage clôturé au statut **V3-DOCUMENTED** (validation documentaire humaine encore requise).

## 2. Trois axes distincts

| Axe | Question |
|-----|----------|
| **PlatformMaturity** | Où en est Studio/runtime v3 ? |
| **ProjectEligibility** | Ce projet peut-il tourner en mode v3 ? |
| **MethodMode** | Quelle méthode claim (v2.6 / transition / v3) ? |

Une plateforme peut être **V3-ELIGIBLE** tandis qu’un projet reste en **v2.6**.

## 3. Niveaux (synthèse)

| Niveau | Entrée | Preuves | Gate humain | Claims |
|--------|--------|---------|-------------|--------|
| DOCUMENTED | Pack framing cohérent | Docs 01–29 | Validation documentaire | candidat only |
| MODELED | Defs structurées conçues/validées | Schemas (futur) | GO OUVERTURE V3-MODELED | modeled candidate |
| IMPLEMENTED | Capacités runtime | code+tests | GO exécution | implemented local |
| VALIDATED | Live preuves | slice live | GO validation live | validated |
| ELIGIBLE | Checklist sécu/QA/RUN | audit | GO éligibilité | eligible platform |
| ADOPTED | Baseline method | merge method | **GO ADOPTION** | baseline v3 |

## 4. Matrice Platform × Project × Mode

| Platform | Project | Mode affiché | Claim v3 projet |
|----------|---------|--------------|-----------------|
| < ELIGIBLE | any | v2.6 / transition | Interdit |
| ELIGIBLE | non migré | v2.6 | Interdit |
| ELIGIBLE | éligible | v3 | Autorisé si mode 4 |
| ADOPTED | historique | v2.6 possible | Pas rétroactif (R5) |

## 5. Dette → QA/validation

Automatisation des gates de maturité — ultérieure.
