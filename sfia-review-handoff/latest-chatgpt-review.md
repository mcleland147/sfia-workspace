# SFIA Review Pack — Full
# SFIA Studio V3.1-D2 — Conception fonctionnelle

## Meta
- Date/heure/fuseau: 2026-08-01 15:05:34 CEST (+0200)
- Rôle: Cursor
- Niveau: Full
- Branche: framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage @ e1befcb8…

## Gate Morris (complet)
GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
APPLY ADOPTED D-V3.1-D2-01…12 —
NO ARCHITECTURE — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
Date GO: 2026-08-01 14:58 CEST (+0200)

Morris adoption (immediate prior):
D2-01=B D2-02=B D2-03=statuts détaillés+mapping T-A2 D2-04=C
D2-05=fail-closed strict produit D2-06=A D2-07=C
D2-08=catalogue explicite plus tard D2-09=A→B→C D2-D gated
D2-10=sans UI D2-11=version+hash+correlationId D2-12=conception ensuite
« Ok pour le recommandations »

## Décisions Morris D-V3.1-D2-01…12
Toutes `DECIDED — ADOPTED BY MORRIS` — détail document 15 §B2/§U et document 16 §B.

## Cycle / profil / typologie / CKC
- Cycle: 2 — Conception fonctionnelle
- Profil: Standard · Typologie: DOC
- CKC: pilots/02-conception-fonctionnelle.md · method-candidate · executionAuthority=false

## Handoff source
tip 5d4f3bbafe93a1baa4d6583307d1bb8ddbf31e00 · blob 579865fee30dd96e0d69ec8f63360e1afa4cd4c5

## Git Truth initial
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
L/R main...origin/main=0	0
=== STATUS ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
=== STAGED ===
=== DIFF NAME ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== DIFF STAT ===
 .../08-implementation-backlog-and-slicing.md       | 15 +++----
 .../README.md                                      | 48 ++++++++++++++--------
 2 files changed, 38 insertions(+), 25 deletions(-)
