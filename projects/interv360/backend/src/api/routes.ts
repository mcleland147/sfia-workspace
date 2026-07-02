import { Router } from "express";
import { StoreError } from "../domain/types.js";
import { getDatabase } from "../persistence/sqliteDatabase.js";
import { getUserById, listUsers } from "../repositories/usersRepository.js";
import {
  applyTransition,
  getRequestWithDetail,
  listEventsForRequest,
  listRequests,
  resetDemoStore,
} from "../store/demoStore.js";

function sendStoreError(
  res: import("express").Response,
  error: StoreError,
): void {
  const statusByCode: Record<string, number> = {
    REQUEST_NOT_FOUND: 404,
    INVALID_TRANSITION_ACTION: 400,
    TRANSITION_NOT_ALLOWED: 409,
    DEMO_MODE_REQUIRED: 403,
  };

  const status = statusByCode[error.code] ?? 500;
  res.status(status).json({
    error: {
      code: error.code,
      message: error.message,
    },
  });
}

export function createApiRouter(): Router {
  const router = Router();

  router.get("/users", (_req, res) => {
    const users = listUsers(getDatabase());
    res.json({ users });
  });

  router.get("/users/:id", (req, res) => {
    const user = getUserById(getDatabase(), req.params.id);

    if (!user) {
      res.status(404).json({
        error: {
          code: "USER_NOT_FOUND",
          message: "User not found.",
        },
      });
      return;
    }

    res.json({ user });
  });

  router.get("/requests", (_req, res) => {
    res.json({ items: listRequests() });
  });

  router.get("/requests/:id", (req, res) => {
    try {
      const payload = getRequestWithDetail(req.params.id);
      res.json(payload);
    } catch (error) {
      if (error instanceof StoreError) {
        sendStoreError(res, error);
        return;
      }
      throw error;
    }
  });

  router.get("/requests/:id/events", (req, res) => {
    try {
      const items = listEventsForRequest(req.params.id);
      res.json({ items });
    } catch (error) {
      if (error instanceof StoreError) {
        sendStoreError(res, error);
        return;
      }
      throw error;
    }
  });

  router.post("/requests/:id/transitions", (req, res) => {
    const action = req.body?.action;

    if (typeof action !== "string" || action.trim().length === 0) {
      res.status(400).json({
        error: {
          code: "INVALID_TRANSITION_ACTION",
          message: "Transition action is required.",
        },
      });
      return;
    }

    try {
      const { request, event } = applyTransition(
        req.params.id,
        action.trim(),
      );
      res.json({ request, event });
    } catch (error) {
      if (error instanceof StoreError) {
        sendStoreError(res, error);
        return;
      }
      throw error;
    }
  });

  router.post("/demo/reset", (_req, res) => {
    try {
      const { requestsCount } = resetDemoStore();
      res.json({
        status: "reset",
        mode: "demo",
        requestsCount,
      });
    } catch (error) {
      if (error instanceof StoreError) {
        sendStoreError(res, error);
        return;
      }
      throw error;
    }
  });

  return router;
}
