import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
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
          <h2>État du projet</h2>
          <p className={styles.hint}>
            Vue de contexte — la conversation reste le parcours principal.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">Projet</StatusPill>
          <StatusPill tone="blueFlush">État disponible</StatusPill>
        </div>
      </div>

      <section className={styles.section} aria-labelledby="workspace-project">
        <h3 id="workspace-project">Projet</h3>
        <dl className={styles.definitionGrid}>
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

      <details className={styles.diagnostics} data-testid="workspace-diagnostics">
        <summary>Diagnostics techniques</summary>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Identifiant</dt>
            <dd className={styles.valueCode}>{result.project.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Doctrine</dt>
            <dd>
              {result.doctrine.id} · {result.doctrine.version}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Digest</dt>
            <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>État vivant</dt>
            <dd className={styles.valueCode}>{result.livingState.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Version / date</dt>
            <dd>
              v{result.livingState.version} · {result.livingState.createdAt}
            </dd>
          </div>
          {result.livingState.activeCycleInstanceId ? (
            <div className={styles.definitionItem}>
              <dt>Cycle lié</dt>
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
              <dt>Réf. résolution</dt>
              <dd
                className={styles.valueCode}
                data-testid="workspace-ckc-ref"
              >
                {result.livingState.ckcResolutionRef}
              </dd>
            </div>
          ) : null}
        </dl>
      </details>

      <div className={styles.actions}>
        <p
          className={styles.primaryAssistantHint}
          data-testid="workspace-primary-assistant-hint"
        >
          Parcours principal : conversation de qualification.
        </p>
        <p
          className={styles.hint}
          data-testid="workspace-w1-durability-disclosure"
        >
          {w1RestartHonestyMessage()}
        </p>
        <div className={styles.secondaryActions}>
          <CtaButton
            href="/studio"
            variant="secondary"
            data-testid="workspace-back-to-studio"
          >
            Retour aux projets
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
        <h2>Projet introuvable</h2>
        <p className={styles.hint}>
          L’identifiant demandé n’est pas disponible dans ce processus.
          Vérifiez l’identifiant ou créez un projet. Conversation et proposition
          restent process-local.
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
        <CtaButton href="/studio" variant="secondary">
          Retour aux projets
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
