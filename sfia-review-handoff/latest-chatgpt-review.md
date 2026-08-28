# ChatGPT Review Pack — FULL
# NORA COGNITIVE COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE — LOCAL CANDIDATE

**Timestamp (Europe/Paris):** 2026-08-28 22:25:55 CEST
**Cycle:** 2 — Conception fonctionnelle · **Profil:** CRITICAL · **Typologie:** DOC
**GO Morris:** START C2 CONCEPTION FONCTIONNELLE — CONSUMED
**Verdict cible:** NORA COGNITIVE COMPLETION — CYCLE 2 CONCEPTION FONCTIONNELLE — LOCAL CANDIDATE — READY FOR CHATGPT REVIEW
**Synthesis only:** FORBIDDEN

---

## 1. Local Git Truth

| Field | Value |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-cognitive-c2` |
| Branch | `docs/sfia-studio-nora-cognitive-completion-c2-functional-design` |
| HEAD / origin/main | `63430673dc4288919fbca078e1a9fd22f9e0a173` |
| Tree | `10a0b3d67f2a1a04fbfdb71950d6c894fcb0ae58` |
| Base expected | `63430673dc4288919fbca078e1a9fd22f9e0a173` |
| Project files | 1 created (C2 only) |
| git status | `?? .tmp-sfia-review/ · ?? projects/sfia-studio/nora-cognitive-completion/02-nora-cognitive-completion-conception-fonctionnelle.md` |
| REAL-B | `fix/sfia-studio-real-b-blocker-02` @ `967f4c2b35948492caeba5347bb02c7c420de490` · untouched |

---

## 2. Qualification SFIA

| Field | Value |
| --- | --- |
| Milestone | NORA COGNITIVE COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE |
| Capabilities | V3-F01/F05/F07/F11 + support F02/F04/F06/F08/F09/F12/F14/F15 |
| CKC | `02-conception-fonctionnelle.md` · candidate · guidance only |
| Fake/Real | N/A · ZERO REAL |

---

## 3. Convergence invariants

- Product Completion = COMPLETE / CLOSED
- C1 Nora = VALIDATED + INTEGRATED (PR #430) + truth sync (PR #431)
- C2 = AUTHORIZED FOR LOCAL FUNCTIONAL DESIGN ONLY
- C6 = CLOSED
- REAL-A = CONSUMED
- REAL-B published trajectory unchanged
- Cognitive Completion = NOT PROVEN
- C2 architecture = NOT SELECTED
- Agents SDK = NOT ADOPTED
- Delivery = NOT AUTHORIZED
- runtime v3 = NON ADOPTED

---

## 4. Coverage matrix

| Artifact | Coverage |
| --- | --- |
| NR-01…26 | 26/26 (§18) |
| CE-01…08 | 8/8 (§19) |
| NCC-BAR-01…14 | 14/14 (§14) |
| B0 Behavioral Reference | §5 complete |
| B1…B9 blocks | §7–§15 |
| OD register | §20 (open) |

**C2 stats:** 657 lines · 6318 words

---

## 5. Prohibited paths check

| Path | Modified |
| --- | --- |
| C1 Nora | NO |
| Roadmap / Build Doctrine | NO |
| app/ runtime | NO |
| REAL-B | NO |
| method/ prompts/ scripts/ | NO |

---

## 6. Project Git actions

| Action | Status |
| --- | --- |
| commit | **NO** |
| push | **NO** |
| PR | **NO** |
| merge | **NO** |

---

## 7. COMPLETE C2 DOCUMENT CONTENT

```markdown
# SFIA Studio — Nora Cognitive Completion — Cycle 2 Conception fonctionnelle

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio — Nora Cognitive Completion |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil document** | **CRITICAL** |
| **Typologie** | **DOC** — documentation-only · impact structurant aval |
| **Milestone** | NORA COGNITIVE COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE |
| **Statut** | **LOCAL CANDIDATE — NOT VALIDATED BY MORRIS — NOT INTEGRATED ON MAIN** |
| **GO Morris consommé (ouverture C2)** | **GO MORRIS — START NORA COGNITIVE COMPLETION C2 — CONCEPTION FONCTIONNELLE — DOC CRITICAL — NO DELIVERY** |
| **Baseline C1** | `01-nora-cognitive-completion-cadrage.md` — **CONTENT VALIDATED BY MORRIS** · PR **#430 MERGED** · post-merge truth sync PR **#431 MERGED** |
| **Base Git (construction)** | `origin/main` @ `63430673dc4288919fbca078e1a9fd22f9e0a173` · tree `10a0b3d67f2a1a04fbfdb71950d6c894fcb0ae58` |
| **Worktree construction** | `/Users/morris/Projects/sfia-workspace-nora-cognitive-c2` |
| **Branche construction** | `docs/sfia-studio-nora-cognitive-completion-c2-functional-design` |
| **CKC** | `method/.../pilots/02-conception-fonctionnelle.md` · `0.1.0` · **candidate** · guidance cognitive · **aucune autorité d'exécution** |
| **Processus externe** | SFIA v2.6 ChatGPT ↔ Cursor · **process-only** · **≠** doctrine runtime Studio |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NOT AUTHORIZED** |
| **REAL** | **ZERO REAL** (ce cycle) |
| **Agents SDK / Sessions / Hosted Web Search** | **NOT ADOPTED** · technology candidates downstream only |

> **Anti-claim de statut :** LOCAL CANDIDATE · **≠ CONTENT VALIDATED BY MORRIS** · **≠ GIT INTEGRATED** · **≠ ARCHITECTURE SELECTED** · **≠ AGENTS SDK ADOPTED** · **≠ DELIVERY AUTHORIZED** · **≠ REAL-B CLOSED** · **≠ COGNITIVE COMPLETION PROVEN** · **≠ RUNTIME V3 ADOPTED**

---

