# SFIA STUDIO NEXT — ML5 R5 — DIAGNOSTIC CAUSAL RÉSIDUEL

**Date rapport :** 2026-11-25 (Europe/Paris)  
**Cycle :** 9 — QA / validation — typologie INC — Critical  
**Scope :** `projects/sfia-studio-next/`  
**Mode :** READ-ONLY RECETTE — aucune modification produit — aucun LIVE nouveau  
**Verdict :** `STOCKTRACK RESIDUAL DOCUMENTARY GAP — FIRST DIVERGENCE IDENTIFIED — TARGETED CORRECTIVE REVIEW REQUIRED.`  
**État :** ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED

---

## 1. Git Truth et identité RECETTE

| Contrôle | Attendu | Observé | Statut |
|---|---|---|---|
| Workspace DEV | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` | OK | OK |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` | OK | OK |
| HEAD documentaire | `42b8ee2e5542f0221d30dac92db3ab774b1fb349` | OK | OK |
| Origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` | OK | OK |
| Merge-base | = origin/main | OK | OK |
| SHA code servi | `e012401f6af438df2168f3efb069bbabd03e80c0` | Worktree RECETTE HEAD | OK |
| Tree code | `fd5492926a6a9b892eaac7d9e2b6f48c76ed6d29` | OK | OK |
| Web tree | `d88b9aa38c8256e835fa13c3734ab7e650e07fb9` | OK | OK |
| Staged | aucun | OK (seul `.tmp-sfia-review/chatgpt-review.md` modifié local) | OK |
| RECETTE URL | `http://127.0.0.1:3200` | 200 `/login` · BUILD_ID HTML `KotrF7y02wbZN79HDsjAb` | OK |
| RECETTE PG | `:5434` · `sfia-next-recette-pg` · DB `sfia_next_recette_ml4` | OK | OK |
| DEV | `:3100` / PG `:5433` | Listen OK · isolé | OK |
| Worktree RECETTE | `…/sfia-workspace-next-ml5-recette-build-e012401f6af4` | LaunchAgent `ml4d-ux004` → start script BUILD `KotrF7y02wbZN79HDsjAb` · `SFIA_SOURCE_SHA=e012401f…` | OK |
| Digest cutover | `74a4459ec1eaead042c8dbd02b8487b7cb468397c45963c86c39f2dc875eb374` | Cohérent avec enregistrement cutover précédent | OK |

**STOP non déclenché.** Aucun reset/rebase/merge. RECETTE non mutée.

---

## 2. Sources effectivement lues

### Méthode (origin/main)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md` (§7.10–7.11, §8, §9)
- CKC Cycle 9 QA : `pilots/04-qa-validation.md` (applicabilité)
- ENV-01 blob `14b61f0d…` — REQUIRED — RECETTE RO respectée
- Product versioning blob `8bc93e0f…` — N/A (diagnostic sans delivery)

### Branche documentaire candidate `2f87b7d8…`
- PV SOURCE PRINCIPALE blob `4c0f7ac3…` — `recette-utilisateur-ml5-interventiontrack-20261125.md` (dont §8 StockTrack / rejeu)
- Handoff autonomie `69d3d3e1` / blob `3ead1cd1…`
- Diagnostic antérieur `383ea251…` — comparaison ciblée uniquement

### Code servi (worktree / branche delivery, SHA `e012401f`)
- `run-nora-cognitive-turn.ts` — `mergeDocumentProductionBody` / `documentProductionFromReply`
- `service.ts` — C20 consolidation `documentProposal` ; scellement REVISE ; activité objective
- `document-command.ts` — `canonicalizeDocumentProposal` / `contentSha256`
- `document-candidate.ts` — stash candidat
- `d4-read-tools.ts` — `compare_document_proposal`
- `nora-adapter.ts` — instructions autonomie vs « selon stratégie »
- `activity-labels.ts` / `NoraLiveActivity.tsx`
- `page.tsx` (projet) / `TravailViewer.tsx`
- `SasCreateProgressPopup.tsx` / `tokens.css` (anneau)
- Test LIVE `ml5-documentary-autonomy-live.pg.test.ts`

### Preuves PostgreSQL RECETTE (READ ONLY)
Transactions / `\copy` / SELECT uniquement. Aucun WRITE.

---

## 3. StockTrack — identités et chaîne des contenus

