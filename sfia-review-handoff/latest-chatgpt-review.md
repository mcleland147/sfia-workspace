# QA-NAP-01 — NORA ADAPTIVE PRESENTATION — RUNTIME / FIGMA VISUAL & CONTINUITY VALIDATION

**Cycle:** SFIA 9 — QA / validation
**Profil:** STANDARD
**Typologie:** QA / validation locale
**Review pack:** FULL
**Date/heure UTC:** 2026-10-29T20:40:15Z
**Worktree:** `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation`
**Branch:** `feat/akg-m5-nora-adaptive-presentation`
**HEAD:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**origin/main:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**Handoff CURRENT (avant publish):** `79c1f1a52f55b0c18eef6fa4b58133649b52f80e` / blob `775f81743315150dd9794c5a615975668d6aef89` (CORR-NAP-03)

## Verdict unique

**REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED**

Sous-qualification (non exclusives) :
1. **QA ENVIRONMENT NOT QUALIFIED** — Better Auth : cookie file PRESENT mais session expirée / injection cookies Playwright échouée ; `/studio` redirige vers `/login?error=NO_SESSION`.
2. **QA TOOLING GAP — MORRIS DECISION REQUIRED** — même avec auth, `FakeConversationProvider` n'émet pas de DTO `presentation` adaptatif ; OpenAI LIVE non autorisé ; aucune modification Product sous ce GO QA.

Aucun READY FOR PR / REAL / ADOPTED / FIGMA TO RUNTIME ALIGNED inventé.

## 1. Git Truth Check

| Check | Résultat |
|-------|----------|
| toplevel | MATCH Delivery worktree |
| branche | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD / origin/main / merge-base | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| WIP Option C + CORR-NAP-01/02/03 | PRÉSENT non commité |
| staged | vide |
| Product modifié sous QA | NON (seul ajout : scénario E2E QA) |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
?? projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts

```

## 2. Sources consultées

Méthode / convergence : cycle-execution-template, cycle-routing-guide, Operating Model v2.6, Build Doctrine / Roadmap / C1, doctrines 30/32/34/35, PRR 02/03/04/06/07/08/09 (qualification).

Handoff CORR-NAP-03 relu (`79c1f1a52f55b0c18eef6fa4b58133649b52f80e`).

Code : ConversationSurface, NoraAdaptivePresentationView(+css), noraAdaptivePresentation.ts, useProductConversation, actions/continuity, cycleJournalStore, ProductSqliteSession, tests NAP, playwright.config, authenticatedStudioSession, optionAQaScenarioControl, fakeProvider (absence d'émission presentation).

Figma MCP session : fileKey `m4g8j0gNbEzfIuH6S9AZJF` — A3 `466:2`, A4 `466:71`.

## 3. Contrat Figma extrait (v2.6 §6.6)

### A3 — contrat sémantique / comportemental (466:2) — 1440×1140

- **Rôle :** conception de routage de présentation (NON pixel conversation).
- **Pipeline :** Réponse & faits → Typage sémantique → Contrôle Studio → Composition UI.
- **Matrice :** Question simple / Explication longue / Synthèse / Comparaison / Recommandation / Décision-exécution-preuves — avec limites (pas de carte superflue ; labels épistémiques ; reco ≠ HumanDecision ; CTA jamais issus du texte libre).
- **Garde-fous :** GOUVERNANCE / PROVENANCE / CONTINUITÉ / ACCESSIBILITÉ.
- **Tokens observés :** fond `#fffdf9`, texte `#1f1a16`, muted `#7a7066`, accent `#f06a4b`, bordures `#e3d9cf`, Geist SemiBold/Regular.
- **Typo :** titres ~28/16/13, labels 11–12.
- **Responsive / a11y :** titres navigables, icônes libellées, mobile sans perte de sens (spécifié ; non prouvé runtime).

### A4 — composition visuelle + continuité (466:71) — 1440×1140

