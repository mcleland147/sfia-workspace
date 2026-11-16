# SFIA Studio Next — ML4D / UX-003 Entrée unifiée — Review Pack FULL

**Date / heure :** 2026-11-16 ~01:45 CET (Europe/Paris)
**Autorité :** GO Morris — transposition Figma → runtime (16/11/2026)
**Type :** EVOL · Delivery / UX/UI · QA · **NO RELEASE**
**Profil :** STANDARD · Review Pack **FULL** · Handoff **required / publish-in-cycle**
**Macro-lot :** ML4D (sous-ensemble UX-003 — pas une clôture ML4D)

---

## 0. Verdict

**READY WITH RESERVES**

| Condition | État |
| --- | --- |
| Implémentation /login fidèle composition | **oui** (desktop/mobile/expired) |
| Rail absent sur /login ; shell préservé ailleurs | **oui** |
| OAuth GitHub + DEV login préservés | **oui** |
| Tests unit + e2e UX-003 + ml1-smoke | **PASS** |
| F2 rectangles stables ≤2 CSS px | **PASS** (ctaW=2) |
| Captures runtime vs Figma | **réalisées** (comparaison visuelle qualitative + F2 géométrie) |
| Push / PR projet | **NON** (GO distinct requis) |
| Handoff L3 | **à publier** (section 11) |
| ML4D global / Gate C / ADOPTED | **NON** |

### Réserves
1. Session expirée : activation déterministe `?reason=session_expired` uniquement — runtime ne distingue pas encore session expirée vs jamais connecté.
2. Bandeau DEV (Pilote A/B) hors Figma, hors panneau auth (nécessité e2e).
3. Delta CTA largeur **2 CSS px** (tolérance max) ; pas de seuil image global inventé.
4. OAuth GitHub LIVE non ré-prouvé ici (frontière config) ; message d’indisponibilité explicite si non configuré.
5. Version produit cible : **NOT AVAILABLE** (attribution Morris). MINOR candidate UX.

---

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Dépôt | `mcleland147/sfia-workspace` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (= attendu ChatGPT) |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche candidate | `feat/next-ml4d-ux003-unified-entry-20261116` |
| HEAD local | `31f23858ef5ed9cb8e6318133c3c399f39777b71` |
| Parent | `997d4c4e` (= main) |
| Tree web | `a5be8c34da9143e47f4d40bf4bdad87bbfc51fa4` |
| Push projet | **non effectué** |
| ENV policy blob | `14b61f0d…` match |
| Versioning blob | `8bc93e0f…` match |
| RECETTE / STABLE | non mutées / NOT AVAILABLE |

Incident corrigé in-cycle : un commit avait d’abord atterri sur `docs/next-ml4c-closure-20261115` (worktree) ; **non poussé** ; docs tip distant restauré `bb21d24c` ; rejoué sur feat depuis `origin/main`.

CKC UX-003 : **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité.

---

## 2. Sources lues

- `governance/SEF.md`, `roadmap.md`, décisions 2026-11-11 et 2026-11-15
- `product-naming-conventions.md`, `environnements-recette-et-promotions.md`, `product-versioning.md`
- `cadrage/vision-produit.md`, `architecture-technique/cadrage-r4.md`
- `ux-ui/contrat-transposition-figma-code.md`, `protocole-fidelite-figma-runtime.md`
- `construction/.../g2-source/README.md`
- Code : `login/page.tsx`, `StudioShell.tsx`, `layout.tsx`, `globals.css`, `tokens.css`, auth OAuth existant
- Figma MCP : frames `574:425`, `574:466`, `574:490` (+ metadata + screenshots + assets)

---

## 3. Références Figma exploitées

| Frame | Node | Viewport | Empreinte PNG sha256 |
| --- | --- | --- | --- |
| Desktop nominal | 574:425 | 1680×970 | `a3c42f942a0dd9f8fe0fb3dd7d1913f04946c245c3f8916877f069072dc15206` |
| Mobile nominal | 574:466 | 390×844 | `7ff1439eabe80277b98d0add0bf2847f5d96d525c3df49d7e03b5bfe638e1aec` |
| Desktop session expirée | 574:490 | 1680×970 | `cf5aca2f2ca0f706d6c010a81bf3882efbf38e7e6d46199592406ae95bcae012` |

Captures locales : `.tmp-sfia-review/figma-refs/`
Contrat L1/L2 : `projects/sfia-studio-next/ux-ui/contrat-visuel-ux003-entree-unifiee-20261116.md`

---

## 4. Implémentation — périmètre

