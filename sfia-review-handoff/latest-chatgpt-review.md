# ChatGPT Review Pack — FULL
## F3 Auth.js + GitHub IAM Delivery + Independent QA — Cycle 8 Delivery / Cycle 9 QA

| Field | Value |
| --- | --- |
| **Role** | F3 Auth.js + GitHub OAuth IAM Delivery + Independent QA (AS-1 AuthenticatedIdentityPort) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 00:40:04 CEST (+0200) |
| **Timestamp UTC** | 2026-08-11 22:40:04 UTC |
| **Timestamp CEST ISO** | `2026-08-12T00:40:04+0200` |
| **Timestamp UTC ISO** | `2026-08-11T22:40:04Z` |
| **Cycle** | 8 — Delivery (PHASE DELIVERY) then 9 — QA / validation (PHASE QA — CANDIDATE FROZEN) |
| **Profil** | Critical |
| **Typologie** | EVOL / CAPA |
| **Critical** | OUI — EXPLICITE |
| **Template** | prompts/templates/sfia-cycle-execution-template.md v2.6 |
| **Template blob** | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |

---

## GO exact

```
GO ADOPT F3 AUTHENTICATED IDENTITY PROVIDER —
AUTH.JS + GITHUB OAUTH (JWT SESSION, NO DB ADAPTER) —
IMPLEMENT PROVIDER ADAPTER FOR AS-1 AuthenticatedIdentityPort —
RUN IAM + CRITICAL ACK QA —
REFREEZE F3 REAL-PREREQUISITES PACKAGE —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
NO PROJECT GIT WRITE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED
```

**Justification Critical :** frontiers identité authentifiée Auth.js/GitHub / JWT sans adapter DB / authn≠authz / ack exact / anti-replay / restart DUR-4 / Fake fail-closed / live OAuth proof — erreur possible = subject forgeable, scope OAuth excessif, fallback Fake silencieux, tokens en session, Gate D prématuré. Cursor REAL interdit ; Gate D non consommé.

---

## Inbound Review Handoff

| Field | Value |
| --- | --- |
| Tip BEFORE | `c4f9f8ca73207c93a2de892655479b818e4968da` |
| Blob BEFORE | `8c5e5a4f99d83acea2ff059c97b30130424840e8` |
| Role (inbound) | F3 IAM Provider Decision — Auth.js + GitHub (Design Only) / prior F3 real-prerequisites QA |
| Pack (inbound) | FULL |
| Synthesis-only (inbound) | NO |
| Remote verify BEFORE | `git ls-remote` tip exact + `git ls-tree` blob exact on `sfia/review-handoff` |

**Outbound remote identity:** FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE

---

