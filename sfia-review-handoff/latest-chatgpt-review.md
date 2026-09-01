# ChatGPT Review Pack — CORR-MW2-INT-02

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-01 23:00:00 CEST |
| **Cycle** | 8 — DOC — CRITICAL |
| **Classification** | CORR-MW2-INT-02 — FINAL CURRENT-TRAJECTORY + OPTION-B SEMANTIC ALIGNMENT |
| **Parent GO** | MW2 READINESS INTEGRATION PACKAGE (reused · no new Morris decision) |

## ChatGPT findings (Final PR Review)

1. doc08 CURRENT pointers still presented MW2 Readiness as next gate.
2. doc09 §11 could read as monotonic Strategy Class → reasoning effort progression.

## Morris decisions

None new. OD-02 Option B already consumed.

## Local Git Truth

| Item | Value |
| --- | --- |
| **Branch** | `docs/sfia-studio-nora-mw2-readiness-requalification` |
| **HEAD** | `ce719d7d59879c8c59485420d67e007bfeefca01` |
| **Prior CORR-INT-01** | `6d99257bee989c3ac190a4ed65c2ab5dd7e99af7` |
| **origin/main** | `b4fae68423bc0ab7cb0abcc49bedee8f7c44b405` |
| **PR #455** | DRAFT · head `ce719d7d59879c8c59485420d67e007bfeefca01` |

## Corrections applied

- doc08 §12 Roadmap disposition → consumed readiness + PRE-MW2 trajectory
- doc08 §14 verdict → NEXT PRODUCT PREREQUISITE PRE-MW2 · NEXT EXECUTION GATE Delivery after PRE-MW2
- doc09 §11 → STRATEGY CLASS ≠ REASONING EFFORT · workload-sensitive cells · illustrative/non-normatif

## Read-only verification

- **Roadmap:** Readiness VALIDATED · OD-02 CONSUMED · PRE-MW2 next · Delivery NOT AUTHORIZED — **UNCHANGED**
- **C5:** substantive source-lock unchanged — **UNCHANGED**
- **doc07:** Option C / OD04-I01 — **UNCHANGED**

## Project commit

SHA: `ce719d7d59879c8c59485420d67e007bfeefca01`
Message: `docs(sfia-studio): finalize MW2 readiness current truth`

## CI

PENDING at pack write — observe PR #455 after push.

## Anti-claims

- CORR ≠ new Morris decision · ≠ merge · ≠ PRE-MW2 · ≠ Delivery
- Strategy Class ≠ fixed effort mapping
- PR #455 ≠ merged

## Verdict

**MW2 READINESS INTEGRATION PACKAGE CORR-MW2-INT-02 — CURRENT TRAJECTORY ALIGNED — OPTION B SEMANTICS CONSISTENT — STRATEGY CLASS DECOUPLED FROM FIXED REASONING EFFORT — C5 SOURCE-LOCK PRESERVED — CI PENDING — PRE-MW2 OPEN — MW2 DELIVERY NOT AUTHORIZED — READY FOR CHATGPT FINAL PR PASS + MORRIS MERGE DECISION**

---

## doc08 §12 modified (complete)

## 12. Impact documentaire

