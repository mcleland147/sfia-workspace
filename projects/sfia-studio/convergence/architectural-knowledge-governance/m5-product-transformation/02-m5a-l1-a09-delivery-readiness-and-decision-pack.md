# AKG-M5-A — 02 · L1 / A09 Delivery Readiness & Decision Pack

| Champ | Valeur |
| --- | --- |
| Cycle | **AKG-M5-A** — L1/A09 readiness · **Critical Correction Pass C1–C4** (2026-10-23) |
| Baseline | `f088c60271722fcf678c3862ebe192da71c7c402` (`origin/main`) |
| Actif | **A09** — Bounded audit bridge (VSR/core ↔ `lib/d1/boundedAtomicAudit`) |
| Statut | **LOCAL CANDIDATE** · **H0-L1 NOT GRANTED** · corrections C1–C4 **documentaires** |
| Code Delivery | **NON AUTORISÉ** dans ce cycle / cette passe |
| Empreinte pré-correction | `e9559678f64126abd67c5416e03332a125425fce` |
| R24 | **NO PRODUCT SEMANTIC IMPACT** |

> **Non-claims :** READY FOR CRITICAL RE-REVIEW ≠ READY FOR DELIVERY · recommandation GO ≠ décision Morris · contrat extrait ≠ R-A09-01 PASS · injection ≠ activation · DET ≠ REAL · tests présents ≠ tests exécutés dans M5-A · A09 non retiré · D1 non découplé globalement après L1.

---

## 0. Matrice C1–C4 (passe corrective)

| ID | Constat initial | Correction | Source primaire | Preuve | Statut passe | Réserve |
| --- | --- | --- | --- | --- | --- | --- |
| **C1** | Nouveau port Product proposé sans résoudre `ProjectCycleAuditPort` existant ; risque de duplication | Recommander **réutilisation** de `ProjectCycleAuditPort` comme contrat append canonique ; conserver `LocalProjectCreationAuditPort` (événements distincts) ; **ne pas** promouvoir find/list au contrat commun | `projectCycleAtomicCoordinator.ts` L29–41 ; `boundedAtomicAudit.ts` L53 ; `audit.ts` L21–23 ; `localSqliteAudit.ts` | CODE VERIFIED signatures + consumers find/list = **TEST_ONLY** | **CORRECTED (doc)** | Noms/emplacement Packaging **candidates** ; H0-L1 ouvert |
| **C2** | Frontières VSR **et** core sous-spécifiées ; importBoundaries autorise encore l’audit D1 | Cartographie arêtes TYPE_ONLY/RUNTIME/TEST ; exit L1 exige **VSR + core** sans import audit D1 ; adapter D1 transitoire jusqu’à L2 | `service.ts` L14 ; `localSqliteAudit.ts` L1–5 ; `importBoundaries.test.ts` L38–40 | CODE VERIFIED | **CORRECTED (doc)** | R-A09-01 OPEN jusqu’au Delivery |
| **C3** | « BEHAVIOR PROVEN » insuffisamment qualifié (pas d’exécution M5-A) ; assertion sqlite tests trop faible | Matrice DOCUMENTED / CODE VERIFIED / COVERAGE VERIFIED / BEHAVIOR PROVEN *(historique, seulement si run primaire)* / KNOWN GAP ; sqlite inject → **COVERAGE VERIFIED** (Git Integration) | §6 | Distinction + requalification | **CORRECTED (doc)** · **C3 résiduelle fermée documentairement** | Aucune exécution test M5-A ; preuve Delivery L1 restante |
| **C4** | Qualité archi non mesurable | Grille Q1–Q10 avec PASS mesurable, preuve attendue, statut **actuel = NOT PASS** | §7 | Critères futurs | **CORRECTED (doc)** | Q* ne passent **pas** par cette passe |

---

## 1. Objectif L1 (inchangé dans l’intention)

**Débloquer** le packaging/retire futur de D1 (L2) en **découplant le contrat d’audit borné** des consommateurs Product (VSR + vertical-slice-core), sans second moteur d’audit métier, sans migration intake, sans nouvelle persistance Product.

Capacité utile : journal borné / idempotence (CAP-D1-07 / A09). **Audit ≠ autorité.**

---

## 2. Qualification code-first (signatures réelles) — C1

### 2.1 Quatre surfaces distinctes (CODE VERIFIED)

