/** Structured logs for D1-I1 SLI candidates (no contract SLO). */

export function logD1(
  event: string,
  fields: Record<string, string | number | boolean | undefined>,
): void {
  const payload = {
    event: `d1.${event}`,
    ts: new Date().toISOString(),
    ...fields,
  };
  console.info(JSON.stringify(payload));
}
