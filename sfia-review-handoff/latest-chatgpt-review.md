# SFIA Review Pack FULL — ML4C P3 assertion closure + DEV qualification

## A. Date et heure
2026-11-14 23:25 CET

## B. GO / profil / cycle
- Contrat: CLÔTURE DES ÉCARTS P3 ET QUALIFICATION DEV INTÉGRÉE
- SFIA v2.6 — Cycle projet 6 — Delivery / qualification corrective
- CRITICAL — INC/RUN — GO Morris 14 novembre 2026
- Runtime code: **NON MODIFIÉ** (tests + docs only)

## C. Git Truth initial / final
| | SHA |
|---|---|
| HEAD initial | `a2d37d1f600836f353f44061687f0795cdc10377` |
| TREE initial | `1a58f81d049311e28d1eddbec11702013f501d20` |
| Parent initial | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` |
| HEAD final | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| Parent réel | `a2d37d1f600836f353f44061687f0795cdc10377` |
| TREE final | `90ae38e3b0c4536bd3f4d062725ce460ce01e06c` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| Push produit | NON |
| PR #676 | OPEN / NOT MERGED (`67bf6b0b`) |

Git Truth Check: PASS. Dirty préexistant: `.tmp-sfia-review` uniquement (réinitialisé).

## D. Sources Git et refs
- Conception corrective: `c883db07` / blob `da397424` (NOT_EXECUTED / vérité applicative)
- Handoff précédent knowledge: `c3ec20fb` / blob `fd32dd8e`
- Runtime inspecté (read-only): service.ts, document-act.ts (`formatDocumentEffectAck`), document-command.ts

## E. Diagnostic de chacun des trois FAIL

Reproduction: `npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts` @ `a2d37d1f600836f353f44061687f0795cdc10377`

### E1 — C10
- Qualif: CREATE (fixture)
- Extract: hors fence autonome → `DOCUMENT_PROPOSAL_MISSING`
- `d4_attempted=false` (obs)
- `documentSave.status` observé: **NOT_EXECUTED**
- Assertion obsolète: attendait **FAILED**
- Tables: 0 document

### E2 — B-iso-neg CREATE
- Qualif: CREATE ; fence imbriqué illustratif non autonome
- `d4_attempted=false`
- Observé: **NOT_EXECUTED** / `DOCUMENT_PROPOSAL_MISSING`
- Assertion obsolète: **FAILED**
- Tables: 0 document

### E3 — B-iso-neg REVISE
- Qualif: REVISE ; fence imbriqué
- `d4_attempted=false` ; status **NOT_EXECUTED**
- `documentId` = cible resolve (référence pré-effet, pas mutation)
- `revisionId` absent ; v1 inchangée
- Assertion obsolète: **FAILED** (+ documentId undefined trop strict)

## F. Matrice FAILED / NOT_EXECUTED
| Cas | D4 appelé | Mutation | documentSave.status | ACK |
|---|---|---|---|---|
| A pré-effet (manquante proposition) | non | non | NOT_EXECUTED | Résultat applicatif (pré-effet) |
| B échec propriétaire | oui | non succès | FAILED | Statut observé: FAILED |
| C CONFLICT | oui | non | CONFLICT | Statut observé: CONFLICT |
| E AVAILABLE | oui | oui | AVAILABLE | succès |

Les trois FAIL = Cas A. Contrôle `formatDocumentEffectAck`: NOT_EXECUTED ≠ FAILED inventé.

## G. Comparaison oracle / comportement
Runtime conforme au contrat P3. Seules les assertions de tests étaient obsolètes.
**Aucun changement runtime.**

## H. Modifications de tests
Fichier unique: `ml4-chat-first-d4-provenance.pg.test.ts`
- status → NOT_EXECUTED
- conservation reason DOCUMENT_PROPOSAL_MISSING
- conservation zéro doc / zéro v2
- ACK attend NOT_EXECUTED / pré-effet ; refuse faux FAILED/AVAILABLE
- REVISE: documentId=cible, revisionId undefined

## I. Fichiers créés
Aucun fichier créé.

## J. Diff / sections modifiées
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index e0f940e8..ba712298 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -312,3 +312,39 @@ Profil: Critical PATCH corrective / NO RELEASE / STABLE NOT AVAILABLE

 - Subject-only sans provenance : non attribuable (contrat schéma inchangé).
 - BROWSER / LIVE / RECETTE : gates Morris distincts.
+
+## DELIV 2026-11-14 — Clôture P3 assertions NOT_EXECUTED + qualification DEV
+
+Date: 2026-11-14 ~23:30 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `a2d37d1f600836f353f44061687f0795cdc10377` (LOCAL ONLY)
+Profil: Critical PATCH test/qualification / NO RELEASE
+
+### Diagnostic des trois FAIL
+
+Fichier: `ml4-chat-first-d4-provenance.pg.test.ts`
+
+| Test | Observé | Oracle |
+| --- | --- | --- |
+| C10 missing fence | `documentSave.status=NOT_EXECUTED`, reason=`DOCUMENT_PROPOSAL_MISSING`, `d4_attempted=false` | CAS A pré-effet |
+| B-iso-neg CREATE nested | idem | CAS A |
+| B-iso-neg REVISE nested | idem + `documentId` cible, `revisionId` absent, v1 inchangée | CAS A |
+
+Les assertions attendaient `FAILED` (échec transactionnel). Le runtime P3 et
+`formatDocumentEffectAck` restituent correctement `NOT_EXECUTED` lorsque D4
+n'est pas appelé. Aucune modification runtime.
+
+### Corrections
+
+Assertions alignées sur NOT_EXECUTED + conservation des contrôles négatifs
+(zéro document / zéro v2 / motif / ACK pré-effet).
+
+### Preuves
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | 351 PASS |
+| `test:integration` | **468 PASS** (0 FAIL) |
+| BUILD | PASS |
+| BROWSER | PASS ciblé Playwright `:3101` E2E isolé (sas / continuity / S05) — fixture |
+| LIVE Nora | NOT RUN — harness E2E force fixture ; operator DEV `:3100` non démarré (RECETTE `:3200` présente) |
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ef21d023..47e6d013 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,23 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-14-ML4C-P3-ASSERTION-CLOSURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~23:30 CET (Europe/Paris) |
+| Macro-lot | ML4C — Clôture écarts P3 NOT_EXECUTED vs FAILED + qualification DEV |
+| Type | PATCH test/qualification Critical (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `a2d37d1f600836f353f44061687f0795cdc10377` (LOCAL ONLY) |
+| Prior handoff | `sfia/review-handoff@c3ec20fb` blob `fd32dd8e` |
+| Lane | DEV PG `:5433` ; Playwright E2E `:3101`/`sfia_next_e2e` ; RECETTE `:3200` non mutée |
+| Changes | assertions C10 / B-iso-neg CREATE+REVISE → NOT_EXECUTED pré-effet (runtime inchangé) |
+| Schema | unchanged |
+| Tests | UNIT 351 ; integration 468 GREEN ; BUILD PASS ; E2E targeted PASS ; LIVE NOT RUN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-14-ML4C-S05-KNOWLEDGE-OWNER-EVIDENCE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index e896c372..cfbc192b 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -270,7 +270,7 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
     }
   });

-  it("C10: CREATE qualified but missing autonomous sfia-document → FAILED extract, zero D4", async () => {
+  it("C10: CREATE qualified but missing autonomous sfia-document → NOT_EXECUTED pre-effect, zero D4", async () => {
     const pilotId = await seedPilot("ml4-c10-missing");
     const prep = await openOrCreatePreparation(pilotId);
     turnRaceHooks.replaceNoraAssistantText = () =>
@@ -287,15 +287,20 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
       );
       expectDocumentActFromFixture(ask, "CREATE");
       const chat = await noraTurn(pilotId, prep.id, ask);
-      expect(chat.documentSave?.status).toBe("FAILED");
+      // CAS A — qualification CREATE, extract missing → D4 never attempted (not a transactional FAILED).
+      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
       expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
       expect(chat.documentSave?.documentId).toBeUndefined();
+      expect(chat.documentSave?.revisionId).toBeUndefined();
       expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
       const msgs = await listMessages(pilotId, prep.id);
       const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-      expect(assistant?.content ?? "").toMatch(/FAILED|DOCUMENT_PROPOSAL_MISSING/);
-      expect(assistant?.content ?? "").not.toMatch(/NOT_EXECUTED/);
-      expect(assistant?.content ?? "").not.toMatch(/Statut observé: AVAILABLE/);
+      const body = assistant?.content ?? "";
+      expect(body).toMatch(/NOT_EXECUTED/);
+      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
+      expect(body).not.toMatch(/Statut observé: FAILED/);
+      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
+      expect(body).not.toMatch(/enregistré avec succès/i);
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
@@ -889,7 +894,7 @@ s
     expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
   });

-  it("B-iso-neg CREATE: nested illustrative sfia-document → FAILED MISSING, zero D4 write", async () => {
+  it("B-iso-neg CREATE: nested illustrative sfia-document → NOT_EXECUTED MISSING, zero D4 write", async () => {
     const pilotId = await seedPilot("ml4-iso-create");
     const prep = await openOrCreatePreparation(pilotId);
     turnRaceHooks.replaceNoraAssistantText = () =>
@@ -913,7 +918,8 @@ s
           },
         },
       );
-      expect(chat.documentSave?.status).toBe("FAILED");
+      // Nested fence is not autonomous contractual extract → pre-effect refuse, D4 not called.
+      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
       expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
       expect(chat.documentSave?.act).toBe("CREATE");
       expect(chat.documentSave?.documentId).toBeUndefined();
@@ -921,14 +927,18 @@ s
       expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
       const msgs = await listMessages(pilotId, prep.id);
       const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-      expect(assistant?.content).not.toMatch(/enregistré avec succès/i);
-      expect(assistant?.content ?? "").toMatch(/DOCUMENT_PROPOSAL_MISSING|non enregistré|FAILED|proposition/i);
+      const body = assistant?.content ?? "";
+      expect(body).not.toMatch(/enregistré avec succès/i);
+      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
+      expect(body).not.toMatch(/Statut observé: FAILED/);
+      expect(body).toMatch(/NOT_EXECUTED/);
+      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
   });

-  it("B-iso-neg REVISE: nested illustrative sfia-document → FAILED MISSING, doc unchanged at v1", async () => {
+  it("B-iso-neg REVISE: nested illustrative sfia-document → NOT_EXECUTED MISSING, doc unchanged at v1", async () => {
     const pilotId = await seedPilot("ml4-iso-revise");
     const prep = await openOrCreatePreparation(pilotId);
     const seeded = await savePreparationDocument(
@@ -970,14 +980,24 @@ s
           },
         },
       );
-      expect(revised.documentSave?.status).toBe("FAILED");
+      // Nested illustrative fence ≠ autonomous proposal → REVISE not executed; no phantom v2.
+      // documentId may identify the revise target; absence of revisionId/mutation is the oracle.
+      expect(revised.documentSave?.status).toBe("NOT_EXECUTED");
       expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
       expect(revised.documentSave?.act).toBe("REVISE");
+      expect(revised.documentSave?.documentId).toBe(documentId);
+      expect(revised.documentSave?.revisionId).toBeUndefined();
       const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
       expect(listed.status).toBe("AVAILABLE");
       expect(listed.revisions).toHaveLength(1);
       expect(listed.revisions[0]!.revisionNumber).toBe(1);
       expect(listed.revisions[0]!.contentMarkdown).toBe(v1Body.revision.contentMarkdown);
+      const msgs = await listMessages(pilotId, prep.id);
+      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
+      const body = assistant?.content ?? "";
+      expect(body).toMatch(/NOT_EXECUTED/);
+      expect(body).not.toMatch(/Statut observé: FAILED/);
+      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }

```