=== UNTRACKED PROJECT ===
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
wt_count=77
=== PRUNE ===
=== REMOTE BRANCHES ===
handoff_tip=5d4f3bbafe93a1baa4d6583307d1bb8ddbf31e00
handoff_blob=579865fee30dd96e0d69ec8f63360e1afa4cd4c5
expected_ancestor=YES
DOC15_PRESENT
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```

## Sources + T-A2
CkcLevel/Status/Source · QualifyCycle inchangé · MemoryCkcResolver observation · detail codes CYCLE_INVALID/CKC_UNAVAILABLE/CONTEXT_STALE/PERSISTENCE_FAILURE

## Fichiers
CREATED 16 · MODIFIED 15/08/README · no app/** · no method/**

## Document 16 complet
```markdown
# 16 — V3.1-D2 CKC Resolver & QualifyCycle Bridge — Conception fonctionnelle

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-01 15:05:34 CEST (+0200) |
| **Cycle projet** | 2 — Conception fonctionnelle |
| **Profil SFIA** | Standard |
| **Typologie** | DOC |
| **Gate Morris** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — APPLY ADOPTED D-V3.1-D2-01…12 — NO ARCHITECTURE — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` (2026-08-01 14:58 CEST +0200) |
| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **CKC** | `pilots/02-conception-fonctionnelle.md` · method-candidate · `executionAuthority=false` |
| **Statut** | `V3.1-D2 FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS VALIDATION — NO ARCHITECTURE ADOPTED — NO DELIVERY` |
| **Code / UI / D3 / CreateCycle** | **non** |

## B. Gate Morris et décision record

**Adoption Morris (immédiatement antérieure au GO conception) :**

```text
D2-01 = B · D2-02 = B · D2-03 = statuts détaillés avec mapping T-A2 · D2-04 = C
D2-05 = fail-closed strict pour l'exploitabilité produit · D2-06 = A · D2-07 = C
D2-08 = catalogue explicite plus tard · D2-09 = D2-A → D2-B → D2-C, D2-D gated
D2-10 = D2 sans UI · D2-11 = version + hash + correlationId · D2-12 = conception fonctionnelle ensuite
Ok pour le recommandations
```

Enregistrement documentaire : **2026-08-01 15:05:34 CEST (+0200)** — heure d’adoption transcript non disponible ; adoption immédiatement antérieure au GO 14:58 CEST.

Décisions complètes : voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) §B2 et §U — statut `DECIDED — ADOPTED BY MORRIS`.

## C. Sources consultées

Gouvernance SFIA · CKC `02-conception-fonctionnelle` · carte synthétique · méthode v2.5 · framing `08`/`12`/`13`/`14`/`15`/README · D1 README/`05`/`cycleTypeCatalog` · T-A2 `ckcResolver`/`resolveCycleKnowledgeContract`/`qualifyCycle`/`qualification`/`invariants`/`types`/`errors`/`memoryCkcResolver` · handoff tip `5d4f3bb…`.

## D. Héritage D1, cadrage D2 et contrats T-A2

| Héritage | Rôle | Limite |
|----------|------|--------|
| Catalogue D1 | 15 types + mapping CKC mandatory | Pas de résolution produit |
| Cadrage doc 15 | Problème, options, décisions | Arbitré |
| `QualifyCycle` / `qualifyCycle` | Recommandation profil | Inchangé |
| `CkcResolverPort` / `MemoryCkcResolver` | Port guidance T-A2 | Non équivalent au produit D2 ; observation seulement |
| `ResolveCycleKnowledgeContract` | Guidance ; absent n’bloque pas CreateCycle | **≠** fail-closed produit D2 |
| CreateCycle | Hors V3.1-D2 | Ne modifie pas la règle D2 |

Ce document **ne duplique pas** et **ne remplace pas** le domaine T-A2 ; il définit le comportement produit D2 qui **consomme** ces contrats.

## E. Objectif fonctionnel

À partir d’un `cycleTypeId` sélectionné, d’un catalogue D1 compatible (version + hash), d’un mapping CKC valide, de six signaux explicites et d’un `correlationId`, D2 produit :

1. **Succès** read-only exploitable : type + CKC résolu + preuve de consommation + profil T-A2 + traçabilité + disclosures + `isMorrisDecision=false` ; **ou**
2. **Échec** structuré fail-closed : aucun résultat exploitable, aucun `consumed=true`.

Aucune mutation (`CycleInstance`, LPS, EpistemicItem, gate Morris).

## F. Valeur et bénéficiaires

- Opérateur / QA / revueur : résultat structuré testable sans UI.
- Futur D3 : contrat d’entrée stable.
- Morris : frontières d’autorité explicites.

## G. Périmètre inclus

Projection catalogue · validation sélection · résolution CKC Core · preuve de consommation · bridge QualifyCycle · résultat enrichi · fail-closed · traçabilité version/hash/correlationId · contrat de données pour D3.

## H. Hors périmètre

Architecture technique · Delivery · D3/UI/Figma · CreateCycle · multi-CKC extensions (D2-D) · parsing Markdown · scoring · recommandation automatique du type · promotion méthode · IAM · agent/LLM live.

## I. Acteurs et limites d’autorité

| Acteur | Fait | N’a pas d’autorité de |
|--------|------|------------------------|
| Utilisateur (futur D3) | Sélectionne type ; répond signaux | Décider du profil à la place de T-A2 ; exécuter |
| Bridge D2 | Orchestre ; bloque si non consommable | Modifier règles T-A2 ; créer |
| Resolver CKC | Résout + invariants | Appeler QualifyCycle ; exécuter |
| QualifyCycle | Recommande profil | Décision Morris ; création |
| CKC | Guidance method-candidate | `executionAuthority` |
| Morris | Adopte décisions / gates | — |

## J. Glossaire fonctionnel

| Terme | Définition |
|-------|------------|
| Mapping CKC | Métadonnées D1 `CycleTypeCkcMapping` |
| Résolution | Statut détaillé D2 + projection T-A2 |
| Consommation | Résolution valide **et** preuve structurée |
| Fallback | Substitution du Core indisponible — jamais un 2ᵉ CKC simultané |
| Exploitable | Succès D2 avec `consumed=true` et recommandation T-A2 |
| Core CKC | Unique CKC effectif du type (detailed ou synthetic primaire) |

## K. Préconditions

- Catalogue D1 versionné et empreinte cohérente.
- `cycleTypeId` sélectionné via catalogue (pas de saisie libre non validée).
- Six signaux Oui/Non explicites avant QualifyCycle.
- `correlationId` fourni.
- `requestedProfile` **non** exposé / non utilisé.
- Aucune extension CKC active.

## L. Entrées fonctionnelles

| Entrée | Obligatoire | Règles |
|--------|-------------|--------|
| `cycleTypeId` | Oui | Connu, actif, sélectionnable |
| `catalogVersion` | Oui | Version D1 |
| `catalogHash` | Oui (fonctionnel) | Empreinte déterministe du contenu pertinent ; algo → architecture ; mismatch → stale |
| `correlationId` | Oui | Bout-en-bout ; pas d’identité IAM |
| Six signaux | Oui pour QualifyCycle | Absence ≠ `false` |
| `objective` / `scope` | Non | Non scorés |
| `requestedProfile` | Non | Non exposé |

## M. Parcours nominal

1. Recevoir type + traçabilité (version, hash, correlationId).
2. Vérifier compatibilité version/hash.
3. Vérifier existence et sélectionnabilité du type.
4. Lire mapping CKC Core obligatoire.
5. Résoudre selon priorité (N).
6. Valider invariants (`executionAuthority=false`, doctrine method-candidate, sources).
7. Produire preuve structurée (P) → `consumed=true` si resolved_*.
8. Vérifier six signaux complets.
9. Appeler QualifyCycle **une fois** (contrat existant).
10. Enrichir avec métadonnées cycle, état CKC, preuve, disclosures.
11. Retourner succès read-only.
12–15. Ne pas créer CycleInstance / LPS / EpistemicItem / gate.

Si une étape avant 9 échoue → échec structuré ; QualifyCycle **non appelé**.

## N. Résolution CKC

### Mapping detailed

1. Detailed valide/disponible → `resolved_detailed`.
2. Sinon fallback synthétique valide → `resolved_fallback_synthetic`.
3. Sinon → non exploitable (`unresolved_*`).

### Mapping synthetic

1. Synthétique primaire valide → `resolved_synthetic`.
2. Sinon → non exploitable.

Fallback = **substitution**, jamais addition.

## O. Statuts détaillés et mapping T-A2

### Statuts D2

| Statut D2 | fallbackUsed | exploitable | QualifyCycle |
|-----------|--------------|-------------|--------------|
| `resolved_detailed` | false | true | Oui (si signaux OK) |
| `resolved_synthetic` | false | true | Oui |
| `resolved_fallback_synthetic` | true | true | Oui + disclosure |
| `unresolved_invalid_mapping` | — | false | Non |
| `unresolved_unavailable` | — | false | Non |
| `unresolved_catalog_incompatible` | — | false | Non |
| `unresolved_cycle_not_selectable` | — | false | Non |

### Mapping vers types T-A2 existants (sans modifier les enums)

| Statut D2 | `CkcLevel` | `CkcStatus` | `CkcSource` | Perte d’info T-A2 |
|-----------|------------|-------------|-------------|-------------------|
| `resolved_detailed` | `detailed` | `resolved` | `repository_candidate` | Aucune significative |
| `resolved_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | Aucune |
| `resolved_fallback_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | **Perte** primary vs fallback → **statut D2 obligatoire** dans résultat enrichi |
| `unresolved_invalid_mapping` | `absent` | `invalid` | `unavailable` | Cause fine dans code D2 |
| `unresolved_unavailable` | `absent` | `unavailable` | `unavailable` | Idem |
| `unresolved_catalog_incompatible` | `absent` | `unavailable` | `unavailable` | Cause = catalogue ; code D2 |
| `unresolved_cycle_not_selectable` | `absent` | `invalid` | `unavailable` | Cause = lifecycle ; code D2 |

`fallbackPolicy` T-A2 candidat : `intra_v3_only` lorsque le mapping D1 déclare un fallback ; sinon `none` pour synthetic-only — détail d’implémentation réservé architecture.

## P. Définition et preuve de consommation CKC

### Consommé si et seulement si

- type sélectionnable ;
- mapping D1 valide ;
- statut ∈ {`resolved_detailed`,`resolved_synthetic`,`resolved_fallback_synthetic`} ;
- `executionAuthority=false` ;
- `doctrineStatus=method-candidate` ;
- source identifiée ;
- preuve structurée complète ;
- aucun invariant bloquant violé.

### Preuve structurée (minimum)

`cycleTypeId` · statut détaillé D2 · level/status/source T-A2 · référence primaire attendue · référence utilisée · `fallbackUsed` · `fallbackReference?` · `catalogVersion` · `catalogHash` · `correlationId` · `resolvedAt` · `doctrineStatus=method-candidate` · `executionAuthority=false` · `consumed=true` · réserves/disclosures.

La preuve **ne** contient **pas** le texte brut du CKC, **ne** parse **pas** Markdown, **n’est pas** un gate ni une décision.

## Q. Bridge QualifyCycle

### Responsabilités

Orchestrer · empêcher QualifyCycle si CKC non consommé ou signaux incomplets · transmettre uniquement les champs T-A2 acceptés (`signals`, `cycleTypeId` hint, objective/scope optionnels non scorés) · ne pas dupliquer `recommendProfile` · conserver `isMorrisDecision=false` · enrichir après · erreur structurée sinon.

### QualifyCycle reste responsable de

Priorité Critical · Light si `lowRiskBounded` sans critique · Standard défaut · rationale · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false`.

### Interdits bridge

Recalcul profil · score parallèle · changer priorité signaux · transformer Critical en décision · créer/persister.

## R. Résultat fonctionnel D2

### Succès

