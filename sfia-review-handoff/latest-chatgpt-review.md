pack chars 105153
 — ML5 Review Pack FULL

| Champ | Valeur |
|---|---|
| Date/heure UTC | 2026-11-26T14:43:08Z |
| Cycle | R5 Construction · ML5 Convergence cognitive transverse |
| Profil | CRITICAL · Typologie EVOL · Cycle type 8 Delivery |
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD final | `8c82b6c18f64af873ea780e692beb816d9d9f36e` |
| Tree final | `85c1df91656525361149329b312e23f1701dd3f3` |
| Web tree final | `{'stopReason': 'COMPLETED_WEB_PUBLIC_WITH_OPEN_FIX', 'webLiveFinal': '0', 'scenarios': ['WEB-01-nominal-search', 'WEB-02-new-subject-admission', 'WEB-02b-exact-authorize', 'WEB-03-html-progressive', 'WEB-04-pdf-progressive', 'WEB-05-confront-sources', 'WEB-06-deterministic-denies', 'WEB-07-finops-reconcile', 'WEB-03b-html-open-after-egress-fix', 'WEB-04b-pdf-progressive-after-egress-fix', 'FIX-egress-lookup-all', 'PROBE-open-authorized', 'PROBE-pdf-beyond-5'], 'verdicts': {'WEB-01-nominal-search': 'LIVE OBSERVED — isolated_search DISCOVERED postgresql.org', 'WEB-02-new-subject-admission': 'BEHAVIOR PROVEN — Option B asked AUTHORIZE_PUBLIC_QUERY', 'WEB-02b-exact-authorize': 'LIVE OBSERVED — exact auth search executed; open failed pre-fix', 'WEB-03-html-progressive': 'PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK', 'WEB-04-pdf-progressive': 'PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK', 'WEB-05-confront-sources': 'PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK', 'WEB-06-deterministic-denies': 'DETERMINISTIC PROVEN', 'WEB-03b-html-open-after-egress-fix': 'LIVE OBSERVED — Nora open+read_more+search_in_page', 'WEB-04b-pdf-progressive-after-egress-fix': 'LIVE OBSERVED — Nora PDF pages 1–8 with HTTP/3 on p.6', 'FIX-egress-lookup-all': 'IMPLEMENTED — web-egress-guard lookup options.all array form', 'PROBE-open-authorized': 'LIVE OBSERVED — executePublicWebOpenPage HTML+PDF after fix', 'PROBE-pdf-beyond-5': 'LIVE OBSERVED — readWebPdfPages 6–8 search HTTP/3'}, 'note': 'First campaign opens failed on Node lookup all=true; fix + Nora reopen HTML/PDF progressive PASS; LIVE forced 0'}` |
| Base précédente | `a0ee7564efc52b0b42909c61056b61508d06a577` |
| BUILD_ID observé | `bP8batKL2XqD6iDGGw_Iy` (pré-commit runtime ; rebuild cutover non fait) |
| Politique | v0.2 préservée |
| WEB LIVE fin | **0** |
| Release | NO RELEASE · NOT ADOPTED · ML5 OPEN · R6 NOT STARTED |

## 1. Git Truth

- Remote: `origin` → mcleland147/sfia-workspace
- Branche produit **non poussée** (push projet interdit)
- Status final hors Review Pack: clean produit après commit `8c82b6c18f64af873ea780e692beb816d9d9f36e`
- Fichiers staged attendus: aucun hors handoff
- Aucun reset/stash/clean/rebase/merge global

## 2. Autorisations consommées / non consommées

| Gate | État |
|---|---|
| G-LIVE-API documentaire | CONSOMMÉ (DEV) |
| G-WEB-PUBLIC | CONSOMMÉ (DEV, puis OFF) |
| G-WEB-MIXED | FERMÉ |
| G-RECETTE | NON CONSOMMÉ |
| Push projet / PR / Merge / Release / ADOPTED | NON |
| Review Handoff L3 | REQUIRED / PUBLISH-IN-CYCLE |

## 3. Synthèse séquences

### S1 — Corrections WEB/PDF
- Progressive PDF `public_web_read_pdf_pages` ; pas de `pdfBase64` cognitif ; `viewerToken`
- Sessions scopées lane/project/work + TTL/éviction
- Couverture union honnête
- PdfViewer browser harness PASS (worker local)
- pdfjs-dist@4.10.38 ; copy bytes avant detach

### S2 — Sécurité / FinOps
- Option B AUTHORIZE_PUBLIC_QUERY LIVE
- Worker Terra + admitModelEffort
- Fix egress: Node lookup `options.all` → array form (sinon Invalid IP undefined)
- FinOps réserve pré-émission campagne ; cost_coverage PARTIAL fréquent

### S3 — Corpus
- RoomBooking `proj_896d204b` + chantiers360 ATTACHED
- StockTrack seed `proj_64691238` / `doc_65200758`
- Git PDF BPMN scanné → BLOCKED CORPUS MISSING pour texte

### S4 — Documentaire LIVE
- RB-27–31: investigation Git REAL, reprise, intention readonly, note technique produite
- IT-06: RM-02/REC-03 modifiés ; conserve V2 ; V1 intacte
- Git PDF: PARTIAL/SCANNED_NO_TEXT

### S5 — WEB LIVE public
- Search + Option B + open HTML/PDF après fix
- WEB LIVE forcé 0 (`dev-live-off-final.env.txt`)

### S6 — Intégration
- Unit keys 31 PASS (incl. activity-hierarchy, auto-session, egress lookup)
- Manifeste RECETTE: NOT READY FOR RECETTE
- Candidat local `8c82b6c18f64af873ea780e692beb816d9d9f36e`

### S7 — Capacités (extrait)
| Capacité | Verdict |
|---|---|
| Politique v0.2 | IMPLEMENTED |
| PDF progressive + viewer | BEHAVIOR PROVEN (fixture/browser) |
| RB-27–31 | LIVE OBSERVED |
| IT-06 | LIVE OBSERVED + conserve PASS |
| Git PDF text REAL | BLOCKED CORPUS MISSING |
| WEB search/admission | LIVE OBSERVED |
| WEB open HTML/PDF | LIVE OBSERVED (post-fix) |
| WEB-05 confrontation | PARTIAL |
| FinOps | PARTIAL réconcilié |

### S8 — Docs + handoff
- delivery-history append
- dossier WEB actualisé
- Review Pack FULL (ce fichier)
- Handoff L3 à publier

## 4. Preuves documentaires

### IT-06 conserve
```json
{
  "at": "2026-11-26T14:29:28.015397+00:00",
  "scenario": "IT06-conserve-V2",
  "documentId": "doc_65200758-7b3c-40a8-9998-3d373b3aacc9",
  "preparationId": "prep_11f71e3d-d053-4b9e-a62b-3ddd3ec1acfd",
  "projectId": "proj_64691238",
  "pendingCandidateId": "pdoc_bb19679e-3c7c-4ef4-bed0-a9157dc13035",
  "pendingCandidateSha": "a0c4f0e86d992eb630667e241de363f06ffdfd15929c951b8eabf8288146f7c5",
  "turnCommandId": "tcmd_20f5c773-1a4c-458e-b225-3548c3adec8b",
  "documentSave": {
    "status": "AVAILABLE",
    "revisionId": "drev_1d9fed9c-1871-4d63-990d-21a2a30063b0",
    "revisionNumber": 2,
    "baseRevisionId": "drev_6ff648b4-8661-4949-9de6-16b39094999c",
    "act": "REVISE"
  },
  "candidateStatusAfter": "CONSUMED",
  "v1": {
    "revisionId": "drev_6ff648b4-8661-4949-9de6-16b39094999c",
    "revisionNumber": 1,
    "status": "AVAILABLE",
    "chars": 2030,
    "intact": true
  },
  "v2": {
    "revisionId": "drev_1d9fed9c-1871-4d63-990d-21a2a30063b0",
    "revisionNumber": 2,
    "status": "AVAILABLE",
    "chars": 2140
  },
  "oracle": {
    "rm02_min_three_chars": true,
    "rec03_two_char_ref_refused": true,
    "diff_only_rm02_rec03": true,
    "v1_unchanged": true,
    "providerContacted": "NO",
    "path": "CONSERVE_ONLY_NO_PROVIDER"
  },
  "verdict": "IT-06 CONSERVE PASS — V2 courante rev2, V1 historique intacte rev1"
}
```

### Diff V1→V2
```
--- V1-rev1
+++ V2-rev2
@@ -16,7 +16,7 @@
 | ID | Règle |
 |---|---|
 | RM-01 | Un article possède une référence unique et un libellé. |
-| RM-02 | Une référence et un libellé non vides sont obligatoires. Une même référence ne peut désigner qu'un seul article. |
+| RM-02 | Une référence et un libellé non vides sont obligatoires. La référence comporte au minimum trois caractères. Une même référence ne peut désigner qu'un seul article. |
 | RM-03 | Une entrée augmente la quantité disponible de la valeur saisie (strictement positive). |
 | RM-04 | Une sortie diminue la quantité disponible ; une sortie supérieure au stock disponible est refusée. |
 | RM-05 | La quantité disponible ne peut pas être négative. |
@@ -27,10 +27,9 @@
 |---|---|---|
 | REC-01 | RM-01 | Créer un article avec référence et libellé valides : article créé, quantité initiale 0. |
 | REC-02 | RM-02 | Tenter de créer un article avec libellé vide : refus, aucun article ajouté. |
-| REC-03 | RM-02 | Tenter de créer un article sans référence, sans libellé, puis avec une référence déjà utilisée : chaque tentative est refusée et aucun article n'est ajouté. |
+| REC-03 | RM-02 | Tenter de créer un article sans référence, sans libellé, avec une référence de deux caractères et un libellé valide, puis avec une référence déjà utilisée : chaque tentative est refusée et aucun article n'est ajouté. |
 | REC-04 | RM-03 | Enregistrer une entrée de 5 sur un article existant : quantité = 5. |
 | REC-05 | RM-04 | Sortie de 2 alors que stock = 5 : quantité = 3. |
 | REC-06 | RM-04 | Sortie de 10 alors que stock = 3 : refus, quantité inchangée. |
 | REC-07 | RM-05 | Après refus de sortie excessive, la quantité reste non négative. |
 | REC-08 | RM-06 | Un profil hors équipe logistique tente une création : refus. |
-

```

### Git PDF
```json
{
  "at": "2026-11-26T14:31:06.011793+00:00",
  "scenario": "GIT-PDF-BPMN-oracle",
  "path": "Diagramme BPMN_BatiNova.pdf",
  "repo": "mcleland147/chantiers360",
  "commit": "8c398c494dd918272aab5b2653777c6c21d2e76e",
  "blobSha": "fe57c2d88b367e9ed99cbcd3c8e965d3b7f922c6",
  "sizeBytes": 164587,
  "filePages": 1,
  "extractOk": false,
  "reason": "SCANNED_NO_TEXT",
  "priorLiveTurn": {
    "id": "GIT-PDF-BPMN-read",
    "workId": "cgw_90e868b6-7e77-4dc4-a557-8e56da2f16ab",
    "observed": "Git · PARTIAL — Diagramme BPMN_BatiNova.pdf"
  },
  "verdict": "GIT PDF LIVE — BLOCKED CORPUS MISSING",
  "detail": "Authorized PDF is reachable but is a 1-page scanned image without extractable text; OCR out of scope. Multi-page progressive text reading remains proven on fixture only, not Git REAL.",
  "whatWasProven": [
    "PDF identification via authorized Git attachment",
    "Tool path returns PARTIAL/SCANNED_NO_TEXT without inventing text",
    "No private content fabrication"
  ],
  "notProvenOnGitReal": [
    "Multi-page extraction",
    "Targeted text search",
    "Exact page citation of textual content",
    "Progressive read beyond initial range"
  ]
}
```

### FinOps documentaire
```json
{
  "at": "2026-11-26T14:34:54.857861+00:00",
  "source": "provider_usage_observations PostgreSQL DEV",
  "rows": [
    {
      "workId": "cgw_912cf02a-cbd0-483f-8c17-97f924a119e2",
      "label": "RB27-31",
      "reqs": 71,
      "inTok": 1295830,
      "outTok": 35451,
      "cost": 0.483603
    },
    {
      "workId": "cgw_90e868b6-7e77-4dc4-a557-8e56da2f16ab",
      "label": "GIT-PDF",
      "reqs": 12,
      "inTok": 173285,
      "outTok": 2707,
      "cost": 0.0362374
    },
    {
      "workId": "cgw_675893c3-43b5-4214-b2e7-1adf945855b8",
      "label": "IT06",
      "reqs": 6,
      "inTok": 68118,
      "outTok": 3134,
      "cost": 0.02528985
    }
  ],
  "total": {
    "reqs": 89,
    "inTok": 1537233,
    "outTok": 41292,
    "cost": 0.5451302499999999
  },
  "envelope": {
    "maxResponses": 40,
    "maxIn": 2000000,
    "maxOut": 200000
  },
  "withinEnvelope": false,
  "note": "IT-06 conserve used CONSERVE_ONLY_NO_PROVIDER (0 provider requests). Git PDF corpus scanned/no-text."
}
```

