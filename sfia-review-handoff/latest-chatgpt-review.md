# SFIA Studio V3.1 Profile Qualification — Functional Design Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 19:13:06 CEST (+0200)
- **Cycle :** 2 — Conception fonctionnelle
- **Profil :** Standard
- **Typologie :** DOC
- **CKC :** pilots/02-conception-fonctionnelle.md · candidate · v0.1.0 · aucune autorité d'exécution
- **GO Morris consommé :** GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE

## Local Git Truth Check
- workspace : /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- repository : mcleland147/sfia-workspace
- branche : framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage
- HEAD : 3e8a4374405dce98866e35fb60c5c7329701f191
- origin/main : 3e8a4374405dce98866e35fb60c5c7329701f191
- ahead/behind : 0 / 0
- branche distante cadrage : absente
- staged : aucun
- handoff tip pré-cycle : 7dd766882aba6448b86ddf70335bb628cc12318c

```
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
```

## Snapshots et hashes initiaux
- README init : 0f3a69d7612870237988ee0c3c07fe2a6122b6f5
- 08 init : 6e4c1384d362d54353446808df3dae24ef8b6659
- 12 init : 82be657cb3b88be0ac72d41e172106a557be101b
- Snapshots : .tmp-sfia-review/before/{README,08,12}.md

## Hashes finaux
- README final : a656eee28687a4510c13607d8923f2cef7eb0384
- 08 final : 4af9b7b750d1014e8d255137f0e48a37e5a1e0e2
- 12 final : 82be657cb3b88be0ac72d41e172106a557be101b (= init → UNCHANGED)
- 13 créé : 5a4983ddfbf14c607bece8b1fb9d9516f318ee80

## Preuve fichier 12 inchangé
- hash init = hash final = 82be657cb3b88be0ac72d41e172106a557be101b
- cmp before/12 vs current/12 : IDENTICAL
- verdict : FILE_12_UNCHANGED_OK

## Sources consultées
- prompts/templates/sfia-cycle-execution-template.md (§2, §4, §5, §6.4, §6.6, §7, §8, §9)
- method/.../sfia-cycle-routing-guide.md
- method/.../pilots/02-conception-fonctionnelle.md
- method/.../sfia-chatgpt-cursor-operating-model.md
- method/.../sfia-rules-and-guardrails.md
- method/.../sfia-validation-checklist.md
- docs/foundation/sfia-engineering-principles.md
- docs/architecture/2026-06-27-sfia-decision-engine.md
- framing README, 02–05, 07–10, 12 (12 lecture seule)
- V2-A2 / V2-A3 README
- ProjectWorkspaceView / Client / RuntimeDisclosureBanner / navigation / vertical-slice-runtime
- T-A2 README + 01–04 + types.ts + qualification.ts + invariants.ts + qualifyCycle.ts + index.ts
- Catalogue : CAPITALIZATION_CYCLE_TYPE_ID, SFIA_CYCLE_LABELS, 02-fifteen-cycles-synthetic-map.md, schemas CycleType absents runtime
- handoff tip 7dd76688…

## Qualification
- Type : 2 Conception fonctionnelle
- Profil : Standard
- Typologie : DOC
- CKC candidate · aucune autorité d'exécution
- Aucune implémentation

## Décisions D-V3 consommées
D-V3-01=1 · D-V3-02=1 · D-V3-03=2 (create hors V3.1) · D-V3-04=1 · D-V3-05=1 · D-V3-06=CONFIRM CRITICAL FAIL-CLOSED · D-V3-07=1 WITH FIGMA RESERVE · D-V3-08=1

## Catalogue — observations
- Runtime OA : seul ID explicite `cyc:capitalization`
- SFIA_CYCLE_LABELS : 15 slugs sans préfixe cyc: — labels harness, pas catalogue OA
- Méthode : 15 noms canoniques documentaires
- Pas de registry CycleType runtime des 15
- D1 proposedCycleType (ex. FRAMING) : stack legacy hors vertical-slice
- **R-V3.1-CATALOG-01 BLOQUANTE DELIVERY**

## Règles fonctionnelles (résumé)
- Critical si un des 5 signaux critiques = true
- sinon Light si lowRiskBounded = true
- sinon Standard
- Critical gagne sur lowRiskBounded
- six réponses explicites obligatoires ; absence ≠ false
- requestedProfile non exposé
- aucun CreateCycle / LPS link / epistemic persist

## Diff controls
### git diff --stat
```
 .../08-implementation-backlog-and-slicing.md       | 59 +++++++++-----
 .../README.md                                      | 93 ++++++++++++++--------
 2 files changed, 101 insertions(+), 51 deletions(-)
```
### git diff --name-status
```
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
```
### git diff --check
```
EXIT:0
```

## Tests
- **Non exécutés** — aucun code / test modifié ; cycle DOC conception uniquement.

## Content coverage
- inherited untracked file 12 full content : yes
- inherited file 12 unchanged proof : yes
- created file 13 full content : yes
- README final full content : yes
- backlog final full content : yes
- current-cycle diffs README/08 : yes
- functional rules complete : yes
- acceptance criteria complete : yes
- synthesis only : no
- review pack verdict : complete

## Risques / réserves
R-V3.1-CATALOG-01 (bloquante) · Figma/D-VS-05 · process-local · pas d'implémentation

## Prochain gate candidat
GO DELIVERY SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 QUALIFYCYCLE READ-ONLY — NO CREATECYCLE — NO LPS LINK — NO EPISTEMIC PERSISTENCE — CONTRACT GIT
(précondition : résolution catalogue)

## Verdict
V3.1 FUNCTIONAL DESIGN COMPLETE WITH RESERVE — CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY — IMPLEMENTATION NOT AUTHORIZED

---

# FULL FILE (inherited unchanged): 12-v3-cycle-recommendation-cadrage.md

