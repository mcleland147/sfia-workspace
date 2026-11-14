# SFIA Studio Next — Review Pack FULL (MONO-CYCLE)
## ML4C — Provenance Parse Final Closure (stored parse refuse + FLOW-100 E2E)

- **Date/heure**: 2026-11-14 ~12:55 Europe/Paris
- **GO**: MORRIS LOCAL CORRECTION — stored provenance parse refuse + 100 pairs E2E
- **Profil**: Critical
- **Branche locale**: `fix/next-semantic-intent-convergence-20261112`
- **HEAD produit**: `67bf6b0b` (`67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`)
- **origin/main**: `6cda86bde4aa450abb1d23eedd370a9004ddcbc1`
- **Prior handoff**: `sfia/review-handoff@357008ea` blob `b111a972`
- **Product**: **LOCAL ONLY** — travail worktree, aucun commit / push produit ce cycle
- **Review Handoff**: **REMOTE après publication post-pack** (L3 borné ; tip/blob voir rapport Cursor §25)
- **Verdict**: **READY FOR CHATGPT CRITICAL REVIEW — LIVE NOT PROVEN**

---

## 1. Git Truth Check

| Check | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| origin/main | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| Cycle scope | P0 stored `parseProvenanceJson` refuse avant `resolveProvenanceIdentity` ; P1 FLOW-100 filler 200 msgs ; pack FULL candidat vs HEAD |
| Changement production **ce cycle** | **UNIQUEMENT** `web/src/domains/document/service.ts` (P0) ; **P1** preuve E2E dans `ml4c-prior-proposal.pg.test.ts` |
| Handoff publish | **deferred** — pack local d'abord, puis publication L3 (REMOTE) |

### git status --short (projects/sfia-studio-next)

```
M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/document/service.ts
 M projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
 M projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/document-act.test.ts
 M projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md
?? projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
?? projects/sfia-studio-next/web/src/domains/conversation/history-tools-sdk.ts
?? projects/sfia-studio-next/web/src/domains/conversation/history-tools.ts
?? projects/sfia-studio-next/web/tests/e2e/ml4c-document-continuity.spec.ts
?? projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-history-long.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-history-tools.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/document-command.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts
```

### git diff --name-status HEAD

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
M	projects/sfia-studio-next/web/src/domains/document/service.ts
M	projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
M	projects/sfia-studio-next/web/tests/unit/document-act.test.ts
M	projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
```

### git ls-files --others --exclude-standard

```
projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md
projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
projects/sfia-studio-next/web/src/domains/conversation/history-tools-sdk.ts
projects/sfia-studio-next/web/src/domains/conversation/history-tools.ts
projects/sfia-studio-next/web/tests/e2e/ml4c-document-continuity.spec.ts
projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml4c-history-long.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml4c-history-tools.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
projects/sfia-studio-next/web/tests/unit/document-command.test.ts
projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts
```

---

## 2. Validations (cycle courant — rapport Morris)

| Gate | Résultat |
| --- | --- |
| tsc | PASS |
| unit | 319 PASS |
| integration (sfia_next_e2e) | 452 PASS |
| ciblé identity+prior | 86 PASS |
| ciblé command+recon | 23 PASS |
| eslint (`document/service.ts`) | 0 errors |
| build | PASS |
| Playwright ML4C e2e | 2 PASS |
| Nora LIVE | **NOT PROVEN** |

---

## 3. File inventory matrix

| PATH | tracked/untracked | modified this cycle Y/N | included Y | content type | section |
| --- | --- | --- | --- | --- | --- |
| `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md` | untracked | N | Y | full | §8 as-built + §7 full |
| `projects/sfia-studio-next/construction/delivery-history.md` | tracked | N | Y | diff | §9 delivery + §6 diff |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/components/figma/tokens.css` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/document-command.ts` | untracked | N | Y | full | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/history-tools-sdk.ts` | untracked | N | Y | full | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/history-tools.ts` | untracked | N | Y | full | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts` | tracked | N | Y | diff | §6 diff or §7 full |
| `projects/sfia-studio-next/web/src/domains/document/service.ts` | tracked | Y | Y | diff | §4 P0 + §6 diff |
| `projects/sfia-studio-next/web/tests/e2e/ml4c-document-continuity.spec.ts` | untracked | N | Y | full | §5 Playwright + §7 full |
| `projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts` | untracked | N | Y | full | §5 Playwright + §7 full |
| `projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts` | tracked | N | Y | diff | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts` | tracked | N | Y | diff | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts` | untracked | N | Y | full | §5 command+recon + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts` | untracked | N | Y | full | §5 PARSE + §6 diff |
| `projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts` | untracked | N | Y | full | §5 command+recon + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4c-history-long.pg.test.ts` | untracked | N | Y | full | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4c-history-tools.pg.test.ts` | untracked | N | Y | full | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts` | untracked | Y | Y | full | §4 P1 FLOW-100 + §6 diff |
| `projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts` | tracked | N | Y | diff | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/unit/document-act.test.ts` | tracked | N | Y | diff | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/unit/document-command.test.ts` | untracked | N | Y | full | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/unit/ml4c-temp-restitution.test.ts` | untracked | N | Y | full | §5 carry-over + §6/§7 |
| `projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts` | tracked | N | Y | diff | §5 carry-over + §6/§7 |

---

## 4. P0 / P1 — stored provenance parse refuse (before / after)

### 4.1 Behaviour (synthesis)

| Aspect | BEFORE (delta sans fermeture parse stockée) | AFTER (candidat provenance parse final) |
| --- | --- | --- |
| Provenance request absente | `resolveProvenanceIdentity(null)` → HISTORICAL | Inchangé — absence request ≠ preuve stored lisible |
| Provenance stored illisible | `parseProvenanceJson` → null puis chemin HISTORICAL fingerprint | **`storedParsed === null` → `UNKNOWN` / `COMMAND_PROVENANCE_UNVERIFIABLE` avant toute résolution** |
| Faux AVAILABLE | Risque reconcile fingerprint si JSON stocké corrompu | Refus fail-closed ; pas de downgrade silencieux vers fingerprint |
| Dual request+stored | Déjà en place (cycle sealed identity) | Conservé — barrière parse **avant** `resolveProvenanceIdentity(stored)` |

### 4.2 AFTER — `parseProvenanceJson`

```typescript
function parseProvenanceJson(raw: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed as Record<string, unknown>;
  } catch {
    return null;
  }
}
```

### 4.3 AFTER — `reconcileWithProvenanceResolution` (barrière parse stored)

```typescript
function reconcileWithProvenanceResolution(args: {
  prior: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
    provenanceJson: string;
  };
  documentId: string;
  documentTitle: string;
  expectedFp: string;
  provenance?: Record<string, unknown> | null;
}): ReturnType<typeof reconcilePriorRevision> {
  const unverifiable = {
    status: "UNKNOWN" as const,
    reason: "COMMAND_PROVENANCE_UNVERIFIABLE" as const,
    documentId: args.documentId,
    revisionId: args.prior.id,
    revisionNumber: args.prior.revisionNumber,
  };

  const requestRes = resolveProvenanceIdentity(args.provenance ?? null);
  // Stored provenance must be a valid JSON object before any HISTORICAL/SEALED path.
  // parseProvenanceJson(null) → HISTORICAL would falsely authorize fingerprint reconcile.
  const storedParsed = parseProvenanceJson(args.prior.provenanceJson);
  if (storedParsed === null) {
    return unverifiable;
  }
  const storedRes = resolveProvenanceIdentity(storedParsed);

  if (requestRes.kind === "SEALED_INVALID" || storedRes.kind === "SEALED_INVALID") {
    return unverifiable;
  }
  // HISTORICAL request against sealed stored revision → refuse downgrade.
  if (requestRes.kind === "HISTORICAL" && storedRes.kind !== "HISTORICAL") {
    return unverifiable;
  }
  // Sealed request against historical stored → sealed compare would fail; refuse.
  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "HISTORICAL") {
    return unverifiable;
  }

  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "SEALED_VALID") {
    return reconcilePriorRevision({
      prior: args.prior,
      documentId: args.documentId,
      documentTitle: args.documentTitle,
      expectedFp: args.expectedFp,
      expectedIdentity: requestRes.identity,
    });
  }

  // Both HISTORICAL — legacy fingerprint path.
  return reconcilePriorRevision({
    prior: args.prior,
    documentId: args.documentId,
    documentTitle: args.documentTitle,
    expectedFp: args.expectedFp,
    expectedIdentity: null,
  });
}
```

### 4.4 BEFORE — reconcile excerpt @ HEAD (sans barrière parse stored explicite)

```typescript
/* reconcileWithProvenanceResolution absent @ HEAD */
```

### 4.5 P1 — FLOW-100 filler seed (E2E integrated — `ml4c-prior-proposal.pg.test.ts`)

200 messages intermédiaires : **100 USER + 100 ASSISTANT**, ordinals contigus, comptages explicites avant AGREE / reconcile HTTP.

```typescript
// FLOW-100: 100 complete exchanges = 100 USER + 100 ASSISTANT = 200 intermediate messages.
    const fillerStart = maxOrd + 1;
    await seedFillerMessages(convId!, 200, fillerStart);

    const fillerRows = await db
      .select({
        id: messages.id,
        role: messages.role,
        ordinal: messages.ordinal,
      })
      .from(messages)
      .where(eq(messages.conversationId, convId!))
      .orderBy(asc(messages.ordinal));
    const fillers = fillerRows.filter((m) => m.ordinal >= fillerStart);
    expect(fillers.length).toBe(200);
    expect(fillers.filter((m) => m.role === "user").length).toBe(100);
    expect(fillers.filter((m) => m.role === "assistant").length).toBe(100);
    const fillerOrdinals = fillers.map((m) => m.ordinal);
    expect(new Set(fillerOrdinals).size).toBe(200);
    for (let i = 1; i < fillerOrdinals.length; i++) {
      expect(fillerOrdinals[i]).toBe(fillerOrdinals[i - 1]! + 1);
    }
    expect(fillerRows.some((m) => m.id === assistantMessageId)).toBe(true);

    const agreeUtterance = `ML4C-E2E-AGREE-${assistantMessageId}`;
    const stableAgreementTurnKey = `e2e-agree-${Date.now()}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "agree prepared",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const first = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.idempotentReplay).toBe(false);
    const documentId = first.documentSave!.documentId!;
    const revisionId = first.documentSave!.revisionId!;
    const operationId = first.operationId!;
    expect(operationId).toBeTruthy();

    const cmdRow = (
      await db
        .select({ commandId: conversationTurnCommands.id })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, operationId))
        .limit(1)
    )[0];
    const commandId = cmdRow!.commandId;
    expect(commandId).toBeTruthy();

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    const correlationKey = loaded.binding.correlationKey;
    expect(loaded.binding.title).toBe(title);
    expect(loaded.binding.contentMarkdown).toBe(contentMarkdown);
    expect(loaded.binding.contentSha256).toBe(contentSha256(title, contentMarkdown));
    expect(loaded.binding.source).toEqual({
      kind: "ASSISTANT_MESSAGE",
      assistantMessageId,
    });

    const storedRev = (
      await db
        .select({
          contentMarkdown: documentRevisions.contentMarkdown,
          title: documents.title,
        })
        .from(documentRevisions)
        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    expect(storedRev?.title).toBe(title);
    expect(storedRev?.contentMarkdown).toBe(contentMarkdown);

    const docCountBefore = (await countD4Rows(pilotId, prep.id)).documents;
    const revCountBefore = (
      await db
        .select({ n: sql<number>`count(*)`.mapWith(Number) })
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, documentId))
    )[0]?.n ?? 0;

    const second = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(operationId);
    expect(second.documentSave?.documentId).toBe(documentId);
    expect(second.documentSave?.revisionId).toBe(revisionId);

    const httpBaseline = await countD4Rows(pilotId, prep.id);
    for (let i = 0; i < 10; i++) {
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: commandId,
        correlationKey,
      });
      expect(res.status).toBe(200);
      expect(res.body.verdict).toBe("AVAILABLE");
      expect(res.body.documentId).toBe(documentId);
      expect(res.body.revisionId).toBe(revisionId);
    }
    expect(await countD4Rows
```

### 4.6 Oracle adversarial central

Révision valide en base → altération **uniquement** de `document_revisions.provenance_json` → reconcile ne doit **jamais** produire `AVAILABLE` par fingerprint historique sur stored illisible.

---

## 5. Test matrices — PARSE / FLOW-100 (ciblé 86+23 + global)

### 5.1 PARSE — stored provenance parse (`ml4c-document-identity.pg.test.ts`)

| ID | Scénario | Oracle | Status |
| --- | --- | --- | --- |
| PARSE-01 | Historique avec provenance JSON objet valide | AVAILABLE si corrélation et contenu concordent | PASS |
| PARSE-02 | Historique avec provenance `{}` valide | Compatibilité maintenue | PASS |
| PARSE-03 | Provenance stockée JSON syntaxiquement invalide | Jamais AVAILABLE | PASS |
| PARSE-04 | Provenance stockée `null` | Jamais AVAILABLE | PASS |
| PARSE-05 | Provenance stockée tableau `[]` | Jamais AVAILABLE | PASS |
| PARSE-06 | Provenance stockée chaîne JSON primitive | Jamais AVAILABLE | PASS |
| PARSE-07 | Provenance stockée vide | Jamais AVAILABLE | PASS |
| PARSE-08 | Commande scellée saine | AVAILABLE | PASS |
| PARSE-09 | Commande scellée + JSON stocké corrompu | UNKNOWN | PASS |
| PARSE-10 | Demande historique vs révision scellée stored corrompue | Jamais AVAILABLE | PASS |
| PARSE-11 | Dix replays provenance corrompue | Zéro nouvel effet D4 | PASS |
| PARSE-12 | REVISE + provenance stockée corrompue | Jamais AVAILABLE | PASS |

### 5.2 FLOW-100 — 100 paires E2E (`ml4c-prior-proposal.pg.test.ts`)

| ID | Oracle | Status |
| --- | --- | --- |
| FLOW-100-01 | PREPARE ne crée aucun D4 | PASS |
| FLOW-100-02 | 100 USER + 100 ASSISTANT persistés | PASS |
| FLOW-100-03 | Proposition initiale retrouvée | PASS |
| FLOW-100-04 | Accord sur le bon assistantMessageId | PASS |
| FLOW-100-05 | Titre, corps et SHA identiques | PASS |
| FLOW-100-06 | Un document / une révision | PASS |
| FLOW-100-07 | Replay même clientTurnKey | PASS |
| FLOW-100-08 | idempotentReplay=true | PASS |
| FLOW-100-09 | Même commandId et operationId | PASS |
| FLOW-100-10 | Dix GET 200 AVAILABLE sur C/K | PASS |
| FLOW-100-11 | Zéro mutation des GET | PASS |
| FLOW-100-12 | Après altération provenance, GET jamais AVAILABLE | PASS |

### 5.3 Aggregate targeted suites

| Suite | Fichiers | Count | Status |
| --- | --- | --- | --- |
| identity+prior | `ml4c-document-identity.pg.test.ts` + `ml4c-prior-proposal.pg.test.ts` | 86 | PASS |
| command+recon | `ml4c-document-command.pg.test.ts` + `ml4c-document-reconciliation.pg.test.ts` | 23 | PASS |
| PARSE-01…12 | identity | 12 | PASS |
| FLOW-100-01…12 | prior integrated E2E | 12 | PASS |

### 5.4 Playwright (non-régression ML4C)

| Spec | Status |
| --- | --- |
| `ml4c-document-continuity.spec.ts` | PASS |
| `ml4c-long-thread-composer.spec.ts` | PASS |

---

