# 09 — Architecture fonctionnelle candidate SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |

## 0. Complément Studio-native

Cette architecture **n’est revendiquable en v3** que si les capacités minimales du mode Studio-native (doc 15) sont présentes. Sinon : modes v2.6 / transitionnel / fallback — sans claim v3.

Ajouts moteurs / services d’information :

- **Definition Registry** (charge JSON/Schema Git)  
- **Artifact Service** (import/export Excel/CSV)  
- **Restitution Generator** (slides/PDF/MD)  
- **Mode Controller** (v2.6 / transition / v3 / fallback)

## 1. Vue d’ensemble

```
Humain (utilisateur / responsable / décideur / approbateur)
  → SFIA Studio (cockpit + façade + Mode Controller)
    → Project State Engine
    → Cycle Router (+ CycleDefinitions Git)
    → Canonical Context Engine (+ Definition Registry)
    → Guided Reasoning Engine / GPT
    → Decision Engine  OR  Action Compiler
    → Gate humain
    → Execution Orchestrator (ExecutionContract pivot)
    → Cursor Prompt Projection → Cursor
    → Git / GitHub
    → Validation Engine
    → Transition Engine
    → Artifact / Restitution services
    → Studio (feedback)
  ↔ Audit Trail · Source Resolver · Policy Engine
  ↔ SQL operational store
```

## 2. Moteurs — responsabilités

| Moteur | Responsabilité | Entrées | Sorties | Décision humaine |
|--------|----------------|---------|---------|------------------|
| Project State Engine | États projet, lifecycle | events, decisions | ProjectState | clôture / archive |
| Cycle Router | Type/profil/sources | intention, context | cycle plan | si ambigu |
| Canonical Context Engine | Charger doctrine/projet | allowlist paths | SfiaCanonicalContext | non |
| Guided Reasoning Engine | Dual-channel GPT | context, message | prose + control | non (sauf gate) |
| Decision Engine | DecisionRequest / gates | options, risks | HumanDecision records | **oui** |
| Action Compiler | Proposal → Candidate | proposal+context | CompilationResult | non |
| Execution Orchestrator | Contrat → Cursor | GO+contract | Attempt+Evidence | GO avant run |
| Validation Engine | Critères / preuves | evidence | ValidationResult | validation structurante |
| Transition Engine | Enchaînements | validation, state | TransitionProposal | transitions structurantes |
| Source Resolver | Résoudre fichiers | refs | SourceRef | non |
| Policy Engine | Allow/deny ops/paths | request | allow/deny | policy change = humaine |
| Audit Trail | Corrélation / immutabilité | all | events | non |

## 3. Flux nominaux

### 3.1 Clarification
Message → Context → GPT → `clarification_required` → UI questions → (boucle) — **aucun effet**.

### 3.2 Décision
Analyse/options → DecisionRequest → Gate UI → HumanDecision → état mis à jour → audit.

### 3.3 Action
ActionProposal → Compiler → ActionCandidate → Gate → Contract → Cursor → Evidence → reinjection → analyse.

### 3.4 Blocage
Policy deny / stale / missing authority → `blocked` + raisons + reprise guidée.

### 3.5 Correction
CHANGES_REQUESTED / refine candidate / nouveau proposal — sans élargissement silencieux.

### 3.6 Validation
Evidence → Validation Engine → PASS/FAIL/PASS_WITH_RESERVES → décideur si besoin.

### 3.7 Clôture / capitalisation
Cycle COMPLETED → Transition CAPITALIZED / Project CLOSED — gates selon criticité.

### 3.8 Reprise
Session/projet PAUSED → reload context digests → requalify si stale → continuer.

## 4. Limites de cette architecture

- Candidate : pas de choix technique figé (DB, bus, multi-tenant).  
- Ne remplace pas v2.6.  
- Ne prescrit pas MCP universel.  
- Réutilise la séparation cockpit / policies / exécuteurs (AF-Option C reformulée).

## 5. Observabilité fonctionnelle

États visibles : projet, cycle, contexte, proposal, compilation, gate, contrat, exécution, validation, transition.  
Terminal UX candidat : `DECISION_REQUIRED` | `BLOCKED` | `EXECUTING` | `VALIDATING` | `READY_NEXT`.

## 6. Décisions humaines requises

- Valider ce schéma fonctionnel.  
- Valider la liste des moteurs (fusion possibles : Decision⊂Transition ?).  
- Trancher la frontière Studio UI vs services moteurs (monolithe logique vs packages).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
