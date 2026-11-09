# SFIA STUDIO NEXT — R5 / ML4
# REVIEW PACK FULL — PUBLICATION DES DEUX CORRECTIFS PRODUCT

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 03:32 CET |
| GO Morris | CRITICAL — Push fast-forward des deux commits correctifs exacts déjà committés |
| Processus | SFIA v2.6 |
| Cycle | 7 — INTÉGRATION / DEVOPS |
| Profil | CRITICAL |
| Typologie | INC / INTÉGRATION |
| Version | 0.0.0-dev / NO RELEASE |
| Autorisé | Push Product FF + vérif distante + Review Pack + L3 |
| Interdit | Nouveau code Product · amend/rebase/force · PR/merge · REAL mutation · RECETTE · ADOPTED |

## 2. Git Truth local avant / après

### Avant push
| Item | Valeur | Check |
|---|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` | OK |
| Branche | `feat/next-git-collaboration-20261108` | OK |
| HEAD local | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` | OK |
| Tree | `cdbd7e3763b835db5a58458191d4fb648d184fa0` | OK |
| Parent | `d4f158ce…` → `79b10052…` | OK |
| Product distant | `79b10052…` | OK |
| origin/main | `c658f590…` | OK |
| L3 tip | `120bf24a…` | OK |
| Unpushed | exactement 2 commits | OK |
| Dirty hors Product | `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, qualify script | exclus / préservés |

### Après push
| Item | Valeur | Check |
|---|---|---|
| Product distant HEAD | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` | OK |
| Tree distant | `cdbd7e3763b835db5a58458191d4fb648d184fa0` | OK |
| Parents | `d4f158ce4abe793706d005fc7fafdfe365d2c207` → `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` | OK |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` | INCHANGÉ |
| Unpushed | 0 | OK |
| PR Product | aucune (`gh pr list` = `[]`) | OK |

## 3. Sources Git / refs

- SFIA v2.6 routing + cycle template (mandat)
- governance SEF/roadmap/ENV/versioning/naming + décision ML4 — non mutés ce cycle
- construction/conception/ux ML4
- Handoffs L3 : `120bf24a` (REC-01) et antérieurs d'intégrité
- Tip Product distant désormais = tip local précédent

## 4. Git Review Index (cumul 79b10052…51b0c3b6)

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
M	projects/sfia-studio-next/construction/integration-git/specification-technique.md
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
M	projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
M	projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
M	projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
A	projects/sfia-studio-next/web/src/domains/execution/publication-steps.ts
M	projects/sfia-studio-next/web/src/domains/execution/types.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
M	projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-steps.test.ts
```

```
.../construction/delivery-history.md               |   29 +
 .../integration-git/matrice-acceptation.md         |   38 +-
 .../integration-git/specification-technique.md     |   12 +-
 .../[projectId]/git/publications/prepare/route.ts  |    2 +-
 .../integrations/PublicationInspectionPanel.tsx    |   35 +-
 .../web/src/domains/execution/effect-service.ts    |  201 +++-
 .../web/src/domains/execution/fingerprint.ts       |   48 +-
 .../web/src/domains/execution/publication-steps.ts |  123 +++
 .../web/src/domains/execution/types.ts             |    5 +
 .../src/domains/integrations/github-provider.ts    |   13 +-
 .../tests/integration/git-collaboration.pg.test.ts | 1029 +++++++++++++++++++-
 .../web/tests/unit/publication-steps.test.ts       |  190 ++++
 12 files changed, 1665 insertions(+), 60 deletions(-)
```

Chaîne :
```
51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b d4f158ce4abe793706d005fc7fafdfe365d2c207 cdbd7e3763b835db5a58458191d4fb648d184fa0 fix(studio-next): bind publication reconciliation to effect provider provenance
d4f158ce4abe793706d005fc7fafdfe365d2c207 79b100527a9c43fb789ca62b7f87b50a8bc2adf1 d1cb657036139219f9f3e86d4381facfccc5bc01 fix(studio-next): enforce documentary publication proof invariants
```

## 5–6. Contrôle des deux commits / parent / tree / périmètre

| Commit | Parent | Tree | Objet |
|---|---|---|---|
| `d4f158ce…` | `79b10052…` | `d1cb6570…` | Intégrité steps + preuve D8 + provenance prepare |
| `51b0c3b6…` | `d4f158ce…` | `cdbd7e37…` | ML4-REC-01 reconcile bound to provider mode |

Périmètre : 12 fichiers Product (execution/integrations/UI/tests/docs construction). Aucune migration. Aucune governance. Aucun secret.

## 7. Audit secret / exclusions

- Scan contenu tip des 12 chemins : **aucun** PEM / github_pat / ghp_
- Chemins interdits absents : `.env*`, `.tmp*`, qualify script, migrations, governance/decisions, method/, prompts/
- Artefacts locaux dirty **non poussés**

