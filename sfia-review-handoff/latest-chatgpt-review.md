# ChatGPT Review Pack — FULL
## Cycle 8 — Delivery Amend — REAL CAMPAIGN UI OPERATOR STABILIZATION

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 18:31:20 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 8 — Delivery / implémentation — AMEND |
| **Profil SFIA** | Critical |
| **Typologie** | INC / tooling stabilization |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `delivery/sfia-studio-pre-m6-ui-option-a` |
| **HEAD** | `0d33478566627a9bf507d5a06323962d349308ee` |
| **origin/main** | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| **Parent handoff** | `964195ee00bedf1b68c8b9d6a3090d1adf731373` |
| **Parent blob** | `6de73a0089c7884526e243ce0e27c6e116831768` |
| **Preuves** | `.tmp-sfia-review/cycle-8-real-operator-stabilization-20260817-182519/` |

---

## Verdict

```
PASS —
CYCLE 8 DELIVERY AMEND
REAL CAMPAIGN UI OPERATOR STABILIZED
LINK / BUTTON INTERACTION FIDELITY PROVEN
open-project-workspace NAVIGATION PROVEN
DETERMINISTIC PRODUCT OPERATOR PATH PROVEN
3 FRESH DETERMINISTIC OPERATOR RUNS PASS
PRODUCT BEHAVIOR UNCHANGED
ARCH-WOP-1 NOT REOPENED
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR MORRIS DELIVERY ACCEPTANCE
READY FOR NEW MORRIS REAL RE-PROOF DECISION
NOT AUTHORIZED FOR REAL
```

---

## GO Morris exact

```
ACCEPT DIAGNOSIS —
INCOMPLETE — REAL PRODUCT LOOP DID NOT REACH CURSOR LAUNCH
…

et

GO MORRIS —
CYCLE 8 DELIVERY AMEND
REAL CAMPAIGN UI OPERATOR STABILIZATION
ZERO REAL
```

---

## Local Git Truth PRE / POST

| Check | PRE | POST |
|-------|-----|------|
| branche | `delivery/sfia-studio-pre-m6-ui-option-a` | identique |
| HEAD | `0d334785…` | identique |
| origin/main | `a3ac418f…` | identique |
| staged | empty | empty |
| dirty | 110 | 110 |
| candidate files | 994 | 994 |
| manifest | `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5` | **identique** |

APP delta vs origin/main : 0. Candidate PRE=POST. Aucune mutation `projects/sfia-studio/app/**`.

---

## Parent REAL diagnosis handoff

Commit `964195ee…` · blob `6de73a00…`.

Verdict parent : INCOMPLETE — REAL PRODUCT LOOP DID NOT REACH CURSOR LAUNCH.

Cause acceptée : `open-project-workspace` = Next Link / `<a>` ; `clickWhenEnabled` exigeait `HTMLButtonElement`.

---

## Convergence

PRE-M6 NON COMPLETE · runtime v3 NON ADOPTED · V3-F05 / V3-F14 / V3-F15.

KEEP produit + ARCH-WOP-1 + DET boundary.

ADAPT : campaign UI operator only.

Classification opérateur : **TEMPORARY WITH EXIT**.

Gap : OPERATOR INTERACTION FIDELITY — **CLOSED UNDER DET**.

Next capability : nouveau GO Morris REAL re-proof (non consommé).

---

## Operator source discovery

**CASE A** — driver récupéré sous :

`.tmp-sfia-review/real-bounded-reproof-20260817-180444/operator/run-loop.cjs`

Copié READ-ONLY vers :

`.tmp-sfia-review/cycle-8-real-operator-stabilization-20260817-182519/operator/historical-source/run-loop.cjs`

SHA256 historique : `a635a23569aaf065ef27f8038b46f2e490fda07862525b98f876afa271f7e600`

Ancien dossier REAL : **READ-ONLY**.

---

## Root cause (préservée)

Snippet historique fautif :

```javascript
async function clickWhenEnabled(page, testId, timeoutMs) {
  const loc = page.getByTestId(testId);
  await loc.waitFor({ timeout: timeoutMs });
  await page.waitForFunction(
    (id) => {
      const el = document.querySelector(`[data-testid="${id}"]`);
      return el instanceof HTMLButtonElement && !el.disabled;
    },
    testId,
    { timeout: timeoutMs },
  );
  await loc.click();
}
```

Produit oracle inchangé : `open-project-workspace` reste un `<Link>` → `<a>`.

---

## Correctif TEMPORARY WITH EXIT

Nouveau helper (non versionné) :

