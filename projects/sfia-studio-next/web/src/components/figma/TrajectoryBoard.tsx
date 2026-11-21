"use client";

import { useState } from "react";
import Link from "next/link";
import type { ForecastStep } from "@/domains/pilotage/forecast-builder";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import type { PilotageProjection } from "@/domains/pilotage/types";
import {
  CYCLE_OBJECTIVE_PENDING_LABEL,
  displayableCycleObjective,
} from "@/domains/pilotage/cycle-objective-display";

const CYCLE_LABELS: Record<string, string> = {
  CADRAGE: "Cadrage",
  CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
  UX_UI: "Conception UX",
  BACKLOG: "Backlog",
};

function labelCycle(type: string): string {
  return CYCLE_LABELS[type] ?? type.replace(/_/g, " ");
}

type DetailView =
  | { kind: "main" }
  | { kind: "bilan"; cycleId: string }
  | { kind: "future"; cycleType: string; rationale?: string | null }
  | { kind: "cki" };

/** Exposed for screenshot seeding / e2e when parcours banner is absent (proposition-only). */
function CkiShortcut(props: { onOpen: () => void }) {
  return (
    <button
      type="button"
      className="text-xs font-semibold text-[#7477ed] hover:underline"
      data-testid="trajectory-open-cki"
      onClick={props.onOpen}
    >
      Accès CKI et méthode
    </button>
  );
}

type TrajectoryKnowledge = {
  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
  openPoints: Array<{ id: string; statement: string; status: string }>;
};

/** Page 10 — active cycle: concentric ring + focal point (not a bullet). */
function CycleMarkerActive() {
  return (
    <span
      className="absolute"
      style={{ right: 14, top: 14, width: 33, height: 33 }}
      aria-hidden
      data-testid="trajectory-marker-active"
    >
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <circle cx="16.5" cy="16.5" r="15" stroke="#7477ed" strokeWidth="2" />
        <circle cx="16.5" cy="16.5" r="5.5" fill="#7477ed" />
      </svg>
    </span>
  );
}

