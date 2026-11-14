# SFIA Review Pack FULL — ML4C S05 browser real-api triage

## A. Date / heure

2026-11-15 ~00:05 CET (Europe/Paris)

## B. GO / profil / cycle

- GO Morris : SFIA STUDIO NEXT — ML4C — TRIAGE ET REMÉDIATION DES TESTS NAVIGATEUR S05 REAL API
- Contrat : SFIA v2.6
- Cycle : 6 — Delivery projet
- Profil : CRITICAL
- Typologie : INC / RUN CORRECTIVE
- Produit : `projects/sfia-studio-next/`
- Version technique : `0.0.0-dev`
- Classification : PATCH corrective candidate / NO RELEASE
- STABLE : NOT AVAILABLE

## C. Git Truth initial / final

### Initial (avant correction)

| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| tree | `90ae38e3b0c4536bd3f4d062725ce460ce01e06c` |
| parent | `a2d37d1f600836f353f44061687f0795cdc10377` |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| handoff distant | `sfia/review-handoff@9fe6f63cd44aa64ed14a66974e4b97ee71b28e7e` blob `7d57f65b…` |
| status | clean hors `.tmp-sfia-review/` stub |
| PR #676 | OPEN / NOT MERGED (hors cycle) |

Git Truth : **PASS** (conforme contrat).

### Final (après commit local produit)

| Champ | Valeur |
| --- | --- |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| tree | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| parent | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| message | `test(next): align S05 browser fixtures with effect-risk policy` |
| status | clean hors `.tmp-sfia-review/chatgpt-review.md` (handoff source) |

- Push produit : **NON**
- PR / merge : **NON**
- RECETTE : **inchangée**

## D. Sources lues et refs

- Conception : `c883db07` / blob `da397424` — INV-01…10, politique S05, QA-01…20, G-01…10
- Runtime RO : `s05-pending-policy.ts`, `service.ts` (sibling probe), `turn-command.ts` (stash/UNKNOWN), `semantic-qualification.ts`
- Fixture / spec : `s05-fixture/route.ts`, `ml4c-s05-real-api.spec.ts`
- Handoffs : `9fe6f63c` (P3), `c3ec20fb` (knowledge), `66b44bc2` (owner probe)
- Code local HEAD prime sur PR non synchronisée

## E. Reproduction exacte des trois FAIL

Commande (Phase A, HEAD `6c50a144`, aucune modification) :

```bash
cd projects/sfia-studio-next/web
npx playwright test tests/e2e/ml4c-s05-real-api.spec.ts --reporter=line
```

ENV-01 observé (harness `e2e-web-server.sh`) : Web `127.0.0.1:3101`, DB `sfia_next_e2e` via container `sfia-next-dev-pg:5433`, Nora fixture, RECETTE non utilisée.

Résultat baseline : **4 PASS / 3 FAIL** (26.5s).

### FAIL 1 — S05-REAL-01/02/03/04/06/08/09

- Fichier : `ml4c-s05-real-api.spec.ts:134`
- Assertion : `expect(bodyCycle.pendingEffectBlocked).toBe(true)`
- Attendu : `true`
- Observé : `false`
- Contexte : après `seed_unknown` (QUALIFIED / `d3.converse` / EXPLORE), message « Ouvre le cycle cadrage. » via API messages réelle
- Divergence : S05 classifie le sibling A en `PROVEN_NO_EFFECT` → `allowOwnerEffects=true` → pas de `pendingEffectBlocked`
- Classification : **oracle obsolète** (ancien blocage global S05), pas défaut runtime

### FAIL 2 — S05-REAL-07

- Fichier : `ml4c-s05-real-api.spec.ts:242`
- Assertion : `expect(body.pendingEffectBlocked).toBe(true)`
- Attendu : `true` malgré lying `sessionStorage` pending key
- Observé : `false`
- Même sibling SAFE UNKNOWN → S05 ne bloque pas ; hint client non autorité (correct)
- Classification : **oracle obsolète** (scénario RISK manquant)

### FAIL 3 — S05-REAL-10

- Fichier : `ml4c-s05-real-api.spec.ts:414`
- Assertion : `expect(body.pilotageEffect?.attempted).not.toBe(true)`
- Attendu : not `true`
- Observé : `true` sur au moins une des deux réponses 200 concurrentes
- Cause : avec SAFE UNKNOWN, S05 laisse le propriétaire D5 tenter OPEN_CYCLE ; concurrence ne doit pas être confondue avec blocage S05
- Classification : **oracle obsolète** ; runtime conforme (owner atteint car A = PROVEN_NO_EFFECT)

Les trois FAIL partagent la même racine d'oracle (SAFE fixture utilisée pour prouver un blocage RISK), mais les traces assertion/valeur sont distinctes (L134 / L242 / L414).

