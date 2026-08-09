/**
 * OpenAI Organization Costs adapter — server-only BILLED period facts.
 * OPENAI_ADMIN_KEY from process env only (never logged).
 */

import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
} from "../application/billedPeriodIdentity";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "../application/providerMoneyBoundary";
import type { BilledPeriodFact } from "../application/types.aggregate";
import { computeUtcMonthPeriod } from "../domain/period";

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/openaiOrganizationCostsAdapter is server-only",
    );
  }
}

export type OpenAiCostsAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};


function unixSecondsToIso(seconds: number): string {
  return new Date(seconds * 1000).toISOString();
}

type ParsedCostsPage = {
  readonly data?: ReadonlyArray<{
    readonly start_time: number;
    readonly end_time?: number;
    readonly results?: ReadonlyArray<{
      readonly object?: string;
      readonly project_id?: string | null;
      readonly line_item?: string | null;
      readonly amount?: {
        readonly value?: unknown;
        readonly currency?: string;
      };
    }>;
  }>;
};

// Numbered groups only (tsc target < ES2018 rejects named capturing groups).
// 1=valueNum, 2=valueStr, 3=currencyA, 4=currencyB, 5=valueNum2, 6=valueStr2
const AMOUNT_BLOCK_RE =
  /"amount"\s*:\s*\{\s*(?:(?:"value"\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)")\s*,\s*"currency"\s*:\s*"([^"]+)"|"currency"\s*:\s*"([^"]+)"\s*,\s*(?:"value"\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)"))\s*\}/g;

/**
 * Extract amount.value decimal literals from raw JSON wire text.
 * Never uses JSON Number as authoritative Money input.
 */
export function extractAmountLiteralsFromRawCostsPage(
  rawPage: string,
): ReadonlyArray<{ readonly valueLiteral: string; readonly currencyRaw: string }> {
  const out: Array<{ valueLiteral: string; currencyRaw: string }> = [];
  for (const match of rawPage.matchAll(AMOUNT_BLOCK_RE)) {
    const valueLiteral = match[1] ?? match[2] ?? match[5] ?? match[6];
    const currencyRaw = match[3] ?? match[4];
    if (!valueLiteral || !currencyRaw) {
      throw new Error("OpenAI costs amount block incomplete in raw page text");
    }
    out.push({ valueLiteral, currencyRaw });
  }
  return out;
}

export function parseCostsPageToAtoms(rawPage: string): OpenAiCostsAtom[] {
  let parsed: ParsedCostsPage;
  try {
    parsed = JSON.parse(rawPage) as ParsedCostsPage;
  } catch {
    throw new Error("OpenAI costs page is not valid JSON");
  }

  const amountLiterals = extractAmountLiteralsFromRawCostsPage(rawPage);
  let amountCursor = 0;

  const atoms: OpenAiCostsAtom[] = [];
  for (const bucket of parsed.data ?? []) {
    const sourceBucketStart = unixSecondsToIso(bucket.start_time);
    const sourceBucketEndExclusive =
      bucket.end_time === undefined ? null : unixSecondsToIso(bucket.end_time);
    for (const result of bucket.results ?? []) {
      if (
        result.object !== undefined &&
        result.object !== "organization.costs.result"
      ) {
        continue;
      }
      const projectId =
        typeof result.project_id === "string" ? result.project_id.trim() : "";
      if (!projectId) continue;
      if (result.amount == null) continue;

      const literal = amountLiterals[amountCursor];
      amountCursor += 1;
      if (!literal) {
        throw new Error(
          "OpenAI costs amount.value literal missing from raw page text",
        );
      }

      const currency = normalizeProviderCurrency(literal.currencyRaw);
      // Authoritative Money path: raw decimal literal → BigInt scale-8 (no Number).
      const providerAmount = canonicalProviderAmountString(
        literal.valueLiteral,
        currency,
      );
      atoms.push({
        sourceBucketStart,
        sourceBucketEndExclusive,
        project_id: projectId,
        line_item: result.line_item ?? null,
        currency,
        providerAmount,
      });
    }
  }
  return atoms;
}

