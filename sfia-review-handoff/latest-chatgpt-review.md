# SFIA Studio Next — ML4D / UX-003 Corrections + RECETTE — Review Pack FULL

**Date / heure :** 2026-11-16 ~06:45 CET (Europe/Paris)
**GO Morris :** corrections bornées + tests + candidat local figé + RECETTE locale ENV-01 (16/11/2026)
**Type :** EVOL · Delivery correctif · QA · RECETTE locale · **NO RELEASE**
**Profil :** STANDARD · Review Pack **FULL** · Handoff **required / publish-in-cycle**
**Macro-lot :** ML4D / UX-003 (pas clôture ML4D)

---

## 0. Verdicts

### A. Corrections UX-003
**PASS WITH RESERVES**

### B. Candidat
- SHA figé : `a77a3a2bf7b942038d771fdcdd2e7a6410330784`
- Parent : `31f23858ef5ed9cb8e6318133c3c399f39777b71`
- Tree web : `a2b22dd85bf876e4a72e51e782f0c2e54285ae65`
- Build ID RECETTE : `vYeNRRzvLN03N73wmcKkR`
- Tests : unit 373 PASS ; e2e UX-003+F2+ml1 12 PASS ; F2 ctaW=2

### C. Environnement RECETTE
**SERVED AND VERIFIED** / **READY WITH RESERVES — MORRIS UX RECETTE**
- URL : http://127.0.0.1:3200
- Worktree détaché : `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9`
- Smoke navigateur : entry + expired + test login → portfolio **PASS**

### D. Handoff
**à publier puis REMOTE VERIFIED** (section 12)

### E. Gates
| Gate | État |
| --- | --- |
| GO recette locale UX-003 | **autorisé et consommé** |
| Push projet / PR / merge | **NON** |
| STABLE / release / ADOPTED | **NON** |
| ML4D global | **NON CLOS** |
| Gate C | **OPEN** |

**Verdict utilisateur :** **READY WITH RESERVES — MORRIS UX RECETTE**

### Réserves restantes
1. Cookie same-host ENV-01 A — profil navigateur dédié recommandé ; cookies session lane-scoped.
2. `session_expired` = simulation `?reason=session_expired` uniquement.
3. F2 CTA largeur Δ **2 CSS px** (tolérance max).
4. OAuth LIVE callback non rejoué (CONFIGURED).
5. Version produit NOT AVAILABLE.
6. Accès de test RECETTE activé explicitement (`STUDIO_DEV_TEST_LOGIN=1`) — non OAuth.

---

## 1. GO Morris applicable

Autorisé : corrections UX-003, tests, candidat local, RECETTE locale ENV-01.
Non autorisé : push/PR/merge/main/doctrine/Figma/STABLE/release/ADOPTED.
Exception L3 handoff mono-fichier : autorisée.

---

## 2. Git Truth Check

