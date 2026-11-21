"use client";

import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

/**
 * Figma SAS06 (1022:164) — Création et qualification initiale.
 * Dimensions : 702×726 · assets SVG natifs sous /public/figma/sas06/ (download_assets MCP).
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
  qualification: InitialQualificationProjection | null;
  onDismiss: () => void;
}) {
  if (!props.visible) return null;

  const steps = [
    {
      n: 1 as const,
      title: "Projet créé",
      detail: "Il reste accessible, même si vous quittez Studio.",
      statusDone: "01  TERMINÉ",
      statusCurrent: "01  EN COURS",
      statusPending: "01  À VENIR",
    },
    {
      n: 2 as const,
      title: "Identification des cycles pertinents",
      detail: "Analyse des cycles pertinents et des références CKI.",
      statusDone: "02  TERMINÉ",
      statusCurrent: "02  EN COURS",
      statusPending: "02  À VENIR",
    },
    {
      n: 3 as const,
      title: "Première réponse de Nora",
      detail: "Une proposition ou une clarification dans le fil du projet.",
      statusDone: "03  TERMINÉ",
      statusCurrent: "03  EN COURS",
      statusPending: "03  À VENIR",
    },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center"
      style={{ background: "rgba(6,9,17,0.78)", paddingTop: 124 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sas-create-progress-title"
      data-testid="sas-create-progress-popup"
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: 702,
          minHeight: 726,
          maxWidth: "calc(100vw - 32px)",
          background: "#1b2639",
          border: "1px solid #2b3850",
          borderRadius: 18,
          color: "#f3f5ff",
        }}
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7477ed]">
              PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION
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
            className="text-[28px] font-semibold leading-tight"
          >
            Projet créé. Nora prépare la suite.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#a3b0c7]">
            {props.projectName
              ? `Nora analyse l’intention de « ${props.projectName} » pour proposer une première trajectoire.`
              : "Nora analyse votre intention pour proposer une première trajectoire."}
          </p>
        </div>

        <div className="mx-[35px] mt-6 h-px bg-[#2b3850]" />

        <p
          className="text-[11px] font-semibold uppercase tracking-wide text-[#a3b0c7]"
          style={{ padding: "18px 35px 0" }}
        >
          SUIVI DE LA PRÉPARATION
        </p>

        <ol className="mt-4 flex flex-col gap-[11px]" style={{ padding: "0 35px" }}>
          {steps.map((item) => {
            const done = props.step > item.n;
            const current = props.step === item.n;
            const statusLabel = done
              ? item.statusDone
              : current
                ? item.statusCurrent
                : item.statusPending;
            const statusColor = done ? "#6cdbba" : current ? "#7477ed" : "#7787a4";
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
                      <img src={ASSET.focusHalo} alt="" width={35} height={35} />
                      <span className="absolute inset-0 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ASSET.evaluation} alt="" width={19} height={19} />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSET.info} alt="" width={22} height={22} className="mt-0.5 shrink-0" />
          <p className="text-[12px] leading-relaxed text-[#a3b0c7]">
            Vous pouvez quitter Studio : cette préparation sera retrouvée à votre retour.
          </p>
        </div>

        {props.qualification?.composerLockReason ? (
          <p className="mx-[35px] mt-3 text-xs text-[#a3b0c7]">
            {props.qualification.composerLockReason}
          </p>
        ) : null}

        <div
          className="flex items-center justify-between gap-4"
          style={{ padding: "22px 35px 28px" }}
        >
          <p className="text-[12px] text-[#7787a4]">Aucun cycle ne démarre sans votre accord.</p>
          <button
            type="button"
            className="btn primary"
            onClick={props.onDismiss}
            data-testid="sas-create-progress-dismiss"
            style={{ width: 190, minHeight: 40, borderRadius: 9 }}
          >
            Accéder au projet
          </button>
        </div>
      </div>
    </div>
  );
}