| Surface | Fichier | Contrat | Méthodes |
| --- | --- | --- | --- |
| **A — Journal atomique (phases)** | `lib/platform/t-a7/projectCycleAtomicCoordinator.ts` | `ProjectCycleAuditPort` | **`append` only** |
| **B — Store D1 concret** | `lib/d1/boundedAtomicAudit.ts` | `class BoundedAtomicAuditStore implements ProjectCycleAuditPort` | `append` + `findByIdempotencyKey` + `listByOpId` + `clearForTests` |
| **C — Audit création projet locale** | `lib/vertical-slice-core/audit.ts` | `LocalProjectCreationAuditPort` | **`append(LocalProjectCreationAuditEvent)` only** |
| **D — Adapter create→journal** | `lib/vertical-slice-core/localSqliteAudit.ts` | `BoundedSqliteLocalProjectCreationAudit implements LocalProjectCreationAuditPort` | mappe events → `store.append(...)` ; types phases/outcomes importés **depuis D1** |

### 2.2 Qui a besoin de quoi

| Consommateur | Besoin | Nature |
| --- | --- | --- |
| `projectCycleAtomicCoordinator` | `ProjectCycleAuditPort.append` | RUNTIME (si `auditStore` injecté) |
| `localProjectComposition` / facade create | `LocalProjectCreationAuditPort.append` | RUNTIME via composition |
| `BoundedSqliteLocalProjectCreationAudit` | appelle `store.append` (shape journal) | RUNTIME **si** mode sqlite + store |
| VSR `resolveAudit` | choisit noop / memory / sqlite adapter | RUNTIME wiring ; défaut **noop** |
| Tests t-a7 + `localProjectComposition` | `findByIdempotencyKey` / `listByOpId` / `clearForTests` | **TEST_ONLY** sur la classe D1 |

**Conclusion C1 :** les consommateurs Product runtime n’ont **pas** besoin de find/list dans le contrat commun. Ajouter find/list à un « port Product » serait une **duplication inutile**.

### 2.3 Comparaison d’options

| Option | Description | Pour | Contre | Verdict |
| --- | --- | --- | --- | --- |
| **A — Réutiliser `ProjectCycleAuditPort`** | Typer VSR/`localSqliteAudit` sur l’interface existante ; déplacer/réexporterer types phase/outcome **avec** ce port si packaging le exige | Zéro second contrat append ; déjà implémenté par D1 store | Packaging actuel sous `platform/t-a7` (nom historique) | **Preferred** |
| **B — Extraire port neutre minimal** | Copier/move **uniquement** le contrat append (+ types phase/outcome) hors D1 vers module neutre ; `ProjectCycleAuditPort` devient alias ou migre | Packaging pérenne si t-a7 jugé trop « campagne » | Coût move ; doit rester **un** contrat | Acceptable **si** Option A packaging insuffisant — **sans** nouvelles méthodes |
| **C — Plusieurs ports** | Nouveau port + garder les deux existants | — | Duplication si même responsabilité append journal | **Reject** sauf distinction démontrée |

**Distinction démontrée à conserver (pas duplication) :**

- `LocalProjectCreationAuditPort` = **événements métier create** (REQUESTED / DOCTRINE_RESOLVED / …) — responsabilité **distincte**.
- `ProjectCycleAuditPort` = **journal de phases atomiques** — responsabilité **distincte**.
- L’adapter D (`BoundedSqliteLocalProjectCreationAudit`) est le pont justifié entre C et A/B.

### 2.4 Recommandation canonique (candidate — non ADOPTED)

1. **Contrat append canonique du journal :** `ProjectCycleAuditPort` (Option A).
2. **Ne pas** inventer `BoundedProjectAuditStore` / module `product-audit` **pour le seul naming**.
3. **Ne pas** ajouter find/list au contrat commun.
4. Garder find/list/clearForTests sur l’**implémentation D1** (ou surface test) jusqu’à L2.
5. Packaging pérenne (candidate, à trancher au Delivery design) :
   - **Owner architectural journal :** Platform composition / Product wiring (VSR) consomme le port ; **impl D1** = adapter de persistance historique.
   - Emplacement candidat du port : rester `lib/platform/t-a7/…` **ou** déplacer vers un module neutre type `lib/platform/project-cycle-audit` (nom **illustratif**) — **pas** adopté ici.
