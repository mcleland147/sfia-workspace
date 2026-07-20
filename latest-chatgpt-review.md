# SFIA Studio Increment D — Review Pack (full)

- date/heure/fuseau: 2026-07-20T08:21:26+0200 (Europe/Paris / CEST)
- cycle: 8 — Delivery / implémentation
- profil: Critical
- typologie: DELIVERY / LIVE CURSOR / SANDBOX / SECURITY / DEVOPS / QA
- GO Morris consommés: G-INCREMENT-D-FRAMING, G-INCREMENT-D-EXECUTION, G-VS-LIVE-CURSOR (observation unique)
- repo: sfia-workspace
- branche: delivery/sfia-studio-poc-increment-d
- base / HEAD: 9926238a0be3c2e7ce745ee95321281ef49f0465
- origin/main: 9926238a0be3c2e7ce745ee95321281ef49f0465
- merge-base(origin/main)=HEAD

## Verdict candidat

**SFIA STUDIO INCREMENT D CURSOR SANDBOX PROVED — MORRIS VALIDATION REQUIRED**

## Truth Check initial

- main local aligné origin/main @ 9926238
- branche créée localement depuis exactement 9926238
- aucun staging/commit/push delivery
- working tree: uniquement modifications Increment D + `.tmp-sfia-review/` non versionné
- Increment C présent sur main

## Sources Git consultées

Méthode / projet (lecture seule): templates cycle, routing, operating model, docs 32–40 Studio.
Code: harness/src, harness/tests, app/lib/harness, app/features/cycle-actif, spike Cursor réel.
Handoff précédent: origin/sfia/review-handoff.

## Décisions et hors périmètre

Autorisé: implémentation locale, tests, 1 observation Cursor, review pack, handoff.
Interdit: stage/commit/push delivery, PR, merge, Increment E, analyse GPT, deps, docs 01–40, Figma, remote Git.

## Architecture avant / après

Option B préservée:
- Studio: collecte action, affiche états dérivés, ne décide pas, ne revalide pas comme autorité.
- Harness: ExecutionContract, gate, revalidation, spawn Cursor, STOP/timeout, rapport, journal.
- Cursor: écrit uniquement `output.md` sandbox, aucune écriture remote.

Avant: Increment C qualification live GPT; Cursor = spike / fixture Orchestrator B.
Après: runner dédié Increment D (`runIncrementDSandbox`) + faux port + port live via spike `spawnWithTimeout` / `filterSpikeEnv` / `buildCursorAgentArgv`.

## Choix sandbox

Chemin canonique retenu (aligné spike allowlist étendue):
`projects/sfia-studio/.sandbox/increment-d/output.md`

Doctrine: ignoré du versionnement sauf `.gitkeep`. Isolé du code applicatif. Nettoyable sans toucher l’app.

## Observation Cursor réelle (unique)

- nombre de spawns réels: **1**
- executionId: `exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c`
- requestId: `req-inc-d-live-1784528437254`
- contractId: `ctr-inc-d-live-001`
- contractHash: `75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78`
- branche: `delivery/sfia-studio-poc-increment-d`
- HEAD: `9926238a0be3c2e7ce745ee95321281ef49f0465`
- startedAt: `2026-07-20T06:20:37.485Z`
- completedAt: `2026-07-20T06:20:49.779Z`
- durationMs: 12294
- exitCode: 0
- status: `SUCCEEDED`
- realCursorProcessInvoked: True
- remoteGitWrites: 0
- networkUsed: False
- filesCreated: ['output.md']
- outOfAllowlistChanges: []
- instruction meta: {"instructionSha256Prefix": "0b80023d35996c71", "instructionLength": 1240, "networkEffect": "none", "gitEffect": "none-remote"}
- GO: decisionId `go-inc-d-live-morris-001` ancré hash/branche/HEAD/allowlist

### Contenu Markdown produit

```markdown
# SFIA Studio Increment D Sandbox Proof

- executionId: exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c
- requestId: req-inc-d-live-1784528437254
- contractId: ctr-inc-d-live-001
- branche revalidée: delivery/sfia-studio-poc-increment-d
- HEAD revalidé: 9926238a0be3c2e7ce745ee95321281ef49f0465
- contractHash: 75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78
- date/heure/fuseau: 2026-07-20T06:20:37.485+00:00 (UTC) / local CEST

Cursor sandbox execution completed

Remote Git writes: 0

Candidate proof only — Morris decision required

```

### Preuve remote=0 / network=none

```json
{
  "headUnchanged": true,
  "originMainUnchanged": true,
  "remoteGitWrites": 0,
  "networkEffect": "none",
  "noFetchDuringObservation": true,
  "statusAfter": " M .gitignore\n M projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx\n M projects/sfia-studio/harness/src/cli.ts\n M projects/sfia-studio/harness/src/index.ts\n M projects/sfia-studio/harness/src/ports/cursorRealSpike.ts\n?? .tmp-sfia-review/\n?? projects/.tmp-sfia-review/\n?? projects/sfia-studio/.sandbox/\n?? projects/sfia-studio/app/__tests__/increment-d.test.tsx\n?? projects/sfia-studio/app/e2e/increment-d.spec.ts\n?? projects/sfia-studio/app/lib/harness/incrementDAction.ts\n?? projects/sfia-studio/harness/.tmp-inc-d-prepare-live.ts\n?? projects/sfia-studio/harness/src/increment-d/\n?? projects/sfia-studio/harness/src/types/cursorExecutionReport.ts\n?? projects/sfia-studio/harness/tests/increment-d.test.ts\n",
  "note": "Truth-check fetch was before observation; no fetch during Cursor window"
}
```

### CursorExecutionReport

```json
{
  "schemaVersion": "cursor-execution-report-1.0.0",
  "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
  "requestId": "req-inc-d-live-1784528437254",
  "correlationId": "corr-inc-d-live-1784528437254",
  "contractId": "ctr-inc-d-live-001",
  "contractHash": "75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78",
  "expectedBranch": "delivery/sfia-studio-poc-increment-d",
  "actualBranch": "delivery/sfia-studio-poc-increment-d",
  "expectedHead": "9926238a0be3c2e7ce745ee95321281ef49f0465",
  "actualHead": "9926238a0be3c2e7ce745ee95321281ef49f0465",
  "allowlistedWritePaths": [
    "projects/sfia-studio/.sandbox/increment-d/output.md"
  ],
  "status": "SUCCEEDED",
  "startedAt": "2026-07-20T06:20:37.485Z",
  "completedAt": "2026-07-20T06:20:49.779Z",
  "durationMs": 12294,
  "exitCode": 0,
  "signal": null,
  "timeout": false,
  "stopRequested": false,
  "cursorAvailable": true,
  "filesCreated": [
    "output.md"
  ],
  "filesModified": [],
  "filesDeleted": [],
  "outOfAllowlistChanges": [],
  "stdoutPreview": "Wrote `output.md` in the Increment D sandbox with the specified proof content.\n",
  "stderrPreview": "",
  "reservations": [
    "Sandbox Markdown proof succeeded",
    "Remote Git writes: 0",
    "Candidate proof only — Morris decision required",
    "Increment E / GPT analysis not authorized"
  ],
  "mode": "live",
  "realCursorProcessInvoked": true,
  "remoteGitWrites": 0,
  "networkUsed": false,
  "authority": {
    "candidateOnly": true,
    "morrisDecisionRequired": true,
    "executionAuthorized": false,
    "analysisAuthorized": false
  },
  "morrisDecisionRequired": true,
  "analysisAuthorized": false
}
```

### ExecutionContract + GO

```json
{
  "contract": {
    "contractId": "ctr-inc-d-live-001",
    "requestId": "req-inc-d-live-1784528437254",
    "scenario": "S1",
    "repositoryRoot": "/Users/morris/Projects/sfia-workspace",
    "allowedPaths": [
      "projects/sfia-studio/.sandbox/increment-d",
      "projects/sfia-studio/.sandbox/increment-d/output.md"
    ],
    "allowedCommands": [
      "cursor-sandbox-write-output-md",
      "git-status-short",
      "git-rev-parse"
    ],
    "gitEffect": "none-remote",
    "cursorMode": "fixture",
    "timeoutMs": 30000,
    "proofDir": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-inc-d-live-AraNUS/proof",
    "schemaVersion": "poc-s1-1.0.0",
    "maxFiles": 1,
    "maxFileBytes": 64000,
    "allowedExtensions": [
      ".md"
    ],
    "decidedByAllowlist": [
      "Morris"
    ],
    "expectedBranch": "delivery/sfia-studio-poc-increment-d",
    "expectedHead": "9926238a0be3c2e7ce745ee95321281ef49f0465",
    "allowlistedWritePaths": [
      "projects/sfia-studio/.sandbox/increment-d/output.md"
    ]
  },
  "contractHash": "75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78",
  "gate": {
    "decisionId": "go-inc-d-live-morris-001",
    "requestId": "req-inc-d-live-1784528437254",
    "contractHash": "75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78",
    "decision": "GO",
    "decidedBy": "Morris",
    "decidedAt": "2026-07-20T06:20:37.395Z",
    "scope": "increment-d-cursor-sandbox",
    "gitBranch": "delivery/sfia-studio-poc-increment-d",
    "gitHead": "9926238a0be3c2e7ce745ee95321281ef49f0465",
    "allowlistSnapshot": [
      "projects/sfia-studio/.sandbox/increment-d",
      "projects/sfia-studio/.sandbox/increment-d/output.md"
    ],
    "correlationId": "corr-go-inc-d-live-morris-001"
  }
}
```

### Pre-spawn meta

```json
{
  "spawnedAt": "2026-07-20T06:20:37.254Z",
  "timezone": "Europe/Paris",
  "branch": "delivery/sfia-studio-poc-increment-d",
  "head": "9926238a0be3c2e7ce745ee95321281ef49f0465",
  "originMain": "9926238a0be3c2e7ce745ee95321281ef49f0465",
  "expectedRemoteWrites": 0,
  "networkEffect": "none",
  "allowlistedWritePaths": [
    "projects/sfia-studio/.sandbox/increment-d/output.md"
  ],
  "timeoutMs": 30000,
  "cursorBin": "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  "morrisGate": "G-VS-LIVE-CURSOR",
  "observationNumber": 1,
  "maxObservations": 1,
  "statusBefore": " M .gitignore\n M projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx\n M projects/sfia-studio/harness/src/cli.ts\n M projects/sfia-studio/harness/src/index.ts\n M projects/sfia-studio/harness/src/ports/cursorRealSpike.ts\n?? .tmp-sfia-review/\n?? projects/.tmp-sfia-review/\n?? projects/sfia-studio/.sandbox/\n?? projects/sfia-studio/app/__tests__/increment-d.test.tsx\n?? projects/sfia-studio/app/e2e/increment-d.spec.ts\n?? projects/sfia-studio/app/lib/harness/incrementDAction.ts\n?? projects/sfia-studio/harness/src/increment-d/\n?? projects/sfia-studio/harness/src/types/cursorExecutionReport.ts\n?? projects/sfia-studio/harness/tests/increment-d.test.ts\n"
}
```

