# SFIA Review Pack — Full
# SFIA Studio V3.1-D2 Cadrage — CKC Resolver & QualifyCycle Bridge

## Meta
- Date/heure/fuseau: 2026-08-01 14:34:28 CEST (+0200)
- Rôle: Cursor (cadrage DOC)
- Niveau: Full — obligatoire
- Branche: framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
- HEAD: e1befcb80ed5e3c789a7de9036a8207d6b3e6771

## Gate Morris (complet)
Formulation Morris: « après c'est logique que D1 ne couvre pas l'ensemble mais si elle respecte la doctrine 3.0 c'est ok, donc ok pour lancer le cadrage de D2 »
Interprétation bornée: GO CADRAGE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — DEFINE PRODUCT PROBLEM, D2 BOUNDARIES, CKC RESOLUTION, CKC CONSUMPTION, QUALIFYCYCLE BRIDGE, MULTI-CKC OPTIONS, FAIL-CLOSED BEHAVIOUR AND DECISION PACK — NO IMPLEMENTATION — NO DELIVERY — NO D3 — NO UI — NO FIGMA — NO CREATECYCLE — NO METHOD PROMOTION
Date GO: 2026-08-01 14:03 CEST (+0200)

## Cycle / profil / typologie / CKC
- Cycle: 1 — Cadrage
- Profil: Standard
- Typologie: DOC
- CKC détaillé: method/.../pilots/01-cadrage.md (candidate 0.1.0)
- Template: sfia-cycle-execution-template.md (lu / appliqué)
- executionAuthority=false
- Limite: clarifier intention/périmètre/options — aucune exécution

## Handoff source
- tip: 9ac1ad6b23d9e11a8306e2c936b88c0e6c8d68f0
- blob: 87a8670747989cca3c6d3c8bf7c1d6362448b893
- archive local cleanup pack: pr-297-cleanup-chatgpt-review-preserved.md (cmp OK)

## Git Truth initial
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
L/R main...origin/main=0	0
=== STATUS NON-TMP ===
(none)
=== STAGED ===
wt_count=77
=== PRUNE DRY-RUN ===
local_d2=ABSENT
=== LS-REMOTE D2 ===
=== HANDOFF ===
9ac1ad6b23d9e11a8306e2c936b88c0e6c8d68f0	refs/heads/sfia/review-handoff
handoff_tip=9ac1ad6b23d9e11a8306e2c936b88c0e6c8d68f0
handoff_blob=87a8670747989cca3c6d3c8bf7c1d6362448b893
expected_tip_ancestor=YES
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```
- worktrees: 77 (inchangé vs handoff cleanup)
- prune dry-run: vide
- branche D2 absente puis créée localement uniquement

## Sources consultées
Gouvernance + framing 08/12/13/14/README + D1 README/05 + cycleTypeCatalog + QualifyCycle/CKC ports T-A2 + handoff.

## Observations / options / recommandations / décisions
- **Observations:** D1 sur main ; ports T-A2 CKC/QualifyCycle existants mais non équivalents au produit D2 ; réserve README NOT LIFTED.
- **Options:** multi-CKC A/B/C ; slicing D2-A..D ; modes Delivery.
- **Recommandations candidates:** promesse enrichie read-only ; resolver=b ; consommation=c ; multi=C ; slicing A→B→C ; prochain=conception.
- **Décisions:** aucune adoptée — D-V3.1-D2-01…12 NOT DECIDED.

## Fichiers créés/modifiés
CREATED 15 · MODIFIED 08 · MODIFIED README · aucun app/** · aucun method/**

## Document 15 complet
```markdown
# 15 — V3.1-D2 Cadrage — CKC Resolver & QualifyCycle Bridge

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-01 14:34:28 CEST (+0200) |
| **Cycle projet** | 1 — Cadrage |
| **Profil SFIA** | Standard |
| **Typologie** | DOC |
| **Gate Morris consommé** | Formulation Morris : « après c'est logique que D1 ne couvre pas l'ensemble mais si elle respecte la doctrine 3.0 c'est ok, donc ok pour lancer le cadrage de D2 » — interprétation bornée : `GO CADRAGE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — …` (2026-08-01 14:03 CEST +0200) |
| **Branche locale** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **CKC (ce cycle)** | Pilote détaillé `pilots/01-cadrage.md` · method-candidate · consommation obligatoire · `executionAuthority=false` |
| **Statut documentaire** | `V3.1-D2 FRAMING COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION` |
| **Code / Delivery / D3 / UI / Figma / CreateCycle** | **non** |
| **Commit / push / PR projet** | **non autorisés** |

## B. Gate Morris

**Autorisé :** cadrage repo-informed D2 ; options ; recommandation candidate ; decision pack ; mise à jour de traçabilité (`08`, README framing) ; Review Handoff Git.

**Interdit :** implémentation ; Delivery ; architecture adoptée ; D3 ; UI ; Figma ; CreateCycle ; modification catalogue D1 ; modification QualifyCycle ; promotion méthode ; commit/push/PR projet.

## C. Sources consultées

### Gouvernance

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/.../cycle-knowledge-contracts/pilots/01-cadrage.md`
- `method/.../02-fifteen-cycles-synthetic-map.md`
- `method/.../sfia-v2.5-project-cycles-method-candidate.md`

### Trajectoire V3 / V3.1

- framing `08`, `12`, `13`, `14`, `README`
- D1 `README`, `05-capitalization-rex.md`
- `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- `app/lib/oa/cycle/index.ts`
- ports / application existants T-A2 : `ports/ckcResolver.ts`, `application/resolveCycleKnowledgeContract.ts`, `application/qualifyCycle.ts`, `domain/types.ts`, `domain/qualification.ts`
- handoff `sfia/review-handoff` tip `9ac1ad6…` / blob `87a8670…`

## D. État D1 et héritage

### D1 fournit (intégré `main`)

- quinze `cycleTypeId` stables `cyc:*` ;
- métadonnées catalogue version `0.1.0-v3.1-d1` ;
- mapping CKC **mandatory** (4 detailed + fallback synthétique ; 11 synthetic) ;
- `executionAuthority=false`, `doctrineStatus`, `unavailableBehavior=fail-closed` ;
- validateur multi-issues ;
- opérations pures `listCycleTypes` / `getCycleTypeById` / `isKnownCycleTypeId` / `validateCycleTypeCatalog` ;
- **aucun** parsing Markdown runtime.

### D1 ne fournit pas

- résolution opérationnelle du CKC ;
- validation d’un résultat de résolution pour l’exploitabilité produit ;
- preuve de consommation CKC ;
- bridge catalogue → QualifyCycle enrichi ;
- projection vertical-slice produit ;
- UI.

### Héritage T-A2 déjà présent (à ne pas confondre avec D2 produit)

| Artefact | Rôle actuel | Limite pour D2 |
|----------|-------------|----------------|
| `CkcResolverPort` / `memoryCkcResolver` | Port guidance ; mémoire ; `executionAuthority=false` | **Non** branché sur le catalogue D1 ; pas de preuve produit de consommation |
| `ResolveCycleKnowledgeContract` | Use-case résolution ; absent/unavailable OK pour guidance ; **ne bloque pas CreateCycle** pour CKC absent | Comportement CreateCycle ≠ règle d’exploitabilité produit V3.1 (doc 13) |
| `QualifyCycle` | Recommandation de **profil** depuis six signaux ; `isMorrisDecision=false` | Ne consomme pas le mapping D1 ; ne produit pas l’état CKC produit |

### Décisions héritées (déjà tranchées — non rouvertes ici)

- L’utilisateur sélectionne le type ; pas de saisie libre ; pas de recommandation automatique du type.
- T-A2 recommande uniquement le profil ; type ≠ profil ; recommandation ≠ décision Morris.
- Six signaux explicites ; Critical informatif fail-closed ; `isMorrisDecision=false`.
- CKC mandatory ; `executionAuthority=false` ; doctrine method-candidate.
- Slicing adopté **D1 → D2 → D3** (D-V3.1-CAT-08) — Delivery D2/D3 non ouvertes avant GO.
- Aucun CreateCycle / LPS / EpistemicItem dans V3.1 visible slice.
- Git = source contractuelle ; pas de parsing Markdown runtime.
- Réserve README framing : **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

## E. Problème produit D2

**Question centrale :**

> Comment SFIA Studio transforme-t-il un `cycleTypeId` sélectionné et validé en **contexte CKC résolu**, puis en **qualification de profil T-A2 exploitable**, sans inventer d’autorité, sans recommander automatiquement le type et sans créer de `CycleInstance` ?

**Écart D1 → produit :**

| Concept | État après D1 |
|---------|----------------|
| Mapping CKC | Présent (statique) |
| Résolution CKC | Absente (orchestration) |
| Consommation CKC | Absente (preuve produit) |
| Bridge QualifyCycle | Absent (exploitabilité enrichie) |
| UI | Absente (D3) |

## F. Objectif et valeur

### Intention

Rendre **observable et testable** le passage « type catalogue validé → CKC résolu/consommé → profil recommandé traçable », en read-only, avant toute UI.

### Valeur utilisateur (sans UI)

- Un opérateur / revueur / testeur peut obtenir un **résultat structuré** : type, statut CKC, source/fallback, profil, rationale, disclosures, erreurs.
- La doctrine 3.0 est **consommée** (pas seulement référencée) sans autorité d’exécution.
- D3 pourra s’appuyer sur un contrat d’entrées/sorties stable.

### Pourquoi D2 avant D3

Sans D2, une UI D3 afficherait un type et un profil **sans** preuve CKC — confusion mapping ≠ résolution ≠ consommation. D2 fixe le contrat d’exploitabilité ; D3 ne fait qu’exposer.

## G. Usager et autorité

| Rôle | Consomme D2 ? | Autorité |
|------|---------------|----------|
| Utilisateur produit (futur D3) | Indirectement via UI | Sélectionne le type ; répond aux signaux |
| Opérateur / QA / revueur | Directement (API/domaine/projection) | Lit le résultat ; n’adopte pas de gate |
| Morris | Arbitrage des décisions D2 | Seul décideur d’adoption |
| CKC / QualifyCycle | Guidance / recommandation | **Aucune** autorité d’exécution ; `isMorrisDecision=false` |

## H. Entrées

