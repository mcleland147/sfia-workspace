# SFIA Studio — AKG-M5 / L2-D0 — Decision Formalization & Delivery Readiness

**Date / heure:** 2026-10-23 22:23 Europe/Paris (CEST)
**Cycle:** 6 — Architecture technique
**Profil:** Critical
**Typologie:** DOC / EVOL (documentary candidate)
**GO Morris:** L2-D0 DECISION FORMALIZATION & DELIVERY READINESS — **GRANTED** (documentaire + pack + handoff L3)
**NON autorisé / NON effectué:** implémentation Product · schéma · migration · cutover · freeze writers · retrait D1 · Roadmap/Doctrine/PRR · commit/push/PR/merge projet · GO Delivery L2 · L3/L4/L6 start · v3/REAL/SHADOW

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (tip/blob de **ce** cycle) ; vérifier contenu **intégral** du fichier `04`, statuts D1–D9 (pas d’adoption inventée), H1/H4/R-CUT, contrat L2-D1/D2, exit proofs, R23/R24, verdict. **Aucun GO Delivery automatique.**

---

## 1. Verdict

**L2-D0 DOCUMENTARY DECISION PACK COMPLETE — READY FOR CHATGPT CRITICAL REVIEW — NOT GIT INTEGRATED — DELIVERY L2 NOT AUTHORIZED**

- Orientations Morris M-01…M-08 formalisées (conversation → record candidat).
- D1–D9 enregistrés avec statuts réels ; **pas** ADOPTED global.
- H4 / R-VOL-01 **OPEN** ; R-CUT-01 **NOT PROVEN** ; H1 hold **ACTIVE**.
- Premier Delivery recommandé : **L2-D1** séparé de **L2-D2**.
- Jamais : D1 SAFE TO DELETE · H4 PASS · R-CUT PROVEN · MIGRATION AUTHORIZED · DELIVERY READY.

---

## 2. Git Truth initial / final

| Item | Valeur |
|---|---|
| ChatGPT / `origin/main` | `94c7a30d253396cba71f4c4938a1a0671fc0801c` — **ALIGNED** |
| Branche docs locale | `docs/akg-m5-l2-d0-decision-readiness` @ `94c7a30d` |
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0` |
| WT P6 | `qa/sfia-studio-p6-…` **dirty** — **non touché** |
| Handoff entrée Q1 | tip `aa89c20a047dea6500700db0c9a11c43b702912c` |
| Fichier projet créé | `…/m5-product-transformation/04-m5-l2-d0-decision-and-delivery-readiness.md` (**untracked**, non commité) |
| Autres mods projet | **aucune** |
| Commit/push/PR projet | **NON** |

---

## 3. Autorisation Morris

GO **L2-D0** documentaire consommé. N’adopte **pas** automatiquement toutes les options D1–D9. N’autorise **pas** Delivery L2.

---

## 4. Références Git primaires

| Réf | SHA |
|---|---|
| main / baseline | `94c7a30d253396cba71f4c4938a1a0671fc0801c` |
| L2-Q1 tip handoff | `aa89c20a047dea6500700db0c9a11c43b702912c` |
| L2-Q1 FULL commit | `9f259c3dd04fd93fe8aa854690c2aa7f58c3d48f` |
| L1 merge chain | PR #609 / #610 MERGED |

---

## 5. Sources consultées

- FULL handoff L2-Q1 (priorité).
- C1 Product Completion (O-01).
- M5 `01`/`02`/`03` ; M4 `01`–`03`/`06`/`08`/`09` (requalifiés).
- Build Doctrine · Roadmap CURRENT TIP (**lu, non modifié**).
- PRR `01`/`03`/`04`/`06`/`08`/`09` (**non modifiés**).
- Code audit wiring : `localProjectComposition.ts` (Memory default) · `service.ts` ~535–541 (Sqlite materialization).

**Convergence Pre-check :** C1 présent · PRR applicable consultée · handoff Q1 tip aligné · trajectoire L2 démontrée documentairement · **PASS** pour cycle DOC.

---

## 6. Réserves Critical Q1 reprises

1. H4 / prod UNKNOWN.
2. Audit OA Memory sur create Studio.
3. Context-match D1 valeur UNKNOWN — pas de parité forcée.
4. Rollback write D1 interdit sans réconciliation.
5. Décisions conversation ≠ tip Git tant que sync non GO.
6. Absence de consumers observés ≠ preuve globale d’absence d’usage.

---

## 7. Document 04 — CONTENU INTÉGRAL

> Obligation Review Pack : contenu intégral du fichier créé (pas synthèse seule).

```markdown
# AKG-M5 / L2-D0 — Decision & Delivery Readiness Record

| Champ | Valeur |
| --- | --- |
| Jalon | **AKG-M5 — Product Transformation** / **L2-D0** Decision Formalization & Delivery Readiness |
| Cycle | **6 — Architecture technique** |
| Profil | **Critical** |
| Typologie | **DOC / EVOL** (documentary candidate) |
| Autorité | **Morris — gouvernance de construction SFIA Studio** |
| GO consommé | **L2-D0 DECISION FORMALIZATION & DELIVERY READINESS** (documentaire) |
| Date locale | **2026-10-23** (Europe/Paris) |
| Baseline Git | `origin/main` = `94c7a30d253396cba71f4c4938a1a0671fc0801c` |
| Handoff entrée L2-Q1 | tip `aa89c20a047dea6500700db0c9a11c43b702912c` · FULL commit `9f259c3dd04fd93fe8aa854690c2aa7f58c3d48f` |
| Statut de ce record | **DOCUMENTARY CANDIDATE — LOCAL — NOT INTEGRATED ON MAIN** |
| Impact runtime | **NO PRODUCT SEMANTIC IMPACT** (R24) |
| Delivery L2 | **NOT AUTHORIZED** par ce document |

