# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | origin/main @ `1d09e4159932b3885817911e10a2d29a82ae9ea7` |
| **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
| **Timestamp maintenance** | 2026-08-13 02:14:45 +0200 (Europe/Paris) |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` |
| **Sources** | Git courant · handoff convergence tip `c5b417dc13fa3700787d28571e5b5abe0599ae98` blob `31a5db07fba2555a59ee8c65ad76b537bbd8a73d` · framing `30`–`37` · code `projects/sfia-studio/app/**` |
| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ v3 runtime ADOPTED · ≠ Cursor REAL authorized |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B2. Destination (boucle produit v3)

Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
Fondations V3-F01…F15 = couverture doctrine progressive (B9).

## B3. Point de départ factuel

### Sur main (`1d09e4159932b3885817911e10a2d29a82ae9ea7`)

| Capacité | État observé |
| --- | --- |
| `/studio` Project create/view | WIRED — process-local Memory T-A1 |
| F1 Nora chat | WIRED — contextual assistant |
| F2 qualification / proposal / Morris gate | WIRED — process-local + demo authority |
| F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
| execution-run D2-D | EXISTS — **non** branché F1–F3 |
| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
| Product persistence | **NOT_SELECTED** |
| Cursor REAL depuis Nora | **0** |
| Gate D | **NOT CONSUMED** |

### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)

| Élément | État |
| --- | --- |
| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
| Classification | Observation / prérequis candidat — **promotion = Decision Required** |

### Recommandation d’audit (≠ décision)

Option 1 — OA Native Backbone + Harvest OPS1 Cursor = **RECOMMENDATION — NOT DECIDED**.

## B4. Asset disposition matrix (actuelle)

Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.

| Actif | Preuve | Classification | Justification courte |
| --- | --- | --- | --- |
| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
| T-A1 Project/LPS | Memory store + `/studio` | **COMPLETE** | Bonne base ; manque durabilité |
| T-A2 Cycle/CKC | wired ; F2 qualify uses CKC | **ADAPT** / **COMPLETE** | Qualify OK ; CycleInstance UI non branché |
| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
| Persistence Memory OA | factories Memory* | **REPLACE** (adapters durables derrière ports) | Decision Required tech |

## B5. Gap map → boucle cible

| Gap | Statut | Bloque |
| --- | --- | --- |
| Project/LPS durable | MISSING | M1, contextSnapshot |
| GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
| CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
| CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
| live contextSnapshot | BLOCKED (no durable project) | F2 final / contracts |
| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
| Cursor projection canonique | PARTIAL | M3/M4 |
| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
| Critical Ack UI | CANDIDATE unwired | M4 |
| Evidence durable | MISSING | M5 |
| ReviewBundle → LPS writeback | MISSING | M5/M6 |
| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
| Restart safety Studio core | MISSING | M1+ |
| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |

## B6. Decisions / gates

### Décision consommée

- Build Doctrine + Convergence Roadmap = **VALIDATED** construction governance by Morris
- intégrées sur main via PR #334 (`1d09e4159932b3885817911e10a2d29a82ae9ea7`)

### Décisions / gates toujours ouverts (non tranchés ici)

1. Architecture convergence Option 1 vs 2 — **Decision Required**
2. Product persistence technology — **NOT_SELECTED**
3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
5. Disposition OPS1 / D1 / execution-run — **Decision Required**
6. Couche Instructions ChatGPT update — **PENDING** (cycle séparé)

## B7–B8. Roadmap capability-driven (milestones)

### Gate 0 — Convergence architecture / persistence

| Champ | Contenu |
| --- | --- |
| **ID** | G0 |
| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
| **Fondations** | transversal (débloque F02/F05/F12…) |
| **État actuel** | Audit complet ; Option 1 **recommandée** ; persistence NOT_SELECTED |
| **Actifs** | audit handoff ; Build Doctrine |
| **Gaps** | décisions structurantes ouvertes |
| **Travaux** | pack décision compact — **pas** long cycle architecture gratuit |
| **Gates Morris** | OUI — architecture + persistence |
| **Hors périmètre** | implémentation ; Cursor REAL |
| **Preuve de sortie** | décisions écrites consommables par Delivery |
| **Dette tolérée** | aucune implementation speculative |
| **Exit dette** | N/A |
| **Next** | M1 |
| **Statut** | **READY FOR DECISION** |

### Milestone 1 — Socle projet v3 fiable

| Champ | Contenu |
| --- | --- |
| **ID** | M1 |
| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
| **État actuel** | Memory process-local `/studio` |
| **Actifs** | T-A1 ports ; vertical-slice UI ; doctrine FS |
| **Classification** | COMPLETE T-A1 ; ADAPT composition |
| **Gaps** | L1 durable repo ; L4 contextSnapshot ; L10 composition switch |
| **Dépendances** | G0 persistence |
| **Gates** | Delivery après G0 |
| **Hors périmètre** | Cursor REAL ; multi-region |
| **Preuve e2e** | create → restart process → get same project/LPS/digest |
| **Dette** | coexistence temporaire D1 UI |
| **Exit dette** | disposition D1 après M1 stable |
| **Next** | M2 |
| **Statut** | **NOT STARTED** (prérequis G0) |

### Milestone 2 — Pilotage cognitif v3 utilisable

| Champ | Contenu |
| --- | --- |
| **ID** | M2 |
| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
| **État actuel** | F1/F2 wired process-local |
| **Actifs** | F1, F2, platform AI, CKC qualify |
| **Gaps** | historique conversation durable optionnel ; CycleInstance wire ; live context |
| **Dépendances** | M1 |
| **Preuve e2e** | conversation → proposal avec contextSnapshot live → LPS version visible |
| **Statut** | **PARTIAL** (UI existe ; durabilité non) |

### Milestone 3 — Gouvernance humaine + préparation réelle

| Champ | Contenu |
| --- | --- |
| **ID** | M3 |
| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
| **État actuel** | F2 demo authority ; F3 fixture prepare |
| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
| **Dépendances** | M1–M2 ; IAM minimal |
| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
| **Statut** | **PARTIAL** |

### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

| Champ | Contenu |
| --- | --- |
| **ID** | M4 |
| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
| **Dépendances** | M3 ; promotion Ack ; Gate D |
| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
| **Statut** | **NOT STARTED** |

### Milestone 5 — Retour de preuve + analyse Nora

| Champ | Contenu |
| --- | --- |
| **ID** | M5 |
| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
| **État actuel** | UI cards Memory ; pas LPS write-back |
| **Gaps** | L9 Evidence→LPS ; durable evidence |
| **Dépendances** | M4 |
| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
| **Statut** | **PARTIAL** |

### Milestone 6 — Boucle projet complète

| Champ | Contenu |
| --- | --- |
| **ID** | M6 |
| **Capacité v3** | V3-F05 + F09 replanification (base) |
| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
| **État actuel** | Chaîne fragmentée / process-local / fixture |
| **Dépendances** | M1–M5 |
| **Preuve e2e** | parcours complet redémarrage-safe documenté |
| **Statut** | **NOT STARTED** |

### Milestone 7 — Élargissement contrôlé doctrine v3

| Champ | Contenu |
| --- | --- |
| **ID** | M7 |
| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
| **Dépendances** | M6 |
| **Preuve** | matrice B9 avance avec preuves par fondation |
| **Statut** | **NOT STARTED** |

### Milestone 8 — Adoption produit / exploitation

| Champ | Contenu |
| --- | --- |
| **ID** | M8 |
| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
| **Statut** | **NOT STARTED** |

## B9. Matrice de couverture doctrine V3-F01…F15

| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
| --- | --- | --- | --- | --- | --- |
| V3-F01 CKC | Qualification cognitive | PARTIAL (F2 qualify) | M2, M7 | CKC lié cycle + proposal | CycleInstance wire |
| V3-F02 LPS | Living Project State | PARTIAL Memory | M1, M5 | LPS durable + writeback | persistence |
| V3-F03 DoctrinePackage | Package pin/digest | KEEP files | M1–M2 | live digest in snapshot | contextSnapshot |
| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels | M2, M7 | tags/stop contradictions | later depth |
| V3-F05 Chaîne conv→exec | Boucle native | PARTIAL fixture | M2–M6 | e2e sans copier-coller | backbone |
| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |

## B10. Chemin critique explicite

```text
CRITICAL PATH:
  G0 (archi+persistence)
  → M1 durable Project/LPS
  → M2 Nora contextuel durable
  → M3 HD durable + ExecutionContract exact
  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
  → M5 Evidence/ReviewBundle + LPS writeback
  → M6 boucle complète sans copier-coller

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion · ChatGPT instructions
```

## B11. Freeze / stop-doing (**RECOMMENDATION**)

Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :

- nouveaux lots FinOps sans dépendance Studio user-visible ;
- nouvelles features execution-run indépendantes ;
- expansion OPS1 UI (hors harvest adapter) ;
- expansion D1 `/projects` ;
- micro-hardening T-A7 sans blocker utilisateur.

Ces FREEZE sont des **recommandations** jusqu’à validation Morris.

## B12. Maintenance de la roadmap

Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.

## Références

- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
- Audit handoff : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37`
