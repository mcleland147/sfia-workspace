# SFIA Studio Next — Review Pack FULL (CRITICAL)
# Cycle 13 — PR Readiness / Local Integration Candidacy ML4 + Nora

**Date:** 2026-11-10 (Europe/Paris)
**Profil:** CRITICAL — FULL mono-cycle — INTÉGRATION TRANSVERSE
**Publisher:** Cursor (intégration locale only)
**Statut:** NO RELEASE — NO PRODUCT PUSH — NO PR CREATED — READY FOR MORRIS PUSH/PR DECISION

---

## 01. Git Truth Check

| Item | Value |
| --- | --- |
| Integrator branch (local) | integrate/next-ml4-nora-pr-readiness-20261110 |
| Integrator HEAD | 66902a8b02096838415aa7aae78a8f0be2699ccb |
| Integrator tree | da8971c77398b264b3870b13ebc5298e7c111fa1 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| Nora Product tip (preserved) | e40a1baffc5f7060f3cd5456571b9fe4bd7d1819 |
| Fix WT tip (preserved) | d7f1507a56e50660ea24903c2dc563c249ba9086 / tree 3e9e1086 |
| Prior handoff | e5d144a0 blob 13c1dc9d |
| Commits ahead of main | 40 |
| Diff shortstat vs main | 111 files changed, 27200 insertions(+), 88 deletions(-) |
| Outside projects/sfia-studio-next | NONE |
| Product pushed | NO |
| PR created | NO |
| RECETTE mutated | NO |

---

## 02. Sources et décisions

- SEF / roadmap / ENV-01 / versioning / naming (main)
- cadrage-r4.md; conception D1–D9 pertinentes
- Cadrage Nora 10/11 blob 2322644a (désormais dans la candidature)
- Registre RECETTE R01–R14 (fichier inclus)
- delivery-history DEV-01..08 + entrée PR-READINESS
- SFIA v2.6 routing 3315bbae + template f4fdb488

### Décision Morris 10/11/2026 (tracée)

RECETTE ML4 — TERMINÉE AVEC RÉSERVES PAR DÉCISION MORRIS.
R13/R14 — NOT RUN — RÉSERVES REPORTÉES.
Ne transforme pas NOT RUN en PASS.
Ne vaut pas GO de merge / ADOPTED / STABLE / RELEASED.

---

## 03. Intention de ce cycle

Préparer UNE candidature locale intégrée pour PR readiness.
Aucun développement fonctionnel.
Aucune campagne RECETTE.
Aucune correction opportuniste UX.

---

## 04–06. Synthèse d'intégration (A–N)

### A. Travaux déjà mergés sur main

| PR | Contenu | Merge |
| --- | --- | --- |
| #663 | docs ML4/ML5 préparation | d37ea088 (historique) |
| #669 | G4 convergence UX | ebf3d150 |
| #670 | G4 post-merge Pilotage CI | c658f590 |
| #671 | docs ML4 historique + cahier E2E | 6667a438 (= origin/main tip) |

G4 UX est ancêtre de la candidature Nora (ebf3d150 / c658f590 ⊆ HEAD).

### B. Travaux locaux / distants encore candidats (avant consolidation)

| Ref | SHA | Rôle |
| --- | --- | --- |
| feat/next-git-collaboration-20261108 | 51b0c3b6 | ML4 Git Product (distant) |
| fix/next-ml4-chat-first-d4-provenance-20261109 | d7f1507a | base fix WT |
| feat/next-nora-intent-continuity-20261110 | e40a1baf | Nora DEV-01..08 Product local |
| docs/next-nora-intent-continuity-cadrage-20261110 | 69c27832 | cadrage validé |
| docs/next-ml4-recette-utilisateur-20261109 | 2075aa4f | registre R01–R14 |

### C. Commits réellement retenus