## F. Matrice ancien oracle / contrat actuel

| Scénario | Ancien oracle E2E | Contrat S05 actuel | Décision |
| --- | --- | --- | --- |
| UNKNOWN + EXPLORE + owner probe vide | Bloquer tout effet B | `PROVEN_NO_EFFECT` → ne pas bloquer | Corriger oracle |
| UNKNOWN + REQUEST_EFFECT actionnable + issue non réconciliée | (non couvert) | `UNKNOWN_EFFECT_RISK` → bloquer | Ajouter fixture + oracle |
| AWAITING_PILOT_ACT | Bloquer effets | Garde mission | Conserver (déjà PASS) |
| clientPendingHint falsifié | Bloquer si A « pending » | Hint jamais autorité | RISK seed pour prouver blocage serveur |
| Concurrence sous SAFE A | Interdire attempt D5 | S05 non-bloqueur ; owner/fencing | RISK seed pour « no métier under S05 block » |

## G. Qualification des fixtures

| Action | Statut tour | Qualification | Effet métier créé | Classe S05 attendue |
| --- | --- | --- | --- | --- |
| `seed_unknown` | UNKNOWN | QUALIFIED / `d3.converse` / EXPLORE | Aucun | PROVEN_NO_EFFECT |
| `seed_unknown_effect_risk` (**nouveau**) | UNKNOWN | QUALIFIED / `d5.pilotage_command` / REQUEST_EFFECT / OPEN_CYCLE CADRAGE | Aucun | UNKNOWN_EFFECT_RISK |
| `seed_awaiting_mission` | COMPLETE | mission AWAITING_PILOT_ACT | Aucun | Garde mission |
| `oracle` | — | lecture DB | — | — |

Gardes fixture inchangées : `e2eFixtureMutationsAllowed()`, session Pilote, ownership préparation, pas d'exception ID, pas de schéma.

## H. Cas UNKNOWN sans effet (SAFE)

Test `S05-SAFE-01/08/09` :