## Tests

- harness unit Increment D: 22 passed
- harness full: 139 passed (2 skipped live/spike)
- app unit A/B/C/D: 35 passed
- app lint: clean
- app build: OK
- harness tsc: OK
- E2E Increment D: 9 passed
- E2E A+B+C+D+P0: verts après correctif titre rapport (A)
- git diff --check: clean
- secret scan (src harness/app ciblé): aucun secret

## STOP / timeout

Testés via faux port (`stoppable-slow`, `timeout`). Observation réelle non stoppée artificiellement.
`spawnWithTimeout` accepte AbortSignal (SIGTERM puis SIGKILL).

## UI Cycle actif

Route `/cycle-actif` uniquement. STOP clavier, remote=0, CTA analyse Increment E disabled, états dérivés rapport.

## Réserves

- Candidate proof only — Morris decision required
- Increment E / analyse GPT non autorisée
- observation unique consommée; nouveau GO requis pour toute réexécution
- spike vocabulary Cycle/DOC hors chemin Inc C (dette hors D)
- `projects/.tmp-sfia-review/` préexistant hors Increment D (non versionné)

## Gates fermés

G-INCREMENT-D-STAGE, COMMIT, PUSH, PR, MERGE, G-INCREMENT-E, G-GPT-ANALYSIS, G-BRANCH-DELETE, G-MVP-CLAIM, G-INDUSTRIALIZATION

## Décision Morris attendue

Valider Increment D (preuve sandbox Cursor) et décider de la suite (PR readiness / Increment E) — hors autorité Cursor.

## Absence staging/commit/push/PR delivery

Confirmé: aucun commit delivery; handoff uniquement sur `sfia/review-handoff` après ce pack.

### Modified: .gitignore

```diff
diff --git a/.gitignore b/.gitignore
index fdfdc0a..47f93b6 100644
--- a/.gitignore
+++ b/.gitignore
@@ -6,6 +6,11 @@ node_modules/
 *.log
 exports.zip
 
+# Increment D Cursor sandbox outputs (keep directory via .gitkeep)
+projects/sfia-studio/.sandbox/**
+!projects/sfia-studio/.sandbox/**/
+!projects/sfia-studio/.sandbox/**/.gitkeep
+
 # Exports JSON — versionner les snapshots Notion
 exports/**
 !exports/notion/

```

### Modified: projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx

```diff
diff --git a/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx b/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
index 7cd9fc1..0d2128b 100644
--- a/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
+++ b/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
@@ -1,5 +1,6 @@
 "use client";
 
+import { useCallback, useState } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
@@ -9,6 +10,7 @@ import {
   VariantBanner,
 } from "@/components/vertical-slice/VsShared";
 import { vsFixture } from "@/fixtures/vertical-slice";
+import { runIncrementDAction } from "@/lib/harness/incrementDAction";
 import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
 import styles from "@/components/vertical-slice/vs-panels.module.css";
 
@@ -22,40 +24,95 @@ const stepMap: Record<string, number> = {
   "VS-UX-VAR-ERROR": 7,
 };
 
+interface IncDReportView {
+  status?: string;
+  contractId?: string;
+  contractHash?: string;
+  expectedBranch?: string;
+  actualBranch?: string;
+  expectedHead?: string;
+  actualHead?: string;
+  allowlistedWritePaths?: string[];
+  durationMs?: number;
+  timeout?: boolean;
+  stopRequested?: boolean;
+  filesCreated?: string[];
+  filesModified?: string[];
+  remoteGitWrites?: number;
+  reservations?: string[];
+  analysisAuthorized?: boolean;
+  mode?: string;
+}
+
+interface IncDResultView {
+  ok?: boolean;
+  status?: string;
+  report?: IncDReportView;
+  liveInvoked?: boolean;
+  markdownContent?: string;
+  refusedBeforeSpawn?: boolean;
+}
+
 export function VsCycleActifScreen() {
   const { stateId, setStateId, fireStop, stopFired } = useVsDemo();
   const activeStep = stepMap[stateId] ?? 5;
+  const [busy, setBusy] = useState(false);
+  const [incD, setIncD] = useState<IncDResultView | null>(null);
+
+  const report = incD?.report;
+
+  const runIncDFixture = useCallback(async () => {
+    setBusy(true);
+    setStateId("VS-UX-VAR-LOADING");
+    try {
+      const raw = (await runIncrementDAction({
+        requestId: `req-inc-d-ui-${Date.now()}`,
+        correlationId: `corr-inc-d-ui-${Date.now()}`,
+        contractId: "ctr-inc-d-ui",
+        mode: "fixture",
+        mintGate: true,
+        fakeBehavior: "success",
+      })) as IncDResultView;
+      setIncD(raw);
+      if (raw.ok) setStateId("VS-UX-06");
+      else if (raw.status === "STOPPED") setStateId("VS-UX-VAR-STOP");
+      else setStateId("VS-UX-VAR-ERROR");
+    } finally {
+      setBusy(false);
+    }
+  }, [setStateId]);
 
   return (
     <div className={styles.panel} data-testid="vs-cycle-actif">
       <IdStrip />
       <HarnessStatusPanel />
 
-      {stateId === "VS-UX-VAR-STOP" || stopFired ? (
+      {stateId === "VS-UX-VAR-STOP" || stopFired || report?.stopRequested ? (
         <VariantBanner tone="stop" title="STOP Morris — prioritaire">
           <p>
             Exécution <strong>stoppée</strong> via harness. STOP ≠ NO-GO ≠ Abandonner.
             Event journalisé. Reprise éventuelle sous <strong>nouveau GO</strong> uniquement.
           </p>
-          <p className={styles.muted}>
-            Source statut = harness · fixture · {vsFixture.timestamp}
+          <p className={styles.muted} data-testid="vs-inc-d-stop-banner">
+            Source statut = harness · Increment D / fixture · {vsFixture.timestamp}
           </p>
         </VariantBanner>
       ) : null}
 
-      {stateId === "VS-UX-VAR-LOADING" ? (
-        <VariantBanner tone="info" title="Loading — analyse GPT (fixture)">
-          <p className={styles.loadingPulse}>
+      {stateId === "VS-UX-VAR-LOADING" || busy ? (
+        <VariantBanner tone="info" title="Exécution Cursor sandbox">
+          <p className={styles.loadingPulse} role="status" aria-live="polite" data-testid="vs-inc-d-running">
             <span className={styles.loadingDot} aria-hidden />
-            Phase active : analyse — pas de barre inventée
+            Revalidation GO → spawn Cursor sandbox — fail-closed
           </p>
-          <FinOpsBox phase="analyse" calls={1} />
         </VariantBanner>
       ) : null}
 
       {stateId === "VS-UX-VAR-ERROR" ? (
-        <VariantBanner tone="error" title="Erreur fail-closed — verdict invalide">
-          <p>Verdict GPT rejeté. Pas de clôture automatique.</p>
+        <VariantBanner tone="error" title="Échec / refus Increment D">
+          <p data-testid="vs-inc-d-error">
+            {incD?.status ?? "REFUSED"} — aucun succès implicite. timeout ≠ GO.
+          </p>
           <div className={styles.actions}>
             <CtaButton onClick={() => setStateId("VS-UX-07")}>
               Relancer analyse (mock)
@@ -65,18 +122,19 @@ export function VsCycleActifScreen() {
       ) : null}
 
       <section className={styles.hero} aria-labelledby="vs-cycle-hero">
-        <p className={styles.heroEyebrow}>CYCLE ACTIF · ÉTATS 05–08</p>
+        <p className={styles.heroEyebrow}>CYCLE ACTIF · INCREMENT D · ÉTATS 05–08</p>
         <h2 id="vs-cycle-hero" className={styles.heroTitle}>
           {stateId === "VS-UX-06"
-            ? "Rapport Cursor / harness disponible (fixture)"
+            ? "Rapport Cursor / harness disponible"
             : stateId === "VS-UX-07"
-              ? "Analyse GPT en cours (simulée)"
+              ? "Analyse GPT — Increment E non disponible"
               : stateId === "VS-UX-08"
                 ? "Verdict GPT candidat proposé"
-                : "Exécution sandbox simulée"}
+                : "Exécution Cursor sandbox Markdown"}
         </h2>
         <p className={styles.heroText}>
-          Stepper d&apos;états dans la route Cycle actif — aucune 5e route.
+          GO revalidé avant spawn · allowlist mono-fichier · remote Git writes = 0 ·
+          aucune 5e route.
         </p>
       </section>
 
@@ -95,18 +153,30 @@ export function VsCycleActifScreen() {
             ),
           )}
         </div>
-        <p className={styles.muted}>Étape active fixture : {activeStep}</p>
+        <p className={styles.muted}>Étape active : {activeStep}</p>
       </nav>
 
       <div className={styles.twoCol}>
         <section className={styles.card}>
           {stateId === "VS-UX-05" || stateId === "VS-UX-VAR-STOP" ? (
             <>
-              <StatusPill tone="blueFlush">en_exécution (fixture)</StatusPill>
+              <StatusPill tone="blueFlush">
+                {busy ? "exécution en cours" : "prêt / stoppable"}
+              </StatusPill>
               <p className={styles.fieldValue}>
-                Cursor sandbox mock — fichier allowlist uniquement. Remote writes = 0.
+                Sandbox : <code>projects/sfia-studio/.sandbox/increment-d/output.md</code>
+              </p>
+              <p className={styles.muted} data-testid="vs-inc-d-remote-zero">
+                Remote Git writes attendus = 0 · networkEffect = none
               </p>
               <div className={styles.actions}>
+                <CtaButton
+                  data-testid="vs-inc-d-run-fixture"
+                  onClick={() => void runIncDFixture()}
+                  disabled={busy}
+                >
+                  Lancer sandbox fixture (harness)
+                </CtaButton>
                 <CtaButton onClick={() => setStateId("VS-UX-06")}>
                   Simuler fin d&apos;exécution
                 </CtaButton>
@@ -126,16 +196,50 @@ export function VsCycleActifScreen() {
             <>
               <p className={styles.cardTitle}>CursorExecutionReport (fixture)</p>
               <p className={styles.fieldLabel}>Statut</p>
-              <p className={styles.fieldValue}>{vsFixture.report.status}</p>
-              <p className={styles.fieldLabel}>Fichiers touchés</p>
+              <p className={styles.fieldValue} data-testid="vs-inc-d-status">
+                {report?.status ?? vsFixture.report.status}
+              </p>
+              <p className={styles.fieldLabel}>Contract / hash</p>
+              <p className={styles.fieldValue} data-testid="vs-inc-d-contract">
+                {report?.contractId ?? vsFixture.contractId} ·{" "}
+                {(report?.contractHash ?? vsFixture.contractHash).slice(0, 16)}…
+              </p>
+              <p className={styles.fieldLabel}>Branche / HEAD</p>
               <p className={styles.fieldValue}>
-                {vsFixture.report.filesTouched.join(", ")}
+                {report?.actualBranch ?? vsFixture.branch} ·{" "}
+                {(report?.actualHead ?? vsFixture.head).slice(0, 12)}…
+              </p>
+              <p className={styles.fieldLabel}>Allowlist</p>
+              <p className={styles.fieldValue} data-testid="vs-inc-d-allowlist">
+                {(report?.allowlistedWritePaths ?? vsFixture.allowlist).join(", ")}
+              </p>
+              <p className={styles.fieldLabel}>Fichiers touchés</p>
+              <p className={styles.fieldValue} data-testid="vs-inc-d-files">
+                {[...(report?.filesCreated ?? []), ...(report?.filesModified ?? [])].join(", ") ||
+                  vsFixture.report.filesTouched.join(", ")}
               </p>
               <p className={styles.fieldLabel}>Remote writes</p>
-              <p className={styles.fieldValue}>{vsFixture.report.remoteWrites}</p>
+              <p className={styles.fieldValue} data-testid="vs-inc-d-remote">
+                {report?.remoteGitWrites ?? vsFixture.report.remoteWrites}
+              </p>
+              <p className={styles.fieldLabel}>Durée</p>
+              <p className={styles.fieldValue}>{report?.durationMs ?? "—"} ms</p>
               <p className={styles.fieldLabel}>Aperçu sanitisé</p>
-              <pre className={styles.fieldValue}>{vsFixture.report.markdownPreview}</pre>
+              <pre className={styles.fieldValue} data-testid="vs-inc-d-preview">
+                {(incD?.markdownContent ?? vsFixture.report.markdownPreview).slice(0, 600)}
+              </pre>
+              <p className={styles.muted} data-testid="vs-inc-d-source">
+                Source statut = harness / preuves · mode={report?.mode ?? "fixture"}
+              </p>
               <div className={styles.actions}>
+                <CtaButton
+                  disabled
+                  title="Increment E non disponible"
+                  data-testid="vs-inc-d-analyze-disabled"
+                  aria-disabled
+                >
+                  Lancer analyse GPT (Increment E non disponible)
+                </CtaButton>
                 <CtaButton onClick={() => setStateId("VS-UX-07")}>
                   Lancer analyse GPT (mock)
                 </CtaButton>
@@ -143,9 +247,10 @@ export function VsCycleActifScreen() {
             </>
           ) : null}
 
-          {stateId === "VS-UX-07" || stateId === "VS-UX-VAR-LOADING" ? (
+          {stateId === "VS-UX-07" ? (
             <>
-              <FinOpsBox phase="analyse" calls={1} />
+              <FinOpsBox phase="analyse" calls={0} />
+              <p className={styles.muted}>Increment E / analyse GPT réelle — hors périmètre.</p>
               <div className={styles.actions}>
                 <CtaButton onClick={() => setStateId("VS-UX-08")}>
                   Simuler verdict OK
@@ -156,13 +261,24 @@ export function VsCycleActifScreen() {
                 >
                   Simuler verdict invalide
                 </CtaButton>
-                <CtaButton variant="danger" onClick={fireStop}>
+                <CtaButton
+                  variant="danger"
+                  onClick={fireStop}
+                  aria-label="STOP Morris pendant exécution"
+                  data-testid="vs-stop-execution"
+                >
                   STOP Morris
                 </CtaButton>
               </div>
             </>
           ) : null}
 
+          {stateId === "VS-UX-VAR-LOADING" && busy ? (
+            <p className={styles.muted} role="status" aria-live="polite">
+              Harness : revalidation + spawn fixture en cours…
+            </p>
+          ) : null}
+
           {stateId === "VS-UX-08" ? (
             <>
               <StatusPill tone="purple">{vsFixture.verdict.label}</StatusPill>
@@ -197,14 +313,28 @@ export function VsCycleActifScreen() {
           ) : null}
         </section>
 
-        <aside className={styles.card} aria-label="Cadre d'exécution fixture">
+        <aside className={styles.card} aria-label="Cadre d'exécution Increment D">
           <p className={styles.cardTitle}>Cadre d&apos;exécution</p>
           <p className={styles.fieldLabel}>Allowlist</p>
-          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
+          <p className={styles.fieldValue}>
+            {(report?.allowlistedWritePaths ?? [
+              "projects/sfia-studio/.sandbox/increment-d/output.md",
+            ]).join(", ")}
+          </p>
           <p className={styles.fieldLabel}>gitEffect</p>
           <p className={styles.fieldValue}>none-remote</p>
           <p className={styles.fieldLabel}>Source</p>
           <p className={styles.fieldValue}>{vsFixture.sourceStatus}</p>
+          <p className={styles.muted}>analysisAuthorized=false · remote=0</p>
+          <ul className={styles.list}>
+            {(report?.reservations ?? [
+              "Candidate proof only",
+              "Morris decision required",
+              "Increment E non disponible",
+            ]).map((item) => (
+              <li key={item}>{item}</li>
+            ))}
+          </ul>
         </aside>
       </div>
     </div>

```

