# SFIA STUDIO NEXT — FULL REVIEW PACK
# R5 / ML1 — Entrée & continuité — GO D3 LOCAL 2026-11-04

## 1. Timestamp
2026-11-04T09:37:56+01:00 (Europe/Paris)

## 2. Objectif / IN / OUT
Construire le premier vertical utilisable: login identité Studio, portefeuille, sas durable sans projet, Nora utile, premier document, acte « Créer le projet » transactionnel/idempotent, continuité du fil. OUT: ML2–ML5 positifs, push projet/PR/merge, STABLE, RECETTE gelée non disponible.

## 3. Local Git Truth Check
- Repo: mcleland147/sfia-workspace
- Branch projet locale: `sfia/next-access-preparation-continuity` (NOT published)
- HEAD/base: `61a6765a4e8d92760aab595b61b66aa2425906c6` = origin/main
- Project push/PR/merge: **NOT DONE / NOT AUTHORIZED**
- Protected paths: untouched
- Dirty: local Next construction + delivery-history/CHANGELOG + spec §14 sync + review pack

## 4. Git Review Index
```
base branch: origin/main @ 61a6765a4e8d92760aab595b61b66aa2425906c6
HEAD: 61a6765a4e8d92760aab595b61b66aa2425906c6 (no project commit)
fichiers créés: projects/sfia-studio-next/web/** (+ delivery-history, CHANGELOG, spec §14)
commits projet: NONE (local only)
tests: vitest unit 3 PASS; integration PG 9 PASS; DEV smoke HTTP 200
review pack: full
Fake/Real applicable: OUI
niveau preuve: DETERMINISTIC + DATABASE INTEGRATION + BROWSER smoke partial; OAuth LIVE BLOCKED; Nora LIVE BLOCKED (no key); Figma native PARTIAL; REAL Git/Cursor N/A
```

## 5. Sources lues (refs/SHA)
| Source | SHA blob HEAD |
| --- | --- |
| routing-guide §4.3.0b | 3315bbae4757ad42255d16cba47d9e32be2a7842 |
| template v2.6 | f4fdb488fdf81fa9bf874c1c24c1a22d0cb296c1 |
| SEF.md | 4c6cbea4e5c32029df17673eb2c66db56afdf5ad |
| roadmap.md | 8f5692ef89153ded263c7f2f090059e503037da3 |
| qualification.md | ab34fee4cb0c30087f0170a806510b760ea90f9e |
| specification-technique.md | 701fe74cdbbc20829a5cbee173b23ceab5e1484b (plus §14 local) |
| ENV-01 / product-versioning / R2-R4 | lus depuis HEAD |

## 6. Versions techniques
- Node v24.16.0 / Next 15.1.3 / React 19 / better-auth 1.7.16 / drizzle-orm 0.45.4 / postgres.js 3.4.5 / vitest 3.2.4 / Playwright installed as dep
- package.json version technical `0.0.0-dev` ≠ product release
- Product STABLE: NOT AVAILABLE; target NO RELEASE; RC proposal not attributed
- schema_revision: 001_initial_studio_core
- DEV lane: app 127.0.0.1:3100 ; Postgres docker sfia-next-dev-pg 127.0.0.1:5433
- RECETTE: NOT AVAILABLE ; STABLE: NOT AVAILABLE

## 7. D1–D4 livrés
- D1: sessions PG + DEV test login + portfolio API/UI; GitHub OAuth mount status endpoint (secrets BLOCKED)
- D2: preparations, createProjectCommand with FOR UPDATE + idempotency + fingerprint + reconcile read-only
- D3: messages persisted before provider; deterministic Nora adapter; OPENAI path present but unused without key
- D4: documents + immutable revisions in PostgreSQL; identity preserved after attach
- Boundaries: non-effects probe cycle/git/cursor/mandate = false

## 8. A01–A16
| QA | Verdict | Preuve |
| --- | --- | --- |
| A01 | PASS (DB+API) | integration + smoke prep without project |
| A02 | PARTIAL | fixture Nora COMPLETE; LIVE BLOCKED no OPENAI_API_KEY |
| A03 | PASS | create only via dedicated command |
| A04 | PASS | concurrent Promise.all → 1 project |
| A05 | PASS | replay ALREADY_CREATED same projectId |
| A06 | PASS | stale revision CONFLICT; prep remains OPEN |
| A07 | PASS | message ids identical after create |
| A08 | PASS | documentId preserved + projectId set |
| A09 | PASS/PARTIAL | AVAILABLE after persist; forced FAILED path not crash-injected |
| A10 | PASS | pilot B cannot open A's prep; B projects empty |
| A11 | PARTIAL | generic non-reinjection N/A sources ML1; Git revocation OUT |
| A12 | PASS | two SameName projects distinct ids |
| A13 | PARTIAL | context snippets from durable msgs; no second LIVE conversation proof |
| A14 | PASS (structural) | portfolio has no global Nora; browser UI present |
| A15 | PASS | sideEffects all false on create response |
| A16 | PASS/PARTIAL | reopen prep by id; backup restore DATA-01 NOT RUN |