| Champ | Valeur |
| --- | --- |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Branche DEV | `feat/next-ml4d-ux003-unified-entry-20261116` |
| HEAD DEV / candidat | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` |
| HEAD précédent | `31f23858…` (parent) |
| Handoff précédent | `e8c6caaa…` |
| Push projet | non |
| Dirty produit | propre (seul `.tmp-sfia-review/` local) |
| CKC UX-003 | **ABSENT** — fallback SFIA v2.6 |

RECETTE précédente sur `:3200` : ML4C `11f7077e` (worktree préservé). Remplacée par candidat UX-003 après diagnostic ; restauration documentée.

---

## 3. Sources lues

SEF, roadmap, ENV-01, product-versioning, naming, décisions 11/11 et 15/11, vision, cadrage-r4, contrats Figma, doctrine 30/36, contrat visuel UX-003, code entry/login/shell/auth/session/dev-login, Figma frames validés (relecture, pas redesign).

---

## 4. Écarts corrigés

1. **Troncature erreurs** : confirmée (panneau `height:550` + `overflow:hidden`). Status déplacé hors panneau (`uxe-status-slot`) — écart documenté vs Figma nominal.
2. **Accès test** : UI conditionnée par `testLoginAvailable` (même frontière serveur DEV/RECETTE + flag) ; garde `/api/dev/login` inchangée.
3. **Parcours** : `/` → `/login` si non authentifié ; tests OAuth unavailable / long error / network / DEV refused / session_expired.
4. **F2** : rectangles stables rejoués — deltas 0 sauf CTA 2.

---

## 5. Comparaison Figma/runtime (F2)

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

Captures DEV : `.tmp-sfia-review/runtime-captures/`
Captures RECETTE : `recette-desktop-1680-nominal.png`, `recette-mobile-390-nominal.png`, `recette-desktop-1680-expired.png`

---

## 6. Tests exécutés (réels)

| Suite | Résultat |
| --- | --- |
| tsc / eslint / next build | PASS |
| Vitest unit | **373 PASS** |
| Playwright UX-003 + F2 + ml1-smoke | **12 PASS** |
| Smoke RECETTE navigateur | **PASS** (entry/expired/test→portfolio) |

Qualification : BROWSER/FAKE/DET. OAuth LIVE non revendiqué. Git REAL non exercé.

---

## 7. Manifeste RECETTE

```yaml
lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-ux003-unified-entry-20261116
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
candidate_sha: a77a3a2bf7b942038d771fdcdd2e7a6410330784
web_tree: a2b22dd85bf876e4a72e51e782f0c2e54285ae65
build_id: vYeNRRzvLN03N73wmcKkR
served_address: 'http://127.0.0.1:3200'
served_host_machine: 'local macOS — Morris workstation'
browser_profile_guidance: 'Use a dedicated browser profile (or private window) for RECETTE to avoid cookie contamination with DEV :3100 (ENV-01 réserve A). Session cookies are lane-scoped (sfia_studio_session__RECETTE).'
started_at: '2026-11-16T05:38:54Z'
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9
start_script: /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9/start-recette-ux003.sh
db: '127.0.0.1:5434/sfia_next_recette_ml4'
document_root: from recette .env.local SFIA_DOCUMENT_ROOT
product_version: NOT AVAILABLE
release_status: NO RELEASE / NOT ADOPTED
oauth_capability: 'CONFIGURED — LIVE proof still requires successful callback'
test_login_capability: 'available (STUDIO_DEV_TEST_LOGIN=1, STUDIO_LANE=RECETTE) — non OAuth'
hot_reload: false
dev_isolation: 'DEV remains on feat worktree :3100; RECETTE serves production next start from detached SHA worktree'
previous_recette_sha: 11f7077edd08f1a0c680b6b920f20dbaf76c7bed
previous_recette_restore: '/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e/start-recette.sh (stop :3200 first)'
smoke_verified:
  - 'GET /login 200 + unified-studio-entry visible, rail absent'
  - 'GET /login?reason=session_expired shows SESSION EXPIRÉE'
  - 'GET /api/auth/status testLoginAvailable=true'
  - 'Pilote A (DEV) → /portfolio with studio-rail'
  - 'mobile 390 capture + desktop captures saved'
tests_dev_lane:
  unit: 373 PASS
  e2e_ux003_f2_ml1: 12 PASS
  f2_deltas: 'header/mark/auth/accent 0; ctaW 2'
decision_recette: EN ATTENTE MORRIS

```

---

## 8. Accès Morris

1. URL : **http://127.0.0.1:3200/login**
2. SHA : `a77a3a2bf7b942038d771fdcdd2e7a6410330784`
3. Connexion test : boutons **Pilote A/B (DEV)** (non OAuth) si visibles — lane RECETTE autorisée.
4. Session expirée : http://127.0.0.1:3200/login?reason=session_expired
5. Mobile : redimensionner la fenêtre / outils responsive (390×844).
6. Profil navigateur dédié recommandé (isolation cookies vs DEV :3100).
7. Restauration précédent : stopper `:3200` puis `/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e/start-recette.sh`

---

## 9. StudioShell (mode entry)

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

## 10. Delivery-history (nouvelle entrée)

```
## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~06:40 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-003 corrections finales + mise à disposition RECETTE locale |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux003-unified-entry-20261116` |
| Base | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Parent candidate | `31f23858ef5ed9cb8e6318133c3c399f39777b71` |
| Changes | Status hors panneau (anti-troncature) ; `testLoginAvailable` via `/api/auth/status` ; `/` → `/login` si non auth ; tests e2e étendus ; RECETTE figée |
| Schema | unchanged |
| Lanes | DEV + E2E `:3101` ; RECETTE `:3200` worktree/build séparé ; STABLE NOT AVAILABLE |
| Push / PR | **NON** |
| Version produit | NOT AVAILABLE |
| Status | candidate locale figé — EN ATTENTE MORRIS UX RECETTE |
| Risks | Cookie same-host réserve ENV-01 A (mitigation profils navigateur) ; session_expired simulé ; CTA F2 Δ2 px |



