# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Base** | `origin/main` @ `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
| **Nature** | vérité Git + méthodes de recherche · **pas** une autorisation |

## 1. Vérité Git

| Check | Résultat |
|-------|----------|
| `origin/main` | `7a3e512f562f480c345a12a744806aa4f2ef625b` (merge PR #282) |
| HEAD worktree | identique |
| merge-base | identique |
| Upstream projet | **aucun** |
| Remote branche projet | **absente** |
| Opérations Git actives | aucune |
| Contenu hors pack | **aucune modification** (read-only bound) |

## 2. Stratégies de recherche

| Stratégie | Cibles |
|-----------|--------|
| Exact / case-insensitive | `MethodMode`, `methodMode`, `method_mode`, `METHOD_MODE`, `selectMethodMode`, `assertMethodMode` |
| Chemins | `method/`, `app/lib/ops1`, `app/features/ops1`, `.sfia-exec` |
| Variantes OPS1 | `OPS1`, `ops1`, `Ops1`, `ops-1`, docs `41`–`65`, routes `/ops1` |
| Concepts | legacy, fallback, `legacyV26`, `loadCanonicalSource`, `resolveSfiaCanonicalContext`, allowlist, ACL |
| Surfaces | runtime, modeled, prompts, docs, tests, e2e, CI (`.github`), gitignore |
| Négatif | absence CI de `method/` ≠ non-usage (consommateurs docs/prompts/OPS1 allowlist) |

## 3. Sources canoniques (blobs `origin/main`)

| Path | Blob | Rôle |
|------|------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | `b9ce0a9f…` | template cycle |
| `…/t-a7-next-decision-step-framing/README.md` | `4a0ad494…` | Option C · D01–D05 |
| `…/t-a7-next-decision-step-framing/05-morris-decision-pack.md` | `be080d72…` | décisions enregistrées |
| `…/t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` | `dbf50357…` | P03–P25 |
| `…/t-a7-legacy-cutover-framing/04-reservations-risks-and-stop-conditions.md` | `dc0514ed…` | SC-02…SC-05 |
| `…/t-a7-legacy-cutover-framing/05-morris-decision-pack.md` | `aacef4d7…` | F03/F11/F13 NOT DECIDED |
| `projects/sfia-studio/app/lib/d1/types.ts` | (HEAD) | METHOD_MODES |
| `projects/sfia-studio/sfia-v3-technical-architecture/.../11-legacy-isolation-migration-and-cutover-architecture.md` | (HEAD) | AT cutover |

## 4. Scope T-A7 — futur périmètre **potentiel** (candidat)

| Bloc | Justification | Dette évitée | Risque d’élargissement | Gate |
|------|---------------|--------------|------------------------|------|
| MethodMode D1 (types/DB/UI/commands) | P06–P07 · cutover OA | faux claim « déjà retiré » | retrait UI avant remplacement OA | F03 · F11 |
| Lectures / allowlist `method/**` | P08 · SC-02 · OPS1 allowlist | régression silent method reads | supprimer allowlist trop tôt | F03 |
| Remplacements P03–P05 (doctrine/loader/CKC) | cutover loader | fallback silencieux | élargir hors Option A | F03 |
| Badges / claims v2.6 surfaces OA | P09 | confusion produit | refonte UX globale | F11 |
| OPS1 isolation / ACL / historique | P10–P11 · F13 · SC-03 | double identité OPS1/v3 | « retirer OPS1 » = produit | F13 |
| Import boundaries / CI candidates | P24 | réintroduction method | hardening M1 hors vague | F03 · F12 |
| Rollback / RUN observabilité | P23 | cutover non observable | RUN-ready claim | F03 · F09 |

## 5. Hors périmètre T-A7 sauf nouveau GO Morris

| Bloc | Justification |
|------|---------------|
| Architecture v3-native OA non legacy (`lib/oa/**` hors anti-legacy) | hors cutover |
| Réserves A5.2 (B5, HARD, R1, R-M01, C*) | vague 2–4 Option C |
| Autorité réelle Critical / IAM | vague 2 · F09/F10 |
| Atomicité durable / persistence SELECTED | vague 3 · F08/F10 |
| Delivery non legacy · refonte produit · automatisation globale | hors Option A cutover |
| Modification code/method/OPS1 dans ce cycle | gate interdit |

## 6. Anti-claims scope

- inventaire Wave 1 ≠ satisfaction P03–P25
- « potentiellement dans T-A7 » ≠ autorisé maintenant
- T-A7 reste `NOT OPEN`
