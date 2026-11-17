# SFIA Studio Next — Review Pack Full — Cycle 8 / R05 Recovery Fix + RECETTE

**Date UTC :** 2026-11-17
**Nature :** Republication handoff **complet** pour ChatGPT (mono-cycle R05 recovery + deploy)
**Mandat Morris consommé :** Correction DEV + tests + déploiement RECETTE conditionnel + plan retest Arnaud + Review Pack Full + Handoff L3
**Typologie :** RUN / INC corrective · Profil Critical
**Macro-lot :** ML4D Ensemble 05 — Travail avec Nora
**Exécutant :** Cursor · **Revue :** ChatGPT · **Décideur :** Morris · **Recette utilisateur :** Morris / plan pour Arnaud
**Product versioning :** PATCH CANDIDATE · NO RELEASE · NO PRODUCT PUSH · NO PR/MERGE · STABLE NOT AVAILABLE

---

## 1. Mandat et cycle

Cycle intégré unique autorisé :

1. Corriger la reprise d'une génération cognitive `UNKNOWN` sans effet métier.
2. Améliorer l'observabilité des exceptions Agents SDK / OpenAI (allowlist, sans secrets).
3. Tests unitaires, PostgreSQL DEV/E2E, Playwright FAKE.
4. Documentation non normative impactée + plan retest Arnaud.
5. Commit local figé.
6. Déploiement RECETTE conditionnel si gate §9 PASS.
7. Smoke non-LIVE ; données préservées ; rollback disponible.
8. Review Pack Full + handoff Git L3.

**Hors mandat (respecté) :** nouvel appel OpenAI LIVE par Cursor ; correction spéculative fournisseur/SDK ; migration ; changement structurant D3/D6/D7/D8/D9 ; push produit / PR / merge ; promotion STABLE ; clôture E05 / Gate C.

---

## 2. Git Truth Check

### Au démarrage du cycle correctif

| Élément | Valeur |
|---|---|
| `pwd -P` | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD départ | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Relation | ahead 30 / behind 0 |
| Dirty initial | `.tmp-sfia-review/chatgpt-review.md` seulement (handoff local) |
| Travaux concurrents | nombreux worktrees ; aucun écrasement |

### RECETTE initiale (avant bascule)

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| BUILD_ID | `_xkrsw46qX4QKUC0bBU8i` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| PID next | `48321` |
| Worktree | `…/ensemble05-recette-build-208aaa40` |
| PostgreSQL | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Rollback antérieur | `34a5e102` disponible |

### État final Git (après cycle, avant cette republication)

| Élément | Valeur |
|---|---|
| Tip branche | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| Tree tip | `a0c89cef5d28a6931cba0ca6183359a9112f0f79` |
| Commit code runtime | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| Tree code | `509c459ca6a9be4a5f9ff28615e778aa6b344cc0` |
| Push produit | **AUCUN** |

---

## 3. Sources et blobs consultés

### Diagnostic de référence (L3)

- Branche handoff antérieure : `sfia/review-handoff@de481265…`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Blob : `07c536b16ae27306b06facba3ccb01189c309897`
- Verdict : `R05 PROVIDER FAILURE IDENTIFIED — RECOVERY UX GAP CONFIRMED`

### Méthode / gouvernance (lecture)

- SFIA v2.6 cycle routing, template, guardrails, operating model, validation checklist
- `governance/environnements-recette-et-promotions.md` (ENV-01)
- `governance/product-versioning.md`
- Contrats Travail avec Nora / CT-05 (branche documentaire ML4D lorsque présente)
- As-built / code réel sur HEAD local `208aaa40` puis candidat `e224d627`

### Surfaces code inspectées puis modifiées

- `page.tsx` `reconcilePending` / `sendMessage` / hydrate
- `NoraConversation.tsx` bannière pending
- `thread-recovery.ts` `shouldClearThreadPending`
- `service.ts` / `turn-command.ts` idempotence
- `nora-adapter.ts` erreurs provider
- `observability.ts` META_ALLOWLIST

---

## 4. Cause et diagnostic de référence

### Symptômes R05 (Morris)

1. `Nora LIVE UNKNOWN` après demande composite.
2. « Réconcilier la tentative en cours » ne débloque pas ; bouton reste disponible.

### Preuves tours (diagnostic)

