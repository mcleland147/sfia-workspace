# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI Technical Backlog Correction

## 1. Timestamp local et UTC

| Horodatage | Valeur |
|---|---|
| **Consommation Morris** | 2026-08-05 14:25 CEST (+0200) / 12:25 UTC |
| **Truth Cursor initial** | 2026-08-05 14:35:59 CEST / 12:35:59 UTC |
| **Final project truth** | voir section FINAL PROJECT TRUTH |

---

## 2. GO Morris exact

```text
GO CORRECTION BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — REMOVE DEPENDENCY CYCLES AND RECONCILE TECHNICAL BACKLOG WITH EXISTING MAIN IMPLEMENTATION FROM PR #308 TO #310
```

---

## 3. Cycle / profil / typologie

Backlog / user stories — correction · Standard · EVOL/DOC · Documentation-only

---

## 4. Main / branche

`origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1`
Branche : `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog`

---

## 5. Handoff entrant

tip `2c7328ce960246d4071852f326783115ac63ae28` · blob `212c8772ab038e1c1be330459a67669336a1eac7`

---

## 6. CKC

Contrat détaillé Backlog : non trouvé · fallback carte synthétique / §4.5 · guidance only.

---

## 7. Sources / PR / fichiers main

PR #308 (`c38b6ca9…`) · #309 (`de2800aa…`) · #310 (`e36f12b6…`) · ports/adapters/tests execution-run lus.

---

## 8. Local Git Truth initial

```text
=== LOCAL GIT TRUTH INITIAL — BACKLOG CORRECTION ===
2026-08-05 14:35:59 CEST +0200
2026-08-05 12:35:59 UTC
TOPLEVEL=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
BRANCH=backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
UPSTREAM=none
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
AHEAD=0
BEHIND=0
--- status --short ---
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
--- diff name-status ---
--- cached ---
--- worktree (count) ---
WORKTREE_COUNT=79
--- ls-remote handoff ---
2c7328ce960246d4071852f326783115ac63ae28	refs/heads/sfia/review-handoff
ORIGIN_HANDOFF=2c7328ce960246d4071852f326783115ac63ae28
```

---

## 9. Hashes 100–103 avant

103 avant `19d76b1598134410fd5a24e363c0d29790df1946759d531f4bd51986474c87f9` · 1337 lignes · 100–102 inchangés.

---

## 10. Graphe avant

```text
NODES=33
EDGES=57
CYCLES=[['TB-03-02', 'TB-01-05']]
EDGES_LIST=[('TB-00-04', 'TB-00-03'), ('TB-00-05', 'TB-00-03'), ('TB-01-01', 'TB-00-03'), ('TB-01-01', 'TB-00-04'), ('TB-01-02', 'TB-01-01'), ('TB-01-03', 'TB-01-01'), ('TB-01-03', 'TB-01-02'), ('TB-01-04', 'TB-01-01'), ('TB-01-04', 'TB-01-03'), ('TB-01-05', 'TB-01-04'), ('TB-01-05', 'TB-03-02'), ('TB-01-06', 'TB-00-04'), ('TB-01-06', 'TB-01-02'), ('TB-02-01', 'TB-00-06'), ('TB-02-02', 'TB-02-01'), ('TB-02-03', 'TB-00-02'), ('TB-02-03', 'TB-02-01'), ('TB-02-04', 'TB-02-01'), ('TB-02-04', 'TB-03-04'), ('TB-02-05', 'TB-02-01'), ('TB-02-05', 'TB-03-04'), ('TB-03-01', 'TB-00-01'), ('TB-03-02', 'TB-03-01'), ('TB-03-02', 'TB-01-05'), ('TB-03-03', 'TB-03-01'), ('TB-03-03', 'TB-00-06'), ('TB-03-04', 'TB-01-01'), ('TB-03-05', 'TB-03-04'), ('TB-04-01', 'TB-03-03'), ('TB-04-02', 'TB-01-01'), ('TB-04-02', 'TB-04-01'), ('TB-04-03', 'TB-03-05'), ('TB-04-03', 'TB-01-06'), ('TB-04-03', 'TB-04-02'), ('TB-04-04', 'TB-02-05'), ('TB-05-01', 'TB-01-01'), ('TB-05-02', 'TB-05-01'), ('TB-05-02', 'TB-02-01'), ('TB-05-03', 'TB-03-04'), ('TB-05-03', 'TB-05-01'), ('TB-06-01', 'TB-01-04'), ('TB-06-01', 'TB-01-05'), ('TB-06-01', 'TB-01-06'), ('TB-06-02', 'TB-04-02'), ('TB-06-02', 'TB-01-06'), ('TB-06-02', 'TB-04-03'), ('TB-06-03', 'TB-02-03'), ('TB-06-03', 'TB-02-04'), ('TB-06-03', 'TB-03-02'), ('TB-06-03', 'TB-03-04'), ('TB-06-03', 'TB-03-05'), ('TB-06-03', 'TB-05-02'), ('TB-06-04', 'TB-04-04'), ('TB-06-04', 'TB-06-01'), ('TB-06-04', 'TB-06-02'), ('TB-06-04', 'TB-06-03'), ('TB-06-04', 'TB-05-03')]
```

Cycle : TB-01-05 ↔ TB-03-02.

---

## 11. Findings

| Finding | Statut |
|---|---|
| F-BLG-103-01 | **FIXED** |
| F-BLG-103-02 | **FIXED** |
| F-BLG-103-03 | **FIXED** |
| F-BLG-103-04 | **FIXED** |

Arête retirée : TB-01-05 → TB-03-02.

---

## 12. Matrice de réconciliation

