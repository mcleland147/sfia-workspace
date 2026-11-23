# ML5 — Qualification d'intégration (pré-construction)

| Champ | Valeur |
|---|---|
| Date | 2026-11-23 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Auteur | Cursor (intégrateur ML5) |

## 1. Architecture constatée (HEAD candidat)

- **D3** (`domains/conversation/`) : Nora via `@openai/agents@0.21.0`, `run(stream:false)`, tools D4/historique/Git READ, qualification Zod, budgets cognitifs. Pas d'outil web, pas d'activité progressive consultable, `replyDraft` borné conversationnellement.
- **D6** (`domains/decisions/`) : `humanDecisions` + restrictions ; `insertHumanDecision` ; authority évaluée au point d'effet Git.
- **D7** (`domains/execution/`) : `EffectKind = GIT_PUBLICATION \| GIT_MERGE` uniquement ; `effect_attempts` + claim/lease ; prepare → authorize → dispatch → reconcile pour publications Git documentaires.
- **D8** (`domains/proofs/qualify.ts`) : qualification Git (commit/PR/merge) fail-closed sur tests PASS / ADOPTED.
- **D9** (`domains/integrations/`) : GitHub App, OAuth, path-policy, providers REAL/SCRIPTED, projection publications.
- **`@cursor/sdk`** : absent de la baseline ; ajouté en dépendance de construction (`1.4.2`, Node ≥22.13 ; runtime local Node v24.16.0 OK).
- **UX** : `TravailViewer` document/git ; surfaces projet/sas ; **pas** des états page 12 contrat/exécution/bilan Cursor.
- **Schéma** : migrations jusqu'à `016` ; `schemaRevision` code encore figé à `012` (dette préexistante).

## 2. Contrats métier réutilisables

- Tentative D7 + `correlationKey` unique + fingerprint + claim lease.
- HumanDecision avec `effectConditions` et revalidation au point d'effet.
- Ownership fencing tours conversation (`ownerToken`).
- Providers SCRIPTED/REAL pour effets externes.
- Tools D4/Git READ + budgets séparés.
- Fail-closed D8 sur conformité inventée.

## 3. Écarts vs cible ML5

| Axe | Écart principal |
|---|---|
| A | Investigation séquencée / suffisance / contradictions non formalisées au-delà des tools existants |
| B | `webSearchTool` disponible dans SDK 0.21.0 mais **non branché** ; séparation public/privé non prouvée |
| C | `TurnActivitySummary` terminal seulement ; pas d'événements progressifs durables |
| D1 | Pas de stockage contrat technique canonique (risque `replyDraft`) |
| D2 | Pas d'effet `CURSOR_EXECUTION` ni adaptateur SDK |
| D3 | Git ML4 ≠ workspace isolé Cursor pour missions techniques |
| D4 | Pas de handoff par tentative ni 9 rubriques D8 Cursor ni analyse Nora post-tentative |

## 4. Frontières affectées

- **D3** : policy web, activité, préparation contrat, analyse finale.
- **D6** : nouveau kind `CURSOR_EXECUTION_MANDATE` (réutilise table).
- **D7** : extension `EffectKind` + services Cursor (pas de 2ᵉ moteur).
- **D8** : qualification réalisation Cursor (complète `qualify.ts` Git).
- **D9** : relecture Git conditionnelle post-tentative.
- **D4/D5** : lecture seule pour sources / continuité ; pas de nouvelle autorité.

## 5. Modifications envisagées

- Migration additive `017_ml5_cursor_realization` (contrats, handoffs, qualifications, activity events).
- APIs `/api/projects/:id/realization/*`.
- Adaptateur SDK SCRIPTED (tests) / LIVE (env).
- Extensions Nora (web gated, activity append, contrat hors replyDraft).
- UX page 12 (après L0/L1/L2 Figma).
- Tests unitaires + intégration PG + BROWSER ciblés.

## 6. Dépendances / risques de régression

- Non-régression Git publication/merge ML4.
- Tours conversation / fencing.
- `schemaRevision` tests (git-collaboration attendait `012`).
- Coût / exfiltration B1 si outil web attaché au run privé.
- Double dispatch Cursor (WRITE-07 réserve ML4).
- Collision worktree stale `sfia-workspace` (évité via worktree isolé).

## 7. Choix candidats à confirmer

| Choix | Orientation construction | Statut |
|---|---|---|
| B1 `webSearchTool` | Brancher gated + sanitization ; preuve LIVE séparée | Candidate en cours |
| C1 polling projection | Table `nora_activity_events` + GET | Candidate |
| SDK local `@cursor/sdk` | SCRIPTED d'abord, LIVE borné | Orientation Morris contenu |
| Git option B | Publication gouvernée D7/D9 pour qualification | Candidate privilégiée, non adoptée |
| Worker séparé | Différé ; dispatch in-process + claim lease d'abord | Ouvert |

## 8. Décisions Morris encore requises (non bloquantes globalement)

1. Adoption formelle B1 après preuve non-exfiltration LIVE.
2. Option Git A vs B pour missions Cursor mutatives.
3. Topologie worker production vs in-process DEV.
4. Cutover RECETTE / sync Roadmap Gate C (hors mandat push).
5. GO REAL GitHub/MCP pour preuves mutatives.

## 9. Plan d'intégration et critères de sortie communs

1. Socle contrat + tentative + D6 + SDK SCRIPTED + handoff + D8.
2. Parcours vertical déterministe (I10 partiel).
3. Activité C1 + cognition A + web B gated.
4. UX Figma 12 avec L0→F2.
5. LIVE SDK / BROWSER selon env ; REAL uniquement sous GO.
6. Registre A–I mis à jour honnêtement ; Review Pack FULL + handoff L3.

**Critères de sortie cycle :** capacité cohérente démontrable en SCRIPTED+DETERMINISTIC ; réserves explicites LIVE/REAL/UX ; pas de déclaration ML5 terminé sans couverture.

**Verdict qualification :** `INTEGRATION QUALIFIED FOR CONSTRUCTION — ADDITIVE SCHEMA AUTHORIZED IN DEV — NO SECOND ENGINES — GATES PRESERVED`.