| | R05-A | R05-B |
|---|---|---|
| generationId | `gen_1d101079…` | `gen_d789f830…` |
| status | UNKNOWN | UNKNOWN |
| catégorie | PROVIDER_ERROR | PROVIDER_ERROR |
| providerContacted | YES | YES |
| streaming | delivered | delivered |
| tools | 2 | 2 |
| effet métier | aucun | aucun |
| replays reconcile | 2 | 9 |

### Cause reprise **démontrée**

`reconcilePending` → GET D7 by `clientCommandKey` → **404** → POST messages même `clientTurnKey` → replay idempotent UNKNOWN → `shouldClearThreadPending` ne clear que COMPLETE/FAILED sans métier → boucle UX.

### Cause fournisseur

Exception après contact/stream ; sous-type (`error_name="h"`) non établi. **Non corrigée** dans ce cycle (mandat).

---

## 5. Responsabilités et blast radius

| Zone | Impact |
|---|---|
| Politique pending client | Élargie aux terminaux cognitifs UNKNOWN/INTERRUPTED sans D7 |
| API lecture | Nouveau GET durable by `clientTurnKey` |
| UX reconcile / hydrate | Chemins de sortie + copy honnête |
| OBS | Métadonnées allowlistées supplémentaires |
| D3 génération / schéma / SDK version | **Inchangés** |
| D7 métier UNKNOWN | **Protégé** (pending conservé) |
| Données R05-A/B persistées | **Non réparées artificiellement** |
| Migration | **Aucune** |

---

## 6. Conception de la reprise retenue

Séparation stricte :

1. **Cognitif D3 terminal** UNKNOWN/FAILED/INTERRUPTED + absence d'effet métier confirmée → lever pending UI ; historique conservé ; brouillon conservé ; pas de `run()` ; message « non aboutie ».
2. **D7 UNKNOWN** (`effectAttempted === true` + status UNKNOWN) → pending métier conservé.
3. **RUNNING/ACCEPTED / non établi** → ne pas déclarer terminal ; protections conservées.

Décision de clear fondée sur **état serveur durable** (GET `turns/by-key` ou replay idempotent), pas sur un 404 D7 seul.

Invariants respectés : `clientTurnKey` ≠ `clientCommandKey` ; pas de second moteur d'idempotence ; pas de second `run()` en reconcile ; pas de duplication message ; pas d'effacement brouillon par ancienne réponse ; pas de contournement D3/D6/D7.

---

## 7. Diffs exploitables (fichiers modifiés)

Résumé `208aaa40..e224d627` : **13 files, +846 / −50**.

### `thread-recovery.ts` (diff commit)

```
commit e224d6278a050bcfbd369c4008d94af504f81d44
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 17 20:35:10 2026 +0100

    fix(nora): clear cognitive UNKNOWN pending without métier reconcile loop.

    Ground R05 recovery on durable D3 turn lookup, keep D7 UNKNOWN protected, and enrich provider OBS allowlisted diagnostics for the next incident.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index 898be26a..ae9c8dad 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -108,11 +108,28 @@ export function pendingStorageKey(projectId: string): string {
   return `sfia.thread.pending:${projectId}`;
 }

+/**
+ * Durable Nora conversational terminals that close a *cognitive* pending when
+ * no métier effect was attempted. UNKNOWN/INTERRUPTED are included so a verified
+ * D3 terminal without D7 does not trap the Pilot in a reconcile loop (R05).
+ * Métier UNKNOWN remains protected via `effectAttempted === true` below.
+ */
+export function isDurableCognitiveNoraTerminal(noraStatus?: string | null): boolean {
+  const nora = (noraStatus ?? "").trim().toUpperCase();
+  return (
+    nora === "COMPLETE" ||
+    nora === "FAILED" ||
+    nora === "UNKNOWN" ||
+    nora === "INTERRUPTED"
+  );
+}
+
 /**
  * Clear pending only when the business effect is terminal, or when no
  * business attempt occurred and Nora reached a conversational terminal.
  * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
  * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
+ * Cognitive UNKNOWN/INTERRUPTED without D7 effectAttempted MAY clear (R05 recovery).
  */
 export function shouldClearThreadPending(input: {
   noraStatus?: string | null;
@@ -127,8 +144,7 @@ export function shouldClearThreadPending(input: {
     if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;
     return true;
   }
-  const nora = (input.noraStatus ?? "").trim().toUpperCase();
-  return nora === "COMPLETE" || nora === "FAILED";
+  return isDurableCognitiveNoraTerminal(input.noraStatus);
 }

 /**

```

