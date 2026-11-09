# SFIA Review Pack FULL — ML4 Publication Git Technical Consolidation

**Date/heure (Europe/Paris) :** 2026-11-09 ~01:05 CET
**Cycle :** DELIV-2026-11-09-ML4-PUBLICATION-GIT-TECHNICAL-CONSOLIDATION
**Profil :** CRITICAL · INC / CONSOLIDATION BORNÉE
**Processus :** SFIA v2.6 · SEF v0.2
**Lane :** DEV / E2E isolé — `NO RELEASE` / `0.0.0-dev`
**GO Morris :** Consolidation technique ML4 — **aucune** nouvelle mutation GitHub REAL
**Arbitrage Morris :** USER E2E navigateur = **RECETTE personnelle Morris** (exclu de ce cycle)
**Handoff parent :** `160becf9a41ab12f16a47fd2e83d3342f4a70572`
**Verdict :** `ML4 PUBLICATION GIT — TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE`

---

## 1. Mandat

Consolider autorité, identité de contenu, guards REAL, idempotence et preuves à partir du premier E2E REAL déjà vérifié. Ne pas relancer de publication. Ne pas simuler le Pilote en navigateur DEV.

### Acquis préservés (références de qualification — pas d’autorisation d’effet)

| Objet | Valeur |
| --- | --- |
| Repo | `mcleland147/chantiers360` |
| Branche | `sfia/pub-pub-e2e-2026` |
| Commit | `790a531579acd1a56243e84bf44a305a22e512d2` |
| PR | **#18 OPEN**, NON MERGED |
| main | `8c398c494dd918272aab5b2653777c6c21d2e76e` |
| D4 | `doc_8351c2b1…` / `drev_ce62a84c…` |
| D6 | `dec_b93e9bef…` |
| D7 | `efx_fcca79b2…` |
| D8 | `dpr_f8ac5ff7…` |

---

## 2. Git Truth Product

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| local `main` | `4b1a0580…` (stale, non utilisé) |
| Staged | vide |
| Product commit/push/PR | **aucun** |
| Mutations GitHub REAL ce cycle | **aucune** |
| Migrations | `001`–`012` ; **aucune** migration nouvelle |

```text
Git Review Index
- base branch : main @ c658f590…
- Product branch : feat/next-git-collaboration-20261108
- HEAD Product inchangé : c658f590…
- Handoff parent : 160becf9…
- commits Product créés : 0
- review pack : full
- Fake/Real applicable : oui
- niveau déclaré : DETERMINISTIC PROVEN (consolidation) + REAL BOUNDARY evidence préservée (E2E antérieur)
- USER E2E navigateur : NOT RUN / MORRIS RECETTE
```

---

## 3. Sources lues

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (via template CRITICAL)
- `prompts/templates/sfia-cycle-execution-template.md`
- SEF, roadmap, environnements, versioning, naming, décision ML4/ML5
- `conception-fonctionnelle/integration-git-gouvernee.md`, `cadrage-r4.md`
- `construction/integration-git/{contrat,specification,matrice}`
- `ux-ui/integration-git-ux-ml4.md`
- Handoff `160becf9` + code local D4/D6/D7/D8/D9 publication

---

## 4. Blast radius (ce cycle)

**Modifié / créé (code) :**

- `web/src/domains/integrations/real-github-provider.ts` — gate + marker exact
- `web/src/domains/integrations/github-provider.ts` — commentaire contrat flag
- `web/src/domains/execution/fingerprint.ts` — `publicationBranchFromCorrelationKey`
- `web/src/domains/execution/effect-authority.ts` — AND bindings + decision.effect_conditions + REAL source
- `web/src/domains/execution/effect-service.ts` — branch, authorize, dual fp, reconcile tip, ACCESS_DENIED→FAILED
- `web/src/domains/execution/types.ts` — `contentBlobSha`
- `web/src/domains/decisions/service.ts` — `effectConditions` sur insert
- `web/tests/unit/publication-branch-marker.test.ts` — **nouveau**
- `web/tests/unit/real-github-mutations-gate.test.ts` — aliases refusés

