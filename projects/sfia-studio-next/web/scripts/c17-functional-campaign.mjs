/**
 * C17 — functional campaign driver (product API, not internal injection).
 * Observes P1–P4 via HTTP against DEV 127.0.0.1:3100.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";

const BASE = process.env.SFIA_C17_BASE || "http://127.0.0.1:3100";
const outDir = "/tmp/sfia-c17-campaign";
mkdirSync(outDir, { recursive: true });

const jar = new Map();
function storeCookies(res) {
  const raw = res.headers.getSetCookie?.() || [];
  for (const c of raw) {
    const [pair] = c.split(";");
    const i = pair.indexOf("=");
    if (i > 0) jar.set(pair.slice(0, i), pair.slice(i + 1));
  }
}
function cookieHeader() {
  return [...jar.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
}
async function api(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    ...opts,
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      cookie: cookieHeader(),
      ...(opts.headers || {}),
    },
  });
  storeCookies(res);
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text.slice(0, 2000) };
  }
  return { status: res.status, json, text };
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  steps: [],
  verdicts: {},
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`STEP ${name}`, data.status ?? "", data.note ?? "");
}

async function main() {
  // Auth
  let auth = await api("/api/dev/auto-session", { method: "POST" });
  if (auth.status >= 400) {
    auth = await api("/api/dev/login", { method: "POST", body: "{}" });
  }
  step("auth", { status: auth.status, note: auth.json?.authMode || auth.json?.error || "ok" });
  if (auth.status >= 400) {
    report.verdicts.env = "FAIL_AUTH";
    writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
    process.exit(2);
  }

  // Open preparation
  const prep = await api("/api/preparations", { method: "POST", body: "{}" });
  step("create_preparation", { status: prep.status, id: prep.json?.preparationId || prep.json?.id });
  const preparationId = prep.json?.preparationId || prep.json?.id;
  if (!preparationId) {
    report.verdicts.p1 = "FAIL_NO_PREP";
    writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
    process.exit(2);
  }

  // Seed long document for complex investigation (D4)
  const longDoc = [
    "# Politique TVA export fictive C17",
    "",
    "## Section 1 — Introduction",
    "Document de test public/fictif pour campagne C17.",
    ...Array.from({ length: 40 }, (_, i) => `Paragraphe filler ${i + 1}.`),
    "",
    "## Section 2 — Régime applicable",
    "Le régime export 0% s'applique uniquement si le client est hors UE et la preuve d'export est archivée.",
    "",
    "## Section 3 — Contradiction",
    "Note interne fictive: certains flux UK post-Brexit restent à 20% — à confronter avec Section 2.",
    "",
    "## Section 4 — Référence croisée",
    "Voir aussi le document Annexe Preuves (si présent) pour les conditions de reprise.",
  ].join("\n");

  const doc = await api(`/api/preparations/${preparationId}/documents`, {
    method: "POST",
    body: JSON.stringify({
      title: "Politique TVA export C17",
      contentMarkdown: longDoc,
    }),
  });
  step("seed_document", {
    status: doc.status,
    documentId: doc.json?.documentId || doc.json?.id,
    note: doc.json?.error || doc.json?.reason,
  });

  // P1-A simple
  const simpleKey = `c17-simple-${randomUUID()}`;
  const simple = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content: "Bonjour Nora, peux-tu me rappeler en une phrase ce qu'est un sas de préparation dans Studio Next ?",
      clientTurnKey: simpleKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p1a_simple", {
    status: simple.status,
    noraMode: simple.json?.noraMode,
    replyStatus: simple.json?.status,
    segments: simple.json?.cognitiveWork?.segmentsRun,
    workId: simple.json?.cognitiveWork?.workId,
    suspended: simple.json?.cognitiveWork?.suspended,
    generationId: simple.json?.generationId,
    assistantPreview: (simple.json?.messages || [])
      .filter((m) => m.role === "ASSISTANT" || m.authorRole === "ASSISTANT")
      .slice(-1)[0]?.content?.slice?.(0, 240),
  });
  const workA = simple.json?.cognitiveWork?.workId;

  // P1-B complex
  const complexKey = `c17-complex-${randomUUID()}`;
  const complex = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Analyse la politique TVA export du projet: détermine le régime applicable, confronte la contradiction éventuelle, et produis une synthèse structurée avec les conditions de preuve. Consulte les documents disponibles.",
      clientTurnKey: complexKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p1b_complex", {
    status: complex.status,
    noraMode: complex.json?.noraMode,
    replyStatus: complex.json?.status,
    segments: complex.json?.cognitiveWork?.segmentsRun,
    workId: complex.json?.cognitiveWork?.workId,
    suspended: complex.json?.cognitiveWork?.suspended,
    suspendReason: complex.json?.cognitiveWork?.suspendReason,
    toolCalls: complex.json?.toolCallsObserved,
    generationId: complex.json?.generationId,
  });
  const workB = complex.json?.cognitiveWork?.workId;

  // P2-A continuity with complementary info
  const contKey = `c17-cont-${randomUUID()}`;
  const cont = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Complément: le client est hors UE et la preuve d'export est déjà archivée dans le dossier fictif. Poursuis la même analyse.",
      clientTurnKey: contKey,
      cognitiveWorkId: workB || null,
    }),
  });
  step("p2a_continue", {
    status: cont.status,
    workId: cont.json?.cognitiveWork?.workId,
    resumed: cont.json?.cognitiveWork?.resumed,
    sameAsComplex: cont.json?.cognitiveWork?.workId === workB,
    segments: cont.json?.cognitiveWork?.segmentsRun,
  });

  // P2 independent request
  const indepKey = `c17-indep-${randomUUID()}`;
  const indep = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content: "Question indépendante: quelle est la météo à Paris demain ? (ne mélange pas avec la TVA)",
      clientTurnKey: indepKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p2_independent", {
    status: indep.status,
    workId: indep.json?.cognitiveWork?.workId,
    distinctFromB: indep.json?.cognitiveWork?.workId !== workB,
    distinctFromA: indep.json?.cognitiveWork?.workId !== workA,
  });

  // P3 document production request
  const docProdKey = `c17-docprod-${randomUUID()}`;
  const docProd = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Produis maintenant un document de cadrage TVA (titre + corps en fence sfia-document) résumant régime, contradictions et preuves requises, à enregistrer dans le projet/préparation.",
      clientTurnKey: docProdKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p3a_document", {
    status: docProd.status,
    documentSave: docProd.json?.documentSave,
    productionKind: null,
    workId: docProd.json?.cognitiveWork?.workId,
    hasFence: JSON.stringify(docProd.json).includes("sfia-document"),
  });

  // P3/P4 contract prepare if project exists — create project if needed
  let projectId = prep.json?.projectId || null;
  if (!projectId) {
    const created = await api(`/api/preparations/${preparationId}/create-project`, {
      method: "POST",
      body: JSON.stringify({ proposedName: `C17 Campagne ${Date.now().toString(36)}` }),
    });
    projectId = created.json?.projectId || created.json?.id || null;
    step("create_project", { status: created.status, projectId, note: created.json?.error });
  }

  const contractKey = `c17-contract-${randomUUID()}`;
  const contractMsg = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Prépare un contrat technique Cursor pour implémenter un contrôle de conformité TVA export fictif: instruction détaillée, plus de huit critères d'acceptation spécifiques, exclusions, STOP et preuves. Ne dispatch pas.",
      clientTurnKey: contractKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p3b_p4_contract_turn", {
    status: contractMsg.status,
    preparedContract: contractMsg.json?.preparedContract,
    workId: contractMsg.json?.cognitiveWork?.workId,
    suspended: contractMsg.json?.cognitiveWork?.suspended,
  });

  report.preparationId = preparationId;
  report.projectId = projectId;
  report.finishedAt = new Date().toISOString();

  // Heuristic verdicts from observations
  report.verdicts.p1a =
    simple.status === 200 && simple.json?.status && simple.json?.cognitiveWork?.segmentsRun <= 2
      ? "PASS_OR_PARTIAL"
      : "FAIL_OR_INCOMPLETE";
  report.verdicts.p1b =
    complex.status === 200 && complex.json?.cognitiveWork
      ? "OBSERVED"
      : "FAIL";
  report.verdicts.p2 =
    cont.json?.cognitiveWork?.workId === workB || cont.json?.cognitiveWork?.resumed
      ? "PASS_OR_PARTIAL"
      : "PARTIAL";
  report.verdicts.p3 = docProd.json?.documentSave || JSON.stringify(docProd.json).includes("sfia-document")
    ? "OBSERVED"
      : "PARTIAL";
  report.verdicts.p4 = contractMsg.json?.preparedContract ? "OBSERVED" : "PARTIAL";

  writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
  writeFileSync(`${outDir}/simple.json`, JSON.stringify(simple.json, null, 2));
  writeFileSync(`${outDir}/complex.json`, JSON.stringify(complex.json, null, 2));
  writeFileSync(`${outDir}/contract.json`, JSON.stringify(contractMsg.json, null, 2));
  console.log("REPORT", `${outDir}/report.json`);
  console.log(JSON.stringify(report.verdicts, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