- Composant `UnifiedStudioEntry` + CSS tokens UX-003
- `/login` branché ; shell mode `entry` (pas de rail)
- CTA GitHub → `/api/auth/status` + `/api/auth/sign-in/social`
- DEV login Pilote A/B conservés
- Variante expired via `resolveUnifiedEntryVariant`
- Assets décor SVG sous `web/public/entry/`

---

## 5. Comparaison Figma / runtime

### Géométrie F2 (desktop 1680×970)

```json
{
  "measures": {
    "viewport": {
      "w": 1680,
      "h": 970
    },
    "header": {
      "x": 0,
      "y": 0,
      "width": 1680,
      "height": 106
    },
    "mark": {
      "x": 84,
      "y": 33,
      "width": 39,
      "height": 39
    },
    "auth": {
      "x": 1000,
      "y": 204,
      "width": 536,
      "height": 550
    },
    "cta": {
      "x": 1029,
      "y": 535,
      "width": 478,
      "height": 62
    },
    "accent": {
      "x": 1029,
      "y": 231,
      "width": 52,
      "height": 5
    },
    "figma": {
      "headerH": 106,
      "mark": {
        "w": 39,
        "h": 39
      },
      "auth": {
        "w": 536,
        "h": 550
      },
      "cta": {
        "w": 480,
        "h": 62
      },
      "accent": {
        "w": 52,
        "h": 5
      }
    }
  },
  "deltas": {
    "headerH": 0,
    "markW": 0,
    "markH": 0,
    "authW": 0,
    "authH": 0,
    "ctaW": 2,
    "ctaH": 0,
    "accentW": 0,
    "accentH": 0
  }
}
```

| Rectangle | Figma | Runtime | Δ CSS px |
| --- | --- | --- | --- |
| Header H | 106 | 106 | 0 |
| Mark | 39×39 | 39×39 | 0 |
| Auth panel | 536×550 | 536×550 | 0 |
| Auth position | (1000,204) | (1000,204) | 0 |
| Accent | 52×5 | 52×5 | 0 |
| CTA | 480×62 | 478×62 | **2** (≤2) |

Captures runtime : `.tmp-sfia-review/runtime-captures/`
- `runtime-desktop-1680x970-nominal.png`
- `runtime-mobile-390x844-nominal.png`
- `runtime-mobile-320x568-nominal.png`
- `runtime-desktop-1680x970-session-expired.png`

**Qualification :** fidélité structurelle forte sur rectangles stables ; différences de rasterisation/polices (Inter système) non assimilées à un fail géométrique ; pas de verdict pixel-global inventé.

---

## 6. Tests et preuves

| Suite | Résultat | Niveau |
| --- | --- | --- |
| `tsc --noEmit` | PASS | DET |
| ESLint | PASS (warnings préexistants) | DET |
| `next build` | PASS (lane DEV, DSN loopback) | DET |
| Vitest unit | **372 PASS** | DET |
| Playwright UX-003 (+F2) | **6 PASS** | BROWSER/FAKE |
| Playwright ml1-smoke | **1 PASS** | BROWSER/FAKE |
| OAuth GitHub LIVE | non rejoué | — |
| Git REAL | non exercé | — |

ENV-01 : DEV/E2E `:3101` / `sfia_next_e2e` ; RECETTE `:5434` non mutée.

---

## 7. Diff utile — StudioShell

```tsx
  // UX-003: /login is a public entry surface — no private project rail.
  if (pathname === "/login") {
    return (
      <div className="min-h-screen" data-testid="studio-shell-entry" data-shell-mode="entry">
        {children}
      </div>
    );
  }
```

---

## 8. Fichiers créés / modifiés (contenu)

### Fichier complet — `projects/sfia-studio-next/web/src/components/entry/unified-entry-variant.ts`

```
/**
 * UX-003 unified Studio entry — visual variants.
 *
 * Session-expired is activated only by an explicit, deterministic signal
 * (`?reason=session_expired`). The runtime does not yet distinguish an
 * expired session from a never-authenticated visitor; do not invent that
 * behaviour. Query param enables deterministic render + e2e proof.
 */

export type UnifiedEntryVariant = "nominal" | "session_expired";

export function resolveUnifiedEntryVariant(
  reason: string | null | undefined,
): UnifiedEntryVariant {
  if (reason === "session_expired") return "session_expired";
  return "nominal";
}

export const UNIFIED_ENTRY_COPY = {
  nominal: {
    panelEyebrow: "ACCÈS PERSONNEL",
    panelTitle: "Bienvenue dans Studio",
    panelBody:
      "Connectez-vous pour retrouver vos projets et reprendre vos échanges avec Nora.",
    ctaLabel: "Continuer avec GitHub",
  },
  session_expired: {
    panelEyebrow: "SESSION EXPIRÉE",
    panelTitle: "Retrouvons votre session",
    panelBody:
      "Reconnectez-vous pour reprendre vos projets. Vos informations privées restent masquées.",
    ctaLabel: "Se reconnecter avec GitHub",
  },
} as const;

```
### Fichier complet — `projects/sfia-studio-next/web/src/components/entry/UnifiedStudioEntry.tsx`

