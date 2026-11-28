# Review Pack FULL — Mandat 6 — Suppression définitive des espaces

- date et heure : 2026-11-28 19:25 Europe/Paris
- cycle : 08 — Delivery / implémentation
- profil : Critical
- typologie : EVOL
- niveau : FULL
- mono-cycle : oui, Mandat 6 seulement
- réinitialisation du pack : oui, le fichier a été remplacé depuis `RESET`
- autorisation Morris : GO MORRIS — 28/11/2026, Mandat 6
- arbitrage A5 révisé : ARCHIVER conserve et restaure. SUPPRIMER efface définitivement. La suppression est irréversible. Abandon explicite de la suppression logique, du marqueur DELETED, de la corbeille, de la sous-vue Supprimés, de la récupération, de la restauration après suppression, d'une rétention supplémentaire, d'un job de purge et d'une nouvelle architecture de lifecycle.
- archivage A4 : non modifié dans son comportement. Il reste personnel, réversible, accessible, sans interruption du travail et sans changement d'autorité.

## Local Git Truth Check

- dépôt : `/Users/morris/Projects/sfia-wt-next-ml5-20261123`, remote produit `mcleland147/sfia-workspace`
- branche : `sfia/next-ml5-integrated-delivery-20261123`
- HEAD d'entrée : `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
- parent d'entrée : `fff5ebd9db873c186b71469c4d6957f18831c3cb`
- tree d'entrée : `8c072c89322f5f2f0deb9749181160c247bd36ee`
- origin de la branche, non modifié : `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- origin/main et merge-base : `997897fd7cf914771e7d08e8030dc7123fab7d25`
- HEAD final : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- parent final : `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
- tree final : `3c3b70a5488db51b6a9494a94c04a8831ab4e25f`
- message : `feat(studio-next): support permanent space deletion`
- avance : 3 commits, retard : 0
- commits conservés : M4 `fff5ebd9`, M5 `8acc05b7`, M6 `081d39d0`
- reset, rebase, amend : non
- push produit : non
- état avant le commit : les seuls non suivis étaient `.tmp-sfia-review/` et `projects/sfia-studio-next/web/.tmp-sfia-review/`. Ils ne sont pas dans le commit.
- `git diff --check` : propre avant le commit

## Sources lues

- Routing Guide v1.4, blob `3315bbae4757ad42255d16cba47d9e32be2a7842`
- Template v2.6, blob `f4fdb488fdf81fa9bf874c1c24c1a22d0cb296c1`
- ENV-01, blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f`
- product-versioning, blob `8bc93e0fafac0f981c446e978a37f5f93d183875`
- contrat fonctionnel v0.3, commit `11fe008151cb015095476cb8cb0ff93d9308acf4`, blob `c2de0d11235863936f519797d3bdfa5f6bfbc853` : PF-33, PF-34, PF-A06, PF-A07, PF-A08
- contrat technique v0.4, blob `9a9b6587e1e541fe51271a3f6edbaa974c70bc23`, §5 et §7.6
- contrat UX v0.4, blob `d9f9b24dc4e1feed9a30b86409596cad6ad85792`, §5.1
- suivi v0.32, commit `0b36022bb4fe89b0b25d607f0fe7c8fc6b7d9923`, blob `e7faccbaeb5ce2a1a80cacf2ec3bd0a924037779`, §36 et §37
- dernier handoff M5 : `5d214eba122e32e728b2983b69b611e11455c309`, blob `c279a40e5f76e354ff9162c3fc8ff05982eee884`
- schéma effectif `web/src/db/schema.ts` et inventaire FK lu en lecture seule sur PostgreSQL
- code du HEAD local : portefeuille, organisation, préparations, route d'espace
- `product-version.ts` : non modifié, reste `0.0.0-dev`
- contrats, gouvernance, suivi et publisher : non modifiés
- Figma `itgvCulInEnFY6DvgIegvP` : non modifié. Les nœuds 14.14, 14.15, 14.24, 14.26, 14.16 et 14.25 n'ont pas été mesurés. Le texte contractuel v0.4 remplace les textes historiques de suppression récupérable. F2 : NOT PROVEN.

## Qualification G3

Une suppression transactionnelle tient dans les mécanismes déjà présents : `sql.begin`, `FOR UPDATE`, `StudioError`, session serveur. Aucune migration, aucune nouvelle autorité, aucune nouvelle table, aucun registre de suppression, aucune HumanDecision créée pour l'effacement.

Le bouton est actif parce que l'intégrité a été prouvée sur `sfia_next_e2e`. Aucun projet historique de DEV ou de RECETTE n'a été supprimé.

### Graphe et propriété

Données exclusivement propres, supprimées avec la cible :

- projet et préparation liée, ou préparation OPEN non rattachée
- `preparation_project_links`, `create_project_commands`
- conversations, messages, tours, `nora_activity_events` de ces conversations
- documents, révisions, références de publication internes
- sujets, acquis, points ouverts, événements et révisions de connaissance de cet espace
- décisions, restrictions levées, trajectoire, état de pilotage, cycles, applications de méthode
- commandes métier et effets, tentatives d'effet, faits Git observés, contrats techniques, handoffs et qualifications de réalisation
- travaux Nora et checkpoints de cet espace
- observations FinOps dont le projet ou la préparation est la cible, après contrôle d'exclusivité
- `derived_embedding_chunks` si la table existe
- liens Git internes `project_git_links`
- ligne `pilot_space_organization` du Pilote propriétaire pour les identifiants supprimés

Données préservées :

- autres projets, autres préparations, autres Pilotes, sessions, comptes
- préférences globales `pilot_portfolio_preferences`
- autorisations d'intégration, dépôts autorisés, états OAuth
- dépôt Git externe et son autorisation, même lorsqu'un second projet y est lié
- `provider_admin_usage_snapshots` et `provider_admin_collection_runs` : `project_id` y est un texte d'organisation fournisseur, sans clé étrangère vers un projet Studio
- montants, tokens et tarifs des observations conservées
- organisation personnelle d'un autre Pilote

Refus de toute la transaction, sans nullification d'un pointeur extérieur :

- une ligne du périmètre porte aussi un autre `project_id`
- une observation, un travail, un sujet ou une décision extérieurs référence encore la cible
- une préparation cible est rattachée, n'est pas OPEN, ou appartient à un autre Pilote
- une restriction `ACTIVE` existe
- un tour `RUNNING`, `ACCEPTED` ou `UNKNOWN` existe
- une tentative d'effet `AUTHORIZED`, `DISPATCHED` ou `AMBIGUOUS` existe
- une qualification `PENDING`, `RUNNING` ou `UNKNOWN` existe
- un travail Nora `RUNNING` existe

Un cycle ACTIVE sans effet en cours ne bloque pas. Une commande métier déjà `APPLIED` ou `REJECTED` ne bloque pas. Une restriction `LIFTED` est une donnée propre et part avec le projet.

### Autorité et concurrence

L'autorité est `requireStudioSession()`. Le `pilotId` vient de la session. Le corps n'accepte que `confirm: true`. Un identifiant de propriétaire envoyé par le client n'est pas lu.

Sous la transaction : verrou de la racine, des préparations liées, des conversations, des documents et des travaux du périmètre. Les contrôles d'exclusivité et d'inactivité sont refaits après ces verrous. Une insertion concurrente d'un tour est soit visible avant la suppression, soit bloquée par le verrou de la conversation jusqu'à la fin de la transaction. Après validation, une insertion dans le contexte supprimé échoue sur la clé étrangère.

Aucun appel réseau n'est fait sous le verrou. Le module ne importe ni `fetch`, ni GitHub, ni OpenAI.

### Ordre transactionnel

1. Verrouiller la racine et qualifier le lien.
2. Refuser si la propriété n'est pas exclusive ou si une opération n'est pas terminée.
3. Annuler, dans le seul périmètre, les auto-références nullables : révision de base, acquis remplacé, parent et origine de sujet, décisions révoquées ou levées, révision de trajectoire courante.
4. Supprimer les événements Nora, les observations propres, les checkpoints, puis les travaux avant les conversations.
5. Supprimer qualifications, handoffs, faits Git, publications, contrats, tentatives, embeddings, commandes, cycles, trajectoire, restrictions, connaissance, documents, messages, tours, conversations, commandes de création, liens, pilotage, décisions.
6. Supprimer l'organisation personnelle du propriétaire, les préparations, puis le projet.
7. Si le seam de test est armé, lever une erreur avant le retour. Sinon retourner `{ deleted: true, spaceType, spaceId }`.
8. Toute exception provoque le rollback de `sql.begin`. Aucune suppression partielle n'est validée.

Le seam `failNextSpaceDeletionBeforeCommitForTests` est consommé au début de l'appel. Un `NOT_FOUND` ne le laisse pas armé pour l'appel suivant.

## Allowlist

- `projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts` — créé
- `projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts` — créé
- `projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts` — `DELETE`
- `projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx` — action et confirmation
- `projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts` — accusé de suppression
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

Hors allowlist, non touchés : `schema.ts`, migrations, `product-version.ts`, composer, projection FinOps, gouvernance, contrats, suivi, publisher, CI, Figma, RECETTE.

## Fichiers créés — contenu intégral

### delete-owned-space.ts

```
import { sql } from "@/db/client";
import { StudioError } from "@/lib/http-errors";