**Docs AS-IMPLEMENTED :** `delivery-history.md`, `matrice-acceptation.md` §20–21, `specification-technique.md` bandeau

**Interdit touché :** governance/, méthode, templates, ADR, App config, secrets, migrations

---

## 5. Preuve D4 ↔ Git (reconstructible)

**Méthode :** `revisionContentFingerprint` = SHA-256(UTF-8 markdown) ; relecture GitHub Contents API `?ref=<commitSha>` ; égalité UTF-8 + digests.

```json
{
  "verifiedAt": "2026-11-08T23:55:16.772Z",
  "d4": {
    "revisionId": "drev_ce62a84c-5ce6-46c3-a0cd-5d85356d27e9",
    "jsLen": 506,
    "byteLen": 513,
    "sha256": "11906026bd7b161d2c1e1b61f0191b5485ad91131cb61c19a418b19e00936a31"
  },
  "git": {
    "path": "docs/studio-next/publication-e2e.md",
    "refCommit": "790a531579acd1a56243e84bf44a305a22e512d2",
    "blobSha": "da920aca1ac8a53444b15385e8f4094ca4f2edfe",
    "jsLen": 506,
    "byteLen": 513,
    "sha256": "11906026bd7b161d2c1e1b61f0191b5485ad91131cb61c19a418b19e00936a31"
  },
  "equality": { "contentEqual": true, "sha256Equal": true }
}
```

**Limite antérieure :** `contentMatchesD4=true` dans `bounded-e2e-verify.json` **sans** digests → non reconstitutable depuis le JSON seul. Ce cycle reconstitue depuis DEV DB + GitHub READ.

**Canonicalisation produit :** SHA-256 sur string UTF-8 JS (pas le blob Git SHA-1). `jsLen` 506 ≠ `byteLen` 513 (caractères multi-octets).

---

## 6. Analyse D6 — autorité

### Distinctions obligatoires

| # | Niveau | Statut ce cycle |
| --- | --- | --- |
| 1 | Contrat d’autorité **implémenté** | PROVEN (code + tests DET) |
| 2 | Décision D6 **persistée** | PROVEN (`dec_b93e9bef…` APPLICABLE) |
| 3 | Effet **contrôlé** par D6 au dispatch | PROVEN (`assertCurrentGitAuthority` / `assertStepAuthority`) |
| 4 | Geste humain interactif **observé** | **NOT RUN** — USER E2E RECETTE Morris |

L’E2E REAL antérieur a autorisé via API Studio (`POST …/authorize`) avec session pilote — cela prouve le **contrat + persistance + contrôle**, **pas** une observation UI de confirmation humaine. Ne pas rétro-qualifier « HumanDecision utilisateur observée ».

### Contrat (après consolidation)

- `decisionId`, `pilotId`, `projectId`, kind `GIT_PUBLICATION_MANDATE`
- `sourceRef` **et** `objectRef` = `attemptId` (AND — OR corrigé)
- `effect_conditions` écrites **sur la décision** (fingerprint + envelope enrichie : revisionFingerprint, path, branches, baseSha, steps)
- Fallback legacy : fingerprint attempt si décision historique sans `effect_conditions` (`dec_b93e9bef…` a `effect_conditions=null` — KNOWN pour l’artefact historique)
- Authorize idempotent : re-vérifie fingerprint d’inspection + décision APPLICABLE
- Dispatch : re-check D6, revision AVAILABLE, dual fingerprint (rev + plan), base HEAD

### `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`

Gate **opérateur** dans le provider REAL uniquement. **Ne remplace pas** D6. Product path : D6 puis provider.

---

## 7. Analyse D7 / D9 — guards

### A. Mutation REAL

```ts
export function isBoundedRealMutationAllowed(): boolean {
  const v = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  // Contract: only `documentary` opens the gate. `1`/`bounded` are rejected.
  return v === "documentary";
}
```

### B. Identité

- Mutations : `userAccessToken` only — pas de fallback installation
- Installation token : READ-only (write rejetée côté `createInstallationAccessToken`)
- REAL : permissions snapshot exige `source === "user_token_observed"`

### C. Cible

- Repo allowlist credentials
- `assertMutableBranch` refuse main/master
- Path policy documentary
- Create-only file (pas d’overwrite)
- Base HEAD revalidé au dispatch

### D. Idempotence / concurrence

**Corrigé :** branche = `sfia/pub-` + `sha256(correlationKey).hex[:16]` (plus de collision `slice(0,12)`).

```ts
export function publicationBranchFromCorrelationKey(correlationKey: string): string {
  const slug = createHash("sha256").update(correlationKey, "utf8").digest("hex").slice(0, 16);
  return `sfia/pub-${slug}`;
}
```

**Corrigé :** marker PR = ligne exacte `sfia-publication:<marker>` (plus de substring).

**Corrigé :** reconcile `commitSha` = tip de branche (`branchSha`), blob Contents → `contentBlobSha`.

**Corrigé :** `ACCESS_DENIED` / transport `DEPENDENCY_UNAVAILABLE` ne laissent plus `DISPATCHED` wedge → `FAILED` / `AMBIGUOUS`.

Lease fencing 60s inchangé. Merge REAL hard-blocked.

### E. Permissions mapping

Collaborator booleans → contents/PR levels (inchangé). Sur REAL, `source` doit être `user_token_observed`. Intersection App grant vs collaborator **non** implémentée (KNOWN GAP — 403 GitHub reste le filet distant).

### F. Merge

`mergePullRequest` → toujours `mutationBlocked` ; flag ignoré.

---

## 8. Chaîne D8 et limites

| Lien | ID / SHA | Preuve | Limite |
| --- | --- | --- | --- |
| D4 doc/rev | `doc_8351c2b1…` / `drev_ce62a84c…` | DB DEV | — |
| Digest | `11906026…` | reconstruit | — |
| Inspection | fp `e71a6997…` | attempt effect_conditions | — |
| D6 | `dec_b93e9bef…` | DB ; statement API | geste UI NOT RUN |
| D7 | `efx_fcca79b2…` COMPLETED | DB | — |
| Commit | `790a5315…` | GitHub READ | ≠ conformité globale |
| Blob | `da920aca…` | Contents API | ≠ commit SHA |
| PR | #18 OPEN | GitHub | ≠ merge |
| D8 ref | `dpr_f8ac5ff7…` PR_OPEN · headSha commit | DB | — |
| main | `8c398c49…` | inchangée | — |

**Claims interdits ici :** USER E2E BEHAVIOR PROVEN · RECETTE ACCEPTED · MERGE REAL PROVEN · ML4 CLOSED · ADOPTED

---

## 9. Code sensible — sections consolidées

### Gate + marker (`real-github-provider.ts`)

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

### Authority binding + mandate fingerprint (`effect-authority.ts`)

```70:96:projects/sfia-studio-next/web/src/domains/execution/effect-authority.ts
  if (ctx.expectedKind === "GIT_PUBLICATION_MANDATE") {
    // Both bindings required — OR previously allowed a same-project foreign mandate.
    if (decision.sourceRef !== ctx.attemptId || decision.objectRef !== ctx.attemptId) {
      throw new StudioError("ACCESS_DENIED", "Mandat D6 non lié à cette tentative");
    }
  } else if (ctx.expectedKind === "GIT_MERGE_MANDATE") {
    if (decision.sourceRef !== ctx.attemptId) {
      throw new StudioError("ACCESS_DENIED", "Mandat merge D6 non lié à cette tentative");
    }
  }

  const decisionMandateFp = parseEffectConditionsFingerprint(decision.effectConditions);
  const attemptMandateFp = ctx.effectConditionsFingerprint;
  // Prefer decision.effect_conditions (mandate of record); attempt JSON is legacy fallback.
  const mandateFp = decisionMandateFp ?? attemptMandateFp;
  if (!mandateFp || mandateFp.length === 0) {
    throw new StudioError("ACCESS_DENIED", "Conditions d'effet D6 absentes — fail-closed");
  }
  if (mandateFp !== ctx.fingerprint) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Empreinte mandat ≠ plan courant");
  }
  if (decisionMandateFp && attemptMandateFp && decisionMandateFp !== attemptMandateFp) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Conditions d'effet décision ≠ tentative",
    );
  }
```

### Tests nouveaux (fichier complet)

Voir `web/tests/unit/publication-branch-marker.test.ts` (60 lignes) — collision branche, marker exact, aliases gate.

---

## 10. Tests

| Suite | Résultat |
| --- | --- |
| tsc --noEmit | PASS |
| unit | **178 PASS** (32 files) — was 171 |
| integration PG | **211 PASS** |
| build | PASS |
| Playwright | **13/13 PASS** |
| git diff --check | PASS (pas d’erreurs) |

Négatifs couverts / renforcés : aliases gate ; marker prefix ; collision branche ; path code/CI (existants) ; merge hard-block (existant).

Aucune mutation GitHub REAL dans les suites.

---

## 11. ENOENT `.next` / Turbopack

Incident DEV observé après rebuild qui vide `.next` pendant qu’un serveur Turbopack tourne. **Mécanisme :** race artefacts vs process vivant. **Isolation :** E2E :3101 / SCRIPTED distinct. **Publication code :** non lié. **Reproductible bloquant construction :** non démontré ce cycle. → **KNOWN GAP** incident serveur DEV — pas de hardening gratuit.

---

## 12. Critères RECETTE (traçabilité — NOT RUN)

| Critère | Statut |
| --- | --- |
| Document/révision | prêt à recetter |
| Diff/inspection | prêt |
| Confirmation utilisateur D6 | **USER E2E RECETTE — NOT RUN / MORRIS** |
| Publication / commit / PR | acquis techniques préservés |
| Erreur/reprise | DET consolidé |
| Restitution après refresh | prêt à recetter |
| Fidélité Figma 227–231 | dette convergence UX — RECETTE |

Ce report est un **arbitrage accepté**, pas un échec QA DEV.

---

## 13. Fake/Real Qualification

```text
Fake / Real Qualification
- applicable : oui
- fake/fixture : SCRIPTED + Playwright :3101
- REAL correspondante : evidence E2E antérieure préservée (pas de rejoue)
- niveau ce cycle : DETERMINISTIC PROVEN (consolidation) ; REAL E2E documentary antérieur inchangé
- USER E2E navigateur : NOT RUN / MORRIS RECETTE
- claims autorisés : TECHNICAL CONSOLIDATION REVIEW READY
- claims interdits : USER E2E BEHAVIOR PROVEN ; MERGE REAL PROVEN ; RECETTE ACCEPTED ; ML4 CLOSED ; ADOPTED
```

---

## 14. ENV-01 / versioning

DEV autorisé · E2E isolé · RECETTE = Morris seulement · STABLE N/A · `0.0.0-dev` · pas de promotion · pas de migration nouvelle · pas de merge PR #18 · pas de push Product.

---

## 15. KNOWN GAP / dette / exit

1. Décision historique `dec_b93e9bef…` : `effect_conditions` null (fallback attempt) — nouvelles autorisations écrivent la décision.
2. Pas d’intersection App grant ∩ collaborator permissions (403 distant).
3. Head GET-then-PUT non CAS atomic Git (TOCTOU résiduel).
4. `publicationEffectFingerprint` n’inclut toujours pas les octets markdown bruts (dual check rev/plan au dispatch).
5. ENOENT Turbopack DEV.
6. USER E2E + Figma pixel → Morris RECETTE.
7. Merge REAL hors scope.

---

## 16. Gates Morris

| Gate | Statut |
| --- | --- |
| Critical Review ChatGPT consolidation | **demandé** |
| USER E2E RECETTE | réservé Morris |
| Merge PR #18 | NON |
| Product push/PR | NON |
| ML5 | hors scope |

---

## 17. Review pack coverage

- réinitialisé : oui
- niveau : **full**
- synthesis only : **no**
- secrets : absents (anti-secret scan pack)
- verdict pack : **complete**

---

## 18. Verdict unique

`ML4 PUBLICATION GIT — TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE`