| Source | Disposition |
| --- | --- |
| Build Doctrine | **R22 ACTIVE ON MAIN** via PR #453 ; pas de modèle spécifique figé dans la doctrine |
| Convergence Roadmap | **KEEP** · **CURRENT trajectory:** MW2 Readiness **VALIDATED BY MORRIS** → OD-02 **OPTION B CONSUMED** → repository integration/post-merge verification (PR #455 · **≠ merged until Morris GO**) → **PRE-MW2-MODEL-BASELINE-01** → distinct Morris MW2 Delivery GO after PRE-MW2 satisfied · MW2 Delivery **NOT AUTHORIZED / NOT STARTED** · Production model routing **NOT SELECTED** · runtime v3 **NON ADOPTED** |
| C5 source-locked backlog | **KEEP source-lock** · pas de nouvelle story / pas de changement AC dans ce truth-sync |
| MW0 doc06 | **KEEP measurement contract** · historique validé non réécrit ; ce document consomme D0/R1/R2/R3 et le contrat model/reasoning |
| OD-04 doc07 | **KEEP architecture decision** · Option C preserved · lifecycle synchronisé après PR #453 |
| MW2 Readiness / OD-02 | **MW2 Readiness VALIDATED BY MORRIS** · **OD-02 OPTION B CONSUMED** (doc09) · **Delivery NOT AUTHORIZED** · next after post-merge = PRE-MW2 |

---



---

## doc08 §14 modified (complete)

## 14. Anti-claims et état courant

Cette trajectoire **VALIDATED — ACTIVE ON MAIN** via PR **#453** :

- La validation/intégration de cette trajectoire OpenAI-native-first par PR **#453 seule** **n’a pas** validé MW2 Readiness et **n’a pas** consommé OD-02.
- Ces gates ont été consommées **séparément** ensuite :
  - **MW2 Readiness VALIDATED BY MORRIS**
  - **OD-02 CONSUMED — OPTION B**
- Ce document **n’autorise pas** MW2 Delivery.
- **≠ production model selected** ;
- **≠ production model routing selected** ;
- **≠ Sol/Terra/Luna campaign already executed** ;
- **≠ Responses compaction adopted** ;
- **≠ new architecture** ;
- **≠ Cognitive Completion PROVEN** ;
- **≠ runtime v3 ADOPTED** ;
- OpenAI-native-first **≠** adoption automatique de chaque nouvelle capability fournisseur.

### Verdict de trajectoire actif

**OPENAI-NATIVE-FIRST — VALIDATED / ACTIVE ON MAIN VIA PR #453**
**GPT-5.6 — CURRENT NORA REAL EVIDENCE FAMILY / LIVE PROVIDER SNAPSHOT REVALIDABLE**
**GPT-5.6 LUNA + NONE — MW0/MW1 REAL-PROVEN STARTING POINT, NOT PRODUCTION ROUTING DECISION**
**MW2 READINESS — VALIDATED BY MORRIS**
**OD-02 — CONSUMED — OPTION B**
**MW2→MW6 OPENAI CAPABILITY FIT CHECK — REQUIRED BY ACTIVE TRAJECTORY**
**PRODUCTION MODEL ROUTING — NOT SELECTED**
**NEXT PRODUCT PREREQUISITE — PRE-MW2-MODEL-BASELINE-01 AFTER PR #455 INTEGRATION / POST-MERGE VERIFICATION**
**NEXT EXECUTION GATE — DISTINCT MORRIS GO — MW2 DELIVERY AFTER PRE-MW2 SATISFIED**
**MW2 DELIVERY — NOT AUTHORIZED / NOT STARTED**
**RUNTIME V3 — NON ADOPTED**


---

## doc09 §11 modified (complete + invariants)

## 11. Cognitive Strategy Class contract

Source-locked vocabulary: **Routine · Focused · Deep · High-Assurance**.

**Reading rule:** This table describes **typical cognitive posture** per Strategy Class — clarification · verification · source/tool posture · escalation · etc. It is **not** a normative mapping to reasoning effort levels.

**Invariant (OD-02 Option B):**

```text
STRATEGY CLASS ≠ REASONING EFFORT LEVEL.
```

Reasoning effort is selected from **real workload signals** under the governed Option B envelope. A stable/routine task may require **elevated** reasoning when volume, context size, verification demand, source breadth, tool dependency, contradiction risk, criticality, cost/latency tradeoffs, or other applicable workload signals justify it. Criticality/assurance posture and reasoning effort are **related but distinct axes**.

| Class | Workload | Clarification | Verification | Tool posture | Source posture | Reasoning posture *(ILLUSTRATIVE / NON-NORMATIF)* | Escalation/STOP | Cost/latency (qualitative) | Evidence needs | MW5 link |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Routine** | Low ambiguity · narrow scope · low contradiction | Minimal structural only | Light | As needed · low rounds | Single/narrow | Minimum-sufficient / workload-sensitive · **≠ obligatorily low** | Standard STOP rules | Low / fast | Basic adherence | — |
| **Focused** | Moderate depth · bounded sources | Proportional | Moderate reads | Moderate | Few sources | Minimum-sufficient / workload-sensitive · **≠ obligatorily medium** | Escalate if authority gap | Medium | Grounding on cited sources | — |
| **Deep** | High depth · multi-source · synthesis | As needed · no questionnaire | Strong verification | Higher tool rounds | Multi-doc | Typically deeper verification posture · effort remains **workload-sensitive** | STOP if sources insufficient | Higher / slower | Completeness · fabrication checks | — |
| **High-Assurance** | Critical Profile and/or high rigor signals | Explicit challenge before Critical Rec | Maximum before Critical outputs | Conservative | Broad/trusted | High-assurance verification/challenge posture · **≠ automatic max effort** | Refuse under-qualification · arm MW5 challenge | Highest | Authority · epistemic separation | **Critical challenge gate armed** |

**Invariant:** No permanent production model tier per class. Class selects **settings envelope**, not vendor SKU. Illustrative effort tendencies in this table **≠** production bounds · **≠** fixed class→effort table.

---



---

## CORR commit diff

```diff
commit ce719d7d59879c8c59485420d67e007bfeefca01
Author: Morris Cleland <morris@b0df88a9-1217-4c30-b0ab-357cdfea2c1f.home>
Date:   Tue Sep 1 22:57:20 2026 +0200

    docs(sfia-studio): finalize MW2 readiness current truth

    CORR-MW2-INT-02: align doc08 current trajectory pointers to consumed readiness and PRE-MW2 gate; decouple doc09 §11 Strategy Class from fixed reasoning effort under Option B.
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md b/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
index b910c5d0..2f189cc6 100644
--- a/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
+++ b/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
@@ -441,7 +441,7 @@ Ce document **n’autorise pas** les étapes 6→12.
 | Source | Disposition |
 | --- | --- |
 | Build Doctrine | **R22 ACTIVE ON MAIN** via PR #453 ; pas de modèle spécifique figé dans la doctrine |
-| Convergence Roadmap | **KEEP** · état/gate courant déjà compatible : MW1 CLOSED → MW2 Readiness/Requalification ; MW2 NOT AUTHORIZED ; Production model routing NOT SELECTED |
+| Convergence Roadmap | **KEEP** · **CURRENT trajectory:** MW2 Readiness **VALIDATED BY MORRIS** → OD-02 **OPTION B CONSUMED** → repository integration/post-merge verification (PR #455 · **≠ merged until Morris GO**) → **PRE-MW2-MODEL-BASELINE-01** → distinct Morris MW2 Delivery GO after PRE-MW2 satisfied · MW2 Delivery **NOT AUTHORIZED / NOT STARTED** · Production model routing **NOT SELECTED** · runtime v3 **NON ADOPTED** |
 | C5 source-locked backlog | **KEEP source-lock** · pas de nouvelle story / pas de changement AC dans ce truth-sync |
 | MW0 doc06 | **KEEP measurement contract** · historique validé non réécrit ; ce document consomme D0/R1/R2/R3 et le contrat model/reasoning |
 | OD-04 doc07 | **KEEP architecture decision** · Option C preserved · lifecycle synchronisé après PR #453 |
@@ -488,8 +488,11 @@ Cette trajectoire **VALIDATED — ACTIVE ON MAIN** via PR **#453** :
 **OPENAI-NATIVE-FIRST — VALIDATED / ACTIVE ON MAIN VIA PR #453**
 **GPT-5.6 — CURRENT NORA REAL EVIDENCE FAMILY / LIVE PROVIDER SNAPSHOT REVALIDABLE**
 **GPT-5.6 LUNA + NONE — MW0/MW1 REAL-PROVEN STARTING POINT, NOT PRODUCTION ROUTING DECISION**
+**MW2 READINESS — VALIDATED BY MORRIS**
+**OD-02 — CONSUMED — OPTION B**
 **MW2→MW6 OPENAI CAPABILITY FIT CHECK — REQUIRED BY ACTIVE TRAJECTORY**
 **PRODUCTION MODEL ROUTING — NOT SELECTED**
-**NEXT PRODUCT CAPABILITY — MW2 READINESS / REQUALIFICATION**
+**NEXT PRODUCT PREREQUISITE — PRE-MW2-MODEL-BASELINE-01 AFTER PR #455 INTEGRATION / POST-MERGE VERIFICATION**
+**NEXT EXECUTION GATE — DISTINCT MORRIS GO — MW2 DELIVERY AFTER PRE-MW2 SATISFIED**
 **MW2 DELIVERY — NOT AUTHORIZED / NOT STARTED**
 **RUNTIME V3 — NON ADOPTED**
diff --git a/projects/sfia-studio/nora-cognitive-completion/09-nora-mw2-cognitive-workload-profile-readiness.md b/projects/sfia-studio/nora-cognitive-completion/09-nora-mw2-cognitive-workload-profile-readiness.md
index f3f89507..bbc250c6 100644
--- a/projects/sfia-studio/nora-cognitive-completion/09-nora-mw2-cognitive-workload-profile-readiness.md
+++ b/projects/sfia-studio/nora-cognitive-completion/09-nora-mw2-cognitive-workload-profile-readiness.md
@@ -353,14 +353,24 @@ Signals are **INTERNAL** (C3 §10 — CWP INTERNAL · qualification disclosure u

 Source-locked vocabulary: **Routine · Focused · Deep · High-Assurance**.

-| Class | Workload | Clarification | Verification | Tool posture | Source posture | Reasoning posture | Escalation/STOP | Cost/latency (qualitative) | Evidence needs | MW5 link |
+**Reading rule:** This table describes **typical cognitive posture** per Strategy Class — clarification · verification · source/tool posture · escalation · etc. It is **not** a normative mapping to reasoning effort levels.
+
+**Invariant (OD-02 Option B):**
+
+```text
+STRATEGY CLASS ≠ REASONING EFFORT LEVEL.
+```
+
+Reasoning effort is selected from **real workload signals** under the governed Option B envelope. A stable/routine task may require **elevated** reasoning when volume, context size, verification demand, source breadth, tool dependency, contradiction risk, criticality, cost/latency tradeoffs, or other applicable workload signals justify it. Criticality/assurance posture and reasoning effort are **related but distinct axes**.
+
+| Class | Workload | Clarification | Verification | Tool posture | Source posture | Reasoning posture *(ILLUSTRATIVE / NON-NORMATIF)* | Escalation/STOP | Cost/latency (qualitative) | Evidence needs | MW5 link |
 | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
-| **Routine** | Low ambiguity · narrow scope · low contradiction | Minimal structural only | Light | As needed · low rounds | Single/narrow | Lower effort candidate | Standard STOP rules | Low / fast | Basic adherence | — |
-| **Focused** | Moderate depth · bounded sources | Proportional | Moderate reads | Moderate | Few sources | Medium effort candidate | Escalate if authority gap | Medium | Grounding on cited sources | — |
-| **Deep** | High depth · multi-source · synthesis | As needed · no questionnaire | Strong verification | Higher tool rounds | Multi-doc | Higher effort candidate | STOP if sources insufficient | Higher / slower | Completeness · fabrication checks | — |
-| **High-Assurance** | Critical Profile and/or high rigor signals | Explicit challenge before Critical Rec | Maximum before Critical outputs | Conservative | Broad/trusted | Highest **supported** effort envelope | Refuse under-qualification · arm MW5 challenge | Highest | Authority · epistemic separation | **Critical challenge gate armed** |
+| **Routine** | Low ambiguity · narrow scope · low contradiction | Minimal structural only | Light | As needed · low rounds | Single/narrow | Minimum-sufficient / workload-sensitive · **≠ obligatorily low** | Standard STOP rules | Low / fast | Basic adherence | — |
+| **Focused** | Moderate depth · bounded sources | Proportional | Moderate reads | Moderate | Few sources | Minimum-sufficient / workload-sensitive · **≠ obligatorily medium** | Escalate if authority gap | Medium | Grounding on cited sources | — |
+| **Deep** | High depth · multi-source · synthesis | As needed · no questionnaire | Strong verification | Higher tool rounds | Multi-doc | Typically deeper verification posture · effort remains **workload-sensitive** | STOP if sources insufficient | Higher / slower | Completeness · fabrication checks | — |
+| **High-Assurance** | Critical Profile and/or high rigor signals | Explicit challenge before Critical Rec | Maximum before Critical outputs | Conservative | Broad/trusted | High-assurance verification/challenge posture · **≠ automatic max effort** | Refuse under-qualification · arm MW5 challenge | Highest | Authority · epistemic separation | **Critical challenge gate armed** |

-**Invariant:** No permanent production model tier per class. Class selects **settings envelope**, not vendor SKU.
+**Invariant:** No permanent production model tier per class. Class selects **settings envelope**, not vendor SKU. Illustrative effort tendencies in this table **≠** production bounds · **≠** fixed class→effort table.

 ---


```
