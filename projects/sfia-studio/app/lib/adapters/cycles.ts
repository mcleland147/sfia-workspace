import { cycles } from "@/fixtures/cycles";
import type { Cycle } from "@/lib/domain/cycle";

export async function getCycles(): Promise<Cycle[]> {
  return cycles;
}

export async function getActiveCycle(): Promise<Cycle> {
  return cycles[0];
}
