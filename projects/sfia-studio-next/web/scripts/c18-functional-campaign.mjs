#!/usr/bin/env node
/**
 * C18 functional campaign — product API only.
 * Does NOT inject cognitive outcomes, READY, or D6 decisions.
 * Omits cognitiveWorkId on continuity turns to exercise semantic attachment.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";

const BASE = process.env.SFIA_C18_BASE || "http://127.0.0.1:3100";
const OUT = process.env.SFIA_C18_OUT || "/tmp/sfia-c18-campaign";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
async function api(path, { method = "GET", body, timeoutMs = 420_000 } = {}) {
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
      json = { _raw: text.slice(0, 500) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

const report = { startedAt: new Date().toISOString(), base: BASE, steps: [] };
function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(name, JSON.stringify(data).slice(0, 400));
}

await api("/api/dev/auto-session", { method: "POST" });
step("auth", { ok: true });

// --- helpers ---
async function newProject(name) {
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = prep.json.preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: "C18 campaign",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `c18-${randomUUID()}`,
      previewSummary: "C18 campaign",
    },
  });
  return { preparationId, projectId: created.json.projectId };
}

async function msg(preparationId, content, opts = {}) {
  const body = {
    content,
    clientTurnKey: `c18-${randomUUID()}`,
    ...(opts.forceNew ? { forceNewCognitiveWork: true } : {}),
    // Intentionally omit cognitiveWorkId unless opts.workId set (semantic attach proof).
    ...(opts.workId ? { cognitiveWorkId: opts.workId } : {}),
  };
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body,
    timeoutMs: opts.timeoutMs ?? 420_000,
  });
}

// ========== P1 ==========
{
  const { preparationId, projectId } = await newProject("C18 P1 Conversation");
  // seed public-ish doc for complex path
  const seed = await msg(
    preparationId,
    "Crée un document D4 'Spec C18 Alpha' avec sections Contexte, Règle A (taux fictif 0%), Règle B (pièce manquante = ÉCART), Contradiction: la note dit aussi que le montant peut être 5€ dans un cas dérogatoire fictif.",
    { forceNew: true },
  );
  save("p1-seed", seed.json);
  step("p1_seed", {
    status: seed.json.status,
    doc: seed.json.documentSave,
    cw: seed.json.cognitiveWork,
  });

  const simple = await msg(
    preparationId,
    "Qu'est-ce qu'un cycle SFIA de type Delivery en une phrase utile ?",
    { forceNew: true },
  );
  save("p1a-simple", simple.json);
  step("p1a_simple", {
    status: simple.json.status,
    segments: simple.json.cognitiveWork?.segmentsRun,
    suspended: simple.json.cognitiveWork?.suspended,
    workId: simple.json.cognitiveWork?.workId,
    tools: simple.json.toolCallsObserved,
  });

  const complex = await msg(
    preparationId,
    "Investigate the Spec C18 Alpha document: what is the governing VAT simulation rule when a shipping slip is missing, and how do you reconcile the 0% rule with the derogatory 5€ mention? Produce a consolidated answer citing the document revision.",
    { forceNew: true },
  );
  save("p1b-complex", complex.json);
  step("p1b_complex", {
    status: complex.json.status,
    segments: complex.json.cognitiveWork?.segmentsRun,
    suspended: complex.json.cognitiveWork?.suspended,
    suspendReason: complex.json.cognitiveWork?.suspendReason,
    workId: complex.json.cognitiveWork?.workId,
    tools: complex.json.toolCallsObserved,
    disposition: complex.json.messages?.slice(-1)?.[0]?.content?.slice(0, 120),
  });
  report.p1 = { preparationId, projectId, simple: simple.json, complex: complex.json };
}

// ========== P2 semantic continuity (no injected workId) ==========
{
  const { preparationId, projectId } = await newProject("C18 P2 Continuity");
  const t1 = await msg(
    preparationId,
    "We need a fictional export VAT control design. What is the single most determinant missing input before you can propose acceptance criteria?",
    { forceNew: true },
  );
  save("p2-t1", t1.json);
  const workA = t1.json.cognitiveWork?.workId;
  step("p2_t1", { status: t1.json.status, workId: workA, suspended: t1.json.cognitiveWork?.suspended });

  // clarification WITHOUT cognitiveWorkId — semantic attach
  const t2 = await msg(
    preparationId,
    "Determinant answer: the workspace is local-only sandbox path /tmp/sfia-c18-sandbox and data are 100% synthetic. Continue the same design work.",
  );
  save("p2-t2", t2.json);
  step("p2_t2_semantic", {
    status: t2.json.status,
    workId: t2.json.cognitiveWork?.workId,
    sameAsT1: t2.json.cognitiveWork?.workId === workA,
    resumed: t2.json.cognitiveWork?.resumed,
  });

  const indep = await msg(
    preparationId,
    "Independent request: summarize what a HumanDecision D6 is, unrelated to the VAT design.",
    { forceNew: true },
  );
  save("p2-indep", indep.json);
  step("p2_independent", {
    status: indep.json.status,
    workId: indep.json.cognitiveWork?.workId,
    distinct: indep.json.cognitiveWork?.workId !== workA,
  });
  report.p2 = { preparationId, projectId, t1: t1.json, t2: t2.json, indep: indep.json };
}

// ========== P3 document + long contract ==========
{
  const { preparationId, projectId } = await newProject("C18 P3 Production");
  const doc = await msg(
    preparationId,
    "Crée un document projet D4 intitulé 'Dossier TVA C18 Long' avec au moins quatre sections substantielles (Contexte, Données fictives, Règles, Preuves) décrivant un contrôle TVA export entièrement fictif, assez riche pour une reprise multi-segments.",
    { forceNew: true },
  );
  save("p3-doc", doc.json);
  step("p3_doc", {
    status: doc.json.status,
    documentSave: doc.json.documentSave,
    cw: doc.json.cognitiveWork,
  });

  const ctr = await msg(
    preparationId,
    "Prépare un contrat technique Cursor DRAFT inspectable (capability d7.prepare_cursor_contract) pour implémenter le contrôle décrit dans le document Dossier TVA C18 Long. Fournis productionInstruction dédiée (pas replyDraft) et au moins neuf acceptanceCriteria spécifiques. Consulte le document. Aucun dispatch. workDisposition COMPLETE lorsque le DRAFT structuré est prêt.",
    { forceNew: true },
  );
  save("p3-contract", ctr.json);
  step("p3_contract", {
    status: ctr.json.status,
    prepared: ctr.json.preparedContract,
    cw: ctr.json.cognitiveWork,
  });

  // continue without workId if suspended
  let last = ctr.json;
  if (last.cognitiveWork?.suspended || !last.preparedContract) {
    const cont = await msg(
      preparationId,
      "Continue the same Cursor contract preparation: finish productionInstruction and nine specific acceptanceCriteria, consult the document, then workDisposition COMPLETE. No dispatch.",
    );
    save("p3-contract-cont", cont.json);
    step("p3_contract_cont", {
      status: cont.json.status,
      prepared: cont.json.preparedContract,
      cw: cont.json.cognitiveWork,
      sameWork: cont.json.cognitiveWork?.workId === last.cognitiveWork?.workId,
    });
    last = cont.json;
  }

  const cid = last.preparedContract?.contractId;
  let contractGet = null;
  if (cid) {
    contractGet = await api(`/api/projects/${projectId}/realization/contracts/${cid}`);
    save("p3-contract-get", contractGet.json);
    const body = contractGet.json.contract?.body;
    step("p3_contract_body", {
      instrLen: body?.instructionText?.length ?? 0,
      criteria: body?.acceptance?.criteria?.length ?? 0,
      status: contractGet.json.contract?.status,
      cw: contractGet.json.contract?.cognitiveWorkId,
      rev: contractGet.json.contract?.cognitiveRevision,
    });
  }
  report.p3 = { preparationId, projectId, doc: doc.json, contract: last, contractGet: contractGet?.json };
}

// ========== P4 DRAFT / READY / refuse / invalidation attempt ==========
{
  const { preparationId, projectId } = await newProject("C18 P4 Governed");
  // ensure a consulted doc exists
  await msg(
    preparationId,
    "Crée un document D4 'Note périmètre C18' indiquant: sandbox local uniquement, données synthétiques, aucun réseau fiscal réel.",
    { forceNew: true },
  );

  const draft = await msg(
    preparationId,
    "Prépare un contrat technique Cursor DRAFT (d7.prepare_cursor_contract) pour un README.md fictif dans un workspace local de test. Une information déterminante manque encore: le chemin exact du workspace. productionInstruction + 3 acceptanceCriteria structurés. Ne pas marquer READY. workDisposition AWAIT_PILOT.",
    { forceNew: true },
  );
  save("p4-draft", draft.json);
  step("p4_draft", {
    status: draft.json.status,
    prepared: draft.json.preparedContract,
    cw: draft.json.cognitiveWork,
  });

  const cid0 = draft.json.preparedContract?.contractId;
  if (cid0) {
    const readyEarly = await api(
      `/api/projects/${projectId}/realization/contracts/${cid0}/ready`,
      {
        method: "POST",
        body: { preparationId },
        timeoutMs: 60_000,
      },
    );
    save("p4-ready-early", readyEarly.json);
    step("p4_ready_early", {
      status: readyEarly.status,
      error: readyEarly.json.error || readyEarly.json.message,
    });
  }

  const complete = await msg(
    preparationId,
    "Determinant clarification: workspaceKey=default maps to /tmp/sfia-c18-sandbox. Continue the same contract work: consult Note périmètre C18, emit productionInstruction + at least 3 specific acceptanceCriteria, workDisposition COMPLETE, prepare_cursor_contract. No dispatch.",
  );
  save("p4-complete", complete.json);
  step("p4_complete", {
    status: complete.json.status,
    prepared: complete.json.preparedContract,
    cw: complete.json.cognitiveWork,
    sameWork: complete.json.cognitiveWork?.workId === draft.json.cognitiveWork?.workId,
  });

  const cid = complete.json.preparedContract?.contractId || cid0;
  let ready = null;
  if (cid) {
    ready = await api(`/api/projects/${projectId}/realization/contracts/${cid}/ready`, {
      method: "POST",
      body: { preparationId },
      timeoutMs: 60_000,
    });
    save("p4-ready", ready.json);
    step("p4_ready", {
      http: ready.status,
      status: ready.json.status || ready.json.error,
      fp: ready.json.fingerprint,
      filiation: ready.json.readiness?.cognitiveFiliation,
    });
  }

  if (ready?.json?.status === "READY") {
    const att = await api(`/api/projects/${projectId}/realization/attempts/prepare`, {
      method: "POST",
      body: { contractId: cid, correlationKey: `c18-ref-${randomUUID()}` },
    });
    save("p4-attempt", att.json);
    const attemptId = att.json.attemptId;
    const refuse = await api(
      `/api/projects/${projectId}/realization/attempts/${attemptId}/authorize`,
      {
        method: "POST",
        body: {
          statement: "C18 P4-E refus Pilote — aucun effet",
          inspectedFingerprint: ready.json.fingerprint,
          confirmed: false,
        },
      },
    );
    save("p4-refuse", refuse.json);
    step("p4_refuse", {
      status: refuse.json.status,
      refused: refuse.json.refused,
      decisionId: refuse.json.decisionId,
    });
  }

  report.p4 = {
    preparationId,
    projectId,
    draft: draft.json,
    complete: complete.json,
    ready: ready?.json,
  };
}

report.finishedAt = new Date().toISOString();
save("report", report);
console.log("REPORT", `${OUT}/report.json`);