### Modified: projects/sfia-studio/harness/src/cli.ts

```diff
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
index fafa8c1..48c13b5 100644
--- a/projects/sfia-studio/harness/src/cli.ts
+++ b/projects/sfia-studio/harness/src/cli.ts
@@ -8,6 +8,7 @@ import { createThinStudioAdapter } from "./adapter/thinStudioAdapter.js";
 import { resumeSessionFromProofDir } from "./session/resumeSession.js";
 import { verifyProofPack } from "./proof/verifyProofPack.js";
 import { GptQualificationLivePort, runQualificationFixture } from "./ports/gptQualificationLive.js";
+import { runIncrementDSandbox } from "./increment-d/cursorSandboxRunner.js";
 import type {
   ExecutionContract,
   GateDecision,
@@ -15,6 +16,7 @@ import type {
   StudioAdapterRequest,
 } from "./types/contracts.js";
 import type { QualificationRequestInput } from "./types/qualificationCandidate.js";
+import type { IncrementDRunInput } from "./increment-d/cursorSandboxRunner.js";
 import { computeContractHash } from "./hash/contractHash.js";
 
 function usage(): never {
@@ -30,6 +32,7 @@ Commands:
   resume-session <proofDir>         # Increment B session resume from journal/proofs
   qualify-fixture <payload.json>    # Increment C qualification fixture (no OpenAI)
   qualify-live <payload.json>       # Increment C live qualification (requires flags + key)
+  inc-d-run <payload.json>          # Increment D Cursor sandbox (fixture fake or live)
 `);
   process.exit(2);
 }
@@ -154,6 +157,15 @@ async function main(): Promise<void> {
     process.exit(result.ok ? 0 : 1);
   }
 
+  if (cmd === "inc-d-run") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as IncrementDRunInput;
+    const result = await runIncrementDSandbox(payload);
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
   usage();
 }
 

```

### Modified: projects/sfia-studio/harness/src/index.ts

```diff
diff --git a/projects/sfia-studio/harness/src/index.ts b/projects/sfia-studio/harness/src/index.ts
index 052723b..cd47f42 100644
--- a/projects/sfia-studio/harness/src/index.ts
+++ b/projects/sfia-studio/harness/src/index.ts
@@ -30,3 +30,23 @@ export * from "./types/qualificationCandidate.js";
 export * from "./finops/qualificationLimits.js";
 export * from "./validation/qualificationCandidateValidator.js";
 export * from "./ports/gptQualificationLive.js";
+export * from "./types/cursorExecutionReport.js";
+export * from "./increment-d/sandboxPaths.js";
+export {
+  buildIncrementDContract,
+  hashIncrementDContract,
+  makeIncrementDGo,
+  buildIncDMarkdownContent,
+  buildIncDCursorInstruction,
+} from "./increment-d/executionContract.js";
+export {
+  runFakeCursorPort,
+  cleanupFakeOutsideProbe,
+  type FakeCursorBehavior,
+} from "./increment-d/fakeCursorPort.js";
+export {
+  runIncrementDSandbox,
+  resetIncDSandboxOutput,
+  type IncrementDRunInput,
+  type IncrementDRunResult,
+} from "./increment-d/cursorSandboxRunner.js";