`state=success` · `cycleTypeId` · label/description · `lifecycleStatus` · `catalogVersion` · `catalogHash` · `correlationId` · statut détaillé CKC · preuve consommation · `recommendedProfile` · `rationale` · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false` · disclosures · `resolvedAt`/`qualifiedAt`.

### Échec

`state=failure` · code fonctionnel · message · `blocking` · `retryable` · `recoverable` · `correlationId` · `cycleTypeId?` · timestamp · **aucune** recommandation exploitable · **aucune** preuve `consumed=true`.

## S. Fail-closed, erreurs et recovery

| Cas | Statut D2 | Code candidat | Blocking | QualifyCycle | Retry | Recovery |
|-----|-----------|---------------|----------|--------------|-------|----------|
| `cycleTypeId` absent | — | `CYCLE_TYPE_REQUIRED` | oui | non | oui | fournir type |
| invalide | — | `CYCLE_TYPE_INVALID` | oui | non | oui | corriger |
| inconnu | `unresolved_cycle_not_selectable` | `CYCLE_TYPE_UNKNOWN` | oui | non | non* | catalogue |
| deprecated/unavailable | idem | `CYCLE_TYPE_NOT_SELECTABLE` | oui | non | non* | catalogue |
| mapping absent/incohérent | `unresolved_invalid_mapping` | `CKC_MAPPING_INVALID` | oui | non | non | correctif D1 |
| detailed+fallback KO | `unresolved_unavailable` | `CKC_UNAVAILABLE` | oui | non | non | correctif |
| synthetic primaire KO | idem | `CKC_SYNTHETIC_INVALID` | oui | non | non | correctif |
| detailed KO + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | non | oui | — | disclosure |
| version incompatible | `unresolved_catalog_incompatible` | `CATALOG_VERSION_INCOMPATIBLE` | oui | non | oui | aligner version |
| hash stale | idem | `CATALOG_STALE` | oui | non | oui | recharger catalogue |
| signaux incomplets | (CKC peut être OK) | `SIGNALS_INCOMPLETE` | oui | non | oui | compléter |
| résolution incohérente | `unresolved_*` | `CKC_RESOLUTION_INCOHERENT` | oui | non | non | correctif |
| `executionAuthority≠false` | — | `CKC_EXECUTION_AUTHORITY_FORBIDDEN` | oui | non | non | correctif |
| erreur interne | — | `D2_INTERNAL_ERROR` | oui | non | limité | support |

\* sauf réactivation catalogue / nouveau type.

### Mapping candidat vers `CycleDetailCode` T-A2 (sans modifier enums)

| Code D2 | Detail T-A2 candidat |
|---------|----------------------|
| `CYCLE_TYPE_*` (sauf NOT_SELECTABLE métier) | `CYCLE_INVALID` |
| `CYCLE_TYPE_NOT_SELECTABLE` / UNKNOWN | `CYCLE_INVALID` |
| `CKC_*` (sauf FALLBACK_USED) | `CKC_UNAVAILABLE` |
| `CATALOG_VERSION_INCOMPATIBLE` / `CATALOG_STALE` | `CONTEXT_STALE` |
| `SIGNALS_INCOMPLETE` | `CYCLE_INVALID` |
| `D2_INTERNAL_ERROR` | `PERSISTENCE_FAILURE` |
| `CKC_FALLBACK_USED` | pas une erreur — disclosure |

Implémentation du mapping = architecture.

## T. Invariants T-A2 et règles de profil

Hérités, non modifiés :

1. Un signal Critical (`structuralChange|securityImpact|architectureImpact|dataImpact|irreversible`) → Critical.
2. Sinon `lowRiskBounded=true` → Light.
3. Sinon → Standard.
4. Critical gagne sur `lowRiskBounded`.
5. `isMorrisDecision=false` toujours.
6. `requestedProfile` non exposé dans D2.
7. Capitalization = `cycleTypeId`, pas un profil.

## U. Mono-CKC Core et extensibilité future

- Exactement **un** CKC Core effectif.
- **Zéro** extension active.
- Fallback = substitution.
- Aucun tableau d’extensions consommées.
- Aucun résultat ne revendique le support multi-CKC.
- Extensibilité future : ne pas empêcher D2-D ; déclaration catalogue explicite ; GO Morris distinct ; pas de structure technique imposée ici.

## V. Versionnement, hash et correlationId

| Champ | Règle |
|-------|-------|
| `catalogVersion` | Version contractuelle D1 |
| `catalogHash` | Change si identité, lifecycle ou mapping CKC pertinent change ; algo/périmètre exact → architecture |
| `correlationId` | Obligatoire ; propagé succès/erreurs/audit futur ; pas d’autorité IAM |

## W. Contrat de projection futur D3

D3 pourra lire : type · profil · rationale · état CKC · source · fallbackUsed · disclosures · erreurs · Critical informatif · non-persistance · absence de décision Morris.

**Non produits :** écrans, parcours UI, Figma, composants, routes, textes UI finaux.

## X. Critères d’acceptation

| ID | Critère |
|----|---------|
| AC-D2-FD-01 | Detailed valide → `resolved_detailed` + `consumed=true` |
| AC-D2-FD-02 | Synthetic valide → `resolved_synthetic` |
| AC-D2-FD-03 | Detailed KO + fallback OK → `resolved_fallback_synthetic` + disclosure |
| AC-D2-FD-04 | Mapping invalide bloque avant QualifyCycle |
| AC-D2-FD-05 | Catalogue incompatible/stale bloque avant QualifyCycle |
| AC-D2-FD-06 | Signaux incomplets bloquent QualifyCycle |
| AC-D2-FD-07 | Succès CKC → QualifyCycle **une** fois |
| AC-D2-FD-08 | Bridge ne modifie pas la recommandation T-A2 |
| AC-D2-FD-09 | Critical + `isMorrisDecision=false` |
| AC-D2-FD-10 | Aucun succès avec CycleInstance/LPS/EpistemicItem |
| AC-D2-FD-11 | Aucune extension CKC activée |
| AC-D2-FD-12 | version + hash + correlationId présents si exploitable |
| AC-D2-FD-13 | `executionAuthority=false` |
| AC-D2-FD-14 | Distinction synthetic primaire vs fallback conservée (statut D2) |
| AC-D2-FD-15 | D3 peut consommer sans réimplémenter les règles métier |

## Y. Scénarios fonctionnels

### Y1 — Cadrage detailed + aucun critique + lowRiskBounded=true

- **Précond. :** `cyc:framing` detailed OK ; catalogue OK.
- **Entrée :** six signaux ; seul `lowRiskBounded=true`.
- **Étapes :** M1–11.
- **Résultat :** success · `resolved_detailed` · profil **Light** · QualifyCycle **oui**.
- **Anti-claim :** pas de CreateCycle.
- **Recovery :** n/a.

### Y2 — Architecture technique detailed + securityImpact=true

- **Résultat :** success · `resolved_detailed` · profil **Critical** · `requiresJustificationForCritical=true` · `isMorrisDecision=false` · QualifyCycle oui.
- **Anti-claim :** Critical ≠ gate.

### Y3 — QA detailed indisponible + fallback synthétique valide

- **Résultat :** success · `resolved_fallback_synthetic` · `fallbackUsed=true` · disclosure · QualifyCycle oui.

### Y4 — Delivery synthetic + aucun critique + lowRiskBounded=false

- **Résultat :** success · `resolved_synthetic` · profil **Standard** · QualifyCycle oui.

### Y5 — Cycle inconnu

- **Résultat :** failure · `CYCLE_TYPE_UNKNOWN` · QualifyCycle **non**.

### Y6 — Cycle unavailable

- **Résultat :** failure · `CYCLE_TYPE_NOT_SELECTABLE` · QualifyCycle non.

### Y7 — Mapping detailed et fallback invalides

- **Résultat :** failure · `CKC_UNAVAILABLE` · QualifyCycle non.

### Y8 — Catalogue stale

- **Résultat :** failure · `CATALOG_STALE` · QualifyCycle non · retry après rechargement.

### Y9 — Signaux incomplets

- **Précond. :** CKC pourrait être OK.
- **Résultat :** failure · `SIGNALS_INCOMPLETE` · QualifyCycle non · retry.

### Y10 — Critical + lowRiskBounded simultanés

- **Résultat :** success · profil **Critical** (priorité) · QualifyCycle oui.

### Y11 — Capitalization via cycleTypeId

- **Entrée :** `cyc:capitalization`.
- **Résultat :** success · `capitalizationViaCycleTypeId=true` · profil selon signaux · QualifyCycle oui.

### Y12 — Resolver renvoie executionAuthority=true

- **Résultat :** failure · `CKC_EXECUTION_AUTHORITY_FORBIDDEN` · QualifyCycle non · `consumed` jamais true.

### Y13 — Erreur interne

- **Résultat :** failure · `D2_INTERNAL_ERROR` · QualifyCycle non · retry limité.

### Y14 — Tentative implicite d’extension CKC

- **Résultat :** failure ou rejet fonctionnel · aucune extension consommée · anti-claim multi-CKC · QualifyCycle non si Core non consommé.

## Z. Anti-claims

D2 conception **n’est pas** : implémenté · architecture adoptée · Delivery ouverte · D3 ouvert · multi-CKC supporté · extensions actives · CreateCycle · exécution autorisée · baseline méthode · recommandation automatique du type · parsing Markdown · UI.

## AA. Risques et réserves

| ID | Risque | Mitigation |
|----|--------|------------|
| R-D2-FD-01 | Confusion CreateCycle vs fail-closed D2 | §D, §S |
| R-D2-FD-02 | Perte primary/fallback dans T-A2 | Statut D2 obligatoire |
| R-D2-FD-03 | Duplication règles profil | Bridge n’appelle que QualifyCycle |
| R-D2-FD-04 | Hash mal borné | Question architecture |
| R-D2-FD-05 | Sur-interprétation MemoryCkcResolver | Observation ≠ produit |
| R-D2-FD-06 | Ouverture implicite D2-D | §U fermé |
| **INHERITED-R-01** | Condensation README | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** |

## AB. Slicing D2-A / D2-B / D2-C / D2-D

| Lot | Contenu fonctionnel | Entrée | Sortie | Dépend |
|-----|---------------------|--------|--------|--------|
| **D2-A** | Projection catalogue · validation lifecycle · version/hash · contrat projection | Catalogue D1 | Projection validée / erreurs sélection | D1 |
| **D2-B** | Resolver Core · priorités · statuts · mapping T-A2 · preuve · fail-closed | Sortie A | Résolution + preuve ou erreur CKC | D2-A |
| **D2-C** | Bridge · signaux · QualifyCycle · enrichissement · disclosures | Sortie B + signaux | Résultat D2 success/failure | D2-B + T-A2 |
| **D2-D** | Extensions multi-CKC | GO Morris | — | **gated — non ouvert** |

Critères de sortie d’incrément = AC pertinents (§X). Delivery **non ouverte**. Tests futurs = unitaires/intégration après architecture.

## AC. Questions réservées à l’architecture

1. Emplacement exact du bridge.
2. Réutilisation / adaptation de `CkcResolverPort`.
3. Représentation TypeScript des statuts détaillés.
4. Mapping des erreurs D2 → `CycleDetailCode`.
5. Calcul et périmètre de `catalogHash`.
6. Source runtime des références CKC sans parsing Markdown.
7. Stratégie de validation des références.
8. Audit / observabilité.
9. Injection des dépendances.
10. Compatibilité avec `ResolveCycleKnowledgeContract` / CreateCycle.
11. Frontière domaine / application.
12. Plan de tests unitaires et d’intégration.

**Aucune de ces questions n’est tranchée ici.**

## AD. Gate suivant candidat

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

Ne pas exécuter sans nouveau GO Morris.

## AE. Verdict

```text
V3.1-D2 FUNCTIONAL DESIGN COMPLETE —
D-V3.1-D2-01…12 RECORDED AS ADOPTED BY MORRIS —
READ-ONLY TYPE TO CKC CONSUMPTION TO PROFILE FUNCTIONAL CONTRACT DEFINED —
DETAILED CKC RESOLUTION STATUSES AND T-A2 MAPPING DEFINED —
STRUCTURED CKC CONSUMPTION PROOF SPECIFIED —
FAIL-CLOSED BEHAVIOUR DEFINED —
QUALIFYCYCLE REMAINS UNCHANGED —
CORE CKC ONLY —
MULTI-CKC EXTENSIONS NOT OPENED —
D2-A TO D2-B TO D2-C FUNCTIONAL SLICING DEFINED —
D2-D GATED —
VERSION HASH AND CORRELATIONID TRACEABILITY DEFINED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Statut :** `V3.1-D2 FUNCTIONAL DESIGN READY FOR MORRIS VALIDATION — ARCHITECTURE FUNCTIONAL GATE REQUIRES DISTINCT MORRIS GO — DELIVERY NOT OPENED — D3 NOT OPENED`