### Identités (non inventées)

| Entité | ID |
|---|---|
| Projet | `proj_a488d0a4-95f9-498c-8b06-db39dd8c3443` — StockTrack — créé `2026-11-25 21:23:12+00` |
| Préparation | `prep_91431e0d-73ac-4c92-bbac-f4ecff84d1dc` |
| Conversation | `conv_d8226fb7-184a-433a-90b6-df97a385b28b` |
| Document | `doc_a1368667-df91-4fee-87c2-63cf030cea05` — *StockTrack — Conception fonctionnelle V1* |
| V1 | `drev_63b5ef17-1b17-4ecd-bd51-eea42b104830` — 4487 chars — status AVAILABLE |
| Message révision (user) | `msg_1dad7c1f-ffd5-40a7-aedc-b8391f1b7a22` |
| Tour révision | `tcmd_10d10cfc-247e-4c31-94b3-864458208458` — `2026-11-25 21:38:06+00` |
| Génération | `gen_1c83b3da-9844-49d8-b69b-ede06e5d3bad` |
| Assistant | `msg_ebf12b66-8427-4766-a3bd-679052d881bc` |
| Travail cognitif | `cgw_0e1e03e0-51e3-444e-8496-d125e4591425` — **resumed=true** (créé au CREATE V1) |
| Candidat | `pdoc_75700963-e64e-4d64-8609-1b6ebc0f88fb` — PENDING |
| contentSha256 | `92a31ae718dccac2273955b3987639270e011b2d2edf21b455c73aa3595e925a` |

### Empreintes (méthode unique)

`SHA-256(title || "\0" || contentMarkdown)` — `document-command.ts` `contentSha256`.

| Étape | Identité | Origine | Empreinte corps/paire | RM-02 modifiée | REC-03 modifiée | Diff vs V1 | Preuve |
|---|---|---|---|---|---|---|---|
| 1. V1 PG | `drev_63b5ef17…` | `document_revisions` | body SHA-256 `b687a2a9…` (16) · 4487 chars · 1× H1 | NON | NON | — | PG RO |
| 2. Lecture Nora | 2× `read_project_document_revision` | `nora_activity_events` seq 2–3 | NON OBSERVÉ (corps outil non persisté) | NON OBSERVÉ | NON OBSERVÉ | — | activity only |
| 3. Corps soumis à compare | — | — | **NON OBSERVÉ** | NON OBSERVÉ | NON OBSERVÉ | — | `toolCallsObserved=2` = 2 lectures ; pas d’événement compare ; payloads absents |
| 4. Résultat comparateur | — | — | **NON OBSERVÉ** | — | — | Nora *annonce* 2 lignes / 46 identiques | replyDraft seulement |
| 5. `documentProposal` final stocké | SQ dans `result_json` | après C20 | paire `92a31ae7…` · **9113 chars · 96 NL · 2× H1** | OUI (2ᵉ copie) + NON (1ʳᵉ) | OUI (2ᵉ) + NON (1ʳᵉ) | = V1 ∥ révisé | PG · `cand == dp` |
| 6. Fence assistant | `msg_ebf12b66…` | 1 fence `sfia-document` | 2× `# StockTrack` | idem | idem | concat | PG messages |
| 7. Sélection service | `mergedContent = reviseProposalContent` | `service.ts` | = proposal après C20 | — | — | — | code + identité cand=prod |
| 8. `reviseProposalContent` | `canonicalize(documentProposal)` | post-C20 | = prod cognitive | — | — | — | |
| 9. Corps scellé | stash candidate | `document-candidate` | paire `92a31ae7…` **MATCH** recomput | — | — | — | PG |
| 10. Candidat PG | `pdoc_75700963…` | `result_json.pendingDocumentCandidates[0]` | **startswith(V1) + `\n\n` + doc révisé** | première moitié NON | première NON | p0≡V1 ; p1 = +3 caractères / `AB` | PG |
| 11. Projection API | `pendingDocumentCandidate.contentMarkdown` | turn result | même corps 9113 | — | — | — | result_json |
| 12. Objet visionneuse | `setViewer({ markdown: pendingCand.contentMarkdown })` si `documentFocusRef` | `page.tsx` | NON OBSERVÉ navigateur ce cycle | — | — | — | code path |
| 13. Markdown rendu | `TravailViewer` → `SafeMarkdown` | resource.markdown | NON OBSERVÉ DOM | symptôme UAT = lignes **initiales** en tête | — | cohérent avec p0=V1 | PV §8 + forme candidat |

