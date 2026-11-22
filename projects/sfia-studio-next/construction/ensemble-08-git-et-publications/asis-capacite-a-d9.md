# D9 / Git integration — AS-IS report (Ensemble 08 Capacité A)

Scope: `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/`

Reference contract: `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md` (A01–A15). Your checklist A1–A10 maps closely to A01–A10/A12–A15 in that doc.

---

## Executive summary

| Area | Verdict |
|------|---------|
| **Data model multi-repo** | **EXISTS** — `authorized_repositories` + `project_git_links` (many repos per pilot/project via `repositoryId`) |
| **Personal GitHub auth (D9)** | **EXISTS** — user-to-server OAuth + SCRIPTED DEV path |
| **Read path (file + refs)** | **EXISTS** — `readGitFile`, `listGitRefs`, HTTP + Nora tools |
| **Consultation UX (tree, branch picker, 30/70 Git browser)** | **MOSTLY MISSING** — Travail git viewer is reference-driven only; `git`/`publication` surfaces render D7 `PublicationInspectionPanel` |
| **Directory enumeration** | **MISSING** — not on `GitHubProvider`, no API/tool |
| **Publications list (multi-repo)** | **MISSING** at UI/API read layer — writes in `effect-service.ts` only |
| **REAL provider reads** | **PARTIAL mono-repo** — `assertAllowedRepo` + install token tied to `GITHUB_APP_ALLOWED_FULL_NAME` |

---

## 1. Capabilities matrix (your A1–A10)

| ID | Need | AS-IS | Key files / symbols | API routes | DB tables | UI surfaces |
|----|------|-------|---------------------|------------|-----------|-------------|
| **A1** Personal GitHub auth | **EXISTS** | `startGitHubAuthorization`, `completeGitHubAuthorization`, `resolveGithubUserAuthFlow` — `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/src/domains/integrations/authorization-service.ts`; guard — `scripted-github-guard.ts` | `POST /api/integrations/github/authorize`, `POST .../authorize/complete`, `GET .../callback`, `GET /api/integrations/status` | `integration_authorizations`, `integration_oauth_states` | `IntegrationsPanel.tsx` (`/settings/integrations`) |
| **A2** Multi authorized repos; associate / remove | **PARTIAL** | **Authorize/refresh:** `refreshRepositories`, `seedAuthorizedReposInTx` (marks missing repos `REMOVED`). **Project attach:** `attachRepositoryToProject`, `detachProjectLink`. No per-repo “remove from GitHub” UI—only sync via refresh/disconnect. Detach API exists, **no UI**. | `GET/POST /api/projects/[projectId]/git/links`, `DELETE .../links/[linkId]`, `POST /api/integrations/github/refresh`, `GET /api/integrations/github/repositories` | `authorized_repositories`, `project_git_links` | Integrations repo list; `PublicationInspectionPanel` attach buttons only |
| **A3** Active repo selection | **PARTIAL** | Selection by `repositoryId` in D7 panel + Nora `TurnReference` (`repositoryId`). No persisted “active repo” on project; no Git consultation chrome. | `GET .../git/sources` → `listProjectGitSources` | `project_git_links` | `PublicationInspectionPanel` `<select data-testid="publication-repo">`; Travail git opens with explicit `repositoryId` in reference |
| **A4** Branch selector | **PARTIAL** | Server: `listGitRefs` → `provider.listRefs` (max 40). UI: free-text `targetBranch` for publication; **no** branch dropdown for consultation. Nora: `list_git_refs` tool. | `GET .../git/refs?repositoryId=&refPrefix=` | — | Publication branch input only |
| **A5** On-demand directory listing | **MISSING** | `GitHubProvider` has file/refs/mutations only — no `listDirectory`. No `git/tree` route. Nora tools: `list_project_git_sources`, `read_git_file`, `list_git_refs` only (`git-read-tools.ts`). | — | — | — |
| **A6** File read (md/text/binary/absent) | **PARTIAL** | `readGitFile` + honest provenance (`FILE_ABSENT_AT_VERIFIED_REF`, `REF_UNRESOLVED`, `READ_NOT_FOUND_UNQUALIFIED`). **Text only:** `fetchFileContentUtf8` rejects non-file/non-base64 (`github-app-auth.ts`); returns `encoding: "utf-8"` only. Viewer: `openTravailReference` → `GET .../git/file`. | `GET .../git/file?repositoryId&path&ref` | — (reads via links + auth) | `TravailViewer.tsx` (`<pre>` for git); Nora `read_git_file` |
| **A7** Viewer 30/70 | **PARTIAL** | Travail split exists but CSS is **50/50**, not 30/70: `.project-travail-stage[data-travail-layout="split"]` in `tokens.css`. Enlarge/collapse: `viewerEnlarged`, `travailLayout` in `page.tsx`. Git meta in viewer header; **no** repo/branch/tree chrome at top for A10-style layout. | — | — | `ProjectChrome` + `TravailViewer` on `surface=travail` only |
| **A8** Studio publications list (multi-repo) | **MISSING** | Persistence on publish: `effect-service.ts` → `documentPublicationRefs`, `effectAttempts`, `observedGitFacts`. **No** `GET` listing by project; git/publication surfaces only show D7 inspection workflow. | Publication **mutations** only under `.../git/publications/*`, `.../merge/*`, `.../effects/.../reconcile` | `document_publication_refs`, `effect_attempts`, `observed_git_facts` | `PublicationInspectionPanel` (single in-flight attempt, not history list) |
| **A9** Integrations status / disconnect | **EXISTS** | `getIntegrationStatus`, `disconnectIntegration` (local revoke + mark repos `REMOVED`; comment: no remote GitHub revoke). | `GET /api/integrations/status`, `POST .../disconnect`, `POST .../refresh` | `integration_authorizations`, `authorized_repositories` | `IntegrationsPanel` banners + disconnect/refresh |
| **A10** Responsive / degraded | **PARTIAL** | Travail stacks below 1100px (`tokens.css` `@media`). Git consult surface not a dedicated responsive flow; disconnected → reads fail at `gateRead` / `getIntegrationStatus`. Contract A01 (no Git still works) holds for non-git surfaces. | — | — | Project page surfaces; integration settings |

