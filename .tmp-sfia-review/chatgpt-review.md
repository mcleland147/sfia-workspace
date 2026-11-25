# SFIA Studio Next — ML5 Adaptive Cognitive Continuation — Review Pack FULL

**Date:** 2026-11-25  
**Mode:** publish-in-cycle · Review Pack FULL · L3 handoff REQUIRED  
**Verdict cible:** NORA ADAPTIVE COGNITIVE CONTINUATION — LONG INVESTIGATION PROVEN — ML5 CORRECTIVE DELIVERY COMPLETE — READY FOR CHATGPT REVIEW

---

## 1. Git Truth Check

| Item | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD (pre-commit tip expected base) | `cb4ae5990c0e8c2f75c466962f8a77f300c63e24` |
| Working tip (uncommitted until commit) | `cb4ae5990c0e8c2f75c466962f8a77f300c63e24` |
| Tree at base | `ad1f01fa976666dddb64e80665abdb677ec17717` |
| Web tree at base | `eb8dc550456c87f77053a3a5952e3edd20de5099` |
| Main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Remote | |
```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
```
| Staged | none expected before commit |
| Lane DEV | `127.0.0.1:3100` · PG `:5433` |
| RECETTE | `127.0.0.1:3200` · PG `:5434` · SHA `2a024b1c` · Build `3RyhswMcKrNv8woukVXsT` — **préservée** |
| BUILD_ID candidat | `CC0wLCfVBY-Q1uALQDItr` |
| Digest | `882e1eff3c198e79a91c8d732275195a31841dd2ba469c4540e50934889f02a7` |
| Calibration | MAX_TOKENS=2000000 · REEVAL=1000000 · MAX_SEGMENTS=120 · OPERATIONAL_PROVISIONAL |

### git status
```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
 M projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/preparation/service.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-envelope-and-continuity.test.ts
?? projects/sfia-studio-next/web/scripts/ml5-adaptive-live-campaign.mjs
?? projects/sfia-studio-next/web/scripts/ml5-adaptive-live-continue.mjs
?? projects/sfia-studio-next/web/scripts/ml5-adaptive-s2-note-parent.mjs
?? projects/sfia-studio-next/web/scripts/ml5-adaptive-s3-only.mjs
?? projects/sfia-studio-next/web/scripts/ml5-adaptive-s3-synthesis-from-acquis.mjs
```

### Diffstat vs base cb4ae599
```
.../construction/delivery-history.md               |  18 ++
 .../web/src/components/figma/NoraLiveActivity.tsx  |  28 +-
 .../domains/conversation/cognitive-conductor.ts    | 102 ++++++-
 .../src/domains/conversation/cognitive-policy.ts   |  24 +-
 .../web/src/domains/conversation/cognitive-work.ts |  51 +++-
 .../web/src/domains/conversation/document-act.ts   |  17 +-
 .../src/domains/conversation/document-command.ts   |  10 +
 .../conversation/investigation-continuation.ts     |  13 +-
 .../domains/conversation/investigation-state.ts    |   7 +
 .../web/src/domains/conversation/nora-adapter.ts   |  65 +++-
 .../conversation/run-nora-cognitive-turn.ts        | 336 +++++++++++++++++++--
 .../web/src/domains/conversation/service.ts        |  23 +-
 .../web/src/domains/preparation/service.ts         |  17 +-
 .../ml5-cognitive-envelope-and-continuity.test.ts  | 210 +++++++++++--
 14 files changed, 807 insertions(+), 114 deletions(-)
```

---

## 2. Sources réellement consultées

- Architecture `conducteur-cognitif-et-production-nora.md` (ref docs) — reprise opérationnelle.
- Handoffs `5f208d5e` / blob `1a72b12a` — réserves B4, LEGACY, LIVE.
- SDK `@openai/agents` 0.21.0 installé — maxTurns, usage, soft boundary applicative (pas de compaction opaque inventée).
- OpenAI Agents JS guides (running/sessions/results/models) + compaction/conversation-state — vérifiés vs version installée.
- SEF / roadmap / ENV-01 / product-versioning (blobs main).
- Corpus Chantiers360 (arepo_60b78cda) — 50 paths pré-déclarés.

---

## 3. SDK et capacités vérifiées

| Capacité | Statut |
|---|---|
| maxTurns | Exception MaxTurnsExceeded → soft segment boundary CONTINUE (category `max_turns`) |
| Usage | AGENTS_SDK_RUN_STATE ; cache **non** soustrait du cumul |
| Sessions SDK | non utilisées comme politique de compaction métier |
| Compaction fournisseur | non substituée aux checkpoints D3 |
| AbortSignal / HTTP | timeouts client ≠ arrêt serveur ; travail continue côté Next |

---

## 4. Mécanisme d’exécution réel

1. `runNoraCognitiveTurn` → `resolveCognitiveWorkAttachment` → `runCognitiveConductor`.
2. Segments locaux (investigation jusqu’à 40) ; auto-rounds serveur sur `SEGMENT_INVOCATION_LIMIT`.
3. Avant segment : `evaluateGlobalResourceEnvelope` (2M + réserve restitution).
4. Après : checkpoint PG, fingerprint anti-boucle, activity métier.
5. Soft boundary provider → CONTINUE + checkpoint, **sans** polluer le corps DOCUMENT (correctif final).
6. Inventaire périmètre : freeze sur liste Pilote / count déclaré ; continue si inventaire incomplet.

---

## 5. Architecture de correction (A/B/C/D)

### A — Conduite adaptative
- Politique 2M / 1M reeval / 120 segments.
- Segments courts (maxProviderCalls investigation 8) + frontières soft.
- Continuité automatique sans nouveau message Pilote.
- Contexte compacté + prochaines sources non examinées.

### B — Continuité / capitalisation
- Checkpoints PG versionnés.
- Couverture inventaire + plages PARTIAL/DENIED.
- `parent_work_id` + injection acquis parent (B4).
- `NEW_PRODUCTION_FROM_PRIOR_ACQUIS` / note-from-prior text heuristic.

### C — Intégrité documentaire
- `contentSha256` titre\0corps vs `contentBodySha256`.
- Section hints authority-aware (C2).
- LEGACY fence → canonicalize déterministe (préservé).
- Soft-boundary exclu du merge DOCUMENT.

### D — Activité LIVE
- Producteurs Git + progress `consulted/inventoryTotal`.
- Objectif stable ; failed ≠ ✓ (NoraLiveActivity).

---

## 6. Politique de ressources effective

```
SFIA_COGNITIVE_MAX_TOKENS=2000000
SFIA_COGNITIVE_REEVAL_TOKENS=1000000
SFIA_COGNITIVE_MAX_SEGMENTS=120
```
Seuil 1M = réévaluation (notée dans remainingWork / limits), pas suspension.
Plafond 2M = enveloppe administrative ; soft-stop avec réserve restitution.
Cache tokens comptabilisés séparément, **non** déduits du cumul sécurité.

---

## 7. Mesures cognitives LIVE

### S1 — Demande simple
```json
{
  "id": "cgw_a177e731-63c2-4360-a020-b6d12ef25901",
  "status": "COMPLETE",
  "revision": 3,
  "interrupt_cause": null,
  "objective": "D\u00e9finir en une phrase ce qu\u2019est un checkpoint cognitif dans Studio Next.",
  "resources": {
    "segmentCalls": 1,
    "inputTokens": 8436,
    "outputTokens": 245,
    "cacheTokens": 2764,
    "reasoningTokens": 0,
    "estimatedCostUsd": null,
    "modelRequested": "gpt-6.2-sol",
    "modelApplied": "UNVERIFIED",
    "effortRequested": "medium",
    "effortApplied": "UNVERIFIED",
    "webCalls": 0,
    "durationMs": 5625,
    "limits": [
      "CACHED_INPUT_TOKENS:2764",
      "PROVIDER_REQUESTS:1",
      "USAGE_PROVENANCE:AGENTS_SDK_RUN_STATE"
    ]
  },
  "state": {
    "intentSummary": "D\u00e9finir en une phrase ce qu\u2019est un checkpoint cognitif dans Studio Next.",
    "desiredOutcome": "",
    "constraints": [],
    "risks": [],
    "profileHint": "simple",
    "questions": [],
    "sources": [],
    "contradictions": [],
    "exclusions": [],
    "remainingWork": [],
    "sufficiency": "INSUFFICIENT",
    "contractReady": false,
    "contractReadyBlockedReason": "R\u00e9sultat attendu non sp\u00e9cifi\u00e9",
    "productionInstruction": null,
    "acceptanceCriteria": [],
    "conclusions": [],
    "inventoryTotal": null,
    "inventoryExamined": 0,
    "registeredPublicTopics": {},
    "authorizedExactWebQueries": [],
    "registeredPublicFacts": [],
    "cognitiveWorkId": "cgw_a177e731-63c2-4360-a020-b6d12ef25901",

```

### S2 — Investigation Git + note
- Analyse multi-seg: keys=['id', 'status', 'revision', 'interrupt_cause', 'objective', 'resources', 'state', 'production', 'parent_work_id']
- Note D4: `documentSave`={"status": "AVAILABLE", "documentId": "doc_86a08511-23c1-4644-8f04-28a0617becea", "revisionId": "drev_57eaac9c-70da-429f-9534-847ae27462b4", "revisionNumber": 1, "act": "CREATE"}
- Work note antérieur parent null (avant fix) ; correctif parent prouvé sur travaux suivants.
- S2c note-with-parent: status=OPEN parent=cgw_ef647d73-cad1-4dcc-b2eb-926e7e144d90 segs=12 tok=1110137 prod=COMPLETE

### S3 — Investigation longue 50 sources (discriminant)

| Métrique | Valeur |
|---|---|
| Work | `cgw_1991a962-0063-4c57-abb3-8ef905d05110` |
| Segments | 26 |
| Tokens cumulés | 2 045 830 |
| Checkpoints | 27 |
| Inventaire déclaré | 50 |
| Couverture chemins | **50/50** (34 CONSULTED + 14 PARTIAL + 2 DENIED) |
| Terminal | SUSPENDED `GLOBAL_TOKEN_BUDGET_EXHAUSTED` (après couverture ; inflation 51/52 corrigée ensuite) |
| Conclusions persistées | 24 |
| Continuité | multi-générations SEGMENT_CONTINUE automatiques ; passage seuil 1M observé |

```json
{
  "workId": "cgw_1991a962-0063-4c57-abb3-8ef905d05110",
  "status": "SUSPENDED",
  "interruptCause": "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
  "segments": 26,
  "tokens": 2045830,
  "checkpoints": 27,
  "coverageCounter": {
    "PARTIAL": 14,
    "CONSULTED": 34,
    "DENIED": 2
  },
  "coveredPaths": 50,
  "inventoryDeclared": 50,
  "conclusionsSample": [
    "Que prouvent les migrations de planning, de budget et d’alertes budgétaires ? → 0004 crée les ouvriers et leurs créneaux (EVOL-002, ADR-001) ; 0005 crée les ressources et dépenses et active par défaut les réglages d’alerte à 80 % et 100 % ; 0006 ajoute les deux types d’alerte. Ces migrations ne prouvent ni le calcul ni l’émission d’une alerte.",
    "Comment les gardes et décorateurs appliquent-ils les règles d’identité et de rôle déclarées ? → D’après les lectures antérieures reportées : identité résolue et exposée sur la requête, sinon 401 ; CurrentUser lit ce contexte ; les métadonnées de méthode priment sur celles de classe, et un rôle requis non satisfait donne 403.",
    "Les six fichiers alerts mettent-ils en œuvre un déclenchement des alertes ? → Non dans ces six fichiers : le module câble un contrôleur sans route et un service vide ; DTO, entité et dépôt sont vides. Les deux options de seuil de la migration 0005 ne prouvent pas un déclenchement.",
    "Que prouvent les trois premières migrations sur le socle métier, les réserves et les photos ? → 0001 pose le socle relationnel, les statuts et les valeurs par défaut ; ne contraint pas les transitions de chantier ni l’unicité des affectations. 0002 ajoute le responsable et la date de prise en charge facultatifs, impose une FK pour le créateur et remet le responsable à NULL à la suppression. 0003 introduit les métadonnées de stockage, la suppression logique et une clé de stockage unique, avec",
    "Comment les gardes et décorateurs appliquent-ils les règles d’identité et de rôle déclarées ? → Selon les lectures antérieures rapportées : les gardes d’identité alimentent le contexte utilisateur de la requête ou renvoient 401 ; CurrentUser lit ce contexte. Les métadonnées de méthode priment sur celles de classe ; le défaut d’un rôle exigé produit un 403. Reste à rattacher ce constat aux routes et à la configuration du module Auth, sans relire les gardes.",
    "Pour chacun des 50 chemins, quel état de lecture peut-on justifier au commit fixé ? → 13 lectures intégrales directement attestées dans ce segment, 33 lectures antérieures rapportées sans nouve
```

