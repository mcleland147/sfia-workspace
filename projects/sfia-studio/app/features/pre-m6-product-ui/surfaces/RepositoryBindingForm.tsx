"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  getProjectRuntimeAction,
  setProjectRepositoryBindingAction,
} from "@/lib/vertical-slice-runtime/actions";

type DurableBinding = {
  identity?: string;
  remoteUrl?: string;
  defaultBranch?: string;
  pathRoot?: string;
} | null;

/**
 * READ_FAILED is NOT "unbound": an unreadable binding must never be presented
 * as an absence, and must never be overwritten by a blind save.
 */
type BindingReadState =
  | "LOADING"
  | "LOADED_UNBOUND"
  | "LOADED_BOUND"
  | "READ_FAILED";

const READ_FAILED_MESSAGE =
  "Binding illisible — état durable inconnu. Aucune valeur d'exemple n'est affichée et l'enregistrement est fermé jusqu'à une relecture réussie.";

const VERIFICATION_IMPOSSIBLE_MESSAGE =
  "Enregistrement effectué mais vérification durable impossible — le binding n'est pas confirmé. Rechargez la page avant tout nouvel enregistrement.";

/**
 * CR-GCEC-03 / JOURNEY-INTEGRITY — view/set Project repository binding.
 *
 * Loads durable Project truth and never presents sample values as current
 * truth. A save is only claimed as durable after a successful re-read of the
 * Project runtime; the write echo alone is not evidence.
 */
export function RepositoryBindingForm(props: {
  projectId: string;
  onSaved?: () => void;
}) {
  const [identity, setIdentity] = useState("");
  const [remoteUrl, setRemoteUrl] = useState("");
  const [defaultBranch, setDefaultBranch] = useState("");
  const [pathRoot, setPathRoot] = useState("");
  const [readState, setReadState] = useState<BindingReadState>("LOADING");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  /** Set when durability could not be verified — no further blind save. */
  const [saveClosedUntilReload, setSaveClosedUntilReload] = useState(false);

  /** Current projectId, so late async results for a prior project are dropped. */
  const activeProjectIdRef = useRef(props.projectId);
  activeProjectIdRef.current = props.projectId;

  const clearFields = useCallback(() => {
    setIdentity("");
    setRemoteUrl("");
    setDefaultBranch("");
    setPathRoot("");
  }, []);

  const applyDurableBinding = useCallback(
    (binding: DurableBinding): boolean => {
      const bound =
        Boolean(binding) &&
        typeof binding?.identity === "string" &&
        binding.identity.trim().length > 0 &&
        typeof binding.remoteUrl === "string" &&
        binding.remoteUrl.trim().length > 0;
      if (!bound || !binding) {
        clearFields();
        return false;
      }
      setIdentity(binding.identity ?? "");
      setRemoteUrl(binding.remoteUrl ?? "");
      setDefaultBranch(binding.defaultBranch ?? "main");
      setPathRoot(binding.pathRoot ?? "");
      return true;
    },
    [clearFields],
  );

  useEffect(() => {
    const requestedProjectId = props.projectId;
    let cancelled = false;
    setReadState("LOADING");
    setMessage(null);
    setSaveClosedUntilReload(false);
    clearFields();

    void (async () => {
      const result = await getProjectRuntimeAction(requestedProjectId);
      if (cancelled) return;
      if (activeProjectIdRef.current !== requestedProjectId) return;
      if (!result.ok) {
        clearFields();
        setReadState("READ_FAILED");
        setMessage(READ_FAILED_MESSAGE);
        return;
      }
      const bound = applyDurableBinding(
        result.project.repositoryBinding as DurableBinding,
      );
      setReadState(bound ? "LOADED_BOUND" : "LOADED_UNBOUND");
    })();

    return () => {
      cancelled = true;
    };
  }, [props.projectId, applyDurableBinding, clearFields]);

  const saveDisabled =
    busy ||
    readState === "LOADING" ||
    readState === "READ_FAILED" ||
    saveClosedUntilReload;

  async function onSave() {
    if (saveDisabled) return;
    const requestedProjectId = props.projectId;
    setBusy(true);
    setMessage(null);
    try {
      if (!identity.trim() || !remoteUrl.trim()) {
        setMessage(
          "Binding incomplet — renseignez identity et remoteUrl avant d'enregistrer.",
        );
        return;
      }
      const written = await setProjectRepositoryBindingAction({
        projectId: requestedProjectId,
        identity: identity.trim(),
        remoteUrl: remoteUrl.trim(),
        defaultBranch: defaultBranch.trim() || "main",
        pathRoot: pathRoot.trim() || undefined,
      });
      if (activeProjectIdRef.current !== requestedProjectId) return;
      if (!written.ok) {
        setMessage(`${written.code}: ${written.message}`);
        return;
      }

      // Durable truth comes from a fresh read, never from the write echo.
      const reread = await getProjectRuntimeAction(requestedProjectId);
      if (activeProjectIdRef.current !== requestedProjectId) return;
      if (!reread.ok) {
        setReadState("READ_FAILED");
        setSaveClosedUntilReload(true);
        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
        return;
      }
      const bound = applyDurableBinding(
        reread.project.repositoryBinding as DurableBinding,
      );
      if (!bound) {
        setReadState("LOADED_UNBOUND");
        setSaveClosedUntilReload(true);
        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
        return;
      }
      setReadState("LOADED_BOUND");
      setMessage("Binding enregistré et vérifié.");
      props.onSaved?.();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div data-testid="repository-binding-form">
      {readState === "LOADING" ? (
        <p data-testid="repo-binding-loading">Lecture du binding…</p>
      ) : (
        <p data-testid="repo-binding-status">
          {readState === "READ_FAILED"
            ? "Binding illisible — état durable inconnu."
            : readState === "LOADED_BOUND"
              ? "Binding durable chargé."
              : "Aucun binding configuré — renseignez le dépôt lié."}
        </p>
      )}
      <label>
        provider
        <input value="github" readOnly data-testid="repo-binding-provider" />
      </label>
      <label>
        identity
        <input
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          placeholder="org/repo"
          data-testid="repo-binding-identity"
        />
      </label>
      <label>
        remoteUrl
        <input
          value={remoteUrl}
          onChange={(e) => setRemoteUrl(e.target.value)}
          placeholder="https://github.com/org/repo.git"
          data-testid="repo-binding-remote-url"
        />
      </label>
      <label>
        defaultBranch
        <input
          value={defaultBranch}
          onChange={(e) => setDefaultBranch(e.target.value)}
          placeholder="main"
          data-testid="repo-binding-default-branch"
        />
      </label>
      <label>
        pathRoot
        <input
          value={pathRoot}
          onChange={(e) => setPathRoot(e.target.value)}
          placeholder="docs/"
          data-testid="repo-binding-path-root"
        />
      </label>
      <button
        type="button"
        disabled={saveDisabled}
        onClick={() => void onSave()}
        data-testid="repo-binding-save"
      >
        Enregistrer le binding
      </button>
      {message ? <p data-testid="repo-binding-message">{message}</p> : null}
    </div>
  );
}
