import type { Response } from "express";
import { StoreError } from "../domain/types.js";

export const API_ERROR_STATUS_BY_CODE: Record<string, number> = {
  REQUEST_NOT_FOUND: 404,
  USER_NOT_FOUND: 404,
  ROUTE_NOT_FOUND: 404,
  INVALID_TRANSITION_ACTION: 400,
  INVALID_JSON_BODY: 400,
  INVALID_ACTOR_USER: 400,
  TRANSITION_NOT_ALLOWED: 409,
  DEMO_MODE_REQUIRED: 403,
  INTERNAL_ERROR: 500,
};

export function sendApiError(
  res: Response,
  status: number,
  code: string,
  message: string,
): void {
  res.status(status).json({
    error: {
      code,
      message,
    },
  });
}

export function sendStoreError(res: Response, error: StoreError): void {
  const status = API_ERROR_STATUS_BY_CODE[error.code] ?? 500;
  sendApiError(res, status, error.code, error.message);
}
