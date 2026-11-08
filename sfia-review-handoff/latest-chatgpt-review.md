# SFIA Review Pack FULL — ML4 Git Document Publication BOUNDED REAL E2E

**Date/heure (Europe/Paris) :** 2026-11-09 ~00:25 CET
**Cycle :** DELIV-2026-11-09-ML4-GIT-DOCUMENT-PUBLICATION-BOUNDED-REAL-E2E
**Profil :** CRITICAL · EVOL / QUALIFICATION
**Processus :** SFIA v2.6 · SEF v0.2
**Lane :** DEV — `NO RELEASE` / `0.0.0-dev`
**GO Morris :** Premier E2E publication documentaire REAL sandbox (branche + 1 fichier + 1 PR OPEN ; **pas** de merge)
**Handoff parent :** `ffffec1f82bd5dcdb71460cf5f519789416f6079`
**Verdict candidat :** `ML4 GIT DOCUMENT PUBLICATION — BOUNDED REAL E2E PROVEN — READY FOR CHATGPT CRITICAL REVIEW`

---

## 1. Objectif

Démontrer la chaîne Studio : D4 → inspection → D6 → D7/D9 → commit GitHub réel → PR OPEN → D8, sans merge, sans push Product, via les capacités Studio (pas `git push`/`gh`/`curl` GitHub write).

---

## 2. Local Git Truth Check (Product)

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD Product | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| local `main` ref (stale, non utilisé) | `4b1a0580…` — **documenté**, pas un STOP (HEAD/origin/main alignés) |
| Product commit/push/PR ce cycle | **aucun** |
| Staged | vide |
| Dirty | LOCAL DIRTY préservé (~50 lignes porcelain) |

---

## 3. Git Truth distant sandbox

| Champ | Avant effet | Après effet |
| --- | --- | --- |
| Repo | `mcleland147/chantiers360` | idem |
| main SHA | `8c398c494dd918272aab5b2653777c6c21d2e76e` | **inchangé** `8c398c49…` |
| Branche qualification | absente | `sfia/pub-pub-e2e-2026` @ `790a531579acd1a56243e84bf44a305a22e512d2` |
| Fichier | `docs/studio-next/publication-e2e.md` absent sur main (404) | présent sur branche ; contenu = D4 |
| PR | — | **#18 OPEN** non mergée |

PR URL : `https://github.com/mcleland147/chantiers360/pull/18`

---

## 4. Sources Git / versions

- Template Review Pack FULL : `prompts/templates/sfia-cycle-execution-template.md` §6.16 / §7.3–§7.10
- SEF v0.2 : `projects/sfia-studio-next/governance/SEF.md`
- Contrats construction : `specification-technique.md`, `matrice-acceptation.md`, `contrat-acceptation.md`
- Handoff OAuth READ parent : `ffffec1f…`
- App : `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689`

---

## 5. Git Review Index (exhaustif)

```text
Git Review Index
- base branch : main @ c658f59023d44a0e22448c7ee034e3c1dda292a2
- Product branch : feat/next-git-collaboration-20261108
- HEAD avant / après Product : c658f590… (inchangé)
- Handoff parent : ffffec1f82bd5dcdb71460cf5f519789416f6079
- commits Product créés : 0
- commits handoff : 1 attendu (ff only)
- review pack : full
- Fake/Real applicable : oui
- niveau de preuve déclaré : END-TO-END REAL PROVEN (publication documentaire bornée) + DETERMINISTIC PROVEN (suites)
- realism gaps : merge REAL non autorisé ; UX Figma 227–231 non re-qualifiée pixel ; badge/host réserves
- réserves : correlationKey trunc → branch name `sfia/pub-`+12 ; local main ref stale ; permissions mapping push→write corrigé ce cycle
```

### Fichiers modifiés clés (ce cycle)

| Path | Rôle |
| --- | --- |
| `web/src/domains/integrations/real-github-provider.ts` | Mutations REAL bornées user-token ; merge blocked |
| `web/src/domains/integrations/github-app-auth.ts` | Helpers createRef / createFile / createPR / listPR / getPR |
| `web/src/domains/integrations/github-app-user-oauth.ts` | Map permissions GitHub push/pull → contents/PR levels |
| `web/src/domains/integrations/github-provider.ts` | Comment gate mutations |
| `web/src/components/integrations/PublicationInspectionPanel.tsx` | path défaut + providerMode depuis status |
| `web/src/app/projects/[projectId]/page.tsx` | retire hardcode SCRIPTED |
| `web/vitest.config.ts` / `scripts/e2e-web-server.sh` | isole DET/E2E du REAL opérateur |
| `tests/unit/real-github-mutations-gate.test.ts` | gate mutations |
| docs construction delivery/matrice/spec | AS-IMPLEMENTED |