> **Frontière :** ce record formalise des orientations Morris déjà exprimées en conversation, confronte les preuves L2-Q0/Q1, et prépare un contrat Delivery candidat. Il **n’adopte pas** automatiquement D1–D9, **n’autorise pas** Delivery, cutover, migration, freeze writers, retrait D1, ni Git Integration projet. Ce n’est **pas** une seconde PRR as-implemented.

---

## 00. Métadonnées, baseline Git et autorisation Morris

| Item | Valeur |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| Branche documentaire locale | `docs/akg-m5-l2-d0-decision-readiness` @ `94c7a30d` (= `origin/main`) |
| Worktree | Isolé — **P6 dirty non touché** |
| Autorisé ce cycle | Création de **ce** fichier · Review Pack FULL · handoff L3 borné |
| Non autorisé / non effectué | Code Product · schéma · migration · cutover · Roadmap/Doctrine/PRR · commit/push/PR/merge projet · L2 Delivery · L3/L4/L6 start · v3/REAL/SHADOW |

**L1/A09 :** PR #609 + #610 **MERGED / POST-MERGE VERIFIED**.
**M5-A :** **CLOSED BY MORRIS** (périmètre documentaire).
**AKG-M5 :** **GLOBAL OPEN**.
**L2-Q0 / L2-Q1 :** COMPLETE · Critical Review **PASS WITH GOVERNED RESERVES** (handoffs).

---

## 01. Objet, scope, hors scope

### Objet

Produire le **Decision & Delivery Readiness Record** L2 permettant de préparer le **premier lot Delivery L2** sans relancer les investigations Q0/Q1.

### Scope

- Formalisation des orientations Morris (conversation) vs recommandations vs gates.
- Registre D1–D9 avec statuts réels (≠ ADOPTED global).
- H1 / H4 / R-CUT-01 : conditions, exit proofs, stops.
- Contrat candidat L2-D1…D4/L6 + challenge découpage D1↔D2.
- Matrice QA Q1–Q15 (existence ≠ PASS).
- Dette / exit / impacts documentaires futurs (sans edit PRR/Roadmap).

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
| M4 | `01`/`02`/`03` · `06` capacités · `08` storage · `09` options — **snapshots historiques requalifiés via Git/code Q0/Q1** |
| Doctrine | `sfia-v3-framing/26` · `30`–`37` applicables (dont 34/37) |
| PRR CURRENT | README · `01`/`03`/`04`/`06`/`08`/`09` · manifest — **non modifiés** |
| Preuves cycle | FULL handoff **L2-Q1** tip `aa89c20a…` · inventaires Q0 (D1 131 / OA 43 / prod UNKNOWN) |

**Règle R23 :** Git/code/preuves Q0/Q1 > synthèses M4 datées.

---

## 03. Trajectoire AKG-M5 et capacité O-01

| Élément | Statut |
| --- | --- |
| Capacité ancre | **O-01** — Créer, trouver, comprendre et reprendre un Project (C1) |
| L1/A09 | MERGED — `ProjectCycleAuditPort` réutilisé ; adapter D1 atomic **transitoire** |
| L2 | Préparation Q0/Q1 **COMPLETE** · Delivery **NOT AUTHORIZED** |
| L3 Attempt / L4 ownership / L6 retire | Gates **distincts** ; non démarrés |
| Runtime v3 | **NON ADOPTED** |

**Trajectoire candidate (≠ plan autorisé) :** L2-D0 (ce record) → L2-D1 (complétude O-01 Product) → L2-D2 (cutover exclusif) → L2-D3 data si exigé → L2-D4/L6 retire structurant sous GO dédié.

---

## 04. AS-IS pertinent et frontières Product/D1

| Dimension | AS-IS (CODE VERIFIED @ `94c7a30d`) | TO-BE cible Product |
| --- | --- | --- |
| Create | Dual UI : D1 `/projects/new` + `/nouvelle-demande` **et** Studio `/studio/projects/new` | **Un** path create OA/Studio |
| List/open | `/workspace` + `/projects/[id]` **et** Studio | Studio-only + policy legacy |
| IDs | `proj-*` vs `prj:*` · overlap local **0** (Q0) | `prj:*` SoT ; legacy deny/redirect (défaut) |
| MethodMode | Colonne + badges D1 ; hold mémoire ACTIVE | Archive historique ; **pas** doctrine OA |
| Persistence Project | `d1.sqlite` îlot + `oa-product.sqlite` | **Product SQLite** SoT |
| Audit create Studio | Project/LPS SQLite ; `ProjectAuditJournalPort` souvent **Memory** (`localProjectComposition`) ; matérialisation peut utiliser `SqliteProjectAuditJournal` | Garantie journal Product **à COMPLETE** avant retire A09 D1 « propre » |
| Dual-write | Absent | **Reste interdit** |

Frontières : OPS1/FinOps/REAL **hors** périmètre L2 core sauf dépendance bloquante démontrée (aucune bloquante prouvée pour O-01 ce record).

---

## 05. Orientations Morris déjà actées en conversation

**Légende de statut :**
**A** = exprimée Morris conversation · **B** = orientation construction validée non tip Git · **C** = recommandation ChatGPT/Cursor · **D** = option ouverte · **E** = gate technique non satisfait · **F** = GO exécution distinct.