```

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

```

## 08 complet
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
| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| D2 conception fonctionnelle | **terminée localement** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
| Architecture D2 | **non ouverte** |
| Delivery D2-A/B/C | **non ouvertes** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception fonctionnelle locale** · architecture/Delivery **non ouvertes** · slicing **A→B→C** · D2-D gated |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Orchestration CKC · consommation fail-closed · bridge QualifyCycle · Core-only (extensions fermées) · questions architecture réservées — voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) / [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md).

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

```

## README complet
```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 CLOSED — V3.1-D2 FRAMING ARBITRATED — FUNCTIONAL DESIGN COMPLETE LOCALLY — ARCHITECTURE/DELIVERY/D3 NOT OPENED` |
| **Date** | 2026-08-01 15:05:34 CEST (+0200) |
| **Cycle courant** | 2 — Conception fonctionnelle V3.1-D2 |
| **Profil** | **Standard** |
| **Typologie** | DOC |
| **Gate courant** | Conception fonctionnelle D2 **consommé** (2026-08-01 14:58 CEST) |
| **Décisions D2** | D-V3.1-D2-01…12 **ADOPTED BY MORRIS** (arbitrage immédiatement antérieur au GO conception) |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) (arbitré) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) (conception) |
| **Docs protégées** | `12` / `13` / `14` **inchangés** |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1** | **techniquement clos** sur `main` |
| **V3.1-D2 cadrage** | **arbitré** — décisions 01…12 adoptées |
| **V3.1-D2 conception fonctionnelle** | **terminée localement** — doc 16 |
| Architecture fonctionnelle D2 | **candidate suivante** — GO Morris distinct |
| Delivery D2-A/B/C | **fermées** |
| D2-D extensions | **gated** |
| V3.1-D3 | **fermé** · réserve Figma |
| V3.2 / V4–V6 | non autorisés |

**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation Delivery/D3.

## Gate candidat suivant

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

## Verdict

`V3.1-D2 FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS VALIDATION — NO ARCHITECTURE ADOPTED — NO DELIVERY — D3 NOT OPENED`

```

## Couverture
entrées/sorties/parcours/statuts/mapping T-A2/preuve/bridge/fail-closed/Core-only/version-hash-correlationId/AC/scénarios/slicing/questions archi/réserve README NOT LIFTED

## Absence code/archi/Delivery/D3
Confirmée

## État Git final
```
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== project status ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
=== staged ===
=== name-status ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== stat ===
 .../08-implementation-backlog-and-slicing.md       | 19 +++++----
 .../README.md                                      | 49 ++++++++++++++--------
 2 files changed, 43 insertions(+), 25 deletions(-)
wt=77
remote_framing=
```

## Rapport temporaire complet
--- BEGIN FD REPORT ---
# V3.1-D2 Functional Design Report

1. Horodatage: 2026-08-01 15:05:34 CEST (+0200)
2. Git Truth:
```
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
L/R main...origin/main=0	0
=== STATUS ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
=== STAGED ===
=== DIFF NAME ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== DIFF STAT ===
 .../08-implementation-backlog-and-slicing.md       | 15 +++----
 .../README.md                                      | 48 ++++++++++++++--------
 2 files changed, 38 insertions(+), 25 deletions(-)
=== UNTRACKED PROJECT ===
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
wt_count=77
=== PRUNE ===
=== REMOTE BRANCHES ===
handoff_tip=5d4f3bbafe93a1baa4d6583307d1bb8ddbf31e00
handoff_blob=579865fee30dd96e0d69ec8f63360e1afa4cd4c5
expected_ancestor=YES
DOC15_PRESENT
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

```
3. Gate Morris:
GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
APPLY ADOPTED D-V3.1-D2-01…12 —
NO ARCHITECTURE — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
Date GO: 2026-08-01 14:58 CEST (+0200)

