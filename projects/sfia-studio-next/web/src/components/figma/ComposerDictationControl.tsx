"use client";

/**
 * ML3 — interactive dictation control for NoraConversation composer.
 * Visual contract: mic left of Envoyer; waveform from real analyser levels;
 * hide/show provisional text without stopping capture.
 */
import { useCallback, useEffect, useRef, useState } from "react";

export type ComposerDictationControlProps = {
  projectId: string;
  draft: string;
  onDraft: (next: string) => void;
  disabled?: boolean;
  enabled?: boolean;
};

type UiPhase =
  | "idle"
  | "requesting"
  | "listening"
  | "finalizing"
  | "error";

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

export function ComposerDictationControl(props: ComposerDictationControlProps) {
  const [phase, setPhase] = useState<UiPhase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [provisional, setProvisional] = useState("");
  const [textHidden, setTextHidden] = useState(false);
  const [level, setLevel] = useState(0);
  const sessionIdRef = useRef<string | null>(null);
  const baselineRef = useRef("");
  const mediaRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const esRef = useRef<EventSource | null>(null);
  const provisionalAccRef = useRef("");

  const stopMedia = useCallback(() => {
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
    setLevel(0);
  }, []);

  useEffect(() => () => stopMedia(), [stopMedia]);

  const startListening = useCallback(async () => {
    if (props.disabled || props.enabled === false) return;
    setError(null);
    setPhase("requesting");
    setProvisional("");
    provisionalAccRef.current = "";
    setTextHidden(false);
    baselineRef.current = props.draft;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
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
      sessionIdRef.current = created.sessionId;

      const es = new EventSource(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(created.sessionId)}/events`,
      );
      esRef.current = es;
      es.onmessage = (msg) => {
        try {
          const ev = JSON.parse(msg.data) as {
            type?: string;
            delta?: string;
            transcript?: string;
            message?: string;
            code?: string;
            partial?: boolean;
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
          }
          if (ev.type === "session.expired") {
            setError("Session expirée");
            setPhase("error");
            stopMedia();
          }
        } catch {
          /* */
        }
      };

      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      const tick = () => {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i]! - 128) / 128;
          sum += v * v;
        }
        setLevel(Math.min(1, Math.sqrt(sum / data.length) * 4));
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
        const sid = sessionIdRef.current;
        if (!sid) return;
        const input = e.inputBuffer.getChannelData(0);
        const down = downsampleTo24k(input, audioCtx.sampleRate);
        const pcm = floatTo16BitPCM(down);
        const pcmBase64 = bufToBase64(pcm);
        void fetch(
          `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/audio`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ pcmBase64 }),
            keepalive: true,
          },
        ).catch(() => undefined);
      };

      setPhase("listening");
    } catch (e) {
      stopMedia();
      setPhase("error");
      setError(
        e instanceof Error && e.name === "NotAllowedError"
          ? "Microphone refusé"
          : e instanceof Error
            ? e.message.slice(0, 160)
            : "Impossible de démarrer la dictée",
      );
    }
  }, [props.disabled, props.enabled, props.draft, props.projectId, stopMedia]);

  const cancel = useCallback(async () => {
    const sid = sessionIdRef.current;
    stopMedia();
    if (sid) {
      await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/cancel`,
        { method: "POST" },
      ).catch(() => undefined);
    }
    props.onDraft(baselineRef.current);
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
    setError(null);
  }, [props, stopMedia]);

  const finalize = useCallback(async () => {
    const sid = sessionIdRef.current;
    if (!sid) return;
    setPhase("finalizing");
    stopMedia();
    try {
      const res = await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/finalize`,
        { method: "POST" },
      );
      const body = (await res.json()) as {
        ok?: boolean;
        draft?: string;
        transcript?: string;
        partial?: boolean;
        message?: string;
      };
      if (body.ok && typeof body.draft === "string") {
        props.onDraft(body.draft);
        if (body.partial) setError("Transcription partielle — vérifiez le texte");
      } else if (typeof body.draft === "string") {
        props.onDraft(body.draft);
      }
    } catch {
      setError("Finalisation interrompue");
    }
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
  }, [props, stopMedia]);

  const active = phase === "listening" || phase === "finalizing" || phase === "requesting";
  const bars = Array.from({ length: 12 }, (_, i) => {
    const amp = active ? Math.max(0.12, level * (0.4 + ((i * 17) % 10) / 14)) : 0.08;
    return amp;
  });

  return (
    <div className="fig-dictation" data-testid="composer-dictation" data-phase={phase}>
      {active ? (
        <div className="fig-dictation-active" role="status" aria-live="polite">
          <div className="fig-dictation-wave" aria-hidden data-testid="dictation-wave">
            {bars.map((h, i) => (
              <span
                key={i}
                className="fig-dictation-bar"
                style={{ transform: `scaleY(${h})` }}
              />
            ))}
          </div>
          {!textHidden && provisional ? (
            <p className="fig-dictation-provisional" data-testid="dictation-provisional">
              {provisional}
            </p>
          ) : null}
          <div className="fig-dictation-actions">
            <button
              type="button"
              className="fig-dictation-toggle-text"
              data-testid="dictation-toggle-text"
              onClick={() => setTextHidden((v) => !v)}
              aria-pressed={textHidden}
            >
              {textHidden ? "Afficher le texte" : "Masquer le texte"}
            </button>
            <button
              type="button"
              className="fig-dictation-stop"
              data-testid="dictation-stop"
              onClick={() => void finalize()}
              disabled={phase === "finalizing"}
            >
              {phase === "finalizing" ? "Finalisation…" : "Arrêter"}
            </button>
            <button
              type="button"
              className="fig-dictation-cancel"
              data-testid="dictation-cancel"
              onClick={() => void cancel()}
            >
              Annuler
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="fig-travail-composer-mic"
        data-testid="composer-mic"
        aria-label={active ? "Dictée en cours" : "Dicter un message"}
        aria-pressed={active}
        disabled={Boolean(props.disabled) || props.enabled === false || active}
        onClick={() => void startListening()}
        title={
          props.enabled === false
            ? "Dictée non activée sur cet environnement"
            : "Dicter"
        }
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden focusable="false">
          <path
            fill="currentColor"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8 1Zm-4 6.5a.75.75 0 0 1 1.5 0 2.5 2.5 0 0 0 5 0 .75.75 0 0 1 1.5 0 4 4 0 0 1-3.25 3.915V13h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5H7.25v-1.585A4 4 0 0 1 4 7.5Z"
          />
        </svg>
      </button>
      {error && phase !== "listening" ? (
        <p className="fig-dictation-error" data-testid="dictation-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
