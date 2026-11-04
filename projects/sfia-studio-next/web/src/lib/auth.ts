import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";
import * as schema from "@/db/schema";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";
import { eq } from "drizzle-orm";

/**
 * Better Auth is the single session authority for GitHub OAuth Studio identity.
 * GitHub OAuth is wired only when client credentials exist — never fabricate PASS without secrets.
 * Mapping uses our plural tables via explicit schema model names.
 * PilotId is provisioned from the verified GitHub account id (server-side), never from the client.
 */
const githubConfigured = Boolean(
  process.env.GITHUB_CLIENT_ID?.trim() && process.env.GITHUB_CLIENT_SECRET?.trim(),
);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: githubConfigured
    ? {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID!,
          clientSecret: process.env.GITHUB_CLIENT_SECRET!,
          // Studio identity only — no repo scopes requested.
        },
      }
    : {},
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await ensurePilotForAuthUser(user.id);
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          // Mark Better Auth sessions as github-oauth (DEV adapter uses its own insert path).
          return {
            data: {
              ...session,
              authMode: "github-oauth",
            },
          };
        },
        after: async (session) => {
          // Ensure Pilot exists even if user.create hook already ran before account link.
          if (session.userId) {
            await ensurePilotForAuthUser(session.userId);
            // Belt: persist authMode if adapter dropped the before hook field.
            await db
              .update(schema.sessions)
              .set({ authMode: "github-oauth", updatedAt: new Date() })
              .where(eq(schema.sessions.id, session.id));
          }
        },
      },
    },
  },
});

export function githubOAuthStatus() {
  return {
    provider: "github-oauth-studio-identity-only",
    configured: githubConfigured,
    status: githubConfigured
      ? "CONFIGURED — LIVE proof still requires successful callback"
      : "BLOCKED — missing GITHUB_CLIENT_ID/SECRET",
    note: "Login grants Studio identity only — never repository rights.",
  };
}
