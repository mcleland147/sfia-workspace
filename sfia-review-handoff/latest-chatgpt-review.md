# SFIA Studio Next — ML3 Corrective Delivery Review Pack (FULL)

## 1. Date / heure
- Local: `2026-11-06 13:33:41 CET`
- UTC: `2026-11-06T12:33:41Z`
- Cycle: Cursor R5/ML3 corrective F01–F08 + T01–T04
- Typologie: INC · Profil: CRITICAL · Macro-lot: ML3 existant (aucun nouveau lot)

## 2. Objectif et GO Morris
Corriger et qualifier le delivery ML3 existant (candidat local dirty) pour fournir au Pilote une capacité cohérente de pilotage et de décision (GO naturel, trajectoire, cycles, méthode, décisions, restrictions, reprise, réconciliation, CKI approuvé, fil Nora unique).

**GO Morris:** CORRECTIFS ML3 — 2026-11-06. Acceptation du cycle ≠ recette Morris, merge, STABLE, ADOPTED.

**Interdits respectés:** pas de commit/push/PR projet ; pas de RECETTE ML3 ; pas de LIVE Nora ; pas de force push/reset/clean ; pas de migration RECETTE ; schema reste `007`.

## 3. Git Truth Check

### Initial / Final (identique pour HEAD — candidat local dirty)
| Champ | Valeur |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| Root Next | `projects/sfia-studio-next/` |
| Branche | `sfia/next-pilotage-decisions-delivery` |
| HEAD | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| origin/main | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Match attendu | OUI (`7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`) |
| Remote delivery branch | AUCUNE attendue / non créée |

### Worktrees
```
/Users/morris/Projects/sfia-workspace                                                   7f1f41c3 [sfia/next-pilotage-decisions-delivery]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              a677b9d3 [sfia/review-handoff]
/Users/morris/Projects/sfia-studio-next-recette-ml1-c3                                  0db58be8 (detached HEAD)
/Users/morris/Projects/sfia-studio-next-recette-ml2-pr659                               54fc4e9c (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-delivery-p6-she-execute                           f1fc1af4 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-positive-admission-r24            c683d761 [docs/akg-m5-abd-positive-admission-r24]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-postmerge-truth-sync-01           cd2020c8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0                                 90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync            241335ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s1-post-merge-roadmap-sync         266459c4 [docs/akg-m5-l3-s1-post-merge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current           f884dda1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization     cf940d84 [docs/akg-m5-l3s2-r24-postmerge-capitalization]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync       6e60d839 [docs/akg-m5-nap-option-c-c14-r24-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-ux-630-postmerge-truth-sync       979a33ad [docs/akg-m5-nap-ux-630-postmerge-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-postmerge-convergence-p0              3a6b5e82 [docs/akg-m5-postmerge-convergence-p0]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-target-journey-requalification        80cae2f1 [docs/akg-m5-target-journey-requalification]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01                     485ec3cb [feat/akg-m5-ep-s2-08-proof-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l1-a09                                0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1                                 d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1-o01                             90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded         cdc9909d [feat/akg-m5-l2-d2-activation-prep-bounded]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover                4647983a [feat/akg-m5-l2-d2-local-oa-cutover]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration         de1fa7ae [feat/akg-m5-l3-s1-generic-det-integration]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity        73f0166c [feat/akg-m5-l3-s2-generic-proof-continuity]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01     b0ce8413 [feat/akg-m5-l3s2-orion-nora-coherence-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01             32207a38 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr              1c3a8d9e [feat/akg-m5-nora-adaptive-presentation]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01           e37d3969 [feat/akg-m5-nap-test16-coverage-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation            1c3a8d9e (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write  ffc033a7 [feat/akg-m5-remove-repository-binding-docs-write]
/Users/morris/Projects/sfia-workspace-l1-a09-delivery                                   6176a9d3 [feat/akg-m5-l1-a09-audit-port-decoupling]
/Users/morris/Projects/sfia-workspace-p6-she-greenfield-hqa-c9abdbc3                    c9abdbc3 (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020                     7dd49ecd (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01                  cd2020c8 (detached HEAD)
```

### Status porcelain (final)
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
?? projects/sfia-studio-next/cki/manifest.v0.2.0.json
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts
?? projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
?? projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql
?? projects/sfia-studio-next/web/src/domains/decisions/authority.ts
?? projects/sfia-studio-next/web/src/domains/decisions/service.ts
?? projects/sfia-studio-next/web/src/domains/decisions/types.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/service.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/types.ts
?? projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
```

### Diff name-status (tracked Product)
```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
M	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
```

### Untracked (extrait Product + SVG préexistants)
```
projects/sfia-studio-next/cki/manifest.v0.2.0.json
projects/sfia-studio-next/web/public/file.svg
projects/sfia-studio-next/web/public/globe.svg
projects/sfia-studio-next/web/public/next.svg
projects/sfia-studio-next/web/public/vercel.svg
projects/sfia-studio-next/web/public/window.svg
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts
projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql
projects/sfia-studio-next/web/src/domains/decisions/authority.ts
projects/sfia-studio-next/web/src/domains/decisions/service.ts
projects/sfia-studio-next/web/src/domains/decisions/types.ts
projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts
projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
projects/sfia-studio-next/web/src/domains/pilotage/service.ts
projects/sfia-studio-next/web/src/domains/pilotage/types.ts
projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
```

### Empreintes critiques — baseline Critical Review → après correctifs
| Fichier | Baseline (review) | Après correctifs | Explication |
| --- | --- | --- | --- |
| command-runner.ts | `644080776955ccf0b9b3a19e7a926f9bb6e21bc7069f97afb4078b0b65d0957d` | `16933885c47991efc9f27be66211b55c210cfd57a92136b9e19d3cb0d764d2cf` | actInstanceId dans fingerprint/sourceActionKey ; CONTRADICTION bornée ; passage target context restrictions |
| pilotage/service.ts | `c72a3498855f2facba2ca9cc2d573f871d5b532af8da574bc9e8de659145c648` | `08987aae31fe7d00a4254a34990cf833f4903134543b6591fbb9312a71c491ba` | GO naturel EXPLICIT_INTERACTION ; USER_MESSAGE status COMPLETE ; REVISE_DECISION ; reconcileByClientKey |
| PilotagePanel.tsx | `63319c6f1607eabf1ec1504713af5c98a8ed43dcc4018f218c59ff66fe77e36f` | `11e887e869ed776734bb2937a2d94f0c4d0f929717b43673c585a553ba855fcd` | clé/actInstanceId stables ; UNKNOWN+reconcile ; journal `state` ; UX F08 |
| cki-resolve.ts | (pré-correctif local) | `0b68fdccd0d882e65b71af948d5a6b621fbb1707751940f6e72669a5cdffe9e2` | manifeste approuvé v0.2.0 |
| authority.ts | (pré-correctif local) | `0c1c92d5200af895b0efc0f679fcb3d29dfe304694ab0f75fa96e19c020ec94d` | targetRef CYCLE/PILOTAGE scopé |
| manifest.v0.2.0.json | N/A (nouveau) | `49250f756908b864980d3ce739a37755f944495703b651e006d663223de87294` | inventaire SHA-256 15 spécialités |

**Candidat initial identifiable:** OUI — fichiers Product ML3 dirty + untracked préservés ; SVG public préexistants non touchés ; HEAD inchangé.

## 4. Sources lues (réf.)
- Processus: `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` ; template v2.6
- SEF/roadmap/ENV-01/versioning (main@7f1f41c)
- ML3 conception: `construction/pilotage-et-decisions/` (cadrage, spec v0.4 #660, tracabilité, revue)
- R2 D5/D6 ; R3 UX lot B ; R4 §5.5 B01–B18
- CKI corpus VALIDATED CONTENT v0.2.0
- Review handoffs: `a677b9d3` / blob `3aefb5ca` ; `2ee8c705`
- Candidat local ML3 intégral (pilotage/, decisions/, PilotagePanel, APIs, tests)

## 5. Fichiers créés et modifiés
### Créés (Product correctifs / ML3)
- `cki/manifest.v0.2.0.json`
- `web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts`
- (déjà candidats ML3 non trackés avant correctifs, enrichis): PilotagePanel, domains/pilotage/*, domains/decisions/*, APIs pilotage/decisions, migration 007, tests unit/pg/e2e

### Modifiés (tracked)
- `construction/delivery-history.md`
- `construction/pilotage-et-decisions/specification-technique.md` (§12 correctif)
- `construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md` (appendice B01–B18)
- `web/scripts/db-migrate.sh`
- `web/src/app/api/projects/[projectId]/route.ts`
- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/db/schema.ts`
- `web/src/domains/conversation/nora-adapter.ts` (T01 DELIVERED)
- `web/src/domains/conversation/service.ts`
- `web/src/domains/preparation/project-context.ts`
- `web/tests/integration/migrations-fresh.pg.test.ts`
- `web/tests/unit/nora-adapter-corrective.test.ts`
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)