| Entrée | Source | Obligatoire | Notes |
|--------|--------|-------------|-------|
| `cycleTypeId` | Sélection utilisateur validée via D1 | Oui | Pas de saisie libre |
| Catalogue version / fingerprint | D1 `CYCLE_TYPE_CATALOG_VERSION` (+ hash candidat) | Oui | Traçabilité |
| Mapping CKC de l’entrée | D1 `CycleTypeCkcMapping` | Oui | detailed/synthetic + fallback |
| Six signaux Oui/Non | Utilisateur / harness | Oui pour QualifyCycle | Absence ≠ `false` |
| `requestedProfile` | — | **Candidate exclusion** | Doc 13 : non exposé V3.1 — maintenir exclusion sauf décision Morris |
| Contexte projet (objectif/scope) | Optionnel | Non | Affichage futur ; **n’influence pas** QualifyCycle actuel |
| `correlationId` / horodatage | Runtime | Recommandé | Traçabilité |

## I. Sorties

Sorties candidates d’un résultat D2 read-only :

| Sortie | Description |
|--------|-------------|
| `cycleTypeId` + métadonnées catalogue | Type sélectionné / labels / lifecycle |
| `ckcResolutionStatus` | Statut de résolution (voir §K) |
| `ckcPrimaryLevel` / `ckcSourceUsed` | detailed \| synthetic |
| `fallbackUsed` | booléen |
| `ckcConsumptionProof` | Preuve structurée de consommation (voir §L) |
| `recommendedProfile` | Light \| Standard \| Critical |
| `rationale` | Code/texte T-A2 |
| `criticalSignalsPresent` | booléen |
| `isMorrisDecision` | **toujours** `false` |
| `disclosures` / `reserves` | Dont doctrine method-candidate |
| `errorCodes` | Fail-closed (voir §O) |
| `catalogVersion` / `resolvedAt` | Traçabilité |

**Hors sorties D2 :** `CycleInstance`, lien LPS, EpistemicItem, gate Morris consommé, recommandation de type.

## J. Resolver CKC

### Responsabilités (cadrage — non architecture)

1. Lire le mapping D1 pour un `cycleTypeId` **déjà validé**.
2. Résoudre une référence CKC **opératoire** selon priorité detailed → synthetic fallback.
3. Produire un résultat de résolution déterministe, traçable, sans `executionAuthority`.
4. Ne **pas** parser les documents Markdown méthode au runtime.
5. Ne **pas** inventer de contenu detailed si absent.
6. Ne **pas** appeler QualifyCycle (responsabilité du bridge).

### Frontières

| Inclut | Exclut |
|--------|--------|
| Statuts / codes / source utilisée | Recommandation de profil |
| Validation de cohérence mapping↔résultat | UI |
| Fingerprint / version catalogue | CreateCycle / persistance |
| Fail-closed sur invalid/unavailable | Promotion baseline méthode |

### Propriétés attendues (critères — non design technique)

- Déterminisme pour entrées identiques.
- Testabilité sans I/O réseau.
- Pureté préférable ; dépendances acceptables = ports injectés **sans** fs Markdown.
- Idempotence logique (même entrée → même statut/source).
- Git reste la source contractuelle des chemins CKC ; le runtime consomme des **références et métadonnées**, pas le texte Markdown.

> **Aucune architecture technique n’est adoptée dans ce document.** Les ports T-A2 existants sont des **observations** d’héritage, pas une décision D2.

## K. Résolution et statuts

### Statuts candidats (NOT DECIDED)

| Statut candidat | Signification |
|-----------------|---------------|
| `resolved_detailed` | Référence detailed valide et sélectionnée |
| `resolved_synthetic` | Référence synthétique primaire (11 types) |
| `resolved_fallback_synthetic` | Detailed indisponible/invalide → fallback synthétique utilisé |
| `unresolved_invalid_mapping` | Mapping absent/incohérent |
| `unresolved_unavailable` | Références attendues indisponibles |
| `unresolved_catalog_incompatible` | Version/fingerprint catalogue incompatible |
| `unresolved_cycle_not_selectable` | deprecated / unavailable / inconnu |

### Priorité de résolution (héritée D1, à confirmer en D2)

1. Si `primaryLevel=detailed` et primary utilisable → detailed.
2. Sinon si fallbackPolicy + fallbackReference synthétique utilisable → fallback.
3. Si `primaryLevel=synthetic` → synthetic map.
4. Sinon → fail-closed (`unavailableBehavior`).

## L. Consommation CKC

### Distinctions obligatoires

| Concept | Définition cadrage |
|---------|-------------------|
| **Mapping présent** | Entrée D1 `ckc.mandatory=true` + références |
| **Référence résolue** | Statut `resolved_*` avec source utilisée |
| **Résolution valide** | Statut resolved + invariants (`executionAuthority=false`, chemins non vides, cohérence level) |
| **Guidance consommée** | Le résultat D2 **porte** explicitement le contexte CKC résolu (ids, level, source, fallbackUsed, doctrineStatus) dans le payload exploitable |
| **Preuve de consommation** | Champ structuré `ckcConsumptionProof` : `{ catalogVersion, cycleTypeId, resolutionStatus, sourceRef, fallbackUsed, resolvedAt, correlationId }` |
| **QualifyCycle exploitable** | Profil produit **uniquement si** résolution valide **et** six signaux complets |
| **Exécution autorisée** | **Jamais** par D2 / CKC / QualifyCycle |

### Règle produit candidate (doc 13)

Un résultat QualifyCycle n’est **contractuellement exploitable** dans le parcours produit que si la résolution CKC est **valide** (detailed ou synthetic/fallback).
Cela **ne** reprend **pas** la sémantique CreateCycle T-A2 (« absent n’bloque pas la création ») — CreateCycle reste hors V3.1-D2.

### Confirmation d’autorité

- Consommer un CKC ≠ accorder une autorité.
- QualifyCycle reste une recommandation.
- D2 ne consomme aucun gate Morris.
- CKC invalide/indisponible → résultat produit **non exploitable** (fail-closed) selon le contrat adopté.

## M. Bridge QualifyCycle

### Flux candidat

```text
catalogue D1
  → validate cycleTypeId
  → resolver CKC (+ validation résolution)
  → si résolution invalide : stop exploitabilité (codes §O)
  → six signaux explicites complets
  → QualifyCycle (domaine T-A2 inchangé)
  → résultat read-only enrichi + preuve consommation CKC
```

### Responsabilités du bridge

| Fait | Ne fait pas |
|------|-------------|
| Orchestre l’ordre catalogue → CKC → QualifyCycle | Dupliquer `recommendProfile` / invariants T-A2 |
| Enrichit le résultat avec état CKC + preuve | Créer une instance / persister |
| Applique fail-closed d’exploitabilité produit | Recommander le type |
| Passe `cycleTypeId` comme hint capitalization | Exposer `requestedProfile` (sauf décision contraire) |

### Données vers QualifyCycle

- `signals` (six booléens explicites)
- `cycleTypeId` (hint capitalization)
- éventuellement `objective`/`scope` **non scorés**

### Données hors QualifyCycle (restent au bridge)

- mapping / résolution / preuve CKC
- version catalogue
- disclosures doctrine
- codes d’erreur CKC

### Erreurs

- Erreur CKC → pas d’appel QualifyCycle **ou** appel isolé non exposé comme exploitable (à trancher — recommandation : **ne pas exposer** de profil exploitable).
- Signaux incomplets → refus avant QualifyCycle.

### Relation D3

D3 consommera le **même contrat de sortie** ; le bridge ne connaît pas le parcours UI.

## N. Multi-CKC — options

**Statut : NOT DECIDED — MORRIS DECISION REQUIRED.**
Le multi-CKC n’est **pas** adopté.

### Option D2-CKC-A — Mono-CKC D1 conservé

- Un CKC principal par type ; fallback de **remplacement** (déjà D1).
- Pas de consommation simultanée d’extensions.
- **Valeur maintenant :** maximale simplicité ; aligné D1.
- **Risque :** extensibilité future plus coûteuse si le contrat D2 fige trop le mono.

### Option D2-CKC-B — Core + extensions contrôlées

- CKC Core obligatoire + 0..N extensions listées explicitement.
- Activation déterministe ; conflits à définir.
- **Valeur :** richesse doctrinale.
- **Risque :** combinatoire, dette de tests, priorité/conflits, impact D3.

### Option D2-CKC-C — Slicing progressif

- D2 initial : resolver Core + fallback D1 uniquement.
- Contrat D2 **extensible** (champs préparés) **sans** implémenter les extensions.
- Incrément ultérieur (D2-D ou lot dédié) : extensions après preuve d’usage + GO Morris.

### Comparaison

| Critère | A | B | C |
|---------|---|---|---|
| Valeur immédiate | Haute | Moyenne | Haute |
| Complexité maintenant | Basse | Haute | Basse→moyenne |
| Dette | Moyenne si rigidité | Haute | Contrôlée |
| Testabilité | Haute | Basse | Haute puis progressive |
| Traçabilité | Simple | Complexe | Simple puis enrichie |
| Impact D3 | Faible | Fort | Faible |
| Compatibilité D1 | Native | Nécessite extension contrat | Native |
| Doctrine | Stable | Risque de sur-promesse | Stable |

### Challenge

Le multi-CKC est-il utile **dès** le premier D2, ou suffit-il de rendre le contrat **extensible** sans implémenter les extensions ?

### Recommandation candidate (non adoptée)

**D2-CKC-C** : livrer D2 sur le mono-CKC D1 ; préparer des champs d’extension **vides/optionnels** dans le contrat de sortie ; **ne pas** activer d’extensions avant preuve d’usage et GO Morris.
Évite le big-bang B tout en réduisant la rigidité de A.

## O. Fail-closed

| Scénario | Résultat candidat | Code candidat | Bloquant exploitabilité | Retry | Gate |
|----------|-------------------|---------------|-------------------------|-------|------|
| `cycleTypeId` inconnu | Refus | `CYCLE_TYPE_UNKNOWN` | Oui | Après correction sélection | Non |
| Cycle deprecated | Refus sélection / non exploitable | `CYCLE_TYPE_DEPRECATED` | Oui | Non (sauf réactivation catalogue) | Morris structure |
| Cycle unavailable | Refus | `CYCLE_TYPE_UNAVAILABLE` | Oui | Plus tard | Non |
| Mapping CKC absent | Non exploitable | `CKC_MAPPING_MISSING` | Oui | Non (bug catalogue) | Correctif D1 |
| Detailed invalide + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | Non si fallback valide | — | Non |
| Detailed + fallback invalides | Non exploitable | `CKC_UNAVAILABLE` | Oui | Non | Correctif |
| Synthetic invalide | Non exploitable | `CKC_SYNTHETIC_INVALID` | Oui | Non | Correctif |
| Version catalogue incompatible | Non exploitable | `CATALOG_VERSION_INCOMPATIBLE` | Oui | Après alignement | Possible |
| Signaux incomplets | Refus QualifyCycle | `SIGNALS_INCOMPLETE` | Oui | Oui | Non |
| Résultat CKC incohérent | Non exploitable | `CKC_RESOLUTION_INCOHERENT` | Oui | Non | Correctif |
| Erreur interne | Non exploitable | `D2_INTERNAL_ERROR` | Oui | Limité | Non |
| Contexte stale (fingerprint) | Non exploitable | `CATALOG_STALE` | Oui | Recharger catalogue | Non |