```

---

## 11. Fichiers créés/modifiés (contenu complet)

### Fichier — `projects/sfia-studio-next/web/src/components/entry/unified-entry-variant.ts`

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
### Fichier — `projects/sfia-studio-next/web/src/components/entry/UnifiedStudioEntry.tsx`

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
  /** Server-gated: DEV/RECETTE + STUDIO_DEV_TEST_LOGIN=1. Not a security control by itself. */
  testLoginAvailable: boolean;
  onGitHubContinue: () => void;
  onDevLogin: (pilot: "a" | "b") => void;
};

export function UnifiedStudioEntry({
  variant,
  busy,
  notice,
  noticeTone = "info",
  testLoginAvailable,
  onGitHubContinue,
  onDevLogin,
}: UnifiedStudioEntryProps) {
  const copy = UNIFIED_ENTRY_COPY[variant];

  return (
    <div
      className="uxe-root"
      data-testid="unified-studio-entry"
      data-entry-variant={variant}
      data-test-login={testLoginAvailable ? "available" : "hidden"}
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
                aria-busy={busy}
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
            </section>

            {/* Status outside fixed 550px panel — no truncation (écart documenté vs Figma nominal). */}
            {notice ? (
              <div className="uxe-status-slot">
                <p
                  className="uxe-status"
                  data-tone={noticeTone}
                  data-testid="login-notice"
                  role={noticeTone === "error" ? "alert" : "status"}
                  aria-live={noticeTone === "error" ? "assertive" : "polite"}
                >
                  {notice}
                </p>
              </div>
            ) : null}

            {/* Visible only when server reports test login available (DEV/RECETTE gate). */}
            {testLoginAvailable ? (
              <div className="uxe-dev" data-testid="login-dev-access">
                <p className="uxe-auth-note uxe-auth-note--secondary">
                  Accès de test (non OAuth) — lane autorisée
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
            ) : null}
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
### Fichier — `projects/sfia-studio-next/web/src/components/entry/unified-studio-entry.css`

```
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
  /* Nominal Figma 574:425 / 574:490: fixed 550. Status messages render outside. */
  height: 550px;
  padding: 26px 28px 28px;
  box-sizing: border-box;
  overflow: hidden;
}

/* Error/busy status lives outside the fixed panel so long copy is never clipped. */
.uxe-status-slot {
  width: 100%;
  margin: 0;
}

