"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  FinOpsBox,
  HarnessStatusPanel,
  IdStrip,
  VariantBanner,
} from "@/components/vertical-slice/VsShared";
import {
  DEMAND_TEXT_MAX_CHARS,
  validateDemandText,
} from "@/lib/harness/demandTextValidation";
import { runQualificationAction } from "@/lib/harness/qualifyAction";
import { formatSfiaBlocks, formatSfiaCycle } from "@/lib/harness/sfiaCanonicalLabels";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

interface QualCandidateView {
  summary?: string;
  proposedCycle?: string;
  proposedProfile?: string;
  profileJustification?: string;
  proposedBlocks?: string[];
  proposedGates?: string[];
  proposedScope?: string[];
  risks?: string[];
  questions?: string[];
  confidence?: number;
  reserves?: string[];
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
    estimatedCostEur?: number;
    callNumber?: number;
    costIsEstimate?: boolean;
  };
  authority?: {
    candidateOnly?: boolean;
    morrisDecisionRequired?: boolean;
    executionAuthorized?: boolean;
  };
  model?: string;
  candidateId?: string;
  requestId?: string;
  correlationId?: string;
}

interface QualResultView {
  ok?: boolean;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  candidate?: QualCandidateView;
  liveInvoked?: boolean;
  durationMs?: number;
  mode?: "fixture" | "live";
  demandProvenance?: {
    length?: number;
    sha256Prefix?: string;
    preview?: string;
  };
}

const CAMPUS360_EXAMPLE =
  "Je veux lancer un cycle de cadrage pour préparer le développement de Campus360.";