---

## 2. Multi-repo vs single `fullName`

**Modeled as multi-repo (pilot + project):**

- `authorized_repositories`: many rows per `pilot_id`, unique `(pilot_id, full_name)` — `schema.ts` ~759–783.
- `project_git_links`: many `repository_id` per `project_id`, unique `(project_id, repository_id)` — ~785–807.
- Reads keyed by **`repositoryId`**, resolved to `repo.fullName` in `gateRead` / `readGitFile` — `resource-service.ts`.

**Still single-repo biased at REAL provider layer:**

- Env lane profile: mono sandbox `mcleland147/chantiers360` — `github-app-config.ts` (`GITHUB_APP_ALLOWED_FULL_NAME`).
- `RealGitHubReadProvider.assertAllowedRepo` on read/mutation paths — `real-github-provider.ts`.
- `listInstallationRepos` (REAL) **filters** install list to `allowedFullName` only — ~161–191.
- SCRIPTED catalog seeds **two** repos (`acme/docs-projet`, `acme/shared-docs`) — `scripted-github-provider.ts` `catalogFor` ~147–162.

**Conclusion:** DB and APIs are multi-repo-ready; REAL GitHub **installation reads** and bounded mutations remain allowlist-shaped. User-OAuth repo inventory can seed multiple `authorized_repositories`, but remote reads for non-allowlisted repos will fail at provider unless extended (e.g. user token reads per repo).

---

## 3. Directory enumeration on providers

| Provider | Directory port |
|----------|----------------|
| `GitHubProvider` interface | **No** list-directory method — `github-provider.ts` |
| `ScriptedGitHubProvider` | In-memory `files` map; only `getFileContent` by path — no tree API |
| `RealGitHubReadProvider` | `fetchFileContentUtf8` for files only — `github-app-auth.ts` |
| HTTP / Nora | **None** |

GitHub Contents API could list directories at the same layer as `fetchFileContentUtf8` without a new engine.

---

## 4. Publications projection sources