export type OwnedSpaceType = "project" | "preparation";

const NONE = "__none__";

let interruptBeforeCommit = false;

/** One-shot test seam. The transaction has already deleted rows and must roll them back. */
export function failNextSpaceDeletionBeforeCommitForTests() {
  interruptBeforeCommit = true;
}

function blocked(message: string): never {
  throw new StudioError("CONFLICT", message, { httpStatus: 409 });
}

/**
 * Permanently delete one owned project, or one open unattached preparation.
 * The caller must be the authenticated owner. Shared accounts, repositories,
 * authorizations and provider snapshots are left untouched.
 */
export async function deleteOwnedSpace(
  ownerPilotId: string,
  spaceType: OwnedSpaceType,
  spaceId: string,
): Promise<{ deleted: true; spaceType: OwnedSpaceType; spaceId: string }> {
  const interrupt = interruptBeforeCommit;
  interruptBeforeCommit = false;
  return sql.begin(async (tx) => {
    const preps: string[] = [];
    let projectId = NONE;
    if (spaceType === "project") {
      const project = await tx<{ id: string }[]>`
        SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${ownerPilotId} FOR UPDATE
      `;
      if (!project[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
      projectId = project[0].id;
      const links = await tx<{ preparation_id: string }[]>`
        SELECT preparation_id FROM preparation_project_links WHERE project_id = ${projectId} FOR UPDATE
      `;
      for (const link of links) preps.push(link.preparation_id);
      if (preps.length) {
        const locked = await tx<{ id: string; owner_pilot_id: string }[]>`
          SELECT id, owner_pilot_id FROM preparations WHERE id = ANY(${preps}) FOR UPDATE
        `;
        if (locked.length !== preps.length || locked.some((row) => row.owner_pilot_id !== ownerPilotId)) {
          blocked("La préparation liée n'appartient pas au même Pilote.");
        }
      }
    } else {
      const preparation = await tx<{ id: string; status: string }[]>`
        SELECT id, status FROM preparations
        WHERE id = ${spaceId} AND owner_pilot_id = ${ownerPilotId}
        FOR UPDATE
      `;
      if (!preparation[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
      if (preparation[0].status !== "OPEN") {
        blocked("Seule une préparation ouverte et autonome peut être supprimée.");
      }
      const link = await tx<{ project_id: string }[]>`
        SELECT project_id FROM preparation_project_links WHERE preparation_id = ${spaceId} FOR UPDATE
      `;
      if (link[0]) blocked("Cette préparation est rattachée à un projet. Supprimez le projet pour effacer l'ensemble.");
      preps.push(preparation[0].id);
    }

    const scope = preps.length ? preps : [NONE];
    await assertExclusive(tx as unknown as typeof sql, scope, projectId);
    await assertIdle(tx as unknown as typeof sql, scope, projectId);

    await tx`SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
    await tx`SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
    await tx`SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;

    await tx`
      UPDATE document_revisions SET base_revision_id = NULL
      WHERE document_id IN (
        SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      UPDATE knowledge_acquis SET supersedes_acquis_id = NULL
      WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
    `;
    await tx`
      UPDATE knowledge_subjects
      SET parent_subject_id = NULL, originated_from_subject_id = NULL
      WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
    `;
    await tx`
      UPDATE human_decisions
      SET revokes_decision_id = NULL, supersedes_decision_id = NULL, lifts_restriction_id = NULL
      WHERE project_id = ${projectId}
    `;
    await tx`UPDATE governance_restrictions SET lift_decision_id = NULL WHERE project_id = ${projectId}`;
    await tx`UPDATE project_pilotage_state SET current_trajectory_revision_id = NULL WHERE project_id = ${projectId}`;
    await tx`
      UPDATE trajectory_qualification_operations SET trajectory_revision_id = NULL
      WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})
    `;

    await tx`
      DELETE FROM nora_activity_events
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      DELETE FROM provider_usage_observations
      WHERE project_id = ${projectId}
         OR preparation_id = ANY(${scope})
         OR conversation_id IN (
           SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
         )
         OR cognitive_work_id IN (
           SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
         )
         OR turn_id IN (
           SELECT turn.id FROM conversation_turn_commands turn
           JOIN conversations conversation ON conversation.id = turn.conversation_id
           WHERE conversation.preparation_id = ANY(${scope}) OR conversation.project_id = ${projectId}
         )
    `;
    await tx`
      DELETE FROM cognitive_work_checkpoints
      WHERE work_id IN (
        SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM cognitive_works WHERE project_id = ${projectId}`;
    await tx`DELETE FROM cognitive_works WHERE preparation_id = ANY(${scope})`;
    await tx`DELETE FROM realization_qualifications WHERE project_id = ${projectId}`;
    await tx`DELETE FROM realization_handoffs WHERE project_id = ${projectId}`;
    await tx`DELETE FROM observed_git_facts WHERE project_id = ${projectId}`;
    await tx`DELETE FROM document_publication_refs WHERE project_id = ${projectId}`;
    await tx`DELETE FROM technical_contracts WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM effect_attempts WHERE project_id = ${projectId}`;
    const derived = await tx<{ name: string | null }[]>`SELECT to_regclass('public.derived_embedding_chunks') AS name`;
    if (derived[0]?.name) {
      await tx`DELETE FROM derived_embedding_chunks WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    }
    await tx`DELETE FROM business_command_effects WHERE project_id = ${projectId}`;
    await tx`DELETE FROM business_commands WHERE project_id = ${projectId}`;
    await tx`DELETE FROM method_applications WHERE project_id = ${projectId}`;
    await tx`DELETE FROM project_cycles WHERE project_id = ${projectId}`;
    await tx`DELETE FROM trajectory_qualification_operations WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM trajectory_revisions WHERE project_id = ${projectId}`;
    await tx`DELETE FROM governance_restrictions WHERE project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_decision_explanation_revisions WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_open_point_events WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_open_points WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_acquis WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_subject_events WHERE preparation_id = ANY(${scope})`;
    await tx`DELETE FROM knowledge_subject_summary_revisions WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM knowledge_subjects WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`
      DELETE FROM document_revisions
      WHERE document_id IN (
        SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`
      DELETE FROM messages
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`
      DELETE FROM conversation_turn_commands
      WHERE conversation_id IN (
        SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
      )
    `;
    await tx`DELETE FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM create_project_commands WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}`;
    await tx`DELETE FROM preparation_project_links WHERE project_id = ${projectId} OR preparation_id = ANY(${scope})`;
    await tx`DELETE FROM project_git_links WHERE project_id = ${projectId}`;
    await tx`DELETE FROM project_pilotage_state WHERE project_id = ${projectId}`;
    await tx`DELETE FROM human_decisions WHERE project_id = ${projectId}`;
    const removedIds = spaceType === "project" ? [projectId, ...preps] : preps;
    await tx`
      DELETE FROM pilot_space_organization
      WHERE owner_pilot_id = ${ownerPilotId} AND space_id = ANY(${removedIds})
    `;
    if (preps.length) await tx`DELETE FROM preparations WHERE id = ANY(${preps}) AND owner_pilot_id = ${ownerPilotId}`;
    if (projectId !== NONE) await tx`DELETE FROM projects WHERE id = ${projectId} AND owner_pilot_id = ${ownerPilotId}`;

    if (interrupt) throw new Error("space deletion interrupted before commit");
    return { deleted: true as const, spaceType, spaceId };
  });
}

async function assertExclusive(tx: typeof sql, preps: string[], projectId: string) {
  const tables = [
    "conversations",
    "documents",
    "cognitive_works",
    "knowledge_subjects",
    "knowledge_acquis",
    "knowledge_open_points",
    "provider_usage_observations",
    "technical_contracts",
  ];
  for (const table of tables) {
    const rows = await tx<{ n: number }[]>`
      SELECT count(*)::int AS n FROM ${tx(table)}
      WHERE preparation_id = ANY(${preps})
        AND project_id IS NOT NULL
        AND project_id <> ${projectId}
    `;
    if ((rows[0]?.n ?? 0) > 0) {
      blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
    }
    if (projectId !== NONE) {
      const inverse = await tx<{ n: number }[]>`
        SELECT count(*)::int AS n FROM ${tx(table)}
        WHERE project_id = ${projectId}
          AND preparation_id IS NOT NULL
          AND NOT (preparation_id = ANY(${preps}))
      `;
      if ((inverse[0]?.n ?? 0) > 0) {
        blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
      }
    }
  }
  const sharedObservation = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM provider_usage_observations
    WHERE project_id IS NOT NULL
      AND project_id <> ${projectId}
      AND (
        cognitive_work_id IN (
          SELECT id FROM cognitive_works
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR conversation_id IN (
          SELECT id FROM conversations
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR turn_id IN (
          SELECT turn.id FROM conversation_turn_commands turn
          JOIN conversations conversation ON conversation.id = turn.conversation_id
          WHERE conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId}
        )
      )
  `;
  if ((sharedObservation[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const foreignWork = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM cognitive_works
    WHERE conversation_id IN (
      SELECT id FROM conversations
      WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
    )
      AND (project_id IS NULL OR project_id <> ${projectId})
      AND NOT (preparation_id = ANY(${preps}))
  `;
  if ((foreignWork[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const outsideSubject = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM knowledge_subjects other
    WHERE NOT (other.preparation_id = ANY(${preps}))
      AND (other.project_id IS NULL OR other.project_id <> ${projectId})
      AND (
        other.parent_subject_id IN (
          SELECT id FROM knowledge_subjects
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
        OR other.originated_from_subject_id IN (
          SELECT id FROM knowledge_subjects
          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
        )
      )
  `;
  if ((outsideSubject[0]?.n ?? 0) > 0) {
    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
  }
  const foreignDecision = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM human_decisions other
    WHERE other.project_id <> ${projectId}
      AND (
        other.revokes_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
        OR other.supersedes_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
      )
  `;
  if ((foreignDecision[0]?.n ?? 0) > 0) {
    blocked("Une décision d'un autre projet référence encore cet espace.");
  }
  const foreignRestriction = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM governance_restrictions other
    WHERE other.project_id <> ${projectId}
      AND (
        other.origin_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
        OR other.lift_decision_id IN (SELECT id FROM human_decisions WHERE project_id = ${projectId})
      )
  `;
  if ((foreignRestriction[0]?.n ?? 0) > 0) {
    blocked("Une décision d'un autre projet référence encore cet espace.");
  }
}

async function assertIdle(tx: typeof sql, preps: string[], projectId: string) {
  const turns = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n
    FROM conversation_turn_commands turn
    JOIN conversations conversation ON conversation.id = turn.conversation_id
    WHERE (conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId})
      AND turn.status IN ('RUNNING', 'ACCEPTED', 'UNKNOWN')
  `;
  if ((turns[0]?.n ?? 0) > 0) blocked("Un échange Nora est encore en cours.");
  const effects = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM effect_attempts
    WHERE project_id = ${projectId} AND status IN ('AUTHORIZED', 'DISPATCHED', 'AMBIGUOUS')
  `;
  if ((effects[0]?.n ?? 0) > 0) blocked("Une opération externe n'est pas terminée.");
  const qualification = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM trajectory_qualification_operations
    WHERE (project_id = ${projectId} OR preparation_id = ANY(${preps}))
      AND status IN ('PENDING', 'RUNNING', 'UNKNOWN')
  `;
  if ((qualification[0]?.n ?? 0) > 0) blocked("Une qualification est encore en cours.");
  const works = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM cognitive_works
    WHERE (preparation_id = ANY(${preps}) OR project_id = ${projectId})
      AND status = 'RUNNING'
  `;
  if ((works[0]?.n ?? 0) > 0) blocked("Un travail Nora est encore en cours.");
  const restrictions = await tx<{ n: number }[]>`
    SELECT count(*)::int AS n FROM governance_restrictions
    WHERE project_id = ${projectId} AND status = 'ACTIVE'
  `;
  if ((restrictions[0]?.n ?? 0) > 0) blocked("Une restriction active empêche cette suppression.");
}
```
### space-deletion.pg.test.ts

```
/**
 * Permanent deletion of an owned project or an autonomous preparation.
 * Runs on the isolated e2e database. Historical DEV projects are not used.
 */
import { readFileSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { sql } from "@/db/client";
import { newId } from "@/lib/ids";
import {
  deleteOwnedSpace,
  failNextSpaceDeletionBeforeCommitForTests,
} from "@/domains/preparation/delete-owned-space";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

vi.mock("@/domains/identity/session", () => ({
  requireStudioSession: vi.fn(),
}));

import { requireStudioSession } from "@/domains/identity/session";
import { DELETE, GET as GET_SPACE } from "@/app/api/portfolio/spaces/[type]/[id]/route";
import { GET as GET_PROJECT } from "@/app/api/projects/[projectId]/route";
import { GET as GET_PREPARATION } from "@/app/api/preparations/[preparationId]/route";
import { GET as GET_SEARCH } from "@/app/api/projects/[projectId]/journal/search/route";
import { GET as GET_PORTFOLIO } from "@/app/api/portfolio/route";

const stamp = newId("m6").slice(-8);

function id(kind: string) {
  return `m6s_${stamp}_${kind}`;
}

async function countOwned(projectId: string, preparationIds: string[]) {
  const columns = await sql<{ table_name: string; column_name: string }[]>`
    SELECT table_name, column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND column_name IN ('project_id', 'preparation_id')
      AND table_name <> 'provider_admin_usage_snapshots'
    ORDER BY table_name, column_name
  `;
  const hits: string[] = [];
  for (const column of columns) {
    const rows = column.column_name === "project_id"
      ? await sql<{ n: number }[]>`
          SELECT count(*)::int AS n FROM ${sql(column.table_name)} WHERE project_id = ${projectId}
        `
      : await sql<{ n: number }[]>`
          SELECT count(*)::int AS n FROM ${sql(column.table_name)}
          WHERE preparation_id = ANY(${preparationIds.length ? preparationIds : ["__none__"]})
        `;
    if ((rows[0]?.n ?? 0) > 0) hits.push(`${column.table_name}.${column.column_name}`);
  }
  return hits;
}

describe("permanent space deletion (PG)", () => {
  const pilotA = id("pilot_a");
  const pilotB = id("pilot_b");
  const prep = id("prep");
  const prepFree = id("prep_free");
  const prepSibling = id("prep_sibling");
  const prepOther = id("prep_other");
  const project = id("project");
  const sibling = id("sibling");
  const other = id("other");
  const repo = id("repo");
  const authorization = id("auth");
  const snapshot = crypto.randomUUID();
  const collection = id("collection");

  beforeAll(async () => {
    if (!process.env.DATABASE_URL?.includes("5433")) throw new Error("isolated database required");
    const staleProjects = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM projects WHERE id LIKE 'm6s_%'
    `;
    for (const row of staleProjects) {
      await sql`UPDATE governance_restrictions SET status = 'LIFTED' WHERE project_id = ${row.id}`;
      await sql`
        UPDATE conversation_turn_commands SET status = 'COMPLETE'
        WHERE conversation_id IN (SELECT id FROM conversations WHERE project_id = ${row.id})
      `;
      await sql`DELETE FROM provider_usage_observations WHERE preparation_id IN (
        SELECT preparation_id FROM preparation_project_links WHERE project_id = ${row.id}
      ) AND project_id <> ${row.id}`;
      await deleteOwnedSpace(row.owner_pilot_id, "project", row.id);
    }
    const stalePreps = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM preparations WHERE id LIKE 'm6s_%'
    `;
    for (const row of stalePreps) await deleteOwnedSpace(row.owner_pilot_id, "preparation", row.id);
    await sql`DELETE FROM pilot_portfolio_preferences WHERE owner_pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM authorized_repositories WHERE pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM integration_authorizations WHERE pilot_id IN (
      SELECT id FROM pilots WHERE display_name IN ('m6-a', 'm6-b')
    )`;
    await sql`DELETE FROM provider_admin_usage_snapshots WHERE collection_id LIKE 'm6s_%'`;
    await sql`DELETE FROM provider_admin_collection_runs WHERE collection_id LIKE 'm6s_%'`;
    await sql`DELETE FROM pilots WHERE display_name IN ('m6-a', 'm6-b')`;
    await sql`INSERT INTO pilots (id, display_name) VALUES (${pilotA}, 'm6-a'), (${pilotB}, 'm6-b')`;
    await sql`
      INSERT INTO preparations (id, owner_pilot_id, status, preview_name)
      VALUES
        (${prep}, ${pilotA}, 'OPEN', 'm6-linked'),
        (${prepFree}, ${pilotA}, 'OPEN', 'm6-free'),
        (${prepSibling}, ${pilotA}, 'OPEN', 'm6-sibling'),
        (${prepOther}, ${pilotB}, 'OPEN', 'm6-other')
    `;
    await sql`
      INSERT INTO projects (id, owner_pilot_id, name) VALUES
        (${project}, ${pilotA}, ${`m6-space-target-${stamp}`}),
        (${sibling}, ${pilotA}, ${`m6-space-sibling-${stamp}`}),
        (${other}, ${pilotB}, ${`m6-space-other-${stamp}`})
    `;
    await sql`
      INSERT INTO preparation_project_links (preparation_id, project_id) VALUES
        (${prep}, ${project}),
        (${prepSibling}, ${sibling}),
        (${prepOther}, ${other})
    `;
    await sql`
      INSERT INTO create_project_commands (id, pilot_id, idempotency_key, fingerprint, preparation_id, project_id, result)
      VALUES (${id("create")}, ${pilotA}, ${id("idem")}, 'fp', ${prep}, ${project}, 'CREATED')
    `;
    await sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("conv")}, ${prep}, ${project}, ${pilotA})
    `;
    await sql`
      INSERT INTO messages (id, conversation_id, role, content, status, ordinal)
      VALUES (${id("msg")}, ${id("conv")}, 'user', 'preuve', 'COMPLETE', 1)
    `;
    await sql`
      INSERT INTO conversation_turn_commands (
        id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
      ) VALUES (
        ${id("turn")}, ${id("conv")}, ${pilotA}, ${id("turnkey")}, 'fp', ${id("op")}, 'COMPLETE'
      )
    `;
    await sql`
      INSERT INTO nora_activity_events (
        id, conversation_id, turn_command_id, owner_pilot_id, sequence, phase, nature, status
      ) VALUES (
        ${id("activity")}, ${id("conv")}, ${id("turn")}, ${pilotA}, 1, 'reply', 'message', 'COMPLETE'
      )
    `;
    await sql`
      INSERT INTO documents (id, preparation_id, project_id, owner_pilot_id, title)
      VALUES (${id("doc")}, ${prep}, ${project}, ${pilotA}, 'Note')
    `;
    await sql`
      INSERT INTO document_revisions (id, document_id, revision_number, content_markdown, status)
      VALUES (${id("rev")}, ${id("doc")}, 1, 'version', 'AVAILABLE')
    `;
    await sql`
      INSERT INTO knowledge_subjects (id, preparation_id, project_id, owner_pilot_id, title)
      VALUES (${id("subject")}, ${prep}, ${project}, ${pilotA}, 'Sujet')
    `;
    await sql`
      INSERT INTO knowledge_acquis (id, preparation_id, project_id, owner_pilot_id, subject_id, statement)
      VALUES (${id("acquis")}, ${prep}, ${project}, ${pilotA}, ${id("subject")}, 'acquis')
    `;
    await sql`
      INSERT INTO knowledge_open_points (id, preparation_id, project_id, owner_pilot_id, subject_id, statement)
      VALUES (${id("point")}, ${prep}, ${project}, ${pilotA}, ${id("subject")}, 'point')
    `;
    await sql`
      INSERT INTO knowledge_subject_events (id, preparation_id, owner_pilot_id, subject_id, event_type)
      VALUES (${id("sevent")}, ${prep}, ${pilotA}, ${id("subject")}, 'CREATED')
    `;
    await sql`
      INSERT INTO knowledge_open_point_events (id, open_point_id, preparation_id, project_id, owner_pilot_id, event_type)
      VALUES (${id("pevent")}, ${id("point")}, ${prep}, ${project}, ${pilotA}, 'OPENED')
    `;
    await sql`
      INSERT INTO knowledge_subject_summary_revisions (
        id, subject_id, preparation_id, project_id, owner_pilot_id, revision_number, summary_markdown
      ) VALUES (
        ${id("summary")}, ${id("subject")}, ${prep}, ${project}, ${pilotA}, 1, 'synthèse'
      )
    `;
    await sql`
      INSERT INTO human_decisions (
        id, project_id, pilot_id, source_kind, source_ref, kind, statement, state
      ) VALUES (
        ${id("decision")}, ${project}, ${pilotA}, 'pilot', 'm6', 'RETAIN', 'garder', 'APPLICABLE'
      )
    `;
    await sql`
      INSERT INTO trajectory_revisions (id, project_id, revision_number, status, orientation, source_kind)
      VALUES (${id("trajectory")}, ${project}, 1, 'RETAINED', 'continuer', 'pilot')
    `;
    await sql`
      INSERT INTO project_pilotage_state (project_id, revision, current_trajectory_revision_id)
      VALUES (${project}, 1, ${id("trajectory")})
    `;
    await sql`
      INSERT INTO project_cycles (id, project_id, cycle_type, objective, status)
      VALUES (${id("cycle")}, ${project}, 'DELIVERY', 'livrer', 'ACTIVE')
    `;
    await sql`
      INSERT INTO trajectory_qualification_operations (
        id, project_id, preparation_id, pilot_id, status, phase
      ) VALUES (
        ${id("qual")}, ${project}, ${prep}, ${pilotA}, 'COMPLETE', 'done'
      )
    `;
    await sql`
      INSERT INTO method_applications (id, project_id, method_ref, method_version, decision_id)
      VALUES (${id("method")}, ${project}, 'sfia', '2.6', ${id("decision")})
    `;
    await sql`
      INSERT INTO governance_restrictions (
        id, project_id, target_kind, origin_decision_id, status
      ) VALUES (
        ${id("lifted")}, ${project}, 'PROJECT', ${id("decision")}, 'LIFTED'
      )
    `;
    await sql`
      INSERT INTO business_commands (
        id, project_id, actor_pilot_id, client_command_key, fingerprint, source_kind, source_ref,
        source_action_key, operation, expected_revision, status, decision_id
      ) VALUES (
        ${id("command")}, ${project}, ${pilotA}, ${id("ckey")}, 'fp', 'pilot', 'm6', 'keep', 'NOTE', 1, 'APPLIED', ${id("decision")}
      )
    `;
    await sql`
      INSERT INTO business_command_effects (id, command_id, project_id, effect_kind, target_ref, outcome, ordinal)
      VALUES (${id("effect")}, ${id("command")}, ${project}, 'NOTE', 'project', 'APPLIED', 1)
    `;
    await sql`
      INSERT INTO effect_attempts (
        id, pilot_id, project_id, kind, status, correlation_key, fingerprint, decision_id
      ) VALUES (
        ${id("attempt")}, ${pilotA}, ${project}, 'GIT_PUBLICATION', 'COMPLETED', ${id("corr")}, 'fp', ${id("decision")}
      )
    `;
    await sql`
      INSERT INTO observed_git_facts (
        id, attempt_id, pilot_id, project_id, fact_kind, repository_full_name, ref_name, sha
      ) VALUES (
        ${id("fact")}, ${id("attempt")}, ${pilotA}, ${project}, 'HEAD', 'shared/repo', 'main', 'abc'
      )
    `;
    await sql`
      INSERT INTO technical_contracts (
        id, project_id, pilot_id, preparation_id, contract_key, version, fingerprint, status, instruction_text
      ) VALUES (
        ${id("contract")}, ${project}, ${pilotA}, ${prep}, 'm6', 1, 'fp', 'DRAFT', 'rien'
      )
    `;
    await sql`
      INSERT INTO realization_handoffs (
        id, attempt_id, project_id, pilot_id, contract_id, contract_version, contract_fingerprint, status
      ) VALUES (
        ${id("handoff")}, ${id("attempt")}, ${project}, ${pilotA}, ${id("contract")}, 1, 'fp', 'RECORDED'
      )
    `;
    await sql`
      INSERT INTO realization_qualifications (id, attempt_id, handoff_id, project_id, pilot_id, status)
      VALUES (${id("rqual")}, ${id("attempt")}, ${id("handoff")}, ${project}, ${pilotA}, 'RECORDED')
    `;
    await sql`
      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
      VALUES (${id("work")}, ${pilotA}, ${prep}, ${project}, ${id("conv")}, 'COMPLETE', 'travail')
    `;
    await sql`
      INSERT INTO cognitive_work_checkpoints (id, work_id, revision, cause)
      VALUES (${id("checkpoint")}, ${id("work")}, 1, 'complete')
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, conversation_id, cognitive_work_id,
        tariff_version, estimated_cost_usd, cost_coverage, status, granularity, idempotency_key,
        input_tokens, output_tokens
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${project}, ${prep}, ${id("conv")}, ${id("work")},
        'v-test', 1.25, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("usage")},
        11, 7
      )
    `;
    await sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("conv_sibling")}, ${prepSibling}, ${sibling}, ${pilotA})
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, tariff_version, estimated_cost_usd,
        cost_coverage, status, granularity, idempotency_key, input_tokens, output_tokens
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${sibling}, ${prepSibling},
        'v-test', 4.5, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("usage_sibling")},
        30, 9
      )
    `;
    const derived = await sql<{ name: string | null }[]>`SELECT to_regclass('public.derived_embedding_chunks') AS name`;
    if (derived[0]?.name) {
      await sql`
        INSERT INTO derived_embedding_chunks (
          id, project_id, preparation_id, owner_pilot_id, source_id, source_kind,
          content_fingerprint, model, dims, vector_json, index_ref
        ) VALUES (
          ${id("chunk")}, ${project}, ${prep}, ${pilotA}, ${id("subject")}, 'subject',
          'fp', 'test', 1, ${JSON.stringify([0.1])}::jsonb, 'idx'
        )
      `;
    }
    await sql`
      INSERT INTO integration_authorizations (id, pilot_id, provider, status)
      VALUES (${authorization}, ${pilotA}, 'github', 'CONNECTED')
    `;
    await sql`
      INSERT INTO authorized_repositories (id, pilot_id, authorization_id, owner, name, full_name)
      VALUES (${repo}, ${pilotA}, ${authorization}, 'shared', 'repo', ${`shared/repo-${stamp}`})
    `;
    await sql`
      INSERT INTO project_git_links (id, project_id, pilot_id, repository_id)
      VALUES (${id("link")}, ${project}, ${pilotA}, ${repo}), (${id("link_sibling")}, ${sibling}, ${pilotA}, ${repo})
    `;
    await sql`
      INSERT INTO document_publication_refs (
        id, project_id, pilot_id, document_id, revision_id, repository_id, target_path, target_branch, status
      ) VALUES (
        ${id("pub")}, ${project}, ${pilotA}, ${id("doc")}, ${id("rev")}, ${repo}, 'note.md', 'main', 'OBSERVED'
      )
    `;
    await sql`
      INSERT INTO pilot_space_organization (
        owner_pilot_id, space_type, space_id, favorite, archived_at, row_version
      ) VALUES
        (${pilotA}, 'project', ${project}, true, now(), 2),
        (${pilotB}, 'project', ${other}, true, NULL, 1)
    `;
    await sql`
      INSERT INTO pilot_portfolio_preferences (owner_pilot_id, view)
      VALUES (${pilotA}, 'list')
    `;
    await sql`
      INSERT INTO provider_admin_collection_runs (
        collection_id, started_at, status, path, organization_scope, collection_provenance
      ) VALUES (
        ${collection}, now(), 'READY', '/organization/costs', 'org:m6', 'TEST_SUBSTITUTED'
      )
    `;
    await sql`
      INSERT INTO provider_admin_usage_snapshots (
        id, collected_at, collection_id, source_endpoint, surface_object, organization_scope,
        interval_start_utc, interval_end_utc, granularity, project_id, amount, currency, completeness
      ) VALUES (
        ${snapshot}::uuid, now(), ${collection}, '/organization/costs', 'costs', 'org:m6',
        now(), now() + interval '1 day', '1d', ${project}, 9.5, 'usd', 'complete'
      )
    `;
  });

  afterAll(async () => {
    const projects = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM projects WHERE id IN (${project}, ${sibling}, ${other})
    `;
    for (const row of projects) {
      await sql`UPDATE governance_restrictions SET status = 'LIFTED' WHERE project_id = ${row.id}`;
      await sql`UPDATE conversation_turn_commands SET status = 'COMPLETE' WHERE conversation_id IN (
        SELECT id FROM conversations WHERE project_id = ${row.id}
      )`;
      await deleteOwnedSpace(row.owner_pilot_id, "project", row.id).catch((error: unknown) => {
        console.error("project cleanup", row.id, error);
      });
    }
    const preps = await sql<{ id: string; owner_pilot_id: string }[]>`
      SELECT id, owner_pilot_id FROM preparations WHERE id IN (${prep}, ${prepFree}, ${prepSibling}, ${prepOther})
    `;
    for (const row of preps) {
      await deleteOwnedSpace(row.owner_pilot_id, "preparation", row.id).catch((error: unknown) => {
        console.error("preparation cleanup", row.id, error);
      });
    }
    await sql`DELETE FROM provider_admin_usage_snapshots WHERE id = ${snapshot}::uuid`;
    await sql`DELETE FROM provider_admin_collection_runs WHERE collection_id = ${collection}`;
    await sql`DELETE FROM pilot_portfolio_preferences WHERE owner_pilot_id IN (${pilotA}, ${pilotB})`;
    await sql`DELETE FROM authorized_repositories WHERE id = ${repo}`;
    await sql`DELETE FROM integration_authorizations WHERE id = ${authorization}`;
    await sql`DELETE FROM pilots WHERE id IN (${pilotA}, ${pilotB})`;
  });

  it("contains no external call", () => {
    const source = readFileSync(new URL("../../src/domains/preparation/delete-owned-space.ts", import.meta.url), "utf8");
    expect(source).not.toMatch(/from ["']@\/domains\/execution|from ["']@\/domains\/integrations|openai|fetch\(/);
  });

  it("refuses an attached preparation, another pilot, and an active operation", async () => {
    await expect(deleteOwnedSpace(pilotA, "preparation", prep)).rejects.toMatchObject({ code: "CONFLICT" });
    await expect(deleteOwnedSpace(pilotB, "project", project)).rejects.toMatchObject({ code: "NOT_FOUND" });
    await sql`
      INSERT INTO governance_restrictions (id, project_id, target_kind, origin_decision_id, status)
      VALUES (${id("active")}, ${project}, 'PROJECT', ${id("decision")}, 'ACTIVE')
    `;
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toMatchObject({
      code: "CONFLICT",
      message: "Une restriction active empêche cette suppression.",
    });
    const still = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    expect(still[0]?.n).toBe(1);
    await sql`DELETE FROM governance_restrictions WHERE id = ${id("active")}`;
  });

  it("rolls the whole deletion back when commit is interrupted", async () => {
    failNextSpaceDeletionBeforeCommitForTests();
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toThrow(/interrupted before commit/);
    const projectRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    const messageRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM messages WHERE id = ${id("msg")}`;
    const decisionRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM human_decisions WHERE id = ${id("decision")}`;
    expect(projectRows[0]?.n).toBe(1);
    expect(messageRows[0]?.n).toBe(1);
    expect(decisionRows[0]?.n).toBe(1);
  });

  it("blocks when a concurrent turn is admitted before commit", async () => {
    let locked!: () => void;
    const lockedGate = new Promise<void>((resolve) => { locked = resolve; });
    let release!: () => void;
    const releaseGate = new Promise<void>((resolve) => { release = resolve; });
    const holder = sql.begin(async (tx) => {
      await tx`SELECT id FROM projects WHERE id = ${project} FOR UPDATE`;
      locked();
      await releaseGate;
      await tx`
        INSERT INTO conversation_turn_commands (
          id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
        ) VALUES (
          ${id("race")}, ${id("conv")}, ${pilotA}, ${id("racekey")}, 'fp', ${id("raceop")}, 'RUNNING'
        )
      `;
    });
    await lockedGate;
    const pending = deleteOwnedSpace(pilotA, "project", project);
    release();
    await holder;
    await expect(pending).rejects.toMatchObject({ message: "Un échange Nora est encore en cours." });
    const projectRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
    expect(projectRows[0]?.n).toBe(1);
    await sql`DELETE FROM conversation_turn_commands WHERE id = ${id("race")}`;
  });

  it("deletes the project graph and keeps the other spaces and shared resources", async () => {
    const before = await countOwned(sibling, [prepSibling]);
    expect(before.length).toBeGreaterThan(0);
    const result = await deleteOwnedSpace(pilotA, "project", project);
    expect(result).toEqual({ deleted: true, spaceType: "project", spaceId: project });
    expect(await countOwned(project, [prep])).toEqual([]);
    const snapshotRows = await sql<{ amount: string; project_id: string }[]>`
      SELECT amount::text AS amount, project_id FROM provider_admin_usage_snapshots WHERE id = ${snapshot}::uuid
    `;
    expect(snapshotRows[0]?.project_id).toBe(project);
    expect(snapshotRows[0]?.amount).toBe("9.5000000000");
    const siblingUsage = await sql<{ cost: string; tokens: number }[]>`
      SELECT estimated_cost_usd::text AS cost, input_tokens AS tokens
      FROM provider_usage_observations WHERE idempotency_key = ${id("usage_sibling")}
    `;
    expect(siblingUsage[0]).toMatchObject({ cost: "4.5000000000", tokens: "30" });
    const shared = await sql<{ repos: number; links: number; auth: number }[]>`
      SELECT
        (SELECT count(*)::int FROM authorized_repositories WHERE id = ${repo}) AS repos,
        (SELECT count(*)::int FROM project_git_links WHERE project_id = ${sibling}) AS links,
        (SELECT count(*)::int FROM integration_authorizations WHERE id = ${authorization}) AS auth
    `;
    expect(shared[0]).toEqual({ repos: 1, links: 1, auth: 1 });
    const others = await sql<{ projects: number; pilots: number; prefs: number; org: number }[]>`
      SELECT
        (SELECT count(*)::int FROM projects WHERE id IN (${sibling}, ${other})) AS projects,
        (SELECT count(*)::int FROM pilots WHERE id IN (${pilotA}, ${pilotB})) AS pilots,
        (SELECT count(*)::int FROM pilot_portfolio_preferences WHERE owner_pilot_id = ${pilotA}) AS prefs,
        (SELECT count(*)::int FROM pilot_space_organization WHERE owner_pilot_id = ${pilotB} AND space_id = ${other}) AS org
    `;
    expect(others[0]).toEqual({ projects: 2, pilots: 2, prefs: 1, org: 1 });
    const ownOrg = await sql<{ n: number }[]>`
      SELECT count(*)::int AS n FROM pilot_space_organization WHERE space_id = ${project}
    `;
    expect(ownOrg[0]?.n).toBe(0);
    await expect(sql`
      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
      VALUES (${id("orphan")}, ${prep}, ${project}, ${pilotA})
    `).rejects.toThrow();
    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("deletes an autonomous preparation and frees a project name", async () => {
    await sql`
      INSERT INTO conversations (id, preparation_id, owner_pilot_id)
      VALUES (${id("free_conv")}, ${prepFree}, ${pilotA})
    `;
    await sql`
      INSERT INTO messages (id, conversation_id, role, content, status, ordinal)
      VALUES (${id("free_msg")}, ${id("free_conv")}, 'user', 'libre', 'COMPLETE', 1)
    `;
    await deleteOwnedSpace(pilotA, "preparation", prepFree);
    expect(await countOwned("__none__", [prepFree])).toEqual([]);
    const opened = await openOrCreatePreparation(pilotA);
    const name = `m6-space-reuse-${stamp}`;
    await updatePreview(pilotA, opened.id, name, "reprise");
    const firstRevision = await sql<{ creation_revision: number }[]>`
      SELECT creation_revision FROM preparations WHERE id = ${opened.id}
    `;
    const first = await createProjectCommand({
      pilotId: pilotA,
      preparationId: opened.id,
      expectedCreationRevision: firstRevision[0]!.creation_revision,
      projectName: name,
      previewSummary: "reprise",
      idempotencyKey: id("reuse_1"),
    });
    if (first.status !== "CREATED") throw new Error(first.status);
    await deleteOwnedSpace(pilotA, "project", first.projectId);
    const againPrep = await openOrCreatePreparation(pilotA);
    await updatePreview(pilotA, againPrep.id, name, "reprise");
    const secondRevision = await sql<{ creation_revision: number }[]>`
      SELECT creation_revision FROM preparations WHERE id = ${againPrep.id}
    `;
    const second = await createProjectCommand({
      pilotId: pilotA,
      preparationId: againPrep.id,
      expectedCreationRevision: secondRevision[0]!.creation_revision,
      projectName: name,
      previewSummary: "reprise",
      idempotencyKey: id("reuse_2"),
    });
    if (second.status !== "CREATED") throw new Error(second.status);
    await deleteOwnedSpace(pilotA, "project", second.projectId);
  });

  it("refuses a preparation observation that belongs to another project", async () => {
    const sharedPrep = id("prep_shared");
    await sql`
      INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${sharedPrep}, ${pilotA}, 'OPEN')
    `;
    await sql`
      INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${sharedPrep}, ${sibling})
    `;
    await sql`
      INSERT INTO provider_usage_observations (
        id, owner_pilot_id, project_id, preparation_id, tariff_version, cost_coverage, status, granularity, idempotency_key
      ) VALUES (
        ${crypto.randomUUID()}::uuid, ${pilotA}, ${other}, ${sharedPrep}, 'v-test', 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("ambiguous")}
      )
    `;
    await expect(deleteOwnedSpace(pilotA, "project", sibling)).rejects.toMatchObject({ code: "CONFLICT" });
    const kept = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${sibling}`;
    expect(kept[0]?.n).toBe(1);
    await sql`DELETE FROM provider_usage_observations WHERE idempotency_key = ${id("ambiguous")}`;
    await sql`DELETE FROM preparation_project_links WHERE preparation_id = ${sharedPrep}`;
    await sql`DELETE FROM preparations WHERE id = ${sharedPrep}`;
  });

  it("serves the deletion over HTTP and closes the old routes", async () => {
    const httpPrep = id("prep_http");
    const httpProject = id("project_http");
    await sql`INSERT INTO preparations (id, owner_pilot_id, status, preview_name) VALUES (${httpPrep}, ${pilotA}, 'OPEN', 'http')`;
    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${httpProject}, ${pilotA}, ${`m6-space-http-${stamp}`})`;
    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${httpPrep}, ${httpProject})`;
    const unauthenticated = Object.assign(new Error("SESSION_INVALID"), { code: "SESSION_INVALID" });
    vi.mocked(requireStudioSession).mockRejectedValueOnce(unauthenticated);
    const denied = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(denied.status).toBe(401);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotA, sessionId: "m6", authMode: "dev" } as never);
    const missingConfirm = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: "{}" }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(missingConfirm.status).toBe(400);
    const badType = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "folder", id: httpProject }),
    });
    expect(badType.status).toBe(400);
    const missing = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: id("missing") }),
    });
    expect(missing.status).toBe(404);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotB, sessionId: "m6b", authMode: "dev" } as never);
    const foreign = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(foreign.status).toBe(404);
    vi.mocked(requireStudioSession).mockResolvedValue({ pilotId: pilotA, sessionId: "m6", authMode: "dev" } as never);
    const attached = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "preparation", id: httpPrep }),
    });
    expect(attached.status).toBe(409);
    expect(await attached.json()).toMatchObject({ message: expect.stringContaining("rattachée") });
    const removed = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(removed.status).toBe(200);
    expect(await removed.json()).toEqual({ deleted: true, spaceType: "project", spaceId: httpProject });
    const replay = await DELETE(new Request("http://127.0.0.1/delete", { method: "DELETE", body: JSON.stringify({ confirm: true }) }), {
      params: Promise.resolve({ type: "project", id: httpProject }),
    });
    expect(replay.status).toBe(404);
    expect((await GET_SPACE(new Request("http://127.0.0.1/space"), { params: Promise.resolve({ type: "project", id: httpProject }) })).status).toBe(404);
    expect((await GET_PROJECT(new Request("http://127.0.0.1/project"), { params: Promise.resolve({ projectId: httpProject }) })).status).toBe(404);
    expect((await GET_PREPARATION(new Request("http://127.0.0.1/prep"), { params: Promise.resolve({ preparationId: httpPrep }) })).status).toBe(404);
    const search = await GET_SEARCH(new Request("http://127.0.0.1/search?tab=decisions&q=m6"), {
      params: Promise.resolve({ projectId: httpProject }),
    });
    expect(search.status).toBe(404);
    const board = await GET_PORTFOLIO(new Request("http://127.0.0.1/portfolio?scope=all"));
    const body = await board.json() as { board?: { items?: Array<{ id: string }> } };
    expect(body.board?.items?.some((item) => item.id === httpProject || item.id === httpPrep)).toBe(false);
    const surviving = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${sibling}`;
    expect(surviving[0]?.n).toBe(1);
  });
});
```
## Diff utile des fichiers modifiés

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 287d4caa..a9dd21fd 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -4,7 +4,7 @@

 Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
 Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
-Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. Supprimer reste indisponible. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
+Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. La suppression reprend ce même cadre de confirmation. Le texte dit que les données de l'espace sont effacées définitivement. Une préparation rattachée ne se supprime pas seule : elle disparaît avec son projet. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
 La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.
 Le premier titre n'est enregistré que si la commande de tour existe, est terminée, appartient au même Pilote, à la même conversation et à la même préparation, et si le titre normalisé est celui attesté dans la qualification durable. Une suggestion absente, non textuelle ou trop longue est ignorée sans invalider le reste de la qualification. Le schéma de sortie Nora reste un objet Zod simple.
 Le dialogue compare le libellé demandé à l'accusé et à la relecture. Un refus ou un conflit le laisse ouvert, conserve la saisie et, après conflit, présente la valeur relue. Une confirmation ultérieure est une nouvelle intention. Confirmer le titre déjà affiché par Nora le place sous la source manuelle. Seule la dernière clé d'intention est mémorisée : un rejeu plus ancien ne réécrit pas un nom plus récent. Les courses de création et de renommage restent sous le verrou de nom déjà partagé. La page historique des préparations expose aussi le titre canonique ; les libellés d'aperçu ne sont pas remplacés. SAS06 n'est pas modifié : ses quatre repères et l'arrêt de l'animation en mouvement réduit étaient déjà en place.
