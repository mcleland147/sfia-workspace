# E08 — Matrice de couverture A/B/S (non normative)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Cycle | Finalisation technique / préflight RECETTE |
| Source oracles | `contrat-architecture-et-acceptation-candidat.md` §11 (définitions **non modifiées**) |
| Base Git | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Candidate SHA | **NOT AVAILABLE** (worktree non figé) |
| G5 / revue visuelle | **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT** · **G5 NOT PROVEN** |
| Nature | Couverture & preuves — **pas** un registre de statut projet |

**Statuts autorisés :** `COVERAGE VERIFIED` · `BEHAVIOR PROVEN` · `PARTIAL` · `NOT PROVEN` · `BLOCKED` · `N/A` motivé.

**Légende preuve :** DET = unit/fixture · PG = PostgreSQL · BR = navigateur SCRIPTED · LIVE = Nora LIVE · REAL = GitHub REAL · HIST = résultat historique rapporté (non relancé ce cycle).

---

## Synthèse 41/41

| Métrique | Valeur |
| --- | --- |
| Qualifiés | **41/41** |
| BEHAVIOR PROVEN | **12** (frontière DET/unit/PG indiquée par ligne — **≠** E2E REAL) |
| COVERAGE VERIFIED | **17** |
| PARTIAL | **10** (incl. S01 freeze sans cutover) |
| NOT PROVEN | **2** (A15 G5 · B05 REAL WRITE) |
| BLOCKED | 0 |
| N/A | 0 |
| Domaine A (15) | 4 BEHAVIOR · 6 COVERAGE · 4 PARTIAL · 1 NOT PROVEN |
| Domaine B (16) | 6 BEHAVIOR · 6 COVERAGE · 3 PARTIAL · 1 NOT PROVEN |
| Domaine S (10) | 2 BEHAVIOR · 5 COVERAGE · 3 PARTIAL · 0 NOT PROVEN |
| Totaux recalculés | 12 + 17 + 10 + 2 = **41** (lignes A/B/S ; oracles §11 inchangés) |
| Réserves bloquantes GO cutover RECETTE | GO SHA-specific · REAL WRITE/MERGE NOT PROVEN |
| Réserves non bloquantes | G5 différé Morris UAT · Nora LIVE · Playwright étendu · REAL READ |

---

## A01–A15 — Consultation Git / parcours Pilote

| ID | Attendu (oracle contractuel) | Owner | Implementation | Test | Oracle exact | Exécuté ce cycle | Preuve | Niveau | Écart / réserve | Prochain gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A01 | Sans Git : Travail/Nora/Docs OK | D2/D4 | Surfaces projet sans lien Git | e2e Travail/Nora existants | Pas de hard-fail sans dépôt | HIST + code path | suite E05/E08 surface | COVERAGE VERIFIED | Pas de re-run navigateur dédié A01 ce cycle | Smoke RECETTE |
| A02 | Connexion : seuls repos autorisés | D9 | `github-app-config` allowlist · `listInstallationRepositories` | `github-app-allowed-repos.test.ts` · REAL-shaped auth | Allowlist owner-bound, pas allow-all | DET PASS (historique + code) | unit allowlist | COVERAGE VERIFIED | REAL READ boundary non rejoué | Préflight REAL READ sandbox |
| A03 | 2 dépôts ; autre projet isolé | D9/PG | `projectGitLinks` · attach | `git-collaboration.pg` | Liens projet-scoped | HIST PG | pg git-collaboration | COVERAGE VERIFIED | — | Rejoué RECETTE |
| A04 | 3e dépôt autorisé ; pas d’asso globale | D9/PG | attach/list | pg + unit allowlist | 3e attach scoped | HIST | pg | COVERAGE VERIFIED | — | RECETTE |
| A05 | Retrait : 0 effet GitHub ; hist. conservé | D9/D8 | detach local | pg git-collaboration | Pas d’appel delete remote | HIST DET | pg + code | COVERAGE VERIFIED | Check REAL « no remote delete » NOT PROVEN | REAL sandbox observation |
| A06 | Change repo : requalif ; stale neutralisé | UI/API | `GitRepositoriesSurface` gen/context | e2e `ensemble08-git-surface` | Stale response ignored | PARTIAL BR HIST | e2e surface | PARTIAL | Couverture e2e partielle | Playwright RECETTE |
| A07 | main vs branche non mergée | D9 | `listGitFile` + ref | pg provenance · unit | Contenu/sha distincts | HIST PG/DET | ml4 provenance pg | PARTIAL | REAL branch content NOT PROVEN | REAL READ |
| A08 | Tree à la demande, pas clone | D9 | `listGitDirectory` / tree route | `git-directory-listing.test.ts` | Bound + no clone | DET PASS (code) | unit directory | BEHAVIOR PROVEN | REAL tree NOT PROVEN | REAL READ |
| A09 | MD OK ; binaire/taille gérés | D9/UI | resource-service binary guards | unit path/content | Non rendu MD pour binaire | DET | unit + surface | BEHAVIOR PROVEN | — | RECETTE spot-check |
| A10 | Infos/GitHub/agrandir ; 30/70 | UI/Figma | `GitRepositoriesSurface` | L2 Figma HIST · G5 deferred | Layout conforme Figma | VISUAL DEFERRED | code + L2 hist | PARTIAL | **G5 NOT PROVEN** · **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT** | Morris UAT RECETTE |
| A11 | Lien commit vérifié → version lue | D8/D9 | provenance `commitShaVerified` | `git-file-provenance.test.ts` | URL sur SHA vérifié | DET PASS | unit provenance | BEHAVIOR PROVEN | REAL permalink NOT PROVEN | REAL READ |
| A12 | Pubs 2 dépôts, liste projet | D8 | `publication-projection` | `project-publications-projection.test.ts` | Transverse projet | DET PASS | unit projection | BEHAVIOR PROVEN | REAL multi-repo pubs NOT PROVEN | REAL sandbox |
| A13 | Déconnexion : refus nouveaux accès | D9 | disconnect + confirm UI | e2e surface HIST | Auth revoked local | PARTIAL BR | e2e | PARTIAL | — | RECETTE |
| A14 | Ref absente / refus / ambigu honnêtes | D9 | typed StudioError | unit + pg | Codes typés, pas inventé | DET | unit/pg | COVERAGE VERIFIED | REAL 404/403 path NOT PROVEN | REAL READ |
| A15 | Desktop/mobile + focus clavier | UI/Figma | surface responsive | Playwright G5 captures HIST | Fonctionnel + a11y | PARTIAL · G5 deferred | e2e G5 1/1 hist | NOT PROVEN | **G5 NOT PROVEN** · **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT** | Morris UAT + a11y |