## Local Git Truth

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` (non-divergent) |
| Remote delivery branch | ABSENT (local only) |
| Staged | empty |
| Project commit/push/PR/merge/force | 0 / 0 / 0 / 0 / 0 |
| Package local | YES — uncommitted candidate |

---

## Framing documents (READ-ONLY other WT) — SHA-256 verified

| Doc | Expected SHA-256 | After QA | Byte-identical |
| --- | --- | --- | --- |
| README.md | `a3b384b312e37731ff1c86115e0e2ba170ff59d51206009e00e4891b1daf2360` | same | **YES** |
| 01-authority-surface-decision.md | `a524e4858d6bd8257ba20fac06538fa20295ead8ab31d45abc06111ca46680ed` | same | **YES** |
| 02-accelerated-authority-durability-decision.md | `4d748722ce0a5b213c7c711dda42453b6c8858575abd4399a1f5253f47d775f1` | same | **YES** |
| 03-iam-provider-decision.md | `6b39fd62f43a5513b940b5b775e107461fd7b2945178c6f7b3b7bf2f991789e7` | same | **YES** |

Path (framing WT): `…/worktrees/f3-real-hard-prerequisites/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/f3-real-path-hard-prerequisites/`

---

## Morris decisions consumed

| Decision | Status | Limit |
| --- | --- | --- |
| **IAM PROVIDER** | DECIDED — ADOPT | Auth.js + GitHub OAuth; JWT session; NO DB adapter; no Better Auth / Clerk / custom OAuth |
| **AS-1** | ADOPTED (prior) | AuthenticatedIdentityPort; AuthJsGitHubIdentityAdapter production authn; Fake test-only |
| **DUR-1 + DUR-4-POLICY** | ADOPTED (prior) | Unchanged; session ≠ authority after restart |
| **AuthorityResolverPort** | PRESERVED | Sole authz; canActAsMorris; AUTH_MORRIS_GITHUB_SUBJECT is non-secret actorId binding only |

---

## Candidate SHA

| Field | Value |
| --- | --- |
| OLD_CANDIDATE_SHA | `c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc` |
| NEW_CANDIDATE_SHA | `e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e` |
| Freeze | PHASE QA — CANDIDATE FROZEN |
| Byte-identical throughout QA | **YES** |
| Corrective loops | 1 (lazy `@/auth` import to avoid vitest `next/server` load; scope-test fixture fix) — ≤2 |

---

## Selected IAM

- Provider: Auth.js (`next-auth@5.0.0-beta.32` exact, no caret)
- GitHub OAuth; scope `read:user` only
- Session strategy: `jwt`
- NO adapter (no Prisma/Drizzle/Mongo/Supabase adapter import)
- Stable subject: GitHub numeric account id → `token.githubAccountId` / `session.githubAccountId`
- `authProvider: "github"`
- Do not store access_token / refresh_token / email / avatar / login on JWT when avoidable
- Adapter: `AuthJsGitHubIdentityAdapter` → `principalId=github:<id>`, `authnSource=AUTH_JS_GITHUB`
- Optional non-secret env `AUTH_MORRIS_GITHUB_SUBJECT` maps actorId → `actor:morris` (NOT canActAsMorris)

### package.json dependency

```json
"next-auth": "5.0.0-beta.32"
```

package-lock integrity for `node_modules/next-auth` present (sha512). No better-auth / clerk / @auth/*adapter packages.

---

## Architecture discovery (this delivery)

- Created `auth.ts`, `types/auth.d.ts`, `app/api/auth/[...nextauth]/route.ts`
- Created `AuthJsGitHubIdentityAdapter` + `resolveActorIdForGitHubSubject`
- Exported adapter from critical-ack main barrel; Fake remains `critical-ack/testing` only
- `AUTHENTICATED_IDENTITY_PROOF_STATUS = "IMPLEMENTED_BUT_LIVE_UNPROVEN"`
- `hardBlockerFoundation.iam = "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER"`
- openHard=true, deliveryReady=false, persistenceProduct=NOT_SELECTED
- R-T-A3-1 proofAvailable gained: `authjs-github-identity-adapter`, `jwt-session-no-db-adapter`
- R-T-A3-1 proofMissing still includes live GitHub OAuth proof / Morris GO for REAL
- Fail-closed: null/invalid session → null principal → IDENTITY_REQUIRED; never Fake fallback

---

## Changed / new files (Auth.js delivery)

| Path | SHA-256 | Lines |
| --- | ---: | ---: |
| `projects/sfia-studio/app/auth.ts` | `11c95a177019c55ee94895365575db2c624acfd022d593f5be918b703d171078` | 65 |
| `projects/sfia-studio/app/types/auth.d.ts` | `f9081d8e2df2478916ea4ec301d26b0fe731645aa8c0cc4620624b240b46e9d9` | 17 |
| `projects/sfia-studio/app/app/api/auth/[...nextauth]/route.ts` | `c3e8185d66af3fe7019dd236a463365cce7e1e8dcaea2a7c3b8f0b103e930ce4` | 3 |
| `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/authJsGitHubIdentityAdapter.ts` | `3e82214980d1076d862c04b5e4e890b91c1a311b7babbaa5f2f5c3c5aa099acd` | 81 |
| `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/githubSubjectActorBinding.ts` | `95a028957d7d2d83ca7790d8bab1505b290cd7f66c3d7b1a20205226585aba3b` | 20 |
| `projects/sfia-studio/app/lib/oa/critical-ack/index.ts` | `257a2a8d16a119308970afd8545dd527b855d06f646822806c27091dbb16e80b` | 35 |
| `projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts` | `9959e90c64a5952ad3f537182377a5882a982d9b07d4272fd5cb87b1a1334845` | 16 |
| `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts` | `8ef1879a418a66f7d4b6ab0c51524dc368af2a9d6bce2efa23242785d3637923` | 206 |
| `projects/sfia-studio/app/package.json` | `58463b8b5fa7fa5fef86a7aa1bdb3e6c9266d2b7ff74c6280b7decc52a1def59` | 47 |
| `projects/sfia-studio/app/package-lock.json` | `3d41ef451981ebf37df9e331d86d44d9fb37f1d5f93d1b66ca85355e6d7678c8` | (lockfile) |

Tests added/updated under `__tests__/oa/critical-ack/` + platform hard foundation iam expectation.

---

## Full content — new significant sources

### `projects/sfia-studio/app/auth.ts`

SHA-256: `11c95a177019c55ee94895365575db2c624acfd022d593f5be918b703d171078`

```ts
/**
 * Auth.js (next-auth v5) — GitHub OAuth, JWT session, NO DB adapter.
 *
 * Identity-only scopes (read:user). Does not grant authz / canActAsMorris.
 * Stable subject: GitHub numeric account id → token.githubAccountId.
 */
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

