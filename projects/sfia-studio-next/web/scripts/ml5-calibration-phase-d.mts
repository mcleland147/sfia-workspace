/** ML5 S6 Phase D — product API conductor path (DEV), envelope-residual only. */
import { writeFileSync, mkdirSync } from "node:fs";
import { config } from "dotenv";
config({ path: ".env.local" });

const BASE = process.env.SFIA_CALIB_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_CALIBRATION_OUT ||
  "../../../.tmp-sfia-review/calibration-live";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
async function api(
  path: string,
  opts: { method?: string; body?: unknown; timeoutMs?: number } = {},
) {
  const res = await fetch(`${BASE}${path}`, {
    method: opts.method || "GET",
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      ...(jar.cookie ? { cookie: jar.cookie } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    signal: AbortSignal.timeout(opts.timeoutMs ?? 600_000),
  });
  for (const c of res.headers.getSetCookie?.() || []) {
    const part = c.split(";")[0]!;
    jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
  }
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 500) };
  }
  return { status: res.status, json };
}

async function main() {
  const out: Record<string, unknown> = {
    phase: "D",
    base: BASE,
    startedAt: new Date().toISOString(),
    steps: [] as unknown[],
  };
  const steps = out.steps as unknown[];

  const auth = await api("/api/dev/auto-session", { method: "POST" });
  steps.push({ auth: auth.status });

  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = (prep.json as { preparationId: string }).preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: "ML5-Calib-PhaseD",
      previewSummary:
        "Calibration Phase D — parcours intégré multi-modèles borné.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: "ML5-Calib-PhaseD",
      idempotencyKey: `calib-d-${Date.now()}`,
      previewSummary: "Calibration Phase D bornée.",
    },
  });
  out.projectId = (created.json as { projectId?: string }).projectId;
  out.preparationId = preparationId;

  const projectId = out.projectId as string;
  const iqStarted = Date.now();
  let iqLast: unknown = null;
  while (Date.now() - iqStarted < 180_000) {
    const r = await api(
      `/api/projects/${projectId}/initial-qualification/reconcile`,
      { method: "POST", timeoutMs: 60_000 },
    );
    iqLast = (r.json as { initialQualification?: unknown }).initialQualification || r.json;
    const status = (iqLast as { status?: string } | null)?.status;
    if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) break;
    await new Promise((r) => setTimeout(r, 1500));
  }
  steps.push({
    qualification: (iqLast as { status?: string } | null)?.status,
    phase: (iqLast as { phase?: string } | null)?.phase,
  });

  const t1 = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content:
        "Pour cette calibration: 1) reformule ma demande; 2) signale si une ambiguïté bloque; 3) propose une allocation Luna/Terra/Sol avec effort, sans WEB.",
      clientTurnKey: `calib-d1-${Date.now()}`,
      forceNewCognitiveWork: true,
    },
    timeoutMs: 600_000,
  });
  const cw1 =
    ((t1.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
      (t1.json as { conductor?: Record<string, unknown> }).conductor ||
      {}) as Record<string, unknown>;
  const msgs1 = (t1.json as { messages?: Array<{ content?: string }> }).messages;
  steps.push({
    turn: 1,
    http: t1.status,
    workId: cw1.workId || cw1.id,
    revision: cw1.revision,
    suspended: cw1.suspended,
    replyStatus:
      (t1.json as { replyStatus?: string }).replyStatus ||
      (t1.json as { noraStatus?: string }).noraStatus ||
      (t1.json as { status?: string }).status,
    preview:
      msgs1?.slice(-1)[0]?.content?.slice(0, 400) ||
      String((t1.json as { content?: string }).content || "").slice(0, 400) ||
      JSON.stringify(t1.json).slice(0, 400),
  });

  const wid = (cw1.workId || cw1.id) as string | undefined;
  if (wid) {
    const t2 = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Poursuis: distingue un besoin simple (salutation) d'un besoin d'investigation multi-intentions, et indique si tu changes de ressource cognitive entre les deux.",
        clientTurnKey: `calib-d2-${Date.now()}`,
        cognitiveWorkId: wid,
      },
      timeoutMs: 600_000,
    });
    const cw2 =
      ((t2.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
        (t2.json as { conductor?: Record<string, unknown> }).conductor ||
        {}) as Record<string, unknown>;
    const msgs2 = (t2.json as { messages?: Array<{ content?: string }> }).messages;
    steps.push({
      turn: 2,
      http: t2.status,
      workId: cw2.workId || cw2.id,
      revision: cw2.revision,
      suspended: cw2.suspended,
      sameWork: (cw2.workId || cw2.id) === wid,
      replyStatus:
        (t2.json as { replyStatus?: string }).replyStatus ||
        (t2.json as { noraStatus?: string }).noraStatus ||
        (t2.json as { status?: string }).status,
      preview:
        msgs2?.slice(-1)[0]?.content?.slice(0, 400) ||
        String((t2.json as { content?: string }).content || "").slice(0, 400) ||
        JSON.stringify(t2.json).slice(0, 400),
    });
  }

  out.finishedAt = new Date().toISOString();
  writeFileSync(`${OUT}/phase-d-product.json`, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2).slice(0, 3000));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