### `service.ts`

Ajout export `lookupDurableTurnByClientKey(pilotId, preparationId, clientTurnKey)` :

- READ-ONLY via `getPreparationContext` + select `conversation_turn_commands`
- Reconstitue `pilotageEffect` via `resolvePilotageEffectForReplay`
- `noraMode: "durable-lookup"` · `idempotentReplay: true`
- Jamais `reserveTurnCommand` / jamais Nora

### `page.tsx` (comportement)

- `applyCognitiveRecoveryFromDurable` : clear pending cognitif ; copy « Réponse Nora non aboutie… » ; draft non effacé sur UNKNOWN
- `reconcilePending` : (1) D7 by-key (2) GET durable by-key (3) POST replay ACK-only fallback
- Load hydrate : si pending session + lookup prouve terminal cognitif sans métier → `rememberPending(null)`
- `sendMessage` : UNKNOWN/INTERRUPTED cognitif clear → unfreeze ; métier UNKNOWN → freeze

### `NoraConversation.tsx`

- Copy : tentative non résolue + distinction cognitif vs métier
- Bouton label : **« Vérifier et reprendre »** (`data-testid=thread-reconcile-pending` inchangé)

### `nora-adapter.ts`

- `extractProviderErrorDiagnostics` (cause depth ≤4, codes allowlistés)
- Emission OBS stream error enrichie (`error_code`, `http_status`, `transport_kind`, `error_phase`, `streaming_delivered`, `cause_depth`, `tool_calls_observed`)
- Pas de changement `strict:false` / modèle / version SDK / retry

### `observability.ts`

META_ALLOWLIST += `error_code`, `http_status`, `transport_kind`, `error_phase`, `streaming_delivered`, `cause_depth`, `tool_calls_observed`, `found`, `effect_attempted`

### Tests

- Unit : R05 clear/no-clear + OBS redaction
- PG : seed UNKNOWN + lookup + replay sans second assistant
- E2E : hydrate clear + bouton (lookup 404 simulé au load puis continue)

### Docs

- `delivery-history.md` entrée DELIV R05
- `plan-retest-r05-arnaud.md` (créé puis pin SHA/BUILD en `a783f014`)

---

## 8. Contenu complet des fichiers créés

### 8.1 API route `turns/by-key/[clientTurnKey]/route.ts`

```typescript
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { lookupDurableTurnByClientKey } from "@/domains/conversation/service";
import { studioErrorResponse } from "@/lib/http-errors";
import { emitObs, newRequestId } from "@/lib/observability";

/**
 * GET — R05 cognitive recovery read path.
 * Returns durable turn status by clientTurnKey. Never mutates, never calls Nora.
 */
export async function GET(
  _: Request,
  ctx: { params: Promise<{ preparationId: string; clientTurnKey: string }> },
) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId, clientTurnKey } = await ctx.params;
    const decoded = decodeURIComponent(clientTurnKey);
    const result = await lookupDurableTurnByClientKey(
      session.pilotId,
      preparationId,
      decoded,
    );
    emitObs({
      event_name: "d3.turn.durable_lookup",
      component: "api.turns.by_key",
      request_id: requestId,
      operation_id: result.operationId ?? undefined,
      generation_id: result.generationId ?? undefined,
      outcome: result.found ? "SUCCESS" : "UNKNOWN",
      meta: {
        status: result.status,
        found: result.found,
        effect_attempted: Boolean(result.pilotageEffect?.attempted),
      },
    });
    if (!result.found) {
      return NextResponse.json(
        {
          found: false,
          status: null,
          pilotageEffect: null,
          requestId,
          errorCategory: "TURN_NOT_FOUND",
        },
        { status: 404 },
      );
    }
    return NextResponse.json({
      found: true,
      status: result.status,
      generationId: result.generationId,
      operationId: result.operationId,
      userMessageId: result.userMessageId,
      assistantMessageId: result.assistantMessageId,
      pilotageEffect: result.pilotageEffect,
      idempotentReplay: true,
      noraMode: result.noraMode,
      requestId,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.turns.by_key_error",
      component: "api.turns.by_key",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### 8.2 E2E `ensemble05-r05-cognitive-recovery.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * R05 — cognitive UNKNOWN recovery (FAKE/DEV :3101, no OpenAI).
 * Seeds a durable UNKNOWN turn without D7; verifies hydrate + reconcile button paths.
 */
