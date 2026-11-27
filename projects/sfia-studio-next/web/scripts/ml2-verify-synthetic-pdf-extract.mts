import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { extractPdfText } from "../src/domains/documents/pdf-extract-server.ts";

const root = join(process.cwd(), ".sfia-evidence/document-intelligence/artefacts");
mkdirSync(root, { recursive: true });

const cases = [
  { id: "P-TXT-01", file: "P-TXT-01-orion-capacity.pdf", expect: "SUCCESS" },
  { id: "P-SCN-01", file: "P-SCN-01-network-scan.pdf", expect: "SCANNED_NO_TEXT" },
  { id: "P-TBL-01", file: "P-TBL-01-tariff-table.pdf", expect: "SUCCESS" },
];

const rows = [];
for (const c of cases) {
  const bytes = new Uint8Array(readFileSync(join(root, c.file)));
  const r = await extractPdfText({
    bytes,
    identity: {
      provenance: "FIXTURE",
      sourceRef: c.id,
      versionToken: "synth-v1",
      mimeClaimed: "application/pdf",
    },
  });
  const reason = "reasonCode" in r ? r.reasonCode : null;
  const sample =
    r.ok && "pages" in r ? r.pages?.[0]?.text?.slice(0, 100) ?? null : null;
  const pass =
    c.expect === "SUCCESS"
      ? r.ok === true && Boolean(sample && /Orion|gpt-6-luna|capacity|documented_candidate/i.test(sample))
      : r.ok === false && reason === "SCANNED_NO_TEXT";
  rows.push({ id: c.id, expect: c.expect, ok: r.ok, reason, sample, pass });
}

const out = {
  script: "ml2-verify-synthetic-pdf-extract",
  rows,
  verdict: rows.every((r) => r.pass)
    ? "SYNTHETIC_PDF_EXTRACT_ORACLE_ALIGNED"
    : "SYNTHETIC_PDF_EXTRACT_MISMATCH",
};
writeFileSync(
  join(process.cwd(), ".sfia-evidence/document-intelligence/pdf-extract-verify.json"),
  JSON.stringify(out, null, 2) + "\n",
);
console.log(JSON.stringify(out, null, 2));
process.exit(rows.every((r) => r.pass) ? 0 : 1);
