# SFIA Studio Next — Review Pack FULL L3
## ML4C — Continuité cognitive Nora, historique long et création/révision documentaire D4

- **Date/heure**: 2026-11-14 09:33:21 CET
- **Cycle**: Delivery projet (§6.6) — EVOL Critical
- **Profil**: Critical
- **Typologie**: EVOL / INC integrated
- **Review**: Full + Handoff publish-in-cycle required
- **Branche locale**: `fix/next-semantic-intent-convergence-20261112`
- **HEAD base produit**: `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` (= `67bf6b0b`)
- **Tip distant produit**: `origin/build/next-ml4c-functional-convergence` @ `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`
- **Conception V0.7**: `86377fde` blob `7d289670`
- **Travail**: LOCAL ONLY — aucun push produit / PR / merge / RECETTE / STABLE / ADOPTED
- **Verdict technique**: **IMPLEMENTED WITH RESERVES — READY FOR CHATGPT REVIEW**
- **LIVE**: NOT PROVEN — PROVIDER CAMPAIGN NOT RUN THIS CYCLE

---

## 1. Objectif et macro-lot

Réaliser la capacité intégrée O-01…O-06 : historique autorisé + confrontation cognitive Nora + proposition documentaire exacte + admission/binding D4 + CREATE/REVISE atomiques/récupérables + UX fil long, avec preuves DET/PG/BROWSER et documentation as-built.

GO Morris 14/11/2026 : exécution technique accordée ; push produit / PR / merge / migration structurante / RECETTE / STABLE / promotion **exclus**.

---

## 2. Git Truth Check

| Check | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| Branche locale | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| origin/main | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| merge-base main | `6d237452680640324eeadbb18f4601fd7de99850` |
| Tip produit distant | `build/next-ml4c-functional-convergence` = même SHA |
| PR produit | #676 OPEN (hors push ce cycle) |
| Product push/PR/merge | **NON** |

### Note branche

Le contrat cite `build/next-ml4c-functional-convergence`. Le worktree local porte le nom `fix/next-semantic-intent-convergence-20261112` au **même SHA tip** que le remote build. Aucun checkout forcé (préservation du worktree dirty autorisé).

### git status --short (final local)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/document/service.ts
 M projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
 M projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md
?? projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
?? projects/sfia-studio-next/web/src/domains/conversation/history-tools-sdk.ts
?? projects/sfia-studio-next/web/src/domains/conversation/history-tools.ts
?? projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-history-tools.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/document-command.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts

```

### git diff --stat (product)

```
 .../construction/delivery-history.md               |  15 ++
 .../web/src/components/figma/NoraConversation.tsx  | 128 ++++++-------
 .../web/src/components/figma/tokens.css            |  14 ++
 .../src/domains/conversation/cognitive-policy.ts   |   4 +
 .../web/src/domains/conversation/nora-adapter.ts   |  22 ++-
 .../domains/conversation/semantic-qualification.ts |   9 +
 .../web/src/domains/conversation/service.ts        | 206 +++++++++++++++------
 .../web/src/domains/conversation/turn-command.ts   |  90 ++++++++-
 .../web/src/domains/document/service.ts            | 201 +++++++++++---------
 .../integration/ml2-knowledge-documents.pg.test.ts |  16 +-
 .../ml4-chat-first-d4-provenance.pg.test.ts        |   2 +-
 .../web/tests/unit/cognitive-policy.test.ts        |   6 +
 .../web/tests/unit/semantic-qualification.test.ts  |  27 +++
 13 files changed, 531 insertions(+), 209 deletions(-)

```

---

## 3. Préflights

| Gate | Verdict | Preuve |
| --- | --- | --- |
| ENV-01 | PASS | DEV `127.0.0.1:5433/sfia_next_dev` ; Vitest rewrite → `sfia_next_e2e` |
| PG-01 | PASS | indexes turn/messages/documents/revisions + corr uniques présents |
| SDK-01 | PASS WITH RESERVE | `@openai/agents@0.21.0` ; Zod `documentProposal` ; LIVE taille fournisseur non mesurée |
| REC-01 | PASS | `stashDocumentCommandBinding` dans `result_json` ; préservation commit terminal ; tests seal/ownership |

---

## 4. Implémentation (résumé)

1. **O-01** — `history-tools.ts` + `history-tools-sdk.ts` ; allowlist cognitive ; branche `nora-adapter`
2. **O-02** — consignes Nora + TEMP DET (pas de routeur lexical ; pas d'effet D6 implicite)
3. **O-03** — `documentProposal` optionnel ≤100k ≠ `replyDraft` ≤12k ; materialize fence same-turn
4. **O-04** — `document-command.ts` admit/seal/apply/reconcile ; SHA contenu/payload
5. **O-05** — CREATE documents+1ʳᵉ révision même TX ; REVISE fence + fingerprint ; CORRELATION_PAYLOAD_MISMATCH
6. **O-06** — composeur sticky ; preflights ; preuves

---

## 5. Matrice de preuves

| ID | Niveau | Résultat |
| --- | --- | --- |
| HIST-01/05/08 | PG | PASS (`ml4c-history-tools.pg.test.ts`) |
| TEMP-01.. | DET | PASS (`ml4c-temp-restitution.test.ts`) |
| PROP / D4-CMD / REC | DET+PG | PASS (`document-command` unit + PG) |
| UX composer | BROWSER | PASS (`ml4c-long-thread-composer.spec.ts`) |
| Non-rég ML2 Q10 | PG | PASS (oracle O-05 fingerprint) |
| Unit global | DET | **272 PASS / 46 files** |
| tsc --noEmit | DET | PASS |
| LIVE Nora | LIVE | **NOT PROVEN** |

### Extraits logs unit

```
.env.local

 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
stderr | tests/unit/safe-markdown.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/safe-markdown.test.ts (2 tests) 1ms
stderr | tests/unit/publication-effect-labels.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/publication-effect-labels.test.ts (5 tests) 1ms
stderr | tests/unit/durable-target-resolve.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/durable-target-resolve.test.ts (4 tests) 1ms
stderr | tests/unit/ml3-rct02-intent.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml3-rct02-intent.test.ts (2 tests) 1ms
stderr | tests/unit/git-proof-qualify.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/git-proof-qualify.test.ts (2 tests) 1ms
stderr | tests/unit/ml3-cki-intent.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml3-cki-intent.test.ts (1 test) 1ms
stderr | tests/unit/non-effects.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  46 passed (46)
      Tests  272 passed (272)
   Start at  09:32:18
   Duration  8.12s (transform 273ms, setup 186ms, collect 3.89s, tests 271ms, environment 2ms, prepare 884ms)


```

### Extraits logs PG ML4C

```
14cc","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","tool_calls":1,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-14T08:32:30.914Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.document_act_qualification","component":"d3.conversation","request_id":"req_8bf0ac8e-8316-4072-81b6-fbd66c1c42c5","operation_id":"op_78e26a49-8103-41df-b6c1-e7d4ca0162af","generation_id":"gen_dea82ce4-cfdd-4a4e-a9f8-bcf07165365c","outcome":"PARTIAL","meta":{"qualification_kind":"NONE","qualification_reason":"SEMANTIC_NONE","documentary_intent_signal":false,"d4_attempted":false,"d4_effect":null}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-14T08:32:30.918Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_8bf0ac8e-8316-4072-81b6-fbd66c1c42c5","operation_id":"op_78e26a49-8103-41df-b6c1-e7d4ca0162af","generation_id":"gen_dea82ce4-cfdd-4a4e-a9f8-bcf07165365c","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":1,"turn_status":"COMPLETE","cas_applied":true}}
 ✓ tests/integration/ml4c-history-tools.pg.test.ts (3 tests) 166ms

 Test Files  2 passed (2)
      Tests  11 passed (11)
   Start at  09:32:29
   Duration  1.26s (transform 193ms, setup 18ms, collect 693ms, tests 358ms, environment 0ms, prepare 42ms)


```

---

## 6. As-built (intégral)

# As-built — Continuité cognitive Nora, historique long et D4 (ML4C)

**Date :** 14 novembre 2026
**Candidat base :** `67bf6b0b` (produit) — worktree local `fix/next-semantic-intent-convergence-20261112` (= tip `origin/build/next-ml4c-functional-convergence`)
**Conception source :** V0.7 `cadrage-correctif-continuite-pilote-nora-documents.md` @ `86377fde` blob `7d289670`
**Statut :** IMPLEMENTED CANDIDATE — preuves DET/PG/BROWSER locales ; LIVE NOT PROVEN
**STABLE / release :** NOT AVAILABLE — NO RELEASE

## 1. Objet livré

Capacité intégrée : Nora peut rechercher/relire l’historique autorisé (O-01), qualifier sémantiquement (O-02 via Nora, pas de routeur lexical), transporter une proposition documentaire exacte distincte de `replyDraft` (O-03), admettre/sceller une commande documentaire avant effet (O-04), exécuter CREATE/REVISE D4 atomiques/idempotents (O-05), avec UX minimale fil long (O-06).

## 2. Responsabilités respectées

| Domaine | Rôle effectif |
| --- | --- |
| D1 | Droits Pilote / préparation / projet — portée historique reconstruite serveur |
| D2 | Création projet inchangée ; pas de fuite inter-projets via history tools |
| D3 | Qualification typée + outils history ; binding scellé dans `conversation_turn_commands.result_json` |
| D4 | Mutations uniquement via `document/service` (CREATE TX unique, REVISE + fence + fingerprint) |
| D5/D6 | Aucune HumanDecision implicite depuis l’historique |
| UX | Composeur sticky (`fig-composer-sticky`) sur fil long |

## 3. Modules

| Module | Rôle |
| --- | --- |
| `web/src/domains/conversation/history-tools.ts` | Portée autorisée, search keyset, read exact |
| `web/src/domains/conversation/history-tools-sdk.ts` | Wrappers Agents SDK |
| `web/src/domains/conversation/document-command.ts` | Admit / SHA / seal / apply / reconcile |
| `web/src/domains/conversation/turn-command.ts` | `stashDocumentCommandBinding` + préservation au commit terminal |
| `web/src/domains/conversation/semantic-qualification.ts` | `documentProposal` optionnel (≤100k) ≠ `replyDraft` (≤12k) |
| `web/src/domains/conversation/cognitive-policy.ts` | Allowlist history tools |
| `web/src/domains/conversation/nora-adapter.ts` | Branche outils history + consignes proposition |
| `web/src/domains/conversation/service.ts` | CREATE/REVISE via admit+seal ; materialize fence si besoin |
| `web/src/domains/document/service.ts` | CREATE documents+1ʳᵉ révision même TX ; fence REVISE ; fingerprint |
| `web/src/components/figma/NoraConversation.tsx` + `tokens.css` | Shell fil + composeur sticky |

## 4. Tables / contraintes utilisées (aucune migration structurante)

- `messages` + `messages_conversation_ordinal_uidx`
- `conversation_turn_commands` + clés/ops/owner token indexes ; `result_json.documentCommandBindings[]`
- `documents` + `documents_prep_owner_corr_uidx` (création)
- `document_revisions` + `document_revisions_doc_rev_uidx` + `document_revisions_corr_uidx`

**PG-01 :** indexes/contraintes présents sur DEV `:5433/sfia_next_dev` et lane mutative `sfia_next_e2e` (rewrite Vitest).

## 5. Interfaces

### History

- `resolveAuthorizedHistoryScope({ pilotId, preparationId })`
- `searchConversationHistory({ scope, query?, cursor?, pageSize? })` — keyset, pas OFFSET seul
- `readConversationMessages({ scope, messageIds, fragment? })`

### Document command

- `admitDocumentCommand(...)` → binding + `contentSha256` / `payloadSha256` / `correlationKey`
- `sealAndApplyDocumentCommand({ pilotId, fence, binding })` — stash puis D4
- `resolveAssistantProposal` — fence `sfia-document` sur message assistant COMPLETE
- `reconcileDocumentCommandFromBinding` — rejeu corrélation

## 6. Preuves

| Niveau | Résultat |
| --- | --- |
| DET unit | document-command, semantic documentProposal, cognitive history allowlist, TEMP restitution |
| PG | history-tools HIST-01/05/08 ; document-command CREATE/REVISE/PROP/REC ; ML2 Q10 aligné O-05 fingerprint |
| BROWSER | `ml4c-long-thread-composer.spec.ts` — composeur sticky visible |
| LIVE | **NOT PROVEN** — pas de campagne fournisseur réelle dans ce cycle |
| tsc | `--noEmit` PASS après cast outils hétérogènes |

## 7. Préflights

| Gate | Verdict |
| --- | --- |
| ENV-01 | DEV `127.0.0.1:5433/sfia_next_dev` ; mutative tests → `sfia_next_e2e` |
| PG-01 | PASS — indexes/uniques documentaires et turn commands présents |
| SDK-01 | `@openai/agents@0.21.0` installé ; `documentProposal` dans outputType Zod ; transport intégral aussi via fence same-turn ; **LIVE large payload non mesuré** |
| REC-01 | Binding pré-effet dans `result_json` ; préservé au commit ; tests seal/ownership/concurrence |

## 8. Réserves / dettes

1. LIVE Nora (outils history + proposition longue + D4) non prouvé.
2. Corpus HIST 300+ messages non rejoué en masse (couverture structurelle + ~30 msgs).
3. Branche locale nommée `fix/...` alors que tip produit distant est `build/next-ml4c-functional-convergence` au même SHA base `67bf6b0b`.
4. Aucun push produit / PR / RECETTE / STABLE / ADOPTED dans ce cycle.

## 9. Exit

Promotion, Gate C, nouvelle campagne RECETTE et ADOPTED restent décisions Morris hors mandat.


---

## 7. Delivery history (tête)

```
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-NORA-DOCUMENTS

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~09:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Continuité cognitive Nora, historique long et création/révision documentaire D4 |
| Type | EVOL Critical integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local) = tip `origin/build/next-ml4c-functional-convergence@67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Lane | DEV `:5433` + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | history-tools + SDK tools ; documentProposal ; document-command admit/seal ; CREATE atomique + REVISE fence/fingerprint ; UX composeur sticky ; as-built |
| Schema | unchanged (indexes existants utilisés) |
| Tests | unit 272 PASS ; PG history+document-command 11 PASS ; ML2 Q10 O-05 PASS ; Playwright composer PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~19:20 CET (Europe/Paris) |
| Macro-lot | ML4C R5 — gardes finales cible durable (`*` / kind D6) + freeze RECETTE |
| Type | EVOL Critical corrective + mise à disposition RECETTE (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` |
| Lane | DEV/E2E tests ; RECETTE figée après CI GREEN (campagne ML4C-UAT-2026-11-12) |
| Changes | `restrictionTargetMatchesHint` fail-closed vs globale ; LIFT exige hint durable ; `resolveReviseDecisionTarget` exige RECORD_DECISION ; tests G01–G05 / D01–D07 |
| Schema | unchanged |
| Tests | unit 252 PASS (248+4) ; PG 336 PASS (324+12 G/D) ; Playwright 25 PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 puis freeze RECETTE si CI GREEN |

## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

| Field | Value |
| --- | --- |
```

---

## 8. Diff produit

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ec4ab254..ee34510f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-NORA-DOCUMENTS
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~09:30 CET (Europe/Paris) |
+| Macro-lot | ML4C — Continuité cognitive Nora, historique long et création/révision documentaire D4 |
+| Type | EVOL Critical integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` (local) = tip `origin/build/next-ml4c-functional-convergence@67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Lane | DEV `:5433` + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | history-tools + SDK tools ; documentProposal ; document-command admit/seal ; CREATE atomique + REVISE fence/fingerprint ; UX composeur sticky ; as-built |
+| Schema | unchanged (indexes existants utilisés) |
+| Tests | unit 272 PASS ; PG history+document-command 11 PASS ; ML2 Q10 O-05 PASS ; Playwright composer PASS ; LIVE NOT PROVEN |
+| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |
+
 ## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 7341a857..cf3c2517 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -43,74 +43,78 @@ export function NoraConversation(props: {
               <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
             ) : null}
           </div>
-          <div className="space-y-3 max-h-[56vh] overflow-auto pr-1" data-testid="nora-thread">
-            {n === 0 ? (
-              <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
-                <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
-                Première conversation — écrivez pour démarrer le fil du projet. Aucun message
-                fictif n&apos;est prérempli.
-              </div>
-            ) : null}
-            {props.messages.map((m) => (
-              <article
-                key={m.id}
-                className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
-              >
-                <div className="text-xs muted mb-1">
-                  {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
+          <div className="fig-nora-thread-shell" data-testid="nora-thread-shell">
+            <div className="space-y-3 max-h-[56vh] overflow-auto pr-1" data-testid="nora-thread">
+              {n === 0 ? (
+                <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
+                  <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
+                  Première conversation — écrivez pour démarrer le fil du projet. Aucun message
+                  fictif n&apos;est prérempli.
                 </div>
-                {m.role === "assistant" ? (
-                  <SafeMarkdown content={m.content} />
-                ) : (
-                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-                )}
-              </article>
-            ))}
-            {props.activity === "preparing" ? (
-              <div className="fig-alert" role="status">
-                Nora prépare une réponse…
-              </div>
-            ) : null}
-          </div>
-          <div className="fig-composer">
-            <textarea
-              className="textarea"
-              value={props.draft}
-              onChange={(e) => props.onDraft(e.target.value)}
-              placeholder="Écrire à Nora…"
-              aria-label="Message à Nora"
-              data-testid="thread-draft"
-            />
-            <div className="flex flex-wrap gap-2">
-              <button
-                className="btn"
-                disabled={props.busy || !props.draft.trim()}
-                onClick={props.onSend}
-                data-testid="thread-send"
-              >
-                Envoyer
-              </button>
-              <span className="text-xs muted self-center">Joindre un élément · non requis</span>
+              ) : null}
+              {props.messages.map((m) => (
+                <article
+                  key={m.id}
+                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                >
+                  <div className="text-xs muted mb-1">
+                    {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
+                  </div>
+                  {m.role === "assistant" ? (
+                    <SafeMarkdown content={m.content} />
+                  ) : (
+                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
+                  )}
+                </article>
+              ))}
+              {props.activity === "preparing" ? (
+                <div className="fig-alert" role="status">
+                  Nora prépare une réponse…
+                </div>
+              ) : null}
             </div>
-            {props.unresolvedPending && props.onReconcile ? (
-              <div className="space-y-1" data-testid="thread-pending-banner">
-                <p className="text-xs muted">Tentative non résolue — réconcilier avant un nouveau tour.</p>
+            <div className="fig-composer fig-composer-sticky" data-testid="nora-composer">
+              <textarea
+                className="textarea"
+                value={props.draft}
+                onChange={(e) => props.onDraft(e.target.value)}
+                placeholder="Écrire à Nora…"
+                aria-label="Message à Nora"
+                data-testid="thread-draft"
+              />
+              <div className="flex flex-wrap gap-2">
                 <button
-                  type="button"
-                  className="btn secondary"
-                  disabled={props.busy}
-                  data-testid="thread-reconcile-pending"
-                  onClick={props.onReconcile}
+                  className="btn"
+                  disabled={props.busy || !props.draft.trim()}
+                  onClick={props.onSend}
+                  data-testid="thread-send"
                 >
-                  Réconcilier la tentative en cours
+                  Envoyer
                 </button>
+                <span className="text-xs muted self-center">Joindre un élément · non requis</span>
               </div>
-            ) : null}
-            {props.status ? (
-              <p className="text-xs muted" data-testid="thread-nora-status">
-                {props.status}
-              </p>
-            ) : null}
+              {props.unresolvedPending && props.onReconcile ? (
+                <div className="space-y-1" data-testid="thread-pending-banner">
+                  <p className="text-xs muted">
+                    Tentative non résolue — réconcilier avant un nouveau tour.
+                  </p>
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    disabled={props.busy}
+                    data-testid="thread-reconcile-pending"
+                    onClick={props.onReconcile}
+                  >
+                    Réconcilier la tentative en cours
+                  </button>
+                </div>
+              ) : null}
+              {props.status ? (
+                <p className="text-xs muted" data-testid="thread-nora-status">
+                  {props.status}
+                </p>
+              ) : null}
+            </div>
           </div>
         </div>
       </section>
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 2b2b75f9..922c422d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -232,6 +232,20 @@
   background: #0c1018;
 }

+/* O-06 — long-thread composer remains reachable while the journal scrolls. */
+.fig-nora-thread-shell {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  min-height: 0;
+}
+.fig-composer-sticky {
+  position: sticky;
+  bottom: 0;
+  z-index: 2;
+  background: #0c1018;
+}
+
 .fig-two-col {
   display: grid;
   grid-template-columns: minmax(0, 800fr) minmax(0, 510fr);
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index b45fc144..14177c86 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -85,6 +85,8 @@ export type CognitivePolicy = {
   toolAllowlist: Array<
     | "search_project_resources"
     | "read_project_document_revision"
+    | "search_conversation_history"
+    | "read_conversation_messages"
     | "list_project_git_sources"
     | "read_git_file"
     | "list_git_refs"
@@ -208,6 +210,8 @@ export function buildCognitivePolicy(
   const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
     "search_project_resources",
     "read_project_document_revision",
+    "search_conversation_history",
+    "read_conversation_messages",
     "list_project_git_sources",
     "read_git_file",
     "list_git_refs",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 9bc4de72..03c13221 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -389,7 +389,8 @@ async function runLiveWithTools(
     remainingChars: policy.budgets.maxD4CharsReturned,
   };

-  let tools: Awaited<ReturnType<typeof buildNoraD4Tools>> = [];
+  // Union of D4 / history / git tools — Agent accepts heterogeneous FunctionTool[].
+  let tools: unknown[] = [];
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
     const scope: D4ToolScope = {
       pilotId: input.toolScope.pilotId,
@@ -399,6 +400,18 @@ async function runLiveWithTools(
       budget: initialBudget,
     };
     tools = await buildNoraD4Tools(scope);
+    if (
+      policy.toolAllowlist.includes("search_conversation_history") ||
+      policy.toolAllowlist.includes("read_conversation_messages")
+    ) {
+      const { buildNoraHistoryTools } = await import("./history-tools-sdk");
+      const historyTools = await buildNoraHistoryTools({
+        pilotId: input.toolScope.pilotId,
+        preparationId: input.toolScope.preparationId,
+        budget: initialBudget,
+      });
+      tools = [...tools, ...historyTools];
+    }
     if (input.toolScope.projectId) {
       const gitTools = await buildNoraGitReadTools({
         pilotId: input.toolScope.pilotId,
@@ -416,11 +429,13 @@ async function runLiveWithTools(
     "",
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
-    "- replyDraft = texte destiné au Pilote (français, Markdown utile).",
+    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
+    "- documentProposal (optionnel) = { title, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000.",
     "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
     "- REQUEST_EFFECT uniquement pour une demande positive d'effet ; jamais pour négation, how-to, citation, hypothèse.",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Une qualification n'est PAS une autorisation ni une HumanDecision.",
+    "- Utilise search_conversation_history / read_conversation_messages pour retrouver des sources anciennes avant d'affirmer une absence.",
     "- Ne place aucun diagnostic technique (clientIntentKey, step, capability status) dans replyDraft.",
   ].join("\n");

@@ -431,7 +446,8 @@ async function runLiveWithTools(
     modelSettings: {
       reasoning: { effort: policy.effortRequested },
     },
-    tools,
+    // Heterogeneous D4 + history + git tool schemas; SDK Tool typing is per-schema.
+    tools: tools as ConstructorParameters<typeof Agent>[0]["tools"],
     outputType: NoraTurnQualificationSchema,
   });

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 76014f72..3eecbfb2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -95,6 +95,14 @@ export const QualifiedIntentItemSchema = z.object({
 });
 export type QualifiedIntentItem = z.infer<typeof QualifiedIntentItemSchema>;

+/** O-03 — typed document payload distinct from replyDraft (max D4 = 100_000). */
+export const DocumentProposalSchema = z
+  .object({
+    title: z.string().min(1).max(400),
+    contentMarkdown: z.string().min(1).max(100_000),
+  })
+  .strict();
+
 export const NoraTurnQualificationSchema = z.object({
   schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
   status: QualificationStatusSchema,
@@ -102,6 +110,7 @@ export const NoraTurnQualificationSchema = z.object({
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
+  documentProposal: DocumentProposalSchema.optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index bbab5da7..85622a6d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -10,11 +10,13 @@ import {
   reconstituteConfirmedD4Effects,
   selectRelevantKnowledgeContext,
 } from "@/domains/knowledge/service";
+import { listDocuments } from "@/domains/document/service";
 import {
-  listDocuments,
-  reviseDocument,
-  savePreparationDocument,
-} from "@/domains/document/service";
+  admitDocumentCommand,
+  contentSha256,
+  proposalFromStructured,
+  sealAndApplyDocumentCommand,
+} from "@/domains/conversation/document-command";
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
@@ -927,8 +929,55 @@ export async function postUserMessageAndNora(
       }

       if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
-        const extracted = extractContractualDocumentProposal(reply.content);
-        if (!extracted.ok) {
+        // Prefer typed documentProposal (O-03); fall back to fence in reply content.
+        const structured = qualification.documentProposal
+          ? proposalFromStructured(qualification.documentProposal)
+          : null;
+        let extracted = extractContractualDocumentProposal(reply.content);
+        let createBlocked: string | null = null;
+        if (structured && !extracted.ok) {
+          // Materialize same-turn snapshot into contractual fence for terminal message parity.
+          const fence = `\`\`\`sfia-document\n# ${structured.title}\n\n${structured.contentMarkdown.replace(/^\n+/, "")}\n\`\`\`\n`;
+          reply.content = `${reply.content.trim()}\n\n${fence}`;
+          extracted = extractContractualDocumentProposal(reply.content);
+        }
+        if (structured && extracted.ok) {
+          const fenceSha = contentSha256(extracted.title, extracted.content);
+          if (
+            structured.contentMarkdown.trim() !== extracted.content.trim() &&
+            structured.contentSha256 !== fenceSha
+          ) {
+            createBlocked = "PROPOSAL_SNAPSHOT_MISMATCH";
+          }
+        }
+        if (createBlocked) {
+          documentSave = {
+            status: "FAILED",
+            reason: createBlocked,
+            act: "CREATE",
+          };
+          emitDocumentProposalObs({
+            requestId,
+            operationId: reserved.operationId,
+            generationId: reply.generationId,
+            act: "CREATE",
+            extracted: extracted.ok
+              ? extracted
+              : {
+                  ok: false,
+                  reason: "DOCUMENT_PROPOSAL_AMBIGUOUS",
+                  path: "ambiguous",
+                  fenceCount: 0,
+                  proposalChars: 0,
+                  proposalDigest16: null,
+                  bodyEndsWithNewline: false,
+                  sectionCount: 0,
+                },
+            refuseCode: createBlocked,
+            d4Attempted: false,
+            d4Effect: null,
+          });
+        } else if (!extracted.ok) {
           documentSave = {
             status: "FAILED",
             reason: extracted.reason,
@@ -946,38 +995,58 @@ export async function postUserMessageAndNora(
           });
         } else {
           try {
-            const saved = await savePreparationDocument(
-              pilotId,
+            const createIntent =
+              effectIntents(qualification).find((i) => i.capabilityId === "d4.create_document") ??
+              effectIntents(qualification)[0];
+            const admitted = admitDocumentCommand({
+              commandId: reserved.commandId,
+              operationId: reserved.operationId,
+              userMessageId: reserved.userMessageId,
+              qualifiedIntentId: createIntent?.id ?? "i-create-document",
+              action: "CREATE",
               preparationId,
-              extracted.title,
-              extracted.content,
-              undefined,
-              {
-                correlationKey: opts?.correlationKey
-                  ? `doc:${opts.correlationKey}`
-                  : missionIntent.wantsPublish
-                    ? missionKeys.document
-                    : `doc:${reply.generationId}`,
-                provenance: {
-                  sourceKind: "nora",
-                  generationId: reply.generationId,
-                  userMessageId: reserved.userMessageId,
-                  explicitRequest: true,
-                  act: "CREATE",
-                },
-                scope: "document",
-                turnFence: {
+              source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
+              title: extracted.title,
+              contentMarkdown: extracted.content,
+            });
+            if (!admitted.ok) {
+              documentSave = {
+                status: "FAILED",
+                reason: admitted.reason,
+                act: "CREATE",
+              };
+            } else {
+              // Prefer sealed correlation identity over generation-only keys.
+              admitted.binding.correlationKey = opts?.correlationKey
+                ? `doc:${opts.correlationKey}`
+                : missionIntent.wantsPublish
+                  ? missionKeys.document
+                  : admitted.binding.correlationKey;
+              const sealed = await sealAndApplyDocumentCommand({
+                pilotId,
+                fence: {
                   commandId: reserved.commandId,
                   ownerToken: reserved.ownerToken,
                   beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                 },
-              },
-            );
-            documentSave = { ...saved, act: "CREATE" };
+                binding: admitted.binding,
+              });
+              if (!sealed.sealApplied) {
+                documentSave = {
+                  status: "FAILED",
+                  reason: "BINDING_SEAL_FAILED",
+                  act: "CREATE",
+                };
+              } else {
+                const saved = sealed.effect;
+                documentSave = { ...saved, act: "CREATE" };
+              }
+            }
             if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
               ownershipLostBeforeD4 = true;
               documentSave = null;
             } else if (
+              documentSave &&
               documentSave.status !== "AVAILABLE" &&
               documentSave.status !== "CONFLICT"
             ) {
@@ -1112,33 +1181,66 @@ export async function postUserMessageAndNora(
                     d4Effect: null,
                   });
                 } else {
-                  const correlationKey = opts?.correlationKey
-                    ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
-                    : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
-                  const revised = await reviseDocument(pilotId, preparationId, {
+                  const reviseIntent =
+                    effectIntents(qualification).find(
+                      (i) => i.capabilityId === "d4.revise_document",
+                    ) ?? effectIntents(qualification)[0];
+                  const admitted = admitDocumentCommand({
+                    commandId: reserved.commandId,
+                    operationId: reserved.operationId,
+                    userMessageId: reserved.userMessageId,
+                    qualifiedIntentId: reviseIntent?.id ?? "i-revise-document",
+                    action: "REVISE",
+                    preparationId,
                     documentId: target.documentId,
                     baseRevisionId: target.baseRevisionId,
+                    sectionHint: documentAct.sectionHint,
+                    source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
+                    title: target.title,
                     contentMarkdown: merged.content,
-                    correlationKey,
-                    scope: documentAct.sectionHint ? "section" : "document",
-                    sectionHint: documentAct.sectionHint ?? undefined,
-                    provenance: {
-                      sourceKind: "nora",
-                      generationId: reply.generationId,
-                      userMessageId: reserved.userMessageId,
-                      explicitRequest: true,
-                      act: "REVISE",
-                      sectionHint: documentAct.sectionHint,
-                    },
                   });
-                  documentSave = {
-                    ...revised,
-                    act: "REVISE",
-                    baseRevisionId:
-                      "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
-                        ? revised.baseRevisionId
-                        : target.baseRevisionId,
-                  };
+                  if (!admitted.ok) {
+                    documentSave = {
+                      status: "FAILED",
+                      reason: admitted.reason,
+                      documentId: target.documentId,
+                      baseRevisionId: target.baseRevisionId,
+                      act: "REVISE",
+                    };
+                  } else {
+                    admitted.binding.correlationKey = opts?.correlationKey
+                      ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
+                      : admitted.binding.correlationKey;
+                    const sealed = await sealAndApplyDocumentCommand({
+                      pilotId,
+                      fence: {
+                        commandId: reserved.commandId,
+                        ownerToken: reserved.ownerToken,
+                        beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+                      },
+                      binding: admitted.binding,
+                    });
+                    if (!sealed.sealApplied) {
+                      documentSave = {
+                        status: "FAILED",
+                        reason: "BINDING_SEAL_FAILED",
+                        documentId: target.documentId,
+                        baseRevisionId: target.baseRevisionId,
+                        act: "REVISE",
+                      };
+                    } else {
+                      const revised = sealed.effect;
+                      documentSave = {
+                        ...revised,
+                        act: "REVISE",
+                        baseRevisionId:
+                          "baseRevisionId" in revised &&
+                          typeof (revised as { baseRevisionId?: string }).baseRevisionId === "string"
+                            ? (revised as { baseRevisionId: string }).baseRevisionId
+                            : target.baseRevisionId,
+                      };
+                    }
+                  }
                   if (
                     documentSave.status !== "AVAILABLE" &&
                     documentSave.status !== "CONFLICT" &&
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index e2c0b349..7f38c4bf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -666,6 +666,85 @@ export async function stashTurnQualification(args: {
   });
 }

+/**
+ * Seal a document command binding into resultJson before any D4 mutation (O-04/O-05).
+ * Appends under documentCommandBindings[]; refuses overwrite of an existing same correlationKey.
+ */
+export async function stashDocumentCommandBinding(args: {
+  commandId: string;
+  ownerToken: string;
+  binding: Record<string, unknown>;
+}): Promise<{ applied: boolean }> {
+  return db.transaction(async (tx) => {
+    await tx.execute(
+      sql`select id from conversation_turn_commands
+          where id = ${args.commandId}
+            and owner_token = ${args.ownerToken}
+            and status in ('RUNNING', 'ACCEPTED')
+          for update`,
+    );
+    const owned = (
+      await tx
+        .select({
+          id: conversationTurnCommands.id,
+          resultJson: conversationTurnCommands.resultJson,
+        })
+        .from(conversationTurnCommands)
+        .where(
+          and(
+            eq(conversationTurnCommands.id, args.commandId),
+            eq(conversationTurnCommands.ownerToken, args.ownerToken),
+            sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!owned) return { applied: false };
+
+    let prev: Record<string, unknown> = {};
+    if (owned.resultJson) {
+      try {
+        prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
+      } catch {
+        return { applied: false };
+      }
+    }
+    const existing = Array.isArray(prev.documentCommandBindings)
+      ? (prev.documentCommandBindings as Array<Record<string, unknown>>)
+      : [];
+    const corr = typeof args.binding.correlationKey === "string" ? args.binding.correlationKey : "";
+    if (corr && existing.some((b) => b.correlationKey === corr)) {
+      const prior = existing.find((b) => b.correlationKey === corr)!;
+      const priorPayload = prior.payloadSha256;
+      if (priorPayload !== args.binding.payloadSha256) {
+        return { applied: false };
+      }
+      // Identical binding already sealed — treat as applied without rewrite.
+      return { applied: true };
+    }
+    const merged = {
+      ...prev,
+      documentCommandBindings: [...existing, args.binding],
+      documentCommandBindingStashedAt: new Date(turnClock.nowMs()).toISOString(),
+    };
+    const updated = await tx
+      .update(conversationTurnCommands)
+      .set({
+        resultJson: JSON.stringify(merged),
+        updatedAt: new Date(turnClock.nowMs()),
+      })
+      .where(
+        and(
+          eq(conversationTurnCommands.id, args.commandId),
+          eq(conversationTurnCommands.ownerToken, args.ownerToken),
+          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+        ),
+      )
+      .returning({ id: conversationTurnCommands.id });
+    return { applied: Boolean(updated[0]) };
+  });
+}
+
 /**
  * Atomic terminal commit under ownership fence:
  * FOR UPDATE lock → optional assistant INSERT → CAS UPDATE in the same short TX.
@@ -725,7 +804,7 @@ export async function commitTurnTerminal(args: {
         return { applied: false };
       }

-      // T-03 / Lot B: preserve stashed semanticQualification across ALL terminals.
+      // T-03 / Lot B + O-04: preserve stashed semanticQualification and documentCommandBindings.
       let terminalJson = args.resultJson ?? null;
       if (owned.resultJson) {
         try {
@@ -735,8 +814,15 @@ export async function commitTurnTerminal(args: {
             if (prev.semanticQualification !== undefined && next.semanticQualification === undefined) {
               next.semanticQualification = prev.semanticQualification;
               next.semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
-              terminalJson = JSON.stringify(next);
             }
+            if (
+              prev.documentCommandBindings !== undefined &&
+              next.documentCommandBindings === undefined
+            ) {
+              next.documentCommandBindings = prev.documentCommandBindings;
+              next.documentCommandBindingStashedAt = prev.documentCommandBindingStashedAt;
+            }
+            terminalJson = JSON.stringify(next);
           } else {
             terminalJson = owned.resultJson;
           }
diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index 6d079275..7601ae57 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -220,54 +220,9 @@ export async function savePreparationDocument(

   let docId = documentId;
   let ownedTitle = titleFinal;
-  if (!docId) {
-    docId = newId("doc");
-    try {
-      await db.insert(documents).values({
-        id: docId,
-        preparationId,
-        projectId: ctx.project?.id ?? null,
-        ownerPilotId: pilotId,
-        title: titleFinal,
-        creationCorrelationKey: opts?.correlationKey ?? null,
-      });
-    } catch (e) {
-      // Concurrent create with same correlation key — reconcile WITH fingerprint
-      if (opts?.correlationKey) {
-        const raced = await findByCreationCorrelation(
-          pilotId,
-          preparationId,
-          opts.correlationKey,
-        );
-        if (raced) {
-          const priorRev =
-            (await findRevisionByCorrelation(raced.id, opts.correlationKey)) ??
-            (await waitForRevisionByCorrelation(raced.id, opts.correlationKey));
-          if (priorRev) {
-            return reconcilePriorRevision({
-              prior: priorRev,
-              documentId: raced.id,
-              documentTitle: raced.title,
-              expectedFp: fp,
-            });
-          }
-          return {
-            status: "UNKNOWN" as const,
-            reason: "CREATION_IN_FLIGHT",
-            documentId: raced.id,
-          };
-        }
-        return {
-          status: "FAILED" as const,
-          reason: e instanceof Error ? e.message : "document create failed",
-        };
-      }
-      return {
-        status: "FAILED" as const,
-        reason: e instanceof Error ? e.message : "document create failed",
-      };
-    }
-  } else {
+
+  // Existing-document path: ownership check before TX.
+  if (docId) {
     const owned = (
       await db
         .select()
@@ -283,26 +238,25 @@ export async function savePreparationDocument(
     )[0];
     if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
     ownedTitle = owned.title;
-  }
-
-  // Revision-level idempotence for known document
-  if (opts?.correlationKey) {
-    const prior = await findRevisionByCorrelation(docId, opts.correlationKey);
-    if (prior) {
-      return reconcilePriorRevision({
-        prior,
-        documentId: docId,
-        documentTitle: ownedTitle,
-        expectedFp: fp,
-      });
+    if (opts?.correlationKey) {
+      const prior = await findRevisionByCorrelation(docId, opts.correlationKey);
+      if (prior) {
+        return reconcilePriorRevision({
+          prior,
+          documentId: docId,
+          documentTitle: ownedTitle,
+          expectedFp: fp,
+        });
+      }
     }
   }

   try {
     return await db.transaction(async (tx) => {
+      // O-05: ownership fence BEFORE any document/revision mutation.
       if (opts?.turnFence) {
-        const owned = await assertTurnFenceInTx(tx, opts.turnFence);
-        if (!owned) {
+        const fenceOwned = await assertTurnFenceInTx(tx, opts.turnFence);
+        if (!fenceOwned) {
           return {
             status: "FAILED" as const,
             reason: "TURN_OWNERSHIP_LOST",
@@ -311,9 +265,55 @@ export async function savePreparationDocument(
         }
       }

-      await tx.execute(
-        sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
-      );
+      // CREATE: insert documents + first revision in the SAME transaction (no orphan row).
+      if (!docId) {
+        docId = newId("doc");
+        try {
+          await tx.insert(documents).values({
+            id: docId,
+            preparationId,
+            projectId: ctx.project?.id ?? null,
+            ownerPilotId: pilotId,
+            title: titleFinal,
+            creationCorrelationKey: opts?.correlationKey ?? null,
+          });
+        } catch (e) {
+          if (opts?.correlationKey) {
+            const raced = await findByCreationCorrelation(
+              pilotId,
+              preparationId,
+              opts.correlationKey,
+            );
+            if (raced) {
+              const priorRev =
+                (await findRevisionByCorrelation(raced.id, opts.correlationKey)) ??
+                (await waitForRevisionByCorrelation(raced.id, opts.correlationKey));
+              if (priorRev) {
+                return reconcilePriorRevision({
+                  prior: priorRev,
+                  documentId: raced.id,
+                  documentTitle: raced.title,
+                  expectedFp: fp,
+                });
+              }
+              return {
+                status: "UNKNOWN" as const,
+                reason: "CREATION_IN_FLIGHT",
+                documentId: raced.id,
+              };
+            }
+          }
+          return {
+            status: "FAILED" as const,
+            reason: e instanceof Error ? e.message : "document create failed",
+          };
+        }
+        ownedTitle = titleFinal;
+      } else {
+        await tx.execute(
+          sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
+        );
+      }

       if (opts?.correlationKey) {
         const prior = (
@@ -393,22 +393,28 @@ export async function savePreparationDocument(
   } catch (e) {
     // Unique violation on correlation → reconcile WITH fingerprint (same rule as race path)
     if (opts?.correlationKey) {
-      const prior =
-        (await findRevisionByCorrelation(docId, opts.correlationKey)) ??
-        (await waitForRevisionByCorrelation(docId, opts.correlationKey));
-      if (prior) {
-        return reconcilePriorRevision({
-          prior,
-          documentId: docId,
-          documentTitle: ownedTitle,
-          expectedFp: fp,
-        });
+      const racedDoc =
+        (docId
+          ? { id: docId, title: ownedTitle }
+          : await findByCreationCorrelation(pilotId, preparationId, opts.correlationKey)) ?? null;
+      if (racedDoc) {
+        const prior =
+          (await findRevisionByCorrelation(racedDoc.id, opts.correlationKey)) ??
+          (await waitForRevisionByCorrelation(racedDoc.id, opts.correlationKey));
+        if (prior) {
+          return reconcilePriorRevision({
+            prior,
+            documentId: racedDoc.id,
+            documentTitle: "title" in racedDoc ? racedDoc.title : ownedTitle,
+            expectedFp: fp,
+          });
+        }
+        return {
+          status: "UNKNOWN" as const,
+          reason: "CREATION_IN_FLIGHT",
+          documentId: racedDoc.id,
+        };
       }
-      return {
-        status: "UNKNOWN" as const,
-        reason: "CREATION_IN_FLIGHT",
-        documentId: docId,
-      };
     }
     return {
       status: "FAILED" as const,
@@ -434,6 +440,11 @@ export async function reviseDocument(
     sectionHint?: string;
     provenance?: Record<string, unknown>;
     injectFailureAfterLock?: boolean;
+    /** Symmetric with CREATE — abort unless turn still owned. */
+    turnFence?: TurnOwnershipFence;
+    /** Title used for fingerprint reconcile on replay (defaults to owned document title). */
+    expectedTitle?: string;
+    expectedContentSha256?: string;
   },
 ) {
   if (input.contentMarkdown.length > MAX_DOC_CHARS) {
@@ -442,6 +453,18 @@ export async function reviseDocument(

   try {
     return await db.transaction(async (tx) => {
+      // Lock order: turn command / ownership → document → mutation.
+      if (input.turnFence) {
+        const fenceOwned = await assertTurnFenceInTx(tx, input.turnFence);
+        if (!fenceOwned) {
+          return {
+            status: "FAILED" as const,
+            reason: "TURN_OWNERSHIP_LOST",
+            rolledBack: true as const,
+          };
+        }
+      }
+
       await tx.execute(
         sql`select id from documents where id = ${input.documentId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -461,7 +484,11 @@ export async function reviseDocument(
       )[0];
       if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };

-      // Idempotent correlation inside the lock
+      const expectedFp =
+        input.expectedContentSha256 ??
+        contentFingerprint(input.expectedTitle ?? owned.title, input.contentMarkdown);
+
+      // Idempotent correlation inside the lock — fingerprint must match.
       const prior = (
         await tx
           .select()
@@ -475,13 +502,12 @@ export async function reviseDocument(
           .limit(1)
       )[0];
       if (prior) {
-        return {
-          status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+        return reconcilePriorRevision({
+          prior,
           documentId: input.documentId,
-          revisionId: prior.id,
-          revisionNumber: prior.revisionNumber,
-          idempotentReplay: true as const,
-        };
+          documentTitle: input.expectedTitle ?? owned.title,
+          expectedFp,
+        });
       }

       const base = (
@@ -543,6 +569,7 @@ export async function reviseDocument(
         provenanceJson: JSON.stringify({
           ...(input.provenance ?? {}),
           sectionHint: input.sectionHint ?? null,
+          contentFingerprint: expectedFp,
         }),
         scope: input.scope ?? "section",
       });
diff --git a/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
index 84613cdb..c93ed594 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
@@ -127,17 +127,29 @@ describe("ML2 D4 knowledge + document concurrency (PG)", () => {
     });
     expect(conflict.status).toBe("CONFLICT");

+    // O-05: same correlationKey + same payload → idempotent AVAILABLE; different payload → CONFLICT.
     const replay = await reviseDocument(pilotId, prep.id, {
       documentId: v1.documentId,
       baseRevisionId: v2.revisionId,
-      contentMarkdown: "ignored on replay",
+      contentMarkdown: "# Spec\n\nSection A révisée\n",
       correlationKey: "corr-rev-1",
     });
     expect(replay.status).toBe("AVAILABLE");
     if (replay.status !== "AVAILABLE") throw new Error("replay");
-    expect(replay.idempotentReplay).toBe(true);
+    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);
     expect(replay.revisionId).toBe(v2.revisionId);

+    const mismatch = await reviseDocument(pilotId, prep.id, {
+      documentId: v1.documentId,
+      baseRevisionId: v2.revisionId,
+      contentMarkdown: "different payload same key",
+      correlationKey: "corr-rev-1",
+    });
+    expect(mismatch.status).toBe("CONFLICT");
+    if (mismatch.status === "CONFLICT") {
+      expect(mismatch.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
+    }
+
     const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
     expect(list.revisions.length).toBeGreaterThanOrEqual(2);
     const cmp = await compareDocumentRevisions(
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 1d443c8f..e896c372 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -505,7 +505,7 @@ Fin.
     if (first.status !== "AVAILABLE" || again.status !== "AVAILABLE") {
       throw new Error("idempotent revise unavailable");
     }
-    expect(again.idempotentReplay).toBe(true);
+    expect("idempotentReplay" in again && again.idempotentReplay).toBe(true);
     expect(again.revisionId).toBe(first.revisionId);
   });

diff --git a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
index acf1b4b1..4bc540ec 100644
--- a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
@@ -75,6 +75,12 @@ describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
     expect(() => resolveProfileType()).toThrow(StudioError);
   });

+  it("toolAllowlist includes conversation history read tools", () => {
+    const p = buildCognitivePolicy("Cherche un message passé sur le budget.", "TEST_BOUNDARY");
+    expect(p.toolAllowlist).toContain("search_conversation_history");
+    expect(p.toolAllowlist).toContain("read_conversation_messages");
+  });
+
   it("maxTurns follows policy budget without silent hard cap of 12", () => {
     const p = buildCognitivePolicy("x".repeat(601), "OPERATIONAL_PROVISIONAL");
     expect(maxTurnsForPolicy(p)).toBe(p.budgets.maxProviderCalls);
diff --git a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
index 20be39ee..f679aa83 100644
--- a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
@@ -142,6 +142,33 @@ describe("semantic qualification envelope", () => {
     expect(projectStudioEffects(ok).wantsFollowOnDocument).toBe(true);
   });

+  it("validateNoraTurnQualification accepts optional documentProposal", () => {
+    const v = validateNoraTurnQualification({
+      schemaVersion: "ml4c-sem-qual-v1",
+      status: "QUALIFIED",
+      goal: "document de cadrage",
+      intents: [
+        {
+          id: "i1",
+          capabilityId: "d4.create_document",
+          mode: "REQUEST_EFFECT",
+          summary: "cadrage",
+          parameters: {},
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      clarifications: [],
+      replyDraft: "Je prépare le document.",
+      documentProposal: {
+        title: "Cadrage",
+        contentMarkdown: "# Cadrage\n\nPérimètre initial.\n",
+      },
+    });
+    expect(v.ok).toBe(true);
+  });
+
   it("deriveThreadTurnKind from semantic modes", () => {
     const dialogue: NoraTurnQualification = {
       schemaVersion: "ml4c-sem-qual-v1",

```

---

## 9. Réserves pour ChatGPT / Morris

1. LIVE NOT PROVEN (outils history + proposition longue + D4 réel fournisseur).
2. Corpus 300+ messages non rejoué en masse (structure + ~30 msgs prouvés).
3. Aucun push produit ; PR #676 inchangée ce cycle.
4. RECETTE/STABLE non mutées ; Gate C / ADOPTED hors mandat.

## 10. Décisions Morris nécessaires (hors exécution Cursor)

- GO push branche produit / mise à jour PR #676
- Campagne LIVE Nora bornée
- Nouvelle RECETTE / Gate C si revue ChatGPT favorable

---

**Fin Review Pack FULL — ML4C Continuité Nora / D4 — 2026-11-14 09:33:21 CET**

---

## 11. Fichiers nouveaux (contenu intégral)

### `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md`

```markdown
# As-built — Continuité cognitive Nora, historique long et D4 (ML4C)

**Date :** 14 novembre 2026
**Candidat base :** `67bf6b0b` (produit) — worktree local `fix/next-semantic-intent-convergence-20261112` (= tip `origin/build/next-ml4c-functional-convergence`)
**Conception source :** V0.7 `cadrage-correctif-continuite-pilote-nora-documents.md` @ `86377fde` blob `7d289670`
**Statut :** IMPLEMENTED CANDIDATE — preuves DET/PG/BROWSER locales ; LIVE NOT PROVEN
**STABLE / release :** NOT AVAILABLE — NO RELEASE

## 1. Objet livré

Capacité intégrée : Nora peut rechercher/relire l’historique autorisé (O-01), qualifier sémantiquement (O-02 via Nora, pas de routeur lexical), transporter une proposition documentaire exacte distincte de `replyDraft` (O-03), admettre/sceller une commande documentaire avant effet (O-04), exécuter CREATE/REVISE D4 atomiques/idempotents (O-05), avec UX minimale fil long (O-06).

## 2. Responsabilités respectées

| Domaine | Rôle effectif |
| --- | --- |
| D1 | Droits Pilote / préparation / projet — portée historique reconstruite serveur |
| D2 | Création projet inchangée ; pas de fuite inter-projets via history tools |
| D3 | Qualification typée + outils history ; binding scellé dans `conversation_turn_commands.result_json` |
| D4 | Mutations uniquement via `document/service` (CREATE TX unique, REVISE + fence + fingerprint) |
| D5/D6 | Aucune HumanDecision implicite depuis l’historique |
| UX | Composeur sticky (`fig-composer-sticky`) sur fil long |

## 3. Modules

| Module | Rôle |
| --- | --- |
| `web/src/domains/conversation/history-tools.ts` | Portée autorisée, search keyset, read exact |
| `web/src/domains/conversation/history-tools-sdk.ts` | Wrappers Agents SDK |
| `web/src/domains/conversation/document-command.ts` | Admit / SHA / seal / apply / reconcile |
| `web/src/domains/conversation/turn-command.ts` | `stashDocumentCommandBinding` + préservation au commit terminal |
| `web/src/domains/conversation/semantic-qualification.ts` | `documentProposal` optionnel (≤100k) ≠ `replyDraft` (≤12k) |
| `web/src/domains/conversation/cognitive-policy.ts` | Allowlist history tools |
| `web/src/domains/conversation/nora-adapter.ts` | Branche outils history + consignes proposition |
| `web/src/domains/conversation/service.ts` | CREATE/REVISE via admit+seal ; materialize fence si besoin |
| `web/src/domains/document/service.ts` | CREATE documents+1ʳᵉ révision même TX ; fence REVISE ; fingerprint |
| `web/src/components/figma/NoraConversation.tsx` + `tokens.css` | Shell fil + composeur sticky |

## 4. Tables / contraintes utilisées (aucune migration structurante)

- `messages` + `messages_conversation_ordinal_uidx`
- `conversation_turn_commands` + clés/ops/owner token indexes ; `result_json.documentCommandBindings[]`
- `documents` + `documents_prep_owner_corr_uidx` (création)
- `document_revisions` + `document_revisions_doc_rev_uidx` + `document_revisions_corr_uidx`

**PG-01 :** indexes/contraintes présents sur DEV `:5433/sfia_next_dev` et lane mutative `sfia_next_e2e` (rewrite Vitest).

## 5. Interfaces

### History

- `resolveAuthorizedHistoryScope({ pilotId, preparationId })`
- `searchConversationHistory({ scope, query?, cursor?, pageSize? })` — keyset, pas OFFSET seul
- `readConversationMessages({ scope, messageIds, fragment? })`

### Document command

- `admitDocumentCommand(...)` → binding + `contentSha256` / `payloadSha256` / `correlationKey`
- `sealAndApplyDocumentCommand({ pilotId, fence, binding })` — stash puis D4
- `resolveAssistantProposal` — fence `sfia-document` sur message assistant COMPLETE
- `reconcileDocumentCommandFromBinding` — rejeu corrélation

## 6. Preuves

| Niveau | Résultat |
| --- | --- |
| DET unit | document-command, semantic documentProposal, cognitive history allowlist, TEMP restitution |
| PG | history-tools HIST-01/05/08 ; document-command CREATE/REVISE/PROP/REC ; ML2 Q10 aligné O-05 fingerprint |
| BROWSER | `ml4c-long-thread-composer.spec.ts` — composeur sticky visible |
| LIVE | **NOT PROVEN** — pas de campagne fournisseur réelle dans ce cycle |
| tsc | `--noEmit` PASS après cast outils hétérogènes |

## 7. Préflights

| Gate | Verdict |
| --- | --- |
| ENV-01 | DEV `127.0.0.1:5433/sfia_next_dev` ; mutative tests → `sfia_next_e2e` |
| PG-01 | PASS — indexes/uniques documentaires et turn commands présents |
| SDK-01 | `@openai/agents@0.21.0` installé ; `documentProposal` dans outputType Zod ; transport intégral aussi via fence same-turn ; **LIVE large payload non mesuré** |
| REC-01 | Binding pré-effet dans `result_json` ; préservé au commit ; tests seal/ownership/concurrence |

## 8. Réserves / dettes

1. LIVE Nora (outils history + proposition longue + D4) non prouvé.
2. Corpus HIST 300+ messages non rejoué en masse (couverture structurelle + ~30 msgs).
3. Branche locale nommée `fix/...` alors que tip produit distant est `build/next-ml4c-functional-convergence` au même SHA base `67bf6b0b`.
4. Aucun push produit / PR / RECETTE / STABLE / ADOPTED dans ce cycle.

## 9. Exit

Promotion, Gate C, nouvelle campagne RECETTE et ADOPTED restent décisions Morris hors mandat.

```

### `projects/sfia-studio-next/web/src/domains/conversation/document-command.ts`

```typescript
/**
 * O-04 — document command admission / binding / D4 orchestration.
 * No autonomous writes: mutations stay in document/service.ts.
 */
import { createHash } from "node:crypto";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
import {
  stashDocumentCommandBinding,
  type TurnOwnershipFence,
} from "@/domains/conversation/turn-command";
import {
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";

export const DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION = "ml4c-doc-cmd-v1" as const;

export type DocumentCommandSource =
  | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
  | { kind: "SAME_TURN_SNAPSHOT"; commandId: string };

export type DocumentProposalExact = {
  title: string;
  contentMarkdown: string;
  contentSha256: string;
};

export type DocumentCommandBinding = {
  schemaVersion: typeof DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION;
  commandId: string;
  operationId: string;
  userMessageId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  source: DocumentCommandSource;
  preparationId: string;
  documentId: string | null;
  baseRevisionId: string | null;
  title: string;
  contentMarkdown: string;
  contentSha256: string;
  payloadSha256: string;
  correlationKey: string;
  sectionHint?: string | null;
};

export type DocumentCommandAdmission =
  | { ok: true; binding: DocumentCommandBinding }
  | { ok: false; verdict: "NOT_EXECUTED" | "CONFLICT" | "FAILED"; reason: string };

export function contentSha256(title: string, contentMarkdown: string): string {
  return createHash("sha256")
    .update(title || "")
    .update("\0")
    .update(contentMarkdown)
    .digest("hex");
}

export function payloadSha256(parts: {
  action: "CREATE" | "REVISE";
  source: DocumentCommandSource;
  preparationId: string;
  documentId: string | null;
  baseRevisionId: string | null;
  sectionHint?: string | null;
  title: string;
  contentSha256: string;
}): string {
  const canonical = JSON.stringify({
    schemaVersion: DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION,
    action: parts.action,
    source: parts.source,
    preparationId: parts.preparationId,
    documentId: parts.documentId,
    baseRevisionId: parts.baseRevisionId,
    sectionHint: parts.sectionHint ?? null,
    title: parts.title,
    contentSha256: parts.contentSha256,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function deriveDocumentCorrelationKey(parts: {
  commandId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  preparationId: string;
  documentId: string | null;
}): string {
  return createHash("sha256")
    .update(
      [
        parts.commandId,
        parts.qualifiedIntentId,
        parts.action,
        parts.preparationId,
        parts.documentId ?? "",
      ].join("|"),
    )
    .digest("hex")
    .slice(0, 48);
}

export function proposalFromStructured(input: {
  title: string;
  contentMarkdown: string;
}): DocumentProposalExact | null {
  const title = input.title.trim();
  const contentMarkdown = input.contentMarkdown;
  if (!title || !contentMarkdown.trim()) return null;
  if (contentMarkdown.length > 100_000) return null;
  return {
    title,
    contentMarkdown,
    contentSha256: contentSha256(title, contentMarkdown),
  };
}

/**
 * Resolve an exact historical assistant proposal (O-03).
 * Rights: message must belong to a conversation owned by the pilot and preparation scope.
 */
export async function resolveAssistantProposal(input: {
  pilotId: string;
  preparationId: string;
  assistantMessageId: string;
}): Promise<
  | { ok: true; proposal: DocumentProposalExact; assistantMessageId: string; generationId: string | null }
  | { ok: false; reason: string }
> {
  const row = (
    await db
      .select({
        id: messages.id,
        content: messages.content,
        status: messages.status,
        role: messages.role,
        generationId: messages.generationId,
        preparationId: conversations.preparationId,
        ownerPilotId: conversations.ownerPilotId,
      })
      .from(messages)
      .innerJoin(conversations, eq(conversations.id, messages.conversationId))
      .where(and(eq(messages.id, input.assistantMessageId)))
      .limit(1)
  )[0];
  if (!row || row.ownerPilotId !== input.pilotId) {
    return { ok: false, reason: "SOURCE_DENIED" };
  }
  if (row.preparationId !== input.preparationId) {
    // Inter-prep write not admitted by current D4 owner controls.
    return { ok: false, reason: "SOURCE_PREPARATION_MISMATCH" };
  }
  if (row.role !== "assistant") {
    return { ok: false, reason: "SOURCE_NOT_ASSISTANT" };
  }
  if (row.status !== "COMPLETE") {
    return { ok: false, reason: "SOURCE_NOT_TERMINAL" };
  }
  const extracted = extractContractualDocumentProposal(row.content);
  if (!extracted.ok) {
    return { ok: false, reason: extracted.reason };
  }
  return {
    ok: true,
    proposal: {
      title: extracted.title,
      contentMarkdown: extracted.content,
      contentSha256: contentSha256(extracted.title, extracted.content),
    },
    assistantMessageId: row.id,
    generationId: row.generationId,
  };
}

export function admitDocumentCommand(input: {
  commandId: string;
  operationId: string;
  userMessageId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  preparationId: string;
  documentId?: string | null;
  baseRevisionId?: string | null;
  sectionHint?: string | null;
  source: DocumentCommandSource;
  title: string;
  contentMarkdown: string;
}): DocumentCommandAdmission {
  const title = input.title.trim();
  const contentMarkdown = input.contentMarkdown;
  if (!input.userMessageId || !input.qualifiedIntentId) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "MISSING_IDENTITIES" };
  }
  if (!title || !contentMarkdown.trim()) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "EMPTY_PROPOSAL" };
  }
  if (contentMarkdown.length > 100_000) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "CONTENT_TOO_LARGE" };
  }
  if (input.action === "REVISE" && (!input.documentId || !input.baseRevisionId)) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
  }
  const cSha = contentSha256(title, contentMarkdown);
  const pSha = payloadSha256({
    action: input.action,
    source: input.source,
    preparationId: input.preparationId,
    documentId: input.documentId ?? null,
    baseRevisionId: input.baseRevisionId ?? null,
    sectionHint: input.sectionHint,
    title,
    contentSha256: cSha,
  });
  const correlationKey = deriveDocumentCorrelationKey({
    commandId: input.commandId,
    qualifiedIntentId: input.qualifiedIntentId,
    action: input.action,
    preparationId: input.preparationId,
    documentId: input.documentId ?? null,
  });
  return {
    ok: true,
    binding: {
      schemaVersion: DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION,
      commandId: input.commandId,
      operationId: input.operationId,
      userMessageId: input.userMessageId,
      qualifiedIntentId: input.qualifiedIntentId,
      action: input.action,
      source: input.source,
      preparationId: input.preparationId,
      documentId: input.documentId ?? null,
      baseRevisionId: input.baseRevisionId ?? null,
      title,
      contentMarkdown,
      contentSha256: cSha,
      payloadSha256: pSha,
      correlationKey,
      sectionHint: input.sectionHint ?? null,
    },
  };
}

export async function sealAndApplyDocumentCommand(input: {
  pilotId: string;
  fence: TurnOwnershipFence;
  binding: DocumentCommandBinding;
}): Promise<{
  sealApplied: boolean;
  effect:
    | Awaited<ReturnType<typeof savePreparationDocument>>
    | Awaited<ReturnType<typeof reviseDocument>>
    | { status: "NOT_EXECUTED"; reason: string };
}> {
  const sealed = await stashDocumentCommandBinding({
    commandId: input.fence.commandId,
    ownerToken: input.fence.ownerToken,
    binding: input.binding,
  });
  if (!sealed.applied) {
    return {
      sealApplied: false,
      effect: { status: "NOT_EXECUTED", reason: "BINDING_SEAL_FAILED" },
    };
  }

  if (input.binding.action === "CREATE") {
    const effect = await savePreparationDocument(
      input.pilotId,
      input.binding.preparationId,
      input.binding.title,
      input.binding.contentMarkdown,
      undefined,
      {
        correlationKey: input.binding.correlationKey,
        turnFence: input.fence,
        provenance: {
          documentCommandBinding: true,
          payloadSha256: input.binding.payloadSha256,
          contentSha256: input.binding.contentSha256,
          source: input.binding.source,
          userMessageId: input.binding.userMessageId,
          qualifiedIntentId: input.binding.qualifiedIntentId,
        },
      },
    );
    return { sealApplied: true, effect };
  }

  const effect = await reviseDocument(input.pilotId, input.binding.preparationId, {
    documentId: input.binding.documentId!,
    baseRevisionId: input.binding.baseRevisionId!,
    contentMarkdown: input.binding.contentMarkdown,
    correlationKey: input.binding.correlationKey,
    scope: input.binding.sectionHint ? "section" : "document",
    sectionHint: input.binding.sectionHint ?? undefined,
    turnFence: input.fence,
    expectedTitle: input.binding.title,
    expectedContentSha256: input.binding.contentSha256,
    provenance: {
      documentCommandBinding: true,
      payloadSha256: input.binding.payloadSha256,
      contentSha256: input.binding.contentSha256,
      source: input.binding.source,
      userMessageId: input.binding.userMessageId,
      qualifiedIntentId: input.binding.qualifiedIntentId,
    },
  });
  return { sealApplied: true, effect };
}

/** Read-only reconciliation of a sealed binding against D4 correlation. */
export async function reconcileDocumentCommandFromBinding(input: {
  pilotId: string;
  preparationId: string;
  binding: DocumentCommandBinding;
}): Promise<{
  verdict: "AVAILABLE" | "UNKNOWN" | "CONFLICT" | "NOT_EXECUTED";
  documentId?: string;
  revisionId?: string;
  reason?: string;
}> {
  // Replay CREATE path via correlation — no new mutation when already present.
  if (input.binding.action === "CREATE") {
    const effect = await savePreparationDocument(
      input.pilotId,
      input.preparationId,
      input.binding.title,
      input.binding.contentMarkdown,
      undefined,
      {
        correlationKey: input.binding.correlationKey,
        provenance: { reconcileOnly: true, payloadSha256: input.binding.payloadSha256 },
      },
    );
    if (effect.status === "AVAILABLE" && "idempotentReplay" in effect && effect.idempotentReplay) {
      return {
        verdict: "AVAILABLE",
        documentId: effect.documentId,
        revisionId: effect.revisionId,
      };
    }
    if (effect.status === "CONFLICT") {
      return { verdict: "CONFLICT", reason: effect.reason, documentId: effect.documentId };
    }
    if (effect.status === "AVAILABLE") {
      // Unexpected fresh write during reconcile — treat as unknown (should not happen without fence).
      return {
        verdict: "UNKNOWN",
        reason: "RECONCILE_UNEXPECTED_WRITE",
        documentId: "documentId" in effect ? effect.documentId : undefined,
      };
    }
    return { verdict: "UNKNOWN", reason: "reason" in effect ? String(effect.reason) : "UNKNOWN" };
  }
  return { verdict: "NOT_EXECUTED", reason: "REVISE_RECONCILE_REQUIRES_EXPLICIT_PATH" };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/history-tools-sdk.ts`

```typescript
/**
 * Agents SDK wrappers for O-01 history tools. Scope closed over server identities.
 */
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
  searchConversationHistory,
  type AuthorizedHistoryScope,
} from "@/domains/conversation/history-tools";

export type HistoryToolScope = {
  pilotId: string;
  preparationId: string;
  budget: { remainingCalls: number; remainingChars: number };
};

function charge(scope: HistoryToolScope, payload: unknown): void {
  const size = JSON.stringify(payload).length;
  scope.budget.remainingChars = Math.max(0, scope.budget.remainingChars - size);
}

export async function buildNoraHistoryTools(scope: HistoryToolScope) {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");

  let cachedScope: AuthorizedHistoryScope | null = null;
  async function scopeOrDenied() {
    if (cachedScope) return { ok: true as const, scope: cachedScope };
    const resolved = await resolveAuthorizedHistoryScope({
      pilotId: scope.pilotId,
      preparationId: scope.preparationId,
    });
    if ("denied" in resolved) {
      return { ok: false as const, reason: resolved.reason };
    }
    cachedScope = resolved;
    return { ok: true as const, scope: resolved };
  }

  return [
    tool({
      name: "search_conversation_history",
      description:
        "Search authorized conversation history for this pilot/project (keyset pagination). Lexical query is optional accelerator; empty query walks the journal. Does not mutate.",
      parameters: z.object({
        query: z.string().nullable().optional(),
        cursor: z.string().nullable().optional(),
        pageSize: z.number().int().min(1).max(50).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "DENIED",
            reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
            items: [],
            nextCursor: null,
          };
        }
        scope.budget.remainingCalls -= 1;
        const s = await scopeOrDenied();
        if (!s.ok) {
          return { coverage: "DENIED", reason: s.reason, items: [], nextCursor: null };
        }
        const result = await searchConversationHistory({
          scope: s.scope,
          query: args.query ?? undefined,
          cursor: args.cursor ?? undefined,
          pageSize: args.pageSize ?? undefined,
        });
        charge(scope, result);
        return result;
      },
    }),
    tool({
      name: "read_conversation_messages",
      description:
        "Re-read exact authorized message contents by messageId (rights revalidated). Prefer after search_conversation_history.",
      parameters: z.object({
        messageIds: z.array(z.string()).min(1).max(50),
        fragmentStart: z.number().int().min(0).nullable().optional(),
        fragmentEnd: z.number().int().min(0).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "DENIED",
            reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
            items: [],
          };
        }
        scope.budget.remainingCalls -= 1;
        const s = await scopeOrDenied();
        if (!s.ok) {
          return { coverage: "DENIED", reason: s.reason, items: [] };
        }
        const fragment =
          args.fragmentStart != null && args.fragmentEnd != null
            ? { start: args.fragmentStart, end: args.fragmentEnd }
            : undefined;
        const result = await readConversationMessages({
          scope: s.scope,
          messageIds: args.messageIds,
          fragment,
        });
        charge(scope, result);
        return result;
      },
    }),
  ];
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/history-tools.ts`

```typescript
/**
 * O-01 — authorized conversation history search/read (server-only).
 * Scope is rebuilt from authenticated pilot + preparation/project links.
 * Cursor is untrusted opaque state; rights revalidated on every call.
 */
import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { createHash } from "node:crypto";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  preparationProjectLinks,
  preparations,
} from "@/db/schema";
import { getPreparationContext } from "@/domains/preparation/service";

export type HistoryCoverage =
  | "COMPLETE"
  | "PARTIAL"
  | "EMPTY"
  | "DENIED"
  | "STALE";

export type AuthorizedHistoryScope = {
  pilotId: string;
  activePreparationId: string;
  projectId: string | null;
  conversationIds: string[];
  /** Per-conversation upper ordinal bound at scope start (keyset). */
  maxOrdinalByConversation: Record<string, number>;
  scopeFingerprint: string;
};

export type HistoryCursorV1 = {
  v: 1;
  scopeFp: string;
  /** Last emitted tuple for keyset continuation. */
  last?: {
    createdAt: string;
    conversationId: string;
    ordinal: number;
    messageId: string;
  };
};

export type HistorySearchItem = {
  messageId: string;
  conversationId: string;
  ordinal: number;
  role: string;
  status: string;
  createdAt: string;
  generationId: string | null;
  preview: string;
  coverage: HistoryCoverage;
};

export type HistorySearchResult = {
  items: HistorySearchItem[];
  nextCursor: string | null;
  coverage: HistoryCoverage;
  reason: string | null;
};

export type HistoryReadItem = {
  messageId: string;
  conversationId: string;
  ordinal: number;
  role: string;
  status: string;
  createdAt: string;
  generationId: string | null;
  content: string;
  fragmentStart: number;
  fragmentEnd: number;
  totalLength: number;
  coverage: HistoryCoverage;
  provenance: {
    preparationId: string;
    projectId: string | null;
  };
};

const DEFAULT_PAGE = 20;
const MAX_PAGE = 50;
const PREVIEW_CHARS = 240;
const CURSOR_MAX_CHARS = 2048;

function fingerprintScope(parts: {
  pilotId: string;
  preparationId: string;
  projectId: string | null;
  conversationIds: string[];
  maxOrdinalByConversation: Record<string, number>;
}): string {
  const payload = JSON.stringify({
    pilotId: parts.pilotId,
    preparationId: parts.preparationId,
    projectId: parts.projectId,
    conversationIds: [...parts.conversationIds].sort(),
    maxOrdinalByConversation: parts.maxOrdinalByConversation,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 32);
}

function encodeCursor(c: HistoryCursorV1): string {
  return Buffer.from(JSON.stringify(c), "utf8").toString("base64url");
}

function decodeCursor(raw: string | null | undefined): HistoryCursorV1 | null {
  if (!raw) return null;
  if (raw.length > CURSOR_MAX_CHARS) return null;
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as HistoryCursorV1;
    if (parsed?.v !== 1 || typeof parsed.scopeFp !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Resolve conversations the pilot may read for the active preparation:
 * active prep conversation(s) + same-project linked preparations owned by the pilot.
 */
export async function resolveAuthorizedHistoryScope(input: {
  pilotId: string;
  preparationId: string;
}): Promise<AuthorizedHistoryScope | { denied: true; reason: string }> {
  const ctx = await getPreparationContext(input.pilotId, input.preparationId);
  if (!ctx.preparation) {
    return { denied: true, reason: "PREPARATION_NOT_FOUND" };
  }

  const projectId = ctx.project?.id ?? null;
  const prepIds = new Set<string>([input.preparationId]);

  if (projectId) {
    const linked = await db
      .select({
        preparationId: preparationProjectLinks.preparationId,
        ownerPilotId: preparations.ownerPilotId,
      })
      .from(preparationProjectLinks)
      .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
      .where(
        and(
          eq(preparationProjectLinks.projectId, projectId),
          eq(preparations.ownerPilotId, input.pilotId),
        ),
      );
    for (const row of linked) prepIds.add(row.preparationId);
  }

  const convRows = await db
    .select({
      id: conversations.id,
      preparationId: conversations.preparationId,
    })
    .from(conversations)
    .where(
      and(
        eq(conversations.ownerPilotId, input.pilotId),
        inArray(conversations.preparationId, [...prepIds]),
      ),
    );

  const conversationIds = convRows.map((c) => c.id);
  const maxOrdinalByConversation: Record<string, number> = {};
  if (conversationIds.length > 0) {
    const maxima = await db
      .select({
        conversationId: messages.conversationId,
        maxOrdinal: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number),
      })
      .from(messages)
      .where(inArray(messages.conversationId, conversationIds))
      .groupBy(messages.conversationId);
    for (const m of maxima) {
      maxOrdinalByConversation[m.conversationId] = m.maxOrdinal;
    }
    for (const id of conversationIds) {
      if (maxOrdinalByConversation[id] === undefined) maxOrdinalByConversation[id] = 0;
    }
  }

  const scopeFingerprint = fingerprintScope({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId,
    conversationIds,
    maxOrdinalByConversation,
  });

  return {
    pilotId: input.pilotId,
    activePreparationId: input.preparationId,
    projectId,
    conversationIds,
    maxOrdinalByConversation,
    scopeFingerprint,
  };
}

async function revalidateScope(
  scope: AuthorizedHistoryScope,
): Promise<AuthorizedHistoryScope | { denied: true; reason: string; coverage: HistoryCoverage }> {
  const fresh = await resolveAuthorizedHistoryScope({
    pilotId: scope.pilotId,
    preparationId: scope.activePreparationId,
  });
  if ("denied" in fresh) {
    return { denied: true, reason: fresh.reason, coverage: "DENIED" };
  }
  if (fresh.scopeFingerprint !== scope.scopeFingerprint) {
    return { denied: true, reason: "SCOPE_STALE", coverage: "STALE" };
  }
  return fresh;
}

function previewOf(content: string): string {
  const t = content.replace(/\s+/g, " ").trim();
  if (t.length <= PREVIEW_CHARS) return t;
  return `${t.slice(0, PREVIEW_CHARS)}…`;
}

/**
 * Progressive history search within an authorized scope.
 * Lexical `query` is an accelerator only — empty query walks the journal by keyset order.
 */
export async function searchConversationHistory(input: {
  scope: AuthorizedHistoryScope;
  query?: string;
  cursor?: string | null;
  pageSize?: number;
}): Promise<HistorySearchResult> {
  const validated = await revalidateScope(input.scope);
  if ("denied" in validated) {
    return {
      items: [],
      nextCursor: null,
      coverage: validated.coverage,
      reason: validated.reason,
    };
  }
  const scope = validated;
  if (scope.conversationIds.length === 0) {
    return { items: [], nextCursor: null, coverage: "EMPTY", reason: null };
  }

  const pageSize = Math.min(Math.max(input.pageSize ?? DEFAULT_PAGE, 1), MAX_PAGE);
  const cursor = decodeCursor(input.cursor);
  if (input.cursor && (!cursor || cursor.scopeFp !== scope.scopeFingerprint)) {
    return {
      items: [],
      nextCursor: null,
      coverage: "STALE",
      reason: "CURSOR_INVALID_OR_STALE",
    };
  }

  const q = (input.query ?? "").trim().toLowerCase();

  // Keyset: (created_at DESC, conversation_id DESC, ordinal DESC, id DESC) for stable paging.
  // Bound each conversation by maxOrdinal captured at scope start.
  const bounds = Object.entries(scope.maxOrdinalByConversation);
  if (bounds.length === 0) {
    return { items: [], nextCursor: null, coverage: "EMPTY", reason: null };
  }

  const rows = await db
    .select({
      id: messages.id,
      conversationId: messages.conversationId,
      ordinal: messages.ordinal,
      role: messages.role,
      status: messages.status,
      createdAt: messages.createdAt,
      generationId: messages.generationId,
      content: messages.content,
    })
    .from(messages)
    .where(
      and(
        inArray(messages.conversationId, scope.conversationIds),
        // Enforce per-conversation maxOrdinal bounds in SQL via OR of (conv, ordinal<=max).
        sql`(${sql.join(
          bounds.map(
            ([cid, maxOrd]) =>
              sql`(${messages.conversationId} = ${cid} AND ${messages.ordinal} <= ${maxOrd})`,
          ),
          sql` OR `,
        )})`,
        cursor?.last
          ? sql`(
              ${messages.createdAt} < ${cursor.last.createdAt}::timestamptz
              OR (
                ${messages.createdAt} = ${cursor.last.createdAt}::timestamptz
                AND (
                  ${messages.conversationId} < ${cursor.last.conversationId}
                  OR (
                    ${messages.conversationId} = ${cursor.last.conversationId}
                    AND (
                      ${messages.ordinal} < ${cursor.last.ordinal}
                      OR (
                        ${messages.ordinal} = ${cursor.last.ordinal}
                        AND ${messages.id} < ${cursor.last.messageId}
                      )
                    )
                  )
                )
              )
            )`
          : undefined,
        q ? sql`lower(${messages.content}) LIKE ${`%${q.replace(/[%_]/g, "")}%`}` : undefined,
      ),
    )
    .orderBy(
      desc(messages.createdAt),
      desc(messages.conversationId),
      desc(messages.ordinal),
      desc(messages.id),
    )
    .limit(pageSize + 1);

  const page = rows.slice(0, pageSize);
  const hasMore = rows.length > pageSize;
  const items: HistorySearchItem[] = page.map((r) => ({
    messageId: r.id,
    conversationId: r.conversationId,
    ordinal: r.ordinal,
    role: r.role,
    status: r.status,
    createdAt: r.createdAt.toISOString(),
    generationId: r.generationId,
    preview: previewOf(r.content),
    coverage: "COMPLETE",
  }));

  let nextCursor: string | null = null;
  if (hasMore && page.length > 0) {
    const last = page[page.length - 1]!;
    nextCursor = encodeCursor({
      v: 1,
      scopeFp: scope.scopeFingerprint,
      last: {
        createdAt: last.createdAt.toISOString(),
        conversationId: last.conversationId,
        ordinal: last.ordinal,
        messageId: last.id,
      },
    });
  }

  const coverage: HistoryCoverage =
    items.length === 0 ? "EMPTY" : hasMore || q ? "PARTIAL" : "COMPLETE";

  return { items, nextCursor, coverage, reason: null };
}

/**
 * Exact re-read of previously located messages. Rights revalidated; foreign ids → DENIED item omitted.
 */
export async function readConversationMessages(input: {
  scope: AuthorizedHistoryScope;
  messageIds: string[];
  /** Optional fragment window (inclusive start, exclusive end). */
  fragment?: { start: number; end: number };
}): Promise<{
  items: HistoryReadItem[];
  coverage: HistoryCoverage;
  reason: string | null;
}> {
  const validated = await revalidateScope(input.scope);
  if ("denied" in validated) {
    return { items: [], coverage: validated.coverage, reason: validated.reason };
  }
  const scope = validated;
  const ids = [...new Set(input.messageIds)].slice(0, MAX_PAGE);
  if (ids.length === 0) {
    return { items: [], coverage: "EMPTY", reason: null };
  }

  const rows = await db
    .select({
      id: messages.id,
      conversationId: messages.conversationId,
      ordinal: messages.ordinal,
      role: messages.role,
      status: messages.status,
      createdAt: messages.createdAt,
      generationId: messages.generationId,
      content: messages.content,
      preparationId: conversations.preparationId,
      projectId: conversations.projectId,
      ownerPilotId: conversations.ownerPilotId,
    })
    .from(messages)
    .innerJoin(conversations, eq(conversations.id, messages.conversationId))
    .where(and(inArray(messages.id, ids), eq(conversations.ownerPilotId, scope.pilotId)))
    .orderBy(asc(messages.createdAt), asc(messages.ordinal));

  const allowed = new Set(scope.conversationIds);
  const items: HistoryReadItem[] = [];
  for (const r of rows) {
    if (!allowed.has(r.conversationId)) continue;
    const maxOrd = scope.maxOrdinalByConversation[r.conversationId] ?? 0;
    if (r.ordinal > maxOrd) continue;
    const totalLength = r.content.length;
    let start = 0;
    let end = totalLength;
    if (input.fragment) {
      start = Math.max(0, Math.min(input.fragment.start, totalLength));
      end = Math.max(start, Math.min(input.fragment.end, totalLength));
    }
    items.push({
      messageId: r.id,
      conversationId: r.conversationId,
      ordinal: r.ordinal,
      role: r.role,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      generationId: r.generationId,
      content: r.content.slice(start, end),
      fragmentStart: start,
      fragmentEnd: end,
      totalLength,
      coverage: start === 0 && end === totalLength ? "COMPLETE" : "PARTIAL",
      provenance: {
        preparationId: r.preparationId,
        projectId: r.projectId,
      },
    });
  }

  const coverage: HistoryCoverage =
    items.length === 0 ? "EMPTY" : items.length < ids.length ? "PARTIAL" : "COMPLETE";
  return { items, coverage, reason: null };
}

```

### `projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import {
  bootstrapProjectFromPortfolio,
} from "./helpers/g4-chat-first";

/**
 * ML4C — minimal sticky composer smoke (FAKE Nora / deterministic-fixture lane).
 * Does not prove LIVE Nora or long-thread server pagination.
 */
test("ML4C: Nora workspace composer stays visible (sticky) after scroll", async ({ page }) => {
  test.setTimeout(120_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const seed = "Fil projet ML4C composer smoke (fixture).";
  await bootstrapProjectFromPortfolio(page, {
    seed,
    name: "ML4C Composer Smoke",
    summary: "Vérification UI fil long",
  });

  const composer = page.getByTestId("nora-composer");
  const send = page.getByTestId("thread-send");
  const thread = page.getByTestId("nora-thread");

  await expect(composer).toBeVisible();
  await expect(send).toBeVisible();
  await expect(thread).toBeVisible();
  await expect(page.getByText(seed, { exact: true })).toBeVisible();
  await thread.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });

  await expect(composer).toBeVisible();
  await expect(send).toBeVisible();

  const sticky = await composer.evaluate((el) => el.classList.contains("fig-composer-sticky"));
  expect(sticky).toBe(true);
});
```

### `projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts`

```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getConversationId,
  listMessages,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  sealAndApplyDocumentCommand,
  resolveAssistantProposal,
} from "@/domains/conversation/document-command";
import { completeTurnCommand, reserveTurnCommand } from "@/domains/conversation/turn-command";
import {
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { sfiaDocumentFence } from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function countDocsByCreationKey(
  pilotId: string,
  preparationId: string,
  creationCorrelationKey: string,
) {
  const rows = await db
    .select({ id: documents.id })
    .from(documents)
    .where(
      and(
        eq(documents.ownerPilotId, pilotId),
        eq(documents.preparationId, preparationId),
        eq(documents.creationCorrelationKey, creationCorrelationKey),
      ),
    );
  return rows.length;
}

async function countD4Rows(pilotId: string, preparationId: string) {
  const docs = await db
    .select({ id: documents.id })
    .from(documents)
    .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, preparationId)));
  const revs =
    docs.length === 0
      ? []
      : await db
          .select({ id: documentRevisions.id })
          .from(documentRevisions)
          .where(
            sql`${documentRevisions.documentId} in (${sql.join(
              docs.map((d) => sql`${d.id}`),
              sql`, `,
            )})`,
          );
  return { documents: docs.length, revisions: revs.length };
}

describe("ML4C document command (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("CREATE via savePreparationDocument + correlation replay; mismatch → CONFLICT", async () => {
    const pilotId = await seedPilot("ml4c-doc-rec");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-create-${Date.now()}`;
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPremière version.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");

    const replay = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPremière version.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(replay.status).toBe("AVAILABLE");
    if (replay.status === "AVAILABLE" && "idempotentReplay" in replay) {
      expect(replay.idempotentReplay).toBe(true);
    }

    const conflict = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPayload divergent.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(conflict.status).toBe("CONFLICT");
    if (conflict.status === "CONFLICT") {
      expect(conflict.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    }
  });

  it("sealAndApplyDocumentCommand CREATE then REVISE with turn fence", async () => {
    const pilotId = await seedPilot("ml4c-doc-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-seal-${Date.now()}`,
      content: "Crée un document de continuité ML4C.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");

    const body = "# Continuité\n\nVersion initiale scellée.\n";
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Continuité ML4C",
      contentMarkdown: body,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.sealApplied).toBe(true);
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("create failed");
    const documentId = sealed.effect.documentId;
    const baseRevisionId = sealed.effect.revisionId;

    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Tour scellé — CREATE appliqué.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });

    const reserved2 = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-seal-rev-${Date.now()}`,
      content: "Révise le document de continuité.",
    });
    expect(reserved2.kind).toBe("fresh");
    if (reserved2.kind !== "fresh") throw new Error("expected fresh revise turn");

    const revisedBody = "# Continuité\n\nVersion initiale scellée.\n\n## Révision\n\nAjout.\n";
    const admittedRev = admitDocumentCommand({
      commandId: reserved2.commandId,
      operationId: reserved2.operationId,
      userMessageId: reserved2.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved2.commandId },
      title: "Continuité ML4C",
      contentMarkdown: revisedBody,
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved2.commandId, ownerToken: reserved2.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.sealApplied).toBe(true);
    expect(sealedRev.effect.status).toBe("AVAILABLE");
    const list = await listDocumentRevisions(pilotId, prep.id, documentId!);
    expect(list.revisions.length).toBeGreaterThanOrEqual(2);
  });

  it("REVISE stale base → CONFLICT", async () => {
    const pilotId = await seedPilot("ml4c-doc-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# Spec\n\nA\n");
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# Spec\n\nB\n",
      correlationKey: `rev-${Date.now()}`,
    });
    expect(v2.status).toBe("AVAILABLE");
    const conflict = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# Spec\n\nstale attempt\n",
      correlationKey: `rev-stale-${Date.now()}`,
    });
    expect(conflict.status).toBe("CONFLICT");
  });

  it("resolveAssistantProposal extracts sfia-document; denies other pilot", async () => {
    const pilotA = await seedPilot("ml4c-prop-a");
    const prepA = await openOrCreatePreparation(pilotA);
    const convA = await getConversationId(pilotA, prepA.id);
    expect(convA).toBeTruthy();
    const title = "PROP ML4C exact";
    const body = "Corps contractuel pour extraction.";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convA!))
      )[0]?.o ?? 0;
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convA!,
      role: "assistant",
      content: sfiaDocumentFence(title, body),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const ok = await resolveAssistantProposal({
      pilotId: pilotA,
      preparationId: prepA.id,
      assistantMessageId: assistantId,
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.proposal.title).toBe(title);
      expect(ok.proposal.contentMarkdown).toContain(body);
      expect(ok.proposal.contentSha256).toBe(
        contentSha256(title, ok.proposal.contentMarkdown),
      );
    }

    const pilotB = await seedPilot("ml4c-prop-b");
    const denied = await resolveAssistantProposal({
      pilotId: pilotB,
      preparationId: prepA.id,
      assistantMessageId: assistantId,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.reason).toBe("SOURCE_DENIED");
  });

  it("failed admit does not create document rows", async () => {
    const pilotId = await seedPilot("ml4c-doc-neg");
    const prep = await openOrCreatePreparation(pilotId);
    const before = await countD4Rows(pilotId, prep.id);

    const negatives = [
      admitDocumentCommand({
        commandId: "x",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "x" },
        title: " ",
        contentMarkdown: "x",
      }),
      admitDocumentCommand({
        commandId: "y",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "y" },
        title: "T",
        contentMarkdown: "z".repeat(100_001),
      }),
      admitDocumentCommand({
        commandId: "z",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "REVISE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "z" },
        title: "T",
        contentMarkdown: "body",
      }),
    ];
    for (const n of negatives) {
      expect(n.ok).toBe(false);
    }

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);

    const chat = await postUserMessageAndNora(pilotId, prep.id, "Bonjour, pas de document.");
    expect(chat.documentSave).toBeNull();
    const afterChatter = await countD4Rows(pilotId, prep.id);
    expect(afterChatter).toEqual(before);
    const msgs = await listMessages(pilotId, prep.id);
    expect(msgs.length).toBeGreaterThan(0);
  });

  it("PROP: admitDocumentCommand accepts title + body >12k and ≤100k; >100k rejected", async () => {
    const pilotId = await seedPilot("ml4c-doc-prop-long");
    const prep = await openOrCreatePreparation(pilotId);
    const longBody = `# Proposition longue\n\n${"paragraphe contractuel.\n".repeat(900)}`;
    expect(longBody.length).toBeGreaterThan(12_000);
    expect(longBody.length).toBeLessThanOrEqual(100_000);

    const ok = admitDocumentCommand({
      commandId: "cmd-prop-long",
      operationId: "op-prop-long",
      userMessageId: "usr-prop-long",
      qualifiedIntentId: "i-d4-prop",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: "cmd-prop-long" },
      title: "Document intégral ML4C",
      contentMarkdown: longBody,
    });
    expect(ok.ok).toBe(true);

    const tooLarge = admitDocumentCommand({
      commandId: "cmd-prop-huge",
      operationId: "op-prop-huge",
      userMessageId: "usr-prop-huge",
      qualifiedIntentId: "i-d4-prop",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: "cmd-prop-huge" },
      title: "Trop grand",
      contentMarkdown: "x".repeat(100_001),
    });
    expect(tooLarge.ok).toBe(false);
    if (!tooLarge.ok) expect(tooLarge.reason).toBe("CONTENT_TOO_LARGE");

    const before = await countD4Rows(pilotId, prep.id);
    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("REC: concurrent CREATE same creationCorrelationKey → single document row", async () => {
    const pilotId = await seedPilot("ml4c-doc-conc");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `ml4c-conc-${Date.now()}`;
    const body = "# Concurrent ML4C\n\nMême empreinte.\n";

    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, "Conc ML4C", body, undefined, {
        correlationKey: key,
      }),
      savePreparationDocument(pilotId, prep.id, "Conc ML4C", body, undefined, {
        correlationKey: key,
      }),
    ]);

    const statuses = [a.status, b.status];
    expect(statuses.every((s) => s === "AVAILABLE" || s === "UNKNOWN")).toBe(true);
    expect(await countDocsByCreationKey(pilotId, prep.id, key)).toBe(1);

    const winner = [a, b].find((r) => r.status === "AVAILABLE");
    const loser = [a, b].find((r) => r !== winner);
    if (winner && loser) {
      if (loser.status === "AVAILABLE" && "idempotentReplay" in loser) {
        expect(loser.idempotentReplay).toBe(true);
      }
      if (loser.status === "CONFLICT") {
        expect(loser.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
      }
    }
  });

  it("REC: sealAndApply with invalid ownerToken → no document write", async () => {
    const pilotId = await seedPilot("ml4c-doc-owner");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const before = await countD4Rows(pilotId, prep.id);

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-owner-${Date.now()}`,
      content: "Crée un document avec sceau invalide.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");

    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Sans sceau",
      contentMarkdown: "# Sans sceau\n\nPas d'écriture.\n",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: "invalid-owner-token" },
      binding: admitted.binding,
    });
    expect(sealed.sealApplied).toBe(false);
    expect(sealed.effect).toMatchObject({
      status: "NOT_EXECUTED",
      reason: "BINDING_SEAL_FAILED",
    });

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/ml4c-history-tools.pg.test.ts`

```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
  searchConversationHistory,
} from "@/domains/conversation/history-tools";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

const TOPICS = [
  "architecture modulaire",
  "budget cloud Q3",
  "recette utilisateur",
  "dette technique front",
  "gouvernance des données",
  "intégration GitHub",
  "cadrage périmètre",
  "risques sécurité",
  "performance Postgres",
  "charte graphique",
];

async function seedVariedJournal(
  pilotId: string,
  preparationId: string,
  count: number,
  distinctive?: { ordinal: number; text: string },
) {
  const convId = await getConversationId(pilotId, preparationId);
  if (!convId) throw new Error("conversation missing");
  const rows = await db
    .select({ ordinal: messages.ordinal })
    .from(messages)
    .where(eq(messages.conversationId, convId))
    .orderBy(asc(messages.ordinal));
  let next = (rows.at(-1)?.ordinal ?? 0) + 1;
  const inserts: (typeof messages.$inferInsert)[] = [];
  for (let i = 0; i < count; i++) {
    const topic = TOPICS[i % TOPICS.length]!;
    const body =
      distinctive && next === distinctive.ordinal
        ? distinctive.text
        : `Message ${next} — échange sur ${topic} avec nuance ${(i % 7) + 1}.`;
    inserts.push({
      id: newId("msg"),
      conversationId: convId,
      role: i % 3 === 0 ? "assistant" : "user",
      content: body,
      status: "COMPLETE",
      ordinal: next++,
    });
  }
  if (inserts.length > 0) {
    await db.insert(messages).values(inserts);
  }
  return convId;
}

describe("ML4C history tools (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("HIST-01: search finds distinctive early message; read returns exact content", async () => {
    const pilotId = await seedPilot("ml4c-hist01");
    const prep = await openOrCreatePreparation(pilotId);
    const marker = "HIST-01 marqueur phoque arctique ML4C — repère inaugural";
    await seedVariedJournal(pilotId, prep.id, 34, { ordinal: 3, text: marker });

    const scope = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    const search = await searchConversationHistory({
      scope,
      query: "phoque arctique",
      pageSize: 10,
    });
    expect(search.coverage).not.toBe("DENIED");
    expect(search.items.some((i) => i.preview.includes("phoque arctique"))).toBe(true);
    const hit = search.items.find((i) => i.preview.includes("phoque arctique"));
    expect(hit).toBeTruthy();

    const read = await readConversationMessages({
      scope,
      messageIds: [hit!.messageId],
    });
    expect(read.items).toHaveLength(1);
    expect(read.items[0]!.content).toBe(marker);
  });

  it("HIST-05: second pilot cannot read first pilot messages", async () => {
    const pilotA = await seedPilot("ml4c-hist05-a");
    const prepA = await openOrCreatePreparation(pilotA);
    const secret = "HIST-05 confidentiel pilot A uniquement";
    await seedVariedJournal(pilotA, prepA.id, 8, { ordinal: 4, text: secret });

    const scopeA = await resolveAuthorizedHistoryScope({
      pilotId: pilotA,
      preparationId: prepA.id,
    });
    expect("denied" in scopeA).toBe(false);
    if ("denied" in scopeA) return;
    const readA = await readConversationMessages({
      scope: scopeA,
      messageIds: (
        await db
          .select({ id: messages.id })
          .from(messages)
          .innerJoin(conversations, eq(conversations.id, messages.conversationId))
          .where(
            and(eq(conversations.ownerPilotId, pilotA), eq(conversations.preparationId, prepA.id)),
          )
      ).map((r) => r.id),
    });
    expect(readA.items.some((i) => i.content.includes("confidentiel"))).toBe(true);

    const pilotB = await seedPilot("ml4c-hist05-b");
    const prepB = await openOrCreatePreparation(pilotB);
    const scopeB = await resolveAuthorizedHistoryScope({
      pilotId: pilotB,
      preparationId: prepB.id,
    });
    expect("denied" in scopeB).toBe(false);
    if ("denied" in scopeB) return;

    const searchB = await searchConversationHistory({
      scope: scopeB,
      query: "confidentiel",
    });
    expect(searchB.items).toHaveLength(0);

    const foreignIds = readA.items.map((i) => i.messageId);
    const readB = await readConversationMessages({
      scope: scopeB,
      messageIds: foreignIds,
    });
    expect(readB.items).toHaveLength(0);
    expect(readB.coverage).toBe("EMPTY");
  });

  it("HIST-08: stale scope after journal growth; no duplicate page bleed", async () => {
    const pilotId = await seedPilot("ml4c-hist08");
    const prep = await openOrCreatePreparation(pilotId);
    await seedVariedJournal(pilotId, prep.id, 36);

    const scope = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    const page1 = await searchConversationHistory({
      scope,
      pageSize: 8,
    });
    expect(page1.items.length).toBe(8);
    expect(page1.nextCursor).toBeTruthy();
    const page1Ids = new Set(page1.items.map((i) => i.messageId));

    await postUserMessageAndNora(pilotId, prep.id, "Nouvel échange post-scope sur observabilité");
    await postUserMessageAndNora(pilotId, prep.id, "Autre message tardif sur la documentation");

    const page2 = await searchConversationHistory({
      scope,
      cursor: page1.nextCursor,
      pageSize: 8,
    });
    expect(page2.coverage).toBe("STALE");
    expect(page2.reason).toBe("SCOPE_STALE");
    expect(page2.items).toHaveLength(0);
    for (const id of page1Ids) {
      expect(page2.items.some((i) => i.messageId === id)).toBe(false);
    }

    const fresh = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in fresh).toBe(false);
    if ("denied" in fresh) return;
    expect(fresh.scopeFingerprint).not.toBe(scope.scopeFingerprint);

    const page2Fresh = await searchConversationHistory({
      scope: fresh,
      cursor: page1.nextCursor,
      pageSize: 8,
    });
    expect(page2Fresh.coverage).toBe("STALE");
    expect(page2Fresh.reason).toMatch(/CURSOR_INVALID_OR_STALE|SCOPE_STALE/);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/document-command.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  admitDocumentCommand,
  contentSha256,
  payloadSha256,
  proposalFromStructured,
} from "@/domains/conversation/document-command";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

const baseAdmit = {
  commandId: "tcmd-test-1",
  operationId: "op-test-1",
  userMessageId: "msg-user-1",
  qualifiedIntentId: "i-d4-create",
  preparationId: "prep-test-1",
  source: { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "tcmd-test-1" },
};

describe("document-command admission", () => {
  it("admit CREATE when title and body are valid", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "Spec ML4C",
      contentMarkdown: "# Spec\n\nCorps minimal.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.binding.action).toBe("CREATE");
      expect(r.binding.contentSha256).toBe(
        contentSha256("Spec ML4C", "# Spec\n\nCorps minimal.\n"),
      );
      expect(r.binding.correlationKey).toHaveLength(48);
    }
  });

  it("admit REVISE when targets are present", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "REVISE",
      documentId: "doc-1",
      baseRevisionId: "rev-1",
      title: "Spec",
      contentMarkdown: "# Spec\n\nRévisé.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.binding.documentId).toBe("doc-1");
  });

  it("rejects empty title or body", () => {
    expect(
      admitDocumentCommand({
        ...baseAdmit,
        action: "CREATE",
        title: "   ",
        contentMarkdown: "x",
      }).ok,
    ).toBe(false);
    const emptyBody = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "T",
      contentMarkdown: "  \n  ",
    });
    expect(emptyBody.ok).toBe(false);
    if (!emptyBody.ok) expect(emptyBody.reason).toBe("EMPTY_PROPOSAL");
  });

  it("rejects content over 100k chars", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "Large",
      contentMarkdown: "x".repeat(100_001),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.verdict).toBe("NOT_EXECUTED");
      expect(r.reason).toBe("CONTENT_TOO_LARGE");
    }
  });

  it("rejects REVISE without documentId / baseRevisionId", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "REVISE",
      title: "T",
      contentMarkdown: "body",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("REVISE_TARGET_INCOMPLETE");
  });
});

describe("document-command hashes", () => {
  it("contentSha256 is stable for the same inputs", () => {
    const a = contentSha256("Titre", "# Corps\n");
    const b = contentSha256("Titre", "# Corps\n");
    expect(a).toBe(b);
    expect(a).toHaveLength(64);
  });

  it("payloadSha256 changes when content hash changes", () => {
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "c1" };
    const p1 = payloadSha256({
      action: "CREATE",
      source,
      preparationId: "prep-1",
      documentId: null,
      baseRevisionId: null,
      title: "T",
      contentSha256: contentSha256("T", "v1"),
    });
    const p2 = payloadSha256({
      action: "CREATE",
      source,
      preparationId: "prep-1",
      documentId: null,
      baseRevisionId: null,
      title: "T",
      contentSha256: contentSha256("T", "v2"),
    });
    expect(p1).not.toBe(p2);
  });
});

describe("proposalFromStructured", () => {
  it("returns null for empty or oversized payloads", () => {
    expect(proposalFromStructured({ title: "  ", contentMarkdown: "x" })).toBeNull();
    expect(proposalFromStructured({ title: "T", contentMarkdown: "" })).toBeNull();
    expect(
      proposalFromStructured({ title: "T", contentMarkdown: "a".repeat(100_001) }),
    ).toBeNull();
  });

  it("returns exact proposal with contentSha256", () => {
    const p = proposalFromStructured({ title: "  Atlas  ", contentMarkdown: "# Atlas\n" });
    expect(p).toMatchObject({ title: "Atlas", contentMarkdown: "# Atlas\n" });
    expect(p?.contentSha256).toBe(contentSha256("Atlas", "# Atlas\n"));
  });
});

describe("validateNoraTurnQualification — documentProposal", () => {
  it("accepts documentProposal >12k while replyDraft stays ≤12k", () => {
    const longDoc = `# Synthèse\n\n${"paragraphe détaillé.\n".repeat(900)}`;
    expect(longDoc.length).toBeGreaterThan(12_000);
    expect(longDoc.length).toBeLessThanOrEqual(100_000);

    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "rédiger un document",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create doc",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Voici le brouillon court pour l’utilisateur.",
      documentProposal: {
        title: "Document long",
        contentMarkdown: longDoc,
      },
    });
    expect(v.ok).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts`

```typescript
/**
 * ML4C TEMP (DET) — O-02 cognitive confrontation is Nora-led; these tests guard
 * server-side restitution / projection rules without inventing D4 or D6 from EXPLAIN,
 * negation-shaped drafts, or retired lexical routers.
 */