test.describe("Ensemble 05 R05 cognitive UNKNOWN recovery", () => {
  test("hydrate clears durable cognitive UNKNOWN pending; draft preserved", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 R05 hydrate",
      name: `E05 R05 H ${Date.now()}`,
      summary: "r05 hydrate",
    });
    expect(preparationId).toBeTruthy();

    const seed = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown", preparationId },
    });
    expect(seed.ok(), await seed.text()).toBeTruthy();
    const seeded = await seed.json();
    const clientTurnKey = String(seeded.clientTurnKey);

    const lookup = await page.request.get(
      `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
    );
    expect(lookup.ok()).toBeTruthy();
    const durable = await lookup.json();
    expect(durable.status).toBe("UNKNOWN");
    expect(durable.pilotageEffect?.attempted ?? false).toBe(false);

    const draftText = `BROUILLON_R05_H_${Date.now()}`;
    await page.addInitScript(
      ({ pid, key, content, draft }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${pid}`,
          JSON.stringify({
            content,
            clientTurnKey: key,
            clientCommandKey: `conv-auth:${key}`,
            origin: "composer",
            projectId: pid,
          }),
        );
        // Draft key shape matches composer-draft helpers (best-effort; UI also fills after load).
        void draft;
      },
      {
        pid: projectId,
        key: clientTurnKey,
        content: "Acte A E2E S05 — en cours (seed fixture)",
        draft: draftText,
      },
    );

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await page.getByTestId("thread-draft").fill(draftText);
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0, { timeout: 20000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);
  });

  test("reconcile button clears pending when hydrate skipped; no provider loop", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 R05 button",
      name: `E05 R05 B ${Date.now()}`,
      summary: "r05 button",
    });
    expect(preparationId).toBeTruthy();

    const seed = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown", preparationId },
    });
    expect(seed.ok(), await seed.text()).toBeTruthy();
    const seeded = await seed.json();
    const clientTurnKey = String(seeded.clientTurnKey);

    // First by-key during load hydrate → 404 so pending stays; later clicks continue to real API.
    let byKeyHits = 0;
    await page.route(`**/api/preparations/${preparationId}/turns/by-key/**`, async (route) => {
      byKeyHits += 1;
      if (byKeyHits === 1) {
        await route.fulfill({
          status: 404,
          contentType: "application/json",
          body: JSON.stringify({ found: false, status: null, errorCategory: "TURN_NOT_FOUND" }),
        });
        return;
      }
      await route.continue();
    });

    await page.addInitScript(
      ({ pid, key, content }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${pid}`,
          JSON.stringify({
            content,
            clientTurnKey: key,
            clientCommandKey: `conv-auth:${key}`,
            origin: "composer",
            projectId: pid,
          }),
        );
      },
      {
        pid: projectId,
        key: clientTurnKey,
        content: "Acte A E2E S05 — en cours (seed fixture)",
      },
    );

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draftText = `BROUILLON_R05_B_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(draftText);
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await page.getByTestId("thread-reconcile-pending").click();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0, { timeout: 20000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);
    await expect(page.getByTestId("thread-nora-status")).toContainText(/non aboutie|UNKNOWN|durable/i, {
      timeout: 15000,
    });

    // Explicit new request still works (fixture — no OpenAI).
    await page.getByTestId("thread-draft").fill(`Suite après reprise ${Date.now()}`);
    await page.getByTestId("thread-send").click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
      timeout: 45000,
    });
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);
    await page.unrouteAll({ behavior: "ignoreErrors" });
  });
});

```

### 8.3 Plan retest Arnaud (tip `a783f014`)

Voir aussi §20 ; contenu intégral :

```markdown
# Plan de retest Ensemble 05 — destiné à Arnaud

**Produit :** SFIA Studio Next — Travail avec Nora
**Campagne :** Retest post-correctif R05 (reprise cognitive UNKNOWN)
**Autorité de validation :** Morris
**Exécutant retest :** Arnaud (si distinct) / Morris
**Date du plan :** 2026-11-17

## Identité runtime (à confirmer sur la machine hôte)

