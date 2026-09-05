/**
 * TEST-ONLY helpers — build real better-auth@1.7.2 account_data cookies.
 * Shape matches getAccountCookie return (includes userId). Never invents
 * accountInfo public fields as the binding source.
 */

import { getCookies } from "better-auth/cookies";
import { symmetricEncodeJWT } from "better-auth/crypto";
import type { SfiaAuth } from "@/lib/auth/auth";

export type FakeAccountCookieInput = {
  auth: SfiaAuth;
  userId: string;
  accountId: string;
  providerId?: string;
  accountRowId?: string;
  issuer?: string;
  /** Omit userId from payload to simulate malformed cookie. */
  omitUserId?: boolean;
};

export async function encodeAccountDataCookieValue(
  input: FakeAccountCookieInput,
): Promise<string> {
  const ctx = await input.auth.$context;
  const payload: Record<string, unknown> = {
    id: input.accountRowId ?? `acc-${input.accountId}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    providerId: input.providerId ?? "github",
    issuer: input.issuer ?? "local:oauth:github",
    accountId: input.accountId,
  };
  if (!input.omitUserId) {
    payload.userId = input.userId;
  }
  return symmetricEncodeJWT(
    payload,
    ctx.secretConfig,
    "better-auth-account",
    60 * 60,
  );
}

export async function headersWithAccountCookie(
  input: FakeAccountCookieInput,
  extraHeaders?: HeadersInit,
): Promise<Headers> {
  const names = getCookies(input.auth.options);
  const token = await encodeAccountDataCookieValue(input);
  const headers = new Headers(extraHeaders);
  const existing = headers.get("cookie");
  const accountCookie = `${names.accountData.name}=${token}`;
  headers.set(
    "cookie",
    existing ? `${existing}; ${accountCookie}` : accountCookie,
  );
  return headers;
}
