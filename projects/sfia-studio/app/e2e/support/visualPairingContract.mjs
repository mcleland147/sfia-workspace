/**
 * ESM twin of visualPairingContract.ts for capture/compare .mjs harnesses.
 */

export const HARNESS_PAIRING_MISMATCH = "HARNESS_PAIRING_MISMATCH";

export const GLOBAL_FORBIDDEN_MARKERS = [
  "next-dev-issues-badge",
  "next-dev-overlay",
  "runtime-error-overlay",
  "studio-projects-loading",
  "project-workspace-loading",
  "sqlite-unavailable",
];

export function formatPairingMismatch(reason) {
  return `${HARNESS_PAIRING_MISMATCH}\n${reason}`;
}

function routeMatches(expected, actualUrl) {
  try {
    const u = new URL(actualUrl, "http://localhost");
    const path = u.pathname;
    if (expected.includes(":projectId") || expected.includes("<id>")) {
      const pattern = expected
        .replace(/:projectId|<id>/g, "[^/]+")
        .replace(/\//g, "\\/");
      return new RegExp(`^${pattern}/?$`).test(path);
    }
    if (expected.endsWith("*")) {
      return path.startsWith(expected.slice(0, -1));
    }
    return path === expected || path === `${expected}/`;
  } catch {
    return false;
  }
}

function normalizeFact(value) {
  if (value == null) return "";
  return String(value).trim();
}

function contentFactsMatch(expected, actual) {
  const keys = Object.keys(expected);
  for (const key of keys) {
    const exp = expected[key];
    if (exp === undefined) continue;
    const act = actual?.[key];
    if (normalizeFact(exp) !== normalizeFact(act)) {
      return {
        ok: false,
        reason: `contentMismatch field=${key}\nexpected=${normalizeFact(exp)}\nactual=${normalizeFact(act) || "(none)"}`,
      };
    }
  }
  return { ok: true };
}

export function evaluateVisualPair(record, obs) {
  const alignment = {
    identityAligned: false,
    contentAligned: false,
    semanticStateAligned: false,
    activeViewAligned: false,
    viewportAligned: false,
  };

  const fail = (reason) => ({
    ok: false,
    pairing: "FAIL",
    code: HARNESS_PAIRING_MISMATCH,
    id: record.id,
    reason: formatPairingMismatch(reason),
    alignment,
  });

  const enforceIdentityAligned =
    record.finalFidelity === true ||
    Object.prototype.hasOwnProperty.call(record, "identityAligned");
  if (enforceIdentityAligned && record.identityAligned !== true) {
    return fail(
      `identityAligned=${String(record.identityAligned)}\nexpectedIdentityAligned=true\nfixtureId=${record.runtime.fixtureId}`,
    );
  }
  alignment.identityAligned =
    record.identityAligned === true || !enforceIdentityAligned;

  const enforceContentAligned =
    record.finalFidelity === true ||
    Object.prototype.hasOwnProperty.call(record, "contentAligned");
  if (enforceContentAligned && record.contentAligned !== true) {
    return fail(
      `contentAligned=${String(record.contentAligned)}\nexpectedContentAligned=true\nfixtureId=${record.runtime.fixtureId}`,
    );
  }

  if (
    obs.viewport.width !== record.figma.viewport.width ||
    obs.viewport.height !== record.figma.viewport.height
  ) {
    return fail(
      `expectedViewport=${record.figma.viewport.width}x${record.figma.viewport.height}\nactualViewport=${obs.viewport.width}x${obs.viewport.height}`,
    );
  }
  alignment.viewportAligned = true;

  if (!routeMatches(record.runtime.route, obs.url)) {
    return fail(`expectedRoute=${record.runtime.route}\nactualUrl=${obs.url}`);
  }

  if (
    record.runtime.expectedProjectName != null &&
    record.runtime.expectedProjectName !== ""
  ) {
    const actual = (obs.projectName ?? "").trim();
    if (actual !== record.runtime.expectedProjectName) {
      return fail(
        `expectedProject=${record.runtime.expectedProjectName}\nactualProject=${actual || "(none)"}`,
      );
    }
  }

  if (record.runtime.projectId) {
    const actualId = obs.projectId ?? "";
    if (actualId && actualId !== record.runtime.projectId) {
      return fail(
        `expectedProjectId=${record.runtime.projectId}\nactualProjectId=${actualId}`,
      );
    }
  }

  if (record.runtime.view) {
    const actualView = obs.activeView ?? "";
    if (actualView !== record.runtime.view) {
      return fail(
        `expectedView=${record.runtime.view}\nactualView=${actualView || "(none)"}`,
      );
    }
    alignment.activeViewAligned = true;
  } else {
    alignment.activeViewAligned = true;
  }

  const semanticMarkers = record.state.expectedVisible.filter(
    (m) =>
      m.startsWith("data-collect-phase=") || m.startsWith("data-active-view="),
  );
  const anchorMarkers = record.state.expectedVisible.filter(
    (m) =>
      !m.startsWith("data-collect-phase=") &&
      !m.startsWith("data-active-view="),
  );

  for (const marker of semanticMarkers) {
    if (marker.startsWith("data-collect-phase=")) {
      const phase = marker.slice("data-collect-phase=".length);
      if (obs.collectPhase !== phase) {
        return fail(
          `expectedState=${record.state.semanticState}\nexpectedCollectPhase=${phase}\nactualCollectPhase=${obs.collectPhase ?? "(none)"}`,
        );
      }
      continue;
    }
    if (marker.startsWith("data-active-view=")) {
      const view = marker.slice("data-active-view=".length);
      if (obs.activeView !== view) {
        return fail(
          `expectedSurface=${view}\nactualSurface=${obs.activeView ?? "(none)"}`,
        );
      }
    }
  }

  for (const marker of anchorMarkers) {
    if (!obs.present.includes(marker)) {
      return fail(
        `expectedVisible=${marker}\nactualPresent=[${obs.present.join(",")}]`,
      );
    }
  }

  const absentSet = new Set([
    ...GLOBAL_FORBIDDEN_MARKERS,
    ...record.state.expectedAbsent,
  ]);
  for (const marker of absentSet) {
    if (obs.present.includes(marker) || obs.forbiddenPresent.includes(marker)) {
      return fail(`forbiddenVisible=${marker}`);
    }
  }

  for (const marker of obs.forbiddenPresent) {
    return fail(`forbiddenVisible=${marker}`);
  }

  alignment.semanticStateAligned = true;

  if (enforceContentAligned) {
    if (!record.content || Object.keys(record.content).length === 0) {
      return fail(
        `contentAligned=true but content facts missing\nfixtureId=${record.runtime.fixtureId}`,
      );
    }
    const matched = contentFactsMatch(record.content, obs.content);
    if (!matched.ok) {
      return fail(matched.reason);
    }
    alignment.contentAligned = true;
  } else {
    alignment.contentAligned = true;
  }

  if (
    !alignment.identityAligned ||
    !alignment.contentAligned ||
    !alignment.semanticStateAligned ||
    !alignment.activeViewAligned ||
    !alignment.viewportAligned
  ) {
    return fail(`alignmentGateFailed ${JSON.stringify(alignment)}`);
  }

  return { ok: true, pairing: "PASS", id: record.id, alignment };
}

export function mayGenerateDiff(pairing) {
  return pairing === "PASS";
}

export function findPairById(records, id) {
  return records.find((r) => r.id === id);
}
