"use client";

/**
 * VISUAL-LAYOUT ONLY — superseded for functional proof by `/dev/dictation-harness`
 * (real ComposerDictationControl + API). Keep for L0 Figma geometry comparison.
 *
 * DEV-only composer dictation visual harness — deterministic fixtures for Figma comparison.
 * No OpenAI, no mic, no API. Does not touch RECETTE.
 */

import { useParams } from "next/navigation";
import { useMemo } from "react";

const FIGMA_DICTATION = "/figma-dictation";
const WAVE_BARS = 36;

const DICTATION_VISUAL_STATES = [
  "repos",
  "connexion",
  "ecoute-visible",
  "ecoute-masquee",
  "finalisation",
  "permission-refusee",
] as const;

type DictationVisualState = (typeof DICTATION_VISUAL_STATES)[number];

type DictationVisualFixture = {
  state: DictationVisualState;
  figmaFrame: string;
  figmaNode: string;
  dictationActive: boolean;
  phase?: "requesting" | "listening" | "finalizing";
  figmaState?: string;
  baseline: string;
  provisional: string;
  provisionalHidden: boolean;
  showConnexion: boolean;
  elapsed: string;
  errorMessage?: string;
};

const BASELINE_FIXTURE =
  "Peux-tu analyser les points ouverts sur CampusFlow avant la prochaine revue ?";

const PROVISIONAL_FIXTURE =
  "Nous devons clarifier les accès étudiants et le calendrier des déploiements.";

const FIXTURES: Record<DictationVisualState, DictationVisualFixture> = {
  repos: {
    state: "repos",
    figmaFrame: "05.18",
    figmaNode: "1382:156",
    dictationActive: false,
    baseline: BASELINE_FIXTURE,
    provisional: "",
    provisionalHidden: false,
    showConnexion: false,
    elapsed: "00:00",
  },
  connexion: {
    state: "connexion",
    figmaFrame: "05.19",
    figmaNode: "1382:243",
    dictationActive: true,
    phase: "requesting",
    figmaState: "connexion",
    baseline: BASELINE_FIXTURE,
    provisional: "",
    provisionalHidden: false,
    showConnexion: true,
    elapsed: "00:00",
  },
  "ecoute-visible": {
    state: "ecoute-visible",
    figmaFrame: "05.21",
    figmaNode: "1382:417",
    dictationActive: true,
    phase: "listening",
    figmaState: "écoute-visible",
    baseline: BASELINE_FIXTURE,
    provisional: PROVISIONAL_FIXTURE,
    provisionalHidden: false,
    showConnexion: false,
    elapsed: "00:42",
  },
  "ecoute-masquee": {
    state: "ecoute-masquee",
    figmaFrame: "05.20",
    figmaNode: "1382:330",
    dictationActive: true,
    phase: "listening",
    figmaState: "masquée",
    baseline: BASELINE_FIXTURE,
    provisional: PROVISIONAL_FIXTURE,
    provisionalHidden: true,
    showConnexion: false,
    elapsed: "01:07",
  },
  finalisation: {
    state: "finalisation",
    figmaFrame: "05.22",
    figmaNode: "1382:500",
    dictationActive: true,
    phase: "finalizing",
    figmaState: "finalisation",
    baseline: BASELINE_FIXTURE,
    provisional: PROVISIONAL_FIXTURE,
    provisionalHidden: false,
    showConnexion: false,
    elapsed: "01:12",
  },
  "permission-refusee": {
    state: "permission-refusee",
    figmaFrame: "05.25",
    figmaNode: "1382:757",
    dictationActive: false,
    baseline: BASELINE_FIXTURE,
    provisional: "",
    provisionalHidden: false,
    showConnexion: false,
    elapsed: "00:00",
    errorMessage: "Microphone refusé — utilisez le clavier pour continuer",
  },
};