**Information utilisateur future (D3) :** message clair, non technique autant que possible, sans faux « prêt à exécuter ».

## P. Anti-claims

D2 **ne** :

- décide pas du cycle ;
- remplace pas le contrat T-A2 pour le profil ;
- crée / persiste rien ;
- consomme aucun gate Morris ;
- accorde aucune autorité au CKC ;
- rend pas le produit production-ready ;
- promeut pas les CKC en baseline méthode globale ;
- constitue pas D3 ;
- n’est pas « IMPLEMENTED / ADOPTED / READY FOR DELIVERY » tant que Morris n’a pas tranché et qu’aucun GO Delivery n’existe.

## Q. Frontières D2 / D3

| D2 | D3 |
|----|----|
| Contrats / orchestration read-only | UI sélection type + signaux + lecture résultat |
| Preuve consommation CKC | Affichage disclosures / erreurs |
| Bridge QualifyCycle | Aucune règle métier nouvelle |
| Pas de Figma | Réserve Figma (parcours) |

**Données que D3 devra pouvoir consommer :** type sélectionné ; profil ; justification lisible ; état CKC ; source/fallback ; disclosures ; erreurs ; Critical blocked (informatif) ; non-persistance.

**Non produits ici :** parcours détaillé D3, architecture UI, frames, composants, code.

## R. Slicing candidat

| Lot | Contenu | Dépendances |
|-----|---------|-------------|
| **D2-A** | Projection catalogue + contrat de résolution (types/statuts/codes) | D1 |
| **D2-B** | Resolver CKC + fail-closed + preuve consommation | D2-A |
| **D2-C** | Bridge QualifyCycle + résultat enrichi exploitable | D2-B + T-A2 |
| **D2-D** (éventuel) | Extensions multi-CKC | Décision Morris multi-CKC + preuve d’usage |

### Modes de livraison candidats

1. **Une Delivery** couvrant A+B+C (risque big-bang).
2. **Trois incréments** A → B → C (recommandation candidate).
3. **A+B puis C** (compromis).

**Aucun slicing n’est adopté sans décision Morris (D-V3.1-D2-09).**

## S. Critères de succès du cadrage

- Problème D2 clair ; D1/D2/D3 séparés.
- Resolver ≠ bridge ; résolution ≠ consommation.
- Règles T-A2 non dupliquées.
- Multi-CKC traité sans adoption implicite.
- Fail-closed et authority boundaries explicites.
- Decision pack complet ; options comparables.
- Aucun code ; aucune architecture adoptée ; aucune Delivery ; aucun D3.

## T. Risques et réserves

| ID | Risque | Mitigation cadrage |
|----|--------|--------------------|
| R-D2-01 | Duplication méthode dans le runtime | Références + métadonnées ; pas de Markdown parse |
| R-D2-02 | Confusion mapping/résolution/consommation | Sections L + glossaire anti-claims |
| R-D2-03 | Sur-promesse recommandation de type | Héritage V3 : sélection utilisateur seule |
| R-D2-04 | Multi-CKC combinatoire | Option C ; D2-D gated |
| R-D2-05 | Extensions implicites | Liste explicite obligatoire si B |
| R-D2-06 | Duplication T-A2 | Bridge orchestre seulement |
| R-D2-07 | Critical overclaim | Informatif ; pas de gate |
| R-D2-08 | Confusion recommandation/décision | `isMorrisDecision=false` |
| R-D2-09 | Couplage prématuré D3 | Frontière Q |
| R-D2-10 | Dette versionnement | Fingerprint catalogue + codes stale |
| R-D2-11 | Preuve consommation insuffisante | Champ structuré obligatoire |
| R-D2-12 | Héritage `ResolveCycleKnowledgeContract` vs produit | Distinguer CreateCycle guidance ≠ exploitabilité V3.1 |
| **INHERITED-R-01** | Condensation README framing | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant D2 cadrage |

## U. Decision pack Morris

Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS DECISION REQUIRED.**

### D-V3.1-D2-01 — Promesse produit D2

- **Problème :** que garantit D2 sans UI ?
- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
- **Reco candidate :** (b) — promesse = type validé → CKC consommé → profil recommandé traçable, read-only.
- **Bénéfices / risques / dette :** clarté produit / sur-scope si UI / dette faible si borné.
- **Réversibilité :** haute (doc).
- **Impact D1/D3 :** aucun runtime D1 ; D3 consomme le contrat.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-02 — Contrat du resolver CKC

- **Problème :** responsabilités exactes du resolver.
- **Options :** (a) resolver = mapping lookup only ; (b) resolver = résolution + validation invariants ; (c) resolver = + QualifyCycle.
- **Reco candidate :** (b).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-03 — Statuts de résolution

- **Problème :** vocabulaire des statuts §K.
- **Options :** jeu minimal (resolved/unresolved) ; jeu détaillé §K ; alignement strict types T-A2 `CkcStatus` existants.
- **Reco candidate :** jeu détaillé §K **avec** mapping explicite vers types T-A2 si réutilisation — sans imposer l’archi.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-04 — Définition de « CKC consommé »

- **Problème :** critère d’exploitabilité.
- **Options :** (a) mapping présent suffit ; (b) résolution valide suffit ; (c) résolution valide + preuve structurée dans le payload.
- **Reco candidate :** (c).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-05 — Règle fail-closed

- **Problème :** matrice §O.
- **Options :** adopter matrice telle quelle ; assouplir fallback ; aligner sur « absent n’bloque pas CreateCycle ».
- **Reco candidate :** adopter esprit matrice §O pour **exploitabilité produit** ; CreateCycle hors scope.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-06 — Contrat du bridge QualifyCycle

- **Problème :** orchestration et non-duplication T-A2.
- **Options :** (a) bridge unique ; (b) appels séparés laissés à D3 ; (c) fusion dans QualifyCycle.
- **Reco candidate :** (a) — bridge orchestre ; QualifyCycle domaine inchangé.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé

- **Problème :** A / B / C §N.
- **Reco candidate :** **C** (progressif) — mono maintenant, extensible.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-08 — Activation des extensions CKC

- **Problème :** si multi, qui active quoi.
- **Options :** catalogue explicite ; config runtime ; invention dynamique (interdite).
- **Reco candidate :** si B un jour — liste explicite dans catalogue ; **sinon N/A sous C**.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-09 — Slicing D2

- **Problème :** A/B/C/D et mode livraison.
- **Reco candidate :** incréments **D2-A → D2-B → D2-C** ; D2-D gated.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-10 — Frontière D2/D3

- **Problème :** données consommables par D3.
- **Reco candidate :** liste §Q ; aucun parcours UI dans D2.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-11 — Versionnement et traçabilité

- **Problème :** fingerprint catalogue + preuve consommation.
- **Options :** version string seule ; version + hash contenu ; correlationId obligatoire.
- **Reco candidate :** version + hash candidat + correlationId.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-12 — Gate de sortie vers conception/architecture

- **Problème :** après arbitrage, quel GO.
- **Options :** conception fonctionnelle D2 ; architecture fonctionnelle D2 ; Delivery directe (déconseillé).
- **Reco candidate :** **conception fonctionnelle D2** (cycle 2) après arbitrage des D-V3.1-D2-01…11 ; architecture ensuite ; Delivery seulement après.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

## V. Recommandation candidate (synthèse — non adoptée)

1. Promesse D2 = exploitabilité read-only type→CKC consommé→profil.
2. Resolver = résolution + validation ; bridge = orchestration ; T-A2 inchangé.
3. « Consommé » = résolution valide + preuve structurée.
4. Fail-closed produit selon §O ; CreateCycle hors scope.
5. Multi-CKC : option **C** ; pas d’extensions dans le premier Delivery D2.
6. Slicing : D2-A → D2-B → D2-C.
7. Prochain cycle après arbitrage : **conception fonctionnelle D2**, pas Delivery.

## W. Gates suivants candidats

```text
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Puis, seulement après arbitrage :

```text
GO FUNCTIONAL DESIGN SFIA STUDIO V3.1-D2 …
```

**Aucun GO Delivery / D3 / UI / Figma n’est proposé en enchaînement automatique.**

## X. Verdict

```text
V3.1-D2 FRAMING COMPLETE —
D1 BASELINE AND D2 PROBLEM VERIFIED —
CKC RESOLUTION, CONSUMPTION AND QUALIFYCYCLE BRIDGE BOUNDARIES DOCUMENTED —
MONO-CKC AND CONTROLLED MULTI-CKC OPTIONS COMPARED —
FAIL-CLOSED AND AUTHORITY BOUNDARIES DEFINED —
MORRIS DECISION PACK PREPARED —
NO DECISION ADOPTED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Statut :** `V3.1-D2 FRAMING READY FOR MORRIS ARBITRATION — FUNCTIONAL DESIGN AND ARCHITECTURE REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED`

```

## 08 complet après modification
```markdown
# 08 — Implementation backlog and slicing

## Stratégie

Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

## Lot V1 / V2

**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

## Lot V3 — Cycle Recommendation

**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

## Lot V3.1 — Profile Qualification (conception)

**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

**DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

## Lot V3.1-D1 — Catalogue runtime + mapping CKC

**Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.

**Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

**Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).

**Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).

**QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

Docs :
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
- rapports `01` / `02` / `03` / `04`

| Preuve | Résultat |
|--------|----------|
| 15 IDs / mapping CKC | conformes |
| Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
| QA-G2 | vert |
| QA-G3 | **PASS Morris** |
| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
| D2 cadrage | **réalisé** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · arbitrage Morris **requis** |
| Delivery D2 / D3 | **non autorisées** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage réalisé** · Delivery **non autorisée** · décisions NOT DECIDED |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit · multi-CKC **non adopté** — voir decision pack doc [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md).

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