```
"use client";

import "./unified-studio-entry.css";
import {
  UNIFIED_ENTRY_COPY,
  type UnifiedEntryVariant,
} from "./unified-entry-variant";

const CAPABILITIES = [
  { num: "01", label: "Échanger avec Nora" },
  { num: "02", label: "Conduire vos projets" },
  { num: "03", label: "Reprendre sans perdre le fil" },
] as const;

export type UnifiedStudioEntryProps = {
  variant: UnifiedEntryVariant;
  busy: boolean;
  notice: string;
  noticeTone?: "error" | "busy" | "info";
  onGitHubContinue: () => void;
  onDevLogin: (pilot: "a" | "b") => void;
};

export function UnifiedStudioEntry({
  variant,
  busy,
  notice,
  noticeTone = "info",
  onGitHubContinue,
  onDevLogin,
}: UnifiedStudioEntryProps) {
  const copy = UNIFIED_ENTRY_COPY[variant];

  return (
    <div
      className="uxe-root"
      data-testid="unified-studio-entry"
      data-entry-variant={variant}
      data-figma-desktop={variant === "session_expired" ? "574:490" : "574:425"}
      data-figma-mobile="574:466"
    >
      <div className="uxe-decor" aria-hidden>
        <img
          className="uxe-decor__halo-blue"
          src="/entry/halo-bleute.svg"
          alt=""
          width={1344}
          height={1344}
        />
        <img
          className="uxe-decor__halo-violet"
          src="/entry/halo-violet.svg"
          alt=""
          width={650}
          height={650}
        />
        <img
          className="uxe-decor__ring-1"
          src="/entry/anneau-01.svg"
          alt=""
          width={760}
          height={760}
        />
        <img
          className="uxe-decor__ring-2"
          src="/entry/anneau-02.svg"
          alt=""
          width={590}
          height={590}
        />
      </div>

      <div className="uxe-shell">
        <header className="uxe-header">
          <div className="uxe-brand">
            <span className="uxe-mark" aria-hidden>
              S
            </span>
            <p className="uxe-brand-name">SFIA Studio</p>
          </div>
          <p className="uxe-header-meta">Espace personnel</p>
        </header>

        <div className="uxe-body">
          <section className="uxe-intro" aria-labelledby="uxe-headline">
            <p className="uxe-eyebrow">Votre espace de pilotage</p>
            <h1 id="uxe-headline" className="uxe-headline">
              Vos projets avancent.
              <br />
              Avec Nora.
            </h1>
            <p className="uxe-lead">
              Cadrer, décider et retrouver votre travail au même endroit.
              <span className="uxe-lead-secondary">
                {" "}
                Nora vous accompagne, du premier échange aux résultats vérifiables.
              </span>
            </p>
            <hr className="uxe-mobile-sep" />
            <hr className="uxe-signature" />
            <ul className="uxe-tiles">
              {CAPABILITIES.map((c) => (
                <li key={c.num} className="uxe-tile">
                  <p className="uxe-tile-num">{c.num}</p>
                  <p className="uxe-tile-label">{c.label}</p>
                </li>
              ))}
            </ul>
            <p className="uxe-model-note">
              Pilote et Nora : une conversation, des décisions maîtrisées, une continuité.
            </p>
          </section>

          <div className="uxe-auth-column">
            <section
              className="uxe-auth"
              aria-labelledby="uxe-auth-title"
              data-testid="unified-entry-auth-panel"
            >
              <div className="uxe-auth-accent" aria-hidden />
              <p className="uxe-auth-eyebrow">{copy.panelEyebrow}</p>
              <h2 id="uxe-auth-title" className="uxe-auth-title">
                {copy.panelTitle}
              </h2>
              <p className="uxe-auth-body">{copy.panelBody}</p>

              <button
                type="button"
                className="uxe-cta"
                data-testid="login-github"
                disabled={busy}
                onClick={onGitHubContinue}
              >
                <span className="uxe-cta-icon" aria-hidden>
                  GH
                </span>
                <span className="uxe-cta-label">{copy.ctaLabel}</span>
                <span className="uxe-cta-arrow" aria-hidden>
                  →
                </span>
              </button>

              <hr className="uxe-auth-sep" />
              <p className="uxe-auth-note">
                GitHub confirme uniquement votre identité Studio.
              </p>
              <p className="uxe-auth-note uxe-auth-note--secondary">
                Les droits d&apos;accès aux dépôts sont gérés séparément.
              </p>

              {notice ? (
                <p
                  className="uxe-status"
                  data-tone={noticeTone}
                  data-testid="login-notice"
                  role="status"
                >
                  {notice}
                </p>
              ) : null}
            </section>

            {/* DEV-only harness — hors panneau Figma ; conservé pour lanes DEV/E2E. */}
            <div className="uxe-dev" data-testid="login-dev-access">
              <p className="uxe-auth-note uxe-auth-note--secondary">
                Accès de test DEV (non OAuth)
              </p>
              <div className="uxe-dev-body">
                <button
                  type="button"
                  className="uxe-dev-btn"
                  disabled={busy}
                  onClick={() => onDevLogin("a")}
                >
                  Pilote A (DEV)
                </button>
                <button
                  type="button"
                  className="uxe-dev-btn"
                  disabled={busy}
                  onClick={() => onDevLogin("b")}
                >
                  Pilote B (DEV)
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="uxe-footer">
          <p>SFIA Studio</p>
          <p className="uxe-footer-right">
            L&apos;accès aux dépôts Git est autorisé séparément.
          </p>
        </footer>
      </div>
    </div>
  );
}

```
### Fichier complet — `projects/sfia-studio-next/web/src/app/login/page.tsx`

