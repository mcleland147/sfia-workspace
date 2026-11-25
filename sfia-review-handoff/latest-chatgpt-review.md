# SFIA Studio Next — Review Pack FULL
## ML5 R5 Cycle 9 QA — Diagnostic causal InterventionTrack

Generated: 2026-11-25T20:20:04Z
Mode: publish-in-cycle · Review Handoff L3 REQUIRED
Scope: `projects/sfia-studio-next/` · INC Critical · **diagnostic read-only**
Prior cutover handoff: `9f815095` · Prior FULL capability: `99fb720b` · AssetTrack causal: `ca3d90a9` (référencés, non republiés).

### Verdict

**INTERVENTIONTRACK RESIDUAL GAPS — CAUSAL DIAGNOSIS COMPLETE — READY FOR TARGETED CORRECTIVE DELIVERY REVIEW.**

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED.
Aucune modification produit. Aucune mutation RECETTE. Aucune bascule anticipée.

---

## 1. Git Truth Check

```
repo: mcleland147/sfia-workspace (origin https)
workspace: /Users/morris/Projects/sfia-wt-next-ml5-20261123
branch: sfia/next-ml5-integrated-delivery-20261123
HEAD: 8dec35c748e2d44f69a1c472052d7955147b3d47
TREE: a572e3973ae411aac15e04778ab60ae61dde6293
WEB_TREE: eea7b17bceb55b7ce1e31c742c84819e75696d36
origin/main: 997897fd7cf914771e7d08e8030dc7123fab7d25
merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
code tip app: b21df867 (inclus dans 8dec35c748e2d44f69a1c472052d7955147b3d47)
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

```

**Lanes (vérifiées):**
- RECETTE http://127.0.0.1:3200 · PG :5434 · worktree `…-b21df867acd4` @ `8dec35c748e2d44f69a1c472052d7955147b3d47` · BUILD_ID HTML `gzqaaKhie0CqcfpgrvMMp` — **MATCH**.
- DEV :3100 — non requis pour ce diagnostic RO (peut être down).
- Staged produit: **aucun**. Seul `.tmp-sfia-review/chatgpt-review.md` modifié (pack).

---

## 2. Sources effectivement lues

| Source | Ref / blob | Usage |
|---|---|---|
| PV InterventionTrack | `09e9ec3f` · blob `662196a3` | intégral |
| Handoff cutover | `9f815095` · blob `fef5c0e2` | diffs/tests concernés |
| Code local tip | `document-act.ts`, `service.ts`, `activity-labels.ts`, `NoraLiveActivity.tsx`, `TravailViewer.tsx`, `page.tsx`, `SasCreateProgressPopup.tsx`, `tokens.css`, `ml5-fragment-revise.test.ts` | causal |
| RECETTE PG RO | `BEGIN TRANSACTION READ ONLY` | objets réels |
| ENV-01 / product-versioning | main blobs cités | politique consultée ; N/A delivery |

Non relus mécaniquement: packs 32k lignes, campagne 50 docs.

---

## 3. Identités InterventionTrack (RECETTE RO)

| Objet | ID |
|---|---|
| Projet | `proj_de7b3fb5-cb30-41d3-9f8a-a81c8db2b82d` · InterventionTrack · créé `2026-11-25T19:21:46Z` |
| Préparation | `prep_47270e2b-2005-41d0-b211-28306b464ee0` |
| Conversation | `conv_acd3316c-01c6-4683-a2d1-3d5151181711` · `2026-11-25T19:16:49Z` |
| Document V1 | `doc_4898c72a-ae6a-4b1b-9c26-a8f97aef8e94` · *InterventionTrack — Conception fonctionnelle V1* |
| Révision courante (seule) | `drev_5824443d-4eae-462f-91d1-e37e7e51f802` · n°1 · AVAILABLE · md5 `b3a6a621…` · len 6669 · `2026-11-25T19:29:40Z` |
| Cognitive work | `cgw_34e0fd54-352e-4411-a048-28d30fc123cc` COMPLETE |

**Aucun `document_revisions` n°2** — conservation non matérialisée (confirmé).

UTC ↔ Paris (UTC+1) : captures PV ~20:53 Paris ≈ 19:53 UTC (après tentative 2 19:49Z ; avant/autour des essais conserve 19:56Z+).

---

## 4. Chronologie des deux tentatives de révision

### Tentative 1 — tour 4

