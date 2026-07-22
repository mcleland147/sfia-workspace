# 29 — Trajectoire Option D — co-design borné (validée cadrage)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D8 — Option D validée** |
| Rappel | Validée comme **trajectoire de conception** — **pas** autorisation d’implémentation |

## 1. Principes

Chaque incrément valide **ensemble** :

1. un parcours utilisateur  
2. une règle doctrinale  
3. une définition structurée  
4. un objet/état SQL  
5. une interaction GPT  
6. une règle déterministe  
7. une projection Studio  
8. une preuve  
9. une décision humaine éventuelle  

## 2. Unité : BoundedCoDesignIncrement

Contenu minimal :

- UserJourneySlice  
- DoctrineRuleSet  
- RuntimeDefinitions  
- StateModel  
- GPTInteractionContract  
- DeterministicPolicies  
- StudioProjection  
- EvidencePlan  
- HumanGates  
- ReviewBundlePlan  

Limites : un parcours principal · objets réduits · une transition principale · preuves bornées.

## 3. Slices candidates (non implémentées)

### Slice D1 — Project Framing
Créer projet → cadrage guidé → HumanDecision → ouverture cycle suivant.  
Objets : Project, CycleInstance, GuidedSession, HumanDecision, GateInstance, AuditEvent.  
Maturité cible incrément : vers MODELED/IMPLEMENTED local.  
Anti-claim : pas d’exécution Cursor obligatoire.

### Slice D2 — Controlled Execution
ActionProposal → ActionCandidate → ExecutionContract → Cursor → Evidence → ReviewBundle → ValidationResult.  
Réutilise acquis OPS1/CT.  
Anti-claim : pas V3-ADOPTED.

### Slice D3 — Transition and Capitalization
Validation → TransitionProposal → HumanDecision → nouveau cycle → CapitalizationRecord.  
Anti-claim : pas migration historique (R5).

## 4. Gouvernance / gates

- Pas d’implémentation sans GO dédié post validation documentaire.  
- Branches delivery locales possibles plus tard — **fermées** maintenant.  
- Stop si incrément élargit silencieusement le périmètre ou touche `method/` sans GO ADOPTION.

## 5. Lien maturité

Option D alimente DOCUMENTED→MODELED→IMPLEMENTED… sans sauter ADOPTED.