## 1. Executive summary

Ce document transforme les **26 responsabilités Nora (NR-01…NR-26)**, les **8 enablers cognitifs (CE-01…CE-08)** et la **Cognitive Completion Bar (NCC-BAR-01…14)** définis en C1 en **comportements fonctionnels testables** — sans sélectionner architecture technique, persistence, schema, API, Agents SDK, Sessions, Hosted Web Search, ni routing modèle définitif.

**Principe directeur :** C1 répond *quelles* capacités cognitives Nora doit posséder ; C2 répond *comment* Nora doit se comporter pour les exercer de façon naturelle, fiable, adaptative et gouvernée.

**Méthode de conception :**
1. Partir des responsabilités Product Completion et de la doctrine v3.
2. Abstraire les comportements utiles du workflow externe Morris ↔ ChatGPT ↔ Cursor (B0 — **OBSERVED BEHAVIOR INPUT**, pas doctrine).
3. Définir modèles d'interaction, workload, mémoire, sourcing, compaction, épistémologie, narration/preuve, eval et genericité.
4. Tracer chaque NR → comportement → CE → NCC-BAR avec critères observables.

**Ce C2 ne décide pas** comment implémenter. Il prépare C3+ (Experience delta, architecture fonctionnelle/technique si besoin réel, delivery slices, Cognitive REAL campaigns).

---

## 2. Autorité, sources et hiérarchie

### 2.1 Hiérarchie d'autorité

```text
Git courant / Evidence résolue / preuves runtime
> HumanDecision Pilote (arbitrages produit runtime)
> Décisions Morris enregistrées (construction / gouvernance repo SFIA Studio)
> Product Completion CLOSED + C1 Nora VALIDATED/INTEGRATED
> Build Doctrine / Convergence Roadmap (read-only)
> doctrine v3 framing 30–37 (read-only)
> REAL-A consumed evidence
> REAL-B local observations (intermediate only — ≠ published truth)
> CKC Conception fonctionnelle (candidate — guidance only)
> Processus externe SFIA v2.6 (process-only)
> OBSERVED BEHAVIOR INPUT (B0 — workflow ChatGPT↔Cursor)
> Hypothesis / Option / Recommendation (sans autorité)
```

### 2.2 Sources effectivement mobilisées

| Source | Rôle dans ce C2 |
| --- | --- |
| `01-nora-cognitive-completion-cadrage.md` | NR/CE/BAR · gaps · OD · trajectoire |
| `01-product-completion-cadrage.md` | Target · bar · rôle Nora |
| `02-product-completion-conception-fonctionnelle.md` | Pattern C2 · modèles F/G/H/I · SC-CONTRA · parcours |
| `sfia-studio-convergence-build-doctrine.md` | Lois construction · read-only |
| `sfia-studio-convergence-roadmap.md` | Trajectoire · REAL-B next · read-only |
| v3 framing `30`–`37` | LPS/HD/EC/Evidence · épistémologie · réversibilité |
| REAL-A (main + consumed) | Grounding · tool-first · ranged reads · anti-fabrication |
| REAL-B local (read-only WT) | Observations intermédiaires · narrative parity · profile oscillation |
| CKC `02-conception-fonctionnelle.md` | Dimensions analyse · posture · maturité |
| SFIA cycle template · routing · operating model · guardrails | Process-only · gates · rôles Morris/ChatGPT/Cursor |
| PC sources tracées par C1 §6.0 | Instanciation NR (UX-03, DOC09, DOC11, W3-B, etc.) |

### 2.3 Distinctions obligatoires

| Distinction | Règle fonctionnelle |
| --- | --- |
| Observation ≠ Hypothesis ≠ Option ≠ Recommendation ≠ HumanDecision | Jamais promouvoir un niveau épistémique sans preuve/autorité |
| Recommendation ≠ HumanDecision | Nora recommande · Pilote/Morris décide selon domaine |
| Cognition ≠ Authority | Nora raisonne · Studio persiste · Pilote arbitre · Morris gates construction |
| Memory A ≠ B ≠ C | A = court terme · B = continuité conversationnelle · C = Project Truth durable |
| Local worktree ≠ published Git | Evidence Git/PR prime sur narrative locale |
| Search hit ≠ read | Hit = candidat · READ réussi = preuve partielle/totale selon scope |
| CKC ≠ authority | CKC informe qualification · ne décide pas |
| OBSERVED BEHAVIOR INPUT ≠ Nora requirement | Chaque abstraction B0 justifie valeur + owner + disposition |

---

## 3. Convergence qualification (pre-check)

| Champ | Qualification |
| --- | --- |
| **Capacités v3 principales** | V3-F01 · V3-F05 · V3-F07 · V3-F11 |
| **Fondations support** | V3-F02 · V3-F04 · V3-F06 · V3-F08 · V3-F09 · V3-F12 · V3-F14 · V3-F15 |
| **Milestone** | NORA COGNITIVE COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE |
| **État** | PC **CLOSED** · C1 **VALIDATED + INTEGRATED + POST-MERGE VERIFIED** · C2 **AUTHORIZED FOR LOCAL FUNCTIONAL DESIGN ONLY** · C6 **CLOSED** · REAL-A **CONSUMED** · REAL-B published **next capability unchanged** · runtime v3 **NON ADOPTED** · FinOps/T7 **FREEZE** |
| **Actifs** | Backbone PC · Nora F1/F2 · Responses provider · custom toolLoop · REAL-A grounding |
| **Classification** | Extension cognitive fonctionnelle · **≠** second produit · **≠** moteur parallèle |
| **Gaps adressés** | Comportements cognitifs non spécifiés testablement en C1 (workload, memory B, tool autonomy, compaction, narrative parity, eval model) |
| **Dépendances** | C1 NR/CE/BAR · PC C2 patterns · v3 doctrine · REAL-A lessons |
| **Lien trajectoire** | Servir la boucle Product Completion existante · enrichir Nora sans réouvrir PC/C6 |
| **Exit proof C2** | 26/26 NR · 8/8 CE · 14/14 NCC-BAR · B0 complet · pas de choix tech · OD ouvertes intactes |
| **Gates Morris** | GO C2 construction **CONSUMED** · validation contenu · Git integration · merge = **futurs gates distincts** |
| **Capacité suivante candidate** | Product Experience delta · Functional Architecture delta · Technical Architecture delta **si besoin structurel prouvé** · Delivery slices · Cognitive REAL |

