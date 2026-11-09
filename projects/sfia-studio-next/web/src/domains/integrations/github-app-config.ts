import { accessSync, constants, readFileSync, statSync } from "node:fs";
import { StudioError } from "@/lib/http-errors";

/** Canonical DEV sandbox repository for ML4 GitHub App installation reads. */
export const GITHUB_APP_ALLOWED_FULL_NAME = "mcleland147/chantiers360";
export const GITHUB_APP_EXPECTED_APP_ID = "5670639";
export const GITHUB_APP_EXPECTED_INSTALLATION_ID = "179935689";
export const GITHUB_APP_EXPECTED_OWNER = "mcleland147";

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
};

export type GitHubAppLoadedCredentials = {
  appId: string;
  installationId: string;
  /** PKCS#8 / PEM private key material — never log. */
  privateKeyPem: string;
  allowedFullName: string;
  expectedOwner: string;
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
  const appId = requireEnv("GITHUB_APP_ID");
  const installationId = requireEnv("GITHUB_APP_INSTALLATION_ID");
  const privateKeyPath = requireEnv("GITHUB_APP_PRIVATE_KEY_PATH");
  const allowedFullName =
    process.env.GITHUB_APP_ALLOWED_REPO?.trim() || GITHUB_APP_ALLOWED_FULL_NAME;
  const expectedOwner =
    process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || GITHUB_APP_EXPECTED_OWNER;
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
  };
}

/**
 * Load App credentials for D9 REAL installation-to-server reads.
 * Never uses Better Auth GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET.
 * Never returns or logs path content in thrown messages beyond existence.
 */
export function loadGitHubAppCredentialsFromEnv(): GitHubAppLoadedCredentials {
  const meta = readGitHubAppCredentialMetaFromEnv();

  if (meta.appId !== GITHUB_APP_EXPECTED_APP_ID) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ID inattendu (attendu ${GITHUB_APP_EXPECTED_APP_ID})`,
      { httpStatus: 400 },
    );
  }
  if (meta.installationId !== GITHUB_APP_EXPECTED_INSTALLATION_ID) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_INSTALLATION_ID inattendu (attendu ${GITHUB_APP_EXPECTED_INSTALLATION_ID})`,
      { httpStatus: 400 },
    );
  }

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