| Champ | Valeur attendue après déploiement |
|---|---|
| URL locale | `http://127.0.0.1:3200` |
| Accès | Uniquement sur la machine qui héberge RECETTE — **pas** accessible depuis un autre ordinateur sans tunnel (aucun tunnel autorisé ici) |
| SOURCE_SHA | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| BUILD_ID | `MKmBUvdIXyydv_DpUTGZi` |
| Lane | RECETTE |
| Fixture Nora forcée | NON (`STUDIO_FORCE_NORA_FIXTURE` unset) |
| STABLE | NOT AVAILABLE |

Si Arnaud n’a pas accès physique/écran partagé à la machine hôte, transmettre ce plan à Morris pour exécution ou partage d’écran — ne pas inventer d’URL publique.

## Prérequis d’accès

1. Compte Pilote local autorisé sur RECETTE.
2. Projet **Intervencia** (ou projet de campagne E05) accessible.
3. Surface **Travail avec Nora**.
4. Aucune migration / purge demandée.
5. Pour le test 4 (nouvelle génération LIVE) : **GO REAL distinct** Morris — Cursor ne l’exécute pas.

## Réserves reportées (ne pas les « fermer » par ce retest)

- R01–R02 : PASS visuel antérieur.
- R03 : PASS avec réserve de richesse UX.
- R04 : lisibilité des diagrammes / relations insuffisante — **non corrigée** par R05.
- R05 : incident fournisseur + boucle de reprise — objet de ce retest pour la **reprise** ; l’exception fournisseur n’est pas garantie corrigée.
- R06–R08 : non réceptionnés.
- Option A D3 `strict:false` conservée.

## Séquence de retest

Pour chaque ligne : résultat `PASS` / `PASS AVEC RÉSERVE` / `FAIL` / `BLOQUÉ` / `NON TESTÉ`.

| # | Test | Instructions | Attendu | Preuves | Résultat |
|---|---|---|---|---|---|
| 1 | Relecture anciens R05 UNKNOWN | Ouvrir Intervencia → Travail. Localiser les messages assistant UNKNOWN (placeholders « Nora LIVE UNKNOWN… »). Ne pas cliquer d’effet métier. | Historique conservé ; aucun résultat fictif inventé ; pas de disparition des tours. | Capture fil + note IDs visibles | |
| 2 | Sortie de reprise cognitive | Si bannière « Vérifier et reprendre » : cliquer **une fois**. Sinon recharger la page (hydrate). Préférer données contrôlées ; **ne pas** provoquer volontairement un incident fournisseur. | Bannière disparaît si tour cognitif UNKNOWN sans effet métier ; **pas** de nouvel appel OpenAI induit ; message « non aboutie » / formulation nouvelle possible. | Capture avant/après ; horodatage | |
| 3 | Conservation du brouillon | Saisir un brouillon libre avant reprise / navigation / refresh. | Brouillon intact après reprise, nav Documents↔Travail, refresh. | Capture composer | |
| 4 | Nouvelle demande composite R05 | **Uniquement avec GO REAL Morris.** Reformuler la demande composite portail (600 collab., 6 sites, B/C…). | Réponse exploitable **ou** échec honnête sans boucle de réconciliation. | Capture réponse / statut | |
| 5 | Persistense après refresh | Si test 4 a produit COMPLETE : refresh + retour projet. | Composition / texte persistés. | Capture post-refresh | |
| 6 | Non-régression R01–R03 | Demandes simples / analytiques / comparaison légères (LIVE seulement si GO). | Restitutions cohérentes. | Notes courtes | |
| 7 | Réserve R04 | Observer un diagramme de relations si présent. | Confirmer réserve de lisibilité **sans** présumer correction. | Capture | |
| 8 | R06–R08 | Selon protocole E05 si 1–5 OK. | Suivre protocole ; ne pas clôturer E05. | Checklist E05 | |

## Conditions d’arrêt

- FAIL sur test 2 (boucle reprise toujours présente).
- Disparition / corruption d’historique R05.
- Effet métier déclenché sans intention.
- Indisponibilité RECETTE / identité SHA/BUILD incohérente.

## Remontée d’anomalies

1. Noter date/heure UTC, URL, SOURCE_SHA/BUILD_ID affichés ou fournis.
2. Captures + texte d’erreur UI (sans coller de secrets).
3. Remonter à Morris (autorité) ; Arnaud ne clôture pas E05 ni Gate C.

## Gate de décision Morris

- Retest PASS → poursuivre UAT E05 / éventuel GO REAL pour test 4.
- PASS AVEC RÉSERVE → documenter ; R04 reste ouverte.
- FAIL reprise → nouveau diagnostic / correctif.
- E05 / Gate C : **non fermés** par ce plan.

