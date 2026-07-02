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
import { sendApiError, sendStoreError } from "./apiErrors.js";

const INVALID_TRANSITION_ACTION_MESSAGE = "Transition action is required.";
const INVALID_ACTOR_USER_MESSAGE = "Actor user is invalid or inactive.";

function parseTransitionAction(body: unknown): string | null {
  const action = (body as { action?: unknown } | null | undefined)?.action;

  if (typeof action !== "string" || action.trim().length === 0) {
    return null;
  }

  return action.trim();
}

function parseOptionalActorUserId(
  body: unknown,
): { ok: true; actorUserId?: string } | { ok: false } {
  const actorUserId = (body as { actorUserId?: unknown } | null | undefined)
    ?.actorUserId;

  if (actorUserId === undefined || actorUserId === null) {
    return { ok: true };
  }

  if (typeof actorUserId !== "string" || actorUserId.trim().length === 0) {
    return { ok: false };
  }

  return { ok: true, actorUserId: actorUserId.trim() };
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
      sendApiError(res, 404, "USER_NOT_FOUND", "User not found.");
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
    const action = parseTransitionAction(req.body);

    if (!action) {
      sendApiError(
        res,
        400,
        "INVALID_TRANSITION_ACTION",
        INVALID_TRANSITION_ACTION_MESSAGE,
      );
      return;
    }

    const actorParse = parseOptionalActorUserId(req.body);

    if (!actorParse.ok) {
      sendApiError(
        res,
        400,
        "INVALID_ACTOR_USER",
        INVALID_ACTOR_USER_MESSAGE,
      );
      return;
    }

    let actor:
      | {
          userId: string;
          displayName: string;
          role: string;
        }
      | undefined;

    if (actorParse.actorUserId) {
      const user = getUserById(getDatabase(), actorParse.actorUserId);

      if (!user || !user.isActive) {
        sendApiError(
          res,
          400,
          "INVALID_ACTOR_USER",
          INVALID_ACTOR_USER_MESSAGE,
        );
        return;
      }

      actor = {
        userId: user.id,
        displayName: user.displayName,
        role: user.role,
      };
    }

    try {
      const { request, event } = applyTransition(req.params.id, action, actor);
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

  router.use((_req, res) => {
    sendApiError(res, 404, "ROUTE_NOT_FOUND", "API route not found.");
  });

  return router;
}
