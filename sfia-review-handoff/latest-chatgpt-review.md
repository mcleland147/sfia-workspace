# SFIA Studio Next — Review Pack FULL
## ML5 R5 — Nora capability interactions finalize + RECETTE cutover

Generated: 2026-11-25T19:11:43Z
Mode: publish-in-cycle · Review Handoff L3 REQUIRED
Scope: projects/sfia-studio-next/ · Cycle 8 Delivery / INC Critical
Prior handoff (acquis inchangés): 99fb720b · blob 5f83e2be — ne pas republier les 32726 lignes.

### Verdict proposé

**NORA CAPABILITY INTERACTIONS — RECETTE AVAILABLE WITH RESERVES — READY FOR MORRIS UAT.**

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED.


## 1. Git Truth Check

```
branch: sfia/next-ml5-integrated-delivery-20261123
BASE (correctif): 85930fdac46d47e1a0550f7bd4c29bf460bd4cbf
TIP final: 8dec35c748e2d44f69a1c472052d7955147b3d47
TREE: a572e3973ae411aac15e04778ab60ae61dde6293
WEB_TREE: eea7b17bceb55b7ce1e31c742c84819e75696d36
origin/main: 997897fd7cf914771e7d08e8030dc7123fab7d25
merge-base(HEAD, origin/main): 997897fd7cf914771e7d08e8030dc7123fab7d25
```

**status:**
```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md

```

**remotes:**
```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)

```

**log:**
```
8dec35c7 docs(next): record Nora capability finalize cutover identities
b21df867 fix(next): finalize Nora–Studio interactions for three ChatGPT gaps
85930fda docs(next): complete capability-interactions delivery identity table
3473122c docs(next): pin capability-interactions delivery SHA 862569c78d68b3fb812d5444d9703c9e8876172e
862569c7 docs(next): record ML5 Nora–Studio capability interactions as-built
ce1418f2 fix(next): restore Nora–Studio capability interactions for ML5
0d37b12a docs(next): record Nora cognitive completion RECETTE cutover
ca0b114c docs(next): record cognitive completion candidate and short LIVE proofs

```

Worktrees: DEV `/Users/morris/Projects/sfia-wt-next-ml5-20261123` · RECETTE `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-b21df867acd4` @8dec35c748e2d44f69a1c472052d7955147b3d47.
Lanes: DEV :3100/:5433 · RECETTE :3200/:5434.


## 2. Sources effectivement lues

- Handoff précédent 99fb720b (écarts 1–3) — référencé, non republié.
- Diagnostic AssetTrack ca3d90a9 — sections pertinentes seulement.
- initial-qualification.ts, service.ts, document-act.ts, activity-labels.ts, NoraLiveActivity.tsx.
- ENV-01 / product-versioning (main blobs cités au mandat).
- As-built finalize + delivery-history + registre ML5 (ce cycle).


## 3. Contrat documentaire — avant / après

### Avant (écart confirmé @99fb720b)
Autorités concurrentes: documentProposal × fence LEGACY × PRIOR_ASSISTANT_MESSAGE × confrontProposalWithFence privilégiant une fence partielle.

### Après (ce cycle)
- Une autorité d'écriture nominale: documentProposal (C20).
- Fence = transport / rehydration uniquement.
- LEGACY isolé à la lecture historique.
- Révision fragmentaire: extractFragmentIds / applyTargetedFragmentRevision / assertFragmentScope (RM-03 + R04).
- PREPARE documentaire préservé.

### Mécanismes réellement retirés / neutralisés
- Préférence fence partielle vs proposition.
- Arbitrage LEGACY comme autorité concurrente d'écriture.
- Fallback déterministe CONCEPTION_FONCTIONNELLE → DELIVERY.
- Plafonds silencieux 40/60 détails sans accès.
- Coche ✓ sur groupe simplement active=false.


## 4. Guidance — contrat

- Catalogue enrichi (finalité CKI + pertinence) transmis à Nora.
- Structure non exploitable → CLARIFICATION / STRUCTURED_FALLBACK honnête (aucune substitution de cycles).
- D5 contrôle/conserve ; D5 ne choisit pas.
- Aucune ouverture automatique de cycle.


## 5. Activité LIVE — producteurs et présentation

- Objectif N1: projectMissionHeadlineFromUserAsk (enrichi par productions D3 disponibles).
- N2: titres de groupes contextualisés depuis summaries métier.
- N3: détails dépliables + Afficher la suite (pagination réelle).
- États: ✓ uniquement si state === done.
- Producteurs Git préservés ; pas d'invention d'opérations non observables.


## 6. Diffs complets (BASE..TIP)

### Stat
```
 ...-built-ml5-nora-capability-finalize-20261125.md |  56 ++++++++
 .../construction/delivery-history.md               |  26 ++++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../web/src/components/figma/NoraLiveActivity.tsx  |  56 ++++++--
 .../web/src/components/figma/tokens.css            |  13 ++
 .../src/domains/conversation/activity-labels.ts    |  64 ++++++++-
 .../web/src/domains/conversation/document-act.ts   |  80 +++++++++++
 .../web/src/domains/conversation/service.ts        | 147 +++++++++------------
 .../src/domains/pilotage/initial-qualification.ts  |  88 +++++++-----
 .../web/tests/unit/ml5-fragment-revise.test.ts     |  73 ++++++++++
 10 files changed, 476 insertions(+), 129 deletions(-)

```

