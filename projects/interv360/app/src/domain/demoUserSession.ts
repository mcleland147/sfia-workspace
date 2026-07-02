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

export function getCurrentDemoUser(): DemoUser {
  const storage = getStorage();
  const defaultUser = getDefaultDemoUser();

  if (!storage) {
    return defaultUser;
  }

  const storedId = storage.getItem(CURRENT_USER_STORAGE_KEY);
  const foundUser = findDemoUserById(storedId);

  if (foundUser) {
    return foundUser;
  }

  storage.setItem(CURRENT_USER_STORAGE_KEY, defaultUser.id);
  return defaultUser;
}

export function setCurrentDemoUser(userId: string): DemoUser {
  const storage = getStorage();
  const user = findDemoUserById(userId) ?? getDefaultDemoUser();

  if (storage) {
    storage.setItem(CURRENT_USER_STORAGE_KEY, user.id);
  }

  return user;
}
