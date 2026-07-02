import cors from "cors";
import express from "express";
import { sendApiError } from "./api/apiErrors.js";
import { createApiRouter } from "./api/routes.js";
import { createLocalCorsOptions } from "./config/cors.js";

export function createApp(): express.Application {
  const app = express();

  app.use(cors(createLocalCorsOptions()));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      mode: "demo",
    });
  });

  app.use("/api/v1", createApiRouter());

  app.use(
    (
      err: unknown,
      _req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      if (err instanceof SyntaxError && "body" in err) {
        sendApiError(
          res,
          400,
          "INVALID_JSON_BODY",
          "Request body must be valid JSON.",
        );
        return;
      }

      next(err);
    },
  );

  app.use(
    (
      _err: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      sendApiError(res, 500, "INTERNAL_ERROR", "Internal server error");
    },
  );

  return app;
}
