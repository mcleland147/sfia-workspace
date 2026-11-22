# SFIA Review Pack — FULL · CRITICAL
## Ensemble 08 — CORRECTIF POST-UAT 01 : Publication Nora et convergence UX

| Champ | Valeur |
|---|---|
| status | COMPLETE — awaiting ChatGPT review / Morris gates |
| cycle | Delivery #8 · INC/EVOL · CRITICAL · NO RELEASE |
| date_utc | 2026-11-22 |
| prior_handoff | `72cdb456bc9cc68ef047a21da1df7b639af26a09` |
| profil | CRITICAL · Review Pack FULL · Handoff REQUIRED / PUBLISH-IN-CYCLE |
| versioning | NO RELEASE · NO STABLE · NO ADOPTED |

---

## 1. Git Truth

### Initial (pre-check ce cycle)

| Item | Observé |
|---|---|
| Remote | `origin` → `mcleland147/sfia-workspace` |
| Branche DEV | `feat/next-ensemble08-git-publications-nora` |
| HEAD tip documentaire | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| Freeze code RECETTÉ | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE freeze | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD RECETTE | `1xEbvCdTAX6ht262w4oKF` |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| merge-base HEAD↔main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| ahead | 2 commits vs `origin/main` (freeze + docs tip) |
| Worktree | dirty (correctifs POST-UAT non commités — mandat : pas de commit/push auto) |

### Final (fin de cycle Cursor)

| Item | Observé |
|---|---|
| HEAD inchangé | `29066442` (pas de commit projet) |
| Worktree | correctifs locaux + Review Pack + as-built |
| Push projet | **NONE** |
| Push handoff L3 | `f5c6d45205572536a2050a4f69015ba29b41e2f4` = `origin/sfia/review-handoff` (mono-fichier FF) |
| RECETTE | **préservée** HTTP `:3200` → 307 (alive) · BUILD freeze non remplacé |

### Sources canoniques relues

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- gouvernance Next (SEF, roadmap, environnements, versioning, naming)
- contrats E08 candidats (non promus D2)
- handoff prior `72cdb456`
- Figma file `itgvCulInEnFY6DvgIegvP` via MCP session `80b0f865-9353-4318-b761-d912f7b37cbe`

---

## 2. Constats UAT Morris (22/11/2026)

### UAT-01 Publication Nora (P0)

**Reproduction rapportée :** CampusFlow · document « Références externes — Enseignements de Chantiers360 » v2 · dépôt `mcleland147/chantiers360` · publier tel quel sur nouvelle branche sans merge.

**Observation :** Nora clarifie, identifie le document, accepte « tel quel », puis : *« La publication reste à confirmer par Studio. »* — aucune publication visible après refresh.

**Contexte env RECETTE :** GitHub REAL READ · `STUDIO_GITHUB_ALLOW_MUTATIONS` OFF.

### UAT-02 Microcopy / en-têtes (P1)

Double en-tête « Intégration Git » + « Dépôts Git » sur surface Dépôts Git. Jargon technique (D4/D7/D8, projection, provider) visible Pilote.

### UAT-03 Gestion dépôts (P1)

Écarts vs Figma 11.01 / 11.02 / 11.13 (titres, panneaux, hiérarchie). Données CampusFlow = 1 dépôt (maquette 11.02 = 2 fictifs) — **pas un défaut**.

### UAT-04 Infos (P2)

Infos injectait commit/blob dans le flux contenu ; intention = panneau contextuel ancré. Figma 11.03 expose le bouton **sans** état ouvert formel.

### UAT-05 Intégrations (P1)

Structure encore proche ancienne IHM vs 11.06 (badge Connecté, panneaux, colonne droite).

---

## 3. Diagnostic publication (obligatoire A–G)

### Preuves reconstitutives (RECETTE DB / code freeze path)

| Élément | Preuve |
|---|---|
| Projet | CampusFlow `proj_1b52eb8f…` |
| Document / rév. | `doc_1e5d8c16…` / v2 `drev_31678175…` |
| Message assistant terminal | hedge « La publication reste à confirmer par Studio » (2026-11-22) |
| `effect_attempt` 2026-11-22 | **aucun** (seul historique Nov 10 PREPARED hors parcours) |
| Gate code freeze | `service.ts` : publication **seulement si** `documentEffectForAck.status === "AVAILABLE"` (same-turn D4) |
| WRITE REAL | OFF → même si path D7 ouvert, mutation impossible |

