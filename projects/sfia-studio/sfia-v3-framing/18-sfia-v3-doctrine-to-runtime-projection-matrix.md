# 18 — Matrice doctrine → runtime (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Règle | Une ligne = un élément doctrinal ; éviter triple maintenance MD/JSON/TS |

Légende colonnes : **Doc** doctrine MD · **Def** JSON/Schema · **SQL** · **GPT** · **UI** · **Gate** · **Policy** · **Event** · **Preuve** · **Restit** · **Test** · **Risque dup.**

## Matrice transverse (minimum)

| Élément | Doc | Def | SQL | GPT | UI Studio | Gate | Policy | Event | Preuve | Restitution | Testable | Risque dup. |
|---------|-----|-----|-----|-----|-----------|------|--------|-------|--------|-------------|----------|-------------|
| Principe | MD | ref id | — | preamble | aide | — | enforce flags | — | — | slide principes | review | Haut si recopié TS |
| Rôle | MD | RoleDefinition | assignment | mention | admin rôles | habilitation | RBAC | ROLE_* | — | RACI export | oui | Moyen |
| Cycle | routing MD | CycleDefinition | CycleInstance | propose | cycles | entrée | routing | CYCLE_* | livrables | revue cycle | oui | Moyen |
| Profil | MD | enum | on instance | qualify | badge | — | depth rules | — | — | — | oui | Bas |
| Bloc | MD | enum[] | active_blocks | cite | chips | — | — | — | — | — | oui | Bas |
| Gate | MD | GateDefinition | GateInstance | request | boutons | **humain** | closed/open | GATE_* | decision record | decision pack | oui | Haut si chat=GO |
| Entrée cycle | MD | preconditions | check | explain | checklist | si critique | fail-closed | — | — | — | oui | Bas |
| Sortie cycle | MD | exit criteria | ValidationResult | analyse | validation | parfois | — | — | evidence | rapport | oui | Bas |
| Livrable | MD | ArtifactDefinition | artifact meta | propose | liste | — | path policy | — | files | pack | oui | Moyen |
| Stop condition | MD | StopDefinition | — | respect | alertes | — | deny | STOP_* | — | — | oui | Haut si oublié |
| Automatisation | MD | AutomationClass | — | — | mode badge | selon classe | caps | — | — | — | oui | Moyen |
| Décision | MD | DecisionSchema | HumanDecision | options | decision panel | **oui** | immutability | DECISION_* | motif | slides | oui | Bas |
| Action | MD | ProposalSchema | ActionCandidate | proposal | action panel | avant exec | compiler | ACTION_* | exact content | — | oui | Moyen |
| Validation | MD | ValidationDefinition | ValidationResult | analyse | validation | si structurant | — | VALID_* | checks | rapport | oui | Bas |
| Transition | MD | TransitionDefinition | Transition | propose | next steps | structurant | state machine | TRANS_* | — | trajectoire | oui | Moyen |
| Réserve | MD | ReserveClass | Reserve | cite | risques | — | — | RESERVE_* | — | REX | oui | Bas |
| Review pack | template MD | PackProfile | report meta | — | export | — | completeness | — | full content | handoff MD | oui | Haut si résumé seul |
| Handoff | guardrails | publish rules | — | — | status | — | branch only | — | remote SHA | latest-chatgpt-review | oui | Bas |
| Capitalisation | MD | CapRecord schema | CapitalizationRecord | propose | capitalisation | — | — | CAPA_* | assets | REX | oui | Moyen |

## Mécanisme anti-duplication (candidat)

1. **SoT humaine** = Markdown (pourquoi).  
2. **SoT machine** = JSON + JSON Schema versionnés Git (quoi exécutable).  
3. **Runtime** = SQL instances + digests des defs.  
4. **Code** = chargeurs/validateurs uniquement — pas de re-codage des enums métier sans test de conformité Schema.  
5. CI candidate (futur) : `schema validate` + `doc anchors` + `no orphan enums in TS`.

## Source / responsable / auditabilité

- Responsable doctrine : cycles méthode gated.  
- Responsable defs : co-design avec Studio (Option D).  
- Audit : chaque effet cite `definitionId@digest` + `decisionId` si gate.

## Décisions humaines requises

- Valider cette matrice comme contrat de conception.  
- Trancher l’outil de conformité croisée (CI) pour plus tard.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
