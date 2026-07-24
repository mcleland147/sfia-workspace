# 01 — Scope et chaîne de commits

| Champ | Valeur |
|-------|--------|
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation` |
| **Base** | `main` @ `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` |
| **Merge** | **interdit** |

## Périmètre inclus

- `projects/sfia-studio/app/lib/oa/doctrine/**`
- `projects/sfia-studio/app/__tests__/oa/doctrine/**`
- `projects/sfia-studio/app/package.json` + `package-lock.json` (AJV direct)
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/**`

## Périmètre interdit (absent)

`method/**` · cutover · T-A1 LPS pin · UI doctrine · OPS1 retirement · MethodMode removal · SQL/migrations · adoption globale runtime

## Chaîne `origin/main..HEAD` (pré-commits docs)

1. `2e05d94` feat(sfia-studio): add v3 DoctrinePackage foundation
2. `1f21392` docs(sfia-studio): document Option A T-A0 delivery
3. `b643b68` fix(sfia-studio): correct T-A0 doctrine validation
4. `7782918` fix(sfia-studio): declare AJV runtime dependency for T-A0
5. `02839b8` fix(sfia-studio): secure T-A0 doctrine registry paths
6. *(commits docs)* Morris validation + PR readiness pack

## Totaux (ordre de grandeur)

- Runtime doctrine module + tests + delivery docs
- AJV direct dependency
- Symlink realpath containment
