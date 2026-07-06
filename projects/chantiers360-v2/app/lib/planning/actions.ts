"use server";

import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/lib/chantiers/actions";
import { updateSimplePlanning } from "./queries";

export async function updateSimplePlanningAction(
  chantierId: string,
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const updated = await updateSimplePlanning(chantierId, {
    plannedStartDate: String(formData.get("plannedStartDate") ?? ""),
    plannedEndDate: String(formData.get("plannedEndDate") ?? ""),
    nextInterventionDate: String(formData.get("nextInterventionDate") ?? ""),
    upcomingMilestone: String(formData.get("upcomingMilestone") ?? ""),
    simplePlanningComment: String(formData.get("simplePlanningComment") ?? ""),
  });

  if (!updated) {
    return { error: "Chantier introuvable." };
  }

  revalidatePath("/");
  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}
