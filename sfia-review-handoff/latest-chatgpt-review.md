# Review Pack FULL — Next ML5 RoomBooking UAT causal diagnosis

**Generated (UTC):** 2026-11-25T08:23:38Z
**Mode:** publish-in-cycle · Review Pack FULL · Critical INC (Cycle 9 QA)
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`
**Scope:** `projects/sfia-studio-next/`
**Class:** NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · Livraison 1 NON ACCEPTÉE

## 1. Verdict

**ROOMBOOKING UAT — ROOT CAUSE DIAGNOSIS COMPLETE — INTEGRATED CORRECTIVE DELIVERY READY FOR REVIEW.**

Les 31 écarts sont instruits. Quatre causes communes propriétaires expliquent la majorité des blocages (révision multi-sections, enveloppe/continuité, activité événementielle, restitution UX). Aucun code produit modifié dans ce cycle. Aucune mutation RECETTE.

## 2. Git Truth Check

| Check | Result |
|---|---|
| Repo / remote | mcleland147/sfia-workspace |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD tip | `3c663fd2809cae9e91b3f4929515d859b0284e81` (docs cutover only after tip `2d3d47a4`) |
| Candidate recetté | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| Tree / web | `031f1304…` / `f57bb8ee…` |
| Tip web == candidate web | YES |
| Main / merge-base | `997897fd…` |
| Staged / dirty at start | none |
| DEV | :3100 · `prUUuYxFrKalrxiMsKoc4` · DB :5433 |
| RECETTE | :3200 · `3RyhswMcKrNv8woukVXsT` · DB :5434 · WT `…-2a024b1c8d71` |
| RECETTE mutations this cycle | NONE (RO traces only) |
| Product push | NONE |

## 3. Sources lues

- PV RoomBooking blob `d428b3d1` @ docs `9ef428b0` (intégral)
- Handoffs: `66f08975`, `3e873596`, `42748ce1`, `1f6248e9`, `eef8d289`, ops parity `e497030b`
- Code candidat (même web tree): `service.ts`, `document-act.ts`, `document-candidate.ts`, `semantic-qualification.ts`, `cognitive-work.ts`, `cognitive-conductor.ts`, `investigation-continuation.ts`, `investigation-state.ts`, `nora-adapter.ts`, `run-nora-cognitive-turn.ts`, `activity-labels.ts`, `NoraLiveActivity.tsx`, `NoraConversation.tsx`, `initial-qualification.ts`, `pilotage-effect-restitution.ts`
- RECETTE PG RO: projet `proj_7514cdde-…`, conv `conv_76d43d47-…`, 11 turns, 3 cognitive_works, 1 document / 1 revision, 0 technical_contracts, activity events

## 4. Identité RoomBooking (traces)

| Élément | Valeur |
|---|---|
| Project | RoomBooking · `proj_7514cdde-42e1-4626-8806-3903373d7f69` · created 2026-11-25 07:09:03Z (~08:09 local) |
| Conversation | `conv_76d43d47-a858-42b8-aa6d-c4c803849bcd` · 07:02:23Z |
| Document | `doc_d2c01fdd-…` · v1 only `drev_57520f3b-…` (UI abrégé drev_575) |
| Works | `cgw_e864432c` COMPLETE traj ; `cgw_4a35eaae` SUSPENDED GLOBAL_TOKEN (T5–T8) ; `cgw_e31d3438` SUSPENDED GLOBAL_TOKEN (T9–T11) |
| Contracts / effect_attempts | **empty** (DRAFT UI ≠ contrat réel) |

### Mapping tours → turn commands (UTC)

| UAT | tcmd | Ord | Status | Note |
|---|---|---|---|---|
| T1 | tcmd_21a2369f | 1–2 | COMPLETE | SAS |
| T2 | tcmd_e1618afc | 3–4 | COMPLETE | |
| T3* | msg_iq_* | 5 | COMPLETE | trajectoire **déterministe** initial-qualification |
| T4 | tcmd_a2a089fe | 6–7 | COMPLETE | traj légère · work cgw_e864432c |
| T5a | tcmd_d8b68bd1 | 8–9 | COMPLETE | RETAIN · start cgw_4a35eaae |
| T5b | tcmd_4cda7fcc | 10–11 | COMPLETE | OPEN cycle |
| T6 | tcmd_e4fe0b05 | 12–13 | COMPLETE | CREATE v1 AVAILABLE |
| T7 | tcmd_20c27c1c | 14–15 | COMPLETE | REVISE QUALIFIED · documentSave NOT_EXECUTED |
| T8 | tcmd_97aa957b | 16–17 | UNKNOWN/INTERRUPTED | GLOBAL_TOKEN · used 201506 |
| T9 | tcmd_793d5778 | 18–19 | COMPLETE | Git explore |
| T10 | tcmd_4e44aac0 | 20–21 | COMPLETE | Git deepen · used→391581 |
| T11 | tcmd_dd62b393 | 22–23 | UNKNOWN/INTERRUPTED | segmentsRun=0 · GLOBAL_TOKEN |

## 5. Cartographie fonctionnement réel (chaîne)

```
Pilot message
 → turn command + focus/documentHint
 → runNoraCognitiveTurn / generateNoraReply (SDK LIVE)
 → structured qualification (intents, documentProposal, replyDraft)
 → projectStudioEffects → documentAct CREATE|REVISE|NONE
 → D4 path: canonicalize → applyTargetedSectionRevision → admit → seal
 → pendingDocumentCandidate (inspectable) OR documentSave AVAILABLE
 → appendDocumentEffectAck / activity events → UI
