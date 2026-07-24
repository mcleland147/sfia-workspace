# 09 — Contrats d’entrée modeled, UX et technique

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `09-modeled-ux-and-technical-input-contracts.md` |

## 1. Pour modeled (futur)

Objets à modéliser en priorité (non créés ici) :

DoctrinePackageManifest · CkcResolution · LivingProjectState · ProjectTrajectory · EpistemicItem · HumanDecision · Confirmation · ExecutionContract · AgentCapability · Evidence · ReviewBundle · Contradiction · DebtItem · ProvenanceRecord · AuditEvent · ClaimEvaluation

Entrées AF : domaines ownership · commandes/événements · invariants · FD-OA règles.

## 2. Pour UX (contraintes)

- Conversation dominante + panneau = vue LPS (CC-D01/D03).
- Pas de stepper principal.
- Tags épistémiques + gates (CC-D05).
- Confirmations N1–N3 (CC-D06).
- CKC opaque (CC-D12).
- Project ≠ Cycle (CC-D13).
- Erreurs métier + codes secondaires.
- Isolation visuelle legacy vs A.

Pas de Figma dans ce cycle.

## 3. Pour architecture technique (futur)

Doit respecter :

- frontières A–H ;
- fail-closed B ;
- G adaptateur seulement ;
- pas de method/ sur chemin A ;
- correlation IDs ;
- pas de choix framework ici.

## 4. Livraison progressive suggérée (non binding)

P0 : B (DoctrineResolver) + A intent + C LPS minimal + E décision/N2 create.
P1 : D trajectoire + F/G contrat/adaptateur + H evidence.
P2 : contradictions/maturity/debt riches · coupure method/ A.
