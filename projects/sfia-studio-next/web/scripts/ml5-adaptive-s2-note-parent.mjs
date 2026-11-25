import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync, spawnSync } from "node:child_process";

const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };
const PRIOR = "cgw_ef647d73-cad1-4dcc-b2eb-926e7e144d90";

function curlJson(method, path, body, timeoutSec = 600) {
  const args = ["-sS", "-X", method, `${BASE}${path}`, "-H", "content-type: application/json", "--max-time", String(timeoutSec), "-D", "-"];
  if (jar.cookie) args.push("-H", `cookie: ${jar.cookie}`);
  if (body !== undefined) args.push("--data-binary", JSON.stringify(body));
  const r = spawnSync("curl", args, { encoding: "utf8", maxBuffer: 50_000_000 });
  if (r.error) throw r.error;
  const raw = r.stdout || "";
  const split = raw.indexOf("\r\n\r\n");
  const headerPart = split >= 0 ? raw.slice(0, split) : "";
  const bodyPart = split >= 0 ? raw.slice(split + 4) : raw;
  for (const line of headerPart.split(/\r?\n/)) {
    const m = line.match(/^set-cookie:\s*([^;]+)/i);
    if (m) jar.cookie = jar.cookie ? `${jar.cookie}; ${m[1]}` : m[1];
  }
  const statusMatch = headerPart.match(/^HTTP\/\S+\s+(\d+)/m);
  const status = statusMatch ? Number(statusMatch[1]) : r.status || 0;
  let json;
  try {
    json = JSON.parse(bodyPart);
  } catch {
    json = { _raw: bodyPart.slice(0, 800) };
  }
  return { status, json };
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  const raw = execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

curlJson("POST", "/api/dev/auto-session", {});
const prep = pg(`SELECT preparation_id FROM cognitive_works WHERE id='${PRIOR}'`);
const preparationId = typeof prep === "string" ? prep : prep?.preparation_id || prep;
console.log("prep", preparationId);

const t0 = Date.now();
const res = curlJson("POST", `/api/preparations/${preparationId}/messages`, {
  content:
    "Prépare une note de recommandation à partir de cette analyse des conflits de planning. Crée le document D4 exploitable. Réutilise les acquis déjà consolidés sans tout relire.",
  clientTurnKey: `s2-parent-note-${randomUUID()}`,
}, 600);

const workId = res.json?.cognitiveWork?.workId || null;
const work = workId
  ? pg(
      `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, parent_work_id, resources_json::json AS resources FROM cognitive_works WHERE id='${workId}') t;`,
    )
  : null;

const out = {
  http: res.status,
  status: res.json?.status,
  workId,
  priorWorkId: PRIOR,
  parentWorkId: work?.parent_work_id ?? null,
  segmentsRun: res.json?.cognitiveWork?.segmentsRun,
  documentSave: res.json?.documentSave ?? null,
  pendingCandidate: res.json?.pendingDocumentCandidate ?? null,
  durationMs: Date.now() - t0,
  resources: work?.resources ?? null,
};
writeFileSync(`${OUT}/s2c-note-with-parent.json`, JSON.stringify({ out, raw: res.json }, null, 2));
console.log(JSON.stringify(out, null, 2));
console.log("DONE");
