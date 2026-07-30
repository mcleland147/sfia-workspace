# SFIA Studio V3 Cycle Recommendation — Arbitration Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 18:57:00 CEST (+0200)
- **Cycle :** 1 — Cadrage (phase arbitrage / validation)
- **Profil :** Standard
- **Typologie :** DOC
- **CKC Cadrage :** pilots/01-cadrage.md · candidate · aucune autorité d'exécution
- **Gate Morris réel :** « ok pour les différents choix, on continue et on avance » (2026-07-30 vers 18:46 CEST +0200)
- **Gate normalisé (traçabilité) :** GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION — D-V3-01=1 — D-V3-02=1 — D-V3-03=2 — D-V3-04=1 — D-V3-05=1 — D-V3-06=CONFIRM CRITICAL FAIL-CLOSED — D-V3-07=1 WITH FIGMA REASSESSMENT RESERVE — D-V3-08=1
- **Note :** la formulation normalisée ne remplace pas la citation réelle Morris.

## Local Git Truth Check
- workspace : /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
- repository : mcleland147/sfia-workspace
- branche : framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage
- HEAD : 3e8a4374405dce98866e35fb60c5c7329701f191
- origin/main : 3e8a4374405dce98866e35fb60c5c7329701f191
- ahead/behind : 0 0
- branche distante cadrage : absente
- staged : aucun
- tracked modifiés : README.md · 08-implementation-backlog-and-slicing.md
- untracked projet : 12-v3-cycle-recommendation-cadrage.md
- artefact tmp : .tmp-sfia-review/**

```
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
```

## Sources consultées
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- docs/architecture/2026-06-27-sfia-decision-engine.md
- framing docs README / 08 / 12
- app/lib/oa/cycle/domain/types.ts · qualification.ts · qualifyCycle.ts · createCycle.ts (lecture seule, non modifiés)
- branche sfia/review-handoff · tip pré-cycle attendu cd8cec83d7c6f0998d27b24e92dfd2051bee1927

## Qualification
- Type cycle : 1 — Cadrage
- Phase : Arbitrage et validation du cadrage
- Profil : Standard
- Typologie : DOC
- CKC : Cadrage candidate — aucune autorité d'exécution
- Aucune implémentation · aucun code

## Décisions D-V3 (complètes)

| ID | Option | Conséquence | Réserve | Statut |
|----|--------|-------------|---------|--------|
| D-V3-01 | 1 | type sélectionné · profil T-A2 | — | DECIDED — ADOPTED BY MORRIS |
| D-V3-02 | 1 | cycleTypeId explicite catalogue | catalogue contrôlé | DECIDED — ADOPTED BY MORRIS |
| D-V3-03 | 2 | CTA create explicite · jamais auto | create hors V3.1 | DECIDED — ADOPTED BY MORRIS |
| D-V3-04 | 1 | pas de lien LPS actif V3.1 | réévaluer V3.2+ | DECIDED — ADOPTED BY MORRIS |
| D-V3-05 | 1 | reco non persistée V3.1 | réévaluer V3.2+ | DECIDED — ADOPTED BY MORRIS |
| D-V3-06 | CONFIRM CRITICAL FAIL-CLOSED | proposed · justification · no act/ack/gate | bascule V4 | DECIDED — ADOPTED BY MORRIS |
| D-V3-07 | 1 + réserve Figma | contrat Git temporaire | réévaluer Figma avant UI substantielle | DECIDED — ADOPTED BY MORRIS |
| D-V3-08 | 1 | V3.1 read-only → V3.2 create | — | DECIDED — ADOPTED BY MORRIS |

## Réserves maintenues
- D-VS-05 NOT DECIDED — NOT CONSUMED
- Réévaluation Figma avant UI substantielle / fidélité visuelle
- B5 / R1 ouverts
- Volatilité process-local
- Implémentation non autorisée sans GO delivery distinct
- D-VS-01→04 préservées

## Diff controls
### git diff --stat
```
 .../08-implementation-backlog-and-slicing.md       | 46 ++++++++-----
 .../README.md                                      | 80 ++++++++++++++--------
 2 files changed, 81 insertions(+), 45 deletions(-)
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
- **Non exécutés** — justification : aucun code / test modifié ; cycle documentaire DOC uniquement.

## Content coverage
- created file 12 full content : yes
- modified sections complete : yes (README + backlog full files)
- decisions visible : yes
- source Morris visible : yes
- useful diff included : yes
- synthesis only : no
- review pack verdict : complete

## Prochain cycle candidat
Conception fonctionnelle V3.1 — profile qualification UI — user selects cycle type — T-A2 recommends profile — read-only first — NO CREATE CYCLE

Gate : `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`

## Verdict
V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED

---

# FULL FILE: 12-v3-cycle-recommendation-cadrage.md

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

# FULL FILE: README.md (modified)

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2 ON MAIN — V3 ARBITRATION COMPLETE — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED` |
| **Date** | 2026-07-30 18:54:00 CEST (+0200) |
| **Cycle courant** | 1 — Cadrage Lot V3 (phase arbitrage / validation) |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Gate courant** | arbitrage D-V3 **consommé** (voir Decision record dans `12`) |
| **Branche cadrage V3** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
| **Code applicatif (ce cycle)** | **aucune modification** |
| **Framing historique** | conservé ci-dessous · docs `01`–`11` · D-VS-01→04 inchangées · D-VS-05 non consommée |

## Objectif

Cadrer le premier parcours **réellement visible et compréhensible** :

**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**

en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

## Synthèse d’état (post V2-A3)

| Lot | État sur `main` |
|-----|-----------------|
| V1 — composition Project / LPS | intégré |
| V2-A1 — runtime bridge server-only | intégré · create/get Project |
| V2-A2 — Create Project UI | intégré · `/studio/projects/new` |
| V2-A3 — Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 |
| V3 — Cycle Recommendation | **arbitrage D-V3 enregistré** · **implémentation non autorisée** · prêt conception V3.1 |
| V4 / V5 / V6 | non autorisés |

**Décisions V3 (synthèse) :** type sélectionné par l’utilisateur · profil recommandé par T-A2 · CTA create explicite · pas de lien LPS / pas d’épistémique au 1er incrément · Critical fail-closed · contrat Git + réserve Figma · slicing V3.1 read-only → V3.2 create. Tableau complet : `12` Decision record.

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
4. Recommandation — T-A2 (≠ décision)
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
| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
| Contrat visuel | **Git** — voir `05` |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |

## Backlog recommandé

V1 Composition locale Project → V2 Create UI (A1/A2/A3) → **V3 Recommendation (arbitrage ✓ · conception V3.1 candidate · delivery ✗)** → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

Slicing V3 adopté (D-V3-08) : **V3.1** qualification read-only · **V3.2** création explicite. Détail : `12`.

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

Source réelle Morris : « ok pour les différents choix, on continue et on avance » (2026-07-30 ~18:46 CEST). Record complet : `12`.

## Statut d’exécution V1 → V2 (historique + intégration)

V1 a composé Doctrine T-A0 et Project/LPS T-A1 en mémoire process-local. V2-A1 a ajouté le bridge Server Action. V2-A2 a livré Create Project UI. V2-A3 a livré Project Workspace UI (merge PR #295 @ `3e8a437…`).

V3 : **cadrage + arbitrage documentaires** — voir `12`. Aucune Server Action cycle, aucune UI recommendation, aucune CreateCycle. **Implémentation non autorisée.**

## Anti-claims

- Framing / arbitrage ≠ produit ready ≠ MVP validé
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
| `12` | **Lot V3 Cycle Recommendation — Cadrage + arbitrage** |

## Gate candidat suivant

`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`

**Aucun delivery V3 automatique.** Aucun gate automatique.

## Verdict

`V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED`

---

# FULL FILE: 08-implementation-backlog-and-slicing.md (modified)

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

## Lot V3 — Cycle Recommendation

**Statut** : `CADRAGE + ARBITRATION COMPLETE — IMPLEMENTATION NOT AUTHORIZED — READY FOR FUNCTIONAL DESIGN V3.1`.

Cadrage et décisions : [`12-v3-cycle-recommendation-cadrage.md`](./12-v3-cycle-recommendation-cadrage.md).

| Item | Contenu |
|------|---------|
| Objectif | Surface de qualification (± CreateCycle explicite plus tard) au-dessus de T-A2 |
| Écart structurant (conservé) | QualifyCycle recommande un **profil**, pas un `cycleTypeId` |
| D-V3 | **adoptées** (2026-07-30) — type sélectionné · profil T-A2 · CTA create · pas LPS/épistémique au 1er incrément · Critical fail-closed · Git + réserve Figma · slicing progressif |
| **V3.1 (candidat)** | Conception fonctionnelle puis delivery (gates distincts) : qualification **read-only** |
| **V3.2 (candidat)** | Création explicite CycleInstance via CTA |
| Hors 1er incrément | liaison LPS actif · persistance EpistemicItem Recommendation |
| Interdit sans GO | code · Server Action · UI · CreateCycle · Figma write · delivery |
| V3 delivery ouvert | **non** |

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

V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 : cadrage + arbitrage terminés ; conception V3.1 et delivery restent à ouvrir par GO distincts.

---

# Useful diffs (tracked files)

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index 2cb96a4..6e4c138 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -2,53 +2,63 @@

 ## Stratégie de livraison (recommandation, non décision)

-**Plusieurs PR** (V1…V5), chacune mergeable ; commits atomiques 1–3.
+**Plusieurs PR** (lots V1…V5), chacune mergeable ; commits atomiques 1–3.
 Branche framing docs séparée. Pas de big-bang unique.

 ## Lot V1 — Composition locale Project

-**Statut au 2026-07-29** : `EXECUTED LOCALLY — TESTS GREEN — PROJECT BRANCH NOT PUSHED`. Voir `11-v1-local-project-core-composition.md`. Ce statut d'exécution complète le backlog historique sans autoriser V2.
+**Statut** : `INTEGRATED ON MAIN` (fondation visible-slice). Voir `11-v1-local-project-core-composition.md`.

 | Item | Contenu |
 |------|---------|
 | Objectif | Facade + CreateProject/LPS + doctrine resolve + tests |
-| Fichiers probables | `app/lib/studio-vertical-slice/**` (nouveau), tests |
 | Dépendances | T-A0/T-A1 memory factories |
-| Tests | unit facade, idempotency, doctrine fail |
-| Captures | non (pas UI obligatoire) |
-| Stop | IAM, HTTP, package.json sans GO |
 | Dette | facade initiale |
-| Gate | `GO IMPLEMENT … LOT V1 …` |
-| Verdict attendu | V1 COMPLETE — NO UI REQUIRED OR MINIMAL HOOK |

-## Lot V2 — Parcours Create Project
+## Lot V2 — Create Project + Workspace (A1 / A2 / A3)

-**Statut** : `NOT AUTHORIZED`.
+**Statut** : `INTEGRATED ON MAIN` — V2-A1 runtime bridge · V2-A2 Create UI · V2-A3 Workspace UI (PR #295 @ `3e8a437…`).

 | Item | Contenu |
 |------|---------|
-| Objectif | Écran create + validation + navigation overview |
-| UI | StudioShell + form |
-| Tests | component + parcours |
-| Captures | desktop create + error |
-| Gate | distinct après V1 |
+| Objectif | Server Actions create/get · `/studio/projects/new` · `/studio/projects/[id]` |
+| Hors lot | recommendation · decision · dashboard |

 ## Lot V3 — Cycle Recommendation

-T-A2 qualify/create + projection + bandeau ≠ décision.
+**Statut** : `CADRAGE + ARBITRATION COMPLETE — IMPLEMENTATION NOT AUTHORIZED — READY FOR FUNCTIONAL DESIGN V3.1`.
+
+Cadrage et décisions : [`12-v3-cycle-recommendation-cadrage.md`](./12-v3-cycle-recommendation-cadrage.md).
+
+| Item | Contenu |
+|------|---------|
+| Objectif | Surface de qualification (± CreateCycle explicite plus tard) au-dessus de T-A2 |
+| Écart structurant (conservé) | QualifyCycle recommande un **profil**, pas un `cycleTypeId` |
+| D-V3 | **adoptées** (2026-07-30) — type sélectionné · profil T-A2 · CTA create · pas LPS/épistémique au 1er incrément · Critical fail-closed · Git + réserve Figma · slicing progressif |
+| **V3.1 (candidat)** | Conception fonctionnelle puis delivery (gates distincts) : qualification **read-only** |
+| **V3.2 (candidat)** | Création explicite CycleInstance via CTA |
+| Hors 1er incrément | liaison LPS actif · persistance EpistemicItem Recommendation |
+| Interdit sans GO | code · Server Action · UI · CreateCycle · Figma write · delivery |
+| V3 delivery ouvert | **non** |

 ## Lot V4 — Morris Decision

+**Statut** : `NOT AUTHORIZED`.
+
 T-A3 record + LOCAL DEMO mode + Critical blocked + history.

 ## Lot V5 — Readiness Dashboard

+**Statut** : `NOT AUTHORIZED`.
+
 T-A6/T-A7 projections + anti-claims + blockers.

 ## Lot V6 — Consolidation visuelle

+**Statut** : `NOT AUTHORIZED`.
+
 Responsive, a11y, captures, Figma page compare, REX.

-## D-VS-04 recommandation
+## D-VS-04 (historique)

-Commencer par **V1 only** (composition). Ne pas livrer V1–V5 d’un coup.
+V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 : cadrage + arbitrage terminés ; conception V3.1 et delivery restent à ouvrir par GO distincts.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index dae31b5..0f3a69d 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -2,17 +2,17 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING HISTORICAL — D-VS-01→04 ADOPTED — V1 EXECUTED LOCALLY — V2 NOT AUTHORIZED` |
-| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
-| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
+| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2 ON MAIN — V3 ARBITRATION COMPLETE — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED` |
+| **Date** | 2026-07-30 18:54:00 CEST (+0200) |
+| **Cycle courant** | 1 — Cadrage Lot V3 (phase arbitrage / validation) |
 | **Profil** | Standard |
-| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
-| **Branche framing** | `framing/sfia-studio-first-user-visible-vertical-slice` @ `c1955179a36079e060c41a845c2a1950084966c8` |
-| **Branche V1 locale** | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
-| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
-| **Code applicatif framing** | **aucune modification** |
-| **Exécution V1** | facade headless T-A0/T-A1, OA mémoire, projection et audit optionnel — voir `11` |
-| **Push / PR / merge projet V1** | **non autorisés, non exécutés** |
+| **Typologie** | DOC |
+| **Gate courant** | arbitrage D-V3 **consommé** (voir Decision record dans `12`) |
+| **Branche cadrage V3** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
+| **Code applicatif (ce cycle)** | **aucune modification** |
+| **Framing historique** | conservé ci-dessous · docs `01`–`11` · D-VS-01→04 inchangées · D-VS-05 non consommée |

 ## Objectif

@@ -22,17 +22,28 @@ Cadrer le premier parcours **réellement visible et compréhensible** :

 en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

-## Synthèse
+## Synthèse d’état (post V2-A3)

-Trois stacks UI coexistent aujourd’hui et **ne sont pas unifiées** :
+| Lot | État sur `main` |
+|-----|-----------------|
+| V1 — composition Project / LPS | intégré |
+| V2-A1 — runtime bridge server-only | intégré · create/get Project |
+| V2-A2 — Create Project UI | intégré · `/studio/projects/new` |
+| V2-A3 — Project Workspace UI | intégré · `/studio/projects/[id]` · PR #295 |
+| V3 — Cycle Recommendation | **arbitrage D-V3 enregistré** · **implémentation non autorisée** · prêt conception V3.1 |
+| V4 / V5 / V6 | non autorisés |
+
+**Décisions V3 (synthèse) :** type sélectionné par l’utilisateur · profil recommandé par T-A2 · CTA create explicite · pas de lien LPS / pas d’épistémique au 1er incrément · Critical fail-closed · contrat Git + réserve Figma · slicing V3.1 read-only → V3.2 create. Tableau complet : `12` Decision record.
+
+### Contexte UI historique (inchangé)
+
+Trois stacks UI coexistent et **ne sont pas unifiées** :

 1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
 2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
 3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).

-Le cœur Option A (`lib/oa/**`) est **complet jusqu’à T-A6** (+ fondations T-A7) mais **aucune route UI n’importe `@/lib/oa/**` aujourd’hui**.
-
-Le framing propose une **facade applicative locale** au-dessus des use cases OA + lecture T-A7, en **adaptant StudioShell** et en **séparant strictement** fixture / local / produit.
+Le cœur Option A (`lib/oa/**`) reste la source métier. Le vertical-slice runtime expose aujourd’hui **create/get Project** uniquement — pas Qualify/Create cycle.

 ## Scope / hors scope

@@ -74,12 +85,14 @@ Aucun composant React ne décide Critical / HARD closed / preuve suffisante / au

 ## Backlog recommandé

-V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.
+V1 Composition locale Project → V2 Create UI (A1/A2/A3) → **V3 Recommendation (arbitrage ✓ · conception V3.1 candidate · delivery ✗)** → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

-Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.
+Slicing V3 adopté (D-V3-08) : **V3.1** qualification read-only · **V3.2** création explicite. Détail : `12`.

 ## Décisions Morris

+### D-VS (historique)
+
 | ID | Statut | Décision |
 |----|--------|----------|
 | D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
@@ -88,21 +101,35 @@ Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits at
 | D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
 | D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

-## Statut d'exécution V1
+### D-V3 (Lot Cycle Recommendation) — adoptées 2026-07-30
+
+| ID | Option | Statut |
+|----|--------|--------|
+| D-V3-01 | 1 — type sélectionné · profil T-A2 | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-02 | 1 — cycleTypeId sélection explicite | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-03 | 2 — CTA create explicite | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-04 | 1 — pas de lien LPS actif (1er incrément) | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-05 | 1 — reco non persistée (1er incrément) | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-06 | CONFIRM CRITICAL FAIL-CLOSED | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-07 | 1 + réserve réévaluation Figma | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3-08 | 1 — V3.1 read-only puis V3.2 create | `DECIDED — ADOPTED BY MORRIS` |

-V1 est exécuté localement sur une branche descendante du commit de framing. La facade compose la résolution Doctrine T-A0 et la création atomique Project/LPS v1 T-A1, puis expose une projection read-only reconstruite depuis T-A1. Les fixtures et le storage navigateur sont hors de cette surface.
+Source réelle Morris : « ok pour les différents choix, on continue et on avance » (2026-07-30 ~18:46 CEST). Record complet : `12`.

-Validations : 16 nouveaux tests ; régressions ciblées 109/109 ; suite complète 752/752 ; typecheck, lint et build green. Aucun fichier UI, OA existant, schéma SQLite, package ou lockfile n'est modifié.
+## Statut d’exécution V1 → V2 (historique + intégration)

-V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est implémenté.
+V1 a composé Doctrine T-A0 et Project/LPS T-A1 en mémoire process-local. V2-A1 a ajouté le bridge Server Action. V2-A2 a livré Create Project UI. V2-A3 a livré Project Workspace UI (merge PR #295 @ `3e8a437…`).
+
+V3 : **cadrage + arbitrage documentaires** — voir `12`. Aucune Server Action cycle, aucune UI recommendation, aucune CreateCycle. **Implémentation non autorisée.**

 ## Anti-claims

-- Framing ≠ produit ready ≠ MVP validé
+- Framing / arbitrage ≠ produit ready ≠ MVP validé
 - UI POC ≠ cœur OA branché
 - Décision locale ≠ autorité IAM
 - Local SQLite ≠ persistance produit
 - Recommandation ≠ décision Morris
+- Arbitrage ≠ autorisation d’implémentation
 - HARD/T-A6 restent ouverts

 ## Index du pack
@@ -120,15 +147,14 @@ V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est
 | `09` | Plan validation / preuves |
 | `10` | Risques & decision pack Morris |
 | `11` | Exécution locale V1 — Project core composition |
+| `12` | **Lot V3 Cycle Recommendation — Cadrage + arbitrage** |

 ## Gate candidat suivant

-`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`
-
-Après intégration distincte de V1 : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`.
+`GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE`

-Aucun gate automatique.
+**Aucun delivery V3 automatique.** Aucun gate automatique.

 ## Verdict

-`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED`
+`V3 CYCLE RECOMMENDATION ARBITRATION RECORDED — READY FOR FUNCTIONAL DESIGN V3.1 — IMPLEMENTATION NOT AUTHORIZED`
