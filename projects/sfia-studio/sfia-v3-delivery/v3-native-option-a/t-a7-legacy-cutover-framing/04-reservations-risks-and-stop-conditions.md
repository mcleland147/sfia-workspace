# 04 — Reservations, Risks and Stop Conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `04-reservations-risks-and-stop-conditions.md` |
| **Statut** | **FRAMING VALIDATED — RÉSERVES INCHANGÉES — F08/F09 NOT DECIDED** |
| **T-A7** | **NOT OPEN** |
| **Réserves fermées dans ce cycle** | **aucune** |
| **Note** | A5.2 (trajectoire) ≠ exécution · ne consomme pas F08 |

---

## 1. Registre des réserves et findings

| ID | Statut | Définition | Preuve | Bloque framing T-A7 ? | Bloque delivery T-A7 ? | Bloque cutover ? | Bloque real execution ? | Bloque production ? | Obligatoire Option A COMPLETE ? | Décision Morris | Cycle recommandé |
|----|--------|------------|--------|----------------------|------------------------|------------------|-------------------------|---------------------|---------------------------------|-----------------|------------------|
| **B5** | OPEN | LPS satellite ids non carry-forward | T-A2/T-A3 docs · doc 23 | **Non** | **Oui** candidat | **Oui** | Indirect | Indirect | **Oui** candidat | D-T-A7-F08 | reserve closure / T-A1 |
| **R1** | OPEN | Atomicité Project↔Cycle absente | T-A2 docs | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** si persistence | D-T-A7-F08 · F10 | architecture persistence |
| **R-T-A3-1** | OPEN **HARD** | Pas d’API publique Critical acknowledge | T-A3 · Confirm fail-closed | **Non** | **Oui** si Critical path requis | **Oui** si activation | **Oui** | **Oui** | **Oui** real-exec / product large | D-T-A7-F08 · F09 | authority |
| **R-T-A3-2** | OPEN **HARD** | Atomicité Decision↔LPS/Epistemic résiduelle | T-A3/T-A4 Option B | **Non** | **Oui** | **Oui** | **Oui** | **Oui** | **Oui** persistence | D-T-A7-F08 · F09 | architecture |
| **R-T-A3-3** | OPEN | Authority registry in-memory | T-A3 | **Non** | Partiel | **Oui** | Partiel | **Oui** (IAM) | **Oui** production | D-T-A7-F10 | IAM |
| **R-T-A3-4** | OPEN | Enum mapping `AUTHORITY_SCOPE_MISMATCH` | T-A3 | **Non** | **Non** | **Non** | **Non** | Low | Non | dette ultérieure | hygiene |
| **R-M01** | OPEN | ClaimEvaluator readiness — closure Morris | T-A6 | **Non** | **Oui** candidat T-A6 COMPLETE | Indirect | Indirect | **Oui** | **Oui** T-A6 COMPLETE | D-T-A7-F04 · F08 | modeled/delivery |
| **U-M02** | OPEN | Evidence blob vendor / payloads / retention | T-A6 · D-T-A6-09 | **Non** | **Oui** si Evidence physique | **Oui** | **Oui** | **Oui** | **Oui** production / Evidence | D-T-A7-F10 | RGPD/persistence |
| **C1** | RECOMMENDED — NOT VALIDATED | Evidence status jointure PASS | T-A6 20-pr-readiness | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 · F08 | T-A6 debt |
| **C2** | RECOMMENDED — NOT VALIDATED | Self-review Critical | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C3** | RECOMMENDED — NOT VALIDATED | Bornes taille/nombre | T-A6 | **Non** | Dette | Indirect | Indirect | Indirect | Partiel | D-T-A7-F04 | T-A6 debt |
| **C4** | RECOMMENDED — NOT VALIDATED | LPS satellite → fusion B5 candidate | T-A6 | **Non** | Via B5 | Via B5 | Indirect | Indirect | Via B5 | D-T-A7-F08 | merge into B5 |
| **F-CI-01** | OPEN | Node engines pin absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | Partiel | Non | tooling | config |
| **F-CI-02** | OPEN | npm audit historique | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Oui** conditionnel | Non | security | deps |
| **F-CI-03** | MITIGATED | Node local/CI | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-04** | OPEN Minor | actionlint absent | docs 24/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | tooling | — |
| **F-CI-05** | MITIGATED | node:sqlite/Node20 | docs 31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | — |
| **F-CI-06/06B** | MITIGATED non CLOSED | whitespace | docs 29/31 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | hygiene | — |
| **F-A6-PM-G01** | **CLOSED** | merge T-A6 sans CI formelle | doc 24 | **Non** | **Non** | **Non** | **Non** | **Non** | Non | — | supersédé |
| **M1 loose** | NOT DECIDED | approvals=0 · strict=false · conversation resolution=false · bypass | doc 24/33 · D3 | **Non** | **Non** | **Recommandé avant** | **Non** | **Oui** | Non (distinct COMPLETE) | D-T-A7-F12 | governance |

