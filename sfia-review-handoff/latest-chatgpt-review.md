# JOURNAL V4 — CYCLE 4 §5 + LIVE PARTIAL — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 11:05:13 CET
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD** : `d5bf7eb762a21cc309744bb703926e2c0bc844ed`
- **HEAD précédent** : `a122bf27fa46ede3300474217bc57c27cd1e496d`
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Docs remote matrice v0.3** : `c3f1254c15bc6de72b92d706e9dedb3981b4e5dd`
- **Handoff précédent** : `9d56e6a5`
- **Versioning** : NO RELEASE
- **Push projet** : NON
- **VISUAL REVIEW** : PENDING MORRIS — RECETTE
- **LIVE** : 1/20 (E01) puis STOP opérateur

## 1. Git Truth Check
```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/

```
```
d5bf7eb7 fix(next): Journal §5 oracle proofs and partial CampusFlow LIVE harness
a122bf27 fix(next): resolve Journal E06-01..06 security, honesty and seeded BROWSER proofs
782c93ec feat(next): complete Journal V4 J-C04/06/13/14 and BROWSER proofs locally

```
### Diff stat cycle 4
```
 .../as-built-ensemble-06-journal-20261119.md       |  69 ++--
 .../construction/delivery-history.md               |  15 +
 .../web/playwright.journal-live.config.ts          |  25 ++
 .../web/src/app/projects/[projectId]/page.tsx      |  30 +-
 .../web/src/components/figma/ProjectJournal.tsx    |   4 +-
 .../web/src/domains/knowledge/journal-e2e-seed.ts  |  44 ++-
 .../tests/e2e/journal-nora-live-campusflow.spec.ts | 397 +++++++++++++++++++++
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |  82 +++--
 .../integration/journal-d4-revisions.pg.test.ts    | 118 ++++++
 .../web/tests/unit/ml4c-e2e-fixture-gate.test.ts   |  20 ++
 10 files changed, 730 insertions(+), 74 deletions(-)

```
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/web/playwright.journal-live.config.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
A	projects/sfia-studio-next/web/tests/e2e/journal-nora-live-campusflow.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
M	projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts

```

## 2. §5 — corrections oracles

| ID | Correction | Preuve |
|---|---|---|
| J-C08 | Titre sans traçabilité ; badge acquis | BROWSER PASS |
| J-C11 | Token explication multicritèreorion ; UI sans kind | PG+BROWSER PASS |
| J-C13 | Retour rail ; search/filtre/layout | BROWSER PASS |
| J-C14 | viewerOpenRef + clic source → révision exacte | BROWSER PASS |
| J-C07 | Deux preps même projet | PG PASS |
| J-C05 | Révision non AVAILABLE refusée | PG PASS |
| J-C16 | Gate journal-fixture | UNIT PASS ; ML3 PG 49 PASS ; ML2/E05 full NOT RUN |

## 3. LIVE CampusFlow

- Projet : `CampusFlow — Test LIVE Journal 1795081865484`
- projectId : `proj_8446c400-7a89-4c07-a520-a7f83abb966d`
- preparationId : `prep_39cad99e-97c5-4d74-bd56-89fd4046906b`
- Provider proof : `['E01:Nora openai-agents-sdk-live · COMPLETE']`
- Tours complétés : **1/20 (E01)**
- E02–E20 / T10 / T20 : **NOT RUN — STOP opérateur**
- Coût estimé E01 : ~0.35 USD (fallback) ; plafond 10 USD
- Latence E01 : ~647537 ms

### Journal T0
```json
{
  "at": "2026-11-19T09:51:13.565Z",
  "label": "T0",
  "subjectCount": 0,
  "subjectTitles": [],
  "acquisCount": 0,
  "openPointCount": 0,
  "decisionCount": 0,
  "searchEmpty": true,
  "raw": {
    "preparationIds": [
      "prep_39cad99e-97c5-4d74-bd56-89fd4046906b"
    ],
    "contradictionCount": 0,
    "restrictionCount": 0
  }
}
```

### Tour E01 (extrait + archive locale)
- statusText : `Nora openai-agents-sdk-live · COMPLETE`
- modeLive : `True`
- fixtureLeak : `False`
- assistantMessageId : `msg_ff61f7d5-867f-4fd9-8eb3-f5aba10b60aa`
- excerpt : N NORA COMPLETE CampusFlow — premier cadrage Vous souhaitez structurer un projet fictif de réservation de salles de formation. Nous pouvons commencer par préciser le service rendu, puis délimiter une première version réaliste. 1. Problème à résoudre Hypothèse à valider : les utilisateurs ont besoin de trouver une salle adaptée et disponible, puis de la réserver sans conflit de créneau. La valeur attendue pourrait être de réduire les échanges manuels, les doubles réservations et le manque de visibilité sur les disponibilités. Ce sont des pistes, pas encore des objectifs arrêtés. 2. Utilisateurs et responsabilités Les rôles possibles à confirmer sont : Demandeur : recherche une salle et gère ses réservations. Gestionnaire : tient à jour les salles, leurs équipements et leurs indisponibilités. Validateur, uniquement si une réservation nécessite un accord. 3. Première version proposée Recomm

Archive locale : `projects/sfia-studio-next/.tmp-sfia-review/journal-live-campusflow-20261119/`

```markdown
# E01

## Pilote

Je souhaite lancer CampusFlow, un projet fictif de réservation de salles de formation. Aide-moi à structurer ce projet.

## Nora

N
NORA
COMPLETE
CampusFlow — premier cadrage

Vous souhaitez structurer un projet fictif de réservation de salles de formation. Nous pouvons commencer par préciser le service rendu, puis délimiter une première version réaliste.

1. Problème à résoudre

Hypothèse à valider : les utilisateurs ont besoin de trouver une salle adaptée et disponible, puis de la réserver sans conflit de créneau.

La valeur attendue pourrait être de réduire les échanges manuels, les doubles réservations et le manque de visibilité sur les disponibilités. Ce sont des pistes, pas encore des objectifs arrêtés.

2. Utilisateurs et responsabilités

Les rôles possibles à confirmer sont :

Demandeur : recherche une salle et gère ses réservations.
Gestionnaire : tient à jour les salles, leurs équipements et leurs indisponibilités.
Validateur, uniquement si une réservation nécessite un accord.
3. Première version proposée

Recommandation conditionnelle : si l’objectif est de construire un premier service simple à démontrer, limiter le périmètre à :

consulter les salles et leurs caractéristiques : capacité, localisation, équipements ;
visualiser les disponibilités par créneau ;
réserver une salle disponible ;
consulter et annuler ses réservations ;
empêcher deux réservations confirmées de se chevaucher pour une même salle.

Les réservations récurrentes, les notifications et les intégrations à des calendriers externes pourraient rester hors de cette première version, sauf besoin central.

4. Règles à préciser

Le fonctionnement dépendra notamment des horaires d’ouverture, des droits de réservation, des éventuelles validations et des conditions d’annulation.