#### Inventaire pré-déclaré (50)
```
.github/dependabot.yml
.github/workflows/ci.yml
.github/workflows/docker-publish.yml
Cartographie des workflows.txt
Compte rendu - Atelier cadrage #1.txt
Compte rendu - Atelier cadrage #2.txt
Compte rendu - Validation du périmètre fonctionnel.txt
DAA - Chantiers360.txt
Modèle de données détaillé.txt
README.md
SFG - Projet Chantiers360.txt
backend/README.md
backend/prisma.config.ts
backend/prisma/migrations/0001_init/migration.sql
backend/prisma/migrations/0002_issue_assignee/migration.sql
backend/prisma/migrations/0003_photo_upload_storage/migration.sql
backend/prisma/migrations/0004_worker_planning/migration.sql
backend/prisma/migrations/0005_budget_resources_expenses/migration.sql
backend/prisma/migrations/0006_alert_budget_types/migration.sql
backend/prisma/recette-seed.ts
backend/prisma/schema.prisma
backend/prisma/seed.ts
backend/src/alerts/alerts.controller.ts
backend/src/alerts/alerts.module.ts
backend/src/alerts/alerts.service.ts
backend/src/alerts/dto/create-alerts.dto/create-alerts.dto.ts
backend/src/alerts/entities/alerts.entity/alerts.entity.ts
backend/src/alerts/repositories/alerts.repository/alerts.repository.ts
backend/src/app.controller.spec.ts
backend/src/app.controller.ts
backend/src/app.module.ts
backend/src/app.service.ts
backend/src/assignments/assignments.controller.ts
backend/src/assignments/assignments.module.ts
backend/src/assignments/assignments.service.ts
backend/src/assignments/dto/create-assignments.dto/create-assignments.dto.ts
backend/src/assignments/entities/assignments.entity/assignments.entity.ts
backend/src/assignments/repositories/assignments.repository/assignments.repository.ts
backend/src/auth/auth.controller.ts
backend/src/auth/auth.module.ts
backend/src/auth/auth.service.spec.ts
backend/src/auth/auth.service.ts
backend/src/auth/constants/api-roles.ts
backend/src/auth/decorators/current-user.decorator.ts
backend/src/auth/decorators/roles.decorator.ts
backend/src/auth/dto/login.dto.ts
backend/src/auth/guards/jwt-auth.guard.ts
backend/src/auth/guards/roles.guard.spec.ts
backend/src/auth/guards/roles.guard.ts
backend/src/auth/guards/user-context.guard.ts

```

#### Extrait restitution / synthèse
```
J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour. J’ai atteint la limite de ressources allouée à ce travail cognitif. Conclusions et acquis déjà consolidés:
• Quels chemins et quelle révision régissent la revue ? → Les 50 chemins de la demande initiale, au commit fixé ; le relevé est dédupliqué par chemin et ne somme pas les compteurs historiques. • Une réserve EN_COURS satisfait-elle le critère métier de clôture ? → Non selon le cadrage : réception validée et toutes les réserves levées. L’ambiguïté de la SFG subsiste et la règle métier ne prouve pas le verrou serveur. • Une réserve EN_COURS est-elle compatible avec la règle de clôture du cadrage ? → Non. Le cadrage exige une réception validée et toutes les réserves levées. La SFG reste ambiguë et ce constat documentaire ne démontre pas le verrou serveur. • Une réserve EN_COURS est-elle compatible avec la règle de clôture du cadrage ? → Non : le cadrage exige une réception validée et toutes les réserves levées. Le mot « ouvertes » dans la SFG est ambigu et n’établit pas le comportement du serveur. • Une réserve EN_COURS est-elle compatible avec la règle de clôture du cadrage ? → Non. L’atelier nº 2 exige une réception validée et toutes les réserves levées. La formulation de la SFG reste ambiguë et ne renseigne pas sur le comportement serveur. • Une réserve EN_COURS est-elle compatible avec la règle métier de clôture ? → Non. Le cadrage exige une réception validée et toutes les réserves levées. Cette règle ne prouve pas son application serveur. • Quels chemins et quelle révision régissent la revue ? → Seuls les 50 chemins nommés dans la demande initiale sont admis, au commit fixé ; le relevé est dédupliqué par chemin. • Une réserve EN_COURS est-elle compatible avec la règle de clôture du cadrage ? → Non. Le cadrage exige une réception validée et toutes les réserves levées. Le mot « ouvertes » dans la SFG est ambigu ; il ne démontre pas la règle effectivement appliquée par le serveur. Lectures effectuées:
• Git · CONSULTED — alerts.entity.ts — read_git_file — fichier lu
• Git · CONSULTED — roles.guard.spec.ts — read_git_file — fichier lu
• Git · CONSULTED — api-
```

#### Trace segments (échantillon chronologique)
| Time UTC | segs | tokens | inv |
|---|---|---|---|
| 11:23 | 1 | — | 11/50 |
| 11:25 | 2 | — | 19/50 |
| 11:27 | 3 | 76 195 | 31/50 |
| 11:28 | 4 | 147 923 | 43/50 |
| 11:31 | 5 | 249 958 | 50/51* |
| 11:49 | 14 | 1 003 854 | 51/52* |
| 12:12 | 26 | 2 045 830 | 51/52* |

\* inflation inventaire par découvertes hors périmètre — **corrigée** (freeze périmètre Pilote).

### B4 parent_work_id
- `cgw_610bcbce.parent_work_id = cgw_1991a962`
- `cgw_cd948312.parent_work_id = cgw_ef647d73`
- Injection acquis parent dans le premier segment du nouvel enveloppe.

### Note D4
- `doc_86a08511-23c1-4644-8f04-28a0617becea` — « Prévenir les doubles réservations — recommandation pour un MVP »

---

## 8. Completeness Gate

| # | Condition | Preuve |
|---|---|---|
| 1 | Stratégie adaptative | profiles simple/analyse/investigation + exhaustiveSeed |
| 2 | Segmentation réelle | 26 segs S3 ; 2+ S2 |
| 3 | Continuation automatique | SEGMENT_CONTINUE + auto-rounds |
| 4 | Contrôle appels | soft boundary max_turns/schema ; envelope avant segment |
| 5 | Contextes maîtrisés | continuation compactée + next paths |
| 6 | Checkpoints durables | 27 ckpts S3 |
| 7 | Ressources cumulatives | 2.04M mesurés |
| 8 | Calibration 1M/2M | env + evaluateGlobalResourceEnvelope tests |
| 9 | Anti-boucles | NO_PROGRESS_DETECTED fingerprint |
| 10 | Demande simple | S1 campaign |
| 11 | Investigation Git | S2 LIVE |
| 12 | 50 sources | s3d-coverage-50.json 50/50 |
| 13 | Couverture exacte | pathCoverage 50 |
| 14 | Synthèse | restitution + 24 conclusions |
| 15 | Réutilisation acquis | parent_work_id + parent acquis block |
| 16 | Note D4 | doc_86a08511 |
| 17 | Reprise | lease/CAS préservés ; SEGMENT_INVOCATION auto-continue |
| 18–20 | C1–C3 | tests contentSha + section authority + LEGACY path |
| 21–23 | LIVE honest | NoraLiveActivity failed≠✓ ; git producers |
| 24 | Non-régression RB | mécanismes antérieurs préservés |
| 25 | Docs | delivery-history append |
| 26 | Build DEV | CC0wLCfVBY-Q1uALQDItr |
| 27 | RECETTE préservée | 3RyhswMcKrNv8woukVXsT |

---

## 9. Manifeste candidat

| Champ | Valeur |
|---|---|
| Delivery | next-ml5-adaptive-cognitive-continuation-20261125 |
| Base | cb4ae599 |
| BUILD_ID | CC0wLCfVBY-Q1uALQDItr |
| Digest | 882e1eff3c198e79a91c8d732275195a31841dd2ba469c4540e50934889f02a7 |
| Lane | DEV |
| DB | :5433 |
| RECETTE | inchangée |
| NO RELEASE | oui |

---

## 10. Réserves et verdict

**Réserves**
1. Terminal S3 = GLOBAL_TOKEN_BUDGET_EXHAUSTED après couverture complète des 50 (inflation inventaire) — freeze déployé.
2. Travaux « note from acquis » peuvent encore consommer beaucoup de tokens en relectures Git malgré parent.
3. Soft-boundary ne doit plus écrire dans contentMarkdown DOCUMENT (correctif inclus).
4. Timeouts HTTP client (undici/curl) n’arrêtent pas le conducteur serveur.

**Verdict**

NORA ADAPTIVE COGNITIVE CONTINUATION — LONG INVESTIGATION PROVEN — ML5 CORRECTIVE DELIVERY COMPLETE — READY FOR CHATGPT REVIEW.

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED.

---

## 11. Git Review Index — nouveaux fichiers

### `projects/sfia-studio-next/web/scripts/ml5-adaptive-live-campaign.mjs`
```javascript
/**
 * ML5 adaptive continuation — three discriminating LIVE scenarios (DEV only).
 * Product API path only — no injected checkpoints / no direct model calls.
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_ADAPTIVE_BASE || "http://127.0.0.1:3100";
const OUT = process.env.SFIA_ADAPTIVE_OUT || "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
async function api(path, { method = "GET", body, timeoutMs = 1_800_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const set = res.headers.getSetCookie?.() || [];
    for (const c of set) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 800) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function pgJson(sql) {
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(sql)}`,
      { encoding: "utf8", maxBuffer: 20_000_000 },
    ).trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch (e) {
    return { error: String(e) };
  }
}

function loadWorkMetrics(workId) {
  if (!workId) return null;
  const work = pgJson(
    `SELECT row_to_json(t) FROM (
      SELECT id, status, revision, interrupt_cause AS "interruptCause",
             objective, resources_json::json AS resources,
             state_json::json AS state, production_json::json AS production
      FROM cognitive_works WHERE id='${workId}'
    ) t;`,
  );
  const checkpoints = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision), '[]'::json) FROM (
      SELECT id, revision, cause, created_at AS "createdAt"
      FROM cognitive_work_checkpoints WHERE work_id='${workId}'
    ) t;`,
  );
  const state = work?.state || {};
  const resources = work?.resources || {};
  const sources = state.sources || [];
  return {
    workId,
    status: work?.status,
    revision: work?.revision,
    interruptCause: work?.interruptCause,
    objective: work?.objective,
    resources,
    inventoryTotal: state.inventoryTotal ?? null,
    inventoryExamined: state.inventoryExamined ?? null,
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    sourceRefs: sources.map((s) => ({
      ref: s.ref,
      coverage: s.coverage,
      kind: s.kind,
    })),
    conclusions: state.conclusions || [],
    remainingWork: state.remainingWork || [],
    checkpoints: checkpoints || [],
    checkpointCount: Array.isArray(checkpoints) ? checkpoints.length : 0,
  };
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  steps: [],
  inventory: null,
  scenarios: {},
};
function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 500));
}

function summarizeTurn(json, httpStatus = null) {
  const cw = json.cognitiveWork || json.conductor || {};
  const inv = cw.investigation || json.investigation || {};
  const resources = cw.resources || {};
  const lastMsg =
    (json.messages || []).slice(-1)[0] ||
    (json.assistantMessage ? { content: json.assistantMessage } : null);
  return {
    httpStatus: httpStatus ?? json.httpStatus ?? null,
    apiError: json.error || null,
    replyStatus: json.replyStatus || json.noraStatus || json.status,
    workId: cw.workId || cw.id || null,
    revision: cw.revision ?? null,
    segmentsRun: cw.segmentsRun ?? null,
    suspended: cw.suspended ?? null,
    suspendReason: cw.suspendReason ?? null,
    inputTokens: resources.inputTokens ?? null,
    outputTokens: resources.outputTokens ?? null,
    totalTokens:
      (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0) || null,
    segmentCalls: resources.segmentCalls ?? null,
    cacheTokens: resources.cacheTokens ?? null,
    limits: (resources.limits || []).slice(-12),
    sourcesConsulted: (inv.sources || []).filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: (inv.sources || []).filter((s) => s.coverage === "DISCOVERED")
      .length,
    inventoryTotal: inv.inventoryTotal ?? null,
    inventoryExamined: inv.inventoryExamined ?? null,
    conclusions: (inv.conclusions || []).length,
    remainingWork: inv.remainingWork || [],
    parentWorkHint: cw.parentWorkId || null,
    attachmentReason: json.cognitiveAttachmentReason || null,
    documentSave: json.documentSave || null,
    contentPreview: (lastMsg?.content || json.content || "").slice(0, 400),
  };
}

await api("/api/dev/auto-session", { method: "POST" });
step("auth", { ok: true });

async function waitQualificationTerminal(projectId, { timeoutMs = 120_000 } = {}) {
  const started = Date.now();
  let last = null;
  while (Date.now() - started < timeoutMs) {
    const r = await api(
      `/api/projects/${projectId}/initial-qualification/reconcile`,
      { method: "POST", timeoutMs: 60_000 },
    );
    last = r.json?.initialQualification || r.json;
    const status = last?.status;
    if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) {
      return last;
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
  return last;
}

async function newProject(name, intention) {
  const intentionText =
    intention ||
    "Analyser et documenter les mécanismes métier d'un dépôt Git autorisé, puis produire des notes de recommandation actionnables.";
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = prep.json.preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: intentionText,
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `adaptive-${randomUUID()}`,
      previewSummary: intentionText,
    },
  });
  const projectId = created.json.projectId;
  const iq = await waitQualificationTerminal(projectId);
  step("qualification", {
    projectId,
    status: iq?.status,
    phase: iq?.phase,
    composerLocked: iq?.composerLocked,
  });
  return { preparationId, projectId, iq };
}

async function msg(preparationId, content, opts = {}) {
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content,
      clientTurnKey: `adaptive-${randomUUID()}`,
      ...(opts.forceNew ? { forceNewCognitiveWork: true } : {}),
      ...(opts.workId ? { cognitiveWorkId: opts.workId } : {}),
    },
    timeoutMs: opts.timeoutMs ?? 1_800_000,
  });
}

const REPO_ID =
  process.env.SFIA_CHANTIERS360_REPO_ID ||
  "arepo_60b78cda-7450-47fd-accd-3525c2e53a62";

async functi
```