### Point critique R-T-A3-1 / R-T-A3-2

Git **ne démontre pas** que R-T-A3-1/2 bloquent un cadrage read-only. Ils restent **HARD** pour :

- exécution réelle ;
- Confirm Critical réel ;
- persistence saine ;
- delivery/cutover si le périmètre active ces chemins.

---

## 2. Risques du cadrage

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Confusion framing / open / delivery / cutover | niveaux A–D + anti-claims |
| Claim COMPLETE implicite | matrices `NOT DECIDED` + T6-C15 / OA-22 |
| Fermeture implicite de réserve | registre OPEN inchangé |
| Retrait prématuré MethodMode | stop conditions §3 |
| Sous-estimer persistence/IAM/RGPD | préconditions P18–P21 |
| Hardening M1 prématuré | D-T-A7-F12 · NOT JUSTIFIED NOW pour framing |

---

## 3. Stop conditions actionnables (obligatoires)

**Règle :** aucune reprise automatique. Pour toute condition Critical : action immédiate = `STOP` · état = `BLOCKED` · reprise = gate Morris explicite **après** preuve.

Responsables autorisés (rôles, non nominatifs) : Cursor (arrêt exécution locale) · ChatGPT (qualification / remontée) · Morris (décision de reprise) · owner technique / sécurité / RUN (preuve spécialisée).

| ID | Niveau | Trigger | Action immédiate | Responsable | Preuve | État | Gate de reprise |
|----|--------|---------|------------------|-------------|--------|------|-----------------|
| **SC-01** | framing → production | `origin/main` (ou base Option A) diverge d’une façon qui affecte T-A6 / T-A7 / réserves / frontières legacy | `STOP` — geler tout acte suivant (prep/delivery/cutover/claim) | Cursor arrête ; ChatGPT qualifie l’écart ; Morris tranche | `git fetch` · `rev-parse origin/main` · merge-base · diff paths Option A / T-A* | `BLOCKED` | Gate Morris de **re-review** après rebase/relecture sur nouvelle base — **pas** de reprise auto |
| **SC-02** | delivery preparation → cutover | Modification de `method/**` détectée hors gate Morris dédié | `STOP` — ne pas merger / ne pas continuer le cycle | Cursor arrête ; ChatGPT remonte ; owner technique produit inventaire diff | `git diff` / CI path filter · liste fichiers `method/**` touchés · absence de gate | `BLOCKED` | Gate Morris **méthode/legacy** explicite après justification — **pas** de reprise auto |
| **SC-03** | delivery preparation → cutover | Modification OPS1 (contrats / surfaces OPS1) hors gate Morris dédié | `STOP` — isoler le changement ; pas de présentation comme v3 | Cursor arrête ; ChatGPT remonte ; owner technique/sécurité | diff OPS1 · preuve d’absence de gate · anti-claim double identité | `BLOCKED` | Gate Morris **OPS1 isolation** dédié — **pas** de reprise auto |
| **SC-04** | delivery → cutover | Suppression ou désactivation `MethodMode` sans preuves P03–P09 / inventaire dépendances | `STOP` — hold flag ; pas de cutover | Cursor arrête ; ChatGPT qualifie ; owner technique | inventaire dépendances · tests UI/API/import · gaps P03–P09 | `BLOCKED` | Gate Morris cutover **uniquement** si preuves remplacements SATISFIED — **pas** de reprise auto |
| **SC-05** | delivery → cutover | Remplacement legacy incomplet (canonicalPaths / sourceLoader / contextResolver / session / badges / method reads) | `STOP` — pas d’activation cutover | Cursor arrête ; ChatGPT ; owner technique | matrice P03–P09 · preuves CI/runtime manquantes | `BLOCKED` | Gate Morris après preuves remplacements — **pas** de reprise auto |
| **SC-06** | cutover / production | Rollback / hold / restore absents ou non prouvés avant cutover | `STOP` — interdire GO cutover | Cursor arrête ; ChatGPT ; owner RUN | absence de test rollback · hold flag non vérifié · runbook manquant | `BLOCKED` | Gate Morris `GO AUTHORIZE T-A7 CUTOVER` **après** preuves rollback — **pas** de reprise auto |
| **SC-07** | real execution / cutover / production | Exécution réelle sans autorité (R-T-A3-1), atomicité (R-T-A3-2/R1), persistence et IAM adaptés | `STOP` — aucune exécution réelle | Cursor arrête ; ChatGPT ; owner technique/sécurité | statut HARD OPEN · anti-claims DATABASE/IAM · absence adapter réel | `BLOCKED` | Gate Morris real-execution **après** résolution/acceptation formelle — **pas** de reprise auto |
| **SC-08** | delivery → production | Evidence physique / migration blob sans politique RGPD / rétention (U-M02) | `STOP` — pas de migration Evidence | Cursor arrête ; ChatGPT ; owner sécurité/privacy | U-M02 OPEN · absence politique/vendor/purge | `BLOCKED` | Gate Morris privacy/RGPD après politique + preuves — **pas** de reprise auto |
| **SC-09** | framing → production | Claim `T-A6 COMPLETE` ou `Option A COMPLETE` sans critères décidés + preuves + GO Morris | `STOP` — retirer/neutraliser le claim | Cursor arrête ; ChatGPT qualifie ; Morris refuse le claim | matrices T6/OA · absence T6-C15/OA-22 · absence gate COMPLETE | `BLOCKED` | Gate Morris COMPLETE dédié **après** critères + preuves — **pas** de reprise auto |
| **SC-10** | production | Claim `production ready` sans E2E, RUN pack et observabilité | `STOP` — pas de claim production | Cursor arrête ; ChatGPT ; owner RUN | absence E2E/CI · RUN manquant · obs PARTIAL | `BLOCKED` | Gate Morris production readiness après preuves E2E/RUN/obs — **pas** de reprise auto |
| **SC-11** | framing → production | Fermeture implicite d’une réserve (texte, matrice ou commit sans décision Morris) | `STOP` — restaurer statut OPEN / NOT VALIDATED ; pas de CLOSED implicite | Cursor corrige/arrête ; ChatGPT signale ; Morris seule autorité de fermeture | diff registre réserves · absence gate ACCEPTED/CLOSED | `BLOCKED` | Gate Morris d’arbitrage réserves explicite — **pas** de reprise auto |
| **SC-12** | framing → cutover | Élargissement hors Option A (adoption globale, double write, OPS1 présenté comme v3, hors périmètre pack) | `STOP` — recentrer sur Option A ; pas de merge élargi | Cursor arrête ; ChatGPT qualifie le hors-scope ; Morris tranche | diff hors paths Option A · anti-claims · inventaire scope | `BLOCKED` | Gate Morris de **re-cadrage** scope Option A — **pas** de reprise auto |