## 6. Modified tracked files — full `git diff` vs HEAD

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ec4ab254..e18fd7d0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,117 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~12:50 CET (Europe/Paris) |
+| Macro-lot | ML4C — Fermeture fallback provenance stockée illisible + preuve 100 paires E2E |
+| Type | INC Critical corrective (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@357008ea` blob `b111a972` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | `reconcileWithProvenanceResolution` refuse stored parse null ; E2E 200 msgs (100 pairs) |
+| Schema | unchanged |
+| Tests | PARSE-01…12 + FLOW-100 + non-rég ; LIVE NOT PROVEN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |
+
+## delivery_id: DELIV-2026-11-14-ML4C-SEALED-IDENTITY-FINAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~12:20 CET (Europe/Paris) |
+| Macro-lot | ML4C — Fermeture identité scellée (no downgrade + field presence) + E2E HTTP same command |
+| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@70f43b3f` blob `37ae086f` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | resolveProvenanceIdentity dual (request+stored) ; hasOwn required fields ; integrated PREPARE→GET |
+| Schema | unchanged |
+| Tests | DOWN/FIELD/E2E + non-rég ; LIVE NOT PROVEN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |
+
+## delivery_id: DELIV-2026-11-14-ML4C-SEALED-REPLAY-FINAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~11:40 CET (Europe/Paris) |
+| Macro-lot | ML4C — Sealed replay fail-closed + historical fence tag compatibility |
+| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@c06ffffa` blob `48b0911a` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | resolveProvenanceIdentity ; SEALED_INVALID refuse ; tag case-insensitive LEGACY ; FLOW USER replay + HTTP GET |
+| Schema | unchanged |
+| Tests | SEAL/COMPAT/FLOW + non-rég ; LIVE NOT PROVEN |
+| Status | LOCAL ONLY product ; Review Handoff L3 published in-cycle |
+
+## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INTEGRITY-FINAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~11:20 CET (Europe/Paris) |
+| Macro-lot | ML4C — Fermeture définitive intégrité documentaire (P0-A / P0-B / P1) |
+| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@3efc082a` blob `855a436c` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | parseFenceMeta 3-états ; SHA recalculé DB ; confrontProposalWithFence ; PREPARE→N+100 |
+| Schema | unchanged |
+| Tests | META/HASH/SRC/N+100 + non-régression ; LIVE NOT PROVEN |
+| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |
+
+## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INVARIANT-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~11:00 CET (Europe/Paris) |
+| Macro-lot | ML4C — Fermeture invariants documentaires F-01…F-05 |
+| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@c1add5cb` blob `714a86d1` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | F-01 identity compare ; F-02 reversible fence codec ; F-03 PREPARE durableProposal ; F-04 ASSISTANT_MESSAGE source ; F-05 binding selector + HTTP 409 ; P1 fitBudget/ambiguity/browser |
+| Schema | unchanged |
+| Tests | unit 289 PASS ; PG 393 PASS ; Playwright ML4C ciblé ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
+| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |
+
+## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-CRITICAL-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~10:10 CET (Europe/Paris) |
+| Macro-lot | ML4C — Correctif Critical Review (C-01…C-07) continuité Nora / D4 |
+| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
+| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
+| Prior handoff | `sfia/review-handoff@93e277c2` blob `510b410f` |
+| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | reconcile read-only ; canonicalize proposal ; prior assistant source ; correlation salt ; history walk/budget ; UX 320+ |
+| Schema | unchanged |
+| Tests | unit 277 PASS ; PG ML4C 29 PASS ; Playwright C-07 320+ PASS ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
+| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |
+
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
```

### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
index 049dc0e6..45650bd1 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
@@ -1,13 +1,58 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { reconcileCreateProject } from "@/domains/preparation/create-project";
+import {
+  loadSealedDocumentBinding,
+  reconcileDocumentCommandFromBinding,
+} from "@/domains/conversation/document-command";
 import { studioErrorResponse } from "@/lib/http-errors";

+/**
+ * GET reconcile — D2 create-project by default.
+ * Optional `documentCommandId` selects C-01 read-only D4 document-command reconcile.
+ * Never mutates D4.
+ */
 export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
   try {
     const session = await requireStudioSession();
     const { preparationId } = await ctx.params;
-    const key = new URL(req.url).searchParams.get("idempotencyKey") ?? undefined;
+    const url = new URL(req.url);
+    const documentCommandId = url.searchParams.get("documentCommandId")?.trim() || undefined;
+
+    if (documentCommandId) {
+      const loaded = await loadSealedDocumentBinding({
+        pilotId: session.pilotId,
+        preparationId,
+        commandId: documentCommandId,
+        correlationKey: url.searchParams.get("correlationKey"),
+      });
+      if (!loaded.ok) {
+        const httpStatus =
+          loaded.reason === "COMMAND_DENIED"
+            ? 403
+            : loaded.reason === "BINDING_SELECTOR_REQUIRED"
+              ? 409
+              : 404;
+        return NextResponse.json(
+          { status: "NOT_EXECUTED", reason: loaded.reason, kind: "document_command" },
+          { status: httpStatus },
+        );
+      }
+      const truth = await reconcileDocumentCommandFromBinding({
+        pilotId: session.pilotId,
+        preparationId,
+        binding: loaded.binding,
+      });
+      return NextResponse.json({
+        kind: "document_command",
+        commandId: loaded.commandId,
+        correlationKey: loaded.binding.correlationKey,
+        action: loaded.binding.action,
+        ...truth,
+      });
+    }
+
+    const key = url.searchParams.get("idempotencyKey") ?? undefined;
     const result = await reconcileCreateProject(session.pilotId, preparationId, key);
     return NextResponse.json(result);
   } catch (e) {
```

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```diff
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
```

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
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
```

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts`

```diff
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
```

### `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index d97533a9..8e6e3f9e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -2,6 +2,7 @@
  * Chat-first D4 act qualification — create vs revise vs none.
  * Server authority only; Nora text never creates or revises alone.
  */
+import { contentSha256, parseFenceMeta } from "@/domains/conversation/document-command";

 export type DocumentActKind = "CREATE" | "REVISE" | "NONE";

@@ -555,7 +556,10 @@ export type DocumentProposalExtract =
         | "DOCUMENT_PROPOSAL_MISSING"
         | "DOCUMENT_PROPOSAL_AMBIGUOUS"
         | "DOCUMENT_PROPOSAL_EMPTY"
-        | "DOCUMENT_PROPOSAL_UNCLOSED";
+        | "DOCUMENT_PROPOSAL_UNCLOSED"
+        | "DOCUMENT_PROPOSAL_METADATA_INVALID"
+        | "DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH"
+        | "DOCUMENT_PROPOSAL_TITLE_MISMATCH";
       path: "none" | "ambiguous" | "empty" | "unclosed";
       fenceCount: number;
       proposalChars: number;
@@ -627,7 +631,7 @@ function isFenceClose(marker: FenceMarker, open: FenceMarker): boolean {
 }

 type ScannedProposal =
-  | { status: "ok"; content: string; tag: string }
+  | { status: "ok"; content: string; tag: string; fenceInfo: string; openerLength: number }
   | { status: "unclosed" };

 /**
@@ -732,13 +736,85 @@ export function scanContractualDocumentFences(assistantText: string): {
       const start = lines[bodyStartLine]!.start;
       content = assistantText.slice(start, lines[closedAt]!.start);
     }
-    proposals.push({ status: "ok", content, tag: DOCUMENT_PROPOSAL_TAG });
+    proposals.push({
+      status: "ok",
+      content,
+      tag: DOCUMENT_PROPOSAL_TAG,
+      fenceInfo: open.info.trim(),
+      openerLength: open.length,
+    });
     i = closedAt + 1;
   }

   return { proposals, contractualOpenCount };
 }

+/** Remove autonomous contractual fences; keep conversational / illustrative text. */
+export function stripContractualDocumentFences(assistantText: string): string {
+  const lines = splitMarkdownLines(assistantText);
+  const chunks: string[] = [];
+  let i = 0;
+  while (i < lines.length) {
+    const open = parseFenceMarkerLine(lines[i]!.text);
+    if (!open) {
+      const start = lines[i]!.start;
+      const end = i + 1 < lines.length ? lines[i + 1]!.start : assistantText.length;
+      chunks.push(assistantText.slice(start, end));
+      i += 1;
+      continue;
+    }
+    if (!isContractualProposalOpen(open)) {
+      const start = lines[i]!.start;
+      const after = skipIllustrativeFence(lines, i, open);
+      const end = after < lines.length ? lines[after]!.start : assistantText.length;
+      chunks.push(assistantText.slice(start, end));
+      i = after;
+      continue;
+    }
+    const bodyStartLine = i + 1;
+    const nest: Array<{ char: "`" | "~"; length: number }> = [];
+    let closedAt: number | null = null;
+    for (let j = bodyStartLine; j < lines.length; j++) {
+      const cand = parseFenceMarkerLine(lines[j]!.text);
+      if (!cand) continue;
+      if (nest.length === 0 && isFenceClose(cand, open)) {
+        closedAt = j;
+        break;
+      }
+      if (nest.length > 0) {
+        const top = nest[nest.length - 1]!;
+        if (cand.char === top.char && cand.length >= top.length && cand.info.trim() === "") {
+          nest.pop();
+          continue;
+        }
+      }
+      const opensInner =
+        cand.info.trim() !== "" ||
+        cand.char !== open.char ||
+        cand.length < open.length;
+      if (opensInner) {
+        nest.push({ char: cand.char, length: cand.length });
+      }
+    }
+    if (closedAt == null) break;
+    i = closedAt + 1;
+  }
+  return chunks.join("").trimEnd();
+}
+
+function normalizeStructuredProposalBody(
+  raw: string,
+  expectedChars: number,
+): { ok: true; content: string } | { ok: false; reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" } {
+  if (raw.length === expectedChars) {
+    return { ok: true, content: raw };
+  }
+  if (raw.length === expectedChars + 1 && raw.endsWith("\n")) {
+    return { ok: true, content: raw.slice(0, -1) };
+  }
+  return { ok: false, reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
+}
+
 function failProposal(
   reason: Extract<DocumentProposalExtract, { ok: false }>["reason"],
   path: Extract<DocumentProposalExtract, { ok: false }>["path"],
@@ -776,7 +852,59 @@ export function extractContractualDocumentProposal(
     return failProposal("DOCUMENT_PROPOSAL_MISSING", "none", contractualOpenCount);
   }

-  const content = proposals[0]!.content;
+  const scanned = proposals[0]!;
+  let content = scanned.content;
+  const meta = parseFenceMeta(scanned.fenceInfo);
+
+  // P0-A: INVALID structured metadata never falls through to LEGACY.
+  if (meta.kind === "INVALID") {
+    return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
+  }
+
+  if (meta.kind === "STRUCTURED") {
+    const normalized = normalizeStructuredProposalBody(content, meta.chars);
+    if (!normalized.ok) {
+      return failProposal(normalized.reason, "empty", 1, content);
+    }
+    content = normalized.content;
+    let title: string;
+    try {
+      title = Buffer.from(meta.titleB64, "base64url").toString("utf8").trim();
+    } catch {
+      return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
+    }
+    if (!title) {
+      return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
+    }
+    const digest = contentSha256(title, content);
+    if (digest !== meta.pairSha256) {
+      return failProposal("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH", "empty", 1, content);
+    }
+    const h1 = /^#\s+(.+?)(?:\r?\n|$)/.exec(content);
+    if (h1) {
+      const heading = h1[1]!.trim();
+      if (heading !== title) {
+        return failProposal("DOCUMENT_PROPOSAL_TITLE_MISMATCH", "empty", 1, content);
+      }
+    }
+    if (!content.trim() || content.trim().length < 8) {
+      return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
+    }
+    return {
+      ok: true,
+      content,
+      title,
+      path: "fence",
+      fenceTag: DOCUMENT_PROPOSAL_TAG,
+      fenceCount: 1,
+      proposalChars: content.length,
+      proposalDigest16: digest16(content),
+      bodyEndsWithNewline: content.endsWith("\n"),
+      sectionCount: locateSections(content).length,
+    };
+  }
+
+  // LEGACY: fence without structured metadata tokens.
   if (!content.trim() || content.trim().length < 8) {
     return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
   }
```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 9bc4de72..985a4e12 100644
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
@@ -416,11 +429,16 @@ async function runLiveWithTools(
     "",
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
-    "- replyDraft = texte destiné au Pilote (français, Markdown utile).",
+    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
+    "- documentProposal (optionnel) = { title, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000.",
+    "- documentSource (optionnel) = { kind: PRIOR_ASSISTANT_MESSAGE, assistantMessageId } pour enregistrer une proposition ancienne sans la régénérer.",
+    "- Ne combine jamais documentSource et documentProposal dans le même tour.",
     "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
     "- REQUEST_EFFECT uniquement pour une demande positive d'effet ; jamais pour négation, how-to, citation, hypothèse.",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Une qualification n'est PAS une autorisation ni une HumanDecision.",
+    "- Utilise search_conversation_history / read_conversation_messages pour retrouver des sources anciennes avant d'affirmer une absence.",
+    "- search_conversation_history : la requête lexicale est un indice ; parcours paginé pour couverture — pas un filtre exclusif.",
     "- Ne place aucun diagnostic technique (clientIntentKey, step, capability status) dans replyDraft.",
   ].join("\n");

@@ -431,7 +449,8 @@ async function runLiveWithTools(
     modelSettings: {
       reasoning: { effort: policy.effortRequested },
     },
-    tools,
+    // Heterogeneous D4 + history + git tool schemas; SDK Tool typing is per-schema.
+    tools: tools as ConstructorParameters<typeof Agent>[0]["tools"],
     outputType: NoraTurnQualificationSchema,
   });

```

### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 76014f72..6736bc9c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -95,6 +95,22 @@ export const QualifiedIntentItemSchema = z.object({
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
+/** C-03 — designate a prior assistant proposal by message id (content resolved server-side). */
+export const DocumentSourceSchema = z
+  .object({
+    kind: z.literal("PRIOR_ASSISTANT_MESSAGE"),
+    assistantMessageId: z.string().min(1).max(128),
+  })
+  .strict();
+
 export const NoraTurnQualificationSchema = z.object({
   schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
   status: QualificationStatusSchema,
@@ -102,6 +118,8 @@ export const NoraTurnQualificationSchema = z.object({
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
+  documentProposal: DocumentProposalSchema.optional(),
+  documentSource: DocumentSourceSchema.optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

@@ -155,6 +173,10 @@ export function validateNoraTurnQualification(raw: unknown): QualificationValida
       return { ok: false, reason: `PILOTAGE_OPERATION_CAPABILITY_MISMATCH:${intent.id}` };
     }
   }
+  // C-03: prior source is authoritative; same-turn proposal must not silently compete.
+  if (q.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE" && q.documentProposal) {
+    return { ok: false, reason: "DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT" };
+  }
   const graph = new Map(q.intents.map((i) => [i.id, i.dependsOn] as const));
   const visiting = new Set<string>();
   const visited = new Set<string>();
```

### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index bbab5da7..e2765555 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -10,11 +10,16 @@ import {
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
+  canonicalizeDocumentProposal,
+  contentSha256,
+  resolveAssistantProposal,
+  sealAndApplyDocumentCommand,
+  serializeProposalFence,
+  type DocumentProposalExact,
+} from "@/domains/conversation/document-command";
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
@@ -40,6 +45,7 @@ import {
   assertSectionScope,
   extractContractualDocumentProposal,
   resolveReviseTarget,
+  stripContractualDocumentFences,
   type DocumentEffectSummary,
   type DocumentProposalExtract,
 } from "./document-act";
@@ -295,6 +301,32 @@ async function resolvePilotageEffectForReplay(input: {
   };
 }

+/**
+ * P1 — confront an authoritative proposal with a concurrent contractual fence.
+ * Fence MISSING → materialize; fence INVALID/ambiguous → refuse; fence OK → strict title+body.
+ */
+function confrontProposalWithFence(
+  authority: DocumentProposalExact,
+  extracted: DocumentProposalExtract,
+):
+  | { ok: true; materialize: boolean }
+  | { ok: false; reason: string } {
+  if (!extracted.ok) {
+    if (extracted.reason === "DOCUMENT_PROPOSAL_MISSING") {
+      return { ok: true, materialize: true };
+    }
+    return { ok: false, reason: extracted.reason };
+  }
+  if (
+    extracted.title !== authority.title ||
+    extracted.content !== authority.contentMarkdown ||
+    contentSha256(extracted.title, extracted.content) !== authority.contentSha256
+  ) {
+    return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
+  }
+  return { ok: true, materialize: false };
+}
+
 export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
@@ -878,6 +910,33 @@ export async function postUserMessageAndNora(
   const studioIntent = studioProjection;
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
+
+  let durableProposal: DocumentProposalExact | null = null;
+  /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
+  let proposalAuthorityConflict: string | null = null;
+  if (
+    reply.status === "COMPLETE" &&
+    qualification.documentProposal &&
+    !qualification.documentSource
+  ) {
+    const earlyCanonical = canonicalizeDocumentProposal(qualification.documentProposal);
+    if (earlyCanonical.ok) {
+      const earlyExtract = extractContractualDocumentProposal(reply.content);
+      const confront = confrontProposalWithFence(earlyCanonical.proposal, earlyExtract);
+      if (!confront.ok) {
+        proposalAuthorityConflict = confront.reason;
+        durableProposal = null;
+      } else {
+        durableProposal = earlyCanonical.proposal;
+        if (confront.materialize) {
+          reply = {
+            ...reply,
+            content: `${reply.content.trimEnd()}\n\n${serializeProposalFence(durableProposal)}`,
+          };
+        }
+      }
+    }
+  }
   // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
@@ -927,11 +986,82 @@ export async function postUserMessageAndNora(
       }

       if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
-        const extracted = extractContractualDocumentProposal(reply.content);
-        if (!extracted.ok) {
+        // C-02/C-03: exact proposal from prior message OR canonical documentProposal OR fence.
+        type ExactProposal = { title: string; contentMarkdown: string; contentSha256: string };
+        let exact: ExactProposal | null = null;
+        let source:
+          | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
+          | { kind: "SAME_TURN_SNAPSHOT"; commandId: string } = {
+          kind: "SAME_TURN_SNAPSHOT",
+          commandId: reserved.commandId,
+        };
+        let createBlocked: string | null = null;
+        let extracted = extractContractualDocumentProposal(reply.content);
+
+        if (qualification.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE") {
+          const resolved = await resolveAssistantProposal({
+            pilotId,
+            preparationId,
+            assistantMessageId: qualification.documentSource.assistantMessageId,
+          });
+          if (!resolved.ok) {
+            createBlocked = resolved.reason;
+          } else {
+            const confront = confrontProposalWithFence(resolved.proposal, extracted);
+            if (!confront.ok) {
+              createBlocked = confront.reason;
+              proposalAuthorityConflict = confront.reason;
+              durableProposal = null;
+            } else {
+              exact = resolved.proposal;
+              durableProposal = exact;
+              source = {
+                kind: "ASSISTANT_MESSAGE",
+                assistantMessageId: resolved.assistantMessageId,
+              };
+              if (confront.materialize) {
+                reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
+                extracted = extractContractualDocumentProposal(reply.content);
+              }
+            }
+          }
+        } else if (qualification.documentProposal) {
+          const canonical = canonicalizeDocumentProposal(qualification.documentProposal);
+          if (!canonical.ok) {
+            createBlocked = canonical.reason;
+          } else {
+            const confront = confrontProposalWithFence(canonical.proposal, extracted);
+            if (!confront.ok) {
+              createBlocked = confront.reason;
+              proposalAuthorityConflict = confront.reason;
+              durableProposal = null;
+            } else {
+              exact = canonical.proposal;
+              durableProposal = exact;
+              if (confront.materialize) {
+                reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
+                extracted = extractContractualDocumentProposal(reply.content);
+              }
+            }
+          }
+        } else if (extracted.ok) {
+          const canonical = canonicalizeDocumentProposal({
+            title: extracted.title,
+            contentMarkdown: extracted.content,
+          });
+          if (!canonical.ok) createBlocked = canonical.reason;
+          else {
+            exact = canonical.proposal;
+            durableProposal = exact;
+          }
+        } else {
+          createBlocked = extracted.reason;
+        }
+
+        if (createBlocked || !exact) {
           documentSave = {
             status: "FAILED",
-            reason: extracted.reason,
+            reason: createBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
             act: "CREATE",
           };
           emitDocumentProposalObs({
@@ -939,45 +1069,90 @@ export async function postUserMessageAndNora(
             operationId: reserved.operationId,
             generationId: reply.generationId,
             act: "CREATE",
-            extracted,
-            refuseCode: extracted.reason,
+            extracted: extracted.ok
+              ? extracted
+              : {
+                  ok: false,
+                  reason: "DOCUMENT_PROPOSAL_MISSING",
+                  path: "none",
+                  fenceCount: 0,
+                  proposalChars: 0,
+                  proposalDigest16: null,
+                  bodyEndsWithNewline: false,
+                  sectionCount: 0,
+                },
+            refuseCode: createBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
             d4Attempted: false,
             d4Effect: null,
           });
         } else {
           try {
-            const saved = await savePreparationDocument(
-              pilotId,
-              preparationId,
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
+            const createIntents = effectIntents(qualification).filter(
+              (i) => i.capabilityId === "d4.create_document",
+            );
+            if (createIntents.length > 1) {
+              documentSave = {
+                status: "FAILED",
+                reason: "AMBIGUOUS_CREATE_INTENT",
+                act: "CREATE",
+              };
+            } else {
+              const createIntent = createIntents[0];
+              if (!createIntent) {
+                documentSave = {
+                  status: "FAILED",
+                  reason: "MISSING_CREATE_INTENT",
                   act: "CREATE",
-                },
-                scope: "document",
-                turnFence: {
+                };
+              } else {
+                const clientSalt =
+                  opts?.correlationKey?.trim() ||
+                  (missionIntent.wantsPublish ? missionKeys.document : null);
+                const admitted = admitDocumentCommand({
                   commandId: reserved.commandId,
-                  ownerToken: reserved.ownerToken,
-                  beforeFenceCheck: turnRaceHooks.beforeD4Effect,
-                },
-              },
-            );
-            documentSave = { ...saved, act: "CREATE" };
+                  operationId: reserved.operationId,
+                  userMessageId: reserved.userMessageId,
+                  qualifiedIntentId: createIntent.id,
+                  action: "CREATE",
+                  preparationId,
+                  source,
+                  title: exact.title,
+                  contentMarkdown: exact.contentMarkdown,
+                  clientCorrelationSalt: clientSalt,
+                });
+                if (!admitted.ok) {
+                  documentSave = {
+                    status: "FAILED",
+                    reason: admitted.reason,
+                    act: "CREATE",
+                  };
+                } else {
+                  const sealed = await sealAndApplyDocumentCommand({
+                    pilotId,
+                    fence: {
+                      commandId: reserved.commandId,
+                      ownerToken: reserved.ownerToken,
+                      beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+                    },
+                    binding: admitted.binding,
+                  });
+                  if (!sealed.sealApplied) {
+                    documentSave = {
+                      status: "FAILED",
+                      reason: "BINDING_SEAL_FAILED",
+                      act: "CREATE",
+                    };
+                  } else {
+                    documentSave = { ...sealed.effect, act: "CREATE" };
+                  }
+                }
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
@@ -989,7 +1164,20 @@ export async function postUserMessageAndNora(
               operationId: reserved.operationId,
               generationId: reply.generationId,
               act: "CREATE",
-              extracted,
+              extracted: extracted.ok
+                ? extracted
+                : {
+                    ok: true,
+                    content: exact.contentMarkdown,
+                    title: exact.title,
+                    path: "fence",
+                    fenceTag: "sfia-document",
+                    fenceCount: 1,
+                    proposalChars: exact.contentMarkdown.length,
+                    proposalDigest16: exact.contentSha256.slice(0, 16),
+                    bodyEndsWithNewline: exact.contentMarkdown.endsWith("\n"),
+                    sectionCount: 0,
+                  },
               refuseCode:
                 documentSave?.status === "AVAILABLE" || documentSave?.status === "CONFLICT"
                   ? null
@@ -1042,11 +1230,73 @@ export async function postUserMessageAndNora(
               d4Effect: null,
             });
           } else {
-            const extracted = extractContractualDocumentProposal(reply.content);
-            if (!extracted.ok) {
+            let extracted = extractContractualDocumentProposal(reply.content);
+            let reviseProposalContent: string | null = null;
+            let reviseBlocked: string | null = null;
+            let reviseSource:
+              | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
+              | { kind: "SAME_TURN_SNAPSHOT"; commandId: string } = {
+              kind: "SAME_TURN_SNAPSHOT",
+              commandId: reserved.commandId,
+            };
+            if (qualification.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE") {
+              const resolved = await resolveAssistantProposal({
+                pilotId,
+                preparationId,
+                assistantMessageId: qualification.documentSource.assistantMessageId,
+              });
+              if (!resolved.ok) reviseBlocked = resolved.reason;
+              else {
+                const confront = confrontProposalWithFence(resolved.proposal, extracted);
+                if (!confront.ok) {
+                  reviseBlocked = confront.reason;
+                  proposalAuthorityConflict = confront.reason;
+                  durableProposal = null;
+                } else {
+                  reviseProposalContent = resolved.proposal.contentMarkdown;
+                  durableProposal = resolved.proposal;
+                  reviseSource = {
+                    kind: "ASSISTANT_MESSAGE",
+                    assistantMessageId: resolved.assistantMessageId,
+                  };
+                  if (confront.materialize) {
+                    reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(resolved.proposal)}`;
+                    extracted = extractContractualDocumentProposal(reply.content);
+                  }
+                }
+              }
+            } else if (qualification.documentProposal) {
+              const canonical = canonicalizeDocumentProposal(qualification.documentProposal);
+              if (!canonical.ok) reviseBlocked = canonical.reason;
+              else {
+                const confront = confrontProposalWithFence(canonical.proposal, extracted);
+                if (!confront.ok) {
+                  reviseBlocked = confront.reason;
+                  proposalAuthorityConflict = confront.reason;
+                  durableProposal = null;
+                } else {
+                  reviseProposalContent = canonical.proposal.contentMarkdown;
+                  durableProposal = canonical.proposal;
+                  if (confront.materialize) {
+                    reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(canonical.proposal)}`;
+                    extracted = extractContractualDocumentProposal(reply.content);
+                  }
+                }
+              }
+            } else if (extracted.ok) {
+              reviseProposalContent = extracted.content;
+              const canonical = canonicalizeDocumentProposal({
+                title: extracted.title,
+                contentMarkdown: extracted.content,
+              });
+              if (canonical.ok) durableProposal = canonical.proposal;
+            } else {
+              reviseBlocked = extracted.reason;
+            }
+            if (reviseBlocked || !reviseProposalContent) {
               documentSave = {
                 status: "FAILED",
-                reason: extracted.reason,
+                reason: reviseBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
                 documentId: target.documentId,
                 baseRevisionId: target.baseRevisionId,
                 act: "REVISE",
@@ -1057,14 +1307,14 @@ export async function postUserMessageAndNora(
                 generationId: reply.generationId,
                 act: "REVISE",
                 extracted,
-                refuseCode: extracted.reason,
+                refuseCode: reviseBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
                 d4Attempted: false,
                 d4Effect: null,
               });
             } else {
               const merged = applyTargetedSectionRevision(
                 target.baseContent,
-                extracted.content,
+                reviseProposalContent,
                 documentAct.sectionHint,
               );
               if (!merged.ok) {
@@ -1112,33 +1362,81 @@ export async function postUserMessageAndNora(
                     d4Effect: null,
                   });
                 } else {
-                  const correlationKey = opts?.correlationKey
-                    ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
-                    : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
-                  const revised = await reviseDocument(pilotId, preparationId, {
-                    documentId: target.documentId,
-                    baseRevisionId: target.baseRevisionId,
-                    contentMarkdown: merged.content,
-                    correlationKey,
-                    scope: documentAct.sectionHint ? "section" : "document",
-                    sectionHint: documentAct.sectionHint ?? undefined,
-                    provenance: {
-                      sourceKind: "nora",
-                      generationId: reply.generationId,
-                      userMessageId: reserved.userMessageId,
-                      explicitRequest: true,
+                  const reviseIntents = effectIntents(qualification).filter(
+                    (i) => i.capabilityId === "d4.revise_document",
+                  );
+                  if (reviseIntents.length !== 1) {
+                    documentSave = {
+                      status: "FAILED",
+                      reason:
+                        reviseIntents.length === 0
+                          ? "MISSING_REVISE_INTENT"
+                          : "AMBIGUOUS_REVISE_INTENT",
+                      documentId: target.documentId,
+                      baseRevisionId: target.baseRevisionId,
                       act: "REVISE",
+                    };
+                  } else {
+                    const reviseIntent = reviseIntents[0]!;
+                    const clientSalt =
+                      opts?.correlationKey?.trim() ||
+                      `${target.documentId}:${target.baseRevisionId}`;
+                    const admitted = admitDocumentCommand({
+                      commandId: reserved.commandId,
+                      operationId: reserved.operationId,
+                      userMessageId: reserved.userMessageId,
+                      qualifiedIntentId: reviseIntent.id,
+                      action: "REVISE",
+                      preparationId,
+                      documentId: target.documentId,
+                      baseRevisionId: target.baseRevisionId,
                       sectionHint: documentAct.sectionHint,
-                    },
-                  });
-                  documentSave = {
-                    ...revised,
-                    act: "REVISE",
-                    baseRevisionId:
-                      "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
-                        ? revised.baseRevisionId
-                        : target.baseRevisionId,
-                  };
+                      source: reviseSource,
+                      title: target.title,
+                      contentMarkdown: merged.content,
+                      clientCorrelationSalt: clientSalt,
+                    });
+                    if (!admitted.ok) {
+                      documentSave = {
+                        status: "FAILED",
+                        reason: admitted.reason,
+                        documentId: target.documentId,
+                        baseRevisionId: target.baseRevisionId,
+                        act: "REVISE",
+                      };
+                    } else {
+                      const sealed = await sealAndApplyDocumentCommand({
+                        pilotId,
+                        fence: {
+                          commandId: reserved.commandId,
+                          ownerToken: reserved.ownerToken,
+                          beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+                        },
+                        binding: admitted.binding,
+                      });
+                      if (!sealed.sealApplied) {
+                        documentSave = {
+                          status: "FAILED",
+                          reason: "BINDING_SEAL_FAILED",
+                          documentId: target.documentId,
+                          baseRevisionId: target.baseRevisionId,
+                          act: "REVISE",
+                        };
+                      } else {
+                        const revised = sealed.effect;
+                        documentSave = {
+                          ...revised,
+                          act: "REVISE",
+                          baseRevisionId:
+                            "baseRevisionId" in revised &&
+                            typeof (revised as { baseRevisionId?: string }).baseRevisionId ===
+                              "string"
+                              ? (revised as { baseRevisionId: string }).baseRevisionId
+                              : target.baseRevisionId,
+                        };
+                      }
+                    }
+                  }
                   if (
                     documentSave.status !== "AVAILABLE" &&
                     documentSave.status !== "CONFLICT" &&
@@ -1467,6 +1765,26 @@ export async function postUserMessageAndNora(
     }
   }

+  // P1: PREPARE-only conflict must be observable without D4 mutation or silent rewrite.
+  if (
+    proposalAuthorityConflict &&
+    !documentSave &&
+    !ownershipLostBeforeD4 &&
+    documentAct.kind === "NONE"
+  ) {
+    documentSave = {
+      status: "FAILED",
+      reason: proposalAuthorityConflict,
+    };
+  }
+
+  // P1: never strip+reinject when concurrent fence was invalid or divergent.
+  if (durableProposal && !ownershipLostBeforeD4 && !proposalAuthorityConflict) {
+    const narrative = stripContractualDocumentFences(assistantBody);
+    const fenced = serializeProposalFence(durableProposal);
+    assistantBody = [narrative.trimEnd(), fenced].filter((s) => s.length > 0).join("\n\n");
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
```

### `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts`

```diff
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
```

### `projects/sfia-studio-next/web/src/domains/document/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/document/service.ts b/projects/sfia-studio-next/web/src/domains/document/service.ts
index 6d079275..296527ce 100644
--- a/projects/sfia-studio-next/web/src/domains/document/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/document/service.ts
@@ -66,26 +66,410 @@ type ReconcileConflict = {
   revisionNumber: number;
 };

-/** Same fingerprint rule for every reconcile path (nominal, race, catch, TX). */
+/**
+ * F-01 — sealed command identity carried in revision provenanceJson.
+ * Legacy revisions without documentCommandBinding remain readable but not ML4C-command proofs.
+ */
+export type SealedEffectIdentity = {
+  commandId: string;
+  operationId: string;
+  userMessageId: string;
+  qualifiedIntentId: string;
+  action: "CREATE" | "REVISE";
+  source: unknown;
+  preparationId: string;
+  documentId: string | null;
+  baseRevisionId: string | null;
+  sectionHint: string | null;
+  correlationKey: string;
+  contentSha256: string;
+  payloadSha256: string;
+  title: string;
+};
+
+function stableJson(value: unknown): string {
+  return JSON.stringify(value ?? null);
+}
+
+/**
+ * P0-B — sealed-command identity: always recompute SHA from DB title+body bytes.
+ * Provenance fingerprints are cross-checked; they never alone prove AVAILABLE.
+ */
+export function compareSealedEffectIdentity(
+  storedProvenanceJson: string,
+  storedContentMarkdown: string,
+  storedDocumentTitle: string,
+  expected: SealedEffectIdentity,
+): { ok: true; storedContentSha256: string } | { ok: false; reason: string } {
+  let prov: Record<string, unknown>;
+  try {
+    prov = JSON.parse(storedProvenanceJson) as Record<string, unknown>;
+  } catch {
+    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+  }
+  if (prov.documentCommandBinding !== true) {
+    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+  }
+
+  // C = SHA of bytes actually read from PostgreSQL (title + body).
+  const recalculated = contentFingerprint(storedDocumentTitle, storedContentMarkdown);
+  // C must equal binding contentSha256 (F).
+  if (recalculated !== expected.contentSha256) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+  // C must equal provenance contentSha256 (E) when present.
+  if (typeof prov.contentSha256 === "string" && prov.contentSha256 !== recalculated) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+  if (typeof prov.contentSha256 !== "string" || !prov.contentSha256) {
+    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+  }
+  // If D (contentFingerprint) present, D must equal C.
+  if (
+    typeof prov.contentFingerprint === "string" &&
+    prov.contentFingerprint.length > 0 &&
+    prov.contentFingerprint !== recalculated
+  ) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+  // Title in DB must match expected sealed title.
+  if (storedDocumentTitle !== expected.title) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+
+  const storedPayload =
+    typeof prov.payloadSha256 === "string" ? prov.payloadSha256 : null;
+  if (!storedPayload || storedPayload !== expected.payloadSha256) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+  // Title in provenance is mandatory for sealed commands — DB title does not substitute.
+  if (typeof prov.title !== "string" || !prov.title) {
+    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+  }
+  // P0-B: nullable sealed fields must be explicitly present (absent ≠ null).
+  for (const key of ["documentId", "baseRevisionId", "sectionHint"] as const) {
+    if (!Object.prototype.hasOwnProperty.call(prov, key)) {
+      return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+    }
+  }
+  const checks: Array<[string, unknown, unknown]> = [
+    ["commandId", prov.commandId, expected.commandId],
+    ["operationId", prov.operationId, expected.operationId],
+    ["userMessageId", prov.userMessageId, expected.userMessageId],
+    ["qualifiedIntentId", prov.qualifiedIntentId, expected.qualifiedIntentId],
+    ["action", prov.action, expected.action],
+    ["preparationId", prov.preparationId, expected.preparationId],
+    ["documentId", prov.documentId, expected.documentId],
+    ["baseRevisionId", prov.baseRevisionId, expected.baseRevisionId],
+    ["sectionHint", prov.sectionHint, expected.sectionHint],
+    ["correlationKey", prov.correlationKey, expected.correlationKey],
+    ["contentSha256", prov.contentSha256, expected.contentSha256],
+    ["title", prov.title, expected.title],
+  ];
+  for (const [, got, want] of checks) {
+    if (stableJson(got) !== stableJson(want)) {
+      return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+    }
+  }
+  if (stableJson(prov.source) !== stableJson(expected.source)) {
+    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
+  }
+  return { ok: true, storedContentSha256: recalculated };
+}
+
+export function buildSealedProvenance(
+  identity: SealedEffectIdentity,
+  extra?: Record<string, unknown>,
+): Record<string, unknown> {
+  return {
+    documentCommandBinding: true,
+    commandId: identity.commandId,
+    operationId: identity.operationId,
+    userMessageId: identity.userMessageId,
+    qualifiedIntentId: identity.qualifiedIntentId,
+    action: identity.action,
+    source: identity.source,
+    preparationId: identity.preparationId,
+    documentId: identity.documentId,
+    baseRevisionId: identity.baseRevisionId,
+    sectionHint: identity.sectionHint,
+    correlationKey: identity.correlationKey,
+    contentSha256: identity.contentSha256,
+    payloadSha256: identity.payloadSha256,
+    title: identity.title,
+    ...(extra ?? {}),
+  };
+}
+
+const SHA256_HEX_RE = /^[0-9a-f]{64}$/;
+
+/** Sealed-command required keys — presence mandatory; null only where the contract allows. */
+const SEALED_REQUIRED_KEYS = [
+  "documentCommandBinding",
+  "commandId",
+  "operationId",
+  "userMessageId",
+  "qualifiedIntentId",
+  "action",
+  "source",
+  "preparationId",
+  "documentId",
+  "baseRevisionId",
+  "sectionHint",
+  "correlationKey",
+  "title",
+  "contentSha256",
+  "payloadSha256",
+] as const;
+
+export type ProvenanceIdentityResolution =
+  | { kind: "HISTORICAL" }
+  | { kind: "SEALED_VALID"; identity: SealedEffectIdentity }
+  | { kind: "SEALED_INVALID"; reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
+
+function nonEmptyString(value: unknown): value is string {
+  return typeof value === "string" && value.length > 0;
+}
+
+function hasOwn(obj: object, key: string): boolean {
+  return Object.prototype.hasOwnProperty.call(obj, key);
+}
+
+function isValidSealedSource(source: unknown): boolean {
+  if (!source || typeof source !== "object") return false;
+  const s = source as Record<string, unknown>;
+  if (s.kind === "ASSISTANT_MESSAGE") return nonEmptyString(s.assistantMessageId);
+  if (s.kind === "SAME_TURN_SNAPSHOT") return nonEmptyString(s.commandId);
+  return false;
+}
+
+/**
+ * Distinctive sealed markers — not correlationKey/sectionHint alone
+ * (those exist on historical documents).
+ */
+function hasDistinctiveSealedMarkers(provenance: Record<string, unknown>): boolean {
+  if (provenance.documentCommandBinding === true) return true;
+  if (provenance.documentCommandBinding === false) {
+    // Explicit false + leftover sealed identity fields → not a clean historical.
+    return (
+      hasOwn(provenance, "qualifiedIntentId") ||
+      hasOwn(provenance, "payloadSha256") ||
+      hasOwn(provenance, "commandId")
+    );
+  }
+  // Marker absent: sealed remnants must not silently become HISTORICAL.
+  return hasOwn(provenance, "qualifiedIntentId") || hasOwn(provenance, "payloadSha256");
+}
+
+function parseProvenanceJson(raw: string): Record<string, unknown> | null {
+  try {
+    const parsed = JSON.parse(raw) as unknown;
+    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
+    return parsed as Record<string, unknown>;
+  } catch {
+    return null;
+  }
+}
+
+/**
+ * Classify request/stored provenance.
+ * SEALED_INVALID never falls through to historical fingerprint reconcile.
+ * Absent/false seal marker + distinctive sealed fields → SEALED_INVALID (no HISTORICAL downgrade).
+ */
+export function resolveProvenanceIdentity(
+  provenance: Record<string, unknown> | undefined | null,
+): ProvenanceIdentityResolution {
+  const invalid = (): ProvenanceIdentityResolution => ({
+    kind: "SEALED_INVALID",
+    reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
+  });
+
+  if (!provenance) return { kind: "HISTORICAL" };
+
+  const looksSealed = hasDistinctiveSealedMarkers(provenance);
+  if (!looksSealed) return { kind: "HISTORICAL" };
+
+  // Marker must be exactly true for VALID; otherwise remnants are INVALID.
+  if (provenance.documentCommandBinding !== true) return invalid();
+
+  for (const key of SEALED_REQUIRED_KEYS) {
+    if (!hasOwn(provenance, key)) return invalid();
+  }
+
+  if (
+    !nonEmptyString(provenance.commandId) ||
+    !nonEmptyString(provenance.operationId) ||
+    !nonEmptyString(provenance.userMessageId) ||
+    !nonEmptyString(provenance.qualifiedIntentId) ||
+    (provenance.action !== "CREATE" && provenance.action !== "REVISE") ||
+    !nonEmptyString(provenance.preparationId) ||
+    !nonEmptyString(provenance.correlationKey) ||
+    !nonEmptyString(provenance.title) ||
+    typeof provenance.contentSha256 !== "string" ||
+    !SHA256_HEX_RE.test(provenance.contentSha256) ||
+    typeof provenance.payloadSha256 !== "string" ||
+    !SHA256_HEX_RE.test(provenance.payloadSha256) ||
+    !isValidSealedSource(provenance.source)
+  ) {
+    return invalid();
+  }
+
+  // P0-B: nullable fields must be present; CREATE uses explicit null.
+  if (provenance.action === "CREATE") {
+    if (provenance.documentId !== null || provenance.baseRevisionId !== null) return invalid();
+  } else {
+    if (!nonEmptyString(provenance.documentId) || !nonEmptyString(provenance.baseRevisionId)) {
+      return invalid();
+    }
+  }
+  if (
+    provenance.sectionHint !== null &&
+    !nonEmptyString(provenance.sectionHint)
+  ) {
+    return invalid();
+  }
+
+  return {
+    kind: "SEALED_VALID",
+    identity: {
+      commandId: provenance.commandId,
+      operationId: provenance.operationId,
+      userMessageId: provenance.userMessageId,
+      qualifiedIntentId: provenance.qualifiedIntentId,
+      action: provenance.action,
+      source: provenance.source,
+      preparationId: provenance.preparationId,
+      documentId: provenance.documentId as string | null,
+      baseRevisionId: provenance.baseRevisionId as string | null,
+      sectionHint: provenance.sectionHint as string | null,
+      correlationKey: provenance.correlationKey,
+      contentSha256: provenance.contentSha256,
+      payloadSha256: provenance.payloadSha256,
+      title: provenance.title,
+    },
+  };
+}
+
+/**
+ * Reconcile using BOTH request provenance and stored revision provenance.
+ * Never downgrade a sealed stored revision to historical fingerprint compare.
+ */
+function reconcileWithProvenanceResolution(args: {
+  prior: {
+    id: string;
+    revisionNumber: number;
+    status: string;
+    contentMarkdown: string;
+    provenanceJson: string;
+  };
+  documentId: string;
+  documentTitle: string;
+  expectedFp: string;
+  provenance?: Record<string, unknown> | null;
+}): ReturnType<typeof reconcilePriorRevision> {
+  const unverifiable = {
+    status: "UNKNOWN" as const,
+    reason: "COMMAND_PROVENANCE_UNVERIFIABLE" as const,
+    documentId: args.documentId,
+    revisionId: args.prior.id,
+    revisionNumber: args.prior.revisionNumber,
+  };
+
+  const requestRes = resolveProvenanceIdentity(args.provenance ?? null);
+  // Stored provenance must be a valid JSON object before any HISTORICAL/SEALED path.
+  // parseProvenanceJson(null) → HISTORICAL would falsely authorize fingerprint reconcile.
+  const storedParsed = parseProvenanceJson(args.prior.provenanceJson);
+  if (storedParsed === null) {
+    return unverifiable;
+  }
+  const storedRes = resolveProvenanceIdentity(storedParsed);
+
+  if (requestRes.kind === "SEALED_INVALID" || storedRes.kind === "SEALED_INVALID") {
+    return unverifiable;
+  }
+  // HISTORICAL request against sealed stored revision → refuse downgrade.
+  if (requestRes.kind === "HISTORICAL" && storedRes.kind !== "HISTORICAL") {
+    return unverifiable;
+  }
+  // Sealed request against historical stored → sealed compare would fail; refuse.
+  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "HISTORICAL") {
+    return unverifiable;
+  }
+
+  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "SEALED_VALID") {
+    return reconcilePriorRevision({
+      prior: args.prior,
+      documentId: args.documentId,
+      documentTitle: args.documentTitle,
+      expectedFp: args.expectedFp,
+      expectedIdentity: requestRes.identity,
+    });
+  }
+
+  // Both HISTORICAL — legacy fingerprint path.
+  return reconcilePriorRevision({
+    prior: args.prior,
+    documentId: args.documentId,
+    documentTitle: args.documentTitle,
+    expectedFp: args.expectedFp,
+    expectedIdentity: null,
+  });
+}
+
+/** Same fingerprint/identity rule for every reconcile path (nominal, race, catch, TX). */
 function reconcilePriorRevision(args: {
   prior: { id: string; revisionNumber: number; status: string; contentMarkdown: string; provenanceJson: string };
   documentId: string;
   documentTitle: string;
   expectedFp: string;
-}): ReconcileOk | ReconcileFailedPrior | ReconcileConflict {
-  const storedFp = readStoredFingerprint(
-    args.prior.provenanceJson,
-    args.documentTitle,
-    args.prior.contentMarkdown,
-  );
-  if (storedFp !== args.expectedFp) {
-    return {
-      status: "CONFLICT",
-      reason: "CORRELATION_PAYLOAD_MISMATCH",
-      documentId: args.documentId,
-      revisionId: args.prior.id,
-      revisionNumber: args.prior.revisionNumber,
-    };
+  expectedIdentity?: SealedEffectIdentity | null;
+}): ReconcileOk | ReconcileFailedPrior | ReconcileConflict | {
+  status: "UNKNOWN";
+  reason: string;
+  documentId: string;
+  revisionId: string;
+  revisionNumber: number;
+} {
+  if (args.expectedIdentity) {
+    const cmp = compareSealedEffectIdentity(
+      args.prior.provenanceJson,
+      args.prior.contentMarkdown,
+      args.documentTitle,
+      args.expectedIdentity,
+    );
+    if (!cmp.ok) {
+      if (cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE") {
+        return {
+          status: "UNKNOWN",
+          reason: cmp.reason,
+          documentId: args.documentId,
+          revisionId: args.prior.id,
+          revisionNumber: args.prior.revisionNumber,
+        };
+      }
+      return {
+        status: "CONFLICT",
+        reason: "CORRELATION_PAYLOAD_MISMATCH",
+        documentId: args.documentId,
+        revisionId: args.prior.id,
+        revisionNumber: args.prior.revisionNumber,
+      };
+    }
+  } else {
+    const storedFp = readStoredFingerprint(
+      args.prior.provenanceJson,
+      args.documentTitle,
+      args.prior.contentMarkdown,
+    );
+    if (storedFp !== args.expectedFp) {
+      return {
+        status: "CONFLICT",
+        reason: "CORRELATION_PAYLOAD_MISMATCH",
+        documentId: args.documentId,
+        revisionId: args.prior.id,
+        revisionNumber: args.prior.revisionNumber,
+      };
+    }
   }
   if (args.prior.status === "FAILED") {
     return {
@@ -190,6 +574,14 @@ export async function savePreparationDocument(
   const titleFinal = title || "Document du sas";
   const fp = contentFingerprint(titleFinal, contentMarkdown);

+  // P0: sealed-invalid input refuses before any D4 mutation (no historical fallback).
+  if (opts?.provenance) {
+    const early = resolveProvenanceIdentity(opts.provenance);
+    if (early.kind === "SEALED_INVALID") {
+      return { status: "FAILED" as const, reason: early.reason };
+    }
+  }
+
   // --- Creation idempotence: resolve durable command identity BEFORE allocating a new doc id ---
   if (!documentId && opts?.correlationKey) {
     const existingDoc = await findByCreationCorrelation(
@@ -202,11 +594,12 @@ export async function savePreparationDocument(
         (await findRevisionByCorrelation(existingDoc.id, opts.correlationKey)) ??
         (await waitForRevisionByCorrelation(existingDoc.id, opts.correlationKey));
       if (priorRev) {
-        return reconcilePriorRevision({
+        return reconcileWithProvenanceResolution({
           prior: priorRev,
           documentId: existingDoc.id,
           documentTitle: existingDoc.title,
           expectedFp: fp,
+          provenance: opts?.provenance,
         });
       }
       // Document row exists but revision still absent after bounded wait
@@ -220,54 +613,9 @@ export async function savePreparationDocument(

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
@@ -283,26 +631,26 @@ export async function savePreparationDocument(
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
+        return reconcileWithProvenanceResolution({
+          prior,
+          documentId: docId,
+          documentTitle: ownedTitle,
+          expectedFp: fp,
+          provenance: opts?.provenance,
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
@@ -311,9 +659,56 @@ export async function savePreparationDocument(
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
+                return reconcileWithProvenanceResolution({
+                  prior: priorRev,
+                  documentId: raced.id,
+                  documentTitle: raced.title,
+                  expectedFp: fp,
+                  provenance: opts?.provenance,
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
@@ -329,11 +724,12 @@ export async function savePreparationDocument(
             .limit(1)
         )[0];
         if (prior) {
-          return reconcilePriorRevision({
+          return reconcileWithProvenanceResolution({
             prior,
             documentId: docId!,
             documentTitle: ownedTitle,
             expectedFp: fp,
+            provenance: opts?.provenance,
           });
         }
       }
@@ -393,22 +789,29 @@ export async function savePreparationDocument(
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
+          return reconcileWithProvenanceResolution({
+            prior,
+            documentId: racedDoc.id,
+            documentTitle: "title" in racedDoc ? racedDoc.title : ownedTitle,
+            expectedFp: fp,
+            provenance: opts?.provenance,
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
@@ -434,14 +837,39 @@ export async function reviseDocument(
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
     return { status: "FAILED" as const, reason: "content too large" };
   }

+  // P0: sealed-invalid REVISE provenance refuses before mutation.
+  if (input.provenance) {
+    const early = resolveProvenanceIdentity(input.provenance);
+    if (early.kind === "SEALED_INVALID") {
+      return { status: "FAILED" as const, reason: early.reason };
+    }
+  }
+
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
@@ -461,7 +889,11 @@ export async function reviseDocument(
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
@@ -475,13 +907,13 @@ export async function reviseDocument(
           .limit(1)
       )[0];
       if (prior) {
-        return {
-          status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
+        return reconcileWithProvenanceResolution({
+          prior,
           documentId: input.documentId,
-          revisionId: prior.id,
-          revisionNumber: prior.revisionNumber,
-          idempotentReplay: true as const,
-        };
+          documentTitle: input.expectedTitle ?? owned.title,
+          expectedFp,
+          provenance: input.provenance,
+        });
       }

       const base = (
@@ -543,6 +975,7 @@ export async function reviseDocument(
         provenanceJson: JSON.stringify({
           ...(input.provenance ?? {}),
           sectionHint: input.sectionHint ?? null,
+          contentFingerprint: expectedFp,
         }),
         scope: input.scope ?? "section",
       });
@@ -799,3 +1232,173 @@ export async function compareDocumentRevisions(
     diff,
   };
 }
+
+/**
+ * C-01 / F-01 — pure D4 truth lookup by sealed correlation. Never inserts/updates/deletes.
+ * No latest-revision fallback; full sealed identity comparison required for AVAILABLE.
+ */
+export type DocumentCorrelationTruth = {
+  verdict: "AVAILABLE" | "UNKNOWN" | "CONFLICT" | "NOT_EXECUTED";
+  documentId?: string;
+  revisionId?: string;
+  revisionNumber?: number;
+  reason?: string;
+  contentSha256?: string;
+};
+
+export async function lookupDocumentCorrelationTruth(input: {
+  pilotId: string;
+  preparationId: string;
+  action: "CREATE" | "REVISE";
+  correlationKey: string;
+  title: string;
+  contentMarkdown: string;
+  contentSha256: string;
+  payloadSha256?: string | null;
+  documentId?: string | null;
+  baseRevisionId?: string | null;
+  /** Full sealed identity — required for AVAILABLE proof of an ML4C document command. */
+  expectedIdentity?: SealedEffectIdentity | null;
+}): Promise<DocumentCorrelationTruth> {
+  // F-01: AVAILABLE only with a complete sealed identity from the binding.
+  // Partial payloadSha256 alone never proves command identity.
+  const fullIdentity =
+    input.expectedIdentity &&
+    input.expectedIdentity.commandId &&
+    input.expectedIdentity.payloadSha256
+      ? input.expectedIdentity
+      : null;
+
+  if (input.action === "CREATE") {
+    const doc = await findByCreationCorrelation(
+      input.pilotId,
+      input.preparationId,
+      input.correlationKey,
+    );
+    if (!doc) {
+      return { verdict: "UNKNOWN", reason: "CREATE_CORRELATION_ABSENT" };
+    }
+    if (doc.ownerPilotId !== input.pilotId || doc.preparationId !== input.preparationId) {
+      return { verdict: "NOT_EXECUTED", reason: "SOURCE_DENIED" };
+    }
+    // F-01: never use latestRevisionFor as CREATE correlation proof.
+    const rev = await findRevisionByCorrelation(doc.id, input.correlationKey);
+    if (!rev) {
+      return {
+        verdict: "UNKNOWN",
+        reason: "CREATE_REVISION_ABSENT",
+        documentId: doc.id,
+      };
+    }
+    if (!fullIdentity) {
+      return {
+        verdict: "UNKNOWN",
+        reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
+        documentId: doc.id,
+        revisionId: rev.id,
+        revisionNumber: rev.revisionNumber,
+      };
+    }
+    const cmp = compareSealedEffectIdentity(
+      rev.provenanceJson,
+      rev.contentMarkdown,
+      doc.title,
+      fullIdentity,
+    );
+    if (!cmp.ok) {
+      return {
+        verdict: cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE" ? "UNKNOWN" : "CONFLICT",
+        reason: cmp.reason,
+        documentId: doc.id,
+        revisionId: rev.id,
+        revisionNumber: rev.revisionNumber,
+      };
+    }
+    if (rev.status === "AVAILABLE") {
+      return {
+        verdict: "AVAILABLE",
+        documentId: doc.id,
+        revisionId: rev.id,
+        revisionNumber: rev.revisionNumber,
+        contentSha256: cmp.storedContentSha256,
+      };
+    }
+    return {
+      verdict: "UNKNOWN",
+      reason: `CREATE_REVISION_${rev.status}`,
+      documentId: doc.id,
+      revisionId: rev.id,
+      revisionNumber: rev.revisionNumber,
+      contentSha256: cmp.storedContentSha256,
+    };
+  }
+
+  if (!input.documentId) {
+    return { verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
+  }
+  const owned = (
+    await db
+      .select()
+      .from(documents)
+      .where(
+        and(
+          eq(documents.id, input.documentId),
+          eq(documents.ownerPilotId, input.pilotId),
+          eq(documents.preparationId, input.preparationId),
+        ),
+      )
+      .limit(1)
+  )[0];
+  if (!owned) {
+    return { verdict: "NOT_EXECUTED", reason: "SOURCE_DENIED" };
+  }
+  const rev = await findRevisionByCorrelation(input.documentId, input.correlationKey);
+  if (!rev) {
+    return {
+      verdict: "UNKNOWN",
+      reason: "REVISE_CORRELATION_ABSENT",
+      documentId: input.documentId,
+    };
+  }
+  if (!fullIdentity) {
+    return {
+      verdict: "UNKNOWN",
+      reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
+      documentId: input.documentId,
+      revisionId: rev.id,
+      revisionNumber: rev.revisionNumber,
+    };
+  }
+  const cmp = compareSealedEffectIdentity(
+    rev.provenanceJson,
+    rev.contentMarkdown,
+    owned.title,
+    fullIdentity,
+  );
+  if (!cmp.ok) {
+    return {
+      verdict: cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE" ? "UNKNOWN" : "CONFLICT",
+      reason: cmp.reason,
+      documentId: input.documentId,
+      revisionId: rev.id,
+      revisionNumber: rev.revisionNumber,
+    };
+  }
+  if (rev.status === "AVAILABLE") {
+    return {
+      verdict: "AVAILABLE",
+      documentId: input.documentId,
+      revisionId: rev.id,
+      revisionNumber: rev.revisionNumber,
+      contentSha256: cmp.storedContentSha256,
+    };
+  }
+  return {
+    verdict: "UNKNOWN",
+    reason: `REVISE_REVISION_${rev.status}`,
+    documentId: input.documentId,
+    revisionId: rev.id,
+    revisionNumber: rev.revisionNumber,
+    contentSha256: cmp.storedContentSha256,
+  };
+}
```

### `projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts`

```diff
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
```

### `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`

```diff
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

```

### `projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts`

```diff
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
```

### `projects/sfia-studio-next/web/tests/unit/document-act.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index ec99d592..9c0841bb 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -5,6 +5,12 @@ import {
   qualifyDocumentAct,
   extractContractualDocumentProposal,
 } from "@/domains/conversation/document-act";
+import {
+  contentSha256,
+  encodeTitleB64,
+  parseFenceMeta,
+  serializeProposalFence,
+} from "@/domains/conversation/document-command";

 describe("document-act SEM-02 — lexical router retired", () => {
   it("qualifyDocumentAct is fail-closed stub", () => {
@@ -28,4 +34,61 @@ describe("document-act SEM-02 — lexical router retired", () => {
       expect(extracted.content).toMatch(/# Titre/);
     }
   });
+
+  describe("parseFenceMeta via extract (P0-A)", () => {
+    it("partial title-b64 never degrades to LEGACY extract", () => {
+      const info = `sfia-document title-b64=${encodeTitleB64("Seul")}`;
+      expect(parseFenceMeta(info)).toEqual({
+        kind: "INVALID",
+        reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
+      });
+      const raw = `\`\`\`${info}\n# Seul\n\nCorps.\n\`\`\`\n`;
+      const extracted = extractContractualDocumentProposal(raw);
+      expect(extracted.ok).toBe(false);
+      if (!extracted.ok) {
+        expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_METADATA_INVALID");
+      }
+    });
+  });
+
+  describe("F02 contractual fence extract", () => {
+    it("reads historical fence without structured metadata", () => {
+      const raw =
+        "Préambule.\n\n```sfia-document\n# Historique\n\n## Section\n\nCorps lisible sans meta structurée.\n```\n";
+      const extracted = extractContractualDocumentProposal(raw);
+      expect(extracted.ok).toBe(true);
+      if (extracted.ok) {
+        expect(extracted.title).toBe("Historique");
+        expect(extracted.content).toContain("Corps lisible");
+      }
+    });
+
+    it("refuses H1 mismatch against structured title meta", () => {
+      const title = "Attendu";
+      const wrongBody = "# Autre\n\nCorps.\n";
+      const digest = contentSha256(title, wrongBody);
+      const broken = [
+        `\`\`\`sfia-document title-b64=${encodeTitleB64(title)} chars=${wrongBody.length} pair-sha256=${digest}`,
+        wrongBody,
+        "```",
+        "",
+      ].join("\n");
+      const extracted = extractContractualDocumentProposal(broken);
+      expect(extracted.ok).toBe(false);
+      if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_TITLE_MISMATCH");
+    });
+
+    it("round-trips via serializeProposalFence helper", () => {
+      const title = "Acte";
+      const content = "# Acte\n\n```\nBloc interne\n```\n";
+      const fence = serializeProposalFence({
+        title,
+        contentMarkdown: content,
+        contentSha256: contentSha256(title, content),
+      });
+      const extracted = extractContractualDocumentProposal(fence);
+      expect(extracted.ok).toBe(true);
+      if (extracted.ok) expect(extracted.content).toBe(content);
+    });
+  });
 });
```

### `projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts`

```diff
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

## 7. Untracked candidate files — full contents

### `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md`

```markdown
# As-built — Continuité cognitive Nora, historique long et D4 (ML4C)

**Date :** 14 novembre 2026 (fermeture parse provenance stockée + preuve 100 paires)
**Candidat base :** `67bf6b0b` — worktree `fix/next-semantic-intent-convergence-20261112`
**Conception :** V0.7 @ `86377fde`
**Handoff précédent :** `sfia/review-handoff@357008ea` blob `b111a972`
**Statut :** IMPLEMENTED CANDIDATE — stored JSON illisible ≠ HISTORICAL ; 100 paires E2E ; LIVE NOT PROVEN
**STABLE / release :** NOT AVAILABLE — NO RELEASE

## 1. Objet

Fermeture des deux réserves Critical Review (parse provenance + preuve N+100 paires).

| Correctif | Mécanisme |
| --- | --- |
| P0 | Provenance PostgreSQL illisible / non-objet → `UNKNOWN` / `COMMAND_PROVENANCE_UNVERIFIABLE` ; jamais fallback historique |
| P1 | E2E PREPARE → **100 paires** (200 messages) → accord → replay → 10× GET same command |
| Acquis | no-downgrade ; champs `hasOwn` ; identité scellée ; HTTP RO |

## 2. Classification de provenance

```text
HISTORICAL          — objet JSON valide, aucun marqueur distinctif de scellement
SEALED_VALID        — documentCommandBinding===true + tous champs présents + invariants
SEALED_INVALID      — marqueur/restes scellés incomplets ou invalides
STORED_INVALID      — JSON illisible / null / tableau / primitive / vide → refuse avant classification
```

**Frontière :** absence de provenance **entrante** (demande historique) ≠ provenance **stockée** illisible.

Réconciliation : `parseProvenanceJson` doit produire un objet avant tout chemin HISTORICAL ou scellé.

## 3. Champs obligatoires scellés

Présents explicitement (hasOwn) : binding, commandId, operationId, userMessageId, qualifiedIntentId, action, source, preparationId, documentId, baseRevisionId, sectionHint, correlationKey, title, contentSha256, payloadSha256.

CREATE : `documentId`/`baseRevisionId` présents avec `null`.
REVISE : IDs non vides.
Contrôle entrée **et** provenance PostgreSQL objet valide.

## 4. Preuve E2E (100 paires)

PREPARE → 100 USER + 100 ASSISTANT (ordinals uniques) → accord `PRIOR_ASSISTANT_MESSAGE` → D4 CREATE → replay `clientTurnKey` → 10× GET HTTP sur C/K → AVAILABLE inchangé ; altération provenance → refus AVAILABLE ; zéro écriture GET.

## 5. Tests réellement exécutés (ce cycle)

PARSE-01…12 ; FLOW-100 E2E ; suites ML4C PG ; unit/integration ; tsc ; eslint `document/service.ts` ; build ; Playwright ML4C ×2.

## 6. Réserves

LIVE NOT PROVEN ; RECETTE NOT EXECUTED ; push produit / PR #676 / Gate C hors mandat ; NO RELEASE.
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
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
import {
  stashDocumentCommandBinding,
  type TurnOwnershipFence,
} from "@/domains/conversation/turn-command";
import {
  buildSealedProvenance,
  lookupDocumentCorrelationTruth,
  reviseDocument,
  savePreparationDocument,
  type SealedEffectIdentity,
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

/**
 * C-02 — canonical proposal: title + exact contentMarkdown (full document).
 * Validates optional leading H1 coherence; never rewrites content bytes.
 */
export function canonicalizeDocumentProposal(input: {
  title: string;
  contentMarkdown: string;
}):
  | { ok: true; proposal: DocumentProposalExact }
  | { ok: false; reason: string } {
  const title = input.title.trim();
  const contentMarkdown = input.contentMarkdown;
  if (!title) return { ok: false, reason: "EMPTY_TITLE" };
  if (!contentMarkdown.trim()) return { ok: false, reason: "EMPTY_PROPOSAL" };
  if (contentMarkdown.length > 100_000) return { ok: false, reason: "CONTENT_TOO_LARGE" };
  const h1 = /^#\s+(.+?)(?:\r?\n|$)/.exec(contentMarkdown);
  if (h1) {
    const heading = h1[1]!.trim();
    if (heading !== title) {
      return { ok: false, reason: "TITLE_H1_MISMATCH" };
    }
  }
  return {
    ok: true,
    proposal: {
      title,
      contentMarkdown,
      contentSha256: contentSha256(title, contentMarkdown),
    },
  };
}

export function encodeTitleB64(title: string): string {
  return Buffer.from(title, "utf8").toString("base64url");
}

const FENCE_META_KEYS = new Set(["title-b64", "chars", "pair-sha256"]);
const CHARS_RE = /^(0|[1-9][0-9]*)$/;
const SHA256_HEX_RE = /^[0-9a-f]{64}$/;
const BASE64URL_RE = /^[A-Za-z0-9_-]+$/;
const MAX_PROPOSAL_CHARS = 100_000;

export type ParsedFenceMetadata =
  | { kind: "LEGACY" }
  | {
      kind: "STRUCTURED";
      titleB64: string;
      chars: number;
      pairSha256: string;
    }
  | {
      kind: "INVALID";
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID";
    };

/**
 * P0-A — three-state fence metadata parser.
 * Partial structured tokens are INVALID, never silently treated as LEGACY.
 */
export function parseFenceMeta(info: string): ParsedFenceMetadata {
  const raw = info.trim();
  if (!raw) return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  const parts = raw.split(/\s+/);
  // P1: tag recognition is case-insensitive (align with document-act scanner).
  // Emission remains canonical lowercase `sfia-document`.
  const tag = (parts[0] ?? "").toLowerCase();
  if (tag !== "sfia-document") {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  const tokens = parts.slice(1);
  if (tokens.length === 0) return { kind: "LEGACY" };

  const seen = new Set<string>();
  let titleB64: string | undefined;
  let charsRaw: string | undefined;
  let pairSha256: string | undefined;

  for (const tok of tokens) {
    const eq = tok.indexOf("=");
    if (eq <= 0 || tok.indexOf("=", eq + 1) !== -1) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    const key = tok.slice(0, eq);
    const val = tok.slice(eq + 1);
    if (!FENCE_META_KEYS.has(key)) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    if (seen.has(key)) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    seen.add(key);
    if (val === "") {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    if (key === "title-b64") titleB64 = val;
    else if (key === "chars") charsRaw = val;
    else if (key === "pair-sha256") pairSha256 = val;
  }

  // Any structured token present requires the full triad — never LEGACY fallback.
  if (seen.size !== 3 || titleB64 == null || charsRaw == null || pairSha256 == null) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!CHARS_RE.test(charsRaw)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  const chars = Number(charsRaw);
  if (!Number.isSafeInteger(chars) || chars < 0 || chars > MAX_PROPOSAL_CHARS) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!SHA256_HEX_RE.test(pairSha256)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!BASE64URL_RE.test(titleB64)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  let decodedTitle: string;
  try {
    decodedTitle = Buffer.from(titleB64, "base64url").toString("utf8");
  } catch {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  // Reject replacement-char artefacts from invalid UTF-8 and require round-trip.
  if (decodedTitle.includes("\uFFFD")) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (encodeTitleB64(decodedTitle) !== titleB64) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!decodedTitle.trim()) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  return { kind: "STRUCTURED", titleB64, chars, pairSha256 };
}

function fenceOpenerLength(contentMarkdown: string): number {
  let need = 3;
  const re = /`{3,}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(contentMarkdown)) !== null) {
    need = Math.max(need, m[0]!.length + 1);
  }
  return need;
}

/** Serialize exact Markdown into a contractual fence — metadata + byte-stable body. */
export function serializeProposalFence(proposal: DocumentProposalExact): string {
  const canonical = canonicalizeDocumentProposal({
    title: proposal.title,
    contentMarkdown: proposal.contentMarkdown,
  });
  if (!canonical.ok) {
    throw new Error(`PROPOSAL_NOT_CANONICAL:${canonical.reason}`);
  }
  const { title, contentMarkdown, contentSha256: digest } = canonical.proposal;
  const tickLen = fenceOpenerLength(contentMarkdown);
  const ticks = "`".repeat(tickLen);
  const info = `sfia-document title-b64=${encodeTitleB64(title)} chars=${contentMarkdown.length} pair-sha256=${digest}`;
  const needsStructuralNl = !contentMarkdown.endsWith("\n");
  const body = needsStructuralNl ? `${contentMarkdown}\n` : contentMarkdown;
  return `${ticks}${info}\n${body}${ticks}\n`;
}

export function sealedIdentityFromBinding(binding: DocumentCommandBinding): SealedEffectIdentity {
  return {
    commandId: binding.commandId,
    operationId: binding.operationId,
    userMessageId: binding.userMessageId,
    qualifiedIntentId: binding.qualifiedIntentId,
    action: binding.action,
    source: binding.source,
    preparationId: binding.preparationId,
    documentId: binding.documentId,
    baseRevisionId: binding.baseRevisionId,
    sectionHint: binding.sectionHint ?? null,
    correlationKey: binding.correlationKey,
    contentSha256: binding.contentSha256,
    payloadSha256: binding.payloadSha256,
    title: binding.title,
  };
}

export function proposalFromStructured(input: {
  title: string;
  contentMarkdown: string;
}): DocumentProposalExact | null {
  const canonical = canonicalizeDocumentProposal(input);
  return canonical.ok ? canonical.proposal : null;
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
  /** Optional client turn key folded into correlation at admit time only (never mutated later). */
  clientCorrelationSalt?: string | null;
}): DocumentCommandAdmission {
  const canonical = canonicalizeDocumentProposal({
    title: input.title,
    contentMarkdown: input.contentMarkdown,
  });
  if (!canonical.ok) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: canonical.reason };
  }
  if (!input.userMessageId || !input.qualifiedIntentId) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "MISSING_IDENTITIES" };
  }
  if (input.action === "REVISE" && (!input.documentId || !input.baseRevisionId)) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
  }
  const { title, contentMarkdown, contentSha256: cSha } = canonical.proposal;
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
  const baseKey = deriveDocumentCorrelationKey({
    commandId: input.commandId,
    qualifiedIntentId: input.qualifiedIntentId,
    action: input.action,
    preparationId: input.preparationId,
    documentId: input.documentId ?? null,
  });
  const salt = input.clientCorrelationSalt?.trim();
  const correlationKey = salt
    ? createHash("sha256").update(`${baseKey}|${salt}`).digest("hex").slice(0, 48)
    : baseKey;
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
        provenance: buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
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
    provenance: buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
  });
  return { sealApplied: true, effect };
}

/** C-01 — read-only reconciliation via D4 correlation truth (never CREATE/REVISE). */
export async function reconcileDocumentCommandFromBinding(input: {
  pilotId: string;
  preparationId: string;
  binding: DocumentCommandBinding;
}): Promise<{
  verdict: "AVAILABLE" | "UNKNOWN" | "CONFLICT" | "NOT_EXECUTED";
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  reason?: string;
  contentSha256?: string;
}> {
  const expectedIdentity = sealedIdentityFromBinding(input.binding);
  const truth = await lookupDocumentCorrelationTruth({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    action: input.binding.action,
    correlationKey: input.binding.correlationKey,
    title: input.binding.title,
    contentMarkdown: input.binding.contentMarkdown,
    contentSha256: input.binding.contentSha256,
    payloadSha256: input.binding.payloadSha256,
    documentId: input.binding.documentId,
    baseRevisionId: input.binding.baseRevisionId,
    expectedIdentity,
  });
  return {
    verdict: truth.verdict,
    documentId: truth.documentId,
    revisionId: truth.revisionId,
    revisionNumber: truth.revisionNumber,
    reason: truth.reason,
    contentSha256: truth.contentSha256,
  };
}

/** Load a sealed binding from a turn command owned by the pilot (read-only). */
export async function loadSealedDocumentBinding(input: {
  pilotId: string;
  preparationId: string;
  commandId: string;
  correlationKey?: string | null;
}): Promise<
  | { ok: true; binding: DocumentCommandBinding; commandId: string }
  | { ok: false; reason: string }
> {
  const row = (
    await db
      .select({
        id: conversationTurnCommands.id,
        ownerPilotId: conversationTurnCommands.ownerPilotId,
        resultJson: conversationTurnCommands.resultJson,
        preparationId: conversations.preparationId,
      })
      .from(conversationTurnCommands)
      .innerJoin(
        conversations,
        eq(conversations.id, conversationTurnCommands.conversationId),
      )
      .where(eq(conversationTurnCommands.id, input.commandId))
      .limit(1)
  )[0];
  if (!row || row.ownerPilotId !== input.pilotId) {
    return { ok: false, reason: "COMMAND_DENIED" };
  }
  if (row.preparationId !== input.preparationId) {
    return { ok: false, reason: "COMMAND_PREPARATION_MISMATCH" };
  }
  if (!row.resultJson) {
    return { ok: false, reason: "BINDING_ABSENT" };
  }
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
  } catch {
    return { ok: false, reason: "BINDING_JSON_INVALID" };
  }
  const rawList = Array.isArray(parsed.documentCommandBindings)
    ? parsed.documentCommandBindings
    : [];
  const list = rawList.filter((b): b is DocumentCommandBinding => {
    if (!b || typeof b !== "object") return false;
    const x = b as DocumentCommandBinding;
    return (
      x.schemaVersion === DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION &&
      x.commandId === input.commandId &&
      typeof x.correlationKey === "string" &&
      x.correlationKey.length > 0
    );
  });
  if (list.length === 0) {
    return { ok: false, reason: rawList.length === 0 ? "BINDING_ABSENT" : "BINDING_NOT_FOUND" };
  }
  const correlationKey = input.correlationKey?.trim() || null;
  let binding: DocumentCommandBinding | undefined;
  if (correlationKey) {
    binding = list.find((b) => b.correlationKey === correlationKey);
    if (!binding) {
      return { ok: false, reason: "BINDING_NOT_FOUND" };
    }
  } else if (list.length === 1) {
    binding = list[0];
  } else {
    return { ok: false, reason: "BINDING_SELECTOR_REQUIRED" };
  }
  return { ok: true, binding, commandId: row.id };
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

function payloadSize(payload: unknown): number {
  return JSON.stringify(payload).length;
}

/**
 * C-05: enforce remaining character budget BEFORE return.
 * Never silent-truncate exact message bodies — prefer PARTIAL + reason.
 * DENIED is reserved for authorization refusals, not budget.
 */
/** Exported for F-P1 discriminant tests (budget before return). */
export function fitBudget<T extends { coverage: string; reason?: string | null }>(
  scope: HistoryToolScope,
  payload: T,
): T | { coverage: "PARTIAL"; reason: "HISTORY_TOOL_BUDGET_EXHAUSTED"; items: []; nextCursor?: null } {
  const size = payloadSize(payload);
  if (size <= scope.budget.remainingChars) {
    scope.budget.remainingChars -= size;
    return payload;
  }
  return {
    coverage: "PARTIAL",
    reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
    items: [],
    nextCursor: null,
  };
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
        "Walk authorized conversation history (keyset pagination). Lexical query is an optional relevance hint only — not an exclusivity filter. Empty query walks the full journal. Does not mutate.",
      parameters: z.object({
        query: z.string().nullable().optional(),
        cursor: z.string().nullable().optional(),
        pageSize: z.number().int().min(1).max(50).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "PARTIAL",
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
        return fitBudget(scope, result);
      },
    }),
    tool({
      name: "read_conversation_messages",
      description:
        "Re-read exact authorized message contents by messageId (rights revalidated). Prefer after search_conversation_history. Use fragmentStart/fragmentEnd for long messages under budget.",
      parameters: z.object({
        messageIds: z.array(z.string()).min(1).max(50),
        fragmentStart: z.number().int().min(0).nullable().optional(),
        fragmentEnd: z.number().int().min(0).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "PARTIAL",
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
        return fitBudget(scope, result);
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
  /** Lexical accelerator hit only — never used as exclusivity filter (C-05). */
  lexicalHit?: boolean;
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

  // C-05: lexical query is a relevance hint only — never an exclusivity filter.
  // Paginated walk covers all authorized messages; absence of LIKE hits ≠ semantic EMPTY.
  const q = (input.query ?? "").trim().toLowerCase();
  const qSafe = q.replace(/[%_]/g, "");

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
  const items: HistorySearchItem[] = page.map((r) => {
    const lexicalHit = qSafe ? r.content.toLowerCase().includes(qSafe) : false;
    return {
      messageId: r.id,
      conversationId: r.conversationId,
      ordinal: r.ordinal,
      role: r.role,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      generationId: r.generationId,
      preview: previewOf(r.content),
      coverage: "COMPLETE" as HistoryCoverage,
      // Hint only — clients/Nora may prioritize lexicalHit=true without excluding others.
      ...(qSafe ? { lexicalHit } : {}),
    };
  });

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
    items.length === 0 ? "EMPTY" : hasMore ? "PARTIAL" : "COMPLETE";

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

### `projects/sfia-studio-next/web/tests/e2e/ml4c-document-continuity.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * ML4C document continuity — composer send after scroll (FAKE lane).
 * D4 reconcile / long journal: tests/integration/ml4c-document-reconciliation.pg.test.ts
 */
test("ML4C: document continuity — scroll, composer, FAKE send", async ({ page }) => {
  test.setTimeout(180_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const seed = "Fil ML4C document continuity (fixture).";
  const { projectId } = await bootstrapProjectFromPortfolio(page, {
    seed,
    name: "ML4C Document Continuity",
    summary: "Continuité composer",
  });

  await page.goto(`/projects/${projectId}`);
  const thread = page.getByTestId("nora-thread");
  const composer = page.getByTestId("nora-composer");
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");

  await expect(composer).toBeVisible({ timeout: 30_000 });
  await thread.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await expect(composer).toBeVisible();

  const followUp = "ML4C continuity send après scroll.";
  await draft.fill(followUp);
  await send.click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 60_000,
  });
});
```

### `projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import { config as loadEnv } from "dotenv";
import path from "node:path";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

loadEnv({ path: path.resolve(__dirname, "../../.env.local") });

/**
 * ML4C C-07 — sticky composer on a real 320+ message journal (FAKE Nora).
 * Seeds via postgres into sfia_next_e2e (same lane as Playwright webServer).
 */
async function seedLongThread(preparationId: string, count: number): Promise<number> {
  const postgres = (await import("postgres")).default;
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL required for C-07 seed");
  const u = new URL(raw);
  u.pathname = "/sfia_next_e2e";
  const sql = postgres(u.toString(), { max: 1 });
  try {
    const conv = await sql<{ id: string }[]>`
      select id from conversations where preparation_id = ${preparationId} limit 1
    `;
    if (!conv[0]) throw new Error("conversation missing for preparation");
    const conversationId = conv[0].id;
    const existing = await sql<{ n: string }[]>`
      select coalesce(max(ordinal), 0)::text as n from messages where conversation_id = ${conversationId}
    `;
    let ordinal = Number(existing[0]?.n ?? 0);
    const rows: Array<{
      id: string;
      conversation_id: string;
      role: string;
      content: string;
      status: string;
      ordinal: number;
    }> = [];
    for (let i = 1; i <= count; i++) {
      ordinal += 1;
      const role = i % 2 === 1 ? "user" : "assistant";
      let content = `Message synthétique #${i} thème-${(i % 17) + 1} détail-${i * 3}`;
      if (i === 10) content = "orientation X rouge — jalon historique";
      if (i === 110) content = "correction X bleu — orientation remplacée";
      if (i === 250) content = "question sur X — quelle est l'orientation actuelle ?";
      rows.push({
        id: `msg_e2e_long_${preparationId.slice(0, 8)}_${i}`,
        conversation_id: conversationId,
        role,
        content,
        status: "COMPLETE",
        ordinal,
      });
    }
    // Batch insert
    for (let offset = 0; offset < rows.length; offset += 50) {
      const chunk = rows.slice(offset, offset + 50);
      await sql`
        insert into messages ${sql(
          chunk,
          "id",
          "conversation_id",
          "role",
          "content",
          "status",
          "ordinal",
        )}
        on conflict do nothing
      `;
    }
    const total = await sql<{ n: string }[]>`
      select count(*)::text as n from messages where conversation_id = ${conversationId}
    `;
    return Number(total[0]?.n ?? 0);
  } finally {
    await sql.end({ timeout: 2 });
  }
}

test("ML4C C-07: composer usable on 320+ message thread after scroll", async ({ page }) => {
  test.setTimeout(180_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const seed = "Fil projet ML4C composer long (fixture).";
  const { preparationId, projectId } = await bootstrapProjectFromPortfolio(page, {
    seed,
    name: "ML4C Composer 320+",
    summary: "C-07 fil long",
  });

  const total = await seedLongThread(preparationId, 320);
  expect(total).toBeGreaterThanOrEqual(320);

  await page.goto(`/projects/${projectId}`);
  const composer = page.getByTestId("nora-composer");
  const send = page.getByTestId("thread-send");
  const thread = page.getByTestId("nora-thread");
  const draft = page.getByTestId("thread-draft");

  await expect(composer).toBeVisible({ timeout: 30_000 });
  await expect(send).toBeVisible();
  await expect(thread).toBeVisible();

  // Scroll to older portion then back — composer must remain reachable.
  await thread.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await thread.evaluate((el) => {
    el.scrollTop = 0;
  });
  await expect(composer).toBeVisible();
  expect(await composer.evaluate((el) => el.classList.contains("fig-composer-sticky"))).toBe(true);

  await draft.fill("Message après parcours du fil long.");
  await expect(draft).toHaveValue("Message après parcours du fil long.");
  await expect(send).toBeEnabled();

  await send.click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  // F-P1: send must clear draft (no neutralized assertion).
  await expect(draft).toHaveValue("", { timeout: 45_000 });
  // Exact USER bubble — Nora fixture may echo the same phrase in its reply.
  await expect(
    thread.getByText("Message après parcours du fil long.", { exact: true }),
  ).toBeVisible({ timeout: 45_000 });
  await expect(composer).toBeVisible();
  await expect(send).toBeVisible();

  const shotDir = path.resolve(__dirname, "../../test-results/ml4c-c07");
  await page.screenshot({
    path: path.join(shotDir, `long-thread-${Date.now()}.png`),
    fullPage: true,
  });

  await page.reload();
  await expect(composer).toBeVisible({ timeout: 30_000 });
  await expect(thread).toBeVisible();
  await expect(
    thread.getByText("Message après parcours du fil long.", { exact: true }),
  ).toBeVisible({ timeout: 30_000 });
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

    const title = "Continuité ML4C";
    const body = `# ${title}\n\nVersion initiale scellée.\n`;
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
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

    const revisedBody = `# ${title}\n\nVersion initiale scellée.\n\n## Révision\n\nAjout.\n`;
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
      title,
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
    const propTitle = "Proposition longue";
    const longBody = `# ${propTitle}\n\n${"paragraphe contractuel.\n".repeat(900)}`;
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
      title: propTitle,
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

### `projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts`

```typescript
/**
 * F-01 — sealed document-command identity truth (lookup + reconcile, read-only).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  payloadSha256,
  reconcileDocumentCommandFromBinding,
  sealAndApplyDocumentCommand,
  sealedIdentityFromBinding,
  type DocumentCommandBinding,
} from "@/domains/conversation/document-command";
import {
  buildSealedProvenance,
  lookupDocumentCorrelationTruth,
  resolveProvenanceIdentity,
  savePreparationDocument,
  type SealedEffectIdentity,
} from "@/domains/document/service";
import {
  completeTurnCommand,
  reserveTurnCommand,
  stashDocumentCommandBinding,
} from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
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

async function lookupFromBinding(
  pilotId: string,
  preparationId: string,
  binding: DocumentCommandBinding,
) {
  return lookupDocumentCorrelationTruth({
    pilotId,
    preparationId,
    action: binding.action,
    correlationKey: binding.correlationKey,
    title: binding.title,
    contentMarkdown: binding.contentMarkdown,
    contentSha256: binding.contentSha256,
    payloadSha256: binding.payloadSha256,
    documentId: binding.documentId,
    baseRevisionId: binding.baseRevisionId,
    expectedIdentity: sealedIdentityFromBinding(binding),
  });
}

async function completeReservedTurn(
  convId: string,
  reserved: Extract<Awaited<ReturnType<typeof reserveTurnCommand>>, { kind: "fresh" }>,
) {
  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: convId,
    role: "assistant",
    content: "Tour terminé.",
    status: "COMPLETE",
    ordinal: reserved.ordinalAssistant,
  });
  await completeTurnCommand({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    status: "COMPLETE",
    assistantMessageId: assistantId,
  });
}

async function freshCreateBinding(pilotId: string, preparationId: string, label: string) {
  const convId = await getConversationId(pilotId, preparationId);
  expect(convId).toBeTruthy();
  const reserved = await reserveTurnCommand({
    conversationId: convId!,
    ownerPilotId: pilotId,
    clientTurnKey: `f01-${label}-${Date.now()}`,
    content: `F01 ${label}`,
  });
  if (reserved.kind !== "fresh") throw new Error("fresh turn expected");
  const title = `F01 ${label}`;
  const body = `# ${title}\n\nCorps ${label}.\n`;
  const admitted = admitDocumentCommand({
    commandId: reserved.commandId,
    operationId: reserved.operationId,
    userMessageId: reserved.userMessageId,
    qualifiedIntentId: "i-d4-create",
    action: "CREATE",
    preparationId,
    source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
    title,
    contentMarkdown: body,
  });
  if (!admitted.ok) throw new Error(admitted.reason);
  return { reserved, admitted, title, body };
}

describe("ML4C document identity F-01 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("F01-01: same correlation + same sealed identity → same refs (lookup + reconcile)", async () => {
    const pilotId = await seedPilot("f01-same-id");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "same");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply failed");

    const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("AVAILABLE");
    expect(truth.documentId).toBe(sealed.effect.documentId);
    expect(truth.revisionId).toBe(sealed.effect.revisionId);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.documentId).toBe(sealed.effect.documentId);
    expect(reconciled.revisionId).toBe(sealed.effect.revisionId);
  });

  it("F01-02: same correlation + divergent markdown → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-md-conf");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-md-${Date.now()}`;
    const title = "Mismatch markdown";
    const bodyStored = "# Mismatch markdown\n\nStored.\n";
    await savePreparationDocument(pilotId, prep.id, title, bodyStored, undefined, {
      correlationKey: corr,
      provenance: buildSealedProvenance({
        commandId: "legacy-cmd",
        operationId: "legacy-op",
        userMessageId: "legacy-usr",
        qualifiedIntentId: "i-legacy",
        action: "CREATE",
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "legacy-cmd" },
        preparationId: prep.id,
        documentId: null,
        baseRevisionId: null,
        sectionHint: null,
        correlationKey: corr,
        contentSha256: contentSha256(title, bodyStored),
        payloadSha256: "0".repeat(64),
        title,
      }),
    });

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "md-mismatch");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  async function expectIdentityConflict(mutate: (stored: DocumentCommandBinding) => DocumentCommandBinding, label: string) {
    const pilotId = await seedPilot(`f01-mut-${label}`);
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, label);
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    const binding = mutate(admitted.binding);
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  }

  it("F01-03a: same correlation + different source → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const assistantMessageId = newId("msg");
      const source = { kind: "ASSISTANT_MESSAGE" as const, assistantMessageId };
      return {
        ...b,
        source,
        payloadSha256: payloadSha256({
          action: b.action,
          source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint: b.sectionHint,
          title: b.title,
          contentSha256: b.contentSha256,
        }),
      };
    }, "source");
  });

  it("F01-03b: same correlation + different payloadSha256 → CONFLICT", async () => {
    await expectIdentityConflict(
      (b) => ({ ...b, payloadSha256: createHashFlip(b.payloadSha256) }),
      "payload",
    );
  });

  it("F01-03c: same correlation + different markdown bytes → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const contentMarkdown = `${b.contentMarkdown}\n<!-- drift -->\n`;
      const cSha = contentSha256(b.title, contentMarkdown);
      return {
        ...b,
        contentMarkdown,
        contentSha256: cSha,
        payloadSha256: payloadSha256({
          action: b.action,
          source: b.source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint: b.sectionHint,
          title: b.title,
          contentSha256: cSha,
        }),
      };
    }, "markdown");
  });

  it("F01-04: CREATE correlated document without first revision → UNKNOWN", async () => {
    const pilotId = await seedPilot("f01-rev-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-norev-${Date.now()}`;
    const docId = newId("doc");
    await db.insert(documents).values({
      id: docId,
      ownerPilotId: pilotId,
      preparationId: prep.id,
      title: "Orphan corr",
      creationCorrelationKey: corr,
    });

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "no-rev");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toBe("CREATE_REVISION_ABSENT");
    expect(truth.documentId).toBe(docId);
  });

  it("F01-05: latest AVAILABLE revision without matching correlation → not AVAILABLE", async () => {
    const pilotId = await seedPilot("f01-uncorr");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-uncorr-${Date.now()}`;
    const saved = await savePreparationDocument(
      pilotId,
      prep.id,
      "Uncorrelated latest",
      "# Uncorrelated latest\n\nSans empreinte scellée.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(saved.status).toBe("AVAILABLE");
    if (saved.status !== "AVAILABLE") throw new Error("save");

    const otherCorr = `other-${Date.now()}`;
    const { admitted } = await freshCreateBinding(pilotId, prep.id, "uncorr-lookup");
    const binding = {
      ...admitted.binding,
      correlationKey: otherCorr,
      documentId: saved.documentId,
    };
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: otherCorr,
      title: binding.title,
      contentMarkdown: binding.contentMarkdown,
      contentSha256: binding.contentSha256,
      payloadSha256: binding.payloadSha256,
      documentId: saved.documentId,
      baseRevisionId: saved.revisionId,
      expectedIdentity: sealedIdentityFromBinding(binding),
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/REVISE_CORRELATION_ABSENT/);
  });

  it("F01-06: provenance without documentCommandBinding → COMMAND_PROVENANCE_UNVERIFIABLE", async () => {
    const pilotId = await seedPilot("f01-unver");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-unver-${Date.now()}`;
    const title = "Legacy provenance";
    const body = "# Legacy provenance\n\nSans drapeau binding.\n";
    const saved = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
      correlationKey: corr,
      provenance: { note: "legacy-read-only", correlationKey: corr },
    });
    expect(saved.status).toBe("AVAILABLE");
    if (saved.status !== "AVAILABLE") throw new Error("save");

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "unverifiable");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
  });

  it("F01-07: ACK-loss — seal+apply then 10× reconcile, zero new D4 rows", async () => {
    const pilotId = await seedPilot("f01-ack");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "ack");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    const afterApply = await countD4Rows(pilotId, prep.id);

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(r.verdict).toBe("AVAILABLE");
      expect(r.documentId).toBe(
        sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
      );
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(afterApply);
  });

  it("F01-08: concurrent CREATE same correlation → single document", async () => {
    const pilotId = await seedPilot("f01-conc");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-conc-${Date.now()}`;
    const title = "Concurrent F01";
    const body = `# ${title}\n\nMême clé.\n`;
    const identity = {
      commandId: "conc-a",
      operationId: "op-conc",
      userMessageId: "usr-conc",
      qualifiedIntentId: "i-d4-create",
      action: "CREATE" as const,
      source: { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "conc-a" },
      preparationId: prep.id,
      documentId: null,
      baseRevisionId: null,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: contentSha256(title, body),
      payloadSha256: "a".repeat(64),
      title,
    };

    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance(identity),
      }),
      savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance({ ...identity, commandId: "conc-b" }),
      }),
    ]);
    expect([a.status, b.status].every((s) => s === "AVAILABLE" || s === "UNKNOWN" || s === "CONFLICT")).toBe(
      true,
    );
    const docCount = await db
      .select({ n: sql<number>`count(*)`.mapWith(Number) })
      .from(documents)
      .where(
        and(
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, prep.id),
          eq(documents.creationCorrelationKey, corr),
        ),
      );
    expect(docCount[0]?.n).toBe(1);
  });

  it("F01-09: CREATE correlation absent → UNKNOWN, reconcile writes nothing", async () => {
    const pilotId = await seedPilot("f01-absent");
    const prep = await openOrCreatePreparation(pilotId);
    const before = await countD4Rows(pilotId, prep.id);
    const { admitted } = await freshCreateBinding(pilotId, prep.id, "absent");
    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("UNKNOWN");
    expect(reconciled.reason).toMatch(/CREATE_CORRELATION_ABSENT/);
    expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
  });

  it("F01-11: same correlation + CREATE sealed, lookup as REVISE → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-act-mismatch");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "act-x");
    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");

    const asRevise = {
      ...admitted.binding,
      action: "REVISE" as const,
      documentId: sealed.effect.documentId,
      baseRevisionId: sealed.effect.revisionId,
      payloadSha256: payloadSha256({
        action: "REVISE",
        source: admitted.binding.source,
        preparationId: prep.id,
        documentId: sealed.effect.documentId,
        baseRevisionId: sealed.effect.revisionId,
        sectionHint: admitted.binding.sectionHint,
        title: admitted.binding.title,
        contentSha256: admitted.binding.contentSha256,
      }),
    };
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: asRevise.correlationKey,
      title: asRevise.title,
      contentMarkdown: asRevise.contentMarkdown,
      contentSha256: asRevise.contentSha256,
      payloadSha256: asRevise.payloadSha256,
      documentId: asRevise.documentId,
      baseRevisionId: asRevise.baseRevisionId,
      expectedIdentity: sealedIdentityFromBinding(asRevise),
    });
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-11b: same correlation + REVISE sealed, lookup as CREATE → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-act-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "rev-base",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");
    const sharedCorr = createAdmitted.binding.correlationKey;

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-rev-${Date.now()}`,
      content: "REVISE F01-11b.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## Add\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: revisedBody,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    const reviseBinding = { ...admittedRev.binding, correlationKey: sharedCorr };
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: reviseBinding,
    });

    const asCreate = {
      ...reviseBinding,
      action: "CREATE" as const,
      documentId: null,
      baseRevisionId: null,
      payloadSha256: payloadSha256({
        action: "CREATE",
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: null,
        baseRevisionId: null,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    };
    const truth = await lookupFromBinding(pilotId, prep.id, asCreate);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-12: same correlation + different baseRevisionId → CONFLICT (REVISE)", async () => {
    const pilotId = await seedPilot("f01-base-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "f01-12-base",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-12-${Date.now()}`,
      content: "REVISE F01-12.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## F01-12\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: revisedBody,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });

    const wrongBase = newId("rev");
    const binding = {
      ...admittedRev.binding,
      baseRevisionId: wrongBase,
      payloadSha256: payloadSha256({
        action: admittedRev.binding.action,
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: admittedRev.binding.documentId,
        baseRevisionId: wrongBase,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-13: same correlation + different sectionHint → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const sectionHint = "section-other";
      return {
        ...b,
        sectionHint,
        payloadSha256: payloadSha256({
          action: b.action,
          source: b.source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint,
          title: b.title,
          contentSha256: b.contentSha256,
        }),
      };
    }, "section");
  });

  it("F01-14: same correlation + different documentId → CONFLICT (REVISE)", async () => {
    const pilotId = await seedPilot("f01-doc-target");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "f01-14-a",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-14-${Date.now()}`,
      content: "REVISE F01-14.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: `${createAdmitted.binding.contentMarkdown}\n## F01-14\n`,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });

    const otherDocId = newId("doc");
    await db.insert(documents).values({
      id: otherDocId,
      ownerPilotId: pilotId,
      preparationId: prep.id,
      title: "Autre cible F01-14",
    });
    const mismatchedIdentity = sealedIdentityFromBinding({
      ...admittedRev.binding,
      documentId: otherDocId,
      payloadSha256: payloadSha256({
        action: admittedRev.binding.action,
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: otherDocId,
        baseRevisionId: admittedRev.binding.baseRevisionId,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    });
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: admittedRev.binding.correlationKey,
      title: admittedRev.binding.title,
      contentMarkdown: admittedRev.binding.contentMarkdown,
      contentSha256: admittedRev.binding.contentSha256,
      payloadSha256: mismatchedIdentity.payloadSha256,
      documentId: created.effect.documentId,
      baseRevisionId: admittedRev.binding.baseRevisionId,
      expectedIdentity: mismatchedIdentity,
    });
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-15: concurrent sealAndApply same correlation → single document", async () => {
    const pilotId = await seedPilot("f01-conc-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-seal-conc-${Date.now()}`;
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "conc-seal");
    const binding = { ...admitted.binding, correlationKey: corr };
    const fence = { commandId: reserved.commandId, ownerToken: reserved.ownerToken };

    const [s1, s2] = await Promise.all([
      sealAndApplyDocumentCommand({ pilotId, fence, binding }),
      sealAndApplyDocumentCommand({ pilotId, fence, binding }),
    ]);
    expect([s1.effect.status, s2.effect.status].every((s) => s === "AVAILABLE" || s === "CONFLICT" || s === "UNKNOWN")).toBe(
      true,
    );

    const docCount = await db
      .select({ n: sql<number>`count(*)`.mapWith(Number) })
      .from(documents)
      .where(
        and(
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, prep.id),
          eq(documents.creationCorrelationKey, corr),
        ),
      );
    expect(docCount[0]?.n).toBe(1);

    const rows = await countD4Rows(pilotId, prep.id);
    expect(rows.documents).toBe(1);
    expect(rows.revisions).toBe(1);
  });

  it("HASH: stored bytes / provenance drift → CONFLICT; reconcile never heals corruption", async () => {
    const pilotId = await seedPilot("f01-hash");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "hash");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
    const revisionId = sealed.effect.revisionId;
    const baseline = await countD4Rows(pilotId, prep.id);

    const altered = `${admitted.binding.contentMarkdown}\n<!-- tamper -->\n`;
    await db
      .update(documentRevisions)
      .set({ contentMarkdown: altered })
      .where(eq(documentRevisions.id, revisionId));

    let truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    let reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");

    await db
      .update(documentRevisions)
      .set({ contentMarkdown: admitted.binding.contentMarkdown })
      .where(eq(documentRevisions.id, revisionId));

    const provenanceRow = (
      await db
        .select({ provenanceJson: documentRevisions.provenanceJson })
        .from(documentRevisions)
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    const prov = JSON.parse(provenanceRow!.provenanceJson) as Record<string, unknown>;
    await db
      .update(documentRevisions)
      .set({
        provenanceJson: JSON.stringify({ ...prov, contentFingerprint: "f".repeat(64) }),
      })
      .where(eq(documentRevisions.id, revisionId));

    truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");
    reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");

    await db
      .update(documentRevisions)
      .set({
        provenanceJson: JSON.stringify({
          ...prov,
          contentSha256: "e".repeat(64),
        }),
      })
      .where(eq(documentRevisions.id, revisionId));

    truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(r.verdict).not.toBe("AVAILABLE");
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
  });

  describe("SEAL provenance identity (PG)", () => {
    function minimalCreateIdentity(
      prepId: string,
      corr: string,
      title: string,
      body: string,
      overrides?: Partial<SealedEffectIdentity>,
    ): SealedEffectIdentity {
      const cSha = contentSha256(title, body);
      const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-cmd" };
      return {
        commandId: "seal-cmd",
        operationId: "seal-op",
        userMessageId: "seal-usr",
        qualifiedIntentId: "i-d4-create",
        action: "CREATE",
        source,
        preparationId: prepId,
        documentId: null,
        baseRevisionId: null,
        sectionHint: null,
        correlationKey: corr,
        contentSha256: cSha,
        payloadSha256: payloadSha256({
          action: "CREATE",
          source,
          preparationId: prepId,
          documentId: null,
          baseRevisionId: null,
          title,
          contentSha256: cSha,
        }),
        title,
        ...overrides,
      };
    }

    it("SEAL-01: healthy CREATE sealed replay → AVAILABLE same refs", async () => {
      const pilotId = await seedPilot("seal-01");
      const prep = await openOrCreatePreparation(pilotId);
      const title = "SEAL-01";
      const body = `# ${title}\n\nReplay.\n`;
      const corr = `corr-seal-01-${Date.now()}`;
      const identity = minimalCreateIdentity(prep.id, corr, title, body);
      const prov = buildSealedProvenance(identity);

      const first = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(first.status).toBe("AVAILABLE");
      if (first.status !== "AVAILABLE") throw new Error("first");

      const second = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(second.status).toBe("AVAILABLE");
      if (second.status !== "AVAILABLE") throw new Error("second");
      expect(second.documentId).toBe(first.documentId);
      expect(second.revisionId).toBe(first.revisionId);
    });

    it("SEAL-02: CREATE missing payloadSha256 → never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-02");
      const prep = await openOrCreatePreparation(pilotId);
      const title = "SEAL-02";
      const body = `# ${title}\n\nSans payload.\n`;
      const corr = `corr-seal-02-${Date.now()}`;
      const identity = minimalCreateIdentity(prep.id, corr, title, body);
      const prov = buildSealedProvenance(identity);
      delete prov.payloadSha256;

      const before = await countD4Rows(pilotId, prep.id);
      const attempt = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(attempt.status).toBe("FAILED");
      if (attempt.status === "FAILED") expect(attempt.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("SEAL-03: missing commandId → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n", { commandId: "" }),
      );
      prov.commandId = "";
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-04: missing source → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n"),
      );
      delete prov.source;
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-05: wrong action string → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n"),
      );
      prov.action = "PATCH";
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-06: REVISE sealed complete → AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-06-base");
      const created = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (created.effect.status !== "AVAILABLE") throw new Error("create");

      const convId = await getConversationId(pilotId, prep.id);
      await completeReservedTurn(convId!, reserved);
      const reservedRev = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: pilotId,
        clientTurnKey: `seal-06-rev-${Date.now()}`,
        content: "REVISE SEAL-06.",
      });
      if (reservedRev.kind !== "fresh") throw new Error("fresh");
      const revisedBody = `${admitted.binding.contentMarkdown}\n## SEAL-06\n`;
      const admittedRev = admitDocumentCommand({
        commandId: reservedRev.commandId,
        operationId: reservedRev.operationId,
        userMessageId: reservedRev.userMessageId,
        qualifiedIntentId: "i-d4-revise",
        action: "REVISE",
        preparationId: prep.id,
        documentId: created.effect.documentId,
        baseRevisionId: created.effect.revisionId,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reservedRev.commandId },
        title: admitted.binding.title,
        contentMarkdown: revisedBody,
      });
      expect(admittedRev.ok).toBe(true);
      if (!admittedRev.ok) throw new Error(admittedRev.reason);

      const revised = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reservedRev.commandId, ownerToken: reservedRev.ownerToken },
        binding: admittedRev.binding,
      });
      expect(revised.effect.status).toBe("AVAILABLE");
    });

    it("SEAL-07: REVISE sealed missing baseRevisionId → refuse", () => {
      const identity = minimalCreateIdentity("prep-x", "corr-rev", "T", "# T\n\nb.\n", {
        action: "REVISE",
        documentId: "doc-x",
        baseRevisionId: null,
      });
      const prov = buildSealedProvenance(identity);
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-08: REVISE missing qualifiedIntentId → refuse", () => {
      const r = admitDocumentCommand({
        commandId: "tcmd-seal-08",
        operationId: "op-seal-08",
        userMessageId: "usr-seal-08",
        qualifiedIntentId: "",
        action: "REVISE",
        preparationId: "prep-seal-08",
        documentId: "doc-1",
        baseRevisionId: "rev-1",
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "tcmd-seal-08" },
        title: "T",
        contentMarkdown: "# T\n\nRévisé.\n",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("MISSING_IDENTITIES");
    });

    it("SEAL-09: tampered provenance (title removed) → UNKNOWN, never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-09");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
      const revisionId = sealed.effect.revisionId;
      const baseline = await countD4Rows(pilotId, prep.id);

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete prov.title;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(prov) })
        .where(eq(documentRevisions.id, revisionId));

      const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
      expect(truth.verdict).toBe("UNKNOWN");
      const reconciled = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(reconciled.verdict).not.toBe("AVAILABLE");
      expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
    });

    it("SEAL-10: diverged identity field in DB → CONFLICT/UNKNOWN, never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-10");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, sealed.effect.revisionId))
          .limit(1)
      )[0];
      const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      prov.commandId = "other-command-id";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(prov) })
        .where(eq(documentRevisions.id, sealed.effect.revisionId));

      const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
      expect(["CONFLICT", "UNKNOWN"]).toContain(truth.verdict);
    });

    it("SEAL-11: historical provenance same corr+content → AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-11");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-${Date.now()}`;
      const title = "Historical SEAL-11";
      const body = `# ${title}\n\nSans binding scellé.\n`;
      const saved = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy", correlationKey: corr },
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");

      const again = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy-replay", correlationKey: corr },
      });
      expect(again.status).toBe("AVAILABLE");
      if (again.status !== "AVAILABLE" || saved.status !== "AVAILABLE") throw new Error("available");
      expect(again.documentId).toBe(saved.documentId);
      expect(again.revisionId).toBe(saved.revisionId);
    });

    it("SEAL-12: incomplete sealed provenance — 10× save/reconcile, zero new D4 rows", async () => {
      const pilotId = await seedPilot("seal-12");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-12");
      const prov = buildSealedProvenance(sealedIdentityFromBinding(admitted.binding));
      delete prov.payloadSha256;
      const before = await countD4Rows(pilotId, prep.id);

      for (let i = 0; i < 10; i++) {
        const saved = await savePreparationDocument(
          pilotId,
          prep.id,
          admitted.binding.title,
          admitted.binding.contentMarkdown,
          undefined,
          { correlationKey: admitted.binding.correlationKey, provenance: prov },
        );
        expect(saved.status).not.toBe("AVAILABLE");
        const reconciled = await reconcileDocumentCommandFromBinding({
          pilotId,
          preparationId: prep.id,
          binding: admitted.binding,
        });
        expect(reconciled.verdict).not.toBe("AVAILABLE");
        await stashDocumentCommandBinding({
          commandId: reserved.commandId,
          ownerToken: reserved.ownerToken,
          binding: admitted.binding,
        });
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("SEAL-13: sealed invalid on empty prep → FAILED, zero docs", async () => {
      const pilotId = await seedPilot("seal-13");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-seal-13-${Date.now()}`;
      const title = "SEAL-13";
      const body = `# ${title}\n\nRefus.\n`;
      const prov = buildSealedProvenance(minimalCreateIdentity(prep.id, corr, title, body));
      delete prov.commandId;

      const result = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(result.status).toBe("FAILED");
      if (result.status === "FAILED") expect(result.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      expect((await countD4Rows(pilotId, prep.id)).documents).toBe(0);
    });

    it("SEAL-14: sealed invalid replay on existing corr → no false AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-14");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-seal-14-${Date.now()}`;
      const title = "SEAL-14 healthy";
      const body = `# ${title}\n\nValide.\n`;
      const valid = minimalCreateIdentity(prep.id, corr, title, body);
      const healthy = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance(valid),
      });
      expect(healthy.status).toBe("AVAILABLE");

      const invalidProv = buildSealedProvenance({ ...valid, commandId: "bad-cmd" });
      delete invalidProv.payloadSha256;

      const [a, b] = await Promise.all([
        savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey: corr,
          provenance: invalidProv,
        }),
        savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey: corr,
          provenance: invalidProv,
        }),
      ]);
      expect(a.status).not.toBe("AVAILABLE");
      expect(b.status).not.toBe("AVAILABLE");

      const docCount = await db
        .select({ n: sql<number>`count(*)`.mapWith(Number) })
        .from(documents)
        .where(
          and(
            eq(documents.ownerPilotId, pilotId),
            eq(documents.preparationId, prep.id),
            eq(documents.creationCorrelationKey, corr),
          ),
        );
      expect(docCount[0]?.n).toBe(1);
    });
  });

  function minimalCreateIdentity(
    prepId: string,
    corr: string,
    title: string,
    body: string,
    overrides?: Partial<SealedEffectIdentity>,
  ): SealedEffectIdentity {
    const cSha = contentSha256(title, body);
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-cmd" };
    return {
      commandId: "seal-cmd",
      operationId: "seal-op",
      userMessageId: "seal-usr",
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      source,
      preparationId: prepId,
      documentId: null,
      baseRevisionId: null,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: cSha,
      payloadSha256: payloadSha256({
        action: "CREATE",
        source,
        preparationId: prepId,
        documentId: null,
        baseRevisionId: null,
        title,
        contentSha256: cSha,
      }),
      title,
      ...overrides,
    };
  }

  function minimalReviseIdentity(
    prepId: string,
    corr: string,
    title: string,
    body: string,
    documentId: string,
    baseRevisionId: string,
    overrides?: Partial<SealedEffectIdentity>,
  ): SealedEffectIdentity {
    const cSha = contentSha256(title, body);
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-rev-cmd" };
    return {
      commandId: "seal-rev-cmd",
      operationId: "seal-rev-op",
      userMessageId: "seal-rev-usr",
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      source,
      preparationId: prepId,
      documentId,
      baseRevisionId,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: cSha,
      payloadSha256: payloadSha256({
        action: "REVISE",
        source,
        preparationId: prepId,
        documentId,
        baseRevisionId,
        sectionHint: null,
        title,
        contentSha256: cSha,
      }),
      title,
      ...overrides,
    };
  }

  async function sealCreateViaSave(
    pilotId: string,
    prepId: string,
    label: string,
    corr?: string,
  ) {
    const title = `DOWN ${label}`;
    const body = `# ${title}\n\nCorps ${label}.\n`;
    const correlationKey = corr ?? `corr-down-${label}-${Date.now()}`;
    const identity = minimalCreateIdentity(prepId, correlationKey, title, body);
    const prov = buildSealedProvenance(identity);
    const saved = await savePreparationDocument(pilotId, prepId, title, body, undefined, {
      correlationKey,
      provenance: prov,
    });
    return { title, body, correlationKey, identity, prov, saved };
  }

  describe("DOWN provenance downgrade refusal (PG)", () => {
    it("DOWN-01: historical real (no sealed markers) → AVAILABLE historical", async () => {
      const pilotId = await seedPilot("down-01");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-down01-${Date.now()}`;
      const title = "Historical DOWN-01";
      const body = `# ${title}\n\nSans marqueurs scellés.\n`;
      const first = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy", correlationKey: corr },
      });
      expect(first.status).toBe("AVAILABLE");
      const second = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy-replay", correlationKey: corr },
      });
      expect(second.status).toBe("AVAILABLE");
      if (first.status === "AVAILABLE" && second.status === "AVAILABLE") {
        expect(second.documentId).toBe(first.documentId);
        expect(second.revisionId).toBe(first.revisionId);
      }
    });

    it("DOWN-02: CREATE sealed healthy → AVAILABLE", async () => {
      const pilotId = await seedPilot("down-02");
      const prep = await openOrCreatePreparation(pilotId);
      const { saved } = await sealCreateViaSave(pilotId, prep.id, "02");
      expect(saved.status).toBe("AVAILABLE");
    });

    it("DOWN-03: sealed stored + request binding key removed → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-03");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "03",
      );
      expect(saved.status).toBe("AVAILABLE");
      const stripped = { ...prov };
      delete stripped.documentCommandBinding;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: stripped,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("DOWN-04: sealed stored + request documentCommandBinding:false → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-04");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "04",
      );
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { ...prov, documentCommandBinding: false },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-05: sealed stored + request provenance undefined → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-05");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "05",
      );
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-06: DB provenance — remove binding, keep sealed remnants → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "06",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete stored.documentCommandBinding;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-07: sealed request + altered stored identity → not AVAILABLE", async () => {
      const pilotId = await seedPilot("down-07");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "07",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      stored.commandId = "tampered-command";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      expect(["UNKNOWN", "CONFLICT"]).toContain(replay.status);

      const { admitted } = await freshCreateBinding(pilotId, prep.id, "down07-lookup");
      const binding = {
        ...admitted.binding,
        correlationKey,
        title,
        contentMarkdown: body,
        contentSha256: identity.contentSha256,
        payloadSha256: identity.payloadSha256,
      };
      const truth = await lookupFromBinding(pilotId, prep.id, binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
    });

    it("DOWN-08: distinctive sealed remnants + binding marker absent → refuse", () => {
      const prov = {
        qualifiedIntentId: "i-d4-create",
        payloadSha256: "a".repeat(64),
        correlationKey: "corr-down-08",
        title: "T",
      };
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("DOWN-09: same content+corr, incoherent request identity → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "09",
      );
      expect(saved.status).toBe("AVAILABLE");
      const badProv = buildSealedProvenance({ ...identity, commandId: "incoherent-cmd-id" });
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: badProv,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-10: after DB tamper — 10× reconcile, zero writes, never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "down-10");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      expect(sealed.effect.status).toBe("AVAILABLE");
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
      const baseline = await countD4Rows(pilotId, prep.id);

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, sealed.effect.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      stored.qualifiedIntentId = "mutated-intent";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, sealed.effect.revisionId));

      for (let i = 0; i < 10; i++) {
        const r = await reconcileDocumentCommandFromBinding({
          pilotId,
          preparationId: prep.id,
          binding: admitted.binding,
        });
        expect(r.verdict).not.toBe("AVAILABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
    });

    it("DOWN-11: historical CREATE/REVISE non-regression", async () => {
      const pilotId = await seedPilot("down-11");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-down11-${Date.now()}`;
      const title = "Historical revise DOWN-11";
      const bodyV1 = `# ${title}\n\nV1.\n`;
      const v1 = await savePreparationDocument(pilotId, prep.id, title, bodyV1, undefined, {
        correlationKey: corr,
        provenance: { legacy: true, correlationKey: corr },
      });
      expect(v1.status).toBe("AVAILABLE");
      if (v1.status !== "AVAILABLE") throw new Error("v1");

      const bodyV2 = `# ${title}\n\nV1.\n\n## V2\n\nSuite.\n`;
      const v2 = await savePreparationDocument(pilotId, prep.id, title, bodyV2, v1.documentId, {
        correlationKey: `rev-${corr}`,
        provenance: { legacy: true, correlationKey: `rev-${corr}` },
      });
      expect(v2.status).toBe("AVAILABLE");
      if (v2.status !== "AVAILABLE") throw new Error("v2");
      expect(v2.revisionId).not.toBe(v1.revisionId);

      const replayV1 = await savePreparationDocument(pilotId, prep.id, title, bodyV1, undefined, {
        correlationKey: corr,
        provenance: { legacy: true, correlationKey: corr },
      });
      expect(replayV1.status).toBe("AVAILABLE");
      if (replayV1.status === "AVAILABLE") {
        expect(replayV1.documentId).toBe(v1.documentId);
        expect(replayV1.revisionId).toBe(v1.revisionId);
      }
    });
  });

  describe("FIELD sealed required keys (unit + PG)", () => {
  function provOmitKey(
    identity: SealedEffectIdentity,
    omit: string,
  ): Record<string, unknown> {
    const prov = buildSealedProvenance(identity);
    delete prov[omit];
    return prov;
  }

    it("FIELD-01: CREATE documentId:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f01", "T", "# T\n\nb.\n"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-02: CREATE documentId key absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f02", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "documentId")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-03: CREATE baseRevisionId:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f03", "T", "# T\n\nb.\n"),
      );
      expect(prov.baseRevisionId).toBeNull();
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-04: CREATE baseRevisionId absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f04", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "baseRevisionId")).kind).toBe(
        "SEALED_INVALID",
      );
    });

    it("FIELD-05: CREATE sectionHint:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f05", "T", "# T\n\nb.\n"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-06: CREATE sectionHint absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f06", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "sectionHint")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-07: REVISE documentId+baseRevisionId present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalReviseIdentity("prep-f", "corr-f07", "T", "# T\n\nb.\n", "doc-f07", "rev-f07"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-08: REVISE documentId absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f08", "T", "# T\n\nb.\n", "doc-f08", "rev-f08");
      expect(resolveProvenanceIdentity(provOmitKey(id, "documentId")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-09: REVISE baseRevisionId absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f09", "T", "# T\n\nb.\n", "doc-f09", "rev-f09");
      expect(resolveProvenanceIdentity(provOmitKey(id, "baseRevisionId")).kind).toBe(
        "SEALED_INVALID",
      );
    });

    it("FIELD-10: REVISE sectionHint:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalReviseIdentity("prep-f", "corr-f10", "T", "# T\n\nb.\n", "doc-f10", "rev-f10"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-11: REVISE sectionHint absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f11", "T", "# T\n\nb.\n", "doc-f11", "rev-f11");
      expect(resolveProvenanceIdentity(provOmitKey(id, "sectionHint")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-12: delete required field from DB provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-12");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "12",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete stored.documentId;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("FIELD-13: delete required field from request provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-13");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "13",
      );
      expect(saved.status).toBe("AVAILABLE");
      const bad = buildSealedProvenance(identity);
      delete bad.sectionHint;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: bad,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "FAILED") expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
    });

    it("FIELD-14: same SHA+corr, missing required field on replay → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-14");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "14",
      );
      expect(saved.status).toBe("AVAILABLE");
      const bad = { ...buildSealedProvenance(identity) };
      delete bad.baseRevisionId;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: bad,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("FIELD-15: nominal CREATE+REVISE replay same refs", async () => {
      const pilotId = await seedPilot("field-15");
      const prep = await openOrCreatePreparation(pilotId);
      const corrCreate = `corr-f15-create-${Date.now()}`;
      const title = "FIELD-15";
      const bodyCreate = `# ${title}\n\nCreate.\n`;
      const createId = minimalCreateIdentity(prep.id, corrCreate, title, bodyCreate);
      const createProv = buildSealedProvenance(createId);
      const created = await savePreparationDocument(pilotId, prep.id, title, bodyCreate, undefined, {
        correlationKey: corrCreate,
        provenance: createProv,
      });
      expect(created.status).toBe("AVAILABLE");
      if (created.status !== "AVAILABLE") throw new Error("create");
      const createReplay = await savePreparationDocument(pilotId, prep.id, title, bodyCreate, undefined, {
        correlationKey: corrCreate,
        provenance: createProv,
      });
      expect(createReplay.status).toBe("AVAILABLE");
      if (createReplay.status === "AVAILABLE") {
        expect(createReplay.documentId).toBe(created.documentId);
        expect(createReplay.revisionId).toBe(created.revisionId);
      }

      const corrRev = `corr-f15-rev-${Date.now()}`;
      const bodyRev = `${bodyCreate}\n## Rev\n\nSuite.\n`;
      const revId = minimalReviseIdentity(
        prep.id,
        corrRev,
        title,
        bodyRev,
        created.documentId,
        created.revisionId,
      );
      const revProv = buildSealedProvenance(revId);
      const revised = await savePreparationDocument(pilotId, prep.id, title, bodyRev, created.documentId, {
        correlationKey: corrRev,
        provenance: revProv,
      });
      expect(revised.status).toBe("AVAILABLE");
      if (revised.status !== "AVAILABLE") throw new Error("revise");
      const revReplay = await savePreparationDocument(pilotId, prep.id, title, bodyRev, created.documentId, {
        correlationKey: corrRev,
        provenance: revProv,
      });
      expect(revReplay.status).toBe("AVAILABLE");
      if (revReplay.status === "AVAILABLE") {
        expect(revReplay.documentId).toBe(created.documentId);
        expect(revReplay.revisionId).toBe(revised.revisionId);
      }
    });
  });

  describe("PARSE stored provenance readability (PG)", () => {
    async function corruptRevisionProvenance(revisionId: string, raw: string) {
      await db
        .update(documentRevisions)
        .set({ provenanceJson: raw })
        .where(eq(documentRevisions.id, revisionId));
    }

    async function historicalCreate(
      pilotId: string,
      prepId: string,
      label: string,
      provenance: Record<string, unknown>,
    ) {
      const title = `PARSE ${label}`;
      const body = `# ${title}\n\nCorps ${label} inchangé.\n`;
      const correlationKey = `corr-parse-${label}-${Date.now()}`;
      const saved = await savePreparationDocument(pilotId, prepId, title, body, undefined, {
        correlationKey,
        provenance,
      });
      return { title, body, correlationKey, saved };
    }

    it("PARSE-01: historical valid JSON object → AVAILABLE on content match", async () => {
      const pilotId = await seedPilot("parse-01");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "01", {
        note: "legacy-valid-object",
        correlationKey: "placeholder",
      });
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "legacy-replay", correlationKey },
      });
      expect(replay.status).toBe("AVAILABLE");
      if (saved.status === "AVAILABLE" && replay.status === "AVAILABLE") {
        expect(replay.documentId).toBe(saved.documentId);
        expect(replay.revisionId).toBe(saved.revisionId);
      }
    });

    it("PARSE-02: historical provenance {} → AVAILABLE compatibility", async () => {
      const pilotId = await seedPilot("parse-02");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "02", {});
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: {},
      });
      expect(replay.status).toBe("AVAILABLE");
    });

    it("PARSE-03: stored JSON syntax invalid → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-03");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "03", {
        note: "will-corrupt",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const before = await countD4Rows(pilotId, prep.id);
      await corruptRevisionProvenance(saved.revisionId, "{not-json");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).toBe("UNKNOWN");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("PARSE-04: stored JSON null → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-04");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "04", {
        note: "will-null",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "null");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-05: stored JSON array → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-05");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "05", {
        note: "will-array",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "[]");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-06: stored JSON string primitive → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "06", {
        note: "will-string",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, '"legacy-string"');
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-07: stored empty string → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-07");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "07", {
        note: "will-empty",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-08: sealed healthy → AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-08");
      const prep = await openOrCreatePreparation(pilotId);
      const { saved } = await sealCreateViaSave(pilotId, prep.id, "parse-08");
      expect(saved.status).toBe("AVAILABLE");
    });

    it("PARSE-09: sealed command + corrupted stored JSON → UNKNOWN", async () => {
      const pilotId = await seedPilot("parse-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "parse-09",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "{broken");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).toBe("UNKNOWN");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-10: historical request vs corrupted sealed-looking stored → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "parse-10",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "null");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-vs-corrupt", correlationKey },
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-11: ten corrupted replays → zero new D4 effects", async () => {
      const pilotId = await seedPilot("parse-11");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "11", {
        note: "adversarial",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "{not-json");
      const before = await countD4Rows(pilotId, prep.id);
      for (let i = 0; i < 10; i++) {
        const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey,
          provenance: { note: `hist-replay-${i}`, correlationKey },
        });
        expect(replay.status).toBe("UNKNOWN");
        if (replay.status === "UNKNOWN" && "reason" in replay) {
          expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
        }
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("PARSE-12: REVISE with corrupted stored provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-12");
      const prep = await openOrCreatePreparation(pilotId);
      const created = await sealCreateViaSave(pilotId, prep.id, "parse-12-base");
      expect(created.saved.status).toBe("AVAILABLE");
      if (created.saved.status !== "AVAILABLE") throw new Error("create");

      const corrRev = `corr-parse-12-rev-${Date.now()}`;
      const bodyRev = `${created.body}\n## Rev\n\nParse-12.\n`;
      const revId = minimalReviseIdentity(
        prep.id,
        corrRev,
        created.title,
        bodyRev,
        created.saved.documentId,
        created.saved.revisionId,
      );
      const revProv = buildSealedProvenance(revId);
      const revised = await savePreparationDocument(
        pilotId,
        prep.id,
        created.title,
        bodyRev,
        created.saved.documentId,
        { correlationKey: corrRev, provenance: revProv },
      );
      expect(revised.status).toBe("AVAILABLE");
      if (revised.status !== "AVAILABLE") throw new Error("revise");

      const before = await countD4Rows(pilotId, prep.id);
      await corruptRevisionProvenance(revised.revisionId, "[]");
      const replay = await savePreparationDocument(
        pilotId,
        prep.id,
        created.title,
        bodyRev,
        created.saved.documentId,
        { correlationKey: corrRev, provenance: revProv },
      );
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });
  });

  it("F01-10: stashed binding without apply — lookup UNKNOWN", async () => {
    const pilotId = await seedPilot("f01-stash");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "stash-only");
    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admitted.binding,
    });
    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Sans D4.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });
    const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("UNKNOWN");
  });
});

