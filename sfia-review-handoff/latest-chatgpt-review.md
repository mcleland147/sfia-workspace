# SFIA Studio Convergence — Cycle 8 Isolated Commit

| Champ | Valeur |
| --- | --- |
| **Horodatage** | 2026-08-12 22:43:39 +0200 (Europe/Paris) |
| **Cycle** | 8 — Delivery / repository isolation + commit |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Review pack** | FULL (synthesis-only = **NO**) |
| **Décision Morris consommée** | GO ISOLATION + COMMIT DÉDIÉ |

---

## 0. Verdict

**ISOLATED COMMIT COMPLETE — CONVERGENCE PATCH IDENTITY VERIFIED — F3 WORKTREE PRESERVED — READY FOR MORRIS PUSH / PR GATE**

Project push = **0**. PR = **0**. Merge = **0**. main unmodified.

---

## 1. Handoff entrant (PR readiness)

| Champ | Valeur |
| --- | --- |
| Tip | `86df3e722cbe15c3bf618935a5e9dfa4a88a95a1` |
| Blob | `077f05125c56b3a7b69fbdee65bcf4488ecce52b` |
| Verdict | READY FOR ISOLATED COMMIT — CONTENT APPROVED — PATCH ISOLATABLE — DEDICATED CONVERGENCE BRANCH REQUIRED — MORRIS COMMIT GATE REQUIRED |

---

## 2. Worktree SOURCE (F3 — intact)

| Champ | Valeur |
| --- | --- |
| Path | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| F3 preserved | **YES** |
| Status initial == final | **YES** |

### Status initial/final

```
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M method/sfia-fast-track/core/sfia-knowledge-layer.md
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
 M prompts/templates/sfia-cycle-execution-template.md
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/critical-ack/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/auth.ts
?? projects/sfia-studio/app/lib/oa/critical-ack/
?? projects/sfia-studio/app/types/
?? projects/sfia-studio/convergence/
```

---

## 3. Worktree CIBLE

| Champ | Valeur |
| --- | --- |
| Path | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-convergence-foundations` |
| Branch | `docs/sfia-studio-convergence-foundations` |
| Base | `origin/main` @ `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Status initial | clean |
| Status avant staging | 4 M + ?? convergence/ |
| Status après commit | clean |

---

## 4. Identité patch

| Artefact | SHA256 |
| --- | --- |
| A source/dest | `be306b6e2277e928876cfeebbd018ed4ba0b1166463fba34282968741b326bc9` |
| B source/dest | `898d01efbde1a8facef75bc51590b610bfe0e505bc0bfd86c5bcde3ffb1336a6` |
| Tracked patch source | `d100e08e3dde7825f8cde711bcaaf5283bf78db00a748f122ec9cccd59a7bfcf` |
| Tracked patch destination | `d100e08e3dde7825f8cde711bcaaf5283bf78db00a748f122ec9cccd59a7bfcf` |
| Identité | **PASS** |

Attendus PR readiness : A=`be306b6e…b326bc9` · B=`898d01ef…f1336a6` — **MATCH**.

Contamination F3 : **NO**

---

## 5. Commit

| Champ | Valeur |
| --- | --- |
| SHA | `da0618db8ce8dd6f1d7e98f8e207f7e169811d17` |
| Parent | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Message | `docs(sfia-studio): add convergence doctrine and roadmap` |
| Files | exactement 6 |

```
method/sfia-fast-track/core/sfia-cycle-routing-guide.md
method/sfia-fast-track/core/sfia-knowledge-layer.md
projects/sfia-studio/README.md
projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
prompts/templates/sfia-cycle-execution-template.md
```

```
da0618d docs(sfia-studio): add convergence doctrine and roadmap
 .../core/sfia-cycle-routing-guide.md               |  43 ++-
 .../sfia-fast-track/core/sfia-knowledge-layer.md   |   4 +
 projects/sfia-studio/README.md                     |  25 +-
 .../sfia-studio-convergence-build-doctrine.md      | 212 +++++++++++++++
 .../convergence/sfia-studio-convergence-roadmap.md | 297 +++++++++++++++++++++
 prompts/templates/sfia-cycle-execution-template.md |  77 +++++-
 6 files changed, 648 insertions(+), 10 deletions(-)
```

Parent == `4b1a058050ae81d56cb6d96b88e8a57380799a86` : **YES**

---

## 6. Validations

| Check | Résultat |
| --- | --- |
| 6 fichiers exacts | **PASS** |
| 2 created + 4 modified | **PASS** |
| cross-links | **PASS** |
| markers | **PASS** |
| anti-claims | **PASS** |
| git diff --check (cached/commit) | **PASS** |
| staged scope | **PASS** |
| project push | **0** |

---

## 7. Décisions toujours fermées

push projet · PR · merge · instructions ChatGPT · Option 1 · persistence · Auth/Ack · Cursor REAL · Gate D · runtime v3 adoption · cleanup worktree/branche

---

## 8. Sources consultées

- Template / routing (origin/main + candidats)
- Operating model / rules
- Handoff PR readiness tip `86df3e7…`
- 6 fichiers source validés
- CKC : fallback v2.6 (aucune autorité)

---

## 9. FULL INLINE — Build Doctrine (A) committed

sha256 `be306b6e2277e928876cfeebbd018ed4ba0b1166463fba34282968741b326bc9`