| Étape | ID / preuve | Observation |
|---|---|---|
| Demande Pilote | `msg_4ecb489f…` `19:39:34Z` | RM-02 + REC-02 + lieu obligatoire + inspection avant conservation |
| Turn | `tcmd_41ec487e…` COMPLETE | |
| Qualification | intents `d4.revise_document` mode **PREPARE** · sectionHint `Section 3 : RM-02 ; section 4 : REC-02` | Nora comprend |
| documentProposal Nora | sha body `5cbed5c7…` len 6982 | **RM-02 ET REC-02 déjà modifiés** |
| extractFragmentIds(Pilote+hint) | `['RM-02']` | **REC-02 NON EXTRAIT** |
| Candidat scellé | `pdoc_a1542d35…` SUPERSEDED · body sha `65cd7b13…` len 6743 | **RM-02 modifié · REC-02 = V1** |
| documentSave | `NOT_EXECUTED` / `PROPOSAL_PENDING_CONSERVATION` | pas d'écriture D4 AVAILABLE |
| Réponse conversationnelle | `msg_9f5bc49e…` | annonce les deux lignes ; embeds **les deux** textes modifiés |
| Visionneuse (code) | `page.tsx` injecte `pendingCand.contentMarkdown` | affiche le **candidat scellé** (pas la proposal Nora) |

### Tentative 2 — tour 5 (reprise)

| Étape | ID / preuve | Observation |
|---|---|---|
| Demande Pilote | `msg_6e726d57…` `19:47:33Z` | explicite RM-02 + REC-02 |
| Turn | `tcmd_9a7982ad…` | |
| documentProposal Nora | sha `fdc6dbf7…` len 6836 | **RM-02 ET REC-02 modifiés** |
| extractFragmentIds | `['RM-02']` à nouveau | REC absent |
| Candidat | `pdoc_78fba036…` body sha `6ac90ca8…` | **RM-02 modifié · REC-02 = V1** |
| documentSave | idem PENDING_CONSERVATION | |
| Assistant | `msg_ad59e9b2…` | affirme les deux changements ; texte message contient REC-02 modifié |

### Trace comparative — où le lieu apparaît / disparaît

| Étape | RM-02 lieu | REC-02 sans lieu |
|---|---|---|
| Demande Pilote | demandé | demandé |
| documentProposal Nora | **présent** | **présent** |
| Message assistant | **présent** | **présent** |
| extractFragmentIds | RM-02 seul | **absent du scope** |
| applyTargetedFragmentRevision → candidat | **présent** (splice RM-02) | **absent** (ligne V1 conservée) |
| assertFragmentScope | PASS (ne vérifie que RM-02) | N/A hors scope autorisé |
| Révision AVAILABLE D4 | inchangée V1 (légitime pré-conserve) | idem |
| Documents « courant » | V1 sans lieu | V1 sans lieu |

**Premier point de divergence confirmé :** passage `documentProposal` → reconstruction fragmentaire (`service.ts` L2684–2695) qui **jette** la modification REC-02 pourtant présente dans la proposition Nora.

---

## 5. Contenu discriminant (extraits)

### V1 (`drev_5824443d…`)

```
| **RM-02** | Le titre et la description sont obligatoires. …
| **REC-02 — Saisie invalide** | … sans titre, puis avec une description composée uniquement d'espaces. …
- **Saisie minimale — RM-02 / REC-02 :** titre et description suffisent-ils, ou faut-il … le lieu ?
```

### documentProposal Nora (tentative 1) — les deux OK

```
| **RM-02** | … titre, la description et le lieu d'intervention sont obligatoires. …
| **REC-02 — Saisie invalide** | … espaces, puis sans lieu d'intervention. …
```

### Candidat scellé tentative 1 — REC perdu

```
| **RM-02** | … lieu d'intervention sont obligatoires. …     ← DIFF vs V1
| **REC-02 — Saisie invalide** | … espaces. …   ← SAME vs V1
```

Empreintes: V1 md5 `b3a6a621b61900b1df35e0f3d4480543` · cand1 body sha256 `65cd7b136be96893…` · proposal1 `5cbed5c7…` · cand1 ≠ proposal1.

### Observation utilisateur « RM-02 inchangé »

Le candidat scellé **contient** déjà RM-02 modifié. L'observation « titre/description seuls » correspond au **texte V1**, pas au candidat stocké.
- **CONFIRMED** : candidat ≠ V1 sur RM-02.
- **LIKELY** : consultation Documents/courante V1, ou lecture centrée sur REC-02 (inchangé) généralisant les deux fragments.
- **NOT OBSERVED** : preuve navigateur pixel de la visionneuse au moment exact (captures non en Git).
Le chemin code visionneuse (`page.tsx` ~2751–2785) injecte bien `pendingCand.contentMarkdown`.

