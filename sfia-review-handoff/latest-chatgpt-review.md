# SFIA Studio — AKG-M5 / L2-D0 — Documentary Git Integration

**Date / heure:** 2026-10-23 23:55 Europe/Paris (CEST)
**Cycle:** 13 — PR Readiness
**Profil:** Critical
**Typologie:** DOC ONLY
**GO Morris:** AKG-M5 / L2-D0 — DOCUMENTARY GIT INTEGRATION — **CONSUMED**
**NON autorisé / NON effectué:** merge · Delivery L2 · Product · schéma · migration · cutover · freeze · retrait D1 · Roadmap/PRR/Doctrine · v3/REAL · force push

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` **et** inspecter PR Draft [#611](https://github.com/mcleland147/sfia-workspace/pull/611) (commits, diff mono-fichier, base/head, CI). PR Review ≠ GO merge ≠ GO Delivery.

---

## 1. Verdict

**L2-D0 DOCUMENTARY GIT INTEGRATION COMPLETE — DRAFT PR OPEN — READY FOR CHATGPT CRITICAL PR REVIEW — NOT MERGED — DELIVERY L2 NOT AUTHORIZED**

**CI PENDING — MERGE NOT READY** (état observé au moment de publication du pack ; ne pas inventer SUCCESS).

---

## 2. GO Morris consommé

Documentary Git Integration borné au fichier **04** uniquement : commit + push branche + Draft PR + handoff L3.

---

## 3. Git Truth initial / final

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0` |
| Branche | `docs/akg-m5-l2-d0-decision-readiness` |
| Base / `origin/main` | `94c7a30d253396cba71f4c4938a1a0671fc0801c` — **ALIGNED** (pas d’avance main) |
| HEAD commit | `71f0674297f42759e2a2424c048b0cdce9e1dc60` |
| Remote branch SHA | `71f0674297f42759e2a2424c048b0cdce9e1dc60` — **MATCH** |
| Blob fichier 04 | `b7ad4b74f6a9041581986f4456fd7d750bcf3f3f` |
| P6 dirty | **non touché** |
| Handoff CORR-01 entrée | `b8e74ee1613ef83212964cb4aac656499a048e81` |

---

## 4. Sources vérifiées

Processus Cycle 13 / template · Build Doctrine · Roadmap (**lu non modifié**) · C1 · M5 01/02/03 · PRR 04/06/08/09 · doctrine 26/30–37 · FULL handoff CORR-01.

---

## 5. Référence CORR-01 approuvée

Tip handoff CORR-01 `b8e74ee1…` · Critical Re-review PASS · CR-D0-01/02/03 CLOSED documentairement.

Fidélité : contenu décisionnel aligné ; écart historique = whitespace trailing + **métadonnées lifecycle minimales** pour GI (déclarées §9).

---

## 6. Contrôle de fidélité document 04

| Check | Résultat |
|---|---|
| CR-D0-01/02/03 CLOSED doc | PASS |
| M-01…M-08 | PASS |
| D1–D9 NOT GLOBALLY ADOPTED | PASS |
| H1 archive-only · hold ACTIVE | PASS |
| H4 / R-VOL OPEN · prod UNKNOWN | PASS |
| R-CUT NOT PROVEN | PASS |
| D5 non implémenté · post-commit reconnu · Q5.1–Q5.7 | PASS |
| L2-D1 non destructif · L2-D2 env-scoped | PASS |
| Dual-write FORBIDDEN · v3 NON ADOPTED | PASS |

---

## 7. Document 04 — CONTENU INTÉGRAL (publié sur branche)

```markdown
# AKG-M5 / L2-D0 — Decision & Delivery Readiness Record

| Champ | Valeur |
| --- | --- |
| Jalon | **AKG-M5 — Product Transformation** / **L2-D0** Decision Formalization & Delivery Readiness |
| Cycle | **6 — Architecture technique** |
| Profil | **Critical** |
| Typologie | **DOC / EVOL** (documentary candidate) |
| Autorité | **Morris — gouvernance de construction SFIA Studio** |
| GO consommé (initial) | **L2-D0 DECISION FORMALIZATION & DELIVERY READINESS** (documentaire) |
| GO consommé (correction) | **L2-D0 / CORR-01 — DOCUMENTARY CORRECTION GRANTED** (CR-D0-01/02/03) |
| GO consommé (intégration) | **L2-D0 — DOCUMENTARY GIT INTEGRATION** (commit / push / Draft PR — **pas** merge) |
| Date locale | **2026-10-23** (Europe/Paris) · CORR-01 même jour · GI Cycle 13 |
| Baseline Git | `origin/main` = `94c7a30d253396cba71f4c4938a1a0671fc0801c` |
| Handoff entrée CORR-01 | tip `b8e74ee1613ef83212964cb4aac656499a048e81` |
| Handoff entrée L2-D0 | tip `9f9f212f7632f7967f30d94e92b6c1fe1863be5e` |
| Handoff entrée L2-Q1 | tip `aa89c20a047dea6500700db0c9a11c43b702912c` · FULL `9f259c3dd04fd93fe8aa854690c2aa7f58c3d48f` |
| Statut de ce record | **DOCUMENTARY CANDIDATE — ON BRANCH / DRAFT PR — NOT MERGED — NOT INTEGRATED ON MAIN** |
| Statut historique (CORR-01) | *LOCAL — NOT INTEGRATED ON MAIN* (pré-commit untracked — **superseded as lifecycle label**) |
| Impact runtime | **NO PRODUCT SEMANTIC IMPACT** (R24) |
| Delivery L2 | **NOT AUTHORIZED** par ce document |

> **Frontière :** ce record formalise des orientations Morris déjà exprimées en conversation, confronte les preuves L2-Q0/Q1, et prépare un contrat Delivery candidat. Il **n’adopte pas** automatiquement D1–D9, **n’autorise pas** Delivery, cutover, migration, freeze writers, retrait D1, ni Git Integration projet. Ce n’est **pas** une seconde PRR as-implemented.

### Journal CORR-01 (Critical Documentary Correction)

| ID | Réserve ChatGPT | Correction documentaire | Statut CORR-01 |
| --- | --- | --- | --- |
| **CR-D0-01** | Atomicité journal OA / D5 | §10 réécrit : frontière txn AS-IS, interdiction faux échec post-commit, oracles Q5.1–Q5.7 ; D5 **non** implémenté | **CLOSED documentairement** |
| **CR-D0-02** | H4 avant cutover L2-D2 | §08/§11/§13 : couverture **par environnement basculé** ; policy min ≠ preuve globale ; prod UNKNOWN ≠ zéro | **CLOSED documentairement** |
| **CR-D0-03** | Statuts décisions / niveaux preuve | §05/§06/§14 : « consigné candidat / Git pending » ; TEST PRESENT ≠ COVERAGE VERIFIED | **CLOSED documentairement** |

---

## 00. Métadonnées, baseline Git et autorisation Morris

| Item | Valeur |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| Branche documentaire locale | `docs/akg-m5-l2-d0-decision-readiness` @ `94c7a30d` (= `origin/main`) — **locale only** (absente du remote GitHub) |
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0` — **P6 dirty non touché** |
| Autorisé CORR-01 | Modifier **ce** fichier · Review Pack FULL · handoff L3 borné |
| Non autorisé / non effectué | Code Product · tests Product · schéma · migration · cutover · Roadmap/Doctrine/PRR · commit/push/PR/merge projet · L2 Delivery · L3/L4/L6 start · v3/REAL/SHADOW |