| # | Orientation | Provenance | Portée | Limites | Critères techniques | Statut Git | Gates restants | Classe |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M-01 | OA = cible unique capacité Product Project | Conversation Morris (L2) | SoT Project / O-01 | ≠ retire D1 immédiat | Create/list/get/resume OA ; single writer cible | **Non tip** jusqu’intégration de ce record | Delivery GO ; freeze ≠ D0 | **A → B (ce record)** |
| M-02 | Ne pas conserver composants D1 par inertie | Conversation Morris renforcée | Classifications KEEP/RETIRE | ≠ delete sans preuves | Consumers + usage + exit | Non tip | H4/D4 ; L6 GO | **A → B** |
| M-03 | Adaptation / réécriture ciblée OK si trajectoire Product propre | Conversation Morris | Gaps O-01 utiles | ≠ rewrite massif | Delta prouvé vs dette évitée | Non tip | Scope Delivery | **A → B** |
| M-04 | **H1** MethodMode historique ≠ doctrine OA | Conversation (**Option A**) | Pas de MethodMode Product | Hold AS-IS conservé | Pas de champ/runtime OA ; archive colonne | Non tip | Formal H1 + freeze UI | **A → B** · **E** hold ACTIVE |
| M-05 | **H4** preuves pertinentes avant migration/retrait ; volumes locaux ≠ migration exhaustive | Conversation | Inventaire / policy | Prod UNKNOWN | Couverture env. définie ; pas delete sans policy | Non tip | **R-VOL-01 OPEN** | **A → B** · **E** |
| M-06 | Identités : mapping sélectif **seulement si nécessaire** | Conversation | `proj-*` / deep links | Pas mapping implicite | Deny/redirect défaut ; C si prouvé | Non tip | **D4** explicite | **A → B** |
| M-07 | Cutover : dual-write interdit ; rollback **write** D1 interdit sans réconciliation prouvée | Conversation + amend Q1 | R-CUT-01 | Design ≠ exécution | Freeze → OA exclusive → verify ; RO fallback OK | Non tip | **R-CUT NOT PROVEN** | **A → B** · **E** |
| M-08 | Option L2 : OA seul en cible ; conservation D1 **conditionnelle / temporaire** | Conversation | Scénario A(+B court) | B pas obligatoire | Exit + owner si archive | Non tip | D2 stratégie | **A → B** |

**Interdits de confusion :** orientation ≠ preuve technique · recommandation ≠ adoption · GO documentaire ≠ GO Delivery · proposition de suppression ≠ suppression autorisée.

---

## 06. Registre de décisions D1–D9

| ID | Question | Évidence Q0/Q1 | Décision Morris déjà exprimée ? | Recommandation (≠ adoption auto) | Options alternatives | Statut Git | Gate technique | Impact Product | Dette / exit | Décision encore nécessaire | Livraison |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **D1** | Actifs historiques indispensables ? | O-01 via OA paths ; ports t-a7/OA utiles ; îlot D1 = dual UX | **Oui (orientation)** : îlot non indispensable par principe ; ne pas garder par inertie | **Indispensables = OA + ports Product** ; D1 UI/services **pas** KEEP | Conserver îlot temporaire vs retire après preuves | Candidate (ce doc) | Consumers + preuves usage ; L6 pour delete | Clarifie SoT | Dual UX → exit L2-D2 | **Formaliser “ports-only indispensable” en tip** | Prep / L2-D2 / L6 |
| **D2** | Stratégie retrait ? | A/B/C Q1 ; A-leaning | **Oui (orientation)** conservation conditionnelle ; A non décrétée exécutable | **A** cible finale ; **B** court si consultation prouvée ; **C** si deep-link continuity | Archive permanente (rejetée) ; C batch 131 (rejetée) | Candidate | H4 policy ; D4 ; R-CUT | Définit chemin | B sans owner **interdit** | **Adopter label A/(B)/(C) sous GO** | L2-D2…L6 |
| **D3** | Adaptations OA nécessaires ? | Create/list/open PARTIAL ; match ABSENT ; audit Memory | **Oui (orientation)** rewrite ciblée OK | **COMPLETE audit durable** ; **ne pas** recréer context-match par défaut | Recréer match ; accepter Memory | Candidate | D5 + tests O-01 | Comble gap audit | Memory gap → D5 | **Scope exact L2-D1** | **L2-D1** |
| **D4** | Identités `proj-*` ? | Deep links D1 vs Studio ; overlap 0 | **Oui (orientation)** mapping sélectif si besoin | **Deny/redirect** défaut ; **pas** map implicite ; pas redirect vers projet non équivalent | Mapping C justifié | Candidate | Policy URL + tests | UX legacy | Liens morts vs map risk | **Policy explicite** | L2-D2 / D3 |
| **D5** | Audit Product manquant ? | Studio create : Memory journal ; matérialisation Sqlite possible | Orientation retire « propre » implique garanties | **COMPLETE** durabilité journal OA sur path create Studio (ou acceptation documentée Memory) | Accepter Memory ; nouveau port (**non** défaut) | Candidate | Contrats distincts ; tests Q5 | Traçabilité O-01 | Avant retire A09 D1 | **Niveau de garantie contractuel** | **L2-D1** |
| **D6** | Conservation / destruction ? | Local 131/43 ; prod UNKNOWN | **Oui (orientation)** pas migration exhaustive ; preuves avant | Policy : qualify → archive temp / migrate sélectif / conserve obligation / destroy **après** | Delete immédiat (interdit) | **OPEN** | **H4 / R-VOL-01** | Bloque destructive | Undefined ⇒ no delete | **Owner + policy** | Avant L2-D3 / retire |
| **D7** | Cutover / R-CUT-01 ? | Design Q0 + amend Q1 | **Oui** : no dual-write ; no write rollback sans réconciliation | **Adopter amendement** comme protocole candidat | Re-enable writes (STOP) | Candidate design | **NOT PROVEN** | Sécurité bascule | Divergence histo | **Acceptation protocole** ≠ exécution | **L2-D2** sous GO |
| **D8** | Premier lot Delivery ? | Trajectoire Q1 | Orientation OA unique | Voir §13 : **L2-D1** d’abord (non destructif) puis **L2-D2** | Lot unique D1+D2 | Candidate | Préconditions D5/D4/H4-min | O-01 | Dual UX jusqu’à D2 | **GO Delivery borné** | L2-D1 |
| **D9** | Gates avant GO Delivery ? | Réserves Critical Q1 | — | Séparer : prep · Delivery non destructif · freeze/readers · data · retire | Tout-en-un | OPEN list | Critical Review + Morris | — | — | **Checklist §18** | Tous lots |

