"use server";

import { revalidatePath } from "next/cache";
import { createReserve, updateReserveStatus } from "./queries";
import { isReserveStatus } from "./types";
import type { ActionResult } from "@/lib/chantiers/actions";

export async function createReserveAction(
  chantierId: string,
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const description = String(formData.get("description") ?? "").trim();

  if (!description) {
    return { error: "La description de la réserve est obligatoire." };
  }

  await createReserve(chantierId, description);
  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}

export async function updateReserveStatusFormAction(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const chantierId = String(formData.get("chantierId") ?? "");
  const reserveId = String(formData.get("reserveId") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!chantierId || !reserveId) {
    return { error: "Réserve introuvable." };
  }

  if (!isReserveStatus(status)) {
    return { error: "Statut réserve invalide." };
  }

  const updated = await updateReserveStatus(reserveId, status);

  if (!updated) {
    return { error: "Réserve introuvable." };
  }

  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}