| Layer | Role |
|-------|------|
| **Write path** | `preparePublication` / dispatch / merge — `domains/execution/effect-service.ts` |
| **Tables** | `effect_attempts` (`GIT_PUBLICATION` \| `GIT_MERGE`), `document_publication_refs` (per doc/rev/repo/path/branch/PR), `observed_git_facts` |
| **Read path for UI/list** | **Not implemented** — no service/route projecting refs by `projectId` + `repositoryId` |
| **Nora / mission** | `mission-continuity.ts` queries `effectAttempts` by correlation; not a publications browser |

E08 **A12** (two repos in project publication list) needs a **read projection** on existing tables, not a parallel effect engine.

---

## 5. REAL vs SCRIPTED gates

### User OAuth (personal GitHub)

| Gate | Mechanism |
|------|-----------|
| SCRIPTED allowed | `STUDIO_LANE=DEV` + (`STUDIO_E2E=1` \| `STUDIO_ALLOW_SCRIPTED_GITHUB=1`); not when `STUDIO_GITHUB_USER_OAUTH=real` — `scripted-github-guard.ts` |
| REAL user OAuth | `STUDIO_GITHUB_USER_OAUTH=real` + `GITHUB_APP_CLIENT_*` + `INTEGRATION_TOKEN_ENCRYPTION_KEY` — `assertRealUserOauthConfigured` |
| Default product | Often `NOT_CONFIGURED` 503 if credentials present but REAL not explicitly demanded — `resolveGithubUserAuthFlow` |

### Effect provider (reads + D7 mutations)

