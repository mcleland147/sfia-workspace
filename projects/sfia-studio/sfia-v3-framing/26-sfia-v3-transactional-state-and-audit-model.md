# 26 — État transactionnel SQL et audit (R3 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D5 / R3 — clôturée** |
| Note | Modèle **logique** uniquement — pas de migration / schéma physique |

## 1. Architecture hybride validée

- **Tables transactionnelles** = état courant.  
- **Journal append-only** = audit, transitions, corrections.  
- **Pas** d’event sourcing intégral.

## 2. Agrégats transactionnels (logiques)

Workspace, Project, CycleInstance, GuidedSession, ActionCandidate (courant), permissions/assignments, pointeurs « latest » vers contrats/evidence.

## 3. Immutables (append-only / sealed)

HumanDecision · ExecutionContract **exécuté** · Evidence · ValidationResult · verdicts HumanVerdict · ReviewBundle sealed.

**Correction :** nouvelle version, révocation, ou événement correctif — jamais mute silencieuse.

## 4. Journal

Événements corrélés : `projectId → cycleId → sessionId → contextId → decisionId → actionId → contractHash → attemptId → reviewBundleId`.

Chaque événement porte : `doctrineVersion`, `definitionDigests`, `actorRole`, `timestamp`.

## 5. Concurrence / soft delete / RGPD

- Optimistic locking sur Project / CycleInstance.  
- Soft delete objets opérationnels.  
- Rétention / anonymisation spécifiques données personnelles (politique RUN future).

## 6. Reconstruction

Reconstruction **partielle** depuis journal + snapshots ContextSnapshot — pas obligation de rebuild total event-sourced.

## 7. Dette → architecture technique / V3-MODELED

Schéma physique, indexes, partitioning — **non figés** ici.
