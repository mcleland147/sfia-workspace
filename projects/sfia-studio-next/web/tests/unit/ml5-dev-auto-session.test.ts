import { describe, expect, it } from "vitest";
import {
  isApprovedLoopbackAuthority,
  isDevAutoSessionAllowed,
  isDevListenConfined,
} from "@/domains/identity/session";

describe("ML5 DEV auto-session gate (DÉC-ML5-DEV / CP-02)", () => {
  it("isApprovedLoopbackAuthority rejects forged hosts", () => {
    expect(isApprovedLoopbackAuthority("127.0.0.1:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.com")).toBe(false);
  });

  it("CP-02: listen confinement requires STUDIO_DEV_BIND loopback", () => {
    const prev = process.env.STUDIO_DEV_BIND;
    try {
      process.env.STUDIO_DEV_BIND = "127.0.0.1";
      expect(isDevListenConfined()).toBe(true);
      process.env.STUDIO_DEV_BIND = "0.0.0.0";
      expect(isDevListenConfined()).toBe(false);
      delete process.env.STUDIO_DEV_BIND;
      expect(isDevListenConfined()).toBe(false);
    } finally {
      process.env.STUDIO_DEV_BIND = prev;
    }
  });

  it("auto-session requires DEV lane + flags + bind (probe without DB)", () => {
    const gate = { host: "127.0.0.1:3100" };
    const prev = {
      auto: process.env.STUDIO_DEV_AUTO_SESSION,
      login: process.env.STUDIO_DEV_TEST_LOGIN,
      lane: process.env.STUDIO_LANE,
      bind: process.env.STUDIO_DEV_BIND,
    };
    try {
      process.env.STUDIO_DEV_AUTO_SESSION = "1";
      process.env.STUDIO_DEV_TEST_LOGIN = "1";
      process.env.STUDIO_LANE = "DEV";
      process.env.STUDIO_DEV_BIND = "127.0.0.1";
      expect(isDevAutoSessionAllowed(gate)).toBe(true);

      process.env.STUDIO_DEV_BIND = "0.0.0.0";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      process.env.STUDIO_DEV_BIND = "127.0.0.1";
      process.env.STUDIO_LANE = "RECETTE";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      process.env.STUDIO_LANE = "STABLE";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      process.env.STUDIO_LANE = "DEV";
      process.env.STUDIO_DEV_AUTO_SESSION = "0";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      // Forged Host still denied even with bind ok
      process.env.STUDIO_DEV_AUTO_SESSION = "1";
      expect(isDevAutoSessionAllowed({ host: "evil.example.com" })).toBe(false);
      expect(
        isDevAutoSessionAllowed({
          host: "127.0.0.1:3100",
          forwardedFor: "8.8.8.8",
        }),
      ).toBe(false);
    } finally {
      process.env.STUDIO_DEV_AUTO_SESSION = prev.auto;
      process.env.STUDIO_DEV_TEST_LOGIN = prev.login;
      process.env.STUDIO_LANE = prev.lane;
      process.env.STUDIO_DEV_BIND = prev.bind;
    }
  });
});
