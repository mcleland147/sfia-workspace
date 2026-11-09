import { accessSync, constants, readFileSync, statSync } from "node:fs";
import { StudioError } from "@/lib/http-errors";

/** Lanes that may bind a GitHub App identity (fail-closed otherwise). */
export type StudioGithubAppLane = "DEV" | "RECETTE";

export type GitHubAppLaneProfile = {
  appId: string;
  installationId: string;
  owner: string;
  allowedFullName: string;
  callbackUrl: string;
};

/**
 * Explicit lane → App identity map. No silent DEV↔RECETTE fallback.
 * Shared sandbox allowlist remains mono-repo `chantiers360`.
 */
export const GITHUB_APP_LANE_PROFILES: Record<StudioGithubAppLane, GitHubAppLaneProfile> = {
  DEV: {
    appId: "5670639",
    installationId: "179935689",
    owner: "mcleland147",
    allowedFullName: "mcleland147/chantiers360",
    callbackUrl: "http://127.0.0.1:3100/api/integrations/github/callback",
  },
  RECETTE: {
    appId: "5677465",
    installationId: "180092114",
    owner: "mcleland147",
    allowedFullName: "mcleland147/chantiers360",
    callbackUrl: "http://127.0.0.1:3200/api/integrations/github/callback",
  },
};

/** Canonical sandbox repository (shared across lanes; still mono-repo). */
export const GITHUB_APP_ALLOWED_FULL_NAME = GITHUB_APP_LANE_PROFILES.DEV.allowedFullName;
export const GITHUB_APP_EXPECTED_OWNER = GITHUB_APP_LANE_PROFILES.DEV.owner;

/**
 * DEV aliases preserved for existing unit fixtures.
 * Runtime checks must use {@link resolveExpectedGitHubAppProfile}.
 */
export const GITHUB_APP_EXPECTED_APP_ID = GITHUB_APP_LANE_PROFILES.DEV.appId;
export const GITHUB_APP_EXPECTED_INSTALLATION_ID = GITHUB_APP_LANE_PROFILES.DEV.installationId;

export type GitHubAppCredentialMeta = {
  appId: string;
  installationId: string;
  privateKeyPath: string;
  pathExists: boolean;
  pathIsFile: boolean;
  pathMode: string | null;
  pathSizeBytes: number | null;
  allowedFullName: string;
  expectedOwner: string;
  lane: StudioGithubAppLane;
};

export type GitHubAppLoadedCredentials = {
  appId: string;
  installationId: string;
  /** PKCS#8 / PEM private key material — never log. */
  privateKeyPem: string;
  allowedFullName: string;
  expectedOwner: string;
  lane: StudioGithubAppLane;
  meta: GitHubAppCredentialMeta;
};

function requireEnv(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) {
    throw new StudioError(
      "NOT_CONFIGURED",
      `LOCAL CREDENTIAL INPUT REQUIRED — ${name} absent`,
      { httpStatus: 503 },
    );
  }
  return v;
}

/** Resolve STUDIO_LANE for GitHub App binding — fail-closed. */
export function resolveStudioGithubAppLane(
  rawLane: string | undefined = process.env.STUDIO_LANE,
): StudioGithubAppLane {
  const lane = (rawLane ?? "").trim().toUpperCase();
  if (lane === "DEV" || lane === "RECETTE") return lane;
  throw new StudioError(
    "NOT_CONFIGURED",
    `STUDIO_LANE invalide ou absente pour GitHub App (reçu=${lane || "∅"})`,
    { httpStatus: 503 },
  );
}

export function resolveExpectedGitHubAppProfile(
  lane: StudioGithubAppLane = resolveStudioGithubAppLane(),
): GitHubAppLaneProfile {
  return GITHUB_APP_LANE_PROFILES[lane];
}

/**
 * Assert env App identity matches the active lane profile.
 * Rejects cross-lane App IDs and arbitrary overrides.
 */
