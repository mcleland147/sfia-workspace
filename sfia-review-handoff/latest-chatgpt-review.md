# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 18:30:00 CEST (+0200) |
| **Niveau** | Full |
| **Mono-cycle** | SFIA Studio Lot V3 Cycle Recommendation — Cadrage |
| **Repository** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Gate Morris consommé** | GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION |
| **Branche** | framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage |
| **HEAD / base** | 3e8a4374405dce98866e35fb60c5c7329701f191 |
| **Commit projet** | aucun |
| **Push / PR / merge projet** | non |
| **Verdict unique** | **CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED** |

## Objectif

Cadrer le Lot V3 Cycle Recommendation : promesse, parcours, écart T-A2 (profil vs type), options, decision pack D-V3, slicing candidat — sans implémentation.

## Git Review Index

| Champ | Valeur |
|-------|--------|
| HEAD | 3e8a4374405dce98866e35fb60c5c7329701f191 |
| origin/main | 3e8a4374405dce98866e35fb60c5c7329701f191 |
| branche | framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage |
| commits ahead | 0 |
| tracked dirty | 2 fichiers M + 1 untracked doc |
| staged | vide |
| code modifié | non |
| review pack | full · mono-cycle · non synthesis-only |
| verdict | CADRAGE V3 COMPLETE — MORRIS DECISIONS REQUIRED |

## Review pack content coverage

| Critère | Statut |
|---------|--------|
| created files full content | yes |
| modified sections complete | yes (fichiers entiers post-édition) |
| useful diff included | yes |
| decisions visible | yes |
| synthesis only | **no** |
| review pack verdict | **complete** |

## Local Git Truth Check

```text
timestamp = 2026-07-30 18:21:56 CEST (+0200)
start = detached HEAD @ 3e8a437…
origin/main = 3e8a437…
status = ?? .tmp-sfia-review/ only
framing branch before = absent
created = framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage from origin/main
HEAD after switch = 3e8a437…
handoff tip before = 1f9c582714d13ec4fd035401a02f26de743f8632
```

## Qualification

| Champ | Valeur |
|-------|--------|
| Cycle | 1 Cadrage |
| Profil | Standard |
| Typologie | DOC |
| CKC | pilots/01-cadrage.md · candidate · v0.1.0 · aucune autorité |

## Sources consultées

Framing `01`–`11` (lecture ciblée) · V2-A2/A3 READMEs · T-A2 README/02/04 · `qualifyCycle` / `createCycle` / `qualification.ts` / `types.ts` · vertical-slice-runtime (pas d’API cycle) · ProjectWorkspaceView · CKC 01-cadrage · handoff tip 1f9c582 · PR #294/#295 contexte.

## Observation structurante

QualifyCycle → recommendedProfile (pas cycleTypeId). CreateCycle → cycleTypeId obligatoire. Runtime V2 n’expose pas encore ces use cases. Workspace sans CTA recommendation.

## Observations / hypothèses / options / reco / décisions

| Classe | Contenu |
|--------|---------|
| Observations | V1+V2 sur main · T-A2 profil-only · runtime sans cycle bridge |
| Hypothèses | catalogue de types pourra être guidé UI sans logique domaine React |
| Options | V3-A/B/C · L1–L5 · S1–S3 (doc 12) |
| Recommandations | V3-A + L2 + L4a/L5a + S1 — **NON DÉCIDÉES** |
| Décisions validées | D-VS-01…04 adopted · D-VS-05 not consumed · Critical fail-closed T-A2 |
| Décisions requises | D-V3-01…08 |

## Fichiers créés / modifiés

| Path | Action |
|------|--------|
| …/12-v3-cycle-recommendation-cadrage.md | créé |
| …/README.md | modifié |
| …/08-implementation-backlog-and-slicing.md | modifié |

## Validations

| Contrôle | Résultat |
|----------|----------|
| git diff --check | PASS |
| fichiers projet | exactement 3 |
| code / tests / T-A2 | non modifiés |
| tests applicatifs | **non exécutés** — aucun code modifié |
| commit / push / PR projet | NON |
| Figma write | NON |