6. VSR : `sqliteAuditStore?: ProjectCycleAuditPort` (plus le type classe D1).
7. `localSqliteAudit` : dépendre des types phase/outcome **colocated avec le port**, plus `@/lib/d1/boundedAtomicAudit`.
8. Dette temporaire : classe D1 + table `d1_atomic_audit` jusqu’à cutover L2.
9. Condition de retrait D1 (hors L1) : plus aucun consumer Product/runtime/test obligé d’importer `lib/d1` pour l’audit **après** L2 migration/retire gates.

### 2.5 Compatibilité

- Comportements noop / memory / sqlite **préservés**.
- Default **noop** (singleton `SFIA_V2_RUNTIME_AUDIT` / `resolveAudit`).
- Aucune nouvelle table Product SQLite en L1.

---

## 3. Frontières D1 / VSR / core / t-a7 — C2

### 3.1 Cartographie des arêtes (CODE VERIFIED @ tip)

| Arête | Kind | Active par défaut ? | Preuve |
| --- | --- | --- | --- |
| `vertical-slice-runtime/service.ts` → `@/lib/d1/boundedAtomicAudit` | **TYPE_ONLY** | Compile-time always | L14 `import type` |
| `service.ts` `resolveAudit(..., sqliteAuditStore)` → `BoundedSqliteLocalProjectCreationAudit` | **RUNTIME_CALL conditionnel** | **Non** (default noop) | L174–188, L758 |
| `vertical-slice-core/localSqliteAudit.ts` → D1 types + store type | **TYPE_ONLY** (+ value ctor param) | Si adapter instancié | L1–5, L43 |
| `boundedAtomicAudit.ts` → `ProjectCycleAuditPort` | TYPE + implements | N/A | L9, L53 |
| `boundedAtomicAudit.ts` → `openD1Db` | **RUNTIME_CALL** | Quand store construit | L54 |
| t-a7 coordinator → `ProjectCycleAuditPort` | interface locale | Si `auditStore` injecté | L65, append calls |
| Tests composition / t-a7 | **TEST_ONLY** inject store D1 + find/list | Tests only | listed §2.2 |
| `importBoundaries.test.ts` | Autorise actuellement références audit D1 (commente L38–40) ; **interdit** `@/lib/d1/db` | TEST_ONLY policy | L38–54 |

### 3.2 Ce que L1 doit prouver (exit technique — futur Delivery)

| # | Condition | Couches |
| --- | --- | --- |
| 1 | Aucun import `@/lib/d1/boundedAtomicAudit` (type ou value) depuis **VSR** | VSR |
| 2 | Aucun import audit D1 depuis **vertical-slice-core** (`localSqliteAudit` et réexports) | core |
| 3 | `sqliteAuditStore` / adapter typés sur **`ProjectCycleAuditPort`** (ou alias unique) | VSR + core |
| 4 | Default **noop** inchangé ; memory inchangé | composition |
| 5 | Chemin sqlite optionnel **préservé** via adapter D1 injecté | tests + option |
| 6 | **Aucune** nouvelle persistence Product pour cet audit | schema |
| 7 | `importBoundaries` **adapté** : interdire audit D1 dans VSR (+ règle core si absente) | tests |
| 8 | Compatibilité D1 : store D1 continue d’implémenter le port ; îlot D1 UI **non** touché | jusqu’à L2 |

### 3.3 Distinctions obligatoires

| Notion | Après L1 réussi | Pas après L1 |
| --- | --- | --- |
| Découplage contrat Product | **Oui** (VSR/core) | — |
| Adapter D1 transitoire | **Oui** (reste dans `lib/d1`) | — |
| Retrait / découplage global D1 | — | **Non** (L2+) |
| R-A09-01 PASS | Possible **si** gate §3.2 + tests | Pas par doc seule |

---

## 4. Scope IN / OUT Delivery L1 (requalifié)

### IN

- Brancher VSR + `localSqliteAudit` sur `ProjectCycleAuditPort` (+ types phase/outcome hors packaging D1 si move Option B).
- Adapter D1 : `BoundedAtomicAuditStore` reste l’impl.
- Tests : composition, t-a7, importBoundaries VSR **et** core.
- Préserver noop/memory/sqlite.
- Plan R24 PRR 04/06/08/09 pour le lot Delivery (pas cette passe).

### OUT

- Migration D1→OA · retire routes/UI D1 · schema Product nouveau · OPS1/REAL/FinOps/PA · renames massifs · adoption noms.

### Stops Delivery