**L1/A09 :** PR #609 + #610 **MERGED / POST-MERGE VERIFIED**.
**M5-A :** **CLOSED BY MORRIS** (périmètre documentaire).
**AKG-M5 :** **GLOBAL OPEN**.
**L2-Q0 / L2-Q1 :** COMPLETE · Critical Review **PASS WITH GOVERNED RESERVES**.
**L2-D0 initial :** COMPLETE documentaire · réserves CR-D0-01/02/03 → **CORR-01**.

---

## 01. Objet, scope, hors scope

### Objet

Produire (puis corriger sous CORR-01) le **Decision & Delivery Readiness Record** L2 permettant de préparer le **premier lot Delivery L2** sans relancer les investigations Q0/Q1.

### Scope

- Formalisation des orientations Morris (conversation) vs recommandations vs gates.
- Registre D1–D9 avec statuts réels (≠ ADOPTED global).
- H1 / H4 / R-CUT-01 : conditions, exit proofs, stops.
- Contrat candidat L2-D1…D4/L6 + challenge découpage D1↔D2.
- Matrice QA Q1–Q15 (+ Q5.1–Q5.7) — existence ≠ PASS.
- Dette / exit / impacts documentaires futurs (sans edit PRR/Roadmap).
- **CORR-01 :** atomicité D5 · H4/cutover env-scoped · statuts/preuves.

### Hors scope

- Implémentation Product ; mutation DB ; cutover ; retrait structurant D1.
- Rescan volumes H4 ; ouverture DB utilisateur.
- Nouveau port / nouvelle table / dual-write.
- Adoption runtime v3 ; REAL ; SHADOW.
- Second référentiel architectural parallèle à la PRR.

### Cible Product (orientation)

**OA Native Backbone / Product SQLite** = source de vérité Project **adoptée comme cible**.
Rationalisation D1 : retrait des inutiles · réutilisation Product · adaptation/réécriture ciblée · conservation seulement si besoin/obligation démontrés · **pas de dual-write** · exit explicite pour tout temporaire.

---

## 02. Sources primaires et décisions antérieures

| Couche | Sources (primaires) |
| --- | --- |
| Processus | `prompts/templates/sfia-cycle-execution-template.md` · routing guide · CKC Cycle 6 candidate · `scripts/sfia/publish-review-handoff.sh` |
| Convergence | Build Doctrine · Roadmap (**lu, non modifié**) · C1 Product Completion |
| M5 | `01` blueprint · `02` L1 pack · `03` Formal Exit M5-A · **ce** `04` |
| M4 | `01`/`02`/`03` · `08` storage · `09` options — **snapshots historiques requalifiés via Git/code** |
| Doctrine | `sfia-v3-framing/26` · `30`–`37` applicables |
| PRR CURRENT | README · `04`/`06`/`08`/`09` · manifest — **non modifiés** |
| Preuves | Handoff L2-D0 tip `9f9f212f…` · L2-Q1 · inventaires Q0 (D1 131 / OA 43 / prod UNKNOWN) |
| Code CORR-01 | `createProject.ts` · `sqliteProductStore.ts` · `sqliteProjectAuditJournal.ts` · `localProjectComposition.ts` · `service.ts` |

**Règle R23 :** Git/code/preuves > synthèses M4 datées.

---

## 03. Trajectoire AKG-M5 et capacité O-01

| Élément | Statut |
| --- | --- |
| Capacité ancre | **O-01** — Créer, trouver, comprendre et reprendre un Project (C1) |
| L1/A09 | MERGED — `ProjectCycleAuditPort` réutilisé ; adapter D1 atomic **transitoire** |
| L2 | Préparation Q0/Q1/D0 **documentaire** · Delivery **NOT AUTHORIZED** |
| L3 Attempt / L4 ownership / L6 retire | Gates **distincts** ; non démarrés |
| Runtime v3 | **NON ADOPTED** |

**Trajectoire candidate (≠ plan autorisé) :** L2-D0 (+ CORR-01) → L2-D1 (complétude O-01 Product) → L2-D2 (cutover **env-scoped**) → L2-D3 data si exigé → L2-D4/L6 retire structurant sous GO dédié.

---

## 04. AS-IS pertinent et frontières Product/D1