### Ledger resume (ids)
```
[
  "RB27-prior-snapshot",
  "RB28-resume-from-acquis",
  "RB29-intention-git-readonly",
  "RB31-technical-note-from-acquis",
  "GIT-PDF-BPMN-read",
  "IT06-revise-rm02-rec03",
  "IT06-oracle-revisions",
  "IT06-conserve-V2",
  "GIT-PDF-oracle-independent"
]
```

## 5. Preuves WEB public

```json
{
  "stopReason": "COMPLETED_WEB_PUBLIC_WITH_OPEN_FIX",
  "webLiveFinal": "0",
  "scenarios": [
    "WEB-01-nominal-search",
    "WEB-02-new-subject-admission",
    "WEB-02b-exact-authorize",
    "WEB-03-html-progressive",
    "WEB-04-pdf-progressive",
    "WEB-05-confront-sources",
    "WEB-06-deterministic-denies",
    "WEB-07-finops-reconcile",
    "WEB-03b-html-open-after-egress-fix",
    "WEB-04b-pdf-progressive-after-egress-fix",
    "FIX-egress-lookup-all",
    "PROBE-open-authorized",
    "PROBE-pdf-beyond-5"
  ],
  "verdicts": {
    "WEB-01-nominal-search": "LIVE OBSERVED — isolated_search DISCOVERED postgresql.org",
    "WEB-02-new-subject-admission": "BEHAVIOR PROVEN — Option B asked AUTHORIZE_PUBLIC_QUERY",
    "WEB-02b-exact-authorize": "LIVE OBSERVED — exact auth search executed; open failed pre-fix",
    "WEB-03-html-progressive": "PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK",
    "WEB-04-pdf-progressive": "PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK",
    "WEB-05-confront-sources": "PARTIAL — open failed Invalid IP undefined (Node lookup all=true); search/admission OK",
    "WEB-06-deterministic-denies": "DETERMINISTIC PROVEN",
    "WEB-03b-html-open-after-egress-fix": "LIVE OBSERVED — Nora open+read_more+search_in_page",
    "WEB-04b-pdf-progressive-after-egress-fix": "LIVE OBSERVED — Nora PDF pages 1–8 with HTTP/3 on p.6",
    "FIX-egress-lookup-all": "IMPLEMENTED — web-egress-guard lookup options.all array form",
    "PROBE-open-authorized": "LIVE OBSERVED — executePublicWebOpenPage HTML+PDF after fix",
    "PROBE-pdf-beyond-5": "LIVE OBSERVED — readWebPdfPages 6–8 search HTTP/3"
  },
  "note": "First campaign opens failed on Node lookup all=true; fix + Nora reopen HTML/PDF progressive PASS; LIVE forced 0"
}
```

Evidence dir: `.tmp-sfia-review/web-public-qual-live-20261126/`

## 6. Diff stat produit (a0ee7564efc52b0b42909c61056b61508d06a577..8c82b6c18f64af873ea780e692beb816d9d9f36e)

```
 .../construction/delivery-history.md               |  29 +
 .../ml5-pdf-capability-choice-20261126.md          |  55 ++
 .../ml5-pdf-d4-compatibility-20261126.md           |  39 +
 .../ml5-qual-corpus-inventory-20261126.md          |  50 ++
 .../ml5-recette-manifest-candidate-20261126.md     |  49 ++
 ...5-registre-couverture-et-revue-developpement.md |  10 +
 .../ml5-web-gate-public-dossier-20261126.md        |  94 +++
 projects/sfia-studio-next/web/next.config.ts       |   2 +-
 projects/sfia-studio-next/web/package-lock.json    | 278 +++++++
 projects/sfia-studio-next/web/package.json         |   1 +
 .../sfia-studio-next/web/public/pdf.worker.min.mjs |  21 +
 .../scripts/ml5-documentary-qualification-live.mts | 707 ++++++++++++++++++
 .../ml5-documentary-qualification-resume.mts       | 300 ++++++++
 .../web/scripts/ml5-qual-seed-stocktrack-v1.mts    | 149 ++++
 .../scripts/ml5-web-public-live-qualification.mts  | 552 ++++++++++++++
 .../src/app/api/dev/pdf-viewer-fixture/route.ts    |  34 +
 .../app/api/web/pdf-viewer/[viewerToken]/route.ts  |  67 ++
 .../web/src/app/dev/pdf-viewer-harness/page.tsx    |  95 +++
 .../web/src/app/projects/[projectId]/page.tsx      |  15 +-
 .../web/src/components/documents/PdfViewer.tsx     | 254 +++++++
 .../web/src/components/figma/TravailViewer.tsx     |  26 +-
 .../integrations/GitRepositoriesSurface.tsx        |   9 +
 .../src/domains/conversation/activity-labels.ts    |   9 +-
 .../src/domains/conversation/cognitive-policy.ts   |  47 +-
 .../cognitive-resources/cognitive-referential.ts   |   2 +-
 .../conversation/cognitive-resources/index.ts      |   6 +
 .../provisional-cognitive-policy.ts                | 193 ++++-
 .../cognitive-resources/resource-admission.ts      |  22 +-
 .../cognitive-resources/resource-catalog.ts        |  17 +
 .../web/src/domains/conversation/git-read-tools.ts | 245 ++++++
 .../domains/conversation/investigation-state.ts    |   5 +
 .../web/src/domains/conversation/nora-adapter.ts   |   9 +-
 .../conversation/public-web-page-session.ts        | 585 +++++++++++++++
 .../domains/conversation/public-web-registry.ts    |  72 +-
 .../conversation/public-web-search-frontier.ts     | 819 +++++++++++++++++++--
 .../conversation/run-nora-cognitive-turn.ts        |  23 +-
 .../src/domains/conversation/turn-projection.ts    |   2 +
 .../src/domains/conversation/usage-accounting.ts   |  30 +-
 .../src/domains/conversation/web-egress-guard.ts   | 115 ++-
 .../src/domains/documents/pdf-extract-server.ts    | 282 +++++++
 .../web/src/domains/documents/pdf-read-contract.ts | 101 +++
 .../web/src/domains/identity/session.ts            |   4 +-
 .../web/src/domains/integrations/git-preview.ts    |  11 +-
 .../src/domains/integrations/github-app-auth.ts    |  27 +-
 .../src/domains/integrations/github-provider.ts    |  12 +-
 .../src/domains/integrations/resource-service.ts   |  12 +-
 .../integrations/scripted-github-provider.ts       |  16 +
 .../web/tests/fixtures/ml5-progressive-8p.pdf      | 109 +++
 .../web/tests/fixtures/ml5-sample.pdf              |  53 ++
 .../tests/qualify/ml5-pdf-viewer-browser.spec.ts   |  57 ++
 .../web/tests/unit/cognitive-policy.test.ts        |  68 +-
 .../unit/ml5-c16-cognitive-integration.test.ts     |   4 +-
 .../web/tests/unit/ml5-cognitive-resources.test.ts |  55 +-
 .../tests/unit/ml5-finops-tariff-resolve.test.ts   |  49 ++
 .../web/tests/unit/ml5-pdf-extract.test.ts         |  76 ++
 .../web/tests/unit/ml5-public-web-frontier.test.ts |   7 +-
 .../web/tests/unit/ml5-t1-web-admission.test.ts    |  36 +
 .../web/tests/unit/ml5-web-egress-lookup.test.ts   |  30 +
 .../web/tests/unit/ml5-web-page-session.test.ts    | 247 +++++++
 .../web/tests/unit/ml5-web-pdf-progressive.test.ts | 147 ++++
 60 files changed, 6215 insertions(+), 225 deletions(-)

```

## 7. Name-status

```
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ml5-pdf-capability-choice-20261126.md
A	projects/sfia-studio-next/construction/ml5-pdf-d4-compatibility-20261126.md
A	projects/sfia-studio-next/construction/ml5-qual-corpus-inventory-20261126.md
A	projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
M	projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
A	projects/sfia-studio-next/construction/ml5-web-gate-public-dossier-20261126.md
M	projects/sfia-studio-next/web/next.config.ts
M	projects/sfia-studio-next/web/package-lock.json
M	projects/sfia-studio-next/web/package.json
A	projects/sfia-studio-next/web/public/pdf.worker.min.mjs
A	projects/sfia-studio-next/web/scripts/ml5-documentary-qualification-live.mts
A	projects/sfia-studio-next/web/scripts/ml5-documentary-qualification-resume.mts
A	projects/sfia-studio-next/web/scripts/ml5-qual-seed-stocktrack-v1.mts
A	projects/sfia-studio-next/web/scripts/ml5-web-public-live-qualification.mts
A	projects/sfia-studio-next/web/src/app/api/dev/pdf-viewer-fixture/route.ts
A	projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
A	projects/sfia-studio-next/web/src/app/dev/pdf-viewer-harness/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
M	projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
M	projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
M	projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/index.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
M	projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-catalog.ts
M	projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
A	projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
M	projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
M	projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
M	projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
M	projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
M	projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
A	projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
A	projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
M	projects/sfia-studio-next/web/src/domains/identity/session.ts
M	projects/sfia-studio-next/web/src/domains/integrations/git-preview.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
M	projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
A	projects/sfia-studio-next/web/tests/fixtures/ml5-progressive-8p.pdf
A	projects/sfia-studio-next/web/tests/fixtures/ml5-sample.pdf
A	projects/sfia-studio-next/web/tests/qualify/ml5-pdf-viewer-browser.spec.ts
M	projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml5-finops-tariff-resolve.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml5-pdf-extract.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-t1-web-admission.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml5-web-egress-lookup.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml5-web-pdf-progressive.test.ts

```

## 8. Fichiers créés (contenus)

### `projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { getWebPageSessionByViewerToken } from "@/domains/conversation/public-web-page-session";

/**
 * Authorized PDF bytes for the in-app viewer — distinct from Nora cognitive payloads.
 * Re-checks session expiry, fingerprint, and PDF kind on every consultation.
 * Never returns content into LLM prompts/checkpoints.
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ viewerToken: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { viewerToken } = await ctx.params;
    const token = (viewerToken || "").trim();
    if (!token || token.length < 16 || token.length > 128) {
      return NextResponse.json({ error: "INVALID_VIEWER_TOKEN" }, { status: 400 });
    }

    const page = getWebPageSessionByViewerToken(token);
    if (!page) {
      return NextResponse.json({ error: "VIEWER_SESSION_NOT_FOUND" }, { status: 404 });
    }
    if (Date.parse(page.expiresAt) <= Date.now()) {
      return NextResponse.json({ error: "VIEWER_SESSION_EXPIRED" }, { status: 410 });
    }
    if (page.kind !== "pdf") {
      return NextResponse.json({ error: "VIEWER_NOT_PDF" }, { status: 415 });
    }
    // Owner check when known — prevents cross-pilot token reuse.
    if (
      page.scope.ownerPilotId &&
      page.scope.ownerPilotId !== session.pilotId
    ) {
      return NextResponse.json({ error: "VIEWER_OWNER_MISMATCH" }, { status: 403 });
    }
    if (!page.pdfBytes || page.pdfBytes.byteLength < 5) {
      return NextResponse.json(
        {
          error: "PDF_BYTES_UNAVAILABLE",
          contentFingerprint: page.contentFingerprint,
          pageCount: page.pageCount ?? null,
          limits: [...page.limits, "VIEWER_BYTES_SERVER_ONLY_WHEN_PRESENT"],
        },
        { status: 404 },
      );
    }

    return new NextResponse(Buffer.from(page.pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(page.pdfBytes.byteLength),
        "Cache-Control": "no-store",
        "X-Content-Fingerprint": page.contentFingerprint,
        "X-Pdf-Page-Count": String(page.pageCount ?? ""),
        "X-Viewer-Session-Id": page.sessionId,
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```
### `projects/sfia-studio-next/web/src/app/dev/pdf-viewer-harness/page.tsx`

```
"use client";

/**
 * DEV-only PdfViewer functional harness (ML5 S1).
 * Not a product surface — qualification only.
 */

import { useEffect, useState } from "react";
import { PdfViewer } from "@/components/documents/PdfViewer";

