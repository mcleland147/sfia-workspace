/**
 * ML5 GO Morris — short LIVE natural-language path (DEV :3100 only).
 * Forbidden: « Crée le document D4 », « REQUEST_EFFECT », pre-injected qualification.
 * Asserts: create on first natural ask · revise pending · note on first pass.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT = process.env.SFIA_LIVE_OUT || "/tmp/sfia-ml5-capability-interactions-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 900_000 } = {}) {
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
      json = { _raw: text.slice(0, 2000) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  return execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
}

async function turn(preparationId, content, extra = {}) {
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content,
      clientTurnKey: extra.clientTurnKey || `ctk_${randomUUID()}`,
      ...extra,
    },
    timeoutMs: 900_000,
  });
}

const report = { steps: [], verdict: null, errors: [] };

try {
  await api("/api/dev/auto-session", { method: "POST" });
  const runId = randomUUID().slice(0, 8);
  const projectName = `EquipLoans Cap ${runId}`;

  const prep = await api("/api/preparations", { method: "POST", body: {} });
  save("01-prep", prep);
  const preparationId = prep.json?.preparationId;
  if (!preparationId) throw new Error(`no preparationId: ${JSON.stringify(prep.json).slice(0, 400)}`);

  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: projectName,
      previewSummary:
        "Petite application interne de prêt de matériel informatique pour gestionnaires. V1 : lister, prêter, suivre, retourner. Pas de portail collaborateur, pas de réservations.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;

  const createProj = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName,
      idempotencyKey: `cap-${randomUUID()}`,
      previewSummary:
        "Petite application interne de prêt de matériel. V1 gestionnaires : lister, prêter, suivre, retourner.",
    },
  });
  save("04-create-project", createProj);
  const projectId = createProj.json?.projectId;
  if (!projectId) throw new Error(`create-project failed: ${JSON.stringify(createProj.json).slice(0, 600)}`);

  let iq = null;
  for (let i = 0; i < 40; i++) {
    const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      method: "POST",
      timeoutMs: 60_000,
    });
    iq = r.json?.initialQualification || r.json;
    if (iq?.status && !["PENDING", "RUNNING", "UNKNOWN"].includes(iq.status)) break;
    await new Promise((res) => setTimeout(res, 2000));
  }
  report.steps.push({
    step: "IQ",
    status: iq?.status || null,
    kind: iq?.result?.kind || iq?.kind || null,
  });
  save("05-iq", iq);

  // Natural document create — FORBIDDEN words avoided
  const createDoc = await turn(
    preparationId,
    "Prépare-moi un document de conception fonctionnelle V1 d'EquipLoans à partir de nos échanges. Intègre le périmètre validé, les règles métier (dont RM-03 : date de retour prévue facultative), le parcours gestionnaire et des scénarios de recette dont R04 pour un prêt sans échéance.",
  );
  save("06-create-doc", {
    status: createDoc.status,
    documentSave: createDoc.json?.documentSave,
    pending: createDoc.json?.pendingDocumentCandidate
      ? { title: createDoc.json.pendingDocumentCandidate.title, id: createDoc.json.pendingDocumentCandidate.id }
      : null,
    intents: (createDoc.json?.semanticQualification?.intents || []).map((i) => ({
      c: i.capabilityId,
      m: i.mode,
    })),
    replyPreview: (createDoc.json?.assistantMessage?.content || "").slice(0, 400),
  });
  const createOk = createDoc.json?.documentSave?.status === "AVAILABLE";
  report.steps.push({
    step: "CREATE_DOC",
    ok: createOk,
    documentSave: createDoc.json?.documentSave || null,
    modes: (createDoc.json?.semanticQualification?.intents || []).map((i) => i.mode),
  });
  if (!createOk) report.errors.push("CREATE_DOC_NOT_AVAILABLE");

  const docId = createDoc.json?.documentSave?.documentId;
  const baseRev = createDoc.json?.documentSave?.revisionId;

  // Natural multi-section revise — inspection before conservation
  const revise = await turn(
    preparationId,
    "Je souhaite rendre obligatoire la date de retour prévue pour chaque prêt. Modifie uniquement la règle RM-03 dans la section 2 et adapte le scénario R04 dans la section 4 pour vérifier qu'un prêt sans date de retour prévue est désormais refusé. Conserve strictement le reste du document à l'identique et présente-moi la nouvelle version pour inspection avant conservation.",
  );
  save("07-revise", {
    status: revise.status,
    documentSave: revise.json?.documentSave,
    pending: revise.json?.pendingDocumentCandidate
      ? {
          id: revise.json.pendingDocumentCandidate.id,
          title: revise.json.pendingDocumentCandidate.title,
          sha: revise.json.pendingDocumentCandidate.contentSha256,
          hasBody: Boolean(revise.json.pendingDocumentCandidate.contentMarkdown),
        }
      : null,
    intents: (revise.json?.semanticQualification?.intents || []).map((i) => ({
      c: i.capabilityId,
      m: i.mode,
      section: i.parameters?.sectionHint,
    })),
    replyPreview: (revise.json?.assistantMessage?.content || "").slice(0, 400),
  });
  const pending = revise.json?.pendingDocumentCandidate;
  const revisePending =
    revise.json?.documentSave?.reason === "PROPOSAL_PENDING_CONSERVATION" && pending?.id;
  report.steps.push({
    step: "REVISE_PENDING",
    ok: Boolean(revisePending),
    reason: revise.json?.documentSave?.reason || null,
    pendingId: pending?.id || null,
  });
  if (!revisePending) report.errors.push("REVISE_NO_PENDING_CANDIDATE");

  // Conserve if pending
  if (pending?.id && docId) {
    const conserve = await turn(preparationId, "Conserver comme nouvelle version la proposition documentaire préparée.", {
      documentFocus: {
        documentId: docId,
        baseRevisionId: baseRev,
        pendingCandidateId: pending.id,
        pendingCandidateContentSha256:
          pending.sha || revise.json.pendingDocumentCandidate.contentSha256,
        conserveProposal: true,
      },
    });
    save("08-conserve", {
      status: conserve.status,
      documentSave: conserve.json?.documentSave,
    });
    const conserved = conserve.json?.documentSave?.status === "AVAILABLE";
    report.steps.push({ step: "CONSERVE", ok: conserved, documentSave: conserve.json?.documentSave });
    if (!conserved) report.errors.push("CONSERVE_FAILED");
  }

  // Note from conversation (natural) — first pass must persist
  const note = await turn(
    preparationId,
    "Prépare-moi une courte note de recommandation technique résumant la règle d'échéance obligatoire et le scénario de refus associé, à partir de nos échanges. Pas besoin de relancer une investigation.",
  );
  save("09-note", {
    status: note.status,
    documentSave: note.json?.documentSave,
    intents: (note.json?.semanticQualification?.intents || []).map((i) => ({
      c: i.capabilityId,
      m: i.mode,
    })),
    replyPreview: (note.json?.assistantMessage?.content || "").slice(0, 400),
  });
  const noteOk = note.json?.documentSave?.status === "AVAILABLE";
  report.steps.push({ step: "NOTE_FIRST_PASS", ok: noteOk, documentSave: note.json?.documentSave });
  if (!noteOk) report.errors.push("NOTE_NOT_CREATED_FIRST_PASS");

  // Activity sample
  const activity = pg(
    `SELECT count(*)||'|'||coalesce(string_agg(DISTINCT phase, ','), '') FROM nora_activity_events e JOIN conversations c ON c.id=e.conversation_id WHERE c.project_id='${projectId}'`,
  );
  report.steps.push({ step: "ACTIVITY", activity });
  report.steps.push({
    step: "IQ_FORECAST",
    status: iq?.status || null,
    cycles: (iq?.forecastSteps || []).map((s) => s.cycleType),
  });

  report.verdict =
    report.errors.length === 0
      ? "LIVE_NATURAL_PATH_PASS"
      : `LIVE_NATURAL_PATH_PARTIAL:${report.errors.join(",")}`;
} catch (e) {
  report.verdict = "LIVE_NATURAL_PATH_FAILED";
  report.errors.push(String(e?.stack || e));
}

save("99-report", report);
console.log(JSON.stringify(report, null, 2));
process.exit(report.errors.length ? 1 : 0);
