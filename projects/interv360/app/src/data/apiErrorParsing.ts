import { RequestsRepositoryError } from "./requestsRepository.types";

export type ApiErrorPayload = {
  error?: {
    code?: unknown;
    message?: unknown;
  };
};

export function getApiErrorDetails(
  payload: unknown,
  fallbackMessage: string,
  fallbackCode: string,
): { message: string; code: string } {
  const apiError = payload as ApiErrorPayload;
  const code =
    typeof apiError?.error?.code === "string" &&
    apiError.error.code.trim().length > 0
      ? apiError.error.code.trim()
      : fallbackCode;
  const message =
    typeof apiError?.error?.message === "string" &&
    apiError.error.message.trim().length > 0
      ? apiError.error.message.trim()
      : typeof apiError?.error?.code === "string" &&
          apiError.error.code.trim().length > 0
        ? apiError.error.code.trim()
        : fallbackMessage;

  return { message, code };
}

export async function readApiErrorFromResponse(
  response: Response,
  fallbackMessage: string,
  fallbackCode: string,
): Promise<RequestsRepositoryError> {
  try {
    const body = await response.json();
    const { message, code } = getApiErrorDetails(
      body,
      fallbackMessage,
      fallbackCode,
    );
    return new RequestsRepositoryError(message, code);
  } catch (error) {
    if (error instanceof RequestsRepositoryError) {
      return error;
    }

    return new RequestsRepositoryError(fallbackMessage, fallbackCode);
  }
}
