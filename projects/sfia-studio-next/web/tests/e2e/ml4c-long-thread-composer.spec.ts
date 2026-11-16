import { test, expect } from "@playwright/test";
import { config as loadEnv } from "dotenv";
import path from "node:path";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

loadEnv({ path: path.resolve(__dirname, "../../.env.local") });

/**
 * ML4C C-07 — sticky composer on a real 320+ message journal (FAKE Nora).
 * Seeds via postgres into sfia_next_e2e (same lane as Playwright webServer).
 */
async function seedLongThread(preparationId: string, count: number): Promise<number> {
  const postgres = (await import("postgres")).default;
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL required for C-07 seed");
  const u = new URL(raw);
  u.pathname = "/sfia_next_e2e";
  const sql = postgres(u.toString(), { max: 1 });
  try {
    const conv = await sql<{ id: string }[]>`
      select id from conversations where preparation_id = ${preparationId} limit 1
    `;
    if (!conv[0]) throw new Error("conversation missing for preparation");
    const conversationId = conv[0].id;
    const existing = await sql<{ n: string }[]>`
      select coalesce(max(ordinal), 0)::text as n from messages where conversation_id = ${conversationId}
    `;
    let ordinal = Number(existing[0]?.n ?? 0);
    const rows: Array<{
      id: string;
      conversation_id: string;
      role: string;
      content: string;
      status: string;
      ordinal: number;
    }> = [];
    for (let i = 1; i <= count; i++) {
      ordinal += 1;
      const role = i % 2 === 1 ? "user" : "assistant";
      let content = `Message synthétique #${i} thème-${(i % 17) + 1} détail-${i * 3}`;
      if (i === 10) content = "orientation X rouge — jalon historique";
      if (i === 110) content = "correction X bleu — orientation remplacée";
      if (i === 250) content = "question sur X — quelle est l'orientation actuelle ?";
      rows.push({
        id: `msg_e2e_long_${preparationId.slice(0, 8)}_${i}`,
        conversation_id: conversationId,
        role,
        content,
        status: "COMPLETE",
        ordinal,
      });
    }
    // Batch insert
    for (let offset = 0; offset < rows.length; offset += 50) {
      const chunk = rows.slice(offset, offset + 50);
      await sql`
        insert into messages ${sql(
          chunk,
          "id",
          "conversation_id",
          "role",
          "content",
          "status",
          "ordinal",
        )}
        on conflict do nothing
      `;
    }
    const total = await sql<{ n: string }[]>`
      select count(*)::text as n from messages where conversation_id = ${conversationId}
    `;
    return Number(total[0]?.n ?? 0);
  } finally {
    await sql.end({ timeout: 2 });
  }
}

test("ML4C C-07: composer usable on 320+ message thread after scroll", async ({ page }) => {
  test.setTimeout(180_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const seed = "Fil projet ML4C composer long (fixture).";
  const { preparationId, projectId } = await bootstrapProjectFromPortfolio(page, {
    seed,
    name: `ML4C Composer 320+ ${Date.now()}`,
    summary: "C-07 fil long",
  });

  const total = await seedLongThread(preparationId, 320);
  expect(total).toBeGreaterThanOrEqual(320);

  await page.goto(`/projects/${projectId}`);
  const composer = page.getByTestId("nora-composer");
  const send = page.getByTestId("thread-send");
  const thread = page.getByTestId("nora-thread");
  const draft = page.getByTestId("thread-draft");

  await expect(composer).toBeVisible({ timeout: 30_000 });
  await expect(send).toBeVisible();
  await expect(thread).toBeVisible();

  // Scroll to older portion then back — composer must remain reachable.
  await thread.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await thread.evaluate((el) => {
    el.scrollTop = 0;
  });
  await expect(composer).toBeVisible();
  expect(await composer.evaluate((el) => el.classList.contains("fig-composer-sticky"))).toBe(true);

  await draft.fill("Message après parcours du fil long.");
  await expect(draft).toHaveValue("Message après parcours du fil long.");
  await expect(send).toBeEnabled();

  await send.click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  // F-P1: send must clear draft (no neutralized assertion).
  await expect(draft).toHaveValue("", { timeout: 45_000 });
  // Exact USER bubble — Nora fixture may echo the same phrase in its reply.
  await expect(
    thread.getByText("Message après parcours du fil long.", { exact: true }),
  ).toBeVisible({ timeout: 45_000 });
  await expect(composer).toBeVisible();
  await expect(send).toBeVisible();

  const shotDir = path.resolve(__dirname, "../../test-results/ml4c-c07");
  await page.screenshot({
    path: path.join(shotDir, `long-thread-${Date.now()}.png`),
    fullPage: true,
  });

  await page.reload();
  await expect(composer).toBeVisible({ timeout: 30_000 });
  await expect(thread).toBeVisible();
  await expect(
    thread.getByText("Message après parcours du fil long.", { exact: true }),
  ).toBeVisible({ timeout: 30_000 });
});
