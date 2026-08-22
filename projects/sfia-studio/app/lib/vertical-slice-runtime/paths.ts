import path from "node:path";
import "./serverGuard";

/**
 * Default doctrine registry / schema roots when Next (or tests) run with cwd at
 * `projects/sfia-studio/app`. Callers may override via composition options.
 */
export function resolveDefaultVerticalSliceRoots(
  appRoot: string = process.cwd(),
): { readonly registryRoot: string; readonly schemasRoot: string } {
  return {
    registryRoot: path.join(appRoot, "lib/oa/doctrine/product"),
    schemasRoot: path.resolve(
      appRoot,
      "../sfia-v3-modeled/v3-native-option-a/schemas",
    ),
  };
}

/** G3 W1 product DoctrinePackage materialization root (OPTION A). */
export function resolveProductDoctrineRegistryRoot(
  appRoot: string = process.cwd(),
): string {
  return path.join(appRoot, "lib/oa/doctrine/product");
}
