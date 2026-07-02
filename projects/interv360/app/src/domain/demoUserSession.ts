import {
  CURRENT_USER_STORAGE_KEY,
  type DemoUser,
  findDemoUserById,
  getDefaultDemoUser,
} from "./demoUsers";

function getStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

export function getStoredCurrentUserId(): string | null {
  const storage = getStorage();
  if (!storage) {
    return null;
  }

  return storage.getItem(CURRENT_USER_STORAGE_KEY);
}

export function persistCurrentUserId(userId: string): void {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  storage.setItem(CURRENT_USER_STORAGE_KEY, userId);
}

export function getCurrentDemoUser(): DemoUser {
  const storage = getStorage();
  const defaultUser = getDefaultDemoUser();

  if (!storage) {
    return defaultUser;
  }

  const storedId = getStoredCurrentUserId();
  const foundUser = findDemoUserById(storedId);

  if (foundUser) {
    return foundUser;
  }

  persistCurrentUserId(defaultUser.id);
  return defaultUser;
}

export function setCurrentDemoUser(userId: string): DemoUser {
  const storage = getStorage();
  const user = findDemoUserById(userId) ?? getDefaultDemoUser();

  if (storage) {
    persistCurrentUserId(user.id);
  }

  return user;
}
