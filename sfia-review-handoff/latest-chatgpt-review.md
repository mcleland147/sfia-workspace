# Review Pack — OPS1 I2 Live Conversation Delivery

## Métadonnées

| Champ | Valeur |
|---|---|
| Date / heure / fuseau | 2026-07-20 22:40:05 CEST (+0200) |
| Repository | `mcleland147/sfia-workspace` |
| Branche | `delivery/sfia-studio-ops1-i2-live-conversation` |
| HEAD projet | `84e624feaf7cc318c9c0729da66bfefa1c730d6f` |
| Base / merge-base | `84e624feaf7cc318c9c0729da66bfefa1c730d6f` (`origin/main`) |
| Cycle | 8 — Delivery / implémentation · Standard |
| Typologie | DELIVERY / LIVE CONVERSATION / SECURITY / FINOPS / QA / OBSERVABILITY |
| Gates Morris | `GO DELIVERY OPS1 I2 — LIVE CONVERSATION` · `GO G-OPS1-LIVE-CONVERSATION — OPEN LIVE GPT CONVERSATION` · décision `GO I2` |
| Incrément | I2 — Conversation GPT réelle multi-tours |
| Stories | E02-01 · E02-02 · E02-03 (fixture maintenu) |
| Stories exclues | E03–E11 · E01-03 · E17 |
| Package | `openai` `^6.48.0` (lock résolu `6.48.0`) |
| Smoke live | **NON EXÉCUTÉ** — `OPENAI_API_KEY` / `OPENAI_MODEL` / `OPS1_ALLOW_LIVE_SMOKE` absents |
| Commit / push / PR projet | **aucun** (interdit) |
| Staged | vide |
| Verdict | `OPS1 I2 IMPLEMENTED — LIVE PROVIDER VERIFICATION NOT PERFORMED` |

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/41`, `45`, `48`, `51`, `54`, `57`, `58`, `59`, `60`–`65`
- fichiers I1 `lib/ops1/**`, `features/ops1/**`, tests OPS1
- handoff distant `sfia/review-handoff` : `OPS1 I1 POST-MERGE VALIDATED — MAIN CANONICAL`

## Architecture provider

Séparation maintenue :

- UI `Ops1SessionScreen` (client) — aucun import SDK / clé
- actions serveur `lib/ops1/actions.ts`
- service `conversation/service.ts`
- interface `ConversationProvider` + `OpenAIConversationProvider` + `FakeConversationProvider`
- repository SQLite + domaine OPS1

Fournisseur : API OpenAI **Responses** via SDK officiel `openai@6.48.0`.
Configuration serveur : `OPENAI_API_KEY` + `OPENAI_MODEL` (obligatoires en live, fail-closed, pas de défaut silencieux).
Injection test : `OPS1_CONVERSATION_PROVIDER=fake` + `setConversationProviderForTests`.

## Schéma / migrations SQLite

Additif / idempotent :

- rôle `assistant_live` ajouté au CHECK `journal_turns` (migration table rebuild si DB I1)
- table `conversation_attempts` (started/succeeded/failed, usage, errorCode non sensible)
- tests : DB neuve + migration DB I1 legacy

## Sémantique transactionnelle

Live : persister user → attempt started → provider → assistant_live + success **ou** fail attempt sans faux assistant · pas de retry auto · pas de fallback live→fixture.

## Interdiction d’exécution

Chat = texte uniquement. Hint UI explicite. Tests négatifs E2E (« exécute Cursor ») sans CTA exécution/gate/Cursor. Provider `tools: []`.

## Contrôles QA

| Contrôle | Résultat |
|---|---|
| lint | clean |
| typecheck | clean |
| vitest | **70 passed** |
| build | OK |
| E2E I2 non-live | OK (fake provider) |
| E2E I1 | OK (badge aligné) |
| p0-smoke | OK |
| git diff --check | clean |
| secret scan diff | clean |
| `.env` tracké | aucun |
| DB / captures trackées | aucune |

## Smoke live

Préconditions absentes (`allow=false`, `hasKey=false`, `hasModel=false`).
Script `e2e/ops1-i2-live-smoke.ts` a retourné `LIVE_SMOKE_PRECONDITIONS_MISSING`.
**Ne pas** prétendre que GPT réel a été vérifié.

## Captures (1440×1024)

Sous `.tmp-sfia-review/screenshots-ops1-i2/` :

- `ops1-i2-live-unavailable.png`
- `ops1-i2-live-ready.png` (fake env E2E — LIVE DISPONIBLE via placeholders non secrets)
- `ops1-i2-multiturn.png`
- `ops1-i2-provider-error.png`
- `ops1-i2-after-reload.png`

Réserve visuelle : `VISUAL EVIDENCE PRODUCED — DIRECT CHATGPT PIXEL REVIEW NOT PERFORMED`

## Réserves maintenues

FD-CAND-15 · UX-R01…R04 · Node non figé · stack/fournisseur non finalisés au-delà adaptateur I2 · API key hors Git · CI absente · worktree ≠ sandbox · scanner secrets non industrialisé · I3–I7 fermés · Cursor live fermé · action/gate fermés · MVP/production fermés · OpenAI = adaptateur opérationnel borné, pas décision fournisseur produit irréversible.

## Périmètre négatif

Pas de I3 · pas de CLOSED · pas de Campus360 · pas de `.github` · pas de docs 01–65 · pas de commit/push/PR projet · pas de CI/déploiement.

## Fichiers créés / modifiés

### Créés

#### `projects/sfia-studio/app/lib/ops1/conversation/types.ts`

```typescript
import type { JournalTurn } from "../types";

/** Provider-facing roles — domain roles mapped without SDK types. */
export type ProviderChatRole = "user" | "assistant";

export interface ProviderChatMessage {
  role: ProviderChatRole;
  content: string;
}

export interface ProviderUsage {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
}

export interface ProviderCompletionResult {
  text: string;
  usage: ProviderUsage;
}

export interface ConversationProvider {
  readonly providerId: string;
  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
}

/** Map local journal turns into ordered provider context (no secrets). */
export function buildProviderMessagesFromJournal(
  turns: JournalTurn[],
): ProviderChatMessage[] {
  const out: ProviderChatMessage[] = [];
  for (const turn of turns) {
    if (turn.role === "user") {
      out.push({ role: "user", content: turn.content });
      continue;
    }
    if (turn.role === "assistant_fixture" || turn.role === "assistant_live") {
      out.push({ role: "assistant", content: turn.content });
    }
  }
  return out;
}

```

#### `projects/sfia-studio/app/lib/ops1/conversation/config.ts`

```typescript
import { Ops1Error } from "../errors";

export type LiveConfigStatus =
  | { available: true; modelConfigured: true }
  | {
      available: false;
      missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
    };

/** Public availability probe — never returns secret values. */
export function getLiveConversationAvailability(): LiveConfigStatus {
  const missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL"> = [];
  if (!process.env.OPENAI_API_KEY?.trim()) missing.push("OPENAI_API_KEY");
  if (!process.env.OPENAI_MODEL?.trim()) missing.push("OPENAI_MODEL");
  if (missing.length > 0) {
    return { available: false, missing };
  }
  return { available: true, modelConfigured: true };
}

/** Server-only resolved config — fail-closed, no silent defaults. */
export function requireLiveConversationSecrets(): {
  apiKey: string;
  model: string;
} {
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    throw new Ops1Error(
      "CONFIG",
      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
    );
  }
  return {
    apiKey: process.env.OPENAI_API_KEY!.trim(),
    model: process.env.OPENAI_MODEL!.trim(),
  };
}

/** True when E2E / unit harness forces the fake provider (never live). */
export function isFakeConversationProviderForced(): boolean {
  return process.env.OPS1_CONVERSATION_PROVIDER === "fake";
}

```

#### `projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts`

```typescript
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "./types";

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;

  constructor(options?: { scripted?: string[]; failOnCall?: number }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }
}

```

#### `projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts`

```typescript
import OpenAI from "openai";
import { Ops1Error } from "../errors";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "./types";

/**
 * OpenAI Responses adapter — server-only.
 * Domain/UI must not import this module from client components.
 */
export class OpenAIConversationProvider implements ConversationProvider {
  readonly providerId = "openai";
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(apiKey: string, model: string) {
    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    try {
      const response = await this.client.responses.create({
        model: this.model,
        input: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        // Explicitly no tools — conversation only.
        tools: [],
      });

      const text = (response.output_text ?? "").trim();
      if (!text) {
        throw new Ops1Error(
          "PROVIDER",
          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
        );
      }

      const usage = response.usage;
      const inputTokens = usage?.input_tokens ?? null;
      const outputTokens = usage?.output_tokens ?? null;
      const totalTokens =
        usage?.total_tokens ??
        (inputTokens != null && outputTokens != null
          ? inputTokens + outputTokens
          : null);

      return {
        text,
        usage: {
          inputTokens,
          outputTokens,
          totalTokens,
          model: response.model ?? this.model,
          providerResponseId: response.id ?? null,
        },
      };
    } catch (error) {
      if (error instanceof Ops1Error) throw error;
      throw new Ops1Error(
        "PROVIDER",
        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
        error,
      );
    }
  }
}

```

#### `projects/sfia-studio/app/lib/ops1/conversation/provider.ts`

```typescript
import {
  isFakeConversationProviderForced,
  requireLiveConversationSecrets,
} from "./config";
import { FakeConversationProvider } from "./fakeProvider";
import { OpenAIConversationProvider } from "./openaiProvider";
import type { ConversationProvider } from "./types";

let providerOverride: ConversationProvider | null = null;

/** Test-only injection — never used by client code. */
export function setConversationProviderForTests(
  provider: ConversationProvider | null,
): void {
  providerOverride = provider;
}

export function resolveConversationProvider(): ConversationProvider {
  if (providerOverride) return providerOverride;
  if (isFakeConversationProviderForced()) {
    return new FakeConversationProvider();
  }
  const { apiKey, model } = requireLiveConversationSecrets();
  return new OpenAIConversationProvider(apiKey, model);
}