**Statut agrégé D1–D9 :** **NOT GLOBALLY ADOPTED.** Orientations M-01…M-08 **consommées documentairement** ici ; plusieurs items restent **PENDING MORRIS** pour adoption tip / GO exécution.

---

## 07. H1 MethodMode

| Élément | Qualification |
| --- | --- |
| Orientation | MethodMode = **donnée historique D1 archive-only** ; **aucune** propagation doctrinale OA (Morris Option A) |
| AS-IS | Colonne SQLite D1 · badges/claims · `NewProjectForm` injecte gouvernance · `selectMethodMode` **sans** UI prod · **hold ACTIVE** in-memory |
| Disposition candidate | Archive valeurs si besoin consultation · retire choix/runtime UI après freeze · **pas** coexistence doctrinale OA |
| Delivery | **Ne pas contourner** MethodModeHold · pas d’extinction runtime D1 dans L2-D1 |
| Exit extinction runtime | Après freeze writers + policy H1 formalisée + tests « MethodMode absent Product » (Q6) + GO retire UI |
| Statut | Orientation **B (ce record)** · gate technique hold **E OPEN** · exécution **F** |

---

## 08. H4 volumes, données et politique de conservation

| Fait | Statut |
| --- | --- |
| Local Q0 (non re-scanné) | D1 **131** projets · OA default **43** · overlap IDs **0** |
| Production | **UNKNOWN** |
| R-VOL-01 | **OPEN** |
| H4 PASS ? | **NON** — couverture pertinente non démontrée |

**Interprétation obligatoire :** 131 ≠ « à migrer » ≠ « à conserver indéfiniment » ≠ « supprimables ».

### Options de disposition (D6) — aucune exécutée

1. **Supprimer** uniquement après qualification + policy + GO.
2. **Archive temporaire RO** (scénario B) avec owner, périmètre, durée/critère, exit → A.
3. **Migration sélective** (C) si continuité prouvée.
4. **Conserver** sous obligation démontrée (légale/ops/audit).

### Couverture environnementale minimale avant actes destructifs

| Environnement | Attendu |
| --- | --- |
| Dev/local fixtures | Identifiables sans exposition PII ; séparables |
| Local historique utile | Qualifié (échantillon / heuristique documentée) |
| Inconnus | Traités **conservateurs** (no delete) |
| Production / staging représentatif | **UNKNOWN** ⇒ pas d’hypothèse « prod zéro » pour retire/archive obligatoire |

**Owner / autorité policy :** **UNASSIGNED** — à désigner par Morris (Pilote par défaut temporaire tant que non nommé).
**H4 non PASS** tant que couverture pertinente + policy conservation/destruction non démontrées.
**Conséquence Delivery :** un lot **OA non migratoire** (L2-D1) **peut** être admissible sous GO adapté **sans** fermeture globale H4 ; **aucune** bascule destructive / archive obligatoire / retrait ne peut s’appuyer sur « prod zéro ».

---

## 09. Identités et deep links

| Sujet | Décision candidate (≠ exécutée) |
| --- | --- |
| Espaces | `proj-*` (D1) ≠ `prj:*` (OA) — **pas** d’équivalence implicite |
| Défaut | **Deny/redirect** legacy → Studio entry (liste/création) — **pas** vers un Project « équivalent » inventé |
| Mapping C | Uniquement si besoin démontré (bookmarks/ops) + sémantique + authz + verify + rollback lecture |
| Deep links D1 | `/projects/${id}`, workspace, intake |
| Deep links OA | `/studio/projects/${id}` |
| Exit | Tests Q7/Q10 ; pas de dual-resolve silencieux |

---

## 10. Audit Product, durabilité et D1 A09

### Contrats à garder **distincts**

| Contrat | Rôle | Disposition |
| --- | --- | --- |
| `ProjectCycleAuditPort` (t-a7) | Append phases cycle | **KEEP** (L1) |
| `LocalProjectCreationAuditPort` | Events création locale | **KEEP** / ADAPT |
| `ProjectAuditJournalPort` | Journal événements OA Project | **KEEP** ; impl Memory vs Sqlite |
| `BoundedAtomicAuditStore` / `d1_atomic_audit` | Adapter phases D1 | **HARVEST** port / **RETIRE LATER** store — **pas** suppression auto |
| `d1_audit_events` | Trail intake D1 | Archive/RO selon H4 |
| `oa_audit_events` | Journal Product partagé | **KEEP** quand Sqlite |

### D5 — niveau de garantie demandé (contractuel candidat)

