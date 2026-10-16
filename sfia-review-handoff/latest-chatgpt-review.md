# SFIA Studio — Execution Architecture Convergence Audit — Review Pack FULL

- **Horodatage** : 2026-10-16T07:30:00+0200 (Europe/Paris)
- **GO Morris** : EXECUTION ARCHITECTURE CONVERGENCE AUDIT — P6 / V3-F05 — Cycle 6 CRITICAL
- **Profil** : CRITICAL
- **CKC** : ckc:studio:architecture-technique (`06-architecture-technique.md`) — guidance only
- **Mutations Product** : **AUCUNE** (read-only)

## 1. Verdict

**ARCHITECTURE AUDIT COMPLETE**
**CURRENT/TARGET GAPS QUALIFIED**
**READY FOR CHATGPT CRITICAL REVIEW**

Finding architectural principal (F05 LIVE) :

> Une demande naturelle documentaire entre dans le **routeur Artifact-continuation** via signal naturel / `continuationKind`, puis est **BLOCKED** en `incompatible_execution_intent` faute du discriminant technique `artifactMaterializationOperation === cursor.docs_write.apply` (+ `intentKind=docs_write`).
> PR #586 n'ouvre Generic PREPARE que pour `no_require_artifact` — **pas** pour `incompatible_execution_intent`.
> Les tests Fake injectent le discriminant manquant → **Fake PASS / LIVE FAIL**.

**MORRIS ARCHITECTURE DECISION REQUIRED** pour la convergence (options §19) — non tranchée ici.

Anti-claims : CORRECTION COMPLETE · P6 GLOBAL PASS · READY FOR REAL · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth

| Check | Valeur |
|---|---|
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Arbre d'audit | lecture depuis `sfia-workspace-studio-runtime-main-52f36884` @ même SHA (runtime Human QA — **non muté**) |
| Worktree contrat Cursor | `fix/…-generic-prepare` @ `b4c1d862` — seul `.tmp-sfia-review` dirty |
| :3020 | **non interrompu** |
| Commit/push projet | **AUCUN** |

## 3. Sources consultées (sélection)

Templates / routing / guardrails ; Build Doctrine / Roadmap ; Product Completion C1 ; product-simplification 01–07 ; framing 30/32/34/35/37 ; CKC 06 ; Living Runtime Reference 02–09 + README ; code F2/W2/Nora tools/EC domain ; tests F05 / CORR-07 / CORR-09 / G-D4.

## 4. Convergence Pre-check