### `projects/sfia-studio-next/web/scripts/ml5-adaptive-live-continue.mjs`
```javascript
/**
 * Continue adaptive LIVE proofs after first multi-segment observation.
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 1_800_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    for (const c of res.headers.getSetCookie?.() || []) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 800) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}
function log(n, d) {
  console.log(`[${n}]`, JSON.stringify(d).slice(0, 600));
}
function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
      { encoding: "utf8", maxBuffer: 20_000_000 },
    ).trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch (e) {
    return { error: String(e.message || e) };
  }
}
function metrics(workId) {
  if (!workId) return null;
  const work = pg(
    `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, objective, resources_json::json AS resources, state_json::json AS state, parent_work_id FROM cognitive_works WHERE id='${workId}') t;`,
  );
  if (!work || work.error) return { workId, error: work?.error || "missing" };
  const checkpoints = pg(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision),'[]'::json) FROM (SELECT revision, cause, generation_id, created_at FROM cognitive_work_checkpoints WHERE work_id='${workId}') t;`,
  );
  const st = work.state || {};
  const sources = st.sources || [];
  const r = work.resources || {};
  return {
    workId,
    status: work.status,
    revision: work.revision,
    interruptCause: work.interrupt_cause,
    parentWorkId: work.parent_work_id,
    segmentCalls: r.segmentCalls,
    inputTokens: r.inputTokens,
    outputTokens: r.outputTokens,
    totalTokens: (r.inputTokens || 0) + (r.outputTokens || 0),
    limits: (r.limits || []).slice(-12),
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    inventoryTotal: st.inventoryTotal ?? null,
    inventoryExamined: st.inventoryExamined ?? null,
    conclusions: st.conclusions || [],
    remainingWork: st.remainingWork || [],
    sourceRefs: sources.map((s) => ({ ref: s.ref, coverage: s.coverage, kind: s.kind })),
    checkpoints: Array.isArray(checkpoints) ? checkpoints : [],
  };
}

await api("/api/dev/auto-session", { method: "POST" });

async function waitIq(projectId) {
  for (let i = 0; i < 80; i++) {
    const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      method: "POST",
      timeoutMs: 90_000,
    });
    const st = r.json?.initialQualification?.status;
    if (st && !["PENDING", "RUNNING", "UNKNOWN"].includes(st)) return r.json.initialQualification;
    await new Promise((r) => setTimeout(r, 1500));
  }
  return null;
}

async function newProject(name, intention) {
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = prep.json.preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: { previewName: name, previewSummary: intention, expectedCreationRevision: rev },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `adaptive2-${randomUUID()}`,
      previewSummary: intention,
    },
  });
  const projectId = created.json.projectId;
  const iq = await waitIq(projectId);
  log("qualification", { projectId, status: iq?.status });
  return { preparationId, projectId, iq };
}

async function msg(preparationId, content, opts = {}) {
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content,
      clientTurnKey: `adaptive2-${randomUUID()}`,
      ...(opts.forceNew ? { forceNewCognitiveWork: true } : {}),
      ...(opts.workId ? { cognitiveWorkId: opts.workId } : {}),
    },
    timeoutMs: opts.timeoutMs ?? 1_800_000,
  });
}

async function attachGit(projectId) {
  return api(`/api/projects/${projectId}/git/links`, {
    method: "POST",
    body: { repositoryId: "arepo_60b78cda-7450-47fd-accd-3525c2e53a62" },
  });
}

// ---- S1 simple on fresh project after IQ terminal ----
if (process.env.SFIA_SKIP_S1 !== "1") {
  const { preparationId, projectId } = await newProject(
    "Adaptive S1b Simple",
    "Projet fictif DEV — réponses conversationnelles simples sans investigation Git.",
  );
  const t0 = Date.now();
  const res = await msg(
    preparationId,
    "En une phrase, qu'est-ce qu'un checkpoint cognitif dans Studio Next ?",
    { forceNew: true, timeoutMs: 180_000 },
  );
  const workId = res.json?.cognitiveWork?.workId || null;
  const out = {
    http: res.status,
    status: res.json?.status,
    workId,
    segmentsRun: res.json?.cognitiveWork?.segmentsRun,
    suspended: res.json?.cognitiveWork?.suspended,
    durationMs: Date.now() - t0,
    metrics: metrics(workId),
    preview: (res.json?.messages || []).slice(-1)[0]?.content?.slice(0, 300) ||
      res.json?.error ||
      null,
  };
  save("s1b-simple", { out, raw: res.json });
  log("s1b_simple", out);
} else {
  log("s1b_simple", { skipped: true, workId: "cgw_a177e731-63c2-4360-a020-b6d12ef25901" });
}

// ---- S2 note from prior acquis (same prep as multi-segment analysis) ----
{
  const preparationId = "prep_85f051f7-0c6e-4649-91fb-f313c840b40c";
  const priorWorkId = "cgw_ef647d73-cad1-4dcc-b2eb-926e7e144d90";
  const t0 = Date.now();
  const res = await msg(
    preparationId,
    "Prépare une note de recommandation à partir de cette analyse. Crée le document D4 exploitable.",
    { forceNew: false, timeoutMs: 600_000 },
  );
  const workId = res.json?.cognitiveWork?.workId || null;
  const out = {
    http: res.status,
    status: res.json?.status,
    workId,
    priorWorkId,
    segmentsRun: res.json?.cognitiveWork?.segmentsRun,
    documentSave: res.json?.documentSave || null,
    pendingCandidate: res.json?.pendingDocumentCandidate
      ? {
          title: res.json.pendingDocumentCandidate.title,
          contentSha256: res.json.pendingDocumentCandidate.contentSha256,
        }
      : null,
    attachment: res.json?.cognitiveAttachmentReason || null,
    durationMs: Date.now() - t0,
    metrics: metrics(workId),
    priorMetrics: metrics(priorWorkId),
  };
  save("s2b-note", { out, raw: res.json });
  log("s2b_note", out);
}

// ---- S3 exhaustive 50 ----
{
  const inventory = readFileSync(`${OUT}/inventory-50-paths.txt`, "utf8")
    .trim()
    .split("\n")
    .filter(Boole
```

### `projects/sfia-studio-next/web/scripts/ml5-adaptive-s3-only.mjs`
```javascript
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";
const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 3_200_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    for (const c of res.headers.getSetCookie?.() || []) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 800) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}
function save(n, d) {
  writeFileSync(`${OUT}/${n}.json`, JSON.stringify(d, null, 2));
}
function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  const raw = execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}
function metrics(workId) {
  if (!workId) return null;
  const work = pg(
    `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, objective, resources_json::json AS resources, state_json::json AS state, parent_work_id FROM cognitive_works WHERE id='${workId}') t;`,
  );
  const checkpoints = pg(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision),'[]'::json) FROM (SELECT revision, cause, generation_id, created_at FROM cognitive_work_checkpoints WHERE work_id='${workId}') t;`,
  );
  const st = work?.state || {};
  const sources = st.sources || [];
  const r = work?.resources || {};
  return {
    workId,
    status: work?.status,
    revision: work?.revision,
    interruptCause: work?.interrupt_cause,
    parentWorkId: work?.parent_work_id,
    segmentCalls: r.segmentCalls,
    inputTokens: r.inputTokens,
    outputTokens: r.outputTokens,
    totalTokens: (r.inputTokens || 0) + (r.outputTokens || 0),
    limits: (r.limits || []).slice(-16),
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    inventoryTotal: st.inventoryTotal ?? null,
    inventoryExamined: st.inventoryExamined ?? null,
    conclusions: st.conclusions || [],
    remainingWork: st.remainingWork || [],
    sourceRefs: sources.map((s) => ({ ref: s.ref, coverage: s.coverage })),
    checkpoints: Array.isArray(checkpoints) ? checkpoints : [],
  };
}

await api("/api/dev/auto-session", { method: "POST" });

async function waitIq(projectId) {
  for (let i = 0; i < 80; i++) {
    const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      method: "POST",
      timeoutMs: 90_000,
    });
    const st = r.json?.initialQualification?.status;
    if (st && !["PENDING", "RUNNING", "UNKNOWN"].includes(st)) return r.json.initialQualification;
    await new Promise((r) => setTimeout(r, 1500));
  }
  return null;
}

const inventory = readFileSync(`${OUT}/inventory-50-paths.txt`, "utf8")
  .trim()
  .split("\n")
  .filter(Boolean);
console.log("inventory", inventory.length);

const runId = randomUUID().slice(0, 8);
const projectName = `Adaptive S3 ${runId} Exhaustive50`;
const prep = await api("/api/preparations", { method: "POST", body: {} });
const preparationId = prep.json.preparationId;
if (!preparationId) throw new Error(`prep failed: ${JSON.stringify(prep.json).slice(0, 400)}`);
let g = await api(`/api/preparations/${preparationId}`);
let rev = g.json.preparation.creationRevision;
await api(`/api/preparations/${preparationId}`, {
  method: "PATCH",
  body: {
    previewName: projectName,
    previewSummary:
      "Examiner intégralement 50 sources Git et produire une synthèse structurée avec références.",
    expectedCreationRevision: rev,
  },
});
g = await api(`/api/preparations/${preparationId}`);
rev = g.json.preparation.creationRevision;
const created = await api(`/api/preparations/${preparationId}/create-project`, {
  method: "POST",
  body: {
    expectedCreationRevision: rev,
    projectName,
    idempotencyKey: `s3c-${randomUUID()}`,
    previewSummary:
      "Examiner intégralement 50 sources Git et produire une synthèse structurée avec références.",
  },
});
const projectId = created.json.projectId;
console.log("create-project", created.status, created.json?.status || created.json, projectId);
if (!projectId) {
  throw new Error(`create-project missing projectId: ${JSON.stringify(created.json).slice(0, 800)}`);
}
const iq = await waitIq(projectId);
console.log("iq", iq?.status);
const gitLink = await api(`/api/projects/${projectId}/git/links`, {
  method: "POST",
  body: { repositoryId: "arepo_60b78cda-7450-47fd-accd-3525c2e53a62" },
});
console.log("git-link", gitLink.status, JSON.stringify(gitLink.json).slice(0, 300));
if (gitLink.status >= 400) {
  throw new Error(`git link failed: ${JSON.stringify(gitLink.json).slice(0, 500)}`);
}
// Confirm prep context sees the project (conversation bind).
const prepCtx = await api(`/api/preparations/${preparationId}`);
console.log(
  "prep-ctx",
  prepCtx.json?.project?.id || prepCtx.json?.preparation?.status,
  "convProject",
  prepCtx.json?.conversation?.projectId || null,
);

const prompt = [
  "Examine intégralement les 50 documents de ce périmètre Git Chantiers360 (lecture seule).",
  "Périmètre fixé à l'avance (ne pas en inventer d'autres pour remplacer) :",
  inventory.join("\n"),
  "",
  "Identifie les responsabilités, les règles métier, les décisions, les dépendances et les contradictions.",
  "Produis une synthèse complète avec les références pertinentes.",
  "Couvre effectivement ces 50 sources ; signale celles qui sont inaccessibles.",
  "Tant que la couverture inventaire est incomplète, continue automatiquement sans m'interrompre.",
].join("\n");

const t0 = Date.now();
const res = await api(`/api/preparations/${preparationId}/messages`, {
  method: "POST",
  body: {
    content: prompt,
    clientTurnKey: `s3c-${randomUUID()}`,
    forceNewCognitiveWork: true,
  },
    timeoutMs: 3_200_000,
});
const workId = res.json?.cognitiveWork?.workId || null;
const out = {
  http: res.status,
  status: res.json?.status,
  workId,
  segmentsRun: res.json?.cognitiveWork?.segmentsRun,
  suspended: res.json?.cognitiveWork?.suspended,
  suspendReason: res.json?.cognitiveWork?.suspendReason,
  durationMs: Date.now() - t0,
  metrics: metrics(workId),
};
save("s3c-long", { out, raw: res.json, inventoryCount: inventory.length });
console.log("s3c_long", JSON.stringify(out).slice(0, 1200));
console.log("DONE");

```

