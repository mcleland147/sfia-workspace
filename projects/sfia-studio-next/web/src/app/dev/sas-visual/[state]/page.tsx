"use client";

/**
 * DEV-only Sas Nora visual harness — deterministic fixtures for Figma comparison.
 * Does not touch persistence, D2 services, or RECETTE.
 */

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { PreparationConversation } from "@/components/figma/PreparationConversation";
import { PreparationProposal } from "@/components/figma/PreparationProposal";
import {
  resolveSasPresentationStage,
  sasPresentationCopy,
} from "@/components/figma/sas-presentation";
import { parseSasVisualFixture } from "@/components/figma/sas-visual-fixtures";

export default function SasVisualHarnessPage() {
  const params = useParams<{ state: string }>();
  const fixture = useMemo(() => parseSasVisualFixture(params.state), [params.state]);
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(fixture?.previewName ?? "");
  const [draftSummary, setDraftSummary] = useState(fixture?.previewSummary ?? "");

  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
    return (
      <p className="muted" data-testid="sas-visual-forbidden">
        Harness visuel indisponible hors DEV.
      </p>
    );
  }

  if (!fixture) {
    return (
      <p className="muted" data-testid="sas-visual-unknown">
        État inconnu. Utilisez first_intention, clarification, proposal, base_sufficient ou resume.
      </p>
    );
  }

  const isResumed = fixture.stage === "resume";
  const presentation = sasPresentationCopy(
    resolveSasPresentationStage({
      isResumed,
      assessment: fixture.projection.suggestion?.assessment,
      messageCount: fixture.messages.length,
    }),
  );

  return (
    <div
      className="sas-page"
      data-testid="sas-page"
      data-sas-stage={presentation.stage}
      data-figma-frame={
        presentation.stage === "resume"
          ? "607:277"
          : presentation.stage === "base_sufficient"
            ? "607:203"
            : presentation.stage === "proposal"
              ? "607:131"
              : presentation.stage === "clarification"
                ? "607:62"
                : "607:3"
      }
      data-sas-visual-fixture={params.state}
    >
      <header className="sas-stage">
        <p className="sas-stage-kicker" data-testid="sas-stage-kicker">
          {presentation.kicker}
        </p>
        <h1 className="sas-stage-title" data-testid="sas-stage-title">
          {presentation.title}
        </h1>
        <p className="sas-stage-sub" data-testid="sas-stage-sub">
          {presentation.subtitle}
        </p>
      </header>
      <div className="sas-workspace" data-testid="sas-workspace">
        <PreparationConversation
          messages={fixture.messages}
          draft={draft}
          busy={false}
          noraActivity="idle"
          onDraftChange={setDraft}
          onSend={() => setDraft("")}
          showResumeBanner={isResumed}
        />
        <PreparationProposal
          projectId={null}
          previewName={fixture.previewName}
          previewSummary={fixture.previewSummary}
          creationRevision={1}
          messageCount={fixture.messages.length}
          openPoints={fixture.openPoints}
          projection={fixture.projection}
          projectionFreshness="current"
          presentation={presentation}
          busy={false}
          editing={editing}
          draftName={draftName}
          draftSummary={draftSummary}
          onDraftName={setDraftName}
          onDraftSummary={setDraftSummary}
          onStartConstitute={() => setEditing(true)}
          onAdoptLastNoraSummary={() => undefined}
          canAdoptLastNora={false}
          onSaveProposal={() => setEditing(false)}
          onCancelEdit={() => setEditing(false)}
          onCreateProject={() => undefined}
        />
      </div>
    </div>
  );
}
