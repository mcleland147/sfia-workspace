"use client";

/**
 * Compatibility alias — experimental E05 renderer replaced by NoraComposition.
 * Keep export path stable for any residual imports; dual testids preserved.
 */

export {
  NoraComposition as NoraVisualComposition,
  NoraComposition,
  type NoraCompositionProps,
} from "@/components/figma/NoraComposition";