## 8. Vérifications D7/D8 / provenance (référence tip distant)

A. Publication (`d4f158ce` + tip) :
- `NOMINAL_PUBLICATION_STEPS` unique
- reject `steps=[]/null/invalid`
- `assertPublicationEffectProof` avant COMPLETED/D8
- `commitSha ≠ baseSha`
- marker PR contrôlé (acquis préservés)

B. Réconciliation (`51b0c3b6`) :
- `qualifyPlanEffectProviderMode` + live mode **avant** provider
- mismatch → REQUIRES_REQUALIFICATION
- UNKNOWN fail-closed
- claim actif READ-ONLY
- COMPLETED historique non réécrit

C. Limites :
- R1–R8 conservés ; **ML4-REC-01** distinct
- mono-repo REAL sandbox only
- merge REAL hard-blocked
- pas de nouveau provider / permission / migration

## 9. Provenance des suites de tests

Suites rapportées sur tree local final `cdbd7e37` **avant** ce push (cycles correctifs) :

| Suite | Résultat | Lien tree |
|---|---|---|
| tsc | PASS | tip local = tree final |
| unit | **200** PASS | tip local |
| integration PG SCRIPTED | **237** PASS | tip local |
| build | PASS | tip local |
| Playwright SCRIPTED | **13/13** PASS | tip local |

Ce cycle (INTÉGRATION / push) : **pas de re-exécution** des suites (aucun fichier source modifié). Ces résultats ne deviennent pas preuve CI distante.

REAL mutation : **NOT RUN** ce cycle.

## 10. Push

```
git push origin 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b:refs/heads/feat/next-git-collaboration-20261108
```

Résultat : `79b10052..51b0c3b6` → `feat/next-git-collaboration-20261108` · EXIT 0 · fast-forward · 2 commits.

Aucun `--force` / amend / rebase / tags / main.

## 11–12. Vérification distante SHA / tree / parents

| Contrôle | Attendu | Observé |
|---|---|---|
| HEAD | `51b0c3b6…` | OK |
| Tree | `cdbd7e37…` | OK |
| Parent | `d4f158ce…` | OK |
| Grand-parent | `79b10052…` | OK |
| Commits accessibles | 2 | OK |
| Spot-check `publication-steps.ts` / `effect-service.ts` | présents | OK |
| Diff tip local vs remote | vide | OK |

## 13. main inchangé

`origin/main` = `c658f59023d44a0e22448c7ee034e3c1dda292a2` (= `c658f590…`) — **OK**.

## 14. PR Product absente

`gh pr list --head feat/next-git-collaboration-20261108` → `[]`.

Aucun merge.

## 15. Matrice de readiness fonctionnelle ML4

Synthèse à partir des preuves **déjà disponibles** (DET + REAL borné historique). USER E2E navigateur = **NOT RUN / Morris RECETTE**.

Légende niveaux : IMPLEMENTED · COVERAGE VERIFIED (DET) · BEHAVIOR PROVEN (niveau indiqué) · NOT RUN · LIMITATION.

### A. Studio sans Git obligatoire
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Projet/Nora sans repo | IMPLEMENTED + COVERAGE VERIFIED | AT-01 DET PASS |
| USER E2E navigateur | NOT RUN | RECETTE Morris |

### B. Connexion GitHub volontaire / identité distincte
| Critère | Niveau | Preuve / limite |
|---|---|---|
| OAuth Studio ≠ App/repo scopes | IMPLEMENTED + COVERAGE VERIFIED | AT-02 DET contrat |
| Intégrations authorize/complete | IMPLEMENTED + COVERAGE VERIFIED | AT-03 DET ; UI SCRIPTED |
| OAuth READ REAL | BEHAVIOR PROVEN (READ REAL) | historique CONNECTED + user-token READ |
| Consentement navigateur USER E2E | NOT RUN | RECETTE |

### C. Installations / dépôts sélectionnés
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Attach / refresh / detach | IMPLEMENTED + COVERAGE VERIFIED | AT-04/07 DET |
| Org pending / multi-identité | LIMITATION | AT-06 DET service ; Org REAL NOT PROVEN |
| Multi-repo REAL | LIMITATION / NOT PROVEN | allowlists sandbox `chantiers360` |

### D. Consultation Git depuis Nora
| Critère | Niveau | Preuve / limite |
|---|---|---|
| readGitFile ref+SHA (DET) | IMPLEMENTED + COVERAGE VERIFIED | AT-08 DET |
| Nora LIVE lecture REAL | NOT RUN | hors ce cycle |
| Hostile README sans écriture auto | COVERAGE VERIFIED | AT-09 DET |

### E. Document D4 / révisions
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Save / AVAILABLE / publicationRef link | IMPLEMENTED + COVERAGE VERIFIED | AT-10 DET |
| USER E2E doc flow | NOT RUN | RECETTE |