Exemple de critère de réussite à discuter : un utilisateur trouve une salle correspondant à ses besoins et obtient une réservation, sans conflit de disponibilité.

Pour adapter ce cadrage
Qui réserve ? Formateurs, équipes administratives, apprenants, ou plusieurs de ces publics ?
La réservation est-elle immédiate ou soumise à validation ?
Quel résultat visez-vous pour cet exercice fictif ? Un cadrage fonctionnel, une maquette ou un prototype utilisable ?

Ces trois réponses suffiront pour préciser le périmètre et le parcours principal sans entrer trop tôt dans les choix techniques.

## Meta

- status: Nora openai-agents-sdk-live · COMPLETE
- live: true
- durationMs: 647537
```

## 4. Matrice cognitive C1–C14 (LIVE partiel)

| Critère | Note | Observation |
|---|---|---|
| C1 | PASS OBSERVÉ | E01 cadrage CampusFlow sans décision inventée |
| C2 | NOT OBSERVED | sujets D4 non encore capitalisés (T0 vide ; stop avant T10) |
| C3 | PARTIAL | E01 synthèse éditoriale ; pas de preuve D4 persistée observée |
| C4 | NOT OBSERVED | stop avant multi-échanges |
| C5 | PARTIAL | E01 distingue hypothèse/recommandation ; D6 non officialisé |
| C6 | NOT OBSERVED | corrections budget E15/16 non jouées |
| C7 | NOT OBSERVED | contradiction formateurs E13 non jouée |
| C8 | NOT OBSERVED | E18 non joué |
| C9 | NOT OBSERVED | reprise mid-campaign non atteinte |
| C10 | FAILED / NOT PROVEN | Journal toujours vide à T0 ; pas de T10/T20 |
| C11 | NOT APPLICABLE — JUSTIFIÉ | aucun acte D6 confirmé |
| C12 | PASS OBSERVÉ | E01 n’invente pas de preuve SSO/doc |
| C13 | PARTIAL | cadrage utile au Pilote sur E01 seul |
| C14 | PARTIAL | latence E01 ~647s — coût/latence élevés |

## 5. Matrice J-C01..J-C16

| ID | Code | Test | Limite |
|---|---|---|---|
| J-C01 | IMPLEMENTED | PG mem | LIVE synthèse D3 NOT PROVEN |
| J-C02 | IMPLEMENTED | PG homonym/reparent | LIVE organisation NOT PROVEN |
| J-C03 | IMPLEMENTED | BROWSER subject | — |
| J-C04 | IMPLEMENTED | PG reactivation | LIVE spontanéité NOT PROVEN |
| J-C05 | IMPLEMENTED | PG withdrawn revision | pertinence sémantique NOT PROVEN |
| J-C06 | IMPLEMENTED | UNIT UNVERIFIED | REAL Git NOT PROVEN |
| J-C07 | IMPLEMENTED | PG two-prep | — |
| J-C08 | IMPLEMENTED | BROWSER acquis-only | oracle faux positif corrigé |
| J-C09 | IMPLEMENTED | BROWSER decision | historique BROWSER PARTIAL |
| J-C10 | PARTIAL | PG explanation | LIVE reconstruction NOT PROVEN |
| J-C11 | IMPLEMENTED | PG+BROWSER explanation | — |
| J-C12 | IMPLEMENTED | BROWSER 40/60 | VISUAL PENDING MORRIS |
| J-C13 | IMPLEMENTED | BROWSER rail restore | — |
| J-C14 | IMPLEMENTED | BROWSER exact revision click | — |
| J-C15 | IMPLEMENTED | PG scope | perf long-thread PARTIAL |
| J-C16 | PARTIAL | tsc/lint/build+Journal+ML3 | ML2/ML4C/E05 full NOT RUN |

## 6. Tests exécutés
```
tsc --noEmit → PASS
npm run lint → PASS (warnings préexistants)
next build → PASS
vitest journal-cognition + ml4c-e2e-fixture-gate → PASS
vitest journal-d4-revisions.pg → 15/15 PASS
vitest ml3-pilotage.pg → 49/49 PASS
playwright journal-v4-parcours → 2/2 PASS
playwright journal-nora-live-campusflow → PARTIAL 1/20 puis STOP
ML2 / ML4C / E05 full → NOT RUN
```

## 7. Fake/Real
| Frontière | Niveau |
|---|---|
| PG/API/BROWSER DEV déterministe | DETERMINISTIC PROVEN |
| OpenAI via Nora E01 | REAL BOUNDARY PROVEN (1 tour) |
| E2E Nora/Journal 20 tours | NOT PROVEN (STOP) |
| REAL Git | NOT PROVEN |
| Visual Morris RECETTE | PENDING |

## 8. Contenu créé — FULL
### CREATE `projects/sfia-studio-next/web/tests/e2e/journal-nora-live-campusflow.spec.ts` (397 lines)
```typescript
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import {
  openNewPreparation,
  constituteAndCreateProject,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 — CampusFlow LIVE Nora 20-turn qualification (GO Morris DEV).
 * Real product path: UI → POST /api/preparations/:id/messages → generateNoraReply → OpenAI.
 * Never seeds Journal via journal-e2e-seed. Never calls OpenAI outside Nora.
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../../.tmp-sfia-review/journal-live-campusflow-20261119",
);

const USD_IN_PER_M = 2.0;
const USD_OUT_PER_M = 10.0;
const CEILING_USD = 10.0;
const RESERVE_USD = 0.6;
const FALLBACK_USD = 0.35;

