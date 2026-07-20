# SFIA Studio — Decision pack architecture technique OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `59-ops1-technical-architecture-decision-pack.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Standard |
| **Statut** | `technical-decisions-validated-with-amendments` — **26 décisions validées avec amendements** (2026-07-20 19:17:11 CEST) |
| **Gate d’ouverture** | `GO G-OPS1-TECH-ARCH` — consommé |
| **Gate de validation** | `G-OPS1-TECH-ARCH-VAL` — **consommé** — Morris — 2026-07-20 19:17:11 CEST |
| **Décisions** | `OPS1-TECH-CAND-01`…`26` |
| **Companions** | [`57`](./57-ops1-technical-architecture.md) · [`58`](./58-ops1-technical-components-security-and-runtime.md) |
| **Baseline** | `origin/main` @ `ac2bcbf52e6170668e1a5cc0071c572026938635` |
| **Branche** | `design/sfia-studio-ops1-technical-architecture` |
| **Horodatage** | 2026-07-20 18:55:53 CEST |
| **Autorité** | Morris (L0) |

> Decision pack **validé avec amendements** sous `GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`.
> Identifiants `OPS1-TECH-CAND-01…26` **conservés**. Quatre amendements : isolation · stockage · idempotence · CI.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Nombre | **26** |
| Statut collectif | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
| Décision Morris | `GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST` |
| Isolation reco | Worktree (= isolation Git) + contrôles runner |
| Hash reco | SHA-256 canonique |
| FinOps | FD-CAND-15 maintenue |
| Fermé | Backlog · delivery · live · MVP · production · code |

---

## 2. Décisions validées avec amendements

## OPS1-TECH-CAND-01 — Modèle d’isolation

| Champ | Contenu |
|-------|---------|
| **Sujet** | Modèle d’isolation |
| **Proposition** | Isolation par exécution via **worktree Git** dédié (= isolation Git OPS1), **complétée** par contrôles runner (CWD borné, env filtré, credentials absents, réseau off, remote refusé, contrôles pré/post). **Pas** une sandbox OS forte. |
| **Alternatives** | Exécution dans le working tree principal ; sandbox partagée multi-sessions. |
| **Justification** | Réduit la contamination du clone principal. |
| **Impacts** | Change le runtime Cursor. |
| **Risques** | Fuite si mauvaise racine. |
| **Dette** | Outillage worktree. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 1 — worktree = isolation Git ; runner impose CWD/env/credentials/réseau/remote/contrôles ; pas sandbox OS forte. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-02 — Worktree vs conteneur vs VM

| Champ | Contenu |
|-------|---------|
| **Sujet** | Worktree vs conteneur vs VM |
| **Proposition** | Retenir le **worktree Git local** pour OPS1 ; le **conteneur** reste trajectoire candidate avant élargissement hors OPS1 ; VM écartée pour OPS1. |
| **Alternatives** | Conteneur immédiat ; VM distante. |
| **Justification** | Proportionné au POC OPS1. |
| **Impacts** | Moins d’ops que Docker/VM. |
| **Risques** | Isolation host partagée. |
| **Dette** | Évaluer conteneur si évasion. |
| **Réserve** | Sécurité host |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 1 — worktree retenu ; conteneur = trajectoire avant élargissement hors OPS1. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-03 — Politique réseau

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique réseau |
| **Proposition** | Réseau désactivé par défaut pour le runner Cursor. |
| **Alternatives** | Allowlist HTTP limitée ; réseau ouvert. |
| **Justification** | Réduit exfiltration. |
| **Impacts** | Bloque plugins réseau. |
| **Risques** | Besoins réseau futurs. |
| **Dette** | Politique d’exception sous GO. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-04 — Politique secrets

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique secrets |
| **Proposition** | Aucun secret dans env runner, prompt, rapport ou allowlist. |
| **Alternatives** | Secrets injectés temporairement. |
| **Justification** | Fail-closed credentials. |
| **Impacts** | Intégrations limitées. |
| **Risques** | Fuite via fichiers. |
| **Dette** | Scans secrets obligatoires. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-05 — Validation des chemins