- Besoin d’un second journal Product · dual-write · retire D1 dans le même GO · H0 absent.

---

## 5. Fichiers candidats (futur GO — inchangés dans l’esprit, contrats corrigés)

| Action | Fichier |
| --- | --- |
| Adapt | `service.ts` — type `ProjectCycleAuditPort` |
| Adapt | `localSqliteAudit.ts` — plus d’imports D1 |
| Adapt éventuel | `projectCycleAtomicCoordinator.ts` — export types phase/outcome si manquants au packaging |
| Keep as adapter | `lib/d1/boundedAtomicAudit.ts` |
| Adapt tests | `localProjectComposition.test.ts` ; `t-a7-hard-ta6-persistence-foundation.test.ts` ; `importBoundaries.test.ts` |

---

## 6. Maturité et preuves — C3

### 6.1 Légende

| Niveau | Signification |
| --- | --- |
| **DOCUMENTED** | Affirmé dans PRR/M4/docs |
| **CODE VERIFIED** | Inspecté sur tip `f088c602` dans M5-A / cette passe |
| **COVERAGE VERIFIED** | Fichiers/tests **identifiés** ; **aucune** exécution Vitest dans M5-A |
| **BEHAVIOR PROVEN (historique)** | Preuve d’**exécution** antérieure identifiable (log CI/run/SHA de résultat) — **pas** rejouée ici ; **non utilisée** pour l’assertion sqlite inject faute de run primaire facilement vérifiable |
| **KNOWN GAP** | Branche/activation/preuve insuffisante |

### 6.2 Assertions clés

| Assertion | Niveau | Source / périmètre | Limite |
| --- | --- | --- | --- |
| Import type VSR→D1 audit | CODE VERIFIED | `service.ts` L14 | — |
| Default audit = noop | CODE VERIFIED | `resolveAudit` ; `singleton.ts` `envAuditMode` | Env peut forcer sqlite **si** store aussi fourni |
| sqlite sans store → throw | CODE VERIFIED | `service.ts` L182–185 | Structure inspectée ; **non exécuté** dans M5-A |
| Store D1 implémente `ProjectCycleAuditPort` | CODE VERIFIED | `boundedAtomicAudit.ts` L53 | — |
| find/list = test helpers | CODE VERIFIED | grep consumers | Pas runtime Product |
| Suites `localProjectComposition` / t-a7 existent (chemins + assertions sqlite inject) | **COVERAGE VERIFIED** | fichiers tests listés §5 / §2.2 | Existence et intention de couverture **identifiées** ; **aucune** exécution Vitest/CI ciblée démontrée dans M5-A ni run historique primaire isolé facilement accessible → **pas** BEHAVIOR PROVEN |
| Comportement sqlite injecté *prouvé par run* | KNOWN GAP *(jusqu’à Delivery L1)* | — | Doit être **prouvé en Delivery L1** (exécution tests) |
| sqlite used en prod Studio nominal | KNOWN GAP | pas de preuve d’activation nominale | injection ≠ activation |
| Gate A09 PASS | KNOWN GAP / futur | §3.2 | Doc ≠ PASS |
| REAL / P6 / v3 | KNOWN GAP / non-claims | M4 exit | inchangé |

**Note C3 (Git Integration 2026-10-23) :** recherche d’une preuve primaire historique (log CI / run dédié) pour « sqlite injecté en tests » **non aboutie** de façon isolable dans le périmètre proportionné. Requalification **COVERAGE VERIFIED** + KNOWN GAP pour le comportement run. Aucune exécution de test dans M5-A.

### 6.3 Anti-confusion (obligatoire)

- Tests présents ≠ tests exécutés (M5-A).
- Injection possible ≠ activation nominale.
- Déterministe ≠ REAL.
- Contrat extrait ≠ retirement gate PASS.
- READY FOR RE-REVIEW ≠ READY FOR DELIVERY.
- Recommandation GO ≠ H0-L1 GRANTED.

---

## 7. Critères de qualité architecturale Q1–Q10 — C4

*Statut actuel = état **avant** implémentation L1. Cette passe documentaire **ne** les fait **pas** passer.*