```

### Modified: projects/sfia-studio/harness/src/ports/cursorRealSpike.ts

```diff
diff --git a/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts b/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
index 0bc103a..7b5e576 100644
--- a/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
+++ b/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
@@ -123,12 +123,13 @@ export function buildCursorAgentArgv(input: {
   return { command: input.bin, argv };
 }
 
-/** Allowed sandboxes: legacy cursor-real spike OR e2e proofs sandbox (both under harness). */
+/** Allowed sandboxes: legacy cursor-real spike OR e2e proofs sandbox OR Increment D sandbox. */
 export function isAllowedCursorSpikeSandbox(cwd: string): boolean {
   const resolved = path.resolve(cwd);
   return (
     resolved.includes(`${path.sep}spikes${path.sep}cursor-real${path.sep}sandbox`) ||
-    resolved.includes(`${path.sep}proofs${path.sep}e2e-cursor-sandbox`)
+    resolved.includes(`${path.sep}proofs${path.sep}e2e-cursor-sandbox`) ||
+    resolved.includes(`${path.sep}.sandbox${path.sep}increment-d`)
   );
 }
 
@@ -197,12 +198,15 @@ export async function spawnWithTimeout(input: {
   env: NodeJS.ProcessEnv;
   timeoutMs: number;
   maxOutputBytes: number;
+  /** Optional AbortSignal for operator STOP (soft SIGTERM then SIGKILL). */
+  abortSignal?: AbortSignal;
 }): Promise<{
   exitCode: number | null;
   signal: NodeJS.Signals | null;
   stdout: string;
   stderr: string;
   timedOut: boolean;
+  aborted: boolean;
   durationMs: number;
 }> {
   const started = Date.now();
@@ -210,6 +214,7 @@ export async function spawnWithTimeout(input: {
     let stdout = Buffer.alloc(0);
     let stderr = Buffer.alloc(0);
     let timedOut = false;
+    let aborted = false;
     let settled = false;
 
     const child = spawn(input.command, input.argv, {
@@ -219,15 +224,29 @@ export async function spawnWithTimeout(input: {
       stdio: ["ignore", "pipe", "pipe"],
     });
 
-    const timer = setTimeout(() => {
-      timedOut = true;
+    const softThenHard = () => {
       child.kill("SIGTERM");
       setTimeout(() => {
         if (!settled) child.kill("SIGKILL");
       }, 2_000).unref();
+    };
+
+    const timer = setTimeout(() => {
+      timedOut = true;
+      softThenHard();
     }, input.timeoutMs);
 
-    const append = ( whicht: "out" | "err", chunk: Buffer) => {
+    const onAbort = () => {
+      aborted = true;
+      softThenHard();
+    };
+    if (input.abortSignal?.aborted) {
+      onAbort();
+    } else {
+      input.abortSignal?.addEventListener("abort", onAbort, { once: true });
+    }
+
+    const append = (whicht: "out" | "err", chunk: Buffer) => {
       const cur = whicht === "out" ? stdout : stderr;
       const next = Buffer.concat([cur, chunk]);
       if (next.length > input.maxOutputBytes) {
@@ -247,18 +266,21 @@ export async function spawnWithTimeout(input: {
       if (settled) return;
       settled = true;
       clearTimeout(timer);
+      input.abortSignal?.removeEventListener("abort", onAbort);
       reject(err);
     });
     child.on("close", (code, signal) => {
       if (settled) return;
       settled = true;
       clearTimeout(timer);
+      input.abortSignal?.removeEventListener("abort", onAbort);
       resolve({
         exitCode: code,
         signal,
         stdout: stdout.toString("utf8"),
         stderr: stderr.toString("utf8"),
         timedOut,
+        aborted,
         durationMs: Date.now() - started,
       });
     });

```

### projects/sfia-studio/harness/src/types/cursorExecutionReport.ts

Path: `projects/sfia-studio/harness/src/types/cursorExecutionReport.ts`

```
/**
 * Increment D — CursorExecutionReport (canonical harness report).
 * Candidate proof only — Morris decision still required. Never authorizes analysis.
 */

export const CURSOR_EXECUTION_REPORT_SCHEMA = "cursor-execution-report-1.0.0" as const;

export type CursorExecutionStatus =
  | "SUCCEEDED"
  | "REFUSED_NO_GO"
  | "REFUSED_STALE_GO"
  | "REFUSED_SCOPE"
  | "CURSOR_UNAVAILABLE"
  | "FAILED_EXIT_CODE"
  | "STOPPED"
  | "TIMED_OUT"
  | "POLICY_VIOLATION"
  | "REPORT_INCOMPLETE";

export interface CursorExecutionReport {
  schemaVersion: typeof CURSOR_EXECUTION_REPORT_SCHEMA;
  executionId: string;
  requestId: string;
  correlationId: string;
  contractId: string;
  contractHash: string;
  expectedBranch: string;
  actualBranch: string;
  expectedHead: string;
  actualHead: string;
  allowlistedWritePaths: string[];
  status: CursorExecutionStatus;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  exitCode: number | null;
  signal: string | null;
  timeout: boolean;
  stopRequested: boolean;
  cursorAvailable: boolean;
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  outOfAllowlistChanges: string[];
  stdoutPreview: string;
  stderrPreview: string;
  remoteGitWrites: 0;
  networkUsed: false;
  reservations: string[];
  authority: {
    candidateOnly: true;
    morrisDecisionRequired: true;
    executionAuthorized: false;
    analysisAuthorized: false;
  };
  morrisDecisionRequired: true;
  analysisAuthorized: false;
  mode: "fixture" | "live";
  realCursorProcessInvoked: boolean;
}

```

### projects/sfia-studio/harness/src/increment-d/sandboxPaths.ts

Path: `projects/sfia-studio/harness/src/increment-d/sandboxPaths.ts`

```
/**
 * Increment D — sandbox path conventions (single Markdown write).
 * Reuses spike allowlist extension rather than a competing sandbox doctrine.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
/** Workspace root: harness/src/increment-d → … → sfia-workspace */
export const INC_D_WORKSPACE_ROOT = path.resolve(HERE, "../../../../../");

export const INC_D_SANDBOX_REL = "projects/sfia-studio/.sandbox/increment-d";
export const INC_D_OUTPUT_REL = "output.md";
export const INC_D_TIMEOUT_MS = 30_000;
export const INC_D_LIVE_FLAG = "SFIA_CURSOR_INC_D_LIVE";
export const INC_D_OBSERVE_FLAG = "SFIA_CURSOR_INC_D_OBSERVE";

export function resolveIncDSandboxAbs(workspaceRoot = INC_D_WORKSPACE_ROOT): string {
  return path.resolve(workspaceRoot, INC_D_SANDBOX_REL);
}

export function resolveIncDOutputAbs(workspaceRoot = INC_D_WORKSPACE_ROOT): string {
  return path.join(resolveIncDSandboxAbs(workspaceRoot), INC_D_OUTPUT_REL);
}

export function isIncDSandboxPath(cwd: string): boolean {
  const resolved = path.resolve(cwd);
  const marker = `${path.sep}.sandbox${path.sep}increment-d`;
  return resolved.includes(marker) || resolved.endsWith(`${path.sep}increment-d`);
}

```

### projects/sfia-studio/harness/src/increment-d/executionContract.ts

Path: `projects/sfia-studio/harness/src/increment-d/executionContract.ts`

```
/**
 * Increment D — ExecutionContract + GO anchors for Cursor sandbox spawn.
 * Uses existing canonicalize + computeContractHash — no second hash algorithm.
 */

import { createHash } from "node:crypto";
import type { ExecutionContract, GateDecision } from "../types/contracts.js";
import { computeContractHash } from "../hash/contractHash.js";
import { canonicalize } from "../hash/canonicalize.js";
import {
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
  INC_D_TIMEOUT_MS,
  INC_D_WORKSPACE_ROOT,
} from "./sandboxPaths.js";

/** Stable ExecutionContract for Increment D (cursorMode remains fixture for PolicyEngine;
 * live spawn is gated by Increment D runner flags, not by widening Orchestrator B). */
export function buildIncrementDContract(input: {
  contractId: string;
  requestId: string;
  proofDir: string;
  expectedBranch: string;
  expectedHead: string;
  timeoutMs?: number;
  repositoryRoot?: string;
}): ExecutionContract & { expectedBranch: string; expectedHead: string; allowlistedWritePaths: string[] } {
  const repositoryRoot = input.repositoryRoot ?? INC_D_WORKSPACE_ROOT;
  const base: ExecutionContract = {
    contractId: input.contractId,
    requestId: input.requestId,
    scenario: "S1",
    repositoryRoot,
    allowedPaths: [INC_D_SANDBOX_REL, `${INC_D_SANDBOX_REL}/${INC_D_OUTPUT_REL}`],
    allowedCommands: ["cursor-sandbox-write-output-md", "git-status-short", "git-rev-parse"],
    gitEffect: "none-remote",
    cursorMode: "fixture",
    timeoutMs: input.timeoutMs ?? INC_D_TIMEOUT_MS,
    proofDir: input.proofDir,
    schemaVersion: "poc-s1-1.0.0",
    maxFiles: 1,
    maxFileBytes: 64_000,
    allowedExtensions: [".md"],
    decidedByAllowlist: ["Morris"],
  };
  return {
    ...base,
    expectedBranch: input.expectedBranch,
    expectedHead: input.expectedHead,
    allowlistedWritePaths: [`${INC_D_SANDBOX_REL}/${INC_D_OUTPUT_REL}`],
  };
}

export function hashIncrementDContract(
  contract: ReturnType<typeof buildIncrementDContract>,
): string {
  // Hash the ExecutionContract fields only (stable algorithm).
  const { expectedBranch: _b, expectedHead: _h, allowlistedWritePaths: _a, ...stable } = contract;
  return computeContractHash(stable);
}

export function makeIncrementDGo(input: {
  decisionId: string;
  requestId: string;
  contractHash: string;
  branch: string;
  head: string;
  allowlist: string[];
  decidedAt?: string;
  expiresAt?: string;
}): GateDecision {
  return {
    decisionId: input.decisionId,
    requestId: input.requestId,
    contractHash: input.contractHash,
    decision: "GO",
    decidedBy: "Morris",
    decidedAt: input.decidedAt ?? new Date().toISOString(),
    scope: "increment-d-cursor-sandbox",
    expiresAt: input.expiresAt,
    gitBranch: input.branch,
    gitHead: input.head,
    allowlistSnapshot: [...input.allowlist],
    correlationId: `corr-${input.decisionId}`,
  };
}

export function buildIncDMarkdownContent(meta: {
  executionId: string;
  requestId: string;
  contractId: string;
  branch: string;
  head: string;
  contractHash: string;
  timestamp: string;
}): string {
  return [
    "# SFIA Studio Increment D Sandbox Proof",
    "",
    `- executionId: ${meta.executionId}`,
    `- requestId: ${meta.requestId}`,
    `- contractId: ${meta.contractId}`,
    `- branche revalidée: ${meta.branch}`,
    `- HEAD revalidé: ${meta.head}`,
    `- contractHash: ${meta.contractHash}`,
    `- date/heure/fuseau: ${meta.timestamp}`,
    "",
    "Cursor sandbox execution completed",
    "",
    "Remote Git writes: 0",
    "",
    "Candidate proof only — Morris decision required",
    "",
  ].join("\n");
}

export function buildIncDCursorInstruction(meta: {
  workspaceRoot: string;
  sandboxAbs: string;
  outputRel: string;
  markdownContent: string;
}): string {
  return [
    "SFIA Studio Increment D — Cursor sandbox Markdown proof.",
    `Repository root: ${meta.workspaceRoot}`,
    `Working directory (sandbox): ${meta.sandboxAbs}`,
    `Write ONLY this relative file: ${meta.outputRel}`,
    "Do not read secrets, .env, or API keys.",
    "Do not modify any other file.",
    "Do not run git commit, push, pull, fetch, checkout, reset, clean, rm, or any remote Git command.",
    "Do not install dependencies.",
    "Do not access the network.",
    "If the sandbox path is missing or the scope diverges, stop immediately.",
    "Write the following Markdown content exactly:",
    "-----BEGIN MARKDOWN-----",
    meta.markdownContent.trimEnd(),
    "-----END MARKDOWN-----",
    "Return a short completion note only.",
  ].join("\n");
}

/** Provenance hash of demand/instruction without logging full text in events. */
export function sha256Prefix(text: string, n = 16): string {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, n);
}

export function canonicalizeForAudit(value: unknown): string {
  return canonicalize(value);
}

```

### projects/sfia-studio/harness/src/increment-d/fakeCursorPort.ts

Path: `projects/sfia-studio/harness/src/increment-d/fakeCursorPort.ts`

```
/**
 * Increment D — deterministic fake Cursor port (tests / fixture mode).
 * Never invokes a real Cursor binary.
 */

import { mkdirSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import path from "node:path";
import { INC_D_OUTPUT_REL } from "./sandboxPaths.js";

export type FakeCursorBehavior =
  | "success"
  | "exit-nonzero"
  | "timeout"
  | "stoppable-slow"
  | "write-outside"
  | "unavailable"
  | "success-no-file";

export interface FakeCursorPortOptions {
  behavior: FakeCursorBehavior;
  sandboxAbs: string;
  markdownContent: string;
  /** Delay before completing (ms) — used for STOP/timeout tests. */
  delayMs?: number;
  signal?: AbortSignal;
}

export interface FakeCursorPortResult {
  ok: boolean;
  exitCode: number | null;
  signal: string | null;
  timedOut: boolean;
  stopRequested: boolean;
  cursorAvailable: boolean;
  realCursorProcessInvoked: false;
  durationMs: number;
  stdout: string;
  stderr: string;
  errorCode?: string;
}

export async function runFakeCursorPort(
  opts: FakeCursorPortOptions,
): Promise<FakeCursorPortResult> {
  const started = Date.now();
  const delay = opts.delayMs ?? 0;

  if (opts.behavior === "unavailable") {
    return {
      ok: false,
      exitCode: null,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: false,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "cursor binary not found",
      errorCode: "CURSOR_UNAVAILABLE",
    };
  }

  const waitOrAbort = async (): Promise<"ok" | "aborted" | "timeout"> => {
    if (delay <= 0) return "ok";
    return new Promise((resolve) => {
      const timer = setTimeout(() => resolve("ok"), delay);
      const onAbort = () => {
        clearTimeout(timer);
        resolve("aborted");
      };
      if (opts.signal?.aborted) {
        clearTimeout(timer);
        resolve("aborted");
        return;
      }
      opts.signal?.addEventListener("abort", onAbort, { once: true });
    });
  };

  if (opts.behavior === "timeout") {
    await new Promise((r) => setTimeout(r, opts.delayMs ?? 50));
    return {
      ok: false,
      exitCode: null,
      signal: "SIGTERM",
      timedOut: true,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "fake port timed out",
      errorCode: "TIMED_OUT",
    };
  }

  if (opts.behavior === "stoppable-slow") {
    const outcome = await waitOrAbort();
    if (outcome === "aborted") {
      return {
        ok: false,
        exitCode: null,
        signal: "SIGTERM",
        timedOut: false,
        stopRequested: true,
        cursorAvailable: true,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - started,
        stdout: "",
        stderr: "fake port stopped",
        errorCode: "STOPPED",
      };
    }
  } else if (delay > 0) {
    const outcome = await waitOrAbort();
    if (outcome === "aborted") {
      return {
        ok: false,
        exitCode: null,
        signal: "SIGTERM",
        timedOut: false,
        stopRequested: true,
        cursorAvailable: true,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - started,
        stdout: "",
        stderr: "fake port stopped",
        errorCode: "STOPPED",
      };
    }
  }

  mkdirSync(opts.sandboxAbs, { recursive: true });

  if (opts.behavior === "write-outside") {
    const outside = path.resolve(opts.sandboxAbs, "..", "ESCAPE_PROBE.md");
    writeFileSync(outside, "escape", "utf8");
    return {
      ok: false,
      exitCode: 0,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "wrote outside",
      stderr: "",
      errorCode: "POLICY_VIOLATION",
    };
  }

  if (opts.behavior === "success-no-file") {
    return {
      ok: false,
      exitCode: 0,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "claimed success without file",
      stderr: "",
      errorCode: "REPORT_INCOMPLETE",
    };
  }

  if (opts.behavior === "exit-nonzero") {
    return {
      ok: false,
      exitCode: 2,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "fake exit 2",
      errorCode: "FAILED_EXIT_CODE",
    };
  }

  // success
  const out = path.join(opts.sandboxAbs, INC_D_OUTPUT_REL);
  writeFileSync(out, opts.markdownContent, "utf8");
  return {
    ok: true,
    exitCode: 0,
    signal: null,
    timedOut: false,
    stopRequested: false,
    cursorAvailable: true,
    realCursorProcessInvoked: false,
    durationMs: Date.now() - started,
    stdout: `wrote ${INC_D_OUTPUT_REL}`,
    stderr: "",
  };
}

export function cleanupFakeOutsideProbe(sandboxAbs: string): void {
  const outside = path.resolve(sandboxAbs, "..", "ESCAPE_PROBE.md");
  if (existsSync(outside)) unlinkSync(outside);
}

```

### projects/sfia-studio/harness/src/increment-d/cursorSandboxRunner.ts

Path: `projects/sfia-studio/harness/src/increment-d/cursorSandboxRunner.ts`

```
/**
 * Increment D — Cursor sandbox runner (fixture fake port or live Cursor).
 * Authority: harness revalidates GO immediately before spawn. Studio never decides.
 */

import { randomUUID, createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
  unlinkSync,
} from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { GateValidator } from "../gate/gateValidator.js";
import { EventJournal } from "../journal/eventJournal.js";
import { ProofStore } from "../proof/proofStore.js";
import type { GateDecision } from "../types/contracts.js";
import {
  CURSOR_EXECUTION_REPORT_SCHEMA,
  type CursorExecutionReport,
  type CursorExecutionStatus,
} from "../types/cursorExecutionReport.js";
import {
  buildCursorAgentArgv,
  filterSpikeEnv,
  resolveCursorBin,
  spawnWithTimeout,
} from "../ports/cursorRealSpike.js";
import {
  buildIncDCursorInstruction,
  buildIncDMarkdownContent,
  buildIncrementDContract,
  hashIncrementDContract,
  makeIncrementDGo,
} from "./executionContract.js";
import { cleanupFakeOutsideProbe, runFakeCursorPort, type FakeCursorBehavior } from "./fakeCursorPort.js";
import {
  INC_D_LIVE_FLAG,
  INC_D_OBSERVE_FLAG,
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
  INC_D_TIMEOUT_MS,
  INC_D_WORKSPACE_ROOT,
  isIncDSandboxPath,
  resolveIncDOutputAbs,
  resolveIncDSandboxAbs,
} from "./sandboxPaths.js";

export interface IncrementDRunInput {
  requestId: string;
  correlationId: string;
  contractId: string;
  expectedBranch: string;
  expectedHead: string;
  gate: GateDecision | null;
  proofDir: string;
  /** fixture = fake port; live = real Cursor (requires flags). */
  mode: "fixture" | "live";
  /**
   * When true and mode=fixture, harness mints a GO anchored on current git
   * (Studio never decides — harness remains authority). Live mode ignores mint.
   */
  mintGate?: boolean;
  fakeBehavior?: FakeCursorBehavior;
  fakeDelayMs?: number;
  signal?: AbortSignal;
  timeoutMs?: number;
  workspaceRoot?: string;
  now?: () => Date;
}

export interface IncrementDRunResult {
  ok: boolean;
  status: CursorExecutionStatus;
  report: CursorExecutionReport;
  eventsLogged: string[];
  proofDir: string;
  markdownPath?: string;
  markdownContent?: string;
  refusedBeforeSpawn: boolean;
  liveInvoked: boolean;
}

function git(cmd: string[], cwd: string): string {
  return execFileSync("git", cmd, { cwd, encoding: "utf8" }).trim();
}

function listSandboxFiles(sandboxAbs: string): string[] {
  if (!existsSync(sandboxAbs)) return [];
  const out: string[] = [];
  const walk = (dir: string, rel = "") => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? `${rel}/${ent.name}` : ent.name;
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(abs, r);
      else out.push(r);
    }
  };
  walk(sandboxAbs);
  return out.sort();
}

function fileFingerprint(abs: string): string | null {
  if (!existsSync(abs)) return null;
  const buf = readFileSync(abs);
  return createHash("sha256").update(buf).digest("hex");
}

function sanitizePreview(s: string, max = 4000): string {
  return s
    .replace(/sk-[A-Za-z0-9_-]{8,}/g, "[REDACTED]")
    .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]")
    .replace(/OPENAI_API_KEY\s*=\s*\S+/gi, "OPENAI_API_KEY=[REDACTED]")
    .slice(0, max);
}

function buildReport(partial: Omit<CursorExecutionReport, "schemaVersion" | "authority" | "morrisDecisionRequired" | "analysisAuthorized" | "remoteGitWrites" | "networkUsed">): CursorExecutionReport {
  return {
    schemaVersion: CURSOR_EXECUTION_REPORT_SCHEMA,
    ...partial,
    remoteGitWrites: 0,
    networkUsed: false,
    authority: {
      candidateOnly: true,
      morrisDecisionRequired: true,
      executionAuthorized: false,
      analysisAuthorized: false,
    },
    morrisDecisionRequired: true,
    analysisAuthorized: false,
  };
}

export async function runIncrementDSandbox(input: IncrementDRunInput): Promise<IncrementDRunResult> {
  const now = input.now ?? (() => new Date());
  const startedAt = now();
  const workspaceRoot = input.workspaceRoot ?? INC_D_WORKSPACE_ROOT;
  const sandboxAbs = resolveIncDSandboxAbs(workspaceRoot);
  const outputAbs = resolveIncDOutputAbs(workspaceRoot);
  const timeoutMs = input.timeoutMs ?? INC_D_TIMEOUT_MS;
  const executionId = `exec-inc-d-${randomUUID()}`;
  const eventsLogged: string[] = [];
  const journal = new EventJournal(input.proofDir, input.correlationId);
  const proofs = new ProofStore(input.proofDir);

  const log = (eventType: string, detail: Record<string, unknown>) => {
    eventsLogged.push(eventType);
    journal.append({
      eventType,
      requestId: input.requestId,
      result: "ok",
      detail,
    });
  };

  mkdirSync(sandboxAbs, { recursive: true });
  mkdirSync(input.proofDir, { recursive: true });

  // Fixture-only: harness may mint GO from live git anchors (never for live spawn).
  if (input.mintGate && input.mode === "fixture" && (!input.gate || input.gate.decision !== "GO")) {
    const branch = git(["branch", "--show-current"], workspaceRoot);
    const head = git(["rev-parse", "HEAD"], workspaceRoot);
    input.expectedBranch = branch;
    input.expectedHead = head;
    const mintContract = buildIncrementDContract({
      contractId: input.contractId,
      requestId: input.requestId,
      proofDir: input.proofDir,
      expectedBranch: branch,
      expectedHead: head,
      timeoutMs,
      repositoryRoot: workspaceRoot,
    });
    const mintHash = hashIncrementDContract(mintContract);
    input.gate = makeIncrementDGo({
      decisionId: `go-mint-${randomUUID()}`,
      requestId: input.requestId,
      contractHash: mintHash,
      branch,
      head,
      allowlist: mintContract.allowedPaths,
    });
    log("cursor.gate.minted.fixture", { branch, head, contractHash: mintHash });
  }

  const contract = buildIncrementDContract({
    contractId: input.contractId,
    requestId: input.requestId,
    proofDir: input.proofDir,
    expectedBranch: input.expectedBranch,
    expectedHead: input.expectedHead,
    timeoutMs,
    repositoryRoot: workspaceRoot,
  });
  const contractHash = hashIncrementDContract(contract);

  const finish = (
    status: CursorExecutionStatus,
    extra: Partial<CursorExecutionReport> & {
      refusedBeforeSpawn: boolean;
      liveInvoked: boolean;
      markdownContent?: string;
    },
  ): IncrementDRunResult => {
    const completedAt = now();
    const report = buildReport({
      executionId,
      requestId: input.requestId,
      correlationId: input.correlationId,
      contractId: contract.contractId,
      contractHash,
      expectedBranch: input.expectedBranch,
      actualBranch: extra.actualBranch ?? input.expectedBranch,
      expectedHead: input.expectedHead,
      actualHead: extra.actualHead ?? input.expectedHead,
      allowlistedWritePaths: contract.allowlistedWritePaths,
      status,
      startedAt: startedAt.toISOString(),
      completedAt: completedAt.toISOString(),
      durationMs: completedAt.getTime() - startedAt.getTime(),
      exitCode: extra.exitCode ?? null,
      signal: extra.signal ?? null,
      timeout: extra.timeout ?? false,
      stopRequested: extra.stopRequested ?? false,
      cursorAvailable: extra.cursorAvailable ?? true,
      filesCreated: extra.filesCreated ?? [],
      filesModified: extra.filesModified ?? [],
      filesDeleted: extra.filesDeleted ?? [],
      outOfAllowlistChanges: extra.outOfAllowlistChanges ?? [],
      stdoutPreview: extra.stdoutPreview ?? "",
      stderrPreview: extra.stderrPreview ?? "",
      reservations: extra.reservations ?? [
        "Increment D sandbox proof only",
        "Morris decision still required",
        "Increment E / GPT analysis not authorized",
      ],
      mode: input.mode,
      realCursorProcessInvoked: extra.realCursorProcessInvoked ?? false,
    });
    proofs.writeJson("cursor-execution-report.json", report);
    log("cursor.execution.report", { status, executionId });
    return {
      ok: status === "SUCCEEDED",
      status,
      report,
      eventsLogged,
      proofDir: input.proofDir,
      markdownPath: existsSync(outputAbs) ? outputAbs : undefined,
      markdownContent: extra.markdownContent,
      refusedBeforeSpawn: extra.refusedBeforeSpawn,
      liveInvoked: extra.liveInvoked,
    };
  };

  // --- Gate revalidation BEFORE spawn ---
  log("cursor.gate.revalidate.started", { contractHash });

  if (!input.gate || input.gate.decision !== "GO") {
    log("cursor.gate.refused", { reason: "GO_ABSENT" });
    return finish("REFUSED_NO_GO", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      reservations: ["GO Morris absent — spawn refused"],
    });
  }

  let actualBranch = "";
  let actualHead = "";
  try {
    actualBranch = git(["branch", "--show-current"], workspaceRoot);
    actualHead = git(["rev-parse", "HEAD"], workspaceRoot);
  } catch {
    return finish("REFUSED_SCOPE", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      reservations: ["Unable to read git branch/HEAD"],
    });
  }

  const gateValidator = new GateValidator();
  const gateResult = gateValidator.validate({
    gate: input.gate,
    contract,
    expectedHash: contractHash,
    expectedBranch: actualBranch,
    expectedHead: actualHead,
    now: startedAt,
  });

  if (!gateResult.ok) {
    const status: CursorExecutionStatus =
      gateResult.code.includes("HASH") || gateResult.code.includes("ALLOWLIST") || gateResult.code.includes("BRANCH") || gateResult.code.includes("HEAD")
        ? "REFUSED_STALE_GO"
        : "REFUSED_NO_GO";
    log("cursor.gate.refused", { code: gateResult.code, message: gateResult.message });
    return finish(status, {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: [`Gate refused: ${gateResult.code} — ${gateResult.message}`],
    });
  }

  if (actualBranch !== input.expectedBranch || actualHead !== input.expectedHead) {
    log("cursor.gate.refused", { reason: "BRANCH_OR_HEAD_MISMATCH" });
    return finish("REFUSED_STALE_GO", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: ["Branch/HEAD diverged from GO anchors"],
    });
  }

  if (!isIncDSandboxPath(sandboxAbs)) {
    return finish("REFUSED_SCOPE", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: ["Sandbox path not Increment D canonical"],
    });
  }

  gateValidator.consume(input.gate.decisionId);
  log("cursor.gate.revalidate.ok", { contractHash, branch: actualBranch, head: actualHead });

  const markdownContent = buildIncDMarkdownContent({
    executionId,
    requestId: input.requestId,
    contractId: contract.contractId,
    branch: actualBranch,
    head: actualHead,
    contractHash,
    timestamp: startedAt.toISOString().replace("Z", "+00:00") + " (UTC) / local CEST",
  });

  const beforeFiles = listSandboxFiles(sandboxAbs);
  const beforeFp = fileFingerprint(outputAbs);
  const beforeStatus = git(["status", "--short"], workspaceRoot);

  proofs.writeJson("inc-d-pre-snapshot.json", {
    files: beforeFiles,
    outputFingerprint: beforeFp,
    gitStatusShort: beforeStatus,
    branch: actualBranch,
    head: actualHead,
  });

  log("cursor.spawn.requested", {
    mode: input.mode,
    timeoutMs,
    allowlistedWritePaths: contract.allowlistedWritePaths,
  });

  let spawnResult: {
    ok: boolean;
    exitCode: number | null;
    signal: string | null;
    timedOut: boolean;
    stopRequested: boolean;
    cursorAvailable: boolean;
    realCursorProcessInvoked: boolean;
    durationMs: number;
    stdout: string;
    stderr: string;
    errorCode?: string;
  };

  if (input.mode === "fixture") {
    spawnResult = await runFakeCursorPort({
      behavior: input.fakeBehavior ?? "success",
      sandboxAbs,
      markdownContent,
      delayMs: input.fakeDelayMs,
      signal: input.signal,
    });
  } else {
    if (process.env[INC_D_LIVE_FLAG] !== "1") {
      return finish("CURSOR_UNAVAILABLE", {
        refusedBeforeSpawn: true,
        liveInvoked: false,
        actualBranch,
        actualHead,
        cursorAvailable: false,
        reservations: [`Live Cursor denied — set ${INC_D_LIVE_FLAG}=1`],
      });
    }
    let bin: string;
    try {
      bin = resolveCursorBin();
    } catch {
      return finish("CURSOR_UNAVAILABLE", {
        refusedBeforeSpawn: true,
        liveInvoked: false,
        actualBranch,
        actualHead,
        cursorAvailable: false,
        reservations: ["Cursor binary not found"],
      });
    }

    const instruction = buildIncDCursorInstruction({
      workspaceRoot,
      sandboxAbs,
      outputRel: INC_D_OUTPUT_REL,
      markdownContent,
    });
    proofs.writeJson("inc-d-instruction-meta.json", {
      instructionSha256Prefix: createHash("sha256").update(instruction, "utf8").digest("hex").slice(0, 16),
      instructionLength: instruction.length,
      networkEffect: "none",
      gitEffect: "none-remote",
    });

    const useNested = path.basename(bin) === "cursor";
    const { command, argv } = buildCursorAgentArgv({
      bin,
      instruction,
      workspace: sandboxAbs,
      mode: "agent",
      useNestedAgentSubcommand: useNested,
    });

    const childEnv = filterSpikeEnv();
    delete childEnv.OPENAI_API_KEY;
    delete childEnv.CURSOR_API_KEY;

    try {
      const raw = await spawnWithTimeout({
        command,
        argv,
        cwd: sandboxAbs,
        env: childEnv,
        timeoutMs,
        maxOutputBytes: 256_000,
        abortSignal: input.signal,
      });
      spawnResult = {
        ok: !raw.timedOut && !raw.aborted && raw.exitCode === 0,
        exitCode: raw.exitCode,
        signal: raw.signal,
        timedOut: raw.timedOut,
        stopRequested: raw.aborted || Boolean(input.signal?.aborted),
        cursorAvailable: true,
        realCursorProcessInvoked: true,
        durationMs: raw.durationMs,
        stdout: raw.stdout,
        stderr: raw.stderr,
        errorCode: raw.aborted
          ? "STOPPED"
          : raw.timedOut
            ? "TIMED_OUT"
            : raw.exitCode === 0
              ? undefined
              : "FAILED_EXIT_CODE",
      };
    } catch (e) {
      spawnResult = {
        ok: false,
        exitCode: null,
        signal: null,
        timedOut: false,
        stopRequested: false,
        cursorAvailable: false,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - startedAt.getTime(),
        stdout: "",
        stderr: String(e),
        errorCode: "CURSOR_UNAVAILABLE",
      };
    }
  }

  log("cursor.spawn.completed", {
    exitCode: spawnResult.exitCode,
    timedOut: spawnResult.timedOut,
    stopRequested: spawnResult.stopRequested,
  });

  const afterFiles = listSandboxFiles(sandboxAbs);
  const afterFp = fileFingerprint(outputAbs);
  const afterStatus = git(["status", "--short"], workspaceRoot);
  const created = afterFiles.filter((f) => !beforeFiles.includes(f));
  const deleted = beforeFiles.filter((f) => !afterFiles.includes(f));
  const modified =
    beforeFp && afterFp && beforeFp !== afterFp && afterFiles.includes(INC_D_OUTPUT_REL)
      ? [INC_D_OUTPUT_REL]
      : [];

  const allowed = new Set([INC_D_OUTPUT_REL]);
  const outOfAllowlist = [...created, ...modified, ...deleted].filter((f) => !allowed.has(f));

  // Detect escape probe from fake port
  const escapeProbe = path.resolve(sandboxAbs, "..", "ESCAPE_PROBE.md");
  if (existsSync(escapeProbe)) {
    outOfAllowlist.push(path.relative(workspaceRoot, escapeProbe));
    cleanupFakeOutsideProbe(sandboxAbs);
  }

  proofs.writeJson("inc-d-post-snapshot.json", {
    files: afterFiles,
    outputFingerprint: afterFp,
    gitStatusShort: afterStatus,
    created,
    modified,
    deleted,
    outOfAllowlist,
  });

  // Remote writes proof (local only — no fetch during observation)
  const remoteWrites = 0;
  proofs.writeJson("inc-d-remote-proof.json", {
    remoteGitWrites: remoteWrites,
    networkEffect: "none",
    note: "No git fetch/push/pull during Cursor observation window",
    branchUnchanged: actualBranch === git(["branch", "--show-current"], workspaceRoot),
    headUnchanged: actualHead === git(["rev-parse", "HEAD"], workspaceRoot),
  });

  if (spawnResult.stopRequested) {
    return finish("STOPPED", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      stopRequested: true,
      cursorAvailable: spawnResult.cursorAvailable,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["STOP requested — new GO required for re-execution"],
    });
  }

  if (spawnResult.timedOut || spawnResult.errorCode === "TIMED_OUT") {
    return finish("TIMED_OUT", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      timeout: true,
      cursorAvailable: spawnResult.cursorAvailable,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["timeout ≠ GO", "timeout ≠ success", "new GO required"],
    });
  }

  if (!spawnResult.cursorAvailable || spawnResult.errorCode === "CURSOR_UNAVAILABLE") {
    return finish("CURSOR_UNAVAILABLE", {
      refusedBeforeSpawn: false,
      liveInvoked: false,
      actualBranch,
      actualHead,
      cursorAvailable: false,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: false,
    });
  }

  if (outOfAllowlist.length > 0 || spawnResult.errorCode === "POLICY_VIOLATION") {
    return finish("POLICY_VIOLATION", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["POLICY_VIOLATION — out-of-allowlist changes detected"],
    });
  }

  if (spawnResult.exitCode !== 0) {
    return finish("FAILED_EXIT_CODE", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
    });
  }

  if (!existsSync(outputAbs)) {
    return finish("REPORT_INCOMPLETE", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: 0,
      filesCreated: created,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["exit 0 but expected output.md missing"],
    });
  }

  const produced = readFileSync(outputAbs, "utf8");
  proofs.writeText("output.md.copy", produced);

  return finish("SUCCEEDED", {
    refusedBeforeSpawn: false,
    liveInvoked: spawnResult.realCursorProcessInvoked,
    actualBranch,
    actualHead,
    exitCode: 0,
    filesCreated: beforeFp ? [] : [INC_D_OUTPUT_REL],
    filesModified: beforeFp ? [INC_D_OUTPUT_REL] : [],
    filesDeleted: [],
    outOfAllowlistChanges: [],
    stdoutPreview: sanitizePreview(spawnResult.stdout),
    stderrPreview: sanitizePreview(spawnResult.stderr),
    realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
    markdownContent: produced,
    reservations: [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized",
    ],
  });
}