| Champ | Contenu |
|-------|---------|
| **Sujet** | Validation des chemins |
| **Proposition** | Normalisation + `realpath` + préfixe racine + allowlist post-résolution. |
| **Alternatives** | Glob wildcard ; confiance path relatif. |
| **Justification** | Aligné scénario 55. |
| **Impacts** | Refuse chemins ambigus. |
| **Risques** | TOCTOU résiduel. |
| **Dette** | Revalidate pré-exec. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-06 — Gestion des symlinks

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion des symlinks |
| **Proposition** | Refuser symlink dont la cible résolue sort du workspace. |
| **Alternatives** | Suivre symlinks ; ignorer. |
| **Justification** | Empêche escape. |
| **Impacts** | Peut casser liens utiles hors scope. |
| **Risques** | Symlink races. |
| **Dette** | Scan post-exec. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-07 — Canonicalisation du contrat

| Champ | Contenu |
|-------|---------|
| **Sujet** | Canonicalisation du contrat |
| **Proposition** | JSON canonique (clés ordonnées, tableaux triés, UTF-8) avant hash. |
| **Alternatives** | Hash ad hoc non ordonné. |
| **Justification** | Déterminisme. |
| **Impacts** | Contraint sérialisation. |
| **Risques** | Divergence implémentations. |
| **Dette** | Tests golden hash. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-08 — Algorithme de hash candidat

| Champ | Contenu |
|-------|---------|
| **Sujet** | Algorithme de hash candidat |
| **Proposition** | SHA-256 du contrat canonique pré-gate. |
| **Alternatives** | SHA-1 ; signature asymétrique immédiate. |
| **Justification** | Standard, suffisant OPS1. |
| **Impacts** | Pas de non-répudiation crypto forte. |
| **Risques** | Collision théorique négligeable. |
| **Dette** | Signer plus tard si besoin. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-09 — Revalidation HEAD

| Champ | Contenu |
|-------|---------|
| **Sujet** | Revalidation HEAD |
| **Proposition** | Revalider `baseHeadSha` immédiatement avant EXECUTING. |
| **Alternatives** | Faire confiance au SHA du GO. |
| **Justification** | Mitige TOCTOU. |
| **Impacts** | Peut invalider GO si main avance. |
| **Risques** | Friction. |
| **Dette** | Nouveau gate si drift. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-10 — Branche d’exécution

| Champ | Contenu |
|-------|---------|
| **Sujet** | Branche d’exécution |
| **Proposition** | Convention `scenario/campus360-<slug>-<id>` locale. |
| **Alternatives** | Branche unique partagée ; pas de branche. |
| **Justification** | Traçabilité. |
| **Impacts** | Collisions possibles. |
| **Risques** | Cleanup manuel. |
| **Dette** | FD-CAND-26 aligné. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-11 — Stratégie de commit d’exécution

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie de commit d’exécution |
| **Proposition** | Aucun commit d’exécution dans OPS1 par défaut. |
| **Alternatives** | Commit auto local ; commit+push. |
| **Justification** | Preuves via diffs non commités. |
| **Impacts** | Pas d’historique commit d’action. |
| **Risques** | Perte si cleanup précoce. |
| **Dette** | GO ultérieur possible. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-12 — Stratégie de stockage

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie de stockage |
| **Proposition** | **SQLite** = source opérationnelle (sessions, états, locks, idempotence, tentatives, index, corrélations). **Fichiers append-only** = artefacts immuables (contrats, gates, rapports, diffs, preuves, journaux). Git = vérité documentaire. Pas de DB cloud OPS1. |
| **Alternatives** | SGBD cloud ; mémoire seule. |
| **Justification** | Proportionné. |
| **Impacts** | Ops locale. |
| **Risques** | Backup local. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 2 — SQLite = source opérationnelle (sessions/états/locks/idempotence/tentatives/index) ; fichiers append-only = artefacts immuables ; Git = vérité documentaire ; pas de cloud DB. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-13 — Modèle de continuation

| Champ | Contenu |
|-------|---------|
| **Sujet** | Modèle de continuation |
| **Proposition** | Continuation liée : nouvel id + `parentSessionId` ; source immuable. |
| **Alternatives** | Réouvrir CLOSED ; cloner mutable. |
| **Justification** | FD-CAND-13. |
| **Impacts** | Modèle session plus riche. |
| **Risques** | Confusion UX. |
| **Dette** | UX-R02 microcopy. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-14 — Idempotence