```
"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UnifiedStudioEntry } from "@/components/entry/UnifiedStudioEntry";
import { resolveUnifiedEntryVariant } from "@/components/entry/unified-entry-variant";
import "@/components/entry/unified-studio-entry.css";

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const variant = useMemo(
    () => resolveUnifiedEntryVariant(searchParams.get("reason")),
    [searchParams],
  );
  const [notice, setNotice] = useState<string>("");
  const [noticeTone, setNoticeTone] = useState<"error" | "busy" | "info">("info");
  const [busy, setBusy] = useState(false);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("Préparation de la connexion GitHub…");
    setNoticeTone("busy");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (!status.configured) {
        setNotice(
          "Connexion GitHub indisponible : la configuration OAuth n’est pas prête sur cet environnement. Aucun service n’est déclaré disponible.",
        );
        setNoticeTone("error");
        setBusy(false);
        return;
      }
      const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: "github", callbackURL: "/portfolio" }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.url) {
        window.location.assign(data.url);
        return;
      }
      setNotice(
        data?.message ??
          data?.error ??
          "La connexion GitHub n’a pas pu démarrer. Réessayez ou contactez l’opérateur.",
      );
      setNoticeTone("error");
    } catch (e) {
      setNotice(String(e));
      setNoticeTone("error");
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    setNoticeTone("info");
    const res = await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setNotice(data.error ?? "Échec de l’accès DEV");
      setNoticeTone("error");
      return;
    }
    setNotice(data.notice);
    setNoticeTone("info");
    router.push("/portfolio");
  }

  return (
    <UnifiedStudioEntry
      variant={variant}
      busy={busy}
      notice={notice}
      noticeTone={noticeTone}
      onGitHubContinue={startGitHubOAuth}
      onDevLogin={devLogin}
    />
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="uxe-root" data-testid="unified-studio-entry-fallback">
          <div className="uxe-shell">
            <header className="uxe-header">
              <div className="uxe-brand">
                <span className="uxe-mark" aria-hidden>
                  S
                </span>
                <p className="uxe-brand-name">SFIA Studio</p>
              </div>
            </header>
            <main className="uxe-body">
              <p className="uxe-lead">Chargement de l&apos;entrée Studio…</p>
            </main>
          </div>
        </div>
      }
    >
      <LoginPageInner />
    </Suspense>
  );
}

```
### Fichier complet — `projects/sfia-studio-next/web/tests/unit/unified-entry-variant.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  resolveUnifiedEntryVariant,
  UNIFIED_ENTRY_COPY,
} from "@/components/entry/unified-entry-variant";

describe("resolveUnifiedEntryVariant", () => {
  it("defaults to nominal when reason is absent", () => {
    expect(resolveUnifiedEntryVariant(null)).toBe("nominal");
    expect(resolveUnifiedEntryVariant(undefined)).toBe("nominal");
    expect(resolveUnifiedEntryVariant("")).toBe("nominal");
  });

  it("activates session_expired only on explicit reason", () => {
    expect(resolveUnifiedEntryVariant("session_expired")).toBe("session_expired");
    expect(resolveUnifiedEntryVariant("expired")).toBe("nominal");
    expect(resolveUnifiedEntryVariant("SESSION_EXPIRED")).toBe("nominal");
  });

  it("keeps distinct copy for expired vs nominal", () => {
    expect(UNIFIED_ENTRY_COPY.nominal.ctaLabel).toBe("Continuer avec GitHub");
    expect(UNIFIED_ENTRY_COPY.session_expired.ctaLabel).toBe(
      "Se reconnecter avec GitHub",
    );
    expect(UNIFIED_ENTRY_COPY.session_expired.panelEyebrow).toBe("SESSION EXPIRÉE");
  });
});

