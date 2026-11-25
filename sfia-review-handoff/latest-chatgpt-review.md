# SFIA Studio Next — ML5 / R5 — AssetTrack UAT Causal Diagnosis
**Cycle 9 · Typologie INC · Profil Critical · Review Pack FULL**  
**Date:** 2026-11-25 · **Lane:** diagnostic only · **NO CODE CHANGE · NO RELEASE · NOT ADOPTED**

**Verdict cible:** `ASSETTRACK UAT CAUSAL DIAGNOSIS COMPLETE — READY FOR CHATGPT REVIEW — CORRECTIVE OPTIONS TO ARBITRATE.`

---

## 1. Git Truth Check

| Item | Valeur | Statut |
|---|---|---|
| Workspace DEV | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` | OK |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` | OK |
| HEAD produit | `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` | OK (= tip rapporté) |
| Merge-base vs tip main rapporté `997897fd…` | `997897fd7cf914771e7d08e8030dc7123fab7d25` | OK |
| Local `main` tip | `4b1a0580…` (en avance sur le tip main cité dans le brief) | NOTE — pas de mutation |
| Staged | aucun | OK |
| Unstaged produit | aucun | OK |
| Untracked/modifié local autorisé | `.tmp-sfia-review/chatgpt-review.md` (ce pack) | OK |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-ca0b114c6f73` @ `ca0b114c6f7336ba0073d03f8d391fe05182bf86` | OK |
| BUILD_ID RECETTE (HTML) | `RkthxGW_bZUygxYbwP9Hq` | OK |
| BUILD_ID DEV (HTML) | `AWs47BqI_EoJvkDkE4Lzi` | OK |
| Ports | RECETTE `:3200` / PG `:5434` · DEV `:3100` / PG `:5433` | OK |
| Mutations | aucune (ENV-01 RO respecté) | OK |

**STOP non déclenché.** Identités runtime alignées avec le brief. Aucune branche produit modifiée.

---

## 2. Sources réellement consultées

### Canon / méthode (main / blobs cités)
- UAT AssetTrack blob `48288156…` → dump local `/tmp/sfia-assettrack-diag/uat-assettrack.md`
- `forecast-builder.ts`, `initial-qualification` (via résultats IQ)
- `semantic-qualification.ts` (`effectIntents`, `projectStudioEffects`)
- `service.ts` (activité, consolidation documentProposal, confront, CREATE/REVISE, PREPARE conflict surface)
- `document-command.ts` (`confrontProposalWithFence`, `isLegacyUntitledSectionFence`)
- `document-act.ts` (section revise — non SECTION_AMBIGUOUS ici)
- `run-nora-cognitive-turn.ts` (titres `document-part-N`, fence LEGACY)
- `nora-adapter.ts` / `git-activity-note.ts` / `NoraLiveActivity.tsx` (projection)
- `SasCreateProgressPopup.tsx` + `preparations/[preparationId]/page.tsx`
- Scripts `web/scripts/ml5-cognitive-completion-short-live.mjs` (+ famille ml5-adaptive-*)
- Handoffs ciblés (cutover / RoomBooking / cognitive) — lecture différentielle, pas relecture intégrale ML5
- Ancien Studio `projects/sfia-studio/` — scan ciblé activité (ProjectAssistantPanel) — **IMPLEMENTED présent, BEHAVIOR PROVEN limité**

### Preuves AssetTrack RECETTE (READ ONLY)
- Projet `proj_64fd0712-1259-421f-bb0f-cd18471724fa`
- Préparation `prep_6509b67c-63f6-47b2-9d89-d515a9426cb7`
- Conversation `conv_ecbf2687-dcdb-46a1-8ae4-a784fd5b05fa`
- Dumps `/tmp/sfia-assettrack-diag/*` (messages, turns, result-tcmd_*, docs, revisions, activity, iqop, prep projection)

**Fake/Real Qualification:**
- **Trace réelle UAT AssetTrack** = états PostgreSQL + `result_json` des tours.
- **Preuve code** = lecture déterministe du SHA servi / worktree DEV.
- **Hypothèse** = marquée explicitement ci-dessous.
- **Aucun PNG inventé.** Aucun nouvel appel Nora LIVE.

---

## 3. Identité AssetTrack et runtime

| Objet | Id / preuve |
|---|---|
| Projet | `proj_64fd0712-…` |
| Préparation SAS | `prep_6509b67c-…` · projection name=AssetTrack, intention prêts matériel, openQuestions=[] |
| IQ | `iqop_50a32462-…` · **status CLARIFICATION** · `narrativeSource=STRUCTURED_FALLBACK` |
| Documents persistés | (1) `doc_85201640` / `drev_e9e0` Conception V1 @ 15:45:49Z · (2) `doc_7be8d2cd` / `drev_d7a` Note double prêt @ **16:48:33Z** |
| Trajectoire D5 | **0** `trajectory_revisions` · **0** `project_cycles` |
| Git link | présent après rattachement (AT-10 retirée) |
| Runtime | RECETTE `ca0b114c` / BUILD `RkthxGW_…` |

---

## 4. Chronologie des tours significatifs

| Tour | tcmd | Demande (résumé) | Qualification / mode | Effet propriétaire | Projection UI |
|---|---|---|---|---|---|
| SAS→projet | IQ | création projet | **CLARIFICATION** fallback | aucun cycle/trajectoire | Popup « TRAJECTOIRE PRÊTE » (**AT-02/03**) |
| 1–2 | bbeb / f93d | cadrage métier | REPLY | — | OK conversationnel |
| 3 | (msg5 assistant IQ) | — | STRUCTURED_FALLBACK clarification | — | Report responsabilité Pilote |
| 4 | 332c5a22 | « quelle trajectoire… » | `d5.pilotage_command` **PREPARE** PROPOSE_TRAJECTORY | **aucun objet D5** | Texte générique (**AT-07**) |
| 5 | 96405ddd | « Prépare-moi un document… » | `d4.create_document` **REQUEST_EFFECT** | CREATE `drev_e9e0` AVAILABLE | Visionneuse OK |
| 6 | aff2c9ea | revise RM-03 / R04 inspection | `d4.revise_document` **PREPARE** | `documentSave=NOT_EXECUTED` **PROPOSAL_SOURCE_CONFLICT** · pending=null | V1 historique (**AT-08/09**) |
| 7–8 | git | investigation | outils Git OBSERVED | acquis Git | Activité informative (**acquis à préserver**) |
| 9 | 25c6e4e1 | note depuis investigation | `d4.create_document` **PREPARE** | documentSave=**null** · pending=null | Annonce visionneuse sans doc (**AT-12**) |
| 10 | a81dba57 | vérifier / créer si absente | read EXPLORE + create **REQUEST_EFFECT** · source PRIOR_ASSISTANT_MESSAGE | CREATE `drev_d7a` @ 16:48:33 | 2 docs (**AT-13**) |

**Statuts de preuves:** chaque ligne ci-dessus = **PROVEN** (result_json + tables documents/revisions).

---

## 5. Carte des interactions D3 / outils

### Comment les outils sont exposés
- SDK tools + allowlist profil (`nora-adapter`) → exécution native.
- Qualification structurée (`semanticQualification.intents[]`) avec `capabilityId` + `mode` ∈ {EXPLORE, PREPARE, REQUEST_EFFECT}.
- Projection Studio `projectStudioEffects` → `documentAct` / publication / etc.
- Admission D4/D5/D7 via `effectIntents` (**filtre REQUEST_EFFECT uniquement**).
- Canaux concurrents de contenu documentaire : `documentProposal` structuré · fence ` ```sfia-document` · production cognitive consolidée · `documentSource` PRIOR_ASSISTANT_MESSAGE · stash `pendingDocumentCandidate`.

### Conflit architectural central (PROVEN)
```520:523:projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
}
```
```691:735:projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
  const effects = effectIntents(q);
  ...
  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
  ...
  // documentAct ONLY if reviseDoc/createDoc ∈ REQUEST_EFFECT
```

**Conséquence:** un intent `PREPARE` correctement qualifié (inspection avant conservation, « Prépare-moi une note ») **n’entre pas** dans `documentAct`. Le propriétaire D4 ne stash pas de candidat inspectable et n’écrit pas. Nora peut néanmoins narrer le succès dans `replyDraft`.

### Consolidation qui pollue le titre (PROVEN code)
```1269:1288:projects/sfia-studio-next/web/src/domains/conversation/service.ts
// consolidated cognitive DOCUMENT → overwrite documentProposal
title = qualification.documentProposal?.title || consolidated.parts[0]?.title || "Document"
```
Parts fence → titres `document-part-N` (`run-nora-cognitive-turn.ts` ~853–874).

### Confront fence (PROVEN)
`confrontProposalWithFence` exige identité titre+contenu sauf exception section-scoped LEGACY_UNTITLED. Avec `documentAct.kind===NONE`, `sectionScopedConfront=false` → conflit sur titre `document-part-1` vs fence untitled même si corps identique.

Surface PREPARE-only:
```3947:3957:projects/sfia-studio-next/web/src/domains/conversation/service.ts
// if proposalAuthorityConflict && documentAct.kind === "NONE" → NOT_EXECUTED reason=conflict
```

### Réponses aux questions outils
1. **Contrat outil cohérent/simple ?** Non — voies concurrentes + mode PREPARE invisible au propriétaire.
2. **Voies concurrentes documentaires ?** Oui (liste ci-dessus).
3. **Création OK / révision KO ?** Création tour 5 = REQUEST_EFFECT ; révision tour 6 = PREPARE → documentAct NONE → CONFLICT.
4–10. voir sections 6–15.

---

## 6. Diagnostic révision documentaire (AT-08 / AT-09)

### Symptôme / attendu
- Nora annonce RM-03 + R04 modifiés pour inspection.
- UI = révision 1 inchangée · **aucun candidat V2**.

### Première divergence (PROVEN)
1. Intent sémantique correct : `d4.revise_document` · **mode PREPARE** · sectionHint multi · effectCondition OPEN (inspection).
2. `projectStudioEffects` ignore PREPARE → **`documentAct.kind = NONE`**.
3. Production cognitive / fence partielle (sections 2+4) · `documentProposal.title = "document-part-1"` · content == fence (3214 chars) **PROVEN**.
4. Confront non section-scoped → **`PROPOSAL_SOURCE_CONFLICT`**.
5. Branche REVISE (stash `pendingDocumentCandidate` / `PROPOSAL_PENDING_CONSERVATION`) **jamais atteinte**.
6. `documentSave = { status: NOT_EXECUTED, reason: PROPOSAL_SOURCE_CONFLICT }` · pending=null.
7. Visionneuse reste sur `drev_e9e0` v1.

**≠ RoomBooking SECTION_AMBIGUOUS.** Ici la rupture est **mode PREPARE × projection documentAct × confront titre**, pas l’ambiguïté de section.

### Causes
| Niveau | Cause | Confiance |
|---|---|---|
| Immédiate | documentAct NONE + PROPOSAL_SOURCE_CONFLICT → pas de candidat | **ÉLEVÉE** |
| Racine A | `effectIntents` / `projectStudioEffects` excluent PREPARE | **ÉLEVÉE** |
| Racine B | Titre `document-part-1` + fence partielle LEGACY | **ÉLEVÉE** |
| Secondaire | Contrat « inspection avant conservation » pousse Nora vers PREPARE (comportement sémantique correct) | **ÉLEVÉE** |

### Fichiers
`semantic-qualification.ts` · `service.ts` (~1269, ~2000–2037, ~2611–2910, ~3947) · `document-command.ts` · `run-nora-cognitive-turn.ts`

### Options
- **A (minimale):** (1) projeter PREPARE revise/create vers stash candidat inspectable sans write ; (2) ne pas écraser un titre documentaire par `document-part-N` ; (3) confront section-aware même si documentAct dérivé du intent PREPARE.
- **B (simplification contrat):** un seul pipeline — base révision → proposition unique → validate → inspect → conserve (Pilote). Supprimer la concurrence fence/proposal comme autorités parallèles.
- **C (stratégie contenu):** full rewrite vs patch section — les deux viables ; patch préférable pour hors-scope ; full rewrite plus simple outillage mais risque dérive. **Ne pas imposer sans GO.**

---

## 7. Diagnostic création depuis acquis (AT-12 / AT-13)

### La note existait-elle après le tour 9 ?
**NON (PROVEN).**  
- Tour 9 `tcmd_25c6e4e1` : intent CREATE **PREPARE** · documentProposal complet présent · **documentSave=null** · pending=null.  
- Premier insert DB note : `doc_7be8d2cd` / `drev_d7a` @ **2026-11-25 16:48:33Z** = tour 10.

### Pourquoi Nora l’a annoncée (tour 9)
- `replyDraft` + fence Markdown construisent une narration « disponible dans la visionneuse ».
- Aucune admission D4 (PREPARE filtré) → **déclaration ≠ effet**.

### Tour 10
- Inventaire D4 : seule Conception V1 → condition SATISFIED.
- `d4.create_document` **REQUEST_EFFECT** · `documentSource=PRIOR_ASSISTANT_MESSAGE` (msg tour 9).
- CREATE AVAILABLE → bibliothèque à 2 documents · UI « Nouvelle version disponible : v1 ».

### Écart vs delivery technique
Script short-live : *« Prépare une courte note… **Crée le document D4** exploitable »* → modèle en **REQUEST_EFFECT** → preuves vertes.  
UAT tour 9 : *« Prépare-moi une note… »* sans impératif de création D4 → **PREPARE** → échec silencieux.

---

## 8. Diagnostic guidance D5 / CKI (AT-02 / AT-03 / AT-07)

### Catalogue / CKI
- Catalogue cycle types **disponible en code** (`CYCLE_TYPES` / `forecast-builder`).
- IQ AssetTrack : **CLARIFICATION** deterministic — **pas** de proposition de cycles persistée.
- Tour 4 : intent D5 PREPARE présent dans la qualification, **0** objets trajectoire/cycles en DB.

### Pourquoi la 1ʳᵉ réponse est une clarification (PROVEN)
```109:119:projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
// Heuristic first-cycle inference — LIVE NOT PROVEN (fixture lane)
const first = inferPreferredFirstCycle(...);
if (!first) return { kind: "CLARIFICATION", question: "Pour proposer une première progression…" };
```
`inferPreferredFirstCycle` ne matche que des **libellés de types de cycle** dans le texte. Intention « prêts de matériel » ≠ tokens → **null** → clarification exacte du message UAT (`narrativeSource=STRUCTURED_FALLBACK`).

### Pourquoi la pop-up dit « trajectoire prête » (PROVEN)
`page.tsx` : `CLARIFICATION` est **terminal** (`isTerminalQualification`) → `complete=true` → copy popup :
« PROJET CRÉÉ / TRAJECTOIRE PRÊTE » + « La première proposition de trajectoire … est disponible »  
**même si** le résultat est une demande de clarification (**AT-03**).

### Tour 4
- Nora produit une trajectoire narrative générique (conception → réalisation → validation).
- Intent `d5.pilotage_command` PREPARE — **pas d’admission D5** (même filtre REQUEST_EFFECT / pas d’objets).
- Pas d’ancrage CKI démontré dans les artefacts persistés.

### Régression
Le commentaire code assume explicitement que l’inférence heuristique n’est **pas** la guidance LIVE AC-02. La pop-up sur-promet. **Cause = design IQ + UX terminal, pas « Nora trop bête ».**

---

## 9. Diagnostic activité LIVE (AT-01)

### Producteurs observés (AssetTrack, PROVEN)
| Parcours | Phases | Qualité métier |
|---|---|---|
| A SAS / IQ | (hors journal conversation projet) | Popup steps |
| B Réponse simple | `nora.generate` ANNOUNCED→COMPLETED | Titre = extrait message utilisateur (« Prise en charge — … ») |
| C Guidance | idem generate | Générique |
| D Création doc | generate + éventuellement d4 source consult | Peu d’étapes métier create |
| E Révision | generate + `nora.source.d4` consult | Pas d’étape « proposition / conflit / pending » |
| F Git | `nora.source.git` DISCOVERED/CONSULTED + titres fichiers | **Informative** |

Code :
- Annonce : `service.ts` ~1124–1143 — summary depuis `content` utilisateur.
- Git : `git-activity-note.ts` → `gitMetierTitle(path|PR|sha|repo)` + journal tools dans `nora-adapter`.

### Pourquoi Git > autres
Git a un **producteur métier dédié** branché sur chaque tool call. Les autres parcours n’émettent que generate + éventuellement lecture D4, **sans** journaliser qualification / admission / refuse / pending.

### États « En cours »
DISCOVERED→RUNNING pour sources Git ; generate ANNOUNCED RUNNING jusqu’à COMPLETED. Des RUNNING peuvent coexister visuellement avec « Réponse disponible » si flush/order UI — **PROBABLE** (à confirmer en UI ; traces montrent COMPLETED generate après).

### Acquis à préserver
Identification consultations · noms fichiers · lectures partielles/complètes · liste sources enrichie · titres métier non-SHA.

---

## 10. Comparaison historique ciblée (ancien Studio)

| Critère | Ancien Studio | Next |
|---|---|---|
| DOCUMENTED | Parcours assistant / cockpit | Conducteur D3 + activity events |
| IMPLEMENTED | `ProjectAssistantPanel` « Prochaine étape », rails contexte | `NoraLiveActivity` + `nora_activity_events` |
| COVERAGE VERIFIED | Non rejoué ici | Partiel (événements AssetTrack lus) |
| BEHAVIOR PROVEN | **Non** (pas de campagne comportementale dans ce diagnostic) | Git path PROVEN informatif ; autres génériques PROVEN |
| KNOWN GAP | — | Pas de producteur métier unifié hors Git/D4-read |

**Principes réutilisables (sans porter le code) :**
1. Événements liés aux **opérations** (outil / owner), pas au texte utilisateur.
2. Titres métier stables (artefact, fichier, règle) — pas le prompt.
3. États terminaux honnêtes (refusé / pending / disponible).
4. Un seul journal alimenté par le conducteur D3 — pas un moteur parallèle.

---

## 11. Autres anomalies

| Id | Cause observable | Composant | Portée | Correctif recommandé |
|---|---|---|---|---|
| **AT-04** | Mixte tutoiement popup (« Accède », « ton ») vs vouvoiement IQ fallback (« précisez ») | `SasCreateProgressPopup` + `forecast-builder` | UX copy | Harmoniser registre Pilote (une politique) |
| **AT-05** | Bouton accès rogné — layout popup (padding/overflow) | `SasCreateProgressPopup` | UI | Ajustement layout ; non bloquant cognition |
| **AT-06** | `projectId` concaténé dans `setStatus(… → ${j.projectId})` page préparation | `preparations/.../page.tsx` ~834 | UX debug leak | Masquer id technique hors mode debug |
| **AT-11** | Sans dépôt : restitution générique | parcours Git absent | attendu | Améliorer message « aucune source Git » ; **ne pas** rouvrir AT-10 |
| **AT-10** | Retirée | — | — | — |

---

## 12. Comparaison preuves techniques / UAT

| Dimension | Test technique (ex. short-live) | UAT AssetTrack |
|---|---|---|
| Entrée | « … **Crée le document D4** » | « Prépare-moi… / inspection avant conservation » |
| Mode intent | REQUEST_EFFECT | PREPARE (tours 6, 9) |
| Endpoint | API turn authentifié script | Navigateur conversationnel |
| Effet | documentSave AVAILABLE asserté | null / CONFLICT |
| pending candidat | parfois asserté si chemin conserve | null |
| Visionneuse | souvent **non** assertée | échec utilisateur |
| Message Nora | non confronté à l’effet | narration ≠ effet |
| IQ / trajectoire | scripts hors ce path ou fixtures | CLARIFICATION + popup trompeuse |
| Variabilité modèle | prompt force create | formulation Pilote naturelle |

**Ce que les tests unitaires prouvent encore :** confront, merge section, seal — utiles.  
**Ce qu’ils ne prouvent pas :** parcours nominal Pilote PREPARE→inspect→conserve · projection visionneuse · cohérence narration/effet · IQ LIVE vs heuristique.

**Stratégie de preuve frugale recommandée :**
1. 1 scénario navigateur (ou API+UI assert) : PREPARE revise → pending visible → conserve.
2. 1 scénario : PREPARE create note → pending ou refuse explicite (pas narration seule).
3. 1 scénario : IQ sans mot-clé cycle → copy popup ≠ « trajectoire prête » si CLARIFICATION.
4. Garder unitaires owner ; **ne pas** multiplier campagnes 50 docs.

---

## 13. Causes communes éventuelles

1. **Filtre REQUEST_EFFECT** : PREPARE invisible aux propriétaires D4/D5 → effets absents malgré qualification correcte. *(AT-08/09, AT-12, AT-07 partiel)*
2. **Narration découplée de l’admission** : replyDraft annonce succès sans gate sur documentSave/pending/D5. *(AT-08, AT-12, AT-02 copy)*
3. **Autorités documentaires concurrentes** + consolidation `document-part-N`. *(AT-08/09)*
4. **IQ heuristique + UX terminal qui sur-promet**. *(AT-02/03)*
5. **Activité** : seul Git a un producteur métier riche. *(AT-01)*

**Ne pas forcer une cause unique** pour AT-04/05/06 (UX isolés).

---

## 14. Options de simplification

| Option | Contenu | Fiabilité | Fidélité | Coût cognitif | Hors-scope | Intégrité | Implémentation |
|---|---|---|---|---|---|---|---|
| **A** | Corriger causes (PREPARE→pending, titres, popup IQ, activité) | ↑↑ | haute si patch section | inchangé | bonne | haute | moyenne ciblée |
| **B** | Contrat unique base→proposition→validate→inspect→conserve | ↑↑↑ | haute | ↓ outils | dépend stratégie | haute | plus large, dette↓ |
| **C** | Full doc rewrite vs patch | rewrite plus simple ; patch plus fidèle | rewrite risque dérive | rewrite ↑ tokens | patch meilleur | les deux OK avec hash | choisir par type |

**Contraintes à conserver :** autorité Pilote · base révision exacte · intégrité candidat · traçabilité · versions · restrictions scope.

---

## 15. Proposition de macro-lot correctif (plus petit cohérent)

**Un seul macro-lot « Conducteur d’effets honnête »** (pas 12 micro-cycles) :

1. **P0 — Contrat PREPARE documentaire** : PREPARE create/revise → stash `pendingDocumentCandidate` (ou refuse explicite) · **jamais** narration « disponible » sans pending/save · conserve = REQUEST_EFFECT / action Pilote.
2. **P0 — Révision** : propager sectionHint depuis intent PREPARE · confront section-aware · ne jamais promouvoir `document-part-N` comme titre documentaire.
3. **P0 — IQ / popup** : distinguer CLARIFICATION vs PROPOSE dans copy « TRAJECTOIRE PRÊTE » ; remplacer heuristique-only par recommandation ancrée (catalogue/CKI) **sans** auto-ouvrir un cycle.
4. **P1 — Activité** : généraliser le pattern Git (titres métier + opérations owner) aux create/revise/pending/refuse ; conserver acquis Git.
5. **P2 — UX mineurs** AT-04/05/06.

**Hors lot :** FinOps / allocation adaptive / livraison 2 / reconstruction globale.

---

## 16. Impacts, risques, preuves de sortie

| Lot | Blast radius | Risque | Preuve de sortie |
|---|---|---|---|
| P0 PREPARE/pending | D3/D4 conversation | régression conserve | UAT : inspect V2 puis conserve → v2 DB |
| P0 revise titre/confront | document-command/service | faux positifs conflict | même scénario RM-03/R04 |
| P0 IQ popup | SAS UX + forecast | sous-promettre | CLARIFICATION ≠ « prête » |
| P1 activité | projection | bruit événements | titres ≠ prompt utilisateur |
| P2 UX | copy/layout | faible | revue visuelle |

Non-régression : CREATE REQUEST_EFFECT (tour 5) · Git investigation · conserve sealed candidate · RoomBooking chemins déjà verts **rejoués en UAT court**.

---

## 17. Incertitudes / manques de trace

- Ordre exact flush UI activité RUNNING résiduel : **PROBABLE**, logs navigateur non capturés.
- Contenu exact `titleProvenance` du parseur sur le tour 6 : non loggé ; déduit du conflit + égalité corps (**PROBABLE/PROVEN partiel**).
- Comportement historique Studio : **IMPLEMENTED ≠ BEHAVIOR PROVEN**.
- Captures PNG UAT : **non inventées**.

---

## 18. Décisions Morris nécessaires

1. Arbitrer **Option A vs B** (et rôle de C full vs patch) pour le contrat documentaire.
2. Confirmer que PREPARE doit **toujours** produire un candidat inspectable (recommandé) plutôt qu’un refuse dur.
3. Politique tutoiement Pilote.
4. GO distinct avant tout correctif (R6) — **pas de auto-delivery**.
5. Périmètre preuve de sortie (UAT court vs scripts).

---

## 19. Verdict

### Réponses explicites (1–10)
1. **Non** — contrat outil fragmenté (SDK + qualification + fence + production + admission filtrée).
2. **Oui** — plusieurs voies concurrentes pour un même effet documentaire.
3. Create nominal = REQUEST_EFFECT admis ; revise UAT = PREPARE → documentAct NONE → CONFLICT / pas de candidat.
4. Note absente après T9 ; créée seulement en T10 REQUEST_EFFECT depuis message T9.
5. IQ heuristique sans match lexical → CLARIFICATION ; popup traite CLARIFICATION comme trajectoire prête ; D5 PREPARE sans objets.
6. Producteur métier par tool call + titres fichier/repo — généralisable.
7. Principes : événements opérationnels, titres métier, états honnêtes — **sans** port de code ancien.
8. Scripts forcent REQUEST_EFFECT / n’assertent pas visionneuse ni PREPARE inspect ; UAT utilise formulations PREPARE naturelles.
9. Simplifier : une autorité proposition + PREPARE→pending ; réduire fence LEGACY au transport.
10. Macro-lot §15 « Conducteur d’effets honnête ».

### Verdict final
**ASSETTRACK UAT CAUSAL DIAGNOSIS COMPLETE — READY FOR CHATGPT REVIEW — CORRECTIVE OPTIONS TO ARBITRATE.**

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED.

### Instruction ChatGPT
Consulter le handoff distant. Vérifier causes PREPARE/`effectIntents`, CONFLICT revise, note T9/T10, IQ/popup, écart tests/UAT, options A/B/C. Préparer une recommandation de correction pour Morris. **Ne pas générer un delivery correctif sans revue + GO distinct.**