| Dimension | AS-IS (CODE VERIFIED @ `94c7a30d`) | TO-BE cible Product |
| --- | --- | --- |
| Create | Dual UI : D1 `/projects/new` + `/nouvelle-demande` **et** Studio `/studio/projects/new` | **Un** path create OA/Studio |
| List/open | `/workspace` + `/projects/[id]` **et** Studio | Studio-only + policy legacy |
| IDs | `proj-*` vs `prj:*` · overlap local **0** (Q0) | `prj:*` SoT ; legacy deny/redirect (défaut) |
| MethodMode | Colonne + badges D1 ; hold mémoire ACTIVE | Archive historique ; **pas** doctrine OA |
| Persistence Project | `d1.sqlite` îlot + `oa-product.sqlite` | **Product SQLite** SoT |
| Audit create | Project/LPS dans `runInTransaction` ; `oa.project.created` **après** commit ; journal souvent **Memory** en composition Studio | D5 : cohérence succès utilisateur ↔ persist+audit (**à designer en L2-D1**, pas décidé ici) |
| Dual-write | Absent | **Reste interdit** |

Frontières : OPS1/FinOps/REAL **hors** périmètre L2 core sauf dépendance bloquante démontrée.

---

## 05. Orientations Morris déjà actées en conversation

**Qualification CORR-01 (CR-D0-03) — ne pas lire comme tip Git ni adoption doctrinale :**

Pour **M-01…M-08** :
**« Morris exprimé en conversation — consigné dans le candidat L2-D0 — branch/Draft PR possible — tip `main` pending (NOT MERGED). »**
*(La formulation CORR-01 « Git Integration pending » désignait l’absence de tip ; elle reste vraie pour **main** tant que merge non accordé.)*

Distinctions obligatoires :

| Couche | Signification |
| --- | --- |
| Décision Morris conversationnelle | Exprimée par Morris en conversation (orientation) |
| Disposition enregistrée dans le candidat | Texte de **ce** fichier local untracked |
| Recommandation proposée | ChatGPT/Cursor / pack Q1 — **≠** adoption Morris |
| Gate ouvert | Preuve technique / policy manquante |
| Décision complémentaire Morris | Tranchage encore requis (ex. D4 policy, D5 niveau, D6 owner) |
| Future intégration Git | Sous **GO Git Integration** distinct |
| Exécution Delivery | Sous **GO Delivery** indépendant |

| # | Orientation | Provenance | Portée | Limites | Critères techniques | Statut | Gates restants |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M-01 | OA = cible unique capacité Product Project | Conversation Morris (L2) | SoT Project / O-01 | ≠ retire D1 immédiat | Create/list/get/resume OA ; single writer cible | **Consigné candidat · Git pending** | Delivery GO ; freeze ≠ D0 |
| M-02 | Ne pas conserver composants D1 par inertie | Conversation Morris renforcée | Classifications KEEP/RETIRE | ≠ delete sans preuves | Consumers + usage + exit | **Consigné candidat · Git pending** | H4/D4 ; L6 GO |
| M-03 | Adaptation / réécriture ciblée OK si trajectoire Product propre | Conversation Morris | Gaps O-01 utiles | ≠ rewrite massif | Delta prouvé vs dette évitée | **Consigné candidat · Git pending** | Scope Delivery |
| M-04 | **H1** MethodMode historique ≠ doctrine OA | Conversation (**Option A**) | Pas de MethodMode Product | Hold AS-IS = fait runtime **≠** annulation de l’orientation | Pas de champ/runtime OA ; archive colonne | **Consigné candidat · Git pending** · hold **ACTIVE** (gate) | Formal H1 + freeze UI |
| M-05 | **H4** preuves pertinentes avant migration/retrait ; volumes locaux ≠ migration exhaustive | Conversation | Inventaire / policy | Prod UNKNOWN | Couverture **par environnement basculé** ; pas delete sans policy | **Consigné candidat · Git pending** | **R-VOL-01 OPEN** |
| M-06 | Identités : mapping sélectif **seulement si nécessaire** | Conversation | `proj-*` / deep links | Pas mapping implicite | Deny/redirect défaut ; C si prouvé | **Consigné candidat · Git pending** | **D4** explicite |
| M-07 | Cutover : dual-write interdit ; rollback **write** D1 interdit sans réconciliation prouvée | Conversation + amend Q1 | R-CUT-01 | Design ≠ exécution | Freeze → OA exclusive → verify ; RO fallback OK | **Consigné candidat · Git pending** | **R-CUT NOT PROVEN** |
| M-08 | Option L2 : OA seul en cible ; conservation D1 **conditionnelle / temporaire** | Conversation | Scénario A(+B court) | B pas obligatoire | Exit + owner si archive | **Consigné candidat · Git pending** | D2 stratégie |

**Interdits de confusion :** orientation ≠ preuve technique · recommandation ≠ adoption · GO documentaire ≠ GO Delivery · consignation candidat ≠ tip Git · proposition de suppression ≠ suppression autorisée.

---

## 06. Registre de décisions D1–D9

