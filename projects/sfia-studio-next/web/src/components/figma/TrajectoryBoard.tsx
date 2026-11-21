"use client";

import { useState } from "react";
import Link from "next/link";
import type { ForecastStep } from "@/domains/pilotage/forecast-builder";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import type { PilotageProjection } from "@/domains/pilotage/types";

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

export function TrajectoryBoard(props: {
  projectId: string;
  pilotage: PilotageProjection | null;
  initialQualification: InitialQualificationProjection | null;
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
    <div className="trajectory-board space-y-5" data-testid="trajectory-board">
      <header className="space-y-2" data-testid="trajectory-hero">
        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / TRAJECTOIRE</p>
        <h2 className="fig-hero-title">Trajectoire du projet</h2>
        <p className="fig-hero-sub max-w-3xl">
          {showAnalyzing
            ? "Le projet est créé. Nora prépare actuellement une première orientation de cycles."
            : showProposal
              ? "Nora a formulé une orientation initiale. Elle reste à examiner et à décider avec vous."
              : showClarification
                ? "Aucune trajectoire définie tant que la direction n’est pas précisée avec Nora."
                : "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre."}
        </p>
      </header>

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
      className="fig-panel border border-[#7477ed44] space-y-4 py-10 text-center mx-auto"
      data-testid="trajectory-qualification-progress"
      data-step={step}
      style={{ width: "100%", maxWidth: 1358, minHeight: 502, background: "#151D2C" }}
    >
      <div
        className="mx-auto flex items-center justify-center rounded-full"
        style={{
          width: 92,
          height: 92,
          background: "radial-gradient(circle, #7477ed55 0%, #7477ed11 70%)",
        }}
        aria-hidden
      >
        <span className="text-3xl font-semibold text-[#a8adff]">✦</span>
      </div>
      <p className="fig-kicker text-[#7477ed]">QUALIFICATION EN COURS</p>
      <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff]">
        Nora prépare votre trajectoire
      </h3>
      <p className="text-sm text-[#a3b0c7] max-w-xl mx-auto">
        Elle confronte les éléments du SAS aux cycles pertinents pour proposer une progression
        adaptée.
      </p>
      <div className="mx-auto h-px max-w-md" style={{ background: "#2B3850", width: 806 }} />
      <ol className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#a3b0c7] pt-2">
        <li className={step >= 1 ? "text-[#6CDBBA]" : ""}>
          {step > 1 ? "✓" : "●"} Projet créé
        </li>
        <li className={step === 2 ? "text-[#f3f5ff]" : step > 2 ? "text-[#6CDBBA]" : ""}>
          {step > 2 ? "✓" : step === 2 ? "●" : "○"} Identification des cycles · {Math.min(step, 2)}{" "}
          / 3
        </li>
        <li className={step >= 3 ? "text-[#f3f5ff]" : ""}>
          {step >= 3 ? "●" : "○"} Réponse de Nora à venir
        </li>
      </ol>
      <button
        type="button"
        className="btn primary mt-4"
        onClick={props.onOpenTravail}
        style={{ minWidth: 552, minHeight: 47 }}
      >
        Revenir au travail avec Nora ↗
      </button>
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
      className="fig-panel space-y-5"
      data-testid="trajectory-proposal-sequential"
      style={{ borderColor: "#2b3850" }}
    >
      <div>
        <p className="fig-kicker text-[#7477ed]">PROPOSITION INITIALE DE NORA</p>
        <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff] mt-1">
          Une progression possible pour ce projet
        </h3>
        <p className="text-sm text-[#a3b0c7] mt-2 max-w-3xl">
          Une suite séquentielle de cycles ; ce ne sont pas trois options concurrentes. Aucun cycle
          n&apos;est encore ouvert.
        </p>
      </div>

      <div className="flex flex-wrap items-stretch gap-3" data-testid="trajectory-forecast-steps">
        {props.forecast.map((step, idx) => {
          const isFirst = idx === 0;
          return (
            <div key={`${step.order}-${step.cycleType}`} className="flex items-stretch gap-3 min-w-0">
              <button
                type="button"
                onClick={() => props.onOpenFuture(step)}
                className="fig-panel text-left space-y-2 flex-none"
                style={{
                  width: 404,
                  minHeight: 155,
                  borderColor: isFirst ? "#7477ED88" : "#2B3850",
                  background: isFirst ? "#7477ED0d" : "#151D2C",
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
                  <p className="text-sm text-[#a3b0c7] line-clamp-3">{step.rationale}</p>
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

      <div className="flex justify-center pt-2">
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

  return (
    <div className="space-y-5" data-testid="trajectory-roadmap">
      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="fig-kicker">PARCOURS DU PROJET</p>
            <p className="text-xs text-[#7787a4] mt-1">
              {activeCount} CYCLE ACTIF · {closedCount} CLÔTURÉ{closedCount > 1 ? "S" : ""}
            </p>
          </div>
        </div>

        {cards.length === 0 ? (
          <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-no-active-cycle">
            Aucun cycle actif — la trajectoire reste une proposition tant qu&apos;un GO n&apos;est
            pas exprimé.
          </p>
        ) : (
          <div
            className="flex flex-wrap items-stretch gap-3"
            data-testid="trajectory-roadmap-cards"
          >
            {cards.map((card, idx) => (
              <div key={card.key} className="flex items-stretch gap-3">
                <article
                  className="fig-panel relative space-y-2 overflow-hidden"
                  style={{
                    width: 396,
                    minHeight: 128,
                    borderColor:
                      card.status === "closed"
                        ? "#6cdbba55"
                        : card.status === "active"
                          ? "#7477ed88"
                          : "#2b3850",
                    borderLeftWidth:
                      card.status === "closed" ? 5 : card.status === "active" ? 7 : 4,
                    borderLeftColor:
                      card.status === "closed"
                        ? "#6cdbba"
                        : card.status === "active"
                          ? "#7477ed"
                          : "#3a4660",
                  }}
                  data-testid={
                    card.status === "active"
                      ? "trajectory-active-cycle"
                      : card.status === "closed"
                        ? "trajectory-closed-cycle"
                        : "trajectory-future-cycle"
                  }
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">
                      {card.order} {card.title}
                    </p>
                    <span
                      className="text-xs font-semibold whitespace-nowrap"
                      style={{
                        color:
                          card.status === "closed"
                            ? "#6cdbba"
                            : card.status === "active"
                              ? "#a8adff"
                              : "#a3b0c7",
                      }}
                    >
                      {card.status === "closed"
                        ? "✓ "
                        : card.status === "active"
                          ? "● "
                          : "○ "}
                      {card.statusLabel}
                    </span>
                  </div>
                  {card.subtitle ? (
                    <p className="text-sm text-[#f3f5ff]">{card.subtitle}</p>
                  ) : null}
                  {card.onAction && card.actionLabel ? (
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#7477ed] hover:underline"
                      onClick={card.onAction}
                    >
                      {card.actionLabel}
                    </button>
                  ) : null}
                </article>
                {idx < cards.length - 1 ? (
                  <span className="self-center text-[#7787a4] text-2xl" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {!props.cycle && closedCount > 0 ? (
          <section
            className="fig-panel space-y-3"
            data-testid="trajectory-between-cycles"
            style={{ minHeight: 286, background: "#151D2C", borderColor: "#2B3850" }}
          >
            <p className="fig-kicker text-[#7477ED]">AUCUN CYCLE ACTIF</p>
            <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
              Entre deux cycles
            </h3>
            <p className="text-sm text-[#a3b0c7]">
              Le dernier cycle est clôturé. Une suite peut être envisagée ; son ouverture reste un
              GO du Pilote.
            </p>
            <button type="button" className="btn primary" onClick={props.onOpenTravail}>
              Reprendre avec Nora ↗
            </button>
          </section>
        ) : null}
      </section>

      {props.cycle ? (
        <section
          className="fig-panel space-y-3"
          data-testid="trajectory-cycle-actif-panel"
          style={{ borderColor: "#7477ed44" }}
        >
          <p className="fig-kicker text-[#7477ed]">CYCLE ACTIF</p>
          <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
            {labelCycle(props.cycle.cycleType)}
          </h3>
          <p className="text-sm text-[#a3b0c7]">{props.cycle.objective}</p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href={`/projects/${props.projectId}?surface=journal`}
              className="text-sm font-semibold text-[#7477ed] hover:underline"
            >
              Consulter le Journal ↗
            </Link>
            <button
              type="button"
              className="text-sm font-semibold text-[#7477ed] hover:underline"
              data-testid="trajectory-open-cki"
              onClick={props.onOpenCki}
            >
              Accès CKI et méthode
            </button>
          </div>
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
          {props.cycle?.objective?.trim() || "Objectif initial non reconstitué."}
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
  return (
    <div className="space-y-5" data-testid="trajectory-cki-methode">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / RÉFÉRENCES DU CYCLE</p>
          <h2 className="fig-hero-title">CKI et méthode</h2>
          <p className="fig-hero-sub max-w-3xl">
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

      {/* Figma 09.05 — asymmetric: CKI ~872px, méthode ~464px */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "minmax(0, 872fr) minmax(0, 464fr)" }}
        data-testid="trajectory-cki-layout"
      >
        <section className="fig-panel space-y-3" data-testid="trajectory-cki-main">
          <p className="fig-kicker text-[#7477ed]">GUIDANCE CKI PRINCIPALE</p>
          {cycle?.cki.ckiId ? (
            <>
              <h3
                className="text-[1.45rem] font-semibold text-[#f3f5ff]"
                data-testid="trajectory-cki-id"
                data-cki-id={cycle.cki.ckiId}
              >
                {cycle.cki.ckiId}
              </h3>
              <p className="text-sm text-[#a3b0c7]">
                Référence applicable au cycle {labelCycle(cycle.cycleType)}
                {cycle.cki.pinnedVersion ? ` · version ${cycle.cki.pinnedVersion}` : ""}
              </p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Finalité</p>
              <p className="text-sm text-[#f3f5ff]">{cycle.objective}</p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Disponibilité</p>
              <p className="text-sm text-[#a3b0c7]">
                {cycle.cki.availability} — ASSOCIATED / RESOLVED / DELIVERED restent distincts ;
                aucun claim DELIVERED sans preuve.
              </p>
            </>
          ) : (
            <>
              <h3
                className="text-lg font-semibold text-[#f3f5ff]"
                data-testid="trajectory-cki-absent"
              >
                Aucun CKI principal actif
              </h3>
              <p className="text-sm text-[#a3b0c7]">
                Un CKI principal n&apos;existe qu&apos;avec un cycle réellement ouvert. Aucune
                génération automatique à l&apos;ouverture.
              </p>
            </>
          )}
        </section>

        <section className="fig-panel space-y-3" data-testid="trajectory-method-side">
          <p className="fig-kicker text-[#7477ed]">MÉTHODE APPLICABLE AU PROJET</p>
          {method?.presence === "RETAINED" ? (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">{method.methodRef}</h3>
              <p className="text-sm text-[#a3b0c7]">Version {method.methodVersion}</p>
              <div className="h-px bg-[#2b3850]" />
              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Statut</p>
              <p className="text-sm text-[#a3b0c7]">
                Retenue par décision Pilote
                {method.usageRestricted ? " — usage restreint" : ""}.
              </p>
              {method.usageNote ? (
                <>
                  <div className="h-px bg-[#2b3850]" />
                  <p className="text-sm text-[#a3b0c7]">{method.usageNote}</p>
                </>
              ) : null}
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucune méthode retenue</h3>
              <p className="text-sm text-[#a3b0c7]">
                La méthode applicable est distincte du CKI et n&apos;est pas imposée par Nora.
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
