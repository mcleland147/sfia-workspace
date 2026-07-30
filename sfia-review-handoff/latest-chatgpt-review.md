# SFIA Studio V3.1 Cycle Type Catalog — Adoption Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 20:31:05 CEST (+0200)
- **Cycle :** 3 — Architecture fonctionnelle (arbitrage / adoption / correction)
- **Profil :** Critical
- **Typologie :** DOC
- **CKC fallback :** 02-fifteen-cycles-synthetic-map.md + méthode §4.3 · method-candidate · consommation obligatoire · executionAuthority=false
- **Clarification Morris :** « par contre le CKC doit faire partie intégrante du mécanisme, c'est candidate parce que le projet lui meme est candidate mais c'est la base de la doctrine de ce produit, donc toute la doctrine meme si elle est candidate doit faire partie intégrante de la solution, de sa conception a sa réalisation, jusqu'a que la solution soit en production »
- **Confirmation Morris :** « pour le reste des décisions c'est ok »
- **GO formel (2026-07-30 20:23 CEST) :** GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG — D-V3.1-CAT-01=CAT-S1 — D-V3.1-CAT-02=CAT-I1 — D-V3.1-CAT-03=MINIMAL_WITH_MANDATORY_CKC_CORE — D-V3.1-CAT-04=CONTROLLED_ALIASES — D-V3.1-CAT-05=MORRIS_FOR_STRUCTURAL_CHANGES — D-V3.1-CAT-06=NEUTRAL_ID_LOCALIZED_LABELS — D-V3.1-CAT-07=INTEGRATED_MANDATORY_CKC_MECHANISM — D-V3.1-CAT-08=D1_THEN_D2_THEN_D3

## Local Git Truth Check
- workspace / repo / branche cadrage OK
- HEAD = origin/main = 3e8a4374405dce98866e35fb60c5c7329701f191
- ahead/behind 0/0 · remote cadrage absente · staged aucun
- handoff tip pré-cycle : 8c9c2fe0e56ed25415db2f15a851a03e1b6b3fca · blob 69feab5a4094f1792f21192fa891989d68c71c30

```
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md
```

## Hashes
| Fichier | Initial | Final |
|---------|---------|-------|
| README | fd343fca9e04e77c775816be4939c8e78d5a7e73 | modifié |
| 08 | 921d10500e7bcae4f195a926609c2c6e582b8632 | modifié |
| 12 | 82be657cb3b88be0ac72d41e172106a557be101b | 82be657c… UNCHANGED |
| 13 | b910a4e75231cadaffe27c11b79995a22b3dddcc | 3ecb0256e14662a0e8244029a1329a6afb525444 scoped |
| 14 | bd78d5b9770fef587327688080180df390c6df87 | 403c1d175c442e09ecf10bc17a8303d1cee1cc9c |

## Preuve 12
FILE_12_UNCHANGED_OK

## Preuve 13 scoped
Meta/statut · réserve catalogue · intégrations CKC · risques · slicing · anti-claims · gate/verdict. CA/scénarios/règles qualification intactes.

## Décisions D-V3.1-CAT-01…08
Toutes DECIDED — ADOPTED BY MORRIS (voir tableau Decision record dans 14).

## Mapping 15 IDs adoptés
cyc:framing · cyc:functional-design · cyc:functional-architecture · cyc:ux-ui · cyc:backlog · cyc:technical-architecture · cyc:integration-devops · cyc:delivery · cyc:qa-validation · cyc:security · cyc:release · cyc:observability · cyc:pr-readiness · cyc:post-merge · cyc:capitalization
Statut chacun : ADOPTED BY MORRIS — CONTRACTUAL ID — NOT YET IMPLEMENTED
cyc:capitalization inchangé.

## CKC conséquences
Obligatoire dans mécanisme produit · candidate ≠ optionnel · ≠ baseline méthode globale · detailed→synthetic→fail-closed · executionAuthority=false · QualifyCycle domaine OK mais parcours produit non exploitable sans CKC valide · traçabilité jusqu'à production.

## CAT-03 / CAT-07
CAT-03 = MINIMAL_WITH_MANDATORY_CKC_CORE (enrichit reco initiale)
CAT-07 = INTEGRATED_MANDATORY_CKC_MECHANISM (corrige reco « séparée/informative »)

## R-V3.1-CATALOG-01
RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL · runtime pending · D1 requires separate GO

## Diff controls
### git diff --stat
```
 .../08-implementation-backlog-and-slicing.md       |  80 ++++++-----
 .../README.md                                      | 153 +++++++--------------
 2 files changed, 92 insertions(+), 141 deletions(-)
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
Non exécutés — aucun code/test modifié.

## Content coverage
- inherited file 12 full content : yes
- inherited file 12 unchanged proof : yes
- modified file 13 full content : yes
- modified file 14 full content : yes
- README final full content : yes
- backlog final full content : yes
- current-cycle diffs : yes
- decision record complete : yes
- fifteen IDs complete : yes
- mandatory CKC consequences complete : yes
- synthesis only : no
- review pack verdict : complete

## Prochain gate
GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE

## Verdict
V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED

---

# FULL FILE (unchanged): 12

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

# FULL FILE (final): 13

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
| **Architecture catalogue** | `14` — décisions D-V3.1-CAT **adoptées** · CKC obligatoire intégré · runtime **non** implémenté |
| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
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

**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · runtime catalogue / resolver **pending** (contrat + arbitrage résolus — voir `14`).

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

### Réserve catalogue (requalifiée)

**R-V3.1-CATALOG-01**

| Aspect | État |
|--------|------|
| Constat runtime | Registry des 15 **toujours absente** (non implémentée) |
| Contrat + arbitrage | **RESOLVED** — D-V3.1-CAT-01…08 adoptées (`14`) |
| IDs | Quinze CAT-I1 **adoptés contractuellement** · non implémentés |
| CKC | **Obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` |
| Delivery D1 | **Non autorisé** — GO distinct requis |

- L’UI ne hardcode pas de liste d’autorité.
- Le résultat de QualifyCycle n’est **contractuellement exploitable** dans le parcours produit qu’avec une résolution CKC **valide** (detailed ou synthetic fallback).
- Les règles de qualification, CA et scénarios ci-dessous restent inchangés.

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
| Project Workspace | Contexte projet / LPS read-only |
| Catalogue contrôlé (contrat `14`) | Type id/label/description + métadonnées CKC |
| CKC Resolver | Résolution obligatoire · consommation orchestration · `executionAuthority=false` |
| T-A2 QualifyCycle | Recommandation de profil (domaine) |
| UI | Projection volatile · état CKC sans contrat brut |

**Aucune** mutation projet, cycle, trajectoire, LPS ou épistémique.

Le parcours produit ne présente pas le résultat de qualification comme contractuellement exploitable sans CKC valide.

**Non défini ici :** Server Action · classes · fichiers · protocole · stockage.

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
| R-V3.1-CATALOG-01 | Contrat+arbitrage résolus · runtime pending | Delivery D1 bloqué jusqu’à GO |
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
| V3.1 conception fonctionnelle | Terminée (`13`) |
| V3.1 architecture + adoption catalogue | Terminée (`14`) · D-V3.1-CAT adoptées · CKC obligatoire |
| V3.1-D1 catalogue runtime + CKC mapping | **Candidat** · non ouvert |
| V3.1-D2 projection + resolver + QualifyCycle bridge | Après D1 |
| V3.1-D3 UI | Après D2 · réserve Figma |
| V3.2 CreateCycle | Non ouvert |
| V4 décision Morris | Non ouvert |

Aucun cycle suivant ouvert automatiquement.

## AA. Anti-claims

- Conception fonctionnelle ≠ implémentation.
- IDs adoptés ≠ registry runtime.
- CKC obligatoire ≠ baseline méthode globale ≠ autorité d’exécution.
- Candidate ≠ optionnel (produit candidate).
- Profil recommandé ≠ type recommandé automatiquement.
- Recommandation ≠ décision Morris.
- Read-only ≠ CycleInstance créé.
- Résultat Critical ≠ autorisation.
- Contrat Git ≠ Figma validé.
- Tests planifiés ≠ tests exécutés.
- Aucun PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

## AB. Verdict

**V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

**Précondition D1 :** GO delivery distinct · respect contrat `14` · pas d’élargissement D2/D3/V3.2.

---

# FULL FILE (final): 14

# 14 — V3.1 Cycle Type Catalog — Architecture fonctionnelle

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 20:29:00 CEST (+0200) |
| **Cycle** | 3 — Architecture fonctionnelle (phase arbitrage / adoption / correction) |
| **Profil** | **Critical** |
| **Typologie** | DOC |
| **GO architecture (historique)** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG — RESOLVE R-V3.1-CATALOG-01 — CONTRACT ONLY — NO IMPLEMENTATION` (consommé) |
| **GO adoption (consommé)** | voir Decision record Morris |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC (ce cycle)** | Pilote détaillé **absent** · fallback carte synthétique + méthode §4.3 · `method-candidate` · **consommation obligatoire** · **executionAuthority=false** |
| **Entrées héritées** | `12` (lecture seule) · `13` (conception V3.1) |
| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
| **Commit / push / PR projet** | **non** |
| **Code / registry / resolver / Figma** | **non** |

## Decision record Morris

| Champ | Valeur |
|-------|--------|
| **Clarification Morris** | « par contre le CKC doit faire partie intégrante du mécanisme, c'est candidate parce que le projet lui meme est candidate mais c'est la base de la doctrine de ce produit, donc toute la doctrine meme si elle est candidate doit faire partie intégrante de la solution, de sa conception a sa réalisation, jusqu'a que la solution soit en production » |
| **Confirmation Morris** | « pour le reste des décisions c'est ok » |
| **GO formel** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG — D-V3.1-CAT-01=CAT-S1 — D-V3.1-CAT-02=CAT-I1 — D-V3.1-CAT-03=MINIMAL_WITH_MANDATORY_CKC_CORE — D-V3.1-CAT-04=CONTROLLED_ALIASES — D-V3.1-CAT-05=MORRIS_FOR_STRUCTURAL_CHANGES — D-V3.1-CAT-06=NEUTRAL_ID_LOCALIZED_LABELS — D-V3.1-CAT-07=INTEGRATED_MANDATORY_CKC_MECHANISM — D-V3.1-CAT-08=D1_THEN_D2_THEN_D3` |
| **Date/heure/fuseau GO** | 2026-07-30 20:23 CEST (+0200) |

| ID | Décision adoptée | Conséquence | Réserve | Statut |
|----|------------------|-------------|---------|--------|
| D-V3.1-CAT-01 | **CAT-S1** | Contrat Git catalogue = projection opérationnelle des 15 cycles méthode | Runtime non implémenté | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-02 | **CAT-I1** | Quinze IDs `cyc:<english-slug>` adoptés · `cyc:capitalization` inchangé | Runtime pending | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-03 | **MINIMAL_WITH_MANDATORY_CKC_CORE** | Noyau minimal **+** socle CKC obligatoire | Pas de sur-modélisation TS | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-04 | **CONTROLLED_ALIASES** | Alias 1→1 gouvernés · pas de recyclage | Alias initiaux absents OK | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-05 | **MORRIS_FOR_STRUCTURAL_CHANGES** | Gate Morris sur changements structurants | Labels non structurants : revue proportionnée | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-06 | **NEUTRAL_ID_LOCALIZED_LABELS** | ID neutre · labels FR · futur multi | Fallback label explicite | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-07 | **INTEGRATED_MANDATORY_CKC_MECHANISM** | CKC obligatoire dans le mécanisme produit · candidate ≠ optionnel | Candidate ≠ baseline méthode globale · `executionAuthority=false` | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-08 | **D1_THEN_D2_THEN_D3** | Trois incréments séparés adoptés | Delivery non ouvert | `DECIDED — ADOPTED BY MORRIS` |

**Décision produit SFIA Studio :** le CKC est obligatoire de la conception à la production dans le produit candidate. Cela **ne** promeut **pas** les documents CKC en baseline officielle de la méthode SFIA globale.

## B. Problème et objectif

### R-V3.1-CATALOG-01 (historique → requalifiée)

Historique : aucune source runtime canonique des quinze types.