- Dialogue indépendant → COMPLETE / `pendingEffectBlocked` not true / A reste UNKNOWN
- Intention effet indépendante → S05 **ne** bloque **pas** sur A (`pendingBlockReason` ne cite pas A)
- Hint client effacé → même règle
- Reload → A recoverable via oracle
- Autorité finale propriétaire non forcée (pas d'exigence OPEN_CYCLE APPLIED / doc AVAILABLE)

## I. Cas UNKNOWN à effet incertain (RISK)

Test `S05-RISK-01/02/03/04/06` + fixture `seed_unknown_effect_risk` :

- Fixture refuse de retourner OK si `classifySiblingEffectRisk` ≠ `UNKNOWN_EFFECT_RISK`
- OPEN_CYCLE / create project / document CREATE → `pendingEffectBlocked=true`, `S05_PENDING_BLOCKS*`, zéro mutation oracle (cmds/docs/revision)
- Dialogue indépendant toujours admissible
- Hint client effacé → protection serveur inchangée

## J. Cas AWAITING_PILOT_ACT

Tests `S05-REAL-05 / S05-M01` et `S05-M02` — **PASS inchangés** :

- Effet B → `S05_MISSION_BLOCKS_EFFECT`
- Question indépendante → COMPLETE sans terminer la mission

## K. Cas pending hint frauduleux

Test `S05-RISK-07` : lying `ctk_lying_pending` + RISK seed → blocage serveur + cmds inchangés.

## L. Cas concurrence

Test `S05-RISK-10` : deux POST concurrentes sous RISK seed → 200/409 ; aucun `pilotageEffect.attempted=true` ; cmds/revision stables.

## M. Cas isolation Pilote

- FIX-05/07 : action inconnue 400 ; anon 401/403 ; `seed_unknown_effect_risk` aussi 401/403 sans session
- FIX-06 : Pilote B ne peut oracle / seed_awaiting / seed_unknown_effect_risk sur préparation A (403/404)

## N. Fichiers créés

Aucun fichier nouveau. Action ajoutée dans le route handler DEV/E2E existant.

## O. Fichiers modifiés

Allowlist uniquement :

1. `projects/sfia-studio-next/web/src/app/api/dev/e2e/s05-fixture/route.ts`
2. `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts`
3. `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md`
4. `projects/sfia-studio-next/construction/delivery-history.md`

Runtime S05 / D2–D7 / schema : **NON MODIFIÉS**.

### O.1 Fixture — action `seed_unknown_effect_risk` (contenu utile)

```typescript
if (action === "seed_unknown_effect_risk") {
  // UNKNOWN + QUALIFIED REQUEST_EFFECT d5.pilotage_command OPEN_CYCLE
  // validateNoraTurnQualification + effectIntents + extractPilotageBinding
  // reserveTurnCommand → stashTurnQualification → markTurnUnknown
  // classifySiblingEffectRisk(... ownerEffectsFound:false) MUST be UNKNOWN_EFFECT_RISK
  // No businessCommands / documents / humanDecisions / pilotage journal writes
}
```

Diff net : +~140 lignes ; allowlist actions étendue ; imports `classifySiblingEffectRisk`, `parseSiblingResultEvidence`, `validateNoraTurnQualification`, `effectIntents`, `extractPilotageBinding`.

### O.2 Spec — réorganisation SAFE / RISK

- Ancien test unique SAFE+blocage → scindé :
  - `S05-SAFE-01/08/09` (EXPLORE / non-blocage)
  - `S05-RISK-01/02/03/04/06` (REQUEST_EFFECT / blocage)
  - `S05-RISK-07` (lying hint)
  - `S05-RISK-10` (concurrence sous RISK)
- AWAITING + FIX conservés / renforcés (isolation sur nouvelle action)
- Helper `seedUnknownEffectRisk` + `postThreadMessage`
- Aucun `route.fulfill` sur messages API ; aucun skip/only/todo

### O.3 Docs

Entrées as-built + delivery-history pour ce delivery (reproduction, oracles, preuves).

## P. UNIT

```
Test Files  48 passed (48)
Tests       351 passed (351)
```

`npm run test:unit` — GREEN.

## Q. PostgreSQL

```
Test Files  28 passed (28)
Tests       468 passed (468)
```

`npm run test:integration` — GREEN (0 FAIL).

## R. BUILD

`npm run build` — PASS (`Compiled successfully`).

## S. Playwright et traces

| Suite | Résultat |
| --- | --- |
| Baseline Phase A `ml4c-s05-real-api` @ `6c50a144` | 4 PASS / 3 FAIL |
| Après correction `ml4c-s05-real-api` | **8 PASS** (28.3s) |
| `ml4c-s05-independent-pending` | PASS |
| `ml4c-document-continuity` | PASS |
| `g4-chat-first-sas` | PASS |

Preuve serveur réelle (pas de mock conversation). Nora = fixture provider only.

## T. Fake / Real Qualification

| Niveau | Statut |
| --- | --- |
| IMPLEMENTED | Oui (fixtures + oracles E2E) |
| COVERAGE VERIFIED | Oui (SAFE / RISK / AWAITING / hint / concurrence / isolation) |
| DETERMINISTIC BEHAVIOR PROVEN | Oui (Playwright + API réelle + Nora fixture) |
| LIVE BEHAVIOR NOT PROVEN | Confirmé |
| USER RECETTE NOT RUN | Confirmé |
| NORA LIVE PROVEN | **NON** |
| ML4C ACCEPTED | **NON** |
| GATE C CLOSED | **NON** |
| STABLE / ADOPTED | **NON** |

## U. ENV-01 et versioning

- Lane : DEV/E2E isolé `127.0.0.1:3101` / `sfia_next_e2e` / PG `:5433`
- Nora : FIXTURE_PROVIDER_ONLY (`STUDIO_E2E` / force fixture harness)
- Operator DEV `:3100` : non démarré
- RECETTE `:3200` / PG `:5434` : read-only, non mutée, non utilisée
- OpenAI LIVE : non appelé
- Version produit : `0.0.0-dev` / NO RELEASE

## V. Git Review Index

| Artefact | Ref |
| --- | --- |
| Parent commit produit | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| Commit produit LOCAL | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| Tree produit | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| Message | `test(next): align S05 browser fixtures with effect-risk policy` |
| Conception | `c883db07` / blob `da397424` |
| Handoff précédent | `9fe6f63c` |
| Branche handoff | `sfia/review-handoff` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` (L3) |

Blob handoff distant : renseigné après publish L3.

## W. Réserves

1. Preuve = DETERMINISTIC E2E only — pas de Nora LIVE DEV.
2. Owner D5 peut appliquer OPEN_CYCLE quand S05 SAFE — non régressé ; non revendiqué comme preuve métier LIVE.
3. PR #676 / main distants non mis à jour (interdit).
4. Fixture RISK simule absence d'effet propriétaire, pas un échec mid-flight D5 avec journal partiel.

## X. Verdict unique

**S05 BROWSER CONTRACT RECONCILED — DETERMINISTIC E2E GREEN**

Distinctions obligatoires :

- IMPLEMENTED
- COVERAGE VERIFIED
- DETERMINISTIC BEHAVIOR PROVEN
- LIVE BEHAVIOR NOT PROVEN
- USER RECETTE NOT RUN

## Y. Prochain gate Morris

1. Relire ce handoff distant (SHA/blob vérifiés).
2. Qualifier éventuellement Nora LIVE DEV sous mandat distinct + isolation ENV-01.
3. Aucun GO RECETTE inclus.
4. Pas de push produit / PR / merge dans ce cycle.
