import { STORAGE_KEY_PREFIX } from "./localStorageKeys";

export function clearInterv360LocalStorage(): void {
  Object.keys(localStorage)
    .filter((key) => key.startsWith(STORAGE_KEY_PREFIX))
    .forEach((key) => localStorage.removeItem(key));
}