### Classification

| Classe | Applicable ? | Commentaire |
|---|---|---|
| **A** Intention reconnue, aucun plan D7 | **OUI (primaire)** | Hedge LLM ; pas d’entrée prepare faute de D4 AVAILABLE |
| **B** Plan préparé, autorité/param manquant | Non observé ce tour | Pas de PREPARED 2026-11-22 |
| **C** Capacité D9 WRITE indisponible | **Latent / secondaire** | Aurait bloqué si path A corrigé seul, sans gate WRITE |
| D Tentative refusée avant effet | Non observé | Pas d’attempt |
| E Effet lancé, résultat inconnu | Non |
| F Effet accompli, restitution perdue | Non |
| G Effet accompli, projection incorrecte | Non |

**Cause racine prouvée :** combinaison **A** (chemin publish-existing jamais mobilisé — gate same-turn D4) + hedge LLM pré-effet ; **C** serait la cause de non-écriture si le chemin A avait été ouvert sous WRITE OFF. **Pas** F/G.

---

## 4. Corrections code (DEV branche E08)

### Créations

| Fichier | Rôle |
|---|---|
| `web/src/domains/conversation/publication-document-target.ts` | Résolution document/révision existant (same-turn D4 / focus / hint / sole) |
| `web/src/domains/conversation/publication-effect-restitution.ts` | Strip hedges + restitution Nora post-Studio + `publicationWriteGate` |
| `web/src/components/integrations/GitFileInfoPopover.tsx` | Infobulle Infos (Escape / outside / focus) |
| `web/tests/unit/publication-effect-restitution.test.ts` | 7 tests déterministes |
| `construction/.../figma-evidence/post-uat-01-l0-l2.md` | L0–L2 Figma |

### Modifications (sections utiles)

#### `service.ts` — publication mission

- Entrée publication si `wantsPublish` **sans** exiger D4 AVAILABLE same-turn.
- `resolvePublicationDocumentTarget` → document/rév. existants.
- `publicationWriteGate()` **avant** prepare : REAL + mutations≠documentary → `REFUSED_WRITE_DISABLED`, zéro effet, restitution Nora.
- Mandat D6 / prepare / resume inchangés dans leur contrat ; restitution via `composePublicationEffectRestitution` après owners Studio.
- Hedge « reste à confirmer par Studio » stripé même si attempt non lancé.

#### `semantic-qualification.ts`

- `publication.documentHint` / `objectRef` / `repositoryHint` projetés depuis intents durables.

#### `ProjectChrome.tsx`

- Surfaces `git` / `publication` → **breadcrumb-only** (suppression composition héritée « Intégration Git » — pas un hide CSS).

#### `GitRepositoriesSurface.tsx` + `tokens.css`

- Microcopy Pilote sans D4/D7/D8 / « Projection ».
- Empty / manage heroes alignés textes 11.01 / 11.02 / 11.03.
- Infos → `GitFileInfoPopover` (pas d’injection dans Markdown).

#### `IntegrationsPanel.tsx`

- Kicker / sous-titre 11.06 ; badge **Connecté** ; actions Actualiser / Déconnecter ; colonne d’explication ; retrait note provider REAL/SCRIPTED Pilote ; confirmation déconnexion inchangée (aucun appel avant confirm).

#### Docs

- `as-built.md`, `delivery-history.md` (entrée DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01).

### Non fait (périmètre)

- Pas de nouveau moteur Nora / scheduler.
- Pas de migration DB.
- Pas d’activation WRITE RECETTE.
- Pas de mutation GitHub REAL.
- Pas de cutover RECETTE / commit / push / PR projet.

---

## 5. Contrat Figma extrait + comparaison

Voir `figma-evidence/post-uat-01-l0-l2.md`.

| Surface | Alignement code | Mesures ≤2px runtime |
|---|---|---|
| 11.01 empty | Structure 848/492 + titres corrigés | **NOT PROVEN** |
| 11.02 manage | Structure + hero manage | **NOT PROVEN** (1 dépôt runtime OK) |
| 11.03 explorer | 30/70 conservé ; Infos popover candidat | **NOT PROVEN** |
| 11.06 integrations | Badge + layout 2 colonnes | **NOT PROVEN** |
| Infos open state | Candidat simple | **DESIGN DECISION** si état Figma normatif requis |

**FIGMA ALIGNED : non annoncé.**

---