```
### Fichier complet — `projects/sfia-studio-next/web/tests/e2e/ux003-unified-entry.spec.ts`

```
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const CAPTURE_DIR = path.join(
  process.cwd(),
  "..",
  "..",
  "..",
  ".tmp-sfia-review",
  "runtime-captures",
);

test.beforeAll(() => {
  fs.mkdirSync(CAPTURE_DIR, { recursive: true });
});

test("login entry renders without project rail (desktop nominal)", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");

  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
  await expect(page.getByTestId("unified-studio-entry")).toHaveAttribute(
    "data-entry-variant",
    "nominal",
  );
  await expect(page.getByTestId("studio-rail")).toHaveCount(0);
  await expect(page.getByTestId("studio-rail-mobile")).toHaveCount(0);
  await expect(page.getByTestId("studio-shell-entry")).toHaveAttribute(
    "data-shell-mode",
    "entry",
  );

  await expect(page.getByRole("heading", { name: /Vos projets avancent/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Bienvenue dans Studio" })).toBeVisible();
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByRole("button", { name: "Pilote A (DEV)" })).toBeVisible();

  // Keyboard focus lands on primary CTA when tabbing into the panel.
  await page.getByTestId("login-github").focus();
  await expect(page.getByTestId("login-github")).toBeFocused();

  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-nominal.png"),
    fullPage: true,
  });
});

test("login entry mobile nominal composition", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/login");

  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Avec Nora/ })).toBeVisible();

  // No horizontal overflow on the entry root.
  const overflow = await page.evaluate(() => {
    const el = document.querySelector("[data-testid='unified-studio-entry']");
    if (!el) return true;
    return el.scrollWidth > el.clientWidth + 1;
  });
  expect(overflow).toBe(false);

  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-mobile-390x844-nominal.png"),
    fullPage: true,
  });
});

test("login entry tiny viewport 320x568 stays usable", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/login");
  await expect(page.getByTestId("login-github")).toBeVisible();
  const overflow = await page.evaluate(() => {
    const el = document.querySelector("[data-testid='unified-studio-entry']");
    if (!el) return true;
    return el.scrollWidth > el.clientWidth + 1;
  });
  expect(overflow).toBe(false);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-mobile-320x568-nominal.png"),
    fullPage: true,
  });
});

test("session_expired variant via deterministic reason query", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login?reason=session_expired");

  await expect(page.getByTestId("unified-studio-entry")).toHaveAttribute(
    "data-entry-variant",
    "session_expired",
  );
  await expect(page.getByText("SESSION EXPIRÉE", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Retrouvons votre session" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Se reconnecter avec GitHub" }),
  ).toBeVisible();

  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-session-expired.png"),
    fullPage: true,
  });
});

test("portfolio shell rail still present after DEV login", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByTestId("studio-rail")).toBeVisible();
});

```
### Fichier complet — `projects/sfia-studio-next/web/tests/e2e/ux003-f2-measure.spec.ts`

```
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "../../../.tmp-sfia-review/f2-measures.json");

test("F2 measure desktop stable rectangles", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  const box = async (sel: string) => {
    const loc = page.locator(sel).first();
    const b = await loc.boundingBox();
    return b;
  };
  const measures = {
    viewport: { w: 1680, h: 970 },
    header: await box(".uxe-header"),
    mark: await box(".uxe-mark"),
    auth: await box("[data-testid='unified-entry-auth-panel']"),
    cta: await box("[data-testid='login-github']"),
    accent: await box(".uxe-auth-accent"),
    figma: {
      headerH: 106,
      mark: { w: 39, h: 39 },
      auth: { w: 536, h: 550 },
      cta: { w: 480, h: 62 },
      accent: { w: 52, h: 5 },
    },
  };
  const deltas = {
    headerH: Math.abs((measures.header?.height ?? 0) - 106),
    markW: Math.abs((measures.mark?.width ?? 0) - 39),
    markH: Math.abs((measures.mark?.height ?? 0) - 39),
    authW: Math.abs((measures.auth?.width ?? 0) - 536),
    authH: Math.abs((measures.auth?.height ?? 0) - 550),
    ctaW: Math.abs((measures.cta?.width ?? 0) - 480),
    ctaH: Math.abs((measures.cta?.height ?? 0) - 62),
    accentW: Math.abs((measures.accent?.width ?? 0) - 52),
    accentH: Math.abs((measures.accent?.height ?? 0) - 5),
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ measures, deltas }, null, 2));
  console.log(JSON.stringify(deltas));
  for (const [k, v] of Object.entries(deltas)) {
    expect(v, k).toBeLessThanOrEqual(2);
  }
});

