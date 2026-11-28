"use client";

import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import {
  preparationAnnouncement,
  preparationContinuityMarks,
  type ContextLoadState,
  type PrepMark,
} from "@/lib/project-projection-sync";

/**
 * Figma SAS06 (1022:164) — Création et qualification initiale.
 * Frame 1022:164, référence 702×823. Assets locaux identiques aux icônes de la frame.
 */
const ASSET = {
  halo: "/figma/sas06/icone-halo.svg",
  analyse: "/figma/sas06/icone-analyse.svg",
  confirmCircle: "/figma/sas06/confirmation-cercle.svg",
  confirmIcon: "/figma/sas06/icone-confirme.svg",
  focusHalo: "/figma/sas06/focus-halo.svg",
  evaluation: "/figma/sas06/icone-evaluation.svg",
  wait: "/figma/sas06/repere-attente.svg",
  info: "/figma/sas06/icone-information.svg",
} as const;

export function SasCreateProgressPopup(props: {
  visible: boolean;
  projectName: string;
  step: 1 | 2 | 3;
  /** Real project-context read. Independent from qualification. */
  contextLoad?: ContextLoadState;
  /** RB-07/08 — when true, the title is the confirmation. Rows follow real marks. */
  complete?: boolean;
  qualification: InitialQualificationProjection | null;
  onDismiss: () => void;
}) {
  if (!props.visible) return null;

  const iqStatus = props.qualification?.status ?? null;
  const contextLoad = props.contextLoad ?? "loading";
  const announcement = preparationAnnouncement({
    context: contextLoad,
    qualificationStatus: iqStatus,
    dwellComplete: props.complete === true,
    projectName: props.projectName,
  });
  const kicker = announcement.kicker;
  const titleText = announcement.title;
  const leadText = announcement.lead;
  const outcome =
    iqStatus === "PROPOSED" || iqStatus === "CLARIFICATION" || iqStatus === "FAILED"
      ? iqStatus
      : "RUNNING";

  const marks = preparationContinuityMarks({
    projectCreated: true,
    context: contextLoad,
    qualificationStatus: iqStatus,
  });
  const steps: Array<{
    n: 1 | 2 | 3 | 4;
    key: keyof typeof marks;
    title: string;
    detail: string;
  }> = [
    {
      n: 1,
      key: "project",
      title: "Projet créé",
      detail: "Ton projet est enregistré et reste accessible.",
    },
    {
      n: 2,
      key: "context",
      title: "Chargement du contexte et de la continuité projet",
      detail: "Récupération des sujets, acquis, points ouverts, documents et informations de pilotage.",
    },
    {
      n: 3,
      key: "cycles",
      title: "Identification des cycles pertinents",
      detail: "Qualification initiale de la trajectoire et des références CKI.",
    },
    {
      n: 4,
      key: "reply",
      title: "Première réponse de Nora",
      detail:
        outcome === "CLARIFICATION"
          ? "Clarification dans le fil — pas encore de proposition de trajectoire."
          : outcome === "FAILED"
            ? "La qualification n’a pas abouti ; tu peux reprendre dans le projet."
            : outcome === "PROPOSED"
              ? "Une proposition de trajectoire dans le fil du projet."
              : "Une proposition ou une clarification dans le fil du projet.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{
        background: "rgba(6,9,17,0.78)",
        // Figma desktop (1680×970): top = 124px when viewport fits card+chrome.
        // Short viewports (e.g. PW 1280×720): shrink top padding (floor 16px) so the
        // 702×726 card can scroll and "Accéder au projet" stays reachable.
        // Four markers. Desktop padding shrinks when the card no longer fits 124px.
        padding: "clamp(16px, calc((100vh - 823px) / 2), 240px) 16px 24px",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sas-create-progress-title"
      data-testid="sas-create-progress-popup"
    >
      <div
        className="relative overflow-y-auto"
        style={{
          width: 702,
          // Morris 2026-11-28: fourth real context step. Height follows the added row.
          height: 823,
          maxHeight: "calc(100vh - 40px)",
          maxWidth: "calc(100vw - 32px)",
          background: "#1b2639",
          border: "1px solid #2b3850",
          borderRadius: 18,
          color: "#f3f5ff",
        }}
        data-testid="sas-create-progress-card"
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#7477ed",
          }}
        />

        <div className="flex items-start justify-between gap-3" style={{ padding: "28px 35px 0" }}>
          <div className="flex items-center gap-4">
            <div className="relative" style={{ width: 52, height: 52 }} aria-hidden>
              {/* Native Figma SVGs — preserve root width/height attributes */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.halo} alt="" width={52} height={52} />
              <span className="absolute inset-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ASSET.analyse} alt="" width={30} height={30} />
              </span>
            </div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7477ed]"
              data-testid="sas-create-progress-kicker"
              data-outcome={outcome}
            >
              {kicker}
            </p>
          </div>
          <span
            className="inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[12px] font-semibold"
            style={{ background: "#17382f", borderColor: "#6cdbba", color: "#6cdbba" }}
          >
            ✓ Créé
          </span>
        </div>

        <div style={{ padding: "24px 35px 0" }}>
          <h2
            id="sas-create-progress-title"
            className="text-[26px] font-semibold leading-tight"
          >
            {titleText}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#a3b0c7]">{leadText}</p>
        </div>

        <div className="mx-[35px] mt-6 h-px bg-[#2b3850]" />

        <p
          className="text-[11px] font-semibold uppercase tracking-wide text-[#a3b0c7]"
          style={{ padding: "18px 35px 0" }}
        >
          SUIVI DE LA PRÉPARATION
        </p>

        <ol
          className="mt-4 flex flex-col gap-[11px]"
          style={{ padding: "0 35px" }}
          data-display-step={props.step}
        >
          {steps.map((item) => {
            const mark: PrepMark = marks[item.key];
            const done = mark === "done";
            const current = mark === "running";
            const statusLabel =
              mark === "done"
                ? `${String(item.n).padStart(2, "0")}  TERMINÉ`
                : mark === "running"
                  ? `${String(item.n).padStart(2, "0")}  EN COURS`
                  : mark === "failed"
                    ? `${String(item.n).padStart(2, "0")}  REPRISE`
                    : mark === "incomplete"
                      ? `${String(item.n).padStart(2, "0")}  INCOMPLET`
                      : `${String(item.n).padStart(2, "0")}  À VENIR`;
            const statusColor =
              mark === "done" ? "#6cdbba" : mark === "running" ? "#7477ed" : mark === "failed" ? "#e2a36b" : "#7787a4";
            const borderColor = current ? "#7477ed" : "#2b3850";
            const minH = current ? 104 : item.n === 1 ? 79 : 86;

            return (
              <li
                key={item.n}
                className="relative flex gap-4 rounded-[12px] border"
                style={{
                  background: "#151d2c",
                  borderColor,
                  minHeight: minH,
                  padding: "15px 18px",
                }}
                data-testid={`sas-create-step-${item.n}`}
                data-mark={mark}
                data-current={current ? "1" : "0"}
              >
                <div className="relative shrink-0" style={{ width: 35, height: 35, marginTop: 4 }} aria-hidden>
                  {done ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ASSET.confirmCircle} alt="" width={35} height={35} />
                      <span className="absolute inset-0 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ASSET.confirmIcon} alt="" width={22} height={22} />
                      </span>
                    </>
                  ) : current ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ASSET.focusHalo}
                        alt=""
                        width={35}
                        height={35}
                        className="fig-sas-progress-ring-spin"
                        data-terminal={announcement.announceComplete ? "1" : "0"}
                        aria-hidden
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ASSET.evaluation} alt="" width={19} height={19} />
                      </span>
                      <span className="sr-only">
                        {current ? "Étape en cours" : null}
                      </span>
                    </>
                  ) : (
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ASSET.wait} alt="" width={35} height={35} />
                      <span
                        className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-[#a3b0c7]"
                      >
                        {String(item.n).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1 pr-24">
                  <p className="text-[16px] font-semibold text-[#f3f5ff]">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#a3b0c7]">{item.detail}</p>
                </div>
                <p
                  className="absolute right-[18px] top-[17px] text-[10px] font-semibold"
                  style={{ color: statusColor }}
                >
                  {statusLabel}
                </p>
              </li>
            );
          })}
        </ol>

        <div
          className="mx-[35px] mt-4 flex gap-3 rounded-[10px] border border-[#2b3850] bg-[#151d2c] px-4 py-3"
          style={{ minHeight: 67 }}
        >
          {/* RB-09 — fixed square box so the info glyph stays circular under flex. */}
          <span
            className="mt-0.5 inline-flex shrink-0 items-center justify-center"
            style={{ width: 22, height: 22, flex: "0 0 22px" }}
            aria-hidden
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSET.info}
              alt=""
              width={22}
              height={22}
              style={{ width: 22, height: 22, objectFit: "contain", display: "block" }}
            />
          </span>
          <p className="text-[12px] leading-relaxed text-[#a3b0c7]">
            Tu peux accéder au projet dès maintenant ou quitter Studio : la préparation sera retrouvée à ton retour.
          </p>
        </div>

        {props.qualification?.composerLockReason ? (
          <p className="mx-[35px] mt-3 text-xs text-[#a3b0c7]">
            {props.qualification.composerLockReason}
          </p>
        ) : null}

        <div
          className="flex flex-wrap items-center justify-between gap-4"
          style={{ padding: "22px 35px 32px", position: "sticky", bottom: 0, background: "#1b2639" }}
          data-testid="sas-create-progress-footer"
        >
          <p className="text-[12px] text-[#7787a4] min-w-0 flex-1">
            Aucun cycle ne démarre sans ton accord.
          </p>
          <button
            type="button"
            className="btn primary shrink-0"
            onClick={props.onDismiss}
            data-testid="sas-create-progress-dismiss"
            style={{ width: 190, minHeight: 44, borderRadius: 9 }}
          >
            Accéder au projet
          </button>
        </div>
      </div>
    </div>
  );
}