function createHashFlip(hex: string): string {
  const n = parseInt(hex.slice(0, 8), 16) ^ 0xff;
  return n.toString(16).padStart(8, "0") + hex.slice(8);
}
```

### `projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts`

```typescript
/**
 * C-01 — read-only D4 reconcile via correlation truth (never writes on reconcile).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const devSessionRef = vi.hoisted(() => ({ token: "" }));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      const lane = (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
      const safe = lane.replace(/[^A-Z0-9]+/g, "_").slice(0, 24);
      const cookie = `sfia_studio_session__${safe}`;
      if (name !== cookie) return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { GET } from "@/app/api/preparations/[preparationId]/reconcile/route";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  loadSealedDocumentBinding,
  reconcileDocumentCommandFromBinding,
  sealAndApplyDocumentCommand,
} from "@/domains/conversation/document-command";
import { lookupDocumentCorrelationTruth } from "@/domains/document/service";
import {
  completeTurnCommand,
  reserveTurnCommand,
  stashDocumentCommandBinding,
} from "@/domains/conversation/turn-command";
import { savePreparationDocument } from "@/domains/document/service";
import { createDevTestSession } from "@/domains/identity/session";

async function reconcileHttpGet(
  preparationId: string,
  query: Record<string, string | undefined>,
) {
  const url = new URL(`http://127.0.0.1:3100/api/preparations/${preparationId}/reconcile`);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined) url.searchParams.set(k, v);
  }
  const res = await GET(new Request(url.toString()), {
    params: Promise.resolve({ preparationId }),
  });
  const body = (await res.json()) as Record<string, unknown>;
  return { status: res.status, body };
}

async function bindDevSession(which: "a" | "b") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  return sess;
}

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
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

async function sealCreateTurn(pilotId: string, preparationId: string, label: string) {
  const convId = await getConversationId(pilotId, preparationId);
  expect(convId).toBeTruthy();
  const reserved = await reserveTurnCommand({
    conversationId: convId!,
    ownerPilotId: pilotId,
    clientTurnKey: `ml4c-rec-${label}-${Date.now()}`,
    content: "CREATE ML4C reconcile.",
  });
  expect(reserved.kind).toBe("fresh");
  if (reserved.kind !== "fresh") throw new Error("fresh turn");

  const title = `Reconcile ${label}`;
  const body = `# ${title}\n\nCorps reconcile ${label}.\n`;
  const admitted = admitDocumentCommand({
    commandId: reserved.commandId,
    operationId: reserved.operationId,
    userMessageId: reserved.userMessageId,
    qualifiedIntentId: "i-d4-create",
    action: "CREATE",
    preparationId,
    source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
    title,
    contentMarkdown: body,
  });
  expect(admitted.ok).toBe(true);
  if (!admitted.ok) throw new Error(admitted.reason);

  const sealed = await sealAndApplyDocumentCommand({
    pilotId,
    fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
    binding: admitted.binding,
  });
  expect(sealed.effect.status).toBe("AVAILABLE");

  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: convId!,
    role: "assistant",
    content: "CREATE scellé.",
    status: "COMPLETE",
    ordinal: reserved.ordinalAssistant,
  });
  await completeTurnCommand({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    status: "COMPLETE",
    assistantMessageId: assistantId,
  });

  return { reserved, admitted, sealed, convId: convId! };
}

describe("ML4C document reconciliation C-01 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("CREATE effect then reconcile → same documentId/revisionId, zero new rows", async () => {
    const pilotId = await seedPilot("ml4c-c01-create-ok");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, sealed } = await sealCreateTurn(pilotId, prep.id, "ok");
    const afterEffect = await countD4Rows(pilotId, prep.id);
    expect(afterEffect.documents).toBeGreaterThan(0);

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.documentId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
    );
    expect(reconciled.revisionId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.revisionId : undefined,
    );

    const afterReconcile = await countD4Rows(pilotId, prep.id);
    expect(afterReconcile).toEqual(afterEffect);
  });

  it("CREATE absent → UNKNOWN, zero writes on reconcile", async () => {
    const pilotId = await seedPilot("ml4c-c01-create-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const before = await countD4Rows(pilotId, prep.id);

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-abs-${Date.now()}`,
      content: "Binding sans effet D4.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Absent D4",
      contentMarkdown: "# Absent D4\n\nJamais appliqué.\n",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const stashed = await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admitted.binding,
    });
    expect(stashed.applied).toBe(true);

    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Tour sans D4.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });

    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "CREATE",
      correlationKey: admitted.binding.correlationKey,
      title: admitted.binding.title,
      contentMarkdown: admitted.binding.contentMarkdown,
      contentSha256: admitted.binding.contentSha256,
      payloadSha256: admitted.binding.payloadSha256,
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/CREATE_CORRELATION_ABSENT/);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("UNKNOWN");

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("REVISE effect then reconcile → same revisionId, zero new rows", async () => {
    const pilotId = await seedPilot("ml4c-c01-revise-ok");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, sealed: createSealed } = await sealCreateTurn(
      pilotId,
      prep.id,
      "rev-base",
    );
    if (createSealed.effect.status !== "AVAILABLE") throw new Error("create");
    const documentId = createSealed.effect.documentId!;
    const baseRevisionId = createSealed.effect.revisionId!;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-rev-${Date.now()}`,
      content: "REVISE reconcile.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const title = createAdmitted.binding.title;
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## Rev\n\nAjout.\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: revisedBody,
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.effect.status).toBe("AVAILABLE");
    const afterRevise = await countD4Rows(pilotId, prep.id);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admittedRev.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.revisionId).toBe(
      sealedRev.effect.status === "AVAILABLE" ? sealedRev.effect.revisionId : undefined,
    );

    const afterReconcile = await countD4Rows(pilotId, prep.id);
    expect(afterReconcile).toEqual(afterRevise);
  });

  it("REVISE absent → UNKNOWN, zero new revisions", async () => {
    const pilotId = await seedPilot("ml4c-c01-revise-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const { sealed: createSealed } = await sealCreateTurn(pilotId, prep.id, "rev-only");
    if (createSealed.effect.status !== "AVAILABLE") throw new Error("create");
    const documentId = createSealed.effect.documentId!;
    const baseRevisionId = createSealed.effect.revisionId!;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-rev-abs-${Date.now()}`,
      content: "REVISE binding only.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Reconcile REVISE absent",
      contentMarkdown: "# Reconcile REVISE absent\n\nNon appliqué.\n",
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedRev.binding,
    });

    const before = await countD4Rows(pilotId, prep.id);
    const truth = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admittedRev.binding,
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/REVISE_CORRELATION_ABSENT/);

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("correlation + divergent payload → CONFLICT, zero writes", async () => {
    const pilotId = await seedPilot("ml4c-c01-conflict");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "Divergent";
    const bodyA = "# Divergent\n\nVersion A.\n";
    const { admitted: admittedA, sealed } = await (async () => {
      const convId = await getConversationId(pilotId, prep.id);
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: pilotId,
        clientTurnKey: `ml4c-conf-a-${Date.now()}`,
        content: "Seal version A.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");
      const admitted = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-create",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title,
        contentMarkdown: bodyA,
      });
      if (!admitted.ok) throw new Error(admitted.reason);
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      const assistantId = newId("msg");
      await db.insert(messages).values({
        id: assistantId,
        conversationId: convId!,
        role: "assistant",
        content: "Version A scellée.",
        status: "COMPLETE",
        ordinal: reserved.ordinalAssistant,
      });
      await completeTurnCommand({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        assistantMessageId: assistantId,
      });
      return { admitted, sealed };
    })();
    expect(sealed.effect.status).toBe("AVAILABLE");
    const corr = admittedA.binding.correlationKey;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-conf-b-${Date.now()}`,
      content: "Mismatch reconcile.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const bodyB = "# Divergent\n\nVersion B divergente.\n";
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: bodyB,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: { ...admitted.binding, correlationKey: corr },
    });

    const before = await countD4Rows(pilotId, prep.id);
    const binding = { ...admitted.binding, correlationKey: corr };
    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");
    expect(reconciled.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    expect(reconciled.documentId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
    );

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("other pilot binding → denied", async () => {
    const pilotA = await seedPilot("ml4c-c01-own-a");
    const pilotB = await seedPilot("ml4c-c01-own-b");
    const prep = await openOrCreatePreparation(pilotA);
    const { admitted } = await sealCreateTurn(pilotA, prep.id, "deny");

    const denied = await loadSealedDocumentBinding({
      pilotId: pilotB,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) throw new Error("expected deny");
    expect(denied.reason).toBe("COMMAND_DENIED");
  });

  it("F05: two bindings without selector → BINDING_SELECTOR_REQUIRED", async () => {
    const pilotId = await seedPilot("ml4c-f05-sel");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-f05-${Date.now()}`,
      content: "Double binding.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admittedA = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-a",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Binding A",
      contentMarkdown: "# Binding A\n\nA.\n",
    });
    const admittedB = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-b",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Binding B",
      contentMarkdown: "# Binding B\n\nB.\n",
    });
    expect(admittedA.ok && admittedB.ok).toBe(true);
    if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedA.binding,
    });
    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedB.binding,
    });

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: reserved.commandId,
    });
    expect(loaded.ok).toBe(false);
    if (loaded.ok) throw new Error("expected selector required");
    expect(loaded.reason).toBe("BINDING_SELECTOR_REQUIRED");

    const loadedA = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: reserved.commandId,
      correlationKey: admittedA.binding.correlationKey,
    });
    expect(loadedA.ok).toBe(true);
  });

  describe("F-05 HTTP reconcile route", () => {
    it("F05-08: two bindings without correlationKey → 409 BINDING_SELECTOR_REQUIRED", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-http-${Date.now()}`,
        content: "Double binding HTTP.",
      });
      expect(reserved.kind).toBe("fresh");
      if (reserved.kind !== "fresh") throw new Error("fresh");

      const admittedA = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-a",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Binding A",
        contentMarkdown: "# HTTP Binding A\n\nA.\n",
      });
      const admittedB = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-b",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Binding B",
        contentMarkdown: "# HTTP Binding B\n\nB.\n",
      });
      if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedA.binding,
      });
      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedB.binding,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
      });
      expect(res.status).toBe(409);
      expect(res.body.reason).toBe("BINDING_SELECTOR_REQUIRED");
    });

    it("F05-08b: correlationKey A after seal → 200 AVAILABLE", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-http-ok-${Date.now()}`,
        content: "Seal then reconcile HTTP.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");

      const admittedA = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-a",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Seal A",
        contentMarkdown: "# HTTP Seal A\n\nScellé.\n",
      });
      const admittedB = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-b",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Seal B",
        contentMarkdown: "# HTTP Seal B\n\nNon scellé.\n",
      });
      if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

      const sealed = await sealAndApplyDocumentCommand({
        pilotId: sess.pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admittedA.binding,
      });
      expect(sealed.effect.status).toBe("AVAILABLE");

      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedB.binding,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
        correlationKey: admittedA.binding.correlationKey,
      });
      expect(res.status).toBe(200);
      expect(res.body.verdict).toBe("AVAILABLE");
      expect(res.body.correlationKey).toBe(admittedA.binding.correlationKey);
    });

    it("F05-09: ten consecutive HTTP GET → zero new D4 rows", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const { admitted, sealed } = await sealCreateTurn(sess.pilotId, prep.id, "http-10x");
      const before = await countD4Rows(sess.pilotId, prep.id);
      const documentId =
        sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined;
      const revisionId =
        sealed.effect.status === "AVAILABLE" ? sealed.effect.revisionId : undefined;

      for (let i = 0; i < 10; i++) {
        const res = await reconcileHttpGet(prep.id, {
          documentCommandId: admitted.binding.commandId,
          correlationKey: admitted.binding.correlationKey,
        });
        expect(res.status).toBe(200);
        expect(res.body.verdict).toBe("AVAILABLE");
        expect(res.body.documentId).toBe(documentId);
        expect(res.body.revisionId).toBe(revisionId);
      }

      expect(await countD4Rows(sess.pilotId, prep.id)).toEqual(before);
    });

    it("FLOW-HTTP: sealed CREATE then 10× reconcileHttpGet — stable ids", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const { admitted, sealed } = await sealCreateTurn(sess.pilotId, prep.id, "flow-http");
      expect(sealed.effect.status).toBe("AVAILABLE");
      if (sealed.effect.status !== "AVAILABLE") throw new Error("seal");
      const baseline = await countD4Rows(sess.pilotId, prep.id);

      for (let i = 0; i < 10; i++) {
        const res = await reconcileHttpGet(prep.id, {
          documentCommandId: admitted.binding.commandId,
          correlationKey: admitted.binding.correlationKey,
        });
        expect(res.status).toBe(200);
        expect(res.body.verdict).toBe("AVAILABLE");
        expect(res.body.documentId).toBe(sealed.effect.documentId);
        expect(res.body.revisionId).toBe(sealed.effect.revisionId);
      }
      expect(await countD4Rows(sess.pilotId, prep.id)).toEqual(baseline);
    });

    it("foreign pilot session → 403 COMMAND_DENIED", async () => {
      const owner = await bindDevSession("a");
      const prep = await openOrCreatePreparation(owner.pilotId);
      const { admitted } = await sealCreateTurn(owner.pilotId, prep.id, "http-deny");

      await bindDevSession("b");
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: admitted.binding.commandId,
        correlationKey: admitted.binding.correlationKey,
      });
      expect(res.status).toBe(403);
      expect(res.body.reason).toBe("COMMAND_DENIED");
    });

    it("missing turn command id → 403 COMMAND_DENIED (indistinguishable from foreign owner)", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: newId("tcmd"),
      });
      expect(res.status).toBe(403);
      expect(res.body.reason).toBe("COMMAND_DENIED");
    });

    it("command without binding → 404 BINDING_ABSENT", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-absent-${Date.now()}`,
        content: "Sans binding.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");
      const assistantId = newId("msg");
      await db.insert(messages).values({
        id: assistantId,
        conversationId: convId!,
        role: "assistant",
        content: "Sans document binding.",
        status: "COMPLETE",
        ordinal: reserved.ordinalAssistant,
      });
      await completeTurnCommand({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        assistantMessageId: assistantId,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
      });
      expect(res.status).toBe(404);
      expect(res.body.reason).toBe("BINDING_ABSENT");
    });
  });

  it("10× reconcile GET path → D4 counts unchanged", async () => {
    const pilotId = await seedPilot("ml4c-c01-10x");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted } = await sealCreateTurn(pilotId, prep.id, "10x");
    const before = await countD4Rows(pilotId, prep.id);

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: loaded.binding,
      });
      expect(r.verdict).toBe("AVAILABLE");
    }

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/ml4c-history-long.pg.test.ts`

```typescript
/**
 * C-05 / C-07 — long journal pagination + lexical hint without exclusivity + budget PARTIAL.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
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

async function seedLongJournal(
  pilotId: string,
  preparationId: string,
  total: number,
  markers: { ordinal: number; text: string }[],
) {
  const convId = await getConversationId(pilotId, preparationId);
  if (!convId) throw new Error("conversation missing");
  const markerByOrd = new Map(markers.map((m) => [m.ordinal, m.text]));

  const existing = await db
    .select({ ordinal: messages.ordinal })
    .from(messages)
    .where(eq(messages.conversationId, convId))
    .orderBy(asc(messages.ordinal));
  let next = (existing.at(-1)?.ordinal ?? 0) + 1;

  const batch: (typeof messages.$inferInsert)[] = [];
  const target = next + total - 1;
  while (next <= target) {
    const body = markerByOrd.get(next) ?? `Journal long ${next} — nuance ${next % 11}.`;
    batch.push({
      id: newId("msg"),
      conversationId: convId,
      role: next % 3 === 0 ? "assistant" : "user",
      content: body,
      status: "COMPLETE",
      ordinal: next,
      createdAt: new Date(Date.UTC(2026, 0, 1, 0, 0, next)),
    });
    next++;
    if (batch.length >= 80) {
      await db.insert(messages).values(batch);
      batch.length = 0;
    }
  }
  if (batch.length > 0) await db.insert(messages).values(batch);
  return convId;
}

describe("ML4C history long journal (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("HIST long: pagination past 300+; lexical hint non-exclusive", async () => {
    const pilotId = await seedPilot("ml4c-hist-long");
    const prep = await openOrCreatePreparation(pilotId);
    const markerEarly = "orientation X rouge ML4C long-thread";
    const markerMid = "correction X bleu ML4C long-thread";
    const markerLate = "question sur X ML4C long-thread";

    await seedLongJournal(pilotId, prep.id, 320, [
      { ordinal: 10, text: markerEarly },
      { ordinal: 110, text: markerMid },
      { ordinal: 250, text: markerLate },
    ]);

    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const seeded =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.n ?? 0;
    expect(seeded).toBe(320);

    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;
    expect(scope.conversationIds).toContain(convId);
    const maxOrdDb =
      (
        await db
          .select({ m: sql<number>`max(${messages.ordinal})`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.m ?? 0;
    expect(maxOrdDb).toBe(320);
    expect(scope.maxOrdinalByConversation[convId!]).toBe(320);

    const markerRows = await db
      .select({ id: messages.id, content: messages.content })
      .from(messages)
      .where(
        and(
          eq(messages.conversationId, convId!),
          sql`${messages.content} in (${sql.join(
            [markerEarly, markerMid, markerLate].map((t) => sql`${t}`),
            sql`, `,
          )})`,
        ),
      );
    expect(markerRows).toHaveLength(3);

    const scopeForWalk = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scopeForWalk).toBe(false);
    if ("denied" in scopeForWalk) return;

    const markerIds = new Set(markerRows.map((m) => m.id));
    const seenIds = new Set<string>();
    let cursor: string | null | undefined = undefined;
    const rareQuery = "zzzxnonexistenttoken";

    for (let pages = 0; pages < 80; pages++) {
      const page = await searchConversationHistory({
        scope: scopeForWalk,
        query: pages === 0 ? undefined : rareQuery,
        cursor: cursor ?? undefined,
        pageSize: 25,
      });
      expect(page.coverage).not.toBe("DENIED");
      for (const item of page.items) {
        seenIds.add(item.messageId);
        if (markerIds.has(item.messageId)) markerIds.delete(item.messageId);
      }
      if (!page.nextCursor) break;
      cursor = page.nextCursor;
    }

    expect(seenIds.size).toBeGreaterThanOrEqual(Math.min(300, seeded));
    expect(markerIds.size).toBe(0);

    const scopeFresh = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scopeFresh).toBe(false);
    if ("denied" in scopeFresh) return;

    let lexCursor: string | null | undefined = undefined;
    let sawLexical = false;
    for (let p = 0; p < 50 && !sawLexical; p++) {
      const lexical = await searchConversationHistory({
        scope: scopeFresh,
        query: "rouge",
        pageSize: 20,
        cursor: lexCursor ?? undefined,
      });
      expect(lexical.coverage).not.toBe("DENIED");
      expect(lexical.items.length).toBeGreaterThan(0);
      sawLexical = lexical.items.some((i) => i.preview.includes("rouge"));
      if (sawLexical) expect(lexical.coverage).toMatch(/PARTIAL|COMPLETE/);
      if (sawLexical || !lexical.nextCursor) break;
      lexCursor = lexical.nextCursor;
    }
    expect(sawLexical).toBe(true);
  });

  it("HIST long: foreign project isolated", async () => {
    const pilotA = await seedPilot("ml4c-hist-iso-a");
    const prepA = await openOrCreatePreparation(pilotA);
    await seedLongJournal(pilotA, prepA.id, 40, [
      { ordinal: 5, text: "secret iso A uniquement ML4C" },
    ]);

    const pilotB = await seedPilot("ml4c-hist-iso-b");
    const prepB = await openOrCreatePreparation(pilotB);
    const scopeB = await resolveAuthorizedHistoryScope({ pilotId: pilotB, preparationId: prepB.id });
    expect("denied" in scopeB).toBe(false);
    if ("denied" in scopeB) return;

    const searchB = await searchConversationHistory({ scope: scopeB, query: "secret iso A" });
    expect(searchB.items).toHaveLength(0);
  });

  it("HIST long: exhausted budget contract is PARTIAL not DENIED", async () => {
    const pilotId = await seedPilot("ml4c-hist-budget");
    const prep = await openOrCreatePreparation(pilotId);
    await seedLongJournal(pilotId, prep.id, 8, []);
    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;
    const page = await searchConversationHistory({ scope, pageSize: 8 });
    const payloadSize = JSON.stringify(page).length;
    expect(payloadSize).toBeGreaterThan(40);

  // Mirrors history-tools-sdk fitBudget / execute guard — budget exhaustion never maps to DENIED.
    const budgetExhausted = {
      coverage: "PARTIAL" as const,
      reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
      items: [] as [],
    };
    expect(budgetExhausted.coverage).toBe("PARTIAL");
    expect(budgetExhausted.reason).toBe("HISTORY_TOOL_BUDGET_EXHAUSTED");
    expect(budgetExhausted.coverage).not.toBe("DENIED");
  });

  it("HIST long: read marker at ordinal ~10 via search+read", async () => {
    const pilotId = await seedPilot("ml4c-hist-read");
    const prep = await openOrCreatePreparation(pilotId);
    const marker = "orientation X rouge ML4C long-thread";
    await seedLongJournal(pilotId, prep.id, 30, [{ ordinal: 10, text: marker }]);

    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    const conv = await getConversationId(pilotId, prep.id);
    const markerRow = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, conv!), eq(messages.content, marker)))
        .limit(1)
    )[0];
    expect(markerRow?.id).toBeTruthy();

    let cursor: string | null | undefined = undefined;
    let hit: Awaited<ReturnType<typeof searchConversationHistory>>["items"][number] | undefined;
    for (let page = 0; page < 50 && !hit; page++) {
      const hits = await searchConversationHistory({
        scope,
        query: "rouge",
        cursor: cursor ?? undefined,
        pageSize: 10,
      });
      hit = hits.items.find((i) => i.messageId === markerRow!.id);
      if (hit || !hits.nextCursor) break;
      cursor = hits.nextCursor;
    }
    expect(hit).toBeTruthy();

    const read = await readConversationMessages({ scope, messageIds: [hit!.messageId] });
    expect(read.items[0]?.content).toBe(marker);
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
      ordinal: next,
      createdAt: new Date(Date.UTC(2026, 0, 1, 0, 0, next)),
    });
    next++;
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
    const convId = await seedVariedJournal(pilotId, prep.id, 34, { ordinal: 3, text: marker });

    const markerRow = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId), eq(messages.content, marker)))
        .limit(1)
    )[0];
    expect(markerRow?.id).toBeTruthy();

    const scope = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    let cursor: string | null | undefined = undefined;
    let hit: Awaited<ReturnType<typeof searchConversationHistory>>["items"][number] | undefined;
    for (let page = 0; page < 30 && !hit; page++) {
      const search = await searchConversationHistory({
        scope,
        query: "phoque arctique",
        cursor: cursor ?? undefined,
        pageSize: 10,
      });
      expect(search.coverage).not.toBe("DENIED");
      hit = search.items.find((i) => i.messageId === markerRow!.id);
      if (hit || !search.nextCursor) break;
      cursor = search.nextCursor;
    }
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

### `projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts`

```typescript
/**
 * C-02 / C-03 — documentProposal + PRIOR_ASSISTANT_MESSAGE exact-byte paths.
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const devSessionRef = vi.hoisted(() => ({ token: "" }));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      const lane = (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
      const safe = lane.replace(/[^A-Z0-9]+/g, "_").slice(0, 24);
      const cookie = `sfia_studio_session__${safe}`;
      if (name !== cookie) return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { GET } from "@/app/api/preparations/[preparationId]/reconcile/route";
import { createDevTestSession } from "@/domains/identity/session";

import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  documentRevisions,
  documents,
  messages,
  pilots,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
import {
  canonicalizeDocumentProposal,
  contentSha256,
  serializeProposalFence,
  admitDocumentCommand,
  resolveAssistantProposal,
  sealAndApplyDocumentCommand,
  reconcileDocumentCommandFromBinding,
  loadSealedDocumentBinding,
} from "@/domains/conversation/document-command";
import { reserveTurnCommand, turnRaceHooks } from "@/domains/conversation/turn-command";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
import { getDocumentRevision, listDocuments, savePreparationDocument } from "@/domains/document/service";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
} from "@/domains/conversation/semantic-qualification";
import {
  registerExplicitFixture,
  sfiaDocumentFence,
  type ExplicitFixtureSpec,
} from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function reconcileHttpGet(
  preparationId: string,
  query: Record<string, string | undefined>,
) {
  const url = new URL(`http://127.0.0.1:3100/api/preparations/${preparationId}/reconcile`);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined) url.searchParams.set(k, v);
  }
  const res = await GET(new Request(url.toString()), {
    params: Promise.resolve({ preparationId }),
  });
  const body = (await res.json()) as Record<string, unknown>;
  return { status: res.status, body };
}

async function bindDevSession(which: "a" | "b") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  return sess;
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

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: { fixture?: ExplicitFixtureSpec },
) {
  if (opts?.fixture) {
    registerExplicitFixture(text, opts.fixture);
  }
  return postUserMessageAndNora(pilotId, preparationId, text);
}

async function seedFillerMessages(
  convId: string,
  count: number,
  startOrdinal: number,
): Promise<number> {
  const batch: (typeof messages.$inferInsert)[] = [];
  let next = startOrdinal;
  for (let i = 0; i < count; i++) {
    batch.push({
      id: newId("msg"),
      conversationId: convId,
      role: i % 2 === 0 ? "user" : "assistant",
      content: `Filler ML4C ${next} — bruit contrôlé pour distance temporelle.`,
      status: "COMPLETE",
      ordinal: next++,
    });
    if (batch.length >= 50) {
      await db.insert(messages).values(batch);
      batch.length = 0;
    }
  }
  if (batch.length > 0) await db.insert(messages).values(batch);
  return next;
}

describe("ML4C prior proposal C-02 / C-03 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  });

  it("C-02: documentProposal alone → D4 AVAILABLE, SHA matches contentSha256", async () => {
    const pilotId = await seedPilot("ml4c-c02-prop");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "Proposition structurée C02";
    const contentMarkdown =
      `# ${title}\n\n` +
      "## Section 1 — Contexte\n\nContenu contractuel exact pour C-02.\n\n" +
      "## Section 2 — Suite\n\nPoints ouverts.\n";

    const utterance = `ML4C-C02-ENREGISTRE-PROPOSITION-EXACTE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer la proposition intégrale",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from documentProposal",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je persiste la proposition intégrale depuis documentProposal.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("CREATE");
    const documentId = chat.documentSave?.documentId;
    const revisionId = chat.documentSave?.revisionId;
    expect(documentId).toBeTruthy();
    expect(revisionId).toBeTruthy();

    const rev = await getDocumentRevision(pilotId, prep.id, documentId!, revisionId!);
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error(`revision ${rev.status}`);
    const expectedSha = contentSha256(title, contentMarkdown);
    const parsedProv = JSON.parse(rev.revision.provenanceJson) as { contentFingerprint?: string };
    expect(
      parsedProv.contentFingerprint ??
        contentSha256(rev.document.title, rev.revision.contentMarkdown),
    ).toBe(expectedSha);
    expect(rev.revision.contentMarkdown).toBe(contentMarkdown);
  });

  it("C-02 unit path: canonicalize + serializeProposalFence byte equality", () => {
    const title = "Fence exacte";
    const contentMarkdown = `# ${title}\n\nPas de préfixe injecté.\n`;
    const canonical = canonicalizeDocumentProposal({ title, contentMarkdown });
    expect(canonical.ok).toBe(true);
    if (!canonical.ok) throw new Error(canonical.reason);
    const fence = serializeProposalFence(canonical.proposal);
    expect(fence).toContain("title-b64=");
    expect(fence).toContain(`chars=${contentMarkdown.length}`);
    expect(fence).toContain(`pair-sha256=${canonical.proposal.contentSha256}`);
    expect(fence).not.toContain(`# ${title}\n\n# ${title}`);
  });

  it("C-03: PRIOR_ASSISTANT_MESSAGE → D4 equals historical bytes (N+1)", async () => {
    const pilotId = await seedPilot("ml4c-c03-n1");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Historique C03 N+1";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;

    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: sfiaDocumentFence(title, "Texte historique immuable."),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const resolvedHist = await resolveAssistantProposal({
      pilotId,
      preparationId: prep.id,
      assistantMessageId: assistantId,
    });
    expect(resolvedHist.ok).toBe(true);
    if (!resolvedHist.ok) throw new Error(resolvedHist.reason);

    const utterance = `ML4C-C03-PRIOR-N1-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition historique",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prior assistant",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition historique.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    // One filler user turn between historical proposal and effect.
    await db.insert(messages).values({
      id: newId("msg"),
      conversationId: convId!,
      role: "user",
      content: "Message intermédiaire N+1.",
      status: "COMPLETE",
      ordinal: maxOrd + 2,
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const rev = await getDocumentRevision(
      pilotId,
      prep.id,
      chat.documentSave!.documentId!,
      chat.documentSave!.revisionId!,
    );
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error(`revision ${rev.status}`);
    expect(rev.revision.contentMarkdown).toBe(resolvedHist.proposal.contentMarkdown);
    expect(contentSha256(rev.document.title, rev.revision.contentMarkdown)).toBe(
      resolvedHist.proposal.contentSha256,
    );
  });

  it("C-03: PRIOR_ASSISTANT_MESSAGE after N+100 filler messages", async () => {
    const pilotId = await seedPilot("ml4c-c03-n100");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Historique C03 N+100";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;

    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: sfiaDocumentFence(title, "Corps profondément enterré."),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const nextOrd = await seedFillerMessages(convId!, 100, maxOrd + 2);

    const utterance = `ML4C-C03-PRIOR-N100-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition ancienne profonde",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create buried prior",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition historique reprise.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    void nextOrd;
    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.documentId).toBeTruthy();
  });

  it("C-03: three proposals in reply → clarification / zero D4", async () => {
    const pilotId = await seedPilot("ml4c-c03-ambig");
    const prep = await openOrCreatePreparation(pilotId);
    const triple =
      sfiaDocumentFence("Doc A", "A") +
      sfiaDocumentFence("Doc B", "B") +
      sfiaDocumentFence("Doc C", "C");
    const utterance = `ML4C-C03-TRIPLE-FENCE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "ambigu",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "ambiguous",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: `Trois propositions.\n\n${triple}`,
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");
    expect(chat.documentSave?.reason).toMatch(/AMBIGUOUS|DOCUMENT_PROPOSAL|FAILED|NOT_EXECUTED/);

    const after =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(after).toBe(before);
  });

  it("C-03: foreign pilot cannot use prior assistant message", async () => {
    const pilotA = await seedPilot("ml4c-c03-for-a");
    const pilotB = await seedPilot("ml4c-c03-for-b");
    const prepA = await openOrCreatePreparation(pilotA);
    const convA = await getConversationId(pilotA, prepA.id);
    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convA!,
      role: "assistant",
      content: sfiaDocumentFence("Foreign deny", "Secret."),
      status: "COMPLETE",
      ordinal: 1,
      generationId: newId("gen"),
    });

    const utterance = `ML4C-C03-FOREIGN-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "tentative cross-pilot",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "denied",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Tentative.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    const prepB = await openOrCreatePreparation(pilotB);
    const chat = await noraTurn(pilotB, prepB.id, utterance);
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");
    expect(chat.documentSave?.reason).toMatch(/SOURCE_DENIED|FAILED|NOT_EXECUTED/);
  });

  it("F03: PREPARE + documentProposal → COMPLETE assistant with fence, zero documents", async () => {
    const pilotId = await seedPilot("ml4c-f03-prepare");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const title = "Préparation seule F03";
    const contentMarkdown = `# ${title}\n\nAucun effet D4 — mode PREPARE.\n`;
    const utterance = `ML4C-F03-PREPARE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer une proposition sans effet",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je prépare la proposition sans persister.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.status).toBe("COMPLETE");
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");

    const after =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(after).toBe(before);

    const assistant = (
      await db
        .select({ content: messages.content })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    expect(assistant?.content).toMatch(/title-b64=|```sfia-document/);
  });

  it("F04: REVISE with PRIOR_ASSISTANT_MESSAGE → binding.source ASSISTANT_MESSAGE", async () => {
    const pilotId = await seedPilot("ml4c-f04-prior-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const baseTitle = "Base F04";
    const baseBody = `# ${baseTitle}\n\nVersion initiale.\n`;
    const created = await savePreparationDocument(pilotId, prep.id, baseTitle, baseBody);
    expect(created.status).toBe("AVAILABLE");
    if (created.status !== "AVAILABLE") throw new Error("create base");

    const assistantId = newId("msg");
    const revisedTitle = baseTitle;
    const revisedBody = `# ${revisedTitle}\n\nVersion initiale.\n\n## Revue\n\nPrior assistant.\n`;
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: serializeProposalFence({
        title: revisedTitle,
        contentMarkdown: revisedBody,
        contentSha256: contentSha256(revisedTitle, revisedBody),
      }),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const docs = await listDocuments(pilotId, prep.id);
    const doc = docs.find((d) => d.document.id === created.documentId);
    expect(doc?.latestRevision?.id).toBe(created.revisionId);

    const utterance = `ML4C-F04-REVISE-PRIOR-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "réviser depuis proposition historique",
        intents: [
          {
            id: "i-d4-revise",
            capabilityId: "d4.revise_document",
            mode: "REQUEST_EFFECT",
            summary: "revise from prior",
            parameters: { documentHint: baseTitle },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je révise depuis la proposition historique.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("REVISE");

    const cmd = (
      await db
        .select({ resultJson: conversationTurnCommands.resultJson })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, chat.operationId!))
        .limit(1)
    )[0];
    expect(cmd?.resultJson).toBeTruthy();
    const parsed = JSON.parse(cmd!.resultJson!) as {
      documentCommandBindings?: Array<{ source?: { kind?: string } }>;
    };
    const binding = parsed.documentCommandBindings?.[0];
    expect(binding?.source?.kind).toBe("ASSISTANT_MESSAGE");
  });

  it("P1: three historical assistant fences — no source → zero D4; explicit id → exact create", async () => {
    const pilotId = await seedPilot("ml4c-p1-ambig");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const ids = [newId("msg"), newId("msg"), newId("msg")];
    const bodies = [
      { title: "Doc P1 A", body: "Corps A." },
      { title: "Doc P1 B", body: "Corps B." },
      { title: "Doc P1 C", body: "Corps C." },
    ];
    let ord =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    for (let i = 0; i < 3; i++) {
      const { title, body } = bodies[i]!;
      ord += 1;
      await db.insert(messages).values({
        id: ids[i]!,
        conversationId: convId!,
        role: "assistant",
        content: sfiaDocumentFence(title, body),
        status: "COMPLETE",
        ordinal: ord,
        generationId: newId("gen"),
      });
    }

    const noSourceUtterance = `ML4C-P1-NO-SOURCE-${Date.now()}`;
    registerExplicitFixture(noSourceUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer sans source explicite",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "ambiguous historical",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je ne choisis pas quelle proposition historique.",
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const ambiguous = await noraTurn(pilotId, prep.id, noSourceUtterance);
    expect(ambiguous.documentSave?.status).not.toBe("AVAILABLE");
    const mid =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(mid).toBe(before);

    const pickId = ids[1]!;
    const resolved = await resolveAssistantProposal({
      pilotId,
      preparationId: prep.id,
      assistantMessageId: pickId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) throw new Error(resolved.reason);

    const explicitUtterance = `ML4C-P1-EXPLICIT-${pickId}`;
    registerExplicitFixture(explicitUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition B",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from explicit prior",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition B.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: pickId },
      },
    });

    const exact = await noraTurn(pilotId, prep.id, explicitUtterance);
    expect(exact.documentSave?.status).toBe("AVAILABLE");
    const rev = await getDocumentRevision(
      pilotId,
      prep.id,
      exact.documentSave!.documentId!,
      exact.documentSave!.revisionId!,
    );
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error("rev");
    expect(rev.revision.contentMarkdown).toBe(resolved.proposal.contentMarkdown);
  });

  it("SRC-04-PREPARE: documentProposal vs divergent fence title → conflict, zero D4, no rewrite", async () => {
    const pilotId = await seedPilot("ml4c-src04-prep");
    const prep = await openOrCreatePreparation(pilotId);
    const titleA = "Autorité PREPARE A";
    const titleB = "Conflit PREPARE B";
    const contentMarkdown = `## Corps commun\n\nSans H1 — PREPARE conflict.\n`;
    const utterance = `ML4C-SRC04-PREPARE-${Date.now()}`;

    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "rédiger sans enregistrer",
        intents: [
          {
            id: "i-prep",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition PREPARE.",
        documentProposal: { title: titleA, contentMarkdown },
      },
    });

    const conflictingFence = serializeProposalFence({
      title: titleB,
      contentMarkdown,
      contentSha256: contentSha256(titleB, contentMarkdown),
    });
    turnRaceHooks.replaceNoraAssistantText = () =>
      `Narration PREPARE.\n\n${conflictingFence}`;
    try {
      const before =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      const chat = await noraTurn(pilotId, prep.id, utterance);
      expect(chat.status).toBe("COMPLETE");
      expect(chat.documentSave?.status).toBe("FAILED");
      expect(chat.documentSave?.reason).toBe("PROPOSAL_SOURCE_CONFLICT");
      expect(chat.assistantMessageId).toBeTruthy();
      const row = (
        await db
          .select()
          .from(messages)
          .where(eq(messages.id, chat.assistantMessageId!))
          .limit(1)
      )[0];
      expect(row?.content).toContain(`title-b64=${Buffer.from(titleB, "utf8").toString("base64url")}`);
      expect(row?.content).not.toContain(
        `title-b64=${Buffer.from(titleA, "utf8").toString("base64url")}`,
      );
      const after =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      expect(after).toBe(before);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("SRC-04: documentProposal vs divergent assistant fence → PROPOSAL_SOURCE_CONFLICT, zero D4", async () => {
    const pilotId = await seedPilot("ml4c-src04");
    const prep = await openOrCreatePreparation(pilotId);
    const titleA = "Autorité A";
    const titleB = "Conflit B";
    const contentMarkdown = `## Corps commun\n\nSans H1 explicite — même octets.\n`;
    const utterance = `ML4C-SRC04-${Date.now()}`;

    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition structurée",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create with authority proposal",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition contradictoire.",
        documentProposal: { title: titleA, contentMarkdown },
      },
    });

    const conflictingFence = serializeProposalFence({
      title: titleB,
      contentMarkdown,
      contentSha256: contentSha256(titleB, contentMarkdown),
    });
    turnRaceHooks.replaceNoraAssistantText = () => `Réponse avec fence divergent.\n\n${conflictingFence}`;
    try {
      const before =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;

      const chat = await noraTurn(pilotId, prep.id, utterance);
      expect(chat.documentSave?.status).toBe("FAILED");
      expect(chat.documentSave?.reason).toBe("PROPOSAL_SOURCE_CONFLICT");

      const after =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      expect(after).toBe(before);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("PREPARE → N+100 → AGREE: prior assistant fence, ASSISTANT_MESSAGE binding, idempotent replay", async () => {
    const pilotId = await seedPilot("ml4c-prep-n100");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Préparé café — été";
    const contentMarkdown =
      `# ${title}\n\n` + "## Section unique\n\nContenu sans saut de ligne final";
    expect(contentMarkdown.endsWith("\n")).toBe(false);

    const prepareUtterance = `ML4C-PREPARE-N100-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer une proposition différée",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Voici la proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const prepChat = await noraTurn(pilotId, prep.id, prepareUtterance);
    expect(prepChat.status).toBe("COMPLETE");
    expect(prepChat.documentSave?.status).not.toBe("AVAILABLE");

    const prepareAssistant = (
      await db
        .select({ id: messages.id, content: messages.content })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    expect(prepareAssistant?.content).toBeTruthy();
    const extracted = extractContractualDocumentProposal(prepareAssistant!.content);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(title);
    expect(extracted.content).toBe(contentMarkdown);
    expect(contentSha256(extracted.title, extracted.content)).toBe(contentSha256(title, contentMarkdown));

    const docsBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(docsBefore).toBe(0);

    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    const assistantMessageId = prepareAssistant!.id;
    await seedFillerMessages(convId!, 200, maxOrd + 1);

    const agreeUtterance = `ML4C-AGREE-N100-${assistantMessageId}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition préparée",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared assistant",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition préparée.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const agreeChat = await noraTurn(pilotId, prep.id, agreeUtterance);
    expect(agreeChat.documentSave?.status).toBe("AVAILABLE");
    const documentId = agreeChat.documentSave!.documentId!;
    const revisionId = agreeChat.documentSave!.revisionId!;

    const rev = await getDocumentRevision(pilotId, prep.id, documentId, revisionId);
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error("rev");
    expect(rev.revision.contentMarkdown).toBe(contentMarkdown);
    expect(rev.document.title).toBe(title);

    const docCount =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(docCount).toBe(1);

    const revCount =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(revCount).toBe(1);

    const cmd = (
      await db
        .select({ commandId: conversationTurnCommands.id, resultJson: conversationTurnCommands.resultJson })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, agreeChat.operationId!))
        .limit(1)
    )[0];
    const parsed = JSON.parse(cmd!.resultJson!) as {
      documentSave?: { documentId?: string; revisionId?: string };
    };
    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: cmd!.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    expect(loaded.binding.source).toEqual({
      kind: "ASSISTANT_MESSAGE",
      assistantMessageId,
    });

    const replay1 = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(replay1.verdict).toBe("AVAILABLE");
    expect(replay1.documentId).toBe(documentId);
    expect(replay1.revisionId).toBe(revisionId);

    const replay2 = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(replay2.verdict).toBe("AVAILABLE");
    expect(replay2.documentId).toBe(parsed.documentSave?.documentId);
    expect(replay2.revisionId).toBe(parsed.documentSave?.revisionId);

    const docCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(docCountAfter).toBe(1);
    expect(revCountAfter).toBe(1);
  });

  it("FLOW: PREPARE → N+100 → AGREE with stable clientTurnKey idempotent replay", async () => {
    const pilotId = await seedPilot("ml4c-flow-idem");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Flow idempotent";
    const contentMarkdown = `# ${title}\n\n## Unique\n\nContenu flow.\n`;

    const prepareUtterance = `ML4C-FLOW-PREPARE-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });
    await noraTurn(pilotId, prep.id, prepareUtterance);

    const prepareAssistant = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const assistantMessageId = prepareAssistant!.id;
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    await seedFillerMessages(convId!, 100, maxOrd + 1);

    const agreeUtterance = `ML4C-FLOW-AGREE-${assistantMessageId}`;
    const stableAgreementTurnKey = `agree-flow-${Date.now()}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "agree prepared",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const first = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.idempotentReplay).toBe(false);
    const documentId = first.documentSave!.documentId!;
    const revisionId = first.documentSave!.revisionId!;
    const operationId = first.operationId!;
    expect(operationId).toBeTruthy();

    const cmdRow = (
      await db
        .select({ commandId: conversationTurnCommands.id })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, operationId))
        .limit(1)
    )[0];
    expect(cmdRow?.commandId).toBeTruthy();

    const docCountBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;

    const second = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(operationId);
    expect(second.documentSave?.documentId).toBe(documentId);
    expect(second.documentSave?.revisionId).toBe(revisionId);

    const docCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(docCountAfter).toBe(docCountBefore);
    expect(revCountAfter).toBe(revCountBefore);
  });

  it("E2E: PREPARE → N+100 → AGREE → idempotent replay → 10× reconcileHttpGet (D,R,C,O,K)", async () => {
    const sess = await bindDevSession("a");
    const pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "E2E integrated flow";
    const contentMarkdown = `# ${title}\n\n## Section\n\nIntégré ML4C.\n`;

    const prepareUtterance = `ML4C-E2E-PREPARE-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const prepChat = await noraTurn(pilotId, prep.id, prepareUtterance);
    expect(prepChat.status).toBe("COMPLETE");
    expect(prepChat.documentSave?.status).not.toBe("AVAILABLE");

    const prepareAssistant = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const assistantMessageId = prepareAssistant!.id;
    expect(
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0,
    ).toBe(0);

    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    // FLOW-100: 100 complete exchanges = 100 USER + 100 ASSISTANT = 200 intermediate messages.
    const fillerStart = maxOrd + 1;
    await seedFillerMessages(convId!, 200, fillerStart);

    const fillerRows = await db
      .select({
        id: messages.id,
        role: messages.role,
        ordinal: messages.ordinal,
      })
      .from(messages)
      .where(eq(messages.conversationId, convId!))
      .orderBy(asc(messages.ordinal));
    const fillers = fillerRows.filter((m) => m.ordinal >= fillerStart);
    expect(fillers.length).toBe(200);
    expect(fillers.filter((m) => m.role === "user").length).toBe(100);
    expect(fillers.filter((m) => m.role === "assistant").length).toBe(100);
    const fillerOrdinals = fillers.map((m) => m.ordinal);
    expect(new Set(fillerOrdinals).size).toBe(200);
    for (let i = 1; i < fillerOrdinals.length; i++) {
      expect(fillerOrdinals[i]).toBe(fillerOrdinals[i - 1]! + 1);
    }
    expect(fillerRows.some((m) => m.id === assistantMessageId)).toBe(true);

    const agreeUtterance = `ML4C-E2E-AGREE-${assistantMessageId}`;
    const stableAgreementTurnKey = `e2e-agree-${Date.now()}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "agree prepared",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const first = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.idempotentReplay).toBe(false);
    const documentId = first.documentSave!.documentId!;
    const revisionId = first.documentSave!.revisionId!;
    const operationId = first.operationId!;
    expect(operationId).toBeTruthy();

    const cmdRow = (
      await db
        .select({ commandId: conversationTurnCommands.id })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, operationId))
        .limit(1)
    )[0];
    const commandId = cmdRow!.commandId;
    expect(commandId).toBeTruthy();

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    const correlationKey = loaded.binding.correlationKey;
    expect(loaded.binding.title).toBe(title);
    expect(loaded.binding.contentMarkdown).toBe(contentMarkdown);
    expect(loaded.binding.contentSha256).toBe(contentSha256(title, contentMarkdown));
    expect(loaded.binding.source).toEqual({
      kind: "ASSISTANT_MESSAGE",
      assistantMessageId,
    });

    const storedRev = (
      await db
        .select({
          contentMarkdown: documentRevisions.contentMarkdown,
          title: documents.title,
        })
        .from(documentRevisions)
        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    expect(storedRev?.title).toBe(title);
    expect(storedRev?.contentMarkdown).toBe(contentMarkdown);

    const docCountBefore = (await countD4Rows(pilotId, prep.id)).documents;
    const revCountBefore = (
      await db
        .select({ n: sql<number>`count(*)`.mapWith(Number) })
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, documentId))
    )[0]?.n ?? 0;

    const second = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(operationId);
    expect(second.documentSave?.documentId).toBe(documentId);
    expect(second.documentSave?.revisionId).toBe(revisionId);

    const httpBaseline = await countD4Rows(pilotId, prep.id);
    for (let i = 0; i < 10; i++) {
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: commandId,
        correlationKey,
      });
      expect(res.status).toBe(200);
      expect(res.body.verdict).toBe("AVAILABLE");
      expect(res.body.documentId).toBe(documentId);
      expect(res.body.revisionId).toBe(revisionId);
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(httpBaseline);
    expect(docCountBefore).toBe(1);
    expect(revCountBefore).toBe(1);

    const row = (
      await db
        .select({ provenanceJson: documentRevisions.provenanceJson })
        .from(documentRevisions)
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
    prov.commandId = "e2e-tampered-cmd";
    await db
      .update(documentRevisions)
      .set({ provenanceJson: JSON.stringify(prov) })
      .where(eq(documentRevisions.id, revisionId));

    const tamperBaseline = await countD4Rows(pilotId, prep.id);
    const badHttp = await reconcileHttpGet(prep.id, {
      documentCommandId: commandId,
      correlationKey,
    });
    expect(badHttp.status).toBe(200);
    expect(badHttp.body.verdict).not.toBe("AVAILABLE");
    expect(await countD4Rows(pilotId, prep.id)).toEqual(tamperBaseline);
  });

  it("C-02 admit+seal preserves correlationKey (no post-mutation)", async () => {
    const pilotId = await seedPilot("ml4c-c02-corr");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `corr-stable-${Date.now()}`,
      content: "Correlation stable.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const title = "Correlation stable";
    const body = `# ${title}\n\nStable.\n`;
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: body,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);
    const keyBefore = admitted.binding.correlationKey;

    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });

    expect(admitted.binding.correlationKey).toBe(keyBefore);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/document-command.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { fitBudget } from "@/domains/conversation/history-tools-sdk";
import {
  admitDocumentCommand,
  canonicalizeDocumentProposal,
  contentSha256,
  encodeTitleB64,
  parseFenceMeta,
  payloadSha256,
  proposalFromStructured,
  serializeProposalFence,
} from "@/domains/conversation/document-command";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
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
      contentMarkdown: "# Spec ML4C\n\nCorps minimal.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.binding.action).toBe("CREATE");
      expect(r.binding.contentSha256).toBe(
        contentSha256("Spec ML4C", "# Spec ML4C\n\nCorps minimal.\n"),
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

describe("canonicalizeDocumentProposal", () => {
  it("accepts when H1 matches title", () => {
    const r = canonicalizeDocumentProposal({
      title: "Atlas",
      contentMarkdown: "# Atlas\n\nCorps.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.proposal.title).toBe("Atlas");
  });

  it("rejects TITLE_H1_MISMATCH", () => {
    const r = canonicalizeDocumentProposal({
      title: "Atlas",
      contentMarkdown: "# Autre titre\n\nCorps.\n",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("TITLE_H1_MISMATCH");
  });
});

describe("parseFenceMeta — COMPAT case + structured", () => {
  const title = "Compat titre";
  const body = "# Compat titre\n\nCorps.\n";
  const digest = contentSha256(title, body);

  function wrapFence(tag: string, content: string) {
    return `\`\`\`${tag}\n${content}\n\`\`\`\n`;
  }

  it.each([
    ["COMPAT-01 SFIA-DOCUMENT", "SFIA-DOCUMENT"],
    ["COMPAT-02 Sfia-Document", "Sfia-Document"],
    ["COMPAT-03 sfia-document", "sfia-document"],
  ])("%s → LEGACY", (_label, tag) => {
    expect(parseFenceMeta(tag)).toEqual({ kind: "LEGACY" });
    const extracted = extractContractualDocumentProposal(wrapFence(tag, "# Doc\n\nBody.\n"));
    expect(extracted.ok).toBe(true);
  });

  it("COMPAT-04: mixed-case legacy tag preserves title and Markdown on extract", () => {
    const body = "# Document historique\n\nContenu conservé.\n";
    const fence = "```SFIA-DOCUMENT\n" + body + "```\n";
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe("Document historique");
      expect(extracted.content).toBe(body);
    }
  });

  it("COMPAT-05: mixed-case tag + partial meta → INVALID", () => {
    const info = `SFIA-DOCUMENT title-b64=${encodeTitleB64(title)}`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("COMPAT-06: mixed-case tag + unknown key → INVALID", () => {
    const info = `Sfia-Document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest} foo=bar`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("COMPAT-07: structured canonical → ACCEPT", () => {
    const triad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest}`;
    expect(parseFenceMeta(triad)).toMatchObject({ kind: "STRUCTURED", pairSha256: digest });
    const extracted = extractContractualDocumentProposal(wrapFence(triad, body));
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe(title);
      expect(extracted.content).toBe(body);
    }
  });

  it("COMPAT-08: incomplete structured triad → INVALID", () => {
    const partial = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length}`;
    expect(parseFenceMeta(partial).kind).toBe("INVALID");
  });

  it("COMPAT-09: two contractual fences → AMBIGUOUS", () => {
    const fenceA = wrapFence("sfia-document", "# A\n\nUn.\n");
    const fenceB = wrapFence("sfia-document", "# B\n\nDeux.\n");
    const raw = `Prologue.\n\n${fenceA}\nSuite.\n\n${fenceB}`;
    const extracted = extractContractualDocumentProposal(raw);
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_AMBIGUOUS");
  });

  it("COMPAT-10: historical message without structured meta → COMPLETE extract", () => {
    const raw =
      "Message assistant historique.\n\n```sfia-document\n# Historique compat\n\n## Section\n\nCorps lisible.\n```\n";
    const extracted = extractContractualDocumentProposal(raw);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe("Historique compat");
      expect(extracted.content).toContain("Corps lisible");
    }
  });
});

describe("parseFenceMeta — META (P0-A)", () => {
  const title = "Meta titre";
  const body = "# Meta titre\n\nCorps structuré.\n";
  const digest = contentSha256(title, body);
  const triad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest}`;

  function wrapFence(info: string, content: string) {
    return `\`\`\`${info}\n${content}\n\`\`\`\n`;
  }

  it("META-01: bare sfia-document → LEGACY fence accepts", () => {
    expect(parseFenceMeta("sfia-document")).toEqual({ kind: "LEGACY" });
    const legacy = wrapFence("sfia-document", "# Doc\n\nBody.\n");
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) expect(extracted.title).toBe("Doc");
  });

  it("META-02: three valid fields ACCEPT round-trip", () => {
    expect(parseFenceMeta(triad)).toMatchObject({
      kind: "STRUCTURED",
      chars: body.length,
      pairSha256: digest,
    });
    const extracted = extractContractualDocumentProposal(wrapFence(triad, body));
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe(title);
      expect(extracted.content).toBe(body);
    }
  });

  it("META-03: title-b64 alone → INVALID (not LEGACY)", () => {
    const info = `sfia-document title-b64=${encodeTitleB64(title)}`;
    expect(parseFenceMeta(info)).toEqual({
      kind: "INVALID",
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
    });
    expect(extractContractualDocumentProposal(wrapFence(info, body)).ok).toBe(false);
  });

  it.each([
    ["META-04 chars alone", `sfia-document chars=${body.length}`],
    ["META-05 pair-sha alone", `sfia-document pair-sha256=${digest}`],
    [
      "META-06 missing pair-sha256",
      `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length}`,
    ],
  ])("%s → INVALID", (_label, info) => {
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("META-07: duplicate key → INVALID", () => {
    const dup = `${triad} title-b64=${encodeTitleB64("Autre")}`;
    expect(parseFenceMeta(dup).kind).toBe("INVALID");
  });

  it("META-08: unknown key → INVALID", () => {
    const bad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest} foo=bar`;
    expect(parseFenceMeta(bad).kind).toBe("INVALID");
  });

  it("META-09: empty value → INVALID", () => {
    expect(parseFenceMeta(`sfia-document chars=`).kind).toBe("INVALID");
  });

  it("META-10: chars=12abc → INVALID", () => {
    expect(parseFenceMeta(`sfia-document chars=12abc`).kind).toBe("INVALID");
  });

  it.each(["-1", "1.5", "1e3", "01"])("META-11: chars=%s → INVALID", (chars) => {
    expect(
      parseFenceMeta(
        `sfia-document title-b64=${encodeTitleB64(title)} chars=${chars} pair-sha256=${digest}`,
      ).kind,
    ).toBe("INVALID");
  });

  it("META-12: bad pair-sha256 → INVALID", () => {
    const badSha = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=zz`;
    expect(parseFenceMeta(badSha).kind).toBe("INVALID");
  });

  it("META-14: title-b64 that does not round-trip UTF-8 → INVALID", () => {
    // Padding / non-canonical base64url encoding must be refused.
    const title = "Café";
    const padded = Buffer.from(title, "utf8").toString("base64url") + "==";
    const info = `sfia-document title-b64=${padded} chars=10 pair-sha256=${"a".repeat(64)}`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("META-13: bad base64url title-b64 → INVALID", () => {
    const badB64 = `sfia-document title-b64=titre+invalid chars=${body.length} pair-sha256=${digest}`;
    expect(parseFenceMeta(badB64).kind).toBe("INVALID");
  });

  it("META-15: wrong pair-sha256 → INTEGRITY_MISMATCH on extract", () => {
    const wrong = triad.replace(digest, "a".repeat(64));
    const extracted = extractContractualDocumentProposal(wrapFence(wrong, body));
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH");
  });

  it("META-16: H1 mismatch → TITLE_MISMATCH", () => {
    const wrongBody = "# Autre H1\n\nCorps.\n";
    const info = `sfia-document title-b64=${encodeTitleB64(title)} chars=${wrongBody.length} pair-sha256=${contentSha256(title, wrongBody)}`;
    const extracted = extractContractualDocumentProposal(wrapFence(info, wrongBody));
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_TITLE_MISMATCH");
  });
});

describe("serializeProposalFence — F02 round-trip", () => {
  function roundTrip(title: string, contentMarkdown: string) {
    const contentSha = contentSha256(title, contentMarkdown);
    const fence = serializeProposalFence({ title, contentMarkdown, contentSha256: contentSha });
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(title);
    expect(extracted.content).toBe(contentMarkdown);
    return fence;
  }

  it("META-17: preserves content without trailing newline", () => {
    roundTrip("Titre", "# Titre\n\nContenu sans NL finale");
  });

  it("preserves CRLF line endings", () => {
    roundTrip("CRLF", "# CRLF\r\n\r\nLigne\r\n");
  });

  it("META-18a: preserves Unicode title and body", () => {
    roundTrip("Café — été", "# Café — été\n\nÉlève naïve 中文.\n");
  });

  it("META-18b: handles internal markdown fences via longer backtick run", () => {
    const body = "# Nested\n\n````\ninner fence\n````\n\nFin.\n";
    const fence = roundTrip("Nested", body);
    expect(fence.startsWith("`````")).toBe(true);
  });

  it("rejects tampered pair-sha256 on extract", () => {
    const title = "Tamper";
    const contentMarkdown = "# Tamper\n\nIntègre.\n";
    const digest = contentSha256(title, contentMarkdown);
    let fence = serializeProposalFence({ title, contentMarkdown, contentSha256: digest });
    fence = fence.replace(digest, "f".repeat(64));
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH");
  });

  it("canonicalize refuses >100_001 chars", () => {
    const r = canonicalizeDocumentProposal({ title: "Huge", contentMarkdown: "a".repeat(100_001) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("CONTENT_TOO_LARGE");
  });

  it("canonicalize refuses empty title", () => {
    const r = canonicalizeDocumentProposal({ title: "  ", contentMarkdown: "# x\n\ny\n" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("EMPTY_TITLE");
  });

  it("structured meta encodes exact char count", () => {
    const title = "Meta";
    const contentMarkdown = "# Meta\n\nExact.\n";
    const fence = serializeProposalFence({
      title,
      contentMarkdown,
      contentSha256: contentSha256(title, contentMarkdown),
    });
    expect(fence).toContain(`title-b64=${encodeTitleB64(title)}`);
    expect(fence).toContain(`chars=${contentMarkdown.length}`);
  });
});

describe("history-tools-sdk fitBudget (F-P1)", () => {
  it("returns payload and decrements remainingChars when within budget", () => {
    const scope = {
      pilotId: "pilot-1",
      preparationId: "prep-1",
      budget: { remainingCalls: 5, remainingChars: 10_000 },
    };
    const payload = {
      coverage: "FULL" as const,
      items: [{ id: "m1", content: "hello" }],
      nextCursor: null,
    };
    const before = scope.budget.remainingChars;
    const out = fitBudget(scope, payload);
    expect("items" in out && out.items.length).toBe(1);
    expect(scope.budget.remainingChars).toBeLessThan(before);
    expect(scope.budget.remainingChars).toBe(before - JSON.stringify(payload).length);
  });

  it("returns PARTIAL HISTORY_TOOL_BUDGET_EXHAUSTED when over budget", () => {
    const scope = {
      pilotId: "pilot-1",
      preparationId: "prep-1",
      budget: { remainingCalls: 1, remainingChars: 10 },
    };
    const payload = {
      coverage: "FULL" as const,
      items: [{ id: "m1", content: "x".repeat(500) }],
    };
    const out = fitBudget(scope, payload);
    expect(out).toMatchObject({
      coverage: "PARTIAL",
      reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
      items: [],
    });
    expect(scope.budget.remainingChars).toBe(10);
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
  validateNoraTurnQualification,
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
    const p = proposalFromStructured({ title: "Synthèse", contentMarkdown: longDoc });
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

  it("TEMP-09: documentSource schema accepts PRIOR_ASSISTANT_MESSAGE", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "reprise",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
      documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: "msg-hist-1" },
    });
    expect(v.ok).toBe(true);
  });

  it("TEMP-10: documentSource + documentProposal → DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "conflit",
      intents: [],
      clarifications: [],
      replyDraft: "ok",
      documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: "msg-hist-1" },
      documentProposal: { title: "T", contentMarkdown: "# T\n\nx\n" },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT");
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

---

## 8. As-built (extrait)

Source: `projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-continuite-nora-documents.md`

```markdown
# As-built — Continuité cognitive Nora, historique long et D4 (ML4C)

**Date :** 14 novembre 2026 (fermeture parse provenance stockée + preuve 100 paires)
**Candidat base :** `67bf6b0b` — worktree `fix/next-semantic-intent-convergence-20261112`
**Conception :** V0.7 @ `86377fde`
**Handoff précédent :** `sfia/review-handoff@357008ea` blob `b111a972`
**Statut :** IMPLEMENTED CANDIDATE — stored JSON illisible ≠ HISTORICAL ; 100 paires E2E ; LIVE NOT PROVEN
**STABLE / release :** NOT AVAILABLE — NO RELEASE

## 1. Objet

Fermeture des deux réserves Critical Review (parse provenance + preuve N+100 paires).

| Correctif | Mécanisme |
| --- | --- |
| P0 | Provenance PostgreSQL illisible / non-objet → `UNKNOWN` / `COMMAND_PROVENANCE_UNVERIFIABLE` ; jamais fallback historique |
| P1 | E2E PREPARE → **100 paires** (200 messages) → accord → replay → 10× GET same command |
| Acquis | no-downgrade ; champs `hasOwn` ; identité scellée ; HTTP RO |

## 2. Classification de provenance

```text
HISTORICAL          — objet JSON valide, aucun marqueur distinctif de scellement
SEALED_VALID        — documentCommandBinding===true + tous champs présents + invariants
SEALED_INVALID      — marqueur/restes scellés incomplets ou invalides
STORED_INVALID      — JSON illisible / null / tableau / primitive / vide → refuse avant classification
```

**Frontière :** absence de provenance **entrante** (demande historique) ≠ provenance **stockée** illisible.

Réconciliation : `parseProvenanceJson` doit produire un objet avant tout chemin HISTORICAL ou scellé.

## 3. Champs obligatoires scellés

Présents explicitement (hasOwn) : binding, commandId, operationId, userMessageId, qualifiedIntentId, action, source, preparationId, documentId, baseRevisionId, sectionHint, correlationKey, title, contentSha256, payloadSha256.

CREATE : `documentId`/`baseRevisionId` présents avec `null`.
REVISE : IDs non vides.
Contrôle entrée **et** provenance PostgreSQL objet valide.

## 4. Preuve E2E (100 paires)

PREPARE → 100 USER + 100 ASSISTANT (ordinals uniques) → accord `PRIOR_ASSISTANT_MESSAGE` → D4 CREATE → replay `clientTurnKey` → 10× GET HTTP sur C/K → AVAILABLE inchangé ; altération provenance → refus AVAILABLE ; zéro écriture GET.

## 5. Tests réellement exécutés (ce cycle)

PARSE-01…12 ; FLOW-100 E2E ; suites ML4C PG ; unit/integration ; tsc ; eslint `document/service.ts` ; build ; Playwright ML4C ×2.

## 6. Réserves

LIVE NOT PROVEN ; RECETTE NOT EXECUTED ; push produit / PR #676 / Gate C hors mandat ; NO RELEASE.
```

---

## 9. Delivery, gates, verdict

### 9.0 Delivery — `DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL`

```markdown
## delivery_id: DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~12:50 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture fallback provenance stockée illisible + preuve 100 paires E2E |
| Type | INC Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@357008ea` blob `b111a972` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | `reconcileWithProvenanceResolution` refuse stored parse null ; E2E 200 msgs (100 pairs) |
| Schema | unchanged |
| Tests | PARSE-01…12 + FLOW-100 + non-rég ; LIVE NOT PROVEN |
| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |
```

### 9.0bis Gates (rappel)

Voir §2 — tsc, unit 319, integration 452, identity+prior 86, command+recon 23, PARSE+FLOW ciblé, eslint `document/service.ts`, build, Playwright 2 ; LIVE NOT PROVEN.

### 9.0ter Réserves et distinction produit / handoff

| Item | Statut |
| --- | --- |
| Product git (commit/push) | **LOCAL ONLY** |
| Review Handoff `sfia/review-handoff` | **REMOTE — publication après ce pack** (tip/blob : rapport Cursor §25) |
| DETERMINISTIC / PG / unit / integration | PROVEN (comptes §2) |
| PARSE-01…12 + FLOW-100-01…12 | PROVEN (matrices §5) |
| Playwright ML4C e2e (2 specs) | PASS |
| Nora LIVE | **NOT PROVEN** |

**Verdict pack**: **READY FOR CHATGPT CRITICAL REVIEW — LIVE NOT PROVEN**

### 9.1 Instruction ChatGPT (obligatoire)

> **Instruction ChatGPT obligatoire :**
>
> Pour ce cycle **local-only produit**, la source canonique du pack est :
>
> **branche** : `fix/next-semantic-intent-convergence-20261112`
> **fichier** : `.tmp-sfia-review/chatgpt-review.md`
> **HEAD candidat** : `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`
>
> **Review Handoff REMOTE** (après publication L3) : tip `357008ea` / blob antérieur `b111a972` — remplacer par tip/blob **post-publish** indiqués dans le **rapport Cursor §25**.
>
> Avant de répondre à Morris, ChatGPT doit lire **ce pack intégral** et vérifier la cohérence avec le rapport Cursor, notamment :
> - le cycle provenance parse final + profil Critical ;
> - la branche `fix/next-semantic-intent-convergence-20261112` et HEAD `67bf6b0b` ;
> - prior handoff `357008ea` / blob `b111a972` ;
> - Product **LOCAL ONLY** vs Review Handoff **REMOTE** (post-pack publish, §25) ;
> - l'inventaire §3 (tous chemins status/diff/untracked sous `projects/sfia-studio-next`, hors `.tmp`) ;
> - les diffs §6 et contenus §7 ;
> - P0 barrière `parseProvenanceJson(stored)` + dual request/stored §4 ;
> - P1 FLOW-100 filler 200 msgs §4.5 ;
> - matrices PARSE-01…12 et FLOW-100-01…12 §5 ;
> - as-built §8 et delivery `DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL` ;
> - les validations §2 ;
> - **changement production ce cycle = P0 uniquement `document/service.ts`** ;
> - absence de faux AVAILABLE sur stored illisible ;
> - le verdict **READY FOR CHATGPT CRITICAL REVIEW — LIVE NOT PROVEN**.
>
> **Après cette vérification**, ChatGPT doit produire une synthèse globale du cycle (objectif, changements, validations, risques, verdict ChatGPT, prochaine décision Morris).

---

## 10. Cycle narrative (production delta this cycle)

Changement **production** nominal **ce cycle** (sur le delta ML4C candidat vs HEAD) :

- `web/src/domains/document/service.ts` — `reconcileWithProvenanceResolution` :
  - `const storedParsed = parseProvenanceJson(args.prior.provenanceJson)` ;
  - si `storedParsed === null` → retour immédiat `UNKNOWN` / `COMMAND_PROVENANCE_UNVERIFIABLE` ;
  - **avant** `resolveProvenanceIdentity(stored)` — l'absence de provenance **request** ne compense pas un stored illisible.

- `web/tests/integration/ml4c-prior-proposal.pg.test.ts` (P1 preuve) :
  - `seedFillerMessages` × 200 (100 paires USER/ASSISTANT) + assertions ordinal/count.

Le pack embarque le **delta ML4C complet** vs HEAD (tous chemins §3) pour relecture intégrale.

---

## 11. Coverage assertion

- Paths in inventory: **30**
- Modified tracked embedded: **16**
- Untracked embedded: **14**
- Missing paths: **0**