function githubNumericId(profile: unknown): string | null {
  if (!profile || typeof profile !== "object") return null;
  const raw = (profile as { id?: unknown }).id;
  if (typeof raw === "number" && Number.isInteger(raw) && raw >= 0) {
    return String(raw);
  }
  if (typeof raw === "string" && /^[0-9]+$/.test(raw)) {
    return raw;
  }
  return null;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          // Identity only — minimal user identity scope.
          scope: "read:user",
        },
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "github") {
        const githubAccountId = githubNumericId(profile);
        if (githubAccountId) {
          token.githubAccountId = githubAccountId;
          token.authProvider = "github";
        }
      }
      // Never persist OAuth tokens or profile PII on the JWT when avoidable.
      delete (token as { access_token?: unknown }).access_token;
      delete (token as { refresh_token?: unknown }).refresh_token;
      delete (token as { email?: unknown }).email;
      delete (token as { picture?: unknown }).picture;
      delete (token as { name?: unknown }).name;
      return token;
    },
    async session({ session, token }) {
      if (
        token.authProvider === "github" &&
        typeof token.githubAccountId === "string" &&
        /^[0-9]+$/.test(token.githubAccountId)
      ) {
        session.githubAccountId = token.githubAccountId;
        session.authProvider = "github";
      }
      return session;
    },
  },
});

```
### `projects/sfia-studio/app/types/auth.d.ts`

SHA-256: `f9081d8e2df2478916ea4ec301d26b0fe731645aa8c0cc4620624b240b46e9d9`

```ts
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    /** GitHub numeric account id (string). Server-use only; never client-trusted. */
    githubAccountId?: string;
    authProvider?: "github";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    githubAccountId?: string;
    authProvider?: "github";
  }
}

```
### `projects/sfia-studio/app/app/api/auth/[...nextauth]/route.ts`

SHA-256: `c3e8185d66af3fe7019dd236a463365cce7e1e8dcaea2a7c3b8f0b103e930ce4`

```ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;

```
### `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/authJsGitHubIdentityAdapter.ts`

SHA-256: `3e82214980d1076d862c04b5e4e890b91c1a311b7babbaa5f2f5c3c5aa099acd`

```ts
/**
 * AuthJsGitHubIdentityAdapter — production authn adapter for AS-1.
 *
 * Authn ONLY. Does NOT grant canActAsMorris / authz.
 * FAIL CLOSED: null session / invalid subject → null principal.
 * NEVER falls back to FakeAuthenticatedIdentityAdapter.
 *
 * Default `auth()` is lazy-imported from `@/auth` so unit tests / node vitest
 * can inject `authFn` without loading next/server.
 */
