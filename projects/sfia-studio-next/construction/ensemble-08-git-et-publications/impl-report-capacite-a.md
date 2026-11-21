## Deliverable

### Files created
- `projects/sfia-studio-next/web/src/domains/integrations/publication-projection.ts` — pure D8/D9 projection (`projectPublicationFromRow`)
- `projects/sfia-studio-next/web/src/domains/integrations/publication-projection-service.ts` — `listProjectPublications`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/tree/route.ts`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/route.ts`
- `projects/sfia-studio-next/web/tests/unit/git-directory-listing.test.ts`
- `projects/sfia-studio-next/web/tests/unit/project-publications-projection.test.ts`

### Files modified
- `github-app-auth.ts` — `fetchDirectoryListing` (+ `GitHubDirectoryEntry`), max 200 entries
- `github-provider.ts` — `DirectoryEntry`, `listDirectory` on interface
- `scripted-github-provider.ts` — in-memory `listDirectory`
- `real-github-provider.ts` — `fetchDirectoryListing` + `assertAllowedRepo` (unchanged allowlist)
- `resource-service.ts` — `NOT_A_DIRECTORY`, `listGitDirectory`

---

### API contracts

**`GET /api/projects/{projectId}/git/tree`**

| Query | Required | Default |
|-------|----------|---------|
| `repositoryId` | yes | — |
| `ref` | yes | — |
| `path` | no | `""` (repo root) |

Response:
```json
{
  "repositoryId": "...",
  "fullName": "owner/repo",
  "path": "docs",
  "ref": "main",
  "commitSha": "40-char hex or null",
  "commitShaVerified": true,
  "entries": [
    { "name": "spec.md", "path": "docs/spec.md", "type": "file", "sha": "...", "size": 123 },
    { "name": "sub", "path": "docs/sub", "type": "dir", "sha": "..." }
  ]
}
```
Errors: `NOT_FOUND` (ref/path), `INVALID_REQUEST` (`NOT_A_DIRECTORY`), `ACCESS_DENIED`, `AMBIGUOUS` (>200 entries).

**`GET /api/projects/{projectId}/git/publications`**

No query params.

Response:
```json
{
  "projectId": "...",
  "publications": [{
    "publicationRefId", "documentId", "revisionId",
    "repositoryId", "repositoryFullName",
    "targetPath", "targetBranch", "publicationBranch",
    "baseSha", "headSha", "prNumber",
    "publicationStatus",
    "effectAttemptId", "effectKind", "effectStatus",
    "prCurrentState", "pullRequestCreatedObserved",
    "mergeObserved", "commitObserved", "openPullRequest",
    "updatedAt", "limits"
  }]
}
```
`mergeObserved` only when `observed_git_facts` contains `MERGE`; `openPullRequest` = `publicationStatus === "PR_OPEN"` && no merge fact.

---

### Tests

```bash
cd projects/sfia-studio-next/web && npm run test -- \
  tests/unit/git-directory-listing.test.ts \
  tests/unit/project-publications-projection.test.ts
```

**Result:** 2 files, **7 tests passed**. `tsc --noEmit` clean.

---

### STOP / risk notes

| Topic | Note |
|-------|------|
| **REAL multi-repo** | `assertAllowedRepo` on REAL reads unchanged — directory listing uses the same mono-repo gate as file read. Multi-repo SCRIPTED + attached-repo `gateRead` still works project-scoped. |
| **No push / no protected paths** | Honored. |
| **No UI** | Routes/services only. |
| **npm ci** | Ran locally to execute tests (`node_modules` not in repo). |