export function mapAtomsToBilledPeriodFacts(input: {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
  readonly sourceBatchId: string;
}): BilledPeriodFact[] {
  const facts: BilledPeriodFact[] = [];
  for (const atom of input.atoms) {
    if (atom.project_id !== input.externalProjectId) {
      throw new Error(
        `OpenAI costs external project mismatch: expected ${input.externalProjectId}, got ${atom.project_id}`,
      );
    }
    parseProviderMoneyString(atom.providerAmount, atom.currency);
    const bucketPeriod = computeUtcMonthPeriod(atom.sourceBucketStart)
      .periodStart.slice(0, 10);
    if (bucketPeriod !== input.periodStart) {
      throw new Error("OpenAI costs bucket period does not match requested periodStart");
    }
    const derivedSourceReference = buildDerivedSourceReference({
      provider: input.provider,
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      currency: atom.currency,
    });
    facts.push({
      projectId: input.projectId,
      externalProjectId: input.externalProjectId,
      periodStart: input.periodStart,
      provider: input.provider,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      providerAmount: atom.providerAmount,
      currency: atom.currency,
      derivedSourceReference,
      sourceBatchId: input.sourceBatchId,
    });
  }
  return facts;
}

export function buildOpenAiCostsSourceBatchId(input: {
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
}): string {
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.sfiaProjectId,
    periodStart: input.periodStart,
    adapterContractVersion: OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
    atoms: input.atoms.map((atom) => ({
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      project_id: atom.project_id,
      line_item: atom.line_item,
      currency: atom.currency,
      providerAmount: atom.providerAmount,
    })),
  });
}

export type FetchOpenAiOrganizationCostsInput = {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly startTimeUnix: number;
  readonly endTimeUnix?: number;
  readonly fetchImpl?: typeof fetch;
};

export async function fetchOpenAiOrganizationCostsPage(
  input: FetchOpenAiOrganizationCostsInput & { readonly page?: string | null },
): Promise<{ readonly raw: string; readonly nextPage: string | null }> {
  assertServerOnly();
  const adminKey = process.env.OPENAI_ADMIN_KEY;
  if (!adminKey) {
    throw new Error("OPENAI_ADMIN_KEY is required for OpenAI organization costs");
  }
  const params = new URLSearchParams();
  params.set("start_time", String(input.startTimeUnix));
  if (input.endTimeUnix !== undefined) {
    params.set("end_time", String(input.endTimeUnix));
  }
  params.set("bucket_width", "1d");
  params.append("project_ids[]", input.externalProjectId);
  params.append("group_by[]", "project_id");
  params.append("group_by[]", "line_item");
  if (input.page) params.set("page", input.page);

  const fetchImpl = input.fetchImpl ?? fetch;
  const response = await fetchImpl(
    `https://api.openai.com/v1/organization/costs?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${adminKey}`,
        "Content-Type": "application/json",
      },
    },
  );
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`OpenAI organization costs request failed: ${response.status}`);
  }
  const nextPageMatch = /"next_page"\s*:\s*(null|"([^"\\]|\\.)*")/.exec(raw);
  const nextPage =
    nextPageMatch === null
      ? null
      : nextPageMatch[1] === "null"
        ? null
        : JSON.parse(nextPageMatch[1]!) as string;
  return { raw, nextPage };
}

export async function fetchOpenAiOrganizationCostsSnapshot(
  input: FetchOpenAiOrganizationCostsInput,
): Promise<{
  readonly atoms: OpenAiCostsAtom[];
  readonly sourceBatchId: string;
  readonly facts: BilledPeriodFact[];
}> {
  const allAtoms: OpenAiCostsAtom[] = [];
  let page: string | null = null;
  do {
    const pageResult = await fetchOpenAiOrganizationCostsPage({ ...input, page });
    allAtoms.push(...parseCostsPageToAtoms(pageResult.raw));
    page = pageResult.nextPage;
  } while (page);

  const sourceBatchId = buildOpenAiCostsSourceBatchId({
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.projectId,
    periodStart: input.periodStart,
    atoms: allAtoms,
  });
  const facts = mapAtomsToBilledPeriodFacts({
    projectId: input.projectId,
    externalProjectId: input.externalProjectId,
    periodStart: input.periodStart,
    provider: "openai",
    atoms: allAtoms,
    sourceBatchId,
  });
  return { atoms: allAtoms, sourceBatchId, facts };
}

export {
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
  buildDerivedSourceReference,
};