```text
# SFIA Studio Convergence / Build Doctrine

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** (non promu main / non baseline) |
| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) |

## A1. Anti-claims (ouverts)

Ce document **n’est pas** :

- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
- une autorisation d’adoption runtime v3 ;
- une baseline méthodologique globale remplaçant SFIA v2.6 ;
- une décision d’architecture technique (Option 1 reste **recommandation** jusqu’à GO Morris) ;
- une sélection Product persistence ;
- une autorisation Cursor REAL / Gate D ;
- une instruction projet ChatGPT (couche 1 = PENDING hors ce cycle).

## A2. Finalité

> La doctrine produit **SFIA Studio v3** fixe la **destination**.
> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.

## A3. Cible produit (boucle métier)

Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED) :

```text
Morris
  → SFIA Studio / Nora
  → connaissance + contexte v3 (DoctrinePackage / CKC)
  → qualification cycle / profil / lenses
  → analyse / clarification
  → Living Project State
  → trajectoire / options / recommandation
  → HumanDecision Morris
  → Confirmation (si requise)
  → ExecutionContract
  → Cursor / agent sous contrat
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → mise à jour LPS / replanification
  → décision Morris
  → cycle suivant
```

Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

## A4. Règles fondatrices de construction (R1–R20)

| ID | Règle |
| --- | --- |
| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
| **R12** | **Git** reste la vérité technique et documentaire. |
| **R13** | La **décision structurante** reste humaine (Morris). |
| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |

## A5. Challenge obligatoire avant tout chantier Studio

Avant cadrage / prompt Cursor / delivery Studio, répondre :

1. Quelle **capacité v3** ce travail débloque-t-il ?
2. Est-ce utile **maintenant** (chemin critique) ?
3. Existe-t-il déjà une brique **réutilisable** (KEEP/ADAPT/HARVEST) ?
4. Créons-nous une **architecture ou un moteur parallèle** ?
5. Peut-on fermer **plusieurs petits gaps** dans le même lot cohérent ?
6. Quelle **preuve end-to-end** permettra de déclarer la capacité obtenue ?
7. Quelle capacité ou décision vient **ensuite** ?
8. Quelle **dette** est créée ?
9. Action **répétable/automatisable** ou **arbitrage humain** ?
10. Un **gate Morris** est-il nécessaire ?

Si **1** ou **7** n’a pas de réponse exploitable :

```text
STOP — TRAJECTORY LINK MISSING
```

## A6. Politique POC / prototype / fixture

| Cas | Règle |
| --- | --- |
| Historique existant | Exploitable comme **preuve / harvest**, pas comme produit final. |
| Nouvelle création | **Interdite par défaut** sur chemin critique. |
| Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
| Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
| Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |

## A7. Politique d’intermédiaire

| Label | Autorisé ? | Exigence |
| --- | --- | --- |
| **TEMPORARY WITH EXIT** | OUI | Justification + cible + preuve de sortie + owner |
| **TEMPORARY WITHOUT EXIT** | NON | Interdit (R5/R11/R20) |

## A8. Politique de classification des actifs

| Classe | Sens | Conditions | Conséquence roadmap | Preuve |
| --- | --- | --- | --- | --- |
| **KEEP** | Conserver tel quel sur le chemin | Utile à la boucle v3 ; pas de dette structurante | Aucun rewrite ; usage direct | Présence Git + usage actuel |
| **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
| **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
| **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |

## A9. Chemin critique (priorité)

```text
capacité utilisateur complète
  > hardening local non bloquant
  > transverse non bloquant
  > expérimentation
```

## A10. Preuve de sortie

Une milestone **ne se termine pas** parce qu’un composant « existe ».
Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition structurante** explicitement définie est **démontrée** (preuve Git / handoff / parcours UI).

`technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.

## A11. Gouvernance des sources

| Source | Rôle |
| --- | --- |
| Git + décisions Morris explicites | Vérité + autorité |
| Doctrine produit v3 (`30`–`37`) | Destination produit |
| **Build Doctrine (ce document)** | Lois de construction |
| **Convergence Roadmap** | État + prochaine capacité |
| Sources cycle / repo | Preuves locales du chantier |
| Mémoire conversationnelle | Non SoT |

## A12. Trois couches de vérification

| Couche | Rôle | Statut après CE cycle |
| --- | --- | --- |
| **1. Instructions projet ChatGPT** | Déclenche la consultation | **PENDING — next step** (hors périmètre) |
| **2. Repo / Source Routing** | Indique quoi consulter et dans quel ordre | **IMPLEMENTED CANDIDATE** (routing guide + Knowledge Layer) |
| **3. Template Cursor canonique** | Empêche génération de prompt Studio sans contexte convergence | **IMPLEMENTED CANDIDATE** |

Séquence attendue :

```text
Repo-informed pre-check
  → si Studio trigger : Convergence pre-check
  → qualification cycle
  → CKC/process guidance applicable (v2.6 process only)
  → sources spécifiques
  → instanciation prompt Cursor
```

## A13. Anti-patterns

- micro-hardening sans blocker utilisateur ;
- troisième moteur parallèle ;
- POC sans exit ;
- dette « on verra plus tard » ;
- conservation par sunk cost ;
- fonctionnalité fictive pour tester un concept déjà cadré ;
- roadmap par composants sans user outcome ;
- décision candidate présentée comme acquise ;
- mass rewrite historique ;
- Build Doctrine transformée en doctrine runtime.

## A14. Stop markers

```text
STOP — TRAJECTORY LINK MISSING
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
```

## A15. Gouvernance d’évolution

- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.

## Références

- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- Template : `prompts/templates/sfia-cycle-execution-template.md`