## 9. Fake/Real Qualification
| Boundary | Adapter | Proof obtained | Not obtained |
| --- | --- | --- | --- |
| GitHub OAuth | Better Auth mount + DEV test login | DEV login labeled fake | REAL OAuth |
| PostgreSQL | Docker 16 real | migrations + 9 integration tests | RECETTE lane |
| Nora | deterministic fixture / optional OpenAI | fixture COMPLETE in smoke | LIVE OpenAI |
| Figma | MCP get_metadata 94:50 | rail width 246 native | full frames + screenshots |
| Browser | Next DEV + curl session cookies | login/portfolio/prep/messages 200 | Playwright E2E suite not executed |
| Git/Cursor D9/D7 | out of scope probes | absence asserted | REAL external |

## 10. Tests exécutés
- `npm run test:unit` → 3 PASS
- `npm run test:integration` → 9 PASS
- DEV server smoke curl → login/portfolio/preparations/messages 200
- `npx tsc --noEmit` → PASS
- Playwright E2E: NOT RUN (browsers not installed in this cycle)
- OpenAI LIVE: NOT RUN (no key)
- GitHub OAuth LIVE: NOT RUN (no client secrets)

## 11. Réserves / dette / exit
1. OAuth GitHub secrets manquants → BLOCKED for E2E01 auth réelle
2. OPENAI_API_KEY absent → Nora LIVE BLOCKED
3. UX R3 full fidelity incomplete (rail 246 extracted; screenshots missing)
4. RECETTE candidate / immutable SHA NOT AVAILABLE (no project commit)
5. DATA-01 archive/backup restore NOT IMPLEMENTED beyond schema durability
6. Better Auth full GitHub plugin wiring incomplete (status route only) — exit: complete when secrets available
7. No project push — working tree only

## 12. Verdict
**PARTIAL WITH RESERVES — READY FOR CHATGPT REVIEW (local D3 progress)**
Not E2E READY / Not RECETTE READY / Not STABLE / Not ADOPTED.
Gate Morris next: secrets OAuth/OpenAI if LIVE proofs required; GO push branche projet; GO PR/merge séparés; éventuelle attribution RC.

## 13. File index (web sources, excl. node_modules/.next)