@@ -35,7 +35,7 @@ Nœuds de cette finalisation : en-tête `1420:242`, barre `1420:285`, colonnes `
 La reprise et la synthèse du candidat précédent sont conservées.
 Le titre Mes espaces précède la barre. Les filtres inactifs n'ont plus de cadre. La recherche, le tri et les icônes de vue occupent la droite.
 Le bouton Nouveau projet reprend l'action primaire `#292d58` / `#656fe1`.
-Chaque ligne rend un monogramme, le nom, l'activité réelle et un menu. Le menu porte l'ouverture, le favori, monter, descendre, archiver, et laisse Renommer et Supprimer indisponibles.
+Chaque ligne rend un monogramme, le nom, l'activité réelle et un menu. Le menu porte l'ouverture, le renommage, le favori, monter, descendre, l'archivage et la suppression définitive.
 Les archives restent dans le rail. La recherche rapide est un champ sombre sous la marque.
 Un conflit 409 relu débloque une nouvelle intention sans exiger la valeur refusée. L'ordre et le favori se relisent par `GET /api/portfolio/spaces/{type}/{id}`, hors page. Une hausse de version seule ne prouve pas le déplacement.

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 407f0b36..fa934e50 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-SPACE-DELETION-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — suppression définitive d'un projet ou d'une préparation autonome
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
+- **commit**: `feat(studio-next): support permanent space deletion`
+- **schema_revision**: inchangé, `029`
+- **scope**: effacement transactionnel des données exclusivement propres à l'espace ; confirmation unique dans le portefeuille ; l'archivage personnel reste réversible
+- **classe**: NO RELEASE · compatible évolutive · LIVE NOT RUN · CI NOT RUN · push produit non inclus
+- **reserves**: F2 non mesuré ; une qualification déjà terminée ne bloque pas ; les réserves des mandats 1 à 5 sont transportées
+
 ## delivery_id: DELIV-2026-11-28-ML5-FINOPS-PROJECTION-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts
index 1b758535..83b8ce4a 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts
@@ -1,6 +1,7 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { parseSpaceType, readPersonalSpaceRecord } from "@/domains/identity/portfolio-organization";
+import { deleteOwnedSpace } from "@/domains/preparation/delete-owned-space";
 import { studioErrorResponse } from "@/lib/http-errors";

 export const dynamic = "force-dynamic";
@@ -19,3 +20,25 @@ export async function GET(
     return NextResponse.json(mapped.body, { status: mapped.status });
   }
 }
+
+export async function DELETE(
+  req: Request,
+  ctx: { params: Promise<{ type: string; id: string }> },
+) {
+  try {
+    const session = await requireStudioSession();
+    const { type, id } = await ctx.params;
+    const body = (await req.json().catch(() => ({}))) as { confirm?: boolean };
+    if (body.confirm !== true) {
+      return NextResponse.json(
+        { error: "INVALID_REQUEST", message: "La confirmation est requise." },
+        { status: 400, headers: { "cache-control": "private, no-store" } },
+      );
+    }
+    const result = await deleteOwnedSpace(session.pilotId, parseSpaceType(type), id);
+    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
+  } catch (error) {
+    const mapped = studioErrorResponse(error);
+    return NextResponse.json(mapped.body, { status: mapped.status });
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index 11dd31e6..8580ad29 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -19,7 +19,7 @@ export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "u
 export type PortfolioReread = "reviewed" | "failed" | "not-attempted";

 export type PortfolioIntention = {
-  kind: "favorite" | "archive" | "preference" | "order" | "rename";
+  kind: "favorite" | "archive" | "preference" | "order" | "rename" | "delete";
   intentionKey?: string;
   spaceType?: PersonalSpace["spaceType"];
   spaceId?: string;
@@ -75,6 +75,9 @@ export function classifyPortfolioResponse(
         ? "confirmed"
         : "unknown";
     }
+    if (kind === "delete") {
+      return body.deleted === true && typeof body.spaceType === "string" && typeof body.spaceId === "string" ? "confirmed" : "unknown";
+    }
   }
   return "unknown";
 }
@@ -161,6 +164,9 @@ export function correlatedAcknowledgement(
       && (body.revision === intention.knownVersion || body.revision === intention.knownVersion + 1)
       && acknowledgedNameMatches(intention, body.label, body.changed === true);
   }
+  if (intention.kind === "delete") {
+    return body.deleted === true && body.spaceType === intention.spaceType && body.spaceId === intention.spaceId;
+  }
   return false;
 }

