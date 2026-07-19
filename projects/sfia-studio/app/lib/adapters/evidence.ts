import { evidenceItems } from "@/fixtures/evidence";
import type { Evidence } from "@/lib/domain/evidence";

export async function getEvidence(): Promise<Evidence[]> {
  return evidenceItems;
}