const TURNS: { id: string; prompt: string }[] = [
  {
    id: "E01",
    prompt:
      "Je souhaite lancer CampusFlow, un projet fictif de réservation de salles de formation. Aide-moi à structurer ce projet.",
  },
  {
    id: "E02",
    prompt:
      "L'objectif est de permettre aux équipes de réserver facilement des salles sur plusieurs sites, avec une visibilité sur les disponibilités.",
  },
  {
    id: "E03",
    prompt:
      "Pour le pilote, on envisage trois sites fictifs : Site Nord, Site Centre et Site Sud.",
  },
  {
    id: "E04",
    prompt:
      "Au départ, l'accès serait réservé aux collaborateurs internes. Il faudra préciser les profils.",
  },
  {
    id: "E05",
    prompt:
      "Le parcours de réservation est important. On souhaite quelque chose de simple, sans validation manuelle systématique.",
  },
  {
    id: "E06",
    prompt:
      "Il faudra éviter les doubles réservations. On n'a pas encore défini le mécanisme.",
  },
  {
    id: "E07",
    prompt:
      "La connexion au système d'identité est encore incertaine. On hésite entre une intégration SSO et un accès dédié.",
  },
  {
    id: "E08",
    prompt:
      "Le SSO semble préférable, mais nous n'avons pas encore de confirmation technique.",
  },
  {
    id: "E09",
    prompt:
      "Il y a aussi un sujet sur la gestion des équipements des salles, distinct de la réservation proprement dite.",
  },
  {
    id: "E10",
    prompt:
      "Peux-tu me faire un premier bilan du projet : ce qui est acquis, ce qui reste ouvert et les grands sujets identifiés ?",
  },
  {
    id: "E11",
    prompt:
      "Pour la première version, nous hésitons entre un outil existant et une solution développée en interne. Quels critères permettraient de choisir ?",
  },
  {
    id: "E12",
    prompt:
      "Je privilégie une solution existante pour limiter le délai, mais ce n'est pas encore un arbitrage officiel.",
  },
  {
    id: "E13",
    prompt:
      "Correction : les formateurs externes devraient aussi pouvoir réserver certaines salles. Cela remet en question le périmètre initial limité aux collaborateurs.",
  },
  {
    id: "E14",
    prompt:
      "Qu'est-ce que ce changement implique pour le parcours de réservation et la gestion des accès ?",
  },
  {
    id: "E15",
    prompt:
      "Une première estimation évoquait 40 000 euros, mais ce chiffre n'est pas encore confirmé.",
  },
  {
    id: "E16",
    prompt:
      "Finalement, l'enveloppe cible envisagée est de 30 000 euros. Il faudra encore la faire valider.",
  },
  {
    id: "E17",
    prompt:
      "Je souhaite retenir un pilote limité aux deux premiers sites pour commencer. Aide-moi à préparer cet arbitrage, sans considérer qu'il est officiel tant que je ne l'ai pas validé.",
  },
  {
    id: "E18",
    prompt:
      "Nous préparons maintenant le lancement du pilote. Est-ce qu'il reste des questions importantes que nous aurions laissées de côté dans nos échanges ?",
  },
  {
    id: "E19",
    prompt:
      "J'ai entendu dire que l'intégration SSO serait possible, mais je n'ai pas encore de document ni de confirmation officielle.",
  },
  {
    id: "E20",
    prompt:
      "Fais-moi un bilan structuré du projet : les sujets, les acquis, les décisions officielles éventuelles, les hypothèses, les questions ouvertes et les prochains arbitrages à préparer.",
  },
];

type TurnRow = {
  id: string;
  startedAt: string;
  durationMs: number;
  statusText: string;
  modeLive: boolean;
  fixtureLeak: boolean;
  simLeak: boolean;
  userMessageId: string | null;
  assistantMessageId: string | null;
  excerpt: string;
  estimatedUsd: number;
  cumulativeUsd: number;
};

type JournalSnapshot = {
  at: string;
  label: "T0" | "T10" | "T20";
  subjectCount: number;
  subjectTitles: string[];
  acquisCount: number;
  openPointCount: number;
  decisionCount: number;
  searchEmpty: boolean;
  raw?: unknown;
};

function estimateUsd(inputTokens?: number, outputTokens?: number): number {
  if (inputTokens == null || outputTokens == null) return FALLBACK_USD;
  return (inputTokens / 1e6) * USD_IN_PER_M + (outputTokens / 1e6) * USD_OUT_PER_M;
}

