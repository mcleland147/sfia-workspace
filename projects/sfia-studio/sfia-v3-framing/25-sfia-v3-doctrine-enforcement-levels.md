# 25 — Niveaux d’enforcement doctrinal E0–E4 (R2 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D4 / R2 — clôturée** |

## 1. Niveaux

| Niveau | Définition | Studio | GPT | Moteur | Dérogation |
|--------|------------|--------|-----|--------|------------|
| **E0 Information** | Informer sans freiner | hint | peut mentionner | log soft | N/A |
| **E1 Recommandation** | Suggérer le chemin conforme | badge reco | recommande | n’exécute pas l’écart | libre d’ignorer (tracé optionnel) |
| **E2 Avertissement + réserve** | Continuer possible avec réserve | warning + Reserve | explique risque | autorise si Reserve créée | rôle responsable/décideur |
| **E3 Dérogation humaine obligatoire** | Effet bloqué sans DecisionRequest GO | modal gate | DecisionRequest | deny jusqu’à GO | décideur / approbateur habilité ; durée bornée |
| **E4 Blocage absolu** | Non dérogeable | hard block | explique + alternatives | deny définitif sur l’effet | **aucune** |

Chaque règle précise : niveau · motif · effet · rôle habilité · dérogation · durée · preuve · audit · impact cycle.

## 2. Processus

```
RuleMatch
→ EnforcementEvaluation (E0–E4)
→ UserExplanation
→ CorrectionOption
→ Reserve et/ou DecisionRequest
→ AuditEvent
→ Transition ou Block
```

## 3. Portée des règles

| Portée | Exemples |
|--------|----------|
| Globale | fail-closed, no free-chat mode v3 |
| Cycle | profil Critical, review obligatoire |
| Projet | mode méthodo, chemins allowlist projet |
| Sécurité | secrets, chemins protégés |
| Exécution | allowlist, contractHash, stale |
| Transition | préconditions d’état |

## 4. Exemples

- Proposition commit hors gate → **E3**.  
- Modifier `method/` sans GO méthode → **E4**.  
- Profil sous-estimé vs risque → **E2** + réserve.  
- Style de formulation GPT → **E0/E1**.

## 5. Dette → V3-MODELED

Catalogues PolicyDefinition JSON, wiring UI E0–E4 — conception ultérieure.
