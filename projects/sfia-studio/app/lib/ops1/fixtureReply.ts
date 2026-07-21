/** Deterministic local fixture reply — never presented as live GPT. */
export function buildFixtureAssistantReply(userContent: string): string {
  const preview =
    userContent.length > 120 ? `${userContent.slice(0, 117)}…` : userContent;
  return [
    "[FIXTURE / NON LIVE] Réponse locale déterministe OPS1 I2.",
    "Aucun fournisseur GPT n’a été appelé.",
    `Echo borné : « ${preview} »`,
  ].join(" ");
}