import type { AuthenticatedPrincipal } from "../domain/types";
import type { AuthenticatedIdentityPort } from "../ports/authenticatedIdentityPort";
import { resolveActorIdForGitHubSubject } from "./githubSubjectActorBinding";

/** Minimal session shape needed for identity resolution (server-side). */
export type AuthJsSessionLike = {
  authProvider?: string;
  githubAccountId?: string;
} | null;

export type AuthFn = () => Promise<AuthJsSessionLike>;

export type AuthJsGitHubIdentityAdapterDeps = {
  authFn?: AuthFn;
  nowIso?: () => string;
  /** Non-secret binding: github numeric subject → OA actorId. */
  mapActorId?: (githubAccountId: string) => string;
};

async function loadDefaultAuthFn(): Promise<AuthFn> {
  const mod = await import("@/auth");
  return mod.auth as AuthFn;
}

export class AuthJsGitHubIdentityAdapter implements AuthenticatedIdentityPort {
  private readonly injectedAuthFn?: AuthFn;
  private readonly nowIso: () => string;
  private readonly mapActorId: (githubAccountId: string) => string;

  constructor(deps: AuthJsGitHubIdentityAdapterDeps = {}) {
    this.injectedAuthFn = deps.authFn;
    this.nowIso = deps.nowIso ?? (() => new Date().toISOString());
    this.mapActorId = deps.mapActorId ?? resolveActorIdForGitHubSubject;
  }

  async resolvePrincipal(): Promise<AuthenticatedPrincipal | null> {
    let session: AuthJsSessionLike;
    try {
      const authFn = this.injectedAuthFn ?? (await loadDefaultAuthFn());
      session = await authFn();
    } catch {
      // Fail closed for AcknowledgeCritical IDENTITY_REQUIRED — never Fake.
      return null;
    }

    if (!session) return null;

    const authProvider = session.authProvider;
    const githubAccountId = session.githubAccountId;

    if (authProvider !== "github") return null;
    if (
      typeof githubAccountId !== "string" ||
      githubAccountId.length === 0 ||
      !/^[0-9]+$/.test(githubAccountId)
    ) {
      return null;
    }

    const principalId = `github:${githubAccountId}`;
    const actorId = this.mapActorId(githubAccountId);

    return Object.freeze({
      principalId,
      actorId,
      authnSource: "AUTH_JS_GITHUB",
      authenticatedAt: this.nowIso(),
      // displayName omitted by default — login/email must NOT be authority.
    });
  }
}

```
### `projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/githubSubjectActorBinding.ts`

SHA-256: `95a028957d7d2d83ca7790d8bab1505b290cd7f66c3d7b1a20205226585aba3b`

```ts
/**
 * Non-secret pilot binding: GitHub numeric subject → OA actorId.
 *
 * This is NOT canActAsMorris and NOT authz.
 * AuthorityResolverPort (register evidence + canActAsMorris) remains the sole
 * authorization boundary for Critical Ack.
 *
 * Optional env: AUTH_MORRIS_GITHUB_SUBJECT = numeric GitHub account id for
 * Morris pilot mapping to `actor:morris`.
 */
export function resolveActorIdForGitHubSubject(subject: string): string {
  if (!/^[0-9]+$/.test(subject)) {
    return `github:${subject}`;
  }
  const morrisSubject = process.env.AUTH_MORRIS_GITHUB_SUBJECT?.trim();
  if (morrisSubject && morrisSubject === subject) {
    return "actor:morris";
  }
  return `github:${subject}`;
}