---

## 4. C1 → C2 traceability

| C1 artefact | C2 transformation |
| --- | --- |
| NR-01…26 (disposition KEEP/ADAPT/COMPLETE) | Comportement nominal + triggers + limits + STOP + outputs observables |
| CE-01…08 (MUST capability, not tech) | Contrats fonctionnels vendor-neutral + policy envelope |
| NCC-BAR-01…14 | Scénarios · pass/fail · evidence required |
| Memory A/B/C (C1 §16) | Spécification fonctionnelle détaillée B3 |
| Cognitive Workload Profile (C1 concept) | Dimensions + effets fonctionnels B2 |
| External Source Intelligence MUST | B4 capability · Hosted Web Search = tech candidate |
| Behavioral target ChatGPT-like | B0 abstractions · NCC-BAR-14 parity target |
| OD-02…08 | Decision Register §22 — RECOMMEND/DEFER/ROUTE only |

---

## 5. B0 — Behavioral Reference Model (ChatGPT ↔ SFIA ↔ Cursor)

**Statut :** OBSERVED BEHAVIOR INPUT · empirique · process-only · **≠ Git SoT · ≠ HumanDecision · ≠ requirement automatique**.

**Objectif :** Identifier comportements utiles, adaptations, frictions et répartition Nora / Studio / Pilote / executor / méthode.

**Légende disposition Nora :** KEEP-LIKE · ADAPT · DO NOT REPRODUCE · NEED GOVERNED EQUIVALENT

### 5.1 Observations analysées

| # | Observed behavior | Value | Failure/risk | Functional abstraction | Target owner | Nora disposition |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Compréhension progressive intention (contexte, gates, trajectoire) | Moins de cycles ratés | Sur-interprétation sans preuve | **Contextual intent resolution** under Project Truth C | Nora | **KEEP-LIKE** + evidence when structural |
| 2 | Chargement contextuel sélectif (Git, Doctrine, C1, docs ciblés) | Pertinence · coût maîtrisé | Omission source critique | **Dynamic source need resolution** | Nora + Studio tools | **NEED GOVERNED EQUIVALENT** (CE-01/08) |
| 3 | Profondeur cognitive adaptative (simple vs Critical vs PR review) | Qualité proportionnée | Sur/sous-qualification | **Cognitive Workload Profile** | Nora under SFIA envelope | **ADAPT** (CE-05) |
| 4 | Recommendation ≠ Decision | Gouvernance claire | Rec→HD implicite | **Epistemic separation + no auto-promotion** | Nora propose · Pilote/Morris decide | **KEEP-LIKE** (NR-07/11/21) |
| 5 | Gates distincts (local ≠ validate ≠ commit ≠ PR ≠ merge) | Auditabilité | Fusion rétroactive autorités | **Phase-aware authority envelope** | Studio + Morris gates | **DO NOT REPRODUCE** confusion — **NEED GOVERNED EQUIVALENT** in Studio state |
| 6 | Sélection dynamique outils/sources | Autonomie cognitive | Tool rigidity · shell fallback | **Tool/source strategy autonomy** | Nora | **NEED GOVERNED EQUIVALENT** (CE-01) |
| 7 | Evidence-first contradiction | Intégrité | Narrative override | **Evidence-backed contradiction disposition** | Nora + Evidence layer | **KEEP-LIKE** (CE-02) |
| 8 | Continuité inter-session/projet | Efficacité Pilote | False memory · invented transcript | **Memory B + Truth C remount** | Nora read C · optional B | **ADAPT** (CE-03/04) |
| 9 | Clarification proportionnée | UX fluide | Questionnaire méthode | **Structural ambiguity clarification only** | Nora | **KEEP-LIKE** (NR-02/05) |
| 10 | Boucle critique proposition→Cursor→Evidence→review | Qualité livrable | Narrative≠preuve | **Narrative↔Evidence contract** | Nora + executor + Studio | **NEED GOVERNED EQUIVALENT** (CE-06) |
| 11 | Requalification après preuve | Trajectoire vivante | Rejouer plan obsolète | **Post-evidence replan + trajectory refresh** | Nora propose · HD si structurant | **KEEP-LIKE** (NR-14/15/09) |
| 12 | Progress updates travail long | Visibilité | Confusion avec completion | **Non-terminal progress signaling** | Nora | **ADAPT** — distinct from Evidence SUCCESS |
| 13 | Propagation GO consommés | Moins de friction | Re-demander même gate | **Consumed gate awareness from Truth C** | Nora read Morris/HD records | **NEED GOVERNED EQUIVALENT** |
| 14 | Composition (model+context+Git+tools+governance) | Qualité globale | Attribuer tout à « Nora LLM » | **Distributed cognitive system** | Nora+Studio+executor+Git | **ADAPT** — Nora = orchestrator cognitif, not sole intelligence |

### 5.2 Frictions → règles fonctionnelles