## 6. Blast radius et responsabilités
| Zone | Impact | Responsabilité |
| --- | --- | --- |
| D5 pilotage | command-runner, service, cki-resolve, types, APIs | vérité cycle/méthode/CKI ; idempotence |
| D6 decisions | authority, service, types, journal API | restrictions ciblées ; revise ; journal state |
| D3 conversation | nora-adapter DELIVERED honesty ; nora-context usageRestricted | pas d'autorité décisionnelle |
| UX | PilotagePanel + project page tab | F01/F04/F08 |
| DB | schema 007 inchangé (pas de 008) | actInstanceId dans hash/fingerprint |
| CKI | manifeste v0.2.0 | pin strict |
| RECETTE/STABLE | AUCUN | préservés |

## 7. Contenu complet des fichiers créés (ou sections si volumineux)


### 7.1 `cki/manifest.v0.2.0.json` (complet)

```json
# FILE: cki/manifest.v0.2.0.json
{
  "version": "0.2.0",
  "specialties": [
    {
      "ckiId": "01-cadrage",
      "file": "01-cadrage.md",
      "version": "0.2.0",
      "sha256": "e8d7a0cbdf3c55b3a991945b336901b1d92172113d1384e62bf6a86f4ec7bff9"
    },
    {
      "ckiId": "02-conception-fonctionnelle",
      "file": "02-conception-fonctionnelle.md",
      "version": "0.2.0",
      "sha256": "663e2bd0f00fec3ae0f52bb580fd24dcfc769a9cd9a04bd05e8e694f5a57d292"
    },
    {
      "ckiId": "03-architecture-fonctionnelle",
      "file": "03-architecture-fonctionnelle.md",
      "version": "0.2.0",
      "sha256": "937bb2b52af6a1d2c16662a9c860526c59d53a0af054a993911884e05803d9b3"
    },
    {
      "ckiId": "04-ux-ui",
      "file": "04-ux-ui.md",
      "version": "0.2.0",
      "sha256": "ab7571d5dc7da094c4ec4dbb7647bef1b8d0435a8671a7d110bc45579e628030"
    },
    {
      "ckiId": "05-backlog-user-stories",
      "file": "05-backlog-user-stories.md",
      "version": "0.2.0",
      "sha256": "4b2636d8b6b82d1eb91de7e99914f616f70abe626a83b24f93b72f2a3e06622e"
    },
    {
      "ckiId": "06-architecture-technique",
      "file": "06-architecture-technique.md",
      "version": "0.2.0",
      "sha256": "8d07b5f4ab5c18ea184a39efb17a8b98a9bc79f884e93049271228f3b42c57ff"
    },
    {
      "ckiId": "07-integration-devops",
      "file": "07-integration-devops.md",
      "version": "0.2.0",
      "sha256": "260de6456a0baeda68156a9e506bb1847663235256ab8fc272db02adc22833e8"
    },
    {
      "ckiId": "08-delivery-implementation",
      "file": "08-delivery-implementation.md",
      "version": "0.2.0",
      "sha256": "e427432d6c9124eb936564c3b1fdc6ec760fc1f6bce082f4a662fa219b59e219"
    },
    {
      "ckiId": "09-qa-validation",
      "file": "09-qa-validation.md",
      "version": "0.2.0",
      "sha256": "02f51b97ecbd62ec621b8a8c0344525bb8e4eff761cb9cc03aa39d13280ebce7"
    },
    {
      "ckiId": "10-securite-rssi",
      "file": "10-securite-rssi.md",
      "version": "0.2.0",
      "sha256": "3ad89e906571dc184b0ee4a284c5b9d555108ebfebd0c196663caedb3d418edb"
    },
    {
      "ckiId": "11-deploiement-release",
      "file": "11-deploiement-release.md",
      "version": "0.2.0",
      "sha256": "b1e2625857d9b643a28372f4dff8e5dacf4c22828b262d0b3e29292009418c51"
    },
    {
      "ckiId": "12-observabilite-run-readiness",
      "file": "12-observabilite-run-readiness.md",
      "version": "0.2.0",
      "sha256": "ee9b8bedc9e39fbc039c9da2853d0dc7bb61f9270d6d49c7fe89cf619b95cb68"
    },
    {
      "ckiId": "13-pr-readiness",
      "file": "13-pr-readiness.md",
      "version": "0.2.0",
      "sha256": "2f75ee9ce71f531b4cf5c8b84fb1016b2d49f5b8acad042d66d4687b4e1d1727"
    },
    {
      "ckiId": "14-post-merge",
      "file": "14-post-merge.md",
      "version": "0.2.0",
      "sha256": "fae08d5fb13c51fadcdaf55252c78e750eeabfdfc6dffa5f1801477e124d6673"
    },
    {
      "ckiId": "15-capitalisation-rex",
      "file": "15-capitalisation-rex.md",
      "version": "0.2.0",
      "sha256": "208cbb007738a4d06d274a97500d9540dc3c0840c63a833340d372956eb645f4"
    }
  ]
}
```

### 7.2 API by-key route (complet)

```ts
# FILE: by-key/[clientCommandKey]/route.ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCommandByClientKey } from "@/domains/pilotage/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _: Request,
  ctx: { params: Promise<{ projectId: string; clientCommandKey: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, clientCommandKey } = await ctx.params;
    const result = await reconcileCommandByClientKey(
      session.pilotId,
      projectId,
      decodeURIComponent(clientCommandKey),
    );
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### 7.3 `authority.ts` (complet)

```ts
# FILE: domains/decisions/authority.ts
import type { AuthorityRestriction, AuthorityVerdict } from "@/domains/decisions/types";

const CYCLE_OPS = new Set(["OPEN_CYCLE", "CLOSE_CYCLE", "TRANSITION_CYCLE"]);
const METHOD_OPS = new Set(["CHOOSE_METHOD", "REPLACE_METHOD", "WITHDRAW_METHOD"]);
const TRAJECTORY_OPS = new Set(["RETAIN_TRAJECTORY"]);

function active(restrictions: AuthorityRestriction[]): AuthorityRestriction[] {
  return restrictions.filter((r) => r.status === "ACTIVE");
}

function matchesMethod(targetRef: string, methodRef: string | null | undefined): boolean {
  if (targetRef === "*") return true;
  const ref = (methodRef ?? "").trim().toLowerCase();
  if (!ref) return targetRef === "*";
  return targetRef.trim().toLowerCase() === ref;
}

function isGlobalTarget(targetRef: string | null | undefined): boolean {
  const value = (targetRef ?? "").trim();
  return value === "" || value === "*";
}

/** Case-insensitive match against a non-global restriction target. `*` and empty are global. */
function matchesScopedTarget(
  targetRef: string,
  candidates: Array<string | null | undefined>,
): boolean {
  if (isGlobalTarget(targetRef)) return true;
  const needle = targetRef.trim().toLowerCase();
  return candidates.some((candidate) => {
    const value = (candidate ?? "").trim().toLowerCase();
    return value.length > 0 && value !== "*" && value === needle;
  });
}

/**
 * Point-of-effect authority. A lifted restriction does not count.
 * METHOD_USE limits use in the projection; it does not erase the retained method
 * and it does not block a later governance act.
 * CYCLE_MUTATION / PILOTAGE_EFFECT: `*` or empty blocks every matching operation;
 * any other targetRef blocks only the cycle, method, or effect it names.
 * LIFT / REVOKE / APPLY / RECORD / REVISE / PROPOSE stay available so the pilot can govern.
 */
export function evaluateCurrentAuthority(input: {
  operation: string;
  restrictions: AuthorityRestriction[];
  methodRef?: string | null;
  cycleId?: string | null;
  cycleType?: string | null;
  effectTargetRef?: string | null;
}): AuthorityVerdict {
  const rows = active(input.restrictions);
  let usageRestricted = false;
  for (const r of rows) {
    if (r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, input.methodRef)) {
      usageRestricted = true;
    }
  }
  for (const r of rows) {
    if (
      r.targetKind === "CYCLE_MUTATION" &&
      CYCLE_OPS.has(input.operation) &&
      matchesScopedTarget(r.targetRef, [input.cycleId, input.cycleType])
    ) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Mutation de cycle restreinte",
      };
    }
    if (
      r.targetKind === "PILOTAGE_EFFECT" &&
      (CYCLE_OPS.has(input.operation) ||
        METHOD_OPS.has(input.operation) ||
        TRAJECTORY_OPS.has(input.operation)) &&
      matchesScopedTarget(r.targetRef, [
        input.effectTargetRef,
        input.cycleId,
        input.cycleType,
        input.methodRef,
      ])
    ) {
      return {
        allowed: false,
        usageRestricted,
        restrictionId: r.id,
        reason: "Effet de pilotage restreint",
      };
    }
  }
  return { allowed: true, usageRestricted };
}

/** Projection flag: retained method whose use is restricted. Absence is not a restriction. */
export function methodUsageRestricted(
  restrictions: AuthorityRestriction[],
  methodRef: string | null | undefined,
): boolean {
  if (!methodRef) return false;
  return active(restrictions).some(
    (r) => r.targetKind === "METHOD_USE" && matchesMethod(r.targetRef, methodRef),
  );
}
```

### 7.4 `types.ts` pilotage (complet)

```ts
# FILE: domains/pilotage/types.ts
import type { CkiAvailability } from "@/domains/pilotage/cki-resolve";
import type { CycleType } from "@/domains/pilotage/cki-resolve";

