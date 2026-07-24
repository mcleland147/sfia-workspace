import type { Confirmation } from "../domain/types";
import type { ConfirmationRepositoryPort } from "../ports/confirmationRepository";
import type { MemoryDecisionStore } from "./memoryDecisionStore";

export class MemoryConfirmationRepository
  implements ConfirmationRepositoryPort
{
  constructor(private readonly store: MemoryDecisionStore) {}

  async findById(confirmationId: string): Promise<Confirmation | null> {
    const found = this.store.confirmations.get(confirmationId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<Confirmation | null> {
    const id = this.store.idempotencyIndex.get(idempotencyKey);
    if (!id) return null;
    return this.findById(id);
  }

  async exists(confirmationId: string): Promise<boolean> {
    return this.store.confirmations.has(confirmationId);
  }

  async save(confirmation: Confirmation): Promise<void> {
    if (this.store.failNextSave === "confirmation") {
      this.store.failNextSave = null;
      throw new Error("forced_confirmation_save_failure");
    }
    this.store.confirmations.set(
      confirmation.confirmationId,
      structuredClone(confirmation),
    );
    this.store.idempotencyIndex.set(
      confirmation.idempotencyKey,
      confirmation.confirmationId,
    );
  }
}