**Normalisation :** aucune déséchappement Studio observé sur le corps final. Un export `\copy` texte peut *paraître* contenir des `\n` littéraux ; en JSON/PG natif le corps a de **vrais** LF (96). Empreinte paire MATCH sur le corps à LF réels.

**Production cognitive :** `production_json.limits = ["MERGE_MODE_APPEND"]` · 2 parts (`gen` CREATE + `gen` REVISE) · `contentMarkdown` **identique** au candidat.

---

## 4. Diff réel V1 / proposition / candidat

### V1 (extrait)
```
| **RM-02** | Une référence et un libellé non vides sont obligatoires. Une même référence ne peut désigner qu’un seul article. |
| **REC-03** | … sans référence, sans libellé, puis avec une référence déjà utilisée … |
```

### Seconde moitié du candidat (révision attendue)
```
| **RM-02** | … La référence doit comporter au moins trois caractères. … |
| **REC-03** | … puis avec une référence de deux caractères non utilisée (`AB`) … |
```

### Forme scellée
`contentMarkdown = V1 + "\n\n" + document_révisé`  
Longueurs : p0≈4489 · p1≈4624 · total 9113.  
`cand.startswith(v1) === true`.

Nora annonce correctement le *diff de la seconde moitié* vs V1, mais le **corps scellé n’est pas cette seconde moitié seule**.

---

## 5. Premier point de divergence — StockTrack

### Arbre de décision

| Cas | Qualification StockTrack |
|---|---|
| **A** Production finale sans les changements | **PARTIEL** — les changements existent, mais seulement dans la 2ᵉ copie ; la 1ʳᵉ est V1 intacte |
| **B** Production OK / candidat KO | **NON** — candidat ≡ production ≡ documentProposal final |
| **C** Candidat OK / API KO | **NON** — API porte le même corps |
| **D** API OK / visionneuse V1 | **NON comme cause première** — la visionneuse, si elle affiche le candidat, affiche un corps qui *commence* par V1 |

### CONFIRMED ROOT CAUSE

**Chaîne deterministic :**

1. CREATE V1 et REVISE partagent le **même** cognitive work `cgw_0e1e03e0…` (`resumed=true`).
2. `documentProductionFromReply` appelle `mergeDocumentProductionBody` avec `mergeMode` **absent** (Nora n’émet pas `SUPERSEDE`).
3. Défaut C22 = **APPEND** → `prevDoc (V1) + "\n\n" + incoming (révisé)`  
   Preuve : `limits: ["MERGE_MODE_APPEND"]`.
4. **C20** dans `service.ts` (≈1260–1287) **écrase** `qualification.documentProposal.contentMarkdown` par `conductor.production.contentMarkdown` (corps consolidé APPEND).
5. Le scellement REVISE utilise ensuite `reviseProposalContent = canonical.proposal.contentMarkdown` **sans reconstruction fragmentaire** — fidèle, mais fidèle au **mauvais** corps.
6. La visionneuse reçoit ce candidat ; les lignes RM-02/REC-03 **en tête** sont celles de V1 → symptôme UAT.

**Extraits :**

```769:809:projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
export function mergeDocumentProductionBody(input: {
  prevDoc: string;
  incoming: string;
  mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  ...
}): ... {
  ...
  // Default APPEND — mid-work continuity.
  ...
  return {
    contentMarkdown: `${prev}\n\n${body}`.trim(),
    appliedMode: "APPEND",
  };
}
```

```1260:1287:projects/sfia-studio-next/web/src/domains/conversation/service.ts
// C20 / ML5 Option B: consolidated cognitive DOCUMENT body is the canonical
const consolidated = turn.conductor.production;
if (consolidated?.kind === "DOCUMENT" && consolidated.contentMarkdown?.trim() && reply.qualification) {
  ...
  reply = {
    ...reply,
    qualification: {
      ...reply.qualification,
      documentProposal: {
        title,
        contentMarkdown: consolidated.contentMarkdown,
      },
    },
  };
}
```

```2655:2657:projects/sfia-studio-next/web/src/domains/conversation/service.ts
// Documentary autonomy — seal Nora's complete proposal as-is.
const mergedContent = reviseProposalContent;
```

