"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const NEAR_BOTTOM_PX = 72;

/**
 * CT-01 / UX-002 — default to last message; preserve voluntary re-read position;
 * announce new content when Nora answers while the pilot is reading history.
 *
 * Journal → Travail deep-link (focusMessageId) has PRIORITY over end-scroll
 * until the focus is handled or cleared.
 */
export function useNoraThreadScroll(deps: {
  messageCount: number;
  lastMessageId: string | null;
  activityPreparing: boolean;
  /** Bumps when pilot voluntarily sends — force stick to bottom. */
  forceStickToken: number;
  /** When set, suppress auto scroll-to-end so exact message focus can win. */
  focusMessageId?: string | null;
}) {
  const threadRef = useRef<HTMLDivElement | null>(null);
  const stickToBottomRef = useRef(true);
  const primedRef = useRef(false);
  const prevLastIdRef = useRef<string | null>(null);
  const [newBelow, setNewBelow] = useState(false);
  const focusRequested = Boolean(deps.focusMessageId?.trim());
  /**
   * Journal → Travail: once a deep-link is requested, suppress auto end-scroll until
   * the pilot explicitly sends (forceStickToken) or the thread empties.
   * Clearing focusMessageId after highlight must NOT re-arm stick-to-bottom.
   */
  const journalNavSuppressRef = useRef(false);
  const [, bumpSuppress] = useState(0);
  useLayoutEffect(() => {
    if (!focusRequested) return;
    if (!journalNavSuppressRef.current) {
      journalNavSuppressRef.current = true;
      bumpSuppress((n) => n + 1);
    }
  }, [focusRequested]);
  const focusLock = focusRequested || journalNavSuppressRef.current;

  const isNearBottom = useCallback(() => {
    const el = threadRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight <= NEAR_BOTTOM_PX;
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "auto") => {
    const el = threadRef.current;
    if (!el) return;
    const apply = () => {
      el.scrollTop = el.scrollHeight;
      if (behavior === "smooth") {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    };
    apply();
    // Second pass after layout (new bubbles / activity row).
    requestAnimationFrame(() => {
      apply();
      requestAnimationFrame(apply);
    });
    stickToBottomRef.current = true;
    setNewBelow(false);
  }, []);

  const onScroll = useCallback(() => {
    const near = isNearBottom();
    stickToBottomRef.current = near;
    if (near) setNewBelow(false);
  }, [isNearBottom]);

  // Initial entry / refresh / return: show last message once messages exist —
  // unless a Journal deep-link focus is in flight or was honored this session.
  useLayoutEffect(() => {
    if (deps.messageCount === 0) return;
    if (focusLock) {
      primedRef.current = true;
      prevLastIdRef.current = deps.lastMessageId;
      stickToBottomRef.current = false;
      return;
    }
    if (!primedRef.current) {
      scrollToBottom("auto");
      primedRef.current = true;
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
  }, [deps.messageCount, deps.lastMessageId, scrollToBottom, focusLock]);

  // Reset priming when thread identity effectively reloads (empty → filled again).
  useEffect(() => {
    if (deps.messageCount === 0) {
      primedRef.current = false;
      prevLastIdRef.current = null;
      journalNavSuppressRef.current = false;
      setNewBelow(false);
    }
  }, [deps.messageCount]);

  // New messages / activity: stick only when already near bottom or forced by send.
  // Deep-link focus must not be overwritten by last-message stick during reload.
  useLayoutEffect(() => {
    if (focusLock) {
      stickToBottomRef.current = false;
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
    const lastChanged = deps.lastMessageId !== prevLastIdRef.current;
    if (lastChanged) {
      if (stickToBottomRef.current) {
        scrollToBottom("auto");
      } else if (deps.lastMessageId) {
        setNewBelow(true);
      }
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
    if (deps.activityPreparing && stickToBottomRef.current) {
      scrollToBottom("auto");
    }
  }, [deps.lastMessageId, deps.activityPreparing, scrollToBottom, focusLock]);

  useLayoutEffect(() => {
    if (deps.forceStickToken <= 0) return;
    // Voluntary send: end Journal deep-link suppress and stick to latest.
    journalNavSuppressRef.current = false;
    stickToBottomRef.current = true;
    scrollToBottom("smooth");
  }, [deps.forceStickToken, scrollToBottom]);

  return {
    threadRef,
    onScroll,
    scrollToBottom,
    newBelow,
    stickToBottom: stickToBottomRef,
  };
}
