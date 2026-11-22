import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import path from "path";

const panelPath = path.resolve(
  __dirname,
  "../../src/components/integrations/IntegrationsPanel.tsx",
);
const cssPath = path.resolve(__dirname, "../../src/components/figma/tokens.css");

describe("E08 POST-UAT 02 — Intégrations 11.06 microcopy + structure", () => {
  const src = readFileSync(panelPath, "utf8");
  const css = readFileSync(cssPath, "utf8");

  it("embeds Figma 11.06 updated pilot-facing labels", () => {
    const required = [
      "PARAMÈTRES / SERVICES EXTERNES",
      "Intégrations",
      "Gérez votre connexion GitHub et consultez les dépôts accessibles.",
      "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
      "Dépôts accessibles depuis votre compte GitHub.",
      "Actualiser les accès",
      "Déconnecter GitHub",
      "À propos de votre connexion",
      "Votre compte GitHub",
      "Votre connexion est personnelle et distincte de vos projets.",
      "Dépôts de vos projets",
      "Chaque projet peut associer un ou plusieurs dépôts.",
      "Publier avec Nora",
      "Demandez à Nora de publier vos documents depuis Travail.",
    ];
    for (const label of required) {
      expect(src, `missing label: ${label}`).toContain(label);
    }
  });

  it("keeps refresh/disconnect as secondary actions (no primary for both)", () => {
    expect(src).toMatch(
      /className="git-btn-secondary"[\s\S]{0,180}?data-testid="refresh-repos"/,
    );
    expect(src).toMatch(
      /className="git-btn-secondary"[\s\S]{0,220}?data-testid="disconnect-github"/,
    );
    expect(src).not.toMatch(
      /className="git-btn-primary"[\s\S]{0,220}?data-testid="refresh-repos"/,
    );
  });

  it("does not invent Figma sample repositories in source", () => {
    expect(src).not.toContain("chantiers360");
    expect(src).toContain("repos.map");
  });

  it("declares 11.06 layout tokens in CSS (858/482, green banner)", () => {
    expect(css).toContain("integrations-1106-grid");
    expect(css).toContain("minmax(0, 858fr) minmax(0, 482fr)");
    expect(css).toContain("integrations-1106-banner.is-ok");
    expect(css).toContain("var(--fig-ok-bg)");
  });
});
