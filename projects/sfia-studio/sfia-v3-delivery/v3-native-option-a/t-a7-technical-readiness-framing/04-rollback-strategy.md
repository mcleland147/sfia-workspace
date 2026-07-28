# 04 — Stratégie de rollback

| Champ | Valeur |
|-------|--------|
| **Document** | `04-rollback-strategy.md` |
| **Statut** | `DOCUMENTED — NOT TESTED — NOT AUTHORIZED` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Commandes destructives** | **aucune** fournie |

> Aucun niveau R1–R3 n’est autorisé ni testé dans ce cycle. R0 seul est naturellement réversible (revert Git du pack).

---

## R0 — Rollback documentaire

| Champ | Valeur |
|-------|--------|
| **Trigger** | erreur de cadrage · contradiction gouvernance · décision Morris d’annuler le pack |
| **Owner** | Morris / Cursor sous gate doc |
| **Préconditions** | pack non consommé comme autorisation technique |
| **Mécanisme** | `git revert` du commit de framing (ou revert merge futur si intégré) |
| **Preuves** | SHA parent = `2a3c59c…` · tree pack isolé |
| **Durée** | immédiate (Git) |
| **Impact** | documentation uniquement · **aucune** conséquence runtime |
| **Point de non-retour** | aucun (tant que non exécuté techniquement) |
| **Gate Morris** | non requis pour revert local non poussé ; revert sur main = gate doc |

---

## R1 — Rollback de préparation technique future

| Champ | Valeur |
|-------|--------|
| **Trigger** | échec design/tests bornés · régression MethodMode / allowlist · frontière OPS1 ambiguë |
| **Owner** | owner technique + Morris |
| **Préconditions** | prep technique **préalablement** autorisée par gate distinct · backups configs |
| **Mécanisme candidat** | restaurer configs / feature holds · rétablir MethodMode deps existantes · restore allowlist / path-policy · **sans** perte d’historique Git |
| **Preuves** | tests D1 verts · import boundaries · digest canonical inchangé ou re-pin |
| **Durée** | heures (cible) |
| **Impact** | retour état pré-prep · historique conservé |
| **Point de non-retour** | migration données non réversible sans R2 |
| **Gate Morris** | obligatoire avant et après |

**Interdit ici :** commandes de purge · force-delete `.sfia-exec` · rewrite history.

---

## R2 — Rollback de delivery futur

| Champ | Valeur |
|-------|--------|
| **Trigger** | CI rouge post-merge delivery · violation SC-02/03 · régression P03–P08 |
| **Owner** | owner delivery + Morris |
| **Préconditions** | delivery autorisée par gate C · snapshots DB/config disponibles |
| **Mécanisme candidat** | revert merge delivery · restore package pin / digest · restore allowlist · restore ruleset si touché · contrôle migrations (forward-only vs down) |
| **Ordre de restauration candidat** | (1) hold flags ON · (2) revert code · (3) restore config/ACL · (4) vérifier lectures method/OA · (5) preuves CI |
| **Preuves** | CI required green · smoke MethodMode · OPS1 e2e I1–I6 si touché |
| **Durée** | à définir au gate C |
| **Impact** | code + config · données selon migration |
| **Point de non-retour** | migration destructive sans backup |
| **Gate Morris** | obligatoire |

---

## R3 — Rollback de cutover futur

| Champ | Valeur |
|-------|--------|
| **Trigger** | cutover partiel · mutation historique · perte audit · P07–P11 non tenus |
| **Owner** | Morris (autorité) + owner RUN/sécu |
| **Préconditions** | cutover autorisé par gate D · rollback testé (P23) · backups |
| **Mécanisme candidat** | réactivation holds P07–P09 · restore ACL historique · restore DB/snapshot · réouverture lecture legacy contrôlée · **intégrité** audit |
| **Réversibilité** | doit être démontrée **avant** cutover (SC-06) |
| **Intégrité données / historique** | Git vérité · vue RO non concurrente · pas de rewrite silent |
| **Délai maximal candidat** | à fixer au gate D (non inventé ici) |
| **Preuves** | RUN metrics · audit trail · tests RO deny-write · health F11.2 |
| **Point de non-retour** | purge historique · IAM cutover sans revoke path |
| **Gate Morris** | obligatoire · pas de reprise auto après STOP |

---

## Synthèse

| Niveau | Autorisé maintenant | Testé | Runtime impact |
|--------|---------------------|-------|----------------|
| R0 | oui (doc locale) | n/a Git | aucun |
| R1 | non | non | futur |
| R2 | non | non | futur |
| R3 | non | non | futur |

---

## Anti-claims

- rollback documenté ≠ rollback testé ;
- R0 ≠ autorisation R1–R3 ;
- hold flag documenté ≠ hold implémenté ;
- backup mentionné ≠ backup existant mesuré.

---

## Verdict section

`ROLLBACK R0–R3 DOCUMENTED — NOT TESTED — NOT AUTHORIZED — NO DESTRUCTIVE COMMANDS`
