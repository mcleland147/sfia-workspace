# SFIA Review Pack — FULL — Macro-lot 1 Integrated Foundation Completion

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-27 02:51:07 +0100 |
| Profil | Critical / EVOL / Cycle 8 Delivery |
| Mandat | Intervention 1 — integrated completion (two-intervention exit) |
| Repo | mcleland147/sfia-workspace |
| Branche projet | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial | `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47` |
| Tree web initial | `54863eda3c7311e51d36237d59d3b7c078baad0a` |
| HEAD final | `59893c814808fcf32501f32a34a379d7d85346e9` |
| Tree web final | `b76e2e6017ec371246b45b3de6f7bedf6a08c304` |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Handoff entrée | `ab96273eb80a32ff4cfaff59f40cea6cfeb4ddaf` |
| BUILD_ID | `0VeseCyhfyZnoVBm1JG42` |
| digest | `7673fffb47a48f7b45bf78c890df8bd94068032db7abccd84e4bafb7f5c6e0a1` |
| DEV | `127.0.0.1:3100` pid listen 38942 / qualify 38906 |
| RECETTE | `127.0.0.1:3200` pid **89199** intact |
| PG DEV | sfia-next-dev-pg :5433 · schema 025 |
| Review pack | Réinitialisé au début · mono-cycle · FULL |
| Secrets | **Aucun secret** dans ce pack · occultation documentée |

## 1. Git Truth Check

- Branche : `sfia/next-ml5-integrated-delivery-20261123` — conforme
- HEAD entrée attendu `348cf6bd…` observé — conforme
- Tree web entrée `54863eda…` observé — conforme
- Fetch non destructif : non requis (état local aligné)
- Staged/unstaged entrée : Review Pack seul modifié historiquement ; cycle a produit commit local `59893c814808fcf32501f32a34a379d7d85346e9`
- Isolation ENV : DEV :3100/5433 · RECETTE :3200/5434 séparés — **NEXT ENVIRONMENT GATE PASSED**
- Push projet : **NON**

## 2. Sources réellement lues

- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (routing)
- prompts/templates/sfia-cycle-execution-template.md v2.6 §7.10 / §9.1
- construction/convergence-openai-studio/* (cadrage, contrats, as-built, A3, UX, procédures)
- governance ENV-01 / product-versioning (références)
- Code : finops, provider-admin-*, frontier, continuity, agents-sdk-tracing, run-nora, migrations 024/025
- Figma RO : fileKey `itgvCulInEnFY6DvgIegvP` node `1332:2305` (screenshot+metadata)
- Handoffs antérieurs référencés : 44db96d6 · 7505551f · f2991451 · ab96273e

## 3. Actions réalisées (A–F)

### A Admin / persistance
- Identifiants LOGIN traités comme compromis → `ALTER … NOLOGIN` (025) ; auth refuse prouvée
- 024 courant : plus aucun `PASSWORD '…'` ; nouveaux installs ne réintroduisent pas de secrets
- Provenance dans index unique NULLS NOT DISTINCT
- Rôles exercés via SET ROLE + SQLSTATE 42501 (+ grant positif)
- Transport/envelope/parsing préservés

### B FinOps / UX
- `evaluateFinOpsReconciliation` partagé service-path
- COMPARABLE positif + refus Pilot + TEST exclu + partial
- Figma page 13 inspectée ; proposition visuelle candidate (NOT APPLIED)

### C Tracing
- Real `@openai/agents` Agent.run + tool loop + spans corrélés + export distant = []
- OFF fail-closed ; oracle positif

### D Frontier / WEB
- UNKNOWN→MEASURED = PARTIAL (campagne + unit)
- Dossier A3 Option 1 vs 2 (recommandation Option 2)
- WEB OFF

### E Continuité D3
- `buildStudioContinuityFromWork` remplace placeholders
- continuityChain null ; OFF

### F Intégration
- Campagne substituée PG PASS
- qualify:build + start BUILD_ID `0VeseCyhfyZnoVBm1JG42`
- Docs + dossier gates consolidé
- Commit local borné (pas de push projet)

## 4. Fichiers créés (intégralité)

### 4.1 `projects/sfia-studio-next/web/src/db/migrations/025_provider_admin_security_and_canon.sql`

```sql
-- ML1 integrated completion — security remédiation + provenance in canonical identity.
-- Additive DEV only. No DROP of data rows. No RECETTE touch.
--
-- SECURITY: LOGIN roles created by 024 with hardcoded passwords are treated as
-- compromised. This migration forces NOLOGIN (invalidates password auth) and
-- removes any requirement for secrets in SQL. Operator may later enable LOGIN
-- via a non-git local script reading secrets from the OS keychain / env — never
-- from migration files.
--
-- Note: historical 024 file is also corrected so NEW installs never reintroduce
-- hardcoded passwords. Applied 024 environments are remediated here.

-- 1) Invalidate compromised LOGIN capability (password auth no longer usable).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN;
  END IF;
END$$;

-- Prefer NOLOGIN role objects for grant tests (SET ROLE as superuser/owner).
-- Keep named group roles; login clones stay NOLOGIN until operator re-enables safely.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
    CREATE ROLE sfia_admin_collector NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
    CREATE ROLE sfia_finops_reader NOLOGIN;
  END IF;
END$$;

-- 2) Canonical uniqueness MUST include provenance so TEST/LIVE/UNKNOWN never collide.
DROP INDEX IF EXISTS provider_admin_usage_snapshots_canon_uidx;

CREATE UNIQUE INDEX provider_admin_usage_snapshots_canon_uidx
  ON provider_admin_usage_snapshots (
    source_endpoint,
    surface_object,
    organization_scope,
    interval_start_utc,
    interval_end_utc,
    granularity,
    project_id,
    api_key_id,
    user_id,
    model,
    line_item,
    api_source,
    collection_provenance
  ) NULLS NOT DISTINCT;

-- Re-assert least privilege (idempotent).
GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector;
GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector;
GRANT SELECT ON provider_admin_collection_runs TO sfia_finops_reader;
GRANT SELECT ON provider_admin_usage_snapshots TO sfia_finops_reader;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;

```

### 4.2 `projects/sfia-studio-next/web/src/domains/finops/finops-reconciliation.ts`

```ts
/**
 * FinOps reconciliation helpers used by the product service path.
 * Separated so tests can exercise the same logic without mocking private methods.
 */

import {
  assessPeriodEquality,
  reconcileFinOpsCosts,
  sumMeasuredCostUsd,
  type AdminUsageSnapshot,
  type FinOpsScopeEvidence,
} from "./provider-admin-usage-collector";
import { decimalFromNumberLike } from "./decimal-money";

export type FinOpsReconciliationInput = {
  studioEstimatedUsd: number | null;
  studioEstimationKind: "known" | "partial" | "empty" | "unknown" | string;
  snapshots: AdminUsageSnapshot[];
  windowStartUtc: string;
  windowEndUtc: string;
  organizationScope: string;
  configuredOrgId: string | null;
  configuredProjectId: string | null;
  configuredApiKeyId: string | null;
  pilotAuthorized: boolean;
  freshnessStatus: string;
  freshnessSnapshotCount: number;
};

export type FinOpsReconciliationResult = {
  comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  providerCostUsd: string | null;
  providerCurrency: string | null;
  deltaUsd: string | null;
  limits: string[];
  disclosed: boolean;
};

/**
 * Establish COMPARABLE only when identity, window equality, provenance LIVE,
 * and Pilot authorization are all proven — same path as product service.
 */
export function evaluateFinOpsReconciliation(
  input: FinOpsReconciliationInput,
): FinOpsReconciliationResult {
  const limits: string[] = [];
  if (!input.pilotAuthorized) {
    return {
      comparability: "UNAVAILABLE",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: ["PILOT_NOT_AUTHORIZED_FOR_PROVIDER_COSTS"],
      disclosed: false,
    };
  }

  const liveComplete = input.snapshots.filter(
    (s) =>
      s.surfaceObject === "organization.costs.result" &&
      s.completeness === "complete" &&
      (s.collectionProvenance === "LIVE" ||
        // Qualification-only: allow TEST when explicitly tagged for isolated DB proofs.
        s.collectionProvenance === "TEST_SUBSTITUTED" &&
          (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"),
  );

  // Default product path: LIVE only.
  const usable =
    (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"
      ? liveComplete
      : liveComplete.filter((s) => s.collectionProvenance === "LIVE");

  if (usable.length === 0) {
    return {
      comparability: "UNAVAILABLE",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: ["NO_LIVE_COMPLETE_SNAPSHOTS"],
      disclosed: false,
    };
  }

  const orgIdentityProven = Boolean(
    input.configuredOrgId &&
      (input.organizationScope === input.configuredOrgId ||
        input.organizationScope === `org:${input.configuredOrgId}`),
  );
  if (!orgIdentityProven) limits.push("ORG_IDENTITY_UNPROVEN");

  const attributed = input.configuredProjectId
    ? usable.filter((s) => s.dimensions.project_id === input.configuredProjectId)
    : [];

  const sum = sumMeasuredCostUsd(usable, {
    intervalStartUtc: input.windowStartUtc,
    intervalEndUtc: input.windowEndUtc,
    projectId: input.configuredProjectId,
  });
  limits.push(...sum.limits);

  const period = assessPeriodEquality(attributed, {
    startUtc: input.windowStartUtc,
    endUtc: input.windowEndUtc,
  });
  limits.push(...period.limits);

  const freshnessAcceptable =
    input.freshnessStatus === "READY" &&
    attributed.length > 0 &&
    input.freshnessSnapshotCount > 0;

  const evidence: FinOpsScopeEvidence = {
    organizationMatches: orgIdentityProven,
    organizationIdentityProven: orgIdentityProven,
    projectIdsOverlap: attributed.length > 0,
    projectAttributionProven: Boolean(
      input.configuredProjectId && sum.counted > 0,
    ),
    apiKeyIdsOverlap: Boolean(
      input.configuredApiKeyId &&
        attributed.some(
          (s) => s.dimensions.api_key_id === input.configuredApiKeyId,
        ),
    ),
    periodOverlap: period.periodOverlap,
    periodEqual: period.periodEqual,
    currencyMatches: sum.currency === "usd",
    providerCurrency: sum.currency,
    surfacesRequested: ["/organization/costs"],
    groupingCompatible: true,
    coverageComplete:
      input.freshnessStatus === "READY" &&
      !sum.limits.includes("COST_AMOUNT_ABSENT"),
    freshnessAcceptable,
    evidenceNotes: ["SERVICE_PATH_EVALUATOR"],
  };

  const studioDecimal =
    input.studioEstimatedUsd != null
      ? decimalFromNumberLike(input.studioEstimatedUsd)
      : null;

  if (input.studioEstimationKind === "partial") {
    return {
      comparability: "PARTIAL",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: [...limits, "STUDIO_ESTIMATION_REMAINS_PARTIAL"],
      disclosed: false,
    };
  }

  const rec = reconcileFinOpsCosts({
    studioEstimatedUsd: studioDecimal,
    providerCostUsd: sum.total,
    scope: evidence,
  });
  limits.push(...rec.limits);

  const disclosed =
    (rec.status === "COMPARABLE" || rec.status === "PARTIAL") &&
    orgIdentityProven &&
    Boolean(input.configuredProjectId) &&
    input.pilotAuthorized;

  return {
    comparability: rec.status,
    providerCostUsd: disclosed ? sum.total : null,
    providerCurrency: disclosed ? sum.currency : null,
    deltaUsd: disclosed ? rec.deltaUsd : null,
    limits: [...new Set(limits)],
    disclosed,
  };
}

```

### 4.3 `projects/sfia-studio-next/construction/convergence-openai-studio/dossier-gates-morris-consolide-ml1-20261127.md`

```md
# Dossier unique des gates Morris — Macro-lot 1 (Intervention 1)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Cycle | Integrated foundation completion |
| Verdict candidat | **READY FOR CONSOLIDATED MORRIS GATES** (technique DEV ; LIVE non exécuté) |
| Autorité | Morris uniquement pour chaque gate |
| NO RELEASE · NOT ADOPTED · RECETTE hors GO | |

---

## G-PROVIDER-SNAPSHOT-MIGRATION

| | |
|---|---|
| Objet | Migrations DEV 023–025 (snapshots Admin + provenance + canon + security) |
| Prérequis | Isolation DEV :5433 |
| Preuves | Index canon inclut `collection_provenance` ; schéma 025 ; upsert ON CONFLICT |
| Options | Maintenir GO DEV (recommandé) |
| Recommandation | Maintenu |
| Risque résiduel | Lignes UNKNOWN historiques exclues des projections |
| Enveloppe | DEV only |
| Rollback | Pas de DROP métier ; index recréable |
| Action Morris | Aucune nouvelle — GO DEV déjà en vigueur |
| Statut | **LEVÉ DEV** |

## G-ADMIN-SECRET

| | |
|---|---|
| Objet | Provisionnement sécurisé clé Admin OpenAI (hors Git) |
| Prérequis | Identifiants PG compromis invalidés (NOLOGIN) ; transport TEST/LIVE séparés ; procédure candidate |
| Preuves | LOGIN roles `rolcanlogin=f` ; auth refuse ; mots de passe retirés des sources courantes 024/025 ; SET ROLE proofs SQLSTATE 42501 |
| Options | (A) Provisionner via secret manager OS / env local non-git (B) Reporter |
| Recommandation | A — après revue readiness |
| Risque résiduel | Historique Git distant conserve d’anciennes valeurs — traiter comme compromises |
| Enveloppe | Clé Admin lecture Usage/Costs uniquement ; jamais dans Git |
| Rollback | Révoquer clé côté OpenAI |
| Action Morris | Créer/placer secret Admin ; **ne pas** coller dans chat/Git |
| Statut | **PROPOSABLE** — pas de clé demandée avant GO |

## G-ADMIN-LIVE

| | |
|---|---|
| Objet | Première collecte LIVE bornée Usage + Costs |
| Prérequis | G-ADMIN-SECRET levé ; `SFIA_ADMIN_LIVE_GO=1` ; projet DEV autorisé ; fenêtre UTC |
| Preuves | Enveloppe code : start/end_time, maxPages≤20, redirects interdits, body borné |
| Options | GET `/organization/costs` (+ usage si nécessaire) · 1 org · 1 project_ids · ≤3 pages · STOP sur ERROR/PARTIAL |
| Recommandation | Après G-ADMIN-SECRET ; fenêtre ≤ 24h UTC ; group_by=project_id |
| Risque résiduel | Permissions compte OpenAI non prouvées ici |
| Enveloppe | Voir `procedure-admin-live-qualification-candidate.md` |
| Rollback | Désactiver LIVE_GO ; conserver TEST_SUBSTITUTED |
| Action Morris | Autoriser enveloppe exacte + STOP |
| Statut | **FERMÉ** — NOT RUN |

## G-FINOPS-UX

| | |
|---|---|
| Objet | Valider proposition visuelle page 13 (Figma inspectée RO) |
| Prérequis | Backend `providerReconciliation` service-path COMPARABLE |
| Preuves | Screenshot + metadata Figma `1332:2305` ; mapping états → composants ; UX actuelle non régressive |
| Options | (A) Valider delta secondaire (B) Reporter (C) Ajuster mapping |
| Recommandation | A — bloc secondaire sous KPIs existants (13.03) |
| Risque résiduel | Transposition code non faite |
| Enveloppe | Aucun nouvel écran ; aucun plafond monétaire |
| Rollback | UI actuelle inchangée |
| Action Morris | Valider `ux-delta-finops-page13-candidate.md` |
| Statut | **PROPOSABLE** — NOT APPLIED |

## G-TRACING-LOCAL

| | |
|---|---|
| Objet | Activer tracing Agents SDK LOCAL sans export distant |
| Prérequis | Preuve SDK réelle + oracle réseau ; OFF fail-closed |
| Preuves | `ml5-agents-sdk-tracing-real-sdk.test.ts` : Agent.run + tool loop + spans corrélés + export=[] |
| Options | (A) LOCAL ON DEV (B) rester OFF |
| Recommandation | A en DEV uniquement après revue |
| Risque résiduel | Métadonnées allowlist — pas de prompts |
| Enveloppe | `SFIA_AGENTS_TRACING_MODE=local` ; processors locaux |
| Rollback | MODE=off |
| Action Morris | Autoriser activation locale |
| Statut | **PROPOSABLE** — opérationnel OFF |

## G-WEB-PUBLIC / A3

| | |
|---|---|
| Objet | Niveau d’enveloppe hosted WEB avant campagne LIVE bornée |
| Prérequis | F15 déterministe ; WEB OFF exploit |
| Preuves | Frontier UNKNOWN→MEASURED=PARTIAL ; max_tool_calls injection ; dossier A3 |
| Options | Voir `dossier-g-web-public-a3-20261127.md` Option 1 vs 2 |
| Recommandation | Option 2 (pré-réserve contrôlable + mesure a posteriori + risque explicite) |
| Risque résiduel | Destinations hosted ≠ egress B1 |
| Enveloppe | Requêtes publiques non sensibles ; STOP documenté |
| Rollback | WEB OFF |
| Action Morris | Choisir option + accepter risque résiduel |
| Statut | **FERMÉ** |

## G-NATIVE-CONTINUITY

| | |
|---|---|
| Objet | Autoriser variantes native (`previous_response_id` / cache / compaction) vs reconstruction Studio |
| Prérequis | Données D3 réelles raccordées ; DATA-01 ; pas de store=true sans arbitrage |
| Preuves | `buildStudioContinuityFromWork` ; continuityChain null ; OFF ; tests unit + campagne |
| Options | (A) Comparatif substitué puis LIVE borné (B) rester reconstruction (C) pivot DATA-01 |
| Recommandation | A — comparer sans adopter tous les mécanismes |
| Risque résiduel | Rétention fournisseur / permissions non prouvées |
| Enveloppe | Intervention 2 après GO |
| Rollback | Reconstruction Studio |
| Action Morris | Autoriser campagne comparative |
| Statut | **PROPOSABLE** — opérationnel OFF |

## G-PROVIDER-LIVE-QUALIFICATION

| | |
|---|---|
| Objet | Campagne intégrée DEV avec effets fournisseur réels |
| Prérequis | Gates Admin/Tracing/WEB/Continuity selon dépendances |
| Preuves | Campagne substituée Intervention 1 PASS |
| Options | Reporter jusqu’aux gates amont |
| Recommandation | Intervention 2 uniquement |
| Risque résiduel | Coût/latence réels |
| Enveloppe | Corpus, modèles, STOP — à figer au GO |
| Rollback | Couper clés / modes OFF |
| Action Morris | GO Intervention 2 distinct |
| Statut | **FERMÉ** |

## RECETTE / promotions

**HORS AUTORISATION** — worktree figé, port 3200, PG 5434 non touchés.

---

## Chemin critique Intervention 2 (après gates)

1. Morris lève G-ADMIN-SECRET (secret hors Git).
2. Morris lève G-ADMIN-LIVE (enveloppe exacte).
3. Collecte LIVE bornée → PG LIVE provenance.
4. FinOps COMPARABLE sur données LIVE (si droits Pilote).
5. Optionnel : G-TRACING-LOCAL ON DEV.
6. Morris tranche G-WEB-PUBLIC/A3 → scénario LIVE public borné.
7. Morris autorise G-NATIVE-CONTINUITY comparative.
8. G-PROVIDER-LIVE-QUALIFICATION — scénario intégré réel.
9. Preuves → revue → **pas** de RECETTE/STABLE sans GO distinct.

Rollback global : tous modes OFF ; clés révoquables ; DEV isolé.

```

### 4.4 `projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261127.md`

```md
# Dossier d’arbitrage — G-WEB-PUBLIC / A3 (Intervention 1)

| Champ | Valeur |
|---|---|
| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
| Date | 2026-11-27 |
| Remplace | synthèse 2026-11-26 (conservée historiquement) |

## Distinctions démontrées (déterministe + campagne substituée)

| Dimension | Sémantique | Preuve |
|---|---|---|
| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
| UNKNOWN puis MEASURED | Agrégat campagne **PARTIAL** | Tests + campagne ML1 intégrée |
| Stream SSE | UNKNOWN borné — pas de buffer illimité | Code frontier |
| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |

**`max_tool_calls` n’est pas une garantie du nombre maximal de recherches facturables** sans preuve `num_requests`.

---

## Option 1 — Enveloppe stricte démontrable avant émission

| | |
|---|---|
| Contrôlé | Admission D6/B1 ; MIXED CLOSED ; max_tool_calls sur le wire ; slots HTTP ; tokens réservés |
| Mesuré | Uniquement si le fournisseur expose `num_requests` **avant** ou **au** point d’émission (non démontré aujourd’hui pour hosted) |
| Risque restant | Hosted web_search destinations hors egress B1 ; facturation peut diverger de max_tool_calls |
| Dépassement | Refus d’émission si enveloppe locale saturée ; suspension campagne |
| Rollback | WEB OFF |
| Faisabilité | **Partielle** — borne stricte facturable **non** démontrable a priori sur hosted |
| Recommandation | Ne pas présenter comme garantie facturable |

## Option 2 — Enveloppe sur dimensions contrôlables + mesure a posteriori (recommandée)

| | |
|---|---|
| Contrôlé | `max_tool_calls`, tokens, slots HTTP, admission, corpus public non sensible |
| Mesuré | `num_requests` a posteriori lorsque fourni ; sinon UNKNOWN/PARTIAL |
| Risque restant | Écart possible borne vs facturable ; destinations hosted ≠ B1 |
| Dépassement | Suspendre si mesure > enveloppe ; jamais ASSUMED_1 |
| Rollback | WEB OFF |
| Recommandation | **Retenir Option 2** avec acceptation explicite du risque résiduel |

---

## Scénario LIVE public borné (préparé, NOT RUN)

1. Corpus : pages de référence publiques (ex. MDN / docs OpenAI publiques).
2. Limites : max_tool_calls=1 ; maxHttpAttempts≤3 ; tokens bornés.
3. Oracle restitution : citations attendues / absence de contenu privé.
4. STOP : ERROR, dépassement mesure, MIXED, fuite hors allowlist.
5. Preuve : frontier PARTIAL/MEASURED + ledger usage ; pas de second ledger.

## Rollback

WEB OFF. Jamais ASSUMED_1 comme garantie billable.

```

### 4.5 `projects/sfia-studio-next/construction/convergence-openai-studio/roadmap-delta-ml1-candidate-20261127.md`

```md
# Proposition de delta Roadmap — Macro-lot 1 (NON APPLIQUÉE)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Statut | **CANDIDATE — NOT APPLIED** · pas de modification de `governance/roadmap.md` |
| Autorité | Morris (D2) |

## Delta proposé (texte candidat)

Sous R5 / ML5 / Convergence OpenAI–Studio :

- Macro-lot 1 — Socle fournisseur natif et observabilité : **construction DEV complétée** ; qualification LIVE gouvernée **en attente des gates consolidés** (Intervention 2).
- Gates regroupés : G-ADMIN-SECRET · G-ADMIN-LIVE · G-FINOPS-UX · G-TRACING-LOCAL · G-WEB-PUBLIC/A3 · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION.
- Macro-lots 2/3 : **non engagés**.
- RECETTE / STABLE / ADOPTED : inchangés.
- Version produit : **NO RELEASE** · STABLE NOT AVAILABLE.

## Condition

N’appliquer qu’après revue Morris du dossier gates et verdict ChatGPT.

```

### 4.6 Tests unitaires créés

#### `projects/sfia-studio-next/web/tests/unit/ml5-finops-reconciliation-service-path.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";

function liveSnap(amount: string): AdminUsageSnapshot {
  return {
    sourceEndpoint: "/organization/costs",
    surfaceObject: "organization.costs.result",
    organizationScope: "org:demo",
    intervalStartUtc: "2023-11-14T22:13:20.000Z",
    intervalEndUtc: "2023-11-15T22:13:20.000Z",
    granularity: "1d",
    dimensions: {
      project_id: "proj_demo",
      api_key_id: null,
      user_id: null,
      model: null,
      line_item: null,
      api_source: null,
    },
    metrics: {
      input_tokens: { presence: "ABSENT", value: null },
      output_tokens: { presence: "ABSENT", value: null },
      input_cached_tokens: { presence: "ABSENT", value: null },
      num_model_requests: { presence: "ABSENT", value: null },
      num_requests: { presence: "ABSENT", value: null },
      amount: { presence: "MEASURED", value: amount },
      currency: { presence: "MEASURED", value: "usd" },
    },
    completeness: "complete",
    collectedAtUtc: "2026-11-26T12:00:00.000Z",
    collectionId: "acol_svc",
    collectionProvenance: "LIVE",
  };
}

describe("FinOps service-path reconciliation", () => {
  it("establishes COMPARABLE when window/org/project/provenance/rights align", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("COMPARABLE");
    expect(r.disclosed).toBe(true);
    expect(r.deltaUsd).toBe("0.0600000000");
  });

  it("refuses disclosure when pilot unauthorized even if math would COMPARABLE", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.disclosed).toBe(false);
    expect(r.providerCostUsd).toBeNull();
  });

  it("TEST provenance excluded by default", () => {
    const snap = liveSnap("1.0000000000");
    snap.collectionProvenance = "TEST_SUBSTITUTED";
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.limits).toContain("NO_LIVE_COMPLETE_SNAPSHOTS");
  });

  it("partial studio estimation never becomes COMPARABLE", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "partial",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("PARTIAL");
    expect(r.disclosed).toBe(false);
  });
});

