"use client";

import { authClient } from "@/lib/auth/auth-client";

export function LogoutButton() {
  return (
    <button
      type="button"
      data-testid="logout-button"
      onClick={() => {
        void authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              window.location.href = "/login";
            },
          },
        });
      }}
      style={{
        border: "1px solid rgba(148, 163, 184, 0.45)",
        background: "transparent",
        color: "inherit",
        borderRadius: "999px",
        padding: "0.35rem 0.85rem",
        fontSize: "0.8rem",
        cursor: "pointer",
      }}
    >
      Déconnexion
    </button>
  );
}