import { describe, expect, it } from "vitest";
import { qualifyDocumentAct, explicitDocumentIntent } from "@/domains/conversation/document-act";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractKnowledgeProposals,
  extractPilotageBinding,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { proposalFromStructured } from "@/domains/conversation/document-command";

function qualified(partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "intents">): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal: "test",
    clarifications: [],
    replyDraft: "Réponse courte.",
    ...partial,
  };
}

describe("ML4C TEMP — restitution fail-closed (DET)", () => {
  it("TEMP-01: qualifyDocumentAct / explicitDocumentIntent stay lexical-retired", () => {
    for (const utterance of [
      "Crée un document de recette.",
      "Ne crée pas de document, explique seulement.",
      "Et si on rédigeait une synthèse ?",
    ]) {
      expect(qualifyDocumentAct(utterance)).toEqual({
        kind: "NONE",
        reason: "SEMANTIC_ROUTER_REQUIRED",
      });
      expect(explicitDocumentIntent(utterance)).toBe(false);
    }
  });

  it("TEMP-02: EXPLAIN d4.create_document does not project D4 CREATE", () => {
    const q = qualified({
      intents: [
        {
          id: "i-explain-doc",
          capabilityId: "d4.create_document",
          mode: "EXPLAIN",
          summary: "explain drafting",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(projectStudioEffects(q).documentAct).toEqual({ kind: "NONE" });
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("TEMP-03: EXPLAIN d6.human_decision never binds pilotage / HumanDecision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-explain-d6",
          capabilityId: "d6.human_decision",
          mode: "EXPLAIN",
          summary: "reflect on prior decision",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            decisionId: "dec-prior",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["prior-turn-summary-only"],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    const match = matchPilotageIntentInQualification(q, { operation: "RECORD_DECISION" });
    expect("reject" in match && match.reject).toBe(true);
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("TEMP-04: REQUEST_EFFECT d4.create_document still projects CREATE when not follow-on gated", () => {
    const q = qualified({
      intents: [
        {
          id: "i-create",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(projectStudioEffects(q).documentAct).toEqual({ kind: "CREATE" });
    expect(deriveThreadTurnKind(q)).toBe("INTENTION_EFFET");
  });

  it("TEMP-05: hypothetical d4.record_knowledge EXPLAIN does not capitalise", () => {
    const q = qualified({
      intents: [
        {
          id: "i-hyp",
          capabilityId: "d4.record_knowledge",
          mode: "EXPLAIN",
          summary: "hypothesis only",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "L’architecture pourrait être event-driven.",
            epistemic: "hypothesized",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
    expect(projectStudioEffects(q).documentAct).toEqual({ kind: "NONE" });
  });

  it("TEMP-06: documentProposal >12k via proposalFromStructured stays admissible envelope", () => {
    const longDoc = `# Synthèse\n\n${"ligne de contenu détaillée.\n".repeat(850)}`;
    expect(longDoc.length).toBeGreaterThan(12_000);
    expect(longDoc.length).toBeLessThanOrEqual(100_000);
    const p = proposalFromStructured({ title: "Long ML4C", contentMarkdown: longDoc });
    expect(p).not.toBeNull();
    expect(p!.contentMarkdown.length).toBeGreaterThan(12_000);
  });

  it("TEMP-07: conversation history in sourceEvidence alone does not add REQUEST_EFFECT", () => {
    const q = qualified({
      goal: "reprendre le fil",
      intents: [
        {
          id: "i-dialogue",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "continue thread",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["msg-1", "msg-2", "msg-3"],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("TEMP-08: D2 follow-on chains defer immediate documentAct to mission pending", () => {
    const q = qualified({
      intents: [
        {
          id: "i-d2",
          capabilityId: "d2.create_project",
          mode: "REQUEST_EFFECT",
          summary: "create project",
          parameters: { projectName: "Atlas" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "follow-on doc",
          parameters: {},
          constraints: [],
          dependsOn: ["i-d2"],
          sourceEvidence: [],
        },
      ],
    });
    const proj = projectStudioEffects(q);
    expect(proj.wantsFollowOnDocument).toBe(true);
    expect(proj.documentAct).toEqual({ kind: "NONE" });
  });
});
```