```
### Fichier complet — `projects/sfia-studio-next/ux-ui/contrat-visuel-ux003-entree-unifiee-20261116.md`

```
# Contrat visuel L1/L2 — UX-003 Entrée unifiée (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Statut | EXTRAIT FIGMA MCP — VALIDATED SPEC BY MORRIS (composition) |
| Fichier Figma | `itgvCulInEnFY6DvgIegvP` |
| Page | `94:49` |
| Frames | `574:425` desktop nominal · `574:466` mobile nominal · `574:490` desktop session expirée |
| Empreintes PNG (sha256) | voir section 4 |
| CKC dédié | **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité |

## 1. Dimensions de référence

| Frame | Node | Viewport |
| --- | --- | --- |
| Desktop nominal | `574:425` | **1680 × 970** |
| Mobile nominal | `574:466` | **390 × 844** |
| Desktop session expirée | `574:490` | **1680 × 970** |

## 2. Tokens couleur natifs (constatés)

| Token | Hex |
| --- | --- |
| Fond page | `#090e19` |
| En-tête | `#0d1422` |
| Panneau / tuiles | `#131c2b` |
| Lignes | `#28364e` |
| Accent CTA / marque | `#6777f6` |
| Accent soft | `#9ca6ff` |
| Encre | `#f4f7ff` |
| Muet | `#a2b0c6` |
| Muet secondaire | `#7185a6` |

## 3. Composition L1/L2 (desktop)

| Bloc | Mesures natives (extrait metadata) |
| --- | --- |
| En-tête | h=106 ; marque 39×39 @ (84,35) ; rayon marque 10 |
| Auth panel | 536×550 @ (1000,204) ; rayon 24 ; bordure `#28364e` |
| Accent panel | 52×5 ; rayon 2 |
| CTA | 480×62 ; rayon 12 |
| Tuiles | 222×98 ; gap ~15 ; rayon 14 |
| Titre produit | Inter Bold 68 / lh 80 |
| Titre auth | Inter SemiBold 34 / lh 42 |

Mobile : auth 350×396 @ (20,371) ; titre 39/46 ; CTA 294×56 ; tuiles/footer/masqués.

Session expirée : même composition desktop ; copy panel `SESSION EXPIRÉE` / `Retrouvons votre session` / CTA `Se reconnecter avec GitHub`.

## 4. Captures Figma datées (2026-11-16)

Stockage local cycle : `.tmp-sfia-review/figma-refs/`

| Fichier | sha256 |
| --- | --- |
| `574-425-desktop-nominal.png` | `a3c42f942a0dd9f8fe0fb3dd7d1913f04946c245c3f8916877f069072dc15206` |
| `574-466-mobile-nominal.png` | `7ff1439eabe80277b98d0add0bf2847f5d96d525c3df49d7e03b5bfe638e1aec` |
| `574-490-desktop-expired.png` | `cf5aca2f2ca0f706d6c010a81bf3882efbf38e7e6d46199592406ae95bcae012` |

## 5. Limites runtime

- Variante session expirée : activation déterministe `?reason=session_expired` uniquement (pas de détection session native distincte).
- Accès DEV (Pilote A/B) : hors Figma, conservés pour lanes DEV/E2E.
- Fidélité F2 : rectangles stables — cible delta 0 CSS px, tolérance max 2 CSS px ; pas de seuil global d’image inventé.

```
### Fichier complet — `projects/sfia-studio-next/web/src/components/entry/unified-studio-entry.css`

```css
/*
 * UX-003 — Entrée unifiée Studio
 * Native Figma tokens from frames 574:425 / 574:466 / 574:490 (2026-11-16).
 * Reference viewports: desktop 1680×970 · mobile 390×844.
 */

.uxe-root {
  --uxe-bg: #090e19;
  --uxe-header: #0d1422;
  --uxe-panel: #131c2b;
  --uxe-line: #28364e;
  --uxe-accent: #6777f6;
  --uxe-accent-soft: #9ca6ff;
  --uxe-ink: #f4f7ff;
  --uxe-muted: #a2b0c6;
  --uxe-muted-2: #7185a6;
  --uxe-radius-panel: 24px;
  --uxe-radius-tile: 14px;
  --uxe-radius-btn: 12px;
  --uxe-radius-mark: 10px;

  position: relative;
  isolation: isolate;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  max-width: 100vw;
  background: var(--uxe-bg);
  color: var(--uxe-ink);
  overflow-x: clip;
  font-family: var(--font-sans);
}

