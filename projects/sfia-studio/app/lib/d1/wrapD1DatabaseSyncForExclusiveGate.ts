/**
 * Applicative D1 DatabaseSync boundary (CR-S2-01 + CR-S2-02).
 *
 * openD1Db returns a Proxy that:
 * 1) Allowlists only methods required by D1 consumers (prepare / exec / close)
 *    plus safe diagnostic getters — deny-by-default for every other native API.
 * 2) Gates prepare + Statement run/get/all and exec under OA-exclusive
 *    (D1Error FORBIDDEN). Statement.iterate refused always (deferred-escape:
 *    authorizer does not re-check pulls after exclusive flips ON on Node 24.16).
 * 3) Installs a native setAuthorizer that denies non-read actions when exclusive
 *    is ON — defense-in-depth. setAuthorizer itself is NOT exposed on the Proxy
 *    (cannot be cleared/replaced via the wrapped handle).
 *
 * Known escape hatches closed at this boundary (Node 24.16 / node:sqlite):
 * - setAuthorizer(null) / replace
 * - createTagStore → SQLTagStore.db (raw DatabaseSync identity)
 * - deserialize (connection state replace)
 * - Statement.iterate deferred mutation across exclusive flip
 * - createSession / applyChangeset / loadExtension / function / aggregate / …
 *
 * Handles from `new DatabaseSync(...)` outside openD1Db remain unwrapped —
 * residual KNOWN GAP (R-03 FULL CLOSE NOT CLAIMED).
 */
import { constants, type DatabaseSync, type StatementSync } from "node:sqlite";
import { D1Error } from "./errors";
import {
  assertD1AccessAllowedWhenLocalOaExclusive,
  isLocalOaExclusiveMode,
} from "./localOaExclusiveMode";

/** Runtime node:sqlite authorizer constants (@types/node may lag Node 24). */
type SqliteAuthConstants = {
  SQLITE_OK: number;
  SQLITE_DENY: number;
  SQLITE_SELECT: number;
  SQLITE_READ: number;
  SQLITE_FUNCTION: number;
};

type DatabaseSyncWithAuthorizer = DatabaseSync & {
  setAuthorizer: (callback: ((actionCode: number) => number) | null) => void;
};

const C = constants as unknown as SqliteAuthConstants;

const READ_ACTION_CODES = new Set<number>([
  C.SQLITE_SELECT,
  C.SQLITE_READ,
  C.SQLITE_FUNCTION,
]);

/** Applicative DatabaseSync method allowlist (D1 repository / audit / migrate). */
const DB_METHOD_ALLOWLIST = new Set<string>(["prepare", "exec", "close"]);

/** Safe non-function properties observed on Node 24 DatabaseSync. */
const DB_SAFE_GETTERS = new Set<string>([
  "location",
  "isOpen",
  "isTransaction",
  "limits",
]);

function refuseNativeApi(api: string): never {
  throw new D1Error(
    "FORBIDDEN",
    `D1 applicative boundary refuses DatabaseSync.${api} (CR-S2-02 native allowlist).`,
  );
}

function installExclusiveAuthorizer(db: DatabaseSync): void {
  (db as DatabaseSyncWithAuthorizer).setAuthorizer((actionCode: number) => {
    if (!isLocalOaExclusiveMode()) {
      return C.SQLITE_OK;
    }
    if (READ_ACTION_CODES.has(actionCode)) {
      return C.SQLITE_OK;
    }
    return C.SQLITE_DENY;
  });
}

function gateExclusiveCall<T extends unknown[], R>(
  fn: (...args: T) => R,
): (...args: T) => R {
  return (...args: T) => {
    assertD1AccessAllowedWhenLocalOaExclusive();
    return fn(...args);
  };
}

function wrapStatement(stmt: StatementSync): StatementSync {
  return new Proxy(stmt, {
    get(target, prop, receiver) {
      // iterate() can start a deferred execution whose pulls are NOT re-checked
      // by setAuthorizer after exclusive flips ON (Node 24.16 observed). D1
      // consumers never use iterate — refuse always to close the deferred escape.
      if (prop === "iterate") {
        return () =>
          refuseNativeApi("StatementSync.iterate");
      }
      if (
        typeof prop === "string" &&
        (prop === "run" || prop === "get" || prop === "all")
      ) {
        const value = Reflect.get(target, prop, receiver) as (
          ...a: unknown[]
        ) => unknown;
        return gateExclusiveCall((...args: unknown[]) =>
          value.apply(target, args),
        );
      }
      const value = Reflect.get(target, prop, receiver);
      return typeof value === "function"
        ? (value as (...a: unknown[]) => unknown).bind(target)
        : value;
    },
  }) as StatementSync;
}

/**
 * Wrap a raw DatabaseSync so only the D1 applicative surface is reachable.
 * Must be applied to every handle returned by openD1Db.
 */
export function wrapD1DatabaseSyncForExclusiveGate(
  db: DatabaseSync,
): DatabaseSync {
  installExclusiveAuthorizer(db);

  return new Proxy(db, {
    get(target, prop, receiver) {
      if (typeof prop === "symbol") {
        // Allow engine brand symbols / non-enumerable diagnostics; never bind
        // unknown callable escapes through symbol keys in practice on node:sqlite.
        return Reflect.get(target, prop, receiver);
      }

      if (prop === "prepare") {
        return (sql: string) => {
          // Under exclusive, refuse before native prepare: Node authorizer may
          // deny INSERT prepare with ERR_SQLITE_ERROR instead of D1Error.
          assertD1AccessAllowedWhenLocalOaExclusive();
          const prepare = Reflect.get(target, "prepare", receiver) as (
            s: string,
          ) => StatementSync;
          return wrapStatement(prepare.call(target, sql));
        };
      }

      if (prop === "exec") {
        const exec = Reflect.get(target, "exec", receiver) as (
          ...a: unknown[]
        ) => unknown;
        return gateExclusiveCall((...args: unknown[]) =>
          exec.apply(target, args),
        );
      }

      if (prop === "close") {
        const close = Reflect.get(target, "close", receiver) as (
          ...a: unknown[]
        ) => unknown;
        // Lifecycle must remain available for seal/reset under exclusive.
        return (...args: unknown[]) => close.apply(target, args);
      }

      if (typeof prop === "string" && DB_SAFE_GETTERS.has(prop)) {
        return Reflect.get(target, prop, receiver);
      }

      // Deny-by-default: any other native function (setAuthorizer, createTagStore,
      // deserialize, createSession, applyChangeset, loadExtension, function, …)
      // is replaced by an explicit refusal — including captures before exclusive ON.
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "function") {
        if (
          typeof prop === "string" &&
          !DB_METHOD_ALLOWLIST.has(prop)
        ) {
          return () => refuseNativeApi(prop);
        }
      }

      return value;
    },
  }) as DatabaseSync;
}