### Causes associées

| Cause | Qualif. |
|---|---|
| APPEND par défaut sur reprise CREATE→REVISE même work | **CONFIRMED ROOT CAUSE** |
| C20 réécrit `documentProposal` avec le corps consolidé | **CONFIRMED ROOT CAUSE** (vecteur d’écriture du candidat) |
| `mergeMode` non guidé / non émis (`nora-adapter` ne mentionne pas SUPERSEDE pour REVISE) | **LIKELY CAUSE** (contribue à tomber dans APPEND) |
| Instruction contradictoire « document COMPLET » vs « sections ou document complet selon stratégie » (`nora-adapter.ts` ≈1061 vs 1064) | **LIKELY CAUSE** (bruit de production ; **non** nécessaire pour expliquer le concat APPEND prouvé) |
| Fence comme autorité d’écriture | **NOT OBSERVED** — code privilégie `documentProposal` ; fence contient aussi le concat *après* consolidation |
| Comparateur « SUCCESS » trompeur | **NOT OBSERVED** comme exécuté (2 tools = 2 lectures) ; annonce de comparaison **non prouvée** par outil |
| Projection / cache UI seule | **NOT** root StockTrack |

---

## 6. Comparaison InterventionTrack (même build)

### Identités rejeu ≈ 21:10–21:13 UTC

| Entité | ID |
|---|---|
| Projet | `proj_de7b3fb5-…` InterventionTrack |
| Document | `doc_4898c72a-…` |
| Tour | `tcmd_b3590a0b-…` |
| Work | `cgw_ec344c6e-…` · **resumed=false** |
| Candidat | `pdoc_d5625426-…` PENDING · sha `2054030430cc4c8a…` |
| Production limits | `["MERGE_MODE_IDENTITY"]` · **1 part · 1× H1 · 6802 chars** |

### Diff V1 / candidat — **2 lignes seulement**, changements **présents**

- RM-02 candidat : « titre, description **et le lieu d’intervention** sont obligatoires… »
- REC-02 candidat : ajoute tentative sans lieu  
- V1 : formulations sans lieu obligatoire  

→ **CAS A/B StockTrack NE s’appliquent PAS.** Candidat PostgreSQL **correct**.

### Première divergence IT

Symptôme UAT (lignes anciennes + badge Candidate) **≠** contenu scellé.

Piste UI **LIKELY CAUSE (CAS D)** :

```2751:2791:projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
if (save?.reason === "PROPOSAL_PENDING_CONSERVATION" && pendingCand?.candidateId) {
  setPendingDocumentProposal(true); // → badge « Version N · Candidate »
  setProposalCandidateMarkdown(pendingCand.contentMarkdown ?? null);
  ...
  if (pendingCand.contentMarkdown && documentFocusRef.current) {
    setViewer(... markdown: pendingCand.contentMarkdown ...);
  }
}
```

- `pendingDocumentProposal` active le bandeau **indépendamment** du remplacement de `viewer.markdown`.
- Mise à jour markdown **conditionnée** à `documentFocusRef.current`.
- `proposalCandidateMarkdown` est **écrit et jamais lu** ailleurs (état mort) — Documents `readingMarkdown` reste sur `latestRevision` (V1).

Preuve navigateur DOM de ce rejeu : **NON OBSERVÉ** ce cycle → CAS D = **LIKELY**, pas CONFIRMED au même degré que StockTrack.

### Même cause que StockTrack ?

**NON.**  
StockTrack = concat APPEND+C20 (production/stockage).  
InterventionTrack = candidat fidèle ; défaut UAT côté **restitution / binding focus** (LIKELY).

Ne pas attribuer le KO IT à l’ancienne regex fragmentaire (supprimée) : le candidat contient déjà les deux modifications.

---

## 7. Comparaison TicketLite positif (test LIVE DEV)

Fichier : `ml5-documentary-autonomy-live.pg.test.ts`.

### Ce que le test prouve
- CREATE → document  
- REVISE → pending **ou** écriture directe  
- CONSERVE → V2 == `cand.contentMarkdown`  
- V1 intacte  

### Lacunes oracle (expliquent PASS technique / KO UAT)