.uxe-status {
  margin: 0;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--uxe-line);
  background: color-mix(in srgb, var(--uxe-panel) 88%, #000);
  font-size: 13px;
  line-height: 1.45;
  color: var(--uxe-muted);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.uxe-status[data-tone="error"] {
  color: #f2b4ba;
  border-color: color-mix(in srgb, #e35d6a 55%, var(--uxe-line));
  background: color-mix(in srgb, #e35d6a 12%, var(--uxe-panel));
}

.uxe-status[data-tone="busy"] {
  color: var(--uxe-accent-soft);
  border-color: color-mix(in srgb, var(--uxe-accent) 40%, var(--uxe-line));
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
### Fichier — `projects/sfia-studio-next/web/src/app/login/page.tsx`

```
"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UnifiedStudioEntry } from "@/components/entry/UnifiedStudioEntry";
import { resolveUnifiedEntryVariant } from "@/components/entry/unified-entry-variant";
import "@/components/entry/unified-studio-entry.css";

function sanitizeUserNotice(raw: unknown): string {
  if (typeof raw !== "string" || !raw.trim()) {
    return "Une erreur est survenue. Réessayez ou contactez l’opérateur.";
  }
  const text = raw.trim().replace(/\s+/g, " ");
  // Never surface stack / absolute paths / env dumps to the Pilote.
  if (
    text.length > 480 ||
    /\/Users\/|\/home\/|at\s+\S+\s+\(|node_modules|DATABASE_URL|SECRET|BEGIN PRIVATE/i.test(
      text,
    )
  ) {
    return "Une erreur est survenue. Réessayez ou contactez l’opérateur.";
  }
  return text.slice(0, 480);
}

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
  const [testLoginAvailable, setTestLoginAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const statusRes = await fetch("/api/auth/status");
        const status = await statusRes.json().catch(() => ({}));
        if (!cancelled) {
          setTestLoginAvailable(Boolean(status?.testLoginAvailable));
        }
      } catch {
        if (!cancelled) setTestLoginAvailable(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function startGitHubOAuth() {
    setBusy(true);
    setNotice("Préparation de la connexion GitHub…");
    setNoticeTone("busy");
    try {
      const statusRes = await fetch("/api/auth/status");
      const status = await statusRes.json().catch(() => ({}));
      if (status?.testLoginAvailable != null) {
        setTestLoginAvailable(Boolean(status.testLoginAvailable));
      }
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
      if (data?.url && typeof data.url === "string") {
        window.location.assign(data.url);
        return;
      }
      setNotice(
        sanitizeUserNotice(
          data?.message ??
            data?.error ??
            "La connexion GitHub n’a pas pu démarrer. Réessayez ou contactez l’opérateur.",
        ),
      );
      setNoticeTone("error");
    } catch {
      setNotice(
        "Impossible de joindre le service d’authentification. Vérifiez votre connexion puis réessayez.",
      );
      setNoticeTone("error");
    } finally {
      setBusy(false);
    }
  }

  async function devLogin(pilot: "a" | "b") {
    setBusy(true);
    setNotice("");
    setNoticeTone("info");
    try {
      const res = await fetch("/api/dev/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pilot }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setNotice(
          sanitizeUserNotice(
            data.error === "DEV_TEST_LOGIN_DISABLED" ||
              data.error === "DEV_TEST_LOGIN_LANE_FORBIDDEN"
              ? "Accès de test indisponible sur cet environnement."
              : (data.error ?? "Échec de l’accès de test"),
          ),
        );
        setNoticeTone("error");
        setBusy(false);
        return;
      }
      setNotice(sanitizeUserNotice(data.notice ?? "Connexion de test établie."));
      setNoticeTone("info");
      router.push("/portfolio");
    } catch {
      setNotice("Impossible de joindre le service d’accès de test.");
      setNoticeTone("error");
      setBusy(false);
    }
  }

  return (
    <UnifiedStudioEntry
      variant={variant}
      busy={busy}
      notice={notice}
      noticeTone={noticeTone}
      testLoginAvailable={testLoginAvailable}
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
### Fichier — `projects/sfia-studio-next/web/src/app/page.tsx`

```
import { redirect } from "next/navigation";
import { resolveStudioSession } from "@/domains/identity/session";

export const dynamic = "force-dynamic";

/**
 * Public entry: unauthenticated visitors land on UX-003 /login.
 * Authenticated Pilotes resume at the portfolio cockpit.
 */
export default async function Home() {
  try {
    const session = await resolveStudioSession();
    redirect(session ? "/portfolio" : "/login");
  } catch {
    // Dependency failure must not invent a session — send to login surface.
    redirect("/login");
  }
}

```
### Fichier — `projects/sfia-studio-next/web/src/lib/auth.ts`

```
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";
import * as schema from "@/db/schema";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";
import { eq } from "drizzle-orm";

/**
 * Better Auth is the single session authority for GitHub OAuth Studio identity.
 * GitHub OAuth is wired only when client credentials exist — never fabricate PASS without secrets.
 * Mapping uses our plural tables via explicit schema model names.
 * PilotId is provisioned from the verified GitHub account id (server-side), never from the client.
 */
const githubConfigured = Boolean(
  process.env.GITHUB_CLIENT_ID?.trim() && process.env.GITHUB_CLIENT_SECRET?.trim(),
);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: githubConfigured
    ? {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID!,
          clientSecret: process.env.GITHUB_CLIENT_SECRET!,
          // Studio identity only — no repo scopes requested.
        },
      }
    : {},
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await ensurePilotForAuthUser(user.id);
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          // Mark Better Auth sessions as github-oauth (DEV adapter uses its own insert path).
          return {
            data: {
              ...session,
              authMode: "github-oauth",
            },
          };
        },
        after: async (session) => {
          // Ensure Pilot exists even if user.create hook already ran before account link.
          if (session.userId) {
            await ensurePilotForAuthUser(session.userId);
            // Belt: persist authMode if adapter dropped the before hook field.
            await db
              .update(schema.sessions)
              .set({ authMode: "github-oauth", updatedAt: new Date() })
              .where(eq(schema.sessions.id, session.id));
          }
        },
      },
    },
  },
});

