# 09 — Cartographie de réutilisation / remplacement

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `09-existing-assets-reuse-and-replacement-map.md` |
| **Décision** | ARB-V3-06 |

## Matrice (une qualification principale)

| Actif existant | Qualification | Usage futur Option A |
|----------------|---------------|----------------------|
| OPS1 ExecutionContract | **ADAPT** | Base contrat natif |
| OPS1 actionGate / gate_decisions | **ADAPT** | HumanDecision + Confirmation |
| OPS1 allowlists | **ADAPT** | AgentCapability / path policy |
| OPS1 journal / session | **ADAPT** | Conversation + audit |
| OPS1 SQLite execution_* | **ADAPT** | Persistance contrats/preuves (modèle évolue) |
| D1 intake conversation | **ADAPT** | Intent + clarification entry |
| D1 Project foundation | **REWORK** | Vers LPS sans MethodMode |
| sessionContext Map | **REWORK** | ResolvedContext versionné |
| `canonicalPaths.ts` | **REPLACE** | DoctrinePackage allowlist |
| `sourceLoader.ts` | **REPLACE** | Package source loader |
| `contextResolver.ts` | **REPLACE** | Knowledge resolver v3 |
| MethodMode + DB check | **REMOVE-FROM-RUNTIME** | — |
| MethodModeBadge / badges v2.6 | **REMOVE-FROM-RUNTIME** | — |
| `cursorPromptInstantiator` | **ADAPT** | Adaptateur MD post-contrat |
| cursorExecutionAdapter | **ADAPT** | Execution Adapter |
| harness POC | **HISTORICAL-ONLY** | Preuve / non produit |
| Docs D1/OPS1 root 41–85 | **HISTORICAL-ONLY** | Patterns extractibles |
| Design packs d1-* | **HISTORICAL-ONLY** / **ADAPT** select | Ne pas cibler coexistence |
| UX 87–89 | **KEEP** (contraintes) | Intégrer main cycle UX dédié |
| Modeled schemas project/cycle/decision/review/trajectory | **ADAPT** | Enrichir ; retirer enum v2.6 runtime |
| Modeled HumanDecision schema | **ADAPT** | Brancher runtime futur |
| DoctrinePackage/LPS/CKC schemas | **REPLACE** (créer en modeled) | Après GO modeled |
| Framing 30–37 | **KEEP** | Doctrine |
| Framing 11 coexistence/cockpit | **ADAPT** (supersede lecture) | CC-D01 |
| README Studio Option C | **REWORK** (hors ce cycle) | Alignement doc post-arbitrate |
| Tests MethodMode / method paths | **REPLACE** | Tests exclusivité futurs |

## Règle

Aucune réutilisation ne réintroduit une coexistence doctrinale opérationnelle.