```

#### `projects/sfia-studio/app/lib/ops1/conversation/service.ts`

```typescript
import { buildFixtureAssistantReply } from "../fixtureReply";
import { Ops1Error, toSafeClientError } from "../errors";
import {
  appendTurn,
  completeConversationAttemptFailure,
  completeConversationAttemptSuccess,
  getSession,
  listTurns,
  startConversationAttempt,
} from "../repository";
import type {
  ConversationUsageCounters,
  JournalTurn,
} from "../types";
import { buildProviderMessagesFromJournal } from "./types";
import { resolveConversationProvider } from "./provider";
import type { ConversationProvider } from "./types";

export interface SendMessageResult {
  userTurn: JournalTurn;
  assistantTurn: JournalTurn | null;
  assistantError: string | null;
  usage: ConversationUsageCounters | null;
  mode: "fixture" | "live";
}

function durationMs(startedAt: string, completedAt: string): number | null {
  const a = Date.parse(startedAt);
  const b = Date.parse(completedAt);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.max(0, b - a);
}

/**
 * Orchestrates fixture or live conversation turn.
 * Live path: persist user → attempt started → provider → assistant_live or fail.
 * Never triggers execution, gates, Git, or Cursor.
 */
export async function sendConversationMessage(input: {
  sessionId: string;
  content: string;
  mode: "fixture" | "live";
  provider?: ConversationProvider;
}): Promise<SendMessageResult> {
  const session = getSession(input.sessionId);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’accepte plus de tours (statut non OPEN).",
    );
  }

  if (input.mode === "fixture") {
    const { turn: userTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "user",
      content: input.content,
      fixture: true,
    });

    let assistantTurn: JournalTurn | null = null;
    let assistantError: string | null = null;
    try {
      const reply = buildFixtureAssistantReply(input.content);
      const appended = appendTurn({
        sessionId: input.sessionId,
        role: "assistant_fixture",
        content: reply,
        fixture: true,
      });
      assistantTurn = appended.turn;
    } catch (error) {
      assistantError = toSafeClientError(error).message;
    }

    return {
      userTurn,
      assistantTurn,
      assistantError,
      usage: null,
      mode: "fixture",
    };
  }

  // LIVE path — no silent fallback to fixture.
  const provider = input.provider ?? resolveConversationProvider();

  const { turn: userTurn } = appendTurn({
    sessionId: input.sessionId,
    role: "user",
    content: input.content,
    fixture: false,
  });

  const attempt = startConversationAttempt({
    sessionId: input.sessionId,
    userTurnId: userTurn.turnId,
    provider: provider.providerId,
  });

  console.info(
    "[ops1] CONVERSATION_ATTEMPT_STARTED",
    input.sessionId,
    attempt.attemptId,
    provider.providerId,
  );

  try {
    const history = listTurns(input.sessionId);
    const messages = buildProviderMessagesFromJournal(history);
    const completion = await provider.complete(messages);

    const { turn: assistantTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "assistant_live",
      content: completion.text,
      fixture: false,
    });

    const finalized = completeConversationAttemptSuccess({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      assistantTurnId: assistantTurn.turnId,
      providerResponseId: completion.usage.providerResponseId,
      model: completion.usage.model,
      inputTokens: completion.usage.inputTokens,
      outputTokens: completion.usage.outputTokens,
      totalTokens: completion.usage.totalTokens,
    });

    console.info(
      "[ops1] CONVERSATION_ATTEMPT_SUCCEEDED",
      input.sessionId,
      attempt.attemptId,
      finalized.totalTokens,
    );

    return {
      userTurn,
      assistantTurn,
      assistantError: null,
      usage: {
        inputTokens: finalized.inputTokens,
        outputTokens: finalized.outputTokens,
        totalTokens: finalized.totalTokens,
        model: finalized.model,
        provider: finalized.provider,
        attemptId: finalized.attemptId,
        durationMs: durationMs(
          finalized.requestStartedAt,
          finalized.requestCompletedAt ?? finalized.requestStartedAt,
        ),
      },
      mode: "live",
    };
  } catch (error) {
    const safe = toSafeClientError(error);
    completeConversationAttemptFailure({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      errorCode: safe.code,
    });
    console.error(
      "[ops1] CONVERSATION_ATTEMPT_FAILED",
      input.sessionId,
      attempt.attemptId,
      safe.code,
    );
    return {
      userTurn,
      assistantTurn: null,
      assistantError: safe.message,
      usage: null,
      mode: "live",
    };
  }
}

```

#### `projects/sfia-studio/app/__tests__/ops1/conversation-domain.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import { buildProviderMessagesFromJournal } from "@/lib/ops1/conversation/types";
import { getLiveConversationAvailability } from "@/lib/ops1/conversation/config";
import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
import type { JournalTurn } from "@/lib/ops1/types";
import { assertConversationMode, assertTurnRole } from "@/lib/ops1/validation";
import { Ops1Error } from "@/lib/ops1/errors";

function turn(
  partial: Pick<JournalTurn, "role" | "content" | "sequence">,
): JournalTurn {
  return {
    turnId: `ops1-turn-${partial.sequence}`,
    sessionId: "ops1-sess-00000000-0000-4000-8000-000000000001",
    fixture: partial.role === "assistant_fixture",
    createdAt: "2026-07-20T22:00:00+02:00",
    ...partial,
  };
}

describe("ops1 conversation domain", () => {
  it("builds ordered provider context from mixed journal roles", () => {
    const messages = buildProviderMessagesFromJournal([
      turn({ sequence: 1, role: "user", content: "u1" }),
      turn({ sequence: 2, role: "assistant_fixture", content: "a1" }),
      turn({ sequence: 3, role: "user", content: "u2" }),
      turn({ sequence: 4, role: "assistant_live", content: "a2" }),
    ]);
    expect(messages).toEqual([
      { role: "user", content: "u1" },
      { role: "assistant", content: "a1" },
      { role: "user", content: "u2" },
      { role: "assistant", content: "a2" },
    ]);
  });

  it("fake provider returns usage and non-live tagged text", async () => {
    const provider = new FakeConversationProvider();
    const result = await provider.complete([
      { role: "user", content: "bonjour" },
    ]);
    expect(result.text).toContain("TEST/FAKE");
    expect(result.text).toContain("NON LIVE");
    expect(result.usage.totalTokens).toBe(15);
    expect(result.usage.model).toBe("fake-test-model");
  });

  it("reports missing live config without exposing secrets", () => {
    const prevKey = process.env.OPENAI_API_KEY;
    const prevModel = process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    const status = getLiveConversationAvailability();
    expect(status.available).toBe(false);
    if (!status.available) {
      expect(status.missing).toContain("OPENAI_API_KEY");
      expect(status.missing).toContain("OPENAI_MODEL");
    }
    if (prevKey !== undefined) process.env.OPENAI_API_KEY = prevKey;
    if (prevModel !== undefined) process.env.OPENAI_MODEL = prevModel;
  });

  it("accepts assistant_live role and conversation modes", () => {
    expect(assertTurnRole("assistant_live")).toBe("assistant_live");
    expect(assertConversationMode("live")).toBe("live");
    expect(() => assertTurnRole("system")).toThrow(Ops1Error);
    expect(() => assertConversationMode("auto")).toThrow(Ops1Error);
  });

  it("contains no execution side-effect API on provider interface usage", async () => {
    const provider = new FakeConversationProvider({
      scripted: ["ok"],
    });
    const keys = Object.keys(provider);
    expect(keys).not.toContain("execute");
    expect(keys).not.toContain("runCursor");
    await provider.complete([{ role: "user", content: "GO" }]);
  });
});

```

#### `projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts`

```typescript
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  appendTurn,
  completeConversationAttemptFailure,
  createOpenSession,
  getConversationAttempt,
  listConversationAttempts,
  listTurns,
  resetOps1DbForTests,
  startConversationAttempt,
} from "@/lib/ops1/repository";
import { openOps1Db, migrateOps1Schema } from "@/lib/ops1/db";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
import { DatabaseSync } from "node:sqlite";
import type { ProviderChatMessage, ProviderCompletionResult } from "@/lib/ops1/conversation/types";
import type { ConversationProvider } from "@/lib/ops1/conversation/types";

