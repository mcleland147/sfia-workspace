import { describe, expect, it, afterEach } from "vitest";
import {
  isApprovedLoopbackAuthority,
  isApprovedLoopbackClientIp,
  isDevAdapterConsumeAllowed,
} from "@/domains/identity/session";
import { mustUseNoraFixture } from "@/domains/conversation/nora-adapter";

describe("DEV loopback authority (strict)", () => {
  it("accepts exact loopback forms used by local Next", () => {
    expect(isApprovedLoopbackAuthority("127.0.0.1")).toBe(true);
    expect(isApprovedLoopbackAuthority("127.0.0.1:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("[::1]")).toBe(true);
    expect(isApprovedLoopbackAuthority("[::1]:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("::1")).toBe(true);
  });

  it("rejects prefix/suffix spoof and malformed Host", () => {
    expect(isApprovedLoopbackAuthority("localhost.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.localhost")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1:99999")).toBe(false);
    expect(isApprovedLoopbackAuthority("user@127.0.0.1")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1,evil.com")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.example.com")).toBe(false);
    expect(isApprovedLoopbackAuthority("")).toBe(false);
    expect(isApprovedLoopbackAuthority(null)).toBe(false);
  });

  it("rejects ambiguous or external X-Forwarded-For chains", () => {
    expect(isApprovedLoopbackClientIp("127.0.0.1")).toBe(true);
    expect(isApprovedLoopbackClientIp("::1")).toBe(true);
    expect(isApprovedLoopbackClientIp("1.2.3.4")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1, 1.2.3.4")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1,127.0.0.1")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1:3100")).toBe(false);
  });
});

describe("DEV adapter consume gate", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevLogin = process.env.STUDIO_DEV_TEST_LOGIN;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevLogin === undefined) delete process.env.STUDIO_DEV_TEST_LOGIN;
    else process.env.STUDIO_DEV_TEST_LOGIN = prevLogin;
  });

  it("allows consume on DEV or RECETTE when STUDIO_DEV_TEST_LOGIN=1; never STABLE", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(isDevAdapterConsumeAllowed()).toBe(true);

    process.env.STUDIO_LANE = "RECETTE";
    expect(isDevAdapterConsumeAllowed()).toBe(true);

    process.env.STUDIO_LANE = "STABLE";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    delete process.env.STUDIO_LANE;
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "0";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    delete process.env.STUDIO_DEV_TEST_LOGIN;
    process.env.STUDIO_LANE = "DEV";
    expect(isDevAdapterConsumeAllowed()).toBe(false);
  });
});

describe("Nora fixture force boundary", () => {
  const prev = {
    e2e: process.env.STUDIO_E2E,
    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
    lane: process.env.STUDIO_LANE,
  };

  afterEach(() => {
    for (const [k, v] of Object.entries({
      STUDIO_E2E: prev.e2e,
      STUDIO_FORCE_NORA_FIXTURE: prev.force,
      STUDIO_LANE: prev.lane,
    })) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  });

  it("STUDIO_E2E=1 forces fixture only in DEV (not RECETTE)", () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "DEV";
    expect(mustUseNoraFixture()).toBe(true);
    process.env.STUDIO_LANE = "RECETTE";
    expect(mustUseNoraFixture()).toBe(false);
  });

  it("STUDIO_FORCE_NORA_FIXTURE=1 only forces fixture in DEV", () => {
    delete process.env.STUDIO_E2E;
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    process.env.STUDIO_LANE = "DEV";
    expect(mustUseNoraFixture()).toBe(true);
    process.env.STUDIO_LANE = "RECETTE";
    expect(mustUseNoraFixture()).toBe(false);
  });
});