Morris adoption (immediate prior):
D2-01=B D2-02=B D2-03=statuts détaillés+mapping T-A2 D2-04=C
D2-05=fail-closed strict produit D2-06=A D2-07=C
D2-08=catalogue explicite plus tard D2-09=A→B→C D2-D gated
D2-10=sans UI D2-11=version+hash+correlationId D2-12=conception ensuite
« Ok pour le recommandations »
4. Décisions adoptées: D-V3.1-D2-01…12 DECIDED — ADOPTED BY MORRIS
5. Cycle 2 Conception fonctionnelle · Standard · DOC
6. CKC: pilots/02-conception-fonctionnelle.md · executionAuthority=false
7. Sources: gouvernance + framing 08/12-16 + D1 + T-A2
8. Héritage D1/T-A2: catalogue OK ; ports guidance ≠ produit D2
9. Fichiers: CREATED 16 · MODIFIED 15/08/README
10. Document 16 complet:
```markdown
# 16 — V3.1-D2 CKC Resolver & QualifyCycle Bridge — Conception fonctionnelle

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-01 15:05:34 CEST (+0200) |
| **Cycle projet** | 2 — Conception fonctionnelle |
| **Profil SFIA** | Standard |
| **Typologie** | DOC |
| **Gate Morris** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — APPLY ADOPTED D-V3.1-D2-01…12 — NO ARCHITECTURE — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` (2026-08-01 14:58 CEST +0200) |
| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **CKC** | `pilots/02-conception-fonctionnelle.md` · method-candidate · `executionAuthority=false` |
| **Statut** | `V3.1-D2 FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS VALIDATION — NO ARCHITECTURE ADOPTED — NO DELIVERY` |
| **Code / UI / D3 / CreateCycle** | **non** |

## B. Gate Morris et décision record

**Adoption Morris (immédiatement antérieure au GO conception) :**

```text
D2-01 = B · D2-02 = B · D2-03 = statuts détaillés avec mapping T-A2 · D2-04 = C
D2-05 = fail-closed strict pour l'exploitabilité produit · D2-06 = A · D2-07 = C
D2-08 = catalogue explicite plus tard · D2-09 = D2-A → D2-B → D2-C, D2-D gated
D2-10 = D2 sans UI · D2-11 = version + hash + correlationId · D2-12 = conception fonctionnelle ensuite
Ok pour le recommandations
```

Enregistrement documentaire : **2026-08-01 15:05:34 CEST (+0200)** — heure d’adoption transcript non disponible ; adoption immédiatement antérieure au GO 14:58 CEST.

Décisions complètes : voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) §B2 et §U — statut `DECIDED — ADOPTED BY MORRIS`.

## C. Sources consultées

Gouvernance SFIA · CKC `02-conception-fonctionnelle` · carte synthétique · méthode v2.5 · framing `08`/`12`/`13`/`14`/`15`/README · D1 README/`05`/`cycleTypeCatalog` · T-A2 `ckcResolver`/`resolveCycleKnowledgeContract`/`qualifyCycle`/`qualification`/`invariants`/`types`/`errors`/`memoryCkcResolver` · handoff tip `5d4f3bb…`.

## D. Héritage D1, cadrage D2 et contrats T-A2

| Héritage | Rôle | Limite |
|----------|------|--------|
| Catalogue D1 | 15 types + mapping CKC mandatory | Pas de résolution produit |
| Cadrage doc 15 | Problème, options, décisions | Arbitré |
| `QualifyCycle` / `qualifyCycle` | Recommandation profil | Inchangé |
| `CkcResolverPort` / `MemoryCkcResolver` | Port guidance T-A2 | Non équivalent au produit D2 ; observation seulement |
| `ResolveCycleKnowledgeContract` | Guidance ; absent n’bloque pas CreateCycle | **≠** fail-closed produit D2 |
| CreateCycle | Hors V3.1-D2 | Ne modifie pas la règle D2 |

Ce document **ne duplique pas** et **ne remplace pas** le domaine T-A2 ; il définit le comportement produit D2 qui **consomme** ces contrats.

## E. Objectif fonctionnel

À partir d’un `cycleTypeId` sélectionné, d’un catalogue D1 compatible (version + hash), d’un mapping CKC valide, de six signaux explicites et d’un `correlationId`, D2 produit :

1. **Succès** read-only exploitable : type + CKC résolu + preuve de consommation + profil T-A2 + traçabilité + disclosures + `isMorrisDecision=false` ; **ou**
2. **Échec** structuré fail-closed : aucun résultat exploitable, aucun `consumed=true`.

Aucune mutation (`CycleInstance`, LPS, EpistemicItem, gate Morris).

## F. Valeur et bénéficiaires

- Opérateur / QA / revueur : résultat structuré testable sans UI.
- Futur D3 : contrat d’entrée stable.
- Morris : frontières d’autorité explicites.

## G. Périmètre inclus

Projection catalogue · validation sélection · résolution CKC Core · preuve de consommation · bridge QualifyCycle · résultat enrichi · fail-closed · traçabilité version/hash/correlationId · contrat de données pour D3.

## H. Hors périmètre

Architecture technique · Delivery · D3/UI/Figma · CreateCycle · multi-CKC extensions (D2-D) · parsing Markdown · scoring · recommandation automatique du type · promotion méthode · IAM · agent/LLM live.

## I. Acteurs et limites d’autorité

| Acteur | Fait | N’a pas d’autorité de |
|--------|------|------------------------|
| Utilisateur (futur D3) | Sélectionne type ; répond signaux | Décider du profil à la place de T-A2 ; exécuter |
| Bridge D2 | Orchestre ; bloque si non consommable | Modifier règles T-A2 ; créer |
| Resolver CKC | Résout + invariants | Appeler QualifyCycle ; exécuter |
| QualifyCycle | Recommande profil | Décision Morris ; création |
| CKC | Guidance method-candidate | `executionAuthority` |
| Morris | Adopte décisions / gates | — |

## J. Glossaire fonctionnel

| Terme | Définition |
|-------|------------|
| Mapping CKC | Métadonnées D1 `CycleTypeCkcMapping` |
| Résolution | Statut détaillé D2 + projection T-A2 |
| Consommation | Résolution valide **et** preuve structurée |
| Fallback | Substitution du Core indisponible — jamais un 2ᵉ CKC simultané |
| Exploitable | Succès D2 avec `consumed=true` et recommandation T-A2 |
| Core CKC | Unique CKC effectif du type (detailed ou synthetic primaire) |

## K. Préconditions

- Catalogue D1 versionné et empreinte cohérente.
- `cycleTypeId` sélectionné via catalogue (pas de saisie libre non validée).
- Six signaux Oui/Non explicites avant QualifyCycle.
- `correlationId` fourni.
- `requestedProfile` **non** exposé / non utilisé.
- Aucune extension CKC active.

## L. Entrées fonctionnelles

| Entrée | Obligatoire | Règles |
|--------|-------------|--------|
| `cycleTypeId` | Oui | Connu, actif, sélectionnable |
| `catalogVersion` | Oui | Version D1 |
| `catalogHash` | Oui (fonctionnel) | Empreinte déterministe du contenu pertinent ; algo → architecture ; mismatch → stale |
| `correlationId` | Oui | Bout-en-bout ; pas d’identité IAM |
| Six signaux | Oui pour QualifyCycle | Absence ≠ `false` |
| `objective` / `scope` | Non | Non scorés |
| `requestedProfile` | Non | Non exposé |

## M. Parcours nominal

1. Recevoir type + traçabilité (version, hash, correlationId).
2. Vérifier compatibilité version/hash.
3. Vérifier existence et sélectionnabilité du type.
4. Lire mapping CKC Core obligatoire.
5. Résoudre selon priorité (N).
6. Valider invariants (`executionAuthority=false`, doctrine method-candidate, sources).
7. Produire preuve structurée (P) → `consumed=true` si resolved_*.
8. Vérifier six signaux complets.
9. Appeler QualifyCycle **une fois** (contrat existant).
10. Enrichir avec métadonnées cycle, état CKC, preuve, disclosures.
11. Retourner succès read-only.
12–15. Ne pas créer CycleInstance / LPS / EpistemicItem / gate.

Si une étape avant 9 échoue → échec structuré ; QualifyCycle **non appelé**.