| Capacité | V3-F05 (+ F11/F12/F14) |
| Milestone | P6 IN PROGRESS |
| Generic Execution backbone | KEEP (PR #542 / D-ER) |
| Artifact Continuation | KEEP (obligations) + ADAPT candidate (admission routing) |
| Specialized docs_write taxonomy | RETIRE LATER (D-ER) — **encore active** dans gate F05 |
| Gap | Discriminant Artifact/docs_write **avant** surface généraliste |

## 5. Chronologie décisions (reconstituée)

| ID | Autorité | Formulation (résumé) | Statut |
|---|---|---|---|
| D-SIMP-01…05 | Morris C1 | Trajectoire chat-first simplification ; C1 VALIDATED | CURRENT (documentary) |
| D-ER / PR #542 | Morris + Git | Generic Execution → Review → Result ; taxonomies task Product RETIRE FROM PRODUCT MODEL (dette) | CURRENT backbone |
| P2-D-01 | Morris P2 | Recommendation ≠ HD | CURRENT |
| P2-D-02 | Morris P2 | Execution SUCCESS ≠ Cycle COMPLETE ; Artifact ≠ Exit Proof | CURRENT |
| P2-D-03 | Morris P2 | Confirmation ≠ HD ; conditionnelle | CURRENT |
| P2-D-04 | Morris P2 | Cycle close ≠ next activation | CURRENT |
| G-D4 | Product | NON_STRUCTURAL → decisionRefs[] ; pas de HD systématique | CURRENT |
| D-PC-09 | Product | Server-owned pathRoot / routing documentaire | CURRENT |
| PR #585 | Merge main | NEW_CYCLE vs Artifact natural signal (CI-HQA-F01) | CURRENT |
| PR #586 | Merge main | Optional `no_require_artifact` → Generic PREPARE ; exact caps ; target non-autoritatif | CURRENT |
| #483/#532/#533 | Historical | REQUIRE_ARTIFACT policy ; APPLICABLE∧¬SATISFIED admission | CURRENT (Artifact path) |

### Distinctions A–F (obligatoires)

| Proposition | Établie par Git ? |
|---|---|
| A. Artifact **pas** universellement obligatoire | OUI (#483 NO_GOVERNED ; P2-D-02) |
| B. Aucune obligation Artifact **conditionnelle** | **NON** — REQUIRE_ARTIFACT / APPLICABLE restent |
| C. Suppression catalogue métier d'exécution | OUI (D-ER RETIRE taxonomies) — **dette : encore dans gates** |
| D. Classification technique ActionPolicy/effects | OUI (conservée) |
| E. Exécution mobilisable via conversation → Generic PREPARE | PARTIEL — PR #586 borné |
| F. Nora autorise seule l'exécution | **NON** — PREPARE≠AUTHORIZE ; Nora≠authority |

**MORRIS TARGET CLARIFICATION — FORMAL DECISION TRACE REQUIRED** si la cible est : « toute demande d'effet documentaire naturel doit atteindre Generic PREPARE sans discriminant `cursor.docs_write.apply` ».

## 6. Contrat fonctionnel cible (depuis décisions — non inventé)

1. **Exécution** = mission gouvernée via ExecutionContract + Attempt + Evidence — pas un tool Nora autonome.
2. **Cycle** = cadre de travail ; exécution 0/1/N ; SUCCESS ≠ COMPLETE (P2-D-02).
3. Nora peut **proposer / qualifier** ; Studio **prépare / autorise** ; Pilote **décide / confirme**.
4. Tool cognitif ≠ EC ≠ Attempt.
5. HD / Confirmation selon matérialité (G-D4 / P2-D-03).
6. Cursor reçoit mission via EC generalist (`studio.cursor.generalist.*`) — HOW côté Cursor.
7. Preuves = Studio Evidence/RB/CE ; claim Cursor ≠ Evidence.
8. Exécution ne ferme pas le cycle (P2-D-02).
9. Surface Product générique = KEEP (`generalistExecutionSurface.ts`).

Ouverts : autonomie Nora pour *invoquer* PREPARE via tool Agents vs routeur Product conversationnel.

## 7. Architecture CURRENT — interception F05

### G1 — Parcours CURRENT (conversation → Generic / Artifact)

```
Pilot message
  → Nora cognitive turn + Structured Intent Analysis (intentAnalysis)
  → orchestrateF2
  → resolveActiveCycleGovernedContinuation (ACGC)
       ├─ !shouldEnter(...) → NEW_CYCLE_FORMALIZATION
       ├─ !hasCompatibleDocsWriteMaterializationEffect(...)
       │     → BLOCKED incompatible_execution_intent  ★ LIVE FAIL
       ├─ obligation FAIL → BLOCKED no_require_artifact
       │     → (PR#586) eligible Generic PREPARE si actionable
       └─ obligation OK → ACTIVE_CYCLE_GOVERNED_CONTINUATION → Proposal Artifact
  → Generic PREPARE (offer → draft EC → inspect → authorize)
  → Attempt / Cursor / Evidence …
```

### Point d'interception exact (fichier:ligne)

| Étape | Preuve |
|---|---|
| Entrée Artifact handling | `shouldEnterActiveCycleArtifactContinuationHandling` — `activeCycleGovernedContinuation.ts:341–347` |
| Signal naturel (verbe+document+cadre) | `hasNaturalActiveCycleDeliverableMaterializationSignal` `:279–330` |
| Gate discriminant docs_write | `hasCompatibleDocsWriteMaterializationEffect` `:368–398` exige `intentKind=docs_write` **ET** `artifactMaterializationOperation === cursor.docs_write.apply` |
| BLOCK LIVE | `resolveActiveCycleGovernedContinuation` `:583–585` → `incompatible_execution_intent` |
| Message LIVE | `continuationBlockedMessage` `:1120–1121` (« …docs_write compatible est absente ») |
| Generic only for no_require_artifact | `isOptionalDocumentaryWithoutClosureArtifactBlock` `:548–554` ; `orchestrateF2.ts:2010–2012` |
| BLOCK restant | `orchestrateF2.ts:2226–2257` — **n'ouvre pas** Generic pour `incompatible_execution_intent` |

### G2 — Artifact historique

REQUIRE_ARTIFACT HD **OU** Artifact APPLICABLE∧¬SATISFIED → Proposal path — **KEEP** pour obligations de clôture. ≠ admission universelle à l'exécution générique.

### G3 — Autorité

Recommendation ≠ HD ≠ Confirmation ≠ Authorize ≠ Execute. Materiality server-owned. Caps exactes (PR #586). pathRoot server-owned (D-PC-09).

### G4 — Cursor → Evidence → Nora

EC generalist → Attempt → Cursor claim → Evidence/RB/CE → `product_execution_context_get` (READ-ONLY) → Nora review. Specialized `persistDocsWriteArtifactReviewMaterial` = adapter post-exécution (HARVEST/ADAPT) — **≠** admission Nora.

### G5 — Dépendances latérales d'un retrait du discriminant

Callers de `hasCompatibleDocsWriteMaterializationEffect` / `artifactMaterializationOperation` : ACGC, CORR-07/09 tests, Fake provider, intentAnalysis schema/prompts, Artifact Proposal path. Retrait sans ADAPT → risque d'admettre Continuation Artifact sans effet écriture clair **ou** de casser obligations.

## 8. Dependency Impact Matrix (cœur)

| Symbole | Owner | Rôle | Impact retrait | Sévérité | Classe |
|---|---|---|---|---|---|
| `shouldEnter…` | ACGC | Entrée routeur Artifact | Perd détection natural MD | HIGH | ADAPT |
| `hasCompatibleDocsWrite…` | ACGC | Discriminant taxonomique | Débloque LIVE ; risque confusion Artifact vs Generic | **CRITICAL** | ADAPT / REPLACE gate |
| `artifactMaterializationOperation` | Intent schema | Enum Artifact | Couplage métier docs_write | HIGH | RETIRE LATER (admission) / KEEP (compat) |
| `no_require_artifact` + PR586 | ACGC+orch | Optional → Generic | Déjà ADAPT | MED | KEEP |
| `incompatible_execution_intent` | ACGC | Fail-closed signal sans effet | **Cause LIVE** | CRITICAL | ADAPT |
| Generic PREPARE / envelope | W2 | Surface générique | KEEP | — | KEEP |
| `generalistExecutionSurface` | EC domain | Quartet EC | KEEP | — | KEEP |
| REQUIRE_ARTIFACT / F14 | Cycle | Obligation clôture | Ne pas retirer | HIGH | KEEP |
| Fake `__P6_OPTIONAL_DOCUMENTARY_MD__` | fakeProvider | Injecte discriminant | Masque gap LIVE | HIGH | ADAPT tests |
| `product_execution_context_get` | Nora tools | READ-ONLY post-exec | N/A admission | LOW | KEEP |

## 9. Nora / Tools

- `product_execution_context_get` : **consultation** EC/Attempt/Evidence — **pas** PREPARE.
- Generic PREPARE : **routeur Product** dans `orchestrateF2` + offer store process-local — **pas** tool Agents callable de préparation.
- CURRENT ≠ TARGET éventuel « Nora tool prepare » — **OPEN** (décision Morris).

## 10. Fake / Real gap (F05)

| | Fake (tests PR#586) | LIVE (observation Human QA) |
|---|---|---|
| Signal naturel / continuation | Présent | OBSERVED (message Continuation Artifact) |
| `artifactMaterializationOperation` | Forcé `cursor.docs_write.apply` | **INFERRED missing** (sinon pas `incompatible_execution_intent`) |
| `intentKind=docs_write` | Forcé | NOT PROVEN / likely incomplete |
| Route Generic PREPARE | Via `no_require_artifact` | **NOT OBSERVED** — blocked avant |
| Payload LIVE exact | — | **NOT OBSERVED** (pas de dump e66) |

**Qualification :** DETERMINISTIC path proven **under Fake discriminants** ; LIVE natural path **NOT PROVEN** for Generic PREPARE. Gap = architecture admission, pas seulement prompt.

## 11. Classification des actifs

| Actif | Classe | Justification |
|---|---|---|
| Generic EC surface / PREPARE / Authorize | KEEP | Backbone D-ER |
| Artifact obligation / F14 assess | KEEP | Clôture conditionnelle |
| ACGC natural signal detection | KEEP/ADAPT | Utile anti-NEW_CYCLE silencieux |
| Gate `hasCompatibleDocsWrite…` comme prérequis Generic | ADAPT | Bloque cible chat-first |
| Taxonomie Product `docs_write` / operation enum en admission | RETIRE LATER (admission) | Align D-ER ; ActionPolicy peut garder effects |
| Fake optional MD fixture | ADAPT | Doit tester null discriminant → Generic ou clarification générique |
| docs_write Evidence adapter F3 | KEEP/HARVEST | Post-exec technique |
| Second moteur d'exécution | FORBIDDEN | — |

## 12. Options (non ADOPTED)

### Option A — Minimal routing ADAPT (recommandation d'audit pour arbitrage)

Si signal documentaire naturel + cycle actif + **pas** d'obligation Artifact → traiter comme `no_require_artifact` / eligible Generic **même si** discriminant docs_write incomplet (ou normaliser effect côté Product sans taxonomie Pilot-facing).
Conserver BLOCK `incompatible_execution_intent` seulement pour Continuation Artifact **explicitement** gouvernée (continuationKind + obligation).
**Trade-off :** fidélité chat-first ↑ ; risque confusion Artifact/Generic à tester ; effort borné ; réutilise Generic PREPARE.

### Option B — Intent Analysis contract hardening only

Forcer Nora LIVE à toujours émettre `cursor.docs_write.apply` + docs_write.
**Trade-off :** moins de code Product ; **fragile** (Fake/Real gap persiste) ; contredit RETIRE taxonomies ; ne retire pas le couplage.

### Option C — Retrait large Artifact-continuation router

**Trade-off :** simplification maximale ; risque élevé sur CORR-07/obligations ; **non minimal**.

**Recommandation d'audit (non décision) :** Option A comme trajectoire minimale ; Option B insuffisante seule ; Option C hors scope immédiat.

## 13. Trajectoire minimale proposée (sous GO Morris futurs)

1. **Décision Morris** : formaliser cible A–F (surtout E vs discriminant).
2. Lot 1 — Admission routing ADAPT (Option A) + tests LIVE-shaped (null operation).
3. Lot 2 — Fake/Real oracle align (ne plus masquer discriminant).
4. Lot 3 — Harvest docs_write adapters post-exec (sans admission).
5. Human QA e66 re-test.
Exit proof lot 1 : demande naturelle MD → offre Generic PREPARE sans REQUIRE_ARTIFACT inventé ; obligation Artifact path inchangé.

## 14. Gates Morris

| Gate | Statut |
|---|---|
| Architecture decision (Option A/B/C) | **REQUIRED** |
| Correction Product | NON autorisée ce cycle |
| Cursor REAL / Human QA auto | NON |
| P6 GLOBAL | NON |

## 15. Réserves

- Payload LIVE exact non capturé (NOT OBSERVED).
- Offer Generic process-local.
- TargetPath autoritatif non résolu au PREPARE.
- Sous-agents d'appoint éventuels non requis pour la conclusion causale ci-dessus.

## 16. Git Truth final

```
origin/main=896ff59c704bfa76df1da1a51705aaf948c1cf0c
product_mutations=NONE
:3020=untouched
review_pack=.tmp-sfia-review/chatgpt-review.md
```

## 17. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Produire : **SFIA STUDIO — EXECUTION ARCHITECTURE CONVERGENCE CRITICAL AUDIT REVIEW.**

Vérifier : décisions ; G1–G5 ; cause `incompatible_execution_intent` ; gap Fake/Real ; classifications ; options ; gates ; **absence de mutation Product**.