---

## 6. Cause IT-06 — CONFIRMED ROOT CAUSE

### Mécanisme

1. `extractFragmentIds` (`document-act.ts` L1363–1369) ne reconnaît que `(RM|R|REQ|SC|UC)` — **pas `REC`**.
2. Sur les deux demandes réelles, résultat déterministe : `['RM-02']` seulement (reproduit hors effet).
3. Dès qu'au moins un fragment est reconnu, `service.ts` L2690–2695 **privilégie** `applyTargetedFragmentRevision` et **ignore** le documentProposal complet pour les lignes hors liste.
4. `assertFragmentScope` (L1418–1436) ne contrôle que les fragments autorisés → un REC-02 non listé **identique à V1** valide le scope même si Nora l'avait changé.
5. Le candidat scellé est donc une **reconstruction partielle**, pas la proposition Nora.
6. La réponse conversationnelle et `documentProposal` restent fidèles → **double vérité** : Nora dit vrai ; Studio scelle autre chose.

### Ce n'est PAS

- Un bug cognitif Nora (proposal correcte ×2).
- Un bug D4 d'écriture AVAILABLE (PREPARE correct ; V1 courante légitime).
- Une simple « UI qui n'affiche pas » pour REC-02 (contenu candidat réellement sans la modif).
- Une preuve que les tests RM-03/R04 étaient faux — ils testent un sous-ensemble de préfixes qui marchait pour AssetTrack, **pas** InterventionTrack `REC-*`.

### findFragmentLine (première ligne)

Sur V1, le premier `RM-02` est la **ligne métier** du tableau (index 1784) ; la citation §5 est après. Pour RM-02 ici, first-match n'est **pas** la cause de perte. Risque résiduel réel si une intro cite l'id avant la ligne métier — **LIKELY** pour d'autres docs, **NOT REPRODUCED** comme cause IT-06.

### Interdiction produit

**Ne pas « ajouter REC à la regex ».** Demain : TEST-02, RG-02, AC-02, ou fragments sans id. L'adressage ne doit pas dépendre d'une nomenclature éditoriale.

---

## 7. Activité LIVE — IT-01 / IT-03

### Événements réels (extrait)

```
tcmd_f8b5… seq1 nora.objective ANNOUNCED/RUNNING  « Je souhaite créer une petite application… »
           seq2 nora.generate  COMPLETED           « Réponse Nora disponible »
tcmd_4dfed… seq1 objective RUNNING « Préparation — un document de conception… »  ← trunc+subst du prompt
tcmd_41ec… seq1 objective = première phrase Pilote
           seq2/3 nora.source.d4 OBSERVED COMPLETED « Document consulté — InterventionTrack — … »  ← UTILE
           seq4 generate « Réponse Nora disponible »
```

### IT-01 — CONFIRMED ROOT CAUSE

- `service.ts` L1131 : `projectMissionHeadlineFromUserAsk(content)` → phase `nora.objective` avec le **texte Pilote** (1ʳᵉ phrase, substitutions lexicales, troncature 120) — `activity-labels.ts` L464–487.
- Cet événement reste `status=RUNNING` (jamais clôturé).
- `contextualGroupTitle` / détails de groupes non-sources réutilisent summaries d'événements → **même texte** au titre / groupe / détail.
- Acquis à préserver : producteurs `nora.source.d4` + regroupement sources « Consultation des sources / 1 source, 1 consultée / détail document » (observé tour 4) — **ne pas reconstruire**.

### IT-03 — CONFIRMED ROOT CAUSE

- `service.ts` L1315–1320 : à la fin conducteur, événement `nora.generate` summary **« Réponse Nora disponible »** nature COMPLETED.
- Émis **avant** garantie d'affichage message ; coexiste avec `nora.objective` encore RUNNING → badge « En cours » + annonce réponse.
- Recommandation : supprimer cet événement redondant (la réponse matérialise la fin) ; clôturer l'objectif provisoire ; ne pas inventer de succès terminal.

---

## 8. Finitions UX — IT-02 / IT-04 / IT-05