## Diff stat

```text
2 files changed (tracked), +1 untracked doc 12
```

## Diff name-status

```text
M …/08-implementation-backlog-and-slicing.md
M …/README.md
A …/12-v3-cycle-recommendation-cadrage.md (untracked until commit — not committed this cycle)
```

## Garde-fous / réserves

Options ≠ décisions · profil ≠ type · acknowledged ≠ Morris · CKC ≠ autorité · pas d’implémentation · D-VS-05 non consommée · B5/R1 ouverts · process-local volatil.

## Prochain cycle candidat

Arbitrage Morris D-V3-01…08 puis conception fonctionnelle et/ou architecture selon option — **non ouvert**.

## Contenu complet — fichier créé `12-v3-cycle-recommendation-cadrage.md`

```markdown
# 12 — Lot V3 Cycle Recommendation — Cadrage

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 18:25:00 CEST (+0200) |
| **Cycle** | 1 — Cadrage |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Profondeur** | Standard |
| **Gate Morris consommé** | `GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION` |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Commit V2-A3 intégré** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (via merge `3e8a437…`) |
| **CKC Cadrage** | `pilots/01-cadrage.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
| **Statut documentaire** | `CADRAGE COMPLET — OPTIONS NON DÉCIDÉES — IMPLÉMENTATION NON AUTORISÉE` |
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

**Aucune option n’est décidée dans ce cycle.**

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

## S. Slicing candidat (non décidé)

| Option | Contenu | Dette / valeur |
|--------|---------|----------------|
| **S1 — V3-A puis V3-B** | A: UI + Qualify read-only · B: Create + options LPS/épistémiques | claire, progressive |
| **S2 — lot unique borné** | Qualify + Create explicite + disclosures | plus dense, moins de gates |
| **S3 — recadrage** | si D-V3-01/02 imposent V3-B type recommandé | architecture avant UI |

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

### D-V3-01 — Promesse fonctionnelle

1. Cycle type **sélectionné** + profil **recommandé** (V3-A).
2. Type de cycle **et** profil **recommandés** (V3-B).
3. Autre.

**Statut : NOT DECIDED.**

### D-V3-02 — Source du cycleTypeId

1. Sélection explicite utilisateur.
2. Règles déterministes à concevoir.
3. Agent / LLM live.
4. Autre.

**Statut : NOT DECIDED.** (3 hors trajectoire actuelle.)

### D-V3-03 — Mutation

1. Qualification read-only.
2. CTA explicite de création.
3. Création automatique.

**3 = non recommandée.** **Statut : NOT DECIDED.**

### D-V3-04 — Liaison au LPS

1. Ne pas lier comme actif dans V3.
2. Lier uniquement après CTA explicite.
3. Autre.

**Statut : NOT DECIDED.**

### D-V3-05 — Épistémologie

1. Recommandation calculée **non persistée**.
2. `Recommendation` EpistemicItem persisté après action explicite.
3. Autre.

**Statut : NOT DECIDED.**

### D-V3-06 — Critical

Confirmer la contrainte T-A2 existante : `proposed` uniquement · justification obligatoire · aucune activation / décision automatique · bascule V4 distincte.

**Présenté comme contrainte existante à réaffirmer — pas comme nouvelle invention.**

### D-V3-07 — UX / Figma

1. Contrat Git temporaire.
2. Cycle Figma dédié avant delivery.
3. Autre.

**D-VS-05 reste NOT DECIDED / NOT CONSUMED.**

### D-V3-08 — Slicing

1. V3-A puis V3-B (S1).
2. Lot unique borné (S2).
3. Recadrage (S3).

**Statut : NOT DECIDED.**

## V. Recommandation ChatGPT/Cursor — **NON DÉCIDÉE**

Recommandation de cadrage (à arbitrer par Morris) :

