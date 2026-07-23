/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

export { GitLocalReadAdapter } from "@/lib/platform/repository/gitLocalReadAdapter";