/** Internal command outcomes. PARTIAL is intentionally absent: CLOSE+OPEN share one commit. */
export const COMMAND_STATUSES = [
  "APPLIED",
  "ALREADY_APPLIED",
  "REJECTED",
  "CONFLICT",
  "UNKNOWN",
] as const;

export type CommandStatus = (typeof COMMAND_STATUSES)[number];

export const PILOTAGE_OPERATIONS = [
  "PROPOSE_TRAJECTORY",
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
  "REVISE_DECISION",
] as const;

export type PilotageOperation = (typeof PILOTAGE_OPERATIONS)[number];

export const SOURCE_KINDS = ["USER_MESSAGE", "EXPLICIT_INTERACTION", "COGNITIVE_PROPOSAL"] as const;

export type SourceKind = (typeof SOURCE_KINDS)[number];

export type CommandEffectView = {
  effectKind: string;
  targetRef: string;
  outcome: string;
  ordinal: number;
};

export type CommandResult = {
  status: CommandStatus;
  commandId: string | null;
  projectId: string;
  revision: number | null;
  decisionId: string | null;
  effects: CommandEffectView[];
  reason?: string;
  reasonCode?: string;
};

export type PilotageRequestBody = {
  clientCommandKey?: string;
  expectedRevision?: number;
  operation?: string;
  utterance?: string;
  sourceKind?: string;
  sourceRef?: string;
  objective?: string;
  cycleType?: string;
  cycleId?: string;
  toCycleType?: string;
  orientation?: string;
  trajectoryRevisionId?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  restrictionId?: string;
  targetKind?: string;
  targetRef?: string;
  statement?: string;
  balanceNote?: string;
  /** Stable id of one human gesture. Reused on retry; a new gesture sends a new id. */
  actInstanceId?: string;
  /** Exact decision object. Empty does not participate in contradiction matching. */
  objectRef?: string;
};

export type ClassifiedCommand = {
  operation: PilotageOperation;
  sourceActionKey: string;
  sourceKind: SourceKind;
  sourceRef: string;
  objective: string;
  cycleType: CycleType | null;
  cycleId: string | null;
  toCycleType: CycleType | null;
  orientation: string;
  trajectoryRevisionId: string | null;
  methodRef: string;
  methodVersion: string;
  decisionId: string | null;
  restrictionId: string | null;
  targetKind: string;
  targetRef: string;
  statement: string;
  balanceNote: string;
  actInstanceId: string;
  objectRef: string;
};

export type TrajectoryView = {
  id: string;
  revisionNumber: number;
  status: string;
  orientation: string;
  decisionId: string | null;
} | null;