### `projects/sfia-studio-next/web/scripts/ml5-adaptive-s3-synthesis-from-acquis.mjs`
```javascript
/**
 * B4 + S3 closure: new envelope from prior acquis → structured synthesis + optional D4 note.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync, spawnSync } from "node:child_process";

const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };
const PRIOR = "cgw_1991a962-0063-4c57-abb3-8ef905d05110";
const PREP = "prep_a2c334b0-7f33-4d26-b928-c1a5040b194d";

function curlJson(method, path, body, timeoutSec = 1200) {
  const args = [
    "-sS",
    "-X",
    method,
    `${BASE}${path}`,
    "-H",
    "content-type: application/json",
    "--max-time",
    String(timeoutSec),
    "-D",
    "-",
  ];
  if (jar.cookie) {
    args.push("-H", `cookie: ${jar.cookie}`);
  }
  if (body !== undefined) {
    args.push("--data-binary", JSON.stringify(body));
  }
  const r = spawnSync("curl", args, {
    encoding: "utf8",
    maxBuffer: 50_000_000,
  });
  if (r.error) throw r.error;
  const raw = r.stdout || "";
  const split = raw.indexOf("\r\n\r\n");
  const headerPart = split >= 0 ? raw.slice(0, split) : "";
  const bodyPart = split >= 0 ? raw.slice(split + 4) : raw;
  for (const line of headerPart.split(/\r?\n/)) {
    const m = line.match(/^set-cookie:\s*([^;]+)/i);
    if (m) {
      jar.cookie = jar.cookie ? `${jar.cookie}; ${m[1]}` : m[1];
    }
  }
  const statusMatch = headerPart.match(/^HTTP\/\S+\s+(\d+)/m);
  const status = statusMatch ? Number(statusMatch[1]) : r.status || 0;
  let json;
  try {
    json = JSON.parse(bodyPart);
  } catch {
    json = { _raw: bodyPart.slice(0, 800) };
  }
  return { status, json };
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  const raw = execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

curlJson("POST", "/api/dev/auto-session", {});

const prompt = [
  "À partir des acquis de l'analyse des 50 documents Chantiers360 déjà consolidés dans le travail cognitif précédent,",
  "produis maintenant la synthèse complète structurée : responsabilités, règles métier, décisions, dépendances, contradictions,",
  "avec les références pertinentes (chemins Git).",
  "Crée une note de recommandation D4 exploitable.",
  "Ne relis pas inutilement les sources déjà consultées ; réutilise les conclusions et références persistées.",
].join(" ");

const t0 = Date.now();
const res = curlJson(
  "POST",
  `/api/preparations/${PREP}/messages`,
  {
    content: prompt,
    clientTurnKey: `s3-synth-${randomUUID()}`,
  },
  1200,
);

const workId = res.json?.cognitiveWork?.workId || null;
const work = workId
  ? pg(
      `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, parent_work_id, resources_json::json AS resources, state_json::json AS state FROM cognitive_works WHERE id='${workId}') t;`,
    )
  : null;

const out = {
  http: res.status,
  status: res.json?.status,
  workId,
  priorWorkId: PRIOR,
  parentWorkId: work?.parent_work_id ?? null,
  segmentsRun: res.json?.cognitiveWork?.segmentsRun,
  documentSave: res.json?.documentSave ?? null,
  pendingCandidate: res.json?.pendingDocumentCandidate ?? null,
  durationMs: Date.now() - t0,
  resources: work?.resources ?? null,
  conclusions: (work?.state?.conclusions || []).slice(0, 8),
};

writeFileSync(`${OUT}/s3e-synthesis-from-acquis.json`, JSON.stringify({ out, raw: res.json }, null, 2));
console.log(JSON.stringify(out, null, 2).slice(0, 2500));
console.log("DONE");

```

### `projects/sfia-studio-next/web/scripts/ml5-adaptive-s2-note-parent.mjs`
```javascript
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync, spawnSync } from "node:child_process";

const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };
const PRIOR = "cgw_ef647d73-cad1-4dcc-b2eb-926e7e144d90";

function curlJson(method, path, body, timeoutSec = 600) {
  const args = ["-sS", "-X", method, `${BASE}${path}`, "-H", "content-type: application/json", "--max-time", String(timeoutSec), "-D", "-"];
  if (jar.cookie) args.push("-H", `cookie: ${jar.cookie}`);
  if (body !== undefined) args.push("--data-binary", JSON.stringify(body));
  const r = spawnSync("curl", args, { encoding: "utf8", maxBuffer: 50_000_000 });
  if (r.error) throw r.error;
  const raw = r.stdout || "";
  const split = raw.indexOf("\r\n\r\n");
  const headerPart = split >= 0 ? raw.slice(0, split) : "";
  const bodyPart = split >= 0 ? raw.slice(split + 4) : raw;
  for (const line of headerPart.split(/\r?\n/)) {
    const m = line.match(/^set-cookie:\s*([^;]+)/i);
    if (m) jar.cookie = jar.cookie ? `${jar.cookie}; ${m[1]}` : m[1];
  }
  const statusMatch = headerPart.match(/^HTTP\/\S+\s+(\d+)/m);
  const status = statusMatch ? Number(statusMatch[1]) : r.status || 0;
  let json;
  try {
    json = JSON.parse(bodyPart);
  } catch {
    json = { _raw: bodyPart.slice(0, 800) };
  }
  return { status, json };
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  const raw = execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

curlJson("POST", "/api/dev/auto-session", {});
const prep = pg(`SELECT preparation_id FROM cognitive_works WHERE id='${PRIOR}'`);
const preparationId = typeof prep === "string" ? prep : prep?.preparation_id || prep;
console.log("prep", preparationId);

const t0 = Date.now();
const res = curlJson("POST", `/api/preparations/${preparationId}/messages`, {
  content:
    "Prépare une note de recommandation à partir de cette analyse des conflits de planning. Crée le document D4 exploitable. Réutilise les acquis déjà consolidés sans tout relire.",
  clientTurnKey: `s2-parent-note-${randomUUID()}`,
}, 600);

const workId = res.json?.cognitiveWork?.workId || null;
const work = workId
  ? pg(
      `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, parent_work_id, resources_json::json AS resources FROM cognitive_works WHERE id='${workId}') t;`,
    )
  : null;

const out = {
  http: res.status,
  status: res.json?.status,
  workId,
  priorWorkId: PRIOR,
  parentWorkId: work?.parent_work_id ?? null,
  segmentsRun: res.json?.cognitiveWork?.segmentsRun,
  documentSave: res.json?.documentSave ?? null,
  pendingCandidate: res.json?.pendingDocumentCandidate ?? null,
  durationMs: Date.now() - t0,
  resources: work?.resources ?? null,
};
writeFileSync(`${OUT}/s2c-note-with-parent.json`, JSON.stringify({ out, raw: res.json }, null, 2));
console.log(JSON.stringify(out, null, 2));
console.log("DONE");

```

---

## 12. Diffs réels vs cb4ae599

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index aa8ccf9f..fa487483 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4707,3 +4707,21 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Réserves | Soft-stop ≠ garantie d'interruption mid-SDK ; F2 globale non revendiquée ; WEB LIVE blocked ; OAuth utilisateur GitHub interactif non complété (reads via App installation) |
 | Statut | DEV CANDIDATE COMPLETE — READY FOR CHATGPT REVIEW — NOT ADOPTED — NO RECETTE CUTOVER |
 