| Question | Réponse candidate |
| --- | --- |
| Événements contractuels (create path) | Au minimum : enregistrements d’audit liés à **création Project** (et LPS initial si émis sur le même journal) sur le path Studio create |
| Quand persister | **Avant** ack succès utilisateur create **si** garantie « durable » choisie ; sinon documenter Memory-acceptable explicitement |
| Erreurs bloquantes | Échec persist journal **si** mode durable contractuel → **fail create** (pas de Project « silencieux sans trace ») — détail oracle en L2-D1 |
| Atomicité | Project/LPS déjà SQLite ; journal doit être **cohérent** avec le store Product (même DB `oa_audit_events` préféré — **pas** nouvelle table) |
| Garanties manquantes AS-IS | Default composition `MemoryProjectAuditJournal` sur create/list local ; Sqlite journal sur **matérialisation** si `productSqlite` — **CODE VERIFIED** (`localProjectComposition.ts`, `service.ts` ~535–541) |
| Tests nécessaires | Q5 : durable append + fail path + restart readable ; boundaries L1 conservées |
| Fusion de contrats | **Interdite** sans démonstration + GO (ne pas fusionner Cycle port ↔ OA journal) |

**Retrait A09 D1 « propre »** conditionné à COMPLETE D5 (ou acceptation Morris Memory-acceptable **écrite**).

---

## 11. R-CUT-01 et rollback

**Statut :** protocole **conçu** (Q0) + **amendé** (Q1) · **non accepté tip** · **non exécuté** · **NOT PROVEN**.

### Principes (orientation Morris + amendement)

- **Dual-write D1/OA : FORBIDDEN.**
- Après activation writes OA exclusives, **réactiver writers D1** ⇒ risque de **divergence d’historiques** → **STOP** sans réconciliation **prouvée** + GO distinct.
- Rollback **read-only** (UI archive, redirect lecture) : admissible borné.
- Restore backup fichier **pre-freeze** : admissible avant fenêtre exclusive.
- Rollback **write** D1 : **interdit** par défaut.

### Étapes protocole candidat (design-only)

| # | Étape | Precondition | Action future | Preuve | Stop | Rollback type | Owner | Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Inventory + impact accepted | Q1 Critical | Consommer matrices | Pack Q1 | Écart Git | — | Morris | D0/Critical |
| 2 | H1 formal | Orientation A | Tip + tests Q6 | Doc+tests | Hold bypass | — | Morris | H1 |
| 3 | H4 policy | Owner nommé | Policy écrite | Doc | Delete sans policy | — | Morris | H4 |
| 4 | D4 identities | — | Deny/redirect (±C) | Tests Q7 | Map implicite | — | Morris | D4 |
| 5 | Backup/hashes | Avant freeze | Snapshot stores | Checksums | Skip backup | Restore file | Ops/Pilote | Cutover |
| 6 | Freeze writers D1 | 1–5 | Disable create/intake writes | Q8 no INSERT | Writer leak | **Not** unfreeze write | Delivery | L2-D2 |
| 7 | OA exclusive create | D5 si requis | Studio only | Q1/Q4/Q9 | Dual path | UI RO | Delivery | L2-D2 |
| 8 | Reader cutover | D4 | Redirects | Q7/Q15 | Soft 404 chaos | Redirect adjust | Delivery | L2-D2 |
| 9 | Verify | 6–8 | Smoke DET | Q8–Q12 | Fail oracle | RO fallback | QA | L2-D2 |
| 10 | Archive RO si B | H4+D6 | Mount RO | Inventory | Archive sans exit | Unmount | Owner | L2-D3 |
| 11 | Retire structurant | Consumers=0 | Delete code/store | Grep/import | Early delete | N/A (GO L6) | Morris | L2-D4/L6 |

---

## 12. Classifications et retrait D1

Synthèse Q1 (recommandations ≠ delete) :

| Classe | Exemples | Règle |
| --- | --- | --- |
| **KEEP** | Ports Product (`ProjectCycleAuditPort`, OA Project/LPS, Sqlite journal) | Uniquement capacités Product utiles |
| **REPLACE** | Routes/UI/commands/repo D1 create-list-open | Par Studio/OA |
| **COMPLETE** | Durabilité `ProjectAuditJournalPort` create Studio | Avant retire A09 D1 propre |
| **HARVEST** | Patterns confirmation/intake ; port atomic | Réutiliser sans îlot |
| **ARCHIVE / RETIRE LATER** | `d1_audit_events`, assignments write-only, context-match, tests D1 | Sous H4/usage |
| **RETIRE** (runtime) | MethodMode UI/runtime après freeze | H1 |

**Anti-KEEP :** pas de KEEP d’implémentation D1 « pour éviter de toucher au code ».
**RETIRE LATER ≠ autorisation de suppression.**

---

## 13. Contrat candidat Delivery L2

### L2-D0 (ce cycle)

Decision / Delivery Readiness **documentaire seulement**.
**Exit :** ce record + Critical Review + (éventuel) GO Git Integration **distinct**.

### Challenge L2-D1 vs L2-D2 — un lot ou deux ?

| Critère | Lot unique D1+D2 | Lots séparés D1 puis D2 |
| --- | --- | --- |
| Capacité utilisateur | O-01 « Product-only » plus tôt | O-01 complété d’abord ; dual UX reste jusqu’à D2 |
| Risque | Blast radius élevé (complétude + freeze) | Isole non-destructif vs cutover |
| Sécurité / H4 | Exige policy H4/D4 avant même complétude audit | D1 admissible **sans** H4 global PASS |
| Réversibilité | Freeze difficilement réversible en write | D1 facilement revertable (feature flags / compose) |
| Phases transitoires | Une grosse fenêtre | Deux fenêtres contrôlées |
| Dette | Rembourse dual UX plus vite | Dual UX persiste entre D1 et D2 |
| Rollback | Complexe (mélange) | D2 rollback = RO only (amend) |

