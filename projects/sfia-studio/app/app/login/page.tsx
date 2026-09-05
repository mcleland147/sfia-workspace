import { LoginClient } from "./login-client";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;
  return (
    <LoginClient errorCode={params.error ?? null} fromPath={params.from ?? null} />
  );
}