- **Contenu :** snapshot BALISE avant/après reload identiques.
- **Blocs :** established (vert `#ecf9f1`) / open questions (`#faf6f1`) / recommendation (`#fff2ea`) + disclaimer « Proposition uniquement… ».
- **Provenance :** Source transcript BALISE ; « Pas d'action gouvernée… ».
- **Continuité :** mêmes informations après rechargement ; repli texte si structure inconnue.
- **Comparabilité pixel :** A4 est une maquette de composition conversation ; le shell Product `/studio` est une surface différente → **DESIGN NON COMPARABLE** pour score pixel global shell↔frame ; comparaison blocs uniquement si état runtime adaptatif réellement affiché.

Références locales (Figma MCP downloads — pas des captures runtime Product) :
- A3-466-2.png: 907122146fc30c7ccbb085a09457e73508c07fb9cfd36d5fe48a39101b35e662 size=93674
- A4-466-71.png: f91ec73593e678937cc916da3561fb674a1546d15d631795a2badb8d9ab88e60 size=93068

## 4. Environnement QA réellement utilisé

```json
{
  "timestamp": "2026-10-29T20:38:49.724Z",
  "cookieFilePresent": true,
  "cookieStatus": "PRESENT",
  "playwrightBaseURL": "http://localhost:3020",
  "ops1ConversationProvider": "fake",
  "openAiLiveAuthorized": false,
  "cursorRealAuthorized": false,
  "adaptiveDtoEmitViaFake": false,
  "note": "FakeConversationProvider has no presentation DTO emit path; Better Auth session required for /studio."
}
```

- Port : `localhost:3020` (serveur existant réutilisé)
- Auth cookie : PRESENT (copié depuis worktree principal) — **sessions Better Auth expirées** (expires_in négatif pour `better-auth.session_*`)
- `OPS1_CONVERSATION_PROVIDER=fake`
- OpenAI LIVE : NON · Cursor REAL : NON
- SQLite jetable Product : **NON ATTEINT** (auth wall)

## 5. Matrice scénarios QA-NAP-01…12

| ID | Statut | Preuve |
|----|--------|--------|
| QA-NAP-01 réponse courte | NOT PROVEN | auth wall |
| QA-NAP-02 synthèse composée | NOT PROVEN | auth + Fake sans DTO presentation |
| QA-NAP-03 comparaison | NOT PROVEN | idem |
| QA-NAP-04 recommandation | NOT PROVEN | idem |
| QA-NAP-05 provenance/réserves | NOT PROVEN (runtime) ; PARTIAL unit/UI | tests T13–T17 d0/ui |
| QA-NAP-06 STOP/incomplétude | NOT PROVEN (runtime) ; PARTIAL unit/UI | T18–T24 |
| QA-NAP-07 marqueur forgé | NOT PROVEN (runtime) ; PASS unit/UI | T7/T23 |
| QA-NAP-08 legacy/DTO invalide | NOT PROVEN (runtime) ; PASS d0 | persistence tests |
| QA-NAP-09 reload navigateur | NOT PROVEN | auth wall |
| QA-NAP-10 restart serveur | NOT PROVEN | non atteint |
| QA-NAP-11 responsive | NOT PROVEN | non atteint |
| QA-NAP-12 conformité A4 | CAPTURE / ÉTAT REQUIS | Figma lu ; runtime adaptatif absent |

## 6. Captures / manifeste / empreintes

### Manifeste runtime

