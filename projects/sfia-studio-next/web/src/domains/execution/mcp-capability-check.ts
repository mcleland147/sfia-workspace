/**
 * E12 / Cycle 8 A3 — conditional MCP capability check when mcpRequired is set.
 * Studio does NOT administer MCP. UNKNOWN / missing auth / missing invoke → fail-closed
 * for any dispatch that requires MCP. SCRIPTED may record simulation explicitly — never OK.
 */

export type McpCapabilityResult = {
  name: string;
  required: boolean;
  present: boolean;
  loadable: boolean;
  authenticated: boolean | null;
  invocable: boolean | null;
  status: "OK" | "MISSING" | "UNAVAILABLE" | "UNKNOWN" | "NOT_REQUIRED" | "SCRIPTED_SIMULATED";
  limits: string[];
};

export function checkRequiredMcpCapabilities(
  mcpRequired: string[],
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
  opts?: { scriptedSimulation?: boolean },
): McpCapabilityResult[] {
  if (!mcpRequired.length) {
    return [
      {
        name: "(none)",
        required: false,
        present: true,
        loadable: true,
        authenticated: null,
        invocable: null,
        status: "NOT_REQUIRED",
        limits: ["E12_NO_MCP_REQUIRED"],
      },
    ];
  }

  const declared =
    (env.SFIA_CURSOR_MCP_AVAILABLE ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const inventoryKnown = declared.length > 0 || env.SFIA_CURSOR_MCP_INVENTORY_PROVEN === "1";
  const authProven = env.SFIA_CURSOR_MCP_AUTH_PROVEN === "1";
  const invokeProven = env.SFIA_CURSOR_MCP_INVOKE_PROVEN === "1";

  return mcpRequired.map((name) => {
    const limits = ["E12_STUDIO_DOES_NOT_ADMIN_MCP", "MCP_REAL_GATED"];

    if (opts?.scriptedSimulation) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: null,
        invocable: null,
        status: "SCRIPTED_SIMULATED" as const,
        limits: [...limits, "SCRIPTED_MCP_NOT_REAL_CAPABILITY"],
      };
    }

    if (!inventoryKnown) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: null,
        invocable: null,
        status: "UNKNOWN" as const,
        limits: [...limits, "MCP_INVENTORY_UNPROVEN"],
      };
    }

    const present = declared.includes(name) || declared.includes("*");
    if (!present) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: false,
        invocable: false,
        status: "MISSING" as const,
        limits,
      };
    }

    // Declarative inventory alone is never OK for dispatch.
    if (!authProven || !invokeProven) {
      return {
        name,
        required: true,
        present: true,
        loadable: true,
        authenticated: authProven ? true : null,
        invocable: invokeProven ? true : null,
        status: "UNKNOWN" as const,
        limits: [
          ...limits,
          "INVENTORY_ONLY_NOT_OK",
          !authProven ? "MCP_AUTH_UNPROVEN" : "",
          !invokeProven ? "MCP_INVOKE_UNPROVEN" : "",
        ].filter(Boolean),
      };
    }

    return {
      name,
      required: true,
      present: true,
      loadable: true,
      authenticated: true,
      invocable: true,
      status: "OK" as const,
      limits: [...limits, "AUTH_AND_INVOKE_FLAGS_SET — still not MCP REAL mutative proof"],
    };
  });
}

/**
 * Fail-closed for required MCP: UNKNOWN / MISSING / UNAVAILABLE block.
 * SCRIPTED_SIMULATED allowed only when caller opts into scripted path.
 * NOT_REQUIRED always ok.
 */
export function assertMcpReadyForDispatch(
  results: McpCapabilityResult[],
  opts?: { allowScriptedSimulation?: boolean },
): { ok: boolean; reason?: string } {
  for (const r of results) {
    if (!r.required || r.status === "NOT_REQUIRED") continue;
    if (r.status === "SCRIPTED_SIMULATED") {
      if (opts?.allowScriptedSimulation) continue;
      return { ok: false, reason: `MCP_SCRIPTED_NOT_ALLOWED:${r.name}` };
    }
    if (r.status === "OK") continue;
    return {
      ok: false,
      reason: `MCP_REQUIRED_${r.status}:${r.name}`,
    };
  }
  return { ok: true };
}