`````markdown
## Matrice de réconciliation avec les fondations main PR #308–#310

Sources Git main vérifiées : PR #308 (`c38b6ca9…` V3.1-D2-D1) · PR #309 (`de2800aa…` V3.1-D2-D2) · PR #310 (`e36f12b6…` V3.1-D2-D3).

Anti-claims globaux : memory/fixture/provider-independent **≠** persistance durable A2 · **≠** OpenAI live · **≠** multi-instance · **≠** restart-safe store · **≠** modèle nommé · **≠** production-ready · **≠** item DONE.

| Item | Fondation main | Chemin Git | Capacité démontrée | Limite / anti-claim | Relation | Justification | Risque duplication | Effet item |
|---|---|---|---|---|---|---|---|---|
| TB-00-02 | AJV Draft-07 + 13 schémas ExecutionRun | `…/ajvExecutionRunSchemaValidation.ts` · `…/schemas/**` | Fail-closed schema validation ExecutionRun | Pas de schémas N2/N3 Assistant | EXTEND/EVAL | Prouve stack AJV ; gap N2/N3 séparé | 2e pipeline AJV | Objectif reformulé EVAL+gap |
| TB-00-06 | SecretSourcePort · Env · ServerOnly materializer | `…/ports/secretSourcePort.ts` · `…/secrets/**` | Secrets par handle opaque server-only | Pas catalogue Admin TTL/modèle | REUSE/EXTEND | Réutiliser matérialisation ; catalogue NEW | 2e secret stack | Objectif reformulé REUSE |
| TB-01-01 | ExecutionRunRepositoryPort + memory | `…/ports/executionRunRepository.ts` · `…/memoryExecutionRun*` | Persist process-local ExecutionRun | ≠ Project durable A2 · ≠ external store | EXTEND pattern | Pattern port oui ; store Project NEW | 2e repo générique | Port Project distinct, pattern réutilisé |
| TB-01-04 | Persist guards / invariants | `…/domain/invariants.ts` · persist tests | Garde-fous écriture ExecutionRun | Pas multi-instance durable | NEW DOMAIN-SPECIFIC | Concurrence A2 Project NEW | Copier memory locks | AC multi-instance préservés |
| TB-01-05 | Invariants / transitions | `…/domain/transitions.ts` · `invariants.ts` | Transitions/late-result discipline | Pas clés idempotence N2/N3 | EXTEND | Idempotence générique avant AuthorityGate | Couplage gate | Dépendance TB-03-02 retirée |
| TB-02-01 | AiExecutionPort + adapters | `…/ports/aiExecutionPort.ts` · `…/infrastructure/ai/**` | Lane AI provider-independent | Pas OpenAI live / modèle | EXTEND | Adapter OpenAI sur port existant | Nouveau port générique | Objectif EXTEND |
| TB-02-02 | AI lane / complete | mêmes + providerInvocation | Completion non-stream prouvée | Streaming N1 non démontré | NEW DOMAIN-SPECIFIC | Streaming produit NEW | — | Gap streaming explicite |
| TB-02-03 | Schema validation port + AJV | `…/ports/executionRunSchemaValidation.ts` | 13 schémas fail-closed | Pas N2/N3 Assistant | REUSE/EXTEND | Une seule pipeline AJV | 2e AJV | REUSE obligatoire |
| TB-02-04 | providerInvocation async | `…/application/providerInvocation.ts` · cancel/late tests | Timeout/cancel/retry/late evidence-only | Pas audit provider Assistant durable | REUSE/EXTEND | Brancher audit ; pas rewrite | Rewrite async | Objectif intégration |
| TB-03-02 | HumanDecisionGate type/schema | `…/domain/types.ts` HumanDecisionGate | Contrat gate humain ExecutionRun | Pas AuthorityGate N3 Assistant | EXTEND | N3 Assistant sur contrat existant | Gate parallèle | Consomme TB-01-05 |
| TB-03-04 | ExecutionEventSinkPort + adapters | `…/ports/executionEventSinkPort.ts` · `…/events/**` | Events process-local redacted | ≠ audit durable A2 | EXTEND | Lane logique durable NEW | Confondre sink/audit | Distinction explicite |
| TB-03-05 | human_gate / events | types + sinks | Événements gate | ≠ lane métier durable | EXTEND/NEW | Idem | Mélange lanes | Séparation logique |
| TB-05-03 | redactEventDetail | `…/events/redactEventDetail.ts` | Redaction profonde | Pas vendor APM | REUSE/EXTEND | Corrélation sans secrets | Vendor implicite | Vendor NOT SELECTED |
| TB-06-03 | Harness D2-D1/D2/D3 | `app/__tests__/oa/execution-run/**` (28) | Non-régression fondations | ≠ preuve Assistant A2 | REUSE harness | Tests Assistant NEW | « déjà testé A2 » | Anti-claim explicite |

Comptage relations (items réconciliés ci-dessus) : REUSE/EXTEND majoritaires · NEW DOMAIN-SPECIFIC pour gaps A2/Assistant · aucun item marqué DONE.
`````

---

## 13. Graphe après

```text
NODES=33
EDGES=56
CYCLES=[]
TOPO=['TB-00-01', 'TB-00-02', 'TB-00-03', 'TB-00-04', 'TB-00-05', 'TB-00-06', 'TB-01-01', 'TB-01-02', 'TB-01-03', 'TB-01-04', 'TB-01-05', 'TB-01-06', 'TB-02-01', 'TB-02-02', 'TB-02-03', 'TB-03-01', 'TB-03-02', 'TB-03-03', 'TB-03-04', 'TB-02-04', 'TB-02-05', 'TB-03-05', 'TB-04-01', 'TB-04-02', 'TB-04-03', 'TB-04-04', 'TB-05-01', 'TB-05-02', 'TB-05-03', 'TB-06-01', 'TB-06-02', 'TB-06-03', 'TB-06-04']
```

**GRAPH ACYCLIC** · topo 33/33.

---

## 14. Validation 33 items

PASS (granularité, deps, relation main, Delivery NOT AUTHORIZED).

---

## 15. A2 / ADR / 21 impacts / réserves

Préservés · COVERED · KEEP-OPEN · non-sélections · priorités/lots candidates · Delivery NOT-CONSUMED.

---

## 16. Document 103 corrigé — contenu intégral

`````markdown
# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog

## 1. Statut

**TECHNICAL IMPLEMENTATION BACKLOG CORRECTED —**
**DEPENDENCY GRAPH ACYCLIC —**
**F-BLG-103-01…04 FIXED —**
**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**
**BACKLOG GATE CONSUMED BY MORRIS —**
**PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**
**TECHNOLOGY SELECTIONS REMAIN OPEN —**
**ALL RESERVES REMAIN OPEN —**
**DELIVERY GATE NOT CONSUMED —**
**NO IMPLEMENTATION AUTHORIZED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |

---

## 2. GO Morris

```text
GO BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DERIVE TECHNICAL IMPLEMENTATION BACKLOG FROM APPLIED ARCHITECTURE A2 AND ADR DECISIONS
```

**Effet :** `BACKLOG-GATE=CONSUMED-BY-MORRIS`

Autorise : création backlog · dérivation stories · séquence candidate · préparation décisions/lots.

N’autorise pas : Delivery · implémentation · sélection store/plateforme · dépendance · commit/push projet · PR/merge.

---

## 3. Autorité et timestamp

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 13:53 CEST (+0200) / 11:53 UTC |
| **Rédaction Cursor** | 2026-08-05 14:08 CEST (+0200) / 12:08 UTC |

---

## 4. Cycle / profil / typologie

Backlog / user stories — dérivation backlog technique · Standard · EVOL/DOC · Documentation-only · Doctrine SFIA v2.6

---

## 5. Sources et hiérarchie

1. Git main ; 2. GO courant ; 3. décisions 93/97/99/102 ; 4. architectures 91/94–95/100 ; 5. framing 90 ; 6. packs 92/96/98/101 ; 7. CKC synthétique / §4.5 guidance only ; 8. hypothèses explicites.

**CKC détaillé Backlog :** non trouvé · fallback carte synthétique + §4.5 · aucune autorité d’exécution.

---

## 6. Git et handoff

| Champ | Valeur |
|---|---|
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Branche** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **Handoff entrant** | tip `79767e64e3e97ffeaa2e87f7dc49bec011b5fb17` · blob `25763db03292f1233912bf6952556ad3efa5f08b` |

---

## 7. Documents entrants et hashes

| Doc | SHA-256 | Lignes |
|---|---|---|
| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |

EMBED_MATCH document 102 : **PASS**.

---

## 8. Portée du backlog

Transformer le document 102 en épics/items testables · priorités **candidates** · lots **candidates** · gates humaines · **sans** code, migration exécutable, sélection techno, Delivery.

---

## 9. Décisions appliquées préservées

VALIDATION=B · BUNDLE=A2 · PROFILE=EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE · CONSTRAINTS=`external-durable-store;explicit-concurrency;no-embedded` · TOPO=A · PERSIST=B · SERVER=C · PURGE=C · AUDIT=B · STREAM=A · VALIDATE-LIB=A · SECRETS=A · ADMIN-AUTHZ=B · HEALTH=C · NORMALIZED SETS acceptés.

Alternatives A1/B1/C **non** rouvertes.

---

## 10. Principes de découpage

Une story = un résultat vérifiable · dépendances visibles · distinguer DECISION-PREP / ENABLER / FEATURE-TECH / NFR / QA / OPS / DOC · priorité candidate ≠ décision Morris · pas de fourre-tout · PASS/FAIL/BLOCKED possible.

---

## 11. Types d’items

DECISION-PREP · ENABLER · FEATURE-TECH · NFR · QA · OPS · DOC — définis dans le GO ; utilisés ci-dessous.

---

## 12. Règles de priorité candidate

P0 fondations/décisions · P1 capacité FPI · P2 durcissement pré-pilote · P3 post-FPI/non bloquant · toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**.

---

## 13. Definition of Ready candidate

Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. **Pas** Ready for Delivery si décision structurante ouverte.

---

## 14. Definition of Done candidate

Périmètre · tests nominaux/négatifs · typecheck/lint/tests · preuve · pas de fuite secret · pas de régression hors scope · docs · réserves tracées · validation indépendante · handoff. **Candidate** — ne valide aucun item actuel.

---

## 15. Architecture de backlog

```text
EPIC-TB-00 Decision Prep
    → EPIC-TB-01 Persistence A2
        → EPIC-TB-02 Provider pipeline
            → EPIC-TB-03 Authority & audit
                → EPIC-TB-04 Lifecycle / FinOps
                    → EPIC-TB-05 Health / observability
                        → EPIC-TB-06 QA / pilot readiness
```

État applicatif constaté (main, non modifié) : Next.js 15 · React 19 · TypeScript · AJV présent · OpenAI SDK présent · fixtures locales · README : aucun backend réel · pas de persistance durable démontrée.

---

## 16. Épics

### EPIC-TB-00 — Implementation preparation and decisions
Préparer décisions ouvertes avant implémentation (auth, AJV, store, data-access, plateforme, secrets/config).

### EPIC-TB-01 — External durable Project persistence
Port externe · modèle · isolation · transactions · idempotence · migration/backup.

### EPIC-TB-02 — OpenAI provider and response pipeline
Port OpenAI · server-only · N1 stream · N2/N3 AJV · erreurs · metering/soft cap.

### EPIC-TB-03 — Authority, administration and audit
Rôles · AuthorityGate · admin config · audit provider/métier.

### EPIC-TB-04 — Lifecycle, purge, privacy and FinOps
TTL config · purge hybride · rétention/redaction · hard cap Decision Pack.

### EPIC-TB-05 — Health, resilience and observability
Liveness/readiness · modes dégradé/fail-closed · logs/métriques.

### EPIC-TB-06 — QA and pilot readiness
Tests A2 · purge/backup · governance · readiness pilote.

---

## 17. Backlog détaillé

Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).

#### TB-00-01 — Inventaire du mécanisme d’authentification existant exploitable

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-01` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | décision nécessaire si aucun mécanisme exploitable |
| **Source** | doc 102 ADR-ASST-ADMIN-AUTHZ-01=B · package/README main · absence auth documentée README P0 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie IAM |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Déterminer si un mécanisme d’auth existant dans le repo peut être étendu pour Admin/Morris sans nouveau sous-système IAM.

**Critères d’acceptation :**
  - Un inventaire écrit liste les points d’auth/session/middleware existants ou constate l’absence.
  - Le constat distingue « exploitable pour extension Admin/Morris » vs « arbitrage dédié requis ».
  - Aucune technologie IAM n’est sélectionnée ; aucun code auth n’est ajouté.

**Preuves attendues :**
  - document d’inventaire / section Decision Prep
  - références de chemins Git main
  - anti-claim : pas de vendor IAM

**Hors périmètre :** code auth, IAM vendor, middleware production

#### TB-00-02 — Vérification d’adéquation AJV pour schémas N2/N3

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-02` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | arbitrage Morris si incompatible |
| **Source** | doc 102 ADR-ASST-VALIDATE-LIB-01=A · package.json ajv · AF-02 · R-TECH-AF02-BOUNDARY-01 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND/EVAL — `ExecutionRunSchemaValidationPort` + `ajvExecutionRunSchemaValidation` (PR #308) prouvent AJV fail-closed pour ExecutionRun · gap N2/N3 Assistant séparé · **pas FIT N2/N3 automatique** |

**Objectif :** Qualifier l’adéquation de l’AJV déjà branché sur main (Draft-07, 13 schémas ExecutionRun) pour les futurs schémas N2/N3 Assistant, sans conclure FIT automatique N2/N3.

**Critères d’acceptation :**
  - Un rapport d’adéquation décrit version AJV, capacités TypeScript et limites pour schémas N2/N3.
  - Verdict explicite : FIT / FIT-WITH-CONSTRAINTS / NOT-FIT.
  - Si NOT-FIT, stop condition documentée ; aucun remplacement silencieux de bibliothèque.

**Preuves attendues :**
  - rapport AJV fit
  - extrait package.json
  - lien R-TECH-AF02-BOUNDARY-01

**Hors périmètre :** ajout dépendance alternative, changement package.json

#### TB-00-03 — Decision Pack options de store externe durable (A2)

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-03` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | décision Morris store requise avant LOT-D1 |
| **Source** | doc 102 ARCH-BUNDLE=A2 · ADR-ASST-PERSIST-01=B · contraintes external-durable-store;no-embedded |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, fournisseur store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer un Decision Pack d’options de store externe compatible multi-instance / serverless sans sélectionner le fournisseur.

**Critères d’acceptation :**
  - Au moins deux options comparables de store externe sont documentées avec trade-offs A2.
  - Chaque option couvre concurrence, backup/restore, migration, coût et réversibilité sans inventer de tarif.
  - Aucune option embarquée (SQLite/fs local durable) n’est recommandée comme store opérationnel.

**Preuves attendues :**
  - Decision Pack store candidat
  - matrice trade-offs
  - anti-claims no-embedded

**Hors périmètre :** choix Postgres/Supabase/Neon/etc., code, IaC

#### TB-00-04 — Decision Pack stratégie d’accès données et migrations

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-00-03 |
| **Gate Morris** | décision Morris data-access/migration |
| **Source** | doc 102 conséquences A2 · impacts migrations · ADR-ASST-PERSIST-01=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | ORM, outil de migration |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer les options d’accès données / migrations compatibles A2 sans sélectionner ORM ni outil.

**Critères d’acceptation :**
  - Options d’accès données et de migration sont comparées (sans choisir ORM/outil).
  - Les exigences concurrence, unicité et idempotence sont listées comme contraintes d’implémentation futures.
  - Le pack indique explicitement BLOCKED BY FUTURE MORRIS DECISION tant que non décidé.

**Preuves attendues :**
  - Decision Pack data-access/migration
  - dépendances TB-00-03

**Hors périmètre :** sélection ORM, création migration exécutable

#### TB-00-05 — Decision Pack plateforme de déploiement compatible A2

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-05` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-00-03 |
| **Gate Morris** | décision Morris plateforme si lot Delivery la requiert |
| **Source** | doc 102 DEPLOYMENT-PROFILE · ARCH-BUNDLE=A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | plateforme cloud, hébergeur, région, nombre d’instances |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Comparer des profils de plateforme compatibles EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE sans sélectionner cloud/hébergeur.

**Critères d’acceptation :**
  - Options de plateforme sont évaluées contre volume durable externe, multi-instance et absence de persist locale.
  - Le pack n’impose ni région, ni nombre d’instances, ni fournisseur.
  - Incompatibilités A1 (embedded) sont explicitement exclues.

**Preuves attendues :**
  - Decision Pack plateforme candidat
  - critères A2

**Hors périmètre :** choix AWS/Vercel/Azure, IaC, déploiement

#### TB-00-06 — Préparation secrets server-only et paramètres de configuration Admin

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-06` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | aucune sélection ; fermeture réserves hors scope |
| **Source** | doc 102 ADR-ASST-SECRETS-01=A · ADMIN-AUTHZ=B · FPI-08/FPI-14 différés · R-TECH-TTL-01 · R-TECH-FINOPS-HARD-01 |
| **Réserves liées** | R-TECH-TTL-01, R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | secret manager, modèle OpenAI, valeur TTL, hard cap FinOps |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | REUSE/EXTEND — secrets opaque handle + env adapter (PR #309) · catalogue config Admin NEW · aucun .env · **pas DONE** |

**Objectif :** Documenter la réutilisation/extension de SecretSourcePort / EnvSecretSourceAdapter / ServerOnlySecretMaterializer et le catalogue Admin (modèle/TTL/soft cap) sans créer .env ni seconde matérialisation.

**Critères d’acceptation :**
  - Catalogue des secrets server-only et interdits navigateur/logs est écrit.
  - Catalogue des paramètres Admin (modèle, TTL, soft cap) est listé sans valeur TTL ni hard cap.
  - Trajectoire secret manager marquée future ; aucun fichier .env créé.

**Preuves attendues :**
  - DOC paramètres/secrets
  - liens réserves TTL/FinOps

**Hors périmètre :** création .env, secret manager vendor, valeur TTL, hard cap

#### TB-01-01 — Port de persistance externe Project (abstraction)

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-01` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-03, TB-00-04 |
| **Gate Morris** | décision store + data-access |
| **Source** | doc 102 impact 1 · PERSIST=B · A2 no-embedded |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, ORM |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND pattern — `ExecutionRunRepositoryPort` + memory store (PR #308) = frontière process-local ExecutionRun · **≠** persistance durable Project A2 · interdiction second repo générique concurrent non justifié |

**Objectif :** Définir le port de persistance Project durable externe A2 en réutilisant le *pattern* `ExecutionRunRepositoryPort`, sans traiter le repository memory ExecutionRun comme store Project durable.

**Critères d’acceptation :**
  - Le port expose des opérations Project CRUD/query sans API embarquée filesystem.
  - Les tests du port utilisent un double ; aucun store réel n’est hardcodé dans l’interface.
  - Le redémarrage d’instance n’implique aucune perte d’état via le port (contrat documenté).

**Preuves attendues :**
  - contrat de port
  - tests double
  - anti-claim no-embedded

**Hors périmètre :** choix store, schéma SQL exécutable

#### TB-01-02 — Modèle logique de données Project

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-02` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store pour mapping physique |
| **Source** | doc 102 impact 2 · docs 91/93/100 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | schéma physique final |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Spécifier le modèle logique Project (entités, invariants) aligné AF/UX sans schéma physique final.

**Critères d’acceptation :**
  - Le modèle logique couvre Project et invariants d’isolation.
  - Aucun schéma physique final ni DDL n’est livré comme décision.
  - Traçabilité vers documents 91/93/100 est explicite.

**Preuves attendues :**
  - modèle logique documenté
  - matrice invariants

**Hors périmètre :** schéma physique final, migration appliquée

#### TB-01-03 — Isolation Project et contraintes d’unicité

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-03` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-01-02 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impacts 2–3 · A2 explicit-concurrency |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Garantir l’isolation Project et les contraintes d’unicité dans le store externe sous concurrence.

**Critères d’acceptation :**
  - Deux Projects distincts ne partagent pas d’état durable.
  - Les contraintes d’unicité pertinentes échouent de façon déterministe sous collision.
  - Aucun store local embarqué n’est utilisé pour l’isolation.

**Preuves attendues :**
  - tests isolation
  - tests unicité

**Hors périmètre :** multi-tenancy cloud vendor

#### TB-01-04 — Transactions et concurrence explicite A2

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-04` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-01-03 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impacts 3,16 · A2 explicit-concurrency |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | NEW DOMAIN-SPECIFIC (s’appuie sur invariants persist PR #308 comme inspiration) · memory ≠ multi-instance durable · **pas DONE** |

**Objectif :** Assurer transactions / coordination d’écriture Project compatibles multi-instance A2 ; les garde-fous memory ExecutionRun ne démontrent pas la concurrence multi-instance durable.

**Critères d’acceptation :**
  - Scénarios concurrent writers sont définis et ont un comportement attendu documenté.
  - Aucune hypothèse single-writer A1 n’est utilisée.
  - Échecs de concurrence sont observables et testables.

**Preuves attendues :**
  - spéc concurrency
  - tests concurrence (futurs TB-06-01)

**Hors périmètre :** verrouillage filesystem local

#### TB-01-05 — Idempotence des consommations N2/N3

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-05` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-04 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impact 4 · F-ARCH-01 · STREAM=A (N2/N3 non streamés) |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — invariants/transitions ExecutionRun (PR #308) offrent des garde-fous persistance ; mécanisme d’idempotence N2/N3 Assistant reste domain-specific · **pas DONE** |

**Objectif :** Fournir un mécanisme générique d’idempotence serveur pour les écritures/consommations N2/N3 sous retry et multi-instance, réutilisable par AuthorityGate (sans dépendre de TB-03-02).

**Critères d’acceptation :**
  - Un retry de la même consommation N2/N3 ne duplique pas l’effet métier.
  - Les clés d’idempotence sont serveur et auditables.
  - Le provider ne peut pas forcer une double consommation.

**Preuves attendues :**
  - tests idempotence
  - traces audit

**Hors périmètre :** bus événementiel, saga distribuée hors scope FPI

#### TB-01-06 — Fondation migrations, sauvegarde et restauration

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-06` |
| **Type** | OPS |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-04, TB-01-02 |
| **Gate Morris** | décision migration tool + store |
| **Source** | doc 102 impacts 14–15 · PERSIST=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | outil de migration, technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer fondations migration de schéma + backup/restore Project avant pilote.

**Critères d’acceptation :**
  - Une procédure backup/restore est documentée pour l’état Project durable.
  - Une stratégie de migration de schéma est définie sans outil imposé ici.
  - Un redémarrage d’instance après restore ne perd pas l’état restauré (critère de preuve).

**Preuves attendues :**
  - runbook backup/restore candidat
  - stratégie migration

**Hors périmètre :** IaC, exécution restore production

#### TB-02-01 — Port OpenAI minimal et configuration server-only

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-01` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-06 |
| **Gate Morris** | décision modèle OpenAI hors backlog courant |
| **Source** | doc 102 ADR-ASST-SECRETS-01=A · FPI-10-B · impact 12 · TOPO=A SERVER=C |
| **Réserves liées** | aucune |
| **Non-sélections liées** | modèle OpenAI, endpoint OpenAI |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — `AiExecutionPort` + fake/platform adapters (PR #309) · OpenAI live / modèle nommé **non démontrés** · **pas DONE** |

**Objectif :** Étendre/intégrer un adapter OpenAI live ou Assistant-specific sur `AiExecutionPort` existant (provider-independent), avec config server-only ; sans recréer un port générique concurrent ni sélectionner de modèle.

**Critères d’acceptation :**
  - Le port est server-only ; aucune clé n’apparaît côté client.
  - Aucun modèle OpenAI nommé n’est hardcodé dans le backlog/item.
  - Les appels réels restent hors scope jusqu’à GO Delivery + sélection modèle.

**Preuves attendues :**
  - contrat port
  - checklist anti-leak secrets

**Hors périmètre :** appel OpenAI réel, sélection modèle, .env versionné

#### TB-02-02 — Streaming progressif N1 uniquement

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-02-01 |
| **Gate Morris** | fermeture/clarification réserves UX si surfaces UI touchées |
| **Source** | doc 102 ADR-ASST-STREAM-01=A · SERVER=C · impact 9 · R-TECH-AF02-BOUNDARY-01 · réserves UX |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01, R-UX-FPI-02, R-UX-FPI-03, R-UX-FPI-04, R-UX-04 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | NEW DOMAIN-SPECIFIC (frontière AI existante) · streaming N1 non démontré sur main · réserves UX/AF-02 · **pas DONE** |

**Objectif :** Permettre le streaming N1 Assistant via frontière serveur hybride ; les fondations provider actuelles ne démontrent pas le streaming N1 produit.

**Critères d’acceptation :**
  - N1 peut diffuser une réponse progressive jusqu’à complétion ou cancellation.
  - N2/N3 ne reçoivent pas de chunks structurants partiels.
  - Cancellation et erreurs sont auditables côté provider.

**Preuves attendues :**
  - tests streaming N1
  - preuve absence streaming N2/N3

**Hors périmètre :** protocole vendor imposé, WebSockets hors décision

#### TB-02-03 — Sorties N2/N3 complètes validées via AJV

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-03` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-02, TB-02-01 |
| **Gate Morris** | AJV fit confirmé |
| **Source** | doc 102 VALIDATE-LIB=A · AF-02 · impacts 8,20 · R-TECH-AF02-BOUNDARY-01 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | REUSE/EXTEND — validation port + AJV Draft-07 + 13 schémas (PR #308) · schémas N2/N3 Assistant NEW · R-TECH-AF02-BOUNDARY-01 OPEN |

**Objectif :** Évaluer puis réutiliser/étendre la pipeline AJV existante pour schémas N2/N3 Assistant fail-closed ; interdiction d’une deuxième pipeline AJV silencieuse.

**Critères d’acceptation :**
  - Une sortie N2/N3 invalide est rejetée fail-closed.
  - Une sortie valide passe la validation avant surface/consommation.
  - Aucun streaming partiel N2/N3 n’est accepté.

**Preuves attendues :**
  - tests validation AJV
  - cas négatifs schéma

**Hors périmètre :** nouvelle lib de validation

#### TB-02-04 — Erreurs provider et cancellation auditables

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-04` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-01, TB-03-04 |
| **Gate Morris** | aucune |
| **Source** | doc 102 STREAM=A · AUDIT-STORE=B · F-ARCH-02 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | REUSE/EXTEND — `providerInvocation` async + late-result (PR #309/#310) · audit provider Assistant = EXTEND event sink · **pas DONE** |

**Objectif :** Intégrer timeout/cancellation/retries bornés/late-result evidence-only déjà présents vers l’audit provider Assistant ; ne pas redévelopper ces primitives sans justification.

**Critères d’acceptation :**
  - Cancellation utilisateur/provider produit un enregistrement d’audit provider.
  - Erreurs provider ne laissent pas d’état métier N2/N3 partiel consommé.
  - N1 peut rester en mode dégradé selon HEALTH=C / FPI-15.

**Preuves attendues :**
  - tests erreurs/cancellation
  - enregistrements audit provider

**Hors périmètre :** retry policies cloud vendor

#### TB-02-05 — Metering provider et soft cap (sans hard cap)

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-05` |
| **Type** | NFR |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-01, TB-03-04 |
| **Gate Morris** | aucune pour metering/soft cap · hard cap reste DEFER-BEFORE-PILOT (TB-04-04) — non bloquant pour cet item |
| **Source** | doc 102 FPI-14 soft · R-TECH-FINOPS-HARD-01 · impact metering |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 (contexte KEEP-OPEN — **non bloquante** pour soft cap/metering) |
| **Non-sélections liées** | hard cap FinOps, tarif, SLO |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — `usage-summary` schéma + events usage_validated (PR #308/#309) comme base metering · soft cap Assistant NEW · hard cap non implémenté |

**Objectif :** Mesurer l’usage provider et appliquer soft cap indépendamment de la décision hard cap ; hard cap reste différé avant pilote (TB-04-04).

**Critères d’acceptation :**
  - Le metering enregistre les tentatives provider indépendamment du succès métier.
  - Le soft cap est configurable Admin sans valeur inventée ici.
  - Le hard cap n’est pas implémenté tant que DEFER-BEFORE-PILOT.

**Preuves attendues :**
  - tests soft cap
  - preuve absence hard cap implicite

**Hors périmètre :** tarifs, SLO, hard cap numérique

#### TB-03-01 — Rôles Admin et Morris sur mécanisme auth existant étendu

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-01` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-01 |
| **Gate Morris** | auth existante confirmée ou arbitrage dédié |
| **Source** | doc 102 ADMIN-AUTHZ=B · impact 11 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie IAM |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Étendre l’auth existante avec rôles Admin et Morris distincts, contrôles serveur.

**Critères d’acceptation :**
  - Admin et Morris sont des rôles distincts côté serveur.
  - Un spoofing client de rôle est rejeté.
  - Aucun vendor IAM n’est introduit silencieusement.

**Preuves attendues :**
  - tests rôles
  - tests anti-spoofing

**Hors périmètre :** nouveau sous-système IAM (option C)

#### TB-03-02 — AuthorityGate N3 serveur et consommation atomique

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-03-01, TB-01-05 |
| **Gate Morris** | auth confirmée |
| **Source** | doc 102 ADMIN-AUTHZ=B · F-ARCH-01 · impact 10 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — `HumanDecisionGate` + schémas/transitions (PR #308) · AuthorityGate N3 Assistant = capacité NEW DOMAIN-SPECIFIC sur cette base · **pas DONE** |

**Objectif :** Implémenter AuthorityGate N3 Assistant selon F-ARCH-01 en réutilisant/étendant le contrat HumanDecisionGate existant, en consommant l’idempotence générique TB-01-05.

**Critères d’acceptation :**
  - Seul Morris peut consommer une décision N3 via gate serveur.
  - Le provider ne génère/valide/consomme aucun GO.
  - La consommation est atomique et idempotente.

**Preuves attendues :**
  - tests AuthorityGate
  - preuve anti-provider-authority

**Hors périmètre :** workflow externe BPM

#### TB-03-03 — Administration serveur modèle / TTL / soft cap

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-03` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-03-01, TB-00-06 |
| **Gate Morris** | fermeture/policy TTL ; modèle nommé hors item |
| **Source** | doc 102 ADMIN-AUTHZ=B · FPI-08 CONFIG-ADMIN-NO-VALUE · R-TECH-TTL-01 |
| **Réserves liées** | R-TECH-TTL-01, R-UX-04 |
| **Non-sélections liées** | modèle OpenAI, valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Permettre à Admin de configurer modèle, TTL et soft cap côté serveur sans valeurs inventées.

**Critères d’acceptation :**
  - Admin peut lire/écrire la configuration autorisée serveur.
  - TTL reste sans valeur numérique imposée par le backlog.
  - Morris ≠ Admin pour N3.

**Preuves attendues :**
  - tests config Admin
  - preuve TTL non hardcodé

**Hors périmètre :** UI Figma nouvelle, sélection modèle dans cet item

#### TB-03-04 — Lane d’audit provider transverse

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-04` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store (même tech physique possible) |
| **Source** | doc 102 AUDIT-STORE=B · F-ARCH-02 · impact 6 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, vendor observabilité |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — event sink + redaction (PR #309) · lane audit durable Project = NEW DOMAIN-SPECIFIC A2 · ne pas confondre event sink et audit durable |

**Objectif :** Établir la lane logique d’audit provider durable A2 en s’appuyant sur `ExecutionEventSinkPort` (événements process-local non autoritatifs ≠ audit durable).

**Critères d’acceptation :**
  - Chaque tentative provider produit un enregistrement d’audit provider.
  - L’échec métier n’empêche pas l’audit provider.
  - La séparation logique provider/métier est vérifiable.

**Preuves attendues :**
  - tests audit provider
  - schéma logique audit

**Hors périmètre :** séparation physique obligatoire, vendor observability

#### TB-03-05 — Lane d’audit métier séparée

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-05` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-03-04 |
| **Gate Morris** | décision store |
| **Source** | doc 102 AUDIT-STORE=B · impact 7 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND/NEW — human_gate/events (PR #308–#310) · lane métier durable A2 NEW · **pas DONE** |

**Objectif :** Maintenir l’audit métier distinct de l’audit provider ; event sink existant peut alimenter la trajectoire mais n’est pas la lane métier durable.

**Critères d’acceptation :**
  - Les événements métier N2/N3/AuthorityGate sont audités dans la lane métier.
  - Les accès et redactions futurs sont préparés sans politique RGPD inventée.
  - Pas de mélange d’enregistrements provider/métier.

**Preuves attendues :**
  - tests séparation lanes
  - exemples d’événements

**Hors périmètre :** rétention légale chiffrée sans décision

#### TB-04-01 — Configuration TTL administrable sans valeur imposée

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-01` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-03-03 |
| **Gate Morris** | fermeture R-TECH-TTL-01 / policy TTL |
| **Source** | doc 102 R-TECH-TTL-01 · FPI-08-TTL-DURATION=CONFIG-ADMIN-NO-VALUE |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Exposer la configuration TTL Admin sans fixer FPI-08-TTL-DURATION.

**Critères d’acceptation :**
  - La config TTL est lisible/modifiable Admin côté serveur.
  - Aucune durée TTL n’est hardcodée dans le backlog ni inventée.
  - Les items purge référencent cette config.

**Preuves attendues :**
  - tests config TTL
  - preuve absence valeur imposée

**Hors périmètre :** job cron cloud vendor

#### TB-04-02 — Purge hybride lazy + job avec coordination multi-instance

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-04-01 |
| **Gate Morris** | décision store + policy TTL |
| **Source** | doc 102 PURGE=C · impacts 5,19 · A2 multi-instance |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL, technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Mettre en œuvre purge lazy sur accès + job planifié coordonné sous A2.

**Critères d’acceptation :**
  - Lazy purge s’exécute sur accès pertinents sans inventer TTL.
  - Job de purge traite expirations/orphelins avec coordination multi-instance.
  - Purge compatible audit et ne casse pas backup/restore.

**Preuves attendues :**
  - tests purge lazy
  - tests job coordination

**Hors périmètre :** durée TTL numérique, vendor scheduler imposé

#### TB-04-03 — Rétention, redaction et compatibilité backup/restore

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-03` |
| **Type** | NFR |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |
| **Gate Morris** | décisions futures rétention/redaction · aucune réserve formelle liée |
| **Source** | doc 102 AUDIT-STORE=B · RGPD pending · impact 14 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND redaction events (PR #309) · rétention/politique RGPD = décisions futures · **pas de durée inventée** |

**Objectif :** Préparer rétention/redaction audit et compatibilité purge↔backup sans inventer durées RGPD.

**Critères d’acceptation :**
  - Procédures de redaction/rétention sont documentées comme candidates.
  - Un restore après purge ne réintroduit pas silencieusement des données hors politique (critère à tester).
  - Aucune durée légale inventée.

**Preuves attendues :**
  - DOC rétention/redaction
  - tests restore/purge

**Hors périmètre :** outil DLP vendor

#### TB-04-04 — Decision Pack hard cap FinOps avant pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-02-05 |
| **Gate Morris** | décision Morris hard cap avant pilote |
| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | hard cap FinOps, tarif |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | N/A code — Decision Pack documentaire · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |

**Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil.

**Critères d’acceptation :**
  - Options de politique hard cap sont comparées sans valeur numérique inventée.
  - Lien explicite soft cap / metering / pilote est tracé.
  - La réserve R-TECH-FINOPS-HARD-01 reste OPEN jusqu’à décision Morris.

**Preuves attendues :**
  - Decision Pack FinOps hard cap candidat

**Hors périmètre :** seuil inventé, tarification

#### TB-05-01 — Liveness minimale et readiness interne/store

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-01` |
| **Type** | OPS |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store ; format endpoint non sélectionné |
| **Source** | doc 102 HEALTH=C · impact 13 · A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | format health, vendor observabilité |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Exposer liveness et readiness des dépendances internes/store ; provider non bloquant hors scope ici.

**Critères d’acceptation :**
  - Liveness répond sans dépendre du provider.
  - Readiness reflète store/dépendances internes.
  - Aucune information sensible n’est exposée.

**Preuves attendues :**
  - contrat health
  - tests readiness store down

**Hors périmètre :** format endpoint imposé, vendor APM

#### TB-05-02 — Probe provider optionnelle et modes N1 dégradé / N2-N3 fail-closed

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-02` |
| **Type** | NFR |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-05-01, TB-02-01 |
| **Gate Morris** | aucune |
| **Source** | doc 102 HEALTH=C · FPI-15 · impacts 20–21 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Assurer probe provider non bloquante, N1 dégradé possible, N2/N3 fail-closed si provider requis indisponible.

**Critères d’acceptation :**
  - Provider down n’échoue pas nécessairement la liveness.
  - N1 peut fonctionner en mode dégradé documenté.
  - N2/N3 restent fail-closed sans provider requis.

**Preuves attendues :**
  - tests N1 dégradé
  - tests N2/N3 fail-closed provider down

**Hors périmètre :** SLO de disponibilité inventé

#### TB-05-03 — Observabilité logs, métriques et corrélation sans données sensibles

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-03` |
| **Type** | OPS |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P3** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-03-04, TB-05-01 |
| **Gate Morris** | vendor observability NOT SELECTED |
| **Source** | doc 102 observabilité · SECRETS=A · AUDIT=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | vendor observabilité |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | REUSE/EXTEND — `redactEventDetail` + sinks (PR #309) · observabilité produit NEW · vendor NOT SELECTED |

**Objectif :** Définir corrélation logs/métriques Assistant sans fuite, en réutilisant la redaction d’événements existante ; vendor observability NOT SELECTED.

**Critères d’acceptation :**
  - Corrélation request/provider/audit est possible via identifiants non secrets.
  - Aucun secret ni payload sensible n’apparaît dans les logs de preuve.
  - Aucun vendor observability n’est imposé.

**Preuves attendues :**
  - checklist anti-leak
  - exemple corrélation

**Hors périmètre :** Datadog/etc. sélection

#### TB-06-01 — Tests concurrence, multi-instance et perte/redémarrage d’instance

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-01` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-04, TB-01-05, TB-01-06 |
| **Gate Morris** | store/plateforme pour exécution réelle |
| **Source** | doc 102 impacts 16–18 · A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | plateforme cloud, nombre d’instances |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Prouver le comportement A2 sous concurrence, multi-instance et restart.

**Critères d’acceptation :**
  - Suite de tests concurrence PASS/FAIL déterministe.
  - Scénario multi-instance documenté et exécutable quand environnement dispo.
  - Restart/loss d’instance ne perd pas l’état durable externe.

**Preuves attendues :**
  - rapport tests
  - scénarios

**Hors périmètre :** charge prod, chaos cloud vendor

#### TB-06-02 — Tests purge et sauvegarde/restauration

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-02` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-04-02, TB-01-06, TB-04-03 |
| **Gate Morris** | policy TTL + store |
| **Source** | doc 102 impacts 14,19 · PURGE=C |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Valider purge hybride et backup/restore Project.

**Critères d’acceptation :**
  - Tests purge lazy et job couvrent orphelins/expirations sans TTL inventé (fixtures contrôlées).
  - Backup puis restore restaure l’état attendu.
  - Interaction purge/restore est couverte par au moins un cas négatif.

**Preuves attendues :**
  - rapport tests purge/backup

**Hors périmètre :** TTL numérique de production

#### TB-06-03 — Tests N1 dégradé, N2/N3 fail-closed, AuthorityGate et audit

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-03` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-03, TB-02-04, TB-03-02, TB-03-04, TB-03-05, TB-05-02 |
| **Gate Morris** | aucune |
| **Source** | doc 102 impacts 6–7,10,20–21 · F-ARCH-01/02 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | REUSE harness — 28 tests execution-run (PR #308–#310) · comportements Assistant A2 NEW · **pas validation A2 déjà faite** |

**Objectif :** Valider N1 dégradé, N2/N3 fail-closed, AuthorityGate et audit Assistant en s’appuyant sur les harness D2-D1/D2/D3 comme non-régression — sans les considérer comme preuve des comportements Assistant A2.

**Critères d’acceptation :**
  - N1 dégradé et N2/N3 fail-closed ont des cas PASS/FAIL.
  - AuthorityGate refuse non-Morris et double consommation.
  - Audit provider et métier sont vérifiés séparément.

**Preuves attendues :**
  - rapport QA governance

**Hors périmètre :** pentest externe

#### TB-06-04 — Vérification sécurité, RGPD, FinOps et readiness pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-04` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-04-04, TB-06-01, TB-06-02, TB-06-03, TB-05-03 |
| **Gate Morris** | hard cap + TTL policy + décisions store/plateforme |
| **Source** | doc 102 prérequis pilote · R-TECH-FINOPS-HARD-01 · RGPD pending |
| **Réserves liées** | R-TECH-FINOPS-HARD-01, R-TECH-TTL-01 |
| **Non-sélections liées** | hard cap FinOps, valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Pack de vérification pré-pilote : sécurité, RGPD, FinOps hard, critères pilote.

**Critères d’acceptation :**
  - Checklist sécurité (secrets, authz, anti-spoofing) a un verdict.
  - Checklist RGPD (purge/rétention/redaction) a un verdict sans durée inventée.
  - Pilote bloqué tant que hard cap FinOps et TTL policy non décidés.

**Preuves attendues :**
  - rapport readiness pilote
  - matrice gates

**Hors périmètre :** certification ISO, audit légal externe

---



## Matrice de réconciliation avec les fondations main PR #308–#310

Sources Git main vérifiées : PR #308 (`c38b6ca9…` V3.1-D2-D1) · PR #309 (`de2800aa…` V3.1-D2-D2) · PR #310 (`e36f12b6…` V3.1-D2-D3).

Anti-claims globaux : memory/fixture/provider-independent **≠** persistance durable A2 · **≠** OpenAI live · **≠** multi-instance · **≠** restart-safe store · **≠** modèle nommé · **≠** production-ready · **≠** item DONE.

| Item | Fondation main | Chemin Git | Capacité démontrée | Limite / anti-claim | Relation | Justification | Risque duplication | Effet item |
|---|---|---|---|---|---|---|---|---|
| TB-00-02 | AJV Draft-07 + 13 schémas ExecutionRun | `…/ajvExecutionRunSchemaValidation.ts` · `…/schemas/**` | Fail-closed schema validation ExecutionRun | Pas de schémas N2/N3 Assistant | EXTEND/EVAL | Prouve stack AJV ; gap N2/N3 séparé | 2e pipeline AJV | Objectif reformulé EVAL+gap |
| TB-00-06 | SecretSourcePort · Env · ServerOnly materializer | `…/ports/secretSourcePort.ts` · `…/secrets/**` | Secrets par handle opaque server-only | Pas catalogue Admin TTL/modèle | REUSE/EXTEND | Réutiliser matérialisation ; catalogue NEW | 2e secret stack | Objectif reformulé REUSE |
| TB-01-01 | ExecutionRunRepositoryPort + memory | `…/ports/executionRunRepository.ts` · `…/memoryExecutionRun*` | Persist process-local ExecutionRun | ≠ Project durable A2 · ≠ external store | EXTEND pattern | Pattern port oui ; store Project NEW | 2e repo générique | Port Project distinct, pattern réutilisé |
| TB-01-04 | Persist guards / invariants | `…/domain/invariants.ts` · persist tests | Garde-fous écriture ExecutionRun | Pas multi-instance durable | NEW DOMAIN-SPECIFIC | Concurrence A2 Project NEW | Copier memory locks | AC multi-instance préservés |
| TB-01-05 | Invariants / transitions | `…/domain/transitions.ts` · `invariants.ts` | Transitions/late-result discipline | Pas clés idempotence N2/N3 | EXTEND | Idempotence générique avant AuthorityGate | Couplage gate | Dépendance TB-03-02 retirée |
| TB-02-01 | AiExecutionPort + adapters | `…/ports/aiExecutionPort.ts` · `…/infrastructure/ai/**` | Lane AI provider-independent | Pas OpenAI live / modèle | EXTEND | Adapter OpenAI sur port existant | Nouveau port générique | Objectif EXTEND |
| TB-02-02 | AI lane / complete | mêmes + providerInvocation | Completion non-stream prouvée | Streaming N1 non démontré | NEW DOMAIN-SPECIFIC | Streaming produit NEW | — | Gap streaming explicite |
| TB-02-03 | Schema validation port + AJV | `…/ports/executionRunSchemaValidation.ts` | 13 schémas fail-closed | Pas N2/N3 Assistant | REUSE/EXTEND | Une seule pipeline AJV | 2e AJV | REUSE obligatoire |
| TB-02-04 | providerInvocation async | `…/application/providerInvocation.ts` · cancel/late tests | Timeout/cancel/retry/late evidence-only | Pas audit provider Assistant durable | REUSE/EXTEND | Brancher audit ; pas rewrite | Rewrite async | Objectif intégration |
| TB-03-02 | HumanDecisionGate type/schema | `…/domain/types.ts` HumanDecisionGate | Contrat gate humain ExecutionRun | Pas AuthorityGate N3 Assistant | EXTEND | N3 Assistant sur contrat existant | Gate parallèle | Consomme TB-01-05 |
| TB-03-04 | ExecutionEventSinkPort + adapters | `…/ports/executionEventSinkPort.ts` · `…/events/**` | Events process-local redacted | ≠ audit durable A2 | EXTEND | Lane logique durable NEW | Confondre sink/audit | Distinction explicite |
| TB-03-05 | human_gate / events | types + sinks | Événements gate | ≠ lane métier durable | EXTEND/NEW | Idem | Mélange lanes | Séparation logique |
| TB-05-03 | redactEventDetail | `…/events/redactEventDetail.ts` | Redaction profonde | Pas vendor APM | REUSE/EXTEND | Corrélation sans secrets | Vendor implicite | Vendor NOT SELECTED |
| TB-06-03 | Harness D2-D1/D2/D3 | `app/__tests__/oa/execution-run/**` (28) | Non-régression fondations | ≠ preuve Assistant A2 | REUSE harness | Tests Assistant NEW | « déjà testé A2 » | Anti-claim explicite |

Comptage relations (items réconciliés ci-dessus) : REUSE/EXTEND majoritaires · NEW DOMAIN-SPECIFIC pour gaps A2/Assistant · aucun item marqué DONE.

## Annexe — Couverture des 21 impacts document 102

| # | Impact | Items | Statut |
|---|---|---|---|
| 1 | abstraction persistance externe | TB-01-01 | COVERED |
| 2 | modèle données Project | TB-01-02 | COVERED |
| 3 | transactions / unicité | TB-01-03 · TB-01-04 | COVERED |
| 4 | idempotence N2/N3 | TB-01-05 | COVERED |
| 5 | coordination purge | TB-04-02 | COVERED |
| 6 | audit provider | TB-03-04 | COVERED |
| 7 | audit métier | TB-03-05 | COVERED |
| 8 | validation AJV | TB-00-02 · TB-02-03 | COVERED |
| 9 | streaming N1 | TB-02-02 | COVERED |
| 10 | AuthorityGate | TB-03-02 | COVERED |
| 11 | rôles Admin/Morris | TB-03-01 | COVERED |
| 12 | configuration server-only | TB-00-06 · TB-02-01 | COVERED |
| 13 | health/readiness | TB-05-01/02 | COVERED |
| 14 | sauvegarde/restauration | TB-01-06 · TB-06-02 | COVERED |
| 15 | migrations | TB-00-04 · TB-01-06 | COVERED |
| 16 | tests concurrence | TB-06-01 | COVERED |
| 17 | tests multi-instance | TB-06-01 | COVERED |
| 18 | tests perte/redémarrage | TB-06-01 | COVERED |
| 19 | tests purge | TB-06-02 | COVERED |
| 20 | tests fail-closed N2/N3 | TB-06-03 | COVERED |
| 21 | tests mode dégradé N1 | TB-06-03 · TB-05-02 | COVERED |

## 18. Matrice de traçabilité Architecture / ADR → items

| Décision | Conséquence | Items | Couverture |
|---|---|---|---|
| D-ASST-ARCH-VALIDATION-01=B | cible technique WITH RESERVES | tous · TB-06-04 | COVERED |
| ARCH-BUNDLE=A2 | store externe · concurrence · no-embedded | TB-00-03/05 · TB-01-* · TB-06-01 | COVERED |
| ADR-ASST-TOPO-01=A | monolithe modulaire Next.js | TB-02-01 · TB-03-* (server) | COVERED |
| ADR-ASST-PERSIST-01=B | store externe | TB-00-03/04 · TB-01-* | COVERED |
| ADR-ASST-SERVER-01=C | hybride Actions/Handlers | TB-02-02 · TB-05-01 | COVERED |
| ADR-ASST-PURGE-01=C | purge hybride | TB-04-01/02 · TB-06-02 | COVERED |
| ADR-ASST-AUDIT-STORE-01=B | lanes logiques | TB-03-04/05 · TB-06-03 | COVERED |
| ADR-ASST-STREAM-01=A | streaming N1 only | TB-02-02/03 · TB-06-03 | COVERED |
| ADR-ASST-VALIDATE-LIB-01=A | AJV | TB-00-02 · TB-02-03 | COVERED |
| ADR-ASST-SECRETS-01=A | env server-only | TB-00-06 · TB-02-01 | COVERED |
| ADR-ASST-ADMIN-AUTHZ-01=B | Admin/Morris + gate | TB-00-01 · TB-03-01/02/03 | COVERED |
| ADR-ASST-HEALTH-01=C | liveness/readiness/probe | TB-05-01/02 · TB-06-03 | COVERED |

**Gaps :** aucun gap silencieux.

---

## 19. Matrice de traçabilité réserves → items

| Réserve | Items | Note |
|---|---|---|
| R-TECH-TTL-01 | TB-00-06 · TB-03-03 · TB-04-01/02 · TB-06-02/04 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | TB-02-05 (contexte **non bloquant**) · TB-04-04 · TB-06-04 | KEEP-OPEN · soft cap découplé |
| R-TECH-AF02-BOUNDARY-01 | TB-00-02 · TB-02-02/03 · TB-06-03 | KEEP-OPEN |
| R-UX-FPI-02/03/04 · R-UX-04 | TB-02-02 · TB-03-03 | BLOCKED OR LIMITED BY OPEN UX RESERVE sur surfaces UI |

Aucune réserve fermée.

---

## 20. Matrice de dépendances (synthèse)

TB-00-* → TB-01-* (idempotence TB-01-05 **avant** AuthorityGate) → TB-02-* → TB-03-* (TB-03-02 dépend de TB-01-05) → TB-04-* → TB-05-* → TB-06-*.

Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-02-05 (metering/soft cap) **n’est plus** bloqué par hard cap · TB-04-04 (Decision Pack hard cap) dépend de TB-02-05 · TB-06-04 readiness pilote attend hard cap/TTL.

**Graphe :** acyclique après F-BLG-103-01/03 (boucle TB-01-05↔TB-03-02 cassée ; boucle logique FinOps dissociee).

---

## 21. Ordre de réalisation candidat

Phase 0 Decisions (TB-00-*) · Phase 1 Persistence A2 dont **TB-01-05 idempotence générique** · Phase 2 Assistant (TB-02-* dont metering/soft cap TB-02-05) · Phase 3 Governance (**TB-03-02 AuthorityGate après TB-01-05**) · Phase 4 Lifecycle (TB-04-* dont Decision Pack hard cap TB-04-04 après metering) + Health · Phase 5 Pilot QA (TB-06-*).

Ajustement justifié : dépendance prouvée AuthorityGate → idempotence (F-BLG-103-01) et dissociation soft/hard FinOps (F-BLG-103-03).

**CANDIDATE — MORRIS VALIDATION REQUIRED**

---

## 22. Lots candidats

### LOT-IP-0 — Implementation Preparation
Items : TB-00-01 … TB-00-06 · TB-04-04 · Nature DOC/DECISION-PREP · **aucun code** · Objectif : borner décisions bloquantes.

### LOT-D1 — A2 Persistence Foundation
Items TB-01-* · **NOT AUTHORIZED** · requiert décisions store/data-access.

### LOT-D2 — Assistant Core N1
Items TB-02-01/02/04 · **NOT AUTHORIZED**.

### LOT-D3 — Structured N2/N3 and Authority
Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**.

### LOT-D4 — Lifecycle, Audit and Operations
Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**.

### LOT-D5 — Pilot Hardening
Items TB-06-* (+ TB-04-04 Decision Pack hard cap en amont) · TB-02-05 metering/soft cap peut précéder en Phase 2/4 · **NOT AUTHORIZED**.

Aucun lot sélectionné par Morris dans ce cycle.

---

## 23. Chemin critique

Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → **Idempotence générique (TB-01-05)** → Provider (TB-02-01) → **AuthorityGate (TB-03-02)** → Metering/soft cap (TB-02-05) → Decision Pack hard cap (TB-04-04) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL decisions.

---

## 24. Items bloqués par décision

| Item | Blocage |
|---|---|
| TB-01-* (sauf logique pure) | store / data-access |
| TB-02-03 | AJV fit N2/N3 (TB-00-02) |
| TB-03-01/02 | auth existante |
| TB-04-02 · TB-06-02 | store + TTL policy |
| TB-04-03 | décisions rétention/redaction (pas une réserve) |
| TB-05-01 · TB-06-01 | store/plateforme exécution |
| TB-06-04 | hard cap + TTL + store/plateforme |
| TB-02-05 | **non bloqué** par hard cap (CANDIDATE) |

Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED** / **CANDIDATE**.

---

## 25. Items prérequis avant pilote

TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB-06-01…04 · fermeture ou arbitrage explicite réserves TTL/FinOps.

---

## 26. Critères de passage vers Delivery

Avant tout GO Delivery du premier lot technique :

- backlog validé ChatGPT ;
- priorités validées Morris ;
- lot sélectionné Morris ;
- store sélectionné si requis ;
- migration strategy sélectionnée ;
- auth existante confirmée ou arbitrage ;
- AJV fit confirmé ;
- fichiers Delivery bornés ;
- tests attendus définis ;
- réserves bloquantes identifiées ;
- cohérence 93/97/99/102.

Ces critères **ne consomment pas** Delivery.

---

## 27. Risques et incertitudes

Auth absente (README P0) · store non choisi · AJV fit N2/N3 non prouvé (AJV ExecutionRun déjà sur main) · réserves UX · FinOps hard / TTL ouverts · fondations ExecutionRun memory/fixture **réutilisables mais non équivalentes** à A2 durable / OpenAI live / multi-instance · risque de duplication de ports si réconciliation ignorée.

---

## 28. Non-sélections

Store tech/fournisseur · cloud · hébergeur · région · instances · ORM · migration tool · IAM · observability · modèle/endpoint OpenAI · TTL · hard cap · SLO · tarifs · schéma physique · IaC — **NOT SELECTED — FUTURE DEDICATED DECISION OR IMPLEMENTATION-PREPARATION GATE REQUIRED**.

---

## 29. Actions autorisées

Corriger 103 · republier handoff · (hors cycle) valider priorités via GO distinct.

---

## 30. Actions interdites

Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · valider priorités · sélectionner lot · commit/push projet · PR/merge.

---

## 31. Anti-claims

Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas d’item DONE sur PR #308–#310 · memory/fixture ≠ A2 durable · pas OpenAI live · pas multi-instance prouvé · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge projet.

---

## 32. Verdict

**TECHNICAL BACKLOG CORRECTED —**
**DEPENDENCY GRAPH ACYCLIC —**
**F-BLG-103-01…04 FIXED —**
**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**
**33 ITEMS / 7 EPICS PRESERVED —**
**A2 AND TEN ADR PRESERVED —**
**21 IMPACTS COVERED —**
**RESERVES KEEP-OPEN —**
**NON-SELECTIONS PRESERVED —**
**PRIORITIES AND LOTS REMAIN CANDIDATE —**
**NO LOT SELECTED —**
**DOCUMENT 103 CORRECTED — DOCUMENTS 90–102 UNCHANGED —**
**NO DOCUMENT 104 — NO CODE OR PACKAGE CHANGE —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT REVALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**

---

## 33. Prochaine gate candidate

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

Statut : **candidate uniquement — non consommée**.

**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**
`````

---

## 17. SHA-256 / lignes après

| Item | Valeur |
|---|---|
| SHA-256 après | `903547e7170b71312ac1e9c96d6e81d619366cdd515e36ae1c2384585f15f109` |
| Lignes après | 1390 |
| SHA-256 avant | `19d76b1598134410fd5a24e363c0d29790df1946759d531f4bd51986474c87f9` |
| Lignes avant | 1337 |

---

## 18. Diff complet (JSONL lossless — transport RAW)

Le dry-run RAW échouerait sur trailing whitespace légitime du unified diff. Transport JSONL lossless autorisé.

SHA-256 brut conservé : `64c6cc00594f78eaca6854eb1635350cb35723740319ee7d4092894f090344b9` · lignes 392 · bytes 27946 · reconstruction byte-for-byte PASS.

`````jsonl
"diff --git a/.tmp-sfia-review/technical-backlog-correction/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"
"index ce9b45d..5edd013 100644"
"--- a/.tmp-sfia-review/technical-backlog-correction/103-before.md"
"+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"
"@@ -2,7 +2,10 @@"
" "
" ## 1. Statut"
" "
"-**TECHNICAL IMPLEMENTATION BACKLOG DERIVED FROM APPLIED A2 ARCHITECTURE —**"
"+**TECHNICAL IMPLEMENTATION BACKLOG CORRECTED —**"
"+**DEPENDENCY GRAPH ACYCLIC —**"
"+**F-BLG-103-01…04 FIXED —**"
"+**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**"
" **BACKLOG GATE CONSUMED BY MORRIS —**"
" **PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**"
" **TECHNOLOGY SELECTIONS REMAIN OPEN —**"
"@@ -214,8 +217,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND/EVAL — `ExecutionRunSchemaValidationPort` + `ajvExecutionRunSchemaValidation` (PR #308) prouvent AJV fail-closed pour ExecutionRun · gap N2/N3 Assistant séparé · **pas FIT N2/N3 automatique** |"
" "
"-**Objectif :** Confirmer que AJV déjà présent convient aux sorties structurées N2/N3 avant toute story d’implémentation validation."
"+**Objectif :** Qualifier l’adéquation de l’AJV déjà branché sur main (Draft-07, 13 schémas ExecutionRun) pour les futurs schémas N2/N3 Assistant, sans conclure FIT automatique N2/N3."
" "
" **Critères d’acceptation :**"
"   - Un rapport d’adéquation décrit version AJV, capacités TypeScript et limites pour schémas N2/N3."
"@@ -332,8 +336,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-TTL-01, R-TECH-FINOPS-HARD-01 |"
" | **Non-sélections liées** | secret manager, modèle OpenAI, valeur TTL, hard cap FinOps |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | REUSE/EXTEND — secrets opaque handle + env adapter (PR #309) · catalogue config Admin NEW · aucun .env · **pas DONE** |"
" "
"-**Objectif :** Documenter la frontière secrets env server-only et le catalogue de paramètres Admin (modèle/TTL/soft cap) sans créer .env ni fixer TTL/hard cap."
"+**Objectif :** Documenter la réutilisation/extension de SecretSourcePort / EnvSecretSourceAdapter / ServerOnlySecretMaterializer et le catalogue Admin (modèle/TTL/soft cap) sans créer .env ni seconde matérialisation."
" "
" **Critères d’acceptation :**"
"   - Catalogue des secrets server-only et interdits navigateur/logs est écrit."
"@@ -361,8 +366,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | technologie store, ORM |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND pattern — `ExecutionRunRepositoryPort` + memory store (PR #308) = frontière process-local ExecutionRun · **≠** persistance durable Project A2 · interdiction second repo générique concurrent non justifié |"
" "
"-**Objectif :** Définir et implémenter ultérieurement le port d’accès store externe sans lier une technologie concrète dans ce backlog."
"+**Objectif :** Définir le port de persistance Project durable externe A2 en réutilisant le *pattern* `ExecutionRunRepositoryPort`, sans traiter le repository memory ExecutionRun comme store Project durable."
" "
" **Critères d’acceptation :**"
"   - Le port expose des opérations Project CRUD/query sans API embarquée filesystem."
"@@ -449,8 +455,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | technologie store |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | NEW DOMAIN-SPECIFIC (s’appuie sur invariants persist PR #308 comme inspiration) · memory ≠ multi-instance durable · **pas DONE** |"
" "
"-**Objectif :** Assurer transactions / coordination d’écriture compatibles multi-instance."
"+**Objectif :** Assurer transactions / coordination d’écriture Project compatibles multi-instance A2 ; les garde-fous memory ExecutionRun ne démontrent pas la concurrence multi-instance durable."
" "
" **Critères d’acceptation :**"
"   - Scénarios concurrent writers sont définis et ont un comportement attendu documenté."
"@@ -472,14 +479,15 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Epic** | EPIC-TB-01 |"
" | **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"
" | **Statut** | BLOCKED-BY-DECISION |"
"-| **Dépendances** | TB-01-04, TB-03-02 |"
"+| **Dépendances** | TB-01-04 |"
" | **Gate Morris** | décision store |"
" | **Source** | doc 102 impact 4 · F-ARCH-01 · STREAM=A (N2/N3 non streamés) |"
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | technologie store |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND — invariants/transitions ExecutionRun (PR #308) offrent des garde-fous persistance ; mécanisme d’idempotence N2/N3 Assistant reste domain-specific · **pas DONE** |"
" "
"-**Objectif :** Rendre les écritures/consommations N2/N3 idempotentes sous retry et multi-instance."
"+**Objectif :** Fournir un mécanisme générique d’idempotence serveur pour les écritures/consommations N2/N3 sous retry et multi-instance, réutilisable par AuthorityGate (sans dépendre de TB-03-02)."
" "
" **Critères d’acceptation :**"
"   - Un retry de la même consommation N2/N3 ne duplique pas l’effet métier."
"@@ -536,8 +544,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | modèle OpenAI, endpoint OpenAI |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND — `AiExecutionPort` + fake/platform adapters (PR #309) · OpenAI live / modèle nommé **non démontrés** · **pas DONE** |"
" "
"-**Objectif :** Introduire le Provider Port minimal OpenAI-only avec secrets/config server-only, sans modèle nommé."
"+**Objectif :** Étendre/intégrer un adapter OpenAI live ou Assistant-specific sur `AiExecutionPort` existant (provider-independent), avec config server-only ; sans recréer un port générique concurrent ni sélectionner de modèle."
" "
" **Critères d’acceptation :**"
"   - Le port est server-only ; aucune clé n’apparaît côté client."
"@@ -565,8 +574,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-AF02-BOUNDARY-01, R-UX-FPI-02, R-UX-FPI-03, R-UX-FPI-04, R-UX-04 |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | NEW DOMAIN-SPECIFIC (frontière AI existante) · streaming N1 non démontré sur main · réserves UX/AF-02 · **pas DONE** |"
" "
"-**Objectif :** Permettre le streaming N1 via frontière serveur hybride, sans streaming structurant N2/N3."
"+**Objectif :** Permettre le streaming N1 Assistant via frontière serveur hybride ; les fondations provider actuelles ne démontrent pas le streaming N1 produit."
" "
" **Critères d’acceptation :**"
"   - N1 peut diffuser une réponse progressive jusqu’à complétion ou cancellation."
"@@ -594,8 +604,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | REUSE/EXTEND — validation port + AJV Draft-07 + 13 schémas (PR #308) · schémas N2/N3 Assistant NEW · R-TECH-AF02-BOUNDARY-01 OPEN |"
" "
"-**Objectif :** Valider fail-closed les sorties structurées N2/N3 avec AJV avant exposition/consommation."
"+**Objectif :** Évaluer puis réutiliser/étendre la pipeline AJV existante pour schémas N2/N3 Assistant fail-closed ; interdiction d’une deuxième pipeline AJV silencieuse."
" "
" **Critères d’acceptation :**"
"   - Une sortie N2/N3 invalide est rejetée fail-closed."
"@@ -623,8 +634,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | REUSE/EXTEND — `providerInvocation` async + late-result (PR #309/#310) · audit provider Assistant = EXTEND event sink · **pas DONE** |"
" "
"-**Objectif :** Normaliser erreurs provider et cancellation avec traces d’audit provider."
"+**Objectif :** Intégrer timeout/cancellation/retries bornés/late-result evidence-only déjà présents vers l’audit provider Assistant ; ne pas redévelopper ces primitives sans justification."
" "
" **Critères d’acceptation :**"
"   - Cancellation utilisateur/provider produit un enregistrement d’audit provider."
"@@ -645,15 +657,16 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Type** | NFR |"
" | **Epic** | EPIC-TB-02 |"
" | **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"
"-| **Statut** | BLOCKED-BY-RESERVE |"
"+| **Statut** | CANDIDATE |"
" | **Dépendances** | TB-02-01, TB-03-04 |"
"-| **Gate Morris** | fermeture R-TECH-FINOPS-HARD-01 / Decision Pack hard cap |"
"+| **Gate Morris** | aucune pour metering/soft cap · hard cap reste DEFER-BEFORE-PILOT (TB-04-04) — non bloquant pour cet item |"
" | **Source** | doc 102 FPI-14 soft · R-TECH-FINOPS-HARD-01 · impact metering |"
"-| **Réserves liées** | R-TECH-FINOPS-HARD-01 |"
"+| **Réserves liées** | R-TECH-FINOPS-HARD-01 (contexte KEEP-OPEN — **non bloquante** pour soft cap/metering) |"
" | **Non-sélections liées** | hard cap FinOps, tarif, SLO |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND — `usage-summary` schéma + events usage_validated (PR #308/#309) comme base metering · soft cap Assistant NEW · hard cap non implémenté |"
" "
"-**Objectif :** Mesurer l’usage provider et appliquer soft cap ; hard cap reste différé avant pilote."
"+**Objectif :** Mesurer l’usage provider et appliquer soft cap indépendamment de la décision hard cap ; hard cap reste différé avant pilote (TB-04-04)."
" "
" **Critères d’acceptation :**"
"   - Le metering enregistre les tentatives provider indépendamment du succès métier."
"@@ -710,8 +723,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND — `HumanDecisionGate` + schémas/transitions (PR #308) · AuthorityGate N3 Assistant = capacité NEW DOMAIN-SPECIFIC sur cette base · **pas DONE** |"
" "
"-**Objectif :** Implémenter AuthorityGate N3 selon F-ARCH-01 : candidate → surface → GO Morris → gate → consommation atomique."
"+**Objectif :** Implémenter AuthorityGate N3 Assistant selon F-ARCH-01 en réutilisant/étendant le contrat HumanDecisionGate existant, en consommant l’idempotence générique TB-01-05."
" "
" **Critères d’acceptation :**"
"   - Seul Morris peut consommer une décision N3 via gate serveur."
"@@ -768,8 +782,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | technologie store, vendor observabilité |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND — event sink + redaction (PR #309) · lane audit durable Project = NEW DOMAIN-SPECIFIC A2 · ne pas confondre event sink et audit durable |"
" "
"-**Objectif :** Enregistrer tentatives/usage provider dans une lane logique séparée avant/indépendamment du métier."
"+**Objectif :** Établir la lane logique d’audit provider durable A2 en s’appuyant sur `ExecutionEventSinkPort` (événements process-local non autoritatifs ≠ audit durable)."
" "
" **Critères d’acceptation :**"
"   - Chaque tentative provider produit un enregistrement d’audit provider."
"@@ -797,8 +812,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | technologie store |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND/NEW — human_gate/events (PR #308–#310) · lane métier durable A2 NEW · **pas DONE** |"
" "
"-**Objectif :** Maintenir l’audit métier distinct de l’audit provider (lane logique)."
"+**Objectif :** Maintenir l’audit métier distinct de l’audit provider ; event sink existant peut alimenter la trajectoire mais n’est pas la lane métier durable."
" "
" **Critères d’acceptation :**"
"   - Les événements métier N2/N3/AuthorityGate sont audités dans la lane métier."
"@@ -877,13 +893,14 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Type** | NFR |"
" | **Epic** | EPIC-TB-04 |"
" | **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"
"-| **Statut** | BLOCKED-BY-RESERVE |"
"+| **Statut** | BLOCKED-BY-DECISION |"
" | **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |"
"-| **Gate Morris** | décisions rétention futures ; R-UX si UI |"
"+| **Gate Morris** | décisions futures rétention/redaction · aucune réserve formelle liée |"
" | **Source** | doc 102 AUDIT-STORE=B · RGPD pending · impact 14 |"
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | EXTEND redaction events (PR #309) · rétention/politique RGPD = décisions futures · **pas de durée inventée** |"
" "
" **Objectif :** Préparer rétention/redaction audit et compatibilité purge↔backup sans inventer durées RGPD."
" "
"@@ -913,6 +930,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-FINOPS-HARD-01 |"
" | **Non-sélections liées** | hard cap FinOps, tarif |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | N/A code — Decision Pack documentaire · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |"
" "
" **Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil."
" "
"@@ -999,8 +1017,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | aucune |"
" | **Non-sélections liées** | vendor observabilité |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | REUSE/EXTEND — `redactEventDetail` + sinks (PR #309) · observabilité produit NEW · vendor NOT SELECTED |"
" "
"-**Objectif :** Définir corrélation logs/métriques pour provider, audit et health sans fuite de secrets."
"+**Objectif :** Définir corrélation logs/métriques Assistant sans fuite, en réutilisant la redaction d’événements existante ; vendor observability NOT SELECTED."
" "
" **Critères d’acceptation :**"
"   - Corrélation request/provider/audit est possible via identifiants non secrets."
"@@ -1085,8 +1104,9 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |"
" | **Non-sélections liées** | aucune |"
" | **Delivery** | NOT AUTHORIZED |"
"+| **Relation main** | REUSE harness — 28 tests execution-run (PR #308–#310) · comportements Assistant A2 NEW · **pas validation A2 déjà faite** |"
" "
"-**Objectif :** Valider modes dégradé/fail-closed, AuthorityGate et lanes d’audit."
"+**Objectif :** Valider N1 dégradé, N2/N3 fail-closed, AuthorityGate et audit Assistant en s’appuyant sur les harness D2-D1/D2/D3 comme non-régression — sans les considérer comme preuve des comportements Assistant A2."
" "
" **Critères d’acceptation :**"
"   - N1 dégradé et N2/N3 fail-closed ont des cas PASS/FAIL."
"@@ -1130,6 +1150,32 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" ---"
" "
" "
"+"
"+## Matrice de réconciliation avec les fondations main PR #308–#310"
"+"
"+Sources Git main vérifiées : PR #308 (`c38b6ca9…` V3.1-D2-D1) · PR #309 (`de2800aa…` V3.1-D2-D2) · PR #310 (`e36f12b6…` V3.1-D2-D3)."
"+"
"+Anti-claims globaux : memory/fixture/provider-independent **≠** persistance durable A2 · **≠** OpenAI live · **≠** multi-instance · **≠** restart-safe store · **≠** modèle nommé · **≠** production-ready · **≠** item DONE."
"+"
"+| Item | Fondation main | Chemin Git | Capacité démontrée | Limite / anti-claim | Relation | Justification | Risque duplication | Effet item |"
"+|---|---|---|---|---|---|---|---|---|"
"+| TB-00-02 | AJV Draft-07 + 13 schémas ExecutionRun | `…/ajvExecutionRunSchemaValidation.ts` · `…/schemas/**` | Fail-closed schema validation ExecutionRun | Pas de schémas N2/N3 Assistant | EXTEND/EVAL | Prouve stack AJV ; gap N2/N3 séparé | 2e pipeline AJV | Objectif reformulé EVAL+gap |"
"+| TB-00-06 | SecretSourcePort · Env · ServerOnly materializer | `…/ports/secretSourcePort.ts` · `…/secrets/**` | Secrets par handle opaque server-only | Pas catalogue Admin TTL/modèle | REUSE/EXTEND | Réutiliser matérialisation ; catalogue NEW | 2e secret stack | Objectif reformulé REUSE |"
"+| TB-01-01 | ExecutionRunRepositoryPort + memory | `…/ports/executionRunRepository.ts` · `…/memoryExecutionRun*` | Persist process-local ExecutionRun | ≠ Project durable A2 · ≠ external store | EXTEND pattern | Pattern port oui ; store Project NEW | 2e repo générique | Port Project distinct, pattern réutilisé |"
"+| TB-01-04 | Persist guards / invariants | `…/domain/invariants.ts` · persist tests | Garde-fous écriture ExecutionRun | Pas multi-instance durable | NEW DOMAIN-SPECIFIC | Concurrence A2 Project NEW | Copier memory locks | AC multi-instance préservés |"
"+| TB-01-05 | Invariants / transitions | `…/domain/transitions.ts` · `invariants.ts` | Transitions/late-result discipline | Pas clés idempotence N2/N3 | EXTEND | Idempotence générique avant AuthorityGate | Couplage gate | Dépendance TB-03-02 retirée |"
"+| TB-02-01 | AiExecutionPort + adapters | `…/ports/aiExecutionPort.ts` · `…/infrastructure/ai/**` | Lane AI provider-independent | Pas OpenAI live / modèle | EXTEND | Adapter OpenAI sur port existant | Nouveau port générique | Objectif EXTEND |"
"+| TB-02-02 | AI lane / complete | mêmes + providerInvocation | Completion non-stream prouvée | Streaming N1 non démontré | NEW DOMAIN-SPECIFIC | Streaming produit NEW | — | Gap streaming explicite |"
"+| TB-02-03 | Schema validation port + AJV | `…/ports/executionRunSchemaValidation.ts` | 13 schémas fail-closed | Pas N2/N3 Assistant | REUSE/EXTEND | Une seule pipeline AJV | 2e AJV | REUSE obligatoire |"
"+| TB-02-04 | providerInvocation async | `…/application/providerInvocation.ts` · cancel/late tests | Timeout/cancel/retry/late evidence-only | Pas audit provider Assistant durable | REUSE/EXTEND | Brancher audit ; pas rewrite | Rewrite async | Objectif intégration |"
"+| TB-03-02 | HumanDecisionGate type/schema | `…/domain/types.ts` HumanDecisionGate | Contrat gate humain ExecutionRun | Pas AuthorityGate N3 Assistant | EXTEND | N3 Assistant sur contrat existant | Gate parallèle | Consomme TB-01-05 |"
"+| TB-03-04 | ExecutionEventSinkPort + adapters | `…/ports/executionEventSinkPort.ts` · `…/events/**` | Events process-local redacted | ≠ audit durable A2 | EXTEND | Lane logique durable NEW | Confondre sink/audit | Distinction explicite |"
"+| TB-03-05 | human_gate / events | types + sinks | Événements gate | ≠ lane métier durable | EXTEND/NEW | Idem | Mélange lanes | Séparation logique |"
"+| TB-05-03 | redactEventDetail | `…/events/redactEventDetail.ts` | Redaction profonde | Pas vendor APM | REUSE/EXTEND | Corrélation sans secrets | Vendor implicite | Vendor NOT SELECTED |"
"+| TB-06-03 | Harness D2-D1/D2/D3 | `app/__tests__/oa/execution-run/**` (28) | Non-régression fondations | ≠ preuve Assistant A2 | REUSE harness | Tests Assistant NEW | « déjà testé A2 » | Anti-claim explicite |"
"+"
"+Comptage relations (items réconciliés ci-dessus) : REUSE/EXTEND majoritaires · NEW DOMAIN-SPECIFIC pour gaps A2/Assistant · aucun item marqué DONE."
"+"
" ## Annexe — Couverture des 21 impacts document 102"
" "
" | # | Impact | Items | Statut |"
"@@ -1182,7 +1228,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."
" | Réserve | Items | Note |"
" |---|---|---|"
" | R-TECH-TTL-01 | TB-00-06 · TB-03-03 · TB-04-01/02 · TB-06-02/04 | KEEP-OPEN |"
"-| R-TECH-FINOPS-HARD-01 | TB-02-05 · TB-04-04 · TB-06-04 | KEEP-OPEN |"
"+| R-TECH-FINOPS-HARD-01 | TB-02-05 (contexte **non bloquant**) · TB-04-04 · TB-06-04 | KEEP-OPEN · soft cap découplé |"
" | R-TECH-AF02-BOUNDARY-01 | TB-00-02 · TB-02-02/03 · TB-06-03 | KEEP-OPEN |"
" | R-UX-FPI-02/03/04 · R-UX-04 | TB-02-02 · TB-03-03 | BLOCKED OR LIMITED BY OPEN UX RESERVE sur surfaces UI |"
" "
"@@ -1192,15 +1238,19 @@ Aucune réserve fermée."
" "
" ## 20. Matrice de dépendances (synthèse)"
" "
"-TB-00-* → TB-01-* → TB-02-* → TB-03-* → TB-04-* → TB-05-* → TB-06-*"
"+TB-00-* → TB-01-* (idempotence TB-01-05 **avant** AuthorityGate) → TB-02-* → TB-03-* (TB-03-02 dépend de TB-01-05) → TB-04-* → TB-05-* → TB-06-*."
" "
"-Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-04-04 bloque readiness pilote TB-06-04."
"+Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-02-05 (metering/soft cap) **n’est plus** bloqué par hard cap · TB-04-04 (Decision Pack hard cap) dépend de TB-02-05 · TB-06-04 readiness pilote attend hard cap/TTL."
"+"
"+**Graphe :** acyclique après F-BLG-103-01/03 (boucle TB-01-05↔TB-03-02 cassée ; boucle logique FinOps dissociee)."
" "
" ---"
" "
" ## 21. Ordre de réalisation candidat"
" "
"-Phase 0 Decisions (TB-00-*) · Phase 1 Persistence (TB-01-*) · Phase 2 Assistant (TB-02-*) · Phase 3 Governance (TB-03-*) · Phase 4 Lifecycle (TB-04-* + TB-05-*) · Phase 5 Pilot QA (TB-06-*)."
"+Phase 0 Decisions (TB-00-*) · Phase 1 Persistence A2 dont **TB-01-05 idempotence générique** · Phase 2 Assistant (TB-02-* dont metering/soft cap TB-02-05) · Phase 3 Governance (**TB-03-02 AuthorityGate après TB-01-05**) · Phase 4 Lifecycle (TB-04-* dont Decision Pack hard cap TB-04-04 après metering) + Health · Phase 5 Pilot QA (TB-06-*)."
"+"
"+Ajustement justifié : dépendance prouvée AuthorityGate → idempotence (F-BLG-103-01) et dissociation soft/hard FinOps (F-BLG-103-03)."
" "
" **CANDIDATE — MORRIS VALIDATION REQUIRED**"
" "
"@@ -1224,7 +1274,7 @@ Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**."
" Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**."
" "
" ### LOT-D5 — Pilot Hardening"
"-Items TB-02-05 · TB-06-* · **NOT AUTHORIZED**."
"+Items TB-06-* (+ TB-04-04 Decision Pack hard cap en amont) · TB-02-05 metering/soft cap peut précéder en Phase 2/4 · **NOT AUTHORIZED**."
" "
" Aucun lot sélectionné par Morris dans ce cycle."
" "
"@@ -1232,7 +1282,7 @@ Aucun lot sélectionné par Morris dans ce cycle."
" "
" ## 23. Chemin critique"
" "
"-Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → Provider (TB-02-01) → AuthorityGate (TB-03-02) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL."
"+Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → **Idempotence générique (TB-01-05)** → Provider (TB-02-01) → **AuthorityGate (TB-03-02)** → Metering/soft cap (TB-02-05) → Decision Pack hard cap (TB-04-04) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL decisions."
" "
" ---"
" "
"@@ -1240,14 +1290,16 @@ Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) →"
" "
" | Item | Blocage |"
" |---|---|"
"-| TB-01-* | store / data-access |"
"-| TB-02-03 | AJV fit |"
"+| TB-01-* (sauf logique pure) | store / data-access |"
"+| TB-02-03 | AJV fit N2/N3 (TB-00-02) |"
" | TB-03-01/02 | auth existante |"
" | TB-04-02 · TB-06-02 | store + TTL policy |"
"+| TB-04-03 | décisions rétention/redaction (pas une réserve) |"
" | TB-05-01 · TB-06-01 | store/plateforme exécution |"
" | TB-06-04 | hard cap + TTL + store/plateforme |"
"+| TB-02-05 | **non bloqué** par hard cap (CANDIDATE) |"
" "
"-Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED**."
"+Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED** / **CANDIDATE**."
" "
" ---"
" "
"@@ -1279,7 +1331,7 @@ Ces critères **ne consomment pas** Delivery."
" "
" ## 27. Risques et incertitudes"
" "
"-Auth absente (README P0) · store non choisi · AJV fit non prouvé · réserves UX sur surfaces · FinOps hard / TTL ouverts · fixtures-only aujourd’hui (écart backend)."
"+Auth absente (README P0) · store non choisi · AJV fit N2/N3 non prouvé (AJV ExecutionRun déjà sur main) · réserves UX · FinOps hard / TTL ouverts · fondations ExecutionRun memory/fixture **réutilisables mais non équivalentes** à A2 durable / OpenAI live / multi-instance · risque de duplication de ports si réconciliation ignorée."
" "
" ---"
" "
"@@ -1291,38 +1343,39 @@ Store tech/fournisseur · cloud · hébergeur · région · instances · ORM ·"
" "
" ## 29. Actions autorisées"
" "
"-Créer 103 · dériver items · proposer priorités/lots · tracer · publier handoff."
"+Corriger 103 · republier handoff · (hors cycle) valider priorités via GO distinct."
" "
" ---"
" "
" ## 30. Actions interdites"
" "
"-Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · commit/push projet · PR/merge."
"+Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · valider priorités · sélectionner lot · commit/push projet · PR/merge."
" "
" ---"
" "
" ## 31. Anti-claims"
" "
"-Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas de code · pas de backend créé · pas de persist déployée · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge."
"+Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas d’item DONE sur PR #308–#310 · memory/fixture ≠ A2 durable · pas OpenAI live · pas multi-instance prouvé · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge projet."
" "
" ---"
" "
" ## 32. Verdict"
" "
"-**TECHNICAL IMPLEMENTATION BACKLOG DERIVED —**"
"-**BACKLOG GATE CONSUMED BY MORRIS —**"
"-**APPLIED A2 ARCHITECTURE AND TEN ADR FULLY TRACED —**"
"-**ALL TWENTY-ONE CANDIDATE BACKLOG IMPACTS COVERED OR EXPLICITLY BLOCKED —**"
"-**33 TESTABLE ITEMS ACROSS 7 EPICS DOCUMENTED —**"
"-**PRIORITIES AND LOTS REMAIN CANDIDATE UNTIL MORRIS VALIDATION —**"
"-**EXTERNAL DURABLE STORE REMAINS REQUIRED —**"
"-**STORE TECHNOLOGY, CLOUD PLATFORM, ORM, IAM VENDOR, OBSERVABILITY VENDOR AND OPENAI MODEL REMAIN UNSELECTED —**"
"-**ALL EXISTING RESERVES REMAIN OPEN —**"
"-**TTL VALUE REMAINS UNSELECTED —**"
"-**FINOPS HARD CAP REMAINS DEFERRED BEFORE PILOT —**"
"-**DOCUMENT 103 CREATED — DOCUMENTS 90–102 UNCHANGED —**"
"-**NO DOCUMENT 104 — NO CODE — DELIVERY GATE NOT CONSUMED —**"
"-**READY FOR CHATGPT VALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**"
"+**TECHNICAL BACKLOG CORRECTED —**"
"+**DEPENDENCY GRAPH ACYCLIC —**"
"+**F-BLG-103-01…04 FIXED —**"
"+**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**"
"+**33 ITEMS / 7 EPICS PRESERVED —**"
"+**A2 AND TEN ADR PRESERVED —**"
"+**21 IMPACTS COVERED —**"
"+**RESERVES KEEP-OPEN —**"
"+**NON-SELECTIONS PRESERVED —**"
"+**PRIORITIES AND LOTS REMAIN CANDIDATE —**"
"+**NO LOT SELECTED —**"
"+**DOCUMENT 103 CORRECTED — DOCUMENTS 90–102 UNCHANGED —**"
"+**NO DOCUMENT 104 — NO CODE OR PACKAGE CHANGE —**"
"+**DELIVERY NOT-CONSUMED —**"
"+**READY FOR CHATGPT REVALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**"
" "
" ---"
" "
`````

---

## 19. Documents 90–102 / 104 / app / packages

PASS.

---

## 20. git diff --check tracké

```text
DIFF_CHECK_EXIT:0
```

---

## 21. FINAL PROJECT TRUTH BEFORE HANDOFF PUBLICATION

```text
FINAL PROJECT TRUTH BEFORE HANDOFF PUBLICATION
2026-08-05 14:40:20 CEST +0200
2026-08-05 12:40:20 UTC
BRANCH=backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
AHEAD=0
BEHIND=0
--- status --short ---
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
--- diff name-status ---
--- cached ---
--- diff-check ---
DIFF_CHECK_EXIT:0
WORKTREE_COUNT=79
ORIGIN_HANDOFF=2c7328ce960246d4071852f326783115ac63ae28
9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20  projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114  projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1  projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
903547e7170b71312ac1e9c96d6e81d619366cdd515e36ae1c2384585f15f109  projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
    1390 projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
```

---

## 22. Publisher dry-run

```text
COMMAND:
./scripts/sfia/publish-review-handoff.sh --source .tmp-sfia-review/chatgpt-review.md --commit-message "docs(review-handoff): publish Assistant SFIA technical backlog correction" --handoff-worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff --dry-run
OUTPUT:
HANDOFF DRY-RUN OK — NO MUTATION
canonical_path=sfia-review-handoff/latest-chatgpt-review.md
blob=a58ebc1ff7c3735cae4a538af7277f2fde259fd7
DRY_EXIT:0
```

---

## 23. Worktree handoff propre

```text
HEAD=2c7328ce960246d4071852f326783115ac63ae28
ORIGIN=2c7328ce960246d4071852f326783115ac63ae28

Interprétation : HEAD inchangé · origin=2c7328c… · propre · **PASS**
```

---

## 24. Review Handoff

| Champ | Valeur |
|---|---|
| Parent attendu | `2c7328ce960246d4071852f326783115ac63ae28` |
| Message | `docs(review-handoff): publish Assistant SFIA technical backlog correction` |

---

## 25. Verdict

**TECHNICAL BACKLOG CORRECTED — DEPENDENCY GRAPH ACYCLIC — F-BLG-103-01…04 FIXED — MAIN FOUNDATIONS PR #308–#310 RECONCILED — 33 ITEMS PRESERVED — DELIVERY NOT-CONSUMED — READY FOR CHATGPT REVALIDATION**

---

## 26. Prochaine gate candidate

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

candidate — non consommée

---

## 27. Instruction ChatGPT finale

Consulter tip/blob externes ; vérifier 103 corrigé, graphe, réconciliation, findings, Delivery NOT-CONSUMED, diff JSONL→`64c6cc00594f78eaca6854eb1635350cb35723740319ee7d4092894f090344b9`.

## Review pack content coverage final

- modified sections complete : yes
- useful diff included : yes (JSONL lossless)
- synthesis only : no
- review pack verdict : complete