**Conclusion candidate :** **deux lots séparés** sous GO distincts.
- **L2-D1** = plus petite unité **non destructive** servant la complétude O-01 Product (audit + parcours).
- **L2-D2** = cutover exclusif (freeze + readers).
Un **seul GO Morris** *peut* séquencer D1→D2 dans la même autorisation **si** D4 + H4-policy-min + D5 + amend R-CUT sont explicitement inclus — **sans** fusionner les exit proofs.

### L2-D1 — Product O-01 completeness (candidat)

| Champ | Contenu |
| --- | --- |
| But utilisateur | Créer / lister / ouvrir / reprendre un Project **fiable** sur Studio/OA |
| Paths prévisionnels | `app/lib/oa/project/**` · `vertical-slice-core/localProjectComposition` · `vertical-slice-runtime/service` · `features/pre-m6-product-ui` · `app/studio/**` · tests associés |
| Invariants | Pas de dual-write · pas de MethodMode OA · pas de nouveau port/table sans GO · contracts audit distincts |
| Dépendances | L2-D0 Critical PASS · D5 scope tranché · L1 boundaries |
| Tests réutilisables | OA create/list/get · durability/resume · pre-m6 UI · import boundaries |
| Tests manquants | Oracle audit durable create (Q5) ; éventuellement gaps UX onboarding ciblés |
| Stops | Besoin migration/H4 destructive · dual-write · fusion ports · contournement hold |
| Exit proof | Q1–Q6 DET au scope · D5 satisfait ou Memory-acceptable documenté · PRR sync si sémantique |
| Dette créée | Dual UX encore présent |
| Dette remboursée | Gap audit Memory sur create |
| Gate Morris | **GO Delivery L2-D1** distinct |

### L2-D2 — Exclusive Product cutover (candidat)

| Champ | Contenu |
| --- | --- |
| But utilisateur | Plus de création D1 ; navigation legacy gouvernée vers Studio |
| Paths | Routes `projects/**` · `workspace` · `nouvelle-demande` · `features/d1/**` · commands/repo writers · nav shell |
| Invariants | Writers D1 frozen · no dual-write · R-CUT amend · D4 policy |
| Dépendances | L2-D1 exit · H1 formal · H4 **policy min** (même si prod UNKNOWN) · D4 · backup design |
| Tests | Q7–Q9 · Q12 · Q14–Q15 · no D1 INSERT probe (sans mutation user DB) |
| Stops | Unfreeze write · delete store · « prod zéro » |
| Exit proof | No D1 writes · redirects · RO fallback documenté · Q8/Q9 |
| Dette remboursée | Dual UX create |
| Gate | **GO Delivery L2-D2** |

### L2-D3 — Historical data disposition

Seulement si H4/D4/D6 l’exigent (archive RO et/ou C sélectif).
**Gate :** GO data distinct.

### L2-D4 / L6 — Retrait structurel final

Delete code/store après consumers clear.
**Gate :** **GO Morris dédié** — jamais dans le même souffle que freeze.

---

## 14. Matrice de non-régression (Q1–Q15)

| ID | Contrôle | Existant ? | À écrire ? | Exécuté ce cycle ? | Niveau | Applicable |
| --- | --- | --- | --- | --- | --- | --- |
| Q1 | Product O-01 create | Oui (OA/UI) | Oracles D5 si besoin | **Non** | COVERAGE VERIFIED (présence) | L2-D1 |
| Q2 | List/get | Oui | — | Non | COVERAGE VERIFIED | L2-D1 |
| Q3 | Resume après restart | Oui (durability) | — | Non | COVERAGE VERIFIED | L2-D1 |
| Q4 | OA idempotence | Oui | — | Non | COVERAGE VERIFIED | L2-D1 |
| Q5 | Audit durable + erreurs | Partiel | **Oui** si COMPLETE | Non | **KNOWN GAP** | L2-D1 |
| Q6 | Absence MethodMode doctrine OA | Partiel | Assert explicite | Non | CODE/DOC | L2-D1/D2 |
| Q7 | Legacy URL policy | Non cutover | **Oui** | Non | DOCUMENTED need | L2-D2 |
| Q8 | Absence écriture D1 post-freeze | Non | **Oui** | Non | — | L2-D2 |
| Q9 | Absence dual-write | Design | Assert | Non | — | L2-D2 |
| Q10 | Identités / histo | Inventaire Q0 | Policy tests | Non | CODE VERIFIED IDs | D4 |
| Q11 | Conservation/élimination autorisée | Non | Policy+preuve | Non | **H4 OPEN** | D3/L6 |
| Q12 | Reversibility / RO fallback | Design R-CUT | Harness | Non | DOCUMENTED | L2-D2 |
| Q13 | PRR conformance | PRR CURRENT | Sync post-comportement | Non | — | Post-Delivery |
| Q14 | Import boundaries / no stale | Oui (L1) | Étendre post-retire | Non | COVERAGE VERIFIED L1 | L1/L6 |
| Q15 | NR UI + conversationnel | pre-m6 partiel | Selon delta | Non | PARTIAL | L2-D1/D2 |

**Pas de PASS fictif.** Liste ≠ BEHAVIOR PROVEN cutover.

---

## 15. Exit proofs et stops