@@ -201,6 +207,12 @@ export function reconcileOwnerEffect(input: {
   }
   const primary = records[0];
   if (!primary) return "unproven";
+  if (intention.kind === "delete") {
+    if (outcome !== "confirmed" || !correlatedAcknowledgement(intention, acknowledgement)) return "current";
+    if (primary !== "absent") return "current";
+    const stillShown = board.items.some((entry) => entry.spaceType === intention.spaceType && entry.id === intention.spaceId);
+    return stillShown ? "current" : "confirmed";
+  }
   if (primary === "absent") return "absent";
   if (!shownAgrees(board, primary)) return "unproven";
   if (!primary.eligible) return "current";
@@ -339,6 +351,7 @@ export function PersonalPortfolio() {
   const acknowledgementRef = useRef<Record<string, unknown> | null>(null);
   const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
   const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
+  const [confirmDelete, setConfirmDelete] = useState<PersonalSpace | null>(null);
   const [renameTarget, setRenameTarget] = useState<PersonalSpace | null>(null);
   const [renameValue, setRenameValue] = useState("");
   const [renameNotice, setRenameNotice] = useState("");
@@ -347,7 +360,7 @@ export function PersonalPortfolio() {
   useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

   useEffect(() => {
-    const open = Boolean(confirm || confirmRestore || renameTarget);
+    const open = Boolean(confirm || confirmRestore || confirmDelete || renameTarget);
     if (!open) return;
     const root = dialogRef.current;
     const previous = menuTrigger.current ?? (document.activeElement as HTMLElement | null);
@@ -361,6 +374,7 @@ export function PersonalPortfolio() {
         if (!blocked.current) {
           setConfirm(null);
           setConfirmRestore(null);
+          setConfirmDelete(null);
           setRenameTarget(null);
         }
         return;
@@ -383,7 +397,7 @@ export function PersonalPortfolio() {
       document.removeEventListener("keydown", onKey);
       previous?.focus();
     };
-  }, [confirm, confirmRestore, renameTarget]);
+  }, [confirm, confirmRestore, confirmDelete, renameTarget]);

   useEffect(() => {
     if (!menu) return;
@@ -497,7 +511,7 @@ export function PersonalPortfolio() {
       return;
     }
     if (outcome === "confirmed" && effect === "confirmed") {
-      setNotice(settledKind === "order" ? "Ordre enregistré." : settledKind === "rename" ? "Nom enregistré." : "");
+      setNotice(settledKind === "order" ? "Ordre enregistré." : settledKind === "rename" ? "Nom enregistré." : settledKind === "delete" ? "Espace supprimé." : "");
       return;
     }
     if (outcome === "confirmed") {
@@ -633,6 +647,7 @@ export function PersonalPortfolio() {
       setPending("");
       setConfirm(null);
       setConfirmRestore(null);
+      setConfirmDelete(null);
       if (!retainRename) {
         setRenameTarget(null);
         setRenameNotice("");
@@ -821,7 +836,7 @@ export function PersonalPortfolio() {
             <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) - 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Monter</button>
             <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) + 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Descendre</button>
             <button type="button" role="menuitem" disabled={locked} onClick={() => { if (scope === "archive") setConfirmRestore(space); else setConfirm(space); }}><Mark name="archive" />{scope === "archive" ? "Restaurer" : "Archiver"}</button>
-            <button type="button" role="menuitem" disabled title="La suppression n'est pas disponible."><Mark name="trash" />Supprimer</button>
+            <button type="button" role="menuitem" disabled={locked} data-testid="portfolio-delete-action" onClick={() => { setNotice(""); setConfirmDelete(space); setMenu(null); }}><Mark name="trash" />Supprimer</button>
           </div>
         ) : null}
       </article>
@@ -996,6 +1011,23 @@ export function PersonalPortfolio() {
           </div>
         </div>
       ) : null}
+      {confirmDelete ? (
+        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirmDelete(null); }}>
+          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la suppression" data-testid="portfolio-delete-dialog" onClick={(event) => event.stopPropagation()}>
+            <h2>Supprimer {confirmDelete.label} ?</h2>
+            <p>
+              {confirmDelete.spaceType === "project"
+                ? "Ce projet et toutes ses données seront supprimés définitivement. Cette action est irréversible."
+                : "Cette préparation et toutes ses données seront supprimées définitivement. Cette action est irréversible."}
+            </p>
+            {notice ? <p role="alert" data-testid="portfolio-delete-message">{notice}</p> : null}
+            <div className="personal-portfolio-modal-actions">
+              <button type="button" onClick={() => { if (!locked) setConfirmDelete(null); }}>Annuler</button>
+              <button type="button" className="personal-portfolio-primary" disabled={locked} data-testid="portfolio-delete-confirm" onClick={() => void mutate(`/api/portfolio/spaces/${confirmDelete.spaceType}/${confirmDelete.id}`, "DELETE", { confirm: true }, { kind: "delete", spaceType: confirmDelete.spaceType, spaceId: confirmDelete.id, knownVersion: confirmDelete.rowVersion })}>Supprimer définitivement</button>
+            </div>
+          </div>
+        </div>
+      ) : null}
       {confirmRestore ? (
         <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirmRestore(null); }}>
           <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()}>
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index dd3e1911..21afc0a7 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -176,5 +176,33 @@ describe("portfolio organization rules", () => {
       records: [renamed],
       board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
     })).toBe("current");
