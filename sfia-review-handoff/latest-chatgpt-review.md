# Review pack Full — SFIA Studio V3.1-D2-B CKC resolver cadrage

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 21:40:13 CEST (+0200) |
| Rôle Cursor | Exécution cycle 1 — cadrage repo-informed D2-B |
| Cycle | 1 — Cadrage |
| Sous-type | Cadrage future Delivery V3.1-D2-B CKC Resolver |
| Profil | Standard |
| Typologie | DOC |
| CKC | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` — candidate v0.1.0 — experimental — aucune autorité |
| Template | `prompts/templates/sfia-cycle-execution-template.md` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Ref canonique | origin/main `bb685f1205b33f887ee27b42ac918c96386a6e33` |

## Gate Morris

```text
GO CADRAGE SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW VALIDATED D2 BACKLOG, ADOPTED FUNCTIONAL AND TECHNICAL ARCHITECTURE, D2-A CONTRACTS AND CKC SOURCE MODEL —
CONFIRM D2-B STORIES, INPUTS, OUTPUTS, FALLBACK RULES, EVIDENCE, ERRORS, TEST STRATEGY AND FILE SCOPE —
NO IMPLEMENTATION —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

GO : **2026-08-02 21:22 CEST (+0200)**

## Handoff source

Tip `4b618cff5a13d2e08fb4db2fed7ea76542e703c9` · blob `8d4515f21bac12b336aa2e7012d24c0f93d3c34d`
Archive : `.tmp-sfia-review/v3-1-d2-a-final-post-merge-chatgpt-review-preserved.md`

## Git Truth

```
DATE=2026-08-02 21:40:13 CEST (+0200)
BRANCH=post-merge/sfia-studio-v3-1-d2-a-documentary-closure-final-status
HEAD=664486753784282ae755e5b1ee2b91a0e805c8c8
main=bb685f1205b33f887ee27b42ac918c96386a6e33
origin/main=bb685f1205b33f887ee27b42ac918c96386a6e33
main_div=0	0
final_L/R=664486753784282ae755e5b1ee2b91a0e805c8c8/664486753784282ae755e5b1ee2b91a0e805c8c8
post_L/R=99e55d4ff05af66445f2522f85910faebceaded4/99e55d4ff05af66445f2522f85910faebceaded4
del_L/R=f048a9c25e478bd7bf4cffb6617f6b085c8cf689/f048a9c25e478bd7bf4cffb6617f6b085c8cf689
local_d2b=
remote_d2b=
staged=0
wt=0
handoff=4b618cff5a13d2e08fb4db2fed7ea76542e703c9
handoff_blob=8d4515f21bac12b336aa2e7012d24c0f93d3c34d

```

## Sources consultées

Docs D2 15–19 · 08 · framing README · D2-A (`ckcQualificationContracts`, `catalogProjection`, `cycleTypeCatalog`, `catalogFingerprint`, `index`) · T-A2 (`types`, `errors`, `ckcResolver`, `cycleAudit`, `resolveCycleKnowledgeContract`, `qualifyCycle`, `memoryCkcResolver`) · CKC synthetic map + pilots 01–04 · matrice routing.

## Décisions FA/TA non rouvertes

FA-C · PORT-B · CKC-S-A · PROOF-A · ERR-B · AUDIT-A · TYPE-B · HASH-A · A→B→C · D2-D gated · executionAuthority=false · Core unique · fallback substitution · no Markdown runtime · QualifyCycle/CreateCycle inchangés · Memory non autoritatif.

## Matrice stories (complet)

# Matrice stories BL-D2-B-01…06

Date : 2026-08-02 21:40:13 CEST (+0200)
Ref : origin/main `bb685f1205b33f887ee27b42ac918c96386a6e33`
Sources : doc 19 §§O–P · docs 16–18 · D2-A contracts

## Séquencement confirmé

`D2-A (fait) → B-01 → B-02 → B-03 → B-04 → B-05 → B-06 → D2-C (fermé)`