## N. Résolution CKC

### Mapping detailed

1. Detailed valide/disponible → `resolved_detailed`.
2. Sinon fallback synthétique valide → `resolved_fallback_synthetic`.
3. Sinon → non exploitable (`unresolved_*`).

### Mapping synthetic

1. Synthétique primaire valide → `resolved_synthetic`.
2. Sinon → non exploitable.

Fallback = **substitution**, jamais addition.

## O. Statuts détaillés et mapping T-A2

### Statuts D2

| Statut D2 | fallbackUsed | exploitable | QualifyCycle |
|-----------|--------------|-------------|--------------|
| `resolved_detailed` | false | true | Oui (si signaux OK) |
| `resolved_synthetic` | false | true | Oui |
| `resolved_fallback_synthetic` | true | true | Oui + disclosure |
| `unresolved_invalid_mapping` | — | false | Non |
| `unresolved_unavailable` | — | false | Non |
| `unresolved_catalog_incompatible` | — | false | Non |
| `unresolved_cycle_not_selectable` | — | false | Non |

### Mapping vers types T-A2 existants (sans modifier les enums)

| Statut D2 | `CkcLevel` | `CkcStatus` | `CkcSource` | Perte d’info T-A2 |
|-----------|------------|-------------|-------------|-------------------|
| `resolved_detailed` | `detailed` | `resolved` | `repository_candidate` | Aucune significative |
| `resolved_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | Aucune |
| `resolved_fallback_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | **Perte** primary vs fallback → **statut D2 obligatoire** dans résultat enrichi |
| `unresolved_invalid_mapping` | `absent` | `invalid` | `unavailable` | Cause fine dans code D2 |
| `unresolved_unavailable` | `absent` | `unavailable` | `unavailable` | Idem |
| `unresolved_catalog_incompatible` | `absent` | `unavailable` | `unavailable` | Cause = catalogue ; code D2 |
| `unresolved_cycle_not_selectable` | `absent` | `invalid` | `unavailable` | Cause = lifecycle ; code D2 |

`fallbackPolicy` T-A2 candidat : `intra_v3_only` lorsque le mapping D1 déclare un fallback ; sinon `none` pour synthetic-only — détail d’implémentation réservé architecture.

## P. Définition et preuve de consommation CKC

### Consommé si et seulement si

- type sélectionnable ;
- mapping D1 valide ;
- statut ∈ {`resolved_detailed`,`resolved_synthetic`,`resolved_fallback_synthetic`} ;
- `executionAuthority=false` ;
- `doctrineStatus=method-candidate` ;
- source identifiée ;
- preuve structurée complète ;
- aucun invariant bloquant violé.

### Preuve structurée (minimum)

`cycleTypeId` · statut détaillé D2 · level/status/source T-A2 · référence primaire attendue · référence utilisée · `fallbackUsed` · `fallbackReference?` · `catalogVersion` · `catalogHash` · `correlationId` · `resolvedAt` · `doctrineStatus=method-candidate` · `executionAuthority=false` · `consumed=true` · réserves/disclosures.

La preuve **ne** contient **pas** le texte brut du CKC, **ne** parse **pas** Markdown, **n’est pas** un gate ni une décision.

## Q. Bridge QualifyCycle

### Responsabilités

Orchestrer · empêcher QualifyCycle si CKC non consommé ou signaux incomplets · transmettre uniquement les champs T-A2 acceptés (`signals`, `cycleTypeId` hint, objective/scope optionnels non scorés) · ne pas dupliquer `recommendProfile` · conserver `isMorrisDecision=false` · enrichir après · erreur structurée sinon.

### QualifyCycle reste responsable de

Priorité Critical · Light si `lowRiskBounded` sans critique · Standard défaut · rationale · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false`.

### Interdits bridge

Recalcul profil · score parallèle · changer priorité signaux · transformer Critical en décision · créer/persister.

## R. Résultat fonctionnel D2

### Succès

`state=success` · `cycleTypeId` · label/description · `lifecycleStatus` · `catalogVersion` · `catalogHash` · `correlationId` · statut détaillé CKC · preuve consommation · `recommendedProfile` · `rationale` · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false` · disclosures · `resolvedAt`/`qualifiedAt`.

### Échec

`state=failure` · code fonctionnel · message · `blocking` · `retryable` · `recoverable` · `correlationId` · `cycleTypeId?` · timestamp · **aucune** recommandation exploitable · **aucune** preuve `consumed=true`.

## S. Fail-closed, erreurs et recovery

| Cas | Statut D2 | Code candidat | Blocking | QualifyCycle | Retry | Recovery |
|-----|-----------|---------------|----------|--------------|-------|----------|
| `cycleTypeId` absent | — | `CYCLE_TYPE_REQUIRED` | oui | non | oui | fournir type |
| invalide | — | `CYCLE_TYPE_INVALID` | oui | non | oui | corriger |
| inconnu | `unresolved_cycle_not_selectable` | `CYCLE_TYPE_UNKNOWN` | oui | non | non* | catalogue |
| deprecated/unavailable | idem | `CYCLE_TYPE_NOT_SELECTABLE` | oui | non | non* | catalogue |
| mapping absent/incohérent | `unresolved_invalid_mapping` | `CKC_MAPPING_INVALID` | oui | non | non | correctif D1 |
| detailed+fallback KO | `unresolved_unavailable` | `CKC_UNAVAILABLE` | oui | non | non | correctif |
| synthetic primaire KO | idem | `CKC_SYNTHETIC_INVALID` | oui | non | non | correctif |
| detailed KO + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | non | oui | — | disclosure |
| version incompatible | `unresolved_catalog_incompatible` | `CATALOG_VERSION_INCOMPATIBLE` | oui | non | oui | aligner version |
| hash stale | idem | `CATALOG_STALE` | oui | non | oui | recharger catalogue |
| signaux incomplets | (CKC peut être OK) | `SIGNALS_INCOMPLETE` | oui | non | oui | compléter |
| résolution incohérente | `unresolved_*` | `CKC_RESOLUTION_INCOHERENT` | oui | non | non | correctif |
| `executionAuthority≠false` | — | `CKC_EXECUTION_AUTHORITY_FORBIDDEN` | oui | non | non | correctif |
| erreur interne | — | `D2_INTERNAL_ERROR` | oui | non | limité | support |

\* sauf réactivation catalogue / nouveau type.

### Mapping candidat vers `CycleDetailCode` T-A2 (sans modifier enums)

| Code D2 | Detail T-A2 candidat |
|---------|----------------------|
| `CYCLE_TYPE_*` (sauf NOT_SELECTABLE métier) | `CYCLE_INVALID` |
| `CYCLE_TYPE_NOT_SELECTABLE` / UNKNOWN | `CYCLE_INVALID` |
| `CKC_*` (sauf FALLBACK_USED) | `CKC_UNAVAILABLE` |
| `CATALOG_VERSION_INCOMPATIBLE` / `CATALOG_STALE` | `CONTEXT_STALE` |
| `SIGNALS_INCOMPLETE` | `CYCLE_INVALID` |
| `D2_INTERNAL_ERROR` | `PERSISTENCE_FAILURE` |
| `CKC_FALLBACK_USED` | pas une erreur — disclosure |

Implémentation du mapping = architecture.

## T. Invariants T-A2 et règles de profil

Hérités, non modifiés :

1. Un signal Critical (`structuralChange|securityImpact|architectureImpact|dataImpact|irreversible`) → Critical.
2. Sinon `lowRiskBounded=true` → Light.
3. Sinon → Standard.
4. Critical gagne sur `lowRiskBounded`.
5. `isMorrisDecision=false` toujours.
6. `requestedProfile` non exposé dans D2.
7. Capitalization = `cycleTypeId`, pas un profil.

## U. Mono-CKC Core et extensibilité future