+    const deletion: PortfolioIntention = { kind: "delete", spaceType: "project", spaceId: "prj_1", knownVersion: 4 };
+    const deletedAck = { deleted: true, spaceType: "project", spaceId: "prj_1" };
+    expect(classifyPortfolioResponse(200, deletedAck, "delete")).toBe("confirmed");
+    expect(classifyPortfolioResponse(200, { ok: true }, "delete")).toBe("unknown");
+    expect(classifyPortfolioResponse(404, { error: "NOT_FOUND" }, "delete")).toBe("refused");
+    expect(correlatedAcknowledgement(deletion, deletedAck)).toBe(true);
+    expect(correlatedAcknowledgement(deletion, { deleted: true, spaceType: "preparation", spaceId: "prj_1" })).toBe(false);
+    expect(reconcileOwnerEffect({
+      intention: deletion,
+      outcome: "confirmed",
+      acknowledgement: deletedAck,
+      records: ["absent"],
+      board: { ...board, items: [] },
+    })).toBe("confirmed");
+    expect(reconcileOwnerEffect({
+      intention: deletion,
+      outcome: "confirmed",
+      acknowledgement: deletedAck,
+      records: ["absent"],
+      board,
+    })).toBe("current");
+    expect(reconcileOwnerEffect({
+      intention: deletion,
+      outcome: "unknown",
+      acknowledgement: null,
+      records: ["absent"],
+      board: { ...board, items: [] },
+    })).toBe("current");
   });
 });