- `projects/sfia-studio-next/web/.env.example` (source, 482 bytes, sha256:dbfa0d52b6bfe6ba4c0e0d8a1544da6dcb961711b28cf1834f650d54203cf5f7)
- `projects/sfia-studio-next/web/.env.local` (source, 308 bytes, sha256:8796bf8c0df6fdff944497ae8266d9258e948a705064b12b5e6631d02fbdca9c)
- `projects/sfia-studio-next/web/.gitignore` (source, 505 bytes, sha256:7c5f381d8321045e2a86d688f69ea0046877e7a71bca90448d08ba690084c310)
- `projects/sfia-studio-next/web/README.md` (source, 1377 bytes, sha256:cb01aa7fb12c8174ab93daeb778b0eb48edc1de19d9667024e6a084365bfe3cf)
- `projects/sfia-studio-next/web/docs/ux-figma-pending.md` (source, 637 bytes, sha256:21a9733e74b46458926fac5c8baf9cbb7b85d59ea02ea433a7c663deb8ebd3bd)
- `projects/sfia-studio-next/web/drizzle.config.ts` (source, 226 bytes, sha256:af8ad36ceda0ec674dafe068b16a15c810b1c3a1591a3115599bb4a9d21b5c56)
- `projects/sfia-studio-next/web/eslint.config.mjs` (source, 393 bytes, sha256:3de4ba23ff1f687685651cad622700613998de80daa30ac4d82c47776a04019d)
- `projects/sfia-studio-next/web/next-env.d.ts` (source, 211 bytes, sha256:f2b3bca04d1bfe583daae1e1f798c92ec24bb6693bd88d0a09ba6802dee362a8)
- `projects/sfia-studio-next/web/next.config.ts` (source, 133 bytes, sha256:614bce25b089c3f19b1e17a6346c74b858034040154c6621e7d35303004767cc)
- `projects/sfia-studio-next/web/package-lock.json` (lockfile, 349749 bytes, sha256:8ab27b638f3733481b059216419f8be8385e2bf6e0ac2c20948a55a44cba76ab)
- `projects/sfia-studio-next/web/package.json` (source, 1419 bytes, sha256:0c6953b82413807d6598afd9911ddbf553b252f3cacf48ca9117f91180f1b821)
- `projects/sfia-studio-next/web/postcss.config.mjs` (source, 135 bytes, sha256:ac31e2a95ef64fe27ceb4124e101675273107aae2e33bc490b01d919e7f03646)
- `projects/sfia-studio-next/web/public/file.svg` (source, 391 bytes, sha256:2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4)
- `projects/sfia-studio-next/web/public/globe.svg` (source, 1035 bytes, sha256:b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf)
- `projects/sfia-studio-next/web/public/next.svg` (source, 1375 bytes, sha256:55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc)
- `projects/sfia-studio-next/web/public/vercel.svg` (source, 128 bytes, sha256:f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4)
- `projects/sfia-studio-next/web/public/window.svg` (source, 385 bytes, sha256:644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1)
- `projects/sfia-studio-next/web/src/app/api/auth/[...all]/route.ts` (source, 688 bytes, sha256:f55e6008c7f5678227e21054df5d482d46f10952da4a841b3f49108214af1d13)
- `projects/sfia-studio-next/web/src/app/api/dev/login/route.ts` (source, 822 bytes, sha256:4fdf08b37ea77f262f6c7fa5fa42bb01dc22f88c8808cfd8119909b51ff3f275)
- `projects/sfia-studio-next/web/src/app/api/portfolio/route.ts` (source, 563 bytes, sha256:5ed19265ab4931adbec2afc941b148cba366dd4730c04a35ca34c4f941b21d09)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts` (source, 1663 bytes, sha256:9193178e2b81c8b94a8693e26662576f2029413c53c13e5262b2a3476147750a)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts` (source, 1459 bytes, sha256:899144d9dd407929752308ef806bda9a83fd162350b583be0b94516cd6794ee5)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts` (source, 1303 bytes, sha256:47c83bae7557c35e026789110dede9ee63dac8d75c6cfd01075237ec73321cac)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts` (source, 693 bytes, sha256:3cbe736f5d2014a2574b6af88f393bc87906d5754c4c7411ba9b4d4ff0bed347)
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts` (source, 1654 bytes, sha256:b7b4f271c20d779172bc029c53363c95e8419b4cb60e4c65ae8326181eb5b83c)
- `projects/sfia-studio-next/web/src/app/api/preparations/route.ts` (source, 554 bytes, sha256:a78e9e69f41824d570ff400502146a9ade4fca63fbe2a915801d0a5708f305cf)
- `projects/sfia-studio-next/web/src/app/favicon.ico` (source, 25931 bytes, sha256:2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932)
- `projects/sfia-studio-next/web/src/app/globals.css` (source, 1199 bytes, sha256:3e887edcd7d62b26aa31df6a7c5345ca07d841ac69cf942b14b9a27ff513376f)
- `projects/sfia-studio-next/web/src/app/layout.tsx` (source, 1418 bytes, sha256:d76f1e40c928ba6c09fccb754de55ce3bd5dfca95c0bb9762e7847bcb10185f3)
- `projects/sfia-studio-next/web/src/app/login/page.tsx` (source, 2036 bytes, sha256:aec23e28050224dc4af548488d71cd8cd79a765f3a34c6c73e6207bde9681c5c)
- `projects/sfia-studio-next/web/src/app/page.tsx` (source, 106 bytes, sha256:d4850d876786e29d4a2faeb6577ca43d3f02a7f639b904955ac6a8f9f1e3ba31)
- `projects/sfia-studio-next/web/src/app/portfolio/page.tsx` (source, 2935 bytes, sha256:d491861f93d1f89272a052e2b5d0f4f49c5efe774ca0bd42c2c462bbf72b0411)
- `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` (source, 7138 bytes, sha256:a17e8401bd2c39dd7334dd35f6f9d01a597fc9bf024f0c9392f004f963109d27)
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` (source, 2033 bytes, sha256:24b1d8a3bad59cff2ef19ede7e344c3ee1d6bb8748b22817b392ccc61879211b)
- `projects/sfia-studio-next/web/src/db/client.ts` (source, 636 bytes, sha256:7b85871fef598b0afaf4efca59ea996c3ece1dfc4cbf170ad792054a87fb8669)
- `projects/sfia-studio-next/web/src/db/migrations/001_initial_studio_core.sql` (source, 4616 bytes, sha256:5f3e03dc764d0748075b26a67855a18caf0e53282d9713364176be392e0de2c6)
- `projects/sfia-studio-next/web/src/db/schema.ts` (source, 7530 bytes, sha256:1a774b5c797d952291f17db3bd1c692e3a4ed09b33178b484e2cb011010f5e13)
- `projects/sfia-studio-next/web/src/domains/boundaries/non-effects.ts` (source, 857 bytes, sha256:1ede5caa4154d2822c9121f5256f64fc864dba886c4b593b60c7545ab5fc0913)
- `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts` (source, 2867 bytes, sha256:d605258732c64b5607869f7b148b571826c127fbb913bc2f9d82d64a5929a97c)
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts` (source, 2322 bytes, sha256:7180ca938c3ca05459c285f2e492acfe40e4201bb40756f6cb1de7445f38936f)
- `projects/sfia-studio-next/web/src/domains/document/service.ts` (source, 2687 bytes, sha256:e86183905db3ec32a8d3dc7c60cf111570a73b15e55e9154f16ff8f303d50fce)
- `projects/sfia-studio-next/web/src/domains/identity/portfolio.ts` (source, 1450 bytes, sha256:31d40d488392db636ad0ea1abd4541fc8665e81563b7177dd333a8d9fd4f2819)
- `projects/sfia-studio-next/web/src/domains/identity/session.ts` (source, 3604 bytes, sha256:62c18c8dbdda8d9867b554b119d8111b5c7093b99aff4f88e8d87396f5e53a36)
- `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts` (source, 7266 bytes, sha256:03ba6d51d21c146d010e551c6cc4f476f50733dbeae03bacfa11995bce5a4a6f)
- `projects/sfia-studio-next/web/src/domains/preparation/service.ts` (source, 2523 bytes, sha256:6081557fffcacb56c6f8a0a7c14617340ed0ecb1945664150b6ec168f33f5d64)
- `projects/sfia-studio-next/web/src/lib/fingerprint.ts` (source, 658 bytes, sha256:ff03d7de345f0b4ead46d4ca298a0381fbbc519a89a781af797d1d342172af1b)
- `projects/sfia-studio-next/web/src/lib/ids.ts` (source, 158 bytes, sha256:381c9aaa2f44ea98c44c84f8765f8137ec09c65bdb006df3a75aa47a68ed5aac)
- `projects/sfia-studio-next/web/src/lib/product-version.ts` (source, 713 bytes, sha256:938175a86f5f9ab088b8a5e5cefff7421b23e9300995e03e030e1dae680f8594)
- `projects/sfia-studio-next/web/tailwind.config.ts` (source, 393 bytes, sha256:223f2def401123e32ac5664f79c73bdaa8b3a77caf466a304bff919a2a28c16f)
- `projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts` (source, 9031 bytes, sha256:c3edcfd42c0287f4e96ea2c473d9bedb60871e573bc8437d3f9771b7ff9578e9)
- `projects/sfia-studio-next/web/tests/unit/fingerprint.test.ts` (source, 971 bytes, sha256:73af4cb59d01db110762db32cf692655ab828a54442b00bba1cfd14f64720916)
- `projects/sfia-studio-next/web/tests/unit/non-effects.test.ts` (source, 345 bytes, sha256:1bbacd8650e46f7012eb3c1a70d1758cd12705deabe5f00443023b4dd01291bc)
- `projects/sfia-studio-next/web/tsconfig.json` (source, 602 bytes, sha256:83d292a6930a317ea31ef48e220097d2ca10c6c505f41d5954795acef48ca3b9)
- `projects/sfia-studio-next/web/tsconfig.tsbuildinfo` (source, 165904 bytes, sha256:5f7e48757c238a22251d4ffad91c9dbe349ff7762bf49949a7ffbc7cf2583bb5)
- `projects/sfia-studio-next/web/vitest.config.ts` (source, 657 bytes, sha256:c1e82e0c9d94e80d8e56719f01f52966a4923a3280779ee05b06e5be46acc9b6)

## 14. Contenu complet — fichiers critiques


### `projects/sfia-studio-next/web/src/db/schema.ts`

```
import {
  pgTable,
  text,
  timestamp,
  integer,
  uniqueIndex,
  index,
  boolean,
} from "drizzle-orm/pg-core";