/** Helper for tests: remove sandbox output between runs. */
export function resetIncDSandboxOutput(workspaceRoot = INC_D_WORKSPACE_ROOT): void {
  const out = resolveIncDOutputAbs(workspaceRoot);
  if (existsSync(out)) unlinkSync(out);
  const dir = resolveIncDSandboxAbs(workspaceRoot);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, ".gitkeep"), "", "utf8");
}

export { INC_D_SANDBOX_REL, INC_D_OUTPUT_REL, INC_D_TIMEOUT_MS, INC_D_LIVE_FLAG, INC_D_OBSERVE_FLAG };

```

### projects/sfia-studio/harness/tests/increment-d.test.ts

Path: `projects/sfia-studio/harness/tests/increment-d.test.ts`

```
import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  buildIncrementDContract,
  hashIncrementDContract,
  makeIncrementDGo,
} from "../src/increment-d/executionContract.js";
import {
  resetIncDSandboxOutput,
  runIncrementDSandbox,
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
} from "../src/increment-d/cursorSandboxRunner.js";
import { INC_D_WORKSPACE_ROOT, resolveIncDOutputAbs } from "../src/increment-d/sandboxPaths.js";
import { filterSpikeEnv } from "../src/ports/cursorRealSpike.js";

function tmpProof(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-d-"));
}