| Assertion manquante | Impact |
|---|---|
| Contenu attendu RM-02 / REC-0x | Un candidat **concaténé** passe si conservé tel quel |
| Hors-scope bit-exact vs V1 hors lignes ciblées | Non vérifié |
| Une seule occurrence H1 / pas de préfixe V1 | Non vérifié |
| Identité corps comparé ↔ candidat final | Non vérifié |
| Projection API/UI visionneuse | Hors scope test |
| Branche alternative écriture directe | Autorisée (`else if AVAILABLE`) |

Sur un work cognitif repris CREATE→REVISE, le même APPEND peut produire un candidat « faux-positif » encore égal à V2 après conserve.

---

## 8. Explication PASS technique / KO UAT

1. **StockTrack UAT :** Studio scelle fidèlement un corps **APPEND** ; l’UI montre ce corps ; l’œil lit RM-02/REC-03 **V1** en tête. Nora annonce le diff de la **seule** moitié révisée.  
2. **TicketLite LIVE :** oracle d’**identité candidate↔V2**, pas de **conformité sémantique** ni d’**anti-concat**.  
3. **InterventionTrack UAT :** stockage OK ; restitution Candidate badge / markdown probablement désynchronisés (LIKELY).  
4. Autonomisation « sceller documentProposal » est respectée — mais C20 fait que documentProposal final ≠ proposition Nora pré-merge.

---

## 9. Causes LIVE et animation

### IT-01 — répétitions « Orientation… »

**CONFIRMED** mécanismes (pas une reformulation du prompt Pilote) :

| Niveau | Source | Texte |
|---|---|---|
| Événement ANNOUNCED | `service.ts` ≈1123 | « Orientation du travail à partir de la demande du Pilote » |
| Description de groupe | `activity-labels.ts` `GROUP_META.understand.description` ≈441 | **identique** |
| Titre de phase fallback | `PHASE_FALLBACKS` ≈21 | « Orientation du travail » |
| Événement COMPLETED | `service.ts` ≈1312 | « Orientation du travail terminée » |
| Headline mission | `projectMissionHeadline` lit objective/summary | peut reprendre la même phrase |

Sur StockTrack revise : 4 events (objective ANNOUNCED, 2× source, objective COMPLETED). Groupe « understand » + historique terminal répètent les formulations.  
**Correction minimale future :** supprimer le **niveau redondant** (description de groupe = copie de l’ANNOUNCED, ou ne pas matérialiser ANNOUNCED+COMPLETED comme double narration), pas seulement renommer.

Consultation documentaire : **persistée** (seq 2–3) ; absente d’une capture terminale = filtrage/historique UI, **pas** perte PG (CONFIRMED présence events).

Compare documentaire : **pas** d’événement activity dédié même si l’outil existait — et ici non prouvé appelé.

IT-03 « Réponse Nora disponible » : **non reproduite** sur ces rejeux — ne pas rouvrir.

### IT-02 — anneau SAS statique

Code servi :

- Classe `fig-sas-progress-ring-spin` appliquée sur l’étape courante (`SasCreateProgressPopup.tsx` ≈242).
- Keyframes `fig-sas-progress-spin` + `animation: … 1.1s linear infinite` (`tokens.css` ≈851–862).
- `@media (prefers-reduced-motion: reduce) { animation: none }` ≈865–868.

**LIKELY** si préférence OS reduced-motion active ; **NOT OBSERVED** preuve navigateur / computed style sur la création StockTrack (interdit de rejouer). Géométrie 35×35 + transform-origin 50% 50% présentes.

IT-04 / IT-05 : hors rejeu discriminant — non rouverts.

---

## 10. Recommandation corrective minimale

**Ne pas** refondre le moteur documentaire. **Ne pas** réactiver fragments/sections.

### Correctif P0 — StockTrack / APPEND+C20 (stockage)

Cible unique : pour un acte **REVISE** (candidat d’inspection), le corps scellé doit être la **proposition de révision du tour**, pas la consolidation cognitive multi-parts.

Options minimales (arbitrage Morris+ChatGPT) — une seule suffisante si bien choisie :