| ID | Critère | Condition PASS mesurable | Preuve attendue (Delivery) | Statut actuel | Risque si non satisfait |
| --- | --- | --- | --- | --- | --- |
| **Q1** | Ownership | Owner journal = port platform/Product wiring ; owner impl historique = D1 adapter ; owner events create = vertical-slice-core | Doc Delivery + code owners paths | **NOT PASS** | Ambiguïté / double écriture |
| **Q2** | Unicité contrat | Un seul contrat append journal (`ProjectCycleAuditPort`) ; `LocalProjectCreationAuditPort` justifié distinct ; pas de 3e port append | Grep interfaces ; revue design | **NOT PASS** | Duplication C1 |
| **Q3** | Dépendances | 0 import audit D1 dans VSR **et** core | `importBoundaries` + grep CI | **NOT PASS** | Bloque L2 packaging |
| **Q4** | Compatibilité D1 | Store D1 + tests îlot D1 non régressés | Suites D1 + t-a7 sqlite inject | **NOT PASS** (non run) | Casse L2 prep |
| **Q5** | Comportements | noop/memory/sqlite sémantiques stables | Tests mode ×3 | **NOT PASS** | Régression create |
| **Q6** | Persistance | Pas de nouvelle table Truth C ; default noop ; sqlite non activé implicitement | Diff schema vide ; singleton default | **NOT PASS** (doc only) | 2e vérité / activation silencieuse |
| **Q7** | Nommage | Noms livrés = responsabilité ; pas de rename massif historique | Diff borné | **NOT PASS** | Bruit / dette |
| **Q8** | Tests | Contrat + composition + boundaries + non-reg listés et **verts** | CI Delivery | **NOT PASS** | Faux READY |
| **Q9** | Dette | Adapter D1 documenté + condition exit L2 | Note dette + R-A09 lien L2 | **NOT PASS** | Adapter permanent |
| **Q10** | Périmètre | Aucune migration/suppression D1/OA schema/OPS1/REAL dans le PR L1 | Review scope PR | **NOT PASS** | Scope creep |

---

## 8. Exit proof L1 (gate R-A09-01) — aligné C2/C4

1. Consommateurs Product (VSR + core) hors types/imports D1 audit.
2. Contrat append unique (`ProjectCycleAuditPort`) branché.
3. sqlite optionnel via adapter D1 ; default noop.
4. Tests Q5/Q8 verts (exécution **Delivery**).
5. importBoundaries adaptés (VSR + core).
6. Q1–Q10 PASS documentés dans le rapport Delivery.
7. Injection ≠ activation rappelé.

**Puis seulement** R-A09-01 → PASS technique (≠ GO L2).

---

## 9. Recommandation (requalifiée)

### **GO L1 SOUS CONDITIONS** — recommandation Cursor uniquement

**Conditions :**

1. Morris accorde **H0-L1** explicite sur le périmètre §4 IN.
2. Design Delivery adopte **C1 Option A** (réutiliser `ProjectCycleAuditPort`) ; Option B seulement si packaging t-a7 doit bouger — **sans** nouveau contrat concurrent.
3. Exit §8 + Q1–Q10 à satisfaire **dans** le lot Delivery.
4. Default noop ; pas d’activation prod sqlite.
5. Pas de L2/migration/retire dans le même GO.
6. Revue Critical de **cette** passe corrective acceptée.

**Pas STOP :** couplage localisé, contrat existant réutilisable, risque prod bas (noop).
**Pas GO inconditionnel :** H0 ouvert ; Q* NOT PASS ; aucune exécution test M5-A.

---

## 10. Gouvernance préservée

| ID | Statut |
| --- | --- |
| G0-A/B | ADOPTED |
| H7 / H8 | ADOPTED orientation / directive L4 |
| **H0-L1** | **NOT GRANTED** |
| H1–H5 | OPEN |
| H6 | NOT AUTHORIZED |
| A01–A12 | candidates |
| R-A09-01 | OPEN jusqu’au gate Delivery |

---

## 11. R24 — sync PRR future (Delivery L1)

Volumes candidats : **04**, **06**, **08**, **09**. **Aucune** sync dans cette passe.

---

## 12. Traçabilité

| Source | Usage |
| --- | --- |
| M4 `05`/`06`/`09` §13 / `03` R-A09-01 | Gates |
| Code tip `f088c602` | C1–C2 CODE VERIFIED |
| Blueprint [01](./01-m5a-product-architecture-convergence-blueprint.md) | Alignement port / L1→L2 |

---

*Fin — `02` M5-A L1/A09 — Correction Pass C1–C4 — LOCAL CANDIDATE — recommandation **GO L1 SOUS CONDITIONS**.*