```

---

## 10. FULL INLINE — Convergence Roadmap (B) committed

sha256 `898d01efbde1a8facef75bc51590b610bfe0e505bc0bfd86c5bcde3ffb1336a6`

```text
# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | HEAD / origin/main `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| **Timestamp** | 2026-08-12 21:53:10 CEST (+0200) |
| **Sources** | Git courant · handoff convergence tip `c5b417dc13fa3700787d28571e5b5abe0599ae98` blob `31a5db07fba2555a59ee8c65ad76b537bbd8a73d` · framing `30`–`37` · code `projects/sfia-studio/app/**` |
| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ v3 runtime ADOPTED · ≠ Cursor REAL authorized |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B2. Destination (boucle produit v3)

Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
Fondations V3-F01…F15 = couverture doctrine progressive (B9).

## B3. Point de départ factuel

### Sur main (`4b1a058050ae81d56cb6d96b88e8a57380799a86`)

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

## B6. Decisions / gates ouverts (non tranchés ici)

1. Architecture convergence Option 1 vs 2 — **Decision Required**
2. Product persistence technology — **NOT_SELECTED**
3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
5. Disposition OPS1 / D1 / execution-run — **Decision Required**
6. Adoption explicite de cette Roadmap candidate — **Decision Required**
7. Couche Instructions ChatGPT update — **PENDING** (cycle séparé)

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
DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion · Roadmap adoption · ChatGPT instructions
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