```
{"id":"QA-NAP-AUTH-WALL-login-redirect","qaId":"ENV-AUTH","file":"QA-NAP-AUTH-WALL-login-redirect.png","timestamp":"2026-10-29T20:38:50.306Z","route":"http://localhost:3020/login?error=NO_SESSION&from=%2Fstudio","viewport":{"width":1440,"height":1024},"state":"NO_SESSION redirect to /login","dtoSource":"none","simulationLevel":"browser-runtime-auth-wall","sha256":"de55c6b47bdaf281c87aaa461f92136638519f80af3ca549bfa38be52674d9c8","overflow":{"scrollWidth":1440,"clientWidth":1440},"secretsPresent":false,"conformingProductScreen":false,"observation":"Unauthenticated /studio redirects to login — not a Nora Adaptive conforming capture","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP-01 NORA ADAPTIVE"}
{"id":"QA-NAP-AUTH-EXPIRED-or-invalid","qaId":"ENV-AUTH","file":"QA-NAP-AUTH-EXPIRED-or-invalid.png","timestamp":"2026-10-29T20:38:50.456Z","route":"http://localhost:3020/login?error=NO_SESSION&from=%2Fstudio","viewport":{"width":1440,"height":1024},"state":"browserContext.addCookies: Cookie should have either url or path","dtoSource":"none","simulationLevel":"browser-runtime-auth-failure","sha256":"de55c6b47bdaf281c87aaa461f92136638519f80af3ca549bfa38be52674d9c8","overflow":{"scrollWidth":1440,"clientWidth":1440},"secretsPresent":false,"conformingProductScreen":false,"observation":"Better Auth cookie present on disk but session invalid/expired for /studio","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP-01 NORA ADAPTIVE"}

```

### SHA-256 captures navigateur (auth wall — NON CONFORMES Product)

- QA-NAP-AUTH-EXPIRED-or-invalid.png: de55c6b47bdaf281c87aaa461f92136638519f80af3ca549bfa38be52674d9c8 size=61495
- QA-NAP-AUTH-WALL-login-redirect.png: de55c6b47bdaf281c87aaa461f92136638519f80af3ca549bfa38be52674d9c8 size=61495

**Explicit :** ces PNG montrent `/login?error=NO_SESSION` — **interdit** comme preuve d'écran Nora Adaptive conforme.

### Fichiers à transmettre à ChatGPT (pièces jointes)

1. `.tmp-sfia-review/runtime-captures/nora-adaptive/figma-refs/A3-466-2.png`
2. `.tmp-sfia-review/runtime-captures/nora-adaptive/figma-refs/A4-466-71.png`
3. `.tmp-sfia-review/runtime-captures/nora-adaptive/QA-NAP-AUTH-WALL-login-redirect.png` (preuve auth wall)
4. `.tmp-sfia-review/runtime-captures/nora-adaptive/manifest.jsonl`
5. `.tmp-sfia-review/runtime-captures/nora-adaptive/env-qualification.json`

Sans (1)(2) le reviewer distant n'a pas les pixels Figma ; sans captures Product authentifiées, la comparaison A4 runtime est impossible.

## 7. Figma vs Runtime

| Élément | Figma | Runtime | Statut | Preuve |
|---------|-------|---------|--------|-------|
| Structure globale A3 | pipeline + matrice | non observé /studio | CAPTURE / ÉTAT REQUIS | auth wall |
| Composition A4 multi-blocs | established/open/reco | non observé | CAPTURE / ÉTAT REQUIS | tooling gap DTO |
| Hiérarchie typo | Geist 11–28 | non observé | CAPTURE / ÉTAT REQUIS | — |
| Couleurs tokens | #fffdf9 / #f06a4b / tints | CSS Delivery local non capturé /studio | CAPTURE / ÉTAT REQUIS | — |
| Messages Studio typés | continuité A4 | non observé navigateur | CAPTURE / ÉTAT REQUIS | unit PASS |
| Responsive | spécifié A3 | non observé | CAPTURE / ÉTAT REQUIS | — |
| Continuité reload | A4 avant/après | non observé | CAPTURE / ÉTAT REQUIS | d0 persist PASS |
| Pixel shell↔A4 | — | — | DESIGN NON COMPARABLE | natures différentes |
| Auth wall login | — | capturé | NON CONFORME (attendu fail-closed) | PNG + manifest |

Écarts classés : **BLOCKING** = absence auth valide + absence émission DTO Fake ; **NOT PROVEN** = toute conformité visuelle A4 runtime.

## 8. Commandes et résultats

### Playwright QA-NAP-01

```
npx playwright test e2e/studio-nora-adaptive-qa-nap01.spec.ts
```
- exit **1** (échec attendu : environnement non qualifié)
- captures auth wall produites
- **0** capture Product Nora Adaptive conforme

### NAP déterministe (complémentaire)