# 12 — Lot V3 Cycle Recommendation — Cadrage

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 18:52:00 CEST (+0200) |
| **Cycle** | 1 — Cadrage (phase arbitrage / validation) |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Profondeur** | Standard |
| **Gate cadrage** | `GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION` (consommé) |
| **Gate arbitrage (normalisé)** | voir Decision record Morris |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Commit V2-A3 intégré** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (via merge `3e8a437…`) |
| **CKC Cadrage** | `pilots/01-cadrage.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
| **Statut documentaire** | `ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED` |
| **Commit / push / PR projet** | **non** |

## B. Résumé exécutif

L’utilisateur local (Morris en démonstrateur) dispose désormais d’un Project Workspace process-local (`/studio/projects/[id]`) après Create Project. Le parcours historique prévoit ensuite une **recommandation de cycle**.

**Écart structurant :** le runtime T-A2 (`QualifyCycle`) recommande un **profil** (`Light` \| `Standard` \| `Critical`) à partir de signaux structurés. Il **ne recommande pas** un `cycleTypeId`. `CreateCycle` **exige** un `cycleTypeId` déjà fourni. Afficher honnêtement « cycle recommandé » sans arbitrage Morris sur la **source du type** serait une sur-promesse.

Ce cadrage formalise la promesse, les options, les frontières T-A2 et le decision pack D-V3 — **sans** implémentation ni sélection implicite.

## C. Intention vs solution

### Problème

Après création et consultation d’un Project + LPS, l’utilisateur doit comprendre **quel type de travail SFIA** engager ensuite et sous **quel profil de contrôle**, sans confondre recommandation et décision Morris.

### Ce que « Cycle Recommendation » peut signifier

1. Recommander un **profil** (déjà supporté par T-A2 QualifyCycle).
2. Recommander un **type de cycle** (`cycleTypeId`) — **non supporté** aujourd’hui par QualifyCycle.
3. Préparer / créer un `CycleInstance` — CreateCycle, mutation explicite.
4. Persister un `EpistemicItem` de type Recommendation — option épistémique distincte.
5. Lier le cycle comme actif dans le LPS — `linkAsActiveCycle`, option mutation distincte.

### Solutions non présélectionnées

Aucune architecture, aucun moteur parallèle, aucune dépendance LLM, aucune frame Figma V3 ne sont retenus ici.

## D. Bénéficiaire et autorité

| Élément | Position |
|---------|----------|
| Bénéficiaire | Morris local — opérateur du démonstrateur Studio |
| Identité | **aucune** authentification IAM |
| Autorité Critical réelle | **absente** — Critical reste `proposed` |
| Stakeholder inventé | **interdit** |
| Décision Morris | Lot **V4** / T-A3 — hors V3 |

## E. État actuel repo-informed

| Élément | État |
|---------|------|
| V1 composition Project/LPS | intégré (fondation) |
| V2-A1 runtime bridge | intégré · create/get Project only |
| V2-A2 Create Project UI | intégré · `/studio/projects/new` |
| V2-A3 Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 MERGED |
| Singleton process-local | `globalThis` · volatil |
| Contrats T-A2 | présents sous `lib/oa/cycle/**` |
| Runtime vertical-slice | **n’expose pas** QualifyCycle / CreateCycle |
| Workspace UI | projection Project/LPS · CTA « Créer un autre projet » uniquement |
| Agent / LLM live | indisponible |
| Figma V3 | **non validé** comme source d’exécution · D-VS-05 non consommée |

## F. Écart fonctionnel majeur

```text
Promesse produit historique (J4) :
  « Affiche : cycle recommandé, profil, justification… »

Contrat T-A2 réel :
  QualifyCycle  → recommendedProfile (+ rationale, flags)
                  cycleTypeId optionnel (capitalization hint only)
  CreateCycle   → cycleTypeId OBLIGATOIRE
                  status Critical=proposed | Light/Standard=acknowledged
                  isMorrisDecision toujours false sur qualification
```

**Conséquence :** le produit ne peut pas afficher honnêtement « cycle (type) recommandé » sans décision Morris sur D-V3-01 / D-V3-02. Il peut déjà, en principe, afficher « profil recommandé » si V3 se borne à QualifyCycle + saisie des signaux + `cycleTypeId` fourni autrement.

## G. Définitions fonctionnelles distinctes

| Terme | Définition |
|-------|------------|
| **Type de cycle** | Identifiant `cycleTypeId` (ex. catalogue méthode) — entrée de CreateCycle |
| **Profil** | `Light` \| `Standard` \| `Critical` — sortie de QualifyCycle |
| **Signaux** | Booléens structurés : structuralChange, securityImpact, architectureImpact, dataImpact, irreversible, lowRiskBounded |
| **Recommandation** | Sortie QualifyCycle · `isMorrisDecision=false` |
| **CycleInstance** | Entité persistée process-local via CreateCycle |
| **proposed** | Statut Critical à la création — pas d’ack auto |
| **acknowledged** | Statut Light/Standard à la création — **≠** décision Morris |
| **activeCycleInstanceId** | Champ LPS — liaison optionnelle `linkAsActiveCycle` |
| **EpistemicItem Recommendation** | Type épistémique modélisé — persistance **optionnelle** et séparée |
| **Décision Morris** | Acte humain V4/T-A3 — hors V3 |

## H. Parcours utilisateur candidat

Depuis `/studio/projects/[id]` :

1. Consulter le contexte Project + LPS (V2-A3).
2. Ouvrir une surface « préparation / recommandation » (route ou section — **non décidée**).
3. Fournir ou confirmer les entrées (signaux, éventuellement type, justification Critical).
4. Obtenir une **qualification** (profil + rationale + réserves).
5. Comprendre que **recommandation ≠ décision Morris**.
6. Éventuellement, via CTA explicite (si option retenue), **créer** un CycleInstance.
7. Ne **jamais** activer Critical, consommer un gate, ni simuler une autorité IAM.

## I. Entrées candidates

| Entrée | Rôle | Note |
|--------|------|------|
| projectId | contexte | depuis workspace |
| objectif / scope | narration UI | non scorés implicitement |
| cycleTypeId | selon D-V3-02 | requis pour CreateCycle |
| structuralChange | signal | booléen explicite |
| securityImpact | signal | booléen explicite |
| architectureImpact | signal | booléen explicite |
| dataImpact | signal | booléen explicite |
| irreversible | signal | booléen explicite |
| lowRiskBounded | signal | booléen explicite |
| requestedProfile | optionnel | peut être ajusté par règles |
| justification Critical | obligatoire si Critical | CreateCycle |

**Interdit :** score implicite, analyse IA live, scraping navigateur, déduction silencieuse de signaux.

## J. Sorties candidates

| Sortie | Source |
|--------|--------|
| recommendedProfile | QualifyCycle |
| rationale | QualifyCycle |
| criticalSignalsPresent | QualifyCycle |
| requiresJustificationForCritical | QualifyCycle |
| isMorrisDecision=false | QualifyCycle (toujours) |
| capitalizationViaCycleTypeId | si cycleTypeId fourni |
| état CKC (detailed/synthetic/absent/unavailable) | ResolveCKC — guidance only |
| réserves process-local / B5 / R1 | disclosures |
| CycleInstance | **uniquement** après CreateCycle explicite si option validée |

## K. Options de promesse produit

### Option V3-A — Type sélectionné + profil recommandé *(compatible T-A2 actuel)*

- L’utilisateur **sélectionne** explicitement un `cycleTypeId` (catalogue guidé, non inventé dans React).
- QualifyCycle recommande le **profil**.
- CTA explicite éventuel → CreateCycle.

### Option V3-B — Type + profil tous deux recommandés

- Nécessite une **conception** (et probablement architecture) pour produire `cycleTypeId` de façon déterministe.
- Risque : moteur parallèle / duplication de la méthode.
- Hors « simple bridge » runtime.

### Option V3-C — Agent / LLM live

- **Hors trajectoire actuelle** : agent réel indisponible, pas d’autorité d’exécution, pas de dépendance réseau autorisée pour ce démonstrateur.

**Arbitrage :** option **V3-A** retenue (D-V3-01/02 = 1). V3-B et V3-C non retenues pour ce lot.

## L. Options de mutation

| Option | Description | Note |
|--------|-------------|------|
| L1 | Qualification **read-only** | aucune CreateCycle |
| L2 | Qualification puis **CTA explicite** de création | recommandé comme candidate |
| L3 | Création **automatique** après qualify | **non recommandée** — création implicite |
| L4a | Ne **pas** lier LPS actif dans V3 | |
| L4b | Lier LPS actif **après CTA** (`linkAsActiveCycle`) | |
| L5a | Recommandation **non persistée** épistémiquement | |
| L5b | Persister `Recommendation` EpistemicItem après action explicite | |

Chaque axe (L1–L3, L4, L5) est un arbitrage **séparé** (D-V3-03…05).

## M. Critical

Contraintes **déjà imposées** par T-A2 (à confirmer / rappeler, pas à inventer) :

- signaux Critical → profil Critical ;
- justification **obligatoire** à la création ;
- status **`proposed`** uniquement ;
- **aucun** acknowledgement Critical dans T-A2 ;
- **aucun** gate Morris consommé ;
- UI attendue : état **blocked / Morris decision required** → Lot **V4** ;
- fail-closed.

## N. CKC

| Règle | Position |
|-------|----------|
| Statut | candidate / guidance |
| detailed / synthetic / absent | informatif |
| unavailable | **ne pas** inventer d’autorité |
| executionAuthority | **false** |
| Visibilité UI V3 | **à décider** (détail technique vs bandeau utilisateur) |

## O. États UI candidats

| État | Description |
|------|-------------|
| initial | workspace projet, pas encore de qualification |
| saisie | formulaire signaux / type |
| qualification en cours | loading |
| recommandation disponible | profil + rationale + disclosures |
| Critical proposé / bloqué | proposed · CTA V4 · pas d’activation |
| cycle déjà existant | conflit id / navigation |
| projet introuvable | PROJECT_NOT_FOUND process-local |
| conflit LPS | LPS_VERSION_CONFLICT |
| erreur de persistance | PERSISTENCE_FAILURE |
| CKC unavailable | guidance absente, qualify/create non bloqués par CKC |
| état local perdu | restart / hot reload |

## P. Erreurs et recovery

| Code | Comportement utilisateur attendu |
|------|----------------------------------|
| CYCLE_INVALID | corriger les champs ; message clair |
| CYCLE_ALREADY_EXISTS | afficher l’existant ou demander autre id |
| CYCLE_CRITICAL_JUSTIFICATION_REQUIRED | bloquer create ; saisir justification |
| PROJECT_NOT_FOUND | retour création / recommencer process-local |
| CKC_UNAVAILABLE | continuer sans autorité inventée ; disclosure |
| LPS_VERSION_CONFLICT | recharger LPS ; retenter lien actif si applicable |
| CONTEXT_STALE | rafraîchir projection workspace |
| STATE_CONFLICT | message borné ; pas de retry silencieux destructif |
| PERSISTENCE_FAILURE | état process-local ; proposer recommencer |

Aucune implémentation n’est spécifiée ici.

## Q. Scope

### Pourrait inclure (futur, si décisions favorables)

- surface UI sur workspace ;
- bridge Server Action → QualifyCycle (± CreateCycle) ;
- disclosures et bandeau ≠ décision ;
- états loading / error / Critical blocked ;
- tests boundaries + preuves captures.

### Hors scope V3

- IAM · décision Critical réelle · agent live · dashboard V5 · delivery/cutover · fermeture HARD/T-A6/B5/R1 · moteur LLM · Figma write · logique domaine React · création automatique · push/PR sans GO.

## R. Critères de succès (cycles suivants)

- profil recommandé compris ;
- justification / rationale lisible ;
- distinction recommandation / décision explicite ;
- aucun cycle créé sans action explicite **si** L2 retenu ;
- aucun Critical activé ;
- aucune fixture happy path ;
- aucune règle T-A2 dupliquée dans React ;
- anti-claims visibles ;
- preuves : tests unit/composant + captures runtime définies au delivery.

## S. Slicing (D-V3-08 = option 1 adoptée)

| Option | Contenu | Statut |
|--------|---------|--------|
| **S1 — V3.1 puis V3.2** | A: UI + Qualify read-only · B: Create + options LPS/épistémiques | **retenu** |
| **S2 — lot unique borné** | Qualify + Create explicite + disclosures | non retenu |
| **S3 — recadrage** | si type recommandé (V3-B) | non applicable (V3-A retenu) |

## T. Risques et réserves

1. Promesse « cycle recommandé » > contrat QualifyCycle.
2. Duplication de la méthode / scoring dans React.
3. Création implicite (L3).
4. Confusion `acknowledged` ≠ décision Morris.
5. Critical overclaim.
6. Volatilité process-local / singleton.
7. LPS conflict (R1) · B5 ouvert.
8. CKC candidate.
9. Absence de Figma V3 validé (D-VS-05 / D-V3-07).
10. Framing pack historique encore partiellement stale sur V2 (corrigé par ce cadrage / README).

## U. Decision pack Morris

### Decision record Morris

| Champ | Valeur |
|-------|--------|
| **Formulation réelle (Morris)** | « ok pour les différents choix, on continue et on avance » |
| **Date/heure/fuseau** | 2026-07-30 vers 18:46 CEST (+0200) |
| **Interprétation** | Acceptation explicite des recommandations du cadrage V3 (D-V3-01…08) |
| **Formulation normalisée (traçabilité)** | `GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION — D-V3-01=1 — D-V3-02=1 — D-V3-03=2 — D-V3-04=1 — D-V3-05=1 — D-V3-06=CONFIRM CRITICAL FAIL-CLOSED — D-V3-07=1 WITH FIGMA REASSESSMENT RESERVE — D-V3-08=1` |
| **Note** | La formulation normalisée trace la décision ; elle ne remplace pas la citation réelle ci-dessus. |

| ID | Option retenue | Conséquence | Réserve | Statut |
|----|----------------|-------------|---------|--------|
| D-V3-01 | **1** — type sélectionné + profil T-A2 | Promesse = sélection type + recommandation profil | — | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-02 | **1** — sélection explicite catalogue | Pas de recommandation auto du `cycleTypeId` | catalogue contrôlé, non inventé dans React | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-03 | **2** — CTA explicite de création | Pas de création automatique | création hors 1er incrément read-only | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-04 | **1** — pas de lien LPS actif au 1er incrément | `linkAsActiveCycle` hors V3.1 | réévaluer en V3.2+ | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-05 | **1** — reco non persistée | Pas d’EpistemicItem Recommendation au 1er incrément | réévaluer en V3.2+ | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-06 | **CONFIRM CRITICAL FAIL-CLOSED** | proposed · justification · pas d’activation/ack/gate | bascule V4 | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-07 | **1** + réserve Figma | Contrat Git temporaire | réévaluer Figma avant UI substantielle / fidélité | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-08 | **1** — slicing progressif | V3.1 read-only puis V3.2 create explicite | — | `DECIDED — ADOPTED BY MORRIS` |

### D-V3-01 — Promesse fonctionnelle

Options initiales :

1. Cycle type **sélectionné** + profil **recommandé** (V3-A).
2. Type de cycle **et** profil **recommandés** (V3-B).
3. Autre.

Recommandation historique (cadrage) : option **1**.

**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
Conséquence : l’utilisateur sélectionne le type ; T-A2 recommande le profil.

### D-V3-02 — Source du cycleTypeId

Options initiales :

1. Sélection explicite utilisateur.
2. Règles déterministes à concevoir.
3. Agent / LLM live.
4. Autre.

Recommandation historique : option **1** (3 hors trajectoire).

**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
Conséquence : catalogue contrôlé · aucune recommandation automatique du type.

### D-V3-03 — Mutation

Options initiales :

1. Qualification read-only.
2. CTA explicite de création.
3. Création automatique.

Recommandation historique : option **2** · **3 non recommandée**.

**Décision : option 2 — DECIDED — ADOPTED BY MORRIS.**
Conséquence : création uniquement via CTA ; jamais automatique. Le 1er incrément (V3.1) reste read-only ; la création relève du 2e incrément (V3.2).

### D-V3-04 — Liaison au LPS

Options initiales :

1. Ne pas lier comme actif dans V3.
2. Lier uniquement après CTA explicite.
3. Autre.

Recommandation historique : option **1** au premier incrément.

**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
Conséquence : pas de `linkAsActiveCycle` dans V3.1.

### D-V3-05 — Épistémologie

Options initiales :

1. Recommandation calculée **non persistée**.
2. `Recommendation` EpistemicItem persisté après action explicite.
3. Autre.

Recommandation historique : option **1** au premier incrément.

**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
Conséquence : pas de persistance EpistemicItem Recommendation en V3.1.

### D-V3-06 — Critical

Contrainte T-A2 réaffirmée : `proposed` · justification obligatoire · aucune activation / ack / gate auto · bascule V4.

**Décision : CONFIRM CRITICAL FAIL-CLOSED — DECIDED — ADOPTED BY MORRIS.**

### D-V3-07 — UX / Figma

Options initiales :

1. Contrat Git temporaire.
2. Cycle Figma dédié avant delivery.
3. Autre.

Recommandation historique : option **1** pour démarrer.

**Décision : option 1 WITH FIGMA REASSESSMENT RESERVE — DECIDED — ADOPTED BY MORRIS.**
Conséquence : contrat Git temporaire · **D-VS-05 reste NOT DECIDED / NOT CONSUMED** · réévaluer un cycle Figma avant toute UI substantielle ou revendication de fidélité visuelle.

### D-V3-08 — Slicing

Options initiales :

1. V3-A puis V3-B (S1) — read-only puis création.
2. Lot unique borné (S2).
3. Recadrage (S3).

Recommandation historique : option **1**.

**Décision : option 1 — DECIDED — ADOPTED BY MORRIS.**
Conséquence :

- **V3.1** — conception puis delivery (gates distincts) : qualification **read-only** (type sélectionné + profil recommandé).
- **V3.2** — création explicite CycleInstance (± options LPS/épistémiques ultérieures si nouveaux GO).

## V. Recommandation ChatGPT/Cursor — **ARBITRÉE**

La recommandation de cadrage ci-dessous a été **présentée** puis **acceptée** par Morris (formulation réelle du Decision record). Elle n’est plus « à arbitrer » ; la **source de décision** est Morris, pas la recommandation elle-même.

Recommandation historique (consommée) :

1. D-V3-01/02 → Option V3-A.
2. D-V3-03 → L2 (CTA explicite ; rejeter L3).
3. D-V3-04 → L4a au 1er incrément.
4. D-V3-05 → L5a au 1er incrément.
5. D-V3-06 → Critical fail-closed.
6. D-V3-07 → contrat Git + réserve Figma.
7. D-V3-08 → S1 (read-only puis create).

**Réserves maintenues (non levées par l’arbitrage) :**

- réévaluation Figma avant UI substantielle (D-V3-07) ;
- D-VS-05 non consommée ;
- B5 / R1 ouverts ;
- volatilité process-local ;
- pas d’implémentation sans GO delivery distinct.

## W. Transition candidate

| Étape | Statut |
|-------|--------|
| Arbitrage D-V3 | **fait** |
| Prochain cycle candidat | **Conception fonctionnelle V3.1** — profile qualification UI · type sélectionné · profil T-A2 · **read-only** · pas de CreateCycle |
| Architecture moteur type recommandé | **non requise** (D-V3-01/02 = sélection explicite) |
| Delivery / implémentation | **non autorisée** tant que GO conception puis GO delivery absents |
| V3.2 CreateCycle explicite | après V3.1 · GO distinct |

Gate candidat suivant (non ouvert) :

`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`

## X. Anti-claims

- Cadrage / arbitrage ≠ conception validée ≠ delivery autorisé
- Recommandation historique ≠ source de décision (Morris décide)
- Profil recommandé ≠ type de cycle recommandé
- `acknowledged` ≠ autorité Morris
- Cycle créé ≠ cycle actif si non lié
- CKC ≠ autorité d’exécution
- V3 framing ≠ V3 implementation
- Tests futurs ≠ PRODUCT READY / RUN READY
- Pas IAM / agent / delivery / cutover / HARD CLOSED / T-A6 COMPLETE

## Y. Verdict et prochain gate candidat

**V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`

---

# FULL FILE (created): 13-v3-1-profile-qualification-functional-design.md

# 13 — V3.1 Profile Qualification UI — Conception fonctionnelle

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 19:09:00 CEST (+0200) |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Profondeur** | Standard |
| **GO Morris consommé** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE` |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC** | `pilots/02-conception-fonctionnelle.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
| **Document d’arbitrage hérité** | `12-v3-cycle-recommendation-cadrage.md` (**lecture seule** — non modifié) |
| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE WITH RESERVE — CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY — IMPLEMENTATION NOT AUTHORIZED` |
| **Commit / push / PR projet** | **non** |
| **Code / tests / Figma** | **non modifiés** |

## B. Décisions d’entrée (D-V3)

| ID | Décision | Conséquence exacte sur V3.1 |
|----|----------|------------------------------|
| D-V3-01 = 1 | Type sélectionné · profil T-A2 | L’UI exige une sélection de type ; QualifyCycle produit uniquement le profil |
| D-V3-02 = 1 | Catalogue contrôlé | Aucun moteur de recommandation du type ; pas de saisie libre |
| D-V3-03 = 2 | CTA create (cible globale) | **Hors V3.1** : aucun CreateCycle, aucun CTA create actif |
| D-V3-04 = 1 | Pas de lien LPS actif | Aucun `linkAsActiveCycle` |
| D-V3-05 = 1 | Reco non persistée | Aucun EpistemicItem Recommendation |
| D-V3-06 | Critical fail-closed | Résultat Critical informatif ; pas d’activation / ack / gate |
| D-V3-07 = 1 + réserve | Contrat Git temporaire | Aucune frame Figma baseline ; réévaluation avant UI substantielle |
| D-V3-08 = 1 | Slicing progressif | V3.1 = read-only · V3.2 = create explicite |

**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · **R-V3.1-CATALOG-01** (catalogue — bloquante delivery).

## C. Objectif fonctionnel et valeur

### Problème

Après Create Project et Project Workspace, l’opérateur local doit préparer un cycle en comprenant **quel profil de contrôle** T-A2 recommande, sans confondre cela avec une décision Morris ni avec la création d’un CycleInstance.

### Valeur

- Rendre **observable** la qualification de profil à partir de réponses explicites.
- Afficher une **justification compréhensible** et des **réserves honnêtes**.
- Préparer V3.2 (create) sans anticiper la mutation.

### Résultat observable

Une surface où l’utilisateur sélectionne un type, répond aux six signaux, lance la qualification, et lit un profil Light / Standard / Critical avec explications — **sans** création, lien LPS, ni persistance épistémique.

### Ce que V3.1 ne fait pas

CreateCycle · linkAsActiveCycle · EpistemicItem · décision Morris · recommandation auto du type · requestedProfile · agent/LLM · IAM · Figma write · delivery.

## D. Usager, rôle et autorité

| Élément | Position |
|---------|----------|
| Usager | Morris local — opérateur du démonstrateur Studio |
| Rôle | Lecture contexte projet + qualification read-only |
| IAM | **aucune** |
| Autorité Critical réelle | **absente** |
| Stakeholder inventé | **interdit** |

## E. Glossaire fonctionnel

| Terme | Définition V3.1 |
|-------|-----------------|
| Projet | Agrégat Project process-local créé en V2 |
| LPS | Living Project State — contexte read-only ; non muté |
| Type de cycle | Entrée catalogue contrôlée (identité stable + label) |
| cycleTypeId | Identifiant technique de l’entrée catalogue |
| Signal | Réponse Oui/Non explicite mappée vers T-A2 |
| Profil recommandé | Light \| Standard \| Critical — sortie QualifyCycle |
| Rationale | Code interne T-A2 — **non affiché brut** ; mappé en texte utilisateur |
| Recommandation | Sortie QualifyCycle · `isMorrisDecision=false` |
| Décision Morris | Acte humain (V4) — hors V3.1 |
| CycleInstance | Entité créée par CreateCycle — **absente** de V3.1 |

## F. Périmètre fonctionnel

### Inclus

- Entrée depuis Project Workspace.
- Sélection type (catalogue contrôlé).
- Six signaux explicites.
- Appel fonctionnel à QualifyCycle (contrat T-A2).
- Affichage profil + justification + disclosures.
- États, erreurs read-only, critères d’acceptation, a11y, plan de preuves.

### Hors périmètre

CreateCycle · CTA create · LPS link · EpistemicItem · UpdateEpistemicState · V4 · V3.2 · moteur type · scoring · LLM · Figma · architecture technique · code.

### Préconditions

- Un Project process-local accessible via `projectId`.
- Runtime capable de lire le projet (existant V2).
- Catalogue contrôlé **résolu** pour delivery (voir réserve).
- Contrat T-A2 QualifyCycle inchangé.

### Résultat de sortie

Projection volatile de recommandation de profil + contexte sélectionné — **non persistée**.

## G. Position dans le parcours

**Départ :** `/studio/projects/[id]` (Project Workspace V2-A3).

**Entrée recommandée (fonctionnelle, non décision d’architecture) :**

- CTA / lien sémantique **« Préparer un cycle »** depuis la zone d’actions du workspace (aujourd’hui : lien « Créer un autre projet » uniquement).
- Placement candidat le plus simple : **même namespace** `/studio/projects/[id]/…` (section ou sous-route) — *recommandation de placement*, pas choix technique figé.

**Retour :** lien « Retour à l’espace projet » vers `/studio/projects/[id]`.

**Interdit :** CTA CreateCycle, activation, décision Morris, redirection auto V4.

## H. Parcours nominal

1. Consulter le Project Workspace (projet + LPS + disclosures runtime).
2. Ouvrir « Préparer un cycle ».
3. Voir le contexte projet (objectif, résumé) en **lecture seule**, avec mention qu’il **n’influence pas** l’algorithme de qualification actuel.
4. Sélectionner un type de cycle dans le catalogue (obligatoire, non libre).
5. Répondre **explicitement** Oui ou Non aux **six** signaux (aucun précoché).
6. Activer « Qualifier le profil » (désactivé ou refusé si incomplet).
7. Obtenir le profil recommandé + explication + signaux contributeurs + disclosures.
8. Modifier les réponses et re-qualifier si besoin.
9. Revenir au workspace.
10. **Aucun** CycleInstance créé · **aucune** mutation LPS · **aucune** persistance épistémique.

## I. Contrat du catalogue des types de cycle

### Exigences fonctionnelles

| Règle | Position |
|-------|----------|
| Sélection | **Obligatoire** avant qualification |
| Saisie libre | **Interdite** |
| Champs par entrée | `cycleTypeId` stable · label · description courte |
| Recommandation du type | **Interdite** |
| Influence sur le profil | **Aucune** (le type ne détermine pas Light/Standard/Critical) |
| Capitalization | Si `cycleTypeId = cyc:capitalization`, l’indicateur `capitalizationViaCycleTypeId` peut être vrai — **ce n’est pas un profil** |

### Comportements

| Situation | Comportement |
|-----------|--------------|
| Catalogue en chargement | État dédié · pas de qualification |
| Catalogue indisponible / vide | État bloquant · message clair · pas de fallback inventé |
| ID inconnu / invalide | Refus · message · pas de QualifyCycle |
| Refresh | Resélection requise si état volatile perdu |

### Investigation repo (constat)

| Source | Contenu | Statut pour V3.1 runtime |
|--------|---------|--------------------------|
| `CAPITALIZATION_CYCLE_TYPE_ID = cyc:capitalization` | Un seul ID OA runtime explicite | Partiel |
| `SFIA_CYCLE_LABELS` (harness Increment C) | 15 labels slugs (`cadrage`, …) **sans** préfixe `cyc:` | Labels UI hors contrat OA — **non catalogue runtime** |
| Méthode — 15 cycles (`02-fifteen-cycles-synthetic-map.md`) | Noms canoniques 1…15 | Documentaire méthode — **non IDs runtime** |
| Schema CycleType modélisé | Entité citée ; **pas** de registry runtime des 15 | Absent |
| D1 intake `proposedCycleType` | Valeurs ad hoc (ex. `FRAMING`) | Stack legacy — **hors** vertical-slice |

### Réserve bloquante

**R-V3.1-CATALOG-01 — Source runtime du catalogue `cycleTypeId` absente / non canonique.**

- Le delivery V3.1 **ne peut pas** inventer ni coder des IDs dans React.
- Un mapping contrôlé (source unique validée par Morris) est **requis avant delivery**.
- Les labels méthode / harness peuvent informer le mapping futur ; ils ne le remplacent pas.

## J. Contrat des signaux

Tous les signaux : réponse **Oui / Non obligatoire** · **aucune** valeur précochée · absence ≠ `false`.

| Signal T-A2 | Libellé utilisateur | Aide contextuelle | Mapping |
|-------------|---------------------|-------------------|---------|
| `structuralChange` | Changement structurel | Ce travail modifie-t-il durablement la structure du produit, de la méthode ou du dépôt ? | `true`/`false` explicite |
| `securityImpact` | Impact sécurité | Ce travail touche-t-il à la sécurité, aux secrets, aux contrôles d’accès ou à une surface d’attaque ? | idem |
| `architectureImpact` | Impact architecture | Ce travail engage-t-il un choix ou une modification d’architecture significative ? | idem |
| `dataImpact` | Impact données | Ce travail affecte-t-il des données sensibles, des migrations ou des pertes potentielles ? | idem |
| `irreversible` | Caractère difficilement réversible | Une erreur serait-elle difficile ou coûteuse à annuler ? | idem |
| `lowRiskBounded` | Risque faible et borné | Le périmètre est-il clairement limité et le risque faible **en l’absence** de signaux critiques ? | idem |

### Règles UI

1. Les six réponses doivent être présentes avant QualifyCycle.
2. Une réponse absente **bloque** la qualification (pas d’envoi de `undefined` assimilé à false).
3. Les contradictions restent visibles (ex. Critical + lowRiskBounded) ; le moteur applique la priorité Critical.
4. Aucun score implicite depuis objectif / scope / contexte.

## K. Données de contexte

| Donnée | Usage V3.1 |
|--------|------------|
| `projectId` | Précondition · navigation |
| Objectif projet | Affichage read-only · **n’influence pas** QualifyCycle actuel |
| Scope / contexte résumé | Affichage read-only · idem |
| LPS (id, version) | Affichage contextuel · **non muté** |
| `requestedProfile` | **Non exposé** |
| Justification Critical | **Non collectée / non persistée** ; info future V3.2 uniquement |
| `cycleTypeId` | Sélection catalogue · passé à QualifyCycle (hint capitalization) |

## L. Règles de qualification (contrat T-A2 exact)

Source : `recommendProfile` / `hasCriticalSignals` (`lib/oa/cycle/domain/invariants.ts`).

1. Si **un** parmi `structuralChange`, `securityImpact`, `architectureImpact`, `dataImpact`, `irreversible` vaut `true` → profil **Critical** · rationale `critical_signal_present`.
2. Sinon, si `lowRiskBounded === true` → profil **Light** · rationale `low_risk_bounded_no_critical_signals`.
3. Sinon → profil **Standard** · rationale `default_standard` (parcours V3.1 sans `requestedProfile`).
4. **Critical gagne toujours** sur `lowRiskBounded` (règle 1 avant règle 2).
5. `cycleTypeId` **ne détermine pas** le profil.
6. `capitalizationViaCycleTypeId` = true seulement si `cycleTypeId === cyc:capitalization` — indicateur, **pas** un profil Capitalization.
7. `isMorrisDecision` est **toujours** `false`.
8. Aucun gate Morris consommé.
9. Rationales hors parcours V3.1 (car `requestedProfile` non exposé) : `default_standard_light_requires_low_risk_bounded`, `requested_critical_without_signals`.

## M. Sortie fonctionnelle

### Afficher

- Type sélectionné (label + id).
- Profil recommandé (texte : Light / Standard / Critical — compréhensible **sans** couleur).
- Explication utilisateur (mapping N).
- Liste des signaux Oui ayant conduit au résultat (et mention des Non si utile à la compréhension).
- Disclosure : **« Ceci est une recommandation, pas une décision Morris. »**
- Disclosure : résultat **process-local / non persisté** · un refresh peut le perdre.
- Si Critical : indication fail-closed + « une justification sera requise lors d’une future création (V3.2) » — **sans** formulaire de justification.
- Prochaine étape **informative** uniquement (ex. « La création explicite du cycle relèvera d’un prochain incrément »).

### Ne pas afficher

- Codes rationale bruts.
- Statut `acknowledged` / `proposed` de CycleInstance (aucune instance).
- Faux score / pourcentage de confiance.
- CTA CreateCycle / activation / décision.
- Claim d’autorité humaine ou IAM.

## N. Mapping des rationales → contenus utilisateurs

| Code T-A2 | Texte utilisateur (V3.1) |
|-----------|-------------------------|
| `critical_signal_present` | « Au moins un signal de criticité est positif. Le profil recommandé est Critical. Aucune activation n’est effectuée. » |
| `low_risk_bounded_no_critical_signals` | « Aucun signal de criticité n’est positif et le risque est déclaré faible et borné. Le profil recommandé est Light. » |
| `default_standard` | « Aucun signal de criticité n’est positif et le risque n’est pas déclaré faible et borné. Le profil recommandé est Standard. » |
| `default_standard_light_requires_low_risk_bounded` | Hors parcours V3.1 (`requestedProfile` non exposé). |
| `requested_critical_without_signals` | Hors parcours V3.1. |

## O. États fonctionnels

| État | Description |
|------|-------------|
| initial | Surface ouverte · pas encore de saisie |
| contexte projet chargé | Project/LPS affichés |
| catalogue en chargement | Attente catalogue |
| catalogue indisponible | Bloqué · pas de qualify |
| formulaire incomplet | Type et/ou signaux manquants · action refuse |
| prêt à qualifier | Type + 6 réponses · CTA actif |
| qualification en cours | Attente résultat |
| résultat Light | Affichage Light + disclosures |
| résultat Standard | Affichage Standard + disclosures |
| résultat Critical | Affichage Critical fail-closed + info V3.2 |
| erreur technique | Bridge/runtime/qualification inattendue |
| projet introuvable | Contexte perdu · recovery vers création |
| état local perdu après refresh | Message volatilité · reprise |
| retour / nouvelle qualification | Re-saisie ou modification puis re-qualify |

## P. Critical

- Résultat Critical **clairement identifiable** (texte + structure, pas seulement couleur).
- QualifyCycle **non bloqué** par Critical.
- Aucune création · aucune activation · aucun acknowledgement · aucun gate.
- Information : justification **requise à la création future** (V3.2).
- Aucune autorité simulée · aucune redirection automatique V4.
- Fail-closed respecté.

## Q. Exceptions et recovery V3.1

### Pertinentes (read-only)

| Situation | Comportement |
|-----------|--------------|
| Projet introuvable / contexte perdu | Message + CTA retour création projet |
| Catalogue indisponible | Bloquer qualify · message · pas d’IDs inventés |
| cycleTypeId invalide / inconnu | Refus · corriger la sélection |
| Formulaire incomplet | CTA désactivé ou refus explicite + résumé d’erreurs |
| Runtime / bridge QualifyCycle indisponible | Erreur technique · retry · disclosure process-local |
| Qualification inattendue | Message borné · pas de mutation |
| Refresh / hot reload | Perte possible du résultat · reprendre |

### Explicitement **non applicables** en V3.1

- `CYCLE_ALREADY_EXISTS`
- `LPS_VERSION_CONFLICT`
- `PERSISTENCE_FAILURE` liée à CreateCycle
- Erreurs d’activation / lien LPS
- Erreurs épistémiques de persistance (`EPISTEMIC_*`)
- `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED` (création uniquement)

## R. Permissions et visibilité

Opérateur local unique · aucune gestion de rôles · aucune authentification · aucune autorisation Critical · aucun masquage présenté comme sécurité.

## S. Intégrations fonctionnelles (quoi, pas comment)

| Intégration | Rôle |
|-------------|------|
| Project Workspace | Fournit le contexte projet / LPS read-only |
| Catalogue contrôlé | Fournit type (id, label, description) |
| T-A2 QualifyCycle | Calcule la recommandation de profil |
| UI | Affiche une projection volatile |

**Aucune** mutation projet, cycle, trajectoire, LPS ou épistémique.

**Non défini ici :** Server Action précise · classes · fichiers · protocole · stockage.

## T. Accessibilité

1. Navigation clavier complète de tous les contrôles.
2. Ordre de focus cohérent : contexte → type → signaux → CTA → résultat.
3. Groupe de questions signaux correctement labellisé (`fieldset` / équivalent sémantique).
4. Chaque Oui / Non accessible **sans dépendre de la couleur** (texte visible).
5. Erreurs associées aux champs concernés.
6. Résumé d’erreur annoncé (région appropriée).
7. Changement de résultat annoncé via région live appropriée.
8. Titres hiérarchisés (h1/h2/h3 cohérents avec StudioShell).
9. Texte du profil compréhensible sans badge coloré.
10. État Critical compréhensible sans couleur.
11. CTA « Qualifier le profil » — libellé explicite.
12. Aucun verdict de conformité a11y sans tests futurs.

## U. Critères d’acceptation (observables)

| ID | Critère |
|----|---------|
| CA-01 | Depuis un projet existant, l’opérateur ouvre la surface de qualification. |
| CA-02 | La sélection d’un type de cycle est obligatoire ; aucune saisie libre. |
| CA-03 | Les six signaux exigent chacun une réponse Oui/Non explicite. |
| CA-04 | Si type ou signal manquant, l’action de qualification est désactivée ou refusée avec message. |
| CA-05 | `structuralChange=Oui` (seuls les autres Non) → profil Critical. |
| CA-06 | `securityImpact=Oui` → Critical. |
| CA-07 | `architectureImpact=Oui` → Critical. |
| CA-08 | `dataImpact=Oui` → Critical. |
| CA-09 | `irreversible=Oui` → Critical. |
| CA-10 | Tous Critical Non + `lowRiskBounded=Oui` → Light. |
| CA-11 | Tous Non (y compris lowRiskBounded) → Standard. |
| CA-12 | Au moins un Critical Oui + `lowRiskBounded=Oui` → Critical (Critical gagne). |
| CA-13 | Le type sélectionné (label) est visible dans le résultat. |
| CA-14 | Profil + justification utilisateur visibles. |
| CA-15 | Aucun code rationale brut visible. |
| CA-16 | Disclosure « recommandation ≠ décision Morris » visible. |
| CA-17 | Aucune création de CycleInstance observable. |
| CA-18 | Aucune persistance EpistemicItem Recommendation observable. |
| CA-19 | Aucun lien LPS / `linkAsActiveCycle` observable. |
| CA-20 | Aucun contrôle `requestedProfile` exposé. |
| CA-21 | Après refresh, le résultat peut être perdu ; message/état cohérent. |
| CA-22 | Catalogue indisponible : qualification impossible + message clair. |
| CA-23 | Parcours clavier complet sans piège au clavier. |

## V. Scénarios fonctionnels

| ID | Scénario | Attendu |
|----|----------|---------|
| S-01 | Nominal Light | lowRiskBounded Oui · 5 Critical Non → Light |
| S-02 | Nominal Standard | 6 Non → Standard |
| S-03 | Critical structural | structuralChange Oui → Critical |
| S-04 | Critical security | securityImpact Oui → Critical |
| S-05 | Critical architecture | architectureImpact Oui → Critical |
| S-06 | Critical data | dataImpact Oui → Critical |
| S-07 | Critical irreversible | irreversible Oui → Critical |
| S-08 | Contradiction Critical + lowRiskBounded | Critical |
| S-09 | Formulaire incomplet | Refus · pas d’appel qualify |
| S-10 | Catalogue absent | État bloquant |
| S-11 | Project missing | Recovery création |
| S-12 | Retry après erreur technique | Reprise sans mutation |
| S-13 | Nouvelle qualification après modification | Nouveau résultat cohérent |

## W. Plan de preuves futur

- Tests unitaires des règles (déjà T-A2) + mapping UI textes.
- Tests composant états / formulaire / a11y.
- Tests boundary : **aucun** CreateCycle · **aucune** mutation LPS/épistémique.
- Captures desktop + responsive.
- **Aucune preuve exécutée dans ce cycle documentaire.**

## X. Contrat UX temporaire et réserve Figma

### Hiérarchie fonctionnelle des zones

1. Bandeau disclosures runtime (réutiliser le langage V2).
2. Titre « Préparer un cycle » + rappel read-only.
3. Contexte projet (compact).
4. Sélection type.
5. Signaux (groupe unique).
6. CTA qualification.
7. Zone résultat + réserves.
8. Navigation retour.

### Priorités de contenu

Profil + type + justification + disclosure décision > détails techniques.

### Figma

- Source design : **contrat Git temporaire**.
- Aucune frame V3 baseline.
- D-VS-05 **NOT CONSUMED**.
- Réévaluer un cycle UX/UI + Figma **avant** delivery si la surface est jugée substantielle ou si une fidélité visuelle est revendiquée.
- Recommandation non décisionnelle : un cycle UX/UI dédié est **probable** avant un delivery UI dense ; **Morris décide**.

## Y. Risques et réserves

| ID | Risque / réserve | Sévérité |
|----|------------------|----------|
| R-V3.1-CATALOG-01 | Source runtime catalogue absente | **Bloquante delivery** |
| R-V3.1-02 | Duplication méthode / scoring dans React | Haute — interdite |
| R-V3.1-03 | Exposition codes rationale bruts | Moyenne |
| R-V3.1-04 | Fausse influence objectif/scope | Haute |
| R-V3.1-05 | `undefined` assimilé à false | Haute — UI doit bloquer |
| R-V3.1-06 | Critical overclaim / autorité simulée | Haute |
| R-V3.1-07 | `requestedProfile` prématuré | Moyenne |
| R-V3.1-08 | Confusion recommandation / décision | Haute |
| R-V3.1-09 | Volatilité process-local | Acceptée · disclosure |
| R-V3.1-10 | D-VS-05 / Figma | Maintenue |
| R-V3.1-11 | B5 / R1 | Hors périmètre |
| R-V3.1-12 | Absence de preuve visuelle ce cycle | Acceptée |

## Z. Slicing et transition

| Étape | Statut |
|-------|--------|
| V3 cadrage + arbitrage | Terminé (`12`) |
| V3.1 conception fonctionnelle | **Ce cycle** |
| V3.1 delivery read-only | **Non ouvert** — décision Morris + résolution catalogue |
| V3.2 CreateCycle explicite | Non ouvert |
| V4 décision Morris | Non ouvert |

Aucun cycle suivant ouvert automatiquement.

## AA. Anti-claims

- Conception fonctionnelle ≠ implémentation.
- Profil recommandé ≠ type de cycle recommandé automatiquement.
- Recommandation ≠ décision Morris.
- Read-only ≠ CycleInstance créé.
- Résultat Critical ≠ autorisation.
- Contrat Git ≠ Figma validé.
- Tests planifiés ≠ tests exécutés.
- Aucun PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

## AB. Verdict

**V3.1 FUNCTIONAL DESIGN COMPLETE WITH RESERVE — CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO DELIVERY SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 QUALIFYCYCLE READ-ONLY — NO CREATECYCLE — NO LPS LINK — NO EPISTEMIC PERSISTENCE — CONTRACT GIT`

**Précondition delivery :** résolution de **R-V3.1-CATALOG-01** (source / mapping contrôlé validé par Morris) · réévaluation Figma selon D-V3-07.

---

# FULL FILE (final): README.md

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2 ON MAIN — V3 ARBITRATION COMPLETE — V3.1 FUNCTIONAL DESIGN COMPLETE WITH CATALOG RESERVE — IMPLEMENTATION NOT AUTHORIZED` |
| **Date** | 2026-07-30 19:09:00 CEST (+0200) |
| **Cycle courant** | 2 — Conception fonctionnelle V3.1 Profile Qualification UI |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Gate courant** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 …` **consommé** |
| **Branche cadrage / conception** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
| **Code applicatif (ce cycle)** | **aucune modification** |
| **Framing historique** | docs `01`–`12` · D-VS-01→04 inchangées · D-VS-05 non consommée · doc `12` **non modifié** ce cycle |

## Objectif

Cadrer le premier parcours **réellement visible et compréhensible** :

**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**

en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

## Synthèse d’état (post V2-A3 / V3.1 design)

| Lot | État |
|-----|------|
| V1 — composition Project / LPS | intégré sur `main` |
| V2-A1 — runtime bridge server-only | intégré · create/get Project |
| V2-A2 — Create Project UI | intégré · `/studio/projects/new` |
| V2-A3 — Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 |
| V3 — Cycle Recommendation | cadrage + arbitrage D-V3 **enregistrés** (`12`) |
| **V3.1 — Profile Qualification UI** | **conception fonctionnelle complète** (`13`) · **delivery non autorisé** · réserve catalogue |
| V3.2 — CreateCycle explicite | non autorisé |
| V4 / V5 / V6 | non autorisés |

**Décisions V3 (synthèse) :** type sélectionné · profil T-A2 · CTA create en V3.2 · pas LPS/épistémique au 1er incrément · Critical fail-closed · contrat Git + réserve Figma · slicing V3.1 read-only → V3.2 create. Détail : `12`.

**V3.1 design :** surface read-only depuis le workspace · six signaux explicites · QualifyCycle · aucun CreateCycle. Détail : `13`. **R-V3.1-CATALOG-01** bloque le delivery tant que la source runtime du catalogue n’est pas validée.

### Contexte UI historique (inchangé)

Trois stacks UI coexistent et **ne sont pas unifiées** :

1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).

Le cœur Option A (`lib/oa/**`) reste la source métier. Le vertical-slice runtime expose aujourd’hui **create/get Project** uniquement — pas Qualify/Create cycle.

## Scope / hors scope

**Dans le scope (cible produit local borné)** : création Project/LPS réelle · doctrine T-A0 · qualification cycle T-A2 · décision locale T-A3 honnête · dashboard readiness T-A6/T-A7 · historique borné F13.4.

**Hors scope** : IAM · Critical ack réel · agent/shell Cursor réel · harness BeB comme happy path · persistance produit · API HTTP obligatoire · delivery/cutover · fermeture HARD/T-A6/B5/R1/R-M01 · T-A7 COMPLETE · nouveau design system.

## Parcours cible (résumé)

1. Arrivée — disclosure mode local · CTA Créer un projet
2. Création — champs minimaux → T-A0+T-A1
3. Fiche projet — LPS, cycle, blockers
4. Recommandation — T-A2 (≠ décision) — **V3.1 conception ✓ · delivery ✗**
5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
6. Readiness dashboard — anti-claims honnêtes
7. Historique borné

## Architecture (résumé)

```text
UI (StudioShell + screens)
  → VerticalSliceFacade (application composition)
    → ports T-A0…T-A7 use cases
      → adapters mémoire OA (+ audit SQLite optionnel)
        → UI projections read-only
```

Aucun composant React ne décide Critical / HARD closed / preuve suffisante / autorité / gate.

## Figma

| Item | Valeur |
|------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
| Page listée | `0:1` — **UX-B — P0** |
| Écriture Figma ce cycle | **non exécutée** |
| Contrat visuel | **Git** — voir `05` et `13` §X |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED — REASSESS BEFORE SUBSTANTIAL UI` |

## Backlog recommandé

V1 Composition → V2 Create UI (A1/A2/A3) → V3 Recommendation (arbitrage ✓) → **V3.1 Profile Qualification (design ✓ · delivery ✗ · réserve catalogue)** → V3.2 CreateCycle → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

## Décisions Morris

### D-VS (historique)

| ID | Statut | Décision |
|----|--------|----------|
| D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
| D-VS-02 | `DECIDED — ADOPTED BY MORRIS` | mémoire OA + audit SQLite local optionnel |
| D-VS-03 | `DECIDED — ADOPTED BY MORRIS` | fixtures hors happy path |
| D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

### D-V3 (Lot Cycle Recommendation) — adoptées 2026-07-30

| ID | Option | Statut |
|----|--------|--------|
| D-V3-01 | 1 — type sélectionné · profil T-A2 | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-02 | 1 — cycleTypeId sélection explicite | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-03 | 2 — CTA create explicite | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-04 | 1 — pas de lien LPS actif (1er incrément) | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-05 | 1 — reco non persistée (1er incrément) | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-06 | CONFIRM CRITICAL FAIL-CLOSED | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-07 | 1 + réserve réévaluation Figma | `DECIDED — ADOPTED BY MORRIS` |
| D-V3-08 | 1 — V3.1 read-only puis V3.2 create | `DECIDED — ADOPTED BY MORRIS` |

Source réelle Morris (arbitrage) : « ok pour les différents choix, on continue et on avance » (2026-07-30 ~18:46 CEST). Record : `12`.

## Statut d’exécution V1 → V3.1

V1–V2 intégrés sur `main`. V3 : cadrage + arbitrage (`12`). V3.1 : **conception fonctionnelle** (`13`) — aucun bridge QualifyCycle, aucune UI, aucun CreateCycle. **Implémentation non autorisée.** Delivery V3.1 conditionné à la résolution du catalogue et à un GO delivery distinct.

## Anti-claims

- Framing / conception ≠ produit ready ≠ MVP validé
- Conception fonctionnelle ≠ delivery autorisé
- UI POC ≠ cœur OA branché
- Décision locale ≠ autorité IAM
- Local SQLite ≠ persistance produit
- Recommandation ≠ décision Morris
- Arbitrage ≠ autorisation d’implémentation
- HARD/T-A6 restent ouverts

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01` | Inventaire UI + cœur |
| `02` | Journey et scope |
| `03` | Mapping T-A0→T-A7 ↔ UI |
| `04` | IA & navigation |
| `05` | Contrat visuel & Figma |
| `06` | Données locales & composition |
| `07` | A11y / responsive / erreurs |
| `08` | Backlog & slicing |
| `09` | Plan validation / preuves |
| `10` | Risques & decision pack Morris |
| `11` | Exécution locale V1 — Project core composition |
| `12` | Lot V3 Cycle Recommendation — Cadrage + arbitrage |
| `13` | **V3.1 Profile Qualification UI — Conception fonctionnelle** |

## Gate candidat suivant

`GO DELIVERY SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 QUALIFYCYCLE READ-ONLY — NO CREATECYCLE — NO LPS LINK — NO EPISTEMIC PERSISTENCE — CONTRACT GIT`

**Précondition :** résolution R-V3.1-CATALOG-01. **Aucun delivery automatique.** Aucun gate automatique.

## Verdict

`V3.1 FUNCTIONAL DESIGN COMPLETE WITH RESERVE — CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY — IMPLEMENTATION NOT AUTHORIZED`

---

# FULL FILE (final): 08-implementation-backlog-and-slicing.md

# 08 — Implementation backlog and slicing

## Stratégie de livraison (recommandation, non décision)

**Plusieurs PR** (lots V1…V5), chacune mergeable ; commits atomiques 1–3.
Branche framing docs séparée. Pas de big-bang unique.

## Lot V1 — Composition locale Project

**Statut** : `INTEGRATED ON MAIN` (fondation visible-slice). Voir `11-v1-local-project-core-composition.md`.

| Item | Contenu |
|------|---------|
| Objectif | Facade + CreateProject/LPS + doctrine resolve + tests |
| Dépendances | T-A0/T-A1 memory factories |
| Dette | facade initiale |

## Lot V2 — Create Project + Workspace (A1 / A2 / A3)

**Statut** : `INTEGRATED ON MAIN` — V2-A1 runtime bridge · V2-A2 Create UI · V2-A3 Workspace UI (PR #295 @ `3e8a437…`).

| Item | Contenu |
|------|---------|
| Objectif | Server Actions create/get · `/studio/projects/new` · `/studio/projects/[id]` |
| Hors lot | recommendation · decision · dashboard |

## Lot V3 — Cycle Recommendation (cadrage + arbitrage)

**Statut** : `CADRAGE + ARBITRATION COMPLETE` — voir [`12`](./12-v3-cycle-recommendation-cadrage.md).

Décisions D-V3-01…08 adoptées (2026-07-30). Aucun delivery ouvert à ce stade.

## Lot V3.1 — Profile Qualification UI (read-only)

**Statut** : `FUNCTIONAL DESIGN COMPLETE WITH RESERVE — IMPLEMENTATION / DELIVERY NOT AUTHORIZED`.

Conception : [`13-v3-1-profile-qualification-functional-design.md`](./13-v3-1-profile-qualification-functional-design.md).

| Item | Contenu |
|------|---------|
| Objectif | Surface « Préparer un cycle » · type sélectionné · six signaux · QualifyCycle · profil + disclosures |
| Invariants | **Aucun** CreateCycle · **aucun** lien LPS · **aucune** persistance épistémique · **aucun** requestedProfile |
| Critical | Affichage fail-closed · pas d’activation · justification informée pour V3.2 uniquement |
| Catalogue | Contrôlé · pas de saisie libre · **R-V3.1-CATALOG-01 bloquante delivery** |
| Figma | Contrat Git temporaire · D-VS-05 non consommée · réévaluation avant UI substantielle |
| Critères d’entrée delivery | GO delivery Morris · résolution catalogue · conception `13` respectée · pas d’élargissement V3.2 |
| Delivery ouvert | **non** |

## Lot V3.2 — CreateCycle explicite (candidat)

**Statut** : `NOT AUTHORIZED`.

CTA explicite de création CycleInstance · options LPS / épistémiques seulement si nouveaux GO · justification Critical obligatoire à la création.

## Lot V4 — Morris Decision

**Statut** : `NOT AUTHORIZED`.

T-A3 record + LOCAL DEMO mode + Critical blocked + history.

## Lot V5 — Readiness Dashboard

**Statut** : `NOT AUTHORIZED`.

T-A6/T-A7 projections + anti-claims + blockers.

## Lot V6 — Consolidation visuelle

**Statut** : `NOT AUTHORIZED`.

Responsive, a11y, captures, Figma page compare, REX.

## D-VS-04 (historique)

V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 : cadrage + arbitrage terminés. V3.1 : conception fonctionnelle terminée avec réserve catalogue ; delivery non ouvert.

---

# CURRENT-CYCLE DIFF README (from snapshot before)

--- .tmp-sfia-review/before/README.md	2026-07-30 19:09:08
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md	2026-07-30 19:12:30
@@ -2,17 +2,17 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2 ON MAIN — V3 ARBITRATION COMPLETE — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED` |
-| **Date** | 2026-07-30 18:54:00 CEST (+0200) |
-| **Cycle courant** | 1 — Cadrage Lot V3 (phase arbitrage / validation) |
+| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2 ON MAIN — V3 ARBITRATION COMPLETE — V3.1 FUNCTIONAL DESIGN COMPLETE WITH CATALOG RESERVE — IMPLEMENTATION NOT AUTHORIZED` |
+| **Date** | 2026-07-30 19:09:00 CEST (+0200) |
+| **Cycle courant** | 2 — Conception fonctionnelle V3.1 Profile Qualification UI |
 | **Profil** | Standard |
 | **Typologie** | DOC |
-| **Gate courant** | arbitrage D-V3 **consommé** (voir Decision record dans `12`) |
-| **Branche cadrage V3** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Gate courant** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 …` **consommé** |
+| **Branche cadrage / conception** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
 | **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
 | **Code applicatif (ce cycle)** | **aucune modification** |
-| **Framing historique** | conservé ci-dessous · docs `01`–`11` · D-VS-01→04 inchangées · D-VS-05 non consommée |
+| **Framing historique** | docs `01`–`12` · D-VS-01→04 inchangées · D-VS-05 non consommée · doc `12` **non modifié** ce cycle |

 ## Objectif

@@ -22,19 +22,23 @@

 en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

-## Synthèse d’état (post V2-A3)
+## Synthèse d’état (post V2-A3 / V3.1 design)

-| Lot | État sur `main` |
-|-----|-----------------|
-| V1 — composition Project / LPS | intégré |
+| Lot | État |
+|-----|------|
+| V1 — composition Project / LPS | intégré sur `main` |
 | V2-A1 — runtime bridge server-only | intégré · create/get Project |
 | V2-A2 — Create Project UI | intégré · `/studio/projects/new` |
 | V2-A3 — Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 |
-| V3 — Cycle Recommendation | **arbitrage D-V3 enregistré** · **implémentation non autorisée** · prêt conception V3.1 |
+| V3 — Cycle Recommendation | cadrage + arbitrage D-V3 **enregistrés** (`12`) |
+| **V3.1 — Profile Qualification UI** | **conception fonctionnelle complète** (`13`) · **delivery non autorisé** · réserve catalogue |
+| V3.2 — CreateCycle explicite | non autorisé |
 | V4 / V5 / V6 | non autorisés |

-**Décisions V3 (synthèse) :** type sélectionné par l’utilisateur · profil recommandé par T-A2 · CTA create explicite · pas de lien LPS / pas d’épistémique au 1er incrément · Critical fail-closed · contrat Git + réserve Figma · slicing V3.1 read-only → V3.2 create. Tableau complet : `12` Decision record.
+**Décisions V3 (synthèse) :** type sélectionné · profil T-A2 · CTA create en V3.2 · pas LPS/épistémique au 1er incrément · Critical fail-closed · contrat Git + réserve Figma · slicing V3.1 read-only → V3.2 create. Détail : `12`.

+**V3.1 design :** surface read-only depuis le workspace · six signaux explicites · QualifyCycle · aucun CreateCycle. Détail : `13`. **R-V3.1-CATALOG-01** bloque le delivery tant que la source runtime du catalogue n’est pas validée.
+
 ### Contexte UI historique (inchangé)

 Trois stacks UI coexistent et **ne sont pas unifiées** :
@@ -56,7 +60,7 @@
 1. Arrivée — disclosure mode local · CTA Créer un projet
 2. Création — champs minimaux → T-A0+T-A1
 3. Fiche projet — LPS, cycle, blockers
-4. Recommandation — T-A2 (≠ décision)
+4. Recommandation — T-A2 (≠ décision) — **V3.1 conception ✓ · delivery ✗**
 5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
 6. Readiness dashboard — anti-claims honnêtes
 7. Historique borné
@@ -79,16 +83,15 @@
 |------|--------|
 | FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
 | Page listée | `0:1` — **UX-B — P0** |
-| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
-| Contrat visuel | **Git** — voir `05` |
-| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |
+| Écriture Figma ce cycle | **non exécutée** |
+| Contrat visuel | **Git** — voir `05` et `13` §X |
+| D-VS-05 | `NOT DECIDED — NOT CONSUMED` |
+| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED — REASSESS BEFORE SUBSTANTIAL UI` |

 ## Backlog recommandé

-V1 Composition locale Project → V2 Create UI (A1/A2/A3) → **V3 Recommendation (arbitrage ✓ · conception V3.1 candidate · delivery ✗)** → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.
+V1 Composition → V2 Create UI (A1/A2/A3) → V3 Recommendation (arbitrage ✓) → **V3.1 Profile Qualification (design ✓ · delivery ✗ · réserve catalogue)** → V3.2 CreateCycle → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

-Slicing V3 adopté (D-V3-08) : **V3.1** qualification read-only · **V3.2** création explicite. Détail : `12`.
-
 ## Décisions Morris

 ### D-VS (historique)
@@ -114,17 +117,16 @@
 | D-V3-07 | 1 + réserve réévaluation Figma | `DECIDED — ADOPTED BY MORRIS` |
 | D-V3-08 | 1 — V3.1 read-only puis V3.2 create | `DECIDED — ADOPTED BY MORRIS` |

-Source réelle Morris : « ok pour les différents choix, on continue et on avance » (2026-07-30 ~18:46 CEST). Record complet : `12`.
+Source réelle Morris (arbitrage) : « ok pour les différents choix, on continue et on avance » (2026-07-30 ~18:46 CEST). Record : `12`.

-## Statut d’exécution V1 → V2 (historique + intégration)
+## Statut d’exécution V1 → V3.1

-V1 a composé Doctrine T-A0 et Project/LPS T-A1 en mémoire process-local. V2-A1 a ajouté le bridge Server Action. V2-A2 a livré Create Project UI. V2-A3 a livré Project Workspace UI (merge PR #295 @ `3e8a437…`).
+V1–V2 intégrés sur `main`. V3 : cadrage + arbitrage (`12`). V3.1 : **conception fonctionnelle** (`13`) — aucun bridge QualifyCycle, aucune UI, aucun CreateCycle. **Implémentation non autorisée.** Delivery V3.1 conditionné à la résolution du catalogue et à un GO delivery distinct.

-V3 : **cadrage + arbitrage documentaires** — voir `12`. Aucune Server Action cycle, aucune UI recommendation, aucune CreateCycle. **Implémentation non autorisée.**
-
 ## Anti-claims

-- Framing / arbitrage ≠ produit ready ≠ MVP validé
+- Framing / conception ≠ produit ready ≠ MVP validé
+- Conception fonctionnelle ≠ delivery autorisé
 - UI POC ≠ cœur OA branché
 - Décision locale ≠ autorité IAM
 - Local SQLite ≠ persistance produit
@@ -147,14 +149,15 @@
 | `09` | Plan validation / preuves |
 | `10` | Risques & decision pack Morris |
 | `11` | Exécution locale V1 — Project core composition |
-| `12` | **Lot V3 Cycle Recommendation — Cadrage + arbitrage** |
+| `12` | Lot V3 Cycle Recommendation — Cadrage + arbitrage |
+| `13` | **V3.1 Profile Qualification UI — Conception fonctionnelle** |

 ## Gate candidat suivant

-`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`
+`GO DELIVERY SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 QUALIFYCYCLE READ-ONLY — NO CREATECYCLE — NO LPS LINK — NO EPISTEMIC PERSISTENCE — CONTRACT GIT`

-**Aucun delivery V3 automatique.** Aucun gate automatique.
+**Précondition :** résolution R-V3.1-CATALOG-01. **Aucun delivery automatique.** Aucun gate automatique.

 ## Verdict

-`V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED`
+`V3.1 FUNCTIONAL DESIGN COMPLETE WITH RESERVE — CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY — IMPLEMENTATION NOT AUTHORIZED`

---

# CURRENT-CYCLE DIFF 08 (from snapshot before)

--- .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md	2026-07-30 19:09:08
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md	2026-07-30 19:12:30
@@ -24,23 +24,34 @@
 | Objectif | Server Actions create/get · `/studio/projects/new` · `/studio/projects/[id]` |
 | Hors lot | recommendation · decision · dashboard |

-## Lot V3 — Cycle Recommendation
+## Lot V3 — Cycle Recommendation (cadrage + arbitrage)

-**Statut** : `CADRAGE + ARBITRATION COMPLETE — IMPLEMENTATION NOT AUTHORIZED — READY FOR FUNCTIONAL DESIGN V3.1`.
+**Statut** : `CADRAGE + ARBITRATION COMPLETE` — voir [`12`](./12-v3-cycle-recommendation-cadrage.md).

-Cadrage et décisions : [`12-v3-cycle-recommendation-cadrage.md`](./12-v3-cycle-recommendation-cadrage.md).
+Décisions D-V3-01…08 adoptées (2026-07-30). Aucun delivery ouvert à ce stade.

+## Lot V3.1 — Profile Qualification UI (read-only)
+
+**Statut** : `FUNCTIONAL DESIGN COMPLETE WITH RESERVE — IMPLEMENTATION / DELIVERY NOT AUTHORIZED`.
+
+Conception : [`13-v3-1-profile-qualification-functional-design.md`](./13-v3-1-profile-qualification-functional-design.md).
+
 | Item | Contenu |
 |------|---------|
-| Objectif | Surface de qualification (± CreateCycle explicite plus tard) au-dessus de T-A2 |
-| Écart structurant (conservé) | QualifyCycle recommande un **profil**, pas un `cycleTypeId` |
-| D-V3 | **adoptées** (2026-07-30) — type sélectionné · profil T-A2 · CTA create · pas LPS/épistémique au 1er incrément · Critical fail-closed · Git + réserve Figma · slicing progressif |
-| **V3.1 (candidat)** | Conception fonctionnelle puis delivery (gates distincts) : qualification **read-only** |
-| **V3.2 (candidat)** | Création explicite CycleInstance via CTA |
-| Hors 1er incrément | liaison LPS actif · persistance EpistemicItem Recommendation |
-| Interdit sans GO | code · Server Action · UI · CreateCycle · Figma write · delivery |
-| V3 delivery ouvert | **non** |
+| Objectif | Surface « Préparer un cycle » · type sélectionné · six signaux · QualifyCycle · profil + disclosures |
+| Invariants | **Aucun** CreateCycle · **aucun** lien LPS · **aucune** persistance épistémique · **aucun** requestedProfile |
+| Critical | Affichage fail-closed · pas d’activation · justification informée pour V3.2 uniquement |
+| Catalogue | Contrôlé · pas de saisie libre · **R-V3.1-CATALOG-01 bloquante delivery** |
+| Figma | Contrat Git temporaire · D-VS-05 non consommée · réévaluation avant UI substantielle |
+| Critères d’entrée delivery | GO delivery Morris · résolution catalogue · conception `13` respectée · pas d’élargissement V3.2 |
+| Delivery ouvert | **non** |

+## Lot V3.2 — CreateCycle explicite (candidat)
+
+**Statut** : `NOT AUTHORIZED`.
+
+CTA explicite de création CycleInstance · options LPS / épistémiques seulement si nouveaux GO · justification Critical obligatoire à la création.
+
 ## Lot V4 — Morris Decision

 **Statut** : `NOT AUTHORIZED`.
@@ -61,4 +72,4 @@

 ## D-VS-04 (historique)

-V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 : cadrage + arbitrage terminés ; conception V3.1 et delivery restent à ouvrir par GO distincts.
+V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 : cadrage + arbitrage terminés. V3.1 : conception fonctionnelle terminée avec réserve catalogue ; delivery non ouvert.
