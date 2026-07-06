"use server";

import { revalidatePath } from "next/cache";
import { createCompteRendu } from "./queries";
import type { ActionResult } from "@/lib/chantiers/actions";

export async function createCompteRenduAction(
  chantierId: string,
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const contenu = String(formData.get("contenu") ?? "").trim();

  if (!contenu) {
    return { error: "Le contenu du compte rendu est obligatoire." };
  }

  await createCompteRendu(chantierId, contenu);
  revalidatePath(`/chantiers/${chantierId}`);

  return {};
}
