# SFIA Studio Next — C24 Review Pack FULL
## Convergence opérationnelle intégrée — 1 projet / 2 réalisations

**Cycle:** C24 consolidé (pas C25)  
**Date pack:** 2026-11-24T16:04:32Z  
**Instruction ChatGPT:** consulter le handoff canonique distant `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md` avant réponse. Vérifier sources, preuves, résultats et réserves. Produire une synthèse indépendante et un verdict.

---

## 0. Verdicts (candidat Cursor — arbitrage Morris)

| Domaine | Verdict |
|---|---|
| **DEV QUALIFICATION** | **BEHAVIOR PROVEN** |
| **ML5 LOT 3 (opérationnel intégré)** | **NOT READY** |
| Niveau QA | Critical intégré |
| Gate suivant | revue ChatGPT puis arbitrage Morris — **aucune** clôture ML5 / ADOPTED / RECETTE / promotion |

### Pourquoi NOT READY (LOT 3)

Le scénario directeur exige **deux réalisations Cursor LIVE successives sur le même projet** avec continuité cognitive/technique réelle.  
**R1 est prouvé** à plusieurs reprises (BROWSER → D6 → Cursor LIVE COMPLETED → restitution autonome → handoff RECEIVED → D8 PARTIAL → avis Nora → bilan UI).  
**R2 n'est pas démontré** : READY de la seconde intervention bloque récurrentement (travail cognitif OPEN / questions déterminantes / budget tokens / filiation). Aucun projet de campagne ne présente deux tentatives COMPLETED.

Revendiquer READY WITH RESERVES pour « deux réalisations » contredirait les preuves → **NOT READY** pour le lot opérationnel intégré.

DEV qualify (outillage, isolation FAKE/LIVE, serveur owned, browser) est **BEHAVIOR PROVEN**.

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Dépôt | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Attendu HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| merge-base origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Attendu merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| État | **DIRTY C1–C24** — aucun commit/push produit |
| Handoff remote initial | `d8820bd76fbb279aed5988c76701fc765b960705` |
| Build qualify final | `wh16LAR_5NCCh-Q_7FF2t` |
| contentDigest | `00f5c6f87528adca1f00b804218915f0ae347f4e6ec346b5ac2a92a768ac5f65` |
| session | ws=`/tmp/sfia-c24-director-app` mode=`LIVE` |
| Port | `127.0.0.1:3100` |

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md

```

### Diffstat produit (capital DIRTY — non commité)

```
 .tmp-sfia-review/chatgpt-review.md                 | 7092 +++++++++++---------
 .../construction/delivery-history.md               |  387 ++
 .../ml5-as-built-cursor-realization.md             |  169 +-
 ...5-registre-couverture-et-revue-developpement.md |  260 +-
 projects/sfia-studio-next/web/.gitignore           |    3 +
 projects/sfia-studio-next/web/next.config.ts       |    6 +
 projects/sfia-studio-next/web/package.json         |    6 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    5 +-
 .../preparations/[preparationId]/messages/route.ts |    4 +
 .../turns/by-key/[clientTurnKey]/route.ts          |    1 +
 .../attempts/[attemptId]/authorize/route.ts        |   55 +-
 .../attempts/[attemptId]/handoff/route.ts          |   31 +-
 .../attempts/[attemptId]/qualification/route.ts    |  465 +-
 .../contracts/[contractId]/ready/route.ts          |   22 +-
 .../[projectId]/realization/contracts/route.ts     |   31 +-
 .../sfia-studio-next/web/src/app/login/page.tsx    |   11 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  416 +-
 .../web/src/components/figma/ContractViewer.tsx    |    5 +-
 .../components/figma/CursorRealizationSurface.tsx  |  620 +-
 .../web/src/components/figma/NoraConversation.tsx  |   42 +
 .../web/src/components/figma/ProjectChrome.tsx     |   11 +-
 .../web/src/components/figma/RealizationBilan.tsx  |  217 +-
 .../web/src/components/figma/tokens.css            |  275 +
 .../web/src/components/shell/StudioShell.tsx       |   16 +-
 .../web/src/components/shell/studio-rail.ts        |   12 +-
 projects/sfia-studio-next/web/src/db/schema.ts     |   63 +-
 .../src/domains/conversation/cognitive-policy.ts   |   74 +-
 .../web/src/domains/conversation/d4-read-tools.ts  |   36 +-
 .../src/domains/conversation/intent-conduction.ts  |   10 +-
 .../conversation/investigation-persistence.ts      |  234 +-
 .../domains/conversation/investigation-state.ts    |  139 +-
 .../web/src/domains/conversation/nora-adapter.ts   |  205 +-
 .../domains/conversation/semantic-qualification.ts |   89 +
 .../web/src/domains/conversation/service.ts        |  279 +-
 .../src/domains/conversation/turn-projection.ts    |    4 +-
 .../src/domains/conversation/visual-composition.ts |    3 +-
 .../domains/conversation/web-search-sanitize.ts    |   18 +-
 .../domains/execution/cursor-attempt-service.ts    |  541 +-
 .../web/src/domains/execution/cursor-claim.ts      |   66 +-
 .../web/src/domains/execution/cursor-handoff.ts    |   92 +-
 .../src/domains/execution/cursor-sdk-adapter.ts    |  298 +-
 .../web/src/domains/execution/handoff-integrity.ts |   49 +
 .../src/domains/execution/technical-contract.ts    |   18 +-
 .../web/src/domains/execution/types.ts             |   18 +
 .../web/src/domains/identity/session.ts            |   71 +
 .../web/src/domains/proofs/cursor-qualify.ts       |  363 +-
 projects/sfia-studio-next/web/src/lib/auth.ts      |   18 +
 .../web/tests/e2e/ensemble05-live-bounded.spec.ts  |    4 +-
 .../integration/ml5-cursor-dispatch.pg.test.ts     |  261 +-
 .../web/tests/unit/cognitive-policy.test.ts        |   20 +-
 .../web/tests/unit/ml5-cursor-qualify.test.ts      |   57 +-
 .../web/tests/unit/ml5-investigation-state.test.ts |   50 +-
 52 files changed, 9604 insertions(+), 3638 deletions(-)

