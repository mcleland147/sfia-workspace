# 04 — Modèle domaine projet et cycle (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** — listes non figées |

## 1. Objets centraux

Pour chaque objet : finalité, propriétaire logique, id, cycle de vie, source de vérité, relations, mutation, audit, décision humaine.

### Workspace
- **Finalité :** conteneur multi-projets d’une organisation / utilisateur.  
- **Propriétaire :** organisation / admin.  
- **Id :** `ws-*`.  
- **SoT :** Studio + Git org config.  
- **Mutation :** admin.  
- **Décision humaine :** création workspace.

### Project
- **Finalité :** unité de pilotage (ex. Campus360, SFIA Studio).  
- **Propriétaire :** responsable de projet.  
- **Id :** `proj-*` + chemin `projects/<key>/`.  
- **SoT :** Git (docs) + ProjectState (runtime).  
- **Relations :** Cycles, Baseline, Trajectory, Decisions.  
- **Décision humaine :** création, clôture, archivage.

### ProjectState
États candidats : `DRAFT | FRAMING | ACTIVE | PAUSED | BLOCKED | DELIVERED | RUN | CLOSED | ARCHIVED`.  
Mutations via Transition Engine + gates selon criticité.

### ProjectBaseline
Référence méthode applicable (`SFIA v2.6` aujourd’hui ; `v3.0` **candidate** seulement).  
Ne change **pas** sans GO d’adoption.

### ProjectTrajectory
Intention produit / jalons / lots (candidats vs validés).  
Options ≠ décisions.

### Cycle / CycleInstance / CycleState
- **Cycle :** type méthodologique (cadrage, delivery, QA…).  
- **CycleInstance :** occurrence runtime liée à un Project.  
- **États candidats :** `PROPOSED | QUALIFYING | READY | ACTIVE | DECISION_REQUIRED | EXECUTION_READY | EXECUTING | VALIDATING | BLOCKED | COMPLETED | CLOSED | CAPITALIZED`.

### GuidedSession
Conversation rattachée (projet/cycle/décision/action/rapport).  
Remplace la notion « session OPS1 orpheline » à terme.

### SourceContext
Ensemble de sources chargées (canoniques + projet) avec digests.  
Hérite du Canonical Context Engine (74).

### Hypothesis / Observation / Option / Recommendation
Artefacts de raisonnement. **Jamais** auto-promus en HumanDecision.

### HumanDecision / Gate / DecisionRequest
Décision auditable. Gate = point de contrôle UI/policy. DecisionRequest = demande structurée.

### ActionProposal / ActionCandidate / ExecutionContract / ExecutionAttempt
Chaîne déjà partiellement prouvée OPS1/CT : proposal → compile → candidate → gate → contract → attempt.

### Evidence / ValidationResult / Reserve
Preuves d’exécution, verdict de validation, réserves classifiées (héritage guardrails).

### TransitionProposal / TransitionDecision
Proposition d’enchaînement de cycle / d’état ; décision humaine pour transitions structurantes.

### ReviewPack / ReviewHandoff / CapitalizationRecord
Héritage v2.6 : pack de revue, publication handoff, capitalisation.

## 2. Relations clés

```
Workspace 1—* Project
Project 1—* CycleInstance
CycleInstance 1—* GuidedSession
GuidedSession *—* SourceContext
CycleInstance *—* HumanDecision
CycleInstance *—* ActionCandidate
ActionCandidate 1—* ExecutionContract
ExecutionContract 1—* ExecutionAttempt
ExecutionAttempt 1—* Evidence
CycleInstance *—* TransitionProposal
```

## 3. Règles de mutation (candidats)

1. Pas de mutation d’état projet/cycle sans événement audité.  
2. Options / Recommendations ne mutent pas ProjectBaseline.  
3. ActionCandidate n’implique aucune exécution.  
4. ExecutionAttempt exige contractHash + gate lié.  
5. CONTEXT_STALE bloque compilation / exécution jusqu’à requalification.  
6. Chemins protégés (`method/`, `prompts/`, …) hors écriture sauf GO méthode dédié.

## 4. Identifiants et audit

Corrélation cible :

`workspaceId → projectId → cycleInstanceId → sessionId → contextId → proposalId → actionId → contractHash → attemptId → reportId / evidenceId`

## 5. Écart vs OPS1 actuel

| OPS1 aujourd’hui | Cible v3.0 |
|------------------|------------|
| CycleSession loosely bound | Project + CycleInstance first-class |
| Fixture/live mode session | GuidedSession contextualisée projet |
| ActionCandidate I3 | ActionCandidate issu du moteur SFIA |
| Pas de ProjectState | ProjectState Engine |

## 6. Décisions humaines requises

- Valider la liste d’états projet/cycle (ou la réduire).  
- Valider le rattachement obligatoire conversation → objet.  
- Décider du modèle d’import de projets finalisés.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Persistance (D5 / R3)

État courant en tables transactionnelles ; HumanDecision / Evidence / contrats exécutés / ValidationResult en journal ou enregistrements immuables (26).
