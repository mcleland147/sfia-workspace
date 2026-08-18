import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";

export type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
export type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;
export type GetProjectFailure = Extract<GetProjectResult, { ok: false }>;