```


---

## hardBlockerFoundation honesty excerpt

```ts
iam: "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER"
persistenceProduct: "NOT_SELECTED"
openHard: true
deliveryReady: false
```

R-T-A3-1 proofAvailable includes `authjs-github-identity-adapter`, `jwt-session-no-db-adapter`.
proofMissing includes live GitHub OAuth proof / Morris GO for REAL Critical execution.
reductionEvidence notes IAM SELECTED Auth.js+GitHub with live OAuth proof pending.

---

## Secrets / OAuth setup (classes only — NO values)

| Variable class | Ambient presence |
| --- | --- |
| AUTH_SECRET | absent |
| AUTH_GITHUB_ID | absent |
| AUTH_GITHUB_SECRET | absent |
| AUTH_MORRIS_GITHUB_SUBJECT | absent |

**LIVE_GITHUB_OAUTH_PROOF=BLOCKED — MORRIS MANUAL OAUTH APP / CREDENTIAL SETUP REQUIRED**

Manual checkpoint:
- Local app URL: `http://localhost:3020`
- Callback URL: `http://localhost:3020/api/auth/callback/github`
- Create GitHub OAuth App (user action) with identity-only scopes
- Set AUTH_SECRET / AUTH_GITHUB_ID / AUTH_GITHUB_SECRET (and optional AUTH_MORRIS_GITHUB_SUBJECT) in local env — not created by this delivery
- Secret values exposed in pack/logs: **0**

---

## QA results

### Targeted (critical-ack + IAM)

| Suite | Result |
| --- | --- |
| `__tests__/oa/critical-ack/*` | **7 files / 44 tests PASS** |
| IAM-QA unit (`authJsGitHubIdentityAdapter`) | PASS |
| IAM-QA integration (`iamQaCriticalAck`) | PASS |
| Auth config invariants | PASS |
| Import boundaries (AuthJs export OK; Fake banned) | PASS |
| AcknowledgeCritical / DUR / sqlite gate | PASS |
| hard foundation iam SELECTED expectation | PASS (15 platform hard/ta6 tests) |

### Tooling

| Check | Result |
| --- | --- |
| `npm run typecheck` | PASS (exit 0) |
| `npm run lint` | PASS (exit 0) |
| `npm run build` | PASS (exit 0) — route `/api/auth/[...nextauth]` present |

### Broad vitest

| Check | Result |
| --- | --- |
| Broad suite excl. `__tests__/oa/finops/postgres/**` | 163 files PASS; 2 files timed out at default 5s under load |
| Reserve re-run (30s timeout) of those 2 ops1 files | **16/16 PASS** — load flake, not Auth.js regression |
| Finops postgres env-only | RESERVE / excluded (documented) |

Corrective loops used: **1** (lazy auth import + IAM-QA-11 fixture), completed before freeze; QA then ran without product mutations.

Honest note on freeze vs QA:
- Implementation corrective loop completed before freeze.
- Freeze SHA `e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e` then QA (typecheck/lint/build/vitest) ran without further product file mutations.
- Candidate byte-identical throughout QA: **YES** (`RECOMPUTE == FREEZE_SHA`).

---

## IAM-QA / Critical Ack coverage summary

- null session → null / IDENTITY_REQUIRED (no Fake)
- missing / non-numeric githubAccountId → null
- login/email alone → null
- valid numeric → `github:N` + AUTH_JS_GITHUB
- AUTH_MORRIS_GITHUB_SUBJECT → actor:morris without canActAsMorris grant
- hostile claimedActorId/displayName ignored
- wrong subject without Morris evidence → AUTHORITY_DENIED / MORRIS_GATE_DENIED
- valid subject + registerMorris + scope → ack ok
- wrong scope / fingerprint / replay / DUR-4 restart with valid session still requires Ack path (session ≠ authority)
- Fake not on production barrel
- JWT / no DB adapter / no Credentials / scope read:user asserted on disk + package pin

D-01…D-10 durability matrix: PASS (7 tests).

---

## R-T-A3 / honesty / Gate D

| Item | Assessment |
| --- | --- |
| R-T-A3-1 gained | Auth.js GitHub identity adapter; JWT/no-DB; Critical Ack automated path with injected session |
| R-T-A3-1 missing | Live GitHub OAuth proof; Morris GO for REAL Critical execution; public HTTP Critical Ack API still not claimed |
| R-T-A3-2 | Unchanged — local journal only; crossStoreDurable=false; productionRollbackProven=false; persistenceProduct=NOT_SELECTED |
| IAM honesty | SELECTED Auth.js+GitHub JWT/no-DB; live unproven |
| openHard | true |
| deliveryReady | false |
| Gate D technical prerequisites | **NOT_SATISFIED** (live OAuth proof pending) |
| Gate D consumed | **0 / NOT CONSUMED** |
| Cursor REAL | **0** |
| External REAL effects | **0** |

