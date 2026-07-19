# SFIA Studio — Contrats, sécurité et observabilité POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
| **Statut** | **VALIDÉ AVEC RÉSERVE — INTÉGRÉ** (Option B) — POC-G7 ; PR #221 **MERGED** |
| **Architecture** | Option B minimale (Studio + adaptateur + harness) |
| **POC** | **Non lancé** |
| **Base** | `main` @ `40f8ebe…` |
| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |

> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité. Document **intégré** sur `main` via PR #221.

---

## 1. Corrélation

`requestId`, `cycleId`, `gateId`, `executionId`, `contractHash`, `correlationId` — timestamps Europe/Paris.

---

## 2. Contrats cœur harness (inchangés dans l’esprit)

OrchestrationRequest · GateDecision · Allowlist/Denylist · ExecutionContract · OrchestrationResult · Event — voir cadrage `21` et sections historiques.
**Invariant :** absence de GO valide ⇒ rejet ; fail closed.

### Allowlist / Denylist (rappel)

Allow : lecture paths projet/méthode ; `git.read.*` ; `cursor.analyze` ; `proof.write.local`.
Deny : commit/push/merge/PR/API write ; shell libre ; secrets ; fs hors `proofDir` ; toute action non listée.

---

## 3. Contrats Studio / Adaptateur (Option B)

### 3.1 StudioIntent

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `title` | Oui |
| `requestedCycle` | Oui |
| `requestedScope` | Oui |
| `operator` | Oui |
| `createdAt` | Oui |

### 3.2 StudioGateSubmission

| Champ | Obligatoire | Règle |
|-------|-------------|-------|
| `gateId` | Oui | |
| `requestId` | Oui | |
| `decision` | Oui | GO / CORRIGER / STOP / CLOSE — **explicite** |
| `scope` | Oui | |
| `issuedBy` | Oui | Morris |
| `issuedAt` / `expiresAt` | Oui | |
| `contractHash` | Oui | Match contrat courant |

### 3.3 StudioStopRequest

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `executionId` | Oui si exec active |
| `issuedBy` | Oui |
| `issuedAt` | Oui |
| `reason` | Oui |

### 3.4 AdapterEnvelope

| Champ | Obligatoire |
|-------|-------------|
| `schemaVersion` | Oui |
| `correlationId` | Oui |
| `messageType` | Oui (`intent`\|`gate`\|`stop`\|`statusQuery`\|`status`\|`proof`) |
| `payload` | Oui |
| `emittedAt` | Oui |

### 3.5 StudioExecutionView

| Champ | Obligatoire |
|-------|-------------|
| `requestId` / `executionId` | Oui |
| `status` | Oui (dérivé journal) |
| `lastEvent` | Oui |
| `proofRefs` | Oui |
| `errors` | Oui |
| `updatedAt` | Oui |

---

## 4. Invariants Option B

1. L’adaptateur **ne crée aucune décision**.
2. Le harness **revalide** tout message (GO, hash, allowlist, Git).
3. `contractHash` obligatoire pour GO ; modif contrat ⇒ GO invalide.
4. Statut UI **dérivé** du journal harness — pas de vérité UI exclusive.
5. Absence de message / timeout **≠** GO.
6. Retry après rejet ⇒ correction + **nouveau GO**.
7. STOP **prioritaire**.
8. UI indisponible **ne corrompt pas** le harness.
9. Harness **testable sans Studio**.
10. Studio / adaptateur **n’exécutent pas** Git ni Cursor.

---

## 5. Transitions d’état

Auteur L0 = Morris (via StudioGateSubmission / Stop, **revalidés** harness).
Harness applique ; Studio affiche. Transitions interdites inchangées (`GATE_OPEN`→`EXECUTING` sans GO, etc.).

---

## 6. Sécurité

### 6.1 Menaces cœur + Option B

| Menace | Contrôle |
|--------|----------|
| Auto-GO / timeout=GO | GateValidator ; décision explicite |
| Write remote | Denylist + `none-remote` |
| Path traversal / symlinks | Canonicalisation |
| Command injection | Pas de shell libre |
| Prompt injection | CursorPort borné |
| Secrets | Interdits ; redaction |
| **Falsification GO UI** | Revalidation harness + hash + issuedBy |
| **Replay message adaptateur** | `correlationId` / idempotence / issuedAt |
| **Désync Studio / journal** | Vue dérivée ; refresh depuis harness |
| **Élévation de scope** | Scope + contractHash revalidés |
| **Injection champs UI** | Validation schéma envelope |
| **Altération contractHash** | Recompute côté harness |
| **Contournement harness** | UI n’a pas d’accès Cursor/Git direct |
| **Preuve sensible dans Studio** | Refs + redaction ; pas de secrets |

### 6.2 Least privilege

Adaptateur : transmission seule. Harness : user local ; env filtré ; pas de tokens write.

---

## 7. Observabilité

Journal JSONL harness = source. Studio affiche `StudioExecutionView`.
Preuves S1 : GO, rejet allowlist, HEAD avant/après, `none-remote`, artefacts Cursor/manual.

Dégradé : CLI harness sans UI.

---

## 8. Stop / reprise / réversibilité

STOP prioritaire via `StudioStopRequest` ou harness direct.
Reprise = nouveau GO + nouvel `executionId`.
Effets locaux `proofDir` seulement ; remote inchangé.

---

## 9. Critères d’acceptation (Option B)

1. Option B minimale documentée ; A = test/dégradé ; C écartée 1er POC.
2. Harness autonome ; Studio cockpit ; adaptateur sans autorité.
3. Contrats §3 présents.
4. Invariants §4.
5. Menaces §6 couvertes.
6. POC-G8 consommé (backlog) ; POC-G9 fermé ; POC non lancé ; pas de protocole définitif non décidé.

---

*Contrats Option B — INTÉGRÉS — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
