import {
  copilotRecommendations,
  pendingMorrisDecision,
} from "@/fixtures";
import type { Recommendation } from "@/lib/domain/recommendation";
import type { MorrisDecision } from "@/lib/domain/morris-decision";

export async function getRecommendations(): Promise<Recommendation[]> {
  return copilotRecommendations;
}

export async function getMorrisDecision(): Promise<MorrisDecision> {
  return pendingMorrisDecision;
}