---

## Candidate manifest

```
# F3 Auth.js + GitHub IAM Delivery — candidate manifest
# Branch: delivery/sfia-studio-f3-real-prerequisites
# HEAD: 4b1a058050ae81d56cb6d96b88e8a57380799a86
# Generated: 2026-08-11T22:34:15Z
# Authenticated identity proof: IMPLEMENTED_BUT_LIVE_UNPROVEN
# Honesty: openHard=true deliveryReady=false iam=SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER persistenceProduct=NOT_SELECTED
# OLD_CANDIDATE_SHA: c7f194d841655e6eacd5c9c326af18909b23826b77b00abc64ea23a56e4bfcfc
# NEW_CANDIDATE_SHA: e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e
# path sha256
projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts 70707ef6bd96fe346f66ddd4e16d90d2f3310167f55b6c604bd358edf1e36892
projects/sfia-studio/app/__tests__/oa/critical-ack/authJsConfigInvariants.test.ts 2e8a04da32471a3a4c8d269de689f945ff533c13f49273267f29d0eb5f478a99
projects/sfia-studio/app/__tests__/oa/critical-ack/authJsGitHubIdentityAdapter.test.ts 76ec1d60aaca46837485538c8c38c826bcec93d066dd1c1ba243c4ef0b930238
projects/sfia-studio/app/__tests__/oa/critical-ack/durabilityMatrix.test.ts f3eafc48c10b328019d0527433e774e23c6540afe243ec2a6e7a762248349c1b
projects/sfia-studio/app/__tests__/oa/critical-ack/iamQaCriticalAck.test.ts 1f092ddfaefb3515b0986c85d7aba13b1f0919a8e0b4c0ae5a62e4908ae437cb
projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts f2f998766435efc95b8df22f43fa69fdad7dd794f7568dd6af8ae77d738dbde2
projects/sfia-studio/app/__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts 5fd457b743ca9d4bfa06e040895edd9430cabd51a28f1649e1cdf2e16d768817
projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts c5dd4db8893504158209f4f463af6d0e07dd1803f6e90197377e2c8eeb8054ad
projects/sfia-studio/app/app/api/auth/[...nextauth]/route.ts c3e8185d66af3fe7019dd236a463365cce7e1e8dcaea2a7c3b8f0b103e930ce4
projects/sfia-studio/app/auth.ts 11c95a177019c55ee94895365575db2c624acfd022d593f5be918b703d171078
projects/sfia-studio/app/lib/d1/db.ts a2373e6c2e114e4b71e3660f534774e5abad26459079284c0d57d5924cf121e9
projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts 177ff9bf2607db91a9f6cddbacc0ce03f8f00f0da4dd59ae91d8ce4fcb4689e0
projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts 20c0da81afbc70a820fba7d0c8eb501b413d56974e450f5c75a5cb22134ca227
projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts db0fc1dca37e7e55b7c4d202af9bd5c77fe135bb65260957201ba93f46d66569
projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts a4aca040497d0aeba75aef6bdaac157a3f158b1ea2438ba7845ec9f31881d0ef
projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts 09e79c716e2baa699ed01b310f3fd52a04100cbe0a66ec3f1fd0369fcdf311f1
projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts 1a49bc598be24e3e4d20124282b90229d8f66db54dc4e2a3a60d55ac6239a399
projects/sfia-studio/app/lib/oa/critical-ack/index.ts 257a2a8d16a119308970afd8545dd527b855d06f646822806c27091dbb16e80b
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/authJsGitHubIdentityAdapter.ts 3e82214980d1076d862c04b5e4e890b91c1a311b7babbaa5f2f5c3c5aa099acd
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/githubSubjectActorBinding.ts 95a028957d7d2d83ca7790d8bab1505b290cd7f66c3d7b1a20205226585aba3b
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts 2d05ab8a5a126d219d2a6efd8151987391e9479a643eaaec3d77352e70f03fae
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts 1eaec3751b4159597b7f3e5de009fe2e7be21b829e28462b2e7261b54b8de294
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts 88f8e36dba3bbf99e31c842a5da1f00115b057c52925992b631721d9f9cec24f
projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts 9959e90c64a5952ad3f537182377a5882a982d9b07d4272fd5cb87b1a1334845
projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts f7593f814fdcead7270532062de8e599bfe476ab379a6f2a779aeec71b24762d
projects/sfia-studio/app/lib/oa/critical-ack/testing.ts b772c06f1fa2433082667f0e3ab8b3e99ca0477b6323ca0985b87fc41820b775
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts 5572cd74c846c94cf75ec26e9b4d14efd45b7f2470175991dd1740d3bc4aae7b
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts 05991677647730572e054b9897d9336797a531fa01eff56b51885251c14debef
projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts bbd421f9303062ac539f48e037b306744ff7f6f540c1ed867624bfb9fa483453
projects/sfia-studio/app/lib/oa/execution-contract/index.ts 91e5f1afbe0ecdf91feee96ef92bdca45171b50b2b39c589d6184d87248b9fba
projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts 8ef1879a418a66f7d4b6ab0c51524dc368af2a9d6bce2efa23242785d3637923
projects/sfia-studio/app/package-lock.json 3d41ef451981ebf37df9e331d86d44d9fb37f1d5f93d1b66ca85355e6d7678c8
projects/sfia-studio/app/package.json 58463b8b5fa7fa5fef86a7aa1bdb3e6c9266d2b7ff74c6280b7decc52a1def59
projects/sfia-studio/app/types/auth.d.ts f9081d8e2df2478916ea4ec301d26b0fe731645aa8c0cc4620624b240b46e9d9

```

