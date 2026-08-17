# ChatGPT Review Pack — FULL — UAT-UX-09 PRE-CONFIRMATION FAKE/REAL TRUTH

## Meta

| Champ | Valeur |
|-------|--------|
| **Timestamp Europe/Paris** | 2026-08-18 01:26:36 CEST (+0200) |
| **GO Morris consommé** | GO MORRIS — MICRO-CORRECTIF DELIVERY UAT-UX-09 — PRE-CONFIRMATION FAKE/REAL TRUTH — ZERO REAL |
| **Cycle / profil / typologie** | Cycle 8 Delivery · Critical · INC |
| **Milestone** | PRE-M6 — NON COMPLETE |
| **Runtime v3** | NON ADOPTED |
| **V3-F10** | OPEN / UNCHANGED |
| **Repo** | mcleland147/sfia-workspace |
| **Branche candidate** | delivery/sfia-studio-pre-m6-ui-option-a |
| **HEAD PRE/POST** | 0d33478566627a9bf507d5a06323962d349308ee (unchanged) |
| **origin/main** | a3ac418f3bc2ebb006cbc58f902f13629871014d |
| **origin/sfia/review-handoff (pre)** | 2c50a32dc151871a605875e2aca4fabac98d1565 |
| **Dirty entries** | 115 |
| **Staged** | empty (none) |
| **Project Git actions** | 0 commit / 0 push / 0 PR |

## Sources lues

Processus + convergence + doctrine v3 + handoff predecessor (origin/sfia/review-handoff @ 2c50a32dc151871a605875e2aca4fabac98d1565).

## PRE_CONFIRMATION_TRUTH_MAP

| Fact | Source | Prouvable pre-confirm | Présentation autorisée |
|------|--------|----------------------|------------------------|
| Contract REAL-shaped (action cursor.read_only.inspect, bounded profile) | successor ExecutionContract fields from M3 PREPARE | Oui (forme contrat) | Neutre — forme ≠ boundary effective |
| mode=M3_RESOLVED_BOUNDED_READ_ONLY | F3M3ResolvedPayload.mode | Oui | Neutre « Exécution contrôlée après confirmation » |
| realExecution=false | F3M3ResolvedPayload | Oui | Interdit claim REAL |
| disclosures incl. CURSOR REAL NOT EXECUTED AT PREPARE | F3M3ResolvedPayload.disclosures | Oui | Neutre (preuve négative, pas boundary effective) |
| CURSOR CLI REAL PROFILE constraint | successor.constraints (raw) | Oui | Détails techniques uniquement — pas contraintes user-facing |
| Effective boundary DET/REAL | processRef absent pre-confirm; env server-only | Non transporté au client | Fail-closed neutre |
| proc:det:* / REAL discriminants | Attempt/Evidence post-confirm only | Non pre-confirm | Session labels unchanged post-confirm |

**Règle appliquée:** CONTRACT REAL-SHAPED ≠ EFFECTIVE REAL BOUNDARY CLAIM.

## Cause UAT-UX-09

`confirmationPathChip()` mappait `bounded_read_only` / `M3_RESOLVED_BOUNDED_READ_ONLY` → « Exécution Cursor réelle après confirmation » via substring match.
`contractUserFacingFacts()` exposait `CURSOR CLI REAL PROFILE` tel quel dans « Contraintes et non-effets ».

Morris Targeted UAT (3084, DET armed, Cursor REAL OFF) affichait fausse promesse REAL avant confirmation.

## Stratégie fail-closed

1. `confirmationPathChip` accepte {mode, realExecution, disclosures} — REAL claim uniquement si `realExecution===true` (discriminant explicite) ; sinon neutre « Exécution contrôlée après confirmation » ; deterministic label seulement si disclosure contient marqueur deterministic autoritaire.
2. `constraintUserFacingLabel` / `isTechnicalProfileConstraint` — filtre `CURSOR CLI REAL PROFILE` de la surface primaire ; traduction user-friendly des contraintes utiles.
3. `ConversationSurface` — contraintes brutes préservées sous Détails techniques (`f3-contract-raw-constraints`).
4. Aucune persistence / schema / domain / lib/oa modifié.

