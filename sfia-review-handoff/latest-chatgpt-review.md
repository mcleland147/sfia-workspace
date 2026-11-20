# SFIA Review Pack FULL — Ensemble 06 Cycle 14
# CI PostgreSQL remediation + J-C13 Option B — PR #683
# Mode: FULL / publish-in-cycle / L3 handoff required
# Profil: STANDARD — contrôles P0 renforcés

## 0. Verdict unique

**CI REMEDIATION VERIFIED — CHATGPT REVIEW REQUIRED**

SHA tip: `121a2e38081b2ab2b8f42308d35d664dea4e495a`
Branche: `sfia/next-ensemble06-journal-docs-recette-20261120`
PR Draft: https://github.com/mcleland147/sfia-workspace/pull/683
CI Next: **PASS** — run https://github.com/mcleland147/sfia-workspace/actions/runs/44722295427
Tree `web/src` = `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` (**gel / inchangé** ; = code UAT)
Aucun merge. STABLE / ADOPTED **non acquis**. GO MERGE = Morris distinct.

## 1. Git pre-check

| Item | Valeur |
|---|---|
| Branche PR | `sfia/next-ensemble06-journal-docs-recette-20261120` |
| HEAD départ cycle | `90ff1ecf3d7a7c9c8afa856e418cdd755b09deb5` |
| HEAD tip | `121a2e38081b2ab2b8f42308d35d664dea4e495a` |
| Code UAT | `7a13d7deec488bf62881eec11b5658c45c02c5b0` |
| Tree web/src | `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` |
| RECETTE | non touchée (:3200 / LaunchAgent) |
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble06-journal-docs-recette-20261120` |
| Merge / main | **aucun** |

## 2. Blast radius

- **Modifié:** tests PG (6 fichiers) + `document-conserve.ts` + e2e FAKE (chrome, rail-nav, Journal V4 Option B, D2 retry) + whitespace docs
- **Non modifié:** `web/src/**`, RECETTE, main, migrations, contrats Documents, PV UAT
- **STOP produit:** non déclenché (fixtures seal + Option B tests-only)

## 3. Classification des 17 échecs PG

Assertions soft ACK + séquence propose→conserve→AVAILABLE + fixtures seal REVISE avec `sourceRevisionId` + `observedHeadRevisionId` (F01-12/14 CONFLICT seulement après révision corrélée réelle). **Aucun test skip/supprimé/neutralisé.**

## 4. J-C13 — Option B (décision Morris)

**Problème :** oracle `data-journal-focus="1"` dépend d’un retry produit ~2s ; CI lent → faux négatif. Allonger le retry = delta `web/src` (gel cassé).

**Option B retenue :**
- Preuve CI durable : message exact présent, anti-end-scroll (≠ dernier), brouillon intact, retour rail Journal (recherche/filtre/split)
- **Non exigé en CI :** marqueur éphémère `data-journal-focus` / paint highlight
- Réserve documentée : highlight paint = local DEV / non garanti sous charge CI
- `web/src` gel préservé

Helpers conservés (tests-only) : `goRailSurface` / `goJournalReady` (fermeture viewer avant retour Journal).

## 5. Preuves

| Suite | Résultat |
|---|---|
| Vitest PG | 510 PASS (cycle) |
| Vitest unit | 680 PASS (cycle) |
| tsc / lint / build | PASS |
| CI tip `121a2e38` | Build validate + Required Gate **PASS** |
| web/src | `4e5e87f5…` |

## 6. Invariants

pdoc · hauth · D4 · concurrence · idempotence · provenance · refus interprojet · UNKNOWN/FAILED sans faux succès · PRIOR_ASSISTANT sans écriture implicite · soft ACK sans codes techniques Nora.

## 7. Décisions Morris

- GO MERGE: **non demandé** / distinct
- STABLE / ADOPTED: **non acquis**
- LIVE: aucune campagne automatique
- Handoff L3: même pack / section L3 ci-dessous

---

# L3 Handoff — Ensemble 06 Cycle 14

**À :** Morris + ChatGPT Critical Review  
**De :** Cursor Ensemble 06  
**Date :** 2026-11-20  
**Demande :** Critical Review uniquement — **pas** merge / STABLE / ADOPTED / RECETTE / LIVE.

## Verdict L3

**CI REMEDIATION VERIFIED — CHATGPT REVIEW REQUIRED**

| Item | Valeur |
|---|---|
| PR | https://github.com/mcleland147/sfia-workspace/pull/683 (Draft) |
| Tip | `121a2e38081b2ab2b8f42308d35d664dea4e495a` |
| CI | PASS `44722295427` |
| web/src | `4e5e87f5…` gel |

## Décision demandée

1. ChatGPT Critical Review du tip `121a2e38`
2. Morris seul statue ensuite sur **GO MERGE**
3. Réserve J-C13 Option B acceptée (marqueur focus hors oracle CI)