---

## Reserves

1. LIVE_GITHUB_OAUTH_PROOF blocked — Morris must create OAuth App + set AUTH_* locally
2. Broad vitest ops1 5s timeouts under full-suite load (re-run PASS) — document flake reserve
3. Finops postgres env-only suite excluded
4. Product persistence remains NOT_SELECTED
5. Gate D NOT READY / NOT CONSUMED
6. No Cursor REAL

---

## Next Morris GO candidate (wording)

```
GO PROVE F3 LIVE GITHUB OAUTH —
MANUAL OAUTH APP + AUTH_SECRET/AUTH_GITHUB_ID/AUTH_GITHUB_SECRET SETUP —
BIND OPTIONAL AUTH_MORRIS_GITHUB_SUBJECT —
VALIDATE LOCAL LOGIN http://localhost:3020/api/auth/callback/github —
PROVE AuthJsGitHubIdentityAdapter.resolvePrincipal LIVE —
REASSESS R-T-A3-1 / GATE D READINESS —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
NO PROJECT GIT WRITE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED
```

---

## Verdict (exact §38)

```
F3 AUTH.JS + GITHUB IAM DELIVERY + QA COMPLETE WITH LIVE AUTH RESERVE —
AUTH.JS + GITHUB OAUTH ADOPTED AND IMPLEMENTED —
JWT SESSION / NO DB ADAPTER CONFIRMED —
AUTHENTICATEDIDENTITYPORT ADAPTER AUTOMATED QA PASS —
LIVE GITHUB OAUTH PROOF PENDING MORRIS MANUAL SETUP —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
R-T-A3-1 REMAINS OPEN HARD —
NO CURSOR REAL —
GATE D NOT READY —
PACKAGE RE-FROZEN —
FULL REVIEW PACK COMPLETE —
HANDOFF REMOTE VERIFIED —
MINIMAL LIVE AUTH PROOF REQUIRED
```

---

## Handoff publication (publish-in-cycle)

| Field | Value |
| --- | --- |
| Mode | publish-in-cycle |
| Branch | `sfia/review-handoff` |
| Canonical file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Expected commit message | `docs(review-handoff): publish F3 Auth.js GitHub IAM delivery QA` |
| Fast-forward only | YES |
| Force | NO |
| Remote FINAL tip/blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

END OF FULL REVIEW PACK