```
npx vitest run __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts \
  __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```
- exit **0** — **51 passed**

### Gates

- `npx tsc --noEmit -p tsconfig.json` → exit **0**
- eslint e2e QA spec → exit **0** après retrait import inutilisé
- build Next : non exécuté — auth/runtime Product non atteint ; tsc suffit pour le scénario QA ajouté

## 9. Fake/Real Qualification

- Applicable : OUI
- Frontière : OpenAI Agents / Structured Outputs
- Fake : OPS1 fake forcé dans Playwright webServer / env test
- REAL / LIVE / G-REAL : NON
- Niveau d'entrée : DETERMINISTIC PROVEN (Delivery unit/UI)
- Preuve navigateur attendue : **NON ATTEINTE** pour adaptatif
- Captures obtenues : browser auth-wall only → **pas** BROWSER RUNTIME OBSERVED sur Nora Adaptive
- READY FOR REAL : NON

## 10. Anomalies / dette

1. **BLOCKING ENV** — bootstrap Better Auth requis (`e2e:auth:bootstrap` / cookie frais).
2. **BLOCKING TOOLING** — décision Morris requise pour un emit Fake déterministe de `presentation` (ou autre harness E2E gouverné) **sans** créer un parcours Product parallèle.
3. R24 PRR 03/06/09 DOC GO toujours ouvert (Delivery).
4. EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 OPEN · L4 NOT · Runtime v3 NON ADOPTED.

## 11. R23 / R24

**R23**
- Parcours /studio compris (middleware Better Auth → workspace → ConversationSurface → resolveAdaptiveAssistantRender)
- Invariants NAP : DOCUMENTED + COVERAGE VERIFIED (unit/UI) ; BEHAVIOR PROVEN navigateur adaptatif : **KNOWN GAP**
- Figma A3/A4 : DOCUMENTED via MCP

**R24**
- QA seule → **NO SEMANTIC PRODUCT IMPACT** (ajout E2E test only)
- Sync PRR : **PENDING — MORRIS DOC GO REQUIRED**

## 12. Contenu complet — fichier créé (E2E QA)

### FILE CREATED: `projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts`