/** D1 — Studio pilot identity (internal stable id). */
export const pilots = pgTable(
  "pilots",
  {
    id: text("id").primaryKey(),
    githubUserId: text("github_user_id"),
    displayName: text("display_name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("pilots_github_user_id_uidx").on(t.githubUserId)],
);

/** Better Auth core tables (minimal subset used with drizzle adapter). */
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  pilotId: text("pilot_id").references(() => pilots.id),
});

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
  },
  (t) => [index("sessions_user_id_idx").on(t.userId)],
);

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** D2 — durable preparation without project. */
export const preparations = pgTable(
  "preparations",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    status: text("status").notNull().default("OPEN"), // OPEN | ATTACHED
    creationRevision: integer("creation_revision").notNull().default(1),
    previewName: text("preview_name").notNull().default(""),
    previewSummary: text("preview_summary").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("preparations_owner_idx").on(t.ownerPilotId)],
);

export const projects = pgTable(
  "projects",
  {
    id: text("id").primaryKey(),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("projects_owner_idx").on(t.ownerPilotId)],
);

export const preparationProjectLinks = pgTable(
  "preparation_project_links",
  {
    preparationId: text("preparation_id")
      .primaryKey()
      .references(() => preparations.id),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    attachedAt: timestamp("attached_at", { withTimezone: true }).notNull().defaultNow(),
  },
);

export const createProjectCommands = pgTable(
  "create_project_commands",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    idempotencyKey: text("idempotency_key").notNull(),
    fingerprint: text("fingerprint").notNull(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    result: text("result").notNull(), // CREATED | ALREADY_CREATED | CONFLICT | ...
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("create_project_commands_pilot_key_uidx").on(t.pilotId, t.idempotencyKey),
  ],
);

/** D3 — conversation / messages. */
export const conversations = pgTable(
  "conversations",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("conversations_prep_idx").on(t.preparationId)],
);

export const messages = pgTable(
  "messages",
  {
    id: text("id").primaryKey(),
    conversationId: text("conversation_id")
      .notNull()
      .references(() => conversations.id),
    role: text("role").notNull(), // user | assistant | system
    content: text("content").notNull(),
    status: text("status").notNull(), // COMPLETE | FAILED | INTERRUPTED | UNKNOWN | PENDING
    generationId: text("generation_id"),
    ordinal: integer("ordinal").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("messages_conversation_idx").on(t.conversationId)],
);

/** D4 — documents / revisions. */
export const documents = pgTable(
  "documents",
  {
    id: text("id").primaryKey(),
    preparationId: text("preparation_id")
      .notNull()
      .references(() => preparations.id),
    projectId: text("project_id").references(() => projects.id),
    ownerPilotId: text("owner_pilot_id")
      .notNull()
      .references(() => pilots.id),
    title: text("title").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("documents_prep_idx").on(t.preparationId)],
);