**État actuel :** résolue au **niveau contrat fonctionnel et arbitrage Morris**. Runtime / delivery D1 **pending** (GO distinct).

### Contrat ≠ implémentation

Ce document enregistre l’adoption. Il ne crée aucun registre, constante, enum, resolver, bridge ni UI.

## C. Décisions d’entrée (D-V3 — inchangées)

D-V3-01…08 restent adoptées (`12`). `cyc:capitalization` immuable. Type sélectionné · profil T-A2 · V3.1 read-only · pas CreateCycle / LPS / epistemic.

## D. Inventaire repo-informed

*(inchangé dans le constat)* — registry runtime 15 **toujours absente** · harness non autorité · méthode = autorité conceptuelle · `cyc:capitalization` seul ID OA domaine explicite préexistant · fixtures test ≠ catalogue.

**Post-adoption :** les quinze IDs CAT-I1 sont **contractuels** (adoptés) mais **pas encore implémentés**.

## E. Principes d’architecture fonctionnelle

1. Méthode = autorité conceptuelle des 15 cycles.
2. Contrat catalogue = projection opérationnelle traçable (**CAT-S1**).
3. Projection runtime = consommation du contrat.
4. UI = sélection contrôlée · aucune liste d’autorité hardcodée.
5. T-A2 = reçoit un `cycleTypeId` validé · ne recommande pas le type.
6. Identité ≠ label.
7. Type ≠ profil.
8. Catalogue ≠ moteur de recommandation.
9. Recommandation ≠ décision Morris.
10. Git = source de vérité contractuelle.
11. Fail-closed unknown / unavailable / CKC invalid sans fallback.
12. Pas de parsing runtime Markdown méthode.
13. **CKC obligatoire** dans l’orchestration produit (candidate ≠ optionnel).
14. **CKC `executionAuthority=false`** · ne décide pas · ne consomme pas de gate.
15. Candidate doctrine ≠ baseline méthode globale.

## F. Vue fonctionnelle des composants

| Composant | Responsabilité |
|-----------|----------------|
| **SFIA Method Cycle Reference** | 15 cycles conceptuels (méthode Git) |
| **Cycle Type Catalog Contract** | IDs adoptés · labels · lifecycle · **métadonnées CKC obligatoires** |
| **Cycle Type Catalog Projection** | Exposition read-only post-D1 |
| **CKC Resolver** | Résout doctrine (detailed → synthetic → fail-closed) · `executionAuthority=false` · **consommation obligatoire** dans l’orchestration |
| **Orchestration produit** | Exige résolution CKC valide avant résultat contractuellement exploitable / executable / ready |
| **Profile Qualification UI** | Sélection type · signaux · profil · disclosures · **état CKC** (sans contrat brut) |
| **T-A2 QualifyCycle** | Profil depuis signaux · indépendant du type · domaine |
| **Futur CreateCycle** | Hors V3.1 · ID catalogue validé |
| **Gouvernance Morris** | Changements structurants |

## G. Flux fonctionnel (corrigé)

```text
Méthode (15 cycles)
  → Cycle Type Catalog Contract (CAT-S1)
    → Cycle Type Catalog Projection
      → sélection cycleTypeId (validé)
        → résolution CKC obligatoire (detailed → synthetic fallback → fail-closed)
          → validation résolution CKC
            → signaux explicites
              → QualifyCycle (domaine)
                → résultat read-only (exploitable seulement si CKC valide)
                  → futurs delivery / QA / readiness avec preuve CKC tracée
```

Aucun flux inverse ne crée une décision Morris, un gate, ni un CycleInstance en V3.1.

## H. Contrat conceptuel CycleTypeDefinition

### H.1 Noyau minimal **avec socle CKC obligatoire** (CAT-03 adopté)

| Champ | Rôle | Obl. | Mutable | Consommateur |
|-------|------|------|---------|--------------|
| `cycleTypeId` | Identité stable | oui | **non** | UI · T-A2 · CKC · instances |
| `canonicalKey` | Clé stable non localisée (traçabilité harness/méthode) | oui | non* | Sync · gouvernance |
| `label` | Libellé FR initial | oui | oui | UI |
| `shortDescription` | Aide courte | oui | oui | UI |
| `displayOrder` | Ordre affichage | oui | oui | UI |
| `lifecycleStatus` | active \| deprecated \| unavailable | oui | gouverné | UI · validate |
| `methodCycleNumber` | 1…15 | oui | non* | Traçabilité |
| `methodReference` / provenance | Pointeur doctrinal | oui | oui | Audit |
| `ckcLevel` | detailed \| synthetic \| … | oui | gouverné | Resolver · orchestration |
| `ckcReference` / clé résolution | Cible pilote ou clé stable | oui | gouverné | Resolver |
| `ckcFallbackPolicy` | Politique fallback (ex. synthetic map) | oui | gouverné | Resolver |
| Exigences statut résolution | Règles valid / invalid / unavailable | oui | gouverné | Orchestration |

\* = gate Morris + migration.

**Historique :** la recommandation initiale « CKC en extension » est **corrigée** par Morris → CKC dans le noyau obligatoire.

### H.2 Extension optionnelle (hors noyau)

`category` · `aliases` · `deprecatedAt` / `replacedBy` · `availability` — selon CAT-04/lifecycle. Pas de profil/gate/décision/autorité.

**Contrat fonctionnel ≠ structure TypeScript** : choix de fichiers/classes/stockage = delivery futur.

## I. Contrat conceptuel CycleTypeCatalog

Opérations inchangées conceptuellement + exigences :

- `validateCycleTypeId` fail-closed unknown/deprecated.
- Métadonnées CKC présentes pour chaque entrée active.
- Fingerprint / version catalogue.
- Unavailable → bloque sélection · pas de texte libre.

## J. Invariants

1–16 (précédents) conservés, **plus** :

17. Métadonnées CKC **obligatoires** par type actif.
18. Pilote détaillé **prioritaire** s’il existe.
19. Fallback synthétique **obligatoire** sinon.
20. Invalid/unavailable **sans** fallback valide → **stop** fail-closed.
21. Aucun cycle déclaré executable / ready for delivery / QA / production **sans** CKC résolu et consommé.
22. `executionAuthority=false` toujours.
23. Identité du type **indépendante** du statut CKC (l’identité reste ; l’exploitabilité produit est bloquée).
24. Quinze `cycleTypeId` CAT-I1 **adoptés contractuellement**.

## K. Options de source de vérité

Options historiques CAT-S1…S4 conservées.

Recommandation historique : CAT-S1.

**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.** (aligne la recommandation)

## L. Options de stratégie d’identifiants

Options historiques CAT-I1…I4 conservées.

Recommandation historique : CAT-I1.

**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.**

## M. Mapping des quinze IDs — **ADOPTÉ**

**Stratégie :** CAT-I1. Exactement quinze entrées.
Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — NOT YET IMPLEMENTED`**.
`cyc:capitalization` : valeur et sens **inchangés**.

| # | Nom canonique | cycleTypeId | Label FR | Description courte | Ordre | CKC path | Source |
|---|---------------|-------------|---------|--------------------|-------|----------|--------|
| 1 | Cadrage | `cyc:framing` | Cadrage | Clarifier intention, périmètre, contraintes | 1 | pilot detailed | §4.1 |
| 2 | Conception fonctionnelle | `cyc:functional-design` | Conception fonctionnelle | Usages, règles, objets métier | 2 | pilot detailed | §4.2 |
| 3 | Architecture fonctionnelle | `cyc:functional-architecture` | Architecture fonctionnelle | Structure, flux, découpage | 3 | synthetic fallback | §4.3 |
| 4 | UX/UI | `cyc:ux-ui` | UX/UI | Expérience et interface | 4 | synthetic | §4.4 |
| 5 | Backlog / user stories | `cyc:backlog` | Backlog / user stories | Stories testables | 5 | synthetic | §4.5 |
| 6 | Architecture technique | `cyc:technical-architecture` | Architecture technique | Stack, patterns, ADR | 6 | pilot detailed | §4.6 |
| 7 | Intégration / DevOps | `cyc:integration-devops` | Intégration / DevOps | CI/CD, environnements | 7 | synthetic | §4.7 |
| 8 | Delivery / implémentation | `cyc:delivery` | Delivery / implémentation | Implémentation bornée | 8 | synthetic | §4.8 |
| 9 | QA / validation | `cyc:qa-validation` | QA / validation | Preuves et réserves | 9 | pilot detailed | §4.9 |
| 10 | Sécurité / RSSI | `cyc:security` | Sécurité / RSSI | Menaces et contrôles | 10 | synthetic | §4.10 |
| 11 | Déploiement / release | `cyc:release` | Déploiement / release | Release contrôlée | 11 | synthetic | §4.11 |
| 12 | Observabilité / RUN readiness | `cyc:observability` | Observabilité / RUN readiness | Exploitabilité mesurable | 12 | synthetic | §4.12 |
| 13 | PR readiness | `cyc:pr-readiness` | PR readiness | Branche prête à PR | 13 | synthetic | §4.13 |
| 14 | Post-merge | `cyc:post-merge` | Post-merge | Clôture après merge | 14 | synthetic | §4.14 |
| 15 | Capitalisation / REX | `cyc:capitalization` | Capitalisation / REX | Apprentissage réutilisable | 15 | synthetic | §4.15 · **préexistant OA** |

`canonicalKey` harness (`cadrage` … `capitalisation-rex`) = **traçabilité uniquement**, jamais `cycleTypeId`.

## N. Gouvernance et cycle de vie (CAT-04 / CAT-05)

| Événement | Règle |
|-----------|-------|
| Ajout type / ID / dépréciation / remplacement / alias structurant / mapping doctrinal / impact instances | **Gate Morris** |
| Label / description non structurants | Revue documentaire proportionnée |
| Alias | 1→1 · pas d’ambiguïté · pas de recyclage · `replacedBy` valide |
| Alias initiaux | Absents OK tant qu’aucune migration |
| Suppression | Interdite si référencé |
| Rewrite silencieux instances | **Interdit** |

## O. Localisation (CAT-06)

ID neutre · labels FR · futur multi · jamais de traduction dans l’ID · fallback label explicite · changement de label sans changement d’identité.

## P. Relation avec T-A2

- QualifyCycle reste une fonction de domaine (profil depuis signaux).
- Le **parcours produit** ne présente pas le résultat comme contractuellement exploitable / executable tant que la résolution CKC obligatoire n’est pas valide.
- `capitalizationViaCycleTypeId` inchangé pour `cyc:capitalization`.
- CreateCycle hors V3.1.
- **Aucun changement code T-A2 dans ce cycle.**

## Q. Relation avec CKC (CAT-07 corrigé)

**Historique :** recommandation « résolution séparée / métadonnée informative » — **corrigée** par Morris.

| Règle | Position |
|-------|----------|
| CKC dans le mécanisme produit | **Obligatoire** |
| Candidate | Maturité projet/doctrine · **≠ optionnel** · **≠ baseline méthode globale** |
| Chemin de résolution | Obligatoire pour tout type |
| Priorité | Pilote détaillé si existant |
| Fallback | Synthétique obligatoire sinon |
| Fail-closed | Invalid/unavailable sans fallback valide |
| Ready / executable / delivery / QA / production | Exige CKC résolu et consommé |
| Traçabilité | Conception → prompt → delivery → QA → readiness → production |
| `executionAuthority` | **false** |
| Décision / gate Morris | **Non** |
| Remplace routing/template/guardrails | **Non** |
| Resolver | Responsabilité distincte possible · **consommation obligatoire** |
| UI | État de résolution pertinent · **pas** questionnaire CKC brut |
| Identité type | Indépendante du statut CKC |

## R. Relation avec l’UI

Liste contrôlée · pas de hardcode · labels du catalogue · états loading/unavailable/unknown · état CKC · pas de moteur de type · ID masquable.

## S. Erreurs et recovery

Ajouts CKC :

| Situation | Comportement |
|-----------|--------------|
| CKC invalid / unavailable sans fallback | Stop fail-closed · pas d’exploitabilité produit |
| Fallback synthétique manquant | Stop · corriger contrat catalogue |
| CKC non consommé / non tracé | Cycle non ready |

Autres erreurs catalogue (unavailable, unknown, duplicate, alias, drift, capitalization mismatch) inchangées · pas de fallback silencieux.

## T. Compatibilité et migration

Fenêtre pré-persistance · IDs adoptés contractuellement · runtime pending · alias/`replacedBy` post-persistance · fixtures ≠ catalogue.

## U. Slicing delivery (CAT-08 adopté — non ouvert)

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Adopté comme slicing** · delivery **non commencé** |
| **V3.1-D2** | Projection · validate ID · résolution CKC obligatoire · QualifyCycle bridge read-only | Adopté · non commencé |
| **V3.1-D3** | UI Profile Qualification · type/profil/justification/disclosures/état CKC | Adopté · non commencé · réserve Figma |

Pas de CreateCycle en V3.1 · V3.2 = create explicite futur.
Fusion D1/D2/D3 = nouvel arbitrage Morris.

## V. Decision pack Morris — détail

### D-V3.1-CAT-01 — Source de vérité

Options : CAT-S1…S4. Recommandation historique : CAT-S1.
**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-02 — Identifiants

Options : CAT-I1…I4. Recommandation historique : CAT-I1.
**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.** Mapping §M adopté.

### D-V3.1-CAT-03 — Noyau métadonnées

Options historiques : minimal / étendu. Recommandation historique : minimal sans CKC obligatoire.
**Décision : MINIMAL_WITH_MANDATORY_CKC_CORE — DECIDED — ADOPTED BY MORRIS.**
**Enrichit** la recommandation initiale (CKC dans le noyau).

### D-V3.1-CAT-04 — Alias

Options : sans / contrôlés / migration forcée. Recommandation : contrôlés.
**Décision : CONTROLLED_ALIASES — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-05 — Gouvernance

Recommandation : Morris structural.
**Décision : MORRIS_FOR_STRUCTURAL_CHANGES — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-06 — Localisation

Recommandation : ID neutre + labels.
**Décision : NEUTRAL_ID_LOCALIZED_LABELS — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-07 — CKC

Recommandation historique : résolution séparée / référence optionnelle.
**Décision : INTEGRATED_MANDATORY_CKC_MECHANISM — DECIDED — ADOPTED BY MORRIS.**
**Corrige** la recommandation initiale.

### D-V3.1-CAT-08 — Slicing

Recommandation : D1→D2→D3.
**Décision : D1_THEN_D2_THEN_D3 — DECIDED — ADOPTED BY MORRIS.**

## W. Recommandation historique — **ARBITRÉE / CONSOMMÉE**

La recommandation §W initiale a été acceptée pour CAT-01/02/04/05/06/08, **enrichie** pour CAT-03, **corrigée** pour CAT-07. Source de décision = Morris.

## X. Résolution de la réserve

| Aspect | État |
|--------|------|
| Source / IDs / métadonnées / CKC / gouvernance / slicing | **Décidés** |
| R-V3.1-CATALOG-01 | **RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL** |
| Runtime catalogue / resolver | **Pending** |
| Delivery D1 | **Requires separate GO** · **not authorized** |

## Y. Risques et réserves

Runtime absent · divergence méthode/catalogue · dette migration · alias · localisation · sur-architecture delivery · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

## Z. Anti-claims

- Adoption contractuelle ≠ implémentation runtime.
- IDs adoptés ≠ registry disponible.
- CKC obligatoire ≠ baseline méthode globale.
- CKC obligatoire ≠ autorité d’exécution.
- Candidate ≠ optionnel (dans le produit candidate).
- Type ≠ profil · catalogue ≠ moteur · recommandation ≠ décision.
- Delivery **non** autorisé.
- Pas PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

## AA. Verdict

**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

Statut : **READY FOR DELIVERY D1 DECISION**

---

# FULL FILE (final): README

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3 ARBITRATION COMPLETE — V3.1 DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
| **Date** | 2026-07-30 20:29:00 CEST (+0200) |
| **Cycle courant** | 3 — Architecture fonctionnelle (adoption catalogue + correction CKC) |
| **Profil** | **Critical** |
| **Typologie** | DOC |
| **Gate courant** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG …` **consommé** (2026-07-30 20:23 CEST) |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Code applicatif** | **aucune modification** |
| **Docs** | `12` inchangé · `13` scoped · `14` adoption enregistrée |