function parseDictationVisualState(raw: string | undefined): DictationVisualState | null {
  if (!raw) return null;
  return (DICTATION_VISUAL_STATES as readonly string[]).includes(raw)
    ? (raw as DictationVisualState)
    : null;
}

/** Illustrative bar heights for DEV screenshots (runtime uses live analyser). */
const ILLUSTRATIVE_BAR_HEIGHTS = Array.from({ length: WAVE_BARS }, (_, i) => {
  const t = i / WAVE_BARS;
  return Math.max(0.12, 0.25 + 0.75 * Math.abs(Math.sin(t * Math.PI * 4)));
});

function DictationShell(props: {
  fixture: DictationVisualFixture;
  barHeights: number[];
}) {
  const { fixture, barHeights } = props;
  const hasBaseline = fixture.baseline.trim().length > 0;
  const collapseIcon = fixture.provisionalHidden ? "expand" : "collapse";

  return (
    <div
      className="fig-dictation-shell"
      data-testid="composer-dictation"
      data-phase={fixture.phase}
      data-figma-state={fixture.figmaState}
      role="status"
      aria-live="polite"
    >
      <div className="fig-dictation-shell-content">
        {fixture.showConnexion ? (
          <div className="fig-dictation-connexion" data-testid="dictation-connexion">
            <img
              src={`${FIGMA_DICTATION}/loading.svg`}
              alt=""
              width={16}
              height={16}
              aria-hidden
              className="fig-dictation-connexion-icon"
            />
            <span>Connexion du microphone…</span>
          </div>
        ) : null}

        {hasBaseline ? (
          <>
            <p className="fig-dictation-label">Brouillon existant · conservé</p>
            <p className="fig-dictation-baseline" data-testid="dictation-baseline">
              {fixture.baseline}
            </p>
          </>
        ) : null}

        {!fixture.provisionalHidden && !fixture.showConnexion ? (
          <>
            <p className="fig-dictation-label">Transcription en cours…</p>
            <p className="fig-dictation-provisional" data-testid="dictation-provisional">
              {fixture.provisional || "\u00a0"}
            </p>
          </>
        ) : null}
      </div>

      <div className="fig-dictation-cmd" data-testid="dictation-command-bar">
        <button
          type="button"
          className="fig-dictation-cmd-cancel"
          data-testid="dictation-cancel"
          aria-label="Annuler la dictée"
          disabled={fixture.phase === "finalizing"}
        >
          <img src={`${FIGMA_DICTATION}/cancel.svg`} alt="" width={20} height={20} aria-hidden />
        </button>

        <div className="fig-dictation-cmd-signal" aria-hidden>
          <img
            src={`${FIGMA_DICTATION}/signal.svg`}
            alt=""
            width={8}
            height={8}
            className="fig-dictation-signal-dot"
          />
          <span className="fig-dictation-elapsed" data-testid="dictation-elapsed">
            {fixture.elapsed}
          </span>
          <div className="fig-dictation-wave" data-testid="dictation-wave">
            {barHeights.map((h, i) => (
              <span
                key={i}
                className="fig-dictation-bar"
                style={{ transform: `scaleY(${h})` }}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="fig-dictation-cmd-toggle"
          data-testid="dictation-toggle-text"
          aria-label={
            fixture.provisionalHidden
              ? "Afficher la transcription provisoire"
              : "Masquer la transcription provisoire"
          }
          aria-pressed={fixture.provisionalHidden}
          disabled={fixture.phase === "requesting" || fixture.phase === "finalizing"}
        >
          <img
            src={`${FIGMA_DICTATION}/${collapseIcon}.svg`}
            alt=""
            width={20}
            height={20}
            aria-hidden
          />
        </button>

        <button
          type="button"
          className="fig-dictation-cmd-stop"
          data-testid="dictation-stop"
          aria-label="Arrêter et finaliser la dictée"
          aria-busy={fixture.phase === "finalizing"}
          disabled={fixture.phase === "requesting" || fixture.phase === "finalizing"}
        >
          <img src={`${FIGMA_DICTATION}/stop.svg`} alt="" width={18} height={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}

function IdleComposerRow(props: {
  draft: string;
  errorMessage?: string;
}) {
  return (
  <>
    <span
      className="fig-travail-composer-plus"
      aria-hidden
      data-testid="composer-plus"
    >
      <img
        src={`${FIGMA_DICTATION}/plus.svg`}
        alt=""
        width={20}
        height={20}
        aria-hidden
      />
    </span>
    <textarea
      className="fig-travail-composer-input"
      value={props.draft}
      readOnly
      aria-label="Message à Nora"
      data-testid="thread-draft"
      rows={1}
    />
    <button
      type="button"
      className="fig-travail-composer-mic"
      data-testid="composer-mic"
      aria-label="Dicter un message"
    >
      <img
        src={`${FIGMA_DICTATION}/mic.svg`}
        alt=""
        width={24}
        height={24}
        aria-hidden
        className="fig-travail-composer-mic-icon"
      />
    </button>
    <button
      type="button"
      className="fig-travail-composer-send"
      data-testid="thread-send"
      aria-label="Envoyer"
    >
      <img
        src={`${FIGMA_DICTATION}/send.svg`}
        alt=""
        width={20}
        height={20}
        aria-hidden
        className="fig-travail-composer-send-icon"
      />
    </button>
    {props.errorMessage ? (
      <p className="fig-dictation-error" data-testid="dictation-error" role="alert">
        <img
          src={`${FIGMA_DICTATION}/alert.svg`}
          alt=""
          width={14}
          height={14}
          aria-hidden
          className="fig-dictation-error-icon"
        />
        {props.errorMessage}
      </p>
    ) : null}
  </>
  );
}

export default function DictationVisualHarnessPage() {
  const params = useParams<{ state: string }>();
  const visualState = useMemo(() => parseDictationVisualState(params.state), [params.state]);
  const barHeights = useMemo(() => ILLUSTRATIVE_BAR_HEIGHTS, []);

  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
    return (
      <p className="muted" data-testid="dictation-visual-forbidden">
        Harness visuel dictée indisponible hors DEV.
      </p>
    );
  }

  if (!visualState) {
    return (
      <p className="muted" data-testid="dictation-visual-unknown">
        État inconnu. Utilisez : {DICTATION_VISUAL_STATES.join(", ")}.
      </p>
    );
  }

  const fixture = FIXTURES[visualState];

  return (
    <div
      className="fig-page"
      data-testid="dictation-visual-page"
      data-dictation-visual-state={fixture.state}
      data-figma-frame={fixture.figmaFrame}
      data-figma-node={fixture.figmaNode}
      style={{ minHeight: "100vh", background: "#0b101b", padding: "48px 38px" }}
    >
      <header className="fig-travail-intro" style={{ marginBottom: 24, maxWidth: 972 }}>
        <p className="fig-kicker">DEV · FIXTURE DICTÉE COMPOSITEUR</p>
        <h1 className="fig-hero-title" style={{ fontSize: 28 }}>
          {fixture.figmaFrame} — {fixture.state}
        </h1>
        <p className="fig-hero-sub muted">
          Node Figma {fixture.figmaNode} · amplitude et durée illustratives
        </p>
      </header>

      <div
        className="fig-travail-composer-stack"
        data-testid="nora-composer-stack"
        style={{ maxWidth: 972 }}
      >
        <div
          className="fig-composer fig-travail-composer relative"
          data-testid="nora-composer"
          data-dictation-active={fixture.dictationActive ? "1" : "0"}
        >
          <div className="fig-travail-composer-row">
            {fixture.dictationActive ? (
              <DictationShell fixture={fixture} barHeights={barHeights} />
            ) : (
              <IdleComposerRow
                draft={fixture.baseline}
                errorMessage={fixture.errorMessage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}