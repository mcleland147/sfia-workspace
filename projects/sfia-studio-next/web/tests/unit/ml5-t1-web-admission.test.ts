import { describe, expect, it } from "vitest";
import {
  admitNoraProposedPublicQuery,
  composePilotPublicSearchQuery,
  detectPublicResearchIntent,
  extractPilotAuthorizedExactQueries,
  extractPilotProvidedPublicUrls,
  resolvePublicWebRegistry,
  stageNoraProposedPublicQuery,
  PILOT_PUBLIC_QUERY_REF,
} from "@/domains/conversation/public-web-registry";
import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";
import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";

describe("T1.1 — lexical intent does not authorize", () => {
  it("detectPublicResearchIntent no longer grants true (disabled)", () => {
    expect(
      detectPublicResearchIntent(
        "Recherche la documentation officielle de PostgreSQL",
      ),
    ).toBe(false);
  });

  it("composePilotPublicSearchQuery is disabled", () => {
    const r = composePilotPublicSearchQuery(
      "Recherche la documentation officielle HTTP/3",
    );
    expect(r.ok).toBe(false);
  });

  it("registry does not auto-register pilot-public-query from research phrasing", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
      haystack:
        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
    expect(r.limits).toContain("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");
  });

  it("Nora proposed public query can be admitted then authorized", () => {
    const registered = ["HTTP/3 site:datatracker.ietf.org"];
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "HTTP/3 site:datatracker.ietf.org",
      registeredPublicQueries: registered,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);
    const auth = authorizePublicWebQuery({
      publicTopicRef: admitted.ref,
      turnPublicTopics: { [admitted.ref]: admitted.query },
      turnAuthorizedExactQueries: [admitted.query],
    });
    expect(auth.ok).toBe(true);
    expect(auth.provenance === "EXPLICIT_AUTHORIZED_EXACT" || auth.provenance === "REGISTERED_PUBLIC_COMPOSITION").toBe(
      true,
    );
  });

  it("Nora free-form proposal without registered provenance is refused", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "HTTP/3 site:datatracker.ietf.org",
    });
    expect(admitted.ok).toBe(false);
    if (admitted.ok) throw new Error("expected deny");
    expect(admitted.reason).toBe("PUBLIC_PROVENANCE_REQUIRED");
  });

  it("proposed query with private marker is refused", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "architecture prep_abc123xyz confidential",
      privateMarkers: ["prep_abc123xyz"],
      registeredPublicQueries: ["architecture prep_abc123xyz confidential"],
    });
    expect(admitted.ok).toBe(false);
  });

  it("proposed confidential business cue is refused by sanitize", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "notre budget interne vs postgresql docs",
      registeredPublicQueries: ["notre budget interne vs postgresql docs"],
    });
    expect(admitted.ok).toBe(false);
  });
});

describe("T1.2 — no haystack fallback for pilot provenance", () => {
  it("absent pilotText does not extract URLs from haystack", () => {
    const r = resolvePublicWebRegistry({
      haystack:
        "checkpoint https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.pilotProvidedUrls).toHaveLength(0);
    expect(r.limits).toContain("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
  });

  it("pilotText extracts candidates but marks not auto-authorized", () => {
    const url =
      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
    const r = resolvePublicWebRegistry({
      pilotText: `Compare avec ${url}`,
      haystack: `Compare avec ${url}`,
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.pilotProvidedUrls).toContain(url);
    expect(r.limits).toContain("PILOT_URL_NOT_AUTO_AUTHORIZED");
  });

  it("strips stale pilot-public-query from prior topics", () => {
    const r = resolvePublicWebRegistry({
      priorTopics: {
        [PILOT_PUBLIC_QUERY_REF]: "old subject site:example.com",
        "node-lts": "Node.js current LTS version site:nodejs.org",
      },
      priorExactQueries: ["old subject site:example.com"],
      pilotText: "bonjour",
      haystack: "bonjour node.js lts",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
    expect(r.limits).toContain("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
    expect(r.topics["node-lts"]).toBeTruthy();
  });
});

describe("Option B — Pilote exact authorization persistence", () => {
  it("stages Nora proposal without egress grant", () => {
    const staged = stageNoraProposedPublicQuery({
      proposedQuery: "HTTP/3 site:datatracker.ietf.org",
    });
    expect(staged.ok).toBe(true);
    if (!staged.ok) throw new Error(staged.reason);
    expect(staged.pending).toBe(true);
  });

  it("extracts AUTHORIZE_PUBLIC_QUERY markers from Pilote text", () => {
    const qs = extractPilotAuthorizedExactQueries(
      'OK. AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
    );
    expect(qs).toEqual(["HTTP/3 site:datatracker.ietf.org"]);
  });

  it("observes Pilote exact parse without promoting until D6-bound", () => {
    const q = "HTTP/3 site:datatracker.ietf.org";
    const parsedOnly = resolvePublicWebRegistry({
      pilotText: `Autoriser la recherche publique exacte : « ${q} »`,
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(parsedOnly.exactQueries).not.toContain(q);
    expect(parsedOnly.limits).toContain("PARSE_NOT_D6_AUTHORITY");

    const r = resolvePublicWebRegistry({
      pilotText: `Autoriser la recherche publique exacte : « ${q} »`,
      d6BoundExactQueries: [q],
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).toContain(q);
    expect(r.limits).toContain("PILOT_EXACT_AUTHORIZED_D6");
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: q,
      registeredPublicQueries: r.exactQueries,
    });
    expect(admitted.ok).toBe(true);
  });
});

describe("T1.3 — destination / credential negatives", () => {
  it("rejects credentials, private IP, CGNAT", () => {
    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
    expect(
      extractPilotProvidedPublicUrls(
        "voir https://user:secret@evil.test/x et https://192.168.1.1/y",
      ),
    ).toEqual([]);
  });
});