export default function PdfViewerHarnessPage() {
  const [base64, setBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initialPage, setInitialPage] = useState(1);
  const [laneOk, setLaneOk] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/dev/pdf-viewer-fixture", {
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(
            typeof body?.error === "string" ? body.error : `HTTP_${res.status}`,
          );
        }
        const json = (await res.json()) as {
          base64: string;
          lane: string;
          pageCountHint?: number;
        };
        if (cancelled) return;
        setLaneOk(json.lane === "DEV");
        setBase64(json.base64);
      } catch (e) {
        if (!cancelled) setError(String((e as Error)?.message ?? e).slice(0, 200));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <main className="p-6" data-testid="pdf-harness-error">
        Harness indisponible — {error}
      </main>
    );
  }
  if (!base64) {
    return (
      <main className="p-6" data-testid="pdf-harness-loading">
        Chargement fixture PDF…
      </main>
    );
  }

  return (
    <main className="p-6 space-y-4" data-testid="pdf-harness">
      <h1 className="text-lg font-semibold">DEV PdfViewer harness</h1>
      <p data-testid="pdf-harness-lane">
        lane={laneOk ? "DEV" : "UNEXPECTED"}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          className="git-btn-secondary"
          data-testid="pdf-harness-cite-6"
          onClick={() => setInitialPage(6)}
        >
          Ouvrir citation p.6
        </button>
        <button
          type="button"
          className="git-btn-secondary"
          data-testid="pdf-harness-reset-1"
          onClick={() => setInitialPage(1)}
        >
          Document page 1
        </button>
      </div>
      <PdfViewer
        key={`${initialPage}-${base64.slice(0, 24)}`}
        base64={base64}
        title="ml5-progressive-8p.pdf"
        initialPage={initialPage}
      />
    </main>
  );
}