| Champ | Contenu |
|-------|---------|
| **Sujet** | Idempotence |
| **Proposition** | Distinguer `contractHash` (contrat immuable) et `executionAttemptId` (tentative). Une seule tentative active ; aucun retry auto ; nouvelle tentative = décision Morris ; toutes les tentatives conservées. |
| **Alternatives** | Retries auto N fois. |
| **Justification** | Anti double exécution. |
| **Impacts** | Pas de self-heal. |
| **Risques** | Intervention Morris. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 3 — `contractHash` immuable vs `executionAttemptId` ; une tentative active ; pas de retry auto ; nouvelle tentative = GO Morris ; conservation de toutes les tentatives. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-15 — Verrouillage concurrent

| Champ | Contenu |
|-------|---------|
| **Sujet** | Verrouillage concurrent |
| **Proposition** | Lock exclusif pendant PREPARING/EXECUTING. |
| **Alternatives** | Optimistic only. |
| **Justification** | Évite courses. |
| **Impacts** | Complexité store. |
| **Risques** | Deadlocks. |
| **Dette** | Timeout lock candidat OPEN. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 3 — lock sur (contractHash, tentative active). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-16 — Récupération après crash

| Champ | Contenu |
|-------|---------|
| **Sujet** | Récupération après crash |
| **Proposition** | Reprise en lecture + décision Morris ; pas de resume opaque. Nouvelle tentative d’exécution uniquement sous décision Morris explicite (Amendement 3). |
| **Alternatives** | Auto-resume Cursor. |
| **Justification** | Contrôle Morris. |
| **Impacts** | Temps manuel. |
| **Risques** | État orphelin. |
| **Dette** | Réconciliation manuelle. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 3 — reprise lecture + décision Morris ; pas de resume opaque ; nouvelle tentative explicite. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-17 — Rapport incomplet

| Champ | Contenu |
|-------|---------|
| **Sujet** | Rapport incomplet |
| **Proposition** | État `REPORT_INCOMPLETE` ; interdit COMPLETED silencieux ; interdit relance auto ; nouvelle tentative sous décision Morris ; conserver preuves de l’échec. |
| **Alternatives** | COMPLETED avec dette. |
| **Justification** | Intégrité preuve. |
| **Impacts** | Friction. |
| **Risques** | Nouveaux contrats. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 3 — REPORT_INCOMPLETE : pas COMPLETED silencieux ; pas relance auto ; nouvelle tentative sous décision Morris. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-18 — Audit append-only

| Champ | Contenu |
|-------|---------|
| **Sujet** | Audit append-only |
| **Proposition** | Journal d’événements append-only corrélé. |
| **Alternatives** | Logs rotatifs destructifs. |
| **Justification** | Traçabilité. |
| **Impacts** | Volume stockage. |
| **Risques** | Rétention candidate. |
| **Dette** | RGPD rétention OPEN. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-19 — Observabilité

| Champ | Contenu |
|-------|---------|
| **Sujet** | Observabilité |
| **Proposition** | Événements minimaux §15 doc 57 + métriques durée/fichiers. |
| **Alternatives** | APM complet immédiat. |
| **Justification** | Suffisant OPS1. |
| **Impacts** | Visibilité limitée. |
| **Risques** | Étendre plus tard. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-20 — CI documentaire minimale

| Champ | Contenu |
|-------|---------|
| **Sujet** | CI documentaire minimale |
| **Proposition** | CI locale socle dès implémentation (contrat/hash/HEAD/allowlist/paths/symlinks/secrets/diff-check/rapport). CI PR (lint/liens/refs/gates/protégés/preuves/PN) = cycle Intégration/DevOps. Hors scope : delivery/deploy/release/prod. |
| **Alternatives** | CI delivery complète. |
| **Justification** | Routage scénario. |
| **Impacts** | Pas d’automatisation tant que non outillée. |
| **Risques** | Faux sentiment de couverture. |
| **Dette** | Branchage sous delivery GO. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | Amendement 4 — CI locale socle (contrat/hash/HEAD/allowlist/paths/symlinks/secrets/diff-check/rapport) ; CI PR = cycle Intégration/DevOps ; hors scope = delivery/deploy/release/prod. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-21 — Politique de cleanup

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique de cleanup |
| **Proposition** | Cleanup workspace/branche seulement après GO Morris distinct. |
| **Alternatives** | Cleanup auto fin de session. |
| **Justification** | Préserve preuves. |
| **Impacts** | Branches orphelines. |
| **Risques** | Procédure ops. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-22 — FinOps