.uxe-decor {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.uxe-decor img {
  position: absolute;
  display: block;
  max-width: none;
}

.uxe-decor__halo-blue {
  left: -130px;
  top: 339.5px;
  width: 1344px;
  height: 1344px;
}

.uxe-decor__halo-violet {
  left: 974.4px;
  top: -380px;
  width: 650px;
  height: 650px;
}

.uxe-decor__ring-1 {
  left: -145px;
  top: 450px;
  width: 760px;
  height: 760px;
}

.uxe-decor__ring-2 {
  left: -50px;
  top: 535px;
  width: 590px;
  height: 590px;
}

.uxe-shell {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.uxe-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 106px;
  padding: 0 84px;
  background: var(--uxe-header);
  border-bottom: 1px solid var(--uxe-line);
}

.uxe-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.uxe-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border-radius: var(--uxe-radius-mark);
  background: var(--uxe-accent);
  color: #fff;
  font-size: 23px;
  font-weight: 700;
  line-height: 1;
  flex-shrink: 0;
}

.uxe-brand-name {
  margin: 0;
  font-size: 23px;
  font-weight: 600;
  color: var(--uxe-ink);
  letter-spacing: -0.01em;
}

.uxe-header-meta {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--uxe-muted);
  white-space: nowrap;
}

.uxe-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 536px;
  gap: 48px;
  align-items: start;
  padding: 98px 144px 40px 122px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  box-sizing: border-box;
}

.uxe-intro {
  min-width: 0;
  max-width: 820px;
  padding-top: 24px;
}

.uxe-eyebrow {
  margin: 0 0 34px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--uxe-accent-soft);
}

.uxe-headline {
  margin: 0;
  font-size: 68px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: var(--uxe-ink);
}

.uxe-lead {
  margin: 40px 0 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: var(--uxe-muted);
  max-width: 760px;
}

.uxe-signature {
  margin: 58px 0 0;
  width: min(660px, 100%);
  height: 1px;
  background: var(--uxe-line);
  border: 0;
}

.uxe-tiles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 222px));
  gap: 15px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.uxe-tile {
  background: var(--uxe-panel);
  border: 1px solid var(--uxe-line);
  border-radius: var(--uxe-radius-tile);
  min-height: 98px;
  padding: 15px 17px;
  box-sizing: border-box;
}

.uxe-tile-num {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--uxe-accent-soft);
}

.uxe-tile-label {
  margin: 14px 0 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--uxe-ink);
  line-height: 1.25;
}

.uxe-model-note {
  margin: 32px 0 0;
  font-size: 14px;
  line-height: 1.35;
  color: var(--uxe-muted-2);
  max-width: 750px;
}

.uxe-auth-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 536px;
  max-width: 100%;
}

.uxe-auth {
  position: relative;
  background: var(--uxe-panel);
  border: 1px solid var(--uxe-line);
  border-radius: var(--uxe-radius-panel);
  width: 100%;
  height: 550px;
  padding: 26px 28px 28px;
  box-sizing: border-box;
  overflow: hidden;
}

.uxe-auth-accent {
  width: 52px;
  height: 5px;
  border-radius: 2px;
  background: var(--uxe-accent);
  margin-bottom: 22px;
}

.uxe-auth-eyebrow {
  margin: 0 0 25px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--uxe-accent-soft);
}

.uxe-auth-title {
  margin: 0;
  font-size: 34px;
  font-weight: 600;
  line-height: 42px;
  color: var(--uxe-ink);
}

.uxe-auth-body {
  margin: 56px 0 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: var(--uxe-muted);
}

.uxe-cta {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 480px;
  max-width: 100%;
  margin-top: 86px;
  height: 62px;
  min-height: 62px;
  padding: 0 18px;
  border: 0;
  border-radius: var(--uxe-radius-btn);
  background: var(--uxe-accent);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  box-sizing: border-box;
}

.uxe-cta:hover {
  filter: brightness(1.05);
}

.uxe-cta:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

.uxe-cta:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.uxe-cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background: #fff;
  color: var(--uxe-bg);
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}

.uxe-cta-label {
  flex: 1;
  min-width: 0;
}

.uxe-cta-arrow {
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  flex-shrink: 0;
}

.uxe-auth-sep {
  margin: 53px 0 0;
  height: 1px;
  background: var(--uxe-line);
  border: 0;
}

.uxe-auth-note {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.35;
  color: var(--uxe-muted);
}

.uxe-auth-note--secondary {
  color: var(--uxe-muted-2);
  margin-top: 14px;
}

.uxe-status {
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--uxe-muted);
}

.uxe-status[data-tone="error"] {
  color: #e35d6a;
}

