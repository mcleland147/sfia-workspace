# ChatGPT Review Pack — BALISE TEST-16 Option C Plain-Text Root Cause

**Date/heure UTC :** 2026-10-30T18:11:00Z
**Cycle unique :** AKG-M5 / L3-S2 / LIVE-E2E-01 — TEST-16 Option C READ-ONLY diagnosis
**Profil :** CRITICAL
**Typologie :** QA / AUDIT / READ-ONLY ROOT CAUSE INVESTIGATION
**GO Morris exact :** Investigation ciblée en lecture seule sur la réponse TEST-16 et son rendu UX Option C.

**Verdict unique :** `TEST-16 OPTION C ROOT CAUSE QUALIFIED`

**Anti-claims :** aucun correctif · aucun message Nora · aucun TEST-17 · aucune mutation BALISE/runtime · G-REAL NOT GRANTED · Option C LIVE PASS global NON déclaré · L3 COMPLETE NON déclaré.

---

## 1. Qualification / Convergence

| Item | Valeur |
|---|---|
| Campagne | LIVE-E2E-01 EXISTING |
| Project | BALISE EXISTING |
| Cycle externe | 9 — QA / validation |
| CKC | `ckc/09-qa-validation.md` CONTENT VALIDATED, no runtime authority |
| Milestone sortie | L3-S2 OPEN |
| Capacités | V3-F05 / F02 / F06 / F14 |

---

## 2. Git Truth