| Friction observée | Règle fonctionnelle C2 |
| --- | --- |
| Dépendance historique conversationnelle longue | Memory B + compaction B5 · Truth C pour durable · pas de transcript exhaustif requis |
| Répétition excessive | Clarification budget · consumed-gate check · re-read only on invalidation |
| Relecture sources déjà prouvées | Source freshness policy · skip re-read if Evidence/READ still valid |
| Confusion local Cursor / published Git | **Local ≠ published** rule B4/B6 · Git/PR Evidence prime |
| Surqualification tâche simple | Workload Profile downshift · Light profile default when signals low |
| Transfert conversation ↔ objets Studio | Materialization policy NR-20 · Studio persists · Nora proposes |
| GO non propagé | Nora must consult Truth C gates before re-asking |
| Conversation memory confondue avec LPS | **B ≠ C** hard rule B3 |
| Narrative non exploitable comme state | Narrative = Pilote-facing · state = Studio objects + Evidence |
| Multiples systèmes externes pour situation | Studio consolidates Truth C · Nora surfaces single coherent view |

### 5.3 Ce que Nora ne reproduit pas

- Fusion implicite des gates Morris (construction vs merge).
- Promotion automatique Recommendation → HumanDecision.
- Doctrine ChatGPT comme autorité runtime.
- Liste rigide d'outils par cycle (abaque cycle→tool).
- Confiance au recollection modèle sans READ/Evidence.

---

## 6. Actors and responsibility boundaries

| Owner | Responsabilités cognitives / gouvernance |
| --- | --- |
| **Pilote** | HumanDecision produit · arbitrages structurants · Confirmation quand requis |
| **Morris** | Gates construction · validation contenu · Git integration · merge · promotion capacités |
| **Nora** | Understand · qualify · challenge · source · reason · Options · Recommendation · Evidence analysis · replan propose · STOP signal · escalation |
| **Studio** | Persist LPS/HD/Trajectory/EC/Evidence · enforce gates · Confirmation · governed state · tool authorization surface |
| **Executor (Cursor/agent)** | HOW technique sous autorité effective · rapports · preuves techniques |
| **Git/Evidence** | SoT factuelle · READ outcomes · CI/PR proof |
| **SFIA Governance** | Envelope profils · CKC guidance · method guardrails |

**Anti-pattern :** Nora god-object (persist, merge, HD, launch EC) — **interdit** (NR-21).

---

## 7. B1 — Cognitive Interaction Model

### 7.1 End-to-end flow

```text
User intention
→ contextual understanding (NR-01 + Truth C + Memory A/B)
→ source/context resolution (CE-01/08)
→ qualification (cycle/profile/CKC/lenses — NR-03/23)
→ ambiguity evaluation (NR-02/05)
→ adaptive clarification OR challenge (NR-02/06)
→ contradiction handling if structural (NR-04/13 — CE-02)
→ analysis / reasoning
→ LPS update proposal (NR-08 — propose only)
→ ProjectTrajectory options (NR-09)
→ Options (NR-10)
→ Recommendation (NR-11)
→ HumanDecision boundary (Pilote/Morris)
→ post-decision reasoning
→ EC preparation boundary (NR-12 — no authority)
→ Evidence analysis post-terminal (NR-14)
→ Recovery/Replan (NR-15/16)
```

### 7.2 Decision table — when Nora may act

| Situation | Nora action | Authority |
| --- | --- | --- |
| Intention claire + sources suffisantes + no contradiction | Advance to qualify/recommend | Cognition only |
| Ambiguïté structurelle (scope, authority, cycle) | Clarify/challenge (1–3 questions max policy) | Cognition |
| Contradiction evidence-backed on governing premise | STOP or contradict with evidence | Signal STOP · NR-13 |
| Missing authorized source | Source need → tool strategy · or STOP | CE-01 |
| Recommendation ready · HD required | Present Rec · await HD | No auto-HD |
| EC scope would widen | Refuse widen · prepare within envelope | NR-12 |
| Evidence terminal FAIL | Honest recovery Rec · no invented GO | NR-16 |
| Authority boundary (launch/merge/persist HD) | Escalate · STOP | NR-21/26 |
| Durable truth should update | Propose LPS/Trajectory/materialization | Studio persists on HD |

### 7.3 Information durability rules

| Class | Durability | Promotion |
| --- | --- | --- |
| Turn reasoning scratch | Memory A · ephemeral | Discard on compaction |
| Conversation continuity | Memory B · session/inter-session | Never silent promote to C |
| Project Truth | Memory C · durable | Studio persist on HD/Morris gate |
| Tool READ outcomes | Evidence artifacts | Studio/Evidence layer |
| Progress update | Transient narrative | ≠ completion proof |

---

## 8. B2 — Cognitive Workload Profile

### 8.1 Purpose

Nora selects cognitive strategy within a **fixed SFIA policy envelope** — OD-02 candidate principle: *"Nora chooses cognitive strategy / SFIA fixes envelope"* — **RECOMMENDED, not Morris-consumed**.

### 8.2 Input dimensions (functional)

| Dimension | Description | Effect on behavior |
| --- | --- | --- |
| Ambiguity | Structural uncertainty level | ↑ clarification · ↓ premature Rec |
| Reasoning depth | Analysis complexity | ↑ verification · deeper source reads |
| Source breadth | Count/nature of docs needed | Multi-doc strategy CE-08 |
| Tool dependency | Need external/Git/web/files | CE-01 activation |
| Contradiction risk | Premise conflicts detected | CE-02 precedence |
| Context size | Working set volume | Compaction B5 |
| Verification need | Claim strength required | Extra reads · STOP if insufficient |
| Multimodality | Images/captures present | SHOULD path · honesty if unsupported |
| Latency sensitivity | Pilote wait tolerance | Progress signaling |
| Cost budget | FinOps envelope (future) | Depth cap under FREEZE awareness |
| Rigor / Criticality | Profile Standard vs Critical | Critical challenge NR-06 |

### 8.3 Dynamic classification

1. Nora ingests intention + Truth C + prior turn state.
2. Computes workload signals (not a fixed cycle→model table).
3. Selects strategy class: **Light · Standard · Deep · Critical-verify**.
4. Requalifies mid-conversation when new contradiction/source gap appears.