export type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: TrajectoryView;
    proposed: TrajectoryView;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    revision: number;
    cki: {
      ckiId: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
      manifestRef: string | null;
      pinOrigin: string | null;
      availability: CkiAvailability;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        /** Set when usageRestricted: the retained method is not fully applicable. */
        usageNote: string | null;
        methodRef: string;
        methodVersion: string;
        decisionId: string;
        applicationId: string;
        scope: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

export function pilotageCommandHttpStatus(result: CommandResult): number {
  if (result.status === "CONFLICT") return 409;
  if (
    result.status === "REJECTED" &&
    (result.reasonCode === "AMBIGUOUS" || result.reasonCode === "INVALID")
  ) {
    return 400;
  }
  if (result.status === "UNKNOWN") return 503;
  return 200;
}
```

### 7.5 `decisions/types.ts` (complet)

```ts
# FILE: domains/decisions/types.ts
/** D6 decision kinds stored on human_decisions.kind. */
export const DECISION_KINDS = [
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
  "REVISE_DECISION",
] as const;

export type DecisionKind = (typeof DECISION_KINDS)[number];

export type DecisionState = "APPLICABLE" | "REVISED" | "REVOKED" | "SUPERSEDED";

/** Restriction target kinds understood by evaluateCurrentAuthority. */
export const RESTRICTION_TARGETS = ["CYCLE_MUTATION", "METHOD_USE", "PILOTAGE_EFFECT"] as const;

export type RestrictionTargetKind = (typeof RESTRICTION_TARGETS)[number];

export type AuthorityRestriction = {
  id: string;
  targetKind: string;
  targetRef: string;
  status: string;
};

export type AuthorityVerdict = {
  allowed: boolean;
  usageRestricted: boolean;
  restrictionId?: string;
  reason?: string;
};
```

### 7.6 Justification volumétrique
Les fichiers suivants dépassent le seuil de recopie intégrale utile dans le handoff ; ChatGPT doit examiner le worktree local dirty. Sections critiques fournies en §8 :
- `service.ts` (~1218 lignes)
- `command-runner.ts` (~581 lignes)
- `PilotagePanel.tsx` (~782 lignes)
- `cki-resolve.ts` (~247 lignes)
- tests PG/e2e

## 8. Sections / diffs utiles des fichiers modifiés


### 8.1 classifyExplicitInteraction + USER_MESSAGE status (service.ts)

```ts
300|/** Statuses that may authorize a USER_MESSAGE GO. Others stay non-authoritative. */
301|const USER_MESSAGE_GO_STATUSES = new Set(["COMPLETE"]);
302|
303|async function loadUserMessage(tx: DbTx, projectId: string, pilotId: string, messageId: string) {
304|  return (
305|    await tx
306|      .select({
307|        id: messages.id,
308|        role: messages.role,
309|        status: messages.status,
310|        content: messages.content,
311|        projectId: conversations.projectId,
312|        ownerPilotId: conversations.ownerPilotId,
313|      })
314|      .from(messages)
315|      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
316|      .where(eq(messages.id, messageId))
317|      .limit(1)
318|  )[0];
319|}
320|
321|function userMessageAuthorizes(message: {
322|  role: string;
323|  status: string;
324|  projectId: string | null;
325|  ownerPilotId: string;
326|}, projectId: string, pilotId: string): boolean {
327|  return (
328|    message.role.trim().toUpperCase() === "USER" &&
329|    USER_MESSAGE_GO_STATUSES.has(message.status) &&
330|    message.projectId === projectId &&
331|    message.ownerPilotId === pilotId
332|  );
333|}
334|
335|function fromClearIntent(
336|  sourceKind: SourceKind,
337|  sourceRef: string,
338|  qualified: ClearIntent,
339|  body: PilotageRequestBody,
340|): ClassifyResult {
341|  const cycleType =
342|    qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
343|  const command: ClassifiedCommand = {
344|    operation: qualified.operation,
345|    sourceKind,
346|    sourceRef,
347|    objective: (body.objective ?? qualified.objective ?? "").trim() || (cycleType ? `Cycle ${cycleType}` : ""),
348|    cycleType,
349|    cycleId: body.cycleId ?? null,
350|    toCycleType: qualified.toCycleType ?? null,
351|    orientation: (body.orientation ?? "").trim(),
352|    trajectoryRevisionId: body.trajectoryRevisionId ?? null,
353|    methodRef: (qualified.methodRef ?? body.methodRef ?? "").trim(),
354|    methodVersion: (qualified.methodVersion || body.methodVersion || "").trim(),
355|    decisionId: body.decisionId ?? null,
356|    restrictionId: body.restrictionId ?? null,
357|    targetKind: body.targetKind ?? "",
358|    targetRef: (body.targetRef ?? "*").trim() || "*",
359|    statement: (body.statement ?? qualified.objective ?? "").trim().slice(0, 500),
360|    balanceNote: (body.balanceNote ?? "").trim(),
361|    actInstanceId: (body.actInstanceId ?? "").trim(),
362|    objectRef: (body.objectRef ?? "").trim(),
363|    sourceActionKey: "",
364|  };
365|  if (
366|    (command.operation === "CHOOSE_METHOD" || command.operation === "REPLACE_METHOD") &&
367|    (!command.methodRef || !command.methodVersion)
368|  ) {
369|    return {
370|      ok: false,
371|      reasonCode: "INVALID",
372|      reason: "Version de méthode requise",
373|      sourceActionKey: buildSourceActionKey(command),
374|    };
375|  }
376|  if ((command.operation === "OPEN_CYCLE" || command.operation === "TRANSITION_CYCLE") && !command.cycleType && command.operation === "OPEN_CYCLE") {
377|    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
378|  }
379|  if (command.operation === "TRANSITION_CYCLE" && (!command.cycleType || !command.toCycleType)) {
380|    return { ok: false, reasonCode: "INVALID", reason: "Transition incomplète", sourceActionKey: "REJECT|INVALID|transition" };
381|  }
382|  command.sourceActionKey = buildSourceActionKey(command);
383|  return { ok: true, command };
384|}
385|
386|async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<ClassifyResult> {
387|  const body = input.body;
388|  const sourceKind = body.sourceKind ?? "";
389|  const sourceRef = body.sourceRef?.trim() ?? "";
390|  if (!(SOURCE_KINDS as readonly string[]).includes(sourceKind)) {
391|    return {
392|      ok: false,
393|      reasonCode: "SOURCE",
394|      reason: "Source non autorisante",
395|      sourceActionKey: `REJECT|SOURCE|${sourceKind}`,
396|    };
397|  }
398|
399|  if (sourceKind === "USER_MESSAGE") {
400|    const message = await loadUserMessage(tx, input.projectId, input.pilotId, sourceRef);
401|    if (!message || !userMessageAuthorizes(message, input.projectId, input.pilotId)) {
402|      return {
403|        ok: false,
404|        reasonCode: "SOURCE",
405|        reason: "Message utilisateur non vérifié pour ce projet",
406|        sourceActionKey: `REJECT|SOURCE|${sourceRef}`,
407|      };
408|    }
409|    const utterance = (body.utterance ?? "").trim();
410|    if (utterance && utterance !== message.content.trim()) {
411|      return {
412|        ok: false,
413|        reasonCode: "SOURCE",
414|        reason: "L'énoncé ne correspond pas au message source",
415|        sourceActionKey: "REJECT|SOURCE|mismatch",
416|      };
417|    }
418|    const qualified = qualifyPilotageIntent(utterance || message.content);
419|    if (qualified.clarity !== "CLEAR") {
420|      const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
421|      return {
422|        ok: false,
423|        reasonCode,
424|        reason: qualified.reason,
425|        sourceActionKey: `REJECT|${reasonCode}`,
426|      };
427|    }
428|    if (body.operation && body.operation !== qualified.operation) {
429|      return {
430|        ok: false,
431|        reasonCode: "AMBIGUOUS",
432|        reason: "L'opération ne correspond pas à l'énoncé",
433|        sourceActionKey: `REJECT|MISMATCH|${body.operation}`,
434|      };
435|    }
436|    return fromClearIntent(sourceKind, sourceRef, qualified, body);
437|  }
438|
439|  if (sourceKind === "COGNITIVE_PROPOSAL" && body.operation !== "PROPOSE_TRAJECTORY") {
440|    return {
441|      ok: false,
442|      reasonCode: "SOURCE",
443|      reason: "Une proposition cognitive n'est pas un GO",
444|      sourceActionKey: "REJECT|SOURCE|cognitive",
445|    };
446|  }
447|
448|  const explicitNatural = classifyExplicitInteraction(body);
449|  if (explicitNatural) return explicitNatural;
450|
451|  if (!body.operation || !(PILOTAGE_OPERATIONS as readonly string[]).includes(body.operation)) {
452|    return {
453|      ok: false,
454|      reasonCode: "INVALID",
455|      reason: "Opération inconnue",
456|      sourceActionKey: `REJECT|INVALID|${body.operation ?? ""}`,
457|    };
458|  }
459|
460|  const operation = body.operation as PilotageOperation;
```

```ts
1040| * EXPLICIT_INTERACTION with an utterance and no operation follows the same
1041| * qualifier as USER_MESSAGE. A present operation stays on the structured path.
1042| * Returns null when this body is not an utterance-only explicit GO.
1043| */
1044|export function classifyExplicitInteraction(body: PilotageRequestBody): ClassifyResult | null {
1045|  if (body.sourceKind !== "EXPLICIT_INTERACTION") return null;
1046|  if ((body.operation ?? "").trim()) return null;
1047|  const sourceRef = body.sourceRef?.trim() ?? "";
1048|  const utterance = (body.utterance ?? "").trim();
1049|  if (!utterance) {
1050|    return {
1051|      ok: false,
1052|      reasonCode: "INVALID",
1053|      reason: "Opération inconnue",
1054|      sourceActionKey: "REJECT|INVALID|",
1055|    };
1056|  }
1057|  const qualified = qualifyPilotageIntent(utterance);
1058|  if (qualified.clarity !== "CLEAR") {
1059|    const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
1060|    return {
1061|      ok: false,
1062|      reasonCode,
1063|      reason: qualified.reason,
1064|      sourceActionKey: `REJECT|${reasonCode}`,
1065|    };
1066|  }
1067|  return fromClearIntent("EXPLICIT_INTERACTION", sourceRef, qualified, body);
1068|}
```

### 8.2 REVISE_DECISION mutate (service.ts)

```ts
940|    const revision = await bumpRevision(tx, projectId);
941|    return {
942|      kind: "APPLIED",
943|      decisionId,
944|      revision,
945|      effects: [{ effectKind: "LIFT_RESTRICTION", targetRef: command.restrictionId }],
946|    };
947|  }
948|
949|  if (command.operation === "REVISE_DECISION") {
950|    if (!command.decisionId || !command.statement.trim()) {
951|      return rejected("INVALID", "Décision et énoncé de révision requis");
952|    }
953|    const target = (
954|      await tx
955|        .select()
956|        .from(humanDecisions)
957|        .where(and(eq(humanDecisions.id, command.decisionId), eq(humanDecisions.projectId, projectId)))
958|        .limit(1)
959|    )[0];
960|    if (!target) return rejected("INVALID_TARGET", "Décision introuvable dans ce projet");
961|    if (target.state !== "APPLICABLE") {
962|      return rejected("NOT_APPLICABLE", "Seule une décision applicable se révise");
963|    }
964|    await markDecisionState(tx, target.id, "REVISED");
965|    const decisionId = await insertHumanDecision(tx, {
966|      projectId,
967|      pilotId,
968|      sourceKind: command.sourceKind,
969|      sourceRef: command.sourceRef,
970|      kind: target.kind,
971|      objectRef: target.objectRef,
972|      scope: target.scope,
973|      statement: command.statement,
974|      supersedesDecisionId: target.id,
975|    });
976|    const revision = await bumpRevision(tx, projectId);
977|    return {
978|      kind: "APPLIED",
979|      decisionId,
980|      revision,
981|      effects: [{ effectKind: "REVISE_DECISION", targetRef: decisionId, detail: { revised: target.id } }],
982|    };
983|  }
984|
985|  if (command.operation === "RECORD_DECISION") {
986|    const decisionId = await insertHumanDecision(tx, {
987|      projectId,
988|      pilotId,
989|      sourceKind: command.sourceKind,
990|      sourceRef: command.sourceRef,
991|      kind: "RECORD_DECISION",
992|      objectRef: command.objectRef || command.decisionId || "",
993|      statement: command.statement || command.objective,
994|    });
995|    const revision = await bumpRevision(tx, projectId);
996|    return {
997|      kind: "APPLIED",
998|      decisionId,
999|      revision,
1000|      effects: [{ effectKind: "RECORD_DECISION", targetRef: decisionId }],
```

### 8.3 buildSourceActionKey + CONTRADICTION (command-runner.ts)

```ts
60|  if (!e || typeof e !== "object") return undefined;
61|  const code = (e as { code?: unknown }).code;
62|  if (typeof code === "string" && /^[0-9A-Z]{5}$/.test(code)) return code;
63|  if ("cause" in e) return pgCode((e as { cause?: unknown }).cause);
64|  return undefined;
65|}
66|
67|export function commandFingerprint(input: ClientEnvelope): string {
68|  const b = input.body;
69|  const canonical = JSON.stringify({
70|    balanceNote: (b.balanceNote ?? "").trim(),
71|    cycleId: b.cycleId ?? "",
72|    cycleType: b.cycleType ?? "",
73|    decisionId: b.decisionId ?? "",
74|    expectedRevision: b.expectedRevision,
75|    methodRef: (b.methodRef ?? "").trim(),
76|    methodVersion: (b.methodVersion ?? "").trim(),
77|    objective: (b.objective ?? "").trim(),
78|    operation: b.operation ?? "",
79|    orientation: (b.orientation ?? "").trim(),
80|    projectId: input.projectId,
81|    restrictionId: b.restrictionId ?? "",
82|    sourceKind: b.sourceKind ?? "",
83|    sourceRef: b.sourceRef ?? "",
84|    statement: (b.statement ?? "").trim(),
85|    targetKind: b.targetKind ?? "",
86|    targetRef: (b.targetRef ?? "").trim(),
87|    toCycleType: b.toCycleType ?? "",
88|    trajectoryRevisionId: b.trajectoryRevisionId ?? "",
89|    utterance: (b.utterance ?? "").trim(),
90|    actInstanceId: (b.actInstanceId ?? "").trim(),
91|    objectRef: (b.objectRef ?? "").trim(),
92|  });
93|  return createHash("sha256").update(canonical).digest("hex");
94|}
95|
96|export function buildSourceActionKey(input: {
97|  operation: string;
98|  cycleType?: string | null;
99|  toCycleType?: string | null;
100|  methodRef?: string | null;
101|  methodVersion?: string | null;
102|  decisionId?: string | null;
103|  trajectoryRevisionId?: string | null;
104|  targetKind?: string | null;
105|  targetRef?: string | null;
106|  restrictionId?: string | null;
107|  actInstanceId?: string | null;
108|}): string {
109|  const canonical = [
110|    input.operation,
111|    input.cycleType ?? "",
112|    input.toCycleType ?? "",
113|    (input.methodRef ?? "").trim().toLowerCase(),
114|    (input.methodVersion ?? "").trim(),
115|    input.decisionId ?? "",
116|    input.trajectoryRevisionId ?? "",
117|    input.targetKind ?? "",
118|    (input.targetRef ?? "").trim().toLowerCase(),
119|    input.restrictionId ?? "",
120|    (input.actInstanceId ?? "").trim(),
121|  ].join("|");
122|  return createHash("sha256").update(canonical).digest("hex");
123|}
124|
125|function parseResultJson(raw: string): { reason?: string; reasonCode?: string } {
126|  try {
127|    const value = JSON.parse(raw) as { reason?: string; reasonCode?: string };
128|    return value ?? {};
129|  } catch {
130|    return {};
131|  }
132|}
133|
134|export function toCommandResult(
135|  cmd: CommandRow,
136|  effects: EffectRow[],
137|  mode: "replay" | "stored",
138|): CommandResult {
139|  const extra = parseResultJson(cmd.resultJson);
140|  const status = mode === "replay" && cmd.status === "APPLIED" ? "ALREADY_APPLIED" : cmd.status;
141|  return {
142|    status: status === "APPLIED" || status === "REJECTED" || status === "ALREADY_APPLIED" ? status : "UNKNOWN",
143|    commandId: cmd.id,
144|    projectId: cmd.projectId,
145|    revision: cmd.stateRevision,
146|    decisionId: cmd.decisionId,
147|    effects: effects.map((e) => ({
148|      effectKind: e.effectKind,
149|      targetRef: e.targetRef,
150|      outcome: e.outcome,
151|      ordinal: e.ordinal,
152|    })),
153|    reason: extra.reason,
154|    reasonCode: extra.reasonCode,
155|  };
156|}
157|
158|function bare(input: ClientEnvelope, patch: Partial<CommandResult>): CommandResult {
159|  return {
160|    status: "CONFLICT",
161|    commandId: null,
162|    projectId: input.projectId,
163|    revision: null,
164|    decisionId: null,
165|    effects: [],
166|    ...patch,
167|  };
168|}
169|
170|async function loadEffects(tx: DbTx | typeof db, commandId: string): Promise<EffectRow[]> {
171|  return tx
172|    .select()
173|    .from(businessCommandEffects)
174|    .where(eq(businessCommandEffects.commandId, commandId))
175|    .orderBy(asc(businessCommandEffects.ordinal));
176|}
177|
178|async function findByKey(tx: DbTx | typeof db, input: ClientEnvelope) {
179|  return (
180|    await tx
181|      .select()
182|      .from(businessCommands)
183|      .where(
184|        and(
185|          eq(businessCommands.projectId, input.projectId),
186|          eq(businessCommands.actorPilotId, input.pilotId),
187|          eq(businessCommands.clientCommandKey, input.body.clientCommandKey ?? ""),
188|        ),
189|      )
190|      .limit(1)
191|  )[0];
192|}
193|
194|const DEPENDENT_EFFECTS = new Set([
195|  "OPEN_CYCLE",
196|  "CLOSE_CYCLE",
197|  "TRANSITION_CYCLE",
198|  "CHOOSE_METHOD",
199|  "REPLACE_METHOD",
200|  "WITHDRAW_METHOD",
201|  "RETAIN_TRAJECTORY",
202|]);
203|
204|/** Exact objectRef + kind + differing statements. No lexical or NLP comparison. */
205|async function hasExactContradiction(tx: DbTx, projectId: string): Promise<boolean> {
206|  const rows = await tx
207|    .select({
208|      kind: humanDecisions.kind,
209|      objectRef: humanDecisions.objectRef,
210|      statement: humanDecisions.statement,
211|    })
212|    .from(humanDecisions)
213|    .where(and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.state, "APPLICABLE")));
214|  const groups = new Map<string, Set<string>>();
215|  for (const row of rows) {
216|    const objectRef = row.objectRef.trim();
217|    if (!objectRef) continue;
218|    const key = `${row.kind}\u0000${objectRef}`;
219|    const bucket = groups.get(key) ?? new Set<string>();
220|    bucket.add(row.statement.trim());
221|    groups.set(key, bucket);
222|    if (bucket.size > 1) return true;
223|  }
224|  return false;
225|}
226|
227|async function findByActionKey(tx: DbTx, projectId: string, actionKey: string) {
228|  return (
229|    await tx
230|      .select()
```

```ts
480|        effectTargetRef:
481|          classified.command.trajectoryRevisionId ||
482|          classified.command.decisionId ||
483|          classified.command.methodRef ||
484|          classified.command.targetRef,
485|      });
486|      if (!verdict.allowed) {
487|        return insertCommand(tx, input, fingerprint, {
488|          sourceKind: classified.command.sourceKind,
489|          sourceRef: classified.command.sourceRef,
490|          sourceActionKey: classified.command.sourceActionKey,
491|          operation: classified.command.operation,
492|          status: "REJECTED",
493|          stateRevision: revision,
494|          decisionId: null,
495|          reason: verdict.reason,
496|          reasonCode: "RESTRICTION",
497|          effects: [],
498|        });
499|      }
500|
501|      if (
502|        DEPENDENT_EFFECTS.has(classified.command.operation) &&
503|        (await hasExactContradiction(tx, input.projectId))
504|      ) {
505|        return bare(input, {
506|          status: "CONFLICT",
507|          revision,
508|          reason: "Décisions applicables contradictoires sur le même objet",
509|          reasonCode: "CONTRADICTION",
510|        });
511|      }
512|
513|      const mutated = await handlers.mutate(tx, classified.command);
514|      if (mutated.kind === "CONFLICT") {
515|        return bare(input, {
516|          status: "CONFLICT",
517|          revision,
518|          reason: mutated.reason,
519|          reasonCode: mutated.reasonCode,
520|        });
521|      }
522|      if (mutated.kind === "REJECTED") {
523|        if (!mutated.persist) {
524|          return bare(input, {
525|            status: "REJECTED",
526|            revision,
527|            reason: mutated.reason,
528|            reasonCode: mutated.reasonCode,
529|          });
530|        }
```

### 8.4 CKI manifest pin (cki-resolve.ts)

```ts
115|/** Approved specialty catalogue. Missing or unreadable manifest → no pin. */
116|export function loadCkiManifest(dir = resolveCkiDirectory()): CkiManifest | null {
117|  const path = resolve(dir, CKI_MANIFEST_FILE);
118|  if (!existsSync(path)) return null;
119|  try {
120|    const parsed = JSON.parse(readFileSync(path, "utf8")) as CkiManifest;
121|    if (!parsed || parsed.version !== CKI_CORPUS_VERSION || !Array.isArray(parsed.specialties)) return null;
122|    return parsed;
123|  } catch {
124|    return null;
125|  }
126|}
127|
128|function approvedEntry(ckiId: string, version: string | null): CkiManifestEntry | null {
129|  if (!version) return null;
130|  const manifest = loadCkiManifest();
131|  if (!manifest) return null;
132|  return (
133|    manifest.specialties.find(
134|      (entry) => entry.ckiId === ckiId && entry.version === version && entry.file === `${ckiId}.md`,
135|    ) ?? null
136|  );
137|}
138|
139|function unresolvedPin(ckiId: string, availability: CkiAvailability): CkiPin {
140|  return {
141|    ckiId,
142|    pinnedVersion: null,
143|    contentDigest: null,
144|    manifestRef: null,
145|    pinOrigin: "UNRESOLVED",
146|    availability,
147|  };
148|}
149|
150|/**
151| * Pin at cycle open only when the file digest matches the approved manifest entry
152| * for that specialty and corpus version. No silent substitution or migration.
153| * Unreadable specialty → ASSOCIATED. Readable but unapproved → UNAVAILABLE.
154| */
155|export function resolveForOpen(cycleType: CycleType): CkiPin {
156|  const ckiId = CYCLE_CKI[cycleType];
157|  const bytes = readSpecialty(ckiId);
158|  if (!bytes) return unresolvedPin(ckiId, "ASSOCIATED");
159|  const entry = approvedEntry(ckiId, CKI_CORPUS_VERSION);
160|  if (!entry || entry.sha256 !== bytes.digest || bytes.version !== CKI_CORPUS_VERSION) {
161|    return unresolvedPin(ckiId, "UNAVAILABLE");
162|  }
163|  return {
164|    ckiId,
165|    pinnedVersion: entry.version,
166|    contentDigest: bytes.digest,
167|    manifestRef: `cki/${CKI_MANIFEST_FILE}#${ckiId}@${entry.version}`,
168|    pinOrigin: "OPEN_PIN",
169|    availability: "RESOLVED",
170|  };
171|}
172|
173|/**
174| * Re-read a pin. RESOLVED only when the stored digest still matches the file
175| * and the approved manifest entry for that ckiId+version. Divergent bytes → UNAVAILABLE.
176| * No stored digest → stay ASSOCIATED (do not silent-pin or migrate on a later read).
177| */
178|export function resolvePinnedCki(pin: {
179|  ckiId: string | null;
180|  contentDigest: string | null;
181|  pinnedVersion: string | null;
182|  manifestRef?: string | null;
183|  pinOrigin?: string | null;
184|}): CkiPin {
185|  if (!pin.ckiId) {
186|    return {
187|      ckiId: "",
188|      pinnedVersion: null,
189|      contentDigest: null,
190|      manifestRef: null,
191|      pinOrigin: null,
192|      availability: "ASSOCIATED",
193|    };
194|  }
195|  if (!pin.contentDigest) {
196|    return {
197|      ckiId: pin.ckiId,
198|      pinnedVersion: null,
199|      contentDigest: null,
200|      manifestRef: pin.manifestRef ?? null,
201|      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "UNRESOLVED",
202|      availability: "ASSOCIATED",
203|    };
204|  }
205|  const bytes = readSpecialty(pin.ckiId);
206|  const entry = approvedEntry(pin.ckiId, pin.pinnedVersion);
207|  const approved =
208|    !!bytes &&
209|    bytes.digest === pin.contentDigest &&
210|    !!entry &&
211|    entry.sha256 === pin.contentDigest &&
212|    entry.version === pin.pinnedVersion;
213|  if (!approved || !bytes) {
214|    return {
215|      ckiId: pin.ckiId,
216|      pinnedVersion: pin.pinnedVersion,
217|      contentDigest: pin.contentDigest,
218|      manifestRef: pin.manifestRef ?? null,
219|      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "OPEN_PIN",
220|      availability: "UNAVAILABLE",
```

### 8.5 PilotagePanel F01 runCommand / reconcile

```tsx
70|  balanceNote?: string;
71|  decisionId?: string;
72|};
73|
74|type PendingRecord = {
75|  clientCommandKey: string;
76|  actInstanceId: string;
77|  actKey: string;
78|  signature: string;
79|  operation: string;
80|  payload: Record<string, unknown>;
81|  commandId?: string;
82|  expectedRevision: number;
83|  sourceRef: string;
84|  sourceAction: { operation: string; actKey: string; actInstanceId: string };
85|};
86|
87|const TERMINAL = new Set(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT"]);
88|const CONFIRMED = new Set(["APPLIED", "ALREADY_APPLIED"]);
89|
90|function storageKey(projectId: string, operation: string, actKey: string) {
91|  return `sfia.pilotage.pending:${projectId}:${operation}:${actKey}`;
92|}
93|
94|function intentSignature(projectId: string, intent: IntentBody): string {
95|  const operation = intent.operation?.trim() || "UTTERANCE";
96|  return JSON.stringify({
97|    projectId,
98|    operation,
99|    utterance: intent.utterance ?? "",
100|    cycleType: intent.cycleType ?? "",
101|    cycleId: intent.cycleId ?? "",
102|    toCycleType: intent.toCycleType ?? "",
103|    objective: intent.objective ?? "",
104|    orientation: intent.orientation ?? "",
105|    trajectoryRevisionId: intent.trajectoryRevisionId ?? "",
106|    methodRef: intent.methodRef ?? "",
107|    methodVersion: intent.methodVersion ?? "",
108|    targetKind: intent.targetKind ?? "",
109|    targetRef: intent.targetRef ?? "",
110|    restrictionId: intent.restrictionId ?? "",
111|    decisionId: intent.decisionId ?? "",
112|    statement: intent.statement ?? "",
113|  });
114|}
115|
116|function readStored(projectId: string, operation: string, signature: string): PendingRecord | null {
117|  if (typeof sessionStorage === "undefined") return null;
118|  const prefix = `sfia.pilotage.pending:${projectId}:${operation}:`;
119|  for (let i = 0; i < sessionStorage.length; i++) {
120|    const key = sessionStorage.key(i);
121|    if (!key?.startsWith(prefix)) continue;
122|    try {
123|      const rec = JSON.parse(sessionStorage.getItem(key) || "") as PendingRecord;
124|      if (rec.signature === signature) return rec;
125|    } catch {
126|      /* ignore corrupt pending rows */
127|    }
128|  }
129|  return null;
130|}
131|
132|function writeStored(projectId: string, record: PendingRecord) {
133|  sessionStorage.setItem(storageKey(projectId, record.operation, record.actKey), JSON.stringify(record));
134|}
135|
136|function clearStored(projectId: string, record: PendingRecord) {
137|  sessionStorage.removeItem(storageKey(projectId, record.operation, record.actKey));
138|}
139|
140|/**
141| * Surfaces ML3 Pilotage — états honnêtes.
142| * Jamais d'effet présenté comme confirmé avant réponse serveur APPLIED/ALREADY_APPLIED.
143| */
144|export function PilotagePanel({ projectId }: { projectId: string }) {
145|  const [projection, setProjection] = useState<PilotageProjection | null>(null);
146|  const [decisions, setDecisions] = useState<DecisionRow[]>([]);
147|  const [error, setError] = useState("");
148|  const [journalError, setJournalError] = useState("");
149|  const [status, setStatus] = useState("");
150|  const [busy, setBusy] = useState(false);
151|  const [pendingLabel, setPendingLabel] = useState<string | null>(null);
152|  const [unresolved, setUnresolved] = useState<PendingRecord | null>(null);
153|  const [cycleType, setCycleType] = useState("UX_UI");
154|  const [toCycleType, setToCycleType] = useState("CADRAGE");
155|  const [objective, setObjective] = useState("Qualifier l'expérience Pilote–Nora");
156|  const [methodRef, setMethodRef] = useState("sfia-fast-track");
157|  const [methodVersion, setMethodVersion] = useState("2.6");
158|  const [utterance, setUtterance] = useState("");
159|  const [restrictionTarget, setRestrictionTarget] = useState("*");
160|  const inflight = useRef(new Map<string, PendingRecord>());
161|
162|  const load = useCallback(async () => {
163|    const [pRes, dRes] = await Promise.all([
164|      fetch(`/api/projects/${projectId}/pilotage`),
165|      fetch(`/api/projects/${projectId}/decisions`),
166|    ]);
167|    if (pRes.status === 401 || dRes.status === 401) {
168|      setError("Session requise");
169|      return;
170|    }
171|    if (!pRes.ok) {
172|      setError("Impossible de charger le pilotage");
173|      return;
174|    }
175|    const pj = await pRes.json();
176|    setProjection(pj.pilotage ?? pj);
177|    if (!dRes.ok) {
178|      let message = `Journal HTTP ${dRes.status}`;
179|      try {
180|        const dj = (await dRes.json()) as { error?: string; message?: string };
181|        message = dj.error ?? dj.message ?? message;
182|      } catch {
183|        /* keep the HTTP status */
184|      }
185|      setJournalError(message);
186|      setDecisions([]);
187|    } else {
188|      const dj = await dRes.json();
189|      setDecisions(dj.decisions ?? []);
190|      setJournalError("");
191|    }
192|    setError("");
193|  }, [projectId]);
194|
195|  useEffect(() => {
196|    void load();
197|  }, [load]);
198|
199|  function forget(record: PendingRecord) {
200|    inflight.current.delete(record.signature);
201|    clearStored(projectId, record);
202|    setUnresolved((current) => (current?.clientCommandKey === record.clientCommandKey ? null : current));
203|  }
204|
205|  function remember(record: PendingRecord) {
206|    inflight.current.set(record.signature, record);
207|    writeStored(projectId, record);
208|    setUnresolved(record);
209|  }
210|
211|  async function reconcile(record: PendingRecord): Promise<CommandResult | null> {
212|    try {
213|      const byKey = await fetch(
214|        `/api/projects/${projectId}/pilotage/commands/by-key/${encodeURIComponent(record.clientCommandKey)}`,
215|      );
216|      if (byKey.ok) return (await byKey.json()) as CommandResult;
217|    } catch {
218|      /* try the command id next */
219|    }
220|    if (!record.commandId) return null;
221|    try {
222|      const byId = await fetch(`/api/projects/${projectId}/pilotage/commands/${record.commandId}`);
223|      if (byId.ok) return (await byId.json()) as CommandResult;
224|    } catch {
225|      return null;
226|    }
227|    return null;
228|  }
229|
230|  async function applyResult(record: PendingRecord, result: CommandResult) {
231|    if (result.commandId) {
232|      record.commandId = result.commandId;
233|      writeStored(projectId, record);
234|    }
235|    setStatus(
236|      `${result.status}${result.reasonCode ? ` · ${result.reasonCode}` : ""}${result.reason ? ` — ${result.reason}` : ""}`,
237|    );
238|    if (CONFIRMED.has(result.status)) {
239|      forget(record);
240|      await load();
241|      return;
242|    }
243|    if (TERMINAL.has(result.status)) {
244|      forget(record);
245|      return;
246|    }
247|    remember(record);
248|  }
249|
250|  async function postRecord(record: PendingRecord): Promise<"network" | "nonjson" | CommandResult> {
251|    let res: Response;
252|    try {
253|      res = await fetch(`/api/projects/${projectId}/pilotage/commands`, {
254|        method: "POST",
255|        headers: {
256|          "Content-Type": "application/json",
257|          "Idempotency-Key": record.clientCommandKey,
258|        },
259|        body: JSON.stringify(record.payload),
260|      });
261|    } catch {
262|      return "network";
263|    }
264|    const text = await res.text();
265|    let json: CommandResult;
266|    try {
267|      json = JSON.parse(text) as CommandResult;
268|    } catch {
269|      return "nonjson";
270|    }
271|    if (!res.ok && !json.status) {
272|      return { status: `HTTP ${res.status}`, commandId: null, revision: null, reason: json.error };
273|    }
274|    return json;
275|  }
276|
277|  async function resolveUnknown(record: PendingRecord) {
278|    setStatus("UNKNOWN");
279|    const found = await reconcile(record);
280|    if (found?.status && found.status !== "UNKNOWN") {
281|      await applyResult(record, found);
282|      return;
283|    }
284|    const replay = await postRecord(record);
285|    if (replay === "network" || replay === "nonjson") {
286|      remember(record);
287|      setStatus("UNKNOWN — commande non réconciliée");
288|      return;
289|    }
290|    await applyResult(record, replay);
291|  }
292|
293|  async function runCommand(intent: IntentBody, pending: string) {
294|    const operation = intent.operation?.trim() || "UTTERANCE";
295|    const signature = intentSignature(projectId, intent);
296|    let record = inflight.current.get(signature) ?? readStored(projectId, operation, signature);
297|    if (!record) {
298|      const actInstanceId = crypto.randomUUID();
299|      const actKey = actInstanceId;
300|      const clientCommandKey = `cmd_${crypto.randomUUID()}`;
301|      const sourceRef = `ui:${operation}:${actInstanceId}`;
302|      const expectedRevision = projection?.revision ?? 0;
303|      const payload: Record<string, unknown> = {
304|        ...intent,
305|        operation: intent.operation?.trim() ? intent.operation : undefined,
306|        clientCommandKey,
307|        expectedRevision,
308|        actInstanceId,
309|        sourceRef,
310|        sourceKind: intent.sourceKind,
311|      };
312|      record = {
313|        clientCommandKey,
314|        actInstanceId,
315|        actKey,
316|        signature,
317|        operation,
318|        payload,
319|        expectedRevision,
320|        sourceRef,
321|        sourceAction: { operation, actKey, actInstanceId },
322|      };
323|    }
324|    inflight.current.set(signature, record);
325|    writeStored(projectId, record);
326|    setBusy(true);
327|    setPendingLabel(pending);
328|    setStatus("");
329|    try {
330|      const posted = await postRecord(record);
331|      if (posted === "network" || posted === "nonjson") {
332|        await resolveUnknown(record);
333|        return;
334|      }
335|      await applyResult(record, posted);
336|    } catch {
337|      setStatus("UNKNOWN");
338|      remember(record);
339|    } finally {
340|      setBusy(false);
341|      setPendingLabel(null);
342|    }
343|  }
344|
345|  if (error) {
346|    return <div className="panel p-4 text-sm">{error}</div>;
347|  }
348|  if (!projection) {
349|    return <div className="panel p-4 text-sm muted">Chargement du pilotage…</div>;
350|  }
```

### 8.6 Nora DELIVERED honesty (nora-adapter)

```ts
517|    reasonCodes: [reasonCode],
518|  };
519|}
520|
521|/**
522| * DELIVERED is an observation of this generation, not of the projection.
523| * Content may be attached (requested DELIVERED) and still not delivered if
524| * generate failed before a fixture or provider body.
525| */
526|function stampCkiDelivery(
527|  result: NoraGenerateResult,
528|  requested: string | undefined,
529|  generateRan: boolean,
530|): NoraGenerateResult {
531|  const asked = requested ?? result.ckiDelivery ?? "NONE";
532|  const ckiDelivery = asked === "DELIVERED" && !generateRan ? "RESOLVED" : asked;
533|  return { ...result, ckiDelivery };
534|}
535|
536|export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
537|  const generationId = newId("gen");
538|
539|  // Lane fixture gate before policy — fail closed with a clear category.
540|  if (noraFixtureFlagsOutsideDev()) {
541|    return stampCkiDelivery(
542|      boundaryFail(
543|        generationId,
544|        "NORA_FIXTURE_LANE_FORBIDDEN (STUDIO_E2E/FORCE requires STUDIO_LANE=DEV)",
545|        minimalBoundaryPolicy("NORA_FIXTURE_LANE_FORBIDDEN"),
546|      ),
547|      input.ckiDelivery,
548|      false,
549|    );
550|  }
551|
```

### 8.7 As-built §12 correctif + delivery-history + tracabilité appendice

```md
290|
291|Les en-têtes historiques « NOT VALIDATED SPEC / NOT IMPLEMENTED » du document v0.4 restent des métadonnées pré-delivery ; ce §12 constate l'implémentation locale sans modifier les contrats R01–R04 validés en contenu Morris via #660.
292|
293|### Correctif ML3 (2026-11-06, local, non poussé)
294|
295|Idempotence UI par `actInstanceId` stable (retry = même clé, nouvel acte = nouvel id) et réconciliation `GET .../commands/by-key/:clientCommandKey`. CKI `RESOLVED` seulement si le digest du fichier égale l'entrée `cki/manifest.v0.2.0.json` (pas de migration silencieuse). Restriction `CYCLE_MUTATION` / `PILOTAGE_EFFECT` : `*` global, sinon cible (cycle, type ou méthode). GO naturel `EXPLICIT_INTERACTION` sans `operation`. `REVISE_DECISION` (précédente `REVISED`, nouvelle `APPLICABLE`) et blocage `CONTRADICTION` sur deux décisions `APPLICABLE` de même `kind` + `objectRef` exact et énoncés différents. `DELIVERED` seulement si le contenu CKI est joint et qu'un generate fixture/live a réellement tourné. Schéma inchangé (`007`).
```

```md
412|## delivery_id: DELIV-2026-11-06-ML3-CORRECTIFS-F01-F08
413|
414|| Field | Value |
415|| --- | --- |
416|| Date | 2026-11-06 (Europe/Paris) |
417|| Macro-lot | R5 / ML3 — correctifs pilotage F01–F08 et T01–T04 |
418|| Type | INC corrective (same ML3, not a new lot) |
419|| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
420|| Base | `7f1f41c` dirty candidate |
421|| Schema | unchanged `007_ml3_pilotage_decisions` — `actInstanceId` lives in `source_action_key` + fingerprint, no migration 008 |
422|| Corrected | Idempotence UI + GET by client key ; manifeste CKI 0.2.0 ; restriction ciblée ; journal `state` ; GO naturel sans operation ; identité d'acte ; `REVISE_DECISION` + contradiction exacte ; `DELIVERED` seulement après generate réel |
423|| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
424|| Lane | DEV only ; RECETTE/STABLE not mutated |
425|| LIVE Nora | NOT EXECUTED |
426|| Status | LOCAL CORRECTIVE — no project push/PR/merge |
```

```md
215|## As-built correctif ML3 — testCaseRef B01–B18 (2026-11-06)
216|
217|Appendice après correctifs F01–F08 / T01–T04. N'altère pas la matrice R2. Les identifiants sont les noms de cas dans le code, pas une nouvelle exigence. Lane visée : DEV. Pas une preuve RECETTE.
218|
219|| QA | testCaseRef | Ce que le cas couvre après correctif |
220||---|---|---|
221|| B01 | `PostgreSQL ML3 pilotage and decisions` › `starts empty: no cycle, no method, no retained trajectory` ; e2e `cycle-absent` | Projet neuf sans cycle ni méthode |
222|| B02 | même fichier › `propose stays non-authoritative until an explicit retain` ; UI `retain-trajectory` | Proposition non ouvrante ; rétention explicite |
223|| B03 | même fichier › `opens a cycle from an explicit utterance without an operation` ; e2e champ « Énoncé GO » | GO naturel EXPLICIT_INTERACTION sans `operation` |
224|| B04 | même fichier › `rejects an ambiguous OK without opening a cycle` ; unit `qualifies a clear GO` | Énoncé équivoque rejeté |
225|| B05 | même fichier › `keeps a single ACTIVE cycle when two opens race` | Une seule ligne ACTIVE |
226|| B06 | même fichier › `replays the same key and conflicts when the fingerprint changes` ; `does not apply the same human act twice when only the client key changes` ; `reconcileCommandByClientKey` | Même clé rejouée ; même `actInstanceId` non dupliqué. Perte réseau UI : statut UNKNOWN + bouton réconcilier (non exécuté en PG) |
227|| B07 | même fichier › `rolls back a transition when opening the next cycle fails` | CLOSE+OPEN annulés ensemble |
228|| B08 | non couvert par un cas dédié | Nora ne clôt pas un cycle sur un jugement de maturité : consigne d'adapter, pas un oracle exécuté |
229|| B09 | même fichier › `chooses, replaces, withdraws and revokes the current method base without restoring the previous one` | Choix / remplacement / retrait / révocation de base |
230|| B10 | unit `pins RESOLVED only when the file digest matches the approved manifest` | Pas de remplacement implicite du pin : digest hors manifeste → UNAVAILABLE |
231|| B11 | unit `maps each cycle type to one CKI specialty file` | Une spécialité par type. Digression Nora hors spécialité : non exécutée comme tour LIVE |
232|| B12 | unit `stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges` ; cas manifeste ci-dessus | Pas de fallback si octets absents ou non approuvés |
233|| B13 | même fichier PG › `revises an applicable decision and blocks effects while statements contradict` | Deux `APPLICABLE` même `objectRef`+`kind`, énoncés différents → `CONTRADICTION` ; `REVISE_DECISION` lève le blocage |
234|| B14 | même fichier › `blocks a cycle open while a restriction is active and allows it after a lift` ; `applies a cycle restriction only to the named target` | STOP global et cible (A bloqué, B autorisé) |
235|| B15 | même fichier › `isolates pilotage across projects and rejects a foreign user message` | Pas d'import inter-projets |
236|| B16 | même fichier › révocation de la méthode fondatrice dans le cas méthode | Révocation avant effet courant, sans restauration |
237|| B17 | e2e `decision-state` contient `APPLICABLE` ; PG journal `state` `REVISED` / `APPLICABLE` après révision | Journal affiche `state`, pas une validité séparée |
238|| B18 | même fichier › `starts empty` lecture seule `getPilotageProjection` ; GET `/pilotage` ne poste pas de commande | Navigation / lecture sans GO |
239|
240|Statut correctif : `LOCAL CANDIDATE — TESTS CITÉS, PAS ADOPTÉS`. LIVE Nora : NOT EXECUTED. B08 et la digression B11 restent des réserves, pas des preuves.
```

## 9. Justification des choix de correction
1. **Pas de migration 008** — `actInstanceId` porté dans `source_action_key` (hash) + fingerprint JSON ; évite rewrite 007 et blast DB.
2. **Manifeste CKI technique** — inventaire SHA-256 des octets Git déjà VALIDATED CONTENT v0.2.0 ; aucune nouvelle autorité éditoriale.
3. **Restrictions ciblées** — sémantique R2/R4 bornée : `*`/vide = global ; sinon match exact cycleId|cycleType|methodRef|effectTargetRef ; pas d'invention de wildcards partiels.
4. **Contradiction bornée** — exact `kind`+`objectRef`+statements différents ; pas de NLP.
5. **GO naturel** — même `qualifyPilotageIntent` que USER_MESSAGE ; EXPLICIT_INTERACTION sans operation.
6. **UI** — sessionStorage borné par projet+signature ; UNKNOWN honnête jusqu'à reconcile APPLIED.

## 10. F01–F08 avant / après

| ID | Avant (Critical Review) | Après | Verdict |
| --- | --- | --- | --- |
| F01 | Nouvelle clé par appel ; pas de reconcile fiable | actInstanceId+clientCommandKey stables ; GET by-key ; UNKNOWN+replay same payload | **CLOSED** (DEV proven) |
| F02 | Digest fichier ≠ approbation | `manifest.v0.2.0.json` ; pin si digest+version match | **CLOSED** |
| F03 | CYCLE_MUTATION/PILOTAGE_EFFECT ignorent targetRef | matchesScopedTarget ; tests A bloqué / B permis | **CLOSED** |
| F04 | API state vs UI validity | UI `state` APPLICABLE/REVISED/SUPERSEDED/REVOKED ; erreur journal visible | **CLOSED** |
| F05 | utterance sans operation non qualifiée | `classifyExplicitInteraction` | **CLOSED** |
| F06 | sourceRef statiques réutilisés | `ui:op:actInstanceId` ; hash inclut actInstanceId | **CLOSED** |
| F07 | pas de revise générique / B13 faible | `REVISE_DECISION` + CONTRADICTION exacte | **CLOSED** (borné) |
| F08 | API > UX | retain/close/transition/withdraw/restrict/lift/reconcile/journal | **CLOSED** (BROWSER FAKE) |

## 11. T01–T04
| ID | Traitement | Verdict |
| --- | --- | --- |
| T01 | DELIVERED seulement si contenu joint ET generate a tourné ; sinon RESOLVED | **CLOSED** (FAKE/fixture) ; cognitive LIVE NOT PROVEN |
| T02 | USER_MESSAGE exige role USER + status COMPLETE + projet/pilote | **CLOSED** |
| T03 | projection + nora-context : usageRestricted → pas pleinement applicable | **CLOSED** |
| T04 | appendice tracabilité B01–B18 avec testCaseRef ; pas de nouveau registre | **CLOSED** (doc) |

## 12. Migration
Aucune migration 008. Schema reste `007_ml3_pilotage_decisions`. Fresh 001→007 PASS. Upgrade path inchangé.

## 13. Preuve R01–R04
Contrats R01–R04 (spec v0.4 #660) non modifiés normativement. As-built §12 mis à jour. Manifeste CKI = réalisation technique R01. Option A CLOSE+OPEN inchangée (tests PG).

## 14. B01–B18 et 136 références
Voir appendice `tracabilite-r2-r3-r4.md`. Synthèse:

| Scénario | Couverture | Environnement | Limite |
| --- | --- | --- | --- |
| B01 | e2e cycle-absent/method-absent | BROWSER FAKE | — |
| B02 | unit/pg propose ≠ GO | PG/unit | — |
| B03 | e2e+pg GO naturel → D6/D5 | BROWSER+PG | — |
| B04 | unit intent OK/hypothèse | unit | — |
| B05 | pg concurrent opens | PG | — |
| B06 | pg/ui same key reconcile | PG (+UI path) | abort réseau unit/UI path |
| B07 | pg CLOSE+OPEN transactional | PG | — |
| B08 | maturité Nora sans clôture | **NOT PROVEN LIVE** | GOVERNED DEBT |
| B09 | method reload | pg/e2e | — |
| B10 | CKI new version no auto | unit cki | — |
| B11 | digression 2nd CKI | **NOT PROVEN LIVE** | GOVERNED DEBT |
| B12 | hostile/missing CKI | unit | — |
| B13 | contradiction exacte | pg/unit | pas de NLP |
| B14 | restriction après reload | pg + UI storage | — |
| B15 | isolation projets | pg | — |
| B16 | révocation point d'effet | pg | — |
| B17 | journal state | e2e+api | — |
| B18 | nav retour fil sans effet | e2e (panel tab) | non pixel-perfect Figma |

136 RG/PF : regroupements tests autorisés ; COVERAGE VERIFIED seulement si scénario propre exécuté — sinon NOT PROVEN / INTERFACE.

## 15. Tests et logs exacts

### Unit (18 PASS)
```
{tail('/tmp/ml3-unit.txt', 25)}
```

### PG ml3-pilotage (15 PASS)
```
{tail('/tmp/ml3-pg.txt', 20)}
```

### Migrations fresh (3 PASS)
```
{tail('/tmp/ml3-mig.txt', 20)}
```

### Playwright ml3-pilotage (1 PASS)
```
{tail('/tmp/ml3-e2e.txt', 25)}
```

### tsc / eslint
- `npx tsc --noEmit` → EXIT 0
- eslint pilotage/decisions/PilotagePanel → EXIT 0

### Environnement preuves
- `STUDIO_LANE=DEV`
- `DATABASE_URL` unset → `.env.local` `127.0.0.1:5433/sfia_next_dev`
- e2e DB: `sfia_next_e2e` (préflight)
- RECETTE NOT USED

## 16. Fake / Real Qualification
| Frontière | Qualification |
| --- | --- |
| PostgreSQL | PG INTEGRATION PROVEN (DB isolée locale) |
| Nora Agents SDK | FAKE / fixture — LIVE NOT EXECUTED |
| UI | BROWSER FAKE (session DEV) |
| CKI octets | DETERMINISTIC PROVEN vs manifeste |
| CKI cognitif | NOT PROVEN LIVE |
| Git/Cursor D7/D9 | hors scope |
| Claims interdits | non émis (READY FOR REAL / RECETTE ACCEPTED / ADOPTED / …) |

## 17. Non-régression ML1/ML2
- Migration 001→007 fresh PASS (ML1/ML2 tables présentes)
- nora-adapter corrective unit suite PASS (ML2 turn integrity paths)
- e2e ML3 utilise parcours sas→projet→fil (continuité ML1/ML2) puis onglet Pilotage
- RECETTE ML1/ML2 : non mutée (aucune commande contre bases RECETTE)

## 18. Réserves et dettes
| ID | Sévérité | Description | Exit |
| --- | --- | --- | --- |
| B08 | GOVERNED DEBT | maturité Nora sans clôture autonome non oracles LIVE | GO LIVE Nora distinct + scénario |
| B11 | GOVERNED DEBT | digression sans 2e CKI LIVE | idem |
| F07-NLP | GOVERNED DEBT | contradiction = exact match seulement | arbitrage Morris si élargissement |
| Figma pixel | GOVERNED DEBT | pas de conformité pixel-perfect déclarée | revue visuelle R3 sous GO |
| RECETTE ML3 | BLOCKING (gate) | NOT AVAILABLE | GO Morris distinct |

## 19. Verdict de cycle
**ML3 CORRECTIVE DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW.**

Pas READY FOR MERGE / RECETTE ACCEPTED / STABLE / RELEASE / ADOPTED.

## 20. Gates encore requis
1. ChatGPT Critical Review du candidat local + handoff
2. Arbitrage réserves Morris
3. Éventuel ajustement ciblé sous GO
4. Qualification RECETTE ML3 sous GO distinct
5. PR readiness / intégration Git sous GO distinct
6. Suite R5 puis R6 sous GO distinct

## 21. Instruction ChatGPT
Examiner ce Review Pack FULL et le **candidat local dirty** sur `sfia/next-pilotage-decisions-delivery@7f1f41c` (non poussé). Vérifier F01–F08 / T01–T04 contre le code réel (hashes §3), les tests §15, et les invariants D5/D6/Option A. Signaler tout écart code/doc, tout claim excessif, et toute sémantique inventée. Ne pas traiter ce delivery comme mergeable ou RECETTE.

---
FIN REVIEW PACK — mono-cycle correctif 2026-11-06