1. **D-V3-01/02 → Option V3-A** : sélection explicite du type + QualifyCycle pour le profil — seule option immédiatement compatible avec T-A2 sans moteur parallèle.
2. **D-V3-03 → L2** : CTA explicite de création ; **rejeter L3**.
3. **D-V3-04 → L4a** en premier incrément (pas de lien actif) sauf besoin démontré.
4. **D-V3-05 → L5a** en premier incrément (pas de persistance épistémique obligatoire).
5. **D-V3-06** : réaffirmer Critical fail-closed.
6. **D-V3-07** : contrat Git + disclosures pour un premier delivery ; Figma dédié seulement si Morris ouvre D-VS-05 / D-V3-07=2.
7. **D-V3-08 → S1** : surface + qualify read-only d’abord, puis Create explicite.

Cette recommandation **n’est pas une décision Morris**.

## W. Transition candidate

| Si… | Alors cycle candidat |
|-----|----------------------|
| D-V3 retenues pour V3-A + L2 | Conception fonctionnelle (puis UX/delivery) |
| D-V3-01/02 = type recommandé (V3-B) | **Architecture fonctionnelle** avant UI |
| D-V3-07 = Figma dédié | UX/UI + Figma (lecture/écriture selon GO) |
| Aucune décision | **STOP** — pas de delivery |

**Aucun delivery automatique.**

## X. Anti-claims

- Cadrage ≠ conception validée ≠ delivery autorisé
- Recommandation ≠ décision Morris
- Profil recommandé ≠ type de cycle recommandé
- `acknowledged` ≠ autorité Morris
- Cycle créé ≠ cycle actif si non lié
- CKC ≠ autorité d’exécution
- V3 framing ≠ V3 implementation
- Tests futurs ≠ PRODUCT READY / RUN READY
- Pas IAM / agent / delivery / cutover / HARD CLOSED / T-A6 COMPLETE

## Y. Verdict et prochain gate candidat

**CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION DECISIONS D-V3-01 TO D-V3-08`

Puis, selon arbitrage : conception fonctionnelle et/ou architecture fonctionnelle — **pas** d’implémentation sans GO distinct.
```

## Contenu complet — `README.md` (état final)

```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2-A1/A2/A3 ON MAIN — V3 CADRAGE COMPLETE — V3 IMPLEMENTATION NOT AUTHORIZED` |
| **Date** | 2026-07-30 18:25:00 CEST (+0200) |
| **Cycle courant** | 1 — Cadrage Lot V3 Cycle Recommendation |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Gate courant** | `GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION` |
| **Branche cadrage V3** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
| **Code applicatif (ce cycle)** | **aucune modification** |
| **Framing historique** | conservé ci-dessous · docs `01`–`11` · décisions D-VS inchangées |

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
| V3 — Cycle Recommendation | **cadrage documentaire complet** · **implémentation non autorisée** |
| V4 / V5 / V6 | non autorisés |

**Écart V3 :** T-A2 `QualifyCycle` recommande un **profil**, pas un `cycleTypeId`. Voir `12`.

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

V1 Composition locale Project → V2 Create UI (A1/A2/A3) → **V3 Recommendation (cadrage ✓ · delivery ✗)** → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

Recommandation de livraison : **plusieurs PR** (une par lot), commits atomiques. Tout slicing V3 reste **candidat** jusqu’aux décisions D-V3 (voir `12`).

## Décisions Morris

| ID | Statut | Décision |
|----|--------|----------|
| D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
| D-VS-02 | `DECIDED — ADOPTED BY MORRIS` | mémoire OA + audit SQLite local optionnel |
| D-VS-03 | `DECIDED — ADOPTED BY MORRIS` | fixtures hors happy path |
| D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

## Statut d’exécution V1 → V2 (historique + intégration)