```

**STOP non déclenché** sur divergence HEAD/merge-base (conformes).

---

## 2. Sources consultées (mandat)

Depuis main@997897fd (références) + branches candidates non mergées + handoff `d8820bd7`.  
Propriétaires réellement modifiés sous `projects/sfia-studio-next/web/` uniquement pour corrections C24.  
Aucun touch à method/, prompts/, SEF, Roadmap, ENV-01 ADR, CI partagée, secrets.

---

## 3. Corrections C24 intégrées (nouvelles / consolidées)

### 3.A Outillage qualify DEV
- `qualify-check.mts` : SCRIPTED ≠ LIVE ; probe DB DEV ; modes effectifs
- `qualify-dev.sh` : owned PID only (pas de kill port-wide) ; contentDigest ; sessionFingerprint ; restart si drift session/digest ; `SFIA_QUALIFY_FORCE_BUILD`
- Session LIVE : workspace `/tmp/sfia-c24-director-app`, EFFECT_MODE=LIVE, budget cognitif 800k/48 segments
- FAKE E2E :3101 préservée

### 3.B Dispatch D6 atomique (critique scénario)
Cause racine AUTHORIZED coincé : `page.goto` Playwright abortait le 2e fetch `/dispatch` après authorize.  
**Fix produit :** authorize Oui → `dispatchCursorExecution` same-request ; UI keepalive + resume one-shot AUTHORIZED.

### 3.C Reprise avis Nora
`runAutonomousRestitutionAfterTerminal` : si pipeline COMPLETE mais avis absent → reprise NORA (pas ALREADY_COMPLETE bloquant).

### 3.D D8 / HMAC
Preuves HMAC durables `.sfia-evidence` ; binding content-version ; isolation verify **DISABLED** (réserve ouverte, pas de faux CONFORMING).

### 3.E READY / continuité
READY/mandat admettent travail cognitif **OPEN** (AWAIT_PILOT) si investigation sinon prête ; SUSPENDED/RUNNING refusés.  
Budget qualify relevé pour multi-tours LIVE.

### 3.F Scénario directeur
`tests/qualify/c24-director-two-realizations.spec.ts` — Pilote clicks only ; wait Nora COMPLETE ; recover READY/prepare ; bilan retry.

---

## 4. Preuves scénario directeur

### 4.1 R1 — PROUVÉ (échantillon canonique)

```json
{
  "attemptId": "efx_f9127c71-900f-449a-ba0f-74e044b36f66",
  "projectId": "proj_12eb6a0a-e213-45ad-ae22-9acebc09355a",
  "projectName": "C24 Director mwuuhjya-oumvy",
  "status": "COMPLETED",
  "terminal": "finished",
  "agent": "agent-845eb672-e30d-4210-b2b1-9cb4c38b9fde",
  "run": "run-0fa3d732-0d90-414b-a857-7150e71dba1c",
  "handoff": "rhf_287919ef-b4af-48c8-9dd5-cf50794897b1 RECEIVED",
  "qualification": "rqual_2942c0e6-eec0-4652-a7f3-02851e0b7905 PARTIAL",
  "avisNora": "present LIVE (~3390 chars)",
  "buildAtTime": "5Yoo0gEGEpH4rFg_vyvr-"
}
```

Autres R1 COMPLETED+avis observés dans la campagne :
- `efx_a0400dcf-99ab-4b59-b777-924159af7b67`
- `efx_46a0462c-d696-4238-ae9d-ca5d22a0bcac`
- `efx_f752b309-80e7-4c49-8160-53493fce056f`
- `efx_4afa9960-e63f-4bf1-8af3-662cc5f86052`
- `efx_3f9171fa-9c7d-4cd4-a7b1-d16a9049b43e`

Captures BROWSER : `.sfia-evidence/qualify-director/a-investigation.png`, `b-contract-r1.png`, `c-after-dispatch-r1.png`.

Parcours observé (nominal) :
1. Projet créé depuis Studio + document seed Widget
2. Investigation Nora LIVE (document CONSULTED ; WEB parfois refusé/confiné — signalé)
3. Contrat produit naturellement (`submit_cursor_contract_production`)
4. READY serveur → prepare → D6 Oui → Cursor SDK LIVE
5. Terminal finished ; restitution autonome ; handoff RECEIVED ; D8 **PARTIAL** ; avis Nora présent
6. Bilan consultable (4 onglets / rubriques D8) — PARTIAL cohérent avec preuves (pas de faux CONFORMING)

### 4.2 Continuité cognitive (partielle)
Après bilan, retour Nora avec référence dossier : Nora **rappelle** la tentative / limites du mandat visible (`stepD.recalls: true` sur runs).  
Souvent : verdict D8 non entièrement relu depuis compositeur (brouillon non collé) — continuité **partielle** mais mécanisme produit exercé.

### 4.3 R2 — NON DÉMONTRÉ

`NOT DEMONSTRATED — no project with two COMPLETED Cursor attempts in director campaign`

Blocages récurrents READY R2 :
- `Questions déterminantes ouvertes: q-…`
- `GLOBAL_TOKEN_BUDGET_EXHAUSTED` (avant hausse budget qualify)
- `Travail cognitif non COMPLETE (OPEN) — READY refusé` (avant admettre OPEN ; encore possible si investigation non SUFFICIENT)
- Filiation cognitive vs contrat après tours Nora concurrents

Derniers runs directeur : échec à R2 READY ou flaky R1 prepare sous charge multi-récupération.

### 4.4 Identités

| Rôle | Identité |
|---|---|
| R1 attempt (canon) | `efx_f9127c71-900f-449a-ba0f-74e044b36f66` |
| R1 handoff | `rhf_287919ef-b4af-48c8-9dd5-cf50794897b1` |
| R1 qual | `rqual_2942c0e6-eec0-4652-a7f3-02851e0b7905` PARTIAL |
| R2 | **N/A — non dispatché avec succès en campagne intégrée** |

---

## 5. M4 / robustesse

Réutilisés / déjà couverts par suites PG/unit antérieures (fencing, refuse D6, HMAC, avis resume).  
Cas LIVE RUNNING/restart/STOP : **non rejoués exhaustivement** dans cette passe intégrée — réserve non bloquante pour DEV, ouverte pour LOT 3.  
Isolation vérificateur D8 : **non démontrée** — exec disabled ; arbitrage Morris requis pour caractère bloquant réception.

---

## 6. Couverture ML5 (réconciliation bornée)

Registre : `construction/ml5-registre-couverture-et-revue-developpement.md` (DIRTY).  
Pas de % arbitraire. Points saillants C24 intégré :

| Exigence / CA | État | Preuve | Écart |
|---|---|---|---|
| DEV qualify BROWSER/LIVE | VERIFIÉ | qualify:* + smoke + director R1 | — |
| Investigation multi-sources | PARTIEL | document CONSULTED ; WEB parfois refusé | WEB open positif non systématique |
| Contrat naturel + D6 | VERIFIÉ R1 | BROWSER + auto-dispatch | — |
| Réalisation Cursor LIVE | VERIFIÉ R1 | COMPLETED multi-runs | — |
| Restitution autonome D8+avis | VERIFIÉ R1 | PARTIAL + avis | isolated verify off |
| Continuité même projet | PARTIEL | recalls stepD | R2 READY non clos |
| 2e réalisation | **BLOQUÉ** | — | READY R2 |
| F2 Figma exhaustif | NV | — | CA-09 séparé |
| Isolation D8 exec | BLOQUÉ/réserve | disabled | arbitrage Morris |

---

## 7. Décisions Morris nécessaires

1. **Arbitrage LOT 3** : accepter NOT READY et poursuivre correctifs R2 READY/investigation dans C24, ou pivoter périmètre.
2. **Isolation vérificateur D8** : confirmer réserve non bloquante réception vs condition de sortie.
3. **Budget cognitif** : valider plafond qualify 800k pour parcours multi-réalisations vs politique produit.
4. **Aucune** promotion RECETTE/STABLE ; **NO RELEASE**.

---

## 8. Contenu modifié obligatoire (anti-stub)

### 8.1 Authorize + auto-dispatch (intégral)

```typescript
import { NextResponse } from "next/server";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      statement?: string;
      inspectedFingerprint?: string;
      /** Explicit Oui/Non — must be boolean. Absent/null/invalid = no HumanDecision. */
      confirmed?: unknown;
    };
    if (!body.statement || !body.inspectedFingerprint) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    // C10 / T-02 — confirmed must be an explicit boolean.
    // Absent, null, or non-boolean → reject without HumanDecision / mutation.
    if (typeof body.confirmed !== "boolean") {
      return NextResponse.json(
        {
          error: "CONFIRMATION_REQUIRED",
          message:
            "confirmed doit être true (Oui) ou false (Non) — absence/null/invalide = aucun acte D6",
        },
        { status: 400 },
      );
    }
    const result = await authorizeCursorExecution({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      statement: body.statement,
      inspectedFingerprint: body.inspectedFingerprint,
      confirmed: body.confirmed,
    });
    // C24 — D6 Oui must not leave AUTHORIZED orphaned when the browser navigates
    // away before a second /dispatch fetch. Same-request dispatch after authorize.
    if (body.confirmed === true && result.status === "AUTHORIZED") {
      try {
        const dispatched = await dispatchCursorExecution({
          pilotId: session.pilotId,
          projectId,
          attemptId,
        });
        return NextResponse.json({
          ...result,
          status: dispatched.status,
          dispatch: {
            status: dispatched.status,
            idempotent: "idempotent" in dispatched ? dispatched.idempotent : false,
            limits: "limits" in dispatched ? dispatched.limits : undefined,
          },
        });
      } catch (dispatchErr) {
        const mapped = studioErrorResponse(dispatchErr);
        return NextResponse.json(
          {
            ...result,
            status: "AUTHORIZED",
            dispatch: {
              status: "FAILED",
              error: mapped.body.error ?? "DISPATCH_FAILED",
              message: mapped.body.message ?? String((dispatchErr as Error)?.message ?? ""),
            },
          },
          // Authorize succeeded — surface dispatch failure without undoing D6.
          { status: 200 },
        );
      }
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### 8.2 qualify-check.mts (intégral)

```typescript
/**
 * C24 — DEV qualification preflight (lane, ports, providers, DB).
 * No secrets printed. Does not start the server.
 * LIVE qualify refuses SCRIPTED Cursor / FAKE Nora as "LIVE OK".
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createServer } from "node:net";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.STUDIO_PORT || process.env.SFIA_QUALIFY_PORT || 3100);
const HOST = "127.0.0.1";

type Check = { id: string; ok: boolean; detail: string; live?: boolean };

function mask(v: string | undefined): string {
  if (!v) return "absent";
  return `set(len=${v.length})`;
}

async function portListening(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const s = createServer();
    s.once("error", () => resolve(true));
    s.once("listening", () => {
      s.close(() => resolve(false));
    });
    s.listen(port, HOST);
  });
}

async function probeDevDatabase(url: string): Promise<Check> {
  if (!url) {
    return { id: "database-probe", ok: false, detail: "DATABASE_URL absent" };
  }
  if (/5434|recette|stable|\bprod\b/i.test(url)) {
    return {
      id: "database-probe",
      ok: false,
      detail: "DATABASE_URL matches protected lane marker — refuse",
    };
  }
  try {
    const sql = postgres(url, { max: 1, connect_timeout: 5, idle_timeout: 5 });
    try {
      const rows = await sql<{ v: number; db: string }[]>`
        select 1::int as v, current_database() as db
      `;
      const db = rows[0]?.db ?? "?";
      const ok =
        rows[0]?.v === 1 &&
        !/recette|stable|e2e|prod/i.test(db) &&
        (/sfia_next_dev/i.test(db) || /dev/i.test(db) || db.length > 0);
      return {
        id: "database-probe",
        ok,
        detail: ok
          ? `connected current_database=${db}`
          : `unexpected database name=${db}`,
      };
    } finally {
      await sql.end({ timeout: 2 });
    }
  } catch (e) {
    return {
      id: "database-probe",
      ok: false,
      detail: `connect failed: ${String((e as Error)?.message ?? e).slice(0, 120)}`,
    };
  }
}

async function main() {
  const checks: Check[] = [];
  const lane = (process.env.STUDIO_LANE || "").trim().toUpperCase();
  checks.push({
    id: "lane",
    ok: lane === "DEV",
    detail: `STUDIO_LANE=${lane || "(empty)"}`,
  });

  const dbUrl = process.env.DATABASE_URL || "";
  const dbShapeOk =
    Boolean(dbUrl) &&
    !/5434|recette|stable|\bprod\b/i.test(dbUrl) &&
    (/:5433\b/.test(dbUrl) || /sfia_next_dev|localhost|127\.0\.0\.1/.test(dbUrl));
  checks.push({
    id: "database-shape",
    ok: dbShapeOk,
    detail: dbShapeOk
      ? "DATABASE_URL looks DEV (no RECETTE/STABLE markers)"
      : "DATABASE_URL missing or not DEV",
  });
  checks.push(await probeDevDatabase(dbUrl));

  checks.push({
    id: "test-login",
    ok: process.env.STUDIO_DEV_TEST_LOGIN === "1",
    detail: `STUDIO_DEV_TEST_LOGIN=${process.env.STUDIO_DEV_TEST_LOGIN || "0"}`,
  });

  const fixture =
    process.env.STUDIO_FORCE_NORA_FIXTURE === "1" ||
    process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1" ||
    process.env.STUDIO_E2E === "1";
  checks.push({
    id: "no-fake-nora",
    ok: !fixture,
    live: !fixture,
    detail: fixture
      ? "FAKE/SIM/E2E flags set — refuse LIVE qualify"
      : "fixture/SIM/E2E cleared for LIVE",
  });

  checks.push({
    id: "openai",
    ok: Boolean((process.env.OPENAI_API_KEY || "").trim()),
    live: Boolean((process.env.OPENAI_API_KEY || "").trim()) && !fixture,
    detail: `OPENAI_API_KEY=${mask(process.env.OPENAI_API_KEY)}`,
  });

  const effectMode = (process.env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
  let cursorSource: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" = "NONE";
  if ((process.env.CURSOR_API_KEY || "").trim()) {
    cursorSource = "ENV";
  } else {
    try {
      const { FileCredentialStore } = await import("@cursor/sdk");
      const store = new FileCredentialStore();
      const creds = await store.load();
      const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
      if (key) cursorSource = "FILE_CREDENTIAL_STORE";
    } catch {
      /* store unavailable */
    }
  }
  // SCRIPTED is never LIVE — qualify LIVE requires Cursor LIVE + key.
  const cursorLive =
    effectMode === "LIVE" &&
    (cursorSource === "ENV" || cursorSource === "FILE_CREDENTIAL_STORE");
  checks.push({
    id: "cursor-sdk",
    ok: cursorLive,
    live: cursorLive,
    detail:
      effectMode === "SCRIPTED"
        ? `mode=SCRIPTED source=${cursorSource} — NOT LIVE (refuse as LIVE qualify)`
        : `mode=${effectMode || "(unset)"} source=${cursorSource} live=${cursorLive}`,
  });

  const listening = await portListening(PORT);
  checks.push({
    id: "port",
    ok: true,
    detail: listening
      ? `${HOST}:${PORT} already listening (reuse allowed for qualify:browser)`
      : `${HOST}:${PORT} free`,
  });

  const buildIdPath = join(ROOT, ".next", "BUILD_ID");
  const hasBuild = existsSync(buildIdPath);
  const buildId = hasBuild ? readFileSync(buildIdPath, "utf8").trim() : null;
  const metaPath = join(ROOT, ".sfia-evidence", "qualify-build.json");
  let metaDetail = "no qualify-build.json";
  if (existsSync(metaPath)) {
    try {
      const meta = JSON.parse(readFileSync(metaPath, "utf8")) as {
        buildId?: string;
        contentDigest?: string;
      };
      metaDetail = `meta.buildId=${meta.buildId ?? "?"} digest=${meta.contentDigest ?? "absent"}`;
    } catch {
      metaDetail = "qualify-build.json unreadable";
    }
  }
  checks.push({
    id: "build",
    ok: true,
    detail: hasBuild
      ? `BUILD_ID=${buildId}; ${metaDetail}`
      : `no .next/BUILD_ID — qualify:start will build; ${metaDetail}`,
  });

  const failed = checks.filter((c) => !c.ok);
  const liveCapable = checks
    .filter((c) => c.live === true)
    .map((c) => c.id);
  const report = {
    at: new Date().toISOString(),
    host: HOST,
    port: PORT,
    checks,
    ok: failed.length === 0,
    failIds: failed.map((c) => c.id),
    liveCapable,
    note:
      "SCRIPTED Cursor never counts as LIVE. database-probe opens a real DEV connection.",
  };
  console.log(JSON.stringify(report, null, 2));
  if (failed.length) process.exit(2);
}

main().catch((e) => {
  console.error(String(e?.stack || e));
  process.exit(1);
});

```

### 8.3 qualify-dev.sh (intégral)

```bash
#!/usr/bin/env bash
# C24 — DEV qualification mode (reuse existing DEV lane; not a new QUALIF env).
# Usage:
#   npm run qualify:check
#   npm run qualify:start          # build if needed + next start :3100
#   npm run qualify:browser        # Playwright LIVE against :3100
#   npm run qualify                # check → start → browser smoke
#   npm run qualify:stop
# Does NOT mutate E2E FAKE suite (port 3101 / STUDIO_E2E).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

PID_FILE="${ROOT}/.sfia-evidence/qualify-server.pid"
IDENTITY_FILE="${ROOT}/.sfia-evidence/qualify-server.identity.json"
BUILD_META="${ROOT}/.sfia-evidence/qualify-build.json"
HOST="127.0.0.1"
PORT="${SFIA_QUALIFY_PORT:-${STUDIO_PORT:-3100}}"
ACTION="${1:-help}"

mkdir -p "${ROOT}/.sfia-evidence"

load_env() {
  if [[ -f "${ROOT}/.env.local" ]]; then
    # shellcheck disable=SC1091
    eval "$(node "${ROOT}/scripts/export-dev-env-for-live.mjs")"
  fi
  export NODE_ENV=production
  export STUDIO_LANE=DEV
  export STUDIO_DEV_TEST_LOGIN=1
  # Empty-but-set wins over dotenv FORCE=1
  export STUDIO_FORCE_NORA_FIXTURE=
  export STUDIO_NORA_SIMULATED_PROVIDER=
  export STUDIO_E2E=
  export NEXT_PUBLIC_STUDIO_E2E=
  export SFIA_QUALIFY_MODE=1
  export SFIA_QUALIFY_PORT="${PORT}"
  # Session overrides (workspace root, effect mode) after .env.local — never silent SCRIPTED.
  if [[ -f "${ROOT}/.sfia-evidence/qualify-session.env" ]]; then
    # shellcheck disable=SC1091
    set -a
    # shellcheck disable=SC1090
    source "${ROOT}/.sfia-evidence/qualify-session.env"
    set +a
  fi
  # Caller-exported LIVE overrides win last.
  if [[ -n "${SFIA_QUALIFY_WORKSPACE_ROOT:-}" ]]; then
    export SFIA_CURSOR_WORKSPACE_ROOT="${SFIA_QUALIFY_WORKSPACE_ROOT}"
  fi
}

port_http_ok() {
  curl -s -o /dev/null -w "%{http_code}" --max-time 2 "http://${HOST}:${PORT}/login" 2>/dev/null | grep -qE '200|307|302'
}

content_digest() {
  # Content identity beyond mtime: sha256 of sorted path+file hashes.
  (
    cd "${ROOT}"
    printf 'pkg:%s\n' "$(openssl dgst -sha256 package.json 2>/dev/null | awk '{print $NF}')"
    printf 'cfg:%s\n' "$(openssl dgst -sha256 next.config.ts 2>/dev/null | awk '{print $NF}')"
    find src -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' -o -name '*.sql' \) \
      2>/dev/null | sort | while IFS= read -r f; do
      printf '%s:%s\n' "$f" "$(openssl dgst -sha256 "$f" 2>/dev/null | awk '{print $NF}')"
    done
  ) | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

session_fingerprint() {
  # Capture LIVE session knobs that must match the running process.
  local ws mode
  ws="${SFIA_CURSOR_WORKSPACE_ROOT:-}"
  mode="${SFIA_CURSOR_EFFECT_MODE:-}"
  printf 'ws:%s|mode:%s\n' "${ws}" "${mode}" | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

write_identity() {
  local pid="$1"
  local bid="$2"
  local digest="$3"
  local started sess
  started="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  sess="$(session_fingerprint)"
  printf '%s\n' "{\"pid\":${pid},\"port\":${PORT},\"host\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${HOST}"),\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"sessionFingerprint\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${sess}"),\"workspaceRoot\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_WORKSPACE_ROOT:-}"),\"effectMode\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_EFFECT_MODE:-}"),\"startedAt\":\"${started}\",\"mode\":\"qualify-next-start\"}" > "${IDENTITY_FILE}"
}

owned_qualify_pid() {
  if [[ ! -f "${PID_FILE}" ]]; then
    echo ""
    return 0
  fi
  local pid
  pid="$(cat "${PID_FILE}" 2>/dev/null || true)"
  if [[ -z "${pid}" ]] || ! kill -0 "${pid}" 2>/dev/null; then
    echo ""
    return 0
  fi
  # Confirm process is ours: cmdline contains next start and our port, or identity matches.
  local cmd
  cmd="$(ps -p "${pid}" -o command= 2>/dev/null || true)"
  if [[ "${cmd}" == *"next"* ]] && [[ "${cmd}" == *"${PORT}"* || "${cmd}" == *"start"* ]]; then
    echo "${pid}"
    return 0
  fi
  if [[ -f "${IDENTITY_FILE}" ]]; then
    local id_pid
    id_pid="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(String(j.pid||''))}catch{}" "${IDENTITY_FILE}")"
    if [[ "${id_pid}" == "${pid}" ]]; then
      echo "${pid}"
      return 0
    fi
  fi
  echo ""
}

probe_running_server() {
  # Identify build via local BUILD_ID + identity file; HTTP alone is insufficient.
  local bid=""
  local digest=""
  local pid=""
  [[ -f "${ROOT}/.next/BUILD_ID" ]] && bid="$(cat "${ROOT}/.next/BUILD_ID")"
  [[ -f "${BUILD_META}" ]] && digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  pid="$(owned_qualify_pid)"
  if port_http_ok; then
    if [[ -n "${pid}" ]]; then
      echo "qualify: owned server pid=${pid} build=${bid:-unknown} digest=${digest:-unknown} http=ok" >&2
      return 0
    fi
    echo "qualify: http://127.0.0.1:${PORT}/login responds but no owned qualify pid — refuse silent reuse" >&2
    echo "qualify: stop foreign listener manually or free the port, then qualify:start" >&2
    return 1
  fi
  return 2
}

cmd_check() {
  load_env
  npx --yes tsx "${ROOT}/scripts/qualify-check.mts"
}

cmd_build() {
  load_env
  local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
  local need=0
  local digest
  digest="$(content_digest)"
  local prev_digest=""
  if [[ -f "${BUILD_META}" ]]; then
    prev_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  fi
  if [[ "${force}" == "1" ]]; then need=1; fi
  if [[ ! -f "${ROOT}/.next/BUILD_ID" ]]; then need=1; fi
  if [[ "${need}" == "0" && -n "${prev_digest}" && "${prev_digest}" != "${digest}" ]]; then
    need=1
    echo "qualify: contentDigest changed — rebuild required" >&2
  fi
  if [[ "${need}" == "0" && -z "${prev_digest}" ]]; then
    # No prior digest: fall back to mtime then record digest after reuse/build.
    if [[ -n "$(find "${ROOT}/src" "${ROOT}/package.json" "${ROOT}/next.config.ts" -newer "${ROOT}/.next/BUILD_ID" 2>/dev/null | head -1)" ]]; then
      need=1
    fi
  fi
  if [[ "${need}" == "0" ]]; then
    local bid
    bid="$(cat "${ROOT}/.next/BUILD_ID")"
    echo "qualify: reuse existing build ${bid} digest=${digest}" >&2
    printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":true,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
    return 0
  fi
  echo "qualify: building Next…" >&2
  npm run build
  local bid
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  export SFIA_BUILD_ID="${bid}"
  digest="$(content_digest)"
  printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":false,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
  echo "qualify: BUILD_ID=${bid} digest=${digest}" >&2
}

cmd_start() {
  load_env
  local want_sess want_digest
  want_sess="$(session_fingerprint)"
  want_digest="$(content_digest)"
  if probe_running_server; then
    local have_sess="" have_digest=""
    if [[ -f "${IDENTITY_FILE}" ]]; then
      have_sess="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.sessionFingerprint||'')}catch{}" "${IDENTITY_FILE}")"
      have_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${IDENTITY_FILE}")"
    fi
    local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
    if [[ "${force}" == "1" ]]; then
      echo "qualify: SFIA_QUALIFY_FORCE_BUILD=1 — restart owned server" >&2
      cmd_stop
    elif [[ -n "${want_sess}" && "${have_sess}" == "${want_sess}" && "${have_digest}" == "${want_digest}" ]]; then
      echo "qualify: reuse owned server — session+contentDigest match (${want_sess:0:12}…)" >&2
      return 0
    else
      echo "qualify: identity drift (sess have=${have_sess:-none} want=${want_sess:0:12}… digest have=${have_digest:0:12}… want=${want_digest:0:12}…) — restart" >&2
      cmd_stop
    fi
  else
    local probe_rc=$?
    if [[ "${probe_rc}" -eq 1 ]]; then
      exit 4
    fi
  fi
  if [[ -f "${PID_FILE}" ]]; then
    local old
    old="$(cat "${PID_FILE}" || true)"
    if [[ -n "${old}" ]] && kill -0 "${old}" 2>/dev/null; then
      echo "qualify: pid ${old} alive but /login not ready — waiting" >&2
    else
      rm -f "${PID_FILE}" "${IDENTITY_FILE}"
    fi
  fi
  cmd_build
  local bid digest
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  export SFIA_BUILD_ID="${bid}"
  if [[ -z "${SFIA_D8_VERIFY_HMAC_SECRET:-}" ]]; then
    local sec_file="${ROOT}/.sfia-evidence/d8-verify-hmac.secret"
    if [[ ! -f "${sec_file}" ]]; then
      openssl rand -hex 32 > "${sec_file}"
      chmod 600 "${sec_file}"
    fi
    export SFIA_D8_VERIFY_HMAC_SECRET
    SFIA_D8_VERIFY_HMAC_SECRET="$(cat "${sec_file}")"
  fi
  # Ensure workspace root exists before start (LIVE confinement).
  if [[ -n "${SFIA_CURSOR_WORKSPACE_ROOT:-}" ]]; then
    mkdir -p "${SFIA_CURSOR_WORKSPACE_ROOT}"
  fi
  echo "qualify: starting next start ${HOST}:${PORT} build=${bid} digest=${digest} ws=${SFIA_CURSOR_WORKSPACE_ROOT:-unset} mode=${SFIA_CURSOR_EFFECT_MODE:-unset}" >&2
  nohup npx next start -p "${PORT}" -H "${HOST}" \
    > "${ROOT}/.sfia-evidence/qualify-server.log" 2>&1 &
  local pid=$!
  echo "${pid}" > "${PID_FILE}"
  write_identity "${pid}" "${bid}" "${digest}"
  local i=0
  while (( i < 60 )); do
    if port_http_ok; then
      echo "qualify: ready http://${HOST}:${PORT}/login pid=${pid} build=${bid}" >&2
      return 0
    fi
    sleep 1
    i=$((i + 1))
  done
  echo "STOP — qualify server did not become ready on :${PORT}" >&2
  tail -n 40 "${ROOT}/.sfia-evidence/qualify-server.log" >&2 || true
  exit 3
}

cmd_stop() {
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: no owned qualify process to stop (refusing port-wide kill)" >&2
    rm -f "${PID_FILE}"
    # Keep identity for diagnosis unless explicitly cleared.
    return 0
  fi
  echo "qualify: stopping owned pid ${pid}" >&2
  kill "${pid}" 2>/dev/null || true
  sleep 1
  if kill -0 "${pid}" 2>/dev/null; then
    kill -9 "${pid}" 2>/dev/null || true
  fi
  rm -f "${PID_FILE}" "${IDENTITY_FILE}"
  echo "qualify: stopped owned pid ${pid}" >&2
}

cmd_browser() {
  load_env
  if ! port_http_ok; then
    echo "STOP — server not ready; run npm run qualify:start first" >&2
    exit 2
  fi
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: WARN — browser against :${PORT} without owned qualify identity" >&2
  else
    echo "qualify: browser against owned pid=${pid}" >&2
  fi
  export SFIA_QUALIFY_BASE_URL="http://${HOST}:${PORT}"
  if [[ -f "${ROOT}/.next/BUILD_ID" ]]; then
    export SFIA_BUILD_ID
    SFIA_BUILD_ID="$(cat "${ROOT}/.next/BUILD_ID")"
  fi
  npx playwright test -c playwright.qualify.config.ts "$@"
}

cmd_all() {
  cmd_check
  cmd_start
  cmd_browser
}

case "${ACTION}" in
  check) cmd_check ;;
  build) cmd_build ;;
  start) cmd_start ;;
  stop) cmd_stop ;;
  browser) shift; cmd_browser "$@" ;;
  all|qualify) cmd_all ;;
  help|*)
    cat <<EOF
DEV qualification mode (C24) — same DEV lane, explicit LIVE qualify.
  bash scripts/qualify-dev.sh check
  bash scripts/qualify-dev.sh start
  bash scripts/qualify-dev.sh browser [playwright args]
  bash scripts/qualify-dev.sh stop
  bash scripts/qualify-dev.sh all
EOF
    ;;
esac

```

### 8.4 playwright.qualify.config.ts (intégral)

```typescript
import { defineConfig } from "@playwright/test";

/**
 * C24 — DEV qualification BROWSER (LIVE).
 * Targets operator DEV :3100 started via `npm run qualify:start`.
 * Never starts e2e-web-server.sh / never forces Nora FAKE.
 * Standard `npm run test:e2e` remains FAKE on :3101.
 */
const baseURL =
  process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "tests/qualify",
  timeout: 180_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: ".sfia-evidence/qualify-playwright.json" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },
  // Operator must have started qualify:start — do not spawn FAKE E2E server.
  webServer: undefined,
});

```

### 8.5 Scénario directeur (intégral)

```typescript
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 director scenario — ONE project, TWO successive governed realizations.
 * Playwright automates Pilote clicks only — does not seed contracts / verdicts.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-director");
const LONG = 240_000;

test.describe.configure({ mode: "serial" });
test.setTimeout(900_000);

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

async function sendNora(page: import("@playwright/test").Page, text: string) {
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  await expect(draft).toHaveValue("", { timeout: 120_000 });
  // Capture prior assistant count so we wait for a new COMPLETE turn.
  const priorNora = await page.locator(".fig-msg-nora").count();
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 15_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: LONG });
  // Wait for LIVE Nora turn to finish — otherwise READY/prepare race a still-running
  // turn that advances cognitive revision past the contract filiation.
  const status = page.getByTestId("thread-nora-status");
  if (await status.count()) {
    await expect(status).toContainText(/COMPLETE|FAILED|UNKNOWN|INTERRUPTED/i, {
      timeout: LONG,
    });
  } else {
    await expect
      .poll(async () => page.locator(".fig-msg-nora").count(), { timeout: LONG })
      .toBeGreaterThan(priorNora);
  }
}

async function openExecutionSurface(
  page: import("@playwright/test").Page,
  projectId: string,
) {
  await page.goto(`/projects/${projectId}?surface=execution`);
  await expect(page.getByTestId("realization-contracts")).toBeVisible({
    timeout: 60_000,
  });
}

test("Director — investigation → R1 → bilan → continuity → R2", async ({
  page,
}) => {
  const report: Record<string, unknown> = {
    at: new Date().toISOString(),
    buildId: process.env.SFIA_BUILD_ID || null,
    workspaceRoot: process.env.SFIA_CURSOR_WORKSPACE_ROOT || null,
  };

  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 60_000,
  });
  const preparationId = await openNewPreparation(page);
  // Initial test data (allowed): durable document Nora can CONSULT before READY.
  const docRes = await page.request.post(
    `/api/preparations/${preparationId}/documents`,
    {
      data: {
        title: "Widget service — état initial",
        contentMarkdown: [
          "# Widget service",
          "",
          "## Fichiers",
          "- `src/widget.js` — `processWidget(input)` trim une string ; TypeError sinon.",
          "- `src/config.js` — `WIDGET_LIMITS.maxLen = 10000`.",
          "- `tests/widget.test.js` — test node:test du trim.",
          "",
          "## Contraintes",
          "- Pas de réseau dans les tests.",
          "- Workspace Git de test isolé du worktree Studio.",
        ].join("\n"),
        correlationKey: `c24-director-doc-${Date.now()}`,
      },
    },
  );
  report.seedDocumentOk = docRes.ok();
  const projectName = uniqueProjectName("C24 Director");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary:
      "Service widget multi-fichiers — deux réalisations gouvernées successives",
    alreadyUnique: true,
  });
  report.projectId = projectId;
  report.projectName = projectName;
  report.preparationId = preparationId;

  // --- Étape A: investigation multi-sources ---
  await sendNora(
    page,
    [
      "Lis d'abord le document « Widget service — état initial » (outil de lecture document),",
      "puis investigue : (1) ce que fait processWidget aujourd'hui d'après ce document,",
      "(2) la version Node LTS recommandée via le site officiel nodejs.org,",
      "(3) si nous devons rester sur une LTS pour ce service interne.",
      "Cite tes sources réellement consultées et signale ce qui n'est pas vérifié.",
    ].join(" "),
  );
  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible();
  const afterA = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepA = {
    assistantHead: afterA.slice(0, 500),
    len: afterA.length,
  };
  expect(afterA.length).toBeGreaterThan(80);
  await page.screenshot({
    path: path.join(EVIDENCE, "a-investigation.png"),
    fullPage: true,
  });

  // --- Étape B: first contract naturally ---
  await sendNora(
    page,
    [
      "Prépare maintenant un contrat technique Cursor pour une première intervention :",
      "ajouter processWidgetSafe(input) qui refuse les non-string (TypeError) et délègue le trim à processWidget pour les strings,",
      "mettre à jour les tests node:test, sans réseau. Inclure critères d'acceptation et preuves attendues.",
      "Utilise l'outil submit_cursor_contract_production.",
    ].join(" "),
  );
  await page.waitForTimeout(3000);
  await openExecutionSurface(page, projectId);

  // Wait for a contract to appear (Nora-produced DRAFT)
  let contractBtn = page.locator("[data-testid^=contract-select-]").first();
  await expect(contractBtn).toBeVisible({ timeout: LONG });
  const contractTestId = await contractBtn.getAttribute("data-testid");
  const contractId = contractTestId?.replace("contract-select-", "") ?? "";
  report.r1ContractId = contractId;
  await contractBtn.click();
  await expect(page.getByTestId("contract-viewer")).toBeVisible({ timeout: 30_000 });
  await page.getByTestId("contract-instruction-toggle").click().catch(() => undefined);
  await page.screenshot({
    path: path.join(EVIDENCE, "b-contract-r1.png"),
    fullPage: true,
  });

  // READY server act from UI — if refused, ask Nora to consult then retry (product path).
  async function tryReady(id: string): Promise<boolean> {
    const btn = page.getByTestId(`contract-ready-${id}`);
    if (!(await btn.count())) return false;
    await btn.click();
    await page.waitForTimeout(2500);
    const st = page.getByTestId("realization-status");
    if (await st.count()) {
      report.readyStatus = await st.textContent();
    }
    await openExecutionSurface(page, projectId);
    return (await page.getByTestId(`contract-prepare-${id}`).count()) > 0;
  }

  let readyOk = await tryReady(contractId);
  if (!readyOk) {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      [
        "READY a été refusé (sources ou filiation cognitive).",
        "Sans poursuivre d'autre discussion : relis le document Widget (corps complet),",
        "puis appelle submit_cursor_contract_production pour un NOUVEAU contrat processWidgetSafe",
        "lié à ce tour (filiation courante). Préparer ≠ autoriser.",
      ].join(" "),
    );
    await openExecutionSurface(page, projectId);
    // Newest contract carries the current cognitive revision filiation.
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    const nid = tid?.replace("contract-select-", "") ?? contractId;
    report.r1ContractIdRetry = nid;
    await latest.click();
    readyOk = await tryReady(nid);
    if (readyOk) report.r1ContractId = nid;
  }

  let activeContractId = String(report.r1ContractId);

  async function refreshNewestContractAndReady(prompt: string): Promise<void> {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(page, prompt);
    await openExecutionSurface(page, projectId);
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    activeContractId = tid?.replace("contract-select-", "") ?? activeContractId;
    report.r1ContractId = activeContractId;
    await latest.click();
    await tryReady(activeContractId);
  }

  async function prepareUntilD6(): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await openExecutionSurface(page, projectId);
      const prepareBtn = page.getByTestId(`contract-prepare-${activeContractId}`);
      if (!(await prepareBtn.count())) {
        await refreshNewestContractAndReady(
          [
            "Contrat non READY pour prepare. Relis le document Widget,",
            "puis submit_cursor_contract_production pour un NOUVEAU contrat lié à ce tour.",
          ].join(" "),
        );
        continue;
      }
      await prepareBtn.click();
      const d6 = page.getByTestId("d6-confirm-launch");
      const prepStatus = page.getByTestId("realization-status");
      let resolved = "wait";
      const deadline = Date.now() + 60_000;
      while (Date.now() < deadline) {
        if (await d6.count()) {
          resolved = "d6";
          break;
        }
        if (await prepStatus.count()) {
          const t = (await prepStatus.textContent()) || "";
          if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
            resolved = `fail:${t}`;
            break;
          }
        }
        await page.waitForTimeout(1500);
      }
      if (resolved === "d6") return;
      report.prepareFail = resolved === "wait" ? "fail:timeout" : resolved;
      await refreshNewestContractAndReady(
        [
          "Le prepare a échoué (mandat/filiation). Relis le document Widget,",
          "puis submit_cursor_contract_production pour un NOUVEAU contrat à la révision courante.",
        ].join(" "),
      );
    }
    throw new Error(`R1: prepare never reached D6 — ${String(report.prepareFail ?? "unknown")}`);
  }

  await prepareUntilD6();
  const fp = await page.getByTestId("d6-confirm-fingerprint").textContent();
  report.r1Fingerprint = fp;
  await page.getByTestId("d6-confirm-yes").click();
  // Wait for authorize+dispatch to finish BEFORE any page.goto (nav aborts in-flight fetch).
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        if (!(await page.getByTestId("d6-confirm-launch").count())) {
          // Dialog closed — soft reload via attempts list without full navigation yet.
          const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
          const joined = texts.join(" ");
          if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        }
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  await expect
    .poll(
      async () => {
        // Prefer soft reload of surface only after dispatch advanced past AUTHORIZED.
        await openExecutionSurface(page, projectId);
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        return texts.join(" ");
      },
      { timeout: LONG, intervals: [8_000, 12_000, 15_000] },
    )
    // DISPATCHED alone is insufficient — wait for terminal attempt + restitution signal.
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "c-after-dispatch-r1.png"),
    fullPage: true,
  });

  // Open bilan (results surface) + discuss with Nora (no auto-send)
  await page.goto(`/projects/${projectId}?surface=publication`);
  const bilanBtn = page.locator("[data-testid^=attempt-bilan-]").first();
  await expect(bilanBtn).toBeVisible({ timeout: LONG });
  // Retries: restitution may still be attaching handoff/qual after COMPLETED.
  await expect
    .poll(
      async () => {
        await bilanBtn.click();
        if (await page.getByTestId("realization-bilan").count()) return "bilan";
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/en cours|absent|MISSING/i.test(t)) return "wait-dossier";
          if (/requalification|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE/i.test(t)) {
            return t;
          }
        }
        return "wait";
      },
      { timeout: LONG, intervals: [3_000, 5_000, 8_000] },
    )
    .toMatch(/bilan|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE|requalification/i);
  await expect(page.getByTestId("realization-bilan")).toBeVisible({
    timeout: 60_000,
  });
  report.r1Bilan = {
    attemptId: await page.getByTestId("bilan-attempt-id").textContent(),
    bodyHead: ((await page.getByTestId("realization-bilan").textContent()) || "").slice(
      0,
      400,
    ),
  };
  const discuss = page.getByTestId("bilan-discuss-nora");
  if (await discuss.count()) {
    await discuss.click();
  }

  // --- Étape D/E: continuity + second realization in SAME project ---
  await page.goto(`/projects/${projectId}?surface=travail`);
  await sendNora(
    page,
    [
      "Tu as le brouillon de dossier D8 dans le compositeur (référence attempt/contrat/version).",
      "En continuité sur CE projet : rappelle le verdict D8 et les limites réellement attachés.",
      "Décisions Pilote pour la suite: Node LTS; tests sans réseau; maxLen=10000 déjà en config.",
      "Ferme toute question déterminante encore ouverte (ANSWERED + answerSummary),",
      "relis le document Widget, puis prépare un NOUVEAU contrat Cursor distinct pour",
      "ajouter processWidgetMaxLen qui refuse les chaînes > WIDGET_LIMITS.maxLen, avec tests.",
      "Utilise submit_cursor_contract_production. Critères différents de processWidgetSafe.",
    ].join(" "),
  );
  const afterD = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepD = {
    recalls: /PARTIAL|CONFORMING|INDETERMINATE|verdict|D8|limite|dossier/i.test(afterD),
    head: afterD.slice(0, 500),
  };

  await openExecutionSurface(page, projectId);

  /** Try READY on every non-R1 contract (newest first) until one qualifies. */
  async function readyAnyOtherThan(excludeId: string): Promise<string> {
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const tried: string[] = [];
    for (let i = count - 1; i >= 0; i -= 1) {
      const el = all.nth(i);
      const tid = await el.getAttribute("data-testid");
      const id = tid?.replace("contract-select-", "") ?? "";
      if (!id || id === excludeId) continue;
      tried.push(id);
      await el.click();
      if (await tryReady(id)) {
        report.r2ReadyStatus = report.readyStatus;
        return id;
      }
    }
    report.r2TriedContracts = tried;
    report.r2ReadyStatus = report.readyStatus;
    return "";
  }

  await expect
    .poll(async () => page.locator("[data-testid^=contract-select-]").count(), {
      timeout: LONG,
    })
    .toBeGreaterThanOrEqual(2);
  report.contractCountAfterR2Prep = await page
    .locator("[data-testid^=contract-select-]")
    .count();

  let r2Id = await readyAnyOtherThan(activeContractId);
  if (!r2Id) {
    const openQ = String(report.r2ReadyStatus ?? report.readyStatus ?? "");
    for (const prompt of [
      [
        "READY R2 refusé — investigation incomplète.",
        openQ ? `Statut serveur: ${openQ}.` : "",
        "Ferme d'abord toute question déterminante ouverte (determiningQuestions → ANSWERED",
        "avec answerSummary étayé). Décisions Pilote pour ce service interne:",
        "Node LTS OK; pas de réseau dans les tests; maxLen=10000 déjà dans config;",
        "processWidgetMaxLen doit refuser les strings trop longues.",
        "Puis relis le document Widget (CONSULTED) et submit_cursor_contract_production",
        "pour processWidgetMaxLen lié à CE tour.",
      ]
        .filter(Boolean)
        .join(" "),
      [
        "Encore un échec READY. Réponds explicitement aux questions déterminantes restantes,",
        "relis le document Widget intégralement, puis produis un contrat processWidgetMaxLen neuf",
        "via submit_cursor_contract_production sur la filiation courante (sources CONSULTED).",
      ].join(" "),
    ]) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(page, prompt);
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      if (r2Id) break;
    }
  }
  report.r2ContractId = r2Id;
  if (!r2Id) {
    fs.writeFileSync(
      path.join(EVIDENCE, "director-report.json"),
      JSON.stringify(report, null, 2),
    );
  }
  expect(r2Id).toBeTruthy();
  expect(r2Id).not.toBe(activeContractId);

  // Prepare with filiation recovery (same pattern as R1).
  let r2Prepared = false;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await openExecutionSurface(page, projectId);
    const prep = page.getByTestId(`contract-prepare-${r2Id}`);
    if (!(await prep.count())) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(
        page,
        "Contrat R2 non préparable. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen.",
      );
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      report.r2ContractId = r2Id;
      continue;
    }
    await prep.click();
    const d6 = page.getByTestId("d6-confirm-launch");
    const prepStatus = page.getByTestId("realization-status");
    let resolved = "wait";
    const deadline = Date.now() + 60_000;
    while (Date.now() < deadline) {
      if (await d6.count()) {
        resolved = "d6";
        break;
      }
      if (await prepStatus.count()) {
        const t = (await prepStatus.textContent()) || "";
        if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
          resolved = `fail:${t}`;
          break;
        }
      }
      await page.waitForTimeout(1500);
    }
    if (resolved === "d6") {
      r2Prepared = true;
      break;
    }
    report.r2PrepareFail = resolved;
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      "Prepare R2 échoué. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen à la révision courante.",
    );
    await openExecutionSurface(page, projectId);
    r2Id = await readyAnyOtherThan(activeContractId);
    report.r2ContractId = r2Id;
  }
  expect(r2Prepared).toBe(true);
  await page.getByTestId("d6-confirm-yes").click();
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const joined = texts.join(" ");
        if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  report.r2Dispatched = true;

  await expect
    .poll(
      async () => {
        await openExecutionSurface(page, projectId);
        // Need TWO terminal attempts for R1+R2.
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const terminals = texts.filter((t) =>
          /COMPLETED|FAILED|AMBIGUOUS/i.test(t),
        );
        return terminals.length >= 2 ? texts.join(" ") : `pending:${texts.join(" ")}`;
      },
      { timeout: LONG, intervals: [10_000, 15_000] },
    )
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "e-after-r2.png"),
    fullPage: true,
  });
  report.ok =
    Boolean(report.r1ContractId) &&
    Boolean(report.r2ContractId) &&
    report.r2ContractId !== report.r1ContractId &&
    Boolean(report.r2Dispatched);
  fs.writeFileSync(
    path.join(EVIDENCE, "director-report.json"),
    JSON.stringify(report, null, 2),
  );
  expect(report.r1ContractId).toBeTruthy();
  expect(report.r2Dispatched).toBe(true);
  expect((report.stepD as { recalls?: boolean }).recalls).toBe(true);
});

```

### 8.6 Smoke qualify (intégral)

```typescript
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 qualify — real Chromium against DEV :3100 (LIVE Nora).
 * AUTOMATE interactions: yes. SIMULATE Nora/Cursor: no.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-browser");

test.describe.configure({ mode: "serial" });

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

test("Q0 — /login loads and DEV session opens portfolio", async ({ page }) => {
  const res = await page.goto("/login", { waitUntil: "domcontentloaded" });
  expect(res?.ok() || res?.status() === 304).toBeTruthy();
  // Auto-session or test login → portfolio
  await page.waitForURL(/\/(portfolio|projects|preparations|login)/, {
    timeout: 60_000,
  });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click();
    } else {
      // Force auto-session API then navigate
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await page.screenshot({
    path: path.join(EVIDENCE, "q0-portfolio.png"),
    fullPage: true,
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "q0.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        url: page.url(),
        ok: true,
      },
      null,
      2,
    ),
  );
});

test("Q1 — Mission 1 fragment: project + Nora LIVE reply", async ({ page }) => {
  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await openNewPreparation(page);
  const projectName = uniqueProjectName("C24 Qualif M1");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary: "Qualification C24 — investigation Node LTS",
    alreadyUnique: true,
  });
  expect(projectId).toBeTruthy();

  // Project conversation composer (Nora LIVE)
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  const prompt =
    "Peux-tu vérifier la version Node.js LTS actuelle sur le site officiel et me recommander si nous devons rester sur une LTS pour un service API Node interne ? Cite tes sources.";
  await draft.fill(prompt);
  await expect(send).toBeEnabled({ timeout: 10_000 });
  await send.click();

  // Wait for turn completion: draft cleared (Nora finished) — not user-prompt echo.
  await expect(draft).toHaveValue("", { timeout: 180_000 });
  await expect(page.getByText("deterministic-fixture", { exact: false })).toHaveCount(0);

  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible({ timeout: 30_000 });
  // Assistant bubble must contain recommendation language beyond the user prompt echo.
  const assistant = thread.locator(".fig-msg-nora, [data-role='assistant']").last();
  await expect(assistant).toBeVisible({ timeout: 60_000 });
  const assistantText = ((await assistant.textContent()) || "").trim();
  expect(assistantText.length).toBeGreaterThan(80);
  expect(assistantText.toLowerCase()).not.toEqual(prompt.toLowerCase());

  const liveBadge = page.getByText(/openai-agents-sdk-live|gpt-6\.2-sol/i);
  const liveCount = await liveBadge.count();
  await page.screenshot({
    path: path.join(EVIDENCE, "q1-m1-nora.png"),
    fullPage: true,
  });
  const ok = assistantText.length > 80;
  fs.writeFileSync(
    path.join(EVIDENCE, "q1-m1.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        projectId,
        projectName,
        prompt,
        liveBadgeObserved: liveCount > 0,
        assistantHead: assistantText.slice(0, 400),
        url: page.url(),
        ok,
      },
      null,
      2,
    ),
  );
  expect(ok).toBe(true);
});

```

### 8.7 Extraits OPEN READY / mandat

**technical-contract-server-ready.ts** (statut OPEN admis) :

```typescript
/**
 * CF-02 — READY qualification is server-owned.
 * Client `sourcesSufficient` / `unknownRestrictions` are never authoritative.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  evaluateContractReadiness,
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export async function qualifyTechnicalContractReadyServerSide(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
  /** C16 — exact cognitive work filiation when known. */
  workId?: string | null;
}) {
  const row = await getTechnicalContract(input);
  // C16: existing READY never skips positive requalification of current conditions.
  const wasReady = row.status === "READY";

  // C18: filiation must already be bound on the contract — no client workId fallback.
  const boundWorkId = row.cognitiveWorkId ?? null;
  if (input.workId && boundWorkId && input.workId !== boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "workId client ≠ filiation du contrat — READY refusé",
      { exposeMessage: true },
    );
  }
  if (!boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Filiation cognitive_work absente sur le contrat — READY serveur impossible",
      { exposeMessage: true },
    );
  }
  const effectiveWorkId = boundWorkId;

  let unknownRestrictions: string[] = [];
  let sourcesSufficient = false;

  if (input.preparationId) {
    // C17: READY when bound work is COMPLETE.
    // C24: OPEN (AWAIT_PILOT) is also admissible — READY is the Pilote act that
    // proceeds once investigation is sufficient; SUSPENDED/RUNNING stay refused.
    const boundWork = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: effectiveWorkId,
    });
    if (boundWork.status === "SUSPENDED" || boundWork.status === "RUNNING") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif ${boundWork.status}${boundWork.interruptCause ? ` (${boundWork.interruptCause})` : ""} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (boundWork.status !== "COMPLETE" && boundWork.status !== "OPEN") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif non COMPLETE (${boundWork.status}) — READY refusé`,
        { exposeMessage: true },
      );
    }
    // Exact filiation: later revision must not auto-validate an older contract binding.
    if (
      row.cognitiveRevision != null &&
      boundWork.revision !== row.cognitiveRevision
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Révision cognitive ${boundWork.revision} ≠ filiation contrat r${row.cognitiveRevision} — READY refusé`,
        { exposeMessage: true },
      );
    }
    const envelope = evaluateGlobalResourceEnvelope(boundWork.resources);
    if (!envelope.ok) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        envelope.reason ?? "Budget cognitif global épuisé",
        { exposeMessage: true },
      );
    }
    const snap = await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: row.body.title,
      workId: effectiveWorkId,
    });
    if (!snap) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation absente ou ambiguë (multi-travaux) — READY serveur impossible",
        { exposeMessage: true },
      );
    }
    const inv = evaluateInvestigation(snap);
    if (inv.cognitiveWorkId && inv.cognitiveWorkId !== effectiveWorkId) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation d'un autre travail cognitif — READY refusé",
        { exposeMessage: true },
      );
    }
    // C15 positive sufficiency — empty/UNKNOWN/BUDGET never READY.
    if (
      inv.sufficiency === "UNKNOWN" ||
      inv.sufficiency === "BUDGET_EXHAUSTED" ||

… [116 lines truncated — full file on disk projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts]

```

**mandate-applicability.ts** (tête + statut) :

```typescript
/**
 * C19/C20 — current applicability of a READY technical mandate.
 * Historical READY status is preserved; effect paths must refuse when
 * cognitive filiation, investigation, or determining D4 dependencies
 * are no longer exact/current.
 */

import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export type MandateApplicability = {
  ok: true;
  contractId: string;
  workId: string;
  revision: number;
  fingerprint: string;
} | {
  ok: false;
  reason: string;
};

/**
 * C20 — revalidate determining D4 dependencies without requiring a cognitive bump.
 * A newer AVAILABLE revision on a CONSULTED document invalidates the mandate.
 */
async function assessDeterminingD4Dependencies(input: {
  pilotId: string;
  preparationId: string;
  sources: Array<{
    kind: string;
    ref: string;
    versionOrSha?: string | null;
    coverage: string;
  }>;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const determining = input.sources.filter(
    (s) =>
      s.kind === "D4" &&
      (s.coverage === "CONSULTED" || s.coverage === "VERIFIED") &&
      Boolean(s.ref?.trim()),
  );
  for (const src of determining) {
    const ref = src.ref.trim();
    // ref may be documentId, revisionId, "documentId@revisionId",
    // or prefixed forms used in investigation journals ("document:doc_…").
    let documentId: string | null = null;
    let revisionId: string | null = null;
    // Accepted shapes (tool journal + legacy):
    //   doc_… | drev_…
    //   document:doc_…@revision:drev_… | document:doc_…@drev_…
    //   document:doc_…/revision:drev_…  (d4-read-tools journal)
    //   d4:doc_…
    let stripped = ref.trim();
    stripped = stripped.replace(/^d4:/i, "").trim();
    const slashRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)\/(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    const atRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)@(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    if (slashRev) {
      documentId = slashRev[1];
      revisionId = slashRev[2];
    } else if (atRev) {
      documentId = atRev[1];
      revisionId = atRev[2];
    } else {
      stripped = stripped

… [258 lines truncated — full file on disk projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts]

```

### 8.8 CursorRealizationSurface — confirmYes / resume AUTHORIZED

Fichier long (754 lignes) — sections critiques présentes sur disque DIRTY. Diff utile : auto-dispatch fallback, `resumedAuthorizedRef`, poll DISPATCHED, openBilan reload si dossier en cours.  
Chemin : `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx`

### 8.9 Restitution avis resume

`cursor-autonomous-restitution.ts` — branche `COGNITIVE_AVIS_RESUME_FROM_TECHNICAL_COMPLETE` (DIRTY, ~L835–927). Fichier 1698 lignes sur disque.

---

## 9. ENV / versioning / autorité

- ENV-01 DEV only `http://127.0.0.1:3100` — **aucun** effet public
- PostgreSQL DEV :5433 (qualify-check)
- Fournisseurs : Nora gpt-6.2-sol LIVE ; Cursor SDK LIVE FileCredentialStore ; Git local REAL workspace test ; GitHub REAL read-only (souvent indisponible UI)
- Product versioning : NO RELEASE ; candidate NOT AVAILABLE ; `product-version.ts` préservé
- Push produit : **NONE** ; exception handoff L3 ci-dessous

---

## 10. Rapport final template v2.6 §9.1

| Item | Résultat |
|---|---|
| État final DEV | Serveur qualify owned `wh16LAR_5NCCh-Q_7FF2t` LIVE workspace director-app |
| Scénario directeur | **PARTIEL** — R1 bout-en-bout prouvé ; R2 non |
| 1re réalisation | **PROUVÉE** LIVE/BROWSER/REAL git workspace |
| Continuité | **PARTIELLE** (référence dossier + recalls ; READY R2 échoue) |
| 2e réalisation | **NON DÉMONTRÉE** |
| Variantes dégradées | Suites unit/PG existantes ; pas de campagne M4 LIVE exhaustive cette passe |
| Corrections | qualify tooling ; D6 atomic dispatch ; avis resume ; OPEN READY ; budget qualify |
| Écarts ouverts | R2 READY ; isolated verify ; WEB positif systématique ; F2 ; M4 LIVE exhaustif |
| Décision Morris | Arbitrage LOT 3 + isolation D8 |

**Verdict DEV :** BEHAVIOR PROVEN  
**Verdict ML5 LOT 3 :** NOT READY  
**Gate :** revue ChatGPT → Morris

---

## 11. Handoff L3

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Message : `docs(review-handoff): publish Next ML5 C24 integrated operational qualification`
- Remote avant : `d8820bd76fbb279aed5988c76701fc765b960705`
- Produit : aucun commit/push

---

*Fin Review Pack FULL C24 integrated operational — capital C1–C24 DIRTY préservé.*