| ID | Question | Évidence Q0/Q1/code | Décision Morris conversationnelle ? | Disposition dans candidat | Recommandation (≠ adoption auto) | Décision complémentaire encore nécessaire | Statut Git | Gate technique | Livraison |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **D1** | Actifs historiques indispensables ? | O-01 via OA ; ports utiles ; îlot = dual UX | **Oui** : îlot non indispensable par principe ; anti-inertie | Ports/OA indispensables ; îlot UI non KEEP | Retire après preuves | Formaliser tip | Candidate local | Consumers ; L6 delete | Prep / D2 / L6 |
| **D2** | Stratégie retrait ? | A/B/C Q1 | **Oui** conservation conditionnelle | A cible ; B court si besoin ; C si deep-link | Pas archive permanente par inertie | **Adopter label A/(B)/(C)** sous GO | Candidate | H4 **env** ; D4 ; R-CUT | L2-D2…L6 |
| **D3** | Adaptations OA ? | Create/list PARTIAL ; match ABSENT ; audit post-txn | **Oui** rewrite ciblée OK | COMPLETE D5 (durabilité **+ cohérence txn**) ; pas match défaut | — | **Scope exact L2-D1** | Candidate | D5 + Q5.x | **L2-D1** |
| **D4** | Identités `proj-*` ? | Deep links ; overlap 0 | **Oui** mapping sélectif si besoin | Deny/redirect défaut ; pas map implicite | Mapping C justifié | **Policy URL explicite** | Candidate | Tests Q7/Q10 | L2-D2 / D3 |
| **D5** | Audit Product ? | Memory default ; append **hors** txn create (**CODE VERIFIED**) | Orientation « retire propre » | COMPLETE durable **et** cohérence succès↔persist+audit ; **design L2-D1** | Memory-acceptable seulement si Morris écrit | **Niveau contractuel + design txn** | Candidate | Q5.1–Q5.7 ; **non PASS** | **L2-D1** |
| **D6** | Conservation ? | 131/43 local ; prod UNKNOWN | **Oui** pas migration exhaustive | Policy qualify→archive/migrate/conserve/destroy | Delete immédiat interdit | **Owner + policy** | **OPEN** | **H4 / R-VOL-01** | Avant D3/retire |
| **D7** | Cutover / R-CUT ? | Design Q0+Q1 | **Oui** no dual-write ; no write rollback sans réconciliation | Protocole candidat **env-scoped** | Re-enable writes = STOP | **Acceptation protocole** ≠ exécution | Candidate design | **NOT PROVEN** | **L2-D2** |
| **D8** | Premier lot Delivery ? | Trajectoire Q1 | Orientation OA unique | **L2-D1** puis **L2-D2** séparés | Lot unique seulement si GO séquencé explicite | **GO Delivery borné** | Candidate | D5 pour D1 ; H4 **env** pour D2 | L2-D1 |
| **D9** | Gates avant GO ? | Réserves Critical | — | Séparer prep / non-destructif / freeze / data / retire | Tout-en-un rejeté | Checklist §18 | OPEN | Critical + Morris | Tous |

**Statut agrégé D1–D9 :** **NOT GLOBALLY ADOPTED.**
Les orientations Morris existantes (M-01…M-08 / colonnes « conversationnelle ») **ne sont pas** requalifiées « NOT DECIDED ».
Les **recommandations** et **décisions complémentaires** restent ouvertes jusqu’à tranchage Morris / tip / GO.

---

## 07. H1 MethodMode

| Élément | Qualification |
| --- | --- |
| Orientation Morris | MethodMode = **donnée historique D1 archive-only** ; **aucune** propagation doctrinale OA (Option A) — **consignée candidat · Git pending** |
| AS-IS | Colonne SQLite D1 · badges/claims · hold **ACTIVE** in-memory |
| Hold ACTIVE | **Fait runtime historique** — **n’annule pas** l’orientation Morris archive-only |
| Disposition candidate | Archive valeurs si besoin · retire runtime/UI après freeze · pas doctrine OA |
| Delivery | **Ne pas contourner** MethodModeHold · pas d’extinction runtime D1 dans L2-D1 |
| Exit extinction runtime | Freeze + H1 formal + Q6 + GO retire UI |
| Gate | Hold ACTIVE ouvert jusqu’à extinction sous GO |

---

## 08. H4 volumes, données et politique de conservation

| Fait | Statut |
| --- | --- |
| Local Q0 (non re-scanné) | D1 **131** · OA default **43** · overlap IDs **0** |
| Production | **UNKNOWN** |
| R-VOL-01 | **OPEN** |
| H4 PASS ? | **NON** |

**Interprétation :** 131 ≠ migrer ≠ conserver indéfiniment ≠ supprimer.
**Prod UNKNOWN** : reste UNKNOWN sans preuve · **≠ volume zéro** · **ne justifie pas** désactivation globale · **ne s’efface pas** par une « policy minimale » seule.

### Distinction L2-D1 vs L2-D2 (CR-D0-02)

| Lot | Nature | H4 requis ? |
| --- | --- | --- |
| **L2-D1** | OA Product **non migratoire** ; **pas** de désactivation D1 ; **ne** mute / **n’accède** pas aux données historiques D1 pour bascule | Peut avancer sous GO borné **sans** H4 global PASS |
| **L2-D2** | Change writers/readers et l’accès historique | Exige **couverture effective du périmètre réellement basculé** (par environnement) |

### Checklist couverture **par environnement cible** (avant tout freeze/cutover sur cet env.)

Pour **chaque** environnement explicitement inclus dans un GO L2-D2 :

| # | Élément | Exigence |
| --- | --- | --- |
| 1 | Environnement identifié | Nom + périmètre (ex. local-dev, staging-X) — **pas** « all envs » implicite |
| 2 | Owners / autorités | Nommé(s) |
| 3 | Writers D1 utilisés | Inventaire code + usage effectif |
| 4 | Readers / parcours historiques | Routes, deep links, consoles |
| 5 | Volumes / identités utiles | Agrégats ou preuve d’absence d’usage ops |
| 6 | Utilisateurs / parcours affectés | Qualifiés |
| 7 | Obligations de conservation | Documentées ou « none demonstrated » explicite |
| 8 | Disponibilité données nécessaires | Backup/RO access si requis |
| 9 | Politique anciens liens | Alignée D4 |
| 10 | Plan reprise / fallback | RO fallback ; **pas** unfreeze write sans réconciliation |
| 11 | Tests NR | Q7–Q12 au scope env. |
| 12 | Preuve absence writer D1 post-freeze | Q8 |
| 13 | Stop conditions | Writer leak · dual-write · prod inclus sans preuve |
| 14 | Gate Morris | **GO L2-D2 limité à cet environnement** |

**Autorisé conceptuellement :** cutover **borné** à un environnement dont couverture + risques sont vérifiés, sous GO **explicitement limité** à cet environnement.
**Interdit conceptuellement :** GO cutover **global** fondé sur volumes locaux + hypothèse prod vide.

### Options disposition (D6) — aucune exécutée

1. Supprimer après qualification + policy + GO.
2. Archive temporaire RO (B) avec owner, périmètre, durée/exit.
3. Migration sélective (C) si continuité prouvée.
4. Conserver sous obligation démontrée.

**Owner policy :** **UNASSIGNED** (Pilote temporaire tant que non nommé).

---

## 09. Identités et deep links

| Sujet | Décision candidate (≠ exécutée) |
| --- | --- |
| Espaces | `proj-*` ≠ `prj:*` — **pas** d’équivalence implicite |
| Défaut | **Deny/redirect** legacy → Studio entry — **pas** vers un Project « équivalent » inventé |
| Mapping C | Seulement si besoin démontré + sémantique + authz + verify |
| Exit | Tests Q7/Q10 |