### Exit proof L2-D0 (ce cycle)

| Critère | Status |
| --- | --- |
| Orientations Morris formalisées avec classes A–F | SATISFIED (candidate) |
| Registre D1–D9 complet, non ADOPTED global | SATISFIED |
| H1/H4/R-CUT conditions + amend | SATISFIED design |
| Challenge D1/D2 documenté | SATISFIED |
| Contrat Delivery candidat | SATISFIED |
| Matrice Q1–Q15 | SATISFIED |
| Zéro mutation Product / PRR / Roadmap | SATISFIED |
| Fichier 04 créé localement | SATISFIED |
| Git Integration / Delivery | **NOT** |

### Stops globaux

Git Truth incohérent · collision P6 · H4 PASS inventé · D1 SAFE TO DELETE · R-CUT PROVEN inventé · dual-write · delete sans policy · Delivery lancé sans GO · nouveau stockage/port par défaut · dette temporaire sans exit.

---

## 16. Dette et remboursement

| Dette | Exit |
| --- | --- |
| Dual UX D1 + Studio | L2-D2 |
| MethodMode runtime/UI | H1 + L2-D2 |
| Memory OA audit create | D5 / L2-D1 |
| R-VOL-01 / prod UNKNOWN | Policy H4 ou inventory GO |
| Deep links `proj-*` | D4 + L2-D2/D3 |
| Adapter `d1_atomic_audit` | Après path Product A09 + unused |
| Archive B sans owner/exit | **Interdit** |
| Conversation ≠ tip Git | Git Integration de ce record (GO distinct) |

---

## 17. R23 / R24 et impacts documentaires

### R23

| Niveau | Usage |
| --- | --- |
| DOCUMENTED | Orientations Morris · C1 · ce record |
| CODE VERIFIED | Routes, writers, audit wiring, IDs @ `94c7a30d` |
| COVERAGE VERIFIED | Suites existantes **citées** — non re-run cutover |
| BEHAVIOR PROVEN | **Non** pour cutover / retire / H4 prod |
| KNOWN GAP | Prod volumes · Memory vs Sqlite create · valeur context-match |

### R24

**NO PRODUCT SEMANTIC IMPACT** ce cycle.
**PRR / Roadmap / Doctrine : non modifiés.**

Mises à jour **futures** si Delivery comportemental :

| Artefact | Quand |
| --- | --- |
| PRR 01 / 03 | Parcours create/list/open changés |
| PRR 04 | Dépendances D1 retire / freeze |
| PRR 06 | Persistance/restart audit |
| PRR 08 | Preuves Q1–Q15 |
| PRR 09 | Réserves H4/R-CUT |
| Manifest/digests | Après revue de contenu |
| Roadmap tip | Après review + **GO Git distinct** |

Snapshots TIP historiques Roadmap/PRR : ne pas les lire comme statut CURRENT s’ils sont explicitement HISTORICAL.

---

## 18. Gates Morris encore nécessaires

| Gate | Objet | Bloque |
| --- | --- | --- |
| ChatGPT Critical Review L2-D0 | Qualité de ce record | Suite |
| Morris — Git Integration `04` | Tip / PR docs | Visibilité main |
| Morris — adoption D2/D4/D5/D6/D7 labels | Stratégie + policies | Périmètre Delivery |
| **GO Delivery L2-D1** | Complétude O-01 non destructive | Code Product |
| **GO Delivery L2-D2** | Freeze / readers | Cutover |
| Owner + **H4 policy** | Conservation | D3 / destructive |
| **GO L2-D3** | Data disposition | Archive/C |
| **GO L6 / L2-D4** | Retire structurant | Delete |
| Jamais auto | Delivery / merge / REAL / v3 | — |

---

## 19. Prochaine capacité / trajectoire

1. **Critical Review** ChatGPT de ce pack + fichier `04`.
2. Morris : GO Git Integration documentaire **et/ou** tranchage D2/D4/D5/D6/D7.
3. Sous GO : **L2-D1** (O-01 + audit COMPLETE).
4. Sous GO distinct : **L2-D2** cutover.
5. Data / retire : seulement sous gates H4/D6/L6.

**Prochaine capacité utilisateur :** O-01 Product-only (create/find/understand/resume) sans dépendance opérationnelle à l’îlot D1 — **après** exit L2-D2, pas après D0.

---

## 20. Verdict

**L2-D0 DOCUMENTARY DECISION PACK COMPLETE — READY FOR CHATGPT CRITICAL REVIEW — NOT GIT INTEGRATED — DELIVERY L2 NOT AUTHORIZED**

- Orientations Morris M-01…M-08 formalisées (conversation → record candidat).
- D1–D9 **enregistrés** avec statuts réels ; **pas** d’adoption globale inventée.
- H4 / R-VOL-01 **OPEN** ; R-CUT-01 **NOT PROVEN** ; H1 hold **ACTIVE**.
- Premier Delivery recommandé : **L2-D1** (séparé de **L2-D2**).
- Aucune exécution Product ; aucun claim SAFE TO DELETE / H4 PASS / MIGRATION AUTHORIZED.

---

*Document de construction SFIA Studio — L2-D0 Decision & Delivery Readiness ; publication Git de ce record = candidate jusqu’à intégration distincte sous GO Morris.*