export function VsNouvelleDemandeScreen() {
  const { stateId, setStateId, fireStop, abandoned, confirmAbandon } = useVsDemo();
  const demandFieldId = useId();
  const demandErrorId = useId();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [demandDraft, setDemandDraft] = useState("");
  const [submittedDemand, setSubmittedDemand] = useState<string | null>(null);
  const [traceIds, setTraceIds] = useState<{ requestId: string; correlationId: string } | null>(
    null,
  );
  const [showValidation, setShowValidation] = useState(false);
  const [result, setResult] = useState<QualResultView | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.sessionStorage.getItem("sfia-vs-inc-c-qual");
      return raw ? (JSON.parse(raw) as QualResultView) : null;
    } catch {
      return null;
    }
  });

  const validation = useMemo(() => validateDemandText(demandDraft), [demandDraft]);
  const canQualify = validation.ok && !busy;

  const persistResult = useCallback((r: QualResultView | null) => {
    setResult(r);
    if (typeof window === "undefined") return;
    if (!r) window.sessionStorage.removeItem("sfia-vs-inc-c-qual");
    else window.sessionStorage.setItem("sfia-vs-inc-c-qual", JSON.stringify(r));
  }, []);

  const openConfirm = useCallback(() => {
    setShowValidation(true);
    if (!validation.ok) return;
    setConfirmOpen(true);
  }, [validation.ok]);

  const launchQualification = useCallback(
    (live: boolean) => {
      const gate = validateDemandText(demandDraft);
      setShowValidation(true);
      if (!gate.ok) {
        setConfirmOpen(false);
        return;
      }
      const requestId = `req-user-${Date.now()}`;
      const correlationId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? `corr-user-${crypto.randomUUID()}`
          : `corr-user-${Date.now()}`;
      setTraceIds({ requestId, correlationId });
      setSubmittedDemand(gate.normalized);
      setBusy(true);
      setStateId("VS-UX-VAR-LOADING");
      void runQualificationAction({
        requestId,
        correlationId,
        demandText: gate.normalized,
        confirmedByUser: true,
        live,
      })
        .then((raw) => {
          const r = raw as QualResultView;
          persistResult(r);
          if (r.ok && r.candidate) {
            setStateId("VS-UX-03");
          } else {
            setStateId("VS-UX-VAR-ERROR");
          }
        })
        .finally(() => {
          setBusy(false);
          setConfirmOpen(false);
        });
    },
    [demandDraft, persistResult, setStateId],
  );

  const candidate = result?.candidate;
  const demandLocked = busy || stateId === "VS-UX-VAR-LOADING";

  return (
    <div className={styles.panel} data-testid="vs-nouvelle-demande">
      <IdStrip />
      <HarnessStatusPanel />

      {confirmOpen ? (
        <VariantBanner tone="warn" title="Qualification GPT — confirmation explicite">
          <ul data-testid="vs-gpt-confirm-panel">
            <li>Qualification GPT réelle possible après confirmation</li>
            <li>modèle : gpt-5.4-mini</li>
            <li>maximum : 1 appel · aucun retry automatique</li>
            <li>limite : 7 500 tokens · budget max estimé : 0,05 €</li>
            <li>timeout : 30 secondes</li>
            <li>qualification candidate uniquement · décision Morris requise</li>
            <li>aucune décision automatique</li>
          </ul>
          <p className={styles.fieldLabel}>Demande qui sera envoyée</p>
          <p className={styles.fieldValue} data-testid="vs-confirm-demand-text">
            {validation.normalized}
          </p>
          <div className={styles.actions}>
            <CtaButton
              data-testid="vs-gpt-confirm-live"
              onClick={() => launchQualification(true)}
              disabled={busy}
            >
              Confirmer l&apos;appel GPT réel
            </CtaButton>
            <CtaButton
              variant="secondary"
              data-testid="vs-gpt-confirm-fixture"
              onClick={() => launchQualification(false)}
              disabled={busy}
            >
              Utiliser fixture (sans réseau)
            </CtaButton>
            <CtaButton
              variant="secondary"
              data-testid="vs-gpt-confirm-back"
              onClick={() => setConfirmOpen(false)}
            >
              Revenir modifier la demande
            </CtaButton>
            <CtaButton
              variant="danger"
              data-testid="vs-gpt-confirm-abandon"
              onClick={() => {
                setConfirmOpen(false);
                confirmAbandon();
              }}
            >
              Abandonner
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-LOADING" || busy ? (
        <VariantBanner tone="info" title="Loading — qualification GPT">
          <p className={styles.loadingPulse} data-testid="vs-qual-loading" role="status" aria-live="polite">
            <span className={styles.loadingDot} aria-hidden />
            Qualification en cours — fail-closed · aucun retry automatique
          </p>
          <FinOpsBox phase="qualification" calls={candidate?.usage?.callNumber ?? 1} />
        </VariantBanner>
      ) : null}

      {stateId === "VS-UX-VAR-ERROR" ? (
        <VariantBanner tone="error" title="Erreur fail-closed — qualification refusée">
          <p data-testid="vs-qual-error">
            {result?.errorCode ?? "INVALID_RESPONSE"}
            {result?.errorMessage ? ` — ${result.errorMessage}` : ""}
          </p>
          <p>Aucune QualificationCandidate exploitable. Aucun GO implicite.</p>
          <div className={styles.actions}>
            <CtaButton onClick={openConfirm}>Nouvelle tentative explicite</CtaButton>
            <CtaButton variant="danger" onClick={() => setStateId("VS-UX-01")}>
              Abandonner avant qualification
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-nd-hero">
        <p className={styles.heroEyebrow}>VERTICAL SLICE · INCREMENT C</p>
        <h2 id="vs-nd-hero" className={styles.heroTitle}>
          {stateId === "VS-UX-03"
            ? candidate
              ? "QualificationCandidate — revue Morris requise"
              : "Qualification proposée — revue avant gate"
            : stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
              ? "Qualification en cours"
              : "Nouvelle demande — qualification GPT bornée"}
        </h2>
        <p className={styles.heroText}>
          GPT réel = candidate uniquement. Décision Morris distincte. Aucun Cursor live.
          Aucune écriture Git distante.
        </p>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="vs-request-title">
          <p className={styles.fieldLabel}>StudioRequest</p>
          <h2 id="vs-request-title" className={styles.cardTitle}>
            Saisie libre — demande utilisateur
          </h2>

          <label className={styles.fieldLabel} htmlFor={demandFieldId}>
            Décrivez votre demande
          </label>
          <textarea
            id={demandFieldId}
            className={styles.demandTextarea}
            data-testid="vs-demand-input"
            value={demandDraft}
            disabled={demandLocked}
            aria-invalid={showValidation && !validation.ok ? true : undefined}
            aria-describedby={
              showValidation && !validation.ok ? demandErrorId : `${demandFieldId}-help`
            }
            placeholder={CAMPUS360_EXAMPLE}
            rows={5}
            onChange={(e) => {
              setDemandDraft(e.target.value);
              if (showValidation) setShowValidation(true);
            }}
          />
          <p id={`${demandFieldId}-help`} className={styles.muted}>
            Texte transmis tel quel au moteur de qualification (fixture ou GPT live). Aucune
            substitution par une demande synthétique.
          </p>
          <p className={styles.muted} data-testid="vs-demand-counter">
            {demandDraft.trim().length} / {DEMAND_TEXT_MAX_CHARS} caractères
          </p>
          {showValidation && !validation.ok ? (
            <p
              id={demandErrorId}
              className={styles.fieldError}
              data-testid="vs-demand-error"
              role="alert"
            >
              {validation.message}
            </p>
          ) : null}

          <p className={styles.fieldLabel}>Demande affichée (aperçu)</p>
          <p className={styles.fieldValue} data-testid="vs-demand-text">
            {demandDraft.trim() || "— (vide)"}
          </p>

          {submittedDemand ? (
            <>
              <p className={styles.fieldLabel}>Dernière demande qualifiée</p>
              <p className={styles.fieldValue} data-testid="vs-submitted-demand">
                {submittedDemand}
              </p>
            </>
          ) : null}

          {traceIds ? (
            <p className={styles.muted} data-testid="vs-qual-trace">
              requestId={traceIds.requestId} · correlationId={traceIds.correlationId}
            </p>
          ) : null}

          <div className={styles.actions}>
            {(stateId === "VS-UX-01" || abandoned || stateId === "VS-UX-03" || stateId === "VS-UX-VAR-ERROR") &&
              !busy && (
              <>
                <CtaButton
                  data-testid="vs-qualify-open-confirm"
                  onClick={openConfirm}
                  disabled={busy}
                  aria-disabled={!canQualify || busy}
                  title={
                    canQualify
                      ? "Ouvrir la confirmation avant qualification"
                      : validation.message || "Saisissez une demande valide"
                  }
                >
                  Qualifier la demande
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  data-testid="vs-demand-example"
                  onClick={() => {
                    setDemandDraft(CAMPUS360_EXAMPLE);
                    setShowValidation(false);
                  }}
                  disabled={demandLocked}
                >
                  Exemple Campus360
                </CtaButton>
                <CtaButton
                  variant="danger"
                  onClick={() => {
                    confirmAbandon();
                  }}
                  data-testid="vs-abandon-prequal"
                  aria-label="Abandonner le cycle avant qualification"
                >
                  Abandonner avant qualification
                </CtaButton>
              </>
            )}
            {(stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING") && !busy && (
              <>
                <CtaButton
                  variant="danger"
                  onClick={fireStop}
                  aria-label="STOP Morris pendant qualification"
                >
                  STOP Morris
                </CtaButton>
              </>
            )}
            {stateId === "VS-UX-03" && (
              <>
                <CtaButton onClick={() => setStateId("VS-UX-04")}>
                  Continuer vers le gate (après revue Morris)
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  data-testid="vs-edit-demand-again"
                  onClick={() => {
                    persistResult(null);
                    setConfirmOpen(false);
                    setStateId("VS-UX-01");
                  }}
                >
                  Modifier la demande
                </CtaButton>
              </>
            )}
          </div>
        </section>

        <aside className={styles.card} aria-label="Prévisualisation qualification">
          {candidate && (stateId === "VS-UX-03" || result?.ok) ? (
            <>
              <StatusPill tone="purple">QualificationCandidate</StatusPill>
              {result?.mode === "fixture" || result?.liveInvoked === false ? (
                <p className={styles.muted} data-testid="vs-qual-mode">
                  Mode : fixture / simulation — aucun appel GPT réel
                </p>
              ) : (
                <p className={styles.muted} data-testid="vs-qual-mode">
                  Mode : live GPT (gpt-5.4-mini)
                </p>
              )}
              <p className={styles.fieldLabel}>Modèle</p>
              <p className={styles.fieldValue} data-testid="vs-qual-model">
                {candidate.model ?? "gpt-5.4-mini"}
              </p>
              <p className={styles.fieldLabel}>Cycle proposé</p>
              <p className={styles.fieldValue} data-testid="vs-qual-cycle">
                {formatSfiaCycle(candidate.proposedCycle)}
              </p>
              <p className={styles.fieldLabel}>Profil proposé</p>
              <p className={styles.fieldValue} data-testid="vs-qual-profile">
                {candidate.proposedProfile}
              </p>
              <p className={styles.fieldLabel}>Justification</p>
              <p className={styles.fieldValue}>{candidate.profileJustification}</p>
              <p className={styles.fieldLabel}>Blocs</p>
              <p className={styles.fieldValue} data-testid="vs-qual-blocks">
                {formatSfiaBlocks(candidate.proposedBlocks)}
              </p>
              <p className={styles.fieldLabel}>Gates proposés</p>
              <p className={styles.fieldValue}>
                {(candidate.proposedGates ?? []).join(" · ")}
              </p>
              <p className={styles.fieldLabel}>Tokens / coût estimé</p>
              <p className={styles.fieldValue} data-testid="vs-qual-usage">
                {candidate.usage?.totalTokens ?? "—"} tokens · ≈ €
                {candidate.usage?.estimatedCostEur ?? "—"} (estimation, pas une facture)
              </p>
              {result?.demandProvenance ? (
                <>
                  <p className={styles.fieldLabel}>Preuve anti-substitution</p>
                  <p className={styles.fieldValue} data-testid="vs-demand-provenance">
                    len={result.demandProvenance.length} · sha256=
                    {result.demandProvenance.sha256Prefix} · preview=
                    {result.demandProvenance.preview}
                  </p>
                </>
              ) : null}
              <p className={styles.fieldLabel}>Autorité</p>
              <p className={styles.fieldValue} data-testid="vs-qual-authority">
                candidateOnly={String(candidate.authority?.candidateOnly)} ·
                morrisDecisionRequired={String(candidate.authority?.morrisDecisionRequired)} ·
                executionAuthorized={String(candidate.authority?.executionAuthorized)}
              </p>
              <p className={styles.muted} data-testid="vs-morris-still-required">
                Décision Morris encore requise — aucune exécution autorisée.
              </p>
            </>
          ) : stateId === "VS-UX-03" ? (
            <>
              <StatusPill tone="purple">Candidat GPT</StatusPill>
              <p className={styles.fieldLabel}>Aperçu démo (sans saisie)</p>
              <p className={styles.fieldValue}>
                Saisissez une demande puis lancez une qualification pour obtenir un
                QualificationCandidate réel ou fixture.
              </p>
              <p className={styles.muted}>Pas d&apos;auto-GO. Décision Morris requise.</p>
            </>
          ) : (
            <>
              <p className={styles.cardTitle}>Aperçu gouverné</p>
              <p className={styles.fieldValue}>
                Saisissez votre demande, puis confirmez explicitement avant tout appel GPT.
              </p>
              <FinOpsBox
                phase={busy ? "qualification" : "idle"}
                calls={candidate?.usage?.callNumber ?? 0}
              />
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