## Objectif

Parcours cible : **Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard** — cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent, sans delivery/cutover autorisés.

## Synthèse d’état

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 arbitrage D-V3 | terminé (`12`) |
| V3.1 conception | terminée (`13`) |
| V3.1 catalogue | **D-V3.1-CAT-01…08 adoptées** (`14`) |
| R-V3.1-CATALOG-01 | **résolue au niveau contrat/arbitrage** · runtime pending |
| CKC | **obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` · ≠ baseline méthode globale |
| V3.1-D1 / D2 / D3 | slicing adopté · **non commencés** |
| V3.2 / V4–V6 | non autorisés |

**Runtime catalogue / resolver : absents.** IDs contractuels adoptés · **pas implémentés**.

## Décisions Morris (synthèse)

### D-VS / D-V3

D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées (`12`).

### D-V3.1-CAT — adoptées 2026-07-30 20:23 CEST

| ID | Décision |
|----|----------|
| CAT-01 | CAT-S1 — contrat Git catalogue |
| CAT-02 | CAT-I1 — quinze IDs `cyc:<english-slug>` · `cyc:capitalization` inchangé |
| CAT-03 | MINIMAL_WITH_MANDATORY_CKC_CORE |
| CAT-04 | CONTROLLED_ALIASES |
| CAT-05 | MORRIS_FOR_STRUCTURAL_CHANGES |
| CAT-06 | NEUTRAL_ID_LOCALIZED_LABELS |
| CAT-07 | INTEGRATED_MANDATORY_CKC_MECHANISM |
| CAT-08 | D1_THEN_D2_THEN_D3 |

Détail : `14`.

## Figma / process-local

Contrat Git temporaire · D-VS-05 non consommée · réévaluation avant D3 · process-local maintenu.

## Index

| Doc | Sujet |
|-----|-------|
| `01`–`11` | Framing historique + V1 |
| `12` | V3 cadrage + arbitrage |
| `13` | V3.1 conception fonctionnelle |
| `14` | V3.1 catalogue — architecture + **adoption** |

## Gate candidat suivant

`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

## Verdict

`V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED`

---

# FULL FILE (final): 08

# 08 — Implementation backlog and slicing

## Stratégie

Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

## Lot V1 / V2

**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

## Lot V3 — Cycle Recommendation

**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md). D-V3 adoptées.

## Lot V3.1 — Profile Qualification (conception)

**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

**DECISIONS ADOPTED — CONTRACT LEVEL** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

| Item | État |
|------|------|
| D-V3.1-CAT-01…08 | `DECIDED — ADOPTED BY MORRIS` |
| Quinze IDs CAT-I1 | Adoptés contractuellement · **non implémentés** |
| CKC | Obligatoire intégré · candidate ≠ optionnel · `executionAuthority=false` |
| R-V3.1-CATALOG-01 | **RESOLVED AT CONTRACT/ARBITRATION LEVEL** · runtime pending |
| Registry / resolver runtime | **Absent** |

### Slicing adopté (CAT-08) — non commencé

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | Candidat · **non ouvert** |
| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | Après D1 |
| **V3.1-D3** | UI Profile Qualification · état CKC | Après D2 · réserve Figma |

### Critères d’entrée V3.1-D1

1. GO delivery D1 distinct.
2. Respect contrat `14` (IDs + CKC metadata).
3. Aucun QualifyCycle bridge / UI / CreateCycle dans D1.
4. Pas de promotion CKC baseline méthode globale.
5. Tests bornés au catalogue + mapping CKC (au delivery).
6. `.tmp-sfia-review/**` hors commit.

### Gates

- Structurants catalogue : Morris (CAT-05).
- Delivery D1/D2/D3 : GO distincts.
- Fusion d’incréments : nouvel arbitrage.

## Lot V3.2 — CreateCycle

**NOT AUTHORIZED.**

## Lots V4 / V5 / V6

**NOT AUTHORIZED.**

## Note

D1 **non commencé**. Catalogue **non implémenté**. Resolver **non implémenté**.

---

# CURRENT-CYCLE DIFF README

--- .tmp-sfia-review/before/README.md	2026-07-30 20:29:15
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md	2026-07-30 20:30:46
@@ -2,143 +2,74 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3 ARBITRATION COMPLETE — V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG ARCHITECTURE CONTRACT PRODUCED — MORRIS CATALOG DECISIONS PENDING — DELIVERY NOT AUTHORIZED` |
-| **Date** | 2026-07-30 19:35:00 CEST (+0200) |
-| **Cycle courant** | 3 — Architecture fonctionnelle V3.1 Cycle Type Catalog |
+| **Statut** | `FRAMING LIVING — V3 ARBITRATION COMPLETE — V3.1 DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
+| **Date** | 2026-07-30 20:29:00 CEST (+0200) |
+| **Cycle courant** | 3 — Architecture fonctionnelle (adoption catalogue + correction CKC) |
 | **Profil** | **Critical** |
 | **Typologie** | DOC |
-| **Gate courant** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG …` **consommé** |
+| **Gate courant** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG …` **consommé** (2026-07-30 20:23 CEST) |
 | **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
-| **Code applicatif (ce cycle)** | **aucune modification** |
-| **Docs protégées** | `12` **inchangé** · `13` règles fonctionnelles intactes (réf. catalogue + réserve requalifiée uniquement) |
+| **Code applicatif** | **aucune modification** |
+| **Docs** | `12` inchangé · `13` scoped · `14` adoption enregistrée |

 ## Objectif

-Cadrer le premier parcours **réellement visible et compréhensible** :
+Parcours cible : **Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard** — cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent, sans delivery/cutover autorisés.

-**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**
-
-en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.
-
 ## Synthèse d’état

 | Lot | État |
 |-----|------|