1. **C20 conditionnel :** ne pas écraser `documentProposal` par `production.contentMarkdown` lorsque `production.limits` contient `MERGE_MODE_APPEND` **ou** lorsque l’intent est `d4.revise_document` / candidat pending — préférer le `documentProposal` Nora du tour (ou SUPERSEDE explicite).  
2. **Merge REVISE :** pour `d4.revise_document` / `workDisposition=COMPLETE`, défaut **SUPERSEDE** (ou CORRECT) au lieu d’APPEND lorsque `incoming` est un document complet.  
3. **Garde scellement :** refuser / recalculer si `contentMarkdown` contient ≥2 H1 titre identiques ou `startswith(baseContent)` + second H1 (filet anti-concat).

Préserver : autonomisation Nora ; seal as-is une fois le corps **du tour** choisi ; conserve exacte ; permissions Pilote.

### Correctif P1 — InterventionTrack / restitution (LIKELY)

- Toujours appliquer `pendingCand.contentMarkdown` au viewer quand pending, **même si** `documentFocusRef` absent (créer focus minimal).  
- Brancher Documents / `readingMarkdown` sur `proposalCandidateMarkdown` en mode proposition (état aujourd’hui mort).  
- Badge Candidate **seulement** si markdown viewer ≡ candidat (sha).

### Correctif P2 — LIVE labels

- Retirer la description de groupe dupliquée **ou** l’ANNOUNCED générique redondant avec le titre de groupe ; garder sources dépliables utiles.

### Correctif P2 — oracle test

Assertions discriminantes (sans élargir FinOps) : deux lignes cibles, hors-scope, anti-concat H1, sha candidat = API = (si applicable) fixture UI.

---

## 11. Blast radius, risques et tests

| Zone | Risque | Mitigation |
|---|---|---|
| Continuation cognitive multi-segments DOCUMENT | APPEND encore utile mid-work | Limiter SUPERSEDE au REVISE COMPLETE / pending candidate |
| C20 Option B CREATE | Ne pas casser CREATE multi-parts voulu | Conditionner au mode REVISE / mergeMode |
| Conservations en cours RECETTE | Candidats StockTrack encore concaténés | Ne pas conserver tels quels ; après fix, nouveau tour |
| IT UI | Faux sentiment de Candidate | P1 focus/markdown |

**Tests futurs (ne pas modifier ce cycle) :**
1. Reprise même `cgw` CREATE→REVISE → candidat **sans** préfixe V1 ; RM/REC attendus.  
2. Conserve → V2 == candidat == attendu sémantique.  
3. IT : pending sans focus préalable → viewer markdown sha = candidat.  
4. Activity : une seule narration « orientation » non triplée.  

---

## 12. Réserves et preuves manquantes

| Élément | Statut |
|---|---|
| Payloads exacts `compare_document_proposal` StockTrack/IT | NON OBSERVÉ |
| `documentProposal` Nora **avant** C20 | NON OBSERVÉ (seul post-C20 persisté) |
| DOM / screenshot visionneuse IT | NON OBSERVÉ ce cycle |
| Préférence reduced-motion au moment SAS StockTrack | NON OBSERVÉ |
| Rejeu digest octet-à-octet archive cutover | Cohérence enregistrée ; non recalculée ici |

Fake/Real : preuves PG + code = déterministes ; annonces Nora ≠ preuve outil ; UI IT = LIKELY.

---

## Synthèse d’arbitrage (pour ChatGPT / Morris)

1. **StockTrack — CONFIRMED :** première divergence = `MERGE_MODE_APPEND` sur work repris + **C20** qui scelle le concat ; pas une panne de projection pure.  
2. **InterventionTrack — LIKELY autre cause :** candidat correct ; restitution Candidate/markdown.  
3. Correctif minimal = **désaccoupler scellement REVISE de la consolidation APPEND**, puis **fiabiliser le binding viewer**.  
4. Pas de nouvelle refonte documentaire ; pas de LIVE ; RECETTE inchangée.

---

## Review Handoff

- **Required** · Mode **publish-in-cycle** · Push **oui — L3 borné**
- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Message : `docs(review-handoff): diagnose residual StockTrack documentary projection and activity gaps`

## Instruction ChatGPT (§9.1)

Examiner ce handoff. Identifier la responsabilité fautive : **consolidation cognitive APPEND + C20** (StockTrack) ; **restitution Candidate** (InterventionTrack, LIKELY). Arbitrer avec Morris le correctif minimal (P0 puis P1). Ne pas recommencer une refonte générale. RECETTE inchangée. ML5 OPEN. R5 IN PROGRESS. R6 NOT STARTED. NO RELEASE. NOT ADOPTED.
