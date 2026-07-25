# 02 — Arbitration Pack T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Arbitration (Critical) |
| **Gate** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD cadrage** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **Statut** | **ARBITRATION PACK PREPARED — MORRIS DECISIONS PENDING** |
| **Runtime / modeled** | **NONE modifié** |
| **Décisions Morris** | **TOUTES PENDING** — aucune APPROVE imputée |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED` |

---

## 1. Sources

| Source | Usage |
|--------|-------|
| Handoff cadrage blob `d4923b58…` | Verdict FRAMING COMPLETED |
| `01-framing.md` + `README.md` | SoT recommandations initiales |
| Modeled 07 / 09 ; Attempt `0.1.0-oa` ; Contract `0.2.0-oa` | Compatibilité (lecture) |
| Runtime T-A4 `execution-contract/**` | Gate CheckAuth, ownership |
| T-A3 Authority / Confirmation / Critical | Matrice autorité |
| Réserves B5, R1, R-T-A3-1…4 | Contraintes |
| CKC `pilots/01-cadrage.md` | candidate ; `executionAuthority=false` ; **aucune autorité sur décisions** |

---

## 2. Rappel cadrage

Question structurante inchangée : transformer un ExecutionContract **confirmé** en Attempt borné + agent autorisé, sans contourner l’autorité humaine ni élargir le contrat.

Recommandations initiales (`01-framing.md`) à challenger : D01=A, D02=C(+A dérogation), D03=A, D04=A, D05=A, D06=A, D07=B, D08=A+Morris cancel, D09=A, D10=A+C.

### Évolutions tracées vs cadrage (recommandations arbitration ≠ silent edits)

| ID | Cadrage | Arbitration (candidate) | Nature |
|----|---------|-------------------------|--------|
| D04 | running→terminal only | Ajouter état préparatoire **`accepted`** (persist pré-launch) puis `running` | **Challenge accepté** — cohérence D05 |
| D06 | rester `running` + retry | Préférer **`result_pending`** léger **ou** flag `resultCaptureState=pending` sans machine lourde ; fallback A | **Challenge ops** |
| D02 | C Critical / A dérogation | Règle **dépendante du profil**, fermée (pas libre config) | **Précision** |
| D07 | B cancel best-effort | B **par défaut** + table par cause (D/A/C selon stop) | **Précision** |
| D08 | A + Morris cancel | Distinguer cancel métier / emergency stop / auto-safety borné | **Précision** |
| Autres | inchangés en substance | Confirmés après challenge | — |

---

## 3. Méthode

Pour chaque D-T-A5-0N : reformuler → exhaustivité options → dépendances → grille (simplicité, sécurité, autorité humaine, déterminisme, atomicité, concurrence, réversibilité, testabilité, obs, modeled, T-A4, T-A6/7, dette, coût) → reco candidate + contre-argument + risques + conséquence rejet + gate futur.

**Aucune reco ≠ décision Morris.**

---

## 4. Analyse D-T-A5-01 — Modèle Attempt

**Question :** ExecutionAttempt agrégat autonome ou intégré au contrat ?

| Critère | A séparé | B embarqué | C events-only |
|---------|----------|------------|---------------|
| Cardinalité N Attempts / contrat | Naturel | Array lourd | Historique faible |
| Retry / historique | Fort | Moyen | Faible |
| Concurrence | OCC Attempt | Contension contrat | Difficile |
| Invariants inter-agrégats | Dette sync | Plus local | Aucun état |
| Persistence | Dual write | Mono | Logs only |
| Compat Attempt 0.1.0-oa | **Aligné** | Breaking embedding | Ignore schema |

**Reco arbitration :** **A** (inchangé).

**Contre-argument :** dual-write Attempt↔contrat (R1 / R-T-A3-2).

**Si Morris rejette A :** B force modeled breaking ; C bloque retries auditables → HOLD modeled.

**Réserves :** R1, R-T-A3-2 contraignent ; garde-fou OCC + compensate.

**Gate futur :** modeled Attempt si champs manquants ; pas blocker modeled minimal si A.

---

## 5. Analyse D-T-A5-02 — Sélection d’agent

**Question :** Comment lier un agent au contrat avant/pendant Start ?

| | A capabilities | B fixé dans contrat | C confirm humaine |
|--|----------------|---------------------|-------------------|
| Autorité humaine | Faible | Haute (via Confirm T-A4) | Haute (scope dédié) |
| Déterminisme | Haut si registry figé | Haut | Moyen |
| Impact T-A4 | Faible | **Élevé** (`selectedAgentRef` aujourd’hui T-A5) | Moyen (Confirmation scope) |
| Critical | Risqué sans humain | OK si Confirm | **Meilleur** |

**Forme de règle :** **dépendante du profil**, **fermée** (pas stratégie libre runtime) :
- Critical / Capitalization → **C** obligatoire
- Standard / Light → **A** autorisé seulement si policy pack + audit + allowlist agents
- **B** = option Morris séparée (implique rework ownership T-A4)

**Autorité pour confirmer agent (C) :** même barre que `requiredAuthority` du contrat (N1|N2|N3|MORRIS via resolver T-A3) ; Confirmation scope `agent_selection` **distincte** de Confirm contrat (déjà consommée).

**Reco :** **C par défaut Critical** ; **A dérogation profil** ; **B HOLD** sauf GO T-A4 ownership.

**Contre-argument C :** latence / double Confirmation.

**Si rejet C :** A seul → risque surprise agent en Critical.

---

## 6. Analyse D-T-A5-03 — Select et Start

**Question :** Une ou deux commandes ?

| | A séparées | B SelectAndStart | C Select optionnel |
|--|------------|------------------|-------------------|
| Audit | Meilleur | Moyen | Variable |
| TOCTOU Select→Start | Fenêtre | Atomique | Selon D02 |
| Changer d’agent | Oui avant Start | Non sans cancel | Oui |
| Sélection non démarrée | Dette + **TTL** requis | N/A | N/A |

**Reco :** **A** + **expiration sélection** (TTL candidat : minutes configurées au contrat / défaut court) + revalidation agent au Start.

**Contre-argument :** complexité ops vs B.

**Dépendances :** D02 (si B-contrat, C plus naturel) ; D05 (Start = persist+launch).

---

## 7. Analyse D-T-A5-04 — Lifecycle

**Challenge cadrage :** `running` avant launch trompe si persist-then-launch.

**Lifecycle Attempt recommandé (candidate) :**

```
accepted → running → succeeded | failed | timeout | cancelled
         ↘ (launch fail) → failed | cancelled
```

| Point | Verdict candidate |
|-------|-------------------|
| `accepted` (= persist pré-launch) | **Oui** — requis par D05 A |
| `timeout` état distinct Attempt | **Oui** (schema 0.1.0-oa) ; contrat mappe → **`failed`** |
| `blocked` | **Erreur / event**, pas état |
| `succeeded` ↔ contrat `completed` | Vocabulaire dual OK ; mapping 1:1 documenté |
| Launch non démarré après persist | Reste `accepted` ; reconciler/launch ou cancel ; **pas** `running` |

**Contrat T-A5 (inchangé substance) :** `confirmed → executing → completed | failed | cancelled`
Passage `executing` **au moment du launch réussi** (transition `accepted→running`), pas à la seule création Attempt.

**Évolution vs cadrage D04 A :** ajout `accepted` — tracé §2.

**Compat modeled :** schema Attempt n’a pas `accepted` aujourd’hui → **blocker modeled soft** (rework Attempt statuses) avant runtime strict ; runtime mémoire peut mapper localement sous GO modeled.

**Contre-argument :** un état de plus = dette ; alternative = `running` + flag `launched=false` (moins clair).

---

## 8. Analyse D-T-A5-05 — Persist / launch

| | A persist-then-launch | B launch-then-persist | C outbox durable | D lease puis launch |
|--|----------------------|----------------------|------------------|---------------------|
| Agent orphelin | Évite | **Risque majeur** | Évite | Réduit |
| Crash mid | Attempt `accepted` sans effet | Effets sans audit | Rejouable | Lease expire |
| DB absente | OK mémoire + reconcile | Dangereux | Dette SQL | OK mémoire |

**Reco :** **A** ; **C** = évolution post-DATABASE (non selected) ; **B rejeté** ; D optionnel raffinement de A.

**Crash entre persist et launch :** reconciler idempotent (re-launch si `accepted` + key) ou cancel après TTL.

**Dette sans DB :** journal append-only mémoire / process ; R-T-A3-2 OPEN.

---

## 9. Analyse D-T-A5-06 — Échec RecordResult

**Challenge :** Attempt terminé mais `running` trompe les ops.

| | A stay running + retry | B failed immédiat | C `result_pending` | D outbox technique |
|--|------------------------|-------------------|--------------------|--------------------|
| Honnêteté ops | Faible | Trompe « échec agent » | **Bonne** | Bonne |
| Complexité | Faible | Faible | Faible-moyenne | Haute |
| Completed spéculatif | Interdit | Interdit | Interdit | Interdit |

**Reco arbitration :** **C** (état Attempt `result_pending` **ou** champ `resultCaptureState=pending` sur Attempt `running` — Morris choisit forme) + retry Record borné ; après budget → `failed` technique `RESULT_RECORDING_FAILED` **sans** claim métier.

**Évolution vs cadrage :** A → C préféré ; A acceptable si Morris refuse nouvel état.

**Contre-argument C :** divergence schema 0.1.0-oa (pas `result_pending`) → modeled.

---

## 10. Analyse D-T-A5-07 — Obsolescence mid-flight

**Reco base :** **B cancel best-effort**, affinée par cause :

| Cause | Comportement candidat |
|-------|----------------------|
| Contrat superseded | Cancel best-effort ; pas de nouvel Start sur ancien |
| Decision superseded | Cancel best-effort (aligné modeled 07) |
| Perte d’autorité | Cancel / refuse Record non autorisé |
| Critical non conforme | Cancel fail-closed (R-T-A3-1) |
| Morris stop | **Emergency stop** obligatoire (D08) |
| Action irréversible engagée | Cancel best-effort + Attempt `failed`/`cancelled` + flag `irreversibleEffectsPossible` ; **pas** rollback métier T-A5 |

Option **D** (stop conditions contrat) **compose** B : le contrat peut autoriser A (terminer + stale) **seulement** si stop condition explicite non-Critical.

**Contre-argument B :** effets partiels orphelins — acceptable vs continuer aveugle.

---

## 11. Analyse D-T-A5-08 — Autorités

### Matrice fermée candidate

| Action | Acteur autorisé | Notes |
|--------|-----------------|-------|
| SelectExecutionAgent | Humain N≥ `requiredAuthority` ; système **uniquement** si D02=A dérogation | Resolver T-A3 ; jamais claim client Morris |
| StartExecution | Même barre que contrat | Recheck TOCTOU |
| CancelExecutionAttempt (métier) | N≥ **ou** initiateur Start si policy | |
| Emergency stop | **Morris toujours** (+ automate safety borné ci-dessous) | |
| RecordExecutionResult / Failure | **Adaptateur authentifié lié à `attemptId`+`agentRef`** | Un adaptateur = **son** Attempt seulement |
| Retry (nouvel Attempt) | Même barre que Start | Pas auto sans Decision/policy |
| Kill switch | Morris | Prioritaire |

**Auto-safety sans autorité équivalente ?**
**Oui, borné :** timeout engine / health kill / invariant violation → transition technique `failed`/`cancelled` **sans** élargir scope ; audit `systemSafety` ; **ne pas** se déclarer Morris.

**Distinctions :**
- cancel préventif (pré-`running`) ≠ cancel métier (running) ≠ emergency stop (Morris/safety)

**Reco :** matrice ci-dessus (A cadrage + précisions).

---

## 12. Analyse D-T-A5-09 — Timeout et retry

| Sujet | Reco candidate |
|-------|----------------|
| Timeout | Par **Attempt** (deadline) ; plafond optionnel au **contrat** (budget cumulé) |
| Mapping contrat | Attempt `timeout` → contrat `failed` (≠ succès, ≠ cancelled) |
| Retry | **Toujours nouvel Attempt** + `retryOf` ; **pas** in-place |
| Auto-retry | **Interdit** sans Decision/policy explicite non-Critical |
| Autorité retry | = Start |
| IdempotencyKey | **Distincte** par Attempt |
| Boucle | `maxRetries` dans contrat / doctrine ; défaut bas |
| Non réversible | Retry refusé ou exige Confirmation additionnelle |

**Reco :** **A** cadrage confirmée + budget cumulé.

---

## 13. Analyse D-T-A5-10 — Frontière T-A5 / T-A6

**T-A5 peut enregistrer :** statut technique, exit code, durée, refs logs, résultat brut **borné**, erreur technique, `resultRef`/`errorRef`.

**T-A5 ne décide pas :** conformité métier, acceptation finale, preuve suffisante, claim, maturité, readiness produit.

**Handoff minimal vers T-A6 :**

```
{ attemptId, executionContractId, contractVersion, agentRef,
  technicalStatus, resultRef?, errorRef?, correlationId,
  startedAt, endedAt, stopReason? }
```

**Reco :** **A** (+ `partial` interprété seulement en T-A6 si présent).

---

## 14. Matrice de dépendances

```
D02 ──► D03 ──► D05 ──► D04
  │                │
  └──────────────► D08
D01 ──► D09 ──► D04
D05 ──► D06 ──► D10
D07 ──► D08
D04 ◄── D06
```

**Ordre recommandé de décision Morris :**

1. **D10** (frontière résultat — cadre le reste)
2. **D01** (agrégat)
3. **D02** (sélection)
4. **D08** (autorité)
5. **D05** (persist/launch)
6. **D04** (lifecycle — dépend D05/D06)
7. **D06** (record failure)
8. **D03** (Select/Start)
9. **D09** (timeout/retry)
10. **D07** (obsolescence mid-flight)

---

## 15. Réserves × décisions

| Reserve | Contraintes | Avant modeled | Avant runtime | Avant exec réelle | Garde-fou si OPEN |
|---------|-------------|---------------|---------------|-------------------|-------------------|
| B5 | D07 mid-flight LPS | Non | Soft | Soft | fail-closed LPS inactive |
| R1 | D01 dual-write, D05/D06 | Soft | Soft | **Hard** | OCC + compensate |
| **R-T-A3-1** | D07/D08/Start Critical | Non (doc fail-closed) | Soft (tests) | **HARD blocker** Critical réel | refuse Start si non-ack |
| **R-T-A3-2** | D05/D06 multi-agrégat | Soft | Soft mémoire | **HARD** exec réelle | persist-then-launch + reconcile |
| R-T-A3-3 | D08 resolver | Non | Soft | Soft | port + tests anti-spoof |
| R-T-A3-4 | D02/D08 errors | Soft catalog | Soft | Soft | mapping AUTHORITY_DENIED |

### Blockers qualifiés

| Surface | R-T-A3-1 | R-T-A3-2 |
|---------|----------|----------|
| Modeled T-A5 | **Non-blocker** (doc fail-closed suffit) | **Non-blocker** |
| Runtime T-A5 mémoire | **Non-blocker** si tests refuse Start | **Non-blocker** avec compensate documenté |
| Exécution réelle / adapters non-fixture | **BLOCKER** jusqu’à ack path | **BLOCKER** jusqu’à stratégie multi-store acceptée |

**Aucune réserve fermée.**

---

## 16. Trajectoire candidate globale (non validée)

1. Attempt **agrégat séparé** (D01 A)
2. Sélection **C Critical** ; **A** dérogation profil fermée (D02)
3. Select et Start **séparés** + TTL sélection (D03 A)
4. Lifecycle Attempt : **`accepted → running → terminals`** (D04 évolué)
5. **Persist-then-launch** (D05 A)
6. Capture résultat : **`result_pending` / flag pending** + retry Record ; jamais completed spéculatif (D06 C)
7. Obsolescence : **cancel best-effort** + table par cause ; Morris emergency stop (D07/D08)
8. Matrice autorité fermée ; adaptateur = son Attempt seulement (D08)
9. Timeout Attempt → contrat failed ; retry = nouvel Attempt + budget (D09 A)
10. T-A5 technique only → handoff refs T-A6 (D10 A)

---

## 17. Formulaire d’arbitrage Morris (copier-répondre)

Répondre pour chaque décision : `APPROVE A` / `APPROVE B` / `APPROVE C` / `APPROVE D` (si présent) / `REWORK` / `HOLD` + conditions.

---

### D-T-A5-01 — Attempt autonome ou intégré ?
- Option A : agrégat ExecutionAttempt séparé
- Option B : Attempt embarqué dans ExecutionContract
- Option C : Attempt purement événementiel
- Recommandation : **A**
- Impacts : retries/historique naturels ; dual-write ; aligné schema 0.1.0-oa
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-02 — Stratégie de sélection d’agent ?
- Option A : déterministe par capabilities
- Option B : agent fixé dans ExecutionContract (impact T-A4)
- Option C : proposition système + confirmation humaine (scope dédié)
- Recommandation : **C obligatoire Critical** ; **A dérogation Standard/Light fermée** ; B = HOLD sauf GO T-A4
- Impacts : Confirmation agent distincte ; autorité = `requiredAuthority`
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles : (ex. « C only Critical ; A allowed if … »)

### D-T-A5-03 — Select et Start ?
- Option A : commandes séparées + TTL sélection
- Option B : SelectAndStart atomique
- Option C : Select optionnel / Start sélectionne
- Recommandation : **A**
- Impacts : audit ; fenêtre TOCTOU mitigée par revalidation Start + TTL
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-04 — Lifecycle Attempt / contrat ?
- Option A : `running → terminals` seulement (cadrage initial)
- Option B : `accepted → running → terminals` (cohérent persist-then-launch)
- Option C : + états `agent_selected` / `starting` / `blocked` durables
- Recommandation : **B** (`timeout` état Attempt ; contrat mappe timeout→failed ; `blocked`=erreur)
- Impacts : modeled Attempt statuses à aligner ; vocabulaire succeeded↔completed
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-05 — Ordre persistance / lancement ?
- Option A : persist Attempt puis launch
- Option B : launch puis persist
- Option C : outbox / transaction durable
- Option D : lease préparatoire puis launch
- Recommandation : **A** (D raffine A ; C post-DB ; B rejeté)
- Impacts : Attempt `accepted` sans effet possible ; reconcile idempotent
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-06 — Agent terminé mais résultat non persisté ?
- Option A : rester `running` + retry Record
- Option B : passer `failed` immédiat
- Option C : `result_pending` (état ou flag) + retry puis failed technique
- Option D : outbox technique
- Recommandation : **C** (A acceptable si refus nouvel état ; completed spéculatif interdit)
- Impacts : honnêteté ops ; possible modeled
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-07 — Obsolescence mid-flight ?
- Option A : laisser terminer + marquer stale
- Option B : cancel best-effort (défaut)
- Option C : interruption obligatoire always
- Option D : selon stop conditions contrat (compose B)
- Recommandation : **B + D** (table par cause ; Morris stop = obligatoire)
- Impacts : effets partiels possibles ; pas rollback métier T-A5
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-08 — Matrice d’autorités ?
- Option A : Select/Start = barre contrat ; Cancel métier N≥ ; Morris emergency ; Result = adaptateur lié Attempt
- Option B : Select barre inférieure à Start
- Option C : Cancel uniquement Morris
- Recommandation : **A** + auto-safety technique borné (timeout/health) sans claim Morris
- Impacts : anti-spoof Record ; distinctions cancel types
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-09 — Timeout et retry ?
- Option A : timeout Attempt → contrat failed ; retry = nouvel Attempt + budget ; pas auto-retry
- Option B : auto-retry in-place
- Option C : timeout = cancelled contrat
- Recommandation : **A**
- Impacts : `retryOf` ; maxRetries ; idempotencyKey distincte
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-10 — Frontière T-A5 / T-A6 ?
- Option A : T-A5 technique only (refs) ; Evidence/Claim/maturité = T-A6
- Option B : T-A5 ouvre Evidence
- Option C : `partial` interprété seulement en T-A6
- Recommandation : **A + C**
- Impacts : handoff JSON minimal ; empêche fuite maturité
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

---

## 18. Anti-claims

- Pas D-T-A5-01…10 **approved**
- Pas T-A5 modeled / delivery **authorized**
- Pas agent selected / Attempt implemented / execution enabled
- Pas DATABASE SELECTED / réserves fermées
- Pas push / PR / merge / runtime / modeled edits ce cycle

---

## 19. Gate potentiel (non consommé)

Après réponses Morris explicites D-01…10 :

`GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A`

Ce gate **n’est pas consommé** et **n’est pas présumé**.

---

## 20. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED**