---

## 10. Audit Product, durabilité et D1 A09

### Contrats à garder **distincts**

| Contrat | Rôle | Disposition |
| --- | --- | --- |
| `ProjectCycleAuditPort` (t-a7) | Append phases cycle | **KEEP** (L1) — **≠** journal OA create |
| `LocalProjectCreationAuditPort` | Events création locale | **KEEP** / ADAPT |
| `ProjectAuditJournalPort` | Journal événements OA Project | **KEEP** ; Memory vs Sqlite |
| `BoundedAtomicAuditStore` / `d1_atomic_audit` | Adapter phases D1 | **HARVEST** / **RETIRE LATER** — **pas** suppression auto |
| `d1_audit_events` | Trail intake D1 | Selon H4 |
| `oa_audit_events` | Journal Product partagé | **KEEP** (table existante) |

### A. Frontière transactionnelle AS-IS (**CODE VERIFIED** @ `94c7a30d`)

| Étape | Code | Dans `runInTransaction` ? |
| --- | --- | --- |
| Persist Project + LPS + idempotence | `CreateProject.execute` → `persist()` via `store.runInTransaction` (`createProject.ts` L249–269 ; `SqliteProductStore.runInTransaction` BEGIN/COMMIT) | **Oui** |
| Append succès `oa.project.created` | `this.audit.append(...)` **après** commit (`createProject.ts` L277–286) | **Non** |
| Append erreur (chemins `fail`) | `audit.append` result=error **avant** return fail — hors txn create réussie | N/A txn succès |
| Impl journal Studio create | Souvent `MemoryProjectAuditJournal` (`localProjectComposition.ts`) | Mémoire process |
| Impl journal matérialisation | Peut être `SqliteProjectAuditJournal` si `productSqlite` (`service.ts` ~535–541) | INSERT `oa_audit_events` **hors** txn create Project |
| `SqliteProjectAuditJournal.append` | INSERT synchrone sur `store.db` (**pas** branché dans la txn create) | **Hors** txn create |

**Conséquence (CR-D0-01) :** remplacer seulement `MemoryProjectAuditJournal` par `SqliteProjectAuditJournal` **ne garantit pas** l’atomicité création+audit.
**Risque :** Project déjà committé → append audit échoue → catch/`fail` peut retourner **création échouée** alors que le Project **existe** (**faux échec post-commit**).

### B. Garantie cible recommandée (contrat D5 candidat — **non implémenté**)

Pour les **événements contractuels de création réussie**, la réussite utilisateur doit être **cohérente** avec :

1. Persistance **Project**
2. **LPS** initial
3. **Idempotence** (si clé fournie)
4. **Événement durable requis** (succès) sur le journal OA contractuel

### C. Design Delivery L2-D1 — cohérence transactionnelle (**à traiter**, non décidé ici)

Le design L2-D1 **doit** traiter la cohérence txn.
**Privilégier la réutilisation** (sans nouveau port/table par défaut) :

- `SqliteProductStore`
- `runInTransaction`
- `SqliteProjectAuditJournal`
- table `oa_audit_events`

**Ce record ne fixe pas** l’implémentation exacte (ordre append-in-txn vs outbox vs autre) — réserve au design Delivery sous GO.

### D. Interdiction du faux échec post-commit

Si l’audit succès est **contractuellement bloquant** :

- Définir un **comportement de rollback / réconciliation cohérent** avec l’état déjà persisté.
- **Interdit** de retourner « creation failed » / `ok:false` **après** commit Project **sans** gestion explicite de l’état déjà créé (lecture idempotente, compensation documentée, ou inclusion dans la même txn).

Si l’événement succès **ne peut pas** être atomique avec la persist :

- Qualifier la limite **explicitement**.
- Comparer options de reprise/réconciliation.
- Toute **acceptation de risque** → **décision Morris** spécifique (≠ défaut silencieux).

### E. Distinctions d’événements

| Type | Exigence txn create |
| --- | --- |
| Audit **création réussie** (contractuel) | Doit respecter B/D |
| Audit **tentative / échec** (validation, doctrine, conflit) | **Pas** imposé dans la txn de création réussie |
| Journal Project OA (`ProjectAuditJournalPort`) | Distinct |
| `ProjectCycleAuditPort` | Distinct — ne pas fusionner |
| `LocalProjectCreationAuditPort` | Distinct |

### F. Oracles à préparer (pas exécutés CORR-01)

| ID | Oracle |
| --- | --- |
| **Q5.1** | Création réussie + événement durable présent |
| **Q5.2** | Échec audit contractuel **avant** commit → **aucune** création partielle |
| **Q5.3** | Échec audit **après** commit → **aucun** faux résultat « project absent » / `ok:false` trompeur |
| **Q5.4** | Retry idempotent après incident |
| **Q5.5** | Restart : Project / LPS / audit cohérents |
| **Q5.6** | Concurrence / double création |
| **Q5.7** | Frontières ports L1 non régressées (import boundaries / Cycle port) |

### G. Statut D5

| Claim | Statut |
| --- | --- |
| D5 implémenté / testé / PASS | **NON** |
| Nouveau port / nouvelle table décidé | **NON** |
| Memory-acceptable | Seulement si Morris l’écrit explicitement |
| Retire A09 D1 « propre » | Conditionné à COMPLETE D5 (ou acceptation Morris écrite) |

---

## 11. R-CUT-01 et rollback

**Statut :** protocole **conçu** (Q0) + **amendé** (Q1) + **renforcé CORR-01 (env-scoped)** · **non tip** · **non exécuté** · **NOT PROVEN**.

### Principes

- **Single Product writer** cible.
- **Aucun dual-write.**
- Après OA exclusive writes : **pas** de réactivation writes D1 sans réconciliation **prouvée** + GO spécifique.
- Read-only fallback **conditionnel**.
- **Pas** de migration/destruction automatique.
- **Pas** de mapping implicite `proj-*` → `prj:*`.
- Cutover **uniquement** sur environnements dont la checklist §08 est satisfaite ; **interdit** cutover global sur prod UNKNOWN.

