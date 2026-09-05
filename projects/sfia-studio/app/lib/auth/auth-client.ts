"use client";

import { createAuthClient } from "better-auth/react";

/**
 * Browser Better Auth client. Base URL follows the current origin
 * (Studio runs on port 3020 in local dev).
 */
export const authClient = createAuthClient();