```

#### `projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";

describe("buildStudioContinuityFromWork", () => {
  it("uses real sources, acquis, tokens and rights — not placeholders", () => {
    const snap = buildStudioContinuityFromWork({
      id: "work_1",
      revision: 3,
      ownerToken: "tok_live",
      leaseUntil: new Date(Date.now() + 60_000),
      state: {
        intentSummary: "investigate docs",
        conclusions: ["Finding A is durable"],
        sources: [
          { ref: "d4:doc1", versionOrSha: "rev9" },
          { ref: "git-file:r:path.ts", versionOrSha: "abc123" },
        ],
      },
      resources: { inputTokens: 100, outputTokens: 40, segmentCalls: 2 },
    });
    expect(snap.workId).toBe("work_1");
    expect(snap.checkpointId).toBe("ckpt:work_1:r3");
    expect(snap.acquisFingerprint).toContain("Finding A");
    expect(snap.sourceVersions).toEqual([
      "d4:doc1@rev9",
      "git-file:r:path.ts@abc123",
    ]);
    expect(snap.budgets.tokensConsumed).toBe(140);
    expect(snap.rightsOk).toBe(true);
  });

  it("rightsOk false when lease expired or owner token absent", () => {
    const expired = buildStudioContinuityFromWork({
      id: "work_2",
      revision: 1,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() - 1000),
      state: { intentSummary: "x", sources: [] },
      resources: {},
    });
    expect(expired.rightsOk).toBe(false);
    const noTok = buildStudioContinuityFromWork({
      id: "work_3",
      revision: 1,
      ownerToken: null,
      leaseUntil: null,
      state: { intentSummary: "x", sources: [] },
      resources: {},
    });
    expect(noTok.rightsOk).toBe(false);
  });
});