### F. Inspection diff + mandat D6
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Inspection + authorize + effect_conditions | IMPLEMENTED + COVERAGE VERIFIED | DET + correctifs |
| Geste HumanDecision UI observé | NOT RUN | RECETTE Morris |
| Révocation D6 bloque effet | COVERAGE VERIFIED | T18 / AT-22 DET |

### G. Publication branche/commit/PR + D8
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Séquence nominale DET | IMPLEMENTED + COVERAGE VERIFIED | AT-11/12 ; T12 |
| Intégrité anti fausse-complétion | COVERAGE VERIFIED | d4f158ce T01–T20 |
| Documentary REAL borné | BEHAVIOR PROVEN (mono-repo) | commit `790a5315…` + PR #18 OPEN historique |
| Merge documentaire | IMPLEMENTED DET ; Merge REAL NOT PROVEN | AT-13 DET ; hard-blocked REAL |
| Path policy hors docs | COVERAGE VERIFIED | AT-17 DET |

### H. Reprise / réconciliation / isolation
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Timeout / lost ACK / double dispatch | COVERAGE VERIFIED | AT-15 ; T13/T14 ; REC-10 |
| Provider provenance reconcile | COVERAGE VERIFIED | ML4-REC-01 REC-01…10 |
| Isolation multi-Pilotes | COVERAGE VERIFIED | AT-16 DET |
| Stale HEAD requal | COVERAGE VERIFIED | AT-14 DET |

### I. UX / responsive / Figma
| Critère | Niveau | Preuve / limite |
|---|---|---|
| Figma 218–235 VALIDATED SPEC | référence design | non = preuve runtime |
| Labels REAL/SCRIPTED (R7) | IMPLEMENTED | correctif gel |
| Responsive/a11y exhaustif | PARTIAL / NOT RUN | AT-21 PARTIAL ; RECETTE |

**Bloqueurs RECETTE concrets (pas des gaps multi-repo inventés) :**
1. USER E2E navigateur non exécuté (Morris).
2. HumanDecision geste UI observé NOT RUN.
3. Merge REAL + protections branches NOT PROVEN (si merge inclus dans recette cible).
4. MULTI-REPO REAL NOT PROVEN — **limitation sandbox**, pas blocker du vertical mono-repo documentaire.

## 16. Fake/Real Qualification §6.16

| Capacité | Statut |
|---|---|
| DETERMINISTIC corrective (intégrité + REC-01) | PROVEN (tree tip) |
| OAuth READ REAL | PROVEN historique |
| Documentary commit+PR REAL sandbox | PROVEN historique (non rejoué) |
| MULTI-REPO REAL | NOT PROVEN |
| MERGE REAL | NOT PROVEN / HARD-BLOCKED |
| USER E2E | NOT RUN |
| Product tip distant | **VERIFIED** `51b0c3b6` |
| Product PR / main / RECETTE / ADOPTED | NON |

## 17. Risques conservés / sortie

| ID | Statut |
|---|---|
| R1–R5 | CARRIED |
| R6 | NON ISSUE |
| R7–R8 | corrigés candidats précédents |
| ML4-REC-01 | corrigé + distant |

Sortie vers readiness review : tip distant vérifié ; synthèse §15 ; gates Morris distincts pour PR/merge/RECETTE.

## 18. ENV-01 / versioning

DEV source candidate **publiée** sur branche Product. RECETTE NON DÉPLOYÉE. STABLE N/A. `0.0.0-dev` / NO RELEASE. Push ≠ RECETTE.

## 19. Gates restants

1. Product Functional Readiness Review (ChatGPT + Morris)
2. GO distinct éventuel pour PR Product
3. GO distinct merge
4. Candidat ENV-01 RECETTE + exécution utilisateur Morris
5. Qualification frontière REAL réellement recettable (mono-repo vs multi-repo)

## 20. Verdict unique

**ML4 PRODUCT — TWO CORRECTIVE COMMITS REMOTE VERIFIED — READY FOR PRODUCT FUNCTIONAL READINESS REVIEW — NO PRODUCT PR / NO RECETTE.**

| Champ | Valeur |
|---|---|
| SHA final | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Tree | `cdbd7e3763b835db5a58458191d4fb648d184fa0` |
| Chaîne | `79b10052 → d4f158ce → 51b0c3b6` |
| Commits poussés | 2 |
| Branche | https://github.com/mcleland147/sfia-workspace/tree/feat/next-git-collaboration-20261108 |
| Tip commit | https://github.com/mcleland147/sfia-workspace/commit/51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| Compare cumul | https://github.com/mcleland147/sfia-workspace/compare/79b100527a9c43fb789ca62b7f87b50a8bc2adf1...51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| main | `c658f590…` inchangé |
| PR Product | aucune |