## Fichiers modifiés (5)

| Fichier | SHA256 PRE | SHA256 POST |
|---------|------------|-------------|
| presentationLabels.ts | cf4988406578692234c20e1960c7b16c7c1923fea829bab5f397d3f016bd56cd | cb4e94b34adc654c93be68f9f9d5ed5c66905d9786d566c5608939a7e04ac49f |
| ConversationSurface.tsx | d17114e8c8eacdd801bdb2afca6d42c84fb83a8a6eb536a77dca3d08c9c7665f | 12e5d035017831c3fbcd8d2d11667d59347f600b54d8d31a8a08c714164ae4aa |
| presentationLabels.test.ts | 80f5a84fcf5ef163d2c81e4e9550765113b4770ddc6a597d783826496ce700f7 | b22db73695ba75056be5772972ff5a70b8b1da22757dd8704ceffda4b8ec7268 |
| uatUxSemanticReserves.ui.test.tsx | 4ce5a9a73b01d18c356cb96e8522b1aab75807ededd3e54e0870e150d627119b | c29335a4bde087a12cea18e4a008d51af3a45ca7a04d358233e5a3cb787ec691 |
| studio-option-a-uat-semantic-reserves.spec.ts | 5da881fdaeffa506aad35cec94c997d0d34f2fe04ed1b9b309cc72eea2d33027 | 5860a132773f9af9c359b1dd4b25659d9c466de60344ac503e5931c7bc4cf999 |

Snapshot PRE: `.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/`

## Tests

| Suite | Result |
|-------|--------|
| presentationLabels.test.ts (37 incl. T-UX09-1..8) | PASS |
| uatUxSemanticReserves.ui.test.tsx (6) | PASS |
| pre-m6-product-ui targeted (4 files, 54) | PASS |
| tsc --noEmit | PASS |
| next lint | PASS |
| next build | PASS |

Note: full project-assistant integration suite (qa-pre-m6-01) not re-run as primary gate — historically environment-sensitive on dirty candidate; targeted UX-09 + DET browser are authoritative for this microfix.

## Browser deterministic proof — ZERO REAL

| Field | Value |
|-------|-------|
| Spec | e2e/studio-option-a-uat-semantic-reserves.spec.ts |
| Port | 3085 (not 3084 Morris freeze) |
| DB | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-20260818-012532/runtime/qa-product.sqlite |
| Flags | OPS1_CONVERSATION_PROVIDER=fake, SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1, SFIA_STUDIO_E2E_QA_CONTROL=1, SFIA_STUDIO_CURSOR_REAL unset |
| Result | 1 passed (25.4s) |

**Capture A (pre-confirm):** chip neutral/contrôlée — zero « Cursor réelle »; constraints sans CURSOR CLI REAL PROFILE.
**Capture B/C (post-confirm + reload):** « Exécution déterministe de test » session; durable « Lecture durable » + « résultat d'exécution borné » — zero REAL.

## Screenshots