-| V1 / V2-A1 / V2-A2 / V2-A3 | intégrés sur `main` |
-| V3 — Cycle Recommendation | cadrage + arbitrage D-V3 (`12`) |
-| V3.1 — Profile Qualification | conception fonctionnelle (`13`) |
-| V3.1 — Cycle Type Catalog | **contrat d’architecture** (`14`) · **D-V3.1-CAT NOT DECIDED** |
-| R-V3.1-CATALOG-01 | contrat produit · **toujours bloquante** avant arbitrage |
-| V3.1 delivery / V3.2 / V4–V6 | **non autorisés** |
+| V1 / V2 | intégrés `main` |
+| V3 arbitrage D-V3 | terminé (`12`) |
+| V3.1 conception | terminée (`13`) |
+| V3.1 catalogue | **D-V3.1-CAT-01…08 adoptées** (`14`) |
+| R-V3.1-CATALOG-01 | **résolue au niveau contrat/arbitrage** · runtime pending |
+| CKC | **obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` · ≠ baseline méthode globale |
+| V3.1-D1 / D2 / D3 | slicing adopté · **non commencés** |
+| V3.2 / V4–V6 | non autorisés |

-**Contrat vs décision :** le document `14` produit options, mapping candidat et decision pack. **Aucun identifiant ni source n’est adopté** tant que Morris n’arbitre pas D-V3.1-CAT-01…08.
+**Runtime catalogue / resolver : absents.** IDs contractuels adoptés · **pas implémentés**.

-### Contexte UI historique (inchangé)
+## Décisions Morris (synthèse)

-Trois stacks UI coexistent et **ne sont pas unifiées** :
+### D-VS / D-V3

-1. **VS POC** — StudioShell + fixtures/harness.
-2. **OPS1** — session conversationnelle legacy.
-3. **D1** — workspace/intake SQLite local.
+D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées (`12`).

-Le vertical-slice runtime expose **create/get Project** uniquement — pas Qualify/Create cycle · **pas de catalogue runtime**.
+### D-V3.1-CAT — adoptées 2026-07-30 20:23 CEST

-## Scope / hors scope
+| ID | Décision |
+|----|----------|
+| CAT-01 | CAT-S1 — contrat Git catalogue |
+| CAT-02 | CAT-I1 — quinze IDs `cyc:<english-slug>` · `cyc:capitalization` inchangé |
+| CAT-03 | MINIMAL_WITH_MANDATORY_CKC_CORE |
+| CAT-04 | CONTROLLED_ALIASES |
+| CAT-05 | MORRIS_FOR_STRUCTURAL_CHANGES |
+| CAT-06 | NEUTRAL_ID_LOCALIZED_LABELS |
+| CAT-07 | INTEGRATED_MANDATORY_CKC_MECHANISM |
+| CAT-08 | D1_THEN_D2_THEN_D3 |

-**Dans le scope (cible produit local borné)** : création Project/LPS · doctrine T-A0 · qualification T-A2 · décision locale T-A3 · dashboard T-A6/T-A7 · historique borné.
+Détail : `14`.

-**Hors scope** : IAM · Critical ack réel · agent réel · persistance produit · delivery/cutover · HARD/T-A6/B5/R1 · nouveau design system · registry catalogue runtime (avant arbitrage).
+## Figma / process-local

-## Parcours cible (résumé)
+Contrat Git temporaire · D-VS-05 non consommée · réévaluation avant D3 · process-local maintenu.

-1. Arrivée — disclosure · CTA Créer un projet
-2. Création — T-A0+T-A1
-3. Fiche projet — workspace
-4. Recommandation — T-A2 (conception ✓ · catalogue contrat ✓ · delivery ✗)
-5. Décision Morris — V4
-6. Readiness dashboard — V5
-7. Historique borné
+## Index

-## Architecture (résumé)
-
-```text
-UI (StudioShell + screens)
-  → VerticalSliceFacade
-    → ports T-A0…T-A7
-      → adapters mémoire OA
-        → UI projections read-only
-```
-
-Catalogue (cible post-arbitrage) : Méthode → Contrat catalogue → Projection → UI → `cycleTypeId` validé → QualifyCycle. Voir `14`.
-
-## Figma
-
-| Item | Valeur |
-|------|--------|
-| Contrat visuel | **Git** temporaire |
-| D-VS-05 | `NOT DECIDED — NOT CONSUMED` |
-| Écriture Figma | **non** |
-| Réévaluation | avant UI substantielle (D-V3-07) |
-
-## Backlog recommandé
-
-V1 → V2 → V3 arbitrage → V3.1 design → **catalogue archi contrat (`14`) → arbitrage D-V3.1-CAT** → delivery V3.1 → V3.2 CreateCycle → V4 → V5 → V6.
-
-## Décisions Morris
-
-### D-VS (historique)
-
-| ID | Statut |
-|----|--------|
-| D-VS-01…04 | `DECIDED — ADOPTED BY MORRIS` |
-| D-VS-05 | `NOT DECIDED — NOT CONSUMED` |
-
-### D-V3 (adoptées)
-
-| ID | Option | Statut |
-|----|--------|--------|
-| D-V3-01…08 | voir `12` | `DECIDED — ADOPTED BY MORRIS` |
-
-### D-V3.1-CAT (catalogue) — **NOT DECIDED**
-
-| ID | Sujet | Statut |
-|----|-------|--------|
-| D-V3.1-CAT-01 | Source de vérité | `NOT DECIDED` |
-| D-V3.1-CAT-02 | Stratégie d’identifiants | `NOT DECIDED` |
-| D-V3.1-CAT-03 | Noyau métadonnées | `NOT DECIDED` |
-| D-V3.1-CAT-04 | Dépréciation / alias | `NOT DECIDED` |
-| D-V3.1-CAT-05 | Gouvernance | `NOT DECIDED` |
-| D-V3.1-CAT-06 | Localisation | `NOT DECIDED` |
-| D-V3.1-CAT-07 | Mapping CKC | `NOT DECIDED` |
-| D-V3.1-CAT-08 | Slicing delivery | `NOT DECIDED` |
-
-Détail et recommandations non décidées : `14`.
-
-## Anti-claims
-
-- Contrat catalogue ≠ implémentation ≠ IDs adoptés
-- Conception / architecture ≠ delivery autorisé
-- Recommandation ≠ décision Morris
-- Type ≠ profil
-- HARD/T-A6 ouverts
-
-## Index du pack
-
 | Doc | Sujet |
 |-----|-------|
 | `01`–`11` | Framing historique + V1 |
-| `12` | V3 Cycle Recommendation — cadrage + arbitrage |
-| `13` | V3.1 Profile Qualification — conception fonctionnelle |
-| `14` | **V3.1 Cycle Type Catalog — architecture fonctionnelle** |
+| `12` | V3 cadrage + arbitrage |
+| `13` | V3.1 conception fonctionnelle |
+| `14` | V3.1 catalogue — architecture + **adoption** |

 ## Gate candidat suivant

-`GO ARBITRATE SFIA STUDIO V3.1 CYCLE TYPE CATALOG DECISIONS D-V3.1-CAT-01 TO D-V3.1-CAT-08`
+`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

-**Aucun delivery automatique.**
-
 ## Verdict

-`R-V3.1-CATALOG-01 RESOLUTION CONTRACT COMPLETE — MORRIS CATALOG DECISIONS REQUIRED — DELIVERY NOT AUTHORIZED`
+`V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED`

---

# CURRENT-CYCLE DIFF 08

--- .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md	2026-07-30 20:29:15
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md	2026-07-30 20:30:46
@@ -1,78 +1,64 @@
 # 08 — Implementation backlog and slicing

-## Stratégie de livraison (recommandation, non décision)
+## Stratégie

-**Plusieurs PR** (lots V1…V5), chacune mergeable ; commits atomiques 1–3.
-Branche framing docs séparée. Pas de big-bang unique.
+Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

-## Lot V1 — Composition locale Project
+## Lot V1 / V2

-**Statut** : `INTEGRATED ON MAIN`. Voir `11`.
+**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

-## Lot V2 — Create Project + Workspace (A1 / A2 / A3)
+## Lot V3 — Cycle Recommendation

-**Statut** : `INTEGRATED ON MAIN` (PR #295 @ `3e8a437…`).
+**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md). D-V3 adoptées.

-## Lot V3 — Cycle Recommendation (cadrage + arbitrage)
+## Lot V3.1 — Profile Qualification (conception)

-**Statut** : `CADRAGE + ARBITRATION COMPLETE` — [`12`](./12-v3-cycle-recommendation-cadrage.md).
-D-V3-01…08 adoptées. Aucun delivery.
+**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

-## Lot V3.1 — Profile Qualification UI (read-only)
+## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

-**Statut** : `FUNCTIONAL DESIGN COMPLETE` — [`13`](./13-v3-1-profile-qualification-functional-design.md).
+**DECISIONS ADOPTED — CONTRACT LEVEL** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

-| Item | Contenu |
-|------|---------|
-| Objectif | Type sélectionné · six signaux · QualifyCycle · disclosures |
-| Invariants | Pas CreateCycle · pas LPS link · pas epistemic · pas requestedProfile |
-| Delivery | **non ouvert** |
+| Item | État |
+|------|------|
+| D-V3.1-CAT-01…08 | `DECIDED — ADOPTED BY MORRIS` |
+| Quinze IDs CAT-I1 | Adoptés contractuellement · **non implémentés** |
+| CKC | Obligatoire intégré · candidate ≠ optionnel · `executionAuthority=false` |
+| R-V3.1-CATALOG-01 | **RESOLVED AT CONTRACT/ARBITRATION LEVEL** · runtime pending |
+| Registry / resolver runtime | **Absent** |

-## Lot V3.1 — Cycle Type Catalog (architecture fonctionnelle)
+### Slicing adopté (CAT-08) — non commencé

-**Statut** : `ARCHITECTURE CONTRACT COMPLETE — MORRIS DECISIONS REQUIRED` — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).
+| Lot | Contenu | Statut |
+|-----|---------|--------|
+| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | Candidat · **non ouvert** |
+| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | Après D1 |
+| **V3.1-D3** | UI Profile Qualification · état CKC | Après D2 · réserve Figma |

-| Item | Contenu |
-|------|---------|
-| Objectif | Résoudre R-V3.1-CATALOG-01 au niveau contrat |
-| Produit | Inventaire · options source/IDs · mapping candidat 15 · invariants · gouvernance · decision pack |
-| D-V3.1-CAT-01…08 | **NOT DECIDED** |
-| R-V3.1-CATALOG-01 | Contrat produit · **toujours bloquante** avant arbitrage |
-| Implémentation / registry | **non** |
+### Critères d’entrée V3.1-D1

-### Critères d’entrée delivery V3.1 (futurs)
+1. GO delivery D1 distinct.
+2. Respect contrat `14` (IDs + CKC metadata).
+3. Aucun QualifyCycle bridge / UI / CreateCycle dans D1.
+4. Pas de promotion CKC baseline méthode globale.
+5. Tests bornés au catalogue + mapping CKC (au delivery).
+6. `.tmp-sfia-review/**` hors commit.

-1. Arbitrage Morris D-V3.1-CAT-01…08.
-2. Mapping / source adoptés (plus seulement candidats).
-3. GO delivery V3.1 distinct.
-4. Conception `13` respectée.
-5. Pas d’élargissement V3.2 / LPS / épistémique.
-6. Réévaluation Figma si UI substantielle.
+### Gates

-### Slicing delivery candidat (après arbitrage — NOT DECIDED)
+- Structurants catalogue : Morris (CAT-05).
+- Delivery D1/D2/D3 : GO distincts.
+- Fusion d’incréments : nouvel arbitrage.

-| Lot | Contenu |
-|-----|---------|
-| V3.1-D1 | Contrat/registry runtime catalogue |
-| V3.1-D2 | Projection read-only + QualifyCycle bridge |
-| V3.1-D3 | UI Profile Qualification |
+## Lot V3.2 — CreateCycle

-## Lot V3.2 — CreateCycle explicite
+**NOT AUTHORIZED.**

-**Statut** : `NOT AUTHORIZED`.
+## Lots V4 / V5 / V6

-## Lot V4 — Morris Decision
+**NOT AUTHORIZED.**

-**Statut** : `NOT AUTHORIZED`.
+## Note

-## Lot V5 — Readiness Dashboard
-
-**Statut** : `NOT AUTHORIZED`.
-
-## Lot V6 — Consolidation visuelle
-
-**Statut** : `NOT AUTHORIZED`.
-
-## Historique D-VS-04
-
-V1→V2 intégrés. V3 arbitrage terminé. V3.1 design + contrat catalogue produits. Delivery non ouvert. Catalogue **non implémenté**.
+D1 **non commencé**. Catalogue **non implémenté**. Resolver **non implémenté**.

---

# CURRENT-CYCLE DIFF 13

--- .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md	2026-07-30 20:29:15
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md	2026-07-30 20:30:46
@@ -14,8 +14,8 @@
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
 | **CKC** | `pilots/02-conception-fonctionnelle.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
 | **Document d’arbitrage hérité** | `12-v3-cycle-recommendation-cadrage.md` (**lecture seule** — non modifié) |
-| **Architecture catalogue** | `14-v3-1-cycle-type-catalog-functional-architecture.md` — contrat produit · décisions Morris pending |
-| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG ARCHITECTURE CONTRACT PRODUCED — MORRIS CATALOG DECISIONS PENDING — DELIVERY NOT AUTHORIZED` |
+| **Architecture catalogue** | `14` — décisions D-V3.1-CAT **adoptées** · CKC obligatoire intégré · runtime **non** implémenté |
+| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
 | **Commit / push / PR projet** | **non** |
 | **Code / tests / Figma** | **non modifiés** |

@@ -32,7 +32,7 @@
 | D-V3-07 = 1 + réserve | Contrat Git temporaire | Aucune frame Figma baseline ; réévaluation avant UI substantielle |
 | D-V3-08 = 1 | Slicing progressif | V3.1 = read-only · V3.2 = create explicite |

-**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · **R-V3.1-CATALOG-01** (contrat d’architecture produit · arbitrage Morris pending · **toujours bloquante delivery** — voir `14`).
+**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · runtime catalogue / resolver **pending** (contrat + arbitrage résolus — voir `14`).

 ## C. Objectif fonctionnel et valeur

@@ -163,21 +163,21 @@
 | Schema CycleType modélisé | Entité citée ; **pas** de registry runtime des 15 | Absent |
 | D1 intake `proposedCycleType` | Valeurs ad hoc (ex. `FRAMING`) | Stack legacy — **hors** vertical-slice |

