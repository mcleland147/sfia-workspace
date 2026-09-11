"use client";

import { useState } from "react";
import { setProjectRepositoryBindingAction } from "@/lib/vertical-slice-runtime/actions";

/**
 * Minimal CR-GCEC-03 UI — view/set Project repository binding.
 * Save is local Product persistence only (no network).
 */
export function RepositoryBindingForm(props: {
  projectId: string;
  onSaved?: () => void;
}) {
  const [identity, setIdentity] = useState("acme/widget");
  const [remoteUrl, setRemoteUrl] = useState(
    "https://github.com/acme/widget.git",
  );
  const [defaultBranch, setDefaultBranch] = useState("main");
  const [pathRoot, setPathRoot] = useState("docs/");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSave() {
    setBusy(true);
    setMessage(null);
    try {
      const result = await setProjectRepositoryBindingAction({
        projectId: props.projectId,
        identity,
        remoteUrl,
        defaultBranch,
        pathRoot: pathRoot || undefined,
      });
      if (!result.ok) {
        setMessage(`${result.code}: ${result.message}`);
        return;
      }
      setMessage("Binding enregistré (local).");
      props.onSaved?.();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div data-testid="repository-binding-form">
      <label>
        provider
        <input value="github" readOnly data-testid="repo-binding-provider" />
      </label>
      <label>
        identity
        <input
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          data-testid="repo-binding-identity"
        />
      </label>
      <label>
        remoteUrl
        <input
          value={remoteUrl}
          onChange={(e) => setRemoteUrl(e.target.value)}
          data-testid="repo-binding-remote-url"
        />
      </label>
      <label>
        defaultBranch
        <input
          value={defaultBranch}
          onChange={(e) => setDefaultBranch(e.target.value)}
          data-testid="repo-binding-default-branch"
        />
      </label>
      <label>
        pathRoot
        <input
          value={pathRoot}
          onChange={(e) => setPathRoot(e.target.value)}
          data-testid="repo-binding-path-root"
        />
      </label>
      <button
        type="button"
        disabled={busy}
        onClick={() => void onSave()}
        data-testid="repo-binding-save"
      >
        Enregistrer le binding
      </button>
      {message ? <p data-testid="repo-binding-message">{message}</p> : null}
    </div>
  );
}
