import cors from "cors";
import express from "express";
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
        res.status(400).json({
          error: {
            code: "INVALID_JSON_BODY",
            message: "Request body must be valid JSON.",
          },
        });
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
      res.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Internal server error",
        },
      });
    },
  );

  return app;
}
