import type { Confirmation } from "../domain/types";

export interface ConfirmationRepositoryPort {
  findById(confirmationId: string): Promise<Confirmation | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<Confirmation | null>;
  exists(confirmationId: string): Promise<boolean>;
  save(confirmation: Confirmation): Promise<void>;
}