```

Autorité: Nora propose ; Studio admet/persiste. Conserve-only = chemin UI explicite séparé (flag `conserveProposal`) — **non traversé** en T7 (échec avant candidat).

## 6. Axe A — Compréhension, outils, effets

### A1–A3 Tour 7 — ROOT CAUSE ESTABLISHED

1. **REVISE identifié:** `semanticQualificationStatus=QUALIFIED` ; intent `d4.revise_document` `REQUEST_EFFECT` ; `sectionHint="Sections 2 et 3"` ; `documentProposal` présent (##2 + ##3, 2438 chars).
2. **Perte:** `applyTargetedSectionRevision(base, proposal, "Sections 2 et 3")` → `{ok:false, reason:"SECTION_AMBIGUOUS_OR_MISSING_IN_BASE"}` (`document-act.ts` 1131–1153). Hint multi-sections non supporté (API = 1 section exacte). Reproduction déterministe DEV: même call → même reason ; hint `"2. Parcours…"` → OK.
3. **Production structurée:** OUI (`documentProposal` + fence `sfia-document` injectée dans le message).
4. **Candidat:** `pendingDocumentCandidate=null` — jamais scellé.
5. **Persistance:** une seule révision en base (v1).
6. **Visionneuse:** reste v1 — cohérent.
7. **Refus propriétaire:** légitime au sens « ne pas muter hors scope section » ; **illégitime comme message** « non qualifiée pour écriture ».
8. **Annonce contradictoire:** `replyDraft` + fence annoncent la révision ; `appendDocumentEffectAck` (`document-act.ts` ~1399) mappe tout `NOT_EXECUTED` vers « La demande n'a pas été qualifiée pour une écriture » — **faux** ici (qualification OK, merge section échoué).

### A4 DRAFT parasite — ROOT CAUSE ESTABLISHED

`service.ts` 1370–1397: si `QUALIFIED && !wantsPrepare`, append systématique `nora.contract.prepare` / LIMITED / « Pas de production structurée contrat — DRAFT non préparé ». Observé T4–T11. **0** rows `technical_contracts` — pure projection UI, pas d'effet parasite DB.

### A5 Contrat correctif A

- Support REVISE multi-sections (ou décomposer + merge atomique) + full-document proposal path quand Nora fournit ##2+##3 sans H1.
- Sur NOT_EXECUTED: ack honnête (`SECTION_AMBIGUOUS…` / raison réelle), jamais « non qualifiée » si SQ QUALIFIED.
- Si merge échoue: ne pas présenter fence/replyDraft comme proposition inspectable ; ou matérieliser `pendingDocumentCandidate` inspectable sans conservation auto.
- Ne pas supprimer D4 ; ne pas second moteur lexical d'autorité.
- `document-act.ts` lexical helpers restent parsing aids — **pas** la cause T7.

## 7. Axe B — Ressources et continuité

### B1 Comptabilité — ROOT CAUSE ESTABLISHED (mesurée)

`evaluateGlobalResourceEnvelope` (`cognitive-work.ts` 616–637): `used = inputTokens + outputTokens` (cache **non** soustrait). Plafond 200000.

| Work | segmentCalls | input | output | used | Status |
|---|---|---|---|---|---|
| cgw_4a35eaae (T5–T8) | 6 | 192372 | 9134 | **201506** | SUSPENDED @ T8 |
| cgw_e31d3438 (T9–T11) | 2 | 385399 | 6182 | **391581** | SUSPENDED @ T11 (déjà over après T10) |

T10 COMPLETE malgré used≫200k (évaluation post-segment). T11: `segmentsRun=0`, `resumed=true`, suspend immédiat — **pas** une note « trop chère» ; enveloppe déjà saturée.

### B2 Continuité T10→T11 — ROOT CAUSE ESTABLISHED

- Conclusions T10 vivent dans `production_json` kind REPLY / message assistant — **pas** dans `investigation.questions[].answerSummary` ni sources CONSULTED du state final (state: `sufficiency=INSUFFICIENT`, `sources=[]`, `contractReady=false`).
- Restitution suspend (`investigation-continuation.ts` 105–130): si aucune question ANSWERED et pas de production DOCUMENT → texte fixe « Aucune conclusion métier fiable n'a été consolidée dans l'état d'investigation » — **vrai pour l'état**, **faux pour l'expérience Pilote** (analyse riche T10).
- Même work Git repris pour CREATE note → héritage budget + state insuffisant + `pendingEffectBlocked` S05.

### B3 Corrections antérieures

- Réallocation segment / scaleSegmentCharBudget: existent ; **n'empêchent pas** accumulation globale multi-tours.
- Tests conserve-only fixture: prouvent seal path, **pas** Message→REVISE multi-section→candidat.
- Verdicts readiness: déterministes / smoke — n'ont pas discriminé UAT RoomBooking.

### B4 Contrat correctif B

- Clôturer / forker work après REPLY COMPLETE utile ; nouveau work pour note documentaire avec seed des acquis (conclusions + refs Git) sans rejouer 385k tokens.
- Persister conclusions métier exploitables (pas seulement reply text).
- Réserver headroom restitution ; si used déjà ≥ max avant tour: refuse early avec reprise bornée + option « nouveau work depuis acquis ».
- **Ne pas** monter 200k comme solution principale.

## 8. Axe C — Activité LIVE

### C1–C2 — ROOT CAUSE PARTIALLY ESTABLISHED / ESTABLISHED sur points clés

Événements réels RoomBooking: quasi uniquement `nora.generate` ANNOUNCED/COMPLETED (« Nora prépare une réponse » / « Réponse Nora disponible ») + `nora.contract.prepare` LIMITED + rares `nora.source.d4` avec refs brutes `acquis:acq_…`.

| Symptôme | Cause |
|---|---|
| Double activité | `NoraConversation.tsx` 377–397: ancien bloc `fig-nora-activity` **et** `NoraLiveActivity` si `activity==="preparing"` |
| Titre=activité générique | Events n'émettent pas d'opérations métier ; labels mappent phases techniques |
| Partiel sur réponse OK | Badge LIMITED de `nora.contract.prepare` DRAFT |
| IDs acquis bruts | `summary`/`detail_json.ref` non projetés en titres métier |
| Carte persistante | COMPLETE event reste dans liste poll sans auto-dismiss post-réponse simple |

Le composant `NoraLiveActivity` est une **coquille** ; la chaîne producteur d'événements riches (outil Git/D4 avec objectif) n'est pas alimentée sur ces tours.

### C4 Contrat correctif C

Une projection active ; events = opérations réellement exécutées ; terminal sync ; DRAFT hors intention → N/A silencieux ; historique repliable ; pas de fausse timeline depuis replyDraft.

## 9. Axe D — Parcours / UX / personnalité

| ID | Cause |
|---|---|
| RB-12/13 | `initial-qualification.ts` `buildAssistantContent` — template déterministe « proposition de trajectoire initiale (non retenue) » + **vouvoiement** (« Vous pouvez… ») ; msg id `msg_iq_*` |
| RB-05..08 | SAS progress: step 3 reste « en cours » tant que projection non terminale / dismiss manuel ; rythme UI non assuré si backend rapide |
| RB-09/10 | CSS/icône + dérive nombre cycles vs cartes forecast |
| RB-18 | `pilotage-effect-restitution.ts` / acks documentaires administratifs |
| RB-19 | panneau contexte non alimenté depuis open points / cycle actif propriétaires |
| RB-29 | focus documentaire / mode révision UI non clearé sur intention Git lecture seule |
| RB-03 | rendu Markdown listes (surfaces conversation + viewer) |

## 10. Analyse corrections antérieures (obligatoire)

| Sujet | Annoncé | Couvert réellement | Limite du test | Pourquoi UAT échoue encore |
|---|---|---|---|---|
| Conserve-only + PG | path sans provider | fixture candidate → v2 | pas Message→proposal→merge section | T7 n'atteint jamais candidat |
| Admission WEB sémantique | P0 | B1 flags | hors RoomBooking | N/A cette UAT |
| Activity shared component | NoraLiveActivity + labels | UI shell | pas producteurs d'ops | double UI + events pauvres |
| Budget / continuation | scale segment, partial restitution | local chars | pas fork work / conclusions persistées | T10 success puis T11 exhaust + message « aucune conclusion » |
| Cognitive OPERATIONAL_PROVISIONAL | policy v3 | cutover smoke | ≠ F2 / ≠ multi-turn FinOps | OK policy ; KO gestion enveloppe |

## 11. Matrice RB-01 … RB-31

| ID | Symptôme | Tour | Preuve | Mécanisme | Cause immédiate | Cause racine | Certitude | Correction | Oracle |
|---|---|---|---|---|---|---|---|---|---|
| RB-01 | Carte réponse utile absente après simple | 1,2,4 | activity COMPLETE persiste | NoraLiveActivity + poll | pas dismiss terminal | lifecycle activité | ESTABLISHED | auto-hide carte active post-COMPLETE simple | Scénario 1/2 |
| RB-02 | Spinner après réponse | 1,2 | UI + events RUNNING/COMPLETED | même | terminal non sync | lifecycle | ESTABLISHED | sync status message | 2 |
| RB-03 | Listes sans puces | 2,4,6 | BROWSER | markdown CSS | styles surfaces | UX markdown | PARTIAL | styles + test nav | 7 |
| RB-04 | SDK/COMPLETE exposés | 2,3 | BROWSER | chrome debug | métadonnées hors gate RECETTE | projection | PARTIAL | hide en RECETTE | 7 |
| RB-05 | Loader SAS statique | 3 | BROWSER | SasCreateProgressPopup | animation/état | UX SAS | PARTIAL | animation + état réel | 1 |
| RB-06 | Étapes 2/3 instantanées | 3 | BROWSER | même | pas min presentation | UX | ESTABLISHED | min durée présentation 2/3 | 1 |
| RB-07 | Étape 3 bloquée | 3 | BROWSER | stepFromQualification | PROPOSED≠terminal UI | SAS state machine | PARTIAL | terminal explicite | 1 |
| RB-08 | Pas confirmation terminale | 3 | BROWSER | même | manque état final | SAS | ESTABLISHED | bouton Accéder + done | 1 |
| RB-09 | Icône i ovale | 3 | BROWSER | CSS | aspect-ratio | UX | ESTABLISHED | fix CSS | 7 |
| RB-10 | 3 cycles / 2 cartes | 3 | BROWSER | forecast vs render | dérive count | projection IQ | PARTIAL | single source | 1 |
| RB-11 | Argumentaire faible | 3 | msg_iq | template IQ | texte déterministe pauvre | IQ content | ESTABLISHED | enrichir ou déléguer Nora | 1 |
| RB-12 | Tutoiement→vouvoiement | 3 | msg_iq content | buildAssistantContent | « Vous » | personnalité cassée | ESTABLISHED | tutoiement transverse | 1 |
| RB-13 | Trajectoire préformatée | 3 | msg_iq_* id | processInitialQualification | non-cognitive | IQ path | ESTABLISHED | qualifier origine / Nora | 1 |
| RB-14 | Double activité | 4,6 | NoraConversation | preparing + LiveActivity | coexistence | C | ESTABLISHED | un seul canal | 2 |
| RB-15 | Activité non métier | 4+ | activity DB | phases generate only | producteurs pauvres | C | ESTABLISHED | events ops réelles | 2 |
| RB-16 | DRAFT non préparé | 4–11 | activity detail | service 1370 | systématique | A4 | ESTABLISHED | N/A silencieux | 2/6 |
| RB-17 | Partiel à tort | 4,5,10 | badge LIMITED | contract.prepare | dérive statut | C+A4 | ESTABLISHED | statut depuis objectif | 2 |
| RB-18 | Résultat Studio admin | 5–7 | messages | restitution helpers | ton administratif | D | ESTABLISHED | formulation métier | 1/3 |
| RB-19 | Contexte incomplet | 5 | BROWSER | context panel | non branché open points | D | PARTIAL | wire propriétaires | 1 |
| RB-20 | IDs acquis bruts | 6,8 | activity summaries | source events | pas de title | C | ESTABLISHED | labels métier | 2 |
| RB-21 | Anciens events | 6 | BROWSER | poll multi-turn | pas isolation tour | C | ESTABLISHED | scope turn | 2 |
| RB-22 | Statuts steps figés | 6 | BROWSER | step states | mapping pauvre | C | PARTIAL | états discovery→done | 2 |
| RB-23 | 3 consultations / 1 lien | 6 | turnProjection | aggregate label | granularité | C | PARTIAL | sources nommées | 2 |
| RB-24 | REVISE non écrit | 7 | result_json | applyTargetedSectionRevision | multi-section hint | **A3** | ESTABLISHED | multi-section / candidature | 3 |
| RB-25 | Candidat absent viewer | 7 | pending=null | seal never | suite RB-24 | A3 | ESTABLISHED | pending inspectable | 3 |
| RB-26 | Annonce vs ack | 7 | message tail | appendDocumentEffectAck | mapping NOT_EXECUTED trompeur | A3 | ESTABLISHED | ack raison réelle | 3 |
| RB-27 | GLOBAL_TOKEN T8/T11 | 8,11 | resources_json | envelope | used≥200k | **B1** | ESTABLISHED | fork/headroom | 4/5 |
| RB-28 | Reprise T8 échoue | 8 | same work | continue saturated | budget+no candidate | B+A | ESTABLISHED | reprise utile | 3/5 |
| RB-29 | Mode révision sticky | 10 | BROWSER | document focus UI | clear manquant | D | PARTIAL | clear on intent change | 6 |
| RB-30 | « Aucune conclusion » | 11 | msg + continuation.ts | state sans ANSWERED | conclusions non persistées | **B2** | ESTABLISHED | persist acquis | 4 |
| RB-31 | Note non créée | 11 | documentSave null | exhaust+block | B1+B2+create path | A+B | ESTABLISHED | create from acquis | 4 |

### Causes communes (regroupement macro-lot)

1. **DOC-REVISE-PIPELINE** — RB-24,25,26,28(+),31(+)
2. **COG-ENVELOPE-CONTINUITY** — RB-27,28,30,31
3. **LIVE-ACTIVITY-PROJECTION** — RB-01,02,14,15,16,17,20,21,22,23
4. **SAS-IQ-PERSONA-UX** — RB-03..13,18,19,29

## 12. Contrat du macro-lot correctif intégré

**Nom de travail:** ML5 Livraison 1 — Correctif intégré RoomBooking (A∪B∪C∪D)

**IN:** chaînes DOC-REVISE, COG continuity, LIVE activity producers+UI lifecycle, SAS/IQ personnalité, acks honnêtes, Markdown/CSS ciblés.
**OUT:** WEB LIVE, D8, livraison 2, hausse plafonds 200k/24 comme fix, nouveau conducteur parallèle, nouveau fournisseur, refonte Figma page entière, merge doc branches.

**Ordre proposé (une livraison):**
1. DOC-REVISE (bloquant UAT-15) + ack honesty
2. COG fork/persist conclusions (bloquant UAT-16)
3. LIVE activity producers + single UI + DRAFT silence
4. SAS/IQ/persona/UX polish
5. Preuves scénarios 1–7 DEV → candidat → handoff → UAT Morris

**Arbitrage Morris éventuel:** stratégie multi-section (API multi-span vs imposer full-document proposal). Recommandation: multi-span atomique + full proposal si H1+toutes sections.

**Intégrateur:** Cursor delivery sous mandat borné post-GO.
**Gates:** ChatGPT review → GO Morris cutover → UAT RoomBooking rapide.

## 13. Stratégie de preuves (scénarios 1–7)

Tel que mandat §14 — discriminants obligatoires:
- Sc3: Message naturel → candidat réel §2+§3 → conserve → v2 exacte (pas fixture).
- Sc4: Git multi-source → note sans re-saturation ; conclusions réutilisées.
- Sc2: activité ops pendant travail long ; pas DRAFT parasite.
- Sc5: budget réellement saturé → restitution utile + pas d'effet auto.

## 14. Non observé / réserves

- Captures PNG non dans Git — s'appuyer sur DB + PV.
- Coût USD non mesuré (estimatedCostUsd null).
- modelApplied UNVERIFIED.
- Cookie ENV-01 ports — réserve inchangée.
- F2 / USER ACCEPTED — non déclarés.
- RB-03/04/05/07/10/19/22/23/29: PARTIAL (UI/CSS) — causes directionnelles établies, pixels non rejoués ici.

## 15. Instruction ChatGPT

Relire ce handoff distant. Challenger surtout: (1) multi-section revise vs full doc, (2) fork work vs raise budget, (3) activity producers vs labels-only. Vérifier couverture RB-01..31. Préparer mandat delivery intégré après arbitrage si besoin.

## 16. Statuts finaux

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED · Livraison 1 NON ACCEPTÉE.