```

## README complet après modification
```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 TECHNICALLY CLOSED ON MAIN — V3.1-D2 CADRAGE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — DELIVERY D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-08-01 14:34:28 CEST (+0200) |
| **Cycle courant** | 1 — Cadrage V3.1-D2 |
| **Profil** | **Standard** |
| **Typologie** | DOC |
| **Gate courant** | Cadrage D2 **consommé** (2026-08-01 14:03 CEST) — formulation Morris bornée |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Doc D2** | [`15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) |
| **Docs protégées** | `12` / `13` / `14` **inchangés** |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1** | **techniquement clos** (Delivery · QA · PR #296 · capitalisation #297 · cleanup) |
| **V3.1-D2 cadrage** | **terminé localement** — decision pack D-V3.1-D2-01…12 **NOT DECIDED** |
| V3.1-D2 Delivery / conception / architecture | **non ouverts** — GO Morris distinct requis |
| V3.1-D3 | **non ouvert** · réserve Figma inchangée |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat + runtime D1 résolus · orchestration / consommation CKC / bridge QualifyCycle = **objet du cadrage D2** (doc 15) — **aucune adoption** dans ce cycle.

**INHERITED-R-01 (README) :** condensation du framing en index vivant — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation D2 Delivery.

## Gate candidat suivant

```text
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## Verdict

`V3.1-D2 FRAMING COMPLETE — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION — NO DELIVERY — D3 NOT OPENED`

```

## Diffs
### 08
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index c138afc..c46c2f9 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -1,68 +1,69 @@
 # 08 — Implementation backlog and slicing

 ## Stratégie

 Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

 ## Lot V1 / V2

 **INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

 ## Lot V3 — Cycle Recommendation

 **CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

 ## Lot V3.1 — Profile Qualification (conception)

 **FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

 ## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

 **DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

 ## Lot V3.1-D1 — Catalogue runtime + mapping CKC

 **Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.

 **Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

 **Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).

 **Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).

 **QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

-**Statut PR readiness :** `READY FOR PR` — [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) — commit/push/draft PR **soumis à GO**.
+**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

 Docs :
 - [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
 - rapports `01` / `02` / `03` / `04`

 | Preuve | Résultat |
 |--------|----------|
 | 15 IDs / mapping CKC | conformes |
 | Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
 | QA-G2 | vert |
 | QA-G3 | **PASS Morris** |
-| PR readiness | **READY FOR PR** · package 13 fichiers · PR **non créée** |
-| D2 / D3 | **non ouverts** |
+| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
+| D2 cadrage | **réalisé** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · arbitrage Morris **requis** |
+| Delivery D2 / D3 | **non autorisées** |

 ### Slicing CAT-08

 | Lot | Contenu | Statut |
 |-----|---------|--------|
-| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + QA-G3 PASS · **PR readiness READY** · Git pending GO |
-| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
+| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
+| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage réalisé** · Delivery **non autorisée** · décisions NOT DECIDED |
 | **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

 ### Réserves QA

-R-QA-01…09 **CLOSED**. QA-G3 PASS. PR readiness ≠ autorisation commit/push/PR.
+R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

 ### Réserves D2

-Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit.
+Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit · multi-CKC **non adopté** — voir decision pack doc [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md).

 ## Lot V3.2 / V4 / V5 / V6

 **NOT AUTHORIZED.**

```
### README
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index 23b6c6f..bf3f107 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -1,37 +1,49 @@
 # First user-visible SFIA Studio vertical slice — Framing

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
-| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
-| **Cycle courant** | 13 — PR readiness V3.1-D1 |
-| **Profil** | **Critical** |
-| **Typologie** | EVOL |
-| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
-| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
-| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
-| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
-| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |
+| **Statut** | `FRAMING LIVING — V3.1-D1 TECHNICALLY CLOSED ON MAIN — V3.1-D2 CADRAGE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — DELIVERY D2/D3 NOT AUTHORIZED` |
+| **Date** | 2026-08-01 14:34:28 CEST (+0200) |
+| **Cycle courant** | 1 — Cadrage V3.1-D2 |
+| **Profil** | **Standard** |
+| **Typologie** | DOC |
+| **Gate courant** | Cadrage D2 **consommé** (2026-08-01 14:03 CEST) — formulation Morris bornée |
+| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **Doc D2** | [`15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) |
+| **Docs protégées** | `12` / `13` / `14` **inchangés** |
+| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

 ## Synthèse

 | Lot | État |
 |-----|------|
 | V1 / V2 | intégrés `main` |
 | V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
-| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
-| **QA-G3** | **PASS Morris** |
-| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
-| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
+| **V3.1-D1** | **techniquement clos** (Delivery · QA · PR #296 · capitalisation #297 · cleanup) |
+| **V3.1-D2 cadrage** | **terminé localement** — decision pack D-V3.1-D2-01…12 **NOT DECIDED** |
+| V3.1-D2 Delivery / conception / architecture | **non ouverts** — GO Morris distinct requis |
+| V3.1-D3 | **non ouvert** · réserve Figma inchangée |
 | V3.2 / V4–V6 | non autorisés |

-**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.
+**R-V3.1-CATALOG-01 :** contrat + runtime D1 résolus · orchestration / consommation CKC / bridge QualifyCycle = **objet du cadrage D2** (doc 15) — **aucune adoption** dans ce cycle.
+
+**INHERITED-R-01 (README) :** condensation du framing en index vivant — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation D2 Delivery.

 ## Gate candidat suivant

-`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
+```text
+GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
+DECIDE D-V3.1-D2-01…12 —
+KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
+NO FUNCTIONAL DESIGN —
+NO ARCHITECTURE —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```

 ## Verdict

-`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`
+`V3.1-D2 FRAMING COMPLETE — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION — NO DELIVERY — D3 NOT OPENED`

```

## Decision pack complet
```markdown
## U. Decision pack Morris

Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS DECISION REQUIRED.**

### D-V3.1-D2-01 — Promesse produit D2

- **Problème :** que garantit D2 sans UI ?
- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
- **Reco candidate :** (b) — promesse = type validé → CKC consommé → profil recommandé traçable, read-only.
- **Bénéfices / risques / dette :** clarté produit / sur-scope si UI / dette faible si borné.
- **Réversibilité :** haute (doc).
- **Impact D1/D3 :** aucun runtime D1 ; D3 consomme le contrat.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-02 — Contrat du resolver CKC

- **Problème :** responsabilités exactes du resolver.
- **Options :** (a) resolver = mapping lookup only ; (b) resolver = résolution + validation invariants ; (c) resolver = + QualifyCycle.
- **Reco candidate :** (b).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-03 — Statuts de résolution

- **Problème :** vocabulaire des statuts §K.
- **Options :** jeu minimal (resolved/unresolved) ; jeu détaillé §K ; alignement strict types T-A2 `CkcStatus` existants.
- **Reco candidate :** jeu détaillé §K **avec** mapping explicite vers types T-A2 si réutilisation — sans imposer l’archi.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-04 — Définition de « CKC consommé »

- **Problème :** critère d’exploitabilité.
- **Options :** (a) mapping présent suffit ; (b) résolution valide suffit ; (c) résolution valide + preuve structurée dans le payload.
- **Reco candidate :** (c).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-05 — Règle fail-closed

- **Problème :** matrice §O.
- **Options :** adopter matrice telle quelle ; assouplir fallback ; aligner sur « absent n’bloque pas CreateCycle ».
- **Reco candidate :** adopter esprit matrice §O pour **exploitabilité produit** ; CreateCycle hors scope.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-06 — Contrat du bridge QualifyCycle

- **Problème :** orchestration et non-duplication T-A2.
- **Options :** (a) bridge unique ; (b) appels séparés laissés à D3 ; (c) fusion dans QualifyCycle.
- **Reco candidate :** (a) — bridge orchestre ; QualifyCycle domaine inchangé.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé

- **Problème :** A / B / C §N.
- **Reco candidate :** **C** (progressif) — mono maintenant, extensible.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-08 — Activation des extensions CKC

- **Problème :** si multi, qui active quoi.
- **Options :** catalogue explicite ; config runtime ; invention dynamique (interdite).
- **Reco candidate :** si B un jour — liste explicite dans catalogue ; **sinon N/A sous C**.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-09 — Slicing D2

- **Problème :** A/B/C/D et mode livraison.
- **Reco candidate :** incréments **D2-A → D2-B → D2-C** ; D2-D gated.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-10 — Frontière D2/D3

- **Problème :** données consommables par D3.
- **Reco candidate :** liste §Q ; aucun parcours UI dans D2.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-11 — Versionnement et traçabilité

- **Problème :** fingerprint catalogue + preuve consommation.
- **Options :** version string seule ; version + hash contenu ; correlationId obligatoire.
- **Reco candidate :** version + hash candidat + correlationId.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-12 — Gate de sortie vers conception/architecture

- **Problème :** après arbitrage, quel GO.
- **Options :** conception fonctionnelle D2 ; architecture fonctionnelle D2 ; Delivery directe (déconseillé).
- **Reco candidate :** **conception fonctionnelle D2** (cycle 2) après arbitrage des D-V3.1-D2-01…11 ; architecture ensuite ; Delivery seulement après.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.


```

## Multi-CKC non décidé
Oui — options A/B/C · reco candidate C · statut NOT DECIDED

## Garde-fous / réserves
- Anti-claims §P
- INHERITED-R-01 NOT LIFTED
- CreateCycle / UI / D3 / method promotion interdits

## Absence code / tests / méthode
Confirmée — aucun test produit lancé ; scans wording OK (occurrences historiques/négatives/NOT DECIDED)

## État Git final
```
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== status project ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
=== staged ===
=== diff name-status ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== diff stat ===
 .../08-implementation-backlog-and-slicing.md       | 15 +++----
 .../README.md                                      | 48 ++++++++++++++--------
 2 files changed, 38 insertions(+), 25 deletions(-)
wt_count=77
remote_d2=local_d2=PRESENT
```
- aucun staged · aucun commit · aucun push · remote D2 absente

## Rapport temporaire complet
--- BEGIN FRAMING REPORT ---
# V3.1-D2 Framing Report

## Meta
- Horodatage: 2026-08-01 14:34:28 CEST (+0200)
- Branche: framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage @ e1befcb8…
- Cycle 1 Cadrage · Profil Standard · Typologie DOC

## Gate Morris
Formulation Morris: « après c'est logique que D1 ne couvre pas l'ensemble mais si elle respecte la doctrine 3.0 c'est ok, donc ok pour lancer le cadrage de D2 »
Interprétation bornée: GO CADRAGE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — DEFINE PRODUCT PROBLEM, D2 BOUNDARIES, CKC RESOLUTION, CKC CONSUMPTION, QUALIFYCYCLE BRIDGE, MULTI-CKC OPTIONS, FAIL-CLOSED BEHAVIOUR AND DECISION PACK — NO IMPLEMENTATION — NO DELIVERY — NO D3 — NO UI — NO FIGMA — NO CREATECYCLE — NO METHOD PROMOTION
Date GO: 2026-08-01 14:03 CEST (+0200)

## CKC
pilots/01-cadrage.md · method-candidate · executionAuthority=false · consommation obligatoire

## Git Truth
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=main
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
L/R main...origin/main=0	0
=== STATUS NON-TMP ===
(none)
=== STAGED ===
wt_count=77
=== PRUNE DRY-RUN ===
local_d2=ABSENT
=== LS-REMOTE D2 ===
=== HANDOFF ===
9ac1ad6b23d9e11a8306e2c936b88c0e6c8d68f0	refs/heads/sfia/review-handoff
handoff_tip=9ac1ad6b23d9e11a8306e2c936b88c0e6c8d68f0
handoff_blob=87a8670747989cca3c6d3c8bf7c1d6362448b893
expected_tip_ancestor=YES
=== GH AUTH ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## Sources
Voir inventaire:
```
# V3.1-D2 Source Inventory

## Git Truth
See v3-1-d2-git-truth.txt — main@e1befcb8, 0/0, 77 worktrees, handoff 9ac1ad6/87a8670

## Created
- framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md

## Modified
- framing/08-implementation-backlog-and-slicing.md (D1 closed + D2 cadrage status)
- framing/README.md (living index + reserve NOT LIFTED)

## Unchanged (protected)
- 12, 13, 14
- D1 runtime / tests / method / app code

## Observed inheritance (read-only)
- cycleTypeCatalog.ts D1
- CkcResolverPort / ResolveCycleKnowledgeContract / QualifyCycle T-A2

```

## Fichiers créés/modifiés
- CREATED: 15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
- MODIFIED: 08-implementation-backlog-and-slicing.md
- MODIFIED: README.md (framing)

## Document 15 complet
```markdown
# 15 — V3.1-D2 Cadrage — CKC Resolver & QualifyCycle Bridge

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-01 14:34:28 CEST (+0200) |
| **Cycle projet** | 1 — Cadrage |
| **Profil SFIA** | Standard |
| **Typologie** | DOC |
| **Gate Morris consommé** | Formulation Morris : « après c'est logique que D1 ne couvre pas l'ensemble mais si elle respecte la doctrine 3.0 c'est ok, donc ok pour lancer le cadrage de D2 » — interprétation bornée : `GO CADRAGE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — …` (2026-08-01 14:03 CEST +0200) |
| **Branche locale** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **CKC (ce cycle)** | Pilote détaillé `pilots/01-cadrage.md` · method-candidate · consommation obligatoire · `executionAuthority=false` |
| **Statut documentaire** | `V3.1-D2 FRAMING COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION` |
| **Code / Delivery / D3 / UI / Figma / CreateCycle** | **non** |
| **Commit / push / PR projet** | **non autorisés** |

## B. Gate Morris

**Autorisé :** cadrage repo-informed D2 ; options ; recommandation candidate ; decision pack ; mise à jour de traçabilité (`08`, README framing) ; Review Handoff Git.

**Interdit :** implémentation ; Delivery ; architecture adoptée ; D3 ; UI ; Figma ; CreateCycle ; modification catalogue D1 ; modification QualifyCycle ; promotion méthode ; commit/push/PR projet.

## C. Sources consultées

### Gouvernance

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `method/.../cycle-knowledge-contracts/pilots/01-cadrage.md`
- `method/.../02-fifteen-cycles-synthetic-map.md`
- `method/.../sfia-v2.5-project-cycles-method-candidate.md`

### Trajectoire V3 / V3.1

- framing `08`, `12`, `13`, `14`, `README`
- D1 `README`, `05-capitalization-rex.md`
- `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- `app/lib/oa/cycle/index.ts`
- ports / application existants T-A2 : `ports/ckcResolver.ts`, `application/resolveCycleKnowledgeContract.ts`, `application/qualifyCycle.ts`, `domain/types.ts`, `domain/qualification.ts`
- handoff `sfia/review-handoff` tip `9ac1ad6…` / blob `87a8670…`

## D. État D1 et héritage

### D1 fournit (intégré `main`)

- quinze `cycleTypeId` stables `cyc:*` ;
- métadonnées catalogue version `0.1.0-v3.1-d1` ;
- mapping CKC **mandatory** (4 detailed + fallback synthétique ; 11 synthetic) ;
- `executionAuthority=false`, `doctrineStatus`, `unavailableBehavior=fail-closed` ;
- validateur multi-issues ;
- opérations pures `listCycleTypes` / `getCycleTypeById` / `isKnownCycleTypeId` / `validateCycleTypeCatalog` ;
- **aucun** parsing Markdown runtime.

### D1 ne fournit pas

- résolution opérationnelle du CKC ;
- validation d’un résultat de résolution pour l’exploitabilité produit ;
- preuve de consommation CKC ;
- bridge catalogue → QualifyCycle enrichi ;
- projection vertical-slice produit ;
- UI.

### Héritage T-A2 déjà présent (à ne pas confondre avec D2 produit)

| Artefact | Rôle actuel | Limite pour D2 |
|----------|-------------|----------------|
| `CkcResolverPort` / `memoryCkcResolver` | Port guidance ; mémoire ; `executionAuthority=false` | **Non** branché sur le catalogue D1 ; pas de preuve produit de consommation |
| `ResolveCycleKnowledgeContract` | Use-case résolution ; absent/unavailable OK pour guidance ; **ne bloque pas CreateCycle** pour CKC absent | Comportement CreateCycle ≠ règle d’exploitabilité produit V3.1 (doc 13) |
| `QualifyCycle` | Recommandation de **profil** depuis six signaux ; `isMorrisDecision=false` | Ne consomme pas le mapping D1 ; ne produit pas l’état CKC produit |

### Décisions héritées (déjà tranchées — non rouvertes ici)

- L’utilisateur sélectionne le type ; pas de saisie libre ; pas de recommandation automatique du type.
- T-A2 recommande uniquement le profil ; type ≠ profil ; recommandation ≠ décision Morris.
- Six signaux explicites ; Critical informatif fail-closed ; `isMorrisDecision=false`.
- CKC mandatory ; `executionAuthority=false` ; doctrine method-candidate.
- Slicing adopté **D1 → D2 → D3** (D-V3.1-CAT-08) — Delivery D2/D3 non ouvertes avant GO.
- Aucun CreateCycle / LPS / EpistemicItem dans V3.1 visible slice.
- Git = source contractuelle ; pas de parsing Markdown runtime.
- Réserve README framing : **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

## E. Problème produit D2

**Question centrale :**

> Comment SFIA Studio transforme-t-il un `cycleTypeId` sélectionné et validé en **contexte CKC résolu**, puis en **qualification de profil T-A2 exploitable**, sans inventer d’autorité, sans recommander automatiquement le type et sans créer de `CycleInstance` ?

**Écart D1 → produit :**

| Concept | État après D1 |
|---------|----------------|
| Mapping CKC | Présent (statique) |
| Résolution CKC | Absente (orchestration) |
| Consommation CKC | Absente (preuve produit) |
| Bridge QualifyCycle | Absent (exploitabilité enrichie) |
| UI | Absente (D3) |

## F. Objectif et valeur

### Intention

Rendre **observable et testable** le passage « type catalogue validé → CKC résolu/consommé → profil recommandé traçable », en read-only, avant toute UI.

### Valeur utilisateur (sans UI)

- Un opérateur / revueur / testeur peut obtenir un **résultat structuré** : type, statut CKC, source/fallback, profil, rationale, disclosures, erreurs.
- La doctrine 3.0 est **consommée** (pas seulement référencée) sans autorité d’exécution.
- D3 pourra s’appuyer sur un contrat d’entrées/sorties stable.

### Pourquoi D2 avant D3

Sans D2, une UI D3 afficherait un type et un profil **sans** preuve CKC — confusion mapping ≠ résolution ≠ consommation. D2 fixe le contrat d’exploitabilité ; D3 ne fait qu’exposer.

## G. Usager et autorité

| Rôle | Consomme D2 ? | Autorité |
|------|---------------|----------|
| Utilisateur produit (futur D3) | Indirectement via UI | Sélectionne le type ; répond aux signaux |
| Opérateur / QA / revueur | Directement (API/domaine/projection) | Lit le résultat ; n’adopte pas de gate |
| Morris | Arbitrage des décisions D2 | Seul décideur d’adoption |
| CKC / QualifyCycle | Guidance / recommandation | **Aucune** autorité d’exécution ; `isMorrisDecision=false` |

## H. Entrées

| Entrée | Source | Obligatoire | Notes |
|--------|--------|-------------|-------|
| `cycleTypeId` | Sélection utilisateur validée via D1 | Oui | Pas de saisie libre |
| Catalogue version / fingerprint | D1 `CYCLE_TYPE_CATALOG_VERSION` (+ hash candidat) | Oui | Traçabilité |
| Mapping CKC de l’entrée | D1 `CycleTypeCkcMapping` | Oui | detailed/synthetic + fallback |
| Six signaux Oui/Non | Utilisateur / harness | Oui pour QualifyCycle | Absence ≠ `false` |
| `requestedProfile` | — | **Candidate exclusion** | Doc 13 : non exposé V3.1 — maintenir exclusion sauf décision Morris |
| Contexte projet (objectif/scope) | Optionnel | Non | Affichage futur ; **n’influence pas** QualifyCycle actuel |
| `correlationId` / horodatage | Runtime | Recommandé | Traçabilité |

## I. Sorties

Sorties candidates d’un résultat D2 read-only :

| Sortie | Description |
|--------|-------------|
| `cycleTypeId` + métadonnées catalogue | Type sélectionné / labels / lifecycle |
| `ckcResolutionStatus` | Statut de résolution (voir §K) |
| `ckcPrimaryLevel` / `ckcSourceUsed` | detailed \| synthetic |
| `fallbackUsed` | booléen |
| `ckcConsumptionProof` | Preuve structurée de consommation (voir §L) |
| `recommendedProfile` | Light \| Standard \| Critical |
| `rationale` | Code/texte T-A2 |
| `criticalSignalsPresent` | booléen |
| `isMorrisDecision` | **toujours** `false` |
| `disclosures` / `reserves` | Dont doctrine method-candidate |
| `errorCodes` | Fail-closed (voir §O) |
| `catalogVersion` / `resolvedAt` | Traçabilité |

**Hors sorties D2 :** `CycleInstance`, lien LPS, EpistemicItem, gate Morris consommé, recommandation de type.

## J. Resolver CKC

### Responsabilités (cadrage — non architecture)

1. Lire le mapping D1 pour un `cycleTypeId` **déjà validé**.
2. Résoudre une référence CKC **opératoire** selon priorité detailed → synthetic fallback.
3. Produire un résultat de résolution déterministe, traçable, sans `executionAuthority`.
4. Ne **pas** parser les documents Markdown méthode au runtime.
5. Ne **pas** inventer de contenu detailed si absent.
6. Ne **pas** appeler QualifyCycle (responsabilité du bridge).

### Frontières

| Inclut | Exclut |
|--------|--------|
| Statuts / codes / source utilisée | Recommandation de profil |
| Validation de cohérence mapping↔résultat | UI |
| Fingerprint / version catalogue | CreateCycle / persistance |
| Fail-closed sur invalid/unavailable | Promotion baseline méthode |

### Propriétés attendues (critères — non design technique)

- Déterminisme pour entrées identiques.
- Testabilité sans I/O réseau.
- Pureté préférable ; dépendances acceptables = ports injectés **sans** fs Markdown.
- Idempotence logique (même entrée → même statut/source).
- Git reste la source contractuelle des chemins CKC ; le runtime consomme des **références et métadonnées**, pas le texte Markdown.

> **Aucune architecture technique n’est adoptée dans ce document.** Les ports T-A2 existants sont des **observations** d’héritage, pas une décision D2.

## K. Résolution et statuts

### Statuts candidats (NOT DECIDED)

| Statut candidat | Signification |
|-----------------|---------------|
| `resolved_detailed` | Référence detailed valide et sélectionnée |
| `resolved_synthetic` | Référence synthétique primaire (11 types) |
| `resolved_fallback_synthetic` | Detailed indisponible/invalide → fallback synthétique utilisé |
| `unresolved_invalid_mapping` | Mapping absent/incohérent |
| `unresolved_unavailable` | Références attendues indisponibles |
| `unresolved_catalog_incompatible` | Version/fingerprint catalogue incompatible |
| `unresolved_cycle_not_selectable` | deprecated / unavailable / inconnu |

### Priorité de résolution (héritée D1, à confirmer en D2)

1. Si `primaryLevel=detailed` et primary utilisable → detailed.
2. Sinon si fallbackPolicy + fallbackReference synthétique utilisable → fallback.
3. Si `primaryLevel=synthetic` → synthetic map.
4. Sinon → fail-closed (`unavailableBehavior`).

## L. Consommation CKC

### Distinctions obligatoires

| Concept | Définition cadrage |
|---------|-------------------|
| **Mapping présent** | Entrée D1 `ckc.mandatory=true` + références |
| **Référence résolue** | Statut `resolved_*` avec source utilisée |
| **Résolution valide** | Statut resolved + invariants (`executionAuthority=false`, chemins non vides, cohérence level) |
| **Guidance consommée** | Le résultat D2 **porte** explicitement le contexte CKC résolu (ids, level, source, fallbackUsed, doctrineStatus) dans le payload exploitable |
| **Preuve de consommation** | Champ structuré `ckcConsumptionProof` : `{ catalogVersion, cycleTypeId, resolutionStatus, sourceRef, fallbackUsed, resolvedAt, correlationId }` |
| **QualifyCycle exploitable** | Profil produit **uniquement si** résolution valide **et** six signaux complets |
| **Exécution autorisée** | **Jamais** par D2 / CKC / QualifyCycle |

### Règle produit candidate (doc 13)

Un résultat QualifyCycle n’est **contractuellement exploitable** dans le parcours produit que si la résolution CKC est **valide** (detailed ou synthetic/fallback).
Cela **ne** reprend **pas** la sémantique CreateCycle T-A2 (« absent n’bloque pas la création ») — CreateCycle reste hors V3.1-D2.

### Confirmation d’autorité

- Consommer un CKC ≠ accorder une autorité.
- QualifyCycle reste une recommandation.
- D2 ne consomme aucun gate Morris.
- CKC invalide/indisponible → résultat produit **non exploitable** (fail-closed) selon le contrat adopté.

## M. Bridge QualifyCycle

### Flux candidat

```text
catalogue D1
  → validate cycleTypeId
  → resolver CKC (+ validation résolution)
  → si résolution invalide : stop exploitabilité (codes §O)
  → six signaux explicites complets
  → QualifyCycle (domaine T-A2 inchangé)
  → résultat read-only enrichi + preuve consommation CKC
```

### Responsabilités du bridge

| Fait | Ne fait pas |
|------|-------------|
| Orchestre l’ordre catalogue → CKC → QualifyCycle | Dupliquer `recommendProfile` / invariants T-A2 |
| Enrichit le résultat avec état CKC + preuve | Créer une instance / persister |
| Applique fail-closed d’exploitabilité produit | Recommander le type |
| Passe `cycleTypeId` comme hint capitalization | Exposer `requestedProfile` (sauf décision contraire) |

### Données vers QualifyCycle

- `signals` (six booléens explicites)
- `cycleTypeId` (hint capitalization)
- éventuellement `objective`/`scope` **non scorés**

### Données hors QualifyCycle (restent au bridge)

- mapping / résolution / preuve CKC
- version catalogue
- disclosures doctrine
- codes d’erreur CKC

### Erreurs

- Erreur CKC → pas d’appel QualifyCycle **ou** appel isolé non exposé comme exploitable (à trancher — recommandation : **ne pas exposer** de profil exploitable).
- Signaux incomplets → refus avant QualifyCycle.

### Relation D3

D3 consommera le **même contrat de sortie** ; le bridge ne connaît pas le parcours UI.

## N. Multi-CKC — options

**Statut : NOT DECIDED — MORRIS DECISION REQUIRED.**
Le multi-CKC n’est **pas** adopté.

### Option D2-CKC-A — Mono-CKC D1 conservé

- Un CKC principal par type ; fallback de **remplacement** (déjà D1).
- Pas de consommation simultanée d’extensions.
- **Valeur maintenant :** maximale simplicité ; aligné D1.
- **Risque :** extensibilité future plus coûteuse si le contrat D2 fige trop le mono.

### Option D2-CKC-B — Core + extensions contrôlées

- CKC Core obligatoire + 0..N extensions listées explicitement.
- Activation déterministe ; conflits à définir.
- **Valeur :** richesse doctrinale.
- **Risque :** combinatoire, dette de tests, priorité/conflits, impact D3.

### Option D2-CKC-C — Slicing progressif

- D2 initial : resolver Core + fallback D1 uniquement.
- Contrat D2 **extensible** (champs préparés) **sans** implémenter les extensions.
- Incrément ultérieur (D2-D ou lot dédié) : extensions après preuve d’usage + GO Morris.

### Comparaison

| Critère | A | B | C |
|---------|---|---|---|
| Valeur immédiate | Haute | Moyenne | Haute |
| Complexité maintenant | Basse | Haute | Basse→moyenne |
| Dette | Moyenne si rigidité | Haute | Contrôlée |
| Testabilité | Haute | Basse | Haute puis progressive |
| Traçabilité | Simple | Complexe | Simple puis enrichie |
| Impact D3 | Faible | Fort | Faible |
| Compatibilité D1 | Native | Nécessite extension contrat | Native |
| Doctrine | Stable | Risque de sur-promesse | Stable |

### Challenge

Le multi-CKC est-il utile **dès** le premier D2, ou suffit-il de rendre le contrat **extensible** sans implémenter les extensions ?

### Recommandation candidate (non adoptée)

**D2-CKC-C** : livrer D2 sur le mono-CKC D1 ; préparer des champs d’extension **vides/optionnels** dans le contrat de sortie ; **ne pas** activer d’extensions avant preuve d’usage et GO Morris.
Évite le big-bang B tout en réduisant la rigidité de A.

## O. Fail-closed

| Scénario | Résultat candidat | Code candidat | Bloquant exploitabilité | Retry | Gate |
|----------|-------------------|---------------|-------------------------|-------|------|
| `cycleTypeId` inconnu | Refus | `CYCLE_TYPE_UNKNOWN` | Oui | Après correction sélection | Non |
| Cycle deprecated | Refus sélection / non exploitable | `CYCLE_TYPE_DEPRECATED` | Oui | Non (sauf réactivation catalogue) | Morris structure |
| Cycle unavailable | Refus | `CYCLE_TYPE_UNAVAILABLE` | Oui | Plus tard | Non |
| Mapping CKC absent | Non exploitable | `CKC_MAPPING_MISSING` | Oui | Non (bug catalogue) | Correctif D1 |
| Detailed invalide + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | Non si fallback valide | — | Non |
| Detailed + fallback invalides | Non exploitable | `CKC_UNAVAILABLE` | Oui | Non | Correctif |
| Synthetic invalide | Non exploitable | `CKC_SYNTHETIC_INVALID` | Oui | Non | Correctif |
| Version catalogue incompatible | Non exploitable | `CATALOG_VERSION_INCOMPATIBLE` | Oui | Après alignement | Possible |
| Signaux incomplets | Refus QualifyCycle | `SIGNALS_INCOMPLETE` | Oui | Oui | Non |
| Résultat CKC incohérent | Non exploitable | `CKC_RESOLUTION_INCOHERENT` | Oui | Non | Correctif |
| Erreur interne | Non exploitable | `D2_INTERNAL_ERROR` | Oui | Limité | Non |
| Contexte stale (fingerprint) | Non exploitable | `CATALOG_STALE` | Oui | Recharger catalogue | Non |

**Information utilisateur future (D3) :** message clair, non technique autant que possible, sans faux « prêt à exécuter ».

## P. Anti-claims

D2 **ne** :

- décide pas du cycle ;
- remplace pas le contrat T-A2 pour le profil ;
- crée / persiste rien ;
- consomme aucun gate Morris ;
- accorde aucune autorité au CKC ;
- rend pas le produit production-ready ;
- promeut pas les CKC en baseline méthode globale ;
- constitue pas D3 ;
- n’est pas « IMPLEMENTED / ADOPTED / READY FOR DELIVERY » tant que Morris n’a pas tranché et qu’aucun GO Delivery n’existe.

## Q. Frontières D2 / D3

| D2 | D3 |
|----|----|
| Contrats / orchestration read-only | UI sélection type + signaux + lecture résultat |
| Preuve consommation CKC | Affichage disclosures / erreurs |
| Bridge QualifyCycle | Aucune règle métier nouvelle |
| Pas de Figma | Réserve Figma (parcours) |

**Données que D3 devra pouvoir consommer :** type sélectionné ; profil ; justification lisible ; état CKC ; source/fallback ; disclosures ; erreurs ; Critical blocked (informatif) ; non-persistance.

**Non produits ici :** parcours détaillé D3, architecture UI, frames, composants, code.

## R. Slicing candidat

| Lot | Contenu | Dépendances |
|-----|---------|-------------|
| **D2-A** | Projection catalogue + contrat de résolution (types/statuts/codes) | D1 |
| **D2-B** | Resolver CKC + fail-closed + preuve consommation | D2-A |
| **D2-C** | Bridge QualifyCycle + résultat enrichi exploitable | D2-B + T-A2 |
| **D2-D** (éventuel) | Extensions multi-CKC | Décision Morris multi-CKC + preuve d’usage |

### Modes de livraison candidats

1. **Une Delivery** couvrant A+B+C (risque big-bang).
2. **Trois incréments** A → B → C (recommandation candidate).
3. **A+B puis C** (compromis).

**Aucun slicing n’est adopté sans décision Morris (D-V3.1-D2-09).**

## S. Critères de succès du cadrage

- Problème D2 clair ; D1/D2/D3 séparés.
- Resolver ≠ bridge ; résolution ≠ consommation.
- Règles T-A2 non dupliquées.
- Multi-CKC traité sans adoption implicite.
- Fail-closed et authority boundaries explicites.
- Decision pack complet ; options comparables.
- Aucun code ; aucune architecture adoptée ; aucune Delivery ; aucun D3.

## T. Risques et réserves

| ID | Risque | Mitigation cadrage |
|----|--------|--------------------|
| R-D2-01 | Duplication méthode dans le runtime | Références + métadonnées ; pas de Markdown parse |
| R-D2-02 | Confusion mapping/résolution/consommation | Sections L + glossaire anti-claims |
| R-D2-03 | Sur-promesse recommandation de type | Héritage V3 : sélection utilisateur seule |
| R-D2-04 | Multi-CKC combinatoire | Option C ; D2-D gated |
| R-D2-05 | Extensions implicites | Liste explicite obligatoire si B |
| R-D2-06 | Duplication T-A2 | Bridge orchestre seulement |
| R-D2-07 | Critical overclaim | Informatif ; pas de gate |
| R-D2-08 | Confusion recommandation/décision | `isMorrisDecision=false` |
| R-D2-09 | Couplage prématuré D3 | Frontière Q |
| R-D2-10 | Dette versionnement | Fingerprint catalogue + codes stale |
| R-D2-11 | Preuve consommation insuffisante | Champ structuré obligatoire |
| R-D2-12 | Héritage `ResolveCycleKnowledgeContract` vs produit | Distinguer CreateCycle guidance ≠ exploitabilité V3.1 |
| **INHERITED-R-01** | Condensation README framing | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant D2 cadrage |

## U. Decision pack Morris

Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS DECISION REQUIRED.**

### D-V3.1-D2-01 — Promesse produit D2

- **Problème :** que garantit D2 sans UI ?
- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
- **Reco candidate :** (b) — promesse = type validé → CKC consommé → profil recommandé traçable, read-only.
- **Bénéfices / risques / dette :** clarté produit / sur-scope si UI / dette faible si borné.
- **Réversibilité :** haute (doc).
- **Impact D1/D3 :** aucun runtime D1 ; D3 consomme le contrat.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-02 — Contrat du resolver CKC

- **Problème :** responsabilités exactes du resolver.
- **Options :** (a) resolver = mapping lookup only ; (b) resolver = résolution + validation invariants ; (c) resolver = + QualifyCycle.
- **Reco candidate :** (b).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-03 — Statuts de résolution

- **Problème :** vocabulaire des statuts §K.
- **Options :** jeu minimal (resolved/unresolved) ; jeu détaillé §K ; alignement strict types T-A2 `CkcStatus` existants.
- **Reco candidate :** jeu détaillé §K **avec** mapping explicite vers types T-A2 si réutilisation — sans imposer l’archi.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-04 — Définition de « CKC consommé »

- **Problème :** critère d’exploitabilité.
- **Options :** (a) mapping présent suffit ; (b) résolution valide suffit ; (c) résolution valide + preuve structurée dans le payload.
- **Reco candidate :** (c).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-05 — Règle fail-closed

- **Problème :** matrice §O.
- **Options :** adopter matrice telle quelle ; assouplir fallback ; aligner sur « absent n’bloque pas CreateCycle ».
- **Reco candidate :** adopter esprit matrice §O pour **exploitabilité produit** ; CreateCycle hors scope.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-06 — Contrat du bridge QualifyCycle

- **Problème :** orchestration et non-duplication T-A2.
- **Options :** (a) bridge unique ; (b) appels séparés laissés à D3 ; (c) fusion dans QualifyCycle.
- **Reco candidate :** (a) — bridge orchestre ; QualifyCycle domaine inchangé.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé

- **Problème :** A / B / C §N.
- **Reco candidate :** **C** (progressif) — mono maintenant, extensible.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-08 — Activation des extensions CKC

- **Problème :** si multi, qui active quoi.
- **Options :** catalogue explicite ; config runtime ; invention dynamique (interdite).
- **Reco candidate :** si B un jour — liste explicite dans catalogue ; **sinon N/A sous C**.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-09 — Slicing D2

- **Problème :** A/B/C/D et mode livraison.
- **Reco candidate :** incréments **D2-A → D2-B → D2-C** ; D2-D gated.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-10 — Frontière D2/D3

- **Problème :** données consommables par D3.
- **Reco candidate :** liste §Q ; aucun parcours UI dans D2.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-11 — Versionnement et traçabilité

- **Problème :** fingerprint catalogue + preuve consommation.
- **Options :** version string seule ; version + hash contenu ; correlationId obligatoire.
- **Reco candidate :** version + hash candidat + correlationId.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-12 — Gate de sortie vers conception/architecture

- **Problème :** après arbitrage, quel GO.
- **Options :** conception fonctionnelle D2 ; architecture fonctionnelle D2 ; Delivery directe (déconseillé).
- **Reco candidate :** **conception fonctionnelle D2** (cycle 2) après arbitrage des D-V3.1-D2-01…11 ; architecture ensuite ; Delivery seulement après.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

## V. Recommandation candidate (synthèse — non adoptée)

1. Promesse D2 = exploitabilité read-only type→CKC consommé→profil.
2. Resolver = résolution + validation ; bridge = orchestration ; T-A2 inchangé.
3. « Consommé » = résolution valide + preuve structurée.
4. Fail-closed produit selon §O ; CreateCycle hors scope.
5. Multi-CKC : option **C** ; pas d’extensions dans le premier Delivery D2.
6. Slicing : D2-A → D2-B → D2-C.
7. Prochain cycle après arbitrage : **conception fonctionnelle D2**, pas Delivery.

## W. Gates suivants candidats

```text
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Puis, seulement après arbitrage :

```text
GO FUNCTIONAL DESIGN SFIA STUDIO V3.1-D2 …
```

**Aucun GO Delivery / D3 / UI / Figma n’est proposé en enchaînement automatique.**

## X. Verdict

```text
V3.1-D2 FRAMING COMPLETE —
D1 BASELINE AND D2 PROBLEM VERIFIED —
CKC RESOLUTION, CONSUMPTION AND QUALIFYCYCLE BRIDGE BOUNDARIES DOCUMENTED —
MONO-CKC AND CONTROLLED MULTI-CKC OPTIONS COMPARED —
FAIL-CLOSED AND AUTHORITY BOUNDARIES DEFINED —
MORRIS DECISION PACK PREPARED —
NO DECISION ADOPTED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Statut :** `V3.1-D2 FRAMING READY FOR MORRIS ARBITRATION — FUNCTIONAL DESIGN AND ARCHITECTURE REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED`

```

## 08 complet (après modification)
```markdown
# 08 — Implementation backlog and slicing

## Stratégie

Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

## Lot V1 / V2

**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

## Lot V3 — Cycle Recommendation

**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

## Lot V3.1 — Profile Qualification (conception)

**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

**DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

## Lot V3.1-D1 — Catalogue runtime + mapping CKC

**Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.

**Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

**Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).

**Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).

**QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

Docs :
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
- rapports `01` / `02` / `03` / `04`

| Preuve | Résultat |
|--------|----------|
| 15 IDs / mapping CKC | conformes |
| Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
| QA-G2 | vert |
| QA-G3 | **PASS Morris** |
| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
| D2 cadrage | **réalisé** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · arbitrage Morris **requis** |
| Delivery D2 / D3 | **non autorisées** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage réalisé** · Delivery **non autorisée** · décisions NOT DECIDED |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit · multi-CKC **non adopté** — voir decision pack doc [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md).

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

```

## README complet (après modification)
```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 TECHNICALLY CLOSED ON MAIN — V3.1-D2 CADRAGE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — DELIVERY D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-08-01 14:34:28 CEST (+0200) |
| **Cycle courant** | 1 — Cadrage V3.1-D2 |
| **Profil** | **Standard** |
| **Typologie** | DOC |
| **Gate courant** | Cadrage D2 **consommé** (2026-08-01 14:03 CEST) — formulation Morris bornée |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Doc D2** | [`15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) |
| **Docs protégées** | `12` / `13` / `14` **inchangés** |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1** | **techniquement clos** (Delivery · QA · PR #296 · capitalisation #297 · cleanup) |
| **V3.1-D2 cadrage** | **terminé localement** — decision pack D-V3.1-D2-01…12 **NOT DECIDED** |
| V3.1-D2 Delivery / conception / architecture | **non ouverts** — GO Morris distinct requis |
| V3.1-D3 | **non ouvert** · réserve Figma inchangée |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat + runtime D1 résolus · orchestration / consommation CKC / bridge QualifyCycle = **objet du cadrage D2** (doc 15) — **aucune adoption** dans ce cycle.

**INHERITED-R-01 (README) :** condensation du framing en index vivant — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation D2 Delivery.

## Gate candidat suivant

```text
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## Verdict

`V3.1-D2 FRAMING COMPLETE — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION — NO DELIVERY — D3 NOT OPENED`

```

## Diff 08
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index c138afc..c46c2f9 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -1,68 +1,69 @@
 # 08 — Implementation backlog and slicing

 ## Stratégie

 Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

 ## Lot V1 / V2

 **INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

 ## Lot V3 — Cycle Recommendation

 **CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

 ## Lot V3.1 — Profile Qualification (conception)

 **FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

 ## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

 **DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

 ## Lot V3.1-D1 — Catalogue runtime + mapping CKC

 **Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.

 **Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

 **Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).

 **Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).

 **QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