- Exactement **un** CKC Core effectif.
- **Zéro** extension active.
- Fallback = substitution.
- Aucun tableau d’extensions consommées.
- Aucun résultat ne revendique le support multi-CKC.
- Extensibilité future : ne pas empêcher D2-D ; déclaration catalogue explicite ; GO Morris distinct ; pas de structure technique imposée ici.

## V. Versionnement, hash et correlationId

| Champ | Règle |
|-------|-------|
| `catalogVersion` | Version contractuelle D1 |
| `catalogHash` | Change si identité, lifecycle ou mapping CKC pertinent change ; algo/périmètre exact → architecture |
| `correlationId` | Obligatoire ; propagé succès/erreurs/audit futur ; pas d’autorité IAM |

## W. Contrat de projection futur D3

D3 pourra lire : type · profil · rationale · état CKC · source · fallbackUsed · disclosures · erreurs · Critical informatif · non-persistance · absence de décision Morris.

**Non produits :** écrans, parcours UI, Figma, composants, routes, textes UI finaux.

## X. Critères d’acceptation

| ID | Critère |
|----|---------|
| AC-D2-FD-01 | Detailed valide → `resolved_detailed` + `consumed=true` |
| AC-D2-FD-02 | Synthetic valide → `resolved_synthetic` |
| AC-D2-FD-03 | Detailed KO + fallback OK → `resolved_fallback_synthetic` + disclosure |
| AC-D2-FD-04 | Mapping invalide bloque avant QualifyCycle |
| AC-D2-FD-05 | Catalogue incompatible/stale bloque avant QualifyCycle |
| AC-D2-FD-06 | Signaux incomplets bloquent QualifyCycle |
| AC-D2-FD-07 | Succès CKC → QualifyCycle **une** fois |
| AC-D2-FD-08 | Bridge ne modifie pas la recommandation T-A2 |
| AC-D2-FD-09 | Critical + `isMorrisDecision=false` |
| AC-D2-FD-10 | Aucun succès avec CycleInstance/LPS/EpistemicItem |
| AC-D2-FD-11 | Aucune extension CKC activée |
| AC-D2-FD-12 | version + hash + correlationId présents si exploitable |
| AC-D2-FD-13 | `executionAuthority=false` |
| AC-D2-FD-14 | Distinction synthetic primaire vs fallback conservée (statut D2) |
| AC-D2-FD-15 | D3 peut consommer sans réimplémenter les règles métier |

## Y. Scénarios fonctionnels

### Y1 — Cadrage detailed + aucun critique + lowRiskBounded=true

- **Précond. :** `cyc:framing` detailed OK ; catalogue OK.
- **Entrée :** six signaux ; seul `lowRiskBounded=true`.
- **Étapes :** M1–11.
- **Résultat :** success · `resolved_detailed` · profil **Light** · QualifyCycle **oui**.
- **Anti-claim :** pas de CreateCycle.
- **Recovery :** n/a.

### Y2 — Architecture technique detailed + securityImpact=true

- **Résultat :** success · `resolved_detailed` · profil **Critical** · `requiresJustificationForCritical=true` · `isMorrisDecision=false` · QualifyCycle oui.
- **Anti-claim :** Critical ≠ gate.

### Y3 — QA detailed indisponible + fallback synthétique valide

- **Résultat :** success · `resolved_fallback_synthetic` · `fallbackUsed=true` · disclosure · QualifyCycle oui.

### Y4 — Delivery synthetic + aucun critique + lowRiskBounded=false

- **Résultat :** success · `resolved_synthetic` · profil **Standard** · QualifyCycle oui.

### Y5 — Cycle inconnu

- **Résultat :** failure · `CYCLE_TYPE_UNKNOWN` · QualifyCycle **non**.

### Y6 — Cycle unavailable

- **Résultat :** failure · `CYCLE_TYPE_NOT_SELECTABLE` · QualifyCycle non.

### Y7 — Mapping detailed et fallback invalides

- **Résultat :** failure · `CKC_UNAVAILABLE` · QualifyCycle non.

### Y8 — Catalogue stale

- **Résultat :** failure · `CATALOG_STALE` · QualifyCycle non · retry après rechargement.

### Y9 — Signaux incomplets

- **Précond. :** CKC pourrait être OK.
- **Résultat :** failure · `SIGNALS_INCOMPLETE` · QualifyCycle non · retry.

### Y10 — Critical + lowRiskBounded simultanés

- **Résultat :** success · profil **Critical** (priorité) · QualifyCycle oui.

### Y11 — Capitalization via cycleTypeId

- **Entrée :** `cyc:capitalization`.
- **Résultat :** success · `capitalizationViaCycleTypeId=true` · profil selon signaux · QualifyCycle oui.

### Y12 — Resolver renvoie executionAuthority=true

- **Résultat :** failure · `CKC_EXECUTION_AUTHORITY_FORBIDDEN` · QualifyCycle non · `consumed` jamais true.

### Y13 — Erreur interne

- **Résultat :** failure · `D2_INTERNAL_ERROR` · QualifyCycle non · retry limité.

### Y14 — Tentative implicite d’extension CKC

- **Résultat :** failure ou rejet fonctionnel · aucune extension consommée · anti-claim multi-CKC · QualifyCycle non si Core non consommé.

## Z. Anti-claims

D2 conception **n’est pas** : implémenté · architecture adoptée · Delivery ouverte · D3 ouvert · multi-CKC supporté · extensions actives · CreateCycle · exécution autorisée · baseline méthode · recommandation automatique du type · parsing Markdown · UI.

## AA. Risques et réserves

| ID | Risque | Mitigation |
|----|--------|------------|
| R-D2-FD-01 | Confusion CreateCycle vs fail-closed D2 | §D, §S |
| R-D2-FD-02 | Perte primary/fallback dans T-A2 | Statut D2 obligatoire |
| R-D2-FD-03 | Duplication règles profil | Bridge n’appelle que QualifyCycle |
| R-D2-FD-04 | Hash mal borné | Question architecture |
| R-D2-FD-05 | Sur-interprétation MemoryCkcResolver | Observation ≠ produit |
| R-D2-FD-06 | Ouverture implicite D2-D | §U fermé |
| **INHERITED-R-01** | Condensation README | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** |

## AB. Slicing D2-A / D2-B / D2-C / D2-D

| Lot | Contenu fonctionnel | Entrée | Sortie | Dépend |
|-----|---------------------|--------|--------|--------|
| **D2-A** | Projection catalogue · validation lifecycle · version/hash · contrat projection | Catalogue D1 | Projection validée / erreurs sélection | D1 |
| **D2-B** | Resolver Core · priorités · statuts · mapping T-A2 · preuve · fail-closed | Sortie A | Résolution + preuve ou erreur CKC | D2-A |
| **D2-C** | Bridge · signaux · QualifyCycle · enrichissement · disclosures | Sortie B + signaux | Résultat D2 success/failure | D2-B + T-A2 |
| **D2-D** | Extensions multi-CKC | GO Morris | — | **gated — non ouvert** |

Critères de sortie d’incrément = AC pertinents (§X). Delivery **non ouverte**. Tests futurs = unitaires/intégration après architecture.

## AC. Questions réservées à l’architecture

1. Emplacement exact du bridge.
2. Réutilisation / adaptation de `CkcResolverPort`.
3. Représentation TypeScript des statuts détaillés.
4. Mapping des erreurs D2 → `CycleDetailCode`.
5. Calcul et périmètre de `catalogHash`.
6. Source runtime des références CKC sans parsing Markdown.
7. Stratégie de validation des références.
8. Audit / observabilité.
9. Injection des dépendances.
10. Compatibilité avec `ResolveCycleKnowledgeContract` / CreateCycle.
11. Frontière domaine / application.
12. Plan de tests unitaires et d’intégration.