export const documentRevisions = pgTable(
  "document_revisions",
  {
    id: text("id").primaryKey(),
    documentId: text("document_id")
      .notNull()
      .references(() => documents.id),
    revisionNumber: integer("revision_number").notNull(),
    contentMarkdown: text("content_markdown").notNull(),
    status: text("status").notNull(), // SAVING | AVAILABLE | FAILED | UNKNOWN
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("document_revisions_doc_rev_uidx").on(t.documentId, t.revisionNumber),
  ],
);

export const schemaRevision = "001_initial_studio_core";

```


### `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`

```
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  createProjectCommands,
  documents,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { creationFingerprint } from "@/lib/fingerprint";
import { newId } from "@/lib/ids";

export type CreateProjectInput = {
  pilotId: string;
  preparationId: string;
  expectedCreationRevision: number;
  projectName: string;
  previewSummary: string;
  idempotencyKey: string;
};

export type CreateProjectResult =
  | { status: "CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "ALREADY_CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "CONFLICT"; actualCreationRevision: number; reason: string }
  | { status: "FORBIDDEN" }
  | { status: "INVALID_REQUEST"; reason: string };

async function recordCommand(
  tx: Parameters<Parameters<typeof db.transaction>[0]>[0],
  values: {
    pilotId: string;
    idempotencyKey: string;
    fingerprint: string;
    preparationId: string;
    projectId: string;
    result: string;
    createdAt?: Date;
  },
) {
  await tx
    .insert(createProjectCommands)
    .values({
      id: newId("cmd"),
      pilotId: values.pilotId,
      idempotencyKey: values.idempotencyKey,
      fingerprint: values.fingerprint,
      preparationId: values.preparationId,
      projectId: values.projectId,
      result: values.result,
      createdAt: values.createdAt,
    })
    .onConflictDoNothing({
      target: [createProjectCommands.pilotId, createProjectCommands.idempotencyKey],
    });
}

export async function createProjectCommand(input: CreateProjectInput): Promise<CreateProjectResult> {
  const name = input.projectName.trim();
  if (!name) return { status: "INVALID_REQUEST", reason: "projectName required" };
  if (!input.idempotencyKey) return { status: "INVALID_REQUEST", reason: "idempotencyKey required" };

  const fingerprint = creationFingerprint({
    preparationId: input.preparationId,
    projectName: name,
    previewSummary: input.previewSummary,
    expectedCreationRevision: input.expectedCreationRevision,
  });

  // 1) Idempotent replay lookup BEFORE stale-revision rejection
  const prior = (
    await db
      .select()
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, input.pilotId),
          eq(createProjectCommands.idempotencyKey, input.idempotencyKey),
        ),
      )
      .limit(1)
  )[0];

  if (prior) {
    if (prior.fingerprint !== fingerprint) {
      return { status: "CONFLICT", actualCreationRevision: -1, reason: "idempotency fingerprint mismatch" };
    }
    if (prior.projectId) {
      return {
        status: "ALREADY_CREATED",
        projectId: prior.projectId,
        preparationId: prior.preparationId,
        committedAt: prior.createdAt,
      };
    }
  }

  return await db.transaction(async (tx) => {
    // Serialize concurrent creates for the same preparation.
    const locked = await tx.execute(
      sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
    );
    const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
    const prepRow = rows[0];
    if (!prepRow) return { status: "FORBIDDEN" as const };

    const existingLink = (
      await tx
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.preparationId, input.preparationId))
        .limit(1)
    )[0];
    if (existingLink) {
      await recordCommand(tx, {
        pilotId: input.pilotId,
        idempotencyKey: input.idempotencyKey,
        fingerprint,
        preparationId: input.preparationId,
        projectId: existingLink.projectId,
        result: "ALREADY_CREATED",
      });
      return {
        status: "ALREADY_CREATED" as const,
        projectId: existingLink.projectId,
        preparationId: input.preparationId,
        committedAt: existingLink.attachedAt,
      };
    }

    if (Number(prepRow.creation_revision) !== input.expectedCreationRevision) {
      return {
        status: "CONFLICT" as const,
        actualCreationRevision: Number(prepRow.creation_revision),
        reason: "expectedCreationRevision stale",
      };
    }

    const priorTx = (
      await tx
        .select()
        .from(createProjectCommands)
        .where(
          and(
            eq(createProjectCommands.pilotId, input.pilotId),
            eq(createProjectCommands.idempotencyKey, input.idempotencyKey),
          ),
        )
        .limit(1)
    )[0];
    if (priorTx?.projectId) {
      return {
        status: "ALREADY_CREATED" as const,
        projectId: priorTx.projectId,
        preparationId: priorTx.preparationId,
        committedAt: priorTx.createdAt,
      };
    }

    const projectId = newId("proj");
    const now = new Date();
    await tx.insert(projects).values({
      id: projectId,
      ownerPilotId: input.pilotId,
      name,
      createdAt: now,
    });
    await tx.insert(preparationProjectLinks).values({
      preparationId: input.preparationId,
      projectId,
      attachedAt: now,
    });
    await tx
      .update(preparations)
      .set({ status: "ATTACHED", updatedAt: now })
      .where(eq(preparations.id, input.preparationId));
    await tx
      .update(conversations)
      .set({ projectId })
      .where(eq(conversations.preparationId, input.preparationId));
    await tx
      .update(documents)
      .set({ projectId })
      .where(eq(documents.preparationId, input.preparationId));

    await recordCommand(tx, {
      pilotId: input.pilotId,
      idempotencyKey: input.idempotencyKey,
      fingerprint,
      preparationId: input.preparationId,
      projectId,
      result: "CREATED",
      createdAt: now,
    });

    return {
      status: "CREATED" as const,
      projectId,
      preparationId: input.preparationId,
      committedAt: now,
    };
  });
}