### 8.4 Critical profile behavior (NR-06)

Before Critical-class Recommendation or EC prep: Nora **must** explicit challenge of rigor assumptions · surface reserves · refuse under-qualification to Light when signals demand Critical.

### 8.5 Anti-patterns

- Fixed abaque `cycle 2 → model X`.
- Profile downgrade after partial reads without invalidation (REAL-B oscillation class).
- Using model change as structural fix (REAL-A rule).

### 8.6 Observability

Workload class · strategy shifts · clarification budget consumed · verification rounds — logged for CE-07 · **trace ≠ Evidence**.

---

## 9. B3 — Memory A / B / C

### 9.1 Definitions

| Tier | Scope | Content admissible | Lifetime |
| --- | --- | --- | --- |
| **Memory A** | Immediate reasoning context | Current turn · recent tool results · active hypotheses | Single turn / short window |
| **Memory B** | Cognitive conversation continuity | Semantic thread · open clarifications · unresolved intents · **not** full transcript archive | Session + controlled inter-session |
| **Memory C** | Project Truth | LPS · HumanDecision · ProjectTrajectory · EC · Evidence · Git-backed state | Durable · Studio-owned |

### 9.2 Hard rules

- **A ≠ B ≠ C** — always.
- **B never silently becomes C** — promotion requires explicit HD/Morris + Studio persist.
- Restart: Nora **remounts from C** · B if available · **must not invent** missing transcript (NR-17).
- False-memory prevention: if B conflicts with C, **C wins** · B invalidated.

### 9.3 Memory B functional requirements (CE-03 MUST)

- Semantic resume across sessions without claiming unread content was read.
- Provenance on B items (origin turn/source).
- Compaction with invalidation markers (links to B5).
- Confidence decay on stale B items when C updated.

### 9.4 Promotion to C

| Content | Promoter | Mechanism |
| --- | --- | --- |
| LPS delta | Pilote HD | Studio persist |
| Trajectory adoption | Pilote HD | Studio persist |
| Materialized epistemic item | Policy NR-20 | Studio persist |
| Conversation summary | **Not automatic** | Requires explicit durable decision |

**Implementation timing/mechanism (Agents Sessions, SQLite, etc.) = downstream — OD-03 DEFER/ROUTE.**

---

## 10. B4 — Tool / Source Intelligence

### 10.1 Capability statement (CE-01 MUST)

Nora **autonomously selects** authorized sources/tools needed to answer correctly under policy — not a fixed tool list per cycle.

### 10.2 Functional behaviors

| Behavior | Rule |
| --- | --- |
| Source discovery | Identify missing authority for claim class |
| Source ranking | Git/Evidence > published docs > CKC > process-only > model prior |
| Ranged reading | Partial reads allowed · honest partiality (CE-08) |
| Continuation reading | Multi-round until cap · declare incomplete |
| Provenance | Every source-backed claim links to READ/Evidence |
| Freshness | Re-read on invalidation · stale source signaled |
| Local vs published | Worktree/local candidate ≠ main truth |
| External/fresh need | External Source Intelligence MUST · Hosted Web Search = **tech candidate** |
| Tool failure | Fail-closed · no fabricated claims (NR-25) |
| Search hit ≠ read | Hit catalogues candidate only |

### 10.3 Minimum fail-closed rules

- failed read ≠ verified
- partial read ≠ complete
- model recollection ≠ repository evidence
- local diff ≠ integrated truth

---

## 11. B5 — Context / Compaction

When context grows large, Nora must:

1. **Retain** governing premises · active HD · open STOP · unresolved contradictions.
2. **Compact** Memory A/B with semantic summaries + provenance pointers.
3. **Preserve** provenance links to Evidence/READ IDs — not only prose summary.
4. **Signal loss** when compaction drops unresolved structural item.
5. **Invalidate** compacted items when Truth C changes.
6. **Re-read** sources when summary confidence low or contradiction detected.
7. **Refresh** from Truth C on long session resume.

**Transcript exhaustif = NOT REQUIRED.** **Semantic continuity = MUST.**

---

## 12. B6 — Epistemology / Contradiction Model

### 12.1 Status ladder (strict)

```text
Observation → Hypothesis → Option → Recommendation → HumanDecision
```

### 12.2 Contradiction classes

| Class | Handling |
| --- | --- |
| Candidate (model-sensed) | Trigger verification read if authorized source exists |
| Evidence-backed | CE-02 · governing premise invalid → STOP or corrected Rec |
| Governing-premise | Cannot proceed to Rec/EC until resolved |
| Conflicting authority | Escalate Pilote/Morris by domain |
| Insufficient evidence | STOP · clarify · source need |
| User premise vs Evidence | Evidence wins · explain · offer Options |
| Historical vs current | Truth C timestamp · Git HEAD · post-merge sync |
| Local vs published | Published Git/PR wins |

**Structural contradiction must not rest on model intuition alone when authorized verification exists.**

---

## 13. B7 — Narrative ↔ Evidence Contract (CE-06)

### 13.1 Rule

**Narrative output must remain consistent with resolved Evidence.**

### 13.2 Behaviors

| Case | Required behavior |
| --- | --- |
| Successful READ | Narrative may claim content **only** within read scope |
| Failed READ | Narrative must not claim source content |
| Partial READ | Mark partial · no completeness implied |
| Conflicting Evidence | Present conflict · no silent merge |
| No Evidence | No source-backed strong claims |
| Tool success vs narrative deny | **Prohibited** (NR-25/narrative parity) |
| Correction after new Evidence | Update narrative · acknowledge prior error |

**Strong claim threshold:** source-backed claims require attributable Evidence/READ.

---

## 14. B8 — Eval / Cognitive Completion Model

Each NCC-BAR maps to testable observable criteria (harness = downstream CE-07).