```

---

## 9. Résultats des tests

| Suite | Commande / cible | DB | Résultat |
|---|---|---|---|
| Unit CR-02 + R05 pending | `vitest` `ml3-b13-divergence.test.ts` | DEV `:5433` | inclus dans 36 PASS |
| Unit OBS / no second run | `vitest` `nora-adapter-corrective.test.ts` | DEV `:5433` | inclus dans 36 PASS |
| **Total unit ciblés** | deux fichiers ci-dessus | | **36 PASS** |
| Intégration PG | `ml2-turn-command.pg.test.ts` | DEV `:5433` | **4 PASS** |
| Playwright R05 | `ensemble05-r05-cognitive-recovery.spec.ts` | E2E `:3101` FAKE | **2 PASS** |
| ESLint touched | fichiers correctif | — | **0 error** (warnings préexistants) |
| TypeScript | `tsc --noEmit` | — | **32** globales préexistantes ; **0** sources touchées |
| Next build | `npm run build` (DEV + worktree RECETTE) | — | **PASS** · BUILD_ID RECETTE `MKmBUvdIXyydv_DpUTGZi` |

Aucun test déclaré PASS sans exécution.

---

## 10. Contrôle des régressions métier

| Scénario | Attendu | Preuve |
|---|---|---|
| D7 UNKNOWN + effectAttempted | pending **conservé** | unit `ml3-b13` |
| COMPLETE sans métier | clear (inchangé) | unit |
| preserveUnresolvedMetierPending | no clear | unit |
| Replay même clientTurnKey | pas de 2e assistant / pas de provider | PG |
| Absence business_command cognitif | lookup status UNKNOWN, effect non attempted | PG + API |
| E2E métier ACK loss existants | testids reconcile inchangés | non cassés par label |

---

## 11. Tests de redaction des erreurs

- `extractProviderErrorDiagnostics` : cause imbriquée `APIError` / 429 / `rate_limit_exceeded` ; **aucune** fuite `sk-…` ni message brut dans JSON diag.
- `redactDeep` : `authorization` / `SYNTH_SECRET_PROBE…` → `[REDACTED…]`.
- Catégories `PROVIDER_*` existantes non régressées (`categorizeProviderError`).

Limite documentée : `error.message` brut **non** persisté (non démontrablement expurgeable systématiquement) — codes allowlistés uniquement.

---

## 12. TypeScript — baseline / delta

| Mesure | Valeur |
|---|---|
| Erreurs globales `tsc` | **32** (baseline historique tests/intégration) |
| Erreurs sur sources touchées après correctif | **0** |
| Incident introduit puis corrigé | TDZ `toolCallsObserved` dans catch stream → formule budget locale |

`tsc` global **non** présenté comme PASS.

---

## 13. Build et SHAs

| Artefact | Valeur |
|---|---|
| Commit code (runtime) | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| Tree code | `509c459ca6a9be4a5f9ff28615e778aa6b344cc0` |
| Message | `fix(nora): clear cognitive UNKNOWN pending without métier reconcile loop.` |
| Commit docs pin | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| Tree tip | `a0c89cef5d28a6931cba0ca6183359a9112f0f79` |
| BUILD_ID servi RECETTE | `MKmBUvdIXyydv_DpUTGZi` |
| Worktree build isolé | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-e224d627` |

---

## 14. Gate de déploiement §9

**PASS — bascule autorisée et exécutée.**

Conditions vérifiées : cause/fix reprise ; tests unit/PG/e2e PASS ; build PASS ; pas de nouvelle erreur tsc/lint imputable ; pas de migration ; pas d'OpenAI ; docs synchronisées ; SHA figé ; ENV-01 ; rollback prêt.

---

## 15. État RECETTE avant / après

| Champ | Avant | Après |
|---|---|---|
| SOURCE_SHA | `208aaa40…` | `e224d627…` |
| BUILD_ID HTML | `_xkrsw46qX4QKUC0bBU8i` | `MKmBUvdIXyydv_DpUTGZi` |
| Worktree | `…-208aaa40` | `…-e224d627` |
| PID next | 48321 | 95746 |
| LaunchAgent program | `start-recette-ensemble05-208aaa40.sh` | `start-recette-ensemble05-e224d627.sh` |
| Fixture forcée | unset | unset |

---

## 16. Sauvegarde et rollback