V1 a composé Doctrine T-A0 et Project/LPS T-A1 en mémoire process-local. V2-A1 a ajouté le bridge Server Action. V2-A2 a livré Create Project UI. V2-A3 a livré Project Workspace UI (merge PR #295 @ `3e8a437…`).

V3 : **cadrage uniquement** — voir `12-v3-cycle-recommendation-cadrage.md`. Aucune Server Action cycle, aucune UI recommendation, aucune CreateCycle dans ce cycle.

## Anti-claims

- Framing ≠ produit ready ≠ MVP validé
- UI POC ≠ cœur OA branché
- Décision locale ≠ autorité IAM
- Local SQLite ≠ persistance produit
- Recommandation ≠ décision Morris
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
| `12` | **Lot V3 Cycle Recommendation — Cadrage** |

## Gate candidat suivant

`GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION DECISIONS D-V3-01 TO D-V3-08`

Puis, selon arbitrage : conception fonctionnelle et/ou architecture fonctionnelle. **Aucun delivery V3 automatique.**

Aucun gate automatique.

## Verdict

`CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED`
```

## Contenu complet — `08-implementation-backlog-and-slicing.md` (état final)

```markdown
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

**Statut** : `CADRAGE COMPLETE — IMPLEMENTATION NOT AUTHORIZED`.

Cadrage détaillé : [`12-v3-cycle-recommendation-cadrage.md`](./12-v3-cycle-recommendation-cadrage.md).

| Item | Contenu |
|------|---------|
| Objectif candidat | Surface de qualification (± CreateCycle explicite) au-dessus de T-A2 |
| Écart structurant | QualifyCycle recommande un **profil**, pas un `cycleTypeId` |
| Slicing | **candidat uniquement** (V3-A/V3-B ou lot unique) — décisions D-V3-01…08 |
| Interdit sans GO | code · Server Action · UI · CreateCycle implicite · Figma write |

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

V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 reste au stade cadrage.
```

## Diff utile — README + 08

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index 2cb96a4..f09fa72 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -2,53 +2,59 @@

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
+**Statut** : `CADRAGE COMPLETE — IMPLEMENTATION NOT AUTHORIZED`.
+
+Cadrage détaillé : [`12-v3-cycle-recommendation-cadrage.md`](./12-v3-cycle-recommendation-cadrage.md).
+
+| Item | Contenu |
+|------|---------|
+| Objectif candidat | Surface de qualification (± CreateCycle explicite) au-dessus de T-A2 |
+| Écart structurant | QualifyCycle recommande un **profil**, pas un `cycleTypeId` |
+| Slicing | **candidat uniquement** (V3-A/V3-B ou lot unique) — décisions D-V3-01…08 |
+| Interdit sans GO | code · Server Action · UI · CreateCycle implicite · Figma write |

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
+V1 only a été la recommandation initiale de composition. V2 a ensuite été autorisé et intégré par gates distincts. V3 reste au stade cadrage.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index dae31b5..911ea25 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -2,17 +2,17 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING HISTORICAL — D-VS-01→04 ADOPTED — V1 EXECUTED LOCALLY — V2 NOT AUTHORIZED` |
-| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
-| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
+| **Statut** | `FRAMING LIVING — D-VS-01→04 ADOPTED — V1+V2-A1/A2/A3 ON MAIN — V3 CADRAGE COMPLETE — V3 IMPLEMENTATION NOT AUTHORIZED` |
+| **Date** | 2026-07-30 18:25:00 CEST (+0200) |
+| **Cycle courant** | 1 — Cadrage Lot V3 Cycle Recommendation |
 | **Profil** | Standard |
-| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
-| **Branche framing** | `framing/sfia-studio-first-user-visible-vertical-slice` @ `c1955179a36079e060c41a845c2a1950084966c8` |
-| **Branche V1 locale** | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
-| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
-| **Code applicatif framing** | **aucune modification** |
-| **Exécution V1** | facade headless T-A0/T-A1, OA mémoire, projection et audit optionnel — voir `11` |
-| **Push / PR / merge projet V1** | **non autorisés, non exécutés** |
+| **Typologie** | DOC |
+| **Gate courant** | `GO CADRAGE SFIA STUDIO LOT V3 CYCLE RECOMMENDATION` |
+| **Branche cadrage V3** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+| **Commit V2-A3** | `e1db1f52c12d2e0fdb5ac5c9f66b8984015d14ba` (PR #295 MERGED) |
+| **Code applicatif (ce cycle)** | **aucune modification** |
+| **Framing historique** | conservé ci-dessous · docs `01`–`11` · décisions D-VS inchangées |

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
+| V3 — Cycle Recommendation | **cadrage documentaire complet** · **implémentation non autorisée** |
+| V4 / V5 / V6 | non autorisés |
+
+**Écart V3 :** T-A2 `QualifyCycle` recommande un **profil**, pas un `cycleTypeId`. Voir `12`.
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

@@ -74,9 +85,9 @@ Aucun composant React ne décide Critical / HARD closed / preuve suffisante / au

 ## Backlog recommandé

-V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.
+V1 Composition locale Project → V2 Create UI (A1/A2/A3) → **V3 Recommendation (cadrage ✓ · delivery ✗)** → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

-Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.
+Recommandation de livraison : **plusieurs PR** (une par lot), commits atomiques. Tout slicing V3 reste **candidat** jusqu’aux décisions D-V3 (voir `12`).

 ## Décisions Morris

@@ -88,13 +99,11 @@ Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits at
 | D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
 | D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

-## Statut d'exécution V1
-
-V1 est exécuté localement sur une branche descendante du commit de framing. La facade compose la résolution Doctrine T-A0 et la création atomique Project/LPS v1 T-A1, puis expose une projection read-only reconstruite depuis T-A1. Les fixtures et le storage navigateur sont hors de cette surface.
+## Statut d’exécution V1 → V2 (historique + intégration)

-Validations : 16 nouveaux tests ; régressions ciblées 109/109 ; suite complète 752/752 ; typecheck, lint et build green. Aucun fichier UI, OA existant, schéma SQLite, package ou lockfile n'est modifié.
+V1 a composé Doctrine T-A0 et Project/LPS T-A1 en mémoire process-local. V2-A1 a ajouté le bridge Server Action. V2-A2 a livré Create Project UI. V2-A3 a livré Project Workspace UI (merge PR #295 @ `3e8a437…`).

-V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est implémenté.
+V3 : **cadrage uniquement** — voir `12-v3-cycle-recommendation-cadrage.md`. Aucune Server Action cycle, aucune UI recommendation, aucune CreateCycle dans ce cycle.

 ## Anti-claims

@@ -120,15 +129,16 @@ V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est
 | `09` | Plan validation / preuves |
 | `10` | Risques & decision pack Morris |
 | `11` | Exécution locale V1 — Project core composition |
+| `12` | **Lot V3 Cycle Recommendation — Cadrage** |

 ## Gate candidat suivant

-`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`
+`GO ARBITRATE SFIA STUDIO V3 CYCLE RECOMMENDATION DECISIONS D-V3-01 TO D-V3-08`

-Après intégration distincte de V1 : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`.
+Puis, selon arbitrage : conception fonctionnelle et/ou architecture fonctionnelle. **Aucun delivery V3 automatique.**

 Aucun gate automatique.

 ## Verdict

-`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED`
+`CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED`
```

## Review Handoff Git

| Champ | Valeur |
|-------|--------|
| Decision | required |
| Mode | publish-in-cycle |
| Branche | sfia/review-handoff |
| Fichier | sfia-review-handoff/latest-chatgpt-review.md |
| Message | docs(review-handoff): publish SFIA Studio V3 cycle recommendation framing report |
| Handoff remote before | 1f9c582714d13ec4fd035401a02f26de743f8632 |

## Verdict unique

**CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED**

## Instruction ChatGPT

Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md avant réponse à Morris. Vérifier cycle 1, doc 12 complet, distinction type/profil, D-V3-01…08 non décidées, absence de code, et verdict CADRAGE V3 CYCLE RECOMMENDATION COMPLETE — MORRIS DECISIONS REQUIRED — IMPLEMENTATION NOT AUTHORIZED.