-**Statut PR readiness :** `READY FOR PR` — [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) — commit/push/draft PR **soumis à GO**.
+**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

 Docs :
 - [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
 - rapports `01` / `02` / `03` / `04`

 | Preuve | Résultat |
 |--------|----------|
 | 15 IDs / mapping CKC | conformes |
 | Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
 | QA-G2 | vert |
 | QA-G3 | **PASS Morris** |
-| PR readiness | **READY FOR PR** · package 13 fichiers · PR **non créée** |
-| D2 / D3 | **non ouverts** |
+| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
+| D2 cadrage | **réalisé** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · arbitrage Morris **requis** |
+| Delivery D2 / D3 | **non autorisées** |

 ### Slicing CAT-08

 | Lot | Contenu | Statut |
 |-----|---------|--------|
-| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + QA-G3 PASS · **PR readiness READY** · Git pending GO |
-| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
+| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
+| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage réalisé** · Delivery **non autorisée** · décisions NOT DECIDED |
 | **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

 ### Réserves QA

-R-QA-01…09 **CLOSED**. QA-G3 PASS. PR readiness ≠ autorisation commit/push/PR.
+R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

 ### Réserves D2

-Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit.
+Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit · multi-CKC **non adopté** — voir decision pack doc [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md).

 ## Lot V3.2 / V4 / V5 / V6

 **NOT AUTHORIZED.**

```

## Diff README
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index 23b6c6f..bf3f107 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -1,37 +1,49 @@
 # First user-visible SFIA Studio vertical slice — Framing

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
-| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
-| **Cycle courant** | 13 — PR readiness V3.1-D1 |
-| **Profil** | **Critical** |
-| **Typologie** | EVOL |
-| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
-| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
-| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
-| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
-| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |
+| **Statut** | `FRAMING LIVING — V3.1-D1 TECHNICALLY CLOSED ON MAIN — V3.1-D2 CADRAGE COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — DELIVERY D2/D3 NOT AUTHORIZED` |
+| **Date** | 2026-08-01 14:34:28 CEST (+0200) |
+| **Cycle courant** | 1 — Cadrage V3.1-D2 |
+| **Profil** | **Standard** |
+| **Typologie** | DOC |
+| **Gate courant** | Cadrage D2 **consommé** (2026-08-01 14:03 CEST) — formulation Morris bornée |
+| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **Doc D2** | [`15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) |
+| **Docs protégées** | `12` / `13` / `14` **inchangés** |
+| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

 ## Synthèse

 | Lot | État |
 |-----|------|
 | V1 / V2 | intégrés `main` |
 | V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
-| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
-| **QA-G3** | **PASS Morris** |
-| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
-| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
+| **V3.1-D1** | **techniquement clos** (Delivery · QA · PR #296 · capitalisation #297 · cleanup) |
+| **V3.1-D2 cadrage** | **terminé localement** — decision pack D-V3.1-D2-01…12 **NOT DECIDED** |
+| V3.1-D2 Delivery / conception / architecture | **non ouverts** — GO Morris distinct requis |
+| V3.1-D3 | **non ouvert** · réserve Figma inchangée |
 | V3.2 / V4–V6 | non autorisés |

-**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.
+**R-V3.1-CATALOG-01 :** contrat + runtime D1 résolus · orchestration / consommation CKC / bridge QualifyCycle = **objet du cadrage D2** (doc 15) — **aucune adoption** dans ce cycle.
+
+**INHERITED-R-01 (README) :** condensation du framing en index vivant — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation D2 Delivery.

 ## Gate candidat suivant

-`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
+```text
+GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
+DECIDE D-V3.1-D2-01…12 —
+KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
+NO FUNCTIONAL DESIGN —
+NO ARCHITECTURE —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```

 ## Verdict

-`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`
+`V3.1-D2 FRAMING COMPLETE — READY FOR MORRIS ARBITRATION — NO DECISION ADOPTED — NO IMPLEMENTATION — NO DELIVERY — D3 NOT OPENED`

```

## Decision pack
```markdown
## U. Decision pack Morris

Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS DECISION REQUIRED.**

### D-V3.1-D2-01 — Promesse produit D2

- **Problème :** que garantit D2 sans UI ?
- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
- **Reco candidate :** (b) — promesse = type validé → CKC consommé → profil recommandé traçable, read-only.
- **Bénéfices / risques / dette :** clarté produit / sur-scope si UI / dette faible si borné.
- **Réversibilité :** haute (doc).
- **Impact D1/D3 :** aucun runtime D1 ; D3 consomme le contrat.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-02 — Contrat du resolver CKC

- **Problème :** responsabilités exactes du resolver.
- **Options :** (a) resolver = mapping lookup only ; (b) resolver = résolution + validation invariants ; (c) resolver = + QualifyCycle.
- **Reco candidate :** (b).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-03 — Statuts de résolution

- **Problème :** vocabulaire des statuts §K.
- **Options :** jeu minimal (resolved/unresolved) ; jeu détaillé §K ; alignement strict types T-A2 `CkcStatus` existants.
- **Reco candidate :** jeu détaillé §K **avec** mapping explicite vers types T-A2 si réutilisation — sans imposer l’archi.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-04 — Définition de « CKC consommé »

- **Problème :** critère d’exploitabilité.
- **Options :** (a) mapping présent suffit ; (b) résolution valide suffit ; (c) résolution valide + preuve structurée dans le payload.
- **Reco candidate :** (c).
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-05 — Règle fail-closed

- **Problème :** matrice §O.
- **Options :** adopter matrice telle quelle ; assouplir fallback ; aligner sur « absent n’bloque pas CreateCycle ».
- **Reco candidate :** adopter esprit matrice §O pour **exploitabilité produit** ; CreateCycle hors scope.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-06 — Contrat du bridge QualifyCycle

- **Problème :** orchestration et non-duplication T-A2.
- **Options :** (a) bridge unique ; (b) appels séparés laissés à D3 ; (c) fusion dans QualifyCycle.
- **Reco candidate :** (a) — bridge orchestre ; QualifyCycle domaine inchangé.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé

- **Problème :** A / B / C §N.
- **Reco candidate :** **C** (progressif) — mono maintenant, extensible.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-08 — Activation des extensions CKC

- **Problème :** si multi, qui active quoi.
- **Options :** catalogue explicite ; config runtime ; invention dynamique (interdite).
- **Reco candidate :** si B un jour — liste explicite dans catalogue ; **sinon N/A sous C**.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-09 — Slicing D2

- **Problème :** A/B/C/D et mode livraison.
- **Reco candidate :** incréments **D2-A → D2-B → D2-C** ; D2-D gated.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-10 — Frontière D2/D3

- **Problème :** données consommables par D3.
- **Reco candidate :** liste §Q ; aucun parcours UI dans D2.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-11 — Versionnement et traçabilité

- **Problème :** fingerprint catalogue + preuve consommation.
- **Options :** version string seule ; version + hash contenu ; correlationId obligatoire.
- **Reco candidate :** version + hash candidat + correlationId.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.

### D-V3.1-D2-12 — Gate de sortie vers conception/architecture

- **Problème :** après arbitrage, quel GO.
- **Options :** conception fonctionnelle D2 ; architecture fonctionnelle D2 ; Delivery directe (déconseillé).
- **Reco candidate :** **conception fonctionnelle D2** (cycle 2) après arbitrage des D-V3.1-D2-01…11 ; architecture ensuite ; Delivery seulement après.
- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED.


```

## Multi-CKC
Options A/B/C documentées · reco candidate C · NOT DECIDED

## Risques / réserves
R-D2-01…12 · INHERITED-R-01 NOT LIFTED

## État Git final
```
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== status project ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
=== staged ===
=== diff name-status ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== diff stat ===
 .../08-implementation-backlog-and-slicing.md       | 15 +++----
 .../README.md                                      | 48 ++++++++++++++--------
 2 files changed, 38 insertions(+), 25 deletions(-)
wt_count=77
remote_d2=local_d2=PRESENT
```

## Verdict
V3.1-D2 FRAMING COMPLETE —
D1 BASELINE AND D2 PROBLEM VERIFIED —
CKC RESOLUTION, CONSUMPTION AND QUALIFYCYCLE BRIDGE BOUNDARIES DOCUMENTED —
MONO-CKC AND CONTROLLED MULTI-CKC OPTIONS COMPARED —
FAIL-CLOSED AND AUTHORITY BOUNDARIES DEFINED —
MORRIS DECISION PACK PREPARED —
NO DECISION ADOPTED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION

Statut: V3.1-D2 FRAMING READY FOR MORRIS ARBITRATION — FUNCTIONAL DESIGN AND ARCHITECTURE REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED

## Gate suivant candidat
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION

--- END FRAMING REPORT ---

## Content coverage
- gate Morris complete: yes
- CKC complete: yes
- Git Truth complete: yes
- source documents complete: yes
- created document full content: yes
- modified sections complete: yes
- D2 options complete: yes
- multi-CKC options complete: yes
- decision pack complete: yes
- risks and reserves complete: yes
- final Git state complete: yes
- temporary report full content: yes
- synthesis only: no
- review pack verdict: complete

## Gate suivant candidat
GO ARBITRATE SFIA STUDIO V3.1-D2 DECISION PACK —
DECIDE D-V3.1-D2-01…12 —
KEEP MULTI-CKC EXTENSIBLE WITHOUT ADOPTING EXTENSIONS UNLESS EXPLICIT —
NO FUNCTIONAL DESIGN —
NO ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION

## Verdict
V3.1-D2 FRAMING COMPLETE —
D1 BASELINE AND D2 PROBLEM VERIFIED —
CKC RESOLUTION, CONSUMPTION AND QUALIFYCYCLE BRIDGE BOUNDARIES DOCUMENTED —
MONO-CKC AND CONTROLLED MULTI-CKC OPTIONS COMPARED —
FAIL-CLOSED AND AUTHORITY BOUNDARIES DEFINED —
MORRIS DECISION PACK PREPARED —
NO DECISION ADOPTED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION

Statut: V3.1-D2 FRAMING READY FOR MORRIS ARBITRATION — FUNCTIONAL DESIGN AND ARCHITECTURE REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED
