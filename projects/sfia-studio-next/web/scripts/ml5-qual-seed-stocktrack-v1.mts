/**
 * S3 — seed isolated StockTrack V1 into DEV qualification project.
 * Does NOT modify existing user/business documents.
 * WEB LIVE OFF. No Git attach required for IT-06 D4 path.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { config } from "dotenv";

config({ path: path.resolve(process.cwd(), ".env.local") });
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const BASE = process.env.SFIA_QUAL_BASE || "http://127.0.0.1:3100";
const OUT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/stocktrack-v1-seed-20261126",
);
mkdirSync(OUT, { recursive: true });

/** Faithful V1 oracle (UAT InterventionTrack §8.3 / §9) — controlled qualification copy. */
export const STOCKTRACK_V1 = `# StockTrack — Conception fonctionnelle V1

## 1. Périmètre
Application interne de suivi de stock pour une équipe logistique.
Enregistrement des articles, quantités disponibles, entrées et sorties.
Hors périmètre V1 : fournisseurs, notifications automatiques, multi-entrepôts.

## 2. Parcours utilisateur
1. Consulter le catalogue d'articles.
2. Créer un article (référence + libellé).
3. Enregistrer une entrée de stock.
4. Enregistrer une sortie de stock (refus si quantité insuffisante — arbitrage ouvert).
5. Consulter l'historique des mouvements.

## 3. Règles métier
| ID | Règle |
|---|---|
| RM-01 | Un article possède une référence unique et un libellé. |
| RM-02 | Une référence et un libellé non vides sont obligatoires. Une même référence ne peut désigner qu'un seul article. |
| RM-03 | Une entrée augmente la quantité disponible de la valeur saisie (strictement positive). |
| RM-04 | Une sortie diminue la quantité disponible ; une sortie supérieure au stock disponible est refusée. |
| RM-05 | La quantité disponible ne peut pas être négative. |
| RM-06 | Seuls les membres de l'équipe logistique peuvent créer ou modifier des articles et mouvements. |

## 4. Scénarios de recette
| ID | Règle | Scénario |
|---|---|---|
| REC-01 | RM-01 | Créer un article avec référence et libellé valides : article créé, quantité initiale 0. |
| REC-02 | RM-02 | Tenter de créer un article avec libellé vide : refus, aucun article ajouté. |
| REC-03 | RM-02 | Tenter de créer un article sans référence, sans libellé, puis avec une référence déjà utilisée : chaque tentative est refusée et aucun article n'est ajouté. |
| REC-04 | RM-03 | Enregistrer une entrée de 5 sur un article existant : quantité = 5. |
| REC-05 | RM-04 | Sortie de 2 alors que stock = 5 : quantité = 3. |
| REC-06 | RM-04 | Sortie de 10 alors que stock = 3 : refus, quantité inchangée. |
| REC-07 | RM-05 | Après refus de sortie excessive, la quantité reste non négative. |
| REC-08 | RM-06 | Un profil hors équipe logistique tente une création : refus. |
`;

const jar = { cookie: "" };
async function api(p: string, opts: { method?: string; body?: unknown } = {}) {
  const res = await fetch(`${BASE}${p}`, {
    method: opts.method || "GET",
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      ...(jar.cookie ? { cookie: jar.cookie } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  for (const c of res.headers.getSetCookie?.() || []) {
    const part = c.split(";")[0]!;
    jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
  }
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 400) };
  }
  return { status: res.status, json };
}

async function main() {
  const fp = createHash("sha256").update(STOCKTRACK_V1, "utf8").digest("hex");
  const auth = await api("/api/dev/auto-session", { method: "POST" });
  if (auth.status !== 200) {
    console.error("AUTO_SESSION_FAIL", auth.status);
    process.exit(2);
  }
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = (prep.json as { preparationId: string }).preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const name = `ML5-Qual-StockTrack-IT06-${Date.now().toString(36)}`;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary:
        "Qualification isolée StockTrack IT-06 — V1 contrôlée, pas de données utilisateur métier.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;

  // Seed V1 before/after project constitution via preparation documents API.
  const doc = await api(`/api/preparations/${preparationId}/documents`, {
    method: "POST",
    body: {
      title: "StockTrack — Conception fonctionnelle V1",
      contentMarkdown: STOCKTRACK_V1,
      correlationKey: `stocktrack-v1-${fp.slice(0, 12)}`,
    },
  });

  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `qual-st-${Date.now()}`,
      previewSummary: "StockTrack IT-06 qualification isolée DEV",
    },
  });
  const projectId = (created.json as { projectId?: string }).projectId;
  const result = {
    at: new Date().toISOString(),
    preparationId,
    projectId: projectId ?? null,
    documentSave: doc,
    contentFingerprintSha256: fp,
    contentChars: STOCKTRACK_V1.length,
    create: created.json,
  };
  writeFileSync(path.join(OUT, "seed-result.json"), JSON.stringify(result, null, 2));
  writeFileSync(path.join(OUT, "stocktrack-v1.md"), STOCKTRACK_V1);
  console.log(JSON.stringify(result, null, 2));
  if (!projectId || doc.status !== 200) process.exit(2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