## 6. Tests exécutés

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | **PASS** |
| `publication-effect-restitution.test.ts` | **7 PASS** |
| `git-refs-coverage-s03.test.ts` | **19 PASS** |
| `publication-branch-marker` + `publication-effect-labels` | **11 PASS** |
| `mission-continuity` + `intent-conduction` + `real-github-mutations-gate` | **15 PASS** |
| PostgreSQL D6/D7/D8/D9 full matrix | **NOT RUN** ce cycle (pas déclaré PASS) |
| Playwright E08 DEV | **NOT RUN** ce cycle |
| Playwright SCRIPTED sur RECETTE LIVE | **interdit** comme preuve REAL — N/A |
| Smoke E07 navigation | **NOT RUN** ce cycle |
| Responsive/clavier Infos | logique Escape/outside **code-proven** ; UX device **NOT PROVEN** |

### Mapping tests publication (contrat §5)

| # | Attendu | Preuve |
|---|---|---|
| 1 info only → no effect | logique inchangée wantsPublish | NOT RE-RUN E2E |
| 2–7 clarifications / path / branche / no PR | guards existants + path gate | PARTIAL (unit + code) |
| 8 WRITE off → zéro effet + Nora refuse | `publicationWriteGate` + restitution unit | **DETERMINISTIC PROVEN** |
| 9 D6 invalide | path authority existant | hist. / non re-run |
| 10 SCRIPTED WRITE | gate allows scripted | unit gate |
| 11–13 idempotence / requal | owners existants | NOT RE-RUN |
| 14 instructions in Git doc | authority USER only | NOT RE-RUN |
| 15 pubs projection | UI copy only | NOT PROVEN E2E |

---

## 7. Fake / Real

| Capacité | Niveau |
|---|---|
| Publish-existing resolution | DETERMINISTIC PROVEN (unit) |
| WRITE-off restitution Nora | DETERMINISTIC PROVEN (unit) |
| Hedge strip | DETERMINISTIC PROVEN (unit) |
| RECETTE LIVE publish E2E | **NOT PROVEN** (RECETTE frozen ; WRITE off) |
| GitHub REAL WRITE sandbox | **NOT PROVEN** — GO Morris + sandbox distincte requis |
| Figma G5 pixel | **NOT PROVEN** |
| Nora LIVE continuity after fix | **NOT PROVEN** (fix non déployé RECETTE) |

---

## 8. RECETTE / gates

| Gate | État |
|---|---|
| RECETTE `@98185598` / `1xEbvCdTAX6ht262w4oKF` | **PRESERVED** — aucune mutation |
| Nouveau candidat DEV | worktree dirty — **SHA candidat après commit Morris** |
| Cutover | **NOT AUTHORIZED** ce cycle |
| WRITE REAL | **OFF** — non contourné |
| NO RELEASE | respecté |

### Préparation sandbox WRITE (doc only)

- Ne pas utiliser `mcleland147/chantiers360` par déduction conversationnelle.
- Requis : dépôt test exact, App install, allowlist, permissions, branches/PR dédiées, mandat D6, D7/D8, rollback, **GO Morris**.

---

## 9. Réserves

1. Correctifs **non commités / non déployés** — UAT Morris sur freeze actuel ne voit pas encore le fix.
2. G5 Figma runtime ≤2px : NOT PROVEN.
3. Infos open state : candidat ; **DESIGN DECISION REQUIRED — MORRIS** si validation normative Figma exigée.
4. PG/Playwright matrices complètes : NOT RUN ce cycle.
5. Intégrations : structure améliorée ; pixel-perfect 11.06 NOT PROVEN.
6. Pas de second dépôt inventé runtime.

---

## 10. Verdict Cursor

**DELIVERY READY WITH RESERVES**

- P0 publication path + WRITE-off restitution : corrigés en DEV (preuve unitaire).
- P1 headers/microcopy/integrations : corrigés en code ; Figma pixel NOT PROVEN.
- P2 Infos : candidat popover ; non bloquant Nora.
- RECETTE inchangée ; no WRITE REAL ; no release.
- Sortie ≠ réception UAT ≠ GO cutover ≠ autorisation WRITE.

### Gates Morris attendus

1. Revue ChatGPT du pack.
2. Commit candidat DEV + BUILD_ID + tests.
3. GO cutover RECETTE SHA-specific (si qualification OK).
4. UAT G5 / publication (WRITE sandbox séparée si exercice REAL).
