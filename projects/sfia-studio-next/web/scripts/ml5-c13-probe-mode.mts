import { config } from "dotenv";
config({ path: ".env.local", override: true });
import { chromium } from "@playwright/test";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { effectAttempts } from "../src/db/schema";

const BASE = "http://127.0.0.1:3100";
const projectId = "proj_baff6a67-c081-4798-80e7-5763934317db";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const req = ctx.request;
  await req.post(`${BASE}/api/dev/auto-session`, { data: {} });
  const contracts = (await (
    await req.get(`${BASE}/api/projects/${projectId}/realization/contracts`)
  ).json()) as { contracts?: Array<{ id: string; fingerprint: string }> };
  const c = contracts.contracts?.[0];
  console.log({ cid: c?.id, fp: c?.fingerprint?.slice(0, 16) });
  const prep = await req.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: c!.id,
        correlationKey: `probe-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const pj = (await prep.json()) as { attemptId?: string; error?: string };
  console.log("prepare", prep.status(), pj);
  if (pj.attemptId) {
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, pj.attemptId)).limit(1)
    )[0];
    const plan = JSON.parse(row?.planJson || "{}");
    console.log({ effectProviderMode: plan.effectProviderMode, status: row?.status });
  }
  await browser.close();
}
main();
