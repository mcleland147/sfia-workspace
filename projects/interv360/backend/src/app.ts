import cors from "cors";
import express from "express";
import { createApiRouter } from "./api/routes.js";

export function createApp(): express.Application {
  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
    }),
  );
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
