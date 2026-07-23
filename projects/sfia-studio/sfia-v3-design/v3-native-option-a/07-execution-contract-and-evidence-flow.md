# 07 — ExecutionContract et flux de preuves

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `07-execution-contract-and-evidence-flow.md` |
| **Fondations** | V3-F11 · F12 · F14 · ARB-V3-03 |

## 1. ExecutionContract = contrat natif Studio

**Pas** un prompt Markdown. Markdown Cursor = **adaptateur d’export** après contrat confirmé (ARB-V3-03).

### Contenu fonctionnel minimal

| Champ | Rôle |
|-------|------|
| contractId / correlationId | Identité |
| intentRef / decisionRef / lpsVersion | Liens |
| action / target / scope | Quoi |
| inputs / expectedOutputs | Contrats I/O |
| requiredCapabilities / agentId | Qui |
| authority / constraints | Autorisation |
| stopConditions | SC-* |
| reversibility / confirmationLevel | N1–N3 |
| evidenceExpected | Checklist |
| idempotencyKey | Reprise sûre |
| status | cycle de vie |
| provenance | digests doctrine + sources |

### Cycle de vie

`draft` → `proposed` → `confirmed` → `executing` → `completed` | `failed` | `cancelled` | `superseded`

Transitions :
- proposed→confirmed : Confirmation Manager + HumanDecision liée.
- confirmed→executing : Capability+Authority OK.
- executing→completed : Evidence complète minimale.
- failed : EVIDENCE of failure + LPS reserve/debt ; pas de rollback auto non prouvé.
- superseded : nouvel contrat après replan/décision.

## 2. Réutilisation OPS1 (ARB-V3-03)

| Pattern OPS1 | Traitement |
|--------------|------------|
| ExecutionContract structuré + statuses | **ADAPT** |
| worktree / postcheck / revalidation | **ADAPT** (archi plus tard) |
| allowlist deny-default | **ADAPT** → AgentCapability |
| actionGate GO/NO-GO | **ADAPT** → HumanDecision+Confirmation |
| cursorPromptInstantiator template path | **ADAPT** comme adaptateur **seulement** · retirer rôle SoT |
| lecture method/ dans contexte | **REMOVE-FROM-RUNTIME** |

## 3. Exécution (fonctionnel)

1. Resolve agent + capabilities.
2. Deny si `CAPABILITY_MISSING` / `AUTHORITY_DENIED`.
3. Prepare (idempotent).
4. Execute avec timeout.
5. Retry borné seulement si safe+idempotent.
6. Cancel/stop → status cancelled + evidence.
7. Escalate à Morris si irréversible partiel.

## 4. Evidence

| Attribut | Contenu |
|----------|---------|
| evidenceId | — |
| type | file/log/test/capture/report |
| refs | paths/digests |
| freshness | timestamp |
| completeness | complete|incomplete |
| links | contractId, decisionId, lpsVersion |

`EVIDENCE_INCOMPLETE` bloque claim completed/adopted.

## 5. ReviewBundle

Hybride (D2) : contenu cycle + export handoff résilience.
Rattaché Project/CycleInstance/Contract.
Synthèse seule ≠ bundle complet (V3-F14).

## 6. Résultat → LPS

completed/failed met à jour : actions · preuves · dette · next step · éventuellement Trajectory candidate replan.

## 7. Maturité

DOCUMENTED · non IMPLEMENTED v3-native.