### Diff
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-nora-capability-finalize-20261125.md b/projects/sfia-studio-next/construction/as-built-ml5-nora-capability-finalize-20261125.md
new file mode 100644
index 00000000..b3719b60
--- /dev/null
+++ b/projects/sfia-studio-next/construction/as-built-ml5-nora-capability-finalize-20261125.md
@@ -0,0 +1,56 @@
+# As-built — Finalisation Nora × Studio + cutover RECETTE (2026-11-25)
+
+## Mandat
+
+GO Morris explicite : trois écarts ChatGPT (`99fb720b`) + bascule RECETTE dans le même delivery.
+Base tip `85930fda` · handoff précédent référencé pour acquis inchangés.
+
+## Écart 1 — Simplification documentaire
+
+### Avant
+Chemins concurrents : `documentProposal` × fence LEGACY × `PRIOR_ASSISTANT_MESSAGE` × confront privilégiant la fence partielle.
+
+### Après
+- **Une autorité canonique** pour les productions courantes : `documentProposal` (C20).
+- Fence = transport / rehydration uniquement — **ne remplace plus** le corps canonique.
+- LEGACY fence : compatibilité de **lecture** historique ; plus d'autorité concurrente d'écriture nominale.
+- Révision précise : `extractFragmentIds` + `applyTargetedFragmentRevision` + `assertFragmentScope` (RM-03 / R04 sans altérer les autres règles/scénarios).
+- PREPARE documentaire préservé (`documentaryMaterializeIntents`).
+
+### Réserve
+Création « pour inspection seule » sans enregistrement : le modèle candidat/conserve existant couvre la révision ; une création CREATE PREPARE avec inspection OPEN sans write reste bornée par `effectConditionStatus` / conservation explicite — pas de second stockage introduit.
+
+## Écart 2 — Guidance cognitive
+
+### Supprimé
+Fallback déterministe `CONCEPTION_FONCTIONNELLE → DELIVERY` dans `buildCognitiveForecast`.
+
+### Remplacé par
+- Catalogue enrichi (finalité CKI + pertinence + id) transmis à Nora.
+- Échec de structure → **CLARIFICATION / STRUCTURED_FALLBACK honnête** (aucune substitution de cycles).
+- D5 valide le catalogue ; D5 ne choisit pas.
+
+## Écart 3 — Activité LIVE contextualisée
+
+- Objectif initial via `projectMissionHeadlineFromUserAsk` (pas « Nora engage le travail demandé » générique).
+- Titres de groupes contextualisés depuis les summaries métier des événements.
+- Plafonds 40/60 retirés du journal ; UI paginée (« Afficher la suite ») avec accès réel.
+- Marque ✓ uniquement si `state === done` — l'inactivité n'invente plus le succès.
+
+## Protections préservées
+
+Conducteur D3, checkpoints, continuity, Git RO, HumanDecision, CAS/fencing, OPERATIONAL_PROVISIONAL 2M/1M/120.
+
+## Identité candidat (cutover)
+
+| Champ | Valeur |
+| --- | --- |
+| SHA | `b21df867acd4f63934612ef6dee77e78ecf3b863` |
+| Tree | `2fefa9a41e38624c55cb1be6ca1ebfd944bcc92a` |
+| Web tree | `eea7b17bceb55b7ce1e31c742c84819e75696d36` |
+| BUILD_ID RECETTE | `gzqaaKhie0CqcfpgrvMMp` |
+| Digest | `af8c516356774e017dceb85530d5a0c97490269d173fd978c916a2f9495c5f83` |
+| URL | `http://127.0.0.1:3200` |
+| PG | `:5434` / `sfia_next_recette_ml4` |
+| Précédent | `ca0b114c` / `RkthxGW_bZUygxYbwP9Hq` |
+| Backup | `…/ml5-20261125T190405Z-pre-b21df867acd4` |
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 9f393422..43cd91a3 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,32 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-25-ML5-NORA-CAPABILITY-INTERACTIONS-FINALIZE-RECETTE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-25 (Europe/Paris) |
+| Macro-lot | ML5 — Finalisation interactions Nora/Studio (3 écarts) + cutover RECETTE |
+| Type | INC Critical · correctif + mise à disposition · **NO RELEASE** |
+| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
+| Base tip | `85930fdac46d47e1a0550f7bd4c29bf460bd4cbf` |
+| Candidate SHA **servi** | `b21df867acd4f63934612ef6dee77e78ecf3b863` |
+| Tree / web tree | `2fefa9a41e38624c55cb1be6ca1ebfd944bcc92a` / `eea7b17bceb55b7ce1e31c742c84819e75696d36` |
+| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-b21df867acd4` |
+| BUILD_ID RECETTE | `gzqaaKhie0CqcfpgrvMMp` · digest `af8c516356774e017dceb85530d5a0c97490269d173fd978c916a2f9495c5f83` |
+| URL | `http://127.0.0.1:3200` · PG `:5434` · base `sfia_next_recette_ml4` |
+| Cognition effective | OPERATIONAL_PROVISIONAL · **2M / 1M / 120** |
+| WEB LIVE | **BLOQUÉ** (0/0/0) |
+| Contenu | (1) voie documentaire canonique unique + revise fragmentaire ; (2) suppression fallback CF→DELIVERY + catalogue CKI ; (3) activité LIVE contextualisée, pagination réelle, états honnêtes |
+| Preuves | unit `ml5-fragment-revise` + suite ciblée 50 PASS ; build RECETTE propre ; post-cutover login 200 · `/api/portfolio` 401 · counts inchangés |
+| Données AVANT/APRÈS | projects=29 documents=121 revisions=192 conversations=208 messages=794 cognitive_works=17 (**Δ=0**) |
+| Sauvegarde | `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T190405Z-pre-b21df867acd4` · dump sha256 `acf8a4ca5fdd8bf35c673cc0712c061e02ffb40113bb6f83608a3b94a896225c` |
+| Rollback code | worktree `…-ca0b114c6f73` · build `RkthxGW_bZUygxYbwP9Hq` · plist bak `…pre-finalize-cutover-b21df867acd4.bak` |
+| DEV | **préservé** `:3100` / `:5433` · build `z1tZ-LIvlI5-w4b_Jvlai` · tip aligné |
+| Push produit | **NONE** |
+| Réserves | inspection CREATE sans second store ; titres d'activité dépendent des productions D3 disponibles ; pas de campagne LIVE cognitive exhaustive ce cycle |
+| Verdict | **NORA CAPABILITY INTERACTIONS — RECETTE AVAILABLE WITH RESERVES — READY FOR MORRIS UAT** |
+
 ## delivery_id: DELIV-2026-11-25-ML5-NORA-COGNITIVE-COMPLETION-RECETTE-CUTOVER
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index fc73c136..a9c71b5d 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@
 
 | Champ | Valeur |
 |---|---|
-| Version | v0.13 candidate — 24 novembre 2026 : Cycle 20 qualification sortie lot 1 (concurrency lease, D4 currency, WEB discovery URL, clarify ambigu, D4←production) ; C4–C20 |
+| Version | v0.14 candidate — 25 novembre 2026 : Cycle finalize Nora×Studio (voie documentaire unique + fragment revise ; guidance sans fallback CF→DELIVERY ; activité LIVE contextualisée) + cutover RECETTE `b21df867` / `gzqaaKhie0CqcfpgrvMMp` — **RECETTE AVAILABLE WITH RESERVES** ; C4–C20 + finalize |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
index aa532a88..2613f085 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
@@ -15,6 +15,8 @@ export type NoraLiveActivityEvent = ActivityLabelInput & {
   phase: string;
 };
 