function gitCurrent(): { branch: string; head: string } {
  const branch = execFileSync("git", ["branch", "--show-current"], {
    cwd: INC_D_WORKSPACE_ROOT,
    encoding: "utf8",
  }).trim();
  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: INC_D_WORKSPACE_ROOT,
    encoding: "utf8",
  }).trim();
  return { branch, head };
}

function validBundle(overrides: {
  gate?: ReturnType<typeof makeIncrementDGo> | null;
  fakeBehavior?: Parameters<typeof runIncrementDSandbox>[0]["fakeBehavior"];
  fakeDelayMs?: number;
  signal?: AbortSignal;
  mode?: "fixture" | "live";
  expectedBranch?: string;
  expectedHead?: string;
  contractId?: string;
} = {}) {
  const proofDir = tmpProof();
  const { branch, head } = gitCurrent();
  const contract = buildIncrementDContract({
    contractId: overrides.contractId ?? "ctr-inc-d-001",
    requestId: "req-inc-d-001",
    proofDir,
    expectedBranch: overrides.expectedBranch ?? branch,
    expectedHead: overrides.expectedHead ?? head,
  });
  const contractHash = hashIncrementDContract(contract);
  const gate =
    overrides.gate === null
      ? null
      : (overrides.gate ??
        makeIncrementDGo({
          decisionId: `go-inc-d-${Date.now()}-${Math.random()}`,
          requestId: contract.requestId,
          contractHash,
          branch: contract.expectedBranch,
          head: contract.expectedHead,
          allowlist: contract.allowedPaths,
        }));
  return {
    input: {
      requestId: contract.requestId,
      correlationId: "corr-inc-d-001",
      contractId: contract.contractId,
      expectedBranch: contract.expectedBranch,
      expectedHead: contract.expectedHead,
      gate,
      proofDir,
      mode: overrides.mode ?? ("fixture" as const),
      fakeBehavior: overrides.fakeBehavior,
      fakeDelayMs: overrides.fakeDelayMs,
      signal: overrides.signal,
    },
    contract,
    contractHash,
  };
}