### Sections tests après correction
```typescript
it("C10: CREATE qualified but missing autonomous sfia-document → NOT_EXECUTED pre-effect, zero D4", async () => {
    const pilotId = await seedPilot("ml4-c10-missing");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Voici une proposition hors fence contractuelle.\n\n# Titre\n\nCorps non contractuel.\n";
    try {
      const ask = "Crée un document de synthèse sur C10 Missing Fence";
      registerTypedScenario(
        ask,
        d4CreateDocumentEnvelope({
          title: "C10 Missing Fence",
          summary: ask,
          includeFence: false,
        }),
      );
      expectDocumentActFromFixture(ask, "CREATE");
      const chat = await noraTurn(pilotId, prep.id, ask);
      // CAS A — qualification CREATE, extract missing → D4 never attempted (not a transactional FAILED).
      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(chat.documentSave?.documentId).toBeUndefined();
      expect(chat.documentSave?.revisionId).toBeUndefined();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      const body = assistant?.content ?? "";
      expect(body).toMatch(/NOT_EXECUTED/);
      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
      expect(body).not.toMatch(/Statut observé: FAILED/);
      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
      expect(body).not.toMatch(/enregistré avec succès/i);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

```

```typescript
it("B-iso-neg CREATE: nested illustrative sfia-document → NOT_EXECUTED MISSING, zero D4 write", async () => {
    const pilotId = await seedPilot("ml4-iso-create");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Je peux illustrer la syntaxe:\n\n" +
      "````markdown\n" +
      "```sfia-document\n" +
      "# Document fictif imbriqué\n\n" +
      "Ne doit jamais être persisté.\n" +
      "```\n" +
      "````\n";
    try {
      const chat = await noraTurn(
        pilotId,
        prep.id,
        "Rédige un document de synthèse sur Isolation Create",
        {
          fixture: {
            kind: "d4_create",
            title: "Isolation Create",
            includeFence: false,
          },
        },
      );
      // Nested fence is not autonomous contractual extract → pre-effect refuse, D4 not called.
      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(chat.documentSave?.act).toBe("CREATE");
      expect(chat.documentSave?.documentId).toBeUndefined();
      expect(chat.documentSave?.revisionId).toBeUndefined();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      const body = assistant?.content ?? "";
      expect(body).not.toMatch(/enregistré avec succès/i);
      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
      expect(body).not.toMatch(/Statut observé: FAILED/);
      expect(body).toMatch(/NOT_EXECUTED/);
      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

```

```typescript
it("B-iso-neg REVISE: nested illustrative sfia-document → NOT_EXECUTED MISSING, doc unchanged at v1", async () => {
    const pilotId = await seedPilot("ml4-iso-revise");
    const prep = await openOrCreatePreparation(pilotId);
    const seeded = await savePreparationDocument(
      pilotId,
      prep.id,
      "Doc isolation revise",
      "# Doc isolation revise\n\n## Section 1\n\na\n\n## Section 2\n\nb original\n\n## Section 3\n\nc\n",
      undefined,
      { correlationKey: newId("ck") },
    );
    expect(seeded.status).toBe("AVAILABLE");
    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
      throw new Error("seed AVAILABLE required");
    }
    const documentId = seeded.documentId;
    const v1Body = await getDocumentRevision(pilotId, prep.id, documentId, seeded.revisionId);
    expect(v1Body.status).toBe("AVAILABLE");
    if (v1Body.status !== "AVAILABLE") return;

    turnRaceHooks.replaceNoraAssistantText = () =>
      "Exemple de révision:\n\n" +
      "````markdown\n" +
      "```sfia-document\n" +
      "## Section 2 — Contenu révisé\n\n" +
      "corps fictif imbriqué\n" +
      "```\n" +
      "````\n";
    try {
      const revised = await noraTurn(
        pilotId,
        prep.id,
        `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
        {
          fixture: {
            kind: "d4_revise",
            documentHint: documentId,
            sectionHint: "2",
            includeFence: false,
          },
        },
      );
      // Nested illustrative fence ≠ autonomous proposal → REVISE not executed; no phantom v2.
      // documentId may identify the revise target; absence of revisionId/mutation is the oracle.
      expect(revised.documentSave?.status).toBe("NOT_EXECUTED");
      expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(revised.documentSave?.act).toBe("REVISE");
      expect(revised.documentSave?.documentId).toBe(documentId);
      expect(revised.documentSave?.revisionId).toBeUndefined();
      const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
      expect(listed.status).toBe("AVAILABLE");
      expect(listed.revisions).toHaveLength(1);
      expect(listed.revisions[0]!.revisionNumber).toBe(1);
      expect(listed.revisions[0]!.contentMarkdown).toBe(v1Body.revision.contentMarkdown);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      const body = assistant?.content ?? "";
      expect(body).toMatch(/NOT_EXECUTED/);
      expect(body).not.toMatch(/Statut observé: FAILED/);
      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

```

## K. UNIT
`npm run test:unit` → **351 PASS**

## L. PostgreSQL intégral
`npm run test:integration` → **468 PASS / 0 FAIL** (28 files)
Fichier ciblé: 19/19 PASS.

## M. BUILD
`npm run build` → **PASS**

## N. E2E DEV (Playwright isolé)
Harness canonique: `scripts/e2e-web-server.sh` → `:3101` + DB `sfia_next_e2e` + fixture Nora (pas LIVE).
Ne réutilise pas operator `:3100` ; n'attache pas RECETTE `:3200`.

| Spec | Résultat |
|---|---|
| g4-chat-first-sas | PASS |
| ml4c-document-continuity | PASS |
| ml4c-s05-independent-pending | PASS |
| ml4c-s05-real-api (extra) | 4 PASS / 3 FAIL — **hors correctif P3** ; non introduits par ce diff tests PG ; réserve BROWSER |

Operator DEV `:3100`: **non démarré** (RECETTE `:3200` déjà active ; E2E harness préféré pour isolation).

## O. LIVE Nora DEV
**LIVE NOT RUN — PREREQUISITES MISSING / ISOLATION CHOICE**
- Harness E2E force fixture et neutralise OPENAI.
- Operator DEV `:3100` non démarré ce cycle (présence RECETTE `:3200` ; risque cookies/session).
- Aucun appel modèle LIVE exécuté.
≠ LIVE FAILED.

## P. Fake / Real Qualification
- DETERMINISTIC: UNIT + PG + E2E fixture → PROVEN (ciblés)
- LIVE BEHAVIOR: NOT PROVEN
- USER RECETTE: NOT RUN
- Git REAL: OUT OF SCOPE

## Q. Sécurité / non-régression
- Runtime D2–D7 / S05 / schema inchangés
- Assertions de sécurité conservées (zéro mutation indésirable)
- RECETTE non mutée
- Aucun secret dans ce pack

## R. ENV-01
- DEV PG: `sfia_next_dev@:5433`
- E2E: `:3101` / `sfia_next_e2e`
- RECETTE: `:3200` / `:5434` (présente, RO)
- STABLE: NOT AVAILABLE

## S. Versioning
NO RELEASE — 0.0.0-dev — STABLE NOT AVAILABLE — pas ADOPTED

## T. Git Review Index
| Path | Role |
|---|---|
| ml4-chat-first-d4-provenance.pg.test.ts | diff + sections |
| as-built / delivery-history | diff |

## U. Réserves
1. LIVE NOT RUN
2. Operator DEV `:3100` NOT STARTED
3. ml4c-s05-real-api 3 FAIL résiduels (hors scope P3 assertion) — investigation Morris/GO distinct
4. Produit LOCAL ONLY

## V. Verdict
**P3 RECONCILED WITH RESERVES — BROWSER/LIVE NOT FULLY PROVEN**

Gates:
- A PASS (reproduction)
- B PASS (contrat P3 / assertions)
- C PASS (UNIT/PG/BUILD)
- D PARTIAL (E2E ciblés PASS ; real-api réserve ; :3100 not run)
- E NOT RUN
- F PASS (allowlist)
- G PASS (pas de push produit ; handoff L3 seul)

Distinctions:
- IMPLEMENTED (tests): oui
- COVERAGE VERIFIED (déterministe UNIT/PG): oui
- DETERMINISTIC BEHAVIOR PROVEN: oui (UNIT/PG/E2E ciblés)
- LIVE BEHAVIOR PROVEN: non
- USER RECETTE NOT RUN

Interdictions: pas ML4C ACCEPTED / GATE C CLOSED / STABLE / ADOPTED / S03-01 RECETTE PASS.

## W. Prochain gate Morris
1. Revue ChatGPT handoff L3
2. Décision sur démarrage operator DEV `:3100` + LIVE borné (GO distinct)
3. Triage ml4c-s05-real-api (GO distinct si besoin)
4. Candidat RECETTE figé seulement après revue + GO Morris distinct
