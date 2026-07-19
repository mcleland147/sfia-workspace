import { gates } from "@/fixtures/gates";
import type { Gate } from "@/lib/domain/gate";

export async function getGates(): Promise<Gate[]> {
  return gates;
}