/** Read-only reconciliation after lost ACK — never mutates. */
export async function reconcileCreateProject(
  pilotId: string,
  preparationId: string,
  idempotencyKey?: string,
) {
  if (idempotencyKey) {
    const cmd = (
      await db
        .select()
        .from(createProjectCommands)
        .where(
          and(
            eq(createProjectCommands.pilotId, pilotId),
            eq(createProjectCommands.idempotencyKey, idempotencyKey),
          ),
        )
        .limit(1)
    )[0];
    if (cmd?.projectId) {
      return {
        status: "ALREADY_CREATED" as const,
        projectId: cmd.projectId,
        preparationId: cmd.preparationId,
      };
    }
  }
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  if (link) {
    const proj = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    if (proj) return { status: "ALREADY_CREATED" as const, projectId: proj.id, preparationId };
  }
  return { status: "NOT_CONFIRMED_OR_UNKNOWN" as const };
}

```


### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```
import { newId } from "@/lib/ids";

export type NoraGenerateInput = {
  userText: string;
  contextSnippets: string[];
};

export type NoraGenerateResult = {
  content: string;
  status: "COMPLETE" | "FAILED" | "INTERRUPTED" | "UNKNOWN";
  generationId: string;
  mode: "deterministic-fixture" | "openai-live";
};

/**
 * D3 adapter — NEVER uses SDK MemorySession as authority.
 * LIVE path requires OPENAI_API_KEY; otherwise deterministic fixture (not LIVE proof).
 */
export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
  const generationId = newId("gen");
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    const ctx = input.contextSnippets.slice(0, 3).join(" | ");
    return {
      generationId,
      mode: "deterministic-fixture",
      status: "COMPLETE",
      content:
        `Nora (fixture, not LIVE): j'ai bien noté « ${input.userText.slice(0, 240)} ». ` +
        `Je peux clarifier l'intention et proposer un aperçu de projet sans créer quoi que ce soit. ` +
        (ctx ? `Contexte autorisé: ${ctx.slice(0, 200)}` : "Aucun acquis supplémentaire chargé."),
    };
  }

  // Bounded LIVE call — at most used by proof harness; no MemorySession.
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content:
              "Tu es Nora, copilote SFIA Studio. Tu analyses et proposes. Tu ne crées jamais de projet, cycle, dépôt Git ni mandat. Réponds en français, concis.",
          },
          {
            role: "user",
            content: `${input.userText}\n\nContexte autorisé:\n${input.contextSnippets.join("\n")}`,
          },
        ],
      }),
    });
    if (!res.ok) {
      return {
        generationId,
        mode: "openai-live",
        status: "FAILED",
        content: `Échec fournisseur (${res.status}). La conversation antérieure reste conservée.`,
      };
    }
    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      return {
        generationId,
        mode: "openai-live",
        status: "UNKNOWN",
        content: "Réponse fournisseur vide — état UNKNOWN, aucun effet métier.",
      };
    }
    return { generationId, mode: "openai-live", status: "COMPLETE", content };
  } catch {
    return {
      generationId,
      mode: "openai-live",
      status: "INTERRUPTED",
      content: "Appel Nora interrompu — message utilisateur déjà persisté.",
    };
  }
}

```


### `projects/sfia-studio-next/web/src/domains/document/service.ts`

```
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";

const MAX_DOC_CHARS = 100_000;

export async function savePreparationDocument(
  pilotId: string,
  preparationId: string,
  title: string,
  contentMarkdown: string,
  documentId?: string,
) {
  if (contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  let docId = documentId;
  if (!docId) {
    docId = newId("doc");
    await db.insert(documents).values({
      id: docId,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      title: title || "Document du sas",
    });
  } else {
    const owned = (
      await db
        .select()
        .from(documents)
        .where(and(eq(documents.id, docId), eq(documents.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
  }

  const last = (
    await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, docId))
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1)
  )[0];
  const revisionNumber = (last?.revisionNumber ?? 0) + 1;
  const revisionId = newId("drev");

  // Write as SAVING then AVAILABLE only after durable insert confirmed
  try {
    await db.insert(documentRevisions).values({
      id: revisionId,
      documentId: docId,
      revisionNumber,
      contentMarkdown,
      status: "AVAILABLE",
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: docId,
    };
  }

  return {
    status: "AVAILABLE" as const,
    documentId: docId,
    revisionId,
    revisionNumber,
  };
}

export async function listDocuments(pilotId: string, preparationId: string) {
  const docs = await db
    .select()
    .from(documents)
    .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
  const out = [];
  for (const d of docs) {
    const rev = (
      await db
        .select()
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, d.id))
        .orderBy(desc(documentRevisions.revisionNumber))
        .limit(1)
    )[0];
    out.push({ document: d, latestRevision: rev ?? null });
  }
  return out;
}

```


### `projects/sfia-studio-next/web/src/domains/identity/session.ts`

```
import { and, eq, isNull, gt } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, sessions, users } from "@/db/schema";
import { newId } from "@/lib/ids";
import { cookies } from "next/headers";