Campaign: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-20260818-012532/screenshots/`

- A-contract-before-confirm.png sha256 bf4fd749b74c65a0a94cd4cd0e6a802c37e470e3e27e8ee6465f0980c6e6e663
- A-det-session-succeeded.png sha256 237d8d37079e048b1e21c7d69312ec44ccd228058df47114714ce9ac6898b939
- B-det-reload-neutral-durable.png sha256 c1605e72b6b8723c8bd84aa6e558f3599dd1c29ecfb75a98c84fd91f3495c613
- B-running.png sha256 d291b1a55b9c74588d4053e618f849b96a4a632734bec1c4c8b65801d77e3caf
- C-succeeded-evidence-rb-recommendation.png sha256 efa3ca944a6ca396c5d36ff5a6539eeef36107a8a7419717c494b57df31a4c63
- D-reload-durable-read.png sha256 81e07c3246125332b9e6e312db69d1cc13e3b89af558a08b1d798e68fb69189d

## REAL counts

REAL_CALL_COUNT = 0
OPENAI_LIVE_CALL_COUNT = 0
CURSOR_REAL_PROCESS_COUNT = 0

## UAT 3084 freeze

127.0.0.1:3084 / PID 42787 / DB pre-m6-morris-targeted-uat-det-20260818-010713 — UNTOUCHED (no curl/playwright/confirm/kill).

## Backbone non-régression

HumanDecision ≠ Recommendation; Confirmation ≠ HumanDecision; ExecutionContract lifecycle unchanged; one-launch; Attempt lifecycle; UAT-UX-03/04/05/07/08 preserved; session DET via proc:det:*; session REAL via discriminants unitaires; durable rehydrate neutral (UX-08).

## Réserves

- Pre-confirm cannot label DET unless deterministic marker explicitly in disclosures (not added server-side this cycle) — intentional fail-closed neutral.
- Morris targeted UAT 3084 must be re-run after fix to close UX-09 manually.
- UAT-UX-01/02/06 P1 unchanged.
- PRE-M6 NON COMPLETE.

## Prochain gate

Reprise Morris Targeted UAT ZERO REAL on fresh session or continued 3084 observation post hot-reload (Morris decision). Separate GO REAL if needed later.

## Verdict

PASS — UAT-UX-09 PRE-CONFIRMATION FAKE/REAL TRUTH FAIL-CLOSED — REAL-SHAPED CONTRACT NO LONGER IMPLIES REAL BOUNDARY — PRE-CONFIRMATION USER SURFACE NEUTRAL UNLESS EFFECTIVE BOUNDARY IS PROVEN — SESSION DET/REAL/FIXTURE SEMANTICS PRESERVED — UAT-UX-08 REGRESSION PASS — ZERO REAL — V3-F10 OPEN — READY TO RESUME MORRIS TARGETED UAT — PRE-M6 NON COMPLETE — RUNTIME V3 NON ADOPTED

---

# CYCLE-ONLY DIFFS (micro-correctif PRE → POST)

=== projects/sfia-studio/app/features/project-assistant/presentationLabels.ts ===
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts	2026-08-18 01:23:22
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts	2026-08-18 01:24:06
@@ -241,6 +241,36 @@
     return "Votre confirmation est requise maintenant (autorité Morris).";
   }
   return `Autorité requise : ${raw}.`;
+}
+
+/** Adapter/profile markers — not user-facing execution boundary claims. */
+export function isTechnicalProfileConstraint(raw: string): boolean {
+  const normalized = raw.trim().toLowerCase();
+  return (
+    normalized === "cursor cli real profile" ||
+    (normalized.includes("real profile") && normalized.includes("cursor"))
+  );
+}
+
+export function constraintUserFacingLabel(raw: string): string | null {
+  if (isTechnicalProfileConstraint(raw)) return null;
+  const normalized = raw.trim().toLowerCase();
+  switch (normalized) {
+    case "bounded read-only":
+      return "Lecture seule bornée";
+    case "gate d required":
+      return "Confirmation requise";
+    case "no git write":
+      return "Pas d'écriture Git";
+    case "no github write":
+      return "Pas d'écriture GitHub";
+    case "no client command":
+      return "Pas de commande client";
+    case "no wildcard":
+      return "Pas de wildcard";
+    default:
+      return raw.trim();
+  }
 }

 /**
@@ -266,8 +296,8 @@
       .filter((item) => item.length > 0),
     reversibility: reversibilityUserLabel(input.reversibility),
     constraints: (input.constraints ?? [])
-      .map((item) => item.trim())
-      .filter((item) => item.length > 0),
+      .map((item) => constraintUserFacingLabel(item))
+      .filter((item): item is string => item != null && item.length > 0),
     stopConditions: (input.stopConditions ?? [])
       .map((item) => item.trim())
       .filter((item) => item.length > 0),
@@ -365,14 +395,64 @@
   }
 }

-export function confirmationPathChip(mode: string | null | undefined): string {
-  const normalized = (mode ?? "").toLowerCase();
-  if (normalized.includes("bounded_read_only") || normalized.includes("cursor_cli_real")) {
-    return "Exécution Cursor réelle après confirmation";
-  }
-  if (normalized.includes("fixture")) {
+export type ConfirmationPathFacts = {
+  mode?: string | null;
+  realExecution?: boolean | null;
+  disclosures?: readonly string[] | null;
+};
+
+function disclosureIndicatesDeterministicTest(
+  disclosures: readonly string[] | null | undefined,
+): boolean {
+  if (!disclosures?.length) return false;
+  return disclosures.some((item) => {
+    const normalized = item.toLowerCase();
+    return (
+      normalized.includes("deterministic") ||
+      normalized.includes("proc:det") ||
+      normalized.includes("test boundary armed")
+    );
+  });
+}
+
+/**
+ * Pre-confirmation chip: describes what Confirmation unlocks.
+ * REAL-shaped contract fields alone do NOT prove an effective REAL boundary.
+ */
+export function confirmationPathChip(
+  input: ConfirmationPathFacts | string | null | undefined,
+): string {
+  const facts: ConfirmationPathFacts =
+    typeof input === "string" || input == null
+      ? { mode: typeof input === "string" ? input : null }
+      : input;
+  const normalized = (facts.mode ?? "").toLowerCase();
+
+  if (normalized.includes("fixture") || normalized.includes("m3_resolved_fixture")) {
     return "Fixture de test — pas une exécution Cursor réelle";
   }
+
+  if (disclosureIndicatesDeterministicTest(facts.disclosures)) {
+    return "Exécution déterministe de test après confirmation";
+  }
+
+  if (
+    facts.realExecution === true &&
+    (normalized.includes("cursor_cli_real") ||
+      normalized.includes("bounded_read_only") ||
+      normalized.includes("m3_resolved_bounded"))
+  ) {
+    return "Exécution Cursor réelle après confirmation";
+  }
+
+  if (
+    normalized.includes("bounded_read_only") ||
+    normalized.includes("m3_resolved_bounded") ||
+    normalized.includes("cursor_cli_real")
+  ) {
+    return "Exécution contrôlée après confirmation";
+  }
+
   return "Confirmation distincte requise";
 }

=== projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx ===
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-08-18 01:23:22
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-08-18 01:24:07
@@ -587,7 +587,11 @@
               className={styles.chip}
               data-testid="f3-contract-semantic-chip"
             >
-              {confirmationPathChip(f3M3Resolved.mode)}
+              {confirmationPathChip({
+                mode: f3M3Resolved.mode,
+                realExecution: f3M3Resolved.realExecution,
+                disclosures: f3M3Resolved.disclosures,
+              })}
             </span>
           </div>
           <dl className={styles.facts} data-testid="f3-contract-user-summary">
@@ -683,6 +687,17 @@
                   </dd>
                 </div>
               ) : null}
+              {(f3M3Resolved.successor.constraints ?? []).length > 0 ? (
+                <div className={styles.factWide}>
+                  <dt>Contraintes brutes</dt>
+                  <dd
+                    className={styles.code}
+                    data-testid="f3-contract-raw-constraints"
+                  >
+                    {(f3M3Resolved.successor.constraints ?? []).join(" · ")}
+                  </dd>
+                </div>
+              ) : null}
             </dl>
           </details>
           <p className={styles.stamp} data-testid="f3-prepare-no-attempt">
=== projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts ===
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts	2026-08-18 01:23:22
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts	2026-08-18 01:24:27
@@ -1,6 +1,7 @@
 import { describe, expect, it } from "vitest";
 import {
   attemptStatusUserLabel,
+  confirmationPathChip,
   contractUserFacingFacts,
   deriveRecommendationFreshness,
   executionSemanticUserLabel,
@@ -232,7 +233,7 @@
     expect(facts.target).toBe("workspace.isolated.read");
     expect(facts.capabilities).toEqual(["cap:cursor.read_only"]);
     expect(facts.reversibility).toBe("Réversible");
-    expect(facts.constraints).toContain("NO GIT WRITE");
+    expect(facts.constraints).toContain("Pas d'écriture Git");
     expect(facts.authority).toMatch(/Morris/);
     expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/readme uniquement/);
     expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/aucun shell/);
@@ -475,5 +476,118 @@
         kind: "rehydrate",
       }),
     ).toMatch(/REAL execution remains disabled/);
+  });
+});
+
+describe("UAT-UX-09 pre-confirmation Fake/Real truth", () => {
+  it("T-UX09-1 — REAL-shaped contract without effective REAL proof stays neutral", () => {
+    const chip = confirmationPathChip({
+      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
+      realExecution: false,
+      disclosures: ["CURSOR REAL NOT EXECUTED AT PREPARE"],
+    });
+    expect(chip).toBe("Exécution contrôlée après confirmation");
+    expect(chip).not.toMatch(/Cursor réelle/);
+    expect(chip).not.toMatch(/REAL BOUNDARY PROVEN/);
+  });
+
+  it("T-UX09-2 — deterministic disclosure may label deterministic pre-confirmation", () => {
+    const neutral = confirmationPathChip({
+      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
+      realExecution: false,
+    });
+    expect(neutral).toBe("Exécution contrôlée après confirmation");
+    expect(neutral).not.toMatch(/Cursor réelle/);
+
+    const deterministic = confirmationPathChip({
+      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
+      realExecution: false,
+      disclosures: ["DETERMINISTIC TEST BOUNDARY ARMED"],
+    });
+    expect(deterministic).toBe("Exécution déterministe de test après confirmation");
+    expect(deterministic).not.toMatch(/Cursor réelle/);
+  });
+
+  it("T-UX09-3 — raw technical profile preserved in filtering, not user-facing", () => {
+    const facts = contractUserFacingFacts({
+      constraints: [
+        "BOUNDED READ-ONLY",
+        "CURSOR CLI REAL PROFILE",
+        "NO GIT WRITE",
+      ],
+    });
+    expect(facts.constraints).toContain("Lecture seule bornée");
+    expect(facts.constraints).toContain("Pas d'écriture Git");
+    expect(JSON.stringify(facts.constraints)).not.toMatch(/CURSOR CLI REAL PROFILE/);
+  });
+
+  it("T-UX09-4 — user constraints remain useful after profile filtering", () => {
+    const facts = contractUserFacingFacts({
+      constraints: [
+        "BOUNDED READ-ONLY",
+        "CURSOR CLI REAL PROFILE",
+        "GATE D REQUIRED",
+        "NO GIT WRITE",
+        "NO GITHUB WRITE",
+        "NO CLIENT COMMAND",
+      ],
+      stopConditions: ["GATE_D_REQUIRED"],
+      requiredAuthority: "MORRIS",
+    });
+    expect(facts.constraints).toEqual([
+      "Lecture seule bornée",
+      "Confirmation requise",
+      "Pas d'écriture Git",
+      "Pas d'écriture GitHub",
+      "Pas de commande client",
+    ]);
+    expect(facts.stopConditions).toEqual(["GATE_D_REQUIRED"]);
+    expect(facts.authority).toMatch(/Morris/);
   });
+
+  it("T-UX09-5 — session DET regression unchanged", () => {
+    expect(
+      executionSemanticUserLabel({
+        mode: "CURSOR_CLI_REAL",
+        executionMode: "cursor_cli_real",
+        adapterId: "adp:m4-cursor-cli-real",
+        processRef: "proc:det:xat:demo",
+        realProcessInvoked: true,
+      }),
+    ).toBe("Exécution déterministe de test");
+  });
+
+  it("T-UX09-6 — session REAL unit semantics regression unchanged", () => {
+    expect(
+      executionSemanticUserLabel({
+        mode: "CURSOR_CLI_REAL",
+        executionMode: "cursor_cli_real",
+        adapterId: "adp:m4-cursor-cli-real",
+        realProcessInvoked: true,
+        realExecution: true,
+        evidenceId: "ev:m4-bounded-ro:xat:demo",
+      }),
+    ).toBe("Exécution Cursor réelle");
+  });
+
+  it("T-UX09-7 — durable rehydrate regression unchanged", () => {
+    const notice = resolvePersistenceNotice({
+      productDurablePath: true,
+      mode: "CURSOR_CLI_REAL",
+      kind: "rehydrate",
+      evidenceId: "ev:m4-bounded-ro:xat:demo",
+    });
+    expect(notice).toMatch(/Lecture durable/);
+    expect(notice).toMatch(/résultat d'exécution borné/);
+    expect(notice).not.toMatch(/Exécution Cursor réelle/);
+  });
+
+  it("T-UX09-8 — authority fields unchanged by presentation projection", () => {
+    const facts = contractUserFacingFacts({
+      requiredAuthority: "MORRIS",
+      constraints: ["NO GIT WRITE"],
+    });
+    expect(facts.authority).toMatch(/Morris/);
+    expect(facts.constraints).toContain("Pas d'écriture Git");
+  });
 });
=== projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx ===
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx	2026-08-18 01:23:22
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx	2026-08-18 01:24:28
@@ -100,7 +100,13 @@
     requiredAuthority: "MORRIS",
     requiredCapabilities: ["cap:cursor.read_only"],
     reversibility: "reversible",
-    constraints: ["BOUNDED READ-ONLY", "NO GIT WRITE", "NO GITHUB WRITE"],
+    constraints: [
+      "BOUNDED READ-ONLY",
+      "CURSOR CLI REAL PROFILE",
+      "GATE D REQUIRED",
+      "NO GIT WRITE",
+      "NO GITHUB WRITE",
+    ],
     stopConditions: ["GATE_D_REQUIRED"],
     supersedesExecutionContractId: "xct:m3:dec:f2:demo",
     supersessionReason: "bounded",
@@ -248,14 +254,23 @@
       "cap:cursor.read_only",
     );
     expect(screen.getByTestId("f3-contract-constraints")).toHaveTextContent(
-      "NO GIT WRITE",
+      "Pas d'écriture Git",
     );
+    expect(screen.getByTestId("f3-contract-constraints")).not.toHaveTextContent(
+      "CURSOR CLI REAL PROFILE",
+    );
     expect(screen.getByTestId("f3-contract-authority-user")).toHaveTextContent(
       /Morris/,
     );
     expect(screen.getByTestId("f3-contract-semantic-chip")).toHaveTextContent(
+      /contrôlée/,
+    );
+    expect(screen.getByTestId("f3-contract-semantic-chip")).not.toHaveTextContent(
       /Cursor réelle/,
     );
+    expect(screen.getByTestId("f3-contract-raw-constraints")).toHaveTextContent(
+      "CURSOR CLI REAL PROFILE",
+    );
     expect(screen.queryByText("Exécution réelle bloquée")).toBeNull();
     expect(screen.getByTestId("f3-contract-id")).toHaveTextContent(
       "xct:m3-res:dec:f2:demo",
=== projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts ===
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux09-microfix-pre/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts	2026-08-18 01:23:22
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts	2026-08-18 01:24:30
@@ -94,6 +94,15 @@
     await expect(page.getByTestId("f3-contract-semantic-chip")).not.toHaveText(
       /Exécution réelle bloquée/,
     );
+    await expect(page.getByTestId("f3-contract-semantic-chip")).not.toHaveText(
+      /Cursor réelle/,
+    );
+    await expect(page.getByTestId("f3-contract-semantic-chip")).toHaveText(
+      /contrôlée|déterministe|bornée/,
+    );
+    await expect(page.getByTestId("f3-contract-constraints")).not.toContainText(
+      "CURSOR CLI REAL PROFILE",
+    );
     await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
     await capture(page, "A-contract-before-confirm");