| Env | Behavior |
|-----|----------|
| `STUDIO_GITHUB_PROVIDER` (default `scripted`) | `resolveGitHubProvider()` — `github-provider.ts` |
| REAL boot | App ID + installation + private key — `isGitHubAppReadConfigured()` |
| REAL mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` exactly — `isBoundedRealMutationAllowed()` |
| **Merge** | **Hard-blocked** in REAL: `mergePullRequest` → `mutationBlocked` — `real-github-provider.ts` ~383–391; SCRIPTED can simulate merge for tests |

### Permissions snapshot

- SCRIPTED: `scripted_fixture` write levels — `authorization-service.ts` `scriptedFixturePermissions`
- REAL: `user_token_observed` from installation repo permissions — never silent elevation on refresh

### Publication authority (orthogonal)

- D6 mandate + `assertCurrentGitAuthority` — `effect-authority.ts`
- Merge dispatch labels acknowledge server hard-block — `publication-effect-labels.ts`

---

## 6. Reusable tests

**Unit**

- `tests/unit/scripted-github-guard.test.ts`
- `tests/unit/github-app-user-oauth.test.ts`, `github-app-config.test.ts`, `github-app-auth-real-provider.test.ts`
- `tests/unit/git-read-tools.test.ts`, `git-file-provenance.test.ts`, `git-proof-qualify.test.ts`
- `tests/unit/real-github-mutations-gate.test.ts`, `publication-branch-marker.test.ts`
- `tests/unit/scripted-repo-isolation.test.ts`, `path-policy.test.ts`
- `tests/unit/non-effects.test.ts` (D5–D9 boundaries)

**Integration (PG)**

- `tests/integration/git-collaboration.pg.test.ts` — D7/D8/D9, OAuth concurrency, `documentPublicationRefs`
- `tests/integration/ml4-chat-first-d4-provenance.pg.test.ts` — git read + permalink
- `tests/integration/mission-continuity-accept01.pg.test.ts`, `intent-continuity-global.pg.test.ts`

**E2E**

- `tests/e2e/git-collaboration.spec.ts` — integrations connect, attach repo, publication AT journey (`surface=git`)

No tests name “ensemble08”; contract scenarios A08 (directory walk) / A12 (publications list) are **uncovered** at UI/API level.

---

## 7. Minimal extension paths (same engine)

1. **Directory listing:** Add `listDirectoryEntries(pilotId, fullName, path, ref)` on `GitHubProvider`; REAL via Contents API (`type: dir`); SCRIPTED via synthetic children from `RepoState.files` keys; wrap with `gateRead` in `resource-service.ts`; `GET /api/projects/[projectId]/git/entries` (name TBD); optional Nora `list_git_directory` beside existing tools in `git-read-tools.ts`.

2. **Git consultation UI:** New client section on `surface=git` (split from `PublicationInspectionPanel`): repo select from `sources`, branch from `listGitRefs`, lazy tree from new entries API, file preview via existing `readGitFile` / `TravailViewer` pattern; reuse stale-seq pattern from `page.tsx` `viewerRequestSeqRef`.

3. **A3 active repo:** Client state + sessionStorage or optional `projects.metadata` field only if cross-session required (contract §9.3: migration gate if new column).

4. **A2 detach:** Wire `DELETE .../git/links/[linkId]` in UI; list links via existing `GET .../git/links`.

5. **A8 publications list:** `listProjectPublicationRefs(projectId)` query joining `document_publication_refs` + `effect_attempts` + `authorized_repositories.fullName`; `GET /api/projects/[projectId]/git/publications` (read-only).

6. **A6 binary / size:** Extend `fetchFileContent*` to return `{ kind: 'binary' \| 'text' \| 'too_large', ... }` and map in `readGitFile` + `TravailViewer` (no execute).

7. **A7 layout:** Adjust split grid to 30/70 in `tokens.css` for consultation mode if Figma requires (distinct from current 50/50 Travail split).

8. **REAL multi-repo reads:** Relax or parameterize `assertAllowedRepo` to check `authorized_repositories` row + user token for that `fullName`, while keeping installation token for allowlisted sandbox — avoids parallel provider.

---

## 8. Risks

| Risk | Detail |
|------|--------|
| **Auth** | D1 `pilots.githubUserId` must match OAuth identity; disconnect is DB-only (tokens cleared, GitHub side may remain). REAL product path 503 until `STUDIO_GITHUB_USER_OAUTH=real` + secrets. |
| **DB migration** | **Not required** for multi-repo consultation per contract §9.3 if using existing tables; migration only if persisting “active repo” or new indexes on list endpoints. |
| **API blast radius** | New read routes should reuse `gateRead`; directory listing must respect path policy (`path-policy.ts`) and budgets like Nora tools. Touches: `github-provider.ts`, both providers, `resource-service.ts`, one route file, optional UI component. |
| **RECETTE truth** | Announcing REAL consultation while `STUDIO_GITHUB_PROVIDER=scripted` or mono-repo allowlist → contract **STOP** (§10). |
| **Surface confusion** | `surface=git` and `surface=publication` both render only `PublicationInspectionPanel` — `page.tsx` ~2932–2935; consultation vs publication not separated yet. |

---

## 9. Quick inventory of git HTTP API

| Route | Handler domain |
|-------|----------------|
| `/api/integrations/status` | `getIntegrationStatus` |
| `/api/integrations/github/authorize` | `startGitHubAuthorization` |
| `/api/integrations/github/authorize/complete` | `completeGitHubAuthorization` (SCRIPTED) |
| `/api/integrations/github/callback` | OAuth callback |
| `/api/integrations/github/refresh` | `refreshRepositories` |
| `/api/integrations/github/disconnect` | `disconnectIntegration` |
| `/api/integrations/github/repositories` | subset of status |
| `/api/projects/[projectId]/git/sources` | `listProjectGitSources` |
| `/api/projects/[projectId]/git/links` | `listProjectGitLinks` / `attachRepositoryToProject` |
| `/api/projects/[projectId]/git/links/[linkId]` | `detachProjectLink` |
| `/api/projects/[projectId]/git/refs` | `listGitRefs` |
| `/api/projects/[projectId]/git/file` | `readGitFile` |
| `/api/projects/[projectId]/git/publications/*` | `effect-service` (D7) |
| `/api/projects/[projectId]/git/merge/*` | merge flow |
| `/api/projects/[projectId]/git/effects/[attemptId]/reconcile` | reconciliation |

---

**Bottom line for Capacité A:** Backend auth, multi-repo persistence, project linking, ref listing, and qualified file reads are largely in place. What Ensemble 08 consultation still lacks is **directory listing**, a **dedicated Git browser UI** (repo/branch/tree/30–70), **publication history list**, **detach/link management UI**, and **REAL read alignment** when more than one authorized repo must be read remotely. All of that can extend the current `GitHubProvider` + `resource-service` + existing tables without a parallel engine.