### Étapes protocole candidat (design-only)

| # | Étape | Precondition | Action future | Preuve | Stop | Rollback type | Gate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Inventory + impact | Q1/D0 Critical | Consommer matrices | Packs | Écart Git | — | D0 |
| 2 | H1 formal | Orientation A | Tip + Q6 | Doc+tests | Hold bypass | — | H1 |
| 3 | H4 **env coverage** | Checklist §08 pour **chaque** env du GO | Policy + preuves env | Doc+agrégats | Env hors scope / prod inclus sans preuve | — | H4 |
| 4 | D4 identities | — | Deny/redirect (±C) | Q7 | Map implicite | — | D4 |
| 5 | Backup/hashes | Avant freeze **sur env** | Snapshot | Checksums | Skip backup | Restore file | Cutover |
| 6 | Freeze writers D1 | 1–5 **sur env** | Disable writes | Q8 | Writer leak | **Not** unfreeze write | L2-D2 |
| 7 | OA exclusive create | D5 si requis path | Studio only | Q1/Q4/Q9 | Dual path | UI RO | L2-D2 |
| 8 | Reader cutover | D4 | Redirects | Q7/Q15 | Soft 404 | Redirect adjust | L2-D2 |
| 9 | Verify | 6–8 | Smoke DET | Q8–Q12 | Fail oracle | RO fallback | L2-D2 |
| 10 | Archive RO si B | H4+D6 | Mount RO | Inventory | Archive sans exit | Unmount | L2-D3 |
| 11 | Retire structurant | Consumers=0 | Delete | Grep | Early delete | GO L6 | L2-D4/L6 |

**L2-D2 NOT AUTHORIZED.** **R-CUT-01 NOT PROVEN.** **H4 / R-VOL-01 OPEN.**

---

## 12. Classifications et retrait D1

Synthèse Q1 (recommandations ≠ delete) — inchangée dans l’esprit :

| Classe | Exemples | Règle |
| --- | --- | --- |
| **KEEP** | Ports Product / OA Project/LPS / Sqlite journal | Capacités Product utiles |
| **REPLACE** | Routes/UI/commands/repo D1 | Par Studio/OA |
| **COMPLETE** | D5 durabilité **+** cohérence txn create | Avant retire A09 D1 propre |
| **HARVEST** | Patterns confirmation ; port atomic | Sans îlot |
| **ARCHIVE / RETIRE LATER** | Events D1, match, tests D1 | Sous H4/usage |
| **RETIRE** (runtime) | MethodMode UI après freeze | H1 |

**Anti-KEEP** · **RETIRE LATER ≠ autorisation de suppression.**

---

## 13. Contrat candidat Delivery L2

### L2-D0 (+ CORR-01)

Documentaire seulement.
**Exit :** record corrigé + Critical **Re-review** + (éventuel) GO Git Integration **distinct**.

### Challenge L2-D1 vs L2-D2

**Conclusion candidate inchangée :** **deux lots séparés** sous GO distincts.
- **L2-D1** = non destructif (O-01 + D5).
- **L2-D2** = cutover **env-scoped**.
GO unique séquencé possible **seulement** si D4 + H4-env + D5 + R-CUT amend sont **explicitement** inclus — exit proofs **non** fusionnés.

### L2-D1 — Product O-01 completeness (candidat)

| Champ | Contenu |
| --- | --- |
| But utilisateur | Créer / lister / ouvrir / reprendre Project fiable sur Studio/OA |
| Paths | `oa/project/**` · `localProjectComposition` · `vertical-slice-runtime/service` · pre-m6 UI · `studio/**` |
| Invariants | No dual-write · no MethodMode OA · no new port/table sans GO · contracts distincts · **pas de faux échec post-commit** si audit bloquant |
| Design obligatoire | Traiter cohérence txn create↔audit (§10 C/D) en réutilisant store/txn/journal/`oa_audit_events` |
| Dépendances | D0 Critical Re-review · D5 scope · L1 boundaries |
| **Ne fait pas** | Désactiver D1 · muter/accéder histo D1 pour bascule · exiger H4 global PASS |
| Tests | Q1–Q4 PRESENT à évaluer · **Q5.1–Q5.7 à écrire/exécuter sous Delivery** · Q6 · Q14 L1 |
| Stops | Migration/H4 destructive · dual-write · fusion ports · hold bypass · faux échec post-commit accepté sans Morris |
| Exit proof | Oracles O-01 + D5 (Q5.x) au scope · PRR sync si sémantique |
| Gate | **GO Delivery L2-D1** |

### L2-D2 — Exclusive Product cutover (candidat)

| Champ | Contenu |
| --- | --- |
| But utilisateur | Plus de création D1 **sur les env. du GO** ; nav legacy gouvernée |
| Paths | Routes D1 · writers · nav shell |
| Invariants | Writers frozen **sur env** · no dual-write · D4 · R-CUT amend |
| Dépendances | L2-D1 exit · H1 formal · **checklist H4 §08 pour chaque env du GO** · D4 · backup |
| **Interdit** | Cutover global avec prod UNKNOWN / volumes locaux seuls |
| Tests | Q7–Q12 au scope env. |
| Stops | Unfreeze write · delete store · env hors checklist · « prod zéro » |
| Exit proof | No D1 writes **sur env** · redirects · RO fallback · Q8/Q9 |
| Gate | **GO Delivery L2-D2 limité aux env. nommés** |

### L2-D3 / L2-D4 / L6

Inchangés : data seulement si H4/D4/D6 ; retire structurant sous **GO dédié**.

---

## 14. Matrice de non-régression (Q1–Q15 + Q5.x)

**Légende CORR-01 (CR-D0-03) :**

