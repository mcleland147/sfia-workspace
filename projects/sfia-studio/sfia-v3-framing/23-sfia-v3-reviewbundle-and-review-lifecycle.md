# 23 — ReviewBundle hybride et cycle de vie de revue (cadrage clôturé)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D2 — validée** |
| Baseline | SFIA v2.6 (review pack MD exhaustif **reste applicable** tant que v3 non adoptée) |
| Adoption v3 | Non |

## 1. Finalité

Remplacer, **en cible v3**, le review pack Markdown exhaustif comme canal nominal interne par un **ReviewBundle hybride** résolvable et vérifiable.

Le **review handoff Git** (`sfia/review-handoff`) devient : export, résilience, interopérabilité — **pas** le canal nominal interne entre agents Studio.

## 2. Types de revue

| Type | Quand |
|------|-------|
| ActionReview | Après ActionCandidate / exécution |
| CycleReview | Fin ou jalon de CycleInstance |
| TransitionReview | Avant/après TransitionDecision |
| ReleaseReview | Préparation release / PR readiness projet |
| CapitalizationReview | Capitalisation / REX |

## 3. Structure minimale

```
ReviewBundle
├── ReviewManifest          # id, type, projectId, cycleId, doctrineVersion, digests, status
├── ContextSnapshot         # headSha, definitionDigests, mode, actors
├── ChangeSet               # refs fichiers / blobs / ops (pas forcément contenu embarqué)
├── ExecutionEvidence       # attempts, paths, hashes, logs redactés
├── ValidationResults       # PASS/FAIL/reserves
├── DecisionRequests        # gates ouverts / tranchés
├── Reserves                # classifiées
└── HumanVerdict            # décision humaine + motif + timestamp + rôle
```

## 4. Règle de complétude cible (v3)

**MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED**

≠ obligation d’embarquer tout le contenu dans un seul Markdown.

Résolvable = path + digest/blob + accessibilité vérifiée + statut.  
Vérifié = contrôles de présence, hash, allowlist, redaction.

## 5. Cycle de vie

`DRAFT → SEALED → EXPORTED (optionnel) → ARCHIVED`

- SEALED : immuable (append-only corrections via nouvel événement).  
- Export handoff Git : optionnel / résilience / revue externe.  
- Restitution Studio : vue native du bundle.

## 6. Stockage / responsabilités

| Partie | Stockage | Owner |
|--------|----------|-------|
| Manifest + liens | SQL | Studio Review Service |
| Contenu fichiers | Git / worktree / blobs | Git truth |
| Evidence | SQL meta + fichiers | Execution/Evidence |
| Export MD handoff | branche `sfia/review-handoff` | Publisher L3 borné |

## 7. Fallback v2.6

Tant que **V3-ADOPTED** n’est pas atteint : cycles Cursor sous v2.6 continuent d’appliquer review pack **contenu exploitable embarqué** + handoff publish-in-cycle.

## 8. Dette transférée → V3-MODELED

Schémas ReviewManifest, API résolution ChangeSet, UI ReviewBundle — **non créés ici**.
