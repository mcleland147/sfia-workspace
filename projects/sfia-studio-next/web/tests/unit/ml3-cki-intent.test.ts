import { describe, expect, it } from "vitest";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";

describe("ML3 CKI intent — SEM-02 lexical retirement", () => {
  it("no CLEAR lexical pilotage qualification", () => {
    expect(qualifyPilotageIntent("ouvre le cycle cadrage").clarity).toBe("NONE");
    expect(qualifyPilotageIntent("OK").clarity).toBe("NONE");
    expect(qualifyPilotageIntent("retire la méthode").clarity).toBe("NONE");
  });
});