| Label | Signification |
| --- | --- |
| TEST PRESENT | Fichier(s) test existent dans le repo |
| TEST NOT EXECUTED THIS CYCLE | Non exécuté en D0/CORR-01 |
| COVERAGE REVIEWED | Oracle/périmètre **inspectés** (chemins cités) |
| COVERAGE VERIFIED | Couverture confirmée pour un comportement nommé |
| BEHAVIOR PROVEN AT TESTED SCOPE | Exécution + oracle PASS au scope (ex. **L1** distinct) |
| KNOWN GAP | Manque oracle / design |
| NOT APPLICABLE | Hors lot |

**Règle :** présence d’un test ≠ `COVERAGE VERIFIED`. Consultation seule ≠ `BEHAVIOR PROVEN`.
Les **PASS L1** déjà prouvés restent distincts de ce cycle (ne pas les reclasser).

| ID | Contrôle | Statut preuve D0/CORR-01 | Applicable |
| --- | --- | --- | --- |
| Q1 | Product O-01 create | **TEST PRESENT** / **NOT EXECUTED THIS CYCLE** (suites OA/UI connues ; oracle non re-évalué ici) | L2-D1 |
| Q2 | List/get | **TEST PRESENT** / **NOT EXECUTED THIS CYCLE** | L2-D1 |
| Q3 | Resume restart | **TEST PRESENT** / **NOT EXECUTED THIS CYCLE** | L2-D1 |
| Q4 | OA idempotence | **TEST PRESENT** / **NOT EXECUTED THIS CYCLE** | L2-D1 |
| Q5 | Audit durable + erreurs (umbrella) | **KNOWN GAP** (atomicité post-txn) | L2-D1 |
| Q5.1–Q5.7 | Voir §10 F | **NOT PRESENT** as dedicated oracles / **à écrire** sous Delivery | L2-D1 |
| Q6 | MethodMode absent Product | **TEST PRESENT** partiel possible / **NOT EXECUTED** ; assert explicite à confirmer | L2-D1/D2 |
| Q7 | Legacy URL policy | **NOT PRESENT** (cutover) / à écrire | L2-D2 |
| Q8 | No D1 write post-freeze | **NOT PRESENT** / à écrire | L2-D2 |
| Q9 | No dual-write | Design only / assert à écrire | L2-D2 |
| Q10 | Identités / histo | Inventaire Q0 **CODE VERIFIED** agrégats ; tests policy **NOT PRESENT** | D4 |
| Q11 | Conservation autorisée | **H4 OPEN** / **NOT APPLICABLE** tant que policy absente | D3/L6 |
| Q12 | RO fallback | Design R-CUT / harness **NOT PRESENT** | L2-D2 |
| Q13 | PRR conformance | Post-comportement | Post-Delivery |
| Q14 | Import boundaries | **BEHAVIOR PROVEN AT TESTED SCOPE** au **L1** (distinct) ; non re-run CORR-01 | L1/L6 |
| Q15 | NR UI / conversationnel | **TEST PRESENT** partiel pre-m6 / **NOT EXECUTED THIS CYCLE** | L2-D1/D2 |

---

## 15. Exit proofs et stops

### Exit proof L2-D0 / CORR-01

| Critère | Status |
| --- | --- |
| Orientations M-01…M-08 consignées sans faux tip Git | SATISFIED (candidat) |
| CR-D0-01/02/03 fermés **documentairement** | SATISFIED |
| D1–D9 cohérents ; NOT GLOBALLY ADOPTED | SATISFIED |
| H1/H4/R-CUT non surpromus | SATISFIED |
| Challenge D1/D2 + env-scoped D2 | SATISFIED |
| D5 non déclaré PASS/implémenté | SATISFIED |
| Zéro mutation Product / PRR / Roadmap | SATISFIED |
| Git Integration / Delivery | **NOT** |

### Stops

Git Truth incohérent · collision P6 · H4 PASS inventé · R-CUT PROVEN inventé · atomicité affirmée sans code · faux échec post-commit accepté sans Morris · cutover global prod UNKNOWN · tests PRESENT présentés comme PASS · nouveau port/table/dual-write · Delivery sans GO.

---

## 16. Dette et remboursement

| Dette | Exit |
| --- | --- |
| Dual UX D1 + Studio | L2-D2 env-scoped |
| MethodMode runtime/UI | H1 + L2-D2 |
| Memory OA audit create | D5 / L2-D1 |
| **Audit append hors txn create (faux échec post-commit possible)** | Design+impl L2-D1 (Q5.2/Q5.3) |
| R-VOL-01 / prod UNKNOWN | H4 env coverage + policy |
| Deep links `proj-*` | D4 + L2-D2/D3 |
| Adapter `d1_atomic_audit` | Après path Product A09 + unused |
| Archive B sans owner/exit | **Interdit** |
| Candidat ≠ tip Git | GO Git Integration `04` |

---

## 17. R23 / R24 et impacts documentaires

### R23

| Niveau | Usage CORR-01 |
| --- | --- |
| DOCUMENTED | Orientations · ce record · CORR-01 |
| CODE VERIFIED | Frontière txn create/audit @ `94c7a30d` |
| COVERAGE REVIEWED | — limité ; oracles Q1–Q4 non re-inspectés en profondeur |
| COVERAGE VERIFIED | **Non** affirmé pour Q1–Q4 ce cycle |
| BEHAVIOR PROVEN AT TESTED SCOPE | **L1** import boundaries (héritage) ; **pas** cutover/D5 |
| KNOWN GAP | Atomicité D5 · H4 prod · Q5.x absents |

### R24

**NO PRODUCT SEMANTIC IMPACT** (D0 + CORR-01).
**PRR / Roadmap / Doctrine : non modifiés.**

Futurs updates Delivery : PRR 01/03/04/06/08/09 + digests après contenu ; Roadmap sous GO Git distinct.

---

## 18. Gates Morris encore nécessaires

| Gate | Objet | Bloque |
| --- | --- | --- |
| ChatGPT Critical **Re-review** CORR-01 | Qualité corrections | Suite |
| Morris — Git Integration `04` | Tip / PR docs | Visibilité main |
| Morris — D2/D4/D5/D6/D7 complémentaires | Labels / policy / niveau D5 / acceptation risque txn | Périmètre |
| **GO Delivery L2-D1** | O-01 + design/impl D5 | Code Product |
| **GO Delivery L2-D2** | Freeze/readers **env nommés** seulement | Cutover |
| Owner + H4 policy + **env checklist** | Conservation / bascule | D2 destructif / D3 |
| **GO L2-D3** | Data | Archive/C |
| **GO L6 / L2-D4** | Retire structurant | Delete |
| Jamais auto | Delivery / merge / REAL / v3 | — |