async function captureJournal(
  page: import("@playwright/test").Page,
  projectId: string,
  label: JournalSnapshot["label"],
): Promise<JournalSnapshot> {
  await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
  await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
  const api = await page.request.get(`/api/projects/${projectId}/journal`);
  const body = api.ok() ? await api.json() : { error: await api.text(), status: api.status() };
  const subjects = Array.isArray(body?.knowledge?.subjects)
    ? body.knowledge.subjects
    : Array.isArray(body?.subjects)
      ? body.subjects
      : [];
  const acquis = Array.isArray(body?.knowledge?.acquis)
    ? body.knowledge.acquis
    : Array.isArray(body?.acquis)
      ? body.acquis
      : [];
  const openPoints = Array.isArray(body?.knowledge?.openPoints)
    ? body.knowledge.openPoints
    : Array.isArray(body?.openPoints)
      ? body.openPoints
      : [];
  const decisions = Array.isArray(body?.decisions) ? body.decisions : [];
  const titles = subjects.map((s: { title?: string }) => String(s.title ?? "")).filter(Boolean);
  const shot = path.join(EVIDENCE, `journal-${label.toLowerCase()}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  const snap: JournalSnapshot = {
    at: new Date().toISOString(),
    label,
    subjectCount: subjects.length,
    subjectTitles: titles,
    acquisCount: acquis.filter((a: { status?: string }) => a.status === "CURRENT").length,
    openPointCount: openPoints.filter((o: { status?: string }) => o.status === "OPEN").length,
    decisionCount: decisions.length,
    searchEmpty: subjects.length === 0 && acquis.length === 0,
    raw: {
      status: body?.status,
      preparationIds: body?.knowledge?.preparationIds ?? body?.preparationIds,
      contradictionCount: Array.isArray(body?.contradictions) ? body.contradictions.length : 0,
      restrictionCount: Array.isArray(body?.restrictions) ? body.restrictions.length : 0,
    },
  };
  fs.writeFileSync(path.join(EVIDENCE, `journal-${label.toLowerCase()}.json`), JSON.stringify(snap, null, 2));
  return snap;
}

test.describe("Journal V4 — CampusFlow LIVE Nora 20-turn", () => {
  test("LIVE 20 échanges + Journal T0/T10/T20", async ({ page }) => {
    test.skip(
      process.env.STUDIO_ALLOW_LIVE_BOUNDED !== "1" || !process.env.OPENAI_API_KEY,
      "requires STUDIO_ALLOW_LIVE_BOUNDED=1 and OPENAI_API_KEY",
    );
    test.setTimeout(1_200_000);
    fs.mkdirSync(EVIDENCE, { recursive: true });

    const ledger: {
      projectName: string;
      projectId: string | null;
      preparationId: string | null;
      ceilingUsd: number;
      model: string;
      turns: TurnRow[];
      journal: JournalSnapshot[];
      stoppedEarly?: string;
      providerProof: string[];
    } = {
      projectName: "",
      projectId: null,
      preparationId: null,
      ceilingUsd: CEILING_USD,
      model: "openai-agents-sdk-live (configured DEV)",
      turns: [],
      journal: [],
      providerProof: [],
    };

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const preparationId = await openNewPreparation(page);
    const projectName = `CampusFlow — Test LIVE Journal ${Date.now()}`;
    ledger.projectName = projectName;
    ledger.preparationId = preparationId;
    const projectId = await constituteAndCreateProject(page, {
      name: projectName,
      summary: "Projet fictif réservation salles — LIVE Journal qualification",
      alreadyUnique: true,
    });
    ledger.projectId = projectId;
    expect(projectId).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    ledger.journal.push(await captureJournal(page, projectId!, "T0"));
    // Prefer explicit project URL for surface restore (rail Link can race after Journal).
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 30000 },
    );
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("thread-draft")).toBeVisible({ timeout: 30000 });

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");
    await page.setViewportSize({ width: 1440, height: 900 });

    let cumulative = 0;
    let stopReason: string | undefined;

    for (let i = 0; i < TURNS.length; i++) {
      const turn = TURNS[i]!;
      if (cumulative + RESERVE_USD > CEILING_USD) {
        stopReason = `BUDGET_RESERVE_STOP before ${turn.id}: cumulative=${cumulative.toFixed(2)}`;
        break;
      }

      // Ensure composer is idle before each turn.
      if ((await page.getByTestId("nora-workspace").count()) === 0) {
        await page.goto(`/projects/${projectId}?surface=travail`);
        await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 30000 });
      }

      const t0 = Date.now();
      fs.writeFileSync(
        path.join(EVIDENCE, "live-progress.json"),
        JSON.stringify({ next: turn.id, at: new Date().toISOString(), cumulative }, null, 2),
      );
      await draft.fill(turn.prompt);
      await expect(send).toBeEnabled({ timeout: 10000 });
      await send.click();

      const status = page.getByTestId("thread-nora-status");
      await expect(status).toContainText(/COMPLETE|UNKNOWN|FAILED|INTERRUPTED|Nora|openai/i, {
        timeout: 180_000,
      });
      await expect(draft).toHaveValue("", { timeout: 180_000 });

      const statusText = ((await status.textContent()) ?? "").trim();
      const modeLive = /openai-agents-sdk-live/i.test(statusText);
      const fixtureLeak = /deterministic-fixture/i.test(statusText);
      const simLeak = /provider-simulated/i.test(statusText);
      if (modeLive) ledger.providerProof.push(`${turn.id}:${statusText.slice(0, 160)}`);

      const assistant = page.getByTestId("nora-msg-assistant").last();
      await expect(assistant).toBeVisible({ timeout: 30000 });
      const fullText = (await assistant.innerText()).slice(0, 6000);
      const assistantMessageId =
        (await assistant.getAttribute("data-message-id")) ??
        (await assistant.locator("[data-message-id]").first().getAttribute("data-message-id").catch(() => null));
      const userBubble = page.locator("[data-testid=nora-msg-user], [data-role=user]").last();
      const userMessageId =
        (await userBubble.getAttribute("data-message-id").catch(() => null)) ?? null;

      const cost = estimateUsd();
      cumulative += cost;
      const row: TurnRow = {
        id: turn.id,
        startedAt: new Date(t0).toISOString(),
        durationMs: Date.now() - t0,
        statusText,
        modeLive,
        fixtureLeak,
        simLeak,
        userMessageId,
        assistantMessageId,
        excerpt: fullText.slice(0, 1200).replace(/\s+/g, " "),
        estimatedUsd: cost,
        cumulativeUsd: cumulative,
      };
      ledger.turns.push(row);
      fs.writeFileSync(path.join(EVIDENCE, "live-ledger.json"), JSON.stringify(ledger, null, 2));
      fs.writeFileSync(
        path.join(EVIDENCE, `turn-${turn.id.toLowerCase()}.md`),
        `# ${turn.id}\n\n## Pilote\n\n${turn.prompt}\n\n## Nora\n\n${fullText}\n\n## Meta\n\n- status: ${statusText}\n- live: ${modeLive}\n- durationMs: ${row.durationMs}\n`,
      );

      if (fixtureLeak || simLeak) {
        stopReason = `${turn.id}: FIXTURE_OR_SIM_LEAK status=${statusText}`;
        break;
      }
      if (cumulative > CEILING_USD) {
        stopReason = `BUDGET_EXCEEDED after ${turn.id}`;
        break;
      }

      if (turn.id === "E10") {
        ledger.journal.push(await captureJournal(page, projectId!, "T10"));
        // Continuity: reload project via normal parcours
        await page.goto(`/projects/${projectId}?surface=travail`);
        await expect(page.getByTestId("project-load-state")).toHaveAttribute(
          "data-project-load-state",
          "ready",
          { timeout: 20000 },
        );
        await expect(page.getByTestId("nora-msg-assistant").last()).toBeVisible({ timeout: 20000 });
      }
    }

    if (stopReason) ledger.stoppedEarly = stopReason;
    ledger.journal.push(await captureJournal(page, projectId!, "T20"));

    // Optional D6 via Pilotage if UI available — never insert HumanDecision in DB.
    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await page.waitForTimeout(800);
    const pilotageVisible = (await page.getByTestId("pilotage-panel").count().catch(() => 0)) > 0;
    fs.writeFileSync(
      path.join(EVIDENCE, "d6-attempt.json"),
      JSON.stringify(
        {
          pilotagePanelVisible: pilotageVisible,
          note: pilotageVisible
            ? "Panel visible — acte D6 non forcé si confirmation UI ambiguë; E17 reste proposition non officialisée sauf acte Pilote explicite."
            : "Pilotage panel not found — D6 confirmation NOT APPLICABLE in this run.",
        },
        null,
        2,
      ),
    );

    fs.writeFileSync(path.join(EVIDENCE, "live-ledger.json"), JSON.stringify(ledger, null, 2));

    const liveTurns = ledger.turns.filter((t) => t.modeLive && !t.fixtureLeak);
    expect(liveTurns.length, `expected LIVE turns, got ${JSON.stringify(ledger.turns.map((t) => ({ id: t.id, modeLive: t.modeLive, status: t.statusText })))}`).toBeGreaterThan(0);
    expect(ledger.turns.length).toBeGreaterThan(0);
    // Do not require 20/20 if provider/budget stopped — honesty over cosmetics.
  });
});
```

### CREATE `projects/sfia-studio-next/web/playwright.journal-live.config.ts` (25 lines)
```typescript
import { defineConfig } from "@playwright/test";