```

---

## 11. DIFF COMPLET — commit (6 fichiers)

```diff
commit da0618db8ce8dd6f1d7e98f8e207f7e169811d17
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Wed Aug 12 22:43:17 2026 +0200

    docs(sfia-studio): add convergence doctrine and roadmap

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index a331746..8949e76 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -165,7 +165,10 @@ Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (mé

 > **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
 > **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (baseline opérationnelle)** — v2.4 = baseline historique précédente.
-> **v3.0 :** immediate NO-GO — toute discussion v3.0 = décision Morris dédiée.
+> **SFIA v2.6 :** baseline opérationnelle actuelle du processus externe ChatGPT ↔ Cursor.
+> **SFIA Studio v3 :** doctrine **produit cible Studio** explicitement décidée par Morris (construction/convergence — voir §4.3.0a).
+> **≠** promotion de v3 en baseline méthodologique globale ; **≠** claim runtime v3 ADOPTED ; **≠** suppression de v2.6.
+> Toute promotion v3 baseline globale, claim runtime ADOPTED, ou discussion v3 hors trajectoire Studio décidée = **décision Morris dédiée**.

 SFIA v2.4 reste le **standard de consolidation** de référence pour les cycles. Il couvre notamment :

@@ -211,11 +214,45 @@ Morris valide le profil si **Critical** ou changement de doctrine.
 - changement de doctrine ;
 - arbitrage structurant ;
 - passage vers v2.5+ ;
-- toute discussion **v3.0** ;
+- promotion **v3 baseline globale**, claim **v3 runtime ADOPTED**, ou discussion v3 **hors** trajectoire Studio déjà décidée ;
 - automatisation L3 structurante, L4, tout L5 ;
 - merge et clôture structurante ;
 - dette méthode ou projet importante.

+#### 4.3.0a SFIA STUDIO CONVERGENCE PRE-CHECK
+
+> **Portée :** uniquement les travaux dont l’objet est la **construction ou l’évolution de SFIA Studio**.
+> **Ne s’applique pas** aux autres projets SFIA sans rapport avec la construction de SFIA Studio.
+
+**Trigger = oui** si la demande concerne analyse, cadrage, roadmap, architecture, conception, delivery, validation, PR readiness, post-merge, capitalisation, prompt Cursor, évolution méthode/template ou évolution runtime **de SFIA Studio**.
+
+**Sources obligatoires supplémentaires (ordre) :**
+
+1. Git courant + décisions Morris explicites ;
+2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ;
+3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` ;
+4. doctrine produit v3 applicable (`projects/sfia-studio/sfia-v3-framing/**`, notamment `30`–`37`) ;
+5. sources Studio/repo spécifiques au cycle ;
+6. processus SFIA **v2.6** nécessaire à l’exécution du cycle (template, operating model, guardrails).
+
+**Clarifications obligatoires :**
+
+| Affirmation | Statut |
+| --- | --- |
+| SFIA Studio v3 | doctrine **produit cible Studio** (décidée) |
+| SFIA v2.6 | baseline **opérationnelle** du processus ChatGPT/Cursor externe |
+| Build Doctrine + Roadmap | gouvernance de **construction** — **pas** doctrine runtime produit |
+| Runtime v3 ADOPTED | **non** tant que preuves/gates manquent |
+| Coexistence doctrinale runtime v2.6/v3 dans Studio | **ne pas réintroduire** |
+
+Consulter le template v2.6 pour **exécuter** les cycles de construction **ne signifie pas** charger v2.6 comme doctrine produit Studio.
+
+Si le contexte convergence requis n’est pas chargé :
+
+```text
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+```
+
 **Sans gate Morris dédié** (contrôles L1 ou validations techniques non structurantes) :

 - vérifications read-only de cohérence documentaire ;
@@ -921,7 +958,7 @@ SFIA **ne doit pas** automatiser la décision finale.
 - arbitrage projet ;
 - décision de delivery impactante.

-**Complément SFIA v2.4 (§4.3.3) :** les contrôles L1 read-only, validations techniques non structurantes et post-merge documentaire **ne nécessitent pas** un gate Morris dédié. Morris reste L0 pour tout arbitrage structurant, passage v2.5+, discussion v3.0, L3 structurant / L4 / L5, merge et clôture structurante.
+**Complément SFIA v2.4 (§4.3.3) :** les contrôles L1 read-only, validations techniques non structurantes et post-merge documentaire **ne nécessitent pas** un gate Morris dédié. Morris reste L0 pour tout arbitrage structurant, passage v2.5+, promotion v3 baseline globale / claim runtime ADOPTED / discussion v3 hors trajectoire Studio décidée, L3 structurant / L4 / L5, merge et clôture structurante.

 ## 10. Règle d'exécution Cursor

diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index 7fe5b0e..1c77426 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -145,6 +145,7 @@ Cette matrice doit être utilisée avant toute création documentaire significat
 | Post-merge | PR, merge commit, branch status | Post-merge status, capitalisation | Dossier de capitalisation ou projet concerné | Clôture / trace | PR, commit, branche, décision, prochaine étape |
 | Archive / cleanup | Repository Blueprint, docs existants, audit | Archive map, cleanup report | `archive/` ou dossier archive local | Traçabilité | Justification, git mv, aucun delete brutal |
 | Foundation consolidation | Evolution matrix, capitalization inputs, foundation docs | Foundation update, consistency rules | `docs/architecture/`, `method/sfia-fast-track/core/` | Fondation v1.1 | v1.0 preserved, v1.1 prevails, no source rewrite |
+| **SFIA Studio — construction / convergence** | **Build Doctrine** `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ; **Convergence Roadmap** `…/sfia-studio-convergence-roadmap.md` ; doctrine produit v3 applicable (`sfia-v3-framing/30`–`37`) ; Git/docs Studio ; sources cycle | Selon type de cycle ; tout livrable doit indiquer **capacité v3 ciblée** + lien roadmap | Actifs produit/convergence → `projects/sfia-studio/` ; méthode/template **uniquement** si le cycle porte explicitement sur méthode/template | Convergence / construction Studio | capacité v3 ; milestone roadmap ; classification KEEP/ADAPT/COMPLETE/HARVEST/REPLACE/FREEZE/RETIRE LATER ; gaps fermés ; hors périmètre ; exit proof ; gates Morris ; dette temporaire + trajectoire de sortie |

 Règle :

@@ -186,6 +187,9 @@ La Documentation Routing Matrix n'est pas remplacée. Le Cycle Routing Guide la
 | Routage CKC candidat (expérimental) | Routing guide §4.4.5, README CKC, pilote ou carte synthétique | Déclaration de consultation CKC ; évolutions CKC si cycle méthode dédié | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` | Capitalisation méthode candidate | Statut candidate ; usage experimental cognitive guidance ; aucune autorité d'exécution |

 **Séparation préservée :** Knowledge Layer = où classer et ranger · Routing guide = quoi lire et quand.
+**Pas d’index parallèle :** Build Doctrine + Roadmap s’insèrent dans cette matrice et dans le routing guide ; aucun registre/moteur documentaire supplémentaire.
+
+> **Studio construction :** Build Doctrine / Roadmap = gouvernance de **construction** (pas doctrine runtime). Runtime v3 reste non ADOPTED tant que les preuves/gates manquent. SFIA v2.6 reste la baseline opérationnelle du processus ChatGPT ↔ Cursor.

 ### 6.2 Complément SFIA v2.4 — index méthode unique

diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 75f0598..37f7683 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -5,7 +5,9 @@
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
 | **Statut** | `sfia-canonical-context-engine-local` — moteur de contexte SFIA **implémenté** sur branche locale ; **pas de commit/push/PR** ; validation live Morris **requise** ; MVP / production **fermés** |
-| **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
+| **Baseline méthode (processus)** | **SFIA v2.6** — baseline opérationnelle actuelle ChatGPT ↔ Cursor externe |
+| **Doctrine produit cible Studio** | **SFIA Studio v3** (`sfia-v3-framing/30`–`37`) — cible produit décidée ; **runtime v3 NON ADOPTED** |
+| **Convergence** | [`convergence/sfia-studio-convergence-build-doctrine.md`](./convergence/sfia-studio-convergence-build-doctrine.md) · [`convergence/sfia-studio-convergence-roadmap.md`](./convergence/sfia-studio-convergence-roadmap.md) — **CANDIDATE** |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
 | **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
@@ -120,9 +122,15 @@ Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensem

 Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

-### Relation méthode (G4 — Option C)
+### Relation méthode (G4 — Option C) — alignement cible Studio

-Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.
+- **SFIA v2.6** : baseline opérationnelle actuelle du processus ChatGPT ↔ Cursor externe.
+- **SFIA Studio v3** : doctrine **produit cible Studio** (framing `30`–`37`) — décidée pour la construction/convergence.
+- **Runtime v3** : **non ADOPTED** tant que capacités, preuves et gates nécessaires ne sont pas atteints.
+- Évolution méthode globale / promotion v3 baseline méthodologique = CAPA/EVOL séparé + GO Morris.
+- Documents de construction actifs : [Build Doctrine](./convergence/sfia-studio-convergence-build-doctrine.md) · [Convergence Roadmap](./convergence/sfia-studio-convergence-roadmap.md) (**CANDIDATE**).
+
+> Formulation historique « Pas de v2.7 / v3.0 » (pré-convergence) : **superseded** pour la **cible produit Studio**. Elle ne doit plus être lue comme interdiction de construire vers Studio v3. Elle conserve sa valeur historique comme refus de promotion baseline globale sans GO.

 ---

@@ -156,6 +164,13 @@ Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrag

 ## 3. Navigation

+### Convergence (actif — CANDIDATE)
+
+| Document | Rôle |
+|----------|------|
+| [convergence/sfia-studio-convergence-build-doctrine.md](./convergence/sfia-studio-convergence-build-doctrine.md) | Lois de construction / convergence Studio |
+| [convergence/sfia-studio-convergence-roadmap.md](./convergence/sfia-studio-convergence-roadmap.md) | Roadmap vivante état → capacités v3 |
+
 ### Pré-cadrage (historique)

 | Document | Rôle |
@@ -389,7 +404,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 | Élément | Source |
 |---------|--------|
-| Méthode | SFIA v2.6 — Option C méthode |
+| Méthode (processus) | SFIA v2.6 — baseline opérationnelle ChatGPT ↔ Cursor |
+| Doctrine produit Studio | SFIA Studio v3 framing `30`–`37` — cible ; runtime **non ADOPTED** |
+| Convergence (CANDIDATE) | `convergence/sfia-studio-convergence-build-doctrine.md` · `convergence/sfia-studio-convergence-roadmap.md` |
 | Socle applicatif / harness A–E | `main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` (PR #234 MERGED) |
 | Vertical slice A–E | Docs `32`–`40` ; clôture `CLOSED_WITH_RESERVATIONS` |
 | Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** ; **intégrés** sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` ; cleanup branche effectué |
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
new file mode 100644
index 0000000..0591431
--- /dev/null
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -0,0 +1,212 @@
+# SFIA Studio Convergence / Build Doctrine
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
+| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** (non promu main / non baseline) |
+| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
+| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
+| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
+| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
+| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
+| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
+| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) |
+
+## A1. Anti-claims (ouverts)
+
+Ce document **n’est pas** :
+
+- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
+- une autorisation d’adoption runtime v3 ;
+- une baseline méthodologique globale remplaçant SFIA v2.6 ;
+- une décision d’architecture technique (Option 1 reste **recommandation** jusqu’à GO Morris) ;
+- une sélection Product persistence ;
+- une autorisation Cursor REAL / Gate D ;
+- une instruction projet ChatGPT (couche 1 = PENDING hors ce cycle).
+
+## A2. Finalité
+
+> La doctrine produit **SFIA Studio v3** fixe la **destination**.
+> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
+> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.
+
+## A3. Cible produit (boucle métier)
+
+Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED) :
+
+```text
+Morris
+  → SFIA Studio / Nora
+  → connaissance + contexte v3 (DoctrinePackage / CKC)
+  → qualification cycle / profil / lenses
+  → analyse / clarification
+  → Living Project State
+  → trajectoire / options / recommandation
+  → HumanDecision Morris
+  → Confirmation (si requise)
+  → ExecutionContract
+  → Cursor / agent sous contrat
+  → Evidence / ReviewBundle / Git
+  → analyse Nora
+  → mise à jour LPS / replanification
+  → décision Morris
+  → cycle suivant
+```
+
+Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).
+
+## A4. Règles fondatrices de construction (R1–R20)
+
+| ID | Règle |
+| --- | --- |
+| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
+| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
+| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
+| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
+| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
+| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
+| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
+| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
+| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
+| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
+| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
+| **R12** | **Git** reste la vérité technique et documentaire. |
+| **R13** | La **décision structurante** reste humaine (Morris). |
+| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
+| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
+| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
+| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
+| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
+| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
+| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
+
+## A5. Challenge obligatoire avant tout chantier Studio
+
+Avant cadrage / prompt Cursor / delivery Studio, répondre :
+
+1. Quelle **capacité v3** ce travail débloque-t-il ?
+2. Est-ce utile **maintenant** (chemin critique) ?
+3. Existe-t-il déjà une brique **réutilisable** (KEEP/ADAPT/HARVEST) ?
+4. Créons-nous une **architecture ou un moteur parallèle** ?
+5. Peut-on fermer **plusieurs petits gaps** dans le même lot cohérent ?
+6. Quelle **preuve end-to-end** permettra de déclarer la capacité obtenue ?
+7. Quelle capacité ou décision vient **ensuite** ?
+8. Quelle **dette** est créée ?
+9. Action **répétable/automatisable** ou **arbitrage humain** ?
+10. Un **gate Morris** est-il nécessaire ?
+
+Si **1** ou **7** n’a pas de réponse exploitable :
+
+```text
+STOP — TRAJECTORY LINK MISSING
+```
+
+## A6. Politique POC / prototype / fixture
+
+| Cas | Règle |
+| --- | --- |
+| Historique existant | Exploitable comme **preuve / harvest**, pas comme produit final. |
+| Nouvelle création | **Interdite par défaut** sur chemin critique. |
+| Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
+| Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
+| Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |
+
+## A7. Politique d’intermédiaire
+
+| Label | Autorisé ? | Exigence |
+| --- | --- | --- |
+| **TEMPORARY WITH EXIT** | OUI | Justification + cible + preuve de sortie + owner |
+| **TEMPORARY WITHOUT EXIT** | NON | Interdit (R5/R11/R20) |
+
+## A8. Politique de classification des actifs
+
+| Classe | Sens | Conditions | Conséquence roadmap | Preuve |
+| --- | --- | --- | --- | --- |
+| **KEEP** | Conserver tel quel sur le chemin | Utile à la boucle v3 ; pas de dette structurante | Aucun rewrite ; usage direct | Présence Git + usage actuel |
+| **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
+| **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
+| **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
+| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
+| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
+| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |
+
+## A9. Chemin critique (priorité)
+
+```text
+capacité utilisateur complète
+  > hardening local non bloquant
+  > transverse non bloquant
+  > expérimentation
+```
+
+## A10. Preuve de sortie
+
+Une milestone **ne se termine pas** parce qu’un composant « existe ».
+Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition structurante** explicitement définie est **démontrée** (preuve Git / handoff / parcours UI).
+
+`technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.
+
+## A11. Gouvernance des sources
+
+| Source | Rôle |
+| --- | --- |
+| Git + décisions Morris explicites | Vérité + autorité |
+| Doctrine produit v3 (`30`–`37`) | Destination produit |
+| **Build Doctrine (ce document)** | Lois de construction |
+| **Convergence Roadmap** | État + prochaine capacité |
+| Sources cycle / repo | Preuves locales du chantier |
+| Mémoire conversationnelle | Non SoT |
+
+## A12. Trois couches de vérification
+
+| Couche | Rôle | Statut après CE cycle |
+| --- | --- | --- |
+| **1. Instructions projet ChatGPT** | Déclenche la consultation | **PENDING — next step** (hors périmètre) |
+| **2. Repo / Source Routing** | Indique quoi consulter et dans quel ordre | **IMPLEMENTED CANDIDATE** (routing guide + Knowledge Layer) |
+| **3. Template Cursor canonique** | Empêche génération de prompt Studio sans contexte convergence | **IMPLEMENTED CANDIDATE** |
+
+Séquence attendue :
+
+```text
+Repo-informed pre-check
+  → si Studio trigger : Convergence pre-check
+  → qualification cycle
+  → CKC/process guidance applicable (v2.6 process only)
+  → sources spécifiques
+  → instanciation prompt Cursor
+```
+
+## A13. Anti-patterns
+
+- micro-hardening sans blocker utilisateur ;
+- troisième moteur parallèle ;
+- POC sans exit ;
+- dette « on verra plus tard » ;
+- conservation par sunk cost ;
+- fonctionnalité fictive pour tester un concept déjà cadré ;
+- roadmap par composants sans user outcome ;
+- décision candidate présentée comme acquise ;
+- mass rewrite historique ;
+- Build Doctrine transformée en doctrine runtime.
+
+## A14. Stop markers
+
+```text
+STOP — TRAJECTORY LINK MISSING
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
+```
+
+## A15. Gouvernance d’évolution
+
+- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
+- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
+- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.
+
+## Références
+
+- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
+- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
+- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
+- Template : `prompts/templates/sfia-cycle-execution-template.md`
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
new file mode 100644
index 0000000..d8d4899
--- /dev/null
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -0,0 +1,297 @@
+# SFIA Studio Convergence Roadmap
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
+| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** |
+| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
+| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
+| **Snapshot Git** | HEAD / origin/main `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| **Timestamp** | 2026-08-12 21:53:10 CEST (+0200) |
+| **Sources** | Git courant · handoff convergence tip `c5b417dc13fa3700787d28571e5b5abe0599ae98` blob `31a5db07fba2555a59ee8c65ad76b537bbd8a73d` · framing `30`–`37` · code `projects/sfia-studio/app/**` |
+| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ v3 runtime ADOPTED · ≠ Cursor REAL authorized |
+
+## B1. Nature du document
+
+Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
+Observation / Recommendation / Decision Required doivent rester **distincts**.
+
+## B2. Destination (boucle produit v3)
+
+Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
+Fondations V3-F01…F15 = couverture doctrine progressive (B9).
+
+## B3. Point de départ factuel
+
+### Sur main (`4b1a058050ae81d56cb6d96b88e8a57380799a86`)
+
+| Capacité | État observé |
+| --- | --- |
+| `/studio` Project create/view | WIRED — process-local Memory T-A1 |
+| F1 Nora chat | WIRED — contextual assistant |
+| F2 qualification / proposal / Morris gate | WIRED — process-local + demo authority |
+| F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
+| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
+| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
+| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
+| execution-run D2-D | EXISTS — **non** branché F1–F3 |
+| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
+| Product persistence | **NOT_SELECTED** |
+| Cursor REAL depuis Nora | **0** |
+| Gate D | **NOT CONSUMED** |
+
+### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)
+
+| Élément | État |
+| --- | --- |
+| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
+| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
+| Classification | Observation / prérequis candidat — **promotion = Decision Required** |
+
+### Recommandation d’audit (≠ décision)
+
+Option 1 — OA Native Backbone + Harvest OPS1 Cursor = **RECOMMENDATION — NOT DECIDED**.
+
+## B4. Asset disposition matrix (actuelle)
+
+Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.
+
+| Actif | Preuve | Classification | Justification courte |
+| --- | --- | --- | --- |
+| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
+| T-A1 Project/LPS | Memory store + `/studio` | **COMPLETE** | Bonne base ; manque durabilité |
+| T-A2 Cycle/CKC | wired ; F2 qualify uses CKC | **ADAPT** / **COMPLETE** | Qualify OK ; CycleInstance UI non branché |
+| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
+| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
+| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
+| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
+| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
+| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
+| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
+| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
+| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
+| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
+| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
+| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
+| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
+| Persistence Memory OA | factories Memory* | **REPLACE** (adapters durables derrière ports) | Decision Required tech |
+
+## B5. Gap map → boucle cible
+
+| Gap | Statut | Bloque |
+| --- | --- | --- |
+| Project/LPS durable | MISSING | M1, contextSnapshot |
+| GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
+| CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
+| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
+| CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
+| live contextSnapshot | BLOCKED (no durable project) | F2 final / contracts |
+| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
+| Cursor projection canonique | PARTIAL | M3/M4 |
+| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
+| Critical Ack UI | CANDIDATE unwired | M4 |
+| Evidence durable | MISSING | M5 |
+| ReviewBundle → LPS writeback | MISSING | M5/M6 |
+| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
+| Restart safety Studio core | MISSING | M1+ |
+| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |
+
+## B6. Decisions / gates ouverts (non tranchés ici)
+
+1. Architecture convergence Option 1 vs 2 — **Decision Required**
+2. Product persistence technology — **NOT_SELECTED**
+3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
+4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
+5. Disposition OPS1 / D1 / execution-run — **Decision Required**
+6. Adoption explicite de cette Roadmap candidate — **Decision Required**
+7. Couche Instructions ChatGPT update — **PENDING** (cycle séparé)
+
+## B7–B8. Roadmap capability-driven (milestones)
+
+### Gate 0 — Convergence architecture / persistence
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | G0 |
+| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
+| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
+| **Fondations** | transversal (débloque F02/F05/F12…) |
+| **État actuel** | Audit complet ; Option 1 **recommandée** ; persistence NOT_SELECTED |
+| **Actifs** | audit handoff ; Build Doctrine |
+| **Gaps** | décisions structurantes ouvertes |
+| **Travaux** | pack décision compact — **pas** long cycle architecture gratuit |
+| **Gates Morris** | OUI — architecture + persistence |
+| **Hors périmètre** | implémentation ; Cursor REAL |
+| **Preuve de sortie** | décisions écrites consommables par Delivery |
+| **Dette tolérée** | aucune implementation speculative |
+| **Exit dette** | N/A |
+| **Next** | M1 |
+| **Statut** | **READY FOR DECISION** |
+
+### Milestone 1 — Socle projet v3 fiable
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M1 |
+| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
+| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
+| **État actuel** | Memory process-local `/studio` |
+| **Actifs** | T-A1 ports ; vertical-slice UI ; doctrine FS |
+| **Classification** | COMPLETE T-A1 ; ADAPT composition |
+| **Gaps** | L1 durable repo ; L4 contextSnapshot ; L10 composition switch |
+| **Dépendances** | G0 persistence |
+| **Gates** | Delivery après G0 |
+| **Hors périmètre** | Cursor REAL ; multi-region |
+| **Preuve e2e** | create → restart process → get same project/LPS/digest |
+| **Dette** | coexistence temporaire D1 UI |
+| **Exit dette** | disposition D1 après M1 stable |
+| **Next** | M2 |
+| **Statut** | **NOT STARTED** (prérequis G0) |
+
+### Milestone 2 — Pilotage cognitif v3 utilisable
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M2 |
+| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
+| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
+| **État actuel** | F1/F2 wired process-local |
+| **Actifs** | F1, F2, platform AI, CKC qualify |
+| **Gaps** | historique conversation durable optionnel ; CycleInstance wire ; live context |
+| **Dépendances** | M1 |
+| **Preuve e2e** | conversation → proposal avec contextSnapshot live → LPS version visible |
+| **Statut** | **PARTIAL** (UI existe ; durabilité non) |
+
+### Milestone 3 — Gouvernance humaine + préparation réelle
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M3 |
+| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
+| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
+| **État actuel** | F2 demo authority ; F3 fixture prepare |
+| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
+| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
+| **Dépendances** | M1–M2 ; IAM minimal |
+| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
+| **Statut** | **PARTIAL** |
+
+### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M4 |
+| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
+| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
+| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
+| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
+| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
+| **Dépendances** | M3 ; promotion Ack ; Gate D |
+| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 5 — Retour de preuve + analyse Nora
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M5 |
+| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
+| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
+| **État actuel** | UI cards Memory ; pas LPS write-back |
+| **Gaps** | L9 Evidence→LPS ; durable evidence |
+| **Dépendances** | M4 |
+| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
+| **Statut** | **PARTIAL** |
+
+### Milestone 6 — Boucle projet complète
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M6 |
+| **Capacité v3** | V3-F05 + F09 replanification (base) |
+| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
+| **État actuel** | Chaîne fragmentée / process-local / fixture |
+| **Dépendances** | M1–M5 |
+| **Preuve e2e** | parcours complet redémarrage-safe documenté |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 7 — Élargissement contrôlé doctrine v3
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M7 |
+| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
+| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
+| **Dépendances** | M6 |
+| **Preuve** | matrice B9 avance avec preuves par fondation |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 8 — Adoption produit / exploitation
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M8 |
+| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
+| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
+| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
+| **Statut** | **NOT STARTED** |
+
+## B9. Matrice de couverture doctrine V3-F01…F15
+
+| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
+| --- | --- | --- | --- | --- | --- |
+| V3-F01 CKC | Qualification cognitive | PARTIAL (F2 qualify) | M2, M7 | CKC lié cycle + proposal | CycleInstance wire |
+| V3-F02 LPS | Living Project State | PARTIAL Memory | M1, M5 | LPS durable + writeback | persistence |
+| V3-F03 DoctrinePackage | Package pin/digest | KEEP files | M1–M2 | live digest in snapshot | contextSnapshot |
+| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels | M2, M7 | tags/stop contradictions | later depth |
+| V3-F05 Chaîne conv→exec | Boucle native | PARTIAL fixture | M2–M6 | e2e sans copier-coller | backbone |
+| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
+| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
+| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
+| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
+| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
+| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
+| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
+| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
+| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
+| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
+
+## B10. Chemin critique explicite
+
+```text
+CRITICAL PATH:
+  G0 (archi+persistence)
+  → M1 durable Project/LPS
+  → M2 Nora contextuel durable
+  → M3 HD durable + ExecutionContract exact
+  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
+  → M5 Evidence/ReviewBundle + LPS writeback
+  → M6 boucle complète sans copier-coller
+
+TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
+FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
+DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion · Roadmap adoption · ChatGPT instructions
+```
+
+## B11. Freeze / stop-doing (**RECOMMENDATION**)
+
+Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :
+
+- nouveaux lots FinOps sans dépendance Studio user-visible ;
+- nouvelles features execution-run indépendantes ;
+- expansion OPS1 UI (hors harvest adapter) ;
+- expansion D1 `/projects` ;
+- micro-hardening T-A7 sans blocker utilisateur.
+
+Ces FREEZE sont des **recommandations** jusqu’à validation Morris.
+
+## B12. Maintenance de la roadmap
+
+Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
+Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
+
+## Références
+
+- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
+- Audit handoff : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
+- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37`
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index b9ce0a9..85ca739 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -74,6 +74,7 @@ routing guide (sfia-cycle-routing-guide.md)
 → template d'exécution (prompts/templates/sfia-cycle-execution-template.md)
 → operating model (sfia-chatgpt-cursor-operating-model.md)
 → guardrails (sfia-rules-and-guardrails.md)
+→ si objet = construction/évolution SFIA Studio : Convergence Pre-check (§2.0.G)
 → contexte projet (documents projet concernés)
 → prompt Cursor généré (contrat d'exécution)
 ```
@@ -124,6 +125,30 @@ Repo-informed pre-check ChatGPT
 - push handoff autorisé : oui — L3 borné (automatique si rapport Cursor, sauf exception technique)
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
+
+SFIA Studio Convergence Pre-check :
+- triggered : oui / non
+- Build Doctrine :
+  - path : projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+  - ref :
+  - lue : oui/non
+  - statut :
+- Convergence Roadmap :
+  - path : projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+  - ref :
+  - lue : oui/non
+  - snapshot/milestone courant :
+- doctrine v3 applicable :
+- capacité v3 ciblée :
+- milestone ciblée :
+- classification actifs :
+- gap(s) fermé(s) :
+- lien trajectoire :
+- exit proof :
+- dette temporaire :
+- trajectoire de sortie :
+- gates Morris :
+- verdict : CONVERGENCE CONTEXT LOADED / PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE / STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 ```

 #### E. Cas Git inaccessible
@@ -144,15 +169,61 @@ Cursor devra renforcer la découverte locale et stopper si divergence.

 | Niveau | Rôle | Source |
 |--------|------|--------|
-| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle | Projet ChatGPT (hors Git) — voir §10 |
-| **2. Template Git** | Source canonique versionnée — procédure Repo-informed pre-check | Ce fichier sur Git `main` |
+| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle | Projet ChatGPT (hors Git) — voir §10 ; **couche Studio convergence = PENDING** (mise à jour instructions = étape ultérieure Morris) |
+| **2. Template Git** | Source canonique versionnée — procédure Repo-informed pre-check (+ Convergence Pre-check Studio) | Ce fichier sur Git `main` |
 | **3. Prompt Cursor généré** | Contrat d'exécution — vérifié localement par Local Git Truth Check | Prompt instancié par ChatGPT |

+#### G. SFIA Studio Convergence Pre-check (spécialisation bornée)
+
+> **Ne s’applique pas** aux projets SFIA sans rapport avec la construction de SFIA Studio.
+> **Ne transforme pas** ce template en template Studio-only.
+
+**Trigger Studio = oui** si l’objet est la construction, l’évolution, l’architecture, la roadmap, la validation ou le prompting de **SFIA Studio** (même trigger que routing guide §4.3.0a).
+
+Lorsque trigger = oui, ChatGPT **doit** lire depuis Git **avant** de générer le prompt :
+
+1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
+2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
+3. sources v3 applicables (`projects/sfia-studio/sfia-v3-framing/**`)
+4. état repo/projet Studio concerné
+
+**Règle dure :**
+
+```text
+trigger Studio = oui
+ET (Build Doctrine non lue
+    OU Roadmap non lue
+    OU capacité / trajectory link non qualifié)
+→ NE PAS générer le prompt Cursor
+
+PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
+```
+
+Si l’analyse Studio elle-même n’a pas chargé le contexte convergence requis :
+
+```text
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+```
+
+Séquence :
+
+```text
+Repo-informed pre-check
+→ si Studio trigger : Convergence Pre-check (§2.0.G + mini-fiche)
+→ qualification cycle
+→ CKC/process guidance applicable
+→ sources spécifiques
+→ instanciation prompt Cursor
+```
+
+Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; doctrine v3 = destination produit ; v2.6 = baseline opérationnelle processus ; runtime v3 **non ADOPTED** par défaut.
+
 ### 2.1 Déclenchement

 À partir d'une demande Morris (nouveau chat ou conversation en cours) :

 0. **Repo-informed pre-check** — §2.0 si trigger actif
+0bis. **SFIA Studio Convergence Pre-check** — §2.0.G si objet = construction/évolution SFIA Studio ; sinon N/A
 1. **Qualifier** la demande — objectif, risque, impact, livrable attendu
 2. **Identifier le type de cycle projet** — cartographie §4 (15 cycles)
 2bis. **Résoudre le Cycle Knowledge Contract candidat** — routing guide §4.4.5 ; lire pilote si disponible ; sinon carte synthétique + fallback méthode v2.6 ; déclarer statut `candidate` / `absent` dans la mini-fiche §2.0.D
@@ -163,7 +234,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
 9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
-10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite ; le CKC reste hors contrat d'exécution Cursor
+10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite ; le CKC reste hors contrat d'exécution Cursor ; **interdit** si §2.0.G échoue

 ### 2.2 Nouveau chat et sources projet


```

---

## 12. Instruction ChatGPT

Lire ce handoff depuis Git avant verdict.
Si parent correct, 6 fichiers, identity PASS, F3 preserved, cible clean, push=0 : conclure
**ISOLATED COMMIT COMPLETE — CONVERGENCE PATCH IDENTITY VERIFIED — F3 WORKTREE PRESERVED — READY FOR MORRIS PUSH / PR GATE**
Ne pas exécuter push/PR/merge sans nouveau GO Morris.