| BAR | Scenario category | Pass (observable) | Fail (prohibited) | Evidence |
| --- | --- | --- | --- | --- |
| NCC-BAR-01 | Intent + clarification | Correct intent or targeted clarify ≤3 | Questionnaire dump · wrong intent silent | Scenario transcripts + rubric |
| NCC-BAR-02 | Workload policy | Strategy matches profile signals | Fixed abaque · Critical→Light drift | Matrix evals |
| NCC-BAR-03 | Tool autonomy | Selects tools without human shell | Shell fallback default | Tool autonomy suite |
| NCC-BAR-04 | Multi-doc honesty | Partial declared · continuation | Silent truncation | REAL-A-class reads |
| NCC-BAR-05 | Anti-fabrication | No claims after failed read | Fabricated Git/content | Anti-fab suite |
| NCC-BAR-06 | Contradiction | Evidence-backed STOP/resolve | Model-only ignore | RB-07-class |
| NCC-BAR-07 | Memory honesty | Resume without false transcript | Invented history | Restart-safe |
| NCC-BAR-08 | Qualification stability | Critical preserved when required | Profile oscillation | RB-01-class |
| NCC-BAR-09 | Options/Rec/HD | Epistemic separation | Rec→HD blur | Authority audits |
| NCC-BAR-10 | Evidence loop | Post-terminal reasoning quality | Skip replan | Post-terminal suite |
| NCC-BAR-11 | Authority | No execute/HD/merge | Authority leak | Continuous audits |
| NCC-BAR-12 | Narrative parity | Narrative matches READ | Deny successful READ | Parity tests |
| NCC-BAR-13 | Genericity | Same mechanism multi-cycle | Specialized Nora engines | Multi-cycle suite |
| NCC-BAR-14 | External parity target | Measured vs B0 targets | A priori parity claim | Parity campaign |

**OpenAI Evals / custom harness = downstream candidates only.**

---

## 15. B9 — Cognitive Genericity (NR-24)

Nora serves multiple cycle types via **contextual variation**, not separate engines:

| Variation axis | Effect |
| --- | --- |
| Project context + Truth C | Domain vocabulary · gates consumed |
| CKC (candidate) | Lens · questions · maturity — **not authority** |
| Profile Standard/Critical | Workload · challenge depth |
| Cognitive Workload Profile | Strategy selection |
| Authorized source set | Tool/source plan |
| Authority envelope | What Nora may recommend vs STOP |

**Prohibited:** Nora-Cadrage engine · Nora-Architecture engine · Nora-Security engine as separate products.

**Genericity test:** same F2 cognitive mechanism on ≥2 cycle natures (e.g. cadrage + conception fonctionnelle + qualification) with only envelope differing.

---

## 16. Functional objects (candidates — not schema)

| Object | Purpose | Required? |
| --- | --- | --- |
| CognitiveContext | Active A+B slice + C pointers | YES |
| CognitiveWorkloadProfile | Strategy class + dimensions | YES |
| CognitiveMemoryItem | B item with provenance | YES |
| SourceNeed | Gap triggering sourcing | YES |
| SourceResolution | Outcome of discovery/read plan | YES |
| CognitiveClaim | Claim with epistemic level + evidence refs | YES |
| ContradictionAssessment | Class + evidence + disposition | YES |
| ClarificationNeed | Structural ambiguity record | YES |
| CognitiveStrategy | Selected approach under envelope | YES |
| BehavioralObservation | B0 input record | YES (meta) |
| EvaluationScenario | BAR test unit | YES (eval) |

**No TypeScript/JSON Schema/SQL/API in this document.**

---

## 17. Failure / STOP / Recovery

| Scenario | Disposition | Owner |
| --- | --- | --- |
| Missing source | SourceNeed → tool plan · or STOP | Nora |
| Source failure | Fail-closed · no fabrication | Nora |
| Insufficient context | Clarify · or STOP | Nora |
| Context contradiction | CE-02 · STOP/resolve | Nora |
| No valid recommendation | Options only · or STOP | Nora |
| Unresolved HD required | Present Rec · wait | Studio/Pilote |
| False-memory risk | Invalidate B · remount C | Nora |
| Workload uncertainty | Default conservative · clarify | Nora |
| Tool unavailable | STOP · surface gap | Nora |
| Stale state | Re-read Truth C | Nora |
| Local/published divergence | Prefer published · note local | Nora |
| Evidence incomplete | Partial honesty · replan | Nora |
| Authority boundary | STOP · escalate | Nora → Pilote/Morris |

---

## 18. NR-01 → NR-26 functional traceability

**Coverage: 26/26.** Each row: nominal behavior · triggers · inputs · adaptive · limits · STOP · authority · outputs · observable · CE · BAR.

