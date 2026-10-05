# SFIA Studio — Chat-First Product Simplification — P5 Integrated Delivery

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
| **Slice** | **P5-S01** + **P5-S02** + **P5-S03** + **P5-S04** (integrated) |
| **Pass** | **P5-S04 POST-MERGE VERIFIED / POST-S04 REQUALIFICATION** |
| **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
| **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
| **Base / HEAD Git** | `origin/main` = `c7b53b93d48e626e5ac1548886162936ce7e9eb3` (PR **#558** merge · P5-S04) |
| **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Branche truth-sync** | `docs/sfia-studio-p5-s04-post-merge-truth-sync` (local · **NOT pushed**) |
| **P5 AUTHORIZED BY MORRIS** | **YES** |
| **P5 STARTED** | **YES** |
| **P5 IN PROGRESS** | **YES** |
| **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
| **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
| **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 NOT STARTED** |
| **ZERO REAL** | **YES for S04** — S02 used bounded REAL historically (not revoked) |
| **READY FOR REAL** | **NO** (R3 / broader REAL gates not authorized) |
| **runtime v3** | **NON ADOPTED** |
| **Git (S04)** | **MERGED** · post-merge CI **#684** **SUCCESS** · Required Gate **SUCCESS** |
| **ChatGPT POST-S04 REQUALIFICATION** | **PASS** |
| **Next RECOMMENDED capability** | **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** |
| **P5-S05 DELIVERY** | **NOT AUTHORIZED** |
| **P5-S05 REAL / R3** | **NOT AUTHORIZED** |
| **Langue** | Français (identifiants canoniques anglais préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
| **Date** | 2026-10-06 · Europe/Paris |

> **Lecture rapide.** P5-S01 / S02 / S03 / S04 sont **intégrés sur main** (PR #555 / #556 / #557 / #558). Synthèses Product-derived (M9 `oa_syntheses`) = projection dérivée non autoritative + Continuity Retrieval. **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. F2 routing debt **OPEN**. Next RECOMMENDED = **P5-S05** — **NOT AUTHORIZED**.
> **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

---

## 1. Metadata / authority

### 1.1 Trajectoire CURRENT

```text
P1 = VALIDATED / INTEGRATED / CLOSED
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549)
P3 = VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED   (PR #550 + #551)
P4 = GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS
     (PR #552 · closure patch PR #553 · truth-sync PR #554 MERGED)

P5 = AUTHORIZED / STARTED / IN PROGRESS
P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556) — R1 PASS · R2 PASS (bounded REAL historical)
P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)

R3 = NOT STARTED
F2 routing debt = OPEN
P5 COMPLETE = NO
P6 READY = NO
runtime v3 = NON ADOPTED
READY FOR REAL = NO

POST-S04 CHATGPT REQUALIFICATION = PASS
NEXT RECOMMENDED CAPABILITY =
  P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment
P5-S05 DELIVERY = NOT AUTHORIZED
P5-S05 REAL / R3 = NOT AUTHORIZED
```
### 1.2 Hiérarchie d’autorité

| Domaine | Autorité | Rôle de ce document |
| --- | --- | --- |
| Simplification (PIB, MATERIAL/PROTECTIVE/ACCIDENTAL) | P1 | Hérite |
| Fonctionnel (FOM, Deliverable ≠ Artifact, HD) | P2 | Hérite |
| Workspace / IA / Figma | P3 | Hérite · implémente un sous-ensemble |
| Sémantique / Projection / Cognition / Routing / Entry Contract | **P4** | Hérite · **implémente un sous-ensemble D0** |
| Delivery / implémentation / preuve | **P5 (ce document)** | **Source de preuve uniquement** |

### 1.3 Ce que ce document n’est pas

- **≠** nouvelle doctrine Product ni architecture ;
- **≠** décision d’architecture (toute divergence P4 exige un gate Morris) ;
- **≠** preuve REAL, R1/R2/R3, ou pixel-perfect ;
- **≠** intégration Git (aucun commit/push/PR/merge dans ce pass) ;
- **≠** modification de la Build Doctrine ou de Figma (Figma = **READ ONLY**).

---

## 2. Morris P5 authorization

| Élément | Statut |
| --- | --- |
| Requalification ChatGPT P5 (P4 §51) | **COMPLETED** (recommandation, ≠ autorisation) |
| **Morris P5 AUTHORIZATION (GO P5)** | **YES — CONSUMED dans cette conversation** |
| P5 AUTHORIZED BY MORRIS | **YES** |
| P5 STARTED | **YES** |
| P5 IN PROGRESS | **YES** |

### 2.1 Ce que le GO P5 autorise / n’autorise pas

| Autorisé | **Non** autorisé (gate distinct requis) |
| --- | --- |
| Implémentation locale P5 (code, tests, CSS, assets Product) | Commit / push / PR du projet |
| Slice P5-S01 en working tree | Merge sur main |
| Tests D0 / UI locaux | **REAL** (appel OpenAI réel) · R1/R2/R3 |
| | Adoption runtime v3 |
| | Mutation Figma |
| | Revendication « READY FOR REAL » |

**Le GO P5 est consommé ; il n’est pas un GO REAL ni un GO Git.**

---

## 3. P5 mission

P5 = **livrer** progressivement, **sur le même chemin Product**, ce que P4 a rendu implémentable : un monde Product unique, des projections role-aware, la cognition Nora routée par Strategy-first bounded router, et l’expérience P3 — **sans** second Nora, **sans** SharedKnowledgeStore, **sans** router service, **sans** second modèle Product, **sans** nouvelle plateforme d’orchestration.

**Règle cœur (P4 §52) :** *COGNITION AND PRODUCT EXPERIENCE CONVERGE EARLY.* Pas de programme « UI fixtures » + « laboratoire router » qui ne convergent qu’à la fin.

**Mission de P5-S01 :** premier **vertical slice intégré** — politique de routage cognitif minimale branchée dans le runtime Nora existant **et** convergence du Workspace/Conversation Pre-M6 vers la structure P3, sur le **même** chemin (Project → Conversation → contexte sémantique → CWP → Strategy → Routing → Agents Runner).

**Non-mission de P5-S01 :** REAL, R1/R2/R3, Aperçu/Exécution/Journal/Historique/Synthèses object-native complets, Auth visual, Activity/STOP, Deliverable/Artifact exercé, P6.

---

## 4. P1→P4 inheritance contract

| Source | Contrat hérité (résumé) | Traitement P5-S01 |
| --- | --- | --- |
| **P1** | Simplification : PIB heuristique ; MATERIAL préservé · PROTECTIVE protégé · ACCIDENTAL réduit ; admin burden ≈ 0 nominal ; Net Complexity Reduction à l’échelle intégrée ; pas de metrics factory | Évaluation **qualitative** (§23) ; **NCR NOT PROVEN** |
| **P2** | Même sémantique d’autorité ; Deliverable ≠ Artifact ; Execution optionnelle ; recovery Product-truth-first ; pas de Universal Validator Engine | Aucune sémantique d’autorité élargie (tests P5-SEM, P5-D0-20) |
| **P3** | Workspace/IA/Figma ; pas de déviation visuelle intentionnelle ; reduced-motion ; a11y ; pas de SoT UI-locale ; pas de redesign par convenance | Structure P3 implémentée par **convergence** de `ProductShell` / `ProjectWorkspacePage` ; **fidélité runtime NON prouvée** |
| **P4** | Un monde Product ; projections bornées ; deterministic NO-LLM bypass avant routing ; Strategy-first bounded router ; cohort Luna/Sol/Astra ; quality floor avant FinOps ; escalation ≤ 1 ; same Nora/same Agents path ; REAL-FIRST dès que la frontière OpenAI est accessible ; OPENAI_MODEL/EFFORT TEMP WITH EXIT | Politique de routage implémentée (D0) ; **REAL-FIRST : frontière non exercée → ZERO REAL, déclaré** |

**Aucun contrat hérité n’a été réinterprété silencieusement.** Les écarts et réserves sont listés en §24–§25.

---

## 5. P5 Entry Contract — six dimensions (statut P5-S01)

P4 §51 : satisfaire cinq dimensions sur six **≠** Product Simplification complète. P5-S01 ne revendique **aucune** dimension « complète » ; statut honnête par dimension :

| # | Dimension | Contenu P5-S01 | Statut P5-S01 |
| --- | --- | --- | --- |
| 1 | **FUNCTIONAL** (P2) | Chemin Project → Conversation existant préservé ; aucun nouvel objet Product ; pas de nouvelle sémantique d’autorité | **PARTIEL — préservé, non étendu** |
| 2 | **EXPERIENCE** (P3) | Rail 192px + Meridian ; Workspace : header global, onglets Conversation/Aperçu/Exécution, focus bar, Conversation + Contexte du projet 356px ; reduced-motion sur scroll conversation | **CANDIDATE AVEC RÉSERVES** — screenshots runtime vs Figma **non capturés** ; Compact/Mobile **non prouvés** |
| 3 | **SEMANTIC INTEGRITY** (P4) | Contexte projet présenté depuis projections **déjà chargées** (présentation-only) ; routing ≠ HumanDecision ≠ Recommendation disposition ; modèle ne peut encoder de champ d’autorité | **D0 PASS (tests invariants)** — Journal/Historique/Synthèses/Aperçu object-native **non livrés** |
| 4 | **COGNITION** (P4) | `cognitiveRoutingPolicy.ts` ; Quality Floor ; cohort ; escalation max = 1 (politique) ; télémetrie `COGNITIVE_ROUTING_SELECTED` ; câblage après Strategy | **D0 PASS** — **ZERO REAL** ; boucle d’escalade runtime **non exercée** ; F2 `analyzeIntent` **non aligné** |
| 5 | **SIMPLIFICATION** (P1) | Pilote ne choisit ni modèle ni effort ; panneau contexte lecture seule ; pas de nouveau cockpit | **Évaluation qualitative uniquement** — **Net Complexity Reduction NOT PROVEN** |
| 6 | **PROOF** | D0 sur chemin intégré (Fake, même Runner) ; UI test layout ; régressions | **D0 seulement** — R1/R2/R3 **NOT STARTED** ; visual fidelity **NON prouvée** |

**Verdict dimensionnel :** 0/6 dimensions « complètes » ; 6/6 touchées à périmètre S01 avec réserves explicites.

---

## 6. Current repository baseline

| Élément | Valeur |
| --- | --- |
| Base / HEAD | `04527bede4a3aad1853387b9eb39af3fe0615412` |
| PR d’entrée | **#554 — MERGED** (P4 final repository truth-sync) |
| CI | **#676 — SUCCESS** |
| Required Gate | **SUCCESS** |
| Branche P5-S01 | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| État du working tree | Modifications P5-S01 **non commitées** (voir §9.4) |
| Scratch non suivi | `.tmp-sfia-review/**` (exports Figma de référence, revue ChatGPT) — **hors livrable** |

**Rappel :** la preuve CI #676 qualifie la **base**, pas les modifications P5-S01 locales. Aucune CI n’a été exécutée sur P5-S01 (pas de push).

---

## 7. Critical path

Trajectoire P4 §52, avec statut P5-S01 :

| # | Étape P4 §52 | Statut |
| --- | --- | --- |
| 1 | Revalider la frontière de capacité du provider cible | **FAIT (snapshot daté, D0)** — `buildP5TargetCapabilityManifest` ; revalidation à refaire avant REAL |
| 2 | Politique de routage minimale + deterministic NO-LLM bypass, câblée dans le runtime Nora existant | **FAIT (D0)** — bypass : aucune logique nouvelle (§19) |
| 3 | Premier vertical slice Product object-native via le chemin frontend P3-capable | **PARTIEL** — Workspace/Conversation + contexte ; pas d’objet Product matérialisé nouveau |
| 4 | R1 + R2 par ce même chemin | **NOT STARTED** |
| 5 | Inspection PIB / charge accidentelle | **Qualitative seulement** (§23) |
| 6 | Expansion projections (Aperçu, Exécution, Journal, Historique, Synthèses, Auth, Activity) | **NOT STARTED** (onglets présents, projections object-native non livrées) |
| 7 | Deliverable / Artifact exercés | **NOT STARTED** |
| 8 | R3 chemin Product intégré représentatif | **NOT STARTED** |
| 9 | Comparaison visuelle runtime/Figma | **NON capturée** (réserve) |
| 10 | P6 QA globale + NCR | **Hors périmètre** |

---

## 8. Delivery slicing strategy

- **Slice = chemin vertical bout-en-bout minimal**, pas un sous-système isolé complet.
- **Convergence précoce** : cognition (routing) + expérience (Workspace P3) dans la **même** slice.
- **Réutilisation d’abord** : adapter `ProductShell`, `ProjectWorkspacePage`, `runNoraCognitiveTurn`, `capabilityBudget`, tokens `--pm6-*` existants ; **aucun** nouveau design system, **aucun** nouveau service.
- **Honnêteté de statut** : une slice reste *LOCAL CANDIDATE* tant que les preuves listées ne sont pas complètes et que le gate Git Morris n’est pas passé.

### 8.1 Découpage indicatif

| Slice | Contenu | Statut |
| --- | --- | --- |
| **P5-S01** | Routing policy D0 + Workspace/Conversation P3 + contexte projet | **LOCAL CANDIDATE (réserves visuelles)** |
| P5-S02+ | À décomposer après gate S01 (cf. §26) — **non engagé** | **NOT STARTED** |

Le découpage S02+ est une **liste de travaux restants**, pas un engagement ni une doctrine.

---

## 9. P5-S01 scope

### 9.1 Inclus (implémenté localement)

1. **Cognitive routing policy** (pure, non persistante, non autoritative).
2. **Capability manifest** P5 TARGET (cohort), sans toucher au MW0 historique.
3. **Câblage** du routing dans `runNoraCognitiveTurn` après Strategy.
4. **Identité de tâche cognitive** : `correlationId` d’`orchestrateTurn` préfère `logicalTurnId`.
5. **Télémétrie** `COGNITIVE_ROUTING_SELECTED` (sans CoT).
6. **Shell Pre-M6** : rail P3 192px, emblème Meridian, « Projets récents » réels.
7. **ProjectWorkspacePage** : structure P3 (header global, onglets, focus bar, Conversation + Contexte du projet 356px).
8. **Tokens** `--pm6-*` convergés vers les couleurs P3.
9. **Reduced-motion** pour l’auto-scroll de conversation.
10. **Tests D0 + UI** (§21).

### 9.2 Exclu

REAL · R1/R2/R3 · Aperçu/Exécution/Journal/Historique/Synthèses object-native · Auth GitHub visual · Nora Activity/STOP · Deliverable/Artifact · Synthesis Product-derived · alignement F2 `analyzeIntent` · retrait OPENAI_MODEL/EFFORT · fusion des familles de tokens · preuve Compact/Mobile · P6.

### 9.3 Non-changements explicites

Pas de nouvelle table/store · pas de router service · pas de second Nora · pas de nouvelle plateforme · pas de modification Figma · pas de modification de la Build Doctrine.

### 9.4 Fichiers touchés (working tree, non commités)

| Zone | Fichiers |
| --- | --- |
| Cognition | `lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts` (**nouveau**) · `runNoraCognitiveTurn.ts` · `reasoningCapability.ts` · `types.ts` · `index.ts` |
| Capability / observabilité | `lib/nora-eval/capabilityBudget.ts` · `lib/platform/observability/types.ts` |
| Orchestration | `features/project-assistant/orchestrateTurn.ts` |
| Shell / Workspace | `ProductShell.tsx` / `.module.css` · `ProductRailRecents.tsx` (**nouveau**) · `ProjectWorkspacePage.tsx` / `.module.css` · `surfaces/ProjectContextSummary.tsx` / `.module.css` (**nouveaux**) · `workspaceContextPresentation.ts` (**nouveau**) |
| Surfaces / hooks / tokens | `surfaces/ConversationSurface.module.css` · `surfaces/LpsSurface.tsx` · `hooks/useProductConversation.ts` · `product-tokens.css` |
| Asset | `public/branding/meridian-emblem-product.png` (**nouveau**) |
| Tests | `p5.s01.cognitiveRouting.d0.test.ts` · `p5.s01.integratedProduct.d0.test.ts` · `p5.s01.semanticInvariants.d0.test.ts` · `p5.s01.workspaceLayout.ui.test.tsx` (**nouveaux**) · `automaticProjectResume.ui.test.tsx` (**ajusté**) |

---

## 10. Product representative journey

Journey cible P4 §52.1, tel que **couvert** par P5-S01 :

```text
REAL Project → P3 Conversation → real Project semantic context
→ (deterministic path OR Nora Semantic Context → CWP → Strategy → Product router)
→ real OpenAI when cognition required/authorized
→ Nora governed cognitive outcome / deterministic Product result
→ Studio materializes/updates real Product object when applicable
→ same object in Conversation / Aperçu / Journal / …
```

| Maillon | P5-S01 |
| --- | --- |
| Project (local Product, vrai LPS) | **D0 — exercé** (test intégré) |
| Conversation P3 (Workspace) | **Implémenté** — layout testé (UI) ; fidélité Figma non prouvée |
| Contexte sémantique projet | **D0 — exercé** (`composeStudioCognitiveContext`) ; panneau « Contexte du projet » en lecture seule |
| CWP → Strategy | **Existant, exercé** |
| Product router | **Implémenté, exercé D0** |
| OpenAI réel | **ZERO REAL** — Fake provider uniquement |
| Matérialisation / mise à jour d’objet Product nouveau | **NON couvert** |
| Même objet visible dans Aperçu/Journal/… | **NON couvert** (onglets = navigation/focus, pas projection object-native) |
| Evidence / Result / Deliverable·Artifact / Synthesis | **NON couvert** |
| PIB / charge accidentelle | **Qualitatif** (§23) |

**La journey est donc couverte en D0 sur son tronçon cognition + contexte + conversation, pas end-to-end Product.**

---

## 11. Current→Target reuse matrix

| Asset | CURRENT | P5-S01 disposition | Delta réalisé | Dette / sortie |
| --- | --- | --- | --- | --- |
| `ProductShell` (Pre-M6) | Shell produit existant | **ADAPT** | Rail P3 192px · Meridian · Projets récents | Famille tokens double (§24) |
| `ProjectWorkspacePage` | Page workspace Pre-M6 | **ADAPT** | Header global · onglets · focus bar · Conversation + Contexte 356px | Fidélité Figma non prouvée ; Aperçu/Exécution = focus/jump, pas projections |
| `ConversationSurface` | Surface conversation | **REUSE + CSS adapt** | Ajustements CSS (`ConversationSurface.module.css`) | — |
| `useProductConversation` | Hook conversation | **REUSE** | Reduced-motion sur auto-scroll | — |
| `LpsSurface` | « État du projet » | **REUSE** | `lpsNextAction` exporté (source unique de formulation) | — |
| `runNoraCognitiveTurn` | Runtime cognitif Nora | **ADAPT** | Routing après Strategy ; Fake garde adapter ; live utilise la chaîne modèle sélectionnée | Boucle escalade non exercée |
| `cognitiveWorkloadPolicy` | CWP / Strategy | **REUSE (inchangé)** | Consommé par la politique de routage | — |
| `capabilityBudget` | Manifests MW0 / courant | **ADAPT** | `buildP5TargetCapabilityManifest` ajouté ; **MW0 historique inchangé (FREEZE)** | Snapshot daté à revalider avant REAL |
| `reasoningCapability` | Validation capability fail-closed | **ADAPT** | Manifest optionnel ; fallback manifest P5 TARGET | — |
| `product-tokens.css` | `--pm6-*` | **ADAPT / converge** | Couleurs vers P3 ; **pas de `--p5-*`** | Dual `--sfia-*`/`--pm6-*` TEMP WITH EXIT |
| Meridian | Emblème Figma | **RECOVER** | `/branding/meridian-emblem-product.png` (§24.4) | Provenance à garder |
| `logicalProductTurn` | Identité de tour logique | **REUSE** | Fournit `logicalTurnId` | — |
| `studioCognitiveContext` | Contexte cognitif Studio | **REUSE** | Exercé dans le test intégré D0 | — |
| F2 `analyzeIntent` | Analyse d’intention F2 | **NON alignée** | Aucun | **P5-DEBT-F2-ROUTING-ALIGNMENT** (provider modèle statique) |

---

## 12. Frontend convergence plan

Principe P4 §27A / §51.2 : **un** layer de présentation P3-capable minimum-suffisant par réutilisation/convergence ; pas de nouveau programme UI de fixtures.

| Élément | Réalisé | Reste |
| --- | --- | --- |
| Famille de tokens canonique de convergence | `--pm6-*` (aucune famille `--p5-*` créée) | Retrait/fusion de `--sfia-*` |
| Palette | Convergée vers couleurs P3 (canvas, ink, bordures, rail) | Vérification contre Figma runtime |
| Shell | Rail 192px | Variantes Compact/Mobile à prouver |
| Workspace | Structure P3 | Surfaces object-native |
| Layouts `--pm6-*` | Largeurs LPS/Journal/contenu maintenues dans le même set | — |

**Contrainte respectée :** pas de nouvelle stack design-system, pas de seconde architecture responsive.

---

## 13. Figma contract

| Élément | Valeur |
| --- | --- |
| Fichier Figma | `m4g8j0gNbEzfIuH6S9AZJF` |
| Workspace Desktop | node **`46:2`** |
| Workspace Compact | node **`190:44`** |
| Workspace Mobile | node **`190:306`** |
| Mode d’accès | **READ ONLY** — aucune mutation Figma |
| Contrat | P3 préservé (aucune déviation visuelle intentionnelle) |

### 13.1 Statut de preuve

- Des **exports Figma** (références) existent en scratch non suivi : `.tmp-sfia-review/visual/figma/*.png` (dont `workspace-desktop-46-2.png`, fichiers `meridian-*.png`). Ce sont des **références Figma**, **pas** des captures runtime.
- **Aucune capture runtime comparative** n’a été produite (Playwright derrière auth). → **PAS de claim de fidélité** (§22).

---

## 14. Workspace implementation status

| Zone P3 | Implémentation | Preuve |
| --- | --- | --- |
| Rail latéral 192px | ✔ | Test UI layout (rendu) |
| Emblème Meridian | ✔ (`/branding/meridian-emblem-product.png`) | Asset présent ; fidélité visuelle non comparée |
| Projets récents (max 5, projets réels) | ✔ (`ProductRailRecents`, via `listProjectsRuntimeAction`) | Pas d’entrée inventée ; état loading/unavailable/ready |
| Header global | ✔ | UI test |
| Onglets Conversation / Aperçu / Exécution | ✔ (navigation/focus) | UI test |
| Focus bar | ✔ | UI test |
| Conversation | ✔ (`ConversationSurface`) | Régression Pre-M6 PASS |
| Contexte du projet 356px | ✔ (`ProjectContextSummary`, lecture seule) | UI test |
| Reduced-motion (auto-scroll) | ✔ | Code ; pas de test dédié rapporté |
| Compact / Mobile | **Non prouvé** | — |
| Aperçu / Exécution object-native | **Non livré** | — |
| Journal / Historique / Synthèses / Auth / Activity / STOP | **Non livré** | — |

Précisions :

- Tab **Aperçu** amène le panneau de contexte dans le champ de vision ; tab **Exécution** saute aux cartes d’exécution déjà présentes dans la conversation — **ce ne sont pas** de nouvelles surfaces/projections.
- Le panneau de contexte **n’héberge aucune action** : décisions et détails restent dans la conversation/Journal/lifecycle existants.

---

## 15. Semantic integration

- **Présentation uniquement** (`workspaceContextPresentation.ts`) : toutes les valeurs sont lues depuis des **projections déjà chargées** (état durable, projection lifecycle, journal de conversation, proposition active). Rien n’est persisté, rien n’est inféré au-delà.
- **Currentness honnête** : « À jour » seulement si état durable **et** transcript lisibles ; sinon « À vérifier » / « Lecture en cours » (`presentCurrentness`).
- **Trajectoire cycles** : bande « Terminé / En cours / Proposé » dérivée des instances de cycle (max 5 nœuds ; superseded/cancelled omis).
- **Formulation unique** du prochain pas : `lpsNextAction` partagé entre « État du projet » et le panneau de contexte.
- **Invariants D0** (`semanticInvariants`) : P5-SEM-05 (le choix de modèle n’encode aucun champ d’autorité) · P5-SEM-02/03 (routing ≠ HumanDecision ≠ Recommendation disposition) · P5-SEM-08 (sémantique Strategy Proposed hors router).

**Non couvert :** Synthesis Product-derived (le raccourci synthèse reste **désactivé** — aucune surface de synthèse Product), Journal/History read models P3, Deliverable representation.

---

## 16. Nora Semantic Context integration

- Le test intégré D0 exerce le **chemin réel local** : Project/LPS Product réels → `composeStudioCognitiveContext` (faits de contexte) → `runNoraCognitiveTurn` → CWP → Strategy → Routing → Fake provider → **même Agents Runner** → résultat Product-safe.
- **Même Nora, même Runner** : aucun second chemin ni second runtime.
- Le routing **ne lit pas** le contexte pour décider une autorité ; il consomme la **décision Strategy** (classe + signaux normalisés + `candidateEnvelope`).
- **Non couvert :** projection sémantique Nora object-native élargie (P4 §23) au-delà de ce que le contexte Studio expose déjà.

---

## 17. Cognitive routing implementation

### 17.1 `cognitiveRoutingPolicy.ts` (nouveau, pur)

| Propriété | Implémentation |
| --- | --- |
| Nature | Fonction pure, non persistante, **non autoritative**, **≠ RouterService** |
| Version de politique | `p5-s01-routing-v1` |
| Pipeline (P4 / CP5) | candidates → **Quality Floor** → **provider capability** → **FinOps parmi les suffisants/compatibles** → minimum-suffisant (`pipeline:quality→provider→finops`) |
| Cohort nominal | `gpt-6-luna` · `gpt-6.1-sol` · `gpt-6-astra` (GPT-5.6 **exclu** du routing nominal) |
| Candidats | Enveloppe d’efforts de la Strategy × cohort — **pas** de mapping fixe Strategy→Modèle ; model × effort indépendants |
| Reasoning mode nominal | `standard` |
| Escalade | `P5_MAX_ESCALATIONS_PER_TASK = 1` (champ `escalationEligible` selon `escalationsUsed`) |
| Identité de tâche | `cognitiveTaskId` stable obligatoire (sinon erreur `COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID`) |
| Reconstructibilité | `routingDecisionId`, `reasonCodes`, `policyVersion`, `providerSnapshotIdentity` (hash stable du contenu, hors `retrievedAt`) |
| Échec | **Fail-closed** : `ok:false` avec `NO_SUFFICIENT_CONFIG` ou `BUDGET_EXCLUDES_ALL_SUFFICIENT` ; `BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR` |

### 17.2 Quality Floor (catégoriel, explicable, **pas** un score 0–100)

| Strategy | Catégorie | Plancher modèle | Plancher effort |
| --- | --- | --- | --- |
| Routine | `routine-sufficient` | Luna | ≥ none |
| Focused | `focused-sufficient` | Luna | ≥ low (≥ medium si vérification/ambiguïté élevée) |
| Deep | `deep-sufficient` | Luna (Sol si rigueur/vérification/contradiction élevée) | ≥ medium |
| High-Assurance | `high-assurance-sufficient` | Sol minimum | ≥ high |

Surcharges : `contradictionRisk` élevé → plancher Sol ; `criticalChallengeArmed` → plancher d’effort `high`. **Le budget ne peut jamais abaisser sous le plancher** ; il ne filtre qu’**au sein** de l’ensemble suffisant.

### 17.3 `buildP5TargetCapabilityManifest` (`capabilityBudget.ts`)

| Modèle | Efforts supportés (snapshot) |
| --- | --- |
| `gpt-6-luna` | none · low · medium · high · xhigh · max |
| `gpt-6.1-sol` | low · medium · high · xhigh · max (**none non supporté**) |
| `gpt-6-astra` | low · medium · high · xhigh · max (**none non supporté**) |

- `minimal` reste **non admissible** pour le cohort cible.
- Prix Standard short-context (Correction Pass 01, 2026-10-05) : Luna **0.10/0.50** · Sol **2/10** · Astra **10/50** (USD/1M) — **indices d’ordonnancement FinOps datés**, remplaçables — **pas de doctrine**.
- **`buildMw0CapabilityManifest` (GPT-5.6) non modifié — FREEZE historique** ; `buildCurrentOpenAiCapabilityManifest` non remplacé.
- « Documented capability ≠ account/API entitlement » : **non vérifié** (ZERO REAL).

### 17.4 Câblage `runNoraCognitiveTurn`

1. Routing décidé **après Strategy** (`resolveProductCognitiveRouting`).
2. **Pas de routing** si : pin d’éval (`evalModelReasoningControl`) ou Strategy non exécutée.
3. **Limitation de routing** (`ok:false`) → `TechnicalError("CONFIG", …)` **fail-closed**, jamais de downgrade silencieux.
4. **Fake** (provider adapter) : **garde l’adapter** (le modèle sélectionné reste identité/télémétrie) ; **live** : la **chaîne modèle sélectionnée** est passée à l’Agents Runner.
5. Capability de l’effort sélectionné validée contre le manifest P5 TARGET (`validateRuntimeReasoningCapability` avec manifest).
6. Résultat enrichi : `selectedModelId`, `cognitiveRoutingDecisionId`, `cognitiveRoutingPolicyVersion` ; `selectedReasoningEffort` effectif : pin d’éval > routing > CWP.
7. Fallback legacy documenté : si Strategy a tourné mais routing absent, chemin historique (`OPENAI_MODEL` **TEMP WITH EXIT**).

### 17.5 `orchestrateTurn`

`correlationId` préfère **`logicalTurnId`** (identité cognitive stable sur tool rounds / retry / escalade unique), repli sur `f1:${projectId}`.

### 17.6 Télémétrie

Événement **`COGNITIVE_ROUTING_SELECTED`** (type ajouté à `TechnicalEventType`). Détails : `routingDecisionId`, `cognitiveTaskId`, `strategyClass`, modèle/effort sélectionnés, `reasoningMode`, `qualityFloor`, `reasonCodes`, résumé d’éligibles (≤ 12), `escalationEligible`, `maxEscalations`, `providerCapabilitySnapshot`, `routingPolicyVersion`, `estimatedCostUsdHint`. **Aucune Chain of Thought, aucune fausse confiance** (test P5-D0-21).

---

## 18. Provider snapshot

| Élément | Valeur |
| --- | --- |
| Type | Snapshot **daté** d’entrée externe (Correction Pass 01, 2026-10-05) |
| Processing tier | **STANDARD** |
| Context band | **SHORT CONTEXT** (≤272K input tokens under current provider pricing) |
| Luna input/output USD/1M | **0.10 / 0.50** |
| Sol input/output USD/1M | **2.00 / 10.00** |
| Astra input/output USD/1M | **10.00 / 50.00** |
| Provenance | Official OpenAI GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra model docs + API Pricing page (ChatGPT-revalidated 2026-10-05) |
| Claim boundary | Dated FinOps **ordering hint** among sufficient configs · **≠** observed REAL cost · **≠** savings proven · cached/cache-write/long-context/other tiers **not** stored unless consumed by `estimateCostUsd` |
| Cohort | Luna / Sol / Astra |
| Efforts | Voir §17.3 |
| Statut | **Non confirmé par appel réel** — **ZERO REAL** |
| Valeur permanente ? | **Non** — snapshot ≠ doctrine ; **à revalider avant tout gate REAL** |
| Entitlement compte/API | **Non vérifié** |

**Aucun appel OpenAI réel n’a été effectué.** Les capacités ci-dessus sont des **données de manifest**, pas une preuve de disponibilité.

---

## 19. Deterministic bypass

- P4 : **deterministic NO-LLM bypass avant routing**.
- P5-S01 : **aucune logique de bypass nouvelle** ; les chemins déterministes Product existants sont **conservés**. **Pas de routeur par mots-clés.**
- Le routing n’est invoqué que lorsque la Strategy a produit une décision (cognition requise) ; sans décision Strategy, `resolveProductCognitiveRouting` retourne `null`.
- **Correction Pass 01 CP3 — PREUVE D0 :** opération Product représentative `composeStudioCognitiveContext` (projection sémantique déterministe Studio) → **0** `runNoraCognitiveTurn` · **0** `decideCognitiveRouting` · **0** appels Fake provider (`complete` / `completeStructured` / `completeRound`) · **0** live `fetch` · **0** `COGNITIVE_STRATEGY_SELECTED` · **0** `COGNITIVE_ROUTING_SELECTED` · identité Project/LPS préservée (`p5.s01.deterministicBypass.d0.test.ts`).
- **Réserve :** inventaire exhaustif de tous les chemins déterministes ≠ re-audité ; une opération représentative existante est prouvée.

---

## 20. Fake/Real qualification D0

| Aspect | Qualification |
| --- | --- |
| Niveau de preuve | **D0** (déterministe/local) |
| Provider | **Fake** (`FakeConversationProvider`) |
| Appels live OpenAI | **0** (P5-D0-24) |
| Même Agents Runner | Oui (P5-D0-23) |
| Fake garde l’adapter | Oui (P5-D0-22) |
| REAL-FIRST (P4 §48) | **Frontière OpenAI non exercée dans S01** — décision d’autorisation REAL **non consommée** ; la slice **ne peut pas** être déclarée close sur cognition/routing |
| R1 / R2 / R3 | **NOT STARTED** |

**D0 PASS ≠ REAL PASS.** Une slice cognition/routing ne se ferme pas par Fake/D0 seul lorsque la frontière OpenAI réelle est accessible : **S01 reste donc LOCAL CANDIDATE**.

---

## 21. Test/evidence matrix

### 21.1 Tests P5-S01 (Correction Pass 01 — 26 cas ciblés)

| Fichier | Cas | Couvre |
| --- | --- | --- |
| `p5.s01.cognitiveRouting.d0.test.ts` | **19** | P5-D0-01 … P5-D0-24 + CP4 prices + CP5 order + hardened D0-10 |
| `p5.s01.integratedProduct.d0.test.ts` | **2** | Seam direct + **CP2 TRUE server-path** (`projectAssistantSendAction` → F2 → F1 → routing) |
| `p5.s01.deterministicBypass.d0.test.ts` | **1** | **CP3** `composeStudioCognitiveContext` NO-LLM / NO-router |
| `p5.s01.semanticInvariants.d0.test.ts` | **3** | P5-SEM-05 · P5-SEM-02/03 · P5-SEM-08 |
| `p5.s01.workspaceLayout.ui.test.tsx` | **1** | Rail P3 + Workspace Conversation sans internals |

### 21.2 Mapping P5-D0

| ID(s) | Assertion |
| --- | --- |
| P5-D0-01 | Cohort nominal = Luna / Sol / Astra |
| P5-D0-02 | Routing nominal exclut GPT-5.6 |
| P5-D0-03 | Manifest historique MW0 GPT-5.6 inchangé |
| P5-D0-04 | Strategy ne contient aucun mapping modèle fixe |
| P5-D0-04b | FinOps Standard short-context prices 0.10/0.50 · 2/10 · 10/50 |
| P5-D0-05 / 06 | Quality Floor avant FinOps ; configs insuffisantes exclues |
| P5-D0-05b | **ORDER** Quality → provider → FinOps (reason codes stage-distinct) |
| P5-D0-07 | Luna `none` accepté |
| P5-D0-08 / 09 | Sol / Astra `none` rejeté |
| P5-D0-10 | Manifest cible vide/inconnu → router **fail-closed** (`PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR`) |
| P5-D0-11 | Effort non supporté non coercé silencieusement |
| P5-D0-12 | Le budget ne peut pas abaisser sous le plancher |
| P5-D0-13 / 14 / 15 | Décision reconstructible · version de politique · reason codes |
| P5-D0-16 | Escalade max = 1 |
| P5-D0-17 | Identité de tâche cognitive stable requise |
| P5-D0-18 / 19 | Le client ne peut sélectionner modèle/effort via le chemin Product |
| P5-D0-20 | Un modèle plus fort n’élargit pas les champs d’autorité |
| P5-D0-21 | Télémétrie sans CoT |
| P5-D0-22 / 23 / 24 | Frontière Fake (adapter) · même Runner · zéro live |

### 21.3 Régressions et portes qualité (Correction Pass 01)

| Vérification | Résultat |
| --- | --- |
| Targeted P5 (26) | **PASS** |
| Adjacent MW2 + F2 + Pre-M6 (197) | **PASS** |
| **`npm test` FULL** | **PASS** — 465 files / 5178 tests passed · 17 files / 137 skipped |
| `typecheck` | **PASS** |
| `lint` | **PASS** |
| `build` | **PASS** |
| CI distante sur P5-S01 | **N/A** — aucun push |

### 21.4 Ce que la matrice ne prouve pas

Fidélité visuelle · REAL · R1/R2/R3 · exécution de la boucle d’escalade · alignement F2 production routing · comportement Compact/Mobile · accessibilité mesurée (axe/clavier) · NCR.

---

## 22. Visual fidelity evidence

**Verdict : CANDIDATE WITH RESERVES — NOT pixel-perfect PROVEN.**

| Preuve | Statut |
| --- | --- |
| Structure P3 implémentée (rail, header, onglets, focus bar, Conversation + Contexte 356px) | **Oui** (code + test UI de layout) |
| Palette `--pm6-*` convergée vers P3 | **Oui** (valeurs ; pas de comparaison pixel) |
| Emblème Meridian | **Asset récupéré** (§24.4) — comparaison visuelle runtime **non faite** |
| Captures **runtime** vs Figma Desktop `46:2` | **NON capturées** (Playwright derrière auth) |
| Compact `190:44` / Mobile `190:306` | **NON prouvés** |
| Motion / reduced-motion | Auto-scroll respecte `prefers-reduced-motion` (code) ; motion P3 complète **non prouvée** |
| Accessibilité | Éléments sémantiques/`aria-label` présents ; **audit a11y non réalisé** |

**Réserves (obligatoires dans toute citation de ce document) :** aucune formulation « conforme Figma », « pixel-perfect » ou « visual PASS » n’est autorisée tant que des captures runtime comparatives n’existent pas. Gate visuel P4 §51.2 / §51.6 : **non satisfait**.

---

## 23. PIB/Simplification assessment qualitative

> Évaluation **heuristique et qualitative** (PIB reste heuristique ; pas de metrics factory ; pas de seuils numériques). **Net Complexity Reduction = NOT PROVEN.**

| Critère P4 §51.5 | Observation P5-S01 |
| --- | --- |
| Journey représentative | Ouvrir un projet → converser avec Nora (tronçon couvert) |
| Charge d’interaction accidentelle | **Non augmentée par conception** : aucune nouvelle action dans le panneau de contexte ; onglets = aides de navigation |
| Admin burden méthode/runtime | **≈ 0 nominal côté Pilote** : modèle/effort choisis par la politique (client non habilité — P5-D0-18/19) |
| MATERIAL préservé | Décisions/confirmations existantes inchangées (aucun changement de sémantique d’autorité) |
| PROTECTIVE protégé | Fail-closed routing ; pas de downgrade silencieux |
| ACCIDENTAL | Réduction **non mesurée** ; formulation du prochain pas dédupliquée (`lpsNextAction`) |
| Pas de nouveau cockpit/workflow parallèle | Aucun ajouté |
| Charge Nora/contexte | Digest lecture seule ; **non évalué en usage réel** |
| Duplication architecturale | Dual tokens `--sfia-*`/`--pm6-*` **persiste** (TEMP WITH EXIT) |
| NCR à l’échelle intégrée | **NOT PROVEN** (échelle S01 insuffisante) → P5 ultérieur / P6 |

**FinOps cognitif ≠ preuve de simplification** : `estimatedCostUsdHint` est un indice d’ordonnancement, pas une preuve.

---

## 24. Debt + exits

| ID / Actif | Dette | Exit | Statut |
| --- | --- | --- | --- |
| **P5-DEBT-F2-ROUTING-ALIGNMENT** | F2 `analyzeIntent` utilise encore le **modèle statique du provider** (hors politique Product de routage) → risque de double chemin LLM | Aligner F2 sous la même politique / provenance (P4 §30/§50 « dual LLM surfaces ») | **OPEN** |
| `OPENAI_MODEL` | Sélection nominale encore référencée (chemin de repli / bootstrap) | **RETIRE LATER** du chemin nominal (router-selected) | **TEMP WITH EXIT** |
| `OPENAI_REASONING_EFFORT` | Idem (aussi F2 statique) | **RETIRE LATER** du chemin nominal | **TEMP WITH EXIT** |
| Familles de tokens `--sfia-*` / `--pm6-*` | Double famille | Convergence/retrait de `--sfia-*` quand les surfaces migrent | **TEMP WITH EXIT** |
| Snapshot capability P5 TARGET | Daté, non confirmé REAL | Revalidation avant tout gate REAL | **OPEN** |
| Escalade runtime | Politique `max = 1` uniquement, boucle non exercée | Exercer via R1/R2 sur le chemin intégré | **OPEN** |
| Synthesis | Raccourci **désactivé** (pas de surface Product) | Synthesis Product-derived (P4 §18–§20) | **OPEN** |
| Fallback legacy routing absent | Chemin historique encore présent si Strategy sans routing | Retirer quand tous les chemins Product sont routés | **OPEN** |

### 24.4 Provenance de l’asset Meridian

- `app/public/branding/meridian-emblem-product.png` (31 169 octets).
- **Récupéré depuis le remplissage image brut Figma (raw fill)**, décodé avec `LOAD_TRUNCATED_IMAGES` (le fichier source étant tronqué).
- Référence de provenance : exports scratch `.tmp-sfia-review/visual/figma/meridian-*.png` (non suivis, hors livrable).
- **Réserve :** asset récupéré, fidélité de rendu runtime **non comparée** ; la chaîne de récupération (fill tronqué) doit rester documentée si l’asset est ré-exporté proprement depuis Figma.

---

## 25. Open gaps

| # | Gap | Impact |
| --- | --- | --- |
| G1 | Captures runtime comparatives vs Figma **absentes** (auth-gated) | Visual = CANDIDATE WITH RESERVES |
| G2 | Compact / Mobile **non prouvés par screenshot** | Fidélité responsive inconnue |
| G3 | Boucle d’escalade **non exercée** (politique max = 1 seulement) | Comportement runtime inconnu |
| G4 | **P5-DEBT-F2-ROUTING-ALIGNMENT** ouverte | Double surface LLM |
| G5 | **ZERO REAL** ; R1/R2/R3 non démarrés | REAL-FIRST non satisfait |
| G6 | Synthesis Product-derived non livrée ; raccourci désactivé | Pas de surface Synthèse |
| G7 | Aperçu / Exécution / Journal / Historique : onglets de navigation sans projections object-native | Journey Product non bouclée |
| G8 | Nora Activity / STOP / Auth visual / Deliverable-Artifact non livrés | Hors S01 |
| G9 | Dual tokens `--sfia-*` / `--pm6-*` | Duplication temporaire |
| G10 | `OPENAI_MODEL` / `OPENAI_REASONING_EFFORT` encore présents hors chemin nominal | Exit non exécuté |
| G11 | Snapshot capability non confirmé par provider réel | Risque d’écart doc/entitlement |
| G12 | NCR non prouvée ; PIB qualitatif seulement | Simplification non démontrée |
| G13 | Audit a11y non réalisé | Qualité non mesurée |
| G14 | Aucune CI distante sur P5-S01 | Intégration non vérifiée |

---

## 26. Remaining P5 slices

Liste de **travaux restants** (non engagés ; décomposition formelle après gate S01) :

1. **Preuve visuelle** : captures runtime Desktop/Compact/Mobile vs Figma, correction des écarts.
2. **R1 / R2** sur le chemin intégré (nécessite gate REAL distinct) ; revalidation du snapshot provider.
3. **Aperçu / Exécution** object-native depuis projections Product.
4. **Journal / Historique / Synthèses** (dont Synthesis Product-derived dans Product SQLite).
5. **Nora Activity / STOP**, **Auth GitHub visual**.
6. **Deliverable / Artifact** (représentation minimum-suffisante, pas de nouveau store).
7. **Alignement F2** (`P5-DEBT-F2-ROUTING-ALIGNMENT`) ; retrait nominal `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT`.
8. **Exercice de l’escalade** (≤ 1).
9. **Convergence tokens** (`--sfia-*` → `--pm6-*`).
10. **R3** sur chemin Product intégré représentatif.

---

## 27. P6 handoff conditions

P6 (QA comparatif/global, NCR) **ne démarre pas** sur la base de S01. Conditions minimales de handoff (rappel, non exhaustif) :

- P5 slices nécessaires livrées et **intégrées** (gates Git Morris passés) ;
- **R1/R2/R3** exécutés sur le chemin Product intégré (si REAL autorisé) ;
- **Preuves visuelles runtime vs Figma** pour les surfaces implémentées ;
- Preuve de continuité sémantique et d’absence d’architecture parallèle ;
- Évidence PIB/NCR à l’échelle intégrée (P6) ;
- Dettes P5 classées avec exit ou acceptées explicitement.

**Statut actuel : conditions NON remplies.**

---

## 28. Gates

| Gate | Statut |
| --- | --- |
| Morris P5 AUTHORIZATION | **CONSUMED** |
| Revue ChatGPT de la livraison P5-S01 | À faire (si requise par le process) |
| **Prochain gate : MORRIS P5-S01 GIT INTEGRATION** (commit / push / PR) | **NON consommé — NEXT** |
| Merge P5-S01 | **NON consommé** (gate distinct après revue PR) |
| **REAL / R1 / R2 / R3** | **NON consommé / NOT STARTED** |
| Adoption runtime v3 | **NON** |
| Mutation Figma | **NON** |

**Ce pass n’a produit aucun commit, push, PR ou merge.**

---

## 29. Claims / anti-claims

### 29.1 Claims autorisés

| Claim | Niveau |
| --- | --- |
| P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS | **YES** |
| Politique de routage cognitif implémentée (pure, D0) | **Implémenté + testé D0** |
| `COGNITIVE_ROUTING_SELECTED` émis sans CoT | **Testé D0** |
| Routing câblé après Strategy dans le runtime Nora existant, même Runner | **Testé D0** |
| Structure Workspace/Shell P3 implémentée localement | **Implémenté + test layout UI** |
| typecheck / lint / build / régressions ciblées PASS | **Rapporté par la passe de livraison** |
| P5-S01 = LOCAL CANDIDATE (réserves visuelles) | **YES** |

### 29.2 Anti-claims (interdits)

| Anti-claim | Statut |
| --- | --- |
| P5-S01 COMPLETE / VALIDATED / INTEGRATED | **NON** |
| P5 COMPLETE | **NON** |
| Fidélité Figma / pixel-perfect / Visual PASS | **NON prouvé** |
| Compact / Mobile conformes | **NON prouvé** |
| REAL / R1 / R2 / R3 PASS | **NON** — ZERO REAL, NOT STARTED |
| READY FOR REAL | **NO** |
| Escalade validée à l’exécution | **NON** (politique seulement) |
| Router de production / RouterService | **NON** (fonction pure intégrée au runtime) |
| F2 aligné sous la politique de routage | **NON** (dette ouverte) |
| `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT` retirés | **NON** (RETIRE LATER) |
| Famille de tokens unique | **NON** (dual TEMP WITH EXIT) |
| Synthesis Product-derived livrée | **NON** |
| Net Complexity Reduction prouvée | **NON** |
| Runtime v3 adopté | **NON** (NON ADOPTED) |
| Intégré sur main / CI verte pour P5-S01 | **NON** (aucun push) |
| Nouvelle doctrine / architecture P5 | **NON** (P4 reste autorité) |

---

## 30. Correction Pass 01 — Critical Review blockers CP1–CP5

Previous ChatGPT Critical Review verdict: **NOT READY — P5-S01 CRITICAL REVIEW INCOMPLETE**.

Morris GO: **P5-S01 CORRECTION PASS 01 = YES** (local edits + tests + docs + Review Pack + handoff L3 only).

| CP | Gap previous | Correction | Verdict |
| --- | --- | --- | --- |
| **CP1** | Full Vitest not proven | `npm test` (= `vitest run`) FULL | **PASS** — 465 files / 5178 tests · 17 files / 137 skipped |
| **CP2** | Integrated test bypassed Conversation server seam | `projectAssistantSendAction` → `orchestrateAssistantSend` → `analyzeIntent` → `composeStudioCognitiveContext` → `orchestrateProjectAssistantTurn` → `runNoraCognitiveTurn` → routing → Fake Runner | **PASS** |
| **CP3** | Deterministic bypass only asserted KEEP | Representative op `composeStudioCognitiveContext` — 0 provider / 0 router / 0 Nora turn | **PASS** |
| **CP4** | Incorrect/unqualified prices | Standard short-context 2026-10-05: Luna 0.10/0.50 · Sol 2/10 · Astra 10/50 + provenance | **PASS** |
| **CP5** | Pipeline capability→quality (wrong order) | Code+tests: quality → provider → FinOps; stage reason codes; hardened unknown-manifest fail-closed | **PASS** |

Also fixed full-suite regressions caused by S01 (classification A):
- `importBoundaries` allowlist + `ProductRailRecents`
- Living Production Runtime Reference digests for modified tracked sources

Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by PR #555 merge + Visual Correction Pass 01 evidence + P5-S02 REAL proof. F2 debt **OPEN**.

---

## 31. P5-S02 — Bounded REAL R1+R2 (factual)

| Item | Result |
| --- | --- |
| Morris bounded REAL authorization | **CONSUMED** |
| Router→provider wiring | **A — already wired** (no production architecture change) |
| R1 Luna `none` / Sol `low` / Astra `low` | **PASS** |
| R2-A Routine → `gpt-6-luna` / `low` | **PASS** (selected == actual) |
| R2-B High-Assurance → `gpt-6.1-sol` / `high` | **PASS** (selected == actual) |
| Same Nora / same Agents Runner | **YES** |
| Deterministic bypass regression | **PASS** (D0 suite) |
| F2 debt | **OPEN** (F2 still uses `OPENAI_MODEL=gpt-5.6-luna`) |
| Successful-run principal calls | **7** |
| Contractual REAL envelope | **≤8** requests |
| Cycle aggregate observed | ≈ **10** (first R1×3 then createProject failed on invalid `CRITICAL`; successful retry re-ran R1+R2) |
| Envelope ≤8 respected? | **NO** |
| Governance deviation | **DISCLOSED** · stop condition exceeded |
| Morris decision | **DEVIATION ACCEPTED** — technical R1/R2 evidence **RETAINED** · **NO REAL RERUN** required or authorized for regularization |
| Future REAL-cycle corrective rule | All local Product/setup preconditions **MUST** be validated before the first provider call when reasonably possible, so the REAL envelope is not spent before local setup viability is known |
| Estimated spend hint (successful ledger) | ≈ **$0.043** |
| Evidence | `.tmp-sfia-review/p5-s02-evidence.json` (scratch — not committed) |
| Project Git | **INTEGRATED** via PR **#556** MERGED · main `1a7e80b2…` · CI **#680** SUCCESS |

---

## 32. P5-S03 — Object-native Aperçu + Exécution (factual)

| Item | Result |
| --- | --- |
| Morris P5-S03 delivery authorization | **CONSUMED** |
| Morris P5-S03 CP01 authorization | **CONSUMED** |
| Morris P5-S03 CP02 authorization | **CONSUMED** |
| View navigation | Conversation / Aperçu / Exécution = **real surfaces** (no scroll-only nominal path) |
| Aperçu sources | LPS / lifecycle / trajectory nodes / attention / durable history |
| Exécution sources | `w2DeriveGovernedExecutionContinuityAction` + `w2ReadCurrentGovernedExecutionContinuityAction` |
| Presentation adapter | `pilotExecutionPresentation` (presentation-only) |
| CP01 Axis 1 | Durable Exécution action continuity — Confirm via `w2ConfirmExecutionContractAction` · Execute via authorize + reconciler · **CONFIRM ≠ EXECUTE** · fresh-mount E1–E6 |
| CP01 Axis 2 | B1 Overview owns desktop composition (no permanent context rail) · B2 mobile shell hierarchy simplified |
| CP02 Axis 1 | Mounted + remount reconcile continuity — `shouldContinueReconcileNominally` / `shouldAutoResumeReconcileOnRemount` / `nextReconcileContinueDelayMs` · `intent=continue` only after execute · C01–C10 |
| CP02 Axis 2 | Actionable C polish (composer ~60px / Overview+Execution spacing) · **EXPECTED PRODUCT CONTENT VARIANCE** preserved (no fake EC/Synthèses/counts) |
| New persistence / state machine / Product objects | **NONE** |
| Architecture parallelism | **NONE** |
| Synthesis surface | **NOT BUILT** (honest unavailable) |
| Journal / Historique | **KEEP** — already durable object-native (not rebuilt) |
| REAL calls | **0** |
| Project Git | **NONE** this pass |

---

## 32bis. P5-S03 Correction Pass 01 — status (closed locally)

| Axis | Status |
| --- | --- |
| Axis 1 durable action continuity | **CLOSED locally** — process-local F3 gates removed from Exécution · W2 path reused |
| Axis 2 B1 Aperçu desktop | **CLOSED locally** — composition corrected vs 51:2 |
| Axis 2 B2 mobile shell | **CLOSED locally** — shared hierarchy corrected across Product views |
| A / B visual blockers | **A=0 / B=0** |

---

## 32ter. P5-S03 Correction Pass 02 — status

| Axis | Status |
| --- | --- |
| Axis 1 execution reconcile continuity | **LOCAL CANDIDATE** — mounted continue + remount auto-resume via canonical W2 policy |
| Axis 2 actionable C polish | **LOCAL CANDIDATE** — composer 358×64 / send 36×38 · spacing polish |
| Content-honesty | **PRESERVED** — not unresolved visual debt |
| A / B visual blockers | **A=0 / B=0** |
| P5-S03 INTEGRATED | **NO** |
| P5 COMPLETE | **NO** |
| R3 / P6 / runtime v3 | **NOT STARTED / NO / NON ADOPTED** |

---

## 33. P5-S04 — Product-derived Synthèses (factual)

| Item | Result |
| --- | --- |
| Morris P5-S04 delivery authorization | **CONSUMED** |
| Morris P5-S04 CP01 authorization | **CONSUMED** |
| Morris P5-S04 CP02 authorization | **CONSUMED** |
| Final ChatGPT Critical Re-Review | **PASS** |
| Morris P5-S04 GIT INTEGRATION GATE | **AUTHORIZED / CONSUMED** |
| Morris P5-S04 MERGE / POST-MERGE | PR **#558** **MERGED** · main **`c7b53b93…`** · CI **#684** / `37377995199` **SUCCESS** · Required Gate **SUCCESS** |
| Status | **INTEGRATED / POST-MERGE VERIFIED** |
| Scope | M9 `oa_syntheses` · deterministic `buildProductSynthesis` · SQLite repository · read-only Synthèses surface · Overview + Conversation teasers · authority `none` (no NON-AUTORITATIVE badge in Pilot UI) |
| Architecture | OBJECTS FIRST → PROJECTIONS SECOND → SURFACES THIRD · Product-path `materializeW3bProductTerminal` → `maybeMaterializeProductSynthesisAfterW3c` · Contract-Result lineage + currentness · durable W3-C Recommendation · **no invented verdict/recommendation** · **≠ Truth C** |
| CP02 axes | Soft-fail observability (`synthesisMaterialization` on ok:true) · Pilot semantic projection (subject/planned/done/recommendation) · recommendation currentness only (stale fallback closed) · missing bound Evidence fail-closed · visual recapture PRODUCT-PATH |
| Auth / REAL | Studio auth via `.tmp-sfia-review/auth/studio-storage-state.json` · **ZERO REAL for S04** · `P5_S02_RUN_REAL` never set for S04 · S02 bounded REAL historical proof **not revoked** |
| Evidence — tests | CP02 SF/PL/REC/EV · CP01 L01–L09 / C01–C08 / P01–P05 · D0 + UI · migration · full `npm test` (see prior Review Packs) |
| Evidence — visual CP01 | `.tmp-sfia-review/p5-s04-visual/cp01/after/` · PRODUCT-PATH · FocusFlow `syn:fc44ff99449fd3b96f4500b60a2eeda7` · **A=0 / B=0** · B1/B2 **CLOSED** · preserved |
| Evidence — visual CP02 | `.tmp-sfia-review/p5-s04-visual/cp02/after/` · PRODUCT-PATH · FocusFlow `syn:ed340d63e583ff51bc9a0cb7a6c35219` · **A=0 / B=0** · B1/B2 **CLOSED — NO REGRESSION** · **PILOT LEAKS = 0** · see `cp02/correction-design-note.md` |
| Historical visual seed | `../_seed-synthesis.mjs` retained as historical only (direct materialize — **NOT** CP01/CP02 proof) |
| Debts | F2 routing **OPEN** · R3 **NOT STARTED** · P6 **NOT READY** · runtime v3 **NON ADOPTED** |
| Anti-claims | **≠** Truth C · **≠** authority mutation · **≠** UI-only fake synthesis · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** P5-S05 AUTHORIZED |

---

## 34. Current verdict

```text
P5 AUTHORIZED BY MORRIS = YES
P5 STARTED              = YES
P5 IN PROGRESS          = YES

P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556) — R1/R2 PASS
P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
         CP01/CP02 preserved · A=0 / B=0 · B1/B2 CLOSED
         ZERO REAL for S04

READY FOR REAL          = NO
runtime v3              = NON ADOPTED
P5 COMPLETE             = NO
P6 READY                = NO
R3                      = NOT STARTED
F2 routing debt         = OPEN

POST-S04 CHATGPT REQUALIFICATION = PASS
NEXT RECOMMENDED        = P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment
P5-S05 DELIVERY         = NOT AUTHORIZED
P5-S05 REAL / R3        = NOT AUTHORIZED
```

**Synthèse honnête.** P5-S04 est **intégré et post-merge vérifié**. P5 reste **IN PROGRESS**. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ S05 AUTHORIZED**. **P4 reste l’autorité d’architecture**.

---

## 35. Post-S04 requalification — RECOMMENDATION CHATGPT (≠ décision Morris)

> **Qualification.** Cette section enregistre une **recommandation ChatGPT** après intégration de P5-S04. Elle **n’autorise pas** P5-S05, R3, ni REAL. Elle **n’est pas** une décision Morris.

| Item | Statut |
| --- | --- |
| ChatGPT POST-S04 REQUALIFICATION | **PASS** |
| R3 | **NOT STARTED** — prochain proof gap majeur |
| F2 intent cognition | utilise encore un chemin provider distinct du routing Product nominal — **OPEN** |
| Recommandation | fermer **R3 + F2 routing alignment** ensemble dans **P5-S05** pour une preuve R3 intégrée cohérente |
| Architecture parallèle | **NONE REQUIRED** |
| Gaps P5 ultérieurs | Nora Activity / STOP P3 remaining · Auth P3 visual remaining · temporary/debt exits · Net Complexity Reduction exit proof not yet established |
| P5-S05 DELIVERY | **NOT AUTHORIZED** |
| P5-S05 REAL / R3 | **NOT AUTHORIZED** — gate Morris distinct requis avant toute exécution |

Anti-claims explicites :
- **≠** « Morris a autorisé S05 »
- **≠** « Morris a autorisé REAL »
- **≠** « P5-S05 started »
- **≠** R3 PASS · **≠** P5 COMPLETE · **≠** P6 READY · **≠** runtime v3 ADOPTED

---

*Fin du document P5 — Integrated Delivery — S01/S02/S03/S04 INTEGRATED / POST-MERGE VERIFIED · POST-S04 REQUALIFICATION PASS · S05 RECOMMENDED NOT AUTHORIZED · R3 NOT STARTED · READY FOR REAL = NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
