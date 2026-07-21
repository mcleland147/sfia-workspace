"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  ops1CreateFixtureActionCandidateAction,
  ops1CreateSessionAction,
  ops1CreateExecutionContractAction,
  ops1EvaluateAllowlistAction,
  ops1GetLiveConfigAction,
  ops1GetRealCursorAvailabilityAction,
  ops1GetSessionAction,
  ops1QualifyActionNotRequiredAction,
  ops1RecordExecutionGateAction,
  ops1RecordGateDecisionAction,
  ops1RefineActionCandidateAction,
  ops1RefuseExecutionAction,
  ops1RunExecutionAttemptAction,
  ops1SendMessageAction,
} from "@/lib/ops1/actions";
import type {
  ActionAllowlistEvaluation,
  ActionCandidate,
  AllowlistInputEntry,
  AllowlistMode,
  ConversationMode,
  ConversationUsageCounters,
  CycleSession,
  ExecutionAttempt,
  ExecutionContract,
  GateDecision,
  GateDecisionKind,
  JournalTurn,
  ProviderPresentation,
  SessionQualification,
  CursorAdapterMode,
} from "@/lib/ops1/types";
import {
  OPS1_I3_GO_MICROCOPY,
  OPS1_I3_GO_NE_PAS_EXEC,
  OPS1_I3_STATUS_UNAUTHORIZED,
  OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED,
  OPS1_I4_ELIGIBLE_NE_AUTHORIZED,
  OPS1_I4_EXHAUSTIVE,
  OPS1_I4_GO_I3_NE_EXEC,
  OPS1_I4_NO_EXEC,
  OPS1_I4_NOT_LISTED_FORBIDDEN,
  OPS1_I5_CONTRACT_FROZEN,
  OPS1_I5_CURSOR_BOUNDED,
  OPS1_I5_GO_DELIVERY_NE_EXEC,
  OPS1_I5_GO_LINKED_HASH,
  OPS1_I5_I6_BOUNDARY,
  OPS1_I5_NO_AUTO_RETRY,
  OPS1_I5_WORKTREE_NO_PUSH,
  OPS1_MAX_MESSAGE_CHARS,
} from "@/lib/ops1/types";
import type { GlobalModeContext } from "@/lib/ops1/globalModeBadge";
import styles from "./ops1-session.module.css";

const STORAGE_KEY = "sfia-ops1-i1-active-session";

const DEFAULT_ALLOWLIST_DRAFT: AllowlistInputEntry[] = [
  { path: "projects/campus360/README.md", mode: "READ" },
  { path: "projects/campus360/01-opportunity-and-vision.md", mode: "MODIFY" },
  {
    path: "projects/campus360/04-ops1-i5-execution-proof.md",
    mode: "CREATE",
  },
];

const DEFAULT_I5_OBJECTIVE =
  "Créer une preuve documentaire minimale de la première exécution Cursor réelle OPS1 I5 (Campus360).";

const DEFAULT_I5_INSTRUCTIONS = `# Preuve d’exécution OPS1 I5

Ce document a été créé dans le cadre de la première exécution Cursor réelle et bornée du cycle OPS1 I5.

## Périmètre

- Projet pilote : Campus360
- Opération autorisée : création d’un fichier Markdown
- Exécution : worktree local dédié
- Effets Git distants : aucun
- Commit automatique : aucun

## Finalité

Vérifier que SFIA Studio peut exécuter une action Cursor réelle après :

1. validation de l’allowlist ;
2. génération d’un contrat final ;
3. calcul du contractHash ;
4. décision Morris explicitement liée au contrat ;
5. revalidation fail-closed avant exécution.

Ce document constitue une preuve technique OPS1 I5. Il ne modifie pas la baseline documentaire Campus360 et ne constitue ni une validation d’OPS1 complet, ni une validation MVP ou production.`;

function modeCategoryLabel(mode: AllowlistMode): string {
  if (mode === "READ") return "CONSULTATION";
  if (mode === "CREATE") return "CRÉATION";
  return "MODIFICATION";
}

type UiPhase =
  | "boot"
  | "idle"
  | "creating"
  | "open"
  | "sending"
  | "error_create"
  | "error_journal";

function roleLabel(
  role: JournalTurn["role"],
  presentation: ProviderPresentation,
): string {
  if (role === "user") return "Vous";
  if (role === "assistant_fixture") return "Assistant fixture";
  if (presentation === "test_provider") return "Assistant test";
  return "Assistant live";
}

function actionStatusLabel(
  candidate: ActionCandidate,
  decision: GateDecision | null,
): string {
  if (candidate.status === "APPROVED" || decision?.kind === "GO") {
    return OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED;
  }
  if (candidate.status === "NOT_REQUIRED") {
    return "ACTION NON REQUISE";
  }
  if (candidate.status === "REJECTED") {
    return "ACTION REFUSÉE (NO_GO)";
  }
  if (candidate.status === "ABANDONED") {
    return "ACTION ABANDONNÉE";
  }
  if (candidate.status === "CHANGES_REQUESTED") {
    return "CORRECTIONS DEMANDÉES";
  }
  return OPS1_I3_STATUS_UNAUTHORIZED;
}

function gateAvailable(candidate: ActionCandidate): boolean {
  return (
    candidate.status === "PROPOSED" ||
    candidate.status === "UNDER_REVIEW" ||
    candidate.status === "CHANGES_REQUESTED" ||
    candidate.status === "APPROVED"
  );
}