beforeEach(() => {
  resetIncDSandboxOutput();
});

describe("Increment D — gate / revalidation", () => {
  it("valid anchored GO allows fixture spawn and writes output.md", async () => {
    const { input, contractHash } = validBundle();
    const r = await runIncrementDSandbox(input);
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.refusedBeforeSpawn).toBe(false);
    expect(r.report.contractHash).toBe(contractHash);
    expect(r.report.remoteGitWrites).toBe(0);
    expect(r.report.networkUsed).toBe(false);
    expect(r.report.analysisAuthorized).toBe(false);
    expect(r.report.authority.executionAuthorized).toBe(false);
    expect(existsSync(resolveIncDOutputAbs())).toBe(true);
    const md = readFileSync(resolveIncDOutputAbs(), "utf8");
    expect(md).toContain("SFIA Studio Increment D Sandbox Proof");
    expect(md).toContain("Remote Git writes: 0");
    expect(md).toContain("Candidate proof only");
  });

  it("absent GO refuses spawn", async () => {
    const { input } = validBundle({ gate: null });
    const r = await runIncrementDSandbox(input);
    expect(r.ok).toBe(false);
    expect(r.status).toBe("REFUSED_NO_GO");
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(existsSync(resolveIncDOutputAbs())).toBe(false);
  });

  it("wrong contractHash refuses spawn", async () => {
    const { input, contract } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-hash",
      requestId: contract.requestId,
      contractHash: "0".repeat(64),
      branch: contract.expectedBranch,
      head: contract.expectedHead,
      allowlist: contract.allowedPaths,
    });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.status).toBe("REFUSED_STALE_GO");
  });

  it("wrong HEAD refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-head",
      requestId: contract.requestId,
      contractHash,
      branch: contract.expectedBranch,
      head: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      allowlist: contract.allowedPaths,
    });
    input.expectedHead = "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(["REFUSED_STALE_GO", "REFUSED_NO_GO"]).toContain(r.status);
  });

  it("wrong branch refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-branch",
      requestId: contract.requestId,
      contractHash,
      branch: "not-this-branch",
      head: contract.expectedHead,
      allowlist: contract.allowedPaths,
    });
    input.expectedBranch = "not-this-branch";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
  });

  it("wrong allowlist refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-allow",
      requestId: contract.requestId,
      contractHash,
      branch: contract.expectedBranch,
      head: contract.expectedHead,
      allowlist: ["projects/sfia-studio/app"],
    });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.status).toBe("REFUSED_STALE_GO");
  });

  it("contract mutation after GO (hash mismatch) refuses spawn", async () => {
    const { input, contract } = validBundle();
    // GO was hashed for ctr-inc-d-001; change contractId so rebuilt hash differs
    input.contractId = "ctr-mutated-after-go";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(contract.contractId).toBe("ctr-inc-d-001");
  });
});