/** Page 10 — envisaged step: empty ring. */
function CycleMarkerEnvisaged() {
  return (
    <span
      className="absolute"
      style={{ right: 14, top: 14, width: 32, height: 32 }}
      aria-hidden
      data-testid="trajectory-marker-envisaged"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14.5" stroke="#7787a4" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

/** Page 10 — closed cycle: green emblem + check. */
function CycleMarkerClosed() {
  return (
    <span
      className="absolute"
      style={{ right: 14, top: 14, width: 32, height: 32 }}
      aria-hidden
      data-testid="trajectory-marker-closed"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#17382f" stroke="#6cdbba" strokeWidth="1.5" />
        <path
          d="M10 16.5L14 20.5L22 12"
          stroke="#6cdbba"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function TrajectoryBoard(props: {
  projectId: string;
  pilotage: PilotageProjection | null;
  initialQualification: InitialQualificationProjection | null;
  knowledge?: TrajectoryKnowledge | null;
  onOpenTravail: () => void;
}) {
  const [detail, setDetail] = useState<DetailView>({ kind: "main" });
  const q = props.initialQualification;
  const cycle = props.pilotage?.cycle;
  const proposed = props.pilotage?.trajectory.proposed;
  const retained = props.pilotage?.trajectory.retained;
  const forecast =
    proposed?.forecastSteps ?? retained?.forecastSteps ?? q?.forecastSteps ?? null;
  const closed = props.pilotage?.closedCycles ?? [];
  // E07-COR-12 — exclusive display matrix (no stacked contradiction).
  // QA-FINAL — an ACTIVE cycle owns Trajectoire: qualification banners must not hide parcours/CKI.
  const hasActiveCycle = Boolean(cycle && cycle.status === "ACTIVE");
  const showUnknown = !hasActiveCycle && q?.status === "UNKNOWN";
  const showAnalyzing =
    !hasActiveCycle && Boolean(q && (q.status === "PENDING" || q.status === "RUNNING"));
  const showClarification = !hasActiveCycle && q?.status === "CLARIFICATION";
  const showFailed = !hasActiveCycle && q?.status === "FAILED";
  const hasRetained = Boolean(retained);
  const hasProposedOnly = Boolean(proposed) && !hasRetained;
  // E07-COR-11 — proposition initiale only when PROPOSED (not already RETAINED).
  const showProposal =
    !showAnalyzing &&
    !showUnknown &&
    !showClarification &&
    !showFailed &&
    !hasActiveCycle &&
    closed.length === 0 &&
    hasProposedOnly &&
    Boolean(forecast && forecast.length > 0);
  // E07 09.08 — after CLOSED with no ACTIVE, show roadmap (not "retained only").
  const showRetainedWithoutCycle =
    !showAnalyzing &&
    !showUnknown &&
    !showClarification &&
    !showFailed &&
    !cycle &&
    !showProposal &&
    hasRetained &&
    closed.length === 0;

  if (detail.kind === "bilan") {
    const closedCycle = closed.find((c) => c.id === detail.cycleId);
    return (
      <BilanHistoriqueView
        projectId={props.projectId}
        cycle={closedCycle ?? null}
        onBack={() => setDetail({ kind: "main" })}
      />
    );
  }

  if (detail.kind === "future") {
    return (
      <EtapeFutureView
        cycleType={detail.cycleType}
        rationale={detail.rationale}
        onBack={() => setDetail({ kind: "main" })}
        onOpenTravail={props.onOpenTravail}
      />
    );
  }

  if (detail.kind === "cki") {
    return (
      <CkiMethodeView
        pilotage={props.pilotage}
        onBack={() => setDetail({ kind: "main" })}
      />
    );
  }

  return (
    <div className="trajectory-board" data-testid="trajectory-board">
      <header className="e07-surface-hero" data-testid="trajectory-hero">
        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / TRAJECTOIRE</p>
        <h2 className="e07-surface-hero-title">Trajectoire du projet</h2>
        <p className="e07-surface-hero-sub max-w-3xl">
          {showAnalyzing
            ? "Le projet est créé. Nora prépare actuellement une première orientation de cycles."
            : showProposal
              ? "Nora a formulé une orientation initiale. Elle reste à examiner et à décider avec vous."
              : showClarification
                ? "Aucune trajectoire définie tant que la direction n’est pas précisée avec Nora."
                : "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre."}
        </p>
      </header>
      <div className="e07-section-rule" aria-hidden data-testid="trajectory-hero-sep" />

      {showUnknown ? (
        <section className="fig-panel space-y-2" data-testid="trajectory-unknown">
          <p className="fig-kicker text-[#a3b0c7]">RÉCONCILIATION EN COURS</p>
          <h3 className="fig-section-title">État de qualification à confirmer</h3>
          <p className="text-sm text-[#a3b0c7]">
            Studio vérifie si une proposition a déjà été publiée. Le compositeur reste indisponible
            jusqu&apos;à confirmation.
          </p>
        </section>
      ) : null}

      {showAnalyzing ? (
        <AnalyzingCard
          uiStep={q?.uiStep ?? 2}
          onOpenTravail={props.onOpenTravail}
        />
      ) : null}

      {showClarification ? (
        <section
          className="fig-panel space-y-3 text-center py-10 mx-auto"
          data-testid="trajectory-clarification"
          style={{ width: "100%", maxWidth: 1358, minHeight: 502, background: "#151D2C" }}
        >
          <div
            className="mx-auto flex items-center justify-center rounded-full"
            style={{ width: 92, height: 92, background: "#7477ED22" }}
            aria-hidden
          >
            <span className="text-3xl text-[#a8adff]">?</span>
          </div>
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE À CONSTRUIRE</p>
          <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
            Aucune trajectoire définie
          </h3>
          <p className="text-sm text-[#a3b0c7] max-w-xl mx-auto">
            {q?.clarificationQuestion ??
              "Nora a besoin d’une précision ciblée avant de proposer une suite de cycles."}
          </p>
          <button
            type="button"
            className="btn primary mt-2"
            onClick={props.onOpenTravail}
            style={{ minWidth: 552, minHeight: 47 }}
          >
            Travailler sur le projet avec Nora ↗
          </button>
        </section>
      ) : null}

      {showFailed ? (
        <section className="fig-panel space-y-2" data-testid="trajectory-incident">
          <p className="fig-kicker text-[#a3b0c7]">Incident technique</p>
          <h3 className="fig-section-title">Qualification interrompue</h3>
          <p className="text-sm text-[#a3b0c7]">
            Le projet reste accessible. Reprenez la conversation pour préciser la direction.
          </p>
          <button type="button" className="btn secondary mt-2" onClick={props.onOpenTravail}>
            Revenir à Travail ↗
          </button>
        </section>
      ) : null}

      {showProposal && forecast ? (
        <>
          <PropositionInitialeCard
            forecast={forecast}
            retainedId={retained?.id}
            proposedId={proposed?.id}
            onOpenTravail={props.onOpenTravail}
            onOpenFuture={(step) =>
              setDetail({
                kind: "future",
                cycleType: step.cycleType,
                rationale: step.rationale,
              })
            }
          />
          <div className="flex justify-end">
            <CkiShortcut onOpen={() => setDetail({ kind: "cki" })} />
          </div>
        </>
      ) : null}

      {showRetainedWithoutCycle ? (
        <section className="fig-panel space-y-3" data-testid="trajectory-retained-no-cycle">
          <p className="fig-kicker text-[#7477ed]">ORIENTATION RETENUE</p>
          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
            Une orientation est retenue — aucun cycle n&apos;est encore ouvert
          </h3>
          <p className="text-sm text-[#a3b0c7]">
            {retained?.orientation ||
              "Le Pilote peut ouvrir le premier cycle par un GO clair dans Travail."}
          </p>
          <button type="button" className="btn primary" onClick={props.onOpenTravail}>
            Ouvrir le travail avec Nora ↗
          </button>
        </section>
      ) : null}

      {!showAnalyzing &&
      !showUnknown &&
      !showClarification &&
      !showFailed &&
      !showProposal &&
      !showRetainedWithoutCycle ? (
        <ParcoursPrincipal
          projectId={props.projectId}
          closed={closed}
          cycle={cycle ?? null}
          forecast={forecast}
          method={props.pilotage?.method ?? null}
          knowledge={props.knowledge ?? null}
          onOpenBilan={(cycleId) => setDetail({ kind: "bilan", cycleId })}
          onOpenFuture={(cycleType, rationale) =>
            setDetail({ kind: "future", cycleType, rationale })
          }
          onOpenCki={() => setDetail({ kind: "cki" })}
          onOpenTravail={props.onOpenTravail}
        />
      ) : null}

      {/* Always offer CKI entry when parcours banner is absent (clarification / retained / etc.). */}
      {(showClarification || showFailed || showRetainedWithoutCycle || showUnknown) &&
      !showProposal ? (
        <div className="flex justify-end pt-2">
          <CkiShortcut onOpen={() => setDetail({ kind: "cki" })} />
        </div>
      ) : null}
    </div>
  );
}

function AnalyzingCard(props: { uiStep: number; onOpenTravail: () => void }) {
  const step = Math.min(3, Math.max(1, props.uiStep));
  return (
    <section
      className="fig-panel space-y-3 py-10 text-center mx-auto"
      data-testid="trajectory-qualification-progress"
      data-analyzing="1"
      data-step={step}
      style={{
        width: "100%",
        maxWidth: 1358,
        minHeight: 502,
        background: "#151D2C",
        borderColor: "#2B3850",
      }}
    >
      <span className="sr-only" data-testid="trajectory-analyzing" />
      {/* Page 10 09.10 — same empty-panel shell as 09.07; copy = qualification en cours. */}
      <div
        className="mx-auto flex items-center justify-center rounded-full border border-[#2b3850]"
        style={{ width: 92, height: 92, background: "#0c101a" }}
        aria-hidden
      >
        <span className="text-3xl text-[#a3b0c7]">○</span>
      </div>
      <p className="fig-kicker text-[#7477ed]">QUALIFICATION EN COURS</p>
      <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
        Nora prépare votre trajectoire
      </h3>
      <p className="text-sm text-[#a3b0c7] max-w-xl mx-auto">
        Elle confronte les éléments du SAS aux cycles pertinents pour proposer une progression
        adaptée.
      </p>
      <div className="mx-auto h-px" style={{ background: "#2B3850", width: 806 }} />
      <p className="text-sm text-[#a3b0c7] pt-1" data-testid="trajectory-analyzing-status-line">
        <span className={step >= 1 ? "text-[#6CDBBA]" : ""}>
          {step > 1 ? "✓" : "●"} Projet créé
        </span>
        <span className="mx-3"> </span>
        <span className={step === 2 ? "text-[#f3f5ff]" : step > 2 ? "text-[#6CDBBA]" : ""}>
          {step > 2 ? "✓" : step === 2 ? "●" : "○"} Identification des cycles · {Math.min(step, 2)} / 3
        </span>
        <span className="mx-3"> </span>
        <span className={step >= 3 ? "text-[#f3f5ff]" : ""}>
          {step >= 3 ? "●" : "○"} Réponse de Nora à venir
        </span>
      </p>
      <button
        type="button"
        className="btn primary mt-4"
        onClick={props.onOpenTravail}
        style={{ minWidth: 552, minHeight: 47 }}
      >
        Revenir à Travail ↗
      </button>
      <p className="text-xs text-[#7787a4] max-w-2xl mx-auto pt-2">
        L&apos;état s&apos;actualise ici dès que la qualification progresse. Aucun cycle n&apos;est
        encore ouvert.
      </p>
    </section>
  );
}

function PropositionInitialeCard(props: {
  forecast: ForecastStep[];
  retainedId?: string | null;
  proposedId?: string | null;
  onOpenTravail: () => void;
  onOpenFuture: (step: ForecastStep) => void;
}) {
  return (
    <section
      className="fig-panel flex flex-col"
      data-testid="trajectory-proposal-sequential"
      style={{
        borderColor: "#2b3850",
        width: "100%",
        maxWidth: 1358,
        minHeight: 545,
        padding: "32px 36px",
      }}
    >
      <div>
        <p className="fig-kicker text-[#7477ed]">PROPOSITION INITIALE DE NORA</p>
        <h3 className="mt-2 text-[1.45rem] font-semibold text-[#f3f5ff]">
          Une progression possible pour ce projet
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-[#a3b0c7]">
          Une suite séquentielle de cycles ; ce ne sont pas trois options concurrentes. Aucun cycle
          n&apos;est encore ouvert.
        </p>
      </div>

      <div
        className="mt-8 flex flex-nowrap items-stretch overflow-x-auto"
        style={{ gap: 49 }}
        data-testid="trajectory-forecast-steps"
      >
        {props.forecast.map((step, idx) => {
          const isFirst = idx === 0;
          return (
            <div
              key={`${step.order}-${step.cycleType}`}
              className="flex flex-none items-stretch"
              style={{ gap: 16 }}
            >
              <button
                type="button"
                onClick={() => props.onOpenFuture(step)}
                className="fig-panel flex-none space-y-2 text-left"
                style={{
                  width: 404,
                  minHeight: 155,
                  borderColor: isFirst ? "#7477ED88" : "#2B3850",
                  background: isFirst ? "#7477ED0d" : "#151D2C",
                  padding: "20px 22px",
                }}
                data-testid={`trajectory-forecast-step-${step.order}`}
              >
                <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
                  {String(step.order).padStart(2, "0")}{" "}
                  {isFirst ? "Premier cycle recommandé" : "Suite envisagée"}
                </p>
                <p className="text-lg font-semibold text-[#f3f5ff]">
                  {labelCycle(step.cycleType)}
                </p>
                {step.rationale ? (
                  <p className="line-clamp-3 text-sm text-[#a3b0c7]">{step.rationale}</p>
                ) : null}
              </button>
              {idx < props.forecast.length - 1 ? (
                <span className="self-center text-[#7787a4]" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        className="mt-8 rounded-[10px] border border-[#2b3850] bg-[#121a28] px-5 py-4"
        data-testid="trajectory-proposal-waiting"
      >
        <p className="text-sm text-[#a3b0c7]">
          Proposition non retenue — en attente d&apos;une décision du Pilote. Aucun cycle n&apos;est
          ouvert.
        </p>
      </div>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
        <p className="max-w-xl text-sm text-[#7787a4]">
          Les trois cycles visibles constituent une projection de trajectoire, pas trois cycles
          ouverts.
        </p>
        <button
          type="button"
          className="btn primary"
          onClick={props.onOpenTravail}
          style={{ minWidth: 498, minHeight: 49 }}
          data-testid="trajectory-proposal-cta"
        >
          Examiner avec Nora dans Travail ↗
        </button>
      </div>
    </section>
  );
}

function ParcoursPrincipal(props: {
  projectId: string;
  closed: NonNullable<PilotageProjection["closedCycles"]>;
  cycle: PilotageProjection["cycle"];
  forecast: ForecastStep[] | null;
  method: PilotageProjection["method"] | null;
  knowledge?: TrajectoryKnowledge | null;
  onOpenBilan: (cycleId: string) => void;
  onOpenFuture: (cycleType: string, rationale?: string | null) => void;
  onOpenCki: () => void;
  onOpenTravail: () => void;
}) {
  const cards: Array<{
    key: string;
    order: string;
    title: string;
    status: "closed" | "active" | "envisioned";
    statusLabel: string;
    actionLabel?: string;
    onAction?: () => void;
    subtitle?: string;
  }> = [];

  props.closed.forEach((c, i) => {
    cards.push({
      key: c.id,
      order: String(i + 1).padStart(2, "0"),
      title: labelCycle(c.cycleType),
      status: "closed",
      statusLabel: "Clôturé",
      actionLabel: "Voir le bilan ↗",
      onAction: () => props.onOpenBilan(c.id),
    });
  });

  if (props.cycle) {
    cards.push({
      key: props.cycle.id,
      order: String(cards.length + 1).padStart(2, "0"),
      title: labelCycle(props.cycle.cycleType),
      status: "active",
      statusLabel: "Actif",
      subtitle: "Cycle en cours",
    });
  }

  // E07-COR-10 — future steps by sequence identity/order, not by type uniqueness.
  const consumedOrders = new Set<number>();
  if (props.cycle && props.forecast?.length) {
    const match = props.forecast.find((s) => s.cycleType === props.cycle!.cycleType);
    if (match) consumedOrders.add(match.order);
  }
  props.closed.forEach((c) => {
    const match = props.forecast?.find(
      (s) => s.cycleType === c.cycleType && !consumedOrders.has(s.order),
    );
    if (match) consumedOrders.add(match.order);
  });
  const futureSteps =
    props.forecast?.filter((s) => !consumedOrders.has(s.order)).sort((a, b) => a.order - b.order) ??
    [];

  futureSteps.forEach((step) => {
    cards.push({
      key: `f-${step.order}-${step.cycleType}`,
      order: String(step.order).padStart(2, "0"),
      title: labelCycle(step.cycleType),
      status: "envisioned",
      statusLabel: "Envisagée",
      actionLabel: "Voir l'étape ↗",
      onAction: () => props.onOpenFuture(step.cycleType, step.rationale),
    });
  });

  const closedCount = props.closed.length;
  const activeCount = props.cycle ? 1 : 0;
  const cycleCount = cards.length;
  const acquisItems = (props.knowledge?.acquis ?? [])
    .filter((a) => a.status === "ACTIVE" || a.status === "CONFIRMED" || !a.status)
    .slice(0, 2);
  const clarifierItems = (props.knowledge?.openPoints ?? [])
    .filter((o) => o.status === "OPEN")
    .slice(0, 2);
  const acquisExtra = Math.max(
    0,
    (props.knowledge?.acquis ?? []).filter(
      (a) => a.status === "ACTIVE" || a.status === "CONFIRMED" || !a.status,
    ).length - acquisItems.length,
  );
  const clarifierExtra = Math.max(
    0,
    (props.knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length -
      clarifierItems.length,
  );

  return (
    <div className="flex flex-col gap-[15px]" data-testid="trajectory-roadmap">
      <section
        className="fig-panel relative overflow-hidden"
        data-testid="trajectory-parcours-panel"
        style={{
          width: "100%",
          maxWidth: 1358,
          minHeight: 198,
          padding: "15px 24px 16px",
          background: "#151D2C",
          borderColor: "#2B3850",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="text-[13px] font-semibold text-[#f3f5ff]">Parcours du projet</p>
          <p className="text-[13px] text-[#7787a4]" data-testid="trajectory-cycle-indicator">
            {cycleCount} CYCLE{cycleCount > 1 ? "S" : ""}
            {activeCount ? ` · ${activeCount} ACTIF` : ""}
            {closedCount ? ` · ${closedCount} CLÔTURÉ${closedCount > 1 ? "S" : ""}` : ""}
          </p>
        </div>

        {cards.length === 0 ? (
          <p className="text-sm text-[#a3b0c7] mt-4" data-testid="trajectory-no-active-cycle">
            Aucun cycle actif — la trajectoire reste une proposition tant qu&apos;un GO n&apos;est
            pas exprimé.
          </p>
        ) : (
          <div
            className="relative mt-4 flex flex-nowrap items-stretch overflow-x-auto"
            style={{ gap: 61 }}
            data-testid="trajectory-roadmap-cards"
          >
            {cards.map((card, idx) => (
              <div key={card.key} className="relative flex flex-none items-stretch">
                <article
                  className="fig-panel relative overflow-hidden"
                  style={{
                    width: 396,
                    height: 128,
                    minHeight: 128,
                    padding: "14px 18px 16px",
                    background: "#1b2639",
                    borderColor: "#2b3850",
                    borderLeftWidth:
                      card.status === "closed" ? 5 : card.status === "active" ? 7 : 1,
                    borderLeftColor:
                      card.status === "closed"
                        ? "#6cdbba"
                        : card.status === "active"
                          ? "#7477ed"
                          : "#2b3850",
                  }}
                  data-testid={
                    card.status === "active"
                      ? "trajectory-active-cycle"
                      : card.status === "closed"
                        ? "trajectory-closed-cycle"
                        : "trajectory-future-cycle"
                  }
                >
                  {card.status === "active" ? <CycleMarkerActive /> : null}
                  {card.status === "envisioned" ? <CycleMarkerEnvisaged /> : null}
                  {card.status === "closed" ? <CycleMarkerClosed /> : null}
                  <div className="flex flex-col gap-[5px] pr-10">
                    <p
                      className="text-[12px] font-semibold text-[#7477ed]"
                      data-testid="trajectory-cycle-order"
                    >
                      {card.order}
                    </p>
                    <p className="text-[19px] font-semibold leading-tight text-[#f3f5ff]">
                      {card.title}
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-[18px] right-[18px] flex items-end justify-between gap-2">
                    <p className="text-[13px] text-[#a3b0c7]">{card.statusLabel}</p>
                    {card.onAction && card.actionLabel ? (
                      <button
                        type="button"
                        className="text-[13px] font-semibold text-[#7477ed] hover:underline whitespace-nowrap"
                        onClick={card.onAction}
                      >
                        {card.actionLabel}
                      </button>
                    ) : null}
                  </div>
                </article>
                {idx < cards.length - 1 ? (
                  <span
                    className="pointer-events-none absolute text-[#7787a4] text-2xl"
                    style={{ right: -38, top: 54 }}
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </section>

      {!props.cycle && closedCount > 0 ? (
        <section
          className="fig-panel space-y-3"
          data-testid="trajectory-between-cycles"
          style={{ minHeight: 286, background: "#151D2C", borderColor: "#2B3850" }}
        >
          <p className="fig-kicker text-[#7477ED]">AUCUN CYCLE ACTIF</p>
          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">Entre deux cycles</h3>
          <p className="text-sm text-[#a3b0c7]">
            Le dernier cycle est clôturé. Une suite peut être envisagée ; son ouverture reste un GO
            du Pilote.
          </p>
          <button type="button" className="btn primary" onClick={props.onOpenTravail}>
            Reprendre avec Nora ↗
          </button>
        </section>
      ) : null}

      {props.cycle ? (
        <section
          className="fig-panel"
          data-testid="trajectory-cycle-actif-panel"
          style={{
            borderColor: "#7477ed44",
            minHeight: 365,
            padding: "18px 24px 20px",
            background: "#151D2C",
          }}
        >
          <p className="fig-kicker text-[#7477ed]">CYCLE ACTIF</p>
          <h3 className="mt-1 text-[1.45rem] font-semibold text-[#f3f5ff]">
            {labelCycle(props.cycle.cycleType)}
          </h3>
          <p
            className="mt-2 text-sm text-[#a3b0c7]"
            data-testid="trajectory-cycle-objective"
          >
            {displayableCycleObjective(props.cycle.objective) ??
              CYCLE_OBJECTIVE_PENDING_LABEL}
          </p>

          {/* Page 10 — Acquis / À clarifier ~50/50 (640/646 + gap 24); minmax(0) avoids content min-size collapse. */}
          <div
            className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,640fr)_minmax(0,646fr)]"
            data-testid="trajectory-cycle-knowledge-row"
          >
            <div
              className="min-w-0 rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
              style={{ minHeight: 157 }}
              data-testid="trajectory-acquis"
            >
              <p className="text-[14px] font-semibold text-[#f3f5ff]">Acquis identifiés</p>
              {acquisItems.length === 0 ? (
                <p className="mt-3 text-[13px] text-[#a3b0c7]" data-testid="trajectory-acquis-empty">
                  Aucun acquis capitalisé pour ce cycle pour le moment.
                </p>
              ) : (
                <ul className="mt-3 space-y-[6px]">
                  {acquisItems.map((a) => (
                    <li key={a.id} className="text-[13px] leading-[1.35] text-[#f3f5ff] break-words">
                      {a.statement}
                    </li>
                  ))}
                  {acquisExtra > 0 ? (
                    <li className="text-[12px] text-[#a3b0c7]">+ {acquisExtra} autre{acquisExtra > 1 ? "s" : ""}</li>
                  ) : null}
                </ul>
              )}
              <Link
                href={`/projects/${props.projectId}?surface=journal`}
                className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
                data-testid="trajectory-acquis-journal-link"
              >
                Consulter le Journal ↗
              </Link>
            </div>
            <div
              className="min-w-0 rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
              style={{ minHeight: 157 }}
              data-testid="trajectory-a-clarifier"
            >
              <p className="text-[14px] font-semibold text-[#f3f5ff]">À clarifier</p>
              {clarifierItems.length === 0 ? (
                <p
                  className="mt-3 text-[13px] text-[#a3b0c7]"
                  data-testid="trajectory-a-clarifier-empty"
                >
                  Aucun point ouvert à clarifier pour le moment.
                </p>
              ) : (
                <ul className="mt-3 space-y-[6px]">
                  {clarifierItems.map((o) => (
                    <li key={o.id} className="text-[13px] leading-[1.35] text-[#f3f5ff] break-words">
                      {o.statement}
                    </li>
                  ))}
                  {clarifierExtra > 0 ? (
                    <li className="text-[12px] text-[#a3b0c7]">
                      + {clarifierExtra} autre{clarifierExtra > 1 ? "s" : ""}
                    </li>
                  ) : null}
                </ul>
              )}
              <Link
                href={`/projects/${props.projectId}?surface=journal`}
                className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
                data-testid="trajectory-a-clarifier-journal-link"
              >
                Consulter le Journal ↗
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 text-sm font-semibold text-[#7477ed] hover:underline"
            data-testid="trajectory-open-cki"
            onClick={props.onOpenCki}
          >
            Accès CKI et méthode
          </button>
        </section>
      ) : null}

      <button
        type="button"
        className="w-full fig-panel flex items-center justify-between text-left"
        data-testid="trajectory-cki-banner"
        onClick={props.onOpenCki}
        style={{ borderColor: "#2b3850" }}
      >
        <span className="text-sm text-[#f3f5ff]">Guidance CKI et méthode</span>
        <span className="text-sm text-[#7477ed]">
          {props.cycle?.cki.ckiId
            ? `${props.cycle.cki.ckiId} · ${labelCycle(props.cycle.cycleType)} ›`
            : props.method?.presence === "RETAINED"
              ? `${props.method.methodRef} ›`
              : "Références ›"}
        </span>
      </button>
    </div>
  );
}

function BilanHistoriqueView(props: {
  projectId: string;
  cycle: { id: string; cycleType: string; objective: string; closedAt: string | null } | null;
  onBack: () => void;
}) {
  const closedLabel = props.cycle?.closedAt
    ? new Date(props.cycle.closedAt).toLocaleDateString("fr-FR")
    : null;
  return (
    <div className="space-y-5" data-testid="trajectory-bilan-historique">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / HISTORIQUE DES CYCLES</p>
          <h2 className="fig-hero-title">
            Bilan du {props.cycle ? labelCycle(props.cycle.cycleType).toLowerCase() : "cycle"}
          </h2>
          <p className="text-sm text-[#a3b0c7]">
            {closedLabel
              ? `Cycle clôturé le ${closedLabel}`
              : "Cycle clôturé — date de clôture non disponible"}
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      <section className="fig-panel space-y-2">
        <p className="fig-kicker text-[#7477ed]">OBJECTIF DU CYCLE</p>
        <p className="text-sm text-[#a3b0c7]">
          {displayableCycleObjective(props.cycle?.objective) ??
            "Objectif métier non reconstitué pour ce cycle."}
        </p>
        <div className="h-px bg-[#2b3850]" />
        <p className="fig-kicker text-[#7477ed]">RÉSULTAT À LA CLÔTURE</p>
        <p className="text-sm text-[#f3f5ff]">
          Le détail du résultat à la clôture n&apos;est pas encore disponible dans cette vue.
        </p>
        <p className="text-xs text-[#a3b0c7] text-right">Clôture décidée par le Pilote</p>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-2">
          <h3 className="text-lg font-semibold text-[#f3f5ff]">Travaux et éléments réalisés</h3>
          {closedLabel ? (
            <p className="text-xs text-[#7787a4]">SITUATION AU {closedLabel}</p>
          ) : null}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <BilanGapCard
            title="Sujets abordés"
            note="Projection historique bornée non encore capturée pour ce cycle — lacune signalée, aucun inventaire fictif."
            href={`/projects/${props.projectId}?surface=journal`}
            linkLabel="Consulter les sujets ↗"
          />
          <BilanGapCard
            title="Réserves transmises"
            note="Les réserves à date de clôture ne sont pas reconstituables ici sans capture bornée."
            href={`/projects/${props.projectId}?surface=journal`}
            linkLabel="Consulter le Journal ↗"
          />
          <BilanGapCard
            title="Documents produits"
            note="Versions documentaires à la clôture non projetées dans ce panneau."
            href={`/projects/${props.projectId}?surface=document`}
            linkLabel="Consulter les documents ↗"
          />
        </div>
      </section>

      <p className="text-xs text-[#7787a4]">
        Ce bilan conserve l&apos;état à la clôture. Le Journal, les réserves et les documents
        continuent d&apos;évoluer dans le projet.
      </p>
    </div>
  );
}

function BilanGapCard(props: {
  title: string;
  note: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <section className="fig-panel space-y-2">
      <h4 className="font-semibold text-[#f3f5ff]">{props.title}</h4>
      <p className="text-sm text-[#a3b0c7]">{props.note}</p>
      <Link href={props.href} className="text-sm font-semibold text-[#7477ed] hover:underline">
        {props.linkLabel}
      </Link>
    </section>
  );
}

function EtapeFutureView(props: {
  cycleType: string;
  rationale?: string | null;
  onBack: () => void;
  onOpenTravail: () => void;
}) {
  return (
    <div className="space-y-5" data-testid="trajectory-etape-future">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / ÉTAPE ENVISAGÉE</p>
          <h2 className="fig-hero-title">{labelCycle(props.cycleType)}</h2>
          <p className="fig-hero-sub max-w-3xl">
            Étape future non ouverte — à préciser avec Nora avant toute ouverture.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>

      {/* Figma 09.04 — two distinct zones: synthèse (345) then action (181). */}
      <section
        className="fig-panel space-y-4"
        data-testid="trajectory-future-summary"
        style={{ minHeight: 345 }}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="fig-kicker text-[#7477ed]">ÉTAPE ENVISAGÉE</p>
          <span className="text-xs font-semibold text-[#a3b0c7]">○ Cycle non ouvert</span>
        </div>
        <div className="h-px bg-[#2b3850]" />
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            FINALITÉ ACTUELLEMENT ENVISAGÉE
          </p>
          <p className="text-sm text-[#f3f5ff]">
            {props.rationale?.trim() ||
              "Finalité à préciser avec Nora — aucune ouverture automatique."}
          </p>
        </section>
        <div className="h-px bg-[#2b3850]" />
        <section className="space-y-1">
          <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
            CE QUI RESTE À DÉFINIR
          </p>
          <p className="text-sm text-[#a3b0c7]">
            Objectif opérationnel, critères de clôture et CKI principal — uniquement après GO du
            Pilote.
          </p>
        </section>
      </section>

      <section
        className="fig-panel space-y-3"
        data-testid="trajectory-future-action"
        style={{ minHeight: 181 }}
      >
        <h3 className="text-lg font-semibold text-[#f3f5ff]">Travailler la suite avec Nora</h3>
        <p className="text-sm text-[#a3b0c7]">
          Cette étape reste envisagée. Le Pilote peut la qualifier dans Travail ; aucun cycle
          n&apos;est ouvert ici.
        </p>
        <button type="button" className="btn primary" onClick={props.onOpenTravail}>
          Travailler la suite avec Nora ↗
        </button>
      </section>

    </div>
  );
}

function CkiMethodeView(props: {
  pilotage: PilotageProjection | null;
  onBack: () => void;
}) {
  const cycle = props.pilotage?.cycle;
  const method = props.pilotage?.method;
  const editorial = cycle?.cki.editorial ?? null;
  const displayTitle = editorial?.title ?? null;
  const ordinal = editorial?.ordinal ?? (cycle?.cki.ckiId?.match(/^(\d{2})/)?.[1] ?? null);

  return (
    <div className="trajectory-cki" data-testid="trajectory-cki-methode">
      <header className="e07-surface-hero flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / RÉFÉRENCES DU CYCLE</p>
          <h2 className="e07-surface-hero-title">CKI et méthode</h2>
          <p className="e07-surface-hero-sub max-w-3xl">
            Deux références distinctes : la spécialisation cognitive du cycle et la méthode
            applicable au projet.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-[#7477ed] hover:underline"
          onClick={props.onBack}
        >
          ← Retour à la trajectoire
        </button>
      </header>
      <div className="e07-section-rule" aria-hidden />

      {/* Figma 09.05 — asymmetric: CKI ~872px, méthode ~464px */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "minmax(0, 872fr) minmax(0, 464fr)", gap: 22 }}
        data-testid="trajectory-cki-layout"
      >
        <section
          className="fig-panel flex flex-col gap-0"
          data-testid="trajectory-cki-main"
          style={{ padding: "22px 26px", minHeight: 586 }}
        >
          {cycle?.cki.ckiId ? (
            <>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7477ed]"
                data-testid="trajectory-cki-ordinal"
              >
                CKI PRINCIPAL{ordinal ? ` / ${ordinal}` : ""}
              </p>
              <h3
                className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]"
                data-testid="trajectory-cki-id"
                data-cki-id={cycle.cki.ckiId}
              >
                {displayTitle ?? cycle.cki.ckiId}
              </h3>
              {editorial?.corpusVersion ? (
                <p className="mt-3 text-[12px] text-[#a3b0c7]" data-testid="trajectory-cki-version">
                  Corpus Next {editorial.corpusVersion} · Contenu validé · Référence éditoriale
                </p>
              ) : cycle.cki.pinnedVersion ? (
                <p className="mt-3 text-[12px] text-[#a3b0c7]">
                  Version épinglée {cycle.cki.pinnedVersion}
                </p>
              ) : null}

              {editorial?.resultSought ? (
                <>
                  <div className="my-5 h-px bg-[#2b3850]" />
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                    Résultat recherché
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-[#f3f5ff]"
                    data-testid="trajectory-cki-result"
                  >
                    {editorial.resultSought}
                  </p>
                </>
              ) : null}

              {editorial?.relevance ? (
                <>
                  <div className="my-5 h-px bg-[#2b3850]" />
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                    Quand cette spécialité est pertinente
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-[#f3f5ff]"
                    data-testid="trajectory-cki-relevance"
                  >
                    {editorial.relevance}
                  </p>
                </>
              ) : null}

              {editorial && editorial.angles.length > 0 ? (
                <>
                  <div className="my-5 h-px bg-[#2b3850]" />
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                    Principaux angles d&apos;analyse
                  </p>
                  <div
                    className="mt-4 grid gap-3"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                    data-testid="trajectory-cki-angles"
                  >
                    {editorial.angles.map((angle) => (
                      <article
                        key={angle.title}
                        className="rounded-[10px] border border-[#2b3850] bg-[#121a28] p-4"
                        data-testid="trajectory-cki-angle"
                      >
                        <h4 className="text-sm font-semibold text-[#f3f5ff]">{angle.title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-[#a3b0c7]">
                          {angle.summary}
                        </p>
                      </article>
                    ))}
                  </div>
                </>
              ) : null}

              {!editorial ? (
                <>
                  <div className="my-5 h-px bg-[#2b3850]" />
                  <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-cki-editorial-pending">
                    Contenu éditorial indisponible pour ce pin (
                    {cycle.cki.availability}
                    ). La fiche CKI n&apos;est affichée que lorsque les octets vérifiés sont
                    résolus.
                  </p>
                </>
              ) : null}
            </>
          ) : (
            <>
              <h3
                className="mt-3 text-lg font-semibold text-[#f3f5ff]"
                data-testid="trajectory-cki-absent"
              >
                Aucun CKI principal actif
              </h3>
              <p className="mt-2 text-sm text-[#a3b0c7]">
                Un CKI principal n&apos;existe qu&apos;avec un cycle réellement ouvert. Aucune
                génération automatique à l&apos;ouverture.
              </p>
            </>
          )}
        </section>

        <section
          className="fig-panel flex flex-col"
          data-testid="trajectory-method-side"
          style={{ padding: "22px 24px", minHeight: 586 }}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7477ed]">
            MÉTHODE DU PROJET
          </p>
          {method?.presence === "RETAINED" ? (
            <>
              <h3 className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]">
                {method.methodRef}
              </h3>
              <p className="mt-3 text-[12px] text-[#a3b0c7]">
                Version {method.methodVersion} · méthode retenue par le Pilote
                {method.usageRestricted ? " · usage restreint" : ""}
              </p>
              <div className="my-5 h-px bg-[#2b3850]" />
              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                Référence applicable
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#f3f5ff]">
                La méthode retenue est une donnée du projet. Son choix, sa portée et son évolution
                relèvent des décisions du Pilote.
              </p>
              {method.usageNote ? (
                <p className="mt-3 text-sm text-[#a3b0c7]">{method.usageNote}</p>
              ) : null}
              <div className="my-5 h-px bg-[#2b3850]" />
              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                Séparation des responsabilités
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#a3b0c7]">
                La méthode n&apos;est pas le CKI. Le CKI apporte une guidance spécialisée, sans
                imposer de processus ni autoriser une décision.
              </p>
            </>
          ) : (
            <>
              <h3 className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]">
                Aucune méthode retenue
              </h3>
              <p className="mt-3 text-[12px] text-[#a3b0c7]">
                Absence valide · distincte du CKI principal
              </p>
              <div className="my-5 h-px bg-[#2b3850]" />
              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
                Séparation des responsabilités
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#a3b0c7]">
                La méthode applicable est distincte du CKI et n&apos;est pas imposée par Nora.
                L&apos;absence de méthode retenue est un état valide.
              </p>
            </>
          )}
        </section>
      </div>

      <p className="text-xs text-[#7787a4]">
        Lecture des références existantes : aucun nouveau résumé IA n&apos;est généré à
        l&apos;ouverture de cette page.
      </p>
    </div>
  );
}