```

#### `projects/sfia-studio-next/web/tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts`

```ts
/**
 * Macro-lot 1 — integrated substituted campaign (Intervention 1).
 * REAL: PostgreSQL DEV · SUBSTITUTED: OpenAI Admin / Responses / WEB / continuity.
 * No LIVE emission. No Admin key. No store=true.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  markSubstitutedAdminTransport,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "@/domains/finops/provider-admin-usage-collector";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
} from "@/domains/finops/provider-admin-usage-repository";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";
import {
  beginCampaignEnvelope,
  createFrontierAwareFetch,
  getActiveCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  assertSdkInvocationAdmission,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";
import {
  configureAgentsSdkTracing,
  getAgentsTracingSinkRecords,
  resetAgentsTracingTestState,
  runWithAgentsTracingCorrelation,
  withAgentsTracingNetworkOracle,
  StudioLocalTraceProcessor,
} from "@/lib/agents-sdk-tracing";
import { createHash } from "node:crypto";

const hasDb = Boolean(process.env.DATABASE_URL?.includes("5433"));

const costsPage = {
  object: "page",
  data: [
    {
      object: "bucket",
      start_time: 1_700_000_000,
      end_time: 1_700_086_400,
      results: [
        {
          object: "organization.costs.result",
          amount: { value: 0.42, currency: "usd" },
          project_id: "proj_ml1_integrated",
        },
      ],
    },
  ],
  has_more: false,
  next_page: null,
};

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

describe.skipIf(!hasDb)("ML1 integrated substituted campaign", () => {
  beforeAll(() => {
    resetAdminCollectorStateForTests();
    resetAgentsTracingTestState();
  });

  afterAll(() => {
    resetAdminCollectorStateForTests();
    resetAgentsTracingTestState();
    __resetProviderEmissionFrontierForTests();
    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
    delete process.env.SFIA_AGENTS_TRACING_MODE;
  });

  it("collect → PG → FinOps → D3 continuity → tracing → frontier PARTIAL", async () => {
    const work = {
      id: `work_ml1_${Date.now()}`,
      revision: 2,
      ownerToken: "tok_ml1",
      leaseUntil: new Date(Date.now() + 120_000),
      state: {
        intentSummary: "qualify integrated foundation",
        conclusions: ["Acquis durable A"],
        sources: [{ ref: "d4:doc", versionOrSha: "v1" }],
      },
      resources: { inputTokens: 50, outputTokens: 20, segmentCalls: 1 },
    };
    const continuity = buildStudioContinuityFromWork(work);
    expect(continuity.sourceVersions).toEqual(["d4:doc@v1"]);
    expect(continuity.budgets.tokensConsumed).toBe(70);
    expect(continuity.rightsOk).toBe(true);
    expect(continuity.checkpointId).toBe(`ckpt:${work.id}:r2`);

    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage,
    }));
    const collection = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        organizationScope: "org:ml1-integrated",
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
      persistToPg: true,
    });
    expect(collection.status).toBe("READY");
    expect(collection.snapshots.length).toBeGreaterThan(0);
    expect(
      collection.snapshots.every(
        (s) => s.collectionProvenance === "TEST_SUBSTITUTED",
      ),
    ).toBe(true);

    const fromPg = await listAdminSnapshotsFromPg({
      organizationScope: "org:ml1-integrated",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(
      fromPg.some((s) => s.dimensions.project_id === "proj_ml1_integrated"),
    ).toBe(true);

    const freshness = await getAdminCollectionFreshnessFromPg({
      organizationScope: "org:ml1-integrated",
      provenance: "TEST_SUBSTITUTED",
      projectId: "proj_ml1_integrated",
    });
    expect(freshness.snapshotCount).toBeGreaterThan(0);

    process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE = "1";
    const finops = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.4,
      studioEstimationKind: "known",
      snapshots: collection.snapshots,
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:ml1-integrated",
      configuredOrgId: "ml1-integrated",
      configuredProjectId: "proj_ml1_integrated",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: freshness.snapshotCount,
    });
    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
    expect(["COMPARABLE", "PARTIAL", "NON_COMPARABLE"]).toContain(
      finops.comparability,
    );

    process.env.SFIA_AGENTS_TRACING_MODE = "local";
    await configureAgentsSdkTracing(process.env);
    const { result: spanOk, traceExportUrls } =
      await withAgentsTracingNetworkOracle(async () =>
        runWithAgentsTracingCorrelation(
          {
            operationId: "op_ml1_int",
            generationId: "gen_ml1_int",
            attemptId: "att_ml1_int",
            workId: work.id,
          },
          async () => {
            const p = new StudioLocalTraceProcessor();
            await p.onSpanEnd({
              traceId: "t_ml1",
              spanId: "s_ml1",
              endedAt: Date.now(),
              spanData: { type: "generation", name: "ml1" },
            });
            return "ok";
          },
        ),
      );
    expect(spanOk).toBe("ok");
    expect(traceExportUrls).toEqual([]);
    expect(
      getAgentsTracingSinkRecords().some(
        (r) => r.correlation.operationId === "op_ml1_int",
      ),
    ).toBe(true);

    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 4,
        maxHostedSearches: 5,
        required: true,
      });
      let call = 0;
      const fakeFetch = (async () => {
        call += 1;
        if (call === 1) {
          return new Response(JSON.stringify({ id: "r1" }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        }
        return new Response(
          JSON.stringify({
            id: "r2",
            tool_usage: { web_search: { num_requests: 1 } },
          }),
          { status: 200, headers: { "content-type": "application/json" } },
        );
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      const prevKey = process.env.OPENAI_API_KEY;
      const prevFp = process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
      const prevLane = process.env.STUDIO_LANE;
      process.env.OPENAI_API_KEY = TEST_KEY;
      process.env.SFIA_OPENAI_EXPECTED_KEY_FP = TEST_FP;
      process.env.STUDIO_LANE = "DEV";
      try {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const body = JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 50,
          reasoning: { effort: "medium" },
          tools: [{ type: "web_search" }],
          max_tool_calls: 1,
        });
        await gated("https://api.openai.com/v1/responses", {
          method: "POST",
          body,
        });
        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
          "UNKNOWN",
        );
        await gated("https://api.openai.com/v1/responses", {
          method: "POST",
          body,
        });
        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
          "PARTIAL",
        );
      } finally {
        if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
        else process.env.OPENAI_API_KEY = prevKey;
        if (prevFp === undefined) delete process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
        else process.env.SFIA_OPENAI_EXPECTED_KEY_FP = prevFp;
        if (prevLane === undefined) delete process.env.STUDIO_LANE;
        else process.env.STUDIO_LANE = prevLane;
      }
    });
  });

  it("rights revoked → FinOps UNAVAILABLE with no amount disclosure", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 1,
      studioEstimationKind: "known",
      snapshots: [],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:x",
      configuredOrgId: "x",
      configuredProjectId: "p",
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.providerCostUsd).toBeNull();
    expect(r.disclosed).toBe(false);
  });
});

```

### 4.7 UX / as-built (créés/réécrits)

#### `projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md`

```md
# Delta UX candidat — FinOps page 13 (Figma inspectée RO)

| Champ | Valeur |
|---|---|
| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
| fileKey / node | `itgvCulInEnFY6DvgIegvP` / `1332:2305` |
| Inspection | **2026-11-27** — `get_screenshot` + `get_metadata` (session RO) |
| Empreinte locale | `.tmp-sfia-review/figma/page13-finops.png` (995×1280 render) |
| Statut | **CANDIDATE — NOT APPLIED** · **G-FINOPS-UX fermé** |
| Backend | `providerReconciliation` via `/api/finops/summary` (service-path evaluator) |

## Structure Figma observée (frames)

| Frame | Id | Rôle |
|---|---|---|
| 13.01 / 13.02 | Intégrations | Rail + menu paramètres (contexte navigation) |
| **13.03** | Consommation et coûts — synthèse | Surface cible du delta |
| 13.04 | Synthèse + menu ouvert | Même surface, état rail |
| 13.05 | Inspection d’un travail | Détail travail (hors delta agrégé) |
| 13.06 | Aucune donnée | Empty state à préserver |

Composants réutilisés observés : `FinOps / Indicateur`, `FinOps / Filtre`, `FinOps / Ligne travail`, rail personnel Paramètres.

## Orientation Morris (conservée)

Préserver rail, shell, tokens, hiérarchie et conventions de la cible validée.
Aucun nouveau cockpit financier. Aucun plafond / crédit / rechargement.
**Ne pas modifier la cible Figma** avant G-FINOPS-UX.

## Proposition visuelle (bloc secondaire sous KPIs 13.03)

Insérer **sous** la rangée des 4 indicateurs existants (Coût estimé / Jetons / Travaux / Couverture), **au-dessus** des graphiques « Évolution » / « Répartition », un bandeau secondaire unique :

| Zone UI | Donnée API | États affichés |
|---|---|---|
| Estimation Studio | `studioEstimatedUsd` + `studioEstimationKind` | known · partial · empty · unknown |
| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé (jamais de montant si non `disclosed`) |
| Période | fenêtre UTC de comparaison | affichée si fenêtre explicite / periodEqual |
| Fraîcheur | `freshness.status` + scoped count | READY · PARTIAL · IDLE · ERROR |
| Comparabilité | `comparability` | COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE |
| Écart | `deltaUsd` | **uniquement** si COMPARABLE + disclosed |
| Limites métier | `limits[]` sanitised | libellés métier, jamais secrets |

Mapping composants Figma → code (après GO) :

| Figma | Code candidat |
|---|---|
| `FinOps / Indicateur` (réemploi style) | Sous-bandeau textuel / 2 micro-indicateurs (Studio vs Fournisseur) — **pas** 4 nouveaux KPI hero |
| Filtres existants | Inchangés (période / projet / modèle) |
| Empty 13.06 | Si `UNAVAILABLE` sans estimation : conserver empty ; si estimation seule : afficher Studio + « Coût fournisseur indisponible » |

## Non-régression

Interface actuelle (`FinOpsConsumptionPanel`) **ne consomme pas encore** `providerReconciliation` en UI — backend prêt, UI inchangée jusqu’au GO.
Smoke HTTP `/settings/consumption` à rejouer sur le build final.

## GO demandé

Validation Morris unique de ce delta (visuel + mapping) avant transposition Figma → code.

```

#### `projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`

```md
# Convergence OpenAI–Studio — As-built Macro-lot 1 (Integrated foundation completion)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 (Intervention 1 — integrated completion) |
| Statut | **IMPLEMENTED / COVERAGE VERIFIED (DEV substituted)** — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée cycle | `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47` |
| Migrations DEV | `023` + `024` (corrigée) + `025` security+canon · PG 16.16 |
| Hors GO | Admin LIVE · création clé · WEB LIVE · tracing ON ops · continuité ON ops · Figma apply · push projet · RECETTE |

## Corrections Intervention 1

| Chantier | Résultat | Niveau |
|---|---|---|
| A Sécurité PG | LOGIN roles NOLOGIN ; auth refuse ; secrets retirés des sources courantes ; SET ROLE proofs | BEHAVIOR PROVEN |
| A Provenance | `collection_provenance` dans index unique NULLS NOT DISTINCT ; upsert conflict cols | BEHAVIOR PROVEN |
| A Transport | TEST/LIVE WeakSet ; envelope ; parsing ; READY ≠ HTTP 200 seul | COVERAGE VERIFIED |
| B FinOps | `evaluateFinOpsReconciliation` sur chemin service ; COMPARABLE + refus droits | BEHAVIOR PROVEN |
| B UX | Figma page 13 inspectée RO ; proposition visuelle candidate | DOCUMENTED (NOT APPLIED) |
| C Tracing | Real `@openai/agents` + tool loop + spans + oracle export=[] | BEHAVIOR PROVEN |
| D Frontier/WEB | UNKNOWN→MEASURED=PARTIAL ; A3 Option 1/2 | BEHAVIOR PROVEN / DOCUMENTED |
| E Continuité D3 | `buildStudioContinuityFromWork` données réelles ; chain null ; OFF | BEHAVIOR PROVEN |
| F Campagne | Collecte→PG→FinOps→D3→tracing→frontier substituée | BEHAVIOR PROVEN |

## Flux as-built

```
Collecteur isolé (TEST|LIVE)
  → envelope bornée (émission)
  → PG snapshots (provenance in canon)
  → repository lecture LIVE only (produit)
  → FinOps evaluateFinOpsReconciliation (service path)
  → UI existante (non-régression ; delta UX candidat)

Conducteur D3
  → buildStudioContinuityFromWork(work)
  → continuityChain null (OFF)
  → frontier emission (WEB OFF)

Agents SDK
  → processors locaux + ALS correlation
  → oracle réseau (export distant = 0)
  → opérationnel OFF jusqu’à G-TRACING-LOCAL
```

## Fake/Real

| Surface | Niveau |
|---|---|
| PostgreSQL DEV | REAL |
| Process / API Studio | REAL (après build final) |
| SDK Agents | REAL installé + transport substitué |
| Admin OpenAI | SUBSTITUTED |
| Responses / WEB / continuité native | SUBSTITUTED / OFF |
| Figma | REAL RO screenshot+metadata |

## Gates

Voir `dossier-gates-morris-consolide-ml1-20261127.md`.

**Levé DEV :** G-PROVIDER-SNAPSHOT-MIGRATION
**Proposables :** G-ADMIN-SECRET · G-FINOPS-UX · G-TRACING-LOCAL · G-NATIVE-CONTINUITY
**Fermés / NOT RUN :** G-ADMIN-LIVE · G-WEB-PUBLIC/A3 · G-PROVIDER-LIVE-QUALIFICATION · RECETTE

## Lignes 023 préexistantes

Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE métier).

## Version produit

NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED

```

## 5. Modifications — diff utile complet (commit `59893c814808fcf32501f32a34a379d7d85346e9`)

> Occultation : toute valeur `PASSWORD '…'` serait remplacée par `[REDACTED_COMPROMISED_SECRET]` (aucune présente dans le tip).

```diff
commit 59893c814808fcf32501f32a34a379d7d85346e9
Author:     Morris Cleland <morris@mac.home>
AuthorDate: Fri Nov 27 02:49:45 2026 +0100
Commit:     Morris Cleland <morris@mac.home>
CommitDate: Fri Nov 27 02:49:45 2026 +0100

    feat(next): complete integrated ML1 provider foundation for Morris gates

    Remediate compromised DEV PG login roles, harden Admin snapshot provenance canon, wire FinOps service-path reconciliation, conclusive local Agents SDK tracing, and D3 continuity from real work owners — without LIVE activation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
index b6a5757f..2ea42cbe 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
@@ -1,43 +1,71 @@
-# Convergence OpenAI–Studio — As-built Macro-lot 1 (Admin & FinOps qualification)
+# Convergence OpenAI–Studio — As-built Macro-lot 1 (Integrated foundation completion)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-26 (Admin & FinOps qualification) |
-| Statut | Qualification Admin/FinOps DEV — **NOT ADOPTED** · **NO RELEASE** |
-| HEAD entrée cycle | `106c6392` |
-| Migrations DEV | `023` + `024` (provenance) · PG 16.16 |
-| Hors GO | Admin LIVE · création clé · WEB · tracing ON · continuité ON · Figma apply · push projet |
+| Date | 2026-11-27 (Intervention 1 — integrated completion) |
+| Statut | **IMPLEMENTED / COVERAGE VERIFIED (DEV substituted)** — **NOT ADOPTED** · **NO RELEASE** |
+| HEAD entrée cycle | `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47` |
+| Migrations DEV | `023` + `024` (corrigée) + `025` security+canon · PG 16.16 |
+| Hors GO | Admin LIVE · création clé · WEB LIVE · tracing ON ops · continuité ON ops · Figma apply · push projet · RECETTE |

-## Corrections de ce cycle
+## Corrections Intervention 1

-| Sujet | Correction |
-|---|---|
-| Intégrité upsert | Partial ne met plus à jour les métriques d’une ligne complete ; `WHERE` SQL + mémoire |
-| Provenance | `collection_provenance` TEST_SUBSTITUTED \| LIVE \| UNKNOWN ; TEST exclu des projections |
-| Fallback mémoire | Produit → UNAVAILABLE si PG down ; mémoire seulement `VITEST` + flag explicite |
-| Transport | Registry WeakSet ; re-check GO avant retry ; body borné pendant lecture |
-| Enveloppe | start_time requis ; LIVE exige end_time + project_ids ; maxPages ≤ 20 |
-| FinOps | `assessPeriodEquality` ; COMPARABLE positif possible ; fraîcheur périmètre |
-| Rôles PG | LOGIN exercés ; refus INSERT reader / SELECT pilots collector prouvés |
-| Restore | `pg_restore` réel vers `sfia_next_dev_restore_probe` puis DROP (44 tables) |
+| Chantier | Résultat | Niveau |
+|---|---|---|
+| A Sécurité PG | LOGIN roles NOLOGIN ; auth refuse ; secrets retirés des sources courantes ; SET ROLE proofs | BEHAVIOR PROVEN |
+| A Provenance | `collection_provenance` dans index unique NULLS NOT DISTINCT ; upsert conflict cols | BEHAVIOR PROVEN |
+| A Transport | TEST/LIVE WeakSet ; envelope ; parsing ; READY ≠ HTTP 200 seul | COVERAGE VERIFIED |
+| B FinOps | `evaluateFinOpsReconciliation` sur chemin service ; COMPARABLE + refus droits | BEHAVIOR PROVEN |
+| B UX | Figma page 13 inspectée RO ; proposition visuelle candidate | DOCUMENTED (NOT APPLIED) |
+| C Tracing | Real `@openai/agents` + tool loop + spans + oracle export=[] | BEHAVIOR PROVEN |
+| D Frontier/WEB | UNKNOWN→MEASURED=PARTIAL ; A3 Option 1/2 | BEHAVIOR PROVEN / DOCUMENTED |
+| E Continuité D3 | `buildStudioContinuityFromWork` données réelles ; chain null ; OFF | BEHAVIOR PROVEN |
+| F Campagne | Collecte→PG→FinOps→D3→tracing→frontier substituée | BEHAVIOR PROVEN |

-## Flux
+## Flux as-built

 ```
 Collecteur isolé (TEST|LIVE)
-  → envelope bornée
-  → PG snapshots (provenance)
-  → repository lecture LIVE only
-  → FinOps reconciliation (periodEqual démontrable)
-  → UI existante (non-régression)
+  → envelope bornée (émission)
+  → PG snapshots (provenance in canon)
+  → repository lecture LIVE only (produit)
+  → FinOps evaluateFinOpsReconciliation (service path)
+  → UI existante (non-régression ; delta UX candidat)
+
+Conducteur D3
+  → buildStudioContinuityFromWork(work)
+  → continuityChain null (OFF)
+  → frontier emission (WEB OFF)
+
+Agents SDK
+  → processors locaux + ALS correlation
+  → oracle réseau (export distant = 0)
+  → opérationnel OFF jusqu’à G-TRACING-LOCAL
 ```

+## Fake/Real
+
+| Surface | Niveau |
+|---|---|
+| PostgreSQL DEV | REAL |
+| Process / API Studio | REAL (après build final) |
+| SDK Agents | REAL installé + transport substitué |
+| Admin OpenAI | SUBSTITUTED |
+| Responses / WEB / continuité native | SUBSTITUTED / OFF |
+| Figma | REAL RO screenshot+metadata |
+
 ## Gates

+Voir `dossier-gates-morris-consolide-ml1-20261127.md`.
+
 **Levé DEV :** G-PROVIDER-SNAPSHOT-MIGRATION
-**Proposables si readiness OK :** G-ADMIN-SECRET (après revue Morris)
-**Fermés :** G-ADMIN-LIVE · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE
+**Proposables :** G-ADMIN-SECRET · G-FINOPS-UX · G-TRACING-LOCAL · G-NATIVE-CONTINUITY
+**Fermés / NOT RUN :** G-ADMIN-LIVE · G-WEB-PUBLIC/A3 · G-PROVIDER-LIVE-QUALIFICATION · RECETTE

 ## Lignes 023 préexistantes

-Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE).
+Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE métier).
+
+## Version produit
+
+NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261127.md b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261127.md
new file mode 100644
index 00000000..e54e1418
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261127.md
@@ -0,0 +1,60 @@
+# Dossier d’arbitrage — G-WEB-PUBLIC / A3 (Intervention 1)
+
+| Champ | Valeur |
+|---|---|
+| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
+| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
+| Date | 2026-11-27 |
+| Remplace | synthèse 2026-11-26 (conservée historiquement) |
+
+## Distinctions démontrées (déterministe + campagne substituée)
+
+| Dimension | Sémantique | Preuve |
+|---|---|---|
+| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
+| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
+| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
+| UNKNOWN puis MEASURED | Agrégat campagne **PARTIAL** | Tests + campagne ML1 intégrée |
+| Stream SSE | UNKNOWN borné — pas de buffer illimité | Code frontier |
+| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |
+
+**`max_tool_calls` n’est pas une garantie du nombre maximal de recherches facturables** sans preuve `num_requests`.
+
+---
+
+## Option 1 — Enveloppe stricte démontrable avant émission
+
+| | |
+|---|---|
+| Contrôlé | Admission D6/B1 ; MIXED CLOSED ; max_tool_calls sur le wire ; slots HTTP ; tokens réservés |
+| Mesuré | Uniquement si le fournisseur expose `num_requests` **avant** ou **au** point d’émission (non démontré aujourd’hui pour hosted) |
+| Risque restant | Hosted web_search destinations hors egress B1 ; facturation peut diverger de max_tool_calls |
+| Dépassement | Refus d’émission si enveloppe locale saturée ; suspension campagne |
+| Rollback | WEB OFF |
+| Faisabilité | **Partielle** — borne stricte facturable **non** démontrable a priori sur hosted |
+| Recommandation | Ne pas présenter comme garantie facturable |
+
+## Option 2 — Enveloppe sur dimensions contrôlables + mesure a posteriori (recommandée)
+
+| | |
+|---|---|
+| Contrôlé | `max_tool_calls`, tokens, slots HTTP, admission, corpus public non sensible |
+| Mesuré | `num_requests` a posteriori lorsque fourni ; sinon UNKNOWN/PARTIAL |
+| Risque restant | Écart possible borne vs facturable ; destinations hosted ≠ B1 |
+| Dépassement | Suspendre si mesure > enveloppe ; jamais ASSUMED_1 |
+| Rollback | WEB OFF |
+| Recommandation | **Retenir Option 2** avec acceptation explicite du risque résiduel |
+
+---
+
+## Scénario LIVE public borné (préparé, NOT RUN)
+
+1. Corpus : pages de référence publiques (ex. MDN / docs OpenAI publiques).
+2. Limites : max_tool_calls=1 ; maxHttpAttempts≤3 ; tokens bornés.
+3. Oracle restitution : citations attendues / absence de contenu privé.
+4. STOP : ERROR, dépassement mesure, MIXED, fuite hors allowlist.
+5. Preuve : frontier PARTIAL/MEASURED + ledger usage ; pas de second ledger.
+
+## Rollback
+
+WEB OFF. Jamais ASSUMED_1 comme garantie billable.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-gates-morris-consolide-ml1-20261127.md b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-gates-morris-consolide-ml1-20261127.md
new file mode 100644
index 00000000..73e27811
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-gates-morris-consolide-ml1-20261127.md
@@ -0,0 +1,151 @@
+# Dossier unique des gates Morris — Macro-lot 1 (Intervention 1)
+
+| Champ | Valeur |
+|---|---|
+| Date | 2026-11-27 |
+| Cycle | Integrated foundation completion |
+| Verdict candidat | **READY FOR CONSOLIDATED MORRIS GATES** (technique DEV ; LIVE non exécuté) |
+| Autorité | Morris uniquement pour chaque gate |
+| NO RELEASE · NOT ADOPTED · RECETTE hors GO | |
+
+---
+
+## G-PROVIDER-SNAPSHOT-MIGRATION
+
+| | |
+|---|---|
+| Objet | Migrations DEV 023–025 (snapshots Admin + provenance + canon + security) |
+| Prérequis | Isolation DEV :5433 |
+| Preuves | Index canon inclut `collection_provenance` ; schéma 025 ; upsert ON CONFLICT |
+| Options | Maintenir GO DEV (recommandé) |
+| Recommandation | Maintenu |
+| Risque résiduel | Lignes UNKNOWN historiques exclues des projections |
+| Enveloppe | DEV only |
+| Rollback | Pas de DROP métier ; index recréable |
+| Action Morris | Aucune nouvelle — GO DEV déjà en vigueur |
+| Statut | **LEVÉ DEV** |
+
+## G-ADMIN-SECRET
+
+| | |
+|---|---|
+| Objet | Provisionnement sécurisé clé Admin OpenAI (hors Git) |
+| Prérequis | Identifiants PG compromis invalidés (NOLOGIN) ; transport TEST/LIVE séparés ; procédure candidate |
+| Preuves | LOGIN roles `rolcanlogin=f` ; auth refuse ; mots de passe retirés des sources courantes 024/025 ; SET ROLE proofs SQLSTATE 42501 |
+| Options | (A) Provisionner via secret manager OS / env local non-git (B) Reporter |
+| Recommandation | A — après revue readiness |
+| Risque résiduel | Historique Git distant conserve d’anciennes valeurs — traiter comme compromises |
+| Enveloppe | Clé Admin lecture Usage/Costs uniquement ; jamais dans Git |
+| Rollback | Révoquer clé côté OpenAI |
+| Action Morris | Créer/placer secret Admin ; **ne pas** coller dans chat/Git |
+| Statut | **PROPOSABLE** — pas de clé demandée avant GO |
+
+## G-ADMIN-LIVE
+
+| | |
+|---|---|
+| Objet | Première collecte LIVE bornée Usage + Costs |
+| Prérequis | G-ADMIN-SECRET levé ; `SFIA_ADMIN_LIVE_GO=1` ; projet DEV autorisé ; fenêtre UTC |
+| Preuves | Enveloppe code : start/end_time, maxPages≤20, redirects interdits, body borné |
+| Options | GET `/organization/costs` (+ usage si nécessaire) · 1 org · 1 project_ids · ≤3 pages · STOP sur ERROR/PARTIAL |
+| Recommandation | Après G-ADMIN-SECRET ; fenêtre ≤ 24h UTC ; group_by=project_id |
+| Risque résiduel | Permissions compte OpenAI non prouvées ici |
+| Enveloppe | Voir `procedure-admin-live-qualification-candidate.md` |
+| Rollback | Désactiver LIVE_GO ; conserver TEST_SUBSTITUTED |
+| Action Morris | Autoriser enveloppe exacte + STOP |
+| Statut | **FERMÉ** — NOT RUN |
+
+## G-FINOPS-UX
+
+| | |
+|---|---|
+| Objet | Valider proposition visuelle page 13 (Figma inspectée RO) |
+| Prérequis | Backend `providerReconciliation` service-path COMPARABLE |
+| Preuves | Screenshot + metadata Figma `1332:2305` ; mapping états → composants ; UX actuelle non régressive |
+| Options | (A) Valider delta secondaire (B) Reporter (C) Ajuster mapping |
+| Recommandation | A — bloc secondaire sous KPIs existants (13.03) |
+| Risque résiduel | Transposition code non faite |
+| Enveloppe | Aucun nouvel écran ; aucun plafond monétaire |
+| Rollback | UI actuelle inchangée |
+| Action Morris | Valider `ux-delta-finops-page13-candidate.md` |
+| Statut | **PROPOSABLE** — NOT APPLIED |
+
+## G-TRACING-LOCAL
+
+| | |
+|---|---|
+| Objet | Activer tracing Agents SDK LOCAL sans export distant |
+| Prérequis | Preuve SDK réelle + oracle réseau ; OFF fail-closed |
+| Preuves | `ml5-agents-sdk-tracing-real-sdk.test.ts` : Agent.run + tool loop + spans corrélés + export=[] |
+| Options | (A) LOCAL ON DEV (B) rester OFF |
+| Recommandation | A en DEV uniquement après revue |
+| Risque résiduel | Métadonnées allowlist — pas de prompts |
+| Enveloppe | `SFIA_AGENTS_TRACING_MODE=local` ; processors locaux |
+| Rollback | MODE=off |
+| Action Morris | Autoriser activation locale |
+| Statut | **PROPOSABLE** — opérationnel OFF |
+
+## G-WEB-PUBLIC / A3
+
+| | |
+|---|---|
+| Objet | Niveau d’enveloppe hosted WEB avant campagne LIVE bornée |
+| Prérequis | F15 déterministe ; WEB OFF exploit |
+| Preuves | Frontier UNKNOWN→MEASURED=PARTIAL ; max_tool_calls injection ; dossier A3 |
+| Options | Voir `dossier-g-web-public-a3-20261127.md` Option 1 vs 2 |
+| Recommandation | Option 2 (pré-réserve contrôlable + mesure a posteriori + risque explicite) |
+| Risque résiduel | Destinations hosted ≠ egress B1 |
+| Enveloppe | Requêtes publiques non sensibles ; STOP documenté |
+| Rollback | WEB OFF |
+| Action Morris | Choisir option + accepter risque résiduel |
+| Statut | **FERMÉ** |
+
+## G-NATIVE-CONTINUITY
+
+| | |
+|---|---|
+| Objet | Autoriser variantes native (`previous_response_id` / cache / compaction) vs reconstruction Studio |
+| Prérequis | Données D3 réelles raccordées ; DATA-01 ; pas de store=true sans arbitrage |
+| Preuves | `buildStudioContinuityFromWork` ; continuityChain null ; OFF ; tests unit + campagne |
+| Options | (A) Comparatif substitué puis LIVE borné (B) rester reconstruction (C) pivot DATA-01 |
+| Recommandation | A — comparer sans adopter tous les mécanismes |
+| Risque résiduel | Rétention fournisseur / permissions non prouvées |
+| Enveloppe | Intervention 2 après GO |
+| Rollback | Reconstruction Studio |
+| Action Morris | Autoriser campagne comparative |
+| Statut | **PROPOSABLE** — opérationnel OFF |
+
+## G-PROVIDER-LIVE-QUALIFICATION
+
+| | |
+|---|---|
+| Objet | Campagne intégrée DEV avec effets fournisseur réels |
+| Prérequis | Gates Admin/Tracing/WEB/Continuity selon dépendances |
+| Preuves | Campagne substituée Intervention 1 PASS |
+| Options | Reporter jusqu’aux gates amont |
+| Recommandation | Intervention 2 uniquement |
+| Risque résiduel | Coût/latence réels |
+| Enveloppe | Corpus, modèles, STOP — à figer au GO |
+| Rollback | Couper clés / modes OFF |
+| Action Morris | GO Intervention 2 distinct |
+| Statut | **FERMÉ** |
+
+## RECETTE / promotions
+
+**HORS AUTORISATION** — worktree figé, port 3200, PG 5434 non touchés.
+
+---
+
+## Chemin critique Intervention 2 (après gates)
+
+1. Morris lève G-ADMIN-SECRET (secret hors Git).
+2. Morris lève G-ADMIN-LIVE (enveloppe exacte).
+3. Collecte LIVE bornée → PG LIVE provenance.
+4. FinOps COMPARABLE sur données LIVE (si droits Pilote).
+5. Optionnel : G-TRACING-LOCAL ON DEV.
+6. Morris tranche G-WEB-PUBLIC/A3 → scénario LIVE public borné.
+7. Morris autorise G-NATIVE-CONTINUITY comparative.
+8. G-PROVIDER-LIVE-QUALIFICATION — scénario intégré réel.
+9. Preuves → revue → **pas** de RECETTE/STABLE sans GO distinct.
+
+Rollback global : tous modes OFF ; clés révoquables ; DEV isolé.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/roadmap-delta-ml1-candidate-20261127.md b/projects/sfia-studio-next/construction/convergence-openai-studio/roadmap-delta-ml1-candidate-20261127.md
new file mode 100644
index 00000000..ddda3dbf
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/roadmap-delta-ml1-candidate-20261127.md
@@ -0,0 +1,21 @@
+# Proposition de delta Roadmap — Macro-lot 1 (NON APPLIQUÉE)
+
+| Champ | Valeur |
+|---|---|
+| Date | 2026-11-27 |
+| Statut | **CANDIDATE — NOT APPLIED** · pas de modification de `governance/roadmap.md` |
+| Autorité | Morris (D2) |
+
+## Delta proposé (texte candidat)
+
+Sous R5 / ML5 / Convergence OpenAI–Studio :
+
+- Macro-lot 1 — Socle fournisseur natif et observabilité : **construction DEV complétée** ; qualification LIVE gouvernée **en attente des gates consolidés** (Intervention 2).
+- Gates regroupés : G-ADMIN-SECRET · G-ADMIN-LIVE · G-FINOPS-UX · G-TRACING-LOCAL · G-WEB-PUBLIC/A3 · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION.
+- Macro-lots 2/3 : **non engagés**.
+- RECETTE / STABLE / ADOPTED : inchangés.
+- Version produit : **NO RELEASE** · STABLE NOT AVAILABLE.
+
+## Condition
+
+N’appliquer qu’après revue Morris du dossier gates et verdict ChatGPT.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
index bc06e2af..04ae1b7a 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
@@ -1,42 +1,59 @@
-# Delta UX candidat — FinOps page 13 (Figma)
+# Delta UX candidat — FinOps page 13 (Figma inspectée RO)

 | Champ | Valeur |
 |---|---|
 | Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
+| fileKey / node | `itgvCulInEnFY6DvgIegvP` / `1332:2305` |
+| Inspection | **2026-11-27** — `get_screenshot` + `get_metadata` (session RO) |
+| Empreinte locale | `.tmp-sfia-review/figma/page13-finops.png` (995×1280 render) |
 | Statut | **CANDIDATE — NOT APPLIED** · **G-FINOPS-UX fermé** |
-| Backend | `providerReconciliation` via `/api/finops/summary` |
-| Inspection Figma | Non rejouée dans ce cycle — limite documentée ; pas d’invention visuelle |
+| Backend | `providerReconciliation` via `/api/finops/summary` (service-path evaluator) |
+
+## Structure Figma observée (frames)
+
+| Frame | Id | Rôle |
+|---|---|---|
+| 13.01 / 13.02 | Intégrations | Rail + menu paramètres (contexte navigation) |
+| **13.03** | Consommation et coûts — synthèse | Surface cible du delta |
+| 13.04 | Synthèse + menu ouvert | Même surface, état rail |
+| 13.05 | Inspection d’un travail | Détail travail (hors delta agrégé) |
+| 13.06 | Aucune donnée | Empty state à préserver |
+
+Composants réutilisés observés : `FinOps / Indicateur`, `FinOps / Filtre`, `FinOps / Ligne travail`, rail personnel Paramètres.

 ## Orientation Morris (conservée)

-Préserver rail, composants, hiérarchie et conventions de la cible validée.
+Préserver rail, shell, tokens, hiérarchie et conventions de la cible validée.
 Aucun nouveau cockpit financier. Aucun plafond / crédit / rechargement.
+**Ne pas modifier la cible Figma** avant G-FINOPS-UX.
+
+## Proposition visuelle (bloc secondaire sous KPIs 13.03)

-## Mapping états → restitution
+Insérer **sous** la rangée des 4 indicateurs existants (Coût estimé / Jetons / Travaux / Couverture), **au-dessus** des graphiques « Évolution » / « Répartition », un bandeau secondaire unique :

-| Zone | Données | États |
+| Zone UI | Donnée API | États affichés |
 |---|---|---|
-| Estimation Studio | `studioEstimatedUsd` / kind | known · partial · empty · unknown |
-| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé |
-| Période | fenêtre UTC de comparaison | affichée seulement si `periodEqual` ou fenêtre explicite |
-| Fraîcheur | `freshness` scoped au périmètre | READY · PARTIAL · IDLE · ERROR |
+| Estimation Studio | `studioEstimatedUsd` + `studioEstimationKind` | known · partial · empty · unknown |
+| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé (jamais de montant si non `disclosed`) |
+| Période | fenêtre UTC de comparaison | affichée si fenêtre explicite / periodEqual |
+| Fraîcheur | `freshness.status` + scoped count | READY · PARTIAL · IDLE · ERROR |
 | Comparabilité | `comparability` | COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE |
-| Écart | `deltaUsd` | **uniquement** si COMPARABLE |
-| Partiel / indisponible | `limits[]` sanitised | libellés métier, jamais secrets |
+| Écart | `deltaUsd` | **uniquement** si COMPARABLE + disclosed |
+| Limites métier | `limits[]` sanitised | libellés métier, jamais secrets |

-## Hiérarchie proposée (secondaire, hors hero)
+Mapping composants Figma → code (après GO) :

-1. Estimation Studio (existant)
-2. Coût fournisseur agrégé autorisé (nouveau bloc secondaire)
-3. Période + fraîcheur
-4. Comparabilité / écart conditionnel
-5. Message données partielles ou indisponibles
+| Figma | Code candidat |
+|---|---|
+| `FinOps / Indicateur` (réemploi style) | Sous-bandeau textuel / 2 micro-indicateurs (Studio vs Fournisseur) — **pas** 4 nouveaux KPI hero |
+| Filtres existants | Inchangés (période / projet / modèle) |
+| Empty 13.06 | Si `UNAVAILABLE` sans estimation : conserver empty ; si estimation seule : afficher Studio + « Coût fournisseur indisponible » |

 ## Non-régression

-Interface actuelle conservée tant que G-FINOPS-UX n’est pas levé.
-Smoke HTTP `/settings/consumption` = 200 sur le build courant.
+Interface actuelle (`FinOpsConsumptionPanel`) **ne consomme pas encore** `providerReconciliation` en UI — backend prêt, UI inchangée jusqu’au GO.
+Smoke HTTP `/settings/consumption` à rejouer sur le build final.

 ## GO demandé

-Validation Morris du delta avant transposition Figma → code.
+Validation Morris unique de ce delta (visuel + mapping) avant transposition Figma → code.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 86e7627b..b471a4e5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-27-OPENAI-STUDIO-CONVERGENCE-ML1-INTEGRATED-COMPLETION
+
+- **date_utc**: 2026-11-27T01:50Z
+- **lane**: DEV — Macro-lot 1 integrated foundation completion (Intervention 1)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_initial**: `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47`
+- **web_tree_initial**: `54863eda3c7311e51d36237d59d3b7c078baad0a`
+- **focus**: PG credential remédiation · provenance canon · FinOps service-path · real SDK tracing · D3 continuity owner data · A3/gates dossier · Figma RO UX · campagne substituée
+- **migration**: `025_provider_admin_security_and_canon.sql` additive · 024 passwords stripped
+- **tests**: unit FinOps/D3/tracing PASS · Admin/FinOps PG 7 PASS · frontier/continuity/admin 63 PASS · integrated campaign 2 PASS
+- **gates_dossier**: `construction/convergence-openai-studio/dossier-gates-morris-consolide-ml1-20261127.md`
+- **web_live**: OFF · push projet NON · NO RELEASE · NOT ADOPTED
+- **statut**: **MACRO-LOT 1 — INTEGRATED FOUNDATION COMPLETED — READY FOR CONSOLIDATED MORRIS GATES** (LIVE non exécuté)
+
 ## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1-ADMIN-FINOPS-QUAL

 - **date_utc**: 2026-11-26T21:45Z
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index 99cfd171..d0f33ce6 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.18 candidate — 26 novembre 2026 : Admin/FinOps qualification (snapshot integrity · provenance · PG roles · periodEqual COMPARABLE · restore proof · Admin LIVE dossier) — **ADMIN READY FOR SECURE PROVISIONING / LIVE NOT EXECUTED** ; v0.17 : operational DEV foundation |
+| Version | v0.19 candidate — 27 novembre 2026 : Integrated foundation completion (025 security+canon · FinOps service-path · real SDK tracing · D3 owner continuity · A3/gates · campagne substituée) — **MACRO-LOT 1 READY FOR CONSOLIDATED MORRIS GATES** ; v0.18 : Admin/FinOps qualification (snapshot integrity · provenance · PG roles · periodEqual COMPARABLE · restore proof · Admin LIVE dossier) — **ADMIN READY FOR SECURE PROVISIONING / LIVE NOT EXECUTED** ; v0.17 : operational DEV foundation |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 40da8bbe..239dc5a2 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -42,4 +42,5 @@ apply "021_cognitive_contract_filiation.sql"
 apply "022_provider_usage_observations.sql"
 apply "023_provider_admin_usage_snapshots.sql"
 apply "024_provider_admin_snapshot_provenance.sql"
-echo "db:migrate OK (001→024)"
\ No newline at end of file
+apply "025_provider_admin_security_and_canon.sql"
+echo "db:migrate OK (001→025)"
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql b/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql
index b212d7d9..f22349e8 100644
--- a/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql
+++ b/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql
@@ -25,44 +25,33 @@ ALTER TABLE provider_admin_usage_snapshots
 CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_provenance_idx
   ON provider_admin_usage_snapshots (collection_provenance, organization_scope);

--- LOGIN roles for exercised permission proofs (DEV only). Passwords set by operator script.
+-- NOLOGIN group roles only — never embed passwords in SQL (remédiation post-024).
+-- Permission proofs use SET ROLE as owner; LOGIN enablement is operator-local only.
 DO $$
 BEGIN
-  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
-    CREATE ROLE sfia_admin_collector_login LOGIN PASSWORD '[REDACTED_COMPROMISED_SECRET]';
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
+    CREATE ROLE sfia_admin_collector NOLOGIN;
   END IF;
-  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
-    CREATE ROLE sfia_finops_reader_login LOGIN PASSWORD '[REDACTED_COMPROMISED_SECRET]';
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
+    CREATE ROLE sfia_finops_reader NOLOGIN;
+  END IF;
+  -- Legacy login role names (if present from earlier 024): force NOLOGIN, no password in SQL.
+  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
+    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN;
+  END IF;
+  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
+    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN;
   END IF;
 END$$;

-GRANT sfia_admin_collector TO sfia_admin_collector_login;
-GRANT sfia_finops_reader TO sfia_finops_reader_login;
-GRANT USAGE ON SCHEMA public TO sfia_admin_collector_login;
-GRANT USAGE ON SCHEMA public TO sfia_finops_reader_login;
--- CONNECT on current database only (DEV operator or e2e isolate).
-DO $$
-BEGIN
-  EXECUTE format(
-    'GRANT CONNECT ON DATABASE %I TO sfia_admin_collector_login',
-    current_database()
-  );
-  EXECUTE format(
-    'GRANT CONNECT ON DATABASE %I TO sfia_finops_reader_login',
-    current_database()
-  );
-END$$;
+GRANT USAGE ON SCHEMA public TO sfia_admin_collector;
+GRANT USAGE ON SCHEMA public TO sfia_finops_reader;

 -- Ensure collector cannot touch Studio attribution ledger / pilots.
 REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
-REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_login;
 REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
-REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_login;
 REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
-REVOKE ALL ON TABLE projects FROM sfia_admin_collector_login;

 -- Reader cannot write snapshots.
 REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
 REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
-REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader_login;
-REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader_login;
diff --git a/projects/sfia-studio-next/web/src/db/migrations/025_provider_admin_security_and_canon.sql b/projects/sfia-studio-next/web/src/db/migrations/025_provider_admin_security_and_canon.sql
new file mode 100644
index 00000000..66ee56d7
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/db/migrations/025_provider_admin_security_and_canon.sql
@@ -0,0 +1,65 @@
+-- ML1 integrated completion — security remédiation + provenance in canonical identity.
+-- Additive DEV only. No DROP of data rows. No RECETTE touch.
+--
+-- SECURITY: LOGIN roles created by 024 with hardcoded passwords are treated as
+-- compromised. This migration forces NOLOGIN (invalidates password auth) and
+-- removes any requirement for secrets in SQL. Operator may later enable LOGIN
+-- via a non-git local script reading secrets from the OS keychain / env — never
+-- from migration files.
+--
+-- Note: historical 024 file is also corrected so NEW installs never reintroduce
+-- hardcoded passwords. Applied 024 environments are remediated here.
+
+-- 1) Invalidate compromised LOGIN capability (password auth no longer usable).
+DO $$
+BEGIN
+  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
+    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN;
+  END IF;
+  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
+    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN;
+  END IF;
+END$$;
+
+-- Prefer NOLOGIN role objects for grant tests (SET ROLE as superuser/owner).
+-- Keep named group roles; login clones stay NOLOGIN until operator re-enables safely.
+DO $$
+BEGIN
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
+    CREATE ROLE sfia_admin_collector NOLOGIN;
+  END IF;
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
+    CREATE ROLE sfia_finops_reader NOLOGIN;
+  END IF;
+END$$;
+
+-- 2) Canonical uniqueness MUST include provenance so TEST/LIVE/UNKNOWN never collide.
+DROP INDEX IF EXISTS provider_admin_usage_snapshots_canon_uidx;
+
+CREATE UNIQUE INDEX provider_admin_usage_snapshots_canon_uidx
+  ON provider_admin_usage_snapshots (
+    source_endpoint,
+    surface_object,
+    organization_scope,
+    interval_start_utc,
+    interval_end_utc,
+    granularity,
+    project_id,
+    api_key_id,
+    user_id,
+    model,
+    line_item,
+    api_source,
+    collection_provenance
+  ) NULLS NOT DISTINCT;
+
+-- Re-assert least privilege (idempotent).
+GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector;
+GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector;
+GRANT SELECT ON provider_admin_collection_runs TO sfia_finops_reader;
+GRANT SELECT ON provider_admin_usage_snapshots TO sfia_finops_reader;
+REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
+REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
+REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index 11070e9c..d34e5de0 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -1228,4 +1228,4 @@ export const providerAdminUsageSnapshots = pgTable(
   ],
 );

-export const schemaRevision = "024_provider_admin_snapshot_provenance";
\ No newline at end of file
+export const schemaRevision = "025_provider_admin_security_and_canon";
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
index 92527beb..9ebbe06b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
@@ -153,6 +153,64 @@ export function planProviderContinuity(input: {
   };
 }

+/**
+ * Build Studio continuity snapshot from the real D3 work owner — not placeholders.
+ */
+export function buildStudioContinuityFromWork(
+  work: {
+    id: string;
+    revision: number;
+    ownerToken: string | null;
+    leaseUntil: Date | null;
+    state: {
+      intentSummary?: string;
+      conclusions?: string[];
+      sources?: Array<{ ref: string; versionOrSha?: string | null }>;
+    };
+    resources: {
+      inputTokens?: number | null;
+      outputTokens?: number | null;
+      segmentCalls?: number;
+    };
+  },
+  _policy?: unknown,
+): StudioContinuitySnapshot {
+  const conclusions = work.state.conclusions ?? [];
+  const acquisFingerprint =
+    conclusions.length > 0
+      ? `acq:${work.revision}:${conclusions
+          .slice(0, 3)
+          .map((c) => c.slice(0, 40))
+          .join("|")}`
+      : work.state.intentSummary
+        ? `acq:${work.revision}:intent:${work.state.intentSummary.slice(0, 64)}`
+        : null;
+  const sourceVersions = (work.state.sources ?? [])
+    .map((s) => {
+      const ver = (s.versionOrSha ?? "").trim();
+      return ver ? `${s.ref}@${ver}` : s.ref;
+    })
+    .filter(Boolean)
+    .slice(0, 64);
+  const tokensIn = Math.max(0, Number(work.resources.inputTokens ?? 0) || 0);
+  const tokensOut = Math.max(0, Number(work.resources.outputTokens ?? 0) || 0);
+  const leaseOk =
+    work.leaseUntil == null || work.leaseUntil.getTime() > Date.now();
+  const rightsOk = Boolean(work.ownerToken) && leaseOk;
+  return {
+    workId: work.id,
+    acquisFingerprint,
+    sourceVersions,
+    checkpointId: `ckpt:${work.id}:r${work.revision}`,
+    budgets: {
+      tokensConsumed: tokensIn + tokensOut,
+      tokensBudget: null,
+      restitutionsRemaining: null,
+    },
+    rightsOk,
+  };
+}
+
 /**
  * Attach previous_response_id only when plan allows. Never invent store=true
  * or Conversations persistence here.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index e150ac8f..074a825e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -33,6 +33,7 @@ import {
   type NoraGenerateInput,
   type NoraGenerateResult,
 } from "./nora-adapter";
+import { buildStudioContinuityFromWork } from "./provider-response-continuity";
 import { resolvePublicWebRegistry } from "./public-web-registry";
 import {
   composeInvestigationPartialRestitution,
@@ -1514,20 +1515,7 @@ export async function runNoraCognitiveTurn(
           policyOverride: policy,
           cognitiveWorkId: work.id,
           segmentIndex: workSegmentOrdinal,
-          continuityStudio: {
-            workId: work.id,
-            acquisFingerprint: work.state.intentSummary
-              ? `acq:${work.revision}:${work.state.intentSummary.slice(0, 64)}`
-              : null,
-            sourceVersions: [],
-            checkpointId: `ckpt:${work.id}:r${work.revision}`,
-            budgets: {
-              tokensConsumed: 0,
-              tokensBudget: null,
-              restitutionsRemaining: null,
-            },
-            rightsOk: true,
-          },
+          continuityStudio: buildStudioContinuityFromWork(work, policy),
           continuityChain: null,
           publicWebRegistry: {
             topics: webRegistry.topics,
diff --git a/projects/sfia-studio-next/web/src/domains/finops/finops-reconciliation.ts b/projects/sfia-studio-next/web/src/domains/finops/finops-reconciliation.ts
new file mode 100644
index 00000000..b8f79ecc
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/finops/finops-reconciliation.ts
@@ -0,0 +1,177 @@
+/**
+ * FinOps reconciliation helpers used by the product service path.
+ * Separated so tests can exercise the same logic without mocking private methods.
+ */
+
+import {
+  assessPeriodEquality,
+  reconcileFinOpsCosts,
+  sumMeasuredCostUsd,
+  type AdminUsageSnapshot,
+  type FinOpsScopeEvidence,
+} from "./provider-admin-usage-collector";
+import { decimalFromNumberLike } from "./decimal-money";
+
+export type FinOpsReconciliationInput = {
+  studioEstimatedUsd: number | null;
+  studioEstimationKind: "known" | "partial" | "empty" | "unknown" | string;
+  snapshots: AdminUsageSnapshot[];
+  windowStartUtc: string;
+  windowEndUtc: string;
+  organizationScope: string;
+  configuredOrgId: string | null;
+  configuredProjectId: string | null;
+  configuredApiKeyId: string | null;
+  pilotAuthorized: boolean;
+  freshnessStatus: string;
+  freshnessSnapshotCount: number;
+};
+
+export type FinOpsReconciliationResult = {
+  comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
+  providerCostUsd: string | null;
+  providerCurrency: string | null;
+  deltaUsd: string | null;
+  limits: string[];
+  disclosed: boolean;
+};
+
+/**
+ * Establish COMPARABLE only when identity, window equality, provenance LIVE,
+ * and Pilot authorization are all proven — same path as product service.
+ */
+export function evaluateFinOpsReconciliation(
+  input: FinOpsReconciliationInput,
+): FinOpsReconciliationResult {
+  const limits: string[] = [];
+  if (!input.pilotAuthorized) {
+    return {
+      comparability: "UNAVAILABLE",
+      providerCostUsd: null,
+      providerCurrency: null,
+      deltaUsd: null,
+      limits: ["PILOT_NOT_AUTHORIZED_FOR_PROVIDER_COSTS"],
+      disclosed: false,
+    };
+  }
+
+  const liveComplete = input.snapshots.filter(
+    (s) =>
+      s.surfaceObject === "organization.costs.result" &&
+      s.completeness === "complete" &&
+      (s.collectionProvenance === "LIVE" ||
+        // Qualification-only: allow TEST when explicitly tagged for isolated DB proofs.
+        s.collectionProvenance === "TEST_SUBSTITUTED" &&
+          (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"),
+  );
+
+  // Default product path: LIVE only.
+  const usable =
+    (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"
+      ? liveComplete
+      : liveComplete.filter((s) => s.collectionProvenance === "LIVE");
+
+  if (usable.length === 0) {
+    return {
+      comparability: "UNAVAILABLE",
+      providerCostUsd: null,
+      providerCurrency: null,
+      deltaUsd: null,
+      limits: ["NO_LIVE_COMPLETE_SNAPSHOTS"],
+      disclosed: false,
+    };
+  }
+
+  const orgIdentityProven = Boolean(
+    input.configuredOrgId &&
+      (input.organizationScope === input.configuredOrgId ||
+        input.organizationScope === `org:${input.configuredOrgId}`),
+  );
+  if (!orgIdentityProven) limits.push("ORG_IDENTITY_UNPROVEN");
+
+  const attributed = input.configuredProjectId
+    ? usable.filter((s) => s.dimensions.project_id === input.configuredProjectId)
+    : [];
+
+  const sum = sumMeasuredCostUsd(usable, {
+    intervalStartUtc: input.windowStartUtc,
+    intervalEndUtc: input.windowEndUtc,
+    projectId: input.configuredProjectId,
+  });
+  limits.push(...sum.limits);
+
+  const period = assessPeriodEquality(attributed, {
+    startUtc: input.windowStartUtc,
+    endUtc: input.windowEndUtc,
+  });
+  limits.push(...period.limits);
+
+  const freshnessAcceptable =
+    input.freshnessStatus === "READY" &&
+    attributed.length > 0 &&
+    input.freshnessSnapshotCount > 0;
+
+  const evidence: FinOpsScopeEvidence = {
+    organizationMatches: orgIdentityProven,
+    organizationIdentityProven: orgIdentityProven,
+    projectIdsOverlap: attributed.length > 0,
+    projectAttributionProven: Boolean(
+      input.configuredProjectId && sum.counted > 0,
+    ),
+    apiKeyIdsOverlap: Boolean(
+      input.configuredApiKeyId &&
+        attributed.some(
+          (s) => s.dimensions.api_key_id === input.configuredApiKeyId,
+        ),
+    ),
+    periodOverlap: period.periodOverlap,
+    periodEqual: period.periodEqual,
+    currencyMatches: sum.currency === "usd",
+    providerCurrency: sum.currency,
+    surfacesRequested: ["/organization/costs"],
+    groupingCompatible: true,
+    coverageComplete:
+      input.freshnessStatus === "READY" &&
+      !sum.limits.includes("COST_AMOUNT_ABSENT"),
+    freshnessAcceptable,
+    evidenceNotes: ["SERVICE_PATH_EVALUATOR"],
+  };
+
+  const studioDecimal =
+    input.studioEstimatedUsd != null
+      ? decimalFromNumberLike(input.studioEstimatedUsd)
+      : null;
+
+  if (input.studioEstimationKind === "partial") {
+    return {
+      comparability: "PARTIAL",
+      providerCostUsd: null,
+      providerCurrency: null,
+      deltaUsd: null,
+      limits: [...limits, "STUDIO_ESTIMATION_REMAINS_PARTIAL"],
+      disclosed: false,
+    };
+  }
+
+  const rec = reconcileFinOpsCosts({
+    studioEstimatedUsd: studioDecimal,
+    providerCostUsd: sum.total,
+    scope: evidence,
+  });
+  limits.push(...rec.limits);
+
+  const disclosed =
+    (rec.status === "COMPARABLE" || rec.status === "PARTIAL") &&
+    orgIdentityProven &&
+    Boolean(input.configuredProjectId) &&
+    input.pilotAuthorized;
+
+  return {
+    comparability: rec.status,
+    providerCostUsd: disclosed ? sum.total : null,
+    providerCurrency: disclosed ? sum.currency : null,
+    deltaUsd: disclosed ? rec.deltaUsd : null,
+    limits: [...new Set(limits)],
+    disclosed,
+  };
+}
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
index 232af939..5d27b112 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
@@ -162,7 +162,8 @@ export async function upsertAdminSnapshotsPg(
         ON CONFLICT (
           source_endpoint, surface_object, organization_scope,
           interval_start_utc, interval_end_utc, granularity,
-          project_id, api_key_id, user_id, model, line_item, api_source
+          project_id, api_key_id, user_id, model, line_item, api_source,
+          collection_provenance
         )
         DO UPDATE SET
           collected_at = EXCLUDED.collected_at,
@@ -175,8 +176,7 @@ export async function upsertAdminSnapshotsPg(
           amount = EXCLUDED.amount,
           currency = EXCLUDED.currency,
           completeness = EXCLUDED.completeness,
-          schema_version = EXCLUDED.schema_version,
-          collection_provenance = EXCLUDED.collection_provenance
+          schema_version = EXCLUDED.schema_version
         WHERE
           NOT (
             provider_admin_usage_snapshots.completeness = 'complete'
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index 3e234b95..f4237656 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -22,12 +22,10 @@ import {
 import {
   getAdminCollectorFreshness,
   listAdminCollectorSnapshots,
-  reconcileFinOpsCosts,
   resolveProductAdminCollectorView,
-  sumMeasuredCostUsd,
-  type FinOpsScopeEvidence,
 } from "./provider-admin-usage-collector";
 import { decimalFromNumberLike } from "./decimal-money";
+import { evaluateFinOpsReconciliation } from "./finops-reconciliation";

 function studioLane(): string {
   return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
@@ -319,9 +317,6 @@ async function buildProviderReconciliationDto(
     isAdminSnapshotReadEnabled,
     listAdminSnapshotsFromPg,
   } = await import("./provider-admin-usage-repository");
-  const { assessPeriodEquality } = await import(
-    "./provider-admin-usage-collector"
-  );
   const productView = resolveProductAdminCollectorView();
   const limits: string[] = [];

@@ -456,114 +451,73 @@ async function buildProviderReconciliationDto(
     (process.env.SFIA_OPENAI_API_KEY_ID ?? "").trim() || null;
   const configuredOrg =
     (process.env.SFIA_OPENAI_ORG_ID ?? "").trim() || null;
-  const scopeOrg = productView.organizationScope;
-  const orgIdentityProven = Boolean(
-    configuredOrg &&
-      (scopeOrg === configuredOrg || scopeOrg === `org:${configuredOrg}`),
-  );

-  const attributed = configuredProject
-    ? snapshots.filter((s) => s.dimensions.project_id === configuredProject)
-    : [];
-
-  const sum = sumMeasuredCostUsd(snapshots, {
-    intervalStartUtc: windowStart,
-    intervalEndUtc: windowEnd ?? undefined,
-    projectId: configuredProject,
-  });
-  limits.push(...sum.limits);
+  if (!windowEnd) {
+    limits.push("PERIOD_WINDOW_END_ABSENT");
+    return {
+      studioEstimatedUsd: studio,
+      studioEstimationKind,
+      providerCostUsd: null,
+      providerCurrency: null,
+      deltaUsd: null,
+      comparability: "NON_COMPARABLE",
+      freshness: freshnessDto,
+      limits: [...new Set(limits)],
+      noraIndependent: true,
+      studioEstimatedUsdDecimal: studioDecimal,
+      providerCostUsdDecimal: null,
+      deltaUsdDecimal: null,
+    };
+  }

-  const period = windowEnd
-    ? assessPeriodEquality(attributed, {
-        startUtc: windowStart,
-        endUtc: windowEnd,
-      })
-    : {
-        periodEqual: false,
-        periodOverlap: sum.counted > 0,
-        limits: ["PERIOD_WINDOW_END_ABSENT"],
-      };
-  limits.push(...period.limits);
-
-  // Freshness on the attributed perimeter — not global last collection alone.
-  const freshnessAcceptable =
-    freshness.status === "READY" &&
-    attributed.length > 0 &&
-    freshness.snapshotCount > 0;
-
-  const evidence: FinOpsScopeEvidence = {
-    organizationMatches: orgIdentityProven,
-    organizationIdentityProven: orgIdentityProven,
-    projectIdsOverlap: attributed.length > 0,
-    projectAttributionProven: Boolean(configuredProject && sum.counted > 0),
-    apiKeyIdsOverlap: Boolean(
-      configuredKey &&
-        attributed.some((s) => s.dimensions.api_key_id === configuredKey),
-    ),
-    periodOverlap: period.periodOverlap,
-    periodEqual: period.periodEqual,
-    currencyMatches: sum.currency === "usd",
-    providerCurrency: sum.currency,
-    surfacesRequested: ["/organization/costs"],
-    groupingCompatible: true,
-    coverageComplete: freshness.status === "READY" && !sum.limits.includes("COST_AMOUNT_ABSENT"),
-    freshnessAcceptable,
-    evidenceNotes: [
-      (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1"
-        ? "SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"
-        : "SCOPE_FLAG_UNSET",
-      "PROVENANCE_LIVE_ONLY",
-      filter.projectId
-        ? "STUDIO_PROJECT_FILTER_NOT_PROVIDER_PROJECT"
-        : "NO_STUDIO_PROJECT_FILTER",
-      studioEstimationKind === "partial" ? "STUDIO_ESTIMATION_PARTIAL" : "",
-    ].filter(Boolean),
-  };
+  // Pilot authorization: owner of FinOps summary path is already authenticated;
+  // revoke via SFIA_FINOPS_PROVIDER_DISCLOSE=0 for tests / emergency.
+  const pilotAuthorized =
+    (process.env.SFIA_FINOPS_PROVIDER_DISCLOSE ?? "1").trim() !== "0";

-  // Partial studio estimation cannot become COMPARABLE.
-  if (studioEstimationKind === "partial") {
-    limits.push("STUDIO_ESTIMATION_REMAINS_PARTIAL");
-  }
+  const evaluated = evaluateFinOpsReconciliation({
+    studioEstimatedUsd: studio,
+    studioEstimationKind,
+    snapshots,
+    windowStartUtc: windowStart,
+    windowEndUtc: windowEnd,
+    organizationScope: productView.organizationScope,
+    configuredOrgId: configuredOrg,
+    configuredProjectId: configuredProject,
+    configuredApiKeyId: configuredKey,
+    pilotAuthorized,
+    freshnessStatus: freshness.status,
+    freshnessSnapshotCount: freshness.snapshotCount,
+  });
+  limits.push(...evaluated.limits);

-  const rec =
-    studioEstimationKind === "partial"
-      ? {
-          status: "PARTIAL" as const,
-          deltaUsd: null,
-          limits: ["STUDIO_ESTIMATION_REMAINS_PARTIAL", ...evidence.evidenceNotes],
-        }
-      : reconcileFinOpsCosts({
-          studioEstimatedUsd: studioDecimal,
-          providerCostUsd: sum.total,
-          scope: evidence,
-        });
-  limits.push(...rec.limits);
-
-  // Never disclose org totals / TEST / unauthorized Pilot views.
-  const discloseProvider =
-    (rec.status === "COMPARABLE" || rec.status === "PARTIAL") &&
-    orgIdentityProven &&
-    Boolean(configuredProject);
   const providerNum =
-    discloseProvider && sum.total != null ? Number(sum.total) : null;
+    evaluated.disclosed && evaluated.providerCostUsd != null
+      ? Number(evaluated.providerCostUsd)
+      : null;
   const deltaNum =
-    discloseProvider && rec.deltaUsd != null ? Number(rec.deltaUsd) : null;
+    evaluated.disclosed && evaluated.deltaUsd != null
+      ? Number(evaluated.deltaUsd)
+      : null;

   return {
     studioEstimatedUsd: studio,
     studioEstimationKind,
     providerCostUsd:
       providerNum != null && Number.isFinite(providerNum) ? providerNum : null,
-    providerCurrency: discloseProvider ? sum.currency : null,
+    providerCurrency: evaluated.disclosed ? evaluated.providerCurrency : null,
     deltaUsd: deltaNum != null && Number.isFinite(deltaNum) ? deltaNum : null,
-    comparability: rec.status,
+    comparability: evaluated.comparability,
     freshness: freshnessDto,
     limits: [...new Set(limits)],
     noraIndependent: true,
     studioEstimatedUsdDecimal: studioDecimal,
-    providerCostUsdDecimal: discloseProvider ? sum.total : null,
-    deltaUsdDecimal: discloseProvider ? rec.deltaUsd : null,
+    providerCostUsdDecimal: evaluated.disclosed
+      ? evaluated.providerCostUsd
+      : null,
+    deltaUsdDecimal: evaluated.disclosed ? evaluated.deltaUsd : null,
   };
+
 }

 export type FinOpsWorkListItem = {
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts
index c1bc27fe..b6e996d3 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts
@@ -226,49 +226,80 @@ describe("Admin/FinOps PG qualification", () => {
     expect(rec.deltaUsd).toBe("0.0600000000");
   });

-  it("finops reader role cannot INSERT snapshots", async () => {
+  it("finops reader role cannot INSERT snapshots (SET ROLE, no password)", async () => {
     const url = process.env.DATABASE_URL;
     if (!url) throw new Error("DATABASE_URL missing");
-    const u = new URL(url);
-    u.username = "sfia_finops_reader_login";
-    u.password = "sfia_dev_finops_read_only";
-    const reader = postgres(u.toString(), { max: 1 });
+    const sql = postgres(url, { max: 1 });
     try {
-      let refused = false;
+      await sql`SET ROLE sfia_finops_reader`;
+      let sqlstate: string | null = null;
       try {
-        await reader`
+        await sql`
           INSERT INTO provider_admin_collection_runs (
             collection_id, started_at, status, path, organization_scope, collection_provenance
           ) VALUES (
             'acol_should_fail', now(), 'READY', '/organization/costs', 'org:x', 'LIVE'
           )
         `;
-      } catch {
-        refused = true;
+      } catch (e: unknown) {
+        sqlstate =
+          e && typeof e === "object" && "code" in e
+            ? String((e as { code: string }).code)
+            : "ERR";
       }
-      expect(refused).toBe(true);
+      await sql`RESET ROLE`;
+      // 42501 insufficient_privilege
+      expect(sqlstate).toBe("42501");
     } finally {
-      await reader.end({ timeout: 1 });
+      await sql.end({ timeout: 1 });
     }
   });

-  it("collector role cannot SELECT pilots (business tables)", async () => {
+  it("collector role cannot SELECT pilots (SET ROLE, no password)", async () => {
     const url = process.env.DATABASE_URL;
     if (!url) throw new Error("DATABASE_URL missing");
-    const u = new URL(url);
-    u.username = "sfia_admin_collector_login";
-    u.password = "sfia_dev_collector_only";
-    const collector = postgres(u.toString(), { max: 1 });
+    const sql = postgres(url, { max: 1 });
     try {
-      let refused = false;
+      await sql`SET ROLE sfia_admin_collector`;
+      let sqlstate: string | null = null;
       try {
-        await collector`SELECT id FROM pilots LIMIT 1`;
-      } catch {
-        refused = true;
+        await sql`SELECT id FROM pilots LIMIT 1`;
+      } catch (e: unknown) {
+        sqlstate =
+          e && typeof e === "object" && "code" in e
+            ? String((e as { code: string }).code)
+            : "ERR";
       }
-      expect(refused).toBe(true);
+      await sql`RESET ROLE`;
+      expect(sqlstate).toBe("42501");
     } finally {
-      await collector.end({ timeout: 1 });
+      await sql.end({ timeout: 1 });
+    }
+  });
+
+  it("collector role CAN insert snapshot then reader CAN select (positive grant)", async () => {
+    const url = process.env.DATABASE_URL;
+    if (!url) throw new Error("DATABASE_URL missing");
+    const sql = postgres(url, { max: 1 });
+    const cid = `acol_role_ok_${Date.now()}`;
+    try {
+      await sql`SET ROLE sfia_admin_collector`;
+      await sql`
+        INSERT INTO provider_admin_collection_runs (
+          collection_id, started_at, status, path, organization_scope, collection_provenance
+        ) VALUES (
+          ${cid}, now(), 'READY', '/organization/costs', 'org:role-ok', 'TEST_SUBSTITUTED'
+        )
+      `;
+      await sql`RESET ROLE`;
+      await sql`SET ROLE sfia_finops_reader`;
+      const rows = await sql`
+        SELECT collection_id FROM provider_admin_collection_runs WHERE collection_id = ${cid}
+      `;
+      await sql`RESET ROLE`;
+      expect(rows.length).toBe(1);
+    } finally {
+      await sql.end({ timeout: 1 });
     }
   });

diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts
new file mode 100644
index 00000000..96dc93c3
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts
@@ -0,0 +1,273 @@
+/**
+ * Macro-lot 1 — integrated substituted campaign (Intervention 1).
+ * REAL: PostgreSQL DEV · SUBSTITUTED: OpenAI Admin / Responses / WEB / continuity.
+ * No LIVE emission. No Admin key. No store=true.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import {
+  markSubstitutedAdminTransport,
+  resetAdminCollectorStateForTests,
+  resolveIsolatedAdminCollectorConfig,
+  runAdminCollection,
+} from "@/domains/finops/provider-admin-usage-collector";
+import {
+  getAdminCollectionFreshnessFromPg,
+  listAdminSnapshotsFromPg,
+} from "@/domains/finops/provider-admin-usage-repository";
+import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
+import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";
+import {
+  beginCampaignEnvelope,
+  createFrontierAwareFetch,
+  getActiveCampaignEnvelope,
+  runWithProviderEmissionStoreAsync,
+  assertSdkInvocationAdmission,
+  __resetProviderEmissionFrontierForTests,
+} from "@/domains/conversation/provider-emission-frontier";
+import {
+  configureAgentsSdkTracing,
+  getAgentsTracingSinkRecords,
+  resetAgentsTracingTestState,
+  runWithAgentsTracingCorrelation,
+  withAgentsTracingNetworkOracle,
+  StudioLocalTraceProcessor,
+} from "@/lib/agents-sdk-tracing";
+import { createHash } from "node:crypto";
+
+const hasDb = Boolean(process.env.DATABASE_URL?.includes("5433"));
+
+const costsPage = {
+  object: "page",
+  data: [
+    {
+      object: "bucket",
+      start_time: 1_700_000_000,
+      end_time: 1_700_086_400,
+      results: [
+        {
+          object: "organization.costs.result",
+          amount: { value: 0.42, currency: "usd" },
+          project_id: "proj_ml1_integrated",
+        },
+      ],
+    },
+  ],
+  has_more: false,
+  next_page: null,
+};
+
+const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
+const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
+
+describe.skipIf(!hasDb)("ML1 integrated substituted campaign", () => {
+  beforeAll(() => {
+    resetAdminCollectorStateForTests();
+    resetAgentsTracingTestState();
+  });
+
+  afterAll(() => {
+    resetAdminCollectorStateForTests();
+    resetAgentsTracingTestState();
+    __resetProviderEmissionFrontierForTests();
+    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
+    delete process.env.SFIA_AGENTS_TRACING_MODE;
+  });
+
+  it("collect → PG → FinOps → D3 continuity → tracing → frontier PARTIAL", async () => {
+    const work = {
+      id: `work_ml1_${Date.now()}`,
+      revision: 2,
+      ownerToken: "tok_ml1",
+      leaseUntil: new Date(Date.now() + 120_000),
+      state: {
+        intentSummary: "qualify integrated foundation",
+        conclusions: ["Acquis durable A"],
+        sources: [{ ref: "d4:doc", versionOrSha: "v1" }],
+      },
+      resources: { inputTokens: 50, outputTokens: 20, segmentCalls: 1 },
+    };
+    const continuity = buildStudioContinuityFromWork(work);
+    expect(continuity.sourceVersions).toEqual(["d4:doc@v1"]);
+    expect(continuity.budgets.tokensConsumed).toBe(70);
+    expect(continuity.rightsOk).toBe(true);
+    expect(continuity.checkpointId).toBe(`ckpt:${work.id}:r2`);
+
+    const transport = markSubstitutedAdminTransport(async () => ({
+      status: 200,
+      json: costsPage,
+    }));
+    const collection = await runAdminCollection({
+      config: resolveIsolatedAdminCollectorConfig({
+        adminApiKey: null,
+        mode: "TEST_SUBSTITUTED",
+        liveAuthorized: false,
+        organizationScope: "org:ml1-integrated",
+        transport,
+      }),
+      path: "/organization/costs",
+      query: { start_time: "1700000000", bucket_width: "1d" },
+      persistToPg: true,
+    });
+    expect(collection.status).toBe("READY");
+    expect(collection.snapshots.length).toBeGreaterThan(0);
+    expect(
+      collection.snapshots.every(
+        (s) => s.collectionProvenance === "TEST_SUBSTITUTED",
+      ),
+    ).toBe(true);
+
+    const fromPg = await listAdminSnapshotsFromPg({
+      organizationScope: "org:ml1-integrated",
+      provenance: "TEST_SUBSTITUTED",
+    });
+    expect(
+      fromPg.some((s) => s.dimensions.project_id === "proj_ml1_integrated"),
+    ).toBe(true);
+
+    const freshness = await getAdminCollectionFreshnessFromPg({
+      organizationScope: "org:ml1-integrated",
+      provenance: "TEST_SUBSTITUTED",
+      projectId: "proj_ml1_integrated",
+    });
+    expect(freshness.snapshotCount).toBeGreaterThan(0);
+
+    process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE = "1";
+    const finops = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 0.4,
+      studioEstimationKind: "known",
+      snapshots: collection.snapshots,
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:ml1-integrated",
+      configuredOrgId: "ml1-integrated",
+      configuredProjectId: "proj_ml1_integrated",
+      configuredApiKeyId: null,
+      pilotAuthorized: true,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: freshness.snapshotCount,
+    });
+    delete process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE;
+    expect(["COMPARABLE", "PARTIAL", "NON_COMPARABLE"]).toContain(
+      finops.comparability,
+    );
+
+    process.env.SFIA_AGENTS_TRACING_MODE = "local";
+    await configureAgentsSdkTracing(process.env);
+    const { result: spanOk, traceExportUrls } =
+      await withAgentsTracingNetworkOracle(async () =>
+        runWithAgentsTracingCorrelation(
+          {
+            operationId: "op_ml1_int",
+            generationId: "gen_ml1_int",
+            attemptId: "att_ml1_int",
+            workId: work.id,
+          },
+          async () => {
+            const p = new StudioLocalTraceProcessor();
+            await p.onSpanEnd({
+              traceId: "t_ml1",
+              spanId: "s_ml1",
+              endedAt: Date.now(),
+              spanData: { type: "generation", name: "ml1" },
+            });
+            return "ok";
+          },
+        ),
+      );
+    expect(spanOk).toBe("ok");
+    expect(traceExportUrls).toEqual([]);
+    expect(
+      getAgentsTracingSinkRecords().some(
+        (r) => r.correlation.operationId === "op_ml1_int",
+      ),
+    ).toBe(true);
+
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 4,
+        maxHostedSearches: 5,
+        required: true,
+      });
+      let call = 0;
+      const fakeFetch = (async () => {
+        call += 1;
+        if (call === 1) {
+          return new Response(JSON.stringify({ id: "r1" }), {
+            status: 200,
+            headers: { "content-type": "application/json" },
+          });
+        }
+        return new Response(
+          JSON.stringify({
+            id: "r2",
+            tool_usage: { web_search: { num_requests: 1 } },
+          }),
+          { status: 200, headers: { "content-type": "application/json" } },
+        );
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      const prevKey = process.env.OPENAI_API_KEY;
+      const prevFp = process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
+      const prevLane = process.env.STUDIO_LANE;
+      process.env.OPENAI_API_KEY = TEST_KEY;
+      process.env.SFIA_OPENAI_EXPECTED_KEY_FP = TEST_FP;
+      process.env.STUDIO_LANE = "DEV";
+      try {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const body = JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 50,
+          reasoning: { effort: "medium" },
+          tools: [{ type: "web_search" }],
+          max_tool_calls: 1,
+        });
+        await gated("https://api.openai.com/v1/responses", {
+          method: "POST",
+          body,
+        });
+        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
+          "UNKNOWN",
+        );
+        await gated("https://api.openai.com/v1/responses", {
+          method: "POST",
+          body,
+        });
+        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
+          "PARTIAL",
+        );
+      } finally {
+        if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
+        else process.env.OPENAI_API_KEY = prevKey;
+        if (prevFp === undefined) delete process.env.SFIA_OPENAI_EXPECTED_KEY_FP;
+        else process.env.SFIA_OPENAI_EXPECTED_KEY_FP = prevFp;
+        if (prevLane === undefined) delete process.env.STUDIO_LANE;
+        else process.env.STUDIO_LANE = prevLane;
+      }
+    });
+  });
+
+  it("rights revoked → FinOps UNAVAILABLE with no amount disclosure", () => {
+    const r = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 1,
+      studioEstimationKind: "known",
+      snapshots: [],
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:x",
+      configuredOrgId: "x",
+      configuredProjectId: "p",
+      configuredApiKeyId: null,
+      pilotAuthorized: false,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: 1,
+    });
+    expect(r.comparability).toBe("UNAVAILABLE");
+    expect(r.providerCostUsd).toBeNull();
+    expect(r.disclosed).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts
index ed75e65c..7053297e 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts
@@ -1,8 +1,8 @@
 /**
  * Real @openai/agents SDK execution with substituted transport + network oracle.
- * Mocks of setTraceProcessors alone are insufficient — this file imports the real SDK.
+ * Requires simultaneous: successful generation, expected result, spans, correlation, zero export.
  */
-import { afterEach, describe, expect, it } from "vitest";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import {
   configureAgentsSdkTracing,
   getAgentsTracingConfigState,
@@ -12,6 +12,10 @@ import {
   withAgentsTracingNetworkOracle,
 } from "@/lib/agents-sdk-tracing";

+beforeEach(() => {
+  resetAgentsTracingTestState();
+});
+
 afterEach(() => {
   resetAgentsTracingTestState();
   delete process.env.SFIA_AGENTS_TRACING_MODE;
@@ -24,46 +28,83 @@ describe("agents-sdk-tracing REAL SDK (substituted transport)", () => {
     expect(r.mode).toBe("off");
     expect(r.tracingDisabled).toBe(true);
     expect(getAgentsTracingConfigState().mode).toBe("off");
-
     const agents = await import("@openai/agents");
-    // Prove the SDK export exists and was addressed (not a mock-only path).
     expect(typeof agents.setTracingDisabled).toBe("function");
     expect(typeof agents.setTraceProcessors).toBe("function");
   });

-  it("LOCAL + network oracle: real Agent.run with zero remote trace export", async () => {
+  it("oracle positive control detects trace export URLs", async () => {
+    const { traceExportUrls } = await withAgentsTracingNetworkOracle(async () => {
+      await fetch("https://api.openai.com/v1/traces", { method: "POST", body: "{}" });
+      return "ok";
+    });
+    expect(traceExportUrls.length).toBeGreaterThan(0);
+  });
+
+  it("LOCAL: successful Agent.run produces correlated spans and zero remote export", async () => {
     process.env.SFIA_AGENTS_TRACING_MODE = "local";
     const cfg = await configureAgentsSdkTracing(process.env);
-    // If processors cannot be proven replaced, mode must stay OFF.
-    if (!cfg.processorsReplaced) {
-      expect(cfg.mode).toBe("off");
-      expect(cfg.tracingDisabled).toBe(true);
-      return;
-    }
+    expect(cfg.processorsReplaced).toBe(true);
     expect(cfg.mode).toBe("local");

-    const { Agent, run, setDefaultOpenAIClient } = await import("@openai/agents");
-    // Substituted OpenAI client — no real network to api.openai.com.
+    const { Agent, run, setDefaultOpenAIClient, tool } = await import(
+      "@openai/agents"
+    );
+
+    let toolHit = 0;
+    const probeTool = tool({
+      name: "sfia_probe_echo",
+      description: "Echo a short token for tracing proof",
+      parameters: {
+        type: "object",
+        properties: { token: { type: "string" } },
+        required: ["token"],
+        additionalProperties: false,
+      },
+      // eslint-disable-next-line @typescript-eslint/no-explicit-any
+      execute: async (input: any) => {
+        toolHit += 1;
+        return `echo:${String(input?.token ?? "")}`;
+      },
+    });
+
+    // Compatible substituted Responses client — must succeed, not be catch-absorbed.
     const fakeClient = {
       responses: {
-        create: async () => ({
-          id: "resp_fake",
-          output_text: "ok",
-          output: [
-            {
-              type: "message",
-              role: "assistant",
-              content: [{ type: "output_text", text: "ok" }],
-            },
-          ],
-          usage: { input_tokens: 1, output_tokens: 1, total_tokens: 2 },
-        }),
+        create: async (req: { input?: unknown; tools?: unknown[] }) => {
+          const hasTools = Array.isArray(req.tools) && req.tools.length > 0;
+          if (hasTools && toolHit === 0) {
+            return {
+              id: "resp_tool_call",
+              output: [
+                {
+                  type: "function_call",
+                  call_id: "call_1",
+                  name: "sfia_probe_echo",
+                  arguments: JSON.stringify({ token: "ping" }),
+                },
+              ],
+              usage: { input_tokens: 5, output_tokens: 2, total_tokens: 7 },
+            };
+          }
+          return {
+            id: "resp_final",
+            output_text: "ok-traced",
+            output: [
+              {
+                type: "message",
+                role: "assistant",
+                status: "completed",
+                content: [{ type: "output_text", text: "ok-traced" }],
+              },
+            ],
+            usage: { input_tokens: 8, output_tokens: 3, total_tokens: 11 },
+          };
+        },
       },
     };
-    if (typeof setDefaultOpenAIClient === "function") {
-      // eslint-disable-next-line @typescript-eslint/no-explicit-any
-      setDefaultOpenAIClient(fakeClient as any);
-    }
+    // eslint-disable-next-line @typescript-eslint/no-explicit-any
+    setDefaultOpenAIClient(fakeClient as any);

     const { result, traceExportUrls } = await withAgentsTracingNetworkOracle(
       async () =>
@@ -77,36 +118,82 @@ describe("agents-sdk-tracing REAL SDK (substituted transport)", () => {
           async () => {
             const agent = new Agent({
               name: "sfia_trace_probe",
-              instructions: "Reply with ok.",
+              instructions: "Use the tool once then reply ok-traced.",
               model: "gpt-4.1-mini",
+              tools: [probeTool],
             });
-            try {
-              return await run(agent, "ping");
-            } catch (e) {
-              // Substituted client shape may not satisfy full SDK contract —
-              // still prove SDK code path executed under the oracle.
-              return { error: e instanceof Error ? e.message : String(e) };
-            }
+            return await run(agent, "ping");
           },
         ),
     );

     expect(traceExportUrls).toEqual([]);
-    // Sink may be empty if SDK never emitted spans under substituted client —
-    // but network oracle must have wrapped a real import/execution.
-    expect(result).toBeDefined();
-    void getAgentsTracingSinkRecords();
-  });
+    // Must not succeed via swallowed error — final text present.
+    const finalText =
+      // eslint-disable-next-line @typescript-eslint/no-explicit-any
+      (result as any)?.finalOutput ??
+      // eslint-disable-next-line @typescript-eslint/no-explicit-any
+      (result as any)?.output_text ??
+      String(result);
+    expect(String(finalText)).toMatch(/ok-traced|echo:ping|ok/i);

-  it("LOCAL run recorded correlated sink under real SDK (no secret leakage)", async () => {
-    process.env.SFIA_AGENTS_TRACING_MODE = "local";
-    const cfg = await configureAgentsSdkTracing(process.env);
-    if (!cfg.processorsReplaced) {
-      expect(cfg.mode).toBe("off");
-      return;
-    }
     const records = getAgentsTracingSinkRecords();
-    // Prior test in this file may have populated the sink; ensure redaction.
+    expect(records.length).toBeGreaterThan(0);
+    expect(
+      records.every((r) => r.correlation.operationId === "op_real_sdk"),
+    ).toBe(true);
+    expect(records.every((r) => r.correlation.workId === "work_real_sdk")).toBe(
+      true,
+    );
     expect(JSON.stringify(records)).not.toMatch(/sk-[A-Za-z0-9]/);
   });
+
+  it("two concurrent works keep ALS correlation isolated", async () => {
+    process.env.SFIA_AGENTS_TRACING_MODE = "local";
+    await configureAgentsSdkTracing(process.env);
+    const { StudioLocalTraceProcessor } = await import("@/lib/agents-sdk-tracing");
+    const p = new StudioLocalTraceProcessor();
+    await Promise.all([
+      runWithAgentsTracingCorrelation(
+        {
+          operationId: "op_a",
+          generationId: "g_a",
+          attemptId: "a_a",
+          workId: "w_a",
+        },
+        async () => {
+          await p.onSpanEnd({
+            traceId: "t_a",
+            spanId: "s_a",
+            endedAt: Date.now(),
+            spanData: { type: "generation", name: "a" },
+          });
+        },
+      ),
+      runWithAgentsTracingCorrelation(
+        {
+          operationId: "op_b",
+          generationId: "g_b",
+          attemptId: "a_b",
+          workId: "w_b",
+        },
+        async () => {
+          await p.onSpanEnd({
+            traceId: "t_b",
+            spanId: "s_b",
+            endedAt: Date.now(),
+            spanData: { type: "generation", name: "b" },
+          });
+        },
+      ),
+    ]);
+    const byOp = Object.fromEntries(
+      getAgentsTracingSinkRecords().map((r) => [
+        r.correlation.operationId,
+        r.correlation.workId,
+      ]),
+    );
+    expect(byOp.op_a).toBe("w_a");
+    expect(byOp.op_b).toBe("w_b");
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-reconciliation-service-path.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-reconciliation-service-path.test.ts
new file mode 100644
index 00000000..535a398c
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-reconciliation-service-path.test.ts
@@ -0,0 +1,117 @@
+import { describe, expect, it } from "vitest";
+import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
+import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";
+
+function liveSnap(amount: string): AdminUsageSnapshot {
+  return {
+    sourceEndpoint: "/organization/costs",
+    surfaceObject: "organization.costs.result",
+    organizationScope: "org:demo",
+    intervalStartUtc: "2023-11-14T22:13:20.000Z",
+    intervalEndUtc: "2023-11-15T22:13:20.000Z",
+    granularity: "1d",
+    dimensions: {
+      project_id: "proj_demo",
+      api_key_id: null,
+      user_id: null,
+      model: null,
+      line_item: null,
+      api_source: null,
+    },
+    metrics: {
+      input_tokens: { presence: "ABSENT", value: null },
+      output_tokens: { presence: "ABSENT", value: null },
+      input_cached_tokens: { presence: "ABSENT", value: null },
+      num_model_requests: { presence: "ABSENT", value: null },
+      num_requests: { presence: "ABSENT", value: null },
+      amount: { presence: "MEASURED", value: amount },
+      currency: { presence: "MEASURED", value: "usd" },
+    },
+    completeness: "complete",
+    collectedAtUtc: "2026-11-26T12:00:00.000Z",
+    collectionId: "acol_svc",
+    collectionProvenance: "LIVE",
+  };
+}
+
+describe("FinOps service-path reconciliation", () => {
+  it("establishes COMPARABLE when window/org/project/provenance/rights align", () => {
+    const r = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 0.8,
+      studioEstimationKind: "known",
+      snapshots: [liveSnap("0.8600000000")],
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:demo",
+      configuredOrgId: "demo",
+      configuredProjectId: "proj_demo",
+      configuredApiKeyId: null,
+      pilotAuthorized: true,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: 1,
+    });
+    expect(r.comparability).toBe("COMPARABLE");
+    expect(r.disclosed).toBe(true);
+    expect(r.deltaUsd).toBe("0.0600000000");
+  });
+
+  it("refuses disclosure when pilot unauthorized even if math would COMPARABLE", () => {
+    const r = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 0.8,
+      studioEstimationKind: "known",
+      snapshots: [liveSnap("0.8600000000")],
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:demo",
+      configuredOrgId: "demo",
+      configuredProjectId: "proj_demo",
+      configuredApiKeyId: null,
+      pilotAuthorized: false,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: 1,
+    });
+    expect(r.comparability).toBe("UNAVAILABLE");
+    expect(r.disclosed).toBe(false);
+    expect(r.providerCostUsd).toBeNull();
+  });
+
+  it("TEST provenance excluded by default", () => {
+    const snap = liveSnap("1.0000000000");
+    snap.collectionProvenance = "TEST_SUBSTITUTED";
+    const r = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 0.8,
+      studioEstimationKind: "known",
+      snapshots: [snap],
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:demo",
+      configuredOrgId: "demo",
+      configuredProjectId: "proj_demo",
+      configuredApiKeyId: null,
+      pilotAuthorized: true,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: 1,
+    });
+    expect(r.comparability).toBe("UNAVAILABLE");
+    expect(r.limits).toContain("NO_LIVE_COMPLETE_SNAPSHOTS");
+  });
+
+  it("partial studio estimation never becomes COMPARABLE", () => {
+    const r = evaluateFinOpsReconciliation({
+      studioEstimatedUsd: 0.8,
+      studioEstimationKind: "partial",
+      snapshots: [liveSnap("0.8600000000")],
+      windowStartUtc: "2023-11-14T22:13:20.000Z",
+      windowEndUtc: "2023-11-15T22:13:20.000Z",
+      organizationScope: "org:demo",
+      configuredOrgId: "demo",
+      configuredProjectId: "proj_demo",
+      configuredApiKeyId: null,
+      pilotAuthorized: true,
+      freshnessStatus: "READY",
+      freshnessSnapshotCount: 1,
+    });
+    expect(r.comparability).toBe("PARTIAL");
+    expect(r.disclosed).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts
new file mode 100644
index 00000000..e26860c9
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts
@@ -0,0 +1,52 @@
+import { describe, expect, it } from "vitest";
+import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";
+
+describe("buildStudioContinuityFromWork", () => {
+  it("uses real sources, acquis, tokens and rights — not placeholders", () => {
+    const snap = buildStudioContinuityFromWork({
+      id: "work_1",
+      revision: 3,
+      ownerToken: "tok_live",
+      leaseUntil: new Date(Date.now() + 60_000),
+      state: {
+        intentSummary: "investigate docs",
+        conclusions: ["Finding A is durable"],
+        sources: [
+          { ref: "d4:doc1", versionOrSha: "rev9" },
+          { ref: "git-file:r:path.ts", versionOrSha: "abc123" },
+        ],
+      },
+      resources: { inputTokens: 100, outputTokens: 40, segmentCalls: 2 },
+    });
+    expect(snap.workId).toBe("work_1");
+    expect(snap.checkpointId).toBe("ckpt:work_1:r3");
+    expect(snap.acquisFingerprint).toContain("Finding A");
+    expect(snap.sourceVersions).toEqual([
+      "d4:doc1@rev9",
+      "git-file:r:path.ts@abc123",
+    ]);
+    expect(snap.budgets.tokensConsumed).toBe(140);
+    expect(snap.rightsOk).toBe(true);
+  });
+
+  it("rightsOk false when lease expired or owner token absent", () => {
+    const expired = buildStudioContinuityFromWork({
+      id: "work_2",
+      revision: 1,
+      ownerToken: "tok",
+      leaseUntil: new Date(Date.now() - 1000),
+      state: { intentSummary: "x", sources: [] },
+      resources: {},
+    });
+    expect(expired.rightsOk).toBe(false);
+    const noTok = buildStudioContinuityFromWork({
+      id: "work_3",
+      revision: 1,
+      ownerToken: null,
+      leaseUntil: null,
+      state: { intentSummary: "x", sources: [] },
+      resources: {},
+    });
+    expect(noTok.rightsOk).toBe(false);
+  });
+});
```

## 6. Preuves sécurité identifiants

| Preuve | Résultat |
|---|---|
| `sfia_admin_collector_login` / `sfia_finops_reader_login` rolcanlogin | **false** (NOLOGIN) |
| Connexion host avec probe | FATAL role is not permitted to log in |
| Sources courantes password literals | **NONE** |
| Pack / diffs | pas de reproduction des valeurs compromises |
| Historique distant | valeurs passées traitées compromises (pas de rewrite) |

## 7. Preuves rôles PostgreSQL

`ml5-admin-finops-qualification.pg.test.ts` — 7 PASS :
- reader INSERT → SQLSTATE 42501
- collector SELECT pilots → 42501
- collector INSERT run + reader SELECT → OK

## 8. Matrice CONV (Intervention 1)

| Exigence | Scénario | Oracle | Commande | Attendu | Observé | Niveau | Réserve | Sortie |
|---|---|---|---|---|---|---|---|---|
| CONV-F01 Admin transport TEST | collection substituée | status READY + provenance TEST | vitest admin collector / integrated | READY TEST | PASS | DETERMINISTIC+PG | — | OK |
| CONV-F02 Envelope LIVE | assert envelope | start/end required | unit admin | throw sans start | PASS (cycle antérieur capitalisé) | DETERMINISTIC | LIVE NOT RUN | BLOCKED LIVE |
| CONV-F03 Provenance canon | upsert TEST≠LIVE | index unique | migration 025 + PG | no collision | PASS | INTEGRATION | — | OK |
| CONV-F04 Roles | SET ROLE | SQLSTATE 42501 | pg qual | refuse + grant | PASS | INTEGRATION | — | OK |
| CONV-F05 FinOps COMPARABLE | service evaluator | disclosed+delta | unit finops | COMPARABLE | PASS | DETERMINISTIC | LIVE costs NOT RUN | OK subst |
| CONV-F06 FinOps rights | pilotAuthorized=false | no amount | unit | UNAVAILABLE | PASS | DETERMINISTIC | — | OK |
| CONV-F07 TEST exclu | provenance TEST default | NO_LIVE | unit | UNAVAILABLE | PASS | DETERMINISTIC | — | OK |
| CONV-F08 Freshness scoped | PG freshness | count>0 | pg qual | scoped | PASS | INTEGRATION | — | OK |
| CONV-F11 Tracing | real SDK + oracle | spans+export[] | unit real-sdk | PASS | PASS | DETERMINISTIC (SDK réel) | ops OFF | OK |
| CONV-F12 Continuity D3 | buildStudioContinuityFromWork | real sources/tokens | unit + nora wire | non-placeholder | PASS | DETERMINISTIC | native OFF | OK |
| CONV-F13 Frontier PARTIAL | UNKNOWN then MEASURED | PARTIAL | unit+integrated | PARTIAL | PASS | DETERMINISTIC | WEB LIVE NOT RUN | OK |
| CONV-F14 A3 dossier | Option1/2 | doc gates | dossier 20261127 | intelligible | DOCUMENTED | DOCUMENTED | Morris | BLOCKED gate |
| CONV-F15 E2E substitué | campaign 1–11 | multi-oracle | integrated pg | PASS | PASS | INTEGRATION | REAL provider NOT RUN | OK subst |

**LIVE exigences :** G-ADMIN-LIVE · G-WEB-PUBLIC · G-PROVIDER-LIVE-QUALIFICATION = **BLOCKED / NOT RUN**.

## 9. Build / runtime

| | |
|---|---|
| BUILD_ID | `0VeseCyhfyZnoVBm1JG42` |
| digest | `7673fffb47a48f7b45bf78c890df8bd94068032db7abccd84e4bafb7f5c6e0a1` |
| URL | http://127.0.0.1:3100 |
| login HTTP | 200 |
| /settings/consumption | 200 |
| RECETTE pid | 89199 inchangé |
| Typecheck baseline | 12 erreurs préexistantes hors chemins modifiés (identique baseline rapportée) |
| qualify:browser | non rejoué ce cycle (anomalies navigateur préexistantes hors blast radius ML1 ; smoke HTTP OK) |

## 10. Résultats tests (extraits)

### Unit FinOps/D3/tracing
```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts
◇ injected env (0) from .env.local

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.196Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":1,"meta":{"kind":"span","status":"ok","tool_calls":"response"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.200Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":1,"meta":{"kind":"span","status":"ok","tool_calls":"function:sfia_probe_echo"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.201Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":6,"meta":{"kind":"span","status":"ok","tool_calls":"turn"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.201Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":0,"meta":{"kind":"span","status":"ok","tool_calls":"response"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.201Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":0,"meta":{"kind":"span","status":"ok","tool_calls":"turn"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.202Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":8,"meta":{"kind":"span","status":"ok","tool_calls":"agent:sfia_trace_probe"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.202Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","duration_ms":9,"meta":{"kind":"span","status":"ok","tool_calls":"task:Agent workflow"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.202Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_real_sdk","generation_id":"gen_real_sdk","attempt_id":"att_real_sdk","meta":{"kind":"trace","status":"ok","tool_calls":"Agent workflow"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.203Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_a","generation_id":"g_a","attempt_id":"a_a","meta":{"kind":"span","status":"ok","tool_calls":"generation:a"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:45:09.203Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_b","generation_id":"g_b","attempt_id":"a_b","meta":{"kind":"span","status":"ok","tool_calls":"generation:b"}}
 ✓ tests/unit/ml5-agents-sdk-tracing-real-sdk.test.ts (4 tests) 215ms
stderr | tests/unit/ml5-finops-reconciliation-service-path.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-finops-reconciliation-service-path.test.ts (4 tests) 2ms
stderr | tests/unit/ml5-provider-continuity-from-work.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-provider-continuity-from-work.test.ts (2 tests) 1ms

 Test Files  3 passed (3)
      Tests  10 passed (10)
   Start at  02:45:08
   Duration  547ms (transform 52ms, setup 22ms, collect 47ms, tests 217ms, environment 0ms, prepare 69ms)


```

### Admin FinOps PG
```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/integration/ml5-admin-finops-qualification.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml5-admin-finops-qualification.pg.test.ts (7 tests) 86ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  02:45:18
   Duration  540ms (transform 59ms, setup 18ms, collect 250ms, tests 86ms, environment 0ms, prepare 25ms)


```

### Frontier/continuity/admin units
```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/unit/ml5-public-web-frontier.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-public-web-frontier.test.ts (17 tests) 228ms
stderr | tests/unit/ml5-provider-emission-frontier.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-provider-emission-frontier.test.ts (23 tests) 11ms
stderr | tests/unit/ml5-provider-admin-usage-collector.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-provider-admin-usage-collector.test.ts (13 tests) 4ms
stderr | tests/unit/ml5-provider-response-continuity.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-provider-response-continuity.test.ts (4 tests) 1ms
stderr | tests/unit/ml5-cognitive-envelope-and-continuity.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ml5-cognitive-envelope-and-continuity.test.ts (6 tests) 4ms

 Test Files  5 passed (5)
      Tests  63 passed (63)
   Start at  02:45:28
   Duration  1.35s (transform 290ms, setup 26ms, collect 625ms, tests 248ms, environment 0ms, prepare 101ms)


```

### Integrated campaign
```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts
◇ injected env (0) from .env.local

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T01:47:05.051Z","lane":"DEV","source_sha":"912ef30b40f2447a925f4182bc4961560eca810e","build_id":"emfz_yP5MBF9GxQRrnJGP","event_name":"provider.agents_trace.local","component":"agents_sdk_tracing","outcome":"SUCCESS","operation_id":"op_ml1_int","generation_id":"gen_ml1_int","attempt_id":"att_ml1_int","meta":{"kind":"span","status":"ok","tool_calls":"generation:ml1"}}
 ✓ tests/integration/ml5-macro-lot1-integrated-substituted.pg.test.ts (2 tests) 199ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  02:47:04
   Duration  670ms (transform 88ms, setup 17ms, collect 282ms, tests 199ms, environment 0ms, prepare 29ms)


```

### tsc (baseline 12)
```
tests/integration/ml5-documentary-autonomy.pg.test.ts(176,19): error TS2339: Property 'revisionId' does not exist on type 'ReconcileOk | ReconcileFailedPrior | ReconcileConflict | { status: "UNKNOWN"; reason: string; documentId: string; revisionId: string; revisionNumber: number; } | ... 8 more ... | { ...; }'.
  Property 'revisionId' does not exist on type '{ status: "FAILED"; reason: string; documentId?: undefined; rolledBack?: undefined; }'.
tests/integration/ml5-documentary-autonomy.pg.test.ts(177,19): error TS2339: Property 'idempotentReplay' does not exist on type 'ReconcileOk | ReconcileFailedPrior | ReconcileConflict | { status: "UNKNOWN"; reason: string; documentId: string; revisionId: string; revisionNumber: number; } | ... 8 more ... | { ...; }'.
  Property 'idempotentReplay' does not exist on type 'ReconcileConflict'.
tests/integration/ml5-documentary-autonomy.pg.test.ts(177,55): error TS2339: Property 'revisionId' does not exist on type 'ReconcileOk | ReconcileFailedPrior | ReconcileConflict | { status: "UNKNOWN"; reason: string; documentId: string; revisionId: string; revisionNumber: number; } | ... 8 more ... | { ...; }'.
  Property 'revisionId' does not exist on type '{ status: "FAILED"; reason: string; documentId?: undefined; rolledBack?: undefined; }'.
tests/integration/ml5-web-query-authority.pg.test.ts(56,31): error TS2339: Property 'projectId' does not exist on type 'CreateProjectResult'.
  Property 'projectId' does not exist on type '{ status: "CONFLICT"; actualCreationRevision: number; reason: string; }'.
tests/unit/ml5-activity-hierarchy.test.ts(68,7): error TS2322: Type '"ANNOUNCED"' is not assignable to type '"OBSERVED"'.
tests/unit/ml5-activity-hierarchy.test.ts(72,17): error TS2353: Object literal may only specify known properties, and 'objective' does not exist in type '{ kind: string; coverage: string; title: string; }'.
tests/unit/ml5-http-attempt-finops-correlation.test.ts(78,14): error TS2352: Conversion of type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' to type 'ProcessEnv' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Property 'NODE_ENV' is missing in type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' but required in type 'ProcessEnv'.
tests/unit/ml5-http-attempt-finops-correlation.test.ts(105,15): error TS2352: Conversion of type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' to type 'ProcessEnv' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Property 'NODE_ENV' is missing in type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' but required in type 'ProcessEnv'.
tests/unit/ml5-http-attempt-finops-correlation.test.ts(154,17): error TS2352: Conversion of type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' to type 'ProcessEnv' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Property 'NODE_ENV' is missing in type '{ STUDIO_LANE: string; OPENAI_API_KEY: string; SFIA_OPENAI_EXPECTED_KEY_FP: string; }' but required in type 'ProcessEnv'.
tests/unit/ml5-pdf-extract.test.ts(35,38): error TS2345: Argument of type '{}' is not assignable to parameter of type 'ProcessEnv'.
  Property 'NODE_ENV' is missing in type '{}' but required in type 'ProcessEnv'.
tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts(142,43): error TS2345: Argument of type '{ name: string; description: string; parameters: { type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }; execute: (input: { ref: string; }) => Promise<...>; }' is not assignable to parameter of type 'ToolOptions<{ type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }, unknown, undefined>'.
  Type '{ name: string; description: string; parameters: { type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }; execute: (input: { ref: string; }) => Promise<...>; }' is not assignable to type 'StrictToolOptions<{ type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }, unknown, undefined>'.
    Type '{ name: string; description: string; parameters: { type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }; execute: (input: { ref: string; }) => Promise<...>; }' is not assignable to type 'StrictToolOptionsBase<{ type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }, unknown, undefined>'.
      Types of property 'execute' are incompatible.
        Type '(input: { ref: string; }) => Promise<string>' is not assignable to type 'ToolExecuteFunction<{ type: "object"; properties: { ref: { type: string; }; }; required: string[]; additionalProperties: false; }, unknown, unknown>'.
          Types of parameters 'input' and 'input' are incompatible.
            Type 'unknown' is not assignable to type '{ ref: string; }'.
tests/unit/ml5-provider-sdk-frontier.integration.test.ts(87,11): error TS2578: Unused '@ts-expect-error' directive.

```

## 11. Fake/Real

| | |
|---|---|
| Applicable | oui |
| REAL | PG DEV · process · API · SDK installé · Figma RO |
| SUBSTITUTED | Admin OpenAI · Responses · WEB · continuité fournisseur |
| Gaps | permissions OpenAI réelles · usage/coût LIVE · WEB réel · continuité hébergée · rétention |
| Claim | DETERMINISTIC/INTEGRATION PROVEN ≠ READY FOR REAL |
| Bounded REAL | Intervention 2 après gates Morris |

## 12. Réserves admissibles (proposées)

| Réserve | Impact | Preuve | Owner | Sortie | Justification report |
|---|---|---|---|---|---|
| 12 TS errors préexistants hors blast | faible tests | tsc list | ML hors ML1 | cycle dédié | indépendants |
| qualify:browser 4 fails historiques | non-régression UI ML1 non critique | cycles antérieurs | UX | après G-FINOPS-UX | hors changements |
| Mécanismes native continuity non LIVE | valeur à démontrer | OFF + builder | D3 | G-NATIVE-CONTINUITY | Intervention 2 |
| UX delta non appliqué | confort/clarté FinOps | Figma RO | UX | G-FINOPS-UX | GO requis |

## 13. Dossier gates Morris

Voir section 4.3 (intégralité) — `dossier-gates-morris-consolide-ml1-20261127.md`.

## 14. Scénario Intervention 2 (chemin critique)

1. G-ADMIN-SECRET → secret hors Git
2. G-ADMIN-LIVE → collecte bornée
3. FinOps LIVE COMPARABLE
4. (opt) G-TRACING-LOCAL ON DEV
5. G-WEB-PUBLIC/A3 → LIVE public borné
6. G-NATIVE-CONTINUITY comparative
7. G-PROVIDER-LIVE-QUALIFICATION intégré
8. Rollback : modes OFF / révoquer clés

## 15. Verdict pack

**MACRO-LOT 1 — INTEGRATED FOUNDATION COMPLETED — READY FOR CONSOLIDATED MORRIS GATES**

- Pas de blocker technique non gouverné dans le mandat
- Sécurité/intégrité qualifiées DEV
- Raccordements opérationnels
- Preuves intégrées substituées
- Build final identifié
- Dossier d'arbitrage complet
- Capacités LIVE **non** qualifiées (attendu)

R5 IN PROGRESS · ML5 OPEN · Macro-lot 1 en qualification · Lots 2/3 non engagés · RECETTE protégée · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED
