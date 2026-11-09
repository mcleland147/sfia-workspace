# SFIA Review Pack FULL — ML4 Product Integration Review (Cycle 9 QA)

**Date/heure (Europe/Paris) :** 2026-11-09 ~01:20 CET
**Cycle :** DELIV-2026-11-09-ML4-PRODUCT-INTEGRATION-REVIEW
**Type :** CYCLE 9 — QA / VALIDATION · CRITICAL · PRÉ-INTÉGRATION
**Processus :** SFIA v2.6 · CKC QA candidat (raisonnement) · SEF v0.2
**Version :** NO RELEASE / `0.0.0-dev`
**GO Morris :** Audit d'intégration Product ML4 — **pas** GO modification / publication Product
**Handoff parent :** `58cccb490956516ea147d7917d1f34dcfbe274f4`
**Verdict :** `ML4 PRODUCT INTEGRATION REVIEW — READY WITH CARRIED RESERVES — MORRIS GIT GATE REQUIRED`

---

## 1. Mandat et résultat

Évaluer le cumul technique ML4 local (D1–D9, migrations 008–012, autorité, mutations REAL bornées, sécurité, concurrence) pour permettre un verdict ChatGPT documenté et un futur GO Git Morris **distinct**.

**Hors mandat (respecté) :** pas de construction ; pas d'E2E navigateur utilisateur ; pas de mutation GitHub REAL ; pas de commit/push/PR/merge Product.

---

## 2. Git Truth Product

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main (après fetch) | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| local `main` | `4b1a0580…` **stale** — ne pas utiliser |
| HEAD == origin/main | **oui** — tout le cumul ML4 est **LOCAL DIRTY** (non committé) |
| Staged | **vide** |
| Handoff remote | `58cccb49…` (parent attendu OK) |
| Product commit/push/PR ce cycle | **aucun** |
| Mutation GitHub REAL ce cycle | **aucune** |

```text
Git Review Index
- base : origin/main @ c658f590…
- Product branch tip : c658f590… (identique base)
- contenu candidat : tracked modified + untracked (dirty)
- SHA candidat immuable : ABSENT (dirty ≠ source_sha)
- Handoff parent : 58cccb49…
- review pack : full
- Fake/Real : niveaux séparés §16
- USER E2E : NOT RUN / MORRIS RECETTE
```

---

## 3. Sources consultées

| Source | Ref / note |
| --- | --- |
| `sfia-cycle-routing-guide.md` / template exécution | SFIA v2.6 CRITICAL / Fake-Real / Review Pack |
| CKC `pilots/04-qa-validation.md` | candidate 0.1.0 — raisonnement QA |
| SEF, roadmap, ENV-01, versioning, naming | governance/ |
| Décision `2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` | D2 contenu Morris ; **NOT MERGED** — ne pas inventer GO build |
| conception / cadrage-r4 / construction contracts | worktree local |
| Handoff consolidation | `58cccb49` |
| Roadmap main @ 2026-11-07 | snapshot ; travaux locaux plus récents = dirty ML4 |

---

## 4. Inventaire Product exhaustif

### 4.1 Diff vs origin/main

Comme HEAD == origin/main, `git diff origin/main...HEAD` est vide. Le candidat = `git diff HEAD` (tracked) + untracked.

**Tracked modified (21) — name-status :**

```text
M  .tmp-sfia-review/chatgpt-review.md          ← artefact revue (EXCLU Product)
M  construction/delivery-history.md
M  construction/integration-git/matrice-acceptation.md
M  construction/integration-git/specification-technique.md
M  web/package-lock.json                         (−1 ligne)
M  web/scripts/db-migrate.sh
M  web/scripts/e2e-web-server.sh
M  web/src/app/projects/[projectId]/page.tsx
M  web/src/components/figma/ProjectChrome.tsx
M  web/src/components/shell/StudioShell.tsx
M  web/src/components/shell/studio-rail.ts
M  web/src/db/schema.ts
M  web/src/domains/conversation/cognitive-policy.ts
M  web/src/domains/conversation/nora-adapter.ts
M  web/src/domains/conversation/service.ts
M  web/src/domains/decisions/service.ts
M  web/src/domains/identity/portfolio-cursor.ts
M  web/src/domains/identity/portfolio.ts
M  web/src/lib/http-errors.ts
M  web/tests/unit/ml3-cki-intent.test.ts
M  web/vitest.config.ts
```

**Diff stat tracked :** 21 files, ~+1415 / −159 (hors untracked).

### 4.2 Untracked (68 chemins)

**EXCLUS Product (preuves locales) :**

- `projects/.tmp-sfia-review/real-oauth-proofs/real-read-proof.json`
- `projects/.tmp-sfia-review/real-publication-proofs/bounded-e2e-verify.json`

**DEV tooling (décision Git Gate) :**

- `web/scripts/github-app-installation-read-qualify.ts`

**IN SCOPE Product (résumé par responsabilité) :**

| Zone | Contenu |
| --- | --- |
| Migrations | `008`–`012` SQL |
| Schema | tables Git collab / OAuth / publication (via `schema.ts` tracked) |
| D9 integrations | `domains/integrations/*` (14 fichiers) + API `/api/integrations/*` |
| D7 execution | `domains/execution/*` (6) + API publications/merge/reconcile/links/file/refs/sources |
| D8 proofs | `domains/proofs/qualify.ts` |
| D3 git-read | `git-read-tools.ts` + policy tools |
| UI | `settings/integrations`, `IntegrationsPanel`, `PublicationInspectionPanel` |
| Crypto | `lib/token-crypto.ts` |
| Tests | unit ×14 nouveaux + `git-collaboration.pg.test.ts` + e2e `git-collaboration.spec.ts` |

### 4.3 Blast radius

API · DB 008–012 · auth OAuth App · D4 publication refs · D6 mandates · D7 effects · D8 qualify · D9 provider · UI Paramètres/Projet · scripts DEV/E2E · tests · docs construction. ML1–ML3 touchés marginalement (shell/rail/portfolio/http-errors/cki-intent) — non-régression DET PASS.

### 4.4 Ancien Studio

Aucune reprise de baseline technique ancien Studio observée dans le chemin publication ; provider Next-native.

### 4.5 Granularité Git future

Macro-lot unique recommandé sous GO Morris : **un commit Product** (ou série ordonnée docs→schema/migrations→domains→API/UI→tests) sur branche feature depuis `c658f590`, puis PR. Dirty actuel **n'est pas** un SHA figé.

---

## 5. Contrats D1–D9 (audit code)

| Domaine | Constat |
| --- | --- |
| **D1** | Better Auth + DEV adapter lane-scoped ; OAuth App distinct ; cookie host `127.0.0.1` documenté |
| **D2** | Projet sans dépôt obligatoire ; links ATTACHED facultatifs |
| **D3** | `git-read-tools` lecture bornée ; sources non autorisantes |
| **D4** | Révisions + `document_publication_refs` ; digest SHA-256 reconstruit `11906026…` = Git |
| **D6** | HumanDecision ; `sourceRef` **AND** `objectRef` ; `effect_conditions` sur nouveaux mandats ; contrôle point d'effet |
| **D7** | prepare/authorize/dispatch/reconcile ; claim lease ; correlationKey ; branche hash ; pas de 2e moteur |
| **D8** | Facts + publication ref ; SUCCESS/AMBIGUOUS/FAILED ; pas de conformité inventée |
| **D9** | REAL vs SCRIPTED ; user-token writes ; documentary-only ; merge hard-blocked ; path policy |

### Preuves REAL antérieures (périmètre borné — non rejouées)

| Fait | Valeur |
| --- | --- |
| Commit | `790a531579acd1a56243e84bf44a305a22e512d2` |
| PR | #18 OPEN non mergée |
| main | `8c398c49…` inchangée |
| D4/D6/D7/D8 | `doc_8351c2b1…` / `dec_b93e9bef…` / `efx_fcca79b2…` / `dpr_f8ac5ff7…` |
| Digest | SHA-256 `11906026…` (D4 = Git) |

---

## 6. Code sensible inspecté (extraits)

### Gate mutations REAL + marker exact

```37:48:projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
export function isBoundedRealMutationAllowed(): boolean {
  const v = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  // Contract: only `documentary` opens the gate. `1`/`bounded` are rejected.
  return v === "documentary";
}

/** Exact line match for publication marker — substring/prefix matches refuse. */
export function prBodyHasPublicationMarker(body: string | null | undefined, marker: string): boolean {
  if (!body || !marker) return false;
  const needle = `sfia-publication:${marker}`;
  return body.split(/\r?\n/).some((line) => line.trim() === needle);
}
```

### D6 bindings AND + mandate fingerprint

```70:96:projects/sfia-studio-next/web/src/domains/execution/effect-authority.ts
  if (ctx.expectedKind === "GIT_PUBLICATION_MANDATE") {
    // Both bindings required — OR previously allowed a same-project foreign mandate.
    if (decision.sourceRef !== ctx.attemptId || decision.objectRef !== ctx.attemptId) {
      throw new StudioError("ACCESS_DENIED", "Mandat D6 non lié à cette tentative");
    }
  }
  // ...
  const decisionMandateFp = parseEffectConditionsFingerprint(decision.effectConditions);
  const attemptMandateFp = ctx.effectConditionsFingerprint;
  const mandateFp = decisionMandateFp ?? attemptMandateFp;
  if (!mandateFp || mandateFp.length === 0) {
    throw new StudioError("ACCESS_DENIED", "Conditions d'effet D6 absentes — fail-closed");
  }
```

### REAL permission source gate

```209:218:projects/sfia-studio-next/web/src/domains/execution/effect-authority.ts
  const providerMode = (process.env.STUDIO_GITHUB_PROVIDER ?? "").toLowerCase().trim();
  if (providerMode === "real") {
    if (permissions.source !== "user_token_observed") {
      throw new StudioError(
        "ACCESS_DENIED",
        "Permissions REAL non observées via user token — fail-closed",
        { exposeMessage: true },
      );
    }
  }
```

### Isolation DET (vitest)

```text
STUDIO_GITHUB_PROVIDER: "scripted"
STUDIO_GITHUB_USER_OAUTH: ""
STUDIO_GITHUB_ALLOW_MUTATIONS: ""
```

(`e2e-web-server.sh` : mêmes neutralisations + port 3101 / `.next-e2e`)

### Gros fichiers (règle taille — sections + justification)

| Fichier | Lignes | Représentation pack |
| --- | --- | --- |
| `effect-service.ts` | 2548 | sections authorize/dispatch/reconcile auditées cycles antérieurs + consolidations |
| `git-collaboration.pg.test.ts` | 3170 | suite négatifs D6/D7/D9 SCRIPTED |
| `authorization-service.ts` | 1103 | OAuth lifecycle R1-A/R1-B |
| `github-app-auth.ts` | 681 | REST refs/contents/PRs ; installation READ |
| Migrations 008–012 | ~courtes | heads capturés sous `.tmp-sfia-review/snippets/migrations-008-012-heads.txt` |

Contenu complet des nouveaux modules critiques non re-collé en totalité ici (taille) ; inventaire + extraits + tests PASS + handoffs `ffffec1f` / `160becf9` / `58cccb49` forment la chaîne de revue.

---

## 7. Migrations / compatibilité

| Item | Statut |
| --- | --- |
| 001–007 | préservées |
| 008–012 | additives locales (untracked) — Git collab, pub uniqueness, user OAuth, session binding, concurrency |
| Migration nouvelle ce cycle | **aucune** |
| Compat prospective vs origin/main | HEAD = tip main → delta dirty **fast-forwardable** si main ne bouge pas ; **merge-tree uncommitted NOT TESTED** (pas de WT temporaire créé) |
| package-lock | −1 ligne (mineur) |

---

## 8. Risques R1–R8

| ID | Verdict | Motif court |
| --- | --- | --- |
| R1 D6 legacy `effect_conditions` null | **CARRIED RESERVE** | Fallback attempt fp ; AND bindings restent ; nouveaux mandats écrivent la décision |
| R2 App ∩ user permissions | **CARRIED RESERVE** | Snapshot peut over-grant localement ; 403 GitHub = ACL live ; pas de bypass installation |
| R3 GET/PUT TOCTOU | **CARRIED RESERVE** | Pas d'overwrite silencieux ; parents non inspectés possibles ; merge Studio bloqué |
| R4 Fingerprint sans octets bruts | **CARRIED RESERVE** | Dual check rev/plan SHA-256 au dispatch |
| R5 localhost / cookies | **CARRIED RESERVE** | Host mismatch → logout/fail ; pas d'usurpation cross-DB prouvée |
| R6 ENOENT Turbopack | **NON ISSUE** | Disponibilité DEV ; E2E `.next-e2e` isolé |
| R7 Badge / copy SCRIPTED | **CARRIED RESERVE** | Misread UX possible ; pas de bypass serveur (copy « Effet Git observé (SCRIPTED) » même si REAL) |
| R8 Docs AS-IMPLEMENTED | **CARRIED RESERVE** | §20–21 alignés ; §6 historique encore présent |

**Aucun BLOCKER** d'effet non autorisé / usurpation / écriture erronée sans filet identifié avec preuve contraire solide.

---

## 9. Validations exécutées (ce cycle)

| Contrôle | Résultat |
| --- | --- |
| tsc --noEmit | **PASS** |
| unit | **178 PASS** / 32 files |
| integration PG | **211 PASS** / 12 files |
| build | **PASS** |
| Playwright | **13/13 PASS** (SCRIPTED :3101) |
| git diff --check | **PASS** (tracked) |
| Secret scan candidat src/scripts/tests | fixtures test only (`test-secret`, PEM factice) — **pas de secret réel** |
| Mutation GitHub REAL | **NOT RUN** (interdit) |
| USER E2E navigateur | **NOT RUN** / MORRIS RECETTE |
| Merge-tree dirty→main | **NOT TESTED** (HEAD=main ; candidat uncommitted) |

Isolation suites : vitest/e2e forcent SCRIPTED + ALLOW_MUTATIONS vide. Shell opérateur peut avoir REAL flags — **non utilisés** par les suites.

---

## 10. Fake / Real Qualification (§6.16)

```text
Fake / Real Qualification
- OAuth READ REAL : preuve antérieure acceptée (périmètre borné)
- Commit+PR REAL : faits GitHub antérieurs vérifiés (#18 OPEN)
- Consolidation technique : DETERMINISTIC PROVEN (cycle précédent)
- Ce cycle : QA Product — DETERMINISTIC re-proven ; pas de nouvelle mutation
- USER E2E navigateur : NOT RUN — MORRIS RECETTE
- Merge REAL : NOT PROVEN / NON AUTORISÉ
- Product intégré : NOT PROVEN
- RECETTE : NOT STARTED
- claims interdits : GO COMMIT/PUSH/PR/MERGE ; RECETTE ACCEPTED ; ML4 CLOSED ; ADOPTED
```

---

## 11. ENV-01 / versioning

DEV/E2E isolé OK · RECETTE non touchée · STABLE N/A · `0.0.0-dev` · **pas de recette depuis dirty** (ENV-01) · futur build RECETTE = après GO Git figé.

---

## 12. Manifeste pré-candidat (non immuable)

| Champ | Valeur |
| --- | --- |
| Branche | `feat/next-git-collaboration-20261108` |
| Base | `origin/main` @ `c658f590…` |
| HEAD Product | `c658f590…` |
| SHA immuable | **ABSENT** — LOCAL DIRTY |
| Fichiers candidats | tracked mods Product + untracked IN SCOPE (§4) |
| Exclus | `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**` |
| Tooling optionnel | `github-app-installation-read-qualify.ts` |
| Migrations | 008–012 |
| Suites | 178 / 211 / 13/13 + tsc/build |
| Réserves | R1–R5, R7, R8 CARRIED ; R6 NON ISSUE |
| Correctifs obligatoires pré-gate | **aucun BLOCKER** ; UX copy R7 et doc §6 recommandés post-gate ou sous GO correctif distinct |

Ce manifeste **n'autorise pas** de publier.

---

## 13. Préparation RECETTE Morris (traçabilité)

| Critère | Statut |
| --- | --- |
| Connexion / dépôt | prêt après build figé |
| Lecture Nora + provenance | prêt |
| D4 révision | prêt |
| Inspection diff | prêt |
| Décision D6 explicite Morris | **NOT RUN** |
| Commit/PR observés | acquis sandbox #18 (réf.) |
| Erreurs/reprise | DET |
| Reload restitution | prêt à recetter |
| UX Figma 227–231 | dette |

Build RECETTE identifiable **après** GO Git Morris + commit.

---

## 14. Gates Morris encore nécessaires

1. Critical Review ChatGPT de **cette** revue d'intégration
2. Arbitrage CARRIED RESERVES (surtout R2/R3/R7)
3. **GO Git Product distinct** pour figer le candidat (commit)
4. Push/PR Product (GO séparé)
5. Build RECETTE identifiable
6. USER E2E Morris
7. Merge PR documentaire #18 — GO distinct (DEC-GIT-B)

---

## 15. Contradictions code/doc

- Matrice §6 encore « REAL NOT PROVEN » à côté §20–21 PROVEN → R8
- UI `PublicationInspectionPanel` : messages « SCRIPTED » / « Effet Git observé (SCRIPTED) » même quand provider REAL → R7
- Décision ML4/ML5 documentaire **NOT MERGED** : contenus validés ; pas GO code historique — l'implémentation locale est candidate dirty

---

## 16. Review pack coverage

- réinitialisé : oui
- niveau : **full**
- synthesis only : **no**
- secrets : absents du pack
- verdict pack : **complete**

---

## 17. Verdict unique

`ML4 PRODUCT INTEGRATION REVIEW — READY WITH CARRIED RESERVES — MORRIS GIT GATE REQUIRED`

**Anti-claims :** GO COMMIT PRODUCT · GO PUSH · GO PR · GO MERGE · RECETTE ACCEPTED · ML4 CLOSED · STABLE AVAILABLE · ADOPTED