```
### `projects/sfia-studio-next/web/src/app/api/dev/pdf-viewer-fixture/route.ts`

```
import { readFileSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * DEV-only fixture bytes for PdfViewer browser qualification.
 * Fail-closed outside STUDIO_LANE=DEV.
 */
export async function GET() {
  try {
    await requireStudioSession();
    const lane = String(process.env.STUDIO_LANE || "").trim().toUpperCase();
    if (lane !== "DEV") {
      return NextResponse.json({ error: "DEV_ONLY" }, { status: 403 });
    }
    const fixture = path.resolve(
      process.cwd(),
      "tests/fixtures/ml5-progressive-8p.pdf",
    );
    const bytes = readFileSync(fixture);
    return NextResponse.json({
      lane: "DEV",
      base64: bytes.toString("base64"),
      byteLength: bytes.byteLength,
      pageCountHint: 8,
      fixture: "ml5-progressive-8p.pdf",
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```
### `projects/sfia-studio-next/web/tests/unit/ml5-web-egress-lookup.test.ts`

```
import { describe, expect, it } from "vitest";
import { assertPublicDnsEgress, fetchPublicHttpsPinned } from "@/domains/conversation/web-egress-guard";

/**
 * Node ≥18 https.request lookup often uses options.all=true.
 * Returning (err, address, family) then yields "Invalid IP address: undefined".
 */
describe("ML5 web egress pinned lookup (options.all)", () => {
  it("fetches a public HTTPS page with DNS pin under options.all=true", async () => {
    const url = "https://www.postgresql.org/docs/current/index.html";
    const dns = await assertPublicDnsEgress(url);
    expect(dns.ok).toBe(true);
    if (!dns.ok) return;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15_000);
    try {
      const pinned = await fetchPublicHttpsPinned({
        url,
        addresses: dns.addresses,
        signal: ctrl.signal,
      });
      expect(pinned.status).toBeGreaterThanOrEqual(200);
      expect(pinned.status).toBeLessThan(400);
      expect(pinned.pinnedAddress).toBeTruthy();
      expect(pinned.pinnedAddress).not.toBe("undefined");
    } finally {
      clearTimeout(timer);
    }
  }, 20_000);
});

```
### `projects/sfia-studio-next/web/tests/unit/ml5-web-pdf-progressive.test.ts`

```
import { readFileSync } from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import {
  __resetWebPageSessionsForTests,
  putWebPageSession,
  readWebPdfPages,
  searchWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import { extractPdfText } from "@/domains/documents/pdf-extract-server";
import {
  __resetPublicWebOutboundLogForTests,
  executePublicWebOpenPage,
} from "@/domains/conversation/public-web-search-frontier";

const SCOPE = {
  lane: "DEV",
  projectId: "proj-pdf-prog",
  cognitiveWorkId: "work-pdf-prog",
  ownerPilotId: "pilot-pdf",
};

const FIXTURE = path.resolve(__dirname, "../fixtures/ml5-progressive-8p.pdf");

describe("ML5 progressive PDF beyond initial page range", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
    __resetPublicWebOutboundLogForTests();
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_WEB_SEARCH_ENABLED = "1";
    process.env.SFIA_WEB_SEARCH_LIVE = "0";
  });

  it("fixture has 8 pages with determinant on page 6", async () => {
    const bytes = new Uint8Array(readFileSync(FIXTURE));
    const full = await extractPdfText({
      bytes,
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:ml5-progressive-8p.pdf",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
      pageFrom: 1,
      pageTo: 8,
      searchQuery: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(full.ok).toBe(true);
    if (!full.ok) return;
    expect(full.pageCount).toBe(8);
    expect(full.searchHits?.some((h) => h.pageNumber === 6)).toBe(true);
  });

  it("SCRIPTED open returns only first pages; progressive read finds page 6", async () => {
    const url = "https://example.com/docs/ml5-progressive-8p.pdf";
    const opened = await executePublicWebOpenPage({
      url,
      allowedUrls: [url],
      cognitiveWorkId: SCOPE.cognitiveWorkId,
      projectId: SCOPE.projectId,
      ownerPilotId: SCOPE.ownerPilotId,
      env: {
        STUDIO_LANE: "DEV",
        SFIA_WEB_SEARCH_ENABLED: "1",
        SFIA_WEB_SEARCH_LIVE: "0",
      },
    });
    expect(opened.status).toBe("AVAILABLE");
    expect(opened.contentKind).toBe("pdf");
    expect(opened.pageCount).toBe(8);
    expect(opened.pagesAvailable?.every((p) => p <= 5)).toBe(true);
    expect(opened.viewerToken).toBeTruthy();
    expect(
      JSON.stringify(opened).toLowerCase().includes("pdfbase64") ||
        JSON.stringify(opened).includes("JVBERi0"),
    ).toBe(false);

    const early = searchWebPageSession({
      scope: SCOPE,
      url,
      query: "SECRET_MARKER_P6",
    });
    expect(early.ok).toBe(true);
    if (!early.ok) return;
    expect(early.hits.length).toBe(0);
    expect(early.limits).toContain("ABSENCE_NOT_PROVEN_FOR_UNEXTRACTED_PAGES");

    const later = await readWebPdfPages({
      scope: SCOPE,
      url,
      pageFrom: 6,
      pageTo: 6,
      searchQuery: "SECRET_MARKER_P6",
    });
    expect(later.ok).toBe(true);
    if (!later.ok) return;
    expect(later.pages[0]?.pageNumber).toBe(6);
    expect(later.searchHits?.length).toBeGreaterThan(0);
    expect(later.coverage).toBe("PARTIAL");
  });

  it("LIVE-style session with real bytes reads pages 6+ without Nora base64", async () => {
    // Fresh copy — extractPdfText/pdf.js may detach the ArrayBuffer.
    const fileBytes = new Uint8Array(readFileSync(FIXTURE));
    const forExtract = new Uint8Array(fileBytes);
    const forSession = new Uint8Array(fileBytes);
    const initial = await extractPdfText({
      bytes: forExtract,
      identity: {
        provenance: "WEB",
        sourceRef: "https://example.com/live.pdf",
        versionToken: "fp",
        mimeClaimed: "application/pdf",
      },
      pageFrom: 1,
      pageTo: 5,
    });
    expect(initial.ok).toBe(true);
    if (!initial.ok) return;
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/live.pdf",
      kind: "pdf",
      text: initial.pages.map((p) => p.text).join("\n"),
      pages: initial.pages,
      pageCount: initial.pageCount,
      contentFingerprint: "live-fp",
      limits: ["WEB_LIVE_PDF"],
      bytesObtained: forSession.byteLength,
      pdfBytes: forSession,
    });
    const page6 = await readWebPdfPages({
      scope: SCOPE,
      url: "https://example.com/live.pdf",
      pageFrom: 6,
      pageTo: 7,
      searchQuery: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(page6.ok).toBe(true);
    if (!page6.ok) return;
    expect(page6.pages.some((p) => p.pageNumber === 6)).toBe(true);
    expect(page6.searchHits?.some((h) => h.pageNumber === 6)).toBe(true);
    // Cognitive path exposes viewerToken only — bytes stay server-side.
    expect(page6.viewerToken).toBeTruthy();
    expect(JSON.stringify(page6).includes("pdfBytes")).toBe(false);
  });
});

```
### `projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md`

```
# ML5 — Manifeste candidat RECETTE (préparation, sans cutover)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD base rapportée | `912ef30b40f2447a925f4182bc4961560eca810e` |
| Tree base | `6d0e6255a59139647fa8b2381571524d53a73b51` |
| Web tree base | `02cf48bbcc984cdbe2300b180cf899ae20f348a6` |
| BUILD_ID observé (runtime) | `bP8batKL2XqD6iDGGw_Iy` (arbre dirty — rebuild requis avant cutover) |
| Classe | **NO RELEASE** |
| STABLE | NOT AVAILABLE |
| Cutover | **NON APPLIQUÉ** |

## Capacités qualifiées (DEV)

| Capacité | État |
|---|---|
| Politique cognitive v0.2 | PRÉSERVÉE (Terra Medium défaut ; Luna Low/Med expérimental DEV ; rollback `legacy_sol`) |
| PDF transverse + progressive | IMPLEMENTED + COVERAGE VERIFIED (fixture) ; viewer browser PASS |
| Sessions WEB TTL/éviction | IMPLEMENTED + unit PASS |
| Admission Option B | BEHAVIOR PROVEN LIVE |
| Worker WEB query-only Terra | LIVE OBSERVED |
| Egress DNS pin open | LIVE OBSERVED après fix `options.all` |
| RoomBooking RB-27–31 | LIVE OBSERVED (Git REAL chantiers360) |
| StockTrack IT-06 | LIVE OBSERVED + V2 conservée (rev2) ; V1 intacte |
| Git PDF REAL text | **BLOCKED CORPUS MISSING** (PDF scanné 1 page, SCANNED_NO_TEXT) |
| WEB LIVE public | LIVE OBSERVED (search+open HTML/PDF) puis **OFF** |
| FinOps | Réconcilié PARTIAL (cost_coverage PARTIAL fréquent) |

## Configuration future candidat RECETTE (décision Morris requise)

- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
- Ne pas appliquer automatiquement la politique expérimentale DEV (Luna) à RECETTE
- Clés OpenAI lane-isolées déjà séparées — préserver
- Rebuild + BUILD_ID fresh sur arbre clean avant cutover
- Procédure retour arrière : revert cutover config ; WEB LIVE reste 0

## Réserves bloquant READY FOR RECETTE

1. Arbre produit **DIRTY** — commit local + rebuild requis
2. Git PDF text REAL non démontrable (corpus scanné)
3. WEB-05 confrontation sources versionnées : PARTIAL (opens échoués avant fix ; non rejoué post-fix)
4. Enveloppe documentaire Responses cumulées > 40 sur travaux RB étendus — tracer honest overshoot
5. F2 visuelle exhaustive différée

## Verdict manifeste

**NOT READY FOR RECETTE** — candidat instruit pour revue ; G-RECETTE non consommé.

```
### `projects/sfia-studio-next/construction/ml5-qual-corpus-inventory-20261126.md`

```
# ML5 S3 — Inventaire corpus qualification DEV (2026-11-26)

| Champ | Valeur |
|---|---|
| Lane | DEV |
| Source | Observation PostgreSQL DEV + GitHub REAL `mcleland147/chantiers360` |
| Fake parcours précédent | **NE PAS REJOUER** (RoomBooking sans Git, StockTrack protocole-only) |

## RoomBooking

| Élément | Valeur |
|---|---|
| Projet Git LIVE | `proj_896d204b-2f6f-4dd2-b4ff-1727469d0e52` — **RB-Final Git LIVE 2026-11-25T09:45:41** |
| Lien Git | ATTACHED → `mcleland147/chantiers360` (`arepo_60b78cda-…`) |
| Commit vérifié | `8c398c494dd918272aab5b2653777c6c21d2e76e` |
| Document D4 existant | `doc_05c03230-…` — « Conception réservation salles DEV » (2 révisions) — **ne pas modifier** pour UAT métier |
| Corpus investigation RB-27–31 | Chemins Git planning/conflits (UAT §4) : `evolutions/EVOL-002-planning-ouvriers.md`, `backend/src/common/rules/planning-conflicts.rules.ts` (+ spec), `backend/src/planning/*`, migrations, tests API/e2e |
| Preuve RB-27 LIVE (26/11) | Work `cgw_912cf02a-…` SUSPENDED r14 — **9 CONSULTED** dont `planning-conflicts.rules.ts`, `planning.controller.ts`, specs, migration, e2e ; PARTIAL `EVOL-002` + `planning.service.ts` ; ~48 req / ~882k in / ~$0.34 (client timeout headers — reprise RB28+) |
| Projet faux précédent | `proj_f57bca43-…` **ML5-Doc-RoomBooking** — **sans Git** — hors preuve |

## StockTrack IT-06

| Élément | Valeur |
|---|---|
| Projet qual | `proj_64691238…` / `prep_11f71e3d…` — **ML5-Qual-StockTrack-IT06** |
| Document | `doc_65200758-7b3c-40a8-9998-3d373b3aacc9` |
| V1 | `drev_6ff648b4…` rev1 AVAILABLE — intacte après conserve |
| V2 | `drev_1d9fed9c…` rev2 AVAILABLE — RM-02 min 3 caractères ; REC-03 refus réf. 2 caractères |
| Conserve | `pdoc_bb19679e…` CONSUMED via `DOC_CONSERVE_PROPOSAL` + focus scellé (`tcmd_20f5c773…`) |
| BoundTrack | Autre produit — ne pas confondre |

## Git PDF REAL

| Élément | Valeur |
|---|---|
| PDF autorisé | `Diagramme BPMN_BatiNova.pdf` @ `mcleland147/chantiers360` |
| SHA blob | `fe57c2d88b367e9ed99cbcd3c8e965d3b7f922c6` |
| Taille | 164587 octets · **1 page scannée** |
| Extraction | `SCANNED_NO_TEXT` — OCR hors périmètre |
| Verdict | **GIT PDF LIVE — BLOCKED CORPUS MISSING** (identification OK ; texte/multi-page NON) |
| Fixture complémentaire | `web/tests/fixtures/ml5-progressive-8p.pdf` (8 pages, déterminant p.6) — **ne remplace pas** Git REAL |

## Préflight

| Scénario | Prêt ? | Bloqueur |
|---|---|---|
| RB investigation Git | OUI si projet `proj_896d204b` + droits Git effectifs | Ne pas utiliser ML5-Doc-RoomBooking |
| StockTrack IT-06 | **NOT RUN jusqu’à seed V1** | Document manquant |
| Git PDF | OUI corpus PDF présent | Exercer outils Git + viewer |
| WEB LIVE | Distinct S5 | Gates S1/S2 |

```

## 9. Diffs utiles fichiers modifiés clés

### `projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts b/projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
index d1225a69..e078b5f0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
@@ -120,27 +120,52 @@ export async function fetchPublicHttpsPinned(input: {
           ...(input.headers ?? {}),
         },
         // Pin connection to asserted public IPs only.
+        // Node ≥18 often calls lookup with options.all=true; the callback then expects
+        // (err, [{address,family}]) — returning (err, address, family) yields
+        // "Invalid IP address: undefined" and breaks LIVE opens.
         lookup: (hostname, options, callback) => {
-          const cb = callback as (
+          type LookupCb = (
             err: NodeJS.ErrnoException | null,
-            address: string,
-            family: number,
+            address: string | Array<{ address: string; family: number }>,
+            family?: number,
           ) => void;
+          const cb: LookupCb =
+            typeof options === "function" ? (options as LookupCb) : (callback as LookupCb);
+          const opts =
+            typeof options === "function"
+              ? undefined
+              : (options as { all?: boolean } | undefined);
           const first = [...allow][0]!;
           if (!allow.has(first)) {
-            cb(Object.assign(new Error("EGRESS_LOOKUP_REFUSED"), { code: "EGRESS_LOOKUP_REFUSED" }), "", 4);
+            cb(
+              Object.assign(new Error("EGRESS_LOOKUP_REFUSED"), {
+                code: "EGRESS_LOOKUP_REFUSED",
+              }),
+              "",
+              4,
+            );
             return;
           }
           // Prefer IPv4 when present.
           const v4 = [...allow].find((a) => isIP(a) === 4);
           const chosen = v4 ?? first;
           if (isPrivateOrLocalIp(chosen) || !allow.has(chosen)) {
-            cb(Object.assign(new Error("EGRESS_PRIVATE_REFUSED"), { code: "EGRESS_PRIVATE_REFUSED" }), "", 4);
+            cb(
+              Object.assign(new Error("EGRESS_PRIVATE_REFUSED"), {
+                code: "EGRESS_PRIVATE_REFUSED",
+              }),
+              "",
+              4,
+            );
             return;
           }
-          cb(null, chosen, isIP(chosen) === 6 ? 6 : 4);
+          const family = isIP(chosen) === 6 ? 6 : 4;
+          if (opts?.all) {
+            cb(null, [{ address: chosen, family }]);
+          } else {
+            cb(null, chosen, family);
+          }
           void hostname;
-          void options;
         },
       },
       (res) => {

```
### `projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
index 06f73223..a2006aa1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
@@ -1,79 +1,273 @@
 /**
  * Progressive HTML/PDF consultation sessions for B1-opened pages.
- * In-memory, work/lane scoped — not a document registry.
+ * In-memory, work/lane/project scoped — not a document registry.
+ * Authorized PDF bytes stay server-side for viewer/progressive extract;
+ * Nora tools never receive base64 payloads.
  */

-import { createHash } from "node:crypto";
+import { createHash, randomBytes } from "node:crypto";

 export type WebPageSessionKind = "html" | "pdf";

+export type WebPageSessionScope = {
+  lane: string;
+  projectId: string;
+  cognitiveWorkId: string;
+  ownerPilotId?: string | null;
+};
+
 export type WebPageSession = {
   sessionId: string;
+  viewerToken: string;
+  scope: WebPageSessionScope;
   url: string;
   kind: WebPageSessionKind;
-  /** Full extracted text (HTML) or concatenated PDF page texts when known. */
+  /** HTML text or concatenated known PDF page texts. */
   text: string;
-  /** PDF pages when kind=pdf. */
   pages?: Array<{ pageNumber: number; text: string }>;
   pageCount?: number;
+  /** Pages already extracted into `pages` (1-based). */
+  extractedPages: number[];
+  /** Pages Nora actually returned/consulted (1-based). */
+  consultedPages: number[];
   contentFingerprint: string;
   openedAt: string;
+  expiresAt: string;
   charOffset: number;
   consultedRanges: Array<{ from: number; to: number }>;
+  /** Byte length of authorized body when known. */
+  bytesObtained: number;
+  sourceTruncated: boolean;
+  /** Server-only PDF bytes — never serialize into Nora tool payloads. */
+  pdfBytes?: Uint8Array;
   limits: string[];
 };

+const DEFAULT_TTL_MS = 30 * 60 * 1000;
+const DEFAULT_MAX_SESSIONS = 40;
+const DEFAULT_MAX_MEMORY_BYTES = 64 * 1024 * 1024;
+
 const sessions = new Map<string, WebPageSession>();
+const byViewerToken = new Map<string, string>(); // token → map key
+
+function ttlMs(): number {
+  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_TTL_MS || "");
+  return Number.isFinite(n) && n > 0 ? n : DEFAULT_TTL_MS;
+}
+
+function maxSessions(): number {
+  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_MAX || "");
+  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_SESSIONS;
+}
+
+function maxMemoryBytes(): number {
+  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES || "");
+  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_MEMORY_BYTES;
+}
+
+function requireScope(scope: WebPageSessionScope): WebPageSessionScope {
+  const lane = (scope.lane || "").trim();
+  const projectId = (scope.projectId || "").trim();
+  const cognitiveWorkId = (scope.cognitiveWorkId || "").trim();
+  if (!lane || lane === "UNKNOWN") {
+    throw new Error("SESSION_SCOPE_LANE_REQUIRED");
+  }
+  if (!projectId) throw new Error("SESSION_SCOPE_PROJECT_REQUIRED");
+  if (!cognitiveWorkId) throw new Error("SESSION_SCOPE_WORK_REQUIRED");
+  return { lane, projectId, cognitiveWorkId, ownerPilotId: scope.ownerPilotId ?? null };
+}
+
+function mapKey(scope: WebPageSessionScope, url: string): string {
+  const s = requireScope(scope);
+  return `${s.lane}::${s.projectId}::${s.cognitiveWorkId}::${url}`;
+}
+
+function memoryFootprint(s: WebPageSession): number {
+  return (
+    (s.pdfBytes?.byteLength ?? 0) +
+    Buffer.byteLength(s.text, "utf8") +
+    (s.pages ?? []).reduce((n, p) => n + Buffer.byteLength(p.text, "utf8"), 0)
+  );
+}
+
+function totalMemory(): number {
+  let n = 0;
+  for (const s of sessions.values()) n += memoryFootprint(s);
+  return n;
+}
+
+function purgeExpired(now = Date.now()): void {
+  for (const [k, s] of sessions) {
+    if (Date.parse(s.expiresAt) <= now) {
+      byViewerToken.delete(s.viewerToken);
+      sessions.delete(k);
+    }
+  }
+}
+
+function evictOldestUntilFit(neededBytes: number): void {
+  purgeExpired();
+  while (
+    (sessions.size >= maxSessions() || totalMemory() + neededBytes > maxMemoryBytes()) &&
+    sessions.size > 0
+  ) {
+    let oldestKey: string | null = null;
+    let oldestTs = Number.POSITIVE_INFINITY;
+    for (const [k, s] of sessions) {
+      const t = Date.parse(s.openedAt);
+      if (t < oldestTs) {
+        oldestTs = t;
+        oldestKey = k;
+      }
+    }
+    if (!oldestKey) break;
+    const doomed = sessions.get(oldestKey);
+    if (doomed) byViewerToken.delete(doomed.viewerToken);
+    sessions.delete(oldestKey);
+  }
+}

-function key(workId: string | null | undefined, url: string): string {
-  return `${workId ?? "anon"}::${url}`;
+export function unionCoverageChars(
+  ranges: Array<{ from: number; to: number }>,
+  totalChars: number,
+): { coveredChars: number; coverage: "PARTIAL" | "COMPLETE" | "EMPTY" } {
+  if (totalChars <= 0) return { coveredChars: 0, coverage: "EMPTY" };
+  if (!ranges.length) return { coveredChars: 0, coverage: "EMPTY" };
+  const sorted = [...ranges]
+    .map((r) => ({
+      from: Math.max(0, Math.min(totalChars, r.from)),
+      to: Math.max(0, Math.min(totalChars, r.to)),
+    }))
+    .filter((r) => r.to > r.from)
+    .sort((a, b) => a.from - b.from);
+  if (!sorted.length) return { coveredChars: 0, coverage: "EMPTY" };
+  const merged: Array<{ from: number; to: number }> = [];
+  for (const r of sorted) {
+    const last = merged[merged.length - 1];
+    if (!last || r.from > last.to) merged.push({ ...r });
+    else last.to = Math.max(last.to, r.to);
+  }
+  const coveredChars = merged.reduce((n, r) => n + (r.to - r.from), 0);
+  // COMPLETE only if contiguous coverage from 0 covers the entire available text.
+  const complete =
+    merged.length === 1 && merged[0]!.from === 0 && merged[0]!.to >= totalChars;
+  return {
+    coveredChars,
+    coverage: complete ? "COMPLETE" : "PARTIAL",
+  };
 }

-export function putWebPageSession(
-  workId: string | null | undefined,
-  session: Omit<WebPageSession, "sessionId" | "charOffset" | "consultedRanges"> & {
-    sessionId?: string;
-  },
-): WebPageSession {
-  const k = key(workId, session.url);
+export function putWebPageSession(input: {
+  scope: WebPageSessionScope;
+  url: string;
+  kind: WebPageSessionKind;
+  text: string;
+  pages?: Array<{ pageNumber: number; text: string }>;
+  pageCount?: number;
+  contentFingerprint: string;
+  limits: string[];
+  bytesObtained?: number;
+  sourceTruncated?: boolean;
+  pdfBytes?: Uint8Array;
+  openedAt?: string;
+}): WebPageSession {
+  const scope = requireScope(input.scope);
+  const k = mapKey(scope, input.url);
+  purgeExpired();
   const existing = sessions.get(k);
+  const needed =
+    (input.pdfBytes?.byteLength ?? 0) +
+    Buffer.byteLength(input.text, "utf8") +
+    4096;
+  if (!existing) evictOldestUntilFit(needed);
+
+  const now = new Date();
+  const expiresAt = new Date(now.getTime() + ttlMs()).toISOString();
+  const viewerToken =
+    existing?.viewerToken ?? randomBytes(24).toString("base64url");
+  const extractedPages = [
+    ...new Set([
+      ...(existing?.extractedPages ?? []),
+      ...(input.pages ?? []).map((p) => p.pageNumber),
+    ]),
+  ].sort((a, b) => a - b);
+
+  // Copy PDF bytes — pdf.js getDocument may detach the caller's ArrayBuffer.
+  const incomingPdf =
+    input.pdfBytes && input.pdfBytes.byteLength > 0
+      ? new Uint8Array(input.pdfBytes)
+      : undefined;
+  const retainedPdf =
+    incomingPdf ??
+    (existing?.pdfBytes && existing.pdfBytes.byteLength > 0
+      ? existing.pdfBytes
+      : undefined);
+
   const next: WebPageSession = {
     sessionId:
-      session.sessionId ??
       existing?.sessionId ??
       createHash("sha256").update(k).digest("hex").slice(0, 16),
-    url: session.url,
-    kind: session.kind,
-    text: session.text,
-    pages: session.pages,
-    pageCount: session.pageCount,
-    contentFingerprint: session.contentFingerprint,
-    openedAt: session.openedAt,
+    viewerToken,
+    scope,
+    url: input.url,
+    kind: input.kind,
+    text: input.text,
+    pages: input.pages ?? existing?.pages,
+    pageCount: input.pageCount ?? existing?.pageCount,
+    extractedPages,
+    consultedPages: existing?.consultedPages ?? [],
+    contentFingerprint: input.contentFingerprint,
+    openedAt: input.openedAt ?? now.toISOString(),
+    expiresAt,
     charOffset: existing?.charOffset ?? 0,
     consultedRanges: existing?.consultedRanges ?? [],
-    limits: session.limits,
+    bytesObtained: input.bytesObtained ?? existing?.bytesObtained ?? 0,
+    sourceTruncated: Boolean(input.sourceTruncated ?? existing?.sourceTruncated),
+    pdfBytes: retainedPdf,
+    limits: [...input.limits],
   };
-  if (
-    existing &&
-    existing.contentFingerprint !== next.contentFingerprint
-  ) {
+
+  if (existing && existing.contentFingerprint !== next.contentFingerprint) {
     next.limits = [...next.limits, "SOURCE_MODIFIED_SINCE_PRIOR_OPEN"];
     next.charOffset = 0;
     next.consultedRanges = [];
+    next.consultedPages = [];
+    next.extractedPages = (input.pages ?? []).map((p) => p.pageNumber);
   }
+
+  if (existing) byViewerToken.delete(existing.viewerToken);
   sessions.set(k, next);
+  byViewerToken.set(viewerToken, k);
   return next;
 }

 export function getWebPageSession(
-  workId: string | null | undefined,
+  scope: WebPageSessionScope,
   url: string,
 ): WebPageSession | null {
-  return sessions.get(key(workId, url)) ?? null;
+  purgeExpired();
+  try {
+    return sessions.get(mapKey(scope, url)) ?? null;
+  } catch {
+    return null;
+  }
+}
+
+export function getWebPageSessionByViewerToken(
+  token: string,
+): WebPageSession | null {
+  purgeExpired();
+  const k = byViewerToken.get(token);
+  if (!k) return null;
+  return sessions.get(k) ?? null;
+}
+
+export function touchSessionExpiry(session: WebPageSession): void {
+  session.expiresAt = new Date(Date.now() + ttlMs()).toISOString();
 }

 export function readWebPageProgressive(input: {
-  workId?: string | null;
+  scope: WebPageSessionScope;
   url: string;
   from?: number | null;
   maxChars?: number | null;
@@ -85,13 +279,20 @@ export function readWebPageProgressive(input: {
       from: number;
       to: number;
       totalChars: number;
-      coverage: "PARTIAL" | "COMPLETE";
+      coveredChars: number;
+      coverage: "PARTIAL" | "COMPLETE" | "EMPTY";
+      sourceTruncated: boolean;
+      bytesObtained: number;
       limits: string[];
       contentFingerprint: string;
+      viewerToken: string;
     }
   | { ok: false; reason: string } {
-  const session = getWebPageSession(input.workId, input.url);
+  const session = getWebPageSession(input.scope, input.url);
   if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
+  if (Date.parse(session.expiresAt) <= Date.now()) {
+    return { ok: false, reason: "SESSION_EXPIRED" };
+  }
   if (session.kind !== "html") {
     return { ok: false, reason: "SESSION_NOT_HTML_USE_PDF_READ" };
   }
@@ -101,7 +302,12 @@ export function readWebPageProgressive(input: {
   const to = from + excerpt.length;
   session.charOffset = to;
   session.consultedRanges.push({ from, to });
-  sessions.set(key(input.workId, input.url), session);
+  touchSessionExpiry(session);
+  const cov = unionCoverageChars(session.consultedRanges, session.text.length);
+  const limits = [...session.limits];
+  if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");
+  if (cov.coverage !== "COMPLETE") limits.push("NOT_FULLY_CONSULTED");
+  sessions.set(mapKey(session.scope, session.url), session);
   return {
     ok: true,
     sessionId: session.sessionId,
@@ -109,14 +315,170 @@ export function readWebPageProgressive(input: {
     from,
     to,
     totalChars: session.text.length,
-    coverage: to >= session.text.length ? "COMPLETE" : "PARTIAL",
-    limits: session.limits,
+    coveredChars: cov.coveredChars,
+    coverage: cov.coverage,
+    sourceTruncated: session.sourceTruncated,
+    bytesObtained: session.bytesObtained,
+    limits,
     contentFingerprint: session.contentFingerprint,
+    viewerToken: session.viewerToken,
+  };
+}
+
+export async function readWebPdfPages(input: {
+  scope: WebPageSessionScope;
+  url: string;
+  pageFrom: number;
+  pageTo: number;
+  searchQuery?: string | null;
+}): Promise<
+  | {
+      ok: true;
+      sessionId: string;
+      pageCount: number;
+      pages: Array<{ pageNumber: number; text: string; charCount: number }>;
+      pagesAvailable: number[];
+      consultedPages: number[];
+      searchHits?: Array<{ pageNumber: number; excerpt: string; matchIndex: number }>;
+      coverage: "PARTIAL" | "COMPLETE" | "EMPTY";
+      limits: string[];
+      contentFingerprint: string;
+      viewerToken: string;
+      sourceTruncated: boolean;
+    }
+  | { ok: false; reason: string; limits?: string[] }
+> {
+  const session = getWebPageSession(input.scope, input.url);
+  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
+  if (Date.parse(session.expiresAt) <= Date.now()) {
+    return { ok: false, reason: "SESSION_EXPIRED" };
+  }
+  if (session.kind !== "pdf") {
+    return { ok: false, reason: "SESSION_NOT_PDF" };
+  }
+  if (!session.pageCount) {
+    return { ok: false, reason: "PDF_PAGE_COUNT_UNKNOWN", limits: session.limits };
+  }
+
+  const from = Math.max(1, input.pageFrom);
+  const to = Math.min(session.pageCount, Math.max(from, input.pageTo));
+
+  type Page = { pageNumber: number; text: string; charCount: number };
+  let returned: Page[] = [];
+  let searchHits:
+    | Array<{ pageNumber: number; excerpt: string; matchIndex: number }>
+    | undefined;
+  let extractLimits: string[] = [];
+
+  if (session.pdfBytes && session.pdfBytes.byteLength >= 5) {
+    const { extractPdfText } = await import(
+      "@/domains/documents/pdf-extract-server"
+    );
+    const pdf = await extractPdfText({
+      bytes: session.pdfBytes,
+      identity: {
+        provenance: "WEB",
+        sourceRef: session.url,
+        versionToken: session.contentFingerprint,
+        mimeClaimed: "application/pdf",
+      },
+      pageFrom: from,
+      pageTo: to,
+      searchQuery: input.searchQuery ?? null,
+    });
+    if (!pdf.ok) {
+      return {
+        ok: false,
+        reason: pdf.reasonCode,
+        limits: [...session.limits, ...pdf.limits],
+      };
+    }
+    returned = pdf.pages;
+    searchHits = pdf.searchHits;
+    extractLimits = pdf.limits;
+    const byPage = new Map((session.pages ?? []).map((p) => [p.pageNumber, p]));
+    for (const p of pdf.pages) byPage.set(p.pageNumber, p);
+    session.pages = [...byPage.values()].sort((a, b) => a.pageNumber - b.pageNumber);
+  } else if (session.pages?.length) {
+    // SCRIPTED / preloaded pages — no binary re-parse.
+    returned = session.pages
+      .filter((p) => p.pageNumber >= from && p.pageNumber <= to)
+      .map((p) => ({
+        pageNumber: p.pageNumber,
+        text: p.text,
+        charCount: p.text.length,
+      }));
+    extractLimits = ["PRELOADED_SESSION_PAGES"];
+    if (input.searchQuery?.trim()) {
+      const needle = input.searchQuery.trim().toLowerCase();
+      searchHits = [];
+      for (const p of returned) {
+        const hay = p.text.toLowerCase();
+        let idx = 0;
+        while (searchHits.length < 10) {
+          const found = hay.indexOf(needle, idx);
+          if (found < 0) break;
+          searchHits.push({
+            pageNumber: p.pageNumber,
+            matchIndex: found,
+            excerpt: p.text.slice(
+              Math.max(0, found - 40),
+              Math.min(p.text.length, found + needle.length + 60),
+            ),
+          });
+          idx = found + needle.length;
+        }
+      }
+    }
+  } else {
+    return { ok: false, reason: "PDF_BYTES_UNAVAILABLE", limits: session.limits };
+  }
+
+  const pagesAvailable = returned.map((p) => p.pageNumber);
+  session.extractedPages = [
+    ...new Set([...session.extractedPages, ...pagesAvailable]),
+  ].sort((a, b) => a - b);
+  session.consultedPages = [
+    ...new Set([...session.consultedPages, ...pagesAvailable]),
+  ].sort((a, b) => a - b);
+  session.text = (session.pages ?? returned).map((p) => p.text).join("\n");
+  touchSessionExpiry(session);
+  sessions.set(mapKey(session.scope, session.url), session);
+
+  const allConsulted =
+    session.pageCount > 0 &&
+    session.consultedPages.length >= session.pageCount &&
+    session.consultedPages[0] === 1 &&
+    session.consultedPages[session.consultedPages.length - 1] ===
+      session.pageCount &&
+    session.consultedPages.every((p, i) => p === i + 1);
+
+  const limits = [
+    ...session.limits,
+    ...extractLimits,
+    `PAGES_RETURNED_${from}_${to}`,
+  ];
+  if (!allConsulted) limits.push("NOT_FULLY_CONSULTED");
+  if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");
+
+  return {
+    ok: true,
+    sessionId: session.sessionId,
+    pageCount: session.pageCount,
+    pages: returned,
+    pagesAvailable,
+    consultedPages: session.consultedPages,
+    searchHits,
+    coverage: allConsulted ? "COMPLETE" : returned.length ? "PARTIAL" : "EMPTY",
+    limits,
+    contentFingerprint: session.contentFingerprint,
+    viewerToken: session.viewerToken,
+    sourceTruncated: session.sourceTruncated,
   };
 }

 export function searchWebPageSession(input: {
-  workId?: string | null;
+  scope: WebPageSessionScope;
   url: string;
   query: string;
   maxHits?: number;
@@ -125,16 +487,32 @@ export function searchWebPageSession(input: {
       ok: true;
       hits: Array<{ index: number; excerpt: string; pageNumber?: number }>;
       limits: string[];
+      searchScope: "EXTRACTED_PAGES_ONLY" | "HTML_TEXT";
+      extractedPages?: number[];
+      pageCount?: number;
     }
   | { ok: false; reason: string } {
-  const session = getWebPageSession(input.workId, input.url);
+  const session = getWebPageSession(input.scope, input.url);
   if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
+  if (Date.parse(session.expiresAt) <= Date.now()) {
+    return { ok: false, reason: "SESSION_EXPIRED" };
+  }
   const q = input.query.trim().toLowerCase();
   if (!q) return { ok: false, reason: "EMPTY_QUERY" };
   const maxHits = Math.min(20, input.maxHits ?? 8);
   const hits: Array<{ index: number; excerpt: string; pageNumber?: number }> = [];
-  if (session.kind === "pdf" && session.pages) {
-    for (const page of session.pages) {
+  const limits = [...session.limits];
+
+  if (session.kind === "pdf") {
+    // Honest: search only pages already extracted/consulted via open or read_pdf_pages.
+    const extracted = new Set(session.extractedPages);
+    const searchable = (session.pages ?? []).filter((p) =>
+      extracted.has(p.pageNumber),
+    );
+    if (!searchable.length) {
+      return { ok: false, reason: "NO_EXTRACTED_PDF_PAGES" };
+    }
+    for (const page of searchable) {
       const hay = page.text.toLowerCase();
       let idx = 0;
       while (hits.length < maxHits) {
@@ -151,25 +529,57 @@ export function searchWebPageSession(input: {
         idx = found + q.length;
       }
     }
-  } else {
-    const hay = session.text.toLowerCase();
-    let idx = 0;
-    while (hits.length < maxHits) {
-      const found = hay.indexOf(q, idx);
-      if (found < 0) break;
-      hits.push({
-        index: found,
-        excerpt: session.text.slice(
-          Math.max(0, found - 40),
-          Math.min(session.text.length, found + q.length + 60),
-        ),
-      });
-      idx = found + q.length;
+    if (
+      session.pageCount &&
+      session.extractedPages.length < session.pageCount
+    ) {
+      limits.push("SEARCH_LIMITED_TO_EXTRACTED_PAGES");
+      limits.push(
+        `EXTRACTED_${session.extractedPages.length}_OF_${session.pageCount}`,
+      );
+      if (hits.length === 0) {
+        limits.push("ABSENCE_NOT_PROVEN_FOR_UNEXTRACTED_PAGES");
+      }
     }
+    return {
+      ok: true,
+      hits,
+      limits,
+      searchScope: "EXTRACTED_PAGES_ONLY",
+      extractedPages: session.extractedPages,
+      pageCount: session.pageCount,
+    };
   }
-  return { ok: true, hits, limits: session.limits };
+
+  const hay = session.text.toLowerCase();
+  let idx = 0;
+  while (hits.length < maxHits) {
+    const found = hay.indexOf(q, idx);
+    if (found < 0) break;
+    hits.push({
+      index: found,
+      excerpt: session.text.slice(
+        Math.max(0, found - 40),
+        Math.min(session.text.length, found + q.length + 60),
+      ),
+    });
+    idx = found + q.length;
+  }
+  return { ok: true, hits, limits, searchScope: "HTML_TEXT" };
 }

 export function __resetWebPageSessionsForTests() {
   sessions.clear();
+  byViewerToken.clear();
+}
+
+export function __webPageSessionStatsForTests() {
+  purgeExpired();
+  return {
+    count: sessions.size,
+    memoryBytes: totalMemory(),
+    maxSessions: maxSessions(),
+    maxMemoryBytes: maxMemoryBytes(),
+    ttlMs: ttlMs(),
+  };
 }

```
### `projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 15cc2578..793441f6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -388,10 +388,13 @@ async function executeIsolatedLiveWebSearch(
   const catalog = await import("./cognitive-resources/resource-catalog");
   const modelInCatalog = (v: string) =>
     catalog.COGNITIVE_RESOURCE_CATALOG.some((e) => e.modelId === v);
-  // Catalog-only default — never inherit gpt-4.1-mini outside the trio.
+  // Catalog + provisional policy admission — never inherit gpt-4.1-mini.
   const modelRequested = (
     process.env.SFIA_WEB_SEARCH_MODEL || "gpt-6.1-terra"
   ).trim();
+  const effortRequested = (
+    process.env.SFIA_WEB_SEARCH_EFFORT || "medium"
+  ).trim();
   if (!modelInCatalog(modelRequested)) {
     return {
       status: "ERROR",
@@ -403,6 +406,50 @@ async function executeIsolatedLiveWebSearch(
       ],
     };
   }
+  const { admitModelEffort } = await import(
+    "./cognitive-resources/resource-admission"
+  );
+  const { isCognitiveEffort, isCognitiveModelId } = await import(
+    "./cognitive-resources/resource-catalog"
+  );
+  if (!isCognitiveModelId(modelRequested) || !isCognitiveEffort(effortRequested)) {
+    return {
+      status: "ERROR",
+      items: [],
+      limits: [
+        "WEB_SEARCH_MODEL_EFFORT_INVALID",
+        `MODEL_${modelRequested}`,
+        `EFFORT_${effortRequested}`,
+        "WEB_LIVE_SEARCH_BLOCKED",
+      ],
+    };
+  }
+  const admission = admitModelEffort(modelRequested, effortRequested, "operational");
+  if (!admission.admitted) {
+    return {
+      status: "ERROR",
+      items: [],
+      limits: [
+        "WEB_SEARCH_MODEL_EFFORT_NOT_ADMITTED",
+        admission.reasonCode,
+        `MODEL_${modelRequested}`,
+        `EFFORT_${effortRequested}`,
+        "WEB_LIVE_SEARCH_BLOCKED",
+      ],
+    };
+  }
+  // Hosted webSearchTool compatibility: Terra/Sol catalogued models only (no Luna hosted search claim).
+  if (modelRequested === "gpt-6-luna") {
+    return {
+      status: "ERROR",
+      items: [],
+      limits: [
+        "WEB_SEARCH_HOSTED_TOOL_INCOMPATIBLE_MODEL",
+        `MODEL_${modelRequested}`,
+        "WEB_LIVE_SEARCH_BLOCKED",
+      ],
+    };
+  }
   const attemptId = `web-search-${randomUUID()}`;
   const generationId = `web-gen-${randomUUID()}`;
   const started = Date.now();
@@ -420,6 +467,9 @@ async function executeIsolatedLiveWebSearch(
       ].join(" "),
       tools: [webSearchTool({ searchContextSize: "medium" })],
       model: modelRequested,
+      modelSettings: {
+        reasoning: { effort: effortRequested as "low" | "medium" | "high" },
+      },
     });
     // CRITICAL isolation: only the sanitized public query is the user message.
     result = await run(agent, query, { maxTurns: 6 });
@@ -690,14 +740,33 @@ export type PublicOpenResult = {
   contentKind?: "html" | "pdf";
   pageCount?: number;
   pagesAvailable?: number[];
-  /** Base64 PDF bytes when contentKind=pdf and body was authorized (viewer). */
-  pdfBase64?: string;
+  /** Opaque viewer token — never PDF bytes in Nora cognitive payload. */
+  viewerToken?: string;
   sessionId?: string;
   contentFingerprint?: string;
   /** B04 — structured citation when a page was opened. */
   citation?: import("./web-source-citation").WebSourceCitation;
 };

+function resolveOpenSessionScope(input: {
+  cognitiveWorkId?: string | null;
+  projectId?: string | null;
+  ownerPilotId?: string | null;
+  env?: NodeJS.ProcessEnv | Record<string, string | undefined>;
+}): import("./public-web-page-session").WebPageSessionScope | null {
+  const env = input.env ?? process.env;
+  const lane = String(env.STUDIO_LANE || "").trim();
+  const projectId = (input.projectId || "").trim();
+  const cognitiveWorkId = (input.cognitiveWorkId || "").trim();
+  if (!lane || lane === "UNKNOWN" || !projectId || !cognitiveWorkId) return null;
+  return {
+    lane,
+    projectId,
+    cognitiveWorkId,
+    ownerPilotId: input.ownerPilotId ?? null,
+  };
+}
+
 export async function executePublicWebOpenPage(input: {
   url: string;
   env?: NodeJS.ProcessEnv | Record<string, string | undefined>;
@@ -710,6 +779,8 @@ export async function executePublicWebOpenPage(input: {
   explicitlyAuthorized?: boolean;
   /** Cognitive work id for progressive session binding. */
   cognitiveWorkId?: string | null;
+  projectId?: string | null;
+  ownerPilotId?: string | null;
 }): Promise<PublicOpenResult> {
   const env = input.env ?? process.env;
   const mode = webMode(env);
@@ -764,81 +835,122 @@ export async function executePublicWebOpenPage(input: {
     const { buildWebSourceCitation } = await import("./web-source-citation");
     const { putWebPageSession } = await import("./public-web-page-session");
     const { createHash } = await import("node:crypto");
+    const scope = resolveOpenSessionScope(input);
     const isPdf = /\.pdf($|\?)/i.test(url);
     if (isPdf) {
-      const scriptedText =
-        "Scripted PDF page 1 alpha. Scripted PDF page 2 beta contradiction. Scripted PDF page 3 gamma.";
+      const pages = [
+        { pageNumber: 1, text: "Scripted PDF page 1 alpha." },
+        { pageNumber: 2, text: "Scripted PDF page 2 beta contradiction." },
+        { pageNumber: 3, text: "Scripted PDF page 3 gamma." },
+        { pageNumber: 4, text: "Scripted PDF page 4 intermediate." },
+        { pageNumber: 5, text: "Scripted PDF page 5 bridge." },
+        { pageNumber: 6, text: "Scripted PDF page 6 determinant SECRET_MARKER_P6." },
+        { pageNumber: 7, text: "Scripted PDF page 7 trailing." },
+        { pageNumber: 8, text: "Scripted PDF page 8 end." },
+      ];
+      const scriptedText = pages.map((p) => p.text).join(" ");
       const fp = createHash("sha256").update(scriptedText).digest("hex").slice(0, 16);
-      const session = putWebPageSession(input.cognitiveWorkId, {
-        url,
-        kind: "pdf",
-        text: scriptedText,
-        pages: [
-          { pageNumber: 1, text: "Scripted PDF page 1 alpha." },
-          { pageNumber: 2, text: "Scripted PDF page 2 beta contradiction." },
-          { pageNumber: 3, text: "Scripted PDF page 3 gamma." },
-        ],
-        pageCount: 3,
-        contentFingerprint: fp,
-        openedAt: new Date().toISOString(),
-        limits: ["SCRIPTED_WEB_PDF", "UNTRUSTED_WEB_CONTENT", "FIXTURE_NOT_LIVE_BYTES"],
-      });
+      const initialPages = pages.slice(0, 5);
+      const limits = [
+        "SCRIPTED_WEB_PDF",
+        "UNTRUSTED_WEB_CONTENT",
+        "FIXTURE_NOT_LIVE_BYTES",
+        "INITIAL_PAGES_1_5",
+        "NOT_FULLY_CONSULTED",
+      ];
+      let sessionId: string | undefined;
+      let viewerToken: string | undefined;
+      if (scope) {
+        const session = putWebPageSession({
+          scope,
+          url,
+          kind: "pdf",
+          text: initialPages.map((p) => p.text).join("\n"),
+          // Full page texts preloaded for SCRIPTED progressive reads (no fake PDF bytes).
+          pages,
+          pageCount: pages.length,
+          contentFingerprint: fp,
+          limits,
+          bytesObtained: Buffer.byteLength(scriptedText, "utf8"),
+          sourceTruncated: false,
+        });
+        session.extractedPages = initialPages.map((p) => p.pageNumber);
+        session.consultedPages = initialPages.map((p) => p.pageNumber);
+        sessionId = session.sessionId;
+        viewerToken = session.viewerToken;
+      } else {
+        limits.push("SESSION_SCOPE_MISSING");
+      }
       const citation = buildWebSourceCitation({
         url,
         establishedUrl: url,
         title: `Scripted PDF ${new URL(url).hostname}`,
         coverage: "PARTIAL",
-        excerpt: scriptedText.slice(0, 400),
-        limits: session.limits,
+        excerpt: initialPages.map((p) => `[p${p.pageNumber}] ${p.text}`).join("\n"),
+        limits,
       });
       return {
         status: "AVAILABLE",
         coverage: "PARTIAL",
         url,
         excerpt: citation.excerpt ?? "",
-        limits: session.limits,
+        limits,
         mode: "SCRIPTED",
         contentKind: "pdf",
-        pageCount: 3,
-        pagesAvailable: [1, 2, 3],
-        sessionId: session.sessionId,
+        pageCount: pages.length,
+        pagesAvailable: initialPages.map((p) => p.pageNumber),
+        sessionId,
+        viewerToken,
         contentFingerprint: fp,
         citation,
       };
     }
     const excerpt = `Scripted page body for ${url} — FAKE excerpt, not a LIVE fetch. `.repeat(40);
     const fp = createHash("sha256").update(excerpt).digest("hex").slice(0, 16);
-    const session = putWebPageSession(input.cognitiveWorkId, {
-      url,
-      kind: "html",
-      text: excerpt,
-      contentFingerprint: fp,
-      openedAt: new Date().toISOString(),
-      limits: ["SCRIPTED_WEB_OPEN", "UNTRUSTED_WEB_CONTENT"],
-    });
+    const limits = ["SCRIPTED_WEB_OPEN", "UNTRUSTED_WEB_CONTENT", "NOT_FULLY_CONSULTED"];
+    let sessionId: string | undefined;
+    let viewerToken: string | undefined;
+    if (scope) {
+      const session = putWebPageSession({
+        scope,
+        url,
+        kind: "html",
+        text: excerpt,
+        contentFingerprint: fp,
+        limits,
+        bytesObtained: Buffer.byteLength(excerpt, "utf8"),
+        sourceTruncated: false,
+      });
+      sessionId = session.sessionId;
+      viewerToken = session.viewerToken;
+    } else {
+      limits.push("SESSION_SCOPE_MISSING");
+    }
     const citation = buildWebSourceCitation({
       url,
       establishedUrl: url,
       title: `Scripted page ${new URL(url).hostname}`,
       coverage: "OPENED",
       excerpt: excerpt.slice(0, 800),
-      limits: session.limits,
+      limits,
     });
     return {
       status: "AVAILABLE",
       coverage: "PAGE_OPENED",
       url,
       excerpt: citation.excerpt ?? "",
-      limits: citation.limits,
+      limits,
       mode: "SCRIPTED",
       contentKind: "html",
-      sessionId: session.sessionId,
+      sessionId,
+      viewerToken,
       contentFingerprint: fp,
       citation,
     };
   }

   // LIVE open — DNS + pinned connect + timeout through body read; no cookies/auth.
+  const scope = resolveOpenSessionScope(input);
   try {
     const {
       assertPublicDnsEgress,
@@ -926,8 +1038,10 @@ export async function executePublicWebOpenPage(input: {
         const { extractPdfText } = await import(
           "@/domains/documents/pdf-extract-server"
         );
+        // Retain an independent copy before pdf.js may detach the fetch buffer.
+        const retainedPdfBytes = new Uint8Array(bounded.bytes);
         const pdf = await extractPdfText({
-          bytes: bounded.bytes,
+          bytes: new Uint8Array(retainedPdfBytes),
           identity: {
             provenance: "WEB",
             sourceRef: url,
@@ -938,7 +1052,7 @@ export async function executePublicWebOpenPage(input: {
           pageTo: 5,
         });
         const fp = createHash("sha256")
-          .update(bounded.bytes)
+          .update(retainedPdfBytes)
           .digest("hex")
           .slice(0, 32);
         if (!pdf.ok) {
@@ -958,20 +1072,42 @@ export async function executePublicWebOpenPage(input: {
             contentFingerprint: fp,
           };
         }
-        const session = putWebPageSession(input.cognitiveWorkId, {
+        if (!scope) {
+          return {
+            status: "ERROR",
+            coverage: "PARTIAL",
+            url,
+            excerpt: "",
+            limits: [
+              "SESSION_SCOPE_MISSING",
+              "WEB_LIVE_PDF",
+              "EGRESS_DNS_CHECKED",
+              "EGRESS_PINNED_CONNECT",
+            ],
+            mode: "LIVE",
+            contentKind: "pdf",
+            contentFingerprint: fp,
+          };
+        }
+        const session = putWebPageSession({
+          scope,
           url,
           kind: "pdf",
           text: pdf.pages.map((p) => p.text).join("\n"),
           pages: pdf.pages,
           pageCount: pdf.pageCount,
           contentFingerprint: fp,
-          openedAt: new Date().toISOString(),
           limits: [
             "WEB_LIVE_PDF",
             "UNTRUSTED_WEB_CONTENT",
             ...pdf.limits,
             `PINNED_${pinned.pinnedAddress}`,
           ],
+          bytesObtained: retainedPdfBytes.byteLength,
+          sourceTruncated: Boolean(bounded.truncated),
+          // Bytes stay server-side for progressive page reads + viewerToken path.
+          // Never returned as base64 into Nora cognitive payloads.
+          pdfBytes: retainedPdfBytes,
         });
         const excerpt = pdf.pages
           .map((p) => `[p${p.pageNumber}] ${p.text}`)
@@ -995,8 +1131,8 @@ export async function executePublicWebOpenPage(input: {
           contentKind: "pdf",
           pageCount: pdf.pageCount,
           pagesAvailable: pdf.pagesAvailable,
-          pdfBase64: Buffer.from(bounded.bytes).toString("base64"),
           sessionId: session.sessionId,
+          viewerToken: session.viewerToken,
           contentFingerprint: fp,
           citation,
         };
@@ -1013,12 +1149,29 @@ export async function executePublicWebOpenPage(input: {
       );
       const text = bounded.text;
       const fp = createHash("sha256").update(text).digest("hex").slice(0, 16);
-      const session = putWebPageSession(input.cognitiveWorkId, {
+      if (!scope) {
+        return {
+          status: "ERROR",
+          coverage: "PARTIAL",
+          url,
+          excerpt: "",
+          limits: [
+            "SESSION_SCOPE_MISSING",
+            "WEB_LIVE_FETCH",
+            "EGRESS_DNS_CHECKED",
+            "EGRESS_PINNED_CONNECT",
+          ],
+          mode: "LIVE",
+          contentKind: "html",
+          contentFingerprint: fp,
+        };
+      }
+      const session = putWebPageSession({
+        scope,
         url,
         kind: "html",
         text,
         contentFingerprint: fp,
-        openedAt: new Date().toISOString(),
         limits: [
           "WEB_LIVE_FETCH",
           "UNTRUSTED_WEB_CONTENT",
@@ -1029,6 +1182,8 @@ export async function executePublicWebOpenPage(input: {
           bounded.truncated ? "EXCERPT_TRUNCATED" : "EXCERPT_BOUNDED",
           "PAGE_NOT_FULLY_CONSULTED",
         ],
+        bytesObtained: Buffer.byteLength(text, "utf8"),
+        sourceTruncated: Boolean(bounded.truncated),
       });
       const citation = buildWebSourceCitation({
         url,
@@ -1047,6 +1202,7 @@ export async function executePublicWebOpenPage(input: {
         mode: "LIVE",
         contentKind: "html",
         sessionId: session.sessionId,
+        viewerToken: session.viewerToken,
         contentFingerprint: fp,
         citation,
       };
@@ -1086,6 +1242,11 @@ export async function buildPublicWebFrontierTools(input: {
   pilotProvidedUrls?: string[];
   /** Explicit this-turn Pilote text for provenance checks (never haystack). */
   pilotText?: string | null;
+  /**
+   * Mutable list of Nora-proposed queries awaiting Pilote exact authorization.
+   * Server stages here; never egress until registered as exact.
+   */
+  pendingPublicWebProposals?: string[];
   /** FinOps attribution for LIVE isolated search worker (optional). */
   finops?: {
     cognitiveWorkId?: string | null;
@@ -1098,15 +1259,18 @@ export async function buildPublicWebFrontierTools(input: {
 }) {
   const { tool } = await import("@openai/agents");
   const { z } = await import("zod");
-  const { admitNoraProposedPublicQuery, PILOT_PUBLIC_QUERY_REF } = await import(
-    "./public-web-registry"
-  );
+  const {
+    admitNoraProposedPublicQuery,
+    stageNoraProposedPublicQuery,
+    PILOT_PUBLIC_QUERY_REF,
+  } = await import("./public-web-registry");
   const markers = (input.privateContextMarkers ?? []).filter(Boolean);
   /** Mutable registries for this tool session (Nora proposals admitted by server). */
   const turnTopics: Record<string, string> = { ...(input.turnPublicTopics ?? {}) };
   const turnExact = new Set(
     (input.turnAuthorizedExactQueries ?? []).map((q) => q.replace(/\s+/g, " ").trim()).filter(Boolean),
   );
+  const pendingProposals = input.pendingPublicWebProposals ?? [];
   const pilotUrlCandidates = new Set(
     (input.pilotProvidedUrls ?? [])
       .map((u) => normalizeDiscoveredWebUrl(u))
@@ -1172,6 +1336,7 @@ export async function buildPublicWebFrontierTools(input: {
         }
         // T1.1 / Option B — Nora proposes; server admits only against already
         // registered public queries (catalog / exact). Sanitize alone ≠ authorize.
+        // Unknown public subjects are staged for explicit Pilote exact admission.
         if (args.proposedPublicQuery?.trim()) {
           const registeredPublicQueries = [
             ...Object.values(turnTopics),
@@ -1183,12 +1348,38 @@ export async function buildPublicWebFrontierTools(input: {
             registeredPublicQueries,
           });
           if (!admitted.ok) {
+            const staged = stageNoraProposedPublicQuery({
+              proposedQuery: args.proposedPublicQuery,
+              privateMarkers: markers,
+            });
+            if (staged.ok) {
+              if (!pendingProposals.includes(staged.query)) {
+                pendingProposals.push(staged.query);
+              }
+              return {
+                status: "PENDING_PILOT_AUTHORIZATION",
+                coverage: "DENIED",
+                query: staged.query,
+                items: [],
+                limits: [
+                  admitted.reason,
+                  "PROPOSED_QUERY_STAGED_FOR_PILOT",
+                  "NO_EGRESS_UNTIL_EXACT_AUTHORIZATION",
+                  'Ask Pilote: AUTHORIZE_PUBLIC_QUERY: "' + staged.query + '"',
+                ],
+                mode: webMode(),
+              };
+            }
             return {
               status: "DENIED",
               coverage: "DENIED",
               query: "",
               items: [],
-              limits: [admitted.reason, "PROPOSED_QUERY_NOT_ADMITTED"],
+              limits: [
+                admitted.reason,
+                staged.reason,
+                "PROPOSED_QUERY_NOT_ADMITTED",
+              ],
               mode: webMode(),
             };
           }
@@ -1311,6 +1502,8 @@ export async function buildPublicWebFrontierTools(input: {
           url: args.url,
           allowedUrls: [...discoveredUrls],
           cognitiveWorkId: input.finops?.cognitiveWorkId ?? null,
+          projectId: input.finops?.projectId ?? null,
+          ownerPilotId: input.finops?.ownerPilotId ?? null,
         });
         if (result.status === "AVAILABLE") {
           recordToolSource(input.sourceJournal, {
@@ -1330,7 +1523,7 @@ export async function buildPublicWebFrontierTools(input: {
     tool({
       name: "public_web_read_more",
       description:
-        "Continue reading an already-opened public HTML page (progressive). Requires a prior public_web_open_page session. Does not re-fetch unless no session exists (then DENIED).",
+        "Continue reading an already-opened public HTML page (progressive). For PDF sessions use public_web_read_pdf_pages instead. Requires a prior public_web_open_page session.",
       parameters: z.object({
         url: z.string().min(8).max(2000),
         from: z.number().int().min(0).nullable().optional(),
@@ -1348,12 +1541,24 @@ export async function buildPublicWebFrontierTools(input: {
             limits: ["URL_NOT_IN_AUTHORIZED_DISCOVERY"],
           };
         }
+        const scope = resolveOpenSessionScope({
+          cognitiveWorkId: input.finops?.cognitiveWorkId,
+          projectId: input.finops?.projectId,
+          ownerPilotId: input.finops?.ownerPilotId,
+        });
+        if (!scope) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            limits: ["SESSION_SCOPE_MISSING"],
+          };
+        }
         input.budget.remainingCalls -= 1;
         const { readWebPageProgressive } = await import(
           "./public-web-page-session"
         );
         const read = readWebPageProgressive({
-          workId: input.finops?.cognitiveWorkId,
+          scope,
           url: preview,
           from: args.from,
           maxChars: args.maxChars,
@@ -1380,8 +1585,88 @@ export async function buildPublicWebFrontierTools(input: {
           from: read.from,
           to: read.to,
           totalChars: read.totalChars,
+          coveredChars: read.coveredChars,
+          sourceTruncated: read.sourceTruncated,
+          sessionId: read.sessionId,
+          viewerToken: read.viewerToken,
+          contentFingerprint: read.contentFingerprint,
+          limits: read.limits,
+          mode: webMode(),
+        };
+      },
+    }),
+    tool({
+      name: "public_web_read_pdf_pages",
+      description:
+        "Read additional PDF page ranges from an already-opened public PDF session. Initial open returns only the first pages; use this to consult pages beyond that range before concluding absence. Returns text/metadata only — never PDF bytes.",
+      parameters: z.object({
+        url: z.string().min(8).max(2000),
+        pageFrom: z.number().int().min(1).max(80),
+        pageTo: z.number().int().min(1).max(80),
+        searchQuery: z.string().min(1).max(200).nullable().optional(),
+      }),
+      execute: async (args) => {
+        if (input.budget.remainingCalls <= 0) {
+          return { status: "DENIED", reason: "BUDGET_EXHAUSTED" };
+        }
+        const preview = normalizeDiscoveredWebUrl(args.url);
+        if (!preview || !discoveredUrls.has(preview)) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            limits: ["URL_NOT_IN_AUTHORIZED_DISCOVERY"],
+          };
+        }
+        const scope = resolveOpenSessionScope({
+          cognitiveWorkId: input.finops?.cognitiveWorkId,
+          projectId: input.finops?.projectId,
+          ownerPilotId: input.finops?.ownerPilotId,
+        });
+        if (!scope) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            limits: ["SESSION_SCOPE_MISSING"],
+          };
+        }
+        input.budget.remainingCalls -= 1;
+        const { readWebPdfPages } = await import("./public-web-page-session");
+        const pageFrom = Math.min(args.pageFrom, args.pageTo);
+        const pageTo = Math.max(args.pageFrom, args.pageTo);
+        const read = await readWebPdfPages({
+          scope,
+          url: preview,
+          pageFrom,
+          pageTo,
+          searchQuery: args.searchQuery,
+        });
+        if (!read.ok) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            limits: [read.reason, ...(read.limits ?? [])],
+          };
+        }
+        recordToolSource(input.sourceJournal, {
+          kind: "WEB",
+          ref: preview,
+          title: preview,
+          coverage: read.coverage === "COMPLETE" ? "CONSULTED" : "PARTIAL",
+          notes: `public_web_read_pdf_pages:${pageFrom}-${pageTo}`,
+        });
+        return {
+          status: "AVAILABLE",
+          coverage: read.coverage,
+          url: preview,
+          pageCount: read.pageCount,
+          pages: read.pages,
+          pagesAvailable: read.pagesAvailable,
+          consultedPages: read.consultedPages,
+          searchHits: read.searchHits,
           sessionId: read.sessionId,
+          viewerToken: read.viewerToken,
           contentFingerprint: read.contentFingerprint,
+          sourceTruncated: read.sourceTruncated,
           limits: read.limits,
           mode: webMode(),
         };
@@ -1390,7 +1675,7 @@ export async function buildPublicWebFrontierTools(input: {
     tool({
       name: "public_web_search_in_page",
       description:
-        "Search text within an already-opened public page (HTML or PDF session). Retrieval only — Nora judges relevance.",
+        "Search text within already-extracted content of an opened public page. For PDF, only pages already extracted are searched — expand with public_web_read_pdf_pages before concluding absence.",
       parameters: z.object({
         url: z.string().min(8).max(2000),
         query: z.string().min(1).max(200),
@@ -1407,12 +1692,24 @@ export async function buildPublicWebFrontierTools(input: {
             limits: ["URL_NOT_IN_AUTHORIZED_DISCOVERY"],
           };
         }
+        const scope = resolveOpenSessionScope({
+          cognitiveWorkId: input.finops?.cognitiveWorkId,
+          projectId: input.finops?.projectId,
+          ownerPilotId: input.finops?.ownerPilotId,
+        });
+        if (!scope) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            limits: ["SESSION_SCOPE_MISSING"],
+          };
+        }
         input.budget.remainingCalls -= 1;
         const { searchWebPageSession } = await import(
           "./public-web-page-session"
         );
         const found = searchWebPageSession({
-          workId: input.finops?.cognitiveWorkId,
+          scope,
           url: preview,
           query: args.query,
         });
@@ -1435,6 +1732,9 @@ export async function buildPublicWebFrontierTools(input: {
           coverage: "PARTIAL",
           url: preview,
           hits: found.hits,
+          searchScope: found.searchScope,
+          extractedPages: found.extractedPages,
+          pageCount: found.pageCount,
           limits: found.limits,
           mode: webMode(),
         };

```
### `projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index 341d50e1..5c8ba58b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -97,6 +97,59 @@ const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [

 export const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";

+/**
+ * Explicit Pilote authorization of an exact public query (Option B).
+ * Lexical free-form research phrasing does NOT authorize — only these markers.
+ * Patterns (case-insensitive):
+ *   AUTHORIZE_PUBLIC_QUERY: "exact query"
+ *   Autoriser la recherche publique exacte : « exact query »
+ *   Autoriser la recherche publique exacte: "exact query"
+ */
+export function extractPilotAuthorizedExactQueries(pilotText: string): string[] {
+  const text = pilotText || "";
+  if (!text.trim()) return [];
+  const out: string[] = [];
+  const patterns = [
+    /AUTHORIZE_PUBLIC_QUERY\s*:\s*[«"']([^»"']+)[»"']/gi,
+    /Autoriser\s+la\s+recherche\s+publique\s+exacte\s*:\s*[«"']([^»"']+)[»"']/gi,
+  ];
+  for (const re of patterns) {
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      const q = (m[1] || "").replace(/\s+/g, " ").trim();
+      if (q.length >= 3) out.push(q);
+    }
+  }
+  return [...new Set(out)].slice(0, 8);
+}
+
+/**
+ * Stage a Nora-proposed public query for Pilote admission (no egress).
+ * Sanitize + private-marker checks only — never auto-authorizes.
+ */
+export function stageNoraProposedPublicQuery(input: {
+  proposedQuery: string;
+  privateMarkers?: string[];
+}):
+  | { ok: true; query: string; pending: true }
+  | { ok: false; reason: string } {
+  const raw = (input.proposedQuery || "").replace(/\s+/g, " ").trim();
+  if (!raw || raw.length < 3) {
+    return { ok: false, reason: "PROPOSED_QUERY_EMPTY" };
+  }
+  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
+  for (const m of markers) {
+    if (raw.toLowerCase().includes(m.toLowerCase())) {
+      return { ok: false, reason: "PRIVATE_MARKER_IN_PROPOSED_QUERY" };
+    }
+  }
+  const sanitized = sanitizePublicWebQuery(raw);
+  if (!sanitized.ok) {
+    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
+  }
+  return { ok: true, query: sanitized.query, pending: true };
+}
+
 /**
  * Extract public https URL candidates from an explicit Pilote-only string.
  * Parsing only — does not create open authorization.
@@ -300,12 +353,29 @@ export function resolvePublicWebRegistry(input: {
       limits.push(`PILOT_URL_CANDIDATES:${pilotProvidedUrls.length}`);
       limits.push("PILOT_URL_NOT_AUTO_AUTHORIZED");
     }
+    // Option B — explicit exact authorization markers from this-turn Pilote only.
+    const pilotExact = extractPilotAuthorizedExactQueries(input.pilotText);
+    for (const q of pilotExact) {
+      if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
+        limits.push("PILOT_EXACT_SKIP_PRIVATE_MARKER");
+        continue;
+      }
+      const sanitized = sanitizePublicWebQuery(q);
+      if (!sanitized.ok) {
+        limits.push(`PILOT_EXACT_SANITIZE_BLOCKED:${sanitized.blockedReason ?? "BLOCKED"}`);
+        continue;
+      }
+      if (!exact.has(sanitized.query)) {
+        exact.add(sanitized.query);
+        limits.push("PILOT_EXACT_AUTHORIZED");
+      }
+    }
   } else {
     limits.push("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
   }

   // Lexical free-form registration removed (T1.1). Nora must propose via tool;
-  // server admits with admitNoraProposedPublicQuery.
+  // server admits with admitNoraProposedPublicQuery after Pilote exact auth or catalog.
   limits.push("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");

   if (

```
### `projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
index b20a7ccb..d68403e1 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
@@ -86,8 +86,10 @@ export async function extractPdfText(
     };
   }

+  // Copy — pdf.js may transfer/detach the caller's ArrayBuffer.
+  const data = new Uint8Array(input.bytes);
   const loadingTask = pdfjs.getDocument({
-    data: input.bytes,
+    data,
     isEvalSupported: false,
     useSystemFonts: true,
     useWorkerFetch: false,

```
### `projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx`

```diff
commit 8c82b6c18f64af873ea780e692beb816d9d9f36e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 15:42:40 2026 +0100

    fix(next): ML5 integrated documentary and public WEB LIVE qualification

    Close residual WEB/PDF gaps (progressive PDF, session TTL, egress lookup all=true), exercise RoomBooking/IT-06 LIVE, run bounded G-WEB-PUBLIC then force WEB LIVE=0.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
index e5fea7bf..bb3f0514 100644
--- a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
@@ -8,14 +8,42 @@
 import { useEffect, useRef, useState } from "react";

 export type PdfViewerProps = {
-  /** Base64-encoded PDF bytes (authorized). */
-  base64: string;
+  /**
+   * Base64-encoded PDF bytes from an already-authorized Studio path (Git/D4).
+   * Prefer `viewerToken` for WEB sessions so cognitive payloads never carry bytes.
+   */
+  base64?: string;
+  /** Opaque token from public WEB open — fetches bytes via authorized viewer API. */
+  viewerToken?: string;
   title?: string;
   /** 1-based initial page when citing. */
   initialPage?: number;
   className?: string;
 };

+async function resolvePdfBytes(props: PdfViewerProps): Promise<Uint8Array> {
+  if (props.viewerToken?.trim()) {
+    const res = await fetch(
+      `/api/web/pdf-viewer/${encodeURIComponent(props.viewerToken.trim())}`,
+      { credentials: "same-origin", cache: "no-store" },
+    );
+    if (!res.ok) {
+      const err = await res.json().catch(() => ({}));
+      throw new Error(
+        typeof err?.error === "string" ? err.error : `VIEWER_HTTP_${res.status}`,
+      );
+    }
+    return new Uint8Array(await res.arrayBuffer());
+  }
+  if (!props.base64?.trim()) {
+    throw new Error("PDF_SOURCE_MISSING");
+  }
+  const raw = atob(props.base64);
+  const bytes = new Uint8Array(raw.length);
+  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
+  return bytes;
+}
+
 export function PdfViewer(props: PdfViewerProps) {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const [pageCount, setPageCount] = useState(0);
@@ -29,17 +57,25 @@ export function PdfViewer(props: PdfViewerProps) {
     doc: any;
     destroy: () => Promise<void>;
   } | null>(null);
+  const renderGen = useRef(0);
+  const sourceKey = props.viewerToken
+    ? `token:${props.viewerToken}`
+    : `b64:${props.base64?.slice(0, 64) ?? ""}`;

   useEffect(() => {
     let cancelled = false;
+    const gen = ++renderGen.current;
     (async () => {
       try {
         setError(null);
+        setPageCount(0);
         const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
-        // In-process only — never fetch a CDN worker or document-triggered URLs.
-        const raw = atob(props.base64);
-        const bytes = new Uint8Array(raw.length);
-        for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
+        // Local same-origin worker only — never a CDN. Served from /public.
+        if (!pdfjs.GlobalWorkerOptions.workerSrc) {
+          pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
+        }
+        const bytes = await resolvePdfBytes(props);
+        if (cancelled || gen !== renderGen.current) return;
         // In-process parse — useWorkerFetch false avoids CDN/font network from document.
         const loadingTask = pdfjs.getDocument({
           data: bytes,
@@ -49,15 +85,18 @@ export function PdfViewer(props: PdfViewerProps) {
           useWorkerFetch: false,
         });
         const doc = await loadingTask.promise;
-        if (cancelled) {
+        if (cancelled || gen !== renderGen.current) {
           await doc.destroy();
           return;
         }
+        const prev = pdfRef.current;
         pdfRef.current = { doc, destroy: () => doc.destroy() };
+        void prev?.destroy();
         setPageCount(doc.numPages);
-        setPage((p) => Math.min(Math.max(1, p), doc.numPages));
+        const initial = Math.max(1, props.initialPage ?? 1);
+        setPage(Math.min(initial, doc.numPages));
       } catch (e) {
-        if (!cancelled) {
+        if (!cancelled && gen === renderGen.current) {
           setError(String((e as Error)?.message ?? e).slice(0, 200));
         }
       }
@@ -68,7 +107,15 @@ export function PdfViewer(props: PdfViewerProps) {
       pdfRef.current = null;
       void cur?.destroy();
     };
-  }, [props.base64]);
+    // sourceKey captures token/base64 identity; initialPage applied on load.
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [sourceKey]);
+
+  useEffect(() => {
+    if (props.initialPage && pageCount > 0) {
+      setPage(Math.min(Math.max(1, props.initialPage), pageCount));
+    }
+  }, [props.initialPage, pageCount]);

   useEffect(() => {
     const cur = pdfRef.current;
@@ -133,10 +180,11 @@ export function PdfViewer(props: PdfViewerProps) {
           className="git-btn-secondary"
           disabled={page <= 1}
           onClick={() => setPage((p) => Math.max(1, p - 1))}
+          aria-label="Page précédente"
         >
           Précédente
         </button>
-        <span data-testid="pdf-page-indicator">
+        <span data-testid="pdf-page-indicator" aria-live="polite">
           Page {page} / {pageCount || "…"}
         </span>
         <button
@@ -144,6 +192,7 @@ export function PdfViewer(props: PdfViewerProps) {
           className="git-btn-secondary"
           disabled={pageCount > 0 && page >= pageCount}
           onClick={() => setPage((p) => Math.min(pageCount || p + 1, p + 1))}
+          aria-label="Page suivante"
         >
           Suivante
         </button>
@@ -151,14 +200,18 @@ export function PdfViewer(props: PdfViewerProps) {
           type="button"
           className="git-btn-secondary"
           onClick={() => setZoom((z) => Math.max(0.5, Number((z - 0.25).toFixed(2))))}
+          aria-label="Réduire le zoom"
         >
           −
         </button>
-        <span>{Math.round(zoom * 100)}%</span>
+        <span aria-label={`Zoom ${Math.round(zoom * 100)} pour cent`}>
+          {Math.round(zoom * 100)}%
+        </span>
         <button
           type="button"
           className="git-btn-secondary"
           onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
+          aria-label="Augmenter le zoom"
         >
           +
         </button>
@@ -168,14 +221,33 @@ export function PdfViewer(props: PdfViewerProps) {
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           data-testid="pdf-search-input"
+          aria-label="Rechercher dans le PDF"
         />
-        <button type="button" className="git-btn-secondary" onClick={() => void runSearch()}>
+        <button
+          type="button"
+          className="git-btn-secondary"
+          onClick={() => void runSearch()}
+          aria-label="Lancer la recherche"
+        >
           Chercher
         </button>
-        {hitNote ? <span data-testid="pdf-search-hit">{hitNote}</span> : null}
+        {hitNote ? (
+          <span data-testid="pdf-search-hit" role="status">
+            {hitNote}
+          </span>
+        ) : null}
       </div>
       <div className="overflow-auto border border-neutral-200 bg-neutral-50">
-        <canvas ref={canvasRef} data-testid="pdf-canvas" />
+        <canvas
+          ref={canvasRef}
+          data-testid="pdf-canvas"
+          role="img"
+          aria-label={
+            props.title
+              ? `Page ${page} du document ${props.title}`
+              : `Page ${page} du PDF`
+          }
+        />
       </div>
     </div>
   );

```


## 10. Décisions Morris requises

1. Revue ChatGPT du handoff distant
2. Acceptation intégrée ML5 / réserves (Git PDF corpus ; WEB-05 ; FinOps PARTIAL ; arbre rebuild)
3. Conditions G-WEB-MIXED (non ouvrir tant que leak/mixed non instruit)
4. G-RECETTE : seulement après rebuild clean + décisions config RECETTE (politique ≠ DEV expérimental)
5. Terra High : pas d'admission automatique — preuve discriminante insuffisante pour promotion
6. Livraison 2 : non engagée

## 11. Verdict Cursor

**ML5 DOCUMENTARY AND PUBLIC WEB LIVE QUALIFICATION COMPLETED — INTEGRATED ACCEPTANCE REVIEW REQUIRED.**

Statuts maintenus: R5 IN PROGRESS · ML5 OPEN · R6 NOT STARTED · NO RELEASE · NOT ADOPTED · RECETTE protégée · WEB LIVE=0 · G-WEB-MIXED fermé · F2 différée · livraison 2 non engagée.