export function Ops1SessionScreen({
  onGlobalModeContextChange,
}: {
  onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
} = {}) {
  const [phase, setPhase] = useState<UiPhase>("boot");
  const [session, setSession] = useState<CycleSession | null>(null);
  const [turns, setTurns] = useState<JournalTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [createMode, setCreateMode] = useState<ConversationMode>("fixture");
  const [liveAvailable, setLiveAvailable] = useState(false);
  const [liveMissing, setLiveMissing] = useState<string[]>([]);
  const [testProvider, setTestProvider] = useState(false);
  const [presentation, setPresentation] =
    useState<ProviderPresentation>("fixture");
  const [lastUsage, setLastUsage] = useState<ConversationUsageCounters | null>(
    null,
  );
  const [qualification, setQualification] =
    useState<SessionQualification | null>(null);
  const [candidates, setCandidates] = useState<ActionCandidate[]>([]);
  const [decisionsByAction, setDecisionsByAction] = useState<
    Record<string, GateDecision | null>
  >({});
  const [allowlistByAction, setAllowlistByAction] = useState<
    Record<string, ActionAllowlistEvaluation | null>
  >({});
  const [allowlistDraft, setAllowlistDraft] = useState<AllowlistInputEntry[]>(
    DEFAULT_ALLOWLIST_DRAFT,
  );
  const [contractByAction, setContractByAction] = useState<
    Record<string, ExecutionContract | null>
  >({});
  const [attemptByContract, setAttemptByContract] = useState<
    Record<string, ExecutionAttempt | null>
  >({});
  const [i5Objective, setI5Objective] = useState(DEFAULT_I5_OBJECTIVE);
  const [i5Instructions, setI5Instructions] = useState(DEFAULT_I5_INSTRUCTIONS);
  const [i5AdapterMode, setI5AdapterMode] =
    useState<CursorAdapterMode>("fixture");
  const [realCursorAvail, setRealCursorAvail] = useState<{
    flagEnabled: boolean;
    binPath: string | null;
    available: boolean;
  } | null>(null);
  const [i5Error, setI5Error] = useState<string | null>(null);
  const [gateMicrocopy, setGateMicrocopy] = useState<string | null>(null);
  const [execRefuseMsg, setExecRefuseMsg] = useState<string | null>(null);
  const [refineDraft, setRefineDraft] = useState({
    title: "",
    objective: "",
    scopeSummary: "",
    riskSummary: "",
  });
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    onGlobalModeContextChange?.({
      hasSession: Boolean(session),
      createMode,
      presentation,
      testProvider,
      liveAvailable,
    });
  }, [
    session,
    createMode,
    presentation,
    testProvider,
    liveAvailable,
    onGlobalModeContextChange,
  ]);

  const applyI3 = useCallback(
    (data: {
      qualification: SessionQualification | null;
      candidates: ActionCandidate[];
      latestDecisionsByAction: Record<string, GateDecision | null>;
      latestAllowlistByAction?: Record<
        string,
        ActionAllowlistEvaluation | null
      >;
      latestContractByAction?: Record<string, ExecutionContract | null>;
      latestAttemptByContract?: Record<string, ExecutionAttempt | null>;
    }) => {
      setQualification(data.qualification);
      setCandidates(data.candidates);
      setDecisionsByAction(data.latestDecisionsByAction);
      setAllowlistByAction(data.latestAllowlistByAction ?? {});
      setContractByAction(data.latestContractByAction ?? {});
      setAttemptByContract(data.latestAttemptByContract ?? {});
      const latest = data.candidates[data.candidates.length - 1];
      if (latest) {
        setRefineDraft({
          title: latest.title,
          objective: latest.objective,
          scopeSummary: latest.scopeSummary,
          riskSummary: latest.riskSummary,
        });
      }
    },
    [],
  );

  const loadBundle = useCallback(
    async (sessionId: string) => {
      const result = await ops1GetSessionAction(sessionId);
      if (!result.ok) {
        setError(result.message);
        setSession(null);
        setTurns([]);
        setQualification(null);
        setCandidates([]);
        setDecisionsByAction({});
        setAllowlistByAction({});
        setContractByAction({});
        setAttemptByContract({});
        setPhase("idle");
        if (typeof window !== "undefined") {
          window.sessionStorage.removeItem(STORAGE_KEY);
        }
        return;
      }
      setSession(result.data.session);
      setTurns(result.data.turns);
      setPresentation(result.data.presentation);
      applyI3(result.data);
      setError(null);
      setPhase("open");
    },
    [applyI3],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cfg = await ops1GetLiveConfigAction();
      if (!cancelled && cfg.ok) {
        setLiveAvailable(cfg.data.available);
        setLiveMissing(cfg.data.missing);
        setTestProvider(cfg.data.testProvider);
      }
      const cursor = await ops1GetRealCursorAvailabilityAction();
      if (!cancelled && cursor.ok) {
        setRealCursorAvail(cursor.data);
      }
      const stored =
        typeof window !== "undefined"
          ? window.sessionStorage.getItem(STORAGE_KEY)
          : null;
      if (stored) {
        if (!cancelled) await loadBundle(stored);
        return;
      }
      if (!cancelled) setPhase("idle");
    })();
    return () => {
      cancelled = true;
    };
  }, [loadBundle]);

  const onCreate = () => {
    if (createMode === "live" && !liveAvailable) {
      setError(
        `Création live impossible (variables manquantes : ${liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).`,
      );
      setPhase("error_create");
      return;
    }
    setError(null);
    setLastUsage(null);
    setGateMicrocopy(null);
    setExecRefuseMsg(null);
    setQualification(null);
    setCandidates([]);
    setDecisionsByAction({});
    setAllowlistByAction({});
    setContractByAction({});
    setAttemptByContract({});
    setI5Error(null);
    setPhase("creating");
    startTransition(async () => {
      const result = await ops1CreateSessionAction({ mode: createMode });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_create");
        return;
      }
      window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
      setSession(result.data.session);
      setTurns([]);
      setPresentation(
        result.data.session.conversationMode === "fixture"
          ? "fixture"
          : testProvider
            ? "test_provider"
            : "openai_live",
      );
      setPhase("open");
    });
  };

  const onSend = () => {
    if (!session) return;
    setError(null);
    setPhase("sending");
    startTransition(async () => {
      const result = await ops1SendMessageAction({
        sessionId: session.sessionId,
        content: draft,
        mode: session.conversationMode,
      });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_journal");
        return;
      }
      setDraft("");
      setLastUsage(result.data.usage);
      setPresentation(result.data.presentation);
      await loadBundle(session.sessionId);
      if (result.data.assistantError) {
        setError(result.data.assistantError);
        setPhase("error_journal");
      } else {
        setError(null);
        setPhase("open");
      }
    });
  };

  const onClearLocalPointer = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setTurns([]);
    setError(null);
    setLastUsage(null);
    setPresentation("fixture");
    setQualification(null);
    setCandidates([]);
    setDecisionsByAction({});
    setGateMicrocopy(null);
    setExecRefuseMsg(null);
    setPhase("idle");
  };

  const onQualifyNotRequired = () => {
    if (!session) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1QualifyActionNotRequiredAction({
        sessionId: session.sessionId,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setGateMicrocopy(null);
      await loadBundle(session.sessionId);
    });
  };

  const onCreateCandidate = () => {
    if (!session) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1CreateFixtureActionCandidateAction({
        sessionId: session.sessionId,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setGateMicrocopy(null);
      await loadBundle(session.sessionId);
    });
  };

  const onRefine = () => {
    if (!session) return;
    const candidate = candidates[candidates.length - 1];
    if (!candidate) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1RefineActionCandidateAction({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        ...refineDraft,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setGateMicrocopy(null);
      await loadBundle(session.sessionId);
    });
  };

  const onGate = (kind: GateDecisionKind) => {
    if (!session) return;
    const candidate = candidates[candidates.length - 1];
    if (!candidate) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1RecordGateDecisionAction({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        kind,
        motif:
          kind === "CORRIGER"
            ? "Corrections demandées par Morris"
            : kind === "NO_GO"
              ? "Proposition refusée"
              : kind === "ABANDONNER"
                ? "Proposition abandonnée"
                : null,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setGateMicrocopy(result.data.microcopy);
      await loadBundle(session.sessionId);
    });
  };

  const onRefuseExecution = () => {
    if (!session) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1RefuseExecutionAction({
        sessionId: session.sessionId,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setExecRefuseMsg(result.data.message);
    });
  };

  const onEvaluateAllowlist = () => {
    if (!session) return;
    const candidate = candidates[candidates.length - 1];
    if (!candidate) return;
    setError(null);
    startTransition(async () => {
      const result = await ops1EvaluateAllowlistAction({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        entries: allowlistDraft,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      await loadBundle(session.sessionId);
    });
  };

  const updateDraftRow = (
    index: number,
    patch: Partial<AllowlistInputEntry>,
  ) => {
    setAllowlistDraft((rows) =>
      rows.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  };

  const addDraftRow = () => {
    setAllowlistDraft((rows) => [
      ...rows,
      { path: "projects/campus360/", mode: "READ" },
    ]);
  };

  const removeDraftRow = (index: number) => {
    setAllowlistDraft((rows) => rows.filter((_, i) => i !== index));
  };

  const lockedMode = session?.conversationMode;
  const isFixtureSession = lockedMode === "fixture";
  const isLiveSession = lockedMode === "live";
  const isTestPresentation = presentation === "test_provider";
  const isOpenAiLive = presentation === "openai_live";
  const activeCandidate = candidates[candidates.length - 1] ?? null;
  const activeDecision = activeCandidate
    ? (decisionsByAction[activeCandidate.actionCandidateId] ?? null)
    : null;
  const canRefine =
    activeCandidate &&
    (activeCandidate.status === "PROPOSED" ||
      activeCandidate.status === "UNDER_REVIEW" ||
      activeCandidate.status === "CHANGES_REQUESTED");
  const canGate = activeCandidate && gateAvailable(activeCandidate);
  const showGoButtons =
    activeCandidate &&
    (activeCandidate.status === "PROPOSED" ||
      activeCandidate.status === "UNDER_REVIEW" ||
      activeCandidate.status === "CHANGES_REQUESTED");
  const showCorrigerOnly =
    activeCandidate && activeCandidate.status === "APPROVED";
  const activeAllowlist = activeCandidate
    ? (allowlistByAction[activeCandidate.actionCandidateId] ?? null)
    : null;
  const showAllowlistPanel = Boolean(activeCandidate);
  const activeContract = activeCandidate
    ? (contractByAction[activeCandidate.actionCandidateId] ?? null)
    : null;
  const activeAttempt = activeContract
    ? (attemptByContract[activeContract.contractId] ?? null)
    : null;
  const canBuildI5Contract =
    Boolean(activeCandidate) &&
    activeCandidate?.status === "APPROVED" &&
    activeAllowlist?.status === "VALID";
  const canRecordI5Gate =
    Boolean(activeContract) && activeContract?.status === "READY_FOR_GATE";
  const canRunI5 =
    Boolean(activeContract) &&
    activeContract?.status === "APPROVED" &&
    (!activeAttempt ||
      !["RUNNING", "SUCCEEDED", "PREPARING", "REVALIDATING"].includes(
        activeAttempt.status,
      ));

  const onCreateI5Contract = () => {
    if (!session || !activeCandidate) return;
    setI5Error(null);
    startTransition(async () => {
      const result = await ops1CreateExecutionContractAction({
        sessionId: session.sessionId,
        actionCandidateId: activeCandidate.actionCandidateId,
        actionObjective: i5Objective,
        actionInstructions: i5Instructions,
        adapterMode: i5AdapterMode,
      });
      if (!result.ok) {
        setI5Error(result.message);
        return;
      }
      setContractByAction((prev) => ({
        ...prev,
        [activeCandidate.actionCandidateId]: result.data.contract,
      }));
    });
  };

  const onRecordI5Gate = () => {
    if (!session || !activeCandidate || !activeContract) return;
    setI5Error(null);
    startTransition(async () => {
      const result = await ops1RecordExecutionGateAction({
        sessionId: session.sessionId,
        contractId: activeContract.contractId,
        contractHash: activeContract.contractHash,
        actionCandidateId: activeCandidate.actionCandidateId,
        actionVersion: activeCandidate.version,
        baseHeadSha: activeContract.baseHeadSha,
      });
      if (!result.ok) {
        setI5Error(result.message);
        return;
      }
      setContractByAction((prev) => ({
        ...prev,
        [activeCandidate.actionCandidateId]: result.data.contract,
      }));
    });
  };

  const onRunI5Execution = () => {
    if (!session || !activeContract) return;
    setI5Error(null);
    startTransition(async () => {
      const result = await ops1RunExecutionAttemptAction({
        sessionId: session.sessionId,
        contractId: activeContract.contractId,
        adapterMode: activeContract.adapterMode,
      });
      if (!result.ok) {
        setI5Error(result.message);
        return;
      }
      setAttemptByContract((prev) => ({
        ...prev,
        [activeContract.contractId]: result.data.attempt,
      }));
    });
  };

  return (
    <div className={styles.root} data-testid="ops1-session-root">
      <header className={styles.header}>
        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I5</p>
        <h2 className={styles.title} id="ops1-session-heading">
          Session OPS1
        </h2>
        <p className={styles.lede}>
          Contrat final, GO lié au hash, worktree local et exécution Cursor bornée.
          {OPS1_I5_GO_DELIVERY_NE_EXEC}. {OPS1_I5_I6_BOUNDARY}.
        </p>
        <div className={styles.badgeRow} aria-live="polite">
          {!session ? (
            <>
              <span data-testid="ops1-badge-fixture">
                <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
              </span>
              {testProvider ? (
                <span data-testid="ops1-badge-test-provider">
                  <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
                </span>
              ) : null}
              {!liveAvailable ? (
                <span data-testid="ops1-badge-live-unavailable">
                  <StatusPill tone="muted">LIVE INDISPONIBLE</StatusPill>
                </span>
              ) : testProvider ? (
                <span data-testid="ops1-badge-live-ready">
                  <StatusPill tone="blueFlush">
                    LIVE TECHNIQUE (TEST)
                  </StatusPill>
                </span>
              ) : (
                <span data-testid="ops1-badge-live-ready">
                  <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
                </span>
              )}
            </>
          ) : null}
          {session && isFixtureSession ? (
            <span data-testid="ops1-badge-fixture">
              <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isTestPresentation ? (
            <span data-testid="ops1-badge-test-provider">
              <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isOpenAiLive ? (
            <span data-testid="ops1-badge-live">
              <StatusPill tone="green">GPT LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isOpenAiLive ? (
            <span data-testid="ops1-badge-live-ready">
              <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
            </span>
          ) : null}
          {session ? (
            <span data-testid="ops1-badge-session-open">
              <StatusPill tone="green">OPEN</StatusPill>
            </span>
          ) : null}
        </div>
      </header>

      {phase === "boot" || (pending && phase === "creating") ? (
        <p className={styles.muted} data-testid="ops1-loading">
          {phase === "creating" ? "Création de la session…" : "Chargement…"}
        </p>
      ) : null}

      {(phase === "idle" || phase === "error_create") && !session ? (
        <section
          className={styles.panel}
          data-testid="ops1-empty-state"
          aria-labelledby="ops1-empty-title"
        >
          <h2 id="ops1-empty-title" className={styles.panelTitle}>
            Aucune session active
          </h2>
          <p className={styles.muted}>
            Projet cible : <strong>sfia-studio-ops1</strong>. Choisissez le mode
            avant de créer la session — il sera ensuite immuable.
          </p>

          <div
            className={styles.modeRow}
            role="radiogroup"
            aria-label="Choix du mode de session"
            data-testid="ops1-create-mode-selector"
          >
            <label className={styles.modeOption}>
              <input
                type="radio"
                name="ops1-create-mode"
                value="fixture"
                checked={createMode === "fixture"}
                data-testid="ops1-create-mode-fixture"
                onChange={() => setCreateMode("fixture")}
              />
              Fixture locale — test non live
            </label>
            <label className={styles.modeOption}>
              <input
                type="radio"
                name="ops1-create-mode"
                value="live"
                checked={createMode === "live"}
                data-testid="ops1-create-mode-live"
                disabled={!liveAvailable}
                onChange={() => {
                  if (liveAvailable) setCreateMode("live");
                }}
              />
              GPT live — appel fournisseur réel
              {testProvider ? " (environnement de test)" : ""}
            </label>
          </div>

          {!liveAvailable ? (
            <p
              className={styles.warn}
              data-testid="ops1-live-unavailable-notice"
            >
              Configuration live indisponible (
              {liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).
              L’option GPT live est désactivée. Aucune valeur secrète n’est
              affichée.
            </p>
          ) : null}

          {testProvider ? (
            <p className={styles.warn} data-testid="ops1-test-env-notice">
              Environnement de test — aucun appel OpenAI. Les réponses du
              provider fake ne sont jamais présentées comme GPT live.
            </p>
          ) : null}

          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}
          <CtaButton
            onClick={onCreate}
            disabled={pending || (createMode === "live" && !liveAvailable)}
            data-testid="ops1-create-session"
          >
            {createMode === "live"
              ? testProvider
                ? "Créer session live (test provider)"
                : "Créer session GPT live"
              : "Créer session fixture"}
          </CtaButton>
        </section>
      ) : null}

      {session ? (
        <>
          <section
            className={styles.panel}
            data-testid="ops1-open-session"
            aria-labelledby="ops1-open-title"
          >
            <h2 id="ops1-open-title" className={styles.panelTitle}>
              Conversation
            </h2>
            <dl className={styles.meta}>
              <div>
                <dt>sessionId</dt>
                <dd data-testid="ops1-session-id">{session.sessionId}</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd data-testid="ops1-session-status">{session.status}</dd>
              </div>
              <div>
                <dt>Créée</dt>
                <dd>{session.createdAt}</dd>
              </div>
              <div>
                <dt>Projet</dt>
                <dd>{session.projectKey}</dd>
              </div>
            </dl>

            <div
              className={styles.lockedMode}
              data-testid="ops1-mode-locked"
              aria-live="polite"
            >
              <p
                className={styles.lockedModeLabel}
                data-testid="ops1-mode-label"
              >
                {session.conversationMode === "fixture"
                  ? "Mode de session : FIXTURE — verrouillé"
                  : isTestPresentation
                    ? "Mode de session : LIVE TECHNIQUE (TEST) — verrouillé"
                    : "Mode de session : GPT LIVE — verrouillé"}
              </p>
              <p className={styles.hint} data-testid="ops1-mode-lock-hint">
                Le mode ne peut pas être modifié dans cette session. Créez une
                nouvelle session pour changer de mode.
              </p>
              <div
                className={styles.modeRow}
                role="group"
                aria-label="Mode de session verrouillé"
                data-testid="ops1-mode-selector"
              >
                <label className={styles.modeOption}>
                  <input
                    type="radio"
                    name="ops1-mode-locked"
                    value="fixture"
                    checked={session.conversationMode === "fixture"}
                    disabled
                    data-testid="ops1-mode-fixture"
                    readOnly
                  />
                  Fixture / non live
                </label>
                <label className={styles.modeOption}>
                  <input
                    type="radio"
                    name="ops1-mode-locked"
                    value="live"
                    checked={session.conversationMode === "live"}
                    disabled
                    data-testid="ops1-mode-live"
                    readOnly
                  />
                  Live GPT
                </label>
              </div>
            </div>

            {isTestPresentation ? (
              <p className={styles.warn} data-testid="ops1-test-env-notice">
                Environnement de test — aucun appel OpenAI.
              </p>
            ) : null}

            <div className={styles.journal} data-testid="ops1-journal">
              <h3 className={styles.journalTitle}>Journal</h3>
              {turns.length === 0 ? (
                <p className={styles.muted} data-testid="ops1-journal-empty">
                  Aucun tour pour l’instant.
                </p>
              ) : (
                <ol className={styles.turnList}>
                  {turns.map((turn) => (
                    <li
                      key={turn.turnId}
                      className={
                        turn.role === "user"
                          ? styles.turnUser
                          : styles.turnAssistant
                      }
                      data-testid="ops1-turn"
                      data-role={turn.role}
                      data-sequence={turn.sequence}
                      data-fixture={turn.fixture ? "1" : "0"}
                    >
                      <div className={styles.turnMeta}>
                        <span>#{turn.sequence}</span>
                        <span>{roleLabel(turn.role, presentation)}</span>
                        {turn.role === "assistant_fixture" ? (
                          <span className={styles.fixtureTag}>
                            FIXTURE / NON LIVE
                          </span>
                        ) : null}
                        {turn.role === "assistant_live" &&
                        isTestPresentation ? (
                          <span className={styles.testTag}>TEST / FAKE</span>
                        ) : null}
                        {turn.role === "assistant_live" && isOpenAiLive ? (
                          <span className={styles.liveTag}>GPT LIVE</span>
                        ) : null}
                      </div>
                      <p className={styles.turnContent}>{turn.content}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {lastUsage ? (
              <dl className={styles.usage} data-testid="ops1-usage">
                <div>
                  <dt>Provider</dt>
                  <dd>{lastUsage.provider}</dd>
                </div>
                <div>
                  <dt>Modèle</dt>
                  <dd>{lastUsage.model ?? "—"}</dd>
                </div>
                <div>
                  <dt>Tokens in/out/total</dt>
                  <dd>
                    {lastUsage.inputTokens ?? "—"} /{" "}
                    {lastUsage.outputTokens ?? "—"} /{" "}
                    {lastUsage.totalTokens ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt>Durée (ms)</dt>
                  <dd>{lastUsage.durationMs ?? "—"}</dd>
                </div>
              </dl>
            ) : null}

            {error ? (
              <p className={styles.error} role="alert" data-testid="ops1-error">
                {error}
              </p>
            ) : null}

            {phase === "sending" ? (
              <p className={styles.muted} data-testid="ops1-sending">
                Envoi en cours…
              </p>
            ) : null}

            <form
              className={styles.composer}
              onSubmit={(e) => {
                e.preventDefault();
                onSend();
              }}
            >
              <label className={styles.label} htmlFor="ops1-message">
                Message (
                {isFixtureSession
                  ? "fixture locale"
                  : isTestPresentation
                    ? "test provider / non live"
                    : "GPT live serveur"}
                )
              </label>
              <textarea
                id="ops1-message"
                className={styles.textarea}
                data-testid="ops1-message-input"
                value={draft}
                maxLength={OPS1_MAX_MESSAGE_CHARS}
                rows={4}
                disabled={pending || phase === "sending"}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Saisir un tour utilisateur…"
              />
              <div className={styles.composerActions}>
                <CtaButton
                  type="submit"
                  disabled={pending || !draft.trim()}
                  data-testid="ops1-send-message"
                >
                  {isFixtureSession
                    ? "Envoyer (fixture)"
                    : isTestPresentation
                      ? "Envoyer (test provider)"
                      : "Envoyer (GPT live)"}
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={onClearLocalPointer}
                  data-testid="ops1-clear-pointer"
                >
                  Revenir à l’écran vide
                </CtaButton>
              </div>
              <p className={styles.hint} data-testid="ops1-no-execution-hint">
                Un message du type « GO » ou « exécute Cursor » reste du texte
                conversationnel — il ne crée aucune décision de gate. Max{" "}
                {OPS1_MAX_MESSAGE_CHARS} caractères.
              </p>
            </form>
          </section>

          <section
            className={`${styles.panel} ${styles.i3Panel}`}
            data-testid="ops1-i3-controls"
            aria-labelledby="ops1-i3-controls-title"
          >
            <h2 id="ops1-i3-controls-title" className={styles.panelTitle}>
              Qualification I3 (fixture)
            </h2>
            <p className={styles.muted}>
              Détermine si une action structurée est nécessaire. Aucune
              exécution n’est déclenchée.
            </p>
            {qualification ? (
              <p
                className={styles.qualificationBadge}
                data-testid="ops1-i3-qualification"
                data-qualification={qualification.qualification}
              >
                Qualification : {qualification.qualification}
              </p>
            ) : (
              <p className={styles.muted} data-testid="ops1-i3-qualification-empty">
                Aucune qualification enregistrée.
              </p>
            )}
            <div className={styles.composerActions}>
              <CtaButton
                variant="secondary"
                onClick={onQualifyNotRequired}
                disabled={pending}
                data-testid="ops1-i3-qualify-not-required"
              >
                ACTION_NOT_REQUIRED
              </CtaButton>
              <CtaButton
                onClick={onCreateCandidate}
                disabled={pending}
                data-testid="ops1-i3-create-candidate"
              >
                Créer ActionCandidate (fixture)
              </CtaButton>
            </div>
          </section>

          {activeCandidate ? (
            <section
              className={`${styles.panel} ${styles.actionPanel}`}
              data-testid="ops1-action-panel"
              aria-labelledby="ops1-action-title"
            >
              <h2 id="ops1-action-title" className={styles.panelTitle}>
                Proposition d’action
              </h2>
              <p
                className={styles.actionStatus}
                data-testid="ops1-action-status"
                data-status={activeCandidate.status}
              >
                {actionStatusLabel(activeCandidate, activeDecision)}
              </p>
              <p className={styles.goNeExec} data-testid="ops1-go-ne-exec">
                {OPS1_I3_GO_NE_PAS_EXEC}
              </p>
              <dl className={styles.meta}>
                <div>
                  <dt>actionCandidateId</dt>
                  <dd data-testid="ops1-action-id">
                    {activeCandidate.actionCandidateId}
                  </dd>
                </div>
                <div>
                  <dt>Statut candidat</dt>
                  <dd data-testid="ops1-action-candidate-status">
                    {activeCandidate.status}
                  </dd>
                </div>
                <div>
                  <dt>Version</dt>
                  <dd data-testid="ops1-action-version">
                    {activeCandidate.version}
                  </dd>
                </div>
              </dl>

              {canRefine ? (
                <div
                  className={styles.refineForm}
                  data-testid="ops1-action-refine"
                >
                  <label className={styles.label} htmlFor="ops1-action-title-input">
                    Titre
                  </label>
                  <input
                    id="ops1-action-title-input"
                    className={styles.fieldInput}
                    data-testid="ops1-action-title-input"
                    value={refineDraft.title}
                    onChange={(e) =>
                      setRefineDraft((d) => ({ ...d, title: e.target.value }))
                    }
                  />
                  <label className={styles.label} htmlFor="ops1-action-objective">
                    Objectif
                  </label>
                  <textarea
                    id="ops1-action-objective"
                    className={styles.textarea}
                    rows={2}
                    data-testid="ops1-action-objective-input"
                    value={refineDraft.objective}
                    onChange={(e) =>
                      setRefineDraft((d) => ({
                        ...d,
                        objective: e.target.value,
                      }))
                    }
                  />
                  <label className={styles.label} htmlFor="ops1-action-scope">
                    Périmètre
                  </label>
                  <textarea
                    id="ops1-action-scope"
                    className={styles.textarea}
                    rows={2}
                    data-testid="ops1-action-scope-input"
                    value={refineDraft.scopeSummary}
                    onChange={(e) =>
                      setRefineDraft((d) => ({
                        ...d,
                        scopeSummary: e.target.value,
                      }))
                    }
                  />
                  <label className={styles.label} htmlFor="ops1-action-risk">
                    Risques
                  </label>
                  <textarea
                    id="ops1-action-risk"
                    className={styles.textarea}
                    rows={2}
                    data-testid="ops1-action-risk-input"
                    value={refineDraft.riskSummary}
                    onChange={(e) =>
                      setRefineDraft((d) => ({
                        ...d,
                        riskSummary: e.target.value,
                      }))
                    }
                  />
                  <CtaButton
                    onClick={onRefine}
                    disabled={pending}
                    data-testid="ops1-action-refine-submit"
                  >
                    Enregistrer raffinement
                  </CtaButton>
                </div>
              ) : (
                <dl className={styles.actionFields} data-testid="ops1-action-readonly">
                  <div>
                    <dt>Titre</dt>
                    <dd data-testid="ops1-action-title">{activeCandidate.title}</dd>
                  </div>
                  <div>
                    <dt>Objectif</dt>
                    <dd data-testid="ops1-action-objective">
                      {activeCandidate.objective}
                    </dd>
                  </div>
                  <div>
                    <dt>Périmètre</dt>
                    <dd data-testid="ops1-action-scope">
                      {activeCandidate.scopeSummary}
                    </dd>
                  </div>
                  <div>
                    <dt>Risques</dt>
                    <dd data-testid="ops1-action-risk">
                      {activeCandidate.riskSummary}
                    </dd>
                  </div>
                </dl>
              )}
            </section>
          ) : null}

          {showAllowlistPanel && activeCandidate ? (
            <section
              className={`${styles.panel} ${styles.allowlistPanel}`}
              data-testid="ops1-i4-allowlist"
              aria-labelledby="ops1-i4-allowlist-title"
            >
              <h2 id="ops1-i4-allowlist-title" className={styles.panelTitle}>
                Allowlist Campus360 (I4)
              </h2>
              <p className={styles.muted} data-testid="ops1-i4-allowlist-lede">
                {OPS1_I4_ELIGIBLE_NE_AUTHORIZED}. {OPS1_I4_NOT_LISTED_FORBIDDEN}.{" "}
                {OPS1_I4_EXHAUSTIVE}. {OPS1_I4_NO_EXEC}. {OPS1_I4_GO_I3_NE_EXEC}.
              </p>
              <ul className={styles.microcopyList} aria-label="Règles I4">
                <li>{OPS1_I4_ELIGIBLE_NE_AUTHORIZED}</li>
                <li>{OPS1_I4_NOT_LISTED_FORBIDDEN}</li>
                <li>{OPS1_I4_EXHAUSTIVE}</li>
                <li>{OPS1_I4_NO_EXEC}</li>
                <li>{OPS1_I4_GO_I3_NE_EXEC}</li>
              </ul>

              <div className={styles.allowlistDraft} role="group" aria-label="Saisie allowlist">
                {allowlistDraft.map((row, index) => (
                  <div
                    key={`alw-draft-${index}`}
                    className={styles.allowlistDraftRow}
                    data-testid={`ops1-i4-draft-row-${index}`}
                  >
                    <label className={styles.field}>
                      <span>Chemin</span>
                      <input
                        value={row.path}
                        onChange={(e) =>
                          updateDraftRow(index, { path: e.target.value })
                        }
                        aria-label={`Chemin allowlist ${index + 1}`}
                        data-testid={`ops1-i4-draft-path-${index}`}
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Mode</span>
                      <select
                        value={row.mode}
                        onChange={(e) =>
                          updateDraftRow(index, {
                            mode: e.target.value as AllowlistMode,
                          })
                        }
                        aria-label={`Mode allowlist ${index + 1}`}
                        data-testid={`ops1-i4-draft-mode-${index}`}
                      >
                        <option value="READ">CONSULTATION (READ)</option>
                        <option value="CREATE">CRÉATION (CREATE)</option>
                        <option value="MODIFY">MODIFICATION (MODIFY)</option>
                      </select>
                    </label>
                    <button
                      type="button"
                      className={styles.secondaryBtn}
                      onClick={() => removeDraftRow(index)}
                      disabled={allowlistDraft.length <= 1 || pending}
                      aria-label={`Retirer l’entrée ${index + 1}`}
                      data-testid={`ops1-i4-draft-remove-${index}`}
                    >
                      Retirer
                    </button>
                  </div>
                ))}
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={addDraftRow}
                    disabled={pending}
                    data-testid="ops1-i4-draft-add"
                  >
                    Ajouter un chemin
                  </button>
                  <CtaButton
                    type="button"
                    onClick={onEvaluateAllowlist}
                    disabled={pending}
                    data-testid="ops1-i4-evaluate"
                  >
                    Évaluer l’allowlist
                  </CtaButton>
                </div>
              </div>

              {activeAllowlist ? (
                <div
                  className={styles.allowlistResult}
                  data-testid="ops1-i4-evaluation-result"
                  data-status={activeAllowlist.status}
                  aria-live="polite"
                >
                  <p
                    className={styles.allowlistStatus}
                    data-testid="ops1-i4-global-status"
                    role="status"
                  >
                    {activeAllowlist.uiStatusLabel}
                  </p>
                  <p className={styles.muted} data-testid="ops1-i4-eval-meta">
                    Action {activeAllowlist.actionCandidateId} · v
                    {activeAllowlist.actionVersion} ·{" "}
                    {activeAllowlist.evaluatedAt}
                  </p>

                  <div className={styles.allowlistBuckets}>
                    <div data-testid="ops1-i4-bucket-reads">
                      <h3>CONSULTATION</h3>
                      <ul>
                        {activeAllowlist.allowedReads.length === 0 ? (
                          <li className={styles.muted}>Aucun</li>
                        ) : (
                          activeAllowlist.allowedReads.map((p) => (
                            <li key={`read-${p}`}>{p}</li>
                          ))
                        )}
                      </ul>
                    </div>
                    <div data-testid="ops1-i4-bucket-creates">
                      <h3>CRÉATION</h3>
                      <ul>
                        {activeAllowlist.allowedCreates.length === 0 ? (
                          <li className={styles.muted}>Aucun</li>
                        ) : (
                          activeAllowlist.allowedCreates.map((p) => (
                            <li key={`create-${p}`}>{p}</li>
                          ))
                        )}
                      </ul>
                    </div>
                    <div data-testid="ops1-i4-bucket-modifies">
                      <h3>MODIFICATION</h3>
                      <ul>
                        {activeAllowlist.allowedModifies.length === 0 ? (
                          <li className={styles.muted}>Aucun</li>
                        ) : (
                          activeAllowlist.allowedModifies.map((p) => (
                            <li key={`modify-${p}`}>{p}</li>
                          ))
                        )}
                      </ul>
                    </div>
                    <div data-testid="ops1-i4-bucket-denied">
                      <h3>INTERDIT</h3>
                      <ul>
                        {activeAllowlist.deniedPaths.length === 0 ? (
                          <li className={styles.muted}>Aucun</li>
                        ) : (
                          activeAllowlist.deniedPaths.map((p) => (
                            <li key={`denied-${p}`}>{p}</li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>

                  <table
                    className={styles.allowlistTable}
                    data-testid="ops1-i4-entries-table"
                  >
                    <caption className={styles.srOnly}>
                      Détail des entrées allowlist évaluées
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Saisi</th>
                        <th scope="col">Normalisé</th>
                        <th scope="col">Verdict</th>
                        <th scope="col">Motif</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeAllowlist.evaluatedEntries.map((entry, idx) => (
                        <tr
                          key={`entry-${idx}-${entry.normalizedPath}-${entry.mode}`}
                          data-testid={`ops1-i4-entry-${idx}`}
                          data-verdict={entry.evaluationStatus}
                        >
                          <td>{modeCategoryLabel(entry.mode)}</td>
                          <td>{entry.path}</td>
                          <td data-testid={`ops1-i4-entry-normalized-${idx}`}>
                            {entry.normalizedPath}
                          </td>
                          <td>
                            <span
                              className={
                                entry.evaluationStatus === "ALLOWED"
                                  ? styles.verdictOk
                                  : styles.verdictBad
                              }
                            >
                              {entry.evaluationStatus}
                            </span>
                          </td>
                          <td
                            id={`ops1-i4-reason-${idx}`}
                            data-testid={`ops1-i4-entry-reason-${idx}`}
                          >
                            {entry.evaluationReason ?? "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className={styles.muted} data-testid="ops1-i4-evaluation-empty">
                  Aucune évaluation persistée pour cette version d’action.
                </p>
              )}

              <p className={styles.hint} data-testid="ops1-i4-no-exec-cta">
                Aucun bouton Exécuter / Lancer Cursor / worktree / push / PR
                n’est disponible dans I4.
              </p>
            </section>
          ) : null}


          {showAllowlistPanel && canBuildI5Contract ? (
            <section
              className={`${styles.panel} ${styles.executionPanel}`}
              data-testid="ops1-i5-execution"
              aria-labelledby="ops1-i5-title"
            >
              <h2 id="ops1-i5-title" className={styles.panelTitle}>
                Contrat final & exécution (I5)
              </h2>
              <ul className={styles.microcopyList} aria-label="Règles I5">
                <li>{OPS1_I5_GO_DELIVERY_NE_EXEC}</li>
                <li>{OPS1_I5_GO_LINKED_HASH}</li>
                <li>{OPS1_I5_CONTRACT_FROZEN}</li>
                <li>{OPS1_I5_WORKTREE_NO_PUSH}</li>
                <li>{OPS1_I5_CURSOR_BOUNDED}</li>
                <li>{OPS1_I5_NO_AUTO_RETRY}</li>
                <li>{OPS1_I5_I6_BOUNDARY}</li>
              </ul>
              <label className={styles.field}>
                <span>Objectif (Morris)</span>
                <textarea
                  value={i5Objective}
                  onChange={(e) => setI5Objective(e.target.value)}
                  rows={2}
                  data-testid="ops1-i5-objective"
                />
              </label>
              <label className={styles.field}>
                <span>Instructions Markdown exactes (Morris)</span>
                <textarea
                  value={i5Instructions}
                  onChange={(e) => setI5Instructions(e.target.value)}
                  rows={8}
                  data-testid="ops1-i5-instructions"
                />
              </label>
              <fieldset
                className={styles.field}
                data-testid="ops1-i5-adapter-fieldset"
              >
                <legend>Adaptateur Cursor (explicite, sans fallback)</legend>
                <div
                  className={styles.modeRow}
                  role="radiogroup"
                  aria-label="Adaptateur Cursor I5"
                >
                  <label className={styles.modeOption}>
                    <input
                      type="radio"
                      name="ops1-i5-adapter"
                      value="fixture"
                      checked={i5AdapterMode === "fixture"}
                      data-testid="ops1-i5-adapter-fixture"
                      onChange={() => setI5AdapterMode("fixture")}
                      disabled={Boolean(activeContract)}
                    />
                    Fixture (déterministe)
                  </label>
                  <label className={styles.modeOption}>
                    <input
                      type="radio"
                      name="ops1-i5-adapter"
                      value="real"
                      checked={i5AdapterMode === "real"}
                      data-testid="ops1-i5-adapter-real"
                      onChange={() => setI5AdapterMode("real")}
                      disabled={
                        Boolean(activeContract) ||
                        !(realCursorAvail?.available ?? false)
                      }
                    />
                    Real (OPS1_CURSOR_REAL=1 + binaire)
                  </label>
                </div>
                <p className={styles.muted} data-testid="ops1-i5-adapter-avail">
                  {realCursorAvail == null
                    ? "Disponibilité real : …"
                    : realCursorAvail.available
                      ? `Real disponible (${realCursorAvail.binPath ?? "bin"})`
                      : realCursorAvail.flagEnabled
                        ? "Real indisponible — binaire Cursor introuvable (aucun fallback fixture)."
                        : "Real indisponible — OPS1_CURSOR_REAL≠1 (aucun fallback fixture)."}
                </p>
              </fieldset>
              <div className={styles.gateActions}>
                <CtaButton
                  onClick={onCreateI5Contract}
                  disabled={pending || !canBuildI5Contract}
                  data-testid="ops1-i5-create-contract"
                >
                  Geler contrat + hash
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={onRecordI5Gate}
                  disabled={pending || !canRecordI5Gate}
                  data-testid="ops1-i5-record-gate"
                >
                  GO exécution (lié au hash)
                </CtaButton>
                <CtaButton
                  onClick={onRunI5Execution}
                  disabled={pending || !canRunI5}
                  data-testid="ops1-i5-run-execution"
                >
                  {activeContract?.adapterMode === "real"
                    ? "Lancer exécution bornée (real)"
                    : "Lancer exécution bornée (fixture)"}
                </CtaButton>
              </div>
              {i5Error ? (
                <p className={styles.error} role="alert" data-testid="ops1-i5-error">
                  {i5Error}
                </p>
              ) : null}
              {activeContract ? (
                <div className={styles.allowlistResult} data-testid="ops1-i5-contract">
                  <p data-testid="ops1-i5-contract-status">
                    Statut contrat : {activeContract.status}
                  </p>
                  <p data-testid="ops1-i5-contract-hash">
                    contractHash : {activeContract.contractHash}
                  </p>
                  <p data-testid="ops1-i5-base-head">
                    baseHeadSha : {activeContract.baseHeadSha}
                  </p>
                  <p data-testid="ops1-i5-adapter-mode">
                    Adaptateur : {activeContract.adapterMode}
                  </p>
                  <p className={styles.muted} data-testid="ops1-i5-allowlist-summary">
                    READ {activeContract.allowedReads.length} · CREATE{" "}
                    {activeContract.allowedCreates.length} · MODIFY{" "}
                    {activeContract.allowedModifies.length}
                  </p>
                </div>
              ) : (
                <p className={styles.muted} data-testid="ops1-i5-contract-empty">
                  Aucun contrat — saisir objectif/instructions puis geler.
                </p>
              )}
              {activeAttempt ? (
                <div className={styles.allowlistResult} data-testid="ops1-i5-attempt">
                  <p data-testid="ops1-i5-attempt-id">
                    executionAttemptId : {activeAttempt.executionAttemptId}
                  </p>
                  <p data-testid="ops1-i5-attempt-status">
                    Statut tentative : {activeAttempt.status}
                  </p>
                  <p data-testid="ops1-i5-worktree">
                    Worktree : {activeAttempt.worktreePath ?? "—"}
                  </p>
                  {activeAttempt.result ? (
                    <p data-testid="ops1-i5-result-status">
                      Résultat technique : {activeAttempt.result.status}
                      {activeAttempt.result.outOfContract
                        ? " — HORS CONTRAT"
                        : ""}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <p className={styles.hint} data-testid="ops1-i5-no-remote">
                Aucun commit / push / PR / merge. Worktree local uniquement.
                Résultat = preuve technique minimale I5 (pas le rapport I6).
              </p>
            </section>
          ) : null}


          {activeCandidate && canGate ? (
            <section
              className={`${styles.panel} ${styles.gatePanel}`}
              data-testid="ops1-gate-panel"
              aria-labelledby="ops1-gate-title"
            >
              <h2 id="ops1-gate-title" className={styles.panelTitle}>
                Gate Morris
              </h2>
              <p className={styles.muted} data-testid="ops1-gate-lede">
                Décision humaine explicite. Aucun effet Cursor, Git ou
                filesystem. {OPS1_I3_GO_NE_PAS_EXEC}.
              </p>
              {activeDecision ? (
                <p
                  className={styles.decisionBadge}
                  data-testid="ops1-gate-latest-decision"
                  data-kind={activeDecision.kind}
                >
                  Dernière décision (v{activeDecision.actionVersion}) :{" "}
                  {activeDecision.kind}
                </p>
              ) : (
                <p
                  className={styles.muted}
                  data-testid="ops1-gate-no-decision"
                >
                  Aucune décision sur cette version.
                </p>
              )}
              {gateMicrocopy ||
              (activeCandidate.status === "APPROVED" ? OPS1_I3_GO_MICROCOPY : null) ? (
                <p
                  className={styles.goMicrocopy}
                  data-testid="ops1-gate-go-microcopy"
                  role="status"
                >
                  {gateMicrocopy ?? OPS1_I3_GO_MICROCOPY}
                </p>
              ) : null}
              <div className={styles.gateActions} data-testid="ops1-gate-actions">
                {showGoButtons ? (
                  <>
                    <CtaButton
                      onClick={() => onGate("GO")}
                      disabled={pending}
                      data-testid="ops1-gate-go"
                    >
                      GO
                    </CtaButton>
                    <CtaButton
                      variant="secondary"
                      onClick={() => onGate("NO_GO")}
                      disabled={pending}
                      data-testid="ops1-gate-no-go"
                    >
                      NO_GO
                    </CtaButton>
                    <CtaButton
                      variant="secondary"
                      onClick={() => onGate("CORRIGER")}
                      disabled={pending}
                      data-testid="ops1-gate-corriger"
                    >
                      CORRIGER
                    </CtaButton>
                    <CtaButton
                      variant="secondary"
                      onClick={() => onGate("ABANDONNER")}
                      disabled={pending}
                      data-testid="ops1-gate-abandonner"
                    >
                      ABANDONNER
                    </CtaButton>
                  </>
                ) : null}
                {showCorrigerOnly ? (
                  <CtaButton
                    variant="secondary"
                    onClick={() => onGate("CORRIGER")}
                    disabled={pending}
                    data-testid="ops1-gate-corriger"
                  >
                    CORRIGER
                  </CtaButton>
                ) : null}
              </div>
            </section>
          ) : null}

          <section
            className={`${styles.panel} ${styles.safetyPanel}`}
            data-testid="ops1-i3-safety"
            aria-labelledby="ops1-i3-safety-title"
          >
            <h2 id="ops1-i3-safety-title" className={styles.panelTitle}>
              Garde-fou exécution
            </h2>
            <p className={styles.muted}>
              I3 refuse toute tentative d’exécution. Preuve négative explicite.
            </p>
            <CtaButton
              variant="secondary"
              onClick={onRefuseExecution}
              disabled={pending}
              data-testid="ops1-i3-refuse-execution"
            >
              Tenter exécution (doit refuser)
            </CtaButton>
            {execRefuseMsg ? (
              <p
                className={styles.error}
                role="status"
                data-testid="ops1-i3-execution-refused"
              >
                {execRefuseMsg}
              </p>
            ) : null}
            <p className={styles.hint} data-testid="ops1-i3-no-exec-cta">
              Aucun bouton « Exécuter », « Lancer Cursor » ou équivalent n’est
              disponible dans I3.
            </p>
          </section>
        </>
      ) : null}
    </div>
  );
}
