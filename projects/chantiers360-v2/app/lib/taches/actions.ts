"use server";

import { revalidatePath } from "next/cache";
import { createTache, updateTacheStatus } from "./queries";
import { isTacheStatus } from "./types";
import type { ActionResult } from "@/lib/chantiers/actions";

export async function createTacheAction(
  chantierId: string,
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const label = String(formData.get("label") ?? "").trim();

  if (!label) {
    return { error: "Le libellé de la tâche est obligatoire." };
  }

  await createTache(chantierId, label);
  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}

export async function updateTacheStatusFormAction(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const chantierId = String(formData.get("chantierId") ?? "");
  const tacheId = String(formData.get("tacheId") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!chantierId || !tacheId) {
    return { error: "Tâche introuvable." };
  }

  if (!isTacheStatus(status)) {
    return { error: "Statut tâche invalide." };
  }

  const updated = await updateTacheStatus(tacheId, status);

  if (!updated) {
    return { error: "Tâche introuvable." };
  }

  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}