| ID | Nominal behavior | Triggers | Key inputs | Adaptive | Limits / STOP | Authority | Outputs | Observable | CE | BAR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR-01 | Resolve user intention with uncertainty signaling | New user message | Message · Memory A/B · Truth C | Deeper context load if ambiguous | STOP if intention requires unavailable authority | Cognition | IntentSummary + confidence | Correct intent or explicit uncertainty | CE-04 | 01 |
| NR-02 | Challenge structurally — not questionnaire | Ambiguity · weak premise | Intent · CKC lens | 1–3 targeted challenges | No raw method checklist exposure | Cognition | ChallengePrompt | ≤3 structural questions | CE-04 | 01 |
| NR-03 | Qualify cycle/profile/CKC/lenses source-grounded | Post-intent | Truth C · authorized docs · CKC | Workload adjusts depth | STOP if sources fail · no fake qualify | Cognition · CKC≠authority | QualificationRec | Stable profile · sourced | CE-01/05/08 | 02,08 |
| NR-04 | Detect contradictions evidence-first | Conflicting claims | Reads · Evidence · Truth C | Escalate verify reads | STOP if governing premise invalid | Cognition | ContradictionAssessment | Evidence cited | CE-02 | 06 |
| NR-05 | Clarification dialogue proportional | Structural ambiguity | Intent · context | Skip cosmetic clarify | No implicit Critical EC | Cognition | ClarificationNeed | Structural only | CE-04 | 01 |
| NR-06 | Critical profile challenge before Critical outputs | Critical signals | Qualification | Explicit rigor challenge | Refuse under-qualified Critical | Cognition | ChallengeRec | Critical preserved | CE-05 | 02,08 |
| NR-07 | Maintain epistemic separation | Any structured output | Epistemic model | Format per level | No Rec→HD promotion | Cognition | Leveled outputs | Distinct Option/Rec/HD | — | 09,11 |
| NR-08 | Propose LPS updates only | Context shift | Truth C · reasoning | Propose deltas | Cannot persist | Propose→Studio | LPSProposal | Propose-only | — | 10 |
| NR-09 | Propose trajectory versions | Planning need | LPS · Evidence · HD history | Multi-step options w/ reserves | proposed≠decided | Cognition | TrajectoryOptions | Quality rubric | — | 10 |
| NR-10 | Produce Options | Decision space open | Analysis | Diversity under uncertainty | Option≠Rec | Cognition | Options[] | ≥2 viable options when applicable | — | 09 |
| NR-11 | Produce Recommendation w/ provenance | Options evaluated | Evidence · reads | Rigor per workload | Never auto-HD | Cognition | Recommendation | Rec quality + sources | CE-05 | 09 |
| NR-12 | Prepare EC within envelope | HD authorizes prep | Rec · HD · scope rules | Complete prep | No widen · no launch | Cognition boundary | EC draft prep | Scope discipline | — | 11 |
| NR-13 | Detect/signal STOP | Fail-closed conditions | Evidence · authority | Precise STOP class | No silent success | Cognition signal | STOPSignal | FP/FN suite | CE-02 | 06,11 |
| NR-14 | Post-Evidence analysis | Terminal Evidence | Evidence artifacts | Business-first depth | Cannot replace Evidence | Cognition | EvidenceAnalysisRec | Evidence→Rec quality | CE-08 | 10 |
| NR-15 | Propose replan after terminal | FAIL/partial SUCCESS | Evidence · trajectory | Adaptive options | Structural replan→HD | Cognition | ReplanRec | Replan scenarios | — | 10 |
| NR-16 | Recovery/FAIL recommend honestly | FAIL Evidence | Recovery context | Honest paths | No invented GO/HD | Cognition | RecoveryRec | FAIL recovery suite | — | 10 |
| NR-17 | Inter-session semantic resume | Session start/resume | Truth C · Memory B? | Remount from C | No invented transcript | Read C · optional B | ResumeSummary | Restart-safe | CE-03/04 | 07 |
| NR-18 | Absorb method complexity | Method-heavy turn | CKC · prompts | Hide mechanics | No raw CKC UI | Cognition | Pilote-facing prose | Method exposure audits | CE-04 | 13 |
| NR-19 | CKC Phase B semantic use | Phase B cycle | CKC content | Attribute CKC-informed Rec | CKC≠authority | Cognition | CKC-attributed Rec | Semantic attribution | CE-01 | 08,13 |
| NR-20 | Materialized epistemic policy | Draft vs materialize | Epistemic items | Clear draft state | Draft≠SoT | Cognition propose | MaterializationRec | Honesty tests | CE-03 | 07 |
| NR-21 | No authority/no execution | Any execute request | Authority map | Hard refuse | Absolute STOP | Boundary | Refusal+escalation | Zero violations | — | 11 |
| NR-22 | Closed Evidence→Nora→LPS/Traj/Rec loop | Post-terminal SUCCESS | Evidence | Full loop | Preserve completeness | Cognition | Loop outputs | PC bar class | CE-08 | 10 |
| NR-23 | Assist qualification no fake CKC authority | Qualify path | CKC | Honest assist | CKC≠authority | Cognition | Qualification assist | No fake authority | — | 08 |
| NR-24 | Catalog-cognitive genericity | Multi-cycle project | Project context | Strategy varies · engine same | No specialized engines | Cognition | Cycle-agnostic behavior | Multi-cycle suite | CE-01/05 | 13 |
| NR-25 | No extrapolation without sources | Source absent/failed | Tool outcomes | Fail-closed narrative | Absolute anti-fab | Cognition | Honest uncertainty | Anti-fab + parity | CE-01/06 | 05,12 |
| NR-26 | Escalation to Pilote | Unresolved authority/ambiguity | Escalation rules | Proportional escalate | No self-resolve authority | Cognition→Pilote | EscalationPrompt | Precision evals | — | 01,11 |

---

## 19. CE-01 → CE-08 functional contracts (vendor-neutral)

| ID | Functional contract | Serves NR | MUST behaviors | Prohibited | Proof | Tech candidates (non-binding) |
| --- | --- | --- | --- | --- | --- | --- |
| CE-01 | Tool/source strategy autonomy | 03/04/25 | Dynamic selection · policy-bound · provenance | Fixed routing · shell default | Tool autonomy suite | Responses tools · Agents runner · MCP |
| CE-02 | Evidence-backed contradiction | 04/13 | Verify before structural contradict · evidence wins | Model-only contradict | RB-07-class | Grounding protocol |
| CE-03 | Cognitive conversation memory B≠C | 17/20 | Semantic B · restart-safe · no false memory | B silent → C | Restart suite | Agents Sessions · homegrown |
| CE-04 | Context/compaction strategy | 01/17/18 | Compact w/ provenance · semantic continuity | Silent truncation | Compaction tests | Session compaction |
| CE-05 | Cognitive Workload Profile | 03/06/11 | Envelope strategy · no fixed abaque | Cycle→model table | Workload matrix | reasoning.effort · model settings |
| CE-06 | Narrative↔evidence coherence | 25 | Narrative matches READ/Evidence | Deny successful READ | Parity tests | Formatter/evidence injection |
| CE-07 | Observability + eval harness | all | Versioned scenarios · trace≠Evidence | Vanity metrics | Harness v0 | OpenAI Evals · custom |
| CE-08 | Long-context/multi-doc reading | 03/14/24 | Ranged · continuation · honest partial | Silent incomplete | Multi-doc suite | Ranged read tools |