```typescript
/**
 * QA-NAP-01 — Nora Adaptive Presentation runtime / Figma visual validation.
 *
 * READ-ONLY Product. Captures go to
 * .tmp-sfia-review/runtime-captures/nora-adaptive/
 *
 * Auth: Better Auth session via authorized cookie bootstrap only.
 * Fake OpenAI boundary only — no LIVE / no Cursor REAL.
 *
 * Adaptive DTO emit: existing FakeConversationProvider does not emit
 * `presentation` structured output. Without that (or LIVE), multi-block
 * adaptive UI cannot be observed through the real /studio send path.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  applyAuthenticatedStudioCookies,
  gotoAuthenticatedStudio,
  inspectAuthCookieFileStatus,
  resolveAuthCookieFilePath,
} from "./support/authenticatedStudioSession";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/nora-adaptive",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    qaId: string;
    state: string;
    viewport: { width: number; height: number };
    dtoSource: string;
    simulationLevel: string;
    conformingProductScreen: boolean;
    observation: string;
  },
): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  const row = {
    id,
    qaId: meta.qaId,
    file: path.basename(file),
    timestamp: new Date().toISOString(),
    route: page.url(),
    viewport: meta.viewport,
    state: meta.state,
    dtoSource: meta.dtoSource,
    simulationLevel: meta.simulationLevel,
    sha256,
    overflow,
    secretsPresent: false,
    conformingProductScreen: meta.conformingProductScreen,
    observation: meta.observation,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP-01 NORA ADAPTIVE",
  };
  fs.appendFileSync(MANIFEST, `${JSON.stringify(row)}\n`);
  return sha256;
}

test.describe("QA-NAP-01 Nora Adaptive Presentation /studio", () => {
  test.describe.configure({ timeout: 180_000 });

  test.beforeAll(() => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");
  });

  test("auth pre-check + adaptive DTO tooling gap qualification", async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });

    const cookiePath = resolveAuthCookieFilePath();
    const cookieStatus = inspectAuthCookieFileStatus(cookiePath);
    fs.writeFileSync(
      path.join(CAPTURE_ROOT, "env-qualification.json"),
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          cookieFilePresent: Boolean(cookiePath),
          cookieStatus,
          playwrightBaseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3020",
          ops1ConversationProvider:
            process.env.OPS1_CONVERSATION_PROVIDER ?? "(webServer default fake)",
          openAiLiveAuthorized: false,
          cursorRealAuthorized: false,
          adaptiveDtoEmitViaFake: false,
          note:
            "FakeConversationProvider has no presentation DTO emit path; Better Auth session required for /studio.",
        },
        null,
        2,
      ),
    );

    // Capture unauthenticated redirect (evidence of auth wall — NOT a conforming Product screen).
    await page.goto("/studio", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveURL(/\/login/);
    await capture(page, "QA-NAP-AUTH-WALL-login-redirect", {
      qaId: "ENV-AUTH",
      state: "NO_SESSION redirect to /login",
      viewport: { width: 1440, height: 1024 },
      dtoSource: "none",
      simulationLevel: "browser-runtime-auth-wall",
      conformingProductScreen: false,
      observation:
        "Unauthenticated /studio redirects to login — not a Nora Adaptive conforming capture",
    });

    if (cookieStatus !== "PRESENT") {
      test.info().annotations.push({
        type: "qa-environment",
        description: `QA ENVIRONMENT NOT QUALIFIED — cookie status ${cookieStatus}`,
      });
      return;
    }

    try {
      await applyAuthenticatedStudioCookies(context);
      await gotoAuthenticatedStudio(page);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      await capture(page, "QA-NAP-AUTH-EXPIRED-or-invalid", {
        qaId: "ENV-AUTH",
        state: message,
        viewport: { width: 1440, height: 1024 },
        dtoSource: "none",
        simulationLevel: "browser-runtime-auth-failure",
        conformingProductScreen: false,
        observation:
          "Better Auth cookie present on disk but session invalid/expired for /studio",
      });
      test.info().annotations.push({
        type: "qa-environment",
        description: `QA ENVIRONMENT NOT QUALIFIED — ${message}`,
      });
      // Fail closed after evidence capture — adaptive matrix NOT PROVEN.
      expect(
        message,
        "Authenticated /studio required for QA-NAP adaptive runtime matrix",
      ).toBe("AUTH_OK");
      return;
    }

    // If we reach here, auth works — still cannot force adaptive DTO without Fake emit.
    await capture(page, "QA-NAP-01-studio-home-auth-ok", {
      qaId: "QA-NAP-01",
      state: "authenticated studio home",
      viewport: { width: 1440, height: 1024 },
      dtoSource: "none-yet",
      simulationLevel: "browser-runtime + fake-openai-boundary",
      conformingProductScreen: true,
      observation: "Authenticated /studio reachable; adaptive DTO emit still tooling-gap",
    });

    // Tooling gap attestation — do not invent adaptive UI via DOM injection.
    const adaptiveCount = await page
      .getByTestId("nora-adaptive-presentation")
      .count();
    expect(adaptiveCount).toBe(0);
    test.info().annotations.push({
      type: "tooling-gap",
      description:
        "QA TOOLING GAP — Fake provider cannot emit Nora adaptive presentation DTO through /studio send path; LIVE unauthorized; no Product modification allowed in QA cycle.",
    });
  });
});

```

Aucun fichier Product modifié.

## 13. Handoff

- Branche : `sfia/review-handoff`
- Message : `docs(review-handoff): publish QA-NAP-01 runtime visual review`
- Remote tip/blob : *après publish*

## 14. Trajectoire / prochaine capacité

1. Bootstrap auth Better Auth local (Morris / humain).
2. GO distinct : emit Fake `presentation` ou harness E2E gouverné (architecture decision).
3. Rejouer matrice QA-NAP-01…12 + captures A4.
4. Puis R24 documentaire + intégration sous GO.

---
**FIN REVIEW PACK QA-NAP-01 — FULL**