```

---

## 8. Matrice D1–D9 (extrait opérationnel pack)

Voir §06 du document 04 (table complète). Synthèse de statut :

| ID | Statut réel |
|---|---|
| D1 | Orientation formalisée candidat — ports/OA indispensables ; îlot non KEEP |
| D2 | Reco A-leaning + B court conditionnel — **PENDING adoption label** |
| D3 | Reco COMPLETE audit ; pas match défaut — **PENDING scope L2-D1** |
| D4 | Orientation mapping sélectif + reco deny/redirect — **PENDING policy** |
| D5 | Reco COMPLETE durable — **PENDING GO L2-D1** |
| D6 | **OPEN** (H4 policy) |
| D7 | Amend R-CUT candidat — **NOT PROVEN** |
| D8 | Reco L2-D1 puis L2-D2 — **PENDING Delivery GO** |
| D9 | Gates listés — **OPEN** |

**NOT GLOBALLY ADOPTED.**

---

## 9. Décisions vs recommandations

| Type | Exemples |
|---|---|
| A/B Morris conversation formalisées | M-01…M-08 (OA unique, anti-inertie, H1 A, H4 preuves, IDs sélectifs, no dual-write, conservation conditionnelle) |
| C Recommandations Q1 | A-leaning ; COMPLETE audit ; deny/redirect défaut ; lots D1 puis D2 |
| D Options ouvertes | Archive B durée ; mapping C ; Memory-acceptable vs COMPLETE |
| E Gates techniques | H4/R-VOL · R-CUT · hold H1 · D5 oracles |
| F GO exécution | Delivery L2-D1/D2 · data D3 · L6 retire · Git Integration `04` |

---

## 10. H1 / H4 / R-CUT-01

| Gate | Statut |
|---|---|
| H1 | Orientation archive-only OA ; hold ACTIVE ; pas de bypass Delivery |
| H4 | Local 131/43 rapportés ; prod UNKNOWN ; **non PASS** ; policy UNASSIGNED |
| R-CUT-01 | Design amendé ; dual-write forbidden ; write rollback forbidden sans réconciliation ; **NOT PROVEN** |

---

## 11. Impact direct / transitif (candidats non exécutés)

| Changement futur | Impact | Preuve |
|---|---|---|
| COMPLETE audit Studio create | Traçabilité O-01 | Q5 |
| Freeze writers D1 | Fin dual create | Q8/Q9 |
| Redirect legacy routes | Deep links | Q7 |
| Retire MethodMode UI | Alignement H1 | Q6 |
| Retire structurant D1 | L6 only | Consumers=0 |

---

## 12. Conservation / retrait

- Conserve/destroy/archive/migrate **seulement** sous policy D6 + H4.
- Pas d’hypothèse prod zéro.
- B archive : owner + TTL/exit obligatoires.
- Retire structurant : GO L6 dédié.

---

## 13. Audit / Product persistence

- Project/LPS Product SQLite durable.
- Journal OA create souvent Memory ; matérialisation peut être Sqlite.
- Contrats Cycle / LocalCreate / OA journal / atomic D1 **restent distincts**.
- Pas de nouvelle table/port par défaut.

---

## 14. Options L2-D1 / L2-D2 + contrat

**Challenge :** lots **séparés** retenus (non-destructif vs cutover). Lot unique possible seulement sous GO Morris unique **séquencé** avec préconditions D4+H4-min+D5+R-CUT explicites — exit proofs non fusionnés.

Détail lots : §13 document 04.

---

## 15. Matrice QA Q1–Q15

Voir §14 document 04. Aucun test Product exécuté ce cycle (DOC). Aucun PASS fictif.

---

## 16. Dette / exit

Voir §16 document 04 (dual UX → D2 ; Memory audit → D5 ; R-VOL → H4 ; etc.).

---

## 17. R23 / R24

- R23 : DOCUMENTED / CODE VERIFIED / COVERAGE VERIFIED (présence) / KNOWN GAP (H4, Memory audit) ; **pas** BEHAVIOR PROVEN cutover.
- R24 : **NO PRODUCT SEMANTIC IMPACT** ; PRR/Roadmap non modifiés ; sync future post-Delivery.

---

## 18. Réserves Critical D0

1. D1–D9 non tip / non ADOPTED global.
2. H4 OPEN — bloque destructif, pas nécessairement L2-D1.
3. D5 non implémenté.
4. R-CUT non exécuté.
5. Owner policy conservation UNASSIGNED.
6. Fichier `04` local untracked — **NOT GIT INTEGRATED**.

---

## 19. Gates Morris

Critical Review → (GO Git Integration `04`) → tranchage D2/D4/D5/D6/D7 → **GO L2-D1** → **GO L2-D2** → (D3) → **GO L6**.

---

## 20. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | **HANDOFF UPDATED — REMOTE VERIFIED** |
| Commit FULL | `8fcbfa5f180b3ea9dfcc9b1745b0dd854158db84` |
| Blob FULL | `6fd5171e85fc05f5e876ecdce9e393a6f3f00dd0` |
| Parent | `aa89c20a047dea6500700db0c9a11c43b702912c` |
| Tip distant courant | `git rev-parse origin/sfia/review-handoff` |
| Projet | `04` local untracked @ baseline `94c7a30d` ; pas de push/PR |

---

## 21. Exit proof D0

| Critère | Status |
|---|---|
| Git Truth aligned | SATISFIED |
| Document 04 créé + contenu intégral dans pack | SATISFIED |
| D1–D9 registre | SATISFIED |
| H1/H4/R-CUT formalisés | SATISFIED (gates OPEN) |
| Challenge D1/D2 | SATISFIED |
| Zéro mutation Product/PRR/Roadmap | SATISFIED |
| Delivery authorized | **NO** |

---

**Fin pack FULL — contenu 04 intégral inclus ; SYNTHESIS-ONLY interdit.**