```
## Preuves

Base isolée `sfia_next_e2e` sur `127.0.0.1:5433`. Vitest réécrit `DATABASE_URL` vers cette base. Le test refuse de démarrer si le port n'est pas 5433. Aucune suppression sur `sfia_next_dev` ni sur `sfia_next_recette_ml4`.

Exécution du 2026-11-28 19:18:49, après le code final et avant le commit :

- `tests/integration/space-deletion.pg.test.ts` : 8 tests passés
- `tests/unit/portfolio-organization.test.ts` : 4 tests passés

Le graphe réel inséré pour le projet cible comprend la préparation liée, la commande de création, la conversation, le message, un tour terminé, un événement Nora, un document et sa révision, le sujet, l'acquis, le point ouvert et leurs événements, la décision, la trajectoire, le pilotage, un cycle ACTIVE, une qualification terminée, la méthode, une restriction levée, une commande appliquée et son effet, une tentative terminée, un fait Git, un contrat, un handoff, une qualification de réalisation, un travail terminé et son checkpoint, une observation propre, une observation du projet frère, un chunk d'embedding lorsque la table existe, deux liens vers le même dépôt autorisé, une référence de publication, le favori et l'archive personnels, la préférence de portefeuille, et un snapshot administrateur dont le texte `project_id` est égal à l'identifiant Studio.

Résultats discriminants :

- préparation rattachée : conflit `Cette préparation est rattachée à un projet. Supprimez le projet pour effacer l'ensemble.`
- autre Pilote : `NOT_FOUND`, le projet reste
- restriction active : `Une restriction active empêche cette suppression.`, le projet reste
- interruption après les suppressions et avant le retour : le projet, le message et la décision sont toujours présents ; aucun succès n'est retourné
- un détenteur de `FOR UPDATE` insère un tour `RUNNING` avant de relâcher : la suppression répond `Un échange Nora est encore en cours.`
- suppression réussie : `{ deleted: true, spaceType, spaceId }`
- le parcours des colonnes `project_id` et `preparation_id`, en excluant `provider_admin_usage_snapshots`, ne retrouve plus la cible
- le snapshot administrateur conserve le montant `9.5000000000` et le texte d'identifiant
- l'observation du frère conserve le coût `4.5000000000` et `input_tokens` `"30"`
- le dépôt partagé, son lien sur l'autre projet et son autorisation restent
- l'autre projet, les deux Pilotes, les préférences et l'organisation de l'autre Pilote restent
- l'organisation du propriétaire pour la cible disparaît
- une insertion de conversation après suppression échoue
- le rejeu du même identifiant est `NOT_FOUND` et ne recrée rien
- après suppression de la préparation autonome, `createProjectCommand` réutilise le même nom
- une observation dont la préparation est la cible et le projet est un autre projet refuse toute la suppression ; le frère reste
- HTTP : 401 sans session, 400 sans `confirm`, 400 type invalide, 404 cible absente, 404 autre Pilote, 409 préparation rattachée, 200 suppression, 404 rejeu
- après suppression, les routes projet, préparation, espace et recherche de journal répondent 404 ; le portefeuille ne liste plus les identifiants ; le projet frère reste au compte 1
- le source du service ne contient pas `execution`, `integrations`, `openai` ni `fetch`

TypeScript : `tsc --noEmit` produit 16 diagnostics, tous dans des tests historiques déjà connus. Aucun diagnostic dans `delete-owned-space.ts`, `space-deletion.pg.test.ts` ou `PersonalPortfolio.tsx`.

Build de production : `npm run build` terminé avec le code de sortie 0. Les avertissements lint affichés sont historiques et hors du delta.

## Parcours navigateur

Serveur isolé Turbopack `http://127.0.0.1:3101`, `STUDIO_E2E=1`, base `sfia_next_e2e`, puis arrêté. Le serveur DEV de production n'a pas servi ces suppressions.

1. La confirmation s'ouvre avec le nom réel et la phrase contractuelle.
2. Annuler laisse la préparation en place.
3. Confirmer la préparation retire la ligne. Le compteur des préparations passe de 34 à 33. Le bouton de confirmation est désactivé pendant l'opération. Aucun retrait optimiste.
4. Confirmer le projet favori retire la ligne, le favori, le lien du rail et la carte de reprise. Les compteurs passent de 05 à 04 projets et de 02 à 01 favori. La reprise revient à l'espace historique restant.
5. Le projet archivé disparaît de la vue Archives.
6. Un tour `RUNNING` inséré directement affiche `Un échange Nora est encore en cours.` et la ligne reste. Une qualification seulement annoncée par la réponse de création n'est pas utilisée comme preuve de blocage : le traitement qui suit peut la terminer avant le clic. Le blocage prouvé est le tour durable.
7. Les compteurs, favoris, rail et reprise sont relus après l'accusé.
8. `GET /projects/proj_m6_browser_projet` affiche `Projet introuvable` et `Aucune donnée projet n'est affichée`. Les API projet, préparation et espace de la préparation supprimée répondent 404. La page de préparation d'un identifiant absent affiche encore le cadre générique de première intention, sans le titre supprimé et sans ses données. L'envoi y est désactivé. Ce cadre préexiste ; il n'expose pas le contexte effacé.
9. Le conflit est affiché dans la confirmation et ne produit aucun effet. Un 404 est classé `refused`. Un résultat `unknown` reste `current` dans le réconciliateur, même si le tableau ne contient plus la ligne : le succès n'est annoncé qu'avec l'accusé corrélé, la relecture absente et l'absence au tableau. Le rejeu ne recrée pas la cible.
10. Le dialogue d'archivage conserve le texte d'accessibilité et de non-interruption. La restauration de l'espace isolé l'a retiré des archives et a ramené le compteur courant à 03. Cet espace de test a ensuite été effacé par la même opération, sur la base E2E seulement.

F2 : NOT PROVEN. La composition reprend le dialogue existant. Aucune mesure appariée avec les nœuds Figma n'a été faite. Les phrases imposées par le contrat UX v0.4 ne sont pas traitées comme des écarts accidentels.

## Identité DEV

- branche : `sfia/next-ml5-integrated-delivery-20261123`
- HEAD initial : `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
- HEAD final : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- parent : `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
- tree : `3c3b70a5488db51b6a9494a94c04a8831ab4e25f`
- BUILD_ID : `c3Tia81F76vSnS3CmYSj7`
- processus : `next-server` PID `68176`, parent `68139`
- port : `3100`
- lane : DEV
- base : `sfia_next_dev`
- PostgreSQL : `127.0.0.1:5433`
- schéma : `029`, inchangé
- build d'entrée conservé : `/tmp/sfia-next-dev-build-8acc05b7`, BUILD_ID `yt7pArlgBRNZApeOhgE7t`
- smoke non destructif : `/login` 200, `/portfolio` 200, `/settings/consumption` 200
- suppression non authentifiée d'un identifiant inexistant : 401 `SESSION_INVALID`
- aucun projet DEV supprimé pendant le smoke
- RECETTE : PID `58965`, port `3200`, non arrêtée et non reconstruite
- push produit : non
- CI distante : non exécutée
- PR : aucune
- URL : `http://127.0.0.1:3100/portfolio`
- classe : NO RELEASE. STABLE NOT AVAILABLE. Version officielle NOT AVAILABLE. NOT ADOPTED.

## PF-A06 / PF-A07 / PF-A08

PF-A06 prouvé sur PostgreSQL isolé et HTTP : confirmation, rejet de la préparation rattachée, refus propriétaire, opération active, restriction active, atomicité, absence d'orphelin sur les colonnes d'appartenance, préservation des autres espaces et du dépôt partagé, rollback, admission concurrente, rejeu sans recréation, routes anciennes en 404, absence d'appel externe dans le service. Le dépôt GitHub n'a pas été appelé pour le prouver.

PF-A07 prouvé : 401, 400, 404, 409, pending, message de conflit, succès seulement après accusé et relecture. Non produit : 403, parce qu'un espace d'un autre Pilote répond 404 ; 503. La non-régression complète du sas et du travail Nora n'a pas été rejouée.

PF-A08 non clos : F2 NOT PROVEN. Le clavier reprend le piège de focus et Échap du dialogue existant, sans mesure séparée. Le responsive n'a pas été remesuré. Les 34 états de recette UX ne sont pas repris dans ce mandat.

## Réserves

- F2 NOT PROVEN.
- Le cadre générique d'une préparation introuvable préexiste. Les API du contexte supprimé répondent 404 et le titre effacé n'est pas affiché.
- 403 et 503 n'ont pas été produits.
- L'accusé perdu a été prouvé dans le réconciliateur unitaire, pas par une coupure réseau dans le navigateur.
- Les réserves des mandats 1 à 5 sont transportées, non corrigées.
- Le délai de grâce de 500 ms et `dropProbeClaim` restent le point ouvert du mandat 5.
- FIN-REC-01 et FIN-REC-02 restent ouverts.
- 17 MP ouverts et 17 contrôles RECETTE préexistants restent ouverts.
- L6 DEFERRED / NOT READY. Capacité 2 OUT. T08 DEFERRED.
- R5 IN PROGRESS. ML5 OPEN. L7 OPEN. Livraison 1 NOT ACCEPTED. Gate C OPEN. R6 NOT STARTED.
- NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.
- Le rollback applicatif ne restaure pas une donnée déjà supprimée. La copie du build précédent n'est pas une récupération.

Ces réserves ne couvrent pas une suppression partielle, un orphelin, un effet externe ou une autorité client. Ces quatre points sont prouvés dans le sens inverse.

## Verdict Cursor

READY WITH RESERVES

La réception n'est pas prononcée. La qualification intégrée et la promotion RECETTE ne sont pas engagées.