.uxe-status[data-tone="busy"] {
  color: var(--uxe-accent-soft);
}

.uxe-dev {
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px dashed color-mix(in srgb, var(--uxe-line) 80%, transparent);
}

.uxe-dev-body {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.uxe-dev-btn {
  background: transparent;
  border: 1px solid var(--uxe-line);
  color: var(--uxe-muted);
  border-radius: 8px;
  padding: 0.45rem 0.75rem;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.uxe-dev-btn:hover {
  color: var(--uxe-ink);
}

.uxe-dev-btn:focus-visible {
  outline: 2px solid var(--uxe-accent);
  outline-offset: 2px;
}

.uxe-dev-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.uxe-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding: 20px 80px 28px;
  border-top: 1px solid var(--uxe-line);
  font-size: 12px;
  color: var(--uxe-muted-2);
}

.uxe-footer p {
  margin: 0;
}

.uxe-footer-right {
  text-align: right;
  max-width: 475px;
}

/* —— Mobile / narrow (Figma 390×844) —— */
@media (max-width: 900px) {
  .uxe-decor__halo-blue {
    left: -130px;
    top: 295px;
    width: 312px;
    height: 312px;
  }

  .uxe-decor__halo-violet {
    left: 226px;
    top: -380px;
    width: 650px;
    height: 650px;
  }

  .uxe-decor__ring-1,
  .uxe-decor__ring-2 {
    display: none;
  }

  .uxe-header {
    height: 83px;
    padding: 0 24px;
  }

  .uxe-mark {
    width: 34px;
    height: 34px;
    font-size: 20px;
  }

  .uxe-brand-name {
    font-size: 20px;
  }

  .uxe-header-meta {
    display: none;
  }

  .uxe-body {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 28px 20px 32px;
  }

  .uxe-intro {
    padding-top: 0;
    max-width: none;
  }

  .uxe-eyebrow {
    margin-bottom: 18px;
    font-size: 11px;
  }

  .uxe-headline {
    font-size: 39px;
    line-height: 46px;
  }

  .uxe-lead {
    margin-top: 15px;
    font-size: 15px;
    line-height: 23px;
  }

  .uxe-lead .uxe-lead-secondary {
    display: none;
  }

  .uxe-signature,
  .uxe-tiles,
  .uxe-model-note {
    display: none;
  }

  .uxe-mobile-sep {
    display: block;
    margin: 24px 0 0;
    height: 1px;
    background: var(--uxe-line);
    border: 0;
  }

  .uxe-auth-column {
    width: 100%;
    max-width: min(350px, 100%);
    margin: 0 auto;
  }

  .uxe-auth {
    height: auto;
    min-height: 396px;
    width: 100%;
    padding: 26px 20px 24px;
  }

  .uxe-auth-title {
    font-size: 25px;
    line-height: 32px;
  }

  .uxe-auth-body {
    margin-top: 36px;
    font-size: 14px;
    line-height: 21px;
  }

  .uxe-cta {
    margin-top: 64px;
    width: 100%;
    max-width: 294px;
    height: 56px;
    min-height: 56px;
    font-size: 14px;
  }

  .uxe-auth-sep {
    margin-top: 26px;
  }

  .uxe-auth-note {
    font-size: 11px;
  }

  .uxe-auth-note--secondary {
    display: none;
  }

  .uxe-footer {
    display: none;
  }
}

@media (min-width: 901px) {
  .uxe-mobile-sep {
    display: none;
  }
}

/* Very small phones — keep content usable without overflow */
@media (max-width: 360px) {
  .uxe-body {
    padding-left: 16px;
    padding-right: 16px;
  }

  .uxe-headline {
    font-size: 34px;
    line-height: 40px;
  }

  .uxe-auth-column {
    max-width: 100%;
  }

  .uxe-cta {
    max-width: 100%;
    gap: 10px;
    padding: 0 12px;
  }
}

```


---

## 9. Limites / décisions Morris requises

1. GO publication branche / PR (actuellement local-only).
2. Attribution version MINOR (numéro NOT AVAILABLE).
3. Arbitrage si détection native session expirée doit être ajoutée (hors périmètre auth refactor).
4. Revue visuelle UX Morris (captures fournies).
5. Pas d’acceptation ML4D globale / Gate C / ADOPTED.

---

## 10. Delivery

Voir `DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY` dans `construction/delivery-history.md`.
SHA local : `31f23858ef5ed9cb8e6318133c3c399f39777b71` · **pas de push**.

---

## 11. Handoff L3

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Publisher : `scripts/sfia/publish-review-handoff.sh`
Statut : **pending publish** (rempli après publication).

---

**FIN REVIEW PACK FULL — ML4D UX-003**