export type StudioSession = {
  pilotId: string;
  displayName: string;
  sessionId: string;
  authMode: "github-oauth" | "dev-test-login";
};

const COOKIE = "sfia_studio_session";

export async function resolveStudioSession(): Promise<StudioSession | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;

  const rows = await db
    .select({
      sessionId: sessions.id,
      revokedAt: sessions.revokedAt,
      expiresAt: sessions.expiresAt,
      pilotId: pilots.id,
      displayName: pilots.displayName,
      providerId: users.email, // carrier for mode marker in DEV; see ensureDevPilot
    })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .innerJoin(pilots, eq(users.pilotId, pilots.id))
    .where(and(eq(sessions.token, token), isNull(sessions.revokedAt), gt(sessions.expiresAt, new Date())))
    .limit(1);

  const row = rows[0];
  if (!row?.pilotId) return null;
  const authMode = row.providerId?.startsWith("dev+")
    ? ("dev-test-login" as const)
    : ("github-oauth" as const);
  return {
    pilotId: row.pilotId,
    displayName: row.displayName,
    sessionId: row.sessionId,
    authMode,
  };
}

export async function requireStudioSession(): Promise<StudioSession> {
  const s = await resolveStudioSession();
  if (!s) {
    const err = new Error("SESSION_INVALID");
    (err as Error & { code: string }).code = "SESSION_INVALID";
    throw err;
  }
  return s;
}

export async function revokeSession(sessionId: string): Promise<void> {
  await db
    .update(sessions)
    .set({ revokedAt: new Date(), updatedAt: new Date() })
    .where(eq(sessions.id, sessionId));
}

/** DEV-ONLY test login — Fake/Real: NOT GitHub OAuth proof. */
export async function createDevTestSession(which: "a" | "b"): Promise<{ token: string; pilotId: string }> {
  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") {
    throw new Error("DEV_TEST_LOGIN_DISABLED");
  }
  const label = which === "a" ? "Pilot A (DEV)" : "Pilot B (DEV)";
  const email = which === "a" ? "dev+pilot-a@studio.local" : "dev+pilot-b@studio.local";
  const githubMarker = which === "a" ? "dev-github-a" : "dev-github-b";

  let pilot = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, githubMarker)).limit(1)
  )[0];
  if (!pilot) {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId: githubMarker,
      displayName: label,
    });
    pilot = (await db.select().from(pilots).where(eq(pilots.id, pilotId)).limit(1))[0];
  }

  let user = (await db.select().from(users).where(eq(users.email, email)).limit(1))[0];
  if (!user) {
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: label,
      email,
      emailVerified: true,
      pilotId: pilot.id,
    });
    user = (await db.select().from(users).where(eq(users.id, userId)).limit(1))[0];
  } else if (!user.pilotId) {
    await db.update(users).set({ pilotId: pilot.id }).where(eq(users.id, user.id));
  }

  const token = newId("sess");
  const sessionId = newId("sid");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  await db.insert(sessions).values({
    id: sessionId,
    token,
    userId: user.id,
    expiresAt,
  });

  return { token, pilotId: pilot.id };
}

export { COOKIE as STUDIO_SESSION_COOKIE };