-### Réserve bloquante (requalifiée)
+### Réserve catalogue (requalifiée)

-**R-V3.1-CATALOG-01 — Source runtime du catalogue `cycleTypeId` absente / non canonique.**
+**R-V3.1-CATALOG-01**

 | Aspect | État |
 |--------|------|
-| Constat initial | inchangé — pas de registry runtime des 15 |
-| Contrat d’architecture | **produit** — [`14-v3-1-cycle-type-catalog-functional-architecture.md`](./14-v3-1-cycle-type-catalog-functional-architecture.md) |
-| Decision pack | D-V3.1-CAT-01…08 **NOT DECIDED** |
-| Réserve | **toujours bloquante** jusqu’à arbitrage Morris |
-| Delivery | **non autorisé** |
+| Constat runtime | Registry des 15 **toujours absente** (non implémentée) |
+| Contrat + arbitrage | **RESOLVED** — D-V3.1-CAT-01…08 adoptées (`14`) |
+| IDs | Quinze CAT-I1 **adoptés contractuellement** · non implémentés |
+| CKC | **Obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` |
+| Delivery D1 | **Non autorisé** — GO distinct requis |

-- Le delivery V3.1 **ne peut pas** inventer ni coder des IDs dans React.
-- Les labels méthode / harness peuvent informer le mapping ; ils ne le remplacent pas.
-- Les règles, critères d’acceptation et scénarios de ce document **13** restent inchangés.
+- L’UI ne hardcode pas de liste d’autorité.
+- Le résultat de QualifyCycle n’est **contractuellement exploitable** dans le parcours produit qu’avec une résolution CKC **valide** (detailed ou synthetic fallback).
+- Les règles de qualification, CA et scénarios ci-dessous restent inchangés.

 ## J. Contrat des signaux

@@ -315,15 +315,18 @@

 | Intégration | Rôle |
 |-------------|------|
-| Project Workspace | Fournit le contexte projet / LPS read-only |
-| Catalogue contrôlé | Fournit type (id, label, description) |
-| T-A2 QualifyCycle | Calcule la recommandation de profil |
-| UI | Affiche une projection volatile |
+| Project Workspace | Contexte projet / LPS read-only |
+| Catalogue contrôlé (contrat `14`) | Type id/label/description + métadonnées CKC |
+| CKC Resolver | Résolution obligatoire · consommation orchestration · `executionAuthority=false` |
+| T-A2 QualifyCycle | Recommandation de profil (domaine) |
+| UI | Projection volatile · état CKC sans contrat brut |

 **Aucune** mutation projet, cycle, trajectoire, LPS ou épistémique.

-**Non défini ici :** Server Action précise · classes · fichiers · protocole · stockage.
+Le parcours produit ne présente pas le résultat de qualification comme contractuellement exploitable sans CKC valide.

+**Non défini ici :** Server Action · classes · fichiers · protocole · stockage.
+
 ## T. Accessibilité

 1. Navigation clavier complète de tous les contrôles.
@@ -422,7 +425,7 @@

 | ID | Risque / réserve | Sévérité |
 |----|------------------|----------|
-| R-V3.1-CATALOG-01 | Source runtime absente · contrat archi `14` produit · Morris pending | **Bloquante delivery** |
+| R-V3.1-CATALOG-01 | Contrat+arbitrage résolus · runtime pending | Delivery D1 bloqué jusqu’à GO |
 | R-V3.1-02 | Duplication méthode / scoring dans React | Haute — interdite |
 | R-V3.1-03 | Exposition codes rationale bruts | Moyenne |
 | R-V3.1-04 | Fausse influence objectif/scope | Haute |
@@ -441,9 +444,11 @@
 |-------|--------|
 | V3 cadrage + arbitrage | Terminé (`12`) |
 | V3.1 conception fonctionnelle | Terminée (`13`) |
-| V3.1 architecture catalogue | Contrat produit (`14`) · arbitrage Morris pending |
-| V3.1 delivery read-only | **Non ouvert** — après D-V3.1-CAT + GO delivery |
-| V3.2 CreateCycle explicite | Non ouvert |
+| V3.1 architecture + adoption catalogue | Terminée (`14`) · D-V3.1-CAT adoptées · CKC obligatoire |
+| V3.1-D1 catalogue runtime + CKC mapping | **Candidat** · non ouvert |
+| V3.1-D2 projection + resolver + QualifyCycle bridge | Après D1 |
+| V3.1-D3 UI | Après D2 · réserve Figma |
+| V3.2 CreateCycle | Non ouvert |
 | V4 décision Morris | Non ouvert |

 Aucun cycle suivant ouvert automatiquement.
@@ -451,23 +456,23 @@
 ## AA. Anti-claims

 - Conception fonctionnelle ≠ implémentation.
-- Profil recommandé ≠ type de cycle recommandé automatiquement.
+- IDs adoptés ≠ registry runtime.
+- CKC obligatoire ≠ baseline méthode globale ≠ autorité d’exécution.
+- Candidate ≠ optionnel (produit candidate).
+- Profil recommandé ≠ type recommandé automatiquement.
 - Recommandation ≠ décision Morris.
 - Read-only ≠ CycleInstance créé.
 - Résultat Critical ≠ autorisation.
 - Contrat Git ≠ Figma validé.
-- Contrat catalogue ≠ IDs adoptés ≠ runtime disponible.
 - Tests planifiés ≠ tests exécutés.
 - Aucun PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

 ## AB. Verdict

-**V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG ARCHITECTURE CONTRACT PRODUCED — MORRIS CATALOG DECISIONS PENDING — DELIVERY NOT AUTHORIZED**
+**V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**

 Prochain gate candidat (non ouvert) :

-`GO ARBITRATE SFIA STUDIO V3.1 CYCLE TYPE CATALOG DECISIONS D-V3.1-CAT-01 TO D-V3.1-CAT-08`
+`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

-Puis, après arbitrage catalogue : gate delivery V3.1 (inchangé dans son intention read-only).
-
-**Précondition delivery :** arbitrage **D-V3.1-CAT-01…08** + résolution effective de **R-V3.1-CATALOG-01** · réévaluation Figma selon D-V3-07.
+**Précondition D1 :** GO delivery distinct · respect contrat `14` · pas d’élargissement D2/D3/V3.2.

---

# CURRENT-CYCLE DIFF 14

--- .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md	2026-07-30 20:29:15
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md	2026-07-30 20:30:46
@@ -4,432 +4,359 @@

 | Champ | Valeur |
 |-------|--------|
-| **Date/heure/fuseau** | 2026-07-30 19:35:00 CEST (+0200) |
-| **Cycle** | 3 — Architecture fonctionnelle |
+| **Date/heure/fuseau** | 2026-07-30 20:29:00 CEST (+0200) |
+| **Cycle** | 3 — Architecture fonctionnelle (phase arbitrage / adoption / correction) |
 | **Profil** | **Critical** |
 | **Typologie** | DOC |
-| **GO Morris consommé** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG — RESOLVE R-V3.1-CATALOG-01 — CONTRACT ONLY — NO IMPLEMENTATION` |
+| **GO architecture (historique)** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG — RESOLVE R-V3.1-CATALOG-01 — CONTRACT ONLY — NO IMPLEMENTATION` (consommé) |
+| **GO adoption (consommé)** | voir Decision record Morris |
 | **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **CKC** | Pilote détaillé **absent** · fallback `02-fifteen-cycles-synthetic-map.md` · statut `method-candidate` · **aucune autorité d’exécution** |
-| **Entrées héritées** | `12` (arbitrage D-V3, lecture seule) · `13` (conception V3.1) |
-| **Statut documentaire** | `R-V3.1-CATALOG-01 RESOLUTION CONTRACT COMPLETE — MORRIS CATALOG DECISIONS REQUIRED — DELIVERY NOT AUTHORIZED` |
+| **CKC (ce cycle)** | Pilote détaillé **absent** · fallback carte synthétique + méthode §4.3 · `method-candidate` · **consommation obligatoire** · **executionAuthority=false** |
+| **Entrées héritées** | `12` (lecture seule) · `13` (conception V3.1) |
+| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
 | **Commit / push / PR projet** | **non** |
-| **Code / registry / Figma** | **non** |
+| **Code / registry / resolver / Figma** | **non** |

-## B. Problème et objectif
+## Decision record Morris

