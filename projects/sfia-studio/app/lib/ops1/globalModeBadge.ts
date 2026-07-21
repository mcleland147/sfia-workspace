import type { ConversationMode, ProviderPresentation } from "./types";

export type GlobalModeBadgeTone = "orange" | "purpleFlush" | "green";

export interface GlobalModeBadge {
  label: string;
  tone: GlobalModeBadgeTone;
  presentation: ProviderPresentation;
}

export interface GlobalModeContext {
  hasSession: boolean;
  createMode: ConversationMode;
  /** Authoritative when a session is active. */
  presentation: ProviderPresentation;
  testProvider: boolean;
  liveAvailable: boolean;
}

/**
 * Resolve which presentation drives the global header badge.
 * Reuses OPS1 ProviderPresentation — no parallel provider logic.
 */
export function resolveGlobalModePresentation(
  ctx: GlobalModeContext,
): ProviderPresentation {
  if (ctx.hasSession) {
    return ctx.presentation;
  }
  if (ctx.createMode === "fixture") {
    return "fixture";
  }
  // Live selected before session creation
  if (ctx.testProvider) {
    return "test_provider";
  }
  if (ctx.liveAvailable) {
    return "openai_live";
  }
  return "fixture";
}

export function mapGlobalModeBadgeLabel(
  presentation: ProviderPresentation,
): string {
  switch (presentation) {
    case "fixture":
      return "MODE FIXTURE / NON LIVE";
    case "test_provider":
      return "TEST PROVIDER / NON LIVE";
    case "openai_live":
      return "MODE GPT LIVE";
  }
}

export function mapGlobalModeBadgeTone(
  presentation: ProviderPresentation,
): GlobalModeBadgeTone {
  switch (presentation) {
    case "fixture":
      return "orange";
    case "test_provider":
      return "purpleFlush";
    case "openai_live":
      return "green";
  }
}

export function mapGlobalModeBadge(ctx: GlobalModeContext): GlobalModeBadge {
  const presentation = resolveGlobalModePresentation(ctx);
  return {
    presentation,
    label: mapGlobalModeBadgeLabel(presentation),
    tone: mapGlobalModeBadgeTone(presentation),
  };
}