| Champ | Contenu |
|-------|---------|
| **Sujet** | FinOps |
| **Proposition** | Compteurs/alertes/confirmation ; **aucun seuil numérique** ; FD-CAND-15 maintenue. |
| **Alternatives** | Fixer tokens/€ maintenant. |
| **Justification** | Évite fausse précision. |
| **Impacts** | Coût live non borné numériquement. |
| **Risques** | Gate FinOps/live. |
| **Dette** | FD-CAND-15 |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-23 — Condition d’ouverture backlog

| Champ | Contenu |
|-------|---------|
| **Sujet** | Condition d’ouverture backlog |
| **Proposition** | Backlog OPS1 seulement après `G-OPS1-TECH-ARCH-VAL` + GO backlog distinct. |
| **Alternatives** | Ouvrir backlog dès ce document. |
| **Justification** | Routage SFIA. |
| **Impacts** | Retarde stories. |
| **Risques** | Pression à coder. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-24 — Condition d’ouverture delivery

| Champ | Contenu |
|-------|---------|
| **Sujet** | Condition d’ouverture delivery |
| **Proposition** | Delivery seulement après backlog + GO delivery distinct. |
| **Alternatives** | Coder dès tech-arch candidate. |
| **Justification** | Évite implémentation prématurée. |
| **Impacts** | Pas de code maintenant. |
| **Risques** | Attente. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-25 — Inclusion gateDecision dans hash

| Champ | Contenu |
|-------|---------|
| **Sujet** | Inclusion gateDecision dans hash |
| **Proposition** | Hash pré-gate du contrat ; décision gate journalisée séparément (lien `contractHash`). |
| **Alternatives** | Inclure GO dans le même hash mutable. |
| **Justification** | Évite mutation post-GO. |
| **Impacts** | Deux artefacts à corréler. |
| **Risques** | Confusion opérationnelle. |
| **Dette** | Arbitrage Morris utile. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |
## OPS1-TECH-CAND-26 — Bloquer Git remote dans runner

| Champ | Contenu |
|-------|---------|
| **Sujet** | Bloquer Git remote dans runner |
| **Proposition** | Wrapper/policy refusant push/fetch write/PR/merge. |
| **Alternatives** | Confiance à la discipline humaine. |
| **Justification** | Exigence scénario. |
| **Impacts** | Friction debug. |
| **Risques** | Bypass local root. |
| **Dette** | Défense en profondeur. |
| **Réserve** | — |
| **Recommandation** | Proposition **retenue** sous validation avec amendements. |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL — Morris — 2026-07-20 19:17:11 CEST` |


---

## 3. Couverture minimale

| Thème | CAND |
|-------|------|
| Isolation / worktree / réseau / secrets | 01–04 |
| Paths / symlinks / canonicalisation / hash / HEAD | 05–09 |
| Branche / commit / stockage / continuation | 10–13 |
| Idempotence / lock / crash / rapport | 14–17 |
| Audit / observabilité / CI / cleanup | 18–21 |
| FinOps / backlog / delivery / hash-gate / remote | 22–26 |

---

## 4. Réserves

- FD-CAND-15 maintenue
- UX-R01…R04 maintenues
- Worktree ≠ sandbox OS forte (mitigée par runner)
- CI PR non branchée ici (cycle Intégration/DevOps)
- Seuils FinOps / timeouts numériques OPEN
- Backlog / delivery / live / MVP **fermés**
- Stack / fournisseur **non finalisés**

---

## 5. Anti-claims

Pas de READY FOR IMPLEMENTATION · READY FOR DELIVERY · STACK FINALIZED · LIVE READY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · SANDBOX STRONG ISOLATION · FULL CI IMPLEMENTED.

---

## 6. Verdict

`technical-decisions-validated-with-amendments`

`OPS1 TECHNICAL ARCHITECTURE VALIDATED WITH AMENDMENTS — G-OPS1-TECH-ARCH-VAL`

`GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`

26 / 26 décisions validées avec amendements. Identifiants historiques conservés.
