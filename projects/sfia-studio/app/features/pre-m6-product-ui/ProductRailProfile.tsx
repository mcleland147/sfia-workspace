"use client";

/**
 * P3 46:2 rail / mobile profile — authenticated session display name when
 * available (honest Product identity), otherwise « Pilote ».
 */
import { authClient } from "@/lib/auth/auth-client";
import styles from "./ProductShell.module.css";

function useProfileLabel(): { label: string; initial: string } {
  const { data } = authClient.useSession();
  const raw =
    typeof data?.user?.name === "string" && data.user.name.trim().length > 0
      ? data.user.name.trim()
      : null;
  // P3 rail foot is narrow — first token of the session display name (e.g. Morris).
  const label = raw ? (raw.split(/\s+/)[0] ?? raw) : "Pilote";
  return { label, initial: (label[0] ?? "P").toUpperCase() };
}

export function ProductRailProfile() {
  const { label } = useProfileLabel();
  return (
    <span
      className={styles.profile}
      data-testid="studio-rail-profile"
      data-profile-name={label}
    >
      <span className={styles.profileDot} aria-hidden />
      {label}
    </span>
  );
}

export function ProductMobileProfile() {
  const { label, initial } = useProfileLabel();
  return (
    <span
      className={styles.mobileProfile}
      title={label}
      data-testid="studio-mobile-profile"
      data-profile-name={label}
    >
      <span aria-hidden>{initial}</span>
      <span className={styles.srOnly}>{label}</span>
    </span>
  );
}