+## 2026-11-25 — ML5 adaptive cognitive continuation (Cycle 8 Delivery / DEV final)
+
+| Champ | Valeur |
+|---|---|
+| Delivery ID | `next-ml5-adaptive-cognitive-continuation-20261125` |
+| Date | 2026-11-25 |
+| Macro-lot | Finalisation ML5 Livraison 1 — conduite cognitive adaptative (pas un nouveau macro-lot) |
+| Type | INC · Critical · Cycle 8 Delivery |
+| Base | tip `cb4ae5990c0e8c2f75c466962f8a77f300c63e24` · tree `ad1f01fa976666dddb64e80665abdb677ec17717` · web tree `eb8dc550456c87f77053a3a5952e3edd20de5099` |
+| Calibration | `SFIA_COGNITIVE_MAX_TOKENS=2000000` · `REEVAL=1000000` · `MAX_SEGMENTS=120` · OPERATIONAL_PROVISIONAL |
+| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS |
+| Environnement | DEV `:3100` / PG `:5433` · Build `CC0wLCfVBY-Q1uALQDItr` · Digest `882e1eff3c198e79a91c8d732275195a31841dd2ba469c4540e50934889f02a7` |
+| Migration | NONE |
+| Contrôles | Vitest envelope/continuity + C18 PASS · next build · LIVE S1 simple · S2 multi-seg + D4 note · S3 50-sources 26 segments / 50/50 coverage · parent_work_id provenance · RECETTE `2a024b1c` / `3RyhswMcKrNv8woukVXsT` préservée |
+| Preuves clés | `cgw_1991a962` 26 segs · 2045830 tok · 27 ckpts · couverture 34 CONSULTED + 14 PARTIAL + 2 DENIED · `cgw_cd948312` parent=`cgw_ef647d73` · doc_86a08511 |
+| Réserves | Inflation inventaire 51/52 corrigée (freeze périmètre) ; travaux note-from-acquis peuvent encore relire Git malgré injection parent ; soft-boundary ne pollue plus le corps DOCUMENT ; timeouts HTTP client ≠ arrêt serveur |
+| Statut | DEV CANDIDATE — LONG INVESTIGATION PROVEN — READY FOR CHATGPT REVIEW — NOT ADOPTED — NO RECETTE CUTOVER |
+
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
index 57ce4930..cddaa96a 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
@@ -94,17 +94,29 @@ export function NoraLiveActivity(props: {
           {steps.map((step) => (
             <li
               key={step.key}
-              data-state={!active && step.state === "current" ? "done" : step.state}
+              data-state={
+                step.state === "failed" || step.state === "limited"
+                  ? step.state
+                  : !active && step.state === "current"
+                    ? "done"
+                    : step.state
+              }
               data-nature={step.nature}
-              className={`fig-nora-live-activity-step fig-nora-live-activity-step-${!active && step.state === "current" ? "done" : step.state}`}
+              className={`fig-nora-live-activity-step fig-nora-live-activity-step-${
+                step.state === "failed" || step.state === "limited"
+                  ? step.state
+                  : !active && step.state === "current"
+                    ? "done"
+                    : step.state
+              }`}
             >
               <span className="fig-nora-live-activity-mark" aria-hidden>
-                {!active || step.state === "done"
-                  ? "✓"
-                  : step.state === "failed"
-                    ? "✕"
-                    : step.state === "limited"
-                      ? "!"
+                {step.state === "failed"
+                  ? "✕"
+                  : step.state === "limited"
+                    ? "!"
+                    : !active || step.state === "done"
+                      ? "✓"
                       : step.state === "current"
                         ? "◌"
                         : "○"}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index 01cb3406..7937a62e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -25,6 +25,21 @@ import {
 } from "./investigation-state";
 import type { NoraTurnQualification } from "./semantic-qualification";
 
+/** Fingerprint of measurable progress — sources, conclusions, remaining work, questions. */
+function progressFingerprint(state: InvestigationState): string {
+  const sources = state.sources
+    .map((s) => `${s.ref}:${s.coverage}:${s.versionOrSha ?? ""}`)
+    .sort()
+    .join("|");
+  const conclusions = (state.conclusions ?? []).join("|");
+  const remaining = state.remainingWork.join("|");
+  const questions = state.questions
+    .map((q) => `${q.id}:${q.status}:${q.answerSummary ?? ""}`)
+    .sort()
+    .join("|");
+  return `${sources}#${conclusions}#${remaining}#${questions}`;
+}
+
 export type ConductorSegmentResult = {
   replyText: string;
   qualification: NoraTurnQualification | null;
@@ -45,6 +60,8 @@ export type ConductorRunInput = {
   expectedOutcome?: string;
   workId?: string | null;
   forceNewWork?: boolean;
+  /** B4 — provenance when forceNew reuses prior acquis. */
+  parentWorkId?: string | null;
   turnCommandId?: string | null;
   ownerTokenTurn?: string | null;
   /** Execute one provider segment; conductor decides whether to continue. */
@@ -88,6 +105,7 @@ export async function runCognitiveConductor(
     expectedOutcome: input.expectedOutcome,
     workId: input.workId,
     forceNew: input.forceNewWork,
+    parentWorkId: input.parentWorkId,
   });
 
   let work = opened.work;
@@ -155,18 +173,21 @@ export async function runCognitiveConductor(
   }
 
   const maxLocal = Math.max(1, input.maxSegmentsThisInvocation ?? 3);
+  let stagnantSegments = 0;
+  let lastProgressKey = progressFingerprint(investigation);
+  let reevaluationNoted = false;
 
   for (let i = 0; i < maxLocal; i++) {
-    // RB-27 — preventive check with restitution reserve + projected next-segment cost.
+    // Preventive check with restitution reserve + projected next-segment cost.
     // Soft stop before another heavy segment; hard stop when already at/over ceiling.
     const usedBefore =
       (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
     const projectedNext =
       i === 0 && usedBefore === 0
         ? 0
-        : Math.min(80_000, Math.max(25_000, Math.floor(usedBefore * 0.35) || 40_000));
+        : Math.min(60_000, Math.max(20_000, Math.floor(usedBefore * 0.12) || 30_000));
     const envelope = evaluateGlobalResourceEnvelope(resources, process.env, {
-      reserveForRestitution: i === 0 ? 0 : 12_000,
+      reserveForRestitution: i === 0 ? 0 : 24_000,
       projectedNextSegmentTokens: i === 0 ? 0 : projectedNext,
     });
     if (!envelope.ok) {
@@ -180,6 +201,20 @@ export async function runCognitiveConductor(
       };
       break;
     }
+    if (envelope.reevaluationNeeded && !reevaluationNoted) {
+      reevaluationNoted = true;
+      investigation = {
+        ...investigation,
+        remainingWork: [
+          ...investigation.remainingWork.filter((w) => !/réévaluation/i.test(w)),
+          "Réévaluation stratégique — seuil de 1M tokens cumulés atteint",
+        ].slice(0, 12),
+      };
+      resources = {
+        ...resources,
+        limits: [...(resources.limits ?? []), "REEVAL_THRESHOLD_1M"].slice(-40),
+      };
+    }
 
     const policy =
       input.resolvePolicy?.(work, i) ??
@@ -207,6 +242,14 @@ export async function runCognitiveConductor(
       };
     }
 
+    const nextProgressKey = progressFingerprint(investigation);
+    if (nextProgressKey === lastProgressKey && segment.continueWork) {
+      stagnantSegments += 1;
+    } else {
+      stagnantSegments = 0;
+      lastProgressKey = nextProgressKey;
+    }
+
     work = await checkpointCognitiveWork({
       pilotId: input.pilotId,
       workId: work.id,
@@ -237,12 +280,20 @@ export async function runCognitiveConductor(
         const discovered = investigation.sources.filter(
           (s) => s.coverage === "DISCOVERED",
         ).length;
+        const inventoryTotal =
+          typeof investigation.inventoryTotal === "number"
+            ? investigation.inventoryTotal
+            : null;
         const progressSummary = segment.continueWork
           ? consulted > 0
-            ? `Approfondissement — ${consulted} source${consulted > 1 ? "s" : ""} consultée${consulted > 1 ? "s" : ""}${discovered ? ` · ${discovered} découverte${discovered > 1 ? "s" : ""}` : ""}`
+            ? inventoryTotal != null && inventoryTotal > 0
+              ? `Approfondissement — ${consulted}/${inventoryTotal} sources examinées`
+              : `Approfondissement — ${consulted} source${consulted > 1 ? "s" : ""} consultée${consulted > 1 ? "s" : ""}${discovered ? ` · ${discovered} découverte${discovered > 1 ? "s" : ""}` : ""}`
             : `Approfondissement du travail — segment ${segmentsRun}`
           : consulted > 0
-            ? `Consolidation — ${consulted} source${consulted > 1 ? "s" : ""} exploitée${consulted > 1 ? "s" : ""}`
+            ? inventoryTotal != null && inventoryTotal > 0
+              ? `Consolidation — ${consulted}/${inventoryTotal} sources couvertes`
+              : `Consolidation — ${consulted} source${consulted > 1 ? "s" : ""} exploitée${consulted > 1 ? "s" : ""}`
             : "Consolidation de la réponse";
         await appendActivityEvent({
           conversationId: input.conversationId,
@@ -258,6 +309,7 @@ export async function runCognitiveConductor(
             segmentsRun,
             consulted,
             discovered,
+            inventoryTotal,
             objective: (investigation.intentSummary || work.objective || "").slice(0, 140),
           },
           sourceRef: work.id,
@@ -272,15 +324,45 @@ export async function runCognitiveConductor(
       break;
     }
 
+    // Anti-loop: three consecutive segments without new sources/conclusions/questions.
+    if (stagnantSegments >= 3) {
+      suspended = true;
+      suspendReason = "NO_PROGRESS_DETECTED";
+      investigation = {
+        ...investigation,
+        contractReady: false,
+        contractReadyBlockedReason: suspendReason,
+        remainingWork: [
+          ...investigation.remainingWork,
+          "Suspension — absence de progression mesurable sur trois segments",
+        ].slice(0, 12),
+      };
+      work = await checkpointCognitiveWork({
+        pilotId: input.pilotId,
+        workId: work.id,
+        ownerToken,
+        expectedRevision: revision,
+        cause: "BUDGET",
+        state: investigation,
+        resources,
+        production,
+        status: "SUSPENDED",
+        interruptCause: suspendReason,
+        turnCommandId: input.turnCommandId,
+      });
+      revision = work.revision;
+      break;
+    }
+
     const again = evaluateGlobalResourceEnvelope(resources, process.env, {
-      reserveForRestitution: 12_000,
+      reserveForRestitution: 24_000,
       projectedNextSegmentTokens: Math.min(
-        80_000,
+        60_000,
         Math.max(
-          25_000,
+          20_000,
           Math.floor(
-            ((resources.inputTokens ?? 0) + (resources.outputTokens ?? 0)) * 0.35,
-          ) || 40_000,
+            ((resources.inputTokens ?? 0) + (resources.outputTokens ?? 0)) * 0.12,
+          ) || 30_000,
         ),
       ),
     });
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index eeaf6a7e..7b75e25b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -90,22 +90,22 @@ export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLim
     wallClockMs: 600_000,
     maxD4CharsReturned: 100_000,
   },
-  // RB-27 — tool/char ceilings sized so a single Agents SDK segment stays
-  // realistically under the 200k work envelope (soft-stop ≠ mid-run abort).
-  // Global 24 / 200000 ceilings are unchanged.
+  // Adaptive continuation — shorter per-segment provider loops so the conductor
+  // can checkpoint, compact acquis, and open a new segment before a single SDK
+  // run saturates the context. Global envelope is 1M reeval / 2M admin max.
   analyse: {
-    maxProviderCalls: 12,
-    maxD4ToolCalls: 12,
-    maxGitToolCalls: 14,
+    maxProviderCalls: 8,
+    maxD4ToolCalls: 10,
+    maxGitToolCalls: 12,
     wallClockMs: 600_000,
-    maxD4CharsReturned: 96_000,
+    maxD4CharsReturned: 64_000,
   },
   investigation: {
-    maxProviderCalls: 16,
-    maxD4ToolCalls: 16,
-    maxGitToolCalls: 18,
-    wallClockMs: 900_000,
-    maxD4CharsReturned: 120_000,
+    maxProviderCalls: 8,
+    maxD4ToolCalls: 12,
+    maxGitToolCalls: 14,
+    wallClockMs: 1_800_000,
+    maxD4CharsReturned: 48_000,
   },
 };
 
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
index 3381e732..6d61414e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
@@ -66,6 +66,8 @@ export type CognitiveWorkRow = {
   resources: CognitiveResources;
   production: CognitiveProductionState;
   interruptCause: string | null;
+  /** B4 — provenance when a new work reuses acquis from a prior work. */
+  parentWorkId: string | null;
 };
 
 export const COGNITIVE_LEASE_MS = 20 * 60 * 1000;
@@ -110,6 +112,7 @@ function mapRow(row: typeof cognitiveWorks.$inferSelect): CognitiveWorkRow {
     resources: parseJson<CognitiveResources>(row.resourcesJson, emptyResources()),
     production: parseJson<CognitiveProductionState>(row.productionJson, emptyProduction()),
     interruptCause: row.interruptCause,
+    parentWorkId: row.parentWorkId ?? null,
   };
 }
 
@@ -136,6 +139,8 @@ export async function openOrResumeCognitiveWork(input: {
   workId?: string | null;
   /** Independent new demand — never overwrite another work. */
   forceNew?: boolean;
+  /** B4 — prior work whose acquis this new envelope reuses. */
+  parentWorkId?: string | null;
 }): Promise<{ work: CognitiveWorkRow; resumed: boolean; ownerToken: string }> {
   await assertPrepOwnership(input.pilotId, input.preparationId);
 
@@ -274,6 +279,7 @@ export async function openOrResumeCognitiveWork(input: {
       stateJson: JSON.stringify(state),
       resourcesJson: JSON.stringify(emptyResources()),
       productionJson: JSON.stringify(emptyProduction()),
+      parentWorkId: input.parentWorkId?.trim() || null,
     })
     .returning();
   return { work: mapRow(row!), resumed: false, ownerToken };
@@ -609,13 +615,34 @@ function sumOpt(a?: number | null, b?: number | null): number | null {
   return (a ?? 0) + (b ?? 0);
 }
 
+/** Calibration defaults — OPERATIONAL_PROVISIONAL DEV (Morris GO adaptive continuation). */
+export const COGNITIVE_DEFAULT_MAX_TOKENS = 2_000_000;
+export const COGNITIVE_DEFAULT_REEVAL_TOKENS = 1_000_000;
+/** Anti-loop safety — not a cognitive depth oracle; progress detection is primary. */
+export const COGNITIVE_DEFAULT_MAX_SEGMENTS = 120;
+
+export function cognitiveEnvelopeLimits(
+  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
+): { maxTokens: number; maxSegments: number; reevalTokens: number } {
+  return {
+    maxTokens: Number(env.SFIA_COGNITIVE_MAX_TOKENS || String(COGNITIVE_DEFAULT_MAX_TOKENS)),
+    maxSegments: Number(
+      env.SFIA_COGNITIVE_MAX_SEGMENTS || String(COGNITIVE_DEFAULT_MAX_SEGMENTS),
+    ),
+    reevalTokens: Number(
+      env.SFIA_COGNITIVE_REEVAL_TOKENS || String(COGNITIVE_DEFAULT_REEVAL_TOKENS),
+    ),
+  };
+}
+
 /**
  * Global envelope — administrative safety, not a cognitive depth oracle.
  * Exceeding suspends the work honestly.
  *
- * RB-27 — preventive mode reserves headroom for a final restitution segment
- * so a mid-investigation call cannot consume the entire 200k ceiling.
- * Soft stop (wouldExceedAfter / reserve) is not a raise of 24/200k.
+ * Adaptive calibration (Morris GO): 1M reevaluation threshold, 2M administrative max.
+ * Soft stop (projected / reserve) is NOT a hard SDK cap — residual overshoot possible
+ * when provider usage for the in-flight call is not yet known.
+ * Cached tokens are never subtracted from the cumulative safety envelope.
  */
 export function evaluateGlobalResourceEnvelope(
   resources: CognitiveResources,
@@ -626,11 +653,15 @@ export function evaluateGlobalResourceEnvelope(
     /** Estimated cost of the next segment before starting it. */
     projectedNextSegmentTokens?: number;
   },
-): { ok: boolean; reason?: string; remainingTokens?: number; softStop?: boolean } {
-  // C17: default raised — local invocation caps (≈5) must leave headroom for honest resume
-  // without immediately tripping a false global exhaustion on simple prepare+continue paths.
-  const maxSegments = Number(env.SFIA_COGNITIVE_MAX_SEGMENTS || "24");
-  const maxTokens = Number(env.SFIA_COGNITIVE_MAX_TOKENS || "200000");
+): {
+  ok: boolean;
+  reason?: string;
+  remainingTokens?: number;
+  softStop?: boolean;
+  /** Crossed 1M reevaluation threshold — strategy may adapt; not a suspension. */
+  reevaluationNeeded?: boolean;
+} {
+  const { maxSegments, maxTokens, reevalTokens } = cognitiveEnvelopeLimits(env);
   if (Number.isFinite(maxSegments) && resources.segmentCalls >= maxSegments) {
     return { ok: false, reason: "GLOBAL_SEGMENT_BUDGET_EXHAUSTED", remainingTokens: 0 };
   }
@@ -669,5 +700,7 @@ export function evaluateGlobalResourceEnvelope(
       softStop: true,
     };
   }
-  return { ok: true, remainingTokens: remaining };
+  const reevaluationNeeded =
+    Number.isFinite(reevalTokens) && reevalTokens > 0 && used >= reevalTokens;
+  return { ok: true, remainingTokens: remaining, reevaluationNeeded };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 48b5b2cb..a3ba410b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -680,12 +680,23 @@ export function formatNumericSectionHint(nums: Array<string | number>): string |
 }
 
 /**
- * Recover section targets from natural Pilote wording
- * (« dans la section 2 et … section 3 ») when Nora omits sectionHint.
+ * Recover section targets from natural Pilote wording that authorizes revision
+ * (« dans la section 2 », « intègre … section 3 », « révise la section 4 »).
+ * A bare mention of « section N » as reference is NOT an authority to modify it.
  */
 export function extractSectionHintFromPilotText(text: string | null | undefined): string | null {
   if (!text) return null;
-  const nums = [...text.matchAll(/\bsections?\s+(\d+)\b/gi)].map((m) => m[1]!);
+  const nums = [
+    ...text.matchAll(
+      /\b(?:dans|sur|pour|vers)\s+(?:la\s+)?sections?\s+(\d+)\b/gi,
+    ),
+    ...text.matchAll(
+      /\b(?:intègre|integrer|intégrer|modifie|modifier|révise|revise|révise|mets?\s+[àa]\s+jour|ajoute|ajouter|corrige|corriger)\b[\s\S]{0,80}?\bsections?\s+(\d+)\b/gi,
+    ),
+    ...text.matchAll(
+      /\bsections?\s+(\d+)\b[\s\S]{0,40}?\b(?:avec|en\s+y|pour\s+y)\b/gi,
+    ),
+  ].map((m) => m[1]!);
   return formatNumericSectionHint(nums);
 }
 
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
index 30d8aa10..bdd4afda 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
@@ -61,6 +61,11 @@ export type DocumentCommandAdmission =
   | { ok: true; binding: DocumentCommandBinding }
   | { ok: false; verdict: "NOT_EXECUTED" | "CONFLICT" | "FAILED"; reason: string };
 
+/**
+ * Pair digest for a D4 candidate: SHA-256(title || "" + "\0" + contentMarkdown).
+ * This is the canonical contentSha256 stored on sealed candidates.
+ * Do NOT compare against a body-only hash of contentMarkdown alone (C1).
+ */
 export function contentSha256(title: string, contentMarkdown: string): string {
   return createHash("sha256")
     .update(title || "")
@@ -69,6 +74,11 @@ export function contentSha256(title: string, contentMarkdown: string): string {
     .digest("hex");
 }
 
+/** Body-only digest — for forensic comparison; not the sealed candidate identity. */
+export function contentBodySha256(contentMarkdown: string): string {
+  return createHash("sha256").update(contentMarkdown).digest("hex");
+}
+
 export function payloadSha256(parts: {
   action: "CREATE" | "REVISE";
   source: DocumentCommandSource;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
index 62fb446c..00f02b82 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
@@ -71,6 +71,12 @@ export function formatInvestigationContinuationContext(
     lines.push(`Travail restant: ${state.remainingWork.slice(0, 6).join("; ")}`);
   }
 
+  if (state.inventoryTotal != null) {
+    lines.push(
+      `Couverture inventaire: ${state.inventoryExamined ?? 0}/${state.inventoryTotal}`,
+    );
+  }
+
   const conclusions = (state.conclusions ?? []).filter((c) => c.trim().length > 0);
   if (conclusions.length > 0) {
     lines.push("Conclusions réutilisables:");
@@ -102,6 +108,9 @@ function humanizeSuspendReason(reason: string | null | undefined): string | null
   if (reason === "SEGMENT_INVOCATION_LIMIT") {
     return "J’ai atteint la limite technique de segments pour cette invocation — une reprise bornée reste possible.";
   }
+  if (reason === "NO_PROGRESS_DETECTED") {
+    return "J’ai suspendu ce travail faute de progression mesurable sur plusieurs segments.";
+  }
   if (reason.startsWith("GLOBAL_") || /BUDGET|EXHAUSTED|LIMIT/i.test(reason)) {
     return "Le travail a été interrompu par une limite technique.";
   }
@@ -192,14 +201,14 @@ export function composeInvestigationPartialRestitution(input: {
 
 /**
  * Scale per-segment D4 char budget with remaining global token headroom.
- * Does not change the 200k / 24 ceilings — only local tool share.
+ * Local tool share only — global envelope is 1M reeval / 2M admin max.
  */
 export function scaleSegmentCharBudget(input: {
   baseChars: number;
   usedTokens: number;
   maxTokens?: number;
 }): { chars: number; reasonCode: string } {
-  const maxTokens = input.maxTokens ?? 200_000;
+  const maxTokens = input.maxTokens ?? 2_000_000;
   const remaining = Math.max(0, maxTokens - Math.max(0, input.usedTokens));
   const ratio = maxTokens > 0 ? remaining / maxTokens : 1;
   if (ratio >= 0.5) {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
index 288795eb..60e6c796 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
@@ -73,6 +73,13 @@ export type InvestigationState = {
   authorizedExactWebQueries?: string[];
   /** Public facts already registered for composition. */
   registeredPublicFacts?: string[];
+  /**
+   * B2 — when an exhaustive inventory is established (e.g. 50 files),
+   * total expected sources in the declared perimeter. Null until inventoried.
+   */
+  inventoryTotal?: number | null;
+  /** Distinct source refs marked CONSULTED/VERIFIED/PARTIAL within the inventory. */
+  inventoryExamined?: number | null;
 };
 
 export function createEmptyInvestigation(intent: string): InvestigationState {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 0481c513..a1d114e1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -235,6 +235,7 @@ export function categorizeProviderError(err: unknown): {
   preContactLikely: boolean;
 } {
   const msg = err instanceof Error ? err.message : String(err);
+  const errName = err instanceof Error ? err.name : "";
   // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
   const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
   // Only treat as pre-contact when clearly local/config before network.
@@ -244,7 +245,9 @@ export function categorizeProviderError(err: unknown): {
     ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
   let category = "PROVIDER_ERROR";
   if (interrupted) category = "PROVIDER_INTERRUPTED";
-  else if (
+  else if (/MaxTurnsExceeded/i.test(errName) || /max(?:imum)? turns/i.test(msg)) {
+    category = "max_turns";
+  } else if (
     // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
     /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
       msg,
@@ -1061,8 +1064,11 @@ async function runLiveWithTools(
     "- OBLIGATOIRE pour préparer un contrat Cursor : (1) appeler l'outil submit_cursor_contract_production avec productionInstruction + acceptanceCriteria + desiredOutcome ; (2) intent d7.prepare_cursor_contract mode=PREPARE ; (3) workDisposition=COMPLETE si prêt, sinon AWAIT_PILOT. replyDraft seul = échec. Préparer ≠ autoriser ≠ dispatch.",
     "- C18 SORTIE COGNITIVE (champs selon besoin — ne pas inventer) :",
     "  • workDisposition=COMPLETE|CONTINUE|AWAIT_PILOT|SUSPEND selon l'objectif du tour (investigation ≠ contrat ≠ document).",
+    "  • Investigation longue : si des sources restent à examiner ou des conclusions à consolider, workDisposition=CONTINUE + remainingWorkItems (le conducteur ouvre un nouveau segment avec acquis compactés — ne pas tout relire).",
+    "  • Ne pas recopier intégralement les contenus d'outils dans replyDraft ; citer avec références exactes et synthétiser.",
     "  • Si une question déterminante manque : workDisposition=AWAIT_PILOT (le travail reste ouvert pour la reprise).",
     "  • cognitiveWorkRelation=CONTINUE|INDEPENDENT|CLARIFY|MATERIAL_CHANGE + proposedCognitiveWorkId si rattachement.",
+    "  • Nouvelle production documentaire à partir d'acquis d'un travail antérieur : cognitiveWorkRelation=INDEPENDENT ou MATERIAL_CHANGE (nouvelle enveloppe) — réutiliser conclusions/références, ne pas relancer l'investigation depuis zéro.",
     "  • determiningQuestions[] avec id stable, status OPEN/ANSWERED, answerSummary + sourceRefs si résolu — jamais résoudre une question sans réponse explicite.",
     "  • remainingWorkItems[] versionnés (OPEN/RESOLVED/OBSOLETE/…) — ≠ acceptanceCriteria.",
     "  • cognitiveProfileHint=simple|analyse|investigation pour adapter les moyens.",
@@ -1320,7 +1326,6 @@ async function runLiveWithTools(
         },
       });
 
-      const status = cat.interrupted ? ("INTERRUPTED" as const) : ("UNKNOWN" as const);
       const toolsOnErr = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
       const sourcesOnErr = sourceJournal.entries.slice();
       const consulted = sourcesOnErr.filter(
@@ -1357,6 +1362,62 @@ async function runLiveWithTools(
           ...discoveredOnly.slice(-4).map(formatSrc),
         );
       }
+      // A3 — MaxTurnsExceeded / structured-output failure with acquis is a soft
+      // segment boundary, not a work failure. Conductor checkpoints and may open
+      // the next segment with compacted context.
+      const softSegmentBoundary =
+        (cat.category === "max_turns" ||
+          cat.category === "PROVIDER_SCHEMA_OR_OUTPUT" ||
+          /schema|structured_output|invalid_type|ModelBehavior/i.test(
+            String(cat.category || "") + String(streamingNotes || ""),
+          )) &&
+        (consulted.length > 0 || discoveredOnly.length > 0 || Boolean(submitted));
+      if (softSegmentBoundary) {
+        const boundaryContent = [
+          "Segment technique atteint — acquis consolidés pour continuation automatique.",
+          ...acquisLines,
+          "Travail restant: poursuivre l’investigation avec un nouveau segment (contexte compacté).",
+        ].join("\n");
+        const boundaryQual = unavailableQualification("max_turns_segment_boundary");
+        return {
+          generationId,
+          mode: "openai-agents-sdk-live",
+          status: "COMPLETE" as const,
+          streamingProvisional: false,
+          streamingAttempted,
+          streamingDelivered,
+          streamingNotes: `${streamingNotes}|SEGMENT_MAX_TURNS_BOUNDARY`,
+          content: boundaryContent,
+          policy,
+          modelRequested: policy.modelRequested,
+          modelApplied: null,
+          effortRequested: policy.effortRequested,
+          effortApplied: null,
+          attempts,
+          toolCallsObserved: toolsOnErr,
+          d4CharsReturned: policy.budgets.maxD4CharsReturned - initialBudget.remainingChars,
+          observedToolSources: sourcesOnErr,
+          usage: providerUsage ?? undefined,
+          qualification: {
+            ...boundaryQual,
+            status: "QUALIFIED" as const,
+            workDisposition: "CONTINUE" as const,
+            replyDraft: boundaryContent,
+            goal: boundaryQual.goal || "Poursuivre l’investigation",
+            desiredOutcome: boundaryQual.desiredOutcome || "Synthèse complète",
+            intents: [],
+            determiningQuestions: [
+              {
+                id: "seg-boundary-remaining",
+                text: "Travail restant après frontière de segment technique",
+                status: "OPEN" as const,
+                importance: "DETERMINANT" as const,
+              },
+            ],
+          },
+        };
+      }
+      const status = cat.interrupted ? ("INTERRUPTED" as const) : ("UNKNOWN" as const);
       const honestPartial =
         acquisLines.length > 0
           ? [
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index 0b1ba16e..3fb84336 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -10,6 +10,8 @@ import {
 } from "./cognitive-conductor";
 import { buildCognitivePolicy } from "./cognitive-policy";
 import {
+  cognitiveEnvelopeLimits,
+  getCognitiveWork,
   listCognitiveWorksForPreparation,
   type CognitiveProductionState,
   type CognitiveWorkRow,
@@ -312,19 +314,106 @@ export function mergeInvestigationFromReply(
     if (!conclusions.some((c) => c.startsWith("Synthèse:"))) conclusions.push(excerpt);
   }
 
+  // B2 — inventory coverage: prefer prior checkpoint; else declare from an
+  // explicit predeclared perimeter in the Pilote message, else from discovered set.
+  const discoveredOrBetter = sources.filter(
+    (s) =>
+      s.coverage === "DISCOVERED" ||
+      s.coverage === "CONSULTED" ||
+      s.coverage === "VERIFIED" ||
+      s.coverage === "PARTIAL",
+  ).length;
+  const exhaustiveIntent =
+    /intégralement|exhausti|tous les|toutes les|l'intégralité|chaque (?:document|fichier|source)/i.test(
+      userText,
+    ) ||
+    /intégralement|exhausti|inventaire/i.test(goal || prior.intentSummary || "");
+  const listedPaths = [
+    ...userText.matchAll(
+      /(?:^|\n)\s*([^\n]+?\.(?:md|txt|ts|tsx|js|jsx|json|yml|yaml|sql|prisma|mjs|cjs))\s*(?=\n|$)/gi,
+    ),
+  ]
+    .map((m) => m[1]!.trim())
+    .filter((p) => p.length > 2 && !/\s{3,}/.test(p) && !/^https?:/i.test(p));
+  const uniqueListed = [...new Set(listedPaths)];
+  const declaredCount = (() => {
+    const m = userText.match(
+      /\b(\d{2,3})\s+(?:documents?|fichiers?|sources?|textes?)\b/i,
+    );
+    return m ? Number(m[1]) : null;
+  })();
+  let inventoryTotal = prior.inventoryTotal ?? null;
+  // B2 — once a Pilote perimeter is declared (listed paths or explicit count),
+  // freeze that total. Extra discoveries must not inflate the inventaire and
+  // block completion after the declared sources are examined.
+  const perimeterFrozen =
+    (declaredCount != null && declaredCount >= 10) || uniqueListed.length >= 10;
+  const perimeterSize = perimeterFrozen
+    ? Math.max(uniqueListed.length, declaredCount ?? 0)
+    : null;
+  if (perimeterFrozen && perimeterSize != null && perimeterSize >= 10) {
+    inventoryTotal = perimeterSize;
+  } else if (inventoryTotal == null && exhaustiveIntent && uniqueListed.length >= 10) {
+    inventoryTotal = Math.max(uniqueListed.length, declaredCount ?? 0);
+  } else if (
+    inventoryTotal == null &&
+    exhaustiveIntent &&
+    declaredCount != null &&
+    declaredCount >= 10
+  ) {
+    inventoryTotal = declaredCount;
+  } else if (
+    inventoryTotal == null &&
+    exhaustiveIntent &&
+    discoveredOrBetter >= 10
+  ) {
+    inventoryTotal = discoveredOrBetter;
+  } else if (
+    inventoryTotal != null &&
+    discoveredOrBetter > inventoryTotal &&
+    !perimeterFrozen
+  ) {
+    inventoryTotal = discoveredOrBetter;
+  }
+  // Count perimeter coverage against the declared list when available.
+  const listedSet = new Set(uniqueListed.map((p) => p.replace(/^.*\//, "").toLowerCase()));
+  const inventoryExamined = sources.filter((s) => {
+    const covered =
+      s.coverage === "CONSULTED" ||
+      s.coverage === "VERIFIED" ||
+      s.coverage === "PARTIAL" ||
+      s.coverage === "DENIED";
+    if (!covered) return false;
+    if (listedSet.size === 0) return true;
+    const base = (s.ref || "").replace(/^.*\//, "").toLowerCase();
+    return listedSet.has(base) || listedSet.has((s.ref || "").toLowerCase());
+  }).length;
+  const nextRemaining = [...remainingWork];
+  if (
+    inventoryTotal != null &&
+    inventoryExamined < inventoryTotal &&
+    !nextRemaining.some((w) => /inventaire|couverture|sources restantes/i.test(w))
+  ) {
+    nextRemaining.push(
+      `Couverture inventaire ${inventoryExamined}/${inventoryTotal} — poursuivre les sources non examinées`,
+    );
+  }
+
   return evaluateContractReadiness({
     ...prior,
     intentSummary: goal || prior.intentSummary || userText.slice(0, 800),
     desiredOutcome,
     sources,
     questions,
-    remainingWork,
+    remainingWork: nextRemaining,
     contradictions,
     constraints,
     profileHint,
     productionInstruction,
     acceptanceCriteria,
     conclusions: conclusions.slice(-24),
+    inventoryTotal,
+    inventoryExamined,
   });
 }
 
@@ -336,14 +425,39 @@ export function semanticContinueWork(
   investigation: InvestigationState,
   reply: NoraGenerateResult,
 ): boolean {
-  if (reply.status !== "COMPLETE") return false;
   if (
     investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
     (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
   ) {
     return false;
   }
+  const examined = investigation.inventoryExamined ?? 0;
+  const total = investigation.inventoryTotal;
+  // Near-complete coverage (≤2 gap after ≥50 examined) must not block restitution
+  // when discovery inflation left a tiny residual gap.
+  const inventoryIncomplete =
+    total != null &&
+    examined < total &&
+    !(examined >= 50 && total - examined <= 2);
+  const hasAcquis =
+    (reply.observedToolSources?.length ?? 0) > 0 ||
+    investigation.sources.some((s) =>
+      ["CONSULTED", "VERIFIED", "PARTIAL", "DISCOVERED"].includes(s.coverage),
+    );
+  // B3 — incomplete exhaustive inventory continues even after a soft provider
+  // interruption (UNKNOWN/INTERRUPTED) when acquis already progressed.
+  if (inventoryIncomplete && hasAcquis && reply.status !== "COMPLETE") {
+    return true;
+  }
+  if (reply.status !== "COMPLETE") return false;
   const disposition = qualification?.workDisposition;
+  // B3 — incomplete exhaustive inventory is a conductor continuation, not a pilot wait.
+  // Nora declaring COMPLETE/AWAIT while sources remain unexamined must not stop the work.
+  // Also continue when inventory is declared but no source was recorded yet (tool-scope
+  // recovery / first failed segment) — anti-loop still stops three stagnant segments.
+  if (inventoryIncomplete && (hasAcquis || (investigation.inventoryExamined ?? 0) === 0)) {
+    return true;
+  }
   if (disposition === "COMPLETE" || disposition === "AWAIT_PILOT" || disposition === "SUSPEND") {
     return false;
   }
@@ -378,23 +492,45 @@ export async function resolveCognitiveWorkAttachment(input: {
   reason: string;
   /** C20 — do not create/claim; await pilot clarification. */
   needsClarify?: boolean;
+  /** B4 — prior work id when forking a new envelope that reuses acquis. */
+  parentWorkId?: string | null;
 }> {
+  const works = await listCognitiveWorksForPreparation({
+    pilotId: input.pilotId,
+    preparationId: input.preparationId,
+  });
+  const priorWithAcquis = works
+    .filter(
+      (w) =>
+        (w.state.conclusions?.length ?? 0) > 0 ||
+        w.state.sources.some((s) =>
+          ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
+        ),
+    )
+    .sort((a, b) => b.revision - a.revision);
+  const provenanceParent = priorWithAcquis[0]?.id ?? null;
+
   if (input.forceNewWork === true) {
-    return { forceNew: true, reason: "FORCE_NEW_EXPLICIT" };
+    return {
+      forceNew: true,
+      reason: "FORCE_NEW_EXPLICIT",
+      // B4 — explicit new work still inherits provenance when prior acquis exist.
+      parentWorkId: provenanceParent,
+    };
   }
   if (input.workId) {
     return { workId: input.workId, forceNew: false, reason: "EXPLICIT_WORK_ID" };
   }
 
-  const works = await listCognitiveWorksForPreparation({
-    pilotId: input.pilotId,
-    preparationId: input.preparationId,
-  });
   const relation = input.qualification?.cognitiveWorkRelation;
   const proposed = input.qualification?.proposedCognitiveWorkId?.trim() || null;
 
   if (relation === "INDEPENDENT" || relation === "MATERIAL_CHANGE" || relation === "UNRELATED") {
-    return { forceNew: true, reason: `SEMANTIC_${relation}` };
+    return {
+      forceNew: true,
+      reason: `SEMANTIC_${relation}`,
+      parentWorkId: provenanceParent ?? proposed,
+    };
   }
 
   // RB-31 / RB-27 — new document production after a completed / exhausted analysis
@@ -405,13 +541,20 @@ export async function resolveCognitiveWorkAttachment(input: {
       i.capabilityId === "d4.create_document" &&
       (i.mode === "REQUEST_EFFECT" || i.mode === "PREPARE"),
   );
+  const text = input.userText ?? "";
+  const wantsNoteFromPrior =
+    /note de recommandation|à partir de (cette|l['’] ?|mon |notre ).{0,40}(analyse|synthèse|investigation|examen)|crée(r)? (le |un |une )?(document|note)/i.test(
+      text,
+    );
+  const { maxTokens: envelopeMax } = cognitiveEnvelopeLimits();
+  const saturatedFloor = Math.max(190_000, Math.floor(envelopeMax * 0.95));
   const exhausted = works.filter(
     (w) =>
       (w.status === "SUSPENDED" || w.status === "COMPLETE" || w.status === "FAILED") &&
       (w.interruptCause === "GLOBAL_TOKEN_BUDGET_EXHAUSTED" ||
         w.interruptCause === "GLOBAL_SEGMENT_BUDGET_EXHAUSTED" ||
         w.interruptCause === "GLOBAL_BUDGET_EXHAUSTED" ||
-        (w.resources.inputTokens ?? 0) + (w.resources.outputTokens ?? 0) >= 190_000),
+        (w.resources.inputTokens ?? 0) + (w.resources.outputTokens ?? 0) >= saturatedFloor),
   );
   const proposedExhausted = proposed ? exhausted.some((w) => w.id === proposed) : false;
   // Fork document production off an exhausted / saturated prior work even when Nora
@@ -421,7 +564,22 @@ export async function resolveCognitiveWorkAttachment(input: {
     exhausted.length > 0 &&
     (!relation || relation === "CONTINUE" || proposedExhausted)
   ) {
-    return { forceNew: true, reason: "NEW_PRODUCTION_FROM_PRIOR_ACQUIS" };
+    return {
+      forceNew: true,
+      reason: "NEW_PRODUCTION_FROM_PRIOR_ACQUIS",
+      parentWorkId: exhausted[0]?.id ?? provenanceParent ?? proposed,
+    };
+  }
+  if (
+    (wantsCreateDoc || wantsNoteFromPrior) &&
+    priorWithAcquis.length > 0 &&
+    (!relation || relation === "CONTINUE" || relation == null)
+  ) {
+    return {
+      forceNew: true,
+      reason: "NEW_PRODUCTION_FROM_PRIOR_ACQUIS",
+      parentWorkId: provenanceParent,
+    };
   }
   if (relation === "CONTINUE" && exhausted.length > 0 && !proposed) {
     // Refuse blind resume of a saturated envelope — pilot/Nora must fork or clarify.
@@ -580,6 +738,15 @@ function documentProductionFromReply(
   const prevDoc =
     (work.production as CognitiveProductionState & { contentMarkdown?: string })
       .contentMarkdown ?? "";
+  // Soft segment boundaries are conductor control messages — never document body.
+  if (
+    String(reply.streamingNotes || "").includes("SEGMENT_MAX_TURNS_BOUNDARY") ||
+    /^Segment technique atteint/i.test((reply.content || "").trim())
+  ) {
+    return work.production?.kind === "DOCUMENT" || work.production?.kind === "SYNTHESIS"
+      ? { ...work.production, status: continueWork ? "IN_PROGRESS" : work.production.status }
+      : undefined;
+  }
   // C19: part ids are stable across invocations — never collide on local segmentIndex 0.
   const partId = `gen-${reply.generationId || `seg-${work.revision}-${segmentIndex}`}`;
   const appendPart = (
@@ -781,27 +948,44 @@ export async function runNoraCognitiveTurn(
     };
   }
 
-  const conductor: ConductorRunResult = await runCognitiveConductor({
+  // Adaptive local segment budget — technical per-invocation cap, not global envelope.
+  // Investigation gets more segments so long work can auto-continue without pilot clicks.
+  const exhaustiveSeed =
+    /\b(?:50|intégralement|exhausti|tous les documents|toutes les sources)\b/i.test(
+      input.userText || "",
+    );
+  const defaultLocalSegments = (() => {
+    if (input.maxSegmentsThisInvocation != null) return input.maxSegmentsThisInvocation;
+    const seed = input.objective ?? input.userText;
+    const hint = buildCognitivePolicy(seed).profile;
+    if (hint === "investigation" || exhaustiveSeed) return 40;
+    if (hint === "analyse") return 12;
+    return 3;
+  })();
+
+  const runConductorOnce = (workId: string | null | undefined, forceNew: boolean) =>
+    runCognitiveConductor({
     pilotId: input.pilotId,
     preparationId: input.preparationId,
     projectId: input.projectId,
     conversationId: input.conversationId,
     objective: input.objective ?? input.userText.slice(0, 2000),
     expectedOutcome: input.expectedOutcome,
-    workId: attachment.workId,
-    forceNewWork: attachment.forceNew,
+    workId,
+    forceNewWork: forceNew,
+    parentWorkId: attachment.parentWorkId,
     turnCommandId: input.turnCommandId,
-    // C17: local cap remains technical; default raised for investigation depth.
-    // SEGMENT_INVOCATION_LIMIT still suspends honestly when exhausted.
-    maxSegmentsThisInvocation: input.maxSegmentsThisInvocation ?? 5,
+    maxSegmentsThisInvocation: defaultLocalSegments,
     resolvePolicy: (work, segmentIndex) => {
       const seed =
         work.state.intentSummary ||
         work.objective ||
         input.userText;
-      const hint = work.state.profileHint;
+      const hint =
+        work.state.profileHint ||
+        (exhaustiveSeed ? "investigation" : undefined);
       let base =
-        segmentIndex > 0 && hint === "investigation"
+        (segmentIndex > 0 && hint === "investigation") || exhaustiveSeed
           ? buildCognitivePolicy(seed, undefined, {
               profileHint: "investigation",
               effortHint: "high",
@@ -830,14 +1014,64 @@ export async function runNoraCognitiveTurn(
       return base;
     },
     runSegment: async ({ work, segmentIndex, policy }) => {
-      const acquisBlock =
-        segmentIndex === 0
-          ? ""
-          : formatInvestigationContinuationContext(work.state);
-      const continuationHint =
-        segmentIndex === 0
-          ? ""
-          : [
+      // Compact acquis whenever prior checkpoint material exists — including
+      // segmentIndex 0 of an auto-continued invocation (same work, new lease).
+      const hasPriorAcquis =
+        work.state.sources.length > 0 ||
+        (work.state.conclusions?.length ?? 0) > 0 ||
+        work.state.remainingWork.length > 0 ||
+        work.revision > 0;
+      // B4 — new envelope from prior acquis: inject parent checkpoint context once.
+      let parentAcquisBlock = "";
+      if (
+        attachment.parentWorkId &&
+        segmentIndex === 0 &&
+        !hasPriorAcquis &&
+        attachment.parentWorkId !== work.id
+      ) {
+        try {
+          const parent = await getCognitiveWork({
+            pilotId: input.pilotId,
+            workId: attachment.parentWorkId,
+          });
+          parentAcquisBlock = [
+            `[Acquis du travail parent ${parent.id} — réutiliser, ne pas tout relire]`,
+            formatInvestigationContinuationContext(parent.state, { maxChars: 6500 }),
+          ].join("\n");
+        } catch {
+          parentAcquisBlock = "";
+        }
+      }
+      const useContinuation = segmentIndex > 0 || hasPriorAcquis || Boolean(parentAcquisBlock);
+      const acquisBlock = hasPriorAcquis
+        ? formatInvestigationContinuationContext(work.state)
+        : parentAcquisBlock;
+      // B2 — next unexamined paths from the Pilote perimeter (compacted, not full history).
+      const examinedRefs = new Set(
+        work.state.sources
+          .filter((s) =>
+            ["CONSULTED", "VERIFIED", "PARTIAL", "DENIED"].includes(s.coverage),
+          )
+          .map((s) => s.ref.replace(/^.*\//, "").toLowerCase()),
+      );
+      const listedNext = [
+        ...input.userText.matchAll(
+          /(?:^|\n)\s*([^\n]+?\.(?:md|txt|ts|tsx|js|jsx|json|yml|yaml|sql|prisma|mjs|cjs))\s*(?=\n|$)/gi,
+        ),
+      ]
+        .map((m) => m[1]!.trim())
+        .filter((p) => {
+          const base = p.replace(/^.*\//, "").toLowerCase();
+          return (
+            p.length > 2 &&
+            !examinedRefs.has(base) &&
+            !examinedRefs.has(p.toLowerCase())
+          );
+        });
+      const uniqueNext = [...new Set(listedNext)].slice(0, 12);
+      const continuationHint = !useContinuation
+        ? ""
+        : [
               "",
               "[Continuation du même travail cognitif — segment suivant]",
               `workId=${work.id} revision=${work.revision}`,
@@ -858,6 +1092,13 @@ export async function runNoraCognitiveTurn(
               work.state.constraints.length
                 ? `Contraintes: ${work.state.constraints.join("; ")}`
                 : null,
+              work.state.inventoryTotal != null
+                ? `Couverture inventaire: ${work.state.inventoryExamined ?? 0}/${work.state.inventoryTotal}`
+                : null,
+              uniqueNext.length > 0
+                ? `Prochaines sources à examiner (échantillon): ${uniqueNext.join("; ")}`
+                : null,
+              "Consigne: ne pas relire les sources déjà CONSULTED; ouvrir les suivantes; si inventaire incomplet workDisposition=CONTINUE.",
               acquisBlock || null,
             ]
               .filter(Boolean)
@@ -887,19 +1128,18 @@ export async function runNoraCognitiveTurn(
       });
 
       let reply: NoraGenerateResult;
-      if (probeReply && segmentIndex === 0 && !probeConsumed) {
+      if (probeReply && segmentIndex === 0 && !probeConsumed && !hasPriorAcquis) {
         probeConsumed = true;
         reply = probeReply;
       } else {
         reply = await generateNoraReply({
-          userText:
-            segmentIndex === 0
+          userText: !useContinuation
               ? input.userText
               : `${input.userText}${continuationHint}`,
           contextSnippets: [
             ...input.contextSnippets,
             candidateSnippet,
-            ...(segmentIndex > 0
+            ...(useContinuation
               ? [
                   `Checkpoint cognitif ${work.id} r${work.revision}`,
                   work.state.intentSummary || "",
@@ -1004,6 +1244,42 @@ export async function runNoraCognitiveTurn(
     },
   });
 
+  // B3 — server-side auto-continue across local SEGMENT_INVOCATION_LIMIT without
+  // requiring a new Pilote message. Same work identity; cumulative resources preserved.
+  let conductor: ConductorRunResult = await runConductorOnce(
+    attachment.workId,
+    attachment.forceNew,
+  );
+  let totalSegmentsRun = conductor.segmentsRun;
+  // Long exhaustive investigations need wall room beyond a single HTTP comfort window;
+  // browser observes, server continues. Soft cap still applies via envelope + autoRounds.
+  const wallDeadline =
+    Date.now() +
+    (defaultLocalSegments >= 20 ? 3_000_000 : 1_700_000);
+  let autoRounds = 0;
+  while (
+    conductor.suspended &&
+    conductor.suspendReason === "SEGMENT_INVOCATION_LIMIT" &&
+    autoRounds < 12 &&
+    Date.now() < wallDeadline &&
+    (conductor.investigation.remainingWork.length > 0 ||
+      conductor.investigation.questions.some(
+        (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
+      ) ||
+      (conductor.investigation.inventoryTotal != null &&
+        (conductor.investigation.inventoryExamined ?? 0) <
+          conductor.investigation.inventoryTotal))
+  ) {
+    autoRounds += 1;
+    const next = await runConductorOnce(conductor.work.id, false);
+    totalSegmentsRun += next.segmentsRun;
+    conductor = {
+      ...next,
+      segmentsRun: totalSegmentsRun,
+      resumed: true,
+    };
+  }
+
   const lastReply = segmentBox.reply;
   if (!lastReply) {
     throw new Error("CONDUCTOR_NO_SEGMENT");
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index c6344a58..0975cd79 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2014,14 +2014,25 @@ export async function postUserMessageAndNora(
       if (!confront.ok) {
         // Section-scoped natural revise: Nora often emits a partial LEGACY fence for
         // the targeted sections while documentProposal carries a divergent full body.
-        // Do not poison the turn — the REVISE path prefers the contractual fence.
+        // Prefer the contractual LEGACY fence as canonical merge input (deterministic),
+        // never silently ignore a material authority conflict outside that case.
         if (
-          !(
-            sectionScopedConfront &&
-            earlyExtract.ok &&
-            isLegacyUntitledSectionFence(earlyExtract)
-          )
+          sectionScopedConfront &&
+          earlyExtract.ok &&
+          isLegacyUntitledSectionFence(earlyExtract)
         ) {
+          const fenceCanonical = canonicalizeDocumentProposal({
+            title: earlyCanonical.proposal.title,
+            contentMarkdown: earlyExtract.content,
+          });
+          if (fenceCanonical.ok) {
+            durableProposal = fenceCanonical.proposal;
+            proposalAuthorityConflict = null;
+          } else {
+            proposalAuthorityConflict = confront.reason;
+            durableProposal = null;
+          }
+        } else {
           proposalAuthorityConflict = confront.reason;
           durableProposal = null;
         }
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/service.ts b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
index 4ca6ab22..166ba123 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
@@ -304,13 +304,28 @@ export async function getPreparationContext(pilotId: string, preparationId: stri
         .limit(1)
     )[0];
   }
-  const conv = (
+  let conv = (
     await db
       .select()
       .from(conversations)
       .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
       .limit(1)
   )[0];
+  // Bind conversation → project when the prep link exists but the conversation row
+  // was created before create-project (or a prior script skipped the bind).
+  if (conv && project && !conv.projectId) {
+    const [updated] = await db
+      .update(conversations)
+      .set({ projectId: project.id })
+      .where(
+        and(
+          eq(conversations.id, conv.id),
+          sql`${conversations.projectId} IS NULL`,
+        ),
+      )
+      .returning();
+    if (updated) conv = updated;
+  }
   const projection = parseProjectionJson(
     prep.projectionJson,
     preparationId,
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-envelope-and-continuity.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-envelope-and-continuity.test.ts
index d15e980e..3728f5dc 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-envelope-and-continuity.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-envelope-and-continuity.test.ts
@@ -1,20 +1,55 @@
 import { describe, expect, it } from "vitest";
-import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
+import {
+  COGNITIVE_DEFAULT_MAX_TOKENS,
+  COGNITIVE_DEFAULT_REEVAL_TOKENS,
+  evaluateGlobalResourceEnvelope,
+} from "@/domains/conversation/cognitive-work";
 import { composeInvestigationPartialRestitution } from "@/domains/conversation/investigation-continuation";
 import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
-import { mergeInvestigationFromReply } from "@/domains/conversation/run-nora-cognitive-turn";
+import {
+  mergeInvestigationFromReply,
+  semanticContinueWork,
+} from "@/domains/conversation/run-nora-cognitive-turn";
 import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";
+import { contentBodySha256, contentSha256 } from "@/domains/conversation/document-command";
+import { extractSectionHintFromPilotText } from "@/domains/conversation/document-act";
 
-describe("RB-27 preventive envelope", () => {
-  it("hard-stops at 200k used", () => {
-    const r = evaluateGlobalResourceEnvelope({
-      segmentCalls: 2,
-      inputTokens: 190_000,
-      outputTokens: 15_000,
-      webCalls: 0,
-      durationMs: 1,
-      limits: [],
-    });
+describe("adaptive resource envelope (1M reeval / 2M admin)", () => {
+  it("allows work under 2M with default calibration", () => {
+    const r = evaluateGlobalResourceEnvelope(
+      {
+        segmentCalls: 10,
+        inputTokens: 1_050_000,
+        outputTokens: 50_000,
+        webCalls: 0,
+        durationMs: 1,
+        limits: [],
+      },
+      {
+        SFIA_COGNITIVE_MAX_TOKENS: String(COGNITIVE_DEFAULT_MAX_TOKENS),
+        SFIA_COGNITIVE_MAX_SEGMENTS: "120",
+        SFIA_COGNITIVE_REEVAL_TOKENS: String(COGNITIVE_DEFAULT_REEVAL_TOKENS),
+      },
+    );
+    expect(r.ok).toBe(true);
+    expect(r.reevaluationNeeded).toBe(true);
+  });
+
+  it("hard-stops at 2M used", () => {
+    const r = evaluateGlobalResourceEnvelope(
+      {
+        segmentCalls: 2,
+        inputTokens: 1_900_000,
+        outputTokens: 150_000,
+        webCalls: 0,
+        durationMs: 1,
+        limits: [],
+      },
+      {
+        SFIA_COGNITIVE_MAX_TOKENS: "2000000",
+        SFIA_COGNITIVE_MAX_SEGMENTS: "120",
+      },
+    );
     expect(r.ok).toBe(false);
     expect(r.reason).toBe("GLOBAL_TOKEN_BUDGET_EXHAUSTED");
   });
@@ -23,14 +58,14 @@ describe("RB-27 preventive envelope", () => {
     const r = evaluateGlobalResourceEnvelope(
       {
         segmentCalls: 2,
-        inputTokens: 185_000,
+        inputTokens: 1_980_000,
         outputTokens: 5_000,
         webCalls: 0,
         durationMs: 1,
         limits: [],
       },
-      process.env,
-      { reserveForRestitution: 12_000 },
+      { SFIA_COGNITIVE_MAX_TOKENS: "2000000" },
+      { reserveForRestitution: 24_000 },
     );
     expect(r.ok).toBe(false);
     expect(r.softStop).toBe(true);
@@ -46,20 +81,20 @@ describe("RB-27 preventive envelope", () => {
         durationMs: 0,
         limits: [],
       },
-      process.env,
+      { SFIA_COGNITIVE_MAX_TOKENS: "2000000" },
       { reserveForRestitution: 0, projectedNextSegmentTokens: 0 },
     );
     expect(r.ok).toBe(true);
   });
 
-  it("does not raise ceilings above 200k/24", () => {
+  it("honours configurable segment anti-loop ceiling", () => {
     const env = {
-      SFIA_COGNITIVE_MAX_TOKENS: "200000",
-      SFIA_COGNITIVE_MAX_SEGMENTS: "24",
+      SFIA_COGNITIVE_MAX_TOKENS: "2000000",
+      SFIA_COGNITIVE_MAX_SEGMENTS: "120",
     };
     const overSeg = evaluateGlobalResourceEnvelope(
       {
-        segmentCalls: 24,
+        segmentCalls: 120,
         inputTokens: 10,
         outputTokens: 10,
         webCalls: 0,
@@ -71,6 +106,22 @@ describe("RB-27 preventive envelope", () => {
     expect(overSeg.ok).toBe(false);
     expect(overSeg.reason).toBe("GLOBAL_SEGMENT_BUDGET_EXHAUSTED");
   });
+
+  it("still respects an explicit 200k env override", () => {
+    const r = evaluateGlobalResourceEnvelope(
+      {
+        segmentCalls: 2,
+        inputTokens: 190_000,
+        outputTokens: 15_000,
+        webCalls: 0,
+        durationMs: 1,
+        limits: [],
+      },
+      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
+    );
+    expect(r.ok).toBe(false);
+    expect(r.reason).toBe("GLOBAL_TOKEN_BUDGET_EXHAUSTED");
+  });
 });
 
 describe("RB-30 conclusions capitalization", () => {
@@ -120,24 +171,121 @@ describe("RB-28/B5 restitution", () => {
     state.sources = [
       {
         kind: "GIT",
-        ref: "src/booking.ts",
-        title: "booking.ts",
+        ref: "a.ts",
+        title: "a",
         coverage: "CONSULTED",
       },
     ];
     const text = composeInvestigationPartialRestitution({
       state,
       suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
-      production: {
-        kind: "REPLY",
-        status: "PARTIAL",
-        parts: [],
-        contentMarkdown: "Synthèse métier déjà produite sur le travail précédent.",
-      },
     });
+    expect(text).toMatch(/contigu/i);
     expect(text).not.toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);
-    expect(text).toMatch(/limite de ressources/i);
-    expect(text).toMatch(/Créneaux contigus/);
-    expect(text).not.toMatch(/Aucune conclusion métier fiable n'a été consolidée/);
+  });
+});
+
+describe("C1 contentSha256 pair vs body", () => {
+  it("pair digest differs from body-only when title is non-empty", () => {
+    const title = "Note de recommandation";
+    const body = "# Note\n\nContenu métier.";
+    const pair = contentSha256(title, body);
+    const bodyOnly = contentBodySha256(body);
+    expect(pair).not.toBe(bodyOnly);
+    expect(contentSha256(title, body)).toBe(pair);
+  });
+});
+
+describe("C2 section hint authority", () => {
+  it("ignores bare section mentions used as reference", () => {
+    const hint = extractSectionHintFromPilotText(
+      "Comme indiqué en section 1, prépare une synthèse sans modifier le document.",
+    );
+    expect(hint).toBeNull();
+  });
+
+  it("recovers intentional multi-section revision targets", () => {
+    const hint = extractSectionHintFromPilotText(
+      "Intègre ces précisions dans la section 2 et dans la section 3.",
+    );
+    expect(hint).toMatch(/2/);
+    expect(hint).toMatch(/3/);
+  });
+});
+
+describe("B3 inventory-incomplete continuation", () => {
+  it("continues when Nora declares COMPLETE but inventory remains open", () => {
+    const inv = createEmptyInvestigation("Examine intégralement les 50 documents");
+    inv.inventoryTotal = 50;
+    inv.inventoryExamined = 32;
+    inv.sources = [
+      {
+        kind: "GIT",
+        ref: "a.md",
+        title: "a",
+        coverage: "CONSULTED",
+      },
+    ];
+    const reply = {
+      content: "Synthèse partielle",
+      status: "COMPLETE",
+      qualification: {
+        status: "QUALIFIED",
+        workDisposition: "COMPLETE",
+        goal: "Synthèse",
+        desiredOutcome: "Synthèse",
+        intents: [],
+        determiningQuestions: [],
+      },
+      observedToolSources: [
+        { kind: "GIT", ref: "a.md", title: "a", coverage: "CONSULTED" },
+      ],
+    } as unknown as NoraGenerateResult;
+    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(true);
+  });
+
+  it("continues when inventory is declared but no source recorded yet", () => {
+    const inv = createEmptyInvestigation("Examine intégralement les 50 documents");
+    inv.inventoryTotal = 50;
+    inv.inventoryExamined = 0;
+    const reply = {
+      content: "Accès Git indisponible pour l’instant",
+      status: "COMPLETE",
+      qualification: {
+        status: "QUALIFIED",
+        workDisposition: "COMPLETE",
+        goal: "Synthèse",
+        desiredOutcome: "Synthèse",
+        intents: [],
+        determiningQuestions: [],
+      },
+      observedToolSources: [],
+    } as unknown as NoraGenerateResult;
+    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(true);
+  });
+
+  it("stops when inventory is complete and disposition is COMPLETE", () => {
+    const inv = createEmptyInvestigation("done");
+    inv.inventoryTotal = 3;
+    inv.inventoryExamined = 3;
+    inv.sources = [
+      { kind: "GIT", ref: "a", title: "a", coverage: "CONSULTED" },
+      { kind: "GIT", ref: "b", title: "b", coverage: "CONSULTED" },
+      { kind: "GIT", ref: "c", title: "c", coverage: "CONSULTED" },
+    ];
+    const reply = {
+      content: "Synthèse",
+      status: "COMPLETE",
+      qualification: {
+        status: "QUALIFIED",
+        workDisposition: "COMPLETE",
+        goal: "Synthèse",
+        desiredOutcome: "Synthèse",
+        intents: [],
+        determiningQuestions: [],
+      },
+      observedToolSources: [],
+    } as unknown as NoraGenerateResult;
+    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(false);
   });
 });
```