/**
 * Non-secret capability probe for the entry screen.
 * Mirrors the server gate for DEV/RECETTE test login (STUDIO_DEV_TEST_LOGIN + lane).
 * Frontend visibility is not a security control — issuance remains fail-closed on /api/dev/login.
 */
export function studioEntryCapabilities() {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  const testLoginFlag = process.env.STUDIO_DEV_TEST_LOGIN === "1";
  const testLoginAvailable =
    testLoginFlag && (lane === "DEV" || lane === "RECETTE");
  return {
    provider: "github-oauth-studio-identity-only",
    configured: githubConfigured,
    status: githubConfigured
      ? "CONFIGURED — LIVE proof still requires successful callback"
      : "BLOCKED — missing GITHUB_CLIENT_ID/SECRET",
    note: "Login grants Studio identity only — never repository rights.",
    lane: lane || "UNKNOWN",
    testLoginAvailable,
    testLoginLabel: testLoginAvailable
      ? "Accès de test (non OAuth) — lane autorisée"
      : null,
  };
}

/** @deprecated Prefer studioEntryCapabilities — kept for existing call sites. */
export function githubOAuthStatus() {
  return studioEntryCapabilities();
}

```
### Fichier — `projects/sfia-studio-next/web/tests/unit/studio-entry-capabilities.test.ts`

```
import { afterEach, describe, expect, it } from "vitest";

describe("studioEntryCapabilities", () => {
  const prev = {
    lane: process.env.STUDIO_LANE,
    testLogin: process.env.STUDIO_DEV_TEST_LOGIN,
    ghId: process.env.GITHUB_CLIENT_ID,
    ghSecret: process.env.GITHUB_CLIENT_SECRET,
  };

  afterEach(() => {
    for (const [k, v] of Object.entries({
      STUDIO_LANE: prev.lane,
      STUDIO_DEV_TEST_LOGIN: prev.testLogin,
      GITHUB_CLIENT_ID: prev.ghId,
      GITHUB_CLIENT_SECRET: prev.ghSecret,
    })) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
    // Force re-import is hard; test pure gate logic via isDevAdapterConsumeAllowed instead
    // when module caches githubConfigured. Capabilities re-read env each call for lane/flag.
  });

  it("exposes testLoginAvailable only on DEV/RECETTE with flag", async () => {
    process.env.GITHUB_CLIENT_ID = "x";
    process.env.GITHUB_CLIENT_SECRET = "y";
    // Dynamic import after env set — auth module captures githubConfigured at load.
    const { studioEntryCapabilities } = await import("@/lib/auth");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(true);

    process.env.STUDIO_LANE = "RECETTE";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(true);

    process.env.STUDIO_LANE = "STABLE";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(false);

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "0";
    expect(studioEntryCapabilities().testLoginAvailable).toBe(false);
  });
});

