import type { ReactNode } from "react";
import { useMemo } from "react";
import type { DemoRequest, DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getRequestById } from "../../data/requestsRepository";
import { RequestBadges } from "./RequestBadges";
import { RequestOperationalPanel } from "./RequestOperationalPanel";
import { RequestWorkflowPipeline } from "./RequestWorkflowPipeline";
import {
  getAssignmentDisplay,
  getCriticalityLabel,
  getPriorityLabel,
  getRequesterDisplay,
} from "./requestIndicators";
import "./RequestDetail.css";

interface RequestDetailProps {
  request?: DemoRequest;
  requestId: string;
  dataVersion?: number;
  variant?: "default" | "premium";
  workflowEvents?: DemoWorkflowEvent[];
  onBackToRequests?: () => void;
  onViewFullHistory?: () => void;
}

interface DetailFieldProps {
  label: string;
  value: ReactNode;
  wide?: boolean;
}

function DetailField({ label, value, wide = false }: DetailFieldProps) {
  return (
    <div
      className={
        wide
          ? "request-detail__field request-detail__field--wide"
          : "request-detail__field"
      }
    >
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

interface DetailSectionProps {
  title: string;
  sectionId: string;
  children: ReactNode;
  className?: string;
}

function DetailSection({
  title,
  sectionId,
  children,
  className,
}: DetailSectionProps) {
  return (
    <section
      className={className ?? "request-detail__section"}
      aria-labelledby={sectionId}
    >
      <h3 className="request-detail__section-title" id={sectionId}>
        {title}
      </h3>
      <dl className="request-detail__fields">{children}</dl>
    </section>
  );
}

export function RequestDetail({
  request: requestProp,
  requestId,
  dataVersion = 0,
  variant = "default",
  workflowEvents = [],
  onBackToRequests,
  onViewFullHistory,
}: RequestDetailProps) {
  const request = useMemo(
    () => requestProp ?? getRequestById(requestId),
    [requestProp, requestId, dataVersion],
  );

  if (!request) {
    return (
      <section className="request-detail" data-testid="request-detail">
        <p className="request-detail__missing">
          Demande introuvable : {requestId}
        </p>
      </section>
    );
  }

  const requesterDisplay = getRequesterDisplay(request);
  const assignmentDisplay = getAssignmentDisplay(request);
  const statusLabel = getRequestStatusLabel(request.status);
  const isPremium = variant === "premium";

  const summarySection = (
    <DetailSection
      title={isPremium ? "Vue d'ensemble" : "Résumé"}
      sectionId="request-detail-summary"
      className={
        isPremium
          ? "request-detail__section request-detail__section--card"
          : "request-detail__section"
      }
    >
      {!isPremium ? (
        <DetailField label="Client" value={request.customerLabel} />
      ) : null}
      <DetailField label="Demandeur" value={requesterDisplay} />
      {request.requesterTeam ? (
        <DetailField label="Équipe" value={request.requesterTeam} />
      ) : null}
      <DetailField label="Statut" value={statusLabel} />
      {assignmentDisplay ? (
        <DetailField label="Affectation" value={assignmentDisplay} />
      ) : null}
    </DetailSection>
  );

  const siteSection = (
    <DetailSection
      title="Site & équipement"
      sectionId="request-detail-site"
      className={
        isPremium
          ? "request-detail__section request-detail__section--card"
          : "request-detail__section"
      }
    >
      <DetailField label="Site" value={request.siteLabel} />
      {request.siteDetailLabel ? (
        <DetailField label="Localisation" value={request.siteDetailLabel} />
      ) : null}
      {request.equipmentLabel ? (
        <DetailField label="Équipement" value={request.equipmentLabel} />
      ) : null}
      {request.categoryLabel ? (
        <DetailField label="Catégorie" value={request.categoryLabel} />
      ) : null}
    </DetailSection>
  );

  const prioritizationSection = (
    <DetailSection
      title="Priorisation"
      sectionId="request-detail-prioritization"
      className={
        isPremium
          ? "request-detail__section request-detail__section--card"
          : "request-detail__section"
      }
    >
      <DetailField
        label="Priorité"
        value={getPriorityLabel(request.priority)}
      />
      <DetailField
        label="Criticité"
        value={getCriticalityLabel(request.criticality)}
      />
      {request.impactLabel ? (
        <DetailField label="Impact" value={request.impactLabel} />
      ) : null}
      {request.businessImpact ? (
        <DetailField label="Impact métier" value={request.businessImpact} />
      ) : null}
    </DetailSection>
  );

  const detailsSection = (
    <DetailSection
      title="Détails"
      sectionId="request-detail-details"
      className={
        isPremium
          ? "request-detail__section request-detail__section--card"
          : "request-detail__section"
      }
    >
      {request.requestedDate ? (
        <DetailField label="Date de demande" value={request.requestedDate} />
      ) : null}
      {request.channelLabel ? (
        <DetailField label="Canal" value={request.channelLabel} />
      ) : null}
      {request.createdAtLabel ? (
        <DetailField label="Créée" value={request.createdAtLabel} />
      ) : null}
      {request.description ? (
        <DetailField label="Description" value={request.description} wide />
      ) : null}
      {request.qualificationSummary ? (
        <DetailField
          label="Qualification"
          value={request.qualificationSummary}
          wide
        />
      ) : null}
    </DetailSection>
  );

  if (!isPremium) {
    return (
      <section className="request-detail" data-testid="request-detail">
        <header className="request-detail__header">
          <h2 className="request-detail__title">{request.title}</h2>
          <p className="request-detail__reference">Référence {request.id}</p>
          <div className="request-detail__status-row">
            <span className="request-detail__status">{statusLabel}</span>
            <span className="request-detail__status-code">{request.status}</span>
          </div>
          <RequestBadges
            request={request}
            showChannel={false}
            showIndicators={false}
          />
          <p className="request-detail__notice">
            Contexte démonstration MVP — données simulées, sans authentification
            réelle.
          </p>
        </header>

        <DetailSection title="Résumé" sectionId="request-detail-summary">
          <DetailField label="Client" value={request.customerLabel} />
          <DetailField label="Demandeur" value={requesterDisplay} />
          {request.requesterTeam ? (
            <DetailField label="Équipe" value={request.requesterTeam} />
          ) : null}
          <DetailField label="Statut" value={statusLabel} />
          {assignmentDisplay ? (
            <DetailField label="Affectation" value={assignmentDisplay} />
          ) : null}
        </DetailSection>

        <DetailSection title="Site & équipement" sectionId="request-detail-site">
          <DetailField label="Site" value={request.siteLabel} />
          {request.siteDetailLabel ? (
            <DetailField label="Localisation" value={request.siteDetailLabel} />
          ) : null}
          {request.equipmentLabel ? (
            <DetailField label="Équipement" value={request.equipmentLabel} />
          ) : null}
          {request.categoryLabel ? (
            <DetailField label="Catégorie" value={request.categoryLabel} />
          ) : null}
        </DetailSection>

        <DetailSection
          title="Priorisation"
          sectionId="request-detail-prioritization"
        >
          <DetailField
            label="Priorité"
            value={getPriorityLabel(request.priority)}
          />
          <DetailField
            label="Criticité"
            value={getCriticalityLabel(request.criticality)}
          />
          {request.impactLabel ? (
            <DetailField label="Impact" value={request.impactLabel} />
          ) : null}
          {request.businessImpact ? (
            <DetailField label="Impact métier" value={request.businessImpact} />
          ) : null}
        </DetailSection>

        <DetailSection title="Détails" sectionId="request-detail-details">
          {request.requestedDate ? (
            <DetailField label="Date de demande" value={request.requestedDate} />
          ) : null}
          {request.channelLabel ? (
            <DetailField label="Canal" value={request.channelLabel} />
          ) : null}
          {request.createdAtLabel ? (
            <DetailField label="Créée" value={request.createdAtLabel} />
          ) : null}
          {request.description ? (
            <DetailField label="Description" value={request.description} wide />
          ) : null}
          {request.qualificationSummary ? (
            <DetailField
              label="Qualification"
              value={request.qualificationSummary}
              wide
            />
          ) : null}
        </DetailSection>
      </section>
    );
  }

  return (
    <section
      className="request-detail request-detail--premium"
      data-testid="request-detail"
    >
      <header className="request-detail__hero">
        <div className="request-detail__hero-main">
          {onBackToRequests ? (
            <span
              className="request-detail__back"
              role="link"
              tabIndex={0}
              onClick={onBackToRequests}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onBackToRequests();
                }
              }}
            >
              ← Retour aux demandes
            </span>
          ) : null}
          <p className="request-detail__hero-ref">Référence {request.id}</p>
          <h2 className="request-detail__title">{request.title}</h2>
          <div className="request-detail__hero-badges">
            <RequestBadges request={request} compact />
            <span className="request-detail__status-code">{request.status}</span>
          </div>
          <p className="request-detail__hero-client">{request.customerLabel}</p>
          <p className="request-detail__notice request-detail__notice--hero">
            Contexte démonstration MVP — données simulées, sans authentification
            réelle.
          </p>
        </div>
        <div className="request-detail__hero-actions">
          <span className="request-detail__ghost-action">Affecter</span>
          <span className="request-detail__primary-action">
            Action principale — voir panneau Actions
          </span>
        </div>
      </header>

      <RequestWorkflowPipeline request={request} />

      <div className="request-detail__layout">
        <div className="request-detail__main">
          {summarySection}
          {request.description ? (
            <section
              className="request-detail__section request-detail__section--card"
              aria-labelledby="request-detail-description"
            >
              <h3
                className="request-detail__section-title"
                id="request-detail-description"
              >
                Description demande
              </h3>
              <p className="request-detail__description-copy">
                {request.description}
              </p>
            </section>
          ) : null}
          {request.qualificationSummary ? (
            <section
              className="request-detail__section request-detail__section--card"
              aria-labelledby="request-detail-qualification"
            >
              <h3
                className="request-detail__section-title"
                id="request-detail-qualification"
              >
                Qualification
              </h3>
              <p className="request-detail__description-copy">
                {request.qualificationSummary}
              </p>
            </section>
          ) : null}
          {siteSection}
          {prioritizationSection}
          {detailsSection}
        </div>

        <RequestOperationalPanel
          request={request}
          events={workflowEvents}
          onViewFullHistory={onViewFullHistory}
        />
      </div>
    </section>
  );
}