Toute la lignée `origin/main..HEAD` (40 commits), notamment:
- ML4 Git collaboration + preuves
- Correctifs ML4 post-RECETTE jusqu'à d7f1507a
- Nora ACCEPT-01 + continuité DEV-01..08 jusqu'à e40a1baf
- 3 merges d'intégration locale (main handbook, cadrage, registre)
- docs delivery-history PR-readiness

Log:

```
66902a8b docs(next): record ML4+Nora local PR-readiness integration candidacy
b8fe9a94 integrate(next): include ML4 RECETTE R01–R14 anomalies register
b299d92f integrate(next): include validated Nora intent continuity cadrage
0af4d5ac integrate(next): merge main docs handbook onto ML4+Nora continuity candidacy
e40a1baf fix(studio-next): bind mission recovery to D2 owner act for the project
833a3e6c fix(studio-next): authorize D2 before mutate and recover mission continuation
3fac229f fix(studio-next): replace session locks with turn fencing and structured D2 binding
f99e4501 fix(studio-next): harden durable mission identity, D2 correlation, and recovery
5c6b0cee feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message
12e26e32 feat(studio-next): global intent continuity across D2/D4 and common D3
f42cb2f5 fix(studio-next): gate Nora mission resume and harden continuity
cf5bac70 fix(studio-next): reflect missionResume after authorize and prove replay
b0e23c46 feat(studio-next): implement ACCEPT-01 mission continuity in D3 nominal path
69c27832 docs(next): capture validated Nora Studio end-to-end intent continuity requirements
2075aa4f docs(next): record ML4 G1 targeted recette retest and Nora/Studio reservation
d7f1507a fix(studio-next): qualify Git FILE_ABSENT and align D4 ACK/provenance
60f6c046 docs(next): finalize ML4 user recette campaign 1, R11-R14 and 22 acceptance criteria
771844fd fix(studio-next): close CREATE_PLEASE_RE cross-clause authority gap
5ed702cb fix(studio-next): harden CREATE clause scoping and prove NOT_EXECUTED on PG path
8eab1317 fix(studio-next): qualify CREATE with complements and restore loyal D4 pre-effect observability
63838773 docs(next): consolider résultats ML4 R06-H à R10 et arbitrage responsive UX
93da44be fix(studio-next): isolate illustrative fences from contractual sfia-document proposals
0b02de41 fix(studio-next): harden sfia-document fence scanning against nested code
9694cc71 fix(studio-next): integrate A+B+D chat-first document proposal boundary
81fe9672 docs(ml4): trace R06-G LIVE section scope refusal and preserve prior retests
8ba77730 fix(studio-next): resolve numbered D4 section targeting and Nora ACK truth
9db2ae2a docs(ml4): trace R06 retest live section resolution failure
a2c5e9f8 fix(studio-next): resolve quoted D4 titles and sole applicative revise verdict
1fedb9ff fix(studio-next): harden chat-first D4 intent, section integrity, and ACK coherence
f1b49e20 fix(studio-next): chat-first D4 create/revise ACK and Git blob/commit provenance
8b3e24de docs(ml4): confirm R06 chat-first failure in follow-up D4 UI evidence
fb69f2e1 docs(ml4): record R06 chat-first D4 revision failure and UI truth gap
9dffb553 docs(ml4): record R05 source authority boundary and repeat blob-SHA defect
72cc3809 docs(ml4): requalify R04 provenance and propose direct GitHub source access
c21b646a docs(ml4): record R04 source-read result and Git provenance defect
63b091e2 docs(ml4): record user recette R01-R03 findings and open reserves
974b0030 fix(studio-next): bind GitHub App identity to STUDIO_LANE for RECETTE
51b0c3b6 fix(studio-next): bind publication reconciliation to effect provider provenance
d4f158ce fix(studio-next): enforce documentary publication proof invariants
79b10052 feat(studio-next): add governed Git collaboration and document publishing
```

### D. Branches doublonnées / devenues sans objet comme tête PR unique