---

## 6. Contrats D4 / D6 / D7 / D8 / D9 (preuves)

| Domaine | Identifiant | Preuve |
| --- | --- | --- |
| D4 document | `doc_8351c2b1-8a4a-4542-9ab7-ee2c50e57868` | créé via `POST /api/preparations/…/documents` |
| D4 révision | `drev_ce62a84c-5ce6-46c3-a0cd-5d85356d27e9` | AVAILABLE · 506 octets |
| D6 décision | `dec_b93e9bef-18d2-4990-b1e8-6b687e9d3aa5` | authorize après inspection fingerprint |
| D7 tentative | `efx_fcca79b2-91dc-473d-b797-7665f7f93ecf` | COMPLETED · correlation `pub-e2e-20261109001806-retry1` |
| D8 / publication ref | `dpr_f8ac5ff7-1eed-4013-95f4-be2584451dfe` | lie doc/rev → PR 18 |
| D9 | CONNECTED `iauth_37cc71f1…` · user `mcleland147` / `295557155` · install `179935689` | providerMode REAL |

---

## 7. Permissions effectives

Après correction mapping boolean GitHub → levels + `POST /api/integrations/github/refresh` :

```json
{
  "fullName": "mcleland147/chantiers360",
  "permissions": {
    "source": "user_token_observed",
    "contents": "admin",
    "pull_requests": "write"
  }
}
```

Première tentative (`efx_49a6c88c…`) : ACCESS_DENIED `contents unknown` — fail-closed correct avant fix.
Seconde tentative : PASS.

---

## 8. Preflight sécurité (avant mutation réussie)

- Session Studio active sur `127.0.0.1:3100` (cookie lane DEV lié au pilote REAL)
- OAuth D9 CONNECTED + user token valide
- App/install/repo stricts
- `resolveGitHubProvider().mode === "REAL"`
- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`
- Path `docs/studio-next/publication-e2e.md` DOCUMENTARY allowlist
- Fichier absent sur main (404)
- Aucun fallback SCRIPTED pour le dispatch réussi
- Merge toujours hard-blocked dans le provider REAL

---

## 9. Parcours exécuté (Studio APIs = capacités produit)

1. Créer document D4 (préparation liée projet `proj_3be556e5…` « Test 1 »)
2. Attacher repo `arepo_1393b266…` / `mcleland147/chantiers360`
3. Refresh permissions
4. `publications/prepare` → PREPARED · branch `sfia/pub-pub-e2e-2026` · base `8c398c49…` · inspection CREATE
5. `publications/authorize` → AUTHORIZED · D6 `dec_b93e9bef…`
6. `publications/dispatch` → COMPLETED · commit `790a5315…` · PR **18**
7. Redispatch → COMPLETED **idempotent** (pas de 2e effet)
8. Reload projet → document/révision persistés

**Non utilisé pour écrire :** `git push`, `gh`, `curl` mutateurs GitHub.

---

## 10. Contenu D4 / fichier Git (expurgé, non sensible)

Titre : « Publication E2E Studio Next »
Chemin : `docs/studio-next/publication-e2e.md`
`contentMatchesD4: true` (506 octets)

---

## 11. Effets GitHub réellement produits (inlinés)

```json
{
  "verifiedAt": "2026-11-08T23:18:33.061Z",
  "main": {
    "sha": "8c398c494dd918272aab5b2653777c6c21d2e76e",
    "unchanged": true
  },
  "branch": {
    "ref": "refs/heads/sfia/pub-pub-e2e-2026",
    "sha": "790a531579acd1a56243e84bf44a305a22e512d2"
  },
  "pr": {
    "number": 18,
    "state": "open",
    "merged": false,
    "htmlUrl": "https://github.com/mcleland147/chantiers360/pull/18",
    "headRef": "sfia/pub-pub-e2e-2026",
    "baseRef": "main",
    "headSha": "790a531579acd1a56243e84bf44a305a22e512d2",
    "baseSha": "8c398c494dd918272aab5b2653777c6c21d2e76e"
  },
  "file": {
    "path": "docs/studio-next/publication-e2e.md",
    "contentMatchesD4": true
  },
  "attempt": {
    "id": "efx_fcca79b2-91dc-473d-b797-7665f7f93ecf",
    "status": "COMPLETED",
    "decisionId": "dec_b93e9bef-18d2-4990-b1e8-6b687e9d3aa5",
    "correlationKey": "pub-e2e-20261109001806-retry1"
  }
}
```

---

## 12. Diffs utiles (extraits)

### Gate mutations REAL

```ts
export function isBoundedRealMutationAllowed(): boolean {
  const v = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  return v === "documentary" || v === "1" || v === "bounded";
}
```

- `createBranch` / `putFileContents` / `createPullRequest` : user-token only si flag
- `mergePullRequest` : toujours `mutationBlocked`
- Refus écriture sur `main`/`master`

### Permissions map (fix)

Installation repositories GitHub renvoie `permissions.push/pull/admin` booléens → mappés vers `contents`/`pull_requests` (`write`/`admin`/`read`).

### DET isolation

`vitest.config.ts` + `e2e-web-server.sh` forcent `STUDIO_GITHUB_PROVIDER=scripted` et vident `STUDIO_GITHUB_USER_OAUTH` / `STUDIO_GITHUB_ALLOW_MUTATIONS`.

---

## 13. Tests / négatifs

| Suite | Résultat |
| --- | --- |
| tsc | PASS |
| unit | **171 PASS** (31 files) — + gate mutations |
| integration PG | **211 PASS** |
| build | PASS |
| Playwright | **13/13 PASS** |

Négatifs couverts (DET existants + gate) : path code/CI refusés ; mutations absentes sans flag ; merge REAL blocked ; redispatch idempotent ; première tentative permissions unknown → ACCESS_DENIED fail-closed.

Simulations dangereuses non exécutées en REAL (permission revoke, force conflict distant).

---

## 14. Fake/Real Qualification (§6.16)

```text
Fake / Real Qualification
- applicable : oui
- frontières : GitHub App user-to-server write ; REST refs/contents/pulls
- fake/fixture : SCRIPTED provider + E2E :3101 isolé
- REAL correspondante : provider REAL + user token + ALLOW_MUTATIONS=documentary
- parité : prepare/authorize/dispatch → branche + fichier + PR
- différences : merge hors scope ; installation token non utilisé pour write
- realism gaps :
  1. merge REAL — condition fermeture : GO Morris distinct
  2. UX Figma pixel parity 227–231 — convergence globale
  3. browser UI click-path non rejoué bout-en-bout (APIs Studio utilisées ; panel présent)