Ordre alternatif (B-04 // B-03) **non adopté** (§K doc 19). Profil Delivery candidat : **Critical**.

| Story | Résultat | Préconditions | Dépendances | In | Out | Files candidats | Tests clés | Statut cadrage |
|-------|----------|---------------|-------------|----|-----|-----------------|------------|----------------|
| **B-01** Manifest CKC typé | Registre statique allowlisté cohérent D1 | A-04 / catalogue stable | A | `ckcReferenceManifest.ts` + tests | Markdown · path arbitraire · Memory authority · enrichir D1 | `infrastructure/ckcReferenceManifest.ts` | primaries · fallbacks · unknown · level incoherent · orphan | **CONFIRMED** |
| **B-02** Port D2 spécialisé | `CkcQualificationResolverPort` | B-01 · projection A | B-01 · A-01 | port + types résolution | modifier `CkcResolverPort` · QC · CreateCycle | `ports/ckcQualificationResolver.ts` | contrat entrée/sortie · non-régression port historique | **CONFIRMED** |
| **B-03** Resolver Core | detailed/synthetic/fallback fail-closed | B-01 · B-02 | B-01 · B-02 | adapter infra | multi-CKC · Memory authority · QC · randomBytes métier | `infrastructure/ckcQualificationResolver*.ts` (nom sémantique) | detailed · synthetic · fallback · double KO · unauthorized · authority=true · extension | **CONFIRMED** |
| **B-04** Erreurs + T-A2 | codes doc 16 · adaptateur ERR-B | B-02 | B-02 (intégration après B-03) | `ckcQualificationErrors.ts` | ERR-C · mass CycleDetailCode | `domain/ckcQualificationErrors.ts` | mapping codes · messages sûrs · no leak | **CONFIRMED** |
| **B-05** Proof Builder pur | preuve §P · consumed iff resolved_* | B-03 · B-04 | B-03 · B-04 | `ckcConsumptionProof.ts` | I/O · profil · orch | `domain/ckcConsumptionProof.ts` | nominal ×3 · mismatch · incomplete · failure ⇒ ¬consumed | **CONFIRMED** |
| **B-06** Events + validation | audit additif · suite B · checklist sortie | B-01…05 | B-01…05 | events + tests | factory CreateCycle · orch D2-C | `ports/cycleAudit.ts` (additif) · `__tests__/oa/cycle/*d2b*` | started/succeeded/failed/fallback/validated/rejected · `oa.ckc.resolved` | **CONFIRMED** |

## Indépendance / testabilité

- B-01 testable sans B-03 (cohérence catalogue↔manifest).
- B-02 testable par contrat mocké.
- B-03–B-05 forment le cœur fail-closed ; B-06 clôture et non-régression.
- Aucune story n'exige D2-C/D2-D/D3 pour être testable.


## Contrat D2-B (complet)

# Contrat Delivery candidat — V3.1-D2-B CKC Resolution and Consumption

Date : 2026-08-02 21:40:13 CEST (+0200)
Statut : **résultat de cadrage temporaire** — **pas** décision adoptée — **pas** autorisation Delivery.

## Intention

Résoudre le Core CKC à partir d'une `ValidatedCycleTypeProjection` D2-A, produire un statut D2 détaillé + projection T-A2 additive, et une preuve de consommation pure fail-closed — **sans** QualifyCycle, CreateCycle, UI, D2-C/D3.

## Préconditions

- D2-A intégré sur main (`bb685f1…` contient contrats + projection)
- Catalogue D1 stable / fingerprint vert
- FA-C · PORT-B · CKC-S-A · PROOF-A · ERR-B · AUDIT-A · TYPE-B adoptés
- GO Delivery Morris **distinct** (non consommé)

## Entrées

### Principale — `ValidatedCycleTypeProjection`

`cycleTypeId` · `label` · `shortDescription` · `lifecycleStatus` · `ckc` · `catalogVersion` · `catalogHash` · `correlationId`

### Mapping `ckc` (D1)

`mandatory=true` · `primaryLevel` · `primaryReference` · `fallbackPolicy` (`synthetic_map`|`none`) · `fallbackReference?` · `executionAuthority=false` · `doctrineStatus=method-candidate` · `unavailableBehavior=fail-closed`

### Autres

- `resolvedAt` : string ISO produite via **ClockPort** à la frontière adaptateur/use-case, injectée dans le domaine pur
- manifest CKC typé (B-01)
- `CycleAuditPort` pour émissions B-06 (adaptateur)

### Interdits en entrée B

six signaux · objective/scope · requestedProfile · profil recommandé · appel QualifyCycle

## Sorties

### `CkcQualificationResolution` (candidat)

statut D2 · level/status/source T-A2 · expectedPrimaryReference · usedReference? · fallbackUsed · fallbackReference? · doctrineStatus · executionAuthority=false · catalogVersion · catalogHash · correlationId · resolvedAt · exploitable · disclosures · erreur structurée si échec

### `CkcConsumptionProof` (candidat, doc 16 §P)

champs minimum §P · `consumed=true` **uniquement** si resolved_detailed|synthetic|fallback_synthetic + invariants · immutable · pas de texte CKC brut

### Ne pas produire

recommendedProfile · rationale QC · D2 Success/Failure final D3 · CycleInstance · persistance · mutation

## Invariants

- `executionAuthority=false` toujours
- `doctrineStatus=method-candidate`
- fallback = substitution
- mono-CKC Core
- fail-closed avant QualifyCycle
- `consumed=true` jamais après échec
- statut D2 conservé (perte info T-A2 sur fallback)
- déterminisme hors timestamp injecté

## Source model / priorité / fallback

Voir `v3-1-d2-b-ckc-resolver-source-model.md`.

## Statuts D2

`resolved_detailed` · `resolved_synthetic` · `resolved_fallback_synthetic` · `unresolved_invalid_mapping` · `unresolved_unavailable` · `unresolved_catalog_incompatible` · `unresolved_cycle_not_selectable`

## Adaptation T-A2

Additive uniquement — enums `CkcLevel`/`CkcStatus`/`CkcSource` **non** étendus. Mapping doc 16 §O.

## Preuve / erreurs / événements

Voir matrices dédiées. Events additifs AUDIT-A ; non-régression `oa.ckc.resolved`.

## Dépendances

- D2-A projection + fingerprint + catalogue
- ClockPort existant
- CycleAuditPort (extension additive)
- **Non-dépendances :** QualifyCycle · CreateCycle · D2-C · D2-D · D3 · Markdown I/O · nouveaux packages

## Hors périmètre

implémentation hors GO Delivery · UI · Figma · CreateCycle · multi-CKC · D2-D · API/Server Actions · promotion méthode · parsing Markdown · Memory comme autorité

## Fichiers candidats / protégés

Voir `v3-1-d2-b-ckc-resolver-file-scope.md`.

## Stratégie de tests

Voir `v3-1-d2-b-ckc-resolver-test-strategy.md`.

## Stop conditions Delivery

- besoin parsing Markdown / path arbitraire
- besoin modifier catalogue D1 ou port historique fonctionnellement
- besoin appeler QualifyCycle
- preuve non séparable de D2-C
- changement cassant enums T-A2
- dépendance/package/CI nouvelle sans décision
- rouvrir FA/TA

## Risques

| Risque | Mitigation |
|--------|------------|
| Confusion PORT historique vs PORT-B | tests non-régression + isolation |
| Perte primary/fallback en T-A2 | statut D2 obligatoire dans résolution/preuve |
| Boucle récursive doc | pas de doc living versionnée sauf preuve |
| Surface Critical large | un seul cycle ordonné B-01…06 + checklist B-06 |
| Alias codes stale | A garde ses codes ; B ne renomme pas |

## Décisions couvertes (non rouvertes)

FA-C · D2-02=B · PORT-B · CKC-S-A · PROOF-A · ERR-B · AUDIT-A · TYPE-B · HASH-A · slicing A→B→C · D2-D gated · executionAuthority=false · Core unique · fallback substitution · no Markdown runtime · QualifyCycle inchangé

## Ambiguïtés restantes (non bloquantes)

1. Littéraux exacts enum `availability` du manifest
2. Noms littéraux TS des events additifs
3. Port B sync Result **recommandé** vs `Promise` pour symétrie historique
4. Alias `CATALOG_STALE` (doc 16) vs `CATALOG_FINGERPRINT_STALE` (A) — hors B si projection validée
5. Nom exact fichier adapter B-03

## Profil Delivery candidat

**Critical** (backlog §L/Z) — **non consommé** par ce cadrage.

## Gate Delivery candidat

```text
GO DELIVERY SFIA STUDIO V3.1-D2-B CKC RESOLVER —
APPLY ADOPTED D2 FUNCTIONAL AND TECHNICAL ARCHITECTURE AND CONFIRMED BL-D2-B-01…06 —
CONSUME VALIDATED D2-A CATALOG PROJECTION —
IMPLEMENT TYPED CKC MANIFEST, SPECIALIZED D2 RESOLVER PORT, FAIL-CLOSED DETAILED/SYNTHETIC/FALLBACK RESOLUTION, BOUNDED T-A2 ADAPTATION, PURE CONSUMPTION PROOF, D2 ERRORS, MINIMAL EVENTS AND TESTS —
USE CONFIRMED FILE SCOPE —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION —
NO COMMIT —
NO PUSH —
NO PR
```


# Réponses aux questions de cadrage (depuis Git)

1. **Stories indépendantes/séquencées ?** Oui — ordre B-01…06 adopté ; testables sans D2-C.
2. **D2-A expose les données ?** Oui — `ValidatedCycleTypeProjection` + mapping CKC complets exportés.
3. **Manifest entièrement statique ?** Oui — CKC-S-A typé, allowlist D1, pas de FS runtime.
4. **Disponibilité définie ?** Oui via flag manifest statique (challenge clos sans I/O).
5. **Port async ou sync ?** Domaine sync pur **recommandé** ; historique async non imposé à PORT-B.
6. **resolvedAt ?** ClockPort injecté à la frontière ; domaine reçoit string ISO.
7. **Types partagés vs locaux ?** Projection A partagée ; résolution/preuve/erreurs B en fichiers dédiés.
8. **T-A2 additive ?** Oui — mapping §O sans nouveaux enums.
9. **Proof pur/séparé ?** Oui — PROOF-A confirmé.
10. **Events sans surcharge ?** Oui — AUDIT-A additif ; non-régression `oa.ckc.resolved`.
11. **Périmètre minimal ?** Oui — créations listées + 3 fichiers additifs bornés.
12. **Dépendance D2-C ?** Non pour B ; QC/signaux hors B.
13. **Décision structurelle non couverte ?** Non — écarts doc15 vs 16 tranchés par **16** ; pas de réouverture FA/TA.
14. **Delivery Critical bornée possible ?** Oui — un cycle B-01…06.
15. **Un vs plusieurs incréments ?** **Un cycle** plus simple ; multi-incréments = plus de dette d'intégration. Observation seulement — slicing A→B→C inchangé.


## Source model (complet)

# Source model CKC — D2-B

Date : 2026-08-02 21:40:13 CEST (+0200)

## Sources autorisées (allowlist)

### Detailed

- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
- `…/pilots/02-conception-fonctionnelle.md`
- `…/pilots/03-architecture-technique.md`
- `…/pilots/04-qa-validation.md`

### Synthetic

- `…/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`

## Manifest CKC-S-A (adopté TA-04)

Champs candidats par entrée :

| Champ | Rôle |
|-------|------|
| `reference` | path Git relatif (= `primaryReference` / `fallbackReference` D1) |
| `level` | `detailed` \| `synthetic` |
| `version` | version déclarée du contrat |
| `status` | statut documentaire (ex. method-candidate) |
| `source` | provenance typée (`repository_candidate` / `intra_v3_synthetic`) |
| `availability` | **flag statique** (voir challenge) |

Règles :

- références autorisées **dérivent** du catalogue D1 (toutes primary + fallback) ;
- manifest **décrit** ; catalogue **autorise** ;
- aucune découverte FS / glob / chemin utilisateur ;
- aucun parsing Markdown runtime ;
- aucun chargement du contenu brut dans le résultat ;
- paths Git = provenance uniquement, **non ouverts** ;
- MemoryCkcResolver **non** autoritatif.

## Challenge disponibilité — conclusion

| Terme | Définition cadrage (statique) |
|-------|-------------------------------|
| **présente** | entrée existante dans le manifest pour la référence |
| **disponible** | `availability=available` (ou équivalent) **dans le manifest** — pas un check FS |
| **valide** | présente + disponible + `level` cohérent avec mapping D1 + doctrine/authority conformes |
| **version compatible** | champ version manifest compatible avec la règle de version retenue en Delivery (déclarative) |
| **désactivée / indisponible** | `availability≠available` → traite comme source KO pour fail-closed / fallback |

**Aucune I/O runtime requise.** L'option la plus simple (flag manifest) est **compatible CKC-S-A** et **suffisante** pour Delivery.

Ambiguïté restante **non bloquante** : littéraux exacts du enum `availability` (Delivery choisit sous CKC-S-A).

## Priorité detailed / synthetic / fallback (doc 16 §N)

### primaryLevel=detailed

1. detailed valide → `resolved_detailed` (`fallbackUsed=false`)
2. sinon fallback synthetic valide → `resolved_fallback_synthetic` (`fallbackUsed=true`)
3. sinon → `unresolved_unavailable` / codes associés

### primaryLevel=synthetic

1. synthetic primaire valide → `resolved_synthetic`
2. sinon → `unresolved_unavailable` / `CKC_SYNTHETIC_INVALID`

Fallback = **substitution**, jamais addition. Mono-CKC Core. Pas de combinaison detailed+synthetic simultanée.

## Mapping vocabulaire fallback

| D1 / D2-A | T-A2 `CkcResolution.fallbackPolicy` |
|-----------|-------------------------------------|
| `synthetic_map` | `intra_v3_only` (quand fallback déclaré) |
| `none` | `none` |


## Matrice erreurs (complet)

# Matrice d'erreurs D2-B

Date : 2026-08-02 21:40:13 CEST (+0200)
Autorité codes : **doc 16 §S** (adopté). Ne pas inventer de code absent.

## Codes catalogue — produits par D2-A (non redéfinis en B)

| Code D2-A (code) | Blocking | Retryable | Notes |
|------------------|----------|-----------|-------|
| `CATALOG_CORRELATION_ID_REQUIRED` | true | recoverable | avant B |
| `CATALOG_VERSION_INCOMPATIBLE` | true | oui | doc 16 même nom |
| `CATALOG_FINGERPRINT_STALE` | true | oui | doc 16 table dit `CATALOG_STALE` — **alias observation** : B reçoit projection déjà validée ; ne pas renommer A |
| `CYCLE_TYPE_UNKNOWN` | true | non* | A |
| `CYCLE_TYPE_NOT_SELECTABLE` | true | non* | A |
| `CYCLE_TYPE_MAPPING_INVALID` | true | non | A |

## Codes D2-B — doc 16 §S (à typer en B-04)

| Cas | Statut D2 | Code | Blocking | Retryable | Recoverable | QualifyCycle |
|-----|-----------|------|----------|-----------|-------------|--------------|
| mapping absent/incohérent | `unresolved_invalid_mapping` | `CKC_MAPPING_INVALID` | oui | non | non | **non** |
| detailed+fallback KO | `unresolved_unavailable` | `CKC_UNAVAILABLE` | oui | non | non | **non** |
| synthetic primaire KO | `unresolved_unavailable` | `CKC_SYNTHETIC_INVALID` | oui | non | non | **non** |
| detailed KO + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | non | — | — | oui (+ disclosure) *D2-C* |
| résolution incohérente / preuve mismatch | `unresolved_*` | `CKC_RESOLUTION_INCOHERENT` | oui | non | non | **non** |
| `executionAuthority≠false` | — | `CKC_EXECUTION_AUTHORITY_FORBIDDEN` | oui | non | non | **non** |
| erreur interne | — | `D2_INTERNAL_ERROR` | oui | limité | limité | **non** |

## Codes doc 16 hors cœur B (ne pas implémenter comme comportement bridge B)

| Code | Owner | Note |
|------|-------|------|
| `CYCLE_TYPE_REQUIRED` / `CYCLE_TYPE_INVALID` | entrée amont | A/orchestration ; B reçoit projection validée |
| `CATALOG_VERSION_INCOMPATIBLE` / stale | A | avant B |
| `SIGNALS_INCOMPLETE` | **D2-C** | après preuve |
| `CKC_FALLBACK_USED` | disclosure B → consommé C | info, pas erreur bloquante |

## Noms listés dans le GO mais absents de doc 16

| Nom GO | Traitement cadrage |
|--------|-------------------|
| `CKC_EXECUTION_AUTHORITY_INVALID` | **Utiliser** `CKC_EXECUTION_AUTHORITY_FORBIDDEN` (doc 16) |
| `CKC_DOCTRINE_STATUS_INVALID` | **Non inventé** — couvrir via `CKC_RESOLUTION_INCOHERENT` / rejet preuve |
| `CKC_SOURCE_INVALID` | **Non inventé** — allowlist/manifest → `CKC_UNAVAILABLE` ou `CKC_RESOLUTION_INCOHERENT` |
| `CKC_CONSUMPTION_PROOF_INVALID` | **Non inventé** — échec Proof Builder → `CKC_RESOLUTION_INCOHERENT` (ou erreur locale preuve mappée idem) |

## Adaptation T-A2 `CycleDetailCode` (sans élargir enums)

| Code D2 | Detail T-A2 candidat |
|---------|----------------------|
| `CYCLE_TYPE_*` | `CYCLE_INVALID` |
| `CKC_*` (sauf FALLBACK_USED) | `CKC_UNAVAILABLE` |
| catalogue version/stale | `CONTEXT_STALE` |
| `D2_INTERNAL_ERROR` | `PERSISTENCE_FAILURE` |
| `CKC_FALLBACK_USED` | disclosure only |


## Stratégie de tests (complet)

# Stratégie de tests — future Delivery D2-B

Date : 2026-08-02 21:40:13 CEST (+0200)
**Aucun test exécuté dans ce cadrage.**

## 1. Manifest (B-01)

- toutes primary D1 allowlistées
- tous fallbacks D1 allowlistés
- référence inconnue
- niveau incohérent vs mapping
- `availability≠available`
- entrée orpheline documentée
- aucun Markdown/path arbitraire importable

## 2. Port (B-02)

- projection D2-A obligatoire
- correlationId requis
- sortie résolution D2 + projection T-A2
- `CkcResolverPort` historique inchangé (compile + smoke)
- aucun import QualifyCycle/CreateCycle

## 3. Resolver (B-03)

- `resolved_detailed`
- `resolved_synthetic`
- `resolved_fallback_synthetic`
- detailed KO + fallback KO
- synthetic primaire KO
- référence non autorisée
- doctrine ≠ method-candidate
- `executionAuthority=true`
- extension implicite multi-CKC
- déterminisme (hors timestamp injecté)
- aucun `randomBytes` métier

## 4. Erreurs / T-A2 (B-04)

- mapping codes doc 16
- conservation distinction fallback (statut D2)
- messages sûrs
- pas de fuite chemin/contenu
- pas de changement cassant enums T-A2

## 5. Proof (B-05)

- preuve nominale ×3 resolved_*
- champ manquant / mismatch ids/refs/statut/hash
- `consumed≠true` après échec
- objet immutable
- aucune I/O

## 6. Événements (B-06)

- started / succeeded / failed
- fallback used
- consumption validated / rejected
- non-régression `oa.ckc.resolved`

## 7. Régression

- suites D2-A Delivery + QA
- catalogue D1
- `ResolveCycleKnowledgeContract` historique
- `MemoryCkcResolver` historique
- QualifyCycle
- suite `oa/cycle`
- typecheck / lint / build / gouvernance

## Commandes Delivery (hors cadrage)

À exécuter uniquement sous GO Delivery distinct — non listées comme exécutées ici.


## File scope (complet)

# File scope — future Delivery D2-B

Date : 2026-08-02 21:40:13 CEST (+0200)

## Créations candidates

| Path | Story |
|------|-------|
| `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts` | B-01 |
| `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts` | B-02 |
| `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts` *(nom sémantique recommandé ; éviter `filesystem*`)* | B-03 |
| `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts` | B-04 |
| `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts` | B-05 |
| `projects/sfia-studio/app/__tests__/oa/cycle/*d2b*` / dedicated B tests | B-01…06 |

## Modifications additives candidates

| Path | Nature |
|------|--------|
| `domain/ckcQualificationContracts.ts` | **minimal** — types partagés A/B seulement si nécessaire ; préférer fichiers sémantiques B |
| `ports/cycleAudit.ts` | union `CycleAuditEvent` additive |
| `index.ts` | exports publics strictement nécessaires |

## Challenge périmètre — recommandation

1. Types résolution/preuve/erreurs B → **fichiers dédiés** (évite fourre-tout `ckcQualificationContracts.ts`).
2. `ckcQualificationContracts.ts` reste le lieu des contrats **projection A** ; enrichir seulement si un type vraiment partagé A↔B l'exige.
3. Pas de factory COMP-B complète avant D2-C.
4. Pas de modification documentaire versionnée 15–19 pendant Delivery sauf preuve.
5. Adapter sync pur + éventuel thin async wrapper **non requis** si port sync adopté.

## Fichiers protégés (sauf nouvelle preuve + gate)

- `domain/cycleTypeCatalog.ts`
- `domain/catalogFingerprint.ts`
- `domain/catalogProjection.ts`
- `ports/ckcResolver.ts`
- `application/resolveCycleKnowledgeContract.ts`
- `application/qualifyCycle.ts`
- `application/createCycle.ts`
- `infrastructure/memoryCkcResolver.ts`
- `domain/types.ts` / `qualification.ts` (enums T-A2)
- package.json / lockfiles / tsconfig / vitest / Next / workflows
- `method/**` / `prompts/**`
- UI / routes / Server Actions
- docs D2 15–19
- rapports historiques D2-A

## Granularité Delivery

| Option | Avantages | Inconvénients |
|--------|-----------|---------------|
| **Un cycle Critical B-01…06** | slicing adopté · une intégration · une preuve de sortie | surface large mais bornée |
| Plusieurs incréments Git B | PRs plus petites | dette d'intégration · risques d'ordre · plus de gates |

**Recommandation cadrage :** un **seul** GO Delivery Critical couvrant B-01…06 dans l'ordre adopté.
Ne change pas A→B→C. Ne crée pas la branche ici.


## Ambiguïtés / risques / stop conditions

Ambiguïtés restantes **non bloquantes** listées dans le contrat.
Stop conditions Delivery listées dans le contrat — **aucune rencontrée** pour ce cadrage.

## Profil Delivery candidat

Critical — non consommé.

## Absence de mutation projet

Aucun fichier versionné · aucune branche D2-B · aucun commit/push/PR projet · handoff seul autorisé.

## Gate suivant candidat (ne pas exécuter)

```text
GO DELIVERY SFIA STUDIO V3.1-D2-B CKC RESOLVER —
APPLY ADOPTED D2 FUNCTIONAL AND TECHNICAL ARCHITECTURE AND CONFIRMED BL-D2-B-01…06 —
CONSUME VALIDATED D2-A CATALOG PROJECTION —
IMPLEMENT TYPED CKC MANIFEST, SPECIALIZED D2 RESOLVER PORT, FAIL-CLOSED DETAILED/SYNTHETIC/FALLBACK RESOLUTION, BOUNDED T-A2 ADAPTATION, PURE CONSUMPTION PROOF, D2 ERRORS, MINIMAL EVENTS AND TESTS —
USE CONFIRMED FILE SCOPE —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION —
NO COMMIT —
NO PUSH —
NO PR
```

## Verdict

```text
V3.1-D2-B CKC RESOLVER CADRAGE COMPLETE —
BL-D2-B-01…06 CONFIRMED —
D2-A INPUT CONTRACT SUFFICIENT —
CKC SOURCE MODEL AND FALLBACK RULES CONFIRMED —
FAIL-CLOSED RESOLUTION CONTRACT CONFIRMED —
T-A2 ADAPTATION BOUNDED AND ADDITIVE —
CONSUMPTION PROOF CONTRACT CONFIRMED —
ERROR EVENT TEST AND FILE SCOPE CONFIRMED —
FUTURE DELIVERY PROFILE CANDIDATE CRITICAL —
READY FOR DISTINCT MORRIS DELIVERY GATE —
NO IMPLEMENTATION —
NO PROJECT MUTATION —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```