-### R-V3.1-CATALOG-01
+| Champ | Valeur |
+|-------|--------|
+| **Clarification Morris** | « par contre le CKC doit faire partie intégrante du mécanisme, c'est candidate parce que le projet lui meme est candidate mais c'est la base de la doctrine de ce produit, donc toute la doctrine meme si elle est candidate doit faire partie intégrante de la solution, de sa conception a sa réalisation, jusqu'a que la solution soit en production » |
+| **Confirmation Morris** | « pour le reste des décisions c'est ok » |
+| **GO formel** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG — D-V3.1-CAT-01=CAT-S1 — D-V3.1-CAT-02=CAT-I1 — D-V3.1-CAT-03=MINIMAL_WITH_MANDATORY_CKC_CORE — D-V3.1-CAT-04=CONTROLLED_ALIASES — D-V3.1-CAT-05=MORRIS_FOR_STRUCTURAL_CHANGES — D-V3.1-CAT-06=NEUTRAL_ID_LOCALIZED_LABELS — D-V3.1-CAT-07=INTEGRATED_MANDATORY_CKC_MECHANISM — D-V3.1-CAT-08=D1_THEN_D2_THEN_D3` |
+| **Date/heure/fuseau GO** | 2026-07-30 20:23 CEST (+0200) |

-**CYCLE TYPE CATALOG SOURCE REQUIRED BEFORE DELIVERY** — aucune source runtime canonique ne fournit les quinze définitions de cycle pour V3.1.
+| ID | Décision adoptée | Conséquence | Réserve | Statut |
+|----|------------------|-------------|---------|--------|
+| D-V3.1-CAT-01 | **CAT-S1** | Contrat Git catalogue = projection opérationnelle des 15 cycles méthode | Runtime non implémenté | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-02 | **CAT-I1** | Quinze IDs `cyc:<english-slug>` adoptés · `cyc:capitalization` inchangé | Runtime pending | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-03 | **MINIMAL_WITH_MANDATORY_CKC_CORE** | Noyau minimal **+** socle CKC obligatoire | Pas de sur-modélisation TS | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-04 | **CONTROLLED_ALIASES** | Alias 1→1 gouvernés · pas de recyclage | Alias initiaux absents OK | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-05 | **MORRIS_FOR_STRUCTURAL_CHANGES** | Gate Morris sur changements structurants | Labels non structurants : revue proportionnée | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-06 | **NEUTRAL_ID_LOCALIZED_LABELS** | ID neutre · labels FR · futur multi | Fallback label explicite | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-07 | **INTEGRATED_MANDATORY_CKC_MECHANISM** | CKC obligatoire dans le mécanisme produit · candidate ≠ optionnel | Candidate ≠ baseline méthode globale · `executionAuthority=false` | `DECIDED — ADOPTED BY MORRIS` |
+| D-V3.1-CAT-08 | **D1_THEN_D2_THEN_D3** | Trois incréments séparés adoptés | Delivery non ouvert | `DECIDED — ADOPTED BY MORRIS` |

-### Pourquoi ça bloque le delivery
+**Décision produit SFIA Studio :** le CKC est obligatoire de la conception à la production dans le produit candidate. Cela **ne** promeut **pas** les documents CKC en baseline officielle de la méthode SFIA globale.

-Sans contrat d’identifiants stables et de métadonnées, l’UI ne peut pas proposer une sélection contrôlée sans inventer des IDs, hardcoder des listes, ou dériver incorrectement depuis harness/méthode Markdown.
+## B. Problème et objectif

-### Résultat attendu de ce cycle
+### R-V3.1-CATALOG-01 (historique → requalifiée)

-Un **contrat d’architecture fonctionnelle** décisionnable : options, mapping candidat, invariants, gouvernance, decision pack Morris — **sans** adoption implicite ni implémentation.
+Historique : aucune source runtime canonique des quinze types.

+**État actuel :** résolue au **niveau contrat fonctionnel et arbitrage Morris**. Runtime / delivery D1 **pending** (GO distinct).
+
 ### Contrat ≠ implémentation

-Ce document ne crée aucun registre, constante, enum, fichier runtime, ni bridge.
+Ce document enregistre l’adoption. Il ne crée aucun registre, constante, enum, resolver, bridge ni UI.

-## C. Décisions d’entrée
+## C. Décisions d’entrée (D-V3 — inchangées)

-| Contrainte | Effet |
-|------------|-------|
-| D-V3-01=1 | Type sélectionné · profil T-A2 |
-| D-V3-02=1 | Catalogue contrôlé · pas de reco auto du type |
-| D-V3-03=2 | CreateCycle hors V3.1 |
-| D-V3-04=1 | Pas de lien LPS V3.1 |
-| D-V3-05=1 | Pas d’EpistemicItem Recommendation V3.1 |
-| D-V3-06 | Critical fail-closed |
-| D-V3-07=1 | Contrat Git · réserve Figma |
-| D-V3-08=1 | V3.1 read-only → V3.2 create |
-| Doc `13` | Règles fonctionnelles V3.1 inchangées |
-| T-A2 | QualifyCycle : profil seul · `cycleTypeId` optionnel · CreateCycle exige ID OA |
-| Préexistant | `cyc:capitalization` **immuable** dans le sens et la valeur |
+D-V3-01…08 restent adoptées (`12`). `cyc:capitalization` immuable. Type sélectionné · profil T-A2 · V3.1 read-only · pas CreateCycle / LPS / epistemic.

 ## D. Inventaire repo-informed

-| Source | Type | Identifiants | Autorité réelle | Usages | Compatibilité OA | Canonique ? | Risque |
-|--------|------|--------------|-----------------|--------|------------------|-------------|--------|
-| Méthode §3.1 + carte 15 cycles | Doc méthode | Noms FR 1…15 · pas d’IDs `cyc:` | Conceptuelle (candidate) | Référence humaine | N/A (pas d’IDs) | Conceptuelle | Divergence si non projetée |
-| Matrice CKC `04` | Doc méthode | Mapping # → CKC path/fallback | Guidance cognitive | Routage CKC | N/A | Non runtime | Couplage CKC trop tôt |
-| `CAPITALIZATION_CYCLE_TYPE_ID` | Constante domaine OA | `cyc:capitalization` | Domaine T-A2 | Flag capitalization | Pattern OA OK | **Oui (singleton)** | Doit être préservé |
-| `isOaIdentifier` / `validateCycleIds` | Invariants T-A2 | Pattern `prefix:…` · longueur | Domaine | CreateCycle | Oui | Règle technique | N’est pas un catalogue |
-| Tests OA (`cyc:delivery`, etc.) | Fixtures | IDs ad hoc | Aucune | Tests | Pattern OK | **Non** | Réutilisation erronée comme catalogue |
-| `SFIA_CYCLES` / `SFIA_CYCLE_LABELS` (harness) | Enum labels Increment C | Slugs FR sans `cyc:` | Harness qualification | Affichage / prompt | **Non** (pas OA) | **Non** | Autorité usurpée |
-| `sfiaCanonicalLabels.ts` (Studio) | Miroir labels | Mêmes slugs FR | Miroir harness | UI Increment C | Non | Non | Duplication |
-| D1 `proposedCycleType` | Legacy | Ex. `FRAMING` | Stack D1 | Intake | Non | Non | Confusion namespaces |
-| Entité CycleType (modeled) | Doc/schema candidate | Concept sans registry 15 | Modeled | Modélisation | Partiel | Non runtime | Sur-attente |
-| Registry runtime 15 types | — | — | — | — | — | **ABSENT** | Bloque delivery |
+*(inchangé dans le constat)* — registry runtime 15 **toujours absente** · harness non autorité · méthode = autorité conceptuelle · `cyc:capitalization` seul ID OA domaine explicite préexistant · fixtures test ≠ catalogue.

-**Sources absentes :** contrat catalogue versionné · projection runtime · mapping officiel harness↔OA · schema CycleType registry des 15.
+**Post-adoption :** les quinze IDs CAT-I1 sont **contractuels** (adoptés) mais **pas encore implémentés**.

-**Contradictions :** `capitalisation-rex` (harness) ≠ `cyc:capitalization` (OA) · fixtures `cyc:delivery` ≠ catalogue · doctrine « aucune lecture runtime `method/**` ».
-
-**Réutilisable :** noms canoniques méthode · labels FR harness (comme **labels**, pas IDs) · `cyc:capitalization` · pattern OA · CKC matrix (métadonnée informative).
-
 ## E. Principes d’architecture fonctionnelle

-1. **Méthode** = autorité conceptuelle des quinze cycles.
-2. **Contrat catalogue** = projection opérationnelle explicite et traçable.
-3. **Projection runtime** = consommation du contrat — pas inventaire parallèle.
-4. **UI** = sélection contrôlée · jamais sa propre liste hardcodée.
-5. **T-A2** = reçoit un `cycleTypeId` **déjà validé** · ne recommande pas le type.
-6. Identité stable ≠ label localisé.
+1. Méthode = autorité conceptuelle des 15 cycles.
+2. Contrat catalogue = projection opérationnelle traçable (**CAT-S1**).
+3. Projection runtime = consommation du contrat.
+4. UI = sélection contrôlée · aucune liste d’autorité hardcodée.
+5. T-A2 = reçoit un `cycleTypeId` validé · ne recommande pas le type.
+6. Identité ≠ label.
 7. Type ≠ profil.
 8. Catalogue ≠ moteur de recommandation.
 9. Recommandation ≠ décision Morris.
-10. Git = source de vérité documentaire / contractuelle.
-11. Fail-closed : unknown / unavailable bloquent sans fallback texte libre.
-12. Aucune lecture runtime Markdown méthode comme chemin recommandé.
+10. Git = source de vérité contractuelle.
+11. Fail-closed unknown / unavailable / CKC invalid sans fallback.
+12. Pas de parsing runtime Markdown méthode.
+13. **CKC obligatoire** dans l’orchestration produit (candidate ≠ optionnel).
+14. **CKC `executionAuthority=false`** · ne décide pas · ne consomme pas de gate.
+15. Candidate doctrine ≠ baseline méthode globale.

 ## F. Vue fonctionnelle des composants

-| Composant conceptuel | Responsabilité |
-|----------------------|----------------|
-| **SFIA Method Cycle Reference** | Définit les 15 cycles (noms, finalités) dans Git méthode |
-| **Cycle Type Catalog Contract** | Projection opérationnelle versionnée : IDs, labels, métadonnées, lifecycle |
-| **Cycle Type Catalog Projection** | Exposition read-only des entrées actives pour l’UI / validateurs |
-| **Project Workspace / Profile Qualification UI** | Sélection type + signaux · affiche labels du catalogue |
-| **T-A2 QualifyCycle** | Recommande profil depuis signaux · hint capitalization si ID connu |
-| **Futur T-A2 CreateCycle** | Persiste CycleInstance avec `cycleTypeId` validé |
-| **CKC Resolver** | Résolution cognitive par `cycleTypeId` · `executionAuthority=false` |
-| **Gouvernance Morris** | Adopte IDs, source, gouvernance, slicing delivery |
+| Composant | Responsabilité |
+|-----------|----------------|
+| **SFIA Method Cycle Reference** | 15 cycles conceptuels (méthode Git) |
+| **Cycle Type Catalog Contract** | IDs adoptés · labels · lifecycle · **métadonnées CKC obligatoires** |
+| **Cycle Type Catalog Projection** | Exposition read-only post-D1 |
+| **CKC Resolver** | Résout doctrine (detailed → synthetic → fail-closed) · `executionAuthority=false` · **consommation obligatoire** dans l’orchestration |
+| **Orchestration produit** | Exige résolution CKC valide avant résultat contractuellement exploitable / executable / ready |
+| **Profile Qualification UI** | Sélection type · signaux · profil · disclosures · **état CKC** (sans contrat brut) |
+| **T-A2 QualifyCycle** | Profil depuis signaux · indépendant du type · domaine |
+| **Futur CreateCycle** | Hors V3.1 · ID catalogue validé |
+| **Gouvernance Morris** | Changements structurants |

-## G. Flux fonctionnel
+## G. Flux fonctionnel (corrigé)

 ```text
 Méthode (15 cycles)
-  → (gouverné) Cycle Type Catalog Contract
+  → Cycle Type Catalog Contract (CAT-S1)
     → Cycle Type Catalog Projection
-      → UI (liste contrôlée)
-        → cycleTypeId validé + signaux explicites
-          → QualifyCycle → profil + rationale
-            → UI (projection volatile)
+      → sélection cycleTypeId (validé)
+        → résolution CKC obligatoire (detailed → synthetic fallback → fail-closed)
+          → validation résolution CKC
+            → signaux explicites
+              → QualifyCycle (domaine)
+                → résultat read-only (exploitable seulement si CKC valide)
+                  → futurs delivery / QA / readiness avec preuve CKC tracée
 ```

 Aucun flux inverse ne crée une décision Morris, un gate, ni un CycleInstance en V3.1.

 ## H. Contrat conceptuel CycleTypeDefinition

-### H.1 Noyau minimal (recommandé candidat)
+### H.1 Noyau minimal **avec socle CKC obligatoire** (CAT-03 adopté)

-| Champ | Rôle | Obl. | Mutable | Consommateur | Risque |
-|-------|------|------|---------|--------------|--------|
-| `cycleTypeId` | Identité stable | oui | **non** | UI · T-A2 · CKC · instances | Adoption prématurée |
-| `canonicalKey` | Clé stable non localisée (ex. slug méthode/harness) | oui | non* | Gouvernance · sync | Confusion avec ID |
-| `label` | Libellé utilisateur (FR initial) | oui | **oui** | UI | ID ≠ label |
-| `shortDescription` | Aide courte | oui | oui | UI | Sur-rédaction |
-| `displayOrder` | Ordre d’affichage | oui | oui | UI | Non identitaire |
-| `lifecycleStatus` | active \| deprecated \| unavailable | oui | gouverné | UI · validate | Oubli dépréciation |
-| `methodCycleNumber` | 1…15 | oui | non* | Traçabilité | Renumérotation méthode |
-| `methodReference` | Pointeur doc méthode | oui | oui | Audit | Lien cassé |
+| Champ | Rôle | Obl. | Mutable | Consommateur |
+|-------|------|------|---------|--------------|
+| `cycleTypeId` | Identité stable | oui | **non** | UI · T-A2 · CKC · instances |
+| `canonicalKey` | Clé stable non localisée (traçabilité harness/méthode) | oui | non* | Sync · gouvernance |
+| `label` | Libellé FR initial | oui | oui | UI |
+| `shortDescription` | Aide courte | oui | oui | UI |
+| `displayOrder` | Ordre affichage | oui | oui | UI |
+| `lifecycleStatus` | active \| deprecated \| unavailable | oui | gouverné | UI · validate |
+| `methodCycleNumber` | 1…15 | oui | non* | Traçabilité |
+| `methodReference` / provenance | Pointeur doctrinal | oui | oui | Audit |
+| `ckcLevel` | detailed \| synthetic \| … | oui | gouverné | Resolver · orchestration |
+| `ckcReference` / clé résolution | Cible pilote ou clé stable | oui | gouverné | Resolver |
+| `ckcFallbackPolicy` | Politique fallback (ex. synthetic map) | oui | gouverné | Resolver |
+| Exigences statut résolution | Règles valid / invalid / unavailable | oui | gouverné | Orchestration |

-\* changement = décision Morris + stratégie migration.
+\* = gate Morris + migration.

-### H.2 Extension optionnelle
+**Historique :** la recommandation initiale « CKC en extension » est **corrigée** par Morris → CKC dans le noyau obligatoire.

-| Champ | Rôle | Obl. | Note |
-|-------|------|------|------|
-| `category` | A/B méthode | non | Informative |
-| `ckcLevel` / `ckcReference` | Guidance CKC | non | Pas d’autorité |
-| `aliases` | Anciens IDs | non | Si CAT-D alias |
-| `deprecatedAt` / `replacedBy` | Lifecycle | non | Si dépréciation |
-| `availability` | Disponibilité projection | non | Peut coller à lifecycle |
+### H.2 Extension optionnelle (hors noyau)

-**Interdit dans la définition :** profil · gate · décision · score · autorité · exécution.
+`category` · `aliases` · `deprecatedAt` / `replacedBy` · `availability` — selon CAT-04/lifecycle. Pas de profil/gate/décision/autorité.

+**Contrat fonctionnel ≠ structure TypeScript** : choix de fichiers/classes/stockage = delivery futur.
+
 ## I. Contrat conceptuel CycleTypeCatalog

-Opérations fonctionnelles (sans langage/fichier/classe) :
+Opérations inchangées conceptuellement + exigences :

-| Opération | Comportement |
-|-----------|--------------|
-| `listActiveCycleTypes` | Entrées `active` ordonnées |
-| `getCycleTypeById` | Définition ou unknown |
-| `validateCycleTypeId` | ok \| unknown \| deprecated \| unavailable |
-| `resolveAlias` | Si retenu — cible unique sans ambiguïté |
-| `listDeprecatedCycleTypes` | Optionnel audit |
-| `catalogVersion` / fingerprint | Traçabilité divergence |
-| État `unavailable` | Bloque sélection · pas de fallback libre |
+- `validateCycleTypeId` fail-closed unknown/deprecated.
+- Métadonnées CKC présentes pour chaque entrée active.
+- Fingerprint / version catalogue.
+- Unavailable → bloque sélection · pas de texte libre.

 ## J. Invariants

-1. Unicité des `cycleTypeId`.
-2. Pattern OA (`isOaIdentifier`) · longueur ≤ 128.
-3. Préfixe candidat `cyc:` pour les types (compatible CreateCycle).
-4. `cyc:capitalization` **inchangé** (valeur et sens).
-5. Identifiant **immuable** après adoption.
-6. Identifiant **jamais recyclé** pour un autre cycle.
-7. Label modifiable sans changer l’ID.
-8. `displayOrder` non identitaire.
-9. Aucun profil dans le type.
-10. Aucune décision / gate / autorité dans le catalogue.
-11. Unknown → fail-closed.
-12. Catalogue unavailable → fail-closed.
-13. Alias sans ambiguïté (1→1).
-14. `replacedBy` cible existante.
-15. Exactement les quinze cycles méthode — pas de 16ᵉ, pas de fusion.
-16. UI n’embarque pas sa propre liste d’autorité.
+1–16 (précédents) conservés, **plus** :

+17. Métadonnées CKC **obligatoires** par type actif.
+18. Pilote détaillé **prioritaire** s’il existe.
+19. Fallback synthétique **obligatoire** sinon.
+20. Invalid/unavailable **sans** fallback valide → **stop** fail-closed.
+21. Aucun cycle déclaré executable / ready for delivery / QA / production **sans** CKC résolu et consommé.
+22. `executionAuthority=false` toujours.
+23. Identité du type **indépendante** du statut CKC (l’identité reste ; l’exploitabilité produit est bloquée).
+24. Quinze `cycleTypeId` CAT-I1 **adoptés contractuellement**.
+
 ## K. Options de source de vérité

-### CAT-S1 — Contrat Git canonique explicite *(recommandation candidate)*
+Options historiques CAT-S1…S4 conservées.

-Projection opérationnelle versionnée des 15 cycles méthode · sync gouvernée · projection runtime dérivée.
+Recommandation historique : CAT-S1.

-| Critère | Évaluation |
-|---------|------------|
-| Traçabilité | Forte |
-| Couplage | Faible au Markdown runtime |
-| Alignement doctrine | Compatible « pas de lecture runtime method/** » |
-| Dette | Maintenance sync méthode↔contrat |
+**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.** (aligne la recommandation)

-### CAT-S2 — Parsing runtime Markdown méthode
-
-Fragile · performance · couplage fort · **non recommandé**.
-
-### CAT-S3 — Harness labels comme catalogue
-
-Pas d’autorité · slugs non OA · `capitalisation-rex` ≠ `cyc:capitalization` · **non recommandé**.
-
-### CAT-S4 — Catalogue indépendant sans traçabilité méthode
-
-Divergence certaine · **non recommandé**.
-
-**Statut global options source : NOT DECIDED — Morris (D-V3.1-CAT-01).**
-
 ## L. Options de stratégie d’identifiants

-### CAT-I1 — `cyc:<stable-english-slug>` *(recommandation candidate)*
+Options historiques CAT-I1…I4 conservées.

-Exemples candidats (NOT ADOPTED) : `cyc:framing`, `cyc:delivery`, **`cyc:capitalization` (existant)**.
+Recommandation historique : CAT-I1.

-| Critère | Éval. |
-|---------|-------|
-| Pattern OA | Oui |
-| Lisibilité | Haute |
-| Compat `cyc:capitalization` | Native |
-| Réversibilité | Bonne avant persistance |
-| Dette | Mapping harness FR → slug EN |
+**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.**

-### CAT-I2 — `cyc:<number>-<slug>`
+## M. Mapping des quinze IDs — **ADOPTÉ**

-Ex. `cyc:01-framing`. Impact renumérotation méthode · moins réversible.
-
-### CAT-I3 — Opaque / UUID
-
-Stabilité maximale · lisibilité nulle · migration humaine coûteuse · **peu adapté** démonstrateur.
-
-### CAT-I4 — Slugs harness sans préfixe
-
-Ex. `cadrage`. **Incompatible** validation OA CreateCycle · **non recommandé**.
-
-**Statut : NOT DECIDED — Morris (D-V3.1-CAT-02).**
-
-## M. Mapping candidat complet
+**Stratégie :** CAT-I1. Exactement quinze entrées.
+Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — NOT YET IMPLEMENTED`**.
+`cyc:capitalization` : valeur et sens **inchangés**.

-**Stratégie illustrée :** CAT-I1.
-**Tous les IDs ci-dessous : `CANDIDATE — NOT ADOPTED`** sauf la valeur préexistante `cyc:capitalization` (déjà domaine OA ; son **appartenance catalogue + métadonnées** restent à arbitrer).
-
-| # | Nom canonique méthode | ID candidat | Label FR | Description courte | Ordre | CKC | Source |
-|---|----------------------|-------------|----------|--------------------|-------|-----|--------|
-| 1 | Cadrage | `cyc:framing` | Cadrage | Clarifier intention, périmètre, contraintes | 1 | detailed pilot | méthode §3.1 / §4.1 |
-| 2 | Conception fonctionnelle | `cyc:functional-design` | Conception fonctionnelle | Usages, règles, objets métier | 2 | detailed pilot | §4.2 |
-| 3 | Architecture fonctionnelle | `cyc:functional-architecture` | Architecture fonctionnelle | Structure, flux, découpage | 3 | synthetic map | §4.3 |
+| # | Nom canonique | cycleTypeId | Label FR | Description courte | Ordre | CKC path | Source |
+|---|---------------|-------------|---------|--------------------|-------|----------|--------|
+| 1 | Cadrage | `cyc:framing` | Cadrage | Clarifier intention, périmètre, contraintes | 1 | pilot detailed | §4.1 |
+| 2 | Conception fonctionnelle | `cyc:functional-design` | Conception fonctionnelle | Usages, règles, objets métier | 2 | pilot detailed | §4.2 |
+| 3 | Architecture fonctionnelle | `cyc:functional-architecture` | Architecture fonctionnelle | Structure, flux, découpage | 3 | synthetic fallback | §4.3 |
 | 4 | UX/UI | `cyc:ux-ui` | UX/UI | Expérience et interface | 4 | synthetic | §4.4 |
 | 5 | Backlog / user stories | `cyc:backlog` | Backlog / user stories | Stories testables | 5 | synthetic | §4.5 |
-| 6 | Architecture technique | `cyc:technical-architecture` | Architecture technique | Stack, patterns, ADR | 6 | detailed pilot | §4.6 |
+| 6 | Architecture technique | `cyc:technical-architecture` | Architecture technique | Stack, patterns, ADR | 6 | pilot detailed | §4.6 |
 | 7 | Intégration / DevOps | `cyc:integration-devops` | Intégration / DevOps | CI/CD, environnements | 7 | synthetic | §4.7 |
 | 8 | Delivery / implémentation | `cyc:delivery` | Delivery / implémentation | Implémentation bornée | 8 | synthetic | §4.8 |
-| 9 | QA / validation | `cyc:qa-validation` | QA / validation | Preuves et réserves | 9 | detailed pilot | §4.9 |
+| 9 | QA / validation | `cyc:qa-validation` | QA / validation | Preuves et réserves | 9 | pilot detailed | §4.9 |
 | 10 | Sécurité / RSSI | `cyc:security` | Sécurité / RSSI | Menaces et contrôles | 10 | synthetic | §4.10 |
 | 11 | Déploiement / release | `cyc:release` | Déploiement / release | Release contrôlée | 11 | synthetic | §4.11 |
 | 12 | Observabilité / RUN readiness | `cyc:observability` | Observabilité / RUN readiness | Exploitabilité mesurable | 12 | synthetic | §4.12 |
 | 13 | PR readiness | `cyc:pr-readiness` | PR readiness | Branche prête à PR | 13 | synthetic | §4.13 |
 | 14 | Post-merge | `cyc:post-merge` | Post-merge | Clôture après merge | 14 | synthetic | §4.14 |
-| 15 | Capitalisation / REX | `cyc:capitalization` | Capitalisation / REX | Apprentissage réutilisable | 15 | synthetic | §4.15 · **ID OA préexistant** |
+| 15 | Capitalisation / REX | `cyc:capitalization` | Capitalisation / REX | Apprentissage réutilisable | 15 | synthetic | §4.15 · **préexistant OA** |

-`canonicalKey` candidats (NOT ADOPTED) alignés harness : `cadrage` … `capitalisation-rex` — pour traçabilité, **pas** comme `cycleTypeId`.
+`canonicalKey` harness (`cadrage` … `capitalisation-rex`) = **traçabilité uniquement**, jamais `cycleTypeId`.

-Exactement **quinze** entrées · aucun 16ᵉ · aucune fusion.
+## N. Gouvernance et cycle de vie (CAT-04 / CAT-05)

-## N. Gouvernance et cycle de vie
-
 | Événement | Règle |
 |-----------|-------|
-| Ajout type | Gate Morris · MAJ méthode + contrat · version catalogue |
-| Renommage label | Sans changer ID · revue doc |
-| Description | Idem |
-| Dépréciation | `deprecated` · `replacedBy` obligatoire si remplacement · pas de sélection default |
-| Alias | Si autorisé : 1→1 · pas d’ambiguïté |
-| Suppression | **Interdite** si déjà référencé par instances |
-| Versionnement | Fingerprint / version contrat |
-| Divergence méthode/catalogue | Contrôle vérifiable · fail visible |
-| Impact instances | Validation historique · pas de rewrite silencieux |
+| Ajout type / ID / dépréciation / remplacement / alias structurant / mapping doctrinal / impact instances | **Gate Morris** |
+| Label / description non structurants | Revue documentaire proportionnée |
+| Alias | 1→1 · pas d’ambiguïté · pas de recyclage · `replacedBy` valide |
+| Alias initiaux | Absents OK tant qu’aucune migration |
+| Suppression | Interdite si référencé |
+| Rewrite silencieux instances | **Interdit** |

-## O. Localisation
+## O. Localisation (CAT-06)

-- ID indépendant de la langue.
-- Label FR initial (V3.1).
-- Futur multilingue = labels additionnels · **jamais** dans l’ID.
-- Fallback : label FR si traduction absente.
+ID neutre · labels FR · futur multi · jamais de traduction dans l’ID · fallback label explicite · changement de label sans changement d’identité.

 ## P. Relation avec T-A2

-- QualifyCycle : ID validé optionnel · profil indépendant du type.
+- QualifyCycle reste une fonction de domaine (profil depuis signaux).
+- Le **parcours produit** ne présente pas le résultat comme contractuellement exploitable / executable tant que la résolution CKC obligatoire n’est pas valide.
 - `capitalizationViaCycleTypeId` inchangé pour `cyc:capitalization`.
-- CreateCycle futur : ID valide catalogue + pattern OA.
-- Aucune recommandation automatique du type.
-- **Aucun changement T-A2 dans ce cycle.**
+- CreateCycle hors V3.1.
+- **Aucun changement code T-A2 dans ce cycle.**

-## Q. Relation avec CKC
+## Q. Relation avec CKC (CAT-07 corrigé)

-- Mapping type → CKC **informatif**.
-- CKC candidate · `executionAuthority=false`.
-- CKC absent / unavailable **ne change pas** l’identité du type.
-- QualifyCycle **non bloqué** par CKC (comportement T-A2 actuel).
+**Historique :** recommandation « résolution séparée / métadonnée informative » — **corrigée** par Morris.

+| Règle | Position |
+|-------|----------|
+| CKC dans le mécanisme produit | **Obligatoire** |
+| Candidate | Maturité projet/doctrine · **≠ optionnel** · **≠ baseline méthode globale** |
+| Chemin de résolution | Obligatoire pour tout type |
+| Priorité | Pilote détaillé si existant |
+| Fallback | Synthétique obligatoire sinon |
+| Fail-closed | Invalid/unavailable sans fallback valide |
+| Ready / executable / delivery / QA / production | Exige CKC résolu et consommé |
+| Traçabilité | Conception → prompt → delivery → QA → readiness → production |
+| `executionAuthority` | **false** |
+| Décision / gate Morris | **Non** |
+| Remplace routing/template/guardrails | **Non** |
+| Resolver | Responsabilité distincte possible · **consommation obligatoire** |
+| UI | État de résolution pertinent · **pas** questionnaire CKC brut |
+| Identité type | Indépendante du statut CKC |
+
 ## R. Relation avec l’UI

-- Liste contrôlée depuis projection catalogue.
-- Pas de saisie libre · pas de hardcode d’autorité.
-- Labels / descriptions / ordre fournis par le catalogue.
-- États : loading · unavailable · unknown.
-- ID peut être masqué à l’affichage.
-- Aucun moteur de recommandation du type.
+Liste contrôlée · pas de hardcode · labels du catalogue · états loading/unavailable/unknown · état CKC · pas de moteur de type · ID masquable.

 ## S. Erreurs et recovery

+Ajouts CKC :
+
 | Situation | Comportement |
 |-----------|--------------|
-| Catalogue unavailable | Bloquer sélection · message · pas de texte libre |
-| Catalogue invalid | Idem · delivery fail-closed |
-| Duplicate ID | Rejet contrat · non déployable |
-| Unknown ID | Fail-closed · corriger sélection |
-| Deprecated ID | Refus sélection active · message + remplacement si `replacedBy` |
-| Alias ambiguity | Rejet · correction gouvernance |
-| Method/catalog drift | Signal visible · gate Morris |
-| Capitalization mismatch | Stop — compatibilité cassée |
-| Fallback silencieux | **Interdit** |
+| CKC invalid / unavailable sans fallback | Stop fail-closed · pas d’exploitabilité produit |
+| Fallback synthétique manquant | Stop · corriger contrat catalogue |
+| CKC non consommé / non tracé | Cycle non ready |

+Autres erreurs catalogue (unavailable, unknown, duplicate, alias, drift, capitalization mismatch) inchangées · pas de fallback silencieux.
+
 ## T. Compatibilité et migration

-- V3.1 ne crée **aucune** CycleInstance aujourd’hui → fenêtre pour fixer le contrat **avant** persistance.
-- Changement d’ID post-persistance = migration + alias/`replacedBy`.
-- Fixtures test (`cyc:delivery`, etc.) ≠ adoption catalogue.
-- Rollback contractuel = version précédente du contrat Git · pas rewrite opaque.
+Fenêtre pré-persistance · IDs adoptés contractuellement · runtime pending · alias/`replacedBy` post-persistance · fixtures ≠ catalogue.

-## U. Découpage delivery candidat *(non ouvert)*
+## U. Slicing delivery (CAT-08 adopté — non ouvert)

-| Lot candidat | Contenu | Valeur | Dépendance |
-|--------------|---------|--------|------------|
-| **V3.1-D1** | Registry/contrat runtime du catalogue (post-arbitrage) | Débloque sélection | D-V3.1-CAT décidées |
-| **V3.1-D2** | Projection read-only + validate + QualifyCycle bridge | Qualification réelle | D1 |
-| **V3.1-D3** | UI Profile Qualification | Surface visible | D2 · réserve Figma |
+| Lot | Contenu | Statut |
+|-----|---------|--------|
+| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Adopté comme slicing** · delivery **non commencé** |
+| **V3.1-D2** | Projection · validate ID · résolution CKC obligatoire · QualifyCycle bridge read-only | Adopté · non commencé |
+| **V3.1-D3** | UI Profile Qualification · type/profil/justification/disclosures/état CKC | Adopté · non commencé · réserve Figma |

-Alternative bornée : D1+D2 fusionnés si scope Git acceptable — **NOT DECIDED**.
+Pas de CreateCycle en V3.1 · V3.2 = create explicite futur.
+Fusion D1/D2/D3 = nouvel arbitrage Morris.

-## V. Decision pack Morris
+## V. Decision pack Morris — détail

 ### D-V3.1-CAT-01 — Source de vérité

-Options : CAT-S1 · CAT-S2 · CAT-S3 · CAT-S4.
-**Recommandation :** CAT-S1.
-**Statut : NOT DECIDED.**
+Options : CAT-S1…S4. Recommandation historique : CAT-S1.
+**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.**

-### D-V3.1-CAT-02 — Stratégie d’identifiants
+### D-V3.1-CAT-02 — Identifiants

-Options : CAT-I1 · CAT-I2 · CAT-I3 · CAT-I4.
-**Recommandation :** CAT-I1 (préserve `cyc:capitalization`).
-**Statut : NOT DECIDED.**
+Options : CAT-I1…I4. Recommandation historique : CAT-I1.
+**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.** Mapping §M adopté.

 ### D-V3.1-CAT-03 — Noyau métadonnées

-Options : minimal (H.1) · étendu (H.1+H.2).
-**Recommandation :** minimal pour V3.1 ; CKC/alias en extension ultérieure.
-**Statut : NOT DECIDED.**
+Options historiques : minimal / étendu. Recommandation historique : minimal sans CKC obligatoire.
+**Décision : MINIMAL_WITH_MANDATORY_CKC_CORE — DECIDED — ADOPTED BY MORRIS.**
+**Enrichit** la recommandation initiale (CKC dans le noyau).

-### D-V3.1-CAT-04 — Dépréciation et alias
+### D-V3.1-CAT-04 — Alias

-Options : sans alias · alias contrôlés · migration forcée.
-**Recommandation :** alias contrôlés (1→1) pour évolutions post-persistance.
-**Statut : NOT DECIDED.**
+Options : sans / contrôlés / migration forcée. Recommandation : contrôlés.
+**Décision : CONTROLLED_ALIASES — DECIDED — ADOPTED BY MORRIS.**

-### D-V3.1-CAT-05 — Gouvernance de changement
+### D-V3.1-CAT-05 — Gouvernance

-Options : Morris pour IDs/ajout/dépréciation · labels sans gate si non structurants.
-**Recommandation :** gate Morris pour toute mutation d’ID / ajout / dépréciation ; labels descriptifs revue légère.
-**Statut : NOT DECIDED.**
+Recommandation : Morris structural.
+**Décision : MORRIS_FOR_STRUCTURAL_CHANGES — DECIDED — ADOPTED BY MORRIS.**

 ### D-V3.1-CAT-06 — Localisation

-Options : ID neutre + labels localisés · ID localisé.
-**Recommandation :** ID neutre + labels FR (puis multi).
-**Statut : NOT DECIDED.**
+Recommandation : ID neutre + labels.
+**Décision : NEUTRAL_ID_LOCALIZED_LABELS — DECIDED — ADOPTED BY MORRIS.**

-### D-V3.1-CAT-07 — Mapping CKC
+### D-V3.1-CAT-07 — CKC

-Options : métadonnée intégrée · résolution séparée.
-**Recommandation :** résolution séparée (CKC resolver) ; référence optionnelle dans contrat.
-**Statut : NOT DECIDED.**
+Recommandation historique : résolution séparée / référence optionnelle.
+**Décision : INTEGRATED_MANDATORY_CKC_MECHANISM — DECIDED — ADOPTED BY MORRIS.**
+**Corrige** la recommandation initiale.

-### D-V3.1-CAT-08 — Slicing delivery
+### D-V3.1-CAT-08 — Slicing

-Options : D1→D2→D3 · D1+D2 fusion · autre.
-**Recommandation :** D1 puis D2 puis D3.
-**Statut : NOT DECIDED.**
+Recommandation : D1→D2→D3.
+**Décision : D1_THEN_D2_THEN_D3 — DECIDED — ADOPTED BY MORRIS.**

-## W. Recommandation d’architecture
+## W. Recommandation historique — **ARBITRÉE / CONSOMMÉE**

-**RECOMMENDATION — NOT DECIDED**
+La recommandation §W initiale a été acceptée pour CAT-01/02/04/05/06/08, **enrichie** pour CAT-03, **corrigée** pour CAT-07. Source de décision = Morris.

-1. Source : **CAT-S1** (contrat Git explicite).
-2. IDs : **CAT-I1** (`cyc:<english-slug>`) · préserver **`cyc:capitalization`**.
-3. Métadonnées : noyau minimal.
-4. Alias contrôlés pour l’avenir.
-5. UI / T-A2 / méthode séparés · pas de harness autorité · pas de parsing Markdown runtime.
-6. Mapping §M = candidat d’arbitrage, **pas** registre.
-
-Assez de contrat pour implémenter **après** décisions Morris — sans sur-modélisation.
-
 ## X. Résolution de la réserve

 | Aspect | État |
 |--------|------|
-| Architecture contract produced | **oui** (ce document) |
-| Decision pack ready | **oui** (D-V3.1-CAT-01…08) |
-| Reserve still blocking | **oui** jusqu’à arbitrage Morris |
-| Delivery authorized | **non** |
+| Source / IDs / métadonnées / CKC / gouvernance / slicing | **Décidés** |
+| R-V3.1-CATALOG-01 | **RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL** |
+| Runtime catalogue / resolver | **Pending** |
+| Delivery D1 | **Requires separate GO** · **not authorized** |

-**R-V3.1-CATALOG-01 n’est pas résolue.**
-
 ## Y. Risques et réserves

-Divergence méthode/catalogue · stabilité IDs · migration · alias · localisation · couplage CKC · sur-architecture · catalogue trop pauvre/riche · absence tests delivery · process-local · Figma hors sujet · confusion fixtures test / catalogue · conflit harness `capitalisation-rex` vs OA `cyc:capitalization`.
+Runtime absent · divergence méthode/catalogue · dette migration · alias · localisation · sur-architecture delivery · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

 ## Z. Anti-claims

-- Contrat ≠ implémentation.
-- Mapping candidat ≠ IDs adoptés.
-- Source recommandée ≠ décision Morris.
-- Architecture fonctionnelle ≠ architecture technique.
-- Catalogue ≠ moteur de recommandation.
-- Type ≠ profil.
-- Git contract ≠ runtime disponible.
+- Adoption contractuelle ≠ implémentation runtime.
+- IDs adoptés ≠ registry disponible.
+- CKC obligatoire ≠ baseline méthode globale.
+- CKC obligatoire ≠ autorité d’exécution.
+- Candidate ≠ optionnel (dans le produit candidate).
+- Type ≠ profil · catalogue ≠ moteur · recommandation ≠ décision.
 - Delivery **non** autorisé.
 - Pas PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

 ## AA. Verdict

-**R-V3.1-CATALOG-01 RESOLUTION CONTRACT COMPLETE — MORRIS CATALOG DECISIONS REQUIRED — DELIVERY NOT AUTHORIZED**
+**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**

 Prochain gate candidat (non ouvert) :

-`GO ARBITRATE SFIA STUDIO V3.1 CYCLE TYPE CATALOG DECISIONS D-V3.1-CAT-01 TO D-V3.1-CAT-08`
+`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

-Statut : **READY FOR MORRIS CATALOG ARBITRATION**
+Statut : **READY FOR DELIVERY D1 DECISION**