/**
 * Journal CampusFlow LIVE 20-turn — real OpenAI via Nora, DEV only, port 3103.
 * GO Morris: STUDIO_ALLOW_LIVE_BOUNDED=1 + OPENAI_API_KEY. Ceiling $10.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "**/journal-nora-live-campusflow.spec.ts",
  timeout: 1_200_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: "http://127.0.0.1:3103",
    trace: "retain-on-failure",
    screenshot: "off",
  },
  webServer: {
    command: "bash scripts/live-web-server.sh",
    url: "http://127.0.0.1:3103/login",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
```

## 9. Diffs utiles cycle 4
### DIFF `projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
index d8c63ff2..7d2ae246 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal-e2e-seed.ts
@@ -2,7 +2,7 @@
  * DEV/E2E-only Journal scenario seed — uses real D4/D6 domain writes.
  * Gate: caller must enforce e2eFixtureMutationsAllowed().
  */
-import { and, asc, desc, eq } from "drizzle-orm";
+import { and, desc, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { conversations, knowledgeAcquis, knowledgeOpenPoints, messages } from "@/db/schema";
 import {
@@ -27,6 +27,7 @@ export type JournalE2ESeedResult = {
   otherParentId: string;
   homonymLeafId: string;
   acquisId: string;
+  documentAcquisId: string;
   openPointId: string;
   resolvedOpenPointId: string;
   decisionApplicableId: string;
@@ -93,9 +94,10 @@ export async function seedJournalE2EScenario(input: {
   const longThreadCount = input.longThreadCount ?? 24;

   const parent = await ensureSubject(pilotId, preparationId, "Architecture cible");
-  const leaf = await ensureSubject(pilotId, preparationId, "Traçabilité Git", parent.subjectId);
+  // J-C08 — leaf/homonym titles must NOT contain the acquis-only search token.
+  const leaf = await ensureSubject(pilotId, preparationId, "Continuité Git", parent.subjectId);
   const otherParent = await ensureSubject(pilotId, preparationId, "Budget et risques");
-  const homonym = await ensureSubject(pilotId, preparationId, "Traçabilité Git", otherParent.subjectId);
+  const homonym = await ensureSubject(pilotId, preparationId, "Continuité Git", otherParent.subjectId);

   const acquis = await capitalizeAcquis(pilotId, preparationId, {
     statement:
@@ -107,7 +109,7 @@ export async function seedJournalE2EScenario(input: {

   await appendSubjectSummaryRevision(pilotId, projectId, leaf.subjectId!, {
     summaryMarkdown:
-      "Synthèse versionnée : la traçabilité Git reste un point de vigilance à clarifier avec sources.",
+      "Synthèse versionnée : la continuité des preuves Git reste un point de vigilance à clarifier avec sources.",
     provenance: { sourceKind: "nora", generationId: "seed-sum-1", epistemic: "limited" },
     operationId: `seed-sum-${leaf.subjectId}`,
     enforceHonesty: true,
@@ -180,7 +182,7 @@ export async function seedJournalE2EScenario(input: {
   );
   await appendDecisionExplanationRevision(pilotId, projectId, decisionApplicableId, {
     explanationMarkdown:
-      "Pourquoi ce choix : alternatives B écartées faute de traçabilité ; motivations et contraintes sourcées.",
+      "Pourquoi ce choix : alternatives B écartées faute de preuves solides ; motivations et contraintes sourcées. Token exclusif explication : multicritèreorion.",
     provenance: { sourceKind: "message", sourceId: "seed-msg-expl", epistemic: "observed" },
     operationId: `seed-expl-${decisionApplicableId}`,
     preparationId,
@@ -245,7 +247,7 @@ export async function seedJournalE2EScenario(input: {
     if (i === longThreadCount - 1) lateMessageId = id;
   }

-  // Point Journal sources at the real early message + document revision.
+  // Point Journal sources at the real early message + document revision (J-C13 / J-C14).
   if (acquis.status === "AVAILABLE" && "acquisId" in acquis && earlyMessageId) {
     await db
       .update(knowledgeAcquis)
@@ -259,6 +261,32 @@ export async function seedJournalE2EScenario(input: {
       })
       .where(eq(knowledgeAcquis.id, String(acquis.acquisId)));
   }
+  // Dedicated acquis with exact document revision provenance for J-C14 click path.
+  const docAcquis = await capitalizeAcquis(pilotId, preparationId, {
+    statement: "La publication technique est documentée dans la révision canonique v2.",
+    kind: "FACT",
+    subjectId: otherParent.subjectId,
+    provenance: {
+      sourceKind: "revision",
+      sourceId: revisionIdV2 || revisionIdV1,
+      epistemic: "established",
+    },
+  });
+  if (docAcquis.status === "AVAILABLE" && "acquisId" in docAcquis) {
+    await db
+      .update(knowledgeAcquis)
+      .set({
+        provenanceJson: JSON.stringify({
+          sourceKind: "revision",
+          sourceId: revisionIdV2 || revisionIdV1,
+          documentId,
+          revisionId: revisionIdV2 || revisionIdV1,
+          epistemic: "established",
+          notedAt: new Date().toISOString(),
+        }),
+      })
+      .where(eq(knowledgeAcquis.id, String(docAcquis.acquisId)));
+  }
   if (open.openPointId && earlyMessageId) {
     await db
       .update(knowledgeOpenPoints)
@@ -282,6 +310,10 @@ export async function seedJournalE2EScenario(input: {
     homonymLeafId: homonym.subjectId!,
     acquisId:
       acquis.status === "AVAILABLE" && "acquisId" in acquis ? String(acquis.acquisId) : "",
+    documentAcquisId:
+      docAcquis.status === "AVAILABLE" && "acquisId" in docAcquis
+        ? String(docAcquis.acquisId)
+        : "",
     openPointId: open.openPointId!,
     resolvedOpenPointId: openResolved.openPointId!,
     decisionApplicableId,
```

### DIFF `projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
index 5aa093b8..e141195c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
@@ -302,14 +302,14 @@ export function ProjectJournal(props: {
       ? decisions.find((d) => d.id === selectedDecisionId) ?? null
       : null;

+  /** J-C11 — match statement or explanation; never treat kind/label alone as a hit. */
   const filteredDecisions = useMemo(() => {
     const q = search.trim().toLowerCase();
     if (tab !== "decisions" || !q) return decisions;
     return decisions.filter(
       (d) =>
         d.statement.toLowerCase().includes(q) ||
-        (d.explanation?.explanationMarkdown.toLowerCase().includes(q) ?? false) ||
-        d.kind.toLowerCase().includes(q),
+        (d.explanation?.explanationMarkdown.toLowerCase().includes(q) ?? false),
     );
   }, [decisions, search, tab]);
```

### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 01d34c56..e7b9d86d 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -2115,22 +2115,34 @@ export default function ProjectPage() {
             })();
           }}
           onOpenDocument={(documentId, revisionId) => {
+            // J-C14 — open exact D4 revision in Travail viewer (same continuity pattern as message).
+            // Preserve journalNav; do not invent content if D4 refuses.
+            const titleHint =
+              documents.find((d) => d.document.id === documentId)?.document.title ?? "Document";
+            const seq = ++viewerRequestSeqRef.current;
+            viewerOpenRef.current = true;
+            setViewer({
+              kind: "document",
+              documentId,
+              title: titleHint,
+              revisionId: revisionId ?? null,
+              revisionNumber: null,
+              versionSource: revisionId ? "exact" : "current",
+              markdown: null,
+              available: false,
+              unavailableReason: "Vérification D4 de la révision citée…",
+            });
             void fetchDocumentViewerViaD4({
               documentId,
-              titleHint:
-                documents.find((d) => d.document.id === documentId)?.document.title ?? "Document",
+              titleHint,
               revisionId: revisionId ?? null,
               versionSource: revisionId ? "exact" : "current",
-              seq: ++viewerRequestSeqRef.current,
+              seq,
               projectIdAtStart: params.projectId,
             });
-            selectSurface("document");
-            // Keep inspect aligned when opening from Journal (J-C14).
+            selectSurface("travail");
             const match = documents.find((d) => d.document.id === documentId);
-            if (match) {
-              setInspect(match);
-              syncSurfaceUrl("document", documentId, "push");
-            }
+            if (match) setInspect(match);
           }}
           onBackToThread={() => selectSurface("travail")}
         />
```

### DIFF `projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
index 0eaca516..17376740 100644
--- a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
@@ -16,22 +16,25 @@ async function seedJournalScenario(page: Page, projectId: string, longThreadCoun
     seed: {
       leafSubjectId: string;
       parentSubjectId: string;
+      otherParentId: string;
       openPointId: string;
       decisionApplicableId: string;
       earlyMessageId: string;
       documentId: string;
       revisionIdV2: string;
+      documentAcquisId: string;
       messageCount: number;
     };
   };
   expect(body.status).toBe("AVAILABLE");
   expect(body.seed.leafSubjectId).toBeTruthy();
   expect(body.seed.earlyMessageId).toBeTruthy();
+  expect(body.seed.documentAcquisId).toBeTruthy();
   return body.seed;
 }

-test.describe("Journal V4 — données métier non vides (E06-01)", () => {
-  test("sujets/40-60/recherche/décisions/message/document/brouillon", async ({ page }) => {
+test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () => {
+  test("sujets/recherche-acquis/décisions/message/document/retour-nav", async ({ page }) => {
     await page.setViewportSize({ width: 1680, height: 970 });
     await page.goto("/login");
     await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
@@ -51,7 +54,7 @@ test.describe("Journal V4 — données métier non vides (E06-01)", () => {

     const seed = await seedJournalScenario(page, projectId!, 40);

-    // Draft BEFORE leaving thread (E06-04)
+    // Draft BEFORE leaving thread (E06-04 / J-C13)
     const draftBefore = "brouillon préparé avant Journal — ne pas envoyer";
     await page.getByTestId("thread-draft").fill(draftBefore);
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
@@ -65,9 +68,11 @@ test.describe("Journal V4 — données métier non vides (E06-01)", () => {
     await expect(leaf).toBeVisible({ timeout: 15000 });
     await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible();

-    // C — recherche terme absent du titre (acquis)
+    // C — J-C08 recherche terme ABSENT du titre/parents/synthèse, PRÉSENT dans acquis
     await page.getByTestId("journal-search").fill("traçabilité");
-    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
+    const matchBadge = page.getByTestId(`journal-match-${seed.leafSubjectId}`);
+    await expect(matchBadge).toBeVisible();
+    await expect(matchBadge).toHaveText(/acquis/i);
     await page.getByTestId("journal-filter-open-points").locator("input").check();

     // B — 40/60 + enlarge (non conditionnel)
@@ -87,7 +92,10 @@ test.describe("Journal V4 — données métier non vides (E06-01)", () => {
       fullPage: false,
     });

-    // Sources → message exact
+    // Keep selection + search for return assertions
+    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
+
+    // Sources → message exact (chip on selected leaf)
     const sourceChip = page.locator("[data-testid^=journal-source-]").first();
     await expect(sourceChip).toBeVisible({ timeout: 10000 });
     await sourceChip.click();
@@ -95,45 +103,71 @@ test.describe("Journal V4 — données métier non vides (E06-01)", () => {
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
     const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
     await expect(focused).toBeVisible({ timeout: 15000 });
-    // Chronology: early message must not be last in the thread DOM order
     const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
       els.map((e) => e.getAttribute("data-message-id")),
     );
     expect(ids.includes(seed.earlyMessageId)).toBe(true);
     expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
-    // No auto-send: draft still present
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

-    // Return Journal — prefer explicit URL (rail remount race on surface switch)
-    await page.goto(`/projects/${projectId}?surface=journal`);
+    // J-C13 — return via rail (NOT page.goto) and assert nav restored
+    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
     await expect(page).toHaveURL(/surface=journal/);
     await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
-    // Nav state may reset on full navigation; re-assert core tree still present (non-empty).
-    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible({
-      timeout: 15000,
-    });
+    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
+    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
+    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
+    await expect(page.getByTestId("journal-filter-open-points").locator("input")).toBeChecked();

-    // D — Décisions
+    // D — J-C11 Décisions : terme présent dans explication, absent du libellé
     await page.getByTestId("journal-tab-decisions").click();
+    await page.getByTestId("journal-search").fill("multicritèreorion");
     await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
       timeout: 15000,
     });
     await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
     await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
     await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable/i);
+    await expect(page.getByTestId("journal-decision-viewer")).toContainText(/multicritèreorion/i);
+
+    // Back to subjects for document source click
+    await page.getByTestId("journal-tab-subjects").click();
+    await page.getByTestId("journal-search").fill("");
+    await page.getByTestId("journal-filter-open-points").locator("input").uncheck();
+    const budgetSubject = page.getByTestId(`journal-subject-${seed.otherParentId}`);
+    await expect(budgetSubject).toBeVisible();
+    await budgetSubject.click();
+    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

-    // E — Document version (canonical D4 surface)
-    await page.goto(
-      `/projects/${projectId}?surface=document&documentId=${encodeURIComponent(seed.documentId)}`,
-    );
-    await expect(
-      page.getByTestId("document-library").or(page.getByTestId("document-inspector")),
-    ).toBeVisible({ timeout: 20000 });
+    // E — J-C14 document version via Journal source click → Travail viewer (exact revision)
+    const docChip = page.getByTestId(`journal-source-${seed.documentAcquisId}`);
+    await expect(docChip).toBeVisible({ timeout: 10000 });
+    await docChip.click();
+    await expect(page.getByTestId("travail-viewer")).toBeVisible({ timeout: 20000 });
+    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée|Version/i);
+    await expect(page.getByTestId("travail-viewer")).toContainText(/version exacte pour J-C14/i);
+    // Draft still preserved on thread
+    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
+
+    // Return Journal via rail — selection of document subject should restore if nav preserved
+    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
+    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    await expect(page.getByTestId(`journal-subject-${seed.otherParentId}`)).toBeVisible();

-    // F — 1280 operational
+    // F — 1280 operational (rail nav, not goto as success proof of restore)
     await page.setViewportSize({ width: 1280, height: 800 });
-    await page.goto(`/projects/${projectId}?surface=journal`);
     await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
     await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
   });
+
+  test("route seed refuse hors DEV/E2E (gate)", async ({ page, request }) => {
+    // With current Playwright webServer STUDIO_E2E=1 + DEV, positive path works above.
+    // Negative: call without session → 401; with session but we cannot flip env mid-process.
+    // Assert unit-gate contract is wired into this route (static) + unauthenticated 401.
+    const unauth = await request.post("/api/dev/e2e/journal-fixture", {
+      data: { projectId: "proj_absent" },
+    });
+    // Either 401 (no cookie) or 403 (gate) depending on harness cookies; never 200 for absent project.
+    expect([401, 403, 404]).toContain(unauth.status());
+  });
 });
```

### DIFF `projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
index 583523e2..5b243c6d 100644
--- a/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/journal-d4-revisions.pg.test.ts
@@ -379,6 +379,124 @@ describe("Journal D4 revisions (PG)", () => {
     expect(row?.state).toBe("APPLICABLE");
   });

+  it("J-C07 two preparations linked to same project share knowledge without title merge", async () => {
+    const { preparationProjectLinks } = await import("@/db/schema");
+    const pilotId = await seedPilot("J-twoprep");
+    const first = await seedLinkedProject(pilotId, "Campus deux preps");
+    const prep2 = await openOrCreatePreparation(pilotId);
+    await db.insert(preparationProjectLinks).values({
+      preparationId: prep2.id,
+      projectId: first.projectId,
+    });
+
+    const subj1 = await ensureSubject(pilotId, first.prep.id, "Réservation salles");
+    await capitalizeAcquis(pilotId, first.prep.id, {
+      statement: "Acquis capitalisé depuis la première préparation du même projet.",
+      kind: "HYPOTHESIS",
+      subjectId: subj1.subjectId,
+      provenance: { sourceKind: "pilot", epistemic: "observed" },
+    });
+
+    const subj2 = await ensureSubject(pilotId, prep2.id, "Réservation salles");
+    expect(subj2.subjectId).not.toBe(subj1.subjectId);
+    await capitalizeAcquis(pilotId, prep2.id, {
+      statement: "Acquis distinct de la seconde préparation, même titre de sujet.",
+      kind: "HYPOTHESIS",
+      subjectId: subj2.subjectId,
+      provenance: { sourceKind: "pilot", epistemic: "observed" },
+    });
+
+    const bundle = await listProjectKnowledge(pilotId, first.projectId);
+    expect(bundle.preparationIds).toEqual(
+      expect.arrayContaining([first.prep.id, prep2.id]),
+    );
+    expect(bundle.subjects.filter((s) => s.title === "Réservation salles")).toHaveLength(2);
+    expect(
+      bundle.acquis.some((a) => a.statement.includes("première préparation")),
+    ).toBe(true);
+    expect(
+      bundle.acquis.some((a) => a.statement.includes("seconde préparation")),
+    ).toBe(true);
+
+    const foreign = await seedLinkedProject(pilotId, "Autre projet isolé");
+    const leak = await listProjectKnowledge(pilotId, foreign.projectId);
+    expect(leak.subjects.every((s) => s.title !== "Réservation salles")).toBe(true);
+  });
+
+  it("J-C05 refuses resolve on non-AVAILABLE revision (withdrawn/inaccessible)", async () => {
+    const { documentRevisions } = await import("@/db/schema");
+    const pilotId = await seedPilot("J-irr");
+    const { prep, projectId } = await seedLinkedProject(pilotId, "Pertinence source");
+    const subj = await ensureSubject(pilotId, prep.id, "Accès SSO");
+    const pt = await openPoint(pilotId, prep.id, {
+      statement: "Le SSO est-il techniquement confirmé pour CampusFlow?",
+      subjectId: subj.subjectId,
+      provenance: { sourceKind: "message", sourceId: "m-sso" },
+    });
+    const doc = await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Note budgétaire hors sujet",
+      "# Budget\nDocument réel mais non pertinent pour le SSO.",
+      undefined,
+      { correlationKey: `irr-doc-${projectId}`, provenance: { sourceKind: "pilot" } },
+    );
+    if (!("revisionId" in doc) || !doc.revisionId) {
+      throw new Error(`expected revisionId, got ${doc.status}`);
+    }
+    const revisionId = String(doc.revisionId);
+    await db
+      .update(documentRevisions)
+      .set({ status: "FAILED" })
+      .where(eq(documentRevisions.id, revisionId));
+
+    const denied = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
+      reason: "doc withdrawn",
+      provenance: {
+        sourceKind: "revision",
+        sourceId: revisionId,
+        epistemic: "established",
+      },
+      operationId: `irr-resolve-${pt.openPointId}`,
+    });
+    expect(denied.status).toBe("FAILED");
+    if (denied.status === "FAILED") {
+      expect(denied.reason).toBe("DOCUMENT_REVISION_NOT_AVAILABLE");
+    }
+    const stillOpen = (
+      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
+    )[0];
+    expect(stillOpen.status).toBe("OPEN");
+  });
+
+  it("J-C11 searchJournalDecisions matches explanation-only token", async () => {
+    const pilotId = await seedPilot("J-d11");
+    const { projectId } = await seedLinkedProject(pilotId, "Recherche décisions");
+    const decisionId = await db.transaction(async (tx) =>
+      insertHumanDecision(tx, {
+        projectId,
+        pilotId,
+        sourceKind: "pilotage",
+        sourceRef: "cmd-d11",
+        kind: "TRAJECTORY",
+        objectRef: "traj-d11",
+        statement: "Acte officiel sans le token exclusif dans le libellé.",
+      }),
+    );
+    await appendDecisionExplanationRevision(pilotId, projectId, decisionId, {
+      explanationMarkdown: "Motifs détaillés avec token exclusif multicritèreorion dans l'explication.",
+      provenance: { sourceKind: "message", sourceId: "m-d11", epistemic: "observed" },
+      operationId: `expl-d11-${decisionId}`,
+    });
+    const hits = await searchJournalDecisions(pilotId, projectId, "multicritèreorion");
+    expect(
+      hits.results.some((r) => r.matchKind === "explanation" && r.decisionId === decisionId),
+    ).toBe(true);
+    // Kind/label alone must not produce a decision hit.
+    const miss = await searchJournalDecisions(pilotId, projectId, "TRAJECTORY");
+    expect(miss.results.some((r) => r.decisionId === decisionId)).toBe(false);
+  });
+
   it("E06-05 markOpenPointReactivated refuses cross-project same pilot", async () => {
     const pilotId = await seedPilot("J-e605");
     const a = await seedLinkedProject(pilotId, "Projet E605 A");
```

### DIFF `projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts
index f36b5dd9..efa2d584 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-e2e-fixture-gate.test.ts
@@ -68,4 +68,24 @@ describe("C-03 E2E fixture mutation gate", () => {
     expect(route).not.toMatch(/authorizePublication|dispatchPublication|insertHumanDecision/);
     expect(route).toMatch(/Does NOT create HumanDecision/);
   });
+
+  it("Journal fixture route also uses e2eFixtureMutationsAllowed", () => {
+    const route = readFileSync(
+      join(__dirname, "../../src/app/api/dev/e2e/journal-fixture/route.ts"),
+      "utf8",
+    );
+    expect(route).toMatch(/e2eFixtureMutationsAllowed/);
+    expect(route).toMatch(/E2E_FIXTURE_FORBIDDEN/);
+    expect(route).toMatch(/seedJournalE2EScenario/);
+  });
+
+  it("FIX: DEV without STUDIO_E2E refuses", () => {
+    const r = e2eFixtureMutationsAllowed({
+      NODE_ENV: "development",
+      STUDIO_LANE: "DEV",
+      STUDIO_E2E: "",
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(false);
+    expect(r.reason).toBe("STUDIO_E2E_REQUIRED");
+  });
 });
```

### DIFF `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md`
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
index c5c58d7d..de41ea81 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
@@ -2,57 +2,60 @@

 | Métadonnée | Valeur |
 |---|---|
-| Date | 19/11/2026 (cycle 3 — E06-01..06) |
+| Date | 19/11/2026 (cycle 4 — complétude §5 + LIVE borné arrêté) |
 | Branche | `sfia/next-journal-delivery-20261119` |
 | Base docs cycle 1 | `6879d34e` |
-| Matrice docs distante (lue, non fusionnée) | `2ae685a5` (v0.2) |
+| Matrice docs distante (lue, non fusionnée) | `c3f1254c` (v0.3 §14) |
 | Base `main` | `d3d199ad` |
 | Versioning | `NO RELEASE` / `0.0.0-dev` |
-| Lane | DEV / e2e (`127.0.0.1:5433`, `:3101`) — RECETTE/STABLE non mutées |
+| Lane | DEV / e2e (`127.0.0.1:5433`, `:3101`) — LIVE tenté `:3103` — RECETTE/STABLE non mutées |

-## Cycles 1–2 (conservés)
+## Cycles 1–3 (conservés)

-- Migration additive `014` + `db-migrate.sh` 001→014
-- Journal D4 revisions, UI V4, API, recherche, explications D6
-- Helpers cognition J-C04/06 + deep-link message/document
+- Migration additive `014` + Journal D4/UI/API
+- E06-01..06 : scope projet, UNVERIFIED Git, message chrono, seed BROWSER, resolve source réelle

-## Cycle 3 — corrections E06
+## Cycle 4 — correctifs matrice §14 + LIVE

-### E06-05 — portée sécurité
-- `markOpenPointReactivated` utilise `loadOwnedOpenPoint(pilot, project, id)`
-- Refus interprojets même Pilote ; zéro écriture si refus ; idempotence conservée
+### §5 déterministe

-### E06-03 — currentness Git
-- `main`+SHA déclarés → **UNVERIFIED** (jamais CURRENT sans vérification distante)
-- Ref non-main → **CANDIDATE**
-- Overclaim gate traite UNVERIFIED
+| ID | Correction |
+|---|---|
+| J-C08 | Seed : titre feuille sans token « traçabilité » ; badge match `acquis` en BROWSER |
+| J-C11 | Recherche décisions : explication-only (`multicritèreorion`) ; UI n’utilise plus `kind` comme hit |
+| J-C13 | Retour Journal via rail (pas `page.goto` comme preuve) ; search/filtre/layout conservés |
+| J-C14 | Clic source document → Travail viewer exact (`viewerOpenRef`) ; contenu v2 asserté |
+| J-C07 | PG : deux préparations liées au même projet, sujets homonymes non fusionnés |
+| J-C05 | Resolve refusé si révision non AVAILABLE |
+| J-C16 | Gate route journal-fixture + refus DEV sans STUDIO_E2E |

-### E06-04 — message exact
-- Deep-link : reload canonique ou insertion par `createdAt` (pas d’append aveugle)
-- Brouillon préservé ; zéro auto-send
+### LIVE CampusFlow (GO Morris, arrêté sur demande)

-### E06-01 — BROWSER non vide
-- Fixture DEV `/api/dev/e2e/journal-fixture` (gate STUDIO_E2E)
-- Playwright assertions obligatoires sur sujets/40-60/recherche/décisions/message/document
+- Projet DEV fictif créé ; provider `openai-agents-sdk-live` constaté sur **E01**
+- Durée E01 ≈ 647 s ; réponse Nora réelle archivée
+- **E02–E20 / T10 / T20 : NON EXÉCUTÉS** (arrêt Morris/opérateur)
+- Journal T0 : vide (attendu avant capitalisation)
+- Preuves locales : `.tmp-sfia-review/journal-live-campusflow-20261119/` (non commit)

-### E06-02 — mémoire D3/D4 déterministe
-- Tests PG : révisions de synthèse + réactivation pertinente / négative
-- LIVE Nora : toujours NOT RUN / hors GO
+### Artefacts test LIVE (conservés pour reprise manuelle)

-### E06-06 — D6 / documents / migrate
-- Resolve factuel exige source document/message **réellement accessible**
-- Restriction D6 ACTIVE intacte après resolve
-- `db-migrate.sh` inclut `014`
+- `web/tests/e2e/journal-nora-live-campusflow.spec.ts`
+- `web/playwright.journal-live.config.ts`
+- Commande : `STUDIO_ALLOW_LIVE_BOUNDED=1` + `OPENAI_API_KEY` + `npx playwright test --config=playwright.journal-live.config.ts`

-## Preuves (cycle 3)
+## Preuves

 | Commande | Résultat |
 |---|---|
 | `tsc --noEmit` | PASS |
-| unit journal-cognition | PASS |
-| PG journal-d4-revisions | PASS (12+) |
-| Playwright journal-v4-parcours (seeded) | PASS |
-| LIVE Nora / REAL Git | NOT RUN |
+| `npm run lint` | PASS (warnings préexistants) |
+| `next build` | PASS |
+| unit journal-cognition + fixture-gate | PASS |
+| PG journal-d4-revisions | PASS (15) |
+| PG ml3-pilotage | PASS (49) |
+| Playwright journal-v4-parcours | PASS (2) |
+| LIVE 20 tours | **1/20 PARTIAL** — arrêté après E01 |
+| ML2/ML4C/E05 full e2e | NOT RUN |
 | VISUAL REVIEW | PENDING MORRIS — RECETTE |

 ## Autorité
```

### DIFF `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a06a5173..c8a6bd2d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-LIVE-PARTIAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~11:05 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 4 §5 + LIVE |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
+| GO Morris | Complétude §5 + LIVE 20 tours CampusFlow (arrêt opérateur après E01) |
+| Parent | local `a122bf27` |
+| Scope | J-C08/11/13/14/07/05/16 oracles · viewerOpenRef J-C14 · LIVE E01 REAL BOUNDARY PARTIAL |
+| QA | tsc/lint/build PASS · UNIT+PG Journal PASS · Playwright seeded 2/2 · ML3 PG 49 PASS · LIVE 1/20 puis STOP |
+| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
+| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — §5 DETERMINISTIC + LIVE E01 ONLY` |
+
+
 ## delivery_id: DELIV-2026-11-19-JOURNAL-V4-E06-CORRECTIVE

 | Field | Value |
```

## 10. Réserves / exit

1. LIVE 19 tours restants — reprise manuelle Morris possible via harness local
2. Capitalisation Journal D4 sous LIVE non observée (pas de T10/T20)
3. Suites ML2/ML4C/E05 full NOT RUN
4. VISUAL REVIEW PENDING MORRIS — RECETTE
5. Pertinence sémantique source (existence ≠ pertinence) reste limite D4

## 11. Verdict

`READY FOR MORRIS REVIEW WITH RESERVES — §5 DETERMINISTIC PROVEN / LIVE E01 REAL BOUNDARY ONLY / 19 TURNS NOT RUN / NO PROJECT PUSH`

### Instruction ChatGPT obligatoire

Relire le handoff Git canonique au SHA immuable, confronter §5 / J-C01..16 / C1..C14 aux preuves, distinguer E01 LIVE réel des 19 tours non joués, actualiser la matrice v0.3 sous mandat documentaire distinct, et ne pas traiter les déclarations Cursor comme réception produit. Aucun Gate C / ADOPTED / push projet / RECETTE n’est autorisé par ce rapport.
