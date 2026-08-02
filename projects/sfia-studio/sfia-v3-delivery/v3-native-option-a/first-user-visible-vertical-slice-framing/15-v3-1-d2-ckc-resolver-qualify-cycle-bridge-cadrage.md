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
| **Statut documentaire** | `V3.1-D2 FRAMING ARBITRATED — FUNCTIONAL DESIGN AUTHORIZED — D-V3.1-D2-01…12 ADOPTED BY MORRIS — NO ARCHITECTURE — NO DELIVERY` |
| **Code / Delivery / D3 / UI / Figma / CreateCycle** | **non** |
| **Commit / push / PR projet** | **non autorisés** |

## B. Gate Morris

**Autorisé :** cadrage repo-informed D2 ; options ; recommandation candidate ; decision pack ; mise à jour de traçabilité (`08`, README framing) ; Review Handoff Git.

**Interdit :** implémentation ; Delivery ; architecture adoptée ; D3 ; UI ; Figma ; CreateCycle ; modification catalogue D1 ; modification QualifyCycle ; promotion méthode ; commit/push/PR projet.


## B2. Decision record Morris (arbitrage)

| Champ | Valeur |
|-------|--------|
| **Formulation réelle Morris** | `D2-01 = B` · `D2-02 = B` · `D2-03 = statuts détaillés avec mapping T-A2` · `D2-04 = C` · `D2-05 = fail-closed strict pour l'exploitabilité produit` · `D2-06 = A` · `D2-07 = C` · `D2-08 = catalogue explicite plus tard` · `D2-09 = D2-A → D2-B → D2-C, D2-D gated` · `D2-10 = D2 sans UI` · `D2-11 = version + hash + correlationId` · `D2-12 = conception fonctionnelle ensuite` · « Ok pour le recommandations » |
| **Interprétation** | Morris adopte les recommandations candidates du decision pack D-V3.1-D2-01…12 |
| **Heure d'adoption** | Non horodatée dans le transcript ; adoption **immédiatement antérieure** au GO conception |
| **Enregistrement documentaire** | 2026-08-01 15:05:34 CEST (+0200) |
| **GO conception lié** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 …` — 2026-08-01 14:58 CEST (+0200) |
| **Conséquence** | Conception fonctionnelle autorisée · architecture / Delivery / D3 **non** autorisées |

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

### Statuts détaillés (ADOPTED — D-V3.1-D2-03)

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

**Statut : DECIDED — ADOPTED BY MORRIS (D-V3.1-D2-07 = C).**
Le multi-CKC n’est **pas** activé ; approche progressive Core-only maintenant.

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

### Recommandation historique (devenue décision D-V3.1-D2-07)

**D2-CKC-C** adoptée : livrer D2 sur le mono-CKC D1 ; préparer l’extensibilité **sans** activer d’extensions ; D2-D gated.

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
- n’est pas « IMPLEMENTED / READY FOR DELIVERY / ARCHITECTURE ADOPTED » : le cadrage est arbitré et la conception fonctionnelle autorisée/réalisée localement, mais architecture et Delivery restent fermées.

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

**Slicing D2 :** **D2-A → D2-B → D2-C** adopté (D-V3.1-D2-09) ; **D2-D gated**.

## S. Critères de succès du cadrage

- Problème D2 clair ; D1/D2/D3 séparés.
- Resolver ≠ bridge ; résolution ≠ consommation.
- Règles T-A2 non dupliquées.
- Multi-CKC traité avec décision C (Core-only) ; extensions non activées.
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

**Statut global :** `DECIDED — ADOPTED BY MORRIS` (D-V3.1-D2-01…12).

Les options historiques et risques sont conservés. Les recommandations retenues deviennent décisions.

### D-V3.1-D2-01 — Promesse produit D2

- **Problème :** que garantit D2 sans UI ?
- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
- **Reco candidate historique :** (b).
- **Décision :** **B** — type validé → CKC consommé → profil recommandé traçable → résultat read-only → **aucune UI**.
- **Conséquence fonctionnelle :** le succès D2 inclut toujours preuve de consommation + recommandation T-A2 enrichie.
- **Risques / dette :** sur-scope UI évité ; dette de bridge à concevoir.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-02 — Contrat du resolver CKC

- **Options :** (a) lookup only ; (b) résolution + invariants ; (c) + QualifyCycle.
- **Décision :** **B** — résout, applique priorités/fallback, contrôle invariants, produit résolution ; **n'appelle pas** QualifyCycle ; **aucune** autorité d'exécution.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-03 — Statuts de résolution

- **Décision :** statuts fonctionnels **détaillés** (§K) **avec mapping explicite** vers `CkcLevel` / `CkcStatus` / `CkcSource` T-A2 ; conserver le statut détaillé D2 dans le résultat pour ne pas perdre primary vs fallback.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-04 — Définition de « CKC consommé »

- **Décision :** **C** — résolution valide **et** preuve structurée de consommation dans le payload.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-05 — Règle fail-closed

- **Décision :** fail-closed **strict** pour l'exploitabilité produit D2 ; CKC invalide/non résolvable → résultat non exploitable **et** QualifyCycle **non appelé** dans le bridge D2 ; CreateCycle historique hors périmètre.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-06 — Contrat du bridge QualifyCycle

- **Décision :** **A** — bridge unique orchestre catalogue → resolver → validation consommation → QualifyCycle → enrichissement ; QualifyCycle **inchangé**.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé

- **Décision :** **C** — D2 initial = un seul CKC Core effectif ; fallback = **substitution** (pas d'addition) ; contrat extensible ; **aucune** extension activée maintenant.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-08 — Activation des extensions CKC

- **Décision :** si extensions ultérieures → déclaration **explicite** dans le catalogue ; pas d'invention dynamique ; GO Morris distinct ; **capacité fermée** sous D2 actuel.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-09 — Slicing D2

- **Décision :** **D2-A → D2-B → D2-C** ; **D2-D gated**.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-10 — Frontière D2/D3

- **Décision :** D2 **sans UI** ; D3 consommera ultérieurement données/états D2.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-11 — Versionnement et traçabilité

- **Décision :** `catalogVersion` + empreinte déterministe (`catalogHash`) + `correlationId`.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.

### D-V3.1-D2-12 — Gate de sortie

- **Décision :** après arbitrage → **conception fonctionnelle** ; puis architecture fonctionnelle ; puis technique si besoin ; Delivery D2-A seulement après GO Morris distinct.
- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
- **Note :** le présent cycle exécute la conception fonctionnelle autorisée par cette décision et le GO du 2026-08-01 14:58 CEST.

## V. Synthèse post-arbitrage

1. Promesse B adoptée.
2. Resolver B ; bridge A ; QualifyCycle inchangé.
3. Consommation = C ; fail-closed strict produit.
4. Multi-CKC = C (Core seul maintenant) ; extensions fermées (08).
5. Slicing A→B→C ; D2-D gated.
6. Traçabilité version+hash+correlationId.
7. Conception fonctionnelle = cycle courant ; architecture / Delivery **non** ouvertes.

## W. Gates suivants candidats

```text
GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
USE VALIDATED FUNCTIONAL DESIGN —
DEFINE COMPONENT RESPONSIBILITIES, CONTRACT BOUNDARIES, DATA FLOWS, STATUS MAPPING, CONSUMPTION PROOF AND SLICING —
NO TECHNICAL ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Aucun GO Delivery / D3 / UI n'est proposé en enchaînement automatique.**

## X. Verdict

```text
V3.1-D2 FRAMING ARBITRATED —
D-V3.1-D2-01…12 ADOPTED BY MORRIS —
FUNCTIONAL DESIGN AUTHORIZED —
NO ARCHITECTURE ADOPTED —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Statut :** `FRAMING ARBITRATED — FUNCTIONAL DESIGN AUTHORIZED — ARCHITECTURE AND DELIVERY REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED`
