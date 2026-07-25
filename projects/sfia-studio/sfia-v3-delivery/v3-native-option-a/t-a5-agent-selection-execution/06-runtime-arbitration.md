# 06 — Runtime Arbitration Pack T-A5

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Runtime arbitration (Critical) |
| **Gate** | `GO ARBITRATE T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD cadrage runtime** | `8c7054731fd170753a7fc317ec24f9d0a53ad61c` |
| **Statut** | **RUNTIME ARBITRATION PACK PREPARED — MORRIS DECISIONS PENDING** |
| **Runtime / modeled** | **NONE modifié** |
| **Décisions Morris RTA5** | **TOUTES PENDING** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED` |

---

## 1. Sources

| Source | Usage |
|--------|-------|
| Handoff framing blob `4c25f369…` | RUNTIME FRAMING COMPLETED |
| `05-runtime-framing.md` | SoT recommandations initiales RTA5 |
| `01`–`04` T-A5 + D-T-A5-01…10 | cohérence décisions Morris |
| Attempt 0.2.0-oa / AgentDescriptor / Contract 0.2.0-oa | conformité |
| Runtime T-A3/T-A4 | patterns Confirmation, OCC, Option B |
| CKC | `pilots/03-architecture-technique.md` — candidate ; `executionAuthority=false` |

### CKC

Guidance cognitive seulement — **aucune** autorité pour sélectionner une option ou élargir le scope.

---

## 2. Rappel cadrage + évolution tracée

Recommandations cadrage (`05`) : RTA5-01…10 ≈ **A** partout (sauf nuances).

### Évolution tracée (challenge RTA5-09)

Le cadrage mentionnait parfois « update Contract » dans un ordre ambigu (avant `running`).
**Correction candidate d’arbitrage :** séquence canonique non ambiguë ci-dessous — **pas** une décision Morris.

**Séquence canonique recommandée (RTA5-09) :**

1. Préconditions Start (CheckAuth, TTL, Confirmation agent_selection, registry…)
2. **Persist** Attempt `accepted` — Contract reste **`confirmed`**
3. **Fake** `Adapter.launch` (idempotent `attemptId`)
4. Si LaunchFail / LaunchReject → Attempt `failed` (launch-fail) ; Contract → **`failed`** (mapping modeled) **ou** cancel selon cause — **jamais** `executing` / `completed`
5. Si LaunchAck conforme → Attempt `running` (+ `launchedAt`) **d’abord**
6. Puis Contract `executing` (+ `selectedAgentRef` si policy) ; si Contract update échoue → **compensate** Attempt (`failed`/`cancelled`) — Option B-like
7. Record / timeout / cancel ensuite selon lifecycle

**Invariant :** Contract `executing` **uniquement** après Attempt `running`.

---

## 3. Méthode

Pour chaque RTA5 : reformuler → options → dépendances → grille (simplicité, T-A3/T-A4, modeled, fail-closed, autorité, idempotence, atomicité, concurrence, compensation, testabilité, réversibilité, obs, dette, coût, risque effet externe) → reco + contre-argument + risque + rejet + condition delivery + gate.

**Aucune reco ≠ décision Morris.**

---

## 4. Analyse RTA5-01 — Confirmation sélection

**Question :** Réutiliser Confirmation T-A3 `scope=agent_selection` ou mécanisme spécifique ?

| | A reuse T-A3 | B type T-A5 | C ref documentaire seule |
|--|--------------|-------------|--------------------------|
| Binding agent+contract+version | Fort (API grant) | Fort | Faible |
| Modeled change | **Aucun** (scope string libre) | Breaking / nouveau | Évite objet |
| Fail-closed Critical | Oui | Oui | Faible |
| Effet externe | Non | Non | Non |

**Reco :** **A** — Confirmation T-A3 ; scope fermé runtime `"agent_selection"` ; binding `decisionRef`/`agent`/`executionContractId`/`executionContractVersion` ; TTL via `selectionExpiresAt` Attempt + expiration Confirmation ; **consume à Start réussi** (recommandation sous-condition) ; Start **ne re-consume pas** Confirm contrat.

**Contre-argument :** confusion avec Confirm contrat — mitiger scope distinct + tests.

**Si A insuffisant (binding ambigu) :** HOLD / REWORK modeled — **pas** créé ce cycle.

**Rejet A :** B impose modeled ; C affaiblit Critical.

**Delivery :** A autorise delivery mémoire sans modeled change.

**Dépendances :** D02, D03, D08 ; Select/Start.

---

## 5. Analyse RTA5-02 — Repository Attempt

| | A repo séparé + compensate | B UoW commun | C stocké dans Contract | D journal intention |
|--|----------------------------|--------------|------------------------|---------------------|
| Alignement D01 | **Oui** | Moyen | Contredit Attempt séparé | Moyen |
| R1 / R-T-A3-2 | Fenêtre documentée | Illusoire mémoire | Dual-write caché | Dette |
| Future SQL | Naturel | Migration lourde | Mauvais | Outbox later |

**Reco :** **A**.

**Contre-argument :** compensation spécifique = dette (acceptable, miroir T-A4 Option B).

**Delivery :** A OK mémoire ; R-T-A3-2 reste HARD pour exec réelle.

---

## 6. Analyse RTA5-03 — Adapter foundation

| | A Port+Test+NoOp | B Test only sans port | C générique configurable | D aucun adapter |
|--|------------------|----------------------|--------------------------|-----------------|
| Testabilité launch/cancel | Haute | Moyenne | Risque permis | Trop faible |
| Effet externe | **Interdit** par impl | OK | **Risque** | N/A |
| Surface future | Propre | Refactor | Dangereux | Dette |

**Reco :** **A** — `ExecutionAdapterPort` avec **uniquement** `TestExecutionAdapter` + `NoOpExecutionAdapter` (deux impl fermées, pas de config shell/réseau/MCP/Cursor). Pas d’adapter « générique » permis.

**Contre-argument :** deux classes vs une fixture — coût faible, clarté NoOp vs scripted Test.

**Port interdit de :** shell, réseau, MCP, Cursor, commande arbitraire, identité auto-déclarée, action hors contrat.

---

## 7. Analyse RTA5-04 — Persistance sélection

| | A dans Attempt accepted | B staging temporaire | C AgentSelectionRecord | D Select only in Start |
|--|-------------------------|----------------------|------------------------|------------------------|
| Select≠Start (D03) | **Oui** | Oui | Oui | Non |
| TTL / audit | Naturel | Extra objet | Surarchitecture | Faible |
| D01 | Aligné | OK | Contredit « pas d’agrégat inutile » | OK |

**Reco :** **A**.

**Contre-argument :** Attempt « accepted » sans Start = orphelin — mitiger TTL + cancel/expire job testable.

**Abandon sélection :** Cancel Attempt accepted ou expire → terminal `cancelled`/`failed` policy.

---

## 8. Analyse RTA5-05 — Double Start

| | A index + OCC | B mutex process | C réservation atomique repo | D scan only |
|--|---------------|-----------------|----------------------------|-------------|
| Source de vérité | Index **dérivé** + Attempt OCC | Process-local | Repo | Race |
| Crash | Rebuild index from Attempts | Perdu | Meilleur | Faible |

**Reco :** **A WITH CONDITION** — index `activeByContractId` = **invariant maintenu par repository** (pas optimisation optionnelle) ; rebuild au boot mémoire depuis Attempts non-terminaux ; OCC Attempt = garde primaire.

**Contre-argument :** dérive index — mitiger rebuild + assert tests.

---

## 9. Analyse RTA5-06 — result_pending

| | A champs Attempt | B buffer séparé | C failed+retry externe | D journal intention |
|--|------------------|-----------------|------------------------|---------------------|
| Modeled | **Aligné** status | Extra | Trompeur | Dette |
| Perte mémoire | Refs perdues au process death | Idem | — | Idem |

**Reco :** **A**.

**Contre-argument :** process restart perd pending — **acceptable** mémoire ; documenter non-durabilité ; exec réelle = HARD R-T-A3-2.

**Interdit :** payload sensible complet ; completed spéculatif.

---

## 10. Analyse RTA5-07 — Timeout

| | A TriggerAttemptTimeout | B evaluate every cmd | C timer mémoire | D scheduler réel |
|--|-------------------------|----------------------|-----------------|------------------|
| Déterminisme tests | **Haut** | Moyen | Flaky | Hors scope |
| Effet externe | Non | Non | Semi | **Oui** |

**Reco :** **A** — Clock injectée ; commande explicite ; autorité = auto-safety / N≥ / Morris ; idempotente.

**D hors scope** première delivery.

---

## 11. Analyse RTA5-08 — Auto-safety

| | A timeout only | B timeout+stale | C auto-cancel stop conditions | D none |
|--|----------------|-----------------|-------------------------------|--------|
| Décision auto structurante | Faible | Moyen | **Haut** | — |
| Fail-closed | Oui | Oui | Risque overreach | Faible |

**Reco :** **A WITH CONDITIONS** — seule automatisation = transition timeout déterministe via RTA5-07.
Détection stale Contract/Decision = **refuse Start** / surface **commande Cancel** (humain/Morris) — **pas** auto-cancel générique v1.
« Automatiser l’exécution répétable, jamais l’arbitrage. »

**Contre-argument B :** stale mid-flight sans auto-cancel laisse running — mitiger tests + emergency Morris + doc RTA5-08 condition « stale mid-flight = Cancel obligatoire opérateur / Morris ».

---

## 12. Analyse RTA5-09 — Ordre des écritures

Options prompt :
- A persist accepted → update Contract → launch → ack → running (**AMBIGU / INCORRECT** vs mapping)
- B Contract before Attempt
- C UoW atomique
- D journal intention

**Reco :** **A CORRECTED** — séquence §2 (persist accepted → launch → running → Contract executing + compensate).
Présenter dans le formulaire comme **APPROVE A** avec condition « séquence canonique arbitration §2 ».

**Challenge :** framing ambigu corrigé ici ; Morris doit approuver la séquence corrigée.

**Crash matrix :**

| Fenêtre | Issue |
|---------|-------|
| After accepted, before launch | Replay Start / cancel TTL |
| Ack lost | Replay launch idempotent |
| Running OK, Contract fail | Compensate Attempt |
| Launch fail | Attempt failed ; Contract failed (mapping) ; never executing |

---

## 13. Analyse RTA5-10 — Factory publique

| | A dual factory | B unique configurable | C constructeurs | D extend T-A4 factory |
|--|----------------|----------------------|-----------------|----------------------|
| Convention T-A4 | **Oui** | Risque permis | Verbose | Couplage |

**Reco :** **A** — `createInMemoryExecutionAttemptServices` + `createTestExecutionAttemptServices` ; injection ports explicite ; **refuse** adapter non Test/NoOp en factory mémoire.

---

## 14. Matrice de dépendances

```
RTA5-01 ──► Select/Start Critical
RTA5-03 ──► absence effet externe (contraint toute delivery)
RTA5-04 ──► TTL / Select≠Start
RTA5-02 ◄──► RTA5-09  (fortement couplés)
RTA5-05 ──► RTA5-02
RTA5-06 ──► RTA5-02 + Record
RTA5-07 ◄──► RTA5-08
RTA5-10 ──► tous ports
```

**Ordre de décision Morris recommandé :**

1. RTA5-03 (adapter — périmètre effets)
2. RTA5-01 (Confirmation)
3. RTA5-04 (sélection)
4. RTA5-02 (repo)
5. RTA5-09 (écriture — lié 02)
6. RTA5-05 (double Start)
7. RTA5-06 (result_pending)
8. RTA5-07 (timeout)
9. RTA5-08 (auto-safety)
10. RTA5-10 (factory)

---

## 15. Réserves × RTA5

| Reserve | RTA5 touchés | Mémoire | Exec réelle |
|---------|--------------|---------|-------------|
| B5 | 01/08/09 | Soft fail-closed LPS | Soft |
| R1 | 02/09 | Soft compensate | Hard |
| **R-T-A3-1** | 01/08 Start | Non-blocker si refuse Start | **HARD** |
| **R-T-A3-2** | 02/09 | Non-blocker fake | **HARD** |
| R-T-A3-3 | 01/10 auth | Soft | Soft |
| R-T-A3-4 | errors | Soft | Soft |

**Blockers delivery mémoire :** **aucun** si frontière §16 garantie + RTA5 pack APPROVED.
**Blockers exec réelle :** R-T-A3-1 + R-T-A3-2 (inchangés).

---

## 16. Frontière future delivery

Une future delivery **peut** être limitée à :

- module `execution-attempt` mémoire ;
- repos mémoire ; registry immutable ; Test/NoOp adapter **uniquement** ;
- Clock/ids injectés ; audit journal ;
- **aucun** shell / réseau / worker / queue / SQL / UI / effet externe.

Si Morris APPROVE un adapter configurable (C) ou scheduler (D) → **HOLD** delivery.

---

## 17. Trajectoire candidate (non validée)

Confirmation T-A3 `agent_selection` · repo Attempt séparé · AdapterPort Test/NoOp · sélection dans Attempt `accepted` · index anti double Start (invariant repo) · `result_pending` dans Attempt · timeout commande · auto-safety = timeout only · séquence persist→launch→running→Contract executing + compensate · factory mémoire miroir T-A4.

---