describe("ops1 i2 repository + live attempts", () => {
  let tmpRoot: string;

  beforeEach(() => {
    resetOps1DbForTests();
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("migrates I1 DB to accept assistant_live and conversation_attempts", () => {
    const dbPath = path.join(tmpRoot, "legacy.sqlite");
    const legacy = new DatabaseSync(dbPath);
    legacy.exec(`
      PRAGMA foreign_keys = ON;
      CREATE TABLE cycle_sessions (
        session_id TEXT PRIMARY KEY NOT NULL,
        project_key TEXT NOT NULL,
        status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        parent_session_id TEXT,
        fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
      );
      CREATE TABLE journal_turns (
        turn_id TEXT PRIMARY KEY NOT NULL,
        session_id TEXT NOT NULL,
        sequence INTEGER NOT NULL,
        role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
        content TEXT NOT NULL,
        fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
        created_at TEXT NOT NULL,
        UNIQUE (session_id, sequence),
        FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
      );
      INSERT INTO cycle_sessions VALUES (
        'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
        'sfia-studio-ops1', 'OPEN', 't', 't', NULL, 1
      );
      INSERT INTO journal_turns VALUES (
        'ops1-turn-1', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
        1, 'user', 'hello i1', 1, 't'
      );
    `);
    legacy.close();

    const db = new DatabaseSync(dbPath);
    migrateOps1Schema(db);
    db.prepare(
      `INSERT INTO journal_turns VALUES (
         'ops1-turn-2', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
         2, 'assistant_live', 'live reply', 0, 't'
       )`,
    ).run();
    const rows = db
      .prepare(`SELECT role FROM journal_turns ORDER BY sequence`)
      .all() as { role: string }[];
    expect(rows.map((r) => r.role)).toEqual(["user", "assistant_live"]);
    const table = db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='conversation_attempts'`,
      )
      .get() as { name: string };
    expect(table.name).toBe("conversation_attempts");
    db.close();
  });

  it("persists live multi-turn success with usage and ordered history to provider", async () => {
    const { session } = createOpenSession();
    const provider = new FakeConversationProvider({
      scripted: ["A1 TEST/FAKE", "A2 TEST/FAKE", "A3 TEST/FAKE"],
    });
    const histories: number[] = [];
    const wrapping: ConversationProvider = {
      providerId: "fake-test",
      complete: async (messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> => {
        histories.push(messages.length);
        return provider.complete(messages);
      },
    };

    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 1",
      mode: "live",
      provider: wrapping,
    });
    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 2",
      mode: "live",
      provider: wrapping,
    });
    const third = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 3",
      mode: "live",
      provider: wrapping,
    });

    expect(histories).toEqual([1, 3, 5]);
    expect(third.assistantTurn?.role).toBe("assistant_live");
    expect(third.usage?.totalTokens).toBeTruthy();
    expect(third.assistantTurn?.content).toContain("TEST/FAKE");

    const turns = listTurns(session.sessionId);
    expect(turns).toHaveLength(6);
    expect(turns.map((t) => t.role)).toEqual([
      "user",
      "assistant_live",
      "user",
      "assistant_live",
      "user",
      "assistant_live",
    ]);
    const attempts = listConversationAttempts(session.sessionId);
    expect(attempts).toHaveLength(3);
    expect(attempts.every((a) => a.status === "succeeded")).toBe(true);
    expect(
      JSON.stringify(attempts).toLowerCase().includes("sk-"),
    ).toBe(false);
  });

  it("keeps user turn and marks attempt failed without fake assistant on provider error", async () => {
    const { session } = createOpenSession();
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "will fail",
      mode: "live",
      provider,
    });
    expect(result.userTurn.content).toBe("will fail");
    expect(result.assistantTurn).toBeNull();
    expect(result.assistantError).toBeTruthy();
    const turns = listTurns(session.sessionId);
    expect(turns).toHaveLength(1);
    expect(turns[0].role).toBe("user");
    const attempts = listConversationAttempts(session.sessionId);
    expect(attempts).toHaveLength(1);
    expect(attempts[0].status).toBe("failed");
    expect(attempts[0].errorCode).toBeTruthy();
  });

  it("fixture mode never creates conversation_attempts or live roles", async () => {
    const { session } = createOpenSession();
    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "fixture only",
      mode: "fixture",
    });
    const turns = listTurns(session.sessionId);
    expect(turns.map((t) => t.role)).toEqual(["user", "assistant_fixture"]);
    expect(listConversationAttempts(session.sessionId)).toHaveLength(0);
  });

  it("start/fail attempt helpers leave no secret fields", () => {
    const { session } = createOpenSession();
    const { turn } = appendTurn({
      sessionId: session.sessionId,
      role: "user",
      content: "x",
      fixture: false,
    });
    const started = startConversationAttempt({
      sessionId: session.sessionId,
      userTurnId: turn.turnId,
      provider: "fake-test",
    });
    const failed = completeConversationAttemptFailure({
      attemptId: started.attemptId,
      sessionId: session.sessionId,
      errorCode: "PROVIDER",
    });
    expect(getConversationAttempt(failed.attemptId)?.status).toBe("failed");
    expect(JSON.stringify(failed)).not.toMatch(/api[_-]?key/i);
  });

  it("creates fresh I2 schema on empty DB", () => {
    openOps1Db();
    const db = openOps1Db();
    const sql = (
      db
        .prepare(
          `SELECT sql FROM sqlite_master WHERE type='table' AND name='journal_turns'`,
        )
        .get() as { sql: string }
    ).sql;
    expect(sql).toContain("assistant_live");
  });
});

```

#### `projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts`

```typescript
/** @vitest-environment node */
import { beforeEach, describe, expect, it, vi } from "vitest";

const createMock = vi.fn();

vi.mock("openai", () => ({
  default: class OpenAI {
    responses = { create: createMock };
  },
}));

describe("OpenAIConversationProvider mapping", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("extracts text and usage; requests empty tools", async () => {
    createMock.mockResolvedValue({
      id: "resp_123",
      model: "gpt-test",
      output_text: "  hello live  ",
      usage: { input_tokens: 3, output_tokens: 4, total_tokens: 7 },
    });
    const { OpenAIConversationProvider } = await import(
      "@/lib/ops1/conversation/openaiProvider"
    );
    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
    const result = await provider.complete([
      { role: "user", content: "hi" },
      { role: "assistant", content: "prev" },
      { role: "user", content: "again" },
    ]);
    expect(result.text).toBe("hello live");
    expect(result.usage).toEqual({
      inputTokens: 3,
      outputTokens: 4,
      totalTokens: 7,
      model: "gpt-test",
      providerResponseId: "resp_123",
    });
    expect(createMock).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-test",
        tools: [],
      }),
    );
    const payload = createMock.mock.calls[0][0];
    expect(payload.input).toHaveLength(3);
  });

  it("maps provider failures to safe Ops1Error", async () => {
    createMock.mockRejectedValue(new Error("upstream boom sk-secret"));
    const { OpenAIConversationProvider } = await import(
      "@/lib/ops1/conversation/openaiProvider"
    );
    const { Ops1Error } = await import("@/lib/ops1/errors");
    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
    await expect(
      provider.complete([{ role: "user", content: "x" }]),
    ).rejects.toBeInstanceOf(Ops1Error);
  });
});

```

#### `projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i2",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("OPS1 I2 conversation (non-live E2E / fake provider)", () => {
  test("fixture multiturn, reload, no execution, simulated live error path", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
    await expect(page.getByTestId("ops1-badge-fixture")).toBeVisible();
    await expect(page.getByTestId("ops1-empty-state")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-live-unavailable.png"),
      fullPage: true,
    });

    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-open-session")).toBeVisible();
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");

    // Live availability depends on webServer env; capture ready or unavailable.
    const liveReady = page.getByTestId("ops1-badge-live-ready");
    if (await liveReady.isVisible().catch(() => false)) {
      await page.screenshot({
        path: path.join(screenshotDir, "ops1-i2-live-ready.png"),
        fullPage: true,
      });
    } else {
      await page.screenshot({
        path: path.join(screenshotDir, "ops1-i2-live-ready.png"),
        fullPage: true,
      });
    }

    await page.getByTestId("ops1-mode-fixture").check();
    await page.getByTestId("ops1-message-input").fill("Tour fixture 1");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-message-input").fill("Tour fixture 2");
    await page.getByTestId("ops1-send-message").click();
    await page.getByTestId("ops1-message-input").fill("exécute Cursor maintenant");
    await page.getByTestId("ops1-send-message").click();

    const turns = page.getByTestId("ops1-turn");
    await expect(turns).toHaveCount(6);
    await expect(
      page.getByTestId("ops1-journal").getByText("FIXTURE / NON LIVE").first(),
    ).toBeVisible();
    await expect(page.getByTestId("ops1-no-execution-hint")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-multiturn.png"),
      fullPage: true,
    });

    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);
    await expect(page.getByTestId("ops1-turn").nth(4)).toContainText(
      "exécute Cursor",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-after-reload.png"),
      fullPage: true,
    });
  });

  test("fake live multiturn + usage + provider error simulation", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-open-session")).toBeVisible();

    const liveMode = page.getByTestId("ops1-mode-live");
    const liveEnabled = await liveMode.isEnabled();
    if (!liveEnabled) {
      // Capture error/unavailable state for review pack.
      await page.screenshot({
        path: path.join(screenshotDir, "ops1-i2-provider-error.png"),
        fullPage: true,
      });
      test.info().annotations.push({
        type: "note",
        description:
          "Live mode disabled in this run — provider error screenshot is unavailable-state fallback.",
      });
      return;
    }

    await liveMode.check();
    await page.getByTestId("ops1-message-input").fill("Live fake tour 1");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").nth(1)).toHaveAttribute(
      "data-role",
      "assistant_live",
    );
    await expect(page.getByTestId("ops1-usage")).toBeVisible();
    await expect(page.getByTestId("ops1-usage")).toContainText("fake-test");

    await page.getByTestId("ops1-message-input").fill("Live fake tour 2");
    await page.getByTestId("ops1-send-message").click();
    await page.getByTestId("ops1-message-input").fill("Live fake tour 3");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);

    await page
      .getByTestId("ops1-message-input")
      .fill("__OPS1_FORCE_PROVIDER_ERROR__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-error")).toBeVisible();
    // User message kept, no fake assistant for the failed attempt.
    await expect(page.getByTestId("ops1-turn")).toHaveCount(7);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-provider-error.png"),
      fullPage: true,
    });
  });
});