```
### Fichier — `projects/sfia-studio-next/web/tests/e2e/ux003-unified-entry.spec.ts`

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
  await expect(page.getByTestId("studio-shell-entry")).toHaveAttribute(
    "data-shell-mode",
    "entry",
  );
  await expect(page.getByRole("heading", { name: /Vos projets avancent/ })).toBeVisible();
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByTestId("login-dev-access")).toBeVisible();
  await expect(page.getByRole("button", { name: "Pilote A (DEV)" })).toBeVisible();

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
    page.getByRole("button", { name: "Se reconnecter avec GitHub" }),
  ).toBeVisible();
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-session-expired.png"),
    fullPage: true,
  });
});

test("OAuth unavailable shows full error outside auth panel", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        configured: false,
        testLoginAvailable: true,
        status: "BLOCKED",
      }),
    });
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  const notice = page.getByTestId("login-notice");
  await expect(notice).toBeVisible();
  await expect(notice).toContainText(/indisponible/i);
  // Must not be clipped by the fixed auth panel.
  const fullyVisible = await notice.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const panel = document.querySelector("[data-testid='unified-entry-auth-panel']");
    const pr = panel?.getBoundingClientRect();
    if (!pr) return false;
    return r.bottom <= window.innerHeight && r.top >= pr.bottom - 1;
  });
  expect(fullyVisible).toBe(true);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-oauth-unavailable.png"),
    fullPage: true,
  });
});

test("long error message is not truncated", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  const longMsg =
    "La connexion GitHub n’a pas pu démarrer. " +
    "Diagnostic opératoire : le fournisseur d’identité a refusé l’initialisation du flux. ".repeat(
      6,
    ) +
    "Aucun secret n’est affiché. Réessayez plus tard.";
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: true, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/auth/sign-in/social", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ error: longMsg }),
    });
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  const notice = page.getByTestId("login-notice");
  await expect(notice).toBeVisible();
  const box = await notice.boundingBox();
  expect(box).toBeTruthy();
  expect((box?.height ?? 0) > 40).toBe(true);
  const clipped = await notice.evaluate((el) => {
    return el.scrollHeight > el.clientHeight + 2;
  });
  expect(clipped).toBe(false);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-long-error.png"),
    fullPage: true,
  });
});

test("network failure shows user-safe error", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: true, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/auth/sign-in/social", async (route) => {
    await route.abort("failed");
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  await expect(page.getByTestId("login-notice")).toContainText(
    /Impossible de joindre le service/i,
  );
});

test("unauthenticated / redirects to /login", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL("**/login");
  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
});

test("portfolio shell rail still present after DEV login", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByTestId("login-dev-access")).toBeVisible();
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByTestId("studio-rail")).toBeVisible();
});

test("DEV login refused when API forbids", async ({ page }) => {
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: false, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/dev/login", async (route) => {
    await route.fulfill({
      status: 403,
      contentType: "application/json",
      body: JSON.stringify({ error: "DEV_TEST_LOGIN_DISABLED" }),
    });
  });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await expect(page.getByTestId("login-notice")).toContainText(
    /Accès de test indisponible/i,
  );
  await expect(page).toHaveURL(/\/login/);
});

```
### Fichier — `projects/sfia-studio-next/web/tests/e2e/ux003-f2-measure.spec.ts`

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
### Fichier — `projects/sfia-studio-next/ux-ui/contrat-visuel-ux003-entree-unifiee-20261116.md`

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
- Accès de test (Pilote A/B) : hors Figma ; affiché seulement si `/api/auth/status.testLoginAvailable` (lane DEV/RECETTE + `STUDIO_DEV_TEST_LOGIN=1`) ; garde serveur inchangée.
- Messages d’état (busy/error) : rendus **hors** du panneau auth fixe 550 px (écart documenté vs Figma nominal) pour éviter toute troncature `overflow:hidden`.
- Fidélité F2 : rectangles stables — cible delta 0 CSS px, tolérance max 2 CSS px ; pas de seuil global d’image inventé.

```


---

## 12. Handoff L3

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Publisher : `scripts/sfia/publish-review-handoff.sh`
Statut : **pending remote publish in this cycle — will be REMOTE VERIFIED**

---

**FIN REVIEW PACK FULL — ML4D UX-003 corrections + RECETTE**