## 18. Formulaire Morris (copier-répondre)

Répondre : `APPROVE A` / `APPROVE B` / `APPROVE C` / `APPROVE D` / `REWORK` / `HOLD` + conditions.

---

### RTA5-01 — Confirmation de sélection d’agent ?
- Option A : réutiliser Confirmation T-A3 scope fermé `agent_selection`
- Option B : type Confirmation spécifique T-A5
- Option C : référence documentaire seule sans objet Confirmation
- Recommandation : **A** (consume à Start réussi ; binding agent+contract+version)
- Impacts : pas de modeled change ; Critical fail-closed
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions :

### RTA5-02 — Repository Attempt et cohérence Contract ?
- Option A : repository Attempt séparé + écritures séquentielles + compensation Contract
- Option B : unit of work mémoire commun Attempt/Contract
- Option C : Attempt stocké dans repository Contract
- Option D : orchestrateur + journal d’intention mémoire
- Recommandation : **A**
- Impacts : fidélité D01 ; fenêtre R-T-A3-2 documentée
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-03 — Adapter foundation ?
- Option A : `ExecutionAdapterPort` + `TestExecutionAdapter` + `NoOpExecutionAdapter`
- Option B : TestExecutionAdapter unique sans port public
- Option C : adapter générique configurable
- Option D : aucun adapter dans la première delivery
- Recommandation : **A** (Test/NoOp only ; C interdit)
- Impacts : surface testable ; aucun effet externe
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-04 — Persistance de la sélection ?
- Option A : sélection dans ExecutionAttempt `accepted`
- Option B : objet temporaire séparé non agrégat
- Option C : AgentSelectionRecord autonome
- Option D : sélection uniquement dans Start
- Recommandation : **A**
- Impacts : Select≠Start ; TTL ; orphelins via expire/cancel
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-05 — Garde double Start ?
- Option A : index mémoire `activeByContractId` + OCC (invariant repository)
- Option B : verrou applicatif par contrat
- Option C : réservation atomique dans AttemptRepository
- Option D : contrôle uniquement par scan des Attempts actifs
- Recommandation : **A** (index = invariant + rebuild boot)
- Impacts : anti double Start ; dérive mitigée
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-06 — Représentation result_pending ?
- Option A : statut + champs/refs bornées dans Attempt
- Option B : buffer technique séparé en mémoire
- Option C : failed immédiat + retry externe
- Option D : journal d’intention mémoire
- Recommandation : **A**
- Impacts : aligné modeled ; non-durable au restart process
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-07 — Timeout ?
- Option A : commande `TriggerAttemptTimeout` + Clock ; aucun scheduler
- Option B : timeout évalué à chaque commande
- Option C : timer mémoire
- Option D : scheduler réel
- Recommandation : **A** (D hors scope)
- Impacts : déterminisme tests
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-08 — Auto-safety première delivery ?
- Option A : timeout déterministe uniquement
- Option B : timeout + auto-cancel stale Contract/Decision
- Option C : auto-cancel générique stop conditions
- Option D : aucun auto-safety
- Recommandation : **A WITH CONDITIONS** (stale mid-flight = Cancel opérateur/Morris, pas auto)
- Impacts : pas d’arbitrage automatisé
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-09 — Ordre Attempt / Contract / launch ?
- Option A : séquence canonique arbitration §2 (accepted→launch→running→Contract executing + compensate)
- Option B : update Contract avant Attempt
- Option C : unit of work mémoire atomique
- Option D : journal d’intention puis application
- Recommandation : **A** (séquence corrigée ; Contract executing seulement après running)
- Impacts : cohérence mapping modeled ; R-T-A3-2 residual
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

### RTA5-10 — Factory publique ?
- Option A : `createInMemoryExecutionAttemptServices` + variante test
- Option B : factory unique configurable
- Option C : constructeurs explicites sans factory
- Option D : extension de la factory T-A4
- Recommandation : **A**
- Impacts : convention OA ; refuse adapter non Test/NoOp
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions :

---

## 19. Anti-claims

- Pas RTA5-01…10 **approved**
- Pas runtime delivery authorized / implemented
- Pas agent / Attempt / execution operational
- Pas DATABASE SELECTED / réserves closed / Option A complete
- Pas push / PR / merge / code `app/**` / modeled edits

---

## 20. Gate suivant (non consommé)

Après réponses Morris explicites :

`GO MATERIALIZE T-A5 RUNTIME ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A`

Autorise matérialisation documentaire + contrat de delivery — **pas** l’implémentation runtime.

---

## 21. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED**