- feat/next-git-collaboration-20261108 — ancêtre; ne pas pousser séparément
- feat/next-nora-intent-continuity-20261110 @ e40a1baf — tip Product préservé; contenu inclus; tête PR proposée = integrator
- docs branches cadrage / registre — contenu inclus; branches distantes peuvent rester jusqu'au GO Morris de suppression (non fait ici)

### E. SHA/tree candidature locale

- Branch: integrate/next-ml4-nora-pr-readiness-20261110
- HEAD: 66902a8b02096838415aa7aae78a8f0be2699ccb
- tree: da8971c77398b264b3870b13ebc5298e7c111fa1

### F. Diff contre main

111 files changed, 27200 insertions(+), 88 deletions(-)
Périmètre: projects/sfia-studio-next/ uniquement (hors Next: NONE).
Migrations ajoutées vs main:

```
projects/sfia-studio-next/web/src/db/migrations/008_git_collaboration.sql
projects/sfia-studio-next/web/src/db/migrations/009_publication_ref_attempt_unique.sql
projects/sfia-studio-next/web/src/db/migrations/010_github_app_user_oauth.sql
projects/sfia-studio-next/web/src/db/migrations/011_oauth_session_binding.sql
projects/sfia-studio-next/web/src/db/migrations/012_auth_concurrency_safety.sql
```

### G. Migrations et compatibilité

008_git_collaboration.sql
009_publication_ref_attempt_unique.sql
010_github_app_user_oauth.sql
011_oauth_session_binding.sql
012_auth_concurrency_safety.sql

Ordre numérique conservé. Aucune migration nouvelle ce cycle.
RECETTE build existant ne doit pas être muté par ce lot.
Risque post-merge: appliquer 008–012 sur lanes DEV/RECETTE selon ENV-01 (hors mandat ici).

### H. Tests exécutés sur la candidature

| Suite | Résultat | Lane |
| --- | --- | --- |
| unit intent-conduction + mission-continuity | 15 PASS | — |
| PG intent-continuity-global | 21 PASS | DEV :5433 |
| PG ACCEPT-01 | 8 PASS | DEV :5433 |
| tsc --noEmit | PASS | — |
| next build | PASS | — |

Niveau: DEV DETERMINISTIC / fixture. NOT LIVE. NOT REAL. NOT RECETTE campaign.

### I. Réserves acceptées / tests non exécutés (Morris)

- R13 / R14: NOT RUN — réserves reportées
- Autres écarts ML4 documentés dans recette-ml4-r01-r14-anomalies.md conservent leur statut réel (PARTIAL, OPEN, SERVER NOT RUN, etc.)
- Nora continuity: réalisation DEV bornée (fixtures / SCRIPTED) — pas RECETTE acceptée
- Interprojet Nora read: N/A non implémenté (DEV-08)
- Responsive UX mineurs: report convergence UX

### J. Réserves éventuellement bloquantes pour merge

Aucune réserve d'intégration structurelle (conflits résolus; merge-tree clean; hors Next vide).
Bloquants métier/REAL (R13/R14, Git REAL, ML4-AT-13 merge REAL) restent **hors GO merge** et doivent être assumés comme réserves portées — Morris a déjà clos la campagne avec ces réserves.
CI GitHub sur la future PR: non exécutée ici (pas de push).

### K. Proposition de PR unique

Titre proposé:
`feat(next): integrate ML4 Git + Nora intent continuity (PR readiness)`

Base: main @ 6667a438
Head: integrate/next-ml4-nora-pr-readiness-20261110 @ 66902a8b02096838415aa7aae78a8f0be2699ccb (après push Morris)

Contenu: ML4 Git/intégrations + correctifs chat-first D4 + Nora continuity DEV-08 + cadrage + registre RECETTE + handbook déjà sur main via merge.

### L. Conditions restantes pour GO Morris PR/merge

