# 01 — Source truth and scope

| Champ | Valeur |
|-------|--------|
| **Document** | `01-source-truth-and-scope.md` |
| **Base Git** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Nature** | inventaire de sources · aucune modification hors pack |

---

## 1. Vérité Git

| Élément | Valeur |
|---------|--------|
| Repo | `mcleland147/sfia-workspace` |
| `origin/main` | `2a3c59c46c105bae458d1a7329079c5f591da421` |
| Merge tip | PR #286 — README post-merge F03/F11/F13 |
| Parent merge F03 pack | PR #285 — `dad6e00344ad5750cd352db3af33c150c780491b` (2026-07-28 19:54:21 +0200) |
| Branche locale | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| Upstream projet | **aucun** |
| Remote homonyme | **aucune** |

---

## 2. Sources méthode

| Source | Rôle |
|--------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | template d’exécution cycle |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routing |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | guardrails |
| `method/sfia-fast-track/checklists/guardrails-checklist.md` | checklist complémentaire |

Ces quatre chemins core (+ template) correspondent à `SFIA_CANONICAL_CORE_PATHS` au HEAD courant.

---

## 3. Packs T-A7 (canon sur main)

| Pack | Usage pour ce cycle |
|------|---------------------|
| `t-a7-legacy-cutover-framing/` | définitions P03–P11 · stops SC-* · rollback candidat |
| `t-a7-next-decision-step-framing/` | paysage décisions · séquencement |
| `t-a7-option-c-wave-1-legacy-scope-framing/` | inventaire MethodMode · method/** · OPS1 · W1-D01…D05 |
| `t-a7-f03-f11-f13-documentary-arbitration/` | F03.3 · F11.2 · F13.4 adoptées · anti-claims |

---

## 4. Handoffs / intégrations

| Réf | Preuve |
|-----|--------|
| PR #285 | décisions F03/F11/F13 intégrées · merge `dad6e003…` |
| PR #286 | alignement README post-merge · merge `2a3c59c…` |
| Handoff `sfia/review-handoff` | `sfia-review-handoff/latest-chatgpt-review.md` — dernier cycle README #286 |

---

## 5. Sources techniques read-only (preuves)

| Surface | Fichier / symbole | Observation |
|---------|-------------------|-------------|
| Canonical paths | `app/lib/platform/sfia-context/canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` | allowlist fermée : template + 3 `method/.../core/*` |
| Loader | `app/lib/platform/sfia-context/sourceLoader.ts` · `loadCanonicalCoreSources` | lecture disque + digest SHA-256 |
| MethodMode | `app/lib/d1/types.ts` · `METHOD_MODES` / `MethodMode` | `SFIA_V2_6` · `TRANSITION` · `V3_CANDIDATE` — **actif** |
| Select MethodMode | `app/lib/d1/actions.ts` · `actionSelectMethodMode` | action présente ; candidat retrait futur W1-D03 |
| OPS1 wrapper paths | `app/lib/ops1/sfia/canonicalPaths.ts` | réexport temporaire platform |
| Allowlist OPS1 | `app/lib/ops1/allowlistEvaluation.ts` · `evaluateAllowlist` | deny-by-default · structure deny `method/` pour actions I4 |
| Path-policy CT | `app/lib/platform/security/pathPolicy.ts` · `decideReadPath` | deny `method/` (asymétrie vs loader canonique) |
| Import boundaries | `app/__tests__/platform/import-boundaries.test.ts` | D1↛OPS1 · platform↛D1/OPS1 |
| D1 provider | `app/lib/d1/intake/resolveProvider.ts` | surface partagée conversation · jamais OPS1 direct |
| OPS1 SQLite | `app/lib/ops1/paths.ts` · `resolveOps1SqlitePath` | `.sfia-exec/.../ops1.sqlite` gitignored |
| OA audit | `app/lib/oa/project/infrastructure/observability.ts` | console / mémoire — pas RUN production |
| Health | `app/lib/oa/execution-attempt/ports/agentRegistry.ts` | health **simulé** — **aucune** route readiness F11.2 |

---

## 6. Décisions existantes (autorité)

| ID | Statut | Effet sur ce pack |
|----|--------|-------------------|
| W1-B / W1-D01 | `DECIDED` | plan candidat retrait documentaire autorisé comme trajectoire |
| W1-D02 | `DECIDED` | actifs confirmés (MethodMode D1 · trio method core · consommateurs) |
| W1-D03 | `DECIDED` | candidats futurs — **pas** suppression |
| W1-D04 | `DECIDED` | isolation OPS1 **avant** tout retrait |
| W1-D05 | `DECIDED` | F03/F11/F13 avant prep technique — **contenu F maintenant décidé** |
| F03.3 | `DECIDED` | set préconditions entrée |
| F11.2 | `DECIDED` | API read/readiness minimale future |
| F13.4 | `DECIDED` | hybrid Git + vue RO bornée |

---

## 7. Périmètre / hors périmètre

### Inclus

- qualification documentaire P03–P11 ;
- design contrat OPS1 ;
- rollback · preuves · holds · évaluation F03.3 ;
- bulletin Morris ouverture.

### Exclus

- toute mutation code / config / tests / CI ;
- toute implémentation API / UI / RO runtime ;
- push / PR / merge projet ;
- ouverture T-A7 · delivery · cutover.

---

## 8. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| Recherché | oui |
| Cycle qualifié | architecture technique et readiness préalable à T-A7 |
| Statut | candidate ou absent |
| Usage | experimental cognitive guidance |
| Autorité | aucune autorité d’exécution |
| Fallback | template SFIA v2.6 + packs T-A7 sur main |
| Limites | ne peut ni ouvrir T-A7 ni autoriser une implémentation |

---

## 9. Anti-claims

- lecture technique ≠ autorisation de modification ;
- inventaire Wave 1 ≠ retrait ;
- F* décidées ≠ surfaces livrées ;
- ce pack ≠ préparation technique exécutable.