`.tmp-sfia-review/cycle-8-real-operator-stabilization-20260817-182519/operator/clickWhenInteractive.cjs`

SHA256 : `16d39d58204d6c744ca734dd18c42bf22025555174b4363c677f0089a1ef8334`

Contrat :

- BUTTON : visible + `disabled=false` + `aria-disabled!=true`
- ANCHOR : visible + `aria-disabled!=true` + pas `disabled`
- sinon : refuse (pas d'HTMLElement arbitraire)
- click via Playwright locator (pas force / pas DOM mutation)

### Contenu COMPLET — clickWhenInteractive.cjs

```javascript
"use strict";

/**
 * TEMPORARY WITH EXIT — campaign UI operator interaction helper.
 * Supports HTMLButtonElement and HTMLAnchorElement only.
 * No force click. No DOM mutation. No arbitrary HTMLElement.
 */

async function isInteractive(page, testId) {
  return page.evaluate((id) => {
    const el = document.querySelector(`[data-testid="${id}"]`);
    if (!el) return { ok: false, reason: "absent" };
    const tag = el.tagName;
    const ariaDisabled = el.getAttribute("aria-disabled");
    if (el instanceof HTMLButtonElement) {
      return {
        ok: !el.disabled && ariaDisabled !== "true",
        tagName: tag,
        runtimeClass: el.constructor.name,
        disabled: el.disabled,
        ariaDisabled,
        href: null,
      };
    }
    if (el instanceof HTMLAnchorElement) {
      return {
        ok: ariaDisabled !== "true" && !el.hasAttribute("disabled"),
        tagName: tag,
        runtimeClass: el.constructor.name,
        disabled: el.hasAttribute("disabled"),
        ariaDisabled,
        href: el.getAttribute("href"),
      };
    }
    return {
      ok: false,
      reason: "unsupported_element",
      tagName: tag,
      runtimeClass: el.constructor.name,
    };
  }, testId);
}

/**
 * Wait until visible + interactive (button enabled OR anchor not aria-disabled),
 * then use Playwright locator.click() actionability (no force).
 */
async function clickWhenInteractive(page, testId, timeoutMs = 30000) {
  const loc = page.getByTestId(testId);
  await loc.waitFor({ state: "visible", timeout: timeoutMs });
  await page.waitForFunction(
    (id) => {
      const el = document.querySelector(`[data-testid="${id}"]`);
      if (!el) return false;
      const ariaDisabled = el.getAttribute("aria-disabled");
      if (el instanceof HTMLButtonElement) {
        return !el.disabled && ariaDisabled !== "true";
      }
      if (el instanceof HTMLAnchorElement) {
        return ariaDisabled !== "true" && !el.hasAttribute("disabled");
      }
      return false;
    },
    testId,
    { timeout: timeoutMs },
  );
  const before = await isInteractive(page, testId);
  if (!before.ok) {
    throw new Error(
      `clickWhenInteractive: ${testId} not interactive: ${JSON.stringify(before)}`,
    );
  }
  await loc.click({ timeout: timeoutMs });
  return before;
}

/** Broken historical helper — kept for contrast / unit negative proof. */
async function clickWhenEnabledBroken(page, testId, timeoutMs = 30000) {
  const loc = page.getByTestId(testId);
  await loc.waitFor({ timeout: timeoutMs });
  await page.waitForFunction(
    (id) => {
      const el = document.querySelector(`[data-testid="${id}"]`);
      return el instanceof HTMLButtonElement && !el.disabled;
    },
    testId,
    { timeout: timeoutMs },
  );
  await loc.click();
}

module.exports = {
  clickWhenInteractive,
  clickWhenEnabledBroken,
  isInteractive,
};

```

### Contenu COMPLET — run-det-operator.cjs

```javascript
"use strict";

/**
 * TEMPORARY WITH EXIT — deterministic product UI operator proof.
 * ZERO REAL. Same product UI path as future REAL. Fake/DET boundaries only.
 * Uses clickWhenInteractive (button + Next Link/<a>).
 */

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { spawnSync } = require("node:child_process");
const {
  clickWhenInteractive,
  isInteractive,
} = require("./clickWhenInteractive.cjs");
const { dumpProduct } = require("./inspect-dbs.cjs");

const CAMP = path.resolve(__dirname, "..");
const STUDIO = path.resolve(CAMP, "../..");
const APP = path.join(STUDIO, "projects/sfia-studio/app");
const RUN = process.env.SFIA_OPERATOR_RUN || "run1";
const RUN_DIR = path.join(CAMP, "runs", RUN);
const IDENTITY = JSON.parse(
  fs.readFileSync(path.join(RUN_DIR, "server-identity.json"), "utf8"),
);
const BASE = IDENTITY.baseUrl;
const DB = IDENTITY.isolatedProductDb;
const SHOTS = path.join(RUN_DIR, "screenshots");
const OBS = path.join(RUN_DIR, "observations.jsonl");
const VERDICT = path.join(RUN_DIR, "verdict.json");
const HISTORICAL_ATTEMPTS = new Set([
  "xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96",
  "xat:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b",
]);
const CONSUMED_REAL_PROJECT = "prj:dd72f2bf-bc7e-4468-b684-5075f77daf04";

fs.mkdirSync(SHOTS, { recursive: true });
fs.writeFileSync(OBS, "");

function note(step, data) {
  const rec = { ts: new Date().toISOString(), step, ...data };
  fs.appendFileSync(OBS, JSON.stringify(rec) + "\n");
  console.log("STEP", RUN, step, data.code || data.status || data.tagName || "");
}

function fail(code, extra) {
  const payload = { ok: false, run: RUN, code, ...extra };
  fs.writeFileSync(VERDICT, JSON.stringify(payload, null, 2) + "\n");
  note("FAIL", payload);
  process.exitCode = 10;
}

async function textOrEmpty(page, testId) {
  const loc = page.getByTestId(testId);
  if ((await loc.count()) === 0) return "";
  return ((await loc.textContent()) || "").trim();
}

async function main() {
  if (IDENTITY.SFIA_STUDIO_CURSOR_REAL === "1" || IDENTITY.CURSOR_REAL === 1) {
    fail("FAIL — ZERO REAL CONTRACT VIOLATED", { identity: IDENTITY });
    return;
  }
  if (IDENTITY.OPS1_CONVERSATION_PROVIDER !== "fake") {
    fail("FAIL — ZERO REAL CONTRACT VIOLATED", {
      reason: "fake_provider_required",
    });
    return;
  }

  const { chromium } = require(path.join(APP, "node_modules/playwright"));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1024 } });
  page.setDefaultTimeout(45000);

  const buttonProof = [];
  const shot = async (name) => {
    const file = path.join(SHOTS, name);
    await page.screenshot({ path: file, fullPage: true });
    const buf = fs.readFileSync(file);
    const sha = crypto.createHash("sha256").update(buf).digest("hex");
    note("screenshot", { name, sha256: sha, bytes: buf.length });
    return { name, sha256: sha };
  };

  try {
    const stamp = Date.now();
    const projectName = `QA DET operator ${RUN} ${stamp}`;
    await page.goto(`${BASE}/studio/projects/new`, {
      waitUntil: "networkidle",
      timeout: 180000,
    });
    await page.getByTestId("create-project-form").waitFor({ timeout: 120000 });
    await page.locator("#project-name").fill(projectName);
    await page
      .locator("#project-objective")
      .fill("Deterministic operator stabilization — ZERO REAL");
    await page
      .locator("#project-context")
      .fill("TEMPORARY WITH EXIT UI operator — DET boundary only.");

    const createMeta = await clickWhenInteractive(
      page,
      "create-project-submit",
      30000,
    );
    buttonProof.push({ testId: "create-project-submit", ...createMeta });

    await page.getByTestId("open-project-workspace").waitFor({ timeout: 60000 });
    await shot("01-project-created.png");

    // LINK PROOF — exact blocker from prior REAL campaign
    const linkInfo = await page.evaluate(() => {
      const el = document.querySelector('[data-testid="open-project-workspace"]');
      if (!el) return null;
      return {
        testId: "open-project-workspace",
        tagName: el.tagName,
        runtimeClass: el.constructor.name,
        href: el.getAttribute("href"),
        ariaDisabled: el.getAttribute("aria-disabled"),
        text: (el.textContent || "").trim(),
      };
    });
    note("link_proof_before_click", linkInfo || { missing: true });
    if (
      !linkInfo ||
      linkInfo.tagName !== "A" ||
      linkInfo.runtimeClass !== "HTMLAnchorElement"
    ) {
      fail("LINK_PROOF_UNEXPECTED", { linkInfo });
      await shot("99-link-proof-fail.png");
      return;
    }

    // Prove broken helper still fails on this Link (diagnostic fidelity)
    let brokenTimedOut = false;
    try {
      const { clickWhenEnabledBroken } = require("./clickWhenInteractive.cjs");
      await clickWhenEnabledBroken(page, "open-project-workspace", 2500);
    } catch {
      brokenTimedOut = true;
    }
    note("broken_helper_on_link", { timedOut: brokenTimedOut });
    if (!brokenTimedOut) {
      fail("BROKEN_HELPER_DID_NOT_FAIL_ON_LINK", {});
      return;
    }

    const linkClickMeta = await clickWhenInteractive(
      page,
      "open-project-workspace",
      30000,
    );
    await page.getByTestId("project-principal").waitFor({ timeout: 60000 });
    const url = page.url();
    const projectId = decodeURIComponent(
      (url.match(/\/studio\/projects\/([^/?#]+)/) || [])[1] || "",
    );
    note("workspace_opened", {
      projectId,
      url,
      linkClickMeta,
      hrefMatched: linkInfo.href
        ? url.includes(decodeURIComponent(linkInfo.href.split("/").pop() || ""))
        : false,
    });
    if (!projectId) {
      fail("PROJECT_ID_MISSING", { url });
      return;
    }
    if (projectId === CONSUMED_REAL_PROJECT) {
      fail("FAIL — HISTORICAL REAL ISOLATION VIOLATED", { projectId });
      return;
    }
    await shot("02-workspace.png");

    const input = page.getByTestId("project-assistant-input");
    await input.waitFor({ timeout: 30000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    const sendMeta = await clickWhenInteractive(
      page,
      "project-assistant-send",
      30000,
    );
    buttonProof.push({ testId: "project-assistant-send", ...sendMeta });
    await page.getByTestId("project-assistant-gate").waitFor({ timeout: 60000 });
    await shot("03-conversation-gate.png");

    const goMeta = await clickWhenInteractive(page, "f2-decide-GO", 60000);
    buttonProof.push({ testId: "f2-decide-GO", ...goMeta });
    await page.getByTestId("project-assistant-decision").waitFor({
      timeout: 60000,
    });
    const decisionId = await textOrEmpty(page, "f2-decision-id");
    await shot("04-human-decision.png");

    const prepareMeta = await clickWhenInteractive(
      page,
      "f3-prepare-button",
      60000,
    );
    buttonProof.push({ testId: "f3-prepare-button", ...prepareMeta });
    await page.getByTestId("project-assistant-f3-contract").waitFor({
      timeout: 60000,
    });
    const action = await textOrEmpty(page, "f3-contract-action");
    const contractId = await textOrEmpty(page, "f3-contract-id");
    if (!/cursor\.read_only\.inspect/.test(action)) {
      fail("FAIL — OPERATOR REALISM GAP REMAINS", { action, contractId });
      return;
    }
    await shot("05-contract.png");

    if ((await page.getByTestId("f3-refresh-running-button").count()) !== 0) {
      fail("REFRESH_BEFORE_CONFIRM", {});
      return;
    }

    const confirmMeta = await clickWhenInteractive(
      page,
      "f3-confirm-execute-button",
      60000,
    );
    buttonProof.push({ testId: "f3-confirm-execute-button", ...confirmMeta });
    await page.getByTestId("project-assistant-f3-execute").waitFor({
      timeout: 60000,
    });

    let attemptStatus = await textOrEmpty(page, "f3-attempt-status");
    const attemptId = await textOrEmpty(page, "f3-attempt-id");
    if (!attemptId || HISTORICAL_ATTEMPTS.has(attemptId)) {
      fail("FAIL — HISTORICAL REAL ISOLATION VIOLATED", { attemptId });
      return;
    }
    await shot("06-running.png");
    note("running", { attemptId, attemptStatus });

    // One manual refresh remains possible (same Attempt) — then auto O3 to terminal
    if ((await page.getByTestId("f3-refresh-running-button").count()) > 0) {
      await clickWhenInteractive(page, "f3-refresh-running-button", 30000);
      await page.getByTestId("f3-attempt-id").waitFor({ timeout: 45000 });
      const same = await textOrEmpty(page, "f3-attempt-id");
      if (same !== attemptId) {
        fail("ONE_LAUNCH_INVARIANT", { before: attemptId, after: same });
        return;
      }
    }

    const terminalDeadline = Date.now() + 45000;
    while (Date.now() < terminalDeadline) {
      attemptStatus = await textOrEmpty(page, "f3-attempt-status");
      if (!/running/i.test(attemptStatus)) break;
      await page.waitForTimeout(500);
    }
    attemptStatus = await textOrEmpty(page, "f3-attempt-status");
    if (!/succeeded/i.test(attemptStatus)) {
      fail("TERMINAL_NOT_REACHED", { attemptStatus, attemptId });
      await shot("99-terminal-fail.png");
      return;
    }

    const evidenceId = await textOrEmpty(page, "f3-evidence-id");
    const rbId = await textOrEmpty(page, "f3-review-bundle-id");
    await shot("07-terminal-evidence.png");
    if (!evidenceId || evidenceId === "ev:pending-real") {
      fail("EVIDENCE_MISSING", { evidenceId });
      return;
    }

    await page.reload({ waitUntil: "domcontentloaded", timeout: 120000 });
    await page.getByTestId("project-principal").waitFor({ timeout: 60000 });
    await shot("08-reloaded.png");

    const product = dumpProduct(DB);
    const attempts = Array.isArray(product.attempts) ? product.attempts : [];
    if (attempts.length !== 1) {
      fail("ATTEMPT_COUNT", { count: attempts.length });
      return;
    }

    const verdict = {
      ok: true,
      run: RUN,
      projectId,
      decisionId,
      contractId,
      attemptId,
      attemptStatus,
      evidenceId,
      rbId,
      linkProof: linkInfo,
      buttonProof,
      brokenHelperTimedOutOnLink: brokenTimedOut,
      ZERO_REAL: {
        CURSOR_REAL: 0,
        OPENAI_LIVE: 0,
        SFIA_STUDIO_CURSOR_REAL: IDENTITY.SFIA_STUDIO_CURSOR_REAL,
        OPS1_CONVERSATION_PROVIDER: IDENTITY.OPS1_CONVERSATION_PROVIDER,
      },
      productAttemptCount: attempts.length,
      notConsumedRealProject: projectId !== CONSUMED_REAL_PROJECT,
    };
    fs.writeFileSync(VERDICT, JSON.stringify(verdict, null, 2) + "\n");
    note("PASS", {
      projectId,
      attemptId,
      evidenceId,
    });
  } catch (err) {
    await shot("99-operator-error.png").catch(() => {});
    fail("OPERATOR_EXCEPTION", {
      message: String(err && err.stack ? err.stack : err),
    });
  } finally {
    await browser.close().catch(() => {});
  }
}

main();

```

### Contenu COMPLET — start-next-det.cjs

```javascript
"use strict";

/**
 * TEMPORARY WITH EXIT — start Next for deterministic ZERO REAL operator proof.
 * Fresh isolated DB path required via SFIA_OPERATOR_DB / argv.
 */

const fs = require("node:fs");
const path = require("node:path");
const net = require("node:net");
const { spawn } = require("node:child_process");

const CAMP = path.resolve(__dirname, "..");
const STUDIO = path.resolve(CAMP, "../..");
const APP = path.join(STUDIO, "projects/sfia-studio/app");

const RUN = process.env.SFIA_OPERATOR_RUN || "run";
const PORT = Number(process.env.SFIA_OPERATOR_PORT || 3035);
const DB =
  process.env.SFIA_OPERATOR_DB ||
  path.join(CAMP, "runs", RUN, "qa-product.sqlite");
const LOG = path.join(CAMP, "runs", RUN, "next.log");
const PID = path.join(CAMP, "runs", RUN, "next.pid");
const IDENTITY = path.join(CAMP, "runs", RUN, "server-identity.json");

function waitPort(host, port, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const socket = net.connect({ host, port });
      socket.once("connect", () => {
        socket.end();
        resolve(true);
      });
      socket.once("error", () => {
        socket.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`timeout waiting for ${host}:${port}`));
          return;
        }
        setTimeout(tryOnce, 400);
      });
    };
    tryOnce();
  });
}

fs.mkdirSync(path.dirname(DB), { recursive: true });
if (fs.existsSync(DB)) {
  console.error("STOP — FRESH DB ALREADY EXISTS: " + DB);
  process.exit(2);
}

const childEnv = { ...process.env };
delete childEnv.SFIA_STUDIO_CURSOR_REAL;
delete childEnv.OPS1_CURSOR_REAL;
delete childEnv.OPS1_ALLOW_LIVE_SMOKE;
delete childEnv.OPENAI_API_KEY;
delete childEnv.OPENAI_MODEL;

Object.assign(childEnv, {
  NODE_ENV: "development",
  OPS1_CONVERSATION_PROVIDER: "fake",
  D1_INTAKE_PROVIDER: "fake",
  OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
  SFIA_STUDIO_E2E_QA_CONTROL: "1",
  SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
  SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES: "2",
  SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY: "1",
  SFIA_V2_RUNTIME_ALLOW_RESET: "1",
  SFIA_STUDIO_PRODUCT_DB_PATH: path.resolve(DB),
  OPENAI_API_KEY: "sk-e2e-fake-not-a-real-key",
  OPENAI_MODEL: "fake-e2e-model",
});

if (
  childEnv.SFIA_STUDIO_CURSOR_REAL === "1" ||
  childEnv.OPS1_CURSOR_REAL === "1"
) {
  console.error("FAIL — ZERO REAL CONTRACT VIOLATED");
  process.exit(2);
}

const logFd = fs.openSync(LOG, "w");
const child = spawn(
  "npm",
  ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(PORT)],
  {
    cwd: APP,
    env: childEnv,
    stdio: ["ignore", logFd, logFd],
    detached: true,
  },
);
fs.writeFileSync(PID, String(child.pid) + "\n");
child.unref();

waitPort("127.0.0.1", PORT, 180000)
  .then(() => {
    const identity = {
      run: RUN,
      pid: child.pid,
      port: PORT,
      baseUrl: "http://127.0.0.1:" + PORT,
      isolatedProductDb: path.resolve(DB),
      SFIA_STUDIO_CURSOR_REAL: null,
      OPS1_CURSOR_REAL: null,
      OPS1_CONVERSATION_PROVIDER: "fake",
      SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
      OPENAI_LIVE: 0,
      CURSOR_REAL: 0,
      banner: "DETERMINISTIC / TEST BOUNDARY — ZERO REAL",
    };
    fs.writeFileSync(IDENTITY, JSON.stringify(identity, null, 2) + "\n");
    console.log("NEXT_READY=" + identity.baseUrl);
    console.log("DB=" + identity.isolatedProductDb);
    console.log("PID=" + child.pid);
    process.exit(0);
  })
  .catch((err) => {
    console.error(String(err));
    process.exit(1);
  });

```

### Contenu COMPLET — run-three.cjs

```javascript
"use strict";

/**
 * TEMPORARY WITH EXIT — orchestrate 3 fresh deterministic operator runs.
 */

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const net = require("node:net");

const CAMP = path.resolve(__dirname, "..");
const OP = __dirname;

function portFree(port) {
  return new Promise((resolve) => {
    const s = net.connect({ host: "127.0.0.1", port }, () => {
      s.end();
      resolve(false);
    });
    s.on("error", () => resolve(true));
  });
}

async function pickPort(start) {
  for (let p = start; p < start + 20; p++) {
    if (await portFree(p)) return p;
  }
  throw new Error("no free port");
}

function stopNext(runDir) {
  const pidFile = path.join(runDir, "next.pid");
  if (!fs.existsSync(pidFile)) return;
  const pid = Number(fs.readFileSync(pidFile, "utf8").trim());
  if (!pid) return;
  try {
    process.kill(pid, "SIGTERM");
  } catch {
    /* ignore */
  }
  spawnSync("sleep", ["1"]);
  try {
    process.kill(pid, 0);
    process.kill(-pid, "SIGTERM");
  } catch {
    /* dead */
  }
  // also clear listeners on identity port if any
  const idPath = path.join(runDir, "server-identity.json");
  if (fs.existsSync(idPath)) {
    const id = JSON.parse(fs.readFileSync(idPath, "utf8"));
    const out = spawnSync("lsof", ["-nP", `-iTCP:${id.port}`, "-sTCP:LISTEN", "-t"], {
      encoding: "utf8",
    });
    const pids = (out.stdout || "").trim().split(/\s+/).filter(Boolean);
    for (const p of pids) {
      try {
        process.kill(Number(p), "SIGTERM");
      } catch {
        /* ignore */
      }
    }
  }
}

async function main() {
  const summary = [];
  let basePort = 3035;
  for (let i = 1; i <= 3; i++) {
    const run = `run${i}`;
    const runDir = path.join(CAMP, "runs", run);
    fs.mkdirSync(runDir, { recursive: true });
    stopNext(runDir);
    const port = await pickPort(basePort);
    basePort = port + 1;
    const db = path.join(runDir, "qa-product.sqlite");
    if (fs.existsSync(db)) fs.unlinkSync(db);

    console.log("\n==== START", run, "port", port, "====");
    const start = spawnSync(
      "node",
      [path.join(OP, "start-next-det.cjs")],
      {
        env: {
          ...process.env,
          SFIA_OPERATOR_RUN: run,
          SFIA_OPERATOR_PORT: String(port),
          SFIA_OPERATOR_DB: db,
        },
        encoding: "utf8",
      },
    );
    fs.writeFileSync(
      path.join(runDir, "start.stdout.txt"),
      (start.stdout || "") + (start.stderr || ""),
    );
    if (start.status !== 0) {
      summary.push({ run, ok: false, stage: "start-next", status: start.status });
      console.error(start.stdout, start.stderr);
      break;
    }

    const op = spawnSync("node", [path.join(OP, "run-det-operator.cjs")], {
      env: { ...process.env, SFIA_OPERATOR_RUN: run },
      encoding: "utf8",
      timeout: 300000,
    });
    fs.writeFileSync(
      path.join(runDir, "operator.stdout.txt"),
      (op.stdout || "") + "\n" + (op.stderr || ""),
    );
    let verdict = { ok: false };
    try {
      verdict = JSON.parse(fs.readFileSync(path.join(runDir, "verdict.json"), "utf8"));
    } catch {
      verdict = { ok: false, code: "NO_VERDICT", status: op.status };
    }
    summary.push({
      run,
      ok: Boolean(verdict.ok),
      projectId: verdict.projectId || null,
      attemptId: verdict.attemptId || null,
      evidenceId: verdict.evidenceId || null,
      linkTag: verdict.linkProof?.tagName || null,
      code: verdict.code || null,
    });
    console.log("==== END", run, "ok=", verdict.ok, "====");
    stopNext(runDir);
    if (!verdict.ok) break;
  }

  const allOk = summary.length === 3 && summary.every((s) => s.ok);
  const out = { allOk, summary };
  fs.writeFileSync(
    path.join(CAMP, "logs/three-runs-summary.json"),
    JSON.stringify(out, null, 2) + "\n",
  );
  console.log(JSON.stringify(out, null, 2));
  process.exit(allOk ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

### Contenu COMPLET — helper-unit-test.cjs

```javascript
"use strict";

/**
 * TEMPORARY WITH EXIT — local helper unit checks (no product mutation).
 * Uses Playwright against a static fixture HTML page.
 */

const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const {
  clickWhenInteractive,
  clickWhenEnabledBroken,
} = require("./clickWhenInteractive.cjs");

const CAMP = path.resolve(__dirname, "..");
const STUDIO = path.resolve(CAMP, "../..");
const APP_DIR = path.join(STUDIO, "projects/sfia-studio/app");
const OUT = path.join(CAMP, "logs/helper-unit-test.json");

const FIXTURE = `<!doctype html><html><body>
<button data-testid="btn-enabled">Go</button>
<button data-testid="btn-disabled" disabled>No</button>
<a data-testid="link-ok" href="#ok">Open</a>
<a data-testid="link-aria" href="#x" aria-disabled="true">Blocked</a>
</body></html>`;

async function main() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(FIXTURE);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  const { chromium } = require(path.join(APP_DIR, "node_modules/playwright"));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/`);

  const results = [];
  const check = async (name, fn) => {
    try {
      await fn();
      results.push({ name, ok: true });
    } catch (e) {
      results.push({ name, ok: false, error: String(e.message || e) });
    }
  };

  await check("1_enabled_button_click_ok", async () => {
    await clickWhenInteractive(page, "btn-enabled", 5000);
  });
  await check("2_disabled_button_controlled_timeout", async () => {
    let timedOut = false;
    try {
      await clickWhenInteractive(page, "btn-disabled", 1500);
    } catch {
      timedOut = true;
    }
    if (!timedOut) throw new Error("expected timeout on disabled button");
  });
  await check("3_anchor_link_click_ok", async () => {
    await clickWhenInteractive(page, "link-ok", 5000);
  });
  await check("4_aria_disabled_anchor_no_click", async () => {
    let timedOut = false;
    try {
      await clickWhenInteractive(page, "link-aria", 1500);
    } catch {
      timedOut = true;
    }
    if (!timedOut) throw new Error("expected timeout on aria-disabled anchor");
  });
  await check("5_absent_timeout", async () => {
    let timedOut = false;
    try {
      await clickWhenInteractive(page, "missing", 1500);
    } catch {
      timedOut = true;
    }
    if (!timedOut) throw new Error("expected timeout on absent");
  });
  await check("6_broken_helper_fails_on_anchor", async () => {
    let timedOut = false;
    try {
      await clickWhenEnabledBroken(page, "link-ok", 1500);
    } catch {
      timedOut = true;
    }
    if (!timedOut) throw new Error("broken helper should fail on anchor");
  });

  await browser.close();
  server.close();
  const ok = results.every((r) => r.ok);
  fs.writeFileSync(OUT, JSON.stringify({ ok, results }, null, 2) + "\n");
  console.log(JSON.stringify({ ok, results }, null, 2));
  process.exit(ok ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

---

## Helper unit tests (temporaires)

6/6 PASS (`logs/helper-unit-test.json`) :

1. enabled button OK
2. disabled button timeout
3. anchor OK
4. aria-disabled anchor timeout
5. absent timeout
6. broken helper fails on anchor

---

## Link actionability proof (produit)

Run1 avant click :

- testId `open-project-workspace`
- tagName `A`
- runtimeClass `HTMLAnchorElement`
- href `/studio/projects/prj%3A5e2f9104-392e-4416-8c64-450daecc7eab`
- text `Ouvrir le projet`

Après click : workspace `project-principal` visible ; projectId `prj:5e2f9104-…`.

Broken helper rejoué sur le même Link : **timeout** (fidélité diagnostic).

Identique sur run2 / run3 (tagName `A` chaque fois).

---

## Button regression proof

Même driver, contrôles BUTTON actionnés sans force :

`create-project-submit` · `project-assistant-send` · `f2-decide-GO` · `f3-prepare-button` · `f3-confirm-execute-button`

Tous `HTMLButtonElement` enabled sur les 3 runs.

---

## Deterministic environment

Par run :

- `SFIA_STUDIO_CURSOR_REAL` unset
- `OPS1_CONVERSATION_PROVIDER=fake`
- `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1`
- `SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES=2`
- `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`
- fresh isolated sqlite
- ports 3035 / 3036 / 3037

ZERO REAL counters : Cursor launches 0 · OpenAI LIVE 0 · REAL Attempts 0 · REAL worktrees 0.

---

## Product path parity

UI produit réelle : New Project → Link open → Nora fake gated → GO → prepare → confirm → running → refresh same Attempt → terminal DET → Evidence/RB → reload.

Fake uniquement aux frontières OpenAI + Cursor subprocess. Pas de seed SQL / route parallèle / fake UI.

---

## Run #1 / #2 / #3

| Run | Project | Attempt | Evidence | Link tag | ok |
|-----|---------|---------|----------|----------|----|
| 1 | `prj:5e2f9104-392e-4416-8c64-450daecc7eab` | `xat:…99a68c89…` | `ev:m4-bounded-ro:…99a68c89…` | A | PASS |
| 2 | `prj:2fa9e5c2-5649-4f9c-861e-9e3c6c63315a` | `xat:…45530fc1…` | `ev:m4-bounded-ro:…45530fc1…` | A | PASS |
| 3 | `prj:432a0524-888b-4276-8055-34d608098c01` | `xat:…7e2c9010…` | `ev:m4-bounded-ro:…7e2c9010…` | A | PASS |

3/3 fresh consecutive PASS. Screenshots sous `runs/runN/screenshots/`.

Aucun Project = `prj:dd72f2bf-…` (REAL consommé gelé).

---

## Historical REAL integrity

2 worktrees historiques présents · HEAD `0d334785…` · porcelain 0 · count=2 · aucun cleanup.

---

## Fake / Real qualification

Objet : UI operator fidelity.

Niveau : **DETERMINISTIC PROVEN FOR CAMPAIGN OPERATOR PATH**.

Hors scope : REAL BOUNDARY PROVEN · END-TO-END REAL PROVEN.

---

## Réserves

| ID | Statut |
|----|--------|
| R-RECOVERY / V3-F10 | OPEN |
| R-TRACEABILITY | OPEN |
| R-BROWSER-TIMEOUT | OPEN |
| G-UX-09 | OPEN |
| Operator TEMPORARY WITH EXIT | OPEN jusqu'à REAL happy path ou tooling QA canonique |

---

## Anti-claims

Même en PASS : pas REAL BOUNDARY / END-TO-END REAL / READY FOR REAL auto / GO REAL / PRE-M6 COMPLETE / M6 / UAT / PRODUCTION / runtime v3 ADOPTED / operator versioned-canonical.

---

## Exact next gate

```
MORRIS —
ACCEPT / REJECT
CYCLE 8 DELIVERY AMEND
REAL CAMPAIGN UI OPERATOR STABILIZATION

AND

GO / NO-GO
ONE NEW BOUNDED REAL PRODUCT LOOP RE-PROOF
READ-ONLY
FRESH ISOLATED DB
FRESH PROJECT
FRESH ATTEMPT
```

Ce Cycle 8 **ne consomme PAS** le futur GO REAL.

---

## Instruction ChatGPT

Lire obligatoirement le handoff distant canonique
`origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`
avant validation.