1. Review ChatGPT de ce pack / handoff
2. GO Morris push de la branche integrator
3. GO Morris création PR
4. CI verte sur PR
5. GO Morris merge explicite
6. Plan migration 008–012 sur environnements cibles
7. Ne pas déclarer ML4 ACCEPTED / ADOPTED / STABLE du seul fait du merge

### M. Rollback et contrôles post-merge

- Avant merge: revert/reset branche integrator locale
- Après merge: revert merge commit; migrations down selon runbook ENV-01 si appliquées
- Post-merge: smoke DEV; ne pas déployer RECETTE sans GO; vérifier absence de secrets

### N. Préparation convergence UX

Écarts UX non bloquants (responsive, surfaces) reportés — ne pas les rouvrir ici.
Candidature n'ajoute pas de chantier UX.
Convergence UX peut partir de main+cette candidature après merge.

---

## 07. Architecture / chemins

Conducteur D3 unique préservé; owners D1–D9 inchangés dans leur contrat.
Pas de second moteur Nora.
Pas de nouvelle table ce cycle.

---

## 08–11. Fake/Real / ENV / Versioning

DEV :5433; E2E :3101 available but not re-run this cycle (prior Atlas 2 PASS @ DEV-08).
RECETTE :5434 / build 8vZjme4-KnnPkAqm_QxMz — non muté.
Nora FAKE / Git SCRIPTED in tests.
EVOL / MINOR CANDIDATE; NO RELEASE; STABLE NOT AVAILABLE.

---

## 12. Matrice décision → statut

| Exigence | Statut candidature |
| --- | --- |
| ML4 Product non mergé intégré | OUI (dans HEAD) |
| Nora DEV-08 intégré | OUI |
| Cadrage validé inclus | OUI |
| Registre RECETTE inclus | OUI |
| R13/R14 PASS | NON — NOT RUN carried |
| RECETTE ACCEPTED | NON |
| PR créée | NON |
| Merge | NON |
| STABLE/RELEASED/ADOPTED | NON |

---

## 13. Fichiers créés ce cycle

Aucun fichier Product fonctionnel nouveau.
Merges docs: cadrage + registre + handbook (via main) + delivery-history entry.

---

## 14. Fichiers modifiés ce cycle

projects/sfia-studio-next/construction/delivery-history.md — entrée PR-READINESS uniquement.

Autres fichiers de la candidature vs main = lignée Product déjà construite (DEV-01..08 / ML4), non re-développés ici.

---

## 15. Dette / exit / rollback

Exit: handoff L3 + STOP; attendre Morris pour push/PR/merge.
Rollback integrator: rester sur feat/next-nora @ e40a1baf; supprimer branche integrate locale si besoin.
Ne pas supprimer branches distantes sans GO.

---

## 16. Verdict unique

**NEXT ML4 + NORA CONTINUITY — LOCAL INTEGRATION CANDIDATE CONSOLIDATED — RECETTE CLOSED BY MORRIS WITH CARRIED RESERVES — PR READINESS VERIFIED — READY FOR MORRIS PUSH/PR DECISION — NO PRODUCT PROMOTION.**

---

## 17. Git Review Index

| Ref | Value |
| --- | --- |
| Integrator HEAD | 66902a8b02096838415aa7aae78a8f0be2699ccb |
| Integrator tree | da8971c77398b264b3870b13ebc5298e7c111fa1 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| Nora tip | e40a1baffc5f7060f3cd5456571b9fe4bd7d1819 |
| Fix WT | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| Prior handoff | e5d144a0 / 13c1dc9d |
| Cadrage | 69c27832 |
| Registre | 2075aa4f |

---

## 18. Contrôle §7.2.1 / §7.6

FULL OUI; inventaire A–N OUI; Fake/Real OUI; pas de claim LIVE/REAL/RECETTE ACCEPTED/STABLE/RELEASED/ADOPTED; handoff L3; Product push NON; PR NON; merge NON; STOP après handoff OUI.