**Aucune de ces questions n’est tranchée ici.**

## AD. Gate suivant candidat

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

Ne pas exécuter sans nouveau GO Morris.

## AE. Verdict

```text
V3.1-D2 FUNCTIONAL DESIGN COMPLETE —
D-V3.1-D2-01…12 RECORDED AS ADOPTED BY MORRIS —
READ-ONLY TYPE TO CKC CONSUMPTION TO PROFILE FUNCTIONAL CONTRACT DEFINED —
DETAILED CKC RESOLUTION STATUSES AND T-A2 MAPPING DEFINED —
STRUCTURED CKC CONSUMPTION PROOF SPECIFIED —
FAIL-CLOSED BEHAVIOUR DEFINED —
QUALIFYCYCLE REMAINS UNCHANGED —
CORE CKC ONLY —
MULTI-CKC EXTENSIONS NOT OPENED —
D2-A TO D2-B TO D2-C FUNCTIONAL SLICING DEFINED —
D2-D GATED —
VERSION HASH AND CORRELATIONID TRACEABILITY DEFINED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION
```

**Statut :** `V3.1-D2 FUNCTIONAL DESIGN READY FOR MORRIS VALIDATION — ARCHITECTURE FUNCTIONAL GATE REQUIRES DISTINCT MORRIS GO — DELIVERY NOT OPENED — D3 NOT OPENED`

```
11. Document 15 complet (après):
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

```
12. 08 complet:
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
| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| D2 conception fonctionnelle | **terminée localement** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
| Architecture D2 | **non ouverte** |
| Delivery D2-A/B/C | **non ouvertes** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception fonctionnelle locale** · architecture/Delivery **non ouvertes** · slicing **A→B→C** · D2-D gated |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Orchestration CKC · consommation fail-closed · bridge QualifyCycle · Core-only (extensions fermées) · questions architecture réservées — voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) / [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md).

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

```
13. README complet:
```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 CLOSED — V3.1-D2 FRAMING ARBITRATED — FUNCTIONAL DESIGN COMPLETE LOCALLY — ARCHITECTURE/DELIVERY/D3 NOT OPENED` |
| **Date** | 2026-08-01 15:05:34 CEST (+0200) |
| **Cycle courant** | 2 — Conception fonctionnelle V3.1-D2 |
| **Profil** | **Standard** |
| **Typologie** | DOC |
| **Gate courant** | Conception fonctionnelle D2 **consommé** (2026-08-01 14:58 CEST) |
| **Décisions D2** | D-V3.1-D2-01…12 **ADOPTED BY MORRIS** (arbitrage immédiatement antérieur au GO conception) |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) (arbitré) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) (conception) |
| **Docs protégées** | `12` / `13` / `14` **inchangés** |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1** | **techniquement clos** sur `main` |
| **V3.1-D2 cadrage** | **arbitré** — décisions 01…12 adoptées |
| **V3.1-D2 conception fonctionnelle** | **terminée localement** — doc 16 |
| Architecture fonctionnelle D2 | **candidate suivante** — GO Morris distinct |
| Delivery D2-A/B/C | **fermées** |
| D2-D extensions | **gated** |
| V3.1-D3 | **fermé** · réserve Figma |
| V3.2 / V4–V6 | non autorisés |

**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant — pas une autorisation Delivery/D3.

## Gate candidat suivant

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

## Verdict

`V3.1-D2 FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS VALIDATION — NO ARCHITECTURE ADOPTED — NO DELIVERY — D3 NOT OPENED`

```
14–27. Voir document 16 sections L–AC.
28. État Git final:
```
current=framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
=== project status ===
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
=== staged ===
=== name-status ===
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
=== stat ===
 .../08-implementation-backlog-and-slicing.md       | 19 +++++----
 .../README.md                                      | 49 ++++++++++++++--------
 2 files changed, 43 insertions(+), 25 deletions(-)
wt=77
remote_framing=
```
29. Gate suivant:
GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
USE VALIDATED FUNCTIONAL DESIGN —
DEFINE COMPONENT RESPONSIBILITIES, CONTRACT BOUNDARIES, DATA FLOWS, STATUS MAPPING, CONSUMPTION PROOF AND SLICING —
NO TECHNICAL ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
30. Verdict:
V3.1-D2 FUNCTIONAL DESIGN COMPLETE —
D-V3.1-D2-01…12 RECORDED AS ADOPTED BY MORRIS —
READ-ONLY TYPE TO CKC CONSUMPTION TO PROFILE FUNCTIONAL CONTRACT DEFINED —
DETAILED CKC RESOLUTION STATUSES AND T-A2 MAPPING DEFINED —
STRUCTURED CKC CONSUMPTION PROOF SPECIFIED —
FAIL-CLOSED BEHAVIOUR DEFINED —
QUALIFYCYCLE REMAINS UNCHANGED —
CORE CKC ONLY —
MULTI-CKC EXTENSIONS NOT OPENED —
D2-A TO D2-B TO D2-C FUNCTIONAL SLICING DEFINED —
D2-D GATED —
VERSION HASH AND CORRELATIONID TRACEABILITY DEFINED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION

Statut: V3.1-D2 FUNCTIONAL DESIGN READY FOR MORRIS VALIDATION — ARCHITECTURE FUNCTIONAL GATE REQUIRES DISTINCT MORRIS GO — DELIVERY NOT OPENED — D3 NOT OPENED

--- END FD REPORT ---

## Content coverage
- gate Morris complete: yes
- Morris decisions complete: yes
- CKC complete: yes
- Git Truth complete: yes
- source documents complete: yes
- created document full content: yes
- modified sections complete: yes
- functional inputs/outputs complete: yes
- detailed statuses complete: yes
- T-A2 mapping complete: yes
- consumption proof complete: yes
- bridge complete: yes
- fail-closed complete: yes
- acceptance criteria complete: yes
- scenarios complete: yes
- slicing complete: yes
- architecture questions complete: yes
- risks and reserves complete: yes
- final Git state complete: yes
- temporary report full content: yes
- synthesis only: no
- review pack verdict: complete

## Gate suivant
GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
USE VALIDATED FUNCTIONAL DESIGN —
DEFINE COMPONENT RESPONSIBILITIES, CONTRACT BOUNDARIES, DATA FLOWS, STATUS MAPPING, CONSUMPTION PROOF AND SLICING —
NO TECHNICAL ARCHITECTURE —
NO DELIVERY —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION

## Verdict
V3.1-D2 FUNCTIONAL DESIGN COMPLETE —
D-V3.1-D2-01…12 RECORDED AS ADOPTED BY MORRIS —
READ-ONLY TYPE TO CKC CONSUMPTION TO PROFILE FUNCTIONAL CONTRACT DEFINED —
DETAILED CKC RESOLUTION STATUSES AND T-A2 MAPPING DEFINED —
STRUCTURED CKC CONSUMPTION PROOF SPECIFIED —
FAIL-CLOSED BEHAVIOUR DEFINED —
QUALIFYCYCLE REMAINS UNCHANGED —
CORE CKC ONLY —
MULTI-CKC EXTENSIONS NOT OPENED —
D2-A TO D2-B TO D2-C FUNCTIONAL SLICING DEFINED —
D2-D GATED —
VERSION HASH AND CORRELATIONID TRACEABILITY DEFINED —
NO ARCHITECTURE ADOPTED —
NO IMPLEMENTATION —
NO DELIVERY —
NO D3 —
NO UI —
NO FIGMA —
NO CREATECYCLE —
NO METHOD PROMOTION

Statut: V3.1-D2 FUNCTIONAL DESIGN READY FOR MORRIS VALIDATION — ARCHITECTURE FUNCTIONAL GATE REQUIRES DISTINCT MORRIS GO — DELIVERY NOT OPENED — D3 NOT OPENED