export function assertGitHubAppEnvMatchesLane(input: {
  lane?: StudioGithubAppLane;
  appId: string;
  installationId: string;
  owner?: string;
  allowedFullName?: string;
  callbackUrl?: string;
}): GitHubAppLaneProfile {
  const lane = input.lane ?? resolveStudioGithubAppLane();
  const profile = resolveExpectedGitHubAppProfile(lane);

  if (input.appId !== profile.appId) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ID inattendu pour lane ${lane} (attendu ${profile.appId})`,
      { httpStatus: 400 },
    );
  }
  if (input.installationId !== profile.installationId) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_INSTALLATION_ID inattendu pour lane ${lane} (attendu ${profile.installationId})`,
      { httpStatus: 400 },
    );
  }
  if (input.owner != null && input.owner.toLowerCase() !== profile.owner.toLowerCase()) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_EXPECTED_OWNER inattendu pour lane ${lane} (attendu ${profile.owner})`,
      { httpStatus: 400 },
    );
  }
  if (
    input.allowedFullName != null &&
    input.allowedFullName.toLowerCase() !== profile.allowedFullName.toLowerCase()
  ) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ALLOWED_REPO inattendu pour lane ${lane} (attendu ${profile.allowedFullName})`,
      { httpStatus: 400 },
    );
  }
  if (input.callbackUrl != null && input.callbackUrl !== profile.callbackUrl) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_CALLBACK_URL inattendu pour lane ${lane}`,
      { httpStatus: 400 },
    );
  }
  return profile;
}

/** Inspect credential path metadata without returning PEM content. */
export function inspectGitHubAppCredentialPath(path: string): {
  exists: boolean;
  isFile: boolean;
  mode: string | null;
  sizeBytes: number | null;
  readable: boolean;
} {
  try {
    const st = statSync(path);
    let readable = false;
    try {
      accessSync(path, constants.R_OK);
      readable = true;
    } catch {
      readable = false;
    }
    return {
      exists: true,
      isFile: st.isFile(),
      mode: `0${(st.mode & 0o777).toString(8)}`,
      sizeBytes: st.isFile() ? st.size : null,
      readable,
    };
  } catch {
    return { exists: false, isFile: false, mode: null, sizeBytes: null, readable: false };
  }
}

export function readGitHubAppCredentialMetaFromEnv(): GitHubAppCredentialMeta {
  const lane = resolveStudioGithubAppLane();
  const profile = resolveExpectedGitHubAppProfile(lane);
  const appId = requireEnv("GITHUB_APP_ID");
  const installationId = requireEnv("GITHUB_APP_INSTALLATION_ID");
  const privateKeyPath = requireEnv("GITHUB_APP_PRIVATE_KEY_PATH");
  const allowedFullName =
    process.env.GITHUB_APP_ALLOWED_REPO?.trim() || profile.allowedFullName;
  const expectedOwner =
    process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || profile.owner;
  assertGitHubAppEnvMatchesLane({
    lane,
    appId,
    installationId,
    owner: expectedOwner,
    allowedFullName,
  });
  const insp = inspectGitHubAppCredentialPath(privateKeyPath);
  return {
    appId,
    installationId,
    privateKeyPath,
    pathExists: insp.exists,
    pathIsFile: insp.isFile,
    pathMode: insp.mode,
    pathSizeBytes: insp.sizeBytes,
    allowedFullName,
    expectedOwner,
    lane,
  };
}

/**
 * Load App credentials for D9 REAL installation-to-server reads.
 * Never uses Better Auth GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET.
 * Never returns or logs path content in thrown messages beyond existence.
 */
export function loadGitHubAppCredentialsFromEnv(): GitHubAppLoadedCredentials {
  const meta = readGitHubAppCredentialMetaFromEnv();

  if (!meta.pathExists || !meta.pathIsFile) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — GITHUB_APP_PRIVATE_KEY_PATH fichier absent",
      { httpStatus: 503 },
    );
  }

  const insp = inspectGitHubAppCredentialPath(meta.privateKeyPath);
  if (!insp.readable) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — clé privée non lisible",
      { httpStatus: 503 },
    );
  }

  let privateKeyPem: string;
  try {
    privateKeyPem = readFileSync(meta.privateKeyPath, "utf8");
  } catch {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — échec de lecture du chemin clé",
      { httpStatus: 503 },
    );
  }

  if (!/BEGIN (?:RSA )?PRIVATE KEY/.test(privateKeyPem)) {
    throw new StudioError(
      "INVALID_REQUEST",
      "Clé privée GitHub App invalide (PEM attendu)",
      { httpStatus: 400 },
    );
  }

  return {
    appId: meta.appId,
    installationId: meta.installationId,
    privateKeyPem,
    allowedFullName: meta.allowedFullName,
    expectedOwner: meta.expectedOwner,
    lane: meta.lane,
    meta,
  };
}

/** True when REAL App read credentials are present (path exists). Does not validate PEM crypto. */
export function isGitHubAppReadConfigured(): boolean {
  try {
    const meta = readGitHubAppCredentialMetaFromEnv();
    return meta.pathExists && meta.pathIsFile && Boolean(meta.appId) && Boolean(meta.installationId);
  } catch {
    return false;
  }
}

export function parseFullName(fullName: string): { owner: string; name: string } {
  const parts = fullName.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new StudioError("INVALID_REQUEST", `fullName invalide: ${fullName}`, { httpStatus: 400 });
  }
  return { owner: parts[0], name: parts[1] };
}