describe("Increment D — port / policy", () => {
  it("detects write outside allowlist as POLICY_VIOLATION", async () => {
    const { input } = validBundle({ fakeBehavior: "write-outside" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("POLICY_VIOLATION");
    expect(r.report.outOfAllowlistChanges.length).toBeGreaterThan(0);
  });

  it("exit nonzero → FAILED_EXIT_CODE", async () => {
    const { input } = validBundle({ fakeBehavior: "exit-nonzero" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("FAILED_EXIT_CODE");
    expect(r.report.exitCode).toBe(2);
  });

  it("exit 0 without file → REPORT_INCOMPLETE", async () => {
    const { input } = validBundle({ fakeBehavior: "success-no-file" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("REPORT_INCOMPLETE");
  });

  it("Cursor unavailable → CURSOR_UNAVAILABLE", async () => {
    const { input } = validBundle({ fakeBehavior: "unavailable" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
    expect(r.report.cursorAvailable).toBe(false);
  });

  it("child env filter strips OPENAI_API_KEY", () => {
    const env = filterSpikeEnv({
      PATH: "/usr/bin",
      HOME: "/tmp",
      OPENAI_API_KEY: "sk-should-not-pass",
      CURSOR_API_KEY: "cursor_should_not_pass",
      SFIA_CURSOR_BIN: "/bin/true",
    });
    expect(env.OPENAI_API_KEY).toBeUndefined();
    expect(env.CURSOR_API_KEY).toBeUndefined();
    expect(env.PATH).toBe("/usr/bin");
  });

  it("sandbox relative path is canonical Increment D", () => {
    expect(INC_D_SANDBOX_REL).toBe("projects/sfia-studio/.sandbox/increment-d");
    expect(INC_D_OUTPUT_REL).toBe("output.md");
  });
});

describe("Increment D — STOP / timeout", () => {
  it("STOP interrupts stoppable-slow fake port", async () => {
    const ac = new AbortController();
    const { input } = validBundle({
      fakeBehavior: "stoppable-slow",
      fakeDelayMs: 5_000,
      signal: ac.signal,
    });
    setTimeout(() => ac.abort(), 30);
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("STOPPED");
    expect(r.report.stopRequested).toBe(true);
    expect(r.ok).toBe(false);
  });

  it("STOP does not create a new GO (report requires Morris)", async () => {
    const ac = new AbortController();
    const { input } = validBundle({
      fakeBehavior: "stoppable-slow",
      fakeDelayMs: 5_000,
      signal: ac.signal,
    });
    setTimeout(() => ac.abort(), 20);
    const r = await runIncrementDSandbox(input);
    expect(r.report.morrisDecisionRequired).toBe(true);
    expect(r.report.authority.executionAuthorized).toBe(false);
  });

  it("timeout is not success and not a GO", async () => {
    const { input } = validBundle({ fakeBehavior: "timeout", fakeDelayMs: 20 });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("TIMED_OUT");
    expect(r.ok).toBe(false);
    expect(r.report.timeout).toBe(true);
    expect(r.report.reservations.join(" ")).toMatch(/timeout ≠ GO/i);
  });
});

describe("Increment D — remote / report authority", () => {
  it("success report asserts remoteGitWrites=0 and analysisAuthorized=false", async () => {
    const { input } = validBundle();
    const r = await runIncrementDSandbox(input);
    expect(r.report.remoteGitWrites).toBe(0);
    expect(r.report.analysisAuthorized).toBe(false);
    expect(r.liveInvoked).toBe(false);
    expect(r.report.mode).toBe("fixture");
  });

  it("live without flag refuses before real spawn", async () => {
    const { input } = validBundle({ mode: "live" });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.liveInvoked).toBe(false);
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
  });

  it("mintGate fixture builds GO and succeeds", async () => {
    const proofDir = tmpProof();
    const r = await runIncrementDSandbox({
      requestId: "req-mint",
      correlationId: "corr-mint",
      contractId: "ctr-mint",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      proofDir,
      mode: "fixture",
      mintGate: true,
    });
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.eventsLogged).toContain("cursor.gate.minted.fixture");
  });

  it("refusal is journaled", async () => {
    const { input } = validBundle({ gate: null });
    const r = await runIncrementDSandbox(input);
    expect(r.eventsLogged).toContain("cursor.gate.refused");
  });

  it("complete success report has required fields", async () => {
    const { input } = validBundle();
    const r = await runIncrementDSandbox(input);
    const rep = r.report;
    expect(rep.schemaVersion).toBeTruthy();
    expect(rep.executionId).toMatch(/^exec-inc-d-/);
    expect(rep.contractId).toBeTruthy();
    expect(rep.contractHash).toHaveLength(64);
    expect(rep.status).toBe("SUCCEEDED");
    expect(rep.startedAt).toBeTruthy();
    expect(rep.completedAt).toBeTruthy();
    expect(typeof rep.durationMs).toBe("number");
    expect(rep.morrisDecisionRequired).toBe(true);
  });

  it("no automatic relaunch after timeout", async () => {
    const { input } = validBundle({ fakeBehavior: "timeout", fakeDelayMs: 5 });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("TIMED_OUT");
    const spawnCount = r.eventsLogged.filter((e) => e === "cursor.spawn.requested").length;
    expect(spawnCount).toBe(1);
  });
});

```

### projects/sfia-studio/app/lib/harness/incrementDAction.ts

Path: `projects/sfia-studio/app/lib/harness/incrementDAction.ts`

```
"use server";

import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface IncrementDStudioRequest {
  requestId: string;
  correlationId: string;
  contractId: string;
  expectedBranch?: string;
  expectedHead?: string;
  gate?: unknown;
  mode: "fixture" | "live";
  mintGate?: boolean;
  fakeBehavior?: string;
}

export async function runIncrementDAction(req: IncrementDStudioRequest): Promise<unknown> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-d-"));
  const payloadPath = path.join(work, "inc-d.json");
  writeFileSync(
    payloadPath,
    `${JSON.stringify(
      {
        requestId: req.requestId,
        correlationId: req.correlationId,
        contractId: req.contractId,
        expectedBranch: req.expectedBranch ?? "pending",
        expectedHead: req.expectedHead ?? "pending",
        gate: req.gate ?? null,
        proofDir: path.join(work, "proof"),
        mode: req.mode,
        mintGate: req.mintGate === true && req.mode === "fixture",
        fakeBehavior: req.fakeBehavior ?? "success",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, "inc-d-run", payloadPath],
      {
        cwd: harnessRoot,
        maxBuffer: 8 * 1024 * 1024,
        env: {
          ...process.env,
          SFIA_CURSOR_REAL_SPIKE: "0",
          SFIA_GPT_REAL_SPIKE: "0",
          ...(req.mode === "live" ? { SFIA_CURSOR_INC_D_LIVE: "1" } : {}),
        },
      },
    );
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string; message?: string };
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout);
      } catch {
        /* fall through */
      }
    }
    return {
      ok: false,
      status: "FAILED_EXIT_CODE",
      errorCode: "ADAPTER_FORWARD_FAILED",
      errorMessage: e.message ?? "inc-d invoke failed",
      liveInvoked: false,
    };
  }
}

```

### projects/sfia-studio/app/__tests__/increment-d.test.tsx

Path: `projects/sfia-studio/app/__tests__/increment-d.test.tsx`

```
/**
 * @vitest-environment jsdom
 */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/harness/incrementDAction", () => ({
  runIncrementDAction: vi.fn(async () => ({
    ok: true,
    status: "SUCCEEDED",
    report: {
      status: "SUCCEEDED",
      contractId: "ctr-mock",
      contractHash: "abc123",
      actualBranch: "delivery/sfia-studio-poc-increment-d",
      actualHead: "0123456789ab",
      allowlistedWritePaths: ["projects/sfia-studio/.sandbox/increment-d/output.md"],
      filesCreated: ["output.md"],
      remoteGitWrites: 0,
      analysisAuthorized: false,
      mode: "fixture",
      reservations: ["Candidate proof only"],
    },
    markdownContent: "# SFIA Studio Increment D Sandbox Proof\n",
  })),
}));

let mockPathname = "/cycle-actif";
let mockSearch = "vs=VS-UX-05";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  mockPathname = "/cycle-actif";
  mockSearch = "vs=VS-UX-05";
});

describe("Increment D — Cycle actif UI", () => {
  it("exposes STOP with accessible name", () => {
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-stop-execution")).toHaveAttribute(
      "aria-label",
      expect.stringMatching(/STOP Morris/i),
    );
  });

  it("shows remote=0 expectation", () => {
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-remote-zero")).toHaveTextContent(/0/);
  });

  it("disables analysis CTA on report step", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    expect(screen.getByTestId("vs-inc-d-analyze-disabled")).toHaveTextContent(
      /Increment E non disponible/i,
    );
  });

  it("keeps CursorExecutionReport panel without fifth route", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-status")).toBeInTheDocument();
    expect(screen.getByTestId("vs-cycle-actif")).toBeInTheDocument();
  });
});

```

### projects/sfia-studio/app/e2e/increment-d.spec.ts

Path: `projects/sfia-studio/app/e2e/increment-d.spec.ts`

```
import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import fs from "fs";
import os from "os";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-d",
);
const harnessRoot = path.resolve(__dirname, "../../harness");
const workspaceRoot = path.resolve(__dirname, "../../../..");

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

function runIncDCli(payload: Record<string, unknown>): {
  ok: boolean;
  status: string;
  report?: { remoteGitWrites?: number; analysisAuthorized?: boolean };
  refusedBeforeSpawn?: boolean;
} {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e2e-inc-d-"));
  const payloadPath = path.join(dir, "payload.json");
  const proofDir = path.join(dir, "proof");
  fs.writeFileSync(
    payloadPath,
    JSON.stringify({ ...payload, proofDir }, null, 2),
    "utf8",
  );
  const tsx = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cli = path.join(harnessRoot, "src/cli.ts");
  try {
    const stdout = execFileSync(process.execPath, [tsx, cli, "inc-d-run", payloadPath], {
      cwd: harnessRoot,
      encoding: "utf8",
      env: { ...process.env, SFIA_CURSOR_REAL_SPIKE: "0", SFIA_GPT_REAL_SPIKE: "0" },
      maxBuffer: 8 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string };
    if (e.stdout) return JSON.parse(e.stdout);
    throw err;
  }
}

test.describe("Increment D — UI Cycle actif", () => {
  test("STOP keyboard-visible + remote=0 + analyse E disabled + 4 routes", async ({
    page,
  }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await expect(page.getByTestId("vs-stop-execution")).toBeVisible();
    await expect(page.getByTestId("vs-inc-d-remote-zero")).toContainText("0");
    await page.goto("/cycle-actif?vs=VS-UX-06");
    await expect(page.getByTestId("vs-inc-d-status")).toBeVisible();
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toContainText(
      /Increment E non disponible/i,
    );
    await expect(page).toHaveURL(/cycle-actif/);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-cycle-actif-ready.png"),
      fullPage: true,
    });
  });

  test("fixture harness run via UI produces report", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-inc-d-run-fixture").click();
    await expect(page.getByTestId("vs-inc-d-status")).toBeVisible({ timeout: 90_000 });
    await expect(page.getByTestId("vs-inc-d-remote")).toContainText("0");
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-fixture-report.png"),
      fullPage: true,
    });
  });

  test("STOP banner distinct from NO-GO", async ({ page }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-stop-execution").click();
    await expect(page.getByTestId("vs-stop-timeout")).toContainText("STOP");
    await expect(page.getByTestId("vs-inc-d-stop-banner")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-stop.png"),
      fullPage: true,
    });
  });
});

test.describe("Increment D — deterministic harness CLI (E2E gate)", () => {
  test("nominal mintGate fixture → SUCCEEDED + remote=0", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-ok",
      correlationId: "corr-e2e-inc-d-ok",
      contractId: "ctr-e2e-inc-d-ok",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "success",
    });
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.report?.remoteGitWrites).toBe(0);
    expect(r.report?.analysisAuthorized).toBe(false);
  });

  test("absent GO refuses", () => {
    const branch = execFileSync("git", ["branch", "--show-current"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    const head = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-nogo",
      correlationId: "corr-e2e-inc-d-nogo",
      contractId: "ctr-e2e-inc-d-nogo",
      expectedBranch: branch,
      expectedHead: head,
      gate: null,
      mintGate: false,
      mode: "fixture",
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("REFUSED_NO_GO");
    expect(r.refusedBeforeSpawn).toBe(true);
  });

  test("policy violation outside allowlist", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-pol",
      correlationId: "corr-e2e-inc-d-pol",
      contractId: "ctr-e2e-inc-d-pol",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "write-outside",
    });
    expect(r.status).toBe("POLICY_VIOLATION");
  });

  test("Cursor unavailable", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-unavail",
      correlationId: "corr-e2e-inc-d-unavail",
      contractId: "ctr-e2e-inc-d-unavail",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "unavailable",
    });
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
  });

  test("exit nonzero", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-exit",
      correlationId: "corr-e2e-inc-d-exit",
      contractId: "ctr-e2e-inc-d-exit",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "exit-nonzero",
    });
    expect(r.status).toBe("FAILED_EXIT_CODE");
  });

  test("timeout ≠ GO", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-to",
      correlationId: "corr-e2e-inc-d-to",
      contractId: "ctr-e2e-inc-d-to",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "timeout",
      fakeDelayMs: 10,
    });
    expect(r.status).toBe("TIMED_OUT");
    expect(r.ok).toBe(false);
  });
});

```

### Sandbox .gitkeep

Path: `projects/sfia-studio/.sandbox/increment-d/.gitkeep` (empty marker; `output.md` ignored)

## Instruction Cursor exacte (sanitisée — générée par harness)

Reconstruite depuis `buildIncDCursorInstruction` + contenu Markdown attendu (pas de secret, pas d’OPENAI_API_KEY):

```
SFIA Studio Increment D — Cursor sandbox Markdown proof.
Repository root: <workspace>
Working directory (sandbox): <workspace>/projects/sfia-studio/.sandbox/increment-d
Write ONLY this relative file: output.md
Do not read secrets, .env, or API keys.
Do not modify any other file.
Do not run git commit, push, pull, fetch, checkout, reset, clean, rm, or any remote Git command.
Do not install dependencies.
Do not access the network.
If the sandbox path is missing or the scope diverges, stop immediately.
Write the following Markdown content exactly:
-----BEGIN MARKDOWN-----
# SFIA Studio Increment D Sandbox Proof
... (ids/hash/branche/HEAD as in output.md) ...
-----END MARKDOWN-----
Return a short completion note only.
```

instructionSha256Prefix: 0b80023d35996c71

## git status final (hors preuves tmp)

```
 M .gitignore
 M projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
 M projects/sfia-studio/harness/src/cli.ts
 M projects/sfia-studio/harness/src/index.ts
 M projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/.sandbox/
?? projects/sfia-studio/app/__tests__/increment-d.test.tsx
?? projects/sfia-studio/app/e2e/increment-d.spec.ts
?? projects/sfia-studio/app/lib/harness/incrementDAction.ts
?? projects/sfia-studio/harness/src/increment-d/
?? projects/sfia-studio/harness/src/types/cursorExecutionReport.ts
?? projects/sfia-studio/harness/tests/increment-d.test.ts

```

---
Fin review pack Increment D — contenu complet des fichiers créés/modifiés inclus ci-dessus.