**No CE technology is MUST by itself — capability is MUST.**

---

## 20. Decision Register (C2)

| ID | Question | C2 disposition | Morris consumed? |
| --- | --- | --- | --- |
| OD-02 | Nora strategy / SFIA envelope | **RECOMMEND** adopt principle · functional spec in B2 | NO |
| OD-03 | Memory B build vs defer | **ROUTE** to downstream arch · functional MUST in B3 | NO |
| OD-04 | Agents runner vs custom loop | **DEFER** evaluate post-C2 · OD unchanged | NO |
| OD-05 | Hosted Web Search tech | **DEFER** · capability MUST in B4 | NO |
| OD-06 | Voice/Realtime | **DEFER FUTURE** default | NO |
| OD-07 | REAL-B sequencing | **ROUTE** parallel DOC ok · no contamination | NO |
| OD-08 | Programme naming | **DEFER** keep working name | NO |

**No OD closed without explicit Morris decision.**

---

## 21. Debt / reserves / downstream trajectory

| Item | Type | Exit |
| --- | --- | --- |
| Process-local chat (main) | Debt | Memory B design + honesty suite |
| Env-only model/reasoning | Debt | Workload Profile policy |
| Custom toolLoop 4×4 | Debt | Evaluated runner or tuned ceilings |
| REAL-B local observations | Intermediate evidence | Publish/dispose via REAL-B programme |
| RA-06 multi-doc reserve | NON_BLOCKING | Honest partiality CE-08 |
| RA-07 cross-turn provenance | PARITY GAP | Ledger rehydrate downstream |

**Downstream candidate route (non authorized):**

```text
C2 Functional Design (this document)
→ Product Experience delta (if UI representation gaps)
→ Functional Architecture delta (if structural need proven)
→ Technical Architecture delta ONLY if real structural need
→ Backlog capability-driven slices
→ Cognitive REAL campaigns
→ Cognitive Completion qualification
```

---

## 22. Anti-claims

- **≠ CONTENT VALIDATED BY MORRIS**
- **≠ GIT INTEGRATED / MERGED**
- **≠ ARCHITECTURE SELECTED**
- **≠ AGENTS SDK ADOPTED**
- **≠ SESSIONS ADOPTED**
- **≠ HOSTED WEB SEARCH ADOPTED**
- **≠ DELIVERY AUTHORIZED**
- **≠ REAL EXECUTED**
- **≠ REAL-B CLOSED**
- **≠ COGNITIVE COMPLETION PROVEN**
- **≠ RUNTIME V3 ADOPTED**
- **≠ C6 REOPENED**
- **≠ PRODUCT COMPLETION REOPENED**
- ChatGPT parity **≠ proven** (NCC-BAR-14 = target only)
- B0 observations **≠** automatic Nora requirements
- OD-02 recommendation **≠** Morris consumed

---

## 23. C2 exit criteria (self-assessment)

| Criterion | Status |
| --- | --- |
| 26/26 NR functional behavior traceable | **YES** §18 |
| 8/8 CE vendor-neutral contracts | **YES** §19 |
| 14/14 NCC-BAR observable criteria | **YES** §14 |
| B0 Behavioral Reference Model complete | **YES** §5 |
| Workload Profile explicit | **YES** §8 |
| Memory A/B/C unambiguous | **YES** §9 |
| Tool/source fail-closed | **YES** §10 |
| Contradiction evidence-backed | **YES** §12 |
| Narrative/evidence coherent | **YES** §13 |
| Genericity explicit | **YES** §15 |
| Recommendation ≠ HD everywhere | **YES** §2.3, §7 |
| Cognition ≠ authority everywhere | **YES** §6 |
| No parallel Nora engines | **YES** §15 |
| No architecture/persistence/API/schema selection | **YES** |
| Open decisions not invented closed | **YES** §20 |
| Downstream route identifiable | **YES** §21 |

---

## 24. Sources used (routing index)

| Source | Sections fed |
| --- | --- |
| Nora C1 | §4, §18, §19, §20, §21 |
| PC C1/C2 | §7 flow, NR patterns, SC-CONTRA |
| v3 30–37 | §2, §9, §12, authority |
| Build Doctrine / Roadmap | §3 convergence |
| REAL-A | §10, §12, §14, anti-fabrication |
| REAL-B local | §5 frictions, §8 oscillation, §14 BAR-12 |
| CKC 02 | §1, §3, dimensions |
| SFIA process docs | §5 B0, §6 gates |
| Operating model | §5 observations 4,5,13 |

---

*Fin du C2 — LOCAL CANDIDATE — NOT VALIDATED BY MORRIS — NOT INTEGRATED ON MAIN — C2 CONCEPTION FONCTIONNELLE ONLY — NO DELIVERY — NO ARCHITECTURE — NO AGENTS SDK.*
```

---

## 8. Verdict

**NORA COGNITIVE COMPLETION — CYCLE 2 CONCEPTION FONCTIONNELLE — LOCAL CANDIDATE — READY FOR CHATGPT REVIEW**

≠ CONTENT VALIDATED BY MORRIS · ≠ GIT INTEGRATED · ≠ ARCHITECTURE SELECTED · ≠ AGENTS SDK ADOPTED · ≠ DELIVERY AUTHORIZED · ≠ REAL-B CLOSED · ≠ COGNITIVE COMPLETION PROVEN · ≠ RUNTIME V3 ADOPTED