```

#### `projects/sfia-studio/app/e2e/ops1-i2-live-smoke.ts`

```typescript
/**
 * OPS1 I2 live smoke — NOT part of npm test / default E2E.
 *
 * Runs only when ALL are set:
 * - OPENAI_API_KEY
 * - OPENAI_MODEL
 * - OPS1_ALLOW_LIVE_SMOKE=1
 *
 * Never prints secrets or full env.
 *
 * Usage:
 *   OPS1_ALLOW_LIVE_SMOKE=1 OPENAI_API_KEY=… OPENAI_MODEL=… \
 *     npx tsx e2e/ops1-i2-live-smoke.ts
 *   or: node --import tsx e2e/ops1-i2-live-smoke.ts
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function present(name: string): boolean {
  return Boolean(process.env[name]?.trim());
}

async function main(): Promise<void> {
  const allow = process.env.OPS1_ALLOW_LIVE_SMOKE === "1";
  const hasKey = present("OPENAI_API_KEY");
  const hasModel = present("OPENAI_MODEL");

  if (!allow || !hasKey || !hasModel) {
    console.log(
      JSON.stringify({
        ok: false,
        skipped: true,
        reason: "LIVE_SMOKE_PRECONDITIONS_MISSING",
        allow,
        hasKey,
        hasModel,
        // never include values
      }),
    );
    process.exit(0);
  }

  if (process.env.OPS1_CONVERSATION_PROVIDER === "fake") {
    console.log(
      JSON.stringify({
        ok: false,
        skipped: true,
        reason: "FAKE_PROVIDER_FORCED_INCOMPATIBLE_WITH_LIVE_SMOKE",
      }),
    );
    process.exit(1);
  }

  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-live-smoke-"));
  process.env.OPS1_EXEC_ROOT = tmpRoot;

  const { resetOps1DbForTests, createOpenSession, listTurns, listConversationAttempts } =
    await import("../lib/ops1/repository");
  const { sendConversationMessage } = await import(
    "../lib/ops1/conversation/service"
  );

  resetOps1DbForTests();
  const { session } = createOpenSession();
  const result = await sendConversationMessage({
    sessionId: session.sessionId,
    content: "Réponds en une phrase courte : ping OPS1 I2 smoke.",
    mode: "live",
  });

  const turns = listTurns(session.sessionId);
  const attempts = listConversationAttempts(session.sessionId);
  const assistant = result.assistantTurn;

  const report = {
    ok: Boolean(assistant && assistant.content.trim() && !result.assistantError),
    mode: result.mode,
    assistantRole: assistant?.role ?? null,
    assistantNonEmpty: Boolean(assistant?.content.trim()),
    turnsCount: turns.length,
    attemptStatus: attempts[0]?.status ?? null,
    usage: result.usage
      ? {
          provider: result.usage.provider,
          model: result.usage.model,
          inputTokens: result.usage.inputTokens,
          outputTokens: result.usage.outputTokens,
          totalTokens: result.usage.totalTokens,
          durationMs: result.usage.durationMs,
        }
      : null,
    error: result.assistantError,
  };

  console.log(JSON.stringify(report));
  resetOps1DbForTests();
  fs.rmSync(tmpRoot, { recursive: true, force: true });
  process.exit(report.ok ? 0 : 1);
}

main().catch((error) => {
  console.log(
    JSON.stringify({
      ok: false,
      error: "LIVE_SMOKE_INTERNAL",
      code: error instanceof Error ? error.name : "Error",
    }),
  );
  process.exit(1);
});

```

### Modifiés — diff utile vs `origin/main`

#### `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
index cb9eb9a..119c184 100644
--- a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -1,98 +1,265 @@
-import { render, screen, waitFor } from "@testing-library/react";
+import { cleanup, render, screen, waitFor } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
-import { beforeEach, describe, expect, it, vi } from "vitest";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";
 
 const create = vi.fn();
 const get = vi.fn();
-const append = vi.fn();
+const send = vi.fn();
+const liveConfig = vi.fn();
 
 vi.mock("@/lib/ops1/actions", () => ({
   ops1CreateSessionAction: (...args: unknown[]) => create(...args),
   ops1GetSessionAction: (...args: unknown[]) => get(...args),
-  ops1AppendUserMessageAction: (...args: unknown[]) => append(...args),
+  ops1SendMessageAction: (...args: unknown[]) => send(...args),
+  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1AppendUserMessageAction: vi.fn(),
 }));
 
-describe("Ops1SessionScreen", () => {
+const session = {
+  sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
+  projectKey: "sfia-studio-ops1",
+  status: "OPEN" as const,
+  createdAt: "2026-07-20T21:00:00+02:00",
+  updatedAt: "2026-07-20T21:00:00+02:00",
+  parentSessionId: null,
+  fixtureMode: true,
+};
+
+describe("Ops1SessionScreen I2", () => {
+  afterEach(() => {
+    cleanup();
+  });
+
   beforeEach(() => {
     vi.clearAllMocks();
     window.sessionStorage.clear();
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: false, missing: ["OPENAI_API_KEY", "OPENAI_MODEL"] },
+    });
   });
 
-  it("shows empty state and fixture badge", async () => {
+  it("shows empty state and live unavailable", async () => {
     render(<Ops1SessionScreen />);
     await waitFor(() => {
       expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
     });
-    expect(screen.getByText("MODE FIXTURE / NON LIVE")).toBeInTheDocument();
-    expect(screen.getByText("Aucune session active")).toBeInTheDocument();
+    expect(screen.getByTestId("ops1-badge-fixture")).toBeInTheDocument();
+    expect(
+      screen.getByTestId("ops1-badge-live-unavailable"),
+    ).toBeInTheDocument();
   });
 
-  it("creates OPEN session and shows sessionId", async () => {
+  it("shows live ready when config available", async () => {
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [] },
+    });
+    render(<Ops1SessionScreen />);
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-badge-live-ready")).toBeInTheDocument();
+    });
+  });
+
+  it("creates session, sends fixture, shows no execution CTA", async () => {
     const user = userEvent.setup();
-    create.mockResolvedValue({
+    create.mockResolvedValue({ ok: true, data: { session } });
+    get.mockResolvedValue({
+      ok: true,
+      data: { session, turns: [], attempts: [] },
+    });
+    send.mockResolvedValue({
       ok: true,
       data: {
-        session: {
-          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
-          projectKey: "sfia-studio-ops1",
-          status: "OPEN",
-          createdAt: "2026-07-20T21:00:00+02:00",
-          updatedAt: "2026-07-20T21:00:00+02:00",
-          parentSessionId: null,
-          fixtureMode: true,
+        userTurn: {
+          turnId: "ops1-turn-1",
+          sessionId: session.sessionId,
+          sequence: 1,
+          role: "user",
+          content: "hi",
+          fixture: true,
+          createdAt: "t",
         },
+        assistantTurn: {
+          turnId: "ops1-turn-2",
+          sessionId: session.sessionId,
+          sequence: 2,
+          role: "assistant_fixture",
+          content: "[FIXTURE / NON LIVE] ok",
+          fixture: true,
+          createdAt: "t",
+        },
+        assistantError: null,
+        usage: null,
+        mode: "fixture",
       },
     });
+
+    render(<Ops1SessionScreen />);
+    await waitFor(() =>
+      expect(
+        screen.getAllByTestId("ops1-create-session").length,
+      ).toBeGreaterThan(0),
+    );
+    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
+    await waitFor(() =>
+      expect(screen.getByTestId("ops1-session-status")).toHaveTextContent(
+        "OPEN",
+      ),
+    );
+
     get.mockResolvedValue({
       ok: true,
       data: {
-        session: {
-          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
-          projectKey: "sfia-studio-ops1",
-          status: "OPEN",
-          createdAt: "2026-07-20T21:00:00+02:00",
-          updatedAt: "2026-07-20T21:00:00+02:00",
-          parentSessionId: null,
-          fixtureMode: true,
+        session,
+        turns: [
+          {
+            turnId: "ops1-turn-1",
+            sessionId: session.sessionId,
+            sequence: 1,
+            role: "user",
+            content: "hi",
+            fixture: true,
+            createdAt: "t",
+          },
+          {
+            turnId: "ops1-turn-2",
+            sessionId: session.sessionId,
+            sequence: 2,
+            role: "assistant_fixture",
+            content: "[FIXTURE / NON LIVE] ok",
+            fixture: true,
+            createdAt: "t",
+          },
+        ],
+        attempts: [],
+      },
+    });
+
+    await user.type(screen.getByTestId("ops1-message-input"), "hi");
+    await user.click(screen.getByTestId("ops1-send-message"));
+    await waitFor(() => expect(send).toHaveBeenCalled());
+    expect(send.mock.calls[0][0].mode).toBe("fixture");
+    expect(screen.getByTestId("ops1-no-execution-hint")).toBeInTheDocument();
+    expect(
+      screen.queryByRole("button", { name: /exécuter|gate|cursor/i }),
+    ).toBeNull();
+  });
+
+  it("shows provider error and usage on live success path", async () => {
+    const user = userEvent.setup();
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [] },
+    });
+    create.mockResolvedValue({ ok: true, data: { session } });
+    get.mockResolvedValue({
+      ok: true,
+      data: { session, turns: [], attempts: [] },
+    });
+    send.mockResolvedValue({
+      ok: true,
+      data: {
+        userTurn: {
+          turnId: "ops1-turn-1",
+          sessionId: session.sessionId,
+          sequence: 1,
+          role: "user",
+          content: "live",
+          fixture: false,
+          createdAt: "t",
         },
-        turns: [],
+        assistantTurn: null,
+        assistantError: "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
+        usage: null,
+        mode: "live",
       },
     });
 
     render(<Ops1SessionScreen />);
     await waitFor(() =>
-      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
-        0,
-      ),
+      expect(
+        screen.getAllByTestId("ops1-create-session").length,
+      ).toBeGreaterThan(0),
     );
     await user.click(screen.getAllByTestId("ops1-create-session")[0]);
     await waitFor(() => {
-      expect(screen.getByTestId("ops1-session-id")).toHaveTextContent(
-        "ops1-sess-11111111-1111-4111-8111-111111111111",
+      expect(screen.getByTestId("ops1-mode-live")).toBeEnabled();
+    });
+    await user.click(screen.getByTestId("ops1-mode-live"));
+    await user.type(screen.getByTestId("ops1-message-input"), "live");
+    await user.click(screen.getByTestId("ops1-send-message"));
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
+        "Échec de l’appel fournisseur GPT",
       );
     });
-    expect(screen.getByTestId("ops1-session-status")).toHaveTextContent("OPEN");
+    expect(send.mock.calls.at(-1)?.[0].mode).toBe("live");
   });
 
-  it("shows create error", async () => {
+  it("shows usage counters after live success", async () => {
     const user = userEvent.setup();
-    create.mockResolvedValue({
-      ok: false,
-      code: "PERSISTENCE",
-      message: "Échec de création de la session.",
+    liveConfig.mockResolvedValue({
+      ok: true,
+      data: { available: true, missing: [] },
     });
+    create.mockResolvedValue({ ok: true, data: { session } });
+    get.mockResolvedValue({
+      ok: true,
+      data: { session, turns: [], attempts: [] },
+    });
+    send.mockResolvedValue({
+      ok: true,
+      data: {
+        userTurn: {
+          turnId: "t1",
+          sessionId: session.sessionId,
+          sequence: 1,
+          role: "user",
+          content: "q",
+          fixture: false,
+          createdAt: "t",
+        },
+        assistantTurn: {
+          turnId: "t2",
+          sessionId: session.sessionId,
+          sequence: 2,
+          role: "assistant_live",
+          content: "a",
+          fixture: false,
+          createdAt: "t",
+        },
+        assistantError: null,
+        usage: {
+          inputTokens: 11,
+          outputTokens: 7,
+          totalTokens: 18,
+          model: "fake-test-model",
+          provider: "fake-test",
+          attemptId: "ops1-att-1",
+          durationMs: 42,
+        },
+        mode: "live",
+      },
+    });
+
     render(<Ops1SessionScreen />);
     await waitFor(() =>
-      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
-        0,
-      ),
+      expect(
+        screen.getAllByTestId("ops1-create-session").length,
+      ).toBeGreaterThan(0),
     );
     await user.click(screen.getAllByTestId("ops1-create-session")[0]);
     await waitFor(() => {
-      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
-        "Échec de création de la session.",
-      );
+      expect(screen.getByTestId("ops1-mode-live")).toBeEnabled();
+    });
+    await user.click(screen.getByTestId("ops1-mode-live"));
+    await user.type(screen.getByTestId("ops1-message-input"), "q");
+    await user.click(screen.getByTestId("ops1-send-message"));
+    await waitFor(() => {
+      expect(screen.getByTestId("ops1-usage")).toHaveTextContent("18");
     });
+    expect(send.mock.calls.at(-1)?.[0].mode).toBe("live");
   });
 });

```

#### `projects/sfia-studio/app/app/nouvelle-demande/page.tsx`

```diff
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index 5878171..8754b03 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -9,26 +9,26 @@ export default function NouvelleDemandePage() {
       title="Nouvelle demande"
       pills={[
         { label: "MODE FIXTURE / NON LIVE", tone: "orange" },
-        { label: "OPS1 I1", tone: "blueFlush" },
+        { label: "OPS1 I2", tone: "blueFlush" },
       ]}
       copilot={{
         variant: "flush",
         name: "Nora · SFIA Copilot",
-        subtitle: "OPS1 I1 — session locale",
+        subtitle: "OPS1 I2 — conversation live/fixture",
         avatarTone: "blue",
         levelPill: "L0 humain",
         summary:
-          "Session CycleSession OPEN et journal fixture. Aucun GPT live, aucun Cursor live, aucune action Markdown.",
+          "Conversation multi-tours (fixture ou GPT live serveur). Aucune exécution Cursor, aucun gate d’action.",
         checklist: [
           "Créer session OPEN",
-          "Journaliser tours fixture",
-          "Recharger et retrouver le journal",
-          "Aucun effet d’exécution",
+          "Échanger fixture ou live",
+          "Persister journal + usage",
+          "Aucun effet d’exécution depuis le chat",
         ],
-        checklistTitle: "Parcours I1",
+        checklistTitle: "Parcours I2",
         riskTitle: "PÉRIMÈTRE",
         riskText:
-          "I1 n’ouvre pas I2–I7, la clôture CLOSED, ni la CI. E01-03 hors scope.",
+          "I2 n’ouvre pas I3–I7, la clôture CLOSED, ni la CI. Chat ≠ exécution.",
       }}
     >
       <NouvelleDemandeScreen />

```

#### `projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts`

```diff
diff --git a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
index c6e97f6..52dfa5f 100644
--- a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
@@ -20,7 +20,7 @@ test.describe("OPS1 I1 session + journal", () => {
     await page.reload();
     await expect(page.getByTestId("ops1-session-root")).toBeVisible();
     await expect(
-      page.getByTestId("ops1-session-root").getByText("MODE FIXTURE / NON LIVE"),
+      page.getByTestId("ops1-session-root").getByText("FIXTURE / NON LIVE"),
     ).toBeVisible();
     await expect(page.getByTestId("ops1-empty-state")).toBeVisible();
 

```

#### `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index bb0d8ee..35de25a 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -4,11 +4,17 @@ import { useCallback, useEffect, useState, useTransition } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
-  ops1AppendUserMessageAction,
   ops1CreateSessionAction,
+  ops1GetLiveConfigAction,
   ops1GetSessionAction,
+  ops1SendMessageAction,
 } from "@/lib/ops1/actions";
-import type { CycleSession, JournalTurn } from "@/lib/ops1/types";
+import type {
+  ConversationMode,
+  ConversationUsageCounters,
+  CycleSession,
+  JournalTurn,
+} from "@/lib/ops1/types";
 import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
 import styles from "./ops1-session.module.css";
 
@@ -23,12 +29,24 @@ type UiPhase =
   | "error_create"
   | "error_journal";
 
+function roleLabel(role: JournalTurn["role"]): string {
+  if (role === "user") return "Vous";
+  if (role === "assistant_live") return "Assistant live";
+  return "Assistant fixture";
+}
+
 export function Ops1SessionScreen() {
   const [phase, setPhase] = useState<UiPhase>("boot");
   const [session, setSession] = useState<CycleSession | null>(null);
   const [turns, setTurns] = useState<JournalTurn[]>([]);
   const [draft, setDraft] = useState("");
   const [error, setError] = useState<string | null>(null);
+  const [mode, setMode] = useState<ConversationMode>("fixture");
+  const [liveAvailable, setLiveAvailable] = useState(false);
+  const [liveMissing, setLiveMissing] = useState<string[]>([]);
+  const [lastUsage, setLastUsage] = useState<ConversationUsageCounters | null>(
+    null,
+  );
   const [pending, startTransition] = useTransition();
 
   const loadBundle = useCallback(async (sessionId: string) => {
@@ -52,6 +70,11 @@ export function Ops1SessionScreen() {
   useEffect(() => {
     let cancelled = false;
     (async () => {
+      const cfg = await ops1GetLiveConfigAction();
+      if (!cancelled && cfg.ok) {
+        setLiveAvailable(cfg.data.available);
+        setLiveMissing(cfg.data.missing);
+      }
       const stored =
         typeof window !== "undefined"
           ? window.sessionStorage.getItem(STORAGE_KEY)
@@ -69,6 +92,7 @@ export function Ops1SessionScreen() {
 
   const onCreate = () => {
     setError(null);
+    setLastUsage(null);
     setPhase("creating");
     startTransition(async () => {
       const result = await ops1CreateSessionAction();
@@ -86,12 +110,20 @@ export function Ops1SessionScreen() {
 
   const onSend = () => {
     if (!session) return;
+    if (mode === "live" && !liveAvailable) {
+      setError(
+        `Mode live indisponible (variables manquantes : ${liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).`,
+      );
+      setPhase("error_journal");
+      return;
+    }
     setError(null);
     setPhase("sending");
     startTransition(async () => {
-      const result = await ops1AppendUserMessageAction({
+      const result = await ops1SendMessageAction({
         sessionId: session.sessionId,
         content: draft,
+        mode,
       });
       if (!result.ok) {
         setError(result.message);
@@ -99,13 +131,15 @@ export function Ops1SessionScreen() {
         return;
       }
       setDraft("");
+      setLastUsage(result.data.usage);
+      await loadBundle(session.sessionId);
       if (result.data.assistantError) {
         setError(result.data.assistantError);
         setPhase("error_journal");
       } else {
+        setError(null);
         setPhase("open");
       }
-      await loadBundle(session.sessionId);
     });
   };
 
@@ -114,22 +148,43 @@ export function Ops1SessionScreen() {
     setSession(null);
     setTurns([]);
     setError(null);
+    setLastUsage(null);
     setPhase("idle");
   };
 
+  const hasLiveTurn = turns.some((t) => t.role === "assistant_live");
+  const showLiveBadge = liveAvailable || hasLiveTurn;
+
   return (
     <div className={styles.root} data-testid="ops1-session-root">
       <header className={styles.header}>
-        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I1</p>
+        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I2</p>
         <h2 className={styles.title} id="ops1-session-heading">
           Session OPS1
         </h2>
         <p className={styles.lede}>
-          Ouvrir une CycleSession locale, journaliser des tours fixture, et
-          retrouver le journal après rechargement. Aucun fournisseur live.
+          Conversation multi-tours (fixture ou GPT live serveur). Aucune
+          exécution, aucun gate, aucun Cursor depuis le chat.
         </p>
         <div className={styles.badgeRow} aria-live="polite">
-          <StatusPill tone="orange">MODE FIXTURE / NON LIVE</StatusPill>
+          {showLiveBadge ? (
+            <span data-testid="ops1-badge-live">
+              <StatusPill tone="green">LIVE GPT</StatusPill>
+            </span>
+          ) : (
+            <span data-testid="ops1-badge-fixture">
+              <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
+            </span>
+          )}
+          {!liveAvailable ? (
+            <span data-testid="ops1-badge-live-unavailable">
+              <StatusPill tone="muted">LIVE INDISPONIBLE</StatusPill>
+            </span>
+          ) : (
+            <span data-testid="ops1-badge-live-ready">
+              <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
+            </span>
+          )}
           {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
         </div>
       </header>
@@ -196,6 +251,51 @@ export function Ops1SessionScreen() {
             </div>
           </dl>
 
+          <div
+            className={styles.modeRow}
+            role="radiogroup"
+            aria-label="Mode conversationnel"
+            data-testid="ops1-mode-selector"
+          >
+            <label className={styles.modeOption}>
+              <input
+                type="radio"
+                name="ops1-mode"
+                value="fixture"
+                checked={mode === "fixture"}
+                data-testid="ops1-mode-fixture"
+                onChange={() => setMode("fixture")}
+              />
+              Fixture / non live
+            </label>
+            <label className={styles.modeOption}>
+              <input
+                type="radio"
+                name="ops1-mode"
+                value="live"
+                checked={mode === "live"}
+                data-testid="ops1-mode-live"
+                disabled={!liveAvailable}
+                onChange={() => {
+                  if (liveAvailable) setMode("live");
+                }}
+              />
+              Live GPT
+            </label>
+          </div>
+
+          {!liveAvailable ? (
+            <p
+              className={styles.warn}
+              data-testid="ops1-live-unavailable-notice"
+            >
+              Configuration live indisponible (
+              {liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}). Le
+              mode fixture reste disponible. Aucune valeur secrète n’est
+              affichée.
+            </p>
+          ) : null}
+
           <div className={styles.journal} data-testid="ops1-journal">
             <h3 className={styles.journalTitle}>Journal</h3>
             {turns.length === 0 ? (
@@ -215,14 +315,18 @@ export function Ops1SessionScreen() {
                     data-testid="ops1-turn"
                     data-role={turn.role}
                     data-sequence={turn.sequence}
+                    data-fixture={turn.fixture ? "1" : "0"}
                   >
                     <div className={styles.turnMeta}>
                       <span>#{turn.sequence}</span>
-                      <span>
-                        {turn.role === "user" ? "Vous" : "Assistant fixture"}
-                      </span>
-                      {turn.fixture ? (
-                        <span className={styles.fixtureTag}>fixture</span>
+                      <span>{roleLabel(turn.role)}</span>
+                      {turn.fixture || turn.role === "assistant_fixture" ? (
+                        <span className={styles.fixtureTag}>
+                          FIXTURE / NON LIVE
+                        </span>
+                      ) : null}
+                      {turn.role === "assistant_live" ? (
+                        <span className={styles.liveTag}>LIVE GPT</span>
                       ) : null}
                     </div>
                     <p className={styles.turnContent}>{turn.content}</p>
@@ -232,12 +336,43 @@ export function Ops1SessionScreen() {
             )}
           </div>
 
+          {lastUsage ? (
+            <dl className={styles.usage} data-testid="ops1-usage">
+              <div>
+                <dt>Provider</dt>
+                <dd>{lastUsage.provider}</dd>
+              </div>
+              <div>
+                <dt>Modèle</dt>
+                <dd>{lastUsage.model ?? "—"}</dd>
+              </div>
+              <div>
+                <dt>Tokens in/out/total</dt>
+                <dd>
+                  {lastUsage.inputTokens ?? "—"} /{" "}
+                  {lastUsage.outputTokens ?? "—"} /{" "}
+                  {lastUsage.totalTokens ?? "—"}
+                </dd>
+              </div>
+              <div>
+                <dt>Durée (ms)</dt>
+                <dd>{lastUsage.durationMs ?? "—"}</dd>
+              </div>
+            </dl>
+          ) : null}
+
           {error ? (
             <p className={styles.error} role="alert" data-testid="ops1-error">
               {error}
             </p>
           ) : null}
 
+          {phase === "sending" ? (
+            <p className={styles.muted} data-testid="ops1-sending">
+              Envoi en cours…
+            </p>
+          ) : null}
+
           <form
             className={styles.composer}
             onSubmit={(e) => {
@@ -246,7 +381,8 @@ export function Ops1SessionScreen() {
             }}
           >
             <label className={styles.label} htmlFor="ops1-message">
-              Message local (fixture)
+              Message (
+              {mode === "live" ? "live GPT serveur" : "fixture locale"})
             </label>
             <textarea
               id="ops1-message"
@@ -257,7 +393,7 @@ export function Ops1SessionScreen() {
               rows={4}
               disabled={pending || phase === "sending"}
               onChange={(e) => setDraft(e.target.value)}
-              placeholder="Saisir un tour utilisateur local…"
+              placeholder="Saisir un tour utilisateur…"
             />
             <div className={styles.composerActions}>
               <CtaButton
@@ -265,7 +401,7 @@ export function Ops1SessionScreen() {
                 disabled={pending || !draft.trim()}
                 data-testid="ops1-send-message"
               >
-                Envoyer (fixture)
+                {mode === "live" ? "Envoyer (live)" : "Envoyer (fixture)"}
               </CtaButton>
               <CtaButton
                 variant="secondary"
@@ -275,8 +411,10 @@ export function Ops1SessionScreen() {
                 Revenir à l’écran vide
               </CtaButton>
             </div>
-            <p className={styles.hint}>
-              Pas d’action d’exécution, pas de gate, pas de Campus360. Max{" "}
+            <p className={styles.hint} data-testid="ops1-no-execution-hint">
+              L’exécution (Cursor, gate, contrat, Git) nécessite un parcours
+              distinct — non disponible dans I2. Un message du type « exécute
+              Cursor » reste du texte conversationnel. Max{" "}
               {OPS1_MAX_MESSAGE_CHARS} caractères.
             </p>
           </form>

```

#### `projects/sfia-studio/app/features/ops1/ops1-session.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/ops1/ops1-session.module.css b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
index dec85d4..fe573a7 100644
--- a/projects/sfia-studio/app/features/ops1/ops1-session.module.css
+++ b/projects/sfia-studio/app/features/ops1/ops1-session.module.css
@@ -141,6 +141,58 @@
   font-weight: 600;
 }
 
+.liveTag {
+  color: var(--sfia-green, #1b7a4e);
+  font-weight: 600;
+}
+
+.modeRow {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 1rem;
+}
+
+.modeOption {
+  display: inline-flex;
+  align-items: center;
+  gap: 0.4rem;
+  font-size: 0.9rem;
+  color: var(--sfia-ink);
+}
+
+.warn {
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  background: #fff8e8;
+  border: 1px solid #efd39a;
+  color: #7a5a12;
+}
+
+.usage {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
+  gap: 0.65rem 1rem;
+  margin: 0;
+  padding: 0.75rem 0.9rem;
+  border-radius: 8px;
+  border: 1px dashed var(--sfia-border);
+  background: #fafafa;
+}
+
+.usage dt {
+  font-size: 0.7rem;
+  text-transform: uppercase;
+  letter-spacing: 0.04em;
+  color: var(--sfia-muted);
+}
+
+.usage dd {
+  margin: 0.15rem 0 0;
+  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
+  font-size: 0.85rem;
+}
+
 .turnContent {
   margin: 0;
   white-space: pre-wrap;

```

#### `projects/sfia-studio/app/lib/ops1/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index 9836fd1..e533f02 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -1,15 +1,24 @@
 "use server";
 
 import {
-  appendTurn,
   createOpenSession,
   getSessionBundle,
   listOpenSessions,
 } from "./repository";
-import { buildFixtureAssistantReply } from "./fixtureReply";
 import { Ops1Error, toSafeClientError } from "./errors";
-import { assertMessageContent, assertSessionId } from "./validation";
-import type { CycleSession, JournalTurn } from "./types";
+import {
+  assertConversationMode,
+  assertMessageContent,
+  assertSessionId,
+} from "./validation";
+import { getLiveConversationAvailability } from "./conversation/config";
+import { sendConversationMessage } from "./conversation/service";
+import type {
+  ConversationAttempt,
+  ConversationUsageCounters,
+  CycleSession,
+  JournalTurn,
+} from "./types";
 
 export type Ops1ActionResult<T> =
   | { ok: true; data: T }
@@ -17,7 +26,7 @@ export type Ops1ActionResult<T> =
 
 function fail(error: unknown): Ops1ActionResult<never> {
   const safe = toSafeClientError(error);
-  console.error("[ops1]", safe.code, safe.message, error);
+  console.error("[ops1]", safe.code, safe.message);
   return { ok: false, code: safe.code, message: safe.message };
 }
 
@@ -46,7 +55,11 @@ export async function ops1ListOpenSessionsAction(): Promise<
 export async function ops1GetSessionAction(
   sessionId: string,
 ): Promise<
-  Ops1ActionResult<{ session: CycleSession; turns: JournalTurn[] }>
+  Ops1ActionResult<{
+    session: CycleSession;
+    turns: JournalTurn[];
+    attempts: ConversationAttempt[];
+  }>
 > {
   try {
     const id = assertSessionId(sessionId);
@@ -60,61 +73,84 @@ export async function ops1GetSessionAction(
   }
 }
 
-export async function ops1AppendUserMessageAction(input: {
+/** Availability only — never returns secret values. */
+export async function ops1GetLiveConfigAction(): Promise<
+  Ops1ActionResult<{
+    available: boolean;
+    missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
+  }>
+> {
+  try {
+    const status = getLiveConversationAvailability();
+    if (status.available) {
+      return { ok: true, data: { available: true, missing: [] } };
+    }
+    return {
+      ok: true,
+      data: { available: false, missing: status.missing },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+/**
+ * Append user message in fixture or live mode.
+ * Live never falls back silently to fixture.
+ * Chat text never triggers execution / gate / Cursor.
+ */
+export async function ops1SendMessageAction(input: {
   sessionId: string;
   content: string;
+  mode: "fixture" | "live";
 }): Promise<
   Ops1ActionResult<{
     userTurn: JournalTurn;
     assistantTurn: JournalTurn | null;
     assistantError: string | null;
+    usage: ConversationUsageCounters | null;
+    mode: "fixture" | "live";
   }>
 > {
   try {
     const sessionId = assertSessionId(input.sessionId);
     const content = assertMessageContent(input.content);
+    const mode = assertConversationMode(input.mode);
 
-    const { turn: userTurn, event } = appendTurn({
+    const result = await sendConversationMessage({
       sessionId,
-      role: "user",
       content,
-      fixture: true,
+      mode,
     });
-    console.info(
-      "[ops1] TURN_APPENDED",
-      sessionId,
-      userTurn.turnId,
-      event.eventId,
-    );
 
-    let assistantTurn: JournalTurn | null = null;
-    let assistantError: string | null = null;
-    try {
-      const reply = buildFixtureAssistantReply(content);
-      const appended = appendTurn({
-        sessionId,
-        role: "assistant_fixture",
-        content: reply,
-        fixture: true,
-      });
-      assistantTurn = appended.turn;
-      console.info(
-        "[ops1] TURN_APPENDED",
-        sessionId,
-        appended.turn.turnId,
-        appended.event.eventId,
-      );
-    } catch (error) {
-      const safe = toSafeClientError(error);
-      assistantError = safe.message;
-      console.error("[ops1] TURN_PERSISTENCE_FAILED assistant", error);
-    }
-
-    return {
-      ok: true,
-      data: { userTurn, assistantTurn, assistantError },
-    };
+    return { ok: true, data: result };
   } catch (error) {
     return fail(error);
   }
 }
+
+/** @deprecated I1 name — retained as fixture-only alias for older tests. */
+export async function ops1AppendUserMessageAction(input: {
+  sessionId: string;
+  content: string;
+}): Promise<
+  Ops1ActionResult<{
+    userTurn: JournalTurn;
+    assistantTurn: JournalTurn | null;
+    assistantError: string | null;
+  }>
+> {
+  const result = await ops1SendMessageAction({
+    ...input,
+    mode: "fixture",
+  });
+  if (!result.ok) return result;
+  return {
+    ok: true,
+    data: {
+      userTurn: result.data.userTurn,
+      assistantTurn: result.data.assistantTurn,
+      assistantError: result.data.assistantError,
+    },
+  };
+}

```

#### `projects/sfia-studio/app/lib/ops1/db.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/db.ts b/projects/sfia-studio/app/lib/ops1/db.ts
index 5f6662b..843202b 100644
--- a/projects/sfia-studio/app/lib/ops1/db.ts
+++ b/projects/sfia-studio/app/lib/ops1/db.ts
@@ -19,7 +19,7 @@ CREATE TABLE IF NOT EXISTS journal_turns (
   turn_id TEXT PRIMARY KEY NOT NULL,
   session_id TEXT NOT NULL,
   sequence INTEGER NOT NULL,
-  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
+  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
   content TEXT NOT NULL,
   fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
   created_at TEXT NOT NULL,
@@ -35,13 +35,95 @@ CREATE TABLE IF NOT EXISTS session_events (
   detail TEXT NOT NULL
 );
 
+CREATE TABLE IF NOT EXISTS conversation_attempts (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  session_id TEXT NOT NULL,
+  user_turn_id TEXT,
+  assistant_turn_id TEXT,
+  provider TEXT NOT NULL,
+  status TEXT NOT NULL CHECK (status IN ('started', 'succeeded', 'failed')),
+  provider_response_id TEXT,
+  model TEXT,
+  input_tokens INTEGER,
+  output_tokens INTEGER,
+  total_tokens INTEGER,
+  request_started_at TEXT NOT NULL,
+  request_completed_at TEXT,
+  error_code TEXT,
+  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+);
+
 CREATE INDEX IF NOT EXISTS idx_turns_session_seq
   ON journal_turns(session_id, sequence);
+
+CREATE INDEX IF NOT EXISTS idx_attempts_session
+  ON conversation_attempts(session_id, request_started_at);
 `;
 
 let singleton: DatabaseSync | null = null;
 let singletonPath: string | null = null;
 
+/** Idempotent additive migration I1 → I2 (role CHECK + conversation_attempts). */
+export function migrateOps1Schema(db: DatabaseSync): void {
+  db.exec("PRAGMA foreign_keys = ON;");
+  db.exec(SCHEMA_SQL);
+
+  const turnSqlRow = db
+    .prepare(
+      `SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'journal_turns'`,
+    )
+    .get() as { sql: string } | undefined;
+  const turnSql = turnSqlRow?.sql ?? "";
+
+  if (turnSql && !turnSql.includes("assistant_live")) {
+    db.exec("BEGIN IMMEDIATE");
+    try {
+      db.exec(`
+        CREATE TABLE journal_turns_i2 (
+          turn_id TEXT PRIMARY KEY NOT NULL,
+          session_id TEXT NOT NULL,
+          sequence INTEGER NOT NULL,
+          role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
+          content TEXT NOT NULL,
+          fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
+          created_at TEXT NOT NULL,
+          UNIQUE (session_id, sequence),
+          FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
+        );
+        INSERT INTO journal_turns_i2 (
+          turn_id, session_id, sequence, role, content, fixture, created_at
+        )
+        SELECT turn_id, session_id, sequence, role, content, fixture, created_at
+        FROM journal_turns;
+        DROP TABLE journal_turns;
+        ALTER TABLE journal_turns_i2 RENAME TO journal_turns;
+        CREATE INDEX IF NOT EXISTS idx_turns_session_seq
+          ON journal_turns(session_id, sequence);
+      `);
+      db.exec("COMMIT");
+    } catch (error) {
+      try {
+        db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw new Ops1Error(
+        "PERSISTENCE",
+        "Échec de migration schéma journal I2.",
+        error,
+      );
+    }
+  }
+
+  const integrity = db.prepare("PRAGMA integrity_check").get() as
+    | Record<string, string>
+    | undefined;
+  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
+  if (raw !== "ok") {
+    throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
+  }
+}
+
 export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
   if (singleton && singletonPath === dbPath) {
     return singleton;
@@ -58,15 +140,7 @@ export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
 
   try {
     const db = new DatabaseSync(dbPath);
-    db.exec("PRAGMA foreign_keys = ON;");
-    db.exec(SCHEMA_SQL);
-    const integrity = db.prepare("PRAGMA integrity_check").get() as
-      | Record<string, string>
-      | undefined;
-    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
-    if (raw !== "ok") {
-      throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
-    }
+    migrateOps1Schema(db);
     singleton = db;
     singletonPath = dbPath;
     return db;

```

#### `projects/sfia-studio/app/lib/ops1/errors.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/errors.ts b/projects/sfia-studio/app/lib/ops1/errors.ts
index 6a32fc8..0420b3e 100644
--- a/projects/sfia-studio/app/lib/ops1/errors.ts
+++ b/projects/sfia-studio/app/lib/ops1/errors.ts
@@ -3,6 +3,8 @@ export type Ops1ErrorCode =
   | "NOT_FOUND"
   | "PERSISTENCE"
   | "CONFLICT"
+  | "CONFIG"
+  | "PROVIDER"
   | "INTERNAL";
 
 export class Ops1Error extends Error {

```

#### `projects/sfia-studio/app/lib/ops1/fixtureReply.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
index 11c69ad..8c70d74 100644
--- a/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
+++ b/projects/sfia-studio/app/lib/ops1/fixtureReply.ts
@@ -3,7 +3,7 @@ export function buildFixtureAssistantReply(userContent: string): string {
   const preview =
     userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
   return [
-    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I1.",
+    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I2.",
     "Aucun fournisseur GPT n’a été appelé.",
     `Echo borné : « ${preview} »`,
   ].join(" ");

```

#### `projects/sfia-studio/app/lib/ops1/ids.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/ids.ts b/projects/sfia-studio/app/lib/ops1/ids.ts
index 850458d..45f2b8d 100644
--- a/projects/sfia-studio/app/lib/ops1/ids.ts
+++ b/projects/sfia-studio/app/lib/ops1/ids.ts
@@ -11,3 +11,7 @@ export function createTurnId(): string {
 export function createEventId(): string {
   return `ops1-evt-${randomUUID()}`;
 }
+
+export function createAttemptId(): string {
+  return `ops1-att-${randomUUID()}`;
+}

```

#### `projects/sfia-studio/app/lib/ops1/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/index.ts b/projects/sfia-studio/app/lib/ops1/index.ts
index b03b14b..6a3db51 100644
--- a/projects/sfia-studio/app/lib/ops1/index.ts
+++ b/projects/sfia-studio/app/lib/ops1/index.ts
@@ -2,3 +2,5 @@ export * from "./types";
 export * from "./errors";
 export * from "./validation";
 export * from "./fixtureReply";
+export { buildProviderMessagesFromJournal } from "./conversation/types";
+export { getLiveConversationAvailability } from "./conversation/config";

```

#### `projects/sfia-studio/app/lib/ops1/repository.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/repository.ts b/projects/sfia-studio/app/lib/ops1/repository.ts
index 5734373..2e7d0b7 100644
--- a/projects/sfia-studio/app/lib/ops1/repository.ts
+++ b/projects/sfia-studio/app/lib/ops1/repository.ts
@@ -1,9 +1,16 @@
 import type { DatabaseSync } from "node:sqlite";
-import { createEventId, createSessionId, createTurnId } from "./ids";
+import {
+  createAttemptId,
+  createEventId,
+  createSessionId,
+  createTurnId,
+} from "./ids";
 import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
 import { Ops1Error } from "./errors";
 import {
   OPS1_PROJECT_KEY,
+  type ConversationAttempt,
+  type ConversationAttemptStatus,
   type CycleSession,
   type JournalTurn,
   type SessionEvent,
@@ -39,6 +46,34 @@ function mapTurn(row: Record<string, unknown>): JournalTurn {
   };
 }
 
+function mapAttempt(row: Record<string, unknown>): ConversationAttempt {
+  return {
+    attemptId: String(row.attempt_id),
+    sessionId: String(row.session_id),
+    userTurnId: row.user_turn_id ? String(row.user_turn_id) : null,
+    assistantTurnId: row.assistant_turn_id
+      ? String(row.assistant_turn_id)
+      : null,
+    provider: String(row.provider),
+    status: row.status as ConversationAttemptStatus,
+    providerResponseId: row.provider_response_id
+      ? String(row.provider_response_id)
+      : null,
+    model: row.model ? String(row.model) : null,
+    inputTokens:
+      row.input_tokens == null ? null : Number(row.input_tokens),
+    outputTokens:
+      row.output_tokens == null ? null : Number(row.output_tokens),
+    totalTokens:
+      row.total_tokens == null ? null : Number(row.total_tokens),
+    requestStartedAt: String(row.request_started_at),
+    requestCompletedAt: row.request_completed_at
+      ? String(row.request_completed_at)
+      : null,
+    errorCode: row.error_code ? String(row.error_code) : null,
+  };
+}
+
 function insertEvent(
   db: DatabaseSync,
   sessionId: string | null,
@@ -252,11 +287,240 @@ export function appendTurn(
   }
 }
 
+export function startConversationAttempt(
+  input: {
+    sessionId: string;
+    userTurnId: string;
+    provider: string;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const session = getSession(input.sessionId, db);
+  if (!session) {
+    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
+  }
+  if (session.status !== "OPEN") {
+    throw new Ops1Error("CONFLICT", "Session non OPEN.");
+  }
+
+  const attemptId = createAttemptId();
+  const startedAt = nowIsoWithOffset();
+
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `INSERT INTO conversation_attempts (
+         attempt_id, session_id, user_turn_id, assistant_turn_id, provider,
+         status, provider_response_id, model, input_tokens, output_tokens,
+         total_tokens, request_started_at, request_completed_at, error_code
+       ) VALUES (?, ?, ?, NULL, ?, 'started', NULL, NULL, NULL, NULL, NULL, ?, NULL, NULL)`,
+    ).run(
+      attemptId,
+      input.sessionId,
+      input.userTurnId,
+      input.provider,
+      startedAt,
+    );
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_STARTED",
+      JSON.stringify({
+        attemptId,
+        userTurnId: input.userTurnId,
+        provider: input.provider,
+      }),
+      startedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec d’enregistrement de la tentative conversationnelle.",
+      error,
+    );
+  }
+
+  return {
+    attemptId,
+    sessionId: input.sessionId,
+    userTurnId: input.userTurnId,
+    assistantTurnId: null,
+    provider: input.provider,
+    status: "started",
+    providerResponseId: null,
+    model: null,
+    inputTokens: null,
+    outputTokens: null,
+    totalTokens: null,
+    requestStartedAt: startedAt,
+    requestCompletedAt: null,
+    errorCode: null,
+  };
+}
+
+export function completeConversationAttemptSuccess(
+  input: {
+    attemptId: string;
+    sessionId: string;
+    assistantTurnId: string;
+    providerResponseId: string | null;
+    model: string | null;
+    inputTokens: number | null;
+    outputTokens: number | null;
+    totalTokens: number | null;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const completedAt = nowIsoWithOffset();
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `UPDATE conversation_attempts SET
+         status = 'succeeded',
+         assistant_turn_id = ?,
+         provider_response_id = ?,
+         model = ?,
+         input_tokens = ?,
+         output_tokens = ?,
+         total_tokens = ?,
+         request_completed_at = ?,
+         error_code = NULL
+       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
+    ).run(
+      input.assistantTurnId,
+      input.providerResponseId,
+      input.model,
+      input.inputTokens,
+      input.outputTokens,
+      input.totalTokens,
+      completedAt,
+      input.attemptId,
+      input.sessionId,
+    );
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_SUCCEEDED",
+      JSON.stringify({
+        attemptId: input.attemptId,
+        assistantTurnId: input.assistantTurnId,
+        model: input.model,
+        totalTokens: input.totalTokens,
+      }),
+      completedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec de finalisation de la tentative (succès).",
+      error,
+    );
+  }
+  const attempt = getConversationAttempt(input.attemptId, db);
+  if (!attempt) {
+    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après succès.");
+  }
+  return attempt;
+}
+
+export function completeConversationAttemptFailure(
+  input: {
+    attemptId: string;
+    sessionId: string;
+    errorCode: string;
+  },
+  db = openOps1Db(),
+): ConversationAttempt {
+  const completedAt = nowIsoWithOffset();
+  const safeCode = input.errorCode.slice(0, 64);
+  try {
+    db.exec("BEGIN IMMEDIATE");
+    db.prepare(
+      `UPDATE conversation_attempts SET
+         status = 'failed',
+         request_completed_at = ?,
+         error_code = ?
+       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
+    ).run(completedAt, safeCode, input.attemptId, input.sessionId);
+    insertEvent(
+      db,
+      input.sessionId,
+      "CONVERSATION_ATTEMPT_FAILED",
+      JSON.stringify({
+        attemptId: input.attemptId,
+        errorCode: safeCode,
+      }),
+      completedAt,
+    );
+    db.exec("COMMIT");
+  } catch (error) {
+    try {
+      db.exec("ROLLBACK");
+    } catch {
+      /* ignore */
+    }
+    throw new Ops1Error(
+      "PERSISTENCE",
+      "Échec de finalisation de la tentative (échec).",
+      error,
+    );
+  }
+  const attempt = getConversationAttempt(input.attemptId, db);
+  if (!attempt) {
+    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après échec.");
+  }
+  return attempt;
+}
+
+export function getConversationAttempt(
+  attemptId: string,
+  db = openOps1Db(),
+): ConversationAttempt | null {
+  const row = db
+    .prepare(`SELECT * FROM conversation_attempts WHERE attempt_id = ?`)
+    .get(attemptId) as Record<string, unknown> | undefined;
+  return row ? mapAttempt(row) : null;
+}
+
+export function listConversationAttempts(
+  sessionId: string,
+  db = openOps1Db(),
+): ConversationAttempt[] {
+  const rows = db
+    .prepare(
+      `SELECT * FROM conversation_attempts
+       WHERE session_id = ?
+       ORDER BY request_started_at ASC`,
+    )
+    .all(sessionId) as Record<string, unknown>[];
+  return rows.map(mapAttempt);
+}
+
 export function getSessionBundle(
   sessionId: string,
   db = openOps1Db(),
-): { session: CycleSession; turns: JournalTurn[] } | null {
+): {
+  session: CycleSession;
+  turns: JournalTurn[];
+  attempts: ConversationAttempt[];
+} | null {
   const session = getSession(sessionId, db);
   if (!session) return null;
-  return { session, turns: listTurns(sessionId, db) };
+  return {
+    session,
+    turns: listTurns(sessionId, db),
+    attempts: listConversationAttempts(sessionId, db),
+  };
 }

```

#### `projects/sfia-studio/app/lib/ops1/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index 5c42bad..4a03ba9 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -1,8 +1,16 @@
-/** OPS1 I1 — Session + journal (fixture/local). CLOSED reserved; not mutated in I1. */
+/** OPS1 I1/I2 — Session + journal. CLOSED reserved; not mutated in I1/I2. */
 
 export type SessionStatus = "OPEN" | "CLOSED";
 
-export type TurnRole = "user" | "assistant_fixture";
+/** I2 extends roles with assistant_live; fixture role retained for non-live. */
+export type TurnRole = "user" | "assistant_fixture" | "assistant_live";
+
+export type ConversationMode = "fixture" | "live";
+
+export type ConversationAttemptStatus =
+  | "started"
+  | "succeeded"
+  | "failed";
 
 export interface CycleSession {
   sessionId: string;
@@ -24,11 +32,41 @@ export interface JournalTurn {
   createdAt: string;
 }
 
+export interface ConversationAttempt {
+  attemptId: string;
+  sessionId: string;
+  userTurnId: string | null;
+  assistantTurnId: string | null;
+  provider: string;
+  status: ConversationAttemptStatus;
+  providerResponseId: string | null;
+  model: string | null;
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  requestStartedAt: string;
+  requestCompletedAt: string | null;
+  errorCode: string | null;
+}
+
+export interface ConversationUsageCounters {
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  model: string | null;
+  provider: string;
+  attemptId: string;
+  durationMs: number | null;
+}
+
 export type SessionEventType =
   | "SESSION_OPENED"
   | "TURN_APPENDED"
   | "SESSION_PERSISTENCE_FAILED"
-  | "TURN_PERSISTENCE_FAILED";
+  | "TURN_PERSISTENCE_FAILED"
+  | "CONVERSATION_ATTEMPT_STARTED"
+  | "CONVERSATION_ATTEMPT_SUCCEEDED"
+  | "CONVERSATION_ATTEMPT_FAILED";
 
 export interface SessionEvent {
   eventId: string;

```

#### `projects/sfia-studio/app/lib/ops1/validation.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/validation.ts b/projects/sfia-studio/app/lib/ops1/validation.ts
index 1a7858b..eda1313 100644
--- a/projects/sfia-studio/app/lib/ops1/validation.ts
+++ b/projects/sfia-studio/app/lib/ops1/validation.ts
@@ -1,4 +1,8 @@
-import { OPS1_MAX_MESSAGE_CHARS, type TurnRole } from "./types";
+import {
+  OPS1_MAX_MESSAGE_CHARS,
+  type ConversationMode,
+  type TurnRole,
+} from "./types";
 import { Ops1Error } from "./errors";
 
 const SESSION_ID_RE = /^ops1-sess-[0-9a-f-]{36}$/i;
@@ -28,6 +32,17 @@ export function assertMessageContent(content: unknown): string {
 }
 
 export function assertTurnRole(role: unknown): TurnRole {
-  if (role === "user" || role === "assistant_fixture") return role;
+  if (
+    role === "user" ||
+    role === "assistant_fixture" ||
+    role === "assistant_live"
+  ) {
+    return role;
+  }
   throw new Ops1Error("VALIDATION", "Rôle de tour invalide.");
 }
+
+export function assertConversationMode(mode: unknown): ConversationMode {
+  if (mode === "fixture" || mode === "live") return mode;
+  throw new Ops1Error("VALIDATION", "Mode conversationnel invalide.");
+}

```

#### `projects/sfia-studio/app/package-lock.json`

```
diff --git a/projects/sfia-studio/app/package-lock.json b/projects/sfia-studio/app/package-lock.json
index 5d23e54..239be78 100644
--- a/projects/sfia-studio/app/package-lock.json
+++ b/projects/sfia-studio/app/package-lock.json
@@ -9,6 +9,7 @@
       "version": "0.1.0",
       "dependencies": {
         "next": "^15.3.3",
+        "openai": "^6.48.0",
         "react": "^19.1.0",
         "react-dom": "^19.1.0"
       },
@@ -6035,6 +6036,36 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/openai": {
+      "version": "6.48.0",
+      "resolved": "https://registry.npmjs.org/openai/-/openai-6.48.0.tgz",
+      "integrity": "sha512-KhVp+FyV50QrXNextvL9hIU5l6ox5HYuKQjGVk7lIqprgJol90+dQXWONV6S1lRWsKA1bXjrow8RsUT14M1hNA==",
+      "license": "Apache-2.0",
+      "peerDependencies": {
+        "@aws-sdk/credential-provider-node": ">=3.972.0 <4",
+        "@smithy/hash-node": ">=4.3.0 <5",
+        "@smithy/signature-v4": ">=5.4.0 <6",
+        "ws": "^8.18.0",
+        "zod": "^3.25 || ^4.0"
+      },
+      "peerDependenciesMeta": {
+        "@aws-sdk/credential-provider-node": {
+          "optional": true
+        },
+        "@smithy/hash-node": {
+          "optional": true
+        },
+        "@smithy/signature-v4": {
+          "optional": true
+        },
+        "ws": {
+          "optional": true
+        },
+        "zod": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/optionator": {
       "version": "0.9.4",
       "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
@@ -7952,7 +7983,7 @@
       "version": "8.21.1",
       "resolved": "https://registry.npmjs.org/ws/-/ws-8.21.1.tgz",
       "integrity": "sha512-+0NTnW77fFN/DjQi6k/Sq/Yvk4Sgajw7urW8V+asjXnRgDs9gyGkdb7EzgfhA4goXsRIZKE28fzIXBHEzhuiWw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=10.0.0"

```

#### `projects/sfia-studio/app/package.json`

```diff
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 0022a01..64b70fe 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -15,6 +15,7 @@
   },
   "dependencies": {
     "next": "^15.3.3",
+    "openai": "^6.48.0",
     "react": "^19.1.0",
     "react-dom": "^19.1.0"
   },

```

#### `projects/sfia-studio/app/playwright.config.ts`

```diff
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index a4c1df0..949ff99 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -21,5 +21,13 @@ export default defineConfig({
     // Prefer local reuse: port 3020 is often already served by `npm run dev`.
     reuseExistingServer: true,
     timeout: 180_000,
+    env: {
+      ...process.env,
+      // Non-live E2E: fake provider + placeholder env so live UI path is testable
+      // without consuming a real API. Real smoke uses ops1-i2-live-smoke.ts.
+      OPS1_CONVERSATION_PROVIDER: "fake",
+      OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
+      OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
+    },
   },
 });

```

## Instruction ChatGPT

1. Lire obligatoirement le handoff distant
2. Vérifier le diff applicatif, package/lockfile, provider, secrets
3. Vérifier migrations, multi-tours, absence d’exécution
4. Vérifier smoke live **non exécuté** (justifié)
5. Vérifier tests et captures
6. Rendre verdict Delivery/QA
7. **Ne pas** autoriser implicitement commit, push, PR, merge ou I3

---

**Verdict Cursor :** `OPS1 I2 IMPLEMENTED — LIVE PROVIDER VERIFICATION NOT PERFORMED`