| Élément | Valeur |
|---|---|
| origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` (= baseline ChatGPT) |
| Runtime WT | feat/akg-m5-nora-adaptive-presentation @ `1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a` |
| Product app vs main | **identique** (`git diff HEAD ca1c9869 -- projects/sfia-studio/app` vide) |
| Porcelain feat | `M .tmp-sfia-review/chatgpt-review.md` only (pack) |
| Handoff tip pré-cycle | `2415a1236a2b5e5717a7f2f5edcd1277bee7f72a` (READY FOR TEST-16) |
| Runtime | PID **58031** next-server :3020 ; CWD feat app ; LIVE-E2E DB paths ; CURSOR_REAL=1 |

Aucun checkout/reset/pull/stash.

---

## 3. Sources

SFIA v2.6 templates/routing/rules/operating-model/checklist ; convergence doctrine/roadmap ; Product Completion C1 ; M5 trajectory ; doctrine v3 30/32/34/35 ; PRR README + 03/05–09 ; code :

- `noraAdaptivePresentation.ts` (`shouldRenderAdaptivePresentation`, `contentFullyCoveredByPresentation`, `resolveAdaptiveAssistantRender`)
- `noraProductTurnOutputType.ts` (`normalizeNoraProductTurnStructuredOutput`)
- `productSqliteSession.ts` / `appendPilotTranscriptTurn`
- `orchestrateTurn.ts` (narrative → assistantText ; serialize presentation)
- `actions.ts` (deserialize → DTO `adaptivePresentation`)
- `ConversationSurface.tsx` (render branch)

**R23 :** émission structurée → normalisation → persistance Memory B → rehydration DTO → oracle coverage → UI.
**R24 :** NO SEMANTIC IMPACT (lecture seule). KNOWN GAP éventuel = tension CORR-NAP-02 (lead vs narrative longue) documentée, pas de MAJ PRR.

---

## 4. SQLite RO

| Base | Journal | Writers | Mode lecture |
|---|---|---|---|
| Product | delete | next-server 58031 open | `file:?mode=ro` + `query_only=ON` |
| Nora | delete | no lsof writer at query | idem |
| WAL/SHM | absents | — | pas d'`immutable=1` |

SHA observés (post-TEST-16, informatifs) : Product `c3fb06b7…` ; Nora `bebacb2b…`.

---

## 5. Identification exacte TEST-16

| Champ | User | Assistant |
|---|---|---|
| seq | **20** | **21** |
| turn_id | `pt:9c2af34b150a3c6f` | `pt:b30e1430059e0bfb` |
| logical_turn_id | `ltu:8e7720d6895b2faaff2a7003210dfff5` | idem |
| cycle | `cyc:trj-13c49958061961c529bd4ec3` | idem |
| created_at | `2026-10-30T18:00:09.138Z` | `2026-10-30T18:00:09.140Z` |
| content_len | 295 | **1996** |

User head (confirmé) : « On reprend BALISE. Peux-tu me faire un point de situation… »
Total turns session : **22** (20 avant TEST-16 + 2).

Logical turn status : `accepted`.

---

## 6. presentation_json / studio_control_json

| Champ | Statut |
|---|---|
| `presentation_json` | **VALID NON-NULL** (parse OK, len=2098) |
| `studio_control_json` | **NULL** |

Projection persistée (extraits non sensibles) :

- `version`: 1
- `eyebrow`: « BALISE · Point de situation »
- `title`: « Le projet est toujours en Cadrage »
- `lead` (176 chars) : trajectoire Cadrage validée / cycle actif / besoin à grands traits / règles et réussite à consolider
- `blocks`: **4** — `established_facts`, `open_questions`, `section`, `recommendation`
- `provenanceNote` / `noGovernedActionNote` présents

**Conséquence :** l'émission + normalisation + persistance Option C ont réussi. Le plain text n'est **pas** dû à `presentation_json` NULL.

---

## 7. Pipeline Option C (TEST-16)

| # | Étape | Fichier/fonction | Preuve TEST-16 | Statut |
|---|---|---|---|---|
| 1 | outputType OpenAI | `noraProductTurnOutputType` | schema inclut narrative+presentation | DOCUMENTED |
| 2 | structuredOutput reçu | Agents SDK / runNoraAgentsTurn | RAW MODEL — **NOT OBSERVABLE** (pas de trace locale) | KNOWN GAP |
| 3–5 | normalize → presentation | `normalizeNoraProductTurnStructuredOutput` | présentation valide persistée ⇒ normalisation acceptée | BEHAVIOR PROVEN (sortie) |
| 6 | assistantText | `orchestrateTurn` : `assistantText = coherentEarly.narrative` | content durable = récit long 1996 ≠ lead 176 | BEHAVIOR PROVEN |
| 7–8 | serialize + append | `serializeNoraAdaptivePresentation` / `appendPilotTranscriptTurn` | presentation_json NON-NULL | BEHAVIOR PROVEN |
| 9 | Memory B | pilot_transcript_turns seq21 | VALID NON-NULL | BEHAVIOR PROVEN |
| 10–11 | rehydration DTO | `actions.ts` deserialize → `adaptivePresentation` | deserialize OK sur JSON persisté (oracle local) | COVERAGE VERIFIED |
| 12–13 | shouldRender / coverage | `noraAdaptivePresentation.ts` | shouldRender **true** ; coverage **false** | BEHAVIOR PROVEN |
| 14–15 | resolveAdaptive → UI | `resolveAdaptiveAssistantRender` → `ConversationSurface` | decision.mode=**plain** ; branche plain text | BEHAVIOR PROVEN |

---

## 8. Oracle de rendu (fonctions Product pures)

Sur content+presentation réels de seq21 :

| Check | Résultat |
|---|---|
| `deserializeNoraAdaptivePresentation` | OK |
| `shouldRenderAdaptivePresentation` | **true** (4 blocks) |
| body after studio strip | len 1996 (pas de notices) |
| `contentFullyCoveredByPresentation` | **false** |
| `resolveAdaptiveAssistantRender.mode` | **`plain`** |
| cause | `coverage_false_body_ne_lead` |

Règle CORR-NAP-02 (code) : body normalisé doit **égaliser exactement** `presentation.lead` (sinon plain fail-closed).

Preuve différentielle minimale :
- nLead_head : `la trajectoire cadrage est validee et le cycle est actif…` (len≈173)
- nBody_head : `balise est actuellement dans le cycle actif de cadrage…` (len≈1932)
- equal=false

---

## 9. Hypothèses H1–H10

| H | Verdict | Motif |
|---|---|---|
| H1 OpenAI presentation=null | **REFUTED** | presentation_json VALID NON-NULL |
| H2 projection invalide schéma | **REFUTED** | parse+deserialize OK ; shouldRender true |
| H3 normalisation → null | **REFUTED** | persistée non nulle |
| H4 non persistée | **REFUTED** | colonne NON-NULL seq21 |
| H5 perdue rehydration/DTO | **REFUTED** | deserialize OK ; DTO path code présent |
| H6 shouldRender refuse | **REFUTED** | shouldRender true |
| H7 coverage échoue | **CONFIRMED** | coverage false → mode plain |
| H8 content enrichi ≠ lead | **CONFIRMED** | narrative durable 1996 ≠ lead 176 ; orchestrateTurn assigne narrative |
| H9 UI ignore adaptive | **REFUTED** comme bug UI | UI suit decision.mode=plain correctement |
| H10 autre | — | non requis |

**Première rupture prouvée :** étape **coverage** (`contentFullyCoveredByPresentation`) — body durable ≠ lead — puis `resolveAdaptiveAssistantRender` → plain → `ConversationSurface` texte classique.

Émission LIVE structurée **acceptée/persistée** ; RAW model payload **NOT OBSERVABLE**.

---

## 10. Matrice D01–D20

| D | Statut | Preuve |
|---|---|---|
| D01 Git/#628 | PASS | app≡main ca1c9869 |
| D02 Runtime LIVE | PASS | PID 58031 LIVE paths |
| D03 Base Nora | PASS | live-e2e-01 nora-session |
| D04 Tour TEST-16 | PASS | seq20/21 ltu:8e7720… |
| D05 Cohérence transcript | PASS | même logical_turn_id / cycle |
| D06 presentation_json | PASS | VALID NON-NULL |
| D07 studio_control_json | PASS | NULL (attendu absence notices) |
| D08 Schema/normalization | PASS | deserialize+shouldRender |
| D09 Raw LIVE emit | INDETERMINATE | NOT OBSERVABLE |
| D10 Normalized projection | PASS | persisted valid |
| D11 Persistence | PASS | Memory B |
| D12 Rehydration/DTO | PASS | deserialize path |
| D13 shouldRender | PASS | true |
| D14 coverage | FAIL (gate) | false — cause plain |
| D15 resolveAdaptive | PASS (comportement) | mode plain |
| D16 ConversationSurface | PASS | branche plain |
| D17 Pas d'action non sollicitée | PASS | Conf/Att/Evidence=0 ; EC intact |
| D18 TEST-15 EC | PASS | confirmation_required v2 |
| D19 Absence mutation investigation | PASS | RO only |
| D20 Cause / rupture | PASS | coverage body≠lead |

---

## 11. Qualification TEST-16

### A. Continuité métier — PARTIAL→favorable
Réponse reconnaît cadrage actif, trajectoire validée, points ouverts, prochaine étape note de cadrage. LPS v9 créé à `2026-10-30T18:00:09.133Z` (effet conversationnel TEST-16, attendu).

### B. Gouvernance — PASS au scope
Pas de nouvelle HD ; Conf=0 ; Attempt=0 ; EC TEST-15 toujours `confirmation_required` v2 ; incident TEST-15 reconnu dans le texte.

### C. UX Option C — PARTIAL
Présentation structurée **émise, normalisée, persistée** ; rendu **plain** par fail-closed CORR-NAP-02 (coverage).

### D. Frontières REAL
OpenAI LIVE turn observé (effet + presentation persistée) ; Cursor REAL non exécuté ; G-REAL NOT GRANTED.

**Verdict TEST-16 :** **PARTIAL — UX RESERVE OPEN** (continuité OK ; adaptive UI non affichée malgré projection persistée).

---

## 12. Fake/Real

CONFIGURED LIVE + turn LIVE observé via persistence. R-LIVE-EMIT **partiellement levé** (projection persistée prouve acceptation serveur ; raw model NOT OBSERVABLE). Cursor REAL=1 config only. G-REAL NOT GRANTED.

---

## 13. Recommandation unique

**OPTION C** — Cycle correctif ciblé sur couverture / composition content↔lead (fail-closed CORR-NAP-02).

Justification : première rupture = `contentFullyCoveredByPresentation` ; presentation déjà valide en Memory B. Le correctif porte sur l'alignement `assistantText`/`narrative` avec `presentation.lead` **ou** sur la politique de coverage — **décision Morris**, pas GO auto.

- Capacité v3 : V3-F05 / UX continuity
- Impact L3-S2 : réserve UX à lever pour claim Option C LIVE render
- Risque : faible si fail-closed conservé ; élevé si coverage relâché sans garde
- Architecture : réutiliser CORR-NAP-02 / orchestrateTurn — **pas** de parallèle
- Preuve sortie attendue : tour LIVE avec decision.mode=adaptive **ou** dette UX enregistrée
- Gate : **Morris**
- Capacité suivante : correctif borné **ou** poursuite campagne avec réserve UX (OPTION A) si Morris refuse correctif immédiat

RECOMMANDATION ≠ DÉCISION.

---

## 14. Gates

| Gate | Qui |
|---|---|
| Accepter cause coverage body≠lead | ChatGPT review |
| Autoriser correctif OPTION C / B / A | **Morris** |
| Ne pas confirmer EC TEST-15 | **Pilote** |

---

## 15. Absence de mutations (ce cycle)

Lecture seule Git/SQLite/code ; oracle pur sur copies `/tmp` ; aucun ALTER/INSERT ; runtime non stoppé ; REAL non modifié ; aucun message Nora.

Effets TEST-16 **préexistants** (hors investigation) : +2 turns ; LPS v9 ; audits finalization_assessed — conversationnels, pas Attempts.

---

## 16. Handoff L3

| Champ | Valeur |
|---|---|
| Mode | publish-in-cycle |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Branche | `sfia/review-handoff` |
| Canonique | `sfia-review-handoff/latest-chatgpt-review.md` |
| Commit | `docs(review-handoff): publish balise test16 option c diagnosis` |
| SHA distant | *(après publish)* |

---

## 17. Git Review Index

- seq21 `pt:b30e1430059e0bfb` presentation_json VALID ; blocks=4 ; lead_len=176 ; content_len=1996
- oracle : shouldRender=true ; coverage=false ; mode=plain ; cause=coverage_false_body_ne_lead
- EC `xct:gen-prep:8be90773…` confirmation_required v2 ; Conf/Att=0
- RAW MODEL PRESENTATION — NOT OBSERVABLE

---

## 18. Verdict

# TEST-16 OPTION C ROOT CAUSE QUALIFIED

Plain text affiché parce que la projection adaptive **persistée** échoue le gate **CORR-NAP-02 coverage** (`content` narrative ≠ `presentation.lead`), donc `resolveAdaptiveAssistantRender` → `plain`. Ce n'est pas une absence d'émission OpenAI ni une perte de persistance.

---

## 19. Instruction ChatGPT obligatoire

Relire Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA distant + contenu FULL) avant réponse à Morris.

Vérifier : GO/cycle ; Git Truth ; identité TEST-16 ; presentation_json ; pipeline ; H1–H10 ; D01–D20 ; oracle ; TEST-15 ; absence mutations ; recommandation OPTION C ; verdict.

Incomplet → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.
