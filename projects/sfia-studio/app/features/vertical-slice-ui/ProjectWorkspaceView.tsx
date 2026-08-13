import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./project-workspace.module.css";

/** F1 server-side project load — lazy so UI tests keep the type-only boundary. */
export async function loadProjectRuntimeForAssistant(projectId: string) {
  const { getProjectRuntimeAction } = await import(
    "@/lib/vertical-slice-runtime/actions"
  );
  return getProjectRuntimeAction(projectId);
}


type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;
type GetProjectFailure = Extract<GetProjectResult, { ok: false }>;

function ProjectProjection({ result }: { result: GetProjectSuccess }) {
  return (
    <Card variant="flush" className={styles.workspaceCard}>
      <div data-testid="project-workspace-projection">
      <div className={styles.workspaceHeader}>
        <div>
          <h2>Espace de travail projet</h2>
          <p className={styles.hint}>
            Vue de contexte locale — projection réelle du core V1 / Product
            SQLite (Project/LPS/Cycle M2), sans dashboard et sans agent.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
        </div>
      </div>

      <section className={styles.section} aria-labelledby="workspace-project">
        <h3 id="workspace-project">Project</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Project ID</dt>
            <dd className={styles.valueCode}>{result.project.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Nom</dt>
            <dd>{result.project.name}</dd>
          </div>
          {result.project.shortReference ? (
            <div className={styles.definitionItem}>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div className={styles.definitionItem}>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Objectif</dt>
            <dd>{result.project.objective}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Contexte résumé</dt>
            <dd>{result.project.contextSummary}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Source</dt>
            <dd>{result.project.source}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Fixture</dt>
            <dd>{String(result.project.fixture)}</dd>
          </div>
        </dl>
        {result.project.constraints.length > 0 ? (
          <ul className={styles.constraintList} aria-label="Contraintes">
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Aucune contrainte principale.</p>
        )}
      </section>

      <section className={styles.section} aria-labelledby="workspace-lps">
        <h3 id="workspace-lps">Doctrine et Living Project State</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Doctrine</dt>
            <dd>{result.doctrine.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Version / statut</dt>
            <dd>
              {result.doctrine.version} · {result.doctrine.status}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Digest</dt>
            <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS</dt>
            <dd className={styles.valueCode}>{result.livingState.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS version / date</dt>
            <dd>
              v{result.livingState.version} · {result.livingState.createdAt}
            </dd>
          </div>
          {result.livingState.activeCycleInstanceId ? (
            <div className={styles.definitionItem}>
              <dt>CycleInstance actif (lien LPS)</dt>
              <dd
                className={styles.valueCode}
                data-testid="workspace-active-cycle"
              >
                {result.livingState.activeCycleInstanceId}
              </dd>
            </div>
          ) : null}
          {result.livingState.ckcResolutionRef ? (
            <div className={styles.definitionItem}>
              <dt>CKC resolution ref</dt>
              <dd
                className={styles.valueCode}
                data-testid="workspace-ckc-ref"
              >
                {result.livingState.ckcResolutionRef}
              </dd>
            </div>
          ) : null}
        </dl>
      </section>

      <section className={styles.truthBox} aria-labelledby="workspace-truth">
        <h3 id="workspace-truth">Vérité runtime</h3>
        <div className={styles.pillGroup}>
          <StatusPill tone="orangeFlush">
            {result.disclosures.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">{result.disclosures.persistence}</StatusPill>
          <StatusPill tone="muted">
            AGENT {result.disclosures.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
        </div>
        <p className={styles.hint}>
          IAM {result.disclosures.iam} · PRODUCT PERSISTENCE{" "}
          {result.disclosures.productPersistence} · DELIVERY{" "}
          {result.disclosures.delivery} · CUTOVER {result.disclosures.cutover} ·
          RUN READY = {String(result.readiness.runReady)} · PRODUCT READY ={" "}
          {String(result.readiness.productReady)}
        </p>
      </section>

      <div className={styles.actions}>
        <p
          className={styles.primaryAssistantHint}
          data-testid="workspace-primary-assistant-hint"
        >
          Parcours principal : Assistant Nora (panneau de droite) — analyse /
          conversation / lecture seule. OPS1 n&apos;est pas requis.
        </p>
        <div className={styles.secondaryActions}>
          <CtaButton
            href={`/ops1/nouvelle-demande?projectId=${encodeURIComponent(result.project.projectId)}`}
            variant="secondary"
            data-testid="workspace-continue-pilotage"
            title="Escape hatch temporaire vers OPS1 (non lié au Project)"
            aria-label="Continuer le pilotage via OPS1 (temporaire)"
          >
            Continuer le pilotage (OPS1 · temporaire)
          </CtaButton>
          <CtaButton
            href="/studio/projects/new"
            variant="secondary"
            data-testid="workspace-create-another-project"
          >
            Créer un autre projet
          </CtaButton>
        </div>
      </div>
      </div>
    </Card>
  );
}

function MissingProject({
  projectId,
  result,
}: {
  projectId: string;
  result: GetProjectFailure;
}) {
  return (
    <Card variant="flush" className={styles.missingCard}>
      <div data-testid="project-workspace-missing">
      <div>
        <h2>Projet introuvable dans ce processus</h2>
        <p className={styles.hint}>
          L’identifiant demandé n’est pas disponible dans le Product SQLite
          ouvert par ce processus. Vérifiez l’identifiant ou créez un projet.
          Conversation/Proposal F2 restent process-local ; Project/LPS/Cycle
          durables ne dépendent pas de globalThis.
        </p>
      </div>
      <dl className={styles.definitionGrid}>
        <div className={styles.definitionItem}>
          <dt>Project ID demandé</dt>
          <dd className={styles.valueCode}>{projectId}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Code</dt>
          <dd>{result.error.code}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Message</dt>
          <dd>{result.error.message}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Runtime</dt>
          <dd>
            {result.disclosures.runtimeMode} · {result.disclosures.persistence}
          </dd>
        </div>
      </dl>
      <div className={styles.actions}>
        <CtaButton href="/studio/projects/new" variant="secondary">
          Retour à la création
        </CtaButton>
      </div>
      </div>
    </Card>
  );
}

export function ProjectWorkspaceView({
  projectId,
  result,
}: {
  projectId: string;
  result: GetProjectResult;
}) {
  if (!result.ok) {
    return <MissingProject projectId={projectId} result={result} />;
  }
  return <ProjectProjection result={result} />;
}