| ID | Cause | Preuve | Correction recommandée |
|---|---|---|---|
| IT-02 | Anneau étape courante = `<img>` SVG statique `focusHalo` sans classe d'animation (`SasCreateProgressPopup.tsx` L234–241). Aucun `@keyframes` SAS ; `prefers-reduced-motion` existe pour autre pulse Nora seulement. | code | CSS rotate/dash sur halo **si** `data-current=1` et `!prefers-reduced-motion` ; stop au terminal. Pas de délai artificiel. |
| IT-04 | `.fig-msg-body` `font-size:14px` + `overflow-wrap:anywhere` + `word-break:break-word` (tokens.css L304–311) dans conversation étroite → cellules tableau « Statut » éclatées verticalement. | code + observation PV | Sur tables markdown conversation : `white-space: nowrap` / `min-width` colonnes + `overflow-x: auto` conteneur ; ne pas casser les mots des en-têtes courts. |
| IT-05 | Corps message `14px` (L305). | token | Réduire proportionné à **13px** (ou 0.8125rem) **limité** à `.fig-msg-body` / SAS msg — pas typo globale ; pas F2 Figma sans preuve. |

---

## 9. Pourquoi les 21 tests PASS n'ont pas capté IT-06

Fixture `ml5-fragment-revise.test.ts` :
- IDs **RM-03** et **R04** — tous deux matchent la regex.
- Oracles : A création N/A · B candidat N/A · C fragments listés modifiés · D conformité partielle · E hors-liste préservé.
- **Absents :** préfixe `REC-*` · proposal Nora complète vs candidat scellé · assert « chaque fragment **demandé** est présent dans fragmentIds » · assert candidat ≡ proposal sur fragments demandés · projection navigateur · no-op / fausse réussite.

---

## 10. Matrice anomalies

| Anomalie | Cause prouvée | Preuve | 1er point divergence | Responsabilité | Options | Correction reco | Impacts | Test discriminant | Réserve |
|---|---|---|---|---|---|---|---|---|---|
| IT-06 REC inchangé | CONFIRMED — extractFragmentIds drop REC + splice fragment-only | PG cand vs proposal ; repro extract `['RM-02']` | service L2684–2695 | Studio reconstruction | A/B/C ci-dessous | **A/C : sceller documentProposal Nora** + contrôle portée structuré ; retirer regex comme autorité | D4 PREPARE path ; activity inchangée | Fixture InterventionTrack RM-02+REC-02 ; cand≡proposal sur les deux ; hors-scope ; refuse si ambigu | Captures UI non en Git |
| IT-06 RM « inchangé » UI | LIKELY confusion V1 vs cand ; CONFIRMED cand a le lieu | sha cand≠V1 sur RM-02 | affichage/lecture | Pilote/UI | — | Après fix REC, oracle UI cand≠V1 sur **les deux** | faible | Browser assert visionneuse PROPOSITION | NOT OBSERVED pixel |
| IT-01 | CONFIRMED projectMissionHeadlineFromUserAsk | events PG + code L1131/L464 | émission objective | Studio labels | — | Objectif neutre « Orientation… » jusqu'à prod D3 réelle ; ne pas répéter le prompt | activity-labels, service | Tour simple : titre≠1ʳᵉ phrase Pilote | — |
| IT-03 | CONFIRMED event « Réponse Nora disponible » + objective RUNNING | events + L1320 | post-conducteur | Studio activity | — | Supprimer/redéfinir event ; clôturer objective | service, NoraLiveActivity | Pas d'annonce si msg absent ; pas En cours+disponible | — |
| IT-02 | CONFIRMED SVG sans animation | SasCreateProgressPopup | rendu current step | UX | — | animation CSS bornée | popup + tokens | anneau anime si current | Figma F2 non prouvé |
| IT-04 | CONFIRMED word-break | tokens L304–311 | table msg | UX | — | table scroll/min-width | tokens (+ SafeMarkdown si besoin) | Statut horizontal | — |
| IT-05 | CONFIRMED 14px | tokens L305 | typo msg | UX | — | 13px local | tokens | densité OK | accessibilité |

---

## 11. Options correctives documentaires

### OPTION A — Réécriture intégrale (recommandée pour PREPARE inspection)