---

## B01–B16 — Nora / autorité / publication / merge

| ID | Attendu | Owner | Implementation | Test | Oracle exact | Exécuté | Preuve | Niveau | Écart | Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B01 | Publie univoque → pas 2e bouton D6 | D3/D6 | publication authority + qual | `conversation-publication-authority.test.ts` | Mandat proportionné | DET PASS | unit | BEHAVIOR PROVEN | LIVE sémantique NOT PROVEN | Nora LIVE borné |
| B02 | 2 repos ambigus → clarif, 0 effet | D3 | ambiguity guards | publication authority unit | Clarification only | DET | unit | COVERAGE VERIFIED | LIVE | LIVE |
| B03 | Négation → 0 autorisation / 0 effet | D3/D6 | merge/pub guards | merge-authority + pg merge-security | Zéro prepare | DET+PG PASS hist | unit/pg | BEHAVIOR PROVEN | — | — |
| B04 | D4→D7→restitution Nora | D3/D4/D7 | mission continuity | mission-continuity tests | Message terminal fidèle | HIST DET/PG | mission-continuity | COVERAGE VERIFIED | LIVE restitution | LIVE |
| B05 | Branche/commit/PR REAL observés | D7/D9/D8 | real provider mutations | REAL gate tests (DET) | Effet distant réel | **NOT PROVEN** | — | NOT PROVEN | WRITE hors mandat | GO sandbox REAL |
| B06 | Publie ≠ merge | D6/D7 | separate merge mandate | publication + merge guards | Aucun merge sur publie | DET+PG | unit/pg | BEHAVIOR PROVEN | REAL confirm NOT PROVEN | REAL |
| B07 | Merge PR doc X → D6 merge distinct | D6/D7 | `admitConversationalMergeMandate` | conversation-merge-* | HumanDecision merge | DET+PG PASS | unit/pg | BEHAVIOR PROVEN | REAL merge NOT PROVEN | REAL WRITE GO |
| B08 | PR externe hors périmètre | D6/D7 | eligibility checks | merge-authority unit | Refus/limitation | DET | unit | COVERAGE VERIFIED | — | RECETTE |
| B09 | Drift fingerprint → requalif | D7 | fingerprint / stale | unit + pg | Pas d’effet hors mandat | DET | unit | COVERAGE VERIFIED | REAL drift | REAL |
| B10 | ACK perdu → réconciliation | D7/D9 | ScriptedFault lost_ack | publication-steps / scripted | Pas de doublon | DET SCRIPTED | unit | PARTIAL | REAL ACK NOT PROVEN | REAL fault inj. |
| B11 | D7 fini avant restitution → message fidèle | D3 | mission continuity | mission-continuity | Terminal message | HIST | PG/unit | COVERAGE VERIFIED | LIVE | LIVE |
| B12 | Isolation sessions/projets | D6/auth | project gates | pg | Pas de fuite | HIST PG | pg | COVERAGE VERIFIED | — | RECETTE |
| B13 | README hostile → pas HumanDecision | D3/D6 | path/content ≠ mandate | unit guards | 0 HD depuis contenu repo | DET | unit | BEHAVIOR PROVEN | LIVE hostile | LIVE |
| B14 | Refus GitHub → Nora « refusé » + cause | D3/D9 | error mapping | SCRIPTED 403/409 | Cause remontée | PARTIAL SCRIPTED | scripted | PARTIAL | REAL protected branch NOT PROVEN | REAL |
| B15 | Multi-intention / reformulations | D3 | durable qual SEM | semantic + fixture qual | Même intention qualifiée | DET fixture | unit semantic | PARTIAL | **Nora LIVE NOT PROVEN** | LIVE corpus |
| B16 | Restart mission → reprise bornée | D7/D3 | mission continuity | mission-continuity PG | Pas de statut inventé | HIST PG | pg | BEHAVIOR PROVEN | Browser reconnect | RECETTE |