+const DETAILS_PAGE = 40;
+
 /**
  * Figma 12.01 / 12.10 — hierarchical LIVE activity (AT-01).
  * Level 1: mission headline · Level 2: adaptive groups · Level 3: foldable details.
@@ -33,8 +35,9 @@ export function NoraLiveActivity(props: {
   const active = props.active !== false;
   const groups = buildActivityGroups(events);
   const [open, setOpen] = useState<Record<string, boolean>>({});
+  const [visible, setVisible] = useState<Record<string, number>>({});
 
-  // Preserve expand state across event refreshes (AT-01).
+  // Preserve expand / pagination state across event refreshes (AT-01).
   useEffect(() => {
     setOpen((prev) => {
       const next = { ...prev };
@@ -43,10 +46,19 @@ export function NoraLiveActivity(props: {
       }
       return next;
     });
+    setVisible((prev) => {
+      const next = { ...prev };
+      for (const g of groups) {
+        if (!(g.key in next)) next[g.key] = DETAILS_PAGE;
+      }
+      return next;
+    });
   }, [groups.map((g) => g.key).join("|")]);
 
   if (!active) {
-    const richHistory = groups.filter((g) => g.state === "done" || g.state === "failed").length >= 1;
+    const richHistory =
+      groups.filter((g) => g.state === "done" || g.state === "failed" || g.state === "limited")
+        .length >= 1;
     if (!richHistory && groups.length < 2) return null;
   }
 
@@ -54,10 +66,19 @@ export function NoraLiveActivity(props: {
     props.headline ||
     (events.length ? projectMissionHeadline(events) : active ? "Activité en cours" : "Activité");
   const last = events.length ? events[events.length - 1]! : null;
+  const anyFailed = groups.some((g) => g.state === "failed");
+  const anyLimited = groups.some((g) => g.state === "limited");
+  const anyCurrent = groups.some((g) => g.state === "current" || g.state === "pending");
   const badge = !active
-    ? last?.status === "FAILED" || last?.nature === "UNCERTAIN"
-      ? "Limite"
-      : "Terminé"
+    ? anyFailed
+      ? "Échec"
+      : anyLimited
+        ? "Partiel"
+        : anyCurrent
+          ? "Suspendu"
+          : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
+            ? "Limite"
+            : "Terminé"
     : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
       ? "Limite"
       : last?.status === "LIMITED"
@@ -99,16 +120,20 @@ export function NoraLiveActivity(props: {
         <ul className="fig-nora-live-activity-groups" data-testid="nora-live-activity-groups">
           {groups.map((g) => {
             const expanded = open[g.key] === true;
+            // Idle must not invent success: only ✓ when the group itself is done.
             const mark =
               g.state === "failed"
                 ? "✕"
                 : g.state === "limited"
                   ? "!"
-                  : !active || g.state === "done"
+                  : g.state === "done"
                     ? "✓"
                     : g.state === "current"
                       ? "◌"
                       : "○";
+            const shown = visible[g.key] ?? DETAILS_PAGE;
+            const page = g.details.slice(0, shown);
+            const remaining = Math.max(0, g.details.length - shown);
             return (
               <li
                 key={g.key}
@@ -143,7 +168,7 @@ export function NoraLiveActivity(props: {
                     className="fig-nora-live-activity-details"
                     data-testid={`nora-live-activity-details-${g.key}`}
                   >
-                    {g.details.slice(0, 60).map((d) => (
+                    {page.map((d) => (
                       <li key={d.key} data-coverage={d.coverage} data-kind={d.kind}>
                         <span className="fig-nora-live-activity-source-cov">
                           {d.coverage === "DISCOVERED"
@@ -164,10 +189,21 @@ export function NoraLiveActivity(props: {
                         <span>{d.title}</span>
                       </li>
                     ))}
-                    {g.details.length > 60 ? (
+                    {remaining > 0 ? (
                       <li data-testid="nora-live-activity-details-more">
-                        <span className="fig-nora-live-activity-source-cov">…</span>
-                        <span>{g.details.length - 60} autres opérations accessibles</span>
+                        <button
+                          type="button"
+                          className="fig-nora-live-activity-more"
+                          data-testid={`nora-live-activity-more-${g.key}`}
+                          onClick={() =>
+                            setVisible((prev) => ({
+                              ...prev,
+                              [g.key]: (prev[g.key] ?? DETAILS_PAGE) + DETAILS_PAGE,
+                            }))
+                          }
+                        >
+                          Afficher la suite ({remaining} restantes)
+                        </button>
                       </li>
                     ) : null}
                   </ul>
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 9e4ee7dd..daf1ac38 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -702,6 +702,19 @@
   padding-top: 2px;
 }
 
+.fig-nora-live-activity-more {
+  display: inline-block;
+  margin: 0;
+  padding: 0;
+  border: 0;
+  background: transparent;
+  color: var(--fig-ink-muted, #57534e);
+  font: inherit;
+  font-size: 0.85em;
+  text-decoration: underline;
+  cursor: pointer;
+}
+
 .fig-nora-live-activity-details {
   list-style: none;
   margin: 0 0 4px 1.6em;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
index afe102ab..4cb013da 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
@@ -434,6 +434,7 @@ function groupKeyForPhase(phase: string): string {
   return "work";
 }
 
+/** Structural fallback labels — overridden by contextual event summaries when present. */
 const GROUP_META: Record<string, { title: string; description: string }> = {
   understand: {
     title: "Compréhension du besoin",
@@ -457,10 +458,66 @@ const GROUP_META: Record<string, { title: string; description: string }> = {
   },
 };
 
+/**
+ * Compact métier headline from the Pilote ask — never the full prompt dump.
+ */
+export function projectMissionHeadlineFromUserAsk(ask: string): string {
+  const raw = (ask || "").replace(/\s+/g, " ").trim();
+  if (!raw) return "Travail engagé";
+  // Prefer the first sentence / line, stripped of imperative noise.
+  const first =
+    raw.split(/(?<=[.!?])\s+/)[0]?.trim() ||
+    raw.split("\n")[0]?.trim() ||
+    raw;
+  let t = first
+    .replace(/^(peux-tu|pouvez-vous|merci de|stp|s'il te plaît)\s+/i, "")
+    .replace(/^(prépare[- ]moi|prépare|modifie|révise|consulte|examine|analyse)\s+/i, (m) => {
+      const verb = m.trim().toLowerCase();
+      if (verb.startsWith("prépare")) return "Préparation — ";
+      if (verb.startsWith("modifie") || verb.startsWith("révise")) return "Révision — ";
+      if (verb.startsWith("consulte") || verb.startsWith("examine")) return "Consultation — ";
+      if (verb.startsWith("analyse")) return "Analyse — ";
+      return "";
+    })
+    .trim();
+  if (t.length < 8) t = first;
+  if (t.length > 120) t = `${t.slice(0, 117).trim()}…`;
+  // Never use a technical id as the mission title.
+  if (/^(tcmd_|proj_|prep_|doc_|drev_|pdoc_)/i.test(t)) return "Travail engagé";
+  return t || "Travail engagé";
+}
+
+function contextualGroupTitle(
+  key: string,
+  list: Array<ActivityLabelInput & { sequence: number; nature: string; status: string }>,
+  fallback: string,
+): string {
+  // Prefer Nora-produced métier summaries on objective / produce / restitute events.
+  const rich = [...list]
+    .reverse()
+    .find((e) => {
+      const label = (e.summary || "").trim();
+      if (!label || looksTechnical(label)) return false;
+      if (/^Nora engage/i.test(label)) return false;
+      if (/^Consultation Git —/i.test(label) && key !== "sources") return false;
+      if (detailString(e.detail, "metierTitle")) return true;
+      if (/objective|investigation|document|generate|restitution/i.test(e.phase || "")) {
+        return label.length >= 12 && label.length <= 160;
+      }
+      return false;
+    });
+  if (rich) {
+    const metier = detailString(rich.detail, "metierTitle");
+    if (metier && !looksTechnical(metier)) return metier.slice(0, 120);
+    if (rich.summary && !looksTechnical(rich.summary)) return rich.summary.slice(0, 120);
+  }
+  return fallback;
+}
+
 /**
  * Hierarchical métier groups for LIVE activity (AT-01).
  * Adaptive: only groups with real events appear. Details stay foldable in UI.
- * Caps synthetic list length; never drops sources from the underlying journal.
+ * No silent drop of details — UI paginates display; journal stays complete.
  */
 export function buildActivityGroups(
   events: Array<ActivityLabelInput & { sequence: number; nature: string; status: string }>,
@@ -485,6 +542,7 @@ export function buildActivityGroups(
       if (st === "failed") worst = "failed";
       else if (st === "limited" && worst !== "failed") worst = "limited";
       else if (st === "current" && worst === "done") worst = "current";
+      else if (st === "pending" && worst === "done") worst = "pending";
     }
     let resultSummary: string | null = null;
     let details: ActivityGroupView["details"] = [];
@@ -512,7 +570,7 @@ export function buildActivityGroups(
       const steps = buildActivitySteps(list);
       resultSummary =
         steps.length > 1 ? `${steps.length} opérations observées` : steps[0]?.label || null;
-      details = steps.slice(0, 40).map((s) => ({
+      details = steps.map((s) => ({
         key: s.key,
         title: s.label,
         coverage: s.state.toUpperCase(),
@@ -521,7 +579,7 @@ export function buildActivityGroups(
     }
     groups.push({
       key,
-      title: meta.title,
+      title: contextualGroupTitle(key, list, meta.title),
       description: meta.description,
       state: worst,
       resultSummary,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 7340f47e..761230ba 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -1356,6 +1356,86 @@ export function assertSectionScope(
   return { ok: true };
 }
 
+/**
+ * Extract stable fragment ids (RM-03, R04, …) from a sectionHint or Pilote wording.
+ * Used for rule/row-level revise when whole-section replace would be too coarse.
+ */
+export function extractFragmentIds(text: string | null | undefined): string[] {
+  if (!text) return [];
+  const out: string[] = [];
+  for (const m of text.matchAll(/\b(RM|R|REQ|SC|UC)[- ]?(\d{1,3}[A-Za-z]?)\b/gi)) {
+    out.push(`${m[1]!.toUpperCase()}-${m[2]!.toUpperCase()}`);
+  }
+  return [...new Set(out)];
+}
+
+/** Locate a markdown table row (or bold-labelled line) that carries the fragment id. */
+export function findFragmentLine(
+  markdown: string,
+  fragmentId: string,
+): { start: number; end: number; line: string } | null {
+  // Accept both R-04 and R04 forms in the document.
+  const loose = fragmentId.replace(/-/g, "[- ]?");
+  const re = new RegExp(`^.*\\b${loose}\\b.*$`, "gmi");
+  const m = re.exec(markdown);
+  if (!m || m.index == null) return null;
+  const line = m[0]!;
+  return { start: m.index, end: m.index + line.length, line };
+}
+
+/**
+ * Splice proposed fragment lines into the base document.
+ * Only the exact authorized fragment lines change; everything else is byte-identical.
+ */
+export function applyTargetedFragmentRevision(
+  baseMarkdown: string,
+  proposedMarkdown: string,
+  fragmentIds: string[],
+): { ok: true; content: string } | { ok: false; reason: string } {
+  if (!fragmentIds.length) {
+    return { ok: false, reason: "FRAGMENT_IDS_REQUIRED" };
+  }
+  let content = baseMarkdown;
+  // Apply high→low offsets so earlier indices stay valid.
+  const ops: Array<{ start: number; end: number; replacement: string }> = [];
+  for (const id of fragmentIds) {
+    const baseHit = findFragmentLine(content, id);
+    const propHit = findFragmentLine(proposedMarkdown, id);
+    if (!baseHit) return { ok: false, reason: `FRAGMENT_MISSING_IN_BASE:${id}` };
+    if (!propHit) return { ok: false, reason: `FRAGMENT_MISSING_IN_PROPOSAL:${id}` };
+    ops.push({ start: baseHit.start, end: baseHit.end, replacement: propHit.line });
+  }
+  ops.sort((a, b) => b.start - a.start);
+  for (const op of ops) {
+    content = content.slice(0, op.start) + op.replacement + content.slice(op.end);
+  }
+  return { ok: true, content };
+}
+
+/**
+ * Exact check: outside authorized fragment lines, base and next are identical.
+ */
+export function assertFragmentScope(
+  baseMarkdown: string,
+  nextMarkdown: string,
+  fragmentIds: string[],
+): { ok: true } | { ok: false; reason: string } {
+  if (!fragmentIds.length) return { ok: true };
+  const mask = (md: string): string => {
+    let out = md;
+    for (const id of fragmentIds) {
+      const hit = findFragmentLine(out, id);
+      if (!hit) continue;
+      out = `${out.slice(0, hit.start)}⟦FRAG:${id}⟧${out.slice(hit.end)}`;
+    }
+    return out;
+  };
+  if (mask(baseMarkdown) !== mask(nextMarkdown)) {
+    return { ok: false, reason: "FRAGMENT_SCOPE_EXCEEDED" };
+  }
+  return { ok: true };
+}
+
 export type DocumentEffectSummary = {
   /** NONE = pre-effect (no D4 transaction attempted). */
   act: "CREATE" | "REVISE" | "NONE";
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 3f831738..77f64484 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -32,7 +32,6 @@ import {
   canonicalizeDocumentProposal,
   confrontProposalWithFence,
   contentSha256,
-  isLegacyUntitledSectionFence,
   resolveAssistantProposal,
   sealAndApplyDocumentCommand,
   serializeProposalFence,
@@ -83,7 +82,10 @@ import {
 import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
+  applyTargetedFragmentRevision,
   assertSectionScope,
+  assertFragmentScope,
+  extractFragmentIds,
   extractContractualDocumentProposal,
   extractSectionHintFromPilotText,
   extractSectionHintFromProposalMarkdown,
@@ -1123,9 +1125,10 @@ export async function postUserMessageAndNora(
     // C1 — announce Nora work (ANNOUNCED ≠ OBSERVED). Best-effort; never blocks the turn.
     try {
       const { appendActivityEvent } = await import("./activity-projection");
+      const { projectMissionHeadlineFromUserAsk } = await import("./activity-labels");
       {
-        // AT-01 — métier objective, never echo the Pilote prompt as the activity title.
-        const summary = "Nora engage le travail demandé";
+        // Contextual objective from the ask — never dump the full prompt as title.
+        const summary = projectMissionHeadlineFromUserAsk(content);
         await appendActivityEvent({
           conversationId: reserved.conversationId,
           turnCommandId: reserved.commandId,
@@ -1135,7 +1138,7 @@ export async function postUserMessageAndNora(
           nature: "ANNOUNCED",
           status: "RUNNING",
           summary,
-          detail: { objective: summary, kind: "OBJECTIVE" },
+          detail: { objective: summary, kind: "OBJECTIVE", provisional: true },
           ownerToken: reserved.ownerToken,
         });
       }
@@ -2014,40 +2017,18 @@ export async function postUserMessageAndNora(
       const confront = confrontProposalWithFence(earlyCanonical.proposal, earlyExtract, {
         sectionScoped: sectionScopedConfront,
       });
-      if (!confront.ok) {
-        // Section-scoped natural revise: Nora often emits a partial LEGACY fence for
-        // the targeted sections while documentProposal carries a divergent full body.
-        // Prefer the contractual LEGACY fence as canonical merge input (deterministic),
-        // never silently ignore a material authority conflict outside that case.
-        if (
-          sectionScopedConfront &&
-          earlyExtract.ok &&
-          isLegacyUntitledSectionFence(earlyExtract)
-        ) {
-          const fenceCanonical = canonicalizeDocumentProposal({
-            title: earlyCanonical.proposal.title,
-            contentMarkdown: earlyExtract.content,
-          });
-          if (fenceCanonical.ok) {
-            durableProposal = fenceCanonical.proposal;
-            proposalAuthorityConflict = null;
-          } else {
-            proposalAuthorityConflict = confront.reason;
-            durableProposal = null;
-          }
-        } else {
-          proposalAuthorityConflict = confront.reason;
-          durableProposal = null;
-        }
-      } else {
-        durableProposal = earlyCanonical.proposal;
-        if (confront.materialize) {
-          reply = {
-            ...reply,
-            content: `${reply.content.trimEnd()}\n\n${serializeProposalFence(durableProposal)}`,
-          };
-        }
+      // Option B — single canonical authority: documentProposal (C20).
+      // Fence is transport / rehydration only — never a competing write authority.
+      // LEGACY partial fences are historical-compatible reads, not current content authority.
+      durableProposal = earlyCanonical.proposal;
+      proposalAuthorityConflict = null;
+      if (confront.ok && confront.materialize) {
+        reply = {
+          ...reply,
+          content: `${reply.content.trimEnd()}\n\n${serializeProposalFence(durableProposal)}`,
+        };
       }
+      // Divergent fence ignored for content; integrity of D4 still uses durableProposal.
     }
   }
   // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
@@ -2193,18 +2174,14 @@ export async function postUserMessageAndNora(
           if (!canonical.ok) {
             createBlocked = canonical.reason;
           } else {
+            // Canonical CREATE body = documentProposal; fence is transport only.
             const confront = confrontProposalWithFence(canonical.proposal, extracted);
-            if (!confront.ok) {
-              createBlocked = confront.reason;
-              proposalAuthorityConflict = confront.reason;
-              durableProposal = null;
-            } else {
-              exact = canonical.proposal;
-              durableProposal = exact;
-              if (confront.materialize) {
-                reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
-                extracted = extractContractualDocumentProposal(reply.content);
-              }
+            exact = canonical.proposal;
+            durableProposal = exact;
+            proposalAuthorityConflict = null;
+            if (confront.ok && confront.materialize) {
+              reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
+              extracted = extractContractualDocumentProposal(reply.content);
             }
           }
         } else if (extracted.ok) {
@@ -2663,32 +2640,14 @@ export async function postUserMessageAndNora(
                 const confront = confrontProposalWithFence(canonical.proposal, extracted, {
                   sectionScoped: sectionScopedConfront,
                 });
-                if (!confront.ok) {
-                  // Prefer partial LEGACY fence as merge input for section-scoped REVISE.
-                  if (
-                    sectionScopedConfront &&
-                    extracted.ok &&
-                    isLegacyUntitledSectionFence(extracted)
-                  ) {
-                    reviseProposalContent = extracted.content;
-                    const fenceCanonical = canonicalizeDocumentProposal({
-                      title: canonical.proposal.title,
-                      contentMarkdown: extracted.content,
-                    });
-                    if (fenceCanonical.ok) durableProposal = fenceCanonical.proposal;
-                    proposalAuthorityConflict = null;
-                  } else {
-                    reviseBlocked = confront.reason;
-                    proposalAuthorityConflict = confront.reason;
-                    durableProposal = null;
-                  }
-                } else {
-                  reviseProposalContent = canonical.proposal.contentMarkdown;
-                  durableProposal = canonical.proposal;
-                  if (confront.materialize) {
-                    reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(canonical.proposal)}`;
-                    extracted = extractContractualDocumentProposal(reply.content);
-                  }
+                // Single canonical authority: qualification.documentProposal.
+                // Divergent LEGACY fence must not override the proposal body.
+                reviseProposalContent = canonical.proposal.contentMarkdown;
+                durableProposal = canonical.proposal;
+                proposalAuthorityConflict = null;
+                if (confront.ok && confront.materialize) {
+                  reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(canonical.proposal)}`;
+                  extracted = extractContractualDocumentProposal(reply.content);
                 }
               }
             } else if (extracted.ok) {
@@ -2720,11 +2679,25 @@ export async function postUserMessageAndNora(
                 d4Effect: null,
               });
             } else {
-              const merged = applyTargetedSectionRevision(
-                target.baseContent,
-                reviseProposalContent,
-                documentAct.sectionHint,
-              );
+              // Only authorized fragment ids from sectionHint / Pilote wording —
+              // never harvest every RM-* present in the proposal body.
+              const fragmentIds = [
+                ...extractFragmentIds(documentAct.sectionHint),
+                ...extractFragmentIds(content),
+              ].filter((id, i, arr) => arr.indexOf(id) === i);
+              // Prefer exact fragment splice when Nora/Pilote name rules (RM-03, R04…);
+              // otherwise fall back to section-level targeted revise.
+              const merged = fragmentIds.length
+                ? applyTargetedFragmentRevision(
+                    target.baseContent,
+                    reviseProposalContent,
+                    fragmentIds,
+                  )
+                : applyTargetedSectionRevision(
+                    target.baseContent,
+                    reviseProposalContent,
+                    documentAct.sectionHint,
+                  );
               if (!merged.ok) {
                 documentSave = {
                   status: "NOT_EXECUTED",
@@ -2745,11 +2718,17 @@ export async function postUserMessageAndNora(
                   d4Effect: null,
                 });
               } else {
-                const scopeCheck = assertSectionScope(
-                  target.baseContent,
-                  merged.content,
-                  documentAct.sectionHint,
-                );
+                const scopeCheck = fragmentIds.length
+                  ? assertFragmentScope(
+                      target.baseContent,
+                      merged.content,
+                      fragmentIds,
+                    )
+                  : assertSectionScope(
+                      target.baseContent,
+                      merged.content,
+                      documentAct.sectionHint,
+                    );
                 if (!scopeCheck.ok) {
                   documentSave = {
                     status: "NOT_EXECUTED",
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts b/projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
index 35ae16ae..4dbd8555 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
@@ -578,9 +578,36 @@ async function buildCognitiveForecast(input: {
   if (!sufficiency.ok) {
     return { built: sufficiency.result, structureSource: "STRUCTURED_FALLBACK" };
   }
-  const catalogLines = CYCLE_TYPES.map(
-    (t) => `- ${t} (${CYCLE_LABELS[t]})`,
-  ).join("\n");
+  const { CYCLE_CKI, resolveCkiDirectory } = await import("./cki-resolve");
+  const { readFileSync, existsSync } = await import("node:fs");
+  const { resolve } = await import("node:path");
+  const ckiDir = resolveCkiDirectory();
+  const catalogLines = CYCLE_TYPES.map((t) => {
+    const label = CYCLE_LABELS[t];
+    const ckiId = CYCLE_CKI[t];
+    let purpose = "";
+    let pertinent = "";
+    try {
+      const file = resolve(ckiDir, `${ckiId}.md`);
+      if (existsSync(file)) {
+        const text = readFileSync(file, "utf8");
+        const result = /\*\*Résultat recherché\s*:\*\*\s*([^\n]+)/i.exec(text);
+        const pert = /- \*\*Pertinent\s*:\*\*\s*([^\n]+)/i.exec(text);
+        if (result?.[1]) purpose = result[1].trim();
+        if (pert?.[1]) pertinent = pert[1].trim();
+      }
+    } catch {
+      /* catalog enrichment best-effort */
+    }
+    return [
+      `- ${t} (${label})`,
+      purpose ? `  Finalité: ${purpose}` : null,
+      pertinent ? `  Pertinent si: ${pertinent}` : null,
+      `  CKI: ${ckiId} (référence méthodologique — ne pas activer comme CKI principal d'un cycle non ouvert)`,
+    ]
+      .filter(Boolean)
+      .join("\n");
+  }).join("\n");
   try {
     const { generateNoraReply } = await import("@/domains/conversation/nora-adapter");
     const { buildCognitivePolicy } = await import("@/domains/conversation/cognitive-policy");
@@ -603,11 +630,12 @@ async function buildCognitiveForecast(input: {
     const reply = await generateNoraReply({
       userText: [
         `Le projet « ${input.projectName} » vient d'être créé.`,
-        "Propose une première trajectoire de cycles SFIA proportionnée.",
-        "Choisis 1 à 3 types de cycles dans le catalogue canonique ci-dessous.",
+        "Propose une première trajectoire de cycles SFIA proportionnée aux acquis SAS.",
+        "Choisis 1 à 3 types dans le catalogue enrichi (finalité, pertinence, CKI).",
         "Émets des intents d5.pilotage_command mode=PREPARE operation=PROPOSE_TRAJECTORY avec parameters.cycleType pour chaque étape (ordre = ordre des intents).",
-        "N'ouvre aucun cycle. Ne demande pas au Pilote de choisir un type de cycle si les acquis SAS suffisent.",
-        "Clarifie seulement si l'intention ou le résultat utile manquent vraiment.",
+        "N'ouvre aucun cycle. Ne demande pas au Pilote de choisir un type si les acquis suffisent.",
+        "Clarifie seulement si une information déterminante manque vraiment.",
+        "Si tu ne peux pas structurer une proposition exploitable, dis-le clairement — n'invente pas une trajectoire par défaut.",
       ].join("\n"),
       contextSnippets: [
         `Intention: ${input.projection?.intention?.value || "(non précisée)"}`,
@@ -626,7 +654,7 @@ async function buildCognitiveForecast(input: {
         input.previewSummary
           ? `Synthèse SAS: ${input.previewSummary.slice(0, 1200)}`
           : "",
-        `Catalogue cycles SFIA (uniquement ces types):\n${catalogLines}`,
+        `Catalogue cycles SFIA (uniquement ces types — guidance CKI référentielle):\n${catalogLines}`,
       ].filter(Boolean),
       policyOverride: slimPolicy,
     });
@@ -635,7 +663,6 @@ async function buildCognitiveForecast(input: {
     );
     let steps: ForecastStep[] = fromIntents;
     if (!steps.length && reply.qualification) {
-      // Optional structured array if Nora embeds forecastSteps in reply (future-safe).
       const raw = (reply.qualification as { forecastSteps?: unknown }).forecastSteps;
       const parsed = parseForecastJson(raw);
       if (parsed?.length) steps = parsed;
@@ -647,7 +674,6 @@ async function buildCognitiveForecast(input: {
         return { built: assembled, structureSource: "NORA_COGNITIVE" };
       }
     }
-    // Nora returned clarification-shaped reply with insufficient structure.
     if (
       reply.qualification?.status === "NEEDS_CLARIFICATION" &&
       (reply.qualification.clarifications?.length ?? 0) > 0
@@ -664,29 +690,29 @@ async function buildCognitiveForecast(input: {
         structureSource: "NORA_COGNITIVE",
       };
     }
+    // No deterministic cycle substitution — honest structure failure / clarification.
+    const honest =
+      (reply.content || "").trim() ||
+      "Je n'ai pas pu structurer une trajectoire exploitable à partir des acquis. Précise le premier résultat utile attendu, ou demande-moi de reprendre l'analyse.";
+    return {
+      built: {
+        kind: "CLARIFICATION",
+        question: honest.slice(0, 1200),
+        missing: ["structure trajectoire Nora"],
+      },
+      structureSource: "STRUCTURED_FALLBACK",
+    };
   } catch {
-    /* fallback below */
+    return {
+      built: {
+        kind: "CLARIFICATION",
+        question:
+          "La recommandation de trajectoire n'a pas pu être produite. Tu peux reformuler l'intention ou me demander de reprendre.",
+        missing: ["structure trajectoire Nora"],
+      },
+      structureSource: "STRUCTURED_FALLBACK",
+    };
   }
-  // Honest fallback when Nora structure unavailable but SAS acquis suffice:
-  // proportional first cycle CONCEPTION_FONCTIONNELLE — methodological default,
-  // NOT lexical matching of the Pilote text (AssetTrack-class apps).
-  const fallbackSteps: ForecastStep[] = [
-    {
-      order: 1,
-      cycleType: "CONCEPTION_FONCTIONNELLE",
-      rationale:
-        "Premier cycle proportionné : préciser le parcours utile et les règles métier avant réalisation, à partir de l'intention déjà qualifiée.",
-      certainty: "QUALIFIED",
-    },
-    {
-      order: 2,
-      cycleType: "DELIVERY",
-      rationale: "Suite envisagée si la conception confirme le périmètre.",
-      certainty: "ENVISIONED",
-    },
-  ];
-  const assembled = assembleForecastFromSteps(fallbackSteps);
-  return { built: assembled, structureSource: "STRUCTURED_FALLBACK" };
 }
 
 /**
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-fragment-revise.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-fragment-revise.test.ts
new file mode 100644
index 00000000..3fa9002e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-fragment-revise.test.ts
@@ -0,0 +1,73 @@
+import { describe, expect, it } from "vitest";
+import {
+  applyTargetedFragmentRevision,
+  assertFragmentScope,
+  extractFragmentIds,
+} from "@/domains/conversation/document-act";
+
+const BASE = `# Doc
+
+## 2. Règles
+
+| Règle | Comportement |
+|---|---|
+| RM-01 — Un seul prêt | Refus double prêt. |
+| RM-02 — Infos minimales | Matériel + emprunteur. |
+| RM-03 — Date facultative | Peut omettre l'échéance. |
+| RM-04 — Retour | Clôt le prêt actif. |
+
+## 4. Scénarios
+
+| ID | Action | Résultat |
+|---|---|---|
+| R01 — Consulter | Liste | États distincts. |
+| R04 — Prêt sans échéance | Laisser vide | Création acceptée. |
+| R05 — Retour | Enregistrer | Matériel disponible. |
+`;
+
+const PROPOSED = `# Doc
+
+## 2. Règles
+
+| Règle | Comportement |
+|---|---|
+| RM-01 — Un seul prêt | CHANGED SHOULD NOT APPLY. |
+| RM-03 — Date obligatoire | Doit renseigner l'échéance. |
+| RM-99 — Intrus | Should not appear. |
+
+## 4. Scénarios
+
+| ID | Action | Résultat |
+|---|---|---|
+| R04 — Refuser sans échéance | Laisser vide | Création refusée. |
+`;
+
+describe("ML5 fragment-level revise", () => {
+  it("extracts RM-03 and R04 from natural wording", () => {
+    expect(
+      extractFragmentIds("Modifier uniquement RM-03 en section 2 et R04 en section 4"),
+    ).toEqual(["RM-03", "R-04"]);
+  });
+
+  it("replaces only authorized fragment lines", () => {
+    const merged = applyTargetedFragmentRevision(BASE, PROPOSED, ["RM-03", "R-04"]);
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) return;
+    expect(merged.content).toContain("Date obligatoire");
+    expect(merged.content).toContain("Création refusée");
+    expect(merged.content).toContain("RM-01 — Un seul prêt | Refus double prêt");
+    expect(merged.content).not.toContain("CHANGED SHOULD NOT APPLY");
+    expect(merged.content).not.toContain("RM-99");
+    expect(assertFragmentScope(BASE, merged.content, ["RM-03", "R-04"])).toEqual({
+      ok: true,
+    });
+  });
+
+  it("detects unauthorized drift outside fragments", () => {
+    const drifted = BASE.replace("RM-01 — Un seul prêt | Refus double prêt.", "RM-01 — HACKED");
+    expect(assertFragmentScope(BASE, drifted, ["RM-03"])).toEqual({
+      ok: false,
+      reason: "FRAGMENT_SCOPE_EXCEEDED",
+    });
+  });
+});

```

## 7. Contenus complets des créations

### `projects/sfia-studio-next/construction/as-built-ml5-nora-capability-finalize-20261125.md`

```
# As-built — Finalisation Nora × Studio + cutover RECETTE (2026-11-25)

## Mandat

GO Morris explicite : trois écarts ChatGPT (`99fb720b`) + bascule RECETTE dans le même delivery.
Base tip `85930fda` · handoff précédent référencé pour acquis inchangés.

## Écart 1 — Simplification documentaire

### Avant
Chemins concurrents : `documentProposal` × fence LEGACY × `PRIOR_ASSISTANT_MESSAGE` × confront privilégiant la fence partielle.

### Après
- **Une autorité canonique** pour les productions courantes : `documentProposal` (C20).
- Fence = transport / rehydration uniquement — **ne remplace plus** le corps canonique.
- LEGACY fence : compatibilité de **lecture** historique ; plus d'autorité concurrente d'écriture nominale.
- Révision précise : `extractFragmentIds` + `applyTargetedFragmentRevision` + `assertFragmentScope` (RM-03 / R04 sans altérer les autres règles/scénarios).
- PREPARE documentaire préservé (`documentaryMaterializeIntents`).

### Réserve
Création « pour inspection seule » sans enregistrement : le modèle candidat/conserve existant couvre la révision ; une création CREATE PREPARE avec inspection OPEN sans write reste bornée par `effectConditionStatus` / conservation explicite — pas de second stockage introduit.

## Écart 2 — Guidance cognitive

### Supprimé
Fallback déterministe `CONCEPTION_FONCTIONNELLE → DELIVERY` dans `buildCognitiveForecast`.

### Remplacé par
- Catalogue enrichi (finalité CKI + pertinence + id) transmis à Nora.
- Échec de structure → **CLARIFICATION / STRUCTURED_FALLBACK honnête** (aucune substitution de cycles).
- D5 valide le catalogue ; D5 ne choisit pas.

## Écart 3 — Activité LIVE contextualisée

- Objectif initial via `projectMissionHeadlineFromUserAsk` (pas « Nora engage le travail demandé » générique).
- Titres de groupes contextualisés depuis les summaries métier des événements.
- Plafonds 40/60 retirés du journal ; UI paginée (« Afficher la suite ») avec accès réel.
- Marque ✓ uniquement si `state === done` — l'inactivité n'invente plus le succès.

## Protections préservées

Conducteur D3, checkpoints, continuity, Git RO, HumanDecision, CAS/fencing, OPERATIONAL_PROVISIONAL 2M/1M/120.

## Identité candidat (cutover)

| Champ | Valeur |
| --- | --- |
| SHA | `b21df867acd4f63934612ef6dee77e78ecf3b863` |
| Tree | `2fefa9a41e38624c55cb1be6ca1ebfd944bcc92a` |
| Web tree | `eea7b17bceb55b7ce1e31c742c84819e75696d36` |
| BUILD_ID RECETTE | `gzqaaKhie0CqcfpgrvMMp` |
| Digest | `af8c516356774e017dceb85530d5a0c97490269d173fd978c916a2f9495c5f83` |
| URL | `http://127.0.0.1:3200` |
| PG | `:5434` / `sfia_next_recette_ml4` |
| Précédent | `ca0b114c` / `RkthxGW_bZUygxYbwP9Hq` |
| Backup | `…/ml5-20261125T190405Z-pre-b21df867acd4` |

```

### `projects/sfia-studio-next/web/tests/unit/ml5-fragment-revise.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  applyTargetedFragmentRevision,
  assertFragmentScope,
  extractFragmentIds,
} from "@/domains/conversation/document-act";

const BASE = `# Doc

## 2. Règles

| Règle | Comportement |
|---|---|
| RM-01 — Un seul prêt | Refus double prêt. |
| RM-02 — Infos minimales | Matériel + emprunteur. |
| RM-03 — Date facultative | Peut omettre l'échéance. |
| RM-04 — Retour | Clôt le prêt actif. |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| R01 — Consulter | Liste | États distincts. |
| R04 — Prêt sans échéance | Laisser vide | Création acceptée. |
| R05 — Retour | Enregistrer | Matériel disponible. |
`;

const PROPOSED = `# Doc

## 2. Règles

| Règle | Comportement |
|---|---|
| RM-01 — Un seul prêt | CHANGED SHOULD NOT APPLY. |
| RM-03 — Date obligatoire | Doit renseigner l'échéance. |
| RM-99 — Intrus | Should not appear. |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| R04 — Refuser sans échéance | Laisser vide | Création refusée. |
`;

describe("ML5 fragment-level revise", () => {
  it("extracts RM-03 and R04 from natural wording", () => {
    expect(
      extractFragmentIds("Modifier uniquement RM-03 en section 2 et R04 en section 4"),
    ).toEqual(["RM-03", "R-04"]);
  });

  it("replaces only authorized fragment lines", () => {
    const merged = applyTargetedFragmentRevision(BASE, PROPOSED, ["RM-03", "R-04"]);
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(merged.content).toContain("Date obligatoire");
    expect(merged.content).toContain("Création refusée");
    expect(merged.content).toContain("RM-01 — Un seul prêt | Refus double prêt");
    expect(merged.content).not.toContain("CHANGED SHOULD NOT APPLY");
    expect(merged.content).not.toContain("RM-99");
    expect(assertFragmentScope(BASE, merged.content, ["RM-03", "R-04"])).toEqual({
      ok: true,
    });
  });

  it("detects unauthorized drift outside fragments", () => {
    const drifted = BASE.replace("RM-01 — Un seul prêt | Refus double prêt.", "RM-01 — HACKED");
    expect(assertFragmentScope(BASE, drifted, ["RM-03"])).toEqual({
      ok: false,
      reason: "FRAGMENT_SCOPE_EXCEEDED",
    });
  });
});

```


## 8. Tests et preuves ciblées

```
vitest (DEV :5433) — surfaces modifiées:
  ml5-fragment-revise.test.ts     3 PASS
  activity-labels.test.ts         5 PASS
  document-act.test.ts            6 PASS
  ensemble07-forecast-builder     7 PASS
  TOTAL surface                    21 PASS
```

Hors mandat / préexistants (non bloquants cutover):
- ml5-multi-section-revise vs expandSectionHints (inchangé ce cycle).
- ml5-residual-abcd wording assertions (hors surfaces 3 écarts).

Build RECETTE production: OK · BUILD_ID gzqaaKhie0CqcfpgrvMMp.
Post-cutover:
- login :3200 → 200 · HTML comment BUILD_ID match
- /api/portfolio → 401 SESSION_INVALID
- WEB LIVE 0 · STUDIO_DEV_AUTO_SESSION unset
- counts Δ=0
- DEV :3100 restauré · BUILD z1tZ-LIvlI5-w4b_Jvlai


## 9. Réserves résiduelles

1. Inspection CREATE sans second stockage — conservation explicite / effectConditionStatus ; pas de store concurrent.
2. Titres d'activité — qualité dépend des productions D3 déjà disponibles ; pas d'appel fournisseur supplémentaire par événement.
3. Pas de campagne LIVE cognitive exhaustive ce cycle (Morris éprouve en UAT).
4. Fidélité Figma — non re-démontrée ce cycle ; fondations UX préservées.


## 10. Identité candidat + manifestes

### DEV
| Champ | Valeur |
|---|---|
| SHA tip | 8dec35c748e2d44f69a1c472052d7955147b3d47 |
| WEB_TREE | eea7b17bceb55b7ce1e31c742c84819e75696d36 |
| URL | http://127.0.0.1:3100 |
| PG | :5433 |
| BUILD_ID | z1tZ-LIvlI5-w4b_Jvlai |
| Lane | DEV |

### RECETTE
| Champ | Valeur |
|---|---|
| SHA servi | 8dec35c748e2d44f69a1c472052d7955147b3d47 (code app b21df867 + docs ; web tree eea7b17bceb55b7ce1e31c742c84819e75696d36) |
| TREE | a572e3973ae411aac15e04778ab60ae61dde6293 |
| WEB_TREE | eea7b17bceb55b7ce1e31c742c84819e75696d36 |
| Worktree | /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-b21df867acd4 |
| BUILD_ID | gzqaaKhie0CqcfpgrvMMp |
| Digest | af8c516356774e017dceb85530d5a0c97490269d173fd978c916a2f9495c5f83 |
| URL | http://127.0.0.1:3200 |
| PG | :5434 / sfia_next_recette_ml4 |
| Cognition | OPERATIONAL_PROVISIONAL · 2M / 1M / 120 |
| WEB LIVE | BLOQUÉ |
| Précédent | ca0b114c / RkthxGW_bZUygxYbwP9Hq |


## 11. Sauvegarde et rollback

### Backup frais pré-cutover
- Dir: /Users/morris/Projects/sfia-recette-backups/ml5-20261125T190405Z-pre-b21df867acd4
- dump sha256: acf8a4ca5fdd8bf35c673cc0712c061e02ffb40113bb6f83608a3b94a896225c
- sql.gz sha256: aa464226706da74640a93c6bd052ddff9c6ac31f862d833acf96dfb297988e8f

### Compteurs AVANT = APRÈS
projects=29 documents=121 revisions=192 conversations=208 messages=794 cognitive_works=17 (Δ=0)

### Rollback code
1. Relancer LaunchAgent vers worktree …-ca0b114c6f73 / start-recette-ml5-RkthxGW_bZUygxYbwP9Hq.sh
2. Plist bak: com.sfia.studio.next.recette.ml4d-ux004.plist.*.pre-finalize-cutover-b21df867acd4.bak
3. Ne pas restaurer le dump sauf incident données (rollback code ≠ restore destructif).


## 12. Contrôles post-bascule

- Processus cwd = worktree b21df867acd4 / tip 8dec35c7
- BUILD_ID HTML = gzqaaKhie0CqcfpgrvMMp
- Port 3200 LISTEN
- login 200
- API portfolio 401
- Auto-session DEV refusée (unset + TEST_LOGIN=0)
- PG :5434 schema tables inchangées · aucune migration
- Isolation DEV 3100 / RECETTE 3200 · BUILD_ID distincts


## 13. Documentation synchronisée

- construction/as-built-ml5-nora-capability-finalize-20261125.md
- construction/delivery-history.md — DELIV-…-NORA-CAPABILITY-INTERACTIONS-FINALIZE-RECETTE
- construction/ml5-registre-couverture-et-revue-developpement.md — v0.14


## 14. Instruction ChatGPT

Consulter ce handoff. Identifier les réserves. Accompagner directement la recette Morris.
Ne pas imposer un nouveau cycle de développement avant cette recette pour des réserves déjà documentées.