---

## 19. Prochaine capacité / trajectoire

1. Critical **Re-review** ChatGPT (CORR-01).
2. Morris : GO Git Integration `04` et/ou tranchages complémentaires.
3. Sous GO : **L2-D1** (O-01 + D5 txn-coherent).
4. Sous GO **env-scoped** : **L2-D2**.
5. Data / retire : H4/D6/L6.

---

## 20. Verdict

**L2-D0 CORR-01 DOCUMENTARY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW — NOT GIT INTEGRATED — DELIVERY L2 NOT AUTHORIZED**

- CR-D0-01/02/03 **fermés documentairement**.
- D5 **à designer/implémenter** sous GO L2-D1 — **non PASS**.
- H4 / R-VOL-01 **OPEN** ; cutover global **interdit** sans couverture env.
- R-CUT-01 **NOT PROVEN** ; H1 hold **ACTIVE** (fait runtime ≠ annulation orientation).
- D1–D9 **NOT GLOBALLY ADOPTED** ; M-01…M-08 **consignés candidat · Git pending**.
- Aucune mutation Product.

---

*Document de construction SFIA Studio — L2-D0 Decision & Delivery Readiness (+ CORR-01) ; publication Git = candidate jusqu’à intégration distincte sous GO Morris.*

```

---

## 8. Diff / fichier créé

| Item | Valeur |
|---|---|
| Path | `projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/04-m5-l2-d0-decision-and-delivery-readiness.md` |
| Change | **ADDED** (+595 lignes) |
| Autres fichiers projet | **aucun** |

---

## 9. Changement métadonnées lifecycle (éditorial minimal)

| Avant (CORR-01 local) | Après (GI) |
|---|---|
| `DOCUMENTARY CANDIDATE — LOCAL — NOT INTEGRATED ON MAIN` | `DOCUMENTARY CANDIDATE — ON BRANCH / DRAFT PR — NOT MERGED — NOT INTEGRATED ON MAIN` |
| « Git Integration pending » (M-01…M-08) | Qualifié : branch/Draft PR possible — **tip main pending (NOT MERGED)** |
| — | GO intégration + handoff CORR-01 tip ajoutés en métadonnées |

**Aucun** changement de fond (décisions, gates, stratégies, D5/H4/R-CUT).

---

## 10. Commit SHA projet

`71f0674297f42759e2a2424c048b0cdce9e1dc60`
Message : `docs(akg-m5): record L2-D0 decisions and delivery readiness`
Mono-fichier : **OUI**

---

## 11. Push et SHA distant

Branche `origin/docs/akg-m5-l2-d0-decision-readiness` @ `71f0674297f42759e2a2424c048b0cdce9e1dc60`
Blob distant = local · relecture markers OK.

---

## 12–13. Draft PR

| Item | Valeur |
|---|---|
| Number | **#611** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/611 |
| Base | `main` |
| Head | `docs/akg-m5-l2-d0-decision-readiness` |
| isDraft | **true** |
| State | **OPEN** |
| Files | **1** — fichier 04 only |
| Commits | **1** — `71f06742…` |

---

## 14. CI / checks (état réel)

| Check | État observé |
|---|---|
| Detect SFIA Studio changes (SFIA Studio CI) | **PENDING / IN_PROGRESS** (run `40029951855`) |
| Build / Required Gate | **non encore conclu** au moment du pack |

**CI PENDING — MERGE NOT READY.** Ne pas affirmer SUCCESS.

---

## 15. Décisions et gates conservés

M-01…M-08 consignés · D1–D9 non ADOPTED global · H1/H4/R-CUT/D5 inchangés · L2-D1 puis L2-D2 sous GO distincts · dual-write forbidden.

Gates : Critical PR Review → GO Morris **merge** → GO Delivery L2-D1 → GO L2-D2 env-scoped.

---

## 16. Réserves restantes

Prod UNKNOWN · H4 OPEN · D5 non implémenté · R-CUT NOT PROVEN · NOT MERGED · Delivery NOT AUTHORIZED · CI PENDING.

---

## 17. R23 / R24

R23 : contexte code/PRR consulté · aucune mutation architecture.
R24 : **NO PRODUCT SEMANTIC IMPACT** · PRR/Roadmap non modifiés.

---

## 18. Tests

| Type | Résultat |
|---|---|
| git diff --check / mono-fichier / remote blob | Exécutés PASS |
| Fidélité CORR-01 markers | PASS |
| PR Draft structure | PASS |
| Tests Product | **NON EXÉCUTÉS** (N/A DOC) — ≠ PASS |
| Fake/REAL | N/A |

---

## 19. Non-claims

Pas de merge · pas Delivery · pas H4 PASS · pas D5 PASS · pas R-CUT PROVEN · pas D1 SAFE TO DELETE · pas ADOPTED D1–D9 · pas v3 ADOPTED · pas REAL · pas CI SUCCESS inventé.

---

## 20. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | _PENDING_PUBLISH_ |
| Commit FULL | _PENDING_PUBLISH_ |
| Blob FULL | _PENDING_PUBLISH_ |
| Parent | `b8e74ee1613ef83212964cb4aac656499a048e81` |
| Tip distant courant | `git rev-parse origin/sfia/review-handoff` |
| Projet | PR #611 Draft @ `71f06742` ; **NOT MERGED** |

---

## 21. Verdict (rappel)

**L2-D0 DOCUMENTARY GIT INTEGRATION COMPLETE — DRAFT PR OPEN — READY FOR CHATGPT CRITICAL PR REVIEW — NOT MERGED — DELIVERY L2 NOT AUTHORIZED**

**CI PENDING — MERGE NOT READY**

---

**Fin pack FULL Cycle 13 — contenu 04 intégral inclus.**
