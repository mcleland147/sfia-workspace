"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createSqliteSynthesisServices,
  isSynthesisDomainError,
  type ProductSynthesisProjection,
} from "@/lib/oa/synthesis";
import {
  buildProductSynthesisLineageInput,
  synthesisErrorMessage,
} from "./buildProductSynthesisLineageInput";

const OA_UNAVAILABLE = {
  ok: false as const,
  code: "OA_STACK_UNAVAILABLE",
  message: "Services Product indisponibles.",
};

const PRODUCT_SQLITE_UNAVAILABLE = {
  ok: false as const,
  code: "PRODUCT_SQLITE_UNAVAILABLE",
  message: "Persistance Product SQLite indisponible.",
};

type SynthesisServicesContext =
  | {
      readonly ok: true;
      readonly services: ReturnType<typeof createSqliteSynthesisServices>;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function resolveSynthesisServices(): SynthesisServicesContext {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  const store = runtime.oa.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    return PRODUCT_SQLITE_UNAVAILABLE;
  }
  return {
    ok: true,
    services: createSqliteSynthesisServices({ productStore: store }),
  };
}

export type ProductSynthesisListItem = {
  readonly synthesisId: string;
  readonly title: string;
  readonly subject: string;
  readonly status: ProductSynthesisProjection["status"];
  readonly verdictLabel: ProductSynthesisProjection["verdictLabel"];
  readonly generatedAt: string;
  readonly authority: "none";
};

function toListItem(s: ProductSynthesisProjection): ProductSynthesisListItem {
  return {
    synthesisId: s.synthesisId,
    title: s.title,
    subject: s.subject,
    status: s.status,
    verdictLabel: s.verdictLabel,
    generatedAt: s.generatedAt,
    authority: "none",
  };
}

export async function listProductSynthesesAction(input: {
  projectId: string;
}): Promise<
  | { readonly ok: true; readonly items: readonly ProductSynthesisListItem[] }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const rows = await ctx.services.repository.listByProject(projectId);
  const items = rows
    .slice()
    .sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))
    .map(toListItem);
  return { ok: true, items };
}

export async function getProductSynthesisAction(input: {
  projectId: string;
  synthesisId: string;
}): Promise<
  | { readonly ok: true; readonly synthesis: ProductSynthesisProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  const synthesisId = input.synthesisId?.trim();
  if (!projectId || !synthesisId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et synthesisId requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const synthesis = await ctx.services.repository.findById(synthesisId);
  if (!synthesis || synthesis.projectId !== projectId) {
    return {
      ok: false,
      code: "SYNTHESIS_NOT_FOUND",
      message: "Synthèse introuvable pour ce projet.",
    };
  }
  return { ok: true, synthesis };
}

export async function searchProductSynthesesAction(input: {
  projectId: string;
  query: string;
}): Promise<
  | { readonly ok: true; readonly items: readonly ProductSynthesisListItem[] }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const hits = await ctx.services.search(projectId, input.query ?? "");
  return { ok: true, items: hits.map(toListItem) };
}

export async function getLatestRelevantProductSynthesisAction(input: {
  projectId: string;
}): Promise<
  | {
      readonly ok: true;
      readonly synthesis: ProductSynthesisProjection | null;
      readonly count: number;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "Identifiant projet requis.",
    };
  }
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;
  const rows = await ctx.services.repository.listByProject(projectId);
  const current = rows.filter((s) => s.status === "current");
  const sorted = current
    .slice()
    .sort((a, b) => b.generatedAt.localeCompare(a.generatedAt));
  return {
    ok: true,
    synthesis: sorted[0] ?? null,
    count: rows.filter((s) => s.status === "current").length,
  };
}

export async function materializeProductSynthesisFromLineageAction(input: {
  projectId: string;
  claimEvaluationId: string;
  title?: string;
}): Promise<
  | { readonly ok: true; readonly synthesis: ProductSynthesisProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const projectId = input.projectId?.trim();
  const claimEvaluationId = input.claimEvaluationId?.trim();
  if (!projectId || !claimEvaluationId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et claimEvaluationId requis.",
    };
  }
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  const ctx = resolveSynthesisServices();
  if (!ctx.ok) return ctx;

  const lineage = await buildProductSynthesisLineageInput({
    oa: runtime.oa,
    projectId,
    claimEvaluationId,
    title: input.title,
  });
  if (!lineage.ok) return lineage;

  try {
    const synthesis = await ctx.services.materialize(lineage.input);
    return { ok: true, synthesis };
  } catch (err) {
    return {
      ok: false,
      code:
        isSynthesisDomainError(err) ? err.detailCode : "SYNTHESIS_MATERIALIZE_FAILED",
      message: synthesisErrorMessage(err),
    };
  }
}
