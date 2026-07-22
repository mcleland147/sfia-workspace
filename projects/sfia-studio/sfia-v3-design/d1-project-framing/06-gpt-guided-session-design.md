# 06 — GPT guided session design

## 1. Rôle exact

| GPT peut | GPT ne peut pas |
|----------|-----------------|
| Clarifier, reformuler, challenger | Modifier l’état SQL |
| Proposer trajectoire / synthèse | Approuver un gate |
| Identifier un manque | Enregistrer HumanDecision |
| Suggérer décision / transition (draft) | Autoriser transition / contourner policy |
| | Lever une réserve / lancer exécution D2 |

## 2. Dual channel

1. **Prose** : texte libre affiché (non exécutable)  
2. **Proposals structurées** : validées JSON Schema candidat → Policy Engine → éventuellement DecisionRequest

## 3. Contrats candidats (pas schémas figés hors modeled)

### GuidedTurn
`{ turnId, sessionId, role: user|assistant, prose, createdAt, contextSnapshotId }`

### GuidedProposal
`{ proposalId, kind: trajectory|decision|transition|reserve|question, payload, confidence? }`

### DecisionProposal / TransitionProposalDraft
Sous-types de GuidedProposal ; application = commandes humaines/moteur, pas auto-apply.

### ContextUsageReceipt
`{ snapshotId, headSha, doctrineVersion, definitionDigests, tokenEstimate, redactions[] }` — audit minimal + UI Context Status.

## 4. Construction du contexte

Priorité (budget tokens) :
1. System instructions D1 (rôle GPT borné, anti-claims)  
2. ContextUsageReceipt + digests  
3. Project + Cycle summaries  
4. Open reserves / DecisionRequests  
5. Trajectory excerpt  
6. Recent turns (fenêtre)  
7. Doctrine excerpts **via digests allowlisted** (pas de lecture libre filesystem GPT)

Stale detection : si snapshot stale → bloquer send (E4 D1-CONTEXT-STALE) avant appel GPT.

## 5. Validation sortie

- Parse JSON proposals  
- Schema validate  
- Reject unknown kinds  
- Policy EvaluatePolicy on each proposal  
- Hallucination guards : refuse claims of GO/APPROVED ; refuse file paths hors allowlist context  

## 6. Retries / erreurs

- Provider timeout → user-visible retry ; no state mutate  
- Malformed output → one repair prompt max puis BLOCKED + Reserve  
- Injection : strip tool/system markers ; no secrets in context  

## 7. Audit

Log : attempt ids, model, token counts, snapshotId, proposalIds — **not** full prose if PII flagged (redaction policy).

## 8. Réutilisation OPS1

Pattern `conversation/service.ts` + `openaiProvider` + toolLoop **sans** tools d’exécution D2 ; tools éventuels = lecture contexte déjà chargé uniquement (candidate, borné).