```


### `projects/sfia-studio-next/web/src/db/migrations/001_initial_studio_core.sql`

```
CREATE TABLE IF NOT EXISTS pilots (
  id text PRIMARY KEY,
  github_user_id text,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS pilots_github_user_id_uidx ON pilots(github_user_id);

CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  email_verified boolean NOT NULL DEFAULT false,
  image text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  pilot_id text REFERENCES pilots(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id text PRIMARY KEY,
  expires_at timestamptz NOT NULL,
  token text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  ip_address text,
  user_agent text,
  user_id text NOT NULL REFERENCES users(id),
  revoked_at timestamptz
);
CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON sessions(user_id);

CREATE TABLE IF NOT EXISTS accounts (
  id text PRIMARY KEY,
  account_id text NOT NULL,
  provider_id text NOT NULL,
  user_id text NOT NULL REFERENCES users(id),
  access_token text,
  refresh_token text,
  id_token text,
  access_token_expires_at timestamptz,
  refresh_token_expires_at timestamptz,
  scope text,
  password text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS verifications (
  id text PRIMARY KEY,
  identifier text NOT NULL,
  value text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS preparations (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  status text NOT NULL DEFAULT 'OPEN',
  creation_revision integer NOT NULL DEFAULT 1,
  preview_name text NOT NULL DEFAULT '',
  preview_summary text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS preparations_owner_idx ON preparations(owner_pilot_id);

CREATE TABLE IF NOT EXISTS projects (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS projects_owner_idx ON projects(owner_pilot_id);

CREATE TABLE IF NOT EXISTS preparation_project_links (
  preparation_id text PRIMARY KEY REFERENCES preparations(id),
  project_id text NOT NULL REFERENCES projects(id),
  attached_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS create_project_commands (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  idempotency_key text NOT NULL,
  fingerprint text NOT NULL,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  result text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS create_project_commands_pilot_key_uidx
  ON create_project_commands(pilot_id, idempotency_key);

CREATE TABLE IF NOT EXISTS conversations (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS conversations_prep_idx ON conversations(preparation_id);

CREATE TABLE IF NOT EXISTS messages (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  role text NOT NULL,
  content text NOT NULL,
  status text NOT NULL,
  generation_id text,
  ordinal integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS messages_conversation_idx ON messages(conversation_id);

CREATE TABLE IF NOT EXISTS documents (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  title text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS documents_prep_idx ON documents(preparation_id);

CREATE TABLE IF NOT EXISTS document_revisions (
  id text PRIMARY KEY,
  document_id text NOT NULL REFERENCES documents(id),
  revision_number integer NOT NULL,
  content_markdown text NOT NULL,
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS document_revisions_doc_rev_uidx
  ON document_revisions(document_id, revision_number);

```


### `projects/sfia-studio-next/web/README.md`

```
# SFIA Studio — web application (DEV lane)

Technical package under `projects/sfia-studio-next/web`.
**Product STABLE version: NOT AVAILABLE.** `package.json` version `0.0.0-dev` is technical only (`NO RELEASE`).

## Prerequisites

- Node ≥ 20
- Docker PostgreSQL DEV: container `sfia-next-dev-pg` on `127.0.0.1:5433`
- `.env.local` (not committed) — see `.env.example`

## Start DEV (port 3100)

```bash
# Postgres
docker start sfia-next-dev-pg || docker run -d --name sfia-next-dev-pg \
  -e POSTGRES_USER=sfia_next_dev \
  -e POSTGRES_PASSWORD=sfia_next_dev_local_only \
  -e POSTGRES_DB=sfia_next_dev \
  -p 127.0.0.1:5433:5432 postgres:16-alpine

# Migrate
docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev \
  < src/db/migrations/001_initial_studio_core.sql

# App
npm install
npm run dev
```

Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1`, use Pilote A/B on `/login`.
**DEV login is not GitHub OAuth proof.**

## Tests

```bash
npm run test:unit
npm run test:integration
```

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | BLOCKED without client secrets; mount reports status |
| PostgreSQL | REAL DEV container on 5433 |
| Nora | Deterministic fixture unless `OPENAI_API_KEY` set (LIVE bounded) |
| Figma native | PENDING — see `docs/ux-figma-pending.md` |
| RECETTE/STABLE | NOT AVAILABLE |

```


### `projects/sfia-studio-next/construction/delivery-history.md`

```
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / entrée & continuité (premier vertical) |
| Type | INC / nouvelle capacité, pré-1.0 |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Working tree | local uncommitted construction under `projects/sfia-studio-next/web` |
| Product version target | `NO RELEASE` (proposal `0.1.0-rc.1` not attributed) |
| Lane | DEV (`127.0.0.1:3100`, Postgres `5433`) |
| Schema revision | `001_initial_studio_core` |
| Tests | Vitest unit + PostgreSQL integration (see web test run) |
| Evidence limits | GitHub OAuth LIVE BLOCKED without secrets; OpenAI LIVE optional; Figma native pending; RECETTE NOT AVAILABLE |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge |


```


### `projects/sfia-studio-next/CHANGELOG.md`

```
# Changelog — SFIA Studio Next (product)

No promoted product release yet.

## Unreleased

- Local DEV construction of access / preparation / Nora / first document / explicit project creation.
- **STABLE: NOT AVAILABLE**
- **No RC attributed** until Morris gate on a frozen candidate.

```


## 15. Diff utile — specification-technique.md §14 ajouté

```markdown
## 14. Implémentation locale DEV (working tree — 2026-11-04)

> **Statut :** working tree local sur branche `sfia/next-access-preparation-continuity` ; **pas de push projet** ; **pas VALIDATED SPEC remplacée**. Cette section aligne la spécification sur le runtime effectivement amorcé.

| Choix | Valeur retenue dans ce lot |
| --- | --- |
| Application | `projects/sfia-studio-next/web` — Next.js 15 App Router + React 19 + TypeScript |
| Auth | Better Auth tables + session cookie ; GitHub OAuth mount prêt ; **DEV test login** sous `STUDIO_DEV_TEST_LOGIN=1` (non-preuve OAuth) |
| SQL | PostgreSQL 16 Docker DEV `:5433` + Drizzle schema + migration `001_initial_studio_core` |
| Nora | Adaptateur D3 ; fixture déterministe si pas de `OPENAI_API_KEY` ; pas de MemorySession propriétaire |
| Documents | Texte/Markdown versionné en PostgreSQL (D4) |
| Version produit | `NO RELEASE` / STABLE `NOT AVAILABLE` ; package technique `0.0.0-dev` |

Chemins API principaux : `/api/dev/login`, `/api/portfolio`, `/api/preparations`, `/api/preparations/:id/messages|documents|create-project|reconcile`.

```


## 16. Instruction ChatGPT obligatoire
Avant revue Morris, relire `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`, comparer ce rapport, HEAD/base, branche locale non poussée, tests/preuves, fichiers créés/modifiés et handoff distant.
