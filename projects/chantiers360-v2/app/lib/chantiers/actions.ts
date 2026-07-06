"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createChantier, updateChantierStatus } from "./queries";
import { isChantierStatus } from "./types";

export type ActionResult = {
  error?: string;
};

export async function createChantierAction(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const title = String(formData.get("title") ?? "").trim();
  const client = String(formData.get("client") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();

  if (!title || !client || !address) {
    return { error: "Libellé, client et adresse sont obligatoires." };
  }

  const chantier = await createChantier({
    title,
    client,
    address,
    plannedStartDate: String(formData.get("plannedStartDate") ?? "") || undefined,
    plannedEndDate: String(formData.get("plannedEndDate") ?? "") || undefined,
    nextInterventionDate:
      String(formData.get("nextInterventionDate") ?? "") || undefined,
    simplePlanningComment:
      String(formData.get("simplePlanningComment") ?? "") || undefined,
  });

  revalidatePath("/");
  redirect(`/chantiers/${chantier.id}`);
}

export async function updateChantierStatusAction(
  chantierId: string,
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const status = String(formData.get("status") ?? "");

  if (!isChantierStatus(status)) {
    return { error: "Statut invalide." };
  }

  const updated = await updateChantierStatus(chantierId, status);

  if (!updated) {
    return { error: "Chantier introuvable." };
  }

  revalidatePath("/");
  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}