| Élément | Chemin |
|---|---|
| Backup plist pre-cutover | `/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-e224d627/` |
| Script rollback | `…/ensemble05-recette-build-e224d627/ROLLBACK-TO-208aaa40.sh` |
| Ancien runtime | **intact** `…-208aaa40` |
| Manifest | `…-e224d627/DEPLOY-MANIFEST-E05-R05-e224d627.md` |

Rollback non exécuté (cutover OK).

---

## 17. Preuves de runtime servi

- HTML login : `<!--MKmBUvdIXyydv_DpUTGZi-->`
- `lsof` : `node` listen `127.0.0.1:3200`
- CWD process : `…/e224d627/projects/sfia-studio-next/web`
- Route nouvelle : `GET …/turns/by-key/…` → **401** sans session (route présente, auth fail-closed)
- Login HTTP **200**

---

## 18. Données avant / après

| Métrique | Avant | Après |
|---|---|---|
| projects | 22 | 22 |
| documents | 117 | 117 |
| messages | 526 | 526 |
| turn_commands | 263 | 263 |
| R05-A UNKNOWN row | 1 | 1 |
| R05-B UNKNOWN row | 1 | 1 |

Aucune purge / update de statut incident.

---

## 19. Fake / Real Qualification

| Item | Qualification |
|---|---|
| Correctif reprise + tests déterministes | **REAL** |
| OBS diagnostics allowlist | **REAL** (unit) |
| Déploiement RECETTE | **REAL** |
| Smoke post-deploy | **REAL** non-LIVE |
| Appel OpenAI post-fix | **NOT EXECUTED** |
| Correction cause fournisseur R05 | **NOT CLAIMED** |
| E05 / Gate C | **OUVERTS** |

---

## 20. Plan de recette complet destiné à Arnaud

Contenu intégral du livrable (également dans le repo candidat) :

```markdown
# Plan de retest Ensemble 05 — destiné à Arnaud

**Produit :** SFIA Studio Next — Travail avec Nora
**Campagne :** Retest post-correctif R05 (reprise cognitive UNKNOWN)
**Autorité de validation :** Morris
**Exécutant retest :** Arnaud (si distinct) / Morris
**Date du plan :** 2026-11-17

## Identité runtime (à confirmer sur la machine hôte)

| Champ | Valeur attendue après déploiement |
|---|---|
| URL locale | `http://127.0.0.1:3200` |
| Accès | Uniquement sur la machine qui héberge RECETTE — **pas** accessible depuis un autre ordinateur sans tunnel (aucun tunnel autorisé ici) |
| SOURCE_SHA | `e224d6278a050bcfbd369c4008d94af504f81d44` |
| BUILD_ID | `MKmBUvdIXyydv_DpUTGZi` |
| Lane | RECETTE |
| Fixture Nora forcée | NON (`STUDIO_FORCE_NORA_FIXTURE` unset) |
| STABLE | NOT AVAILABLE |

Si Arnaud n’a pas accès physique/écran partagé à la machine hôte, transmettre ce plan à Morris pour exécution ou partage d’écran — ne pas inventer d’URL publique.

## Prérequis d’accès

1. Compte Pilote local autorisé sur RECETTE.
2. Projet **Intervencia** (ou projet de campagne E05) accessible.
3. Surface **Travail avec Nora**.
4. Aucune migration / purge demandée.
5. Pour le test 4 (nouvelle génération LIVE) : **GO REAL distinct** Morris — Cursor ne l’exécute pas.

## Réserves reportées (ne pas les « fermer » par ce retest)

- R01–R02 : PASS visuel antérieur.
- R03 : PASS avec réserve de richesse UX.
- R04 : lisibilité des diagrammes / relations insuffisante — **non corrigée** par R05.
- R05 : incident fournisseur + boucle de reprise — objet de ce retest pour la **reprise** ; l’exception fournisseur n’est pas garantie corrigée.
- R06–R08 : non réceptionnés.
- Option A D3 `strict:false` conservée.

## Séquence de retest

Pour chaque ligne : résultat `PASS` / `PASS AVEC RÉSERVE` / `FAIL` / `BLOQUÉ` / `NON TESTÉ`.