---

## S01–S10 — Sécurité / exploitation / preuves

| ID | Attendu | Owner | Implementation | Test | Oracle | Exécuté | Preuve | Niveau | Écart | Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01 | Préflight ENV-01 figé SHA/build | Delivery | `env01-recette-preflight.md` + freeze commit | review pack / git | Candidate SHA + BUILD_ID + manifeste cutover prêts ; runtime RECETTE encore E07 jusqu’au GO | Freeze cycle | git + preflight | PARTIAL | Cutover non exécuté — GO SHA-specific requis | GO Morris cutover |
| S02 | App multi-dépôts : droit+lien+identité | D9 | allowlist + gateRead | allowed-repos + pg | Triple contrainte | DET+PG | unit/pg | COVERAGE VERIFIED | REAL install check | REAL READ |
| S03 | Révocation entre inspect/dispatch → 0 effet | D7/D9 | gates re-check | merge-security / collab | Zéro effet | DET/PG hist | pg | COVERAGE VERIFIED | REAL revoke timing | REAL |
| S04 | Merge REAL seulement PR éligible | D7/D9 | merge guards + SHA | `merge-pull-request-sha.test.ts` | SHA observé, pas admin implicite | DET | unit | BEHAVIOR PROVEN | REAL merge NOT PROVEN | REAL WRITE GO |
| S05 | Secrets absents UI/logs/pack | Ops | pack scrub + code | handoff publish checks | Aucun token | Pack review | publish script | COVERAGE VERIFIED | Audit log runtime | RECETTE |
| S06 | Refus mutation code/CI via ML4 | D6/path | `path-policy` / classify | `path-policy.test.ts` | Paths doc only | DET PASS | unit | BEHAVIOR PROVEN | — | — |
| S07 | SCRIPTED ≠ REAL ; meta provider | Delivery | provider resolve + notes | REAL gate + surface | Meta explicite | DET | code/tests | COVERAGE VERIFIED | — | RECETTE banner |
| S08 | Faute → UNKNOWN + recon | D7 | fault registry | scripted faults | UNKNOWN before retry | DET SCRIPTED | unit | PARTIAL | REAL network fault | REAL |
| S09 | CI/lint/build/types/tests + non-régression | Delivery | local suites | tsc/unit/pg/e2e | PASS datés | Ce cycle (voir pack) | local runs | PARTIAL | Full CI remote NOT RUN | CI on freeze |
| S10 | Docs/as-built/revue sync, pas ADOPTED | Delivery | as-built · history · pack | review | Sync · NO RELEASE | Ce cycle | docs | COVERAGE VERIFIED | — | Morris revue |

---

## Fake / Real (ce cycle)

| Frontière | Niveau |
| --- | --- |
| Fixtures / unit DET | DETERMINISTIC PROVEN (S03 refs, authority, path, pubs) |
| PostgreSQL | DETERMINISTIC/INTEGRATION — suites existantes ; rejoue ciblée ce cycle si dispo |
| Navigateur SCRIPTED | PARTIAL (e2e E08 surface historique) |
| Nora LIVE | **NOT PROVEN** — pas de budget/clé LIVE exercé ce cycle ; gate : test sémantique borné DEV |
| GitHub REAL READ | **NOT PROVEN** ce cycle (préflight protocole seulement) |
| GitHub REAL WRITE/MERGE | **NOT PROVEN** — **NON AUTORISÉ** par mandat |
| END-TO-END REAL | **NOT PROVEN** |
| G5 Figma | **NOT PROVEN** — différé RECETTE Morris |

---

## Notes d’emploi RECETTE

1. Ne pas traiter `COVERAGE VERIFIED` comme acceptation Pilote.
2. Lignes REAL/LIVE restent `NOT PROVEN` / `PARTIAL` jusqu’à exercice sandbox + GO.
3. A10/A15 : conformité visuelle explicitement hors preuve DEV ce cycle.
4. Matrice à rafraîchir après freeze candidate (SHA/build) sans changer les oracles §11.
