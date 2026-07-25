# 01 — Framing T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Framing (Critical) |
| **Gate** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Runtime / modeled edits** | **NONE** |
| **Statut** | Framing complete — Morris arbitration required |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY` |

---

## 1. Contexte

T-A4 (PR #265) a livré la gouvernance `ExecutionContract` jusqu’à **`confirmed`** (runtime mémoire + modeled `0.2.0-oa`). T-A5 ouvre la frontière d’**exécution réelle** : sélection d’agent, Attempt, transitions `executing` / `completed` / `failed`.

Ce document propose un cadrage **arbitrable**. Aucune option n’est validée. Aucun runtime n’est implémenté.

### Question structurante

> Comment transformer un ExecutionContract T-A4 confirmé en tentative d’exécution bornée, attribuée à un agent autorisé et traçable, sans permettre au système de contourner l’autorité humaine ou d’élargir le contrat ?

### Héritage T-A4 (contraintes dures)

| Règle | Source |
|-------|--------|
| T-A4 possède jusqu’à `confirmed` (+ cancel pré-exec, supersession) | Morris T-A4-D ; modeled 07 |
| T-A5 possède `selectedAgentRef`, Start, executing\|completed\|failed, Cancel post-start, RecordResult | catalog 09 ; T-A4-D05 |
| `CheckExecutionAuthorization` = gate lecture seule pour Start — ne mute pas, n’exécute pas | runtime T-A4 |
| Contenu confirmé immutable sauf supersession (nouvel id) | modeled 0.2.0-oa |
| Confirmation déjà consommée à Confirm ; Start ne re-consomme pas | Option B T-A4 |
| Critical non-ack → fail-closed (pas de confirm ; donc pas de Start) | R-T-A3-1 OPEN |
| Si Decision source superseded après confirm → pas de Start tant que contrat non superseded/cancelled | modeled 07 |
| retry ⇒ Attempt distinct | modeled 07 |
| capability ≠ authority ; agent ne redéfinit pas le contrat | modeled 07 |
| CancelExecution = dual-context (T-A4 pré-exec / T-A5 post-start) | catalog 09 |

### Modeled Attempt existant (non runtime)

Schema `execution-attempt.schema.json` (`0.1.0-oa`) : `attemptId`, `contractId`, `agentRef`, `startedAt`, `endedAt?`, status `running|succeeded|failed|timeout|cancelled|partial`, `resultRef?`, `errorRef?`, `retryOf?`. **Non modifié** ce cycle ; écarts éventuels vs lifecycle candidat → arbitrage / futur modeled rework.

### Convention de branche

Le dépôt utilise déjà le préfixe `framing/` pour des cycles de cadrage. Les slices Option A delivery utilisent `delivery/…`. Ce cycle crée **`framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution`** (aligné gate). Path documentaire : `t-a5-agent-selection-execution/` (titre cycle). AT slice label reste « Agent adapter/Attempt/timeout ».

### CKC

| Item | Valeur |
|------|--------|
| Trouvé | **oui** |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | **candidate** |
| Usage | guidance cognitive expérimentale |
| `executionAuthority` | **false** |
| Limites | ne valide aucune option ; n’autorise aucun agent/exécution ; ne remplace pas Morris |

---

## 2. Frontières de responsabilité

### 2.1 T-A4 possède (inchangé)

- Build / Validate / Confirm / Supersede / Cancel (pré-exec)
- Statuts gouvernance jusqu’à `confirmed`, `cancelled` (pré-exec), `superseded`
- CheckExecutionAuthorization (gate non mutante)
- Binding Confirmation, authority enum, immutabilité confirmée

### 2.2 T-A5 candidat possède

| Responsabilité | Notes |
|----------------|-------|
| Relecture finale d’exécutabilité | Relire CheckAuth + fraîcheur Decision/Cycle/Critical/autorité |
| Sélection agent / adaptateur | Pose `selectedAgentRef` sans élargir action/target/scope |
| Création Attempt | Objet traçable lié contrat+version |
| Réservation / acquisition d’exécution | Empêcher double Start incompatible |
| Passage contrat → `executing` | Seule transition T-A5 depuis `confirmed` |
| Suivi résultat technique | completed / failed (et mapping timeout/cancel) |
| Cancel / stop pendant exécution | Selon contrat + kill switch |
| Événements / audit d’exécution | Sans secrets ni payloads sensibles |

### 2.3 T-A5 ne doit pas posséder

- Création / modification Decision ou Confirmation grant
- Se déclarer Morris / auto-ack Critical / auto-confirmation
- Élargir action, target, scope, constraints, stop conditions
- Mutation silencieuse du contrat confirmé
- Réécriture historique Attempt / contrat
- Validation métier définitive des résultats (claim / maturity) → **T-A6**
- Cutover legacy / MethodMode / OPS1 → **T-A7**

### 2.4 T-A6 (futur)

Evidence / ReviewBundle / ClaimEvaluation / maturity — **dépend de T-A5**. T-A5 produit des refs techniques (`resultRef` / `errorRef`) ; T-A6 interprète et juge.

### 2.5 T-A7 (futur)

Legacy cutover MethodMode / `method/**` / OPS1 isolate — hors T-A5.

### 2.6 Incertain (à arbitrer)

| Sujet | Incertitude |
|-------|-------------|
| Qui écrit `selectedAgentRef` sur le contrat vs Attempt seul | D-T-A5-01 / 02 |
| `partial` / `timeout` Attempt vs statut contrat `failed` | D-T-A5-04 / 10 |
| RecordExecutionResult = technique seul ou ouvre Evidence | D-T-A5-10 |
| Autorité Select vs Start (même acteur ?) | D-T-A5-08 |
| Dual Cancel catalogue vs split CancelExecutionAttempt | dette catalog |

---

## 3. Préconditions d’entrée T-A5

Avant Select et/ou Start, candidats :

| Précondition | Héritée T-A4 | Relue T-A5 | Atomique | Compensable | Fail-closed |
|--------------|--------------|------------|----------|-------------|-------------|
| Contract existe | oui | oui | — | — | oui |
| `status=confirmed` | oui | oui | — | — | oui |
| Version attendue (OCC) | oui | oui | oui (Start) | — | oui |
| Non superseded / non cancelled | oui | oui | oui | — | oui |
| Pas déjà executing\|completed\|failed | anti-inject | oui | oui | — | oui |
| Decision source fraîche (non superseded) | gate | **relecture** | Start | — | oui |
| Cycle compatible + Critical ack si Critical | gate | **relecture** | Start | — | oui (R-T-A3-1) |
| Confirmation consommée (ref présent) | Confirm | vérifier présence | — | — | oui |
| Autorité toujours valide (resolver T-A3) | gate | **relecture** | Start | — | oui |
| action/target/scope autorisés | contrat | agent ∩ contrat | Select+Start | — | oui |
| constraints + stop conditions OK | contrat | oui | Start | — | oui |
| capabilities exigées connues | contrat | match agent | Select | — | oui |
| Agent compatible / enabled / healthy | — | oui | Select | — | oui |
| Aucune Attempt active incompatible | — | oui | Start | — | oui |
| idempotencyKey + correlationId | contrat | Attempt | oui | — | oui |
| Rollback / stop défini | contrat | oui | Start | partiel | oui |

**Principe :** T-A5 **ne fait pas confiance** au seul snapshot Confirm ; il **relit** les ports T-A2/T-A3/T-A4 au Start (TOCTOU). CheckAuth reste le prédicat partagé.

---

## 4. Modèle fonctionnel candidat

### 4.1 AgentDescriptor (registre)

Champs candidats : `agentId`, `agentType`, `adapterRef`, `supportedCapabilities[]`, `allowedActions[]`, `allowedTargets[]`, `allowedScopes[]`, `trustLevel`, `executionMode`, `healthStatus`, `version`, `enabled`, `provenance`, `createdAt`, `updatedAt`.

Règles : deny-by-default ; intersection stricte avec le contrat ; l’agent **ne peut pas** muter son propre descripteur d’autorisation ni le contrat.

### 4.2 ExecutionAttempt (agrégat d’exécution)

Champs candidats (alignement + extension vs schema 0.1.0-oa) :

| Champ | Rôle |
|-------|------|
| `attemptId` | identité |
| `executionContractId` + `contractVersion` | binding immuable |
| `selectedAgentRef` / `agentRef` | agent choisi |
| `status` | lifecycle Attempt |
| `idempotencyKey` / `correlationId` | anti-double |
| `startedAt` / `completedAt` / `failedAt` / `cancelledAt` | audit |
| `resultRef` / `errorRef` / `stopReason` | issue technique |
| `version` / `provenance` | OCC + audit |
| `retryOf?` | chaîne retries |

### 4.3 AgentSelectionRecord

**Recommandation candidate :** **ne pas** créer d’objet autonome. Capturer la sélection dans :

1. événement `ExecutionAgentSelected` (audit), et
2. champs Attempt + `selectedAgentRef` sur contrat (si D-T-A5-02 l’exige).

Éviter la multiplication d’agrégats sans nécessité.

---

## 5. Lifecycle candidat

### 5.1 Analyse des états

| État | Utile ? | Verdict candidat |
|------|---------|------------------|
| `planned` | Créé avant agent | **Dette inutile** — fusionner dans création Attempt au Select/Start |
| `agent_selected` | Entre Select et Start | Utile **seulement** si Select et Start sont séparés (D-T-A5-03) |
| `starting` | Fenêtre launch | **Dette** sauf besoin crash-window explicite ; préférer OCC + persist-then-launch |
| `executing` / `running` | Oui | Contrat `executing` ; Attempt `running` |
| `completed` / `succeeded` | Oui | Mapping 1:1 candidat |
| `failed` | Oui | Inclut erreurs techniques |
| `cancelled` | Oui | Post-start |
| `timed_out` | État vs catégorie | **Recommandation :** catégorie de `failed` **ou** status Attempt `timeout` mappé → contrat `failed` (pas succès) |
| `blocked` | Durable ? | **Erreur / refus** (`EXECUTION_BLOCKED` event) — **pas** état durable |
| `partial` | Schema Attempt | **Incertain** — défaut modeled : ≠ completed ; arbitrage T-A6 (D-T-A5-10) |

### 5.2 Recommandation lifecycle (non validée)

**Attempt minimal :** `running → succeeded | failed | timeout | cancelled`
**Contrat T-A5 :** `confirmed → executing → completed | failed | cancelled`
- Créer Attempt **au Start** (ou au Select si Select séparé, statut Attempt `running` seulement après Start).
- Pas de reprise in-place : **retry = nouvel Attempt** (`retryOf`).
- `blocked` = erreur, pas d’état.

---

## 6. Commandes candidates

| Commande | Owner | Acteur | Préconditions | Transition | Idempotence | Notes |
|----------|-------|--------|---------------|------------|-------------|-------|
| `SelectExecutionAgent` | T-A5 | humain N≥required **ou** système borné (D-02/08) | contract confirmed ; agent match | pose `selectedAgentRef` | key+agent | Peut fusionner avec Start (D-03) |
| `StartExecution` | T-A5 | même règle autorité | CheckAuth+relectures ; agent set ; no active attempt | confirmed→executing ; Attempt running | contractId+key | **Seule** entrée executing |
| `CancelExecutionAttempt` | T-A5 | N≥ / Morris kill | attempt running | →cancelled (+ contrat per policy) | attemptId+reason | Alias catalog `CancelExecution` post-start |
| `RecordExecutionResult` | T-A5 | adaptateur/système authentifié — **pas** client spoof | attempt running ; fingerprint | →completed\|failed | attemptId+result hash | Technique seul |
| `RecordExecutionFailure` | T-A5 | idem | running | →failed | idem | **Fusionnable** dans RecordResult |
| `GetExecutionAttempt` | T-A5 | lecteur autorisé | — | lecture | — | |
| `ListExecutionAttempts` | T-A5 | lecteur | contractId | lecture | — | |
| `CheckAttemptAuthorization` | T-A5 | système | — | lecture | — | Miroir CheckAuth côté Attempt |

**Fusion / suppression candidats :** `RecordExecutionFailure` ⊂ `RecordExecutionResult` ; Select+Start optionnellement une commande `StartExecutionWithAgent` (D-03).

### Erreurs par commande (aperçu)

Select : `AGENT_*`, `AUTHORITY_DENIED`, `EXECUTION_CONTRACT_*`
Start : + `EXECUTION_ALREADY_ACTIVE`, `CRITICAL_NOT_ACKNOWLEDGED`, `CONCURRENCY_CONFLICT`, `EXECUTION_START_FAILED`
Cancel : `ATTEMPT_STATE_CONFLICT`, `EXECUTION_CANCEL_FAILED`
Record : `RESULT_RECORDING_FAILED`, `ATTEMPT_STATE_CONFLICT`

---

## 7. Événements candidats

| Événement | Type | Déclencheur |
|-----------|------|-------------|
| `ExecutionAgentSelected` | domaine | Select |
| `ExecutionAttemptCreated` | domaine | création Attempt |
| `ExecutionStarted` | domaine | Start (catalog) |
| `ExecutionCompleted` / `ExecutionFailed` | domaine | RecordResult |
| `ExecutionCancelled` | domaine | Cancel post-start |
| `ExecutionTimedOut` | domaine/technique | timeout policy |
| `ExecutionBlocked` | technique | refus pré-start |
| `ExecutionAuthorizationDenied` | technique | authz fail |

**Corrélation :** `correlationId`, `causationId`, `attemptId`, `executionContractId`, `contractVersion`, `agentId`.
**Interdits dans events :** secrets, tokens, Confirmation complète, authority evidence complète, payloads métier non nécessaires.
**Idempotence :** clés d’émission dérivées (attemptId + transition).

---

## 8. Erreurs candidates

Taxonomie demandée (compatible catalog existant ; **pas de modification catalog** ce cycle) :

`EXECUTION_CONTRACT_NOT_CONFIRMED` · `EXECUTION_CONTRACT_STALE` · `EXECUTION_CONTRACT_SUPERSEDED` · `EXECUTION_CONTRACT_CANCELLED` · `AGENT_NOT_FOUND` · `AGENT_DISABLED` · `AGENT_CAPABILITY_MISMATCH` · `AGENT_SCOPE_MISMATCH` · `EXECUTION_ALREADY_ACTIVE` · `ATTEMPT_NOT_FOUND` · `ATTEMPT_STATE_CONFLICT` · `AUTHORITY_DENIED` · `CRITICAL_NOT_ACKNOWLEDGED` · `EXECUTION_START_FAILED` · `EXECUTION_TIMEOUT` · `EXECUTION_CANCEL_FAILED` · `RESULT_RECORDING_FAILED` · `PERSISTENCE_FAILURE` · `CONCURRENCY_CONFLICT`

Écarts connus vs catalog actuel (`STATE_CONFLICT`, `CAPABILITY_MISSING`, …) → **future modeled alignment**, pas ce framing.

---

## 9. Sélection d’agent — options

### Option A — déterministe par capabilities

Système choisit via capabilities ∩ action/target/scope ∩ health ∩ availability.

| | |
|--|--|
| **Bénéfices** | Automatisable, testable, déterministe si registry figé |
| **Risques** | Contournement humain si registry mal gouverné ; surprise agent |
| **Dette** | Registry + health + ranking |
| **Impact modeled / T-A4** | Faible sur contrat ; fort sur AgentDescriptor |
| **Autorité** | Start peut rester N≥ ; Select peut être système **si** policy Morris |
| **Multi-agent** | Besoin de tie-break explicite |
| **Reco** | Acceptable **après** registry deny-by-default + audit |

### Option B — agent désigné dans le contrat (pré-Confirm / supersession)

| | |
|--|--|
| **Bénéfices** | Intent humain figé avant confirm ; audit clair |
| **Risques** | Agent stale à Start ; force supersession T-A4 pour changer |
| **Dette** | Champ agent sur contrat avant T-A5 statuses |
| **Impact T-A4** | **Élevé** — aujourd’hui `selectedAgentRef` = T-A5 only |
| **Autorité** | Confirm couvre l’agent |
| **Reco** | Puissant mais **conflite ownership actuel** → arbitrage |

### Option C — candidat système + confirmation humaine distincte

| | |
|--|--|
| **Bénéfices** | Humain valide l’agent ; sépare intent métier et binding agent |
| **Risques** | Latence ; double Confirmation ; confusion avec Confirm contrat |
| **Dette** | Nouvelle Confirmation scope `agent_selection` |
| **Autorité** | N≥ / Morris selon Critical |
| **Reco** | Meilleure pour profil Critical / Capitalization |

### Recommandation de sélection (non validée)

**Profil Critical :** Option **C** (ou B si Morris accepte d’étendre T-A4).
**Profil Standard/Light futur :** Option **A** bornée.
**Court terme Option A Studio :** documenter **C comme défaut recommandé** ; A comme dérogation explicite.

---

## 10. Architecture d’exécution

| Mode | Simplicité | Fiabilité | Concurrence | Timeout | Obs | Isolation | Dette SQL future |
|------|------------|-----------|-------------|---------|-----|-----------|------------------|
| Synchrone in-process | Haute | Faible (crash) | Faible | Difficile | Faible | Faible | Migration plus tard |
| Asynchrone adaptateur | Moyenne | Meilleure | Meilleure | Naturel | Bonne | Meilleure | Outbox utile |
| Queue interne + worker | Plus complexe | Haute | Haute | Haute | Haute | Haute | Alignée persistence |
| Orchestrateur externe | Faible (deps) | Variable | Haute | Haute | Variable | Haute | Couplage |

**Recommandation candidate (non validée) :**
1. **Phase mémoire Option A :** adaptateur **direct asynchrone** + **persist-then-launch** + lease/OCC.
2. **Pas** de DATABASE SELECTED.
3. Queue/worker = évolution après persistence durable (hors T-A5 framing).
4. Synchrone toléré seulement pour adapters **déterministes de test** (fixture), jamais comme modèle unique production.

---

## 11. Atomicité et concurrence

### Risques

Double Start · double Select · contrat superseded pendant Start · Decision superseded pendant run · Cancel vs Result · timeout vs Result · double Result · crash après `executing` · agent lancé sans Attempt · Attempt sans launch.

### Stratégies

| Stratégie | Verdict candidat |
|-----------|------------------|
| **Persist Attempt puis launch** | **Recommandé** (D-T-A5-05) |
| Launch puis persist | **Rejeté** — agent orphelin non auditable |
| Outbox | Évolution SQL ; optionnel mémoire (log append) |
| Lease / mutex local | Oui pour single-writer Attempt |
| OCC (`version`) | Oui Start / Record / Cancel |
| Idempotency key | Obligatoire |
| Compensation | Cancel adaptateur si launch partiel ; never silent success |

### Fenêtre D-T-A5-06

Si launch réussit mais persistance résultat échoue → Attempt reste `running`/`failed` selon policy ; **jamais** `completed` sans record durable ; alerte + retry Record idempotent.

---

## 12. Autorité et sécurité

| Action | Autorité candidate |
|--------|--------------------|
| Select | Humain N≥ `requiredAuthority` **ou** système si Option A + policy ; Morris si `MORRIS` |
| Start | Même barre que contrat ; **re-vérifier** resolver T-A3 ; jamais claim client `IAmMorris` |
| Cancel | Initiateur / N≥ / **Morris kill switch** toujours |
| RecordResult | **Adaptateur authentifié** (server-side) — client UI ne « complète » pas |

- Réutiliser `AuthorityResolverPort` T-A3.
- Intersection agent ∩ contrat pour action/target/scope.
- Lier agent à `(executionContractId, contractVersion)`.
- Système ≠ Morris. Agent ≠ mutateur de son allowlist.

### Critical / Decision / Confirmation

- Critical non-ack → Start refusé (R-T-A3-1).
- Decision freshness recheck au Start.
- Confirmation : déjà consommée ; Start vérifie `confirmationRef` présent, **ne re-grant pas**.

---

## 13. Stop conditions et kill switch

**Stop avant Start (refus) :** contrat stale/superseded/cancelled ; Critical ; Decision obsolète ; agent unhealthy / mismatch ; scope divergent ; perte autorité ; action interdite / cible protégée.

**Pendant exécution :** timeout ; quota ; Morris stop ; contrat superseded (policy D-07) ; agent unhealthy mid-flight ; erreur non compensable.

| Concept | Sens |
|---------|------|
| Refus avant démarrage | Erreur ; pas d’Attempt running |
| Annulation demandée | Commande Cancel ; best-effort interrupt |
| Interruption effective | Adaptateur ACK cancel |
| Failure | Terminal technique failed/timeout |
| Compensation | Undo effets partiels adaptateur si supporté |
| Rollback métier | **Hors T-A5** si claim/Evidence — T-A6+ |

---

## 14. Observabilité et audit

**Minimal :** correlationId, attemptId, executionContractId, contractVersion, agentId, command, status, timestamps, errorCode, stopReason, authorityEvidenceRef (ref only), decisionRefs, durée, résultat (code).

**Interdit logs :** secrets, tokens, Confirmation complète, authority evidence complète, payloads sensibles complets.

---

## 15. Performance (hypothèses — non SLA)

| Hypothèse | Ordre de grandeur candidat |
|-----------|----------------------------|
| Attempts concurrents (mémoire) | dizaines, pas milliers |
| Timeout défaut | minutes (paramétrable par contrat) |
| Payload | borné ; refs > blobs |
| Polling | éviter ; préférer callback adaptateur |
| Contention | un writer Attempt / contractId |
| Rétention historique | versions Attempts ; purge hors scope |
| Trajectoire SQL | repository port déjà ; DB non sélectionnée |

---

## 16. Tests futurs (stratégie candidate)

Domain · authority · anti-spoof Record · anti-boundary T-A4 (pas Confirm/Build) · idempotence Start/Record · double Start · concurrence Cancel/Result · timeout · compensation · capability/scope mismatch · contract superseded · Decision freshness · Critical fail-closed · crash windows persist-then-launch · observabilité sans secret · **anti-shell / adapter non autorisé**.

**Seuil delivery candidat (non imposé) :** ≥ couverture T-A4 adversarial + suites Attempt/Agent dédiées (ordre **40–80** tests runtime selon scope retenu après arbitrage).

---

## 17. Réserves héritées

| Reserve | Impact T-A5 | Garde-fou | Résiduel | Décision | Bloquant delivery ? |
|---------|-------------|-----------|----------|----------|---------------------|
| **B5** LPS satellite | LPS mid-flight peut diverger | Snapshot projectId ; fail-closed si LPS inactive | Oui | Carry-forward | Non si fail-closed |
| **R1** cross-store | Confirm déjà Option B ; Start multi-ports | Relecture + OCC + compensate | Oui | Persist strategy | **Partiel** — documenter |
| **R-T-A3-1** Critical ack | Start doit fail-closed | Recheck Cycle ack | API ack absente | Priorité | **Oui** pour Critical réel |
| **R-T-A3-2** cross-store | Start/Record multi-agrégats | Persist-then-launch + compensate | Oui | D-05/06 | **Oui** si exec réelle |
| **R-T-A3-3** authority registry mémoire | Spoof/stale authority | Resolver port + tests | Mémoire | Registry durable futur | Non mémoire test |
| **R-T-A3-4** scope→AUTHORITY_DENIED | Select/Start mapping erreurs | Taxonomie explicite | Confusion codes | Align errors | Non si tests |

**Ne fermer aucune réserve.**

---

## 18. Arbitrages Morris — D-T-A5-01…10

Toutes les recommandations sont **candidates**. Gate futur : `GO ARBITRATE T-A5`.

### D-T-A5-01 — Attempt autonome vs inclus contrat

| Options | A: Attempt agrégat séparé | B: Attempt embarqué contrat | C: events only |
|---------|---------------------------|-----------------------------|--------------|
| **Reco** | **A** (aligné schema Attempt existant + retries) |
| Impacts | Repository Attempt ; lien version contrat |
| Dette | Dual write Attempt+contrat status |
| Risque | Désync Attempt/contrat |
| Gate | Arbitrate puis éventuel modeled tweak |

### D-T-A5-02 — Stratégie sélection agent

| Options | A capabilities | B dans contrat | C confirm humaine |
|---------|----------------|----------------|-------------------|
| **Reco** | **C** (Critical) ; A dérogation |
| Impacts | Confirmation scope ou Decision |
| Dette | UX + API confirmation agent |
| Risque | Latence ; double confirm |
| Gate | Arbitrate (peut impacter T-A4 ownership si B) |

### D-T-A5-03 — Select et Start

| Options | A: deux commandes | B: une commande combinée | C: Select optionnel si B-contrat |
|---------|-------------------|--------------------------|----------------------------------|
| **Reco** | **A** pour audit ; B acceptable Light |
| Impacts | État intermédiaire `selected` |
| Dette | Fenêtre Select sans Start |
| Risque | Agent selected stale |
| Gate | Arbitrate |

### D-T-A5-04 — Lifecycle minimal

| Options | A: running→terminal only | B: +agent_selected+starting | C: +blocked durable |
|---------|--------------------------|-----------------------------|-----|
| **Reco** | **A** (+ timeout comme terminal Attempt) |
| Impacts | Mapping schema Attempt |
| Dette | Rework modeled si rename statuses |
| Risque | Sur-modélisation |
| Gate | Arbitrate (+ modeled si breaking) |

### D-T-A5-05 — Persist-then-launch vs autres

| Options | A: persist-then-launch | B: launch-then-persist | C: outbox |
|---------|------------------------|------------------------|-----------|
| **Reco** | **A** ; C évolution SQL |
| Impacts | Attempt `running` avant effets |
| Dette | Cancel si launch fail |
| Risque | Attempt sans effet (acceptable) |
| Gate | Arbitrate |

### D-T-A5-06 — Launch OK / persist résultat KO

| Options | A: rester running + retry Record | B: failed technique | C: completed spéculatif |
|---------|----------------------------------|---------------------|-------------------------|
| **Reco** | **A** puis B après N retries |
| Impacts | Ops alerting |
| Dette | Reconciler |
| Risque | **C interdit** |
| Gate | Arbitrate |

### D-T-A5-07 — Contrat/Decision obsolètes pendant exécution

| Options | A: continue + flag | B: cancel best-effort | C: fail immédiat |
|---------|--------------------|-----------------------|------------------|
| **Reco** | **B** (Critical) ; A seulement si stop conditions le permettent explicitement |
| Impacts | Kill switch adaptateur |
| Dette | Policy par action |
| Risque | Effets orphelins |
| Gate | Arbitrate |

### D-T-A5-08 — Autorité Select / Start / Cancel

| Options | A: même barre contrat | B: Select ≤ Start | C: Cancel ⊂ Morris always |
|---------|----------------------|-------------------|---------------------------|
| **Reco** | **A** + Cancel elevatable Morris |
| Impacts | Resolver reuse |
| Dette | Matrix actors |
| Risque | Under-auth Start |
| Gate | Arbitrate |

### D-T-A5-09 — Timeout et retry

| Options | A: timeout→Attempt timeout→contrat failed ; retry=new Attempt | B: auto-retry in-place | C: timeout=cancelled |
|---------|------------------------------------------------------------------|------------------------|----------------------|
| **Reco** | **A** ; B interdit sans Decision |
| Impacts | `retryOf` |
| Dette | Budget retries dans contrat |
| Risque | Storm retries |
| Gate | Arbitrate |

### D-T-A5-10 — Frontière résultat T-A5 vs T-A6/T-A7

| Options | A: T-A5 technique only (refs) | B: T-A5 ouvre Evidence | C: partial=T-A6 only |
|---------|-------------------------------|------------------------|----------------------|
| **Reco** | **A** + **C** ; Evidence/Claim = T-A6 ; cutover = T-A7 |
| Impacts | RecordResult payload minimal |
| Dette | Contrats refs |
| Risque | Fuite maturité dans T-A5 |
| Gate | Arbitrate |

---

## 19. Gates futurs (non consommés)

1. `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A`
2. (après arbitrage) éventuel `GO MODELED REWORK … T-A5` **si** schema Attempt/catalog doivent bouger
3. (après modeled si besoin) `GO DELIVERY … T-A5` — **pas acquis**

Aucun gate modeled/delivery proposé comme déjà acquis.

---

## 20. Anti-claims

- Pas T-A5 authorized / delivery ready / implemented
- Pas agent selected / Attempt operational / execution enabled
- Pas modeled validated T-A5 / database selected
- Pas Option A complete / reserves closed
- Pas push / PR / merge ce cycle
- Pas modification runtime ou catalogs

---

## 21. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY**
