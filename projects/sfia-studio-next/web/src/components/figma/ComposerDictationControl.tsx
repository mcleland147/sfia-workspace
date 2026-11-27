"use client";

/**
 * ML3 — dictation control; composer morphs in-place (Figma itgvCulInEnFY6DvgIegvP).
 * Idle: mic only in row. Active: full shell replaces row content (parent hides siblings).
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type ComposerDictationControlProps = {
  projectId: string;
  draft: string;
  onDraft: (next: string) => void;
  disabled?: boolean;
  enabled?: boolean;
  onActiveChange?: (active: boolean) => void;
};

type UiPhase = "idle" | "requesting" | "listening" | "finalizing" | "error";

const WAVE_BARS = 36;
const AUDIO_QUEUE_MAX = 8;
const FIGMA_DICTATION = "/figma-dictation";

function formatElapsed(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function floatTo16BitPCM(input: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(input.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]!));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

function downsampleTo24k(
  input: Float32Array,
  inputSampleRate: number,
): Float32Array {
  if (inputSampleRate === 24000) return input;
  const ratio = inputSampleRate / 24000;
  const outLen = Math.floor(input.length / ratio);
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    out[i] = input[Math.floor(i * ratio)] ?? 0;
  }
  return out;
}

function bufToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]!);
  return btoa(binary);
}

function figmaState(
  phase: UiPhase,
  provisionalHidden: boolean,
): string | undefined {
  if (phase === "requesting") return "connexion";
  if (phase === "listening") {
    return provisionalHidden ? "masquée" : "écoute-visible";
  }
  if (phase === "finalizing") return "finalisation";
  if (phase === "error") return "interruption";
  return undefined;
}

export function ComposerDictationControl(props: ComposerDictationControlProps) {
  const [phase, setPhase] = useState<UiPhase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [provisional, setProvisional] = useState("");
  const [provisionalHidden, setProvisionalHidden] = useState(false);
  const [barHeights, setBarHeights] = useState<number[]>(() =>
    Array.from({ length: WAVE_BARS }, () => 0.12),
  );
  const [elapsedMs, setElapsedMs] = useState(0);
  const [baselineSnapshot, setBaselineSnapshot] = useState("");

  const sessionIdRef = useRef<string | null>(null);
  const baselineRef = useRef("");
  const mediaRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const esRef = useRef<EventSource | null>(null);
  const provisionalAccRef = useRef("");
  const sessionStartRef = useRef<number | null>(null);
  const captureStoppedRef = useRef(false);

  const seqRef = useRef(0);
  const uploadChainRef = useRef(Promise.resolve());
  const pendingUploadsRef = useRef(0);
  /** Bumps on cancel/unmount so late async starts cannot re-enter listening. */
  const generationRef = useRef(0);

  const shellActive =
    phase === "requesting" || phase === "listening" || phase === "finalizing";

  useEffect(() => {
    props.onActiveChange?.(shellActive);
  }, [shellActive, props.onActiveChange]);

  const failCapture = useCallback(
    (message: string) => {
      captureStoppedRef.current = true;
      setError(message);
      setPhase("error");
    },
    [],
  );

  const stopMedia = useCallback(() => {
    captureStoppedRef.current = true;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    try {
      processorRef.current?.disconnect();
    } catch {
      /* */
    }
    processorRef.current = null;
    try {
      analyserRef.current?.disconnect();
    } catch {
      /* */
    }
    analyserRef.current = null;
    mediaRef.current?.getTracks().forEach((t) => t.stop());
    mediaRef.current = null;
    void audioCtxRef.current?.close().catch(() => undefined);
    audioCtxRef.current = null;
    esRef.current?.close();
    esRef.current = null;
    setBarHeights(Array.from({ length: WAVE_BARS }, () => 0.12));
  }, []);

  useEffect(() => () => stopMedia(), [stopMedia]);

  const drainUploads = useCallback(async () => {
    await uploadChainRef.current;
  }, []);

  const enqueueAudio = useCallback(
    (pcmBase64: string) => {
      const sid = sessionIdRef.current;
      if (!sid || captureStoppedRef.current) return;

      if (pendingUploadsRef.current >= AUDIO_QUEUE_MAX) {
        pendingUploadsRef.current = 0;
        uploadChainRef.current = Promise.resolve();
        failCapture("File audio saturé — dictée interrompue");
        stopMedia();
        const overflowSid = sessionIdRef.current;
        if (overflowSid) {
          void fetch(
            `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(overflowSid)}/cancel`,
            { method: "POST" },
          ).catch(() => undefined);
          sessionIdRef.current = null;
        }
        return;
      }

      seqRef.current += 1;
      const seq = seqRef.current;
      pendingUploadsRef.current += 1;

      uploadChainRef.current = uploadChainRef.current
        .then(async () => {
          if (!sessionIdRef.current) return;
          try {
            const res = await fetch(
              `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/audio`,
              {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ pcmBase64, seq }),
                keepalive: true,
              },
            );
            if (!res.ok) {
              failCapture("Envoi audio refusé");
              stopMedia();
              const badSid = sessionIdRef.current;
              if (badSid) {
                await fetch(
                  `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(badSid)}/cancel`,
                  { method: "POST" },
                ).catch(() => undefined);
                sessionIdRef.current = null;
              }
            }
          } catch {
            failCapture("Envoi audio interrompu");
            stopMedia();
          } finally {
            pendingUploadsRef.current = Math.max(0, pendingUploadsRef.current - 1);
          }
        })
        .catch(() => undefined);
    },
    [failCapture, props.projectId, stopMedia],
  );

  const cancelSessionRemote = useCallback(
    async (sid: string | null) => {
      if (!sid) return;
      await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/cancel`,
        { method: "POST" },
      ).catch(() => undefined);
    },
    [props.projectId],
  );

  const startListening = useCallback(async () => {
    if (props.disabled || props.enabled === false) return;
    const gen = ++generationRef.current;
    setError(null);
    setPhase("requesting");
    setProvisional("");
    provisionalAccRef.current = "";
    setProvisionalHidden(false);
    baselineRef.current = props.draft;
    setBaselineSnapshot(props.draft);
    captureStoppedRef.current = false;
    seqRef.current = 0;
    uploadChainRef.current = Promise.resolve();
    pendingUploadsRef.current = 0;
    sessionStartRef.current = null;

    const aborted = () => generationRef.current !== gen;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      if (aborted()) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      mediaRef.current = stream;

      const createRes = await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            baselineDraft: props.draft,
            insertOffset: props.draft.length,
            conversationKey: props.projectId,
          }),
        },
      );
      if (aborted()) {
        stopMedia();
        const early = (await createRes.json().catch(() => null)) as {
          sessionId?: string;
        } | null;
        if (early?.sessionId) {
          void cancelSessionRemote(early.sessionId);
        }
        return;
      }
      const created = (await createRes.json()) as {
        ok?: boolean;
        sessionId?: string;
        code?: string;
        message?: string;
      };
      if (!createRes.ok || !created.ok || !created.sessionId) {
        stopMedia();
        setPhase("error");
        setError(created.message || created.code || "Session refusée");
        return;
      }
      if (aborted()) {
        stopMedia();
        void cancelSessionRemote(created.sessionId);
        return;
      }
      sessionIdRef.current = created.sessionId;
      sessionStartRef.current = Date.now();

      const es = new EventSource(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(created.sessionId)}/events`,
      );
      esRef.current = es;
      es.onmessage = (msg) => {
        if (aborted()) return;
        try {
          const ev = JSON.parse(msg.data) as {
            type?: string;
            delta?: string;
            transcript?: string;
            message?: string;
            code?: string;
          };
          if (ev.type === "transcript.delta" && ev.delta) {
            provisionalAccRef.current += ev.delta;
            setProvisional(provisionalAccRef.current);
          }
          if (ev.type === "transcript.completed" && ev.transcript) {
            provisionalAccRef.current = ev.transcript;
            setProvisional(ev.transcript);
          }
          if (ev.type === "session.error") {
            setError(ev.message || ev.code || "Erreur de dictée");
            setPhase("error");
            stopMedia();
            void cancelSessionRemote(sessionIdRef.current);
            sessionIdRef.current = null;
          }
          if (ev.type === "session.expired") {
            setError("Session expirée");
            setPhase("error");
            stopMedia();
            sessionIdRef.current = null;
          }
        } catch {
          /* */
        }
      };

      const audioCtx = new AudioContext();
      if (aborted()) {
        void audioCtx.close().catch(() => undefined);
        stopMedia();
        void cancelSessionRemote(created.sessionId);
        sessionIdRef.current = null;
        return;
      }
      audioCtxRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      const freqData = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        if (aborted() || captureStoppedRef.current) return;
        if (sessionStartRef.current != null) {
          setElapsedMs(Date.now() - sessionStartRef.current);
        }
        analyser.getByteFrequencyData(freqData);
        const nextBars: number[] = [];
        const step = Math.max(1, Math.floor(freqData.length / WAVE_BARS));
        for (let i = 0; i < WAVE_BARS; i++) {
          const v = freqData[i * step] ?? 0;
          nextBars.push(Math.max(0.12, (v / 255) * 1.15));
        }
        setBarHeights(nextBars);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      const mute = audioCtx.createGain();
      mute.gain.value = 0;
      source.connect(processor);
      processor.connect(mute);
      mute.connect(audioCtx.destination);
      processor.onaudioprocess = (e) => {
        if (captureStoppedRef.current || aborted()) return;
        const input = e.inputBuffer.getChannelData(0);
        const down = downsampleTo24k(input, audioCtx.sampleRate);
        const pcm = floatTo16BitPCM(down);
        enqueueAudio(bufToBase64(pcm));
      };

      if (aborted()) {
        stopMedia();
        void cancelSessionRemote(created.sessionId);
        sessionIdRef.current = null;
        return;
      }
      setPhase("listening");
    } catch (e) {
      if (aborted()) return;
      stopMedia();
      setPhase("error");
      setError(
        e instanceof Error && e.name === "NotAllowedError"
          ? "Microphone refusé — utilisez le clavier pour continuer"
          : e instanceof Error
            ? e.message.slice(0, 160)
            : "Impossible de démarrer la dictée",
      );
    }
  }, [
    cancelSessionRemote,
    enqueueAudio,
    props.disabled,
    props.enabled,
    props.draft,
    props.projectId,
    stopMedia,
  ]);

  const cancel = useCallback(async () => {
    generationRef.current += 1;
    const sid = sessionIdRef.current;
    stopMedia();
    await cancelSessionRemote(sid);
    props.onDraft(baselineRef.current);
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
    setError(null);
    sessionStartRef.current = null;
    setElapsedMs(0);
  }, [cancelSessionRemote, props, stopMedia]);

  const finalize = useCallback(async () => {
    const sid = sessionIdRef.current;
    if (!sid || phase === "finalizing") return;
    const gen = generationRef.current;
    setPhase("finalizing");
    captureStoppedRef.current = true;
    stopMedia();
    try {
      await drainUploads();
      if (generationRef.current !== gen) return;
      const res = await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/finalize`,
        { method: "POST" },
      );
      if (generationRef.current !== gen) return;
      const body = (await res.json()) as {
        ok?: boolean;
        draft?: string;
        partial?: boolean;
        message?: string;
      };
      if (body.ok && typeof body.draft === "string") {
        props.onDraft(body.draft);
        if (body.partial) {
          setError("Transcription partielle — vérifiez le texte");
        }
      } else if (typeof body.draft === "string") {
        props.onDraft(body.draft);
      } else if (!res.ok) {
        setError(body.message || "Finalisation refusée");
      }
    } catch {
      if (generationRef.current !== gen) return;
      setError("Finalisation interrompue");
    }
    if (generationRef.current !== gen) return;
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
    sessionStartRef.current = null;
    setElapsedMs(0);
  }, [drainUploads, phase, props, stopMedia]);

  const hasBaseline = shellActive && baselineSnapshot.trim().length > 0;
  const showConnexion = phase === "requesting";

  const dataFigmaState = useMemo(
    () => figmaState(phase, provisionalHidden),
    [phase, provisionalHidden],
  );

  if (shellActive) {
    return (
      <div
        className="fig-dictation-shell"
        data-testid="composer-dictation"
        data-phase={phase}
        data-figma-state={dataFigmaState}
        role="status"
        aria-live="polite"
      >
        <div className="fig-dictation-shell-content">
          {showConnexion ? (
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
                {baselineSnapshot}
              </p>
            </>
          ) : null}

          {!provisionalHidden && !showConnexion ? (
            <>
              <p className="fig-dictation-label">Transcription en cours…</p>
              <p
                className="fig-dictation-provisional"
                data-testid="dictation-provisional"
              >
                {provisional || "\u00a0"}
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
            onClick={() => void cancel()}
            disabled={phase === "finalizing"}
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
              {formatElapsed(elapsedMs)}
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
              provisionalHidden
                ? "Afficher la transcription provisoire"
                : "Masquer la transcription provisoire"
            }
            aria-pressed={provisionalHidden}
            onClick={() => setProvisionalHidden((v) => !v)}
            disabled={phase === "requesting" || phase === "finalizing"}
          >
            <img
              src={`${FIGMA_DICTATION}/${provisionalHidden ? "expand" : "collapse"}.svg`}
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
            aria-busy={phase === "finalizing"}
            disabled={phase === "requesting" || phase === "finalizing"}
            onClick={() => void finalize()}
          >
            <img src={`${FIGMA_DICTATION}/stop.svg`} alt="" width={18} height={18} aria-hidden />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className="fig-travail-composer-mic"
        data-testid="composer-mic"
        aria-label="Dicter un message"
        disabled={Boolean(props.disabled) || props.enabled === false}
        onClick={() => void startListening()}
        title={
          props.enabled === false
            ? "Dictée non activée sur cet environnement"
            : "Dicter"
        }
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
      {error ? (
        <p
          className="fig-dictation-error"
          data-testid="dictation-error"
          role="alert"
        >
          <img
            src={`${FIGMA_DICTATION}/alert.svg`}
            alt=""
            width={14}
            height={14}
            aria-hidden
            className="fig-dictation-error-icon"
          />
          {error}
        </p>
      ) : null}
    </>
  );
}