### Couverture complémentaire (rappel, non IDs séparés)

- Delivery / delivery preparation sans framing validé → couvert par SC-09 (claims) + anti-claims pack + gates F01–F03.
- Push branche projet hors gate → stop opérationnel Cursor/ChatGPT (hors tableau cutover) ; ne constitue **pas** une autorisation T-A7.

---

## 4. Dette acceptable temporairement

| Item | Acceptable pendant framing | Acceptable jusqu’à delivery preparation (B) | Acceptable jusqu’à delivery (C) | Acceptable jusqu’à production |
|------|----------------------------|-----------------------------------------------|----------------------------------|-------------------------------|
| B5 / R1 OPEN | oui | stratégie documentée | non (sauf acceptation) | non |
| R-T-A3-1/2 OPEN | oui | oui (design) | non si Critical/persistence | non |
| R-T-A3-4 | oui | oui | oui | oui (low) |
| C1–C4 NOT VALIDATED | oui | oui | à arbitrer | à arbitrer |
| F-CI-01/04 | oui | oui | oui | partiel |
| M1 loose | oui | oui | oui | **non recommandé** |
| Absence API/UI | oui | oui (design) | non pour cutover opérable | non |
| Absence persistence | oui (mémoire) | design only | non pour cutover durable | non |

---

## 5. Anti-claims

Pas RESERVE CLOSED · Pas HARD résolu · Pas READY FOR CUTOVER · Pas PRODUCTION READY · Pas DATABASE SELECTED · Pas IAM SELECTED · Pas DECIDED · Pas reprise automatique après STOP · Pas stop condition = rollback prouvé.

---

## 6. Verdict

`RESERVATIONS AND STOP CONDITIONS FRAMED — TWELVE ACTIONABLE STOPS WITH TRIGGERS OWNERS PROOFS AND RESUME GATES — HARD BLOCKERS CLASSIFIED FOR EXECUTION NOT FRAMING — NO RESERVE CLOSED`