Nora produit le document révisé complet (`documentProposal`).
Studio **scelle ce contenu** (canonicalize) après :
- identité base exacte (`sourceRevisionId` / head observée) ;
- contrôle hors-périmètre (sections/fragments **déclarés par Nora dans l'intent**, pas regex Pilote) ;
- refus si ambigu / multi-cibles non résolues ;
- no-op honnête si proposal ≡ base sur les cibles.

**Simplicité haute** — aligne vision Nora orchestre. Volume OK docs ML5 typiques. Risque dérive mitigé par assert scope.

### OPTION B — Modifications ciblées

Nora fournit opérations/fragments adressés **explicitement** (ids ou ancres stables qu'elle choisit).
Studio applique splice déterministe.
Exige un contrat d'adressage riche ; regex préfixes = **anti-pattern**.

### OPTION C — Adaptative (A par défaut si proposal complète)

Si proposal markdown complète + PREPARE → chemin A.
Sinon opérations ciblées structurées.
**Même propriétaire D4** ; pas de second stockage.

### Recommandation intégrée

**Macro-lot unique :** *ML5 — Fiabilisation révision documentaire et activité Nora*

1. **Docs :** chemin A (sceller proposal) pour PREPARE revise ; `extractFragmentIds` / `applyTargetedFragmentRevision` **retirés du chemin nominal** (legacy lecture seule ou tests historiques). Contrôle portée = diff base↔proposal guidé par `intent.parameters` structurés (sectionHint sémantique Nora, pas harvest regex).
2. **No-op / fausse réussite :** si cibles demandées absentes du delta proposal→base, **refuser** ou faire constater à Nora — ne pas sceller un candidat « réussi » incomplet.
3. **LIVE :** supprimer `projectMissionHeadlineFromUserAsk` comme titre d'activité ; objectif neutre puis enrichissement D3 ; préserver groupes sources ; supprimer « Réponse Nora disponible » redondant ; clôturer RUNNING.
4. **UX :** IT-02/04/05 dans le même delivery.

**Conserver :** CAS, fencing, HumanDecision, PREPARE vs REQUEST_EFFECT, candidats pending, visionneuse proposal, consultation D4 activity, guidance/création acquis.

**Supprimer/simplifer :** autorité regex de préfixes ; reconstruction qui écrase proposal ; répétition prompt ; event réponse disponible.

**Fichiers impactés (blast radius):**
`service.ts`, `document-act.ts` (fragment helpers), éventuellement `document-candidate.ts` (inchangé stockage), `activity-labels.ts`, `NoraLiveActivity.tsx`, `SasCreateProgressPopup.tsx`, `tokens.css`, tests unitaires discriminants.
**Hors blast :** D5 guidance, conducteur segmentation, Git RO, FinOps, livraison 2.

**Dette/exit :** si fragments ciblés encore utiles plus tard, les réintroduire via **ancres fournies par Nora**, jamais catalogue préfixes Studio.

**Critères d'acceptation :**
- InterventionTrack RM-02+REC-02 : candidat ≡ proposal sur les deux ; hors-scope strict ; V1 courante tant que non conservé.
- Conserve : candidat inspecté ≡ révision écrite.
- LIVE : pas de 1ʳᵉ phrase Pilote en titre ; consultation sources préservée ; pas d'annonce réponse prématurée.
- UX IT-02/04/05 vérifiés navigateur ciblé.

**Tests minimaux (pas 50 docs) :**
1. Repro fidèle IT (RM-02+REC-02) deterministe.
2. Préfixe inconnu (AC-02) via proposal complète.
3. Id cité deux fois — ancrage ligne métier.
4. Proposal sans delta → no-op honnête.
5. Ambiguïté → refuse.
6. Activity : headline ≠ prompt ; sources group OK ; pas « Réponse Nora disponible » avant msg.
7. Conserve exact (PG).

---

## 12. Réserves et limites

- Captures navigateur non déposées dans Git — observation RM-02 UI classée LIKELY vs CONFIRMED storage.
- Essais conserve post-UAT (`19:56Z+`) : `REQUEST_EFFECT` mais `documentSave` reste `PROPOSAL_PENDING_CONSERVATION` (flag session conserve / binding) — **hors tours 4–5 PV** ; à traiter dans le correctif conserve si reproduit ; **pas** cause de l'absence de modif dans le candidat PREPARE.
- Counts RECETTE post-UAT : projects=30 docs=122 revs=193 conv=209 msg=809 cog=19 (Δ vs pré-cutover = activité UAT légitime). `it_revisions=1` inchangé par ce diagnostic.
- Aucun appel fournisseur LIVE relancé.

---

## 13. Vérification RECETTE inchangée (post-diagnostic)

- BUILD_ID servi : `gzqaaKhie0CqcfpgrvMMp`
- SHA worktree : `8dec35c748e2d44f69a1c472052d7955147b3d47`
- Transactions : `READ ONLY` exclusively
- Aucun message envoyé, aucun conserve, aucun rebuild, aucun restart RECETTE
- Produit git : aucun fichier sous `projects/sfia-studio-next/` modifié par ce mandat

---

## 14. Instruction ChatGPT

Relire ce handoff distant. Vérifier causes exactes (surtout divergence proposal→candidat). Arbitrer avec Morris le chemin A/C. Préparer **un** delivery correctif docs+LIVE+UX. Ne pas rouvrir guidance/création/qualification. Pas de correctif anticipé ici.