- niveau entrée : REAL INTERACTIVE READ PROVEN
- niveau ce cycle : END-TO-END REAL PROVEN (borné documentary) + DETERMINISTIC PROVEN
- hors scope : MERGE REAL PROVEN ; ML4 CLOSED ; PRODUCT INTEGRATED ; RECETTE ; STABLE
- claims autorisés : BOUNDED REAL E2E PROVEN ; READY FOR CHATGPT CRITICAL REVIEW
- claims interdits : MERGE REAL PROVEN ; END-TO-END sans borne ; ADOPTED
```

---

## 15. Écarts Figma / UX

Panel `PublicationInspectionPanel` utilisable (prepare/authorize/dispatch). Path défaut aligné sandbox. Fidélité visuelle Figma 227–231 **non** re-mesurée ce cycle — dette convergence UX.

---

## 16. ENV-01 / versioning

DEV only · E2E :3101 isolé · RECETTE non promue · STABLE N/A · `0.0.0-dev` · aucune migration nouvelle (008–012 préservées).

---

## 17. KNOWN GAP / dette / exit

1. Truncation correlationKey → homonymie de branche possible (`slice(0,12)`) — durcir naming.
2. local `main` ref stale vs origin/main.
3. Disconnect local sans revoke remote (gap antérieur).
4. GO merge documentaire REAL = gate Morris futur distinct.

---

## 18. Gates Morris

| Gate | Statut |
| --- | --- |
| Critical Review ChatGPT | **demandé** |
| Merge PR #18 | NON autorisé ici |
| Product Git commit/push/PR | NON autorisé ici |
| ML5 Cursor | hors scope |

---

## 19. Review pack coverage (§7.5)

- réinitialisé : oui
- niveau : **full**
- synthesis only : **no**
- useful diffs : yes
- secrets absents : confirmé (pas de token/code/cookie/AES)
- verdict pack : **complete**

---

## 20. Verdict unique

`ML4 GIT DOCUMENT PUBLICATION — BOUNDED REAL E2E PROVEN — READY FOR CHATGPT CRITICAL REVIEW`
