/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INTERV360_DATA_SOURCE?: string;
  readonly VITE_INTERV360_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