| # | Test | Instructions | Attendu | Preuves | Résultat |
|---|---|---|---|---|---|
| 1 | Relecture anciens R05 UNKNOWN | Ouvrir Intervencia → Travail. Localiser les messages assistant UNKNOWN (placeholders « Nora LIVE UNKNOWN… »). Ne pas cliquer d’effet métier. | Historique conservé ; aucun résultat fictif inventé ; pas de disparition des tours. | Capture fil + note IDs visibles | |
| 2 | Sortie de reprise cognitive | Si bannière « Vérifier et reprendre » : cliquer **une fois**. Sinon recharger la page (hydrate). Préférer données contrôlées ; **ne pas** provoquer volontairement un incident fournisseur. | Bannière disparaît si tour cognitif UNKNOWN sans effet métier ; **pas** de nouvel appel OpenAI induit ; message « non aboutie » / formulation nouvelle possible. | Capture avant/après ; horodatage | |
| 3 | Conservation du brouillon | Saisir un brouillon libre avant reprise / navigation / refresh. | Brouillon intact après reprise, nav Documents↔Travail, refresh. | Capture composer | |
| 4 | Nouvelle demande composite R05 | **Uniquement avec GO REAL Morris.** Reformuler la demande composite portail (600 collab., 6 sites, B/C…). | Réponse exploitable **ou** échec honnête sans boucle de réconciliation. | Capture réponse / statut | |
| 5 | Persistense après refresh | Si test 4 a produit COMPLETE : refresh + retour projet. | Composition / texte persistés. | Capture post-refresh | |
| 6 | Non-régression R01–R03 | Demandes simples / analytiques / comparaison légères (LIVE seulement si GO). | Restitutions cohérentes. | Notes courtes | |
| 7 | Réserve R04 | Observer un diagramme de relations si présent. | Confirmer réserve de lisibilité **sans** présumer correction. | Capture | |
| 8 | R06–R08 | Selon protocole E05 si 1–5 OK. | Suivre protocole ; ne pas clôturer E05. | Checklist E05 | |

## Conditions d’arrêt

- FAIL sur test 2 (boucle reprise toujours présente).
- Disparition / corruption d’historique R05.
- Effet métier déclenché sans intention.
- Indisponibilité RECETTE / identité SHA/BUILD incohérente.

## Remontée d’anomalies

1. Noter date/heure UTC, URL, SOURCE_SHA/BUILD_ID affichés ou fournis.
2. Captures + texte d’erreur UI (sans coller de secrets).
3. Remonter à Morris (autorité) ; Arnaud ne clôture pas E05 ni Gate C.

## Gate de décision Morris

- Retest PASS → poursuivre UAT E05 / éventuel GO REAL pour test 4.
- PASS AVEC RÉSERVE → documenter ; R04 reste ouverte.
- FAIL reprise → nouveau diagnostic / correctif.
- E05 / Gate C : **non fermés** par ce plan.

```

**Modalités de transmission :** plan prêt pour Morris → Arnaud. `127.0.0.1:3200` n'est **pas** une URL distante. Aucun tunnel / port exposé créé.

---

## 21. Réserves conservées

- R01 : PASS visuel
- R02 : PASS visuel
- R03 : PASS avec réserve richesse UX
- R04 : lisibilité diagrammes / relations — **non corrigée** par R05
- R05 : reprise corrigée à retester ; exception fournisseur non garantie disparue
- R06–R08 : non réceptionnés
- Option A D3 `strict:false` conservée

---

## 22. Décisions restant à Morris

1. Faire exécuter le plan retest 1–3 (reprise / brouillon) par Arnaud ou soi-même sur la machine hôte.
2. Émettre un **GO REAL distinct** pour le test 4 (composite LIVE) si souhaité.
3. Ne pas clôturer E05 / Gate C sur ce seul cycle.
4. Push produit / PR / merge : **non autorisés** ici (toujours).
5. Si FAIL retest reprise → nouveau cycle diagnostic/correctif.

---

## 23. Verdict unique

### `R05 RECOVERY FIX VERIFIED — RECETTE DEPLOYED — USER RETEST READY`

**Republication :** handoff Full complet pour ChatGPT — remplace la synthèse courte précédente sur `sfia/review-handoff`.

**Identifiants runtime à retenir :**

- SOURCE_SHA runtime : `e224d6278a050bcfbd369c4008d94af504f81d44`
- BUILD_ID : `MKmBUvdIXyydv_DpUTGZi`
- URL : `http://127.0.0.1:3200`
- Tip branche docs : `a783f014935de0dec5ff8e79a2b18eea0e629756`
